// window-host.component.ts
import { 
  Component, 
  OnInit, 
  OnDestroy, 
  ViewChild, 
  ViewContainerRef, 
  ComponentRef,
  ComponentFactoryResolver,
  Type,
  Injector
} from '@angular/core';
import { Subscription } from 'rxjs';
import { WindowManagerService, WindowInfo, TabGroup } from '../services/window-manager.service';
// Import your screen components
import { ScdDiagramScdScdDiagramDiagramDiagramComponent } from '../components/SCD/scd-scd-diagram-diagram/scd-scd-diagram-diagram.component'

// import { FormComponent } from '../form/form.component';
// import { TrendComponent } from '../trend/trend.component';
// import { AlarmComponent } from '../alarm/alarm.component';
// import { GridComponent } from '../grid/grid.component';

@Component({
  selector: 'app-window-host',
  templateUrl: './window-host.component.html',
  styleUrls: ['./window-host.component.scss']
})
export class WindowHostComponent implements OnInit, OnDestroy {
  @ViewChild('dynamicComponent', { read: ViewContainerRef }) 
  dynamicComponentContainer!: ViewContainerRef;

  windows: WindowInfo[] = [];
  tabGroups: TabGroup[] = [];
  isDarkTheme = false;
  contextMenuVisible = false;
  contextMenuX = 0;
  contextMenuY = 0;

  private windowsSubscription!: Subscription;
  private tabGroupsSubscription!: Subscription;
  private dragData: any = null;
  private resizeData: any = null;
  private componentRefs: Map<string, ComponentRef<any>> = new Map();
  private windowComponents: Map<string, any> = new Map();
  
  // Component registry
  private componentRegistry: Map<string, Type<any>> = new Map();

  constructor(
    private windowManager: WindowManagerService,
    private componentFactoryResolver: ComponentFactoryResolver,
    private injector: Injector
  ) {
    // Register components
    this.componentRegistry.set('diagram', ScdDiagramScdScdDiagramDiagramDiagramComponent);
    // this.componentRegistry.set('form', FormComponent);
    // this.componentRegistry.set('trend', TrendComponent);
    // this.componentRegistry.set('alarm', AlarmComponent);
    // this.componentRegistry.set('grid', GridComponent);
  }

  ngOnInit(): void {
    this.windowsSubscription = this.windowManager.windows$.subscribe(windows => {
      this.windows = windows;
      this.renderWindows();
    });

    this.tabGroupsSubscription = this.windowManager.tabGroups$.subscribe(groups => {
      this.tabGroups = groups;
    });
  }

  ngOnDestroy(): void {
    if (this.windowsSubscription) this.windowsSubscription.unsubscribe();
    if (this.tabGroupsSubscription) this.tabGroupsSubscription.unsubscribe();
    this.destroyAllComponents();
  }

  // Window management methods
  openDiagram(): void {
    this.windowManager.openWindow({
      id: `diagram_${Date.now()}`,
      title: 'Diagram View',
      component: ScdDiagramScdScdDiagramDiagramDiagramComponent,
      inputs: { diagramId: '123', viewMode: 'edit' },
      width: 900,
      height: 650
    });
  }

  openForm(): void {
    // this.windowManager.openWindow({
    //   id: `form_${Date.now()}`,
    //   title: 'Form View',
    //   component: FormComponent,
    //   inputs: { formId: '456', mode: 'view' },
    //   width: 700,
    //   height: 500
    // });
  }

  openTrend(): void {
    // this.windowManager.openWindow({
    //   id: `trend_${Date.now()}`,
    //   title: 'Trend Viewer',
    //   component: TrendComponent,
    //   inputs: { trendId: '789', timeRange: '24h' },
    //   width: 800,
    //   height: 400
    // });
  }

  openAlarm(): void {
    // this.windowManager.openWindow({
    //   id: `alarm_${Date.now()}`,
    //   title: 'Alarm List',
    //   component: AlarmComponent,
    //   inputs: { filter: 'active' },
    //   width: 600,
    //   height: 400
    // });
  }

  openGrid(): void {
    // this.windowManager.openWindow({
    //   id: `grid_${Date.now()}`,
    //   title: 'Data Grid',
    //   component: GridComponent,
    //   inputs: { dataSource: 'points', pageSize: 50 },
    //   width: 850,
    //   height: 550
    // });
  }

  createTabGroup(): void {
    const windows = [
      {
        id: `tab_diagram_${Date.now()}`,
        title: 'Diagram',
        component: ScdDiagramScdScdDiagramDiagramDiagramComponent,
        inputs: { diagramId: '123' },
        left: 0, top: 0, width: 100, height: 100, zIndex: 0, isActive: true, isTabbed: true
      },
      // {
      //   id: `tab_trend_${Date.now()}`,
      //   title: 'Trend',
      //   component: TrendComponent,
      //   inputs: { trendId: '789' },
      //   left: 0, top: 0, width: 100, height: 100, zIndex: 0, isActive: false, isTabbed: true
      // }
    ];

    const groupId = this.windowManager.createTabGroup('Dashboard Group', windows);
    
    // Open windows in the tab group
    windows.forEach(w => {
      this.windowManager.openWindow({
        ...w,
        isTabbed: true,
        tabGroupId: groupId,
        left: 20,
        top: 20
      });
    });
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
    // Implement minimize functionality
    const windows = this.windowManager.getWindows();
    const window = windows.find(w => w.id === windowId);
    if (window) {
      // Store minimized state - could be implemented with a tray or taskbar
    }
  }

  toggleMaximize(windowId: string): void {
    const windows = this.windowManager.getWindows();
    const window = windows.find(w => w.id === windowId);
    if (window) {
      // Toggle between maximized and restored
      if (window.width === window.innerWidth && window.height === window.innerHeight) {
        // Restore
        window.width = 800;
        window.height = 600;
        window.left = 30;
        window.top = 30;
      } else {
        // Maximize
        window.left = 0;
        window.top = 0;
        window.width = window.innerWidth;
        window.height = window.innerHeight;
      }
    }
  }

  getWindowIcon(component: Type<any>): string {
    const componentMap: { [key: string]: string } = {
      'ScdDiagramScdScdDiagramDiagramDiagramComponent': '📊',
      'FormComponent': '📝',
      'TrendComponent': '📈',
      'AlarmComponent': '🔔',
      'GridComponent': '📋'
    };
    return componentMap[component.name] || '📄';
  }

  getWindowCount(): number {
    return this.windows.length;
  }

  // Tab management
  switchTab(groupId: string, windowId: string): void {
    // Find the tab group
    const group = this.tabGroups.find(g => g.id === groupId);
    if (group) {
      group.activeWindowId = windowId;
      // Activate the corresponding window
      this.windowManager.activateWindow(windowId);
    }
  }

  closeTab(groupId: string, windowId: string): void {
    this.windowManager.closeWindow(windowId);
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
    }
  }

  floatAllWindows(groupId: string): void {
    const windows = this.windowManager.getWindows();
    const groupWindows = windows.filter(w => w.tabGroupId === groupId);
    groupWindows.forEach(w => {
      w.isTabbed = false;
      w.tabGroupId = undefined;
    });
  }

  // Drag and drop
  startDrag(event: MouseEvent, windowId: string): void {
    // Only start drag if clicked on header
    if (!(event.target as HTMLElement).closest('.mdi-window-controls')) {
      const window = this.windows.find(w => w.id === windowId);
      if (window) {
        this.dragData = {
          windowId,
          offsetX: event.clientX - window.left,
          offsetY: event.clientY - window.top
        };
        event.preventDefault();
      }
    }
  }

  startResize(event: MouseEvent, windowId: string): void {
    const window = this.windows.find(w => w.id === windowId);
    if (window) {
      this.resizeData = {
        windowId,
        startX: event.clientX,
        startY: event.clientY,
        startWidth: window.width,
        startHeight: window.height
      };
      event.preventDefault();
      event.stopPropagation();
    }
  }

  onDragOver(event: DragEvent): void {
    event.preventDefault();
  }

  onDrop(event: DragEvent): void {
    event.preventDefault();
    // Handle drop if needed
  }

  // Context menu
  onContextMenu(event: MouseEvent): void {
    event.preventDefault();
    this.contextMenuVisible = true;
    this.contextMenuX = event.clientX;
    this.contextMenuY = event.clientY;
  }

  // Render dynamic components
  private renderWindows(): void {
    // Clear all existing components
    this.destroyAllComponents();

    // Render each window
    this.windows.forEach((window, index) => {
      if (window.component) {
        // Create component instance
        const componentFactory = this.componentFactoryResolver.resolveComponentFactory(window.component);
        const componentRef = this.dynamicComponentContainer.createComponent(
          componentFactory, 
          0,
          this.injector
        );

        // Set input properties
        if (window.inputs) {
          Object.keys(window.inputs).forEach(key => {
            componentRef.instance[key] = window.inputs[key];
          });
        }

        // Store component reference
        this.componentRefs.set(window.id, componentRef);
        this.windowComponents.set(window.id, componentRef.instance);
      }
    });
  }

  private destroyAllComponents(): void {
    this.componentRefs.forEach((ref) => {
      ref.destroy();
    });
    this.componentRefs.clear();
    this.windowComponents.clear();
  }
}