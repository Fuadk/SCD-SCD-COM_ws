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
import { scddiagramScdScdDiagramDiagram , componentConfigDef} from '@modeldir/model';
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
'DIAGRAM_ID' : new FormControl(dataItem.DIAGRAM_ID  , ) ,
'DIAGRAM_DATA' : new FormControl(dataItem.DIAGRAM_DATA  , ) ,
'APPLICATION_ID' : new FormControl(dataItem.APPLICATION_ID  , ) ,
'NAME' : new FormControl(dataItem.NAME  , ) 
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
  selector: 'app-scd-scd-diagram-diagram',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './scd-scd-diagram-diagram.component.html',
  styleUrls: ['./scd-scd-diagram-diagram.component.scss'],
  standalone: false
})


export class ScdDiagramScdScdDiagramDiagramDiagramComponent implements AfterViewInit, OnDestroy {
  @ViewChild('diagram')    diagram!: DiagramComponent;
  public title =  this.starServices.getNLS([],"SCD_SCD_DIAGRAM_DIAGRAM.scddiagramScdScdDiagramDiagram.component_title","SCD DIAGRAM DIAGRAM");
  public compTitleMsg =  "SCD_SCD_DIAGRAM_DIAGRAM.scddiagramScdScdDiagramDiagram";
  public routineName = "ScdDiagramScdScdDiagramDiagramDiagram";
  private insertCMD = "INSERT_SCD_DIAGRAM";
  private updateCMD = "UPDATE_SCD_DIAGRAM";
  private deleteCMD =   "DELETE_SCD_DIAGRAM";
  private getCMD = "GET_SCD_DIAGRAM_QUERY";

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
  public  isDIAGRAM_IDEnable : boolean = true;

  public FORM_TRIGGER_FAILURE:any;
  public NOTFOUND:any;
  public disableEmitSave = false;
  public disableEmitReadCompleted = false;
  public children = ["any"];

  public action = "";
  private Body:any =[];
  public isNew!: boolean;
  public primarKeyReadOnlyArr = {isDIAGRAM_IDreadOnly : false};  
  public paramConfig;
  private masterKeyArr = [];
  private masterKeyNameArr = [];
  public  masterKey="";
  public masterKeyName ="DIAGRAM_ID";
  public WhereClause = "";
  public OrderByClause = "";
  
  public formattedWhere:any = null;  
  public  submitted =  false;
  public masterParams:any;
  public alignment: TabAlignment = 'start';
  public isPhonePortrait = false;
  public compSelector = 'app-scd-scd-diagram-diagram';
  public PK_AUTO = 'DIAGRAM_ID';
  public customerFacing = false;
  public FormStepsArr = [] ;
public labelDIAGRAM_IDTop=true;
public labelDIAGRAM_IDVisible=true;
public labelDIAGRAM_DATATop=true;
public labelDIAGRAM_DATAVisible=true;
public labelAPPLICATION_IDTop=true;
public labelAPPLICATION_IDVisible=true;
public labelNAMETop=true;
public labelNAMEVisible=true;

public visibleDIAGRAM_ID = true;
public visibleDIAGRAM_DATA = true;
public visibleAPPLICATION_ID = true;
public visibleNAME = true;

public disableDIAGRAM_ID = false;
public disableDIAGRAM_DATA = false;
public disableAPPLICATION_ID = false;
public disableNAME = false;


  
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

  private formInitialValues:any =   new scddiagramScdScdDiagramDiagram();   
    @Input() public set detail_Input(form: any) {
       if (typeof form != "undefined"){
        this.isSearch = true;
        this.executeQuery(form);
        this.isChild = true;
      }
      /*
    if (this.paramConfig.DEBUG_FLAG) console.log('detail_Input ScdDiagramScdScdDiagramDiagramDiagram form.DIAGRAM_ID :' + form.DIAGRAM_ID);
    if ( (form.DIAGRAM_ID != "") &&   (typeof form.DIAGRAM_ID != "undefined"))
    {
      this.masterKey = form.DIAGRAM_ID;
      
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
    if ( (typeof form != "undefined") &&   (typeof form.DIAGRAM_ID != "undefined") &&   (form.DIAGRAM_ID != ""))
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
      this.Comp_Config.masterKeyArr =  [NewVal['DIAGRAM_ID']];
      this.Comp_Config.masterKeyNameArr =  ["DIAGRAM_ID"];
         
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
this.lookupArrDef =[	{"statment":"SELECT CODE, CODETEXT_LANG , PARTCODE FROM SOM_TABS_CODES WHERE CODENAME = \"APPLICATION_ID\"  and LANGUAGE_NAME = '" + this.userLang + "' order by CODETEXT_LANG ",
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
      if (this.paramConfig.DEBUG_FLAG) console.log("ScdDiagramScdScdDiagramDiagramDiagram ComponentConfig:", {...ComponentConfig});

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
            form.DIAGRAM_ID = masterParams.data.MENU_ID;
            this.DIAGRAM_ID = masterParams.data.MENU_ID
            console.log("Diagram masterParams:", masterParams.data.MENU_ID, masterParams, form, this.form, "this.isSearch:", this.isSearch)
            this.executeQuery(form);
        }, 300);
      }
   
        
      
    }
  }
  async WHEN_NEW_FORM_INSTANCE(){
    	// if (!this.isChild){
	// 	this.executeQuery(this.form.value);
	// }

    
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
        kendoui_content.id =  copiedShape.id;
        this.starServices.sessionParams['COPIED_SHAPE'] = "";
        console.log ("kendoui_content:2:", formGroup, this.lastClickX, this.lastClickY, kendoui_content);
        let shapeType = "SYMPOL_FACTORY";
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
              "HEIGHT" : 100,
              "WIDTH" : 100,
              "TOP": diagramY,
              "LEFT": diagramX,
              "NAME":kendoui_content.id,
              "VISIBLE": 1,
              "KEY_NAVIGATION":1,
              "FOCUS_HIGHLIGHT":0,
              "POINTER_HIGHLIGHT":1,
              "TAB_INDEX":1,
              "TOOLTIP_TEXT":kendoui_content.id
            },
            {
              "_QUERY": "GET_LAST_ID"
            }
          ];
          let data = await this.starServices.execSQLBody(this, body, this.starServices.MASTER_DB);
          if (this.paramConfig.DEBUG_FLAG) console.log("INSERT_SCD_SHAPE:data[1].data:", data[1].data[0]);
          if (typeof data[1].data != "undefined") {
            let last_insert_rowid = data[1].data[0]["LAST_INSERT_ID"];
            kendoui_content.id = last_insert_rowid + ":" + kendoui_content.id
             if (this.paramConfig.DEBUG_FLAG) console.log("INSERT_SCD_SHAPE:kendoui_content.id:", kendoui_content.id);
          }
            
        
       this.add_new_shape(kendoui_content, copiedShape.type);
       this.updateShapes();
     }


}

 async ON_CLICK_CONTEXT_MENU(menuType,event){
     let shapeInfo = this.getShapeInfo();
    let shapeType = shapeInfo['SHAPE_TYPE'];
    console.log("DEBUG_IT:ON_CLICK_MENU:", event, menuType, this.currentShapeType,this.currentShapeId, shapeType)
    let Id = "";
    if (menuType == "DROPDOWN") {
      Id = event.Id;
      shapeType = event.text;
    }
    else if (menuType == "CONTEXT_MENU") {
      Id = event.item.Id;
      console.log("ON_CLICK_MENU:id:", Id);
    }
    if (Id != "") {
      let rec = this.dialogProperties.find(x => x.Component == Id);
      console.log("ON_CLICK_MENU:rec:", this.selectedShape, rec)
      if (typeof (rec) != 'undefined') {
        let Id = rec.Id;
        let Maximize = rec.Maximize;
        switch(shapeType){
          case 'SYMPOL_FACTORY': 
		      //  Id='3';
            break;
          default:
            break;
        }

        //this.starlib1.dialog_openDialog(this, Id,Maximize);
        this.openPropertyDialog(this, Id, Maximize, shapeType);
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
    if (typeof this.diagram == "undefined") {
            return;
        }
        console.log("opcua:on received data from scada :changes:", changes);
        for (const change of changes) {
            console.log("opcua:on received data from scada :change:", change.type, change);
            switch (change.type) {
                case 'tag':
                    console.log("opcua:on received data from scada :displayName:", change.newValue.displayName, change);
                    switch (change.newValue.displayName) {
                        case 'Tag_1001':

                            const liveShape = this.diagram.getShapeById("boilerB:2");
                            console.log("opcua:on received data from scada :value:", change.newValue.value, liveShape);
                            if (liveShape) {

                                console.log("SCADA_DATA:liveShape", liveShape);
                                console.log("SCADA_DATA:options", liveShape.options);
                                console.log("SCADA_DATA:dataItem", liveShape.dataItem.dataItem.definition.textBlocks[0].text);
                                console.log("opcua:on received data from scada :value:", change.newValue.value, change);
                                liveShape.dataItem.dataItem.definition.textBlocks[0].text = change.newValue.value.toString();
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



async WHEN_VALIDATE_ITEM_DIAGRAM_ID(value) {

 this.FORM_TRIGGER_FAILURE = false ; 
 if (typeof this.form.controls['DIAGRAM_ID'] != "undefined" ) 
      this.form.controls['DIAGRAM_ID'].setErrors({invalid: true}); 
 // Code goes here 
 

 if ( this.FORM_TRIGGER_FAILURE == true) 
 return; 
 
 if (typeof this.form.controls['DIAGRAM_ID'] != "undefined" ) 
     this.form.get('DIAGRAM_ID').updateValueAndValidity();
 this.form.updateValueAndValidity(); 
 }

 async ON_CLICK_DIAGRAM_ID(event){

}

async WHEN_VALIDATE_ITEM_DIAGRAM_DATA(value) {

 this.FORM_TRIGGER_FAILURE = false ; 
 if (typeof this.form.controls['DIAGRAM_DATA'] != "undefined" ) 
      this.form.controls['DIAGRAM_DATA'].setErrors({invalid: true}); 
 // Code goes here 
 

 if ( this.FORM_TRIGGER_FAILURE == true) 
 return; 
 
 if (typeof this.form.controls['DIAGRAM_DATA'] != "undefined" ) 
     this.form.get('DIAGRAM_DATA').updateValueAndValidity();
 this.form.updateValueAndValidity(); 
 }

 async ON_CLICK_DIAGRAM_DATA(event){

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

async WHEN_VALIDATE_ITEM_NAME(value) {

 this.FORM_TRIGGER_FAILURE = false ; 
 if (typeof this.form.controls['NAME'] != "undefined" ) 
      this.form.controls['NAME'].setErrors({invalid: true}); 
 // Code goes here 
 

 if ( this.FORM_TRIGGER_FAILURE == true) 
 return; 
 
 if (typeof this.form.controls['NAME'] != "undefined" ) 
     this.form.get('NAME').updateValueAndValidity();
 this.form.updateValueAndValidity(); 
 }

 async ON_CLICK_NAME(event){

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
public mapperFrom = {"DiagramID":"DIAGRAM_ID","name":"NAME","DiagramData":"DIAGRAM_DATA"};
public snapDistance = 6;
  public editable: DiagramEditable = this.buildEditable();

  private buildEditable(): DiagramEditable {
    return {
      drag: true,
      rotate: true
    };
  }
  public drawDiagramFromDefinition(
    definition: DiagramDefinition,
    offsetX: number = 0,
    offsetY: number = 0,
    editorStyle?: ShapeEditorStyle
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

    return group;
  }
  // Visual template that uses the diagram definition
  public visualTemplate = (options: any): Group => {
    const dataItem = options?.dataItem?.dataItem ?? options?.dataItem;
    if (!dataItem) {
      return new Group();
    }

    let group: Group;
    if (Array.isArray(dataItem.groupChildren)) {
      group = this.drawGroupedChildren(dataItem.groupChildren, dataItem.editorStyle);
    } else if (dataItem.libraryKind) {
      group = this.drawLibraryShape(dataItem);
    } else if (dataItem.definition) {
      group = this.drawDiagramFromDefinition(
        dataItem.definition,
        dataItem.offsetX || 0,
        dataItem.offsetY || 0,
        dataItem.editorStyle
      );
    } else {
      return new Group();
    }

    this.applyDrawingTransform(group, dataItem.editorStyle);
    return group;
  };
    private drawGroupedChildren(children: any[], parentStyle?: ShapeEditorStyle, baseX: number = 0, baseY: number = 0): Group {
    const group = new Group();
    for (const child of children || []) {
      const dataItem = child?.dataItem?.dataItem ?? child?.dataItem ?? {};
      const x = baseX + (Number(child?.x) || 0);
      const y = baseY + (Number(child?.y) || 0);
      let childGroup: Group;

      if (Array.isArray(dataItem.groupChildren)) {
        childGroup = this.drawGroupedChildren(dataItem.groupChildren, parentStyle, x, y);
      } else if (dataItem.libraryKind) {
        childGroup = this.drawLibraryShape(dataItem, x, y, parentStyle);
      } else if (dataItem.definition) {
        const mergedStyle:ShapeEditorStyle = {
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
      if (drawingElement?.transform && bbox) {
        let tx = geometry.transform();
        const flipX = childStyle.flipX ?? 1;
        const flipY = childStyle.flipY ?? 1;
        const center = [bbox.x + bbox.width / 2, bbox.y + bbox.height / 2];
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
    if (drawingGroup?.transform && bounds) {
      drawingGroup.transform(
        geometry.transform().scale(
          flipX,
          flipY,
          [bounds.x + bounds.width / 2, bounds.y + bounds.height / 2]
        )
      );
    }
  }

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
async  removeUnusedShapes(){
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
  if (this.paramConfig.DEBUG_FLAG) console.log("removeUnusedShapes:shapesIDs:", shapesIDs);
  let statement_TEXT_GENERAL = "DELETE from SCD_TEXT_GENERAL where shape_id  in "
                  + "(SELECT  shape_id from scd_shape where shape_id not in (" 
                  + shapesIDs + ") and DISPLAY_ID = " + this.form.value.DISPLAY_ID + ")";
  let body_defs = [
     {
        "_QUERY": "EXECSQL",
        "_STMT": statement_TEXT_GENERAL
      }];
  if (this.paramConfig.DEBUG_FLAG) console.log("removeUnusedShapes_defs:body_defs:", body_defs);
  let data_defs = await this.starServices.execSQLBody(this, body_defs, this.starServices.MASTER_DB);

  let statement = "DELETE from scd_shape where shape_id not in (" + shapesIDs + ") and DISPLAY_ID = " + this.form.value.DISPLAY_ID;
  let whereClause = "DISPLAY_ID =" + this.form.value.DISPLAY_ID;
    let body = [
      {
        "_QUERY": "EXECSQL",
        "_STMT": statement
      },
      {
      "_QUERY": "GET_SCD_SHAPE_QUERY",
      "_WHERE": whereClause
              
      }
    ];
    if (this.paramConfig.DEBUG_FLAG) console.log("removeUnusedShapes:body:", body);
    let data = await this.starServices.execSQLBody(this, body, this.starServices.MASTER_DB);
    if (this.paramConfig.DEBUG_FLAG) console.log("removeUnusedShapes:data[1].data:", data[1].data);
    if (typeof data[1].data != "undefined"){
      this.scdShapes = data[1].data;
    } 
}
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
    this.removeUnusedShapes();
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
  public  currentShapeType: string = "";
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
  
  async addNewServer(name, endpoint): Promise<void> {
        // const name = prompt('Enter server name:');
        // const endpoint = prompt('Enter OPC UA endpoint:');
        if (name && endpoint) {
            console.log("opcua:addNewServer:name", name, endpoint)
            const result = await this.scadaIntegration.addServer(name, endpoint);
            if (result) {
                console.log('opcua:Server added:', result);
            } else {
                alert('opcua:Failed to add server');
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
  public dialogProperties = [{"Id":"","Component":"","Width":"","Height":"","Maximize":""},{"Id":"17","Component":"Arrow_Button_Properties","Width":"500","Height":"500","Maximize":""},{"Id":"19","Component":"Arrow_Properties","Width":"500","Height":"500","Maximize":""},{"Id":"18","Component":"Arrow_Timing_Properties","Width":"500","Height":"500","Maximize":""},{"Id":"14","Component":"Bar_Graph_Properties","Width":"500","Height":"500","Maximize":""},{"Id":"24","Component":"Browser_Properties","Width":"500","Height":"500","Maximize":""},{"Id":"4","Component":"Button_Properties","Width":"500","Height":"500","Maximize":""},{"Id":"20","Component":"Control_List_Selector_Properties","Width":"500","Height":"500","Maximize":""},{"Id":"21","Component":"Display_List_Selector_Properties","Width":"500","Height":"500","Maximize":""},{"Id":"28","Component":"Display_Settings_Screen","Width":"700","Height":"700","Maximize":""},{"Id":"15","Component":"Gauge_Properties","Width":"500","Height":"500","Maximize":""},{"Id":"12","Component":"List_Indicator_Properties","Width":"500","Height":"500","Maximize":""},{"Id":"13","Component":"List_Indicator_States_Properties","Width":"500","Height":"500","Maximize":""},{"Id":"22","Component":"Message_Date_Properties","Width":"500","Height":"500","Maximize":""},{"Id":"9","Component":"Multistate_Indicator_Properties","Width":"500","Height":"500","Maximize":""},{"Id":"5","Component":"Numeric_Display_Properties","Width":"500","Height":"500","Maximize":""},{"Id":"27","Component":"Numeric_Input_Properties","Width":"500","Height":"500","Maximize":""},{"Id":"25","Component":"Piloted_List_Selector_Properties","Width":"500","Height":"500","Maximize":""},{"Id":"1","Component":"Push_Button_Properties","Width":"500","Height":"500","Maximize":""},{"Id":"16","Component":"Scale_Properties","Width":"500","Height":"500","Maximize":""},{"Id":"3","Component":"Shape_Properties","Width":"500","Height":"500","Maximize":""},{"Id":"7","Component":"String_Display_Properties","Width":"500","Height":"500","Maximize":""},{"Id":"8","Component":"String_Input_Properties","Width":"500","Height":"500","Maximize":""},{"Id":"11","Component":"Symbol_Properties","Width":"800","Height":"800","Maximize":""},{"Id":"10","Component":"Symbol_States_Properties","Width":"500","Height":"500","Maximize":""},{"Id":"29","Component":"SymbolFactoryPlus","Width":"500","Height":"500","Maximize":"Y"},{"Id":"23","Component":"Tag_Label_Properties","Width":"500","Height":"500","Maximize":""},{"Id":"2","Component":"Text_Properties","Width":"500","Height":"500","Maximize":""}]
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
 public openPropertyDialog(object: any, comp: string, Maximize: string, shapeType): void {
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
      maximize: Maximize,
      action : "new",
      DISPLAY_ID:this.form.value.DISPLAY_ID,
      SHAPE_TYPE: shapeType.toLowerCase()
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
            this.insertShape (componentConfig.masterParams.data, componentConfig.masterParams.shapeType)
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
    event.stopPropagation();  
}
onDiagramContextMenu(event){
  console.log("DEBUG_IT:onDiagramContextMenu:event:",event)
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
public insertShape (data, shapeType){
  const text = "Rich Text";
  this.addLibraryShape("richText", { 
    text: text || "Rich Text", 
    width: 190, 
    height: 90, 
    fillColor: "#fff7d6" 
  });
}

//////////
public statusMessage = "Select a shape to edit it.";
public freehandMode = false;
  private freehandPoints: Array<{ x: number; y: number }> = [];
  private freehandPointerId: number | null = null;
  public freehandPreviewPath = "";
  private freehandPreviewPoints: Array<{ x: number; y: number }> = [];
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
      polyline: "Polyline"
    };
    return titles[kind] || "Shape";
  }
  
  // 
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
    this.addLibraryShape("freehand", { x: minX, y: minY, width, height, points, fillColor: "transparent" }, true);
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
  const id = this.uniqueShapeId(kind);
  
  // Create library shape data
  const dataItem: LibraryShapeData = {
    type: 'libraryShape',
    title: this.libraryShapeTitle(kind),
    libraryKind: kind,
    width,
    height,
    strokeColor: options.strokeColor || "#2f4858",
    fillColor: options.fillColor || "#d9e8f5",
    editorStyle: { flipX: 1, flipY: 1 },
    ...(options.editorStyle ?? {})
  };
  
  // Remove x/y from dataItem (they're on the shape)
  delete (dataItem as any).x;
  delete (dataItem as any).y;
  
  // Create the shape model
  const model: any = {
    id,
    type: kind === "ellipse" ? "circle" : "rectangle",
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
  
  // Add to application model
  (this.shapes as any[]).push(model);
  
  // Add to diagram - using the visual template from shapeDefaults
  const runtime = this.diagram.addShape(model, true);
  
  // Select the new shape
  this.diagram.deselect();
  this.diagram.select(runtime);
  
  
  // Update the display
  this.updateShapes();
  
  this.statusMessage = `${this.libraryShapeTitle(kind)} added to the diagram.`;
}
  // Add these methods to handle library shape rendering
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
      const background = new Rectangle({
        x, y, width, height, cornerRadius: 4,
        stroke: { color: stroke, width: 1 },
        fill: { color: fill }
      });
      const text = new TextBlock({
        text: String(dataItem.text || "Rich Text"),
        x: x + 10,
        y: y + 12,
        fill: style.strokeColor || dataItem.textColor || "#1f2937"
      });
      text.options.fontSize = Number(dataItem.fontSize) || 16;
      text.options.fontWeight = dataItem.fontWeight || "bold";
      group.append(background);
      group.append(text);
      return group;
    }

    if (kind === "image") {
      const background = new Rectangle({
        x, y, width, height,
        stroke: { color: stroke, width: 1 },
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

    if (kind === "ellipse") {
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
      group.append(new Line({
        start: { x, y: y + height / 2 },
        end: { x: x + width, y: y + height / 2 },
        stroke: { color: stroke, width: 3 }
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
  // Skip if still initializing
  if (this.isDiagramInitializing) {
    return;
  }

  const model = this.modelForShape(shape);
  if (!model || typeof shape.bounds !== "function") {
    return;
  }

  const bounds = shape.bounds();

  // Update the application model
  model.x = bounds.x;
  model.y = bounds.y;
  model.width = bounds.width;
  model.height = bounds.height;
  model.rotation = { angle: this.readRotation(shape) };

  // Update the runtime data item
  const runtimeData = this.shapeDataItem(shape);
  if (runtimeData && typeof runtimeData === "object") {
    runtimeData.width = bounds.width;
    runtimeData.height = bounds.height;
    runtimeData.rotation = { angle: this.readRotation(shape) };
  }

  console.log("SYNC RUNTIME → MODEL:", {
    id: model.id,
    x: model.x,
    y: model.y,
    width: model.width,
    height: model.height
  });
  console.log("syncRuntimeShapeToModel:this.isDiagramInitializing:", this.isDiagramInitializing)
  
}
// Add these properties
public showGrid: boolean = false;
public snapEnabled: boolean = true;
public rotationAngle: number = 0;
public strokeColor: string = "#333333";
public fillColor: string = "#d9e8f5";

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
  this.alignShapesToGrid(shapes);
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
      ? { ...shape.bounds() }
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

  // Capture runtime edits
  selected.forEach(shape => this.syncRuntimeShapeToModel(shape));
  const selectedIds = new Set(selected.map(shape => this.runtimeShapeId(shape)).filter(Boolean));
  const selectedModels = (this.shapes as any[]).filter(model => selectedIds.has(String(model?.id ?? "")));
  
  if (selectedModels.length < 2) {
    this.statusMessage = "Unable to resolve the selected shapes in application memory.";
    return;
  }

  const box = this.diagram.boundingBox(selected);
  if (!box || box.width <= 0 || box.height <= 0) {
    return;
  }

  const children = selectedModels.map(model => {
    const child = this.clonePlain(model);
    child.x = (Number(child.x) || 0) - box.x;
    child.y = (Number(child.y) || 0) - box.y;
    delete child.visual;
    return child;
  });

  const groupId = this.uniqueShapeId("group");
  const groupModel: any = {
    id: groupId,
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
  this.removeModelsByIds([...selectedIds]);
  (this.shapes as any[]).push(groupModel);
  const groupedShape = this.diagram.addShape(groupModel, true);
  this.diagram.deselect();
  this.diagram.select(groupedShape);
  this.syncRuntimeShapeToModel(groupedShape);
  this.updateShapes();
  this.statusMessage = `Grouped ${children.length} shapes into one shape.`;
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
  this.updateShapes();
  this.statusMessage = `Ungrouped into ${restoredRuntime.length} separate shapes.`;
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

private alignShapesToGrid(shapes: any[]): void {
  const gridSize = 20;
  for (const shape of shapes) {
    const bounds = shape.bounds();
    const x = Math.round(bounds.x / gridSize) * gridSize;
    const y = Math.round(bounds.y / gridSize) * gridSize;
    shape.position({ x, y });
    shape.refreshConnections?.();
    this.syncRuntimeShapeToModel(shape);
  }
  this.statusMessage = `Aligned ${shapes.length} shape${shapes.length === 1 ? "" : "s"} to the grid.`;
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
    // The custom visual reads editorStyle from the data item, so rerun the
    // visual template after a color/fill/flip change.
    if (typeof shape.redrawVisual === "function") {
      shape.redrawVisual();
    } else if (typeof shape.refresh === "function") {
      shape.refresh();
    } else if (typeof shape.redraw === "function") {
      shape.redraw({});
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
      if (candidate && typeof candidate === "object" && candidate.definition) {
        candidate.editorStyle = style;
      }
    }
    
    const model = this.modelForShape(shape);
    if (model) {
      model.dataItem ??= {};
      const modelData = model.dataItem?.dataItem ?? model.dataItem;
      modelData.editorStyle = this.clonePlain(style);
    }

    //this.schedulePersistState();
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
    //this.schedulePersistState();
  }
}

