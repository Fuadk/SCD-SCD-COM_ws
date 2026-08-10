import { Component, Input, Output, EventEmitter, HostListener} from '@angular/core';
import { FormGroup, FormControl, Validators ,FormBuilder} from '@angular/forms';
import { starServices } from 'starlib';
import { StarNotifyService } from '../../../services/starnotification.service';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { ruleDef , ruleHost, componentConfigDef} from '@modeldir/model';
import { Starlib1 } from '../../Starlib1';

 const createFormGroup = dataItem => new FormGroup({
'MODULE' : new FormControl(dataItem.MODULE  , Validators.required ) ,
'RULE_ID' : new FormControl(dataItem.RULE_ID ) ,
'RULE_TRIGGER' : new FormControl(dataItem.RULE_TRIGGER , Validators.required) ,
'ROUTINE_NAME' : new FormControl(dataItem.ROUTINE_NAME ) ,
'QUERY_DEF' : new FormControl(dataItem.QUERY_DEF , Validators.required) ,
'RULE_KEY' : new FormControl(dataItem.RULE_KEY , Validators.required) ,
'RESPONSE_DATA_ID' : new FormControl(dataItem.RESPONSE_DATA_ID) ,
'RESPONSE_DATA_NAME' : new FormControl(dataItem.RESPONSE_DATA_NAME) ,
'DISABLED' : new FormControl(dataItem.DISABLED)  ,
'RULE_DESCRIPTION' : new FormControl(dataItem.RULE_DESCRIPTION, Validators.required)  ,
'TEMPLATE_NAME' : new FormControl(dataItem.TEMPLATE_NAME)  ,
'SEQUENCE_NAME' : new FormControl(dataItem.SEQUENCE_NAME)  ,
'LOGNAME' : new FormControl(dataItem.LOGNAME ) ,
'LOGDATE' : new FormControl(dataItem.LOGDATE ) 
});

declare function getParamConfig():any;

@Component({
  selector: 'app-adm-rule-def-form',
  templateUrl: './adm-rule-def-form.component.html',
  styleUrls: ['./adm-rule-def-form.component.css']
})


export class AdmRuleDefFormComponent {
  public title = "Rule Def";
  private insertCMD = "INSERT_ADM_RULE_DEF";
  private updateCMD = "UPDATE_ADM_RULE_DEF";
  private deleteCMD =   "DELETE_ADM_RULE_DEF";
  private getCMD = "GET_ADM_RULE_DEF_QUERY";

  public value: Date = new Date(2019, 5, 1, 22);
  public format: string = 'MM/dd/yyyy HH:mm';
  public active = false;

  public  form: FormGroup; 
  public PDFfileName = this.title + ".PDF";
  public componentConfig: componentConfigDef;
  public grid_adm_rule_keys:componentConfigDef;

  private CurrentRec = 0;
  public  executeQueryresult:any;
  public isSearch: boolean;
  public isChild: boolean = false;
  public isMaster: boolean = false;
  public  isEnable : boolean = true;
  public hostOpened : boolean = false;
  public isROUTINEreadOnly  : boolean = false;
  public isPhonePortrait = false;
   public children = ["app-dsp-workflow"];
private Body =[];
public compSelector = "adm-rule-def-form";

  public isNew: boolean=true;
  public primarKeyReadOnlyArr = {isMODULEreadOnly : false , isRULE_IDreadOnly : false};  
  public paramConfig;
  private masterKeyArr = [];
  private masterKeyNameArr = [];
  public  masterKey="";
  public masterKeyName ="";
  public masterParams = null;
  public formattedWhere = null;  
  public  submitted =  false;
  public  grid_adm_rule_host_def: ruleHost;
  public hostID ;
  public  keysOpened : boolean = false;
  public keysData =[];
  public ruleKeysSave : boolean = false;
  public showAll : boolean = false;
  public choices = "";

  //@Input()  
  public showToolBar = true;
  @Output() readCompletedOutput: EventEmitter<any> = new EventEmitter();
  @Output() clearCompletedOutput: EventEmitter<any> = new EventEmitter();
  @Output() saveCompletedOutput: EventEmitter<any> = new EventEmitter();

  constructor(public responsive: BreakpointObserver ,public starServices: starServices, private starNotify: StarNotifyService, private starlib1: Starlib1) {  
      this.componentConfig = new componentConfigDef(); 
      this.paramConfig = getParamConfig();
      this.lkpArrQUERY_DEF = this.paramConfig.lkpArrQUERY_DEF;
      console.log("testing:this.lkpArrQUERY_DEF:", this.lkpArrQUERY_DEF)
      // if (this.paramConfig.defaultModule == "FLOW"){
      //   this.lkpArrQUERY_DEF =[
      //     {"CODE":"UPDATE_DSP_ORDERS_DISPATCH", "CODETEXT_LANG":"UPDATE_DSP_ORDERS_DISPATCH"},
      //     {"CODE":"INSERT_DSP_ORDERS", "CODETEXT_LANG":"INSERT_DSP_ORDERS"},
      //     {"CODE":"UPDATE_DSP_ORDERS", "CODETEXT_LANG":"UPDATE_DSP_ORDERS"},
      //   ]
      //     this.choices = " AND CHOICE in ('PROVBATCH',  'PRVORDERAD' , 'PRVWORDERAR') ";
      
      // }
  }

     public ngAfterViewInit() {
    this.starServices.setRTL();
   }
  public async ngOnInit() {
        this.responsive
      .observe([Breakpoints.HandsetPortrait])
      .subscribe((state: BreakpointState) => {
        
        this.isPhonePortrait = false;
        if (state.matches) {
           this.isPhonePortrait = true;
        }
        
      });
    this.starServices.actOnParamConfig(this, 'SOMRULEDEF' );
    this.form = createFormGroup(
        this.formInitialValues
    );
    if (this.paramConfig.defaultModule == "FLOW"){
        this.choices = " AND CHOICE in ('PROVBATCH',  'PRVORDERAD' , 'PRVWORDERAR') ";
    }
    //this.executeQuery (this.form);
    this.onChanges();
    this.setlookupArrDef();
    this.form.reset(this.formInitialValues);
    this.isNew = true;
    if (this.paramConfig.defaultModule == "FLOW"){
      this.showAll = false;
    }
    


    //this.grid_adm_rule_keys = new componentConfigDef();

  }
  public toggleShowAll(){
    this.showAll = !this.showAll ;
  }
  public defaultTrigger = "POST";
  public setInitialValues() {
    //this.form.patchValue({ 'MODULE': 'FLOW' });
    //console.log("setInitialValues:", this.form.value)
    if (this.paramConfig.defaultModule == "FLOW"){
      this.form.patchValue({ 'MODULE': 'FLWTRANS' });
      this.form.patchValue({ 'RULE_TRIGGER': this.defaultTrigger });
      this.form.patchValue({ 'RULE_KEY': 'ORDER_NO' });

    }
    
    this.form.markAsPristine();
    this.form.markAsUntouched();

   }

  private formInitialValues =   new ruleDef();   
  
  @Input() public set executeQueryInput( form: any) {
    if ( (typeof form != "undefined") )
    {
      this.isEnable = false;
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
  public  executeQuery( form: any ): void {
    this.starServices.executeQuery_form( form, this);
  }

  private addToBody(NewVal){
    this.Body.push(NewVal);
  }

  public onCancel(e): void {
    this.starServices.onCancel_form ( e , this);
  }

  public onNew(e): void {
    this.isROUTINEreadOnly = false;
    this.showAll = true;
    if (this.paramConfig.DEBUG_FLAG) console.log("this.masterKeyNameArr:", this.masterKeyNameArr, "this.masterKeyNameArr.length",this.masterKeyNameArr.length)
    if (this.masterKeyNameArr.length != 0)
    {
      for (var i = 0; i< this.masterKeyNameArr.length; i++){
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
    this.setInitialValues();
    this.setTransactions("");
    
  }

  public onRemove( form): void {
    this.starServices.onRemove_form(form,this);
  }

  public enterQuery (form : any): void{
    this.isROUTINEreadOnly = false;
    this.starServices.enterQuery_form ( form, this);
  }
  public FORM_TRIGGER_FAILURE;
  public disableEmitSave = false;
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
  callStarNotify(componentConfig) {



    componentConfig.eventFrom = this.compSelector;;
    if (this.paramConfig.DEBUG_FLAG) console.log('callStarNotify:componentConfig :refresh:' ,this.compSelector, componentConfig);
    this.starNotify.sendEvent<componentConfigDef>('componentConfigDef', componentConfig);
  }
 public commonCallStarNotify(formGroup) {
    let componentConfig = new componentConfigDef();
      this.formInitialValues['TEMPLATE_NAME'] = this.masterParams.TEMPLATE_NAME;
          this.formInitialValues['SEQUENCE_NAME'] = this.masterParams.SEQUENCE_NAME + '';

    let   masterParams = {
      "ACTION": "RELOAD",
      "flowCode": this.masterParams.TEMPLATE_NAME,
      "SEQUENCE_NAME": this.masterParams.SEQUENCE_NAME,
      "PROCESSING_ORDER": this.masterParams.PROCESSING_ORDER,
      "RULE_ID": formGroup.RULE_ID

      }
   


    componentConfig.eventTo = this.children;
    componentConfig.masterParams = masterParams;
    if (this.paramConfig.DEBUG_FLAG) console.log("commonCallStarNotify:refresh:", componentConfig);
    this.callStarNotify(componentConfig);

  }
  async  POST_INSERT(formGroup){
   if (this.masterParams.newRule == true){
    //   let body = [
    //   {
    //     "_QUERY": "INSERT_ADM_RULE_ITEM",
    //     "MODULE": formGroup.MODULE,
    //     "RULE_ID": formGroup.RULE_ID,
    //     "ITEM": 1,
    //     "FIELD": "",
    //     "OPERATION": "",
    //     "FIELD_VALUE": "",
    //     "DISABLED": 0,
    //     "LOGNAME": this.starServices.USERNAME,
    //     "LOGDATE": new Date(),
    //   }
    // ]
    // let data = await this.starServices.execSQLBody(this, body,"");
    this.commonCallStarNotify(formGroup);
   } 
   
  }
 async  PRE_INSERT(formGroup){
  let body = [
    {
      "_QUERY": "GET_MAX_ADM_RULE_ID",
    
    }
  ]

  
  let data = await this.starServices.execSQLBody(this, body,"");
  if (this.paramConfig.DEBUG_FLAG) console.log("data[0].data:", data[0].data[0] );
  if (typeof data[0].data[0] != "undefined"){
    formGroup.RULE_ID = data[0].data[0].RULE_ID;
    if (formGroup.RULE_ID == null)
      formGroup.RULE_ID = 1;
  }
  else
    formGroup.RULE_ID = "";

  //formGroup['LOGNAME']=  this.starServices.USERNAME ;

}
async  PRE_UPDATE(formGroup){

}
async KEY_COMMIT(){
   

}
 async WHEN_VALIDATE_RECORD(formGroup){
 }
  public saveChanges_org( form: any): void {
    if (this.isNew == true){
      var getCMD = "GET_MAX_ADM_RULE_ID";
      var page = "&_query=" + getCMD  ;
      if (this.paramConfig.DEBUG_FLAG) console.log("page:" + page)
      page = encodeURI(page);

      this.starServices.fetch(this, page).subscribe(result => {
        if (this.paramConfig.DEBUG_FLAG) console.log("result:", result.data[0].data);
        if (result != null){
          //this.serverData = result.data[0].data;
          
          if (this.paramConfig.DEBUG_FLAG) console.log("result.data[0].data:",result.data[0].data)

          var formVal = this.form.value;
          formVal.RULE_ID = result.data[0].data[0].RULE_ID;
          this.starServices.saveChanges_form ( form, this);
        }
      },
        err => {
          this.starServices.showErrorMsg(this, err);
      });
  }
  else
    this.starServices.saveChanges_form ( form, this);
  }

  public goRecord ( target:any): void{
    this.starServices.goRecord ( target, this);
  }
  
    async callBackPost_Insert(NewVal:any) {
      if (this.paramConfig.DEBUG_FLAG) console.log("callBackPost_Insert:",  " NewVal:", NewVal)
      //this.commonCallStarNotify(NewVal);
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
        // Fuad: emit already taking place in starlib service
         //this.saveCompletedOutput.emit(this.form.value);
      }
   }
  async callBackFunction(data){
    if (this.paramConfig.DEBUG_FLAG) console.log("inside callBackFunction:data:", data)
      if (typeof data !== "undefined") {
        await this.POST_QUERY(data);
      }
    this.isROUTINEreadOnly = false;

    var formVal = this.form.value;
    var ruleTrigger = formVal.RULE_TRIGGER;
    if ( (ruleTrigger == "POST") || (ruleTrigger == "PRE") ){
      this.isROUTINEreadOnly = true;
    }

  }
  async  POST_QUERY(formGroup){
    
    this.readlkpArrSEQUENCE_NAME(formGroup['TEMPLATE_NAME']);
    this.setTransactions(formGroup['TEMPLATE_NAME']);
    this.showAll = false;
  }
  
public userLang = "EN" ; 
public lookupArrDef:any =[];
public setlookupArrDef(){
  this.lookupArrDef =[	{"statment":"select CHOICE CODE, MENU_TEXT CODETEXT_LANG from MENUS m where MENU  in (" + this.paramConfig.licensedModules + ") and LANGUAGE_NAME = '" + this.userLang + "' order by CODETEXT_LANG ",
    "lkpArrName":"lkpArrMODULE"},


    {"statment":"SELECT CODE, CODETEXT_LANG, CODEVALUE_LANG FROM SOM_TABS_CODES WHERE CODENAME ='RULE_TRIGGER' and LANGUAGE_NAME = '" + this.userLang + "' order by CODETEXT_LANG",
    "lkpArrName":"lkpArrRULE_TRIGGER"},
    { "statment": "select distinct CHOICE CODE, MENU_TEXT CODETEXT_LANG from MENUS "
      + " WHERE LANGUAGE_NAME = '" + this.userLang + "' " 
      + this.choices
      + " order by CODETEXT_LANG",
    "lkpArrName": "lkpArrROUTINE" },
    {
      "statment": "SELECT TEMPLATE_NAME CODE, TEMPLATE_NAME CODETEXT_LANG FROM DSP_TEMPLATE  ",
      "lkpArrName": "lkpArrTEMPLATE_NAME"
    }

];
this.starServices.fetchLookups(this, this.lookupArrDef);
}


      
public lkpArrMODULE = [];
public lkpArrRULE_TRIGGER = [];
public lkpArrROUTINE = [];
public lkpArrQUERY_DEF = [];
public lkpArrTEMPLATE_NAME = [];
public lkpArrSEQUENCE_NAME = [];


public lkpArrGetMODULE(CODE: any): any {
// Change x.CODE below if not from SOM_TABS_CODE
var rec = this.lkpArrMODULE.find(x => x.CODE === CODE);
return rec;
}
public lkpArrGetRULE_TRIGGER(CODE: any): any {
  // Change x.CODE below if not from SOM_TABS_CODE
  var rec = this.lkpArrRULE_TRIGGER.find(x => x.CODE === CODE);
  return rec;
  }
  public lkpArrGetROUTINE(CODE: any): any {
    // Change x.CODE below if not from SOM_TABS_CODE
    var rec = this.lkpArrROUTINE.find(x => x.CODE === CODE);
    return rec;
    }
  
  public lkpArrGetQUERY_DEF(CODE: any): any {
    // Change x.CODE below if not from SOM_TABS_CODE
    //console.log("testing:lkpArrGetQUERY_DEF:CODE:", CODE, "this.lkpArrQUERY_DEF:", this.lkpArrQUERY_DEF[35]);
    var rec = this.lkpArrQUERY_DEF.find(x => x.CODE === CODE);
    //console.log("testing:lkpArrGetQUERY_DEF:CODE:", CODE, "rec:", rec);
    return rec;
    }
  public lkpArrGetTEMPLATE_NAME(CODE: any): any {
    console.log("lkpArrGetTEMPLATE_NAME")
    // Change x.CODE below if not from SOM_TABS_CODE
    var rec = this.lkpArrTEMPLATE_NAME.find((x:any) => x.CODE === CODE);
    return rec;
  }
  
onChanges(): void {
this.form.get('MODULE').valueChanges.subscribe(val => {
//this.lookupArrDef =[];
//this.starServices.fetchLookups(this, this.lookupArrDef);
});

this.form.get('RULE_TRIGGER').valueChanges.subscribe(val => {
  // this.isROUTINEreadOnly = false;
  // if (this.paramConfig.DEBUG_FLAG) console.log("testx:val:", val)
  //   if ( (val == "POST") || (val == "PRE") ){
  //     this.isROUTINEreadOnly = true;
  //     this.form.controls['ROUTINE_NAME'].setValue("");
  //   }

  });
  this.form.get('QUERY_DEF').valueChanges.subscribe(val => {
    //this.lookupArrDef =[];
    //this.starServices.fetchLookups(this, this.lookupArrDef);
    });
    this.form.get('TEMPLATE_NAME').valueChanges.subscribe(val => {
      if (this.paramConfig.DEBUG_FLAG) console.log("testx:TEMPLATE_NAME:", val)
      //this.lookupArrDef =[];
      //this.starServices.fetchLookups(this, this.lookupArrDef);
      });
}

public viewHost(){
  
  this.hostOpened = true; 
  this.grid_adm_rule_host_def = new ruleHost(); 
  this.grid_adm_rule_host_def.HOST_ID =  "%";

}
public hostClose(){
  this.hostOpened = false; 
}

public keysOpen(){
  var queryDef = this.form.get('QUERY_DEF').value;
  if (this.paramConfig.DEBUG_FLAG) console.log("testing:queryDef:",queryDef);
  this.keysData =[];
  if (queryDef != "")
  {
      var rec = this.lkpArrGetQUERY_DEF(queryDef);
      if (this.paramConfig.DEBUG_FLAG) console.log("testing:rec:",rec);

      if (typeof rec !== "undefined"){
        var statement = rec.statement;
        statement = statement.join("");
        if (this.paramConfig.DEBUG_FLAG) console.log ("statement:",statement)
        if (this.paramConfig.DEBUG_FLAG) console.log("rec:",rec);
        var whereStr = " WHERE ";
        var insertStr = "INSERT";
        

        
        var wherePos = statement.toUpperCase().search(whereStr);
        if (wherePos != -1){
          var keysStr = statement.slice(wherePos +whereStr.length);
          var arrayphrase = keysStr.toUpperCase().split(" AND ");
          if (this.paramConfig.DEBUG_FLAG) console.log ("arrayphrase:",arrayphrase)
          for (var i = 0; i < arrayphrase.length; i++)
          {
            var arrayCols = arrayphrase[i].split("=");
            if (this.paramConfig.DEBUG_FLAG) console.log ("arrayCols:",arrayCols);
            var COL_NAME = arrayCols[0].trim();
            if (this.paramConfig.DEBUG_FLAG) console.log ("COL_NAME:",COL_NAME);
            var colRec = {
              COL_NAME :COL_NAME,
              SELECTED : false
            }
            this.keysData.push(colRec);
          }
        }
        else
        {
          statement = statement.trim();
          if (this.paramConfig.DEBUG_FLAG) console.log ("statement:",statement)
          var insertFound = statement.toUpperCase().startsWith(insertStr);
          if (insertFound == true ){
            var insertPos = statement.toUpperCase().search(insertStr);
            var phrase1 = statement.slice(insertPos + insertStr.length);
            if (this.paramConfig.DEBUG_FLAG) console.log ("phrase1:",phrase1)
            var phrasePos = phrase1.indexOf("(");
            if (phrasePos != -1){
              var phraseStr = phrase1.slice(phrasePos + 1);
              if (this.paramConfig.DEBUG_FLAG) console.log ("phraseStr:",phraseStr)

              var phrasePos = phraseStr.indexOf(")");
              if (phrasePos != -1){
                var keysStr = phraseStr.slice(0, phrasePos );
      
                var arrayphrase = keysStr.toUpperCase().split(",");
                if (this.paramConfig.DEBUG_FLAG) console.log ("arrayphrase:",arrayphrase);
                for (var i = 0; i < arrayphrase.length; i++)
                {
                  var COL_NAME = arrayphrase[i].trim();
                  if (this.paramConfig.DEBUG_FLAG) console.log ("COL_NAME:",COL_NAME);
                  var colRec = {
                    COL_NAME :COL_NAME,
                    SELECTED : false
                  }
                  this.keysData.push(colRec);
                }
              }
            }
          }
        }
        if (this.paramConfig.DEBUG_FLAG) console.log("this.keysData:", this.keysData);
        if (this.keysData.length != 0)
        {
          var ruleKeys = this.form.get('RULE_KEY').value;
          var keys = ruleKeys.split(",");
          for (var i = 0; i < keys.length; i++)
          {
            var COL_NAME = keys[i].trim();
            var rec = this.keysData.find(x => x.COL_NAME === COL_NAME);
            if (this.paramConfig.DEBUG_FLAG) console.log("COL_NAME:", COL_NAME, " rec:", rec)
            if (typeof rec !== "undefined"){
              rec.SELECTED = true;
            }
            if (this.paramConfig.DEBUG_FLAG) console.log("this.keysData:", this.keysData);
          }
        }
        else
        {

        }
      }
      this.keysOpened = true; 
      this.ruleKeysSave = false;
      //this.grid_adm_rule_host_def = new ruleHost(); 
      //this.grid_adm_rule_host_def.HOST_ID =  "%";
      var masterParams={
        "result" : this.keysData        
      };
      if (this.paramConfig.DEBUG_FLAG) console.log("masterParams:", masterParams)
    

      this.grid_adm_rule_keys = new componentConfigDef();
      this.grid_adm_rule_keys.masterParams = masterParams;
   }
  else
  {
    this.starServices.showOkMsg(this,"Please select a Transaction.","Error");
    return;
  }
}
public keysClose(){
  if (this.paramConfig.DEBUG_FLAG) console.log("keysClose: this.keysOpened:", this.keysOpened)
  this.keysOpened = false; 
}
public ruleKeys = "";
public onSaveKeys(e): void {
  e.preventDefault();
  this.keysOpened = false; 
  this.ruleKeysSave = true;
  if (this.ruleKeysSave == true){
    var formVal = this.form.value;
    if (this.paramConfig.DEBUG_FLAG) console.log("saveCompletedHandler:ruleKeys,", this.ruleKeys)
    formVal["RULE_KEY"] = this.ruleKeys;
    this.form.reset(formVal)
  }

 }

public onCancelKeys(e): void {
  e.preventDefault();
  this.keysClose();
}
public saveCompletedHandler( grid_ADM_ADM_RULE_KEYS) {
  if (this.paramConfig.DEBUG_FLAG) console.log("test:this.ruleKeysSave :", this.ruleKeysSave , " grid_ADM_ADM_RULE_KEYS:", grid_ADM_ADM_RULE_KEYS.data);

  this.ruleKeys = "";
  for (var i=0; i < grid_ADM_ADM_RULE_KEYS.data.length; i++){
    if (grid_ADM_ADM_RULE_KEYS.data[i].SELECTED == true){
      if (this.ruleKeys != "")
        this.ruleKeys = this.ruleKeys + ",";
      this.ruleKeys = this.ruleKeys + grid_ADM_ADM_RULE_KEYS.data[i].COL_NAME;
    }
  }
  // if (this.ruleKeysSave == true){
  //   var formVal = this.form.value;
  //   if (this.paramConfig.DEBUG_FLAG) console.log("saveCompletedHandler:ruleKeys,", ruleKeys)
  //   formVal["RULE_KEY"] = ruleKeys;
  //   this.form.reset(formVal)
  // }
}
public valueChangeQUERY_DEF(value: any): void {
  if (this.paramConfig.DEBUG_FLAG) console.log("valueChangeQUERY_DEF:")
  var formVal = this.form.value;
  
  //formVal["RULE_KEY"] = "";
  //this.form.reset(formVal)
  
  }
  public readlkpArrSEQUENCE_NAME(value){

    console.log("readlkpArrSEQUENCE_NAME:", value);
    let  lookupArrDef =[
      {
        "statment": "SELECT SEQUENCE_NAME || '' CODE, SEQUENCE_NAME || ' '  || WO_TYPE ||' By '|| ASSIGNEE_TYPE ||' '|| ASSIGNEE CODETEXT_LANG "
        + "FROM DSP_TEMPLATE_DETAIL   where TEMPLATE_NAME  = '" + value + "'",
        "lkpArrName": "lkpArrSEQUENCE_NAME"
      }
    ];
    this.starServices.fetchLookups(this, lookupArrDef);

  }
  public setTransactions(value){
    console.log("valueChangeTEMPLATE_NAME:value:",value, this.paramConfig.defaultModule)
    this.lkpArrQUERY_DEF = this.paramConfig.lkpArrQUERY_DEF;
    this.paramConfig = getParamConfig();
    // if (this.paramConfig.defaultModule == "FLOW" || value != ""){
    //   this.lkpArrQUERY_DEF =[
    //     {"CODE":"UPDATE_DSP_ORDERS_DISPATCH", "CODETEXT_LANG":"UPDATE_DSP_ORDERS_DISPATCH"},
    //     {"CODE":"INSERT_DSP_ORDERS", "CODETEXT_LANG":"INSERT_DSP_ORDERS"},
    //     {"CODE":"UPDATE_DSP_ORDERS", "CODETEXT_LANG":"UPDATE_DSP_ORDERS"},
    //   ]
    //     this.choices = " AND CHOICE in ('PROVBATCH',  'PRVORDERAD' , 'PRVWORDERAR') ";
    
    // }
  }
  public valueChangeTEMPLATE_NAME(value: any): void {
   
    this.readlkpArrSEQUENCE_NAME(value);
    this.setTransactions(value);
    
    
  }
  public valueChangeSEQUENCE_NAME(value: any): void {
    console.log("valueChangeSEQUENCE_NAME")
  }
  
public printScreen(){
  window.print();
}
  @Input() public set setComponentConfig_Input(ComponentConfig: componentConfigDef) {

    if (typeof ComponentConfig !== "undefined"){
      if (this.paramConfig.DEBUG_FLAG) console.log("adm-rule-def-form ComponentConfig:",ComponentConfig);
      console.log("checking:", this.paramConfig.defaultModule,this.choices, this.lookupArrDef )
      this.setlookupArrDef();
	    this.componentConfig = this.starServices.setComponentConfig(ComponentConfig, this.componentConfig  );
	    if (ComponentConfig.isMaster == true)
	     this.isMaster = true;

	    if ( ComponentConfig.masterSaved != null)
	    {
	      this.saveChanges(this.form);
	      ComponentConfig.masterSaved  = null;
	    }
	    if ( ComponentConfig.masterKey != null)
	    {
	       this.isEnable = false;
	       this.masterKey = ComponentConfig.masterKey;
	    }
	    if ( ComponentConfig.masterKeyArr != null)
	    {
	      this.masterKeyArr = ComponentConfig.masterKeyArr;
	    }
	    if ( ComponentConfig.masterKeyNameArr != null)
	    {
	      this.masterKeyNameArr = ComponentConfig.masterKeyNameArr;
	    }

	    if ( ComponentConfig.formattedWhere != null)
	    {
        this.componentConfig.queryable  = false;
        this.componentConfig.navigable = false;
	      this.formattedWhere = ComponentConfig.formattedWhere ;
	      this.isSearch =  true;
	      this.executeQuery(this.form)
		
	    }
      if (ComponentConfig.clearComponent == true) {
        this.onCancel(this.form)
      }
      if ( ComponentConfig.masterParams != null)
	    {
	      this.masterParams = ComponentConfig.masterParams;
        if (this.masterParams.newRule){ 
          this.isNew = true;
          this.form.reset(this.formInitialValues);
          this.setTransactions(this.form.value['TEMPLATE_NAME']);

          this.formInitialValues['TEMPLATE_NAME'] = this.masterParams.TEMPLATE_NAME;
          this.formInitialValues['SEQUENCE_NAME'] = this.masterParams.SEQUENCE_NAME + '';
          this.formInitialValues['RULE_DESCRIPTION'] = this.masterParams.DESCRIPTION;
          this.defaultTrigger = this.masterParams.DEFAULT_TRIGGER,
          this.formInitialValues['MODULE'] = this.masterParams.MODULE;
          this.formInitialValues['ROUTINE_NAME'] = 'PRVWORDERAR';
          this.formInitialValues['QUERY_DEF'] = this.lkpArrQUERY_DEF[0].CODE;
          
          
          console.log("this.formInitialValues:", this.lkpArrROUTINE, this.lkpArrQUERY_DEF, this.formInitialValues);
          
          this.onNew(this.form);
          this.readlkpArrSEQUENCE_NAME(this.form.value['TEMPLATE_NAME']);
          this.saveChanges(this.form);
          


        }
	    }
      
	  }
  }


}


