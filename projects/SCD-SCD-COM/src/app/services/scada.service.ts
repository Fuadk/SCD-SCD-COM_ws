// src/app/services/scada.service.ts

import { Injectable, NgZone } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

export interface ServerInfo {
  id: number;
  name: string;
  endpoint: string;
  status: string;
  connected: boolean;
  tagsCount: number;
  createdAt: string;
  errorCount?: number;
  reconnectAttempts?: number;
  lastUpdate?: string;
}

export interface ServerConfig {
  id: number;
  name: string;
  endpoint: string;
  status: string;
  tagsCount: number;
  createdAt: string;
}

export interface Alarm {
  id: number;
  server_id?: number;
  server_name?: string;
  tag_name: string;
  node_id?: string;
  message: string;
  severity: string;
  acknowledged: boolean;
  timestamp: string;
}

export interface WriteResult {
  success: boolean;
  error?: string;
}

@Injectable({
  providedIn: 'root'
})

export class SCADAService {
  private OPCUA_SERVER_BASE = environment.OPCUA_SERVER_BASE;
  private tagValues = new BehaviorSubject<any>({});
  private alarms = new BehaviorSubject<Alarm[]>([]);
  private servers = new BehaviorSubject<ServerInfo[]>([]);
  private currentServer = new BehaviorSubject<string>('Local');
  private connectionStatus = new BehaviorSubject<boolean>(false);
  private pollingInterval: any;
  private isPollingEnabled: boolean = true;
  
  // ✅ Track if servers have been loaded
  private isServersLoaded: boolean = false;

  constructor(
    private http: HttpClient,
    private ngZone: NgZone
  ) {
    console.log('opcua:SCADAService constructor - using HTTP polling');
    this.loadInitialData();
    this.startPolling();
  }

  // ============= Polling Control Methods =============
  
  /**
   * Enable real-time polling (default state)
   */
  enablePolling(): void {
    if (!this.isPollingEnabled) {
      console.log('opcua:✅ Enabling SCADA polling');
      this.isPollingEnabled = true;
      this.startPolling();
    }
  }

  /**
   * Disable real-time polling (use when entering edit mode)
   */
  disablePolling(): void {
    if (this.isPollingEnabled) {
      console.log('opcua:⏸️ Disabling SCADA polling');
      this.isPollingEnabled = false;
      if (this.pollingInterval) {
        clearInterval(this.pollingInterval);
        this.pollingInterval = null;
      }
    }
  }

  /**
   * Get current polling state
   */
  isPollingActive(): boolean {
    return this.isPollingEnabled;
  }

  /**
   * Manually refresh data (useful after edit mode)
   */
  async refreshData(): Promise<void> {
    console.log('opcua:🔄 Manually refreshing SCADA data');
    await this.loadInitialData();
  }

  // ============= Polling - Tags Only =============
  
  private startPolling(): void {
    // Clear existing interval if any
    if (this.pollingInterval) {
      clearInterval(this.pollingInterval);
    }

    // Only start if polling is enabled
    if (!this.isPollingEnabled) {
      console.log('opcua:Polling is disabled, not starting');
      return;
    }
    console.log('opcua:startPolling - Tags only (servers on demand)');
    this.pollingInterval = setInterval(async () => {
      console.log('opcua:setInterval:', this.isPollingEnabled);
      if (!this.isPollingEnabled) return; // Extra safety check
      
      try {
        console.log('opcua:http.get:', `${this.OPCUA_SERVER_BASE}/tags`);
        const tags = await this.http.get(`${this.OPCUA_SERVER_BASE}/tags`).toPromise();
        console.log('opcua:tags:', tags);
        if (tags) {
          this.ngZone.run(() => {
            this.tagValues.next(tags);
          });
        }
         // const alarms = await this.http.get<Alarm[]>(`${this.OPCUA_SERVER_BASE}/alarms`).toPromise();
        // if (alarms) {
        //   this.ngZone.run(() => {
        //     this.alarms.next(alarms);
        //   });
        // }
        // ✅ REMOVED: Servers are NOT polled here anymore
        // Servers are loaded on demand only
        
      } catch (error) {
        console.error('Polling failed:', error);
        this.ngZone.run(() => {
          this.connectionStatus.next(false);
        });
      }
    }, 2000);
  }

  // ============= Load Initial Data =============
  
  async loadInitialData(): Promise<void> {
    try {
      // Load tags
      const tags = await this.http.get(`${this.OPCUA_SERVER_BASE}/tags`).toPromise();
      if (tags) {
        this.tagValues.next(tags);
      }
      
      // ✅ Load servers ONCE on initialization
      await this.loadServers();
      
    } catch (error) {
      console.error('Failed to load initial data:', error);
    }
  }

  // ============= Servers - ON DEMAND ONLY =============
  
  /**
   * Load servers from backend - Call this when you need server data
   */
  async loadServers(): Promise<ServerInfo[]> {
    console.log('opcua:🔄 Loading servers on demand');
    try {
      const servers = await this.http.get<ServerInfo[]>(`${this.OPCUA_SERVER_BASE}/servers`).toPromise();
      if (servers) {
        this.ngZone.run(() => {
          const serversWithConnected = servers.map(s => ({
            ...s,
            connected: s.status === 'connected'
          }));
          this.servers.next(serversWithConnected);
          this.connectionStatus.next(serversWithConnected.some(s => s.connected));
          this.isServersLoaded = true;
        });
        return servers;
      }
      return [];
    } catch (error) {
      console.error('Failed to load servers:', error);
      return [];
    }
  }

  /**
   * Refresh servers - Call this when you need updated server status
   */
  async refreshServers(): Promise<ServerInfo[]> {
    console.log('opcua:🔄 Refreshing servers on demand');
    return this.loadServers();
  }

  /**
   * Get servers as observable (for components that subscribe)
   * Will auto-load if servers haven't been loaded yet
   */
  getServers(): Observable<ServerInfo[]> {
    // If servers haven't been loaded yet, trigger a load
    if (!this.isServersLoaded) {
      console.log('opcua:getServers - Auto-loading servers');
      this.loadServers();
    }
    return this.servers.asObservable();
  }

  /**
   * Get current server list (synchronous)
   */
  getCurrentServers(): ServerInfo[] {
    return this.servers.getValue();
  }

  /**
   * Check if servers are loaded
   */
  areServersLoaded(): boolean {
    return this.isServersLoaded;
  }

  // ============= Other Getters =============
  
  getCurrentServer(): Observable<string> {
    return this.currentServer.asObservable();
  }

  setCurrentServer(server: string): void {
    this.currentServer.next(server);
  }

  getTagValues(): Observable<any> {
    return this.tagValues.asObservable();
  }

  getAlarms(): Observable<Alarm[]> {
    return this.alarms.asObservable();
  }

  getConnectionStatus(): Observable<boolean> {
    return this.connectionStatus.asObservable();
  }

  // ============= Server Management APIs =============
  
  async addServer(name: string, endpoint: string): Promise<ServerInfo | null> {
    try {
      const response = await this.http.post<{ server: ServerInfo }>(`${this.OPCUA_SERVER_BASE}/servers`, { name, endpoint }).toPromise();
      if (response?.server) {
        const serverWithConnected = {
          ...response.server,
          connected: response.server.status === 'connected'
        };
        // ✅ Refresh servers after adding
        await this.refreshServers();
        return serverWithConnected;
      }
      return null;
    } catch (error) {
      console.error('Failed to add server:', error);
      return null;
    }
  }

  async removeServer(serverId: number): Promise<boolean> {
    try {
      await this.http.delete(`${this.OPCUA_SERVER_BASE}/servers/${serverId}`).toPromise();
      // ✅ Refresh servers after removal
      await this.refreshServers();
      return true;
    } catch (error) {
      console.error('Failed to remove server:', error);
      return false;
    }
  }

  async updateServer(serverId: number, name: string, endpoint: string): Promise<boolean> {
    try {
      await this.http.put(`${this.OPCUA_SERVER_BASE}/servers/${serverId}`, { name, endpoint }).toPromise();
      // ✅ Refresh servers after update
      await this.refreshServers();
      return true;
    } catch (error) {
      console.error('Failed to update server:', error);
      return false;
    }
  }

  async writeTag(serverIdOrName: number | string, tagName: string, value: any): Promise<WriteResult> {
    try {
      let serverId: number;
      if (typeof serverIdOrName === 'string') {
        const servers = this.servers.getValue();
        const server = servers.find(s => s.name === serverIdOrName);
        if (!server) {
          return { success: false, error: `Server ${serverIdOrName} not found` };
        }
        serverId = server.id;
      } else {
        serverId = serverIdOrName;
      }
      
      await this.http.post(`${this.OPCUA_SERVER_BASE}/write`, { serverId, tag: tagName, value }).toPromise();
      return { success: true };
    } catch (err: any) {
      console.error('Write failed:', err);
      return { success: false, error: err.message || 'Write failed' };
    }
  }

  async acknowledgeAlarm(alarmId: number): Promise<boolean> {
    try {
      await this.http.post(`${this.OPCUA_SERVER_BASE}/alarms/${alarmId}/acknowledge`, {}).toPromise();
      return true;
    } catch (error) {
      return false;
    }
  }

  async getTagHistory(serverIdOrName: number | string, tagName: string, hours: number = 24): Promise<any[]> {
    try {
      let serverId: number;
      if (typeof serverIdOrName === 'string') {
        const servers = this.servers.getValue();
        const server = servers.find(s => s.name === serverIdOrName);
        if (!server) {
          return [];
        }
        serverId = server.id;
      } else {
        serverId = serverIdOrName;
      }
      
      const response = await this.http.get(`${this.OPCUA_SERVER_BASE}/history/${serverId}/${tagName}/${hours}`).toPromise();
      return response as any[];
    } catch (error) {
      console.error('History fetch failed:', error);
      return [];
    }
  }

  requestNotificationPermission(): void {
    if ('Notification' in window) {
      Notification.requestPermission();
    }
  }
}