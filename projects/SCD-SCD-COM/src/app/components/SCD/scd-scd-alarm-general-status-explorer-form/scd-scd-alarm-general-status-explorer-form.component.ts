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
import { scdalarmGeneralStatusExplorerScdScdAlarmGeneralStatusExplorerForm , componentConfigDef} from '@modeldir/model';


 const createFormGroup = (dataItem:any) => new FormGroup({
'GENERAL_ID' : new FormControl(dataItem.GENERAL_ID  , ) ,
'APP_ID' : new FormControl(dataItem.APP_ID  ,   Validators.required ) ,
'DISPLAY_ID' : new FormControl(dataItem.DISPLAY_ID  ,   Validators.required ) ,
'SHAPE_ID' : new FormControl(dataItem.SHAPE_ID  ,   Validators.required ) ,
'TEXT_COLOR' : new FormControl(dataItem.TEXT_COLOR  , ) ,
'BACKGROUND_COLOR' : new FormControl(dataItem.BACKGROUND_COLOR  , ) ,
'LIST_BACKGROUD_COLOR' : new FormControl(dataItem.LIST_BACKGROUD_COLOR  , ) ,
'FONT' : new FormControl(dataItem.FONT  , ) ,
'ROOT_AREA' : new FormControl(dataItem.ROOT_AREA  , ) ,
'SOURCE_FILE_NAME' : new FormControl(dataItem.SOURCE_FILE_NAME  , ) ,
'SOURCE_FILE_STATUS' : new FormControl(dataItem.SOURCE_FILE_STATUS  , ) ,
'SHOW_TOOLBARS' : new FormControl(dataItem.SHOW_TOOLBARS  , ) ,
'SHOW_ENABLE_AND_DISABLE_BUTTONS' : new FormControl(dataItem.SHOW_ENABLE_AND_DISABLE_BUTTONS  , ) ,
'SHOW_UNSUPRESS_AND_SUPRESS_BUTTONS' : new FormControl(dataItem.SHOW_UNSUPRESS_AND_SUPRESS_BUTTONS  , ) ,
'SHOW_UNSHELVE_AND_SHELVE_BUTTONS' : new FormControl(dataItem.SHOW_UNSHELVE_AND_SHELVE_BUTTONS  , ) ,
'SHOW_DETAILS_BUTTON' : new FormControl(dataItem.SHOW_DETAILS_BUTTON  , ) ,
'SHOW_HELP_BUTTON' : new FormControl(dataItem.SHOW_HELP_BUTTON  , ) ,
'SHOW_AREA_TREE' : new FormControl(dataItem.SHOW_AREA_TREE  , ) ,
'PANEL_WIDTH' : new FormControl(dataItem.PANEL_WIDTH  , ) ,
'DISPLAY_ERRORS_IN_DIALOG' : new FormControl(dataItem.DISPLAY_ERRORS_IN_DIALOG  , ) ,
'ICON_STYLE' : new FormControl(dataItem.ICON_STYLE  , ) ,
'SHOW_TIME_STAMPE' : new FormControl(dataItem.SHOW_TIME_STAMPE  , ) 
});

declare function getParamConfig():any;
@Component({
  selector: 'app-scd-scd-alarm-general-status-explorer-form',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './scd-scd-alarm-general-status-explorer-form.component.html',
  styleUrls: ['./scd-scd-alarm-general-status-explorer-form.component.scss'],
  standalone: false
})


export class ScdAlarmGeneralStatusExplorerScdScdAlarmGeneralStatusExplorerFormFormComponent {
  public title =  this.starServices.getNLS([],"SCD_SCD_ALARM_GENERAL_STATUS_EXPLORER_FORM.scdalarmGeneralStatusExplorerScdScdAlarmGeneralStatusExplorerForm.component_title","SCD ALARM GENERAL STATUS EXPLORER FORM");
  public compTitleMsg =  "SCD_SCD_ALARM_GENERAL_STATUS_EXPLORER_FORM.scdalarmGeneralStatusExplorerScdScdAlarmGeneralStatusExplorerForm";
  public routineName = "ScdAlarmGeneralStatusExplorerScdScdAlarmGeneralStatusExplorerFormForm";
  private insertCMD = "INSERT_SCD_ALARM_GENERAL_STATUS_EXPLORER";
  private updateCMD = "UPDATE_SCD_ALARM_GENERAL_STATUS_EXPLORER";
  private deleteCMD =   "DELETE_SCD_ALARM_GENERAL_STATUS_EXPLORER";
  private getCMD = "GET_SCD_ALARM_GENERAL_STATUS_EXPLORER_QUERY";

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
  public primarKeyReadOnlyArr = {isGENERAL_IDreadOnly : false , isAPP_IDreadOnly : false , isDISPLAY_IDreadOnly : false , isSHAPE_IDreadOnly : false};  
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
  public compSelector = 'app-scd-scd-alarm-general-status-explorer-form';
  public PK_AUTO = 'GENERAL_ID';
  public customerFacing = false;
  public FormStepsArr = [] ;
public labelGENERAL_IDTop=true;
public labelGENERAL_IDVisible=true;
public labelAPP_IDTop=true;
public labelAPP_IDVisible=true;
public labelDISPLAY_IDTop=true;
public labelDISPLAY_IDVisible=true;
public labelSHAPE_IDTop=true;
public labelSHAPE_IDVisible=true;
public labelTEXT_COLORTop=true;
public labelTEXT_COLORVisible=true;
public labelBACKGROUND_COLORTop=true;
public labelBACKGROUND_COLORVisible=true;
public labelLIST_BACKGROUD_COLORTop=true;
public labelLIST_BACKGROUD_COLORVisible=true;
public labelFONTTop=true;
public labelFONTVisible=true;
public labelROOT_AREATop=true;
public labelROOT_AREAVisible=true;
public labelSOURCE_FILE_NAMETop=true;
public labelSOURCE_FILE_NAMEVisible=true;
public labelSOURCE_FILE_STATUSTop=true;
public labelSOURCE_FILE_STATUSVisible=true;
public labelSHOW_TOOLBARSTop=true;
public labelSHOW_TOOLBARSVisible=true;
public labelSHOW_ENABLE_AND_DISABLE_BUTTONSTop=true;
public labelSHOW_ENABLE_AND_DISABLE_BUTTONSVisible=true;
public labelSHOW_UNSUPRESS_AND_SUPRESS_BUTTONSTop=true;
public labelSHOW_UNSUPRESS_AND_SUPRESS_BUTTONSVisible=true;
public labelSHOW_UNSHELVE_AND_SHELVE_BUTTONSTop=true;
public labelSHOW_UNSHELVE_AND_SHELVE_BUTTONSVisible=true;
public labelSHOW_DETAILS_BUTTONTop=true;
public labelSHOW_DETAILS_BUTTONVisible=true;
public labelSHOW_HELP_BUTTONTop=true;
public labelSHOW_HELP_BUTTONVisible=true;
public labelSHOW_AREA_TREETop=true;
public labelSHOW_AREA_TREEVisible=true;
public labelPANEL_WIDTHTop=true;
public labelPANEL_WIDTHVisible=true;
public labelDISPLAY_ERRORS_IN_DIALOGTop=true;
public labelDISPLAY_ERRORS_IN_DIALOGVisible=true;
public labelICON_STYLETop=true;
public labelICON_STYLEVisible=true;
public labelSHOW_TIME_STAMPETop=true;
public labelSHOW_TIME_STAMPEVisible=true;

public visibleGENERAL_ID = true;
public visibleAPP_ID = true;
public visibleDISPLAY_ID = true;
public visibleSHAPE_ID = true;
public visibleTEXT_COLOR = true;
public visibleBACKGROUND_COLOR = true;
public visibleLIST_BACKGROUD_COLOR = true;
public visibleFONT = true;
public visibleROOT_AREA = true;
public visibleSOURCE_FILE_NAME = true;
public visibleSOURCE_FILE_STATUS = true;
public visibleSHOW_TOOLBARS = true;
public visibleSHOW_ENABLE_AND_DISABLE_BUTTONS = true;
public visibleSHOW_UNSUPRESS_AND_SUPRESS_BUTTONS = true;
public visibleSHOW_UNSHELVE_AND_SHELVE_BUTTONS = true;
public visibleSHOW_DETAILS_BUTTON = true;
public visibleSHOW_HELP_BUTTON = true;
public visibleSHOW_AREA_TREE = true;
public visiblePANEL_WIDTH = true;
public visibleDISPLAY_ERRORS_IN_DIALOG = true;
public visibleICON_STYLE = true;
public visibleSHOW_TIME_STAMPE = true;

public disableGENERAL_ID = false;
public disableAPP_ID = false;
public disableDISPLAY_ID = false;
public disableSHAPE_ID = false;
public disableTEXT_COLOR = false;
public disableBACKGROUND_COLOR = false;
public disableLIST_BACKGROUD_COLOR = false;
public disableFONT = false;
public disableROOT_AREA = false;
public disableSOURCE_FILE_NAME = false;
public disableSOURCE_FILE_STATUS = false;
public disableSHOW_TOOLBARS = false;
public disableSHOW_ENABLE_AND_DISABLE_BUTTONS = false;
public disableSHOW_UNSUPRESS_AND_SUPRESS_BUTTONS = false;
public disableSHOW_UNSHELVE_AND_SHELVE_BUTTONS = false;
public disableSHOW_DETAILS_BUTTON = false;
public disableSHOW_HELP_BUTTON = false;
public disableSHOW_AREA_TREE = false;
public disablePANEL_WIDTH = false;
public disableDISPLAY_ERRORS_IN_DIALOG = false;
public disableICON_STYLE = false;
public disableSHOW_TIME_STAMPE = false;


  
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

  private formInitialValues:any =   new scdalarmGeneralStatusExplorerScdScdAlarmGeneralStatusExplorerForm();   
    @Input() public set detail_Input(form: any) {
       if (typeof form != "undefined"){
        this.isSearch = true;
        this.executeQuery(form);
        this.isChild = true;
      }
      /*
    if (this.paramConfig.DEBUG_FLAG) console.log('detail_Input ScdAlarmGeneralStatusExplorerScdScdAlarmGeneralStatusExplorerFormForm form.APP_ID :' + form.APP_ID);
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
	{"statment":"SELECT CODE, CODETEXT_LANG , PARTCODE FROM SOM_TABS_CODES WHERE CODENAME = \"SOURCE_FILE_STATUS\"  and LANGUAGE_NAME = '" + this.userLang + "' order by CODETEXT_LANG ",
			"lkpArrName":"lkpArrSOURCE_FILE_STATUS"},
	{"statment":"SELECT CODE, CODETEXT_LANG , PARTCODE FROM SOM_TABS_CODES WHERE CODENAME = \"ICON_STYLE\"  and LANGUAGE_NAME = '" + this.userLang + "' order by CODETEXT_LANG ",
			"lkpArrName":"lkpArrICON_STYLE"},
	{"statment":"SELECT CODE, CODETEXT_LANG , PARTCODE FROM SOM_TABS_CODES WHERE CODENAME = \"SHOW_TIME_STAMPE\"  and LANGUAGE_NAME = '" + this.userLang + "' order by CODETEXT_LANG ",
			"lkpArrName":"lkpArrSHOW_TIME_STAMPE"}];
 if (this.lookupArrDef.length > 0)
   this.starServices.fetchLookups(this, this.lookupArrDef);
}

public lkpArrAPP_ID = [];

public lkpArrDISPLAY_ID = [];

public lkpArrSHAPE_ID = [];

public lkpArrSOURCE_FILE_STATUS = [];

public lkpArrICON_STYLE = [];

public lkpArrSHOW_TIME_STAMPE = [];

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

public lkpArrGetSOURCE_FILE_STATUS(CODE: any): any {
var rec = this.lkpArrSOURCE_FILE_STATUS.find((x:any) => x.CODE === CODE);
return rec;
}

public lkpArrGetICON_STYLE(CODE: any): any {
var rec = this.lkpArrICON_STYLE.find((x:any) => x.CODE === CODE);
return rec;
}

public lkpArrGetSHOW_TIME_STAMPE(CODE: any): any {
var rec = this.lkpArrSHOW_TIME_STAMPE.find((x:any) => x.CODE === CODE);
return rec;
}

onChanges(): void {
this.form.get('GENERAL_ID').valueChanges.subscribe(val => {
});
this.form.get('ROOT_AREA').valueChanges.subscribe(val => {
});
this.form.get('SOURCE_FILE_NAME').valueChanges.subscribe(val => {
});
this.form.get('PANEL_WIDTH').valueChanges.subscribe(val => {
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
      if (this.paramConfig.DEBUG_FLAG) console.log("ScdAlarmGeneralStatusExplorerScdScdAlarmGeneralStatusExplorerFormForm ComponentConfig:", {...ComponentConfig});

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

async WHEN_VALIDATE_ITEM_TEXT_COLOR(value) {

 this.FORM_TRIGGER_FAILURE = false ; 
 if (typeof this.form.controls['TEXT_COLOR'] != "undefined" ) 
      this.form.controls['TEXT_COLOR'].setErrors({invalid: true}); 
 // Code goes here 
 

 if ( this.FORM_TRIGGER_FAILURE == true) 
 return; 
 
 if (typeof this.form.controls['TEXT_COLOR'] != "undefined" ) 
     this.form.get('TEXT_COLOR').updateValueAndValidity();
 this.form.updateValueAndValidity(); 
 }

 async ON_CLICK_TEXT_COLOR(event){

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

async WHEN_VALIDATE_ITEM_LIST_BACKGROUD_COLOR(value) {

 this.FORM_TRIGGER_FAILURE = false ; 
 if (typeof this.form.controls['LIST_BACKGROUD_COLOR'] != "undefined" ) 
      this.form.controls['LIST_BACKGROUD_COLOR'].setErrors({invalid: true}); 
 // Code goes here 
 

 if ( this.FORM_TRIGGER_FAILURE == true) 
 return; 
 
 if (typeof this.form.controls['LIST_BACKGROUD_COLOR'] != "undefined" ) 
     this.form.get('LIST_BACKGROUD_COLOR').updateValueAndValidity();
 this.form.updateValueAndValidity(); 
 }

 async ON_CLICK_LIST_BACKGROUD_COLOR(event){

}

async WHEN_VALIDATE_ITEM_FONT(value) {

 this.FORM_TRIGGER_FAILURE = false ; 
 if (typeof this.form.controls['FONT'] != "undefined" ) 
      this.form.controls['FONT'].setErrors({invalid: true}); 
 // Code goes here 
 

 if ( this.FORM_TRIGGER_FAILURE == true) 
 return; 
 
 if (typeof this.form.controls['FONT'] != "undefined" ) 
     this.form.get('FONT').updateValueAndValidity();
 this.form.updateValueAndValidity(); 
 }

 async ON_CLICK_FONT(event){

}

async WHEN_VALIDATE_ITEM_ROOT_AREA(value) {

 this.FORM_TRIGGER_FAILURE = false ; 
 if (typeof this.form.controls['ROOT_AREA'] != "undefined" ) 
      this.form.controls['ROOT_AREA'].setErrors({invalid: true}); 
 // Code goes here 
 

 if ( this.FORM_TRIGGER_FAILURE == true) 
 return; 
 
 if (typeof this.form.controls['ROOT_AREA'] != "undefined" ) 
     this.form.get('ROOT_AREA').updateValueAndValidity();
 this.form.updateValueAndValidity(); 
 }

 async ON_CLICK_ROOT_AREA(event){

}

async WHEN_VALIDATE_ITEM_SOURCE_FILE_NAME(value) {

 this.FORM_TRIGGER_FAILURE = false ; 
 if (typeof this.form.controls['SOURCE_FILE_NAME'] != "undefined" ) 
      this.form.controls['SOURCE_FILE_NAME'].setErrors({invalid: true}); 
 // Code goes here 
 

 if ( this.FORM_TRIGGER_FAILURE == true) 
 return; 
 
 if (typeof this.form.controls['SOURCE_FILE_NAME'] != "undefined" ) 
     this.form.get('SOURCE_FILE_NAME').updateValueAndValidity();
 this.form.updateValueAndValidity(); 
 }

 async ON_CLICK_SOURCE_FILE_NAME(event){

}

async WHEN_VALIDATE_ITEM_SOURCE_FILE_STATUS(value) {

 this.FORM_TRIGGER_FAILURE = false ; 
 if (typeof this.form.controls['SOURCE_FILE_STATUS'] != "undefined" ) 
      this.form.controls['SOURCE_FILE_STATUS'].setErrors({invalid: true}); 
 // Code goes here 
 

 if ( this.FORM_TRIGGER_FAILURE == true) 
 return; 
 
 if (typeof this.form.controls['SOURCE_FILE_STATUS'] != "undefined" ) 
     this.form.get('SOURCE_FILE_STATUS').updateValueAndValidity();
 this.form.updateValueAndValidity(); 
 }

 async ON_CLICK_SOURCE_FILE_STATUS(event){

}

async WHEN_VALIDATE_ITEM_SHOW_TOOLBARS(value) {

 this.FORM_TRIGGER_FAILURE = false ; 
 if (typeof this.form.controls['SHOW_TOOLBARS'] != "undefined" ) 
      this.form.controls['SHOW_TOOLBARS'].setErrors({invalid: true}); 
 // Code goes here 
 

 if ( this.FORM_TRIGGER_FAILURE == true) 
 return; 
 
 if (typeof this.form.controls['SHOW_TOOLBARS'] != "undefined" ) 
     this.form.get('SHOW_TOOLBARS').updateValueAndValidity();
 this.form.updateValueAndValidity(); 
 }

 async ON_CLICK_SHOW_TOOLBARS(event){

}

async WHEN_VALIDATE_ITEM_SHOW_ENABLE_AND_DISABLE_BUTTONS(value) {

 this.FORM_TRIGGER_FAILURE = false ; 
 if (typeof this.form.controls['SHOW_ENABLE_AND_DISABLE_BUTTONS'] != "undefined" ) 
      this.form.controls['SHOW_ENABLE_AND_DISABLE_BUTTONS'].setErrors({invalid: true}); 
 // Code goes here 
 

 if ( this.FORM_TRIGGER_FAILURE == true) 
 return; 
 
 if (typeof this.form.controls['SHOW_ENABLE_AND_DISABLE_BUTTONS'] != "undefined" ) 
     this.form.get('SHOW_ENABLE_AND_DISABLE_BUTTONS').updateValueAndValidity();
 this.form.updateValueAndValidity(); 
 }

 async ON_CLICK_SHOW_ENABLE_AND_DISABLE_BUTTONS(event){

}

async WHEN_VALIDATE_ITEM_SHOW_UNSUPRESS_AND_SUPRESS_BUTTONS(value) {

 this.FORM_TRIGGER_FAILURE = false ; 
 if (typeof this.form.controls['SHOW_UNSUPRESS_AND_SUPRESS_BUTTONS'] != "undefined" ) 
      this.form.controls['SHOW_UNSUPRESS_AND_SUPRESS_BUTTONS'].setErrors({invalid: true}); 
 // Code goes here 
 

 if ( this.FORM_TRIGGER_FAILURE == true) 
 return; 
 
 if (typeof this.form.controls['SHOW_UNSUPRESS_AND_SUPRESS_BUTTONS'] != "undefined" ) 
     this.form.get('SHOW_UNSUPRESS_AND_SUPRESS_BUTTONS').updateValueAndValidity();
 this.form.updateValueAndValidity(); 
 }

 async ON_CLICK_SHOW_UNSUPRESS_AND_SUPRESS_BUTTONS(event){

}

async WHEN_VALIDATE_ITEM_SHOW_UNSHELVE_AND_SHELVE_BUTTONS(value) {

 this.FORM_TRIGGER_FAILURE = false ; 
 if (typeof this.form.controls['SHOW_UNSHELVE_AND_SHELVE_BUTTONS'] != "undefined" ) 
      this.form.controls['SHOW_UNSHELVE_AND_SHELVE_BUTTONS'].setErrors({invalid: true}); 
 // Code goes here 
 

 if ( this.FORM_TRIGGER_FAILURE == true) 
 return; 
 
 if (typeof this.form.controls['SHOW_UNSHELVE_AND_SHELVE_BUTTONS'] != "undefined" ) 
     this.form.get('SHOW_UNSHELVE_AND_SHELVE_BUTTONS').updateValueAndValidity();
 this.form.updateValueAndValidity(); 
 }

 async ON_CLICK_SHOW_UNSHELVE_AND_SHELVE_BUTTONS(event){

}

async WHEN_VALIDATE_ITEM_SHOW_DETAILS_BUTTON(value) {

 this.FORM_TRIGGER_FAILURE = false ; 
 if (typeof this.form.controls['SHOW_DETAILS_BUTTON'] != "undefined" ) 
      this.form.controls['SHOW_DETAILS_BUTTON'].setErrors({invalid: true}); 
 // Code goes here 
 

 if ( this.FORM_TRIGGER_FAILURE == true) 
 return; 
 
 if (typeof this.form.controls['SHOW_DETAILS_BUTTON'] != "undefined" ) 
     this.form.get('SHOW_DETAILS_BUTTON').updateValueAndValidity();
 this.form.updateValueAndValidity(); 
 }

 async ON_CLICK_SHOW_DETAILS_BUTTON(event){

}

async WHEN_VALIDATE_ITEM_SHOW_HELP_BUTTON(value) {

 this.FORM_TRIGGER_FAILURE = false ; 
 if (typeof this.form.controls['SHOW_HELP_BUTTON'] != "undefined" ) 
      this.form.controls['SHOW_HELP_BUTTON'].setErrors({invalid: true}); 
 // Code goes here 
 

 if ( this.FORM_TRIGGER_FAILURE == true) 
 return; 
 
 if (typeof this.form.controls['SHOW_HELP_BUTTON'] != "undefined" ) 
     this.form.get('SHOW_HELP_BUTTON').updateValueAndValidity();
 this.form.updateValueAndValidity(); 
 }

 async ON_CLICK_SHOW_HELP_BUTTON(event){

}

async WHEN_VALIDATE_ITEM_SHOW_AREA_TREE(value) {

 this.FORM_TRIGGER_FAILURE = false ; 
 if (typeof this.form.controls['SHOW_AREA_TREE'] != "undefined" ) 
      this.form.controls['SHOW_AREA_TREE'].setErrors({invalid: true}); 
 // Code goes here 
 

 if ( this.FORM_TRIGGER_FAILURE == true) 
 return; 
 
 if (typeof this.form.controls['SHOW_AREA_TREE'] != "undefined" ) 
     this.form.get('SHOW_AREA_TREE').updateValueAndValidity();
 this.form.updateValueAndValidity(); 
 }

 async ON_CLICK_SHOW_AREA_TREE(event){

}

async WHEN_VALIDATE_ITEM_PANEL_WIDTH(value) {

 this.FORM_TRIGGER_FAILURE = false ; 
 if (typeof this.form.controls['PANEL_WIDTH'] != "undefined" ) 
      this.form.controls['PANEL_WIDTH'].setErrors({invalid: true}); 
 // Code goes here 
 

 if ( this.FORM_TRIGGER_FAILURE == true) 
 return; 
 
 if (typeof this.form.controls['PANEL_WIDTH'] != "undefined" ) 
     this.form.get('PANEL_WIDTH').updateValueAndValidity();
 this.form.updateValueAndValidity(); 
 }

 async ON_CLICK_PANEL_WIDTH(event){

}

async WHEN_VALIDATE_ITEM_DISPLAY_ERRORS_IN_DIALOG(value) {

 this.FORM_TRIGGER_FAILURE = false ; 
 if (typeof this.form.controls['DISPLAY_ERRORS_IN_DIALOG'] != "undefined" ) 
      this.form.controls['DISPLAY_ERRORS_IN_DIALOG'].setErrors({invalid: true}); 
 // Code goes here 
 

 if ( this.FORM_TRIGGER_FAILURE == true) 
 return; 
 
 if (typeof this.form.controls['DISPLAY_ERRORS_IN_DIALOG'] != "undefined" ) 
     this.form.get('DISPLAY_ERRORS_IN_DIALOG').updateValueAndValidity();
 this.form.updateValueAndValidity(); 
 }

 async ON_CLICK_DISPLAY_ERRORS_IN_DIALOG(event){

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

async WHEN_VALIDATE_ITEM_SHOW_TIME_STAMPE(value) {

 this.FORM_TRIGGER_FAILURE = false ; 
 if (typeof this.form.controls['SHOW_TIME_STAMPE'] != "undefined" ) 
      this.form.controls['SHOW_TIME_STAMPE'].setErrors({invalid: true}); 
 // Code goes here 
 

 if ( this.FORM_TRIGGER_FAILURE == true) 
 return; 
 
 if (typeof this.form.controls['SHOW_TIME_STAMPE'] != "undefined" ) 
     this.form.get('SHOW_TIME_STAMPE').updateValueAndValidity();
 this.form.updateValueAndValidity(); 
 }

 async ON_CLICK_SHOW_TIME_STAMPE(event){

}
 
 async onChange_GENERAL_ID(event:any) { 
 var value = event.target.value; 
 if ((value == null) || (value == '')) 	
 	return;  
    this.FORM_TRIGGER_FAILURE = false;	
 await   this.WHEN_VALIDATE_ITEM_GENERAL_ID(value); if ( this.FORM_TRIGGER_FAILURE) return; 
 this.formValidationChangedOutput.emit(this.form.valid); 
  
 } 
 async onValueChange_APP_ID(value) { 
  this.FORM_TRIGGER_FAILURE = false;	
 await this.WHEN_VALIDATE_ITEM_APP_ID(value); if ( this.FORM_TRIGGER_FAILURE) return; 
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
 async onValueChange_TEXT_COLOR(value) { 
  this.FORM_TRIGGER_FAILURE = false;	
 await this.WHEN_VALIDATE_ITEM_TEXT_COLOR(value); if ( this.FORM_TRIGGER_FAILURE) return; 
 this.formValidationChangedOutput.emit(this.form.valid); 
  
  } 
 async onValueChange_BACKGROUND_COLOR(value) { 
  this.FORM_TRIGGER_FAILURE = false;	
 await this.WHEN_VALIDATE_ITEM_BACKGROUND_COLOR(value); if ( this.FORM_TRIGGER_FAILURE) return; 
 this.formValidationChangedOutput.emit(this.form.valid); 
  
  } 
 async onValueChange_LIST_BACKGROUD_COLOR(value) { 
  this.FORM_TRIGGER_FAILURE = false;	
 await this.WHEN_VALIDATE_ITEM_LIST_BACKGROUD_COLOR(value); if ( this.FORM_TRIGGER_FAILURE) return; 
 this.formValidationChangedOutput.emit(this.form.valid); 
  
  } 
 async onValueChange_FONT(value) { 
  this.FORM_TRIGGER_FAILURE = false;	
 await this.WHEN_VALIDATE_ITEM_FONT(value); if ( this.FORM_TRIGGER_FAILURE) return; 
 this.formValidationChangedOutput.emit(this.form.valid); 
  
  } 
 async onChange_ROOT_AREA(event:any) { 
 var value = event.target.value; 
 if ((value == null) || (value == '')) 	
 	return;  
    this.FORM_TRIGGER_FAILURE = false;	
 await   this.WHEN_VALIDATE_ITEM_ROOT_AREA(value); if ( this.FORM_TRIGGER_FAILURE) return; 
 this.formValidationChangedOutput.emit(this.form.valid); 
  
 } 
 async onChange_SOURCE_FILE_NAME(event:any) { 
 var value = event.target.value; 
 if ((value == null) || (value == '')) 	
 	return;  
    this.FORM_TRIGGER_FAILURE = false;	
 await   this.WHEN_VALIDATE_ITEM_SOURCE_FILE_NAME(value); if ( this.FORM_TRIGGER_FAILURE) return; 
 this.formValidationChangedOutput.emit(this.form.valid); 
  
 } 
 async onValueChange_SOURCE_FILE_STATUS(value) { 
  this.FORM_TRIGGER_FAILURE = false;	
 await this.WHEN_VALIDATE_ITEM_SOURCE_FILE_STATUS(value); if ( this.FORM_TRIGGER_FAILURE) return; 
 this.formValidationChangedOutput.emit(this.form.valid); 
  
  } 
 async onChange_SHOW_TOOLBARS(event:any) { 
 var value = event.target.value; 
 if ((value == null) || (value == '')) 	
 	return;  
    this.FORM_TRIGGER_FAILURE = false;	
 await   this.WHEN_VALIDATE_ITEM_SHOW_TOOLBARS(value); if ( this.FORM_TRIGGER_FAILURE) return; 
 this.formValidationChangedOutput.emit(this.form.valid); 
  
 } 
 async onChange_SHOW_ENABLE_AND_DISABLE_BUTTONS(event:any) { 
 var value = event.target.value; 
 if ((value == null) || (value == '')) 	
 	return;  
    this.FORM_TRIGGER_FAILURE = false;	
 await   this.WHEN_VALIDATE_ITEM_SHOW_ENABLE_AND_DISABLE_BUTTONS(value); if ( this.FORM_TRIGGER_FAILURE) return; 
 this.formValidationChangedOutput.emit(this.form.valid); 
  
 } 
 async onChange_SHOW_UNSUPRESS_AND_SUPRESS_BUTTONS(event:any) { 
 var value = event.target.value; 
 if ((value == null) || (value == '')) 	
 	return;  
    this.FORM_TRIGGER_FAILURE = false;	
 await   this.WHEN_VALIDATE_ITEM_SHOW_UNSUPRESS_AND_SUPRESS_BUTTONS(value); if ( this.FORM_TRIGGER_FAILURE) return; 
 this.formValidationChangedOutput.emit(this.form.valid); 
  
 } 
 async onChange_SHOW_UNSHELVE_AND_SHELVE_BUTTONS(event:any) { 
 var value = event.target.value; 
 if ((value == null) || (value == '')) 	
 	return;  
    this.FORM_TRIGGER_FAILURE = false;	
 await   this.WHEN_VALIDATE_ITEM_SHOW_UNSHELVE_AND_SHELVE_BUTTONS(value); if ( this.FORM_TRIGGER_FAILURE) return; 
 this.formValidationChangedOutput.emit(this.form.valid); 
  
 } 
 async onChange_SHOW_DETAILS_BUTTON(event:any) { 
 var value = event.target.value; 
 if ((value == null) || (value == '')) 	
 	return;  
    this.FORM_TRIGGER_FAILURE = false;	
 await   this.WHEN_VALIDATE_ITEM_SHOW_DETAILS_BUTTON(value); if ( this.FORM_TRIGGER_FAILURE) return; 
 this.formValidationChangedOutput.emit(this.form.valid); 
  
 } 
 async onChange_SHOW_HELP_BUTTON(event:any) { 
 var value = event.target.value; 
 if ((value == null) || (value == '')) 	
 	return;  
    this.FORM_TRIGGER_FAILURE = false;	
 await   this.WHEN_VALIDATE_ITEM_SHOW_HELP_BUTTON(value); if ( this.FORM_TRIGGER_FAILURE) return; 
 this.formValidationChangedOutput.emit(this.form.valid); 
  
 } 
 async onChange_SHOW_AREA_TREE(event:any) { 
 var value = event.target.value; 
 if ((value == null) || (value == '')) 	
 	return;  
    this.FORM_TRIGGER_FAILURE = false;	
 await   this.WHEN_VALIDATE_ITEM_SHOW_AREA_TREE(value); if ( this.FORM_TRIGGER_FAILURE) return; 
 this.formValidationChangedOutput.emit(this.form.valid); 
  
 } 
 async onChange_PANEL_WIDTH(event:any) { 
 var value = event.target.value; 
 if ((value == null) || (value == '')) 	
 	return;  
    this.FORM_TRIGGER_FAILURE = false;	
 await   this.WHEN_VALIDATE_ITEM_PANEL_WIDTH(value); if ( this.FORM_TRIGGER_FAILURE) return; 
 this.formValidationChangedOutput.emit(this.form.valid); 
  
 } 
 async onChange_DISPLAY_ERRORS_IN_DIALOG(event:any) { 
 var value = event.target.value; 
 if ((value == null) || (value == '')) 	
 	return;  
    this.FORM_TRIGGER_FAILURE = false;	
 await   this.WHEN_VALIDATE_ITEM_DISPLAY_ERRORS_IN_DIALOG(value); if ( this.FORM_TRIGGER_FAILURE) return; 
 this.formValidationChangedOutput.emit(this.form.valid); 
  
 } 
 async onValueChange_ICON_STYLE(value) { 
  this.FORM_TRIGGER_FAILURE = false;	
 await this.WHEN_VALIDATE_ITEM_ICON_STYLE(value); if ( this.FORM_TRIGGER_FAILURE) return; 
 this.formValidationChangedOutput.emit(this.form.valid); 
  
  } 
 async onValueChange_SHOW_TIME_STAMPE(value) { 
  this.FORM_TRIGGER_FAILURE = false;	
 await this.WHEN_VALIDATE_ITEM_SHOW_TIME_STAMPE(value); if ( this.FORM_TRIGGER_FAILURE) return; 
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


