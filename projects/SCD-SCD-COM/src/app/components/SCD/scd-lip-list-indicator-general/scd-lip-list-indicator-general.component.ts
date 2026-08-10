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
import { scdlistIndicatorGeneralScdLipListIndicatorGeneral , componentConfigDef} from '@modeldir/model';


 const createFormGroup = (dataItem:any) => new FormGroup({
'LIST_INDICATOR_GENERAL_ID' : new FormControl(dataItem.LIST_INDICATOR_GENERAL_ID  , ) ,
'SHAPE_ID' : new FormControl(dataItem.SHAPE_ID  ,   Validators.required ) ,
'BORDER_STYLE' : new FormControl(dataItem.BORDER_STYLE  , ) ,
'BORDER_WIDTH' : new FormControl(dataItem.BORDER_WIDTH  , ) ,
'BACK_STYLE' : new FormControl(dataItem.BACK_STYLE  , ) ,
'PATTERN_STYLE' : new FormControl(dataItem.PATTERN_STYLE  , ) ,
'BORDER_USES_BACK_COLOR' : new FormControl(dataItem.BORDER_USES_BACK_COLOR  , ) ,
'BACK_COLOR' : new FormControl(dataItem.BACK_COLOR  , ) ,
'BORDER_COLOR' : new FormControl(dataItem.BORDER_COLOR  , ) ,
'PATTERN_COLOR' : new FormControl(dataItem.PATTERN_COLOR  , ) ,
'SELECTION_FORE_COLOR' : new FormControl(dataItem.SELECTION_FORE_COLOR  , ) ,
'SELECTION_BACK_COLOR' : new FormControl(dataItem.SELECTION_BACK_COLOR  , ) ,
'BLINK' : new FormControl(dataItem.BLINK  , ) ,
'FONT_NAME' : new FormControl(dataItem.FONT_NAME  , ) ,
'FONT_SIZE' : new FormControl(dataItem.FONT_SIZE  , ) ,
'FONT_BOLD' : new FormControl(dataItem.FONT_BOLD  , ) ,
'FONT_ITALIC' : new FormControl(dataItem.FONT_ITALIC  , ) ,
'FONT_UNDERLINE' : new FormControl(dataItem.FONT_UNDERLINE  , ) ,
'CAPTION_TRUNCATE' : new FormControl(dataItem.CAPTION_TRUNCATE  , ) ,
'NUMBER_OF_STATES' : new FormControl(dataItem.NUMBER_OF_STATES  , ) ,
'TRIGGER_TYPE' : new FormControl(dataItem.TRIGGER_TYPE  , ) ,
'WRITE_ON_ENTER' : new FormControl(dataItem.WRITE_ON_ENTER  , ) ,
'KEY_NAVIGATION' : new FormControl(dataItem.KEY_NAVIGATION  , ) ,
'WRAP_AROUND' : new FormControl(dataItem.WRAP_AROUND  , ) ,
'TAB_INDEX' : new FormControl(dataItem.TAB_INDEX  , ) 
});

declare function getParamConfig():any;
@Component({
  selector: 'app-scd-lip-list-indicator-general',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './scd-lip-list-indicator-general.component.html',
  styleUrls: ['./scd-lip-list-indicator-general.component.scss'],
  standalone: false
})


export class ScdListIndicatorGeneralScdLipListIndicatorGeneralFormComponent {
  public title =  this.starServices.getNLS([],"SCD_LIP_LIST_INDICATOR_GENERAL.scdlistIndicatorGeneralScdLipListIndicatorGeneral.component_title","List Indicator General");
  public compTitleMsg =  "SCD_LIP_LIST_INDICATOR_GENERAL.scdlistIndicatorGeneralScdLipListIndicatorGeneral";
  public routineName = "ScdListIndicatorGeneralScdLipListIndicatorGeneralForm";
  private insertCMD = "INSERT_SCD_LIST_INDICATOR_GENERAL";
  private updateCMD = "UPDATE_SCD_LIST_INDICATOR_GENERAL";
  private deleteCMD =   "DELETE_SCD_LIST_INDICATOR_GENERAL";
  private getCMD = "GET_SCD_LIST_INDICATOR_GENERAL_QUERY";

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
  public  isSHAPE_IDEnable : boolean = true;

  public FORM_TRIGGER_FAILURE:any;
  public NOTFOUND:any;
  public disableEmitSave = false;
  public disableEmitReadCompleted = false;
  public children = ["any"];

  public action = "";
  private Body:any =[];
  public isNew!: boolean;
  public primarKeyReadOnlyArr = {isLIST_INDICATOR_GENERAL_IDreadOnly : false , isSHAPE_IDreadOnly : false};  
  public paramConfig;
  private masterKeyArr = [];
  private masterKeyNameArr = [];
  public  masterKey="";
  public masterKeyName ="SHAPE_ID";
  public WhereClause = "";
  public OrderByClause = "";
  
  public formattedWhere:any = null;  
  public  submitted =  false;
  public masterParams:any;
  public alignment: TabAlignment = 'start';
  public isPhonePortrait = false;
  public compSelector = 'app-scd-lip-list-indicator-general';
  public PK_AUTO = 'LIST_INDICATOR_GENERAL_ID';
  public customerFacing = false;
  public FormStepsArr = [] ;
public labelLIST_INDICATOR_GENERAL_IDTop=false;
public labelLIST_INDICATOR_GENERAL_IDVisible=true;
public labelSHAPE_IDTop=false;
public labelSHAPE_IDVisible=true;
public labelBORDER_STYLETop=false;
public labelBORDER_STYLEVisible=true;
public labelBORDER_WIDTHTop=false;
public labelBORDER_WIDTHVisible=true;
public labelBACK_STYLETop=false;
public labelBACK_STYLEVisible=true;
public labelPATTERN_STYLETop=false;
public labelPATTERN_STYLEVisible=true;
public labelBORDER_USES_BACK_COLORTop=false;
public labelBORDER_USES_BACK_COLORVisible=true;
public labelBACK_COLORTop=false;
public labelBACK_COLORVisible=true;
public labelBORDER_COLORTop=false;
public labelBORDER_COLORVisible=true;
public labelPATTERN_COLORTop=false;
public labelPATTERN_COLORVisible=true;
public labelSELECTION_FORE_COLORTop=false;
public labelSELECTION_FORE_COLORVisible=true;
public labelSELECTION_BACK_COLORTop=false;
public labelSELECTION_BACK_COLORVisible=true;
public labelBLINKTop=false;
public labelBLINKVisible=true;
public labelFONT_NAMETop=false;
public labelFONT_NAMEVisible=true;
public labelFONT_SIZETop=false;
public labelFONT_SIZEVisible=true;
public labelFONT_BOLDTop=false;
public labelFONT_BOLDVisible=true;
public labelFONT_ITALICTop=false;
public labelFONT_ITALICVisible=true;
public labelFONT_UNDERLINETop=false;
public labelFONT_UNDERLINEVisible=true;
public labelCAPTION_TRUNCATETop=false;
public labelCAPTION_TRUNCATEVisible=true;
public labelNUMBER_OF_STATESTop=false;
public labelNUMBER_OF_STATESVisible=true;
public labelTRIGGER_TYPETop=false;
public labelTRIGGER_TYPEVisible=true;
public labelWRITE_ON_ENTERTop=false;
public labelWRITE_ON_ENTERVisible=true;
public labelKEY_NAVIGATIONTop=false;
public labelKEY_NAVIGATIONVisible=true;
public labelWRAP_AROUNDTop=false;
public labelWRAP_AROUNDVisible=true;
public labelTAB_INDEXTop=false;
public labelTAB_INDEXVisible=true;

public visibleLIST_INDICATOR_GENERAL_ID = false;
public visibleSHAPE_ID = false;
public visibleBORDER_STYLE = true;
public visibleBORDER_WIDTH = true;
public visibleBACK_STYLE = true;
public visiblePATTERN_STYLE = false;
public visibleBORDER_USES_BACK_COLOR = false;
public visibleBACK_COLOR = false;
public visibleBORDER_COLOR = false;
public visiblePATTERN_COLOR = false;
public visibleSELECTION_FORE_COLOR = false;
public visibleSELECTION_BACK_COLOR = false;
public visibleBLINK = false;
public visibleFONT_NAME = false;
public visibleFONT_SIZE = false;
public visibleFONT_BOLD = false;
public visibleFONT_ITALIC = false;
public visibleFONT_UNDERLINE = false;
public visibleCAPTION_TRUNCATE = false;
public visibleNUMBER_OF_STATES = false;
public visibleTRIGGER_TYPE = false;
public visibleWRITE_ON_ENTER = false;
public visibleKEY_NAVIGATION = false;
public visibleWRAP_AROUND = false;
public visibleTAB_INDEX = false;

public disableLIST_INDICATOR_GENERAL_ID = false;
public disableSHAPE_ID = false;
public disableBORDER_STYLE = false;
public disableBORDER_WIDTH = false;
public disableBACK_STYLE = false;
public disablePATTERN_STYLE = false;
public disableBORDER_USES_BACK_COLOR = false;
public disableBACK_COLOR = false;
public disableBORDER_COLOR = false;
public disablePATTERN_COLOR = false;
public disableSELECTION_FORE_COLOR = false;
public disableSELECTION_BACK_COLOR = false;
public disableBLINK = false;
public disableFONT_NAME = false;
public disableFONT_SIZE = false;
public disableFONT_BOLD = false;
public disableFONT_ITALIC = false;
public disableFONT_UNDERLINE = false;
public disableCAPTION_TRUNCATE = false;
public disableNUMBER_OF_STATES = false;
public disableTRIGGER_TYPE = false;
public disableWRITE_ON_ENTER = false;
public disableKEY_NAVIGATION = false;
public disableWRAP_AROUND = false;
public disableTAB_INDEX = false;


  
  //@Input()  
  public showToolBar = true;
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
  }
  
  public ngOnDestroy(): void {
    // Unsubscribe the event once not needed.
    if (typeof this.componentConfigChangeEvent !== "undefined") this.componentConfigChangeEvent.unsubscribe();
 }

  callStarNotify(componentConfig:any) {
    componentConfig.eventFrom = this.compSelector;
    this.starNotify.sendEvent<componentConfigDef>('componentConfigDef', componentConfig);
  }

  private formInitialValues:any =   new scdlistIndicatorGeneralScdLipListIndicatorGeneral();   
    @Input() public set detail_Input(form: any) {
       if (typeof form != "undefined"){
        this.isSearch = true;
        this.executeQuery(form);
        this.isChild = true;
      }
      /*
    if (this.paramConfig.DEBUG_FLAG) console.log('detail_Input ScdListIndicatorGeneralScdLipListIndicatorGeneralForm form.SHAPE_ID :' + form.SHAPE_ID);
    if ( (form.SHAPE_ID != "") &&   (typeof form.SHAPE_ID != "undefined"))
    {
      this.masterKey = form.SHAPE_ID;
      
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
    if ( (typeof form != "undefined") &&   (typeof form.SHAPE_ID != "undefined") &&   (form.SHAPE_ID != ""))
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
      this.Comp_Config.masterKeyArr =  [NewVal['LIST_INDICATOR_GENERAL_ID']];
      this.Comp_Config.masterKeyNameArr =  ["LIST_INDICATOR_GENERAL_ID"];
         
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
this.lookupArrDef =[	{"statment":"SELECT SHAPE_ID CODE, NAME CODETEXT_LANG  FROM SCD_SHAPE  order by CODETEXT_LANG ",
			"lkpArrName":"lkpArrSHAPE_ID"}];
 if (this.lookupArrDef.length > 0)
   this.starServices.fetchLookups(this, this.lookupArrDef);
}

public lkpArrSHAPE_ID = [];

public lkpArrGetSHAPE_ID(CODE: any): any {
var rec = this.lkpArrSHAPE_ID.find((x:any) => x.CODE === CODE);
return rec;
}

onChanges(): void {
this.form.get('LIST_INDICATOR_GENERAL_ID').valueChanges.subscribe(val => {
});
this.form.get('BORDER_STYLE').valueChanges.subscribe(val => {
});
this.form.get('BORDER_WIDTH').valueChanges.subscribe(val => {
});
this.form.get('BACK_STYLE').valueChanges.subscribe(val => {
});
this.form.get('PATTERN_STYLE').valueChanges.subscribe(val => {
});
this.form.get('BORDER_USES_BACK_COLOR').valueChanges.subscribe(val => {
});
this.form.get('BACK_COLOR').valueChanges.subscribe(val => {
});
this.form.get('BORDER_COLOR').valueChanges.subscribe(val => {
});
this.form.get('PATTERN_COLOR').valueChanges.subscribe(val => {
});
this.form.get('SELECTION_FORE_COLOR').valueChanges.subscribe(val => {
});
this.form.get('SELECTION_BACK_COLOR').valueChanges.subscribe(val => {
});
this.form.get('BLINK').valueChanges.subscribe(val => {
});
this.form.get('FONT_NAME').valueChanges.subscribe(val => {
});
this.form.get('FONT_SIZE').valueChanges.subscribe(val => {
});
this.form.get('FONT_BOLD').valueChanges.subscribe(val => {
});
this.form.get('FONT_ITALIC').valueChanges.subscribe(val => {
});
this.form.get('FONT_UNDERLINE').valueChanges.subscribe(val => {
});
this.form.get('CAPTION_TRUNCATE').valueChanges.subscribe(val => {
});
this.form.get('NUMBER_OF_STATES').valueChanges.subscribe(val => {
});
this.form.get('TRIGGER_TYPE').valueChanges.subscribe(val => {
});
this.form.get('WRITE_ON_ENTER').valueChanges.subscribe(val => {
});
this.form.get('KEY_NAVIGATION').valueChanges.subscribe(val => {
});
this.form.get('WRAP_AROUND').valueChanges.subscribe(val => {
});
this.form.get('TAB_INDEX').valueChanges.subscribe(val => {
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
      if (this.paramConfig.DEBUG_FLAG) console.log("ScdListIndicatorGeneralScdLipListIndicatorGeneralForm ComponentConfig:", {...ComponentConfig});

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



async WHEN_VALIDATE_ITEM_LIST_INDICATOR_GENERAL_ID(value) {

 this.FORM_TRIGGER_FAILURE = false ; 
 if (typeof this.form.controls['LIST_INDICATOR_GENERAL_ID'] != "undefined" ) 
      this.form.controls['LIST_INDICATOR_GENERAL_ID'].setErrors({invalid: true}); 
 // Code goes here 
 

 if ( this.FORM_TRIGGER_FAILURE == true) 
 return; 
 
 if (typeof this.form.controls['LIST_INDICATOR_GENERAL_ID'] != "undefined" ) 
     this.form.get('LIST_INDICATOR_GENERAL_ID').updateValueAndValidity();
 this.form.updateValueAndValidity(); 
 }

 async ON_CLICK_LIST_INDICATOR_GENERAL_ID(event){

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

async WHEN_VALIDATE_ITEM_BORDER_STYLE(value) {

 this.FORM_TRIGGER_FAILURE = false ; 
 if (typeof this.form.controls['BORDER_STYLE'] != "undefined" ) 
      this.form.controls['BORDER_STYLE'].setErrors({invalid: true}); 
 // Code goes here 
 

 if ( this.FORM_TRIGGER_FAILURE == true) 
 return; 
 
 if (typeof this.form.controls['BORDER_STYLE'] != "undefined" ) 
     this.form.get('BORDER_STYLE').updateValueAndValidity();
 this.form.updateValueAndValidity(); 
 }

 async ON_CLICK_BORDER_STYLE(event){

}

async WHEN_VALIDATE_ITEM_BORDER_WIDTH(value) {

 this.FORM_TRIGGER_FAILURE = false ; 
 if (typeof this.form.controls['BORDER_WIDTH'] != "undefined" ) 
      this.form.controls['BORDER_WIDTH'].setErrors({invalid: true}); 
 // Code goes here 
 

 if ( this.FORM_TRIGGER_FAILURE == true) 
 return; 
 
 if (typeof this.form.controls['BORDER_WIDTH'] != "undefined" ) 
     this.form.get('BORDER_WIDTH').updateValueAndValidity();
 this.form.updateValueAndValidity(); 
 }

 async ON_CLICK_BORDER_WIDTH(event){

}

async WHEN_VALIDATE_ITEM_BACK_STYLE(value) {

 this.FORM_TRIGGER_FAILURE = false ; 
 if (typeof this.form.controls['BACK_STYLE'] != "undefined" ) 
      this.form.controls['BACK_STYLE'].setErrors({invalid: true}); 
 // Code goes here 
 

 if ( this.FORM_TRIGGER_FAILURE == true) 
 return; 
 
 if (typeof this.form.controls['BACK_STYLE'] != "undefined" ) 
     this.form.get('BACK_STYLE').updateValueAndValidity();
 this.form.updateValueAndValidity(); 
 }

 async ON_CLICK_BACK_STYLE(event){

}

async WHEN_VALIDATE_ITEM_PATTERN_STYLE(value) {

 this.FORM_TRIGGER_FAILURE = false ; 
 if (typeof this.form.controls['PATTERN_STYLE'] != "undefined" ) 
      this.form.controls['PATTERN_STYLE'].setErrors({invalid: true}); 
 // Code goes here 
 

 if ( this.FORM_TRIGGER_FAILURE == true) 
 return; 
 
 if (typeof this.form.controls['PATTERN_STYLE'] != "undefined" ) 
     this.form.get('PATTERN_STYLE').updateValueAndValidity();
 this.form.updateValueAndValidity(); 
 }

 async ON_CLICK_PATTERN_STYLE(event){

}

async WHEN_VALIDATE_ITEM_BORDER_USES_BACK_COLOR(value) {

 this.FORM_TRIGGER_FAILURE = false ; 
 if (typeof this.form.controls['BORDER_USES_BACK_COLOR'] != "undefined" ) 
      this.form.controls['BORDER_USES_BACK_COLOR'].setErrors({invalid: true}); 
 // Code goes here 
 

 if ( this.FORM_TRIGGER_FAILURE == true) 
 return; 
 
 if (typeof this.form.controls['BORDER_USES_BACK_COLOR'] != "undefined" ) 
     this.form.get('BORDER_USES_BACK_COLOR').updateValueAndValidity();
 this.form.updateValueAndValidity(); 
 }

 async ON_CLICK_BORDER_USES_BACK_COLOR(event){

}

async WHEN_VALIDATE_ITEM_BACK_COLOR(value) {

 this.FORM_TRIGGER_FAILURE = false ; 
 if (typeof this.form.controls['BACK_COLOR'] != "undefined" ) 
      this.form.controls['BACK_COLOR'].setErrors({invalid: true}); 
 // Code goes here 
 

 if ( this.FORM_TRIGGER_FAILURE == true) 
 return; 
 
 if (typeof this.form.controls['BACK_COLOR'] != "undefined" ) 
     this.form.get('BACK_COLOR').updateValueAndValidity();
 this.form.updateValueAndValidity(); 
 }

 async ON_CLICK_BACK_COLOR(event){

}

async WHEN_VALIDATE_ITEM_BORDER_COLOR(value) {

 this.FORM_TRIGGER_FAILURE = false ; 
 if (typeof this.form.controls['BORDER_COLOR'] != "undefined" ) 
      this.form.controls['BORDER_COLOR'].setErrors({invalid: true}); 
 // Code goes here 
 

 if ( this.FORM_TRIGGER_FAILURE == true) 
 return; 
 
 if (typeof this.form.controls['BORDER_COLOR'] != "undefined" ) 
     this.form.get('BORDER_COLOR').updateValueAndValidity();
 this.form.updateValueAndValidity(); 
 }

 async ON_CLICK_BORDER_COLOR(event){

}

async WHEN_VALIDATE_ITEM_PATTERN_COLOR(value) {

 this.FORM_TRIGGER_FAILURE = false ; 
 if (typeof this.form.controls['PATTERN_COLOR'] != "undefined" ) 
      this.form.controls['PATTERN_COLOR'].setErrors({invalid: true}); 
 // Code goes here 
 

 if ( this.FORM_TRIGGER_FAILURE == true) 
 return; 
 
 if (typeof this.form.controls['PATTERN_COLOR'] != "undefined" ) 
     this.form.get('PATTERN_COLOR').updateValueAndValidity();
 this.form.updateValueAndValidity(); 
 }

 async ON_CLICK_PATTERN_COLOR(event){

}

async WHEN_VALIDATE_ITEM_SELECTION_FORE_COLOR(value) {

 this.FORM_TRIGGER_FAILURE = false ; 
 if (typeof this.form.controls['SELECTION_FORE_COLOR'] != "undefined" ) 
      this.form.controls['SELECTION_FORE_COLOR'].setErrors({invalid: true}); 
 // Code goes here 
 

 if ( this.FORM_TRIGGER_FAILURE == true) 
 return; 
 
 if (typeof this.form.controls['SELECTION_FORE_COLOR'] != "undefined" ) 
     this.form.get('SELECTION_FORE_COLOR').updateValueAndValidity();
 this.form.updateValueAndValidity(); 
 }

 async ON_CLICK_SELECTION_FORE_COLOR(event){

}

async WHEN_VALIDATE_ITEM_SELECTION_BACK_COLOR(value) {

 this.FORM_TRIGGER_FAILURE = false ; 
 if (typeof this.form.controls['SELECTION_BACK_COLOR'] != "undefined" ) 
      this.form.controls['SELECTION_BACK_COLOR'].setErrors({invalid: true}); 
 // Code goes here 
 

 if ( this.FORM_TRIGGER_FAILURE == true) 
 return; 
 
 if (typeof this.form.controls['SELECTION_BACK_COLOR'] != "undefined" ) 
     this.form.get('SELECTION_BACK_COLOR').updateValueAndValidity();
 this.form.updateValueAndValidity(); 
 }

 async ON_CLICK_SELECTION_BACK_COLOR(event){

}

async WHEN_VALIDATE_ITEM_BLINK(value) {

 this.FORM_TRIGGER_FAILURE = false ; 
 if (typeof this.form.controls['BLINK'] != "undefined" ) 
      this.form.controls['BLINK'].setErrors({invalid: true}); 
 // Code goes here 
 

 if ( this.FORM_TRIGGER_FAILURE == true) 
 return; 
 
 if (typeof this.form.controls['BLINK'] != "undefined" ) 
     this.form.get('BLINK').updateValueAndValidity();
 this.form.updateValueAndValidity(); 
 }

 async ON_CLICK_BLINK(event){

}

async WHEN_VALIDATE_ITEM_FONT_NAME(value) {

 this.FORM_TRIGGER_FAILURE = false ; 
 if (typeof this.form.controls['FONT_NAME'] != "undefined" ) 
      this.form.controls['FONT_NAME'].setErrors({invalid: true}); 
 // Code goes here 
 

 if ( this.FORM_TRIGGER_FAILURE == true) 
 return; 
 
 if (typeof this.form.controls['FONT_NAME'] != "undefined" ) 
     this.form.get('FONT_NAME').updateValueAndValidity();
 this.form.updateValueAndValidity(); 
 }

 async ON_CLICK_FONT_NAME(event){

}

async WHEN_VALIDATE_ITEM_FONT_SIZE(value) {

 this.FORM_TRIGGER_FAILURE = false ; 
 if (typeof this.form.controls['FONT_SIZE'] != "undefined" ) 
      this.form.controls['FONT_SIZE'].setErrors({invalid: true}); 
 // Code goes here 
 

 if ( this.FORM_TRIGGER_FAILURE == true) 
 return; 
 
 if (typeof this.form.controls['FONT_SIZE'] != "undefined" ) 
     this.form.get('FONT_SIZE').updateValueAndValidity();
 this.form.updateValueAndValidity(); 
 }

 async ON_CLICK_FONT_SIZE(event){

}

async WHEN_VALIDATE_ITEM_FONT_BOLD(value) {

 this.FORM_TRIGGER_FAILURE = false ; 
 if (typeof this.form.controls['FONT_BOLD'] != "undefined" ) 
      this.form.controls['FONT_BOLD'].setErrors({invalid: true}); 
 // Code goes here 
 

 if ( this.FORM_TRIGGER_FAILURE == true) 
 return; 
 
 if (typeof this.form.controls['FONT_BOLD'] != "undefined" ) 
     this.form.get('FONT_BOLD').updateValueAndValidity();
 this.form.updateValueAndValidity(); 
 }

 async ON_CLICK_FONT_BOLD(event){

}

async WHEN_VALIDATE_ITEM_FONT_ITALIC(value) {

 this.FORM_TRIGGER_FAILURE = false ; 
 if (typeof this.form.controls['FONT_ITALIC'] != "undefined" ) 
      this.form.controls['FONT_ITALIC'].setErrors({invalid: true}); 
 // Code goes here 
 

 if ( this.FORM_TRIGGER_FAILURE == true) 
 return; 
 
 if (typeof this.form.controls['FONT_ITALIC'] != "undefined" ) 
     this.form.get('FONT_ITALIC').updateValueAndValidity();
 this.form.updateValueAndValidity(); 
 }

 async ON_CLICK_FONT_ITALIC(event){

}

async WHEN_VALIDATE_ITEM_FONT_UNDERLINE(value) {

 this.FORM_TRIGGER_FAILURE = false ; 
 if (typeof this.form.controls['FONT_UNDERLINE'] != "undefined" ) 
      this.form.controls['FONT_UNDERLINE'].setErrors({invalid: true}); 
 // Code goes here 
 

 if ( this.FORM_TRIGGER_FAILURE == true) 
 return; 
 
 if (typeof this.form.controls['FONT_UNDERLINE'] != "undefined" ) 
     this.form.get('FONT_UNDERLINE').updateValueAndValidity();
 this.form.updateValueAndValidity(); 
 }

 async ON_CLICK_FONT_UNDERLINE(event){

}

async WHEN_VALIDATE_ITEM_CAPTION_TRUNCATE(value) {

 this.FORM_TRIGGER_FAILURE = false ; 
 if (typeof this.form.controls['CAPTION_TRUNCATE'] != "undefined" ) 
      this.form.controls['CAPTION_TRUNCATE'].setErrors({invalid: true}); 
 // Code goes here 
 

 if ( this.FORM_TRIGGER_FAILURE == true) 
 return; 
 
 if (typeof this.form.controls['CAPTION_TRUNCATE'] != "undefined" ) 
     this.form.get('CAPTION_TRUNCATE').updateValueAndValidity();
 this.form.updateValueAndValidity(); 
 }

 async ON_CLICK_CAPTION_TRUNCATE(event){

}

async WHEN_VALIDATE_ITEM_NUMBER_OF_STATES(value) {

 this.FORM_TRIGGER_FAILURE = false ; 
 if (typeof this.form.controls['NUMBER_OF_STATES'] != "undefined" ) 
      this.form.controls['NUMBER_OF_STATES'].setErrors({invalid: true}); 
 // Code goes here 
 

 if ( this.FORM_TRIGGER_FAILURE == true) 
 return; 
 
 if (typeof this.form.controls['NUMBER_OF_STATES'] != "undefined" ) 
     this.form.get('NUMBER_OF_STATES').updateValueAndValidity();
 this.form.updateValueAndValidity(); 
 }

 async ON_CLICK_NUMBER_OF_STATES(event){

}

async WHEN_VALIDATE_ITEM_TRIGGER_TYPE(value) {

 this.FORM_TRIGGER_FAILURE = false ; 
 if (typeof this.form.controls['TRIGGER_TYPE'] != "undefined" ) 
      this.form.controls['TRIGGER_TYPE'].setErrors({invalid: true}); 
 // Code goes here 
 

 if ( this.FORM_TRIGGER_FAILURE == true) 
 return; 
 
 if (typeof this.form.controls['TRIGGER_TYPE'] != "undefined" ) 
     this.form.get('TRIGGER_TYPE').updateValueAndValidity();
 this.form.updateValueAndValidity(); 
 }

 async ON_CLICK_TRIGGER_TYPE(event){

}

async WHEN_VALIDATE_ITEM_WRITE_ON_ENTER(value) {

 this.FORM_TRIGGER_FAILURE = false ; 
 if (typeof this.form.controls['WRITE_ON_ENTER'] != "undefined" ) 
      this.form.controls['WRITE_ON_ENTER'].setErrors({invalid: true}); 
 // Code goes here 
 

 if ( this.FORM_TRIGGER_FAILURE == true) 
 return; 
 
 if (typeof this.form.controls['WRITE_ON_ENTER'] != "undefined" ) 
     this.form.get('WRITE_ON_ENTER').updateValueAndValidity();
 this.form.updateValueAndValidity(); 
 }

 async ON_CLICK_WRITE_ON_ENTER(event){

}

async WHEN_VALIDATE_ITEM_KEY_NAVIGATION(value) {

 this.FORM_TRIGGER_FAILURE = false ; 
 if (typeof this.form.controls['KEY_NAVIGATION'] != "undefined" ) 
      this.form.controls['KEY_NAVIGATION'].setErrors({invalid: true}); 
 // Code goes here 
 

 if ( this.FORM_TRIGGER_FAILURE == true) 
 return; 
 
 if (typeof this.form.controls['KEY_NAVIGATION'] != "undefined" ) 
     this.form.get('KEY_NAVIGATION').updateValueAndValidity();
 this.form.updateValueAndValidity(); 
 }

 async ON_CLICK_KEY_NAVIGATION(event){

}

async WHEN_VALIDATE_ITEM_WRAP_AROUND(value) {

 this.FORM_TRIGGER_FAILURE = false ; 
 if (typeof this.form.controls['WRAP_AROUND'] != "undefined" ) 
      this.form.controls['WRAP_AROUND'].setErrors({invalid: true}); 
 // Code goes here 
 

 if ( this.FORM_TRIGGER_FAILURE == true) 
 return; 
 
 if (typeof this.form.controls['WRAP_AROUND'] != "undefined" ) 
     this.form.get('WRAP_AROUND').updateValueAndValidity();
 this.form.updateValueAndValidity(); 
 }

 async ON_CLICK_WRAP_AROUND(event){

}

async WHEN_VALIDATE_ITEM_TAB_INDEX(value) {

 this.FORM_TRIGGER_FAILURE = false ; 
 if (typeof this.form.controls['TAB_INDEX'] != "undefined" ) 
      this.form.controls['TAB_INDEX'].setErrors({invalid: true}); 
 // Code goes here 
 

 if ( this.FORM_TRIGGER_FAILURE == true) 
 return; 
 
 if (typeof this.form.controls['TAB_INDEX'] != "undefined" ) 
     this.form.get('TAB_INDEX').updateValueAndValidity();
 this.form.updateValueAndValidity(); 
 }

 async ON_CLICK_TAB_INDEX(event){

}
 
 async onChange_LIST_INDICATOR_GENERAL_ID(event:any) { 
 var value = event.target.value; 
 if ((value == null) || (value == '')) 	
 	return;  
    this.FORM_TRIGGER_FAILURE = false;	
 await   this.WHEN_VALIDATE_ITEM_LIST_INDICATOR_GENERAL_ID(value); if ( this.FORM_TRIGGER_FAILURE) return; 
 this.formValidationChangedOutput.emit(this.form.valid); 
  
 } 
 async onValueChange_SHAPE_ID(value) { 
  this.FORM_TRIGGER_FAILURE = false;	
 await this.WHEN_VALIDATE_ITEM_SHAPE_ID(value); if ( this.FORM_TRIGGER_FAILURE) return; 
 this.formValidationChangedOutput.emit(this.form.valid); 
  
  } 
 async onChange_BORDER_STYLE(event:any) { 
 var value = event.target.value; 
 if ((value == null) || (value == '')) 	
 	return;  
    this.FORM_TRIGGER_FAILURE = false;	
 await   this.WHEN_VALIDATE_ITEM_BORDER_STYLE(value); if ( this.FORM_TRIGGER_FAILURE) return; 
 this.formValidationChangedOutput.emit(this.form.valid); 
  
 } 
 async onChange_BORDER_WIDTH(event:any) { 
 var value = event.target.value; 
 if ((value == null) || (value == '')) 	
 	return;  
    this.FORM_TRIGGER_FAILURE = false;	
 await   this.WHEN_VALIDATE_ITEM_BORDER_WIDTH(value); if ( this.FORM_TRIGGER_FAILURE) return; 
 this.formValidationChangedOutput.emit(this.form.valid); 
  
 } 
 async onChange_BACK_STYLE(event:any) { 
 var value = event.target.value; 
 if ((value == null) || (value == '')) 	
 	return;  
    this.FORM_TRIGGER_FAILURE = false;	
 await   this.WHEN_VALIDATE_ITEM_BACK_STYLE(value); if ( this.FORM_TRIGGER_FAILURE) return; 
 this.formValidationChangedOutput.emit(this.form.valid); 
  
 } 
 async onChange_PATTERN_STYLE(event:any) { 
 var value = event.target.value; 
 if ((value == null) || (value == '')) 	
 	return;  
    this.FORM_TRIGGER_FAILURE = false;	
 await   this.WHEN_VALIDATE_ITEM_PATTERN_STYLE(value); if ( this.FORM_TRIGGER_FAILURE) return; 
 this.formValidationChangedOutput.emit(this.form.valid); 
  
 } 
 async onChange_BORDER_USES_BACK_COLOR(event:any) { 
 var value = event.target.value; 
 if ((value == null) || (value == '')) 	
 	return;  
    this.FORM_TRIGGER_FAILURE = false;	
 await   this.WHEN_VALIDATE_ITEM_BORDER_USES_BACK_COLOR(value); if ( this.FORM_TRIGGER_FAILURE) return; 
 this.formValidationChangedOutput.emit(this.form.valid); 
  
 } 
 async onChange_BACK_COLOR(event:any) { 
 var value = event.target.value; 
 if ((value == null) || (value == '')) 	
 	return;  
    this.FORM_TRIGGER_FAILURE = false;	
 await   this.WHEN_VALIDATE_ITEM_BACK_COLOR(value); if ( this.FORM_TRIGGER_FAILURE) return; 
 this.formValidationChangedOutput.emit(this.form.valid); 
  
 } 
 async onChange_BORDER_COLOR(event:any) { 
 var value = event.target.value; 
 if ((value == null) || (value == '')) 	
 	return;  
    this.FORM_TRIGGER_FAILURE = false;	
 await   this.WHEN_VALIDATE_ITEM_BORDER_COLOR(value); if ( this.FORM_TRIGGER_FAILURE) return; 
 this.formValidationChangedOutput.emit(this.form.valid); 
  
 } 
 async onChange_PATTERN_COLOR(event:any) { 
 var value = event.target.value; 
 if ((value == null) || (value == '')) 	
 	return;  
    this.FORM_TRIGGER_FAILURE = false;	
 await   this.WHEN_VALIDATE_ITEM_PATTERN_COLOR(value); if ( this.FORM_TRIGGER_FAILURE) return; 
 this.formValidationChangedOutput.emit(this.form.valid); 
  
 } 
 async onChange_SELECTION_FORE_COLOR(event:any) { 
 var value = event.target.value; 
 if ((value == null) || (value == '')) 	
 	return;  
    this.FORM_TRIGGER_FAILURE = false;	
 await   this.WHEN_VALIDATE_ITEM_SELECTION_FORE_COLOR(value); if ( this.FORM_TRIGGER_FAILURE) return; 
 this.formValidationChangedOutput.emit(this.form.valid); 
  
 } 
 async onChange_SELECTION_BACK_COLOR(event:any) { 
 var value = event.target.value; 
 if ((value == null) || (value == '')) 	
 	return;  
    this.FORM_TRIGGER_FAILURE = false;	
 await   this.WHEN_VALIDATE_ITEM_SELECTION_BACK_COLOR(value); if ( this.FORM_TRIGGER_FAILURE) return; 
 this.formValidationChangedOutput.emit(this.form.valid); 
  
 } 
 async onChange_BLINK(event:any) { 
 var value = event.target.value; 
 if ((value == null) || (value == '')) 	
 	return;  
    this.FORM_TRIGGER_FAILURE = false;	
 await   this.WHEN_VALIDATE_ITEM_BLINK(value); if ( this.FORM_TRIGGER_FAILURE) return; 
 this.formValidationChangedOutput.emit(this.form.valid); 
  
 } 
 async onChange_FONT_NAME(event:any) { 
 var value = event.target.value; 
 if ((value == null) || (value == '')) 	
 	return;  
    this.FORM_TRIGGER_FAILURE = false;	
 await   this.WHEN_VALIDATE_ITEM_FONT_NAME(value); if ( this.FORM_TRIGGER_FAILURE) return; 
 this.formValidationChangedOutput.emit(this.form.valid); 
  
 } 
 async onChange_FONT_SIZE(event:any) { 
 var value = event.target.value; 
 if ((value == null) || (value == '')) 	
 	return;  
    this.FORM_TRIGGER_FAILURE = false;	
 await   this.WHEN_VALIDATE_ITEM_FONT_SIZE(value); if ( this.FORM_TRIGGER_FAILURE) return; 
 this.formValidationChangedOutput.emit(this.form.valid); 
  
 } 
 async onChange_FONT_BOLD(event:any) { 
 var value = event.target.value; 
 if ((value == null) || (value == '')) 	
 	return;  
    this.FORM_TRIGGER_FAILURE = false;	
 await   this.WHEN_VALIDATE_ITEM_FONT_BOLD(value); if ( this.FORM_TRIGGER_FAILURE) return; 
 this.formValidationChangedOutput.emit(this.form.valid); 
  
 } 
 async onChange_FONT_ITALIC(event:any) { 
 var value = event.target.value; 
 if ((value == null) || (value == '')) 	
 	return;  
    this.FORM_TRIGGER_FAILURE = false;	
 await   this.WHEN_VALIDATE_ITEM_FONT_ITALIC(value); if ( this.FORM_TRIGGER_FAILURE) return; 
 this.formValidationChangedOutput.emit(this.form.valid); 
  
 } 
 async onChange_FONT_UNDERLINE(event:any) { 
 var value = event.target.value; 
 if ((value == null) || (value == '')) 	
 	return;  
    this.FORM_TRIGGER_FAILURE = false;	
 await   this.WHEN_VALIDATE_ITEM_FONT_UNDERLINE(value); if ( this.FORM_TRIGGER_FAILURE) return; 
 this.formValidationChangedOutput.emit(this.form.valid); 
  
 } 
 async onChange_CAPTION_TRUNCATE(event:any) { 
 var value = event.target.value; 
 if ((value == null) || (value == '')) 	
 	return;  
    this.FORM_TRIGGER_FAILURE = false;	
 await   this.WHEN_VALIDATE_ITEM_CAPTION_TRUNCATE(value); if ( this.FORM_TRIGGER_FAILURE) return; 
 this.formValidationChangedOutput.emit(this.form.valid); 
  
 } 
 async onChange_NUMBER_OF_STATES(event:any) { 
 var value = event.target.value; 
 if ((value == null) || (value == '')) 	
 	return;  
    this.FORM_TRIGGER_FAILURE = false;	
 await   this.WHEN_VALIDATE_ITEM_NUMBER_OF_STATES(value); if ( this.FORM_TRIGGER_FAILURE) return; 
 this.formValidationChangedOutput.emit(this.form.valid); 
  
 } 
 async onChange_TRIGGER_TYPE(event:any) { 
 var value = event.target.value; 
 if ((value == null) || (value == '')) 	
 	return;  
    this.FORM_TRIGGER_FAILURE = false;	
 await   this.WHEN_VALIDATE_ITEM_TRIGGER_TYPE(value); if ( this.FORM_TRIGGER_FAILURE) return; 
 this.formValidationChangedOutput.emit(this.form.valid); 
  
 } 
 async onChange_WRITE_ON_ENTER(event:any) { 
 var value = event.target.value; 
 if ((value == null) || (value == '')) 	
 	return;  
    this.FORM_TRIGGER_FAILURE = false;	
 await   this.WHEN_VALIDATE_ITEM_WRITE_ON_ENTER(value); if ( this.FORM_TRIGGER_FAILURE) return; 
 this.formValidationChangedOutput.emit(this.form.valid); 
  
 } 
 async onChange_KEY_NAVIGATION(event:any) { 
 var value = event.target.value; 
 if ((value == null) || (value == '')) 	
 	return;  
    this.FORM_TRIGGER_FAILURE = false;	
 await   this.WHEN_VALIDATE_ITEM_KEY_NAVIGATION(value); if ( this.FORM_TRIGGER_FAILURE) return; 
 this.formValidationChangedOutput.emit(this.form.valid); 
  
 } 
 async onChange_WRAP_AROUND(event:any) { 
 var value = event.target.value; 
 if ((value == null) || (value == '')) 	
 	return;  
    this.FORM_TRIGGER_FAILURE = false;	
 await   this.WHEN_VALIDATE_ITEM_WRAP_AROUND(value); if ( this.FORM_TRIGGER_FAILURE) return; 
 this.formValidationChangedOutput.emit(this.form.valid); 
  
 } 
 async onChange_TAB_INDEX(event:any) { 
 var value = event.target.value; 
 if ((value == null) || (value == '')) 	
 	return;  
    this.FORM_TRIGGER_FAILURE = false;	
 await   this.WHEN_VALIDATE_ITEM_TAB_INDEX(value); if ( this.FORM_TRIGGER_FAILURE) return; 
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


