// tab-manager.service.ts
import { Injectable, Type } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

export interface TabInfo {
  id: string;
  title: string;
  component: Type<any>;
  inputs: any;
  closable?: boolean;
  icon?: string;
  isFloating?: boolean;
  tabGroupId?: string;
  isActive?: boolean;
  order?: number;
}

export interface TabGroup {
  id: string;
  title: string;
  tabs: TabInfo[];
  activeTabId: string;
}

export interface DragDropResult {
  fromIndex: number;
  destinationIndex: number;
  groupId?: string;
}


@Injectable()
export class TabManagerService {
  private tabsSubject = new BehaviorSubject<TabInfo[]>([]);
  private tabGroupsSubject = new BehaviorSubject<TabGroup[]>([]);
  private tabIdCounter = 0;

  // Public observables
  get tabs$(): Observable<TabInfo[]> {
    return this.tabsSubject.asObservable();
  }

  get tabGroups$(): Observable<TabGroup[]> {
    return this.tabGroupsSubject.asObservable();
  }

  // Public getters
  get tabs(): TabInfo[] {
    return this.tabsSubject.getValue();
  }

  get tabGroups(): TabGroup[] {
    return this.tabGroupsSubject.getValue();
  }

  // ===== TAB MANAGEMENT =====

  openTab(tabData: Partial<TabInfo>): string {
    const tabId = tabData.id || `tab_${++this.tabIdCounter}`;
    
    const newTab: TabInfo = {
      id: tabId,
      title: tabData.title || 'Untitled',
      component: tabData.component!,
      inputs: tabData.inputs || {},
      closable: tabData.closable !== undefined ? tabData.closable : true,
      icon: tabData.icon || '📄',
      isFloating: tabData.isFloating || false,
      tabGroupId: tabData.tabGroupId || undefined,
      isActive: true,
      order: this.tabs.length
    };

    const currentTabs = this.tabsSubject.getValue();
    
    const existingIndex = currentTabs.findIndex(t => t.id === tabId);
    if (existingIndex !== -1) {
      this.activateTab(tabId);
      return tabId;
    }

    const updatedTabs: TabInfo[] = currentTabs.map(t => ({ ...t, isActive: false }));
    updatedTabs.push(newTab);
    
    this.tabsSubject.next(updatedTabs);
    this.updateTabGroups(newTab);
    
    return tabId;
  }

  closeTab(tabId: string): void {
    let currentTabs = this.tabsSubject.getValue();
    const tabToClose = currentTabs.find(t => t.id === tabId);
    
    if (!tabToClose) return;

    if (tabToClose.tabGroupId) {
      this.removeFromTabGroup(tabId, tabToClose.tabGroupId);
    }

    currentTabs = currentTabs.filter(t => t.id !== tabId);
    
    if (currentTabs.length > 0) {
      const nextTab = currentTabs[0];
      nextTab.isActive = true;
    }
    
    this.tabsSubject.next(currentTabs);
  }

  activateTab(tabId: string): void {
    const currentTabs = this.tabsSubject.getValue();
    const tab = currentTabs.find(t => t.id === tabId);
    
    if (tab) {
      currentTabs.forEach(t => {
        t.isActive = t.id === tabId;
      });
      this.tabsSubject.next([...currentTabs]);
    }
  }

  closeAllTabs(): void {
    this.tabsSubject.next([]);
    this.tabGroupsSubject.next([]);
  }

  getTabs(): TabInfo[] {
    return this.tabsSubject.getValue();
  }

  // ===== TAB GROUP MANAGEMENT =====

  createTabGroup(title: string, tabsData: Partial<TabInfo>[]): string {
    const groupId = `tabgroup_${Date.now()}`;
    
    const tabs: TabInfo[] = tabsData.map((t, index) => ({
      id: t.id || `tab_${groupId}_${index}`,
      title: t.title || 'Untitled',
      component: t.component!,
      inputs: t.inputs || {},
      closable: t.closable !== undefined ? t.closable : true,
      icon: t.icon || '📄',
      isFloating: false,
      tabGroupId: groupId,
      isActive: index === 0,
      order: index
    }));

    const tabGroup: TabGroup = {
      id: groupId,
      title: title || 'Tab Group',
      tabs: tabs,
      activeTabId: tabs[0]?.id || ''
    };

    const currentTabs = this.tabsSubject.getValue();
    
    tabs.forEach(t => {
      const exists = currentTabs.some(ct => ct.id === t.id);
      if (!exists) {
        t.isActive = t.isActive || false;
        currentTabs.push(t);
      }
    });

    const groups = this.tabGroupsSubject.getValue();
    groups.push(tabGroup);
    this.tabGroupsSubject.next(groups);
    this.tabsSubject.next([...currentTabs]);

    return groupId;
  }

  addTabToGroup(groupId: string, tabData: Partial<TabInfo>): void {
    const groups = this.tabGroupsSubject.getValue();
    const group = groups.find(g => g.id === groupId);
    
    if (!group) return;

    const tab: TabInfo = {
      id: tabData.id || `tab_${Date.now()}`,
      title: tabData.title || 'Untitled',
      component: tabData.component!,
      inputs: tabData.inputs || {},
      closable: tabData.closable !== undefined ? tabData.closable : true,
      icon: tabData.icon || '📄',
      isFloating: false,
      tabGroupId: groupId,
      isActive: false,
      order: group.tabs.length
    };

    group.tabs.push(tab);
    group.activeTabId = tab.id;
    
    const currentTabs = this.tabsSubject.getValue();
    currentTabs.push(tab);
    
    this.tabGroupsSubject.next(groups);
    this.tabsSubject.next([...currentTabs]);
  }

  removeTabFromGroup(tabId: string, groupId: string): void {
    const groups = this.tabGroupsSubject.getValue();
    const group = groups.find(g => g.id === groupId);
    
    if (!group) return;

    group.tabs = group.tabs.filter(t => t.id !== tabId);
    
    if (group.tabs.length === 0) {
      const groupIndex = groups.indexOf(group);
      groups.splice(groupIndex, 1);
    } else if (group.activeTabId === tabId) {
      group.activeTabId = group.tabs[0]?.id || '';
    }

    this.tabGroupsSubject.next(groups);
  }

  // In tab-manager.service.ts

removeGroup(groupId: string): void {
  const groups = this.tabGroupsSubject.value;
  const groupIndex = groups.findIndex(g => g.id === groupId);
  
  if (groupIndex === -1) {
    console.warn('Group not found:', groupId);
    return;
  }
  
  // Remove the group
  groups.splice(groupIndex, 1);
  this.tabGroupsSubject.next([...groups]);
  
  // Also remove any tabs that were in this group from the main tabs array
  const tabs = this.tabsSubject.value;
  const updatedTabs = tabs.filter(tab => tab.tabGroupId !== groupId);
  if (updatedTabs.length !== tabs.length) {
    this.tabsSubject.next(updatedTabs);
  }
}

  // ===== REORDERING =====

  /**
   * Reorder tabs - handles both main tabs and group tabs
   */
  reorderTabs(fromIndex: number, destinationIndex: number, groupId?: string): void {
    console.log('[DRAG-DEBUG] ===== REORDERING TABS =====');
    console.log('[DRAG-DEBUG] fromIndex:', fromIndex, 'destinationIndex:', destinationIndex, 'groupId:', groupId);
    
    if (groupId) {
      this.reorderTabsInGroup(fromIndex, destinationIndex, groupId);
    } else {
      this.reorderMainTabs(fromIndex, destinationIndex);
    }
  }

  private reorderTabsInGroup(fromIndex: number, destinationIndex: number, groupId: string): void {
    const groups = [...this.tabGroupsSubject.getValue()];
    const group = groups.find(g => g.id === groupId);
    
    if (!group) return;

    console.log('[DRAG-DEBUG] Reordering tabs in group:', group.title);
    console.log('[DRAG-DEBUG] Group tabs before:', group.tabs.map(t => t.title));
    
    const [movedTab] = group.tabs.splice(fromIndex, 1);
    group.tabs.splice(destinationIndex, 0, movedTab);
    
    console.log('[DRAG-DEBUG] Group tabs after:', group.tabs.map(t => t.title));
    
    this.tabGroupsSubject.next(groups);
    
    // Update main tabs array to reflect the new order
    const allTabs = this.tabs.filter(t => t.tabGroupId !== groupId);
    const groupTabs = group.tabs;
    const updatedTabs = [...allTabs, ...groupTabs];
    this.tabsSubject.next(updatedTabs);
  }

  private reorderMainTabs(fromIndex: number, destinationIndex: number): void {
    const currentTabs = [...this.tabs];
    console.log('[DRAG-DEBUG] Reordering main tabs');
    console.log('[DRAG-DEBUG] Main tabs before:', currentTabs.map(t => t.title));
    
    const [movedTab] = currentTabs.splice(fromIndex, 1);
    currentTabs.splice(destinationIndex, 0, movedTab);
    
    console.log('[DRAG-DEBUG] Main tabs after:', currentTabs.map(t => t.title));
    
    this.tabsSubject.next([...currentTabs]);
  }

  // ===== HELPERS =====

  private updateTabGroups(tab: TabInfo): void {
    if (!tab.tabGroupId) return;

    const groups = this.tabGroupsSubject.getValue();
    const group = groups.find(g => g.id === tab.tabGroupId);
    
    if (group) {
      if (!group.tabs.find(t => t.id === tab.id)) {
        group.tabs.push(tab);
        group.activeTabId = tab.id;
        this.tabGroupsSubject.next(groups);
      }
    }
  }

  private removeFromTabGroup(tabId: string, groupId: string): void {
    this.removeTabFromGroup(tabId, groupId);
  }

  // ===== CLEANUP =====

  destroy(): void {
    this.tabsSubject.complete();
    this.tabGroupsSubject.complete();
  }
  getTotalTabCount(): number {
  // Count floating tabs (not in any group)
  let count = this.tabs.filter(t => !t.tabGroupId).length;
  
  // Add tabs inside groups
  this.tabGroups.forEach(group => {
    count += group.tabs ? group.tabs.length : 0;
  });
  return count;
}

getTabsForGroup(groupId: string): TabInfo[] {
  return this.tabs.filter(t => t.tabGroupId === groupId);
}

getFloatingTabs(): TabInfo[] {
  return this.tabs.filter(t => !t.tabGroupId);
}


}