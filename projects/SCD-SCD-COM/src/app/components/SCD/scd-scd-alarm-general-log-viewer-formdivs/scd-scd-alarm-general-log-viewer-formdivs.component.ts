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
import { scdalarmGeneralLogViewerScdScdAlarmGeneralLogViewerFormdivs , componentConfigDef} from '@modeldir/model';


 const createFormGroup = (dataItem:any) => new FormGroup({
'GENERAL_ID' : new FormControl(dataItem.GENERAL_ID  , ) ,
'SHAPE_ID' : new FormControl(dataItem.SHAPE_ID  ,   Validators.required ) ,
'SELECT_LOG' : new FormControl(dataItem.SELECT_LOG  , ) ,
'TEXT_COLOR' : new FormControl(dataItem.TEXT_COLOR  , ) ,
'BACKGROUND_COLOR' : new FormControl(dataItem.BACKGROUND_COLOR  , ) ,
'TEXT_COLOR_CH' : new FormControl(dataItem.TEXT_COLOR_CH  , ) ,
'BACKGROUND_COLOR_CH' : new FormControl(dataItem.BACKGROUND_COLOR_CH  , ) ,
'SELECTION_FOREGROUND_COLOR' : new FormControl(dataItem.SELECTION_FOREGROUND_COLOR  , ) ,
'SELECTION_BACKGROUND_COLOR' : new FormControl(dataItem.SELECTION_BACKGROUND_COLOR  , ) ,
'LINE_COLOR' : new FormControl(dataItem.LINE_COLOR  , ) ,
'BACKGROUND_COLOR_GRID' : new FormControl(dataItem.BACKGROUND_COLOR_GRID  , ) ,
'TEXT_COLOR_DP' : new FormControl(dataItem.TEXT_COLOR_DP  , ) ,
'BACKGROUND_COLOR_DP' : new FormControl(dataItem.BACKGROUND_COLOR_DP  , ) ,
'HEIGHT_PERCENT' : new FormControl(dataItem.HEIGHT_PERCENT  , ) ,
'DETAIL_POINT_FONT' : new FormControl(dataItem.DETAIL_POINT_FONT  , ) ,
'TEXT_FONT' : new FormControl(dataItem.TEXT_FONT  , ) ,
'DISPLAY_REPORT_ON_STARTUP' : new FormControl(dataItem.DISPLAY_REPORT_ON_STARTUP  , ) ,
'ALLOW_DETAILS_APNE_TO_BE_ADJUSTED' : new FormControl(dataItem.ALLOW_DETAILS_APNE_TO_BE_ADJUSTED  , ) ,
'HORIZONTAL_GRID_LINES' : new FormControl(dataItem.HORIZONTAL_GRID_LINES  , ) ,
'VERTICA_GRIDLINES' : new FormControl(dataItem.VERTICA_GRIDLINES  , ) ,
'TOOLBAR' : new FormControl(dataItem.TOOLBAR  , ) ,
'DETAIL_PANS' : new FormControl(dataItem.DETAIL_PANS  , ) ,
'STATUS_BAR' : new FormControl(dataItem.STATUS_BAR  , ) ,
'TOOLTIPS' : new FormControl(dataItem.TOOLTIPS  , ) ,
'ICON_STYLE' : new FormControl(dataItem.ICON_STYLE  , ) 
});

declare function getParamConfig():any;
@Component({
  selector: 'app-scd-scd-alarm-general-log-viewer-formdivs',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './scd-scd-alarm-general-log-viewer-formdivs.component.html',
  styleUrls: ['./scd-scd-alarm-general-log-viewer-formdivs.component.scss'],
  standalone: false
})


export class ScdAlarmGeneralLogViewerScdScdAlarmGeneralLogViewerFormdivsFormdivsComponent {
  public title =  this.starServices.getNLS([],"SCD_SCD_ALARM_GENERAL_LOG_VIEWER_FORMDIVS.scdalarmGeneralLogViewerScdScdAlarmGeneralLogViewerFormdivs.component_title","SCD ALARM GENERAL LOG VIEWER FORMDIVS");
  public compTitleMsg =  "SCD_SCD_ALARM_GENERAL_LOG_VIEWER_FORMDIVS.scdalarmGeneralLogViewerScdScdAlarmGeneralLogViewerFormdivs";
  public routineName = "ScdAlarmGeneralLogViewerScdScdAlarmGeneralLogViewerFormdivsFormdivs";
  private insertCMD = "INSERT_SCD_ALARM_GENERAL_LOG_VIEWER";
  private updateCMD = "UPDATE_SCD_ALARM_GENERAL_LOG_VIEWER";
  private deleteCMD =   "DELETE_SCD_ALARM_GENERAL_LOG_VIEWER";
  private getCMD = "GET_SCD_ALARM_GENERAL_LOG_VIEWER_QUERY";

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
  public  isSHAPE_IDEnable : boolean = true;

  public FORM_TRIGGER_FAILURE:any;
  public NOTFOUND:any;
  public disableEmitSave = false;
  public disableEmitReadCompleted = false;
  public children = ["any"];

  public action = "";
  private Body:any =[];
  public isNew!: boolean;
  public primarKeyReadOnlyArr = {isGENERAL_IDreadOnly : false , isSHAPE_IDreadOnly : false};  
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
  public compSelector = 'app-scd-scd-alarm-general-log-viewer-formdivs';
  public PK_AUTO = 'GENERAL_ID';
  public customerFacing = false;
  public FormStepsArr = [{"CODE":"","CODETEXT_LANG":"","visible":true},{"CODE":"1","CODETEXT_LANG":"Alarm and event log","visible":true},{"CODE":"2","CODETEXT_LANG":"Toolbar","visible":true},{"CODE":"3","CODETEXT_LANG":"Column headings","visible":true},{"CODE":"4","CODETEXT_LANG":"Row text","visible":true},{"CODE":"5","CODETEXT_LANG":"Grid","visible":true},{"CODE":"6","CODETEXT_LANG":"Details pane","visible":true},{"CODE":"7","CODETEXT_LANG":"Fonts","visible":true},{"CODE":"8","CODETEXT_LANG":"Behavior","visible":true},{"CODE":"9","CODETEXT_LANG":"Show","visible":true}] ;
public labelGENERAL_IDTop=false;
public labelGENERAL_IDVisible=true;
public labelSHAPE_IDTop=false;
public labelSHAPE_IDVisible=true;
public labelSELECT_LOGTop=false;
public labelSELECT_LOGVisible=true;
public labelTEXT_COLORTop=false;
public labelTEXT_COLORVisible=true;
public labelBACKGROUND_COLORTop=false;
public labelBACKGROUND_COLORVisible=true;
public labelTEXT_COLOR_CHTop=false;
public labelTEXT_COLOR_CHVisible=true;
public labelBACKGROUND_COLOR_CHTop=false;
public labelBACKGROUND_COLOR_CHVisible=true;
public labelSELECTION_FOREGROUND_COLORTop=false;
public labelSELECTION_FOREGROUND_COLORVisible=true;
public labelSELECTION_BACKGROUND_COLORTop=false;
public labelSELECTION_BACKGROUND_COLORVisible=true;
public labelLINE_COLORTop=false;
public labelLINE_COLORVisible=true;
public labelBACKGROUND_COLOR_GRIDTop=false;
public labelBACKGROUND_COLOR_GRIDVisible=true;
public labelTEXT_COLOR_DPTop=false;
public labelTEXT_COLOR_DPVisible=true;
public labelBACKGROUND_COLOR_DPTop=false;
public labelBACKGROUND_COLOR_DPVisible=true;
public labelHEIGHT_PERCENTTop=false;
public labelHEIGHT_PERCENTVisible=true;
public labelDETAIL_POINT_FONTTop=false;
public labelDETAIL_POINT_FONTVisible=true;
public labelTEXT_FONTTop=false;
public labelTEXT_FONTVisible=true;
public labelDISPLAY_REPORT_ON_STARTUPTop=false;
public labelDISPLAY_REPORT_ON_STARTUPVisible=true;
public labelALLOW_DETAILS_APNE_TO_BE_ADJUSTEDTop=false;
public labelALLOW_DETAILS_APNE_TO_BE_ADJUSTEDVisible=true;
public labelHORIZONTAL_GRID_LINESTop=false;
public labelHORIZONTAL_GRID_LINESVisible=true;
public labelVERTICA_GRIDLINESTop=false;
public labelVERTICA_GRIDLINESVisible=true;
public labelTOOLBARTop=false;
public labelTOOLBARVisible=true;
public labelDETAIL_PANSTop=false;
public labelDETAIL_PANSVisible=true;
public labelSTATUS_BARTop=false;
public labelSTATUS_BARVisible=true;
public labelTOOLTIPSTop=false;
public labelTOOLTIPSVisible=true;
public labelICON_STYLETop=false;
public labelICON_STYLEVisible=true;

public visibleGENERAL_ID = true;
public visibleSHAPE_ID = true;
public visibleSELECT_LOG = true;
public visibleTEXT_COLOR = true;
public visibleBACKGROUND_COLOR = true;
public visibleTEXT_COLOR_CH = true;
public visibleBACKGROUND_COLOR_CH = true;
public visibleSELECTION_FOREGROUND_COLOR = true;
public visibleSELECTION_BACKGROUND_COLOR = true;
public visibleLINE_COLOR = true;
public visibleBACKGROUND_COLOR_GRID = true;
public visibleTEXT_COLOR_DP = true;
public visibleBACKGROUND_COLOR_DP = true;
public visibleHEIGHT_PERCENT = true;
public visibleDETAIL_POINT_FONT = true;
public visibleTEXT_FONT = true;
public visibleDISPLAY_REPORT_ON_STARTUP = true;
public visibleALLOW_DETAILS_APNE_TO_BE_ADJUSTED = true;
public visibleHORIZONTAL_GRID_LINES = true;
public visibleVERTICA_GRIDLINES = true;
public visibleTOOLBAR = true;
public visibleDETAIL_PANS = true;
public visibleSTATUS_BAR = true;
public visibleTOOLTIPS = true;
public visibleICON_STYLE = true;

public disableGENERAL_ID = false;
public disableSHAPE_ID = false;
public disableSELECT_LOG = false;
public disableTEXT_COLOR = false;
public disableBACKGROUND_COLOR = false;
public disableTEXT_COLOR_CH = false;
public disableBACKGROUND_COLOR_CH = false;
public disableSELECTION_FOREGROUND_COLOR = false;
public disableSELECTION_BACKGROUND_COLOR = false;
public disableLINE_COLOR = false;
public disableBACKGROUND_COLOR_GRID = false;
public disableTEXT_COLOR_DP = false;
public disableBACKGROUND_COLOR_DP = false;
public disableHEIGHT_PERCENT = false;
public disableDETAIL_POINT_FONT = false;
public disableTEXT_FONT = false;
public disableDISPLAY_REPORT_ON_STARTUP = false;
public disableALLOW_DETAILS_APNE_TO_BE_ADJUSTED = false;
public disableHORIZONTAL_GRID_LINES = false;
public disableVERTICA_GRIDLINES = false;
public disableTOOLBAR = false;
public disableDETAIL_PANS = false;
public disableSTATUS_BAR = false;
public disableTOOLTIPS = false;
public disableICON_STYLE = false;


  
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

  private formInitialValues:any =   new scdalarmGeneralLogViewerScdScdAlarmGeneralLogViewerFormdivs();   
    @Input() public set detail_Input(form: any) {
       if (typeof form != "undefined"){
        this.isSearch = true;
        this.executeQuery(form);
        this.isChild = true;
      }
      /*
    if (this.paramConfig.DEBUG_FLAG) console.log('detail_Input ScdAlarmGeneralLogViewerScdScdAlarmGeneralLogViewerFormdivsFormdivs form.SHAPE_ID :' + form.SHAPE_ID);
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
this.lookupArrDef =[	{"statment":"SELECT CODE, CODETEXT_LANG, CODEVALUE_LANG FROM SOM_TABS_CODES         WHERE CODENAME ='LOG_VIEWER_STEPS' and LANGUAGE_NAME = '" + this.userLang + "' order by CODE",
			"lkpArrName":"FormStepsArr"},
	{"statment":"SELECT CODE, CODETEXT_LANG, CODEVALUE_LANG FROM SOM_TABS_CODES WHERE CODENAME ='SHAPE_ID' and LANGUAGE_NAME = '" + this.userLang + "' order by CODETEXT_LANG",
			"lkpArrName":"lkpArrSHAPE_ID"},
	{"statment":"SELECT CODE, CODETEXT_LANG , PARTCODE FROM SOM_TABS_CODES WHERE CODENAME = \"SELECT_LOG\"  and LANGUAGE_NAME = '" + this.userLang + "' order by CODETEXT_LANG ",
			"lkpArrName":"lkpArrSELECT_LOG"},
	{"statment":"SELECT CODE, CODETEXT_LANG , PARTCODE FROM SOM_TABS_CODES WHERE CODENAME = \"ICON_STYLE\"  and LANGUAGE_NAME = '" + this.userLang + "' order by CODETEXT_LANG ",
			"lkpArrName":"lkpArrICON_STYLE"}];
 if (this.lookupArrDef.length > 0)
   this.starServices.fetchLookups(this, this.lookupArrDef);
}

public lkpArrSHAPE_ID = [];

public lkpArrSELECT_LOG = [];

public lkpArrICON_STYLE = [];

public lkpArrGetSHAPE_ID(CODE: any): any {
var rec = this.lkpArrSHAPE_ID.find((x:any) => x.CODE === CODE);
return rec;
}

public lkpArrGetSELECT_LOG(CODE: any): any {
var rec = this.lkpArrSELECT_LOG.find((x:any) => x.CODE === CODE);
return rec;
}

public lkpArrGetICON_STYLE(CODE: any): any {
var rec = this.lkpArrICON_STYLE.find((x:any) => x.CODE === CODE);
return rec;
}

onChanges(): void {
this.form.get('GENERAL_ID').valueChanges.subscribe(val => {
});
this.form.get('HEIGHT_PERCENT').valueChanges.subscribe(val => {
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
      if (this.paramConfig.DEBUG_FLAG) console.log("ScdAlarmGeneralLogViewerScdScdAlarmGeneralLogViewerFormdivsFormdivs ComponentConfig:", {...ComponentConfig});

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

async WHEN_VALIDATE_ITEM_SELECT_LOG(value) {

 this.FORM_TRIGGER_FAILURE = false ; 
 if (typeof this.form.controls['SELECT_LOG'] != "undefined" ) 
      this.form.controls['SELECT_LOG'].setErrors({invalid: true}); 
 // Code goes here 
 

 if ( this.FORM_TRIGGER_FAILURE == true) 
 return; 
 
 if (typeof this.form.controls['SELECT_LOG'] != "undefined" ) 
     this.form.get('SELECT_LOG').updateValueAndValidity();
 this.form.updateValueAndValidity(); 
 }

 async ON_CLICK_SELECT_LOG(event){

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

async WHEN_VALIDATE_ITEM_TEXT_COLOR_CH(value) {

 this.FORM_TRIGGER_FAILURE = false ; 
 if (typeof this.form.controls['TEXT_COLOR_CH'] != "undefined" ) 
      this.form.controls['TEXT_COLOR_CH'].setErrors({invalid: true}); 
 // Code goes here 
 

 if ( this.FORM_TRIGGER_FAILURE == true) 
 return; 
 
 if (typeof this.form.controls['TEXT_COLOR_CH'] != "undefined" ) 
     this.form.get('TEXT_COLOR_CH').updateValueAndValidity();
 this.form.updateValueAndValidity(); 
 }

 async ON_CLICK_TEXT_COLOR_CH(event){

}

async WHEN_VALIDATE_ITEM_BACKGROUND_COLOR_CH(value) {

 this.FORM_TRIGGER_FAILURE = false ; 
 if (typeof this.form.controls['BACKGROUND_COLOR_CH'] != "undefined" ) 
      this.form.controls['BACKGROUND_COLOR_CH'].setErrors({invalid: true}); 
 // Code goes here 
 

 if ( this.FORM_TRIGGER_FAILURE == true) 
 return; 
 
 if (typeof this.form.controls['BACKGROUND_COLOR_CH'] != "undefined" ) 
     this.form.get('BACKGROUND_COLOR_CH').updateValueAndValidity();
 this.form.updateValueAndValidity(); 
 }

 async ON_CLICK_BACKGROUND_COLOR_CH(event){

}

async WHEN_VALIDATE_ITEM_SELECTION_FOREGROUND_COLOR(value) {

 this.FORM_TRIGGER_FAILURE = false ; 
 if (typeof this.form.controls['SELECTION_FOREGROUND_COLOR'] != "undefined" ) 
      this.form.controls['SELECTION_FOREGROUND_COLOR'].setErrors({invalid: true}); 
 // Code goes here 
 

 if ( this.FORM_TRIGGER_FAILURE == true) 
 return; 
 
 if (typeof this.form.controls['SELECTION_FOREGROUND_COLOR'] != "undefined" ) 
     this.form.get('SELECTION_FOREGROUND_COLOR').updateValueAndValidity();
 this.form.updateValueAndValidity(); 
 }

 async ON_CLICK_SELECTION_FOREGROUND_COLOR(event){

}

async WHEN_VALIDATE_ITEM_SELECTION_BACKGROUND_COLOR(value) {

 this.FORM_TRIGGER_FAILURE = false ; 
 if (typeof this.form.controls['SELECTION_BACKGROUND_COLOR'] != "undefined" ) 
      this.form.controls['SELECTION_BACKGROUND_COLOR'].setErrors({invalid: true}); 
 // Code goes here 
 

 if ( this.FORM_TRIGGER_FAILURE == true) 
 return; 
 
 if (typeof this.form.controls['SELECTION_BACKGROUND_COLOR'] != "undefined" ) 
     this.form.get('SELECTION_BACKGROUND_COLOR').updateValueAndValidity();
 this.form.updateValueAndValidity(); 
 }

 async ON_CLICK_SELECTION_BACKGROUND_COLOR(event){

}

async WHEN_VALIDATE_ITEM_LINE_COLOR(value) {

 this.FORM_TRIGGER_FAILURE = false ; 
 if (typeof this.form.controls['LINE_COLOR'] != "undefined" ) 
      this.form.controls['LINE_COLOR'].setErrors({invalid: true}); 
 // Code goes here 
 

 if ( this.FORM_TRIGGER_FAILURE == true) 
 return; 
 
 if (typeof this.form.controls['LINE_COLOR'] != "undefined" ) 
     this.form.get('LINE_COLOR').updateValueAndValidity();
 this.form.updateValueAndValidity(); 
 }

 async ON_CLICK_LINE_COLOR(event){

}

async WHEN_VALIDATE_ITEM_BACKGROUND_COLOR_GRID(value) {

 this.FORM_TRIGGER_FAILURE = false ; 
 if (typeof this.form.controls['BACKGROUND_COLOR_GRID'] != "undefined" ) 
      this.form.controls['BACKGROUND_COLOR_GRID'].setErrors({invalid: true}); 
 // Code goes here 
 

 if ( this.FORM_TRIGGER_FAILURE == true) 
 return; 
 
 if (typeof this.form.controls['BACKGROUND_COLOR_GRID'] != "undefined" ) 
     this.form.get('BACKGROUND_COLOR_GRID').updateValueAndValidity();
 this.form.updateValueAndValidity(); 
 }

 async ON_CLICK_BACKGROUND_COLOR_GRID(event){

}

async WHEN_VALIDATE_ITEM_TEXT_COLOR_DP(value) {

 this.FORM_TRIGGER_FAILURE = false ; 
 if (typeof this.form.controls['TEXT_COLOR_DP'] != "undefined" ) 
      this.form.controls['TEXT_COLOR_DP'].setErrors({invalid: true}); 
 // Code goes here 
 

 if ( this.FORM_TRIGGER_FAILURE == true) 
 return; 
 
 if (typeof this.form.controls['TEXT_COLOR_DP'] != "undefined" ) 
     this.form.get('TEXT_COLOR_DP').updateValueAndValidity();
 this.form.updateValueAndValidity(); 
 }

 async ON_CLICK_TEXT_COLOR_DP(event){

}

async WHEN_VALIDATE_ITEM_BACKGROUND_COLOR_DP(value) {

 this.FORM_TRIGGER_FAILURE = false ; 
 if (typeof this.form.controls['BACKGROUND_COLOR_DP'] != "undefined" ) 
      this.form.controls['BACKGROUND_COLOR_DP'].setErrors({invalid: true}); 
 // Code goes here 
 

 if ( this.FORM_TRIGGER_FAILURE == true) 
 return; 
 
 if (typeof this.form.controls['BACKGROUND_COLOR_DP'] != "undefined" ) 
     this.form.get('BACKGROUND_COLOR_DP').updateValueAndValidity();
 this.form.updateValueAndValidity(); 
 }

 async ON_CLICK_BACKGROUND_COLOR_DP(event){

}

async WHEN_VALIDATE_ITEM_HEIGHT_PERCENT(value) {

 this.FORM_TRIGGER_FAILURE = false ; 
 if (typeof this.form.controls['HEIGHT_PERCENT'] != "undefined" ) 
      this.form.controls['HEIGHT_PERCENT'].setErrors({invalid: true}); 
 // Code goes here 
 

 if ( this.FORM_TRIGGER_FAILURE == true) 
 return; 
 
 if (typeof this.form.controls['HEIGHT_PERCENT'] != "undefined" ) 
     this.form.get('HEIGHT_PERCENT').updateValueAndValidity();
 this.form.updateValueAndValidity(); 
 }

 async ON_CLICK_HEIGHT_PERCENT(event){

}

async WHEN_VALIDATE_ITEM_DETAIL_POINT_FONT(value) {

 this.FORM_TRIGGER_FAILURE = false ; 
 if (typeof this.form.controls['DETAIL_POINT_FONT'] != "undefined" ) 
      this.form.controls['DETAIL_POINT_FONT'].setErrors({invalid: true}); 
 // Code goes here 
 

 if ( this.FORM_TRIGGER_FAILURE == true) 
 return; 
 
 if (typeof this.form.controls['DETAIL_POINT_FONT'] != "undefined" ) 
     this.form.get('DETAIL_POINT_FONT').updateValueAndValidity();
 this.form.updateValueAndValidity(); 
 }

 async ON_CLICK_DETAIL_POINT_FONT(event){

}

async WHEN_VALIDATE_ITEM_TEXT_FONT(value) {

 this.FORM_TRIGGER_FAILURE = false ; 
 if (typeof this.form.controls['TEXT_FONT'] != "undefined" ) 
      this.form.controls['TEXT_FONT'].setErrors({invalid: true}); 
 // Code goes here 
 

 if ( this.FORM_TRIGGER_FAILURE == true) 
 return; 
 
 if (typeof this.form.controls['TEXT_FONT'] != "undefined" ) 
     this.form.get('TEXT_FONT').updateValueAndValidity();
 this.form.updateValueAndValidity(); 
 }

 async ON_CLICK_TEXT_FONT(event){

}

async WHEN_VALIDATE_ITEM_DISPLAY_REPORT_ON_STARTUP(value) {

 this.FORM_TRIGGER_FAILURE = false ; 
 if (typeof this.form.controls['DISPLAY_REPORT_ON_STARTUP'] != "undefined" ) 
      this.form.controls['DISPLAY_REPORT_ON_STARTUP'].setErrors({invalid: true}); 
 // Code goes here 
 

 if ( this.FORM_TRIGGER_FAILURE == true) 
 return; 
 
 if (typeof this.form.controls['DISPLAY_REPORT_ON_STARTUP'] != "undefined" ) 
     this.form.get('DISPLAY_REPORT_ON_STARTUP').updateValueAndValidity();
 this.form.updateValueAndValidity(); 
 }

 async ON_CLICK_DISPLAY_REPORT_ON_STARTUP(event){

}

async WHEN_VALIDATE_ITEM_ALLOW_DETAILS_APNE_TO_BE_ADJUSTED(value) {

 this.FORM_TRIGGER_FAILURE = false ; 
 if (typeof this.form.controls['ALLOW_DETAILS_APNE_TO_BE_ADJUSTED'] != "undefined" ) 
      this.form.controls['ALLOW_DETAILS_APNE_TO_BE_ADJUSTED'].setErrors({invalid: true}); 
 // Code goes here 
 

 if ( this.FORM_TRIGGER_FAILURE == true) 
 return; 
 
 if (typeof this.form.controls['ALLOW_DETAILS_APNE_TO_BE_ADJUSTED'] != "undefined" ) 
     this.form.get('ALLOW_DETAILS_APNE_TO_BE_ADJUSTED').updateValueAndValidity();
 this.form.updateValueAndValidity(); 
 }

 async ON_CLICK_ALLOW_DETAILS_APNE_TO_BE_ADJUSTED(event){

}

async WHEN_VALIDATE_ITEM_HORIZONTAL_GRID_LINES(value) {

 this.FORM_TRIGGER_FAILURE = false ; 
 if (typeof this.form.controls['HORIZONTAL_GRID_LINES'] != "undefined" ) 
      this.form.controls['HORIZONTAL_GRID_LINES'].setErrors({invalid: true}); 
 // Code goes here 
 

 if ( this.FORM_TRIGGER_FAILURE == true) 
 return; 
 
 if (typeof this.form.controls['HORIZONTAL_GRID_LINES'] != "undefined" ) 
     this.form.get('HORIZONTAL_GRID_LINES').updateValueAndValidity();
 this.form.updateValueAndValidity(); 
 }

 async ON_CLICK_HORIZONTAL_GRID_LINES(event){

}

async WHEN_VALIDATE_ITEM_VERTICA_GRIDLINES(value) {

 this.FORM_TRIGGER_FAILURE = false ; 
 if (typeof this.form.controls['VERTICA_GRIDLINES'] != "undefined" ) 
      this.form.controls['VERTICA_GRIDLINES'].setErrors({invalid: true}); 
 // Code goes here 
 

 if ( this.FORM_TRIGGER_FAILURE == true) 
 return; 
 
 if (typeof this.form.controls['VERTICA_GRIDLINES'] != "undefined" ) 
     this.form.get('VERTICA_GRIDLINES').updateValueAndValidity();
 this.form.updateValueAndValidity(); 
 }

 async ON_CLICK_VERTICA_GRIDLINES(event){

}

async WHEN_VALIDATE_ITEM_TOOLBAR(value) {

 this.FORM_TRIGGER_FAILURE = false ; 
 if (typeof this.form.controls['TOOLBAR'] != "undefined" ) 
      this.form.controls['TOOLBAR'].setErrors({invalid: true}); 
 // Code goes here 
 

 if ( this.FORM_TRIGGER_FAILURE == true) 
 return; 
 
 if (typeof this.form.controls['TOOLBAR'] != "undefined" ) 
     this.form.get('TOOLBAR').updateValueAndValidity();
 this.form.updateValueAndValidity(); 
 }

 async ON_CLICK_TOOLBAR(event){

}

async WHEN_VALIDATE_ITEM_DETAIL_PANS(value) {

 this.FORM_TRIGGER_FAILURE = false ; 
 if (typeof this.form.controls['DETAIL_PANS'] != "undefined" ) 
      this.form.controls['DETAIL_PANS'].setErrors({invalid: true}); 
 // Code goes here 
 

 if ( this.FORM_TRIGGER_FAILURE == true) 
 return; 
 
 if (typeof this.form.controls['DETAIL_PANS'] != "undefined" ) 
     this.form.get('DETAIL_PANS').updateValueAndValidity();
 this.form.updateValueAndValidity(); 
 }

 async ON_CLICK_DETAIL_PANS(event){

}

async WHEN_VALIDATE_ITEM_STATUS_BAR(value) {

 this.FORM_TRIGGER_FAILURE = false ; 
 if (typeof this.form.controls['STATUS_BAR'] != "undefined" ) 
      this.form.controls['STATUS_BAR'].setErrors({invalid: true}); 
 // Code goes here 
 

 if ( this.FORM_TRIGGER_FAILURE == true) 
 return; 
 
 if (typeof this.form.controls['STATUS_BAR'] != "undefined" ) 
     this.form.get('STATUS_BAR').updateValueAndValidity();
 this.form.updateValueAndValidity(); 
 }

 async ON_CLICK_STATUS_BAR(event){

}

async WHEN_VALIDATE_ITEM_TOOLTIPS(value) {

 this.FORM_TRIGGER_FAILURE = false ; 
 if (typeof this.form.controls['TOOLTIPS'] != "undefined" ) 
      this.form.controls['TOOLTIPS'].setErrors({invalid: true}); 
 // Code goes here 
 

 if ( this.FORM_TRIGGER_FAILURE == true) 
 return; 
 
 if (typeof this.form.controls['TOOLTIPS'] != "undefined" ) 
     this.form.get('TOOLTIPS').updateValueAndValidity();
 this.form.updateValueAndValidity(); 
 }

 async ON_CLICK_TOOLTIPS(event){

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
 
 async onChange_GENERAL_ID(event:any) { 
 var value = event.target.value; 
 if ((value == null) || (value == '')) 	
 	return;  
    this.FORM_TRIGGER_FAILURE = false;	
 await   this.WHEN_VALIDATE_ITEM_GENERAL_ID(value); if ( this.FORM_TRIGGER_FAILURE) return; 
 this.formValidationChangedOutput.emit(this.form.valid); 
  
 } 
 async onValueChange_SHAPE_ID(value) { 
  this.FORM_TRIGGER_FAILURE = false;	
 await this.WHEN_VALIDATE_ITEM_SHAPE_ID(value); if ( this.FORM_TRIGGER_FAILURE) return; 
 this.formValidationChangedOutput.emit(this.form.valid); 
  
  } 
 async onValueChange_SELECT_LOG(value) { 
  this.FORM_TRIGGER_FAILURE = false;	
 await this.WHEN_VALIDATE_ITEM_SELECT_LOG(value); if ( this.FORM_TRIGGER_FAILURE) return; 
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
 async onValueChange_TEXT_COLOR_CH(value) { 
  this.FORM_TRIGGER_FAILURE = false;	
 await this.WHEN_VALIDATE_ITEM_TEXT_COLOR_CH(value); if ( this.FORM_TRIGGER_FAILURE) return; 
 this.formValidationChangedOutput.emit(this.form.valid); 
  
  } 
 async onValueChange_BACKGROUND_COLOR_CH(value) { 
  this.FORM_TRIGGER_FAILURE = false;	
 await this.WHEN_VALIDATE_ITEM_BACKGROUND_COLOR_CH(value); if ( this.FORM_TRIGGER_FAILURE) return; 
 this.formValidationChangedOutput.emit(this.form.valid); 
  
  } 
 async onValueChange_SELECTION_FOREGROUND_COLOR(value) { 
  this.FORM_TRIGGER_FAILURE = false;	
 await this.WHEN_VALIDATE_ITEM_SELECTION_FOREGROUND_COLOR(value); if ( this.FORM_TRIGGER_FAILURE) return; 
 this.formValidationChangedOutput.emit(this.form.valid); 
  
  } 
 async onValueChange_SELECTION_BACKGROUND_COLOR(value) { 
  this.FORM_TRIGGER_FAILURE = false;	
 await this.WHEN_VALIDATE_ITEM_SELECTION_BACKGROUND_COLOR(value); if ( this.FORM_TRIGGER_FAILURE) return; 
 this.formValidationChangedOutput.emit(this.form.valid); 
  
  } 
 async onValueChange_LINE_COLOR(value) { 
  this.FORM_TRIGGER_FAILURE = false;	
 await this.WHEN_VALIDATE_ITEM_LINE_COLOR(value); if ( this.FORM_TRIGGER_FAILURE) return; 
 this.formValidationChangedOutput.emit(this.form.valid); 
  
  } 
 async onValueChange_BACKGROUND_COLOR_GRID(value) { 
  this.FORM_TRIGGER_FAILURE = false;	
 await this.WHEN_VALIDATE_ITEM_BACKGROUND_COLOR_GRID(value); if ( this.FORM_TRIGGER_FAILURE) return; 
 this.formValidationChangedOutput.emit(this.form.valid); 
  
  } 
 async onValueChange_TEXT_COLOR_DP(value) { 
  this.FORM_TRIGGER_FAILURE = false;	
 await this.WHEN_VALIDATE_ITEM_TEXT_COLOR_DP(value); if ( this.FORM_TRIGGER_FAILURE) return; 
 this.formValidationChangedOutput.emit(this.form.valid); 
  
  } 
 async onValueChange_BACKGROUND_COLOR_DP(value) { 
  this.FORM_TRIGGER_FAILURE = false;	
 await this.WHEN_VALIDATE_ITEM_BACKGROUND_COLOR_DP(value); if ( this.FORM_TRIGGER_FAILURE) return; 
 this.formValidationChangedOutput.emit(this.form.valid); 
  
  } 
 async onChange_HEIGHT_PERCENT(event:any) { 
 var value = event.target.value; 
 if ((value == null) || (value == '')) 	
 	return;  
    this.FORM_TRIGGER_FAILURE = false;	
 await   this.WHEN_VALIDATE_ITEM_HEIGHT_PERCENT(value); if ( this.FORM_TRIGGER_FAILURE) return; 
 this.formValidationChangedOutput.emit(this.form.valid); 
  
 } 
 async onValueChange_DETAIL_POINT_FONT(value) { 
  this.FORM_TRIGGER_FAILURE = false;	
 await this.WHEN_VALIDATE_ITEM_DETAIL_POINT_FONT(value); if ( this.FORM_TRIGGER_FAILURE) return; 
 this.formValidationChangedOutput.emit(this.form.valid); 
  
  } 
 async onValueChange_TEXT_FONT(value) { 
  this.FORM_TRIGGER_FAILURE = false;	
 await this.WHEN_VALIDATE_ITEM_TEXT_FONT(value); if ( this.FORM_TRIGGER_FAILURE) return; 
 this.formValidationChangedOutput.emit(this.form.valid); 
  
  } 
 async onChange_DISPLAY_REPORT_ON_STARTUP(event:any) { 
 var value = event.target.value; 
 if ((value == null) || (value == '')) 	
 	return;  
    this.FORM_TRIGGER_FAILURE = false;	
 await   this.WHEN_VALIDATE_ITEM_DISPLAY_REPORT_ON_STARTUP(value); if ( this.FORM_TRIGGER_FAILURE) return; 
 this.formValidationChangedOutput.emit(this.form.valid); 
  
 } 
 async onChange_ALLOW_DETAILS_APNE_TO_BE_ADJUSTED(event:any) { 
 var value = event.target.value; 
 if ((value == null) || (value == '')) 	
 	return;  
    this.FORM_TRIGGER_FAILURE = false;	
 await   this.WHEN_VALIDATE_ITEM_ALLOW_DETAILS_APNE_TO_BE_ADJUSTED(value); if ( this.FORM_TRIGGER_FAILURE) return; 
 this.formValidationChangedOutput.emit(this.form.valid); 
  
 } 
 async onChange_HORIZONTAL_GRID_LINES(event:any) { 
 var value = event.target.value; 
 if ((value == null) || (value == '')) 	
 	return;  
    this.FORM_TRIGGER_FAILURE = false;	
 await   this.WHEN_VALIDATE_ITEM_HORIZONTAL_GRID_LINES(value); if ( this.FORM_TRIGGER_FAILURE) return; 
 this.formValidationChangedOutput.emit(this.form.valid); 
  
 } 
 async onChange_VERTICA_GRIDLINES(event:any) { 
 var value = event.target.value; 
 if ((value == null) || (value == '')) 	
 	return;  
    this.FORM_TRIGGER_FAILURE = false;	
 await   this.WHEN_VALIDATE_ITEM_VERTICA_GRIDLINES(value); if ( this.FORM_TRIGGER_FAILURE) return; 
 this.formValidationChangedOutput.emit(this.form.valid); 
  
 } 
 async onChange_TOOLBAR(event:any) { 
 var value = event.target.value; 
 if ((value == null) || (value == '')) 	
 	return;  
    this.FORM_TRIGGER_FAILURE = false;	
 await   this.WHEN_VALIDATE_ITEM_TOOLBAR(value); if ( this.FORM_TRIGGER_FAILURE) return; 
 this.formValidationChangedOutput.emit(this.form.valid); 
  
 } 
 async onChange_DETAIL_PANS(event:any) { 
 var value = event.target.value; 
 if ((value == null) || (value == '')) 	
 	return;  
    this.FORM_TRIGGER_FAILURE = false;	
 await   this.WHEN_VALIDATE_ITEM_DETAIL_PANS(value); if ( this.FORM_TRIGGER_FAILURE) return; 
 this.formValidationChangedOutput.emit(this.form.valid); 
  
 } 
 async onChange_STATUS_BAR(event:any) { 
 var value = event.target.value; 
 if ((value == null) || (value == '')) 	
 	return;  
    this.FORM_TRIGGER_FAILURE = false;	
 await   this.WHEN_VALIDATE_ITEM_STATUS_BAR(value); if ( this.FORM_TRIGGER_FAILURE) return; 
 this.formValidationChangedOutput.emit(this.form.valid); 
  
 } 
 async onChange_TOOLTIPS(event:any) { 
 var value = event.target.value; 
 if ((value == null) || (value == '')) 	
 	return;  
    this.FORM_TRIGGER_FAILURE = false;	
 await   this.WHEN_VALIDATE_ITEM_TOOLTIPS(value); if ( this.FORM_TRIGGER_FAILURE) return; 
 this.formValidationChangedOutput.emit(this.form.valid); 
  
 } 
 async onValueChange_ICON_STYLE(value) { 
  this.FORM_TRIGGER_FAILURE = false;	
 await this.WHEN_VALIDATE_ITEM_ICON_STYLE(value); if ( this.FORM_TRIGGER_FAILURE) return; 
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
public multiselect_arr = ["SELECT_LOG"];
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


