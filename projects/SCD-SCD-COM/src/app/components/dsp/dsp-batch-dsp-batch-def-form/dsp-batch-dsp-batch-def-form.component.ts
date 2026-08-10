import { Component, Input, Output, EventEmitter, HostListener } from '@angular/core';
import { FormGroup, FormControl, Validators ,FormBuilder} from '@angular/forms';
import { starServices } from 'starlib';
import { StarNotifyService } from '../../../services/starnotification.service';

import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { Starlib1 } from '../../Starlib1';
import { Subscription } from 'rxjs';
import { IntlService } from "@progress/kendo-angular-intl";
import {  ViewEncapsulation } from "@angular/core";
import { dspbatchDefDspBatchDspBatchDefForm , componentConfigDef} from '@modeldir/model';


 const createFormGroup = (dataItem:any) => new FormGroup({
'BATCH_ID' : new FormControl(dataItem.BATCH_ID  ,   Validators.required ) ,
'DESCRIPTION' : new FormControl(dataItem.DESCRIPTION  , ) ,
'TEMPLATE_NAME' : new FormControl(dataItem.TEMPLATE_NAME  , ) ,
'BATCH_COUNT' : new FormControl(dataItem.BATCH_COUNT  , ) ,
'WHERE_CLAUSE' : new FormControl(dataItem.WHERE_CLAUSE  , ) ,
'BATCH_LIMIT' : new FormControl(dataItem.BATCH_LIMIT  , ) ,
'LOGNAME' : new FormControl(dataItem.LOGNAME  , ) ,
'LOGDATE' : new FormControl(dataItem.LOGDATE  , ) 
});

declare function getParamConfig():any;
@Component({
  selector: 'app-dsp-batch-dsp-batch-def-form',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './dsp-batch-dsp-batch-def-form.component.html',
  styleUrls: ['./dsp-batch-dsp-batch-def-form.component.scss']
})


export class DspBatchDefDspBatchDspBatchDefFormFormComponent {
  public title =  this.starServices.getNLS([],"dsp_batch_DSP_BATCH_DEF_FORM.dspbatchDefDspBatchDspBatchDefForm.component_title","Dsp Batch Def Dsp Batch Dsp Batch Def Form");
  public routineName = "DspBatchDefDspBatchDspBatchDefFormForm";
  private insertCMD = "INSERT_DSP_BATCH_DEF";
  private updateCMD = "UPDATE_DSP_BATCH_DEF";
  private deleteCMD =   "DELETE_DSP_BATCH_DEF";
  private getCMD = "GET_DSP_BATCH_DEF_QUERY";

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
  public  isBATCH_IDEnable : boolean = true;

  public FORM_TRIGGER_FAILURE:any;
  public NOTFOUND:any;
  public disableEmitSave = false;
  public disableEmitReadCompleted = false;
  public children = ["any"];

  public action = "";
  private Body:any =[];
  private isNew!: boolean;
  public primarKeyReadOnlyArr = {isBATCH_IDreadOnly : false};  
  public paramConfig;
  private masterKeyArr = [];
  private masterKeyNameArr = [];
  public  masterKey="";
  public masterKeyName ="BATCH_ID";
  public WhereClause = "";
  public OrderByClause = "";
  
  public formattedWhere:any = null;  
  public  submitted =  false;
  public masterParams:any;
public isPhonePortrait = false;
public compSelector = 'app-dsp-batch-dsp-batch-def-form';
  
  //@Input()  
  public showToolBar = true;
  @Output() readCompletedOutput: EventEmitter<any> = new EventEmitter();
  @Output() clearCompletedOutput: EventEmitter<any> = new EventEmitter();
  @Output() saveCompletedOutput: EventEmitter<any> = new EventEmitter();

   constructor(public intl: IntlService, public responsive: BreakpointObserver, private starNotify: StarNotifyService, private starlib1: Starlib1,  public starServices: starServices) {
      this.componentConfig = new componentConfigDef(); 
      this.paramConfig = getParamConfig();
      this.componentConfig.queryable  = true;
      this.componentConfig.navigable = true;
      this.componentConfig.insertable = true;
      this.componentConfig.removeable = true;
      this.componentConfig.updateable = true;
      this.componentConfig.enabled = true;

  }
  private componentConfigChangeEvent!: Subscription;
  public ngAfterViewInit() {
    this.starServices.setRTL();
    this.WHEN_NEW_FORM_INSTANCE();
  }
   async ngOnInit() {
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
    this.AttDwnUrl = this.starServices.SERVER_URL + "/api/att?action=download&username=" + this.starServices.sessionParams.USERNAME.toLowerCase() + "&name=";

  }
  
  public ngOnDestroy(): void {
    // Unsubscribe the event once not needed.
    if (typeof this.componentConfigChangeEvent !== "undefined") this.componentConfigChangeEvent.unsubscribe();
 }

  callStarNotify(componentConfig:any) {
    componentConfig.eventFrom = this.compSelector;
    this.starNotify.sendEvent<componentConfigDef>('componentConfigDef', componentConfig);
  }

  private formInitialValues:any =   new dspbatchDefDspBatchDspBatchDefForm();   
    @Input() public set detail_Input(form: any) {
    if (this.paramConfig.DEBUG_FLAG) console.log('detail_Input DspBatchDefDspBatchDspBatchDefFormForm form.BATCH_ID :' + form.BATCH_ID);
    if ( (form.BATCH_ID != "") &&   (typeof form.BATCH_ID != "undefined"))
    {
      this.masterKey = form.BATCH_ID;
      
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
  @Input() public set executeQueryInput( form: any) {
    if ( (typeof form != "undefined") &&   (typeof form.BATCH_ID != "undefined") &&   (form.BATCH_ID != ""))
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

   async callBackFunction(data:any) {
    if (this.paramConfig.DEBUG_FLAG) console.log("inside callBackFunction:data:", data);
    this.starServices.callGetSaveAttachemts("fetch", data,this);
    if (typeof data !== "undefined") {
      await this.POST_QUERY(data);
      await this.starServices.att_img_populateArrs(data,this);
      //this.form.markAsPristine();
      //this.form.markAsUntouched();
      //this.commonCallStarNotify(data);

      
    }
  }
   public commonCallStarNotify(data:any){
    let componentConfig = new componentConfigDef();
      let masterParams = {
        data: data
      }

      let masterKeyArr = [data['BATCH_ID']];
      let masterKeyNameArr = ['BATCH_ID'];
      //for (let i = 0; i < masterKeyNameArr.length; i++) {
      //  componentConfig.masterKeyNameArr[i] = masterKeyArr[i];
      //}
      componentConfig.masterKeyArr = masterKeyArr;
      componentConfig.masterKeyNameArr = masterKeyNameArr;
      componentConfig.masterReadCompleted = true;
      componentConfig.eventTo = this.children;
      componentConfig.masterParams = masterParams;
      //this.callStarNotify(componentConfig);
   }

    async executeQuery( form: any ) {
      if (typeof form == "undefined")
        return;
     await this.PRE_QUERY(form);
     if (this.FORM_TRIGGER_FAILURE == true)
         return;
    if ( (this.WhereClause != "") && (this.isSearch != true) )
    {
      this.formattedWhere = this.WhereClause ;
      this.isSearch = true;
    }
    this.starServices.executeQuery_form(form, this); // Fuad: this should be form, and not this.form.value
  }

  private addToBody(NewVal:any){
    this.Body.push(NewVal);
  }

  public onCancel(e:any): void {
    this.starServices.onCancel_form ( e , this);
  }
   public fetchLookupsCallBack() {

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
      this.commonCallStarNotify(NewVal);
      if (this.FORM_TRIGGER_FAILURE) 
      {
         this.starServices.endTrans(this, false);
         return;
      }
       await this.POST_INSERT(NewVal);
      if (this.FORM_TRIGGER_FAILURE) 
      {
         this.starServices.endTrans(this, false);
         return;
      }

      if (this.paramConfig.DEBUG_FLAG) console.log("testing  post POST_INSERT : ", this.FORM_TRIGGER_FAILURE)
      if (!this.FORM_TRIGGER_FAILURE) {
         this.saveCompletedOutput.emit(this.form.value);
      }
   }
   async callBackPost_Update( NewVal:any) {
      if (this.paramConfig.DEBUG_FLAG) console.log("callBackPost_Update:",  " NewVal:", NewVal);
      this.commonCallStarNotify(NewVal);
      await this.POST_UPDATE(NewVal);
   }

   async callBackPost_Remove( NewVal:any) {
      if (this.paramConfig.DEBUG_FLAG) console.log("callBackPost_Remove:",  " NewVal:", NewVal);
      this.commonCallStarNotify("");
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
      if (this.form.valid == false){
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
         this.starServices.saveChanges_form(form, this);
      }

   }


  public goRecord ( target:any): void{
    this.starServices.goRecord ( target, this);
  }

public userLang = "EN" ; 
public lookupArrDef:any =[];
public setlookupArrDef(){
this.lookupArrDef =[	{"statment": "SELECT TEMPLATE_NAME CODE, TEMPLATE_NAME CODETEXT_LANG FROM DSP_TEMPLATE  ",
			"lkpArrName":"lkpArrTEMPLATE_NAME"}];
this.starServices.fetchLookups(this, this.lookupArrDef);
}

public lkpArrTEMPLATE_NAME = [];

public lkpArrGetTEMPLATE_NAME(CODE: any): any {
var rec = this.lkpArrTEMPLATE_NAME.find((x:any) => x.CODE === CODE);
return rec;
}

onChanges(): void {
this.form.get('BATCH_ID').valueChanges.subscribe(val => {
});
this.form.get('DESCRIPTION').valueChanges.subscribe(val => {
});
this.form.get('BATCH_COUNT').valueChanges.subscribe(val => {
});
this.form.get('WHERE_CLAUSE').valueChanges.subscribe(val => {
});
this.form.get('BATCH_LIMIT').valueChanges.subscribe(val => {
});
this.form.get('LOGNAME').valueChanges.subscribe(val => {
});
}


public printScreen(){
  window.print();
}
  public handleComponentConfig(ComponentConfig:any) {
    if (typeof ComponentConfig !== "undefined") {
      if (this.paramConfig.DEBUG_FLAG) console.log("DspBatchDefDspBatchDspBatchDefFormForm ComponentConfig:", ComponentConfig);

      this.componentConfig = this.starServices.setComponentConfig(ComponentConfig, this.componentConfig);
      if (ComponentConfig.isMaster == true)
        this.isMaster = true;

      if (ComponentConfig.masterSaved != null) {
        this.saveChanges(this.form);
        ComponentConfig.masterSaved = null;
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
      if (ComponentConfig.masterParams != null) {
        this.masterParams = ComponentConfig.masterParams;
      }

      if (ComponentConfig.formattedWhere != null) {
        this.formattedWhere = ComponentConfig.formattedWhere;
        this.isSearch = true;
        this.executeQuery(this.form)

      }
      if (ComponentConfig.masterReadCompleted != null) {
        this.isSearch = false;
        this.isChild = true;
        this.executeQuery(this.form)
      }
      if (ComponentConfig.clearComponent == true) {
        this.onCancel(this.form)
      }
        if (ComponentConfig.languageChanged != null) {
        if (this.userLang != ComponentConfig.languageChanged) {
          this.userLang =  ComponentConfig.languageChanged;
          this.setlookupArrDef();
        }
      }


    }
  }
  @Input() public set setComponentConfig_Input(ComponentConfig: componentConfigDef) {
    this.handleComponentConfig(ComponentConfig);


  }
  
  WHEN_NEW_FORM_INSTANCE(){
    
    
  }
  WHEN_CREATE_RECORD(){
    

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



async WHEN_VALIDATE_ITEM_BATCH_ID(value) {

 this.FORM_TRIGGER_FAILURE = false ; 
 this.form.controls['BATCH_ID'].setErrors({invalid: true}); 
 // Code goes here 
 

 if ( this.FORM_TRIGGER_FAILURE == true) 
 return; 
 
 this.form.get('BATCH_ID').updateValueAndValidity();
 this.form.updateValueAndValidity(); 
 }
async WHEN_VALIDATE_ITEM_DESCRIPTION(value) {

 this.FORM_TRIGGER_FAILURE = false ; 
 this.form.controls['DESCRIPTION'].setErrors({invalid: true}); 
 // Code goes here 
 

 if ( this.FORM_TRIGGER_FAILURE == true) 
 return; 
 
 this.form.get('DESCRIPTION').updateValueAndValidity();
 this.form.updateValueAndValidity(); 
 }
async WHEN_VALIDATE_ITEM_TEMPLATE_NAME(value) {

 this.FORM_TRIGGER_FAILURE = false ; 
 this.form.controls['TEMPLATE_NAME'].setErrors({invalid: true}); 
 // Code goes here 
 

 if ( this.FORM_TRIGGER_FAILURE == true) 
 return; 
 
 this.form.get('TEMPLATE_NAME').updateValueAndValidity();
 this.form.updateValueAndValidity(); 
 }
async WHEN_VALIDATE_ITEM_BATCH_COUNT(value) {

 this.FORM_TRIGGER_FAILURE = false ; 
 this.form.controls['BATCH_COUNT'].setErrors({invalid: true}); 
 // Code goes here 
 

 if ( this.FORM_TRIGGER_FAILURE == true) 
 return; 
 
 this.form.get('BATCH_COUNT').updateValueAndValidity();
 this.form.updateValueAndValidity(); 
 }
async WHEN_VALIDATE_ITEM_WHERE_CLAUSE(value) {

 this.FORM_TRIGGER_FAILURE = false ; 
 this.form.controls['WHERE_CLAUSE'].setErrors({invalid: true}); 
 // Code goes here 
 

 if ( this.FORM_TRIGGER_FAILURE == true) 
 return; 
 
 this.form.get('WHERE_CLAUSE').updateValueAndValidity();
 this.form.updateValueAndValidity(); 
 }
async WHEN_VALIDATE_ITEM_BATCH_LIMIT(value) {

 this.FORM_TRIGGER_FAILURE = false ; 
 this.form.controls['BATCH_LIMIT'].setErrors({invalid: true}); 
 // Code goes here 
 

 if ( this.FORM_TRIGGER_FAILURE == true) 
 return; 
 
 this.form.get('BATCH_LIMIT').updateValueAndValidity();
 this.form.updateValueAndValidity(); 
 }
async WHEN_VALIDATE_ITEM_LOGNAME(value) {

 this.FORM_TRIGGER_FAILURE = false ; 
 this.form.controls['LOGNAME'].setErrors({invalid: true}); 
 // Code goes here 
 

 if ( this.FORM_TRIGGER_FAILURE == true) 
 return; 
 
 this.form.get('LOGNAME').updateValueAndValidity();
 this.form.updateValueAndValidity(); 
 }
async WHEN_VALIDATE_ITEM_LOGDATE(value) {

 this.FORM_TRIGGER_FAILURE = false ; 
 this.form.controls['LOGDATE'].setErrors({invalid: true}); 
 // Code goes here 
 

 if ( this.FORM_TRIGGER_FAILURE == true) 
 return; 
 
 this.form.get('LOGDATE').updateValueAndValidity();
 this.form.updateValueAndValidity(); 
 } 
 async onChange_BATCH_ID(event:any) { 
 var value = event.target.value; 
 if ((value == null) || (value == '')) 	
 	return;  
    this.FORM_TRIGGER_FAILURE = false;	
 await   this.WHEN_VALIDATE_ITEM_BATCH_ID(value); if ( this.FORM_TRIGGER_FAILURE) return;  
 } 
 async onValueChange_DESCRIPTION(value) { 
  this.FORM_TRIGGER_FAILURE = false;	
 await this.WHEN_VALIDATE_ITEM_DESCRIPTION(value); if ( this.FORM_TRIGGER_FAILURE) return;  
  } 
 async onValueChange_TEMPLATE_NAME(value) { 
  this.FORM_TRIGGER_FAILURE = false;	
 await this.WHEN_VALIDATE_ITEM_TEMPLATE_NAME(value); if ( this.FORM_TRIGGER_FAILURE) return;  
  } 
 async onChange_BATCH_COUNT(event:any) { 
 var value = event.target.value; 
 if ((value == null) || (value == '')) 	
 	return;  
    this.FORM_TRIGGER_FAILURE = false;	
 await   this.WHEN_VALIDATE_ITEM_BATCH_COUNT(value); if ( this.FORM_TRIGGER_FAILURE) return;  
 } 
 async onValueChange_WHERE_CLAUSE(value) { 
  this.FORM_TRIGGER_FAILURE = false;	
 await this.WHEN_VALIDATE_ITEM_WHERE_CLAUSE(value); if ( this.FORM_TRIGGER_FAILURE) return;  
  } 
 async onChange_BATCH_LIMIT(event:any) { 
 var value = event.target.value; 
 if ((value == null) || (value == '')) 	
 	return;  
    this.FORM_TRIGGER_FAILURE = false;	
 await   this.WHEN_VALIDATE_ITEM_BATCH_LIMIT(value); if ( this.FORM_TRIGGER_FAILURE) return;  
 } 
 async onChange_LOGNAME(event:any) { 
 var value = event.target.value; 
 if ((value == null) || (value == '')) 	
 	return;  
    this.FORM_TRIGGER_FAILURE = false;	
 await   this.WHEN_VALIDATE_ITEM_LOGNAME(value); if ( this.FORM_TRIGGER_FAILURE) return;  
 } 
 async onValueChange_LOGDATE(value) { 
  this.FORM_TRIGGER_FAILURE = false;	
 await this.WHEN_VALIDATE_ITEM_LOGDATE(value); if ( this.FORM_TRIGGER_FAILURE) return;  
  }

public async runBatch(){
  const date = new Date().toISOString();
    let batchLogID = date.split("-").join(" ");
    batchLogID = batchLogID.split(":").join(" ");
    batchLogID = batchLogID.split("T").join(" ");
    batchLogID = batchLogID.split("Z").join("");
    batchLogID = batchLogID.split(".").join("");
    if (this.paramConfig.DEBUG_FLAG) console.log("batchLogID:", batchLogID);

  let batchID = this.form.value["BATCH_ID"];
  if (batchID == ""){
    this.starServices.showNotification("error", "Please define a batch");
    return;
  }
  let body = [
    {
      "_QUERY": "GET_DSP_BATCH_FILES",
      "BATCH_ID": batchID,
      "FILE_NAME" : "%"
      
    }
    // ,
    // {
    //   "_QUERY": "DELETE_DSP_BATCH_FILE_DEF",
    //   "FILE_NAME": fileName
    // }
  ]
  let data = await this.starServices.execSQLBody(this, body, "");
  if (this.paramConfig.DEBUG_FLAG) console.log("runBatch:data:",data);
  if (typeof data != "undefined") {
    
    let Body = [];
    var page = "";
    var url = this.starServices.SERVER_URL + '/prov/api?action=run_batch';
    var newVal = {};
    let FormData:any;
    FormData = Object.assign({}, this.form.value);
    newVal["batch"] = FormData;
    newVal["batch"].BATCH_LOG_ID = batchLogID;
    newVal["batch_files"] = data[0].data;
   

    Body.push(newVal);
    if (this.paramConfig.DEBUG_FLAG) console.log("Body:", Body)

    this.starServices.postCommand(page, url, Body).subscribe(result => {
      if (result != null) {
        
        
        
        let MSg = "Successfully started Batch:" + batchID + " with ID : " + batchLogID ;
        
        this.starServices.showNotification("success", MSg);
        var dialogStruc = {
          msg: MSg,
          title: "Success",
          info: null,
          object: this,
          action: this.starServices.OkActions,
          callback: null
        };
        this.starServices.showConfirmation(dialogStruc);

        this.isSearch = true;

        
        this.executeQuery(this.form.value);
        
        
      
      
      }
      else
        this.starServices.showNotification("error", "error:" + result);

      this.Body = [];

    });
  }
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
public att_arr = [];
public img_arr = [];
public AttDwnUrl = "";
public uploadimage = false;


public async deleteAllLogs(){
  let formGroup = this.form.value;
  let body:any = [];
   let sqlStmt = "Delete from DSP_WORK_ORDERS  where ORDER_NO in ( "
                + " select ORDER_NO from DSP_ORDERS  where BATCH_LOG_ID in ( " 
                + " select BATCH_LOG_ID from DSP_BATCH_LOG  where batch_id = '" + formGroup.BATCH_ID + "'))" ;
  let NewVal = 
    {
      "_QUERY": "GET_STMT",
      "_STMT": sqlStmt 
    };
    sqlStmt = " Delete from DSP_ORDERS  where BATCH_LOG_ID in ( " 
    + " select BATCH_LOG_ID from DSP_BATCH_LOG  where batch_id = '" + formGroup.BATCH_ID + "')" ;
  let NewVal1 = 
    {
      "_QUERY": "GET_STMT",
      "_STMT": sqlStmt 
    };
    sqlStmt =  " Delete from DSP_BATCH_LOG  where batch_id = '" + formGroup.BATCH_ID + "'" ;
  let NewVal2 = {
    "_QUERY": "GET_STMT",
    "_STMT": sqlStmt 

    }
    
  
  body.push(NewVal);
  body.push(NewVal1);
  body.push(NewVal2);
  if (this.paramConfig.DEBUG_FLAG) console.log("deleteAllLogs:", body);

  let data = await this.starServices.execSQLBody(this, body, "");
  let allColumns = data[0].data;
  if (this.paramConfig.DEBUG_FLAG) console.log("tst post dels:", data);
  if (typeof data[0] != "undefined") {
    this.readCompletedOutput.emit(this.form.value);    
  }

}

}


