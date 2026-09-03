// window-manager.service.ts
import { Injectable, Type } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

export interface WindowInfo {
  id: string;
  title: string;
  component: Type<any>;
  inputs?: any;
  outputs?: any;
  width?: number;
  height?: number;
  left?: number;
  top?: number;
  isMinimized?: boolean;
  isMaximized?: boolean;
  isTabbed?: boolean;
  tabGroupId?: string;
  isActive: boolean;  // <-- REQUIRED (removed ?)
  innerHeight?: number;
  innerWidth?: number;
  order?: number;
  zIndex?: number;
  outsideContainer?: boolean;
  isDirty?: boolean;
  componentInstance?: any;
}

export interface TabGroup {
  id: string;
  title: string;
  windows: WindowInfo[];
  activeWindowId: string;
}

export interface WindowPosition {
  left: number;
  top: number;
  width: number;
  height: number;
}

@Injectable()
export class WindowManagerService {
  private windowsSubject = new BehaviorSubject<WindowInfo[]>([]);
  private tabGroupsSubject = new BehaviorSubject<TabGroup[]>([]);
  private windowIdCounter = 0;
  private zIndexCounter = 1000;

  // ===== OBSERVABLES =====

  get windows$(): Observable<WindowInfo[]> {
    return this.windowsSubject.asObservable();
  }

  get tabGroups$(): Observable<TabGroup[]> {
    return this.tabGroupsSubject.asObservable();
  }

  // ===== GETTERS =====

  get windows(): WindowInfo[] {
    return this.windowsSubject.getValue();
  }

  get tabGroups(): TabGroup[] {
    return this.tabGroupsSubject.getValue();
  }

  // ===== WINDOW QUERIES =====

  getWindowById(windowId: string): WindowInfo | undefined {
    return this.windows.find(w => w.id === windowId);
  }

  getWindowsForGroup(groupId: string): WindowInfo[] {
    return this.windows.filter(w => w.tabGroupId === groupId);
  }

  getTotalWindowCount(): number {
    let count = this.windows.filter(w => !w.tabGroupId).length;
    this.tabGroups.forEach(group => {
      count += group.windows ? group.windows.length : 0;
    });
    return count;
  }

  getGroupById(groupId: string): TabGroup | undefined {
    return this.tabGroups.find(g => g.id === groupId);
  }

  getActiveGroupId(): string {
    return this.tabGroups.length > 0 ? this.tabGroups[0].id : '';
  }

  // ===== WINDOW POSITION UTILITIES =====

  calculateWindowPosition(
    existingCount: number,
    containerWidth?: number,
    containerHeight?: number
  ): WindowPosition {
    const offset = existingCount * 30;
    const defaultWidth = 700;
    const defaultHeight = 500;
    
    return {
      left: 20 + offset,
      top: 20 + offset,
      width: containerWidth ? Math.min(defaultWidth, containerWidth - 40) : defaultWidth,
      height: containerHeight ? Math.min(defaultHeight, containerHeight - 40) : defaultHeight
    };
  }

  getContainerDimensions(containerElement: HTMLElement | null): { width: number; height: number } {
    if (!containerElement) {
      return { width: 800, height: 600 };
    }
    const rect = containerElement.getBoundingClientRect();
    return {
      width: rect.width || 800,
      height: rect.height || 600
    };
  }

  // ===== WINDOW MANAGEMENT =====

  openWindow(windowData: Partial<WindowInfo>): string {
    console.log("tracing:openWindow:windowData:", windowData);
    const windowId = windowData.id || `window_${++this.windowIdCounter}`;
    
    // Get current windows
    const currentWindows = this.windowsSubject.getValue();
    
    // Check if window already exists
    const existingIndex = currentWindows.findIndex(w => w.id === windowId);
    
    // If window exists, just activate it and return
    if (existingIndex !== -1) {
      // Preserve the existing component instance
      const existingWindow = currentWindows[existingIndex];
      
      // Update window properties but keep the component instance
      const updatedWindow: WindowInfo = {
        ...existingWindow,
        ...windowData,
        // Preserve the component instance
        componentInstance: existingWindow.componentInstance,
        // Preserve the component reference
        component: existingWindow.component,
        // Ensure isActive is set
        isActive: true
      };
      
      // Replace the window in the array
      currentWindows[existingIndex] = updatedWindow;
      
      // Activate the window
      this.activateWindow(windowId);
      
      return windowId;
    }
    
    // Window doesn't exist, create new one
    const position = windowData.left !== undefined && windowData.top !== undefined
      ? { left: windowData.left, top: windowData.top }
      : this.calculateWindowPosition(currentWindows.length);
    
    const newWindow: WindowInfo = {
      id: windowId,
      title: windowData.title || 'Untitled',
      component: windowData.component!,
      inputs: windowData.inputs || {},
      outputs: windowData.outputs || {},
      width: windowData.width || 800,
      height: windowData.height || 650,
      left: position.left,
      top: position.top,
      isMinimized: false,
      isMaximized: false,
      isTabbed: false,
      tabGroupId: undefined,
      isActive: true,
      innerHeight: windowData.height || 650,
      innerWidth: windowData.width || 800,
      order: currentWindows.length,
      zIndex: ++this.zIndexCounter,
      outsideContainer: windowData.outsideContainer || false,
      isDirty: false,
      componentInstance: null
    };

    // Deactivate all other windows
    const updatedWindows = currentWindows.map(w => ({ ...w, isActive: false }));
    updatedWindows.push(newWindow);
    
    this.windowsSubject.next(updatedWindows);
    console.log("tracing:openWindow:windowId:", windowId);
    return windowId;
  }

  closeWindow(windowId: string): void {
    let currentWindows = this.windowsSubject.getValue();
    const windowToClose = currentWindows.find(w => w.id === windowId);
    
    if (!windowToClose) return;

    if (windowToClose.tabGroupId) {
      this.removeWindowFromGroup(windowId, windowToClose.tabGroupId);
    }

    currentWindows = currentWindows.filter(w => w.id !== windowId);
    
    if (currentWindows.length > 0) {
      const nextWindow = currentWindows[0];
      nextWindow.isActive = true;
    }
    
    this.windowsSubject.next(currentWindows);
  }

  activateWindow(windowId: string): void {
    const currentWindows = this.windowsSubject.getValue();
    const window = currentWindows.find(w => w.id === windowId);
    
    if (window) {
      currentWindows.forEach(w => {
        w.isActive = w.id === windowId;
      });
      window.zIndex = ++this.zIndexCounter;
      this.windowsSubject.next([...currentWindows]);
    }
  }

  bringToFront(windowId: string): void {
    const currentWindows = this.windowsSubject.getValue();
    const window = currentWindows.find(w => w.id === windowId);
    
    if (window) {
      const index = currentWindows.indexOf(window);
      currentWindows.splice(index, 1);
      currentWindows.push(window);
      window.zIndex = ++this.zIndexCounter;
      this.activateWindow(windowId);
      this.windowsSubject.next([...currentWindows]);
    }
  }

  toggleMaximize(windowId: string): void {
    const currentWindows = this.windowsSubject.getValue();
    const window = currentWindows.find(w => w.id === windowId);
    
    if (window) {
      if (window.isMaximized) {
        window.isMaximized = false;
        window.width = window.innerWidth || 800;
        window.height = window.innerHeight || 600;
        window.left = window.left || 50;
        window.top = window.top || 50;
      } else {
        window.isMaximized = true;
        window.innerWidth = window.width || 800;
        window.innerHeight = window.height || 600;
        window.width = window.innerWidth || 800;
        window.height = window.innerHeight || 600;
        window.left = 0;
        window.top = 0;
      }
      this.windowsSubject.next([...currentWindows]);
    }
  }

  closeAllWindows(): void {
    this.windowsSubject.next([]);
    this.tabGroupsSubject.next([]);
    this.zIndexCounter = 1000;
  }

  getWindows(): WindowInfo[] {
    return this.windowsSubject.getValue();
  }

  // ===== WINDOW CASCADING & TILING =====

  cascadeWindows(groupId?: string): void {
    const windows = this.windowsSubject.getValue();
    let targetWindows: WindowInfo[];
    
    if (groupId) {
      targetWindows = windows.filter(w => w.tabGroupId === groupId && !w.isMinimized && !w.isMaximized);
    } else {
      targetWindows = windows.filter(w => !w.tabGroupId && !w.isMinimized && !w.isMaximized);
    }
    
    let offset = 0;
    targetWindows.forEach((window) => {
      window.left = 20 + offset;
      window.top = 20 + offset;
      window.width = 800;
      window.height = 600;
      offset += 25;
    });
    
    this.windowsSubject.next([...windows]);
  }

  tileWindows(groupId?: string): void {
    const windows = this.windowsSubject.getValue();
    let targetWindows: WindowInfo[];
    
    if (groupId) {
      targetWindows = windows.filter(w => w.tabGroupId === groupId && !w.isMinimized && !w.isMaximized);
    } else {
      targetWindows = windows.filter(w => !w.tabGroupId && !w.isMinimized && !w.isMaximized);
    }
    
    const count = targetWindows.length;
    if (count === 0) return;
    
    const cols = Math.ceil(Math.sqrt(count));
    const rows = Math.ceil(count / cols);
    const width = Math.floor((window.innerWidth || 1200) / cols);
    const height = Math.floor((window.innerHeight || 800) / rows);
    
    targetWindows.forEach((window, index) => {
      const col = index % cols;
      const row = Math.floor(index / cols);
      window.left = 20 + col * width;
      window.top = 20 + row * height;
      window.width = width - 10;
      window.height = height - 10;
    });
    
    this.windowsSubject.next([...windows]);
  }

  // ===== TAB GROUP MANAGEMENT =====

  createTabGroup(title: string, windowsData: Partial<WindowInfo>[]): string {
    const groupId = `tabgroup_${Date.now()}`;
    
    // Get current windows FIRST
    const currentWindows: WindowInfo[] = this.windowsSubject.getValue();
    
    const windows: WindowInfo[] = windowsData.map((w, index) => ({
      id: w.id || `window_${groupId}_${index}`,
      title: w.title || 'Untitled',
      component: w.component!,
      inputs: w.inputs || {},
      width: w.width || 800,
      height: w.height || 600,
      left: w.left || 20 + index * 30,
      top: w.top || 20 + index * 30,
      isMinimized: false,
      isMaximized: false,
      isTabbed: false,
      tabGroupId: groupId,
      isActive: index === 0,
      innerHeight: w.height || 600,
      innerWidth: w.width || 800,
      order: currentWindows.length + index,
      zIndex: ++this.zIndexCounter,
      componentInstance: null
    }));

    const tabGroup: TabGroup = {
      id: groupId,
      title: title || 'Tab Group',
      windows: windows,
      activeWindowId: windows[0]?.id || ''
    };

    // Add windows to current windows
    windows.forEach(w => {
      const exists = currentWindows.some(cw => cw.id === w.id);
      if (!exists) {
        currentWindows.push(w);
      }
    });

    const groups = this.tabGroupsSubject.getValue();
    groups.push(tabGroup);
    this.tabGroupsSubject.next(groups);
    this.windowsSubject.next([...currentWindows]);

    return groupId;
  }

  addWindowToGroup(groupId: string, windowData: Partial<WindowInfo>): void {
    const groups = this.tabGroupsSubject.getValue();
    const group = groups.find(g => g.id === groupId);
    
    if (!group) {
      console.warn('Group not found:', groupId);
      return;
    }

    const windowId = windowData.id || `window_${Date.now()}`;
    const existingWindows = group.windows || [];
    
    // Check if window already exists in the group
    const existingIndex = existingWindows.findIndex(w => w.id === windowId);
    
    if (existingIndex !== -1) {
      // Window exists in group, just activate it
      group.activeWindowId = windowId;
      this.tabGroupsSubject.next(groups);
      return;
    }
    
    const position = this.calculateWindowPosition(existingWindows.length);
    
    const newWindow: WindowInfo = {
      id: windowId,
      title: windowData.title || 'Untitled',
      component: windowData.component!,
      inputs: windowData.inputs || {},
      width: windowData.width || position.width,
      height: windowData.height || position.height,
      left: windowData.left || position.left,
      top: windowData.top || position.top,
      isMinimized: false,
      isMaximized: false,
      isTabbed: false,
      tabGroupId: groupId,
      isActive: true,
      innerHeight: windowData.height || position.height,
      innerWidth: windowData.width || position.width,
      order: group.windows.length,
      zIndex: ++this.zIndexCounter,
      componentInstance: null
    };

    group.windows.push(newWindow);
    group.activeWindowId = newWindow.id;
    
    const currentWindows: WindowInfo[] = this.windowsSubject.getValue();
    currentWindows.push(newWindow);
    
    this.tabGroupsSubject.next(groups);
    this.windowsSubject.next([...currentWindows]);
  }

  removeWindowFromGroup(windowId: string, groupId: string): void {
    const groups = this.tabGroupsSubject.getValue();
    const group = groups.find(g => g.id === groupId);
    
    if (!group) return;

    group.windows = group.windows.filter(w => w.id !== windowId);
    
    if (group.windows.length === 0) {
      const groupIndex = groups.indexOf(group);
      groups.splice(groupIndex, 1);
    } else if (group.activeWindowId === windowId) {
      group.activeWindowId = group.windows[0]?.id || '';
    }

    this.tabGroupsSubject.next(groups);
  }

  removeGroup(groupId: string): void {
    const groups = this.tabGroupsSubject.getValue();
    const groupIndex = groups.findIndex(g => g.id === groupId);
    
    if (groupIndex === -1) {
      console.warn('Group not found:', groupId);
      return;
    }
    
    groups.splice(groupIndex, 1);
    this.tabGroupsSubject.next([...groups]);
    
    const windows = this.windowsSubject.getValue();
    const updatedWindows = windows.filter(w => w.tabGroupId !== groupId);
    if (updatedWindows.length !== windows.length) {
      this.windowsSubject.next(updatedWindows);
    }
  }

  // ===== GROUP WINDOW ACTIONS =====

  activateGroupWindow(groupId: string, windowId: string): void {
    const groups = this.tabGroupsSubject.getValue();
    const group = groups.find(g => g.id === groupId);
    
    if (group) {
      group.activeWindowId = windowId;
      this.tabGroupsSubject.next([...groups]);
    }
    
    this.bringToFront(windowId);
    this.activateWindow(windowId);
  }

  floatAllWindows(groupId: string): void {
    const windows = this.windowsSubject.getValue();
    const groupWindows = windows.filter(w => w.tabGroupId === groupId);
    let offset = 0;
    groupWindows.forEach(w => {
      w.isTabbed = false;
      w.tabGroupId = undefined;
      w.width = 800;
      w.height = 600;
      w.left = 30 + offset;
      w.top = 30 + offset;
      offset += 30;
    });
    this.windowsSubject.next([...windows]);
  }

  floatWindow(windowId: string): void {
    const windows = this.windowsSubject.getValue();
    const window = windows.find(w => w.id === windowId);
    if (window) {
      window.isTabbed = false;
      window.tabGroupId = undefined;
      window.width = 800;
      window.height = 600;
      window.left = window.left || 30;
      window.top = window.top || 30;
      this.windowsSubject.next([...windows]);
    }
  }

  // ===== CLEANUP =====

  destroy(): void {
    this.windowsSubject.complete();
    this.tabGroupsSubject.complete();
  }

  getFloatingWindows(): WindowInfo[] {
    return this.windows.filter(w => !w.tabGroupId);
  }

  getGroupedWindows(): WindowInfo[] {
    return this.windows.filter(w => w.tabGroupId);
  }

  getGroupWindowCount(groupId: string): number {
    return this.windows.filter(w => w.tabGroupId === groupId).length;
  }

  async checkWindowHasUnsavedChanges(windowId: string): Promise<boolean> {
    const window = this.getWindowById(windowId);
    if (!window) return false;
    return window.isDirty === true;
  }

  updateWindowDirtyState(windowId: string, isDirty: boolean): void {
    const currentWindows = this.windowsSubject.getValue();
    const window = currentWindows.find(w => w.id === windowId);
    
    if (window) {
      window.isDirty = isDirty;
      this.windowsSubject.next([...currentWindows]);
    }
  }

  async saveWindowChanges(windowId: string): Promise<void> {
    const window = this.getWindowById(windowId);
    if (!window) return;
  }
}