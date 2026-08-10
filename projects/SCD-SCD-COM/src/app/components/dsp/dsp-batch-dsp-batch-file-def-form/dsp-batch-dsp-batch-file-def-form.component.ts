import { Component, Input, Output, EventEmitter, HostListener } from '@angular/core';
import { FormGroup, FormControl, Validators ,FormBuilder} from '@angular/forms';
import { starServices } from 'starlib';
import { StarNotifyService } from '../../../services/starnotification.service';

import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { Starlib1 } from '../../Starlib1';
import { Subscription } from 'rxjs';
import { IntlService } from "@progress/kendo-angular-intl";
import {  ViewEncapsulation } from "@angular/core";
import { dspbatchFileDefDspBatchDspBatchFileDefForm , dynamic, componentConfigDef} from '@modeldir/model';


 const createFormGroup = (dataItem:any) => new FormGroup({
'FILE_NAME' : new FormControl(dataItem.FILE_NAME  ,   Validators.required ) ,
'DOC_NAME' : new FormControl(dataItem.DOC_NAME  ,   Validators.required ) ,
'SEPARATOR' : new FormControl(dataItem.SEPARATOR  ) ,

'LOGNAME' : new FormControl(dataItem.LOGNAME  , ) ,
'LOGDATE' : new FormControl(dataItem.LOGDATE  , ) 
});

declare function getParamConfig():any;
@Component({
  selector: 'app-dsp-batch-dsp-batch-file-def-form',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './dsp-batch-dsp-batch-file-def-form.component.html',
  styleUrls: ['./dsp-batch-dsp-batch-file-def-form.component.scss']
})


export class DspBatchFileDefDspBatchDspBatchFileDefFormFormComponent {
  public title =  this.starServices.getNLS([],"dsp_batch_DSP_BATCH_FILE_DEF_FORM.dspbatchFileDefDspBatchDspBatchFileDefForm.component_title","Dsp Batch File Def Dsp Batch Dsp Batch File Def Form");
  public routineName = "DspBatchFileDefDspBatchDspBatchFileDefFormForm";
  private insertCMD = "INSERT_DSP_BATCH_FILE_DEF";
  private updateCMD = "UPDATE_DSP_BATCH_FILE_DEF";
  private deleteCMD =   "DELETE_DSP_BATCH_FILE_DEF";
  private getCMD = "GET_DSP_BATCH_FILE_DEF_QUERY";

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
  public  isFILE_NAMEEnable : boolean = true;

  public FORM_TRIGGER_FAILURE:any;
  public NOTFOUND:any;
  public disableEmitSave = false;
  public disableEmitReadCompleted = false;
  public children = ["any"];

  public action = "";
  private Body:any =[];
  private isNew!: boolean;
  public primarKeyReadOnlyArr = {isFILE_NAMEreadOnly : false};  
  public paramConfig;
  private masterKeyArr = [];
  private masterKeyNameArr = [];
  public  masterKey="";
  public masterKeyName ="FILE_NAME";
  public WhereClause = "";
  public OrderByClause = "";
  
  public formattedWhere:any = null;  
  public  submitted =  false;
  public masterParams:any;
public isPhonePortrait = false;
public compSelector = 'app-dsp-batch-dsp-batch-file-def-form';
  
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

    var masterParams = {
      "multipleOption": false,
    }
  
    this.DSP_UPLOADConfig = new componentConfigDef()
    this.DSP_UPLOADConfig.masterParams = masterParams

  }
  
  public ngOnDestroy(): void {
    // Unsubscribe the event once not needed.
    if (typeof this.componentConfigChangeEvent !== "undefined") this.componentConfigChangeEvent.unsubscribe();
 }

  callStarNotify(componentConfig:any) {
    componentConfig.eventFrom = this.compSelector;
    this.starNotify.sendEvent<componentConfigDef>('componentConfigDef', componentConfig);
  }

  private formInitialValues:any =   new dspbatchFileDefDspBatchDspBatchFileDefForm();   
    @Input() public set detail_Input(form: any) {
    if (this.paramConfig.DEBUG_FLAG) console.log('detail_Input DspBatchFileDefDspBatchDspBatchFileDefFormForm form.FILE_NAME :' + form.FILE_NAME);
    if ( (form.FILE_NAME != "") &&   (typeof form.FILE_NAME != "undefined"))
    {
      this.masterKey = form.FILE_NAME;
      
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
    if ( (typeof form != "undefined") &&   (typeof form.FILE_NAME != "undefined") &&   (form.FILE_NAME != ""))
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

      let masterKeyArr = [data['FILE_NAME']];
      let masterKeyNameArr = ['FILE_NAME'];
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
    let fieldsData = [{}];
    this.callshowFieldsScreen(fieldsData);
    this.starServices.onCancel_form ( e , this);
  }
   public fetchLookupsCallBack() {

      if (this.paramConfig.DEBUG_FLAG) console.log("this.lookupArrDef:", this.lookupArrDef)
   }

  public onNew(e:any): void {
    let fieldsData = [{}];
    this.callshowFieldsScreen(fieldsData);
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
    this.form.patchValue({ 'SEPARATOR': ',' });
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
    let fieldsData = [{}];
    this.callshowFieldsScreen(fieldsData);
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
this.lookupArrDef =[];
this.starServices.fetchLookups(this, this.lookupArrDef);
}

onChanges(): void {
this.form.get('FILE_NAME').valueChanges.subscribe(val => {
});
this.form.get('LOGNAME').valueChanges.subscribe(val => {
});
}


public printScreen(){
  window.print();
}
  public handleComponentConfig(ComponentConfig:any) {
    if (typeof ComponentConfig !== "undefined") {
      if (this.paramConfig.DEBUG_FLAG) console.log("DspBatchFileDefDspBatchDspBatchFileDefFormForm ComponentConfig:", ComponentConfig);

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
    
    this.getBatchFields(formGroup.FILE_NAME)
  }
  async  PRE_DELETE(formGroup:any){
    

  }
  async POST_DELETE(formGroup:any){
    if (this.paramConfig.DEBUG_FLAG) console.log("POST_DELETE:formGroup:", formGroup);
    let body = [
      {
        "_QUERY": "DELETE_DSP_BATCH_FIELDS",
        "FILE_NAME": formGroup.FILE_NAME,
        "REC_SEQ" : "%"
      }
    ]
    let data = await this.starServices.execSQLBody(this, body, "");
    if (this.paramConfig.DEBUG_FLAG) console.log("POST_DELETE:data:",data);


  }



async WHEN_VALIDATE_ITEM_FILE_NAME(value) {

 this.FORM_TRIGGER_FAILURE = false ; 
 this.form.controls['FILE_NAME'].setErrors({invalid: true}); 
 // Code goes here 
 

 if ( this.FORM_TRIGGER_FAILURE == true) 
 return; 
 
 this.form.get('FILE_NAME').updateValueAndValidity();
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
 public async getBatchFields(fileName){
  let body = [
    {
      "_QUERY": "GET_DSP_BATCH_FIELDS",
      "FILE_NAME": fileName,
      "REC_SEQ" : "%"
    }
  ]
  let data = await this.starServices.execSQLBody(this, body, "");
  if (this.paramConfig.DEBUG_FLAG) console.log("getBatchFields:data:",data);
  if (typeof data != "undefined") {
    let fieldsData = [];
    for (let i=0; i<data[0].data.length;i++){
      if (this.paramConfig.DEBUG_FLAG) console.log("getBatchFields:data[0].data[i]:",data[0].data[i]);
      let fieldData = JSON.parse(data[0].data[i].FIELD_DATA);
      fieldsData.push(fieldData);
    }
    if (this.paramConfig.DEBUG_FLAG) console.log("getBatchFields:fieldsData:",fieldsData);
    this.callshowFieldsScreen(fieldsData);

  }
 }
 public async createTableCSV_Xlsx(loadData){
  
  let fileName = this.form.value["FILE_NAME"];
  let body = [
    {
      "_QUERY": "DELETE_DSP_BATCH_FIELDS",
      "FILE_NAME": fileName,
      "REC_SEQ" : "%"
    }
    ,
    {
      "_QUERY": "DELETE_DSP_BATCH_FILE_DEF",
      "FILE_NAME": fileName
    }
  ]
  let data = await this.starServices.execSQLBody(this, body, "");
  if (this.paramConfig.DEBUG_FLAG) console.log("createTableCSV_Xlsx:data:",data);
  if (typeof data != "undefined") {
    this.isNew = true;
    this.saveChanges(this.form);
    let File = "attachments/" + this.starServices.sessionParams.USERNAME  + "/temp/" + fileName;
    let separator = this.form.value["SEPARATOR"];
    if (this.paramConfig.DEBUG_FLAG) console.log("File:",File, "fileName:", fileName);
    let Body = [];
    var page = "";
    var url = this.starServices.SERVER_URL + '/prov/api?action=load_file';
    var newVal = {};
    newVal["table"] = fileName;
    newVal["file"] = File;
    newVal["loaddata"] = loadData;
    newVal["separator"] = separator;
    newVal["filetype"] = "";
    newVal["targetTable"] = "DSP_BATCH_FIELDS";
    


    Body.push(newVal);
    if (this.paramConfig.DEBUG_FLAG) console.log("Body:", Body)

    this.starServices.postCommand(page, url, Body).subscribe(result => {
      if (result != null) {
        Body = [];
        
        
        let MSg = "Successfully defined file:" + fileName + " and data loaded.";
        
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

        //this.form.patchValue({"FILE_NAME" : fileName });
        this.getBatchFields(fileName)

        //this.commonCallStarNotify(this.form.value);
        
        this.executeQuery(this.form.value);
        //this.commonCallStarNotify(this.form.value);
        
        
      
      
      }
      else
        this.starServices.showNotification("error", "error:" + result);

      this.Body = [];

    });
  }
}
 async WHEN_VALIDATE_ITEM_DOC_NAME(value) {

  this.FORM_TRIGGER_FAILURE = false ; 
  this.form.controls['DOC_NAME'].setErrors({invalid: true}); 
  // Code goes here 
  if (this.paramConfig.DEBUG_FLAG) console.log("DOC_NAME:",value)
  if ((value != "") || (value != null)) {
    let AttArr = JSON.parse(value);
    if (AttArr.length != 0){
      if (this.paramConfig.DEBUG_FLAG) console.log("DOC_NAME:",AttArr[0].name);
      this.form.patchValue({ 'FILE_NAME': AttArr[0].name });
      let loadData = 1;
      this.createTableCSV_Xlsx(loadData);
    }
    else{
      let MSg = "Please select a valid XLSX or CSV file"
      this.starServices.showNotification("success", MSg);
        var dialogStruc = {
          msg: MSg,
          title: "Error",
          info: null,
          object: this,
          action: this.starServices.OkActions,
          callback: null
        };
        this.starServices.showConfirmation(dialogStruc);
    }
  }
 
  if ( this.FORM_TRIGGER_FAILURE == true) 
  return; 
  
  this.form.get('DOC_NAME').updateValueAndValidity();
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

   async POST_CHANGE_SEPARATOR() {

    this.FORM_TRIGGER_FAILURE = false;
    this.form.controls['SEPARATOR'].setErrors({ invalid: true });
    // Code goes here 

    if (this.FORM_TRIGGER_FAILURE == true)
      return;

    this.form.controls['SEPARATOR'].clearValidators();
    this.form.get('SEPARATOR').updateValueAndValidity();
    this.form.updateValueAndValidity();
  }
 async onChange_FILE_NAME(event:any) { 
 var value = event.target.value; 
 if ((value == null) || (value == '')) 	
 	return;  
    this.FORM_TRIGGER_FAILURE = false;	
 await   this.WHEN_VALIDATE_ITEM_FILE_NAME(value); if ( this.FORM_TRIGGER_FAILURE) return;  
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
  async onChange_SEPARATOR({ target }) {
    if (this.paramConfig.DEBUG_FLAG) console.log("onChange_SEPARATOR")
    var val = target.value;
    if ((val == null) || (val == ''))
      return;
    this.FORM_TRIGGER_FAILURE = false;
    await this.POST_CHANGE_SEPARATOR(); if (this.FORM_TRIGGER_FAILURE) return;
  }

  async onChange_DOC_NAME(event:any) { 
    if (this.paramConfig.DEBUG_FLAG) console.log("onChange_DOC_NAME")
    var value = event.target.value; 
    if ((value == null) || (value == '')) 	
      return;  
       this.FORM_TRIGGER_FAILURE = false;	
    await   this.WHEN_VALIDATE_ITEM_DOC_NAME(value); if ( this.FORM_TRIGGER_FAILURE) return;  
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

public att_arr = ['DOC_NAME'];
public img_arr = [];
public AttDwnUrl = "";
public uploadimage = false;

 public async att_img_saveFormCompleted(field_id){
  if (this.paramConfig.DEBUG_FLAG) console.log("att_img_saveFormCompleted:",  field_id, this.form.value[field_id])
  let routine = "WHEN_VALIDATE_ITEM_" + field_id;
  await   this[routine](this.form.value[field_id]);
}

public DSP_DYNAMIC_RWGridConfig: componentConfigDef;
public formName="";
public orderFields1;
public areaType="";
public grid_DSP_DYNAMIC_RW: dynamic;
public fieldsOpened: boolean = true;
public languageChanged;
public fieldsData = [];

public saveCompletedHandler(DSP_DYNAMIC_RW) {
  //if (this.paramConfig.DEBUG_FLAG) console.log("test:this.fieldsSave:", this.fieldsSave, " this.submitData:", this.submitData, " DSP_DYNAMIC_RW:", DSP_DYNAMIC_RW);
  if (this.paramConfig.DEBUG_FLAG) console.log("test:DSP_DYNAMIC_RW.data:", DSP_DYNAMIC_RW.data);
  for (var i = DSP_DYNAMIC_RW.data.length - 1; i >= 0; i--) {
    if (typeof DSP_DYNAMIC_RW.data[i]._QUERY != "undefined") {
      delete DSP_DYNAMIC_RW.data[i]._QUERY;
    }
  }
  this.fieldsData = DSP_DYNAMIC_RW;
  var fieldsData = [];

  fieldsData.push(this.fieldsData);
 
}
public async callshowFieldsScreen(fieldsData){
  if (this.paramConfig.DEBUG_FLAG) console.log("fieldsData:",fieldsData);
  for (let i =0; i< fieldsData.length;i++){
    delete fieldsData[i]._QUERY;
  }

  let fieldsHead = fieldsData[0];
  const keys = Object.keys(fieldsHead)
  if (this.paramConfig.DEBUG_FLAG) console.log("keys:",keys)

  let areaFields=[];

  for (let x of keys) {
    let elm = {
      FIELD_ID : x,
      FIELD_NAME : x,
      FIELD_LOOKUP: "",
      FIELD_TYPE: ""
    }
    areaFields.push(elm);
  }
  
  
  
  fieldsData = JSON.stringify(fieldsData);
  let pageNo = 1;
 // let fieldsData: [];
  

  let areasInfo ={
    AREA_HELP: null,   
    AREA_NO: 1,   
    AREA_PROTECTED: true,   
    AREA_TITLE: "",   
    AREA_TYPE: "GRID",   
    FORM_NAME: "test8",   
    LOGDATE: "2020-11-28T08:58:54.308Z",   
    LOGNAME: "star",   
    PAGE_NO: 1
  }
 if (this.paramConfig.DEBUG_FLAG) console.log("fieldsData:",fieldsData)
  this.showFieldsScreen(areaFields, fieldsData, areasInfo, pageNo);
}


public showFieldsScreen(areaFields, ORDER_FIELDS, areasInfo, pageNo) {
  var AREA_TYPE = areasInfo.AREA_TYPE;
  var title = areasInfo.AREA_TITLE;
  var title_nls_id = this.formName + "_P" + pageNo + "_A" + areasInfo.AREA_NO;
  if (this.paramConfig.DEBUG_FLAG) console.log("title_nls_id:", title_nls_id)
  title = this.starServices.getNLS([],title_nls_id, title);
  var title_help = this.starServices.getNLS([],title_nls_id + "_HELP", areasInfo.AREA_HELP);


  var areaNo = areasInfo.AREA_NO;
  if (ORDER_FIELDS == "") {
    ORDER_FIELDS = null;
  }
  
  var orderFieldsData = null;
  if (this.orderFields1 != null) 
    orderFieldsData = this.orderFields1.data;
  

  if (typeof areaFields != "undefined") {
    var masterParams = {
      "templateFields": areaFields,
      "orderFields": ORDER_FIELDS,
      "orderFieldsData": orderFieldsData,
      "pageNo": pageNo,
      "areaNo": areaNo,
      "areaTitle": title,
      "areaTitleDef": areasInfo.AREA_TITLE,
      "areaType": areasInfo.AREA_TYPE,
      "areaProtected": areasInfo.AREA_PROTECTED,
      "areaHelp": title_help,
      "areaHelpDef": areasInfo.AREA_HELP,
      "formType": "GRID"
    };
    if (this.paramConfig.DEBUG_FLAG) console.log("masterParams:", masterParams)
    if (this.paramConfig.DEBUG_FLAG) console.log("test:areaFields:", areaFields);
    this.areaType = AREA_TYPE;
    
      this.DSP_DYNAMIC_RWGridConfig = new componentConfigDef();
      this.DSP_DYNAMIC_RWGridConfig.masterParams = masterParams;
      this.DSP_DYNAMIC_RWGridConfig.title = title;
      this.DSP_DYNAMIC_RWGridConfig.showToolBar = false;
      this.fieldsOpened = true;
    

    this.fieldsData = JSON.parse(ORDER_FIELDS);
    //formVal.ORDER_FIELDS = ORDER_FIELDS;
    if (this.paramConfig.DEBUG_FLAG) console.log("test:this.fieldsData:", this.fieldsData);
    //this.fieldsSave = false;
  }
}
}


