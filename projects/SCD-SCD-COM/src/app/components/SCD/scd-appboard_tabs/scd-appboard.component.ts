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
import {
  DragTargetContainerDirective,
  DropTargetContainerDirective,
} from "@progress/kendo-angular-utils";
import { SVGIcon } from "@progress/kendo-svg-icons";

declare function getParamConfig(): any;

@Component({
  selector: 'app-scd-appboard',
  templateUrl: './scd-appboard.component.html',
  styleUrls: ['./scd-appboard.component.scss'],
  providers: [TabManagerService] ,
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

    // Subscribe to tabs changes
    this.tabsSubscription = this.tabManager.tabs$.subscribe(tabs => {
      console.log('[DRAG-DEBUG] tabs$ subscription triggered, tabs count:', tabs.length);
      this.tabs = tabs;
      
      if (tabs.length > 0 && !this.activeTabId) {
        this.activeTabId = tabs[0].id;
        console.log('Setting active tab to:', this.activeTabId);
        this.tabManager.activateTab(this.activeTabId);
      }
      
      this.cdr.detectChanges();
    });

    // Subscribe to tab groups changes
    this.tabGroupsSubscription = this.tabManager.tabGroups$.subscribe(groups => {
      console.log('[DRAG-DEBUG] tabGroups$ subscription triggered, groups count:', groups.length);
      this.tabGroups = groups;
      
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
    // Original init logic
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
    
    // Update active group
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
      
      const groups = [...this.tabGroups];
      const group = groups.find(g => g.id === groupId);
      if (group) {
        const tabIndex = group.tabs.findIndex(t => t.id === tabId);
        if (tabIndex !== -1) {
          group.tabs.splice(tabIndex, 1);
          
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
    
    let tabItem = dragTarget;
    if (dragTarget && !dragTarget.classList.contains('k-tabstrip-item')) {
      tabItem = dragTarget.closest('.k-tabstrip-item') as HTMLElement;
    }
    
    if (tabItem instanceof HTMLLIElement) {
      let fromIndex: number | null = null;
      
      // Method 1: Try to get from li id
      const liId = tabItem.id;
      if (liId) {
        const idParts = liId.split('-');
        const lastPart = idParts[idParts.length - 1];
        const possibleIndex = parseInt(lastPart, 10);
        if (!isNaN(possibleIndex)) {
          fromIndex = possibleIndex;
        }
      }
      
      // Method 2: Try to find by title
      if (fromIndex === null) {
        const titleSpan = tabItem.querySelector('.tab-title');
        if (titleSpan) {
          const title = titleSpan.textContent?.trim();
          if (title) {
            let foundTab = this.tabs.find(t => t.title === title);
            if (foundTab) {
              fromIndex = this.tabs.indexOf(foundTab);
            } else {
              for (const group of this.tabGroups) {
                const groupTab = group.tabs.find(t => t.title === title);
                if (groupTab) {
                  const mainTabIndex = this.tabs.findIndex(t => t.id === groupTab.id);
                  if (mainTabIndex !== -1) {
                    fromIndex = mainTabIndex;
                    break;
                  }
                }
              }
            }
          }
        }
      }
      
      if (fromIndex !== null) {
        console.log('[DRAG-DEBUG] ✅ dragData returning fromIndex:', fromIndex);
        return { fromIndex };
      }
    }
    
    console.log('[DRAG-DEBUG] ❌ dragData returning null');
    return null;
  };

  public onDragOver(e: any): void {
    if (!e.dragData) return;
    
    let dropTarget = e.dropTarget;
    if (dropTarget && !dropTarget.classList.contains('k-tabstrip-item')) {
      dropTarget = dropTarget.closest('.k-tabstrip-item');
    }
    
    if (!dropTarget || !(dropTarget instanceof HTMLLIElement)) return;

    this.clearDropIndicators();

    const isDropAfter = this.isDropAfterMiddle(dropTarget, e.dragEvent.clientX);
    const indicatorClass = isDropAfter ? this.DROP_INDICATOR_AFTER : this.DROP_INDICATOR_BEFORE;
    dropTarget.classList.add(indicatorClass);
  }

  public clearDropIndicators(): void {
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
    console.log('[DRAG-DEBUG] ✅ onDrop called!', groupId ? 'groupId: ' + groupId : 'main');
    this.clearDropIndicators();

    if (!e.dragData) return;
    
    let dragTarget = e.dragTarget;
    if (dragTarget && !dragTarget.classList.contains('k-tabstrip-item')) {
      dragTarget = dragTarget.closest('.k-tabstrip-item');
    }
    
    let dropTarget = e.dropTarget;
    if (dropTarget && !dropTarget.classList.contains('k-tabstrip-item')) {
      dropTarget = dropTarget.closest('.k-tabstrip-item');
    }
    
    if (!dragTarget || !(dragTarget instanceof HTMLLIElement)) return;
    if (!dropTarget || !(dropTarget instanceof HTMLLIElement)) return;

    const { fromIndex } = e.dragData;
    
    let toIndex: number | null = null;
    const dropId = dropTarget.id;
    
    if (dropId) {
      const idParts = dropId.split('-');
      const lastPart = idParts[idParts.length - 1];
      const possibleIndex = parseInt(lastPart, 10);
      if (!isNaN(possibleIndex)) {
        toIndex = possibleIndex;
      }
    }
    
    if (toIndex === null) {
      const titleSpan = dropTarget.querySelector('.tab-title');
      if (titleSpan) {
        const title = titleSpan.textContent?.trim();
        if (title) {
          const foundTab = this.tabs.find(t => t.title === title);
          if (foundTab) {
            toIndex = this.tabs.indexOf(foundTab);
          }
        }
      }
    }
    
    if (toIndex === null) return;

    const isDropAfter = this.isDropAfterMiddle(dropTarget, e.dragEvent.clientX);
    let destinationIndex: number | null;
    if (fromIndex < toIndex) {
      destinationIndex = isDropAfter ? toIndex : toIndex - 1;
    } else {
      destinationIndex = isDropAfter ? toIndex + 1 : toIndex;
    }
    
    if (destinationIndex === null || destinationIndex === fromIndex) return;

    // Use the service to reorder tabs
    this.tabManager.reorderTabs(fromIndex, destinationIndex, groupId);
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
}