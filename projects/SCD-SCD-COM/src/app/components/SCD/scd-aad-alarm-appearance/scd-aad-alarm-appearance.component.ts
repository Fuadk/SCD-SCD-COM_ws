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
import { scdalarmAppearanceScdAadAlarmAppearance , componentConfigDef} from '@modeldir/model';


 const createFormGroup = (dataItem:any) => new FormGroup({
'GENERAL_ID' : new FormControl(dataItem.GENERAL_ID  , ) ,
'SHAPE_ID' : new FormControl(dataItem.SHAPE_ID  ,   Validators.required ) ,
'COLUMN_HEADINGS_DISPLAYED' : new FormControl(dataItem.COLUMN_HEADINGS_DISPLAYED  , ) ,
'HORIZONTAL_GRID_LINES_DISPLAYED' : new FormControl(dataItem.HORIZONTAL_GRID_LINES_DISPLAYED  , ) ,
'VERTICAL_GRID_LINES_DISPLAYED' : new FormControl(dataItem.VERTICAL_GRID_LINES_DISPLAYED  , ) ,
'HORIZONTAL_SCROLL_BAR' : new FormControl(dataItem.HORIZONTAL_SCROLL_BAR  , ) ,
'VERTICAL_SCROLL_BAR' : new FormControl(dataItem.VERTICAL_SCROLL_BAR  , ) ,
'DETAILS_PANE_DISPLAYED' : new FormControl(dataItem.DETAILS_PANE_DISPLAYED  , ) ,
'TOOLBAR_DISPLAYED' : new FormControl(dataItem.TOOLBAR_DISPLAYED  , ) ,
'STATUS_BAR_DISPLAYED' : new FormControl(dataItem.STATUS_BAR_DISPLAYED  , ) ,
'TOOLTIPS_DISPLAYED' : new FormControl(dataItem.TOOLTIPS_DISPLAYED  , ) ,
'ICON_STYLE' : new FormControl(dataItem.ICON_STYLE  , ) ,
'TEXT_COLOR_CH' : new FormControl(dataItem.TEXT_COLOR_CH  , ) ,
'BKG_COLOR_CH' : new FormControl(dataItem.BKG_COLOR_CH  , ) ,
'FONT_CH' : new FormControl(dataItem.FONT_CH  , ) ,
'SELECTION_FOREGROUND_COLOR' : new FormControl(dataItem.SELECTION_FOREGROUND_COLOR  , ) ,
'SELECTION_BACKGROUND_COLOR' : new FormControl(dataItem.SELECTION_BACKGROUND_COLOR  , ) ,
'FONT_RT' : new FormControl(dataItem.FONT_RT  , ) ,
'LINE_COLOR' : new FormControl(dataItem.LINE_COLOR  , ) ,
'BKG_COLOR_GRID' : new FormControl(dataItem.BKG_COLOR_GRID  , ) ,
'TEXT_COLOR_DP' : new FormControl(dataItem.TEXT_COLOR_DP  , ) ,
'BKG_COLOR_DP' : new FormControl(dataItem.BKG_COLOR_DP  , ) ,
'FONT_DP' : new FormControl(dataItem.FONT_DP  , ) ,
'HEIGHT_PERCENT' : new FormControl(dataItem.HEIGHT_PERCENT  , ) ,
'CONFIG_ALARM_STATUS_EXPLORER' : new FormControl(dataItem.CONFIG_ALARM_STATUS_EXPLORER  , ) ,
'DEFAULT_POINT_FONT' : new FormControl(dataItem.DEFAULT_POINT_FONT  , ) ,
'TEXT_COLOR_TOOLBAR' : new FormControl(dataItem.TEXT_COLOR_TOOLBAR  , ) ,
'BKG_COLOR_TOOLBAR' : new FormControl(dataItem.BKG_COLOR_TOOLBAR  , ) ,
'FONT_TOOLBAR' : new FormControl(dataItem.FONT_TOOLBAR  , ) ,
'ICON_SIZE_TOOLBAR' : new FormControl(dataItem.ICON_SIZE_TOOLBAR  , ) ,
'POSITION' : new FormControl(dataItem.POSITION  , ) ,
'FONT_STATUS_BAR' : new FormControl(dataItem.FONT_STATUS_BAR  , ) ,
'ICON_SIZE_STATUS_BAR' : new FormControl(dataItem.ICON_SIZE_STATUS_BAR  , ) 
});

declare function getParamConfig():any;
@Component({
  selector: 'app-scd-aad-alarm-appearance',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './scd-aad-alarm-appearance.component.html',
  styleUrls: ['./scd-aad-alarm-appearance.component.scss'],
  standalone: false
})


export class ScdAlarmAppearanceScdAadAlarmAppearanceFormdivsComponent {
  public title =  this.starServices.getNLS([],"SCD_AAD_ALARM_APPEARANCE.scdalarmAppearanceScdAadAlarmAppearance.component_title","Alarm Appearance");
  public compTitleMsg =  "SCD_AAD_ALARM_APPEARANCE.scdalarmAppearanceScdAadAlarmAppearance";
  public routineName = "ScdAlarmAppearanceScdAadAlarmAppearanceFormdivs";
  private insertCMD = "INSERT_SCD_ALARM_APPEARANCE";
  private updateCMD = "UPDATE_SCD_ALARM_APPEARANCE";
  private deleteCMD =   "DELETE_SCD_ALARM_APPEARANCE";
  private getCMD = "GET_SCD_ALARM_APPEARANCE_QUERY";

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
  public compSelector = 'app-scd-aad-alarm-appearance';
  public PK_AUTO = 'GENERAL_ID';
  public customerFacing = false;
  public FormStepsArr = [{"CODE":"","CODETEXT_LANG":"","visible":true},{"CODE":"1","CODETEXT_LANG":"Show","visible":true},{"CODE":"2","CODETEXT_LANG":"Columns Headings","visible":true},{"CODE":"3","CODETEXT_LANG":"Row Text","visible":true},{"CODE":"4","CODETEXT_LANG":"Grid","visible":true},{"CODE":"5","CODETEXT_LANG":"Details Pane","visible":true},{"CODE":"6","CODETEXT_LANG":"Toolbar","visible":true},{"CODE":"7","CODETEXT_LANG":"Status Bar","visible":true}] ;
public labelGENERAL_IDTop=false;
public labelGENERAL_IDVisible=true;
public labelSHAPE_IDTop=false;
public labelSHAPE_IDVisible=true;
public labelCOLUMN_HEADINGS_DISPLAYEDTop=false;
public labelCOLUMN_HEADINGS_DISPLAYEDVisible=true;
public labelHORIZONTAL_GRID_LINES_DISPLAYEDTop=false;
public labelHORIZONTAL_GRID_LINES_DISPLAYEDVisible=true;
public labelVERTICAL_GRID_LINES_DISPLAYEDTop=false;
public labelVERTICAL_GRID_LINES_DISPLAYEDVisible=true;
public labelHORIZONTAL_SCROLL_BARTop=false;
public labelHORIZONTAL_SCROLL_BARVisible=true;
public labelVERTICAL_SCROLL_BARTop=false;
public labelVERTICAL_SCROLL_BARVisible=true;
public labelDETAILS_PANE_DISPLAYEDTop=false;
public labelDETAILS_PANE_DISPLAYEDVisible=true;
public labelTOOLBAR_DISPLAYEDTop=false;
public labelTOOLBAR_DISPLAYEDVisible=true;
public labelSTATUS_BAR_DISPLAYEDTop=false;
public labelSTATUS_BAR_DISPLAYEDVisible=true;
public labelTOOLTIPS_DISPLAYEDTop=false;
public labelTOOLTIPS_DISPLAYEDVisible=true;
public labelICON_STYLETop=false;
public labelICON_STYLEVisible=true;
public labelTEXT_COLOR_CHTop=false;
public labelTEXT_COLOR_CHVisible=true;
public labelBKG_COLOR_CHTop=false;
public labelBKG_COLOR_CHVisible=true;
public labelFONT_CHTop=false;
public labelFONT_CHVisible=true;
public labelSELECTION_FOREGROUND_COLORTop=false;
public labelSELECTION_FOREGROUND_COLORVisible=true;
public labelSELECTION_BACKGROUND_COLORTop=false;
public labelSELECTION_BACKGROUND_COLORVisible=true;
public labelFONT_RTTop=false;
public labelFONT_RTVisible=true;
public labelLINE_COLORTop=false;
public labelLINE_COLORVisible=true;
public labelBKG_COLOR_GRIDTop=false;
public labelBKG_COLOR_GRIDVisible=true;
public labelTEXT_COLOR_DPTop=false;
public labelTEXT_COLOR_DPVisible=true;
public labelBKG_COLOR_DPTop=false;
public labelBKG_COLOR_DPVisible=true;
public labelFONT_DPTop=false;
public labelFONT_DPVisible=true;
public labelHEIGHT_PERCENTTop=false;
public labelHEIGHT_PERCENTVisible=true;
public labelCONFIG_ALARM_STATUS_EXPLORERTop=false;
public labelCONFIG_ALARM_STATUS_EXPLORERVisible=true;
public labelDEFAULT_POINT_FONTTop=false;
public labelDEFAULT_POINT_FONTVisible=true;
public labelTEXT_COLOR_TOOLBARTop=false;
public labelTEXT_COLOR_TOOLBARVisible=true;
public labelBKG_COLOR_TOOLBARTop=false;
public labelBKG_COLOR_TOOLBARVisible=true;
public labelFONT_TOOLBARTop=false;
public labelFONT_TOOLBARVisible=true;
public labelICON_SIZE_TOOLBARTop=false;
public labelICON_SIZE_TOOLBARVisible=true;
public labelPOSITIONTop=false;
public labelPOSITIONVisible=true;
public labelFONT_STATUS_BARTop=false;
public labelFONT_STATUS_BARVisible=true;
public labelICON_SIZE_STATUS_BARTop=false;
public labelICON_SIZE_STATUS_BARVisible=true;

public visibleGENERAL_ID = true;
public visibleSHAPE_ID = true;
public visibleCOLUMN_HEADINGS_DISPLAYED = true;
public visibleHORIZONTAL_GRID_LINES_DISPLAYED = true;
public visibleVERTICAL_GRID_LINES_DISPLAYED = true;
public visibleHORIZONTAL_SCROLL_BAR = true;
public visibleVERTICAL_SCROLL_BAR = true;
public visibleDETAILS_PANE_DISPLAYED = true;
public visibleTOOLBAR_DISPLAYED = true;
public visibleSTATUS_BAR_DISPLAYED = true;
public visibleTOOLTIPS_DISPLAYED = true;
public visibleICON_STYLE = true;
public visibleTEXT_COLOR_CH = true;
public visibleBKG_COLOR_CH = true;
public visibleFONT_CH = true;
public visibleSELECTION_FOREGROUND_COLOR = true;
public visibleSELECTION_BACKGROUND_COLOR = true;
public visibleFONT_RT = true;
public visibleLINE_COLOR = true;
public visibleBKG_COLOR_GRID = true;
public visibleTEXT_COLOR_DP = true;
public visibleBKG_COLOR_DP = true;
public visibleFONT_DP = true;
public visibleHEIGHT_PERCENT = true;
public visibleCONFIG_ALARM_STATUS_EXPLORER = true;
public visibleDEFAULT_POINT_FONT = true;
public visibleTEXT_COLOR_TOOLBAR = true;
public visibleBKG_COLOR_TOOLBAR = true;
public visibleFONT_TOOLBAR = true;
public visibleICON_SIZE_TOOLBAR = true;
public visiblePOSITION = true;
public visibleFONT_STATUS_BAR = true;
public visibleICON_SIZE_STATUS_BAR = true;

public disableGENERAL_ID = false;
public disableSHAPE_ID = false;
public disableCOLUMN_HEADINGS_DISPLAYED = false;
public disableHORIZONTAL_GRID_LINES_DISPLAYED = false;
public disableVERTICAL_GRID_LINES_DISPLAYED = false;
public disableHORIZONTAL_SCROLL_BAR = false;
public disableVERTICAL_SCROLL_BAR = false;
public disableDETAILS_PANE_DISPLAYED = false;
public disableTOOLBAR_DISPLAYED = false;
public disableSTATUS_BAR_DISPLAYED = false;
public disableTOOLTIPS_DISPLAYED = false;
public disableICON_STYLE = false;
public disableTEXT_COLOR_CH = false;
public disableBKG_COLOR_CH = false;
public disableFONT_CH = false;
public disableSELECTION_FOREGROUND_COLOR = false;
public disableSELECTION_BACKGROUND_COLOR = false;
public disableFONT_RT = false;
public disableLINE_COLOR = false;
public disableBKG_COLOR_GRID = false;
public disableTEXT_COLOR_DP = false;
public disableBKG_COLOR_DP = false;
public disableFONT_DP = false;
public disableHEIGHT_PERCENT = false;
public disableCONFIG_ALARM_STATUS_EXPLORER = false;
public disableDEFAULT_POINT_FONT = false;
public disableTEXT_COLOR_TOOLBAR = false;
public disableBKG_COLOR_TOOLBAR = false;
public disableFONT_TOOLBAR = false;
public disableICON_SIZE_TOOLBAR = false;
public disablePOSITION = false;
public disableFONT_STATUS_BAR = false;
public disableICON_SIZE_STATUS_BAR = false;


  
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
      this.componentConfig.removeable = false;
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

  private formInitialValues:any =   new scdalarmAppearanceScdAadAlarmAppearance();   
    @Input() public set detail_Input(form: any) {
       if (typeof form != "undefined"){
        this.isSearch = true;
        this.executeQuery(form);
        this.isChild = true;
      }
      /*
    if (this.paramConfig.DEBUG_FLAG) console.log('detail_Input ScdAlarmAppearanceScdAadAlarmAppearanceFormdivs form.SHAPE_ID :' + form.SHAPE_ID);
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
this.lookupArrDef =[	{"statment":"SELECT CODE, CODETEXT_LANG , PARTCODE FROM SOM_TABS_CODES WHERE CODENAME = \"ICON_STYLE\"  and LANGUAGE_NAME = 'EN' order by CODETEXT_LANG ",
			"lkpArrName":"lkpArrICON_STYLE"},
	{"statment":"SELECT CODE, CODETEXT_LANG , PARTCODE FROM SOM_TABS_CODES WHERE CODENAME = \"FONT_TOOLBAR\"  and LANGUAGE_NAME = '" + this.userLang + "' order by CODETEXT_LANG ",
			"lkpArrName":"lkpArrFONT_TOOLBAR"},
	{"statment":"SELECT CODE, CODETEXT_LANG , PARTCODE FROM SOM_TABS_CODES WHERE CODENAME = \"ICON_SIZE_TOOLBAR\"  and LANGUAGE_NAME = '" + this.userLang + "' order by CODETEXT_LANG ",
			"lkpArrName":"lkpArrICON_SIZE_TOOLBAR"},
	{"statment":"SELECT CODE, CODETEXT_LANG , PARTCODE FROM SOM_TABS_CODES WHERE CODENAME = \"POSITION\"  and LANGUAGE_NAME = '" + this.userLang + "' order by CODETEXT_LANG ",
			"lkpArrName":"lkpArrPOSITION"},
	{"statment":"SELECT CODE, CODETEXT_LANG , PARTCODE FROM SOM_TABS_CODES WHERE CODENAME = \"FONT_STATUS_BAR\"  and LANGUAGE_NAME = '" + this.userLang + "' order by CODETEXT_LANG ",
			"lkpArrName":"lkpArrFONT_STATUS_BAR"},
	{"statment":"SELECT CODE, CODETEXT_LANG , PARTCODE FROM SOM_TABS_CODES WHERE CODENAME = \"ICON_SIZE_STATUS_BAR\"  and LANGUAGE_NAME = '" + this.userLang + "' order by CODETEXT_LANG ",
			"lkpArrName":"lkpArrICON_SIZE_STATUS_BAR"}];
 if (this.lookupArrDef.length > 0)
   this.starServices.fetchLookups(this, this.lookupArrDef);
}

public lkpArrICON_STYLE = [];

public lkpArrFONT_TOOLBAR = [];

public lkpArrICON_SIZE_TOOLBAR = [];

public lkpArrPOSITION = [];

public lkpArrFONT_STATUS_BAR = [];

public lkpArrICON_SIZE_STATUS_BAR = [];

public lkpArrGetICON_STYLE(CODE: any): any {
var rec = this.lkpArrICON_STYLE.find((x:any) => x.CODE === CODE);
return rec;
}

public lkpArrGetFONT_TOOLBAR(CODE: any): any {
var rec = this.lkpArrFONT_TOOLBAR.find((x:any) => x.CODE === CODE);
return rec;
}

public lkpArrGetICON_SIZE_TOOLBAR(CODE: any): any {
var rec = this.lkpArrICON_SIZE_TOOLBAR.find((x:any) => x.CODE === CODE);
return rec;
}

public lkpArrGetPOSITION(CODE: any): any {
var rec = this.lkpArrPOSITION.find((x:any) => x.CODE === CODE);
return rec;
}

public lkpArrGetFONT_STATUS_BAR(CODE: any): any {
var rec = this.lkpArrFONT_STATUS_BAR.find((x:any) => x.CODE === CODE);
return rec;
}

public lkpArrGetICON_SIZE_STATUS_BAR(CODE: any): any {
var rec = this.lkpArrICON_SIZE_STATUS_BAR.find((x:any) => x.CODE === CODE);
return rec;
}

onChanges(): void {
this.form.get('GENERAL_ID').valueChanges.subscribe(val => {
});
this.form.get('SHAPE_ID').valueChanges.subscribe(val => {
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
      if (this.paramConfig.DEBUG_FLAG) console.log("ScdAlarmAppearanceScdAadAlarmAppearanceFormdivs ComponentConfig:", {...ComponentConfig});

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

async WHEN_VALIDATE_ITEM_COLUMN_HEADINGS_DISPLAYED(value) {

 this.FORM_TRIGGER_FAILURE = false ; 
 if (typeof this.form.controls['COLUMN_HEADINGS_DISPLAYED'] != "undefined" ) 
      this.form.controls['COLUMN_HEADINGS_DISPLAYED'].setErrors({invalid: true}); 
 // Code goes here 
 

 if ( this.FORM_TRIGGER_FAILURE == true) 
 return; 
 
 if (typeof this.form.controls['COLUMN_HEADINGS_DISPLAYED'] != "undefined" ) 
     this.form.get('COLUMN_HEADINGS_DISPLAYED').updateValueAndValidity();
 this.form.updateValueAndValidity(); 
 }

 async ON_CLICK_COLUMN_HEADINGS_DISPLAYED(event){

}

async WHEN_VALIDATE_ITEM_HORIZONTAL_GRID_LINES_DISPLAYED(value) {

 this.FORM_TRIGGER_FAILURE = false ; 
 if (typeof this.form.controls['HORIZONTAL_GRID_LINES_DISPLAYED'] != "undefined" ) 
      this.form.controls['HORIZONTAL_GRID_LINES_DISPLAYED'].setErrors({invalid: true}); 
 // Code goes here 
 

 if ( this.FORM_TRIGGER_FAILURE == true) 
 return; 
 
 if (typeof this.form.controls['HORIZONTAL_GRID_LINES_DISPLAYED'] != "undefined" ) 
     this.form.get('HORIZONTAL_GRID_LINES_DISPLAYED').updateValueAndValidity();
 this.form.updateValueAndValidity(); 
 }

 async ON_CLICK_HORIZONTAL_GRID_LINES_DISPLAYED(event){

}

async WHEN_VALIDATE_ITEM_VERTICAL_GRID_LINES_DISPLAYED(value) {

 this.FORM_TRIGGER_FAILURE = false ; 
 if (typeof this.form.controls['VERTICAL_GRID_LINES_DISPLAYED'] != "undefined" ) 
      this.form.controls['VERTICAL_GRID_LINES_DISPLAYED'].setErrors({invalid: true}); 
 // Code goes here 
 

 if ( this.FORM_TRIGGER_FAILURE == true) 
 return; 
 
 if (typeof this.form.controls['VERTICAL_GRID_LINES_DISPLAYED'] != "undefined" ) 
     this.form.get('VERTICAL_GRID_LINES_DISPLAYED').updateValueAndValidity();
 this.form.updateValueAndValidity(); 
 }

 async ON_CLICK_VERTICAL_GRID_LINES_DISPLAYED(event){

}

async WHEN_VALIDATE_ITEM_HORIZONTAL_SCROLL_BAR(value) {

 this.FORM_TRIGGER_FAILURE = false ; 
 if (typeof this.form.controls['HORIZONTAL_SCROLL_BAR'] != "undefined" ) 
      this.form.controls['HORIZONTAL_SCROLL_BAR'].setErrors({invalid: true}); 
 // Code goes here 
 

 if ( this.FORM_TRIGGER_FAILURE == true) 
 return; 
 
 if (typeof this.form.controls['HORIZONTAL_SCROLL_BAR'] != "undefined" ) 
     this.form.get('HORIZONTAL_SCROLL_BAR').updateValueAndValidity();
 this.form.updateValueAndValidity(); 
 }

 async ON_CLICK_HORIZONTAL_SCROLL_BAR(event){

}

async WHEN_VALIDATE_ITEM_VERTICAL_SCROLL_BAR(value) {

 this.FORM_TRIGGER_FAILURE = false ; 
 if (typeof this.form.controls['VERTICAL_SCROLL_BAR'] != "undefined" ) 
      this.form.controls['VERTICAL_SCROLL_BAR'].setErrors({invalid: true}); 
 // Code goes here 
 

 if ( this.FORM_TRIGGER_FAILURE == true) 
 return; 
 
 if (typeof this.form.controls['VERTICAL_SCROLL_BAR'] != "undefined" ) 
     this.form.get('VERTICAL_SCROLL_BAR').updateValueAndValidity();
 this.form.updateValueAndValidity(); 
 }

 async ON_CLICK_VERTICAL_SCROLL_BAR(event){

}

async WHEN_VALIDATE_ITEM_DETAILS_PANE_DISPLAYED(value) {

 this.FORM_TRIGGER_FAILURE = false ; 
 if (typeof this.form.controls['DETAILS_PANE_DISPLAYED'] != "undefined" ) 
      this.form.controls['DETAILS_PANE_DISPLAYED'].setErrors({invalid: true}); 
 // Code goes here 
 

 if ( this.FORM_TRIGGER_FAILURE == true) 
 return; 
 
 if (typeof this.form.controls['DETAILS_PANE_DISPLAYED'] != "undefined" ) 
     this.form.get('DETAILS_PANE_DISPLAYED').updateValueAndValidity();
 this.form.updateValueAndValidity(); 
 }

 async ON_CLICK_DETAILS_PANE_DISPLAYED(event){

}

async WHEN_VALIDATE_ITEM_TOOLBAR_DISPLAYED(value) {

 this.FORM_TRIGGER_FAILURE = false ; 
 if (typeof this.form.controls['TOOLBAR_DISPLAYED'] != "undefined" ) 
      this.form.controls['TOOLBAR_DISPLAYED'].setErrors({invalid: true}); 
 // Code goes here 
 

 if ( this.FORM_TRIGGER_FAILURE == true) 
 return; 
 
 if (typeof this.form.controls['TOOLBAR_DISPLAYED'] != "undefined" ) 
     this.form.get('TOOLBAR_DISPLAYED').updateValueAndValidity();
 this.form.updateValueAndValidity(); 
 }

 async ON_CLICK_TOOLBAR_DISPLAYED(event){

}

async WHEN_VALIDATE_ITEM_STATUS_BAR_DISPLAYED(value) {

 this.FORM_TRIGGER_FAILURE = false ; 
 if (typeof this.form.controls['STATUS_BAR_DISPLAYED'] != "undefined" ) 
      this.form.controls['STATUS_BAR_DISPLAYED'].setErrors({invalid: true}); 
 // Code goes here 
 

 if ( this.FORM_TRIGGER_FAILURE == true) 
 return; 
 
 if (typeof this.form.controls['STATUS_BAR_DISPLAYED'] != "undefined" ) 
     this.form.get('STATUS_BAR_DISPLAYED').updateValueAndValidity();
 this.form.updateValueAndValidity(); 
 }

 async ON_CLICK_STATUS_BAR_DISPLAYED(event){

}

async WHEN_VALIDATE_ITEM_TOOLTIPS_DISPLAYED(value) {

 this.FORM_TRIGGER_FAILURE = false ; 
 if (typeof this.form.controls['TOOLTIPS_DISPLAYED'] != "undefined" ) 
      this.form.controls['TOOLTIPS_DISPLAYED'].setErrors({invalid: true}); 
 // Code goes here 
 

 if ( this.FORM_TRIGGER_FAILURE == true) 
 return; 
 
 if (typeof this.form.controls['TOOLTIPS_DISPLAYED'] != "undefined" ) 
     this.form.get('TOOLTIPS_DISPLAYED').updateValueAndValidity();
 this.form.updateValueAndValidity(); 
 }

 async ON_CLICK_TOOLTIPS_DISPLAYED(event){

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

async WHEN_VALIDATE_ITEM_BKG_COLOR_CH(value) {

 this.FORM_TRIGGER_FAILURE = false ; 
 if (typeof this.form.controls['BKG_COLOR_CH'] != "undefined" ) 
      this.form.controls['BKG_COLOR_CH'].setErrors({invalid: true}); 
 // Code goes here 
 

 if ( this.FORM_TRIGGER_FAILURE == true) 
 return; 
 
 if (typeof this.form.controls['BKG_COLOR_CH'] != "undefined" ) 
     this.form.get('BKG_COLOR_CH').updateValueAndValidity();
 this.form.updateValueAndValidity(); 
 }

 async ON_CLICK_BKG_COLOR_CH(event){

}

async WHEN_VALIDATE_ITEM_FONT_CH(value) {

 this.FORM_TRIGGER_FAILURE = false ; 
 if (typeof this.form.controls['FONT_CH'] != "undefined" ) 
      this.form.controls['FONT_CH'].setErrors({invalid: true}); 
 // Code goes here 
 

 if ( this.FORM_TRIGGER_FAILURE == true) 
 return; 
 
 if (typeof this.form.controls['FONT_CH'] != "undefined" ) 
     this.form.get('FONT_CH').updateValueAndValidity();
 this.form.updateValueAndValidity(); 
 }

 async ON_CLICK_FONT_CH(event){

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

async WHEN_VALIDATE_ITEM_FONT_RT(value) {

 this.FORM_TRIGGER_FAILURE = false ; 
 if (typeof this.form.controls['FONT_RT'] != "undefined" ) 
      this.form.controls['FONT_RT'].setErrors({invalid: true}); 
 // Code goes here 
 

 if ( this.FORM_TRIGGER_FAILURE == true) 
 return; 
 
 if (typeof this.form.controls['FONT_RT'] != "undefined" ) 
     this.form.get('FONT_RT').updateValueAndValidity();
 this.form.updateValueAndValidity(); 
 }

 async ON_CLICK_FONT_RT(event){

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

async WHEN_VALIDATE_ITEM_BKG_COLOR_GRID(value) {

 this.FORM_TRIGGER_FAILURE = false ; 
 if (typeof this.form.controls['BKG_COLOR_GRID'] != "undefined" ) 
      this.form.controls['BKG_COLOR_GRID'].setErrors({invalid: true}); 
 // Code goes here 
 

 if ( this.FORM_TRIGGER_FAILURE == true) 
 return; 
 
 if (typeof this.form.controls['BKG_COLOR_GRID'] != "undefined" ) 
     this.form.get('BKG_COLOR_GRID').updateValueAndValidity();
 this.form.updateValueAndValidity(); 
 }

 async ON_CLICK_BKG_COLOR_GRID(event){

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

async WHEN_VALIDATE_ITEM_BKG_COLOR_DP(value) {

 this.FORM_TRIGGER_FAILURE = false ; 
 if (typeof this.form.controls['BKG_COLOR_DP'] != "undefined" ) 
      this.form.controls['BKG_COLOR_DP'].setErrors({invalid: true}); 
 // Code goes here 
 

 if ( this.FORM_TRIGGER_FAILURE == true) 
 return; 
 
 if (typeof this.form.controls['BKG_COLOR_DP'] != "undefined" ) 
     this.form.get('BKG_COLOR_DP').updateValueAndValidity();
 this.form.updateValueAndValidity(); 
 }

 async ON_CLICK_BKG_COLOR_DP(event){

}

async WHEN_VALIDATE_ITEM_FONT_DP(value) {

 this.FORM_TRIGGER_FAILURE = false ; 
 if (typeof this.form.controls['FONT_DP'] != "undefined" ) 
      this.form.controls['FONT_DP'].setErrors({invalid: true}); 
 // Code goes here 
 

 if ( this.FORM_TRIGGER_FAILURE == true) 
 return; 
 
 if (typeof this.form.controls['FONT_DP'] != "undefined" ) 
     this.form.get('FONT_DP').updateValueAndValidity();
 this.form.updateValueAndValidity(); 
 }

 async ON_CLICK_FONT_DP(event){

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

async WHEN_VALIDATE_ITEM_CONFIG_ALARM_STATUS_EXPLORER(value) {

 this.FORM_TRIGGER_FAILURE = false ; 
 if (typeof this.form.controls['CONFIG_ALARM_STATUS_EXPLORER'] != "undefined" ) 
      this.form.controls['CONFIG_ALARM_STATUS_EXPLORER'].setErrors({invalid: true}); 
 // Code goes here 
 

 if ( this.FORM_TRIGGER_FAILURE == true) 
 return; 
 
 if (typeof this.form.controls['CONFIG_ALARM_STATUS_EXPLORER'] != "undefined" ) 
     this.form.get('CONFIG_ALARM_STATUS_EXPLORER').updateValueAndValidity();
 this.form.updateValueAndValidity(); 
 }

 async ON_CLICK_CONFIG_ALARM_STATUS_EXPLORER(event){

}

async WHEN_VALIDATE_ITEM_DEFAULT_POINT_FONT(value) {

 this.FORM_TRIGGER_FAILURE = false ; 
 if (typeof this.form.controls['DEFAULT_POINT_FONT'] != "undefined" ) 
      this.form.controls['DEFAULT_POINT_FONT'].setErrors({invalid: true}); 
 // Code goes here 
 

 if ( this.FORM_TRIGGER_FAILURE == true) 
 return; 
 
 if (typeof this.form.controls['DEFAULT_POINT_FONT'] != "undefined" ) 
     this.form.get('DEFAULT_POINT_FONT').updateValueAndValidity();
 this.form.updateValueAndValidity(); 
 }

 async ON_CLICK_DEFAULT_POINT_FONT(event){

}

async WHEN_VALIDATE_ITEM_TEXT_COLOR_TOOLBAR(value) {

 this.FORM_TRIGGER_FAILURE = false ; 
 if (typeof this.form.controls['TEXT_COLOR_TOOLBAR'] != "undefined" ) 
      this.form.controls['TEXT_COLOR_TOOLBAR'].setErrors({invalid: true}); 
 // Code goes here 
 

 if ( this.FORM_TRIGGER_FAILURE == true) 
 return; 
 
 if (typeof this.form.controls['TEXT_COLOR_TOOLBAR'] != "undefined" ) 
     this.form.get('TEXT_COLOR_TOOLBAR').updateValueAndValidity();
 this.form.updateValueAndValidity(); 
 }

 async ON_CLICK_TEXT_COLOR_TOOLBAR(event){

}

async WHEN_VALIDATE_ITEM_BKG_COLOR_TOOLBAR(value) {

 this.FORM_TRIGGER_FAILURE = false ; 
 if (typeof this.form.controls['BKG_COLOR_TOOLBAR'] != "undefined" ) 
      this.form.controls['BKG_COLOR_TOOLBAR'].setErrors({invalid: true}); 
 // Code goes here 
 

 if ( this.FORM_TRIGGER_FAILURE == true) 
 return; 
 
 if (typeof this.form.controls['BKG_COLOR_TOOLBAR'] != "undefined" ) 
     this.form.get('BKG_COLOR_TOOLBAR').updateValueAndValidity();
 this.form.updateValueAndValidity(); 
 }

 async ON_CLICK_BKG_COLOR_TOOLBAR(event){

}

async WHEN_VALIDATE_ITEM_FONT_TOOLBAR(value) {

 this.FORM_TRIGGER_FAILURE = false ; 
 if (typeof this.form.controls['FONT_TOOLBAR'] != "undefined" ) 
      this.form.controls['FONT_TOOLBAR'].setErrors({invalid: true}); 
 // Code goes here 
 

 if ( this.FORM_TRIGGER_FAILURE == true) 
 return; 
 
 if (typeof this.form.controls['FONT_TOOLBAR'] != "undefined" ) 
     this.form.get('FONT_TOOLBAR').updateValueAndValidity();
 this.form.updateValueAndValidity(); 
 }

 async ON_CLICK_FONT_TOOLBAR(event){

}

async WHEN_VALIDATE_ITEM_ICON_SIZE_TOOLBAR(value) {

 this.FORM_TRIGGER_FAILURE = false ; 
 if (typeof this.form.controls['ICON_SIZE_TOOLBAR'] != "undefined" ) 
      this.form.controls['ICON_SIZE_TOOLBAR'].setErrors({invalid: true}); 
 // Code goes here 
 

 if ( this.FORM_TRIGGER_FAILURE == true) 
 return; 
 
 if (typeof this.form.controls['ICON_SIZE_TOOLBAR'] != "undefined" ) 
     this.form.get('ICON_SIZE_TOOLBAR').updateValueAndValidity();
 this.form.updateValueAndValidity(); 
 }

 async ON_CLICK_ICON_SIZE_TOOLBAR(event){

}

async WHEN_VALIDATE_ITEM_POSITION(value) {

 this.FORM_TRIGGER_FAILURE = false ; 
 if (typeof this.form.controls['POSITION'] != "undefined" ) 
      this.form.controls['POSITION'].setErrors({invalid: true}); 
 // Code goes here 
 

 if ( this.FORM_TRIGGER_FAILURE == true) 
 return; 
 
 if (typeof this.form.controls['POSITION'] != "undefined" ) 
     this.form.get('POSITION').updateValueAndValidity();
 this.form.updateValueAndValidity(); 
 }

 async ON_CLICK_POSITION(event){

}

async WHEN_VALIDATE_ITEM_FONT_STATUS_BAR(value) {

 this.FORM_TRIGGER_FAILURE = false ; 
 if (typeof this.form.controls['FONT_STATUS_BAR'] != "undefined" ) 
      this.form.controls['FONT_STATUS_BAR'].setErrors({invalid: true}); 
 // Code goes here 
 

 if ( this.FORM_TRIGGER_FAILURE == true) 
 return; 
 
 if (typeof this.form.controls['FONT_STATUS_BAR'] != "undefined" ) 
     this.form.get('FONT_STATUS_BAR').updateValueAndValidity();
 this.form.updateValueAndValidity(); 
 }

 async ON_CLICK_FONT_STATUS_BAR(event){

}

async WHEN_VALIDATE_ITEM_ICON_SIZE_STATUS_BAR(value) {

 this.FORM_TRIGGER_FAILURE = false ; 
 if (typeof this.form.controls['ICON_SIZE_STATUS_BAR'] != "undefined" ) 
      this.form.controls['ICON_SIZE_STATUS_BAR'].setErrors({invalid: true}); 
 // Code goes here 
 

 if ( this.FORM_TRIGGER_FAILURE == true) 
 return; 
 
 if (typeof this.form.controls['ICON_SIZE_STATUS_BAR'] != "undefined" ) 
     this.form.get('ICON_SIZE_STATUS_BAR').updateValueAndValidity();
 this.form.updateValueAndValidity(); 
 }

 async ON_CLICK_ICON_SIZE_STATUS_BAR(event){

}
 
 async onChange_GENERAL_ID(event:any) { 
 var value = event.target.value; 
 if ((value == null) || (value == '')) 	
 	return;  
    this.FORM_TRIGGER_FAILURE = false;	
 await   this.WHEN_VALIDATE_ITEM_GENERAL_ID(value); if ( this.FORM_TRIGGER_FAILURE) return; 
 this.formValidationChangedOutput.emit(this.form.valid); 
  
 } 
 async onChange_SHAPE_ID(event:any) { 
 var value = event.target.value; 
 if ((value == null) || (value == '')) 	
 	return;  
    this.FORM_TRIGGER_FAILURE = false;	
 await   this.WHEN_VALIDATE_ITEM_SHAPE_ID(value); if ( this.FORM_TRIGGER_FAILURE) return; 
 this.formValidationChangedOutput.emit(this.form.valid); 
  
 } 
 async onChange_COLUMN_HEADINGS_DISPLAYED(event:any) { 
 var value = event.target.value; 
 if ((value == null) || (value == '')) 	
 	return;  
    this.FORM_TRIGGER_FAILURE = false;	
 await   this.WHEN_VALIDATE_ITEM_COLUMN_HEADINGS_DISPLAYED(value); if ( this.FORM_TRIGGER_FAILURE) return; 
 this.formValidationChangedOutput.emit(this.form.valid); 
  
 } 
 async onChange_HORIZONTAL_GRID_LINES_DISPLAYED(event:any) { 
 var value = event.target.value; 
 if ((value == null) || (value == '')) 	
 	return;  
    this.FORM_TRIGGER_FAILURE = false;	
 await   this.WHEN_VALIDATE_ITEM_HORIZONTAL_GRID_LINES_DISPLAYED(value); if ( this.FORM_TRIGGER_FAILURE) return; 
 this.formValidationChangedOutput.emit(this.form.valid); 
  
 } 
 async onChange_VERTICAL_GRID_LINES_DISPLAYED(event:any) { 
 var value = event.target.value; 
 if ((value == null) || (value == '')) 	
 	return;  
    this.FORM_TRIGGER_FAILURE = false;	
 await   this.WHEN_VALIDATE_ITEM_VERTICAL_GRID_LINES_DISPLAYED(value); if ( this.FORM_TRIGGER_FAILURE) return; 
 this.formValidationChangedOutput.emit(this.form.valid); 
  
 } 
 async onChange_HORIZONTAL_SCROLL_BAR(event:any) { 
 var value = event.target.value; 
 if ((value == null) || (value == '')) 	
 	return;  
    this.FORM_TRIGGER_FAILURE = false;	
 await   this.WHEN_VALIDATE_ITEM_HORIZONTAL_SCROLL_BAR(value); if ( this.FORM_TRIGGER_FAILURE) return; 
 this.formValidationChangedOutput.emit(this.form.valid); 
  
 } 
 async onChange_VERTICAL_SCROLL_BAR(event:any) { 
 var value = event.target.value; 
 if ((value == null) || (value == '')) 	
 	return;  
    this.FORM_TRIGGER_FAILURE = false;	
 await   this.WHEN_VALIDATE_ITEM_VERTICAL_SCROLL_BAR(value); if ( this.FORM_TRIGGER_FAILURE) return; 
 this.formValidationChangedOutput.emit(this.form.valid); 
  
 } 
 async onChange_DETAILS_PANE_DISPLAYED(event:any) { 
 var value = event.target.value; 
 if ((value == null) || (value == '')) 	
 	return;  
    this.FORM_TRIGGER_FAILURE = false;	
 await   this.WHEN_VALIDATE_ITEM_DETAILS_PANE_DISPLAYED(value); if ( this.FORM_TRIGGER_FAILURE) return; 
 this.formValidationChangedOutput.emit(this.form.valid); 
  
 } 
 async onChange_TOOLBAR_DISPLAYED(event:any) { 
 var value = event.target.value; 
 if ((value == null) || (value == '')) 	
 	return;  
    this.FORM_TRIGGER_FAILURE = false;	
 await   this.WHEN_VALIDATE_ITEM_TOOLBAR_DISPLAYED(value); if ( this.FORM_TRIGGER_FAILURE) return; 
 this.formValidationChangedOutput.emit(this.form.valid); 
  
 } 
 async onChange_STATUS_BAR_DISPLAYED(event:any) { 
 var value = event.target.value; 
 if ((value == null) || (value == '')) 	
 	return;  
    this.FORM_TRIGGER_FAILURE = false;	
 await   this.WHEN_VALIDATE_ITEM_STATUS_BAR_DISPLAYED(value); if ( this.FORM_TRIGGER_FAILURE) return; 
 this.formValidationChangedOutput.emit(this.form.valid); 
  
 } 
 async onChange_TOOLTIPS_DISPLAYED(event:any) { 
 var value = event.target.value; 
 if ((value == null) || (value == '')) 	
 	return;  
    this.FORM_TRIGGER_FAILURE = false;	
 await   this.WHEN_VALIDATE_ITEM_TOOLTIPS_DISPLAYED(value); if ( this.FORM_TRIGGER_FAILURE) return; 
 this.formValidationChangedOutput.emit(this.form.valid); 
  
 } 
 async onValueChange_ICON_STYLE(value) { 
  this.FORM_TRIGGER_FAILURE = false;	
 await this.WHEN_VALIDATE_ITEM_ICON_STYLE(value); if ( this.FORM_TRIGGER_FAILURE) return; 
 this.formValidationChangedOutput.emit(this.form.valid); 
  
  } 
 async onValueChange_TEXT_COLOR_CH(value) { 
  this.FORM_TRIGGER_FAILURE = false;	
 await this.WHEN_VALIDATE_ITEM_TEXT_COLOR_CH(value); if ( this.FORM_TRIGGER_FAILURE) return; 
 this.formValidationChangedOutput.emit(this.form.valid); 
  
  } 
 async onValueChange_BKG_COLOR_CH(value) { 
  this.FORM_TRIGGER_FAILURE = false;	
 await this.WHEN_VALIDATE_ITEM_BKG_COLOR_CH(value); if ( this.FORM_TRIGGER_FAILURE) return; 
 this.formValidationChangedOutput.emit(this.form.valid); 
  
  } 
 async onValueChange_FONT_CH(value) { 
  this.FORM_TRIGGER_FAILURE = false;	
 await this.WHEN_VALIDATE_ITEM_FONT_CH(value); if ( this.FORM_TRIGGER_FAILURE) return; 
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
 async onValueChange_FONT_RT(value) { 
  this.FORM_TRIGGER_FAILURE = false;	
 await this.WHEN_VALIDATE_ITEM_FONT_RT(value); if ( this.FORM_TRIGGER_FAILURE) return; 
 this.formValidationChangedOutput.emit(this.form.valid); 
  
  } 
 async onValueChange_LINE_COLOR(value) { 
  this.FORM_TRIGGER_FAILURE = false;	
 await this.WHEN_VALIDATE_ITEM_LINE_COLOR(value); if ( this.FORM_TRIGGER_FAILURE) return; 
 this.formValidationChangedOutput.emit(this.form.valid); 
  
  } 
 async onValueChange_BKG_COLOR_GRID(value) { 
  this.FORM_TRIGGER_FAILURE = false;	
 await this.WHEN_VALIDATE_ITEM_BKG_COLOR_GRID(value); if ( this.FORM_TRIGGER_FAILURE) return; 
 this.formValidationChangedOutput.emit(this.form.valid); 
  
  } 
 async onValueChange_TEXT_COLOR_DP(value) { 
  this.FORM_TRIGGER_FAILURE = false;	
 await this.WHEN_VALIDATE_ITEM_TEXT_COLOR_DP(value); if ( this.FORM_TRIGGER_FAILURE) return; 
 this.formValidationChangedOutput.emit(this.form.valid); 
  
  } 
 async onValueChange_BKG_COLOR_DP(value) { 
  this.FORM_TRIGGER_FAILURE = false;	
 await this.WHEN_VALIDATE_ITEM_BKG_COLOR_DP(value); if ( this.FORM_TRIGGER_FAILURE) return; 
 this.formValidationChangedOutput.emit(this.form.valid); 
  
  } 
 async onValueChange_FONT_DP(value) { 
  this.FORM_TRIGGER_FAILURE = false;	
 await this.WHEN_VALIDATE_ITEM_FONT_DP(value); if ( this.FORM_TRIGGER_FAILURE) return; 
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
 async onValueChange_CONFIG_ALARM_STATUS_EXPLORER(value) { 
  this.FORM_TRIGGER_FAILURE = false;	
 await this.WHEN_VALIDATE_ITEM_CONFIG_ALARM_STATUS_EXPLORER(value); if ( this.FORM_TRIGGER_FAILURE) return; 
 this.formValidationChangedOutput.emit(this.form.valid); 
  
  } 
 async onValueChange_DEFAULT_POINT_FONT(value) { 
  this.FORM_TRIGGER_FAILURE = false;	
 await this.WHEN_VALIDATE_ITEM_DEFAULT_POINT_FONT(value); if ( this.FORM_TRIGGER_FAILURE) return; 
 this.formValidationChangedOutput.emit(this.form.valid); 
  
  } 
 async onValueChange_TEXT_COLOR_TOOLBAR(value) { 
  this.FORM_TRIGGER_FAILURE = false;	
 await this.WHEN_VALIDATE_ITEM_TEXT_COLOR_TOOLBAR(value); if ( this.FORM_TRIGGER_FAILURE) return; 
 this.formValidationChangedOutput.emit(this.form.valid); 
  
  } 
 async onValueChange_BKG_COLOR_TOOLBAR(value) { 
  this.FORM_TRIGGER_FAILURE = false;	
 await this.WHEN_VALIDATE_ITEM_BKG_COLOR_TOOLBAR(value); if ( this.FORM_TRIGGER_FAILURE) return; 
 this.formValidationChangedOutput.emit(this.form.valid); 
  
  } 
 async onValueChange_FONT_TOOLBAR(value) { 
  this.FORM_TRIGGER_FAILURE = false;	
 await this.WHEN_VALIDATE_ITEM_FONT_TOOLBAR(value); if ( this.FORM_TRIGGER_FAILURE) return; 
 this.formValidationChangedOutput.emit(this.form.valid); 
  
  } 
 async onValueChange_ICON_SIZE_TOOLBAR(value) { 
  this.FORM_TRIGGER_FAILURE = false;	
 await this.WHEN_VALIDATE_ITEM_ICON_SIZE_TOOLBAR(value); if ( this.FORM_TRIGGER_FAILURE) return; 
 this.formValidationChangedOutput.emit(this.form.valid); 
  
  } 
 async onValueChange_POSITION(value) { 
  this.FORM_TRIGGER_FAILURE = false;	
 await this.WHEN_VALIDATE_ITEM_POSITION(value); if ( this.FORM_TRIGGER_FAILURE) return; 
 this.formValidationChangedOutput.emit(this.form.valid); 
  
  } 
 async onValueChange_FONT_STATUS_BAR(value) { 
  this.FORM_TRIGGER_FAILURE = false;	
 await this.WHEN_VALIDATE_ITEM_FONT_STATUS_BAR(value); if ( this.FORM_TRIGGER_FAILURE) return; 
 this.formValidationChangedOutput.emit(this.form.valid); 
  
  } 
 async onValueChange_ICON_SIZE_STATUS_BAR(value) { 
  this.FORM_TRIGGER_FAILURE = false;	
 await this.WHEN_VALIDATE_ITEM_ICON_SIZE_STATUS_BAR(value); if ( this.FORM_TRIGGER_FAILURE) return; 
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


