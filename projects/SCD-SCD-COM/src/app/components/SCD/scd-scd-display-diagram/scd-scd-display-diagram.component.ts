import { Component, Input, Output,ViewChild, EventEmitter,
   HostListener ,ViewContainerRef, ComponentRef, AfterViewInit, 
   OnDestroy, ChangeDetectorRef } from '@angular/core';
import { FormGroup, FormControl, Validators ,FormBuilder} from '@angular/forms';
import { DialogService } from '@progress/kendo-angular-dialog';
import { geometry } from '@progress/kendo-drawing';
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
import {ScdAllAlarmsComponent} from '../scd-all-alarms/scd-all-alarms.component';
import {ScdArrowButtonPropertiesComponent} from '../scd-arrow-button-properties/scd-arrow-button-properties.component';
import {ScdArrowButtonTimingComponent} from '../scd-arrow-button-timing/scd-arrow-button-timing.component';
import {ScdArrowPropertiesComponent} from '../scd-arrow-properties/scd-arrow-properties.component';
import {ScdArrowTimingPropertiesComponent} from '../scd-arrow-timing-properties/scd-arrow-timing-properties.component';
import {ScdBarGraphPropertiesComponent} from '../scd-bar-graph-properties/scd-bar-graph-properties.component';
import {ScdBrowserPropertiesComponent} from '../scd-browser-properties/scd-browser-properties.component';
import {ScdButtonPropertiesComponent} from '../scd-button-properties/scd-button-properties.component';
import {ScdControlListSelectorPropertiesComponent} from '../scd-control-list-selector-properties/scd-control-list-selector-properties.component';
import {ScdDisplayKeysScreenComponent} from '../scd-display-keys-screen/scd-display-keys-screen.component';
import {ScdDisplayListSelectorPropertiesComponent} from '../scd-display-list-selector-properties/scd-display-list-selector-properties.component';
import {ScdDisplaySettingsScreenComponent} from '../scd-display-settings-screen/scd-display-settings-screen.component';
import {ScdGaugePropertiesComponent} from '../scd-gauge-properties/scd-gauge-properties.component';
import {ScdGridPropertiesSettingsComponent} from '../scd-grid-properties-settings/scd-grid-properties-settings.component';
import {ScdJavascriptCodeScreenComponent} from '../scd-javascript-code-screen/scd-javascript-code-screen.component';
import {ScdListIndicatorPropertiesComponent} from '../scd-list-indicator-properties/scd-list-indicator-properties.component';
import {ScdListIndicatorStatesPropertiesComponent} from '../scd-list-indicator-states-properties/scd-list-indicator-states-properties.component';
import {ScdLocalMessagePropertiesComponent} from '../scd-local-message-properties/scd-local-message-properties.component';
import {ScdMessageDatePropertiesComponent} from '../scd-message-date-properties/scd-message-date-properties.component';
import {ScdMultistateIndicatorPropertiesComponent} from '../scd-multistate-indicator-properties/scd-multistate-indicator-properties.component';
import {ScdNavigationButtonPropertiesComponent} from '../scd-navigation-button-properties/scd-navigation-button-properties.component';
import {ScdNumericDisplayPropertiesComponent} from '../scd-numeric-display-properties/scd-numeric-display-properties.component';
import {ScdNumericInputPropertiesComponent} from '../scd-numeric-input-properties/scd-numeric-input-properties.component';
import {ScdPilotedListSelectorPropertiesComponent} from '../scd-piloted-list-selector-properties/scd-piloted-list-selector-properties.component';
import {ScdPushButtonPropertiesComponent} from '../scd-push-button-properties/scd-push-button-properties.component';
import {ScdRampButtonTimingComponent} from '../scd-ramp-button-timing/scd-ramp-button-timing.component';
import {ScdScalePropertiesComponent} from '../scd-scale-properties/scd-scale-properties.component';
import {ScdShapePropertiesComponent} from '../scd-shape-properties/scd-shape-properties.component';
import {ScdStringDisplayPropertiesComponent} from '../scd-string-display-properties/scd-string-display-properties.component';
import {ScdStringInputPropertiesComponent} from '../scd-string-input-properties/scd-string-input-properties.component';
import {ScdSymbolPropertiesComponent} from '../scd-symbol-properties/scd-symbol-properties.component';
import {ScdSymbolStatesPropertiesComponent} from '../scd-symbol-states-properties/scd-symbol-states-properties.component';
import {ScdSymbolfactoryplusComponent} from '../scd-symbolfactoryplus/scd-symbolfactoryplus.component';
import {ScdTagLabelPropertiesComponent} from '../scd-tag-label-properties/scd-tag-label-properties.component';
import {ScdTextPropertiesComponent} from '../scd-text-properties/scd-text-properties.component';


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
    this.toggleMode();

  }
  public scadaData: any = {};
  private scadaConfig = {};
  private scadaSubscriptions: Subscription[] = [];
  private componentConfigChangeEvent!: Subscription;
  public ngAfterViewInit() {
    this.starServices.setRTL();
    this.disableFields();
    this.WHEN_NEW_FORM_INSTANCE();
    // If there's a property dialog to render, create the component
    if (this.propertyDialogData && this.propertyDialogData.isVisible) {
      this.createPropertyDialogComponent();
    }
    
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
    if (typeof this.componentConfigChangeEvent !== "undefined") this.componentConfigChangeEvent.unsubscribe();
    this.scadaSubscriptions.forEach(sub => sub.unsubscribe());
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
      this.toggleMode();

    }, 300);

  }
}

    
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
     console.log("kendoui_content:1:", this.starServices.sessionParams['COPIED_SHAPE']);

    if (typeof this.starServices.sessionParams['COPIED_SHAPE'] != "undefined"
      && this.starServices.sessionParams['COPIED_SHAPE'] != "") {
      let copiedShape = this.starServices.sessionParams['COPIED_SHAPE'];
      let kendoui_content = JSON.parse(copiedShape.kendoui_content);
      kendoui_content.id = copiedShape.id;
      this.starServices.sessionParams['COPIED_SHAPE'] = "";
      console.log("kendoui_content:2:", formGroup, this.lastClickX, this.lastClickY, kendoui_content);
      let shapeType = "SYMPOL_FACTORY";
      kendoui_content = await this.insertSCDShape(kendoui_content, shapeType)
      this.add_new_shape(kendoui_content, copiedShape.type);
      this.updateShapes();
    }

}

 async ON_CLICK_CONTEXT_MENU(menuType,event){
     setTimeout(() => {
      this.selectedShape = null;
    });
    if (menuType == "DROPDOWN" && !this.insertShapeFlag) {
      console.log("DEBUG_IT:ON_CLICK_MENU:event.Id:", event.Id);
      if (event.Id != "SymbolFactoryPlus") {
        if (event.text == "FreeHand") {
          this.toggleFreehandMode();
        }
        this.event = event;
        this.menuType = menuType;
        this.insertShapeFlag = true;
        this.pendingShapeType = this.event.text;
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
        case 'Bar':
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
        case 'List':
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
        case 'Arrow':
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
    console.log("POST_QUERY:formGroup:", formGroup)
let whereClause = "APPLICATION_ID =" + formGroup.APPLICATION_ID;
let body = [
    {
        "_QUERY": "GET_SCD_OPCUA_SERVER_QUERY",
        "_WHERE": whereClause
    }
];

let data = await this.starServices.execSQLBody(this, body, "");
if (this.paramConfig.DEBUG_FLAG) console.log("POST_QUERY:data[0].data:", data[0].data);
if (typeof data[0].data != "undefined") {
    let opcuaServers = data[0].data;
    for (let i = 0; i < opcuaServers.length; i++) {
        if (this.paramConfig.DEBUG_FLAG) console.log("POST_QUERY:opcuaServers:", opcuaServers);
        let result: any = await this.addNewServer(opcuaServers[i].SERVER_NAME, opcuaServers[i].ENDPOINT_URL)
        console.log("server added: ", opcuaServers[i].OPCUA_SERVER_ID, result)
        if (typeof result != "undefined") {
            this.serversMapp[opcuaServers[i].OPCUA_SERVER_ID] = result.id;
        }

        this.serversMappReversed = {};
        for (const key in this.serversMapp) {
            if (this.serversMapp.hasOwnProperty(key)) {
                this.serversMappReversed[this.serversMapp[key]] = Number(key);
            }
            console.log("server added: ", this.serversMapp, this.serversMappReversed);
        }
    }
    setTimeout(() => {
          this.getTagsAlarams();
        }, 100);

}

    
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
    // ------------------------------------------------------------
// Resize the ENTIRE rendered visual if Kendo supplied
// targetWidth / targetHeight.
//
// The definition itself remains at its natural/original size.
// We scale the Drawing Group only.
// ------------------------------------------------------------

if (
  targetWidth !== undefined &&
  targetHeight !== undefined &&
  targetWidth > 0 &&
  targetHeight > 0
) {
  const drawingGroup: any = group.drawingElement;

  if (drawingGroup) {
    const naturalBounds = drawingGroup.bbox();

    if (
      naturalBounds &&
      naturalBounds.size &&
      naturalBounds.origin &&
      naturalBounds.size.width > 0 &&
      naturalBounds.size.height > 0
    ) {
      const naturalWidth = naturalBounds.size.width;
      const naturalHeight = naturalBounds.size.height;

      const naturalX = naturalBounds.origin.x;
      const naturalY = naturalBounds.origin.y;

      const scaleX = targetWidth / naturalWidth;
      const scaleY = targetHeight / naturalHeight;

      const transform = geometry
        .transform()
        .translate(
          -naturalX,
          -naturalY
        )
        .scale(
          scaleX,
          scaleY,
          [0, 0]
        );

      drawingGroup.transform(transform);
    }
  }
}

    return group;
  }
  // Visual template that uses the diagram definition
public visualTemplate = (options: any): Group => {
  const dataItem =
    options?.dataItem?.dataItem ??
    options?.dataItem;

  if (!dataItem) {
    return new Group();
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

    const shapeWidth =
      options?.width ??
      dataItem.width ??
      undefined;

    const shapeHeight =
      options?.height ??
      dataItem.height ??
      undefined;

    group = this.drawDiagramFromDefinition(
      dataItem.definition,
      dataItem.offsetX || 0,
      dataItem.offsetY || 0,
      dataItem.editorStyle,
      shapeWidth,
      shapeHeight
    );

  } else {

    return new Group();
  }

  this.applyDrawingTransform(
    group,
    dataItem.editorStyle
  );

  return group;
};
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
      const bboxWidth = bbox?.size?.width;
      const bboxHeight = bbox?.size?.height;

      if (drawingElement?.transform && bbox) {
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
    if (drawingGroup?.transform && bounds?.origin && bounds?.size) {
      const center = [
        bounds.origin.x + bounds.size.width / 2,
        bounds.origin.y + bounds.size.height / 2
      ];
      drawingGroup.transform(
        geometry.transform().scale(flipX, flipY, center)
      );
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
async getTagsAlarams(){
  console.log("getTagsAlarams:entering:", this.expData)
  const tags = await this.scadaIntegration.browseTags();   // all servers
  console.log("getTagsAlarams:tags:",tags.length,  tags)        
  const tagsDefinition = tags.filter(item => item.namespace === 3 && item.node_class == "Variable");
  console.log("getTagsAlarams:tagsDefinition:",tagsDefinition.length, JSON.stringify( tagsDefinition)        )

  //const localTags = await this.scadaIntegration.browseTags(1);         // server id 1
  //console.log("getTagsAlarams:localTags:",localTags)
  
  //const deepTags  = await this.scadaIntegration.browseTags(1, 'ns=3;i=1000', 8);
  //console.log("getTagsAlarams:deepTags:",deepTags)
  //"Browse server with ID 1, starting from node ns=3;i=1000, descending up to 8 levels deep."

  const { success, alarms } = await this.scadaIntegration.refreshAlarms();
  console.log("getTagsAlarams:success:",success)
  console.log("getTagsAlarams:success:",alarms)

}
public isDiagramInitializing = true;
public expData =[];
////
async  prepareShapes(){

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
  if (this.paramConfig.DEBUG_FLAG) console.log("prepareShapes:shapesIDs:", shapesIDs);
  //removeUnusedShapes
  let statement_TEXT_GENERAL = "DELETE from SCD_TEXT_GENERAL where shape_id  in "
                  + "(SELECT  shape_id from scd_shape where shape_id not in (" 
                  + shapesIDs + ") and DISPLAY_ID = " + this.form.value.DISPLAY_ID + ")";
  let statement_SHAPE_DISPLAY_GENERAL = "DELETE from SCD_SHAPE_DISPLAY_GENERAL where shape_id  in "
                  + "(SELECT  shape_id from scd_shape where shape_id not in (" 
                  + shapesIDs + ") and DISPLAY_ID = " + this.form.value.DISPLAY_ID + ")";
  let statement_SCD_SHAPE_INPUT_GENERAL = "DELETE from SCD_SHAPE_INPUT_GENERAL where shape_id  in "
                  + "(SELECT  shape_id from scd_shape where shape_id not in (" 
                  + shapesIDs + ") and DISPLAY_ID = " + this.form.value.DISPLAY_ID + ")";
  let statement_SCD_SHAPE_INPUT_APPEARANCE = "DELETE from SCD_SHAPE_INPUT_APPEARANCE where shape_id  in "
                  + "(SELECT  shape_id from scd_shape where shape_id not in (" 
                  + shapesIDs + ") and DISPLAY_ID = " + this.form.value.DISPLAY_ID + ")";   
  let statement_SCD_SHAPE_CONNECTION = "DELETE from SCD_SHAPE_CONNECTION where shape_id  in "
                  + "(SELECT  shape_id from scd_shape where shape_id not in (" 
                  + shapesIDs + ") and DISPLAY_ID = " + this.form.value.DISPLAY_ID + ")";  
  let statement_SCD_SHAPE_GENERAL = "DELETE from SCD_SHAPE_GENERAL where shape_id  in "
                  + "(SELECT  shape_id from scd_shape where shape_id not in (" 
                  + shapesIDs + ") and DISPLAY_ID = " + this.form.value.DISPLAY_ID + ")";
  let statement_SCD_BUTTON_GENERAL = "DELETE from SCD_BUTTON_GENERAL where shape_id  in "
                  + "(SELECT  shape_id from scd_shape where shape_id not in (" 
                  + shapesIDs + ") and DISPLAY_ID = " + this.form.value.DISPLAY_ID + ")";   
  let statement_SCD_BUTTON_ACTION = "DELETE from SCD_BUTTON_ACTION where shape_id  in "
                  + "(SELECT  shape_id from scd_shape where shape_id not in (" 
                  + shapesIDs + ") and DISPLAY_ID = " + this.form.value.DISPLAY_ID + ")";     
  let statement_SCD_BUTTON_APPEARANCE = "DELETE from SCD_BUTTON_APPEARANCE where shape_id  in "
                  + "(SELECT  shape_id from scd_shape where shape_id not in (" 
                  + shapesIDs + ") and DISPLAY_ID = " + this.form.value.DISPLAY_ID + ")";
  let statement_SCD_BUTTON_PUSH_GENERAL = "DELETE from SCD_BUTTON_PUSH_GENERAL where shape_id  in "
                  + "(SELECT  shape_id from scd_shape where shape_id not in (" 
                  + shapesIDs + ") and DISPLAY_ID = " + this.form.value.DISPLAY_ID + ")";    
  let statement_SCD_SHAPE_STATE = "DELETE from SCD_SHAPE_STATE where shape_id  in "
                  + "(SELECT  shape_id from scd_shape where shape_id not in (" 
                  + shapesIDs + ") and DISPLAY_ID = " + this.form.value.DISPLAY_ID + ")";                                                                                                    
  let statement_SCD_ARROW_BUTTON_TIMING = "DELETE from SCD_ARROW_BUTTON_TIMING where shape_id  in "
                  + "(SELECT  shape_id from scd_shape where shape_id not in (" 
                  + shapesIDs + ") and DISPLAY_ID = " + this.form.value.DISPLAY_ID + ")";    
  let statement_SCD_MESSAGE_GENERAL = "DELETE from SCD_MESSAGE_GENERAL where shape_id  in "
                  + "(SELECT  shape_id from scd_shape where shape_id not in (" 
                  + shapesIDs + ") and DISPLAY_ID = " + this.form.value.DISPLAY_ID + ")";     
  let statement_SCD_TEXT_GENERAL = "DELETE from SCD_TEXT_GENERAL where shape_id  in "
                  + "(SELECT  shape_id from scd_shape where shape_id not in (" 
                  + shapesIDs + ") and DISPLAY_ID = " + this.form.value.DISPLAY_ID + ")";   
  let statement_SCD_GRAPH_GENERAL = "DELETE from SCD_GRAPH_GENERAL where shape_id  in "
                  + "(SELECT  shape_id from scd_shape where shape_id not in (" 
                  + shapesIDs + ") and DISPLAY_ID = " + this.form.value.DISPLAY_ID + ")";  
  let statement_SCD_MULTISTATE_INDICATOR_GENERAL = "DELETE from SCD_MULTISTATE_INDICATOR_GENERAL where shape_id  in "
                  + "(SELECT  shape_id from scd_shape where shape_id not in (" 
                  + shapesIDs + ") and DISPLAY_ID = " + this.form.value.DISPLAY_ID + ")"; 
  let statement_SCD_LIST_INDICATOR_GENERAL = "DELETE from SCD_LIST_INDICATOR_GENERAL where shape_id  in "
                  + "(SELECT  shape_id from scd_shape where shape_id not in (" 
                  + shapesIDs + ") and DISPLAY_ID = " + this.form.value.DISPLAY_ID + ")"; 
  let statement_SCD_LIST_INDICATOR_STATE = "DELETE from SCD_LIST_INDICATOR_STATE where shape_id  in "
                  + "(SELECT  shape_id from scd_shape where shape_id not in (" 
                  + shapesIDs + ") and DISPLAY_ID = " + this.form.value.DISPLAY_ID + ")";   
  let statement_SCD_ARROW_BUTTON_GENERAL = "DELETE from SCD_ARROW_BUTTON_GENERAL where shape_id  in "
                  + "(SELECT  shape_id from scd_shape where shape_id not in (" 
                  + shapesIDs + ") and DISPLAY_ID = " + this.form.value.DISPLAY_ID + ")";
  let statement_SCD_ARROW_BUTTON_LABEL = "DELETE from SCD_ARROW_BUTTON_LABEL where shape_id  in "
                  + "(SELECT  shape_id from scd_shape where shape_id not in (" 
                  + shapesIDs + ") and DISPLAY_ID = " + this.form.value.DISPLAY_ID + ")";
  let statement_SCD_ARROW_BUTTON_TIMINGE = "DELETE from SCD_ARROW_BUTTON_TIMING where shape_id  in "
                  + "(SELECT  shape_id from scd_shape where shape_id not in (" 
                  + shapesIDs + ") and DISPLAY_ID = " + this.form.value.DISPLAY_ID + ")";                                                                                                                                    
                
  let body_defs = [
     {
        "_QUERY": "EXECSQL",
        "_STMT": statement_TEXT_GENERAL
      },
           {
        "_QUERY": "EXECSQL",
        "_STMT": statement_SHAPE_DISPLAY_GENERAL
      },
           {
        "_QUERY": "EXECSQL",
        "_STMT": statement_SCD_SHAPE_INPUT_GENERAL
      },
           {
        "_QUERY": "EXECSQL",
        "_STMT": statement_SCD_SHAPE_INPUT_APPEARANCE
      },
           {
        "_QUERY": "EXECSQL",
        "_STMT": statement_SCD_SHAPE_CONNECTION
      },
           {
        "_QUERY": "EXECSQL",
        "_STMT": statement_SCD_SHAPE_GENERAL
      },
           {
        "_QUERY": "EXECSQL",
        "_STMT": statement_SCD_BUTTON_GENERAL
      },
           {
        "_QUERY": "EXECSQL",
        "_STMT": statement_SCD_BUTTON_ACTION
      },
           {
        "_QUERY": "EXECSQL",
        "_STMT": statement_SCD_BUTTON_APPEARANCE
      },
           {
        "_QUERY": "EXECSQL",
        "_STMT": statement_SCD_BUTTON_PUSH_GENERAL
      },
           {
        "_QUERY": "EXECSQL",
        "_STMT": statement_SCD_SHAPE_STATE
      },
           {
        "_QUERY": "EXECSQL",
        "_STMT": statement_SCD_ARROW_BUTTON_TIMING
      },
           {
        "_QUERY": "EXECSQL",
        "_STMT": statement_SCD_MESSAGE_GENERAL
      },
           {
        "_QUERY": "EXECSQL",
        "_STMT": statement_SCD_TEXT_GENERAL
      },
           {
        "_QUERY": "EXECSQL",
        "_STMT": statement_SCD_GRAPH_GENERAL
      },
           {
        "_QUERY": "EXECSQL",
        "_STMT": statement_SCD_MULTISTATE_INDICATOR_GENERAL
      },
           {
        "_QUERY": "EXECSQL",
        "_STMT": statement_SCD_LIST_INDICATOR_GENERAL
      },
           {
        "_QUERY": "EXECSQL",
        "_STMT": statement_SCD_LIST_INDICATOR_STATE
      },
           {
        "_QUERY": "EXECSQL",
        "_STMT": statement_SCD_ARROW_BUTTON_GENERAL
      },
           {
        "_QUERY": "EXECSQL",
        "_STMT": statement_SCD_ARROW_BUTTON_LABEL
      },
           {
        "_QUERY": "EXECSQL",
        "_STMT": statement_SCD_ARROW_BUTTON_TIMINGE
      }

    ];
  if (this.paramConfig.DEBUG_FLAG) console.log("prepareShapes_defs:body_defs:", body_defs);
  let data_defs = await this.starServices.execSQLBody(this, body_defs, "");

  let statement = "DELETE from scd_shape where shape_id not in (" + shapesIDs + ") and DISPLAY_ID = " + this.form.value.DISPLAY_ID;
  let whereClause = "DISPLAY_ID =" + this.form.value.DISPLAY_ID;
  let statement_expressions = "SELECT A.SHAPE_ID, B.EXPRESSION_DATA , A.SHAPE_TYPE "
                              +"    FROM SCD_SHAPE A, SCD_SHAPE_DISPLAY_GENERAL B "
                              +"    WHERE A.SHAPE_ID = B.SHAPE_ID "
                              +"    AND A.DISPLAY_ID = " + this.form.value.DISPLAY_ID
                              +"    AND (B.EXPRESSION_DATA != '' or B.EXPRESSION_DATA is not null) ";

    let body = [
      {
        "_QUERY": "EXECSQL",
        "_STMT": statement
      },
      {
      "_QUERY": "GET_SCD_SHAPE_QUERY",
      "_WHERE": whereClause
      },
      {
        "_QUERY": "EXECSQL",
        "_STMT": statement_expressions
      },
    ];
    if (this.paramConfig.DEBUG_FLAG) console.log("prepareShapes:body:", body);
    let data = await this.starServices.execSQLBody(this, body, "");
    if (this.paramConfig.DEBUG_FLAG) console.log("prepareShapes:data[1].data:", data[1].data);
    if (typeof data[1].data != "undefined"){
      this.scdShapes = data[1].data;
    } 
    if (typeof data[2].data != "undefined"){
      let expData = data[2].data;
      if (this.paramConfig.DEBUG_FLAG) console.log("prepareShapes:expData:", JSON.stringify(expData));
      
      if (this.paramConfig.DEBUG_FLAG) console.log("prepareShapes:expData:", expData.length, expData, JSON.stringify(expData));
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
        if (this.paramConfig.DEBUG_FLAG) console.log("prepareShapes:loaded:", loaded);
        expData[i]['loaded'] = loaded;
        expData[i]['tagNames'] = tagNames;
        expData[i]['tagNamesScada'] = tagNamesScada;
      }
      if (this.paramConfig.DEBUG_FLAG) console.log("prepareShapes:expData:", expData);
      //this.expData = formatData(expData);
      this.expData = expData;
      
      if (this.paramConfig.DEBUG_FLAG) console.log("prepareShapes:this.expData:", this.expData);
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
    this.prepareShapes();
    
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
  public isEditMode: boolean = false;
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
    this.lastClickX = event.offsetX || event.layerX || 0;
    this.lastClickY = event.offsetY || event.layerY || 0;
    if (this.event.text != "FreeHand") {
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
        || (shapeType == "Bar") || (shapeType == "Gauge")|| (shapeType == "Scale")
        || (shapeType == "Multiple") || (shapeType == "List") 
        || (shapeType == "Backspace")  || (shapeType == "End")  || (shapeType == "Enter") 
        || (shapeType == "Move Left")  || (shapeType == "Move Right")  || (shapeType == "Move Down") 
        || (shapeType == "Move Up")  || (shapeType == "Page Up")  || (shapeType == "Page Down") 
         )
          options = {
            width: 180,
            height: 24,
            text: "",
            fillColor: "transparent",
            x: this.lastClickX,
            y: this.lastClickY,
          };
        if ((shapeType == "Button") || (shapeType == "Momentry") 
          || (shapeType == "Maintained")  || (shapeType == "Latched") || (shapeType == "Multistate")  
          || (shapeType == "Interlocked") || (shapeType == "Ramp Button") || (shapeType == "Navigation Button") 
          || (shapeType == "Time and Date Display") || (shapeType == "Tag Label") || (shapeType == "Local Message") 
          || (shapeType == "Text") || (shapeType == "Text")  || (shapeType == "Bar") || (shapeType == "Gauge") 
          || (shapeType == "Scale") || (shapeType == "Multiple") || (shapeType == "List") 
          || (shapeType == "Backspace")  || (shapeType == "End")  || (shapeType == "Enter") 
          || (shapeType == "Move Left")  || (shapeType == "Move Right")  || (shapeType == "Move Down") 
          || (shapeType == "Move Up")  || (shapeType == "Page Up")  || (shapeType == "Page Down") 
        ) {
          options.fillColor = "#D3D3D3"
        }

        this.insertShape(shapeType, options);
        this.insertShapeFlag = false;

        setTimeout(() => {
          //this.ON_CLICK_CONTEXT_MENU(this.menuType,this.event);
        }, 500);
      }
    }
    let target = event.target.outerHTML;
    if (target.startsWith("<svg")) {
      console.log("Clicked on empty space");
      //this.currentShapeId = "";
      this.currentShapeType = "";
      // this.showContextMenuAt(event.pageX, event.pageY, null);
    }
    console.log(`📍 checking:Click: (${this.lastClickX}, ${this.lastClickY})`);

    // 🔑 Clear any existing timer
    if (this.clickTimer) {
      clearTimeout(this.clickTimer);
      this.clickTimer = null;
    }

    // 🔑 Set a timer to detect part on already-selected shapes
    this.clickTimer = setTimeout(() => {
      this.detectPartAtClick(this.lastClickX, this.lastClickY, event);
      this.clickTimer = null;
    }, 100);

    this.ON_CLICK(event);
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

  public toggleMode(): void {
  this.isEditMode = !this.isEditMode;
  
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
public add_new_shape(kendoui_content, type) {
    let newShape = {
      "id": "boilerA",
      "x": 80,                    //this.lastClickX
      "y": 80,                    //this.lastClickY
      //"width": 400,                 //copy from data
      //"height": 420,                //copy from data
      "dataItem": {
        "type": "boiler",           //copy from type
        "definition": {
          "shapeDefaults": {        //copy from data
            "visual": null,
            "fill": "#f0f4f8",
            "stroke": {
              "color": "#333333",
              "width": 1
            }
          },
          "connectionDefaults": {   //copy from data
            "stroke": {
              "color": "#555",
              "width": 2
            }
          },
          "layout": {               //copy from data
            "type": "layered",
            "subtype": "vertical"
          },
          "shapes": [               //copy from data

          ],
          "lines": [                //copy from data

          ]
        },
        "title": "Boiler A (Primary)"   //copy from type
      }
    }

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
    newShape.dataItem.title = type;//Fuad kendoui_content.name;
    newShape.dataItem.type = type;
    //newShape.width = kendoui_content.width;
    //newShape.height = kendoui_content.height;
    // const diagramX = kendoui_content.diagramX;
    // const diagramY = kendoui_content.diagramY;

    newShape.x = this.lastClickX;
    newShape.y = this.lastClickY;
    
    console.log("kendoui_content:newShape:", newShape);
    const options: ShapeOptions = {
      id: newShape.id,
      x: this.lastClickX,
      y: this.lastClickY,
      //width: newShape.width,
      //height: newShape.height,
      dataItem: newShape.dataItem,
      visual: (args) => {
        return this.drawDiagramFromDefinition(
          args.dataItem.definition
        );
      }
    };
    this.diagram.addShape(options);    //Store to screen diagram
    this.shapes.push(newShape);                 //Store to my memory
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
  public dialogProperties = [{"Id":"","Component":"","Width":"","Height":"","Maximize":""},{"Id":"33","Component":"All_Alarms","Width":"700","Height":"700","Maximize":null},{"Id":"17","Component":"Arrow_Button_Properties","Width":"700","Height":"700","Maximize":""},{"Id":"34","Component":"Arrow_Button_Timing","Width":"700","Height":"800","Maximize":null},{"Id":"19","Component":"Arrow_Properties","Width":"700","Height":"700","Maximize":""},{"Id":"18","Component":"Arrow_Timing_Properties","Width":"700","Height":"800","Maximize":""},{"Id":"14","Component":"Bar_Graph_Properties","Width":"800","Height":"800","Maximize":""},{"Id":"24","Component":"Browser_Properties","Width":"700","Height":"500","Maximize":""},{"Id":"4","Component":"Button_Properties","Width":"800","Height":"800","Maximize":""},{"Id":"20","Component":"Control_List_Selector_Properties","Width":"700","Height":"700","Maximize":""},{"Id":"30","Component":"Display_Keys_Screen","Width":"700","Height":"700","Maximize":null},{"Id":"21","Component":"Display_List_Selector_Properties","Width":"700","Height":"700","Maximize":""},{"Id":"28","Component":"Display_Settings_Screen","Width":"700","Height":"700","Maximize":""},{"Id":"15","Component":"Gauge_Properties","Width":"700","Height":"700","Maximize":""},{"Id":"32","Component":"Grid_Properties_Settings","Width":"500","Height":"350","Maximize":null},{"Id":"31","Component":"Javascript_Code_Screen","Width":"700","Height":"700","Maximize":null},{"Id":"12","Component":"List_Indicator_Properties","Width":"800","Height":"800","Maximize":""},{"Id":"13","Component":"List_Indicator_States_Properties","Width":"800","Height":"800","Maximize":""},{"Id":"37","Component":"Local_Message_Properties","Width":"700","Height":"800","Maximize":null},{"Id":"22","Component":"Message_Date_Properties","Width":"800","Height":"800","Maximize":""},{"Id":"9","Component":"Multistate_Indicator_Properties","Width":"800","Height":"800","Maximize":""},{"Id":"35","Component":"Navigation_Button_Properties","Width":"700","Height":"800","Maximize":null},{"Id":"5","Component":"Numeric_Display_Properties","Width":"1000","Height":"700","Maximize":""},{"Id":"27","Component":"Numeric_Input_Properties","Width":"800","Height":"800","Maximize":""},{"Id":"25","Component":"Piloted_List_Selector_Properties","Width":"700","Height":"700","Maximize":""},{"Id":"1","Component":"Push_Button_Properties","Width":"1000","Height":"800","Maximize":""},{"Id":"36","Component":"Ramp_Button_Timing","Width":"700","Height":"800","Maximize":null},{"Id":"16","Component":"Scale_Properties","Width":"700","Height":"800","Maximize":""},{"Id":"3","Component":"Shape_Properties","Width":"700","Height":"500","Maximize":""},{"Id":"7","Component":"String_Display_Properties","Width":"700","Height":"800","Maximize":""},{"Id":"8","Component":"String_Input_Properties","Width":"700","Height":"800","Maximize":""},{"Id":"11","Component":"Symbol_Properties","Width":"700","Height":"800","Maximize":""},{"Id":"10","Component":"Symbol_States_Properties","Width":"700","Height":"800","Maximize":""},{"Id":"29","Component":"SymbolFactoryPlus","Width":"700","Height":"800","Maximize":"Y"},{"Id":"23","Component":"Tag_Label_Properties","Width":"700","Height":"800","Maximize":""},{"Id":"2","Component":"Text_Properties","Width":"900","Height":"900","Maximize":""}]
  dialog_getComponentToRender(shapeType: string,Maximize): any {
    this.winState = null;
    if (Maximize == 'Y'){
      this.winState = "maximized";
    }

    	switch (shapeType) {
		case '33': 
		return ScdAllAlarmsComponent; 
		case '17': 
		return ScdArrowButtonPropertiesComponent; 
		case '34': 
		return ScdArrowButtonTimingComponent; 
		case '19': 
		return ScdArrowPropertiesComponent; 
		case '18': 
		return ScdArrowTimingPropertiesComponent; 
		case '14': 
		return ScdBarGraphPropertiesComponent; 
		case '24': 
		return ScdBrowserPropertiesComponent; 
		case '4': 
		return ScdButtonPropertiesComponent; 
		case '20': 
		return ScdControlListSelectorPropertiesComponent; 
		case '30': 
		return ScdDisplayKeysScreenComponent; 
		case '21': 
		return ScdDisplayListSelectorPropertiesComponent; 
		case '28': 
		return ScdDisplaySettingsScreenComponent; 
		case '15': 
		return ScdGaugePropertiesComponent; 
		case '32': 
		return ScdGridPropertiesSettingsComponent; 
		case '31': 
		return ScdJavascriptCodeScreenComponent; 
		case '12': 
		return ScdListIndicatorPropertiesComponent; 
		case '13': 
		return ScdListIndicatorStatesPropertiesComponent; 
		case '37': 
		return ScdLocalMessagePropertiesComponent; 
		case '22': 
		return ScdMessageDatePropertiesComponent; 
		case '9': 
		return ScdMultistateIndicatorPropertiesComponent; 
		case '35': 
		return ScdNavigationButtonPropertiesComponent; 
		case '5': 
		return ScdNumericDisplayPropertiesComponent; 
		case '27': 
		return ScdNumericInputPropertiesComponent; 
		case '25': 
		return ScdPilotedListSelectorPropertiesComponent; 
		case '1': 
		return ScdPushButtonPropertiesComponent; 
		case '36': 
		return ScdRampButtonTimingComponent; 
		case '16': 
		return ScdScalePropertiesComponent; 
		case '3': 
		return ScdShapePropertiesComponent; 
		case '7': 
		return ScdStringDisplayPropertiesComponent; 
		case '8': 
		return ScdStringInputPropertiesComponent; 
		case '11': 
		return ScdSymbolPropertiesComponent; 
		case '10': 
		return ScdSymbolStatesPropertiesComponent; 
		case '29': 
		return ScdSymbolfactoryplusComponent; 
		case '23': 
		return ScdTagLabelPropertiesComponent; 
		case '2': 
		return ScdTextPropertiesComponent; 
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
  if (typeof shapeType !="undefined"){
    shapeType = shapeType.toLowerCase();
  }
  
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
    state: Maximize === 'Y' ? 'maximized' : 'default'
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
  console.log('closePropertyDialog: Closing property dialog');
  
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
    switch (shapeType) {
      case 'Numeric Display':
        tables.push('INSERT_SCD_SHAPE_DISPLAY_GENERAL');
        break;
      case 'String Display':
        tables.push('INSERT_SCD_SHAPE_DISPLAY_GENERAL');
        break;
      case 'Time and Date Display':
        tables.push('INSERT_SCD_MESSAGE_GENERAL');
        break;
      case 'Tag Label':
        tables.push('INSERT_SCD_TAG_LABEL_GENERAL');
        break;
      case 'Local Message':
        tables.push('INSERT_SCD_MESSAGE_GENERAL');
        tables.push('INSERT_SCD_SHAPE_CONNECTION');
        break;
      case 'Text':
        tables.push('INSERT_SCD_TEXT_GENERAL');
        break;
      case 'Numeric Input':
        tables.push('INSERT_SCD_SHAPE_INPUT_GENERAL');
        tables.push('INSERT_SCD_SHAPE_INPUT_APPEARANCE');
        tables.push('INSERT_SCD_SHAPE_CONNECTION');
        break;
      case 'String Input':
        tables.push('INSERT_SCD_SHAPE_INPUT_GENERAL');
        tables.push('INSERT_SCD_SHAPE_INPUT_APPEARANCE');
        break;
      case 'Bar':
        tables.push('INSERT_SCD_GRAPH_GENERAL');
        tables.push('INSERT_SCD_SHAPE_CONNECTION');
        break;
      case 'Scale':
        tables.push('INSERT_SCD_GRAPH_GENERAL');
        break;
      case 'Gauge':
        tables.push('INSERT_SCD_GRAPH_GENERAL');
        tables.push('INSERT_SCD_GAUGE_DISPLAY');
        tables.push('INSERT_SCD_SHAPE_CONNECTION');
        break; 
      case 'Multiple':
        tables.push('INSERT_SCD_MULTISTATE_INDICATOR_GENERAL');
        tables.push('INSERT_SCD_SHAPE_STATE');
        tables.push('INSERT_SCD_SHAPE_STATE');
        tables.push('INSERT_SCD_SHAPE_STATE');
        tables.push('INSERT_SCD_SHAPE_STATE');
        tables.push('INSERT_SCD_SHAPE_CONNECTION');
        break; 
      case 'List':
        tables.push('INSERT_SCD_LIST_INDICATOR_GENERAL');
        tables.push('INSERT_SCD_LIST_INDICATOR_STATE');
        tables.push('INSERT_SCD_LIST_INDICATOR_STATE');
        tables.push('INSERT_SCD_LIST_INDICATOR_STATE');
        tables.push('INSERT_SCD_LIST_INDICATOR_STATE');
        tables.push('INSERT_SCD_SHAPE_CONNECTION');
        break;
      case 'Backspace':
      case 'End':
      case 'Enter':
        tables.push('INSERT_SCD_ARROW_BUTTON_GENERAL');
        tables.push('INSERT_SCD_ARROW_BUTTON_LABEL');
        break; 
      case 'Move Left':
      case 'Move Right':
      case 'Move Down':
      case 'Move Up':
      case 'Page Up':
      case 'Page Down':
        tables.push('INSERT_SCD_BUTTON_PUSH_GENERAL');
        tables.push('INSERT_SCD_ARROW_BUTTON_LABEL');
        tables.push('INSERT_SCD_ARROW_BUTTON_TIMING');
        break; 
      case 'Momentry':
      case 'Maintained':
      case 'Latched':
        tables.push('INSERT_SCD_BUTTON_PUSH_GENERAL');
        tables.push('INSERT_SCD_SHAPE_CONNECTION');
        tables.push('INSERT_SCD_SHAPE_STATE');
        tables.push('INSERT_SCD_SHAPE_STATE');
        tables.push('INSERT_SCD_SHAPE_STATE');
        break;
      case 'Interlocked':
        tables.push('INSERT_SCD_BUTTON_PUSH_GENERAL');
        tables.push('INSERT_SCD_SHAPE_CONNECTION');
        tables.push('INSERT_SCD_SHAPE_STATE');
        tables.push('INSERT_SCD_SHAPE_STATE');
        break;
      case 'Multistate':
        tables.push('INSERT_SCD_BUTTON_PUSH_GENERAL');
        tables.push('INSERT_SCD_SHAPE_CONNECTION');
        tables.push('INSERT_SCD_ARROW_BUTTON_TIMING');
        tables.push('INSERT_SCD_SHAPE_STATE');
        tables.push('INSERT_SCD_SHAPE_STATE');
        tables.push('INSERT_SCD_SHAPE_STATE');
        break;
      case 'Ramp Button':
        tables.push('INSERT_SCD_BUTTON_PUSH_GENERAL');
        tables.push('INSERT_SCD_SHAPE_CONNECTION');
        tables.push('INSERT_SCD_ARROW_BUTTON_TIMING');
        tables.push('INSERT_SCD_SHAPE_STATE');
        break;
      case 'Navigation Button':
        tables.push('INSERT_SCD_BUTTON_PUSH_GENERAL');
        tables.push('INSERT_SCD_SHAPE_STATE');
        tables.push('INSERT_SCD_SHAPE_STATE');
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
      case 'Arrow':
        tables.push('INSERT_SCD_SHAPE_GENERAL');
        break;
      case 'Button':
        tables.push('INSERT_SCD_BUTTON_GENERAL');
        tables.push('INSERT_SCD_BUTTON_ACTION');
        tables.push('INSERT_SCD_BUTTON_APPEARANCE');
        tables.push('INSERT_SCD_BUTTON_APPEARANCE');
        tables.push('INSERT_SCD_BUTTON_APPEARANCE');
        break;
      default:
        break;
    }
    console.log("insertSCDShapeTables:tables:", shapeType, tables)
    let butApp = 0;
    if (tables.length > 0) {
      for (let i = 0; i < tables.length; i++) {
        let useshapeType = null;
        if (tables[i] == "INSERT_SCD_SHAPE_CONNECTION") {
          useshapeType = shapeType;
          if ((shapeType == "Maintained") || (shapeType == "Multistate"))
            useshapeType = "Momentry";
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
                || (shapeType == "List") 
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
            let data = await this.starServices.execSQLBody(this, body, "");
            if (this.paramConfig.DEBUG_FLAG) console.log("insertSCDShapeTables:", data);
          }
        }
      }
    }
  }


public menuType;
public event;
public insertShapeFlag = false;
async insertSCDShape(kendoui_content, shapeType){
      const diagramX =
        (this.lastClickX - this.currentPan.x) / this.zoomLevel;
      const diagramY =
        (this.lastClickY - this.currentPan.y) / this.zoomLevel;
      kendoui_content[diagramX] = diagramX;
      kendoui_content[diagramY] = diagramY;
      let body = [
        {
          "_QUERY": "INSERT_SCD_SHAPE",
          "DISPLAY_ID": this.form.value.DISPLAY_ID,
          "SHAPE_TYPE": shapeType,
          "HEIGHT": 100,
          "WIDTH": 100,
          "TOP": diagramY,
          "LEFT": diagramX,
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
        if (this.paramConfig.DEBUG_FLAG) console.log("INSERT_SCD_SHAPE:kendoui_content.id:", kendoui_content.id);
      }
      return kendoui_content;
}
async insertShape(shapeType, options) {
    let kendoui_content: any = {
      id: shapeType
    }
    kendoui_content = await this.insertSCDShape(kendoui_content, shapeType)
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
    console.log("kind:",kind,"shapeType:", shapeType, "options:", options);
    this.addLibraryShape(kind, options, true);
  }

//////////
public statusMessage = "Select a shape to edit it.";
public freehandMode = false;
private freehandPoints: Array<{ x: number; y: number }> = [];
private freehandPointerId: number | null = null;
public freehandPreviewPath = "";
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
private uniqueShapeId(prefix: string): string {
    const safePrefix = String(prefix || "shape").replace(/[^a-zA-Z0-9_-]/g, "") || "shape";
    const existing = new Set((this.shapes as any[]).map(model => String(model?.id ?? "")));
    let index = 1;
    let candidate = safePrefix;
    while (existing.has(candidate)) {
      candidate = `${safePrefix}_${index++}`;
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
      container: "Container"
    };
    return titles[kind] || "Shape";
  }
  
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

  public addEllipse(): void {
    this.addLibraryShape("ellipse", { width: 150, height: 100, fillColor: "#d9e8f5" });
  }

  public addLine(): void {
    this.addLibraryShape("line", { width: 180, height: 24, fillColor: "transparent" });
  }

  public addRectangle(): void {
    this.addLibraryShape("rectangle", { width: 160, height: 100, fillColor: "#d9e8f5" });
  }

  public addRoundedRectangle(): void {
    this.addLibraryShape("roundedRectangle", { width: 190, height: 100, fillColor: "#d9e8f5" });
  }

  public addArc(): void {
    this.addLibraryShape("arc", { width: 170, height: 95, fillColor: "transparent" });
  }

  public addPolygon(): void {
    this.addLibraryShape("polygon", { width: 140, height: 120, fillColor: "#e9defa" });
  }

  public addPolyline(): void {
    this.addLibraryShape("polyline", { width: 180, height: 110, fillColor: "transparent" });
  }
 
  public toggleFreehandMode(): void {
    this.freehandMode = !this.freehandMode;
    this.freehandPoints = [];
    this.freehandPreviewPoints = [];
    this.freehandPreviewPath = "";
    this.freehandPointerId = null;
    if (this.freehandMode) {
      this.diagram?.deselect();
      this.statusMessage = "FreeHand mode ON: drag on the diagram canvas to draw, then release to create the shape.";
    } else {
      this.statusMessage = "FreeHand mode cancelled.";
    }
  }

  public onFreehandPointerDown(event: PointerEvent): void {
    if (!this.freehandMode || !this.diagram) {
      return;
    }
    event.preventDefault();
    event.stopPropagation();
    this.freehandPointerId = event.pointerId;
    const point = this.pointerToModel(event);
    if (!point) {
      return;
    }
    this.freehandPoints = [point];
    const previewPoint = this.pointerToStage(event);
    this.freehandPreviewPoints = previewPoint ? [previewPoint] : [];
    this.updateFreehandPreviewPath();
    (event.currentTarget as HTMLElement | null)?.setPointerCapture?.(event.pointerId);
  }

  public onFreehandPointerMove(event: PointerEvent): void {
    if (!this.freehandMode || this.freehandPointerId !== event.pointerId || !this.freehandPoints.length) {
      return;
    }
    event.preventDefault();
    event.stopPropagation();
    const point = this.pointerToModel(event);
    if (!point) {
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

public onFreehandPointerUp(event: PointerEvent): void {
    if (!this.freehandMode || this.freehandPointerId !== event.pointerId) {
      return;
    }
    event.preventDefault();
    event.stopPropagation();
    (event.currentTarget as HTMLElement | null)?.releasePointerCapture?.(event.pointerId);
    this.freehandPointerId = null;

    if (this.freehandPoints.length < 2) {
      this.freehandMode = false;
      this.freehandPoints = [];
      this.freehandPreviewPoints = [];
      this.freehandPreviewPath = "";
      this.statusMessage = "FreeHand drawing was too short; nothing was added.";
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
    if (this.insertShapeFlag == true){
        let shapeType = this.event.text;
        let options = { x: minX, y: minY, width, height, points, fillColor: "transparent" };
        this.insertShape ( shapeType,options);
        this.insertShapeFlag = false;
        
        
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
    const stroke = style.strokeColor || dataItem.strokeColor || "#2f4858";
    const fill = style.fillColor || dataItem.fillColor || "#d9e8f5";
    const kind = dataItem.libraryKind;

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
     || (kind === "bar") || (kind === "gauge") || (kind === "scale")  || (kind === "multiple")
     || (kind === "list")
     || (kind == "backspace")  || (kind == "end")  || (kind == "enter") 
     || (kind == "moveleft")  || (kind == "moveright")  || (kind == "movedown") 
     || (kind == "moveup")  || (kind == "pageup")  || (kind == "pagedown") 
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

    if ( (kind === "line")||(kind === "arrow") ) {
      // Render Line using the same lightweight Path approach as Arc.
      // The Diagram shape model owns the selectable/resizable bounds; the
      // visible geometry is only the line itself.
      const centerY = y + height / 2;
      group.append(new Path({
        data: `M ${x + 5},${centerY} L ${x + width - 5},${centerY}`,
        stroke: { color: stroke, width: 2 },
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
      group.append(new Path({
        data: `M ${x + 5},${y + height - 5} Q ${x + width / 2},${y - height * 0.15} ${x + width - 5},${y + height - 5}`,
        stroke: { color: stroke, width: 3 },
        fill: { color: "transparent" }
      }));
      return group;
    }

    const points = Array.isArray(dataItem.points) ? dataItem.points : [];
    if (kind === "freehand" && points.length >= 2) {
      const pathData = points.map((point: any, index: number) =>
        `${index === 0 ? "M" : "L"} ${x + Number(point.x)},${y + Number(point.y)}`
      ).join(" ");
      group.append(new Path({
        data: pathData,
        stroke: { color: stroke, width: 3 },
        fill: { color: "transparent" }
      }));
      return group;
    }

    if (kind === "polygon") {
      group.append(new Path({
        data: `M ${x + width / 2},${y} L ${x + width},${y + height * 0.38} L ${x + width * 0.82},${y + height} L ${x + width * 0.18},${y + height} L ${x},${y + height * 0.38} Z`,
        stroke: { color: stroke, width: 2 },
        fill: { color: fill }
      }));
      return group;
    }

    if (kind === "polyline") {
      group.append(new Path({
        data: `M ${x},${y + height * 0.8} L ${x + width * 0.28},${y + height * 0.2} L ${x + width * 0.56},${y + height * 0.72} L ${x + width},${y + height * 0.15}`,
        stroke: { color: stroke, width: 3 },
        fill: { color: "transparent" }
      }));
      return group;
    }

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
    if (runtimeData && typeof runtimeData === "object") {
      runtimeData.width = bounds.width;
      runtimeData.height = bounds.height;
    }
    if (runtimeData?.editorStyle) {
      model.dataItem ??= {};
      const modelData = model.dataItem?.dataItem ?? model.dataItem;
      modelData.editorStyle = this.clonePlain(runtimeData.editorStyle);
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
      restoredRuntime.push(this.diagram.addShape(child, true));
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
            fill: color
          });
          textBlock.options.fontSize = fontSize;
          textBlock.options.fontWeight = bold ? "bold" : "normal";
          textBlock.options.fontStyle = italic ? "italic" : "normal";
          textBlock.options.fontFamily = fontFamily;
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
    const shapes = this.selectedShapes().filter(
      shape => this.shapeDataItem(shape)?.libraryKind === "richText"
    );

    if (!shapes.length) {
      this.statusMessage = "Select a Rich Text shape first.";
      return;
    }

    for (const shape of shapes) {
      const dataItem = this.shapeDataItem(shape);
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
    this.statusMessage = "Rich Text formatting updated.";
  }

  public applySelectedContainerValue(): void {
    this.applySelectedContainerFill({ value: Number(this.selectedContainerValue) });
  }

  public applySelectedContainerMax(): void {
    this.applySelectedContainerFill({ max: Number(this.selectedContainerMax) });
  }

  private applySelectedContainerFill(patch: { value?: number; max?: number }): void {
    const shapes = this.selectedShapes().filter(
      shape => this.shapeDataItem(shape)?.libraryKind === "container"
    );

    if (!shapes.length) {
      this.statusMessage = "Select a Container shape first.";
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
    bar:
      `<rect x="4" y="12" width="4" height="8" fill="#e94560"/><rect x="10" y="8" width="4" height="12" fill="#e94560"/><rect x="16" y="4" width="4" height="16" fill="#e94560"/>`,
    graph:
      `<path d="M3 20 L9 12 L14 16 L21 6" fill="none" stroke="#e94560" stroke-width="2"/>`,
    list:
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
    moveleft:
      `<path d="M20 13 L6 13 M11 8 L5 13 L11 18"
      fill="none" stroke="#e94560" stroke-width="2"
      stroke-linecap="round" stroke-linejoin="round"/>`,
    moveright:
      `<path d="M4 13 L16 13 M12 8 L18 13 L12 18"
      fill="none" stroke="#e94560" stroke-width="2"
      stroke-linecap="round" stroke-linejoin="round"/>`,
    movedown:
      `<path d="M12 4 L12 18 M7 13 L12 19 L17 13"
      fill="none" stroke="#e94560" stroke-width="2"
      stroke-linecap="round" stroke-linejoin="round"/>`,
    moveup:
      `<path d="M12 20 L12 6 M7 11 L12 5 L17 11"
      fill="none" stroke="#e94560" stroke-width="2"
      stroke-linecap="round" stroke-linejoin="round"/>`,
    arrow:
      `<path d="M4 13 L16 13 M12 8 L18 13 L12 18" fill="none" stroke="#e94560" stroke-width="2"/>`,
    pageup:
      `<path d="M7 18 L12 12 L17 18 Z" fill="#e94560" stroke="#e94560" stroke-width="2" stroke-linejoin="round"/>
    <path d="M7 12 L12 6  L17 12 Z" fill="#e94560" stroke="#e94560" stroke-width="2" stroke-linejoin="round"/>`,
    pagedown:
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
    'Push Button': '"pushbutton',
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
    'Bar': 'bar',
    'Graph': 'graph',
    'List': 'list',
    'Multiple': 'multiple',
    'Indicator': 'indicator',
    'Page Up': 'pageup',
    'Page Down': 'pagedown',
    'Move Up': 'moveup',
    'Move Down': 'movedown',
    'Move Right': 'moveright',
    'Move Left': 'moveleft',
    'Enter': 'enter',
    'End': 'end',
    'Backspace': 'backspace',
    //'Navigation': 'navButton',
    //'Arrow': 'arrow',
    'Display': 'display',
    'Piloted': 'piloted',
    'Control': 'button',
    'List Indicator': 'list',
    'String': 'text',
    'Numeric': 'numeric',
    'Time and Date Display': 'timeDateDisplay',
    'Local Message': 'localMessage',
    'Tag Label': 'tagLabel',
    'Banner': 'text',
    'Alarms and Events': 'list',
    'Status Explorer': 'list',
    'Log Viewer': 'list',
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
    if (!this.insertShapeFlag) return 'default';

    const iconKey = this.shapeToIconKey[this.pendingShapeType] ?? 'default';
    const iconSvg = this.cursorIcons[iconKey] ?? this.cursorIcons['default'];

    // 24×24 canvas. Hotspot at (2,2) = top-left area of the icon.
    const svg =
      `<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24">` +
        // small arrow pointer behind the icon
        `<path d="M0 0 L0 10 L3 7 L5 12 L7 11 L5 6 L9 6 Z" fill="black" stroke="white" stroke-width="1"/>` +
        iconSvg +
      `</svg>`;

    // encodeURIComponent keeps the SVG safe inside a CSS url()
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
}

