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
import { scddisplaySettingScdDssDisplaySettings , componentConfigDef} from '@modeldir/model';


 const createFormGroup = (dataItem:any) => new FormGroup({
'DISPLAY_SETTING_ID' : new FormControl(dataItem.DISPLAY_SETTING_ID  , ) ,
'DISPLAY_ID' : new FormControl(dataItem.DISPLAY_ID  ,   Validators.required ) ,
'DISPLAY_TYPE' : new FormControl(dataItem.DISPLAY_TYPE  , ) ,
'KEEP_AT_BACK' : new FormControl(dataItem.KEEP_AT_BACK  , ) ,
'CANNOT_BE_REPLACED' : new FormControl(dataItem.CANNOT_BE_REPLACED  , ) ,
'DISPLAY_SIZE' : new FormControl(dataItem.DISPLAY_SIZE  , ) ,
'WIDTH' : new FormControl(dataItem.WIDTH  , ) ,
'HEIGHT' : new FormControl(dataItem.HEIGHT  , ) ,
'ALLOW_MULTIPLE_RUNNING_COPIES' : new FormControl(dataItem.ALLOW_MULTIPLE_RUNNING_COPIES  , ) ,
'WHEN_RESIZED' : new FormControl(dataItem.WHEN_RESIZED  , ) ,
'ALLOW_DISPLAY_TO_BE_RESIZED' : new FormControl(dataItem.ALLOW_DISPLAY_TO_BE_RESIZED  , ) ,
'CACHE_AFTER_DISPLAYING' : new FormControl(dataItem.CACHE_AFTER_DISPLAYING  , ) ,
'ALWAYS_UPDATING' : new FormControl(dataItem.ALWAYS_UPDATING  , ) ,
'DIAGRAM_DATA' : new FormControl(dataItem.DIAGRAM_DATA  , ) ,
'STARTUP' : new FormControl(dataItem.STARTUP  , ) ,
'BEEP_ON_PRESS' : new FormControl(dataItem.BEEP_ON_PRESS  , ) ,
'SHUTDOWN' : new FormControl(dataItem.SHUTDOWN  , ) ,
'HIGHLIGHT_WHEN_CURSOR_PASSES_OVER_IT' : new FormControl(dataItem.HIGHLIGHT_WHEN_CURSOR_PASSES_OVER_IT  , ) ,
'HIGHLIGHT_COLOR' : new FormControl(dataItem.HIGHLIGHT_COLOR  , ) ,
'WHEN_FIELD_IS_NOT_SELECTED_TEXT' : new FormControl(dataItem.WHEN_FIELD_IS_NOT_SELECTED_TEXT  , ) ,
'WHEN_FIELD_IS_NOT_SELECTED_FILL' : new FormControl(dataItem.WHEN_FIELD_IS_NOT_SELECTED_FILL  , ) ,
'DISABLE_HIGHLIGHT_WHEN_OBJECT_HAS_FOCUS' : new FormControl(dataItem.DISABLE_HIGHLIGHT_WHEN_OBJECT_HAS_FOCUS  , ) ,
'WHEN_FIELD_IS_SELECTED_TEXT' : new FormControl(dataItem.WHEN_FIELD_IS_SELECTED_TEXT  , ) ,
'WHEN_FIELD_IS_SELECTED_FILL' : new FormControl(dataItem.WHEN_FIELD_IS_SELECTED_FILL  , ) ,
'HIGHLIGHT_COLOR_FOCUS' : new FormControl(dataItem.HIGHLIGHT_COLOR_FOCUS  , ) ,
'WHEN_FIELD_IS_IN_ERROR_AND_IS_NOT_SELECTED_TEXT' : new FormControl(dataItem.WHEN_FIELD_IS_IN_ERROR_AND_IS_NOT_SELECTED_TEXT  , ) ,
'WHEN_FIELD_IS_IN_ERROR_AND_IS_NOT_SELECTED_FILL' : new FormControl(dataItem.WHEN_FIELD_IS_IN_ERROR_AND_IS_NOT_SELECTED_FILL  , ) ,
'DISPLAY_ON_SCREEN_KEYBOARD_WHOLE_DISPLAY' : new FormControl(dataItem.DISPLAY_ON_SCREEN_KEYBOARD_WHOLE_DISPLAY  , ) ,
'WHEN_FIELD_IS_IN_ERROR_AND_IS_SELECTED_TEXT' : new FormControl(dataItem.WHEN_FIELD_IS_IN_ERROR_AND_IS_SELECTED_TEXT  , ) ,
'WHEN_FIELD_IS_IN_ERROR_AND_IS_SELECTED_FILL' : new FormControl(dataItem.WHEN_FIELD_IS_IN_ERROR_AND_IS_SELECTED_FILL  , ) ,
'ALLOW_BUTTON_ACTION_ON_ERROR' : new FormControl(dataItem.ALLOW_BUTTON_ACTION_ON_ERROR  , ) ,
'POSITION' : new FormControl(dataItem.POSITION  , ) ,
'X_POS' : new FormControl(dataItem.X_POS  , ) ,
'Y_POS' : new FormControl(dataItem.Y_POS  , ) ,
'ALLOW_TITLE_BAR' : new FormControl(dataItem.ALLOW_TITLE_BAR  , ) ,
'TITLE_BAR' : new FormControl(dataItem.TITLE_BAR  , ) ,
'SYSTEM_MENU' : new FormControl(dataItem.SYSTEM_MENU  , ) ,
'MINIMIZE_BUTTON' : new FormControl(dataItem.MINIMIZE_BUTTON  , ) ,
'SECURITY_CODE' : new FormControl(dataItem.SECURITY_CODE  , ) ,
'BACKGROUND_COLOR' : new FormControl(dataItem.BACKGROUND_COLOR  , ) ,
'MAXIMIZE_BUTTON' : new FormControl(dataItem.MAXIMIZE_BUTTON  , ) ,
'PIN_BUTTON' : new FormControl(dataItem.PIN_BUTTON  , ) ,
'SIZE_TO_MAIN_WINDOW_AT_RUNTIME' : new FormControl(dataItem.SIZE_TO_MAIN_WINDOW_AT_RUNTIME  , ) ,
'USE_GRADIENT_STYLE' : new FormControl(dataItem.USE_GRADIENT_STYLE  , ) ,
'SHOW_LAST_ACQUIRED_VALUE' : new FormControl(dataItem.SHOW_LAST_ACQUIRED_VALUE  , ) ,
'MAXIMUM_TAG_UPDATE_RATE' : new FormControl(dataItem.MAXIMUM_TAG_UPDATE_RATE  , ) ,
'TRACK_SCREEN_FOR_NAVIGATION' : new FormControl(dataItem.TRACK_SCREEN_FOR_NAVIGATION  , ) ,
'NAVIGATION_HISTORY_SCREEN_NAME' : new FormControl(dataItem.NAVIGATION_HISTORY_SCREEN_NAME  , ) 
});

declare function getParamConfig():any;
@Component({
  selector: 'app-scd-dss-display-settings',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './scd-dss-display-settings.component.html',
  styleUrls: ['./scd-dss-display-settings.component.scss'],
  standalone: false
})


export class ScdDisplaySettingScdDssDisplaySettingsFormtabsComponent {
  public title =  this.starServices.getNLS([],"SCD_DSS_DISPLAY_SETTINGS.scddisplaySettingScdDssDisplaySettings.component_title","Display Settings");
  public compTitleMsg =  "SCD_DSS_DISPLAY_SETTINGS.scddisplaySettingScdDssDisplaySettings";
  public routineName = "ScdDisplaySettingScdDssDisplaySettingsFormtabs";
  private insertCMD = "INSERT_SCD_DISPLAY_SETTING";
  private updateCMD = "UPDATE_SCD_DISPLAY_SETTING";
  private deleteCMD =   "DELETE_SCD_DISPLAY_SETTING";
  private getCMD = "GET_SCD_DISPLAY_SETTING_QUERY";

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
  public  isDISPLAY_IDEnable : boolean = true;

  public FORM_TRIGGER_FAILURE:any;
  public NOTFOUND:any;
  public disableEmitSave = false;
  public disableEmitReadCompleted = false;
  public children = ["any"];

  public action = "";
  private Body:any =[];
  public isNew!: boolean;
  public primarKeyReadOnlyArr = {isDISPLAY_SETTING_IDreadOnly : false , isDISPLAY_IDreadOnly : false};  
  public paramConfig;
  private masterKeyArr = [];
  private masterKeyNameArr = [];
  public  masterKey="";
  public masterKeyName ="DISPLAY_ID";
  public WhereClause = "";
  public OrderByClause = "";
  
  public formattedWhere:any = null;  
  public  submitted =  false;
  public masterParams:any;
  public alignment: TabAlignment = 'start';
  public isPhonePortrait = false;
  public compSelector = 'app-scd-dss-display-settings';
  public PK_AUTO = 'DISPLAY_SETTING_ID';
  public customerFacing = false;
  public FormStepsArr = [{"CODE":"","CODETEXT_LANG":""},{"CODE":"1","CODETEXT_LANG":"General"},{"CODE":"2","CODETEXT_LANG":"Behavior"},{"CODE":"3","CODETEXT_LANG":"Position"}] ;
public labelDISPLAY_SETTING_IDTop=false;
public labelDISPLAY_SETTING_IDVisible=true;
public labelDISPLAY_IDTop=false;
public labelDISPLAY_IDVisible=true;
public labelDISPLAY_TYPETop=false;
public labelDISPLAY_TYPEVisible=true;
public labelKEEP_AT_BACKTop=false;
public labelKEEP_AT_BACKVisible=true;
public labelCANNOT_BE_REPLACEDTop=false;
public labelCANNOT_BE_REPLACEDVisible=true;
public labelDISPLAY_SIZETop=false;
public labelDISPLAY_SIZEVisible=true;
public labelWIDTHTop=false;
public labelWIDTHVisible=true;
public labelHEIGHTTop=false;
public labelHEIGHTVisible=true;
public labelALLOW_MULTIPLE_RUNNING_COPIESTop=false;
public labelALLOW_MULTIPLE_RUNNING_COPIESVisible=true;
public labelWHEN_RESIZEDTop=false;
public labelWHEN_RESIZEDVisible=true;
public labelALLOW_DISPLAY_TO_BE_RESIZEDTop=false;
public labelALLOW_DISPLAY_TO_BE_RESIZEDVisible=true;
public labelCACHE_AFTER_DISPLAYINGTop=false;
public labelCACHE_AFTER_DISPLAYINGVisible=true;
public labelALWAYS_UPDATINGTop=false;
public labelALWAYS_UPDATINGVisible=true;
public labelDIAGRAM_DATATop=false;
public labelDIAGRAM_DATAVisible=true;
public labelSCREEN_STATISTICSTop=false;
public labelSCREEN_STATISTICSVisible=true;
public labelSET_AS_DEFAULTTop=false;
public labelSET_AS_DEFAULTVisible=true;
public labelSTARTUPTop=false;
public labelSTARTUPVisible=true;
public labelSTARTUP_COMMANDSTop=false;
public labelSTARTUP_COMMANDSVisible=true;
public labelBEEP_ON_PRESSTop=false;
public labelBEEP_ON_PRESSVisible=true;
public labelSHUTDOWNTop=false;
public labelSHUTDOWNVisible=true;
public labelSHUTDOWN_COMMANDSTop=false;
public labelSHUTDOWN_COMMANDSVisible=true;
public labelHIGHLIGHT_WHEN_CURSOR_PASSES_OVER_ITTop=false;
public labelHIGHLIGHT_WHEN_CURSOR_PASSES_OVER_ITVisible=true;
public labelHIGHLIGHT_COLORTop=false;
public labelHIGHLIGHT_COLORVisible=true;
public labelWHEN_FIELD_IS_NOT_SELECTED_TEXTTop=false;
public labelWHEN_FIELD_IS_NOT_SELECTED_TEXTVisible=true;
public labelWHEN_FIELD_IS_NOT_SELECTED_FILLTop=false;
public labelWHEN_FIELD_IS_NOT_SELECTED_FILLVisible=true;
public labelDISABLE_HIGHLIGHT_WHEN_OBJECT_HAS_FOCUSTop=false;
public labelDISABLE_HIGHLIGHT_WHEN_OBJECT_HAS_FOCUSVisible=true;
public labelWHEN_FIELD_IS_SELECTED_TEXTTop=false;
public labelWHEN_FIELD_IS_SELECTED_TEXTVisible=true;
public labelWHEN_FIELD_IS_SELECTED_FILLTop=false;
public labelWHEN_FIELD_IS_SELECTED_FILLVisible=true;
public labelHIGHLIGHT_COLOR_FOCUSTop=false;
public labelHIGHLIGHT_COLOR_FOCUSVisible=true;
public labelWHEN_FIELD_IS_IN_ERROR_AND_IS_NOT_SELECTED_TEXTTop=false;
public labelWHEN_FIELD_IS_IN_ERROR_AND_IS_NOT_SELECTED_TEXTVisible=true;
public labelWHEN_FIELD_IS_IN_ERROR_AND_IS_NOT_SELECTED_FILLTop=false;
public labelWHEN_FIELD_IS_IN_ERROR_AND_IS_NOT_SELECTED_FILLVisible=true;
public labelDISPLAY_ON_SCREEN_KEYBOARD_WHOLE_DISPLAYTop=false;
public labelDISPLAY_ON_SCREEN_KEYBOARD_WHOLE_DISPLAYVisible=true;
public labelWHEN_FIELD_IS_IN_ERROR_AND_IS_SELECTED_TEXTTop=false;
public labelWHEN_FIELD_IS_IN_ERROR_AND_IS_SELECTED_TEXTVisible=true;
public labelWHEN_FIELD_IS_IN_ERROR_AND_IS_SELECTED_FILLTop=false;
public labelWHEN_FIELD_IS_IN_ERROR_AND_IS_SELECTED_FILLVisible=true;
public labelALLOW_BUTTON_ACTION_ON_ERRORTop=false;
public labelALLOW_BUTTON_ACTION_ON_ERRORVisible=true;
public labelPOSITIONTop=false;
public labelPOSITIONVisible=true;
public labelX_POSTop=false;
public labelX_POSVisible=true;
public labelY_POSTop=false;
public labelY_POSVisible=true;
public labelALLOW_TITLE_BARTop=false;
public labelALLOW_TITLE_BARVisible=true;
public labelTITLE_BARTop=false;
public labelTITLE_BARVisible=true;
public labelSYSTEM_MENUTop=false;
public labelSYSTEM_MENUVisible=true;
public labelMINIMIZE_BUTTONTop=false;
public labelMINIMIZE_BUTTONVisible=true;
public labelSECURITY_CODETop=false;
public labelSECURITY_CODEVisible=true;
public labelBACKGROUND_COLORTop=false;
public labelBACKGROUND_COLORVisible=true;
public labelMAXIMIZE_BUTTONTop=false;
public labelMAXIMIZE_BUTTONVisible=true;
public labelPIN_BUTTONTop=false;
public labelPIN_BUTTONVisible=true;
public labelSIZE_TO_MAIN_WINDOW_AT_RUNTIMETop=false;
public labelSIZE_TO_MAIN_WINDOW_AT_RUNTIMEVisible=true;
public labelUSE_GRADIENT_STYLETop=false;
public labelUSE_GRADIENT_STYLEVisible=true;
public labelSHOW_LAST_ACQUIRED_VALUETop=false;
public labelSHOW_LAST_ACQUIRED_VALUEVisible=true;
public labelMAXIMUM_TAG_UPDATE_RATETop=false;
public labelMAXIMUM_TAG_UPDATE_RATEVisible=true;
public labelTRACK_SCREEN_FOR_NAVIGATIONTop=false;
public labelTRACK_SCREEN_FOR_NAVIGATIONVisible=true;
public labelNAVIGATION_HISTORY_SCREEN_NAMETop=false;
public labelNAVIGATION_HISTORY_SCREEN_NAMEVisible=true;

public visibleDISPLAY_SETTING_ID = false;
public visibleDISPLAY_ID = false;
public visibleDISPLAY_TYPE = true;
public visibleKEEP_AT_BACK = true;
public visibleCANNOT_BE_REPLACED = true;
public visibleDISPLAY_SIZE = true;
public visibleWIDTH = true;
public visibleHEIGHT = true;
public visibleALLOW_MULTIPLE_RUNNING_COPIES = true;
public visibleWHEN_RESIZED = true;
public visibleALLOW_DISPLAY_TO_BE_RESIZED = true;
public visibleCACHE_AFTER_DISPLAYING = true;
public visibleALWAYS_UPDATING = true;
public visibleDIAGRAM_DATA = false;
public visibleSCREEN_STATISTICS = true;
public visibleSET_AS_DEFAULT = true;
public visibleSTARTUP = true;
public visibleSTARTUP_COMMANDS = true;
public visibleBEEP_ON_PRESS = true;
public visibleSHUTDOWN = true;
public visibleSHUTDOWN_COMMANDS = true;
public visibleHIGHLIGHT_WHEN_CURSOR_PASSES_OVER_IT = true;
public visibleHIGHLIGHT_COLOR = true;
public visibleWHEN_FIELD_IS_NOT_SELECTED_TEXT = true;
public visibleWHEN_FIELD_IS_NOT_SELECTED_FILL = true;
public visibleDISABLE_HIGHLIGHT_WHEN_OBJECT_HAS_FOCUS = true;
public visibleWHEN_FIELD_IS_SELECTED_TEXT = true;
public visibleWHEN_FIELD_IS_SELECTED_FILL = true;
public visibleHIGHLIGHT_COLOR_FOCUS = true;
public visibleWHEN_FIELD_IS_IN_ERROR_AND_IS_NOT_SELECTED_TEXT = true;
public visibleWHEN_FIELD_IS_IN_ERROR_AND_IS_NOT_SELECTED_FILL = true;
public visibleDISPLAY_ON_SCREEN_KEYBOARD_WHOLE_DISPLAY = true;
public visibleWHEN_FIELD_IS_IN_ERROR_AND_IS_SELECTED_TEXT = true;
public visibleWHEN_FIELD_IS_IN_ERROR_AND_IS_SELECTED_FILL = true;
public visibleALLOW_BUTTON_ACTION_ON_ERROR = true;
public visiblePOSITION = true;
public visibleX_POS = true;
public visibleY_POS = true;
public visibleALLOW_TITLE_BAR = true;
public visibleTITLE_BAR = true;
public visibleSYSTEM_MENU = true;
public visibleMINIMIZE_BUTTON = true;
public visibleSECURITY_CODE = true;
public visibleBACKGROUND_COLOR = true;
public visibleMAXIMIZE_BUTTON = true;
public visiblePIN_BUTTON = true;
public visibleSIZE_TO_MAIN_WINDOW_AT_RUNTIME = true;
public visibleUSE_GRADIENT_STYLE = false;
public visibleSHOW_LAST_ACQUIRED_VALUE = true;
public visibleMAXIMUM_TAG_UPDATE_RATE = true;
public visibleTRACK_SCREEN_FOR_NAVIGATION = true;
public visibleNAVIGATION_HISTORY_SCREEN_NAME = true;

public disableDISPLAY_SETTING_ID = false;
public disableDISPLAY_ID = false;
public disableDISPLAY_TYPE = false;
public disableKEEP_AT_BACK = false;
public disableCANNOT_BE_REPLACED = false;
public disableDISPLAY_SIZE = false;
public disableWIDTH = false;
public disableHEIGHT = false;
public disableALLOW_MULTIPLE_RUNNING_COPIES = false;
public disableWHEN_RESIZED = false;
public disableALLOW_DISPLAY_TO_BE_RESIZED = false;
public disableCACHE_AFTER_DISPLAYING = false;
public disableALWAYS_UPDATING = false;
public disableDIAGRAM_DATA = false;
public disableSCREEN_STATISTICS = false;
public disableSET_AS_DEFAULT = false;
public disableSTARTUP = false;
public disableSTARTUP_COMMANDS = false;
public disableBEEP_ON_PRESS = false;
public disableSHUTDOWN = false;
public disableSHUTDOWN_COMMANDS = false;
public disableHIGHLIGHT_WHEN_CURSOR_PASSES_OVER_IT = false;
public disableHIGHLIGHT_COLOR = false;
public disableWHEN_FIELD_IS_NOT_SELECTED_TEXT = false;
public disableWHEN_FIELD_IS_NOT_SELECTED_FILL = false;
public disableDISABLE_HIGHLIGHT_WHEN_OBJECT_HAS_FOCUS = false;
public disableWHEN_FIELD_IS_SELECTED_TEXT = false;
public disableWHEN_FIELD_IS_SELECTED_FILL = false;
public disableHIGHLIGHT_COLOR_FOCUS = false;
public disableWHEN_FIELD_IS_IN_ERROR_AND_IS_NOT_SELECTED_TEXT = false;
public disableWHEN_FIELD_IS_IN_ERROR_AND_IS_NOT_SELECTED_FILL = false;
public disableDISPLAY_ON_SCREEN_KEYBOARD_WHOLE_DISPLAY = false;
public disableWHEN_FIELD_IS_IN_ERROR_AND_IS_SELECTED_TEXT = false;
public disableWHEN_FIELD_IS_IN_ERROR_AND_IS_SELECTED_FILL = false;
public disableALLOW_BUTTON_ACTION_ON_ERROR = false;
public disablePOSITION = false;
public disableX_POS = false;
public disableY_POS = false;
public disableALLOW_TITLE_BAR = false;
public disableTITLE_BAR = false;
public disableSYSTEM_MENU = false;
public disableMINIMIZE_BUTTON = false;
public disableSECURITY_CODE = false;
public disableBACKGROUND_COLOR = false;
public disableMAXIMIZE_BUTTON = false;
public disablePIN_BUTTON = false;
public disableSIZE_TO_MAIN_WINDOW_AT_RUNTIME = false;
public disableUSE_GRADIENT_STYLE = false;
public disableSHOW_LAST_ACQUIRED_VALUE = false;
public disableMAXIMUM_TAG_UPDATE_RATE = false;
public disableTRACK_SCREEN_FOR_NAVIGATION = false;
public disableNAVIGATION_HISTORY_SCREEN_NAME = false;

public variableSCREEN_STATISTICS;
public variableSET_AS_DEFAULT;
public variableSTARTUP_COMMANDS;
public variableSHUTDOWN_COMMANDS;

  
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

  private formInitialValues:any =   new scddisplaySettingScdDssDisplaySettings();   
    @Input() public set detail_Input(form: any) {
       if (typeof form != "undefined"){
        this.isSearch = true;
        this.executeQuery(form);
        this.isChild = true;
      }
      /*
    if (this.paramConfig.DEBUG_FLAG) console.log('detail_Input ScdDisplaySettingScdDssDisplaySettingsFormtabs form.DISPLAY_ID :' + form.DISPLAY_ID);
    if ( (form.DISPLAY_ID != "") &&   (typeof form.DISPLAY_ID != "undefined"))
    {
      this.masterKey = form.DISPLAY_ID;
      
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
    if ( (typeof form != "undefined") &&   (typeof form.DISPLAY_ID != "undefined") &&   (form.DISPLAY_ID != ""))
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
      this.Comp_Config.masterKeyArr =  [NewVal['DISPLAY_SETTING_ID']];
      this.Comp_Config.masterKeyNameArr =  ["DISPLAY_SETTING_ID"];
         
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
this.lookupArrDef =[	{"statment":"SELECT DISPLAY_ID CODE, DISPLAY_NAME CODETEXT_LANG  FROM SCD_DISPLAY  order by CODETEXT_LANG ",
			"lkpArrName":"lkpArrDISPLAY_ID"},
	{"statment":"SELECT CODE, CODETEXT_LANG , PARTCODE FROM SOM_TABS_CODES WHERE CODENAME = \"DISPLAY_TYPE\"  and LANGUAGE_NAME = '" + this.userLang + "' order by CODETEXT_LANG ",
			"lkpArrName":"lkpArrDISPLAY_TYPE"},
	{"statment":"SELECT CODE, CODETEXT_LANG , PARTCODE FROM SOM_TABS_CODES WHERE CODENAME = \"DISPLAY_SIZE\"  and LANGUAGE_NAME = '" + this.userLang + "' order by CODETEXT_LANG ",
			"lkpArrName":"lkpArrDISPLAY_SIZE"},
	{"statment":"SELECT CODE, CODETEXT_LANG , PARTCODE FROM SOM_TABS_CODES WHERE CODENAME = \"WHEN_RESIZED\"  and LANGUAGE_NAME = '" + this.userLang + "' order by CODETEXT_LANG ",
			"lkpArrName":"lkpArrWHEN_RESIZED"},
	{"statment":"SELECT CODE, CODETEXT_LANG , PARTCODE FROM SOM_TABS_CODES WHERE CODENAME = \"CACHE_AFTER_DISPLAYING\"  and LANGUAGE_NAME = '" + this.userLang + "' order by CODETEXT_LANG ",
			"lkpArrName":"lkpArrCACHE_AFTER_DISPLAYING"},
	{"statment":"SELECT CODE, CODETEXT_LANG , PARTCODE FROM SOM_TABS_CODES WHERE CODENAME = \"POSITION\"  and LANGUAGE_NAME = '" + this.userLang + "' order by CODETEXT_LANG ",
			"lkpArrName":"lkpArrPOSITION"},
	{"statment":"SELECT CODE, CODETEXT_LANG , PARTCODE FROM SOM_TABS_CODES WHERE CODENAME = \"SECURITY_CODE\"  and LANGUAGE_NAME = '" + this.userLang + "' order by CODETEXT_LANG ",
			"lkpArrName":"lkpArrSECURITY_CODE"},
	{"statment":"SELECT CODE, CODETEXT_LANG , PARTCODE FROM SOM_TABS_CODES WHERE CODENAME = \"MAXIMUM_TAG_UPDATE_RATE\"  and LANGUAGE_NAME = '" + this.userLang + "' order by CODETEXT_LANG ",
			"lkpArrName":"lkpArrMAXIMUM_TAG_UPDATE_RATE"}];
 if (this.lookupArrDef.length > 0)
   this.starServices.fetchLookups(this, this.lookupArrDef);
}

public lkpArrDISPLAY_ID = [];

public lkpArrDISPLAY_TYPE = [];

public lkpArrDISPLAY_SIZE = [];

public lkpArrWHEN_RESIZED = [];

public lkpArrCACHE_AFTER_DISPLAYING = [];

public lkpArrPOSITION = [];

public lkpArrSECURITY_CODE = [];

public lkpArrMAXIMUM_TAG_UPDATE_RATE = [];

public lkpArrGetDISPLAY_ID(CODE: any): any {
var rec = this.lkpArrDISPLAY_ID.find((x:any) => x.CODE === CODE);
return rec;
}

public lkpArrGetDISPLAY_TYPE(CODE: any): any {
var rec = this.lkpArrDISPLAY_TYPE.find((x:any) => x.CODE === CODE);
return rec;
}

public lkpArrGetDISPLAY_SIZE(CODE: any): any {
var rec = this.lkpArrDISPLAY_SIZE.find((x:any) => x.CODE === CODE);
return rec;
}

public lkpArrGetWHEN_RESIZED(CODE: any): any {
var rec = this.lkpArrWHEN_RESIZED.find((x:any) => x.CODE === CODE);
return rec;
}

public lkpArrGetCACHE_AFTER_DISPLAYING(CODE: any): any {
var rec = this.lkpArrCACHE_AFTER_DISPLAYING.find((x:any) => x.CODE === CODE);
return rec;
}

public lkpArrGetPOSITION(CODE: any): any {
var rec = this.lkpArrPOSITION.find((x:any) => x.CODE === CODE);
return rec;
}

public lkpArrGetSECURITY_CODE(CODE: any): any {
var rec = this.lkpArrSECURITY_CODE.find((x:any) => x.CODE === CODE);
return rec;
}

public lkpArrGetMAXIMUM_TAG_UPDATE_RATE(CODE: any): any {
var rec = this.lkpArrMAXIMUM_TAG_UPDATE_RATE.find((x:any) => x.CODE === CODE);
return rec;
}

onChanges(): void {
this.form.get('DISPLAY_SETTING_ID').valueChanges.subscribe(val => {
});
this.form.get('WIDTH').valueChanges.subscribe(val => {
});
this.form.get('HEIGHT').valueChanges.subscribe(val => {
});
this.form.get('DIAGRAM_DATA').valueChanges.subscribe(val => {
});
this.form.get('STARTUP').valueChanges.subscribe(val => {
});
this.form.get('SHUTDOWN').valueChanges.subscribe(val => {
});
this.form.get('X_POS').valueChanges.subscribe(val => {
});
this.form.get('Y_POS').valueChanges.subscribe(val => {
});
this.form.get('TITLE_BAR').valueChanges.subscribe(val => {
});
this.form.get('NAVIGATION_HISTORY_SCREEN_NAME').valueChanges.subscribe(val => {
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
      if (this.paramConfig.DEBUG_FLAG) console.log("ScdDisplaySettingScdDssDisplaySettingsFormtabs ComponentConfig:", {...ComponentConfig});

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



async WHEN_VALIDATE_ITEM_DISPLAY_SETTING_ID(value) {

 this.FORM_TRIGGER_FAILURE = false ; 
 if (typeof this.form.controls['DISPLAY_SETTING_ID'] != "undefined" ) 
      this.form.controls['DISPLAY_SETTING_ID'].setErrors({invalid: true}); 
 // Code goes here 
 

 if ( this.FORM_TRIGGER_FAILURE == true) 
 return; 
 
 if (typeof this.form.controls['DISPLAY_SETTING_ID'] != "undefined" ) 
     this.form.get('DISPLAY_SETTING_ID').updateValueAndValidity();
 this.form.updateValueAndValidity(); 
 }

 async ON_CLICK_DISPLAY_SETTING_ID(event){

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

async WHEN_VALIDATE_ITEM_DISPLAY_TYPE(value) {

 this.FORM_TRIGGER_FAILURE = false ; 
 if (typeof this.form.controls['DISPLAY_TYPE'] != "undefined" ) 
      this.form.controls['DISPLAY_TYPE'].setErrors({invalid: true}); 
 // Code goes here 
 

 if ( this.FORM_TRIGGER_FAILURE == true) 
 return; 
 
 if (typeof this.form.controls['DISPLAY_TYPE'] != "undefined" ) 
     this.form.get('DISPLAY_TYPE').updateValueAndValidity();
 this.form.updateValueAndValidity(); 
 }

 async ON_CLICK_DISPLAY_TYPE(event){

}

async WHEN_VALIDATE_ITEM_KEEP_AT_BACK(value) {

 this.FORM_TRIGGER_FAILURE = false ; 
 if (typeof this.form.controls['KEEP_AT_BACK'] != "undefined" ) 
      this.form.controls['KEEP_AT_BACK'].setErrors({invalid: true}); 
 // Code goes here 
 

 if ( this.FORM_TRIGGER_FAILURE == true) 
 return; 
 
 if (typeof this.form.controls['KEEP_AT_BACK'] != "undefined" ) 
     this.form.get('KEEP_AT_BACK').updateValueAndValidity();
 this.form.updateValueAndValidity(); 
 }

 async ON_CLICK_KEEP_AT_BACK(event){

}

async WHEN_VALIDATE_ITEM_CANNOT_BE_REPLACED(value) {

 this.FORM_TRIGGER_FAILURE = false ; 
 if (typeof this.form.controls['CANNOT_BE_REPLACED'] != "undefined" ) 
      this.form.controls['CANNOT_BE_REPLACED'].setErrors({invalid: true}); 
 // Code goes here 
 

 if ( this.FORM_TRIGGER_FAILURE == true) 
 return; 
 
 if (typeof this.form.controls['CANNOT_BE_REPLACED'] != "undefined" ) 
     this.form.get('CANNOT_BE_REPLACED').updateValueAndValidity();
 this.form.updateValueAndValidity(); 
 }

 async ON_CLICK_CANNOT_BE_REPLACED(event){

}

async WHEN_VALIDATE_ITEM_DISPLAY_SIZE(value) {

 this.FORM_TRIGGER_FAILURE = false ; 
 if (typeof this.form.controls['DISPLAY_SIZE'] != "undefined" ) 
      this.form.controls['DISPLAY_SIZE'].setErrors({invalid: true}); 
 // Code goes here 
 

 if ( this.FORM_TRIGGER_FAILURE == true) 
 return; 
 
 if (typeof this.form.controls['DISPLAY_SIZE'] != "undefined" ) 
     this.form.get('DISPLAY_SIZE').updateValueAndValidity();
 this.form.updateValueAndValidity(); 
 }

 async ON_CLICK_DISPLAY_SIZE(event){

}

async WHEN_VALIDATE_ITEM_WIDTH(value) {

 this.FORM_TRIGGER_FAILURE = false ; 
 if (typeof this.form.controls['WIDTH'] != "undefined" ) 
      this.form.controls['WIDTH'].setErrors({invalid: true}); 
 // Code goes here 
 

 if ( this.FORM_TRIGGER_FAILURE == true) 
 return; 
 
 if (typeof this.form.controls['WIDTH'] != "undefined" ) 
     this.form.get('WIDTH').updateValueAndValidity();
 this.form.updateValueAndValidity(); 
 }

 async ON_CLICK_WIDTH(event){

}

async WHEN_VALIDATE_ITEM_HEIGHT(value) {

 this.FORM_TRIGGER_FAILURE = false ; 
 if (typeof this.form.controls['HEIGHT'] != "undefined" ) 
      this.form.controls['HEIGHT'].setErrors({invalid: true}); 
 // Code goes here 
 

 if ( this.FORM_TRIGGER_FAILURE == true) 
 return; 
 
 if (typeof this.form.controls['HEIGHT'] != "undefined" ) 
     this.form.get('HEIGHT').updateValueAndValidity();
 this.form.updateValueAndValidity(); 
 }

 async ON_CLICK_HEIGHT(event){

}

async WHEN_VALIDATE_ITEM_ALLOW_MULTIPLE_RUNNING_COPIES(value) {

 this.FORM_TRIGGER_FAILURE = false ; 
 if (typeof this.form.controls['ALLOW_MULTIPLE_RUNNING_COPIES'] != "undefined" ) 
      this.form.controls['ALLOW_MULTIPLE_RUNNING_COPIES'].setErrors({invalid: true}); 
 // Code goes here 
 

 if ( this.FORM_TRIGGER_FAILURE == true) 
 return; 
 
 if (typeof this.form.controls['ALLOW_MULTIPLE_RUNNING_COPIES'] != "undefined" ) 
     this.form.get('ALLOW_MULTIPLE_RUNNING_COPIES').updateValueAndValidity();
 this.form.updateValueAndValidity(); 
 }

 async ON_CLICK_ALLOW_MULTIPLE_RUNNING_COPIES(event){

}

async WHEN_VALIDATE_ITEM_WHEN_RESIZED(value) {

 this.FORM_TRIGGER_FAILURE = false ; 
 if (typeof this.form.controls['WHEN_RESIZED'] != "undefined" ) 
      this.form.controls['WHEN_RESIZED'].setErrors({invalid: true}); 
 // Code goes here 
 

 if ( this.FORM_TRIGGER_FAILURE == true) 
 return; 
 
 if (typeof this.form.controls['WHEN_RESIZED'] != "undefined" ) 
     this.form.get('WHEN_RESIZED').updateValueAndValidity();
 this.form.updateValueAndValidity(); 
 }

 async ON_CLICK_WHEN_RESIZED(event){

}

async WHEN_VALIDATE_ITEM_ALLOW_DISPLAY_TO_BE_RESIZED(value) {

 this.FORM_TRIGGER_FAILURE = false ; 
 if (typeof this.form.controls['ALLOW_DISPLAY_TO_BE_RESIZED'] != "undefined" ) 
      this.form.controls['ALLOW_DISPLAY_TO_BE_RESIZED'].setErrors({invalid: true}); 
 // Code goes here 
 

 if ( this.FORM_TRIGGER_FAILURE == true) 
 return; 
 
 if (typeof this.form.controls['ALLOW_DISPLAY_TO_BE_RESIZED'] != "undefined" ) 
     this.form.get('ALLOW_DISPLAY_TO_BE_RESIZED').updateValueAndValidity();
 this.form.updateValueAndValidity(); 
 }

 async ON_CLICK_ALLOW_DISPLAY_TO_BE_RESIZED(event){

}

async WHEN_VALIDATE_ITEM_CACHE_AFTER_DISPLAYING(value) {

 this.FORM_TRIGGER_FAILURE = false ; 
 if (typeof this.form.controls['CACHE_AFTER_DISPLAYING'] != "undefined" ) 
      this.form.controls['CACHE_AFTER_DISPLAYING'].setErrors({invalid: true}); 
 // Code goes here 
 

 if ( this.FORM_TRIGGER_FAILURE == true) 
 return; 
 
 if (typeof this.form.controls['CACHE_AFTER_DISPLAYING'] != "undefined" ) 
     this.form.get('CACHE_AFTER_DISPLAYING').updateValueAndValidity();
 this.form.updateValueAndValidity(); 
 }

 async ON_CLICK_CACHE_AFTER_DISPLAYING(event){

}

async WHEN_VALIDATE_ITEM_ALWAYS_UPDATING(value) {

 this.FORM_TRIGGER_FAILURE = false ; 
 if (typeof this.form.controls['ALWAYS_UPDATING'] != "undefined" ) 
      this.form.controls['ALWAYS_UPDATING'].setErrors({invalid: true}); 
 // Code goes here 
 

 if ( this.FORM_TRIGGER_FAILURE == true) 
 return; 
 
 if (typeof this.form.controls['ALWAYS_UPDATING'] != "undefined" ) 
     this.form.get('ALWAYS_UPDATING').updateValueAndValidity();
 this.form.updateValueAndValidity(); 
 }

 async ON_CLICK_ALWAYS_UPDATING(event){

}

async WHEN_VALIDATE_ITEM_DIAGRAM_DATA(value) {

 this.FORM_TRIGGER_FAILURE = false ; 
 if (typeof this.form.controls['DIAGRAM_DATA'] != "undefined" ) 
      this.form.controls['DIAGRAM_DATA'].setErrors({invalid: true}); 
 // Code goes here 
 

 if ( this.FORM_TRIGGER_FAILURE == true) 
 return; 
 
 if (typeof this.form.controls['DIAGRAM_DATA'] != "undefined" ) 
     this.form.get('DIAGRAM_DATA').updateValueAndValidity();
 this.form.updateValueAndValidity(); 
 }

 async ON_CLICK_DIAGRAM_DATA(event){

}

async WHEN_VALIDATE_ITEM_SCREEN_STATISTICS(value) {

 this.FORM_TRIGGER_FAILURE = false ; 
 if (typeof this.form.controls['SCREEN_STATISTICS'] != "undefined" ) 
      this.form.controls['SCREEN_STATISTICS'].setErrors({invalid: true}); 
 // Code goes here 
 

 if ( this.FORM_TRIGGER_FAILURE == true) 
 return; 
 
 if (typeof this.form.controls['SCREEN_STATISTICS'] != "undefined" ) 
     this.form.get('SCREEN_STATISTICS').updateValueAndValidity();
 this.form.updateValueAndValidity(); 
 }

 async ON_CLICK_SCREEN_STATISTICS(event){

}

async WHEN_VALIDATE_ITEM_SET_AS_DEFAULT(value) {

 this.FORM_TRIGGER_FAILURE = false ; 
 if (typeof this.form.controls['SET_AS_DEFAULT'] != "undefined" ) 
      this.form.controls['SET_AS_DEFAULT'].setErrors({invalid: true}); 
 // Code goes here 
 

 if ( this.FORM_TRIGGER_FAILURE == true) 
 return; 
 
 if (typeof this.form.controls['SET_AS_DEFAULT'] != "undefined" ) 
     this.form.get('SET_AS_DEFAULT').updateValueAndValidity();
 this.form.updateValueAndValidity(); 
 }

 async ON_CLICK_SET_AS_DEFAULT(event){

}

async WHEN_VALIDATE_ITEM_STARTUP(value) {

 this.FORM_TRIGGER_FAILURE = false ; 
 if (typeof this.form.controls['STARTUP'] != "undefined" ) 
      this.form.controls['STARTUP'].setErrors({invalid: true}); 
 // Code goes here 
 

 if ( this.FORM_TRIGGER_FAILURE == true) 
 return; 
 
 if (typeof this.form.controls['STARTUP'] != "undefined" ) 
     this.form.get('STARTUP').updateValueAndValidity();
 this.form.updateValueAndValidity(); 
 }

 async ON_CLICK_STARTUP(event){

}

async WHEN_VALIDATE_ITEM_STARTUP_COMMANDS(value) {

 this.FORM_TRIGGER_FAILURE = false ; 
 if (typeof this.form.controls['STARTUP_COMMANDS'] != "undefined" ) 
      this.form.controls['STARTUP_COMMANDS'].setErrors({invalid: true}); 
 // Code goes here 
 

 if ( this.FORM_TRIGGER_FAILURE == true) 
 return; 
 
 if (typeof this.form.controls['STARTUP_COMMANDS'] != "undefined" ) 
     this.form.get('STARTUP_COMMANDS').updateValueAndValidity();
 this.form.updateValueAndValidity(); 
 }

 async ON_CLICK_STARTUP_COMMANDS(event){

}

async WHEN_VALIDATE_ITEM_BEEP_ON_PRESS(value) {

 this.FORM_TRIGGER_FAILURE = false ; 
 if (typeof this.form.controls['BEEP_ON_PRESS'] != "undefined" ) 
      this.form.controls['BEEP_ON_PRESS'].setErrors({invalid: true}); 
 // Code goes here 
 

 if ( this.FORM_TRIGGER_FAILURE == true) 
 return; 
 
 if (typeof this.form.controls['BEEP_ON_PRESS'] != "undefined" ) 
     this.form.get('BEEP_ON_PRESS').updateValueAndValidity();
 this.form.updateValueAndValidity(); 
 }

 async ON_CLICK_BEEP_ON_PRESS(event){

}

async WHEN_VALIDATE_ITEM_SHUTDOWN(value) {

 this.FORM_TRIGGER_FAILURE = false ; 
 if (typeof this.form.controls['SHUTDOWN'] != "undefined" ) 
      this.form.controls['SHUTDOWN'].setErrors({invalid: true}); 
 // Code goes here 
 

 if ( this.FORM_TRIGGER_FAILURE == true) 
 return; 
 
 if (typeof this.form.controls['SHUTDOWN'] != "undefined" ) 
     this.form.get('SHUTDOWN').updateValueAndValidity();
 this.form.updateValueAndValidity(); 
 }

 async ON_CLICK_SHUTDOWN(event){

}

async WHEN_VALIDATE_ITEM_SHUTDOWN_COMMANDS(value) {

 this.FORM_TRIGGER_FAILURE = false ; 
 if (typeof this.form.controls['SHUTDOWN_COMMANDS'] != "undefined" ) 
      this.form.controls['SHUTDOWN_COMMANDS'].setErrors({invalid: true}); 
 // Code goes here 
 

 if ( this.FORM_TRIGGER_FAILURE == true) 
 return; 
 
 if (typeof this.form.controls['SHUTDOWN_COMMANDS'] != "undefined" ) 
     this.form.get('SHUTDOWN_COMMANDS').updateValueAndValidity();
 this.form.updateValueAndValidity(); 
 }

 async ON_CLICK_SHUTDOWN_COMMANDS(event){

}

async WHEN_VALIDATE_ITEM_HIGHLIGHT_WHEN_CURSOR_PASSES_OVER_IT(value) {

 this.FORM_TRIGGER_FAILURE = false ; 
 if (typeof this.form.controls['HIGHLIGHT_WHEN_CURSOR_PASSES_OVER_IT'] != "undefined" ) 
      this.form.controls['HIGHLIGHT_WHEN_CURSOR_PASSES_OVER_IT'].setErrors({invalid: true}); 
 // Code goes here 
 

 if ( this.FORM_TRIGGER_FAILURE == true) 
 return; 
 
 if (typeof this.form.controls['HIGHLIGHT_WHEN_CURSOR_PASSES_OVER_IT'] != "undefined" ) 
     this.form.get('HIGHLIGHT_WHEN_CURSOR_PASSES_OVER_IT').updateValueAndValidity();
 this.form.updateValueAndValidity(); 
 }

 async ON_CLICK_HIGHLIGHT_WHEN_CURSOR_PASSES_OVER_IT(event){

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

async WHEN_VALIDATE_ITEM_WHEN_FIELD_IS_NOT_SELECTED_TEXT(value) {

 this.FORM_TRIGGER_FAILURE = false ; 
 if (typeof this.form.controls['WHEN_FIELD_IS_NOT_SELECTED_TEXT'] != "undefined" ) 
      this.form.controls['WHEN_FIELD_IS_NOT_SELECTED_TEXT'].setErrors({invalid: true}); 
 // Code goes here 
 

 if ( this.FORM_TRIGGER_FAILURE == true) 
 return; 
 
 if (typeof this.form.controls['WHEN_FIELD_IS_NOT_SELECTED_TEXT'] != "undefined" ) 
     this.form.get('WHEN_FIELD_IS_NOT_SELECTED_TEXT').updateValueAndValidity();
 this.form.updateValueAndValidity(); 
 }

 async ON_CLICK_WHEN_FIELD_IS_NOT_SELECTED_TEXT(event){

}

async WHEN_VALIDATE_ITEM_WHEN_FIELD_IS_NOT_SELECTED_FILL(value) {

 this.FORM_TRIGGER_FAILURE = false ; 
 if (typeof this.form.controls['WHEN_FIELD_IS_NOT_SELECTED_FILL'] != "undefined" ) 
      this.form.controls['WHEN_FIELD_IS_NOT_SELECTED_FILL'].setErrors({invalid: true}); 
 // Code goes here 
 

 if ( this.FORM_TRIGGER_FAILURE == true) 
 return; 
 
 if (typeof this.form.controls['WHEN_FIELD_IS_NOT_SELECTED_FILL'] != "undefined" ) 
     this.form.get('WHEN_FIELD_IS_NOT_SELECTED_FILL').updateValueAndValidity();
 this.form.updateValueAndValidity(); 
 }

 async ON_CLICK_WHEN_FIELD_IS_NOT_SELECTED_FILL(event){

}

async WHEN_VALIDATE_ITEM_DISABLE_HIGHLIGHT_WHEN_OBJECT_HAS_FOCUS(value) {

 this.FORM_TRIGGER_FAILURE = false ; 
 if (typeof this.form.controls['DISABLE_HIGHLIGHT_WHEN_OBJECT_HAS_FOCUS'] != "undefined" ) 
      this.form.controls['DISABLE_HIGHLIGHT_WHEN_OBJECT_HAS_FOCUS'].setErrors({invalid: true}); 
 // Code goes here 
 

 if ( this.FORM_TRIGGER_FAILURE == true) 
 return; 
 
 if (typeof this.form.controls['DISABLE_HIGHLIGHT_WHEN_OBJECT_HAS_FOCUS'] != "undefined" ) 
     this.form.get('DISABLE_HIGHLIGHT_WHEN_OBJECT_HAS_FOCUS').updateValueAndValidity();
 this.form.updateValueAndValidity(); 
 }

 async ON_CLICK_DISABLE_HIGHLIGHT_WHEN_OBJECT_HAS_FOCUS(event){

}

async WHEN_VALIDATE_ITEM_WHEN_FIELD_IS_SELECTED_TEXT(value) {

 this.FORM_TRIGGER_FAILURE = false ; 
 if (typeof this.form.controls['WHEN_FIELD_IS_SELECTED_TEXT'] != "undefined" ) 
      this.form.controls['WHEN_FIELD_IS_SELECTED_TEXT'].setErrors({invalid: true}); 
 // Code goes here 
 

 if ( this.FORM_TRIGGER_FAILURE == true) 
 return; 
 
 if (typeof this.form.controls['WHEN_FIELD_IS_SELECTED_TEXT'] != "undefined" ) 
     this.form.get('WHEN_FIELD_IS_SELECTED_TEXT').updateValueAndValidity();
 this.form.updateValueAndValidity(); 
 }

 async ON_CLICK_WHEN_FIELD_IS_SELECTED_TEXT(event){

}

async WHEN_VALIDATE_ITEM_WHEN_FIELD_IS_SELECTED_FILL(value) {

 this.FORM_TRIGGER_FAILURE = false ; 
 if (typeof this.form.controls['WHEN_FIELD_IS_SELECTED_FILL'] != "undefined" ) 
      this.form.controls['WHEN_FIELD_IS_SELECTED_FILL'].setErrors({invalid: true}); 
 // Code goes here 
 

 if ( this.FORM_TRIGGER_FAILURE == true) 
 return; 
 
 if (typeof this.form.controls['WHEN_FIELD_IS_SELECTED_FILL'] != "undefined" ) 
     this.form.get('WHEN_FIELD_IS_SELECTED_FILL').updateValueAndValidity();
 this.form.updateValueAndValidity(); 
 }

 async ON_CLICK_WHEN_FIELD_IS_SELECTED_FILL(event){

}

async WHEN_VALIDATE_ITEM_HIGHLIGHT_COLOR_FOCUS(value) {

 this.FORM_TRIGGER_FAILURE = false ; 
 if (typeof this.form.controls['HIGHLIGHT_COLOR_FOCUS'] != "undefined" ) 
      this.form.controls['HIGHLIGHT_COLOR_FOCUS'].setErrors({invalid: true}); 
 // Code goes here 
 

 if ( this.FORM_TRIGGER_FAILURE == true) 
 return; 
 
 if (typeof this.form.controls['HIGHLIGHT_COLOR_FOCUS'] != "undefined" ) 
     this.form.get('HIGHLIGHT_COLOR_FOCUS').updateValueAndValidity();
 this.form.updateValueAndValidity(); 
 }

 async ON_CLICK_HIGHLIGHT_COLOR_FOCUS(event){

}

async WHEN_VALIDATE_ITEM_WHEN_FIELD_IS_IN_ERROR_AND_IS_NOT_SELECTED_TEXT(value) {

 this.FORM_TRIGGER_FAILURE = false ; 
 if (typeof this.form.controls['WHEN_FIELD_IS_IN_ERROR_AND_IS_NOT_SELECTED_TEXT'] != "undefined" ) 
      this.form.controls['WHEN_FIELD_IS_IN_ERROR_AND_IS_NOT_SELECTED_TEXT'].setErrors({invalid: true}); 
 // Code goes here 
 

 if ( this.FORM_TRIGGER_FAILURE == true) 
 return; 
 
 if (typeof this.form.controls['WHEN_FIELD_IS_IN_ERROR_AND_IS_NOT_SELECTED_TEXT'] != "undefined" ) 
     this.form.get('WHEN_FIELD_IS_IN_ERROR_AND_IS_NOT_SELECTED_TEXT').updateValueAndValidity();
 this.form.updateValueAndValidity(); 
 }

 async ON_CLICK_WHEN_FIELD_IS_IN_ERROR_AND_IS_NOT_SELECTED_TEXT(event){

}

async WHEN_VALIDATE_ITEM_WHEN_FIELD_IS_IN_ERROR_AND_IS_NOT_SELECTED_FILL(value) {

 this.FORM_TRIGGER_FAILURE = false ; 
 if (typeof this.form.controls['WHEN_FIELD_IS_IN_ERROR_AND_IS_NOT_SELECTED_FILL'] != "undefined" ) 
      this.form.controls['WHEN_FIELD_IS_IN_ERROR_AND_IS_NOT_SELECTED_FILL'].setErrors({invalid: true}); 
 // Code goes here 
 

 if ( this.FORM_TRIGGER_FAILURE == true) 
 return; 
 
 if (typeof this.form.controls['WHEN_FIELD_IS_IN_ERROR_AND_IS_NOT_SELECTED_FILL'] != "undefined" ) 
     this.form.get('WHEN_FIELD_IS_IN_ERROR_AND_IS_NOT_SELECTED_FILL').updateValueAndValidity();
 this.form.updateValueAndValidity(); 
 }

 async ON_CLICK_WHEN_FIELD_IS_IN_ERROR_AND_IS_NOT_SELECTED_FILL(event){

}

async WHEN_VALIDATE_ITEM_DISPLAY_ON_SCREEN_KEYBOARD_WHOLE_DISPLAY(value) {

 this.FORM_TRIGGER_FAILURE = false ; 
 if (typeof this.form.controls['DISPLAY_ON_SCREEN_KEYBOARD_WHOLE_DISPLAY'] != "undefined" ) 
      this.form.controls['DISPLAY_ON_SCREEN_KEYBOARD_WHOLE_DISPLAY'].setErrors({invalid: true}); 
 // Code goes here 
 

 if ( this.FORM_TRIGGER_FAILURE == true) 
 return; 
 
 if (typeof this.form.controls['DISPLAY_ON_SCREEN_KEYBOARD_WHOLE_DISPLAY'] != "undefined" ) 
     this.form.get('DISPLAY_ON_SCREEN_KEYBOARD_WHOLE_DISPLAY').updateValueAndValidity();
 this.form.updateValueAndValidity(); 
 }

 async ON_CLICK_DISPLAY_ON_SCREEN_KEYBOARD_WHOLE_DISPLAY(event){

}

async WHEN_VALIDATE_ITEM_WHEN_FIELD_IS_IN_ERROR_AND_IS_SELECTED_TEXT(value) {

 this.FORM_TRIGGER_FAILURE = false ; 
 if (typeof this.form.controls['WHEN_FIELD_IS_IN_ERROR_AND_IS_SELECTED_TEXT'] != "undefined" ) 
      this.form.controls['WHEN_FIELD_IS_IN_ERROR_AND_IS_SELECTED_TEXT'].setErrors({invalid: true}); 
 // Code goes here 
 

 if ( this.FORM_TRIGGER_FAILURE == true) 
 return; 
 
 if (typeof this.form.controls['WHEN_FIELD_IS_IN_ERROR_AND_IS_SELECTED_TEXT'] != "undefined" ) 
     this.form.get('WHEN_FIELD_IS_IN_ERROR_AND_IS_SELECTED_TEXT').updateValueAndValidity();
 this.form.updateValueAndValidity(); 
 }

 async ON_CLICK_WHEN_FIELD_IS_IN_ERROR_AND_IS_SELECTED_TEXT(event){

}

async WHEN_VALIDATE_ITEM_WHEN_FIELD_IS_IN_ERROR_AND_IS_SELECTED_FILL(value) {

 this.FORM_TRIGGER_FAILURE = false ; 
 if (typeof this.form.controls['WHEN_FIELD_IS_IN_ERROR_AND_IS_SELECTED_FILL'] != "undefined" ) 
      this.form.controls['WHEN_FIELD_IS_IN_ERROR_AND_IS_SELECTED_FILL'].setErrors({invalid: true}); 
 // Code goes here 
 

 if ( this.FORM_TRIGGER_FAILURE == true) 
 return; 
 
 if (typeof this.form.controls['WHEN_FIELD_IS_IN_ERROR_AND_IS_SELECTED_FILL'] != "undefined" ) 
     this.form.get('WHEN_FIELD_IS_IN_ERROR_AND_IS_SELECTED_FILL').updateValueAndValidity();
 this.form.updateValueAndValidity(); 
 }

 async ON_CLICK_WHEN_FIELD_IS_IN_ERROR_AND_IS_SELECTED_FILL(event){

}

async WHEN_VALIDATE_ITEM_ALLOW_BUTTON_ACTION_ON_ERROR(value) {

 this.FORM_TRIGGER_FAILURE = false ; 
 if (typeof this.form.controls['ALLOW_BUTTON_ACTION_ON_ERROR'] != "undefined" ) 
      this.form.controls['ALLOW_BUTTON_ACTION_ON_ERROR'].setErrors({invalid: true}); 
 // Code goes here 
 

 if ( this.FORM_TRIGGER_FAILURE == true) 
 return; 
 
 if (typeof this.form.controls['ALLOW_BUTTON_ACTION_ON_ERROR'] != "undefined" ) 
     this.form.get('ALLOW_BUTTON_ACTION_ON_ERROR').updateValueAndValidity();
 this.form.updateValueAndValidity(); 
 }

 async ON_CLICK_ALLOW_BUTTON_ACTION_ON_ERROR(event){

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

async WHEN_VALIDATE_ITEM_X_POS(value) {

 this.FORM_TRIGGER_FAILURE = false ; 
 if (typeof this.form.controls['X_POS'] != "undefined" ) 
      this.form.controls['X_POS'].setErrors({invalid: true}); 
 // Code goes here 
 

 if ( this.FORM_TRIGGER_FAILURE == true) 
 return; 
 
 if (typeof this.form.controls['X_POS'] != "undefined" ) 
     this.form.get('X_POS').updateValueAndValidity();
 this.form.updateValueAndValidity(); 
 }

 async ON_CLICK_X_POS(event){

}

async WHEN_VALIDATE_ITEM_Y_POS(value) {

 this.FORM_TRIGGER_FAILURE = false ; 
 if (typeof this.form.controls['Y_POS'] != "undefined" ) 
      this.form.controls['Y_POS'].setErrors({invalid: true}); 
 // Code goes here 
 

 if ( this.FORM_TRIGGER_FAILURE == true) 
 return; 
 
 if (typeof this.form.controls['Y_POS'] != "undefined" ) 
     this.form.get('Y_POS').updateValueAndValidity();
 this.form.updateValueAndValidity(); 
 }

 async ON_CLICK_Y_POS(event){

}

async WHEN_VALIDATE_ITEM_ALLOW_TITLE_BAR(value) {

 this.FORM_TRIGGER_FAILURE = false ; 
 if (typeof this.form.controls['ALLOW_TITLE_BAR'] != "undefined" ) 
      this.form.controls['ALLOW_TITLE_BAR'].setErrors({invalid: true}); 
 // Code goes here 
 

 if ( this.FORM_TRIGGER_FAILURE == true) 
 return; 
 
 if (typeof this.form.controls['ALLOW_TITLE_BAR'] != "undefined" ) 
     this.form.get('ALLOW_TITLE_BAR').updateValueAndValidity();
 this.form.updateValueAndValidity(); 
 }

 async ON_CLICK_ALLOW_TITLE_BAR(event){

}

async WHEN_VALIDATE_ITEM_TITLE_BAR(value) {

 this.FORM_TRIGGER_FAILURE = false ; 
 if (typeof this.form.controls['TITLE_BAR'] != "undefined" ) 
      this.form.controls['TITLE_BAR'].setErrors({invalid: true}); 
 // Code goes here 
 

 if ( this.FORM_TRIGGER_FAILURE == true) 
 return; 
 
 if (typeof this.form.controls['TITLE_BAR'] != "undefined" ) 
     this.form.get('TITLE_BAR').updateValueAndValidity();
 this.form.updateValueAndValidity(); 
 }

 async ON_CLICK_TITLE_BAR(event){

}

async WHEN_VALIDATE_ITEM_SYSTEM_MENU(value) {

 this.FORM_TRIGGER_FAILURE = false ; 
 if (typeof this.form.controls['SYSTEM_MENU'] != "undefined" ) 
      this.form.controls['SYSTEM_MENU'].setErrors({invalid: true}); 
 // Code goes here 
 

 if ( this.FORM_TRIGGER_FAILURE == true) 
 return; 
 
 if (typeof this.form.controls['SYSTEM_MENU'] != "undefined" ) 
     this.form.get('SYSTEM_MENU').updateValueAndValidity();
 this.form.updateValueAndValidity(); 
 }

 async ON_CLICK_SYSTEM_MENU(event){

}

async WHEN_VALIDATE_ITEM_MINIMIZE_BUTTON(value) {

 this.FORM_TRIGGER_FAILURE = false ; 
 if (typeof this.form.controls['MINIMIZE_BUTTON'] != "undefined" ) 
      this.form.controls['MINIMIZE_BUTTON'].setErrors({invalid: true}); 
 // Code goes here 
 

 if ( this.FORM_TRIGGER_FAILURE == true) 
 return; 
 
 if (typeof this.form.controls['MINIMIZE_BUTTON'] != "undefined" ) 
     this.form.get('MINIMIZE_BUTTON').updateValueAndValidity();
 this.form.updateValueAndValidity(); 
 }

 async ON_CLICK_MINIMIZE_BUTTON(event){

}

async WHEN_VALIDATE_ITEM_SECURITY_CODE(value) {

 this.FORM_TRIGGER_FAILURE = false ; 
 if (typeof this.form.controls['SECURITY_CODE'] != "undefined" ) 
      this.form.controls['SECURITY_CODE'].setErrors({invalid: true}); 
 // Code goes here 
 

 if ( this.FORM_TRIGGER_FAILURE == true) 
 return; 
 
 if (typeof this.form.controls['SECURITY_CODE'] != "undefined" ) 
     this.form.get('SECURITY_CODE').updateValueAndValidity();
 this.form.updateValueAndValidity(); 
 }

 async ON_CLICK_SECURITY_CODE(event){

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

async WHEN_VALIDATE_ITEM_MAXIMIZE_BUTTON(value) {

 this.FORM_TRIGGER_FAILURE = false ; 
 if (typeof this.form.controls['MAXIMIZE_BUTTON'] != "undefined" ) 
      this.form.controls['MAXIMIZE_BUTTON'].setErrors({invalid: true}); 
 // Code goes here 
 

 if ( this.FORM_TRIGGER_FAILURE == true) 
 return; 
 
 if (typeof this.form.controls['MAXIMIZE_BUTTON'] != "undefined" ) 
     this.form.get('MAXIMIZE_BUTTON').updateValueAndValidity();
 this.form.updateValueAndValidity(); 
 }

 async ON_CLICK_MAXIMIZE_BUTTON(event){

}

async WHEN_VALIDATE_ITEM_PIN_BUTTON(value) {

 this.FORM_TRIGGER_FAILURE = false ; 
 if (typeof this.form.controls['PIN_BUTTON'] != "undefined" ) 
      this.form.controls['PIN_BUTTON'].setErrors({invalid: true}); 
 // Code goes here 
 

 if ( this.FORM_TRIGGER_FAILURE == true) 
 return; 
 
 if (typeof this.form.controls['PIN_BUTTON'] != "undefined" ) 
     this.form.get('PIN_BUTTON').updateValueAndValidity();
 this.form.updateValueAndValidity(); 
 }

 async ON_CLICK_PIN_BUTTON(event){

}

async WHEN_VALIDATE_ITEM_SIZE_TO_MAIN_WINDOW_AT_RUNTIME(value) {

 this.FORM_TRIGGER_FAILURE = false ; 
 if (typeof this.form.controls['SIZE_TO_MAIN_WINDOW_AT_RUNTIME'] != "undefined" ) 
      this.form.controls['SIZE_TO_MAIN_WINDOW_AT_RUNTIME'].setErrors({invalid: true}); 
 // Code goes here 
 

 if ( this.FORM_TRIGGER_FAILURE == true) 
 return; 
 
 if (typeof this.form.controls['SIZE_TO_MAIN_WINDOW_AT_RUNTIME'] != "undefined" ) 
     this.form.get('SIZE_TO_MAIN_WINDOW_AT_RUNTIME').updateValueAndValidity();
 this.form.updateValueAndValidity(); 
 }

 async ON_CLICK_SIZE_TO_MAIN_WINDOW_AT_RUNTIME(event){

}

async WHEN_VALIDATE_ITEM_USE_GRADIENT_STYLE(value) {

 this.FORM_TRIGGER_FAILURE = false ; 
 if (typeof this.form.controls['USE_GRADIENT_STYLE'] != "undefined" ) 
      this.form.controls['USE_GRADIENT_STYLE'].setErrors({invalid: true}); 
 // Code goes here 
 

 if ( this.FORM_TRIGGER_FAILURE == true) 
 return; 
 
 if (typeof this.form.controls['USE_GRADIENT_STYLE'] != "undefined" ) 
     this.form.get('USE_GRADIENT_STYLE').updateValueAndValidity();
 this.form.updateValueAndValidity(); 
 }

 async ON_CLICK_USE_GRADIENT_STYLE(event){

}

async WHEN_VALIDATE_ITEM_SHOW_LAST_ACQUIRED_VALUE(value) {

 this.FORM_TRIGGER_FAILURE = false ; 
 if (typeof this.form.controls['SHOW_LAST_ACQUIRED_VALUE'] != "undefined" ) 
      this.form.controls['SHOW_LAST_ACQUIRED_VALUE'].setErrors({invalid: true}); 
 // Code goes here 
 

 if ( this.FORM_TRIGGER_FAILURE == true) 
 return; 
 
 if (typeof this.form.controls['SHOW_LAST_ACQUIRED_VALUE'] != "undefined" ) 
     this.form.get('SHOW_LAST_ACQUIRED_VALUE').updateValueAndValidity();
 this.form.updateValueAndValidity(); 
 }

 async ON_CLICK_SHOW_LAST_ACQUIRED_VALUE(event){

}

async WHEN_VALIDATE_ITEM_MAXIMUM_TAG_UPDATE_RATE(value) {

 this.FORM_TRIGGER_FAILURE = false ; 
 if (typeof this.form.controls['MAXIMUM_TAG_UPDATE_RATE'] != "undefined" ) 
      this.form.controls['MAXIMUM_TAG_UPDATE_RATE'].setErrors({invalid: true}); 
 // Code goes here 
 

 if ( this.FORM_TRIGGER_FAILURE == true) 
 return; 
 
 if (typeof this.form.controls['MAXIMUM_TAG_UPDATE_RATE'] != "undefined" ) 
     this.form.get('MAXIMUM_TAG_UPDATE_RATE').updateValueAndValidity();
 this.form.updateValueAndValidity(); 
 }

 async ON_CLICK_MAXIMUM_TAG_UPDATE_RATE(event){

}

async WHEN_VALIDATE_ITEM_TRACK_SCREEN_FOR_NAVIGATION(value) {

 this.FORM_TRIGGER_FAILURE = false ; 
 if (typeof this.form.controls['TRACK_SCREEN_FOR_NAVIGATION'] != "undefined" ) 
      this.form.controls['TRACK_SCREEN_FOR_NAVIGATION'].setErrors({invalid: true}); 
 // Code goes here 
 

 if ( this.FORM_TRIGGER_FAILURE == true) 
 return; 
 
 if (typeof this.form.controls['TRACK_SCREEN_FOR_NAVIGATION'] != "undefined" ) 
     this.form.get('TRACK_SCREEN_FOR_NAVIGATION').updateValueAndValidity();
 this.form.updateValueAndValidity(); 
 }

 async ON_CLICK_TRACK_SCREEN_FOR_NAVIGATION(event){

}

async WHEN_VALIDATE_ITEM_NAVIGATION_HISTORY_SCREEN_NAME(value) {

 this.FORM_TRIGGER_FAILURE = false ; 
 if (typeof this.form.controls['NAVIGATION_HISTORY_SCREEN_NAME'] != "undefined" ) 
      this.form.controls['NAVIGATION_HISTORY_SCREEN_NAME'].setErrors({invalid: true}); 
 // Code goes here 
 

 if ( this.FORM_TRIGGER_FAILURE == true) 
 return; 
 
 if (typeof this.form.controls['NAVIGATION_HISTORY_SCREEN_NAME'] != "undefined" ) 
     this.form.get('NAVIGATION_HISTORY_SCREEN_NAME').updateValueAndValidity();
 this.form.updateValueAndValidity(); 
 }

 async ON_CLICK_NAVIGATION_HISTORY_SCREEN_NAME(event){

}
 
 async onChange_DISPLAY_SETTING_ID(event:any) { 
 var value = event.target.value; 
 if ((value == null) || (value == '')) 	
 	return;  
    this.FORM_TRIGGER_FAILURE = false;	
 await   this.WHEN_VALIDATE_ITEM_DISPLAY_SETTING_ID(value); if ( this.FORM_TRIGGER_FAILURE) return; 
 this.formValidationChangedOutput.emit(this.form.valid); 
  
 } 
 async onValueChange_DISPLAY_ID(value) { 
  this.FORM_TRIGGER_FAILURE = false;	
 await this.WHEN_VALIDATE_ITEM_DISPLAY_ID(value); if ( this.FORM_TRIGGER_FAILURE) return; 
 this.formValidationChangedOutput.emit(this.form.valid); 
  
  } 
 async onChange_DISPLAY_TYPE(event:any) { 
 var value = event.target.value; 
 if ((value == null) || (value == '')) 	
 	return;  
    this.FORM_TRIGGER_FAILURE = false;	
 await   this.WHEN_VALIDATE_ITEM_DISPLAY_TYPE(value); if ( this.FORM_TRIGGER_FAILURE) return; 
 this.formValidationChangedOutput.emit(this.form.valid); 
  
 } 
 async onChange_KEEP_AT_BACK(event:any) { 
 var value = event.target.value; 
 if ((value == null) || (value == '')) 	
 	return;  
    this.FORM_TRIGGER_FAILURE = false;	
 await   this.WHEN_VALIDATE_ITEM_KEEP_AT_BACK(value); if ( this.FORM_TRIGGER_FAILURE) return; 
 this.formValidationChangedOutput.emit(this.form.valid); 
  
 } 
 async onChange_CANNOT_BE_REPLACED(event:any) { 
 var value = event.target.value; 
 if ((value == null) || (value == '')) 	
 	return;  
    this.FORM_TRIGGER_FAILURE = false;	
 await   this.WHEN_VALIDATE_ITEM_CANNOT_BE_REPLACED(value); if ( this.FORM_TRIGGER_FAILURE) return; 
 this.formValidationChangedOutput.emit(this.form.valid); 
  
 } 
 async onChange_DISPLAY_SIZE(event:any) { 
 var value = event.target.value; 
 if ((value == null) || (value == '')) 	
 	return;  
    this.FORM_TRIGGER_FAILURE = false;	
 await   this.WHEN_VALIDATE_ITEM_DISPLAY_SIZE(value); if ( this.FORM_TRIGGER_FAILURE) return; 
 this.formValidationChangedOutput.emit(this.form.valid); 
  
 } 
 async onChange_WIDTH(event:any) { 
 var value = event.target.value; 
 if ((value == null) || (value == '')) 	
 	return;  
    this.FORM_TRIGGER_FAILURE = false;	
 await   this.WHEN_VALIDATE_ITEM_WIDTH(value); if ( this.FORM_TRIGGER_FAILURE) return; 
 this.formValidationChangedOutput.emit(this.form.valid); 
  
 } 
 async onChange_HEIGHT(event:any) { 
 var value = event.target.value; 
 if ((value == null) || (value == '')) 	
 	return;  
    this.FORM_TRIGGER_FAILURE = false;	
 await   this.WHEN_VALIDATE_ITEM_HEIGHT(value); if ( this.FORM_TRIGGER_FAILURE) return; 
 this.formValidationChangedOutput.emit(this.form.valid); 
  
 } 
 async onChange_ALLOW_MULTIPLE_RUNNING_COPIES(event:any) { 
 var value = event.target.value; 
 if ((value == null) || (value == '')) 	
 	return;  
    this.FORM_TRIGGER_FAILURE = false;	
 await   this.WHEN_VALIDATE_ITEM_ALLOW_MULTIPLE_RUNNING_COPIES(value); if ( this.FORM_TRIGGER_FAILURE) return; 
 this.formValidationChangedOutput.emit(this.form.valid); 
  
 } 
 async onChange_WHEN_RESIZED(event:any) { 
 var value = event.target.value; 
 if ((value == null) || (value == '')) 	
 	return;  
    this.FORM_TRIGGER_FAILURE = false;	
 await   this.WHEN_VALIDATE_ITEM_WHEN_RESIZED(value); if ( this.FORM_TRIGGER_FAILURE) return; 
 this.formValidationChangedOutput.emit(this.form.valid); 
  
 } 
 async onChange_ALLOW_DISPLAY_TO_BE_RESIZED(event:any) { 
 var value = event.target.value; 
 if ((value == null) || (value == '')) 	
 	return;  
    this.FORM_TRIGGER_FAILURE = false;	
 await   this.WHEN_VALIDATE_ITEM_ALLOW_DISPLAY_TO_BE_RESIZED(value); if ( this.FORM_TRIGGER_FAILURE) return; 
 this.formValidationChangedOutput.emit(this.form.valid); 
  
 } 
 async onChange_CACHE_AFTER_DISPLAYING(event:any) { 
 var value = event.target.value; 
 if ((value == null) || (value == '')) 	
 	return;  
    this.FORM_TRIGGER_FAILURE = false;	
 await   this.WHEN_VALIDATE_ITEM_CACHE_AFTER_DISPLAYING(value); if ( this.FORM_TRIGGER_FAILURE) return; 
 this.formValidationChangedOutput.emit(this.form.valid); 
  
 } 
 async onChange_ALWAYS_UPDATING(event:any) { 
 var value = event.target.value; 
 if ((value == null) || (value == '')) 	
 	return;  
    this.FORM_TRIGGER_FAILURE = false;	
 await   this.WHEN_VALIDATE_ITEM_ALWAYS_UPDATING(value); if ( this.FORM_TRIGGER_FAILURE) return; 
 this.formValidationChangedOutput.emit(this.form.valid); 
  
 } 
 async onChange_DIAGRAM_DATA(event:any) { 
 var value = event.target.value; 
 if ((value == null) || (value == '')) 	
 	return;  
    this.FORM_TRIGGER_FAILURE = false;	
 await   this.WHEN_VALIDATE_ITEM_DIAGRAM_DATA(value); if ( this.FORM_TRIGGER_FAILURE) return; 
 this.formValidationChangedOutput.emit(this.form.valid); 
  
 } 
 async onValueChange_SCREEN_STATISTICS(value) { 
  this.FORM_TRIGGER_FAILURE = false;	
 await this.WHEN_VALIDATE_ITEM_SCREEN_STATISTICS(value); if ( this.FORM_TRIGGER_FAILURE) return; 
 this.formValidationChangedOutput.emit(this.form.valid); 
  
  } 
 async onValueChange_SET_AS_DEFAULT(value) { 
  this.FORM_TRIGGER_FAILURE = false;	
 await this.WHEN_VALIDATE_ITEM_SET_AS_DEFAULT(value); if ( this.FORM_TRIGGER_FAILURE) return; 
 this.formValidationChangedOutput.emit(this.form.valid); 
  
  } 
 async onChange_STARTUP(event:any) { 
 var value = event.target.value; 
 if ((value == null) || (value == '')) 	
 	return;  
    this.FORM_TRIGGER_FAILURE = false;	
 await   this.WHEN_VALIDATE_ITEM_STARTUP(value); if ( this.FORM_TRIGGER_FAILURE) return; 
 this.formValidationChangedOutput.emit(this.form.valid); 
  
 } 
 async onValueChange_STARTUP_COMMANDS(value) { 
  this.FORM_TRIGGER_FAILURE = false;	
 await this.WHEN_VALIDATE_ITEM_STARTUP_COMMANDS(value); if ( this.FORM_TRIGGER_FAILURE) return; 
 this.formValidationChangedOutput.emit(this.form.valid); 
  
  } 
 async onChange_BEEP_ON_PRESS(event:any) { 
 var value = event.target.value; 
 if ((value == null) || (value == '')) 	
 	return;  
    this.FORM_TRIGGER_FAILURE = false;	
 await   this.WHEN_VALIDATE_ITEM_BEEP_ON_PRESS(value); if ( this.FORM_TRIGGER_FAILURE) return; 
 this.formValidationChangedOutput.emit(this.form.valid); 
  
 } 
 async onChange_SHUTDOWN(event:any) { 
 var value = event.target.value; 
 if ((value == null) || (value == '')) 	
 	return;  
    this.FORM_TRIGGER_FAILURE = false;	
 await   this.WHEN_VALIDATE_ITEM_SHUTDOWN(value); if ( this.FORM_TRIGGER_FAILURE) return; 
 this.formValidationChangedOutput.emit(this.form.valid); 
  
 } 
 async onValueChange_SHUTDOWN_COMMANDS(value) { 
  this.FORM_TRIGGER_FAILURE = false;	
 await this.WHEN_VALIDATE_ITEM_SHUTDOWN_COMMANDS(value); if ( this.FORM_TRIGGER_FAILURE) return; 
 this.formValidationChangedOutput.emit(this.form.valid); 
  
  } 
 async onChange_HIGHLIGHT_WHEN_CURSOR_PASSES_OVER_IT(event:any) { 
 var value = event.target.value; 
 if ((value == null) || (value == '')) 	
 	return;  
    this.FORM_TRIGGER_FAILURE = false;	
 await   this.WHEN_VALIDATE_ITEM_HIGHLIGHT_WHEN_CURSOR_PASSES_OVER_IT(value); if ( this.FORM_TRIGGER_FAILURE) return; 
 this.formValidationChangedOutput.emit(this.form.valid); 
  
 } 
 async onValueChange_HIGHLIGHT_COLOR(value) { 
  this.FORM_TRIGGER_FAILURE = false;	
 await this.WHEN_VALIDATE_ITEM_HIGHLIGHT_COLOR(value); if ( this.FORM_TRIGGER_FAILURE) return; 
 this.formValidationChangedOutput.emit(this.form.valid); 
  
  } 
 async onValueChange_WHEN_FIELD_IS_NOT_SELECTED_TEXT(value) { 
  this.FORM_TRIGGER_FAILURE = false;	
 await this.WHEN_VALIDATE_ITEM_WHEN_FIELD_IS_NOT_SELECTED_TEXT(value); if ( this.FORM_TRIGGER_FAILURE) return; 
 this.formValidationChangedOutput.emit(this.form.valid); 
  
  } 
 async onValueChange_WHEN_FIELD_IS_NOT_SELECTED_FILL(value) { 
  this.FORM_TRIGGER_FAILURE = false;	
 await this.WHEN_VALIDATE_ITEM_WHEN_FIELD_IS_NOT_SELECTED_FILL(value); if ( this.FORM_TRIGGER_FAILURE) return; 
 this.formValidationChangedOutput.emit(this.form.valid); 
  
  } 
 async onChange_DISABLE_HIGHLIGHT_WHEN_OBJECT_HAS_FOCUS(event:any) { 
 var value = event.target.value; 
 if ((value == null) || (value == '')) 	
 	return;  
    this.FORM_TRIGGER_FAILURE = false;	
 await   this.WHEN_VALIDATE_ITEM_DISABLE_HIGHLIGHT_WHEN_OBJECT_HAS_FOCUS(value); if ( this.FORM_TRIGGER_FAILURE) return; 
 this.formValidationChangedOutput.emit(this.form.valid); 
  
 } 
 async onValueChange_WHEN_FIELD_IS_SELECTED_TEXT(value) { 
  this.FORM_TRIGGER_FAILURE = false;	
 await this.WHEN_VALIDATE_ITEM_WHEN_FIELD_IS_SELECTED_TEXT(value); if ( this.FORM_TRIGGER_FAILURE) return; 
 this.formValidationChangedOutput.emit(this.form.valid); 
  
  } 
 async onValueChange_WHEN_FIELD_IS_SELECTED_FILL(value) { 
  this.FORM_TRIGGER_FAILURE = false;	
 await this.WHEN_VALIDATE_ITEM_WHEN_FIELD_IS_SELECTED_FILL(value); if ( this.FORM_TRIGGER_FAILURE) return; 
 this.formValidationChangedOutput.emit(this.form.valid); 
  
  } 
 async onValueChange_HIGHLIGHT_COLOR_FOCUS(value) { 
  this.FORM_TRIGGER_FAILURE = false;	
 await this.WHEN_VALIDATE_ITEM_HIGHLIGHT_COLOR_FOCUS(value); if ( this.FORM_TRIGGER_FAILURE) return; 
 this.formValidationChangedOutput.emit(this.form.valid); 
  
  } 
 async onValueChange_WHEN_FIELD_IS_IN_ERROR_AND_IS_NOT_SELECTED_TEXT(value) { 
  this.FORM_TRIGGER_FAILURE = false;	
 await this.WHEN_VALIDATE_ITEM_WHEN_FIELD_IS_IN_ERROR_AND_IS_NOT_SELECTED_TEXT(value); if ( this.FORM_TRIGGER_FAILURE) return; 
 this.formValidationChangedOutput.emit(this.form.valid); 
  
  } 
 async onValueChange_WHEN_FIELD_IS_IN_ERROR_AND_IS_NOT_SELECTED_FILL(value) { 
  this.FORM_TRIGGER_FAILURE = false;	
 await this.WHEN_VALIDATE_ITEM_WHEN_FIELD_IS_IN_ERROR_AND_IS_NOT_SELECTED_FILL(value); if ( this.FORM_TRIGGER_FAILURE) return; 
 this.formValidationChangedOutput.emit(this.form.valid); 
  
  } 
 async onChange_DISPLAY_ON_SCREEN_KEYBOARD_WHOLE_DISPLAY(event:any) { 
 var value = event.target.value; 
 if ((value == null) || (value == '')) 	
 	return;  
    this.FORM_TRIGGER_FAILURE = false;	
 await   this.WHEN_VALIDATE_ITEM_DISPLAY_ON_SCREEN_KEYBOARD_WHOLE_DISPLAY(value); if ( this.FORM_TRIGGER_FAILURE) return; 
 this.formValidationChangedOutput.emit(this.form.valid); 
  
 } 
 async onValueChange_WHEN_FIELD_IS_IN_ERROR_AND_IS_SELECTED_TEXT(value) { 
  this.FORM_TRIGGER_FAILURE = false;	
 await this.WHEN_VALIDATE_ITEM_WHEN_FIELD_IS_IN_ERROR_AND_IS_SELECTED_TEXT(value); if ( this.FORM_TRIGGER_FAILURE) return; 
 this.formValidationChangedOutput.emit(this.form.valid); 
  
  } 
 async onValueChange_WHEN_FIELD_IS_IN_ERROR_AND_IS_SELECTED_FILL(value) { 
  this.FORM_TRIGGER_FAILURE = false;	
 await this.WHEN_VALIDATE_ITEM_WHEN_FIELD_IS_IN_ERROR_AND_IS_SELECTED_FILL(value); if ( this.FORM_TRIGGER_FAILURE) return; 
 this.formValidationChangedOutput.emit(this.form.valid); 
  
  } 
 async onChange_ALLOW_BUTTON_ACTION_ON_ERROR(event:any) { 
 var value = event.target.value; 
 if ((value == null) || (value == '')) 	
 	return;  
    this.FORM_TRIGGER_FAILURE = false;	
 await   this.WHEN_VALIDATE_ITEM_ALLOW_BUTTON_ACTION_ON_ERROR(value); if ( this.FORM_TRIGGER_FAILURE) return; 
 this.formValidationChangedOutput.emit(this.form.valid); 
  
 } 
 async onChange_POSITION(event:any) { 
 var value = event.target.value; 
 if ((value == null) || (value == '')) 	
 	return;  
    this.FORM_TRIGGER_FAILURE = false;	
 await   this.WHEN_VALIDATE_ITEM_POSITION(value); if ( this.FORM_TRIGGER_FAILURE) return; 
 this.formValidationChangedOutput.emit(this.form.valid); 
  
 } 
 async onChange_X_POS(event:any) { 
 var value = event.target.value; 
 if ((value == null) || (value == '')) 	
 	return;  
    this.FORM_TRIGGER_FAILURE = false;	
 await   this.WHEN_VALIDATE_ITEM_X_POS(value); if ( this.FORM_TRIGGER_FAILURE) return; 
 this.formValidationChangedOutput.emit(this.form.valid); 
  
 } 
 async onChange_Y_POS(event:any) { 
 var value = event.target.value; 
 if ((value == null) || (value == '')) 	
 	return;  
    this.FORM_TRIGGER_FAILURE = false;	
 await   this.WHEN_VALIDATE_ITEM_Y_POS(value); if ( this.FORM_TRIGGER_FAILURE) return; 
 this.formValidationChangedOutput.emit(this.form.valid); 
  
 } 
 async onChange_ALLOW_TITLE_BAR(event:any) { 
 var value = event.target.value; 
 if ((value == null) || (value == '')) 	
 	return;  
    this.FORM_TRIGGER_FAILURE = false;	
 await   this.WHEN_VALIDATE_ITEM_ALLOW_TITLE_BAR(value); if ( this.FORM_TRIGGER_FAILURE) return; 
 this.formValidationChangedOutput.emit(this.form.valid); 
  
 } 
 async onChange_TITLE_BAR(event:any) { 
 var value = event.target.value; 
 if ((value == null) || (value == '')) 	
 	return;  
    this.FORM_TRIGGER_FAILURE = false;	
 await   this.WHEN_VALIDATE_ITEM_TITLE_BAR(value); if ( this.FORM_TRIGGER_FAILURE) return; 
 this.formValidationChangedOutput.emit(this.form.valid); 
  
 } 
 async onChange_SYSTEM_MENU(event:any) { 
 var value = event.target.value; 
 if ((value == null) || (value == '')) 	
 	return;  
    this.FORM_TRIGGER_FAILURE = false;	
 await   this.WHEN_VALIDATE_ITEM_SYSTEM_MENU(value); if ( this.FORM_TRIGGER_FAILURE) return; 
 this.formValidationChangedOutput.emit(this.form.valid); 
  
 } 
 async onChange_MINIMIZE_BUTTON(event:any) { 
 var value = event.target.value; 
 if ((value == null) || (value == '')) 	
 	return;  
    this.FORM_TRIGGER_FAILURE = false;	
 await   this.WHEN_VALIDATE_ITEM_MINIMIZE_BUTTON(value); if ( this.FORM_TRIGGER_FAILURE) return; 
 this.formValidationChangedOutput.emit(this.form.valid); 
  
 } 
 async onValueChange_SECURITY_CODE(value) { 
  this.FORM_TRIGGER_FAILURE = false;	
 await this.WHEN_VALIDATE_ITEM_SECURITY_CODE(value); if ( this.FORM_TRIGGER_FAILURE) return; 
 this.formValidationChangedOutput.emit(this.form.valid); 
  
  } 
 async onValueChange_BACKGROUND_COLOR(value) { 
  this.FORM_TRIGGER_FAILURE = false;	
 await this.WHEN_VALIDATE_ITEM_BACKGROUND_COLOR(value); if ( this.FORM_TRIGGER_FAILURE) return; 
 this.formValidationChangedOutput.emit(this.form.valid); 
  
  } 
 async onChange_MAXIMIZE_BUTTON(event:any) { 
 var value = event.target.value; 
 if ((value == null) || (value == '')) 	
 	return;  
    this.FORM_TRIGGER_FAILURE = false;	
 await   this.WHEN_VALIDATE_ITEM_MAXIMIZE_BUTTON(value); if ( this.FORM_TRIGGER_FAILURE) return; 
 this.formValidationChangedOutput.emit(this.form.valid); 
  
 } 
 async onChange_PIN_BUTTON(event:any) { 
 var value = event.target.value; 
 if ((value == null) || (value == '')) 	
 	return;  
    this.FORM_TRIGGER_FAILURE = false;	
 await   this.WHEN_VALIDATE_ITEM_PIN_BUTTON(value); if ( this.FORM_TRIGGER_FAILURE) return; 
 this.formValidationChangedOutput.emit(this.form.valid); 
  
 } 
 async onChange_SIZE_TO_MAIN_WINDOW_AT_RUNTIME(event:any) { 
 var value = event.target.value; 
 if ((value == null) || (value == '')) 	
 	return;  
    this.FORM_TRIGGER_FAILURE = false;	
 await   this.WHEN_VALIDATE_ITEM_SIZE_TO_MAIN_WINDOW_AT_RUNTIME(value); if ( this.FORM_TRIGGER_FAILURE) return; 
 this.formValidationChangedOutput.emit(this.form.valid); 
  
 } 
 async onChange_USE_GRADIENT_STYLE(event:any) { 
 var value = event.target.value; 
 if ((value == null) || (value == '')) 	
 	return;  
    this.FORM_TRIGGER_FAILURE = false;	
 await   this.WHEN_VALIDATE_ITEM_USE_GRADIENT_STYLE(value); if ( this.FORM_TRIGGER_FAILURE) return; 
 this.formValidationChangedOutput.emit(this.form.valid); 
  
 } 
 async onChange_SHOW_LAST_ACQUIRED_VALUE(event:any) { 
 var value = event.target.value; 
 if ((value == null) || (value == '')) 	
 	return;  
    this.FORM_TRIGGER_FAILURE = false;	
 await   this.WHEN_VALIDATE_ITEM_SHOW_LAST_ACQUIRED_VALUE(value); if ( this.FORM_TRIGGER_FAILURE) return; 
 this.formValidationChangedOutput.emit(this.form.valid); 
  
 } 
 async onValueChange_MAXIMUM_TAG_UPDATE_RATE(value) { 
  this.FORM_TRIGGER_FAILURE = false;	
 await this.WHEN_VALIDATE_ITEM_MAXIMUM_TAG_UPDATE_RATE(value); if ( this.FORM_TRIGGER_FAILURE) return; 
 this.formValidationChangedOutput.emit(this.form.valid); 
  
  } 
 async onChange_TRACK_SCREEN_FOR_NAVIGATION(event:any) { 
 var value = event.target.value; 
 if ((value == null) || (value == '')) 	
 	return;  
    this.FORM_TRIGGER_FAILURE = false;	
 await   this.WHEN_VALIDATE_ITEM_TRACK_SCREEN_FOR_NAVIGATION(value); if ( this.FORM_TRIGGER_FAILURE) return; 
 this.formValidationChangedOutput.emit(this.form.valid); 
  
 } 
 async onChange_NAVIGATION_HISTORY_SCREEN_NAME(event:any) { 
 var value = event.target.value; 
 if ((value == null) || (value == '')) 	
 	return;  
    this.FORM_TRIGGER_FAILURE = false;	
 await   this.WHEN_VALIDATE_ITEM_NAVIGATION_HISTORY_SCREEN_NAME(value); if ( this.FORM_TRIGGER_FAILURE) return; 
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


