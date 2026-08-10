// scada-integration.service.ts

import { Injectable } from '@angular/core';
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
  localTemperature: number;
  localPressure: number;
  localFlowRate: number;
  localLevel: number;
  localProduction: number;
  remoteTemperature: number;
  remotePressure: number;
  remoteFlowRate: number;
  remoteLevel: number;
  remoteProduction: number;
  connectionStatus: boolean;
  servers: ServerInfo[];
  currentServer: string;
  rawTagValues: any;
}

export interface ScadaChangeEvent {
  type: 'local' | 'remote' | 'connection';
  property: string;
  oldValue: number | boolean;
  newValue: number | boolean;
  fullData?: any;
}

@Injectable({
  providedIn: 'root'
})
export class ScadaIntegrationService {
  private previousValues = new WeakMap<any, any>();
  private serversSubject = new BehaviorSubject<ServerInfo[]>([]);
  private selectedServerIdSubject = new BehaviorSubject<number>(0);
  
  public servers$ = this.serversSubject.asObservable();
  public selectedServerId$ = this.selectedServerIdSubject.asObservable();

  private defaultConfig: ScadaDisplayConfig = {
    local: {
      temperatureTag: 'Tag_1001',
      pressureTag: 'Tag_1002',
      flowRateTag: 'Tag_1003',
      levelTag: 'Tag_1004',
      productionTag: 'Tag_1005'
    },
    remote: {
      temperatureTag: 'Tag_1001',
      pressureTag: 'Tag_1002',
      flowRateTag: 'Tag_1003',
      levelTag: 'Tag_1004',
      productionTag: 'Tag_1005'
    },
    units: {
      temperature: '°C',
      pressure: 'kPa',
      flowRate: 'L/min',
      level: '%',
      production: ''
    }
  };

  constructor(private scadaService: SCADAService) {
    // Auto-subscribe to servers and update subject
    this.scadaService.getServers().subscribe(servers => {
      this.serversSubject.next(servers);
    });
  }

  // ============= Server Management Methods =============
  
  /**
   * Get current list of servers
   */
  getServers(): ServerInfo[] {
    return this.serversSubject.getValue();
  }

  /**
   * Get servers as observable
   */
  getServersObservable(): Observable<ServerInfo[]> {
    return this.serversSubject.asObservable();
  }

  /**
   * Get selected server ID
   */
  getSelectedServerId(): number {
    return this.selectedServerIdSubject.getValue();
  }

  /**
   * Set selected server ID
   */
  setSelectedServerId(serverId: number): void {
    this.selectedServerIdSubject.next(serverId);
  }

  /**
   * Get selected server info
   */
  getSelectedServer(): ServerInfo | null {
    const servers = this.serversSubject.getValue();
    const selectedId = this.selectedServerIdSubject.getValue();
    return servers.find(s => s.id === selectedId) || (servers.length > 0 ? servers[0] : null);
  }

  /**
   * Add a new server
   */
  async addServer(name: string, endpoint: string): Promise<ServerInfo | null> {
    const result = await this.scadaService.addServer(name, endpoint);
    if (result) {
      // Refresh the servers list
      this.scadaService.getServers().subscribe(servers => {
        this.serversSubject.next(servers);
      });
    }
    return result;
  }

  /**
   * Remove a server by ID
   */
  async removeServer(serverId: number): Promise<boolean> {
    const result = await this.scadaService.removeServer(serverId);
    if (result) {
      // Refresh the servers list
      this.scadaService.getServers().subscribe(servers => {
        this.serversSubject.next(servers);
        
        // If removed server was selected, select first available
        if (this.selectedServerIdSubject.getValue() === serverId && servers.length > 0) {
          this.selectedServerIdSubject.next(servers[0].id);
        }
      });
    }
    return result;
  }

  /**
   * Update a server
   */
  async updateServer(serverId: number, name: string, endpoint: string): Promise<boolean> {
    const result = await this.scadaService.updateServer(serverId, name, endpoint);
    if (result) {
      // Refresh the servers list
      this.scadaService.getServers().subscribe(servers => {
        this.serversSubject.next(servers);
      });
    }
    return result;
  }

  /**
   * Write a value to a tag on a specific server
   */
  async writeTag(serverIdOrName: number | string, tagName: string, value: any): Promise<WriteResult> {
    return this.scadaService.writeTag(serverIdOrName, tagName, value);
  }

  /**
   * Get tag history for a specific server
   */
  async getTagHistory(serverIdOrName: number | string, tagName: string, hours: number = 24): Promise<any[]> {
    return this.scadaService.getTagHistory(serverIdOrName, tagName, hours);
  }

  // ============= Original SCADA Integration Methods =============

  public initScadaForComponent(
    component: any,
    config?: Partial<ScadaDisplayConfig>,
    onDataChange?: (changes: ScadaChangeEvent[]) => void
  ): Subscription[] {
    const fullConfig = this.mergeConfig(config);
    const subscriptions: Subscription[] = [];

    // Initialize previous values for this component
    this.previousValues.set(component, {
      localTemperature: 0,
      localPressure: 0,
      localFlowRate: 0,
      localLevel: 0,
      localProduction: 0,
      remoteTemperature: 0,
      remotePressure: 0,
      remoteFlowRate: 0,
      remoteLevel: 0,
      remoteProduction: 0,
      connectionStatus: false
    });

    // Initialize component SCADA properties if not exist
    if (component.scadaData === undefined) {
      component.scadaData = this.getDefaultScadaData();
    }
    
    // Create direct properties for template binding
    component.scadaConnectionStatus = false;
    component.localTemperature = 0;
    component.localPressure = 0;
    component.localFlowRate = 0;
    component.localLevel = 0;
    component.localProduction = 0;
    component.remoteTemperature = 0;
    component.remotePressure = 0;
    component.remoteFlowRate = 0;
    component.remoteLevel = 0;
    component.remoteProduction = 0;

    // Subscribe to tag values
    subscriptions.push(
      this.scadaService.getTagValues().subscribe(values => {
        component.scadaData.rawTagValues = values;
        const changes = this.updateScadaDataWithChanges(component, values, fullConfig);
        
        if (changes && changes.length > 0 && onDataChange) {
          onDataChange(changes);
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
          
          if (onDataChange) {
            onDataChange([{
              type: 'connection',
              property: 'connectionStatus',
              oldValue: prev.connectionStatus,
              newValue: status
            }]);
          }
        }
      })
    );

    return subscriptions;
  }

  private updateScadaDataWithChanges(
    component: any,
    tagValues: any,
    config: ScadaDisplayConfig
  ): ScadaChangeEvent[] {
    const changes: ScadaChangeEvent[] = [];
    const prev = this.previousValues.get(component);
    
    if (!prev) return changes;

    const checkChange = (
      property: string,
      newValue: number,
      type: 'local' | 'remote'
    ) => {
      const oldValue = prev[property];
      if (oldValue !== newValue) {
        prev[property] = newValue;
        changes.push({
          type: type,
          property: property.replace(type, '').toLowerCase(),
          oldValue: oldValue,
          newValue: newValue
        });
      }
    };

    // Local server values
    const localTemp = tagValues[`Local:${config.local.temperatureTag}`]?.value || 0;
    const localPressure = tagValues[`Local:${config.local.pressureTag}`]?.value || 0;
    const localFlow = tagValues[`Local:${config.local.flowRateTag}`]?.value || 0;
    const localLevel = tagValues[`Local:${config.local.levelTag}`]?.value || 0;
    const localProd = tagValues[`Local:${config.local.productionTag}`]?.value || 0;

    checkChange('localTemperature', localTemp, 'local');
    checkChange('localPressure', localPressure, 'local');
    checkChange('localFlowRate', localFlow, 'local');
    checkChange('localLevel', localLevel, 'local');
    checkChange('localProduction', localProd, 'local');

    // Remote server values
    const remoteTemp = tagValues[`Remote:${config.remote.temperatureTag}`]?.value || 0;
    const remotePressure = tagValues[`Remote:${config.remote.pressureTag}`]?.value || 0;
    const remoteFlow = tagValues[`Remote:${config.remote.flowRateTag}`]?.value || 0;
    const remoteLevel = tagValues[`Remote:${config.remote.levelTag}`]?.value || 0;
    const remoteProd = tagValues[`Remote:${config.remote.productionTag}`]?.value || 0;

    checkChange('remoteTemperature', remoteTemp, 'remote');
    checkChange('remotePressure', remotePressure, 'remote');
    checkChange('remoteFlowRate', remoteFlow, 'remote');
    checkChange('remoteLevel', remoteLevel, 'remote');
    checkChange('remoteProduction', remoteProd, 'remote');

    // Update component properties for template binding
    component.localTemperature = localTemp;
    component.localPressure = localPressure;
    component.localFlowRate = localFlow;
    component.localLevel = localLevel;
    component.localProduction = localProd;
    
    component.remoteTemperature = remoteTemp;
    component.remotePressure = remotePressure;
    component.remoteFlowRate = remoteFlow;
    component.remoteLevel = remoteLevel;
    component.remoteProduction = remoteProd;
    
    // Update scadaData as well
    component.scadaData.localTemperature = localTemp;
    component.scadaData.localPressure = localPressure;
    component.scadaData.localFlowRate = localFlow;
    component.scadaData.localLevel = localLevel;
    component.scadaData.localProduction = localProd;
    component.scadaData.remoteTemperature = remoteTemp;
    component.scadaData.remotePressure = remotePressure;
    component.scadaData.remoteFlowRate = remoteFlow;
    component.scadaData.remoteLevel = remoteLevel;
    component.scadaData.remoteProduction = remoteProd;

    return changes;
  }

  private updateScadaData(
    component: any,
    tagValues: any,
    config: ScadaDisplayConfig
  ): void {
    component.localTemperature = tagValues[`Local:${config.local.temperatureTag}`]?.value || 0;
    component.localPressure = tagValues[`Local:${config.local.pressureTag}`]?.value || 0;
    component.localFlowRate = tagValues[`Local:${config.local.flowRateTag}`]?.value || 0;
    component.localLevel = tagValues[`Local:${config.local.levelTag}`]?.value || 0;
    component.localProduction = tagValues[`Local:${config.local.productionTag}`]?.value || 0;

    component.remoteTemperature = tagValues[`Remote:${config.remote.temperatureTag}`]?.value || 0;
    component.remotePressure = tagValues[`Remote:${config.remote.pressureTag}`]?.value || 0;
    component.remoteFlowRate = tagValues[`Remote:${config.remote.flowRateTag}`]?.value || 0;
    component.remoteLevel = tagValues[`Remote:${config.remote.levelTag}`]?.value || 0;
    component.remoteProduction = tagValues[`Remote:${config.remote.productionTag}`]?.value || 0;
    
    component.scadaData.localTemperature = component.localTemperature;
    component.scadaData.localPressure = component.localPressure;
    component.scadaData.localFlowRate = component.localFlowRate;
    component.scadaData.localLevel = component.localLevel;
    component.scadaData.localProduction = component.localProduction;
    component.scadaData.remoteTemperature = component.remoteTemperature;
    component.scadaData.remotePressure = component.remotePressure;
    component.scadaData.remoteFlowRate = component.remoteFlowRate;
    component.scadaData.remoteLevel = component.remoteLevel;
    component.scadaData.remoteProduction = component.remoteProduction;
  }

  public refreshScadaData(component: any, config?: Partial<ScadaDisplayConfig>): void {
    if (component.scadaData?.rawTagValues) {
      const fullConfig = this.mergeConfig(config);
      this.updateScadaData(component, component.scadaData.rawTagValues, fullConfig);
    }
  }

  public setCurrentServer(server: string): void {
    this.scadaService.setCurrentServer(server);
  }

  private getDefaultScadaData(): ScadaData {
    return {
      localTemperature: 0,
      localPressure: 0,
      localFlowRate: 0,
      localLevel: 0,
      localProduction: 0,
      remoteTemperature: 0,
      remotePressure: 0,
      remoteFlowRate: 0,
      remoteLevel: 0,
      remoteProduction: 0,
      connectionStatus: false,
      servers: [],
      currentServer: 'Local',
      rawTagValues: {}
    };
  }

  private mergeConfig(config?: Partial<ScadaDisplayConfig>): ScadaDisplayConfig {
    return {
      local: {
        temperatureTag: config?.local?.temperatureTag || this.defaultConfig.local.temperatureTag,
        pressureTag: config?.local?.pressureTag || this.defaultConfig.local.pressureTag,
        flowRateTag: config?.local?.flowRateTag || this.defaultConfig.local.flowRateTag,
        levelTag: config?.local?.levelTag || this.defaultConfig.local.levelTag,
        productionTag: config?.local?.productionTag || this.defaultConfig.local.productionTag
      },
      remote: {
        temperatureTag: config?.remote?.temperatureTag || this.defaultConfig.remote.temperatureTag,
        pressureTag: config?.remote?.pressureTag || this.defaultConfig.remote.pressureTag,
        flowRateTag: config?.remote?.flowRateTag || this.defaultConfig.remote.flowRateTag,
        levelTag: config?.remote?.levelTag || this.defaultConfig.remote.levelTag,
        productionTag: config?.remote?.productionTag || this.defaultConfig.remote.productionTag
      },
      units: { ...this.defaultConfig.units, ...config?.units }
    };
  }
  // Add these methods to ScadaIntegrationService

  /**
   * Enable real-time polling
   */
  enablePolling(): void {
    this.scadaService.enablePolling();
  }

  /**
   * Disable real-time polling (use when entering edit mode)
   */
  disablePolling(): void {
    this.scadaService.disablePolling();
  }

  /**
   * Check if polling is active
   */
  isPollingActive(): boolean {
    return this.scadaService.isPollingActive();
  }

  /**
   * Manually refresh data
   */
  async refreshData(): Promise<void> {
    await this.scadaService.refreshData();
  }
}