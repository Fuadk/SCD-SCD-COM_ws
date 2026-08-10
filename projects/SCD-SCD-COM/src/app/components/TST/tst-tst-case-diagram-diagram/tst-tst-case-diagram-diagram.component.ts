import { Component, Input, Output,ViewChild, EventEmitter, HostListener } from '@angular/core';
import { FormGroup, FormControl, Validators ,FormBuilder} from '@angular/forms';
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
import { StarNotifyService } from '../../../services/starnotification.service';

import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';

import { Subscription } from 'rxjs';
import { IntlService } from "@progress/kendo-angular-intl";
import {  ViewEncapsulation } from "@angular/core";
import { Router } from '@angular/router';
import { TabAlignment } from '@progress/kendo-angular-layout';
import { tstcaseDiagramTstTstCaseDiagramDiagram , componentConfigDef} from '@modeldir/model';
import { ScadaIntegrationService, ScadaChangeEvent } from '../../../services/scada-integration.service';
import { ServerConfig } from '../../../services/scada.service';


 const createFormGroup = (dataItem:any) => new FormGroup({
'TST_DIAGRAM_ID' : new FormControl(dataItem.TST_DIAGRAM_ID  , ) ,
'DIAGRAM_DATA' : new FormControl(dataItem.DIAGRAM_DATA  , ) ,
'NAME' : new FormControl(dataItem.NAME  , ) ,
'DIAGRAM_ID' : new FormControl(dataItem.DIAGRAM_ID  , ) 
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
  selector: 'app-tst-tst-case-diagram-diagram',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './tst-tst-case-diagram-diagram.component.html',
  styleUrls: ['./tst-tst-case-diagram-diagram.component.scss'],
  standalone: false
})


export class TstCaseDiagramTstTstCaseDiagramDiagramDiagramComponent {
  @ViewChild('diagram')    diagramComponent!: DiagramComponent;
  public title =  this.starServices.getNLS([],"TST_TST_CASE_DIAGRAM_DIAGRAM.tstcaseDiagramTstTstCaseDiagramDiagram.component_title","TST CASE DIAGRAM DIAGRAM");
  public compTitleMsg =  "TST_TST_CASE_DIAGRAM_DIAGRAM.tstcaseDiagramTstTstCaseDiagramDiagram";
  public routineName = "TstCaseDiagramTstTstCaseDiagramDiagramDiagram";
  private insertCMD = "INSERT_TST_CASE_DIAGRAM";
  private updateCMD = "UPDATE_TST_CASE_DIAGRAM";
  private deleteCMD =   "DELETE_TST_CASE_DIAGRAM";
  private getCMD = "GET_TST_CASE_DIAGRAM_QUERY";

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
  public  isTST_DIAGRAM_IDEnable : boolean = true;

  public FORM_TRIGGER_FAILURE:any;
  public NOTFOUND:any;
  public disableEmitSave = false;
  public disableEmitReadCompleted = false;
  public children = ["any"];

  public action = "";
  private Body:any =[];
  public isNew!: boolean;
  public primarKeyReadOnlyArr = {isTST_DIAGRAM_IDreadOnly : false};  
  public paramConfig;
  private masterKeyArr = [];
  private masterKeyNameArr = [];
  public  masterKey="";
  public masterKeyName ="TST_DIAGRAM_ID";
  public WhereClause = "";
  public OrderByClause = "";
  
  public formattedWhere:any = null;  
  public  submitted =  false;
  public masterParams:any;
  public alignment: TabAlignment = 'start';
  public isPhonePortrait = false;
  public compSelector = 'app-tst-tst-case-diagram-diagram';
  public PK_AUTO = 'TST_DIAGRAM_ID';
  public customerFacing = false;
  public FormStepsArr = [] ;
public labelTST_DIAGRAM_IDTop=true;
public labelTST_DIAGRAM_IDVisible=true;
public labelDIAGRAM_DATATop=true;
public labelDIAGRAM_DATAVisible=true;
public labelNAMETop=true;
public labelNAMEVisible=true;
public labelDIAGRAM_IDTop=true;
public labelDIAGRAM_IDVisible=true;

public visibleTST_DIAGRAM_ID = true;
public visibleDIAGRAM_DATA = true;
public visibleNAME = true;
public visibleDIAGRAM_ID = true;

public disableTST_DIAGRAM_ID = false;
public disableDIAGRAM_DATA = false;
public disableNAME = false;
public disableDIAGRAM_ID = false;


  
  //@Input()  
  public showToolBar = true;
  @Output() readCompletedOutput: EventEmitter<any> = new EventEmitter();
  @Output() clearCompletedOutput: EventEmitter<any> = new EventEmitter();
  @Output() saveCompletedOutput: EventEmitter<any> = new EventEmitter();
  @Output() formValidationChangedOutput: EventEmitter<boolean> = new EventEmitter();
  
  // Server management
  public availableServers: ServerConfig[] = [];
  public selectedServerId: number = 0;

   constructor(public router: Router,
              public intl: IntlService, 
              public responsive: BreakpointObserver, 
              private scadaIntegration: ScadaIntegrationService,
              private starNotify: StarNotifyService,   
              public starServices: starServices) {
      this.router = router;
      this.componentConfig = new componentConfigDef(); 
      this.paramConfig = getParamConfig();
      this.userLang =  this.paramConfig.userLang.toUpperCase() ;
      this.componentConfig.queryable  = true;
      this.componentConfig.navigable = true;
      this.componentConfig.insertable = true;
      this.componentConfig.removeable = true;
      this.componentConfig.updateable = true;
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

  private formInitialValues:any =   new tstcaseDiagramTstTstCaseDiagramDiagram();   
    @Input() public set detail_Input(form: any) {
       if (typeof form != "undefined"){
        this.isSearch = true;
        this.executeQuery(form);
        this.isChild = true;
      }
      /*
    if (this.paramConfig.DEBUG_FLAG) console.log('detail_Input TstCaseDiagramTstTstCaseDiagramDiagramDiagram form.TST_DIAGRAM_ID :' + form.TST_DIAGRAM_ID);
    if ( (form.TST_DIAGRAM_ID != "") &&   (typeof form.TST_DIAGRAM_ID != "undefined"))
    {
      this.masterKey = form.TST_DIAGRAM_ID;
      
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
    if ( (typeof form != "undefined") &&   (typeof form.TST_DIAGRAM_ID != "undefined") &&   (form.TST_DIAGRAM_ID != ""))
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
      this.Comp_Config.masterKeyArr =  [NewVal['TST_DIAGRAM_ID']];
      this.Comp_Config.masterKeyNameArr =  ["TST_DIAGRAM_ID"];
         
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
this.lookupArrDef =[];
 if (this.lookupArrDef.length > 0)
   this.starServices.fetchLookups(this, this.lookupArrDef);
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
      if (this.paramConfig.DEBUG_FLAG) console.log("TstCaseDiagramTstTstCaseDiagramDiagramDiagram ComponentConfig:", {...ComponentConfig});

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

    return;
}
if (type === "shapeBoundsChange") {
    const shape = event.item;
    const bounds = event.bounds;
    
    if (!shape || !bounds) return;
    
    const shapeId = shape.id;
    
    console.log(`🔍 checking:shapeBoundsChange:shapeId: ${shapeId}, bounds:`, bounds);
    
    // 🔑 Store the latest bounds, shape ID, and shape reference
    
    
    const shapeInSahpes =
      this.shapes.find(s => s.id === shapeId);

    shapeInSahpes.x = event.bounds.x;
    shapeInSahpes.y = event.bounds.y;
    shapeInSahpes.width = event.bounds.width;
    shapeInSahpes.height = event.bounds.height;

    console.log(`📦 Pending resize for ${shapeId}: (${bounds.x}, ${bounds.y}) ${bounds.width}x${bounds.height}`);
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



async WHEN_VALIDATE_ITEM_TST_DIAGRAM_ID(value) {

 this.FORM_TRIGGER_FAILURE = false ; 
 if (typeof this.form.controls['TST_DIAGRAM_ID'] != "undefined" ) 
      this.form.controls['TST_DIAGRAM_ID'].setErrors({invalid: true}); 
 // Code goes here 
 

 if ( this.FORM_TRIGGER_FAILURE == true) 
 return; 
 
 if (typeof this.form.controls['TST_DIAGRAM_ID'] != "undefined" ) 
     this.form.get('TST_DIAGRAM_ID').updateValueAndValidity();
 this.form.updateValueAndValidity(); 
 }

 async ON_CLICK_TST_DIAGRAM_ID(event){

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
    public drawDiagramFromDefinition(definition: DiagramDefinition, offsetX: number = 0, offsetY: number = 0): Group {
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
            stroke: shape.stroke ? { width: shape.stroke.width, color: shape.stroke.color } : undefined,
            fill: { color: shape.fill || "#fff" },
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
            stroke: shape.stroke ? { width: shape.stroke.width, color: shape.stroke.color } : undefined,
            fill: { color: shape.fill || "#fff" },
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
              color: line.stroke?.color || "#000",
              dashType: line.stroke?.dashType as any,
            },
            fill: { color: line.fill || "transparent" },
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
              color: line.stroke?.color || "#000",
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
          fill: text.fill || "#000",
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
    const dataItem = options.dataItem.dataItem;

    //if (dataItem.type === "boilerDiagram" && dataItem.definition)
    {
      // Draw the diagram with optional offset
      return this.drawDiagramFromDefinition(
        dataItem.definition,
        dataItem.offsetX || 0,
        dataItem.offsetY || 0
      );
    }

    return new Group();
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
public mapSampleData() {
    let OutRec = this.performMapperFrom(this.executeQueryresult.data);
    if (this.paramConfig.DEBUG_FLAG) console.log("OutRec:1:", OutRec)

    let dwg = JSON.parse(OutRec.DiagramData);
    if (this.paramConfig.DEBUG_FLAG) console.log("dwg:1:", dwg)

    this.shapes = dwg.shapes;
    this.connections = dwg.connections;
    this.editable = this.buildEditable();

    // Generate the JSON
const result = this.buildHierarchy(this.dbRows);
this.items=result;


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

public onItemSelectItem (event){
  console.log("event:",event)
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
  public diagramMenu = "TST_MENUS";
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
  
public add_new_shape(kendoui_content, type) {
    let newShape = {
      "id": "boilerA",
      "x": 80,
      "y": 80,
      "width": 400,
      "height": 420,
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
          "shapes": [

          ],
          "lines": [

          ]
        },
        "title": "Boiler A (Primary)"
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
    newShape.width = kendoui_content.width;
    newShape.height = kendoui_content.height;

    newShape.x = this.lastClickX;
    newShape.y = this.lastClickY;
    
    console.log("kendoui_content:newShape:", newShape);
    const options: ShapeOptions = {
      id: newShape.id,
      x: newShape.x,
      y: newShape.y,
      width: newShape.width,
      height: newShape.height,
      dataItem: newShape.dataItem,
      visual: (args) => {
        return this.drawDiagramFromDefinition(
          args.dataItem.definition
        );
      }
    };
    this.diagramComponent.addShape(options);
    this.shapes.push(newShape);
  }

  public popupVisible = false;

public popupLeft = 0;
public popupTop = 0;

public selectedPartId = "";
}


