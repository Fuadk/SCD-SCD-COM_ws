// scada-integration.service.ts

import { Injectable } from '@angular/core';
import { Subscription, BehaviorSubject, Observable } from 'rxjs';
import { SCADAService, ServerInfo, WriteResult, Alarm, BrowseTag } from './scada.service';

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
  type: 'tag' | 'connection' | 'server' | 'alarm';
  tagName?: string;
  serverName?: string;
  alarmId?: string;
  oldValue?: any;
  newValue?: any;
  fullData?: any;
}

@Injectable({
  providedIn: 'root'
})
export class ScadaIntegrationService {
  // ============= Raw data subjects =============
  private rawDataSubject = new BehaviorSubject<any>({});
  public rawData$ = this.rawDataSubject.asObservable();

  private rawAlarmsSubject = new BehaviorSubject<Alarm[]>([]);
  public rawAlarms$ = this.rawAlarmsSubject.asObservable();

  private previousValues = new WeakMap<any, any>();
  private serversSubject = new BehaviorSubject<ServerInfo[]>([]);
  private selectedServerIdSubject = new BehaviorSubject<number>(0);

  public servers$ = this.serversSubject.asObservable();
  public selectedServerId$ = this.selectedServerIdSubject.asObservable();

  constructor(private scadaService: SCADAService) {
    // One-time migration: purge legacy localStorage key from older builds.
    // Safe to remove after a couple of releases.
    try { localStorage.removeItem('scada_servers_config'); } catch { /* ignore */ }

    // Tag values — push-through from SCADAService
    this.scadaService.getTagValues().subscribe(values => {
      this.rawDataSubject.next(values);
    });

    // Server list — backend is the single source of truth
    this.scadaService.getServers().subscribe(servers => {
      this.serversSubject.next(servers ?? []);
    });

    // Alarm list — push-through from SCADAService
    this.scadaService.getAlarms().subscribe(alarms => {
      this.rawAlarmsSubject.next(alarms ?? []);
    });
  }

  // ============= Raw tag data access =============

  /** Get raw tag values as observable */
  getRawTagValues(): Observable<any> {
    return this.rawData$;
  }

  /** Get current raw tag values snapshot */
  getCurrentRawTagValues(): any {
    return this.rawDataSubject.getValue();
  }

  /** Get a specific tag value by its key ("server:tag") */
  getTagValue(tagKey: string): any {
    const rawData = this.rawDataSubject.getValue();
    return rawData[tagKey] || null;
  }

  /** Get all tag keys ("server:tag" format) */
  getTagKeys(): string[] {
    const rawData = this.rawDataSubject.getValue();
    return Object.keys(rawData);
  }

  /** Get tags for a specific server, keyed by tag name only */
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

  /** Get all server names that currently have tags in raw data */
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

  // ============= Alarm access =============

  getAlarms(): Observable<Alarm[]> {
    return this.rawAlarms$;
  }

  getCurrentAlarms(): Alarm[] {
    return this.rawAlarmsSubject.getValue();
  }

  getActiveAlarms(): Alarm[] {
    return this.rawAlarmsSubject.getValue().filter(a => a.active && !a.acknowledged);
  }

  getAlarmsForServer(serverName: string): Alarm[] {
    return this.rawAlarmsSubject.getValue().filter(a => a.server_name === serverName);
  }

  async acknowledgeAlarm(alarmId: string, comment: string = ''): Promise<boolean> {
    return this.scadaService.acknowledgeAlarm(alarmId, comment);
  }

  // ============= Component integration =============

  /**
   * Subscribe a component to SCADA updates. The component receives tag,
   * connection, and alarm changes through the optional callback. Also sets
   * `component.scadaData` with the latest snapshot for direct access.
   *
   * Returns the array of subscriptions so the component can unsubscribe
   * on destroy.
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
      callback = configOrCallback;
    } else if (configOrCallback && typeof configOrCallback === 'object') {
      config = configOrCallback;
      callback = onDataChange;
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
          const oldStatus = prev.connectionStatus;
          prev.connectionStatus = status;

          component.scadaData.connectionStatus = status;
          component.scadaConnectionStatus = status;

          if (callback) {
            callback([{
              type: 'connection',
              oldValue: oldStatus,
              newValue: status
            }]);
          }
        }
      })
    );

    // Subscribe to alarms
    subscriptions.push(
      this.rawAlarms$.subscribe(alarms => {
        component.scadaData.alarms = alarms;
        component.alarms = alarms;

        if (callback) {
          callback([{ type: 'alarm', fullData: alarms }]);
        }
      })
    );

    return subscriptions;
  }

  // ============= Server management =============

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

    try {
      const result = await this.scadaService.addServer(name, endpoint);
      if (!result) {
        console.warn(`⚠️ Failed to add server "${name}" to backend`);
        return null;
      }

      const servers = await this.scadaService.refreshServers();
      this.serversSubject.next(servers ?? []);
      console.log(`✅ Server "${name}" added successfully`);
      return result;
    } catch (error) {
      console.error(`❌ Error adding server "${name}":`, error);
      return null;
    }
  }

  async removeServer(serverId: number): Promise<boolean> {
    try {
      const ok = await this.scadaService.removeServer(serverId);
      if (!ok) return false;

      const servers = await this.scadaService.refreshServers();
      this.serversSubject.next(servers ?? []);

      // If the selected server was removed, select the first remaining one.
      if (this.selectedServerIdSubject.getValue() === serverId && (servers?.length ?? 0) > 0) {
        this.selectedServerIdSubject.next(servers[0].id);
      }

      console.log(`✅ Server ${serverId} removed`);
      return true;
    } catch (error) {
      console.error(`❌ Error removing server ${serverId}:`, error);
      return false;
    }
  }

  async updateServer(serverId: number, name: string, endpoint: string): Promise<boolean> {
    try {
      const ok = await this.scadaService.updateServer(serverId, name, endpoint);
      if (!ok) return false;

      const servers = await this.scadaService.refreshServers();
      this.serversSubject.next(servers ?? []);
      console.log(`✅ Server ${serverId} updated`);
      return true;
    } catch (error) {
      console.error(`❌ Error updating server ${serverId}:`, error);
      return false;
    }
  }

  async writeTag(serverIdOrName: number | string, tagName: string, value: any): Promise<WriteResult> {
    return this.scadaService.writeTag(serverIdOrName, tagName, value);
  }

  async getTagHistory(serverIdOrName: number | string, tagName: string, hours: number = 24): Promise<any[]> {
    return this.scadaService.getTagHistory(serverIdOrName, tagName, hours);
  }
  async browseTags(
    serverId?: number,
    nodeId: string = 'i=85',
    maxDepth: number = 5
  ): Promise<BrowseTag[]> {
    let result =  await this.scadaService.browseTags(serverId, nodeId, maxDepth);
    console.log("getTagsAlarams:result:", result)
    return result ;
  }
 async refreshAlarms(serverId?: number): Promise<{ success: boolean; alarms: Alarm[]; error?: string }> {
  try {
    const result = await this.scadaService.refreshAlarms(serverId);

    // If the backend returned a fresh list, use it directly.
    if (result?.success && result.alarms) {
      this.rawAlarmsSubject.next(result.alarms);
      return { success: true, alarms: result.alarms };
    }

    // Otherwise fall back to the cache.
    const error = result?.results?.find(r => !r.success)?.error;
    return { success: false, alarms: this.getCurrentAlarms(), error };
  } catch (error) {
    console.error('Alarm refresh failed:', error);
    return { success: false, alarms: this.getCurrentAlarms(), error: (error as Error).message };
  }
}
  /** Force a re-fetch of the server list from the backend. */
  async forceSync(): Promise<void> {
    const servers = await this.scadaService.refreshServers();
    this.serversSubject.next(servers ?? []);
  }

  // ============= Polling =============

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

  // ============= Helpers =============

  private getDefaultScadaData(): any {
    return {
      rawTagValues: {},
      connectionStatus: false,
      servers: [],
      currentServer: 'Local',
      alarms: []
    };
  }
}