import { Component, Input, Output, EventEmitter, HostListener } from '@angular/core';
import { FormGroup, FormControl, Validators ,FormBuilder} from '@angular/forms';
import { starServices } from 'starlib';
import { StarNotifyService } from '../../../services/starnotification.service';

import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';

import { Subscription } from 'rxjs';
import { IntlService } from "@progress/kendo-angular-intl";
import {  ViewEncapsulation } from "@angular/core";
import { Router } from '@angular/router';
import { TabAlignment } from '@progress/kendo-angular-layout';
import { scdopcuaServerDiagnosticScdOsrtdOpcuaServerDiagnostics , componentConfigDef} from '@modeldir/model';


 const createFormGroup = (dataItem:any) => new FormGroup({
'OPCUA_SERVER_DIAGNOSTIC_ID' : new FormControl(dataItem.OPCUA_SERVER_DIAGNOSTIC_ID  , ) ,
'OPCUA_SERVER_ID' : new FormControl(dataItem.OPCUA_SERVER_ID  ,   Validators.required ) ,
'SERVER_NAME' : new FormControl(dataItem.SERVER_NAME  , ) ,
'REQUESTED_GROUPS' : new FormControl(dataItem.REQUESTED_GROUPS  , ) ,
'MONITORED_TAGS' : new FormControl(dataItem.MONITORED_TAGS  , ) ,
'TAG_UPDATES_PER_SECOND' : new FormControl(dataItem.TAG_UPDATES_PER_SECOND  , ) ,
'BAD_QUALITY_TAGS' : new FormControl(dataItem.BAD_QUALITY_TAGS  , ) ,
'FAILED_ITEM_REQUESTS' : new FormControl(dataItem.FAILED_ITEM_REQUESTS  , ) ,
'TAG_REQUESTS' : new FormControl(dataItem.TAG_REQUESTS  , ) ,
'FAILED_TAG_REQUESTS' : new FormControl(dataItem.FAILED_TAG_REQUESTS  , ) ,
'ACTIVE_TAGS' : new FormControl(dataItem.ACTIVE_TAGS  , ) ,
'INACTIVE_TAGS' : new FormControl(dataItem.INACTIVE_TAGS  , ) ,
'ATTEMPTED_TAG_WRITES' : new FormControl(dataItem.ATTEMPTED_TAG_WRITES  , ) ,
'FAILED_TAG_WRITES' : new FormControl(dataItem.FAILED_TAG_WRITES  , ) ,
'TAGS_DETECTED' : new FormControl(dataItem.TAGS_DETECTED  , ) ,
'NODE_IDS_DETECTED' : new FormControl(dataItem.NODE_IDS_DETECTED  , ) ,
'COMMUNICATIONS_ERRORS' : new FormControl(dataItem.COMMUNICATIONS_ERRORS  , ) ,
'LONGEST_PROCESSING_TIME_MSEC' : new FormControl(dataItem.LONGEST_PROCESSING_TIME_MSEC  , ) ,
'SESSIONS' : new FormControl(dataItem.SESSIONS  , ) ,
'PERFORMANCE_WRITES_PER_SECOND' : new FormControl(dataItem.PERFORMANCE_WRITES_PER_SECOND  , ) ,
'PERFORMANCE_READS_PER_SECOND' : new FormControl(dataItem.PERFORMANCE_READS_PER_SECOND  , ) ,
'STARTUP_TIME_DATE' : new FormControl(dataItem.STARTUP_TIME_DATE  , ) ,
'CONFIGURED_ENDPOINTS' : new FormControl(dataItem.CONFIGURED_ENDPOINTS  , ) ,
'ACTIVE_ENDPOINTS' : new FormControl(dataItem.ACTIVE_ENDPOINTS  , ) ,
'FAILED_ENDPOINTS' : new FormControl(dataItem.FAILED_ENDPOINTS  , ) 
});

declare function getParamConfig():any;
@Component({
  selector: 'app-scd-osrtd-opcua-server-diagnostics',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './scd-osrtd-opcua-server-diagnostics.component.html',
  styleUrls: ['./scd-osrtd-opcua-server-diagnostics.component.scss'],
  standalone: false
})


export class ScdOpcuaServerDiagnosticScdOsrtdOpcuaServerDiagnosticsFormtabsComponent {
  public title =  this.starServices.getNLS([],"SCD_OSRTD_OPCUA_SERVER_DIAGNOSTICS.scdopcuaServerDiagnosticScdOsrtdOpcuaServerDiagnostics.component_title","OPCUA Server Diagnostics");
  public compTitleMsg =  "SCD_OSRTD_OPCUA_SERVER_DIAGNOSTICS.scdopcuaServerDiagnosticScdOsrtdOpcuaServerDiagnostics";
  public routineName = "ScdOpcuaServerDiagnosticScdOsrtdOpcuaServerDiagnosticsFormtabs";
  private insertCMD = "INSERT_SCD_OPCUA_SERVER_DIAGNOSTIC";
  private updateCMD = "UPDATE_SCD_OPCUA_SERVER_DIAGNOSTIC";
  private deleteCMD =   "DELETE_SCD_OPCUA_SERVER_DIAGNOSTIC";
  private getCMD = "GET_SCD_OPCUA_SERVER_DIAGNOSTIC_QUERY";

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
  public  isOPCUA_SERVER_IDEnable : boolean = true;

  public FORM_TRIGGER_FAILURE:any;
  public NOTFOUND:any;
  public disableEmitSave = false;
  public disableEmitReadCompleted = false;
  public children = ["any"];

  public action = "";
  private Body:any =[];
  public isNew!: boolean;
  public primarKeyReadOnlyArr = {isOPCUA_SERVER_DIAGNOSTIC_IDreadOnly : false};  
  public paramConfig;
  private masterKeyArr = [];
  private masterKeyNameArr = [];
  public  masterKey="";
  public masterKeyName ="OPCUA_SERVER_ID";
  public WhereClause = "";
  public OrderByClause = "";
  
  public formattedWhere:any = null;  
  public  submitted =  false;
  public masterParams:any;
  public alignment: TabAlignment = 'start';
  public isPhonePortrait = false;
  public compSelector = 'app-scd-osrtd-opcua-server-diagnostics';
  public PK_AUTO = 'OPCUA_SERVER_DIAGNOSTIC_ID';
  public customerFacing = false;
  public FormStepsArr = [{"CODE":"","CODETEXT_LANG":""},{"CODE":"1","CODETEXT_LANG":"OPC Subscriptions"},{"CODE":"2","CODETEXT_LANG":"Live Data"},{"CODE":"3","CODETEXT_LANG":"OPC Write Operations"},{"CODE":"4","CODETEXT_LANG":"OPC Server"},{"CODE":"5","CODETEXT_LANG":"Connector Service"}] ;
public labelOPCUA_SERVER_DIAGNOSTIC_IDTop=false;
public labelOPCUA_SERVER_DIAGNOSTIC_IDVisible=true;
public labelOPCUA_SERVER_IDTop=false;
public labelOPCUA_SERVER_IDVisible=true;
public labelSERVER_NAMETop=false;
public labelSERVER_NAMEVisible=true;
public labelREQUESTED_GROUPSTop=false;
public labelREQUESTED_GROUPSVisible=true;
public labelMONITORED_TAGSTop=false;
public labelMONITORED_TAGSVisible=true;
public labelTAG_UPDATES_PER_SECONDTop=false;
public labelTAG_UPDATES_PER_SECONDVisible=true;
public labelBAD_QUALITY_TAGSTop=false;
public labelBAD_QUALITY_TAGSVisible=true;
public labelFAILED_ITEM_REQUESTSTop=false;
public labelFAILED_ITEM_REQUESTSVisible=true;
public labelTAG_REQUESTSTop=false;
public labelTAG_REQUESTSVisible=true;
public labelFAILED_TAG_REQUESTSTop=false;
public labelFAILED_TAG_REQUESTSVisible=true;
public labelACTIVE_TAGSTop=false;
public labelACTIVE_TAGSVisible=true;
public labelINACTIVE_TAGSTop=false;
public labelINACTIVE_TAGSVisible=true;
public labelATTEMPTED_TAG_WRITESTop=false;
public labelATTEMPTED_TAG_WRITESVisible=true;
public labelFAILED_TAG_WRITESTop=false;
public labelFAILED_TAG_WRITESVisible=true;
public labelTAGS_DETECTEDTop=false;
public labelTAGS_DETECTEDVisible=true;
public labelNODE_IDS_DETECTEDTop=false;
public labelNODE_IDS_DETECTEDVisible=true;
public labelCOMMUNICATIONS_ERRORSTop=false;
public labelCOMMUNICATIONS_ERRORSVisible=true;
public labelLONGEST_PROCESSING_TIME_MSECTop=false;
public labelLONGEST_PROCESSING_TIME_MSECVisible=true;
public labelSESSIONSTop=false;
public labelSESSIONSVisible=true;
public labelPERFORMANCE_WRITES_PER_SECONDTop=false;
public labelPERFORMANCE_WRITES_PER_SECONDVisible=true;
public labelPERFORMANCE_READS_PER_SECONDTop=false;
public labelPERFORMANCE_READS_PER_SECONDVisible=true;
public labelSTARTUP_TIME_DATETop=false;
public labelSTARTUP_TIME_DATEVisible=true;
public labelCONFIGURED_ENDPOINTSTop=false;
public labelCONFIGURED_ENDPOINTSVisible=true;
public labelACTIVE_ENDPOINTSTop=false;
public labelACTIVE_ENDPOINTSVisible=true;
public labelFAILED_ENDPOINTSTop=false;
public labelFAILED_ENDPOINTSVisible=true;

public visibleOPCUA_SERVER_DIAGNOSTIC_ID = false;
public visibleOPCUA_SERVER_ID = false;
public visibleSERVER_NAME = true;
public visibleREQUESTED_GROUPS = true;
public visibleMONITORED_TAGS = true;
public visibleTAG_UPDATES_PER_SECOND = true;
public visibleBAD_QUALITY_TAGS = true;
public visibleFAILED_ITEM_REQUESTS = true;
public visibleTAG_REQUESTS = true;
public visibleFAILED_TAG_REQUESTS = true;
public visibleACTIVE_TAGS = true;
public visibleINACTIVE_TAGS = true;
public visibleATTEMPTED_TAG_WRITES = true;
public visibleFAILED_TAG_WRITES = true;
public visibleTAGS_DETECTED = true;
public visibleNODE_IDS_DETECTED = true;
public visibleCOMMUNICATIONS_ERRORS = true;
public visibleLONGEST_PROCESSING_TIME_MSEC = true;
public visibleSESSIONS = true;
public visiblePERFORMANCE_WRITES_PER_SECOND = true;
public visiblePERFORMANCE_READS_PER_SECOND = true;
public visibleSTARTUP_TIME_DATE = true;
public visibleCONFIGURED_ENDPOINTS = true;
public visibleACTIVE_ENDPOINTS = true;
public visibleFAILED_ENDPOINTS = true;

public disableOPCUA_SERVER_DIAGNOSTIC_ID = false;
public disableOPCUA_SERVER_ID = false;
public disableSERVER_NAME = false;
public disableREQUESTED_GROUPS = false;
public disableMONITORED_TAGS = false;
public disableTAG_UPDATES_PER_SECOND = false;
public disableBAD_QUALITY_TAGS = false;
public disableFAILED_ITEM_REQUESTS = false;
public disableTAG_REQUESTS = false;
public disableFAILED_TAG_REQUESTS = false;
public disableACTIVE_TAGS = false;
public disableINACTIVE_TAGS = false;
public disableATTEMPTED_TAG_WRITES = false;
public disableFAILED_TAG_WRITES = false;
public disableTAGS_DETECTED = false;
public disableNODE_IDS_DETECTED = false;
public disableCOMMUNICATIONS_ERRORS = false;
public disableLONGEST_PROCESSING_TIME_MSEC = false;
public disableSESSIONS = false;
public disablePERFORMANCE_WRITES_PER_SECOND = false;
public disablePERFORMANCE_READS_PER_SECOND = false;
public disableSTARTUP_TIME_DATE = false;
public disableCONFIGURED_ENDPOINTS = false;
public disableACTIVE_ENDPOINTS = false;
public disableFAILED_ENDPOINTS = false;


  
  //@Input()  
  public showToolBar = false;
  @Output() readCompletedOutput: EventEmitter<any> = new EventEmitter();
  @Output() clearCompletedOutput: EventEmitter<any> = new EventEmitter();
  @Output() saveCompletedOutput: EventEmitter<any> = new EventEmitter();
  @Output() formValidationChangedOutput: EventEmitter<boolean> = new EventEmitter();

   constructor(public router: Router,public intl: IntlService, public responsive: BreakpointObserver, private starNotify: StarNotifyService,   public starServices: starServices) {
      this.router = router;
      this.componentConfig = new componentConfigDef(); 
      this.paramConfig = getParamConfig();
      this.userLang =  this.paramConfig.userLang.toUpperCase() ;
      this.componentConfig.queryable  = false;
      this.componentConfig.navigable = false;
      this.componentConfig.insertable = false;
      this.componentConfig.removeable = false;
      this.componentConfig.updateable = false;       
      this.componentConfig.showToolBar = false;
    //  this.componentConfig.enabled = false;

  }
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
  }
  
  public ngOnDestroy(): void {
    // Unsubscribe the event once not needed.
    if (typeof this.componentConfigChangeEvent !== "undefined") this.componentConfigChangeEvent.unsubscribe();
 }

  callStarNotify(componentConfig:any) {
    componentConfig.eventFrom = this.compSelector;
    this.starNotify.sendEvent<componentConfigDef>('componentConfigDef', componentConfig);
  }

  private formInitialValues:any =   new scdopcuaServerDiagnosticScdOsrtdOpcuaServerDiagnostics();   
    @Input() public set detail_Input(form: any) {
       if (typeof form != "undefined"){
        this.isSearch = true;
        this.executeQuery(form);
        this.isChild = true;
      }
      /*
    if (this.paramConfig.DEBUG_FLAG) console.log('detail_Input ScdOpcuaServerDiagnosticScdOsrtdOpcuaServerDiagnosticsFormtabs form.OPCUA_SERVER_ID :' + form.OPCUA_SERVER_ID);
    if ( (form.OPCUA_SERVER_ID != "") &&   (typeof form.OPCUA_SERVER_ID != "undefined"))
    {
      this.masterKey = form.OPCUA_SERVER_ID;
      
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
    if ( (typeof form != "undefined") &&   (typeof form.OPCUA_SERVER_ID != "undefined") &&   (form.OPCUA_SERVER_ID != ""))
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

    setTimeout(() => {
       this.update_svgicons(data);
    });
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
      this.starServices.callltransformForTreeView(this);
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
      this.Comp_Config.masterKeyArr =  [NewVal['OPCUA_SERVER_DIAGNOSTIC_ID']];
      this.Comp_Config.masterKeyNameArr =  ["OPCUA_SERVER_DIAGNOSTIC_ID"];
         
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
this.lookupArrDef =[	{"statment":"SELECT OPCUA_SERVER_ID CODE, SERVER_NAME CODETEXT_LANG  FROM SCD_OPCUA_SERVER  order by CODETEXT_LANG ",
			"lkpArrName":"lkpArrOPCUA_SERVER_ID"}];
 if (this.lookupArrDef.length > 0)
   this.starServices.fetchLookups(this, this.lookupArrDef);
}

public lkpArrOPCUA_SERVER_ID = [];

public lkpArrGetOPCUA_SERVER_ID(CODE: any): any {
var rec = this.lkpArrOPCUA_SERVER_ID.find((x:any) => x.CODE === CODE);
return rec;
}

onChanges(): void {
this.form.get('OPCUA_SERVER_DIAGNOSTIC_ID').valueChanges.subscribe(val => {
});
this.form.get('SERVER_NAME').valueChanges.subscribe(val => {
});
this.form.get('REQUESTED_GROUPS').valueChanges.subscribe(val => {
});
this.form.get('MONITORED_TAGS').valueChanges.subscribe(val => {
});
this.form.get('TAG_UPDATES_PER_SECOND').valueChanges.subscribe(val => {
});
this.form.get('BAD_QUALITY_TAGS').valueChanges.subscribe(val => {
});
this.form.get('FAILED_ITEM_REQUESTS').valueChanges.subscribe(val => {
});
this.form.get('TAG_REQUESTS').valueChanges.subscribe(val => {
});
this.form.get('FAILED_TAG_REQUESTS').valueChanges.subscribe(val => {
});
this.form.get('ACTIVE_TAGS').valueChanges.subscribe(val => {
});
this.form.get('INACTIVE_TAGS').valueChanges.subscribe(val => {
});
this.form.get('ATTEMPTED_TAG_WRITES').valueChanges.subscribe(val => {
});
this.form.get('FAILED_TAG_WRITES').valueChanges.subscribe(val => {
});
this.form.get('TAGS_DETECTED').valueChanges.subscribe(val => {
});
this.form.get('NODE_IDS_DETECTED').valueChanges.subscribe(val => {
});
this.form.get('COMMUNICATIONS_ERRORS').valueChanges.subscribe(val => {
});
this.form.get('LONGEST_PROCESSING_TIME_MSEC').valueChanges.subscribe(val => {
});
this.form.get('SESSIONS').valueChanges.subscribe(val => {
});
this.form.get('PERFORMANCE_WRITES_PER_SECOND').valueChanges.subscribe(val => {
});
this.form.get('PERFORMANCE_READS_PER_SECOND').valueChanges.subscribe(val => {
});
this.form.get('CONFIGURED_ENDPOINTS').valueChanges.subscribe(val => {
});
this.form.get('ACTIVE_ENDPOINTS').valueChanges.subscribe(val => {
});
this.form.get('FAILED_ENDPOINTS').valueChanges.subscribe(val => {
});
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
      if (this.paramConfig.DEBUG_FLAG) console.log("ScdOpcuaServerDiagnosticScdOsrtdOpcuaServerDiagnosticsFormtabs ComponentConfig:", {...ComponentConfig});

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



async WHEN_VALIDATE_ITEM_OPCUA_SERVER_DIAGNOSTIC_ID(value) {

 this.FORM_TRIGGER_FAILURE = false ; 
 if (typeof this.form.controls['OPCUA_SERVER_DIAGNOSTIC_ID'] != "undefined" ) 
      this.form.controls['OPCUA_SERVER_DIAGNOSTIC_ID'].setErrors({invalid: true}); 
 // Code goes here 
 

 if ( this.FORM_TRIGGER_FAILURE == true) 
 return; 
 
 if (typeof this.form.controls['OPCUA_SERVER_DIAGNOSTIC_ID'] != "undefined" ) 
     this.form.get('OPCUA_SERVER_DIAGNOSTIC_ID').updateValueAndValidity();
 this.form.updateValueAndValidity(); 
 }

 async ON_CLICK_OPCUA_SERVER_DIAGNOSTIC_ID(event){

}

async WHEN_VALIDATE_ITEM_OPCUA_SERVER_ID(value) {

 this.FORM_TRIGGER_FAILURE = false ; 
 if (typeof this.form.controls['OPCUA_SERVER_ID'] != "undefined" ) 
      this.form.controls['OPCUA_SERVER_ID'].setErrors({invalid: true}); 
 // Code goes here 
 

 if ( this.FORM_TRIGGER_FAILURE == true) 
 return; 
 
 if (typeof this.form.controls['OPCUA_SERVER_ID'] != "undefined" ) 
     this.form.get('OPCUA_SERVER_ID').updateValueAndValidity();
 this.form.updateValueAndValidity(); 
 }

 async ON_CLICK_OPCUA_SERVER_ID(event){

}

async WHEN_VALIDATE_ITEM_SERVER_NAME(value) {

 this.FORM_TRIGGER_FAILURE = false ; 
 if (typeof this.form.controls['SERVER_NAME'] != "undefined" ) 
      this.form.controls['SERVER_NAME'].setErrors({invalid: true}); 
 // Code goes here 
 

 if ( this.FORM_TRIGGER_FAILURE == true) 
 return; 
 
 if (typeof this.form.controls['SERVER_NAME'] != "undefined" ) 
     this.form.get('SERVER_NAME').updateValueAndValidity();
 this.form.updateValueAndValidity(); 
 }

 async ON_CLICK_SERVER_NAME(event){

}

async WHEN_VALIDATE_ITEM_REQUESTED_GROUPS(value) {

 this.FORM_TRIGGER_FAILURE = false ; 
 if (typeof this.form.controls['REQUESTED_GROUPS'] != "undefined" ) 
      this.form.controls['REQUESTED_GROUPS'].setErrors({invalid: true}); 
 // Code goes here 
 

 if ( this.FORM_TRIGGER_FAILURE == true) 
 return; 
 
 if (typeof this.form.controls['REQUESTED_GROUPS'] != "undefined" ) 
     this.form.get('REQUESTED_GROUPS').updateValueAndValidity();
 this.form.updateValueAndValidity(); 
 }

 async ON_CLICK_REQUESTED_GROUPS(event){

}

async WHEN_VALIDATE_ITEM_MONITORED_TAGS(value) {

 this.FORM_TRIGGER_FAILURE = false ; 
 if (typeof this.form.controls['MONITORED_TAGS'] != "undefined" ) 
      this.form.controls['MONITORED_TAGS'].setErrors({invalid: true}); 
 // Code goes here 
 

 if ( this.FORM_TRIGGER_FAILURE == true) 
 return; 
 
 if (typeof this.form.controls['MONITORED_TAGS'] != "undefined" ) 
     this.form.get('MONITORED_TAGS').updateValueAndValidity();
 this.form.updateValueAndValidity(); 
 }

 async ON_CLICK_MONITORED_TAGS(event){

}

async WHEN_VALIDATE_ITEM_TAG_UPDATES_PER_SECOND(value) {

 this.FORM_TRIGGER_FAILURE = false ; 
 if (typeof this.form.controls['TAG_UPDATES_PER_SECOND'] != "undefined" ) 
      this.form.controls['TAG_UPDATES_PER_SECOND'].setErrors({invalid: true}); 
 // Code goes here 
 

 if ( this.FORM_TRIGGER_FAILURE == true) 
 return; 
 
 if (typeof this.form.controls['TAG_UPDATES_PER_SECOND'] != "undefined" ) 
     this.form.get('TAG_UPDATES_PER_SECOND').updateValueAndValidity();
 this.form.updateValueAndValidity(); 
 }

 async ON_CLICK_TAG_UPDATES_PER_SECOND(event){

}

async WHEN_VALIDATE_ITEM_BAD_QUALITY_TAGS(value) {

 this.FORM_TRIGGER_FAILURE = false ; 
 if (typeof this.form.controls['BAD_QUALITY_TAGS'] != "undefined" ) 
      this.form.controls['BAD_QUALITY_TAGS'].setErrors({invalid: true}); 
 // Code goes here 
 

 if ( this.FORM_TRIGGER_FAILURE == true) 
 return; 
 
 if (typeof this.form.controls['BAD_QUALITY_TAGS'] != "undefined" ) 
     this.form.get('BAD_QUALITY_TAGS').updateValueAndValidity();
 this.form.updateValueAndValidity(); 
 }

 async ON_CLICK_BAD_QUALITY_TAGS(event){

}

async WHEN_VALIDATE_ITEM_FAILED_ITEM_REQUESTS(value) {

 this.FORM_TRIGGER_FAILURE = false ; 
 if (typeof this.form.controls['FAILED_ITEM_REQUESTS'] != "undefined" ) 
      this.form.controls['FAILED_ITEM_REQUESTS'].setErrors({invalid: true}); 
 // Code goes here 
 

 if ( this.FORM_TRIGGER_FAILURE == true) 
 return; 
 
 if (typeof this.form.controls['FAILED_ITEM_REQUESTS'] != "undefined" ) 
     this.form.get('FAILED_ITEM_REQUESTS').updateValueAndValidity();
 this.form.updateValueAndValidity(); 
 }

 async ON_CLICK_FAILED_ITEM_REQUESTS(event){

}

async WHEN_VALIDATE_ITEM_TAG_REQUESTS(value) {

 this.FORM_TRIGGER_FAILURE = false ; 
 if (typeof this.form.controls['TAG_REQUESTS'] != "undefined" ) 
      this.form.controls['TAG_REQUESTS'].setErrors({invalid: true}); 
 // Code goes here 
 

 if ( this.FORM_TRIGGER_FAILURE == true) 
 return; 
 
 if (typeof this.form.controls['TAG_REQUESTS'] != "undefined" ) 
     this.form.get('TAG_REQUESTS').updateValueAndValidity();
 this.form.updateValueAndValidity(); 
 }

 async ON_CLICK_TAG_REQUESTS(event){

}

async WHEN_VALIDATE_ITEM_FAILED_TAG_REQUESTS(value) {

 this.FORM_TRIGGER_FAILURE = false ; 
 if (typeof this.form.controls['FAILED_TAG_REQUESTS'] != "undefined" ) 
      this.form.controls['FAILED_TAG_REQUESTS'].setErrors({invalid: true}); 
 // Code goes here 
 

 if ( this.FORM_TRIGGER_FAILURE == true) 
 return; 
 
 if (typeof this.form.controls['FAILED_TAG_REQUESTS'] != "undefined" ) 
     this.form.get('FAILED_TAG_REQUESTS').updateValueAndValidity();
 this.form.updateValueAndValidity(); 
 }

 async ON_CLICK_FAILED_TAG_REQUESTS(event){

}

async WHEN_VALIDATE_ITEM_ACTIVE_TAGS(value) {

 this.FORM_TRIGGER_FAILURE = false ; 
 if (typeof this.form.controls['ACTIVE_TAGS'] != "undefined" ) 
      this.form.controls['ACTIVE_TAGS'].setErrors({invalid: true}); 
 // Code goes here 
 

 if ( this.FORM_TRIGGER_FAILURE == true) 
 return; 
 
 if (typeof this.form.controls['ACTIVE_TAGS'] != "undefined" ) 
     this.form.get('ACTIVE_TAGS').updateValueAndValidity();
 this.form.updateValueAndValidity(); 
 }

 async ON_CLICK_ACTIVE_TAGS(event){

}

async WHEN_VALIDATE_ITEM_INACTIVE_TAGS(value) {

 this.FORM_TRIGGER_FAILURE = false ; 
 if (typeof this.form.controls['INACTIVE_TAGS'] != "undefined" ) 
      this.form.controls['INACTIVE_TAGS'].setErrors({invalid: true}); 
 // Code goes here 
 

 if ( this.FORM_TRIGGER_FAILURE == true) 
 return; 
 
 if (typeof this.form.controls['INACTIVE_TAGS'] != "undefined" ) 
     this.form.get('INACTIVE_TAGS').updateValueAndValidity();
 this.form.updateValueAndValidity(); 
 }

 async ON_CLICK_INACTIVE_TAGS(event){

}

async WHEN_VALIDATE_ITEM_ATTEMPTED_TAG_WRITES(value) {

 this.FORM_TRIGGER_FAILURE = false ; 
 if (typeof this.form.controls['ATTEMPTED_TAG_WRITES'] != "undefined" ) 
      this.form.controls['ATTEMPTED_TAG_WRITES'].setErrors({invalid: true}); 
 // Code goes here 
 

 if ( this.FORM_TRIGGER_FAILURE == true) 
 return; 
 
 if (typeof this.form.controls['ATTEMPTED_TAG_WRITES'] != "undefined" ) 
     this.form.get('ATTEMPTED_TAG_WRITES').updateValueAndValidity();
 this.form.updateValueAndValidity(); 
 }

 async ON_CLICK_ATTEMPTED_TAG_WRITES(event){

}

async WHEN_VALIDATE_ITEM_FAILED_TAG_WRITES(value) {

 this.FORM_TRIGGER_FAILURE = false ; 
 if (typeof this.form.controls['FAILED_TAG_WRITES'] != "undefined" ) 
      this.form.controls['FAILED_TAG_WRITES'].setErrors({invalid: true}); 
 // Code goes here 
 

 if ( this.FORM_TRIGGER_FAILURE == true) 
 return; 
 
 if (typeof this.form.controls['FAILED_TAG_WRITES'] != "undefined" ) 
     this.form.get('FAILED_TAG_WRITES').updateValueAndValidity();
 this.form.updateValueAndValidity(); 
 }

 async ON_CLICK_FAILED_TAG_WRITES(event){

}

async WHEN_VALIDATE_ITEM_TAGS_DETECTED(value) {

 this.FORM_TRIGGER_FAILURE = false ; 
 if (typeof this.form.controls['TAGS_DETECTED'] != "undefined" ) 
      this.form.controls['TAGS_DETECTED'].setErrors({invalid: true}); 
 // Code goes here 
 

 if ( this.FORM_TRIGGER_FAILURE == true) 
 return; 
 
 if (typeof this.form.controls['TAGS_DETECTED'] != "undefined" ) 
     this.form.get('TAGS_DETECTED').updateValueAndValidity();
 this.form.updateValueAndValidity(); 
 }

 async ON_CLICK_TAGS_DETECTED(event){

}

async WHEN_VALIDATE_ITEM_NODE_IDS_DETECTED(value) {

 this.FORM_TRIGGER_FAILURE = false ; 
 if (typeof this.form.controls['NODE_IDS_DETECTED'] != "undefined" ) 
      this.form.controls['NODE_IDS_DETECTED'].setErrors({invalid: true}); 
 // Code goes here 
 

 if ( this.FORM_TRIGGER_FAILURE == true) 
 return; 
 
 if (typeof this.form.controls['NODE_IDS_DETECTED'] != "undefined" ) 
     this.form.get('NODE_IDS_DETECTED').updateValueAndValidity();
 this.form.updateValueAndValidity(); 
 }

 async ON_CLICK_NODE_IDS_DETECTED(event){

}

async WHEN_VALIDATE_ITEM_COMMUNICATIONS_ERRORS(value) {

 this.FORM_TRIGGER_FAILURE = false ; 
 if (typeof this.form.controls['COMMUNICATIONS_ERRORS'] != "undefined" ) 
      this.form.controls['COMMUNICATIONS_ERRORS'].setErrors({invalid: true}); 
 // Code goes here 
 

 if ( this.FORM_TRIGGER_FAILURE == true) 
 return; 
 
 if (typeof this.form.controls['COMMUNICATIONS_ERRORS'] != "undefined" ) 
     this.form.get('COMMUNICATIONS_ERRORS').updateValueAndValidity();
 this.form.updateValueAndValidity(); 
 }

 async ON_CLICK_COMMUNICATIONS_ERRORS(event){

}

async WHEN_VALIDATE_ITEM_LONGEST_PROCESSING_TIME_MSEC(value) {

 this.FORM_TRIGGER_FAILURE = false ; 
 if (typeof this.form.controls['LONGEST_PROCESSING_TIME_MSEC'] != "undefined" ) 
      this.form.controls['LONGEST_PROCESSING_TIME_MSEC'].setErrors({invalid: true}); 
 // Code goes here 
 

 if ( this.FORM_TRIGGER_FAILURE == true) 
 return; 
 
 if (typeof this.form.controls['LONGEST_PROCESSING_TIME_MSEC'] != "undefined" ) 
     this.form.get('LONGEST_PROCESSING_TIME_MSEC').updateValueAndValidity();
 this.form.updateValueAndValidity(); 
 }

 async ON_CLICK_LONGEST_PROCESSING_TIME_MSEC(event){

}

async WHEN_VALIDATE_ITEM_SESSIONS(value) {

 this.FORM_TRIGGER_FAILURE = false ; 
 if (typeof this.form.controls['SESSIONS'] != "undefined" ) 
      this.form.controls['SESSIONS'].setErrors({invalid: true}); 
 // Code goes here 
 

 if ( this.FORM_TRIGGER_FAILURE == true) 
 return; 
 
 if (typeof this.form.controls['SESSIONS'] != "undefined" ) 
     this.form.get('SESSIONS').updateValueAndValidity();
 this.form.updateValueAndValidity(); 
 }

 async ON_CLICK_SESSIONS(event){

}

async WHEN_VALIDATE_ITEM_PERFORMANCE_WRITES_PER_SECOND(value) {

 this.FORM_TRIGGER_FAILURE = false ; 
 if (typeof this.form.controls['PERFORMANCE_WRITES_PER_SECOND'] != "undefined" ) 
      this.form.controls['PERFORMANCE_WRITES_PER_SECOND'].setErrors({invalid: true}); 
 // Code goes here 
 

 if ( this.FORM_TRIGGER_FAILURE == true) 
 return; 
 
 if (typeof this.form.controls['PERFORMANCE_WRITES_PER_SECOND'] != "undefined" ) 
     this.form.get('PERFORMANCE_WRITES_PER_SECOND').updateValueAndValidity();
 this.form.updateValueAndValidity(); 
 }

 async ON_CLICK_PERFORMANCE_WRITES_PER_SECOND(event){

}

async WHEN_VALIDATE_ITEM_PERFORMANCE_READS_PER_SECOND(value) {

 this.FORM_TRIGGER_FAILURE = false ; 
 if (typeof this.form.controls['PERFORMANCE_READS_PER_SECOND'] != "undefined" ) 
      this.form.controls['PERFORMANCE_READS_PER_SECOND'].setErrors({invalid: true}); 
 // Code goes here 
 

 if ( this.FORM_TRIGGER_FAILURE == true) 
 return; 
 
 if (typeof this.form.controls['PERFORMANCE_READS_PER_SECOND'] != "undefined" ) 
     this.form.get('PERFORMANCE_READS_PER_SECOND').updateValueAndValidity();
 this.form.updateValueAndValidity(); 
 }

 async ON_CLICK_PERFORMANCE_READS_PER_SECOND(event){

}

async WHEN_VALIDATE_ITEM_STARTUP_TIME_DATE(value) {

 this.FORM_TRIGGER_FAILURE = false ; 
 if (typeof this.form.controls['STARTUP_TIME_DATE'] != "undefined" ) 
      this.form.controls['STARTUP_TIME_DATE'].setErrors({invalid: true}); 
 // Code goes here 
 

 if ( this.FORM_TRIGGER_FAILURE == true) 
 return; 
 
 if (typeof this.form.controls['STARTUP_TIME_DATE'] != "undefined" ) 
     this.form.get('STARTUP_TIME_DATE').updateValueAndValidity();
 this.form.updateValueAndValidity(); 
 }

 async ON_CLICK_STARTUP_TIME_DATE(event){

}

async WHEN_VALIDATE_ITEM_CONFIGURED_ENDPOINTS(value) {

 this.FORM_TRIGGER_FAILURE = false ; 
 if (typeof this.form.controls['CONFIGURED_ENDPOINTS'] != "undefined" ) 
      this.form.controls['CONFIGURED_ENDPOINTS'].setErrors({invalid: true}); 
 // Code goes here 
 

 if ( this.FORM_TRIGGER_FAILURE == true) 
 return; 
 
 if (typeof this.form.controls['CONFIGURED_ENDPOINTS'] != "undefined" ) 
     this.form.get('CONFIGURED_ENDPOINTS').updateValueAndValidity();
 this.form.updateValueAndValidity(); 
 }

 async ON_CLICK_CONFIGURED_ENDPOINTS(event){

}

async WHEN_VALIDATE_ITEM_ACTIVE_ENDPOINTS(value) {

 this.FORM_TRIGGER_FAILURE = false ; 
 if (typeof this.form.controls['ACTIVE_ENDPOINTS'] != "undefined" ) 
      this.form.controls['ACTIVE_ENDPOINTS'].setErrors({invalid: true}); 
 // Code goes here 
 

 if ( this.FORM_TRIGGER_FAILURE == true) 
 return; 
 
 if (typeof this.form.controls['ACTIVE_ENDPOINTS'] != "undefined" ) 
     this.form.get('ACTIVE_ENDPOINTS').updateValueAndValidity();
 this.form.updateValueAndValidity(); 
 }

 async ON_CLICK_ACTIVE_ENDPOINTS(event){

}

async WHEN_VALIDATE_ITEM_FAILED_ENDPOINTS(value) {

 this.FORM_TRIGGER_FAILURE = false ; 
 if (typeof this.form.controls['FAILED_ENDPOINTS'] != "undefined" ) 
      this.form.controls['FAILED_ENDPOINTS'].setErrors({invalid: true}); 
 // Code goes here 
 

 if ( this.FORM_TRIGGER_FAILURE == true) 
 return; 
 
 if (typeof this.form.controls['FAILED_ENDPOINTS'] != "undefined" ) 
     this.form.get('FAILED_ENDPOINTS').updateValueAndValidity();
 this.form.updateValueAndValidity(); 
 }

 async ON_CLICK_FAILED_ENDPOINTS(event){

}
 
 async onChange_OPCUA_SERVER_DIAGNOSTIC_ID(event:any) { 
 var value = event.target.value; 
 if ((value == null) || (value == '')) 	
 	return;  
    this.FORM_TRIGGER_FAILURE = false;	
 await   this.WHEN_VALIDATE_ITEM_OPCUA_SERVER_DIAGNOSTIC_ID(value); if ( this.FORM_TRIGGER_FAILURE) return; 
 this.formValidationChangedOutput.emit(this.form.valid); 
  
 } 
 async onValueChange_OPCUA_SERVER_ID(value) { 
  this.FORM_TRIGGER_FAILURE = false;	
 await this.WHEN_VALIDATE_ITEM_OPCUA_SERVER_ID(value); if ( this.FORM_TRIGGER_FAILURE) return; 
 this.formValidationChangedOutput.emit(this.form.valid); 
  
  } 
 async onChange_SERVER_NAME(event:any) { 
 var value = event.target.value; 
 if ((value == null) || (value == '')) 	
 	return;  
    this.FORM_TRIGGER_FAILURE = false;	
 await   this.WHEN_VALIDATE_ITEM_SERVER_NAME(value); if ( this.FORM_TRIGGER_FAILURE) return; 
 this.formValidationChangedOutput.emit(this.form.valid); 
  
 } 
 async onChange_REQUESTED_GROUPS(event:any) { 
 var value = event.target.value; 
 if ((value == null) || (value == '')) 	
 	return;  
    this.FORM_TRIGGER_FAILURE = false;	
 await   this.WHEN_VALIDATE_ITEM_REQUESTED_GROUPS(value); if ( this.FORM_TRIGGER_FAILURE) return; 
 this.formValidationChangedOutput.emit(this.form.valid); 
  
 } 
 async onChange_MONITORED_TAGS(event:any) { 
 var value = event.target.value; 
 if ((value == null) || (value == '')) 	
 	return;  
    this.FORM_TRIGGER_FAILURE = false;	
 await   this.WHEN_VALIDATE_ITEM_MONITORED_TAGS(value); if ( this.FORM_TRIGGER_FAILURE) return; 
 this.formValidationChangedOutput.emit(this.form.valid); 
  
 } 
 async onChange_TAG_UPDATES_PER_SECOND(event:any) { 
 var value = event.target.value; 
 if ((value == null) || (value == '')) 	
 	return;  
    this.FORM_TRIGGER_FAILURE = false;	
 await   this.WHEN_VALIDATE_ITEM_TAG_UPDATES_PER_SECOND(value); if ( this.FORM_TRIGGER_FAILURE) return; 
 this.formValidationChangedOutput.emit(this.form.valid); 
  
 } 
 async onChange_BAD_QUALITY_TAGS(event:any) { 
 var value = event.target.value; 
 if ((value == null) || (value == '')) 	
 	return;  
    this.FORM_TRIGGER_FAILURE = false;	
 await   this.WHEN_VALIDATE_ITEM_BAD_QUALITY_TAGS(value); if ( this.FORM_TRIGGER_FAILURE) return; 
 this.formValidationChangedOutput.emit(this.form.valid); 
  
 } 
 async onChange_FAILED_ITEM_REQUESTS(event:any) { 
 var value = event.target.value; 
 if ((value == null) || (value == '')) 	
 	return;  
    this.FORM_TRIGGER_FAILURE = false;	
 await   this.WHEN_VALIDATE_ITEM_FAILED_ITEM_REQUESTS(value); if ( this.FORM_TRIGGER_FAILURE) return; 
 this.formValidationChangedOutput.emit(this.form.valid); 
  
 } 
 async onChange_TAG_REQUESTS(event:any) { 
 var value = event.target.value; 
 if ((value == null) || (value == '')) 	
 	return;  
    this.FORM_TRIGGER_FAILURE = false;	
 await   this.WHEN_VALIDATE_ITEM_TAG_REQUESTS(value); if ( this.FORM_TRIGGER_FAILURE) return; 
 this.formValidationChangedOutput.emit(this.form.valid); 
  
 } 
 async onChange_FAILED_TAG_REQUESTS(event:any) { 
 var value = event.target.value; 
 if ((value == null) || (value == '')) 	
 	return;  
    this.FORM_TRIGGER_FAILURE = false;	
 await   this.WHEN_VALIDATE_ITEM_FAILED_TAG_REQUESTS(value); if ( this.FORM_TRIGGER_FAILURE) return; 
 this.formValidationChangedOutput.emit(this.form.valid); 
  
 } 
 async onChange_ACTIVE_TAGS(event:any) { 
 var value = event.target.value; 
 if ((value == null) || (value == '')) 	
 	return;  
    this.FORM_TRIGGER_FAILURE = false;	
 await   this.WHEN_VALIDATE_ITEM_ACTIVE_TAGS(value); if ( this.FORM_TRIGGER_FAILURE) return; 
 this.formValidationChangedOutput.emit(this.form.valid); 
  
 } 
 async onChange_INACTIVE_TAGS(event:any) { 
 var value = event.target.value; 
 if ((value == null) || (value == '')) 	
 	return;  
    this.FORM_TRIGGER_FAILURE = false;	
 await   this.WHEN_VALIDATE_ITEM_INACTIVE_TAGS(value); if ( this.FORM_TRIGGER_FAILURE) return; 
 this.formValidationChangedOutput.emit(this.form.valid); 
  
 } 
 async onChange_ATTEMPTED_TAG_WRITES(event:any) { 
 var value = event.target.value; 
 if ((value == null) || (value == '')) 	
 	return;  
    this.FORM_TRIGGER_FAILURE = false;	
 await   this.WHEN_VALIDATE_ITEM_ATTEMPTED_TAG_WRITES(value); if ( this.FORM_TRIGGER_FAILURE) return; 
 this.formValidationChangedOutput.emit(this.form.valid); 
  
 } 
 async onChange_FAILED_TAG_WRITES(event:any) { 
 var value = event.target.value; 
 if ((value == null) || (value == '')) 	
 	return;  
    this.FORM_TRIGGER_FAILURE = false;	
 await   this.WHEN_VALIDATE_ITEM_FAILED_TAG_WRITES(value); if ( this.FORM_TRIGGER_FAILURE) return; 
 this.formValidationChangedOutput.emit(this.form.valid); 
  
 } 
 async onChange_TAGS_DETECTED(event:any) { 
 var value = event.target.value; 
 if ((value == null) || (value == '')) 	
 	return;  
    this.FORM_TRIGGER_FAILURE = false;	
 await   this.WHEN_VALIDATE_ITEM_TAGS_DETECTED(value); if ( this.FORM_TRIGGER_FAILURE) return; 
 this.formValidationChangedOutput.emit(this.form.valid); 
  
 } 
 async onChange_NODE_IDS_DETECTED(event:any) { 
 var value = event.target.value; 
 if ((value == null) || (value == '')) 	
 	return;  
    this.FORM_TRIGGER_FAILURE = false;	
 await   this.WHEN_VALIDATE_ITEM_NODE_IDS_DETECTED(value); if ( this.FORM_TRIGGER_FAILURE) return; 
 this.formValidationChangedOutput.emit(this.form.valid); 
  
 } 
 async onChange_COMMUNICATIONS_ERRORS(event:any) { 
 var value = event.target.value; 
 if ((value == null) || (value == '')) 	
 	return;  
    this.FORM_TRIGGER_FAILURE = false;	
 await   this.WHEN_VALIDATE_ITEM_COMMUNICATIONS_ERRORS(value); if ( this.FORM_TRIGGER_FAILURE) return; 
 this.formValidationChangedOutput.emit(this.form.valid); 
  
 } 
 async onChange_LONGEST_PROCESSING_TIME_MSEC(event:any) { 
 var value = event.target.value; 
 if ((value == null) || (value == '')) 	
 	return;  
    this.FORM_TRIGGER_FAILURE = false;	
 await   this.WHEN_VALIDATE_ITEM_LONGEST_PROCESSING_TIME_MSEC(value); if ( this.FORM_TRIGGER_FAILURE) return; 
 this.formValidationChangedOutput.emit(this.form.valid); 
  
 } 
 async onChange_SESSIONS(event:any) { 
 var value = event.target.value; 
 if ((value == null) || (value == '')) 	
 	return;  
    this.FORM_TRIGGER_FAILURE = false;	
 await   this.WHEN_VALIDATE_ITEM_SESSIONS(value); if ( this.FORM_TRIGGER_FAILURE) return; 
 this.formValidationChangedOutput.emit(this.form.valid); 
  
 } 
 async onChange_PERFORMANCE_WRITES_PER_SECOND(event:any) { 
 var value = event.target.value; 
 if ((value == null) || (value == '')) 	
 	return;  
    this.FORM_TRIGGER_FAILURE = false;	
 await   this.WHEN_VALIDATE_ITEM_PERFORMANCE_WRITES_PER_SECOND(value); if ( this.FORM_TRIGGER_FAILURE) return; 
 this.formValidationChangedOutput.emit(this.form.valid); 
  
 } 
 async onChange_PERFORMANCE_READS_PER_SECOND(event:any) { 
 var value = event.target.value; 
 if ((value == null) || (value == '')) 	
 	return;  
    this.FORM_TRIGGER_FAILURE = false;	
 await   this.WHEN_VALIDATE_ITEM_PERFORMANCE_READS_PER_SECOND(value); if ( this.FORM_TRIGGER_FAILURE) return; 
 this.formValidationChangedOutput.emit(this.form.valid); 
  
 } 
 async onValueChange_STARTUP_TIME_DATE(value) { 
  this.FORM_TRIGGER_FAILURE = false;	
 await this.WHEN_VALIDATE_ITEM_STARTUP_TIME_DATE(value); if ( this.FORM_TRIGGER_FAILURE) return; 
 this.formValidationChangedOutput.emit(this.form.valid); 
  
  } 
 async onChange_CONFIGURED_ENDPOINTS(event:any) { 
 var value = event.target.value; 
 if ((value == null) || (value == '')) 	
 	return;  
    this.FORM_TRIGGER_FAILURE = false;	
 await   this.WHEN_VALIDATE_ITEM_CONFIGURED_ENDPOINTS(value); if ( this.FORM_TRIGGER_FAILURE) return; 
 this.formValidationChangedOutput.emit(this.form.valid); 
  
 } 
 async onChange_ACTIVE_ENDPOINTS(event:any) { 
 var value = event.target.value; 
 if ((value == null) || (value == '')) 	
 	return;  
    this.FORM_TRIGGER_FAILURE = false;	
 await   this.WHEN_VALIDATE_ITEM_ACTIVE_ENDPOINTS(value); if ( this.FORM_TRIGGER_FAILURE) return; 
 this.formValidationChangedOutput.emit(this.form.valid); 
  
 } 
 async onChange_FAILED_ENDPOINTS(event:any) { 
 var value = event.target.value; 
 if ((value == null) || (value == '')) 	
 	return;  
    this.FORM_TRIGGER_FAILURE = false;	
 await   this.WHEN_VALIDATE_ITEM_FAILED_ENDPOINTS(value); if ( this.FORM_TRIGGER_FAILURE) return; 
 this.formValidationChangedOutput.emit(this.form.valid); 
  
 }

// For Adding new CODE
  public  grid_som_tabs_codes={};
  public SOM_TABS_CODESConfig!: componentConfigDef;
  public filterCode!: string;
  public showCodeDetails:boolean=false;

// For Attachments and images and svg
public myFiles = [[]];
public filesDeleted = [[]];
public img_gallery = [[]];
public DSP_UPLOADConfig!: componentConfigDef;
public DSP_WEBCAMConfig!: componentConfigDef;
public att_arr = [];
public img_arr = [];
public multiselect_arr = [];
public multiselect_tree_arr = [];
public AttDwnUrl = "";
public uploadimage = false;
public showIcon=true;
public svg_arr = [];
public svg_data = [];

public update_svgicons(formGroup){
  this.showIcon = false;
    for (let i = 0; i < this.svg_arr.length; i++) {
      this.starServices.convertSvgToKendoIcon(this, formGroup[this.svg_arr[i]], formGroup.svg_name,this.svg_arr[i])
      
    }
    
    setTimeout(() => {
      this.showIcon = true;
    });
}
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

}


