import { Component, Input, Output,ViewChild, EventEmitter,
   HostListener ,ViewContainerRef, ComponentRef, AfterViewInit, 
   OnDestroy, ChangeDetectorRef,ElementRef } from '@angular/core';
import { FormGroup, FormControl, Validators ,FormBuilder} from '@angular/forms';
import { DialogService } from '@progress/kendo-angular-dialog';
import { geometry, LinearGradient, Path as DrawPath } from '@progress/kendo-drawing';
import {
  KENDO_DIAGRAM,
  ShapeOptions,
  ShapeDefaults,
  Group,
  TextBlock,
  Rectangle,
  Path,
  Circle,
  DiagramEditable,
  Line,
  Image as DiagramImage,
  ConnectionOptions,
  DiagramComponent,
  Rect,
} from "@progress/kendo-angular-diagrams";
import { ExpressionEngineService,
  LoadedRule,
  RuntimeContext,
  ValidationResult,
  Value,
  collectVariables,} from '../../../services/expression-engine.service';


import { starServices } from 'starlib';
import { Starlib1 } from '../../Starlib1';
import { StarNotifyService } from '../../../services/starnotification.service';

import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';

import { Subscription } from 'rxjs';
import { IntlService } from "@progress/kendo-angular-intl";
import {  ViewEncapsulation } from "@angular/core";
import { Router } from '@angular/router';
import { TabAlignment } from '@progress/kendo-angular-layout';
import { scddisplayScdScdDisplayDiagram , componentConfigDef} from '@modeldir/model';
import { ScadaIntegrationService, ScadaChangeEvent } from '../../../services/scada-integration.service';
import { ServerConfig } from '../../../services/scada.service';
import {ScdAlarmStatusExplorerComponent} from '../scd-alarm-status-explorer/scd-alarm-status-explorer.component';
import {ScdAlarmAndEventLogViewerPropertiesComponent} from '../scd-alarm-and-event-log-viewer-properties/scd-alarm-and-event-log-viewer-properties.component';
import {ScdAlarmAndEventSummaryPropertiesComponent} from '../scd-alarm-and-event-summary-properties/scd-alarm-and-event-summary-properties.component';
import {ScdAlarmAndEventBannerPropertiesComponent} from '../scd-alarm-and-event-banner-properties/scd-alarm-and-event-banner-properties.component';
import {ScdPushButtonPropertiesComponent} from '../scd-push-button-properties/scd-push-button-properties.component';
import {ScdSymbolStatesPropertiesComponent} from '../scd-symbol-states-properties/scd-symbol-states-properties.component';
import {ScdSymbolPropertiesComponent} from '../scd-symbol-properties/scd-symbol-properties.component';
import {ScdListIndicatorPropertiesComponent} from '../scd-list-indicator-properties/scd-list-indicator-properties.component';
import {ScdListIndicatorStatesPropertiesComponent} from '../scd-list-indicator-states-properties/scd-list-indicator-states-properties.component';
import {ScdBarGraphPropertiesComponent} from '../scd-bar-graph-properties/scd-bar-graph-properties.component';
import {ScdGaugePropertiesComponent} from '../scd-gauge-properties/scd-gauge-properties.component';
import {ScdScalePropertiesComponent} from '../scd-scale-properties/scd-scale-properties.component';
import {ScdArrowButtonPropertiesComponent} from '../scd-arrow-button-properties/scd-arrow-button-properties.component';
import {ScdArrowTimingPropertiesComponent} from '../scd-arrow-timing-properties/scd-arrow-timing-properties.component';
import {ScdArrowPropertiesComponent} from '../scd-arrow-properties/scd-arrow-properties.component';
import {ScdTextPropertiesComponent} from '../scd-text-properties/scd-text-properties.component';
import {ScdControlListSelectorPropertiesComponent} from '../scd-control-list-selector-properties/scd-control-list-selector-properties.component';
import {ScdDisplayListSelectorPropertiesComponent} from '../scd-display-list-selector-properties/scd-display-list-selector-properties.component';
import {ScdMessageDatePropertiesComponent} from '../scd-message-date-properties/scd-message-date-properties.component';
import {ScdTagLabelPropertiesComponent} from '../scd-tag-label-properties/scd-tag-label-properties.component';
import {ScdBrowserPropertiesComponent} from '../scd-browser-properties/scd-browser-properties.component';
import {ScdPilotedListSelectorPropertiesComponent} from '../scd-piloted-list-selector-properties/scd-piloted-list-selector-properties.component';
import {ScdNumericInputPropertiesComponent} from '../scd-numeric-input-properties/scd-numeric-input-properties.component';
import {ScdDisplaySettingsScreenComponent} from '../scd-display-settings-screen/scd-display-settings-screen.component';
import {ScdSymbolfactoryplusComponent} from '../scd-symbolfactoryplus/scd-symbolfactoryplus.component';
import {ScdShapePropertiesComponent} from '../scd-shape-properties/scd-shape-properties.component';
import {ScdDisplayKeysScreenComponent} from '../scd-display-keys-screen/scd-display-keys-screen.component';
import {ScdJavascriptCodeScreenComponent} from '../scd-javascript-code-screen/scd-javascript-code-screen.component';
import {ScdGridPropertiesSettingsComponent} from '../scd-grid-properties-settings/scd-grid-properties-settings.component';
import {ScdAllAlarmsComponent} from '../scd-all-alarms/scd-all-alarms.component';
import {ScdArrowButtonTimingComponent} from '../scd-arrow-button-timing/scd-arrow-button-timing.component';
import {ScdNavigationButtonPropertiesComponent} from '../scd-navigation-button-properties/scd-navigation-button-properties.component';
import {ScdRampButtonTimingComponent} from '../scd-ramp-button-timing/scd-ramp-button-timing.component';
import {ScdLocalMessagePropertiesComponent} from '../scd-local-message-properties/scd-local-message-properties.component';
import {ScdButtonPropertiesComponent} from '../scd-button-properties/scd-button-properties.component';
import {ScdNumericDisplayPropertiesComponent} from '../scd-numeric-display-properties/scd-numeric-display-properties.component';
import {ScdStringDisplayPropertiesComponent} from '../scd-string-display-properties/scd-string-display-properties.component';
import {ScdStringInputPropertiesComponent} from '../scd-string-input-properties/scd-string-input-properties.component';
import {ScdMultistateIndicatorPropertiesComponent} from '../scd-multistate-indicator-properties/scd-multistate-indicator-properties.component';


 const createFormGroup = (dataItem:any) => new FormGroup({
'DISPLAY_ID' : new FormControl(dataItem.DISPLAY_ID  , ) ,
'APPLICATION_ID' : new FormControl(dataItem.APPLICATION_ID  ,   Validators.required ) ,
'DISPLAY_NAME' : new FormControl(dataItem.DISPLAY_NAME  , ) ,
'DISPLAY_DATA' : new FormControl(dataItem.DISPLAY_DATA  , ) 
});

declare function getParamConfig():any;
//diagram
interface DiagramDefinition {
  shapeDefaults?: any;
  connectionDefaults?: any;
  layout?: any;
  shapes: DiagramShape[];
  connections?: DiagramConnection[];
  textBlocks?: DiagramTextBlock[];
  lines?: DiagramLine[];
}
interface DiagramShape {
  id: string;
  x: number;
  y: number;
  width: number;
  height: number;
  fill?: string;
  stroke?: { color: string; width: number };
  cornerRadius?: number;
  opacity?: number;
  shape?: "rectangle" | "circle" | "path";  // Added "path"
  path?: string;  // Added for custom paths
}
interface DiagramTextBlock {
  id: string;
  x: number;
  y: number;
  text: string;
  font?: string;
  fill?: string;
  textAnchor?: string;
  opacity?: number;
  fontWeight?: string;
  fontSize?: number;
}

interface DiagramLine {
  id: string;
  from?: { x: number; y: number };
  to?: { x: number; y: number };
  path?: string;
  fill?: string;
  stroke?: { color: string; width: number; dashType?: string };
  opacity?: number;
}
interface DiagramConnection {
  from: string;
  to: string;
  stroke?: { color: string; width: number; dashType?: string };
}
interface LibraryShapeData {
  type: 'libraryShape';
  title: string;
  libraryKind: string;
  width: number;
  height: number;
  strokeColor?: string;
  fillColor?: string;
  editorStyle?: {
    flipX?: 1 | -1;
    flipY?: 1 | -1;
  };
  text?: string;
  source?: string;
  points?: Array<{ x: number; y: number }>;
  fontSize?: number;
  fontWeight?: string;
  textColor?: string;
}
/** SCADA-style animation bound to a simulated tag value on one shape. */
interface ShapeAnimation {
  type: string;
  value: number;
  min: number;
  max: number;
  colorA: string;
  colorB: string;
  warn: number;
  alarm: number;
  axis: "x" | "y";
  distance: number;
  speed: number;
  unit: string;
  textOn: string;
  textOff: string;
  clickToggle: boolean;
  imageOn: string;
  imageOff: string;
  changeSpeed: number;
  rotateMode: "spin" | "angle";
  sweep: number;
  pivot: "center" | "bottom" | "top" | "left" | "right";
}
interface ShapeEditorStyle {
  fillColor?: string;
  strokeColor?: string;
  flipX?: 1 | -1;
  flipY?: 1 | -1;
}
@Component({
  selector: 'app-scd-scd-display-diagram',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './scd-scd-display-diagram.component.html',
  styleUrls: ['./scd-scd-display-diagram.component.scss'],
  standalone: false
})


export class ScdDisplayScdScdDisplayDiagramDiagramComponent implements AfterViewInit, OnDestroy {
  @ViewChild('diagramHost', { read: ElementRef })
  diagramHost!: ElementRef<HTMLElement>;
  private pressedShapeId: string | null = null;

  @ViewChild('diagram')    diagram!: DiagramComponent;
  public title =  this.starServices.getNLS([],"SCD_SCD_DISPLAY_DIAGRAM.scddisplayScdScdDisplayDiagram.component_title","SCD DISPLAY DIAGRAM");
  public compTitleMsg =  "SCD_SCD_DISPLAY_DIAGRAM.scddisplayScdScdDisplayDiagram";
  public routineName = "ScdDisplayScdScdDisplayDiagramDiagram";
  private insertCMD = "INSERT_SCD_DISPLAY";
  private updateCMD = "UPDATE_SCD_DISPLAY";
  private deleteCMD =   "DELETE_SCD_DISPLAY";
  private getCMD = "GET_SCD_DISPLAY_QUERY";

  public value: Date = new Date(2019, 5, 1, 22);
  public format: string = 'MM/dd/yyyy HH:mm';
  public active = false;

  public  form!: FormGroup; 
  public PDFfileName = this.title + ".PDF";
  public componentConfig: componentConfigDef;
  public componentConfig_output: componentConfigDef;
  public editableMode = false;
  private CurrentRec = 0;
  public  executeQueryresult:any;
  public isSearch!: boolean;
  public isChild: boolean = false;
  public isMaster: boolean = false;
  public isSearchScreen:boolean = false;
  public  isAPPLICATION_IDEnable : boolean = true;

  public FORM_TRIGGER_FAILURE:any;
  public NOTFOUND:any;
  public disableEmitSave = false;
  public disableEmitReadCompleted = false;
  public children = ["any"];

  public action = "";
  private Body:any =[];
  public isNew!: boolean;
  public primarKeyReadOnlyArr = {isDISPLAY_IDreadOnly : false , isAPPLICATION_IDreadOnly : false};  
  public paramConfig;
  private masterKeyArr = [];
  private masterKeyNameArr = [];
  public  masterKey="";
  public masterKeyName ="APPLICATION_ID";
  public WhereClause = "";
  public OrderByClause = "";
  
  public formattedWhere:any = null;  
  public  submitted =  false;
  public masterParams:any;
  public alignment: TabAlignment = 'start';
  public isPhonePortrait = false;
  public compSelector = 'app-scd-scd-display-diagram';
  public PK_AUTO = 'DISPLAY_ID';
  public customerFacing = false;
  public FormStepsArr = [] ;
public labelDISPLAY_IDTop=true;
public labelDISPLAY_IDVisible=true;
public labelAPPLICATION_IDTop=true;
public labelAPPLICATION_IDVisible=true;
public labelDISPLAY_NAMETop=true;
public labelDISPLAY_NAMEVisible=true;
public labelDISPLAY_DATATop=true;
public labelDISPLAY_DATAVisible=true;

public visibleDISPLAY_ID = true;
public visibleAPPLICATION_ID = true;
public visibleDISPLAY_NAME = true;
public visibleDISPLAY_DATA = true;

public disableDISPLAY_ID = false;
public disableAPPLICATION_ID = false;
public disableDISPLAY_NAME = false;
public disableDISPLAY_DATA = false;


  
  //@Input()  
  public showToolBar = true;
  @Output() readCompletedOutput: EventEmitter<any> = new EventEmitter();
  @Output() clearCompletedOutput: EventEmitter<any> = new EventEmitter();
  @Output() saveCompletedOutput: EventEmitter<any> = new EventEmitter();
  @Output() formValidationChangedOutput: EventEmitter<boolean> = new EventEmitter();
  @Output() setComponentConfig_Output = new EventEmitter<any>();
  @Output() valueChange = new EventEmitter<string>();
  
  // Server management
  public availableServers: ServerConfig[] = [];
  public selectedServerId: number = 0;

   constructor(public router: Router,
              public intl: IntlService, 
              public responsive: BreakpointObserver, 
              private scadaIntegration: ScadaIntegrationService,
              private starNotify: StarNotifyService,   
              public starlib1: Starlib1,
              public starServices: starServices,
              private dialogService: DialogService,
              private expressionEngine: ExpressionEngineService,
              private cdr: ChangeDetectorRef) {
      this.router = router;
      this.componentConfig = new componentConfigDef(); 
      this.paramConfig = getParamConfig();
      this.userLang =  this.paramConfig.userLang.toUpperCase() ;
      this.componentConfig.queryable  = true;
      this.componentConfig.navigable = true;
      this.componentConfig.insertable = true;
      this.componentConfig.removeable = true;
      this.componentConfig.updateable = true;       
      this.componentConfig.showToolBar = true;
    //  this.componentConfig.enabled = true;
    this.actEditMode(this.isEditMode);

  }
  public scadaData: any = {};
  private scadaConfig = {};
  private scadaSubscriptions: Subscription[] = [];
  private componentConfigChangeEvent!: Subscription;
  public ngAfterViewInit() {
    if (typeof document !== "undefined") {
      document.addEventListener("keydown", this.polyKeyHandler, true);
    }
    this.starServices.setRTL();
    this.disableFields();
    this.WHEN_NEW_FORM_INSTANCE();
    // If there's a property dialog to render, create the component
    if (this.propertyDialogData && this.propertyDialogData.isVisible) {
      this.createPropertyDialogComponent();
    }
    //this.diagramHost.nativeElement.addEventListener(
    //  'pointerdown',
    //  this.onPointerDown
    //);
    
  }
  public Comp_Config!: componentConfigDef;
   async ngOnInit() {
     this.Comp_Config = new componentConfigDef();
      this.Comp_Config.isChild = true;

        this.responsive
      .observe([Breakpoints.HandsetPortrait])
      .subscribe((state: BreakpointState) => {
        
        this.isPhonePortrait = false;
        if (state.matches) {
           this.isPhonePortrait = true;
        }
        
      });


    this.form = createFormGroup(
        this.formInitialValues
    );
    //this.executeQuery (this.form);
    
    //let Choice_cd = this.starlib1.get_application_property(this, 'Current_Form');
    //let P_Form_Ver = '1.0';
    // await this.starlib1.invoke_form(this.routineName);
    // await this.starlib1.global_program(Choice_cd, P_Form_Ver);

    

    this.onChanges();
    this.setlookupArrDef();
    this.form.reset(this.formInitialValues);
    this.onNew(this.form);

 // Subscribing the event.
    this.componentConfigChangeEvent = this.starNotify.subscribeEvent<componentConfigDef>('componentConfigDef', componentConfig => {
      if (componentConfig.eventFrom != this.compSelector) {
         if (componentConfig.eventTo.includes(this.compSelector)|| componentConfig.eventTo.includes("any"))  {
            this.handleComponentConfig(componentConfig);
         }
      }
   });


    //this.PRE_BLOCK();
    this.AttDwnUrl = this.starServices.SERVER_URL + "/api/att?action=download&username=" + this.starServices.sessionParams['USERNAME'].toLowerCase() + "&name=";

  this.form.markAllAsTouched()
    setTimeout(() => {
      this.formValidationChangedOutput.emit(this.form.valid)
    }, 100)

    // Initialize SCADA integration
    this.scadaSubscriptions = this.scadaIntegration.initScadaForComponent(
      this, 
      this.scadaConfig,
      (changes) => this.ON_RECEIVED(changes)
    );
    
    // Get servers from integration service
    this.scadaIntegration.getServersObservable().subscribe(servers => {
      this.availableServers = servers;
      if (servers.length > 0 && this.selectedServerId === 0) {
        this.selectedServerId = servers[0].id;
      }
    });
    // Watch form changes to update isDirty in componentConfig
  this.form.valueChanges.subscribe(() => {
    if (this.componentConfig) {
      const wasDirty = this.componentConfig.isDirty;
      this.componentConfig = new componentConfigDef();
      this.componentConfig.isDirty = this.form.dirty;
      
      // Only emit if state changed
      if (wasDirty !== this.componentConfig.isDirty) {
        console.log('onCloseWindowDebug:Form dirty state changed:', this.form.dirty, this.componentConfig.isDirty);
        this.emitComponentConfig();
      }
    }
  });

  }
  private emitComponentConfig(): void {
  if (this.componentConfig) {
    this.componentConfig.eventFrom = this.compSelector;
    //this.componentConfig.eventTo = ['any'];
    console.log('onCloseWindowDebug:Emitting componentConfig:', this.componentConfig);
    this.setComponentConfig_Output.emit(this.componentConfig);
  }
}
  public ngOnDestroy(): void {
    // Unsubscribe the event once not needed.
    if (typeof document !== "undefined") {
      document.removeEventListener("keydown", this.polyKeyHandler, true);
    }
    this.stopAnimationTimer();
    if (typeof this.componentConfigChangeEvent !== "undefined") this.componentConfigChangeEvent.unsubscribe();
    this.scadaSubscriptions.forEach(sub => sub.unsubscribe());

    this.diagramHost?.nativeElement.removeEventListener(
      'pointerdown',
      this.onPointerDown
    );
    this.releasePressedButton();
 }

  callStarNotify(componentConfig:any) {
    componentConfig.eventFrom = this.compSelector;
    this.starNotify.sendEvent<componentConfigDef>('componentConfigDef', componentConfig);
  }

  private formInitialValues:any =   new scddisplayScdScdDisplayDiagram();   
    @Input() public set detail_Input(form: any) {
       if (typeof form != "undefined"){
        this.isSearch = true;
        this.executeQuery(form);
        this.isChild = true;
      }
      /*
    if (this.paramConfig.DEBUG_FLAG) console.log('detail_Input ScdDisplayScdScdDisplayDiagramDiagram form.APPLICATION_ID :' + form.APPLICATION_ID);
    if ( (form.APPLICATION_ID != "") &&   (typeof form.APPLICATION_ID != "undefined"))
    {
      this.masterKey = form.APPLICATION_ID;
      
      this.isSearch = true;
      this.executeQuery(form);
      this.isChild = true;
      //this.showToolBar = false;
    }
    else
    {
      
      if (typeof this.form != "undefined")
      {
        //this.isChild = false;
         this.form.reset();
        this.masterKey = "";
        
      }
    }
    */
  }
  @Input() public set executeQueryInput( form: any) {
    if ( (typeof form != "undefined") &&   (typeof form.APPLICATION_ID != "undefined") &&   (form.APPLICATION_ID != ""))
    {
      
      this.isSearch = true;
      this.executeQuery(form);
      this.isChild = true;
      //this.showToolBar = false;
    }
    else
    {
      
      if (typeof this.form != "undefined")
      {
        //this.isChild = false;
        this.form.reset();
        this.masterKey = "";
      }
    }
  }

  get f():any { return this.form.controls; }
  public formRec;
   async callBackFunction(data:any) {
    if (this.paramConfig.DEBUG_FLAG) console.log("inside callBackFunction:data:", data);
     this.form.markAllAsTouched()
    setTimeout(() => {
      this.formValidationChangedOutput.emit(this.form.valid)
    }, 100)
    this.myFiles = [[]];
    this.filesDeleted = [[]];
    this.img_gallery = [[]];
    this.starServices.callGetSaveAttachemts("fetch", data,this);
    this.starServices.callGetSaveWebCam("fetch", data,this);
    if (typeof data !== "undefined") {
      this.formRec = data;

      this.mapSampleData();

      await this.POST_QUERY(data);
      await this.starServices.att_img_populateArrs(data,this);
      //this.form.markAsPristine();
      //this.form.markAsUntouched();
      //this.commonCallStarNotify(data);

      
    }
  }async  commonCallStarNotify(masterParams){
    await this.starServices.sleep(200);
    let componentConfig = new componentConfigDef();
      componentConfig.eventTo = this.children;
      componentConfig.masterParams = masterParams;
      this.callStarNotify(componentConfig);
   }

    async executeQuery( form: any ) {
      if (typeof form == "undefined")
        return;
     this.getMenu();
     await this.PRE_QUERY(form);
     if (this.FORM_TRIGGER_FAILURE == true)
         return;
    if (this.isSearchScreen == true){
      console.log("isSearchScreen:form.value:",form )
      let Page = this.starServices.formatWhere(form);
      console.log("isSearchScreen:Page:",Page )
      this.readCompletedOutput.emit(Page);
      return;
    }
    if ( (this.WhereClause != "") && (this.isSearch != true) )
    {
      this.formattedWhere = this.WhereClause ;
      this.isSearch = true;
    }
    let formGroup = createFormGroup(this.formInitialValues);
    let newForm = {...form}
    this.starServices.removeNonValidColumns(newForm,formGroup.value);
    this.starServices.executeQuery_form(newForm, this); // Fuad: this should be form, and not this.form.getRawValue()
  }

  private addToBody(NewVal:any){
    this.Body.push(NewVal);
  }

  public onCancel(e:any): void {
    this.starServices.onCancel_form ( e , this);
  }
   async fetchLookupsCallBack() {

      if (this.paramConfig.DEBUG_FLAG) console.log("this.lookupArrDef:", this.lookupArrDef)
      
   }

  public onNew(e:any): void {
    if (this.paramConfig.DEBUG_FLAG) console.log("this.masterKeyNameArr:", this.masterKeyNameArr, "this.masterKeyNameArr.length",this.masterKeyNameArr.length)
    if (this.masterKeyNameArr.length != 0)
    {
      for (let i = 0; i< this.masterKeyNameArr.length; i++){
        if (this.paramConfig.DEBUG_FLAG) console.log(this.masterKeyNameArr[i] + ":" + this.masterKeyArr[i])
        this.formInitialValues[this.masterKeyNameArr[i]] = this.masterKeyArr[i];
      }
    }
    else
    {
      if (this.paramConfig.DEBUG_FLAG) console.log(this.masterKeyName + this.masterKey)
      this.formInitialValues[this.masterKeyName] = this.masterKey;
    }

    this.starServices.onNew_form ( e , this);
    this.setRequired();
    this.setInitialValues();
    this.WHEN_CREATE_RECORD();
    //this.KEY_CRREC();
    this.form.markAllAsTouched();
    this.formValidationChangedOutput.emit(this.form.valid);


  }
   public setInitialValues() {
    
  
    //this.form.patchValue({ 'GSM_OPERATOR': 'N' });
    this.form.markAsPristine();
    this.form.markAsUntouched();

   }
   public setRequired() {
   //this.form.controls['GOVERNATE'].setValidators([Validators.required]);
   }



  async onRemove( form:any) {
    await this.PRE_DELETE(form.value);
    //await this.KEY_DELREC();
     if (this.FORM_TRIGGER_FAILURE) 
       return;

    this.starServices.onRemove_form(form,this);
  }

  async  enterQuery (form : any){
    
    this.starServices.enterQuery_form ( form, this);

    await this.KEY_ENTQRY();
  }

    async callBackPost_Insert(NewVal:any) {
      if (this.paramConfig.DEBUG_FLAG) console.log("callBackPost_Insert:",  " NewVal:", NewVal)
      //this.commonCallStarNotify(NewVal);
      if (this.FORM_TRIGGER_FAILURE) 
      {
         this.starServices.endTrans(this, false);
         return;
      }
      this.Comp_Config = new componentConfigDef();
      this.Comp_Config.masterSaved = NewVal;
      this.Comp_Config.masterKeyArr =  [NewVal['DISPLAY_ID']];
      this.Comp_Config.masterKeyNameArr =  ["DISPLAY_ID"];
         
       await this.POST_INSERT(NewVal);
      if (this.FORM_TRIGGER_FAILURE) 
      {
         this.starServices.endTrans(this, false);
         return;
      }

      if (this.paramConfig.DEBUG_FLAG) console.log("testing  post POST_INSERT : ", this.FORM_TRIGGER_FAILURE)
      if (!this.FORM_TRIGGER_FAILURE) {
        // Fuad: emit already taking place in starlib service
         //this.saveCompletedOutput.emit(this.form.getRawValue());
      }
   }
   async callBackPost_Update( NewVal:any) {
      if (this.paramConfig.DEBUG_FLAG) console.log("callBackPost_Update:",  " NewVal:", NewVal);
      //this.commonCallStarNotify(NewVal);
      await this.POST_UPDATE(NewVal);
   }

   async callBackPost_Remove( NewVal:any) {
      if (this.paramConfig.DEBUG_FLAG) console.log("callBackPost_Remove:",  " NewVal:", NewVal);
      //this.commonCallStarNotify("");
      await this.POST_DELETE(NewVal);
   }
  
   async saveChanges(form: any) {
      this.FORM_TRIGGER_FAILURE = false;
      this.Body = [];
        
     


         this.form.markAllAsTouched();
   
          await this.WHEN_VALIDATE_RECORD(form.value);
         if (this.FORM_TRIGGER_FAILURE)
            return;

      //this.starServices.beginTrans();

      if (this.isNew == true) {
         this.disableEmitSave = true;
          await this.PRE_INSERT(form.value);
         if (this.FORM_TRIGGER_FAILURE){
            this.starServices.endTrans(this, false);
            return;
         }

      }
      else {
       
             await this.PRE_UPDATE(form.value);
         if (this.FORM_TRIGGER_FAILURE){
            this.starServices.endTrans(this, false);
            return;
         }

      }
      if (this.form.valid == false && this.form.dirty == true){
         let invalid = this.starServices.getInvalidControls(this);
          this.FORM_TRIGGER_FAILURE = true;
          this.starServices.endTrans(this, false);
          return;
      }

     
      if (!this.FORM_TRIGGER_FAILURE) {
	        await this.KEY_COMMIT();
	      if (this.FORM_TRIGGER_FAILURE == true){
		this.starServices.endTrans(this, false);
		 return;
		}
         this.starServices.callGetSaveAttachemts("save","",this);
         this.starServices.callGetSaveWebCam("save","",this);
         let form1 = this.starServices.stringifyMultiSelectFields(this,form);
         this.starServices.saveChanges_form(form1, this);
      }

   }


  public goRecord ( target:any): void{
    this.starServices.goRecord ( target, this);
  }

public userLang = "EN" ; 
public lookupArrDef:any =[];
public setlookupArrDef(){
this.lookupArrDef =[	{"statment":"SELECT APPLICATION_ID CODE, APPLICATION_NAME CODETEXT_LANG  FROM SCD_APPLICATION  order by CODETEXT_LANG ",
			"lkpArrName":"lkpArrAPPLICATION_ID"}];
 if (this.lookupArrDef.length > 0)
   this.starServices.fetchLookups(this, this.lookupArrDef);
}

public lkpArrAPPLICATION_ID = [];

public lkpArrGetAPPLICATION_ID(CODE: any): any {
var rec = this.lkpArrAPPLICATION_ID.find((x:any) => x.CODE === CODE);
return rec;
}

onChanges(): void {
}


public printScreen(){
  window.print();
}
  disableForm(){
    let controlNames = Object.keys(this.form.controls);
    //console.log("controlNames:", controlNames);
    controlNames.forEach(name => {
      this.form.get(name).disable();
      let id = "disable" + name;
      let status = this[id];     
      if (status !== '' && status == false)
        this.form.get(name).enable();
    });
  }
  disableFields(){
    let controlNames = Object.keys(this.form.controls);
     controlNames.forEach(name => {
      //console.log("disableFields name:", name);
      let id = "disable" + name;
      let status = this[id];     
       //console.log("disableFields id:", id, " status:", status);
      if (status == true)
        this.form.get(name).disable();
      else        
        this.form.get(name).enable();
    });
  }
  public handleComponentConfig(ComponentConfig:any) {
    if (typeof ComponentConfig !== "undefined") {
      if (this.paramConfig.DEBUG_FLAG) console.log("ScdDisplayScdScdDisplayDiagramDiagram ComponentConfig:", {...ComponentConfig});

      this.componentConfig = this.starServices.setComponentConfig(ComponentConfig, this.componentConfig);
      this.WHEN_NOTIFY(ComponentConfig);
      if (this.componentConfig.enabled == false) {
        this.disableForm();
      }
      if (ComponentConfig.isMaster == true)
        this.isMaster = true;
      if (ComponentConfig.isSearchScreen == true){
        this.isSearchScreen = true;
        this.isSearch = true;
      }

      
    
      if (ComponentConfig.masterKey != null) {

        this.masterKey = ComponentConfig.masterKey;
      }
      if (ComponentConfig.masterKeyArr != null) {
        this.masterKeyArr = ComponentConfig.masterKeyArr;
      }
      if (ComponentConfig.masterKeyNameArr != null) {
        this.masterKeyNameArr = ComponentConfig.masterKeyNameArr;
      }
      if (ComponentConfig.newRec != null) {
        if (this.componentConfig.insertable){
          this.form.reset(this.formInitialValues);
          this.onNew(this.form);
          this.form.markAsDirty();
        }
      }
      if (ComponentConfig.masterSaved != null) {
        this.saveChanges(this.form);
        ComponentConfig.masterSaved = null;
      }
      if (ComponentConfig.masterParams != null) {
        this.masterParams = ComponentConfig.masterParams;
      }

      if (ComponentConfig.formattedWhere != null) {
        this.formattedWhere = ComponentConfig.formattedWhere;
        this.isSearch = true;
        let formGroup = createFormGroup(this.formInitialValues);
        this.executeQuery(formGroup);

      }
      if (ComponentConfig.masterReadCompleted != null) {
        this.isSearch = false;
        this.isChild = true;
        this.executeQuery(this.form.getRawValue())
      }
      if (ComponentConfig.clearComponent == true) {
        this.onCancel(this.form)
      }
      if ( ComponentConfig.isChild == true)
      {
          this.isChild = true;
      }
      if (ComponentConfig.languageChanged != null) {
        if (this.userLang != ComponentConfig.languageChanged) {
          this.userLang =  ComponentConfig.languageChanged;
          this.setlookupArrDef();
        }
      }
      if (typeof this.form != "undefined") {
            this.formValidationChangedOutput.emit(this.form.status == "DISABLED" ? true :this.form.valid)
            this.form.statusChanges.subscribe(() => {
              this.formValidationChangedOutput.emit(this.form.status == "DISABLED" ? true :this.form.valid)
            })
          }
      
    }

  }
  @Input() public set setComponentConfig_Input(ComponentConfig: componentConfigDef) {
    this.handleComponentConfig(ComponentConfig);


  }
  async WHEN_NOTIFY(ComponentConfig){
    if (ComponentConfig.masterParams != null) {
      if (this.DIAGRAM_ID == null){
        setTimeout(() => {
            let masterParams = ComponentConfig.masterParams;
            console.log("Diagram masterParams:", masterParams)
            //this.form.value.DIAGRAM_ID = masterParams.DIAGRAM_ID;
            this.isSearch = true;
            let form: any = {};
            form.DISPLAY_ID = masterParams.data.MENU_ID;
            this.DIAGRAM_ID = masterParams.data.MENU_ID
            console.log("Diagram masterParams:", masterParams.data.MENU_ID, masterParams, form, this.form, "this.isSearch:", this.isSearch)
            this.executeQuery(form);
        }, 300);
      }
      if (typeof ComponentConfig.masterParams.isEditMode != "undefined"){
              this.actEditMode(ComponentConfig.masterParams.isEditMode);
        }
   
        
      
    }
  }
  async WHEN_NEW_FORM_INSTANCE(){
    // if (!this.isChild) {
//   this.executeQuery(this.form.value);
// }

console.log("WHEN_NEW_FORM_INSTANCE");
var href = window.location.href;

var array = href.split("&");
console.log("WHEN_NEW_FORM_INSTANCE:array:", array);
if (array.length > 2) {
  let disp_data = array[2]
  let array2 = disp_data.split("=");
  console.log("WHEN_NEW_FORM_INSTANCE:array2:", array2);
  if (array2[0] == "DISPLAY_ID") {
    this.showDiagramToolBar = false;
    let DISPLAY_ID = decodeURIComponent(array2[1]);
    console.log("WHEN_NEW_FORM_INSTANCE:DISPLAY_ID:", DISPLAY_ID);
    setTimeout(() => {
      this.isSearch = true;
      let form: any = {};
      form.DISPLAY_ID = DISPLAY_ID
      this.executeQuery(form);
      this.actEditMode(this.isEditMode);

    }, 300);

  }
}


await this.scadaIntegration.ensureServersConnected(this.starlib1.myServerConfigs);

  this.scadaSubscriptions = this.scadaIntegration.initScadaForComponent(
    this,
    this.scadaConfig,
    (changes) => this.ON_RECEIVED(changes)
  );
    
  }
  async WHEN_CREATE_RECORD(){
    

  }
   KEY_ENTQRY(){
    

  }
   KEY_DELREC(){
    

  }
   async WHEN_VALIDATE_RECORD(formGroup){
    

  }
  async  PRE_UPDATE(formGroup){

  }
  async  POST_UPDATE(formGroup){
    
    
  }
  async KEY_COMMIT(){
   

}
 async ON_CLICK(formGroup){
     // console.log("kendoui_content:1:", this.starServices.sessionParams['COPIED_SHAPE']);

//     if (typeof this.starServices.sessionParams['COPIED_SHAPE'] != "undefined"
//       && this.starServices.sessionParams['COPIED_SHAPE'] != "") {
//       let copiedShape = this.starServices.sessionParams['COPIED_SHAPE'];
//       let kendoui_content = JSON.parse(copiedShape.kendoui_content);
//       kendoui_content.id = copiedShape.id;
//       this.starServices.sessionParams['COPIED_SHAPE'] = "";
//       console.log("kendoui_content:2:", formGroup, this.lastClickX, this.lastClickY, kendoui_content);
//       let shapeType = "SYMPOL_FACTORY";
//       kendoui_content = await this.insertSCDShape(kendoui_content, shapeType)
//       this.add_new_shape(kendoui_content, copiedShape.type);
//       this.updateShapes();
//     }

}

 async ON_CLICK_CONTEXT_MENU(menuType,event){
        setTimeout(() => {
    this.selectedShape = null;
  });

  if (menuType === "DROPDOWN" && !this.insertShapeFlag) {
    if (event.Id !== "SymbolFactoryPlus") {

      // FreeHand tool
      if (event.text === "FreeHand") {
        this.event = event;
        this.toggleFreehandMode();
        this.menuType = menuType;
        this.insertShapeFlag = true;
        this.pendingShapeType = event.text;
        return;
      }

      // Line tool
      if (event.text === "Line") {
        this.event = event;
        this.addLine();
        this.menuType = menuType;
        this.insertShapeFlag = true;
        this.pendingShapeType = event.text;
        return;
      }
      if ( (event.text === "Polygon") )  {
        this.event = event;
        this.addPolygon();               // enters polyMode = "polygon"
        this.menuType = menuType;
        this.insertShapeFlag = true;
        this.pendingShapeType = event.text;
        return;
      }
       if (  (event.text === "Polyline"))  {
        this.event = event;
        this.addPolyline();               // enters polyMode = "Polyline"
        this.menuType = menuType;
        this.insertShapeFlag = true;
        this.pendingShapeType = event.text;
        return;
      }

      // All other shapes: drag to size
      this.armDragTool(event.text);
      return;
    }
  }
  this.insertShapeFlag = false;
    let shapeInfo = this.getShapeInfo();
    let shapeType = shapeInfo['SHAPE_TYPE'];
    let action = "new";
    let SHAPE_ID = "";
    let title = "";
    console.log("DEBUG_IT:ON_CLICK_MENU:event:", event, "menuType:", menuType, "currentShapeType:",
      this.currentShapeType, "currentShapeId:", this.currentShapeId, "shapeType:", shapeType)
    let Id = "";
    if (menuType == "DROPDOWN") {
      action = "new";
      Id = event.Id;
      shapeType = event.text;
      title = event.dataItem.ITEM_TITLE;

    }
    else if (menuType == "CONTEXT_MENU") {
      Id = event.item.Id;
      /////
      switch (Id) {
        case 'SHOW_GRID':
          this.toggleGrid();
          return;
        case 'SNAP':
          this.toggleSnap();
          return;
        case 'ZOOM_FIT':
          this.zoomToFit();
          return;
        case 'ZOOM_IN':
          this.zoomIn();
          return;
        case 'ZOOM_OUT':
          this.zoomOut();
          return;
        default:
          break;
      }
      let arr = this.currentShapeId.split(":");
      shapeType = arr[0];
      SHAPE_ID = arr[1];
      action = "open";
      ////
      console.log("shapeType:", shapeType)
      switch (shapeType) {
        case 'Numeric Display':
        case 'numeric display':
          Id = 'Numeric_Display_Properties';
          break;
        case 'String Display':
          Id = 'String_Display_Properties';
          break;
        case 'Time and Date Display':
          Id = 'Message_Date_Properties';
          title = shapeType + '  Properties';
          break;
        case 'Local Message':
          Id = 'Local_Message_Properties';
          title = shapeType + '  Properties';
          break;
        case 'Text':
          Id = 'Text_Properties';
          title = shapeType + '  Properties';
          break;
        case 'Tag Label':
          Id = 'Tag_Label_Properties';
          title = shapeType + '  Properties';
          break;
        case 'Numeric Input':
          Id = 'Numeric_Input_Properties';
          break;
        case 'String Input':
          Id = 'String_Input_Properties';
          break;
        case 'Button':
          Id = 'Button_Properties';
          break;
        case 'BarGraph':
          Id = 'Bar_Graph_Properties';
          break;
        case 'Scale':
          Id = 'Scale_Properties';
          break;
        case 'Gauge':
          Id = 'Gauge_Properties';
          break;
        case 'Multiple':
          Id = 'Multistate_Indicator_Properties';
          break;
        case 'List Indicator':
          Id = 'List_Indicator_Properties';
          break;
        case 'Backspace':
        case 'End':
        case 'Enter':
          Id = 'Arrow_Button_Properties';
          title = shapeType + ' Properties';
          break;
        case 'Move Left':
        case 'Move Right':
        case 'Move Down':
        case 'Move Up':
        case 'Page Up':
        case 'Page Down':
          Id = 'Arrow_Timing_Properties';
          title = shapeType + ' Properties';
          break;
        case 'Momentry':
        case 'Maintained':
        case 'Latched':
        case 'Interlocked':
          Id = 'Push_Button_Properties';
          title = shapeType + ' Push Button Properties';
          break;
        case 'Banner':
          Id = 'Alarm_and_Event_Banner_Properties';
          break;
        case 'Summary':
          Id = 'Alarm_and_Event_Summary_Properties';
          break;
        case 'Log Viewer':
          Id = 'Alarm_and_Event_Log_Viewer_Properties';
          break;
        case 'Status Explorer':
          Id = 'Alarm_Status_Explorer';
          break;
        case 'Multistate':
          Id = 'Arrow_Button_Timing';
          title = shapeType + ' Push Button Properties';
          break;
        case 'Ramp Button':
          Id = 'Ramp_Button_Timing';
          title = shapeType + ' Properties';
          break;
        case 'Navigation Button':
          Id = 'Navigation_Button_Properties';
          title = shapeType + ' Properties';
          break;
        case 'Arrow Horizontal':
        case 'Arrow Vertical':
          Id = 'Arrow_Properties';
          break;
        case 'Panel':
        case 'Arc':
        case 'Elipse':
        case 'FreeHand':
        case 'Line':
        case 'Polygon':
        case 'Polyline':
        case 'Rectangle':
        case 'Rounded Rectangle':
        case 'Wedge':
          title = shapeType + ' Properties';
          break;
        default:
          break;
      }
      console.log("ON_CLICK_MENU:id:", Id, shapeType, title);
    }
    if (Id != "") {
      let rec = this.dialogProperties.find(x => x.Component == Id);
      console.log("ON_CLICK_MENU:rec:", this.selectedShape, rec)
      if (typeof (rec) != 'undefined') {
        let Id = rec.Id;
        let Maximize = rec.Maximize;
        switch (shapeType) {
          case 'SYMPOL_FACTORY':
            //  Id='3';
            break;
          default:
            break;
        }
        console.log("ON_CLICK_MENU:Id:", Id)
        //this.starlib1.dialog_openDialog(this, Id,Maximize);
        this.openPropertyDialog(this, Id, Maximize, shapeType, action, SHAPE_ID, title);
      }
      setTimeout(() => {
        this.selectedShape = null;
      });

    }

}
public zoomLevel: number = 1;
public readonly zoomMin = 0.1;
public readonly zoomMax = 2;
public currentPan: { x: number, y: number } = { x: 0, y: 0 };

public lastSelectedContainerId: string | null = null;

async ON_EVENT(type: string, event: any) {
   // ============================================================
// BUTTON RUNTIME INTERACTION
// These events must work in both Edit Mode and Runtime Mode.
// ============================================================

if (
  type === "mouseEnter" ||
  type === "mouseLeave" 
) {
  const shape = event.item;

  if (shape) {
    if (shape.id) {
      this.currentShapeId = shape.id;
    }

    const dataItem =
      shape.dataItem?.dataItem ??
      shape.dataItem ??
      {};
    const isCustomButton =
    dataItem?.visual === 'button3DVisual' ||
    dataItem?.visual === 'buttonRaisedVisual'||
    dataItem?.visual === 'buttonBelevedVisual'||
    dataItem?.visual === 'buttonRecessedVisual'||
    dataItem?.visual === 'buttonNoneVisual';
    
    
    
    if (isCustomButton) {

      // Disabled buttons don't react
      if (dataItem?.disabled === true) {
        //return;
      }

      // -------------------------
      // Mouse enters button
      // -------------------------
      if (type === 'mouseEnter') {
        if ( !this.isDbYes(dataItem.disabled) && this.isDbYes(dataItem.allowHover) ) {
          dataItem.buttonState = 'hover';
          this.refreshCustomShape(shape);
        }
      }

      // -------------------------
      // Mouse leaves button
      // -------------------------
      if (type === 'mouseLeave') {
        const buttonData =
          shape.dataItem?.dataItem ??
          shape.dataItem ??
          {};

        if (!this.isDbYes(buttonData.disabled)) {
          buttonData.buttonState =
            this.pressedShapeId === shape.id ? 'pressed' : 'normal';

          this.refreshCustomShape(shape);
        }
      }

   

      
    }
  }
}


// ============================================================
// EDITOR-ONLY EVENTS
// ============================================================

if (!this.isEditMode)
  return;

  if (type === "select" || type === "shapeBoundsChange" || type === "change") {
      setTimeout(() => this.syncInspectorFromSelection());
    }
    if (type === "change") {
      // Paste/duplicate/delete can add or remove runtime shapes. Reconcile
      // those changes with this.shapes as well.
      this.applyDiagramChangeToAppMemory(event);
    }
    if (type === "select" || type === "shapeBoundsChange" || type === "change") {
      setTimeout(() => this.syncInspectorFromSelection());
    }

    // ===== ZOOM TRACKING =====
    if (type === "zoomStart") {
        this.zoomLevel = event.zoom || 1;
        console.log(`🔍 checking:Zoom Start: ${this.zoomLevel}`);
        return;
    }

    if (type === "zoomEnd") {
        this.zoomLevel = event.zoom || 1;
        console.log(`🔍 checking:Zoom End: ${this.zoomLevel}`);
        return;
    }

    // ===== PAN TRACKING =====
    if (type === "pan") {
        this.currentPan = event.pan || { x: 0, y: 0 };
        console.log(`🔍 checking:pan: (${this.currentPan.x}, ${this.currentPan.y})`);
        return;
    }

       // ===== MOUSE ENTER =====
    if (type === "mouseEnter") {
        const shape = event.item;
        if (shape && shape.id) {
            console.log(`🖱️ Hovering over: ${shape.id}`);
            this.currentShapeId = shape.id;
            if (this.isEditMode) {
                let type = shape.dataItem?.dataItem?.type;
                this.currentShapeType = type;
                this.setContextMenu(this.currentShapeType);
                // Update rotation angle when shape is selected
                const rotation = this.readRotation(shape);
                this.rotationAngle = rotation || 0;
            }
        }
        return;
    }

    // ===== MOUSE LEAVE =====
    if (type === "mouseLeave") {
    console.log(`🖱️ Mouse left: ${this.currentShapeId}`);
    
 
    
    // Existing mouseLeave logic
    //this.currentShapeId = "";
    if (this.isEditMode) {
        //this.currentShapeType = "";
        this.setContextMenu("");
    }
    return;
}

    // ===== DRAG END =====
    if (type === "dragEnd") {
    const shape = event.shapes?.[0];

    if (!shape) return;

    shape.refreshConnections();

    this.syncRuntimeShapeToModel(shape);

    this.updateShapes();

    return;
}
if (type === "shapeBoundsChange") {
  const shape = event.item;
  const bounds = event.bounds;
  
  if (!shape || !bounds) return;
  
  // Use the new sync method
  this.syncRuntimeShapeToModel(shape);
  return;
}
    // ===== SELECT =====
    if (type === "select" && event.selected) {
        const selectedItem = event.selected[0];
        const containerId = selectedItem?.id;
        console.log(`checking:select : ${containerId}`);
        if (typeof containerId == "undefined")
          this.currentShapeType = "";
        
        if (!containerId) return;
        
        // 🔑 ALWAYS store the last selected container ID
        this.lastSelectedContainerId = containerId;
        
       
        

        if (this.isEditMode) {
            const mouseEvent = event.originalEvent;
            const x = mouseEvent?.clientX || 0;
            const y = mouseEvent?.clientY || 0;
            let shapeId: string | null = null;
            if (event.selected && event.selected.length > 0) {
                shapeId = event.selected[0].id;
                // Update shape type and rotation
                const shape = event.selected[0];
                const type = shape.dataItem?.dataItem?.type;
                this.currentShapeType = type || '';
                const rotation = this.readRotation(shape);
                this.rotationAngle = rotation || 0;
            }
            this.showContextMenuAt(x, y, shapeId);
        }
    }
    
    console.log("on event")

}
  private ON_RECEIVED(changes: any): void {
      this.latestTime = Date.now();
    function formatChanges(changes){
      let eventsArr ={};
      for (let i =0;i< changes.length;i++){
        let change = changes[i];
        //console.log("change:change:",change.type)
        if (change.type == "tag"){
          let key = change.tagName;
          let value = change.newValue.value;
          if (typeof value == "undefined"){
            value = change.oldValue.value;
            if (typeof value == "undefined"){
              value = 0;
            }
          }
          change.value = value;
          eventsArr[key] = change;
        }

      }
      //console.log("change:eventsArr:",eventsArr)
      return eventsArr;

    }
    if (typeof this.diagram == "undefined") {
            return;
        }
        if(this.paramConfig.DEBUG_FLAG) console.log("opcua:on received data from scada :changes:", changes);
        //console.log("opcua:on received data from scada :changes:", changes);
        let eventsArr = formatChanges(changes);
        // let Keys = Object.keys(this.expData);
         //console.log("opcua:on received data from scada :eventsArr:",  eventsArr, this.expData);
         if (Object.keys(eventsArr).length != 0){
        for (let i = 0; i < this.expData.length; i++) {
          //let key = Keys[i];
          if(this.paramConfig.DEBUG_FLAG) console.log("opcua:on received data from scada :this.expData:", this.expData);
          let expData = this.expData[i];
          let loaded = expData.loaded;
          if (typeof loaded != "undefined"){
            const { rule, variables } = loaded;
            if(this.paramConfig.DEBUG_FLAG) console.log("opcua:on received data from scada :expData:",  expData);
            //let expData = this.expData[i];
            let tagNames = expData.tagNames;
            let tagNamesScada = expData.tagNamesScada;
            
            const tags: Record<string, Value> = {};
            for (let j = 0; j< tagNames.length;j++){
              let tagName = tagNames[j];
              let tagNameScada = tagNamesScada[j];
              let value = 0;
              let event:any = eventsArr[tagName];
              if (typeof event == "undefined"){
                //console.log("undefined event for tagName:", tagName, event, eventsArr)
              }
              else
                value = eventsArr[tagName].value;
              tags[tagNameScada] = value; 
            }
            if(this.paramConfig.DEBUG_FLAG) console.log("opcua:on received data from scada :tags:",  tags);
            const context: RuntimeContext = {
            tags,
            input: variables.usesPlaceholder ? 0 : undefined,
            currentUserName: this.starServices.sessionParams?.['USERNAME'] ?? 'TESTUSER',
            currentLanguage: this.userLang ?? 'en',
            securityCodes: ['A', 'D'],   // ← substitute with real session data if available
          };
          try {
            if(this.paramConfig.DEBUG_FLAG) console.log('opcua:Rule execute:', context);
            const value = rule.execute(context);
            if(this.paramConfig.DEBUG_FLAG) console.log('opcua:Rule executed successfully. Result:', value);
            let shape_id = expData.SHAPE_TYPE + ":" + expData.SHAPE_ID;
            if(this.paramConfig.DEBUG_FLAG) console.log('opcua:Rule shape_id:', shape_id);
            const liveShape = this.diagram.getShapeById(shape_id);
            if(this.paramConfig.DEBUG_FLAG) console.log("opcua:on received data from scada :pre shape_id:", shape_id, 
                            "liveShape:",liveShape);
            liveShape.dataItem.dataItem.text = value.toString();
                          if(this.paramConfig.DEBUG_FLAG) console.log("opcua:on received data from scada :post shape_id:", shape_id, "liveShape:",liveShape);
                          liveShape.redrawVisual();

          } catch (err) {
            if(this.paramConfig.DEBUG_FLAG) console.warn('opcua:Rule runtime error:', (err as Error).message);
          }

          
          }
          
        }
      }
      ;
      if (Object.keys(eventsArr).length != 0)
        this.showTime("ON_RECEIVED")
  }

  async  PRE_INSERT(formGroup){
    
    
  }
  async  POST_INSERT(formGroup){
    
   
  }
  async  PRE_QUERY (formGroup){
    
   
  }
  async  POST_QUERY(formGroup){
    // console.log("POST_QUERY:formGroup:", formGroup)
//     let whereClause = "APPLICATION_ID =" + formGroup.APPLICATION_ID;
//     let body = [
//       {
//         "_QUERY": "GET_SCD_OPCUA_SERVER_QUERY",
//         "_WHERE": whereClause
//       }
//     ];

//     let data = await this.starServices.execSQLBody(this, body, "");
//     if (this.paramConfig.DEBUG_FLAG) console.log("POST_QUERY:data[0].data:", data[0].data);
//     if (typeof data[0].data != "undefined") {
//       let opcuaServers = data[0].data;
//       await this.starlib1.performAddServers( opcuaServers)

//     }
    
  }
  async  PRE_DELETE(formGroup:any){
    

  }
  async POST_DELETE(formGroup:any){
    

  }



async WHEN_VALIDATE_ITEM_DISPLAY_ID(value) {

 this.FORM_TRIGGER_FAILURE = false ; 
 if (typeof this.form.controls['DISPLAY_ID'] != "undefined" ) 
      this.form.controls['DISPLAY_ID'].setErrors({invalid: true}); 
 // Code goes here 
 

 if ( this.FORM_TRIGGER_FAILURE == true) 
 return; 
 
 if (typeof this.form.controls['DISPLAY_ID'] != "undefined" ) 
     this.form.get('DISPLAY_ID').updateValueAndValidity();
 this.form.updateValueAndValidity(); 
 }

 async ON_CLICK_DISPLAY_ID(event){

}

async WHEN_VALIDATE_ITEM_APPLICATION_ID(value) {

 this.FORM_TRIGGER_FAILURE = false ; 
 if (typeof this.form.controls['APPLICATION_ID'] != "undefined" ) 
      this.form.controls['APPLICATION_ID'].setErrors({invalid: true}); 
 // Code goes here 
 

 if ( this.FORM_TRIGGER_FAILURE == true) 
 return; 
 
 if (typeof this.form.controls['APPLICATION_ID'] != "undefined" ) 
     this.form.get('APPLICATION_ID').updateValueAndValidity();
 this.form.updateValueAndValidity(); 
 }

 async ON_CLICK_APPLICATION_ID(event){

}

async WHEN_VALIDATE_ITEM_DISPLAY_NAME(value) {

 this.FORM_TRIGGER_FAILURE = false ; 
 if (typeof this.form.controls['DISPLAY_NAME'] != "undefined" ) 
      this.form.controls['DISPLAY_NAME'].setErrors({invalid: true}); 
 // Code goes here 
 

 if ( this.FORM_TRIGGER_FAILURE == true) 
 return; 
 
 if (typeof this.form.controls['DISPLAY_NAME'] != "undefined" ) 
     this.form.get('DISPLAY_NAME').updateValueAndValidity();
 this.form.updateValueAndValidity(); 
 }

 async ON_CLICK_DISPLAY_NAME(event){

}

async WHEN_VALIDATE_ITEM_DISPLAY_DATA(value) {

 this.FORM_TRIGGER_FAILURE = false ; 
 if (typeof this.form.controls['DISPLAY_DATA'] != "undefined" ) 
      this.form.controls['DISPLAY_DATA'].setErrors({invalid: true}); 
 // Code goes here 
 

 if ( this.FORM_TRIGGER_FAILURE == true) 
 return; 
 
 if (typeof this.form.controls['DISPLAY_DATA'] != "undefined" ) 
     this.form.get('DISPLAY_DATA').updateValueAndValidity();
 this.form.updateValueAndValidity(); 
 }

 async ON_CLICK_DISPLAY_DATA(event){

}

public DIAGRAM_ID = null;
public serversMapp = {};
public serversMappReversed = {};

public latestTime;
private showTime(id) {
	let curTime = Date.now();
	console.log("step:", id, ":", (curTime - this.latestTime), curTime, this.latestTime);
	this.latestTime = curTime;
}
// For Adding new CODE
  public  grid_som_tabs_codes={};
  public SOM_TABS_CODESConfig!: componentConfigDef;
  public filterCode!: string;
  public showCodeDetails:boolean=false;

// For Attachments and images
public myFiles = [[]];
public filesDeleted = [[]];
public img_gallery = [[]];
public DSP_UPLOADConfig!: componentConfigDef;
public DSP_WEBCAMConfig!: componentConfigDef;
public att_arr = [];
public img_arr = [];
public multiselect_arr = [];
public AttDwnUrl = "";
public uploadimage = false;

 public async att_img_saveFormCompleted(field_id){
  console.log("att_img_saveFormCompleted:",  field_id, this.form.getRawValue()[field_id])
  let routine = "WHEN_VALIDATE_ITEM_" + field_id;
  await   this[routine](this.form.getRawValue()[field_id]);
}
public getAttWrapper(field){
  
  //console.log("getAtt_data: inside getAttWrapper:field:", field)
   // console.log("getAtt_data: inside getAttWrapper:field:", field, "form.get:", 
     // this.form.get(field).value)
      
  //console.log("getAtt_data:this.form:",this.form, this.form.getRawValue()[field]);
  let val = this.form.getRawValue()[field];
  //console.log("getAtt_data: inside getAttWrapper:field:", field, val)
  let retVal = this.starServices.att_img_getAtt(val,this);
  return retVal;
}
//diagram

public mapperFromOrg = {
    "DiagramID": "DiagramID",
    "name": "NAME",
    "DiagramData": "DiagramData",
  };
public mapperFrom = {"DiagramID":"DISPLAY_ID","name":"DISPLAY_NAME","DiagramData":"DISPLAY_DATA"};
public snapDistance = 6;
  public editable: DiagramEditable = this.buildEditable();
  public isDrag = true;
  public isRotate = true;
  public isResize = true;
  public isRemove = true;
  private buildEditable(): DiagramEditable {
    return {
      drag: this.isDrag,
      rotate: this.isRotate,
      resize: this.isResize,
      remove: this.isRemove,
    };
  }
  public drawDiagramFromDefinition(
    definition: DiagramDefinition,
    offsetX: number = 0,
    offsetY: number = 0,
    editorStyle?: ShapeEditorStyle,
    targetWidth?: number,
    targetHeight?: number
  ): Group {
    const group = new Group();

    // Keep track of shape positions for connections
    const shapePositions = new Map<string, { x: number; y: number; width: number; height: number }>();

    // 1. Draw all shapes (rectangles and circles)
    if (definition.shapes) {
      definition.shapes.forEach((shape) => {
        const x = shape.x + offsetX;
        const y = shape.y + offsetY;

        // Store shape position for connections
        shapePositions.set(shape.id, {
          x: x,
          y: y,
          width: shape.width,
          height: shape.height
        });

        if (shape.shape === "circle") {
          // Draw circle
          const circle = new Circle({
            center: { x: x + shape.width / 2, y: y + shape.height / 2 },
            radius: shape.width / 2,
            stroke: shape.stroke ? { width: shape.stroke.width, color: editorStyle?.strokeColor || shape.stroke.color } : undefined,
            fill: { color: editorStyle?.fillColor || shape.fill || "#fff" },
          });
          if (shape.opacity !== undefined) {
            circle.options.opacity = shape.opacity;
          }
          group.append(circle);
        } else {
          // Draw rectangle (default)
          const rect = new Rectangle({
            x: x,
            y: y,
            width: shape.width,
            height: shape.height,
            cornerRadius: shape.cornerRadius || 0,
            stroke: shape.stroke ? { width: shape.stroke.width, color: editorStyle?.strokeColor || shape.stroke.color } : undefined,
            fill: { color: editorStyle?.fillColor || shape.fill || "#fff" },
          });
          if (shape.opacity !== undefined) {
            rect.options.opacity = shape.opacity;
          }
          group.append(rect);
        }
      });
    }

    // 2. Draw all lines (paths, straight lines, waves)
    if (definition.lines) {
      definition.lines.forEach((line) => {
        if (line.path) {
          // Draw path
          const path = new Path({
            data: line.path,
            stroke: {
              width: line.stroke?.width || 1,
              color: editorStyle?.strokeColor || line.stroke?.color || "#000",
              dashType: line.stroke?.dashType as any,
            },
            fill: {
              color: line.fill && line.fill !== "transparent"
                ? (editorStyle?.fillColor || line.fill)
                : (line.fill || "transparent")
            },
          });
          if (line.opacity !== undefined) {
            path.options.opacity = line.opacity;
          }
          // Compound/path-only shapes must respect the child offset while grouped.
          // Path (the diagram model wrapper) has no transform() of its own; the
          // transformable drawing element lives at path.drawingElement.
          if (offsetX !== 0 || offsetY !== 0) {
            (path as any).drawingElement?.transform(
              geometry.transform().translate(offsetX, offsetY)
            );
          }
          group.append(path);
        } else if (line.from && line.to) {
          // Draw straight line
          const straightLine = new Line({
            start: { x: line.from.x + offsetX, y: line.from.y + offsetY },
            end: { x: line.to.x + offsetX, y: line.to.y + offsetY },
            stroke: {
              width: line.stroke?.width || 1,
              color: editorStyle?.strokeColor || line.stroke?.color || "#000",
              dashType: line.stroke?.dashType as any,
            },
          });
          if (line.opacity !== undefined) {
            straightLine.options.opacity = line.opacity;
          }
          group.append(straightLine);
        }
      });
    }

    // 3. Draw all text blocks
    if (definition.textBlocks) {
      definition.textBlocks.forEach((text) => {
        const textBlock = new TextBlock({
          text: text.text,
          x: text.x + offsetX,
          y: text.y + offsetY,
          fill: editorStyle?.strokeColor || text.fill || "#000",
          opacity: text.opacity || 1,
        });

        // Parse font string (e.g., "bold 22px Arial, sans-serif")
        if (text.font) {
          const fontParts = text.font.split(" ");
          let fontSize = 14;
          let fontWeight = "normal";
          let fontFamily = "Arial, sans-serif";

          for (const part of fontParts) {
            if (part.includes("px")) {
              fontSize = parseInt(part);
            } else if (part === "bold" || part === "normal" || part === "italic") {
              fontWeight = part;
            } else if (!part.match(/^\d+px$/) && !["bold", "normal", "italic"].includes(part)) {
              fontFamily = part;
            }
          }

          textBlock.options.fontSize = fontSize;
          textBlock.options.fontWeight = fontWeight;
          textBlock.options.fontFamily = fontFamily;
        }

        if (text.textAnchor) {
          textBlock.options.textAnchor = text.textAnchor;
        }

        group.append(textBlock);
      });
    }
    // Resize the whole rendered visual when Kendo supplies the shape's current
    // width/height. The definition stays at its natural size; only the drawing
    // group is scaled, so a resized compound shape keeps its size when it is
    // redrawn or restored from saved state.
    this.fitGroupToSize(group, targetWidth, targetHeight);

    return group;
  }
  private fitGroupToSize(group: Group, width?: number, height?: number): void {
    const targetWidth = Number(width);
    const targetHeight = Number(height);
    if (!(targetWidth > 0) || !(targetHeight > 0)) {
      return;
    }
    const drawingGroup: any = group.drawingElement;
    const natural = drawingGroup?.bbox?.();
    if (!(natural?.origin && natural?.size && natural.size.width > 0 && natural.size.height > 0)) {
      return;
    }

    let scaleX = targetWidth / natural.size.width;
    let scaleY = targetHeight / natural.size.height;
    // Stroke widths do not scale with the geometry, so one pass lands a pixel
    // or so off. Measure and correct a couple of times so the size is exact and
    // does not drift on every reload.
    for (let pass = 0; pass < 6; pass++) {
      // Matrices apply right-to-left: move the visual to the origin, then scale.
      drawingGroup.transform(
        geometry.transform().scale(scaleX, scaleY).translate(-natural.origin.x, -natural.origin.y)
      );
      const fitted = drawingGroup.bbox?.();
      if (!fitted?.size || fitted.size.width <= 0 || fitted.size.height <= 0) {
        return;
      }
      const errorX = targetWidth / fitted.size.width;
      const errorY = targetHeight / fitted.size.height;
      if (Math.abs(errorX - 1) < 0.0005 && Math.abs(errorY - 1) < 0.0005) {
        return;
      }
      scaleX *= errorX;
      scaleY *= errorY;
    }
    drawingGroup.transform(
      geometry.transform().scale(scaleX, scaleY).translate(-natural.origin.x, -natural.origin.y)
    );
  }
  // Visual template that uses the diagram definition
public visualTemplate = (options: any): Group => {
  const rawItem =
    options?.dataItem?.dataItem ??
    options?.dataItem;

  if (!rawItem) {
    return new Group();
  }
  // While animations run, draw from a copy whose fill reflects the live value.
    const anim = this.activeAnimation(rawItem);
    const dataItem = anim ? this.withAnimationStyle(rawItem, anim) : rawItem;

  
  const visualMap = {
      button3DVisual: 'button3DVisual',
      buttonRaisedVisual: 'buttonRaisedVisual',
      buttonBelevedVisual: 'buttonBelevedVisual',
      buttonRecessedVisual: 'buttonRecessedVisual',
      buttonNoneVisual: 'buttonNoneVisual'
    };

    const method = visualMap[dataItem?.visual];
    if (method) {
      return this[method](options);
    }

  let group: Group;

  if (Array.isArray(dataItem.groupChildren)) {

    group = this.drawGroupedChildren(
      dataItem.groupChildren,
      dataItem.editorStyle,
      0,
      0,
      Number(dataItem.groupOriginalWidth) ||
        Number(dataItem.width) ||
        undefined,
      Number(dataItem.groupOriginalHeight) ||
        Number(dataItem.height) ||
        undefined
     );
    // The children are drawn at their original size inside the original
      // frame; scale the result to the group's current (resized) size.
      this.fitGroupToSize(
        group,
        options?.width ?? dataItem.width,
        options?.height ?? dataItem.height
      );

  } else if (dataItem.libraryKind) {

    group = this.drawLibraryShape(dataItem);

  } else if (dataItem.definition) {

    // ----------------------------------------------------------
    // IMPORTANT:
    // Kendo stores the resized outer shape dimensions in
    // dataItem.width / dataItem.height.
    //
    // The definition itself remains at its natural size.
    // drawDiagramFromDefinition() scales the entire visual
    // to these target dimensions.
    // ----------------------------------------------------------

    

    group = this.drawDiagramFromDefinition(
      dataItem.definition,
      dataItem.offsetX || 0,
      dataItem.offsetY || 0,
      dataItem.editorStyle,
      options?.width ?? dataItem.width,
      options?.height ?? dataItem.height
    );

  } else {

    return new Group();
  }

  this.applyDrawingTransform(
    group,
    dataItem.editorStyle
  );
  if (anim) {
      this.applyAnimationEffects(group, anim);
    }

  return group;
};
// ---------------- Animation engine ----------------

  private activeAnimation(dataItem: any): ShapeAnimation | null {
    const a = dataItem?.animation;
    if (!this.animationRunning || !a || a.type === "none") {
      return null;
    }
    // The value drawn is the "display" value, which follows the polled tag value
    // at the configured change speed (or jumps straight to it when speed is 0).
    const state = this.animState.get(a);
    return { ...this.defaultAnimation(), ...a, value: state ? state.display : a.value };
  }

  private animationRatio(a: ShapeAnimation): number {
    const span = a.max - a.min;
    return span === 0 ? 0 : Math.max(0, Math.min(1, (a.value - a.min) / span));
  }

  private lerpColor(from: string, to: string, t: number): string {
    const parse = (hex: string): number[] => {
      const h = hex.replace("#", "");
      const full = h.length === 3 ? h.split("").map(c => c + c).join("") : h;
      return [0, 2, 4].map(i => parseInt(full.substr(i, 2), 16) || 0);
    };
    const [r1, g1, b1] = parse(from);
    const [r2, g2, b2] = parse(to);
    const mix = (x: number, y: number): string =>
      Math.round(x + (y - x) * t).toString(16).padStart(2, "0");
    return `#${mix(r1, r2)}${mix(g1, g2)}${mix(b1, b2)}`;
  }

  /** Fill colour a colour-type animation wants for the current value. */
  private animationFill(a: ShapeAnimation): string | undefined {
    switch (a.type) {
      case "blink":
        if (a.value === 0) {
          return undefined;
        }
        return Math.floor(Date.now() / Math.max(100, a.speed)) % 2 === 0 ? a.colorA : a.colorB;
      case "discrete":
        return a.value >= a.alarm ? "#e53935" : a.value >= a.warn ? "#fbc02d" : "#43a047";
      case "analog":
        return this.lerpColor(a.colorA, a.colorB, this.animationRatio(a));
      default:
        return undefined;
    }
  }

  private withAnimationStyle(dataItem: any, a: ShapeAnimation): any {
    const style: any = { ...(dataItem.editorStyle || {}) };
    const extra: any = {};
    const on = a.value !== 0;

    switch (a.type) {
      case "lamp": {
        const k = Math.min(1, Math.abs(a.value));
        style.fillColor = k >= 1 ? a.colorA : k <= 0 ? a.colorB : this.lerpColor(a.colorB, a.colorA, k);
        if (k > 0.5) {
          style.strokeColor = "#ffc107";
        }
        break;
      }
      case "alarm":
        if (a.value === 1) {
          style.fillColor = Math.floor(Date.now() / Math.max(100, a.speed)) % 2 === 0 ? a.colorA : "#330000";
        } else if (a.value >= 2) {
          style.fillColor = a.colorA;
        }
        break;
      case "flow":
        if (on) {
          const dash = 10;
          const gap = 6;
          const travelled = (Date.now() / 1000) * Number(a.speed || 0) * (a.value < 0 ? -1 : 1);
          if (!dataItem.dbShape) {
            style.strokeColor = a.colorA;
          }
          // The dashes carry their own colour, so a shape drawn from its database
          // attributes keeps its border colour underneath them.
          extra.animFlow = { dash, gap, color: a.colorA, phase: ((travelled % (dash + gap)) + dash + gap) % (dash + gap) };
        }
        break;
      case "imageSwap": {
        const src = on ? a.imageOn : a.imageOff;
        if (src) {
          extra.source = src;
        }
        break;
      }
      default: {
        const fill = this.animationFill(a);
        if (fill) {
          style.fillColor = fill;
        }
      }
    }
    // Shapes with no fill (lines, buttons, panels) take the animated colour on
    // their own parts, so hand it over as a separate value.
    if (style.fillColor && style.fillColor !== dataItem.editorStyle?.fillColor) {
      extra.animColor = style.fillColor;
    }
    return { ...dataItem, ...extra, editorStyle: style };
  }
  /**
   * Dashes laid along a polyline and shifted by `phase`, so redrawing with a
   * growing phase makes the dashes appear to flow along the line.
   */
  private flowDashData(pts: number[][], flow: { dash: number; gap: number; phase: number }): string {
    const period = flow.dash + flow.gap;
    let data = "";
    let cumulative = 0;
    for (let i = 0; i + 1 < pts.length; i++) {
      const [x1, y1] = pts[i];
      const [x2, y2] = pts[i + 1];
      const len = Math.hypot(x2 - x1, y2 - y1);
      if (len === 0) {
        continue;
      }
      const ux = (x2 - x1) / len;
      const uy = (y2 - y1) / len;
      // Dashes sit where ((distance - phase) mod period) < dash, so a growing
      // phase moves them forward along the line.
      const start = -((((cumulative - flow.phase) % period) + period) % period);
      for (let t = start; t < len; t += period) {
        const from = Math.max(0, t);
        const to = Math.min(len, t + flow.dash);
        if (to > from) {
          data += `M ${x1 + ux * from},${y1 + uy * from} L ${x1 + ux * to},${y1 + uy * to} `;
        }
      }
      cumulative += len;
    }
    return data.trim() || `M ${pts[0][0]},${pts[0][1]} L ${pts[0][0]},${pts[0][1]}`;
  }

  /** Transform / opacity / label effects, applied after the shape is drawn. */
  private applyAnimationEffects(group: Group, a: ShapeAnimation): void {
    const drawing = (group as any).drawingElement;
    const bounds = drawing?.bbox?.();
    if (!drawing || !bounds?.origin || !bounds?.size) {
      return;
    }
    const left = bounds.origin.x;
    const top = bounds.origin.y;
    const w = bounds.size.width;
    const h = bounds.size.height;
    let t: any = null;

    switch (a.type) {
      case "visibility": {
        // Fades with the display value (0 = hidden, 1 = shown).
        const k = a.value === 0 ? 0 : Math.min(1, Math.abs(a.value));
        if (k < 1) {
          drawing.opacity?.(k);
          Array.from(drawing.children || []).forEach((kid: any) => kid.opacity?.(k));
        }
        break;
      }
      case "alarm":
        if (a.value === 0) {
          // Kendo can reset the outer group's opacity when it redraws a shape,
          // so hide the content itself as well.
          drawing.opacity?.(0);
          Array.from(drawing.children || []).forEach((kid: any) => kid.opacity?.(0));
        }
        break;
      case "scale":
      case "move": {
        let moved: any;
        if (a.type === "scale") {
          const ratio = Math.max(0.02, this.animationRatio(a));
          moved = a.axis === "x"
            ? geometry.transform().scale(ratio, 1, [left, top])
            : geometry.transform().scale(1, ratio, [left, top + h]);
        } else {
          const offset = this.animationRatio(a) * a.distance;
          moved = geometry.transform().translate(a.axis === "x" ? offset : 0, a.axis === "y" ? -offset : 0);
        }
        // Kendo stretches a redrawn shape back to its box, which would undo the
        // effect. So the box is held by an invisible frame, and only the shape's
        // own content is scaled or moved.
        const content = Array.from(drawing.children || []) as any[];
        const frame = new Rectangle({
          x: left, y: top, width: w, height: h,
          stroke: { color: "transparent", width: 0 },
          fill: { color: "transparent" }
        });
        frame.options.opacity = 0.001;
        group.append(frame);
        content.forEach(kid => {
          const existing = kid.transform?.();
          kid.transform?.(existing ? moved.multiply(existing) : moved);
        });
        break;
      }
      case "flip": {
        // Turns over smoothly as the display value goes 0 -> 1 (and back).
        const k = Math.min(1, Math.abs(a.value));
        if (k > 0) {
          let f = 1 - 2 * k;
          if (Math.abs(f) < 0.02) {
            f = 0.02;
          }
          t = geometry.transform().scale(a.axis === "x" ? f : 1, a.axis === "y" ? f : 1, [left + w / 2, top + h / 2]);
        }
        break;
      }
      case "heatmap":
        this.applyHeatMap(drawing, a, w * h);
        break;
      case "valueText":
      case "stringText": {
        const text = a.type === "valueText"
          ? `${Math.round(a.value * 100) / 100}${a.unit}`
          : (a.value !== 0 ? a.textOn : a.textOff);
        group.append(new TextBlock({
          text, x: left + 6, y: top + h / 2 - 8, fill: "#000000", fontSize: 14, fontWeight: "bold"
        } as any));
        break;
      }
    }

    if (t) {
      const existing = drawing.transform?.();
      drawing.transform(existing ? t.multiply(existing) : t);
    }
  }
  /**
   * Heat map: the large filled parts of the shape are filled completely with a
   * gradient that starts at the cold colour (bottom, or left) and ends at the
   * colour for the current value, blended only between the chosen Cold and Hot
   * colours. Value 0 is all cold and Max reaches the hot colour.
   */
  private applyHeatMap(drawing: any, a: ShapeAnimation, totalArea: number): void {
    const ratio = this.animationRatio(a);
    // Only the two chosen colours: a straight blend from Cold to Hot.
    const at = (t: number): string => this.lerpColor(a.colorA, a.colorB, t);
    const horizontal = a.axis === "x";
    const stops = Array.from({ length: 9 }, (_, i) => ({
      offset: i / 8,
      color: at(ratio * i / 8),
      opacity: 1
    }));
    const walk = (node: any): void => {
      const colour = node?.options?.get?.("fill.color");
      const box = node?.rawBBox?.();
      if (colour && colour !== "transparent" && colour !== "none" && box?.size
        && typeof node.content !== "function"
        && box.size.width * box.size.height >= totalArea * 0.2) {
        node.options.set("fill", new LinearGradient({
          stops,
          start: horizontal ? [0, 0] : [0, 1],
          end: horizontal ? [1, 0] : [0, 0]
        } as any));
      }
      Array.from(node?.children || []).forEach(walk);
    };
    walk(drawing);
  }

  /** True when the animation must be redrawn every tick (time based). */
  private isContinuousAnimation(a: any): boolean {
    return !!a && ((a.value !== 0 && (a.type === "blink" || a.type === "flow")) || (a.type === "alarm" && a.value === 1));
  }

  public toggleAnimationRun(): void {
    this.animationRunning = !this.animationRunning;
    this.animState = new WeakMap();
    if (this.animationRunning) {
      for (const shape of (this.diagram?.diagramShapes || []) as any[]) {
        const a = this.shapeDataItem(shape)?.animation;
        if (a) {
          const v = this.animTarget(a);
          this.animState.set(a, { sig: JSON.stringify(a), target: v, display: v });
        }
      }
      this.redrawAnimatedShapes(false);
      this.lastAnimTick = performance.now();
      this.animTimer = setInterval(() => this.animationTick(), 60);
      this.restartPollTimer();
      this.startSpinLoop();
      this.statusMessage = `Animation running. Tag values are read every ${this.animationPollMs / 1000} s.`;
    } else {
      this.stopAnimationTimer();
      this.redrawAnimatedShapes(false);
      this.statusMessage = "Animation stopped. Shapes are back to their normal look.";
    }
  }
/**
   * The value an animation glides toward. Visibility, Flip and Lamp are on/off
   * effects (any non-zero value means "on"), so they glide on the 0-1 range;
   * otherwise a toggle to Max = 100 would take 25 s to turn back off at 4/s.
   */
  private animTarget(a: any): number {
    const v = Number(a?.value) || 0;
    return ["visibility", "flip", "lamp"].includes(a?.type) ? Math.min(1, Math.abs(v)) : v;
  }
/** Types whose drawn value follows the tag value at the "change speed". */
  private isEased(type: string): boolean {
    return ["scale", "move", "analog", "heatmap", "discrete", "valueText", "visibility", "flip", "lamp", "rotate"]
      .includes(type);
  }

  /** Shown in the panel for types that glide to a new value at a set speed. */
  public get showChangeSpeed(): boolean {
    return (this.anim.type !== "rotate" && this.isEased(this.anim.type))
      || (this.anim.type === "rotate" && this.anim.rotateMode === "angle");
  }

  private restartPollTimer(): void {
    if (this.animPollTimer !== null) {
      clearInterval(this.animPollTimer);
      this.animPollTimer = null;
    }
    if (this.animationRunning) {
      this.animPollTimer = setInterval(() => this.pollAnimations(), Math.max(100, Number(this.animationPollMs) || 1000));
    }
  }

  public onPollIntervalChange(): void {
    this.restartPollTimer();
    if (this.animationRunning) {
      this.statusMessage = `Tag values are now read every ${this.animationPollMs / 1000} s.`;
    }
  }

  /** Timer: read every shape's tag value; redraw only the ones that changed. */
  private pollAnimations(): void {
    for (const shape of (this.diagram?.diagramShapes || []) as any[]) {
      const a = this.shapeDataItem(shape)?.animation;
      if (!a || a.type === "none") {
        continue;
      }
      const sig = JSON.stringify(a);
      const value = this.animTarget(a);
      const state = this.animState.get(a);
      if (!state) {
        this.animState.set(a, { sig, target: value, display: value });
        this.redrawAnimated(shape);
        continue;
      }
      if (state.sig === sig) {
        continue;
      }
      state.sig = sig;
      state.target = value;
      if (!(this.isEased(a.type) && Number(a.changeSpeed) > 0)) {
        state.display = value;
      }
      this.redrawAnimated(shape);
    }
  }

  /** Move the displayed value toward the target at changeSpeed units/second. */
  private stepDisplay(state: { target: number; display: number }, a: any, dt: number): boolean {
    if (state.display === state.target) {
      return false;
    }
    const speed = Number(a.changeSpeed) || 0;
    if (speed <= 0) {
      state.display = state.target;
      return true;
    }
    const diff = state.target - state.display;
    const step = speed * dt;
    state.display = Math.abs(diff) <= step ? state.target : state.display + Math.sign(diff) * step;
    return true;
  }

  /** Fast tick: glide values toward their targets and redraw time-based types. */
  private animationTick(): void {
    const now = performance.now();
    const dt = Math.min(0.25, (now - this.lastAnimTick) / 1000);
    this.lastAnimTick = now;
    for (const shape of (this.diagram?.diagramShapes || []) as any[]) {
      const a = this.shapeDataItem(shape)?.animation;
      if (!a || a.type === "none") {
        continue;
      }
      const state = this.animState.get(a);
      let redraw = false;
      if (state && a.type !== "rotate" && this.isEased(a.type) && Number(a.changeSpeed) > 0) {
        redraw = this.stepDisplay(state, a, dt);
      }
      if (this.isContinuousAnimation({ ...a, value: state ? state.display : a.value })) {
        redraw = true;
      }
      if (redraw) {
        this.redrawAnimated(shape);
      }
    }
  }

  private spinFrame: number | null = null;

  /**
   * Rotation runs per animation frame by turning the already-drawn visual
   * (no redraw), so it is smooth and pivots where the user chose. Two modes:
   * continuous spin (speed in degrees/second) or an angle that follows the
   * value (so it can be used as a clock hand). A redrawn visual is a new
   * object, so the cached bounds reset by themselves.
   */
  private startSpinLoop(): void {
    if (typeof window === "undefined" || this.spinFrame !== null) {
      return;
    }
    let last = performance.now();
    const step = (): void => {
      if (!this.animationRunning) {
        this.spinFrame = null;
        return;
      }
      const now = performance.now();
      const dt = Math.min(0.25, (now - last) / 1000);
      last = now;
      for (const shape of (this.diagram?.diagramShapes || []) as any[]) {
        const a = this.shapeDataItem(shape)?.animation;
        if (!a || a.type !== "rotate") {
          continue;
        }
        const drawing = shape?.visual?.drawingElement ?? shape?.visual;
        const kids: any[] = drawing?.children ? Array.from(drawing.children) : [];
        if (!kids.length) {
          continue;
        }
        // Turn the shape's CONTENT, not the shape's own transform: Kendo moves
        // and resizes a shape through that outer transform. Kendo also reuses
        // the shape's group when it redraws, so key the cache to the current
        // child objects; new children mean fresh bounds.
        const cached = drawing.__spin;
        if (cached && (cached.kids.length !== kids.length || kids.some((kid, i) => kid !== cached.kids[i]))) {
          drawing.__spin = undefined;
        }
        if (!drawing.__spin) {
          // The content's visible box (bbox() is in canvas space), mapped back
          // into the group's own space, where the turn is applied.
          let minX = Infinity, minY = Infinity, maxX = -Infinity, maxY = -Infinity;
          for (const kid of kids) {
            const box = kid.bbox?.();
            if (!box?.origin || !box?.size) {
              continue;
            }
            minX = Math.min(minX, box.origin.x);
            minY = Math.min(minY, box.origin.y);
            maxX = Math.max(maxX, box.origin.x + box.size.width);
            maxY = Math.max(maxY, box.origin.y + box.size.height);
          }
          if (!Number.isFinite(minX)) {
            continue;
          }
          const cm = drawing.currentTransform?.()?.matrix?.() ?? drawing.transform?.()?.matrix?.();
          if (cm && typeof cm.a === "number") {
            const det = cm.a * cm.d - cm.b * cm.c;
            if (Math.abs(det) > 1e-9) {
              const toLocal = (px: number, py: number): number[] => [
                (cm.d * (px - cm.e) - cm.c * (py - cm.f)) / det,
                (-cm.b * (px - cm.e) + cm.a * (py - cm.f)) / det
              ];
              const p1 = toLocal(minX, minY);
              const p2 = toLocal(maxX, maxY);
              minX = Math.min(p1[0], p2[0]);
              maxX = Math.max(p1[0], p2[0]);
              minY = Math.min(p1[1], p2[1]);
              maxY = Math.max(p1[1], p2[1]);
            }
          }
          drawing.__spin = { kids, minX, minY, maxX, maxY, bases: kids.map(kid => kid.transform?.() || null) };
        }
        const spin = drawing.__spin;
        const state = this.animState.get(a);
        if (state && a.rotateMode === "angle") {
          this.stepDisplay(state, a, dt);
        }
        const value = state ? state.display : Number(a.value) || 0;
        let angle: number;
        if (a.rotateMode === "angle") {
          const span = (Number(a.max) || 0) - (Number(a.min) || 0);
          const ratio = span === 0 ? 0 : Math.max(0, Math.min(1, (value - a.min) / span));
          angle = ratio * (Number(a.sweep) || 360);
        } else {
          angle = value !== 0 ? ((Date.now() / 1000) * Number(a.speed || 0)) % 360 : 0;
        }
        const midX = (spin.minX + spin.maxX) / 2;
        const midY = (spin.minY + spin.maxY) / 2;
        const pivot = a.pivot === "bottom" ? [midX, spin.maxY]
          : a.pivot === "top" ? [midX, spin.minY]
          : a.pivot === "left" ? [spin.minX, midY]
          : a.pivot === "right" ? [spin.maxX, midY]
          : [midX, midY];
        const turn = geometry.transform().rotate(angle, pivot);
        kids.forEach((kid, i) => {
          const base = spin.bases[i];
          kid.transform?.(base ? turn.multiply(base) : turn);
        });
      }
      this.spinFrame = requestAnimationFrame(step);
    };
    this.spinFrame = requestAnimationFrame(step);
  }

  private stopAnimationTimer(): void {
    if (this.spinFrame !== null && typeof window !== "undefined") {
      cancelAnimationFrame(this.spinFrame);
      this.spinFrame = null;
    }
    if (this.animTimer !== null) {
      clearInterval(this.animTimer);
      this.animTimer = null;
    }
    if (this.animPollTimer !== null) {
      clearInterval(this.animPollTimer);
      this.animPollTimer = null;
    }
  }

  private redrawAnimatedShapes(continuousOnly: boolean): void {
    for (const shape of (this.diagram?.diagramShapes || []) as any[]) {
      const a = this.shapeDataItem(shape)?.animation;
      if (!a || a.type === "none") {
        continue;
      }
      if (continuousOnly && !this.isContinuousAnimation(a)) {
        continue;
      }
      this.redrawAnimated(shape);
    }
  }
  



  /** Redraw one shape while keeping its bounds/rotation, without persisting. */
  private redrawAnimated(shape: any): void {
    const bounds = typeof shape?.bounds === "function" ? shape.bounds() : null;
    const rotation = this.readRotation(shape);
    if (typeof shape.redrawVisual === "function") {
      shape.redrawVisual();
    } else if (typeof shape.refresh === "function") {
      shape.refresh();
    }
    if (bounds) {
      shape.bounds(bounds);
    }
    if (rotation && typeof shape.rotate === "function") {
      shape.rotate(rotation);
    }
    shape.refreshConnections?.();
  }

  /** Picking a type resets Speed to a sensible default for that type. */
public onAnimationTypeChange(): void {
    // Each type starts from its own sensible colours and speed, so choosing a
    // type never inherits the colours of the previously chosen one.
    const defaults = this.defaultAnimation();
    this.anim.colorA = defaults.colorA;
    this.anim.colorB = defaults.colorB;
    this.anim.axis = defaults.axis;
    this.anim.changeSpeed = 0;
    this.anim.rotateMode = "spin";
    this.anim.sweep = 360;
    this.anim.pivot = "center";
    switch (this.anim.type) {
      case "rotate":
        this.anim.speed = 90;
        break;
      case "blink":
        this.anim.speed = 500;
        this.anim.colorA = "#e53935";
        this.anim.colorB = "#1e88e5";
        break;
      case "analog":
        this.anim.colorA = "#1e88e5";
        this.anim.colorB = "#e53935";
        this.anim.changeSpeed = 50;
        break;
      case "alarm":
        this.anim.speed = 250;
        this.anim.colorA = "#e53935";
        break;
      case "flow":
        this.anim.speed = 60;
        this.anim.colorA = "#1e88e5";
        break;
      case "lamp":
        this.anim.colorA = "#ffeb3b";
        this.anim.colorB = "#424242";
        this.anim.changeSpeed = 4;
        break;
      case "flip":
        this.anim.axis = "x";
        this.anim.changeSpeed = 4;
        break;
      case "visibility":
        this.anim.changeSpeed = 4;
        break;
      case "heatmap":
        this.anim.colorA = "#1e88e5";
        this.anim.colorB = "#e53935";
        this.anim.changeSpeed = 50;
        break;
      case "scale":
      case "move":
      case "discrete":
      case "valueText":
        this.anim.changeSpeed = 50;
        break;
    }
    this.applyAnimation();
  }

  /** Save the Animation panel settings on every selected shape. */
public applyAnimation(): void {
    const shapes = this.selectedShapes();
    if (!shapes.length) {
      this.statusMessage = "Select a shape first, then choose its animation.";
      return;
    }
    const config = this.clonePlain(this.anim);
    for (const shape of shapes) {
      const dataItem = this.shapeDataItem(shape);
      if (!dataItem) {
        continue;
      }
      // Update in place so the shape keeps its running state (the polling timer
      // notices the change and redraws on its next tick).
      dataItem.animation = Object.assign(dataItem.animation ?? {}, this.clonePlain(config));
      const model = this.modelForShape(shape);
      if (model) {
        model.dataItem ??= {};
        const modelData = model.dataItem?.dataItem ?? model.dataItem;
        modelData.animation = this.clonePlain(config);
      }
    }
    this.schedulePersistState();
    const label = this.animationTypes.find(t => t.id === config.type)?.label || config.type;
    this.statusMessage = config.type === "none"
      ? "Animation removed from the selected shape(s)."
      : this.animationRunning
        ? `Animation "${label}" saved. It is applied at the next update (every ${this.animationPollMs / 1000} s).`
        : `Animation "${label}" saved. Press Run Animation to preview it.`;
  }
public onStagePointerDown(event: PointerEvent): void {
    this.stagePointerStart = { x: event.clientX, y: event.clientY };
  }

  /** While running, clicking a shape with "toggle on click" flips its value. */
  public onStageClick(event: MouseEvent): void {
    if (!this.animationRunning || !this.diagram) {
      return;
    }
    const start = this.stagePointerStart;
    if (start && Math.hypot(event.clientX - start.x, event.clientY - start.y) > 4) {
      return;
    }
    const point = this.pointerToModel(event as any);
    if (!point) {
      return;
    }
    const hit = [...(this.diagram.diagramShapes as any[])].reverse().find(shape => {
      const b = shape.bounds();
      return point.x >= b.x && point.x <= b.x + b.width && point.y >= b.y && point.y <= b.y + b.height;
    });
    const hitData = hit ? this.shapeDataItem(hit) : null;
    if (hit && hitData?.libraryKind === "controlList") {
      // Operator mode: clicking a row of a Control List selects it.
      const b = hit.bounds();
      const count = this.listRows(hitData).length;
      const rowH = (b.height - 18) / count;
      const row = Math.max(0, Math.min(count - 1, Math.floor((point.y - (b.y + 9)) / rowH)));
      this.applyListPatchTo(hit, row);
      if (this.selectedShapes().includes(hit)) {
        this.selectedListIndex = row;
      }
      return;
    }
    const a = hit ? this.shapeDataItem(hit)?.animation : null;
    if (!a?.clickToggle) {
      return;
    }
    a.value = (Number(a.value) || 0) !== 0 ? 0 : (Number(a.max) || 1);
    const model = this.modelForShape(hit);
    const modelData = model?.dataItem?.dataItem ?? model?.dataItem;
    if (modelData?.animation) {
      modelData.animation.value = a.value;
    }
    if (this.selectedShapes().includes(hit)) {
      this.anim.value = a.value;
    }
    this.schedulePersistState();
  }
  // ================================================================
  // Drawing from database attributes (dbShape): surface, pattern, border,
  // line style and the per-shape drawing, using the same helpers as the button.
  // ================================================================

  private dbKey(value: any): string {
    return String(value ?? "").toLowerCase().replace(/[\s_-]/g, "");
  }

  private dbDash(lineStyle: any): string | undefined {
    switch (this.dbKey(lineStyle)) {
      case "dash": return "dash";
      case "dot": return "dot";
      case "dashdot": return "dashDot";
      case "dashdotdot": return "longDashDotDot";
      default: return undefined;
    }
  }

  private bevelColors(base: string): { light: string; dark: string } {
    const hex = this.normalizeColor(base, "#808080");
    return { light: this.lighten(hex, 0.45), dark: this.darken(hex, 0.45) };
  }

  /** Back style "Transparent" draws no fill. */
  private dbTransparent(d: any): boolean {
    return this.dbKey(d.backStyle) === "transparent";
  }

  private dbBorderWidth(d: any, w: number, h: number): number {
    const bw = Number(d.borderWidth) || 0;
    return Math.max(0, Math.min(bw, Math.min(w, h) / 3));
  }

  /** Colour the border is built from: the back colour, or the border colour. */
  private dbBorderBase(d: any, fillColor: string): string {
    return d.borderUsesBackColor && !this.dbTransparent(d)
      ? this.normalizeColor(fillColor, "#808080")
      : this.normalizeColor(d.borderColor, "#000000");
  }

  /**
   * Border of a rectangle. Raised / Sunken / RaisedInset / InsetRaised are
   * two-tone bevels (light and dark shades of the base colour); Solid is a plain
   * line; None draws nothing.
   */
  private drawDbBorder(group: Group, x: number, y: number, w: number, h: number, radius: number,
                       styleName: any, width: number, base: string): void {
    const kind = this.dbKey(styleName);
    if (width <= 0 || kind === "none") {
      return;
    }
    const { light, dark } = this.bevelColors(base);
    const polygon = (pts: number[][], color: string): void => {
      group.append(new Path({
        data: `M ${pts.map(pt => pt.join(",")).join(" L ")} Z`,
        stroke: { color, width: 0 },
        fill: { color }
      }));
    };
    const bevel = (inset: number, bw: number, topLeft: string, bottomRight: string): void => {
      const x0 = x + inset, y0 = y + inset, x1 = x + w - inset, y1 = y + h - inset;
      polygon([[x0, y0], [x1, y0], [x1 - bw, y0 + bw], [x0 + bw, y0 + bw]], topLeft);
      polygon([[x0, y0], [x0 + bw, y0 + bw], [x0 + bw, y1 - bw], [x0, y1]], topLeft);
      polygon([[x0, y1], [x0 + bw, y1 - bw], [x1 - bw, y1 - bw], [x1, y1]], bottomRight);
      polygon([[x1, y0], [x1, y1], [x1 - bw, y1 - bw], [x1 - bw, y0 + bw]], bottomRight);
    };
    const ring = (color: string): void => {
      group.append(new Rectangle({
        x: x + width / 2, y: y + width / 2, width: Math.max(1, w - width), height: Math.max(1, h - width),
        cornerRadius: Math.max(0, radius - width / 2),
        stroke: { color, width },
        fill: { color: "transparent" }
      }));
    };
    if (radius > 0) {
      // Rounded corners cannot be bevelled with straight edges: one dark ring.
      ring(kind === "solid" ? base : dark);
      return;
    }
    switch (kind) {
      case "raised": bevel(0, width, light, dark); break;
      case "sunken": case "inset": case "lowered": bevel(0, width, dark, light); break;
      case "raisedinset": bevel(0, width / 2, light, dark); bevel(width / 2, width / 2, dark, light); break;
      case "insetraised": case "sunkenraised": bevel(0, width / 2, dark, light); bevel(width / 2, width / 2, light, dark); break;
      default: ring(base);
    }
  }

  /** Border of an ellipse: light/dark half rings (bevel) or one ring. */
  private drawDbEllipseBorder(group: Group, x: number, y: number, w: number, h: number,
                              styleName: any, width: number, base: string): void {
    const kind = this.dbKey(styleName);
    if (width <= 0 || kind === "none") {
      return;
    }
    const { light, dark } = this.bevelColors(base);
    const rx = Math.max(1, w / 2 - width / 2);
    const ry = Math.max(1, h / 2 - width / 2);
    const cx = x + w / 2, cy = y + h / 2;
    const at = (deg: number): string => {
      const a = (deg * Math.PI) / 180;
      return `${cx + rx * Math.cos(a)},${cy - ry * Math.sin(a)}`;
    };
    const half = (from: number, to: number, color: string): void => {
      group.append(new Path({
        data: `M ${at(from)} A ${rx},${ry} 0 0 0 ${at(to)}`,
        stroke: { color, width }, fill: { color: "transparent" }
      }));
    };
    if (kind === "solid") {
      group.append(new Path({
        data: `M ${cx - rx},${cy} A ${rx},${ry} 0 1 0 ${cx + rx},${cy} A ${rx},${ry} 0 1 0 ${cx - rx},${cy} Z`,
        stroke: { color: base, width }, fill: { color: "transparent" }
      }));
      return;
    }
    const sunken = kind === "sunken" || kind === "inset" || kind === "lowered";
    half(45, 225, sunken ? dark : light);
    half(225, 405, sunken ? light : dark);
  }

  /**
   * Pattern (drawPattern) laid over a shape. For non-rectangular shapes the
   * pattern is drawn in its own group that is clipped to the outline.
   */
  private drawDbPattern(group: Group, d: any, x: number, y: number, w: number, h: number,
                        radius: number, clip?: number[][]): void {
    if (this.dbKey(d.patternStyle) === "" || this.dbKey(d.patternStyle) === "none") {
      return;
    }
    if (!clip) {
      this.drawPattern(group, d, x, y, w, h, radius);
      return;
    }
    const sub = new Group();
    this.drawPattern(sub, d, x, y, w, h, radius);
    const outline = new DrawPath();
    clip.forEach((pt, i) => (i === 0 ? outline.moveTo(pt[0], pt[1]) : outline.lineTo(pt[0], pt[1])));
    outline.close();
    (sub as any).drawingElement?.clip?.(outline);
    group.append(sub);
  }

  /** Face, pattern and border of a rectangular panel. Returns the border width. */
  private drawDbPanel(group: Group, x: number, y: number, w: number, h: number, radius: number,
                      d: any, fillColor: string, borderOverride?: string): number {
    const bw = this.dbBorderWidth(d, w, h);
    if (!this.dbTransparent(d)) {
      group.append(new Rectangle({
        x, y, width: w, height: h, cornerRadius: radius,
        stroke: { color: fillColor, width: 0 },
        fill: { color: fillColor }
      }));
    }
    this.drawDbPattern(group, d, x + bw, y + bw, Math.max(1, w - 2 * bw), Math.max(1, h - 2 * bw), radius);
    this.drawDbBorder(group, x, y, w, h, radius, d.borderStyle, bw, borderOverride ?? this.dbBorderBase(d, fillColor));
    return bw;
  }

  /** Points of a closed/open shape drawn with the polygon / polyline / freehand tool. */
  private dbPoints(kind: string, d: any, x: number, y: number, w: number, h: number): number[][] | null {
    const pts = Array.isArray(d.points) ? d.points : [];
    if (kind === "freehand" && pts.length >= 2) {
      const extX = Math.max(...pts.map((pt: any) => Number(pt.x)));
      const extY = Math.max(...pts.map((pt: any) => Number(pt.y)));
      const sx = extX > 0 ? w / extX : 1;
      const sy = extY > 0 ? h / extY : 1;
      return pts.map((pt: any) => [x + Number(pt.x) * sx, y + Number(pt.y) * sy]);
    }
    if ((kind === "polygon" && pts.length >= 3) || (kind === "polyline" && pts.length >= 2)) {
      const ref = d.pointRef;
      const extX = ref?.w > 0 ? ref.w : Math.max(...pts.map((pt: any) => Number(pt.x)));
      const extY = ref?.h > 0 ? ref.h : Math.max(...pts.map((pt: any) => Number(pt.y)));
      const sx = extX > 0 ? w / extX : 1;
      const sy = extY > 0 ? h / extY : 1;
      return pts.map((pt: any) => [x + Number(pt.x) * sx, y + Number(pt.y) * sy]);
    }
    if (kind === "polygon") {
      return [[x + w / 2, y], [x + w, y + h * 0.38], [x + w * 0.82, y + h], [x + w * 0.18, y + h], [x, y + h * 0.38]];
    }
    if (kind === "polyline") {
      return [[x, y + h], [x + w * 0.28, y + h * 0.08], [x + w * 0.56, y + h * 0.88], [x + w, y]];
    }
    return null;
  }

  /** Level (0-1) from containerValue between the graph minimum and maximum. */
  private dbLevelRatio(d: any): number {
    const min = Number.isFinite(Number(d.graphMinimum)) ? Number(d.graphMinimum) : 0;
    const max = Number(d.containerMax) > 0 ? Number(d.containerMax) : (Number.isFinite(Number(d.graphMaximum)) ? Number(d.graphMaximum) : 100);
    const value = Number.isFinite(Number(d.containerValue)) ? Number(d.containerValue) : min;
    return max === min ? 0 : Math.max(0, Math.min(1, (value - min) / (max - min)));
  }

  /** Colour of a bar / gauge fill, switching at the thresholds when there are any. */
  private dbGraphColor(d: any): string {
    const min = Number.isFinite(Number(d.graphMinimum)) ? Number(d.graphMinimum) : 0;
    const max = Number(d.containerMax) > 0 ? Number(d.containerMax) : (Number.isFinite(Number(d.graphMaximum)) ? Number(d.graphMaximum) : 100);
    const value = Number.isFinite(Number(d.containerValue)) ? Number(d.containerValue) : min;
    const percent = this.dbKey(d.thresholdType) === "percent";
    const level = percent ? (max === min ? 0 : ((value - min) / (max - min)) * 100) : value;
    const count = Number(d.thresholdCount) || 0;
    let color = this.normalizeColor(d.graphFillColor, "#00008b");
    if (count >= 1 && level >= Number(d.threshold1)) {
      color = this.normalizeColor(d.thresholdColor1, color);
    }
    if (count >= 2 && level >= Number(d.threshold2)) {
      color = this.normalizeColor(d.thresholdColor2, color);
    }
    return color;
  }

  private dbFormat(value: number, digits: number): string {
    return Number(value).toFixed(Math.max(0, Math.min(6, digits || 0)));
  }

  /**
   * Draws one shape from its database attributes. Returns false for kinds that
   * have none (they use the older drawing).
   */
  private drawDbShape(kind: string, group: Group, x: number, y: number, w: number, h: number,
                      d: any, style: ShapeEditorStyle): boolean {
    const fillColor = this.normalizeColor(style.fillColor || d.fillColor, "#3a753a");
    const strokeOverride = style.strokeColor;
    // Appearance "Color" (or a Flow animation colour) becomes the border colour.
    const borderOverride = strokeOverride ? this.normalizeColor(strokeOverride, "#000000") : undefined;
    const flow = d.animFlow;
    const dash = this.dbDash(d.lineStyle);

    const lineStroke = (width?: number): any => ({
      color: d.animColor || strokeOverride || d.foreColor || d.strokeColor || "#000000",
      width: width ?? Math.max(1, Number(d.lineWidth) || 1),
      ...(dash ? { dashType: dash } : {})
    });
    const frame = (): void => {
      const f = new Rectangle({
        x, y, width: w, height: h,
        stroke: { color: "transparent", width: 0 },
        fill: { color: "transparent" }
      });
      f.options.opacity = 0.001;
      group.append(f);
    };
    const dashes = (pts: number[][], width: number): void => {
      group.append(new Path({
        data: this.flowDashData(pts, flow),
        stroke: { color: flow?.color || strokeOverride || d.foreColor || "#000000", width },
        fill: { color: "transparent" }
      }));
    };

    switch (kind) {
      // ---------------- surfaces ----------------
      case "rectangle":
      case "roundedRectangle": {
        const radius = kind === "roundedRectangle" ? Math.min(22, h / 2) : 0;
        this.drawDbPanel(group, x, y, w, h, radius, d, fillColor, borderOverride);
        if (flow) {
          dashes([[x, y], [x + w, y], [x + w, y + h], [x, y + h], [x, y]], 3);
        }
        return true;
      }
      case "ellipse": {
        const bw = this.dbBorderWidth(d, w, h);
        const rx = w / 2, ry = h / 2, cx = x + rx, cy = y + ry;
        const outline: number[][] = [];
        for (let i = 0; i < 72; i++) {
          const t = (i / 72) * Math.PI * 2;
          outline.push([cx + rx * Math.cos(t), cy + ry * Math.sin(t)]);
        }
        if (!this.dbTransparent(d)) {
          group.append(new Path({
            data: `M ${cx - rx},${cy} A ${rx},${ry} 0 1 0 ${cx + rx},${cy} A ${rx},${ry} 0 1 0 ${cx - rx},${cy} Z`,
            stroke: { color: fillColor, width: 0 },
            fill: { color: fillColor }
          }));
        }
        this.drawDbPattern(group, d, x, y, w, h, 0, outline);
        this.drawDbEllipseBorder(group, x, y, w, h, d.borderStyle, bw, borderOverride ?? this.dbBorderBase(d, fillColor));
        if (flow) {
          dashes([...outline, outline[0]], 3);
        }
        return true;
      }
      case "polygon": {
        const pts = this.dbPoints("polygon", d, x, y, w, h) as number[][];
        const bw = Math.max(0, Number(d.borderWidth) || 0);
        const data = `M ${pts.map(pt => pt.join(",")).join(" L ")} Z`;
        if (!this.dbTransparent(d)) {
          group.append(new Path({ data, stroke: { color: fillColor, width: 0 }, fill: { color: fillColor } }));
        }
        this.drawDbPattern(group, d, x, y, w, h, 0, pts);
        if (bw > 0 && this.dbKey(d.borderStyle) !== "none") {
          const { dark } = this.bevelColors(this.dbBorderBase(d, fillColor));
          group.append(new Path({
            data,
            stroke: { color: strokeOverride || (this.dbKey(d.borderStyle) === "solid" ? this.dbBorderBase(d, fillColor) : dark), width: bw },
            fill: { color: "transparent" }
          }));
        }
        if (flow) {
          dashes([...pts, pts[0]], 3);
        }
        return true;
      }

      // ---------------- lines ----------------
      case "line": {
        const start = d.lineStart, end = d.lineEnd;
        let pts: number[][];
        if (start && end) {
          frame();
          pts = [[x + Number(start.x) * w, y + Number(start.y) * h], [x + Number(end.x) * w, y + Number(end.y) * h]];
        } else {
          pts = [[x + 5, y + h / 2], [x + w - 5, y + h / 2]];
        }
        if (flow) {
          dashes(pts, 4);
        } else {
          group.append(new Path({ data: `M ${pts[0].join(",")} L ${pts[1].join(",")}`, stroke: lineStroke(), fill: { color: "transparent" } }));
        }
        return true;
      }
      case "arc": {
        const peak = `M ${x},${y + h} Q ${x + w / 2},${y - h} ${x + w},${y + h}`;
        if (flow) {
          const pts: number[][] = [];
          for (let i = 0; i <= 48; i++) {
            const t = i / 48, u = 1 - t;
            pts.push([u * u * x + 2 * u * t * (x + w / 2) + t * t * (x + w), u * u * (y + h) + 2 * u * t * (y - h) + t * t * (y + h)]);
          }
          dashes(pts, 4);
        } else {
          group.append(new Path({ data: peak, stroke: lineStroke(), fill: { color: "transparent" } }));
        }
        return true;
      }
      case "polyline":
      case "freehand": {
        const pts = this.dbPoints(kind, d, x, y, w, h);
        if (!pts) {
          return false;
        }
        if (flow) {
          dashes(pts, 4);
        } else {
          group.append(new Path({
            data: `M ${pts.map(pt => pt.join(",")).join(" L ")}`,
            stroke: lineStroke(), fill: { color: "transparent" }
          }));
        }
        return true;
      }

      // ---------------- text ----------------
      case "text": {
        const fontSize = Math.max(6, Number(d.fontSize) || 10);
        const fontFamily = this.dbText(d.fontFamily, "Arial");
        // A transparent text has no outline of its own, so keep the box with an
        // invisible frame (otherwise Kendo resizes the shape to the text's box).
        frame();
        if (!this.dbTransparent(d)) {
          group.append(new Rectangle({
            x, y, width: w, height: h, cornerRadius: 0,
            stroke: { color: fillColor, width: 0 }, fill: { color: fillColor }
          }));
        }
        const align = this.dbText(d.alignment, "MM").toUpperCase();
        const vertical = align[0] === "T" ? "top" : align[0] === "B" ? "bottom" : "middle";
        const horizontal = align[1] === "L" ? "left" : align[1] === "R" ? "right" : "middle";
        const tx = horizontal === "left" ? x + 4 : horizontal === "right" ? x + w - 4 : x + w / 2;
        const ty = vertical === "top" ? y + 3 : vertical === "bottom" ? y + h - fontSize - 4 : y + (h - fontSize) / 2 - 1;
        const label = new TextBlock({
          text: String(d.text || "Text"), x: tx, y: ty,
          fill: d.animColor || strokeOverride || d.textColor || "#000000", fontSize, fontFamily,
          fontWeight: d.fontWeight || "normal"
        } as any);
        (label.options as any).textAnchor = horizontal === "left" ? "start" : horizontal === "right" ? "end" : "middle";
        group.append(label);
        return true;
      }
      case "tagLabel": {
        const frameRect = new Rectangle({
          x, y, width: w, height: h,
          stroke: { color: "transparent", width: 0 }, fill: { color: "transparent" }
        });
        frameRect.options.opacity = 0.001;
        group.append(frameRect);
        const colour = d.animColor || strokeOverride || "#444444";
        const text = String(d.labelText ?? "").trim();
        const justify = this.dbKey(d.labelJustification);
        const marks = Math.max(1, Number(d.labelFieldLength) || 10);
        if (text) {
          const fontSize = Number(d.fontSize) > 0 ? Number(d.fontSize) : Math.max(10, Math.round(h * 0.7));
          const fontFamily = this.dbText(d.fontFamily, "Arial, sans-serif");
          const tx = justify === "right" ? x + w - 2 : justify === "center" ? x + w / 2 : x + 2;
          const label = new TextBlock({
            text, x: tx, y: y + Math.max(0, (h - fontSize) / 2 - 2),
            fill: colour, fontSize, fontFamily
          } as any);
          (label.options as any).textAnchor = justify === "right" ? "end" : justify === "center" ? "middle" : "start";
          group.append(label);
        } else {
          // Field-length placeholder: one mark per character of the field.
          const slot = Math.min(w / marks, 18);
          const used = slot * marks;
          const start = justify === "right" ? x + w - used : justify === "center" ? x + (w - used) / 2 : x;
          for (let i = 0; i < marks; i++) {
            const gx = start + i * slot + slot * 0.1;
            group.append(new Path({
              data: `M ${gx},${y + h * 0.15} L ${gx},${y + h * 0.9} L ${gx + slot * 0.6},${y + h * 0.9}`,
              stroke: { color: colour, width: 1.5 }, fill: { color: "transparent" }
            }));
          }
        }
        return true;
      }

      // ---------------- graphs ----------------
      case "barGraph": {
        const bw = this.drawDbPanel(group, x, y, w, h, 0, d, fillColor, borderOverride);
        const ratio = this.dbLevelRatio(d);
        const bx = x + bw, by = y + bw, bwid = Math.max(1, w - 2 * bw), bhei = Math.max(1, h - 2 * bw);
        const dir = this.dbKey(d.fillDirection);
        const barColor = this.dbGraphColor(d);
        let rect: number[] | null = null;
        if (ratio > 0) {
          if (dir === "toptobottom") rect = [bx, by, bwid, bhei * ratio];
          else if (dir === "lefttoright") rect = [bx, by, bwid * ratio, bhei];
          else if (dir === "righttoleft") rect = [bx + bwid * (1 - ratio), by, bwid * ratio, bhei];
          else rect = [bx, by + bhei * (1 - ratio), bwid, bhei * ratio];
        }
        if (rect) {
          group.append(new Rectangle({
            x: rect[0], y: rect[1], width: rect[2], height: rect[3],
            stroke: { color: barColor, width: 0 }, fill: { color: barColor }
          }));
        }
        return true;
      }
      case "gauge": {
        const bw = this.drawDbPanel(group, x, y, w, h, 0, d, fillColor, borderOverride);
        const cx = x + w / 2, cy = y + h * 0.68;
        const r = Math.min(w * 0.22, h * 0.4, (w - 2 * bw) / 2 - 14);
        const ink = d.foreColor || "#000000";
        const thin = { color: ink, width: Math.max(1, Number(d.lineWidth) || 1) };
        const ratio = this.dbLevelRatio(d);
        const min = Number.isFinite(Number(d.graphMinimum)) ? Number(d.graphMinimum) : 0;
        const max = Number(d.containerMax) > 0 ? Number(d.containerMax) : (Number(d.graphMaximum) || 100);
        const digits = Number(d.digitsAfterDecimal) || 0;
        const point = (deg: number, radius: number): string => {
          const a = (deg * Math.PI) / 180;
          return `${cx + radius * Math.cos(a)},${cy - radius * Math.sin(a)}`;
        };
        // Filled sweep up to the value (Sweep style other than Point).
        if (this.dbKey(d.sweepStyle) !== "point" && ratio > 0) {
          const end = 180 - 180 * ratio;
          group.append(new Path({
            data: `M ${cx},${cy} L ${point(180, r)} A ${r},${r} 0 0 1 ${point(end, r)} Z`,
            stroke: { color: "transparent", width: 0 }, fill: { color: this.dbGraphColor(d) }
          }));
        }
        group.append(new Path({
          data: `M ${point(180, r)} A ${r},${r} 0 0 1 ${point(0, r)}`,
          stroke: thin, fill: { color: "transparent" }
        }));
        // Threshold bands along the dial.
        const count = Number(d.thresholdCount) || 0;
        if (count >= 1) {
          const toDeg = (value: number): number => 180 - 180 * (max === min ? 0 : Math.max(0, Math.min(1, (value - min) / (max - min))));
          const bands: Array<[number, number, string]> = [];
          const t1 = Number(d.threshold1), t2 = Number(d.threshold2);
          bands.push([min, t1, this.normalizeColor(d.graphFillColor, "#00008b")]);
          bands.push([t1, count >= 2 ? t2 : max, this.normalizeColor(d.thresholdColor1, "#ffea00")]);
          if (count >= 2) {
            bands.push([t2, max, this.normalizeColor(d.thresholdColor2, "#d70040")]);
          }
          bands.forEach(([from, to, color]) => {
            const a0 = toDeg(from), a1 = toDeg(to);
            if (a0 > a1) {
              group.append(new Path({
                data: `M ${point(a0, r + 3)} A ${r + 3},${r + 3} 0 0 1 ${point(a1, r + 3)}`,
                stroke: { color, width: 3 }, fill: { color: "transparent" }
              }));
            }
          });
        }
        // Ticks: majors every 1/majorTicks of the sweep, minors between them when there is room.
        const majors = Math.max(1, Math.min(20, Number(d.majorTicks) || 10));
        const minors = Math.max(1, Number(d.minorTicks) || 5);
        const majorStep = 180 / majors;
        const minorStep = majorStep / minors;
        const drawMinor = (r * Math.PI * minorStep) / 180 >= 3;
        for (let i = 0; i <= majors; i++) {
          const deg = 180 - i * majorStep;
          group.append(new Path({ data: `M ${point(deg, r)} L ${point(deg, r * 0.78)}`, stroke: thin, fill: { color: "transparent" } }));
          if (drawMinor && i < majors) {
            for (let j = 1; j < minors; j++) {
              const mdeg = deg - j * minorStep;
              group.append(new Path({ data: `M ${point(mdeg, r)} L ${point(mdeg, r * 0.9)}`, stroke: thin, fill: { color: "transparent" } }));
            }
          }
        }
        const fontSize = Math.max(8, Math.min(Number(d.fontSize) || 12, 12));
        const label = (text: string, lx: number, ly: number): void => {
          const t = new TextBlock({ text, x: lx, y: ly, fill: ink, fontSize, fontFamily: this.dbText(d.fontFamily, "Arial") } as any);
          (t.options as any).textAnchor = "middle";
          group.append(t);
        };
        label(this.dbFormat(min, digits), cx - r - 8, cy - 7);
        label(this.dbFormat((min + max) / 2, digits), cx, cy - r - fontSize - 6);
        label(this.dbFormat(max, digits), cx + r + 14, cy - 7);
        const theta = Math.PI * (1 - ratio);
        const len = r * 0.85;
        group.append(new Path({
          data: `M ${cx},${cy} L ${cx + len * Math.cos(theta)},${cy - len * Math.sin(theta)}`,
          stroke: { color: d.needleColor || "#000000", width: Math.max(1, Number(d.needleWidth) || 2) },
          fill: { color: "transparent" }
        }));
        if (d.showLegend) {
          const value = min + ratio * (max - min);
          const legend = new TextBlock({
            text: this.dbFormat(value, digits), x: cx, y: cy + 6, fill: d.legendColor || "#0000ff", fontSize
          } as any);
          (legend.options as any).textAnchor = "middle";
          group.append(legend);
        }
        return true;
      }
      case "scale": {
        frame();
        const background = !this.dbTransparent(d);
        let ink = this.normalizeColor(d.animColor || strokeOverride || d.foreColor, "#000000");
        const back = this.normalizeColor(fillColor, "#000000");
        if (background) {
          group.append(new Rectangle({
            x, y, width: w, height: h,
            stroke: { color: back, width: 0 }, fill: { color: back }
          }));
          // Ticks in the back colour would vanish: keep them readable.
          if (ink === back) {
            ink = this.lighten(back, 1) === back ? "#ffffff" : this.lighten(back, 1);
          }
        }
        const min = Number.isFinite(Number(d.scaleMin)) ? Number(d.scaleMin) : (Number.isFinite(Number(d.graphMinimum)) ? Number(d.graphMinimum) : 0);
        const max = Number.isFinite(Number(d.scaleMax)) ? Number(d.scaleMax) : (Number.isFinite(Number(d.graphMaximum)) ? Number(d.graphMaximum) : 100);
        const major = Math.max(1, Number(d.majorTicks) || 10);
        const minor = Math.max(0.0001, Number(d.minorTicks) || 5);
        const showNumbers = !!d.scaleShowLabels;
        const labelWidth = showNumbers ? 40 : 0;
        const left = this.dbKey(d.tickDirection) === "left";
        const lineX = x + labelWidth;
        const lineW = Math.max(10, w - labelWidth);
        const span = max - min;
        const count = span > 0 ? Math.min(400, Math.floor(span / minor + 1e-9)) : 0;
        const stepPx = count > 0 ? (h - 2) / count : h;
        const fontSize = Math.max(8, Math.min(Number(d.fontSize) || 12, 12));
        let lastLabelY = -1e9;
        for (let i = 0; i <= count; i++) {
          const value = max - i * minor;
          const isMajor = Math.abs((value - min) / major - Math.round((value - min) / major)) < 1e-6;
          const ly = y + 1 + i * stepPx;
          const len = isMajor ? lineW : lineW * 0.5;
          const x0 = left ? lineX + lineW - len : lineX;
          group.append(new Path({
            data: `M ${x0},${ly} L ${x0 + len},${ly}`,
            stroke: { color: ink, width: Math.max(1, Number(d.lineWidth) || 1) }, fill: { color: "transparent" }
          }));
          if (showNumbers && isMajor && ly - lastLabelY >= fontSize + 2) {
            lastLabelY = ly;
            const text = String(Math.round(value * 100) / 100);
            group.append(new TextBlock({
              text, x: Math.max(x, lineX - 6 - text.length * 6.4), y: ly - 7, fill: ink, fontSize
            } as any));
          }
        }
        return true;
      }

      // ---------------- lists ----------------
      case "listIndicator":
      case "controlList": {
        const bw = this.drawDbPanel(group, x, y, w, h, 0, d, fillColor, borderOverride);
        this.drawDbListRows(group, x + bw, y + bw, w - 2 * bw, h - 2 * bw, d, kind === "controlList");
        return true;
      }

      // ---------------- keypad / arrow buttons ----------------
      case "backspace": case "endButton": case "enter":
      case "moveLeft": case "moveRight": case "moveUp": case "moveDown":
      case "pageUp": case "pageDown": {
        const spec = this.NAVIGATION_BUTTON_ICONS[kind];
        if (!spec) {
          return false;
        }
        const bw = this.drawDbPanel(group, x, y, w, h, 0, d, fillColor, borderOverride);
        const size = Math.min(w - 2 * bw, h - 2 * bw) * 0.5;
        const ox = x + w / 2 - size / 2, oy = y + h / 2 - size / 2;
        const icon = this.normalizeColor(d.iconColor, "#ffffff");
        for (const poly of spec) {
          const data = poly.map((pt, i) => `${i === 0 ? "M" : "L"} ${ox + pt[0] * size},${oy + pt[1] * size}`).join(" ") + " Z";
          group.append(new Path({ data, stroke: { color: icon, width: 1 }, fill: { color: icon } }));
        }
        return true;
      }
    }
    return false;
  }

  /** Rows of a List Indicator / Control List drawn from the database colours and font. */
  private drawDbListRows(group: Group, x: number, y: number, w: number, h: number, d: any, control: boolean): void {
    const rows = this.listRows(d);
    const current = this.listIndex(d, rows.length);
    const pad = 3;
    const top = y + pad;
    const rowH = Math.max(6, (h - 2 * pad) / rows.length);
    const barH = Math.max(6, rowH * 0.92);
    const left = control ? x + pad + 18 : x + pad;
    const textX = left + 5;
    const fontSize = Number(d.fontSize) > 0 ? Math.min(Number(d.fontSize), Math.max(6, Math.floor(barH * 0.8))) : Math.max(8, Math.floor(barH * 0.6));
    const fontFamily = this.dbText(d.fontFamily, "Arial");
    const selBack = this.normalizeColor(d.selectionBackColor, "#ffffff");
    const selFore = this.normalizeColor(d.selectionForeColor, "#00008b");
    const caption = this.normalizeColor(d.captionColor, "#ffffff");
    rows.forEach((text, i) => {
      const rowY = top + i * rowH + (rowH - barH) / 2;
      if (i === current) {
        group.append(new Rectangle({
          x: left, y: rowY, width: Math.max(1, w - (left - x) - pad), height: barH,
          stroke: { color: selBack, width: 0 }, fill: { color: selBack }
        }));
        if (control) {
          group.append(new Path({
            data: `M ${x + pad + 2},${rowY} L ${x + pad + 15},${rowY + barH / 2} L ${x + pad + 2},${rowY + barH} Z`,
            stroke: { color: selBack, width: 1 }, fill: { color: selBack }
          }));
        }
      }
      if (text.trim()) {
        group.append(new TextBlock({
          text, x: textX, y: rowY + Math.max(0, (barH - fontSize) / 2 - 1),
          fill: i === current ? selFore : caption, fontSize, fontFamily
        } as any));
      }
    });
  }
  /** Rows of a List Indicator / Control List (a few blank rows until text is typed). */
  private listRows(dataItem: any): string[] {
    const items = Array.isArray(dataItem.listItems) ? dataItem.listItems.map((t: any) => String(t)) : [];
    if (items.length) {
      return items;
    }
    const states = Array.isArray(dataItem.listStateNames) ? dataItem.listStateNames.filter((t: any) => String(t).length) : [];
    return states.length ? states.map((t: any) => String(t)) : ["", "", "", ""];
  }

  private listIndex(dataItem: any, count: number): number {
    return Math.max(0, Math.min(count - 1, Math.round(Number(dataItem.listIndex) || 0)));
  }

  /**
   * A list of rows on the navy panel. The current row (listIndex) is the white
   * bar; the Control List also shows a small arrow beside it.
   */
  private drawListRows(group: Group, x: number, y: number, w: number, h: number, dataItem: any, control: boolean): void {
    const rows = this.listRows(dataItem);
    const current = this.listIndex(dataItem, rows.length);
    const top = y + 9;
    const rowH = (h - 18) / rows.length;
    const barH = Math.max(6, rowH * 0.88);
    const left = control ? x + 30 : x + 9;
    const textX = control ? x + 34 : x + 14;
    const fontSize = Number(dataItem.fontSize) > 0 ? Number(dataItem.fontSize) : Math.max(8, Math.min(22, Math.round(barH * 0.62)));
    const fontFamily = typeof dataItem.fontFamily === "string" && dataItem.fontFamily.length
      ? dataItem.fontFamily
      : "Arial, sans-serif";
    rows.forEach((text, i) => {
      const rowY = top + i * rowH + (rowH - barH) / 2;
      if (i === current) {
        group.append(new Rectangle({
          x: left, y: rowY, width: Math.max(1, w - (left - x) - 12), height: barH,
          stroke: { color: "#ffffff", width: 0 },
          fill: { color: "#ffffff" }
        }));
        if (control) {
          group.append(new Path({
            data: `M ${x + 10},${rowY} L ${x + 27},${rowY + barH / 2} L ${x + 10},${rowY + barH} Z`,
            stroke: { color: "#ffffff", width: 1 },
            fill: { color: "#ffffff" }
          }));
        }
      }
      if (text.trim()) {
        // Font in the constructor (TextBlock reads it only once).
        group.append(new TextBlock({
          text, x: textX, y: rowY + Math.max(0, (barH - fontSize) / 2 - 1),
          fill: i === current ? "#000080" : "#ffffff", fontSize, fontFamily
        } as any));
      }
    });
  }

  /** Level (0-1) of a Container / Bar Graph / Gauge from its value and max. */
  private levelRatio(dataItem: any): number {
    const max = Number(dataItem.containerMax) > 0 ? Number(dataItem.containerMax) : 100;
    const value = Number.isFinite(Number(dataItem.containerValue)) ? Number(dataItem.containerValue) : 0;
    return Math.max(0, Math.min(1, value / max));
  }

  /**
   * The six panel instruments: List Indicator, Bar Graph, Gauge, Scale, Control
   * List and Tag Label. Colours follow an active colour animation (animColor).
   * Returns true when the kind was one of them and has been drawn.
   */
  private drawInstrumentShape(kind: string, group: Group, x: number, y: number, w: number, h: number, dataItem: any): boolean {
    const accent = dataItem.animColor as string | undefined;
    // Transparent frame: keeps the shape's box at its full size for line-based art.
    const addFrame = (): void => {
      const frame = new Rectangle({
        x, y, width: w, height: h,
        stroke: { color: "transparent", width: 0 },
        fill: { color: "transparent" }
      });
      frame.options.opacity = 0.001;
      group.append(frame);
    };
    // Navy 3-D panel with a lighter inner border, as in the reference shapes.
    const panel = (): void => {
      group.append(new Rectangle({
        x, y, width: w, height: h,
        stroke: { color: "#2020c8", width: 2 },
        fill: { color: accent || "#000080" }
      }));
      group.append(new Rectangle({
        x: x + 5, y: y + 5, width: Math.max(1, w - 10), height: Math.max(1, h - 10),
        stroke: { color: "#2a2ae6", width: 1 },
        fill: { color: "transparent" }
      }));
    };

    switch (kind) {
      case "listIndicator":
      case "controlList": {
        panel();
        this.drawListRows(group, x, y, w, h, dataItem, kind === "controlList");
        return true;
      }
      case "barGraph": {
        group.append(new Rectangle({
          x, y, width: w, height: h,
          stroke: { color: "#00c800", width: 3 },
          fill: { color: accent || "#00ff00" }
        }));
        const ratio = this.levelRatio(dataItem);
        console.log("barGraph:ratio:",ratio, dataItem)
        const barH = (h - 8) * ratio;
        console.log("barGraph:barH:",barH)
        if (barH > 0) {
          group.append(new Rectangle({
            x: x + 4, y: y + h - 4 - barH, width: Math.max(1, w - 8), height: barH,
            stroke: { color: "#0000a0", width: 1 },
            fill: { color: "#000080" }
          }));
        }
        return true;
      }
      case "gauge": {
        group.append(new Rectangle({
          x, y, width: w, height: h,
          stroke: { color: "transparent", width: 0 },
          fill: { color: accent || "#c0c0c0" }
        }));
        const cx = x + w / 2;
        const cy = y + h * 0.68;
        const r = Math.min(w * 0.22, h * 0.4);
        const black = { color: "#000000", width: 1 };
        group.append(new Path({
          data: `M ${cx - r},${cy} A ${r},${r} 0 0 1 ${cx + r},${cy}`,
          stroke: black, fill: { color: "transparent" }
        }));
        // Tick marks every 30 degrees across the dial.
        for (let deg = 30; deg <= 150; deg += 30) {
          const a = (deg * Math.PI) / 180;
          group.append(new Path({
            data: `M ${cx + r * Math.cos(a)},${cy - r * Math.sin(a)} `
              + `L ${cx + r * 0.8 * Math.cos(a)},${cy - r * 0.8 * Math.sin(a)}`,
            stroke: black, fill: { color: "transparent" }
          }));
        }
        const label = (text: string, lx: number, ly: number): void => {
          const t = new TextBlock({ text, x: lx, y: ly, fill: "#000000", fontSize: 11, textAnchor: "middle" } as any);
          group.append(t);
        };
        label("50", cx, cy - r - 17);
        label("0", cx - r - 8, cy - 7);
        label("100", cx + r + 14, cy - 7);
        // Needle: pointing left at 0, straight up at 50% and right at 100%.
        const theta = Math.PI * (1 - this.levelRatio(dataItem));
        const len = r * 0.85;
        group.append(new Path({
          data: `M ${cx},${cy} L ${cx + len * Math.cos(theta)},${cy - len * Math.sin(theta)}`,
          stroke: { color: "#000000", width: 2.5 }, fill: { color: "transparent" }
        }));
        return true;
      }
      case "scale": {
        addFrame();
        const colour = accent || "#00009c";
        const showNumbers = !!dataItem.scaleShowLabels;
        const labelWidth = showNumbers ? 40 : 0;
        const lineX = x + labelWidth;
        const lineW = Math.max(10, w - labelWidth);
        const scaleMin = Number.isFinite(Number(dataItem.scaleMin)) ? Number(dataItem.scaleMin) : 0;
        const scaleMax = Number.isFinite(Number(dataItem.scaleMax)) ? Number(dataItem.scaleMax) : 100;
        [0, 0.25, 0.5, 0.75, 1].forEach((f, i) => {
          const len = i % 2 === 0 ? lineW : lineW * 0.5;
          const ly = y + 1 + f * (h - 2);
          group.append(new Path({
            data: `M ${lineX},${ly} L ${lineX + len},${ly}`,
            stroke: { color: colour, width: 1 }, fill: { color: "transparent" }
          }));
          if (showNumbers) {
            // Top line is the maximum, bottom line the minimum.
            const value = scaleMax - f * (scaleMax - scaleMin);
            const text = String(Math.round(value * 100) / 100);
            const estWidth = text.length * 6.4;
            group.append(new TextBlock({
              text, x: Math.max(x, lineX - 6 - estWidth), y: ly - 7, fill: colour, fontSize: 11
            } as any));
          }
        });
        return true;
      }
      case "tagLabel": {
        addFrame();
        const colour = accent || "#444444";
        const text = String(dataItem.labelText ?? "").trim();
        if (text) {
          // Font must be given in the constructor: TextBlock builds its CSS font
          // string once, so setting options.fontSize afterwards does nothing.
          const fontSize = Number(dataItem.fontSize) > 0 ? Number(dataItem.fontSize) : Math.max(10, Math.round(h * 0.7));
          const fontFamily = typeof dataItem.fontFamily === "string" && dataItem.fontFamily.length
            ? dataItem.fontFamily
            : "Arial, sans-serif";
          group.append(new TextBlock({
            text, x: x + 2, y: y + Math.max(0, (h - fontSize) / 2 - 2),
            fill: accent || "#222222", fontSize, fontFamily
          }));
          return true;
        }
        const slots = 13;
        const slot = w / slots;
        for (let i = 0; i < slots; i++) {
          const gx = x + i * slot + slot * 0.1;
          group.append(new Path({
            data: `M ${gx},${y + h * 0.15} L ${gx},${y + h * 0.9} L ${gx + slot * 0.6},${y + h * 0.9}`,
            stroke: { color: colour, width: 1.5 }, fill: { color: "transparent" }
          }));
        }
        return true;
      }
    }
    return false;
  }

  /** Add one of the six panel instruments (Indicators dropdown). */
  public addIndicatorShape(kind: string,options: Record<string, any> = {}): void {
    const sizes: Record<string, { width: number; height: number }> = {
      listIndicator: { width: 260, height: 105 },
      controlList: { width: 230, height: 105 },
      barGraph: { width: 235, height: 135 },
      gauge: { width: 185, height: 125 },
      scale: { width: 200, height: 120 },
      tagLabel: { width: 205, height: 20 }
    };
    const levelKinds = ["barGraph", "gauge"];
    console.log("pre addLibraryShape:1:",kind)
    console.log("kind:",kind)
    this.addLibraryShape(kind, {
      ...(sizes[kind] || { width: 200, height: 100 }),
      fillColor: "transparent",
      ...(levelKinds.includes(kind)
        ? { containerValue: kind === "barGraph" ? 25 : 0, containerMax: 100 }
        : {}),
      ...(kind === "listIndicator" || kind === "controlList"
        ? { listItems: [], listIndex: 0 }
        : {}),
      // Caller-provided options override everything above
      ...options
    });
  }

  


  /** White icon polygons (unit box) for the keypad-style push buttons. */
  private readonly NAVIGATION_BUTTON_ICONS: Record<string, number[][][]> = {
    arrowVertical: [],
    arrowHorizontal: [],
    backspace: [[[0.05, 0.5], [0.4, 0.2], [0.4, 0.4], [0.95, 0.4], [0.95, 0.6], [0.4, 0.6], [0.4, 0.8]]],
    endButton: [[[0.1, 0.1], [0.9, 0.1], [0.5, 0.6]], [[0.1, 0.72], [0.9, 0.72], [0.9, 0.9], [0.1, 0.9]]],
    enter: [[[0.9, 0.15], [0.9, 0.65], [0.4, 0.65], [0.4, 0.85], [0.05, 0.57], [0.4, 0.3], [0.4, 0.5], [0.72, 0.5], [0.72, 0.15]]],
    moveLeft: [[[0.85, 0.05], [0.15, 0.5], [0.85, 0.95]]],
    moveRight: [[[0.15, 0.05], [0.85, 0.5], [0.15, 0.95]]],
    moveUp: [[[0.05, 0.85], [0.5, 0.15], [0.95, 0.85]]],
    moveDown: [[[0.05, 0.15], [0.5, 0.85], [0.95, 0.15]]],
    pageUp: [[[0.1, 0.45], [0.5, 0.05], [0.9, 0.45]], [[0.1, 0.9], [0.5, 0.5], [0.9, 0.9]]],
    pageDown: [[[0.1, 0.1], [0.5, 0.5], [0.9, 0.1]], [[0.1, 0.55], [0.5, 0.95], [0.9, 0.55]]]
  };
  // ---------------- EOF Animation engine ----------------
 
    private drawGroupedChildren(
    children: any[],
    parentStyle?: ShapeEditorStyle,
    baseX: number = 0,
    baseY: number = 0,
    frameWidth?: number,
    frameHeight?: number
  ): Group {
    const group = new Group();

    // Kendo scales a custom visual according to its own drawing bbox. Without
    // an explicit frame, whitespace between children is excluded from that bbox
    // and the visual gets non-uniformly normalized when grouping. A transparent
    // frame makes the drawing bbox exactly equal to the original group bounds,
    // preserving every child's size and relative position.
    if (frameWidth && frameHeight) {
      const frame = new Rectangle({
        x: baseX, y: baseY, width: frameWidth, height: frameHeight,
        stroke: { color: "transparent", width: 0 },
        fill: { color: "transparent" }
      });
      // Do not use literal zero opacity here. Some Diagram sizing paths ignore
      // fully invisible visuals. 0.001 is imperceptible but keeps the frame in
      // the measured drawing bounds.
      frame.options.opacity = 0.001;
      group.append(frame);
    }

    for (const child of children || []) {
      const dataItem = child?.dataItem?.dataItem ?? child?.dataItem ?? {};
      const x = baseX + (Number(child?.x) || 0);
      const y = baseY + (Number(child?.y) || 0);
      let childGroup: Group;

      if (Array.isArray(dataItem.groupChildren)) {
        childGroup = this.drawGroupedChildren(
          dataItem.groupChildren,
          parentStyle,
          x,
          y,
          Number(dataItem.groupOriginalWidth) || Number(child.width) || undefined,
          Number(dataItem.groupOriginalHeight) || Number(child.height) || undefined
        );
      } else if (dataItem.libraryKind) {
        childGroup = this.drawLibraryShape(dataItem, x, y, parentStyle);
        if (dataItem.libraryKind === "richText") {
          // A standalone Rich Text shape gets its text from Kendo's own
          // model.content renderer, which does not exist for a child inside a
          // group's single custom visual - so draw the blocks ourselves.
          const blocks = dataItem.richTextBlocks ?? child?.content?.blocks ?? [];
          const padding = 10;
          const frameW = Math.max(20, Number(dataItem.width) || Number(child?.width) || 140);
          const frameH = Math.max(20, Number(dataItem.height) || Number(child?.height) || 90);
          this.appendRichTextBlocks(
            childGroup, blocks, x + padding, y + padding,
            Math.max(10, frameW - padding * 2), Math.max(10, frameH - padding * 2)
          );
        }
      } else if (dataItem.definition) {
        const mergedStyle: ShapeEditorStyle = {
          ...(dataItem.editorStyle || {}),
          ...(parentStyle?.strokeColor ? { strokeColor: parentStyle.strokeColor } : {}),
          ...(parentStyle?.fillColor ? { fillColor: parentStyle.fillColor } : {})
        };
        childGroup = this.drawDiagramFromDefinition(dataItem.definition, x, y, mergedStyle);
      } else {
        continue;
      }

      const childStyle = dataItem.editorStyle || {};
      const drawingElement = (childGroup as any).drawingElement;
      const bbox = drawingElement?.bbox?.();
      // kendo-drawing's own Rect (what .bbox() returns) exposes size as
      // bbox.size.{width,height} - it has no flat .width/.height properties.
      // Reading bbox.width directly silently reads undefined, which is why
      // the >0 checks below always fell through to "no scaling" before.
      // A standalone Kendo shape stretches its drawn outline to fill the shape's
      // box. Open-path library shapes (polyline, arc, freehand, legacy line)
      // only occupy part of their box, so inside a group they must be fitted
      // the same way or they look flatter/taller than before grouping.
      const libraryKind = !Array.isArray(dataItem.groupChildren) ? dataItem.libraryKind : undefined;
      const fitsOutline = libraryKind === "polyline" || libraryKind === "arc" ||
        libraryKind === "freehand" || (libraryKind === "line" && !dataItem.lineStart);
      // Other library shapes (rich text, text, container, ...) are drawn at
      // their real width/height; their outline bbox can be larger than the box
      // (e.g. overflowing text), so use the nominal box as the unscaled size.
      const isNominalChild = Boolean(libraryKind) && !fitsOutline;
      const bboxWidth = isNominalChild
        ? Math.max(20, Number(dataItem.width) || 140)
        : bbox?.size?.width;
      const bboxHeight = isNominalChild
        ? Math.max(20, Number(dataItem.height) || 90)
        : bbox?.size?.height;
      if (drawingElement?.transform && bbox && fitsOutline && bboxWidth > 0 && bboxHeight > 0) {
        const fitWidth = Math.max(1, Number(child?.width) || Number(dataItem?.width) || bboxWidth);
        const fitHeight = Math.max(1, Number(child?.height) || Number(dataItem?.height) || bboxHeight);
        const fitCenter = [x + fitWidth / 2, y + fitHeight / 2];
        const fitTx = geometry.transform();
        // Matrices apply right-to-left: outline -> child box (below), then
        // rotate, then flip, matching the order used for the other children.
        if ((childStyle.flipX ?? 1) !== 1 || (childStyle.flipY ?? 1) !== 1) {
          fitTx.scale(childStyle.flipX ?? 1, childStyle.flipY ?? 1, fitCenter);
        }
        const fitAngle = Number(child?.rotation?.angle) || 0;
        if (fitAngle) {
          fitTx.rotate(fitAngle, fitCenter);
        }
        fitTx
          .translate(x, y)
          .scale(fitWidth / bboxWidth, fitHeight / bboxHeight)
          .translate(-bbox.origin.x, -bbox.origin.y);
        drawingElement.transform(fitTx);
      } else if (drawingElement?.transform && bbox) {
        let tx = geometry.transform();

        // A normal Kendo Shape scales its custom visual to the shape's stored
        // width/height. Once shapes become children of our logical group there
        // is no individual Kendo wrapper to do that scaling, so reproduce it
        // here. This is what preserves resized custom/compound shapes exactly.
        const targetWidth = Math.max(1, Number(child?.width) || Number(dataItem?.width) || bboxWidth || 1);
        const targetHeight = Math.max(1, Number(child?.height) || Number(dataItem?.height) || bboxHeight || 1);
        const scaleX = bboxWidth > 0 ? targetWidth / bboxWidth : 1;
        const scaleY = bboxHeight > 0 ? targetHeight / bboxHeight : 1;
        if (Math.abs(scaleX - 1) > 0.0001 || Math.abs(scaleY - 1) > 0.0001) {
          tx = tx.scale(scaleX, scaleY, [x, y]);
        }

        const flipX = childStyle.flipX ?? 1;
        const flipY = childStyle.flipY ?? 1;
        const center = [x + targetWidth / 2, y + targetHeight / 2];
        if (flipX !== 1 || flipY !== 1) {
          tx = tx.scale(flipX, flipY, center);
        }
        const angle = Number(child?.rotation?.angle) || 0;
        if (angle) {
          tx = tx.rotate(angle, center);
        }
        drawingElement.transform(tx);
      }
      group.append(childGroup);
    }
    return group;
  }
private applyDrawingTransform(group: Group, style?:ShapeEditorStyle): void {
    const flipX = style?.flipX ?? 1;
    const flipY = style?.flipY ?? 1;
    if (flipX === 1 && flipY === 1) {
      return;
    }
    const drawingGroup = (group as any).drawingElement;
    const bounds = drawingGroup?.bbox?.();
    // Same bug class as drawGroupedChildren: kendo-drawing's Rect has no flat
    // .x/.y - position is bounds.origin.{x,y}. Reading bounds.x directly read
    // undefined, so the flip pivoted around (NaN/0,NaN/0) instead of the
    // shape's actual center, sending the flipped shape outside its own
    // selection box (the reported Flip Right/Left bug).
    if (drawingGroup?.transform && bounds?.origin && bounds?.size) {
      const center = [
        bounds.origin.x + bounds.size.width / 2,
        bounds.origin.y + bounds.size.height / 2
      ];
      // Compose with any transform already on the group (e.g. the resize
      // scale from drawDiagramFromDefinition) instead of replacing it.
      const flip = geometry.transform().scale(flipX, flipY, center);
      const existing = drawingGroup.transform?.();
      drawingGroup.transform(existing ? flip.multiply(existing) : flip);
    }
  }

  // Diagram properties
  public shapes: ShapeOptions[] = [];
  public connections: ConnectionOptions[] =[];
  public shapeDefaults: ShapeDefaults = {
    visual: this.visualTemplate,
    editable: {
      connect: false // This disables the hover connection dots safely
    }
  };
  // Text of the selected Tag Label.
  public selectedLabelText = "";
  // Number labels of the selected Scale.
  public selectedScaleShow = false;
  public selectedScaleMin = 0;
  public selectedScaleMax = 100;

  public get hasScaleShape(): boolean {
    return this.selectedShapes().some(shape => this.shapeDataItem(shape)?.libraryKind === "scale");
  }

  public applySelectedScale(): void {
    const shapes = this.selectedShapes().filter(shape => this.shapeDataItem(shape)?.libraryKind === "scale");
    if (!shapes.length) {
      this.statusMessage = "Select a Scale first.";
      return;
    }
    for (const shape of shapes) {
      const dataItem = this.shapeDataItem(shape);
      dataItem.scaleShowLabels = this.selectedScaleShow;
      dataItem.scaleMin = Number(this.selectedScaleMin) || 0;
      dataItem.scaleMax = Number.isFinite(Number(this.selectedScaleMax)) ? Number(this.selectedScaleMax) : 100;
      const model = this.modelForShape(shape);
      if (model) {
        model.dataItem ??= {};
        const modelData = model.dataItem?.dataItem ?? model.dataItem;
        modelData.scaleShowLabels = dataItem.scaleShowLabels;
        modelData.scaleMin = dataItem.scaleMin;
        modelData.scaleMax = dataItem.scaleMax;
      }
      this.refreshCustomShape(shape);
    }
    this.statusMessage = this.selectedScaleShow
      ? `Scale shows ${this.selectedScaleMax} (top) down to ${this.selectedScaleMin} (bottom).`
      : "Scale numbers hidden.";
  }
  // Rows (separated by ;) and current row of the selected List Indicator / Control List.
  public selectedListItems = "";
  public selectedListIndex = 0;

  public get hasListShape(): boolean {
    return this.selectedShapes().some(shape =>
      ["listIndicator", "controlList"].includes(this.shapeDataItem(shape)?.libraryKind));
  }

  private applyListPatch(patch: { items?: string[]; text?: string; index?: number }): void {
    const shapes = this.selectedShapes().filter(shape =>
      ["listIndicator", "controlList"].includes(this.shapeDataItem(shape)?.libraryKind));
    if (!shapes.length) {
      this.statusMessage = "Select a List Indicator or Control List first.";
      return;
    }
    for (const shape of shapes) {
      const dataItem = this.shapeDataItem(shape);
      if (patch.items) {
        dataItem.listItems = patch.items;
      }
      if (patch.text !== undefined) {
        // Keep the text exactly as typed (including a trailing ";") so the box
        // never rewrites what the user is in the middle of typing.
        dataItem.listItemsText = patch.text;
      }
      if (patch.index !== undefined) {
        dataItem.listIndex = patch.index;
      }
      const model = this.modelForShape(shape);
      if (model) {
        model.dataItem ??= {};
        const modelData = model.dataItem?.dataItem ?? model.dataItem;
        modelData.listItems = this.clonePlain(dataItem.listItems ?? []);
        modelData.listItemsText = dataItem.listItemsText ?? "";
        modelData.listIndex = dataItem.listIndex ?? 0;
      }
      this.refreshCustomShape(shape);
    }
  }

  private applyListPatchTo(shape: any, index: number): void {
    const dataItem = this.shapeDataItem(shape);
    dataItem.listIndex = index;
    const model = this.modelForShape(shape);
    const modelData = model?.dataItem?.dataItem ?? model?.dataItem;
    if (modelData) {
      modelData.listIndex = index;
    }
    this.refreshCustomShape(shape);
  }

  public applySelectedListItems(): void {
    const items = this.selectedListItems.split(";").map(t => t.trim()).filter(t => t.length > 0);
    this.applyListPatch({ items, text: this.selectedListItems });
    this.statusMessage = items.length ? `List has ${items.length} row(s).` : "List cleared (4 blank rows shown).";
  }

  public applySelectedListIndex(): void {
    const index = Math.max(0, Math.round(Number(this.selectedListIndex) || 0));
    this.applyListPatch({ index });
    this.statusMessage = `Current row set to ${index} (0 is the first row).`;
  }

  public get hasLabelShape(): boolean {
    return this.selectedShapes().some(shape => this.shapeDataItem(shape)?.libraryKind === "tagLabel");
  }

  public applySelectedLabelText(): void {
    const shapes = this.selectedShapes().filter(shape => this.shapeDataItem(shape)?.libraryKind === "tagLabel");
    if (!shapes.length) {
      this.statusMessage = "Select a Tag Label first.";
      return;
    }
    for (const shape of shapes) {
      const dataItem = this.shapeDataItem(shape);
      dataItem.labelText = this.selectedLabelText;
      const model = this.modelForShape(shape);
      if (model) {
        model.dataItem ??= {};
        const modelData = model.dataItem?.dataItem ?? model.dataItem;
        modelData.labelText = this.selectedLabelText;
      }
      this.refreshCustomShape(shape);
    }
    this.statusMessage = this.selectedLabelText.trim()
      ? "Tag Label text updated."
      : "Tag Label text cleared (placeholder marks shown).";
  }

  /** True when a Container, Bar Graph or Gauge is selected (they use Value / Max). */
  public get hasLevelShape(): boolean {
    return this.selectedShapes().some(shape =>
      ["container", "barGraph", "gauge"].includes(this.shapeDataItem(shape)?.libraryKind));
  }
  public get hasSelection(): boolean {
    return this.selectedCount > 0;
  }
public get canGroup(): boolean {
    return this.selectedShapes().length >= 2;
  }

  /** Align commands need at least two selected shapes. */
  public get canAlign(): boolean {
    return this.selectedShapes().length >= 2;
  }

  /** Even spacing is only meaningful with three or more shapes. */
  public get canDistribute(): boolean {
    return this.selectedShapes().length >= 3;
  }

  public get canUngroup(): boolean {
    const shapes = this.selectedShapes();
    return shapes.length === 1 && this.isGroupRuntimeShape(shapes[0]);
  }
public markers:any = [];
public performMapperFrom(In) {
    
  
    let OutRec: any = {};
    for (let i = 0; i < In.length; i++) {
      let rec = {};
      rec = In[i];
      
      let Keys = Object.keys(this.mapperFrom);
      for (let j = 0; j < Keys.length; j++) {
        let field = Keys[j];
        OutRec[field] = rec[this.mapperFrom[field]]
        if (this.paramConfig.DEBUG_FLAG) console.log("field found:", field, rec, this.mapperFrom[field], rec[this.mapperFrom[field]], OutRec)

      }
    }
    return OutRec;
}

public isDiagramInitializing = true;
public expData =[];
////
public shapeTables = [
      "SCD_SHAPE",
      "SCD_SHAPE_DISPLAY_GENERAL",
      "SCD_SHAPE_INPUT_GENERAL",
      "SCD_SHAPE_INPUT_APPEARANCE",
      "SCD_SHAPE_CONNECTION",
      "SCD_SHAPE_GENERAL",
      "SCD_BUTTON_GENERAL",
      "SCD_BUTTON_ACTION",
      "SCD_BUTTON_APPEARANCE",
      "SCD_BUTTON_PUSH_GENERAL",
      "SCD_SHAPE_STATE",
      "SCD_ARROW_BUTTON_TIMING",
      "SCD_MESSAGE_GENERAL",
      "SCD_TEXT_GENERAL",
      "SCD_GRAPH_GENERAL",
      "SCD_MULTISTATE_INDICATOR_GENERAL",
      "SCD_LIST_INDICATOR_GENERAL",
      "SCD_LIST_INDICATOR_STATE",
      "SCD_ARROW_BUTTON_GENERAL",
      "SCD_ARROW_BUTTON_LABEL",
      "SCD_ALARM_BEHAVIOR",
      "SCD_ALARM_COLUMNS",
      "SCD_ALARM_EVENT_SUBSCRIPTIONS",
      "SCD_ALARM_GENERAL_BANNER",
      "SCD_ALARM_GENERAL_LOG_VIEWER",
      "SCD_ALARM_SORT",
      "SCD_ALARM_STATES",
      "SCD_ALARM_DISPLAY_FILTERS_CONDITIONS",
      "SCD_ALARM_DISPLAY_FILTERS",
    ];
private formatShapesInfoResponse(response: any[]): Record<string, any[]> {
  const grouped: Record<string, any[]> = {};

  for (const entry of response ?? []) {
    const rowCount = Number(entry?.rowCount ?? 0);
    if (rowCount === 0) continue;                     // skip empty tables
    const rows = Array.isArray(entry?.data) ? entry.data : [];
    if (!rows.length) continue;

    // Derive the table name from the query name:
    // "GET_SCD_BUTTON_GENERAL_QUERY" -> "SCD_BUTTON_GENERAL"
    const table = this.tableNameFromQuery(entry.query);

    for (const row of rows) {
      const shapeId = row?.SHAPE_ID;
      if (shapeId === undefined || shapeId === null || shapeId === "") continue;

      const key = String(shapeId);
      if (!grouped[key]) grouped[key] = [];

      // Attach the source table on a cloned row so the caller's objects
      // stay untouched and the tag survives serialization.
      grouped[key].push({ ...row, _TABLE: table });
    }
  }

  return grouped;
}
async updateShapesInfoArr(closedComponent, closedShapeId){

}
private tableNameFromQuery(query: string): string {
  if (typeof query !== "string" || !query) return "";
  return query
    .replace(/^GET_/, "")
    .replace(/_QUERY$/, "");
}
async  loadShapesData(){

  let shapesIDs = "";
  for (let i =0; i< this.shapes.length; i++){
    let shapeID = this.shapes[i].id;
    let array = shapeID.split(":");
    shapeID = array[1];
    if (typeof shapeID != "undefined"){
        if (shapesIDs != "")
          shapesIDs = shapesIDs + ",";
        shapesIDs = shapesIDs + shapeID;
    }
  }
  if (this.paramConfig.DEBUG_FLAG) console.log("loadShapesData:shapesIDs:", shapesIDs);
  //
  let statement_shapesTpDelete = "SELECT SHAPE_ID from scd_shape where shape_id not in (" + shapesIDs + ") and DISPLAY_ID = " + this.form.value.DISPLAY_ID;
  let body_shapes = [
     {
        "_QUERY": "EXECSQL",
        "_STMT": statement_shapesTpDelete
      }
    ]
  let shapesTpDelete = await this.starServices.execSQLBody(this, body_shapes, "");
  if (this.paramConfig.DEBUG_FLAG) console.log("loadShapesData:shapesTpDelete:", shapesTpDelete[0].data, "this.form.value.DISPLAY_ID:", this.form.value.DISPLAY_ID, "statement_shapesTpDelete:",statement_shapesTpDelete);
  let shapeIDsToDelete = "";
  if (shapesTpDelete[0].data.length > 0){
     shapeIDsToDelete = shapesTpDelete[0].data.map(item => item.SHAPE_ID).join(',');
    if (this.paramConfig.DEBUG_FLAG) console.log("loadShapesData:shapeIDsToDelete:", shapeIDsToDelete);
  }

  //

  //removeUnusedShapes
  if (shapeIDsToDelete != ""){

    

      let body_defs = this.shapeTables.map(table => ({
        "_QUERY": "EXECSQL",
        "_STMT": `DELETE from ${table} where shape_id in (${shapeIDsToDelete})`
      }));
      // let statement = "DELETE from scd_shape where shape_id  in (" + shapeIDsToDelete + ") and DISPLAY_ID = " + this.form.value.DISPLAY_ID;
      // let newVal:any ={
      //       "_QUERY": "EXECSQL",
      //       "_STMT": statement
      //     };
      // body_defs.push(newVal)    
      if (this.paramConfig.DEBUG_FLAG) console.log("prepareShapes_defs:body_defs:", body_defs);
      let data_defs = await this.starServices.execSQLBody(this, body_defs, "");
    }
                                                                                                                                  
  const whereShapesInfo = `SHAPE_ID IN (${shapesIDs})`;
  const bodyShapesInfo = this.shapeTables.map(table => ({
  "_QUERY": `GET_${table}_QUERY`,
  "_WHERE": whereShapesInfo
}));

console.log ("bodyShapesInfo:",bodyShapesInfo)
let dataShapesInfo = await this.starServices.execSQLBody(this, bodyShapesInfo, "");
    if (this.paramConfig.DEBUG_FLAG) console.log("loadShapesData:dataShapesInfo[0].data:",JSON.stringify( dataShapesInfo));
    if (typeof dataShapesInfo[0].data != "undefined"){
      this.ShapesInfoArr = this.formatShapesInfoResponse(dataShapesInfo);

      if (this.paramConfig.DEBUG_FLAG) {
        console.log("loadShapesData:ShapesInfoArr:", this.ShapesInfoArr);
      }      
    } 

  ////////

  
  let whereClause = "DISPLAY_ID =" + this.form.value.DISPLAY_ID;
  let statement_expressions = "SELECT A.SHAPE_ID, B.EXPRESSION_DATA , A.SHAPE_TYPE "
                              +"    FROM SCD_SHAPE A, SCD_SHAPE_DISPLAY_GENERAL B "
                              +"    WHERE A.SHAPE_ID = B.SHAPE_ID "
                              +"    AND A.DISPLAY_ID = " + this.form.value.DISPLAY_ID
                              +"    AND (B.EXPRESSION_DATA != '' or B.EXPRESSION_DATA is not null) ";

    let body = [];

      body = [
      {
      "_QUERY": "GET_SCD_SHAPE_QUERY",
      "_WHERE": whereClause
      },
      {
        "_QUERY": "EXECSQL",
        "_STMT": statement_expressions
      }
      ]
      
    
    
    if (this.paramConfig.DEBUG_FLAG) console.log("loadShapesData:body:", body);
    let data = await this.starServices.execSQLBody(this, body, "");
    if (this.paramConfig.DEBUG_FLAG) console.log("loadShapesData:data[0].data:", data[0].data);
    if (typeof data[0].data != "undefined"){
      this.scdShapes = data[0].data;
    } 
    if (typeof data[1].data != "undefined"){
      let expData = data[1].data;
      if (this.paramConfig.DEBUG_FLAG) console.log("loadShapesData:expData:", JSON.stringify(expData));
      
      if (this.paramConfig.DEBUG_FLAG) console.log("loadShapesData:expData:", expData.length, expData, JSON.stringify(expData));
      const convert = (s: string): string => s.replace(/^\[(.+?)\](.+?)\.VAL$/, '$1:$2');


      for (let i = 0; i < expData.length; i++){
        const loaded = this.expressionEngine.loadWithVariables(expData[i]['EXPRESSION_DATA']);

        if ('error' in loaded) {
          // The rule failed to compile — handle the diagnostics.
          const errs = loaded.error.diagnostics.filter(d => d.severity === 'error');
          console.warn(
            `Rule '${expData[i]['EXPRESSION_DATA']}' failed to compile:`,
            errs.map(e => `${e.code}: ${e.message}`).join('; ')
          );
          continue; // or return / skip this rule, whichever fits your loop
        }

        // ✅ Narrowed: TypeScript now knows `loaded` has `rule` and `variables`
        const { rule, variables } = loaded;

        const tags: Record<string, Value> = {};
        let j = 0;
        let tagNames  = [];
        let tagNamesScada  = [];
        for (const name of variables.tags) {
          console.log('opcua:tags[name]:', name, tags[name]);
          
          tagNames.push(convert(name));
          tagNamesScada.push(name);
          
          tags[name] = j;
          j++;
        }
        if (this.paramConfig.DEBUG_FLAG) console.log("loadShapesData:loaded:", loaded);
        expData[i]['loaded'] = loaded;
        expData[i]['tagNames'] = tagNames;
        expData[i]['tagNamesScada'] = tagNamesScada;
      }
      if (this.paramConfig.DEBUG_FLAG) console.log("loadShapesData:expData:", expData);
      //this.expData = formatData(expData);
      this.expData = expData;
      
      if (this.paramConfig.DEBUG_FLAG) console.log("loadShapesData:this.expData:", this.expData);
    } 
}  
////
public mapSampleData() {
    let OutRec = this.performMapperFrom(this.executeQueryresult.data);
    if (this.paramConfig.DEBUG_FLAG) console.log("OutRec:1:", OutRec)
    let dwg;
    if (OutRec.DiagramData == ""){
      dwg = {
        "shapes": [
          ],
        "connections": [
                ]
      }
    }
    else
      dwg = JSON.parse(OutRec.DiagramData);
    
    if (this.paramConfig.DEBUG_FLAG) console.log("dwg:1:", dwg)
      this.isDiagramInitializing = true;
      this.connections = dwg.connections;
      this.connections = dwg.connections;

for (const model of dwg.shapes) {
  console.log("BEFORE ADD:", model.dataItem?.type);

  (this.shapes as any[]).push(model);

  const runtime = this.diagram.addShape(model, true);

  console.log("AFTER ADD:", {
    runtimeType: runtime?.dataItem?.type,
    nestedType: runtime?.dataItem?.dataItem?.type,
    modelType: model.dataItem?.type
  });

  this.diagram.select(runtime);

  // Temporarily disable this call for the test.
  // this.syncRuntimeShapeToModel(runtime);
}
    
    
      //this.shapes = dwg.shapes;
      

        console.log(
          "MODEL:",
          this.shapes[0]?.dataItem?.type,
          this.shapes[0]?.dataItem?.dataItem
        );
   
    // this.shapes = dwg.shapes;
    // this.connections = dwg.connections;
    this.editable = this.buildEditable();

    // Generate the JSON
    let diagramMenus = this.diagramMenus["DIAGRAM"]
    const result = this.buildHierarchy(diagramMenus);
    this.items=result;

    requestAnimationFrame(() => {
        requestAnimationFrame(() => {
            this.isDiagramInitializing = false;
        });
    });
    this.loadShapesData();

    setTimeout(() => {
        //  this.disableButton1023(); //Fuad testing disable a button
    }, 100);
    
}
public mapSampleData_org() {
    let OutRec = this.performMapperFrom(this.executeQueryresult.data);
    if (this.paramConfig.DEBUG_FLAG) console.log("OutRec:1:", OutRec)
    let dwg;
    if (OutRec.DiagramData == ""){
      dwg = {
        "shapes": [
          ],
        "connections": [
                ]
      }
    }
    else
      dwg = JSON.parse(OutRec.DiagramData);
    if (this.paramConfig.DEBUG_FLAG) console.log("dwg:1:", dwg)
    if (this.paramConfig.DEBUG_FLAG) console.log("dwg:1:", dwg)
      for (let i =0; i< dwg.shapes.length; i++){
      let shape = dwg.shapes[i];
      if (shape.dataItem.tooltip !== undefined) {
        shape.tooltip = shape.dataItem.tooltip;
      }
      if (shape.dataItem.tooltipText !== undefined) {
        shape.tooltipText = shape.dataItem.tooltipText;
      }
    }
    this.isDiagramInitializing = true;
    this.shapes = dwg.shapes;
    this.connections = dwg.connections;
    this.editable = this.buildEditable();

    // Generate the JSON
    let diagramMenus = this.diagramMenus["DIAGRAM"]
    const result = this.buildHierarchy(diagramMenus);
    this.items=result;

    requestAnimationFrame(() => {
        requestAnimationFrame(() => {
            this.isDiagramInitializing = false;
        });
    });
    this.loadShapesData();

    setTimeout(() => {
        //  this.disableButton1023(); //Fuad testing disable a button
    }, 100);
    
}

// Simulating your database results
public dbRows = [
    { Menu: "Main", Item: "item1" },
    { Menu: "Main", Item: "item2" },
    { Menu: "Main", Item: "item3" },
    { Menu: "item1", Item: "item11" },
    { Menu: "item1", Item: "item12" }
];


// Build the hierarchy
public items =[];

public buildHierarchy(rows) {
    // Step 1: Build children map with full objects instead of just strings
    const childrenMap = {};
    const itemMap = {}; // Store item details by name
    
    
    rows.forEach(row => {
        const itemName = row.Item;
        const menuName = row.Menu;
        const itemId = row.Id || row.ID; // Handle both Id and ID
        const dataItem = row.dataItem ||  null; // Handle both dataItem and dataitem
        
        // Store item details
        if (!itemMap[itemName]) {
            itemMap[itemName] = {
                text: itemName,
                Id: itemId,
                dataItem:dataItem,
                isSeparator: itemName === "SEP"
            };
        } else if (itemId) {
            // Update ID if found
            itemMap[itemName].Id = itemId;
        }
        
        // Build children map
        if (!childrenMap[menuName]) {
            childrenMap[menuName] = [];
        }
        
        // Store child info with name and ID
        childrenMap[menuName].push({
            name: itemName,
            id: itemId,
            dataItem:dataItem,
            isSeparator: itemName === "SEP"
        });
    });
    
    // Step 2: Recursive function to build node
    function buildNode(itemName, itemId = null) {
        // Handle separator
        if (itemName === "SEP") {
            return { separator: true };
        }
        
        // Get the ID from itemMap or use passed ID
        const finalId = itemId || (itemMap[itemName] ? itemMap[itemName].Id : null);
        
        // Create node
        const node:any = { 
            text: itemName,
            dataItem: itemMap[itemName] ? itemMap[itemName].dataItem : null
        };
        
        // Add Id if it exists
        if (finalId) {
            node.Id = finalId;
        }
        
        // Add children if they exist
        if (childrenMap[itemName] && childrenMap[itemName].length > 0) {
            node.items = childrenMap[itemName].map(child => 
                buildNode(child.name, child.id)
            );
        }
        
        return node;
    }
    
    // Step 3: Get top-level items (children of "Main")
    const topLevelItems = childrenMap["Main"] || [];
    
    // Step 4: Build final result preserving order
    let finalResult = [];
    
    for (let i = 0; i < topLevelItems.length; i++) {
        const item = topLevelItems[i];
        const builtNode:any = buildNode(item.name, item.id);
        
        // For non-separator items, ensure ID is set from the original row
        if (builtNode.text && !builtNode.Id) {
            // Find the original row to get the ID
            const originalRow = rows.find(row => 
                row.Menu === "Main" && row.Item === item.name
            );
            if (originalRow) {
                builtNode.Id = originalRow.Id || originalRow.ID;
            }
        }
        
        finalResult.push(builtNode);
    }
    console.log("rows:", rows,"finalResult:", finalResult )
    return finalResult;
}

public onItemSelectItem (menuType,event){
  console.log("event:",event, menuType)
}

// Track button states
  private isButtonPressed: boolean = false;
  private isButtonHovered: boolean = false;
  private currentShapeId: string = "";
  public  currentShapeType: string = "";
  private pressTimer: any = null;
  public isEditMode: boolean = true;
  public showDiagramToolBar: boolean = true;
  
  // Context Menu properties
  public showContextMenu: boolean = true;
  public contextMenuX: number = 0;
  public contextMenuY: number = 0;
  public selectedShapeId: string | null = null;
  public clickedOnShape: boolean = false;
  private refreshDiagram(): void {
    this.shapes = [...this.shapes];
    this.editable = this.buildEditable();
  }
   // Toggle between Edit and View modes
 
  private showContextMenuAt(x: number, y: number, shapeId: string | null): void {
    this.contextMenuX = x;
    this.contextMenuY = y;
    this.selectedShapeId = shapeId;
    this.clickedOnShape = shapeId !== null;
    this.showContextMenu = true;
    
    console.log(`📋 Context Menu at (${x}, ${y})`);
    console.log(`   Clicked on: ${shapeId || "Empty Space"}`);
    console.log(`   Mode: ${this.isEditMode ? "EDIT" : "VIEW"}`);
  }
  public onItemMouseEnter(event: any): void {
    if (event.item) {
      console.log("Hovering over diagram element:", event.item);
    }
  }
public lastClickX: number = 0;
public lastClickY: number = 0;

// ===== CLICK HANDLER =====
  public onDiagramClick(event: any): void {
    let target = event.target.outerHTML;
    if (target.startsWith("<svg")) {
      console.log("Clicked on empty space");
      this.currentShapeId = "";
      this.currentShapeType = "";
      // this.showContextMenuAt(event.pageX, event.pageY, null);
    }
    this.lastClickX = event.offsetX || event.layerX || 0;
    this.lastClickY = event.offsetY || event.layerY || 0;
    //if (this.event.text != "FreeHand") {
      if (this.insertShapeFlag == true) {
        let shapeType = this.event.text;
        let options = null;
        if ( (shapeType == "Line") || (shapeType == "Polygon") || (shapeType == "Polyline")
        || (shapeType == "Polyline") || (shapeType == "Rectangle") || (shapeType == "Rounded Rectangle")
        || (shapeType == "Wedge") || (shapeType == "Arrow") || (shapeType == "Button")  
        || (shapeType == "Push Button") || (shapeType == "Momentry")  || (shapeType == "Maintained")
        || (shapeType == "Latched") || (shapeType == "Multistate") || (shapeType == "Interlocked")
        || (shapeType == "Ramp Button") || (shapeType == "Navigation Button") || (shapeType == "Time and Date Display")
        || (shapeType == "Tag Label") || (shapeType == "Local Message")|| (shapeType == "Text")
        || (shapeType == "BarGraph") || (shapeType == "Gauge")|| (shapeType == "Scale")
        || (shapeType == "Multiple") || (shapeType == "List Indicator") 
        || (shapeType == "Backspace")  || (shapeType == "End")  || (shapeType == "Enter") 
        || (shapeType == "Move Left")  || (shapeType == "Move Right")  || (shapeType == "Move Down") 
        || (shapeType == "Move Up")  || (shapeType == "Page Up")  || (shapeType == "Page Down") 
        || (shapeType == "Banner") || (shapeType == "Summary") || (shapeType == "Log Viewer") || (shapeType == "Status Explorer")
         )
          options = {
            width: 180,
            height: 24,
            text: "",
            fillColor: "#D3D3D3",
            x: this.lastClickX,
            y: this.lastClickY,
          };
       

        this.insertShape(shapeType, options);
        this.insertShapeFlag = false;

        setTimeout(() => {
          //this.ON_CLICK_CONTEXT_MENU(this.menuType,this.event);
        }, 500);
      }
    //}
    
    console.log(`📍 checking:Click: (${this.lastClickX}, ${this.lastClickY})`);

    // 🔑 Clear any existing timer
    if (this.clickTimer) {
      clearTimeout(this.clickTimer);
      this.clickTimer = null;
    }

    // 🔑 Set a timer to detect part on already-selected shapes
    //this.clickTimer = setTimeout(() => {
      this.detectPartAtClick(this.lastClickX, this.lastClickY, event);
      this.clickTimer = null;
    //}, 100);

    this.ON_CLICK(event);
  }
public onShapeClick(event: any): void {
    console.log("Pressing : onShapeClick:",event)
    this.lastClickX = event.offsetX || event.layerX || 0;
    this.lastClickY = event.offsetY || event.layerY || 0;
   
    this.currentShapeId = event.item.id;
    this.currentShapeType = event.item.type;


    console.log(`📍 checking:Click: (${this.lastClickX}, ${this.lastClickY})`);

    // 🔑 Clear any existing timer
    if (this.clickTimer) {
      clearTimeout(this.clickTimer);
      this.clickTimer = null;
    }
    console.log("Pressing : onShapeClick:this.currentShapeId:",this.currentShapeId)
    // 🔑 Set a timer to detect part on already-selected shapes


   
  }
public detectPartAtClick(clickX: number, clickY: number, event): void {
    // 🔑 Use currentShapeId if available
    let foundContainerId: string | null = this.currentShapeId;
    
    // If no last selected container, find which container was clicked
    if (!foundContainerId) {
        const containers = this.shapes;
        for (const container of containers) {
            if (clickX >= container.x && clickX <= container.x + container.width &&
                clickY >= container.y && clickY <= container.y + container.height) {
                foundContainerId = container.id;
                break;
            }
        }
    }
    
    if (!foundContainerId) {
        console.log('📍 Clicked on empty space');
        this.tooltipVisible = false;
        if (this.tooltipTimer) {
            clearTimeout(this.tooltipTimer);
            this.tooltipTimer = null;
        }
        return;
    }
    
    // Apply zoom + pan correction
    const zoom = this.zoomLevel || 1;
    const panX = this.currentPan?.x || 0;
    const panY = this.currentPan?.y || 0;
    
    const canvasX = (clickX / zoom) + (panX / zoom);
    const canvasY = (clickY / zoom) + (panY / zoom);
    
    console.log(`📍 checking:Viewport: (${clickX}, ${clickY})`);
    console.log(`🔍 checking:Zoom: ${zoom}, Pan: (${panX}, ${panY})`);
    console.log(`📍 checking:Canvas: (${canvasX}, ${canvasY})`);
    
    

   // const partId = this.findPartAt(canvasX, canvasY, foundContainerId);
   const partId = this.findPartAt(event);
  /////
   if(partId==="boilerStandLeft")
    {
        this.selectedPartId=partId;

        this.popupLeft=event.pageX+10;
        this.popupTop=event.pageY+10;

        this.popupVisible=true;
    }
    else
    {
        this.popupVisible=false;
    }
    ////
    if (partId) {
        console.log(`🎯 checking:Clicked on part: ${partId} in ${foundContainerId}`);
        // 🔑 FIX: Call onPartClicked with the part ID and container ID
        this.onPartClicked(partId, this.currentShapeId);
    } else {
        console.log(`📦 checking:Clicked on container: ${foundContainerId}`);
        this.tooltipVisible = false;
        if (this.tooltipTimer) {
            clearTimeout(this.tooltipTimer);
            this.tooltipTimer = null;
        }
    }
}

  public setContextMenu(currentShapeType) {
    console.log("currentShapeType:", currentShapeType)
    // Generate the JSON
    let diagramMenus = [];
    if (typeof this.diagramMenus == "undefined")
      return;
    if (currentShapeType == "") {
      diagramMenus = this.diagramMenus["DIAGRAM"]
    }
    else {
      diagramMenus = this.diagramMenus["OBJECT"]
    }
    console.log("diagramMenus:", diagramMenus, this.dbRows)
    const result = this.buildHierarchy(diagramMenus);
    this.items = result;
    console.log("this.items:", this.items)

  }
  
  public diagramMenus;
  public diagramMenu = "SCD_DIAGRAM_MENUS";
  async getMenu() {
    if (this.diagramMenu == "") {
      return;
    }
    let statement = "SELECT   * from " + this.diagramMenu + " order by MENU_TYPE, LINE_NO";
    let body = [
      {
        "_QUERY": "EXECSQL",
        "_STMT": statement
      }
    ];
    let data = await this.starServices.execSQLBody(this, body, "");
    if (this.paramConfig.DEBUG_FLAG) console.log("getMenu:data[0].data:", data[0].data);
    if (typeof data[0].data != "undefined") {
      this.diagramMenus = this.restructureMenuData(data[0].data);
      let ShapeMenu = this.diagramMenus["SHAPES"];
      this.ShapeMenu = this.buildHierarchy(ShapeMenu);
      
      //this.diagramMenus = data[0].data;
      if (this.paramConfig.DEBUG_FLAG) console.log("getMenu:this.diagramMenus:", this.diagramMenus);
    }
  }
  public restructureMenuData(data) {
    // First, group by MENU_TYPE
    const grouped = data.reduce((result, item) => {
      const menuType = item.MENU_TYPE;
      if (!result[menuType]) {
        result[menuType] = [];
      }

      // Add only the Menu and Item fields (renamed)
      result[menuType].push({
        Menu: item.MENU,
        Item: item.ITEM,
        Id : item.ID,
        dataItem : item
      });

      return result;
    }, {});

    // Note: Since we're processing in order of the original array
    // and the original data is already ordered by LINE_NO for each MENU_TYPE,
    // we don't need additional sorting. But to be safe, we can sort by LINE_NO
    // by referencing the original data:

    // Alternative approach that ensures sorting by LINE_NO:
    return grouped;
  }

  // ============= Server Management Methods (using integration service) =============
  
  async addNewServer(name, endpoint): Promise<void> {
        // const name = prompt('Enter server name:');
        // const endpoint = prompt('Enter OPC UA endpoint:');
        let  result;
        if (name && endpoint) {
            console.log("opcua:addNewServer:name", name, endpoint)
             result = await this.scadaIntegration.addServer(name, endpoint);
            if (result) {
                console.log('opcua:Server added:', result);
            } else {
                alert('opcua:Failed to add server');
            }
        }
        return result;
    }

  async removeServer(serverId: number): Promise<void> {
    if (confirm('Remove this server?')) {
      const result = await this.scadaIntegration.removeServer(serverId);
      if (result) {
        console.log('Server removed');
      } else {
        alert('Failed to remove server');
      }
    }
  }

  async writeTagValue(serverId: number, tagName: string, value: any): Promise<void> {
    const result = await this.scadaIntegration.writeTag(serverId, tagName, value);
    if (result.success) {
      console.log(`Successfully wrote ${value} to ${tagName}`);
    } else {
      console.error(`Failed to write: ${result.error}`);
    }
  }
  public AIFormOpened = false;
  public DSP_AIFormConfig: componentConfigDef;
  async saveFormCompletedHandler(value) {
    this.AIFormOpened = false;
    console.log("saveFormCompletedHandler:value:", value )
    
    // 🔑 RESET: Reset zoom and pan state
    this.zoomLevel = 1;
    this.currentPan = { x: 0, y: 0 };
    
    // 🔑 RESET: Clear any timers
    if (this.clickTimer) {
        clearTimeout(this.clickTimer);
        this.clickTimer = null;
    }
    if (this.tooltipTimer) {
        clearTimeout(this.tooltipTimer);
        this.tooltipTimer = null;
    }
    
    // 🔑 RESET: Hide tooltip
    this.tooltipVisible = false;
    
    // 🔑 RESET: Clear selection state
    this.lastClickX = 0;
    this.lastClickY = 0;

  // Diagram properties
    
  
  this.shapes = value.shapeOptions;
  this.connections = value.connections;
  //this.connectionDefaults = value.connectionDefaults;
  console.log("checking:current shapeDefaults:",JSON.stringify({...this.shapeDefaults}));
  //this.shapeDefaults = value.shapeDefaults;
  console.log("checking:new shapeDefaults:",JSON.stringify({...this.shapeDefaults}));
  //this.layout = value.layout;

  this.refreshDiagram();


  }
  public handleAI() {
    this.DSP_AIFormConfig = new componentConfigDef();
    var masterParams: any = {
      data:
      {
        USERNAME: this.starServices.MASTER_DB,
        "ACTION": "NEW"
      }
    }
    this.DSP_AIFormConfig.masterParams = masterParams
    this.AIFormOpened = true;



  }

  public actEditMode(isEditMode): void {
  this.isEditMode = isEditMode;
  
  if (this.isEditMode) {
      this.isDrag = true;
       this.isRotate = true;
       this.isResize = true;
       this.isRemove = true;
       this.editable = this.buildEditable();

    // Disable polling when entering edit mode
    this.scadaIntegration.disablePolling();
    console.log('Edit mode: SCADA polling stopped');
  } else {
      this.isDrag = false;
       this.isRotate = false;
       this.isResize = false;
       this.isRemove = false;
       this.editable = this.buildEditable();
    // Re-enable polling when exiting edit mode
    this.scadaIntegration.enablePolling();
    // Optionally refresh data immediately
    this.scadaIntegration.refreshData();
    console.log('View mode: SCADA polling resumed');
  }
  
  console.log("Mode changed to:", this.isEditMode ? "EDIT MODE" : "VIEW MODE");
 // this.refreshDiagram();
}

public tooltipVisible: boolean = false;
public tooltipX: number = 0;
public tooltipY: number = 0;
public tooltipText: string = '';
public clickTimer: any = null;
public tooltipTimer: any = null;
public onPartClicked(partId: string, containerId: string) {
    console.log(`🔧 Part clicked: ${partId} in ${containerId}`);
    
    // ✅ Clear any existing tooltip timer
    if (this.tooltipTimer) {
        clearTimeout(this.tooltipTimer);
        this.tooltipTimer = null;
    }
    
    // ✅ Show both container and part ID
    this.tooltipText = `📍 ${containerId} → ${partId}`;
    
    // Position tooltip at mouse location
    this.tooltipX = this.lastClickX + 20;
    this.tooltipY = this.lastClickY - 10;
    
    // Show tooltip
    this.tooltipVisible = true;
    
    // Auto-hide after 3 seconds
    this.tooltipTimer = setTimeout(() => {
        this.tooltipVisible = false;
        this.tooltipTimer = null;
    }, 3000);
}
public findPartAt(event): string | null {
    const node = (event.target as any)._kendoNode;
    if (!node) {
      return null;
    }
    const drawing = node.srcElement;

    let containerGroup;
    let index;

    // Wrapped element (Blower)
    if (
      drawing.parent &&
      drawing.parent.children &&
      drawing.parent.children.length === 1
    ) {

      const wrapper = drawing.parent;
      containerGroup = wrapper.parent;
      index = containerGroup.children.indexOf(wrapper);

    }
    // Direct element (Boiler)
    else {

      containerGroup = drawing.parent;
      index = containerGroup.children.indexOf(drawing);

    }
    const container = this.shapes.find(s => s.id === this.currentShapeId);

    if (!container)
      return null;
    
  const definition = container.dataItem.definition;
  if (typeof definition != "undefined"){
        const shapeCount = definition.shapes?.length || 0;

        let part;

        if (index < shapeCount) {

          part = definition.shapes[index];

        } else {

          part = definition.lines[index - shapeCount];

        }

        return part?.id ?? this.currentShapeId;
    }
  }
  public updateShapes(){
   if (this.isDiagramInitializing)
      return;
    let DiagramData = this.mapperFrom.DiagramData;
    this.form.markAsDirty();
    let shapes = {"shapes":this.shapes,  "connections": this.connections }
    let object ={};
    object[DiagramData] = JSON.stringify(shapes);
    this.form.patchValue(object);
    this.form.updateValueAndValidity();
}
public add_new_shape(
  kendoui_content,
  type,
  x: number = this.lastClickX,
  y: number = this.lastClickY,
  width?: number,
  height?: number
) {
  console.log ("add_new_shape:kendoui_content:",kendoui_content)
  let newShape: any = {
    "id": "boilerA",
    "x": x,
    "y": y,
    "dataItem": {
      "type": "boiler",
      "definition": {
        "shapeDefaults": {
          "visual": null,
          "fill": "#f0f4f8",
          "stroke": {
            "color": "#333333",
            "width": 1
          }
        },
        "connectionDefaults": {
          "stroke": {
            "color": "#555",
            "width": 2
          }
        },
        "layout": {
          "type": "layered",
          "subtype": "vertical"
        },
        "shapes": [],
        "lines": []
      },
      "title": "Boiler A (Primary)"
    }
  };

  if (typeof kendoui_content.shapeDefaults != "undefined") {
    newShape.dataItem.definition.shapeDefaults = kendoui_content.shapeDefaults;
  }
  if (typeof kendoui_content.connectionDefaults != "undefined") {
    newShape.dataItem.definition.connectionDefaults = kendoui_content.connectionDefaults;
  }
  if (typeof kendoui_content.layout != "undefined") {
    newShape.dataItem.definition.layout = kendoui_content.layout;
  }
  if (typeof kendoui_content.shapes != "undefined") {
    newShape.dataItem.definition.shapes = kendoui_content.shapes;
  }
  if (typeof kendoui_content.lines != "undefined") {
    newShape.dataItem.definition.lines = kendoui_content.lines;
  }

  newShape.id = kendoui_content.id;
  newShape.dataItem.title = type;
  newShape.dataItem.type = type;

  // New: carry the drag box size onto the model when supplied.
  if (width !== undefined)  newShape.width  = width;
  if (height !== undefined) newShape.height = height;

  newShape.x = x;
  newShape.y = y;

  console.log("kendoui_content:newShape:", newShape);

  const options: ShapeOptions = {
    id: newShape.id,
    x,
    y,
    ...(width  !== undefined ? { width }  : {}),
    ...(height !== undefined ? { height } : {}),
    dataItem: newShape.dataItem,
    visual: (args) => {
      const targetWidth  = args?.width  ?? width  ?? newShape.width;
      const targetHeight = args?.height ?? height ?? newShape.height;
      return this.drawDiagramFromDefinition(
        args.dataItem.definition,
        0,
        0,
        args.dataItem.editorStyle,
        targetWidth,
        targetHeight
      );
    }
  };

  const runtime = this.diagram.addShape(options, true);
  this.shapes.push(newShape);

  // Keep the persisted model in sync with the runtime bounds Kendo derived,
  // so the next save writes the dragged size rather than the definition's
  // natural size.
  if (runtime) {
    this.syncRuntimeShapeToModel(runtime);
  }
}

public popupVisible = false;

public popupLeft = 0;
public popupTop = 0;

public selectedPartId = "";
public ShapeMenu;
public selectedShape;
public valueChange_del(value: any): void {
  console.log ("valueChange:event:",event)
    // Only start a timer if a valid item was chosen (avoids loop on reset)
    if (value !== null && value !== undefined) {
      setTimeout(() => {
        this.selectedShape = null; // Reset selection to clear the text input
      }, 1000); // 1000 milliseconds = 3 seconds
    }
  }

//dialog 
 public propertyDialogVisible = false;
  public propertyDialogShapeType: string = '';
  public propertyDialogDefinition: any = null;
  public componentToRender: any = null;
  public winState;
  public dialogProperties = [{"Id":"41","Component":"Alarm_Status_Explorer","Width":"1000","Height":"800","Maximize":null},{"Id":"40","Component":"Alarm_and_Event_Log_Viewer_Properties","Width":"1000","Height":"800","Maximize":null},{"Id":"39","Component":"Alarm_and_Event_Summary_Properties","Width":"1000","Height":"880","Maximize":null},{"Id":"38","Component":"Alarm_and_Event_Banner_Properties","Width":"1000","Height":"880","Maximize":null},{"Id":"","Component":"","Width":"","Height":"","Maximize":""},{"Id":"1","Component":"Push_Button_Properties","Width":"1000","Height":"800","Maximize":""},{"Id":"10","Component":"Symbol_States_Properties","Width":"700","Height":"800","Maximize":""},{"Id":"11","Component":"Symbol_Properties","Width":"700","Height":"800","Maximize":""},{"Id":"12","Component":"List_Indicator_Properties","Width":"800","Height":"800","Maximize":""},{"Id":"13","Component":"List_Indicator_States_Properties","Width":"800","Height":"800","Maximize":""},{"Id":"14","Component":"Bar_Graph_Properties","Width":"800","Height":"800","Maximize":""},{"Id":"15","Component":"Gauge_Properties","Width":"700","Height":"700","Maximize":""},{"Id":"16","Component":"Scale_Properties","Width":"700","Height":"800","Maximize":""},{"Id":"17","Component":"Arrow_Button_Properties","Width":"700","Height":"700","Maximize":""},{"Id":"18","Component":"Arrow_Timing_Properties","Width":"700","Height":"800","Maximize":""},{"Id":"19","Component":"Arrow_Properties","Width":"700","Height":"700","Maximize":""},{"Id":"2","Component":"Text_Properties","Width":"900","Height":"900","Maximize":""},{"Id":"20","Component":"Control_List_Selector_Properties","Width":"700","Height":"700","Maximize":""},{"Id":"21","Component":"Display_List_Selector_Properties","Width":"700","Height":"700","Maximize":""},{"Id":"22","Component":"Message_Date_Properties","Width":"800","Height":"800","Maximize":""},{"Id":"23","Component":"Tag_Label_Properties","Width":"700","Height":"800","Maximize":""},{"Id":"24","Component":"Browser_Properties","Width":"700","Height":"500","Maximize":""},{"Id":"25","Component":"Piloted_List_Selector_Properties","Width":"700","Height":"700","Maximize":""},{"Id":"27","Component":"Numeric_Input_Properties","Width":"800","Height":"800","Maximize":""},{"Id":"28","Component":"Display_Settings_Screen","Width":"700","Height":"700","Maximize":""},{"Id":"29","Component":"SymbolFactoryPlus","Width":"700","Height":"800","Maximize":"Y"},{"Id":"3","Component":"Shape_Properties","Width":"700","Height":"500","Maximize":""},{"Id":"30","Component":"Display_Keys_Screen","Width":"700","Height":"700","Maximize":null},{"Id":"31","Component":"Javascript_Code_Screen","Width":"700","Height":"700","Maximize":null},{"Id":"32","Component":"Grid_Properties_Settings","Width":"500","Height":"350","Maximize":null},{"Id":"33","Component":"All_Alarms","Width":"700","Height":"700","Maximize":null},{"Id":"34","Component":"Arrow_Button_Timing","Width":"700","Height":"800","Maximize":null},{"Id":"35","Component":"Navigation_Button_Properties","Width":"700","Height":"800","Maximize":null},{"Id":"36","Component":"Ramp_Button_Timing","Width":"700","Height":"800","Maximize":null},{"Id":"37","Component":"Local_Message_Properties","Width":"700","Height":"800","Maximize":null},{"Id":"4","Component":"Button_Properties","Width":"800","Height":"800","Maximize":""},{"Id":"5","Component":"Numeric_Display_Properties","Width":"1000","Height":"700","Maximize":""},{"Id":"7","Component":"String_Display_Properties","Width":"700","Height":"800","Maximize":""},{"Id":"8","Component":"String_Input_Properties","Width":"700","Height":"800","Maximize":""},{"Id":"9","Component":"Multistate_Indicator_Properties","Width":"800","Height":"800","Maximize":""}]
  dialog_getComponentToRender(shapeType: string,Maximize): any {
    this.winState = null;
    if (Maximize == 'Y'){
      this.winState = "maximized";
    }

    	switch (shapeType) {
		case '41': 
		return ScdAlarmStatusExplorerComponent; 
		case '40': 
		return ScdAlarmAndEventLogViewerPropertiesComponent; 
		case '39': 
		return ScdAlarmAndEventSummaryPropertiesComponent; 
		case '38': 
		return ScdAlarmAndEventBannerPropertiesComponent; 
		case '1': 
		return ScdPushButtonPropertiesComponent; 
		case '10': 
		return ScdSymbolStatesPropertiesComponent; 
		case '11': 
		return ScdSymbolPropertiesComponent; 
		case '12': 
		return ScdListIndicatorPropertiesComponent; 
		case '13': 
		return ScdListIndicatorStatesPropertiesComponent; 
		case '14': 
		return ScdBarGraphPropertiesComponent; 
		case '15': 
		return ScdGaugePropertiesComponent; 
		case '16': 
		return ScdScalePropertiesComponent; 
		case '17': 
		return ScdArrowButtonPropertiesComponent; 
		case '18': 
		return ScdArrowTimingPropertiesComponent; 
		case '19': 
		return ScdArrowPropertiesComponent; 
		case '2': 
		return ScdTextPropertiesComponent; 
		case '20': 
		return ScdControlListSelectorPropertiesComponent; 
		case '21': 
		return ScdDisplayListSelectorPropertiesComponent; 
		case '22': 
		return ScdMessageDatePropertiesComponent; 
		case '23': 
		return ScdTagLabelPropertiesComponent; 
		case '24': 
		return ScdBrowserPropertiesComponent; 
		case '25': 
		return ScdPilotedListSelectorPropertiesComponent; 
		case '27': 
		return ScdNumericInputPropertiesComponent; 
		case '28': 
		return ScdDisplaySettingsScreenComponent; 
		case '29': 
		return ScdSymbolfactoryplusComponent; 
		case '3': 
		return ScdShapePropertiesComponent; 
		case '30': 
		return ScdDisplayKeysScreenComponent; 
		case '31': 
		return ScdJavascriptCodeScreenComponent; 
		case '32': 
		return ScdGridPropertiesSettingsComponent; 
		case '33': 
		return ScdAllAlarmsComponent; 
		case '34': 
		return ScdArrowButtonTimingComponent; 
		case '35': 
		return ScdNavigationButtonPropertiesComponent; 
		case '36': 
		return ScdRampButtonTimingComponent; 
		case '37': 
		return ScdLocalMessagePropertiesComponent; 
		case '4': 
		return ScdButtonPropertiesComponent; 
		case '5': 
		return ScdNumericDisplayPropertiesComponent; 
		case '7': 
		return ScdStringDisplayPropertiesComponent; 
		case '8': 
		return ScdStringInputPropertiesComponent; 
		case '9': 
		return ScdMultistateIndicatorPropertiesComponent; 
	default:
	return null;
	}

  }
  /////////
  public propertyDialogData: {
    id: string;
    title: string;
    component: any;
    inputs: any;
    outputs: any;
    isVisible: boolean;
    isDirty: boolean;
    componentInstance: any;
    width: number;
    height: number;
    state: 'default' | 'maximized'; // <-- FIX: Use specific type
    comp: string;            // dialog id, e.g. '4'
    componentName: string;   // e.g. 'Button_Properties'
    shapeId: string | null;
    shapeType: string | null;
  } | null = null;

  // Keep track of the last instance to avoid re-subscribing endlessly
  private lastPropertyDialogInstance: any = null;

  // Store component ref for cleanup
  private propertyDialogComponentRef: ComponentRef<any> | null = null;

  /**
   * Open property dialog - Replacement for starlib1.dialog_openDialog
   * Similar to openWin in scd-mdi-win.component.ts
   */
 public openPropertyDialog(object: any, comp: string, Maximize: string, shapeType,action,SHAPE_ID,title): void {
  console.log('openPropertyDialog: comp:', comp, 'Maximize:', Maximize, shapeType);
  //if (typeof shapeType !="undefined"){
  //  shapeType = shapeType.toLowerCase();
  //}
  
  // Find the dialog properties
  const dialogDef = this.dialogProperties.find(x => x.Id === comp);
  
  if (!dialogDef) {
    console.error('Dialog definition not found for comp:', comp);
    return;
  }
  
  const componentToRender = this.dialog_getComponentToRender(comp, Maximize);
  
  if (!componentToRender) {
    console.error('No component found for comp:', comp);
    return;
  }

  // Create componentConfig for the dialog
  const componentConfig = new componentConfigDef();
  componentConfig.masterParams = {
    data: {
      comp: comp,
      maximize: Maximize,
      action : action,
      DISPLAY_ID:this.form.value.DISPLAY_ID,
      SHAPE_TYPE: shapeType,
      SHAPE_ID : SHAPE_ID
    }
  };

  // Get the component name for the title
  const componentName = dialogDef.Component || comp;
  if (title == '' || title == null) {
    title = this.getDialogTitle(componentName);
  }

  // Set property dialog data
  this.propertyDialogData = {
    id: `property_${comp}_${Date.now()}`,
    title: title,
    component: componentToRender,
    inputs: {
      setComponentConfig_Input: componentConfig
    },
    outputs: {},
    isVisible: true,
    isDirty: false,
    componentInstance: null,
    width: parseInt(dialogDef.Width) || 700,
    height: parseInt(dialogDef.Height) || 500,
    state: Maximize === 'Y' ? 'maximized' : 'default',
    comp: comp,
    componentName: componentName,
    shapeId: SHAPE_ID ?? null,
    shapeType: shapeType ?? null
  };

  // Reset flags
  this.lastPropertyDialogInstance = null;
  this.isPropertyDialogCreated = false;
  
  // Force change detection to render the window
  this.cdr.detectChanges();
  
  // Create the component after the view is rendered
  setTimeout(() => {
    this.createPropertyDialogComponent();
  }, 100);
  
  console.log('openPropertyDialog: Dialog opened:', dialogDef);
}

  /**
   * Handle property dialog close - similar to onCloseWindow in scd-mdi-win.component.ts
   */
public onPropertyDialogClose(): void {
  console.log('onPropertyDialogClose: Checking for unsaved changes...');
  
  if (this.propertyDialogData && this.propertyDialogData.isDirty) {
    // Show confirmation dialog - same as MDI windows
    this.showPropertyDialogSaveConfirmation();
  } else {
    // Close immediately
    this.closePropertyDialog();
    if (typeof this.starServices.sessionParams['COPIED_SHAPE'] != "undefined"
      && this.starServices.sessionParams['COPIED_SHAPE'] != "") {
        this.armDragTool("SYMPOL_FACTORY");
     
    }
  }
}

  /**
   * Show save confirmation dialog - similar to showCloseConfirmationDialog in scd-mdi-win.component.ts
   */
 private showPropertyDialogSaveConfirmation(): void {
  console.log('showPropertyDialogSaveConfirmation: Opening dialog for property dialog');
  
  const dialog = this.dialogService.open({
    title: 'Unsaved Changes',
    content: 'You have unsaved changes. What would you like to do?',
    actions: [
      { 
        text: 'Save', 
        themeColor: 'primary'
      },
      { 
        text: "Don't Save",
        themeColor: 'base'
      },
      { 
        text: 'Cancel',
        themeColor: 'base'
      }
    ],
    width: 450,
    minWidth: 300,
    // You can also add custom CSS class for z-index
    cssClass: 'confirmation-dialog-on-top'
  });

  // Subscribe to the result of the dialog - Same as MDI windows
  dialog.result.subscribe((result: any) => {
    console.log('showPropertyDialogSaveConfirmation: Dialog result:', result);
    
    // Check the text property of the action
    if (result && result.text === 'Save') {
      console.log('showPropertyDialogSaveConfirmation: User selected Save');
      this.handlePropertyDialogSave();
    } else if (result && result.text === "Don't Save") {
      console.log('showPropertyDialogSaveConfirmation: User selected Don\'t Save');
      this.closePropertyDialog();
    } else {
      // Cancel or closed without action
      console.log('showPropertyDialogSaveConfirmation: User cancelled or closed dialog');
    }
  });
}

  /**
   * Handle property dialog save - similar to handleSaveAction in scd-mdi-win.component.ts
   */
private async handlePropertyDialogSave(): Promise<void> {
  if (!this.propertyDialogData || !this.propertyDialogData.componentInstance) {
    console.error('handlePropertyDialogSave: No component instance found');
    return;
  }

  const componentInstance = this.propertyDialogData.componentInstance;
  console.log('handlePropertyDialogSave: Sending masterSaved to component:', componentInstance.constructor?.name);

  // Create a new componentConfig with masterSaved = true
  // This will trigger the @Input() setter in the child component
  // Exactly like mdi-window's handleSaveAction
  const config = new componentConfigDef();
  config.masterSaved = true;

  // Assign to the component's setComponentConfig_Input setter
  // This calls handleComponentConfig which detects masterSaved and calls saveChanges
  componentInstance.setComponentConfig_Input = config;

  console.log('handlePropertyDialogSave: masterSaved sent to component');

  // Wait a moment for the save to complete
  await this.starServices.sleep(500);

  // Close the dialog after save
  this.closePropertyDialog();
}

  /**
   * Close property dialog and cleanup
   */
private closePropertyDialog(): void {
  const closedComponent = this.propertyDialogData?.componentName;  // e.g. 'Button_Properties'
  const closedShapeId   = this.propertyDialogData?.shapeId; 
  const closedShapeType = this.propertyDialogData?.shapeType;      // 'button'
  console.log('closePropertyDialog: Closing property dialog:closedComponent:',
    closedComponent, closedShapeId, closedShapeType);
  
  if (this.propertyDialogData) {
    this.propertyDialogData.isVisible = false;
  }
  
  // Destroy component ref
  if (this.propertyDialogComponentRef) {
    this.propertyDialogComponentRef.destroy();
    this.propertyDialogComponentRef = null;
  }
  
  // Clean up
  this.lastPropertyDialogInstance = null;
  this.isPropertyDialogCreated = false;
  this.propertyDialogData = null;
  
  // Force change detection
  this.cdr.detectChanges();
  this.updateShapeInfoArr(closedShapeType, closedShapeId)
}

  /**
   * Listen to outputs from the property dialog component
   * Similar to the pattern in mdi-window but using ViewContainerRef
   */
  @ViewChild('propertyDialogContainer', { read: ViewContainerRef, static: false }) 
  propertyDialogContainer!: ViewContainerRef;

  private isPropertyDialogCreated = false;


 private createPropertyDialogComponent(): void {
  // Check if already created
  if (this.isPropertyDialogCreated) {
    console.log('Property dialog already created');
    return;
  }

  if (!this.propertyDialogData || !this.propertyDialogData.isVisible) {
    console.log('No property dialog data or not visible');
    return;
  }

  if (!this.propertyDialogContainer) {
    console.log('propertyDialogContainer not available, retrying...');
    // Retry after a delay
    setTimeout(() => {
      this.createPropertyDialogComponent();
    }, 200);
    return;
  }

  try {
    console.log('Creating property dialog component:', this.propertyDialogData.component.name);
    
    // Clear the container
    this.propertyDialogContainer.clear();

    // Create the component
    this.propertyDialogComponentRef = this.propertyDialogContainer.createComponent(
      this.propertyDialogData.component
    );

    console.log('Component created successfully:', this.propertyDialogComponentRef);

    // Set inputs
    if (this.propertyDialogData.inputs) {
      Object.keys(this.propertyDialogData.inputs).forEach(key => {
        if (this.propertyDialogComponentRef) {
          console.log('Setting input:', key, this.propertyDialogData.inputs[key]);
          this.propertyDialogComponentRef.instance[key] = this.propertyDialogData.inputs[key];
        }
      });
    }

    // Store component instance
    if (this.propertyDialogComponentRef) {
      this.propertyDialogData.componentInstance = this.propertyDialogComponentRef.instance;
      console.log('Property dialog child component created:', this.propertyDialogData.componentInstance.constructor?.name);
    }

    // Set up output subscriptions
    this.setupPropertyDialogOutputs();

    // Trigger change detection
    if (this.propertyDialogComponentRef) {
      this.propertyDialogComponentRef.changeDetectorRef.detectChanges();
    }

    this.isPropertyDialogCreated = true;

  } catch (error) {
    console.error('Error creating property dialog component:', error);
  }
}

private setupPropertyDialogOutputs(): void {
  if (!this.propertyDialogComponentRef || !this.propertyDialogData) return;

  const instance = this.propertyDialogComponentRef.instance;
  console.log('Setting up outputs for instance:', instance);

  // Check for setComponentConfig_Output
  if (instance.setComponentConfig_Output instanceof EventEmitter) {
    console.log('Property dialog: Found setComponentConfig_Output, subscribing...');
    // Clean up previous subscription if exists
    if ((instance.setComponentConfig_Output as any).__propertyDialogSub) {
      (instance.setComponentConfig_Output as any).__propertyDialogSub.unsubscribe();
    }
    
    const sub = instance.setComponentConfig_Output.subscribe((componentConfig: any) => {
      console.log('Property dialog: Received componentConfig from child:', componentConfig, this.propertyDialogData);
      if (this.propertyDialogData) {
        // Check for parentClose - close the dialog immediately
        console.log("Property dialog: Received componentConfig from child:componentConfig.parentClose:",componentConfig.parentClose);
        if (componentConfig.parentClose === true) {
          console.log('Property dialog: parentClose received, closing dialog');
          //this.closePropertyDialog();
          this.onPropertyDialogClose();
          return;
        }
        
        // Update dirty state
        this.propertyDialogData.isDirty = componentConfig.isDirty === true;
        console.log("Property dialog: Received componentConfig from child:componentConfig.masterSaved:",componentConfig.masterSaved);
        // Check for masterSaved - this means OK was clicked
        if (componentConfig.masterSaved === true) {
          console.log('Property dialog: masterSaved received, saving and closing');
          // The component already saved, just close the dialog
          setTimeout(() => {
            this.closePropertyDialog();
          }, 300);
        }
        console.log("Property dialog: Received componentConfig from child:componentConfig.masterParams:",componentConfig.masterParams);
        if (componentConfig.masterParams !== null){
          if ( componentConfig.masterParams.action == "insert"){
            console.log("Property dialog: Received componentConfig from child:componentConfig.masterParams:",componentConfig.masterParams);
            //this.insertShape (componentConfig.masterParams.data, componentConfig.masterParams.shapeType)
          }
        }

      }
    });
    
    (instance.setComponentConfig_Output as any).__propertyDialogSub = sub;
  }

  // Check for saveCompletedOutput
  if (instance.saveCompletedOutput instanceof EventEmitter) {
    console.log('Property dialog: Found saveCompletedOutput, subscribing...');
    if ((instance.saveCompletedOutput as any).__propertyDialogSub) {
      (instance.saveCompletedOutput as any).__propertyDialogSub.unsubscribe();
    }
    
    const sub = instance.saveCompletedOutput.subscribe((data: any) => {
      console.log('Property dialog: saveCompletedOutput received:', data);
      if (this.propertyDialogData) {
        this.propertyDialogData.isDirty = false;
      }
    });
    
    (instance.saveCompletedOutput as any).__propertyDialogSub = sub;
  }
}

private getDialogTitle(componentName: string): string {
    // Map component names to display titles
    let titleMsg = componentName.split("_").join(" ");
    return titleMsg;
  }

onContextMenuSelect(event){
  console.log("DEBUG_IT:onContextMenuSelect:event:",event)
  this.ON_CLICK_CONTEXT_MENU('CONTEXT_MENU', event)
   event.preventDefault();
   //event.stopPropagation();  
}
onDiagramContextMenu(event){
  console.log("DEBUG_IT:onDiagramContextMenu:event:",event)
   this.insertShapeFlag = false;
  
}
public scdShapes;
public getShapeInfo(){
  let array = this.currentShapeId.split(":");
  let shapeID = array[1];
  let shapeInfo ={};
  if (typeof this.scdShapes != "undefined" ){
    let rec = this.scdShapes.find(x => x.SHAPE_ID == shapeID);
    if ( typeof rec != "undefined")
      shapeInfo = rec;
  }

  return shapeInfo;
}
private readonly shapeTablesMap: Record<string, string[]> = {
  'Numeric Display':      ['SCD_SHAPE_DISPLAY_GENERAL'],
  'String Display':       ['SCD_SHAPE_DISPLAY_GENERAL'],
  'Time and Date Display':['SCD_MESSAGE_GENERAL'],
  'Tag Label':            ['SCD_TAG_LABEL_GENERAL'],
  'Local Message':        ['SCD_MESSAGE_GENERAL', 'SCD_SHAPE_CONNECTION'],
  'Text':                 ['SCD_TEXT_GENERAL'],
  'Numeric Input':        ['SCD_SHAPE_INPUT_GENERAL', 'SCD_SHAPE_INPUT_APPEARANCE', 'SCD_SHAPE_CONNECTION'],
  'String Input':         ['SCD_SHAPE_INPUT_GENERAL', 'SCD_SHAPE_INPUT_APPEARANCE'],
  'BarGraph':             ['SCD_GRAPH_GENERAL', 'SCD_SHAPE_CONNECTION'],
  'Scale':                ['SCD_GRAPH_GENERAL'],
  'Gauge':                ['SCD_GRAPH_GENERAL', 'SCD_GAUGE_DISPLAY', 'SCD_SHAPE_CONNECTION'],
  'Multiple':             ['SCD_MULTISTATE_INDICATOR_GENERAL','SCD_SHAPE_STATE', 'SCD_SHAPE_STATE', 'SCD_SHAPE_STATE', 'SCD_SHAPE_STATE','SCD_SHAPE_CONNECTION'],
  'ListIndicator':        ['SCD_LIST_INDICATOR_GENERAL','SCD_LIST_INDICATOR_STATE','SCD_LIST_INDICATOR_STATE','SCD_LIST_INDICATOR_STATE', 'SCD_LIST_INDICATOR_STATE','SCD_SHAPE_CONNECTION'],
  'Backspace':            ['SCD_ARROW_BUTTON_GENERAL', 'SCD_ARROW_BUTTON_LABEL'],
  'End':                  ['SCD_ARROW_BUTTON_GENERAL', 'SCD_ARROW_BUTTON_LABEL'],
  'Enter':                ['SCD_ARROW_BUTTON_GENERAL', 'SCD_ARROW_BUTTON_LABEL'],
  'Move Left':            ['SCD_BUTTON_PUSH_GENERAL', 'SCD_ARROW_BUTTON_LABEL', 'SCD_ARROW_BUTTON_TIMING'],
  'Move Right':           ['SCD_BUTTON_PUSH_GENERAL', 'SCD_ARROW_BUTTON_LABEL', 'SCD_ARROW_BUTTON_TIMING'],
  'Move Down':            ['SCD_BUTTON_PUSH_GENERAL', 'SCD_ARROW_BUTTON_LABEL', 'SCD_ARROW_BUTTON_TIMING'],
  'Move Up':              ['SCD_BUTTON_PUSH_GENERAL', 'SCD_ARROW_BUTTON_LABEL', 'SCD_ARROW_BUTTON_TIMING'],
  'Page Up':              ['SCD_BUTTON_PUSH_GENERAL', 'SCD_ARROW_BUTTON_LABEL', 'SCD_ARROW_BUTTON_TIMING'],
  'Page Down':            ['SCD_BUTTON_PUSH_GENERAL', 'SCD_ARROW_BUTTON_LABEL', 'SCD_ARROW_BUTTON_TIMING'],
  'Momentry':             ['SCD_BUTTON_PUSH_GENERAL', 'SCD_SHAPE_CONNECTION','SCD_SHAPE_STATE', 'SCD_SHAPE_STATE', 'SCD_SHAPE_STATE'],
  'Maintained':           ['SCD_BUTTON_PUSH_GENERAL', 'SCD_SHAPE_CONNECTION','SCD_SHAPE_STATE', 'SCD_SHAPE_STATE', 'SCD_SHAPE_STATE'],
  'Latched':              ['SCD_BUTTON_PUSH_GENERAL', 'SCD_SHAPE_CONNECTION','SCD_SHAPE_STATE', 'SCD_SHAPE_STATE', 'SCD_SHAPE_STATE'],
  'Interlocked':          ['SCD_BUTTON_PUSH_GENERAL', 'SCD_SHAPE_CONNECTION','SCD_SHAPE_STATE', 'SCD_SHAPE_STATE'],
  'Multistate':           ['SCD_BUTTON_PUSH_GENERAL', 'SCD_SHAPE_CONNECTION','SCD_ARROW_BUTTON_TIMING','SCD_SHAPE_STATE', 'SCD_SHAPE_STATE', 'SCD_SHAPE_STATE'],
  'Ramp Button':          ['SCD_BUTTON_PUSH_GENERAL', 'SCD_SHAPE_CONNECTION','SCD_ARROW_BUTTON_TIMING', 'SCD_SHAPE_STATE'],
  'Navigation Button':    ['SCD_BUTTON_PUSH_GENERAL', 'SCD_SHAPE_STATE', 'SCD_SHAPE_STATE'],
  'Panel':                ['SCD_SHAPE_GENERAL'],
  'Arc':                  ['SCD_SHAPE_GENERAL'],
  'Elipse':               ['SCD_SHAPE_GENERAL'],
  'FreeHand':             ['SCD_SHAPE_GENERAL'],
  'Line':                 ['SCD_SHAPE_GENERAL'],
  'Polygon':              ['SCD_SHAPE_GENERAL'],
  'Polyline':             ['SCD_SHAPE_GENERAL'],
  'Rectangle':            ['SCD_SHAPE_GENERAL'],
  'Rounded Rectangle':    ['SCD_SHAPE_GENERAL'],
  'Wedge':                ['SCD_SHAPE_GENERAL'],
  'Arrow Horizontal':     ['SCD_SHAPE_GENERAL'],
  'Arrow Vertical':       ['SCD_SHAPE_GENERAL'],
  'Button':               ['SCD_BUTTON_GENERAL', 'SCD_BUTTON_ACTION','SCD_BUTTON_APPEARANCE', 'SCD_BUTTON_APPEARANCE', 'SCD_BUTTON_APPEARANCE'],
  'Banner':               ['SCD_ALARM_GENERAL_BANNER','SCD_ALARM_COLUMNS', 'SCD_ALARM_COLUMNS', 'SCD_ALARM_COLUMNS','SCD_ALARM_EVENT_SUBSCRIPTIONS','SCD_ALARM_STATES','SCD_ALARM_SORT'],
  'Summary':              ['SCD_ALARM_APPEARANCE','SCD_ALARM_COLUMNS','SCD_ALARM_EVENT_SUBSCRIPTIONS','SCD_ALARM_STATES','SCD_ALARM_SORT','SCD_ALARM_BEHAVIOR'],
  'Log Viewer':           ['SCD_ALARM_GENERAL_LOG_VIEWER','SCD_ALARM_COLUMNS', 'SCD_ALARM_COLUMNS','SCD_ALARM_STATES','SCD_ALARM_SORT'],
  'Status Explorer':      ['SCD_ALARM_GENERAL_STATUS_EXPLORER'],
};
public getInsertTables(shapeType: string): string[] {
  let shapeTypeTitle = this.tablesKeyByKind[shapeType] ?? this.libraryShapeTitle(shapeType)
  const tables = this.shapeTablesMap[shapeType] ?? [];
  return tables.map(table => `INSERT_${table}`);
}
   async insertSCDShapeTables(shapeID, shapeType) {
    function groupByFieldName<T extends { FIELD_NAME: string; FIELD_VALUE: any }>(
      data: T[]
    ): Array<Array<{ FIELD_NAME: string; FIELD_VALUE: any }>> {
      if (!data?.length) return [];

      // Counter: how many items of each FIELD_NAME we've already placed
      const counters: Record<string, number> = {};

      // Result buckets — each entry is now a trimmed { FIELD_NAME, FIELD_VALUE }
      const groups: Array<Array<{ FIELD_NAME: string; FIELD_VALUE: any }>> = [];

      for (const item of data) {
        const key = item.FIELD_NAME;
        const idx = counters[key] ?? 0;

        // Make sure the bucket exists
        if (!groups[idx]) groups[idx] = [];

        // Push only the two fields we care about
        groups[idx].push({
          FIELD_NAME: item.FIELD_NAME,
          FIELD_VALUE: item.FIELD_VALUE,
        });

        counters[key] = idx + 1;
      }

      return groups;
    }
    console.log("insertSCDShapeTables:shapeType:", shapeType)
    let tables = [];

    tables = this.getInsertTables(shapeType);

    console.log("insertSCDShapeTables:tables:", shapeType, tables)
    let butApp = 0;
    let ALARM_COLUMNS = 0;
    if (tables.length > 0) {
      for (let i = 0; i < tables.length; i++) {
        let useshapeType = null;
        if (tables[i] == "INSERT_SCD_SHAPE_CONNECTION") {
          useshapeType = shapeType;
          if ((shapeType == "Maintained") || (shapeType == "Multistate"))
            useshapeType = "Momentry";
        }
        if ( (tables[i] == "INSERT_SCD_ALARM_COLUMNS") && (shapeType == "Banner") ) {
          if (ALARM_COLUMNS == 0)
            useshapeType = shapeType;
          if (ALARM_COLUMNS == 1)
            useshapeType = "Status Bar Panel";
          if (ALARM_COLUMNS == 2)
            useshapeType = "Status Bar Button";
            ALARM_COLUMNS++;
        }
        if ( (tables[i] == "INSERT_SCD_ALARM_COLUMNS") && (shapeType == "Log Viewer") ) {
          if (ALARM_COLUMNS == 0)
            useshapeType = shapeType;
          if (ALARM_COLUMNS == 1)
            useshapeType = "Toolbar";
            ALARM_COLUMNS++;
        }
        if  (tables[i] == "INSERT_SCD_ALARM_STATES"){
            useshapeType = shapeType;
        }
        if ( (tables[i] == "INSERT_SCD_ALARM_COLUMNS") && (shapeType == "Summary") ) {
            useshapeType = shapeType;
        }

        let TableDefauls = await this.starlib1.setShapeDefaults(tables[i], useshapeType);
        console.log("insertSCDShapeTables:TableDefauls:", JSON.stringify(TableDefauls));
        let TableDefaulsArr = groupByFieldName(TableDefauls);
        console.log("insertSCDShapeTables:TableDefauls:new", TableDefaulsArr);
        for (let k = 0; k < TableDefaulsArr.length; k++) {
          TableDefauls = TableDefaulsArr[k];
          console.log("insertSCDShapeTables:TableDefauls:new", TableDefauls);
          const keys = Object.keys(TableDefauls);
          console.log("insertSCDShapeTables:keys:", keys)
          let object = {};
          for (let j = 0; j < TableDefauls.length; j++) {
            let field = TableDefauls[j].FIELD_NAME;
            let val = TableDefauls[j].FIELD_VALUE;
            object[field] = val;
          }
          
          if (typeof object != "undefined" && Object.keys(object).length > 0) {
            object['SHAPE_ID'] = shapeID;
            object['_QUERY'] = tables[i];
            console.log("insertSCDShapeTables:object:", object)
            if (tables[i] == "INSERT_SCD_SHAPE_STATE") {
              if (shapeType == "Navigation Button") {
                if (butApp == 0)
                  object['STATE_NAME'] = "ACTIVE";
                else if (butApp == 1)
                  object['STATE_NAME'] = "INACTIVE";
                console.log("insertSCDShapeTables:shapeType:", butApp, shapeType, tables[i], object['BUTTON_APPEARANCE'], )
                butApp++;
              }
              else if ( (shapeType == "Maintained") || (shapeType == "Momentry") || (shapeType == "Latched") 
                || (shapeType == "Multistate") || (shapeType == "Interlocked") || (shapeType == "Multiple") 
                || (shapeType == "ListIndicator") 
                ) {
                if (butApp == 0){
                  object['STATE_NAME'] = "State0";
                  object['STATE_ID'] = "0";
                  object['VALUE'] = "0";
                }
                else if (butApp == 1){
                  object['STATE_NAME'] = "State1";
                  object['STATE_ID'] = "1";
                  object['VALUE'] = "1";
                }
                else if (butApp == 2){
                  object['STATE_NAME'] = "Error";
                  if (shapeType == "Multiple") 
                    object['STATE_NAME'] = "State2";
                  object['STATE_ID'] = "2";
                  object['VALUE'] = "2";
                }
                else if (butApp == 3){
                  object['STATE_NAME'] = "Error";
                  object['STATE_ID'] = "3";
                  object['VALUE'] = "3";
                }

                console.log("insertSCDShapeTables:shapeType:", butApp, shapeType, tables[i], object['BUTTON_APPEARANCE'], )
                butApp++;
              }
              else if (shapeType == "Ramp Button") {
                if (butApp == 0)
                  object['STATE_NAME'] = "LABEL";
                console.log("insertSCDShapeTables:shapeType:", butApp, shapeType, tables[i], object['BUTTON_APPEARANCE'], )
                butApp++;
              }
            }
            if (tables[i] == "INSERT_SCD_LIST_INDICATOR_STATE") {
                if (butApp == 0){
                  object['STATE_NAME'] = "State0";
                  object['STATE_ID'] = "0";
                  object['VALUE'] = "0";
                }
                else if (butApp == 1){
                  object['STATE_NAME'] = "State1";
                  object['STATE_ID'] = "1";
                  object['VALUE'] = "1";
                }
                else if (butApp == 2){
                  object['STATE_NAME'] = "State2";
                  object['STATE_ID'] = "2";
                  object['VALUE'] = "2";
                }
                else if (butApp == 3){
                  object['STATE_NAME'] = "State3";
                  object['STATE_ID'] = "3";
                  object['VALUE'] = "3";
                }
                else if (butApp == 4){
                  object['STATE_NAME'] = "State4";
                  object['STATE_ID'] = "4";
                  object['VALUE'] = "4";
                }

                console.log("insertSCDShapeTables:shapeType:", butApp, shapeType, tables[i], object['BUTTON_APPEARANCE'], )
                butApp++;
              
            }
            if (tables[i] == "INSERT_SCD_BUTTON_APPEARANCE") {
                  if (butApp == 0)
                  object['BUTTON_APPEARANCE'] = "UP";
                else if (butApp == 1)
                  object['BUTTON_APPEARANCE'] = "DOWN";
                else if (butApp == 2)
                  object['BUTTON_APPEARANCE'] = "DISABLED";
                butApp++;
            }
            if (tables[i] == "INSERT_SCD_GRAPH_GENERAL") {
              if (shapeType == "Gauge"){
                object['BACK_COLOR'] = " #D3D3D3";
                object['FILL_COLOR'] = "#AAFF00";
              }
              else if (shapeType == "Scale"){
                object['BACK_COLOR'] = " #000000";
              }
            }
            let body = [];
            body.push(object);
            console.log("insertSCDShapeTables:body:", body)
            this.saveShapesInfo(body)
            let data = await this.starServices.execSQLBody(this, body, "");
            if (this.paramConfig.DEBUG_FLAG) console.log("insertSCDShapeTables:", data);
          }
        }
      }
    }
    console.log ("this.ShapesInfo:",JSON.stringify(this.ShapesInfo));
    let newGrouped = this.groupBodyByShapeId(this.ShapesInfo);
    this.ShapesInfoArr = { ...this.ShapesInfoArr, ...newGrouped };
    console.log ("this.ShapesInfoArr:",newGrouped, this.ShapesInfoArr);
  }

  private  selectTables(shapeType: string): string[] {
      const tables = this.shapeTablesMap[shapeType] ?? [];
      return Array.from(new Set(tables));
    }

async updateShapeInfoArr (shapeType, shapesID){
    
    let tables = this.selectTables(shapeType);
    //let tables = this.shapeTablesMap[shapeType];
  
      console.log ("updateShapeInfoArr:",tables, this.shapeTablesMap, shapeType)
    if (typeof tables != "undefined"){
      tables.push('SCD_SHAPE')
      const whereShapesInfo = `SHAPE_ID IN (${shapesID})`;
        const bodyShapesInfo = tables.map(table => ({
        "_QUERY": `GET_${table}_QUERY`,
        "_WHERE": whereShapesInfo
      }));

            console.log ("bodyShapesInfo:",bodyShapesInfo)
      let dataShapesInfo = await this.starServices.execSQLBody(this, bodyShapesInfo, "");
      if (this.paramConfig.DEBUG_FLAG) console.log("updateShapeInfoArr:dataShapesInfo[0].data:", dataShapesInfo);
      if (typeof dataShapesInfo[0].data != "undefined"){
        let newGrouped = this.formatShapesInfoResponse(dataShapesInfo);
        if (this.paramConfig.DEBUG_FLAG) {
          console.log("updateShapeInfoArr:newGrouped:", newGrouped);
        }  
        this.ShapesInfoArr = { ...this.ShapesInfoArr, ...newGrouped };
        let dwgShapeId = shapeType + ":" + shapesID
        const shape = this.diagram?.getShapeById(dwgShapeId);
        console.log ("checkdatItem:updateShapeInfoArr:shape:", shape);
        if (shape) {
          let dataItem = this.shapeDataItem(shape);
          let shapeType = dataItem.libraryKind;
          
            let options:any = {};
            this.populateshapeAttributes(options,shapeType.toLowerCase(),dwgShapeId);
            console.log ("updateShapeInfoArr:options:",JSON.stringify(options));
            Object.assign(dataItem, options);
            
            if (options.tooltip !== undefined) {
              shape.dataItem.tooltip = options.tooltip;
            }

            if (options.tooltipText !== undefined) {
              shape.dataItem.tooltipText = options.tooltipText;
            }
            
            this.refreshCustomShape(shape);
            this.syncRuntimeShapeToModel(shape);
            const shape1 = this.diagram?.getShapeById(dwgShapeId);
        console.log ("checkdatItem:updateShapeInfoArr:shape1:", shape1);
            console.log ("updateShapeInfoArr:dataItem:",dataItem, "shape:",shape,"this.shapes:",this.shapes )
        }

            
      } 
    }
  }
public ShapesInfo = [];
public ShapesInfoArr = {};

public findRowsByTable(
  grouped:any,
  shapeId:  string,
  table: string
) {
  console.log ("findRowsByTable:shapeId:",shapeId)
  let arr = shapeId.split(":");
  let shapeType = arr[0];
  let SHAPE_ID = arr[1];
  const bucket = grouped?.[String(SHAPE_ID)];
  if (!Array.isArray(bucket)) return [];
  return bucket.filter(row => row._TABLE === table);
}


  // ================================================================
  // Visual attributes of the other shapes, read from the SCD tables
  // (see "Shapes Visual attributes.xlsx"). Same idea as the button: the values
  // come from ShapesInfoArr, are copied onto `options`, and the drawing code uses
  // them. `dbShape: true` marks a shape drawn from these attributes.
  // ================================================================

  /** Any CSS colour (name, #rgb, #rrggbb, with stray spaces) -> #rrggbb. */
  private normalizeColor(value: any, fallback: string): string {
    const text = String(value ?? "").trim();
    if (!text || text.toLowerCase() === "transparent") {
      return fallback;
    }
    if (/^#[0-9a-f]{6}$/i.test(text)) {
      return text.toLowerCase();
    }
    if (/^#[0-9a-f]{3}$/i.test(text)) {
      return "#" + text.slice(1).split("").map(c => c + c).join("").toLowerCase();
    }
    try {
      const ctx = document.createElement("canvas").getContext("2d");
      if (ctx) {
        ctx.fillStyle = "#000000";
        ctx.fillStyle = text;
        const parsed = String(ctx.fillStyle);
        if (/^#[0-9a-f]{6}$/i.test(parsed)) {
          return parsed.toLowerCase();
        }
      }
    } catch {
      // fall through to the fallback
    }
    return fallback;
  }

  private dbNumber(value: any, fallback: number): number {
    const n = Number.parseFloat(String(value ?? "").trim());
    return Number.isFinite(n) ? n : fallback;
  }

  private dbText(value: any, fallback: string): string {
    const text = String(value ?? "").trim();
    return text.length ? text : fallback;
  }

  /** Copy the attributes of one shape (by kind) from its SCD rows onto `options`. */
  private populateOtherShapeAttributes(options: any, kind: string, shapeID: string): void {
    const rows = (table: string): any[] => this.findRowsByTable(this.ShapesInfoArr, shapeID, table);
    const one = (table: string): any => rows(table)[0] ?? {};
    const yes = (v: any): boolean => this.isDbYes(v);
    console.log("populateOtherShapeAttributes:", rows,one, this.ShapesInfoArr )
    const num = (v: any, f: number): number => this.dbNumber(v, f);
    const col = (v: any, f: string): string => this.normalizeColor(v, f);
    const txt = (v: any, f: string): string => this.dbText(v, f);

    const lineKinds = ["arc", "line", "polyline", "freehand"];
    const surfaceKinds = ["rectangle", "roundedRectangle", "ellipse", "polygon"];
    console.log("populateOtherShapeAttributes:", kind)
    // ---- Shape_Properties: SCD_SHAPE_GENERAL ----
    if (lineKinds.includes(kind) || surfaceKinds.includes(kind)) {
      const g = one("SCD_SHAPE_GENERAL");
      console.log("populateOtherShapeAttributes:", kind,g)
      if (!Object.keys(g).length) {
        return;
      }
      
      const back = col(g.BACK_COLOR, "#3a753a");
      const fore = col(g.FORE_COLOR, "#000000");
      const usesBack = yes(g.BORDER_USES_BACK_COLOR);
      Object.assign(options, {
        dbShape: true,
        backStyle: txt(g.BACK_STYLE, "Solid"),
        fillColor: back,
        patternStyle: txt(g.PATTERN_STYLE, "None"),
        patternColor: col(g.PATTERN_COLOR, "#000000"),
        borderWidth: num(g.BORDER_WIDTH, 2),
        borderStyle: txt(g.BORDER_STYLE, "Raised"),
        borderUsesBackColor: usesBack,
        borderColor: col(g.BORDER_COLOR, "#000000"),
        foreColor: fore,
        lineStyle: txt(g.LINE_STYLE, "Solid"),
        lineWidth: num(g.LINE_WIDTH, 1),
        blink: yes(g.BLINK)
      });
      options.strokeColor = lineKinds.includes(kind)
        ? fore
        : (usesBack ? this.darken(back, 0.35) : options.borderColor);
      return;
    }

    // ---- Text_Properties: SCD_TEXT_GENERAL ----
    if (kind === "text") {
      const g = one("SCD_TEXT_GENERAL");
      if (!Object.keys(g).length) {
        return;
      }
      Object.assign(options, {
        dbShape: true,
        fontFamily: txt(g.FONT_NAME, "Arial"),
        fontSize: num(g.FONT_SIZE, 10),
        fillColor: col(g.BACK_COLOR, "#ffffff"),
        textColor: col(g.FORE_COLOR, "#000000"),
        backStyle: txt(g.BACK_STYLE, "Transparent"),
        alignment: txt(g.ALIGNMENT, "MM").toUpperCase(),
        wordWrap: yes(g.WORD_WRAP),
        sizeToFit: yes(g.SIZE_TO_FIT)
      });
      return;
    }

    // ---- Tag_Label_Properties: SCD_TAG_LABEL_GENERAL ----
    if (kind === "tagLabel") {
      const g = one("SCD_TAG_LABEL_GENERAL");
      if (!Object.keys(g).length) {
        return;
      }
      Object.assign(options, {
        dbShape: true,
        labelJustification: txt(g.JUSTIFICATION, "Left"),
        labelFieldLength: Math.max(1, Math.round(num(g.FIELD_LENGTH, 10))),
        tagPriority: txt(g.TAG_PRIORITY, "Tag Name")
      });
      return;
    }

    // ---- Gauge / Scale / Bar graph: SCD_GRAPH_GENERAL (+ SCD_GAUGE_DISPLAY) ----
    if (kind === "gauge" || kind === "scale" || kind === "barGraph") {
      const g = one("SCD_GRAPH_GENERAL");
      if (!Object.keys(g).length) {
        return;
      }
      const display = kind === "gauge" ? one("SCD_GAUGE_DISPLAY") : {};
      const back = col(g.BACK_COLOR, "#aaff00");
      const minimum = num(display.MINIMUM_VALUE ?? g.MINIMUM, 0);
      const maximum = num(display.MAXIMUM_VALUE ?? g.MAXIMUM_VALUE, 100);
      Object.assign(options, {
        dbShape: true,
        backStyle: txt(g.BACK_STYLE, "Solid"),
        fillColor: back,
        borderWidth: num(g.BORDER_WIDTH, 4),
        borderStyle: txt(g.BORDER_STYLE, "Raised"),
        borderUsesBackColor: yes(g.BORDER_USES_BACK_COLOR),
        borderColor: col(g.BORDER_COLOR, "#000000"),
        foreColor: col(g.FORE_COLOR, "#000000"),
        graphFillColor: col(g.FILL_COLOR, "#00008b"),
        fillStyle: txt(g.FILL_STYLE, "Solid"),
        fillDirection: txt(g.FILL_DIRECTION, "Bottom to Top"),
        graphMinimum: minimum,
        graphMaximum: maximum,
        thresholdCount: Math.round(num(display.NUMBER_OF_THRESHOLDS ?? g.NUMBER_OF_THRESHOLDS, 0)),
        thresholdType: txt(display.THRESHOLD_TYPE ?? g.THRESHOLD_TYPE, "Value"),
        threshold1: num(display.THRESHOLD_1_VALUE ?? g.THRESHOLD_1_VALUE, 50),
        threshold2: num(display.THRESHOLD_2_VALUE ?? g.THRESHOLD_2_VALUE, 75),
        thresholdColor1: col(display.FILL_COLOR_1 ?? g.FILL_COLOR_1, "#ffea00"),
        thresholdColor2: col(display.FILL_COLOR_2 ?? g.FILL_COLOR_2, "#d70040"),
        minorTicks: Math.max(1, Math.round(num(g.MINOR_TICKS, 5))),
        majorTicks: Math.max(1, Math.round(num(g.MAJOR_TICKS, 10))),
        tickDirection: txt(g.TICK_DIRECTION, "Right"),
        needleWidth: num(g.NEEDLE_WIDTH, 2),
        needleColor: col(g.NEEDLE_COLOR, "#000000"),
        sweepStyle: txt(g.SWEEP_STYLE, "Point"),
        fontSize: num(g.FONT_SIZE, 12),
        fontFamily: txt(g.FONT_NAME, "Arial"),
        lineWidth: num(g.LINE_WIDTH, 1),
        lineStyle: txt(g.LINE_STYLE, "Solid"),
        showLegend: yes(display.SHOW_LEGEND),
        legendColor: col(display.LEGEND_COLOR, "#0000ff"),
        digitsAfterDecimal: Math.max(0, Math.round(num(display.DIGITS_AFTER_DECIMAL, 0)))
      });
      if (options.containerMax === undefined) {
        options.containerMax = maximum;
      }
      return;
    }

    // ---- List_Indicator_Properties: SCD_LIST_INDICATOR_GENERAL / _STATE ----
    if (kind === "listIndicator" || kind === "controlList") {
      const g = one("SCD_LIST_INDICATOR_GENERAL");
      if (!Object.keys(g).length) {
        return;
      }
      const states = rows("SCD_LIST_INDICATOR_STATE");
      const count = Math.max(1, Math.round(num(g.NUMBER_OF_STATES, states.length || 1)));
      Object.assign(options, {
        dbShape: true,
        backStyle: txt(g.BACK_STYLE, "Solid"),
        fillColor: col(g.BACK_COLOR, "#000000"),
        patternStyle: txt(g.PATTERN_STYLE, "None"),
        patternColor: col(g.PATTERN_COLOR, "#ffffff"),
        borderWidth: num(g.BORDER_WIDTH, 8),
        borderStyle: txt(g.BORDER_STYLE, "RaisedInset"),
        borderUsesBackColor: yes(g.BORDER_USES_BACK_COLOR),
        borderColor: col(g.BORDER_COLOR, "#00008b"),
        selectionBackColor: col(g.SELECTION_BACK_COLOR, "#ffffff"),
        selectionForeColor: col(g.SELECTION_FORE_COLOR, "#00008b"),
        fontSize: num(g.FONT_SIZE, 10),
        fontFamily: txt(g.FONT_NAME, "Arial"),
        captionColor: col(states[0]?.CAPTION_COLOR, "#ffffff"),
        listStateNames: states.slice(0, count).map(r => txt(r.STATE_NAME, ""))
      });
      return;
    }

    // ---- Arrow_Button group: SCD_ARROW_BUTTON_GENERAL or SCD_BUTTON_PUSH_GENERAL ----
    const keypadKinds = ["backspace", "endButton", "enter", "moveLeft", "moveRight", "moveUp", "moveDown", "pageUp", "pageDown"];
    if (keypadKinds.includes(kind)) {
      const arrow = one("SCD_ARROW_BUTTON_GENERAL");
      const g = Object.keys(arrow).length ? arrow : one("SCD_BUTTON_PUSH_GENERAL");
      if (!Object.keys(g).length) {
        return;
      }
      const label = one("SCD_ARROW_BUTTON_LABEL");
      Object.assign(options, {
        dbShape: true,
        backStyle: txt(g.BACK_STYLE, "Solid"),
        fillColor: col(g.BACK_COLOR, "#00008b"),
        patternStyle: txt(g.PATTERN_STYLE, "None"),
        patternColor: col(g.PATTERN_COLOR, "#ffffff"),
        borderWidth: num(g.BORDER_WIDTH, 4),
        borderStyle: txt(g.BORDER_STYLE, "Raised"),
        borderUsesBackColor: yes(g.BORDER_USES_BACK_COLOR),
        borderColor: col(g.BORDER_COLOR, "#00008b"),
        iconColor: col(g.FORE_COLOR ?? label.IMAGE_COLOR, "#ffffff")
      });
    }
  }


public groupBodyByShapeId(body: any[]) {
  const grouped = {};

  for (const entry of body || []) {
    if (!entry || typeof entry !== "object") {
      continue;
    }

    // ── 1. Rename _QUERY -> _TABLE and strip the INSERT_ prefix. ──
    const clone = { ...entry };

    if (typeof clone._QUERY === "string") {
      const table = clone._QUERY.startsWith("INSERT_")
        ? clone._QUERY.slice("INSERT_".length)
        : clone._QUERY;

      clone._TABLE = table;
      delete clone._QUERY;
    }

    // ── 2. Resolve the bucket key. String() normalises 1063 vs "1063". ──
    const rawId = (entry as any).SHAPE_ID;
    const key =
      rawId === undefined || rawId === null || rawId === ""
        ? "__no_shape__"
        : String(rawId);

    // ── 3. Append, preserving original order. ──
    if (!grouped[key]) {
      grouped[key] = [];
    }
    grouped[key].push(clone);
  }

  return grouped;
}

public saveShapesInfo(body){
  for (let i = 0 ; i< body.length;i++){
    if (body[i]['_QUERY'].startsWith("INSERT")){
      this.ShapesInfo.push(body[i])
    }
  }
}

public menuType;
public event;
public insertShapeFlag = false;
async insertSCDShape(kendoui_content, shapeType, diagramX: number, diagramY: number, width:any, height:any){
      const x = diagramX ?? (this.lastClickX - this.currentPan.x) / this.zoomLevel;
      const y = diagramY ?? (this.lastClickY - this.currentPan.y) / this.zoomLevel;
      kendoui_content[diagramX] = diagramX;
      kendoui_content[diagramY] = diagramY;
      let body = [
        {
          "_QUERY": "INSERT_SCD_SHAPE",
          "DISPLAY_ID": this.form.value.DISPLAY_ID,
          "SHAPE_TYPE": shapeType,
          "HEIGHT": height,
          "WIDTH": width,
          "TOP": x,
          "LEFT": y,
          "NAME": kendoui_content.id,
          "VISIBLE": 1,
          "KEY_NAVIGATION": 1,
          "FOCUS_HIGHLIGHT": 0,
          "POINTER_HIGHLIGHT": 1,
          "TAB_INDEX": 1,
          "TOOLTIP_TEXT": kendoui_content.id
        },
        {
          "_QUERY": "GET_LAST_ID"
        }
      ];
      let data = await this.starServices.execSQLBody(this, body, "");
      if (this.paramConfig.DEBUG_FLAG) console.log("INSERT_SCD_SHAPE:data[1].data:", data[1].data[0]);
      if (typeof data[1].data != "undefined") {
        let last_insert_rowid = data[1].data[0]["LAST_INSERT_ID"];
        kendoui_content.id =    kendoui_content.id + ":" + last_insert_rowid;
        kendoui_content.shapeID = last_insert_rowid;
        body[0]['SHAPE_ID'] = last_insert_rowid;
        this.saveShapesInfo(body)
        if (this.paramConfig.DEBUG_FLAG) console.log("INSERT_SCD_SHAPE:kendoui_content.id:", kendoui_content.id);
      }
      return kendoui_content;
}
async insertShape(shapeType, options) {
    let kendoui_content: any = {
      id: shapeType
    }
    //kendoui_content = await this.insertSCDShape(kendoui_content, shapeType)
    await this.insertSCDShapeTables(kendoui_content.shapeID, shapeType)
    let kind = this.shapeToIconKey[shapeType] ?? 'Text';
    if (options == null) {
      options = { //richText
        text: "",
        width: 190,
        height: 90,
        x: this.lastClickX,
        y: this.lastClickY,
        SHAPE_ID: kendoui_content.id,
        SHAPE_TYPE: shapeType,
        fillColor: "#fff7d6"
      }
    }
    else{
      options['SHAPE_ID'] = kendoui_content.id;
      options['SHAPE_TYPE'] = shapeType;
    }
    //   const buttonShapeTypes = [
  //   'Button'
  // ];
  // if (buttonShapeTypes.includes(shapeType)) {
  //   options.visual       = options.visual       ?? 'button3DVisual'; // default variant
  //   options.buttonState  = options.buttonState  ?? 'normal';
  //   options.disabled     = options.disabled     ?? false;
  // }
    console.log("kind:",kind,"shapeType:", shapeType, "options:", options);
    this.addLibraryShape(kind, options, true);
  }

//////////
public statusMessage = "Select a shape to edit it.";

// ---- Animation (SCADA) ----
  public readonly animationTypes = [
    { id: "none", label: "None" },
    { id: "visibility", label: "Visibility (show/hide)" },
    { id: "blink", label: "Blinking" },
    { id: "discrete", label: "Discrete colour (Normal/Warning/Alarm)" },
    { id: "analog", label: "Analog colour (blend low to high)" },
    { id: "scale", label: "Size / Scaling" },
    { id: "move", label: "Position (move)" },
    { id: "rotate", label: "Rotation (spin)" },
    { id: "valueText", label: "Value display" },
    { id: "stringText", label: "String (text by state)" },
    { id: "flip", label: "Flip (mirror when on)" },
    { id: "heatmap", label: "Gradient heat map (colour by value)" },
    { id: "flow", label: "Flow (moving dashes on a line/pipe)" },
    { id: "lamp", label: "Lamp on/off (glow)" },
    { id: "alarm", label: "Alarm escalation (0 hidden, 1 blink, 2 solid)" },
    { id: "imageSwap", label: "Graphic swap (Image shape, by state)" }
  ];
  public animationRunning = false;
  public anim: ShapeAnimation = this.defaultAnimation();
  private animTimer: any = null;
  // Tag values are read on a timer (not on every edit): each tick compares the
  // value with the one last applied and only redraws a shape when it changed.
  public animationPollMs = 1000;
  private animPollTimer: any = null;
  private animState = new WeakMap<object, { sig: string; target: number; display: number }>();
  private lastAnimTick = 0;
  private stagePointerStart: { x: number; y: number } | null = null;


  private defaultAnimation(): ShapeAnimation {
    return {
      type: "none", value: 0, min: 0, max: 100, colorA: "#e53935", colorB: "#1e88e5",
      warn: 50, alarm: 80, axis: "y", distance: 80, speed: 500, unit: "", textOn: "ON", textOff: "OFF",
      clickToggle: false, imageOn: "", imageOff: "",
      changeSpeed: 0, rotateMode: "spin", sweep: 360, pivot: "center"
    };
  }
public freehandMode = false;
// Click-by-click Polygon/Polyline drawing: each left click adds a vertex
  // joined to the previous one; right click finishes (Polygon also closes
  // back to the first vertex, Polyline stays open).
  public polyMode: "polygon" | "polyline" | null = null;
  private polyPoints: Array<{ x: number; y: number }> = [];
  private polyStagePoints: Array<{ x: number; y: number }> = [];
  private polyCursor: { x: number; y: number } | null = null;
  public polyPreviewPath = "";

// Line tool: reuses the FreeHand pointer pipeline, but keeps only the start
// and the current point so the result is one straight segment.
public freehandStraight = false;
private freehandPoints: Array<{ x: number; y: number }> = [];
private freehandPointerId: number | null = null;
public freehandPreviewPath = "";
public get lineMode(): boolean {
  return this.freehandMode && this.freehandStraight;
}
private freehandPreviewPoints: Array<{ x: number; y: number }> = [];
public richTextEditorOpen = false;
public richTextHtml = '<p><strong>Rich Text</strong></p>';
private addShapeCounter = 0;
public readonly gridSize = 20;

private nextInsertPosition(): { x: number; y: number } {
    const viewport = this.diagram?.viewport();
    const step = (this.addShapeCounter++ % 8) * 20;
    return {
      x: Math.round(((viewport?.x ?? 0) + 90 + step) / this.gridSize) * this.gridSize,
      y: Math.round(((viewport?.y ?? 0) + 90 + step) / this.gridSize) * this.gridSize
    };
  }
/**
   * Shape ids are "<type>:<number>" (e.g. "button:2"). The type itself may contain
   * underscores (icon shapes), so ":" is the separator. A copy of "rectangle:1"
   * becomes "rectangle:2" (the old number is dropped before numbering).
   */
  private uniqueShapeId(prefix: string): string {
    const base = String(prefix || "shape").replace(/[^a-zA-Z0-9_:-]/g, "").replace(/:\d+$/, "") || "shape";
    const existing = new Set(
      (this.shapes as any[]).map(model => String(model?.id ?? ""))
    );
    let index = 1;
    let candidate = `${base}:${index}`;
    while (existing.has(candidate)) {
      candidate = `${base}:${++index}`;
    }
    return candidate;
  }
  private libraryShapeTitle(kind: string): string {
    const titles: Record<string, string> = {
      richText: "Rich Text",
      image: "Image",
      ellipse: "Ellipse",
      line: "Line",
      rectangle: "Rectangle",
      roundedRectangle: "Terminator (Rounded Rectangle)",
      arc: "Arc",
      freehand: "FreeHand",
      polygon: "Polygon",
      polyline: "Polyline",
      listIndicator: "List Indicator",
      barGraph: "Bar Graph",
      gauge: "Gauge",
      scale: "Scale",
      controlList: "Control List",
      tagLabel: "Tag Label",
      arrowVertical: "Arrow Vertical",
      arrowHorizontal: "Arrow Horizontal",
      backspace: "Back space",
      endButton: "End Button",
      enter: "Enter",
      moveLeft: "Move Left",
      moveRight: "Move Right",
      moveUp: "Move Up",
      moveDown: "Move Down",
      pageUp: "Page Up",
      pageDown: "Page Down",
      container: "Container"
    };
    return titles[kind] || "Shape";
  }
   /**
 * shapeTablesMap is keyed by the program's shape names ("Elipse", "BarGraph",
 * "ListIndicator", ...). The kinds used by the editor are different strings, so
 * this maps each kind to its shapeTablesMap key. (Control List has no entry in
 * the sheet; it shares the List Indicator tables.)
 */
private readonly tablesKeyByKind: Record<string, string> = {
  rectangle: 'Rectangle', roundedRectangle: 'Rounded Rectangle', ellipse: 'Elipse',
  arc: 'Arc', line: 'Line', polygon: 'Polygon', polyline: 'Polyline', freehand: 'FreeHand',
  text: 'Text', richText: 'Text', tagLabel: 'Tag Label',
  gauge: 'Gauge', scale: 'Scale', barGraph: 'BarGraph',
  listIndicator: 'ListIndicator', controlList: 'ListIndicator',
  arrowVertical: 'Arrow Vertical', arrowHorizontal: 'Arrow Horizontal',
  backspace: 'Backspace', endButton: 'End', enter: 'Enter',
  moveLeft: 'Move Left', moveRight: 'Move Right', moveUp: 'Move Up', moveDown: 'Move Down',
  pageUp: 'Page Up', pageDown: 'Page Down', button: 'Button'
};
  // 
  public addRichText(): void {
    this.richTextHtml = '<p><strong>Rich Text</strong></p>';
    this.richTextEditorOpen = true;
    this.statusMessage = "Use the Kendo Editor to format the Rich Text, then click Add to Diagram.";
  }

  public cancelRichText(): void {
    this.richTextEditorOpen = false;
    this.statusMessage = "Rich Text creation cancelled.";
  }

  public commitRichText(): void {
    const blocks = this.htmlToRichTextBlocks(this.richTextHtml);
    if (!blocks.length) {
      this.statusMessage = "Enter some Rich Text before adding the shape.";
      return;
    }

    this.richTextEditorOpen = false;
    this.addLibraryShape("richText", {
      richTextHtml: this.richTextHtml,
      richTextBlocks: blocks,
      width: 320,
      height: 180,
      fillColor: "#fffdf7"
    });
  }

  /** Convert Kendo Editor HTML into Diagram ShapeRichTextContent blocks. */
  private htmlToRichTextBlocks(html: string): any[] {
    if (typeof DOMParser === "undefined") {
      const text = String(html || "").replace(/<[^>]*>/g, " ").replace(/\s+/g, " ").trim();
      return text ? [{ children: [{ text }] }] : [];
    }

    const doc = new DOMParser().parseFromString(html || "", "text/html");
    type RunStyle = {
      bold?: boolean; italic?: boolean; underline?: boolean; color?: string;
      fontSize?: number; fontFamily?: string;
    };

    const withElementStyle = (element: Element, inherited: RunStyle): RunStyle => {
      const next: RunStyle = { ...inherited };
      const tag = element.tagName.toLowerCase();
      const style = (element as HTMLElement).style;
      if (tag === "strong" || tag === "b" || style.fontWeight === "bold" || Number(style.fontWeight) >= 600) next.bold = true;
      if (tag === "em" || tag === "i" || style.fontStyle === "italic") next.italic = true;
      if (tag === "u" || style.textDecoration.includes("underline") || style.textDecorationLine.includes("underline")) next.underline = true;
      if (style.color) next.color = style.color;
      const legacyColor = element.getAttribute("color");
      if (!next.color && legacyColor) next.color = legacyColor;
      if (style.fontFamily) next.fontFamily = style.fontFamily;
      if (style.fontSize) {
        const numeric = Number.parseFloat(style.fontSize);
        if (Number.isFinite(numeric)) next.fontSize = numeric;
      }
      if (/^h[1-6]$/.test(tag)) {
        next.bold = true;
        const headingSizes: Record<string, number> = { h1: 32, h2: 28, h3: 24, h4: 20, h5: 18, h6: 16 };
        next.fontSize = headingSizes[tag] ?? next.fontSize;
      }
      return next;
    };

    const inlineRuns = (node: Node, inherited: RunStyle = {}): any[] => {
      if (node.nodeType === Node.TEXT_NODE) {
        const text = node.textContent ?? "";
        if (!text) return [];
        const run: any = { text };
        if (inherited.bold) run.bold = true;
        if (inherited.italic) run.italic = true;
        if (inherited.underline) run.underline = true;
        if (inherited.color) run.color = inherited.color;
        if (inherited.fontSize) run.fontSize = inherited.fontSize;
        if (inherited.fontFamily) run.fontFamily = inherited.fontFamily;
        return [run];
      }
      if (node.nodeType !== Node.ELEMENT_NODE) return [];

      const element = node as Element;
      const tag = element.tagName.toLowerCase();
      if (tag === "br") return [{ type: "break" }];
      if (tag === "img") {
        const src = element.getAttribute("src") || "";
        if (!src) return [];
        const image: any = { type: "image", src };
        const width = Number.parseFloat(element.getAttribute("width") || (element as HTMLElement).style.width || "");
        const height = Number.parseFloat(element.getAttribute("height") || (element as HTMLElement).style.height || "");
        if (Number.isFinite(width) && width > 0) image.width = width;
        if (Number.isFinite(height) && height > 0) image.height = height;
        return [image];
      }

      const nextStyle = withElementStyle(element, inherited);
      return Array.from(element.childNodes).flatMap(child => inlineRuns(child, nextStyle));
    };

    const blocks: any[] = [];
    const blockTags = new Set(["p", "div", "li", "blockquote", "h1", "h2", "h3", "h4", "h5", "h6"]);
    const appendBlock = (node: Node): void => {
      if (node.nodeType === Node.ELEMENT_NODE) {
        const element = node as Element;
        const tag = element.tagName.toLowerCase();
        if (tag === "ul" || tag === "ol") {
          Array.from(element.children).forEach(child => appendBlock(child));
          return;
        }
        if (blockTags.has(tag)) {
          const children = inlineRuns(element, withElementStyle(element, {}));
          if (children.some(item => item.type === "image" || item.type === "break" || String(item.text || "").trim())) {
            blocks.push({ children });
          }
          return;
        }
      }
      const children = inlineRuns(node);
      if (children.some(item => item.type === "image" || item.type === "break" || String(item.text || "").trim())) {
        blocks.push({ children });
      }
    };

    Array.from(doc.body.childNodes).forEach(node => appendBlock(node));
    return blocks;
  }

  public addImage(): void {
    const source = typeof window !== "undefined"
      ? window.prompt("Enter an image URL (http(s), data URL, or app asset path):", "")
      : "";
    if (source === null) {
      return;
    }
    this.addLibraryShape("image", { source: source.trim(), width: 180, height: 120, fillColor: "#f6f7f8" });
  }

  

 /**
 * Add one of the keypad-style navigation / push buttons. Mirrors
 * KendoDiagramComponent.addButtonShape but routes through this component's
 * drag-to-size pipeline so the user sizes the button like any other SCD shape.
 */
public addNavigationShape(kind: string): void {
  const defaults: Record<string, { width: number; height: number; fillColor: string }> = {
    arrowVertical:   { width: 80,  height: 60, fillColor: "#008080" },
    arrowHorizontal: { width: 170, height: 60, fillColor: "#008080" },
    backspace:       { width: 80,  height: 40, fillColor: "#000080" },
    endButton:       { width: 80,  height: 40, fillColor: "#000080" },
    enter:           { width: 80,  height: 40, fillColor: "#000080" },
    moveLeft:        { width: 80,  height: 40, fillColor: "#000080" },
    moveRight:       { width: 80,  height: 40, fillColor: "#000080" },
    moveUp:          { width: 80,  height: 40, fillColor: "#000080" },
    moveDown:        { width: 80,  height: 40, fillColor: "#000080" },
    pageUp:          { width: 80,  height: 40, fillColor: "#000080" },
    pageDown:        { width: 80,  height: 40, fillColor: "#000080" }
  };

  if (!defaults[kind]) {
    this.statusMessage = `Unknown navigation shape: ${kind}`;
    return;
  }

  // Two insertion modes: drag-to-size (default) or place-with-default-size.
  // Drag-to-size reuses armDragTool; that's the interaction pattern this
  // component already uses for Rectangle/Polygon/etc.
  this.armDragTool(kind);
}
public addText(): void {
    const text = typeof window !== "undefined"
      ? window.prompt("Enter the text:", "Text")
      : "Text";
    if (text === null) {
      return;
    }
    this.addLibraryShape("text", { text: text.trim() || "Text", width: 160, height: 40, fillColor: "transparent" });
  }

public addEllipse():   void { this.armDragTool('Elipse'); }


  /** Line tool: drag on the canvas from the start point to the end point. */
  public addLine(): void {
    if (this.lineMode) {
      this.resetFreehandState(false);
      this.statusMessage = "Line mode cancelled.";
      return;
    }
    this.resetFreehandState(true);
    this.freehandStraight = true;
    this.diagram?.deselect();
    this.statusMessage = "Line mode ON: press at the start point, drag, and release at the end point.";
  }

  private resetFreehandState(active: boolean): void {
    if (active) {
      this.resetPolyDrawing();
    }
    this.freehandMode = active;
    this.freehandStraight = false;
    this.freehandPoints = [];
    this.freehandPreviewPoints = [];
    this.freehandPreviewPath = "";
    this.freehandPointerId = null;
    if (!active) {
      this.pendingDragTool = null;
      this.pendingDragShapeType = null;
      this.pendingDragIsLibraryOnly = false;
      this.dragBoxStart = null;
      this.dragBoxCurrent = null;
      this.clearDragBoxPreview();
    }
  }



  public addRectangle(): void { this.armDragTool('Rectangle'); }

  public addRoundedRectangle(): void { this.armDragTool('Rounded Rectangle'); }

  public addArc():       void { this.armDragTool('Arc'); }

  public addPolygon(): void {
    this.togglePolyMode("polygon");
  }

  public addPolyline(): void {
    this.togglePolyMode("polyline");
  }

 private togglePolyMode(mode: "polygon" | "polyline"): void {
    const wasActive = this.polyMode === mode;
    this.resetPolyDrawing();
    this.resetFreehandState(false);
    if (wasActive) {
      this.statusMessage = `${mode === "polygon" ? "Polygon" : "Polyline"} drawing cancelled.`;
      return;
    }
    this.polyMode = mode;
    this.diagram?.deselect();
    this.statusMessage = mode === "polygon"
      ? "Polygon: click to add points, then right-click to close the shape."
      : "Polyline: click to add points, then right-click to finish (the shape stays open).";
  }

  private resetPolyDrawing(): void {
    this.polyMode = null;
    this.polyPoints = [];
    this.polyStagePoints = [];
    this.polyCursor = null;
    this.polyPreviewPath = "";
  }

  private updatePolyPreviewPath(): void {
    const pts = this.polyCursor ? [...this.polyStagePoints, this.polyCursor] : this.polyStagePoints;
    this.polyPreviewPath = pts
      .map((point, index) => `${index === 0 ? "M" : "L"} ${point.x} ${point.y}`)
      .join(" ");
  }

  public onPolyPointerDown(event: PointerEvent): void {
    if (!this.polyMode || !this.diagram || event.button !== 0) {
      return;
    }
    event.preventDefault();
    event.stopPropagation();
    const point = this.pointerToModel(event);
    const stage = this.pointerToStage(event);
    (document.activeElement as HTMLElement | null)?.blur?.();
    (event.currentTarget as HTMLElement | null)?.focus?.({ preventScroll: true });
    if (!point || !stage) {
      return;
    }
    this.polyPoints.push(point);
    this.polyStagePoints.push(stage);
    this.polyCursor = stage;
    this.updatePolyPreviewPath();
  }

  public onPolyPointerMove(event: PointerEvent): void {
    if (!this.polyMode || !this.polyStagePoints.length) {
      return;
    }
    this.polyCursor = this.pointerToStage(event);
    this.updatePolyPreviewPath();
  }

  public onPolyContextMenu(event: MouseEvent): void {
    if (!this.polyMode) {
      return;
    }
    event.preventDefault();
    event.stopPropagation();
    this.finishPolyDrawing();
  }

  /**
   * Enter (or Space) finishes the shape like a right-click; Escape cancels the
   * drawing. Registered on the document in the capture phase so nothing else
   * (a focused dropdown, the diagram) can swallow the key first.
   */
  private readonly polyKeyHandler = (event: KeyboardEvent): void => this.onDocumentKeyDown(event);

  public onDocumentKeyDown(event: KeyboardEvent): void {
    if (!this.polyMode) {
      return;
    }
    const target = event.target as HTMLElement | null;
    const typing = target && (target.isContentEditable
      || target.tagName === "INPUT" || target.tagName === "TEXTAREA"
      || (target.tagName === "SELECT" && !target.classList.contains("menu-select")));
    if (typing) {
      return;
    }
    if (event.key === "Enter" || event.key === " " || event.key === "Spacebar") {
      event.preventDefault();
      event.stopPropagation();
      this.finishPolyDrawing();
    } else if (event.key === "Escape") {
      event.preventDefault();
      const label = this.polyMode === "polygon" ? "Polygon" : "Polyline";
      this.resetPolyDrawing();
      this.statusMessage = `${label} drawing cancelled.`;
    }
  }

private finishPolyDrawing(): void {
    if (!this.polyMode) {
      return;
    }
    const mode = this.polyMode;
    const label = mode === "polygon" ? "Polygon" : "Polyline";
    const minPoints = mode === "polygon" ? 3 : 2;
    const pts = this.polyPoints;
    if (pts.length < minPoints) {
      this.resetPolyDrawing();
      this.statusMessage = `${label} needs at least ${minPoints} points; nothing was added.`;
      return;
    }
    const minX = Math.min(...pts.map(p => p.x));
    const minY = Math.min(...pts.map(p => p.y));
    const maxX = Math.max(...pts.map(p => p.x));
    const maxY = Math.max(...pts.map(p => p.y));
    const width = Math.max(20, maxX - minX);
    const height = Math.max(20, maxY - minY);
    // A straight line has ~0 height/width but the box is at least 20px. Keep the
    // drawn shape true to scale and centre it in the box, instead of stretching
    // it to fill the box (which would tilt a flat line).
    const offsetX = (width - (maxX - minX)) / 2;
    const offsetY = (height - (maxY - minY)) / 2;
    const points = pts.map(p => ({ x: p.x - minX + offsetX, y: p.y - minY + offsetY }));
    this.resetPolyDrawing();
    const shapeType = mode === "polygon" ? "Polygon" : "Polyline";

      void this.insertAndAddLibraryShape(
        shapeType,
        mode,
        {
          x: minX - offsetX,
          y: minY - offsetY,
          width,
          height,
          points,
          pointRef: { w: width, h: height },
          fillColor: mode === "polygon" ? "#e9defa" : "transparent"
        }
      );
  }
  /** Toolbar dropdown menus: run the chosen action, then reset the dropdown. */
  public runMenu(event: Event, menu: "arrange" | "align" | "add" | "button" | "indicator"): void {
    const select = event.target as HTMLSelectElement;
    const key = select.value;
    select.value = "";
    select.blur();
    // Browsers can hand focus back to the dropdown after the change event, so
    // blur again once that has happened (keys then reach the page, not the select).
    setTimeout(() => select.blur(), 0);
    const actions: Record<string, Record<string, () => void>> = {
      arrange: {
        back: () => this.sendToBack(),
        front: () => this.bringToFront(),
        grid: () => this.alignToGrid(),
        rotateRight: () => this.rotateRight(),
        rotateLeft: () => this.rotateLeft(),
        flipH: () => this.flipHorizontal(),
        flipV: () => this.flipVertical(),
        group: () => this.groupSelected(),
        ungroup: () => this.ungroupSelected()
      },
      align: {
        left: () => this.alignSelected("left"),
        center: () => this.alignSelected("center"),
        right: () => this.alignSelected("right"),
        top: () => this.alignSelected("top"),
        middle: () => this.alignSelected("middle"),
        bottom: () => this.alignSelected("bottom"),
        centerPoints: () => this.alignSelected("centerPoints"),
        spaceH: () => this.distributeSelected("horizontal"),
        spaceV: () => this.distributeSelected("vertical")
      },
      add: {
        richText: () => this.addRichText(),
        text: () => this.addText(),
        image: () => this.addImage(),
        ellipse: () => this.addEllipse(),
        line: () => this.addLine(),
        rectangle: () => this.addRectangle(),
        terminator: () => this.addRoundedRectangle(),
        arc: () => this.addArc(),
        freehand: () => this.toggleFreehandMode(),
        polygon: () => this.addPolygon(),
        polyline: () => this.addPolyline(),
        container: () => this.addContainer()
      },
      button: new Proxy({} as Record<string, () => void>, {
        get: (_target, name: string) => () => this.addButtonShape(name)
      }),
      indicator: new Proxy({} as Record<string, () => void>, {
        get: (_target, name: string) => () => this.addIndicatorShape(name)
      })
    };
    actions[menu]?.[key]?.();
  }


  /** Add one of the keypad-style push buttons / arrow indicators. */
  public addButtonShape(kind: string): void {
    const size = kind === "arrowVertical" ? { width: 80, height: 60 }
      : kind === "arrowHorizontal" ? { width: 170, height: 60 }
      : { width: 80, height: 40 };
    const isArrow = kind === "arrowVertical" || kind === "arrowHorizontal";
    this.addLibraryShape(kind, { ...size, fillColor: isArrow ? "#008080" : "#000080" });
  }

 
  public toggleFreehandMode(): void {
    
    // Pressing FreeHand while Line mode is active switches tools instead of cancelling.
    const turnOn = !this.freehandMode || this.freehandStraight;
    this.resetFreehandState(turnOn);
    if (turnOn) {
      this.diagram?.deselect();
      this.statusMessage = "FreeHand mode ON: drag on the diagram canvas to draw, then release to create the shape.";
    } else {
      this.statusMessage = "FreeHand mode cancelled.";
    }
  }


  public onFreehandPointerDown(event: PointerEvent): void {
    if (!this.freehandMode || !this.diagram) return;
    event.preventDefault();
    event.stopPropagation();
    this.freehandPointerId = event.pointerId;
    const point = this.pointerToModel(event);
    if (!point) return;

  if (this.pendingDragTool) {
    this.dragBoxStart = point;
    this.dragBoxCurrent = point;
    this.updateDragBoxPreview(event);
    (event.currentTarget as HTMLElement | null)
      ?.setPointerCapture?.(event.pointerId);
    return;
  }

  // Branch 2: freehand / line (existing behaviour)
  this.freehandPoints = [point];
  const previewPoint = this.pointerToStage(event);
  this.freehandPreviewPoints = previewPoint ? [previewPoint] : [];
  this.updateFreehandPreviewPath();
  (event.currentTarget as HTMLElement | null)
    ?.setPointerCapture?.(event.pointerId);
}


  public onFreehandPointerMove(event: PointerEvent): void {
    if (!this.freehandMode || this.freehandPointerId !== event.pointerId) return;

  // Shape box drag
  if (this.pendingDragTool && this.dragBoxStart) {
    event.preventDefault();
    event.stopPropagation();
    const point = this.pointerToModel(event);
    if (!point) return;
    this.dragBoxCurrent = point;
    this.updateDragBoxPreview(event);
    return;
  }

  // Existing freehand/line path...
  if (!this.freehandPoints.length) return;

    event.preventDefault();
    event.stopPropagation();
    const point = this.pointerToModel(event);
    if (!point) {
      return;
    }
    if (this.freehandStraight) {
      // Straight line: only the start point and the live end point matter.
      const previewEnd = this.pointerToStage(event);
      this.freehandPoints = [this.freehandPoints[0], point];
      if (previewEnd && this.freehandPreviewPoints.length) {
        this.freehandPreviewPoints = [this.freehandPreviewPoints[0], previewEnd];
        this.updateFreehandPreviewPath();
      }
      return;
    }
    const last = this.freehandPoints[this.freehandPoints.length - 1];
    const distance = Math.hypot(point.x - last.x, point.y - last.y);
    if (distance >= 2) {
      this.freehandPoints.push(point);
      const previewPoint = this.pointerToStage(event);
      if (previewPoint) {
        this.freehandPreviewPoints.push(previewPoint);
        this.updateFreehandPreviewPath();
      }
    }
  }

async onFreehandPointerUp(event: PointerEvent) {
    if (!this.freehandMode || this.freehandPointerId !== event.pointerId) return;

  event.preventDefault();
  event.stopPropagation();
  (event.currentTarget as HTMLElement | null)
    ?.releasePointerCapture?.(event.pointerId);
  this.freehandPointerId = null;

  // Shape box release
  if (this.pendingDragTool && this.dragBoxStart && this.dragBoxCurrent) {
  const start = this.dragBoxStart;
  const end   = this.dragBoxCurrent;
  const x = Math.min(start.x, end.x);
  const y = Math.min(start.y, end.y);
  const w = Math.abs(end.x - start.x);
  const h = Math.abs(end.y - start.y);

  const shapeType = this.pendingDragShapeType!;
  const libraryOnly = this.pendingDragIsLibraryOnly;

  this.resetFreehandState(false);
  this.clearDragBoxPreview();

  if (w < 4 || h < 4) {
    this.statusMessage = "Drag was too small; nothing was added.";
    return;
  }

  this.lastClickX = x;
  this.lastClickY = y;

  await this.insertShapeFromBox(shapeType, x, y, w, h);
  return;
}

    const straight = this.freehandStraight;
    const tooShort = this.freehandPoints.length < 2 ||
      (straight && Math.hypot(
        this.freehandPoints[1].x - this.freehandPoints[0].x,
        this.freehandPoints[1].y - this.freehandPoints[0].y
      ) < 5);
    if (tooShort) {
      this.resetFreehandState(false);
      this.statusMessage = straight
        ? "Line was too short; nothing was added. Press and drag to set both end points."
        : "FreeHand drawing was too short; nothing was added.";
      return;
    }

    if (straight) {
      const [start, end] = this.freehandPoints;
      this.resetFreehandState(false);
      this.addStraightLine(start, end);
      return;
    }

    const minX = Math.min(...this.freehandPoints.map(point => point.x));
    const minY = Math.min(...this.freehandPoints.map(point => point.y));
    const maxX = Math.max(...this.freehandPoints.map(point => point.x));
    const maxY = Math.max(...this.freehandPoints.map(point => point.y));
    const width = Math.max(20, maxX - minX);
    const height = Math.max(20, maxY - minY);
    const points = this.freehandPoints.map(point => ({ x: point.x - minX, y: point.y - minY }));

    this.freehandMode = false;
    this.freehandPoints = [];
    this.freehandPreviewPoints = [];
    this.freehandPreviewPath = "";
    void this.insertAndAddLibraryShape("FreeHand", "freehand", {
      x: minX,
      y: minY,
      width,
      height,
      points,
      fillColor: "transparent"
    });
  }

  /**
   * Create a straight line from `start` to `end` (model coordinates). The
   * endpoints are stored as 0-1 fractions of the shape box, so resizing the
   * shape scales the line and it is rebuilt identically after a reload.
   */
  private addStraightLine(start: { x: number; y: number }, end: { x: number; y: number }): void {
    const minSize = 20;
    const spanX = Math.abs(end.x - start.x);
    const spanY = Math.abs(end.y - start.y);
    const width = Math.max(minSize, spanX);
    const height = Math.max(minSize, spanY);
    // Horizontal/vertical lines sit in the middle of the minimum-size box.
    const centerX = (start.x + end.x) / 2;
    const centerY = (start.y + end.y) / 2;
    const x = spanX >= minSize ? Math.min(start.x, end.x) : centerX - width / 2;
    const y = spanY >= minSize ? Math.min(start.y, end.y) : centerY - height / 2;
    const fraction = (value: number, origin: number, size: number): number =>
      Math.max(0, Math.min(1, (value - origin) / size));

    void this.insertAndAddLibraryShape("Line", "line", {
      x,
      y,
      width,
      height,
      fillColor: "transparent",
      lineStart: {
        x: fraction(start.x, x, width),
        y: fraction(start.y, y, height)
      },
      lineEnd: {
        x: fraction(end.x, x, width),
        y: fraction(end.y, y, height)
      }
    });
  }

private async insertAndAddLibraryShape(
  shapeType: string,
  libraryKind: string,
  options: any
): Promise<void> {
  const kendouiContent: any = { id: shapeType };

  const x = Number(options.x) || 0;
  const y = Number(options.y) || 0;
  const width = Number(options.width) || 20;
  const height = Number(options.height) || 20;

  try {
    // 1. Insert the main SCD_SHAPE record.
    const inserted = await this.insertSCDShape(
      kendouiContent,
      shapeType,
      x,
      y,
      width,
      height
    );

    if (inserted?.shapeID == null || !inserted?.id) {
      console.error(
        "Shape insertion failed: no generated shape ID.",
        shapeType,
        inserted
      );
      this.statusMessage = `Could not insert ${shapeType} into the database.`;
      return;
    }

    // 2. Insert the associated SCD_SHAPE_GENERAL or other records.
    await this.insertSCDShapeTables(inserted.shapeID, shapeType);

    // 3. Create the diagram visual using the database-generated ID.
    const shapeOptions = {
      ...options,
      SHAPE_ID: inserted.id,
      SHAPE_TYPE: shapeType
    };

    this.addLibraryShape(libraryKind, shapeOptions, true);

  } catch (error) {
    console.error(
      `Failed to insert ${shapeType}:`,
      error
    );
    this.statusMessage = `Could not insert ${shapeType}.`;
  }
}


  private pointerToStage(event: PointerEvent): { x: number; y: number } | null {
    const target = event.currentTarget as HTMLElement | null;
    if (!target) return null;
    const rect = target.getBoundingClientRect();
    return { x: event.clientX - rect.left, y: event.clientY - rect.top };
  }

  private updateFreehandPreviewPath(): void {
    this.freehandPreviewPath = this.freehandPreviewPoints
      .map((point, index) => `${index === 0 ? "M" : "L"} ${point.x} ${point.y}`)
      .join(" ");
  }

  private pointerToModel(event: PointerEvent): { x: number; y: number } | null {
    if (!this.diagram || typeof window === "undefined") {
      return null;
    }
    const point = this.diagram.documentToModel({
      x: event.clientX + window.scrollX,
      y: event.clientY + window.scrollY
    } as any);
    if (!point || !Number.isFinite(point.x) || !Number.isFinite(point.y)) {
      return null;
    }
    return { x: point.x, y: point.y };
  }
  populateshapeAttributes(options:any,shapeType:any,shapeID:any){
      console.log("populateshapeAttributes:options:1:",{...options})
    const rawId = String(shapeID ?? "");
  const match = rawId.match(/[:_](\d+)$/);
  //const shape_ID = match ? match[1] : rawId;


  // Every shape has a record in SCD_SHAPE: its tooltip applies to all kinds.
  if (shapeType !== "button") {
    const shapeRow = this.findRowsByTable(this.ShapesInfoArr, shapeID, "SCD_SHAPE")[0];
    if (shapeRow && shapeRow.TOOLTIP_TEXT) {
      options.tooltipText = shapeRow.TOOLTIP_TEXT;
      options.tooltip = { "visible": true };
    }
    this.populateOtherShapeAttributes(options, shapeType, shapeID);
  }
console.log("populateshapeAttributes:options:",{...options})
  const buttonShapeTypes = ["button"];
    if (buttonShapeTypes.includes(shapeType)) {
      let tablesArr = this.findRowsByTable(this.ShapesInfoArr, shapeID, "SCD_BUTTON_APPEARANCE" )
      console.log ("tablesArr:",tablesArr);
      let stateStyles:any = {};
      for (let i=0;i<tablesArr.length;i++){
        let appearance = tablesArr[i];
        if (appearance.BUTTON_APPEARANCE == "UP"){
          stateStyles['up'] = appearance;
        }
        else if (appearance.BUTTON_APPEARANCE == "DOWN"){
          stateStyles['down'] = appearance;
        }
        else if (appearance.BUTTON_APPEARANCE == "DISABLED"){
          stateStyles['disabled'] = appearance;
        }

      }
      options['stateStyles'] = stateStyles;
      let buttonGeneral = this.findRowsByTable(this.ShapesInfoArr, shapeID, "SCD_BUTTON_GENERAL" );
      options.visual       = options.visual       ?? "button" +buttonGeneral[0].BUTTON_STYLE+ "Visual"; // default variant
      options.buttonState  = options.buttonState  ?? 'normal';
      options.disabled     = options.disabled     ?? false;
      options.allowHover     = buttonGeneral[0].HIGHLIGHT_WHEN_OBJECT_HAS_FOCUS;
      
      let shape = this.findRowsByTable(this.ShapesInfoArr, shapeID, "SCD_SHAPE" );
      if (shape[0].TOOLTIP_TEXT != ""){
        options.tooltipText = shape[0].TOOLTIP_TEXT
        options.tooltip = { "visible": true }
      }
      

    }
  }
  private addLibraryShape(kind: string, options: any = {}, exactPosition: boolean = false): void {
    if (!this.diagram) {
      this.statusMessage = "The diagram is not ready yet.";
      return;
    }
    const position = exactPosition
      ? { x: Number(options.x) || 0, y: Number(options.y) || 0 }
      : this.nextInsertPosition();
    const width = Math.max(20, Number(options.width) || 140);
    const height = Math.max(20, Number(options.height) || 90);
    let id = this.uniqueShapeId(kind);
    if (typeof options.SHAPE_ID != "undefined" )
      id =   options.SHAPE_ID ;
    this.populateshapeAttributes(options, kind,id);
    console.log("addLibraryShape:options:",options)
    const dataItem: any = {
      type: "libraryShape",
      title: this.libraryShapeTitle(kind),
      libraryKind: kind,
      width,
      height,
      strokeColor: options.strokeColor || "#2f4858",
      fillColor: options.fillColor || "#d9e8f5",
      editorStyle: { flipX: 1, flipY: 1 },
      ...options
    };
    delete dataItem.x;
    delete dataItem.y;
    console.log("dataItem:", dataItem, options)
    const standardType = kind === "ellipse"
      ? "circle"
      : kind === "image"
        ? "image"
        : "rectangle";
    const model: any = {
      id,
      type: standardType,
      x: position.x,
      y: position.y,
      width,
      height,
      dataItem
    };
    if (kind === "roundedRectangle") {
      model.cornerRadius = Math.min(22, height / 2);
    }
    if (kind === "image") {
      model.source = dataItem.source;
    }
    if (kind === "richText") {
      model.content = {
        blocks: Array.isArray(dataItem.richTextBlocks) ? dataItem.richTextBlocks : [{ children: [{ text: "Rich Text" }] }],
        align: "top left",
        padding: 10,
        margin: 2,
        color: "#333333",
        fontSize: 15
      };
    }
    if (kind === "Text") {
      model.content = {
       // blocks: Array.isArray(dataItem.TextBlocks) ? dataItem.TextBlocks : [{ children: [{ text: "Rich Text" }] }],
        align: "top left",
        padding: 10,
        margin: 2,
        color: "#333333",
        fontSize: 15
      };
    }
    (this.shapes as any[]).push(model);
    const runtime = this.diagram.addShape(model, true);
    this.diagram.deselect();
    this.diagram.select(runtime);
    this.syncRuntimeShapeToModel(runtime);
    this.schedulePersistState();
    this.statusMessage = `${this.libraryShapeTitle(kind)} added to the diagram.`;
    setTimeout(() => this.syncInspectorFromSelection(false));
  }
  // Add these methods to handle library shape rendering
  private schedulePersistState(){
  setTimeout(() => {
        this.updateShapes();
      }, 100);
    }
  private drawLibraryShape(dataItem: any, offsetX: number = 0, offsetY: number = 0, parentStyle?: ShapeEditorStyle): Group {
    const group = new Group();
    const width = Math.max(20, Number(dataItem.width) || 140);
    const height = Math.max(20, Number(dataItem.height) || 90);
    const x = offsetX;
    const y = offsetY;
    const style: ShapeEditorStyle = {
      ...(dataItem.editorStyle || {}),
      ...(parentStyle?.strokeColor ? { strokeColor: parentStyle.strokeColor } : {}),
      ...(parentStyle?.fillColor ? { fillColor: parentStyle.fillColor } : {})
    };
    const strokeOnly = dataItem.libraryKind === "line" || dataItem.libraryKind === "polyline"
      || dataItem.libraryKind === "freehand" || dataItem.libraryKind === "arc";
    const stroke = (strokeOnly && dataItem.animColor)
      || style.strokeColor || dataItem.strokeColor || "#2f4858";
    const fill = style.fillColor || dataItem.fillColor || "#d9e8f5";
    const kind = dataItem.libraryKind;
    if (dataItem.dbShape && this.drawDbShape(kind, group, x, y, width, height, dataItem, style)) {
      return group;
    }
    if (this.drawInstrumentShape(kind, group, x, y, width, height, dataItem)) {
      return group;
    }
  const buttonSpec = this.NAVIGATION_BUTTON_ICONS[kind];
    if (buttonSpec) {
      if (kind === "arrowVertical" || kind === "arrowHorizontal") {
        // Teal indicator panel with a black arrow (matches the reference diagram).
        group.append(new Rectangle({
          x, y, width, height,
          stroke: { color: "#1f2933", width: 1 },
          fill: { color: dataItem.animColor || "#008080" }
        }));
        const black = { color: "#000000", width: 2.5 };
        if (kind === "arrowVertical") {
          const cx = x + width / 2;
          group.append(new Path({ data: `M ${cx},${y + height} L ${cx},${y + 10}`, stroke: black, fill: { color: "transparent" } }));
          group.append(new Path({
            data: `M ${cx},${y + 4} L ${cx - 5},${y + 20} L ${cx + 5},${y + 20} Z`,
            stroke: { color: "#000000", width: 1 }, fill: { color: "#000000" }
          }));
        } else {
          const cy = y + height / 2;
          group.append(new Path({ data: `M ${x},${cy} L ${x + width},${cy}`, stroke: black, fill: { color: "transparent" } }));
          // Probe-style pointer measured from the reference diagram: a tall block
          // followed by a stepped taper, all as fractions of the panel size.
          const steps: Array<[number, number]> = [
            [0.5, 0.1], [0.545, 0.082], [0.65, 0.06], [0.74, 0.04], [0.84, 0.02], [0.94, 0.008]
          ];
          const end = 0.95;
          const top: string[] = [];
          const bottom: string[] = [];
          steps.forEach(([f, half], i) => {
            const next = i + 1 < steps.length ? steps[i + 1][0] : end;
            top.push(`${x + width * f},${cy - height * half} ${x + width * next},${cy - height * half}`);
            bottom.unshift(`${x + width * next},${cy + height * half} ${x + width * f},${cy + height * half}`);
          });
          group.append(new Path({
            data: `M ${top.join(" L ")} L ${bottom.join(" L ")} Z`,
            stroke: { color: "#000000", width: 0.5 }, fill: { color: "#000000" }
          }));
        }
        return group;
      }

      // Navy 3-D push button: lighter top/left edge, darker bottom/right edge.
      group.append(new Rectangle({ x, y, width, height, stroke: { color: "#00003c", width: 1 }, fill: { color: dataItem.animColor || "#000080" } }));
      group.append(new Path({
        data: `M ${x + 1},${y + height - 1} L ${x + 1},${y + 1} L ${x + width - 1},${y + 1}`,
        stroke: { color: "#2a2ae0", width: 3 }, fill: { color: "transparent" }
      }));
      group.append(new Path({
        data: `M ${x + width - 1},${y + 2} L ${x + width - 1},${y + height - 1} L ${x + 2},${y + height - 1}`,
        stroke: { color: "#00002a", width: 2 }, fill: { color: "transparent" }
      }));
      const size = Math.min(width, height) * 0.5;
      const ox = x + width / 2 - size / 2;
      const oy = y + height / 2 - size / 2;
      for (const poly of buttonSpec) {
        const data = poly
          .map((pt, i) => `${i === 0 ? "M" : "L"} ${ox + pt[0] * size},${oy + pt[1] * size}`)
          .join(" ") + " Z";
        group.append(new Path({ data, stroke: { color: "#ffffff", width: 1 }, fill: { color: "#ffffff" } }));
      }
      return group;
    }


    if (kind === "richText") {
      group.append(new Rectangle({
        x, y, width, height, cornerRadius: 4,
        stroke: { color: stroke},
        fill: { color: fill }
      }));

      // The supplied project is on Kendo UI 21.x (Angular 18). Native Diagram
      // rich-text blocks were introduced later, so keep the exact Kendo
      // blocks model in model.content AND render those same blocks here for
      // backwards-compatible visual output. When the project is upgraded, the
      // stored data is already in the official ShapeRichTextContent format.
      this.appendRichTextBlocks(
        group,
        Array.isArray(dataItem.richTextBlocks) ? dataItem.richTextBlocks : [],
        x + 10,
        y + 10,
        Math.max(20, width - 20),
        Math.max(20, height - 20)
      );
      return group;
    }
    if ( (kind === "Text")||(kind === "numeric")||(kind === "numericInput")
     ||(kind === "button") ||(kind === "buttonmomentry") || (kind === "buttonMaintained") 
     || (kind === "buttonLatched") || (kind === "buttonMultistate") || (kind === "buttonInterlocked")
     || (kind === "rampButton") || (kind === "navButton") || (kind === "timeDateDisplay") || (kind === "tagLabel")
     || (kind === "localMessage") || (kind === "text") || (kind === "stringInput") || (kind === "stringDisplay")
     || (kind == "banner") || (kind == "summary") || (kind == "logViewer") || (kind == "statusExplorer")
     ) {
      const background = new Rectangle({
        x, y, width, height, cornerRadius: 4,
        stroke: { color: stroke},
        fill: { color: fill }
      });
      const fontSize = Math.max(8, Number(dataItem.fontSize) || 16);
      const fontFamily = typeof dataItem.fontFamily === "string" && dataItem.fontFamily.length
        ? dataItem.fontFamily
        : "Arial, sans-serif";
      const textColor = style.strokeColor || dataItem.textColor || "#1f2937";
      const text = new TextBlock({
        text: String(dataItem.text ),
        x: x + 10,
        y: y + 12,
        fill: textColor,
        fontSize,
        fontFamily,
        fontWeight: dataItem.fontWeight || "normal"
      });
      group.append(background);
      group.append(text);
      return group;
      
    }

    if (kind === "image") {
      const background = new Rectangle({
        x, y, width, height,
        stroke: { color: stroke},
        fill: { color: fill }
      });
      group.append(background);
      if (dataItem.source) {
        group.append(new DiagramImage({ source: dataItem.source, x, y, width, height }));
      } else {
        const label = new TextBlock({ text: "Image", x: x + 12, y: y + height / 2 - 8, fill: "#555555" });
        label.options.fontSize = 15;
        group.append(label);
      }
      return group;
    }
    if (kind === "ellipse" && dataItem.animFlow) {
      const erx = width / 2;
      const ery = height / 2;
      const outline: number[][] = [];
      for (let i = 0; i <= 72; i++) {
        const t = (i / 72) * Math.PI * 2;
        outline.push([x + erx + erx * Math.cos(t), y + ery + ery * Math.sin(t)]);
      }
      group.append(new Path({
        data: `M ${outline.map(pt => pt.join(",")).join(" L ")} Z`,
        stroke: { color: "transparent", width: 0 },
        fill: { color: fill }
      }));
      group.append(new Path({
        data: this.flowDashData(outline, dataItem.animFlow),
        stroke: { color: stroke, width: 3 },
        fill: { color: "transparent" }
      }));
      return group;
    }
    if (kind === "ellipse" || kind === "wedge") {
      const rx = width / 2;
      const ry = height / 2;
      const cx = x + rx;
      const cy = y + ry;
      group.append(new Path({
        data: `M ${cx - rx},${cy} A ${rx},${ry} 0 1 0 ${cx + rx},${cy} A ${rx},${ry} 0 1 0 ${cx - rx},${cy} Z`,
        stroke: { color: stroke, width: 2 },
        fill: { color: fill }
      }));
      return group;
    }

    if (kind === "line") {
      const lineStart = dataItem.lineStart;
      const lineEnd = dataItem.lineEnd;
      if (lineStart && lineEnd) {
        // User-drawn line: the transparent frame keeps the drawing bbox equal
        // to the full shape box (a horizontal/vertical line has no extent on
        // one axis), so selection and resizing match the shape bounds.
        const frame = new Rectangle({
          x, y, width, height,
          stroke: { color: "transparent", width: 0 },
          fill: { color: "transparent" }
        });
        frame.options.opacity = 0.001;
        group.append(frame);
        const linePts = [
          [x + Number(lineStart.x) * width, y + Number(lineStart.y) * height],
          [x + Number(lineEnd.x) * width, y + Number(lineEnd.y) * height]
        ];
        group.append(new Path({
          data: dataItem.animFlow
            ? this.flowDashData(linePts, dataItem.animFlow)
            : `M ${linePts[0][0]},${linePts[0][1]} L ${linePts[1][0]},${linePts[1][1]}`,
          stroke: { color: stroke, width: dataItem.animFlow ? 4 : 2 },
          fill: { color: "transparent" }
        }));
        return group;
      }
      // Legacy line (saved before start/end points existed): horizontal, centered.
      // const centerY = y + height / 2;
      // group.append(new Path({
            //   data: dataItem.animFlow
      //     ? this.flowDashData([[x + 5, centerY], [x + width - 5, centerY]], dataItem.animFlow)
      //     : `M ${x + 5},${centerY} L ${x + width - 5},${centerY}`,
      //   stroke: { color: stroke, width: dataItem.animFlow ? 4 : 2 },
      //   fill: { color: "transparent" }
      // }));
    }
    if ((kind === "roundedRectangle" || kind === "rectangle") && dataItem.animFlow) {
      const corners = [[x, y], [x + width, y], [x + width, y + height], [x, y + height], [x, y]];
      group.append(new Rectangle({
        x, y, width, height,
        cornerRadius: kind === "roundedRectangle" ? Math.min(22, height / 2) : 0,
        stroke: { color: "transparent", width: 0 },
        fill: { color: fill }
      }));
      group.append(new Path({
        data: this.flowDashData(corners, dataItem.animFlow),
        stroke: { color: stroke, width: 3 },
        fill: { color: "transparent" }
      }));
      return group;
    }

    if (kind === "roundedRectangle" || kind === "rectangle") {
      group.append(new Rectangle({
        x, y, width, height,
        cornerRadius: kind === "roundedRectangle" ? Math.min(22, height / 2) : 0,
        stroke: { color: stroke, width: 2 },
        fill: { color: fill }
      }));
      return group;
    }
    if (kind === "container") {
      // Fill percent = value / max, clamped to 0-100%. Drawn as a rounded tank
      // body on a base band with two feet (matching the reference artwork):
      // an always-visible header holds the "NN% full" label and a gauge line,
      // and the liquid gauge fills the region below that from the bottom up.
      const max = Number(dataItem.containerMax) > 0 ? Number(dataItem.containerMax) : 100;
      const value = Number.isFinite(Number(dataItem.containerValue)) ? Number(dataItem.containerValue) : 0;
      const ratio = Math.max(0, Math.min(1, value / max));

      const bodyColor = "#0d1fa8";
      const liquidBorder = "#e53935";
      const bandHeight = Math.min(height * 0.14, 34);
      const bodyHeight = Math.max(10, height - bandHeight);
      const radius = Math.min(width, height) * 0.22;
      const inset = 6;
      const headerHeight = Math.max(18, bodyHeight * 0.16);

      // Body: rounded top corners, flat bottom (sits flush on the base band).
      // Rectangle only supports one uniform cornerRadius on all four corners,
      // so a mixed rounded-top/flat-bottom silhouette needs a hand-built path.
      const bodyPath = radius > 0
        ? `M ${x},${y + radius} A ${radius},${radius} 0 0 1 ${x + radius},${y} `
          + `L ${x + width - radius},${y} A ${radius},${radius} 0 0 1 ${x + width},${y + radius} `
          + `L ${x + width},${y + bodyHeight} L ${x},${y + bodyHeight} Z`
        : `M ${x},${y} L ${x + width},${y} L ${x + width},${y + bodyHeight} L ${x},${y + bodyHeight} Z`;
      group.append(new Path({
        data: bodyPath,
        stroke: { color: stroke, width: 2 },
        fill: { color: bodyColor }
      }));

      // Base band: rounded bottom corners, flat top (sits flush under the body).
      const bandY = y + bodyHeight;
      const bandRadius = Math.min(radius, bandHeight);
      const bandPath = bandRadius > 0
        ? `M ${x},${bandY} L ${x + width},${bandY} L ${x + width},${bandY + bandHeight - bandRadius} `
          + `A ${bandRadius},${bandRadius} 0 0 1 ${x + width - bandRadius},${bandY + bandHeight} `
          + `L ${x + bandRadius},${bandY + bandHeight} A ${bandRadius},${bandRadius} 0 0 1 ${x},${bandY + bandHeight - bandRadius} Z`
        : `M ${x},${bandY} L ${x + width},${bandY} L ${x + width},${bandY + bandHeight} L ${x},${bandY + bandHeight} Z`;
      group.append(new Path({
        data: bandPath,
        stroke: { color: stroke, width: 2 },
        fill: { color: bodyColor }
      }));

      // Two feet tabs on the band.
      const footWidth = Math.max(6, width * 0.09);
      const footHeight = Math.max(4, bandHeight * 0.45);
      const footY = bandY + bandHeight - footHeight * 0.5;
      [x + width * 0.28 - footWidth / 2, x + width * 0.72 - footWidth / 2].forEach(footX => {
        group.append(new Rectangle({
          x: footX, y: footY, width: footWidth, height: footHeight,
          cornerRadius: 2,
          stroke: { color: stroke, width: 1.5 },
          fill: { color: bodyColor }
        }));
      });

      // Gauge line separating the header from the liquid area, then the liquid
      // itself, inset within the body and anchored to the body's flat bottom.
      const gaugeTop = y + headerHeight;
      group.append(new Path({
        data: `M ${x + 4},${gaugeTop} L ${x + width - 4},${gaugeTop}`,
        stroke: { color: stroke, width: 1.5 },
        fill: { color: "transparent" }
      }));

      const gaugeBottom = y + bodyHeight - inset;
      const gaugeHeight = Math.max(0, gaugeBottom - gaugeTop);
      if (ratio > 0 && gaugeHeight > 0) {
        const fillHeight = gaugeHeight * ratio;
        group.append(new Rectangle({
          x: x + inset,
          y: gaugeBottom - fillHeight,
          width: Math.max(0, width - inset * 2),
          height: fillHeight,
          stroke: { color: liquidBorder, width: 2 },
          fill: { color: fill }
        }));
      }

      const label = new TextBlock({
        text: `${Math.round(ratio * 100)}% full`,
        x: x + width / 2,
        y: y + 6,
        fill: "#ffffff"
      });
      label.options.fontSize = 13;
      label.options.fontWeight = "bold";
      label.options.textAnchor = "middle";
      group.append(label);

      return group;
    }

    if (kind === "arc") {
      // Sample the curve so Flow can lay dashes along it.
      const arcPoints: number[][] = [];
      for (let i = 0; i <= 48; i++) {
        const t = i / 48;
        const u = 1 - t;
        arcPoints.push([
          u * u * x + 2 * u * t * (x + width / 2) + t * t * (x + width),
          u * u * (y + height) + 2 * u * t * (y - height) + t * t * (y + height)
        ]);
      }
      group.append(new Path({
        // Peak of this curve is exactly the top of the box (control point at y - height).
        data: dataItem.animFlow
          ? this.flowDashData(arcPoints, dataItem.animFlow)
          : `M ${x},${y + height} Q ${x + width / 2},${y - height} ${x + width},${y + height}`,
        stroke: { color: stroke, width: dataItem.animFlow ? 4 : 3 },
        fill: { color: "transparent" }
      }));
      return group;
    }

    const points = Array.isArray(dataItem.points) ? dataItem.points : [];
    if (kind === "freehand" && points.length >= 2) {
      // Points are stored in the pixels of the original drawing. Scale them to
      // the shape's current width/height so a resized FreeHand keeps its size
      // when it is redrawn, restored from saved state or ungrouped.
      const extentX = Math.max(...points.map((point: any) => Number(point.x)));
      const extentY = Math.max(...points.map((point: any) => Number(point.y)));
      const pointScaleX = extentX > 0 ? width / extentX : 1;
      const pointScaleY = extentY > 0 ? height / extentY : 1;
      const pathData = dataItem.animFlow
        ? this.flowDashData(points.map((point: any) => [x + Number(point.x) * pointScaleX, y + Number(point.y) * pointScaleY]), dataItem.animFlow)
        : points.map((point: any, index: number) =>
          `${index === 0 ? "M" : "L"} ${x + Number(point.x) * pointScaleX},${y + Number(point.y) * pointScaleY}`
        ).join(" ");
      group.append(new Path({
        data: pathData,
        stroke: { color: stroke, width: dataItem.animFlow ? 4 : 3 },
        fill: { color: "transparent" }
      }));
      return group;
    }

    if ((kind === "polygon" && points.length >= 3) || (kind === "polyline" && points.length >= 2)) {
      const ref = dataItem.pointRef;
      const extX = ref?.w > 0 ? ref.w : Math.max(...points.map((point: any) => Number(point.x)));
      const extY = ref?.h > 0 ? ref.h : Math.max(...points.map((point: any) => Number(point.y)));
      const sx = extX > 0 ? width / extX : 1;
      const sy = extY > 0 ? height / extY : 1;
      const drawn = points.map((point: any, index: number) =>
        `${index === 0 ? "M" : "L"} ${x + Number(point.x) * sx},${y + Number(point.y) * sy}`
      ).join(" ");
      const flowPts = points.map((point: any) => [x + Number(point.x) * sx, y + Number(point.y) * sy]);
      if (kind === "polygon" && dataItem.animFlow) {
        // Keep the filled body, and run dashes along the closed outline.
        group.append(new Path({ data: `${drawn} Z`, stroke: { color: "transparent", width: 0 }, fill: { color: fill } }));
        group.append(new Path({
          data: this.flowDashData([...flowPts, flowPts[0]], dataItem.animFlow),
          stroke: { color: stroke, width: 3 },
          fill: { color: "transparent" }
        }));
        return group;
      }
      group.append(new Path({
        data: kind === "polyline" && dataItem.animFlow
          ? this.flowDashData(flowPts, dataItem.animFlow)
          : (kind === "polygon" ? `${drawn} Z` : drawn),
        stroke: { color: stroke, width: kind === "polygon" ? 2 : (dataItem.animFlow ? 4 : 3) },
        fill: { color: kind === "polygon" ? fill : "transparent" }
      }));
      return group;
    }
    if (kind === "polygon" && dataItem.animFlow) {
      const outline = [
        [x + width / 2, y], [x + width, y + height * 0.38], [x + width * 0.82, y + height],
        [x + width * 0.18, y + height], [x, y + height * 0.38]
      ];
      group.append(new Path({
        data: `M ${outline.map(pt => pt.join(",")).join(" L ")} Z`,
        stroke: { color: "transparent", width: 0 },
        fill: { color: fill }
      }));
      group.append(new Path({
        data: this.flowDashData([...outline, outline[0]], dataItem.animFlow),
        stroke: { color: stroke, width: 3 },
        fill: { color: "transparent" }
      }));
      return group;
    }
    // if (kind === "polygon") {
    //   group.append(new Path({
    //     data: `M ${x + width / 2},${y} L ${x + width},${y + height * 0.38} L ${x + width * 0.82},${y + height} L ${x + width * 0.18},${y + height} L ${x},${y + height * 0.38} Z`,
    //     stroke: { color: stroke, width: 2 },
    //     fill: { color: fill }
    //   }));
    //   return group;
    // }

    // if (kind === "polyline") {
    //   group.append(new Path({
    //     // The outline spans the full box top-to-bottom (y fractions 1, 0.08, 0.88,
    //     // 0). A path that fills only part of its box makes Kendo shrink the box
    //     // to the outline, and the outline shrinks again on every recreate.
    //     data: `M ${x},${y + height} L ${x + width * 0.28},${y + height * 0.08} L ${x + width * 0.56},${y + height * 0.88} L ${x + width},${y}`,
    //     stroke: { color: stroke, width: 3 },
    //     fill: { color: "transparent" }
    //   }));
    //   return group;
    // }

    return group;
  }
// Add these helper methods for model synchronization
private runtimeShapeId(shape: any): string {
  const id = shape?.id
    ?? shape?.options?.id
    ?? shape?.dataItem?.id
    ?? shape?.dataItem?.dataItem?.id
    ?? shape?.options?.dataItem?.id
    ?? shape?.options?.dataItem?.dataItem?.id;

  return id === undefined || id === null ? "" : String(id);
}

private modelForShape(shape: any): any | null {
  const id = this.runtimeShapeId(shape);
  if (id) {
    const byId = (this.shapes as any[]).find(model => String(model?.id ?? "") === id);
    if (byId) {
      return byId;
    }
  }

  const runtimeData = this.shapeDataItem(shape);
  return (this.shapes as any[]).find(model => {
    const modelData = model?.dataItem?.dataItem ?? model?.dataItem;
    return modelData === runtimeData;
  }) ?? null;
}

private shapeDataItem(shape: any): any {
  return shape?.dataItem?.dataItem
    ?? shape?.dataItem
    ?? shape?.options?.dataItem?.dataItem
    ?? shape?.options?.dataItem
    ?? null;
}
private readRotation(shape: any): number {
    const value = typeof shape?.rotate === "function" ? shape.rotate() : 0;
    if (typeof value === "number" && Number.isFinite(value)) {
      return value;
    }
    if (value && Number.isFinite(Number(value.angle))) {
      return Number(value.angle);
    }
    return 0;
  }
private syncRuntimeShapeToModel(shape: any): void {
      if (this.isDiagramInitializing) {
    return;
  }
    const model = this.modelForShape(shape);
    if (!model || typeof shape?.bounds !== "function") {
      return;
    }

    const bounds = shape.bounds();
    model.x = bounds.x;
    model.y = bounds.y;
    model.width = bounds.width;
    model.height = bounds.height;
    model.rotation = { angle: this.readRotation(shape) };

    const runtimeData = this.shapeDataItem(shape);
    const runtimeOuterData = shape.dataItem;
    
    if (runtimeData && typeof runtimeData === "object") {
      runtimeData.width = bounds.width;
      runtimeData.height = bounds.height;
    }
    if (runtimeData?.editorStyle !== undefined) {
      model.dataItem ??= {};
      const modelData = model.dataItem?.dataItem ?? model.dataItem;
      modelData.editorStyle = this.clonePlain(runtimeData.editorStyle);
    }
    if (runtimeData && typeof runtimeData === "object"
        && "stateStyles" in runtimeData) {
      model.dataItem ??= {};
      const modelData = model.dataItem?.dataItem ?? model.dataItem;

      modelData.stateStyles = this.clonePlain(runtimeData.stateStyles);
      /////
      if (runtimeOuterData?.tooltip !== undefined) {
        model.tooltip =
          this.clonePlain(runtimeOuterData.tooltip);
      }

      if (runtimeOuterData?.tooltipText !== undefined) {
        model.tooltipText = runtimeOuterData.tooltipText;
      }

      // Inner saved library metadata.
      if (modelData && typeof modelData === "object") {
        if (runtimeData?.tooltip !== undefined) {
          modelData.tooltip =
            this.clonePlain(runtimeData.tooltip);
        }

        if (runtimeData?.tooltipText !== undefined) {
          modelData.tooltipText = runtimeData.tooltipText;
        }
      }
    }

    // The runtime shape's dataItem is not always the same object reference as
    // this.shapes' own dataItem (this.shapes is what gets persisted), so a
    // library shape's (ellipse/rectangle/etc.) size read via dataItem.width by
    // drawLibraryShape can silently go stale relative to the persisted model
    // unless it is written here too.
    if (model.dataItem && typeof model.dataItem === "object") {
      const modelData = model.dataItem?.dataItem ?? model.dataItem;
      if (modelData && typeof modelData === "object" && "width" in modelData) {
        modelData.width = bounds.width;
        modelData.height = bounds.height;
      }
    }
    

    this.schedulePersistState();
  }


// Add these properties
public showGrid: boolean = false;
public snapEnabled: boolean = true;
public rotationAngle: number = 0;
public strokeColor: string = "#333333";
public fillColor: string = "#d9e8f5";
public selectedRichTextFontFamily = "Arial";
public selectedRichTextFontSize = 16;
// Container fill: percentage shown = (value / max) * 100, clamped 0-100%.
public selectedContainerValue = 30;
public selectedContainerMax = 100;
// Explicit Kendo Editor choices requested in review.
  public readonly richTextFontFamilies = [
    { text: "Arial", fontName: "Arial, Helvetica, sans-serif" },
    { text: "Calibri", fontName: "Calibri, Arial, sans-serif" },
    { text: "Times New Roman", fontName: "Times New Roman, Times, serif" },
    { text: "Georgia", fontName: "Georgia, Times, serif" },
    { text: "Courier New", fontName: "Courier New, Courier, monospace" }
  ];

  public readonly richTextFontSizes = [
    { text: "10px", size: 10 },
    { text: "12px", size: 12 },
    { text: "14px", size: 14 },
    { text: "16px", size: 16 },
    { text: "18px", size: 18 },
    { text: "20px", size: 20 },
    { text: "24px", size: 24 },
    { text: "32px", size: 32 }
  ];
// Bounds exactly as saved. Kendo re-derives a custom visual's bounds from the
  // drawn visual when the Diagram is created, which can be a few pixels off the
  // saved size, so they are re-applied once the Diagram exists.
  private savedBounds = new Map<string, { x: number; y: number; width: number; height: number }>();

// Add these methods for the toolbar functionality

// ===== Display Controls =====
public toggleGrid(): void {
  this.showGrid = !this.showGrid;
  // Note: Kendo Diagram doesn't have built-in grid toggle
  // You might need to implement this via CSS or custom layer
  this.statusMessage = this.showGrid ? "Grid shown." : "Grid hidden.";
}

public toggleSnap(): void {
  this.snapEnabled = !this.snapEnabled;
  this.statusMessage = this.snapEnabled
    ? "Snap ON: shapes move in grid steps."
    : "Snap OFF: shapes move freely.";
}
public zoomOut(): void {
  console.log("zoomOut", this.zoomLevel, this.zoomMin);

  const newZoom = this.zoomLevel - 0.1;

  if (newZoom < this.zoomMin) {
    return;
  }
  const shapes = this.diagram.diagramShapes;
  const box = this.diagram.boundingBox(shapes);
  this.zoomLevel = newZoom;

  
}

public zoomIn(): void {
  console.log("zoomIn", this.zoomLevel, this.zoomMax);

  const newZoom = this.zoomLevel + 0.1;

  if (newZoom > this.zoomMax) {
    return;
  }

  this.zoomLevel = newZoom;
  const shapes = this.diagram.diagramShapes;
  const box = this.diagram.boundingBox(shapes);

  
}
public zoomToFit(): void {
    if (!this.diagram || !this.diagram.diagramShapes.length) {
      this.statusMessage = "There are no shapes to fit.";
      return;
    }

    const shapes = this.diagram.diagramShapes;
    const box = this.diagram.boundingBox(shapes);
    const viewport = this.diagram.viewport();

    if (!box || !viewport || box.width <= 0 || box.height <= 0) {
      return;
    }

    // viewport() is expressed in model coordinates. Multiplying the current
    // zoom by the ratio gives the zoom that fits the entire shape bounds.
    const scaleX = viewport.width / box.width;
    const scaleY = viewport.height / box.height;
    const targetZoom = this.zoomLevel * Math.min(scaleX, scaleY) * 0.9;

    this.zoomLevel = Math.max(
      this.zoomMin,
      Math.min(this.zoomMax, Number(targetZoom.toFixed(2)))
    );

    setTimeout(() => {
      this.diagram?.bringIntoView(box, { align: "center middle", animate: false });
    });

    this.statusMessage = `Zoomed to fit (${Math.round(this.zoomLevel * 100)}%).`;
  }

// ===== Shape Controls =====
public copySelected(): void {
    if (!this.requireSelection("copy")) {
      return;
    }

    // Make sure Kendo's clipboard sees the latest color/fill/size/rotation.
    this.selectedShapes().forEach(shape => this.syncRuntimeShapeToModel(shape));

    this.diagram!.copy();
    const count = this.diagram!.selection.length;
    this.statusMessage = `Copied ${count} selected item${count === 1 ? "" : "s"}.`;
  }

  public paste(): void {
    if (!this.diagram) {
      return;
    }
    this.diagram.paste();
    this.statusMessage = "Pasted clipboard contents.";
    setTimeout(() => {
      this.synchronizeModelsWithRuntime();
      this.syncInspectorFromSelection(false);
    });
  }

  public deleteSelected(): void {
    if (!this.requireSelection("delete")) {
      return;
    }
    const selection = [...this.diagram!.selection];
    const removedIds = selection.map(item => this.runtimeShapeId(item)).filter(Boolean);
    this.diagram!.remove(selection, true);
    this.removeModelsByIds(removedIds);
    this.selectedCount = 0;
    this.statusMessage = `Deleted ${selection.length} item${selection.length === 1 ? "" : "s"}.`;
    setTimeout(() => {
      this.synchronizeModelsWithRuntime();
      this.syncInspectorFromSelection(false);
    });
  }

public duplicateSelected(): void {
    if (!this.requireSelection("duplicate")) {
      return;
    }

    // Synchronize current appearance before Kendo creates its clipboard copy.
    this.selectedShapes().forEach(shape => this.syncRuntimeShapeToModel(shape));

    this.diagram!.copy();
    this.diagram!.paste();
    this.statusMessage = "Duplicated the selected diagram item(s).";
    setTimeout(() => {
      this.synchronizeModelsWithRuntime();
      this.syncInspectorFromSelection(false);
    });
  }

  public sendToBack(): void {
    if (!this.requireSelection("send to back")) {
      return;
    }
    const selected = this.selectedShapes();
    this.diagram!.bringToBack([...this.diagram!.selection], true);
    this.persistZOrder(selected, false);
    this.statusMessage = "Sent the selected item(s) to the back.";
  }

  public bringToFront(): void {
    if (!this.requireSelection("bring to front")) {
      return;
    }
    const selected = this.selectedShapes();
    this.diagram!.bringToFront([...this.diagram!.selection], true);
    this.persistZOrder(selected, true);
    this.statusMessage = "Brought the selected item(s) to the front.";
  }

public alignToGrid(): void {
  const shapes = this.selectedShapes();
  if (!shapes.length) {
    this.statusMessage = "Select at least one shape to align to the grid.";
    return;
  }
  this.alignShapesToGrid(shapes, true);
}





public applyStrokeColor(): void {
    const shapes = this.selectedShapes();
    if (!shapes.length) {
      this.statusMessage = "Select at least one shape before changing its color.";
      return;
    }

    for (const shape of shapes) {
      const style = this.editorStyleFor(shape);
      style.strokeColor = this.strokeColor;
      this.persistEditorStyle(shape, style);
      if (this.shapeDataItem(shape)?.dbShape) {
        this.refreshCustomShape(shape);
        continue;
      }
      // Recolor the existing Drawing visual directly. Do NOT redraw the shape:
      // redrawVisual()/refresh() can recalculate bounds from path geometry and
      // collapse Line/Arc/FreeHand shapes to Kendo's 20px minimum size.
      this.applyColorToRuntimeVisual(shape, "stroke", this.strokeColor);
    }
    this.statusMessage = `Applied color ${this.strokeColor}.`;
  }
   /**
   * Change stroke/fill on the already-rendered Kendo Drawing tree without
   * calling redrawVisual(), refresh() or redraw(). Those redraw APIs can call
   * updateBounds() internally and derive the Diagram shape size from a thin
   * Path (Line/Arc/FreeHand), which collapses width/height to the 20px minimum.
   *
   * The persisted editorStyle remains the source of truth for future rebuilds;
   * this method is only the geometry-safe live visual update.
   */
  private applyColorToRuntimeVisual(
    shape: any,
    mode: "stroke" | "fill",
    color: string
  ): void {
    const beforeBounds = typeof shape?.bounds === "function"
      ? shape.bounds() //was ? { ...shape.bounds() }
      : null;
    const beforeRotation = this.readRotation(shape);
    const roots = [shape?.shapeVisual, shape?.visual].filter(Boolean);
    const visited = new Set<any>();

    const isTransparent = (value: unknown): boolean => {
      const normalized = String(value ?? "").trim().toLowerCase();
      return normalized === "" || normalized === "none" || normalized === "transparent" ||
        normalized === "rgba(0,0,0,0)" || normalized === "rgba(0, 0, 0, 0)";
    };

    const visit = (node: any): void => {
      if (!node || visited.has(node)) {
        return;
      }
      visited.add(node);

      const ctor = String(node?.constructor?.name || "").toLowerCase();
      const options = node?.options || {};
      const drawingElement = node?.drawingElement;

      if (mode === "stroke") {
        const hasStroke = options.stroke !== undefined || typeof drawingElement?.stroke === "function";
        if (hasStroke && !ctor.includes("text") && !ctor.includes("image")) {
          if (options.stroke && typeof options.stroke === "object") {
            options.stroke.color = color;
          }
          if (typeof drawingElement?.stroke === "function") {
            // Width/opacity are intentionally omitted so Kendo retains them.
            drawingElement.stroke(color);
          }
        }
      } else {
        // Fill changes should affect actual filled geometry only. Text and
        // images keep their own colors/content, and open paths (line/arc/etc.)
        // whose fill is transparent remain unfilled.
        const fillOption = options.fill;
        const fillColor = typeof fillOption === "string" ? fillOption : fillOption?.color;
        const fillable = fillOption !== undefined && !isTransparent(fillColor);
        if (fillable && !ctor.includes("text") && !ctor.includes("image")) {
          if (fillOption && typeof fillOption === "object") {
            fillOption.color = color;
          } else if (typeof fillOption === "string") {
            options.fill = color;
          }
          if (typeof drawingElement?.fill === "function") {
            drawingElement.fill(color);
          }
        }
      }

      for (const child of node?.children || []) {
        visit(child);
      }
      // Some Diagram wrappers expose the actual shape visual separately.
      if (node?.shapeVisual && node.shapeVisual !== node) {
        visit(node.shapeVisual);
      }
    };

    for (const root of roots) {
      visit(root);
    }

    // Absolute regression guarantee: even if a future Kendo drawing version
    // decides to update Diagram bounds as a side-effect of changing drawing
    // styles, put the exact original geometry back before syncing app memory.
    if (beforeBounds && typeof shape?.bounds === "function") {
      const afterBounds = shape.bounds();
      const geometryChanged = !afterBounds ||
        Math.abs(Number(afterBounds.x) - Number(beforeBounds.x)) > 0.01 ||
        Math.abs(Number(afterBounds.y) - Number(beforeBounds.y)) > 0.01 ||
        Math.abs(Number(afterBounds.width) - Number(beforeBounds.width)) > 0.01 ||
        Math.abs(Number(afterBounds.height) - Number(beforeBounds.height)) > 0.01;
      if (geometryChanged) {
        shape.bounds(beforeBounds);
      }
    }
    if (typeof shape?.rotate === "function" && this.readRotation(shape) !== beforeRotation) {
      shape.rotate(beforeRotation);
    }

    shape?.refreshConnections?.();
    this.syncRuntimeShapeToModel(shape);
  }

  public applyFillColor(): void {
    const shapes = this.selectedShapes();
    if (!shapes.length) {
      this.statusMessage = "Select at least one shape before changing its fill.";
      return;
    }

    for (const shape of shapes) {
      const style = this.editorStyleFor(shape);
      style.fillColor = this.fillColor;
      this.persistEditorStyle(shape, style);
      if (this.shapeDataItem(shape)?.dbShape) {
        // Bevelled borders / patterns are several nodes: redraw from the attributes.
        this.refreshCustomShape(shape);
        continue;
      }
      // Same rule as stroke: appearance updates are visual-only and must never
      // recreate the shape or modify its logical bounds.
      this.applyColorToRuntimeVisual(shape, "fill", this.fillColor);
    }
    this.statusMessage = `Applied fill ${this.fillColor}.`;
  }

  public applyRotation(): void {
    const angle = Number(this.rotationAngle);
    if (!Number.isFinite(angle)) {
      this.statusMessage = "Rotation must be a valid angle in degrees.";
      return;
    }

    const shapes = this.selectedShapes();
    if (!shapes.length) {
      this.statusMessage = "Select at least one shape before rotating it.";
      return;
    }

    for (const shape of shapes) {
      shape.rotate(angle, undefined, true);
      shape.refreshConnections?.();
      this.syncRuntimeShapeToModel(shape);
    }
    this.statusMessage = `Rotation set to ${angle}°.`;
    setTimeout(() => this.syncInspectorFromSelection(false));
  }

public groupSelected(): void {
    if (!this.diagram) {
      return;
    }

    const selected = this.selectedShapes();
    if (selected.length < 2) {
      this.statusMessage = "Select at least two shapes to group them.";
      return;
    }

    // Snapshot the LIVE runtime shapes. This is important for duplicated and
    // compound/custom shapes: the clipboard can create a runtime item before
    // application memory has a completely independent model for it. Building
    // the group children from runtime bounds/data guarantees that every
    // selected visual is represented exactly once.
    selected.forEach(shape => this.syncRuntimeShapeToModel(shape));

    const selectedBounds = selected.map(shape => shape.bounds());
    const minX = Math.min(...selectedBounds.map(bounds => bounds.x));
    const minY = Math.min(...selectedBounds.map(bounds => bounds.y));
    const maxX = Math.max(...selectedBounds.map(bounds => bounds.x + bounds.width));
    const maxY = Math.max(...selectedBounds.map(bounds => bounds.y + bounds.height));
    // Rect (not a plain literal) - it is reused as the argument to
    // shape.bounds(), which requires a real Rect (calls rect.topLeft()).
    const box = new Rect(minX, minY, maxX - minX, maxY - minY);
    if (box.width <= 0 || box.height <= 0) {
      return;
    }

    const children = selected.map((shape, index) => {
      const bounds = shape.bounds();
      const model = this.modelForShape(shape);
      const child: any = model
        ? this.clonePlain(model)
        : (this.createModelFromRuntimeShape(shape) || {});

      child.id = String(child.id || `group-child-${index + 1}`);
      child.x = bounds.x - box.x;
      child.y = bounds.y - box.y;
      child.width = bounds.width;
      child.height = bounds.height;
      child.rotation = { angle: this.readRotation(shape) };
      child.dataItem = this.clonePlain(this.shapeDataItem(shape) ?? child.dataItem ?? {});

      const childData = child.dataItem?.dataItem ?? child.dataItem;
      if (childData && typeof childData === "object") {
        childData.width = bounds.width;
        childData.height = bounds.height;
      }

      // Functions cannot be serialized and the shared visual template is
      // supplied by shapeDefaults when the child is later restored.
      delete child.visual;
      return child;
    });

    const selectedIds = selected
      .map(shape => this.runtimeShapeId(shape))
      .filter(Boolean);

    const groupId = this.uniqueShapeId("group");
    const groupModel: any = {
      id: groupId,
      type: "rectangle",
      x: box.x,
      y: box.y,
      width: box.width,
      height: box.height,
      dataItem: {
        type: "group",
        title: `Group (${children.length} shapes)`,
        groupChildren: children,
        groupOriginalWidth: box.width,
        groupOriginalHeight: box.height,
        width: box.width,
        height: box.height,
        editorStyle: { flipX: 1, flipY: 1 }
      }
    };

    this.diagram.remove(selected, true);
    this.removeModelsByIds(selectedIds);
    (this.shapes as any[]).push(groupModel);

    const groupedShape = this.diagram.addShape(groupModel, true);

    // Kendo may re-measure a custom visual during creation. Apply the intended
    // union bounds AFTER the visual exists, and once more on the next task, so
    // non-simple/compound children cannot collapse to a content-only bbox.
    groupedShape.bounds(box);
    groupedShape.updateModel?.(true);

    this.diagram.deselect();
    this.diagram.select(groupedShape);
    this.syncRuntimeShapeToModel(groupedShape);
    this.schedulePersistState();
    this.statusMessage = `Grouped ${children.length} shapes into one shape.`;

    setTimeout(() => {
      if (typeof groupedShape?.bounds === "function") {
        groupedShape.bounds(box);
        groupedShape.updateModel?.(true);
        groupedShape.refreshConnections?.();
        this.syncRuntimeShapeToModel(groupedShape);
      }
      this.syncInspectorFromSelection(false);
    });
  }
    public ungroupSelected(): void {
    if (!this.diagram) {
      return;
    }
    const selected = this.selectedShapes();
    if (selected.length !== 1 || !this.isGroupRuntimeShape(selected[0])) {
      this.statusMessage = "Select one grouped shape to ungroup it.";
      return;
    }

    const groupShape = selected[0];
    this.syncRuntimeShapeToModel(groupShape);
    const groupModel = this.modelForShape(groupShape);
    const dataItem = this.shapeDataItem(groupShape);
    const children = this.clonePlain<any[]>(dataItem?.groupChildren || []);
    if (!groupModel || !children.length) {
      this.statusMessage = "This group does not contain restorable child shapes.";
      return;
    }

    const bounds = groupShape.bounds();
    const originalWidth = Math.max(1, Number(dataItem.groupOriginalWidth) || Number(groupModel.width) || bounds.width);
    const originalHeight = Math.max(1, Number(dataItem.groupOriginalHeight) || Number(groupModel.height) || bounds.height);
    const scaleX = bounds.width / originalWidth;
    const scaleY = bounds.height / originalHeight;
    const groupAngle = this.readRotation(groupShape);
    const groupStyle = dataItem.editorStyle || {};
    const parentFlipX = groupStyle.flipX === -1 ? -1 : 1;
    const parentFlipY = groupStyle.flipY === -1 ? -1 : 1;
    const centerX = bounds.x + bounds.width / 2;
    const centerY = bounds.y + bounds.height / 2;
    const angleRadians = groupAngle * Math.PI / 180;
    const cos = Math.cos(angleRadians);
    const sin = Math.sin(angleRadians);

    this.diagram.remove([groupShape], true);
    this.removeModelsByIds([this.runtimeShapeId(groupShape)]);

    const restoredRuntime: any[] = [];
    for (const storedChild of children) {
      const child = this.clonePlain<any>(storedChild);
      const localWidth = Math.max(1, Number(child.width) || 100);
      const localHeight = Math.max(1, Number(child.height) || 100);
      let localX = Number(child.x) || 0;
      let localY = Number(child.y) || 0;

      if (parentFlipX === -1) {
        localX = originalWidth - localX - localWidth;
      }
      if (parentFlipY === -1) {
        localY = originalHeight - localY - localHeight;
      }

      const childWidth = localWidth * Math.abs(scaleX);
      const childHeight = localHeight * Math.abs(scaleY);
      let childCenterX = bounds.x + (localX + localWidth / 2) * scaleX;
      let childCenterY = bounds.y + (localY + localHeight / 2) * scaleY;

      if (groupAngle) {
        const dx = childCenterX - centerX;
        const dy = childCenterY - centerY;
        childCenterX = centerX + dx * cos - dy * sin;
        childCenterY = centerY + dx * sin + dy * cos;
      }

      child.id = this.uniqueShapeId(String(child.id || "shape"));
      child.x = childCenterX - childWidth / 2;
      child.y = childCenterY - childHeight / 2;
      child.width = childWidth;
      child.height = childHeight;
      const childAngle = Number(child?.rotation?.angle) || 0;
      child.rotation = { angle: childAngle + groupAngle };

      child.dataItem ??= {};
      const childData = child.dataItem?.dataItem ?? child.dataItem;
      childData.width = childWidth;
      childData.height = childHeight;
      childData.editorStyle ??= { flipX: 1, flipY: 1 };
      childData.editorStyle.flipX = (childData.editorStyle.flipX ?? 1) * parentFlipX;
      childData.editorStyle.flipY = (childData.editorStyle.flipY ?? 1) * parentFlipY;

      (this.shapes as any[]).push(child);
      const restoredShape = this.diagram.addShape(child, true);
      // Kendo re-derives bounds from the drawn visual (stroke included), which
      // grows each shape by a pixel per ungroup. Pin the intended box.
      restoredShape.bounds(new Rect(child.x, child.y, childWidth, childHeight));
      restoredShape.updateModel?.(true);
      restoredRuntime.push(restoredShape);
    }

    this.diagram.deselect();
    if (restoredRuntime.length) {
      this.diagram.select(restoredRuntime);
    }
    this.synchronizeModelsWithRuntime();
    this.schedulePersistState();
    this.statusMessage = `Ungrouped into ${restoredRuntime.length} separate shapes.`;
    setTimeout(() => this.syncInspectorFromSelection(false));
  }
// ===== Helper methods =====
private selectedShapes(): any[] {
  if (!this.diagram) {
    return [];
  }
  return this.onlyShapes(this.diagram.selection || []);
}

private onlyShapes(items: any[]): any[] {
  if (!this.diagram) {
    return [];
  }
  return (items || []).filter((item) => this.diagram!.diagramShapes.includes(item));
}

private requireSelection(action: string): boolean {
  if (!this.diagram || !this.diagram.selection.length) {
    this.statusMessage = `Select at least one diagram item to ${action}.`;
    return false;
  }
  return true;
}

private alignShapesToGrid(shapes: any[], showStatus: boolean): void {
    for (const shape of shapes) {
      const bounds = shape.bounds();
      const x = Math.round(bounds.x / this.gridSize) * this.gridSize;
      const y = Math.round(bounds.y / this.gridSize) * this.gridSize;
      this.moveShapePreservingBounds(shape, x, y, true);
    }

    if (showStatus) {
      this.statusMessage = `Aligned ${shapes.length} shape${shapes.length === 1 ? "" : "s"} to the ${this.gridSize}px grid.`;
    }
    setTimeout(() => this.syncInspectorFromSelection(false));
  }

private isGroupRuntimeShape(shape: any): boolean {
  return Array.isArray(this.shapeDataItem(shape)?.groupChildren);
}

private removeModelsByIds(ids: string[]): void {
  const idSet = new Set(ids.map(String));
  if (!idSet.size) {
    return;
  }

  for (let i = this.shapes.length - 1; i >= 0; i--) {
    if (idSet.has(String((this.shapes as any[])[i]?.id ?? ""))) {
      this.shapes.splice(i, 1);
    }
  }
  this.updateShapes();
}

private synchronizeModelsWithRuntime(): void {
  if (!this.diagram) {
    return;
  }

  const runtimeShapes = [...(this.diagram.diagramShapes || [])];
  const runtimeIds = new Set<string>();

  for (const shape of runtimeShapes) {
    let model = this.modelForShape(shape);
    const id = this.runtimeShapeId(shape);
    if (id) {
      runtimeIds.add(id);
    }

    if (!model) {
      model = this.createModelFromRuntimeShape(shape);
      if (model) {
        (this.shapes as any[]).push(model);
      }
    }
    this.syncRuntimeShapeToModel(shape);
  }

  // Remove models that no longer exist
  if (runtimeIds.size === runtimeShapes.length) {
    for (let i = this.shapes.length - 1; i >= 0; i--) {
      const id = String((this.shapes as any[])[i]?.id ?? "");
      if (id && !runtimeIds.has(id)) {
        this.shapes.splice(i, 1);
      }
    }
  }
}

private createModelFromRuntimeShape(shape: any): any | null {
  if (typeof shape?.bounds !== "function") {
    return null;
  }

  const bounds = shape.bounds();
  const model: any = {
    id: this.runtimeShapeId(shape) || this.nextShapeId(),
    x: bounds.x,
    y: bounds.y,
    width: bounds.width,
    height: bounds.height,
    dataItem: this.clonePlain(this.shapeDataItem(shape) ?? {})
  };

  const angle = this.readRotation(shape);
  if (angle) {
    model.rotation = { angle };
  }

  return model;
}

private nextShapeId(): string {
  const existing = new Set((this.shapes as any[]).map(model => String(model?.id ?? "")));
  let n = this.shapes.length + 1;
  let candidate = `shape${n}`;
  while (existing.has(candidate)) {
    candidate = `shape${++n}`;
  }
  return candidate;
}

private clonePlain<T>(value: T): T {
  if (value === undefined || value === null) {
    return value;
  }
  try {
    return JSON.parse(JSON.stringify(value)) as T;
  } catch {
    return value;
  }
}

  private refreshCustomShape(shape: any): void {
    // Preserve the Diagram model geometry before redrawing the custom visual.
    // Kendo may otherwise recalculate bounds from the visible Path itself.
    // That is especially destructive for Line and Arc, whose rendered stroke
    // occupies only a few pixels of the full selectable shape bounds.
    const previousBounds = typeof shape?.bounds === "function"
      ? shape.bounds()
      : null;
    const previousRotation = this.readRotation(shape);

    // The custom visual reads editorStyle from the data item, so rerun the
    // visual template after a color/fill/flip change.
    if (typeof shape.redrawVisual === "function") {
      shape.redrawVisual();
    } else if (typeof shape.refresh === "function") {
      shape.refresh();
    } else if (typeof shape.redraw === "function") {
      shape.redraw({});
    }

    // Put the logical shape bounds back exactly as they were before the visual
    // refresh. Appearance changes must never resize or reposition the object.
    if (previousBounds && typeof shape?.bounds === "function") {
      shape.bounds(previousBounds);
    }
    if (previousRotation && typeof shape?.rotate === "function") {
      shape.rotate(previousRotation);
    }

    shape.refreshConnections?.();
    this.syncRuntimeShapeToModel(shape);
  }

private editorStyleFor(shape: any): any {
  const dataItem = this.shapeDataItem(shape);
  if (!dataItem) {
    return { flipX: 1, flipY: 1 };
  }

  if (!dataItem.editorStyle) {
    dataItem.editorStyle = { flipX: 1, flipY: 1 };
  } else {
    dataItem.editorStyle.flipX ??= 1;
    dataItem.editorStyle.flipY ??= 1;
  }

  return dataItem.editorStyle;
}

private persistEditorStyle(shape: any, style:ShapeEditorStyle): void {
    style.flipX ??= 1;
    style.flipY ??= 1;
    
    const runtimeCandidates = [
      shape?.dataItem,
      shape?.dataItem?.dataItem,
      shape?.options?.dataItem,
      shape?.options?.dataItem?.dataItem
    ];
    
    for (const candidate of runtimeCandidates) {
      if (candidate && typeof candidate === "object") {
        candidate.editorStyle = this.clonePlain(style);
      }
    }
    
    const model = this.modelForShape(shape);
    if (model) {
      model.dataItem ??= {};
      const modelData = model.dataItem?.dataItem ?? model.dataItem;
      modelData.editorStyle = this.clonePlain(style);
    }

    this.schedulePersistState();
  }
  public flipHorizontal(): void {
    this.toggleFlip("horizontal");
  }
  public flipVertical(): void {
    this.toggleFlip("vertical");
  }
  /**
   * Align the selected shapes to the bounding box of the whole selection:
   * left/right/center edges, top/bottom/middle edges, or both centers.
   */
  public alignSelected(mode: "left" | "right" | "center" | "top" | "bottom" | "middle" | "centerPoints"): void {
    const shapes = this.selectedShapes();
    if (shapes.length < 2) {
      this.statusMessage = "Select at least two shapes to align them.";
      return;
    }

    const boxes = shapes.map(shape => ({ shape, bounds: shape.bounds() }));
    const left = Math.min(...boxes.map(item => item.bounds.x));
    const top = Math.min(...boxes.map(item => item.bounds.y));
    const right = Math.max(...boxes.map(item => item.bounds.x + item.bounds.width));
    const bottom = Math.max(...boxes.map(item => item.bounds.y + item.bounds.height));
    const centerX = (left + right) / 2;
    const centerY = (top + bottom) / 2;

    for (const { shape, bounds } of boxes) {
      let x = bounds.x;
      let y = bounds.y;
      switch (mode) {
        case "left": x = left; break;
        case "right": x = right - bounds.width; break;
        case "center": x = centerX - bounds.width / 2; break;
        case "top": y = top; break;
        case "bottom": y = bottom - bounds.height; break;
        case "middle": y = centerY - bounds.height / 2; break;
        case "centerPoints":
          x = centerX - bounds.width / 2;
          y = centerY - bounds.height / 2;
          break;
      }
      this.moveShapePreservingBounds(shape, x, y, true);
    }

    const labels: Record<string, string> = {
      left: "left", right: "right", center: "center", top: "top",
      bottom: "bottom", middle: "middle", centerPoints: "center points"
    };
    this.statusMessage = `Aligned ${shapes.length} shapes: ${labels[mode]}.`;
    setTimeout(() => this.syncInspectorFromSelection(false));
  }

  /**
   * Space the selected shapes evenly between the outermost two, which stay
   * where they are. Order follows each shape's current position.
   */
  public distributeSelected(axis: "horizontal" | "vertical"): void {
    const shapes = this.selectedShapes();
    if (shapes.length < 3) {
      this.statusMessage = "Select at least three shapes to space them evenly.";
      return;
    }

    const horizontal = axis === "horizontal";
    const items = shapes
      .map(shape => ({ shape, bounds: shape.bounds() }))
      .sort((a, b) => horizontal ? a.bounds.x - b.bounds.x : a.bounds.y - b.bounds.y);

    const size = (item: { bounds: any }): number => horizontal ? item.bounds.width : item.bounds.height;
    const start = horizontal ? items[0].bounds.x : items[0].bounds.y;
    const last = items[items.length - 1];
    const end = (horizontal ? last.bounds.x : last.bounds.y) + size(last);
    const totalSize = items.reduce((sum, item) => sum + size(item), 0);
    const gap = (end - start - totalSize) / (items.length - 1);

    let cursor = start;
    for (const item of items) {
      if (horizontal) {
        this.moveShapePreservingBounds(item.shape, cursor, item.bounds.y, true);
      } else {
        this.moveShapePreservingBounds(item.shape, item.bounds.x, cursor, true);
      }
      cursor += size(item) + gap;
    }

    this.statusMessage = `Spaced ${items.length} shapes evenly ${horizontal ? "horizontally" : "vertically"}.`;
    setTimeout(() => this.syncInspectorFromSelection(false));
  }
   private toggleFlip(axis: "horizontal" | "vertical"): void {
    const shapes = this.selectedShapes();
    if (!shapes.length) {
      this.statusMessage = `Select at least one shape to flip ${axis}.`;
      return;
    }
    
    for (const shape of shapes) {
      const style = this.editorStyleFor(shape);
      if (axis === "horizontal") {
        style.flipX = style.flipX === -1 ? 1 : -1;
      } else {
        style.flipY = style.flipY === -1 ? 1 : -1;
      }
      this.persistEditorStyle(shape, style);
      this.refreshCustomShape(shape);
    }

    this.statusMessage = `Flipped ${shapes.length} shape${shapes.length === 1 ? "" : "s"} ${axis}.`;
  }
  public selectedCount = 0;
  public selectedWidth = 0;
  public selectedHeight = 0;
   private syncInspectorFromSelection(updateStatus: boolean = true): void {
    if (!this.diagram) {
      return;
    }

    const selection = this.diagram.selection || [];
    const shapes = this.selectedShapes();
    this.selectedCount = selection.length;

    if (!shapes.length) {
      this.selectedWidth = 0;
      this.selectedHeight = 0;
      this.rotationAngle = 0;
      if (updateStatus && !selection.length) {
        this.statusMessage = "Select a shape to edit it.";
      }
      return;
    }

    const shape = shapes[0];
    const bounds = shape.bounds();
    this.selectedWidth = Math.round(bounds.width * 100) / 100;
    this.selectedHeight = Math.round(bounds.height * 100) / 100;

    this.rotationAngle = this.readRotation(shape);

    const style = this.editorStyleFor(shape);
    // Always assign both controls when selection changes. The previous code only
    // assigned when overrides already existed, which left the prior object's
    // color/fill stuck in the toolbar.
    this.strokeColor = style.strokeColor || this.inferStrokeColor(this.shapeDataItem(shape));
    this.fillColor = style.fillColor || this.inferFillColor(this.shapeDataItem(shape));
    const dataItem = this.shapeDataItem(shape);
    this.anim = { ...this.defaultAnimation(), ...(dataItem?.animation || {}) };
    this.selectedLabelText = dataItem?.libraryKind === "tagLabel" ? String(dataItem.labelText ?? "") : "";
    if (dataItem?.libraryKind === "scale") {
      this.selectedScaleShow = !!dataItem.scaleShowLabels;
      this.selectedScaleMin = Number.isFinite(Number(dataItem.scaleMin)) ? Number(dataItem.scaleMin) : 0;
      this.selectedScaleMax = Number.isFinite(Number(dataItem.scaleMax)) ? Number(dataItem.scaleMax) : 100;
    }
    if (["listIndicator", "controlList"].includes(dataItem?.libraryKind)) {
      this.selectedListItems = typeof dataItem.listItemsText === "string"
        ? dataItem.listItemsText
        : (Array.isArray(dataItem.listItems) ? dataItem.listItems : []).join("; ");
      this.selectedListIndex = Math.round(Number(dataItem.listIndex) || 0);
    }
    if (["tagLabel", "listIndicator", "controlList"].includes(dataItem?.libraryKind)) {
      const family = String(dataItem.fontFamily ?? "").split(",")[0].trim();
      this.selectedRichTextFontFamily = family || "Arial";
      const size = Number(dataItem.fontSize) > 0
        ? Number(dataItem.fontSize)
        : dataItem.libraryKind === "tagLabel"
          ? Math.max(10, Math.round((Number(dataItem.height) || 20) * 0.7))
          : Math.max(8, Math.min(22, Math.round(((Number(dataItem.height) || 105) - 18) / this.listRows(dataItem).length * 0.88 * 0.62)));
      const sizes = [10, 12, 14, 16, 18, 20, 24, 32];
      this.selectedRichTextFontSize = sizes.reduce((a, b) => Math.abs(b - size) < Math.abs(a - size) ? b : a);
    }
    console.log ("dataItem?.libraryKind):",dataItem?.libraryKind);
    if (["container", "barGraph", "gauge"].includes(dataItem?.libraryKind)) {
      this.selectedContainerValue = Number(dataItem.containerValue) || 0;
      this.selectedContainerMax = Number(dataItem.containerMax) > 0 ? Number(dataItem.containerMax) : 100;
    }

    if (updateStatus) {
      this.statusMessage = shapes.length === 1
        ? "1 shape selected."
        : `${shapes.length} shapes selected.`;
    }
  }
    private inferStrokeColor(dataItem: any): string {
    if (dataItem?.strokeColor && /^#[0-9a-fA-F]{3,6}$/.test(String(dataItem.strokeColor))) {
      return this.firstColorInputValue([String(dataItem.strokeColor)], "#333333");
    }
    if (Array.isArray(dataItem?.groupChildren) && dataItem.groupChildren.length) {
      const childData = dataItem.groupChildren[0]?.dataItem?.dataItem ?? dataItem.groupChildren[0]?.dataItem;
      return this.inferStrokeColor(childData);
    }
    const definition = dataItem?.definition as DiagramDefinition | undefined;
    const values = [
      ...(definition?.shapes || []).map(item => item.stroke?.color),
      ...(definition?.lines || []).map(item => item.stroke?.color),
      ...(definition?.textBlocks || []).map(item => item.fill)
    ];

    return this.firstColorInputValue(values, "#333333");
  }
    private firstColorInputValue(values: Array<string | undefined>, fallback: string): string {
    for (const value of values) {
      if (!value) {
        continue;
      }
      const color = value.trim();
      if (/^#[0-9a-fA-F]{6}$/.test(color)) {
        return color;
      }
      if (/^#[0-9a-fA-F]{3}$/.test(color)) {
        return `#${color[1]}${color[1]}${color[2]}${color[2]}${color[3]}${color[3]}`;
      }
    }
    return fallback;
  }
  private inferFillColor(dataItem: any): string {
    if (dataItem?.fillColor && /^#[0-9a-fA-F]{3,6}$/.test(String(dataItem.fillColor))) {
      return this.firstColorInputValue([String(dataItem.fillColor)], "#d9e8f5");
    }
    if (Array.isArray(dataItem?.groupChildren) && dataItem.groupChildren.length) {
      const childData = dataItem.groupChildren[0]?.dataItem?.dataItem ?? dataItem.groupChildren[0]?.dataItem;
      return this.inferFillColor(childData);
    }
    const definition = dataItem?.definition as DiagramDefinition | undefined;
    const values = [
      ...(definition?.shapes || []).map(item => item.fill),
      // Some supplied symbols (including the small green symbol) are composed
      // entirely from path entries in definition.lines, so their real fill
      // lives here rather than in definition.shapes.
      ...(definition?.lines || []).map(item => item.fill)
    ];
    return this.firstColorInputValue(values, "#d9e8f5");
  }
    private persistZOrder(runtimeShapes: any[], toFront: boolean): void {
    const ids = new Set(
      runtimeShapes.map(shape => this.runtimeShapeId(shape)).filter(Boolean)
    );
    if (!ids.size) {
      return;
    }

    const selectedModels = (this.shapes as any[]).filter(
      model => ids.has(String(model?.id ?? ""))
    );
    const otherModels = (this.shapes as any[]).filter(
      model => !ids.has(String(model?.id ?? ""))
    );

    const ordered = toFront
      ? [...otherModels, ...selectedModels]
      : [...selectedModels, ...otherModels];

    this.shapes.splice(0, this.shapes.length, ...ordered);
    this.schedulePersistState();
  }
  private appendRichTextBlocks(
    group: Group,
    blocks: any[],
    startX: number,
    startY: number,
    maxWidth: number,
    maxHeight: number
  ): void {
    let cursorY = startY;
    const bottom = startY + maxHeight;
    const defaultFontSize = 15;

    const estimatedWidth = (text: string, fontSize: number, bold: boolean): number => {
      // Kendo's Diagram TextBlock does not expose a synchronous measurement
      // helper. This estimate is slightly generous, which gives stable wrapping
      // across common fonts rather than clipping the next run.
      return Math.max(1, text.length * fontSize * (bold ? 0.64 : 0.58));
    };

    for (const block of blocks || []) {
      if (cursorY >= bottom) break;
      let cursorX = startX;
      let lineHeight = defaultFontSize * 1.45;
      const children = Array.isArray(block?.children) ? block.children : [];

      const newLine = (): void => {
        cursorX = startX;
        cursorY += lineHeight;
        lineHeight = defaultFontSize * 1.45;
      };

      for (const child of children) {
        if (cursorY >= bottom) break;
        if (child?.type === "break") {
          newLine();
          continue;
        }

        if (child?.type === "image" && child?.src) {
          const imageWidth = Math.max(12, Math.min(Number(child.width) || 48, maxWidth));
          const imageHeight = Math.max(12, Number(child.height) || 36);
          if (cursorX > startX && cursorX + imageWidth > startX + maxWidth) newLine();
          if (cursorY + imageHeight <= bottom) {
            group.append(new DiagramImage({
              source: String(child.src),
              x: cursorX,
              y: cursorY,
              width: imageWidth,
              height: imageHeight
            }));
          }
          cursorX += imageWidth + 5;
          lineHeight = Math.max(lineHeight, imageHeight + 4);
          continue;
        }

        const rawText = String(child?.text ?? "");
        if (!rawText) continue;
        const fontSize = Math.max(8, Number(child?.fontSize) || defaultFontSize);
        const bold = child?.bold === true;
        const italic = child?.italic === true;
        const underline = child?.underline === true;
        const color = String(child?.color || "#333333");
        const fontFamily = String(child?.fontFamily || "sans-serif");
        lineHeight = Math.max(lineHeight, fontSize * 1.45);

        // Preserve whitespace while still allowing natural wrapping.
        const pieces = rawText.split(/(\s+)/).filter(piece => piece.length > 0);
        for (const piece of pieces) {
          if (cursorY >= bottom) break;
          const pieceWidth = estimatedWidth(piece, fontSize, bold);
          const isOnlyWhitespace = /^\s+$/.test(piece);
          if (!isOnlyWhitespace && cursorX > startX && cursorX + pieceWidth > startX + maxWidth) newLine();
          if (cursorY >= bottom) break;

          const textBlock = new TextBlock({
            text: piece,
            x: cursorX,
            y: cursorY,
            fill: color,
            fontSize,
            fontWeight: bold ? "bold" : "normal",
            fontStyle: italic ? "italic" : "normal",
            fontFamily
          });
          group.append(textBlock);

          if (underline && !isOnlyWhitespace) {
            group.append(new Line({
              start: { x: cursorX, y: cursorY + fontSize + 2 },
              end: { x: Math.min(startX + maxWidth, cursorX + pieceWidth), y: cursorY + fontSize + 2 },
              stroke: { color}
            }));
          }
          cursorX += pieceWidth;
        }
      }

      // Paragraph separation. Avoid double-advancing an empty block.
      cursorY += Math.max(lineHeight, defaultFontSize * 1.45);
    }
  }
  /**
   * Debounce browser storage writes so resize/drag events do not synchronously
   * serialize the whole diagram on every intermediate pixel.
   */
  /** Repair only the exact legacy Line/Arc shrink signature (20x20). */
  private repairLegacyAppearanceShrink(savedShapes: any[]): void {
    const repairOne = (model: any): void => {
      const dataItem = model?.dataItem?.dataItem ?? model?.dataItem;
      const kind = dataItem?.libraryKind;
      const width = Number(model?.width ?? dataItem?.width);
      const height = Number(model?.height ?? dataItem?.height);
      const hasAppearanceOverride = Boolean(dataItem?.editorStyle?.strokeColor || dataItem?.editorStyle?.fillColor);

      if (hasAppearanceOverride && width <= 20.01 && height <= 20.01) {
        if (kind === "line") {
          model.width = 180;
          model.height = 24;
          dataItem.width = 180;
          dataItem.height = 24;
        } else if (kind === "arc") {
          model.width = 170;
          model.height = 95;
          dataItem.width = 170;
          dataItem.height = 95;
        }
      }

      const groupChildren = dataItem?.groupChildren;
      if (Array.isArray(groupChildren)) {
        for (const child of groupChildren) {
          repairOne(child);
        }
      }
    };

    for (const shape of savedShapes) {
      repairOne(shape);
    }
  }

  /**
   * Move a shape without letting custom visuals alter width/height. Using the
   * complete bounds rectangle is reliable for standard, compound, grouped,
   * line/arc, and resized shapes.
   */
  private moveShapePreservingBounds(shape: any, x: number, y: number, syncModel: boolean): void {
    if (!shape || typeof shape.bounds !== "function") {
      return;
    }

    const bounds = shape.bounds();
    // Shape.bounds() requires a Rect instance (it calls rect.topLeft()
    // internally) - a plain {x,y,width,height} literal throws.
    const nextBounds = new Rect(x, y, bounds.width, bounds.height);

    shape.bounds(nextBounds);
    shape.updateModel?.(true);
    shape.refreshConnections?.();

    if (syncModel) {
      this.syncRuntimeShapeToModel(shape);
    }
  }
  public addContainer(): void {
    this.addLibraryShape("container", {
      width: 140,
      height: 240,
      strokeColor: "#00bcd4",
      fillColor: "#00e5ff",
      containerValue: this.selectedContainerValue,
      containerMax: this.selectedContainerMax
    });
  }
  public applySelectedRichTextFontFamily(): void {
    this.applySelectedRichTextFormatting({
      fontFamily: this.selectedRichTextFontFamily
    });
  }

  public applySelectedRichTextFontSize(): void {
    this.applySelectedRichTextFormatting({
      fontSize: Number(this.selectedRichTextFontSize)
    });
  }

private applySelectedRichTextFormatting(
    patch: { fontFamily?: string; fontSize?: number }
  ): void {
    const shapes = this.selectedShapes().filter(shape => {
      const kind = this.shapeDataItem(shape)?.libraryKind;
      return kind === "richText" || kind === "text" || kind === "tagLabel" || kind === "listIndicator" || kind === "controlList";
    });

    if (!shapes.length) {
      this.statusMessage = "Select a Rich Text, Text, Tag Label or list shape first.";
      return;
    }

    for (const shape of shapes) {
      const dataItem = this.shapeDataItem(shape);
      if (["text", "tagLabel", "listIndicator", "controlList"].includes(dataItem?.libraryKind)) {
        // Plain Text has no blocks model - just two direct properties read by
        // drawLibraryShape's "text" branch.
        if (patch.fontFamily) {
          dataItem.fontFamily = patch.fontFamily;
        }
        if (patch.fontSize) {
          dataItem.fontSize = patch.fontSize;
        }
        const textModel = this.modelForShape(shape);
        if (textModel) {
          textModel.dataItem ??= {};
          const modelData = textModel.dataItem?.dataItem ?? textModel.dataItem;
          modelData.fontFamily = dataItem.fontFamily;
          modelData.fontSize = dataItem.fontSize;
        }
        // Plain Text has no `content` to redraw() against - it needs the
        // full custom-visual re-render that refreshCustomShape triggers.
        this.refreshCustomShape(shape);
        continue;
      }

      const model = this.modelForShape(shape);
      const blocks = this.clonePlain<any[]>(
        dataItem?.richTextBlocks
        ?? model?.content?.blocks
        ?? []
      );

      for (const block of blocks) {
        for (const child of block?.children || []) {
          if (typeof child?.text !== "string") {
            continue;
          }

          if (patch.fontFamily) {
            child.fontFamily = patch.fontFamily;
          }

          if (patch.fontSize) {
            child.fontSize = patch.fontSize;
          }
        }
      }

      if (dataItem) {
        dataItem.richTextBlocks = this.clonePlain(blocks);
      }

      if (model) {
        model.dataItem ??= {};
        const modelData = model.dataItem?.dataItem ?? model.dataItem;
        modelData.richTextBlocks = this.clonePlain(blocks);
        model.content = {
          ...(model.content || {}),
          blocks: this.clonePlain(blocks)
        };
      }

      shape.redraw?.({ content: model?.content });
      shape.refreshConnections?.();
      this.syncRuntimeShapeToModel(shape);
    }

    this.schedulePersistState();
    this.statusMessage = "Font formatting updated.";
  }

  public applySelectedContainerValue(): void {
    this.applySelectedContainerFill({ value: Number(this.selectedContainerValue) });
  }

  public applySelectedContainerMax(): void {
    this.applySelectedContainerFill({ max: Number(this.selectedContainerMax) });
  }

  private applySelectedContainerFill(patch: { value?: number; max?: number }): void {
    const shapes = this.selectedShapes().filter(
      shape => ["container", "barGraph", "gauge"].includes(this.shapeDataItem(shape)?.libraryKind)
    );

    if (!shapes.length) {
      this.statusMessage = "Select a Container, Bar Graph or Gauge first.";
      return;
    }

    let lastRatio = 0;
    for (const shape of shapes) {
      const dataItem = this.shapeDataItem(shape);
      if (!dataItem) {
        continue;
      }

      if (patch.value !== undefined && Number.isFinite(patch.value)) {
        dataItem.containerValue = patch.value;
      }
      if (patch.max !== undefined && Number.isFinite(patch.max) && patch.max > 0) {
        dataItem.containerMax = patch.max;
      }

      const model = this.modelForShape(shape);
      if (model) {
        model.dataItem ??= {};
        const modelData = model.dataItem?.dataItem ?? model.dataItem;
        modelData.containerValue = dataItem.containerValue;
        modelData.containerMax = dataItem.containerMax;
      }

      const max = Number(dataItem.containerMax) > 0 ? Number(dataItem.containerMax) : 100;
      const value = Number.isFinite(Number(dataItem.containerValue)) ? Number(dataItem.containerValue) : 0;
      lastRatio = Math.max(0, Math.min(1, value / max));

      // redrawVisual()/refresh() re-run the visual template (picking up the new
      // fill percentage) while refreshCustomShape puts bounds/rotation back
      // afterward, since redrawing a custom visual can otherwise re-derive them
      // from the redrawn content.
      this.refreshCustomShape(shape);
    }

    this.statusMessage = `Container fill set to ${Math.round(lastRatio * 100)}%.`;
  }
  public rotateRight(): void {
    this.rotateSelectedBy(90);
  }

  public rotateLeft(): void {
    this.rotateSelectedBy(-90);
  }
  private rotateSelectedBy(delta: number): void {
    const shapes = this.selectedShapes();
    if (!shapes.length) {
      this.statusMessage = `Select at least one shape to rotate ${delta > 0 ? "right" : "left"}.`;
      return;
    }

    for (const shape of shapes) {
      const currentAngle = this.readRotation(shape);
      const nextAngle = ((currentAngle + delta) % 360 + 360) % 360;
      shape.rotate(nextAngle, undefined, true);
      shape.refreshConnections?.();
      this.syncRuntimeShapeToModel(shape);
    }

    this.statusMessage = `Rotated ${shapes.length} shape${shapes.length === 1 ? "" : "s"} ${delta > 0 ? "right" : "left"} by 90°.`;
    setTimeout(() => this.syncInspectorFromSelection(false));
  }
    private applyDiagramChangeToAppMemory(event: any): void {
    const removed = this.eventItems(event?.removed);
    console.log("removed:",removed)
    if (removed.length) {
      this.removeModelsByIds(
        removed.map(item => this.runtimeShapeId(item)).filter(Boolean)
      );
    }

    if (this.eventItems(event?.added).length || removed.length) {
      // Let Kendo finish assigning IDs/data to pasted shapes first.
      setTimeout(() => this.synchronizeModelsWithRuntime());
    }
  }
    private eventItems(value: any): any[] {
    if (!value) {
      return [];
    }
    return Array.isArray(value) ? value : [value];
  }
  pendingShapeType = '';

  /**
   * SVG icons per shape family.
   * Each entry returns the inner SVG markup (no xmlns needed — we add it).
   */
  private readonly cursorIcons: Record<string, string> = {
    // ── Basic geometry ──
    rectangle:
      `<rect x="3" y="6" width="18" height="14" fill="none" stroke="#e94560" stroke-width="2"/>`,
    roundedRectangle:
      `<rect x="3" y="6" width="18" height="14" rx="4" ry="4" fill="none" stroke="#e94560" stroke-width="2"/>`,
    ellipse:
      `<ellipse cx="12" cy="13" rx="9" ry="7" fill="none" stroke="#e94560" stroke-width="2"/>`,
    arc:
      `<path d="M3 20 A9 9 0 0 1 21 20" fill="none" stroke="#e94560" stroke-width="2"/>`,
    wedge:
      `<path d="M3 20 L12 4 L21 20 Z" fill="none" stroke="#e94560" stroke-width="2"/>`,
    polygon:
      `<path d="M12 3 L21 9 L18 20 L6 20 L3 9 Z" fill="none" stroke="#e94560" stroke-width="2"/>`,
    polyline:
      `<path d="M3 18 L9 8 L15 16 L21 6" fill="none" stroke="#e94560" stroke-width="2"/>`,
    line:
      `<line x1="3" y1="20" x2="21" y2="6" stroke="#e94560" stroke-width="2"/>`,
    freehand:
      `<path d="M3 18 C6 10 9 20 12 12 C15 4 18 16 21 10" fill="none" stroke="#e94560" stroke-width="2"/>`,
    vector:
      `<path d="M4 18 L14 6" stroke="#e94560" stroke-width="2"/><circle cx="14" cy="6" r="2" fill="#e94560"/>`,

    // ── Buttons ──
    button:
      `<rect x="3" y="7" width="18" height="12" rx="6" ry="6" fill="none" stroke="#e94560" stroke-width="2"/><circle cx="12" cy="13" r="2" fill="#e94560"/>`,
    navButton:
      `<circle cx="12" cy="13" r="9" fill="none" stroke="#e94560" stroke-width="2"/><path d="M9 13 L15 13 M13 10 L16 13 L13 16" stroke="#e94560" stroke-width="2" fill="none"/>`,
    rampButton:
      `<rect x="3" y="7" width="18" height="12" rx="2" fill="none" stroke="#e94560" stroke-width="2"/><path d="M5 17 L19 9" stroke="#e94560" stroke-width="2"/>`,
    pushbutton:
      `<rect x="3" y="7" width="18" height="12" rx="2" fill="none" stroke="#e94560" stroke-width="2"/><path d="M5 17 L19 9" stroke="#e94560" stroke-width="2"/>`,
    buttonmomentry:
      `<rect x="3" y="9" width="18" height="11" rx="2" fill="none" stroke="#e94560" stroke-width="2"/>` +
        `<path d="M12 3 L12 7 M9 5 L12 8 L15 5" fill="none" stroke="#7945e9" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>`,
    buttonMaintained:
      `<rect x="3" y="7" width="18" height="12" rx="2" fill="none" stroke="#e94560" stroke-width="2"/>` +
      `<path d="M5 17 L19 9" stroke="#e94560" stroke-width="2"/>` +
      `<circle cx="19" cy="13" r="1.5" fill="#e94560"/>`,
    buttonLatched:
      `<rect x="3" y="7" width="18" height="12" rx="2" fill="none" stroke="#e94560" stroke-width="2"/>` +
      `<path d="M5 17 L19 9" stroke="#e94560" stroke-width="2"/>` +
      `<path d="M19 10 L21 10 L21 13" fill="none" stroke="#e94560" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>`,
    buttonMultistate:
      `<rect x="3" y="7" width="18" height="12" rx="2" fill="none" stroke="#e94560" stroke-width="2"/>` +
      `<path d="M5 17 L19 9" stroke="#e94560" stroke-width="2"/>` +
      `<circle cx="8" cy="16" r="1" fill="#e94560"/>` +
      `<circle cx="12" cy="16" r="1" fill="#e94560"/>` +
      `<circle cx="16" cy="16" r="1" fill="#e94560"/>`,
    buttonInterlocked:
        `<rect x="3" y="7" width="18" height="12" rx="2" fill="none" stroke="#e94560" stroke-width="2"/>` +
        `<path d="M5 17 L19 9" stroke="#e94560" stroke-width="2"/>` +
        `<circle cx="17" cy="13" r="1.8" fill="none" stroke="#e94560" stroke-width="1.3"/>` +
        `<circle cx="19.5" cy="13" r="1.8" fill="none" stroke="#e94560" stroke-width="1.3"/>`,
        
    // ── Display / data ──
    display:
      `<rect x="3" y="6" width="18" height="12" rx="2" fill="none" stroke="#e94560" stroke-width="2"/><text x="12" y="15" font-size="9" text-anchor="middle" fill="#e94560" font-family="monospace">7</text>`,
    stringDisplay:
      `<rect x="3" y="6" width="18" height="12" rx="2" fill="none" stroke="#e94560" stroke-width="2"/>` +
      `<text x="12" y="15" font-size="7" font-weight="bold" text-anchor="middle" fill="#e94560" font-family="monospace">abc</text>`,
    timeDateDisplay:
      `<rect x="3" y="6" width="18" height="12" rx="2" fill="none" stroke="#e94560" stroke-width="2"/>` +
      `<circle cx="12" cy="12" r="4" fill="none" stroke="#e94560" stroke-width="1.3"/>` +
      `<path d="M12 9.5 L12 12 L13.8 13" fill="none" stroke="#e94560" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"/>`,
    numericInput:
    `<rect x="3" y="6" width="18" height="12" rx="2" fill="none" stroke="#e94560" stroke-width="2"/>` +
    `<text x="12" y="15" font-size="9" text-anchor="middle" fill="#e94560" font-family="monospace">#</text>` +
    // up-pointing arrow outside the lower-right corner (same style as stringInput)
    `<path d="M20 22 L20 17 M20 17 L18 19 M20 17 L22 19" fill="none" stroke="#e94560" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>`,
    input:
      `<rect x="3" y="6" width="18" height="12" rx="2" fill="none" stroke="#e94560" stroke-width="2"/><line x1="6" y1="10" x2="6" y2="14" stroke="#e94560" stroke-width="2"/>`,
    
    stringInput:
      `<rect x="3" y="6" width="18" height="12" rx="2" fill="none" stroke="#e94560" stroke-width="2"/>` +
      `<text x="12" y="15" font-size="7" font-weight="bold" text-anchor="middle" fill="#e94560" font-family="monospace">abc</text>` +
      // vertical arrow pointing UP, sitting outside the lower-right corner
      `<path d="M20 22 L20 17 M20 17 L18 19 M20 17 L22 19" fill="none" stroke="#e94560" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>`,

    numeric:
      `<rect x="3" y="6" width="18" height="12" rx="2" fill="none" stroke="#e94560" stroke-width="2"/><text x="12" y="15" font-size="9" text-anchor="middle" fill="#e94560" font-family="monospace">#</text>`,
    scale:
      `<rect x="3" y="6" width="18" height="14" rx="2" fill="none" stroke="#e94560" stroke-width="2"/>` +
      // Y axis (vertical) and X axis (horizontal) forming an L at the lower-left
      `<path d="M7 16 L7 9" stroke="#e94560" stroke-width="1.6" stroke-linecap="round"/>` +
      `<path d="M7 16 L17 16" stroke="#e94560" stroke-width="1.6" stroke-linecap="round"/>` +
      // small arrowheads on the axes
      `<path d="M6.4 9.6 L7 9 L7.6 9.6" fill="none" stroke="#e94560" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>` +
      `<path d="M16.4 15.4 L17 16 L16.4 16.6" fill="none" stroke="#e94560" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>` +
      // plotted line (zigzag showing a rising trend)
      `<path d="M7.5 14.5 L10 12 L12.5 13.2 L15 9.5" fill="none" stroke="#e94560" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>` +
      // data point at the end of the line
      `<circle cx="15" cy="9.5" r="1" fill="#e94560"/>`,

    gauge:
      `<rect x="3" y="6" width="18" height="14" rx="2" fill="none" stroke="#e94560" stroke-width="2"/>` +
      `<path d="M7 16 A5 5 0 0 1 17 16" fill="none" stroke="#e94560" stroke-width="1.8" stroke-linecap="round"/>` +
      `<path d="M8 13.5 L8.7 14" stroke="#e94560" stroke-width="1.1" stroke-linecap="round"/>` +
      `<path d="M12 11 L12 12" stroke="#e94560" stroke-width="1.1" stroke-linecap="round"/>` +
      `<path d="M16 13.5 L15.3 14" stroke="#e94560" stroke-width="1.1" stroke-linecap="round"/>` +
      `<path d="M12 16 L15 12.5" stroke="#e94560" stroke-width="1.8" stroke-linecap="round"/>` +
      `<circle cx="12" cy="16" r="1.1" fill="#e94560"/>`,
    barGraph:
      `<rect x="4" y="12" width="4" height="8" fill="#e94560"/><rect x="10" y="8" width="4" height="12" fill="#e94560"/><rect x="16" y="4" width="4" height="16" fill="#e94560"/>`,
    graph:
      `<path d="M3 20 L9 12 L14 16 L21 6" fill="none" stroke="#e94560" stroke-width="2"/>`,
    listIndicator:
      `<line x1="4" y1="7" x2="20" y2="7" stroke="#e94560" stroke-width="2"/><line x1="4" y1="13" x2="20" y2="13" stroke="#e94560" stroke-width="2"/><line x1="4" y1="19" x2="20" y2="19" stroke="#e94560" stroke-width="2"/>`,

    // ── Indicators ──
    multiple:
          `<line x1="4"  y1="5"  x2="16" y2="5"  stroke="#e94560" stroke-width="2"/>
          <line x1="4"  y1="11" x2="16" y2="11" stroke="#e94560" stroke-width="2"/>
          <line x1="4"  y1="17" x2="16" y2="17" stroke="#e94560" stroke-width="2"/>
          <line x1="8"  y1="9"  x2="20" y2="9"  stroke="#e94560" stroke-width="2" opacity="0.6"/>
          <line x1="8"  y1="15" x2="20" y2="15" stroke="#e94560" stroke-width="2" opacity="0.6"/>
          <line x1="8"  y1="21" x2="20" y2="21" stroke="#e94560" stroke-width="2" opacity="0.6"/>`,
    indicator:
      `<circle cx="12" cy="13" r="6" fill="none" stroke="#e94560" stroke-width="2"/><circle cx="12" cy="13" r="2" fill="#e94560"/>`,
    piloted:
      `<circle cx="12" cy="13" r="7" fill="none" stroke="#e94560" stroke-width="2"/><line x1="12" y1="6" x2="12" y2="9" stroke="#e94560" stroke-width="2"/>`,

    // ── Navigation / keys ──
    end:
      `<line x1="18" y1="6" x2="18" y2="20" stroke="#e94560" stroke-width="2" stroke-linecap="round"/>
      <path d="M4 13 L15 13" fill="none" stroke="#e94560" stroke-width="2" stroke-linecap="round"/>`,
    moveLeft:
      `<path d="M20 13 L6 13 M11 8 L5 13 L11 18"
      fill="none" stroke="#e94560" stroke-width="2"
      stroke-linecap="round" stroke-linejoin="round"/>`,
    moveRight:
      `<path d="M4 13 L16 13 M12 8 L18 13 L12 18"
      fill="none" stroke="#e94560" stroke-width="2"
      stroke-linecap="round" stroke-linejoin="round"/>`,
    moveDown:
      `<path d="M12 4 L12 18 M7 13 L12 19 L17 13"
      fill="none" stroke="#e94560" stroke-width="2"
      stroke-linecap="round" stroke-linejoin="round"/>`,
    moveUp:
      `<path d="M12 20 L12 6 M7 11 L12 5 L17 11"
      fill="none" stroke="#e94560" stroke-width="2"
      stroke-linecap="round" stroke-linejoin="round"/>`,
    arrow:
      `<path d="M4 13 L16 13 M12 8 L18 13 L12 18" fill="none" stroke="#e94560" stroke-width="2"/>`,
    arrowVertical:
      `<path d="M12 21 L12 6" stroke="#e94560" stroke-width="2"/>
      <path d="M12 4 L8 10 L16 10 Z" fill="#e94560" stroke="#e94560" stroke-width="1" stroke-linejoin="round"/>`,
    arrowHorizontal:
      `<path d="M3 12 L20 12" stroke="#e94560" stroke-width="2"/>
      <path d="M21 12 L15 8 L15 16 Z" fill="#e94560" stroke="#e94560" stroke-width="1" stroke-linejoin="round"/>`,
    pageUp:
      `<path d="M7 18 L12 12 L17 18 Z" fill="#e94560" stroke="#e94560" stroke-width="2" stroke-linejoin="round"/>
    <path d="M7 12 L12 6  L17 12 Z" fill="#e94560" stroke="#e94560" stroke-width="2" stroke-linejoin="round"/>`,
    pageDown:
      `<path d="M7 6 L12 12 L17 6 Z" fill="#e94560" stroke="#e94560" stroke-width="2" stroke-linejoin="round"/>
      <path d="M7 12 L12 18 L17 12 Z" fill="#e94560" stroke="#e94560" stroke-width="2" stroke-linejoin="round"/>`,
    enter:
      `<path d="M18 6 L18 13 L7 13 M10 10 L7 13 L10 16" fill="none" stroke="#e94560" stroke-width="2"/>`,
    backspace:
      `<path d="M8 6 L20 6 L20 20 L8 20 L3 13 Z" fill="none" stroke="#e94560" stroke-width="2"/><line x1="11" y1="10" x2="17" y2="16" stroke="#e94560" stroke-width="2"/><line x1="17" y1="10" x2="11" y2="16" stroke="#e94560" stroke-width="2"/>`,

    // ── Text / media ──
    text:
      `<text x="12" y="19" font-size="18" font-weight="bold" text-anchor="middle" fill="#e94560" font-family="serif">T</text>`,
    tagLabel:
      `<path d="M4 7 L20 7 L20 19 L4 19 L2 13 Z" fill="none" stroke="#e94560" stroke-width="2" stroke-linejoin="round"/>` +
      `<path d="M6 12 L16 12" stroke="#e94560" stroke-width="1.5" stroke-linecap="round"/>` +
      `<path d="M6 15 L14 15" stroke="#e94560" stroke-width="1.5" stroke-linecap="round"/>`,
    localMessage:
      `<path d="M4 6 L20 6 A2 2 0 0 1 22 8 L22 16 A2 2 0 0 1 20 18 L10 18 L6 21 L6 18 L4 18 A2 2 0 0 1 2 16 L2 8 A2 2 0 0 1 4 6 Z" fill="none" stroke="#e94560" stroke-width="1.8" stroke-linejoin="round"/>` +
      `<path d="M6 10 L18 10" stroke="#e94560" stroke-width="1.3" stroke-linecap="round"/>` +
      `<path d="M6 13 L15 13" stroke="#e94560" stroke-width="1.3" stroke-linecap="round"/>` +
      `<path d="M6 16 L12 16" stroke="#e94560" stroke-width="1.3" stroke-linecap="round"/>`,
    image:
      `<rect x="3" y="6" width="18" height="14" rx="2" fill="none" stroke="#e94560" stroke-width="2"/><circle cx="9" cy="11" r="2" fill="#e94560"/><path d="M4 18 L10 13 L14 17 L18 14 L21 17" fill="none" stroke="#e94560" stroke-width="2"/>`,
    browser:
      `<rect x="3" y="5" width="18" height="16" rx="2" fill="none" stroke="#e94560" stroke-width="2"/><line x1="3" y1="10" x2="21" y2="10" stroke="#e94560" stroke-width="2"/><circle cx="6" cy="8" r="1" fill="#e94560"/>`,
    banner:
    `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="2" y="8" width="20" height="8" rx="1.5" stroke="#e94560" stroke-width="2"/>
      <circle cx="6.5" cy="12" r="1.2" fill="#e94560"/>
      <line x1="10" y1="12" x2="19" y2="12" stroke="#e94560" stroke-width="2" stroke-linecap="round"/>
    </svg>`,
    summary:
    `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="3" y="4" width="18" height="16" rx="1.5" stroke="#e94560" stroke-width="2"/>
      <line x1="7" y1="9" x2="13" y2="9" stroke="#e94560" stroke-width="2" stroke-linecap="round"/>
      <line x1="7" y1="13" x2="17" y2="13" stroke="#e94560" stroke-width="2" stroke-linecap="round"/>
      <line x1="7" y1="17" x2="15" y2="17" stroke="#e94560" stroke-width="2" stroke-linecap="round"/>
    </svg>`,
    logViewer:
    `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="4" y="3" width="14" height="18" rx="1.5" stroke="#e94560" stroke-width="2"/>
      <line x1="7" y1="8" x2="15" y2="8" stroke="#e94560" stroke-width="2" stroke-linecap="round"/>
      <line x1="7" y1="12" x2="15" y2="12" stroke="#e94560" stroke-width="2" stroke-linecap="round"/>
      <line x1="7" y1="16" x2="15" y2="16" stroke="#e94560" stroke-width="2" stroke-linecap="round"/>
      <line x1="19" y1="6" x2="19" y2="18" stroke="#e94560" stroke-width="2" stroke-linecap="round"/>
      <circle cx="19" cy="8" r="1.5" fill="#e94560"/>
    </svg>`,
    statusExplorer:
    `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="5" cy="6" r="2" stroke="#e94560" stroke-width="2"/>
      <circle cx="5" cy="12" r="2" stroke="#e94560" stroke-width="2"/>
      <circle cx="5" cy="18" r="2" stroke="#e94560" stroke-width="2"/>
      <line x1="7" y1="6" x2="20" y2="6" stroke="#e94560" stroke-width="2" stroke-linecap="round"/>
      <line x1="7" y1="12" x2="16" y2="12" stroke="#e94560" stroke-width="2" stroke-linecap="round"/>
      <line x1="7" y1="18" x2="18" y2="18" stroke="#e94560" stroke-width="2" stroke-linecap="round"/>
      <line x1="5" y1="8" x2="5" y2="10" stroke="#e94560" stroke-width="2"/>
      <line x1="5" y1="14" x2="5" y2="16" stroke="#e94560" stroke-width="2"/>
    </svg>`,
    // ── Generic fallback ──
    default:
      `<rect x="5" y="5" width="14" height="14" rx="2" fill="none" stroke="#e94560" stroke-width="2" stroke-dasharray="3 2"/><line x1="12" y1="9" x2="12" y2="15" stroke="#e94560" stroke-width="2"/><line x1="9" y1="12" x2="15" y2="12" stroke="#e94560" stroke-width="2"/>`,
  };

  /**
   * Map each of your shape-type strings → an icon family key.
   * Anything not listed falls back to 'default'.
   */
  private readonly shapeToIconKey: Record<string, string> = {
    'Arc': 'arc',
    'Vector': 'vector',
    'FreeHand': 'freehand',
    'Elipse': 'ellipse',
    'Rounded Rectangle': 'roundedRectangle',
    'Rectangle': 'rectangle',
    'Wedge': 'wedge',
    'Polyline': 'polyline',
    'Polygon': 'polygon',
    'Line': 'line',
     'Interlocked': 'buttonInterlocked',
    'Multistate': 'buttonMultistate',
    'Latched': 'buttonLatched',
    'Maintained': 'button',
    'Momentry': 'buttonmomentry',
    'Push Button': 'pushbutton',
    'Navigation Button': 'navButton',
    'Ramp Button': 'rampButton',
    'Button': 'button',
    'Buttons': 'button',
    
    'String Display': 'stringDisplay',
    'String Input': 'stringInput',
    'Numeric Input': 'numericInput',
    'Numeric Display': 'numeric',
    'Data': 'numeric',
    'Scale': 'scale',
    'Gauge': 'gauge',
    'BarGraph': 'barGraph',
    'Graph': 'graph',
    'List': 'listIndicator',
    'Multiple': 'multiple',
    'Indicator': 'indicator',
    'Page Up': 'pageUp',
    'Page Down': 'pageDown',
    'Move Up': 'moveUp',
    'Move Down': 'moveDown',
    'Move Right': 'moveRight',
    'Move Left': 'moveLeft',
    'Enter': 'enter',
    'End': 'endButton',
    'Backspace': 'backspace',
    'Arrow Horizontal': 'arrowHorizontal',
    'Arrow Vertical':   'arrowVertical',
    //'Navigation': 'navButton',
    //'Arrow': 'arrow',
    'Display': 'display',
    'Piloted': 'piloted',
    'Control List': 'controlList',
    'List Indicator': 'listIndicator',
    'String': 'text',
    'Numeric': 'numeric',
    'Time and Date Display': 'timeDateDisplay',
    'Local Message': 'localMessage',
    'Tag Label': 'tagLabel',
    'Alarms and Events': 'list',
    'Banner': 'banner',
    'Status Explorer': 'statusExplorer',
    'Log Viewer': 'logViewer',
    'Summary': 'list',

    'Symbol': 'polygon',
    'Web Browser': 'browser',
    'Image': 'image',
    'Text': 'text',
    'Panel': 'rectangle',
  };

  /**
   * Build a data-URI cursor for the currently pending shape type.
   * Returns 'crosshair' if no shape is pending.
   */
  get insertCursor(): string {
  
    const pending = this.pendingDragShapeType ?? this.pendingShapeType;
    
    if (!pending) return 'default';

    const iconKey = this.shapeToIconKey[pending] ?? 'default';
    const iconSvg = this.cursorIcons[iconKey] ?? this.cursorIcons['default'];

    const svg =
      `<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24">` +
        `<path d="M0 0 L0 10 L3 7 L5 12 L7 11 L5 6 L9 6 Z" fill="black" stroke="white" stroke-width="1"/>` +
        iconSvg +
      `</svg>`;

    return `url("data:image/svg+xml;utf8,${encodeURIComponent(svg)}") 4 4, crosshair`;
  }

  processButton(action: string, event?: any): void {
    this.insertShapeFlag = false;
  switch (action) {

    // ── Display controls ──
    case 'toggleGrid':
      this.toggleGrid();
      break;

    case 'toggleSnap':
      this.toggleSnap();
      break;

    case 'zoomOut':
      this.zoomOut();
      break;

    case 'zoomIn':
      this.zoomIn();
      break;

    case 'zoomToFit':
      this.zoomToFit();
      break;

    // ── Shape edit controls ──
    case 'copySelected':
      this.copySelected();
      break;

    case 'paste':
      this.paste();
      break;

    case 'deleteSelected':
      this.deleteSelected();
      break;

    case 'duplicateSelected':
      this.duplicateSelected();
      break;

    case 'sendToBack':
      this.sendToBack();
      break;

    case 'bringToFront':
      this.bringToFront();
      break;

    case 'alignToGrid':
      this.alignToGrid();
      break;

    case 'flipHorizontal':
      this.flipHorizontal();
      break;

    case 'flipVertical':
      this.flipVertical();
      break;

    case 'rotateRight':
      this.rotateRight();
      break;

    case 'rotateLeft':
      this.rotateLeft();
      break;

    case 'applyRotation':
      this.applyRotation();
      break;

    // ── Colors ──
    case 'applyStrokeColor':
      this.applyStrokeColor();
      break;

    case 'applyFillColor':
      this.applyFillColor();
      break;

    // ── Grouping ──
    case 'groupSelected':
      this.groupSelected();
      break;

    case 'ungroupSelected':
      this.ungroupSelected();
      break;

    // ── Unknown action ──
    default:
      console.warn(`[processButton] Unknown action: "${action}"`);
      break;
  }
}

//////////// Visual for buttons /////////
private darken(hex: string, amount: number): string {
  const c = hex.replace('#', '');

  const num = parseInt(c, 16);

  let r = (num >> 16) & 255;
  let g = (num >> 8) & 255;
  let b = num & 255;

  r = Math.max(0, Math.round(r * (1 - amount)));
  g = Math.max(0, Math.round(g * (1 - amount)));
  b = Math.max(0, Math.round(b * (1 - amount)));

  return `#${((1 << 24) + (r << 16) + (g << 8) + b)
    .toString(16)
    .slice(1)}`;
}

private isDbYes(value: any): boolean {
  return value === true ||
    String(value ?? '').trim().toUpperCase() === 'Y';
}
private resolveButtonAttributes(
  dataItem: any,
  state: 'up' | 'down' | 'disabled'
): any {
  const stateStyles = dataItem?.stateStyles ?? {};
  const upStyle = stateStyles.up ?? {};
  const selectedStyle = stateStyles[state] ?? {};

  // UP always uses its own attributes.
  // DOWN and DISABLED can independently inherit UP.
  const followsUp =
    state !== 'up' && this.isDbYes(selectedStyle.followUp);

  const attributes =
    state === 'up' || followsUp
      ? upStyle
      : selectedStyle;

  return {
    ...attributes,

    backStyle: attributes.BACK_STYLE,
    fillColor: attributes.BACK_COLOR,
    color: attributes.FORE_COLOR,
    patternStyle: attributes.PATTERN_STYLE,
    patternColor: attributes.PATTERN_COLOR,

    text: attributes.CAPTION,
    fontFamily: attributes.FONT_NAME,
    fontSize: attributes.FONT_SIZE,
    fontWeight: this.isDbYes(attributes.FONT_BOLD) ? 'bold' : 'normal',
    fontItalic: this.isDbYes(attributes.FONT_ITALIC),
    fontUnderline: this.isDbYes(attributes.FONT_UNDERLINE),

    imageType: attributes.IMAGE_TYPE,
    imageSource: attributes.IMAGE_NAME,
    imageScale: this.isDbYes(attributes.SCALE_IMAGE)
  };
}
/** Small helper: lighten a hex color by ratio (0..1). */
  private lighten(hex: string, ratio: number): string {
    const m = /^#?([0-9a-f]{3}|[0-9a-f]{6})$/i.exec(String(hex).trim());
    if (!m) return hex;
    let h = m[1];
    if (h.length === 3) h = h.split('').map(c => c + c).join('');
    const num = parseInt(h, 16);
    const r = Math.min(255, Math.round(((num >> 16) & 0xff) + (255 - ((num >> 16) & 0xff)) * ratio));
    const g = Math.min(255, Math.round(((num >> 8)  & 0xff) + (255 - ((num >> 8)  & 0xff)) * ratio));
    const b = Math.min(255, Math.round(( num        & 0xff) + (255 - ( num        & 0xff)) * ratio));
    return '#' + [r, g, b].map(v => v.toString(16).padStart(2, '0')).join('');
  }

public getButtonVisualStyle(dataItem: any): any {
  const buttonState = String(
    dataItem?.buttonState ?? 'normal'
  ).toLowerCase();

  const disabled =
    this.isDbYes(dataItem?.disabled) ||
    buttonState === 'disabled';

  // State used for drawing the visual.
  const visualState = disabled
    ? 'disabled'
    : buttonState === 'hover'
      ? 'hover'
      : buttonState === 'pressed' || buttonState === 'down'
        ? 'pressed'
        : 'normal';

  // State used to resolve database attributes.
  // Hover uses the normal/up attributes.
  const attributeState: 'up' | 'down' | 'disabled' =
    disabled
      ? 'disabled'
      : visualState === 'pressed'
        ? 'down'
        : 'up';

  const attributes = this.resolveButtonAttributes(
    dataItem,
    attributeState
  );

  return {
    state: visualState,
    disabled,
    attributes,

    actualFillTop:
      attributes.fillColor ??
      dataItem?.fillColor ??
      '#2196f3',

    actualFillBase:
      dataItem?.strokeColor ??
      '#0d47a1',

    actualTextColor:
      attributes.color ??
      dataItem?.color ??
      '#000000'
  };
}




 

  public buttonNoneVisual(options: any): Group {
  
  const dataItem =
    options?.dataItem?.dataItem ??
    options?.dataItem ??
    {};

  const {
    state,
    disabled,
    attributes,
    actualFillTop,
    actualFillBase,
    actualTextColor
  } = this.getButtonVisualStyle(dataItem);

   // Common properties are retained, but state-specific properties
  // take precedence.
  const visualData = {
    ...dataItem,
    ...attributes
  };

  const shape = options?.dataItem ?? {};

 const w = Math.max(
  20,
  Number(options?.width ?? visualData.width ?? 181)
);
  const h = Math.max(
  16,
  Number(options?.height ?? visualData.height ?? 60)
);

  const radius = Math.min(14, h / 3);
  const label = String(visualData.text ?? '');

  const group = new Group({
    cursor: disabled ? 'default' : 'pointer'
  } as any);

  // -----------------------------------------
  // Pressed geometry: shrink and darken.
  //   normal / hover : inset = 0, no darken
  //   pressed        : inset = 2, darken 0.12
  // -----------------------------------------
  const backStyle = String(
      visualData.backStyle ?? 'Solid'
    ).trim().toLowerCase();
  const isTransparent = backStyle === 'transparent';
  const pressed =
  state === 'pressed' && !isTransparent;

  const inset = pressed
    ? Math.min(3, Math.max(1, h * 0.06))
    : 0;

  const faceX = inset;
  const faceY = inset;
  const faceW = Math.max(1, w - inset * 2);
  const faceH = Math.max(1, h - inset * 2);
  const faceRadius = Math.max(0, radius - inset);

  // A flat button reads "pressed" when its fill gets darker.
  // Hover: slightly lighter. Disabled: leave as resolved by the style helper.
  let faceColor = actualFillTop;
  if (pressed) {
    faceColor = this.darken(actualFillTop, 0.12);
  } else if (state === 'hover' && !isTransparent && !disabled) {
    faceColor = this.lighten(actualFillTop, 0.20);
  }

  // Optional explicit border (default invisible).
  const borderWidth = Number(visualData?.borderWidth) || 0;
  const borderColor =
    visualData?.borderColor ??
    (borderWidth > 0 ? actualFillBase : null);

  // -----------------------------------------
  // 1. Flat face — gradient direction flips on press
  //    normal : light at top    -> dark at bottom (raised look)
  //    pressed: dark at top     -> light at bottom (sunk look)
  // -----------------------------------------
  const stops = state === 'disabled'
    ? [
        { offset: 0, color: faceColor },
        { offset: 1, color: faceColor }
      ]
    : pressed
      ? [
          { offset: 0, color: this.darken(faceColor, 0.10) },
          { offset: 1, color: this.lighten(faceColor, 0.06) }
        ]
      : [
          { offset: 0, color: this.lighten(faceColor, 0.15) },
          { offset: 1, color: faceColor }
        ];

  const top = new Rectangle({
    x: faceX,
    y: faceY,
    width: faceW,
    height: faceH,
    cornerRadius: faceRadius,
    fill: isTransparent
        ? { color: 'transparent' }
        : {
            color: faceColor,
            gradient: {
              type: 'linear',
              start: [0, 0],
              end: [0, faceH],
              stops
            }
          },

      stroke: borderColor
        ? { color: borderColor, width: borderWidth }
        : { width: 0 }
    } as any);

  group.append(top);

  // -----------------------------------------
  // 1b. Inner top shadow line — reads as "sunk"
  //     Only drawn on press. A short dark line
  //     just under the top edge sells the depth.
  // -----------------------------------------
  if (pressed && !disabled) {
    const shadowY = faceY + 1;
    const shadow = new Path({
      data:
        `M ${faceX + faceRadius},${shadowY} ` +
        `L ${faceX + faceW - faceRadius},${shadowY}`,
      stroke: {
        color: this.darken(faceColor, 0.35),
        width: 2
      },
      fill: { color: 'transparent' }
    });
    group.append(shadow);
  }

  // -----------------------------------------
  // 2. Pattern — drawn on the (possibly inset) face
  // -----------------------------------------
  this.drawPattern(
    group,
    visualData,
    faceX,
    faceY,
    faceW,
    faceH,
    faceRadius
  );

  // -----------------------------------------
  // 3. Image
  // -----------------------------------------
  const imageSource = visualData?.imageSource;
  let textX = faceX + faceW / 2;

  if (imageSource) {
    const baseWidth  = Number(visualData.imageWidth)  || 32;
    const baseHeight = Number(visualData.imageHeight) || 32;
    const scaleImage = visualData.imageScale === true;

    let imageWidth: number, imageHeight: number, padding: number, gap: number;

    if (scaleImage) {
      const aspect = baseWidth / baseHeight;
      const heightRatio = Number(visualData.imageScaleRatio) || 0.55;
      imageHeight = faceH * heightRatio;
      imageWidth  = imageHeight * aspect;
      const maxWidth = faceW * 0.4;
      if (imageWidth > maxWidth) { imageWidth = maxWidth; imageHeight = imageWidth / aspect; }
      padding = Math.max(6, faceH * 0.15);
      gap     = Math.max(6, faceH * 0.12);
    } else {
      imageWidth = baseWidth; imageHeight = baseHeight;
      padding = 10; gap = 8;
    }

    const position = String(
        visualData.imagePosition ?? 'left'
      ).toLowerCase();
    let imageX: number;
    if (position === 'right')      imageX = faceX + faceW - padding - imageWidth;
    else if (position === 'center') imageX = faceX + (faceW - imageWidth) / 2;
    else                            imageX = faceX + padding;

    const imageY = faceY + (faceH - imageHeight) / 2;

    group.append(new DiagramImage({
      source: imageSource,
      x: imageX, y: imageY,
      width: imageWidth, height: imageHeight
    }));

    const fontSize = Number(visualData?.fontSize) || 14;
    const halfText = (label.length * fontSize * 0.6) / 2;
    if (position === 'left') {
      textX = Math.max(faceX + faceW / 2, faceX + padding + imageWidth + gap + halfText);
    } else if (position === 'right') {
      textX = Math.min(faceX + faceW / 2, faceX + faceW - padding - imageWidth - gap - halfText);
    }
  }

  // -----------------------------------------
  // 4. Label — nudges down 1px on press for extra feedback
  // -----------------------------------------
  if (label) {
    const pressNudge = pressed ? 1 : 0;
    const text = new TextBlock({
      text: label,
      x: textX,
      y: faceY + faceH / 2 + 5 + pressNudge,
      fill: actualTextColor
    });
    (text.options as any).fontSize   = Number(visualData?.fontSize) || 14;
    (text.options as any).fontWeight = visualData?.fontWeight || 'bold';
    (text.options as any).fontFamily = visualData?.fontFamily || 'Arial, sans-serif';
    (text.options as any).textAnchor = 'middle';
    (text.options as any).fontStyle =
      visualData.fontItalic ? 'italic' : 'normal';

    (text.options as any).textDecoration =
      visualData.fontUnderline ? 'underline' : 'none';
      
    group.append(text);
  }

  return group;
}


  /**
   * 3D button visual.
   * Renders a raised, rounded, glossy button in ~3 DOM nodes per shape:
   *   1) dark "base" rect (the raised bottom layer)
   *   2) top face rect with vertical gradient + rounded corners
   *   3) label text
   
   * Kept allocation-light so 100+ shapes still render smoothly.
   */

public button3DVisual(options: any): Group {

  const dataItem =
    options?.dataItem?.dataItem ??
    options?.dataItem ??
    {};

  // Resolve button state and colors centrally.
  const {
    state,
    disabled,
    attributes,
    actualFillTop,
    actualFillBase,
    actualTextColor
  } = this.getButtonVisualStyle(dataItem);

  const faceColor =
  state === 'hover' && !disabled
    ? this.lighten(actualFillTop, 0.20)
    : actualFillTop;

  const shape = options?.dataItem ?? {};

  const w = Math.max(
    20,
    Number(
      options?.width ??
      shape?.width ??
      dataItem?.width ??
      181
    )
  );

  const h = Math.max(
    16,
    Number(
      options?.height ??
      shape?.height ??
      dataItem?.height ??
      60
    )
  );

  const radius = Math.min(14, h / 3);

  // Normal/hover: visible depth.
  // Pressed: reduced depth.
  const depth = state === 'pressed' ? 1 : 4;
  const topH = h - depth;

  const label = String(dataItem?.text ?? '');

  // -----------------------------------------
  // Main button group
  // -----------------------------------------

  const group = new Group({
    cursor: disabled ? 'default' : 'pointer'
  } as any);

  // -----------------------------------------
  // 1. Dark base / raised bottom layer
  // -----------------------------------------

  const base = new Rectangle({
    x: 1,
    y: depth,
    width: w - 2,
    height: topH,
    cornerRadius: radius,
    fill: {
      color: actualFillBase
    },
    stroke: null
  } as any);

  group.append(base);

  // -----------------------------------------
  // 2. Top face
  // -----------------------------------------

  const topY = state === 'pressed' ? 1 : 0;

  const top = new Rectangle({
    x: 0,
    y: topY,
    width: w,
    height: topH,
    cornerRadius: radius,

    fill: {
      color: faceColor,
      gradient: {
        type: 'linear',
        start: [0, 0],
        end: [0, topH],
        stops: [
          {
            offset: 0,
            color: state === 'disabled'
              ? faceColor
              : this.lighten(faceColor, 0.35)
          },
          {
            offset: 1,
            color: faceColor
          }
        ]
      }
    },

    stroke: {
      color: actualFillBase,
      width: 1
    }
  } as any);

  group.append(top);
  
  this.drawPattern(
    group,
    dataItem,
    0,
    topY,
    w,
    topH,
    radius
  );

  const imageSource = dataItem?.imageSource;
let textX = w / 2;

if (imageSource) {
  const baseWidth  = Number(dataItem.imageWidth)  || 32;
  const baseHeight = Number(dataItem.imageHeight) || 32;
  const scaleImage = !['false', '0'].includes(String(dataItem.imageScale).toLowerCase());

  let imageWidth: number;
  let imageHeight: number;
  let padding: number;
  let gap: number;

  if (scaleImage) {
    // Scales with the button: height is a fraction of the button face.
    const aspect = baseWidth / baseHeight;
    const heightRatio = Number(dataItem.imageScaleRatio) || 0.55;

    imageHeight = topH * heightRatio;
    imageWidth  = imageHeight * aspect;

    const maxWidth = w * 0.4;
    if (imageWidth > maxWidth) {
      imageWidth  = maxWidth;
      imageHeight = imageWidth / aspect;
    }

    padding = Math.max(6, topH * 0.15);
    gap     = Math.max(6, topH * 0.12);
  } else {
    // Fixed size: exactly imageWidth x imageHeight pixels, fixed spacing.
    imageWidth  = baseWidth;
    imageHeight = baseHeight;
    padding = 10;
    gap = 8;
  }

  const position = String(dataItem.imagePosition || 'left').toLowerCase();

  let imageX: number;
  if (position === 'right') {
    imageX = w - padding - imageWidth;
  } else if (position === 'center') {
    imageX = (w - imageWidth) / 2;
  } else {
    imageX = padding;
  }
  const imageY = topY + (topH - imageHeight) / 2;

  group.append(new DiagramImage({
    source: imageSource,
    x: imageX,
    y: imageY,
    width: imageWidth,
    height: imageHeight
  }));

  // Keep the label centred; shift it only if it would overlap the image.
  const fontSize = Number(dataItem?.fontSize) || 14;
  const halfText = (label.length * fontSize * 0.6) / 2;   // or your measureText() version

  if (position === 'left') {
    textX = Math.max(w / 2, padding + imageWidth + gap + halfText);
  } else if (position === 'right') {
    textX = Math.min(w / 2, w - padding - imageWidth - gap - halfText);
  }
}
  // -----------------------------------------
  // 3. Label
  // -----------------------------------------

  if (label) {

    const text = new TextBlock({
      text: label,
      x: textX,
      y: topY + topH / 2 + 5,
      fill: actualTextColor
    });

    (text.options as any).fontSize =
      Number(dataItem?.fontSize) || 14;

    (text.options as any).fontWeight =
      dataItem?.fontWeight || 'bold';

    (text.options as any).fontFamily =
      dataItem?.fontFamily || 'Arial, sans-serif';

    (text.options as any).textAnchor = 'middle';

    group.append(text);
  }

  return group;
}


 
/**
 * Raised button visual.
 * Same 3-node allocation strategy as button3DVisual, plus one gloss rect
 * for the curved-surface look. Total: 4 nodes per shape (3 while pressed).
 *
 * Layers:
 *   1) dark base (the visible "wall" of the raised button)
 *   2) top face with vertical gradient
 *   3) gloss pill across the top half
 *   4) label
 */
/**
 * Raised glossy button.
 *
 * Based directly on the SVG design:
 *
 *   1. Dark base / wall shifted downward
 *   2. Gradient top face
 *   3. Gloss highlight
 *   4. Thin inner rim
 *   5. Label + text shadow
 *
 * States:
 *   normal   - standard raised appearance
 *   hover    - slightly brighter
 *   pressed  - top face moves down toward the base
 *   disabled - greyed out, no interaction
 */

public buttonRaisedVisual(options: any): Group {

  const dataItem =
    options?.dataItem?.dataItem ??
    options?.dataItem ??
    {};

  // -----------------------------------------
  // Shared button state and colors
  // -----------------------------------------

  const {
    state,
    disabled,
    attributes,
    actualFillTop,
    actualFillBase,
    actualTextColor
  } = this.getButtonVisualStyle(dataItem);

  const faceColor =
  state === 'hover' && !disabled
    ? this.lighten(actualFillTop, 0.20)
    : actualFillTop;

  const shape = options?.dataItem ?? {};

  const w = Math.max(
    20,
    Number(
      options?.width ??
      shape?.width ??
      dataItem?.width ??
      181
    )
  );

  const h = Math.max(
    16,
    Number(
      options?.height ??
      shape?.height ??
      dataItem?.height ??
      60
    )
  );

  const radius = Math.min(14, h / 3);

  // Normal/hover: visible depth.
  // Pressed: reduced depth.
  const depth = state === 'pressed' ? 1 : 4;
  const topH = h - depth;

  const label = String(dataItem?.text ?? '');

  // -----------------------------------------
  // Main button group
  // -----------------------------------------

  const group = new Group({
    cursor: disabled ? 'default' : 'pointer'
  } as any);

  // -----------------------------------------
  // 1. Dark base / raised bottom layer
  // -----------------------------------------

  const base = new Rectangle({
    x: 1,
    y: depth,
    width: w - 2,
    height: topH,
    cornerRadius: radius,
    fill: {
      color: actualFillBase
    },
    stroke: null
  } as any);

  group.append(base);

  // -----------------------------------------
  // 2. Main inset face
  // -----------------------------------------

  const topY = state === 'pressed' ? 1 : 0;

  const topHeight = Math.max(1, topH - 10);

  const top = new Rectangle({
    x: 5,
    y: topY + 10,
    width: w - 10,
    height: topHeight,
    cornerRadius: radius,

    fill: {
      color: faceColor,
      gradient: {
        type: 'linear',
        start: [0, 0],
        end: [0, topHeight],
        stops: [
          {
            offset: 0,
            color: state === 'disabled'
              ? faceColor
              : this.lighten(faceColor, 0.35)
          },
          {
            offset: 1,
            color: faceColor
          }
        ]
      }
    },

    // White outline creates the raised rim.
    stroke: {
      color: '#FFFFFF',
      width: 1
    }
  } as any);

  group.append(top);

  // -----------------------------------------
  // 2b. Upper gloss / lighter overlay
  // -----------------------------------------

  const top2Height = Math.max(1, topHeight * 0.30);

  const top2 = new Rectangle({
    x: 5,
    y: topY + 10,
    width: w - 10,
    height: top2Height,
    cornerRadius: radius,

    fill: {
      color: this.lighten(faceColor, 0.35),
      gradient: {
        type: 'linear',
        start: [0, 0],
        end: [0, top2Height],
        stops: [
          {
            offset: 0,
            color: this.lighten(faceColor, 0.55)
          },
          {
            offset: 1,
            color: this.lighten(faceColor, 0.15)
          }
        ]
      }
    },

    // No outline around the gloss overlay.
    stroke: {
      width: 0
    }
  } as any);

  group.append(top2);

  this.drawPattern(
    group,
    dataItem,
    0,
    topY,
    w,
    topH,
    radius
  );


 const imageSource = dataItem?.imageSource;
let textX = w / 2;

if (imageSource) {
  const baseWidth  = Number(dataItem.imageWidth)  || 32;
  const baseHeight = Number(dataItem.imageHeight) || 32;
  const scaleImage = !['false', '0'].includes(String(dataItem.imageScale).toLowerCase());

  let imageWidth: number;
  let imageHeight: number;
  let padding: number;
  let gap: number;

  if (scaleImage) {
    // Scales with the button: height is a fraction of the button face.
    const aspect = baseWidth / baseHeight;
    const heightRatio = Number(dataItem.imageScaleRatio) || 0.55;

    imageHeight = topH * heightRatio;
    imageWidth  = imageHeight * aspect;

    const maxWidth = w * 0.4;
    if (imageWidth > maxWidth) {
      imageWidth  = maxWidth;
      imageHeight = imageWidth / aspect;
    }

    padding = Math.max(6, topH * 0.15);
    gap     = Math.max(6, topH * 0.12);
  } else {
    // Fixed size: exactly imageWidth x imageHeight pixels, fixed spacing.
    imageWidth  = baseWidth;
    imageHeight = baseHeight;
    padding = 10;
    gap = 8;
  }

  const position = String(dataItem.imagePosition || 'left').toLowerCase();

  let imageX: number;
  if (position === 'right') {
    imageX = w - padding - imageWidth;
  } else if (position === 'center') {
    imageX = (w - imageWidth) / 2;
  } else {
    imageX = padding;
  }
  const imageY = topY + (topH - imageHeight) / 2;

  group.append(new DiagramImage({
    source: imageSource,
    x: imageX,
    y: imageY,
    width: imageWidth,
    height: imageHeight
  }));

  // Keep the label centred; shift it only if it would overlap the image.
  const fontSize = Number(dataItem?.fontSize) || 14;
  const halfText = (label.length * fontSize * 0.6) / 2;   // or your measureText() version

  if (position === 'left') {
    textX = Math.max(w / 2, padding + imageWidth + gap + halfText);
  } else if (position === 'right') {
    textX = Math.min(w / 2, w - padding - imageWidth - gap - halfText);
  }
}

  // -----------------------------------------
  // 3. Label
  // -----------------------------------------

  if (label) {

    const text = new TextBlock({
      text: label,
      x: textX,
      y: topY + topH / 2 + 5,
      fill: actualTextColor
    });

    (text.options as any).fontSize =
      Number(dataItem?.fontSize) || 14;

    (text.options as any).fontWeight =
      dataItem?.fontWeight || 'bold';

    (text.options as any).fontFamily =
      dataItem?.fontFamily ||
      'Arial, sans-serif';

    (text.options as any).textAnchor = 'middle';

    group.append(text);
  }

  return group;
}




public buttonBelevedVisual(options: any): Group {

  const dataItem =
    options?.dataItem?.dataItem ??
    options?.dataItem ??
    {};

  // -----------------------------------------
  // Shared button state and colors
  // -----------------------------------------

  const {
    state,
    disabled,
    attributes,
    actualFillTop,
    actualFillBase,
    actualTextColor
  } = this.getButtonVisualStyle(dataItem);

  const shape = options?.dataItem ?? {};

  const w = Math.max(
    20,
    Number(
      options?.width ??
      shape?.width ??
      dataItem?.width ??
      181
    )
  );

  const h = Math.max(
    16,
    Number(
      options?.height ??
      shape?.height ??
      dataItem?.height ??
      60
    )
  );

  const label = String(dataItem?.text ?? '');

  // -----------------------------------------
  // Geometry
  // -----------------------------------------

  const radius = Math.min(14, h / 3) - 10;

  const bevel = Math.max(
    2,
    Math.min(5, Math.min(w, h) * 0.08)
  );

  const b = state === 'pressed'
    ? Math.max(1, bevel * 0.5)
    : bevel;

  const faceRadius = Math.max(0, radius - b);

  // -----------------------------------------
  // Bevel colors
  // -----------------------------------------

  const baseColor = actualFillBase;

  const faceColor =
    state === 'hover' && !disabled
      ? this.lighten(actualFillTop, 0.20)
      : actualFillTop;

  // Normal: light from top-left, shadow on bottom-right.
  let topEdgeColor = this.lighten(faceColor, 0.65);
  let leftEdgeColor = this.lighten(faceColor, 0.35);

  let rightEdgeColor = this.darken(baseColor, 0.05);
  let bottomEdgeColor = this.darken(baseColor, 0.25);

  if (state === 'hover') {

    // Slightly brighter overall, preserving bevel direction.
    topEdgeColor = this.lighten(faceColor, 0.75);
    leftEdgeColor = this.lighten(faceColor, 0.45);

    rightEdgeColor = this.darken(baseColor, 0.02);
    bottomEdgeColor = this.darken(baseColor, 0.15);
  }

  if (state === 'pressed') {

    // Invert the light and shadow to simulate a pressed button.
    topEdgeColor = this.darken(faceColor, 0.20);
    leftEdgeColor = this.darken(faceColor, 0.10);

    rightEdgeColor = this.lighten(baseColor, 0.15);
    bottomEdgeColor = this.lighten(baseColor, 0.25);
  }

  if (state === 'disabled') {

    // Desaturated grey appearance.
    topEdgeColor = '#E2E2E2';
    leftEdgeColor = '#D8D8D8';

    rightEdgeColor = '#A0A0A0';
    bottomEdgeColor = '#909090';
  }

  const group = new Group({
    cursor: disabled ? 'default' : 'pointer'
  } as any);

  // -----------------------------------------
  // 1. Outer rounded base
  // -----------------------------------------

  const base = new Rectangle({
    x: 0,
    y: 0,
    width: w,
    height: h,
    cornerRadius: radius,
    fill: {
      color: baseColor
    },
    stroke: {
      color: leftEdgeColor,
      width: 0
    }
  } as any);

  group.append(base);

  // -----------------------------------------
  // 2. Rounded button face
  // -----------------------------------------

  // const face = new Rectangle({
  //   x: b,
  //   y: b,
  //   width: Math.max(1, w - 2 * b),
  //   height: Math.max(1, h - 2 * b),
  //   cornerRadius: faceRadius,
  //   fill: {
  //     color: faceColor
  //   },
  //   stroke: {
  //     color: faceColor,
  //     width: 0
  //   }
  // } as any);

  // group.append(face);

  
// -----------------------------------------
// 3. Top highlight — overlaps both corners
// -----------------------------------------
const top = new Rectangle({
  x: 0,
  y: 0,
  width: w,
  height: b,
  cornerRadius: radius,
  fill: { color: topEdgeColor },
  stroke: { width: 0 }
} as any);

group.append(top);

// -----------------------------------------
// 4. Left highlight — overlaps top/bottom
// -----------------------------------------
const left = new Rectangle({
  x: 0,
  y: 0,
  width: b,
  height: h,
  cornerRadius: radius,
  fill: { color: topEdgeColor },
  stroke: { width: 0 }
} as any);

group.append(left);

// -----------------------------------------
// 5. Right dark bevel — overlaps top/bottom
// -----------------------------------------
const right = new Rectangle({
  x: w - b ,
  y: 0,
  width: b,
  height: h,
  cornerRadius: radius,
  fill: { color: rightEdgeColor },
  stroke: { width: 0 }
} as any);

group.append(right);

// -----------------------------------------
// 6. Bottom dark bevel — overlaps both corners
// -----------------------------------------
const bottom = new Rectangle({
  x: 0,
  y: h - b,
  width: w,
  height: b,
  cornerRadius: radius,
  fill: { color: bottomEdgeColor },
  stroke: { width: 0 }
} as any);

group.append(bottom);
// 7. Rounded button face — slightly overlaps the bevels.
const faceOverlap = Math.min(2, b * 0.4);
const faceInset = b - faceOverlap;

const faceWidth = w * 0.95;
const faceHeight = h * 0.90;

const faceX = (w - faceWidth) / 2;
const faceY = (h - faceHeight) / 2;


// Smaller radius prevents the base showing through at the corners.
const faceCornerRadius = Math.max(
  0,
  Math.min(radius * 0.35, faceHeight / 2, faceWidth / 2)
);

const face = new Rectangle({
  x: faceX,
  y: faceY,
  width: faceWidth,
  height: faceHeight,
  cornerRadius: faceCornerRadius,
  fill: { color: faceColor },
  stroke: { width: 0 }
} as any);

group.append(face);

this.drawPattern(
  group,
  dataItem,
  faceX,
  faceY,
  faceWidth,
  faceHeight,
  faceCornerRadius
);


 const imageSource = dataItem?.imageSource;
const labelText = String(dataItem?.text ?? '');
let textX = w / 2;

if (imageSource) {
  const baseWidth  = Number(dataItem.imageWidth)  || 32;
  const baseHeight = Number(dataItem.imageHeight) || 32;

  // false only for false / 0 / "false" / "0"; a missing value keeps scaling on.
  const scaleImage =
    !['false', '0'].includes(String(dataItem.imageScale).toLowerCase());

  let imageWidth: number;
  let imageHeight: number;
  let padding: number;
  let gap: number;

  if (scaleImage) {
    // Scales with the button face: height is a fraction of the face height.
    const aspect = baseWidth / baseHeight;
    const heightRatio = Number(dataItem.imageScaleRatio) || 0.55;

    imageHeight = faceHeight * heightRatio;
    imageWidth  = imageHeight * aspect;

    // Never let a wide image take more than 40% of the face.
    const maxWidth = faceWidth * 0.4;
    if (imageWidth > maxWidth) {
      imageWidth  = maxWidth;
      imageHeight = imageWidth / aspect;
    }

    padding = Math.max(6, faceHeight * 0.15);
    gap     = Math.max(6, faceHeight * 0.12);
  } else {
    // Fixed size, exactly imageWidth x imageHeight pixels.
    imageWidth  = baseWidth;
    imageHeight = baseHeight;
    padding = 10;
    gap = 8;
  }

  const position = String(dataItem.imagePosition || 'left').toLowerCase();

  let imageX: number;
  if (position === 'right') {
    imageX = faceX + faceWidth - padding - imageWidth;
  } else if (position === 'center') {
    imageX = faceX + (faceWidth - imageWidth) / 2;
  } else {
    imageX = faceX + padding;
  }
  const imageY = faceY + (faceHeight - imageHeight) / 2;

  group.append(new DiagramImage({
    source: imageSource,
    x: imageX,
    y: imageY,
    width: imageWidth,
    height: imageHeight
  }));

  // Keep the label where it was (w / 2) and move it only if it would overlap the image.
  const fontSize = Number(dataItem?.fontSize) || 14;
  const halfText = (labelText.length * fontSize * 0.6) / 2;   // or your measureText() version

  if (position === 'left') {
    textX = Math.max(w / 2, faceX + padding + imageWidth + gap + halfText);
  } else if (position === 'right') {
    textX = Math.min(w / 2, faceX + faceWidth - padding - imageWidth - gap - halfText);
  }
}

  // -----------------------------------------
  // 7. Label
  // -----------------------------------------

  if (label) {
    const text = new TextBlock({
      text: label,
      x: textX,
      y: h / 2 + 5,
      fill: actualTextColor
    });

    (text.options as any).fontSize =
      Number(dataItem?.fontSize) || 14;

    (text.options as any).fontWeight =
      dataItem?.fontWeight || 'normal';

    (text.options as any).fontFamily =
      dataItem?.fontFamily || 'Arial, sans-serif';

    (text.options as any).textAnchor = 'middle';

    group.append(text);
  }

  return group;
}

public buttonRecessedVisual(options: any): Group {
  const dataItem = options?.dataItem?.dataItem ?? options?.dataItem ?? {};

  const {
    state,
    disabled,
    attributes,
    actualFillTop,
    actualFillBase,
    actualTextColor
  } = this.getButtonVisualStyle(dataItem);

  const shape = options?.dataItem ?? {};

  const w = Math.max(
    20,
    Number(options?.width ?? shape?.width ?? dataItem?.width ?? 181)
  );

  const h = Math.max(
    16,
    Number(options?.height ?? shape?.height ?? dataItem?.height ?? 60)
  );

  const label = String(dataItem?.text ?? '');

  const radius = Math.min(10, h * 0.18);
  const bevel = Math.max(3, Math.min(8, Math.min(w, h) * 0.08));

  // The face is inset from the outer edge.
  const b = state === 'pressed' ? bevel * 0.7 : bevel;

  

  
  const baseColor = actualFillBase;
  const faceColor =
  state === 'hover' && !disabled
    ? this.lighten(actualFillTop, 0.20)
    : actualFillTop;

  // Intermediate-tone frame around the recessed button.
  let borderColor = this.lighten(baseColor, 0.25);

  if (state === 'hover') {
    borderColor = this.lighten(baseColor, 0.35);
  }

  if (state === 'pressed') {
    borderColor = this.lighten(baseColor, 0.15);
  }

  if (state === 'disabled') {
    borderColor = '#BDBDBD';
  }

  // Recessed bevel: dark top/left, light bottom/right.
  let topColor = this.darken(baseColor, 0.35);
  let leftColor = this.darken(baseColor, 0.20);
  let rightColor = this.lighten(faceColor, 0.45);
  let bottomColor = this.lighten(faceColor, 0.65);
  let innerShadowColor = this.darken(faceColor, 0.12);

  if (state === 'hover') {
    topColor = this.darken(baseColor, 0.25);
    leftColor = this.darken(baseColor, 0.12);
    rightColor = this.lighten(faceColor, 0.55);
    bottomColor = this.lighten(faceColor, 0.72);
    innerShadowColor = this.darken(faceColor, 0.08);
  }

  if (state === 'pressed') {
    // A pressed recessed button appears deeper.
    topColor = this.darken(baseColor, 0.45);
    leftColor = this.darken(baseColor, 0.30);
    rightColor = this.lighten(faceColor, 0.30);
    bottomColor = this.lighten(faceColor, 0.45);
    innerShadowColor = this.darken(faceColor, 0.20);
  }

  if (state === 'disabled') {
    topColor = '#858585';
    leftColor = '#A0A0A0';
    rightColor = '#E0E0E0';
    bottomColor = '#F0F0F0';
    innerShadowColor = '#C8C8C8';
  }

  const group = new Group({
    cursor: disabled ? 'default' : 'pointer'
  } as any);

 
// 1. Outer rounded border — make it clearly visible.
const borderWidth = Math.max(4, bevel * 0.8);

const border = new Rectangle({
  x: 0,
  y: 0,
  width: w,
  height: h,
  cornerRadius: radius,
  fill: { color: borderColor },
  stroke: { width: 0 }
} as any);

group.append(border);
const innerX = borderWidth;
const innerY = borderWidth;
const innerW = w - 2 * borderWidth;
const innerH = h - 2 * borderWidth;
const innerRadius = Math.max(0, radius - borderWidth);

const faceX = innerX + b;
const faceY = innerY + b;
const faceW = Math.max(1, innerW - 2 * b);
const faceH = Math.max(1, innerH - 2 * b);
const faceRadius = Math.max(0, innerRadius - b * 0.5);

// 2. Dark top bevel — extends across both corners.
const top = new Rectangle({
  x: innerX,
  y: innerY,
  width: innerW,
  height: b,
  cornerRadius: Math.min(innerRadius, b / 2),
  fill: { color: topColor },
  stroke: { width: 0 }
} as any);

group.append(top);

// 3. Dark left bevel — overlaps top and bottom.
const left = new Rectangle({
  x: innerX,
  y: innerY,
  width: b,
  height: innerH,
  cornerRadius: Math.min(innerRadius, b / 2),
  fill: { color: leftColor },
  stroke: { width: 0 }
} as any);

group.append(left);

// 4. Light right bevel — overlaps top and bottom.
const right = new Rectangle({
  x: innerX + innerW - b,
  y: innerY,
  width: b,
  height: innerH,
  cornerRadius: Math.min(innerRadius, b / 2),
  fill: { color: rightColor },
  stroke: { width: 0 }
} as any);

group.append(right);

// 5. Light bottom bevel — extends across both corners.
const bottom = new Rectangle({
  x: innerX,
  y: innerY + innerH - b,
  width: innerW,
  height: b,
  cornerRadius: Math.min(innerRadius, b / 2),
  fill: { color: bottomColor },
  stroke: { width: 0 }
} as any);

group.append(bottom);

// 6. Rounded recessed face.
const face = new Rectangle({
  x: faceX,
  y: faceY,
  width: faceW,
  height: faceH,
  cornerRadius: faceRadius,
  fill: { color: faceColor },
  stroke: { width: 0 }
} as any);

group.append(face);

this.drawPattern(
  group,
  dataItem,
  faceX,
  faceY,
  faceW,
  faceH,
  faceRadius
);


 const imageSource = dataItem?.imageSource;
const padding = 10;
const gap = 8;
let textX = faceX + faceW / 2;

if (imageSource) {
  const imageWidth = Number(dataItem.imageWidth) || 32;
  const imageHeight = Number(dataItem.imageHeight) || 32;
  const position = String(
    dataItem.imagePosition || 'left'
  ).toLowerCase();

  let imageX: number;

  if (position === 'right') {
    imageX = faceX + faceW - padding - imageWidth;
  } else if (position === 'center') {
    imageX = faceX + (faceW - imageWidth) / 2;
  } else {
    imageX = faceX + padding;
  }

  const imageSource = dataItem?.imageSource;
const labelText = String(dataItem?.text ?? '');
const centerX = faceX + faceW / 2;
let textX = centerX;

if (imageSource) {
  const baseWidth  = Number(dataItem.imageWidth)  || 32;
  const baseHeight = Number(dataItem.imageHeight) || 32;

  // false only for false / 0 / "false" / "0"; a missing value keeps scaling on.
  const scaleImage =
    !['false', '0'].includes(String(dataItem.imageScale).toLowerCase());

  let imageWidth: number;
  let imageHeight: number;
  let padding: number;
  let gap: number;

  if (scaleImage) {
    // Scales with the button face: height is a fraction of the face height.
    const aspect = baseWidth / baseHeight;
    const heightRatio = Number(dataItem.imageScaleRatio) || 0.55;

    imageHeight = faceH * heightRatio;
    imageWidth  = imageHeight * aspect;

    // Never let a wide image take more than 40% of the face.
    const maxWidth = faceW * 0.4;
    if (imageWidth > maxWidth) {
      imageWidth  = maxWidth;
      imageHeight = imageWidth / aspect;
    }

    padding = Math.max(6, faceH * 0.15);
    gap     = Math.max(6, faceH * 0.12);
  } else {
    // Fixed size, exactly imageWidth x imageHeight pixels.
    imageWidth  = baseWidth;
    imageHeight = baseHeight;
    padding = 10;
    gap = 8;
  }

  const position = String(dataItem.imagePosition || 'left').toLowerCase();

  let imageX: number;
  if (position === 'right') {
    imageX = faceX + faceW - padding - imageWidth;
  } else if (position === 'center') {
    imageX = faceX + (faceW - imageWidth) / 2;
  } else {
    imageX = faceX + padding;
  }
  const imageY = faceY + (faceH - imageHeight) / 2;

  group.append(new DiagramImage({
    source: imageSource,
    x: imageX,
    y: imageY,
    width: imageWidth,
    height: imageHeight
  }));

  // Keep the label centred on the face; move it only if it would overlap the image.
  const fontSize = Number(dataItem?.fontSize) || 14;
  const halfText = (labelText.length * fontSize * 0.6) / 2;   // or your measureText() version

  if (position === 'left') {
    textX = Math.max(centerX, faceX + padding + imageWidth + gap + halfText);
  } else if (position === 'right') {
    textX = Math.min(centerX, faceX + faceW - padding - imageWidth - gap - halfText);
  }
}

  // 8. Label.
  if (label) {
    const text = new TextBlock({
      text: label,
      x: textX,
      y: faceY + faceH / 2 + 5,
      fill: actualTextColor
    });

    (text.options as any).fontSize =
      Number(dataItem?.fontSize) || 14;

    (text.options as any).fontWeight =
      dataItem?.fontWeight || 'normal';

    (text.options as any).fontFamily =
      dataItem?.fontFamily || 'Arial, sans-serif';

    (text.options as any).textAnchor = 'middle';

    group.append(text);
  }

  
}
return group;

}

  public disableButton1023(){
    const shape = this.diagram?.getShapeById("Button:1023");

    if (shape) {

      const dataItem =
        shape.dataItem?.dataItem ??
        shape.dataItem ??
        {};

      dataItem.disabled = true;

      this.refreshCustomShape(shape);
    }
  }

////// patterns



private addPatternPath(
  group: Group,
  points: Array<[number, number]>,
  color: string,
  width: number = 1
): void {
  if (points.length < 2) {
    return;
  }

  // Build an SVG path string: "M x0 y0 L x1 y1 L x2 y2 ..."
  const data = points
    .map((p, i) => `${i === 0 ? 'M' : 'L'} ${p[0]} ${p[1]}`)
    .join(' ');

  const path = new Path({
    data,
    stroke: { color, width },
    fill: { color: 'transparent' }
  });

  group.append(path);
}


private drawDots(
  group: Group,
  x: number, y: number, w: number, h: number,
  radius: number, color: string, size: number, spacing: number
): void {
  // Use tiny filled rectangles for dots to avoid Circle geometry issues.
  const d = Math.max(1, size * 0.6);

  for (let cy = y + spacing / 2; cy < y + h; cy += spacing) {
    for (let cx = x + spacing / 2; cx < x + w; cx += spacing) {
      const dot = new Rectangle({
        x: cx - d / 2,
        y: cy - d / 2,
        width: d,
        height: d,
        cornerRadius: d / 2,
        fill: { color },
        stroke: { width: 0 }
      } as any);

      group.append(dot);
    }
  }
}

private drawChecks(
  group: Group,
  x: number, y: number, w: number, h: number,
  color: string, size: number, spacing: number
): void {
  const cell = Math.max(spacing, size * 2);

  for (let cy = y; cy < y + h; cy += cell) {
    for (let cx = x; cx < x + w; cx += cell) {
      const even = (Math.floor((cx - x) / cell) +
                    Math.floor((cy - y) / cell)) % 2 === 0;

      if (even) {
        group.append(new Rectangle({
          x: cx, y: cy,
          width: Math.min(cell, x + w - cx),
          height: Math.min(cell, y + h - cy),
          fill: { color },
          stroke: { width: 0 }
        } as any));
      }
    }
  }
}

private drawBoxes(
  group: Group,
  x: number, y: number, w: number, h: number,
  color: string, size: number, spacing: number, style: string
): void {
  const factor = style === 'small boxes' ? 0.6 :
                 style === 'medium boxes' ? 1.0 : 1.6;
  const cell = Math.max(3, spacing * factor);

  for (let cy = y; cy < y + h; cy += cell) {
    for (let cx = x; cx < x + w; cx += cell) {
      group.append(new Rectangle({
        x: cx, y: cy,
        width: Math.min(cell, x + w - cx),
        height: Math.min(cell, y + h - cy),
        fill: { color, opacity: 0 },
        stroke: { color, width: Math.max(1, size / 3) }
      } as any));
    }
  }
}

private drawStraightLines(
  group: Group,
  x: number, y: number, w: number, h: number,
  color: string, size: number, spacing: number, style: string
): void {
  const vertical = style.includes('vertical');
  const wide = style.includes('wide');
  const gap = wide ? spacing * 1.8 : spacing;
  const lineWidth = Math.max(1, wide ? size * 0.65 : size * 0.3);

  if (vertical) {
    for (let cx = x; cx <= x + w; cx += gap) {
      this.addPatternPath(group, [[cx, y], [cx, y + h]], color, lineWidth);
    }
  } else {
    for (let cy = y; cy <= y + h; cy += gap) {
      this.addPatternPath(group, [[x, cy], [x + w, cy]], color, lineWidth);
    }
  }
}

private drawDiagonalPattern(
  group: Group,
  x: number,
  y: number,
  w: number,
  h: number,
  color: string,
  size: number,
  spacing: number,
  style: string
): void {
  const normalizedStyle = style.trim().toLowerCase();
  const wide = normalizedStyle.includes('wide');
  const gap = wide ? spacing * 1.8 : spacing;
  const lineWidth = Math.max(1, wide ? size * 0.65 : size * 0.3);

  const drawRight =
    normalizedStyle === 'right diagonal' ||
    normalizedStyle === 'wide right diagonal' ||
    normalizedStyle === 'hatch';

  const drawLeft =
    normalizedStyle === 'left diagonal' ||
    normalizedStyle === 'wide left diagonal' ||
    normalizedStyle === 'hatch';

  // Generate diagonal lines only between points on the rectangle boundary.
  // This prevents pattern geometry from extending beyond the button.
  const minOffset = -h;
  const maxOffset = w;

  for (let offset = minOffset; offset <= maxOffset; offset += gap) {
    if (drawRight) {
      const x1 = Math.max(0, offset);
      const y1 = Math.max(0, -offset);
      const x2 = Math.min(w, offset + h);
      const y2 = Math.min(h, h - offset);

      if (x1 <= x2 && y1 <= y2) {
        this.addPatternPath(
          group,
          [[x + x1, y + y1], [x + x2, y + y2]],
          color,
          lineWidth
        );
      }
    }

    if (drawLeft) {
      const x1 = Math.max(0, offset);
      const y1 = Math.min(h, h + offset);
      const x2 = Math.min(w, offset + h);
      const y2 = Math.max(0, -offset);

      if (x1 <= x2 && y2 <= y1) {
        this.addPatternPath(
          group,
          [[x + x1, y + y1], [x + x2, y + y2]],
          color,
          lineWidth
        );
      }
    }
  }
}

private drawBricks(
  group: Group,
  x: number, y: number, w: number, h: number,
  color: string, size: number, spacing: number
): void {
  const brickW = Math.max(spacing * 2, size * 3);
  const brickH = Math.max(spacing, size * 1.5);
  const lineWidth = Math.max(1, size / 3);

  for (let row = 0, cy = y; cy <= y + h; row++, cy += brickH) {
    const offset = row % 2 ? brickW / 2 : 0;

    this.addPatternPath(
      group, [[x, cy], [x + w, cy]], color, lineWidth
    );

    for (let cx = x + offset; cx <= x + w; cx += brickW) {
      this.addPatternPath(
        group,
        [[cx, cy], [cx, Math.min(cy + brickH, y + h)]],
        color,
        lineWidth
      );
    }
  }
}

private drawDecorativePattern(
  group: Group,
  x: number, y: number, w: number, h: number,
  color: string, size: number, spacing: number, style: string
): void {
  const cellW = Math.max(spacing * 1.5, size * 2);
  const cellH = Math.max(spacing, size * 1.5);
  const lineWidth = Math.max(1, size / 3);

  for (let cy = y; cy < y + h; cy += cellH) {
    for (let cx = x; cx < x + w; cx += cellW) {
      const rw = Math.min(cellW, x + w - cx);
      const rh = Math.min(cellH, y + h - cy);

      if (style === 'diamonds') {
        this.addPatternPath(
          group,
          [
            [cx + rw / 2, cy],
            [cx + rw, cy + rh / 2],
            [cx + rw / 2, cy + rh],
            [cx, cy + rh / 2],
            [cx + rw / 2, cy]
          ],
          color, lineWidth
        );
      } else if (style === 'ovals') {
        // Approximate an oval with a closed polygon.
        const points: Array<[number, number]> = [];
        for (let i = 0; i <= 16; i++) {
          const angle = (i / 16) * Math.PI * 2;
          points.push([
            cx + rw / 2 + Math.cos(angle) * rw / 2,
            cy + rh / 2 + Math.sin(angle) * rh / 2
          ]);
        }
        this.addPatternPath(group, points, color, lineWidth);
      } else if (style === 'scales') {
        this.addPatternPath(
          group,
          [
            [cx, cy + rh],
            [cx + rw / 2, cy],
            [cx + rw, cy + rh]
          ],
          color, lineWidth
        );
      } else if (style === 'waves') {
        const points: Array<[number, number]> = [];
        for (let i = 0; i <= 12; i++) {
          const px = cx + (i / 12) * rw;
          const py = cy + rh / 2 +
            Math.sin((i / 12) * Math.PI * 2) * rh / 2;
          points.push([px, py]);
        }
        this.addPatternPath(group, points, color, lineWidth);
      }
    }
  }
}


private drawPattern(
  group: Group,
  dataItem: any,
  x: number,
  y: number,
  width: number,
  height: number,
  radius: number
): void {
  const style = String(dataItem?.patternStyle ?? '')
    .trim()
    .toLowerCase();

  if (!style || style === 'none') {
    return;
  }

  const color = dataItem?.patternColor || '#FFFFFF';
  const size = Math.max(1, Number(dataItem?.patternSize) || 5);
  const spacing = Math.max(
    size + 1,
    Number(dataItem?.patternSpacing) || 10
  );

  switch (style) {
    case 'dots':
      this.drawDots(group, x, y, width, height, radius, color, size, spacing);
      break;

    case 'checks':
      this.drawChecks(group, x, y, width, height, color, size, spacing);
      break;

    case 'small boxes':
    case 'medium boxes':
    case 'large boxes':
      this.drawBoxes(
        group, x, y, width, height, color, size, spacing, style
      );
      break;

    case 'vertical lines':
    case 'wide vertical lines':
    case 'horizontal lines':
    case 'wide horizontal lines':
      this.drawStraightLines(
        group, x, y, width, height, color, size, spacing, style
      );
      break;

    case 'right diagonal':
    case 'wide right diagonal':
    case 'left diagonal':
    case 'wide left diagonal':
    case 'hatch':
      this.drawDiagonalPattern(
        group, x, y, width, height, color, size, spacing, style
      );
      break;

    case 'bricks':
      this.drawBricks(group, x, y, width, height, color, size, spacing);
      break;

    case 'ovals':
    case 'diamonds':
    case 'scales':
    case 'waves':
      this.drawDecorativePattern(
        group, x, y, width, height, color, size, spacing, style
      );
      break;
  }
}

private isShapeTarget(event: PointerEvent): boolean {
  const target = event.target;

  if (!(target instanceof Element)) {
    return false;
  }

  // The SVG root itself represents the diagram background
  // in your current test.
  return target instanceof SVGElement &&
         target.tagName.toLowerCase() !== 'svg';
}

@HostListener('document:pointerup')
onPointerUp(): void {
  console.log('ButtonSensor: document pointerup');
  this.releasePressedButton();
}

@HostListener('document:pointercancel')
onPointerCancel(): void {
  console.log('ButtonSensor: document pointercancel');
  this.releasePressedButton();
}

@HostListener('window:blur')
onWindowBlur(): void {
  if (!this.pressedShapeId) return;

  console.log('ButtonSensor: window blur - releasing button');
  this.releasePressedButton();
}

@HostListener('document:pointerdown', ['$event'])
onPointerDown(event: PointerEvent): void {
  if (event.button !== 0) return;

  const isShape = this.isShapeTarget(event);

  console.log('ButtonSensor: pointerdown', {
    isShape,
    currentShapeId: this.currentShapeId,
    targetTag: (event.target as Element)?.tagName
  });

  if (!isShape || !this.currentShapeId) {
    return;
  }

  const shapeId = this.currentShapeId;

  // Verify that the current shape is actually a button.
  const shape = this.diagram?.getShapeById(shapeId);
  if (!shape) {
    console.warn('ButtonSensor: shape not found', shapeId);
    return;
  }

  const dataItem = this.shapeDataItem(shape);
  if (!dataItem) return;
console.log('ButtonSensor: dataItem:', dataItem);
  const type = String(dataItem.libraryKind ?? '').toLowerCase();

  const isButton = [
    'button',
    'push button',
    'momentary',
    'momentry',
    'maintained',
    'latched',
    'multistate',
    'interlocked',
    'ramp button',
    'navigation button'
  ].includes(type);

  if (!isButton) {
    console.log('ButtonSensor: current shape is not a button', type);
    return;
  }

  this.pressedShapeId = shapeId;
  this.setButtonState(shapeId, 'pressed');
}

private releasePressedButton(): void {
  if (!this.pressedShapeId) {
    return;
  }

  const id = this.pressedShapeId;

  console.log('ButtonSensor: releasing button', id);

  this.pressedShapeId = null;
  this.setButtonState(id, 'normal');
}

private setButtonState(
  shapeId: string,
  state: 'normal' | 'pressed'
): void {
  console.log('ButtonSensor: setButtonState', shapeId);
  if (!shapeId || !this.diagram) return;

  const shape = this.diagram.getShapeById(shapeId);
  if (!shape) {
    console.warn('ButtonSensor: shape not found', shapeId);
    return;
  }

  const dataItem = this.shapeDataItem(shape);
  if (!dataItem) return;

  if (dataItem.disabled === true) {
    state = 'normal';
  }

  if (dataItem.buttonState === state) return;

  // Update the state first.
  dataItem.buttonState = state;

  // Redraw the custom visual.
  this.refreshCustomShape(shape);

  console.log(
    `ButtonSensor: refreshed ${shapeId}, state=${state}`
  );
}
// Tool that will be created when the user releases the pointer.
// Set when the user picks a shape from the toolbar; cleared on release.
public pendingDragTool: string | null = null;
public pendingDragShapeType: string | null = null; // original toolbar label, e.g. 'Rectangle'
private pendingDragIsLibraryOnly = false;           // true for library kinds (richText, container...)
// Bounding box while dragging (for preview + final placement).
private dragBoxStart: { x: number; y: number } | null = null;
private dragBoxCurrent: { x: number; y: number } | null = null;
public dragBoxPreviewX = 0;
public dragBoxPreviewY = 0;
public dragBoxPreviewW = 0;
public dragBoxPreviewH = 0;

private armDragTool(shapeType: string): void {
  this.resetFreehandState(false);
  this.insertShapeFlag = false;
  this.diagram?.deselect();

  this.pendingDragShapeType = shapeType;
  this.pendingDragTool = this.shapeToIconKey[shapeType] ?? 'default';

  const libraryOnlyKinds = [
    'rectangle','rounded rectangle','elipse','arc','polygon',
    'polyline','wedge','panel','freehand','image','text',
    // ── navigation / keypad shapes (exact camelCase, matched case-sensitively) ──
    'arrowVertical','arrowHorizontal','backspace','endButton','enter',
    'moveLeft','moveRight','moveUp','moveDown','pageUp','pageDown'
  ];
  this.pendingDragIsLibraryOnly = libraryOnlyKinds.includes(shapeType);


  this.freehandMode = true;
  this.freehandStraight = false;
  this.freehandPoints = [];
  this.statusMessage =
    `Drag on the diagram to size the ${shapeType}, then release.`;
}
private async insertShapeFromBox(
  shapeType: string,
  x: number,
  y: number,
  width: number,
  height: number
): Promise<void> {
  const kind = this.shapeToIconKey[shapeType] ?? "default";

  // Preserve copied-shape handling separately.
  // Preserve shape-specific options and initialization.

  await this.insertAndAddLibraryShape(shapeType, kind, {
    x,
    y,
    width,
    height,
    text: "",
    fillColor: "#D3D3D3"
  });
}
private updateDragBoxPreview(event: PointerEvent): void {
  const start = this.dragBoxStart, end = this.dragBoxCurrent;
  if (!start || !end) { this.clearDragBoxPreview(); return; }

  // Convert both model corners back to stage coords for the SVG overlay.
  const stageStart = this.modelToStage(start.x, start.y);
  const stageEnd   = this.modelToStage(end.x,   end.y);
  if (!stageStart || !stageEnd) { this.clearDragBoxPreview(); return; }

  this.dragBoxPreviewX = Math.min(stageStart.x, stageEnd.x);
  this.dragBoxPreviewY = Math.min(stageStart.y, stageEnd.y);
  this.dragBoxPreviewW = Math.abs(stageEnd.x - stageStart.x);
  this.dragBoxPreviewH = Math.abs(stageEnd.y - stageStart.y);
}

private clearDragBoxPreview(): void {
  this.dragBoxPreviewX = this.dragBoxPreviewY = 0;
  this.dragBoxPreviewW = this.dragBoxPreviewH = 0;
}

/** Inverse of pointerToModel — model coords → stage (SVG) coords. */
private modelToStage(modelX: number, modelY: number): { x: number; y: number } | null {
  if (!this.diagramHost) return null;
  return {
    x: modelX * this.zoomLevel - this.currentPan.x,
    y: modelY * this.zoomLevel - this.currentPan.y
  };
}
/**
 * Single dispatcher used by the Align / Distribute DropDownButton.
 * Each menu item carries { text, action, icon } in `data`.
 */
public onAlignCommand(event: any): void {
  const action = event.action;
  console.log ("onAlignCommand:action:", action, "event:",event)
  if (!action) {
    return;
  }
  switch (action) {
    case "align-left":
      this.alignSelected("left");
      break;
    case "align-center":
      this.alignSelected("center");
      break;
    case "align-right":
      this.alignSelected("right");
      break;
    case "align-top":
      this.alignSelected("top");
      break;
    case "align-middle":
      this.alignSelected("middle");
      break;
    case "align-bottom":
      this.alignSelected("bottom");
      break;
    case "align-center-points":
      this.alignSelected("centerPoints");
      break;
    case "distribute-horizontal":
      this.distributeSelected("horizontal");
      break;
    case "distribute-vertical":
      this.distributeSelected("vertical");
      break;
    default:
      console.warn(`[onAlignCommand] unknown action: ${action}`);
      break;
  }
}

/** Split the flat command list into two DropDownButton menus. */
public readonly alignMenuItems = [
  { text: "Align Left",          action: "align-left",          icon: "alignLeft" },
  { text: "Align Center",        action: "align-center",        icon: "alignCenter" },
  { text: "Align Right",         action: "align-right",         icon: "alignRight" },
  { text: "Align Top",           action: "align-top",           icon: "alignTop" },
  { text: "Align Middle",        action: "align-middle",        icon: "alignMiddle" },
  { text: "Align Bottom",        action: "align-bottom",        icon: "alignBottom" },
  { text: "Align Center Points", action: "align-center-points", icon: "alignCenterPoints" }
];

public readonly distributeMenuItems = [
  { text: "Space Horizontal", action: "distribute-horizontal", icon: "spaceHorizontal" },
  { text: "Space Vertical",   action: "distribute-vertical",   icon: "spaceVertical" }
];
/** Tooltip shown on the Align dropdown — explains the disabled reason. */
public get alignTitle(): string {
  if (this.canAlign) {
    return "Align or distribute the selected shapes";
  }
  return `Select at least 2 shapes to align (${this.selectedShapes().length} selected)`;
}

/** Tooltip shown on the Distribute dropdown — explains the disabled reason. */
public get distributeTitle(): string {
  if (this.canDistribute) {
    return "Space the selected shapes evenly";
  }
  return `Select at least 3 shapes to space evenly (${this.selectedShapes().length} selected)`;
}

}

