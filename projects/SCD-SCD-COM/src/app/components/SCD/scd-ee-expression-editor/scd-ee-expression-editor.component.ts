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
import { scdexpressionEditorScdEeExpressionEditor , componentConfigDef} from '@modeldir/model';
import {
  ExpressionEngineService,
  LoadedRule,
  RuntimeContext,
  ValidationResult,
  Value,
  ExpressionVariables,
  LIBRARY_FUNCTIONS,     
} from '../../../services/expression-engine.service';

 const createFormGroup = (dataItem:any) => new FormGroup({
'EXPRESSION_EDITOR_ID' : new FormControl(dataItem.EXPRESSION_EDITOR_ID  , ) ,
'APPLICATION_ID' : new FormControl(dataItem.APPLICATION_ID  , ) ,
'AI_EXPRESSION' : new FormControl(dataItem.AI_EXPRESSION  , ) ,
'AI_RESPONSE' : new FormControl(dataItem.AI_RESPONSE  , ) ,
'EXPRESSION' : new FormControl(dataItem.EXPRESSION  , ) ,
'IF_KEY' : new FormControl(dataItem.IF_KEY  , ) ,
'RELATIONAL_KEY' : new FormControl(dataItem.RELATIONAL_KEY  , ) ,
'ARITHMETIC_KEY' : new FormControl(dataItem.ARITHMETIC_KEY  , ) ,
'BITWISE_KEY' : new FormControl(dataItem.BITWISE_KEY  , ) ,
'LOGICAL_KEY' : new FormControl(dataItem.LOGICAL_KEY  , ) ,
'FUNCTIONS_KEY' : new FormControl(dataItem.FUNCTIONS_KEY  , ) ,
'LINE' : new FormControl(dataItem.LINE  , ) ,
'COLUMN' : new FormControl(dataItem.COLUMN  , ) ,
'SYNTAX_MSG' : new FormControl(dataItem.SYNTAX_MSG  , ) 
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
  public componentConfig_output: componentConfigDef;
  public editableMode = false;
  private CurrentRec = 0;
  public  executeQueryresult:any;
  public isSearch!: boolean;
  public isChild: boolean = false;
  public isMaster: boolean = false;
  public isSearchScreen:boolean = false;
  public  isEXPRESSION_EDITOR_IDEnable : boolean = true;

  public FORM_TRIGGER_FAILURE:any;
  public NOTFOUND:any;
  public disableEmitSave = false;
  public disableEmitReadCompleted = false;
  public children = ["any"];

  public action = "";
  private Body:any =[];
  public isNew!: boolean;
  public primarKeyReadOnlyArr = {isEXPRESSION_EDITOR_IDreadOnly : false};  
  public paramConfig;
  private masterKeyArr = [];
  private masterKeyNameArr = [];
  public  masterKey="";
  public masterKeyName ="EXPRESSION_EDITOR_ID";
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
public labelEXPRESSIONVisible=false;
public labelIF_KEYTop=false;
public labelIF_KEYVisible=false;
public labelRELATIONAL_KEYTop=false;
public labelRELATIONAL_KEYVisible=false;
public labelARITHMETIC_KEYTop=false;
public labelARITHMETIC_KEYVisible=false;
public labelBITWISE_KEYTop=false;
public labelBITWISE_KEYVisible=false;
public labelLOGICAL_KEYTop=false;
public labelLOGICAL_KEYVisible=false;
public labelFUNCTIONS_KEYTop=false;
public labelFUNCTIONS_KEYVisible=false;
public labelALARMS_KEYTop=false;
public labelALARMS_KEYVisible=false;
public labelTAGS_KEYTop=false;
public labelTAGS_KEYVisible=false;
public labelLINETop=false;
public labelLINEVisible=true;
public labelCOLUMNTop=false;
public labelCOLUMNVisible=true;
public labelSYNTAX_CHECK_KEYTop=false;
public labelSYNTAX_CHECK_KEYVisible=true;
public labelSYNTAX_MSGTop=false;
public labelSYNTAX_MSGVisible=false;
public labelOPEN_AITop=false;
public labelOPEN_AIVisible=true;

public visibleEXPRESSION_EDITOR_ID = false;
public visibleAPPLICATION_ID = false;
public visibleAI_EXPRESSION = false;
public visibleAI_RESPONSE = false;
public visibleSUBMIT = false;
public visibleEXPRESSION = true;
public visibleIF_KEY = true;
public visibleRELATIONAL_KEY = true;
public visibleARITHMETIC_KEY = true;
public visibleBITWISE_KEY = true;
public visibleLOGICAL_KEY = true;
public visibleFUNCTIONS_KEY = true;
public visibleALARMS_KEY = true;
public visibleTAGS_KEY = true;
public visibleLINE = false;
public visibleCOLUMN = false;
public visibleSYNTAX_CHECK_KEY = true;
public visibleSYNTAX_MSG = true;
public visibleOPEN_AI = true;

public disableEXPRESSION_EDITOR_ID = false;
public disableAPPLICATION_ID = false;
public disableAI_EXPRESSION = false;
public disableAI_RESPONSE = false;
public disableSUBMIT = false;
public disableEXPRESSION = false;
public disableIF_KEY = false;
public disableRELATIONAL_KEY = false;
public disableARITHMETIC_KEY = false;
public disableBITWISE_KEY = false;
public disableLOGICAL_KEY = false;
public disableFUNCTIONS_KEY = false;
public disableALARMS_KEY = false;
public disableTAGS_KEY = false;
public disableLINE = false;
public disableCOLUMN = false;
public disableSYNTAX_CHECK_KEY = false;
public disableSYNTAX_MSG = true;
public disableOPEN_AI = false;

public variableSUBMIT;
public variableALARMS_KEY;
public variableTAGS_KEY;
public variableSYNTAX_CHECK_KEY;
public variableOPEN_AI;

  
  //@Input()  
  public showToolBar = false;
  @Output() readCompletedOutput: EventEmitter<any> = new EventEmitter();
  @Output() clearCompletedOutput: EventEmitter<any> = new EventEmitter();
  @Output() saveCompletedOutput: EventEmitter<any> = new EventEmitter();
  @Output() formValidationChangedOutput: EventEmitter<boolean> = new EventEmitter();
  @Output() setComponentConfig_Output: EventEmitter<any> = new EventEmitter();
  @Output() valueChange = new EventEmitter<string>();

   constructor(public starlib1: Starlib1,public router: Router,public intl: IntlService, 
    public responsive: BreakpointObserver, 
   private starNotify: StarNotifyService,  
    public starServices: starServices,private expressionEngine: ExpressionEngineService
   ) {
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

  private formInitialValues:any =   new scdexpressionEditorScdEeExpressionEditor();   
    @Input() public set detail_Input(form: any) {
       if (typeof form != "undefined"){
        this.isSearch = true;
        this.executeQuery(form);
        this.isChild = true;
      }
      /*
    if (this.paramConfig.DEBUG_FLAG) console.log('detail_Input ScdExpressionEditorScdEeExpressionEditorForm form.EXPRESSION_EDITOR_ID :' + form.EXPRESSION_EDITOR_ID);
    if ( (form.EXPRESSION_EDITOR_ID != "") &&   (typeof form.EXPRESSION_EDITOR_ID != "undefined"))
    {
      this.masterKey = form.EXPRESSION_EDITOR_ID;
      
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
    if ( (typeof form != "undefined") &&   (typeof form.EXPRESSION_EDITOR_ID != "undefined") &&   (form.EXPRESSION_EDITOR_ID != ""))
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
      

 this.lkpArrTAGS_KEY= this.starlib1.tagsDefinition;
 this.lkpArrALARMS_KEY= this.starlib1.alarmsDefinition;
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
this.lookupArrDef =[	{"statment":"SELECT APPLICATION_ID CODE, APPLICATION_NAME CODETEXT_LANG  FROM SCD_APPLICATION  order by CODETEXT_LANG ",
			"lkpArrName":"lkpArrAPPLICATION_ID"},
	{"statment":"SELECT CODE, CODETEXT_LANG , PARTCODE FROM SOM_TABS_CODES WHERE CODENAME = \"IF_KEY\"  and LANGUAGE_NAME = '" + this.userLang + "' order by CODETEXT_LANG ",
			"lkpArrName":"lkpArrIF_KEY"},
	{"statment":"SELECT CODE, CODETEXT_LANG , PARTCODE FROM SOM_TABS_CODES WHERE CODENAME = \"RELATIONAL_KEY\"  and LANGUAGE_NAME = '" + this.userLang + "' order by CODETEXT_LANG ",
			"lkpArrName":"lkpArrRELATIONAL_KEY"},
	{"statment":"SELECT CODE, CODETEXT_LANG , PARTCODE FROM SOM_TABS_CODES WHERE CODENAME = \"ARITHMETIC_KEY\"  and LANGUAGE_NAME = '" + this.userLang + "' order by CODETEXT_LANG ",
			"lkpArrName":"lkpArrARITHMETIC_KEY"},
	{"statment":"SELECT CODE, CODETEXT_LANG , PARTCODE FROM SOM_TABS_CODES WHERE CODENAME = \"BITWISE_KEY\"  and LANGUAGE_NAME = '" + this.userLang + "' order by CODETEXT_LANG ",
			"lkpArrName":"lkpArrBITWISE_KEY"},
	{"statment":"SELECT CODE, CODETEXT_LANG , PARTCODE FROM SOM_TABS_CODES WHERE CODENAME = \"LOGICAL_KEY\"  and LANGUAGE_NAME = '" + this.userLang + "' order by CODETEXT_LANG ",
			"lkpArrName":"lkpArrLOGICAL_KEY"},
	{"statment":"SELECT CODE, CODETEXT_LANG , PARTCODE FROM SOM_TABS_CODES WHERE CODENAME = \"FUNCTIONS_KEY\"  and LANGUAGE_NAME = '" + this.userLang + "' order by CODETEXT_LANG ",
			"lkpArrName":"lkpArrFUNCTIONS_KEY"},
	{"statment":"SELECT CODE, CODETEXT_LANG, CODEVALUE_LANG FROM SOM_TABS_CODES WHERE CODENAME ='ALARMS_KEY' and LANGUAGE_NAME = '" + this.userLang + "' order by CODETEXT_LANG",
			"lkpArrName":"lkpArrALARMS_KEY"},
	{"statment":"SELECT CODE, CODETEXT_LANG, CODEVALUE_LANG FROM SOM_TABS_CODES WHERE CODENAME ='TAGS_KEY' and LANGUAGE_NAME = '" + this.userLang + "' order by CODETEXT_LANG",
			"lkpArrName":"lkpArrTAGS_KEY"}];
 if (this.lookupArrDef.length > 0)
   this.starServices.fetchLookups(this, this.lookupArrDef);
}

public lkpArrAPPLICATION_ID = [];

public lkpArrIF_KEY = [];

public lkpArrRELATIONAL_KEY = [];

public lkpArrARITHMETIC_KEY = [];

public lkpArrBITWISE_KEY = [];

public lkpArrLOGICAL_KEY = [];

public lkpArrFUNCTIONS_KEY = [];

public lkpArrALARMS_KEY = [];

public lkpArrTAGS_KEY = [];

public lkpArrGetAPPLICATION_ID(CODE: any): any {
var rec = this.lkpArrAPPLICATION_ID.find((x:any) => x.CODE === CODE);
return rec;
}

public lkpArrGetIF_KEY(CODE: any): any {
var rec = this.lkpArrIF_KEY.find((x:any) => x.CODE === CODE);
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

public lkpArrGetLOGICAL_KEY(CODE: any): any {
var rec = this.lkpArrLOGICAL_KEY.find((x:any) => x.CODE === CODE);
return rec;
}

public lkpArrGetFUNCTIONS_KEY(CODE: any): any {
var rec = this.lkpArrFUNCTIONS_KEY.find((x:any) => x.CODE === CODE);
return rec;
}

public lkpArrGetALARMS_KEY(CODE: any): any {
var rec = this.lkpArrALARMS_KEY.find((x:any) => x.CODE === CODE);
return rec;
}

public lkpArrGetTAGS_KEY(CODE: any): any {
var rec = this.lkpArrTAGS_KEY.find((x:any) => x.CODE === CODE);
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
this.form.get('SYNTAX_MSG').valueChanges.subscribe(val => {
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
    this.FORM_TRIGGER_FAILURE = true;
    
  }
  async  POST_INSERT(formGroup){
    
   
  }
  async  PRE_QUERY (formGroup){
    if (formGroup.EXPRESSION_DATA) {
        console.log('CodeEditor received value:0:', formGroup.EXPRESSION_DATA);
      this.form.patchValue({ EXPRESSION: formGroup.EXPRESSION_DATA });
      // Force update the form control
      this.form.get('EXPRESSION')?.updateValueAndValidity();
    }
    this.FORM_TRIGGER_FAILURE = true;
   
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
 this.valueChange.emit(value);
 // Code goes here 
this.syntaxState = 'none';                        // ← ADD
this.form.patchValue({ 'SYNTAX_MSG': "" }); 

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
this.append2Exp(value);
this.form.patchValue({ 'IF_KEY': null }); 

 if ( this.FORM_TRIGGER_FAILURE == true) 
 return; 
 
 if (typeof this.form.controls['IF_KEY'] != "undefined" ) 
     this.form.get('IF_KEY').updateValueAndValidity();
 this.form.updateValueAndValidity(); 
 }

 async ON_CLICK_IF_KEY(event){

}

async WHEN_VALIDATE_ITEM_RELATIONAL_KEY(value) {

 this.FORM_TRIGGER_FAILURE = false ; 
 if (typeof this.form.controls['RELATIONAL_KEY'] != "undefined" ) 
      this.form.controls['RELATIONAL_KEY'].setErrors({invalid: true}); 
 // Code goes here 
this.append2Exp(value);
this.form.patchValue({ 'RELATIONAL_KEY': null }); 

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
this.append2Exp(value);
this.form.patchValue({ 'ARITHMETIC_KEY': null }); 

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
this.append2Exp(value);
this.form.patchValue({ 'BITWISE_KEY': null }); 

 if ( this.FORM_TRIGGER_FAILURE == true) 
 return; 
 
 if (typeof this.form.controls['BITWISE_KEY'] != "undefined" ) 
     this.form.get('BITWISE_KEY').updateValueAndValidity();
 this.form.updateValueAndValidity(); 
 }

 async ON_CLICK_BITWISE_KEY(event){

}

async WHEN_VALIDATE_ITEM_LOGICAL_KEY(value) {

 this.FORM_TRIGGER_FAILURE = false ; 
 if (typeof this.form.controls['LOGICAL_KEY'] != "undefined" ) 
      this.form.controls['LOGICAL_KEY'].setErrors({invalid: true}); 
 // Code goes here 
this.append2Exp(value);
this.form.patchValue({ 'LOGICAL_KEY': null }); 

 if ( this.FORM_TRIGGER_FAILURE == true) 
 return; 
 
 if (typeof this.form.controls['LOGICAL_KEY'] != "undefined" ) 
     this.form.get('LOGICAL_KEY').updateValueAndValidity();
 this.form.updateValueAndValidity(); 
 }

 async ON_CLICK_LOGICAL_KEY(event){

}

async WHEN_VALIDATE_ITEM_FUNCTIONS_KEY(value) {

 this.FORM_TRIGGER_FAILURE = false ; 
 if (typeof this.form.controls['FUNCTIONS_KEY'] != "undefined" ) 
      this.form.controls['FUNCTIONS_KEY'].setErrors({invalid: true}); 
 // Code goes here 
this.append2Exp(value);
this.form.patchValue({ 'FUNCTION_KEY': null });
 

 if ( this.FORM_TRIGGER_FAILURE == true) 
 return; 
 
 if (typeof this.form.controls['FUNCTIONS_KEY'] != "undefined" ) 
     this.form.get('FUNCTIONS_KEY').updateValueAndValidity();
 this.form.updateValueAndValidity(); 
 }

 async ON_CLICK_FUNCTIONS_KEY(event){

}

async WHEN_VALIDATE_ITEM_ALARMS_KEY(value) {

 this.FORM_TRIGGER_FAILURE = false ; 
 if (typeof this.form.controls['ALARMS_KEY'] != "undefined" ) 
      this.form.controls['ALARMS_KEY'].setErrors({invalid: true}); 
 // Code goes here 

console.log ("WHEN_VALIDATE_ITEM:value:",value)
let arr = value.CODE.split(":");
let val = "{[" + arr[0] + "]" + arr[1] + ".VAL} "
this.append2Exp(val);

this.form.patchValue({ 'ALARMS_KEY': null }); 

 if ( this.FORM_TRIGGER_FAILURE == true) 
 return; 
 
 if (typeof this.form.controls['ALARMS_KEY'] != "undefined" ) 
     this.form.get('ALARMS_KEY').updateValueAndValidity();
 this.form.updateValueAndValidity(); 
 }

 async ON_CLICK_ALARMS_KEY(event){

}

async WHEN_VALIDATE_ITEM_TAGS_KEY(value) {

 this.FORM_TRIGGER_FAILURE = false ; 
 if (typeof this.form.controls['TAGS_KEY'] != "undefined" ) 
      this.form.controls['TAGS_KEY'].setErrors({invalid: true}); 
 // Code goes here 

console.log ("WHEN_VALIDATE_ITEM:value:",value)
let arr = value.CODE.split(":");
let val = "{[" + arr[0] + "]" + arr[1] + ".VAL} "
this.append2Exp(val);

this.form.patchValue({ 'TAGS_KEY': null }); 

 if ( this.FORM_TRIGGER_FAILURE == true) 
 return; 
 
 if (typeof this.form.controls['TAGS_KEY'] != "undefined" ) 
     this.form.get('TAGS_KEY').updateValueAndValidity();
 this.form.updateValueAndValidity(); 
 }

 async ON_CLICK_TAGS_KEY(event){

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
const source = String(this.form.get('EXPRESSION')?.value ?? '');

  const loaded = this.expressionEngine.loadWithVariables(source);
  if ('error' in loaded) {
    const errs = loaded.error.diagnostics.filter(d => d.severity === 'error');
    this.syntaxState = 'error';
    this.helpText = errs.map(e => `${e.code}: ${e.message}`).join('\n');
    this.form.patchValue({ 'SYNTAX_MSG': this.helpText });
    return;
  }

  const { rule, variables } = loaded;

  const tags: Record<string, Value> = {};
  let i = 0;
  for (const name of variables.tags) tags[name] = i++;

  const context: RuntimeContext = {
    tags,
    input: variables.usesPlaceholder ? 0 : undefined,
    currentUserName: this.starServices.sessionParams?.['USERNAME'] ?? 'TESTUSER',
    currentLanguage: this.userLang ?? 'en',
    securityCodes: ['A', 'D'],
    // No `functions` — engine resolves AE_* via AlarmEventDataService.
  };

  try {
    const value = rule.execute(context);
    console.log("value:", value)
    this.syntaxState = 'ok';
    this.helpText = `Syntax OK (result = ${value})`;
    this.form.patchValue({ 'SYNTAX_MSG': this.helpText });
  } catch (err) {
    console.log("value:err:", (err as Error).message)
    this.syntaxState = 'error';
    this.helpText = (err as Error).message;
    this.form.patchValue({ 'SYNTAX_MSG': this.helpText });
  }
}

async WHEN_VALIDATE_ITEM_SYNTAX_MSG(value) {

 this.FORM_TRIGGER_FAILURE = false ; 
 if (typeof this.form.controls['SYNTAX_MSG'] != "undefined" ) 
      this.form.controls['SYNTAX_MSG'].setErrors({invalid: true}); 
 // Code goes here 
 

 if ( this.FORM_TRIGGER_FAILURE == true) 
 return; 
 
 if (typeof this.form.controls['SYNTAX_MSG'] != "undefined" ) 
     this.form.get('SYNTAX_MSG').updateValueAndValidity();
 this.form.updateValueAndValidity(); 
 }

 async ON_CLICK_SYNTAX_MSG(event){

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
 async onValueChange_LOGICAL_KEY(value) { 
  this.FORM_TRIGGER_FAILURE = false;	
 await this.WHEN_VALIDATE_ITEM_LOGICAL_KEY(value); if ( this.FORM_TRIGGER_FAILURE) return; 
 this.formValidationChangedOutput.emit(this.form.valid); 
  
  } 
 async onValueChange_FUNCTIONS_KEY(value) { 
  this.FORM_TRIGGER_FAILURE = false;	
 await this.WHEN_VALIDATE_ITEM_FUNCTIONS_KEY(value); if ( this.FORM_TRIGGER_FAILURE) return; 
 this.formValidationChangedOutput.emit(this.form.valid); 
  
  } 
 async onValueChange_ALARMS_KEY(value) { 
  this.FORM_TRIGGER_FAILURE = false;	
 await this.WHEN_VALIDATE_ITEM_ALARMS_KEY(value); if ( this.FORM_TRIGGER_FAILURE) return; 
 this.formValidationChangedOutput.emit(this.form.valid); 
  
  } 
 async onValueChange_TAGS_KEY(value) { 
  this.FORM_TRIGGER_FAILURE = false;	
 await this.WHEN_VALIDATE_ITEM_TAGS_KEY(value); if ( this.FORM_TRIGGER_FAILURE) return; 
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
 async onValueChange_SYNTAX_CHECK_KEY(value) { 
  this.FORM_TRIGGER_FAILURE = false;	
 await this.WHEN_VALIDATE_ITEM_SYNTAX_CHECK_KEY(value); if ( this.FORM_TRIGGER_FAILURE) return; 
 this.formValidationChangedOutput.emit(this.form.valid); 
  
  } 
 async onValueChange_SYNTAX_MSG(value) { 
  this.FORM_TRIGGER_FAILURE = false;	
 await this.WHEN_VALIDATE_ITEM_SYNTAX_MSG(value); if ( this.FORM_TRIGGER_FAILURE) return; 
 this.formValidationChangedOutput.emit(this.form.valid); 
  
  } 
 async onValueChange_OPEN_AI(value) { 
  this.FORM_TRIGGER_FAILURE = false;	
 await this.WHEN_VALIDATE_ITEM_OPEN_AI(value); if ( this.FORM_TRIGGER_FAILURE) return; 
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
  public helpText = "";
  public syntaxState = "";

  // AI Examples for Chip List
  aiExamples: string[] = [
    'If temperature exceeds 100 then 1',
    'If counter greater than  18 then 0'
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


    // 1) Ask your backend / AI for a rule-language expression.
    //    For the moment we just pass the prompt through.
    let question = this.aiPrompt.trim();
    let expression = await this.submit(question);

    // 2) Validate it locally.
    const result: ValidationResult = this.expressionEngine.validate(expression, {
      // tagTypes: { tag1: 'number', MaxTemp: 'number' },  // optional
    });

    if (!result.valid) {
      for (const d of result.diagnostics) {
        this.addAILog(
          d.severity === 'error' ? 'error' : 'warning',
          d.severity === 'error' ? '❌' : '⚠️',
          `${d.code} @ ${d.line}:${d.column} — ${d.message}`,
        );
      }
      this.isGenerating = false;
      return;
    }

    this.generatedRule = question;
    this.confidenceLevel = Math.floor(Math.random() * 10) + 90;
    this.addAILog('success', '✅', 'Rule validated successfully!');
    this.addAILog('success', '📊', `Confidence: ${this.confidenceLevel}%`);
    this.isGenerating = false;
    this.form.patchValue({ EXPRESSION: expression });
    this.valueChange.emit(expression);

    
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

  public evaluateCurrentExpression(): void {
    const source = String(this.form.get('EXPRESSION')?.value ?? '');
    if (!source) { return; }

    const context: RuntimeContext = {
      tags: {
        temperature: 5,
        tag2: 7,
        tag3: 100,
      },
      // input: 10,                       // only for write expressions
      // currentUserName: this.starServices.sessionParams?.['USERNAME'],
      // currentLanguage: this.userLang,
      // securityCodes: ['A', 'D'],
    };

    // 1) Validate for a nicer UX first.
    const validation = this.expressionEngine.validate(source);
    if (!validation.valid) {
      // validation.diagnostics.forEach(d =>
      //   this.starNotify.showError(`${d.code}: ${d.message} (line ${d.line}, col ${d.column})`)
      // );
      return;
    }

    // 2) Execute.
    try {
      const rule: LoadedRule = this.expressionEngine.load(source);
      const value = rule.execute(context);
      console.log('Rule result:', value);
      //this.starNotify.showInfo(`Result: ${value}`);
    } catch (err) {
      // this.starNotify.showError(`Execution error: ${(err as Error).message}`);
    }
  }


  append2Exp(value) {
    if (value == null)
      return;
    let expression = this.form.value['EXPRESSION'];
    expression = expression + ' ' + value;
    this.form.patchValue({ 'EXPRESSION': expression });
  }


  buildScreenToDisplayQuestion2Loop(dwgDef, id) {

    console.log("Question2:dwgDef:", dwgDef)


    let Question2 = "I need you to generate a JSON configuration for a Kendo UI diagram for shape:" + id + " ONLY "
      + `
    ## CRITICAL: This is a DETAILED shape definition, NOT a placeholder!
    Please generate the FULL visual representation  with ALL details.

    ## Target JSON Structure:

    interface KendoDiagramConfig {
      shapeDefaults: {
        visual: null;
        fill: string;
        stroke: { color: string; width: number };
      };
      connectionDefaults: {
        stroke: { color: string; width: number; dashType?: string };
      };
      layout: {
        type: "tree" | "layered" | "force" | "grid";
        subtype?: "tipover" | "horizontal" | "vertical";
      };
    }

    interface DiagramDefinition {
      shapes: Array<{
        id: string;
        x: number;      // RELATIVE to container (0 = container left edge)
        y: number;      // RELATIVE to container (0 = container top edge)
        width: number;
        height: number;
        fill?: string;
        stroke?: { color: string; width: number };
        cornerRadius?: number;
        opacity?: number;
        shape?: "rectangle" | "circle";
      }>;
      textBlocks: Array<{
        id: string;
        x: number;      // RELATIVE to container
        y: number;      // RELATIVE to container
        text: string;
        font?: string;
        fill?: string;
        textAnchor?: "start" | "middle" | "end";
        opacity?: number;
      }>;
      lines: Array<{
        id: string;
        from?: { x: number; y: number };  // RELATIVE to container
        to?: { x: number; y: number };    // RELATIVE to container
        path?: string;
        stroke?: { color: string; width: number; dashType?: string };
        opacity?: number;
      }>;
      connections: Array<{
        from: string;
        to: string;
        stroke?: { color: string; width: number; dashType?: string };
      }>;
    }

    interface ShapeOption {
      id: string;
      x: number;        // Absolute position on canvas (container position)
      y: number;        // Absolute position on canvas (container position)
      width: number;    // Container width
      height: number;   // Container height
      dataItem: {
        type: string;
        definition: DiagramDefinition;  // ALL children use RELATIVE positioning
        title?: string;
        offsetX?: number;
        offsetY?: number;
        customColors?: any;
      };
    }

    ## CRITICAL RULES FOR DETAILED DEFINITION:



    3. Use RELATIVE positioning inside definition.shapes (x:0, y:0 is top-left of container)
    4. Use ONLY solid hex colors: #a0a0a0, #6a6a6a, #4a4a4a, #b0b0b0, #808080, #3399ff, #ff6600
    5. Include descriptive text labels for all major parts
    6. All IDs must be unique and descriptive

    ## Container Position:
    - The container is at x:100, y:350 with width:200, height:200
    - ALL shapes inside use RELATIVE positioning (0,0 = container top-left)
    - The container position (100, 350) will be added by the system

    ## Output Structure:
    Return a single JSON object with:
    {
      "shapeDefaults": { ... },
      "connectionDefaults": { ... },
      "layout": { ... },
      "shapeOptions": [
        {
          "id": "motor1",
          "x": 100,
          "y": 350,
          "width": 200,
          "height": 200,
          "dataItem": {
            "type": "motor",
            "title": "Motor 1",
            "definition": {
              "shapes": [
                // FULL DETAILED SHAPES HERE - NOT PLACEHOLDERS!
                // Include body, top, fan, shaft, bolts, etc.
              ],
              "textBlocks": [
                // FULL TEXT LABELS HERE
                // Include "MOTOR", specs, labels for parts
              ],
              "lines": [
                // FULL LINES HERE
                // Include power lines, ground lines, etc.
              ],
              "connections": []
            }
          }
        }
      ],
      "connections": []
    }

    ## IMPORTANT REMINDERS:
    - DO NOT use placeholder: true - this is a REAL detailed definition
    - ALL shapes inside definition.shapes use RELATIVE positioning
    - The shape should look detailed and realistic
    - Include at least 5-8 shapes, 3-4 textBlocks, and 2-3 lines
    - Use proper colors for appearance.
    - DO NOT add any label to a shape at all.
    - Do NOT invent:
        specifications
        ratings
        model numbers
        dimensions
        DN values
        PN values
        IN/OUT labels
        engineering notes
        flow labels
        equipment tags
        alarm indicators
        status indicators
        TextBlocks
     - Only show titles
     - ONLY SHOW textBlock for the title only


    `
    Question2 = Question2 + " as per earlier provided requirement. \n"
    // const container = this.shapeOptions.find((s: any) => s.id === id);
    // Question2 = Question2 + JSON.stringify(container, null, 2)

    // Question2 = Question2 + ".  Based on the requirements provided earlier stated again to maintain the context  :"
    // Question2 = Question2 + this.form.value['question']


    console.log("Question2:", Question2)
    return Question2;
  }

  public somBody = [];
  public showLog = false;
  public hideSubmit = false;
  public answer = "";
  public answer_dwg = "";
  public answer_relations = "";
  public compsArray = [];
  public DSP_DYNAMIC_RW: any = [];
  public ComponentsMapsArr: any = {};
  public createdComponentsArr = [];
  public simulate = false;
  public logID = 113;
  public isComplete = false;

  public sameApp = true;
  public answers = [];
  public RULE_LANGUAGE_REFERENCE = `
    RULE ENGINE SPECIFICATION (authoritative)

    1. CANONICAL CONDITIONAL SYNTAX
    - Generate conditionals ONLY in this form:
      IF (condition) THEN when_true ELSE when_false
    - The parentheses around the condition are recommended and are the canonical output form.
    - The engine also accepts legacy input without condition parentheses:
      IF condition THEN when_true ELSE when_false
    - Functional/comma syntax IF(condition, when_true, when_false) is accepted only for backward compatibility. NEVER generate it from AI.


    2. LITERALS
    - Numbers: 0, 1, 12, 3.14
    - Strings: double quoted, for example "READY"

    3. COMPARISONS
    - Preferred symbols: ==, <>, <, >, <=, >=
    - Accepted word aliases: EQ, NE, LT, GT, LE, GE
    - Comparison results are numeric/logical: 1 for true, 0 for false.

    4. LOGICAL OPERATORS
    - Preferred: AND, OR, NOT
    - Accepted aliases: &&, ||
    - There is no standalone ! operator in this engine.

    5. ARITHMETIC AND BITWISE OPERATORS
    - Arithmetic: +, -, *, /, %, MOD, **
    - Bitwise: &, |, ^, ~, >>, <<
    - MOD/% and bitwise operators require integer operands.

    6. MATH FUNCTIONS (one numeric expression argument)
    - SQRT(), LOG(), LOG10(), SIN(), COS(), TAN()
    - ARCSIN(), ARCCOS(), ARCTAN()
    - SIND(), COSD(), TAND(), ARCSIND(), ARCCOSD(), ARCTAND()

    7. APPLICATION CONTEXT FUNCTIONS
    - CURRENTUSERNAME()
    - CURRENTLANGUAGE()
    - CURRENTUSERHASCODE(CODE)

    8. WRITE EXPRESSIONS
    - ? represents the supplied runtime input value.
    - ? is allowed only when writeExpression=true.
    - A write expression must contain ? at least once.

    9. PARSER PRECEDENCE (low to high)
    - relational comparisons
    - additive: +, -, OR, ||, |, ^
    - multiplicative: *, /, MOD, %, **, AND, &&, &, >>, <<
    - unary: NOT, ~, +, -
    - primary values/tags/functions/parentheses

    CANONICAL EXAMPLES
    - Human: If local temperature is greater than square root of local MaxTemp , return 1 else 0
      Expression: IF ( {[Local]temperature.VAL} > SQRT( {[Local]MaxTemp.VAL} )) THEN 1 ELSE 0

    - Human: If temperature is greater than MaxTemp then square root of tag3 else temperature plus MaxTemp
      Expression: IF ({[Local]temperature.VAL} > {[Local]MaxTemp.VAL}) THEN SQRT(tag3) ELSE {[Local]temperature.VAL} + {[Local]MaxTemp.VAL}

    - Human: If temperature is at least 30, return 100 else 0
      Expression: IF ({[Local]temperature.VAL} >= 30) THEN 100 ELSE 0

    - Human: Return 1 if MaxTemp is less than 10 else 0
      Expression: IF ({[Local]MaxTemp.VAL} < 10) THEN 1 ELSE 0

    - Human: If current user has code A return 1 else 0
      Expression: IF (CURRENTUSERHASCODE(A)) THEN 1 ELSE 0

    - Human: If special tag 1-temperature is positive return its square root else 0
      Expression: IF ({1-{[Local]temperature.VAL}} > 0) THEN SQRT({1-{[Local]temperature.VAL}}) ELSE 0

    IMPORTANT OUTPUT CONTRACT
    - The expression field contains ONLY this rule language, never JavaScript.
    - The backend validates the expression and separately returns generated JavaScript and AST.
    - Never invent functions, operators, tag syntax, or conditional syntax outside this specification.
    `.trim();

  public buildSystemPrompt(request): string {
    const testCaseInstruction = request.generateTestCases
      ? `Generate exactly ${request.testCaseCount} useful test cases in the SAME JSON response. Cover normal, boundary, true-branch, false-branch, and edge behavior when relevant.`
      : "Do not generate test cases. Return testCases as an empty array.";

    return [
      "ROLE: You are a deterministic translator from natural-language business rules to THIS project's rule-expression language.",
      "The specification below is copied from the engine contract and is authoritative. Do not use generic JavaScript syntax and do not invent a different rule language.",
      "",
      "OUTPUT FORMAT",
      "Return exactly one JSON object. No markdown. No prose outside JSON.",
      "Required JSON shape:",
      '{"expression":"...","explanation":"...","assumptions":["..."],"testCases":[{"name":"...","context":{"tags":{"temperature":1}},"expected":1}]}',
      "The expression field MUST contain the rule DSL only. It MUST NOT contain JavaScript. The backend compiles validated DSL to JavaScript itself.",
      "",
      "CONDITIONAL OUTPUT POLICY",
      "Always generate IF rules using the canonical keyword form: IF (condition) THEN value ELSE value.",
      "Never generate IF(condition, value, value), even though the parser accepts that old form for backward compatibility.",
      "",
      "TAG TYPO POLICY",
      "Do not casually rename user-defined tags. However, correct an obvious numbered-tag typo such as tage2 -> MaxTemp when the intended tag is unambiguous, and mention the correction in assumptions.",
      "",
      testCaseInstruction,
      "For every generated test, context.tags must contain concrete values for every tag used by the expression, and expected must be the expected rule-engine result.",
      
      request.writeExpression
        ? "This is a write expression. The generated expression must use the ? placeholder at least once. Test contexts should include input when needed."
        : "This is not a write expression. Never use the ? placeholder.",
      "",
      this.RULE_LANGUAGE_REFERENCE,
      request.TagFormat
    ].join("\n");
  }

  resetVars() {
    this.helpText = "";
    this.somBody = [];
    this.compsArray = [];
    //this.relationshipsArrWithMap = [];
    this.DSP_DYNAMIC_RW = [];
    this.ComponentsMapsArr = {};
    this.answer = "";
    this.answer_dwg = "";
    this.answer_relations = "";
  }
  async insertAILogHead() {
    if (this.simulate)
      return;
    let body = [
      {
        "_QUERY": "INSERT_ADM_AI_LOG_HEAD",
        "USERNAME": this.starServices.MASTER_DB,
        "APP_ID": this.masterParams.data.APP_ID,
        "AI_ACTION_ID": this.masterParams.data.AI_ACTION_ID,
        "AI_ENTITY_ID": this.masterParams.data.AI_ENTITY_ID,
        "REQUESTED_ON": this.masterParams.data.REQUESTED_ON,
        "DURATION": 0,
        "LOGNAME": this.starServices.MASTER_DB,
        "LOGDATE": new Date()
      }
    ]
    if (this.paramConfig.DEBUG_FLAG) console.log("Checking:insertAILogHead:body:", body)
    let data = await this.starServices.execSQLBody(this, body, "");
  }
  async insertAILogDetail(Question, Stage) {
    if (this.simulate)
      return;

    let body = [
      {
        "_QUERY": "INSERT_ADM_AI_LOG_DETAIL",
        "USERNAME": this.starServices.MASTER_DB,
        "APP_ID": this.masterParams.data.APP_ID,
        "AI_ACTION_ID": this.masterParams.data.AI_ACTION_ID,
        "AI_ENTITY_ID": this.masterParams.data.AI_ENTITY_ID,
        "REQUESTED_ON": this.masterParams.data.REQUESTED_ON,
        "DURATION": 0,
        "AI_SEQ": this.masterParams.data.AI_SEQ,
        "STAGE": Stage,
        "QUESTION": Question,
        "ANSWER": "",
        "LOGNAME": this.starServices.MASTER_DB,
        "LOGDATE": new Date()
      }
    ]
    if (this.paramConfig.DEBUG_FLAG) console.log("Checking:insertAILogDetail:body:", body)
    let data = await this.starServices.execSQLBody(this, body, "");
  }
  async updateAILogDetail(Question, Answer, Stage) {
    if (this.simulate)
      return;

    let body = [
      {
        "_QUERY": "UPDATE_ADM_AI_LOG_DETAIL",
        "USERNAME": this.starServices.MASTER_DB,
        "APP_ID": this.masterParams.data.APP_ID,
        "AI_ACTION_ID": this.masterParams.data.AI_ACTION_ID,
        "AI_ENTITY_ID": this.masterParams.data.AI_ENTITY_ID,
        "REQUESTED_ON": this.masterParams.data.REQUESTED_ON,
        "DURATION": this.masterParams.data.DURATION,
        "AI_SEQ": this.masterParams.data.AI_SEQ,
        "STAGE": Stage,
        "QUESTION": Question,
        "ANSWER": Answer,
        "LOGNAME": this.starServices.MASTER_DB,
        "LOGDATE": new Date()
      }
    ]
    if (this.paramConfig.DEBUG_FLAG) console.log("Checking:updateAILogDetail:body:", body)
    let data = await this.starServices.execSQLBody(this, body, "");
  }
  async getThisLog(logID) {

    let whereClause = "  LOG_ID= '" + logID + "'";
    let body = [
      {
        "_QUERY": "GET_ADM_AI_LOG_HEAD_QUERY",
        "_WHERE": whereClause
      }
    ]
    if (this.paramConfig.DEBUG_FLAG) console.log("getThisLog:body:", body)

    let logHead = await this.starServices.execSQLBody(this, body, "");
    if (logHead[0].data.length != 0) {
      if (this.paramConfig.DEBUG_FLAG) console.log("getThisLog:logHead:", logHead[0].data[0])
      let logHeadRec = logHead[0].data[0];
      let requestedOn = logHeadRec.REQUESTED_ON;
      // if (this.masterParams.data.APP_ID != logHeadRec.AI_ENTITY_ID) {
      //   this.sameApp = false;
      //   let msg = "Simulate not match Current App :." + this.masterParams.data.APP_ID + " while for " + logHeadRec.LOG_ID + " is : " + logHeadRec.AI_ENTITY_ID;
      //   let dialogStruc = {
      //     msg: msg,
      //     title: "Error",
      //     info: null,
      //     object: this,
      //     action: this.starServices.OkActions,
      //     callback: null
      //   };
      //   this.starServices.showConfirmation(dialogStruc);
      //   return;
      // }
      let whereClause = "  REQUESTED_ON = '" + requestedOn + "'";
      let body = [
        {
          "_QUERY": "GET_ADM_AI_LOG_DETAIL_QUERY",
          "_WHERE": whereClause
        }
      ];
      let logDetail = await this.starServices.execSQLBody(this, body, "");
      if (logDetail[0].data.length != 0) {
        if (this.paramConfig.DEBUG_FLAG) console.log("getThisLog:logDetail:", logDetail[0].data)
        for (let i = 0; i < logDetail[0].data.length; i++) {
          this.answers[i] = logDetail[0].data[i].ANSWER;
        }
        if (this.paramConfig.DEBUG_FLAG) console.log("getThisLog:answers:", this.answers)

      }

    }
  }
  public showMsg(Msg, Title) {
    var dialogStruc = {
      msg: Msg,
      title: Title,
      info: null,
      object: this,
      action: this.starServices.OkActions,
      callback: null
    };
    this.starServices.showConfirmation(dialogStruc);
  }
  public singleMultiMsg = "";
  async callAI_API(qCode, Question, cursystemMsg, Stage) {
    let answer;
    this.isComplete = true;
    this.sameApp = true;

    this.masterParams.data.SENT_ON = new Date();
    this.masterParams.data.AI_SEQ = qCode;
    this.insertAILogDetail(Question, Stage);
    if (this.simulate) {
      if (qCode == 0) {
        await this.getThisLog(this.logID);
        if (!this.sameApp)
          return;
      }
      console.log("this.answers.length:", this.answers.length, "qCode:", qCode, "this.singleMultiMsg:", this.singleMultiMsg)
      answer = this.answers[qCode];
      answer = answer.replace('[COMPLETE]', '');

      if (this.answers.length >= 3) {
        if (qCode == 0) {
          answer = this.answers[qCode];
          answer = answer.replace('[COMPLETE]', '');
        }
        else {
          answer = this.answers[Stage];
          answer = answer.replace('[COMPLETE]', '');
        }



      }
      else {
        answer = this.answers[qCode];
        answer = answer.replace('[COMPLETE]', '');
      }

      //answer = this.answers_tasks[qCode];
      //answer = this.answersWildLif[qCode];


      if (this.paramConfig.DEBUG_FLAG) console.log("qCode answer:", qCode, answer);
      let now: any = new Date();
      if (this.paramConfig.DEBUG_FLAG) console.log("checking:", now, this.masterParams.data.SENT_ON)
      this.masterParams.data.DURATION = (now.getTime() - this.masterParams.data.SENT_ON.getTime()) / (1000);
      this.updateAILogDetail(Question, answer, Stage);



      return answer;
    }
    else {
      if (this.paramConfig.DEBUG_FLAG) console.log("Question:", Question)
      let Body = [];
      var page = "";
      var url = this.starServices.SERVER_URL + '/api/appgen?action=callAI';
      var newVal = {};
      //if (this.paramConfig.DEBUG_FLAG) console.log("this.starServices.MASTER_DB:", this.starServices.MASTER_DB)
      newVal["question"] = Question;
      newVal["AI_PROVIDER"] = "DEEPSEEK";
      //newVal["AI_PROVIDER"] = "OPENAI";
      //newVal["AI_PROVIDER"] = "CLAUDE";
      newVal["systemContent"] = cursystemMsg

      if (this.paramConfig.DEBUG_FLAG) console.log("newVal:", newVal)
      Body.push(newVal);
      let respone;
      this.helpText = this.helpText + "thinking... ";
      this.form.patchValue({ 'helpText': this.helpText });

      return new Promise(resolve => {
        this.starServices.postCommand(page, url, Body).subscribe(result => {
          this.helpText = this.helpText + " Done.\n";
          this.form.patchValue({ 'helpText': this.helpText });
          //if (this.paramConfig.DEBUG_FLAG) console.log("testx:execSQL:sqlStmt:result.data[0]:", Body, result.data[0])
          //if (this.paramConfig.DEBUG_FLAG) console.log("testx:execSQL:sqlStmt:result.data[0]:", Body, result.data)
          respone = result.data;
          // if (result.data.length == 0)
          //   object.NOTFOUND = true;
          let answer = respone.content;
          if (this.paramConfig.DEBUG_FLAG) console.log("answer:", respone.content)

          let now: any = new Date();
          if (this.paramConfig.DEBUG_FLAG) console.log("checking:", now, this.masterParams.data.SENT_ON)
          this.masterParams.data.DURATION = (now.getTime() - this.masterParams.data.SENT_ON.getTime()) / (1000);
          this.updateAILogDetail(Question, answer, Stage);

          if (answer.includes('[COMPLETE]') || answer.endsWith("```") || answer.endsWith("}")) {
            this.isComplete = true;
            answer = answer.replace('[COMPLETE]', '');
          }
          else {
            this.isComplete = false;
            let msg = "Answer not complete. Try again."
            let dialogStruc = {
              msg: msg,
              title: "Error",
              info: null,
              object: this,
              action: this.starServices.OkActions,
              callback: null
            };
            this.starServices.showConfirmation(dialogStruc);
          }

          return resolve(answer);
        },
          err => {

            alert('error callAI_API:' + err.message);
            let Msg = this.starServices.getNLS([], 'ERROR_callAI_API', 'Error callAI_API ');
            this.showMsg(Msg, "Error");
            return resolve(answer);
          });
      });


    }

  }
  cleanAIResponse(rawResponse: string): string {
    if (!rawResponse || rawResponse.trim() === '') {
      return '';
    }

    let cleaned = rawResponse.trim();

    // Step 1: Try to extract content between ```json and ``` if present
    const jsonBlockRegex = /```json\s*([\s\S]*?)\s*```/;
    const jsonBlockMatch = cleaned.match(jsonBlockRegex);

    if (jsonBlockMatch && jsonBlockMatch[1]) {
      // Found content between ```json and ```
      return jsonBlockMatch[1].trim();
    }

    // Step 2: Try to extract content between ``` and ``` (without 'json')
    const codeBlockRegex = /```\s*([\s\S]*?)\s*```/;
    const codeBlockMatch = cleaned.match(codeBlockRegex);

    if (codeBlockMatch && codeBlockMatch[1]) {
      // Found content between ``` and ```
      return codeBlockMatch[1].trim();
    }

    // Step 3: Try to extract JSON that starts with { and ends with }
    // This handles cases where markers are missing or incomplete
    const jsonRegex = /(\{[\s\S]*\})/;
    const jsonMatch = cleaned.match(jsonRegex);

    if (jsonMatch && jsonMatch[1]) {
      // Found JSON-like structure
      return jsonMatch[1].trim();
    }

    // Step 4: Try to find a valid JSON structure even with extra text
    // Look for the first { and last }
    const firstBrace = cleaned.indexOf('{');
    const lastBrace = cleaned.lastIndexOf('}');

    if (firstBrace !== -1 && lastBrace !== -1 && lastBrace > firstBrace) {
      return cleaned.substring(firstBrace, lastBrace + 1).trim();
    }

    // Step 5: If all else fails, try to parse the raw response
    // Some responses might have partial markers
    return cleaned;
  }
  fixAndParseJSON(rawResponse: string): any {
    let cleaned = rawResponse.trim();

    // Remove any text before the first {
    const firstBrace = cleaned.indexOf('{');
    if (firstBrace > 0) {
      cleaned = cleaned.substring(firstBrace);
    }

    // Remove any text after the last }
    const lastBrace = cleaned.lastIndexOf('}');
    if (lastBrace > 0 && lastBrace < cleaned.length - 1) {
      cleaned = cleaned.substring(0, lastBrace + 1);
    }

    // Fix trailing commas (common AI issue)
    cleaned = cleaned.replace(/,\s*}/g, '}');
    cleaned = cleaned.replace(/,\s*]/g, ']');

    // Fix missing quotes around property names
    // Note: This is a simplified fix - for production, consider using a proper JSON5 parser
    try {
      return JSON.parse(cleaned);
    } catch {
      // If still failing, try JSON5 parser if available
      // You can install: npm install json5
      // import JSON5 from 'json5';
      // return JSON5.parse(cleaned);
      throw new Error('Unable to fix JSON');
    }
  }
  parseAIResponse(rawResponse: string): any {
    try {
      const cleanJson = this.cleanAIResponse(rawResponse);

      if (!cleanJson) {
        throw new Error('No JSON content found in response');
      }

      // Validate JSON before parsing
      JSON.parse(cleanJson); // This will throw if invalid
      return JSON.parse(cleanJson);

    } catch (error) {
      console.error('Failed to parse AI response:', error);
      console.log('Raw response:', rawResponse);
      console.log('Cleaned response:', this.cleanAIResponse(rawResponse));

      // Attempt to fix common JSON issues
      try {
        return this.fixAndParseJSON(rawResponse);
      } catch (fixError) {
        console.error('Failed to fix and parse JSON:', fixError);
        return null;
      }
    }
  }
  async parseandProcessCreateDwg(answer) {
    this.helpText = this.helpText + "Got Dwg Def: \n";
    this.form.patchValue({ 'helpText': this.helpText });


    let dwgDef = this.parseAIResponse(answer);




    this.helpText = this.helpText + "Got shape " + ":\n";
    this.form.patchValue({ 'helpText': this.helpText });

    return dwgDef;

  }

  public buildUserPrompt(request): string {
    interface TagCorrection { from: string; to: string }
    function detectObviousTagCorrections(
      prompt: string,
      tagTypes?: ["tagTypes"]
    ): TagCorrection[] {
      const corrections = new Map<string, TagCorrection>();
      for (const match of prompt.matchAll(/\btage(\d+)\b/gi)) {
        const from = match[0]!;
        const to = `tag${match[1]}`;

        // If the caller explicitly registered the misspelled-looking name as a
        // real tag, respect that catalogue and do not silently rename it.
        if (tagTypes && Object.prototype.hasOwnProperty.call(tagTypes, from)) continue;

        corrections.set(from.toLowerCase(), { from, to });
      }
      return [...corrections.values()];
    }
    const obviousTagCorrections = detectObviousTagCorrections(request.prompt, request.tagTypes);
    return JSON.stringify({
      requirement: request.prompt,
      writeExpression: request.writeExpression,
      tagTypes: request.tagTypes ?? {},
      generateTestCases: request.generateTestCases,
      testCaseCount: request.testCaseCount,
      obviousTagCorrections,
      examples: [
        {
          input: "If temperature is greater than square root of MaxTemp, return 1 else 0",
          output: "IF (temperature > SQRT(MaxTemp)) THEN 1 ELSE 0"
        },
        {
          input: "If temperature is greater than MaxTemp then square root of tag3 else temperature plus MaxTemp",
          output: "IF (temperature > MaxTemp) THEN SQRT(tag3) ELSE temperature + MaxTemp"
        },
        {
          input: "Return 1 if MaxTemp is less than 10 else 0",
          output: "IF (MaxTemp < 10) THEN 1 ELSE 0"
        },
        {
          input: "If current user has code A return 1 else 0",
          output: "IF (CURRENTUSERHASCODE(A)) THEN 1 ELSE 0"
        },
        {
          input: "If temperature is greater than square root of tage2, return 1 else 0",
          output: "IF (temperature > SQRT(MaxTemp)) THEN 1 ELSE 0",
          assumption: "Assumed 'tage2' is a typo for 'MaxTemp'."
        }
      ]
    }, null, 2);
  }
  public request = {
    prompt: 'If temperature is greater than square root of tage2 , return 1 else 0',
    generateTestCases: false,
    testCaseCount: 5,
    writeExpression: false,
    TagFormat:""
  }
  async submit(question) {
    this.resetVars();
    let Question = "";

    console.log("submited:", question);

    if (!this.simulate) {
      // if (typeof this.myFiles['DIAGRAM_IMAGE'] != "undefined") {
      //   let imageDataUrl = this.myFiles['DIAGRAM_IMAGE'].accountImg;
      //   console.log(imageDataUrl);
      // }
    }



    this.masterParams = {
      data:
      {
        USERNAME: this.starServices.MASTER_DB,
        "APP_ID": "SCD-SCD-COM",
        "AI_ACTION_ID": "APP",
        "AI_ENTITY_ID": "EXPRESSION",
      }
    }
    this.request.prompt = question;

    this.masterParams.data.REQUESTED_ON = new Date();
    this.insertAILogHead();
    if (this.paramConfig.DEBUG_FLAG) console.log("question:", this.form.value['question']);
    if (!this.simulate && this.form.value['question'] == "") {
      let Msg = this.starServices.getNLS([], 'ERROR_DESCRIBE_DIAGRAM', 'Please describe the diagram you would like to create or upload an image of it.');
      this.showMsg(Msg, "Error");
      return;
    }
    this.addAILog('info', '🤔', 'Understanding your request...');

    let msg = " More for RULE ENGINE SPECIFICATION (authoritative) : 10. TAGS: A tag has the following format :{[ServerName]TagName.FIELD}, "
      + "where ServerName like local or remote, TagName like Counter or Random, and FIELD like VAL. "
    console.log("myServerConfigs:", this.starlib1.myServerConfigs,
      "tagsDefinition:", this.starlib1.tagsDefinition,
      "alarmsDefinition:", this.starlib1.alarmsDefinition);
    // for (let i=0; i < this.starlib1.myServerConfigs.length;i++){
    //   if ( i == 0){
    //     msg = msg + " Here are the current ServerNames and their TagNames: "
    //   }
    // if (this.starlib1.myServerConfigs[i].status == "connected"){
    //   let tagsDefinition = this.starlib1.myServerConfigs[i];
    //   let name = tagsDefinition.name;
    //   msg = msg + " ServerName : " + name;
    for (let i = 0; i < this.starlib1.tagsDefinition.length; i++) {
      let tagsDefinition = this.starlib1.tagsDefinition[i];
      let name = tagsDefinition.CODETEXT_LANG;
      var rec = this.starlib1.myServerConfigs.find((x: any) => x.name === name && x.status == "connected");
      console.log("myServerConfigs:rec:",rec , "name:",name)
      if (typeof rec != "undefined") {
        msg = msg + " For ServerName : " + name;
        console.log("myServerConfigs:tagsDefinition:", this.starlib1.tagsDefinition, tagsDefinition);
        for (let j = 0; j < tagsDefinition.items.length; j++) {
          let items = tagsDefinition.items[j];
          console.log("myServerConfigs:items:", items);
          if (j == 0) {
            msg = msg + " here are their TagNames: "
          }
          let TagName = items.CODETEXT_LANG;
          if ( j > 1 )
            msg = msg + " , "
          msg = msg + TagName ;
        }
        msg = msg + " . "
      }


    }
    //  }
    console.log("msg:1:", msg)
    msg = msg + " If a user mention the server then use it. "
    msg = msg + " If a user writes local.temperature as a tag, then replace with {[Local]temperature.VAL} if you find servername Local, and TagName is temperature. "
    msg = msg + " But if user did not specify the server, use the first provided server if more than one exits. "

    console.log("msg:2:", msg)

    Question = this.buildUserPrompt(this.request);
    console.log("Question:", Question)



    this.showLog = true;
    this.hideSubmit = true;

    this.request.TagFormat = msg;
    let systemMsgs = this.buildSystemPrompt(this.request);

    console.log("systemMsgs:", systemMsgs)
    
    this.addAILog('info', '🔍', 'Detecting tags and patterns...');
    let answer = await this.callAI_API(0, Question, systemMsgs, 0);  // Get Tables and mermaid
    if (!this.isComplete) {
      this.addAILog('error', '❌', 'Incpmplete message...');
      return;
    }
    if (!this.sameApp) {
      this.addAILog('error', '❌', 'Not same app...');
      return;
    }

    if (this.paramConfig.DEBUG_FLAG) console.log("answer received post callAI_API:", answer);
    if (typeof answer == "undefined") {
      this.addAILog('error', '❌', 'No answer received...');
      return;
    }

    //1
    answer = JSON.parse(answer);
    this.answer = answer;
    console.log("structured answer :", answer);
    let expression = answer.expression;
    let explanation = answer.explanation;



    if ((typeof expression == "undefined")) {
      let userMSg = "No response  found in answer. Try again."
      var dialogStruc = {
        msg: userMSg,
        title: "Info",
        info: null,
        object: this,
        action: this.starServices.OkActions,
        callback: null
      };
      this.starServices.showConfirmation(dialogStruc);
      return;
    }
    this.addAILog('info', '🤔', explanation);



    this.answer = expression;


    return expression;


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
public multiselect_tree_arr = ["TAGS_KEY","ALARMS_KEY"];
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


