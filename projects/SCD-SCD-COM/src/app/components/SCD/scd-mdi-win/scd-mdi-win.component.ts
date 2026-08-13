	//
	import {   Component,   OnInit,   OnDestroy,  Output,   Input,   EventEmitter,   HostListener,  ChangeDetectorRef,  AfterViewInit,  Type} from '@angular/core';
import { Subscription } from 'rxjs';
import { WindowManagerService, WindowInfo, TabGroup } from '../../../services/window-manager.service';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { Router } from '@angular/router';
import { starServices } from 'starlib';
import { StarNotifyService } from '../../../services/starnotification.service';
import { componentConfigDef } from '@modeldir/model';
import { TabAlignment } from '@progress/kendo-angular-layout';

declare function getParamConfig(): any;
		
	 import { ScdDisplayScdScdDisplayDiagramDiagramComponent } from '../scd-scd-display-diagram/scd-scd-display-diagram.component';
		
	 import { ScdApplicationUsersManagementComponent } from '../scd-application-users-management/scd-application-users-management.component';
		
	 import { ScdSymbolfactoryplusComponent } from '../scd-symbolfactoryplus/scd-symbolfactoryplus.component';
		
	 import { ScdApplicationTagsComponent } from '../scd-application-tags/scd-application-tags.component';
		
	 import { ScdApplicationDisplayComponent } from '../scd-application-display/scd-application-display.component';
		//
	  
	declare function getParamConfig(): any;

	@Component({
	  selector: 'app-scd-mdi-win',

	  templateUrl: './scd-mdi-win.component.html',

	  styleUrls: ['./scd-mdi-win.component.scss'],
	
	  providers: [WindowManagerService] ,
	  standalone: false
	})
	export class ScdMdiWinComponent implements OnInit, OnDestroy, AfterViewInit {

	@Output() saveTriggerOutput: EventEmitter<any> = new EventEmitter();
  	@Output() formValidationChangedOutput: EventEmitter<boolean> = new EventEmitter();
  	@Output() cancelClicked = new EventEmitter<void>();
	public routineName = "ScdMdiWin";



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
  public routineAuth = 'ScdMdiWin';
  public compSelector = 'app-scd-mdi-win';
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
 @Input() public set detail_Input(form: any) {}
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
	  this.WHEN_NOTIFY(ComponentConfig);
      if (ComponentConfig.masterParams != null) {
        // Handle master params if needed
      }
    }
  }
   async WHEN_NOTIFY(ComponentConfig){
   if (ComponentConfig.masterParams != null)
    {
      let masterParams = ComponentConfig.masterParams;
      console.log("masterParams:", masterParams)
      let winId= '';
	  let shouldOpenOutside = false; 
      if (masterParams.MAXIMIZED == 'Y')
        shouldOpenOutside = true; 
      if (masterParams.MDI_ID != null)
      winId = masterParams.MDI_ID;
      if (winId != '' ){
          this.openWin(winId+'', masterParams, shouldOpenOutside);
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


//////
  

   // ===== NEW: Tab-based methods =====
getComponentToRender(shapeType: string): any {
    switch (shapeType) {
		
	case '1':
		return ScdDisplayScdScdDisplayDiagramDiagramComponent;
		
	case '2':
		return ScdApplicationUsersManagementComponent;
		
	case '3':
		return ScdSymbolfactoryplusComponent;
		
	case '4':
		return ScdApplicationTagsComponent;
		
	case '5':
		return ScdApplicationDisplayComponent;
	
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

     openWin(winId: string, masterParams?: any, openOutsideContainer: boolean = false): void {
  console.log("openWin:masterParams:", masterParams);
  let viewMode: 'edit';
  let MENU_ID = null;
  let WindowID = winId;
  let title = "Window " + winId;
  
  if (typeof masterParams != "undefined") {
    viewMode = masterParams.action;
    MENU_ID = masterParams.MENU_ID;
    WindowID = masterParams.Id + "_" + masterParams.Item;
    title = masterParams.Item;
  }
  
  const componentConfig = new componentConfigDef();
  componentConfig.masterParams = {
    data: {
      MENU_ID: MENU_ID,
      viewMode: viewMode
    }
  };

  let componentToRender = this.getComponentToRender(winId);
  console.log("openWin:componentToRender:", componentToRender);
  
  if (!componentToRender) {
    console.error("No component found for shapeType:", winId);
    return;
  }
  
  console.log("openWin:componentToRender:", componentToRender, "componentConfig.masterParams:", componentConfig.masterParams);
  
  // NEW: Handle window placement based on flag
  if (openOutsideContainer) {
    // Open as a floating window outside the container
    // Use fixed position or position relative to viewport
    this.windowManager.openWindow({
    id: WindowID,
    title: title,
    component: componentToRender,
    inputs: {
      setComponentConfig_Input: componentConfig
    },
    width: window.innerWidth,
    height: window.innerHeight,
    left: 0,
    top: 0,
    outsideContainer: true,
    isMaximized: true // Start maximized
  });
  } else {
    // Existing logic - open inside container
    if (this.tabGroups.length > 0 && this.activeGroupId) {
      this.windowManager.addWindowToGroup(this.activeGroupId, {
        id: WindowID,
        title: title,
        component: componentToRender,
        inputs: {
          setComponentConfig_Input: componentConfig
        }
      });
    } else {
      this.windowManager.openWindow({
        id: WindowID,
        title: title,
        component: componentToRender,
        inputs: {
          setComponentConfig_Input: componentConfig
        },
        width: 900,
        height: 650
      });
    }
  }
}

  createTabGroup(title: string): void {
    const groupId = this.windowManager.createTabGroup(title || 'New Tab Group', []);
    this.activeGroupId = groupId;
  }

  addWindowToGroup(groupId: string): void {
    const id = "win_" + Date.now();
    const componentConfig = new componentConfigDef();
    componentConfig.masterParams = {
      data: {
        DIAGRAM_ID: id,
        viewMode: 'edit'
      }
    };

    this.windowManager.addWindowToGroup(groupId, {
      id: id,
      title: "Window " + (this.getWindowsForGroup(groupId).length + 1),
      component: ScdDisplayScdScdDisplayDiagramDiagramComponent,
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
menuItems = [
  {
    text: 'Tile Windows in Group',
    icon: 'window-tile',
    data: { action: 'tile-group' }
  },
  {
    text: 'Cascade Windows in Group',
    icon: 'window-cascade',
    data: { action: 'cascade-group' }
  },
  {
    text: 'Tile All Windows',
    icon: 'window-tile',
    data: { action: 'tile-all' }
  },
  {
    text: 'Cascade All Windows',
    icon: 'window-cascade',
    data: { action: 'cascade-all' }
  },
  {
    text: 'Close All',
    icon: 'close',
    data: { action: 'close-all' }
  }
];

// Update the menu click handler
onMenuItemClick(event: any): void {
  const action = event.data?.action;
  
  switch (action) {
    case 'tile-group':
      this.tileWindowsInGroup();
      break;
    case 'cascade-group':
      this.cascadeWindowsInGroup();
      break;
    case 'tile-all':
      this.tileAllWindows();
      break;
    case 'cascade-all':
      this.cascadeAllWindows();
      break;
    case 'close-all':
      this.closeAllWindows();
      break;
    default:
      console.warn('Unknown menu action:', action);
  }
}
tileWindowsInGroup(): void {
  if (this.activeGroupId) {
    this.windowManager.tileWindows(this.activeGroupId);
  } else {
    console.warn('No active group to tile');
  }
}

cascadeWindowsInGroup(): void {
  if (this.activeGroupId) {
    this.windowManager.cascadeWindows(this.activeGroupId);
  } else {
    console.warn('No active group to cascade');
  }
}

// All windows tile/cascade (floating windows only)
tileAllWindows(): void {
  this.windowManager.tileWindows(); // No groupId = floating windows only
}

cascadeAllWindows(): void {
  this.windowManager.cascadeWindows(); // No groupId = floating windows only
}


tileWindows(): void {
  this.windowManager.tileWindows();
}

cascadeWindows(): void {
  this.windowManager.cascadeWindows();
}

		
	 //      this.scd-scd-display-diagram0_0Config = new componentConfigDef();

	 //      this.scd_scd_display_diagram0_0Config = ComponentConfig;
 
		
	 //      this.scd-application-users-management1_1Config = new componentConfigDef();

	 //      this.scd_application_users_management1_1Config = ComponentConfig;
 
		
	 //      this.scd-symbolfactoryplus2_2Config = new componentConfigDef();

	 //      this.scd_symbolfactoryplus2_2Config = ComponentConfig;
 
		
	 //      this.scd-application-tags3_3Config = new componentConfigDef();

	 //      this.scd_application_tags3_3Config = ComponentConfig;
 
		
	 //      this.scd-application-display4_4Config = new componentConfigDef();

	 //      this.scd_application_display4_4Config = ComponentConfig;
 
	}
