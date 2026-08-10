import { Component,  OnInit, OnDestroy, ChangeDetectorRef, ViewChild, AfterViewInit} from '@angular/core';
import { Subscription } from 'rxjs';
import { TabManagerService, TabInfo, TabGroup } from '../services/tab-manager.service';
import { ScdDiagramScdScdDiagramDiagramDiagramComponent } from '../components/SCD/scd-scd-diagram-diagram/scd-scd-diagram-diagram.component';
import { componentConfigDef } from '@modeldir/model';

@Component({
  selector: 'app-tab-host',
  templateUrl: './tab-host.component.html',
  styleUrls: ['./tab-host.component.scss']
})
export class TabHostComponent implements OnInit, OnDestroy, AfterViewInit {
  @ViewChild('tabStrip') tabStrip: any;
  
  tabs: TabInfo[] = [];
  tabGroups: TabGroup[] = [];
  activeTabId: string = '';
  isDarkTheme = false;
  
  private tabsSubscription!: Subscription;
  private tabGroupsSubscription!: Subscription;

  constructor(
    private tabManager: TabManagerService,
    private cdr: ChangeDetectorRef
  ) {}

ngOnInit(): void {
  this.tabsSubscription = this.tabManager.tabs$.subscribe(tabs => {
    this.tabs = tabs;
    
    // If there are tabs and no active tab is set, select the first one
    if (tabs.length > 0 && !this.activeTabId) {
      this.activeTabId = tabs[0].id;
      console.log('Setting active tab to:', this.activeTabId);
      this.tabManager.activateTab(this.activeTabId);
    }
    
    this.cdr.detectChanges();
  });

  this.tabGroupsSubscription = this.tabManager.tabGroups$.subscribe(groups => {
    this.tabGroups = groups;
    this.cdr.detectChanges();
  });
}

  ngAfterViewInit(): void {
    // Set initial active tab
    if (this.tabs.length > 0) {
      this.activeTabId = this.tabs[0].id;
    }
  }

  ngOnDestroy(): void {
    if (this.tabsSubscription) this.tabsSubscription.unsubscribe();
    if (this.tabGroupsSubscription) this.tabGroupsSubscription.unsubscribe();
  }

  // Tab management methods
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
        id: `tab1_${Date.now()}`,
        title: 'Tab 1',
        component: ScdDiagramScdScdDiagramDiagramDiagramComponent,
        inputs: { setComponentConfig_Input: componentConfig },
        closable: true,
        icon: '📊'
      },
      {
        id: `tab2_${Date.now()}`,
        title: 'Tab 2',
        component: ScdDiagramScdScdDiagramDiagramDiagramComponent,
        inputs: { setComponentConfig_Input: componentConfig },
        closable: true,
        icon: '📊'
      }
    ];

    this.tabManager.createTabGroup(title || 'New Tab Group', tabsData);
  }

  closeAllTabs(): void {
    this.tabManager.closeAllTabs();
  }

  closeTab(tabId: string): void {
    this.tabManager.closeTab(tabId);
  }

  activateTab(tabId: string): void {
    this.tabManager.activateTab(tabId);
    this.activeTabId = tabId;
  }

  getTabCount(): number {
    return this.tabs.length;
  }

  // Tab group management
  addTabToGroup(groupId: string, tabData: Partial<TabInfo>): void {
    this.tabManager.addTabToGroup(groupId, tabData);
  }

  removeTabFromGroup(tabId: string, groupId: string): void {
    this.tabManager.removeTabFromGroup(tabId, groupId);
  }

  floatTab(tabId: string): void {
    const tabs = this.tabManager.getTabs();
    const tab = tabs.find(t => t.id === tabId);
    if (tab) {
      tab.isFloating = true;
      tab.tabGroupId = undefined;
      this.tabManager['tabsSubject'].next([...tabs]);
    }
  }

  // Tab strip events
  onTabSelect(event: any): void {
    // Kendo TabStrip returns the tab index or the tab object
    let tabId: string | null = null;
    
    if (typeof event === 'number') {
      // If event is index, find tab by order
      const tab = this.tabs[event];
      if (tab) {
        tabId = tab.id;
      }
    } else if (event && event.id) {
      // If event has id property
      tabId = event.id;
    } else if (event && event.title) {
      // If event has title, find by title
      const tab = this.tabs.find(t => t.title === event.title);
      if (tab) {
        tabId = tab.id;
      }
    }
    
    if (tabId) {
      this.activeTabId = tabId;
      this.tabManager.activateTab(tabId);
    }
  }

  onTabClose(event: any): void {
    // Kendo TabStrip returns the tab index or the tab object being closed
    let tabId: string | null = null;
    
    if (typeof event === 'number') {
      // If event is index, find tab by order
      const tab = this.tabs[event];
      if (tab) {
        tabId = tab.id;
      }
    } else if (event && event.id) {
      // If event has id property
      tabId = event.id;
    } else if (event && event.title) {
      // If event has title, find by title
      const tab = this.tabs.find(t => t.title === event.title);
      if (tab) {
        tabId = tab.id;
      }
    }
    
    if (tabId) {
      this.closeTab(tabId);
    }
  }

  onTabReorder(event: any): void {
    // Handle tab reordering if needed
    console.log('Tab reordered:', event);
  }

  isTabSelected(tabId: string): boolean {
  const isSelected = this.activeTabId === tabId;
  console.log(`Tab ${tabId} selected? ${isSelected} (activeTabId: ${this.activeTabId})`);
  return isSelected;
}
}