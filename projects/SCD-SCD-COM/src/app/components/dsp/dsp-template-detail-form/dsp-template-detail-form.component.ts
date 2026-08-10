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
import { templateDetail , componentConfigDef} from '@modeldir/model';


 const createFormGroup = (dataItem:any) => new FormGroup({
'TEMPLATE_NAME' : new FormControl(dataItem.TEMPLATE_NAME  ,   Validators.required ) ,
'WO_TYPE' : new FormControl(dataItem.WO_TYPE  ,   Validators.required ) ,
'SEQUENCE_NAME' : new FormControl(dataItem.SEQUENCE_NAME  ,   Validators.required ) ,
'TEMPLATE_ORDER' : new FormControl(dataItem.TEMPLATE_ORDER  ,   Validators.required ) ,
'DESCRIPTION' : new FormControl(dataItem.DESCRIPTION  ,   Validators.required ) ,
'DEPENDANT_WO_ORDER' : new FormControl(dataItem.DEPENDANT_WO_ORDER  , ) ,
'DIVS' : new FormControl(dataItem.DIVS  , ) ,
'DEPT' : new FormControl(dataItem.DEPT  , ) ,
'DURATION' : new FormControl(dataItem.DURATION  , ) ,
'ASSIGNEE' : new FormControl(dataItem.ASSIGNEE  , ) ,
'ASSIGNEE_TYPE' : new FormControl(dataItem.ASSIGNEE_TYPE  , ) ,
'FORM_PAGES_NO' : new FormControl(dataItem.FORM_PAGES_NO  , ) ,
'LOGDATE' : new FormControl(dataItem.LOGDATE  , ) ,
'LOGNAME' : new FormControl(dataItem.LOGNAME  , ) ,
'REJECT_SEQ' : new FormControl(dataItem.REJECT_SEQ  , ) ,
'APPROVE_SEQ' : new FormControl(dataItem.APPROVE_SEQ  , ) ,
'MODIFY_SEQ' : new FormControl(dataItem.MODIFY_SEQ  , ) ,
});

declare function getParamConfig():any;
@Component({
  selector: 'app-dsp-template-detail-form',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './dsp-template-detail-form.component.html',
  styleUrls: ['./dsp-template-detail-form.component.scss']
})


export class DspTemplateDetailFormComponent {
  public title =  this.starServices.getNLS([],"dsp_template_detail_form.dsptemplateDetail.component_title","");
  public routineName = "DspTemplateDetailForm";
  private insertCMD = "INSERT_DSP_TEMPLATE_DETAIL";
  private updateCMD = "UPDATE_DSP_TEMPLATE_DETAIL";
  private deleteCMD =   "DELETE_DSP_TEMPLATE_DETAIL";
  private getCMD = "GET_DSP_TEMPLATE_DETAIL_QUERY";

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
  public  isTEMPLATE_NAMEEnable : boolean = true;

  public FORM_TRIGGER_FAILURE:any;
  public NOTFOUND:any;
  public disableEmitSave = false;
  public disableEmitReadCompleted = false;
  public children = ["any"];

  public action = "";
  private Body:any =[];
  private isNew!: boolean;
  public primarKeyReadOnlyArr = {isTEMPLATE_NAMEreadOnly : false , isSEQUENCE_NAMEreadOnly : false};  
  public paramConfig;
  private masterKeyArr = [];
  private masterKeyNameArr = [];
  public  masterKey="";
  public masterKeyName ="TEMPLATE_NAME";
  public WhereClause = "";
  public OrderByClause = "";
  
  public formattedWhere:any = null;  
  public  submitted =  false;
  public masterParams:any;
public isPhonePortrait = false;
public compSelector = 'app-dsp-template-detail-form';
public labelTEMPLATE_NAMETop=false;
public labelTEMPLATE_NAMEVisible=true;
public labelWO_TYPETop=false;
public labelWO_TYPEVisible=true;
public labelSEQUENCE_NAMETop=false;
public labelSEQUENCE_NAMEVisible=true;
public labelTEMPLATE_ORDERTop=false;
public labelTEMPLATE_ORDERVisible=true;
public labelDESCRIPTIONTop=false;
public labelDESCRIPTIONVisible=true;
public labelDEPENDANT_WO_ORDERTop=false;
public labelDEPENDANT_WO_ORDERVisible=true;
public labelDIVSTop=false;
public labelDIVSVisible=true;
public labelDEPTTop=false;
public labelDEPTVisible=true;
public labelDURATIONTop=false;
public labelDURATIONVisible=true;
public labelASSIGNEETop=false;
public labelASSIGNEEVisible=true;
public labelASSIGNEE_TYPETop=false;
public labelASSIGNEE_TYPEVisible=true;
public labelFORM_PAGES_NOTop=false;
public labelFORM_PAGES_NOVisible=true;
public labelLOGDATETop=false;
public labelLOGDATEVisible=true;
public labelLOGNAMETop=false;
public labelLOGNAMEVisible=true;
public labelREJECT_SEQTop=false;
public labelREJECT_SEQVisible=true;
public labelAPPROVE_SEQTop=false;
public labelAPPROVE_SEQVisible=true;
public labelMODIFY_SEQTop=false;
public labelMODIFY_SEQVisible=true;

  
  //@Input()  
  public showToolBar = true;
  @Output() readCompletedOutput: EventEmitter<any> = new EventEmitter();
  @Output() clearCompletedOutput: EventEmitter<any> = new EventEmitter();
  @Output() saveCompletedOutput: EventEmitter<any> = new EventEmitter();
  @Output() formValidationChangedOutput: EventEmitter<boolean> = new EventEmitter();

   constructor(public router: Router,public intl: IntlService, public responsive: BreakpointObserver, private starNotify: StarNotifyService, private starlib1: Starlib1,  public starServices: starServices) {
      this.router = router;
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

  private formInitialValues:any =   new templateDetail();   
    @Input() public set detail_Input(form: any) {
       if (typeof form != "undefined"){
        this.isSearch = true;
        this.executeQuery(form);
        this.isChild = true;
      }
      /*
    if (this.paramConfig.DEBUG_FLAG) console.log('detail_Input DspTemplateDetailForm form.TEMPLATE_NAME :' + form.TEMPLATE_NAME);
    if ( (form.TEMPLATE_NAME != "") &&   (typeof form.TEMPLATE_NAME != "undefined"))
    {
      this.masterKey = form.TEMPLATE_NAME;
      
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
    if (this.paramConfig.DEBUG_FLAG) console.log("executeQuery_form object.form:", form);
    if ( (typeof form != "undefined") &&   (typeof form.TEMPLATE_NAME != "undefined") &&   (form.TEMPLATE_NAME != ""))
    {
      
      this.isSearch = true;
      this.executeQuery(form);
      //this.isChild = true;
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
  public fillLkps(data){
    console.log("fillLkps:data:", data);
    this.lkpArrDETAIL =[];
    let rec = {
      CODE:"",
      CODETEXT_LANG: ""
    };
    this.lkpArrDETAIL.push (rec);
   
    for (let i=0; i< data.length; i++){
      let CODE = data[i].SEQUENCE_NAME;
      let CODETEXT_LANG  =  CODE + ":" + data[i].WO_TYPE + ' by ' + data[i].ASSIGNEE;
      let rec = {
        CODE:CODE+"",
        CODETEXT_LANG: CODETEXT_LANG
      };
      this.lkpArrDETAIL.push (rec);
    }
    this.lkpArrDEPENDANT_WO_ORDER = Object.assign([], this.lkpArrDETAIL);

    rec = {
      CODE:"-1",
      CODETEXT_LANG: "Goto End"
    };
    this.lkpArrDETAIL.push (rec);
  }

  get f():any { return this.form.controls; }

   async callBackFunction(data:any) {
    if (this.paramConfig.DEBUG_FLAG) console.log("inside callBackFunction:data:", data);
     this.form.markAllAsTouched()
    setTimeout(() => {
      this.formValidationChangedOutput.emit(this.form.valid)
    }, 100)

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

      let masterKeyArr = [data['TEMPLATE_NAME']];
      let masterKeyNameArr = ['TEMPLATE_NAME'];
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
  public tempOrder;
  async setSeqOrder(){
    this.tempOrder = 1;
    console.log ("this.executeQueryresult:setSeqOrder:", typeof (this.executeQueryresult) , this.CurrentRec)
    if (typeof (this.executeQueryresult)  == "undefined"){
       this.formInitialValues["SEQUENCE_NAME"] = 1;
       this.formInitialValues["TEMPLATE_ORDER"] = 1;
    }
    else{
      console.log ("this.executeQueryresult:setSeqOrder:", this.executeQueryresult.data , this.CurrentRec)
      let seqNum = this.executeQueryresult.data[0].SEQUENCE_NAME;
      this.tempOrder = this.executeQueryresult.data[0].TEMPLATE_ORDER;
      this.formInitialValues["TEMPLATE_ORDER"] = this.tempOrder + 1;
      let sqlStmt = "select max(SEQUENCE_NAME) SEQUENCE_NAME from DSP_TEMPLATE_DETAIL where TEMPLATE_NAME = '" + 
                      this.formInitialValues["TEMPLATE_NAME"] + "'"
                      + " AND SEQUENCE_NAME <> '' ";
     
      let body = [
      {
        "_QUERY": "GET_STMT",
        "_STMT": sqlStmt
      }
       
      
    ]

    let compType = ""
    let data = await this.starServices.execSQLBody(this, body, "");
    if (this.paramConfig.DEBUG_FLAG) console.log("setSeqOrder:data[0].data:", data[0].data[0] );
    if (typeof data[0].data[0] != "undefined") {
      let SeqName = data[0].data[0].SEQUENCE_NAME;
      this.formInitialValues["SEQUENCE_NAME"] = SeqName + 1;
      if (this.paramConfig.DEBUG_FLAG) console.log("setSeqOrderthis.formInitialValues:",this.formInitialValues);
      
    }
    }
  }
  async onNew(e:any) {
    if (this.paramConfig.DEBUG_FLAG) console.log("this.masterKeyNameArr:", this.masterKeyNameArr, "this.masterKeyNameArr.length",this.masterKeyNameArr.length)
    console.log ("this.executeQueryresult:", this.executeQueryresult, this.CurrentRec)
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
    await this.setSeqOrder();
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
        // Fuad: emit already taking place in starlib service
         //this.saveCompletedOutput.emit(this.form.value);
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
this.lookupArrDef =[{"statment":"SELECT CODE,  CODETEXT_LANG FROM SOM_TABS_CODES WHERE CODENAME ='WO_TYPE' and LANGUAGE_NAME = '" + this.userLang + "' order by CODETEXT_LANG  ",
			"lkpArrName":"lkpArrWO_TYPE"},
      {"statment":"SELECT CODE, CODETEXT_LANG FROM SOM_TABS_CODES WHERE CODENAME ='ASSIGNEE_TYPE' and LANGUAGE_NAME = '" + this.userLang + "' order by CODETEXT_LANG  ",
			"lkpArrName":"lkpArrASSIGNEE_TYPE"},
      {"statment":"SELECT TEAM  CODE, FULLNAME CODETEXT_LANG, DEPT, DIVS  FROM ADM_TEAM  ",
      "lkpArrName":"lkpArrASSIGNEE_TEAMS"},
       {"statment":"SELECT USERNAME  CODE, FULLNAME CODETEXT_LANG, DEPT, DIVS, TEAM FROM ADM_USER_INFORMATION  ",
      "lkpArrName":"lkpArrASSIGNEE_PERSON"},
      {"statment":"SELECT CODE, CODETEXT_LANG FROM SOM_TABS_CODES WHERE CODENAME ='EXCH_SYST' and LANGUAGE_NAME = '" + this.userLang + "' order by CODETEXT_LANG",
      "lkpArrName":"lkpArrASSIGNEE_NETWORK"},  
        {"statment":"SELECT CODE, CODE CODETEXT_LANG FROM SOM_TABS_CODES WHERE CODENAME ='API' and LANGUAGE_NAME = '" + this.userLang + "' order by CODETEXT_LANG",
    "lkpArrName":"lkpArrASSIGNEE_API"}, 
        {"statment":"SELECT CODE, CODETEXT_LANG FROM SOM_TABS_CODES WHERE CODENAME ='ROLE' and LANGUAGE_NAME = '" + this.userLang + "' order by CODETEXT_LANG",
      "lkpArrName":"lkpArrASSIGNEE_ROLE"}, 
      {"statment":"SELECT CODE, CODE CODETEXT_LANG FROM SOM_TABS_CODES WHERE CODENAME ='URL' and LANGUAGE_NAME = '" + this.userLang + "' order by CODETEXT_LANG",
    "lkpArrName":"lkpArrASSIGNEE_URL"}, 
     {
      "statment": "SELECT CODE, CODE CODETEXT_LANG FROM SOM_TABS_CODES WHERE CODENAME ='NAVIGATE' and LANGUAGE_NAME = '" + this.userLang + "' order by CODETEXT_LANG",
      "lkpArrName": "lkpArrASSIGNEE_NAVIGATE"
    },
  ];
this.starServices.fetchLookups(this, this.lookupArrDef);
}


public lkpArrWO_TYPE = [];

public lkpArrDEPT = [];

public lkpArrASSIGNEE = [];

public lkpArrASSIGNEE_TYPE = [];
public lkpArrDETAIL = [];
public lkpArrDEPENDANT_WO_ORDER =[];
public lkpArrASSIGNEE_TEAMS = [];
public lkpArrASSIGNEE_PERSON = [];
public lkpArrASSIGNEE_NETWORK = [];
public lkpArrASSIGNEE_API = [];
public lkpArrASSIGNEE_ROLE = [];
public lkpArrASSIGNEE_URL = [];
public lkpArrASSIGNEE_NAVIGATE = [];

public lkpArrGetWO_TYPE(CODE: any): any {
var rec = this.lkpArrWO_TYPE.find((x:any) => x.CODE === CODE);
return rec;
}

public lkpArrGetDEPT(CODE: any): any {
var rec = this.lkpArrDEPT.find((x:any) => x.CODE === CODE);
return rec;
}

public lkpArrGetASSIGNEE(CODE: any): any {
var rec = this.lkpArrASSIGNEE.find((x:any) => x.CODE === CODE);
return rec;
}

public lkpArrGetASSIGNEE_TYPE(CODE: any): any {
var rec = this.lkpArrASSIGNEE_TYPE.find((x:any) => x.CODE === CODE);
return rec;
}

onChanges(): void {
this.form.get('TEMPLATE_NAME').valueChanges.subscribe(val => {
});
this.form.get('SEQUENCE_NAME').valueChanges.subscribe(val => {
});
this.form.get('TEMPLATE_ORDER').valueChanges.subscribe(val => {
});
this.form.get('DESCRIPTION').valueChanges.subscribe(val => {
});
this.form.get('DEPENDANT_WO_ORDER').valueChanges.subscribe(val => {
});
this.form.get('DIVS').valueChanges.subscribe(val => {
});
this.form.get('DURATION').valueChanges.subscribe(val => {
});
this.form.get('FORM_PAGES_NO').valueChanges.subscribe(val => {
});
this.form.get('LOGDATE').valueChanges.subscribe(val => {
});
this.form.get('LOGNAME').valueChanges.subscribe(val => {
});
this.form.get('REJECT_SEQ').valueChanges.subscribe(val => {
});
this.form.get('APPROVE_SEQ').valueChanges.subscribe(val => {
});
}


public printScreen(){
  window.print();
}
  public handleComponentConfig(ComponentConfig:any) {
    if (typeof ComponentConfig !== "undefined") {
      if (this.paramConfig.DEBUG_FLAG) console.log("DspTemplateDetailForm ComponentConfig:", ComponentConfig);

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
      if (ComponentConfig.newRec != null) {
        this.form.reset(this.formInitialValues);
        this.onNew(this.form);
      }
      if (ComponentConfig.masterParams != null) {
        this.masterParams = ComponentConfig.masterParams;
        this.fillLkps (this.masterParams.workOrders)
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
      if (typeof this.form != "undefined") {
            this.formValidationChangedOutput.emit(this.form.valid)
            this.form.statusChanges.subscribe(() => {
              this.formValidationChangedOutput.emit(this.form.valid)
            })
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
    let sqlStmt = "update  DSP_TEMPLATE_DETAIL  set TEMPLATE_ORDER =  TEMPLATE_ORDER + 1 "
         + " where TEMPLATE_NAME = '" + formGroup.TEMPLATE_NAME + "'"
          + " AND TEMPLATE_ORDER > '" + + this.tempOrder + "'"
     
      let NewVal = 
      {
        "_QUERY": "GET_STMT",
        "_STMT": sqlStmt
      }
      this.Body.push(NewVal);
    
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


async POST_CHANGE_TEMPLATE_NAME(value) {

 this.FORM_TRIGGER_FAILURE = false ; 
 this.form.controls['TEMPLATE_NAME'].setErrors({invalid: true}); 
 // Code goes here 

 if ( this.FORM_TRIGGER_FAILURE == true) 
 return; 
 
 this.form.controls['TEMPLATE_NAME'].clearValidators();
 this.form.get('TEMPLATE_NAME').updateValueAndValidity();
 this.form.updateValueAndValidity(); 
 }
async ON_CLICK_TEMPLATE_NAME(event) {

 }
async POST_CHANGE_WO_TYPE(value) {

 this.FORM_TRIGGER_FAILURE = false ; 
 this.form.controls['WO_TYPE'].setErrors({invalid: true}); 
 // Code goes here 

 if ( this.FORM_TRIGGER_FAILURE == true) 
 return; 
 
 this.form.controls['WO_TYPE'].clearValidators();
 this.form.get('WO_TYPE').updateValueAndValidity();
 this.form.updateValueAndValidity(); 
 }
async ON_CLICK_WO_TYPE(event) {

 }
async POST_CHANGE_SEQUENCE_NAME(value) {

 this.FORM_TRIGGER_FAILURE = false ; 
 this.form.controls['SEQUENCE_NAME'].setErrors({invalid: true}); 
 // Code goes here 

 if ( this.FORM_TRIGGER_FAILURE == true) 
 return; 
 
 this.form.controls['SEQUENCE_NAME'].clearValidators();
 this.form.get('SEQUENCE_NAME').updateValueAndValidity();
 this.form.updateValueAndValidity(); 
 }
async ON_CLICK_SEQUENCE_NAME(event) {

 }
async POST_CHANGE_TEMPLATE_ORDER(value) {

 this.FORM_TRIGGER_FAILURE = false ; 
 this.form.controls['TEMPLATE_ORDER'].setErrors({invalid: true}); 
 // Code goes here 

 if ( this.FORM_TRIGGER_FAILURE == true) 
 return; 
 
 this.form.controls['TEMPLATE_ORDER'].clearValidators();
 this.form.get('TEMPLATE_ORDER').updateValueAndValidity();
 this.form.updateValueAndValidity(); 
 }
async ON_CLICK_TEMPLATE_ORDER(event) {

 }
 async POST_CHANGE_DESCRIPTION(value) {

 this.FORM_TRIGGER_FAILURE = false ; 
 this.form.controls['DESCRIPTION'].setErrors({invalid: true}); 
 // Code goes here 

 if ( this.FORM_TRIGGER_FAILURE == true) 
 return; 
 
 this.form.controls['DESCRIPTION'].clearValidators();
 this.form.get('DESCRIPTION').updateValueAndValidity();
 this.form.updateValueAndValidity(); 
 }
async ON_CLICK_DESCRIPTION(event) {

 }
async POST_CHANGE_DEPENDANT_WO_ORDER(value) {

 this.FORM_TRIGGER_FAILURE = false ; 
 this.form.controls['DEPENDANT_WO_ORDER'].setErrors({invalid: true}); 
 // Code goes here 

 if ( this.FORM_TRIGGER_FAILURE == true) 
 return; 
 
 this.form.controls['DEPENDANT_WO_ORDER'].clearValidators();
 this.form.get('DEPENDANT_WO_ORDER').updateValueAndValidity();
 this.form.updateValueAndValidity(); 
 }
async ON_CLICK_DEPENDANT_WO_ORDER(event) {

 }
async POST_CHANGE_DIVS(value) {

 this.FORM_TRIGGER_FAILURE = false ; 
 this.form.controls['DIVS'].setErrors({invalid: true}); 
 // Code goes here 

 if ( this.FORM_TRIGGER_FAILURE == true) 
 return; 
 
 this.form.controls['DIVS'].clearValidators();
 this.form.get('DIVS').updateValueAndValidity();
 this.form.updateValueAndValidity(); 
 }
async ON_CLICK_DIVS(event) {

 }
async POST_CHANGE_DEPT(value) {

 this.FORM_TRIGGER_FAILURE = false ; 
 this.form.controls['DEPT'].setErrors({invalid: true}); 
 // Code goes here 

 if ( this.FORM_TRIGGER_FAILURE == true) 
 return; 
 
 this.form.controls['DEPT'].clearValidators();
 this.form.get('DEPT').updateValueAndValidity();
 this.form.updateValueAndValidity(); 
 }
async ON_CLICK_DEPT(event) {

 }
async POST_CHANGE_DURATION(value) {

 this.FORM_TRIGGER_FAILURE = false ; 
 this.form.controls['DURATION'].setErrors({invalid: true}); 
 // Code goes here 

 if ( this.FORM_TRIGGER_FAILURE == true) 
 return; 
 
 this.form.controls['DURATION'].clearValidators();
 this.form.get('DURATION').updateValueAndValidity();
 this.form.updateValueAndValidity(); 
 }
async ON_CLICK_DURATION(event) {

 }
async POST_CHANGE_ASSIGNEE(value) {

 this.FORM_TRIGGER_FAILURE = false ; 
 this.form.controls['ASSIGNEE'].setErrors({invalid: true}); 
 // Code goes here 

 if ( this.FORM_TRIGGER_FAILURE == true) 
 return; 
 
 this.form.controls['ASSIGNEE'].clearValidators();
 this.form.get('ASSIGNEE').updateValueAndValidity();
 this.form.updateValueAndValidity(); 
 }
async ON_CLICK_ASSIGNEE(event) {

 }
async POST_CHANGE_ASSIGNEE_TYPE(value) {

 this.FORM_TRIGGER_FAILURE = false ; 
 this.form.controls['ASSIGNEE_TYPE'].setErrors({invalid: true}); 
 // Code goes here 

 if ( this.FORM_TRIGGER_FAILURE == true) 
 return; 
 
 this.form.controls['ASSIGNEE_TYPE'].clearValidators();
 this.form.get('ASSIGNEE_TYPE').updateValueAndValidity();
 this.form.updateValueAndValidity(); 
 }
async ON_CLICK_ASSIGNEE_TYPE(event) {

 }
async POST_CHANGE_FORM_PAGES_NO(value) {

 this.FORM_TRIGGER_FAILURE = false ; 
 this.form.controls['FORM_PAGES_NO'].setErrors({invalid: true}); 
 // Code goes here 

 if ( this.FORM_TRIGGER_FAILURE == true) 
 return; 
 
 this.form.controls['FORM_PAGES_NO'].clearValidators();
 this.form.get('FORM_PAGES_NO').updateValueAndValidity();
 this.form.updateValueAndValidity(); 
 }
async ON_CLICK_FORM_PAGES_NO(event) {

 }
async POST_CHANGE_LOGDATE(value) {

 this.FORM_TRIGGER_FAILURE = false ; 
 this.form.controls['LOGDATE'].setErrors({invalid: true}); 
 // Code goes here 

 if ( this.FORM_TRIGGER_FAILURE == true) 
 return; 
 
 this.form.controls['LOGDATE'].clearValidators();
 this.form.get('LOGDATE').updateValueAndValidity();
 this.form.updateValueAndValidity(); 
 }
async ON_CLICK_LOGDATE(event) {

 }
async POST_CHANGE_LOGNAME(value) {

 this.FORM_TRIGGER_FAILURE = false ; 
 this.form.controls['LOGNAME'].setErrors({invalid: true}); 
 // Code goes here 

 if ( this.FORM_TRIGGER_FAILURE == true) 
 return; 
 
 this.form.controls['LOGNAME'].clearValidators();
 this.form.get('LOGNAME').updateValueAndValidity();
 this.form.updateValueAndValidity(); 
 }
async ON_CLICK_LOGNAME(event) {

 }
async POST_CHANGE_REJECT_SEQ1(value) {

 this.FORM_TRIGGER_FAILURE = false ; 
 this.form.controls['REJECT_SEQ1'].setErrors({invalid: true}); 
 // Code goes here 

 if ( this.FORM_TRIGGER_FAILURE == true) 
 return; 
 
 this.form.controls['REJECT_SEQ1'].clearValidators();
 this.form.get('REJECT_SEQ1').updateValueAndValidity();
 this.form.updateValueAndValidity(); 
 }
async ON_CLICK_REJECT_SEQ1(event) {

 }
 async ON_CLICK_MODIFY_SEQ(event) {

 }
async POST_CHANGE_APPROVE_SEQ1(value) {

 this.FORM_TRIGGER_FAILURE = false ; 
 this.form.controls['APPROVE_SEQ1'].setErrors({invalid: true}); 
 // Code goes here 

 if ( this.FORM_TRIGGER_FAILURE == true) 
 return; 
 
 this.form.controls['APPROVE_SEQ1'].clearValidators();
 this.form.get('APPROVE_SEQ1').updateValueAndValidity();
 this.form.updateValueAndValidity(); 
 }
async ON_CLICK_APPROVE_SEQ1(event) {

 }
async POST_CHANGE_APPROVE_SEQ(value) {

 this.FORM_TRIGGER_FAILURE = false ; 
 this.form.controls['APPROVE_SEQ'].setErrors({invalid: true}); 
 // Code goes here 

 if ( this.FORM_TRIGGER_FAILURE == true) 
 return; 
 
 this.form.controls['APPROVE_SEQ'].clearValidators();
 this.form.get('APPROVE_SEQ').updateValueAndValidity();
 this.form.updateValueAndValidity(); 
 }
async ON_CLICK_APPROVE_SEQ(event) {

 }
async POST_CHANGE_REJECT_SEQ(value) {

 this.FORM_TRIGGER_FAILURE = false ; 
 this.form.controls['REJECT_SEQ'].setErrors({invalid: true}); 
 // Code goes here 

 if ( this.FORM_TRIGGER_FAILURE == true) 
 return; 
 
 this.form.controls['REJECT_SEQ'].clearValidators();
 this.form.get('REJECT_SEQ').updateValueAndValidity();
 this.form.updateValueAndValidity(); 
 }
 async POST_CHANGE_MODIFY_SEQ(value) {

 this.FORM_TRIGGER_FAILURE = false ; 
 this.form.controls['MODIFY_SEQ'].setErrors({invalid: true}); 
 // Code goes here 

 if ( this.FORM_TRIGGER_FAILURE == true) 
 return; 
 
 this.form.controls['MODIFY_SEQ'].clearValidators();
 this.form.get('MODIFY_SEQ').updateValueAndValidity();
 this.form.updateValueAndValidity(); 
 }
async ON_CLICK_REJECT_SEQ(event) {

 } 
 async onChange_TEMPLATE_NAME(event:any) { 
 var value = event.target.value; 
 if ((value == null) || (value == '')) 	
 	return;  
    this.FORM_TRIGGER_FAILURE = false;	
 await   this.POST_CHANGE_TEMPLATE_NAME(value); if ( this.FORM_TRIGGER_FAILURE) return; 
	
 await   this.ON_CLICK_TEMPLATE_NAME(value); if ( this.FORM_TRIGGER_FAILURE) return; 
 this.formValidationChangedOutput.emit(this.form.valid); 
  
 } 
 async onValueChange_WO_TYPE(value) { 
  this.FORM_TRIGGER_FAILURE = false;	
 await this.POST_CHANGE_WO_TYPE(value); if ( this.FORM_TRIGGER_FAILURE) return; 
	
 await this.ON_CLICK_WO_TYPE(value); if ( this.FORM_TRIGGER_FAILURE) return; 
 this.formValidationChangedOutput.emit(this.form.valid); 
  
  } 
   async onValueChange_APPROVE_SEQ(value) { 
  this.FORM_TRIGGER_FAILURE = false;	
 await this.POST_CHANGE_APPROVE_SEQ(value); if ( this.FORM_TRIGGER_FAILURE) return; 
	
 await this.ON_CLICK_APPROVE_SEQ(value); if ( this.FORM_TRIGGER_FAILURE) return; 
 this.formValidationChangedOutput.emit(this.form.valid); 
  
  } 

async onValueChange_REJECT_SEQ(value) { 
  this.FORM_TRIGGER_FAILURE = false;	
 await this.POST_CHANGE_REJECT_SEQ(value); if ( this.FORM_TRIGGER_FAILURE) return; 
	
 await this.ON_CLICK_REJECT_SEQ(value); if ( this.FORM_TRIGGER_FAILURE) return; 
 this.formValidationChangedOutput.emit(this.form.valid); 
  
  } 

  async onValueChange_MODIFY_SEQ(value) { 
  this.FORM_TRIGGER_FAILURE = false;	
 await this.POST_CHANGE_MODIFY_SEQ(value); if ( this.FORM_TRIGGER_FAILURE) return; 
	
 await this.ON_CLICK_MODIFY_SEQ(value); if ( this.FORM_TRIGGER_FAILURE) return; 
 this.formValidationChangedOutput.emit(this.form.valid); 
  
  } 

 async onChange_SEQUENCE_NAME(event:any) { 
 var value = event.target.value; 
 if ((value == null) || (value == '')) 	
 	return;  
    this.FORM_TRIGGER_FAILURE = false;	
 await   this.POST_CHANGE_SEQUENCE_NAME(value); if ( this.FORM_TRIGGER_FAILURE) return; 
	
 await   this.ON_CLICK_SEQUENCE_NAME(value); if ( this.FORM_TRIGGER_FAILURE) return; 
 this.formValidationChangedOutput.emit(this.form.valid); 
  
 } 
 async onChange_TEMPLATE_ORDER(event:any) { 
 var value = event.target.value; 
 if ((value == null) || (value == '')) 	
 	return;  
    this.FORM_TRIGGER_FAILURE = false;	
 await   this.POST_CHANGE_TEMPLATE_ORDER(value); if ( this.FORM_TRIGGER_FAILURE) return; 
	
 await   this.ON_CLICK_TEMPLATE_ORDER(value); if ( this.FORM_TRIGGER_FAILURE) return; 
 this.formValidationChangedOutput.emit(this.form.valid); 
  
 } 
 async onChange_DESCRIPTION(event:any) { 
 }
 async onChange_DEPENDANT_WO_ORDER(event:any) { 
 var value = event.target.value; 
 if ((value == null) || (value == '')) 	
 	return;  
    this.FORM_TRIGGER_FAILURE = false;	
 await   this.POST_CHANGE_DEPENDANT_WO_ORDER(value); if ( this.FORM_TRIGGER_FAILURE) return; 
	
 await   this.ON_CLICK_DEPENDANT_WO_ORDER(value); if ( this.FORM_TRIGGER_FAILURE) return; 
 this.formValidationChangedOutput.emit(this.form.valid); 
  
 } 
 async onChange_DIVS(event:any) { 
 var value = event.target.value; 
 if ((value == null) || (value == '')) 	
 	return;  
    this.FORM_TRIGGER_FAILURE = false;	
 await   this.POST_CHANGE_DIVS(value); if ( this.FORM_TRIGGER_FAILURE) return; 
	
 await   this.ON_CLICK_DIVS(value); if ( this.FORM_TRIGGER_FAILURE) return; 
 this.formValidationChangedOutput.emit(this.form.valid); 
  
 } 
 async onValueChange_DEPT(value) { 
  this.FORM_TRIGGER_FAILURE = false;	
 await this.POST_CHANGE_DEPT(value); if ( this.FORM_TRIGGER_FAILURE) return; 
	
 await this.ON_CLICK_DEPT(value); if ( this.FORM_TRIGGER_FAILURE) return; 
 this.formValidationChangedOutput.emit(this.form.valid); 
  
  } 
 async onChange_DURATION(event:any) { 
 var value = event.target.value; 
 if ((value == null) || (value == '')) 	
 	return;  
    this.FORM_TRIGGER_FAILURE = false;	
 await   this.POST_CHANGE_DURATION(value); if ( this.FORM_TRIGGER_FAILURE) return; 
	
 await   this.ON_CLICK_DURATION(value); if ( this.FORM_TRIGGER_FAILURE) return; 
 this.formValidationChangedOutput.emit(this.form.valid); 
  
 } 
 async onValueChange_ASSIGNEE(value) { 
  this.FORM_TRIGGER_FAILURE = false;	
 await this.POST_CHANGE_ASSIGNEE(value); if ( this.FORM_TRIGGER_FAILURE) return; 
	
 await this.ON_CLICK_ASSIGNEE(value); if ( this.FORM_TRIGGER_FAILURE) return; 
 this.formValidationChangedOutput.emit(this.form.valid); 
  
  } 
 async onValueChange_ASSIGNEE_TYPE(value) { 
  this.FORM_TRIGGER_FAILURE = false;	
 await this.POST_CHANGE_ASSIGNEE_TYPE(value); if ( this.FORM_TRIGGER_FAILURE) return; 
	
 await this.ON_CLICK_ASSIGNEE_TYPE(value); if ( this.FORM_TRIGGER_FAILURE) return; 
 this.formValidationChangedOutput.emit(this.form.valid); 
  
  } 
 async onChange_FORM_PAGES_NO(event:any) { 
 var value = event.target.value; 
 if ((value == null) || (value == '')) 	
 	return;  
    this.FORM_TRIGGER_FAILURE = false;	
 await   this.POST_CHANGE_FORM_PAGES_NO(value); if ( this.FORM_TRIGGER_FAILURE) return; 
	
 await   this.ON_CLICK_FORM_PAGES_NO(value); if ( this.FORM_TRIGGER_FAILURE) return; 
 this.formValidationChangedOutput.emit(this.form.valid); 
  
 } 
 async onChange_LOGDATE(event:any) { 
 var value = event.target.value; 
 if ((value == null) || (value == '')) 	
 	return;  
    this.FORM_TRIGGER_FAILURE = false;	
 await   this.POST_CHANGE_LOGDATE(value); if ( this.FORM_TRIGGER_FAILURE) return; 
	
 await   this.ON_CLICK_LOGDATE(value); if ( this.FORM_TRIGGER_FAILURE) return; 
 this.formValidationChangedOutput.emit(this.form.valid); 
  
 } 
 async onChange_LOGNAME(event:any) { 
 var value = event.target.value; 
 if ((value == null) || (value == '')) 	
 	return;  
    this.FORM_TRIGGER_FAILURE = false;	
 await   this.POST_CHANGE_LOGNAME(value); if ( this.FORM_TRIGGER_FAILURE) return; 
	
 await   this.ON_CLICK_LOGNAME(value); if ( this.FORM_TRIGGER_FAILURE) return; 
 this.formValidationChangedOutput.emit(this.form.valid); 
  
 } 
 async onChange_REJECT_SEQ1(event:any) { 
 var value = event.target.value; 
 if ((value == null) || (value == '')) 	
 	return;  
    this.FORM_TRIGGER_FAILURE = false;	
 await   this.POST_CHANGE_REJECT_SEQ1(value); if ( this.FORM_TRIGGER_FAILURE) return; 
	
 await   this.ON_CLICK_REJECT_SEQ1(value); if ( this.FORM_TRIGGER_FAILURE) return; 
 this.formValidationChangedOutput.emit(this.form.valid); 
  
 } 
 
 async onChange_APPROVE_SEQ1(event:any) { 
 var value = event.target.value; 
 if ((value == null) || (value == '')) 	
 	return;  
    this.FORM_TRIGGER_FAILURE = false;	
 await   this.POST_CHANGE_APPROVE_SEQ1(value); if ( this.FORM_TRIGGER_FAILURE) return; 
	
 await   this.ON_CLICK_APPROVE_SEQ1(value); if ( this.FORM_TRIGGER_FAILURE) return; 
 this.formValidationChangedOutput.emit(this.form.valid); 
  
 } 
 async onChange_APPROVE_SEQ(event:any) { 
 var value = event.target.value; 
 if ((value == null) || (value == '')) 	
 	return;  
    this.FORM_TRIGGER_FAILURE = false;	
 await   this.POST_CHANGE_APPROVE_SEQ(value); if ( this.FORM_TRIGGER_FAILURE) return; 
	
 await   this.ON_CLICK_APPROVE_SEQ(value); if ( this.FORM_TRIGGER_FAILURE) return; 
 this.formValidationChangedOutput.emit(this.form.valid); 
  
 } 
 async onChange_REJECT_SEQ(event:any) { 
 var value = event.target.value; 
 if ((value == null) || (value == '')) 	
 	return;  
    this.FORM_TRIGGER_FAILURE = false;	
 await   this.POST_CHANGE_REJECT_SEQ(value); if ( this.FORM_TRIGGER_FAILURE) return; 
	
 await   this.ON_CLICK_REJECT_SEQ(value); if ( this.FORM_TRIGGER_FAILURE) return; 
 this.formValidationChangedOutput.emit(this.form.valid); 
  
 }

 
  async onChange_MODIFY_SEQ(event:any) { 
 var value = event.target.value; 
 if ((value == null) || (value == '')) 	
 	return;  
    this.FORM_TRIGGER_FAILURE = false;	
 await   this.POST_CHANGE_MODIFY_SEQ(value); if ( this.FORM_TRIGGER_FAILURE) return; 
	
 await   this.ON_CLICK_MODIFY_SEQ(value); if ( this.FORM_TRIGGER_FAILURE) return; 
 this.formValidationChangedOutput.emit(this.form.valid); 
  
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
public getlkpArrASSIGNEE(){
  
  var newlkpArrASSIGNEE =[];
  var recVal = this.form.value;
  var ASSIGNEE_TYPE = recVal.ASSIGNEE_TYPE;
  var team = this.starServices.sessionParams.USER_INFO.TEAM;
  //if (this.paramConfig.DEBUG_FLAG) console.log("getlkpArrASSIGNEE:ASSIGNEE_TYPE:", ASSIGNEE_TYPE)
  if (ASSIGNEE_TYPE == "TEAM"){
    var DEPT = recVal.DEPT;
    var DIV = recVal.DIV;
    for(var i=0;i< this.lkpArrASSIGNEE_TEAMS.length; i++){
      //if ( (this.lkpArrASSIGNEE_TEAMS[i].DEPT == DEPT) && (this.lkpArrASSIGNEE_TEAMS[i].DIV == DIV) )
      newlkpArrASSIGNEE.push(this.lkpArrASSIGNEE_TEAMS[i])
    }
  }
  else if (ASSIGNEE_TYPE == "PERSON")
  {
    var DEPT = recVal.DEPT;
    var DIV = recVal.DIV;
    for(var i=0;i< this.lkpArrASSIGNEE_PERSON.length; i++){
      //if ( (this.lkpArrASSIGNEE_PERSON[i].DEPT == DEPT) && (this.lkpArrASSIGNEE_PERSON[i].DIV == DIV) )
      if (this.paramConfig.DEBUG_FLAG) console.log("test:this.lkpArrASSIGNEE_PERSON[i].TEAM:", this.lkpArrASSIGNEE_PERSON[i].TEAM , " team:)", team)
      //if ( (this.lkpArrASSIGNEE_PERSON[i].TEAM == team))
        newlkpArrASSIGNEE.push(this.lkpArrASSIGNEE_PERSON[i])
    }
  }
  else if (ASSIGNEE_TYPE == "NETWORK")
    newlkpArrASSIGNEE = this.lkpArrASSIGNEE_NETWORK;
  else if (ASSIGNEE_TYPE == "API")
    newlkpArrASSIGNEE = this.lkpArrASSIGNEE_API;
  else if (ASSIGNEE_TYPE == "ROLE")
    newlkpArrASSIGNEE = this.lkpArrASSIGNEE_ROLE;
  else if (ASSIGNEE_TYPE == "URL")
    newlkpArrASSIGNEE = this.lkpArrASSIGNEE_URL;
  else if (ASSIGNEE_TYPE == "NAVIGATE")
    newlkpArrASSIGNEE = this.lkpArrASSIGNEE_NAVIGATE;

    

   return newlkpArrASSIGNEE;
}

}




