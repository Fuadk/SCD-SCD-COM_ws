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
import { scdexpressionEditorScdEeExpressionEditor , componentConfigDef} from '@modeldir/model';


 const createFormGroup = (dataItem:any) => new FormGroup({
'EXPRESSION_EDITOR_ID' : new FormControl(dataItem.EXPRESSION_EDITOR_ID  , ) ,
'APPLICATION_ID' : new FormControl(dataItem.APPLICATION_ID  ,   Validators.required ) ,
'AI_EXPRESSION' : new FormControl(dataItem.AI_EXPRESSION  , ) ,
'AI_RESPONSE' : new FormControl(dataItem.AI_RESPONSE  , ) ,
'EXPRESSION' : new FormControl(dataItem.EXPRESSION  , ) ,
'IF_KEY' : new FormControl(dataItem.IF_KEY  , ) ,
'LOGICAL_KEY' : new FormControl(dataItem.LOGICAL_KEY  , ) ,
'RELATIONAL_KEY' : new FormControl(dataItem.RELATIONAL_KEY  , ) ,
'ARITHMETIC_KEY' : new FormControl(dataItem.ARITHMETIC_KEY  , ) ,
'BITWISE_KEY' : new FormControl(dataItem.BITWISE_KEY  , ) ,
'FUNCTIONS_KEY' : new FormControl(dataItem.FUNCTIONS_KEY  , ) ,
'LINE' : new FormControl(dataItem.LINE  , ) ,
'COLUMN' : new FormControl(dataItem.COLUMN  , ) 
});

declare function getParamConfig():any;
@Component({
  selector: 'app-scd-ee-expression-editor',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './scd-ee-expression-editor.component.html',
  styleUrls: ['./scd-ee-expression-editor.component.scss'],
  standalone: false
})


export class ScdExpressionEditorScdEeExpressionEditorFormComponent {
  public title =  this.starServices.getNLS([],"SCD_EE_EXPRESSION_EDITOR.scdexpressionEditorScdEeExpressionEditor.component_title","Expression Editor");
  public compTitleMsg =  "SCD_EE_EXPRESSION_EDITOR.scdexpressionEditorScdEeExpressionEditor";
  public routineName = "ScdExpressionEditorScdEeExpressionEditorForm";
  private insertCMD = "INSERT_SCD_EXPRESSION_EDITOR";
  private updateCMD = "UPDATE_SCD_EXPRESSION_EDITOR";
  private deleteCMD =   "DELETE_SCD_EXPRESSION_EDITOR";
  private getCMD = "GET_SCD_EXPRESSION_EDITOR_QUERY";

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
  public primarKeyReadOnlyArr = {isEXPRESSION_EDITOR_IDreadOnly : false , isAPPLICATION_IDreadOnly : false};  
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
  public compSelector = 'app-scd-ee-expression-editor';
  public PK_AUTO = 'EXPRESSION_EDITOR_ID';
  public customerFacing = false;
  public FormStepsArr = [] ;
public labelEXPRESSION_EDITOR_IDTop=false;
public labelEXPRESSION_EDITOR_IDVisible=true;
public labelAPPLICATION_IDTop=false;
public labelAPPLICATION_IDVisible=true;
public labelAI_EXPRESSIONTop=false;
public labelAI_EXPRESSIONVisible=true;
public labelAI_RESPONSETop=false;
public labelAI_RESPONSEVisible=true;
public labelSUBMITTop=false;
public labelSUBMITVisible=true;
public labelEXPRESSIONTop=false;
public labelEXPRESSIONVisible=true;
public labelIF_KEYTop=false;
public labelIF_KEYVisible=false;
public labelLOGICAL_KEYTop=false;
public labelLOGICAL_KEYVisible=false;
public labelRELATIONAL_KEYTop=false;
public labelRELATIONAL_KEYVisible=false;
public labelARITHMETIC_KEYTop=false;
public labelARITHMETIC_KEYVisible=false;
public labelBITWISE_KEYTop=false;
public labelBITWISE_KEYVisible=false;
public labelFUNCTIONS_KEYTop=false;
public labelFUNCTIONS_KEYVisible=false;
public labelTAGS_KEYTop=false;
public labelTAGS_KEYVisible=false;
public labelALARMS_KEYTop=false;
public labelALARMS_KEYVisible=true;
public labelLINETop=false;
public labelLINEVisible=true;
public labelCOLUMNTop=false;
public labelCOLUMNVisible=true;
public labelOPEN_AITop=false;
public labelOPEN_AIVisible=true;
public labelSYNTAX_CHECK_KEYTop=false;
public labelSYNTAX_CHECK_KEYVisible=true;

public visibleEXPRESSION_EDITOR_ID = false;
public visibleAPPLICATION_ID = false;
public visibleAI_EXPRESSION = false;
public visibleAI_RESPONSE = false;
public visibleSUBMIT = false;
public visibleEXPRESSION = true;
public visibleIF_KEY = true;
public visibleLOGICAL_KEY = true;
public visibleRELATIONAL_KEY = true;
public visibleARITHMETIC_KEY = true;
public visibleBITWISE_KEY = true;
public visibleFUNCTIONS_KEY = true;
public visibleTAGS_KEY = true;
public visibleALARMS_KEY = true;
public visibleLINE = false;
public visibleCOLUMN = false;
public visibleOPEN_AI = true;
public visibleSYNTAX_CHECK_KEY = true;

public disableEXPRESSION_EDITOR_ID = false;
public disableAPPLICATION_ID = false;
public disableAI_EXPRESSION = false;
public disableAI_RESPONSE = false;
public disableSUBMIT = false;
public disableEXPRESSION = false;
public disableIF_KEY = false;
public disableLOGICAL_KEY = false;
public disableRELATIONAL_KEY = false;
public disableARITHMETIC_KEY = false;
public disableBITWISE_KEY = false;
public disableFUNCTIONS_KEY = false;
public disableTAGS_KEY = false;
public disableALARMS_KEY = false;
public disableLINE = false;
public disableCOLUMN = false;
public disableOPEN_AI = false;
public disableSYNTAX_CHECK_KEY = false;

public variableSUBMIT;
public variableTAGS_KEY;
public variableALARMS_KEY;
public variableOPEN_AI;
public variableSYNTAX_CHECK_KEY;

  
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
      this.componentConfig.queryable  = true;
      this.componentConfig.navigable = true;
      this.componentConfig.insertable = true;
      this.componentConfig.removeable = false;
      this.componentConfig.updateable = true;       
      this.componentConfig.showToolBar = false;
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
  }
  
  public ngOnDestroy(): void {
    // Unsubscribe the event once not needed.
    if (typeof this.componentConfigChangeEvent !== "undefined") this.componentConfigChangeEvent.unsubscribe();
 }

  callStarNotify(componentConfig:any) {
    componentConfig.eventFrom = this.compSelector;
    this.starNotify.sendEvent<componentConfigDef>('componentConfigDef', componentConfig);
  }

  private formInitialValues:any =   new scdexpressionEditorScdEeExpressionEditor();   
    @Input() public set detail_Input(form: any) {
       if (typeof form != "undefined"){
        this.isSearch = true;
        this.executeQuery(form);
        this.isChild = true;
      }
      /*
    if (this.paramConfig.DEBUG_FLAG) console.log('detail_Input ScdExpressionEditorScdEeExpressionEditorForm form.APPLICATION_ID :' + form.APPLICATION_ID);
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
      this.Comp_Config.masterKeyArr =  [NewVal['EXPRESSION_EDITOR_ID']];
      this.Comp_Config.masterKeyNameArr =  ["EXPRESSION_EDITOR_ID"];
         
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
			"lkpArrName":"lkpArrAPPLICATION_ID"},
	{"statment":"SELECT CODE, CODETEXT_LANG , PARTCODE FROM SOM_TABS_CODES WHERE CODENAME = \"IF_KEY\"  and LANGUAGE_NAME = '" + this.userLang + "' order by CODETEXT_LANG ",
			"lkpArrName":"lkpArrIF_KEY"},
	{"statment":"SELECT CODE, CODETEXT_LANG , PARTCODE FROM SOM_TABS_CODES WHERE CODENAME = \"LOGICAL_KEY\"  and LANGUAGE_NAME = '" + this.userLang + "' order by CODETEXT_LANG ",
			"lkpArrName":"lkpArrLOGICAL_KEY"},
	{"statment":"SELECT CODE, CODETEXT_LANG , PARTCODE FROM SOM_TABS_CODES WHERE CODENAME = \"RELATIONAL_KEY\"  and LANGUAGE_NAME = '" + this.userLang + "' order by CODETEXT_LANG ",
			"lkpArrName":"lkpArrRELATIONAL_KEY"},
	{"statment":"SELECT CODE, CODETEXT_LANG , PARTCODE FROM SOM_TABS_CODES WHERE CODENAME = \"ARITHMETIC_KEY\"  and LANGUAGE_NAME = '" + this.userLang + "' order by CODETEXT_LANG ",
			"lkpArrName":"lkpArrARITHMETIC_KEY"},
	{"statment":"SELECT CODE, CODETEXT_LANG , PARTCODE FROM SOM_TABS_CODES WHERE CODENAME = \"BITWISE_KEY\"  and LANGUAGE_NAME = '" + this.userLang + "' order by CODETEXT_LANG ",
			"lkpArrName":"lkpArrBITWISE_KEY"},
	{"statment":"SELECT CODE, CODETEXT_LANG , PARTCODE FROM SOM_TABS_CODES WHERE CODENAME = \"FUNCTIONS_KEY\"  and LANGUAGE_NAME = '" + this.userLang + "' order by CODETEXT_LANG ",
			"lkpArrName":"lkpArrFUNCTIONS_KEY"}];
 if (this.lookupArrDef.length > 0)
   this.starServices.fetchLookups(this, this.lookupArrDef);
}

public lkpArrAPPLICATION_ID = [];

public lkpArrIF_KEY = [];

public lkpArrLOGICAL_KEY = [];

public lkpArrRELATIONAL_KEY = [];

public lkpArrARITHMETIC_KEY = [];

public lkpArrBITWISE_KEY = [];

public lkpArrFUNCTIONS_KEY = [];

public lkpArrGetAPPLICATION_ID(CODE: any): any {
var rec = this.lkpArrAPPLICATION_ID.find((x:any) => x.CODE === CODE);
return rec;
}

public lkpArrGetIF_KEY(CODE: any): any {
var rec = this.lkpArrIF_KEY.find((x:any) => x.CODE === CODE);
return rec;
}

public lkpArrGetLOGICAL_KEY(CODE: any): any {
var rec = this.lkpArrLOGICAL_KEY.find((x:any) => x.CODE === CODE);
return rec;
}

public lkpArrGetRELATIONAL_KEY(CODE: any): any {
var rec = this.lkpArrRELATIONAL_KEY.find((x:any) => x.CODE === CODE);
return rec;
}

public lkpArrGetARITHMETIC_KEY(CODE: any): any {
var rec = this.lkpArrARITHMETIC_KEY.find((x:any) => x.CODE === CODE);
return rec;
}

public lkpArrGetBITWISE_KEY(CODE: any): any {
var rec = this.lkpArrBITWISE_KEY.find((x:any) => x.CODE === CODE);
return rec;
}

public lkpArrGetFUNCTIONS_KEY(CODE: any): any {
var rec = this.lkpArrFUNCTIONS_KEY.find((x:any) => x.CODE === CODE);
return rec;
}

onChanges(): void {
this.form.get('EXPRESSION_EDITOR_ID').valueChanges.subscribe(val => {
});
this.form.get('AI_EXPRESSION').valueChanges.subscribe(val => {
});
this.form.get('AI_RESPONSE').valueChanges.subscribe(val => {
});
this.form.get('LINE').valueChanges.subscribe(val => {
});
this.form.get('COLUMN').valueChanges.subscribe(val => {
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
      if (this.paramConfig.DEBUG_FLAG) console.log("ScdExpressionEditorScdEeExpressionEditorForm ComponentConfig:", {...ComponentConfig});

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



async WHEN_VALIDATE_ITEM_EXPRESSION_EDITOR_ID(value) {

 this.FORM_TRIGGER_FAILURE = false ; 
 if (typeof this.form.controls['EXPRESSION_EDITOR_ID'] != "undefined" ) 
      this.form.controls['EXPRESSION_EDITOR_ID'].setErrors({invalid: true}); 
 // Code goes here 
 

 if ( this.FORM_TRIGGER_FAILURE == true) 
 return; 
 
 if (typeof this.form.controls['EXPRESSION_EDITOR_ID'] != "undefined" ) 
     this.form.get('EXPRESSION_EDITOR_ID').updateValueAndValidity();
 this.form.updateValueAndValidity(); 
 }

 async ON_CLICK_EXPRESSION_EDITOR_ID(event){

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

async WHEN_VALIDATE_ITEM_AI_EXPRESSION(value) {

 this.FORM_TRIGGER_FAILURE = false ; 
 if (typeof this.form.controls['AI_EXPRESSION'] != "undefined" ) 
      this.form.controls['AI_EXPRESSION'].setErrors({invalid: true}); 
 // Code goes here 
 

 if ( this.FORM_TRIGGER_FAILURE == true) 
 return; 
 
 if (typeof this.form.controls['AI_EXPRESSION'] != "undefined" ) 
     this.form.get('AI_EXPRESSION').updateValueAndValidity();
 this.form.updateValueAndValidity(); 
 }

 async ON_CLICK_AI_EXPRESSION(event){

}

async WHEN_VALIDATE_ITEM_AI_RESPONSE(value) {

 this.FORM_TRIGGER_FAILURE = false ; 
 if (typeof this.form.controls['AI_RESPONSE'] != "undefined" ) 
      this.form.controls['AI_RESPONSE'].setErrors({invalid: true}); 
 // Code goes here 
 

 if ( this.FORM_TRIGGER_FAILURE == true) 
 return; 
 
 if (typeof this.form.controls['AI_RESPONSE'] != "undefined" ) 
     this.form.get('AI_RESPONSE').updateValueAndValidity();
 this.form.updateValueAndValidity(); 
 }

 async ON_CLICK_AI_RESPONSE(event){

}

async WHEN_VALIDATE_ITEM_SUBMIT(value) {

 this.FORM_TRIGGER_FAILURE = false ; 
 if (typeof this.form.controls['SUBMIT'] != "undefined" ) 
      this.form.controls['SUBMIT'].setErrors({invalid: true}); 
 // Code goes here 
 

 if ( this.FORM_TRIGGER_FAILURE == true) 
 return; 
 
 if (typeof this.form.controls['SUBMIT'] != "undefined" ) 
     this.form.get('SUBMIT').updateValueAndValidity();
 this.form.updateValueAndValidity(); 
 }

 async ON_CLICK_SUBMIT(event){
this.visibleAI_RESPONSE = true;
}

async WHEN_VALIDATE_ITEM_EXPRESSION(value) {

 this.FORM_TRIGGER_FAILURE = false ; 
 if (typeof this.form.controls['EXPRESSION'] != "undefined" ) 
      this.form.controls['EXPRESSION'].setErrors({invalid: true}); 
 // Code goes here 
 

 if ( this.FORM_TRIGGER_FAILURE == true) 
 return; 
 
 if (typeof this.form.controls['EXPRESSION'] != "undefined" ) 
     this.form.get('EXPRESSION').updateValueAndValidity();
 this.form.updateValueAndValidity(); 
 }

 async ON_CLICK_EXPRESSION(event){

}

async WHEN_VALIDATE_ITEM_IF_KEY(value) {

 this.FORM_TRIGGER_FAILURE = false ; 
 if (typeof this.form.controls['IF_KEY'] != "undefined" ) 
      this.form.controls['IF_KEY'].setErrors({invalid: true}); 
 // Code goes here 
 

 if ( this.FORM_TRIGGER_FAILURE == true) 
 return; 
 
 if (typeof this.form.controls['IF_KEY'] != "undefined" ) 
     this.form.get('IF_KEY').updateValueAndValidity();
 this.form.updateValueAndValidity(); 
 }

 async ON_CLICK_IF_KEY(event){

}

async WHEN_VALIDATE_ITEM_LOGICAL_KEY(value) {

 this.FORM_TRIGGER_FAILURE = false ; 
 if (typeof this.form.controls['LOGICAL_KEY'] != "undefined" ) 
      this.form.controls['LOGICAL_KEY'].setErrors({invalid: true}); 
 // Code goes here 
 

 if ( this.FORM_TRIGGER_FAILURE == true) 
 return; 
 
 if (typeof this.form.controls['LOGICAL_KEY'] != "undefined" ) 
     this.form.get('LOGICAL_KEY').updateValueAndValidity();
 this.form.updateValueAndValidity(); 
 }

 async ON_CLICK_LOGICAL_KEY(event){

}

async WHEN_VALIDATE_ITEM_RELATIONAL_KEY(value) {

 this.FORM_TRIGGER_FAILURE = false ; 
 if (typeof this.form.controls['RELATIONAL_KEY'] != "undefined" ) 
      this.form.controls['RELATIONAL_KEY'].setErrors({invalid: true}); 
 // Code goes here 
 

 if ( this.FORM_TRIGGER_FAILURE == true) 
 return; 
 
 if (typeof this.form.controls['RELATIONAL_KEY'] != "undefined" ) 
     this.form.get('RELATIONAL_KEY').updateValueAndValidity();
 this.form.updateValueAndValidity(); 
 }

 async ON_CLICK_RELATIONAL_KEY(event){

}

async WHEN_VALIDATE_ITEM_ARITHMETIC_KEY(value) {

 this.FORM_TRIGGER_FAILURE = false ; 
 if (typeof this.form.controls['ARITHMETIC_KEY'] != "undefined" ) 
      this.form.controls['ARITHMETIC_KEY'].setErrors({invalid: true}); 
 // Code goes here 
 

 if ( this.FORM_TRIGGER_FAILURE == true) 
 return; 
 
 if (typeof this.form.controls['ARITHMETIC_KEY'] != "undefined" ) 
     this.form.get('ARITHMETIC_KEY').updateValueAndValidity();
 this.form.updateValueAndValidity(); 
 }

 async ON_CLICK_ARITHMETIC_KEY(event){

}

async WHEN_VALIDATE_ITEM_BITWISE_KEY(value) {

 this.FORM_TRIGGER_FAILURE = false ; 
 if (typeof this.form.controls['BITWISE_KEY'] != "undefined" ) 
      this.form.controls['BITWISE_KEY'].setErrors({invalid: true}); 
 // Code goes here 
 

 if ( this.FORM_TRIGGER_FAILURE == true) 
 return; 
 
 if (typeof this.form.controls['BITWISE_KEY'] != "undefined" ) 
     this.form.get('BITWISE_KEY').updateValueAndValidity();
 this.form.updateValueAndValidity(); 
 }

 async ON_CLICK_BITWISE_KEY(event){

}

async WHEN_VALIDATE_ITEM_FUNCTIONS_KEY(value) {

 this.FORM_TRIGGER_FAILURE = false ; 
 if (typeof this.form.controls['FUNCTIONS_KEY'] != "undefined" ) 
      this.form.controls['FUNCTIONS_KEY'].setErrors({invalid: true}); 
 // Code goes here 
 

 if ( this.FORM_TRIGGER_FAILURE == true) 
 return; 
 
 if (typeof this.form.controls['FUNCTIONS_KEY'] != "undefined" ) 
     this.form.get('FUNCTIONS_KEY').updateValueAndValidity();
 this.form.updateValueAndValidity(); 
 }

 async ON_CLICK_FUNCTIONS_KEY(event){

}

async WHEN_VALIDATE_ITEM_TAGS_KEY(value) {

 this.FORM_TRIGGER_FAILURE = false ; 
 if (typeof this.form.controls['TAGS_KEY'] != "undefined" ) 
      this.form.controls['TAGS_KEY'].setErrors({invalid: true}); 
 // Code goes here 
 

 if ( this.FORM_TRIGGER_FAILURE == true) 
 return; 
 
 if (typeof this.form.controls['TAGS_KEY'] != "undefined" ) 
     this.form.get('TAGS_KEY').updateValueAndValidity();
 this.form.updateValueAndValidity(); 
 }

 async ON_CLICK_TAGS_KEY(event){

}

async WHEN_VALIDATE_ITEM_ALARMS_KEY(value) {

 this.FORM_TRIGGER_FAILURE = false ; 
 if (typeof this.form.controls['ALARMS_KEY'] != "undefined" ) 
      this.form.controls['ALARMS_KEY'].setErrors({invalid: true}); 
 // Code goes here 
 

 if ( this.FORM_TRIGGER_FAILURE == true) 
 return; 
 
 if (typeof this.form.controls['ALARMS_KEY'] != "undefined" ) 
     this.form.get('ALARMS_KEY').updateValueAndValidity();
 this.form.updateValueAndValidity(); 
 }

 async ON_CLICK_ALARMS_KEY(event){

}

async WHEN_VALIDATE_ITEM_LINE(value) {

 this.FORM_TRIGGER_FAILURE = false ; 
 if (typeof this.form.controls['LINE'] != "undefined" ) 
      this.form.controls['LINE'].setErrors({invalid: true}); 
 // Code goes here 
 

 if ( this.FORM_TRIGGER_FAILURE == true) 
 return; 
 
 if (typeof this.form.controls['LINE'] != "undefined" ) 
     this.form.get('LINE').updateValueAndValidity();
 this.form.updateValueAndValidity(); 
 }

 async ON_CLICK_LINE(event){

}

async WHEN_VALIDATE_ITEM_COLUMN(value) {

 this.FORM_TRIGGER_FAILURE = false ; 
 if (typeof this.form.controls['COLUMN'] != "undefined" ) 
      this.form.controls['COLUMN'].setErrors({invalid: true}); 
 // Code goes here 
 

 if ( this.FORM_TRIGGER_FAILURE == true) 
 return; 
 
 if (typeof this.form.controls['COLUMN'] != "undefined" ) 
     this.form.get('COLUMN').updateValueAndValidity();
 this.form.updateValueAndValidity(); 
 }

 async ON_CLICK_COLUMN(event){

}

async WHEN_VALIDATE_ITEM_OPEN_AI(value) {

 this.FORM_TRIGGER_FAILURE = false ; 
 if (typeof this.form.controls['OPEN_AI'] != "undefined" ) 
      this.form.controls['OPEN_AI'].setErrors({invalid: true}); 
 // Code goes here 
 

 if ( this.FORM_TRIGGER_FAILURE == true) 
 return; 
 
 if (typeof this.form.controls['OPEN_AI'] != "undefined" ) 
     this.form.get('OPEN_AI').updateValueAndValidity();
 this.form.updateValueAndValidity(); 
 }

 async ON_CLICK_OPEN_AI(event){
// this.visibleAI_EXPRESSION = !this.visibleAI_EXPRESSION;
// this.visibleSUBMIT = !this.visibleSUBMIT;
// if (!this.visibleAI_EXPRESSION)
//     this.visibleAI_RESPONSE = false;

this.toggleAIPanel()
}

async WHEN_VALIDATE_ITEM_SYNTAX_CHECK_KEY(value) {

 this.FORM_TRIGGER_FAILURE = false ; 
 if (typeof this.form.controls['SYNTAX_CHECK_KEY'] != "undefined" ) 
      this.form.controls['SYNTAX_CHECK_KEY'].setErrors({invalid: true}); 
 // Code goes here 
 

 if ( this.FORM_TRIGGER_FAILURE == true) 
 return; 
 
 if (typeof this.form.controls['SYNTAX_CHECK_KEY'] != "undefined" ) 
     this.form.get('SYNTAX_CHECK_KEY').updateValueAndValidity();
 this.form.updateValueAndValidity(); 
 }

 async ON_CLICK_SYNTAX_CHECK_KEY(event){

}
 
 async onChange_EXPRESSION_EDITOR_ID(event:any) { 
 var value = event.target.value; 
 if ((value == null) || (value == '')) 	
 	return;  
    this.FORM_TRIGGER_FAILURE = false;	
 await   this.WHEN_VALIDATE_ITEM_EXPRESSION_EDITOR_ID(value); if ( this.FORM_TRIGGER_FAILURE) return; 
 this.formValidationChangedOutput.emit(this.form.valid); 
  
 } 
 async onValueChange_APPLICATION_ID(value) { 
  this.FORM_TRIGGER_FAILURE = false;	
 await this.WHEN_VALIDATE_ITEM_APPLICATION_ID(value); if ( this.FORM_TRIGGER_FAILURE) return; 
 this.formValidationChangedOutput.emit(this.form.valid); 
  
  } 
 async onValueChange_AI_EXPRESSION(value) { 
  this.FORM_TRIGGER_FAILURE = false;	
 await this.WHEN_VALIDATE_ITEM_AI_EXPRESSION(value); if ( this.FORM_TRIGGER_FAILURE) return; 
 this.formValidationChangedOutput.emit(this.form.valid); 
  
  } 
 async onValueChange_AI_RESPONSE(value) { 
  this.FORM_TRIGGER_FAILURE = false;	
 await this.WHEN_VALIDATE_ITEM_AI_RESPONSE(value); if ( this.FORM_TRIGGER_FAILURE) return; 
 this.formValidationChangedOutput.emit(this.form.valid); 
  
  } 
 async onValueChange_SUBMIT(value) { 
  this.FORM_TRIGGER_FAILURE = false;	
 await this.WHEN_VALIDATE_ITEM_SUBMIT(value); if ( this.FORM_TRIGGER_FAILURE) return; 
 this.formValidationChangedOutput.emit(this.form.valid); 
  
  } 
 async onValueChange_EXPRESSION(value) { 
  this.FORM_TRIGGER_FAILURE = false;	
 await this.WHEN_VALIDATE_ITEM_EXPRESSION(value); if ( this.FORM_TRIGGER_FAILURE) return; 
 this.formValidationChangedOutput.emit(this.form.valid); 
  
  } 
 async onValueChange_IF_KEY(value) { 
  this.FORM_TRIGGER_FAILURE = false;	
 await this.WHEN_VALIDATE_ITEM_IF_KEY(value); if ( this.FORM_TRIGGER_FAILURE) return; 
 this.formValidationChangedOutput.emit(this.form.valid); 
  
  } 
 async onValueChange_LOGICAL_KEY(value) { 
  this.FORM_TRIGGER_FAILURE = false;	
 await this.WHEN_VALIDATE_ITEM_LOGICAL_KEY(value); if ( this.FORM_TRIGGER_FAILURE) return; 
 this.formValidationChangedOutput.emit(this.form.valid); 
  
  } 
 async onValueChange_RELATIONAL_KEY(value) { 
  this.FORM_TRIGGER_FAILURE = false;	
 await this.WHEN_VALIDATE_ITEM_RELATIONAL_KEY(value); if ( this.FORM_TRIGGER_FAILURE) return; 
 this.formValidationChangedOutput.emit(this.form.valid); 
  
  } 
 async onValueChange_ARITHMETIC_KEY(value) { 
  this.FORM_TRIGGER_FAILURE = false;	
 await this.WHEN_VALIDATE_ITEM_ARITHMETIC_KEY(value); if ( this.FORM_TRIGGER_FAILURE) return; 
 this.formValidationChangedOutput.emit(this.form.valid); 
  
  } 
 async onValueChange_BITWISE_KEY(value) { 
  this.FORM_TRIGGER_FAILURE = false;	
 await this.WHEN_VALIDATE_ITEM_BITWISE_KEY(value); if ( this.FORM_TRIGGER_FAILURE) return; 
 this.formValidationChangedOutput.emit(this.form.valid); 
  
  } 
 async onValueChange_FUNCTIONS_KEY(value) { 
  this.FORM_TRIGGER_FAILURE = false;	
 await this.WHEN_VALIDATE_ITEM_FUNCTIONS_KEY(value); if ( this.FORM_TRIGGER_FAILURE) return; 
 this.formValidationChangedOutput.emit(this.form.valid); 
  
  } 
 async onValueChange_TAGS_KEY(value) { 
  this.FORM_TRIGGER_FAILURE = false;	
 await this.WHEN_VALIDATE_ITEM_TAGS_KEY(value); if ( this.FORM_TRIGGER_FAILURE) return; 
 this.formValidationChangedOutput.emit(this.form.valid); 
  
  } 
 async onValueChange_ALARMS_KEY(value) { 
  this.FORM_TRIGGER_FAILURE = false;	
 await this.WHEN_VALIDATE_ITEM_ALARMS_KEY(value); if ( this.FORM_TRIGGER_FAILURE) return; 
 this.formValidationChangedOutput.emit(this.form.valid); 
  
  } 
 async onChange_LINE(event:any) { 
 var value = event.target.value; 
 if ((value == null) || (value == '')) 	
 	return;  
    this.FORM_TRIGGER_FAILURE = false;	
 await   this.WHEN_VALIDATE_ITEM_LINE(value); if ( this.FORM_TRIGGER_FAILURE) return; 
 this.formValidationChangedOutput.emit(this.form.valid); 
  
 } 
 async onChange_COLUMN(event:any) { 
 var value = event.target.value; 
 if ((value == null) || (value == '')) 	
 	return;  
    this.FORM_TRIGGER_FAILURE = false;	
 await   this.WHEN_VALIDATE_ITEM_COLUMN(value); if ( this.FORM_TRIGGER_FAILURE) return; 
 this.formValidationChangedOutput.emit(this.form.valid); 
  
 } 
 async onValueChange_OPEN_AI(value) { 
  this.FORM_TRIGGER_FAILURE = false;	
 await this.WHEN_VALIDATE_ITEM_OPEN_AI(value); if ( this.FORM_TRIGGER_FAILURE) return; 
 this.formValidationChangedOutput.emit(this.form.valid); 
  
  } 
 async onValueChange_SYNTAX_CHECK_KEY(value) { 
  this.FORM_TRIGGER_FAILURE = false;	
 await this.WHEN_VALIDATE_ITEM_SYNTAX_CHECK_KEY(value); if ( this.FORM_TRIGGER_FAILURE) return; 
 this.formValidationChangedOutput.emit(this.form.valid); 
  
  }
// ===== AI ASSISTANT PROPERTIES =====
showAIPanel: boolean = false;
showAIExamples: boolean = true;
aiPrompt: string = '';
isGenerating: boolean = false;
generatedRule: string = '';
confidenceLevel: number | null = null;
selectedExample: string = '';  // ← ADD THIS PROPERTY
aiLogs: Array<{ icon: string; message: string; type: 'info' | 'success' | 'warning' | 'error'; timestamp?: string }> = [];

// AI Examples for Chip List
aiExamples: string[] = [
  'If temperature exceeds 100 then Alarm',
  'If customer age > 18 then Approve',
  'If order > 1000 then Discount',
  'If CurrentUserHasCode(ADMIN) then Allow'
];
onExampleSelected(event: any): void {
  if (event && event.value) {
    this.setExample(event.value);
  }
}
/**
 * Handle Enter key press in the AI prompt textarea
 * Shift+Enter adds a new line, Enter alone triggers generation
 */
onEnterKey(event: Event): void {
  const keyboardEvent = event as KeyboardEvent;
  if (keyboardEvent.shiftKey) {
    // Shift+Enter - allow new line (do nothing special)
    return;
  } else {
    // Enter alone - generate rule
    event.preventDefault();
    this.generateRule();
  }
}

toggleAIPanel(): void {
  this.showAIPanel = !this.showAIPanel;
  if (this.showAIPanel) {
    this.showAIExamples = true;
    this.addAILog('info', '💡', 'AI Assistant ready. Describe your business rule below.');
  }
}

addAILog(type: 'info' | 'success' | 'warning' | 'error', icon: string, message: string): void {
  const timestamp = new Date().toLocaleTimeString();
  this.aiLogs.push({ icon, message, type, timestamp });
}

clearAI(): void {
  this.aiPrompt = '';
  this.generatedRule = '';
  this.confidenceLevel = null;
  this.aiLogs = [];
  this.showAIExamples = true;
}

setExample(example: string): void {
  this.aiPrompt = example;
  this.selectedExample = example;  // ← Set the selected example
  this.showAIExamples = false;
}

async generateRule(): Promise<void> {
  if (!this.aiPrompt || this.aiPrompt.trim() === '') {
    this.addAILog('warning', '⚠️', 'Please describe your business rule first.');
    return;
  }

  this.isGenerating = true;
  this.generatedRule = '';
  this.confidenceLevel = null;
  this.aiLogs = [];
  this.showAIExamples = false;

  // Simulate AI processing steps
  this.addAILog('info', '🤔', 'Understanding your request...');
  await this.delay(500);
  
  this.addAILog('info', '🔍', 'Detecting tags and patterns...');
  await this.delay(700);
  
  this.addAILog('info', '🏗️', 'Building rule structure...');
  await this.delay(600);
  
  this.addAILog('info', '✅', 'Validating syntax...');
  await this.delay(400);

  // Simulate AI rule generation
  const generatedRule = this.simulateAIGeneration(this.aiPrompt);
  this.generatedRule = generatedRule;
  this.confidenceLevel = Math.floor(Math.random() * 10) + 90; // 90-99%
  
  this.addAILog('success', '✅', 'Rule generated successfully!');
  this.addAILog('success', '📊', `Confidence: ${this.confidenceLevel}%`);
  
  this.isGenerating = false;
}

simulateAIGeneration(prompt: string): string {
  // This is a simulation. Replace with actual AI API call.
  const examples: { [key: string]: string } = {
    'temperature exceeds 100': 'if Temp > 100 then Alarm',
    'temperature exceeds 100 and pressure exceeds 20': 'if Temp > 100 and Pressure > 20 then Alarm',
    'customer age > 18': 'if Age > 18 then Approve',
    'order > 1000': 'if Order > 1000 then Discount',
    'CurrentUserHasCode(ADMIN)': 'if CurrentUserHasCode(\'ADMIN\') then Allow',
  };

  // Try to match the prompt with known examples
  for (const [key, value] of Object.entries(examples)) {
    if (prompt.toLowerCase().includes(key.toLowerCase())) {
      return value;
    }
  }

  // Fallback: create a simple rule from the prompt
  const words = prompt.split(' ');
  const conditions = words.filter(w => !['if', 'then', 'and', 'or', 'the', 'a', 'an', 'to', 'for'].includes(w.toLowerCase()));
  
  if (conditions.length > 0) {
    const condition = conditions[0];
    const action = conditions.length > 1 ? conditions[1] : 'Action';
    return `if ${condition} > 0 then ${action}`;
  }

  return 'if Condition then Action';
}

async acceptRule(): Promise<void> {
  if (this.generatedRule) {
    this.form.patchValue({ EXPRESSION: this.generatedRule });
    this.addAILog('success', '✅', 'Rule accepted and applied to editor!');
    this.generatedRule = '';
    this.confidenceLevel = null;
  }
}

async regenerateRule(): Promise<void> {
  if (this.aiPrompt) {
    this.generateRule();
  }
}

delay(ms: number): Promise<void> {
  return new Promise(resolve => setTimeout(resolve, ms));
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


