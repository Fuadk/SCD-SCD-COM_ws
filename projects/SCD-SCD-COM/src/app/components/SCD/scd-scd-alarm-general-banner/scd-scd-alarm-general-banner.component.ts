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
import { scdalarmGeneralBannerScdScdAlarmGeneralBanner , componentConfigDef} from '@modeldir/model';


 const createFormGroup = (dataItem:any) => new FormGroup({
'APP_ID' : new FormControl(dataItem.APP_ID  ,   Validators.required ) ,
'GENERAL_ID' : new FormControl(dataItem.GENERAL_ID  , ) ,
'DISPLAY_ID' : new FormControl(dataItem.DISPLAY_ID  ,   Validators.required ) ,
'SHAPE_ID' : new FormControl(dataItem.SHAPE_ID  ,   Validators.required ) ,
'BACKGROUND_COLOR' : new FormControl(dataItem.BACKGROUND_COLOR  , ) ,
'SELECTED_ITEM_TEXT_COLOR' : new FormControl(dataItem.SELECTED_ITEM_TEXT_COLOR  , ) ,
'SELECTED_ITEM_BACKGROUND_COLOR' : new FormControl(dataItem.SELECTED_ITEM_BACKGROUND_COLOR  , ) ,
'FONT_AL' : new FormControl(dataItem.FONT_AL  , ) ,
'NUMBER_OF_ROWS' : new FormControl(dataItem.NUMBER_OF_ROWS  , ) ,
'ICON_STYLE' : new FormControl(dataItem.ICON_STYLE  , ) ,
'ROW_DOUBLE_CLICK_ACTION' : new FormControl(dataItem.ROW_DOUBLE_CLICK_ACTION  , ) ,
'FONT_SB' : new FormControl(dataItem.FONT_SB  , ) ,
'BUTTON_SIZE' : new FormControl(dataItem.BUTTON_SIZE  , ) ,
'SAMPLE' : new FormControl(dataItem.SAMPLE  , ) ,
'SHOW_TOOLTIPS' : new FormControl(dataItem.SHOW_TOOLTIPS  , ) ,
'HIDE_BAR' : new FormControl(dataItem.HIDE_BAR  , ) ,
'COMMAND' : new FormControl(dataItem.COMMAND  , ) ,
'COMMAND_BUTTON' : new FormControl(dataItem.COMMAND_BUTTON  , ) ,
'DISPLAY_ERROR_OPERATOR_ACTIONS_DIALOG' : new FormControl(dataItem.DISPLAY_ERROR_OPERATOR_ACTIONS_DIALOG  , ) ,
'MAINTAIN_SELECTION_FOCUS_LOST' : new FormControl(dataItem.MAINTAIN_SELECTION_FOCUS_LOST  , ) 
});

declare function getParamConfig():any;
@Component({
  selector: 'app-scd-scd-alarm-general-banner',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './scd-scd-alarm-general-banner.component.html',
  styleUrls: ['./scd-scd-alarm-general-banner.component.scss'],
  standalone: false
})


export class ScdAlarmGeneralBannerScdScdAlarmGeneralBannerFormdivsComponent {
  public title =  this.starServices.getNLS([],"SCD_SCD_ALARM_GENERAL_BANNER.scdalarmGeneralBannerScdScdAlarmGeneralBanner.component_title","SCD ALARM GENERAL BANNER");
  public compTitleMsg =  "SCD_SCD_ALARM_GENERAL_BANNER.scdalarmGeneralBannerScdScdAlarmGeneralBanner";
  public routineName = "ScdAlarmGeneralBannerScdScdAlarmGeneralBannerFormdivs";
  private insertCMD = "INSERT_SCD_ALARM_GENERAL_BANNER";
  private updateCMD = "UPDATE_SCD_ALARM_GENERAL_BANNER";
  private deleteCMD =   "DELETE_SCD_ALARM_GENERAL_BANNER";
  private getCMD = "GET_SCD_ALARM_GENERAL_BANNER_QUERY";

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
  public primarKeyReadOnlyArr = {isAPP_IDreadOnly : false , isGENERAL_IDreadOnly : false , isDISPLAY_IDreadOnly : false , isSHAPE_IDreadOnly : false};  
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
  public compSelector = 'app-scd-scd-alarm-general-banner';
  public PK_AUTO = 'GENERAL_ID';
  public customerFacing = false;
  public FormStepsArr = [{"CODE":"","CODETEXT_LANG":"","visible":true},{"CODE":"1","CODETEXT_LANG":"Alarm List","visible":true},{"CODE":"2","CODETEXT_LANG":"Status Bar","visible":true},{"CODE":"3","CODETEXT_LANG":"Alarm and Event Summary Coomand","visible":true}] ;
public labelAPP_IDTop=true;
public labelAPP_IDVisible=true;
public labelGENERAL_IDTop=true;
public labelGENERAL_IDVisible=true;
public labelDISPLAY_IDTop=true;
public labelDISPLAY_IDVisible=true;
public labelSHAPE_IDTop=true;
public labelSHAPE_IDVisible=true;
public labelBACKGROUND_COLORTop=true;
public labelBACKGROUND_COLORVisible=true;
public labelSELECTED_ITEM_TEXT_COLORTop=true;
public labelSELECTED_ITEM_TEXT_COLORVisible=true;
public labelSELECTED_ITEM_BACKGROUND_COLORTop=true;
public labelSELECTED_ITEM_BACKGROUND_COLORVisible=true;
public labelFONT_ALTop=true;
public labelFONT_ALVisible=true;
public labelNUMBER_OF_ROWSTop=true;
public labelNUMBER_OF_ROWSVisible=true;
public labelICON_STYLETop=true;
public labelICON_STYLEVisible=true;
public labelROW_DOUBLE_CLICK_ACTIONTop=true;
public labelROW_DOUBLE_CLICK_ACTIONVisible=true;
public labelFONT_SBTop=true;
public labelFONT_SBVisible=true;
public labelBUTTON_SIZETop=true;
public labelBUTTON_SIZEVisible=true;
public labelSAMPLETop=true;
public labelSAMPLEVisible=true;
public labelSHOW_TOOLTIPSTop=true;
public labelSHOW_TOOLTIPSVisible=true;
public labelHIDE_BARTop=true;
public labelHIDE_BARVisible=true;
public labelCOMMANDTop=true;
public labelCOMMANDVisible=true;
public labelCOMMAND_BUTTONTop=true;
public labelCOMMAND_BUTTONVisible=true;
public labelDISPLAY_ERROR_OPERATOR_ACTIONS_DIALOGTop=true;
public labelDISPLAY_ERROR_OPERATOR_ACTIONS_DIALOGVisible=true;
public labelMAINTAIN_SELECTION_FOCUS_LOSTTop=true;
public labelMAINTAIN_SELECTION_FOCUS_LOSTVisible=true;

public visibleAPP_ID = true;
public visibleGENERAL_ID = true;
public visibleDISPLAY_ID = false;
public visibleSHAPE_ID = false;
public visibleBACKGROUND_COLOR = true;
public visibleSELECTED_ITEM_TEXT_COLOR = true;
public visibleSELECTED_ITEM_BACKGROUND_COLOR = true;
public visibleFONT_AL = true;
public visibleNUMBER_OF_ROWS = true;
public visibleICON_STYLE = true;
public visibleROW_DOUBLE_CLICK_ACTION = true;
public visibleFONT_SB = true;
public visibleBUTTON_SIZE = true;
public visibleSAMPLE = true;
public visibleSHOW_TOOLTIPS = true;
public visibleHIDE_BAR = true;
public visibleCOMMAND = true;
public visibleCOMMAND_BUTTON = true;
public visibleDISPLAY_ERROR_OPERATOR_ACTIONS_DIALOG = true;
public visibleMAINTAIN_SELECTION_FOCUS_LOST = true;

public disableAPP_ID = false;
public disableGENERAL_ID = false;
public disableDISPLAY_ID = false;
public disableSHAPE_ID = false;
public disableBACKGROUND_COLOR = false;
public disableSELECTED_ITEM_TEXT_COLOR = false;
public disableSELECTED_ITEM_BACKGROUND_COLOR = false;
public disableFONT_AL = false;
public disableNUMBER_OF_ROWS = false;
public disableICON_STYLE = false;
public disableROW_DOUBLE_CLICK_ACTION = false;
public disableFONT_SB = false;
public disableBUTTON_SIZE = false;
public disableSAMPLE = false;
public disableSHOW_TOOLTIPS = false;
public disableHIDE_BAR = false;
public disableCOMMAND = false;
public disableCOMMAND_BUTTON = false;
public disableDISPLAY_ERROR_OPERATOR_ACTIONS_DIALOG = false;
public disableMAINTAIN_SELECTION_FOCUS_LOST = false;


  
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

  private formInitialValues:any =   new scdalarmGeneralBannerScdScdAlarmGeneralBanner();   
    @Input() public set detail_Input(form: any) {
       if (typeof form != "undefined"){
        this.isSearch = true;
        this.executeQuery(form);
        this.isChild = true;
      }
      /*
    if (this.paramConfig.DEBUG_FLAG) console.log('detail_Input ScdAlarmGeneralBannerScdScdAlarmGeneralBannerFormdivs form.APP_ID :' + form.APP_ID);
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
      this.FormStepsArr.forEach(item => {
      (item as any).visible = true;
    });
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
      this.Comp_Config.masterKeyArr =  [NewVal['GENERAL_ID']];
      this.Comp_Config.masterKeyNameArr =  ["GENERAL_ID"];
         
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
			"lkpArrName":"lkpArrAPP_ID"},
	{"statment":"SELECT CODE, CODETEXT_LANG, CODEVALUE_LANG FROM SOM_TABS_CODES WHERE CODENAME ='DISPLAY_ID' and LANGUAGE_NAME = '" + this.userLang + "' order by CODETEXT_LANG",
			"lkpArrName":"lkpArrDISPLAY_ID"},
	{"statment":"SELECT CODE, CODETEXT_LANG, CODEVALUE_LANG FROM SOM_TABS_CODES WHERE CODENAME ='SHAPE_ID' and LANGUAGE_NAME = '" + this.userLang + "' order by CODETEXT_LANG",
			"lkpArrName":"lkpArrSHAPE_ID"},
	{"statment":"SELECT CODE, CODETEXT_LANG , PARTCODE FROM SOM_TABS_CODES WHERE CODENAME = \"ICON_STYLE\"  and LANGUAGE_NAME = '" + this.userLang + "' order by CODETEXT_LANG ",
			"lkpArrName":"lkpArrICON_STYLE"},
	{"statment":"SELECT CODE, CODETEXT_LANG , PARTCODE FROM SOM_TABS_CODES WHERE CODENAME = \"ROW_DOUBLE_CLICK_ACTION\"  and LANGUAGE_NAME = '" + this.userLang + "' order by CODETEXT_LANG ",
			"lkpArrName":"lkpArrROW_DOUBLE_CLICK_ACTION"},
	{"statment":"SELECT CODE, CODETEXT_LANG , PARTCODE FROM SOM_TABS_CODES WHERE CODENAME = \"FONT_NAME\"  and LANGUAGE_NAME = '" + this.userLang + "' order by CODETEXT_LANG ",
			"lkpArrName":"lkpArrFONT_SB"},
	{"statment":"SELECT CODE, CODETEXT_LANG , PARTCODE FROM SOM_TABS_CODES WHERE CODENAME = \"BUTTON_SIZE\"  and LANGUAGE_NAME = '" + this.userLang + "' order by CODETEXT_LANG ",
			"lkpArrName":"lkpArrBUTTON_SIZE"}];
 if (this.lookupArrDef.length > 0)
   this.starServices.fetchLookups(this, this.lookupArrDef);
}

public lkpArrAPP_ID = [];

public lkpArrDISPLAY_ID = [];

public lkpArrSHAPE_ID = [];

public lkpArrICON_STYLE = [];

public lkpArrROW_DOUBLE_CLICK_ACTION = [];

public lkpArrFONT_SB = [];

public lkpArrBUTTON_SIZE = [];

public lkpArrGetAPP_ID(CODE: any): any {
var rec = this.lkpArrAPP_ID.find((x:any) => x.CODE === CODE);
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

public lkpArrGetICON_STYLE(CODE: any): any {
var rec = this.lkpArrICON_STYLE.find((x:any) => x.CODE === CODE);
return rec;
}

public lkpArrGetROW_DOUBLE_CLICK_ACTION(CODE: any): any {
var rec = this.lkpArrROW_DOUBLE_CLICK_ACTION.find((x:any) => x.CODE === CODE);
return rec;
}

public lkpArrGetFONT_SB(CODE: any): any {
var rec = this.lkpArrFONT_SB.find((x:any) => x.CODE === CODE);
return rec;
}

public lkpArrGetBUTTON_SIZE(CODE: any): any {
var rec = this.lkpArrBUTTON_SIZE.find((x:any) => x.CODE === CODE);
return rec;
}

onChanges(): void {
this.form.get('GENERAL_ID').valueChanges.subscribe(val => {
});
this.form.get('NUMBER_OF_ROWS').valueChanges.subscribe(val => {
});
this.form.get('SAMPLE').valueChanges.subscribe(val => {
});
this.form.get('COMMAND').valueChanges.subscribe(val => {
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
      if (this.paramConfig.DEBUG_FLAG) console.log("ScdAlarmGeneralBannerScdScdAlarmGeneralBannerFormdivs ComponentConfig:", {...ComponentConfig});

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

async WHEN_VALIDATE_ITEM_GENERAL_ID(value) {

 this.FORM_TRIGGER_FAILURE = false ; 
 if (typeof this.form.controls['GENERAL_ID'] != "undefined" ) 
      this.form.controls['GENERAL_ID'].setErrors({invalid: true}); 
 // Code goes here 
 

 if ( this.FORM_TRIGGER_FAILURE == true) 
 return; 
 
 if (typeof this.form.controls['GENERAL_ID'] != "undefined" ) 
     this.form.get('GENERAL_ID').updateValueAndValidity();
 this.form.updateValueAndValidity(); 
 }

 async ON_CLICK_GENERAL_ID(event){

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

async WHEN_VALIDATE_ITEM_BACKGROUND_COLOR(value) {

 this.FORM_TRIGGER_FAILURE = false ; 
 if (typeof this.form.controls['BACKGROUND_COLOR'] != "undefined" ) 
      this.form.controls['BACKGROUND_COLOR'].setErrors({invalid: true}); 
 // Code goes here 
 

 if ( this.FORM_TRIGGER_FAILURE == true) 
 return; 
 
 if (typeof this.form.controls['BACKGROUND_COLOR'] != "undefined" ) 
     this.form.get('BACKGROUND_COLOR').updateValueAndValidity();
 this.form.updateValueAndValidity(); 
 }

 async ON_CLICK_BACKGROUND_COLOR(event){

}

async WHEN_VALIDATE_ITEM_SELECTED_ITEM_TEXT_COLOR(value) {

 this.FORM_TRIGGER_FAILURE = false ; 
 if (typeof this.form.controls['SELECTED_ITEM_TEXT_COLOR'] != "undefined" ) 
      this.form.controls['SELECTED_ITEM_TEXT_COLOR'].setErrors({invalid: true}); 
 // Code goes here 
 

 if ( this.FORM_TRIGGER_FAILURE == true) 
 return; 
 
 if (typeof this.form.controls['SELECTED_ITEM_TEXT_COLOR'] != "undefined" ) 
     this.form.get('SELECTED_ITEM_TEXT_COLOR').updateValueAndValidity();
 this.form.updateValueAndValidity(); 
 }

 async ON_CLICK_SELECTED_ITEM_TEXT_COLOR(event){

}

async WHEN_VALIDATE_ITEM_SELECTED_ITEM_BACKGROUND_COLOR(value) {

 this.FORM_TRIGGER_FAILURE = false ; 
 if (typeof this.form.controls['SELECTED_ITEM_BACKGROUND_COLOR'] != "undefined" ) 
      this.form.controls['SELECTED_ITEM_BACKGROUND_COLOR'].setErrors({invalid: true}); 
 // Code goes here 
 

 if ( this.FORM_TRIGGER_FAILURE == true) 
 return; 
 
 if (typeof this.form.controls['SELECTED_ITEM_BACKGROUND_COLOR'] != "undefined" ) 
     this.form.get('SELECTED_ITEM_BACKGROUND_COLOR').updateValueAndValidity();
 this.form.updateValueAndValidity(); 
 }

 async ON_CLICK_SELECTED_ITEM_BACKGROUND_COLOR(event){

}

async WHEN_VALIDATE_ITEM_FONT_AL(value) {

 this.FORM_TRIGGER_FAILURE = false ; 
 if (typeof this.form.controls['FONT_AL'] != "undefined" ) 
      this.form.controls['FONT_AL'].setErrors({invalid: true}); 
 // Code goes here 
 

 if ( this.FORM_TRIGGER_FAILURE == true) 
 return; 
 
 if (typeof this.form.controls['FONT_AL'] != "undefined" ) 
     this.form.get('FONT_AL').updateValueAndValidity();
 this.form.updateValueAndValidity(); 
 }

 async ON_CLICK_FONT_AL(event){

}

async WHEN_VALIDATE_ITEM_NUMBER_OF_ROWS(value) {

 this.FORM_TRIGGER_FAILURE = false ; 
 if (typeof this.form.controls['NUMBER_OF_ROWS'] != "undefined" ) 
      this.form.controls['NUMBER_OF_ROWS'].setErrors({invalid: true}); 
 // Code goes here 
 

 if ( this.FORM_TRIGGER_FAILURE == true) 
 return; 
 
 if (typeof this.form.controls['NUMBER_OF_ROWS'] != "undefined" ) 
     this.form.get('NUMBER_OF_ROWS').updateValueAndValidity();
 this.form.updateValueAndValidity(); 
 }

 async ON_CLICK_NUMBER_OF_ROWS(event){

}

async WHEN_VALIDATE_ITEM_ICON_STYLE(value) {

 this.FORM_TRIGGER_FAILURE = false ; 
 if (typeof this.form.controls['ICON_STYLE'] != "undefined" ) 
      this.form.controls['ICON_STYLE'].setErrors({invalid: true}); 
 // Code goes here 
 

 if ( this.FORM_TRIGGER_FAILURE == true) 
 return; 
 
 if (typeof this.form.controls['ICON_STYLE'] != "undefined" ) 
     this.form.get('ICON_STYLE').updateValueAndValidity();
 this.form.updateValueAndValidity(); 
 }

 async ON_CLICK_ICON_STYLE(event){

}

async WHEN_VALIDATE_ITEM_ROW_DOUBLE_CLICK_ACTION(value) {

 this.FORM_TRIGGER_FAILURE = false ; 
 if (typeof this.form.controls['ROW_DOUBLE_CLICK_ACTION'] != "undefined" ) 
      this.form.controls['ROW_DOUBLE_CLICK_ACTION'].setErrors({invalid: true}); 
 // Code goes here 
 

 if ( this.FORM_TRIGGER_FAILURE == true) 
 return; 
 
 if (typeof this.form.controls['ROW_DOUBLE_CLICK_ACTION'] != "undefined" ) 
     this.form.get('ROW_DOUBLE_CLICK_ACTION').updateValueAndValidity();
 this.form.updateValueAndValidity(); 
 }

 async ON_CLICK_ROW_DOUBLE_CLICK_ACTION(event){

}

async WHEN_VALIDATE_ITEM_FONT_SB(value) {

 this.FORM_TRIGGER_FAILURE = false ; 
 if (typeof this.form.controls['FONT_SB'] != "undefined" ) 
      this.form.controls['FONT_SB'].setErrors({invalid: true}); 
 // Code goes here 
 

 if ( this.FORM_TRIGGER_FAILURE == true) 
 return; 
 
 if (typeof this.form.controls['FONT_SB'] != "undefined" ) 
     this.form.get('FONT_SB').updateValueAndValidity();
 this.form.updateValueAndValidity(); 
 }

 async ON_CLICK_FONT_SB(event){

}

async WHEN_VALIDATE_ITEM_BUTTON_SIZE(value) {

 this.FORM_TRIGGER_FAILURE = false ; 
 if (typeof this.form.controls['BUTTON_SIZE'] != "undefined" ) 
      this.form.controls['BUTTON_SIZE'].setErrors({invalid: true}); 
 // Code goes here 
 

 if ( this.FORM_TRIGGER_FAILURE == true) 
 return; 
 
 if (typeof this.form.controls['BUTTON_SIZE'] != "undefined" ) 
     this.form.get('BUTTON_SIZE').updateValueAndValidity();
 this.form.updateValueAndValidity(); 
 }

 async ON_CLICK_BUTTON_SIZE(event){

}

async WHEN_VALIDATE_ITEM_SAMPLE(value) {

 this.FORM_TRIGGER_FAILURE = false ; 
 if (typeof this.form.controls['SAMPLE'] != "undefined" ) 
      this.form.controls['SAMPLE'].setErrors({invalid: true}); 
 // Code goes here 
 

 if ( this.FORM_TRIGGER_FAILURE == true) 
 return; 
 
 if (typeof this.form.controls['SAMPLE'] != "undefined" ) 
     this.form.get('SAMPLE').updateValueAndValidity();
 this.form.updateValueAndValidity(); 
 }

 async ON_CLICK_SAMPLE(event){

}

async WHEN_VALIDATE_ITEM_SHOW_TOOLTIPS(value) {

 this.FORM_TRIGGER_FAILURE = false ; 
 if (typeof this.form.controls['SHOW_TOOLTIPS'] != "undefined" ) 
      this.form.controls['SHOW_TOOLTIPS'].setErrors({invalid: true}); 
 // Code goes here 
 

 if ( this.FORM_TRIGGER_FAILURE == true) 
 return; 
 
 if (typeof this.form.controls['SHOW_TOOLTIPS'] != "undefined" ) 
     this.form.get('SHOW_TOOLTIPS').updateValueAndValidity();
 this.form.updateValueAndValidity(); 
 }

 async ON_CLICK_SHOW_TOOLTIPS(event){

}

async WHEN_VALIDATE_ITEM_HIDE_BAR(value) {

 this.FORM_TRIGGER_FAILURE = false ; 
 if (typeof this.form.controls['HIDE_BAR'] != "undefined" ) 
      this.form.controls['HIDE_BAR'].setErrors({invalid: true}); 
 // Code goes here 
 

 if ( this.FORM_TRIGGER_FAILURE == true) 
 return; 
 
 if (typeof this.form.controls['HIDE_BAR'] != "undefined" ) 
     this.form.get('HIDE_BAR').updateValueAndValidity();
 this.form.updateValueAndValidity(); 
 }

 async ON_CLICK_HIDE_BAR(event){

}

async WHEN_VALIDATE_ITEM_COMMAND(value) {

 this.FORM_TRIGGER_FAILURE = false ; 
 if (typeof this.form.controls['COMMAND'] != "undefined" ) 
      this.form.controls['COMMAND'].setErrors({invalid: true}); 
 // Code goes here 
 

 if ( this.FORM_TRIGGER_FAILURE == true) 
 return; 
 
 if (typeof this.form.controls['COMMAND'] != "undefined" ) 
     this.form.get('COMMAND').updateValueAndValidity();
 this.form.updateValueAndValidity(); 
 }

 async ON_CLICK_COMMAND(event){

}

async WHEN_VALIDATE_ITEM_COMMAND_BUTTON(value) {

 this.FORM_TRIGGER_FAILURE = false ; 
 if (typeof this.form.controls['COMMAND_BUTTON'] != "undefined" ) 
      this.form.controls['COMMAND_BUTTON'].setErrors({invalid: true}); 
 // Code goes here 
 

 if ( this.FORM_TRIGGER_FAILURE == true) 
 return; 
 
 if (typeof this.form.controls['COMMAND_BUTTON'] != "undefined" ) 
     this.form.get('COMMAND_BUTTON').updateValueAndValidity();
 this.form.updateValueAndValidity(); 
 }

 async ON_CLICK_COMMAND_BUTTON(event){

}

async WHEN_VALIDATE_ITEM_DISPLAY_ERROR_OPERATOR_ACTIONS_DIALOG(value) {

 this.FORM_TRIGGER_FAILURE = false ; 
 if (typeof this.form.controls['DISPLAY_ERROR_OPERATOR_ACTIONS_DIALOG'] != "undefined" ) 
      this.form.controls['DISPLAY_ERROR_OPERATOR_ACTIONS_DIALOG'].setErrors({invalid: true}); 
 // Code goes here 
 

 if ( this.FORM_TRIGGER_FAILURE == true) 
 return; 
 
 if (typeof this.form.controls['DISPLAY_ERROR_OPERATOR_ACTIONS_DIALOG'] != "undefined" ) 
     this.form.get('DISPLAY_ERROR_OPERATOR_ACTIONS_DIALOG').updateValueAndValidity();
 this.form.updateValueAndValidity(); 
 }

 async ON_CLICK_DISPLAY_ERROR_OPERATOR_ACTIONS_DIALOG(event){

}

async WHEN_VALIDATE_ITEM_MAINTAIN_SELECTION_FOCUS_LOST(value) {

 this.FORM_TRIGGER_FAILURE = false ; 
 if (typeof this.form.controls['MAINTAIN_SELECTION_FOCUS_LOST'] != "undefined" ) 
      this.form.controls['MAINTAIN_SELECTION_FOCUS_LOST'].setErrors({invalid: true}); 
 // Code goes here 
 

 if ( this.FORM_TRIGGER_FAILURE == true) 
 return; 
 
 if (typeof this.form.controls['MAINTAIN_SELECTION_FOCUS_LOST'] != "undefined" ) 
     this.form.get('MAINTAIN_SELECTION_FOCUS_LOST').updateValueAndValidity();
 this.form.updateValueAndValidity(); 
 }

 async ON_CLICK_MAINTAIN_SELECTION_FOCUS_LOST(event){

}
 
 async onValueChange_APP_ID(value) { 
  this.FORM_TRIGGER_FAILURE = false;	
 await this.WHEN_VALIDATE_ITEM_APP_ID(value); if ( this.FORM_TRIGGER_FAILURE) return; 
 this.formValidationChangedOutput.emit(this.form.valid); 
  
  } 
 async onChange_GENERAL_ID(event:any) { 
 var value = event.target.value; 
 if ((value == null) || (value == '')) 	
 	return;  
    this.FORM_TRIGGER_FAILURE = false;	
 await   this.WHEN_VALIDATE_ITEM_GENERAL_ID(value); if ( this.FORM_TRIGGER_FAILURE) return; 
 this.formValidationChangedOutput.emit(this.form.valid); 
  
 } 
 async onValueChange_DISPLAY_ID(value) { 
  this.FORM_TRIGGER_FAILURE = false;	
 await this.WHEN_VALIDATE_ITEM_DISPLAY_ID(value); if ( this.FORM_TRIGGER_FAILURE) return; 
 this.formValidationChangedOutput.emit(this.form.valid); 
  
  } 
 async onValueChange_SHAPE_ID(value) { 
  this.FORM_TRIGGER_FAILURE = false;	
 await this.WHEN_VALIDATE_ITEM_SHAPE_ID(value); if ( this.FORM_TRIGGER_FAILURE) return; 
 this.formValidationChangedOutput.emit(this.form.valid); 
  
  } 
 async onValueChange_BACKGROUND_COLOR(value) { 
  this.FORM_TRIGGER_FAILURE = false;	
 await this.WHEN_VALIDATE_ITEM_BACKGROUND_COLOR(value); if ( this.FORM_TRIGGER_FAILURE) return; 
 this.formValidationChangedOutput.emit(this.form.valid); 
  
  } 
 async onValueChange_SELECTED_ITEM_TEXT_COLOR(value) { 
  this.FORM_TRIGGER_FAILURE = false;	
 await this.WHEN_VALIDATE_ITEM_SELECTED_ITEM_TEXT_COLOR(value); if ( this.FORM_TRIGGER_FAILURE) return; 
 this.formValidationChangedOutput.emit(this.form.valid); 
  
  } 
 async onValueChange_SELECTED_ITEM_BACKGROUND_COLOR(value) { 
  this.FORM_TRIGGER_FAILURE = false;	
 await this.WHEN_VALIDATE_ITEM_SELECTED_ITEM_BACKGROUND_COLOR(value); if ( this.FORM_TRIGGER_FAILURE) return; 
 this.formValidationChangedOutput.emit(this.form.valid); 
  
  } 
 async onValueChange_FONT_AL(value) { 
  this.FORM_TRIGGER_FAILURE = false;	
 await this.WHEN_VALIDATE_ITEM_FONT_AL(value); if ( this.FORM_TRIGGER_FAILURE) return; 
 this.formValidationChangedOutput.emit(this.form.valid); 
  
  } 
 async onChange_NUMBER_OF_ROWS(event:any) { 
 var value = event.target.value; 
 if ((value == null) || (value == '')) 	
 	return;  
    this.FORM_TRIGGER_FAILURE = false;	
 await   this.WHEN_VALIDATE_ITEM_NUMBER_OF_ROWS(value); if ( this.FORM_TRIGGER_FAILURE) return; 
 this.formValidationChangedOutput.emit(this.form.valid); 
  
 } 
 async onValueChange_ICON_STYLE(value) { 
  this.FORM_TRIGGER_FAILURE = false;	
 await this.WHEN_VALIDATE_ITEM_ICON_STYLE(value); if ( this.FORM_TRIGGER_FAILURE) return; 
 this.formValidationChangedOutput.emit(this.form.valid); 
  
  } 
 async onValueChange_ROW_DOUBLE_CLICK_ACTION(value) { 
  this.FORM_TRIGGER_FAILURE = false;	
 await this.WHEN_VALIDATE_ITEM_ROW_DOUBLE_CLICK_ACTION(value); if ( this.FORM_TRIGGER_FAILURE) return; 
 this.formValidationChangedOutput.emit(this.form.valid); 
  
  } 
 async onValueChange_FONT_SB(value) { 
  this.FORM_TRIGGER_FAILURE = false;	
 await this.WHEN_VALIDATE_ITEM_FONT_SB(value); if ( this.FORM_TRIGGER_FAILURE) return; 
 this.formValidationChangedOutput.emit(this.form.valid); 
  
  } 
 async onValueChange_BUTTON_SIZE(value) { 
  this.FORM_TRIGGER_FAILURE = false;	
 await this.WHEN_VALIDATE_ITEM_BUTTON_SIZE(value); if ( this.FORM_TRIGGER_FAILURE) return; 
 this.formValidationChangedOutput.emit(this.form.valid); 
  
  } 
 async onChange_SAMPLE(event:any) { 
 var value = event.target.value; 
 if ((value == null) || (value == '')) 	
 	return;  
    this.FORM_TRIGGER_FAILURE = false;	
 await   this.WHEN_VALIDATE_ITEM_SAMPLE(value); if ( this.FORM_TRIGGER_FAILURE) return; 
 this.formValidationChangedOutput.emit(this.form.valid); 
  
 } 
 async onChange_SHOW_TOOLTIPS(event:any) { 
 var value = event.target.value; 
 if ((value == null) || (value == '')) 	
 	return;  
    this.FORM_TRIGGER_FAILURE = false;	
 await   this.WHEN_VALIDATE_ITEM_SHOW_TOOLTIPS(value); if ( this.FORM_TRIGGER_FAILURE) return; 
 this.formValidationChangedOutput.emit(this.form.valid); 
  
 } 
 async onChange_HIDE_BAR(event:any) { 
 var value = event.target.value; 
 if ((value == null) || (value == '')) 	
 	return;  
    this.FORM_TRIGGER_FAILURE = false;	
 await   this.WHEN_VALIDATE_ITEM_HIDE_BAR(value); if ( this.FORM_TRIGGER_FAILURE) return; 
 this.formValidationChangedOutput.emit(this.form.valid); 
  
 } 
 async onChange_COMMAND(event:any) { 
 var value = event.target.value; 
 if ((value == null) || (value == '')) 	
 	return;  
    this.FORM_TRIGGER_FAILURE = false;	
 await   this.WHEN_VALIDATE_ITEM_COMMAND(value); if ( this.FORM_TRIGGER_FAILURE) return; 
 this.formValidationChangedOutput.emit(this.form.valid); 
  
 } 
 async onValueChange_COMMAND_BUTTON(value) { 
  this.FORM_TRIGGER_FAILURE = false;	
 await this.WHEN_VALIDATE_ITEM_COMMAND_BUTTON(value); if ( this.FORM_TRIGGER_FAILURE) return; 
 this.formValidationChangedOutput.emit(this.form.valid); 
  
  } 
 async onChange_DISPLAY_ERROR_OPERATOR_ACTIONS_DIALOG(event:any) { 
 var value = event.target.value; 
 if ((value == null) || (value == '')) 	
 	return;  
    this.FORM_TRIGGER_FAILURE = false;	
 await   this.WHEN_VALIDATE_ITEM_DISPLAY_ERROR_OPERATOR_ACTIONS_DIALOG(value); if ( this.FORM_TRIGGER_FAILURE) return; 
 this.formValidationChangedOutput.emit(this.form.valid); 
  
 } 
 async onChange_MAINTAIN_SELECTION_FOCUS_LOST(event:any) { 
 var value = event.target.value; 
 if ((value == null) || (value == '')) 	
 	return;  
    this.FORM_TRIGGER_FAILURE = false;	
 await   this.WHEN_VALIDATE_ITEM_MAINTAIN_SELECTION_FOCUS_LOST(value); if ( this.FORM_TRIGGER_FAILURE) return; 
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


