// window-host.component.ts
import { 
  Component, 
  OnInit, 
  OnDestroy,
  HostListener,
  ChangeDetectorRef
} from '@angular/core';
import { Subscription } from 'rxjs';
import { WindowManagerService, WindowInfo, TabGroup } from '../services/window-manager.service';
import { ScdDiagramScdScdDiagramDiagramDiagramComponent } from '../components/SCD/scd-scd-diagram-diagram/scd-scd-diagram-diagram.component';
import {  componentConfigDef} from '@modeldir/model';
@Component({
  selector: 'app-window-host',
  templateUrl: './window-host.component.html',
  styleUrls: ['./window-host.component.scss']
})
export class WindowHostComponent implements OnInit, OnDestroy {
  windows: WindowInfo[] = [];
  tabGroups: TabGroup[] = [];
  isDarkTheme = false;
  contextMenuVisible = false;
  contextMenuX = 0;
  contextMenuY = 0;

  private windowsSubscription!: Subscription;
  private tabGroupsSubscription!: Subscription;
  private dragData: { windowId: string, startX: number, startY: number } | null = null;
  private resizeData: { windowId: string, startX: number, startY: number } | null = null;

  constructor(
    private windowManager: WindowManagerService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.windowsSubscription = this.windowManager.windows$.subscribe(windows => {
      this.windows = windows;
      this.cdr.detectChanges();
    });

    this.tabGroupsSubscription = this.windowManager.tabGroups$.subscribe(groups => {
      this.tabGroups = groups;
      this.cdr.detectChanges();
    });
  }

  ngOnDestroy(): void {
    if (this.windowsSubscription) this.windowsSubscription.unsubscribe();
    if (this.tabGroupsSubscription) this.tabGroupsSubscription.unsubscribe();
  }

  @HostListener('document:mousemove', ['$event'])
  onMouseMove(event: MouseEvent): void {
    if (this.dragData) {
      const window = this.windows.find(w => w.id === this.dragData!.windowId);
      if (window && !window.isMaximized) {
        const deltaX = event.clientX - this.dragData.startX;
        const deltaY = event.clientY - this.dragData.startY;
        window.left = Math.max(0, window.left + deltaX);
        window.top = Math.max(0, window.top + deltaY);
        console.log("left:",window.left,"top:", window.top, "deltaX:",deltaX,"deltaY:",deltaY )
        this.dragData.startX = event.clientX;
        this.dragData.startY = event.clientY;
        // Update without re-rendering
        this.windowManager['windowsSubject'].next([...this.windows]);
      }
    }

    if (this.resizeData) {
      const window = this.windows.find(w => w.id === this.resizeData!.windowId);
      if (window && !window.isMaximized) {
        const deltaX = event.clientX - this.resizeData.startX;
        const deltaY = event.clientY - this.resizeData.startY;
        window.width = Math.max(200, window.width + deltaX);
        window.height = Math.max(150, window.height + deltaY);
        this.resizeData.startX = event.clientX;
        this.resizeData.startY = event.clientY;
        this.windowManager['windowsSubject'].next([...this.windows]);
      }
    }
  }

  @HostListener('document:mouseup')
  onMouseUp(): void {
    this.dragData = null;
    this.resizeData = null;
  }

  @HostListener('document:click')
  onDocumentClick(): void {
    this.contextMenuVisible = false;
  }

  // Window management methods
  openDiagram(diagramId?: string): void {
    const id = diagramId || `diagram_${Date.now()}`;
    const componentConfig = new componentConfigDef();
  componentConfig.masterParams = {
    data: {
      DIAGRAM_ID: id,
      viewMode: 'edit'
    }
  };

    this.windowManager.openWindow({
      id: `diagram_${id}`,
      title: `Diagram ${id}`,
      component: ScdDiagramScdScdDiagramDiagramDiagramComponent,
      inputs: { 
        setComponentConfig_Input: componentConfig 
      },
      width: 900,
      height: 650,
      left: 30 + Math.random() * 100,
      top: 30 + Math.random() * 100
    });
  }

  openForm(): void {
    // Uncomment when available
  }

  openTrend(): void {
    // Uncomment when available
  }

  openAlarm(): void {
    // Uncomment when available
  }

  openGrid(): void {
    // Uncomment when available
  }

createTabGroup(): void {
  const id = `tab_diagram_${Date.now()}`;
  
  // Create the component config the same way as in openDiagram
  const componentConfig = new componentConfigDef();
  componentConfig.masterParams = {
    data: {
      DIAGRAM_ID: id,
      viewMode: 'edit'
    }
  };

  const windowsData = [
    {
      id: id,
      title: 'Diagram Tab',
      component: ScdDiagramScdScdDiagramDiagramDiagramComponent,
      inputs: { 
        setComponentConfig_Input: componentConfig 
      }
    }
  ];
  
  this.windowManager.createTabGroup('Dashboard Group', windowsData);
}

  closeAllWindows(): void {
    this.windowManager.closeAllWindows();
  }

  cascadeWindows(): void {
    this.windowManager.cascadeWindows();
  }

  tileWindows(): void {
    this.windowManager.tileWindows();
  }

  closeWindow(windowId: string): void {
    this.windowManager.closeWindow(windowId);
  }

  bringToFront(windowId: string): void {
    this.windowManager.bringToFront(windowId);
  }

  activateWindow(windowId: string): void {
    this.windowManager.activateWindow(windowId);
  }

  minimizeWindow(windowId: string): void {
    const windows = this.windowManager.getWindows();
    const window = windows.find(w => w.id === windowId);
    if (window) {
      window.isMinimized = !window.isMinimized;
      if (window.isMinimized) {
        window.height = 30;
      } else {
        window.height = window.innerHeight || 600;
      }
      this.windowManager['windowsSubject'].next([...windows]);
    }
  }

  maximizeWindow(windowId: string): void {
    this.windowManager.toggleMaximize(windowId);
  }

  getWindowCount(): number {
    return this.windows.length;
  }

  // Tab management
  switchTab(groupId: string, windowId: string): void {
    const group = this.tabGroups.find(g => g.id === groupId);
    if (group) {
      group.activeWindowId = windowId;
      this.windowManager.activateWindow(windowId);
    }
  }

  closeTab(groupId: string, windowId: string): void {
    this.closeWindow(windowId);
  }

  floatWindow(windowId: string): void {
    const windows = this.windowManager.getWindows();
    const window = windows.find(w => w.id === windowId);
    if (window) {
      window.isTabbed = false;
      window.tabGroupId = undefined;
      window.width = 800;
      window.height = 600;
      window.left = window.left || 30;
      window.top = window.top || 30;
      this.windowManager['windowsSubject'].next([...windows]);
    }
  }

  floatAllWindows(groupId: string): void {
    const windows = this.windowManager.getWindows();
    const groupWindows = windows.filter(w => w.tabGroupId === groupId);
    groupWindows.forEach(w => {
      w.isTabbed = false;
      w.tabGroupId = undefined;
      w.width = 800;
      w.height = 600;
      w.left = 30;
      w.top = 30;
    });
    this.windowManager['windowsSubject'].next([...windows]);
  }

  // Drag and drop handlers from MDIWindowComponent
  onDragStart(event: { windowId: string, event: MouseEvent }): void {
    const window = this.windows.find(w => w.id === event.windowId);
    if (window && !window.isMaximized) {
      this.dragData = {
        windowId: event.windowId,
        startX: event.event.clientX,
        startY: event.event.clientY
      };
      event.event.preventDefault();
      event.event.stopPropagation();
    }
  }

  onResizeStart(event: { windowId: string, event: MouseEvent }): void {
    const window = this.windows.find(w => w.id === event.windowId);
    if (window && !window.isMaximized) {
      this.resizeData = {
        windowId: event.windowId,
        startX: event.event.clientX,
        startY: event.event.clientY
      };
      event.event.preventDefault();
      event.event.stopPropagation();
    }
  }

  onContextMenu(event: MouseEvent): void {
    event.preventDefault();
    event.stopPropagation();
    this.contextMenuVisible = true;
    this.contextMenuX = event.clientX;
    this.contextMenuY = event.clientY;
  }

  onDragOver(event: DragEvent): void {
    event.preventDefault();
  }

  onDrop(event: DragEvent): void {
    event.preventDefault();
  }
}