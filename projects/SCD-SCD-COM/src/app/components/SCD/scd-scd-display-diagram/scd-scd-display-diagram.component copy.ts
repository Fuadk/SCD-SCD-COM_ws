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
  ConnectionOptions,
  DiagramComponent,
} from "@progress/kendo-angular-diagrams";

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
import {ScdArrowButtonPropertiesComponent} from '../scd-arrow-button-properties/scd-arrow-button-properties.component';
import {ScdArrowPropertiesComponent} from '../scd-arrow-properties/scd-arrow-properties.component';
import {ScdArrowTimingPropertiesComponent} from '../scd-arrow-timing-properties/scd-arrow-timing-properties.component';
import {ScdBarGraphPropertiesComponent} from '../scd-bar-graph-properties/scd-bar-graph-properties.component';
import {ScdBrowserPropertiesComponent} from '../scd-browser-properties/scd-browser-properties.component';
import {ScdButtonPropertiesComponent} from '../scd-button-properties/scd-button-properties.component';
import {ScdControlListSelectorPropertiesComponent} from '../scd-control-list-selector-properties/scd-control-list-selector-properties.component';
import {ScdDisplayListSelectorPropertiesComponent} from '../scd-display-list-selector-properties/scd-display-list-selector-properties.component';
import {ScdDisplaySettingsScreenComponent} from '../scd-display-settings-screen/scd-display-settings-screen.component';
import {ScdGaugePropertiesComponent} from '../scd-gauge-properties/scd-gauge-properties.component';
import {ScdListIndicatorPropertiesComponent} from '../scd-list-indicator-properties/scd-list-indicator-properties.component';
import {ScdListIndicatorStatesPropertiesComponent} from '../scd-list-indicator-states-properties/scd-list-indicator-states-properties.component';
import {ScdMessageDatePropertiesComponent} from '../scd-message-date-properties/scd-message-date-properties.component';
import {ScdMultistateIndicatorPropertiesComponent} from '../scd-multistate-indicator-properties/scd-multistate-indicator-properties.component';
import {ScdNumericDisplayPropertiesComponent} from '../scd-numeric-display-properties/scd-numeric-display-properties.component';
import {ScdNumericInputPropertiesComponent} from '../scd-numeric-input-properties/scd-numeric-input-properties.component';
import {ScdPilotedListSelectorPropertiesComponent} from '../scd-piloted-list-selector-properties/scd-piloted-list-selector-properties.component';
import {ScdPushButtonPropertiesComponent} from '../scd-push-button-properties/scd-push-button-properties.component';
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
@Component({
  selector: 'app-scd-scd-display-diagram',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './scd-scd-display-diagram.component.html',
  styleUrls: ['./scd-scd-display-diagram.component.scss'],
  standalone: false
})


export class ScdDisplayScdScdDisplayDiagramDiagramComponent implements AfterViewInit, OnDestroy {
  @ViewChild('diagram')    diagramComponent!: DiagramComponent;
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
    this.componentConfig.eventTo = ['any'];
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
    	if (!this.isChild){
		this.executeQuery(this.form.value);
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
     console.log ("kendoui_content:1:",this.starServices.sessionParams['COPIED_SHAPE']);

if ( typeof this.starServices.sessionParams['COPIED_SHAPE'] != "undefined"
     && this.starServices.sessionParams['COPIED_SHAPE'] != ""){
        let copiedShape =this.starServices.sessionParams['COPIED_SHAPE'];
        let kendoui_content =  JSON.parse(copiedShape.kendoui_content);
        this.starServices.sessionParams['COPIED_SHAPE'] = "";
        console.log ("kendoui_content:2:", formGroup, this.lastClickX, this.lastClickY, kendoui_content);
        kendoui_content.id =  copiedShape.id;
        this.add_new_shape(kendoui_content, copiedShape.type);
       this.updateShapes();
     }

}

 async ON_CLICK_CONTEXT_MENU(menuType,event){
        console.log("ON_CLICK_MENU:", event, menuType)
    let Id = "";
    if (menuType == "DROPDOWN") {
      Id = event.Id;
    }
    else if (menuType == "CONTEXT_MENU") {
      Id = event.item.Id;
      console.log("ON_CLICK_MENU:id:", Id);
    }
    if (Id != "") {
      let rec = this.dialogProperties.find(x => x.Component == Id);
      console.log("ON_CLICK_MENU:rec:", rec)
      if (typeof (rec) != 'undefined') {
        let Id = rec.Id;
        let Maximize = rec.Maximize;
        //this.starlib1.dialog_openDialog(this, Id,Maximize);
        this.openPropertyDialog(this, Id, Maximize);
      }
      setTimeout(() => {
           this.selectedShape = null;
    });

    }

}
public currentZoom: number = 1;
public currentPan: { x: number, y: number } = { x: 0, y: 0 };

public lastSelectedContainerId: string | null = null;

async ON_EVENT(type: string, event: any) {
    // ===== ZOOM TRACKING =====
    if (type === "zoomStart") {
        this.currentZoom = event.zoom || 1;
        console.log(`🔍 checking:Zoom Start: ${this.currentZoom}`);
        return;
    }

    if (type === "zoomEnd") {
        this.currentZoom = event.zoom || 1;
        console.log(`🔍 checking:Zoom End: ${this.currentZoom}`);
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
        this.currentShapeType = "";
        this.setContextMenu("");
    }
    return;
}

    // ===== DRAG END =====
    if (type === "dragEnd") {

    const shape = event.shapes[0];
    const bounds = shape.bounds();

    const container =
        this.shapes.find(s => s.id === shape.id);

    if (container) {
        container.x = bounds.x;
        container.y = bounds.y;
        container.width = bounds.width;
        container.height = bounds.height;
    }

    if (shape.dataItem?.dataItem) {
      console.log("shape.dataItem.dataItem:", shape.dataItem.dataItem, "event.bounds:", bounds, "this.currentZoom:",this.currentZoom)
        shape.dataItem.dataItem.x = bounds.x;
        shape.dataItem.dataItem.y = bounds.y;
        shape.dataItem.dataItem.width = bounds.width;
        shape.dataItem.dataItem.height = bounds.height;
    }

    // NEW
    shape.refreshConnections();

    const idx =
        this.shapes.findIndex(
          s => s.id === shape.id
        );
      console.log("foundShape :", idx, shape.id)
      if (idx >= 0) {
        this.shapes[idx].x = bounds.x;
        this.shapes[idx].y = bounds.y;
        this.shapes[idx].width = bounds.width;
        this.shapes[idx].height = bounds.height;
      }
    this.updateShapes();
    return;
}
if (type === "shapeBoundsChange") {
  const shape = event.item;
  const bounds = event.bounds;
  
  if (!shape || !bounds) return;
  
  const shapeId = shape.id;
  if (this.isDiagramInitializing) {
        return;
    }
  
  // Find the shape in your shapes array
  const shapeInShapes = this.shapes.find(s => s.id === shapeId);
  
  if (shapeInShapes) {
    console.log(
    "📦 shapeBoundsChange:",
    shapeId,
    "bounds:",
    bounds
  );
    // Update the shape's width and height
    shapeInShapes.width = bounds.width;
    shapeInShapes.height = bounds.height;
    
    // IMPORTANT: Also update the dataItem's width and height
    if (shapeInShapes.dataItem) {
      shapeInShapes.dataItem.width = bounds.width;
      shapeInShapes.dataItem.height = bounds.height;
    }
    console.log(
    "📦 Stored dimensions:",
    {
      id: shapeId,
      width: shapeInShapes.width,
      height: shapeInShapes.height
    }
  );
  console.log(
  "📦 shapeBoundsChange DEBUG",
  {
    shapeId,
    bounds,
    currentShape: shapeInShapes
      ? {
          x: shapeInShapes.x,
          y: shapeInShapes.y,
          width: shapeInShapes.width,
          height: shapeInShapes.height
        }
      : null
  }
);
    console.log(`📦 Resized ${shapeId} to: ${bounds.width}x${bounds.height}`);
  }
  
  this.updateShapes();
  return;
}
    // ===== SELECT =====
    if (type === "select" && event.selected) {
        const selectedItem = event.selected[0];
        const containerId = selectedItem?.id;
        console.log(`checking:select : ${containerId}`);
        
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
            }
            this.showContextMenuAt(x, y, shapeId);
        }
    }
    
    console.log("on event")

}
  private ON_RECEIVED(changes: any): void {
    console.log("on received data from scada :changes:", changes);
if (typeof this.diagramComponent == "undefined"){
      return;
    }
    for (const change of changes) {
      switch (change.type) {
        case 'local':
          switch (change.property) {
            case 'temperature':
              const liveShape = this.diagramComponent.getShapeById("boilerB");
              if (liveShape) {

                console.log("SCADA_DATA:liveShape", liveShape);
                console.log("SCADA_DATA:options", liveShape.options);
                console.log("SCADA_DATA:dataItem", liveShape.dataItem.dataItem.definition.textBlocks[0].text);

                liveShape.dataItem.dataItem.definition.textBlocks[0].text = change.newValue.toString();
                console.log(liveShape);
                 liveShape.redrawVisual();
              }
              break;
          }
          break;
      }
    }
  }

  async  PRE_INSERT(formGroup){
    
    
  }
  async  POST_INSERT(formGroup){
    
   
  }
  async  PRE_QUERY (formGroup){
    
   
  }
  async  POST_QUERY(formGroup){
    
    
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

public  DIAGRAM_ID = null;
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

  private buildEditable(): DiagramEditable {
    return {
      drag: true,
      rotate: true
    };
  }
  // scd-scd-display-diagram.component.ts

public drawDiagramFromDefinition(
  definition: DiagramDefinition,
  offsetX: number = 0,
  offsetY: number = 0,
  targetWidth?: number,
  targetHeight?: number
): Group {

  // ------------------------------------------------------------
  // IMPORTANT ARCHITECTURE
  //
  // The definition is ALWAYS drawn at its natural/original size.
  //
  // We do NOT:
  //   - modify path strings
  //   - scale shape.x / shape.y
  //   - scale shape.width / shape.height
  //   - scale text coordinates
  //   - scale font sizes
  //
  // Kendo owns the outer shape:
  //   x, y, width, height
  //
  // The Drawing Group owns the internal visual.
  // ------------------------------------------------------------

  const group = new Group();

  // ------------------------------------------------------------
  // 1. Draw shapes at their ORIGINAL coordinates and dimensions
  // ------------------------------------------------------------

  if (definition.shapes) {
    definition.shapes.forEach((shape) => {

      const x = shape.x + offsetX;
      const y = shape.y + offsetY;

      const width = shape.width;
      const height = shape.height;

      if (shape.shape === "circle") {

        const circle = new Circle({
          center: {
            x: x + width / 2,
            y: y + height / 2
          },
          radius: width / 2,
          stroke: shape.stroke
            ? {
                width: shape.stroke.width,
                color: shape.stroke.color
              }
            : undefined,
          fill: {
            color: shape.fill || "#fff"
          }
        });

        if (shape.opacity !== undefined) {
          circle.options.opacity = shape.opacity;
        }

        group.append(circle);

      } else {

        const rect = new Rectangle({
          x: x,
          y: y,
          width: width,
          height: height,
          cornerRadius: shape.cornerRadius || 0,
          stroke: shape.stroke
            ? {
                width: shape.stroke.width,
                color: shape.stroke.color
              }
            : undefined,
          fill: {
            color: shape.fill || "#fff"
          }
        });

        if (shape.opacity !== undefined) {
          rect.options.opacity = shape.opacity;
        }

        group.append(rect);
      }
    });
  }

  // ------------------------------------------------------------
  // 2. Draw lines at ORIGINAL coordinates
  // ------------------------------------------------------------

  if (definition.lines) {

    definition.lines.forEach((line) => {

      if (line.path) {

        // IMPORTANT:
        // Do NOT modify or scale the path data.
        const path = new Path({
          data: line.path,
          stroke: {
            width: line.stroke?.width || 1,
            color: line.stroke?.color || "#000",
            dashType: line.stroke?.dashType as any
          },
          fill: {
            color: line.fill || "transparent"
          }
        });

        if (line.opacity !== undefined) {
          path.options.opacity = line.opacity;
        }

        group.append(path);

      } else if (line.from && line.to) {

        const straightLine = new Line({
          start: {
            x: line.from.x + offsetX,
            y: line.from.y + offsetY
          },
          end: {
            x: line.to.x + offsetX,
            y: line.to.y + offsetY
          },
          stroke: {
            width: line.stroke?.width || 1,
            color: line.stroke?.color || "#000",
            dashType: line.stroke?.dashType as any
          }
        });

        if (line.opacity !== undefined) {
          straightLine.options.opacity = line.opacity;
        }

        group.append(straightLine);
      }
    });
  }

  // ------------------------------------------------------------
  // 3. Draw text at ORIGINAL coordinates
  // ------------------------------------------------------------

  if (definition.textBlocks) {

    definition.textBlocks.forEach((text) => {

      const x = text.x + offsetX;
      const y = text.y + offsetY;

      let fontSize = 14;
      let fontWeight = "normal";
      let fontFamily = "Arial, sans-serif";

      if (text.font) {

        const parts = text.font.split(" ");

        for (const part of parts) {

          if (part.includes("px")) {
            fontSize = parseInt(part);

          } else if (
            part === "bold" ||
            part === "normal" ||
            part === "italic"
          ) {
            fontWeight = part;

          } else if (
            !part.match(/^\d+px$/) &&
            !["bold", "normal", "italic"].includes(part)
          ) {
            fontFamily = part;
          }
        }
      }

      // IMPORTANT:
      // No scaling of fontSize.
      const textBlock = new TextBlock({
        text: text.text,
        x: x,
        y: y,
        fill: text.fill || "#000",
        opacity: text.opacity || 1,
        fontSize: fontSize,
        fontWeight: fontWeight,
        fontFamily: fontFamily
      });

      if (text.textAnchor) {
        textBlock.options.textAnchor = text.textAnchor;
      }

      group.append(textBlock);
    });
  }

  // ------------------------------------------------------------
  // 4. Resize the ENTIRE rendered visual if Kendo supplied
  //    targetWidth / targetHeight.
  //
  //    We use the underlying Drawing Group.
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

        console.log(
          "VISUAL SCALE:",
          {
            naturalWidth,
            naturalHeight,
            naturalX,
            naturalY,
            targetWidth,
            targetHeight,
            scaleX,
            scaleY
          }
        );

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

  const dataItem = options.dataItem.dataItem;

  const shapeWidth =
    options.width ??
    dataItem.width ??
    undefined;

  const shapeHeight =
    options.height ??
    dataItem.height ??
    undefined;

  console.log(
    "visualTemplate:",
    {
      id: options.dataItem.id,
      shapeWidth,
      shapeHeight
    }
  );

  return this.drawDiagramFromDefinition(
    dataItem.definition,
    dataItem.offsetX || 0,
    dataItem.offsetY || 0,
    shapeWidth,
    shapeHeight
  );
};

  // Diagram properties
  public shapes: ShapeOptions[] = [];
  public connections: ConnectionOptions[] =[];
  public shapeDefaults: ShapeDefaults = {
    visual: this.visualTemplate,
  };
onEvent(type: string, event: any): void {
    console.log("Event:", type, event, event.item?.type, event.item?.shape, event.item?.content?.text || event.item?.id);
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
public mapSampleData() {
    let OutRec = this.performMapperFrom(this.executeQueryresult.data);
    if (this.paramConfig.DEBUG_FLAG) console.log("OutRec:1:", OutRec)

    let dwg = JSON.parse(OutRec.DiagramData);
    if (this.paramConfig.DEBUG_FLAG) console.log("dwg:1:", dwg)
    this.isDiagramInitializing = true;
    this.shapes = dwg.shapes;
    this.connections = dwg.connections;
    this.editable = this.buildEditable();

    // Generate the JSON
    const result = this.buildHierarchy(this.dbRows);
    this.items=result;

    requestAnimationFrame(() => {
        requestAnimationFrame(() => {
            this.isDiagramInitializing = false;
        });
    });

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
        
        // Store item details
        if (!itemMap[itemName]) {
            itemMap[itemName] = {
                text: itemName,
                Id: itemId,
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
            text: itemName
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
  private currentShapeType: string = "";
  private pressTimer: any = null;
  public isEditMode: boolean = false;
  
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
    const zoom = this.currentZoom || 1;
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
    let data = await this.starServices.execSQLBody(this, body, this.starServices.MASTER_DB);
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
        Id : item.ID
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
  
  async addNewServer(): Promise<void> {
    const name = prompt('Enter server name:');
    const endpoint = prompt('Enter OPC UA endpoint:');
    if (name && endpoint) {
      const result = await this.scadaIntegration.addServer(name, endpoint);
      if (result) {
        console.log('Server added:', result);
      } else {
        alert('Failed to add server');
      }
    }
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
    this.currentZoom = 1;
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
    // Disable polling when entering edit mode
    this.scadaIntegration.disablePolling();
    console.log('Edit mode: SCADA polling stopped');
  } else {
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

    const shapeCount = definition.shapes?.length || 0;

    let part;

    if (index < shapeCount) {

      part = definition.shapes[index];

    } else {

      part = definition.lines[index - shapeCount];

    }

    return part?.id ?? this.currentShapeId;
  }
  public updateShapes(){
    if (this.isDiagramInitializing)
      return;
    let DiagramData = this.mapperFrom.DiagramData;
    this.form.markAsDirty();
    let shapes = {"shapes":this.shapes,  "connections": this.connections } //connections
    let object ={};
    object[DiagramData] = JSON.stringify(shapes);
    this.form.patchValue(object);
    this.form.updateValueAndValidity();
    console.log("checking:shapeBoundsChange:shapeId: blower31283:2:this.shapes:", this.shapes[3])
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
const diagramX =
    (this.lastClickX - this.currentPan.x) / this.currentZoom;
const diagramY =
    (this.lastClickY - this.currentPan.y) / this.currentZoom;

    newShape.x = diagramX;
    newShape.y = diagramY;
    
    console.log("kendoui_content:newShape:", newShape);
    const options: ShapeOptions = {
      id: newShape.id,
      x: newShape.x,
      y: newShape.y,
      //width: newShape.width,
      //height: newShape.height,
      dataItem: newShape.dataItem,
      visual: (args) => {
        return this.drawDiagramFromDefinition(
          args.dataItem.definition
        );
      }
    };
    this.diagramComponent.addShape(options);    //Store to screen diagram
    this.shapes.push(newShape);                 //Store to my memory
}

public popupVisible = false;

public popupLeft = 0;
public popupTop = 0;

public selectedPartId = "";
public ShapeMenu;
public selectedShape;
public valueChange(value: any): void {
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
  public dialogProperties = [{"Id":"","Component":"","Width":"","Height":"","Maximize":""},{"Id":"17","Component":"Arrow_Button_Properties","Width":"500","Height":"500","Maximize":""},{"Id":"19","Component":"Arrow_Properties","Width":"500","Height":"500","Maximize":""},{"Id":"18","Component":"Arrow_Timing_Properties","Width":"500","Height":"500","Maximize":""},{"Id":"14","Component":"Bar_Graph_Properties","Width":"500","Height":"500","Maximize":""},{"Id":"24","Component":"Browser_Properties","Width":"500","Height":"500","Maximize":""},{"Id":"4","Component":"Button_Properties","Width":"500","Height":"500","Maximize":""},{"Id":"20","Component":"Control_List_Selector_Properties","Width":"500","Height":"500","Maximize":""},{"Id":"21","Component":"Display_List_Selector_Properties","Width":"500","Height":"500","Maximize":""},{"Id":"28","Component":"Display_Settings_Screen","Width":"700","Height":"700","Maximize":""},{"Id":"15","Component":"Gauge_Properties","Width":"500","Height":"500","Maximize":""},{"Id":"12","Component":"List_Indicator_Properties","Width":"500","Height":"500","Maximize":""},{"Id":"13","Component":"List_Indicator_States_Properties","Width":"500","Height":"500","Maximize":""},{"Id":"22","Component":"Message_Date_Properties","Width":"500","Height":"500","Maximize":""},{"Id":"9","Component":"Multistate_Indicator_Properties","Width":"500","Height":"500","Maximize":""},{"Id":"5","Component":"Numeric_Display_Properties","Width":"500","Height":"500","Maximize":""},{"Id":"27","Component":"Numeric_Input_Properties","Width":"500","Height":"500","Maximize":""},{"Id":"25","Component":"Piloted_List_Selector_Properties","Width":"500","Height":"500","Maximize":""},{"Id":"1","Component":"Push_Button_Properties","Width":"500","Height":"500","Maximize":""},{"Id":"16","Component":"Scale_Properties","Width":"500","Height":"500","Maximize":""},{"Id":"3","Component":"Shape_Properties","Width":"500","Height":"500","Maximize":""},{"Id":"7","Component":"String_Display_Properties","Width":"500","Height":"500","Maximize":""},{"Id":"8","Component":"String_Input_Properties","Width":"500","Height":"500","Maximize":""},{"Id":"11","Component":"Symbol_Properties","Width":"700","Height":"700","Maximize":""},{"Id":"10","Component":"Symbol_States_Properties","Width":"500","Height":"500","Maximize":""},{"Id":"29","Component":"SymbolFactoryPlus","Width":"500","Height":"500","Maximize":"Y"},{"Id":"23","Component":"Tag_Label_Properties","Width":"500","Height":"500","Maximize":""},{"Id":"2","Component":"Text_Properties","Width":"500","Height":"500","Maximize":""}]
  dialog_getComponentToRender(shapeType: string,Maximize): any {
    this.winState = null;
    if (Maximize == 'Y'){
      this.winState = "maximized";
    }

    	switch (shapeType) {
		case '17': 
		return ScdArrowButtonPropertiesComponent; 
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
		case '21': 
		return ScdDisplayListSelectorPropertiesComponent; 
		case '28': 
		return ScdDisplaySettingsScreenComponent; 
		case '15': 
		return ScdGaugePropertiesComponent; 
		case '12': 
		return ScdListIndicatorPropertiesComponent; 
		case '13': 
		return ScdListIndicatorStatesPropertiesComponent; 
		case '22': 
		return ScdMessageDatePropertiesComponent; 
		case '9': 
		return ScdMultistateIndicatorPropertiesComponent; 
		case '5': 
		return ScdNumericDisplayPropertiesComponent; 
		case '27': 
		return ScdNumericInputPropertiesComponent; 
		case '25': 
		return ScdPilotedListSelectorPropertiesComponent; 
		case '1': 
		return ScdPushButtonPropertiesComponent; 
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
 public openPropertyDialog(object: any, comp: string, Maximize: string): void {
  console.log('openPropertyDialog: comp:', comp, 'Maximize:', Maximize);
  
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
      maximize: Maximize
    }
  };

  // Get the component name for the title
  const componentName = dialogDef.Component || comp;
  const title = this.getDialogTitle(componentName);

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
    
    const sub = instance.setComponentConfig_Output.subscribe((config: any) => {
      console.log('Property dialog: Received componentConfig from child:', config);
      if (this.propertyDialogData) {
        // Check for parentClose - close the dialog immediately
        if (config.parentClose === true) {
          console.log('Property dialog: parentClose received, closing dialog');
          //this.closePropertyDialog();
          this.onPropertyDialogClose();
          return;
        }
        
        // Update dirty state
        this.propertyDialogData.isDirty = config.isDirty === true;
        
        // Check for masterSaved - this means OK was clicked
        if (config.masterSaved === true) {
          console.log('Property dialog: masterSaved received, saving and closing');
          // The component already saved, just close the dialog
          setTimeout(() => {
            this.closePropertyDialog();
          }, 300);
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

}

