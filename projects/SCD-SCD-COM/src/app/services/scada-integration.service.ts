// scada-integration.service.ts

import { Injectable, OnDestroy } from '@angular/core';
import { Subscription, BehaviorSubject, Observable } from 'rxjs';
import { SCADAService, ServerInfo, ServerConfig, WriteResult } from './scada.service';

export interface ScadaDisplayConfig {
  local: {
    temperatureTag: string;
    pressureTag: string;
    flowRateTag: string;
    levelTag: string;
    productionTag: string;
  };
  remote: {
    temperatureTag: string;
    pressureTag: string;
    flowRateTag: string;
    levelTag: string;
    productionTag: string;
  };
  units?: {
    temperature?: string;
    pressure?: string;
    flowRate?: string;
    level?: string;
    production?: string;
  };
}
export interface ScadaData {
  // Raw tag values - no mapping
  rawTagValues: any;
  connectionStatus: boolean;
  servers: ServerInfo[];
  currentServer: string;
}

export interface ScadaChangeEvent {
  type: 'tag' | 'connection' | 'server';
  tagName?: string;
  serverName?: string;
  oldValue?: any;
  newValue?: any;
  fullData?: any;
}

@Injectable({
  providedIn: 'root'
})

export class ScadaIntegrationService implements OnDestroy {
  // ============= NEW: Raw data subject =============
  private rawDataSubject = new BehaviorSubject<any>({});
  public rawData$ = this.rawDataSubject.asObservable();
  
  private previousValues = new WeakMap<any, any>();
  private serversSubject = new BehaviorSubject<ServerInfo[]>([]);
  private selectedServerIdSubject = new BehaviorSubject<number>(0);
  
  public servers$ = this.serversSubject.asObservable();
  public selectedServerId$ = this.selectedServerIdSubject.asObservable();

  // ============= Persistence and Sync Properties =============
  private readonly STORAGE_KEY = 'scada_servers_config';
  private pendingSyncServers: ServerInfo[] = [];
  private isSyncing = false;
  private syncRetryInterval: any;
  private backendAvailable = new BehaviorSubject<boolean>(true);
  private readonly SYNC_INTERVAL = 3000; // 3 seconds

  constructor(private scadaService: SCADAService) {
    // Initialize from storage
    this.initializeFromStorage();
    
    // Monitor backend
    this.monitorBackend();
    
    // Subscribe to raw tag values and pass through
    this.scadaService.getTagValues().subscribe(values => {
      console.log("opcua:rawTagValues", values);
      this.rawDataSubject.next(values);
    });
    
    // Subscribe to servers and update subject
    this.scadaService.getServers().subscribe(servers => {
      console.log("opcua:getServers:servers", servers);
      
      if (servers && servers.length > 0) {
        this.serversSubject.next(servers);
        this.persistServersToStorage(servers);
      } else {
        this.handleEmptyServerList();
      }
    });
  }

  // ============= NEW: Raw Data Access Methods =============
  
  /**
   * Get raw tag values as observable
   */
  getRawTagValues(): Observable<any> {
    return this.rawData$;
  }

  /**
   * Get current raw tag values
   */
  getCurrentRawTagValues(): any {
    return this.rawDataSubject.getValue();
  }

  /**
   * Get a specific tag value by its key
   */
  getTagValue(tagKey: string): any {
    const rawData = this.rawDataSubject.getValue();
    return rawData[tagKey] || null;
  }

  /**
   * Get all tag keys (server:tag format)
   */
  getTagKeys(): string[] {
    const rawData = this.rawDataSubject.getValue();
    return Object.keys(rawData);
  }

  /**
   * Get tags for a specific server
   */
  getTagsForServer(serverName: string): any {
    const rawData = this.rawDataSubject.getValue();
    const result: any = {};
    const prefix = `${serverName}:`;
    
    for (const [key, value] of Object.entries(rawData)) {
      if (key.startsWith(prefix)) {
        const tagName = key.substring(prefix.length);
        result[tagName] = value;
      }
    }
    
    return result;
  }

  /**
   * Get all server names from tag data
   */
  getServerNamesFromTags(): string[] {
    const rawData = this.rawDataSubject.getValue();
    const serverNames = new Set<string>();
    
    for (const key of Object.keys(rawData)) {
      const colonIndex = key.indexOf(':');
      if (colonIndex > 0) {
        serverNames.add(key.substring(0, colonIndex));
      }
    }
    
    return Array.from(serverNames);
  }

  // ============= Component Integration (Simplified) =============
  
  /**
   * Initialize SCADA for component - now just sets up subscriptions
   * Component is responsible for mapping data
   */
  public initScadaForComponent(
  component: any,
  configOrCallback?: Partial<ScadaDisplayConfig> | ((changes: ScadaChangeEvent[]) => void),
  onDataChange?: (changes: ScadaChangeEvent[]) => void
): Subscription[] {
  // Determine if second param is config or callback
  let config: Partial<ScadaDisplayConfig> | undefined;
  let callback: ((changes: ScadaChangeEvent[]) => void) | undefined;
  
  if (typeof configOrCallback === 'function') {
    // Called as: initScadaForComponent(component, callback)
    callback = configOrCallback;
  } else if (configOrCallback && typeof configOrCallback === 'object') {
    // Called as: initScadaForComponent(component, config, callback)
    config = configOrCallback;
    callback = onDataChange;
  } else if (configOrCallback === undefined) {
    // Called as: initScadaForComponent(component)
    // No config, no callback
  }

  const subscriptions: Subscription[] = [];

  // Initialize previous values for change detection
  this.previousValues.set(component, {
    rawTagValues: {},
    connectionStatus: false
  });

  // Initialize component SCADA properties
  if (component.scadaData === undefined) {
    component.scadaData = this.getDefaultScadaData();
  }

  // Subscribe to raw tag values - no mapping
  subscriptions.push(
    this.rawData$.subscribe(rawValues => {
      const prev = this.previousValues.get(component);
      const changes: ScadaChangeEvent[] = [];
      
      if (prev) {
        const oldRaw = prev.rawTagValues || {};
        const newRaw = rawValues || {};
        
        const allKeys = new Set([...Object.keys(oldRaw), ...Object.keys(newRaw)]);
        
        for (const key of allKeys) {
          const oldValue = oldRaw[key];
          const newValue = newRaw[key];
          
          if (JSON.stringify(oldValue) !== JSON.stringify(newValue)) {
            changes.push({
              type: 'tag',
              tagName: key,
              oldValue: oldValue,
              newValue: newValue
            });
          }
        }
      }
      
      if (prev) {
        prev.rawTagValues = rawValues;
      }
      
      component.scadaData.rawTagValues = rawValues;
      component.rawTagValues = rawValues;
      
      if (changes.length > 0 && callback) {
        callback(changes);
      }
    })
  );

  // Subscribe to connection status
  subscriptions.push(
    this.scadaService.getConnectionStatus().subscribe(status => {
      const prev = this.previousValues.get(component);
      if (prev && prev.connectionStatus !== status) {
        prev.connectionStatus = status;
        component.scadaData.connectionStatus = status;
        component.scadaConnectionStatus = status;
        
        if (callback) {
          callback([{
            type: 'connection',
            oldValue: prev.connectionStatus,
            newValue: status
          }]);
        }
      }
    })
  );

  return subscriptions;
}

  // ============= Storage Management Methods =============
  
  private initializeFromStorage(): void {
    const stored = this.loadServersFromStorage();
    if (stored && stored.length > 0) {
      console.log(`📦 Loaded ${stored.length} servers from storage`);
      this.serversSubject.next(stored);
    }
  }

  private persistServersToStorage(servers: ServerInfo[]): void {
    try {
      if (servers && servers.length > 0) {
        localStorage.setItem(this.STORAGE_KEY, JSON.stringify(servers));
        console.log(`💾 Persisted ${servers.length} servers to storage`);
      } else {
        localStorage.removeItem(this.STORAGE_KEY);
        console.log('🗑️ Removed servers from storage (empty list)');
      }
    } catch (error) {
      console.error('Failed to persist servers to storage:', error);
    }
  }

  private loadServersFromStorage(): ServerInfo[] {
    try {
      const data = localStorage.getItem(this.STORAGE_KEY);
      if (data) {
        const parsed = JSON.parse(data);
        return Array.isArray(parsed) ? parsed : [];
      }
      return [];
    } catch (error) {
      console.error('Failed to load servers from storage:', error);
      return [];
    }
  }

  private clearServersFromStorage(): void {
    try {
      localStorage.removeItem(this.STORAGE_KEY);
      console.log('🗑️ Cleared servers from storage');
    } catch (error) {
      console.error('Failed to clear servers from storage:', error);
    }
  }

  // ============= Backend Monitoring Methods =============
  
  private monitorBackend(): void {
    const checkBackend = async () => {
      try {
        await this.scadaService.getServers().toPromise();
        const wasDown = !this.backendAvailable.getValue();
        this.backendAvailable.next(true);
        
        if (wasDown) {
          console.log('🔄 Backend recovered - initiating sync...');
          await this.syncServersToBackend();
        }
      } catch (error) {
        const wasAvailable = this.backendAvailable.getValue();
        this.backendAvailable.next(false);
        if (wasAvailable) {
          console.warn('⚠️ Backend became unavailable');
        }
      }
    };

    this.syncRetryInterval = setInterval(checkBackend, this.SYNC_INTERVAL);
    checkBackend();
  }

  private async handleEmptyServerList(): Promise<void> {
    const stored = this.loadServersFromStorage();
    if (stored && stored.length > 0) {
      console.log(`📋 Backend empty, restoring ${stored.length} servers from storage...`);
      await this.syncServersToBackend(stored);
    }
  }

  private async syncServersToBackend(servers?: ServerInfo[]): Promise<void> {
    if (this.isSyncing) {
      console.log('⏳ Sync already in progress, skipping...');
      return;
    }
    
    this.isSyncing = true;
    console.log('🔄 Starting server sync to backend...');

    const serversToSync = servers || this.serversSubject.getValue();
    const syncedServers: ServerInfo[] = [];
    const failedServers: ServerInfo[] = [];

    for (const server of serversToSync) {
      try {
        const result = await this.scadaService.addServer(server.name, server.endpoint);
        if (result) {
          syncedServers.push(result);
          console.log(`✅ Synced server: ${server.name} (${server.endpoint})`);
        } else {
          failedServers.push(server);
          console.warn(`❌ Failed to sync server: ${server.name}`);
        }
      } catch (error) {
        failedServers.push(server);
        console.error(`❌ Error syncing server ${server.name}:`, error);
      }
    }

    if (syncedServers.length > 0) {
      this.serversSubject.next(syncedServers);
      this.persistServersToStorage(syncedServers);
      console.log(`✅ Synced ${syncedServers.length} servers successfully`);
    }

    if (failedServers.length > 0) {
      console.warn(`⚠️ ${failedServers.length} servers failed to sync, will retry later`);
      this.pendingSyncServers = failedServers;
    } else {
      this.pendingSyncServers = [];
    }

    this.isSyncing = false;
  }

  // ============= Server Management Methods =============
  
  getServers(): ServerInfo[] {
    return this.serversSubject.getValue();
  }

  getServersObservable(): Observable<ServerInfo[]> {
    return this.serversSubject.asObservable();
  }

  getSelectedServerId(): number {
    return this.selectedServerIdSubject.getValue();
  }

  setSelectedServerId(serverId: number): void {
    this.selectedServerIdSubject.next(serverId);
  }

  getSelectedServer(): ServerInfo | null {
    const servers = this.serversSubject.getValue();
    const selectedId = this.selectedServerIdSubject.getValue();
    return servers.find(s => s.id === selectedId) || (servers.length > 0 ? servers[0] : null);
  }

  async addServer(name: string, endpoint: string): Promise<ServerInfo | null> {
    const currentServers = this.serversSubject.getValue();
    const existingServer = currentServers.find(
      s => s.endpoint.toLowerCase() === endpoint.toLowerCase()
    );
    
    if (existingServer) {
      console.warn(`⚠️ Server with endpoint "${endpoint}" already exists (ID: ${existingServer.id})`);
      return existingServer;
    }

    if (!this.backendAvailable.getValue()) {
      console.warn('⚠️ Backend is down, adding server to local storage...');
      
      const tempServer: ServerInfo = {
        id: Date.now(),
        name: name,
        endpoint: endpoint,
        status: 'pending',
        connected: false,
        tagsCount: 0,
        createdAt: new Date().toISOString(),
        errorCount: 0,
        reconnectAttempts: 0,
        lastUpdate: new Date().toISOString()
      };
      
      const updatedServers = [...currentServers, tempServer];
      this.serversSubject.next(updatedServers);
      this.persistServersToStorage(updatedServers);
      
      console.log(`📝 Server "${name}" added locally (pending sync)`);
      return tempServer;
    }

    try {
      const result = await this.scadaService.addServer(name, endpoint);
      
      if (result) {
        this.scadaService.getServers().subscribe(servers => {
          if (servers && servers.length > 0) {
            this.serversSubject.next(servers);
            this.persistServersToStorage(servers);
            console.log(`✅ Server "${name}" added successfully to backend`);
          }
        });
        return result;
      } else {
        console.warn(`⚠️ Failed to add server "${name}" to backend`);
        return null;
      }
    } catch (error) {
      console.error(`❌ Error adding server "${name}":`, error);
      
      const tempServer: ServerInfo = {
        id: Date.now(),
        name: name,
        endpoint: endpoint,
        status: 'pending',
        connected: false,
        tagsCount: 0,
        createdAt: new Date().toISOString(),
        errorCount: 1,
        reconnectAttempts: 0,
        lastUpdate: new Date().toISOString()
      };
      
      const updatedServers = [...currentServers, tempServer];
      this.serversSubject.next(updatedServers);
      this.persistServersToStorage(updatedServers);
      
      console.log(`📝 Server "${name}" stored locally (pending sync)`);
      return tempServer;
    }
  }

  async removeServer(serverId: number): Promise<boolean> {
    const serverToRemove = this.serversSubject.getValue().find(s => s.id === serverId);
    
    if (!serverToRemove) {
      console.warn(`⚠️ Server with ID ${serverId} not found`);
      return false;
    }

    if (serverToRemove.status === 'pending') {
      const currentServers = this.serversSubject.getValue();
      const updatedServers = currentServers.filter(s => s.id !== serverId);
      this.serversSubject.next(updatedServers);
      this.persistServersToStorage(updatedServers);
      console.log(`🗑️ Removed pending server "${serverToRemove.name}" from local storage`);
      return true;
    }

    try {
      const result = await this.scadaService.removeServer(serverId);
      
      if (result) {
        this.scadaService.getServers().subscribe(servers => {
          if (servers && servers.length > 0) {
            this.serversSubject.next(servers);
            this.persistServersToStorage(servers);
          } else {
            this.serversSubject.next([]);
            this.clearServersFromStorage();
          }
          
          if (this.selectedServerIdSubject.getValue() === serverId && servers.length > 0) {
            this.selectedServerIdSubject.next(servers[0].id);
          }
        });
        console.log(`✅ Server "${serverToRemove.name}" removed successfully`);
        return true;
      }
      return false;
    } catch (error) {
      console.error(`❌ Error removing server "${serverToRemove.name}":`, error);
      return false;
    }
  }

  async updateServer(serverId: number, name: string, endpoint: string): Promise<boolean> {
    const serverToUpdate = this.serversSubject.getValue().find(s => s.id === serverId);
    
    if (!serverToUpdate) {
      console.warn(`⚠️ Server with ID ${serverId} not found`);
      return false;
    }

    if (serverToUpdate.status === 'pending') {
      const currentServers = this.serversSubject.getValue();
      const updatedServers = currentServers.map(s => 
        s.id === serverId ? { ...s, name, endpoint } : s
      );
      this.serversSubject.next(updatedServers);
      this.persistServersToStorage(updatedServers);
      console.log(`📝 Updated pending server "${name}" locally`);
      return true;
    }

    try {
      const result = await this.scadaService.updateServer(serverId, name, endpoint);
      
      if (result) {
        this.scadaService.getServers().subscribe(servers => {
          if (servers && servers.length > 0) {
            this.serversSubject.next(servers);
            this.persistServersToStorage(servers);
          }
        });
        console.log(`✅ Server "${name}" updated successfully`);
        return true;
      }
      return false;
    } catch (error) {
      console.error(`❌ Error updating server "${name}":`, error);
      return false;
    }
  }

  async writeTag(serverIdOrName: number | string, tagName: string, value: any): Promise<WriteResult> {
    return this.scadaService.writeTag(serverIdOrName, tagName, value);
  }

  async getTagHistory(serverIdOrName: number | string, tagName: string, hours: number = 24): Promise<any[]> {
    return this.scadaService.getTagHistory(serverIdOrName, tagName, hours);
  }

  async forceSync(): Promise<void> {
    console.log('🔄 Manual sync triggered...');
    await this.syncServersToBackend();
  }

  isBackendAvailable(): boolean {
    return this.backendAvailable.getValue();
  }

  getPendingServersCount(): number {
    return this.serversSubject.getValue().filter(s => s.status === 'pending').length;
  }

  // ============= Polling Methods =============

  enablePolling(): void {
    this.scadaService.enablePolling();
  }

  disablePolling(): void {
    this.scadaService.disablePolling();
  }

  isPollingActive(): boolean {
    return this.scadaService.isPollingActive();
  }

  async refreshData(): Promise<void> {
    await this.scadaService.refreshData();
  }

  // ============= Helper Methods =============
  
  private getDefaultScadaData(): any {
    return {
      rawTagValues: {},
      connectionStatus: false,
      servers: [],
      currentServer: 'Local'
    };
  }

  // ============= Cleanup =============
  
  ngOnDestroy(): void {
    if (this.syncRetryInterval) {
      clearInterval(this.syncRetryInterval);
      console.log('🧹 Cleaned up sync interval');
    }
  }
}