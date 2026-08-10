import { ViewChildren, QueryList,Component, OnInit, Output, Input, EventEmitter, OnDestroy, ChangeDetectorRef, AfterViewInit, ViewChild, ElementRef, Type } from '@angular/core';
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
import {
  DragTargetContainerDirective,
  DropTargetContainerDirective,
  DropTargetEvent,
} from "@progress/kendo-angular-utils";
import { reorderIcon, SVGIcon } from "@progress/kendo-svg-icons";

declare function getParamConfig(): any;

@Component({
  selector: 'app-scd-appboard',
  templateUrl: './scd-appboard.component.html',
  styleUrls: ['./scd-appboard.component.scss'],
  standalone: false
})
export class ScdAppboardComponent implements OnInit, OnDestroy, AfterViewInit {
  @Output() saveTriggerOutput: EventEmitter<any> = new EventEmitter();
  @Output() formValidationChangedOutput: EventEmitter<boolean> = new EventEmitter();
  @Output() cancelClicked = new EventEmitter<void>();

  // ViewChild for drag and drop (single tab strip)
  @ViewChild("wrapper", { read: DragTargetContainerDirective })
  dragTargetContainer!: DragTargetContainerDirective;

  @ViewChild("wrapper", { read: DropTargetContainerDirective })
  dropTargetContainer!: DropTargetContainerDirective;

  @ViewChild("wrapper", { read: ElementRef })
  wrapper!: ElementRef;

  // Make components available for template
  public diagramComponent = ScdDiagramScdScdDiagramDiagramDiagramComponent;
  public textPropertiesComponent = ScdTextPropertiesComponent;

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

  // Tab Management Properties
  tabs: TabInfo[] = [];
  tabGroups: TabGroup[] = [];
  activeTabId: string = '';
  activeGroupId: string = '';
  isDarkTheme = false;
  
  // Drag and drop properties
  public reorderSVG: SVGIcon = reorderIcon;
  private readonly DROP_INDICATOR_BEFORE = "drop-indicator-before";
  private readonly DROP_INDICATOR_AFTER = "drop-indicator-after";
  private dragCounter = 0;
  
  private tabsSubscription!: Subscription;
  private tabGroupsSubscription!: Subscription;
  private componentConfigChangeEvent!: Subscription;

  // Original Properties
  public paramConfig;
  public title = '';
  public isPhonePortrait = false;
  public routineName = "scd_appboard";
  public alignment: TabAlignment = 'start';
  public selectedTab = 2;
  public masterParams;
  public gap: any = {
    rows: 1,
    columns: 1,
  };
  public componentConfig: componentConfigDef;
  public PDFfileName = this.title + ".PDF";
  public routineAuth = "ScdAppboard";
  public compSelector = 'app-scd-appboard';
  public help_1Config: componentConfigDef;
  public helpOpened = false;
  public visibleOK_BTNS = false;

  ngOnInit(): void {
    console.log('[DRAG-DEBUG] ngOnInit - Component initializing');
    
    // Original initialization
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
      
      if (tabs.length > 0 && !this.activeTabId) {
        this.activeTabId = tabs[0].id;
        console.log('Setting active tab to:', this.activeTabId);
        this.tabManager.activateTab(this.activeTabId);
      }
      
      this.cdr.detectChanges();
      
      // Refresh drag containers after tabs change
      setTimeout(() => {
        console.log("DEBUGGING: Refreshing Drag Containers");
        this.dragTargetContainer?.notify();
        this.dropTargetContainer?.notify();
      }, 100);
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

    this.tabsSubscription = this.tabManager.tabs$.subscribe(tabs => {
    console.log('[DRAG-DEBUG] tabs$ subscription triggered, tabs count:', tabs.length);
    this.tabs = tabs;
    
    if (tabs.length > 0 && !this.activeTabId) {
      this.activeTabId = tabs[0].id;
      console.log('Setting active tab to:', this.activeTabId);
      this.tabManager.activateTab(this.activeTabId);
    }
    
    this.cdr.detectChanges();
    
    // Refresh drag containers after tabs change
    setTimeout(() => {
      this.refreshAllDragContainers(); // ← Use this
    }, 100);
  });

  this.tabGroupsSubscription = this.tabManager.tabGroups$.subscribe(groups => {
    console.log('[DRAG-DEBUG] tabGroups$ subscription triggered, groups count:', groups.length);
    this.tabGroups = groups;
    
    if (groups.length > 0 && !this.activeGroupId) {
      this.activeGroupId = groups[0].id;
    }
    
    this.cdr.detectChanges();
    
    // Refresh drag containers after groups change
    setTimeout(() => {
      this.refreshAllDragContainers(); // ← Use this
    }, 150);
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
    // Original init logic
  }

  ngOnDestroy(): void {
    if (typeof this.componentConfigChangeEvent !== 'undefined') this.componentConfigChangeEvent.unsubscribe();
    if (this.tabsSubscription) this.tabsSubscription.unsubscribe();
    if (this.tabGroupsSubscription) this.tabGroupsSubscription.unsubscribe();
  }

  @Input() public set setComponentConfig_Input(ComponentConfig: componentConfigDef) {
    this.handleComponentConfig(ComponentConfig);
  }
  @ViewChildren('groupWrapper') groupWrappers!: QueryList<ElementRef>;

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
    
    // Find the group
    const groupIndex = this.tabGroups.findIndex(g => g.id === groupId);
    if (groupIndex === -1) return;
    
    // Get current groups
    const groups = [...this.tabGroups];
    
    // Remove the group
    groups.splice(groupIndex, 1);
    
    // Update the groups in the service
    (this.tabManager as any).tabGroupsSubject.next(groups);
    
    // Also remove any tabs that were in this group
    const tabs = [...this.tabs];
    const updatedTabs = tabs.filter(tab => tab.tabGroupId !== groupId);
    if (updatedTabs.length !== tabs.length) {
      (this.tabManager as any).tabsSubject.next(updatedTabs);
    }
    
    // Update active group
    if (this.activeGroupId === groupId) {
      if (groups.length > 0) {
        this.activeGroupId = groups[0].id;
      } else {
        this.activeGroupId = '';
      }
    }
  }

  // ===== GROUP TAB STRIP INTERNAL EVENTS =====

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

  public dragData = ({ dragTarget }: { dragTarget: HTMLElement }) => {
  this.dragCounter++;
  console.log(`[DRAG-DEBUG] #${this.dragCounter} dragData called`);
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
    if (fromIndex === null) {
      const dataIndex = tabItem.getAttribute('data-kendo-tab-index');
      if (dataIndex !== null) {
        fromIndex = parseInt(dataIndex, 10);
        console.log('[DRAG-DEBUG] Method 3 - Extracted from data-kendo-tab-index:', fromIndex);
      }
    }
    
    if (fromIndex !== null) {
      const result = { fromIndex };
      console.log('[DRAG-DEBUG] ✅ dragData returning:', result);
      return result;
    } else {
      console.warn('[DRAG-DEBUG] ⚠️ Could not determine tab index');
    }
  } else {
    console.warn('[DRAG-DEBUG] ⚠️ dragTarget is not an LI element');
  }
  
  console.log('[DRAG-DEBUG] ❌ dragData returning null');
  return null;
};

  public onDragOver(e: any): void {
  console.log('[DRAG-DEBUG] onDragOver called');
  console.log('[DRAG-DEBUG] onDragOver - dragData:', e.dragData);
  console.log('[DRAG-DEBUG] onDragOver - dragTarget:', e.dragTarget);
  console.log('[DRAG-DEBUG] onDragOver - dropTarget:', e.dropTarget);
  
  if (!e.dragData) {
    console.warn('[DRAG-DEBUG] ⚠️ No dragData in onDragOver');
    return;
  }
  
  let dropTarget = e.dropTarget;
  if (dropTarget && !dropTarget.classList.contains('k-tabstrip-item')) {
    dropTarget = dropTarget.closest('.k-tabstrip-item');
    console.log('[DRAG-DEBUG] Found closest drop target:', dropTarget);
  }
  
  if (!dropTarget || !(dropTarget instanceof HTMLLIElement)) {
    console.warn('[DRAG-DEBUG] ⚠️ Invalid drop target:', e.dropTarget);
    return;
  }

  console.log('[DRAG-DEBUG] ✅ onDragOver - Valid drop target found:', dropTarget.id);
  this.clearDropIndicators();

  const isDropAfter = this.isDropAfterMiddle(dropTarget, e.dragEvent.clientX);
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

  // Pass the groupId to reorderTabs
  this.reorderTabs(fromIndex, destinationIndex, groupId);
}

/**
 * Reorder tabs - handles both main tabs and group tabs
 */
private reorderTabs(fromIndex: number, destinationIndex: number, groupId?: string): void {
  console.log('[DRAG-DEBUG] ===== REORDERING TABS =====');
  console.log('[DRAG-DEBUG] fromIndex:', fromIndex, 'destinationIndex:', destinationIndex, 'groupId:', groupId);
  
  if (groupId) {
    // Reorder tabs within a group
    const groups = [...this.tabGroups];
    const group = groups.find(g => g.id === groupId);
    if (group) {
      console.log('[DRAG-DEBUG] Reordering tabs in group:', group.title);
      console.log('[DRAG-DEBUG] Group tabs before:', group.tabs.map(t => t.title));
      
      const [movedTab] = group.tabs.splice(fromIndex, 1);
      group.tabs.splice(destinationIndex, 0, movedTab);
      
      console.log('[DRAG-DEBUG] Group tabs after:', group.tabs.map(t => t.title));
      
      // Update the groups in the service
      (this.tabManager as any).tabGroupsSubject.next(groups);
      
      // Also update the main tabs array to reflect the new order
      // This is important for dragData to work correctly
      const allTabs = this.tabs.filter(t => t.tabGroupId !== groupId);
      const groupTabs = group.tabs;
      const updatedTabs = [...allTabs, ...groupTabs];
      (this.tabManager as any).tabsSubject.next(updatedTabs);
    }
  } else {
    // Reorder main tabs (no group)
    const currentTabs = [...this.tabs];
    console.log('[DRAG-DEBUG] Reordering main tabs');
    console.log('[DRAG-DEBUG] Main tabs before:', currentTabs.map(t => t.title));
    
    const [movedTab] = currentTabs.splice(fromIndex, 1);
    currentTabs.splice(destinationIndex, 0, movedTab);
    
    console.log('[DRAG-DEBUG] Main tabs after:', currentTabs.map(t => t.title));
    
    (this.tabManager as any).tabsSubject.next([...currentTabs]);
  }
}
  // ===== TAB MANAGEMENT METHODS =====

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
      console.error("No component found for shapeType: " + TabId);
      return;
    }
    
    this.tabManager.openTab({
      id: "tab_" + TabId,
      title: "Tab " + TabId,
      component: componentToRender,
      inputs: {
        setComponentConfig_Input: componentConfig
      },
      closable: true,
      icon: '📊'
    });
  }

  openDiagram(diagramId?: string): void {
    const id = diagramId || `diagram_${Date.now()}`;
    const componentConfig = new componentConfigDef();
    componentConfig.masterParams = {
      data: {
        DIAGRAM_ID: id,
        viewMode: 'edit'
      }
    };

    this.tabManager.openTab({
      id: `diagram_${id}`,
      title: `Diagram ${id}`,
      component: ScdDiagramScdScdDiagramDiagramDiagramComponent,
      inputs: { 
        setComponentConfig_Input: componentConfig 
      },
      closable: true,
      icon: '📊'
    });
  }

  createTabGroup(title: string): void {
    const componentConfig = new componentConfigDef();
    componentConfig.masterParams = {
      data: {
        DIAGRAM_ID: `group_${Date.now()}`,
        viewMode: 'edit'
      }
    };

    const tabsData: Partial<TabInfo>[] = [
      {
        id: `tab_${Date.now()}_1`,
        title: 'Tab 1',
        component: ScdDiagramScdScdDiagramDiagramDiagramComponent,
        inputs: { setComponentConfig_Input: componentConfig },
        closable: true,
        icon: '📊'
      },
      {
        id: `tab_${Date.now()}_2`,
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
        DIAGRAM_ID: `diagram_${Date.now()}`,
        viewMode: 'edit'
      }
    };

    this.tabManager.addTabToGroup(groupId, {
      id: `tab_${Date.now()}`,
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
        DIAGRAM_ID: `props_${Date.now()}`,
        viewMode: 'edit'
      }
    };

    this.tabManager.addTabToGroup(groupId, {
      id: `tab_${Date.now()}`,
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
    let count = this.tabs.length;
    this.tabGroups.forEach(group => {
      count += group.tabs ? group.tabs.length : 0;
    });
    return count;
  }

  // Tab strip events (for single tab mode)
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
    return this.activeTabId === tabId;
  }

  // Original event handlers
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
  /**
 * Refresh all drag and drop containers (main + groups)
 */
private refreshAllDragContainers(): void {
  console.log('[DRAG-DEBUG] Refreshing all drag containers');
  
  // 1. Refresh main drag container
  this.dragTargetContainer?.notify();
  this.dropTargetContainer?.notify();
  
  // 2. Refresh group drag containers using ViewChildren
  if (this.groupWrappers) {
    console.log('[DRAG-DEBUG] Group wrappers from ViewChildren:', this.groupWrappers.length);
    this.groupWrappers.forEach((wrapperRef) => {
      const element = wrapperRef.nativeElement;
      // Trigger a refresh
      const event = new Event('mouseenter', { bubbles: true });
      element.dispatchEvent(event);
      console.log('[DRAG-DEBUG] Refreshed wrapper:', element.id);
    });
  }
}
}