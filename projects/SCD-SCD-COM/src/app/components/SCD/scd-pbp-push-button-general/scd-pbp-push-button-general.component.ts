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
import { scdbuttonPushGeneralScdPbpPushButtonGeneral , componentConfigDef} from '@modeldir/model';


 const createFormGroup = (dataItem:any) => new FormGroup({
'BUTTON_PUSH_GENERAL_ID' : new FormControl(dataItem.BUTTON_PUSH_GENERAL_ID  , ) ,
'SHAPE_ID' : new FormControl(dataItem.SHAPE_ID  ,   Validators.required ) ,
'UPPER_LIMIT' : new FormControl(dataItem.UPPER_LIMIT  , ) ,
'BACK_COLOR' : new FormControl(dataItem.BACK_COLOR  , ) ,
'BLINK' : new FormControl(dataItem.BLINK  , ) ,
'BORDER_COLOR' : new FormControl(dataItem.BORDER_COLOR  , ) ,
'PATTERN_COLOR' : new FormControl(dataItem.PATTERN_COLOR  , ) ,
'BORDER_STYLE' : new FormControl(dataItem.BORDER_STYLE  , ) ,
'BORDER_WIDTH' : new FormControl(dataItem.BORDER_WIDTH  , ) ,
'BORDER_USES_BACK_COLOR' : new FormControl(dataItem.BORDER_USES_BACK_COLOR  , ) ,
'HIGHLIGHT_COLOR' : new FormControl(dataItem.HIGHLIGHT_COLOR  , ) ,
'BACK_STYLE' : new FormControl(dataItem.BACK_STYLE  , ) ,
'SHAPE_TYPE' : new FormControl(dataItem.SHAPE_TYPE  , ) ,
'NAVIGATION_ACTION' : new FormControl(dataItem.NAVIGATION_ACTION  , ) ,
'BUTTON_ACTION' : new FormControl(dataItem.BUTTON_ACTION  , ) ,
'LATCH_RESET_TYPE' : new FormControl(dataItem.LATCH_RESET_TYPE  , ) ,
'HOLD_TIME' : new FormControl(dataItem.HOLD_TIME  , ) ,
'NUMBER_OF_STATES' : new FormControl(dataItem.NUMBER_OF_STATES  , ) ,
'NEXT_STATE_BASED_ON' : new FormControl(dataItem.NEXT_STATE_BASED_ON  , ) ,
'BUTTON_VALUE' : new FormControl(dataItem.BUTTON_VALUE  , ) ,
'USE_VARIABLE_LOWER_UPPER_LIMIT' : new FormControl(dataItem.USE_VARIABLE_LOWER_UPPER_LIMIT  , ) ,
'USE_VARIABLE_RAMP_VALUE' : new FormControl(dataItem.USE_VARIABLE_RAMP_VALUE  , ) ,
'RAMP_UP_DOWN' : new FormControl(dataItem.RAMP_UP_DOWN  , ) ,
'LOWER_LIMIT' : new FormControl(dataItem.LOWER_LIMIT  , ) ,
'RAMP_VALUE' : new FormControl(dataItem.RAMP_VALUE  , ) ,
'HORIZONTAL_MARGIN' : new FormControl(dataItem.HORIZONTAL_MARGIN  , ) ,
'VERTICAL_MARGIN' : new FormControl(dataItem.VERTICAL_MARGIN  , ) ,
'AUDIO' : new FormControl(dataItem.AUDIO  , ) 
});

declare function getParamConfig():any;
@Component({
  selector: 'app-scd-pbp-push-button-general',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './scd-pbp-push-button-general.component.html',
  styleUrls: ['./scd-pbp-push-button-general.component.scss'],
  standalone: false
})


export class ScdButtonPushGeneralScdPbpPushButtonGeneralFormComponent {
  public title =  this.starServices.getNLS([],"SCD_PBP_PUSH_BUTTON_GENERAL.scdbuttonPushGeneralScdPbpPushButtonGeneral.component_title","Push Button General");
  public compTitleMsg =  "SCD_PBP_PUSH_BUTTON_GENERAL.scdbuttonPushGeneralScdPbpPushButtonGeneral";
  public routineName = "ScdButtonPushGeneralScdPbpPushButtonGeneralForm";
  private insertCMD = "INSERT_SCD_BUTTON_PUSH_GENERAL";
  private updateCMD = "UPDATE_SCD_BUTTON_PUSH_GENERAL";
  private deleteCMD =   "DELETE_SCD_BUTTON_PUSH_GENERAL";
  private getCMD = "GET_SCD_BUTTON_PUSH_GENERAL_QUERY";

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
  public primarKeyReadOnlyArr = {isBUTTON_PUSH_GENERAL_IDreadOnly : false , isSHAPE_IDreadOnly : false};  
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
  public compSelector = 'app-scd-pbp-push-button-general';
  public PK_AUTO = 'BUTTON_PUSH_GENERAL_ID';
  public customerFacing = false;
  public FormStepsArr = [] ;
public labelBUTTON_PUSH_GENERAL_IDTop=false;
public labelBUTTON_PUSH_GENERAL_IDVisible=true;
public labelSHAPE_IDTop=false;
public labelSHAPE_IDVisible=true;
public labelUPPER_LIMITTop=false;
public labelUPPER_LIMITVisible=true;
public labelBACK_COLORTop=false;
public labelBACK_COLORVisible=true;
public labelBLINKTop=false;
public labelBLINKVisible=true;
public labelBORDER_COLORTop=false;
public labelBORDER_COLORVisible=true;
public labelPATTERN_COLORTop=false;
public labelPATTERN_COLORVisible=true;
public labelBORDER_STYLETop=false;
public labelBORDER_STYLEVisible=true;
public labelBORDER_WIDTHTop=false;
public labelBORDER_WIDTHVisible=true;
public labelBORDER_USES_BACK_COLORTop=false;
public labelBORDER_USES_BACK_COLORVisible=true;
public labelHIGHLIGHT_COLORTop=false;
public labelHIGHLIGHT_COLORVisible=true;
public labelBACK_STYLETop=false;
public labelBACK_STYLEVisible=true;
public labelSHAPE_TYPETop=false;
public labelSHAPE_TYPEVisible=true;
public labelNAVIGATION_ACTIONTop=false;
public labelNAVIGATION_ACTIONVisible=true;
public labelBUTTON_ACTIONTop=false;
public labelBUTTON_ACTIONVisible=true;
public labelLATCH_RESET_TYPETop=false;
public labelLATCH_RESET_TYPEVisible=true;
public labelHOLD_TIMETop=false;
public labelHOLD_TIMEVisible=true;
public labelNUMBER_OF_STATESTop=false;
public labelNUMBER_OF_STATESVisible=true;
public labelNEXT_STATE_BASED_ONTop=false;
public labelNEXT_STATE_BASED_ONVisible=true;
public labelBUTTON_VALUETop=false;
public labelBUTTON_VALUEVisible=true;
public labelUSE_VARIABLE_LOWER_UPPER_LIMITTop=false;
public labelUSE_VARIABLE_LOWER_UPPER_LIMITVisible=true;
public labelUSE_VARIABLE_RAMP_VALUETop=false;
public labelUSE_VARIABLE_RAMP_VALUEVisible=true;
public labelRAMP_UP_DOWNTop=false;
public labelRAMP_UP_DOWNVisible=true;
public labelLOWER_LIMITTop=false;
public labelLOWER_LIMITVisible=true;
public labelRAMP_VALUETop=false;
public labelRAMP_VALUEVisible=true;
public labelHORIZONTAL_MARGINTop=false;
public labelHORIZONTAL_MARGINVisible=true;
public labelVERTICAL_MARGINTop=false;
public labelVERTICAL_MARGINVisible=true;
public labelAUDIOTop=false;
public labelAUDIOVisible=true;

public visibleBUTTON_PUSH_GENERAL_ID = false;
public visibleSHAPE_ID = false;
public visibleUPPER_LIMIT = true;
public visibleBACK_COLOR = true;
public visibleBLINK = true;
public visibleBORDER_COLOR = true;
public visiblePATTERN_COLOR = true;
public visibleBORDER_STYLE = true;
public visibleBORDER_WIDTH = true;
public visibleBORDER_USES_BACK_COLOR = false;
public visibleHIGHLIGHT_COLOR = false;
public visibleBACK_STYLE = true;
public visibleSHAPE_TYPE = true;
public visibleNAVIGATION_ACTION = false;
public visibleBUTTON_ACTION = false;
public visibleLATCH_RESET_TYPE = false;
public visibleHOLD_TIME = false;
public visibleNUMBER_OF_STATES = false;
public visibleNEXT_STATE_BASED_ON = false;
public visibleBUTTON_VALUE = false;
public visibleUSE_VARIABLE_LOWER_UPPER_LIMIT = false;
public visibleUSE_VARIABLE_RAMP_VALUE = false;
public visibleRAMP_UP_DOWN = false;
public visibleLOWER_LIMIT = false;
public visibleRAMP_VALUE = false;
public visibleHORIZONTAL_MARGIN = false;
public visibleVERTICAL_MARGIN = false;
public visibleAUDIO = false;

public disableBUTTON_PUSH_GENERAL_ID = false;
public disableSHAPE_ID = false;
public disableUPPER_LIMIT = false;
public disableBACK_COLOR = false;
public disableBLINK = false;
public disableBORDER_COLOR = false;
public disablePATTERN_COLOR = false;
public disableBORDER_STYLE = false;
public disableBORDER_WIDTH = false;
public disableBORDER_USES_BACK_COLOR = false;
public disableHIGHLIGHT_COLOR = false;
public disableBACK_STYLE = false;
public disableSHAPE_TYPE = false;
public disableNAVIGATION_ACTION = false;
public disableBUTTON_ACTION = false;
public disableLATCH_RESET_TYPE = false;
public disableHOLD_TIME = false;
public disableNUMBER_OF_STATES = false;
public disableNEXT_STATE_BASED_ON = false;
public disableBUTTON_VALUE = false;
public disableUSE_VARIABLE_LOWER_UPPER_LIMIT = false;
public disableUSE_VARIABLE_RAMP_VALUE = false;
public disableRAMP_UP_DOWN = false;
public disableLOWER_LIMIT = false;
public disableRAMP_VALUE = false;
public disableHORIZONTAL_MARGIN = false;
public disableVERTICAL_MARGIN = false;
public disableAUDIO = false;


  
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

  private formInitialValues:any =   new scdbuttonPushGeneralScdPbpPushButtonGeneral();   
    @Input() public set detail_Input(form: any) {
       if (typeof form != "undefined"){
        this.isSearch = true;
        this.executeQuery(form);
        this.isChild = true;
      }
      /*
    if (this.paramConfig.DEBUG_FLAG) console.log('detail_Input ScdButtonPushGeneralScdPbpPushButtonGeneralForm form.SHAPE_ID :' + form.SHAPE_ID);
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
      this.Comp_Config.masterKeyArr =  [NewVal['BUTTON_PUSH_GENERAL_ID']];
      this.Comp_Config.masterKeyNameArr =  ["BUTTON_PUSH_GENERAL_ID"];
         
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
this.form.get('BUTTON_PUSH_GENERAL_ID').valueChanges.subscribe(val => {
});
this.form.get('UPPER_LIMIT').valueChanges.subscribe(val => {
});
this.form.get('BORDER_STYLE').valueChanges.subscribe(val => {
});
this.form.get('BORDER_WIDTH').valueChanges.subscribe(val => {
});
this.form.get('BORDER_USES_BACK_COLOR').valueChanges.subscribe(val => {
});
this.form.get('HIGHLIGHT_COLOR').valueChanges.subscribe(val => {
});
this.form.get('BACK_STYLE').valueChanges.subscribe(val => {
});
this.form.get('SHAPE_TYPE').valueChanges.subscribe(val => {
});
this.form.get('NAVIGATION_ACTION').valueChanges.subscribe(val => {
});
this.form.get('BUTTON_ACTION').valueChanges.subscribe(val => {
});
this.form.get('LATCH_RESET_TYPE').valueChanges.subscribe(val => {
});
this.form.get('HOLD_TIME').valueChanges.subscribe(val => {
});
this.form.get('NUMBER_OF_STATES').valueChanges.subscribe(val => {
});
this.form.get('NEXT_STATE_BASED_ON').valueChanges.subscribe(val => {
});
this.form.get('BUTTON_VALUE').valueChanges.subscribe(val => {
});
this.form.get('USE_VARIABLE_LOWER_UPPER_LIMIT').valueChanges.subscribe(val => {
});
this.form.get('USE_VARIABLE_RAMP_VALUE').valueChanges.subscribe(val => {
});
this.form.get('RAMP_UP_DOWN').valueChanges.subscribe(val => {
});
this.form.get('LOWER_LIMIT').valueChanges.subscribe(val => {
});
this.form.get('RAMP_VALUE').valueChanges.subscribe(val => {
});
this.form.get('HORIZONTAL_MARGIN').valueChanges.subscribe(val => {
});
this.form.get('VERTICAL_MARGIN').valueChanges.subscribe(val => {
});
this.form.get('AUDIO').valueChanges.subscribe(val => {
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
      if (this.paramConfig.DEBUG_FLAG) console.log("ScdButtonPushGeneralScdPbpPushButtonGeneralForm ComponentConfig:", {...ComponentConfig});

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



async WHEN_VALIDATE_ITEM_BUTTON_PUSH_GENERAL_ID(value) {

 this.FORM_TRIGGER_FAILURE = false ; 
 if (typeof this.form.controls['BUTTON_PUSH_GENERAL_ID'] != "undefined" ) 
      this.form.controls['BUTTON_PUSH_GENERAL_ID'].setErrors({invalid: true}); 
 // Code goes here 
 

 if ( this.FORM_TRIGGER_FAILURE == true) 
 return; 
 
 if (typeof this.form.controls['BUTTON_PUSH_GENERAL_ID'] != "undefined" ) 
     this.form.get('BUTTON_PUSH_GENERAL_ID').updateValueAndValidity();
 this.form.updateValueAndValidity(); 
 }

 async ON_CLICK_BUTTON_PUSH_GENERAL_ID(event){

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

async WHEN_VALIDATE_ITEM_UPPER_LIMIT(value) {

 this.FORM_TRIGGER_FAILURE = false ; 
 if (typeof this.form.controls['UPPER_LIMIT'] != "undefined" ) 
      this.form.controls['UPPER_LIMIT'].setErrors({invalid: true}); 
 // Code goes here 
 

 if ( this.FORM_TRIGGER_FAILURE == true) 
 return; 
 
 if (typeof this.form.controls['UPPER_LIMIT'] != "undefined" ) 
     this.form.get('UPPER_LIMIT').updateValueAndValidity();
 this.form.updateValueAndValidity(); 
 }

 async ON_CLICK_UPPER_LIMIT(event){

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

async WHEN_VALIDATE_ITEM_HIGHLIGHT_COLOR(value) {

 this.FORM_TRIGGER_FAILURE = false ; 
 if (typeof this.form.controls['HIGHLIGHT_COLOR'] != "undefined" ) 
      this.form.controls['HIGHLIGHT_COLOR'].setErrors({invalid: true}); 
 // Code goes here 
 

 if ( this.FORM_TRIGGER_FAILURE == true) 
 return; 
 
 if (typeof this.form.controls['HIGHLIGHT_COLOR'] != "undefined" ) 
     this.form.get('HIGHLIGHT_COLOR').updateValueAndValidity();
 this.form.updateValueAndValidity(); 
 }

 async ON_CLICK_HIGHLIGHT_COLOR(event){

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

async WHEN_VALIDATE_ITEM_SHAPE_TYPE(value) {

 this.FORM_TRIGGER_FAILURE = false ; 
 if (typeof this.form.controls['SHAPE_TYPE'] != "undefined" ) 
      this.form.controls['SHAPE_TYPE'].setErrors({invalid: true}); 
 // Code goes here 
 

 if ( this.FORM_TRIGGER_FAILURE == true) 
 return; 
 
 if (typeof this.form.controls['SHAPE_TYPE'] != "undefined" ) 
     this.form.get('SHAPE_TYPE').updateValueAndValidity();
 this.form.updateValueAndValidity(); 
 }

 async ON_CLICK_SHAPE_TYPE(event){

}

async WHEN_VALIDATE_ITEM_NAVIGATION_ACTION(value) {

 this.FORM_TRIGGER_FAILURE = false ; 
 if (typeof this.form.controls['NAVIGATION_ACTION'] != "undefined" ) 
      this.form.controls['NAVIGATION_ACTION'].setErrors({invalid: true}); 
 // Code goes here 
 

 if ( this.FORM_TRIGGER_FAILURE == true) 
 return; 
 
 if (typeof this.form.controls['NAVIGATION_ACTION'] != "undefined" ) 
     this.form.get('NAVIGATION_ACTION').updateValueAndValidity();
 this.form.updateValueAndValidity(); 
 }

 async ON_CLICK_NAVIGATION_ACTION(event){

}

async WHEN_VALIDATE_ITEM_BUTTON_ACTION(value) {

 this.FORM_TRIGGER_FAILURE = false ; 
 if (typeof this.form.controls['BUTTON_ACTION'] != "undefined" ) 
      this.form.controls['BUTTON_ACTION'].setErrors({invalid: true}); 
 // Code goes here 
 

 if ( this.FORM_TRIGGER_FAILURE == true) 
 return; 
 
 if (typeof this.form.controls['BUTTON_ACTION'] != "undefined" ) 
     this.form.get('BUTTON_ACTION').updateValueAndValidity();
 this.form.updateValueAndValidity(); 
 }

 async ON_CLICK_BUTTON_ACTION(event){

}

async WHEN_VALIDATE_ITEM_LATCH_RESET_TYPE(value) {

 this.FORM_TRIGGER_FAILURE = false ; 
 if (typeof this.form.controls['LATCH_RESET_TYPE'] != "undefined" ) 
      this.form.controls['LATCH_RESET_TYPE'].setErrors({invalid: true}); 
 // Code goes here 
 

 if ( this.FORM_TRIGGER_FAILURE == true) 
 return; 
 
 if (typeof this.form.controls['LATCH_RESET_TYPE'] != "undefined" ) 
     this.form.get('LATCH_RESET_TYPE').updateValueAndValidity();
 this.form.updateValueAndValidity(); 
 }

 async ON_CLICK_LATCH_RESET_TYPE(event){

}

async WHEN_VALIDATE_ITEM_HOLD_TIME(value) {

 this.FORM_TRIGGER_FAILURE = false ; 
 if (typeof this.form.controls['HOLD_TIME'] != "undefined" ) 
      this.form.controls['HOLD_TIME'].setErrors({invalid: true}); 
 // Code goes here 
 

 if ( this.FORM_TRIGGER_FAILURE == true) 
 return; 
 
 if (typeof this.form.controls['HOLD_TIME'] != "undefined" ) 
     this.form.get('HOLD_TIME').updateValueAndValidity();
 this.form.updateValueAndValidity(); 
 }

 async ON_CLICK_HOLD_TIME(event){

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

async WHEN_VALIDATE_ITEM_NEXT_STATE_BASED_ON(value) {

 this.FORM_TRIGGER_FAILURE = false ; 
 if (typeof this.form.controls['NEXT_STATE_BASED_ON'] != "undefined" ) 
      this.form.controls['NEXT_STATE_BASED_ON'].setErrors({invalid: true}); 
 // Code goes here 
 

 if ( this.FORM_TRIGGER_FAILURE == true) 
 return; 
 
 if (typeof this.form.controls['NEXT_STATE_BASED_ON'] != "undefined" ) 
     this.form.get('NEXT_STATE_BASED_ON').updateValueAndValidity();
 this.form.updateValueAndValidity(); 
 }

 async ON_CLICK_NEXT_STATE_BASED_ON(event){

}

async WHEN_VALIDATE_ITEM_BUTTON_VALUE(value) {

 this.FORM_TRIGGER_FAILURE = false ; 
 if (typeof this.form.controls['BUTTON_VALUE'] != "undefined" ) 
      this.form.controls['BUTTON_VALUE'].setErrors({invalid: true}); 
 // Code goes here 
 

 if ( this.FORM_TRIGGER_FAILURE == true) 
 return; 
 
 if (typeof this.form.controls['BUTTON_VALUE'] != "undefined" ) 
     this.form.get('BUTTON_VALUE').updateValueAndValidity();
 this.form.updateValueAndValidity(); 
 }

 async ON_CLICK_BUTTON_VALUE(event){

}

async WHEN_VALIDATE_ITEM_USE_VARIABLE_LOWER_UPPER_LIMIT(value) {

 this.FORM_TRIGGER_FAILURE = false ; 
 if (typeof this.form.controls['USE_VARIABLE_LOWER_UPPER_LIMIT'] != "undefined" ) 
      this.form.controls['USE_VARIABLE_LOWER_UPPER_LIMIT'].setErrors({invalid: true}); 
 // Code goes here 
 

 if ( this.FORM_TRIGGER_FAILURE == true) 
 return; 
 
 if (typeof this.form.controls['USE_VARIABLE_LOWER_UPPER_LIMIT'] != "undefined" ) 
     this.form.get('USE_VARIABLE_LOWER_UPPER_LIMIT').updateValueAndValidity();
 this.form.updateValueAndValidity(); 
 }

 async ON_CLICK_USE_VARIABLE_LOWER_UPPER_LIMIT(event){

}

async WHEN_VALIDATE_ITEM_USE_VARIABLE_RAMP_VALUE(value) {

 this.FORM_TRIGGER_FAILURE = false ; 
 if (typeof this.form.controls['USE_VARIABLE_RAMP_VALUE'] != "undefined" ) 
      this.form.controls['USE_VARIABLE_RAMP_VALUE'].setErrors({invalid: true}); 
 // Code goes here 
 

 if ( this.FORM_TRIGGER_FAILURE == true) 
 return; 
 
 if (typeof this.form.controls['USE_VARIABLE_RAMP_VALUE'] != "undefined" ) 
     this.form.get('USE_VARIABLE_RAMP_VALUE').updateValueAndValidity();
 this.form.updateValueAndValidity(); 
 }

 async ON_CLICK_USE_VARIABLE_RAMP_VALUE(event){

}

async WHEN_VALIDATE_ITEM_RAMP_UP_DOWN(value) {

 this.FORM_TRIGGER_FAILURE = false ; 
 if (typeof this.form.controls['RAMP_UP_DOWN'] != "undefined" ) 
      this.form.controls['RAMP_UP_DOWN'].setErrors({invalid: true}); 
 // Code goes here 
 

 if ( this.FORM_TRIGGER_FAILURE == true) 
 return; 
 
 if (typeof this.form.controls['RAMP_UP_DOWN'] != "undefined" ) 
     this.form.get('RAMP_UP_DOWN').updateValueAndValidity();
 this.form.updateValueAndValidity(); 
 }

 async ON_CLICK_RAMP_UP_DOWN(event){

}

async WHEN_VALIDATE_ITEM_LOWER_LIMIT(value) {

 this.FORM_TRIGGER_FAILURE = false ; 
 if (typeof this.form.controls['LOWER_LIMIT'] != "undefined" ) 
      this.form.controls['LOWER_LIMIT'].setErrors({invalid: true}); 
 // Code goes here 
 

 if ( this.FORM_TRIGGER_FAILURE == true) 
 return; 
 
 if (typeof this.form.controls['LOWER_LIMIT'] != "undefined" ) 
     this.form.get('LOWER_LIMIT').updateValueAndValidity();
 this.form.updateValueAndValidity(); 
 }

 async ON_CLICK_LOWER_LIMIT(event){

}

async WHEN_VALIDATE_ITEM_RAMP_VALUE(value) {

 this.FORM_TRIGGER_FAILURE = false ; 
 if (typeof this.form.controls['RAMP_VALUE'] != "undefined" ) 
      this.form.controls['RAMP_VALUE'].setErrors({invalid: true}); 
 // Code goes here 
 

 if ( this.FORM_TRIGGER_FAILURE == true) 
 return; 
 
 if (typeof this.form.controls['RAMP_VALUE'] != "undefined" ) 
     this.form.get('RAMP_VALUE').updateValueAndValidity();
 this.form.updateValueAndValidity(); 
 }

 async ON_CLICK_RAMP_VALUE(event){

}

async WHEN_VALIDATE_ITEM_HORIZONTAL_MARGIN(value) {

 this.FORM_TRIGGER_FAILURE = false ; 
 if (typeof this.form.controls['HORIZONTAL_MARGIN'] != "undefined" ) 
      this.form.controls['HORIZONTAL_MARGIN'].setErrors({invalid: true}); 
 // Code goes here 
 

 if ( this.FORM_TRIGGER_FAILURE == true) 
 return; 
 
 if (typeof this.form.controls['HORIZONTAL_MARGIN'] != "undefined" ) 
     this.form.get('HORIZONTAL_MARGIN').updateValueAndValidity();
 this.form.updateValueAndValidity(); 
 }

 async ON_CLICK_HORIZONTAL_MARGIN(event){

}

async WHEN_VALIDATE_ITEM_VERTICAL_MARGIN(value) {

 this.FORM_TRIGGER_FAILURE = false ; 
 if (typeof this.form.controls['VERTICAL_MARGIN'] != "undefined" ) 
      this.form.controls['VERTICAL_MARGIN'].setErrors({invalid: true}); 
 // Code goes here 
 

 if ( this.FORM_TRIGGER_FAILURE == true) 
 return; 
 
 if (typeof this.form.controls['VERTICAL_MARGIN'] != "undefined" ) 
     this.form.get('VERTICAL_MARGIN').updateValueAndValidity();
 this.form.updateValueAndValidity(); 
 }

 async ON_CLICK_VERTICAL_MARGIN(event){

}

async WHEN_VALIDATE_ITEM_AUDIO(value) {

 this.FORM_TRIGGER_FAILURE = false ; 
 if (typeof this.form.controls['AUDIO'] != "undefined" ) 
      this.form.controls['AUDIO'].setErrors({invalid: true}); 
 // Code goes here 
 

 if ( this.FORM_TRIGGER_FAILURE == true) 
 return; 
 
 if (typeof this.form.controls['AUDIO'] != "undefined" ) 
     this.form.get('AUDIO').updateValueAndValidity();
 this.form.updateValueAndValidity(); 
 }

 async ON_CLICK_AUDIO(event){

}
 
 async onChange_BUTTON_PUSH_GENERAL_ID(event:any) { 
 var value = event.target.value; 
 if ((value == null) || (value == '')) 	
 	return;  
    this.FORM_TRIGGER_FAILURE = false;	
 await   this.WHEN_VALIDATE_ITEM_BUTTON_PUSH_GENERAL_ID(value); if ( this.FORM_TRIGGER_FAILURE) return; 
 this.formValidationChangedOutput.emit(this.form.valid); 
  
 } 
 async onValueChange_SHAPE_ID(value) { 
  this.FORM_TRIGGER_FAILURE = false;	
 await this.WHEN_VALIDATE_ITEM_SHAPE_ID(value); if ( this.FORM_TRIGGER_FAILURE) return; 
 this.formValidationChangedOutput.emit(this.form.valid); 
  
  } 
 async onChange_UPPER_LIMIT(event:any) { 
 var value = event.target.value; 
 if ((value == null) || (value == '')) 	
 	return;  
    this.FORM_TRIGGER_FAILURE = false;	
 await   this.WHEN_VALIDATE_ITEM_UPPER_LIMIT(value); if ( this.FORM_TRIGGER_FAILURE) return; 
 this.formValidationChangedOutput.emit(this.form.valid); 
  
 } 
 async onValueChange_BACK_COLOR(value) { 
  this.FORM_TRIGGER_FAILURE = false;	
 await this.WHEN_VALIDATE_ITEM_BACK_COLOR(value); if ( this.FORM_TRIGGER_FAILURE) return; 
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
 async onValueChange_BORDER_COLOR(value) { 
  this.FORM_TRIGGER_FAILURE = false;	
 await this.WHEN_VALIDATE_ITEM_BORDER_COLOR(value); if ( this.FORM_TRIGGER_FAILURE) return; 
 this.formValidationChangedOutput.emit(this.form.valid); 
  
  } 
 async onValueChange_PATTERN_COLOR(value) { 
  this.FORM_TRIGGER_FAILURE = false;	
 await this.WHEN_VALIDATE_ITEM_PATTERN_COLOR(value); if ( this.FORM_TRIGGER_FAILURE) return; 
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
 async onChange_BORDER_USES_BACK_COLOR(event:any) { 
 var value = event.target.value; 
 if ((value == null) || (value == '')) 	
 	return;  
    this.FORM_TRIGGER_FAILURE = false;	
 await   this.WHEN_VALIDATE_ITEM_BORDER_USES_BACK_COLOR(value); if ( this.FORM_TRIGGER_FAILURE) return; 
 this.formValidationChangedOutput.emit(this.form.valid); 
  
 } 
 async onChange_HIGHLIGHT_COLOR(event:any) { 
 var value = event.target.value; 
 if ((value == null) || (value == '')) 	
 	return;  
    this.FORM_TRIGGER_FAILURE = false;	
 await   this.WHEN_VALIDATE_ITEM_HIGHLIGHT_COLOR(value); if ( this.FORM_TRIGGER_FAILURE) return; 
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
 async onChange_SHAPE_TYPE(event:any) { 
 var value = event.target.value; 
 if ((value == null) || (value == '')) 	
 	return;  
    this.FORM_TRIGGER_FAILURE = false;	
 await   this.WHEN_VALIDATE_ITEM_SHAPE_TYPE(value); if ( this.FORM_TRIGGER_FAILURE) return; 
 this.formValidationChangedOutput.emit(this.form.valid); 
  
 } 
 async onChange_NAVIGATION_ACTION(event:any) { 
 var value = event.target.value; 
 if ((value == null) || (value == '')) 	
 	return;  
    this.FORM_TRIGGER_FAILURE = false;	
 await   this.WHEN_VALIDATE_ITEM_NAVIGATION_ACTION(value); if ( this.FORM_TRIGGER_FAILURE) return; 
 this.formValidationChangedOutput.emit(this.form.valid); 
  
 } 
 async onChange_BUTTON_ACTION(event:any) { 
 var value = event.target.value; 
 if ((value == null) || (value == '')) 	
 	return;  
    this.FORM_TRIGGER_FAILURE = false;	
 await   this.WHEN_VALIDATE_ITEM_BUTTON_ACTION(value); if ( this.FORM_TRIGGER_FAILURE) return; 
 this.formValidationChangedOutput.emit(this.form.valid); 
  
 } 
 async onChange_LATCH_RESET_TYPE(event:any) { 
 var value = event.target.value; 
 if ((value == null) || (value == '')) 	
 	return;  
    this.FORM_TRIGGER_FAILURE = false;	
 await   this.WHEN_VALIDATE_ITEM_LATCH_RESET_TYPE(value); if ( this.FORM_TRIGGER_FAILURE) return; 
 this.formValidationChangedOutput.emit(this.form.valid); 
  
 } 
 async onChange_HOLD_TIME(event:any) { 
 var value = event.target.value; 
 if ((value == null) || (value == '')) 	
 	return;  
    this.FORM_TRIGGER_FAILURE = false;	
 await   this.WHEN_VALIDATE_ITEM_HOLD_TIME(value); if ( this.FORM_TRIGGER_FAILURE) return; 
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
 async onChange_NEXT_STATE_BASED_ON(event:any) { 
 var value = event.target.value; 
 if ((value == null) || (value == '')) 	
 	return;  
    this.FORM_TRIGGER_FAILURE = false;	
 await   this.WHEN_VALIDATE_ITEM_NEXT_STATE_BASED_ON(value); if ( this.FORM_TRIGGER_FAILURE) return; 
 this.formValidationChangedOutput.emit(this.form.valid); 
  
 } 
 async onChange_BUTTON_VALUE(event:any) { 
 var value = event.target.value; 
 if ((value == null) || (value == '')) 	
 	return;  
    this.FORM_TRIGGER_FAILURE = false;	
 await   this.WHEN_VALIDATE_ITEM_BUTTON_VALUE(value); if ( this.FORM_TRIGGER_FAILURE) return; 
 this.formValidationChangedOutput.emit(this.form.valid); 
  
 } 
 async onChange_USE_VARIABLE_LOWER_UPPER_LIMIT(event:any) { 
 var value = event.target.value; 
 if ((value == null) || (value == '')) 	
 	return;  
    this.FORM_TRIGGER_FAILURE = false;	
 await   this.WHEN_VALIDATE_ITEM_USE_VARIABLE_LOWER_UPPER_LIMIT(value); if ( this.FORM_TRIGGER_FAILURE) return; 
 this.formValidationChangedOutput.emit(this.form.valid); 
  
 } 
 async onChange_USE_VARIABLE_RAMP_VALUE(event:any) { 
 var value = event.target.value; 
 if ((value == null) || (value == '')) 	
 	return;  
    this.FORM_TRIGGER_FAILURE = false;	
 await   this.WHEN_VALIDATE_ITEM_USE_VARIABLE_RAMP_VALUE(value); if ( this.FORM_TRIGGER_FAILURE) return; 
 this.formValidationChangedOutput.emit(this.form.valid); 
  
 } 
 async onChange_RAMP_UP_DOWN(event:any) { 
 var value = event.target.value; 
 if ((value == null) || (value == '')) 	
 	return;  
    this.FORM_TRIGGER_FAILURE = false;	
 await   this.WHEN_VALIDATE_ITEM_RAMP_UP_DOWN(value); if ( this.FORM_TRIGGER_FAILURE) return; 
 this.formValidationChangedOutput.emit(this.form.valid); 
  
 } 
 async onChange_LOWER_LIMIT(event:any) { 
 var value = event.target.value; 
 if ((value == null) || (value == '')) 	
 	return;  
    this.FORM_TRIGGER_FAILURE = false;	
 await   this.WHEN_VALIDATE_ITEM_LOWER_LIMIT(value); if ( this.FORM_TRIGGER_FAILURE) return; 
 this.formValidationChangedOutput.emit(this.form.valid); 
  
 } 
 async onChange_RAMP_VALUE(event:any) { 
 var value = event.target.value; 
 if ((value == null) || (value == '')) 	
 	return;  
    this.FORM_TRIGGER_FAILURE = false;	
 await   this.WHEN_VALIDATE_ITEM_RAMP_VALUE(value); if ( this.FORM_TRIGGER_FAILURE) return; 
 this.formValidationChangedOutput.emit(this.form.valid); 
  
 } 
 async onChange_HORIZONTAL_MARGIN(event:any) { 
 var value = event.target.value; 
 if ((value == null) || (value == '')) 	
 	return;  
    this.FORM_TRIGGER_FAILURE = false;	
 await   this.WHEN_VALIDATE_ITEM_HORIZONTAL_MARGIN(value); if ( this.FORM_TRIGGER_FAILURE) return; 
 this.formValidationChangedOutput.emit(this.form.valid); 
  
 } 
 async onChange_VERTICAL_MARGIN(event:any) { 
 var value = event.target.value; 
 if ((value == null) || (value == '')) 	
 	return;  
    this.FORM_TRIGGER_FAILURE = false;	
 await   this.WHEN_VALIDATE_ITEM_VERTICAL_MARGIN(value); if ( this.FORM_TRIGGER_FAILURE) return; 
 this.formValidationChangedOutput.emit(this.form.valid); 
  
 } 
 async onChange_AUDIO(event:any) { 
 var value = event.target.value; 
 if ((value == null) || (value == '')) 	
 	return;  
    this.FORM_TRIGGER_FAILURE = false;	
 await   this.WHEN_VALIDATE_ITEM_AUDIO(value); if ( this.FORM_TRIGGER_FAILURE) return; 
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


