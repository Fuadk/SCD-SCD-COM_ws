// scd-appboard.component.ts - Simplified
import {   Component,   OnInit,   OnDestroy,  Output,   Input,   EventEmitter,   HostListener,  ChangeDetectorRef,  AfterViewInit,  Type} from '@angular/core';
import { Subscription } from 'rxjs';
import { WindowManagerService, WindowInfo, TabGroup } from '../../../services/window-manager.service';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { Router } from '@angular/router';
import { starServices } from 'starlib';
import { StarNotifyService } from '../../../services/starnotification.service';
import { componentConfigDef } from '@modeldir/model';
import { ScdDiagramScdScdDiagramDiagramDiagramComponent } from '../scd-scd-diagram-diagram/scd-scd-diagram-diagram.component';
import { ScdTextPropertiesComponent } from '../scd-text-properties/scd-text-properties.component';
import { TabAlignment } from '@progress/kendo-angular-layout';

declare function getParamConfig(): any;

@Component({
  selector: 'app-scd-appboard',
  templateUrl: './scd-appboard.component.html',
  styleUrls: ['./scd-appboard.component.scss'],
  providers: [WindowManagerService]
})
export class ScdAppboardComponent implements OnInit, OnDestroy, AfterViewInit {
  @Output() saveTriggerOutput: EventEmitter<any> = new EventEmitter();
  @Output() formValidationChangedOutput: EventEmitter<boolean> = new EventEmitter();
  @Output() cancelClicked = new EventEmitter<void>();
  public routineName = "scd_appboard";
  
  // Make components available for template
  public diagramComponent = ScdDiagramScdScdDiagramDiagramDiagramComponent;
  public textPropertiesComponent = ScdTextPropertiesComponent;

  // Window Management Properties (read from service)
  windows: WindowInfo[] = [];
  tabGroups: TabGroup[] = [];
  activeGroupId: string = '';
  isDarkTheme = false;
  contextMenuVisible = false;
  contextMenuX = 0;
  contextMenuY = 0;

  private windowsSubscription!: Subscription;
  private tabGroupsSubscription!: Subscription;
  private componentConfigChangeEvent!: Subscription;
  private dragData: { windowId: string, startX: number, startY: number } | null = null;
  private resizeData: { windowId: string, startX: number, startY: number } | null = null;

  // Original Properties
  public paramConfig;
  public title = '';
  public isPhonePortrait = false;
  
  public alignment: TabAlignment = 'start';
  public masterParams;
  public componentConfig: componentConfigDef;
  public PDFfileName = this.title + ".PDF";
  public routineAuth = "ScdAppboard";
  public compSelector = 'app-scd-appboard';
  public visibleOK_BTNS = false;
  public help_1Config: componentConfigDef;
  public helpOpened = false;

  constructor(
    public router: Router,
    public responsive: BreakpointObserver,
    private starNotify: StarNotifyService,
    private windowManager: WindowManagerService,
    public starServices: starServices,
    private cdr: ChangeDetectorRef
  ) {
    this.router = router;
    this.title = this.starServices.getNLS([], "scd_appboard.scd_appboard.component_title", "");
    this.paramConfig = getParamConfig();
    this.componentConfig = new componentConfigDef();
    if (this.visibleOK_BTNS)
      this.componentConfig.showToolBar = !this.visibleOK_BTNS;
    this.handleComponentConfig(this.componentConfig);
  }

  ngOnInit(): void {
    console.log('[WINDOW-DEBUG] ngOnInit - Component initializing');
    
    this.starServices.actOnParamConfig(this, this.routineName);
    this.responsive
      .observe([Breakpoints.HandsetPortrait])
      .subscribe((state: BreakpointState) => {
        this.isPhonePortrait = false;
        if (state.matches) {
          this.isPhonePortrait = true;
        }
      });
    this.componentConfigChangeEvent = this.starNotify.subscribeEvent<componentConfigDef>('componentConfigDef', componentConfig => {
      if (componentConfig.eventFrom != this.compSelector) {
        if (componentConfig.eventTo.includes(this.compSelector) || componentConfig.eventTo.includes('any')) {
          this.handleComponentConfig(componentConfig);
        }
      }
    });
    this.initComponents();

    // Window Management initialization
    this.windowsSubscription = this.windowManager.windows$.subscribe(windows => {
      this.windows = windows;
      this.cdr.detectChanges();
    });

    this.tabGroupsSubscription = this.windowManager.tabGroups$.subscribe(groups => {
      this.tabGroups = groups;
      if (groups.length > 0 && !this.activeGroupId) {
        this.activeGroupId = groups[0].id;
      }
      this.cdr.detectChanges();
    });
  }

  ngAfterViewInit(): void {
    this.starServices.setRTL();
    if (this.tabGroups.length > 0 && !this.activeGroupId) {
      this.activeGroupId = this.tabGroups[0].id;
    }
  }

  async initComponents() {
    // Original init logic
  }

  ngOnDestroy(): void {
    if (typeof this.componentConfigChangeEvent !== 'undefined') {
      this.componentConfigChangeEvent.unsubscribe();
    }
    if (this.windowsSubscription) {
      this.windowsSubscription.unsubscribe();
    }
    if (this.tabGroupsSubscription) {
      this.tabGroupsSubscription.unsubscribe();
    }
    this.windowManager.closeAllWindows();
  }

  @Input() public set setComponentConfig_Input(ComponentConfig: componentConfigDef) {
    this.handleComponentConfig(ComponentConfig);
  }

  public handleComponentConfig(ComponentConfig: any) {
    if (this.paramConfig.DEBUG_FLAG) console.log("ComponentConfig:ScdAppboardComponent:", ComponentConfig);
    if (typeof ComponentConfig !== "undefined") {
      this.componentConfig = this.starServices.setComponentConfig(ComponentConfig, this.componentConfig);
      if (ComponentConfig.masterParams != null) {
        // Handle master params if needed
      }
    }
  }

  // ===== TRACK BY FUNCTIONS =====

  trackGroup(index: number, group: TabGroup): string {
    return group.id;
  }

  // ===== HOST LISTENERS =====

  @HostListener('document:mousemove', ['$event'])
  onMouseMove(event: MouseEvent): void {
    if (this.dragData) {
      const window = this.windows.find(w => w.id === this.dragData!.windowId);
      if (window && !window.isMaximized) {
        const deltaX = event.clientX - this.dragData.startX;
        const deltaY = event.clientY - this.dragData.startY;
        window.left = Math.max(0, (window.left || 0) + deltaX);
        window.top = Math.max(0, (window.top || 0) + deltaY);
        this.dragData.startX = event.clientX;
        this.dragData.startY = event.clientY;
        this.windowManager['windowsSubject'].next([...this.windows]);
      }
    }

    if (this.resizeData) {
      const window = this.windows.find(w => w.id === this.resizeData!.windowId);
      if (window && !window.isMaximized) {
        const deltaX = event.clientX - this.resizeData.startX;
        const deltaY = event.clientY - this.resizeData.startY;
        window.width = Math.max(200, (window.width || 800) + deltaX);
        window.height = Math.max(150, (window.height || 600) + deltaY);
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

  // ===== COMPONENT RENDERING =====

  getComponentToRender(shapeType: string): any {
    switch (shapeType) {
      case '1':
      case '2':
        return ScdDiagramScdScdDiagramDiagramDiagramComponent;
      case '3':
        return ScdTextPropertiesComponent;
      default:
        return null;
    }
  }

  // ===== GROUP TABS MANAGEMENT =====

  onGroupTabSelect(event: any): void {
    let groupId: string | null = null;
    
    if (event && event.index !== undefined) {
      const index = event.index;
      if (this.tabGroups[index]) {
        groupId = this.tabGroups[index].id;
      }
    } else if (event && event.tab) {
      const group = this.tabGroups.find(g => g.title === event.tab.title);
      if (group) {
        groupId = group.id;
      }
    }
    
    if (groupId) {
      this.activeGroupId = groupId;
    }
  }

  closeGroup(groupId: string, event?: MouseEvent): void {
    if (event) {
      event.stopPropagation();
      event.preventDefault();
    }
    this.windowManager.removeGroup(groupId);
    if (this.activeGroupId === groupId) {
      const remainingGroups = this.tabGroups.filter(g => g.id !== groupId);
      this.activeGroupId = remainingGroups.length > 0 ? remainingGroups[0].id : '';
    }
  }

  // ===== GET WINDOWS FOR GROUP =====

  getWindowsForGroup(groupId: string): WindowInfo[] {
    return this.windowManager.getWindowsForGroup(groupId);
  }

  // ===== WINDOW MANAGEMENT METHODS =====

  openWin(winId: string): void {
    const componentConfig = new componentConfigDef();
    componentConfig.masterParams = {
      data: {
        DIAGRAM_ID: winId,
        viewMode: 'edit'
      }
    };

    let componentToRender = this.getComponentToRender(winId);
    if (!componentToRender) {
      console.error(`No component found for shapeType: ${winId}`);
      return;
    }
    
    if (this.tabGroups.length > 0 && this.activeGroupId) {
      this.windowManager.addWindowToGroup(this.activeGroupId, {
        id: `win_${winId}`,
        title: `Window ${winId}`,
        component: componentToRender,
        inputs: {
          setComponentConfig_Input: componentConfig
        }
      });
    } else {
      this.windowManager.openWindow({
        id: `win_${winId}`,
        title: `Window ${winId}`,
        component: componentToRender,
        inputs: {
          setComponentConfig_Input: componentConfig
        },
        width: 900,
        height: 650
      });
    }
  }

  createTabGroup(title: string): void {
    const groupId = this.windowManager.createTabGroup(title || 'New Tab Group', []);
    this.activeGroupId = groupId;
  }

  addWindowToGroup(groupId: string): void {
    const id = `win_${Date.now()}`;
    const componentConfig = new componentConfigDef();
    componentConfig.masterParams = {
      data: {
        DIAGRAM_ID: id,
        viewMode: 'edit'
      }
    };

    this.windowManager.addWindowToGroup(groupId, {
      id: id,
      title: `Window ${this.getWindowsForGroup(groupId).length + 1}`,
      component: ScdDiagramScdScdDiagramDiagramDiagramComponent,
      inputs: { 
        setComponentConfig_Input: componentConfig 
      }
    });
  }

  closeAllWindows(): void {
    this.windowManager.closeAllWindows();
    this.activeGroupId = '';
  }

  closeWindow(windowId: string): void {
    this.windowManager.closeWindow(windowId);
  }

  bringToFront(windowId: string): void {
    this.windowManager.bringToFront(windowId);
  }
 cascadeWindows(): void {
    this.windowManager.cascadeWindows();
  }

  tileWindows(): void {
    this.windowManager.tileWindows();
  }
  
  activateFloatingWindow(windowId: string): void {
    this.windowManager.bringToFront(windowId);
    this.windowManager.activateWindow(windowId);
  }

  activateGroupWindow(groupId: string, windowId: string): void {
    this.windowManager.activateGroupWindow(groupId, windowId);
  }

  minimizeWindow(windowId: string): void {
    const windows = this.windowManager.windows;
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

  getTotalWindowCount(): number {
    return this.windowManager.getTotalWindowCount();
  }

  // ===== DRAG AND DROP HANDLERS =====

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

  // ===== ORIGINAL EVENT HANDLERS =====

  public ON_CLICK_OK(event) {
    this.componentConfig = new componentConfigDef();
    this.componentConfig.masterSaved = true;
    this.handleComponentConfig(this.componentConfig);
  }

  public ON_CLICK_CANCEL(event) {
    this.cancelClicked.emit();
  }

  public ON_CLICK_HELP(event) {
    this.helpOpened = true;
  }
}