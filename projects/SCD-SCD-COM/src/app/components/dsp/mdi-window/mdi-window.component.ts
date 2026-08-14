// mdi-window.component.ts

import { 
  Component, 
  Input, 
  Output, 
  EventEmitter, 
  HostListener, 
  ElementRef, 
  ViewChild, 
  ViewContainerRef, 
  ComponentRef, 
  AfterViewInit, 
  OnDestroy,
  ChangeDetectorRef,
  OnInit
} from '@angular/core';
import { WindowInfo } from '../../../services/window-manager.service';

@Component({
  selector: 'app-mdi-window',
  template: `
    <div class="mdi-window"
         [class.mdi-window-active]="window.isActive"
         [class.mdi-window-inactive]="!window.isActive"
         [class.mdi-window-tabbed]="window.isTabbed"
         [class.mdi-window-minimized]="window.isMinimized"
         [class.mdi-window-maximized]="window.isMaximized"
         [style.left.px]="window.isMaximized ? 0 : window.left"
         [style.top.px]="window.isMaximized ? 0 : window.top"
         [style.width.px]="window.isMaximized ? '100%' : window.width"
         [style.height.px]="window.isMaximized ? 'calc(100% - 40px)' : (window.isMinimized ? 30 : window.height)"
         (mousedown)="bringToFront()"
         (click)="activate()">
      
      <!-- Window Header -->
      <div class="mdi-window-header" 
           (mousedown)="startDrag($event)"
           (dblclick)="toggleMaximize()">
        <div class="mdi-window-title">
          <span class="window-icon">{{ getIcon() }}</span>
          <span>{{ window.title }}</span>
          <span class="window-status" *ngIf="window.isDirty">*</span>
        </div>
        <div class="mdi-window-controls">
          <button class="window-control-btn" (click)="$event.stopPropagation(); toggleMaximize()" title="Maximize/Restore">
            <svg width="12" height="12" viewBox="0 0 12 12">
              <rect x="1" y="1" width="10" height="10" fill="none" stroke="currentColor" stroke-width="1"/>
            </svg>
          </button>
          <button class="window-control-btn" (click)="$event.stopPropagation(); minimize()" title="Minimize">
            <svg width="12" height="12" viewBox="0 0 12 12">
              <line x1="2" y1="6" x2="10" y2="6" stroke="currentColor" stroke-width="1"/>
            </svg>
          </button>
          <button class="window-control-btn" (click)="$event.stopPropagation(); close()" title="Close">
            <svg width="12" height="12" viewBox="0 0 12 12">
              <line x1="2" y1="2" x2="10" y2="10" stroke="currentColor" stroke-width="1"/>
              <line x1="10" y1="2" x2="2" y2="10" stroke="currentColor" stroke-width="1"/>
            </svg>
          </button>
        </div>
      </div>

      <!-- Window Body - Using ViewContainerRef to manually create component -->
      <div class="mdi-window-body" *ngIf="!window.isMinimized">
        <ng-container #componentContainer></ng-container>
      </div>

      <!-- Window Resize Handle -->
      <div class="mdi-window-resize" 
           (mousedown)="$event.stopPropagation(); startResize($event)" 
           *ngIf="!window.isMinimized && !window.isMaximized"></div>
    </div>
  `,
  styles: [`
    .mdi-window {
      position: absolute;
      background: #ffffff;
      border: 1px solid #d0d0d0;
      border-radius: 4px;
      box-shadow: 0 2px 8px rgba(0,0,0,0.15);
      display: flex;
      flex-direction: column;
      min-width: 200px;
      min-height: 150px;
      transition: box-shadow 0.2s ease;
    }

    .mdi-window-active {
      box-shadow: 0 4px 16px rgba(0,0,0,0.25);
      z-index: 100;
    }

    .mdi-window-inactive {
      box-shadow: 0 1px 4px rgba(0,0,0,0.1);
    }

    .mdi-window-tabbed {
      border-style: dashed;
      border-color: #999;
    }

    .mdi-window-minimized {
      height: 30px !important;
      overflow: hidden;
    }

    .mdi-window-minimized .mdi-window-body {
      display: none;
    }

    .mdi-window-minimized .mdi-window-resize {
      display: none;
    }

    .mdi-window-maximized {
      border-radius: 0;
      top: 0px !important;
      left: 0 !important;
      width: 100% !important;
      height: calc(100% - 40px) !important;
    }

    .mdi-window-maximized .mdi-window-resize {
      display: none;
    }

    .mdi-window-header {
      background: #e8e8e8;
      padding: 6px 10px;
      cursor: move;
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-bottom: 1px solid #d0d0d0;
      border-radius: 4px 4px 0 0;
      user-select: none;
      min-height: 30px;
      flex-shrink: 0;
    }

    .mdi-window-title {
      display: flex;
      align-items: center;
      gap: 6px;
      font-size: 13px;
      font-weight: 500;
      color: #333;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }

    .window-icon {
      font-size: 14px;
    }

    .window-status {
      color: #e74c3c;
      margin-left: 4px;
    }

    .mdi-window-controls {
      display: flex;
      gap: 4px;
      flex-shrink: 0;
    }

    .window-control-btn {
      background: none;
      border: none;
      padding: 2px 4px;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 3px;
      color: #666;
      transition: all 0.2s;
    }

    .window-control-btn:hover {
      background: rgba(0,0,0,0.1);
      color: #333;
    }

    .window-control-btn:active {
      background: rgba(0,0,0,0.2);
    }

    .mdi-window-body {
      flex: 1;
      overflow: auto;
      padding: 10px;
      background: #fafafa;
      min-height: 100px;
    }

    .mdi-window-resize {
      position: absolute;
      bottom: 0;
      right: 0;
      width: 15px;
      height: 15px;
      cursor: nwse-resize;
      background: transparent;
    }

    .mdi-window-resize::after {
      content: '';
      position: absolute;
      bottom: 2px;
      right: 2px;
      width: 0;
      height: 0;
      border-right: 8px solid #999;
      border-bottom: 8px solid #999;
      border-left: 8px solid transparent;
      border-top: 8px solid transparent;
    }

    /* Dark theme */
    :host-context(.mdi-desktop-dark) .mdi-window {
      background: #2d2d44;
      border-color: #444466;
    }

    :host-context(.mdi-desktop-dark) .mdi-window-header {
      background: #34495e;
      color: white;
    }

    :host-context(.mdi-desktop-dark) .mdi-window-title {
      color: white;
    }

    :host-context(.mdi-desktop-dark) .window-control-btn {
      color: rgba(255,255,255,0.7);
    }

    :host-context(.mdi-desktop-dark) .window-control-btn:hover {
      background: rgba(255,255,255,0.2);
      color: white;
    }

    :host-context(.mdi-desktop-dark) .mdi-window-body {
      background: #1a1a2e;
      color: #e0e0e0;
    }
  `]
})
export class MDIWindowComponent implements OnInit, AfterViewInit, OnDestroy {
  @Input() window!: WindowInfo;
  @Output() closeWindow = new EventEmitter<string>();
  @Output() bringToFrontWindow = new EventEmitter<string>();
  @Output() activateWindow = new EventEmitter<string>();
  @Output() minimizeWindow = new EventEmitter<string>();
  @Output() maximizeWindow = new EventEmitter<string>();
  @Output() dragWindow = new EventEmitter<{ windowId: string, event: MouseEvent }>();
  @Output() resizeWindow = new EventEmitter<{ windowId: string, event: MouseEvent }>();
  @Output() componentConfigChanged = new EventEmitter<any>();

  @ViewChild('componentContainer', { read: ViewContainerRef, static: false }) 
  componentContainer!: ViewContainerRef;

  private componentRef: ComponentRef<any> | null = null;
  private dragData: any = null;
  private resizeData: any = null;
  private outputSubscriptions: any[] = [];
  private isComponentCreated = false;

  constructor(
    private el: ElementRef,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    // Initialize if component is already available
  }

  ngAfterViewInit(): void {
    // Use setTimeout to ensure view is fully rendered
    setTimeout(() => {
      if (this.window && this.window.component && !this.isComponentCreated) {
        this.createComponent();
      }
    }, 0);
  }

private createComponent(): void {
  if (this.isComponentCreated) {
    return;
  }

  if (!this.window || !this.window.component) {
    console.warn('No component to create');
    return;
  }

  if (!this.componentContainer) {
    console.warn('componentContainer is undefined, retrying...');
    setTimeout(() => {
      if (!this.componentContainer) {
        console.error('componentContainer still undefined after retry');
        return;
      }
      this.createComponent();
    }, 100);
    return;
  }

  try {
    console.log('MDIWindowComponent: Creating component:', this.window.component.name);
    console.log('MDIWindowComponent: Window ID:', this.window.id);
    
    // Clear the container
    this.componentContainer.clear();

    // Create the component
    this.componentRef = this.componentContainer.createComponent(this.window.component);
    
    // <<<<<<< CRITICAL: Store component instance in the window object >>>>>>>
    this.window.componentInstance = this.componentRef.instance;
    console.log('MDIWindowComponent: Stored component instance in window for ID:', this.window.id);
    console.log('MDIWindowComponent: Component instance:', this.componentRef.instance);

    // Set inputs
    if (this.window.inputs) {
      Object.keys(this.window.inputs).forEach(key => {
        if (this.componentRef) {
          console.log('MDIWindowComponent: Setting input:', key, this.window.inputs[key]);
          this.componentRef.instance[key] = this.window.inputs[key];
        }
      });
    }

    // Set up output subscriptions
    this.setupOutputs();

    // Trigger change detection
    if (this.componentRef) {
      this.componentRef.changeDetectorRef.detectChanges();
    }

    this.isComponentCreated = true;
    console.log('MDIWindowComponent: Component created successfully');
  } catch (error) {
    console.error('MDIWindowComponent: Error creating component:', error);
  }
}

  private setupOutputs(): void {
    if (!this.componentRef) return;

    const instance = this.componentRef.instance;
    console.log('MDIWindowComponent: Setting up outputs for instance:', instance);

    // Clean up previous subscriptions
    this.outputSubscriptions.forEach(sub => sub.unsubscribe());
    this.outputSubscriptions = [];

    // Check for setComponentConfig_Output
    if (instance.setComponentConfig_Output instanceof EventEmitter) {
      console.log('MDIWindowComponent: Found setComponentConfig_Output, subscribing...');
      const sub = instance.setComponentConfig_Output.subscribe((config: any) => {
        console.log('MDIWindowComponent: Received componentConfig from child:', config);
        if (config) {
          // Update window's dirty state
          this.window.isDirty = config.isDirty === true;
          // Forward the event to parent
          this.componentConfigChanged.emit({
            windowId: this.window.id,
            componentConfig: config
          });
        }
      });
      this.outputSubscriptions.push(sub);
    } else {
      console.warn('MDIWindowComponent: setComponentConfig_Output not found on component instance');
    }

    // Check for other outputs
    if (instance.saveCompletedOutput instanceof EventEmitter) {
      const sub = instance.saveCompletedOutput.subscribe((value: any) => {
        console.log('MDIWindowComponent: saveCompletedOutput received:', value);
      });
      this.outputSubscriptions.push(sub);
    }
  }

  // Force recreate component if needed
  refreshComponent(): void {
    this.isComponentCreated = false;
    this.componentContainer?.clear();
    if (this.componentRef) {
      this.componentRef.destroy();
      this.componentRef = null;
    }
    this.createComponent();
  }

  ngOnDestroy(): void {
    // Clean up subscriptions
    this.outputSubscriptions.forEach(sub => sub.unsubscribe());
    this.outputSubscriptions = [];

    // Destroy the component
    if (this.componentRef) {
      this.componentRef.destroy();
      this.componentRef = null;
    }
  }

  getIcon(): string {
    const componentMap: { [key: string]: string } = {
      'ScdDiagramScdScdDiagramDiagramDiagramComponent': '📊',
      'FormComponent': '📝',
      'TrendComponent': '📈',
      'AlarmComponent': '🔔',
      'GridComponent': '📋'
    };
    return componentMap[this.window.component?.name] || '📄';
  }

  bringToFront(): void {
    this.bringToFrontWindow.emit(this.window.id);
  }

  activate(): void {
    this.activateWindow.emit(this.window.id);
  }

  close(): void {
    this.closeWindow.emit(this.window.id);
  }

  minimize(): void {
    this.minimizeWindow.emit(this.window.id);
  }

  toggleMaximize(): void {
    this.maximizeWindow.emit(this.window.id);
  }

  startDrag(event: MouseEvent): void {
    if (!(event.target as HTMLElement).closest('.mdi-window-controls')) {
      this.dragWindow.emit({ windowId: this.window.id, event });
    }
  }

  startResize(event: MouseEvent): void {
    this.resizeWindow.emit({ windowId: this.window.id, event });
  }

  @HostListener('document:mousemove', ['$event'])
  onMouseMove(event: MouseEvent): void {
    // Handle drag
    if (this.dragData) {
      const deltaX = event.clientX - this.dragData.startX;
      const deltaY = event.clientY - this.dragData.startY;
      this.window.left = Math.max(0, this.dragData.originalLeft + deltaX);
      this.window.top = Math.max(0, this.dragData.originalTop + deltaY);
    }

    // Handle resize
    if (this.resizeData) {
      const deltaX = event.clientX - this.resizeData.startX;
      const deltaY = event.clientY - this.resizeData.startY;
      this.window.width = Math.max(200, this.resizeData.originalWidth + deltaX);
      this.window.height = Math.max(150, this.resizeData.originalHeight + deltaY);
    }
  }

  @HostListener('document:mouseup')
  onMouseUp(): void {
    this.dragData = null;
    this.resizeData = null;
  }

  setDragData(startX: number, startY: number): void {
    this.dragData = {
      startX,
      startY,
      originalLeft: this.window.left,
      originalTop: this.window.top
    };
  }

  setResizeData(startX: number, startY: number): void {
    this.resizeData = {
      startX,
      startY,
      originalWidth: this.window.width,
      originalHeight: this.window.height
    };
  }
}