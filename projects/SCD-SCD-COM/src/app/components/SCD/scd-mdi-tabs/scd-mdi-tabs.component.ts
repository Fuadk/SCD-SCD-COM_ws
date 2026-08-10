	//
	import { Component, OnInit, Output, Input, EventEmitter, OnDestroy, ChangeDetectorRef, AfterViewInit, ViewChild, ElementRef, Type } from '@angular/core';
	import { scdapplicationScdAdApplication, scddiagramScdScdDiagramDiagram, scdalarmScdGroupMembership, componentConfigDef } from '@modeldir/model';
	import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
	import { Subscription } from 'rxjs';
	import { starServices } from 'starlib';
	import { Starlib1 } from '../../Starlib1';
	import { Router } from '@angular/router';
	import { StarNotifyService } from '../../../services/starnotification.service';
	import { TabAlignment } from '@progress/kendo-angular-layout';
	import { TabManagerService, TabInfo, TabGroup } from '../../../services/tab-manager.service';
		
	 import { ScdDiagramScdScdDiagramDiagramDiagramComponent } from '../scd-scd-diagram-diagram/scd-scd-diagram-diagram.component';
		
	 import { ScdTextPropertiesComponent } from '../scd-text-properties/scd-text-properties.component';
		//
	  import {
      DragTargetContainerDirective,
      DropTargetContainerDirective,
      DropTargetEvent,
    } from "@progress/kendo-angular-utils";
    import { SVGIcon } from "@progress/kendo-svg-icons";
	declare function getParamConfig(): any;

	@Component({
	  selector: 'app-scd-mdi-tabs',

	  templateUrl: './scd-mdi-tabs.component.html',

	  styleUrls: ['./scd-mdi-tabs.component.scss'],
	
	  providers: [TabManagerService] ,
	  standalone: false
	})
	export class ScdMdiTabsComponent implements OnInit, OnDestroy, AfterViewInit {

	@Output() saveTriggerOutput: EventEmitter<any> = new EventEmitter();
	@Output() formValidationChangedOutput: EventEmitter<boolean> = new EventEmitter();
	@Output() cancelClicked = new EventEmitter<void>();

	 // ViewChild for drag and drop
    @ViewChild("wrapper", { read: DragTargetContainerDirective })
    dragTargetContainer!: DragTargetContainerDirective;
  
    @ViewChild("wrapper", { read: DropTargetContainerDirective })
    dropTargetContainer!: DropTargetContainerDirective;
  
    @ViewChild("wrapper", { read: ElementRef })
    wrapper!: ElementRef;
	// Make components available for template
	public diagramComponent = ScdDiagramScdScdDiagramDiagramDiagramComponent;
	public textPropertiesComponent = ScdTextPropertiesComponent;



	
	
	// Tab Management Properties
	tabs: TabInfo[] = [];
	tabGroups: TabGroup[] = [];
	activeTabId: string = '';
	activeGroupId: string = '';
	isDarkTheme = false;

	// Drag and drop properties
    
    private readonly DROP_INDICATOR_BEFORE = "drop-indicator-before";
    private readonly DROP_INDICATOR_AFTER = "drop-indicator-after";
    private dragCounter = 0;
    private tabIdToIndexMap = new Map<string, number>();
	
	private tabsSubscription!: Subscription;
	private tabGroupsSubscription!: Subscription;
	private componentConfigChangeEvent!: Subscription;

	// Original Properties
	public paramConfig;
	public title = '';
	public isPhonePortrait = false;
	

	public routineName = "ScdMdiTabs";

	public alignment: TabAlignment = 'start';
	public selectedTab = 2;
	public masterParams;
	public gap: any = {
		rows: 1,
		columns: 1,
	};

	public componentConfig: componentConfigDef;

	
	public PDFfileName = this.title + ".PDF";
	public routineAuth = 'ScdMdiTabs';
	public compSelector = 'app-scd-mdi-tabs';
	
	constructor(
		public router: Router,
		public responsive: BreakpointObserver,
		private starNotify: StarNotifyService,
		public starServices: starServices,
		public starlib1: Starlib1,
		private tabManager: TabManagerService,
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
	////////
	 @Input() public set detail_Input(form: any) {}
ngOnInit(): void {
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
  // Tab Management initialization
     this.tabsSubscription = this.tabManager.tabs$.subscribe(tabs => {
      console.log('[DRAG-DEBUG] tabs$ subscription triggered, tabs count:', tabs.length);
      this.tabs = tabs;
      
    //  setTimeout(() => {
	//	console.log("DEBUGGING:Refreshing Drag Containers");
	//	this.dragTargetContainer?.notify();
	//	this.dropTargetContainer?.notify();
	//});

      // Update the tab ID to index map
     // this.updateTabIndexMap();
      
      // If there are tabs and no active tab is set, select the first one
      if (tabs.length > 0 && !this.activeTabId) {
        this.activeTabId = tabs[0].id;
        console.log('Setting active tab to:', this.activeTabId);
        this.tabManager.activateTab(this.activeTabId);
      }
      
      this.cdr.detectChanges();
	
    });


    this.tabGroupsSubscription = this.tabManager.tabGroups$.subscribe(groups => {
      console.log('[DRAG-DEBUG] tabGroups$ subscription triggered, groups count:', groups.length);
      this.tabGroups = groups;
      
      // Set active group if not set and groups exist
      if (groups.length > 0 && !this.activeGroupId) {
        this.activeGroupId = groups[0].id;
      }
      
      this.cdr.detectChanges();
    
  });
  }
	ngAfterViewInit(): void {
    console.log('[DRAG-DEBUG] ngAfterViewInit - View initialized');
    
    if (this.tabs.length > 0) {
      this.activeTabId = this.tabs[0].id;
    }
    
    
    if (this.tabGroups.length > 0 && !this.activeGroupId) {
      this.activeGroupId = this.tabGroups[0].id;
    }
  }

 
  async initComponents() {
    
  }

  ngOnDestroy(): void {
  // Unsubscribe from events
  if (typeof this.componentConfigChangeEvent !== 'undefined') {
    this.componentConfigChangeEvent.unsubscribe();
  }
  if (this.tabsSubscription) {
    this.tabsSubscription.unsubscribe();
  }
  if (this.tabGroupsSubscription) {
    this.tabGroupsSubscription.unsubscribe();
  }
  
  // 🔥 IMPORTANT: Clear all tabs when component is destroyed
  this.tabManager.closeAllTabs();
  
  // Reset active states
  this.activeTabId = '';
  this.activeGroupId = '';
  
  console.log('[DRAG-DEBUG] Component destroyed, tabs cleared');
}
	

  public handleComponentConfig(ComponentConfig: any) {
    if (this.paramConfig.DEBUG_FLAG) console.log("ComponentConfig:ScdAppboardComponent:", ComponentConfig);
    if (typeof ComponentConfig !== "undefined") {
      this.componentConfig = this.starServices.setComponentConfig(ComponentConfig, this.componentConfig);
      

      if (ComponentConfig.masterParams != null) {

      }
    }
  }

  // ===== DRAG AND DROP REORDERING METHODS =====

  /**
   * Track by function for ngFor to prevent unnecessary re-renders
   */
  trackTab(index: number, tab: TabInfo): string {
    return tab.id;
  }
trackGroup(index: number, group: TabGroup): string {
    return group.id;
  }

  // ===== GROUP TABS MANAGEMENT =====

  onGroupTabSelect(event: any): void {
    console.log('[DRAG-DEBUG] Group tab selected:', event);
    
    let groupId: string | null = null;
    
    if (event && event.index !== undefined) {
      const index = event.index;
      if (this.tabGroups[index]) {
        groupId = this.tabGroups[index].id;
      }
    } else if (event && event.tab) {
      // Try to find the group by the tab's content
      const group = this.tabGroups.find(g => g.title === event.tab.title);
      if (group) {
        groupId = group.id;
      }
    }
    
    if (groupId) {
      this.activeGroupId = groupId;
      console.log('[DRAG-DEBUG] Active group set to:', groupId);
    }
  }

  closeGroup(groupId: string, event?: MouseEvent): void {
  if (event) {
    event.stopPropagation();
    event.preventDefault();
  }
  
  console.log('[DRAG-DEBUG] Closing group:', groupId);
  this.tabManager.removeGroup(groupId);
  
  if (this.activeGroupId === groupId) {
    const remainingGroups = this.tabGroups.filter(g => g.id !== groupId);
    this.activeGroupId = remainingGroups.length > 0 ? remainingGroups[0].id : '';
  }
}

  

  onGroupTabSelectInternal(event: any, groupId: string): void {
    console.log('[DRAG-DEBUG] Group tab select internal:', event, 'groupId:', groupId);
    
    let tabId: string | null = null;
    
    if (event && event.index !== undefined) {
      const index = event.index;
      const group = this.tabGroups.find(g => g.id === groupId);
      if (group && group.tabs[index]) {
        tabId = group.tabs[index].id;
      }
    } else if (event && event.tab) {
      const group = this.tabGroups.find(g => g.id === groupId);
      if (group) {
        const tab = group.tabs.find(t => t.title === event.tab.title);
        if (tab) {
          tabId = tab.id;
        }
      }
    }
    
    if (tabId) {
      // Update the group's active tab
      const groups = [...this.tabGroups];
      const group = groups.find(g => g.id === groupId);
      if (group) {
        group.activeTabId = tabId;
        (this.tabManager as any).tabGroupsSubject.next(groups);
        console.log('[DRAG-DEBUG] Active tab for group', groupId, 'set to:', tabId);
      }
    }
  }

  onGroupTabClose(event: any, groupId: string): void {
    console.log('[DRAG-DEBUG] Group tab close:', event, 'groupId:', groupId);
    
    if (event && event.preventDefault) {
      event.preventDefault();
    }
    
    let tabId: string | null = null;
    
    if (event && event.index !== undefined) {
      const index = event.index;
      const group = this.tabGroups.find(g => g.id === groupId);
      if (group && group.tabs[index]) {
        tabId = group.tabs[index].id;
      }
    } else if (event && event.tab) {
      const group = this.tabGroups.find(g => g.id === groupId);
      if (group) {
        const tab = group.tabs.find(t => t.title === event.tab.title);
        if (tab) {
          tabId = tab.id;
        }
      }
    }
    
    if (tabId) {
      console.log('[DRAG-DEBUG] Closing tab:', tabId, 'from group:', groupId);
      
      // Remove the tab from the group
      const groups = [...this.tabGroups];
      const group = groups.find(g => g.id === groupId);
      if (group) {
        const tabIndex = group.tabs.findIndex(t => t.id === tabId);
        if (tabIndex !== -1) {
          group.tabs.splice(tabIndex, 1);
          
          // Update active tab if needed
          if (group.activeTabId === tabId) {
            group.activeTabId = group.tabs.length > 0 ? group.tabs[0].id : undefined;
          }
          
          (this.tabManager as any).tabGroupsSubject.next(groups);
        }
      }
    }
  }

  // ===== DRAG AND DROP METHODS =====

  /**
   * This is the key method that provides drag data to Kendo
   * It must be bound in the template using [dragData]="dragData"
   */
    public dragData = ({ dragTarget }: { dragTarget: HTMLElement }) => {
  this.dragCounter++;
  
  console.log('[DRAG-DEBUG] dragTarget:', dragTarget);
  console.log('[DRAG-DEBUG] dragTarget classList:', dragTarget?.className);
  
  let tabItem = dragTarget;
  if (dragTarget && !dragTarget.classList.contains('k-tabstrip-item')) {
    tabItem = dragTarget.closest('.k-tabstrip-item') as HTMLElement;
    console.log('[DRAG-DEBUG] Found closest k-tabstrip-item:', tabItem);
  }
  
  if (tabItem instanceof HTMLLIElement) {
    // Try multiple ways to find the tab
    let fromIndex: number | null = null;
    
    // Method 1: Try to get from li id
    const liId = tabItem.id;
    console.log('[DRAG-DEBUG] li.id:', liId);
    
    if (liId) {
      const idParts = liId.split('-');
      const lastPart = idParts[idParts.length - 1];
      const possibleIndex = parseInt(lastPart, 10);
      if (!isNaN(possibleIndex)) {
        fromIndex = possibleIndex;
        console.log('[DRAG-DEBUG] Method 1 - Extracted index from id:', fromIndex);
      }
    }
    
    // Method 2: Try to find by title
    if (fromIndex === null) {
      const titleSpan = tabItem.querySelector('.tab-title');
      if (titleSpan) {
        const title = titleSpan.textContent?.trim();
        console.log('[DRAG-DEBUG] Method 2 - Found tab title:', title);
        if (title) {
          // Check both main tabs and group tabs
          let foundTab = this.tabs.find(t => t.title === title);
          if (foundTab) {
            fromIndex = this.tabs.indexOf(foundTab);
            console.log('[DRAG-DEBUG] Method 2 - Found in main tabs at index:', fromIndex);
          } else {
            // Check group tabs
            for (const group of this.tabGroups) {
              const groupTab = group.tabs.find(t => t.title === title);
              if (groupTab) {
                // For group tabs, we need to find the tab in the main tabs array
                const mainTabIndex = this.tabs.findIndex(t => t.id === groupTab.id);
                if (mainTabIndex !== -1) {
                  fromIndex = mainTabIndex;
                  console.log('[DRAG-DEBUG] Method 2 - Found in group tabs at main index:', fromIndex);
                  break;
                }
              }
            }
          }
        }
      }
    }
    
    // Method 3: Try to get from data attribute
    if (fromIndex !== null) {
        console.log('[DRAG-DEBUG] ✅ dragData returning fromIndex:', fromIndex);
        return { fromIndex };
      }
    }
  
  console.log('[DRAG-DEBUG] ❌ dragData returning null');
  return null;
};

  public onDragOver(e: any): void {
    this.dragCounter++;
    
    console.log('[DRAG-DEBUG] onDragOver event:', e);
    console.log('[DRAG-DEBUG] onDragOver - dragData:', e.dragData);
    console.log('[DRAG-DEBUG] onDragOver - dropTarget:', e.dropTarget);
    
    if (!e.dragData) {
      console.warn('[DRAG-DEBUG] ⚠️ No dragData in onDragOver');
      return;
    }
    
    // Find the drop target
    let dropTarget = e.dropTarget;
    if (dropTarget && !dropTarget.classList.contains('k-tabstrip-item')) {
      dropTarget = dropTarget.closest('.k-tabstrip-item');
    }
    
    if (!dropTarget || !(dropTarget instanceof HTMLLIElement)) {
      console.warn('[DRAG-DEBUG] ⚠️ Invalid drop target:', e.dropTarget);
      return;
    }
    
    console.log('[DRAG-DEBUG] ✅ onDragOver - dropTarget found:', dropTarget);
    console.log('[DRAG-DEBUG] ✅ onDragOver - dropTarget.id:', dropTarget.id);

    this.clearDropIndicators();

    const isDropAfter = this.isDropAfterMiddle(dropTarget, e.dragEvent.clientX);
    console.log('[DRAG-DEBUG] isDropAfter:', isDropAfter);
    
    const indicatorClass = isDropAfter ? this.DROP_INDICATOR_AFTER : this.DROP_INDICATOR_BEFORE;
    console.log('[DRAG-DEBUG] Adding indicator class:', indicatorClass);
    dropTarget.classList.add(indicatorClass);
  }

  public clearDropIndicators(): void {
    // Clear indicators from all tabstrips
    const tabItems = document.querySelectorAll('.k-tabstrip-item');
    tabItems.forEach((item) => {
      const element = item as HTMLElement;
      element.classList.remove(this.DROP_INDICATOR_BEFORE, this.DROP_INDICATOR_AFTER);
    });
  }


 private isDropAfterMiddle(element: HTMLElement, clientX: number): boolean {
    const rect = element.getBoundingClientRect();
    const middle = rect.left + rect.width / 2;
    return clientX >= middle;
  }

   public onDrop(e: any, groupId?: string): void {
  console.log('[DRAG-DEBUG] ✅✅✅ onDrop called! ✅✅✅');
  console.log('[DRAG-DEBUG] onDrop - groupId:', groupId);
  console.log('[DRAG-DEBUG] onDrop - event:', e);
  console.log('[DRAG-DEBUG] onDrop - dragData:', e.dragData);
  console.log('[DRAG-DEBUG] onDrop - dragTarget:', e.dragTarget);
  console.log('[DRAG-DEBUG] onDrop - dropTarget:', e.dropTarget);
  
  this.clearDropIndicators();

  if (!e.dragData) {
    console.warn('[DRAG-DEBUG] ⚠️ No dragData in onDrop');
    return;
  }
  
  let dragTarget = e.dragTarget;
  if (dragTarget && !dragTarget.classList.contains('k-tabstrip-item')) {
    dragTarget = dragTarget.closest('.k-tabstrip-item');
    console.log('[DRAG-DEBUG] Found closest drag target:', dragTarget);
  }
  
  let dropTarget = e.dropTarget;
  if (dropTarget && !dropTarget.classList.contains('k-tabstrip-item')) {
    dropTarget = dropTarget.closest('.k-tabstrip-item');
    console.log('[DRAG-DEBUG] Found closest drop target:', dropTarget);
  }
  
  if (!dragTarget || !(dragTarget instanceof HTMLLIElement)) {
    console.warn('[DRAG-DEBUG] ⚠️ Invalid drag target');
    return;
  }
  
  if (!dropTarget || !(dropTarget instanceof HTMLLIElement)) {
    console.warn('[DRAG-DEBUG] ⚠️ Invalid drop target');
    return;
  }

  const { fromIndex } = e.dragData;
  console.log('[DRAG-DEBUG] fromIndex:', fromIndex);
  console.log('[DRAG-DEBUG] Current tabs:', this.tabs.map(t => t.title));
  
  // Get the drop target index
  let toIndex: number | null = null;
  const dropId = dropTarget.id;
  console.log('[DRAG-DEBUG] dropTarget.id:', dropId);
  
  // Try to extract index from id
  if (dropId) {
    const idParts = dropId.split('-');
    const lastPart = idParts[idParts.length - 1];
    const possibleIndex = parseInt(lastPart, 10);
    if (!isNaN(possibleIndex)) {
      toIndex = possibleIndex;
      console.log('[DRAG-DEBUG] Extracted toIndex from id:', toIndex);
    }
  }
  
  // Try to find by title
  if (toIndex === null) {
    const titleSpan = dropTarget.querySelector('.tab-title');
    if (titleSpan) {
      const title = titleSpan.textContent?.trim();
      console.log('[DRAG-DEBUG] Found drop target title:', title);
      if (title) {
        const foundTab = this.tabs.find(t => t.title === title);
        if (foundTab) {
          toIndex = this.tabs.indexOf(foundTab);
          console.log('[DRAG-DEBUG] Found toIndex by title:', toIndex);
        }
      }
    }
  }
  
  if (toIndex === null) {
    console.warn('[DRAG-DEBUG] ⚠️ Could not determine drop target index');
    return;
  }

  console.log('[DRAG-DEBUG] toIndex:', toIndex);
  
  const isDropAfter = this.isDropAfterMiddle(dropTarget, e.dragEvent.clientX);
  console.log('[DRAG-DEBUG] isDropAfter:', isDropAfter);
  
  let destinationIndex: number | null;
  if (fromIndex < toIndex) {
    destinationIndex = isDropAfter ? toIndex : toIndex - 1;
  } else {
    destinationIndex = isDropAfter ? toIndex + 1 : toIndex;
  }
  
  console.log('[DRAG-DEBUG] destinationIndex:', destinationIndex);
  
  if (destinationIndex === null || destinationIndex === fromIndex) {
    console.log('[DRAG-DEBUG] No reorder needed');
    return;
  }

  // Use the service to reorder tabs
    this.tabManager.reorderTabs(fromIndex, destinationIndex, groupId);
}

//////
  

   // ===== NEW: Tab-based methods =====
getComponentToRender(shapeType: string): any {
    switch (shapeType) {
		
	case '1':
		return ScdDiagramScdScdDiagramDiagramDiagramComponent;
		
	case '2':
		return ScdTextPropertiesComponent;
	
      default:
        return null;
    }

  }

  openTab(TabId: string): void {
    const componentConfig = new componentConfigDef();
    componentConfig.masterParams = {
      data: {
        DIAGRAM_ID: TabId,
        viewMode: 'edit'
      }
    };
let componentToRender = this.getComponentToRender(TabId);
    if (!componentToRender) {
      console.error("No component found for shapeType: " + TabId );
      return;
    }
    this.tabManager.openTab({
      id: "tab_" + TabId,
      title: "Tab" + TabId,
      component: componentToRender,
      inputs: {
        setComponentConfig_Input: componentConfig
      },
      closable: true,
      icon: '📊'
    });
  }

openDiagram(diagramId?: string): void {
    const id = diagramId || "diagram_" + Date.now();
    const componentConfig = new componentConfigDef();
    componentConfig.masterParams = {
      data: {
        DIAGRAM_ID: id,
        viewMode: 'edit'
      }
    };

    this.tabManager.openTab({
      id: "diagram_" + id,
      title: "Diagram " + id,
      component: ScdDiagramScdScdDiagramDiagramDiagramComponent,
      inputs: { 
        setComponentConfig_Input: componentConfig 
      },
      closable: true,
      icon: '📊'
    });
  }

  openForm(): void {
    // Implement when available
  }

  openTrend(): void {
    // Implement when available
  }

  openAlarm(): void {
    // Implement when available
  }

  openGrid(): void {
    // Implement when available
  }

  createTabGroup(title: string): void {
    const componentConfig = new componentConfigDef();
    componentConfig.masterParams = {
      data: {
        DIAGRAM_ID: "group_" + Date.now(),
        viewMode: 'edit'
      }
    };

    const tabsData: Partial<TabInfo>[] = [
      {
        id: "tab1_" + Date.now(),
        title: 'Tab 1',
        component: ScdDiagramScdScdDiagramDiagramDiagramComponent,
        inputs: { setComponentConfig_Input: componentConfig },
        closable: true,
        icon: '📊'
      },
      {
        id: "tab2_" + Date.now(),
        title: 'Tab 2',
        component: ScdDiagramScdScdDiagramDiagramDiagramComponent,
        inputs: { setComponentConfig_Input: componentConfig },
        closable: true,
        icon: '📊'
      }
    ];

    const groupId = this.tabManager.createTabGroup(title || 'New Tab Group', tabsData);
    this.activeGroupId = groupId;
  }
addDiagramToGroup(groupId: string): void {
    const componentConfig = new componentConfigDef();
    componentConfig.masterParams = {
      data: {
        DIAGRAM_ID: "diagram_" +Date.now(),
        viewMode: 'edit'
      }
    };

    this.tabManager.addTabToGroup(groupId, {
      id: "tab_" + Date.now(),
      title: 'Diagram',
      component: ScdDiagramScdScdDiagramDiagramDiagramComponent,
      inputs: { setComponentConfig_Input: componentConfig },
      closable: true,
      icon: '📊'
    });
  }

  addTextPropertiesToGroup(groupId: string): void {
    const componentConfig = new componentConfigDef();
    componentConfig.masterParams = {
      data: {
        DIAGRAM_ID: "props_" + Date.now(),
        viewMode: 'edit'
      }
    };

    this.tabManager.addTabToGroup(groupId, {
      id: "tab_" + Date.now(),
      title: 'Properties',
      component: ScdTextPropertiesComponent,
      inputs: { setComponentConfig_Input: componentConfig },
      closable: true,
      icon: '📋'
    });
  }
  closeAllTabs(): void {
    this.tabManager.closeAllTabs();
	this.activeGroupId = '';
  }

  closeTab(tabId: string): void {
    this.tabManager.closeTab(tabId);
  }

  getTotalTabCount(): number {
  return this.tabManager.getTotalTabCount();
}

  
  // Tab strip events
  onTabSelect(event: any): void {
    let tabId: string | null = null;
    
    if (event && event.index !== undefined) {
      const index = event.index;
      if (this.tabs[index]) {
        tabId = this.tabs[index].id;
      }
    } else if (event && event.tab) {
      const tabData = event.tab;
      if (tabData.id) {
        tabId = tabData.id;
      } else if (tabData.title) {
        const found = this.tabs.find(t => t.title === tabData.title);
        if (found) tabId = found.id;
      }
    }
    
    if (tabId) {
      this.activeTabId = tabId;
      this.tabManager.activateTab(tabId);
    }
  }

  onTabClose(event: any): void {
    if (event && event.preventDefault) {
      event.preventDefault();
    }
    
    let tabId: string | null = null;
    
    if (event && event.index !== undefined) {
      const index = event.index;
      if (this.tabs[index]) {
        tabId = this.tabs[index].id;
      }
    } else if (event && event.tab) {
      const tabData = event.tab;
      if (tabData.id) {
        tabId = tabData.id;
      } else if (tabData.title) {
        const found = this.tabs.find(t => t.title === tabData.title);
        if (found) tabId = found.id;
      }
    }
    
    if (tabId) {
      this.closeTab(tabId);
    }
  }

  

  isTabSelected(tabId: string): boolean {
    const isSelected = this.activeTabId === tabId;
    console.log("Tab " , tabId , " is selected: ", isSelected);
    return isSelected;
  }


  public ON_CLICK_OK(event) {
    this.componentConfig = new componentConfigDef();
    this.componentConfig.masterSaved = true;
    this.handleComponentConfig(this.componentConfig);
  }
  
  public ON_CLICK_CANCEL(event) {
    this.cancelClicked.emit();
  }
  public help_1Config: componentConfigDef;
  public helpOpened = false;
  public ON_CLICK_HELP(event) {
    this.helpOpened = true;
  }
  public visibleOK_BTNS = false;

		
	 //      this.scd-scd-diagram-diagram0_0Config = new componentConfigDef();

	 //      this.scd_scd_diagram_diagram0_0Config = ComponentConfig;
 
		
	 //      this.scd-text-properties1_1Config = new componentConfigDef();

	 //      this.scd_text_properties1_1Config = ComponentConfig;
 
	}
