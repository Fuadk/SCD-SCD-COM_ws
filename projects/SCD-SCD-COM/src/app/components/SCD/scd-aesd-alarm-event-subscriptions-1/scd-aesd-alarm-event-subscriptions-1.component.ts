import { Component, Input, Output, EventEmitter, HostListener } from '@angular/core';
import { FormGroup, FormControl, Validators ,FormBuilder} from '@angular/forms';
import { starServices } from 'starlib';
import { Starlib1 } from '../../Starlib1';
import { StarNotifyService } from '../../../services/starnotification.service';

import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';

import { Subscription } from 'rxjs';
import { IntlService } from "@progress/kendo-angular-intl";
import {  ViewEncapsulation } from "@angular/core";
import { Router } from '@angular/router';
import { TabAlignment } from '@progress/kendo-angular-layout';
import { scdalarmEventSubscriptionsScdAesdAlarmEventSubscriptions1 , componentConfigDef} from '@modeldir/model';


 const createFormGroup = (dataItem:any) => new FormGroup({
'EVENT_ID' : new FormControl(dataItem.EVENT_ID  , ) ,
'EVENT_NAME' : new FormControl(dataItem.EVENT_NAME  , ) ,
'APP_ID' : new FormControl(dataItem.APP_ID  ,   Validators.required ) ,
'PRIORITY' : new FormControl(dataItem.PRIORITY  , ) ,
'DISPLAY_ID' : new FormControl(dataItem.DISPLAY_ID  ,   Validators.required ) ,
'URGENT' : new FormControl(dataItem.URGENT  , ) ,
'SHAPE_ID' : new FormControl(dataItem.SHAPE_ID  ,   Validators.required ) ,
'HIGH' : new FormControl(dataItem.HIGH  , ) ,
'MEDIUM' : new FormControl(dataItem.MEDIUM  , ) ,
'LOW' : new FormControl(dataItem.LOW  , ) ,
'EVENT' : new FormControl(dataItem.EVENT  , ) ,
'SCOPES' : new FormControl(dataItem.SCOPES  , ) ,
'EVENT_SOURCE' : new FormControl(dataItem.EVENT_SOURCE  , ) 
});

declare function getParamConfig():any;
@Component({
  selector: 'app-scd-aesd-alarm-event-subscriptions-1',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './scd-aesd-alarm-event-subscriptions-1.component.html',
  styleUrls: ['./scd-aesd-alarm-event-subscriptions-1.component.scss'],
  standalone: false
})


export class ScdAlarmEventSubscriptionsScdAesdAlarmEventSubscriptions1FormdivsComponent {
  public title =  this.starServices.getNLS([],"SCD_AESD_ALARM_EVENT_SUBSCRIPTIONS_1.scdalarmEventSubscriptionsScdAesdAlarmEventSubscriptions1.component_title","Alarm Event Subscriptions Def");
  public compTitleMsg =  "SCD_AESD_ALARM_EVENT_SUBSCRIPTIONS_1.scdalarmEventSubscriptionsScdAesdAlarmEventSubscriptions1";
  public routineName = "ScdAlarmEventSubscriptionsScdAesdAlarmEventSubscriptions1Formdivs";
  private insertCMD = "INSERT_SCD_ALARM_EVENT_SUBSCRIPTIONS";
  private updateCMD = "UPDATE_SCD_ALARM_EVENT_SUBSCRIPTIONS";
  private deleteCMD =   "DELETE_SCD_ALARM_EVENT_SUBSCRIPTIONS";
  private getCMD = "GET_SCD_ALARM_EVENT_SUBSCRIPTIONS_QUERY";

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
  public  isAPP_IDEnable : boolean = true;

  public FORM_TRIGGER_FAILURE:any;
  public NOTFOUND:any;
  public disableEmitSave = false;
  public disableEmitReadCompleted = false;
  public children = ["any"];

  public action = "";
  private Body:any =[];
  public isNew!: boolean;
  public primarKeyReadOnlyArr = {isEVENT_IDreadOnly : false , isAPP_IDreadOnly : false , isDISPLAY_IDreadOnly : false , isSHAPE_IDreadOnly : false};  
  public paramConfig;
  private masterKeyArr = [];
  private masterKeyNameArr = [];
  public  masterKey="";
  public masterKeyName ="APP_ID";
  public WhereClause = "";
  public OrderByClause = "";
  
  public formattedWhere:any = null;  
  public  submitted =  false;
  public masterParams:any;
  public alignment: TabAlignment = 'start';
  public isPhonePortrait = false;
  public compSelector = 'app-scd-aesd-alarm-event-subscriptions-1';
  public PK_AUTO = 'EVENT_ID';
  public customerFacing = false;
  public FormStepsArr = [{"CODE":"","CODETEXT_LANG":"","visible":true},{"CODE":"1","CODETEXT_LANG":"Subscript to event where Priority","visible":true}] ;
public labelEVENT_IDTop=false;
public labelEVENT_IDVisible=true;
public labelEVENT_NAMETop=false;
public labelEVENT_NAMEVisible=true;
public labelAPP_IDTop=false;
public labelAPP_IDVisible=true;
public labelPRIORITYTop=false;
public labelPRIORITYVisible=true;
public labelDISPLAY_IDTop=false;
public labelDISPLAY_IDVisible=true;
public labelURGENTTop=false;
public labelURGENTVisible=true;
public labelSHAPE_IDTop=false;
public labelSHAPE_IDVisible=true;
public labelHIGHTop=false;
public labelHIGHVisible=true;
public labelMEDIUMTop=false;
public labelMEDIUMVisible=true;
public labelLOWTop=false;
public labelLOWVisible=true;
public labelEVENTTop=false;
public labelEVENTVisible=true;
public labelSCOPESTop=false;
public labelSCOPESVisible=true;
public labelEVENT_SOURCETop=false;
public labelEVENT_SOURCEVisible=true;

public visibleEVENT_ID = false;
public visibleEVENT_NAME = true;
public visibleAPP_ID = false;
public visiblePRIORITY = true;
public visibleDISPLAY_ID = false;
public visibleURGENT = true;
public visibleSHAPE_ID = false;
public visibleHIGH = true;
public visibleMEDIUM = true;
public visibleLOW = true;
public visibleEVENT = true;
public visibleSCOPES = true;
public visibleEVENT_SOURCE = true;

public disableEVENT_ID = false;
public disableEVENT_NAME = false;
public disableAPP_ID = false;
public disablePRIORITY = false;
public disableDISPLAY_ID = false;
public disableURGENT = false;
public disableSHAPE_ID = false;
public disableHIGH = false;
public disableMEDIUM = false;
public disableLOW = false;
public disableEVENT = false;
public disableSCOPES = false;
public disableEVENT_SOURCE = false;


  
  //@Input()  
  public showToolBar = true;
  @Output() readCompletedOutput: EventEmitter<any> = new EventEmitter();
  @Output() clearCompletedOutput: EventEmitter<any> = new EventEmitter();
  @Output() saveCompletedOutput: EventEmitter<any> = new EventEmitter();
  @Output() formValidationChangedOutput: EventEmitter<boolean> = new EventEmitter();
  @Output() setComponentConfig_Output: EventEmitter<any> = new EventEmitter();
  @Output() valueChange = new EventEmitter<string>();

   constructor(public starlib1: Starlib1,public router: Router,public intl: IntlService, 
    public responsive: BreakpointObserver, 
   private starNotify: StarNotifyService,  
    public starServices: starServices
   ) {
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
 }

  callStarNotify(componentConfig:any) {
    componentConfig.eventFrom = this.compSelector;
    this.starNotify.sendEvent<componentConfigDef>('componentConfigDef', componentConfig);
  }

  private formInitialValues:any =   new scdalarmEventSubscriptionsScdAesdAlarmEventSubscriptions1();   
    @Input() public set detail_Input(form: any) {
       if (typeof form != "undefined"){
        this.isSearch = true;
        this.executeQuery(form);
        this.isChild = true;
      }
      /*
    if (this.paramConfig.DEBUG_FLAG) console.log('detail_Input ScdAlarmEventSubscriptionsScdAesdAlarmEventSubscriptions1Formdivs form.APP_ID :' + form.APP_ID);
    if ( (form.APP_ID != "") &&   (typeof form.APP_ID != "undefined"))
    {
      this.masterKey = form.APP_ID;
      
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
    if ( (typeof form != "undefined") &&   (typeof form.APP_ID != "undefined") &&   (form.APP_ID != ""))
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
      this.Comp_Config.masterKeyArr =  [NewVal['EVENT_ID']];
      this.Comp_Config.masterKeyNameArr =  ["EVENT_ID"];
         
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
        //Add Key Fields
         for (let i=0;i< this.masterKeyArr.length;i++){
          console.log("NoValidData:check:", typeof form.value[this.masterKeyNameArr[i]]);
          if (typeof form.value[this.masterKeyNameArr[i]] != "undefined" 
            && (form.value[this.masterKeyNameArr[i]] == ""
            || form.value[this.masterKeyNameArr[i]] == null)){
            let object= {}
            object[this.masterKeyNameArr[i]] = this.masterKeyArr[i];
            form.patchValue(object);
            }
         }
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
this.lookupArrDef =[	{"statment":"SELECT APPLICATION_ID CODE, APPLICATION_NAME CODETEXT_LANG  FROM  SCD_APPLICATION  order by CODETEXT_LANG ",
			"lkpArrName":"lkpArrAPP_ID"},
	{"statment":"SELECT CODE, CODETEXT_LANG , PARTCODE FROM SOM_TABS_CODES WHERE CODENAME = \"PRIORITY\"  and LANGUAGE_NAME = '" + this.userLang + "' order by CODETEXT_LANG ",
			"lkpArrName":"lkpArrPRIORITY"},
	{"statment":"SELECT DISPLAY_ID CODE, DISPLAY_NAME CODETEXT_LANG  FROM SCD_DISPLAY  order by CODETEXT_LANG ",
			"lkpArrName":"lkpArrDISPLAY_ID"},
	{"statment":"SELECT SHAPE_ID CODE, NAME CODETEXT_LANG  FROM  SCD_SHAPE  order by CODETEXT_LANG",
			"lkpArrName":"lkpArrSHAPE_ID"},
	{"statment":"SELECT CODE, CODETEXT_LANG, CODEVALUE_LANG FROM SOM_TABS_CODES WHERE CODENAME ='SCOPES' and LANGUAGE_NAME = '" + this.userLang + "' order by CODETEXT_LANG",
			"lkpArrName":"lkpArrSCOPES"},
	{"statment":"SELECT CODE, CODETEXT_LANG, CODEVALUE_LANG FROM SOM_TABS_CODES WHERE CODENAME ='EVENT_SOURCE' and LANGUAGE_NAME = '" + this.userLang + "' order by CODETEXT_LANG",
			"lkpArrName":"lkpArrEVENT_SOURCE"}];
 if (this.lookupArrDef.length > 0)
   this.starServices.fetchLookups(this, this.lookupArrDef);
}

public lkpArrAPP_ID = [];

public lkpArrPRIORITY = [];

public lkpArrDISPLAY_ID = [];

public lkpArrSHAPE_ID = [];

public lkpArrSCOPES = [];

public lkpArrEVENT_SOURCE = [];

public lkpArrGetAPP_ID(CODE: any): any {
var rec = this.lkpArrAPP_ID.find((x:any) => x.CODE === CODE);
return rec;
}

public lkpArrGetPRIORITY(CODE: any): any {
var rec = this.lkpArrPRIORITY.find((x:any) => x.CODE === CODE);
return rec;
}

public lkpArrGetDISPLAY_ID(CODE: any): any {
var rec = this.lkpArrDISPLAY_ID.find((x:any) => x.CODE === CODE);
return rec;
}

public lkpArrGetSHAPE_ID(CODE: any): any {
var rec = this.lkpArrSHAPE_ID.find((x:any) => x.CODE === CODE);
return rec;
}

public lkpArrGetSCOPES(CODE: any): any {
var rec = this.lkpArrSCOPES.find((x:any) => x.CODE === CODE);
return rec;
}

public lkpArrGetEVENT_SOURCE(CODE: any): any {
var rec = this.lkpArrEVENT_SOURCE.find((x:any) => x.CODE === CODE);
return rec;
}

onChanges(): void {
this.form.get('EVENT_ID').valueChanges.subscribe(val => {
});
this.form.get('EVENT_NAME').valueChanges.subscribe(val => {
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
      if (this.paramConfig.DEBUG_FLAG) console.log("ScdAlarmEventSubscriptionsScdAesdAlarmEventSubscriptions1Formdivs ComponentConfig:", {...ComponentConfig});

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



async WHEN_VALIDATE_ITEM_EVENT_ID(value) {

 this.FORM_TRIGGER_FAILURE = false ; 
 if (typeof this.form.controls['EVENT_ID'] != "undefined" ) 
      this.form.controls['EVENT_ID'].setErrors({invalid: true}); 
 // Code goes here 
 

 if ( this.FORM_TRIGGER_FAILURE == true) 
 return; 
 
 if (typeof this.form.controls['EVENT_ID'] != "undefined" ) 
     this.form.get('EVENT_ID').updateValueAndValidity();
 this.form.updateValueAndValidity(); 
 }

 async ON_CLICK_EVENT_ID(event){

}

async WHEN_VALIDATE_ITEM_EVENT_NAME(value) {

 this.FORM_TRIGGER_FAILURE = false ; 
 if (typeof this.form.controls['EVENT_NAME'] != "undefined" ) 
      this.form.controls['EVENT_NAME'].setErrors({invalid: true}); 
 // Code goes here 
 

 if ( this.FORM_TRIGGER_FAILURE == true) 
 return; 
 
 if (typeof this.form.controls['EVENT_NAME'] != "undefined" ) 
     this.form.get('EVENT_NAME').updateValueAndValidity();
 this.form.updateValueAndValidity(); 
 }

 async ON_CLICK_EVENT_NAME(event){

}

async WHEN_VALIDATE_ITEM_APP_ID(value) {

 this.FORM_TRIGGER_FAILURE = false ; 
 if (typeof this.form.controls['APP_ID'] != "undefined" ) 
      this.form.controls['APP_ID'].setErrors({invalid: true}); 
 // Code goes here 
 

 if ( this.FORM_TRIGGER_FAILURE == true) 
 return; 
 
 if (typeof this.form.controls['APP_ID'] != "undefined" ) 
     this.form.get('APP_ID').updateValueAndValidity();
 this.form.updateValueAndValidity(); 
 }

 async ON_CLICK_APP_ID(event){

}

async WHEN_VALIDATE_ITEM_PRIORITY(value) {

 this.FORM_TRIGGER_FAILURE = false ; 
 if (typeof this.form.controls['PRIORITY'] != "undefined" ) 
      this.form.controls['PRIORITY'].setErrors({invalid: true}); 
 // Code goes here 
 

 if ( this.FORM_TRIGGER_FAILURE == true) 
 return; 
 
 if (typeof this.form.controls['PRIORITY'] != "undefined" ) 
     this.form.get('PRIORITY').updateValueAndValidity();
 this.form.updateValueAndValidity(); 
 }

 async ON_CLICK_PRIORITY(event){

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

async WHEN_VALIDATE_ITEM_URGENT(value) {

 this.FORM_TRIGGER_FAILURE = false ; 
 if (typeof this.form.controls['URGENT'] != "undefined" ) 
      this.form.controls['URGENT'].setErrors({invalid: true}); 
 // Code goes here 
 

 if ( this.FORM_TRIGGER_FAILURE == true) 
 return; 
 
 if (typeof this.form.controls['URGENT'] != "undefined" ) 
     this.form.get('URGENT').updateValueAndValidity();
 this.form.updateValueAndValidity(); 
 }

 async ON_CLICK_URGENT(event){

}

async WHEN_VALIDATE_ITEM_SHAPE_ID(value) {

 this.FORM_TRIGGER_FAILURE = false ; 
 if (typeof this.form.controls['SHAPE_ID'] != "undefined" ) 
      this.form.controls['SHAPE_ID'].setErrors({invalid: true}); 
 // Code goes here 
 

 if ( this.FORM_TRIGGER_FAILURE == true) 
 return; 
 
 if (typeof this.form.controls['SHAPE_ID'] != "undefined" ) 
     this.form.get('SHAPE_ID').updateValueAndValidity();
 this.form.updateValueAndValidity(); 
 }

 async ON_CLICK_SHAPE_ID(event){

}

async WHEN_VALIDATE_ITEM_HIGH(value) {

 this.FORM_TRIGGER_FAILURE = false ; 
 if (typeof this.form.controls['HIGH'] != "undefined" ) 
      this.form.controls['HIGH'].setErrors({invalid: true}); 
 // Code goes here 
 

 if ( this.FORM_TRIGGER_FAILURE == true) 
 return; 
 
 if (typeof this.form.controls['HIGH'] != "undefined" ) 
     this.form.get('HIGH').updateValueAndValidity();
 this.form.updateValueAndValidity(); 
 }

 async ON_CLICK_HIGH(event){

}

async WHEN_VALIDATE_ITEM_MEDIUM(value) {

 this.FORM_TRIGGER_FAILURE = false ; 
 if (typeof this.form.controls['MEDIUM'] != "undefined" ) 
      this.form.controls['MEDIUM'].setErrors({invalid: true}); 
 // Code goes here 
 

 if ( this.FORM_TRIGGER_FAILURE == true) 
 return; 
 
 if (typeof this.form.controls['MEDIUM'] != "undefined" ) 
     this.form.get('MEDIUM').updateValueAndValidity();
 this.form.updateValueAndValidity(); 
 }

 async ON_CLICK_MEDIUM(event){

}

async WHEN_VALIDATE_ITEM_LOW(value) {

 this.FORM_TRIGGER_FAILURE = false ; 
 if (typeof this.form.controls['LOW'] != "undefined" ) 
      this.form.controls['LOW'].setErrors({invalid: true}); 
 // Code goes here 
 

 if ( this.FORM_TRIGGER_FAILURE == true) 
 return; 
 
 if (typeof this.form.controls['LOW'] != "undefined" ) 
     this.form.get('LOW').updateValueAndValidity();
 this.form.updateValueAndValidity(); 
 }

 async ON_CLICK_LOW(event){

}

async WHEN_VALIDATE_ITEM_EVENT(value) {

 this.FORM_TRIGGER_FAILURE = false ; 
 if (typeof this.form.controls['EVENT'] != "undefined" ) 
      this.form.controls['EVENT'].setErrors({invalid: true}); 
 // Code goes here 
 

 if ( this.FORM_TRIGGER_FAILURE == true) 
 return; 
 
 if (typeof this.form.controls['EVENT'] != "undefined" ) 
     this.form.get('EVENT').updateValueAndValidity();
 this.form.updateValueAndValidity(); 
 }

 async ON_CLICK_EVENT(event){

}

async WHEN_VALIDATE_ITEM_SCOPES(value) {

 this.FORM_TRIGGER_FAILURE = false ; 
 if (typeof this.form.controls['SCOPES'] != "undefined" ) 
      this.form.controls['SCOPES'].setErrors({invalid: true}); 
 // Code goes here 
 

 if ( this.FORM_TRIGGER_FAILURE == true) 
 return; 
 
 if (typeof this.form.controls['SCOPES'] != "undefined" ) 
     this.form.get('SCOPES').updateValueAndValidity();
 this.form.updateValueAndValidity(); 
 }

 async ON_CLICK_SCOPES(event){

}

async WHEN_VALIDATE_ITEM_EVENT_SOURCE(value) {

 this.FORM_TRIGGER_FAILURE = false ; 
 if (typeof this.form.controls['EVENT_SOURCE'] != "undefined" ) 
      this.form.controls['EVENT_SOURCE'].setErrors({invalid: true}); 
 // Code goes here 
 

 if ( this.FORM_TRIGGER_FAILURE == true) 
 return; 
 
 if (typeof this.form.controls['EVENT_SOURCE'] != "undefined" ) 
     this.form.get('EVENT_SOURCE').updateValueAndValidity();
 this.form.updateValueAndValidity(); 
 }

 async ON_CLICK_EVENT_SOURCE(event){

}
 
 async onChange_EVENT_ID(event:any) { 
 var value = event.target.value; 
 if ((value == null) || (value == '')) 	
 	return;  
    this.FORM_TRIGGER_FAILURE = false;	
 await   this.WHEN_VALIDATE_ITEM_EVENT_ID(value); if ( this.FORM_TRIGGER_FAILURE) return; 
 this.formValidationChangedOutput.emit(this.form.valid); 
  
 } 
 async onChange_EVENT_NAME(event:any) { 
 var value = event.target.value; 
 if ((value == null) || (value == '')) 	
 	return;  
    this.FORM_TRIGGER_FAILURE = false;	
 await   this.WHEN_VALIDATE_ITEM_EVENT_NAME(value); if ( this.FORM_TRIGGER_FAILURE) return; 
 this.formValidationChangedOutput.emit(this.form.valid); 
  
 } 
 async onValueChange_APP_ID(value) { 
  this.FORM_TRIGGER_FAILURE = false;	
 await this.WHEN_VALIDATE_ITEM_APP_ID(value); if ( this.FORM_TRIGGER_FAILURE) return; 
 this.formValidationChangedOutput.emit(this.form.valid); 
  
  } 
 async onValueChange_PRIORITY(value) { 
  this.FORM_TRIGGER_FAILURE = false;	
 await this.WHEN_VALIDATE_ITEM_PRIORITY(value); if ( this.FORM_TRIGGER_FAILURE) return; 
 this.formValidationChangedOutput.emit(this.form.valid); 
  
  } 
 async onValueChange_DISPLAY_ID(value) { 
  this.FORM_TRIGGER_FAILURE = false;	
 await this.WHEN_VALIDATE_ITEM_DISPLAY_ID(value); if ( this.FORM_TRIGGER_FAILURE) return; 
 this.formValidationChangedOutput.emit(this.form.valid); 
  
  } 
 async onChange_URGENT(event:any) { 
 var value = event.target.value; 
 if ((value == null) || (value == '')) 	
 	return;  
    this.FORM_TRIGGER_FAILURE = false;	
 await   this.WHEN_VALIDATE_ITEM_URGENT(value); if ( this.FORM_TRIGGER_FAILURE) return; 
 this.formValidationChangedOutput.emit(this.form.valid); 
  
 } 
 async onValueChange_SHAPE_ID(value) { 
  this.FORM_TRIGGER_FAILURE = false;	
 await this.WHEN_VALIDATE_ITEM_SHAPE_ID(value); if ( this.FORM_TRIGGER_FAILURE) return; 
 this.formValidationChangedOutput.emit(this.form.valid); 
  
  } 
 async onChange_HIGH(event:any) { 
 var value = event.target.value; 
 if ((value == null) || (value == '')) 	
 	return;  
    this.FORM_TRIGGER_FAILURE = false;	
 await   this.WHEN_VALIDATE_ITEM_HIGH(value); if ( this.FORM_TRIGGER_FAILURE) return; 
 this.formValidationChangedOutput.emit(this.form.valid); 
  
 } 
 async onChange_MEDIUM(event:any) { 
 var value = event.target.value; 
 if ((value == null) || (value == '')) 	
 	return;  
    this.FORM_TRIGGER_FAILURE = false;	
 await   this.WHEN_VALIDATE_ITEM_MEDIUM(value); if ( this.FORM_TRIGGER_FAILURE) return; 
 this.formValidationChangedOutput.emit(this.form.valid); 
  
 } 
 async onChange_LOW(event:any) { 
 var value = event.target.value; 
 if ((value == null) || (value == '')) 	
 	return;  
    this.FORM_TRIGGER_FAILURE = false;	
 await   this.WHEN_VALIDATE_ITEM_LOW(value); if ( this.FORM_TRIGGER_FAILURE) return; 
 this.formValidationChangedOutput.emit(this.form.valid); 
  
 } 
 async onChange_EVENT(event:any) { 
 var value = event.target.value; 
 if ((value == null) || (value == '')) 	
 	return;  
    this.FORM_TRIGGER_FAILURE = false;	
 await   this.WHEN_VALIDATE_ITEM_EVENT(value); if ( this.FORM_TRIGGER_FAILURE) return; 
 this.formValidationChangedOutput.emit(this.form.valid); 
  
 } 
 async onValueChange_SCOPES(value) { 
  this.FORM_TRIGGER_FAILURE = false;	
 await this.WHEN_VALIDATE_ITEM_SCOPES(value); if ( this.FORM_TRIGGER_FAILURE) return; 
 this.formValidationChangedOutput.emit(this.form.valid); 
  
  } 
 async onValueChange_EVENT_SOURCE(value) { 
  this.FORM_TRIGGER_FAILURE = false;	
 await this.WHEN_VALIDATE_ITEM_EVENT_SOURCE(value); if ( this.FORM_TRIGGER_FAILURE) return; 
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
public multiselect_arr = ["SCOPES","EVENT_SOURCE"];
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


