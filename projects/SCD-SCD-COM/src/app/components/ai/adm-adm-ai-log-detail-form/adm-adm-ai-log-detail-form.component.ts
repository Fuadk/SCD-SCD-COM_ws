import { Component, Input, Output, EventEmitter, HostListener } from '@angular/core';
import { FormGroup, FormControl, Validators ,FormBuilder} from '@angular/forms';
import { starServices } from 'starlib';
import { StarNotifyService } from '../../../services/starnotification.service';

import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { Starlib1 } from '../../Starlib1';
import { Subscription } from 'rxjs';
import { IntlService } from "@progress/kendo-angular-intl";
import {  ViewEncapsulation } from "@angular/core";
import { Router } from '@angular/router';
import { admaiLogDetailAdmAdmAiLogDetailForm , componentConfigDef} from '@modeldir/model';


 const createFormGroup = (dataItem:any) => new FormGroup({
'USERNAME' : new FormControl(dataItem.USERNAME  ,   Validators.required ) ,
'APP_ID' : new FormControl(dataItem.APP_ID  ,   Validators.required ) ,
'AI_ACTION_ID' : new FormControl(dataItem.AI_ACTION_ID  ,   Validators.required ) ,
'AI_ENTITY_ID' : new FormControl(dataItem.AI_ENTITY_ID  ,   Validators.required ) ,
'REQUESTED_ON' : new FormControl(dataItem.REQUESTED_ON  ,   Validators.required ) ,
'DURATION' : new FormControl(dataItem.DURATION  , ) ,
'AI_SEQ' : new FormControl(dataItem.AI_SEQ  ,   Validators.required ) ,
'STAGE' : new FormControl(dataItem.STAGE  ,   Validators.required ) ,
'QUESTION' : new FormControl(dataItem.QUESTION  , ) ,
'ANSWER' : new FormControl(dataItem.ANSWER  , ) ,
'LOGDATE' : new FormControl(dataItem.LOGDATE  , ) ,
'LOGNAME' : new FormControl(dataItem.LOGNAME  , ) 
});

declare function getParamConfig():any;
@Component({
  selector: 'app-adm-adm-ai-log-detail-form',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './adm-adm-ai-log-detail-form.component.html',
  styleUrls: ['./adm-adm-ai-log-detail-form.component.scss']
})


export class AdmAiLogDetailAdmAdmAiLogDetailFormFormComponent {
  public title =  this.starServices.getNLS([],"ADM_ADM_AI_LOG_DETAIL_FORM.admaiLogDetailAdmAdmAiLogDetailForm.component_title","ADM AI LOG DETAIL FORM");
  public routineName = "AdmAiLogDetailAdmAdmAiLogDetailFormForm";
  private insertCMD = "INSERT_ADM_AI_LOG_DETAIL";
  private updateCMD = "UPDATE_ADM_AI_LOG_DETAIL";
  private deleteCMD =   "DELETE_ADM_AI_LOG_DETAIL";
  private getCMD = "GET_ADM_AI_LOG_DETAIL_QUERY";

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
  public  isUSERNAMEEnable : boolean = true;

  public FORM_TRIGGER_FAILURE:any;
  public NOTFOUND:any;
  public disableEmitSave = false;
  public disableEmitReadCompleted = false;
  public children = ["any"];

  public action = "";
  private Body:any =[];
  private isNew!: boolean;
  public primarKeyReadOnlyArr = {isUSERNAMEreadOnly : false , isAP_IDreadOnly : false , isAI_ACTION_IDreadOnly : false , isAI_ENTITY_IDreadOnly : false , isREQUESTED_ONreadOnly : false , isAI_SEQreadOnly : false, isSTAGEreadOnly : false};  
  public paramConfig;
  private masterKeyArr = [];
  private masterKeyNameArr = [];
  public  masterKey="";
  public masterKeyName ="USERNAME";
  public WhereClause = "";
  public OrderByClause = "";
  
  public formattedWhere:any = null;  
  public  submitted =  false;
  public masterParams:any;
public isPhonePortrait = false;
public compSelector = 'app-adm-adm-ai-log-detail-form';
public labelUSERNAMETop=false;
public labelUSERNAMEVisible=true;
public labelAP_IDTop=false;
public labelAP_IDVisible=true;
public labelAI_ACTION_IDTop=false;
public labelAI_ACTION_IDVisible=true;
public labelAI_ENTITY_IDTop=false;
public labelAI_ENTITY_IDVisible=true;
public labelREQUESTED_ONTop=false;
public labelREQUESTED_ONVisible=true;
public labelDURATIONTop=false;
public labelDURATIONVisible=true;
public labelAI_SEQTop=false;
public labelAI_SEQVisible=true;
public labelSTAGETop=false;
public labelSTAGEVisible=true;
public labelQUESTIONTop=false;
public labelQUESTIONVisible=true;
public labelANSWERTop=false;
public labelANSWERVisible=true;
public labelLOGDATETop=false;
public labelLOGDATEVisible=true;
public labelLOGNAMETop=false;
public labelLOGNAMEVisible=true;

  
  //@Input()  
  public showToolBar = false;
  @Output() readCompletedOutput: EventEmitter<any> = new EventEmitter();
  @Output() clearCompletedOutput: EventEmitter<any> = new EventEmitter();
  @Output() saveCompletedOutput: EventEmitter<any> = new EventEmitter();

   constructor(public router: Router,public intl: IntlService, public responsive: BreakpointObserver, private starNotify: StarNotifyService, private starlib1: Starlib1,  public starServices: starServices) {
      this.router = router;
      this.componentConfig = new componentConfigDef(); 
      this.paramConfig = getParamConfig();
      this.componentConfig.queryable  = true;
      this.componentConfig.navigable = true;
      this.componentConfig.insertable = true;
      this.componentConfig.removeable = true;
      this.componentConfig.updateable = true;
      this.componentConfig.enabled = false;

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

  private formInitialValues:any =   new admaiLogDetailAdmAdmAiLogDetailForm();   
    @Input() public set detail_Input(form: any) {
      console.log("detail_Input:")
       if (typeof form != "undefined"){
        this.isSearch = true;
        this.executeQuery(form);
        this.isChild = true;
      }
      /*
    if (this.paramConfig.DEBUG_FLAG) console.log('detail_Input AdmAiLogDetailAdmAdmAiLogDetailFormForm form.USERNAME :' + form.USERNAME);
    if ( (form.USERNAME != "") &&   (typeof form.USERNAME != "undefined"))
    {
      this.masterKey = form.USERNAME;
      
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
    if ( (typeof form != "undefined") &&   (typeof form.USERNAME != "undefined") &&   (form.USERNAME != ""))
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

      let masterKeyArr = [data['USERNAME']];
      let masterKeyNameArr = ['USERNAME'];
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
    let formGroup = createFormGroup(this.formInitialValues);
    this.starServices.removeNonValidColumns(form,formGroup.value);
    console.log("executeQuery:form:",form)
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
      if (this.form.valid == false && this.form.dirty == true){
         let invalid = this.starlib1.getInvalidControls(this);
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
this.lookupArrDef =[	{"statment":"SELECT CODE, CODETEXT_LANG , PARTCODE FROM SOM_TABS_CODES WHERE CODENAME = \"AI_ACTION_ID\"  and LANGUAGE_NAME = '" + this.userLang + "' order by CODETEXT_LANG ",
			"lkpArrName":"lkpArrAI_ACTION_ID"}];
this.starServices.fetchLookups(this, this.lookupArrDef);
}

public lkpArrAI_ACTION_ID = [];

public lkpArrGetAI_ACTION_ID(CODE: any): any {
var rec = this.lkpArrAI_ACTION_ID.find((x:any) => x.CODE === CODE);
return rec;
}

onChanges(): void {
this.form.get('USERNAME').valueChanges.subscribe(val => {
});
this.form.get('APP_ID').valueChanges.subscribe(val => {
});
this.form.get('AI_ENTITY_ID').valueChanges.subscribe(val => {
});
this.form.get('DURATION').valueChanges.subscribe(val => {
});
this.form.get('AI_SEQ').valueChanges.subscribe(val => {
});
this.form.get('STAGE').valueChanges.subscribe(val => {
});
this.form.get('QUESTION').valueChanges.subscribe(val => {
});
this.form.get('ANSWER').valueChanges.subscribe(val => {
});
this.form.get('LOGNAME').valueChanges.subscribe(val => {
});
}


public printScreen(){
  window.print();
}
  public handleComponentConfig(ComponentConfig:any) {
    if (typeof ComponentConfig !== "undefined") {
      if (this.paramConfig.DEBUG_FLAG) console.log("AdmAiLogDetailAdmAdmAiLogDetailFormForm ComponentConfig:", ComponentConfig);

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
        this.executeQuery(this.form.value)
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



async WHEN_VALIDATE_ITEM_USERNAME(value) {

 this.FORM_TRIGGER_FAILURE = false ; 
 this.form.controls['USERNAME'].setErrors({invalid: true}); 
 // Code goes here 
 

 if ( this.FORM_TRIGGER_FAILURE == true) 
 return; 
 
 this.form.get('USERNAME').updateValueAndValidity();
 this.form.updateValueAndValidity(); 
 }

 async ON_CLICK_USERNAME(event){

}

async WHEN_VALIDATE_ITEM_AP_ID(value) {

 this.FORM_TRIGGER_FAILURE = false ; 
 this.form.controls['APP_ID'].setErrors({invalid: true}); 
 // Code goes here 
 

 if ( this.FORM_TRIGGER_FAILURE == true) 
 return; 
 
 this.form.get('APP_ID').updateValueAndValidity();
 this.form.updateValueAndValidity(); 
 }

 async ON_CLICK_AP_ID(event){

}

async WHEN_VALIDATE_ITEM_AI_ACTION_ID(value) {

 this.FORM_TRIGGER_FAILURE = false ; 
 this.form.controls['AI_ACTION_ID'].setErrors({invalid: true}); 
 // Code goes here 
 

 if ( this.FORM_TRIGGER_FAILURE == true) 
 return; 
 
 this.form.get('AI_ACTION_ID').updateValueAndValidity();
 this.form.updateValueAndValidity(); 
 }

 async ON_CLICK_AI_ACTION_ID(event){

}

async WHEN_VALIDATE_ITEM_AI_ENTITY_ID(value) {

 this.FORM_TRIGGER_FAILURE = false ; 
 this.form.controls['AI_ENTITY_ID'].setErrors({invalid: true}); 
 // Code goes here 
 

 if ( this.FORM_TRIGGER_FAILURE == true) 
 return; 
 
 this.form.get('AI_ENTITY_ID').updateValueAndValidity();
 this.form.updateValueAndValidity(); 
 }

 async ON_CLICK_AI_ENTITY_ID(event){

}

async WHEN_VALIDATE_ITEM_REQUESTED_ON(value) {

 this.FORM_TRIGGER_FAILURE = false ; 
 this.form.controls['REQUESTED_ON'].setErrors({invalid: true}); 
 // Code goes here 
 

 if ( this.FORM_TRIGGER_FAILURE == true) 
 return; 
 
 this.form.get('REQUESTED_ON').updateValueAndValidity();
 this.form.updateValueAndValidity(); 
 }

 async ON_CLICK_REQUESTED_ON(event){

}

async WHEN_VALIDATE_ITEM_DURATION(value) {

 this.FORM_TRIGGER_FAILURE = false ; 
 this.form.controls['DURATION'].setErrors({invalid: true}); 
 // Code goes here 
 

 if ( this.FORM_TRIGGER_FAILURE == true) 
 return; 
 
 this.form.get('DURATION').updateValueAndValidity();
 this.form.updateValueAndValidity(); 
 }

 async ON_CLICK_DURATION(event){

}

async WHEN_VALIDATE_ITEM_AI_SEQ(value) {

 this.FORM_TRIGGER_FAILURE = false ; 
 this.form.controls['AI_SEQ'].setErrors({invalid: true}); 
 // Code goes here 
 

 if ( this.FORM_TRIGGER_FAILURE == true) 
 return; 
 
 this.form.get('AI_SEQ').updateValueAndValidity();
 this.form.updateValueAndValidity(); 
 }

 async ON_CLICK_AI_SEQ(event){

}

async WHEN_VALIDATE_ITEM_STAGE(value) {

 this.FORM_TRIGGER_FAILURE = false ; 
 this.form.controls['STAGE'].setErrors({invalid: true}); 
 // Code goes here 
 

 if ( this.FORM_TRIGGER_FAILURE == true) 
 return; 
 
 this.form.get('STAGE').updateValueAndValidity();
 this.form.updateValueAndValidity(); 
 }

 async ON_CLICK_STAGE(event){

}
async WHEN_VALIDATE_ITEM_QUESTION(value) {

 this.FORM_TRIGGER_FAILURE = false ; 
 this.form.controls['QUESTION'].setErrors({invalid: true}); 
 // Code goes here 
 

 if ( this.FORM_TRIGGER_FAILURE == true) 
 return; 
 
 this.form.get('QUESTION').updateValueAndValidity();
 this.form.updateValueAndValidity(); 
 }

 async ON_CLICK_QUESTION(event){

}

async WHEN_VALIDATE_ITEM_ANSWER(value) {

 this.FORM_TRIGGER_FAILURE = false ; 
 this.form.controls['ANSWER'].setErrors({invalid: true}); 
 // Code goes here 
 

 if ( this.FORM_TRIGGER_FAILURE == true) 
 return; 
 
 this.form.get('ANSWER').updateValueAndValidity();
 this.form.updateValueAndValidity(); 
 }

 async ON_CLICK_ANSWER(event){

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

 async ON_CLICK_LOGDATE(event){

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

 async ON_CLICK_LOGNAME(event){

}
 
 async onChange_USERNAME(event:any) { 
 var value = event.target.value; 
 if ((value == null) || (value == '')) 	
 	return;  
    this.FORM_TRIGGER_FAILURE = false;	
 await   this.WHEN_VALIDATE_ITEM_USERNAME(value); if ( this.FORM_TRIGGER_FAILURE) return;  
 } 
 async onChange_AP_ID(event:any) { 
 var value = event.target.value; 
 if ((value == null) || (value == '')) 	
 	return;  
    this.FORM_TRIGGER_FAILURE = false;	
 await   this.WHEN_VALIDATE_ITEM_AP_ID(value); if ( this.FORM_TRIGGER_FAILURE) return;  
 } 
 async onValueChange_AI_ACTION_ID(value) { 
  this.FORM_TRIGGER_FAILURE = false;	
 await this.WHEN_VALIDATE_ITEM_AI_ACTION_ID(value); if ( this.FORM_TRIGGER_FAILURE) return;  
  } 
 async onChange_AI_ENTITY_ID(event:any) { 
 var value = event.target.value; 
 if ((value == null) || (value == '')) 	
 	return;  
    this.FORM_TRIGGER_FAILURE = false;	
 await   this.WHEN_VALIDATE_ITEM_AI_ENTITY_ID(value); if ( this.FORM_TRIGGER_FAILURE) return;  
 } 
 async onValueChange_REQUESTED_ON(value) { 
  this.FORM_TRIGGER_FAILURE = false;	
 await this.WHEN_VALIDATE_ITEM_REQUESTED_ON(value); if ( this.FORM_TRIGGER_FAILURE) return;  
  } 
 async onChange_DURATION(event:any) { 
 var value = event.target.value; 
 if ((value == null) || (value == '')) 	
 	return;  
    this.FORM_TRIGGER_FAILURE = false;	
 await   this.WHEN_VALIDATE_ITEM_DURATION(value); if ( this.FORM_TRIGGER_FAILURE) return;  
 } 
 async onChange_AI_SEQ(event:any) { 
 var value = event.target.value; 
 if ((value == null) || (value == '')) 	
 	return;  
    this.FORM_TRIGGER_FAILURE = false;	
 await   this.WHEN_VALIDATE_ITEM_STAGE(value); if ( this.FORM_TRIGGER_FAILURE) return;  
 } 
 async onChange_STAGE(event:any) { 
 var value = event.target.value; 
 if ((value == null) || (value == '')) 	
 	return;  
    this.FORM_TRIGGER_FAILURE = false;	
 await   this.WHEN_VALIDATE_ITEM_STAGE(value); if ( this.FORM_TRIGGER_FAILURE) return;  
 } 
 async onValueChange_QUESTION(value) { 
  this.FORM_TRIGGER_FAILURE = false;	
 await this.WHEN_VALIDATE_ITEM_QUESTION(value); if ( this.FORM_TRIGGER_FAILURE) return;  
  } 
 async onValueChange_ANSWER(value) { 
  this.FORM_TRIGGER_FAILURE = false;	
 await this.WHEN_VALIDATE_ITEM_ANSWER(value); if ( this.FORM_TRIGGER_FAILURE) return;  
  } 
 async onValueChange_LOGDATE(value) { 
  this.FORM_TRIGGER_FAILURE = false;	
 await this.WHEN_VALIDATE_ITEM_LOGDATE(value); if ( this.FORM_TRIGGER_FAILURE) return;  
  } 
 async onChange_LOGNAME(event:any) { 
 var value = event.target.value; 
 if ((value == null) || (value == '')) 	
 	return;  
    this.FORM_TRIGGER_FAILURE = false;	
 await   this.WHEN_VALIDATE_ITEM_LOGNAME(value); if ( this.FORM_TRIGGER_FAILURE) return;  
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

 public async att_img_saveFormCompleted(field_id){
  console.log("att_img_saveFormCompleted:",  field_id, this.form.value[field_id])
  let routine = "WHEN_VALIDATE_ITEM_" + field_id;
  await   this[routine](this.form.value[field_id]);
}
public getAttWrapper(field){
  
  //console.log("getAtt_data: inside getAttWrapper:field:", field)
    console.log("getAtt_data: inside getAttWrapper:field:", field, "form.get:", 
      this.form.get(field).value)
      
  console.log("getAtt_data:this.form:",this.form, this.form.value[field]);
  let val = this.form.value[field];
  console.log("getAtt_data: inside getAttWrapper:field:", field, val)
  let retVal = this.starServices.att_img_getAtt(val,this);
  return retVal;
}

}


