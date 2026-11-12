import { Component, Input, Output, EventEmitter, HostListener,ViewChild } from '@angular/core';
import { TabStripComponent} from "@progress/kendo-angular-layout";
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
import { scdcommandWizrdScdCweCommandWizard , componentConfigDef} from '@modeldir/model';


 const createFormGroup = (dataItem:any) => new FormGroup({
'PRINTDISPLAY_DISPLAY_FILE' : new FormControl(dataItem.PRINTDISPLAY_DISPLAY_FILE  , ) ,
'PRINTDISPLAY_UPLOAD_DATA_ENTRY_FIELDS' : new FormControl(dataItem.PRINTDISPLAY_UPLOAD_DATA_ENTRY_FIELDS  , ) ,
'PRINTDISPLAY_WAIT_BEFORE_PRINT' : new FormControl(dataItem.PRINTDISPLAY_WAIT_BEFORE_PRINT  , ) ,
'WAIT_MS' : new FormControl(dataItem.WAIT_MS  , ) ,
'PRINTDISPLAY_PRINT_TO_PDF' : new FormControl(dataItem.PRINTDISPLAY_PRINT_TO_PDF  , ) ,
'PDF_FILE_PATH2' : new FormControl(dataItem.PDF_FILE_PATH2  , ) ,
'DISPLAY_BROWSE' : new FormControl(dataItem.DISPLAY_BROWSE  , ) ,
'PRINTDISPLAY_PARAMETER_TAGS' : new FormControl(dataItem.PRINTDISPLAY_PARAMETER_TAGS  , ) ,
'PARAMETER_TAGS_LKP' : new FormControl(dataItem.PARAMETER_TAGS_LKP  , ) ,
'PRINTDISPLAY_PARAMETER_FILE' : new FormControl(dataItem.PRINTDISPLAY_PARAMETER_FILE  , ) ,
'PARAMETER_FILE_LKP' : new FormControl(dataItem.PARAMETER_FILE_LKP  , ) ,
'PRINTDISPLAY_TAG_LIST' : new FormControl(dataItem.PRINTDISPLAY_TAG_LIST  , ) ,
'X_PX' : new FormControl(dataItem.X_PX  , ) ,
'Y_PX' : new FormControl(dataItem.Y_PX  , ) ,
'DISPLAY_DISPLAY_FILE' : new FormControl(dataItem.DISPLAY_DISPLAY_FILE  , ) ,
'DISPLAY_IN_BACKGROUND' : new FormControl(dataItem.DISPLAY_IN_BACKGROUND  , ) ,
'WINDOW_POSITION' : new FormControl(dataItem.WINDOW_POSITION  , ) ,
'DISPLAY_POSITION' : new FormControl(dataItem.DISPLAY_POSITION  , ) ,
'DISABLE_ENTER_KEY' : new FormControl(dataItem.DISABLE_ENTER_KEY  , ) ,
'MONITOR_INDEX' : new FormControl(dataItem.MONITOR_INDEX  , ) ,
'MONITOR_INDEX_VALUE' : new FormControl(dataItem.MONITOR_INDEX_VALUE  , ) ,
'DISPLAY_UPLOAD_DATA_ENTRY_FIELDS' : new FormControl(dataItem.DISPLAY_UPLOAD_DATA_ENTRY_FIELDS  , ) ,
'DISPLAY_HEIGHT' : new FormControl(dataItem.DISPLAY_HEIGHT  , ) ,
'HEIGHT_PX' : new FormControl(dataItem.HEIGHT_PX  , ) ,
'DISABLE_KEY_LIST' : new FormControl(dataItem.DISABLE_KEY_LIST  , ) ,
'DISPLAY_WIDTH' : new FormControl(dataItem.DISPLAY_WIDTH  , ) ,
'WIDTH_PX' : new FormControl(dataItem.WIDTH_PX  , ) ,
'DISPLAY_MINIMIZED' : new FormControl(dataItem.DISPLAY_MINIMIZED  , ) ,
'DISPLAY_LEFT' : new FormControl(dataItem.DISPLAY_LEFT  , ) ,
'LEFT_PX' : new FormControl(dataItem.LEFT_PX  , ) ,
'DISPLAY_MAXIMIZED' : new FormControl(dataItem.DISPLAY_MAXIMIZED  , ) ,
'DISPLAY_TOP' : new FormControl(dataItem.DISPLAY_TOP  , ) ,
'TOP_PX' : new FormControl(dataItem.TOP_PX  , ) ,
'CACHE_DISPLAY_ALWAYS_UPDATING' : new FormControl(dataItem.CACHE_DISPLAY_ALWAYS_UPDATING  , ) ,
'DISPLAY_PARAMETER_TAGS3' : new FormControl(dataItem.DISPLAY_PARAMETER_TAGS3  , ) ,
'TAG_LIST2' : new FormControl(dataItem.TAG_LIST2  , ) ,
'CACHE_DISPLAY' : new FormControl(dataItem.CACHE_DISPLAY  , ) ,
'DISPLAY_PARAMETER_FILE3' : new FormControl(dataItem.DISPLAY_PARAMETER_FILE3  , ) ,
'DISPLAY_PARAMETER_FILE' : new FormControl(dataItem.DISPLAY_PARAMETER_FILE  , ) ,
'CLOSE_MODE' : new FormControl(dataItem.CLOSE_MODE  , ) ,
'DISPLAY_ABORT' : new FormControl(dataItem.DISPLAY_ABORT  , ) ,
'INCLUDE_DOCKED_DISPLAYS' : new FormControl(dataItem.INCLUDE_DOCKED_DISPLAYS  , ) ,
'UNPIN_MODE' : new FormControl(dataItem.UNPIN_MODE  , ) ,
'TAG' : new FormControl(dataItem.TAG  , ) ,
'VERIFY' : new FormControl(dataItem.VERIFY  , ) ,
'ASYNCHRONOUS' : new FormControl(dataItem.ASYNCHRONOUS  , ) ,
'SET_TO' : new FormControl(dataItem.SET_TO  , ) ,
'EXPRESSION' : new FormControl(dataItem.EXPRESSION  , ) ,
'RAMP_BY' : new FormControl(dataItem.RAMP_BY  , ) ,
'VALUE_INPUT' : new FormControl(dataItem.VALUE_INPUT  , ) ,
'PERCENTAGE_INPUT' : new FormControl(dataItem.PERCENTAGE_INPUT  , ) ,
'DIRECTION' : new FormControl(dataItem.DIRECTION  , ) ,
'OTHER_TAG_INPUT' : new FormControl(dataItem.OTHER_TAG_INPUT  , ) ,
'STRING_INPUT' : new FormControl(dataItem.STRING_INPUT  , ) ,
'POSITION_INDEX' : new FormControl(dataItem.POSITION_INDEX  , ) ,
'LANGUAGE_ID' : new FormControl(dataItem.LANGUAGE_ID  , ) ,
'SIMPLE_UTILITY_USER' : new FormControl(dataItem.SIMPLE_UTILITY_USER  , ) ,
'SIMPLE_UTILITY_PASSWORD' : new FormControl(dataItem.SIMPLE_UTILITY_PASSWORD  , ) ,
'SIMPLE_UTILITY_SYMBOL' : new FormControl(dataItem.SIMPLE_UTILITY_SYMBOL  , ) ,
'SIMPLE_UTILITY_REMARK_TEXT' : new FormControl(dataItem.SIMPLE_UTILITY_REMARK_TEXT  , ) ,
'SENDKEYS_KEYSTRING' : new FormControl(dataItem.SENDKEYS_KEYSTRING  , ) ,
'START_RECORDING_KEYS' : new FormControl(dataItem.START_RECORDING_KEYS  , ) ,
'STOP_RECORDING_KEYS' : new FormControl(dataItem.STOP_RECORDING_KEYS  , ) ,
'CLEAR_KEYS' : new FormControl(dataItem.CLEAR_KEYS  , ) ,
'KEY_MODE' : new FormControl(dataItem.KEY_MODE  , ) ,
'KEY_FILE' : new FormControl(dataItem.KEY_FILE  , ) ,
'TIME_SECONDS' : new FormControl(dataItem.TIME_SECONDS  , ) ,
'DISPLAY_CLIENT_CLOSE_MODE' : new FormControl(dataItem.DISPLAY_CLIENT_CLOSE_MODE  , ) ,
'FILE_NAME' : new FormControl(dataItem.FILE_NAME  , ) ,
'SIMPLE_UTILITY_BROWSE' : new FormControl(dataItem.SIMPLE_UTILITY_BROWSE  , ) ,
'TITLE_TEXT' : new FormControl(dataItem.TITLE_TEXT  , ) ,
'WRITE_RECIPE_NAME_TO_STRING_TAG' : new FormControl(dataItem.WRITE_RECIPE_NAME_TO_STRING_TAG  , ) ,
'RECIPE_NAME_TAG' : new FormControl(dataItem.RECIPE_NAME_TAG  , ) ,
'EXPRESSION_EDITOR' : new FormControl(dataItem.EXPRESSION_EDITOR  , ) ,
'THEN_ACTION' : new FormControl(dataItem.THEN_ACTION  , ) ,
'THEN_ACTION_BUTTON' : new FormControl(dataItem.THEN_ACTION_BUTTON  , ) ,
'ELSE_ACTION' : new FormControl(dataItem.ELSE_ACTION  , ) ,
'ELSE_ACTION_BUTTON' : new FormControl(dataItem.ELSE_ACTION_BUTTON  , ) ,
'INVOKE_DISPLAY_FILE' : new FormControl(dataItem.INVOKE_DISPLAY_FILE  , ) ,
'INVOKE_OBJECT' : new FormControl(dataItem.INVOKE_OBJECT  , ) ,
'PROPERTY_OR_METHOD' : new FormControl(dataItem.PROPERTY_OR_METHOD  , ) ,
'METHOD_PARAMETER' : new FormControl(dataItem.METHOD_PARAMETER  , ) ,
'INVOKE_ADD_TAG' : new FormControl(dataItem.INVOKE_ADD_TAG  , ) ,
'INVOKE_MODE' : new FormControl(dataItem.INVOKE_MODE  , ) ,
'SET_TAG_TO_VALUE_OF_OBJECT' : new FormControl(dataItem.SET_TAG_TO_VALUE_OF_OBJECT  , ) ,
'SET_OBJECT_PROPERTY' : new FormControl(dataItem.SET_OBJECT_PROPERTY  , ) ,
'SET_TAG_TO_VALUE_FROM' : new FormControl(dataItem.SET_TAG_TO_VALUE_FROM  , ) ,
'RECIPE_FILE_MODE' : new FormControl(dataItem.RECIPE_FILE_MODE  , ) ,
'RECIPE_FILE' : new FormControl(dataItem.RECIPE_FILE  , ) ,
'VARIABLE_RECIPE_INPUT' : new FormControl(dataItem.VARIABLE_RECIPE_INPUT  , ) ,
'RECIPE_FILTER' : new FormControl(dataItem.RECIPE_FILTER  , ) ,
'FILTER_TEXT' : new FormControl(dataItem.FILTER_TEXT  , ) ,
'WRITE_RECIPE_NAME_AFTER_DOWNLOAD' : new FormControl(dataItem.WRITE_RECIPE_NAME_AFTER_DOWNLOAD  , ) ,
'TAG_AFTER_DOWNLOAD' : new FormControl(dataItem.TAG_AFTER_DOWNLOAD  , ) ,
'STATUS_CODE' : new FormControl(dataItem.STATUS_CODE  , ) ,
'STATUS_TAG' : new FormControl(dataItem.STATUS_TAG  , ) ,
'CURRENT_RECIPE_NAME' : new FormControl(dataItem.CURRENT_RECIPE_NAME  , ) ,
'RECIPE_NAME_TAG_RPC' : new FormControl(dataItem.RECIPE_NAME_TAG_RPC  , ) ,
'COMMAND_WIZRD_ID' : new FormControl(dataItem.COMMAND_WIZRD_ID  , ) ,
'ALARM_SOURCE' : new FormControl(dataItem.ALARM_SOURCE  , ) ,
'DURATION' : new FormControl(dataItem.DURATION  , ) ,
'PROMPT_FOR_COMMENT' : new FormControl(dataItem.PROMPT_FOR_COMMENT  , ) ,
'AE_REMARK_ALARM_SERVER' : new FormControl(dataItem.AE_REMARK_ALARM_SERVER  , ) ,
'AE_REMARK_COMMENT' : new FormControl(dataItem.AE_REMARK_COMMENT  , ) ,
'BUT_TAG_MIN_VAL' : new FormControl(dataItem.BUT_TAG_MIN_VAL  , ) ,
'BUT_TAG_MAX_VAL' : new FormControl(dataItem.BUT_TAG_MAX_VAL  , ) ,
'BUT_TAG_UNITS' : new FormControl(dataItem.BUT_TAG_UNITS  , ) ,
'BUT_TAG_NAME' : new FormControl(dataItem.BUT_TAG_NAME  , ) ,
'BUT_TAG_DESC' : new FormControl(dataItem.BUT_TAG_DESC  , ) ,
'BUT_TAG_VALUE' : new FormControl(dataItem.BUT_TAG_VALUE  , ) ,
'TAG_SELECT' : new FormControl(dataItem.TAG_SELECT  , ) ,
'TAG_INPUT' : new FormControl(dataItem.TAG_INPUT  , ) ,
'PROMPT_FOR_COMMENT_2' : new FormControl(dataItem.PROMPT_FOR_COMMENT_2  , ) ,
'DATALOG_FILE' : new FormControl(dataItem.DATALOG_FILE  , ) ,
'FILE_IDENTIFIER' : new FormControl(dataItem.FILE_IDENTIFIER  , ) ,
'RATE' : new FormControl(dataItem.RATE  , ) ,
'DATALOG_UNITS' : new FormControl(dataItem.DATALOG_UNITS  , ) ,
'FILE_COMMAND' : new FormControl(dataItem.FILE_COMMAND  , ) ,
'PROGRAM' : new FormControl(dataItem.PROGRAM  , ) ,
'PROGRAM_BROWSE' : new FormControl(dataItem.PROGRAM_BROWSE  , ) ,
'WAVE_FILE' : new FormControl(dataItem.WAVE_FILE  , ) ,
'WAVE_BROWSE' : new FormControl(dataItem.WAVE_BROWSE  , ) ,
'DEFINE_SYMBOL' : new FormControl(dataItem.DEFINE_SYMBOL  , ) ,
'DEFINE_COMMAND' : new FormControl(dataItem.DEFINE_COMMAND  , ) ,
'HELP_FILE' : new FormControl(dataItem.HELP_FILE  , ) ,
'HELP_BROWSE' : new FormControl(dataItem.HELP_BROWSE  , ) ,
'SEARCH_FOR' : new FormControl(dataItem.SEARCH_FOR  , ) ,
'PRINT_TO_PDF' : new FormControl(dataItem.PRINT_TO_PDF  , ) ,
'PDF_FILE_PATH' : new FormControl(dataItem.PDF_FILE_PATH  , ) 
});

declare function getParamConfig():any;
@Component({
  selector: 'app-scd-cwe-command-wizard',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './scd-cwe-command-wizard.component.html',
  styleUrls: ['./scd-cwe-command-wizard.component.scss'],
  standalone: false
})


export class ScdCommandWizrdScdCweCommandWizardFormtabsComponent {
  @ViewChild("tabstrip") public tabstrip: TabStripComponent;
  public title =  this.starServices.getNLS([],"SCD_CWE_COMMAND_WIZARD.scdcommandWizrdScdCweCommandWizard.component_title","Command Wizard");
  public compTitleMsg =  "SCD_CWE_COMMAND_WIZARD.scdcommandWizrdScdCweCommandWizard";
  public routineName = "ScdCommandWizrdScdCweCommandWizardFormtabs";
  private insertCMD = "INSERT_SCD_COMMAND_WIZRD";
  private updateCMD = "UPDATE_SCD_COMMAND_WIZRD";
  private deleteCMD =   "DELETE_SCD_COMMAND_WIZRD";
  private getCMD = "GET_SCD_COMMAND_WIZRD_QUERY";

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
  public  isCOMMAND_WIZRD_IDEnable : boolean = true;

  public FORM_TRIGGER_FAILURE:any;
  public NOTFOUND:any;
  public disableEmitSave = false;
  public disableEmitReadCompleted = false;
  public children = ["any"];

  public action = "";
  private Body:any =[];
  public isNew!: boolean;
  public primarKeyReadOnlyArr = {isCOMMAND_WIZRD_IDreadOnly : false};  
  public paramConfig;
  private masterKeyArr = [];
  private masterKeyNameArr = [];
  public  masterKey="";
  public masterKeyName ="COMMAND_WIZRD_ID";
  public WhereClause = "";
  public OrderByClause = "";
  
  public formattedWhere:any = null;  
  public  submitted =  false;
  public masterParams:any;
  public alignment: TabAlignment = 'start';
  public isPhonePortrait = false;
  public compSelector = 'app-scd-cwe-command-wizard';
  public PK_AUTO = 'COMMAND_WIZRD_ID';
  public customerFacing = false;
  public FormStepsArr = [{"CODE":"","CODETEXT_LANG":"","visible":true},{"CODE":"1","CODETEXT_LANG":"AE_Command","visible":true},{"CODE":"2","CODETEXT_LANG":"AE_Remark","visible":true},{"CODE":"3","CODETEXT_LANG":"DataLog","visible":true},{"CODE":"4","CODETEXT_LANG":"File Command","visible":true},{"CODE":"5","CODETEXT_LANG":"App Command","visible":true},{"CODE":"6","CODETEXT_LANG":"PlayWave","visible":true},{"CODE":"7","CODETEXT_LANG":"Define","visible":true},{"CODE":"8","CODETEXT_LANG":"Help","visible":true},{"CODE":"9","CODETEXT_LANG":"ScreenPrint","visible":true},{"CODE":"10","CODETEXT_LANG":"PrintDisplay","visible":true},{"CODE":"11","CODETEXT_LANG":"Display","visible":true},{"CODE":"12","CODETEXT_LANG":"Abort","visible":true},{"CODE":"13","CODETEXT_LANG":"Unpin","visible":true},{"CODE":"14","CODETEXT_LANG":"Tag Value Command","visible":true},{"CODE":"15","CODETEXT_LANG":"Simple Utility","visible":true},{"CODE":"16","CODETEXT_LANG":"IF_COMMAND","visible":true},{"CODE":"17","CODETEXT_LANG":"Invoke","visible":true},{"CODE":"18","CODETEXT_LANG":"RecipePro Command","visible":true}] ;
public labelPRINTDISPLAY_DISPLAY_FILETop=true;
public labelPRINTDISPLAY_DISPLAY_FILEVisible=true;
public labelPRINTDISPLAY_UPLOAD_DATA_ENTRY_FIELDSTop=true;
public labelPRINTDISPLAY_UPLOAD_DATA_ENTRY_FIELDSVisible=true;
public labelPRINTDISPLAY_WAIT_BEFORE_PRINTTop=true;
public labelPRINTDISPLAY_WAIT_BEFORE_PRINTVisible=true;
public labelWAIT_MSTop=true;
public labelWAIT_MSVisible=true;
public labelPRINTDISPLAY_PRINT_TO_PDFTop=false;
public labelPRINTDISPLAY_PRINT_TO_PDFVisible=true;
public labelPDF_FILE_PATH2Top=false;
public labelPDF_FILE_PATH2Visible=true;
public labelDISPLAY_BROWSETop=true;
public labelDISPLAY_BROWSEVisible=true;
public labelPRINTDISPLAY_PARAMETER_TAGSTop=true;
public labelPRINTDISPLAY_PARAMETER_TAGSVisible=true;
public labelPARAMETER_TAGS_LKPTop=true;
public labelPARAMETER_TAGS_LKPVisible=true;
public labelPRINTDISPLAY_PARAMETER_FILETop=true;
public labelPRINTDISPLAY_PARAMETER_FILEVisible=true;
public labelPARAMETER_FILE_LKPTop=true;
public labelPARAMETER_FILE_LKPVisible=true;
public labelPRINTDISPLAY_TAG_LISTTop=true;
public labelPRINTDISPLAY_TAG_LISTVisible=true;
public labelX_PXTop=true;
public labelX_PXVisible=true;
public labelY_PXTop=true;
public labelY_PXVisible=true;
public labelDISPLAY_DISPLAY_FILETop=true;
public labelDISPLAY_DISPLAY_FILEVisible=true;
public labelDISPLAY_IN_BACKGROUNDTop=true;
public labelDISPLAY_IN_BACKGROUNDVisible=true;
public labelWINDOW_POSITIONTop=true;
public labelWINDOW_POSITIONVisible=true;
public labelDISPLAY_POSITIONTop=true;
public labelDISPLAY_POSITIONVisible=true;
public labelDISABLE_ENTER_KEYTop=true;
public labelDISABLE_ENTER_KEYVisible=true;
public labelMONITOR_INDEXTop=true;
public labelMONITOR_INDEXVisible=true;
public labelMONITOR_INDEX_VALUETop=true;
public labelMONITOR_INDEX_VALUEVisible=true;
public labelDISPLAY_UPLOAD_DATA_ENTRY_FIELDSTop=true;
public labelDISPLAY_UPLOAD_DATA_ENTRY_FIELDSVisible=true;
public labelDISPLAY_HEIGHTTop=true;
public labelDISPLAY_HEIGHTVisible=true;
public labelHEIGHT_PXTop=true;
public labelHEIGHT_PXVisible=true;
public labelDISABLE_KEY_LISTTop=true;
public labelDISABLE_KEY_LISTVisible=true;
public labelDISPLAY_WIDTHTop=true;
public labelDISPLAY_WIDTHVisible=true;
public labelWIDTH_PXTop=true;
public labelWIDTH_PXVisible=true;
public labelDISPLAY_MINIMIZEDTop=true;
public labelDISPLAY_MINIMIZEDVisible=true;
public labelDISPLAY_LEFTTop=true;
public labelDISPLAY_LEFTVisible=true;
public labelLEFT_PXTop=true;
public labelLEFT_PXVisible=true;
public labelDISPLAY_MAXIMIZEDTop=true;
public labelDISPLAY_MAXIMIZEDVisible=true;
public labelDISPLAY_TOPTop=true;
public labelDISPLAY_TOPVisible=true;
public labelTOP_PXTop=true;
public labelTOP_PXVisible=true;
public labelCACHE_DISPLAY_ALWAYS_UPDATINGTop=true;
public labelCACHE_DISPLAY_ALWAYS_UPDATINGVisible=true;
public labelDISPLAY_PARAMETER_TAGS3Top=true;
public labelDISPLAY_PARAMETER_TAGS3Visible=true;
public labelTAG_LIST2Top=true;
public labelTAG_LIST2Visible=true;
public labelCACHE_DISPLAYTop=true;
public labelCACHE_DISPLAYVisible=true;
public labelDISPLAY_PARAMETER_FILE3Top=true;
public labelDISPLAY_PARAMETER_FILE3Visible=true;
public labelDISPLAY_PARAMETER_FILETop=true;
public labelDISPLAY_PARAMETER_FILEVisible=false;
public labelCLOSE_MODETop=true;
public labelCLOSE_MODEVisible=true;
public labelDISPLAY_ABORTTop=true;
public labelDISPLAY_ABORTVisible=true;
public labelINCLUDE_DOCKED_DISPLAYSTop=true;
public labelINCLUDE_DOCKED_DISPLAYSVisible=true;
public labelUNPIN_MODETop=true;
public labelUNPIN_MODEVisible=true;
public labelTAGTop=true;
public labelTAGVisible=true;
public labelVERIFYTop=true;
public labelVERIFYVisible=true;
public labelASYNCHRONOUSTop=true;
public labelASYNCHRONOUSVisible=true;
public labelSET_TOTop=true;
public labelSET_TOVisible=true;
public labelEXPRESSIONTop=true;
public labelEXPRESSIONVisible=true;
public labelRAMP_BYTop=true;
public labelRAMP_BYVisible=true;
public labelVALUE_INPUTTop=true;
public labelVALUE_INPUTVisible=true;
public labelPERCENTAGE_INPUTTop=true;
public labelPERCENTAGE_INPUTVisible=true;
public labelDIRECTIONTop=true;
public labelDIRECTIONVisible=true;
public labelOTHER_TAG_INPUTTop=true;
public labelOTHER_TAG_INPUTVisible=true;
public labelSTRING_INPUTTop=true;
public labelSTRING_INPUTVisible=true;
public labelPOSITION_INDEXTop=true;
public labelPOSITION_INDEXVisible=true;
public labelLANGUAGE_IDTop=true;
public labelLANGUAGE_IDVisible=true;
public labelSIMPLE_UTILITY_USERTop=true;
public labelSIMPLE_UTILITY_USERVisible=true;
public labelSIMPLE_UTILITY_PASSWORDTop=true;
public labelSIMPLE_UTILITY_PASSWORDVisible=true;
public labelSIMPLE_UTILITY_SYMBOLTop=true;
public labelSIMPLE_UTILITY_SYMBOLVisible=true;
public labelSIMPLE_UTILITY_REMARK_TEXTTop=true;
public labelSIMPLE_UTILITY_REMARK_TEXTVisible=true;
public labelSENDKEYS_KEYSTRINGTop=true;
public labelSENDKEYS_KEYSTRINGVisible=true;
public labelSTART_RECORDING_KEYSTop=true;
public labelSTART_RECORDING_KEYSVisible=true;
public labelSTOP_RECORDING_KEYSTop=true;
public labelSTOP_RECORDING_KEYSVisible=true;
public labelCLEAR_KEYSTop=true;
public labelCLEAR_KEYSVisible=true;
public labelKEY_MODETop=true;
public labelKEY_MODEVisible=true;
public labelKEY_FILETop=true;
public labelKEY_FILEVisible=true;
public labelTIME_SECONDSTop=true;
public labelTIME_SECONDSVisible=true;
public labelDISPLAY_CLIENT_CLOSE_MODETop=true;
public labelDISPLAY_CLIENT_CLOSE_MODEVisible=true;
public labelFILE_NAMETop=false;
public labelFILE_NAMEVisible=true;
public labelSIMPLE_UTILITY_BROWSETop=true;
public labelSIMPLE_UTILITY_BROWSEVisible=true;
public labelTITLE_TEXTTop=false;
public labelTITLE_TEXTVisible=true;
public labelWRITE_RECIPE_NAME_TO_STRING_TAGTop=true;
public labelWRITE_RECIPE_NAME_TO_STRING_TAGVisible=true;
public labelRECIPE_NAME_TAGTop=true;
public labelRECIPE_NAME_TAGVisible=true;
public labelEXPRESSION_EDITORTop=true;
public labelEXPRESSION_EDITORVisible=true;
public labelTHEN_ACTIONTop=false;
public labelTHEN_ACTIONVisible=true;
public labelTHEN_ACTION_BUTTONTop=true;
public labelTHEN_ACTION_BUTTONVisible=true;
public labelELSE_ACTIONTop=false;
public labelELSE_ACTIONVisible=true;
public labelELSE_ACTION_BUTTONTop=true;
public labelELSE_ACTION_BUTTONVisible=true;
public labelINVOKE_DISPLAY_FILETop=true;
public labelINVOKE_DISPLAY_FILEVisible=true;
public labelINVOKE_OBJECTTop=true;
public labelINVOKE_OBJECTVisible=true;
public labelPROPERTY_OR_METHODTop=true;
public labelPROPERTY_OR_METHODVisible=true;
public labelMETHOD_PARAMETERTop=true;
public labelMETHOD_PARAMETERVisible=true;
public labelINVOKE_ADD_TAGTop=true;
public labelINVOKE_ADD_TAGVisible=true;
public labelINVOKE_MODETop=true;
public labelINVOKE_MODEVisible=true;
public labelSET_TAG_TO_VALUE_OF_OBJECTTop=true;
public labelSET_TAG_TO_VALUE_OF_OBJECTVisible=true;
public labelSET_OBJECT_PROPERTYTop=true;
public labelSET_OBJECT_PROPERTYVisible=true;
public labelSET_TAG_TO_VALUE_FROMTop=true;
public labelSET_TAG_TO_VALUE_FROMVisible=true;
public labelRECIPE_FILE_MODETop=true;
public labelRECIPE_FILE_MODEVisible=true;
public labelRECIPE_FILETop=true;
public labelRECIPE_FILEVisible=true;
public labelVARIABLE_RECIPE_INPUTTop=true;
public labelVARIABLE_RECIPE_INPUTVisible=true;
public labelRECIPE_FILTERTop=true;
public labelRECIPE_FILTERVisible=true;
public labelFILTER_TEXTTop=true;
public labelFILTER_TEXTVisible=true;
public labelWRITE_RECIPE_NAME_AFTER_DOWNLOADTop=true;
public labelWRITE_RECIPE_NAME_AFTER_DOWNLOADVisible=true;
public labelTAG_AFTER_DOWNLOADTop=true;
public labelTAG_AFTER_DOWNLOADVisible=true;
public labelSTATUS_CODETop=true;
public labelSTATUS_CODEVisible=true;
public labelSTATUS_TAGTop=true;
public labelSTATUS_TAGVisible=true;
public labelCURRENT_RECIPE_NAMETop=true;
public labelCURRENT_RECIPE_NAMEVisible=true;
public labelRECIPE_NAME_TAG_RPCTop=true;
public labelRECIPE_NAME_TAG_RPCVisible=true;
public labelCOMMAND_WIZRD_IDTop=true;
public labelCOMMAND_WIZRD_IDVisible=true;
public labelALARM_SOURCETop=true;
public labelALARM_SOURCEVisible=true;
public labelDURATIONTop=true;
public labelDURATIONVisible=true;
public labelPROMPT_FOR_COMMENTTop=true;
public labelPROMPT_FOR_COMMENTVisible=true;
public labelAE_REMARK_ALARM_SERVERTop=true;
public labelAE_REMARK_ALARM_SERVERVisible=true;
public labelAE_REMARK_COMMENTTop=true;
public labelAE_REMARK_COMMENTVisible=true;
public labelBUT_TAG_MIN_VALTop=true;
public labelBUT_TAG_MIN_VALVisible=true;
public labelBUT_TAG_MAX_VALTop=true;
public labelBUT_TAG_MAX_VALVisible=true;
public labelBUT_TAG_UNITSTop=true;
public labelBUT_TAG_UNITSVisible=true;
public labelBUT_TAG_NAMETop=true;
public labelBUT_TAG_NAMEVisible=true;
public labelBUT_TAG_DESCTop=true;
public labelBUT_TAG_DESCVisible=true;
public labelBUT_TAG_VALUETop=true;
public labelBUT_TAG_VALUEVisible=true;
public labelTAG_SELECTTop=true;
public labelTAG_SELECTVisible=true;
public labelTAG_INPUTTop=true;
public labelTAG_INPUTVisible=true;
public labelPROMPT_FOR_COMMENT_2Top=true;
public labelPROMPT_FOR_COMMENT_2Visible=true;
public labelDATALOG_FILETop=true;
public labelDATALOG_FILEVisible=true;
public labelFILE_IDENTIFIERTop=true;
public labelFILE_IDENTIFIERVisible=true;
public labelRATETop=true;
public labelRATEVisible=true;
public labelDATALOG_UNITSTop=true;
public labelDATALOG_UNITSVisible=true;
public labelFILE_COMMANDTop=true;
public labelFILE_COMMANDVisible=true;
public labelPROGRAMTop=false;
public labelPROGRAMVisible=true;
public labelPROGRAM_BROWSETop=true;
public labelPROGRAM_BROWSEVisible=true;
public labelWAVE_FILETop=false;
public labelWAVE_FILEVisible=true;
public labelWAVE_BROWSETop=true;
public labelWAVE_BROWSEVisible=true;
public labelDEFINE_SYMBOLTop=false;
public labelDEFINE_SYMBOLVisible=true;
public labelDEFINE_COMMANDTop=false;
public labelDEFINE_COMMANDVisible=true;
public labelHELP_FILETop=false;
public labelHELP_FILEVisible=true;
public labelHELP_BROWSETop=true;
public labelHELP_BROWSEVisible=true;
public labelSEARCH_FORTop=false;
public labelSEARCH_FORVisible=true;
public labelPRINT_TO_PDFTop=false;
public labelPRINT_TO_PDFVisible=true;
public labelPDF_FILE_PATHTop=false;
public labelPDF_FILE_PATHVisible=true;

public visiblePRINTDISPLAY_DISPLAY_FILE = true;
public visiblePRINTDISPLAY_UPLOAD_DATA_ENTRY_FIELDS = true;
public visiblePRINTDISPLAY_WAIT_BEFORE_PRINT = true;
public visibleWAIT_MS = true;
public visiblePRINTDISPLAY_PRINT_TO_PDF = true;
public visiblePDF_FILE_PATH2 = true;
public visibleDISPLAY_BROWSE = true;
public visiblePRINTDISPLAY_PARAMETER_TAGS = true;
public visiblePARAMETER_TAGS_LKP = true;
public visiblePRINTDISPLAY_PARAMETER_FILE = true;
public visiblePARAMETER_FILE_LKP = true;
public visiblePRINTDISPLAY_TAG_LIST = false;
public visibleX_PX = false;
public visibleY_PX = false;
public visibleDISPLAY_DISPLAY_FILE = true;
public visibleDISPLAY_IN_BACKGROUND = true;
public visibleWINDOW_POSITION = true;
public visibleDISPLAY_POSITION = true;
public visibleDISABLE_ENTER_KEY = true;
public visibleMONITOR_INDEX = true;
public visibleMONITOR_INDEX_VALUE = true;
public visibleDISPLAY_UPLOAD_DATA_ENTRY_FIELDS = true;
public visibleDISPLAY_HEIGHT = true;
public visibleHEIGHT_PX = true;
public visibleDISABLE_KEY_LIST = true;
public visibleDISPLAY_WIDTH = true;
public visibleWIDTH_PX = true;
public visibleDISPLAY_MINIMIZED = true;
public visibleDISPLAY_LEFT = true;
public visibleLEFT_PX = true;
public visibleDISPLAY_MAXIMIZED = true;
public visibleDISPLAY_TOP = true;
public visibleTOP_PX = true;
public visibleCACHE_DISPLAY_ALWAYS_UPDATING = true;
public visibleDISPLAY_PARAMETER_TAGS3 = true;
public visibleTAG_LIST2 = true;
public visibleCACHE_DISPLAY = true;
public visibleDISPLAY_PARAMETER_FILE3 = true;
public visibleDISPLAY_PARAMETER_FILE = true;
public visibleCLOSE_MODE = true;
public visibleDISPLAY_ABORT = true;
public visibleINCLUDE_DOCKED_DISPLAYS = true;
public visibleUNPIN_MODE = true;
public visibleTAG = true;
public visibleVERIFY = true;
public visibleASYNCHRONOUS = true;
public visibleSET_TO = true;
public visibleEXPRESSION = true;
public visibleRAMP_BY = true;
public visibleVALUE_INPUT = true;
public visiblePERCENTAGE_INPUT = true;
public visibleDIRECTION = true;
public visibleOTHER_TAG_INPUT = true;
public visibleSTRING_INPUT = true;
public visiblePOSITION_INDEX = true;
public visibleLANGUAGE_ID = true;
public visibleSIMPLE_UTILITY_USER = true;
public visibleSIMPLE_UTILITY_PASSWORD = true;
public visibleSIMPLE_UTILITY_SYMBOL = true;
public visibleSIMPLE_UTILITY_REMARK_TEXT = true;
public visibleSENDKEYS_KEYSTRING = true;
public visibleSTART_RECORDING_KEYS = true;
public visibleSTOP_RECORDING_KEYS = true;
public visibleCLEAR_KEYS = true;
public visibleKEY_MODE = true;
public visibleKEY_FILE = true;
public visibleTIME_SECONDS = true;
public visibleDISPLAY_CLIENT_CLOSE_MODE = true;
public visibleFILE_NAME = true;
public visibleSIMPLE_UTILITY_BROWSE = false;
public visibleTITLE_TEXT = true;
public visibleWRITE_RECIPE_NAME_TO_STRING_TAG = true;
public visibleRECIPE_NAME_TAG = true;
public visibleEXPRESSION_EDITOR = true;
public visibleTHEN_ACTION = true;
public visibleTHEN_ACTION_BUTTON = true;
public visibleELSE_ACTION = true;
public visibleELSE_ACTION_BUTTON = true;
public visibleINVOKE_DISPLAY_FILE = true;
public visibleINVOKE_OBJECT = true;
public visiblePROPERTY_OR_METHOD = true;
public visibleMETHOD_PARAMETER = true;
public visibleINVOKE_ADD_TAG = true;
public visibleINVOKE_MODE = true;
public visibleSET_TAG_TO_VALUE_OF_OBJECT = true;
public visibleSET_OBJECT_PROPERTY = true;
public visibleSET_TAG_TO_VALUE_FROM = true;
public visibleRECIPE_FILE_MODE = true;
public visibleRECIPE_FILE = true;
public visibleVARIABLE_RECIPE_INPUT = true;
public visibleRECIPE_FILTER = true;
public visibleFILTER_TEXT = true;
public visibleWRITE_RECIPE_NAME_AFTER_DOWNLOAD = true;
public visibleTAG_AFTER_DOWNLOAD = true;
public visibleSTATUS_CODE = true;
public visibleSTATUS_TAG = true;
public visibleCURRENT_RECIPE_NAME = true;
public visibleRECIPE_NAME_TAG_RPC = true;
public visibleCOMMAND_WIZRD_ID = false;
public visibleALARM_SOURCE = true;
public visibleDURATION = true;
public visiblePROMPT_FOR_COMMENT = true;
public visibleAE_REMARK_ALARM_SERVER = true;
public visibleAE_REMARK_COMMENT = true;
public visibleBUT_TAG_MIN_VAL = true;
public visibleBUT_TAG_MAX_VAL = true;
public visibleBUT_TAG_UNITS = true;
public visibleBUT_TAG_NAME = true;
public visibleBUT_TAG_DESC = true;
public visibleBUT_TAG_VALUE = true;
public visibleTAG_SELECT = true;
public visibleTAG_INPUT = true;
public visiblePROMPT_FOR_COMMENT_2 = true;
public visibleDATALOG_FILE = true;
public visibleFILE_IDENTIFIER = true;
public visibleRATE = true;
public visibleDATALOG_UNITS = true;
public visibleFILE_COMMAND = true;
public visiblePROGRAM = true;
public visiblePROGRAM_BROWSE = false;
public visibleWAVE_FILE = true;
public visibleWAVE_BROWSE = true;
public visibleDEFINE_SYMBOL = true;
public visibleDEFINE_COMMAND = true;
public visibleHELP_FILE = true;
public visibleHELP_BROWSE = true;
public visibleSEARCH_FOR = true;
public visiblePRINT_TO_PDF = true;
public visiblePDF_FILE_PATH = true;

public disablePRINTDISPLAY_DISPLAY_FILE = false;
public disablePRINTDISPLAY_UPLOAD_DATA_ENTRY_FIELDS = false;
public disablePRINTDISPLAY_WAIT_BEFORE_PRINT = false;
public disableWAIT_MS = false;
public disablePRINTDISPLAY_PRINT_TO_PDF = false;
public disablePDF_FILE_PATH2 = false;
public disableDISPLAY_BROWSE = false;
public disablePRINTDISPLAY_PARAMETER_TAGS = false;
public disablePARAMETER_TAGS_LKP = false;
public disablePRINTDISPLAY_PARAMETER_FILE = false;
public disablePARAMETER_FILE_LKP = false;
public disablePRINTDISPLAY_TAG_LIST = false;
public disableX_PX = false;
public disableY_PX = false;
public disableDISPLAY_DISPLAY_FILE = false;
public disableDISPLAY_IN_BACKGROUND = false;
public disableWINDOW_POSITION = false;
public disableDISPLAY_POSITION = false;
public disableDISABLE_ENTER_KEY = false;
public disableMONITOR_INDEX = false;
public disableMONITOR_INDEX_VALUE = false;
public disableDISPLAY_UPLOAD_DATA_ENTRY_FIELDS = false;
public disableDISPLAY_HEIGHT = false;
public disableHEIGHT_PX = false;
public disableDISABLE_KEY_LIST = false;
public disableDISPLAY_WIDTH = false;
public disableWIDTH_PX = false;
public disableDISPLAY_MINIMIZED = false;
public disableDISPLAY_LEFT = false;
public disableLEFT_PX = false;
public disableDISPLAY_MAXIMIZED = false;
public disableDISPLAY_TOP = false;
public disableTOP_PX = false;
public disableCACHE_DISPLAY_ALWAYS_UPDATING = false;
public disableDISPLAY_PARAMETER_TAGS3 = false;
public disableTAG_LIST2 = false;
public disableCACHE_DISPLAY = false;
public disableDISPLAY_PARAMETER_FILE3 = false;
public disableDISPLAY_PARAMETER_FILE = false;
public disableCLOSE_MODE = false;
public disableDISPLAY_ABORT = false;
public disableINCLUDE_DOCKED_DISPLAYS = false;
public disableUNPIN_MODE = false;
public disableTAG = false;
public disableVERIFY = false;
public disableASYNCHRONOUS = false;
public disableSET_TO = false;
public disableEXPRESSION = false;
public disableRAMP_BY = false;
public disableVALUE_INPUT = false;
public disablePERCENTAGE_INPUT = false;
public disableDIRECTION = false;
public disableOTHER_TAG_INPUT = false;
public disableSTRING_INPUT = false;
public disablePOSITION_INDEX = false;
public disableLANGUAGE_ID = false;
public disableSIMPLE_UTILITY_USER = false;
public disableSIMPLE_UTILITY_PASSWORD = false;
public disableSIMPLE_UTILITY_SYMBOL = false;
public disableSIMPLE_UTILITY_REMARK_TEXT = false;
public disableSENDKEYS_KEYSTRING = false;
public disableSTART_RECORDING_KEYS = false;
public disableSTOP_RECORDING_KEYS = false;
public disableCLEAR_KEYS = false;
public disableKEY_MODE = false;
public disableKEY_FILE = false;
public disableTIME_SECONDS = false;
public disableDISPLAY_CLIENT_CLOSE_MODE = false;
public disableFILE_NAME = false;
public disableSIMPLE_UTILITY_BROWSE = false;
public disableTITLE_TEXT = false;
public disableWRITE_RECIPE_NAME_TO_STRING_TAG = false;
public disableRECIPE_NAME_TAG = false;
public disableEXPRESSION_EDITOR = false;
public disableTHEN_ACTION = false;
public disableTHEN_ACTION_BUTTON = false;
public disableELSE_ACTION = false;
public disableELSE_ACTION_BUTTON = false;
public disableINVOKE_DISPLAY_FILE = false;
public disableINVOKE_OBJECT = false;
public disablePROPERTY_OR_METHOD = false;
public disableMETHOD_PARAMETER = false;
public disableINVOKE_ADD_TAG = false;
public disableINVOKE_MODE = false;
public disableSET_TAG_TO_VALUE_OF_OBJECT = false;
public disableSET_OBJECT_PROPERTY = false;
public disableSET_TAG_TO_VALUE_FROM = false;
public disableRECIPE_FILE_MODE = false;
public disableRECIPE_FILE = false;
public disableVARIABLE_RECIPE_INPUT = false;
public disableRECIPE_FILTER = false;
public disableFILTER_TEXT = false;
public disableWRITE_RECIPE_NAME_AFTER_DOWNLOAD = false;
public disableTAG_AFTER_DOWNLOAD = false;
public disableSTATUS_CODE = false;
public disableSTATUS_TAG = false;
public disableCURRENT_RECIPE_NAME = false;
public disableRECIPE_NAME_TAG_RPC = false;
public disableCOMMAND_WIZRD_ID = false;
public disableALARM_SOURCE = false;
public disableDURATION = false;
public disablePROMPT_FOR_COMMENT = false;
public disableAE_REMARK_ALARM_SERVER = false;
public disableAE_REMARK_COMMENT = false;
public disableBUT_TAG_MIN_VAL = false;
public disableBUT_TAG_MAX_VAL = false;
public disableBUT_TAG_UNITS = false;
public disableBUT_TAG_NAME = false;
public disableBUT_TAG_DESC = false;
public disableBUT_TAG_VALUE = false;
public disableTAG_SELECT = false;
public disableTAG_INPUT = false;
public disablePROMPT_FOR_COMMENT_2 = false;
public disableDATALOG_FILE = false;
public disableFILE_IDENTIFIER = false;
public disableRATE = false;
public disableDATALOG_UNITS = false;
public disableFILE_COMMAND = false;
public disablePROGRAM = false;
public disablePROGRAM_BROWSE = false;
public disableWAVE_FILE = false;
public disableWAVE_BROWSE = false;
public disableDEFINE_SYMBOL = false;
public disableDEFINE_COMMAND = false;
public disableHELP_FILE = false;
public disableHELP_BROWSE = false;
public disableSEARCH_FOR = false;
public disablePRINT_TO_PDF = false;
public disablePDF_FILE_PATH = false;


  
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
    public starServices: starServices
   ) {
      this.router = router;
      this.componentConfig = new componentConfigDef(); 
      this.componentConfig_output = new componentConfigDef(); 
      this.paramConfig = getParamConfig();
      this.userLang =  this.paramConfig.userLang.toUpperCase() ;
      this.componentConfig.queryable  = true;
      this.componentConfig.navigable = true;
      this.componentConfig.insertable = true;
      this.componentConfig.removeable = true;
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
    if (this.componentConfig_output) {
      const wasDirty = this.componentConfig_output.isDirty;
      this.componentConfig_output = new componentConfigDef();
      this.componentConfig_output.isDirty = this.form.dirty;
      
      // Only emit if state changed
      if (wasDirty !== this.componentConfig_output.isDirty) {
        console.log('onCloseWindowDebug:Form dirty state changed:', this.form.dirty, this.componentConfig_output.isDirty);
        this.emitcomponentConfig_output();
      }
    }
  });

  }
  private emitcomponentConfig_output(): void {
  if (this.componentConfig_output) {
    this.componentConfig_output.eventFrom = this.compSelector;
    
    console.log('onCloseWindowDebug:Emitting componentConfig_output:', this.componentConfig_output);
    this.setComponentConfig_Output.emit(this.componentConfig_output);
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

  private formInitialValues:any =   new scdcommandWizrdScdCweCommandWizard();   
    @Input() public set detail_Input(form: any) {
       if (typeof form != "undefined"){
        this.isSearch = true;
        this.executeQuery(form);
        this.isChild = true;
      }
      /*
    if (this.paramConfig.DEBUG_FLAG) console.log('detail_Input ScdCommandWizrdScdCweCommandWizardFormtabs form.COMMAND_WIZRD_ID :' + form.COMMAND_WIZRD_ID);
    if ( (form.COMMAND_WIZRD_ID != "") &&   (typeof form.COMMAND_WIZRD_ID != "undefined"))
    {
      this.masterKey = form.COMMAND_WIZRD_ID;
      
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
    if ( (typeof form != "undefined") &&   (typeof form.COMMAND_WIZRD_ID != "undefined") &&   (form.COMMAND_WIZRD_ID != ""))
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
    //  this.FormStepsArr.forEach(item => {
    //  (item as any).visible = true;
    //});
    let nextTab = 1;
    this.tabstrip.selectTab(nextTab);
      this.starServices.callltransformForTreeView(this);
      if (this.paramConfig.DEBUG_FLAG) console.log("this.lookupArrDef:", this.lookupArrDef)
      console.log("lkpArrPARAMETER_TAGS_LKP:", JSON.stringify(this.lkpArrPARAMETER_TAGS_LKP))
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
    this.form.patchValue({ 'PRINTDISPLAY_UPLOAD_DATA_ENTRY_FIELDS': 'N' });
		this.form.patchValue({ 'PRINTDISPLAY_WAIT_BEFORE_PRINT': 'N' });
		this.form.patchValue({ 'PRINTDISPLAY_PRINT_TO_PDF': 'N' });
		this.form.patchValue({ 'PRINTDISPLAY_PARAMETER_TAGS': 'N' });
		this.form.patchValue({ 'PRINTDISPLAY_PARAMETER_FILE': 'N' });
		this.form.patchValue({ 'PRINTDISPLAY_TAG_LIST': 'N' });
		this.form.patchValue({ 'DISPLAY_IN_BACKGROUND': 'N' });
		this.form.patchValue({ 'WINDOW_POSITION': 'N' });
		this.form.patchValue({ 'DISABLE_ENTER_KEY': 'N' });
		this.form.patchValue({ 'MONITOR_INDEX': 'N' });
		this.form.patchValue({ 'DISPLAY_UPLOAD_DATA_ENTRY_FIELDS': 'N' });
		this.form.patchValue({ 'DISPLAY_HEIGHT': 'N' });
		this.form.patchValue({ 'DISABLE_KEY_LIST': 'N' });
		this.form.patchValue({ 'DISPLAY_WIDTH': 'N' });
		this.form.patchValue({ 'DISPLAY_MINIMIZED': 'N' });
		this.form.patchValue({ 'DISPLAY_LEFT': 'N' });
		this.form.patchValue({ 'DISPLAY_MAXIMIZED': 'N' });
		this.form.patchValue({ 'DISPLAY_TOP': 'N' });
		this.form.patchValue({ 'CACHE_DISPLAY_ALWAYS_UPDATING': 'N' });
		this.form.patchValue({ 'DISPLAY_PARAMETER_TAGS3': 'N' });
		this.form.patchValue({ 'CACHE_DISPLAY': 'N' });
		this.form.patchValue({ 'DISPLAY_PARAMETER_FILE3': 'N' });
		this.form.patchValue({ 'INCLUDE_DOCKED_DISPLAYS': 'N' });
		this.form.patchValue({ 'VERIFY': 'N' });
		this.form.patchValue({ 'ASYNCHRONOUS': 'N' });
		this.form.patchValue({ 'WRITE_RECIPE_NAME_TO_STRING_TAG': 'N' });
		this.form.patchValue({ 'RECIPE_FILTER': 'N' });
		this.form.patchValue({ 'WRITE_RECIPE_NAME_AFTER_DOWNLOAD': 'N' });
		this.form.patchValue({ 'STATUS_CODE': 'N' });
		this.form.patchValue({ 'CURRENT_RECIPE_NAME': 'N' });
		this.form.patchValue({ 'PROMPT_FOR_COMMENT': 'N' });
		this.form.patchValue({ 'TAG_SELECT': 'N' });
		this.form.patchValue({ 'PROMPT_FOR_COMMENT_2': 'N' });
		this.form.patchValue({ 'PRINT_TO_PDF': 'N' });
		
  
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
      this.Comp_Config.masterKeyArr =  [NewVal['COMMAND_WIZRD_ID']];
      this.Comp_Config.masterKeyNameArr =  ["COMMAND_WIZRD_ID"];
         
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
this.lookupArrDef =[	{"statment":"SELECT CODE, CODETEXT_LANG , PARTCODE FROM SOM_TABS_CODES WHERE CODENAME = \"PRINTDISPLAY_DISPLAY_FILE\"  and LANGUAGE_NAME = '" + this.userLang + "' order by CODETEXT_LANG ",
			"lkpArrName":"lkpArrPRINTDISPLAY_DISPLAY_FILE"},
	{"statment":"SELECT CODE, CODETEXT_LANG , PARTCODE FROM SOM_TABS_CODES WHERE CODENAME = \"PARAMETER_TAGS_LKP\"  and LANGUAGE_NAME = '" + this.userLang + "' order by CODETEXT_LANG ",
			"lkpArrName":"lkpArrPARAMETER_TAGS_LKP"},
	{"statment":"SELECT CODE, CODETEXT_LANG , PARTCODE FROM SOM_TABS_CODES WHERE CODENAME = \"PARAMETER_FILE_LKP\"  and LANGUAGE_NAME = '" + this.userLang + "' order by CODETEXT_LANG ",
			"lkpArrName":"lkpArrPARAMETER_FILE_LKP"},
	{"statment":"SELECT CODE, CODETEXT_LANG , PARTCODE FROM SOM_TABS_CODES WHERE CODENAME = \"PRINTDISPLAY_DISPLAY_FILE\"  and LANGUAGE_NAME = '" + this.userLang + "' order by CODETEXT_LANG ",
			"lkpArrName":"lkpArrDISPLAY_DISPLAY_FILE"},
	{"statment":"SELECT CODE, CODETEXT_LANG , PARTCODE FROM SOM_TABS_CODES WHERE CODENAME = \"DISPLAY_POSITION\"  and LANGUAGE_NAME = '" + this.userLang + "' order by CODETEXT_LANG ",
			"lkpArrName":"lkpArrDISPLAY_POSITION"},
	{"statment":"SELECT CODE, CODETEXT_LANG , PARTCODE FROM SOM_TABS_CODES WHERE CODENAME = \"MONITOR_INDEX_VALUE\"  and LANGUAGE_NAME = '" + this.userLang + "' order by CODETEXT_LANG ",
			"lkpArrName":"lkpArrMONITOR_INDEX_VALUE"},
	{"statment":"SELECT CODE, CODETEXT_LANG , PARTCODE FROM SOM_TABS_CODES WHERE CODENAME = \"TAG_LIST\"  and LANGUAGE_NAME = '" + this.userLang + "' order by CODETEXT_LANG ",
			"lkpArrName":"lkpArrTAG_LIST2"},
	{"statment":"SELECT CODE, CODETEXT_LANG, CODEVALUE_LANG FROM SOM_TABS_CODES WHERE CODENAME ='DISPLAY_PARAMETER_FILE' and LANGUAGE_NAME = '" + this.userLang + "' order by CODETEXT_LANG",
			"lkpArrName":"lkpArrDISPLAY_PARAMETER_FILE"},
	{"statment":"SELECT CODE, CODETEXT_LANG , PARTCODE FROM SOM_TABS_CODES WHERE CODENAME = \"CLOSE_MODE\"  and LANGUAGE_NAME = '" + this.userLang + "' order by CODETEXT_LANG ",
			"lkpArrName":"lkpArrCLOSE_MODE"},
	{"statment":"SELECT CODE, CODETEXT_LANG , PARTCODE FROM SOM_TABS_CODES WHERE CODENAME = \"DISPLAY_ABORT\"  and LANGUAGE_NAME = '" + this.userLang + "' order by CODETEXT_LANG ",
			"lkpArrName":"lkpArrDISPLAY_ABORT"},
	{"statment":"SELECT CODE, CODETEXT_LANG , PARTCODE FROM SOM_TABS_CODES WHERE CODENAME = \"UNPIN_MODE\"  and LANGUAGE_NAME = '" + this.userLang + "' order by CODETEXT_LANG ",
			"lkpArrName":"lkpArrUNPIN_MODE"},
	{"statment":"SELECT CODE, CODETEXT_LANG, CODEVALUE_LANG FROM SOM_TABS_CODES WHERE CODENAME ='TAG' and LANGUAGE_NAME = '" + this.userLang + "' order by CODETEXT_LANG",
			"lkpArrName":"lkpArrTAG"},
	{"statment":"SELECT CODE, CODETEXT_LANG , PARTCODE FROM SOM_TABS_CODES WHERE CODENAME = \"SET_TO\"  and LANGUAGE_NAME = '" + this.userLang + "' order by CODETEXT_LANG ",
			"lkpArrName":"lkpArrSET_TO"},
	{"statment":"SELECT CODE, CODETEXT_LANG , PARTCODE FROM SOM_TABS_CODES WHERE CODENAME = \"RAMP_BY\"  and LANGUAGE_NAME = '" + this.userLang + "' order by CODETEXT_LANG ",
			"lkpArrName":"lkpArrRAMP_BY"},
	{"statment":"SELECT CODE, CODETEXT_LANG , PARTCODE FROM SOM_TABS_CODES WHERE CODENAME = \"DIRECTION\"  and LANGUAGE_NAME = '" + this.userLang + "' order by CODETEXT_LANG ",
			"lkpArrName":"lkpArrDIRECTION"},
	{"statment":"SELECT CODE, CODETEXT_LANG , PARTCODE FROM SOM_TABS_CODES WHERE CODENAME = \"TAG_LIST\"  and LANGUAGE_NAME = '" + this.userLang + "' order by CODETEXT_LANG ",
			"lkpArrName":"lkpArrOTHER_TAG_INPUT"},
	{"statment":"SELECT CODE, CODETEXT_LANG , PARTCODE FROM SOM_TABS_CODES WHERE CODENAME = \"LANGUAGE_ID\"  and LANGUAGE_NAME = '" + this.userLang + "' order by CODETEXT_LANG ",
			"lkpArrName":"lkpArrLANGUAGE_ID"},
	{"statment":"SELECT CODE, CODETEXT_LANG , PARTCODE FROM SOM_TABS_CODES WHERE CODENAME = \"KEY_MODE\"  and LANGUAGE_NAME = '" + this.userLang + "' order by CODETEXT_LANG ",
			"lkpArrName":"lkpArrKEY_MODE"},
	{"statment":"SELECT CODE, CODETEXT_LANG, CODEVALUE_LANG FROM SOM_TABS_CODES WHERE CODENAME ='KEY_FILE' and LANGUAGE_NAME = '" + this.userLang + "' order by CODETEXT_LANG",
			"lkpArrName":"lkpArrKEY_FILE"},
	{"statment":"SELECT CODE, CODETEXT_LANG , PARTCODE FROM SOM_TABS_CODES WHERE CODENAME = \"DISPLAY_CLIENT_CLOSE_MODE\"  and LANGUAGE_NAME = '" + this.userLang + "' order by CODETEXT_LANG ",
			"lkpArrName":"lkpArrDISPLAY_CLIENT_CLOSE_MODE"},
	{"statment":"SELECT  DISPLAY_ID CODE,  DISPLAY_NAME CODETEXT_LANG FROM SCD_DISPLAY",
			"lkpArrName":"lkpArrFILE_NAME"},
	{"statment":"SELECT CODE, CODETEXT_LANG, CODEVALUE_LANG FROM SOM_TABS_CODES WHERE CODENAME ='RECIPE_NAME_TAG' and LANGUAGE_NAME = '" + this.userLang + "' order by CODETEXT_LANG",
			"lkpArrName":"lkpArrRECIPE_NAME_TAG"},
	{"statment":"SELECT CODE, CODETEXT_LANG , PARTCODE FROM SOM_TABS_CODES WHERE CODENAME = \"INVOKE_DISPLAY_FILE\"  and LANGUAGE_NAME = '" + this.userLang + "' order by CODETEXT_LANG ",
			"lkpArrName":"lkpArrINVOKE_DISPLAY_FILE"},
	{"statment":"SELECT CODE, CODETEXT_LANG, CODEVALUE_LANG FROM SOM_TABS_CODES WHERE CODENAME ='INVOKE_ADD_TAG' and LANGUAGE_NAME = '" + this.userLang + "' order by CODETEXT_LANG",
			"lkpArrName":"lkpArrINVOKE_ADD_TAG"},
	{"statment":"SELECT CODE, CODETEXT_LANG , PARTCODE FROM SOM_TABS_CODES WHERE CODENAME = \"INVOKE_MODE\"  and LANGUAGE_NAME = '" + this.userLang + "' order by CODETEXT_LANG ",
			"lkpArrName":"lkpArrINVOKE_MODE"},
	{"statment":"SELECT CODE, CODETEXT_LANG, CODEVALUE_LANG FROM SOM_TABS_CODES WHERE CODENAME ='SET_TAG_TO_VALUE_OF_OBJECT' and LANGUAGE_NAME = '" + this.userLang + "' order by CODETEXT_LANG",
			"lkpArrName":"lkpArrSET_TAG_TO_VALUE_OF_OBJECT"},
	{"statment":"SELECT CODE, CODETEXT_LANG, CODEVALUE_LANG FROM SOM_TABS_CODES WHERE CODENAME ='SET_OBJECT_PROPERTY' and LANGUAGE_NAME = '" + this.userLang + "' order by CODETEXT_LANG",
			"lkpArrName":"lkpArrSET_OBJECT_PROPERTY"},
	{"statment":"SELECT CODE, CODETEXT_LANG, CODEVALUE_LANG FROM SOM_TABS_CODES WHERE CODENAME ='SET_TAG_TO_VALUE_FROM' and LANGUAGE_NAME = '" + this.userLang + "' order by CODETEXT_LANG",
			"lkpArrName":"lkpArrSET_TAG_TO_VALUE_FROM"},
	{"statment":"SELECT CODE, CODETEXT_LANG , PARTCODE FROM SOM_TABS_CODES WHERE CODENAME = \"RECIPE_FILE_MODE\"  and LANGUAGE_NAME = '" + this.userLang + "' order by CODETEXT_LANG ",
			"lkpArrName":"lkpArrRECIPE_FILE_MODE"},
	{"statment":"SELECT CODE, CODETEXT_LANG, CODEVALUE_LANG FROM SOM_TABS_CODES WHERE CODENAME ='RECIPE_FILE' and LANGUAGE_NAME = '" + this.userLang + "' order by CODETEXT_LANG",
			"lkpArrName":"lkpArrRECIPE_FILE"},
	{"statment":"SELECT CODE, CODETEXT_LANG, CODEVALUE_LANG FROM SOM_TABS_CODES WHERE CODENAME ='VARIABLE_RECIPE_INPUT' and LANGUAGE_NAME = '" + this.userLang + "' order by CODETEXT_LANG",
			"lkpArrName":"lkpArrVARIABLE_RECIPE_INPUT"},
	{"statment":"SELECT CODE, CODETEXT_LANG, CODEVALUE_LANG FROM SOM_TABS_CODES WHERE CODENAME ='TAG_AFTER_DOWNLOAD' and LANGUAGE_NAME = '" + this.userLang + "' order by CODETEXT_LANG",
			"lkpArrName":"lkpArrTAG_AFTER_DOWNLOAD"},
	{"statment":"SELECT CODE, CODETEXT_LANG, CODEVALUE_LANG FROM SOM_TABS_CODES WHERE CODENAME ='STATUS_TAG' and LANGUAGE_NAME = '" + this.userLang + "' order by CODETEXT_LANG",
			"lkpArrName":"lkpArrSTATUS_TAG"},
	{"statment":"SELECT CODE, CODETEXT_LANG, CODEVALUE_LANG FROM SOM_TABS_CODES WHERE CODENAME ='RECIPE_NAME_TAG_RPC' and LANGUAGE_NAME = '" + this.userLang + "' order by CODETEXT_LANG",
			"lkpArrName":"lkpArrRECIPE_NAME_TAG_RPC"},
	{"statment":"SELECT CODE, CODETEXT_LANG, CODEVALUE_LANG FROM SOM_TABS_CODES WHERE CODENAME ='ALARM_SOURCE' and LANGUAGE_NAME = '" + this.userLang + "' order by CODETEXT_LANG",
			"lkpArrName":"lkpArrALARM_SOURCE"},
	{"statment":"SELECT CODE, CODETEXT_LANG, CODEVALUE_LANG FROM SOM_TABS_CODES WHERE CODENAME ='AE_REMARK_ALARM_SERVER' and LANGUAGE_NAME = '" + this.userLang + "' order by CODETEXT_LANG",
			"lkpArrName":"lkpArrAE_REMARK_ALARM_SERVER"},
	{"statment":"SELECT CODE, CODETEXT_LANG, CODEVALUE_LANG FROM SOM_TABS_CODES WHERE CODENAME ='TAG_INPUT' and LANGUAGE_NAME = '" + this.userLang + "' order by CODETEXT_LANG",
			"lkpArrName":"lkpArrTAG_INPUT"},
	{"statment":"SELECT CODE, CODETEXT_LANG , PARTCODE FROM SOM_TABS_CODES WHERE CODENAME = \"DATALOG_FILE\"  and LANGUAGE_NAME = '" + this.userLang + "' order by CODETEXT_LANG ",
			"lkpArrName":"lkpArrDATALOG_FILE"},
	{"statment":"SELECT CODE, CODETEXT_LANG , PARTCODE FROM SOM_TABS_CODES WHERE CODENAME = \"DATALOG_UNITS\"  and LANGUAGE_NAME = '" + this.userLang + "' order by CODETEXT_LANG ",
			"lkpArrName":"lkpArrDATALOG_UNITS"},
	{"statment":"SELECT CODE, CODETEXT_LANG, CODEVALUE_LANG FROM SOM_TABS_CODES WHERE CODENAME ='FILE_COMMAND' and LANGUAGE_NAME = '" + this.userLang + "' order by CODETEXT_LANG",
			"lkpArrName":"lkpArrFILE_COMMAND"},
	{"statment":"SELECT  DISPLAY_ID CODE,  DISPLAY_NAME CODETEXT_LANG FROM SCD_DISPLAY ",
			"lkpArrName":"lkpArrPROGRAM"}];
 if (this.lookupArrDef.length > 0)
   this.starServices.fetchLookups(this, this.lookupArrDef);
}

public lkpArrPRINTDISPLAY_DISPLAY_FILE = [];

public lkpArrPARAMETER_TAGS_LKP = [];

public lkpArrPARAMETER_FILE_LKP = [];

public lkpArrDISPLAY_DISPLAY_FILE = [];

public lkpArrDISPLAY_POSITION = [];

public lkpArrMONITOR_INDEX_VALUE = [];

public lkpArrTAG_LIST2 = [];

public lkpArrDISPLAY_PARAMETER_FILE = [];

public lkpArrCLOSE_MODE = [];

public lkpArrDISPLAY_ABORT = [];

public lkpArrUNPIN_MODE = [];

public lkpArrTAG = [];

public lkpArrSET_TO = [];

public lkpArrRAMP_BY = [];

public lkpArrDIRECTION = [];

public lkpArrOTHER_TAG_INPUT = [];

public lkpArrLANGUAGE_ID = [];

public lkpArrKEY_MODE = [];

public lkpArrKEY_FILE = [];

public lkpArrDISPLAY_CLIENT_CLOSE_MODE = [];

public lkpArrFILE_NAME = [];

public lkpArrRECIPE_NAME_TAG = [];

public lkpArrINVOKE_DISPLAY_FILE = [];

public lkpArrINVOKE_ADD_TAG = [];

public lkpArrINVOKE_MODE = [];

public lkpArrSET_TAG_TO_VALUE_OF_OBJECT = [];

public lkpArrSET_OBJECT_PROPERTY = [];

public lkpArrSET_TAG_TO_VALUE_FROM = [];

public lkpArrRECIPE_FILE_MODE = [];

public lkpArrRECIPE_FILE = [];

public lkpArrVARIABLE_RECIPE_INPUT = [];

public lkpArrTAG_AFTER_DOWNLOAD = [];

public lkpArrSTATUS_TAG = [];

public lkpArrRECIPE_NAME_TAG_RPC = [];

public lkpArrALARM_SOURCE = [];

public lkpArrAE_REMARK_ALARM_SERVER = [];

public lkpArrTAG_INPUT = [];

public lkpArrDATALOG_FILE = [];

public lkpArrDATALOG_UNITS = [];

public lkpArrFILE_COMMAND = [];

public lkpArrPROGRAM = [];

public lkpArrGetPRINTDISPLAY_DISPLAY_FILE(CODE: any): any {
var rec = this.lkpArrPRINTDISPLAY_DISPLAY_FILE.find((x:any) => x.CODE === CODE);
return rec;
}

public lkpArrGetPARAMETER_TAGS_LKP(CODE: any): any {
var rec = this.lkpArrPARAMETER_TAGS_LKP.find((x:any) => x.CODE === CODE);
return rec;
}

public lkpArrGetPARAMETER_FILE_LKP(CODE: any): any {
var rec = this.lkpArrPARAMETER_FILE_LKP.find((x:any) => x.CODE === CODE);
return rec;
}

public lkpArrGetDISPLAY_DISPLAY_FILE(CODE: any): any {
var rec = this.lkpArrDISPLAY_DISPLAY_FILE.find((x:any) => x.CODE === CODE);
return rec;
}

public lkpArrGetDISPLAY_POSITION(CODE: any): any {
var rec = this.lkpArrDISPLAY_POSITION.find((x:any) => x.CODE === CODE);
return rec;
}

public lkpArrGetMONITOR_INDEX_VALUE(CODE: any): any {
var rec = this.lkpArrMONITOR_INDEX_VALUE.find((x:any) => x.CODE === CODE);
return rec;
}

public lkpArrGetTAG_LIST2(CODE: any): any {
var rec = this.lkpArrTAG_LIST2.find((x:any) => x.CODE === CODE);
return rec;
}

public lkpArrGetDISPLAY_PARAMETER_FILE(CODE: any): any {
var rec = this.lkpArrDISPLAY_PARAMETER_FILE.find((x:any) => x.CODE === CODE);
return rec;
}

public lkpArrGetCLOSE_MODE(CODE: any): any {
var rec = this.lkpArrCLOSE_MODE.find((x:any) => x.CODE === CODE);
return rec;
}

public lkpArrGetDISPLAY_ABORT(CODE: any): any {
var rec = this.lkpArrDISPLAY_ABORT.find((x:any) => x.CODE === CODE);
return rec;
}

public lkpArrGetUNPIN_MODE(CODE: any): any {
var rec = this.lkpArrUNPIN_MODE.find((x:any) => x.CODE === CODE);
return rec;
}

public lkpArrGetTAG(CODE: any): any {
var rec = this.lkpArrTAG.find((x:any) => x.CODE === CODE);
return rec;
}

public lkpArrGetSET_TO(CODE: any): any {
var rec = this.lkpArrSET_TO.find((x:any) => x.CODE === CODE);
return rec;
}

public lkpArrGetRAMP_BY(CODE: any): any {
var rec = this.lkpArrRAMP_BY.find((x:any) => x.CODE === CODE);
return rec;
}

public lkpArrGetDIRECTION(CODE: any): any {
var rec = this.lkpArrDIRECTION.find((x:any) => x.CODE === CODE);
return rec;
}

public lkpArrGetOTHER_TAG_INPUT(CODE: any): any {
var rec = this.lkpArrOTHER_TAG_INPUT.find((x:any) => x.CODE === CODE);
return rec;
}

public lkpArrGetLANGUAGE_ID(CODE: any): any {
var rec = this.lkpArrLANGUAGE_ID.find((x:any) => x.CODE === CODE);
return rec;
}

public lkpArrGetKEY_MODE(CODE: any): any {
var rec = this.lkpArrKEY_MODE.find((x:any) => x.CODE === CODE);
return rec;
}

public lkpArrGetKEY_FILE(CODE: any): any {
var rec = this.lkpArrKEY_FILE.find((x:any) => x.CODE === CODE);
return rec;
}

public lkpArrGetDISPLAY_CLIENT_CLOSE_MODE(CODE: any): any {
var rec = this.lkpArrDISPLAY_CLIENT_CLOSE_MODE.find((x:any) => x.CODE === CODE);
return rec;
}

public lkpArrGetFILE_NAME(CODE: any): any {
var rec = this.lkpArrFILE_NAME.find((x:any) => x.CODE === CODE);
return rec;
}

public lkpArrGetRECIPE_NAME_TAG(CODE: any): any {
var rec = this.lkpArrRECIPE_NAME_TAG.find((x:any) => x.CODE === CODE);
return rec;
}

public lkpArrGetINVOKE_DISPLAY_FILE(CODE: any): any {
var rec = this.lkpArrINVOKE_DISPLAY_FILE.find((x:any) => x.CODE === CODE);
return rec;
}

public lkpArrGetINVOKE_ADD_TAG(CODE: any): any {
var rec = this.lkpArrINVOKE_ADD_TAG.find((x:any) => x.CODE === CODE);
return rec;
}

public lkpArrGetINVOKE_MODE(CODE: any): any {
var rec = this.lkpArrINVOKE_MODE.find((x:any) => x.CODE === CODE);
return rec;
}

public lkpArrGetSET_TAG_TO_VALUE_OF_OBJECT(CODE: any): any {
var rec = this.lkpArrSET_TAG_TO_VALUE_OF_OBJECT.find((x:any) => x.CODE === CODE);
return rec;
}

public lkpArrGetSET_OBJECT_PROPERTY(CODE: any): any {
var rec = this.lkpArrSET_OBJECT_PROPERTY.find((x:any) => x.CODE === CODE);
return rec;
}

public lkpArrGetSET_TAG_TO_VALUE_FROM(CODE: any): any {
var rec = this.lkpArrSET_TAG_TO_VALUE_FROM.find((x:any) => x.CODE === CODE);
return rec;
}

public lkpArrGetRECIPE_FILE_MODE(CODE: any): any {
var rec = this.lkpArrRECIPE_FILE_MODE.find((x:any) => x.CODE === CODE);
return rec;
}

public lkpArrGetRECIPE_FILE(CODE: any): any {
var rec = this.lkpArrRECIPE_FILE.find((x:any) => x.CODE === CODE);
return rec;
}

public lkpArrGetVARIABLE_RECIPE_INPUT(CODE: any): any {
var rec = this.lkpArrVARIABLE_RECIPE_INPUT.find((x:any) => x.CODE === CODE);
return rec;
}

public lkpArrGetTAG_AFTER_DOWNLOAD(CODE: any): any {
var rec = this.lkpArrTAG_AFTER_DOWNLOAD.find((x:any) => x.CODE === CODE);
return rec;
}

public lkpArrGetSTATUS_TAG(CODE: any): any {
var rec = this.lkpArrSTATUS_TAG.find((x:any) => x.CODE === CODE);
return rec;
}

public lkpArrGetRECIPE_NAME_TAG_RPC(CODE: any): any {
var rec = this.lkpArrRECIPE_NAME_TAG_RPC.find((x:any) => x.CODE === CODE);
return rec;
}

public lkpArrGetALARM_SOURCE(CODE: any): any {
var rec = this.lkpArrALARM_SOURCE.find((x:any) => x.CODE === CODE);
return rec;
}

public lkpArrGetAE_REMARK_ALARM_SERVER(CODE: any): any {
var rec = this.lkpArrAE_REMARK_ALARM_SERVER.find((x:any) => x.CODE === CODE);
return rec;
}

public lkpArrGetTAG_INPUT(CODE: any): any {
var rec = this.lkpArrTAG_INPUT.find((x:any) => x.CODE === CODE);
return rec;
}

public lkpArrGetDATALOG_FILE(CODE: any): any {
var rec = this.lkpArrDATALOG_FILE.find((x:any) => x.CODE === CODE);
return rec;
}

public lkpArrGetDATALOG_UNITS(CODE: any): any {
var rec = this.lkpArrDATALOG_UNITS.find((x:any) => x.CODE === CODE);
return rec;
}

public lkpArrGetFILE_COMMAND(CODE: any): any {
var rec = this.lkpArrFILE_COMMAND.find((x:any) => x.CODE === CODE);
return rec;
}

public lkpArrGetPROGRAM(CODE: any): any {
var rec = this.lkpArrPROGRAM.find((x:any) => x.CODE === CODE);
return rec;
}

onChanges(): void {
this.form.get('PDF_FILE_PATH2').valueChanges.subscribe(val => {
});
this.form.get('X_PX').valueChanges.subscribe(val => {
});
this.form.get('Y_PX').valueChanges.subscribe(val => {
});
this.form.get('EXPRESSION').valueChanges.subscribe(val => {
});
this.form.get('VALUE_INPUT').valueChanges.subscribe(val => {
});
this.form.get('STRING_INPUT').valueChanges.subscribe(val => {
});
this.form.get('SIMPLE_UTILITY_USER').valueChanges.subscribe(val => {
});
this.form.get('SIMPLE_UTILITY_PASSWORD').valueChanges.subscribe(val => {
});
this.form.get('SIMPLE_UTILITY_SYMBOL').valueChanges.subscribe(val => {
});
this.form.get('SIMPLE_UTILITY_REMARK_TEXT').valueChanges.subscribe(val => {
});
this.form.get('SENDKEYS_KEYSTRING').valueChanges.subscribe(val => {
});
this.form.get('TITLE_TEXT').valueChanges.subscribe(val => {
});
this.form.get('EXPRESSION_EDITOR').valueChanges.subscribe(val => {
});
this.form.get('THEN_ACTION').valueChanges.subscribe(val => {
});
this.form.get('ELSE_ACTION').valueChanges.subscribe(val => {
});
this.form.get('INVOKE_OBJECT').valueChanges.subscribe(val => {
});
this.form.get('PROPERTY_OR_METHOD').valueChanges.subscribe(val => {
});
this.form.get('METHOD_PARAMETER').valueChanges.subscribe(val => {
});
this.form.get('FILTER_TEXT').valueChanges.subscribe(val => {
});
this.form.get('COMMAND_WIZRD_ID').valueChanges.subscribe(val => {
});
this.form.get('DURATION').valueChanges.subscribe(val => {
});
this.form.get('AE_REMARK_COMMENT').valueChanges.subscribe(val => {
});
this.form.get('FILE_IDENTIFIER').valueChanges.subscribe(val => {
});
this.form.get('WAVE_FILE').valueChanges.subscribe(val => {
});
this.form.get('DEFINE_SYMBOL').valueChanges.subscribe(val => {
});
this.form.get('DEFINE_COMMAND').valueChanges.subscribe(val => {
});
this.form.get('HELP_FILE').valueChanges.subscribe(val => {
});
this.form.get('SEARCH_FOR').valueChanges.subscribe(val => {
});
this.form.get('PDF_FILE_PATH').valueChanges.subscribe(val => {
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
      if (this.paramConfig.DEBUG_FLAG) console.log("ScdCommandWizrdScdCweCommandWizardFormtabs ComponentConfig:", {...ComponentConfig});

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
    if (ComponentConfig.masterParams != null) {
    let masterParams = ComponentConfig.masterParams;

    let Name = masterParams.data['NAME'];
    let syntax = masterParams.data['SYNTAX'];

    console.log("WHEN_NOTIFY Name:", Name, masterParams);
    let nextTab = 0;
    switch (Name) {
        case "Abort": nextTab = 12; break;
        default: break;
    }
    this.FormStepsArr[nextTab].visible = true;
    this.FormStepsArr[nextTab].CODETEXT_LANG = syntax;

    setTimeout(() => {
        // The visible tab is now the FIRST (and only) rendered tab → index 0
        this.tabstrip.selectTab(0);
    });
}
  }
  async WHEN_NEW_FORM_INSTANCE(){
    // if (!this.isChild){
// 	this.executeQuery(this.form.value);
// }

this.FormStepsArr.forEach(item => {
    (item as any).visible = false;
});

this.lkpArrPRINTDISPLAY_DISPLAY_FILE = [{ "CODE": "", "CODETEXT_LANG": "", "PARTCODE": "", "_QUERY": "" }, { "CODE": "Logix_ALM", "CODETEXT_LANG": "Logix_ALM", "PARTCODE": "", "_QUERY": "GET_STMT" }, { "CODE": "Logix_ALMA", "CODETEXT_LANG": "Logix_ALMA", "PARTCODE": "", "_QUERY": "GET_STMT" }, { "CODE": "Logix_ALMA_Config", "CODETEXT_LANG": "Logix_ALMA_Config", "PARTCODE": "", "_QUERY": "GET_STMT" }, { "CODE": "Logix_ALMA_Status", "CODETEXT_LANG": "Logix_ALMA_Status", "PARTCODE": "", "_QUERY": "GET_STMT" }, { "CODE": "Logix_ALMD", "CODETEXT_LANG": "Logix_ALMD", "PARTCODE": "", "_QUERY": "GET_STMT" }, { "CODE": "Logix_ALMD_Config", "CODETEXT_LANG": "Logix_ALMD_Config", "PARTCODE": "", "_QUERY": "GET_STMT" }, { "CODE": "Logix_ALMD_Status", "CODETEXT_LANG": "Logix_ALMD_Status", "PARTCODE": "", "_QUERY": "GET_STMT" }, { "CODE": "Logix_ALM_Config", "CODETEXT_LANG": "Logix_ALM_Config", "PARTCODE": "", "_QUERY": "GET_STMT" }, { "CODE": "Logix_ALM_Status", "CODETEXT_LANG": "Logix_ALM_Status", "PARTCODE": "", "_QUERY": "GET_STMT" }, { "CODE": "Logix_CC", "CODETEXT_LANG": "Logix_CC", "PARTCODE": "", "_QUERY": "GET_STMT" }, { "CODE": "Logix_CC_AutoTune", "CODETEXT_LANG": "Logix_CC_AutoTune", "PARTCODE": "", "_QUERY": "GET_STMT" }, { "CODE": "Logix_CC_AutoTune_CV", "CODETEXT_LANG": "Logix_CC_AutoTune_CV", "PARTCODE": "", "_QUERY": "GET_STMT" }, { "CODE": "Logix_CC_Config", "CODETEXT_LANG": "Logix_CC_Config", "PARTCODE": "", "_QUERY": "GET_STMT" }, { "CODE": "Logix_CC_Status", "CODETEXT_LANG": "Logix_CC_Status", "PARTCODE": "", "_QUERY": "GET_STMT" }, { "CODE": "Logix_CC_Trend", "CODETEXT_LANG": "Logix_CC_Trend", "PARTCODE": "", "_QUERY": "GET_STMT" }, { "CODE": "Logix_CC_Tune", "CODETEXT_LANG": "Logix_CC_Tune", "PARTCODE": "", "_QUERY": "GET_STMT" }, { "CODE": "Logix_D2SD", "CODETEXT_LANG": "Logix_D2SD", "PARTCODE": "", "_QUERY": "GET_STMT" }, { "CODE": "Logix_D2SD_Status", "CODETEXT_LANG": "Logix_D2SD_Status", "PARTCODE": "", "_QUERY": "GET_STMT" }, { "CODE": "Logix_D3SD", "CODETEXT_LANG": "Logix_D3SD", "PARTCODE": "", "_QUERY": "GET_STMT" }, { "CODE": "Logix_D3SD_Status", "CODETEXT_LANG": "Logix_D3SD_Status", "PARTCODE": "", "_QUERY": "GET_STMT" }, { "CODE": "Logix_ESEL", "CODETEXT_LANG": "Logix_ESEL", "PARTCODE": "", "_QUERY": "GET_STMT" }, { "CODE": "Logix_ESEL_Status", "CODETEXT_LANG": "Logix_ESEL_Status", "PARTCODE": "", "_QUERY": "GET_STMT" }, { "CODE": "Logix_Help_Browser", "CODETEXT_LANG": "Logix_Help_Browser", "PARTCODE": "", "_QUERY": "GET_STMT" }, { "CODE": "Logix_IMC", "CODETEXT_LANG": "Logix_IMC", "PARTCODE": "", "_QUERY": "GET_STMT" }, { "CODE": "Logix_IMC_AutoTune", "CODETEXT_LANG": "Logix_IMC_AutoTune", "PARTCODE": "", "_QUERY": "GET_STMT" }, { "CODE": "Logix_IMC_Config", "CODETEXT_LANG": "Logix_IMC_Config", "PARTCODE": "", "_QUERY": "GET_STMT" }, { "CODE": "Logix_IMC_Status", "CODETEXT_LANG": "Logix_IMC_Status", "PARTCODE": "", "_QUERY": "GET_STMT" }, { "CODE": "Logix_IMC_Trend", "CODETEXT_LANG": "Logix_IMC_Trend", "PARTCODE": "", "_QUERY": "GET_STMT" }, { "CODE": "Logix_IMC_Tune", "CODETEXT_LANG": "Logix_IMC_Tune", "PARTCODE": "", "_QUERY": "GET_STMT" }, { "CODE": "Logix_PIDE", "CODETEXT_LANG": "Logix_PIDE", "PARTCODE": "", "_QUERY": "GET_STMT" }, { "CODE": "Logix_PIDE_Autotune", "CODETEXT_LANG": "Logix_PIDE_Autotune", "PARTCODE": "", "_QUERY": "GET_STMT" }, { "CODE": "Logix_PIDE_Config", "CODETEXT_LANG": "Logix_PIDE_Config", "PARTCODE": "", "_QUERY": "GET_STMT" }, { "CODE": "Logix_PIDE_Status", "CODETEXT_LANG": "Logix_PIDE_Status", "PARTCODE": "", "_QUERY": "GET_STMT" }, { "CODE": "Logix_PIDE_Trend", "CODETEXT_LANG": "Logix_PIDE_Trend", "PARTCODE": "", "_QUERY": "GET_STMT" }, { "CODE": "Logix_PIDE_Tune", "CODETEXT_LANG": "Logix_PIDE_Tune", "PARTCODE": "", "_QUERY": "GET_STMT" }, { "CODE": "Logix_PhaseManager", "CODETEXT_LANG": "Logix_PhaseManager", "PARTCODE": "", "_QUERY": "GET_STMT" }, { "CODE": "Logix_RMPS", "CODETEXT_LANG": "Logix_RMPS", "PARTCODE": "", "_QUERY": "GET_STMT" }, { "CODE": "Logix_RMPS_Config", "CODETEXT_LANG": "Logix_RMPS_Config", "PARTCODE": "", "_QUERY": "GET_STMT" }, { "CODE": "Logix_RMPS_Status", "CODETEXT_LANG": "Logix_RMPS_Status", "PARTCODE": "", "_QUERY": "GET_STMT" }, { "CODE": "Logix_TOT", "CODETEXT_LANG": "Logix_TOT", "PARTCODE": "", "_QUERY": "GET_STMT" }, { "CODE": "Logix_TOT_Config", "CODETEXT_LANG": "Logix_TOT_Config", "PARTCODE": "", "_QUERY": "GET_STMT" }, { "CODE": "Logix_TOT_Status", "CODETEXT_LANG": "Logix_TOT_Status", "PARTCODE": "", "_QUERY": "GET_STMT" }, { "CODE": "me", "CODETEXT_LANG": "me", "PARTCODE": "", "_QUERY": "GET_STMT" }]
this.lkpArrPRINTDISPLAY_DISPLAY_FILE = [{ "CODE": "", "CODETEXT_LANG": "", "PARTCODE": "", "_QUERY": "" }, { "CODE": "Logix_ALM", "CODETEXT_LANG": "Logix_ALM", "PARTCODE": "", "_QUERY": "GET_STMT" }, { "CODE": "Logix_ALMA", "CODETEXT_LANG": "Logix_ALMA", "PARTCODE": "", "_QUERY": "GET_STMT" }, { "CODE": "Logix_ALMA_Config", "CODETEXT_LANG": "Logix_ALMA_Config", "PARTCODE": "", "_QUERY": "GET_STMT" }, { "CODE": "Logix_ALMA_Status", "CODETEXT_LANG": "Logix_ALMA_Status", "PARTCODE": "", "_QUERY": "GET_STMT" }, { "CODE": "Logix_ALMD", "CODETEXT_LANG": "Logix_ALMD", "PARTCODE": "", "_QUERY": "GET_STMT" }, { "CODE": "Logix_ALMD_Config", "CODETEXT_LANG": "Logix_ALMD_Config", "PARTCODE": "", "_QUERY": "GET_STMT" }, { "CODE": "Logix_ALMD_Status", "CODETEXT_LANG": "Logix_ALMD_Status", "PARTCODE": "", "_QUERY": "GET_STMT" }, { "CODE": "Logix_ALM_Config", "CODETEXT_LANG": "Logix_ALM_Config", "PARTCODE": "", "_QUERY": "GET_STMT" }, { "CODE": "Logix_ALM_Status", "CODETEXT_LANG": "Logix_ALM_Status", "PARTCODE": "", "_QUERY": "GET_STMT" }, { "CODE": "Logix_CC", "CODETEXT_LANG": "Logix_CC", "PARTCODE": "", "_QUERY": "GET_STMT" }, { "CODE": "Logix_CC_AutoTune", "CODETEXT_LANG": "Logix_CC_AutoTune", "PARTCODE": "", "_QUERY": "GET_STMT" }, { "CODE": "Logix_CC_AutoTune_CV", "CODETEXT_LANG": "Logix_CC_AutoTune_CV", "PARTCODE": "", "_QUERY": "GET_STMT" }, { "CODE": "Logix_CC_Config", "CODETEXT_LANG": "Logix_CC_Config", "PARTCODE": "", "_QUERY": "GET_STMT" }, { "CODE": "Logix_CC_Status", "CODETEXT_LANG": "Logix_CC_Status", "PARTCODE": "", "_QUERY": "GET_STMT" }, { "CODE": "Logix_CC_Trend", "CODETEXT_LANG": "Logix_CC_Trend", "PARTCODE": "", "_QUERY": "GET_STMT" }, { "CODE": "Logix_CC_Tune", "CODETEXT_LANG": "Logix_CC_Tune", "PARTCODE": "", "_QUERY": "GET_STMT" }, { "CODE": "Logix_D2SD", "CODETEXT_LANG": "Logix_D2SD", "PARTCODE": "", "_QUERY": "GET_STMT" }, { "CODE": "Logix_D2SD_Status", "CODETEXT_LANG": "Logix_D2SD_Status", "PARTCODE": "", "_QUERY": "GET_STMT" }, { "CODE": "Logix_D3SD", "CODETEXT_LANG": "Logix_D3SD", "PARTCODE": "", "_QUERY": "GET_STMT" }, { "CODE": "Logix_D3SD_Status", "CODETEXT_LANG": "Logix_D3SD_Status", "PARTCODE": "", "_QUERY": "GET_STMT" }, { "CODE": "Logix_ESEL", "CODETEXT_LANG": "Logix_ESEL", "PARTCODE": "", "_QUERY": "GET_STMT" }, { "CODE": "Logix_ESEL_Status", "CODETEXT_LANG": "Logix_ESEL_Status", "PARTCODE": "", "_QUERY": "GET_STMT" }, { "CODE": "Logix_Help_Browser", "CODETEXT_LANG": "Logix_Help_Browser", "PARTCODE": "", "_QUERY": "GET_STMT" }, { "CODE": "Logix_IMC", "CODETEXT_LANG": "Logix_IMC", "PARTCODE": "", "_QUERY": "GET_STMT" }, { "CODE": "Logix_IMC_AutoTune", "CODETEXT_LANG": "Logix_IMC_AutoTune", "PARTCODE": "", "_QUERY": "GET_STMT" }, { "CODE": "Logix_IMC_Config", "CODETEXT_LANG": "Logix_IMC_Config", "PARTCODE": "", "_QUERY": "GET_STMT" }, { "CODE": "Logix_IMC_Status", "CODETEXT_LANG": "Logix_IMC_Status", "PARTCODE": "", "_QUERY": "GET_STMT" }, { "CODE": "Logix_IMC_Trend", "CODETEXT_LANG": "Logix_IMC_Trend", "PARTCODE": "", "_QUERY": "GET_STMT" }, { "CODE": "Logix_IMC_Tune", "CODETEXT_LANG": "Logix_IMC_Tune", "PARTCODE": "", "_QUERY": "GET_STMT" }, { "CODE": "Logix_PIDE", "CODETEXT_LANG": "Logix_PIDE", "PARTCODE": "", "_QUERY": "GET_STMT" }, { "CODE": "Logix_PIDE_Autotune", "CODETEXT_LANG": "Logix_PIDE_Autotune", "PARTCODE": "", "_QUERY": "GET_STMT" }, { "CODE": "Logix_PIDE_Config", "CODETEXT_LANG": "Logix_PIDE_Config", "PARTCODE": "", "_QUERY": "GET_STMT" }, { "CODE": "Logix_PIDE_Status", "CODETEXT_LANG": "Logix_PIDE_Status", "PARTCODE": "", "_QUERY": "GET_STMT" }, { "CODE": "Logix_PIDE_Trend", "CODETEXT_LANG": "Logix_PIDE_Trend", "PARTCODE": "", "_QUERY": "GET_STMT" }, { "CODE": "Logix_PIDE_Tune", "CODETEXT_LANG": "Logix_PIDE_Tune", "PARTCODE": "", "_QUERY": "GET_STMT" }, { "CODE": "Logix_PhaseManager", "CODETEXT_LANG": "Logix_PhaseManager", "PARTCODE": "", "_QUERY": "GET_STMT" }, { "CODE": "Logix_RMPS", "CODETEXT_LANG": "Logix_RMPS", "PARTCODE": "", "_QUERY": "GET_STMT" }, { "CODE": "Logix_RMPS_Config", "CODETEXT_LANG": "Logix_RMPS_Config", "PARTCODE": "", "_QUERY": "GET_STMT" }, { "CODE": "Logix_RMPS_Status", "CODETEXT_LANG": "Logix_RMPS_Status", "PARTCODE": "", "_QUERY": "GET_STMT" }, { "CODE": "Logix_TOT", "CODETEXT_LANG": "Logix_TOT", "PARTCODE": "", "_QUERY": "GET_STMT" }, { "CODE": "Logix_TOT_Config", "CODETEXT_LANG": "Logix_TOT_Config", "PARTCODE": "", "_QUERY": "GET_STMT" }, { "CODE": "Logix_TOT_Status", "CODETEXT_LANG": "Logix_TOT_Status", "PARTCODE": "", "_QUERY": "GET_STMT" }, { "CODE": "me", "CODETEXT_LANG": "me", "PARTCODE": "", "_QUERY": "GET_STMT" }]
this.lkpArrPARAMETER_TAGS_LKP = []
this.lkpArrPARAMETER_FILE_LKP = []
this.lkpArrDISPLAY_DISPLAY_FILE = [{ "CODE": "", "CODETEXT_LANG": "", "PARTCODE": "" }, { "CODE": "Logix_ALM", "CODETEXT_LANG": "Logix_ALM", "PARTCODE": "" }, { "CODE": "Logix_ALMA", "CODETEXT_LANG": "Logix_ALMA", "PARTCODE": "" }, { "CODE": "Logix_ALMA_Config", "CODETEXT_LANG": "Logix_ALMA_Config", "PARTCODE": "" }, { "CODE": "Logix_ALMA_Status", "CODETEXT_LANG": "Logix_ALMA_Status", "PARTCODE": "" }, { "CODE": "Logix_ALMD", "CODETEXT_LANG": "Logix_ALMD", "PARTCODE": "" }, { "CODE": "Logix_ALMD_Config", "CODETEXT_LANG": "Logix_ALMD_Config", "PARTCODE": "" }, { "CODE": "Logix_ALMD_Status", "CODETEXT_LANG": "Logix_ALMD_Status", "PARTCODE": "" }, { "CODE": "Logix_ALM_Config", "CODETEXT_LANG": "Logix_ALM_Config", "PARTCODE": "" }, { "CODE": "Logix_ALM_Status", "CODETEXT_LANG": "Logix_ALM_Status", "PARTCODE": "" }, { "CODE": "Logix_CC", "CODETEXT_LANG": "Logix_CC", "PARTCODE": "" }, { "CODE": "Logix_CC_AutoTune", "CODETEXT_LANG": "Logix_CC_AutoTune", "PARTCODE": "" }, { "CODE": "Logix_CC_AutoTune_CV", "CODETEXT_LANG": "Logix_CC_AutoTune_CV", "PARTCODE": "" }, { "CODE": "Logix_CC_Config", "CODETEXT_LANG": "Logix_CC_Config", "PARTCODE": "" }, { "CODE": "Logix_CC_Status", "CODETEXT_LANG": "Logix_CC_Status", "PARTCODE": "" }, { "CODE": "Logix_CC_Trend", "CODETEXT_LANG": "Logix_CC_Trend", "PARTCODE": "" }, { "CODE": "Logix_CC_Tune", "CODETEXT_LANG": "Logix_CC_Tune", "PARTCODE": "" }, { "CODE": "Logix_D2SD", "CODETEXT_LANG": "Logix_D2SD", "PARTCODE": "" }, { "CODE": "Logix_D2SD_Status", "CODETEXT_LANG": "Logix_D2SD_Status", "PARTCODE": "" }, { "CODE": "Logix_D3SD", "CODETEXT_LANG": "Logix_D3SD", "PARTCODE": "" }, { "CODE": "Logix_D3SD_Status", "CODETEXT_LANG": "Logix_D3SD_Status", "PARTCODE": "" }, { "CODE": "Logix_ESEL", "CODETEXT_LANG": "Logix_ESEL", "PARTCODE": "" }, { "CODE": "Logix_ESEL_Status", "CODETEXT_LANG": "Logix_ESEL_Status", "PARTCODE": "" }, { "CODE": "Logix_Help_Browser", "CODETEXT_LANG": "Logix_Help_Browser", "PARTCODE": "" }, { "CODE": "Logix_IMC", "CODETEXT_LANG": "Logix_IMC", "PARTCODE": "" }, { "CODE": "Logix_IMC_AutoTune", "CODETEXT_LANG": "Logix_IMC_AutoTune", "PARTCODE": "" }, { "CODE": "Logix_IMC_Config", "CODETEXT_LANG": "Logix_IMC_Config", "PARTCODE": "" }, { "CODE": "Logix_IMC_Status", "CODETEXT_LANG": "Logix_IMC_Status", "PARTCODE": "" }, { "CODE": "Logix_IMC_Trend", "CODETEXT_LANG": "Logix_IMC_Trend", "PARTCODE": "" }, { "CODE": "Logix_IMC_Tune", "CODETEXT_LANG": "Logix_IMC_Tune", "PARTCODE": "" }, { "CODE": "Logix_PIDE", "CODETEXT_LANG": "Logix_PIDE", "PARTCODE": "" }, { "CODE": "Logix_PIDE_Autotune", "CODETEXT_LANG": "Logix_PIDE_Autotune", "PARTCODE": "" }, { "CODE": "Logix_PIDE_Config", "CODETEXT_LANG": "Logix_PIDE_Config", "PARTCODE": "" }, { "CODE": "Logix_PIDE_Status", "CODETEXT_LANG": "Logix_PIDE_Status", "PARTCODE": "" }, { "CODE": "Logix_PIDE_Trend", "CODETEXT_LANG": "Logix_PIDE_Trend", "PARTCODE": "" }, { "CODE": "Logix_PIDE_Tune", "CODETEXT_LANG": "Logix_PIDE_Tune", "PARTCODE": "" }, { "CODE": "Logix_PhaseManager", "CODETEXT_LANG": "Logix_PhaseManager", "PARTCODE": "" }, { "CODE": "Logix_RMPS", "CODETEXT_LANG": "Logix_RMPS", "PARTCODE": "" }, { "CODE": "Logix_RMPS_Config", "CODETEXT_LANG": "Logix_RMPS_Config", "PARTCODE": "" }, { "CODE": "Logix_RMPS_Status", "CODETEXT_LANG": "Logix_RMPS_Status", "PARTCODE": "" }, { "CODE": "Logix_TOT", "CODETEXT_LANG": "Logix_TOT", "PARTCODE": "" }, { "CODE": "Logix_TOT_Config", "CODETEXT_LANG": "Logix_TOT_Config", "PARTCODE": "" }, { "CODE": "Logix_TOT_Status", "CODETEXT_LANG": "Logix_TOT_Status", "PARTCODE": "" }, { "CODE": "me", "CODETEXT_LANG": "me", "PARTCODE": "" }]
this.lkpArrDISPLAY_POSITION = [{ "CODE": "", "CODETEXT_LANG": "", "PARTCODE": "" }, { "CODE": "Bottom left corner", "CODETEXT_LANG": "Bottom left corner", "PARTCODE": "" }, { "CODE": "Bottom right corner", "CODETEXT_LANG": "Bottom right corner", "PARTCODE": "" }, { "CODE": "Centered in the bottom half", "CODETEXT_LANG": "Centered in the bottom half", "PARTCODE": "" }, { "CODE": "Centered in the top half", "CODETEXT_LANG": "Centered in the top half", "PARTCODE": "" }, { "CODE": "Centered of the screen", "CODETEXT_LANG": "Centered of the screen", "PARTCODE": "" }, { "CODE": "Centered on the left side", "CODETEXT_LANG": "Centered on the left side", "PARTCODE": "" }, { "CODE": "Centered on the right side", "CODETEXT_LANG": "Centered on the right side", "PARTCODE": "" }, { "CODE": "Docked to the bottom", "CODETEXT_LANG": "Docked to the bottom", "PARTCODE": "" }, { "CODE": "Docked to the left", "CODETEXT_LANG": "Docked to the left", "PARTCODE": "" }, { "CODE": "Docked to the right", "CODETEXT_LANG": "Docked to the right", "PARTCODE": "" }, { "CODE": "Docked to the top", "CODETEXT_LANG": "Docked to the top", "PARTCODE": "" }, { "CODE": "Relative to the calling position", "CODETEXT_LANG": "Relative to the calling position", "PARTCODE": "" }, { "CODE": "Top left corner", "CODETEXT_LANG": "Top left corner", "PARTCODE": "" }, { "CODE": "Top right corner", "CODETEXT_LANG": "Top right corner", "PARTCODE": "" }]
this.lkpArrMONITOR_INDEX_VALUE = [{ "CODE": "", "CODETEXT_LANG": "", "PARTCODE": "" }, { "CODE": "Monitor 1", "CODETEXT_LANG": "Monitor 1", "PARTCODE": "" }, { "CODE": "Monitor 2", "CODETEXT_LANG": "Monitor 2", "PARTCODE": "" }, { "CODE": "Monitor 3", "CODETEXT_LANG": "Monitor 3", "PARTCODE": "" }, { "CODE": "Monitor 4", "CODETEXT_LANG": "Monitor 4", "PARTCODE": "" }, { "CODE": "Monitor 5", "CODETEXT_LANG": "Monitor 5", "PARTCODE": "" }, { "CODE": "Monitor 6", "CODETEXT_LANG": "Monitor 6", "PARTCODE": "" }]
this.lkpArrTAG_LIST2 = []
this.lkpArrDISPLAY_PARAMETER_FILE = []
this.lkpArrCLOSE_MODE = [{ "CODE": "", "CODETEXT_LANG": "", "PARTCODE": "" }, { "CODE": "Close active window", "CODETEXT_LANG": "Close active window", "PARTCODE": "" }, { "CODE": "Close all windows", "CODETEXT_LANG": "Close all windows", "PARTCODE": "" }, { "CODE": "Close display Me", "CODETEXT_LANG": "Close display Me", "PARTCODE": "" }, { "CODE": "Close graphic display", "CODETEXT_LANG": "Close graphic display", "PARTCODE": "" }]
this.lkpArrDISPLAY_ABORT = [{ "CODE": "", "CODETEXT_LANG": "", "PARTCODE": "" }, { "CODE": "Logix_ALM", "CODETEXT_LANG": "Logix_ALM", "PARTCODE": "" }, { "CODE": "Logix_ALMA", "CODETEXT_LANG": "Logix_ALMA", "PARTCODE": "" }, { "CODE": "Logix_ALMA_Config", "CODETEXT_LANG": "Logix_ALMA_Config", "PARTCODE": "" }, { "CODE": "Logix_ALMA_Status", "CODETEXT_LANG": "Logix_ALMA_Status", "PARTCODE": "" }, { "CODE": "Logix_ALMD", "CODETEXT_LANG": "Logix_ALMD", "PARTCODE": "" }, { "CODE": "Logix_ALMD_Config", "CODETEXT_LANG": "Logix_ALMD_Config", "PARTCODE": "" }, { "CODE": "Logix_ALMD_Status", "CODETEXT_LANG": "Logix_ALMD_Status", "PARTCODE": "" }, { "CODE": "Logix_ALM_Config", "CODETEXT_LANG": "Logix_ALM_Config", "PARTCODE": "" }, { "CODE": "Logix_ALM_Status", "CODETEXT_LANG": "Logix_ALM_Status", "PARTCODE": "" }, { "CODE": "Logix_CC", "CODETEXT_LANG": "Logix_CC", "PARTCODE": "" }, { "CODE": "Logix_CC_AutoTune", "CODETEXT_LANG": "Logix_CC_AutoTune", "PARTCODE": "" }, { "CODE": "Logix_CC_AutoTune_CV", "CODETEXT_LANG": "Logix_CC_AutoTune_CV", "PARTCODE": "" }, { "CODE": "Logix_CC_Config", "CODETEXT_LANG": "Logix_CC_Config", "PARTCODE": "" }, { "CODE": "Logix_CC_Status", "CODETEXT_LANG": "Logix_CC_Status", "PARTCODE": "" }, { "CODE": "Logix_CC_Trend", "CODETEXT_LANG": "Logix_CC_Trend", "PARTCODE": "" }, { "CODE": "Logix_CC_Tune", "CODETEXT_LANG": "Logix_CC_Tune", "PARTCODE": "" }, { "CODE": "Logix_D2SD", "CODETEXT_LANG": "Logix_D2SD", "PARTCODE": "" }, { "CODE": "Logix_D2SD_Status", "CODETEXT_LANG": "Logix_D2SD_Status", "PARTCODE": "" }, { "CODE": "Logix_D3SD", "CODETEXT_LANG": "Logix_D3SD", "PARTCODE": "" }, { "CODE": "Logix_D3SD_Status", "CODETEXT_LANG": "Logix_D3SD_Status", "PARTCODE": "" }, { "CODE": "Logix_ESEL", "CODETEXT_LANG": "Logix_ESEL", "PARTCODE": "" }, { "CODE": "Logix_ESEL_Status", "CODETEXT_LANG": "Logix_ESEL_Status", "PARTCODE": "" }, { "CODE": "Logix_Help_Browser", "CODETEXT_LANG": "Logix_Help_Browser", "PARTCODE": "" }, { "CODE": "Logix_IMC", "CODETEXT_LANG": "Logix_IMC", "PARTCODE": "" }, { "CODE": "Logix_IMC_AutoTune", "CODETEXT_LANG": "Logix_IMC_AutoTune", "PARTCODE": "" }, { "CODE": "Logix_IMC_Config", "CODETEXT_LANG": "Logix_IMC_Config", "PARTCODE": "" }, { "CODE": "Logix_IMC_Status", "CODETEXT_LANG": "Logix_IMC_Status", "PARTCODE": "" }, { "CODE": "Logix_IMC_Trend", "CODETEXT_LANG": "Logix_IMC_Trend", "PARTCODE": "" }, { "CODE": "Logix_IMC_Tune", "CODETEXT_LANG": "Logix_IMC_Tune", "PARTCODE": "" }, { "CODE": "Logix_PIDE", "CODETEXT_LANG": "Logix_PIDE", "PARTCODE": "" }, { "CODE": "Logix_PIDE_Autotune", "CODETEXT_LANG": "Logix_PIDE_Autotune", "PARTCODE": "" }, { "CODE": "Logix_PIDE_Config", "CODETEXT_LANG": "Logix_PIDE_Config", "PARTCODE": "" }, { "CODE": "Logix_PIDE_Status", "CODETEXT_LANG": "Logix_PIDE_Status", "PARTCODE": "" }, { "CODE": "Logix_PIDE_Trend", "CODETEXT_LANG": "Logix_PIDE_Trend", "PARTCODE": "" }, { "CODE": "Logix_PIDE_Tune", "CODETEXT_LANG": "Logix_PIDE_Tune", "PARTCODE": "" }, { "CODE": "Logix_PhaseManager", "CODETEXT_LANG": "Logix_PhaseManager", "PARTCODE": "" }, { "CODE": "Logix_RMPS", "CODETEXT_LANG": "Logix_RMPS", "PARTCODE": "" }, { "CODE": "Logix_RMPS_Config", "CODETEXT_LANG": "Logix_RMPS_Config", "PARTCODE": "" }, { "CODE": "Logix_RMPS_Status", "CODETEXT_LANG": "Logix_RMPS_Status", "PARTCODE": "" }, { "CODE": "Logix_TOT", "CODETEXT_LANG": "Logix_TOT", "PARTCODE": "" }, { "CODE": "Logix_TOT_Config", "CODETEXT_LANG": "Logix_TOT_Config", "PARTCODE": "" }, { "CODE": "Logix_TOT_Status", "CODETEXT_LANG": "Logix_TOT_Status", "PARTCODE": "" }, { "CODE": "me", "CODETEXT_LANG": "me", "PARTCODE": "" }]
this.lkpArrUNPIN_MODE = [{ "CODE": "", "CODETEXT_LANG": "", "PARTCODE": "" }, { "CODE": "Unpin active window", "CODETEXT_LANG": "Unpin active window", "PARTCODE": "" }, { "CODE": "Unpin all windows", "CODETEXT_LANG": "Unpin all windows", "PARTCODE": "" }]
this.lkpArrTAG = [{ "CODE": "", "CODETEXT_LANG": "", "CODEVALUE_LANG": "" }, { "CODE": "TAG0", "CODETEXT_LANG": "TAG0", "CODEVALUE_LANG": "" }, { "CODE": "TAG1", "CODETEXT_LANG": "TAG1", "CODEVALUE_LANG": "" }]
this.lkpArrSET_TO = [{ "CODE": "", "CODETEXT_LANG": "", "PARTCODE": "" }, { "CODE": "Other tag", "CODETEXT_LANG": "Other tag", "PARTCODE": "" }, { "CODE": "Percentage", "CODETEXT_LANG": "Percentage", "PARTCODE": "" }, { "CODE": "String", "CODETEXT_LANG": "String", "PARTCODE": "" }, { "CODE": "Value or Label", "CODETEXT_LANG": "Value or Label", "PARTCODE": "" }]
this.lkpArrRAMP_BY = [{ "CODE": "", "CODETEXT_LANG": "", "PARTCODE": "" }, { "CODE": "Other tag", "CODETEXT_LANG": "Other tag", "PARTCODE": "" }, { "CODE": "Percentage", "CODETEXT_LANG": "Percentage", "PARTCODE": "" }, { "CODE": "Value", "CODETEXT_LANG": "Value", "PARTCODE": "" }]
this.lkpArrDIRECTION = [{ "CODE": "", "CODETEXT_LANG": "", "PARTCODE": "" }, { "CODE": "Down", "CODETEXT_LANG": "Down", "PARTCODE": "" }, { "CODE": "Up", "CODETEXT_LANG": "Up", "PARTCODE": "" }]
this.lkpArrOTHER_TAG_INPUT = []
this.lkpArrLANGUAGE_ID = [{ "CODE": "", "CODETEXT_LANG": "", "PARTCODE": "" }, { "CODE": "English", "CODETEXT_LANG": "English", "PARTCODE": "" }]
this.lkpArrKEY_MODE = [{ "CODE": "", "CODETEXT_LANG": "", "PARTCODE": "" }, { "CODE": "File", "CODETEXT_LANG": "File", "PARTCODE": "" }, { "CODE": "Stop", "CODETEXT_LANG": "Stop", "PARTCODE": "" }]
this.lkpArrKEY_FILE = [{ "CODE": "", "CODETEXT_LANG": "", "CODEVALUE_LANG": "" }, { "CODE": "KEY_FILE0", "CODETEXT_LANG": "KEY_FILE0", "CODEVALUE_LANG": "" }, { "CODE": "KEY_FILE1", "CODETEXT_LANG": "KEY_FILE1", "CODEVALUE_LANG": "" }]
this.lkpArrDISPLAY_CLIENT_CLOSE_MODE = [{ "CODE": "", "CODETEXT_LANG": "", "PARTCODE": "" }, { "CODE": "Current Display", "CODETEXT_LANG": "Current Display", "PARTCODE": "" }, { "CODE": "FileName", "CODETEXT_LANG": "FileName", "PARTCODE": "" }, { "CODE": "Title Bar", "CODETEXT_LANG": "Title Bar", "PARTCODE": "" }]
this.lkpArrRECIPE_NAME_TAG = [{ "CODE": "", "CODETEXT_LANG": "", "CODEVALUE_LANG": "" }, { "CODE": "RECIPE_NAME_TAG0", "CODETEXT_LANG": "RECIPE_NAME_TAG0", "CODEVALUE_LANG": "" }, { "CODE": "RECIPE_NAME_TAG1", "CODETEXT_LANG": "RECIPE_NAME_TAG1", "CODEVALUE_LANG": "" }]
this.lkpArrINVOKE_DISPLAY_FILE = [{ "CODE": "", "CODETEXT_LANG": "", "PARTCODE": "" }, { "CODE": "Logix_ALM", "CODETEXT_LANG": "Logix_ALM", "PARTCODE": "" }, { "CODE": "Logix_ALMA", "CODETEXT_LANG": "Logix_ALMA", "PARTCODE": "" }, { "CODE": "Logix_ALMA_Config", "CODETEXT_LANG": "Logix_ALMA_Config", "PARTCODE": "" }, { "CODE": "Logix_ALMA_Status", "CODETEXT_LANG": "Logix_ALMA_Status", "PARTCODE": "" }, { "CODE": "Logix_ALMD", "CODETEXT_LANG": "Logix_ALMD", "PARTCODE": "" }, { "CODE": "Logix_ALMD_Config", "CODETEXT_LANG": "Logix_ALMD_Config", "PARTCODE": "" }, { "CODE": "Logix_ALMD_Status", "CODETEXT_LANG": "Logix_ALMD_Status", "PARTCODE": "" }, { "CODE": "Logix_ALM_Config", "CODETEXT_LANG": "Logix_ALM_Config", "PARTCODE": "" }, { "CODE": "Logix_ALM_Status", "CODETEXT_LANG": "Logix_ALM_Status", "PARTCODE": "" }, { "CODE": "Logix_CC", "CODETEXT_LANG": "Logix_CC", "PARTCODE": "" }, { "CODE": "Logix_CC_AutoTune", "CODETEXT_LANG": "Logix_CC_AutoTune", "PARTCODE": "" }, { "CODE": "Logix_CC_AutoTune_CV", "CODETEXT_LANG": "Logix_CC_AutoTune_CV", "PARTCODE": "" }, { "CODE": "Logix_CC_Config", "CODETEXT_LANG": "Logix_CC_Config", "PARTCODE": "" }, { "CODE": "Logix_CC_Status", "CODETEXT_LANG": "Logix_CC_Status", "PARTCODE": "" }, { "CODE": "Logix_CC_Trend", "CODETEXT_LANG": "Logix_CC_Trend", "PARTCODE": "" }, { "CODE": "Logix_CC_Tune", "CODETEXT_LANG": "Logix_CC_Tune", "PARTCODE": "" }, { "CODE": "Logix_D2SD", "CODETEXT_LANG": "Logix_D2SD", "PARTCODE": "" }, { "CODE": "Logix_D2SD_Status", "CODETEXT_LANG": "Logix_D2SD_Status", "PARTCODE": "" }, { "CODE": "Logix_D3SD", "CODETEXT_LANG": "Logix_D3SD", "PARTCODE": "" }, { "CODE": "Logix_D3SD_Status", "CODETEXT_LANG": "Logix_D3SD_Status", "PARTCODE": "" }, { "CODE": "Logix_ESEL", "CODETEXT_LANG": "Logix_ESEL", "PARTCODE": "" }, { "CODE": "Logix_ESEL_Status", "CODETEXT_LANG": "Logix_ESEL_Status", "PARTCODE": "" }, { "CODE": "Logix_Help_Browser", "CODETEXT_LANG": "Logix_Help_Browser", "PARTCODE": "" }, { "CODE": "Logix_IMC", "CODETEXT_LANG": "Logix_IMC", "PARTCODE": "" }, { "CODE": "Logix_IMC_AutoTune", "CODETEXT_LANG": "Logix_IMC_AutoTune", "PARTCODE": "" }, { "CODE": "Logix_IMC_Config", "CODETEXT_LANG": "Logix_IMC_Config", "PARTCODE": "" }, { "CODE": "Logix_IMC_Status", "CODETEXT_LANG": "Logix_IMC_Status", "PARTCODE": "" }, { "CODE": "Logix_IMC_Trend", "CODETEXT_LANG": "Logix_IMC_Trend", "PARTCODE": "" }, { "CODE": "Logix_IMC_Tune", "CODETEXT_LANG": "Logix_IMC_Tune", "PARTCODE": "" }, { "CODE": "Logix_PIDE", "CODETEXT_LANG": "Logix_PIDE", "PARTCODE": "" }, { "CODE": "Logix_PIDE_Autotune", "CODETEXT_LANG": "Logix_PIDE_Autotune", "PARTCODE": "" }, { "CODE": "Logix_PIDE_Config", "CODETEXT_LANG": "Logix_PIDE_Config", "PARTCODE": "" }, { "CODE": "Logix_PIDE_Status", "CODETEXT_LANG": "Logix_PIDE_Status", "PARTCODE": "" }, { "CODE": "Logix_PIDE_Trend", "CODETEXT_LANG": "Logix_PIDE_Trend", "PARTCODE": "" }, { "CODE": "Logix_PIDE_Tune", "CODETEXT_LANG": "Logix_PIDE_Tune", "PARTCODE": "" }, { "CODE": "Logix_PhaseManager", "CODETEXT_LANG": "Logix_PhaseManager", "PARTCODE": "" }, { "CODE": "Logix_RMPS", "CODETEXT_LANG": "Logix_RMPS", "PARTCODE": "" }, { "CODE": "Logix_RMPS_Config", "CODETEXT_LANG": "Logix_RMPS_Config", "PARTCODE": "" }, { "CODE": "Logix_RMPS_Status", "CODETEXT_LANG": "Logix_RMPS_Status", "PARTCODE": "" }, { "CODE": "Logix_TOT", "CODETEXT_LANG": "Logix_TOT", "PARTCODE": "" }, { "CODE": "Logix_TOT_Config", "CODETEXT_LANG": "Logix_TOT_Config", "PARTCODE": "" }, { "CODE": "Logix_TOT_Status", "CODETEXT_LANG": "Logix_TOT_Status", "PARTCODE": "" }, { "CODE": "me", "CODETEXT_LANG": "me", "PARTCODE": "" }]
this.lkpArrINVOKE_ADD_TAG = []
this.lkpArrINVOKE_MODE = [{ "CODE": "", "CODETEXT_LANG": "", "PARTCODE": "" }, { "CODE": "Invoke method in object", "CODETEXT_LANG": "Invoke method in object", "PARTCODE": "" }, { "CODE": "Set object property to value of tag", "CODETEXT_LANG": "Set object property to value of tag", "PARTCODE": "" }, { "CODE": "Set tag to value from object method", "CODETEXT_LANG": "Set tag to value from object method", "PARTCODE": "" }, { "CODE": "Set tag to value of object property", "CODETEXT_LANG": "Set tag to value of object property", "PARTCODE": "" }]
this.lkpArrSET_TAG_TO_VALUE_OF_OBJECT = [{ "CODE": "", "CODETEXT_LANG": "", "CODEVALUE_LANG": "" }, { "CODE": "SET_TAG_TO_VALUE_OF_OBJECT0", "CODETEXT_LANG": "SET_TAG_TO_VALUE_OF_OBJECT0", "CODEVALUE_LANG": "" }, { "CODE": "SET_TAG_TO_VALUE_OF_OBJECT1", "CODETEXT_LANG": "SET_TAG_TO_VALUE_OF_OBJECT1", "CODEVALUE_LANG": "" }]
this.lkpArrSET_OBJECT_PROPERTY = [{ "CODE": "", "CODETEXT_LANG": "", "CODEVALUE_LANG": "" }, { "CODE": "SET_OBJECT_PROPERTY0", "CODETEXT_LANG": "SET_OBJECT_PROPERTY0", "CODEVALUE_LANG": "" }, { "CODE": "SET_OBJECT_PROPERTY1", "CODETEXT_LANG": "SET_OBJECT_PROPERTY1", "CODEVALUE_LANG": "" }]
this.lkpArrSET_TAG_TO_VALUE_FROM = [{ "CODE": "", "CODETEXT_LANG": "", "CODEVALUE_LANG": "" }, { "CODE": "SET_TAG_TO_VALUE_FROM0", "CODETEXT_LANG": "SET_TAG_TO_VALUE_FROM0", "CODEVALUE_LANG": "" }, { "CODE": "SET_TAG_TO_VALUE_FROM1", "CODETEXT_LANG": "SET_TAG_TO_VALUE_FROM1", "CODEVALUE_LANG": "" }]
this.lkpArrRECIPE_FILE_MODE = [{ "CODE": "", "CODETEXT_LANG": "", "PARTCODE": "" }, { "CODE": "Recipe File", "CODETEXT_LANG": "Recipe File", "PARTCODE": "" }, { "CODE": "Variable Recipe", "CODETEXT_LANG": "Variable Recipe", "PARTCODE": "" }]

    
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



async WHEN_VALIDATE_ITEM_PRINTDISPLAY_DISPLAY_FILE(value) {

 this.FORM_TRIGGER_FAILURE = false ; 
 if (typeof this.form.controls['PRINTDISPLAY_DISPLAY_FILE'] != "undefined" ) 
      this.form.controls['PRINTDISPLAY_DISPLAY_FILE'].setErrors({invalid: true}); 
 // Code goes here 
 

 if ( this.FORM_TRIGGER_FAILURE == true) 
 return; 
 
 if (typeof this.form.controls['PRINTDISPLAY_DISPLAY_FILE'] != "undefined" ) 
     this.form.get('PRINTDISPLAY_DISPLAY_FILE').updateValueAndValidity();
 this.form.updateValueAndValidity(); 
 }

 async ON_CLICK_PRINTDISPLAY_DISPLAY_FILE(event){

}

async WHEN_VALIDATE_ITEM_PRINTDISPLAY_UPLOAD_DATA_ENTRY_FIELDS(value) {

 this.FORM_TRIGGER_FAILURE = false ; 
 if (typeof this.form.controls['PRINTDISPLAY_UPLOAD_DATA_ENTRY_FIELDS'] != "undefined" ) 
      this.form.controls['PRINTDISPLAY_UPLOAD_DATA_ENTRY_FIELDS'].setErrors({invalid: true}); 
 // Code goes here 
 

 if ( this.FORM_TRIGGER_FAILURE == true) 
 return; 
 
 if (typeof this.form.controls['PRINTDISPLAY_UPLOAD_DATA_ENTRY_FIELDS'] != "undefined" ) 
     this.form.get('PRINTDISPLAY_UPLOAD_DATA_ENTRY_FIELDS').updateValueAndValidity();
 this.form.updateValueAndValidity(); 
 }

 async ON_CLICK_PRINTDISPLAY_UPLOAD_DATA_ENTRY_FIELDS(event){

}

async WHEN_VALIDATE_ITEM_PRINTDISPLAY_WAIT_BEFORE_PRINT(value) {

 this.FORM_TRIGGER_FAILURE = false ; 
 if (typeof this.form.controls['PRINTDISPLAY_WAIT_BEFORE_PRINT'] != "undefined" ) 
      this.form.controls['PRINTDISPLAY_WAIT_BEFORE_PRINT'].setErrors({invalid: true}); 
 // Code goes here 
 

 if ( this.FORM_TRIGGER_FAILURE == true) 
 return; 
 
 if (typeof this.form.controls['PRINTDISPLAY_WAIT_BEFORE_PRINT'] != "undefined" ) 
     this.form.get('PRINTDISPLAY_WAIT_BEFORE_PRINT').updateValueAndValidity();
 this.form.updateValueAndValidity(); 
 }

 async ON_CLICK_PRINTDISPLAY_WAIT_BEFORE_PRINT(event){

}

async WHEN_VALIDATE_ITEM_WAIT_MS(value) {

 this.FORM_TRIGGER_FAILURE = false ; 
 if (typeof this.form.controls['WAIT_MS'] != "undefined" ) 
      this.form.controls['WAIT_MS'].setErrors({invalid: true}); 
 // Code goes here 
 

 if ( this.FORM_TRIGGER_FAILURE == true) 
 return; 
 
 if (typeof this.form.controls['WAIT_MS'] != "undefined" ) 
     this.form.get('WAIT_MS').updateValueAndValidity();
 this.form.updateValueAndValidity(); 
 }

 async ON_CLICK_WAIT_MS(event){

}

async WHEN_VALIDATE_ITEM_PRINTDISPLAY_PRINT_TO_PDF(value) {

 this.FORM_TRIGGER_FAILURE = false ; 
 if (typeof this.form.controls['PRINTDISPLAY_PRINT_TO_PDF'] != "undefined" ) 
      this.form.controls['PRINTDISPLAY_PRINT_TO_PDF'].setErrors({invalid: true}); 
 // Code goes here 
 

 if ( this.FORM_TRIGGER_FAILURE == true) 
 return; 
 
 if (typeof this.form.controls['PRINTDISPLAY_PRINT_TO_PDF'] != "undefined" ) 
     this.form.get('PRINTDISPLAY_PRINT_TO_PDF').updateValueAndValidity();
 this.form.updateValueAndValidity(); 
 }

 async ON_CLICK_PRINTDISPLAY_PRINT_TO_PDF(event){

}

async WHEN_VALIDATE_ITEM_PDF_FILE_PATH2(value) {

 this.FORM_TRIGGER_FAILURE = false ; 
 if (typeof this.form.controls['PDF_FILE_PATH2'] != "undefined" ) 
      this.form.controls['PDF_FILE_PATH2'].setErrors({invalid: true}); 
 // Code goes here 
 

 if ( this.FORM_TRIGGER_FAILURE == true) 
 return; 
 
 if (typeof this.form.controls['PDF_FILE_PATH2'] != "undefined" ) 
     this.form.get('PDF_FILE_PATH2').updateValueAndValidity();
 this.form.updateValueAndValidity(); 
 }

 async ON_CLICK_PDF_FILE_PATH2(event){

}

async WHEN_VALIDATE_ITEM_DISPLAY_BROWSE(value) {

 this.FORM_TRIGGER_FAILURE = false ; 
 if (typeof this.form.controls['DISPLAY_BROWSE'] != "undefined" ) 
      this.form.controls['DISPLAY_BROWSE'].setErrors({invalid: true}); 
 // Code goes here 
 

 if ( this.FORM_TRIGGER_FAILURE == true) 
 return; 
 
 if (typeof this.form.controls['DISPLAY_BROWSE'] != "undefined" ) 
     this.form.get('DISPLAY_BROWSE').updateValueAndValidity();
 this.form.updateValueAndValidity(); 
 }

 async ON_CLICK_DISPLAY_BROWSE(event){

}

async WHEN_VALIDATE_ITEM_PRINTDISPLAY_PARAMETER_TAGS(value) {

 this.FORM_TRIGGER_FAILURE = false ; 
 if (typeof this.form.controls['PRINTDISPLAY_PARAMETER_TAGS'] != "undefined" ) 
      this.form.controls['PRINTDISPLAY_PARAMETER_TAGS'].setErrors({invalid: true}); 
 // Code goes here 
 

 if ( this.FORM_TRIGGER_FAILURE == true) 
 return; 
 
 if (typeof this.form.controls['PRINTDISPLAY_PARAMETER_TAGS'] != "undefined" ) 
     this.form.get('PRINTDISPLAY_PARAMETER_TAGS').updateValueAndValidity();
 this.form.updateValueAndValidity(); 
 }

 async ON_CLICK_PRINTDISPLAY_PARAMETER_TAGS(event){

}

async WHEN_VALIDATE_ITEM_PARAMETER_TAGS_LKP(value) {

 this.FORM_TRIGGER_FAILURE = false ; 
 if (typeof this.form.controls['PARAMETER_TAGS_LKP'] != "undefined" ) 
      this.form.controls['PARAMETER_TAGS_LKP'].setErrors({invalid: true}); 
 // Code goes here 
 

 if ( this.FORM_TRIGGER_FAILURE == true) 
 return; 
 
 if (typeof this.form.controls['PARAMETER_TAGS_LKP'] != "undefined" ) 
     this.form.get('PARAMETER_TAGS_LKP').updateValueAndValidity();
 this.form.updateValueAndValidity(); 
 }

 async ON_CLICK_PARAMETER_TAGS_LKP(event){

}

async WHEN_VALIDATE_ITEM_PRINTDISPLAY_PARAMETER_FILE(value) {

 this.FORM_TRIGGER_FAILURE = false ; 
 if (typeof this.form.controls['PRINTDISPLAY_PARAMETER_FILE'] != "undefined" ) 
      this.form.controls['PRINTDISPLAY_PARAMETER_FILE'].setErrors({invalid: true}); 
 // Code goes here 
 

 if ( this.FORM_TRIGGER_FAILURE == true) 
 return; 
 
 if (typeof this.form.controls['PRINTDISPLAY_PARAMETER_FILE'] != "undefined" ) 
     this.form.get('PRINTDISPLAY_PARAMETER_FILE').updateValueAndValidity();
 this.form.updateValueAndValidity(); 
 }

 async ON_CLICK_PRINTDISPLAY_PARAMETER_FILE(event){

}

async WHEN_VALIDATE_ITEM_PARAMETER_FILE_LKP(value) {

 this.FORM_TRIGGER_FAILURE = false ; 
 if (typeof this.form.controls['PARAMETER_FILE_LKP'] != "undefined" ) 
      this.form.controls['PARAMETER_FILE_LKP'].setErrors({invalid: true}); 
 // Code goes here 
 

 if ( this.FORM_TRIGGER_FAILURE == true) 
 return; 
 
 if (typeof this.form.controls['PARAMETER_FILE_LKP'] != "undefined" ) 
     this.form.get('PARAMETER_FILE_LKP').updateValueAndValidity();
 this.form.updateValueAndValidity(); 
 }

 async ON_CLICK_PARAMETER_FILE_LKP(event){

}

async WHEN_VALIDATE_ITEM_PRINTDISPLAY_TAG_LIST(value) {

 this.FORM_TRIGGER_FAILURE = false ; 
 if (typeof this.form.controls['PRINTDISPLAY_TAG_LIST'] != "undefined" ) 
      this.form.controls['PRINTDISPLAY_TAG_LIST'].setErrors({invalid: true}); 
 // Code goes here 
 

 if ( this.FORM_TRIGGER_FAILURE == true) 
 return; 
 
 if (typeof this.form.controls['PRINTDISPLAY_TAG_LIST'] != "undefined" ) 
     this.form.get('PRINTDISPLAY_TAG_LIST').updateValueAndValidity();
 this.form.updateValueAndValidity(); 
 }

 async ON_CLICK_PRINTDISPLAY_TAG_LIST(event){

}

async WHEN_VALIDATE_ITEM_X_PX(value) {

 this.FORM_TRIGGER_FAILURE = false ; 
 if (typeof this.form.controls['X_PX'] != "undefined" ) 
      this.form.controls['X_PX'].setErrors({invalid: true}); 
 // Code goes here 
 

 if ( this.FORM_TRIGGER_FAILURE == true) 
 return; 
 
 if (typeof this.form.controls['X_PX'] != "undefined" ) 
     this.form.get('X_PX').updateValueAndValidity();
 this.form.updateValueAndValidity(); 
 }

 async ON_CLICK_X_PX(event){

}

async WHEN_VALIDATE_ITEM_Y_PX(value) {

 this.FORM_TRIGGER_FAILURE = false ; 
 if (typeof this.form.controls['Y_PX'] != "undefined" ) 
      this.form.controls['Y_PX'].setErrors({invalid: true}); 
 // Code goes here 
 

 if ( this.FORM_TRIGGER_FAILURE == true) 
 return; 
 
 if (typeof this.form.controls['Y_PX'] != "undefined" ) 
     this.form.get('Y_PX').updateValueAndValidity();
 this.form.updateValueAndValidity(); 
 }

 async ON_CLICK_Y_PX(event){

}

async WHEN_VALIDATE_ITEM_DISPLAY_DISPLAY_FILE(value) {

 this.FORM_TRIGGER_FAILURE = false ; 
 if (typeof this.form.controls['DISPLAY_DISPLAY_FILE'] != "undefined" ) 
      this.form.controls['DISPLAY_DISPLAY_FILE'].setErrors({invalid: true}); 
 // Code goes here 
 

 if ( this.FORM_TRIGGER_FAILURE == true) 
 return; 
 
 if (typeof this.form.controls['DISPLAY_DISPLAY_FILE'] != "undefined" ) 
     this.form.get('DISPLAY_DISPLAY_FILE').updateValueAndValidity();
 this.form.updateValueAndValidity(); 
 }

 async ON_CLICK_DISPLAY_DISPLAY_FILE(event){

}

async WHEN_VALIDATE_ITEM_DISPLAY_IN_BACKGROUND(value) {

 this.FORM_TRIGGER_FAILURE = false ; 
 if (typeof this.form.controls['DISPLAY_IN_BACKGROUND'] != "undefined" ) 
      this.form.controls['DISPLAY_IN_BACKGROUND'].setErrors({invalid: true}); 
 // Code goes here 
 

 if ( this.FORM_TRIGGER_FAILURE == true) 
 return; 
 
 if (typeof this.form.controls['DISPLAY_IN_BACKGROUND'] != "undefined" ) 
     this.form.get('DISPLAY_IN_BACKGROUND').updateValueAndValidity();
 this.form.updateValueAndValidity(); 
 }

 async ON_CLICK_DISPLAY_IN_BACKGROUND(event){

}

async WHEN_VALIDATE_ITEM_WINDOW_POSITION(value) {

 this.FORM_TRIGGER_FAILURE = false ; 
 if (typeof this.form.controls['WINDOW_POSITION'] != "undefined" ) 
      this.form.controls['WINDOW_POSITION'].setErrors({invalid: true}); 
 // Code goes here 
 

 if ( this.FORM_TRIGGER_FAILURE == true) 
 return; 
 
 if (typeof this.form.controls['WINDOW_POSITION'] != "undefined" ) 
     this.form.get('WINDOW_POSITION').updateValueAndValidity();
 this.form.updateValueAndValidity(); 
 }

 async ON_CLICK_WINDOW_POSITION(event){

}

async WHEN_VALIDATE_ITEM_DISPLAY_POSITION(value) {

 this.FORM_TRIGGER_FAILURE = false ; 
 if (typeof this.form.controls['DISPLAY_POSITION'] != "undefined" ) 
      this.form.controls['DISPLAY_POSITION'].setErrors({invalid: true}); 
 // Code goes here 
 

 if ( this.FORM_TRIGGER_FAILURE == true) 
 return; 
 
 if (typeof this.form.controls['DISPLAY_POSITION'] != "undefined" ) 
     this.form.get('DISPLAY_POSITION').updateValueAndValidity();
 this.form.updateValueAndValidity(); 
 }

 async ON_CLICK_DISPLAY_POSITION(event){

}

async WHEN_VALIDATE_ITEM_DISABLE_ENTER_KEY(value) {

 this.FORM_TRIGGER_FAILURE = false ; 
 if (typeof this.form.controls['DISABLE_ENTER_KEY'] != "undefined" ) 
      this.form.controls['DISABLE_ENTER_KEY'].setErrors({invalid: true}); 
 // Code goes here 
 

 if ( this.FORM_TRIGGER_FAILURE == true) 
 return; 
 
 if (typeof this.form.controls['DISABLE_ENTER_KEY'] != "undefined" ) 
     this.form.get('DISABLE_ENTER_KEY').updateValueAndValidity();
 this.form.updateValueAndValidity(); 
 }

 async ON_CLICK_DISABLE_ENTER_KEY(event){

}

async WHEN_VALIDATE_ITEM_MONITOR_INDEX(value) {

 this.FORM_TRIGGER_FAILURE = false ; 
 if (typeof this.form.controls['MONITOR_INDEX'] != "undefined" ) 
      this.form.controls['MONITOR_INDEX'].setErrors({invalid: true}); 
 // Code goes here 
 

 if ( this.FORM_TRIGGER_FAILURE == true) 
 return; 
 
 if (typeof this.form.controls['MONITOR_INDEX'] != "undefined" ) 
     this.form.get('MONITOR_INDEX').updateValueAndValidity();
 this.form.updateValueAndValidity(); 
 }

 async ON_CLICK_MONITOR_INDEX(event){

}

async WHEN_VALIDATE_ITEM_MONITOR_INDEX_VALUE(value) {

 this.FORM_TRIGGER_FAILURE = false ; 
 if (typeof this.form.controls['MONITOR_INDEX_VALUE'] != "undefined" ) 
      this.form.controls['MONITOR_INDEX_VALUE'].setErrors({invalid: true}); 
 // Code goes here 
 

 if ( this.FORM_TRIGGER_FAILURE == true) 
 return; 
 
 if (typeof this.form.controls['MONITOR_INDEX_VALUE'] != "undefined" ) 
     this.form.get('MONITOR_INDEX_VALUE').updateValueAndValidity();
 this.form.updateValueAndValidity(); 
 }

 async ON_CLICK_MONITOR_INDEX_VALUE(event){

}

async WHEN_VALIDATE_ITEM_DISPLAY_UPLOAD_DATA_ENTRY_FIELDS(value) {

 this.FORM_TRIGGER_FAILURE = false ; 
 if (typeof this.form.controls['DISPLAY_UPLOAD_DATA_ENTRY_FIELDS'] != "undefined" ) 
      this.form.controls['DISPLAY_UPLOAD_DATA_ENTRY_FIELDS'].setErrors({invalid: true}); 
 // Code goes here 
 

 if ( this.FORM_TRIGGER_FAILURE == true) 
 return; 
 
 if (typeof this.form.controls['DISPLAY_UPLOAD_DATA_ENTRY_FIELDS'] != "undefined" ) 
     this.form.get('DISPLAY_UPLOAD_DATA_ENTRY_FIELDS').updateValueAndValidity();
 this.form.updateValueAndValidity(); 
 }

 async ON_CLICK_DISPLAY_UPLOAD_DATA_ENTRY_FIELDS(event){

}

async WHEN_VALIDATE_ITEM_DISPLAY_HEIGHT(value) {

 this.FORM_TRIGGER_FAILURE = false ; 
 if (typeof this.form.controls['DISPLAY_HEIGHT'] != "undefined" ) 
      this.form.controls['DISPLAY_HEIGHT'].setErrors({invalid: true}); 
 // Code goes here 
 

 if ( this.FORM_TRIGGER_FAILURE == true) 
 return; 
 
 if (typeof this.form.controls['DISPLAY_HEIGHT'] != "undefined" ) 
     this.form.get('DISPLAY_HEIGHT').updateValueAndValidity();
 this.form.updateValueAndValidity(); 
 }

 async ON_CLICK_DISPLAY_HEIGHT(event){

}

async WHEN_VALIDATE_ITEM_HEIGHT_PX(value) {

 this.FORM_TRIGGER_FAILURE = false ; 
 if (typeof this.form.controls['HEIGHT_PX'] != "undefined" ) 
      this.form.controls['HEIGHT_PX'].setErrors({invalid: true}); 
 // Code goes here 
 

 if ( this.FORM_TRIGGER_FAILURE == true) 
 return; 
 
 if (typeof this.form.controls['HEIGHT_PX'] != "undefined" ) 
     this.form.get('HEIGHT_PX').updateValueAndValidity();
 this.form.updateValueAndValidity(); 
 }

 async ON_CLICK_HEIGHT_PX(event){

}

async WHEN_VALIDATE_ITEM_DISABLE_KEY_LIST(value) {

 this.FORM_TRIGGER_FAILURE = false ; 
 if (typeof this.form.controls['DISABLE_KEY_LIST'] != "undefined" ) 
      this.form.controls['DISABLE_KEY_LIST'].setErrors({invalid: true}); 
 // Code goes here 
 

 if ( this.FORM_TRIGGER_FAILURE == true) 
 return; 
 
 if (typeof this.form.controls['DISABLE_KEY_LIST'] != "undefined" ) 
     this.form.get('DISABLE_KEY_LIST').updateValueAndValidity();
 this.form.updateValueAndValidity(); 
 }

 async ON_CLICK_DISABLE_KEY_LIST(event){

}

async WHEN_VALIDATE_ITEM_DISPLAY_WIDTH(value) {

 this.FORM_TRIGGER_FAILURE = false ; 
 if (typeof this.form.controls['DISPLAY_WIDTH'] != "undefined" ) 
      this.form.controls['DISPLAY_WIDTH'].setErrors({invalid: true}); 
 // Code goes here 
 

 if ( this.FORM_TRIGGER_FAILURE == true) 
 return; 
 
 if (typeof this.form.controls['DISPLAY_WIDTH'] != "undefined" ) 
     this.form.get('DISPLAY_WIDTH').updateValueAndValidity();
 this.form.updateValueAndValidity(); 
 }

 async ON_CLICK_DISPLAY_WIDTH(event){

}

async WHEN_VALIDATE_ITEM_WIDTH_PX(value) {

 this.FORM_TRIGGER_FAILURE = false ; 
 if (typeof this.form.controls['WIDTH_PX'] != "undefined" ) 
      this.form.controls['WIDTH_PX'].setErrors({invalid: true}); 
 // Code goes here 
 

 if ( this.FORM_TRIGGER_FAILURE == true) 
 return; 
 
 if (typeof this.form.controls['WIDTH_PX'] != "undefined" ) 
     this.form.get('WIDTH_PX').updateValueAndValidity();
 this.form.updateValueAndValidity(); 
 }

 async ON_CLICK_WIDTH_PX(event){

}

async WHEN_VALIDATE_ITEM_DISPLAY_MINIMIZED(value) {

 this.FORM_TRIGGER_FAILURE = false ; 
 if (typeof this.form.controls['DISPLAY_MINIMIZED'] != "undefined" ) 
      this.form.controls['DISPLAY_MINIMIZED'].setErrors({invalid: true}); 
 // Code goes here 
 

 if ( this.FORM_TRIGGER_FAILURE == true) 
 return; 
 
 if (typeof this.form.controls['DISPLAY_MINIMIZED'] != "undefined" ) 
     this.form.get('DISPLAY_MINIMIZED').updateValueAndValidity();
 this.form.updateValueAndValidity(); 
 }

 async ON_CLICK_DISPLAY_MINIMIZED(event){

}

async WHEN_VALIDATE_ITEM_DISPLAY_LEFT(value) {

 this.FORM_TRIGGER_FAILURE = false ; 
 if (typeof this.form.controls['DISPLAY_LEFT'] != "undefined" ) 
      this.form.controls['DISPLAY_LEFT'].setErrors({invalid: true}); 
 // Code goes here 
 

 if ( this.FORM_TRIGGER_FAILURE == true) 
 return; 
 
 if (typeof this.form.controls['DISPLAY_LEFT'] != "undefined" ) 
     this.form.get('DISPLAY_LEFT').updateValueAndValidity();
 this.form.updateValueAndValidity(); 
 }

 async ON_CLICK_DISPLAY_LEFT(event){

}

async WHEN_VALIDATE_ITEM_LEFT_PX(value) {

 this.FORM_TRIGGER_FAILURE = false ; 
 if (typeof this.form.controls['LEFT_PX'] != "undefined" ) 
      this.form.controls['LEFT_PX'].setErrors({invalid: true}); 
 // Code goes here 
 

 if ( this.FORM_TRIGGER_FAILURE == true) 
 return; 
 
 if (typeof this.form.controls['LEFT_PX'] != "undefined" ) 
     this.form.get('LEFT_PX').updateValueAndValidity();
 this.form.updateValueAndValidity(); 
 }

 async ON_CLICK_LEFT_PX(event){

}

async WHEN_VALIDATE_ITEM_DISPLAY_MAXIMIZED(value) {

 this.FORM_TRIGGER_FAILURE = false ; 
 if (typeof this.form.controls['DISPLAY_MAXIMIZED'] != "undefined" ) 
      this.form.controls['DISPLAY_MAXIMIZED'].setErrors({invalid: true}); 
 // Code goes here 
 

 if ( this.FORM_TRIGGER_FAILURE == true) 
 return; 
 
 if (typeof this.form.controls['DISPLAY_MAXIMIZED'] != "undefined" ) 
     this.form.get('DISPLAY_MAXIMIZED').updateValueAndValidity();
 this.form.updateValueAndValidity(); 
 }

 async ON_CLICK_DISPLAY_MAXIMIZED(event){

}

async WHEN_VALIDATE_ITEM_DISPLAY_TOP(value) {

 this.FORM_TRIGGER_FAILURE = false ; 
 if (typeof this.form.controls['DISPLAY_TOP'] != "undefined" ) 
      this.form.controls['DISPLAY_TOP'].setErrors({invalid: true}); 
 // Code goes here 
 

 if ( this.FORM_TRIGGER_FAILURE == true) 
 return; 
 
 if (typeof this.form.controls['DISPLAY_TOP'] != "undefined" ) 
     this.form.get('DISPLAY_TOP').updateValueAndValidity();
 this.form.updateValueAndValidity(); 
 }

 async ON_CLICK_DISPLAY_TOP(event){

}

async WHEN_VALIDATE_ITEM_TOP_PX(value) {

 this.FORM_TRIGGER_FAILURE = false ; 
 if (typeof this.form.controls['TOP_PX'] != "undefined" ) 
      this.form.controls['TOP_PX'].setErrors({invalid: true}); 
 // Code goes here 
 

 if ( this.FORM_TRIGGER_FAILURE == true) 
 return; 
 
 if (typeof this.form.controls['TOP_PX'] != "undefined" ) 
     this.form.get('TOP_PX').updateValueAndValidity();
 this.form.updateValueAndValidity(); 
 }

 async ON_CLICK_TOP_PX(event){

}

async WHEN_VALIDATE_ITEM_CACHE_DISPLAY_ALWAYS_UPDATING(value) {

 this.FORM_TRIGGER_FAILURE = false ; 
 if (typeof this.form.controls['CACHE_DISPLAY_ALWAYS_UPDATING'] != "undefined" ) 
      this.form.controls['CACHE_DISPLAY_ALWAYS_UPDATING'].setErrors({invalid: true}); 
 // Code goes here 
 

 if ( this.FORM_TRIGGER_FAILURE == true) 
 return; 
 
 if (typeof this.form.controls['CACHE_DISPLAY_ALWAYS_UPDATING'] != "undefined" ) 
     this.form.get('CACHE_DISPLAY_ALWAYS_UPDATING').updateValueAndValidity();
 this.form.updateValueAndValidity(); 
 }

 async ON_CLICK_CACHE_DISPLAY_ALWAYS_UPDATING(event){

}

async WHEN_VALIDATE_ITEM_DISPLAY_PARAMETER_TAGS3(value) {

 this.FORM_TRIGGER_FAILURE = false ; 
 if (typeof this.form.controls['DISPLAY_PARAMETER_TAGS3'] != "undefined" ) 
      this.form.controls['DISPLAY_PARAMETER_TAGS3'].setErrors({invalid: true}); 
 // Code goes here 
 

 if ( this.FORM_TRIGGER_FAILURE == true) 
 return; 
 
 if (typeof this.form.controls['DISPLAY_PARAMETER_TAGS3'] != "undefined" ) 
     this.form.get('DISPLAY_PARAMETER_TAGS3').updateValueAndValidity();
 this.form.updateValueAndValidity(); 
 }

 async ON_CLICK_DISPLAY_PARAMETER_TAGS3(event){

}

async WHEN_VALIDATE_ITEM_TAG_LIST2(value) {

 this.FORM_TRIGGER_FAILURE = false ; 
 if (typeof this.form.controls['TAG_LIST2'] != "undefined" ) 
      this.form.controls['TAG_LIST2'].setErrors({invalid: true}); 
 // Code goes here 
 

 if ( this.FORM_TRIGGER_FAILURE == true) 
 return; 
 
 if (typeof this.form.controls['TAG_LIST2'] != "undefined" ) 
     this.form.get('TAG_LIST2').updateValueAndValidity();
 this.form.updateValueAndValidity(); 
 }

 async ON_CLICK_TAG_LIST2(event){

}

async WHEN_VALIDATE_ITEM_CACHE_DISPLAY(value) {

 this.FORM_TRIGGER_FAILURE = false ; 
 if (typeof this.form.controls['CACHE_DISPLAY'] != "undefined" ) 
      this.form.controls['CACHE_DISPLAY'].setErrors({invalid: true}); 
 // Code goes here 
 

 if ( this.FORM_TRIGGER_FAILURE == true) 
 return; 
 
 if (typeof this.form.controls['CACHE_DISPLAY'] != "undefined" ) 
     this.form.get('CACHE_DISPLAY').updateValueAndValidity();
 this.form.updateValueAndValidity(); 
 }

 async ON_CLICK_CACHE_DISPLAY(event){

}

async WHEN_VALIDATE_ITEM_DISPLAY_PARAMETER_FILE3(value) {

 this.FORM_TRIGGER_FAILURE = false ; 
 if (typeof this.form.controls['DISPLAY_PARAMETER_FILE3'] != "undefined" ) 
      this.form.controls['DISPLAY_PARAMETER_FILE3'].setErrors({invalid: true}); 
 // Code goes here 
 

 if ( this.FORM_TRIGGER_FAILURE == true) 
 return; 
 
 if (typeof this.form.controls['DISPLAY_PARAMETER_FILE3'] != "undefined" ) 
     this.form.get('DISPLAY_PARAMETER_FILE3').updateValueAndValidity();
 this.form.updateValueAndValidity(); 
 }

 async ON_CLICK_DISPLAY_PARAMETER_FILE3(event){

}

async WHEN_VALIDATE_ITEM_DISPLAY_PARAMETER_FILE(value) {

 this.FORM_TRIGGER_FAILURE = false ; 
 if (typeof this.form.controls['DISPLAY_PARAMETER_FILE'] != "undefined" ) 
      this.form.controls['DISPLAY_PARAMETER_FILE'].setErrors({invalid: true}); 
 // Code goes here 
 

 if ( this.FORM_TRIGGER_FAILURE == true) 
 return; 
 
 if (typeof this.form.controls['DISPLAY_PARAMETER_FILE'] != "undefined" ) 
     this.form.get('DISPLAY_PARAMETER_FILE').updateValueAndValidity();
 this.form.updateValueAndValidity(); 
 }

 async ON_CLICK_DISPLAY_PARAMETER_FILE(event){

}

async WHEN_VALIDATE_ITEM_CLOSE_MODE(value) {

 this.FORM_TRIGGER_FAILURE = false ; 
 if (typeof this.form.controls['CLOSE_MODE'] != "undefined" ) 
      this.form.controls['CLOSE_MODE'].setErrors({invalid: true}); 
 // Code goes here 
 

 if ( this.FORM_TRIGGER_FAILURE == true) 
 return; 
 
 if (typeof this.form.controls['CLOSE_MODE'] != "undefined" ) 
     this.form.get('CLOSE_MODE').updateValueAndValidity();
 this.form.updateValueAndValidity(); 
 }

 async ON_CLICK_CLOSE_MODE(event){

}

async WHEN_VALIDATE_ITEM_DISPLAY_ABORT(value) {

 this.FORM_TRIGGER_FAILURE = false ; 
 if (typeof this.form.controls['DISPLAY_ABORT'] != "undefined" ) 
      this.form.controls['DISPLAY_ABORT'].setErrors({invalid: true}); 
 // Code goes here 
 

 if ( this.FORM_TRIGGER_FAILURE == true) 
 return; 
 
 if (typeof this.form.controls['DISPLAY_ABORT'] != "undefined" ) 
     this.form.get('DISPLAY_ABORT').updateValueAndValidity();
 this.form.updateValueAndValidity(); 
 }

 async ON_CLICK_DISPLAY_ABORT(event){

}

async WHEN_VALIDATE_ITEM_INCLUDE_DOCKED_DISPLAYS(value) {

 this.FORM_TRIGGER_FAILURE = false ; 
 if (typeof this.form.controls['INCLUDE_DOCKED_DISPLAYS'] != "undefined" ) 
      this.form.controls['INCLUDE_DOCKED_DISPLAYS'].setErrors({invalid: true}); 
 // Code goes here 
 

 if ( this.FORM_TRIGGER_FAILURE == true) 
 return; 
 
 if (typeof this.form.controls['INCLUDE_DOCKED_DISPLAYS'] != "undefined" ) 
     this.form.get('INCLUDE_DOCKED_DISPLAYS').updateValueAndValidity();
 this.form.updateValueAndValidity(); 
 }

 async ON_CLICK_INCLUDE_DOCKED_DISPLAYS(event){

}

async WHEN_VALIDATE_ITEM_UNPIN_MODE(value) {

 this.FORM_TRIGGER_FAILURE = false ; 
 if (typeof this.form.controls['UNPIN_MODE'] != "undefined" ) 
      this.form.controls['UNPIN_MODE'].setErrors({invalid: true}); 
 // Code goes here 
 

 if ( this.FORM_TRIGGER_FAILURE == true) 
 return; 
 
 if (typeof this.form.controls['UNPIN_MODE'] != "undefined" ) 
     this.form.get('UNPIN_MODE').updateValueAndValidity();
 this.form.updateValueAndValidity(); 
 }

 async ON_CLICK_UNPIN_MODE(event){

}

async WHEN_VALIDATE_ITEM_TAG(value) {

 this.FORM_TRIGGER_FAILURE = false ; 
 if (typeof this.form.controls['TAG'] != "undefined" ) 
      this.form.controls['TAG'].setErrors({invalid: true}); 
 // Code goes here 
 

 if ( this.FORM_TRIGGER_FAILURE == true) 
 return; 
 
 if (typeof this.form.controls['TAG'] != "undefined" ) 
     this.form.get('TAG').updateValueAndValidity();
 this.form.updateValueAndValidity(); 
 }

 async ON_CLICK_TAG(event){

}

async WHEN_VALIDATE_ITEM_VERIFY(value) {

 this.FORM_TRIGGER_FAILURE = false ; 
 if (typeof this.form.controls['VERIFY'] != "undefined" ) 
      this.form.controls['VERIFY'].setErrors({invalid: true}); 
 // Code goes here 
 

 if ( this.FORM_TRIGGER_FAILURE == true) 
 return; 
 
 if (typeof this.form.controls['VERIFY'] != "undefined" ) 
     this.form.get('VERIFY').updateValueAndValidity();
 this.form.updateValueAndValidity(); 
 }

 async ON_CLICK_VERIFY(event){

}

async WHEN_VALIDATE_ITEM_ASYNCHRONOUS(value) {

 this.FORM_TRIGGER_FAILURE = false ; 
 if (typeof this.form.controls['ASYNCHRONOUS'] != "undefined" ) 
      this.form.controls['ASYNCHRONOUS'].setErrors({invalid: true}); 
 // Code goes here 
 

 if ( this.FORM_TRIGGER_FAILURE == true) 
 return; 
 
 if (typeof this.form.controls['ASYNCHRONOUS'] != "undefined" ) 
     this.form.get('ASYNCHRONOUS').updateValueAndValidity();
 this.form.updateValueAndValidity(); 
 }

 async ON_CLICK_ASYNCHRONOUS(event){

}

async WHEN_VALIDATE_ITEM_SET_TO(value) {

 this.FORM_TRIGGER_FAILURE = false ; 
 if (typeof this.form.controls['SET_TO'] != "undefined" ) 
      this.form.controls['SET_TO'].setErrors({invalid: true}); 
 // Code goes here 
 

 if ( this.FORM_TRIGGER_FAILURE == true) 
 return; 
 
 if (typeof this.form.controls['SET_TO'] != "undefined" ) 
     this.form.get('SET_TO').updateValueAndValidity();
 this.form.updateValueAndValidity(); 
 }

 async ON_CLICK_SET_TO(event){

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

async WHEN_VALIDATE_ITEM_RAMP_BY(value) {

 this.FORM_TRIGGER_FAILURE = false ; 
 if (typeof this.form.controls['RAMP_BY'] != "undefined" ) 
      this.form.controls['RAMP_BY'].setErrors({invalid: true}); 
 // Code goes here 
 

 if ( this.FORM_TRIGGER_FAILURE == true) 
 return; 
 
 if (typeof this.form.controls['RAMP_BY'] != "undefined" ) 
     this.form.get('RAMP_BY').updateValueAndValidity();
 this.form.updateValueAndValidity(); 
 }

 async ON_CLICK_RAMP_BY(event){

}

async WHEN_VALIDATE_ITEM_VALUE_INPUT(value) {

 this.FORM_TRIGGER_FAILURE = false ; 
 if (typeof this.form.controls['VALUE_INPUT'] != "undefined" ) 
      this.form.controls['VALUE_INPUT'].setErrors({invalid: true}); 
 // Code goes here 
 

 if ( this.FORM_TRIGGER_FAILURE == true) 
 return; 
 
 if (typeof this.form.controls['VALUE_INPUT'] != "undefined" ) 
     this.form.get('VALUE_INPUT').updateValueAndValidity();
 this.form.updateValueAndValidity(); 
 }

 async ON_CLICK_VALUE_INPUT(event){

}

async WHEN_VALIDATE_ITEM_PERCENTAGE_INPUT(value) {

 this.FORM_TRIGGER_FAILURE = false ; 
 if (typeof this.form.controls['PERCENTAGE_INPUT'] != "undefined" ) 
      this.form.controls['PERCENTAGE_INPUT'].setErrors({invalid: true}); 
 // Code goes here 
 

 if ( this.FORM_TRIGGER_FAILURE == true) 
 return; 
 
 if (typeof this.form.controls['PERCENTAGE_INPUT'] != "undefined" ) 
     this.form.get('PERCENTAGE_INPUT').updateValueAndValidity();
 this.form.updateValueAndValidity(); 
 }

 async ON_CLICK_PERCENTAGE_INPUT(event){

}

async WHEN_VALIDATE_ITEM_DIRECTION(value) {

 this.FORM_TRIGGER_FAILURE = false ; 
 if (typeof this.form.controls['DIRECTION'] != "undefined" ) 
      this.form.controls['DIRECTION'].setErrors({invalid: true}); 
 // Code goes here 
 

 if ( this.FORM_TRIGGER_FAILURE == true) 
 return; 
 
 if (typeof this.form.controls['DIRECTION'] != "undefined" ) 
     this.form.get('DIRECTION').updateValueAndValidity();
 this.form.updateValueAndValidity(); 
 }

 async ON_CLICK_DIRECTION(event){

}

async WHEN_VALIDATE_ITEM_OTHER_TAG_INPUT(value) {

 this.FORM_TRIGGER_FAILURE = false ; 
 if (typeof this.form.controls['OTHER_TAG_INPUT'] != "undefined" ) 
      this.form.controls['OTHER_TAG_INPUT'].setErrors({invalid: true}); 
 // Code goes here 
 

 if ( this.FORM_TRIGGER_FAILURE == true) 
 return; 
 
 if (typeof this.form.controls['OTHER_TAG_INPUT'] != "undefined" ) 
     this.form.get('OTHER_TAG_INPUT').updateValueAndValidity();
 this.form.updateValueAndValidity(); 
 }

 async ON_CLICK_OTHER_TAG_INPUT(event){

}

async WHEN_VALIDATE_ITEM_STRING_INPUT(value) {

 this.FORM_TRIGGER_FAILURE = false ; 
 if (typeof this.form.controls['STRING_INPUT'] != "undefined" ) 
      this.form.controls['STRING_INPUT'].setErrors({invalid: true}); 
 // Code goes here 
 

 if ( this.FORM_TRIGGER_FAILURE == true) 
 return; 
 
 if (typeof this.form.controls['STRING_INPUT'] != "undefined" ) 
     this.form.get('STRING_INPUT').updateValueAndValidity();
 this.form.updateValueAndValidity(); 
 }

 async ON_CLICK_STRING_INPUT(event){

}

async WHEN_VALIDATE_ITEM_POSITION_INDEX(value) {

 this.FORM_TRIGGER_FAILURE = false ; 
 if (typeof this.form.controls['POSITION_INDEX'] != "undefined" ) 
      this.form.controls['POSITION_INDEX'].setErrors({invalid: true}); 
 // Code goes here 
 

 if ( this.FORM_TRIGGER_FAILURE == true) 
 return; 
 
 if (typeof this.form.controls['POSITION_INDEX'] != "undefined" ) 
     this.form.get('POSITION_INDEX').updateValueAndValidity();
 this.form.updateValueAndValidity(); 
 }

 async ON_CLICK_POSITION_INDEX(event){

}

async WHEN_VALIDATE_ITEM_LANGUAGE_ID(value) {

 this.FORM_TRIGGER_FAILURE = false ; 
 if (typeof this.form.controls['LANGUAGE_ID'] != "undefined" ) 
      this.form.controls['LANGUAGE_ID'].setErrors({invalid: true}); 
 // Code goes here 
 

 if ( this.FORM_TRIGGER_FAILURE == true) 
 return; 
 
 if (typeof this.form.controls['LANGUAGE_ID'] != "undefined" ) 
     this.form.get('LANGUAGE_ID').updateValueAndValidity();
 this.form.updateValueAndValidity(); 
 }

 async ON_CLICK_LANGUAGE_ID(event){

}

async WHEN_VALIDATE_ITEM_SIMPLE_UTILITY_USER(value) {

 this.FORM_TRIGGER_FAILURE = false ; 
 if (typeof this.form.controls['SIMPLE_UTILITY_USER'] != "undefined" ) 
      this.form.controls['SIMPLE_UTILITY_USER'].setErrors({invalid: true}); 
 // Code goes here 
 

 if ( this.FORM_TRIGGER_FAILURE == true) 
 return; 
 
 if (typeof this.form.controls['SIMPLE_UTILITY_USER'] != "undefined" ) 
     this.form.get('SIMPLE_UTILITY_USER').updateValueAndValidity();
 this.form.updateValueAndValidity(); 
 }

 async ON_CLICK_SIMPLE_UTILITY_USER(event){

}

async WHEN_VALIDATE_ITEM_SIMPLE_UTILITY_PASSWORD(value) {

 this.FORM_TRIGGER_FAILURE = false ; 
 if (typeof this.form.controls['SIMPLE_UTILITY_PASSWORD'] != "undefined" ) 
      this.form.controls['SIMPLE_UTILITY_PASSWORD'].setErrors({invalid: true}); 
 // Code goes here 
 

 if ( this.FORM_TRIGGER_FAILURE == true) 
 return; 
 
 if (typeof this.form.controls['SIMPLE_UTILITY_PASSWORD'] != "undefined" ) 
     this.form.get('SIMPLE_UTILITY_PASSWORD').updateValueAndValidity();
 this.form.updateValueAndValidity(); 
 }

 async ON_CLICK_SIMPLE_UTILITY_PASSWORD(event){

}

async WHEN_VALIDATE_ITEM_SIMPLE_UTILITY_SYMBOL(value) {

 this.FORM_TRIGGER_FAILURE = false ; 
 if (typeof this.form.controls['SIMPLE_UTILITY_SYMBOL'] != "undefined" ) 
      this.form.controls['SIMPLE_UTILITY_SYMBOL'].setErrors({invalid: true}); 
 // Code goes here 
 

 if ( this.FORM_TRIGGER_FAILURE == true) 
 return; 
 
 if (typeof this.form.controls['SIMPLE_UTILITY_SYMBOL'] != "undefined" ) 
     this.form.get('SIMPLE_UTILITY_SYMBOL').updateValueAndValidity();
 this.form.updateValueAndValidity(); 
 }

 async ON_CLICK_SIMPLE_UTILITY_SYMBOL(event){

}

async WHEN_VALIDATE_ITEM_SIMPLE_UTILITY_REMARK_TEXT(value) {

 this.FORM_TRIGGER_FAILURE = false ; 
 if (typeof this.form.controls['SIMPLE_UTILITY_REMARK_TEXT'] != "undefined" ) 
      this.form.controls['SIMPLE_UTILITY_REMARK_TEXT'].setErrors({invalid: true}); 
 // Code goes here 
 

 if ( this.FORM_TRIGGER_FAILURE == true) 
 return; 
 
 if (typeof this.form.controls['SIMPLE_UTILITY_REMARK_TEXT'] != "undefined" ) 
     this.form.get('SIMPLE_UTILITY_REMARK_TEXT').updateValueAndValidity();
 this.form.updateValueAndValidity(); 
 }

 async ON_CLICK_SIMPLE_UTILITY_REMARK_TEXT(event){

}

async WHEN_VALIDATE_ITEM_SENDKEYS_KEYSTRING(value) {

 this.FORM_TRIGGER_FAILURE = false ; 
 if (typeof this.form.controls['SENDKEYS_KEYSTRING'] != "undefined" ) 
      this.form.controls['SENDKEYS_KEYSTRING'].setErrors({invalid: true}); 
 // Code goes here 
 

 if ( this.FORM_TRIGGER_FAILURE == true) 
 return; 
 
 if (typeof this.form.controls['SENDKEYS_KEYSTRING'] != "undefined" ) 
     this.form.get('SENDKEYS_KEYSTRING').updateValueAndValidity();
 this.form.updateValueAndValidity(); 
 }

 async ON_CLICK_SENDKEYS_KEYSTRING(event){

}

async WHEN_VALIDATE_ITEM_START_RECORDING_KEYS(value) {

 this.FORM_TRIGGER_FAILURE = false ; 
 if (typeof this.form.controls['START_RECORDING_KEYS'] != "undefined" ) 
      this.form.controls['START_RECORDING_KEYS'].setErrors({invalid: true}); 
 // Code goes here 
 

 if ( this.FORM_TRIGGER_FAILURE == true) 
 return; 
 
 if (typeof this.form.controls['START_RECORDING_KEYS'] != "undefined" ) 
     this.form.get('START_RECORDING_KEYS').updateValueAndValidity();
 this.form.updateValueAndValidity(); 
 }

 async ON_CLICK_START_RECORDING_KEYS(event){

}

async WHEN_VALIDATE_ITEM_STOP_RECORDING_KEYS(value) {

 this.FORM_TRIGGER_FAILURE = false ; 
 if (typeof this.form.controls['STOP_RECORDING_KEYS'] != "undefined" ) 
      this.form.controls['STOP_RECORDING_KEYS'].setErrors({invalid: true}); 
 // Code goes here 
 

 if ( this.FORM_TRIGGER_FAILURE == true) 
 return; 
 
 if (typeof this.form.controls['STOP_RECORDING_KEYS'] != "undefined" ) 
     this.form.get('STOP_RECORDING_KEYS').updateValueAndValidity();
 this.form.updateValueAndValidity(); 
 }

 async ON_CLICK_STOP_RECORDING_KEYS(event){

}

async WHEN_VALIDATE_ITEM_CLEAR_KEYS(value) {

 this.FORM_TRIGGER_FAILURE = false ; 
 if (typeof this.form.controls['CLEAR_KEYS'] != "undefined" ) 
      this.form.controls['CLEAR_KEYS'].setErrors({invalid: true}); 
 // Code goes here 
 

 if ( this.FORM_TRIGGER_FAILURE == true) 
 return; 
 
 if (typeof this.form.controls['CLEAR_KEYS'] != "undefined" ) 
     this.form.get('CLEAR_KEYS').updateValueAndValidity();
 this.form.updateValueAndValidity(); 
 }

 async ON_CLICK_CLEAR_KEYS(event){

}

async WHEN_VALIDATE_ITEM_KEY_MODE(value) {

 this.FORM_TRIGGER_FAILURE = false ; 
 if (typeof this.form.controls['KEY_MODE'] != "undefined" ) 
      this.form.controls['KEY_MODE'].setErrors({invalid: true}); 
 // Code goes here 
 

 if ( this.FORM_TRIGGER_FAILURE == true) 
 return; 
 
 if (typeof this.form.controls['KEY_MODE'] != "undefined" ) 
     this.form.get('KEY_MODE').updateValueAndValidity();
 this.form.updateValueAndValidity(); 
 }

 async ON_CLICK_KEY_MODE(event){

}

async WHEN_VALIDATE_ITEM_KEY_FILE(value) {

 this.FORM_TRIGGER_FAILURE = false ; 
 if (typeof this.form.controls['KEY_FILE'] != "undefined" ) 
      this.form.controls['KEY_FILE'].setErrors({invalid: true}); 
 // Code goes here 
 

 if ( this.FORM_TRIGGER_FAILURE == true) 
 return; 
 
 if (typeof this.form.controls['KEY_FILE'] != "undefined" ) 
     this.form.get('KEY_FILE').updateValueAndValidity();
 this.form.updateValueAndValidity(); 
 }

 async ON_CLICK_KEY_FILE(event){

}

async WHEN_VALIDATE_ITEM_TIME_SECONDS(value) {

 this.FORM_TRIGGER_FAILURE = false ; 
 if (typeof this.form.controls['TIME_SECONDS'] != "undefined" ) 
      this.form.controls['TIME_SECONDS'].setErrors({invalid: true}); 
 // Code goes here 
 

 if ( this.FORM_TRIGGER_FAILURE == true) 
 return; 
 
 if (typeof this.form.controls['TIME_SECONDS'] != "undefined" ) 
     this.form.get('TIME_SECONDS').updateValueAndValidity();
 this.form.updateValueAndValidity(); 
 }

 async ON_CLICK_TIME_SECONDS(event){

}

async WHEN_VALIDATE_ITEM_DISPLAY_CLIENT_CLOSE_MODE(value) {

 this.FORM_TRIGGER_FAILURE = false ; 
 if (typeof this.form.controls['DISPLAY_CLIENT_CLOSE_MODE'] != "undefined" ) 
      this.form.controls['DISPLAY_CLIENT_CLOSE_MODE'].setErrors({invalid: true}); 
 // Code goes here 
 

 if ( this.FORM_TRIGGER_FAILURE == true) 
 return; 
 
 if (typeof this.form.controls['DISPLAY_CLIENT_CLOSE_MODE'] != "undefined" ) 
     this.form.get('DISPLAY_CLIENT_CLOSE_MODE').updateValueAndValidity();
 this.form.updateValueAndValidity(); 
 }

 async ON_CLICK_DISPLAY_CLIENT_CLOSE_MODE(event){

}

async WHEN_VALIDATE_ITEM_FILE_NAME(value) {

 this.FORM_TRIGGER_FAILURE = false ; 
 if (typeof this.form.controls['FILE_NAME'] != "undefined" ) 
      this.form.controls['FILE_NAME'].setErrors({invalid: true}); 
 // Code goes here 
 

 if ( this.FORM_TRIGGER_FAILURE == true) 
 return; 
 
 if (typeof this.form.controls['FILE_NAME'] != "undefined" ) 
     this.form.get('FILE_NAME').updateValueAndValidity();
 this.form.updateValueAndValidity(); 
 }

 async ON_CLICK_FILE_NAME(event){

}

async WHEN_VALIDATE_ITEM_SIMPLE_UTILITY_BROWSE(value) {

 this.FORM_TRIGGER_FAILURE = false ; 
 if (typeof this.form.controls['SIMPLE_UTILITY_BROWSE'] != "undefined" ) 
      this.form.controls['SIMPLE_UTILITY_BROWSE'].setErrors({invalid: true}); 
 // Code goes here 
 

 if ( this.FORM_TRIGGER_FAILURE == true) 
 return; 
 
 if (typeof this.form.controls['SIMPLE_UTILITY_BROWSE'] != "undefined" ) 
     this.form.get('SIMPLE_UTILITY_BROWSE').updateValueAndValidity();
 this.form.updateValueAndValidity(); 
 }

 async ON_CLICK_SIMPLE_UTILITY_BROWSE(event){

}

async WHEN_VALIDATE_ITEM_TITLE_TEXT(value) {

 this.FORM_TRIGGER_FAILURE = false ; 
 if (typeof this.form.controls['TITLE_TEXT'] != "undefined" ) 
      this.form.controls['TITLE_TEXT'].setErrors({invalid: true}); 
 // Code goes here 
 

 if ( this.FORM_TRIGGER_FAILURE == true) 
 return; 
 
 if (typeof this.form.controls['TITLE_TEXT'] != "undefined" ) 
     this.form.get('TITLE_TEXT').updateValueAndValidity();
 this.form.updateValueAndValidity(); 
 }

 async ON_CLICK_TITLE_TEXT(event){

}

async WHEN_VALIDATE_ITEM_WRITE_RECIPE_NAME_TO_STRING_TAG(value) {

 this.FORM_TRIGGER_FAILURE = false ; 
 if (typeof this.form.controls['WRITE_RECIPE_NAME_TO_STRING_TAG'] != "undefined" ) 
      this.form.controls['WRITE_RECIPE_NAME_TO_STRING_TAG'].setErrors({invalid: true}); 
 // Code goes here 
 

 if ( this.FORM_TRIGGER_FAILURE == true) 
 return; 
 
 if (typeof this.form.controls['WRITE_RECIPE_NAME_TO_STRING_TAG'] != "undefined" ) 
     this.form.get('WRITE_RECIPE_NAME_TO_STRING_TAG').updateValueAndValidity();
 this.form.updateValueAndValidity(); 
 }

 async ON_CLICK_WRITE_RECIPE_NAME_TO_STRING_TAG(event){

}

async WHEN_VALIDATE_ITEM_RECIPE_NAME_TAG(value) {

 this.FORM_TRIGGER_FAILURE = false ; 
 if (typeof this.form.controls['RECIPE_NAME_TAG'] != "undefined" ) 
      this.form.controls['RECIPE_NAME_TAG'].setErrors({invalid: true}); 
 // Code goes here 
 

 if ( this.FORM_TRIGGER_FAILURE == true) 
 return; 
 
 if (typeof this.form.controls['RECIPE_NAME_TAG'] != "undefined" ) 
     this.form.get('RECIPE_NAME_TAG').updateValueAndValidity();
 this.form.updateValueAndValidity(); 
 }

 async ON_CLICK_RECIPE_NAME_TAG(event){

}

async WHEN_VALIDATE_ITEM_EXPRESSION_EDITOR(value) {

 this.FORM_TRIGGER_FAILURE = false ; 
 if (typeof this.form.controls['EXPRESSION_EDITOR'] != "undefined" ) 
      this.form.controls['EXPRESSION_EDITOR'].setErrors({invalid: true}); 
 // Code goes here 
 

 if ( this.FORM_TRIGGER_FAILURE == true) 
 return; 
 
 if (typeof this.form.controls['EXPRESSION_EDITOR'] != "undefined" ) 
     this.form.get('EXPRESSION_EDITOR').updateValueAndValidity();
 this.form.updateValueAndValidity(); 
 }

 async ON_CLICK_EXPRESSION_EDITOR(event){

}

async WHEN_VALIDATE_ITEM_THEN_ACTION(value) {

 this.FORM_TRIGGER_FAILURE = false ; 
 if (typeof this.form.controls['THEN_ACTION'] != "undefined" ) 
      this.form.controls['THEN_ACTION'].setErrors({invalid: true}); 
 // Code goes here 
 

 if ( this.FORM_TRIGGER_FAILURE == true) 
 return; 
 
 if (typeof this.form.controls['THEN_ACTION'] != "undefined" ) 
     this.form.get('THEN_ACTION').updateValueAndValidity();
 this.form.updateValueAndValidity(); 
 }

 async ON_CLICK_THEN_ACTION(event){

}

async WHEN_VALIDATE_ITEM_THEN_ACTION_BUTTON(value) {

 this.FORM_TRIGGER_FAILURE = false ; 
 if (typeof this.form.controls['THEN_ACTION_BUTTON'] != "undefined" ) 
      this.form.controls['THEN_ACTION_BUTTON'].setErrors({invalid: true}); 
 // Code goes here 
 

 if ( this.FORM_TRIGGER_FAILURE == true) 
 return; 
 
 if (typeof this.form.controls['THEN_ACTION_BUTTON'] != "undefined" ) 
     this.form.get('THEN_ACTION_BUTTON').updateValueAndValidity();
 this.form.updateValueAndValidity(); 
 }

 async ON_CLICK_THEN_ACTION_BUTTON(event){

}

async WHEN_VALIDATE_ITEM_ELSE_ACTION(value) {

 this.FORM_TRIGGER_FAILURE = false ; 
 if (typeof this.form.controls['ELSE_ACTION'] != "undefined" ) 
      this.form.controls['ELSE_ACTION'].setErrors({invalid: true}); 
 // Code goes here 
 

 if ( this.FORM_TRIGGER_FAILURE == true) 
 return; 
 
 if (typeof this.form.controls['ELSE_ACTION'] != "undefined" ) 
     this.form.get('ELSE_ACTION').updateValueAndValidity();
 this.form.updateValueAndValidity(); 
 }

 async ON_CLICK_ELSE_ACTION(event){

}

async WHEN_VALIDATE_ITEM_ELSE_ACTION_BUTTON(value) {

 this.FORM_TRIGGER_FAILURE = false ; 
 if (typeof this.form.controls['ELSE_ACTION_BUTTON'] != "undefined" ) 
      this.form.controls['ELSE_ACTION_BUTTON'].setErrors({invalid: true}); 
 // Code goes here 
 

 if ( this.FORM_TRIGGER_FAILURE == true) 
 return; 
 
 if (typeof this.form.controls['ELSE_ACTION_BUTTON'] != "undefined" ) 
     this.form.get('ELSE_ACTION_BUTTON').updateValueAndValidity();
 this.form.updateValueAndValidity(); 
 }

 async ON_CLICK_ELSE_ACTION_BUTTON(event){

}

async WHEN_VALIDATE_ITEM_INVOKE_DISPLAY_FILE(value) {

 this.FORM_TRIGGER_FAILURE = false ; 
 if (typeof this.form.controls['INVOKE_DISPLAY_FILE'] != "undefined" ) 
      this.form.controls['INVOKE_DISPLAY_FILE'].setErrors({invalid: true}); 
 // Code goes here 
 

 if ( this.FORM_TRIGGER_FAILURE == true) 
 return; 
 
 if (typeof this.form.controls['INVOKE_DISPLAY_FILE'] != "undefined" ) 
     this.form.get('INVOKE_DISPLAY_FILE').updateValueAndValidity();
 this.form.updateValueAndValidity(); 
 }

 async ON_CLICK_INVOKE_DISPLAY_FILE(event){

}

async WHEN_VALIDATE_ITEM_INVOKE_OBJECT(value) {

 this.FORM_TRIGGER_FAILURE = false ; 
 if (typeof this.form.controls['INVOKE_OBJECT'] != "undefined" ) 
      this.form.controls['INVOKE_OBJECT'].setErrors({invalid: true}); 
 // Code goes here 
 

 if ( this.FORM_TRIGGER_FAILURE == true) 
 return; 
 
 if (typeof this.form.controls['INVOKE_OBJECT'] != "undefined" ) 
     this.form.get('INVOKE_OBJECT').updateValueAndValidity();
 this.form.updateValueAndValidity(); 
 }

 async ON_CLICK_INVOKE_OBJECT(event){

}

async WHEN_VALIDATE_ITEM_PROPERTY_OR_METHOD(value) {

 this.FORM_TRIGGER_FAILURE = false ; 
 if (typeof this.form.controls['PROPERTY_OR_METHOD'] != "undefined" ) 
      this.form.controls['PROPERTY_OR_METHOD'].setErrors({invalid: true}); 
 // Code goes here 
 

 if ( this.FORM_TRIGGER_FAILURE == true) 
 return; 
 
 if (typeof this.form.controls['PROPERTY_OR_METHOD'] != "undefined" ) 
     this.form.get('PROPERTY_OR_METHOD').updateValueAndValidity();
 this.form.updateValueAndValidity(); 
 }

 async ON_CLICK_PROPERTY_OR_METHOD(event){

}

async WHEN_VALIDATE_ITEM_METHOD_PARAMETER(value) {

 this.FORM_TRIGGER_FAILURE = false ; 
 if (typeof this.form.controls['METHOD_PARAMETER'] != "undefined" ) 
      this.form.controls['METHOD_PARAMETER'].setErrors({invalid: true}); 
 // Code goes here 
 

 if ( this.FORM_TRIGGER_FAILURE == true) 
 return; 
 
 if (typeof this.form.controls['METHOD_PARAMETER'] != "undefined" ) 
     this.form.get('METHOD_PARAMETER').updateValueAndValidity();
 this.form.updateValueAndValidity(); 
 }

 async ON_CLICK_METHOD_PARAMETER(event){

}

async WHEN_VALIDATE_ITEM_INVOKE_ADD_TAG(value) {

 this.FORM_TRIGGER_FAILURE = false ; 
 if (typeof this.form.controls['INVOKE_ADD_TAG'] != "undefined" ) 
      this.form.controls['INVOKE_ADD_TAG'].setErrors({invalid: true}); 
 // Code goes here 
 

 if ( this.FORM_TRIGGER_FAILURE == true) 
 return; 
 
 if (typeof this.form.controls['INVOKE_ADD_TAG'] != "undefined" ) 
     this.form.get('INVOKE_ADD_TAG').updateValueAndValidity();
 this.form.updateValueAndValidity(); 
 }

 async ON_CLICK_INVOKE_ADD_TAG(event){

}

async WHEN_VALIDATE_ITEM_INVOKE_MODE(value) {

 this.FORM_TRIGGER_FAILURE = false ; 
 if (typeof this.form.controls['INVOKE_MODE'] != "undefined" ) 
      this.form.controls['INVOKE_MODE'].setErrors({invalid: true}); 
 // Code goes here 
 

 if ( this.FORM_TRIGGER_FAILURE == true) 
 return; 
 
 if (typeof this.form.controls['INVOKE_MODE'] != "undefined" ) 
     this.form.get('INVOKE_MODE').updateValueAndValidity();
 this.form.updateValueAndValidity(); 
 }

 async ON_CLICK_INVOKE_MODE(event){

}

async WHEN_VALIDATE_ITEM_SET_TAG_TO_VALUE_OF_OBJECT(value) {

 this.FORM_TRIGGER_FAILURE = false ; 
 if (typeof this.form.controls['SET_TAG_TO_VALUE_OF_OBJECT'] != "undefined" ) 
      this.form.controls['SET_TAG_TO_VALUE_OF_OBJECT'].setErrors({invalid: true}); 
 // Code goes here 
 

 if ( this.FORM_TRIGGER_FAILURE == true) 
 return; 
 
 if (typeof this.form.controls['SET_TAG_TO_VALUE_OF_OBJECT'] != "undefined" ) 
     this.form.get('SET_TAG_TO_VALUE_OF_OBJECT').updateValueAndValidity();
 this.form.updateValueAndValidity(); 
 }

 async ON_CLICK_SET_TAG_TO_VALUE_OF_OBJECT(event){

}

async WHEN_VALIDATE_ITEM_SET_OBJECT_PROPERTY(value) {

 this.FORM_TRIGGER_FAILURE = false ; 
 if (typeof this.form.controls['SET_OBJECT_PROPERTY'] != "undefined" ) 
      this.form.controls['SET_OBJECT_PROPERTY'].setErrors({invalid: true}); 
 // Code goes here 
 

 if ( this.FORM_TRIGGER_FAILURE == true) 
 return; 
 
 if (typeof this.form.controls['SET_OBJECT_PROPERTY'] != "undefined" ) 
     this.form.get('SET_OBJECT_PROPERTY').updateValueAndValidity();
 this.form.updateValueAndValidity(); 
 }

 async ON_CLICK_SET_OBJECT_PROPERTY(event){

}

async WHEN_VALIDATE_ITEM_SET_TAG_TO_VALUE_FROM(value) {

 this.FORM_TRIGGER_FAILURE = false ; 
 if (typeof this.form.controls['SET_TAG_TO_VALUE_FROM'] != "undefined" ) 
      this.form.controls['SET_TAG_TO_VALUE_FROM'].setErrors({invalid: true}); 
 // Code goes here 
 

 if ( this.FORM_TRIGGER_FAILURE == true) 
 return; 
 
 if (typeof this.form.controls['SET_TAG_TO_VALUE_FROM'] != "undefined" ) 
     this.form.get('SET_TAG_TO_VALUE_FROM').updateValueAndValidity();
 this.form.updateValueAndValidity(); 
 }

 async ON_CLICK_SET_TAG_TO_VALUE_FROM(event){

}

async WHEN_VALIDATE_ITEM_RECIPE_FILE_MODE(value) {

 this.FORM_TRIGGER_FAILURE = false ; 
 if (typeof this.form.controls['RECIPE_FILE_MODE'] != "undefined" ) 
      this.form.controls['RECIPE_FILE_MODE'].setErrors({invalid: true}); 
 // Code goes here 
 

 if ( this.FORM_TRIGGER_FAILURE == true) 
 return; 
 
 if (typeof this.form.controls['RECIPE_FILE_MODE'] != "undefined" ) 
     this.form.get('RECIPE_FILE_MODE').updateValueAndValidity();
 this.form.updateValueAndValidity(); 
 }

 async ON_CLICK_RECIPE_FILE_MODE(event){

}

async WHEN_VALIDATE_ITEM_RECIPE_FILE(value) {

 this.FORM_TRIGGER_FAILURE = false ; 
 if (typeof this.form.controls['RECIPE_FILE'] != "undefined" ) 
      this.form.controls['RECIPE_FILE'].setErrors({invalid: true}); 
 // Code goes here 
 

 if ( this.FORM_TRIGGER_FAILURE == true) 
 return; 
 
 if (typeof this.form.controls['RECIPE_FILE'] != "undefined" ) 
     this.form.get('RECIPE_FILE').updateValueAndValidity();
 this.form.updateValueAndValidity(); 
 }

 async ON_CLICK_RECIPE_FILE(event){

}

async WHEN_VALIDATE_ITEM_VARIABLE_RECIPE_INPUT(value) {

 this.FORM_TRIGGER_FAILURE = false ; 
 if (typeof this.form.controls['VARIABLE_RECIPE_INPUT'] != "undefined" ) 
      this.form.controls['VARIABLE_RECIPE_INPUT'].setErrors({invalid: true}); 
 // Code goes here 
 

 if ( this.FORM_TRIGGER_FAILURE == true) 
 return; 
 
 if (typeof this.form.controls['VARIABLE_RECIPE_INPUT'] != "undefined" ) 
     this.form.get('VARIABLE_RECIPE_INPUT').updateValueAndValidity();
 this.form.updateValueAndValidity(); 
 }

 async ON_CLICK_VARIABLE_RECIPE_INPUT(event){

}

async WHEN_VALIDATE_ITEM_RECIPE_FILTER(value) {

 this.FORM_TRIGGER_FAILURE = false ; 
 if (typeof this.form.controls['RECIPE_FILTER'] != "undefined" ) 
      this.form.controls['RECIPE_FILTER'].setErrors({invalid: true}); 
 // Code goes here 
 

 if ( this.FORM_TRIGGER_FAILURE == true) 
 return; 
 
 if (typeof this.form.controls['RECIPE_FILTER'] != "undefined" ) 
     this.form.get('RECIPE_FILTER').updateValueAndValidity();
 this.form.updateValueAndValidity(); 
 }

 async ON_CLICK_RECIPE_FILTER(event){

}

async WHEN_VALIDATE_ITEM_FILTER_TEXT(value) {

 this.FORM_TRIGGER_FAILURE = false ; 
 if (typeof this.form.controls['FILTER_TEXT'] != "undefined" ) 
      this.form.controls['FILTER_TEXT'].setErrors({invalid: true}); 
 // Code goes here 
 

 if ( this.FORM_TRIGGER_FAILURE == true) 
 return; 
 
 if (typeof this.form.controls['FILTER_TEXT'] != "undefined" ) 
     this.form.get('FILTER_TEXT').updateValueAndValidity();
 this.form.updateValueAndValidity(); 
 }

 async ON_CLICK_FILTER_TEXT(event){

}

async WHEN_VALIDATE_ITEM_WRITE_RECIPE_NAME_AFTER_DOWNLOAD(value) {

 this.FORM_TRIGGER_FAILURE = false ; 
 if (typeof this.form.controls['WRITE_RECIPE_NAME_AFTER_DOWNLOAD'] != "undefined" ) 
      this.form.controls['WRITE_RECIPE_NAME_AFTER_DOWNLOAD'].setErrors({invalid: true}); 
 // Code goes here 
 

 if ( this.FORM_TRIGGER_FAILURE == true) 
 return; 
 
 if (typeof this.form.controls['WRITE_RECIPE_NAME_AFTER_DOWNLOAD'] != "undefined" ) 
     this.form.get('WRITE_RECIPE_NAME_AFTER_DOWNLOAD').updateValueAndValidity();
 this.form.updateValueAndValidity(); 
 }

 async ON_CLICK_WRITE_RECIPE_NAME_AFTER_DOWNLOAD(event){

}

async WHEN_VALIDATE_ITEM_TAG_AFTER_DOWNLOAD(value) {

 this.FORM_TRIGGER_FAILURE = false ; 
 if (typeof this.form.controls['TAG_AFTER_DOWNLOAD'] != "undefined" ) 
      this.form.controls['TAG_AFTER_DOWNLOAD'].setErrors({invalid: true}); 
 // Code goes here 
 

 if ( this.FORM_TRIGGER_FAILURE == true) 
 return; 
 
 if (typeof this.form.controls['TAG_AFTER_DOWNLOAD'] != "undefined" ) 
     this.form.get('TAG_AFTER_DOWNLOAD').updateValueAndValidity();
 this.form.updateValueAndValidity(); 
 }

 async ON_CLICK_TAG_AFTER_DOWNLOAD(event){

}

async WHEN_VALIDATE_ITEM_STATUS_CODE(value) {

 this.FORM_TRIGGER_FAILURE = false ; 
 if (typeof this.form.controls['STATUS_CODE'] != "undefined" ) 
      this.form.controls['STATUS_CODE'].setErrors({invalid: true}); 
 // Code goes here 
 

 if ( this.FORM_TRIGGER_FAILURE == true) 
 return; 
 
 if (typeof this.form.controls['STATUS_CODE'] != "undefined" ) 
     this.form.get('STATUS_CODE').updateValueAndValidity();
 this.form.updateValueAndValidity(); 
 }

 async ON_CLICK_STATUS_CODE(event){

}

async WHEN_VALIDATE_ITEM_STATUS_TAG(value) {

 this.FORM_TRIGGER_FAILURE = false ; 
 if (typeof this.form.controls['STATUS_TAG'] != "undefined" ) 
      this.form.controls['STATUS_TAG'].setErrors({invalid: true}); 
 // Code goes here 
 

 if ( this.FORM_TRIGGER_FAILURE == true) 
 return; 
 
 if (typeof this.form.controls['STATUS_TAG'] != "undefined" ) 
     this.form.get('STATUS_TAG').updateValueAndValidity();
 this.form.updateValueAndValidity(); 
 }

 async ON_CLICK_STATUS_TAG(event){

}

async WHEN_VALIDATE_ITEM_CURRENT_RECIPE_NAME(value) {

 this.FORM_TRIGGER_FAILURE = false ; 
 if (typeof this.form.controls['CURRENT_RECIPE_NAME'] != "undefined" ) 
      this.form.controls['CURRENT_RECIPE_NAME'].setErrors({invalid: true}); 
 // Code goes here 
 

 if ( this.FORM_TRIGGER_FAILURE == true) 
 return; 
 
 if (typeof this.form.controls['CURRENT_RECIPE_NAME'] != "undefined" ) 
     this.form.get('CURRENT_RECIPE_NAME').updateValueAndValidity();
 this.form.updateValueAndValidity(); 
 }

 async ON_CLICK_CURRENT_RECIPE_NAME(event){

}

async WHEN_VALIDATE_ITEM_RECIPE_NAME_TAG_RPC(value) {

 this.FORM_TRIGGER_FAILURE = false ; 
 if (typeof this.form.controls['RECIPE_NAME_TAG_RPC'] != "undefined" ) 
      this.form.controls['RECIPE_NAME_TAG_RPC'].setErrors({invalid: true}); 
 // Code goes here 
 

 if ( this.FORM_TRIGGER_FAILURE == true) 
 return; 
 
 if (typeof this.form.controls['RECIPE_NAME_TAG_RPC'] != "undefined" ) 
     this.form.get('RECIPE_NAME_TAG_RPC').updateValueAndValidity();
 this.form.updateValueAndValidity(); 
 }

 async ON_CLICK_RECIPE_NAME_TAG_RPC(event){

}

async WHEN_VALIDATE_ITEM_COMMAND_WIZRD_ID(value) {

 this.FORM_TRIGGER_FAILURE = false ; 
 if (typeof this.form.controls['COMMAND_WIZRD_ID'] != "undefined" ) 
      this.form.controls['COMMAND_WIZRD_ID'].setErrors({invalid: true}); 
 // Code goes here 
 

 if ( this.FORM_TRIGGER_FAILURE == true) 
 return; 
 
 if (typeof this.form.controls['COMMAND_WIZRD_ID'] != "undefined" ) 
     this.form.get('COMMAND_WIZRD_ID').updateValueAndValidity();
 this.form.updateValueAndValidity(); 
 }

 async ON_CLICK_COMMAND_WIZRD_ID(event){

}

async WHEN_VALIDATE_ITEM_ALARM_SOURCE(value) {

 this.FORM_TRIGGER_FAILURE = false ; 
 if (typeof this.form.controls['ALARM_SOURCE'] != "undefined" ) 
      this.form.controls['ALARM_SOURCE'].setErrors({invalid: true}); 
 // Code goes here 
 

 if ( this.FORM_TRIGGER_FAILURE == true) 
 return; 
 
 if (typeof this.form.controls['ALARM_SOURCE'] != "undefined" ) 
     this.form.get('ALARM_SOURCE').updateValueAndValidity();
 this.form.updateValueAndValidity(); 
 }

 async ON_CLICK_ALARM_SOURCE(event){

}

async WHEN_VALIDATE_ITEM_DURATION(value) {

 this.FORM_TRIGGER_FAILURE = false ; 
 if (typeof this.form.controls['DURATION'] != "undefined" ) 
      this.form.controls['DURATION'].setErrors({invalid: true}); 
 // Code goes here 
 

 if ( this.FORM_TRIGGER_FAILURE == true) 
 return; 
 
 if (typeof this.form.controls['DURATION'] != "undefined" ) 
     this.form.get('DURATION').updateValueAndValidity();
 this.form.updateValueAndValidity(); 
 }

 async ON_CLICK_DURATION(event){

}

async WHEN_VALIDATE_ITEM_PROMPT_FOR_COMMENT(value) {

 this.FORM_TRIGGER_FAILURE = false ; 
 if (typeof this.form.controls['PROMPT_FOR_COMMENT'] != "undefined" ) 
      this.form.controls['PROMPT_FOR_COMMENT'].setErrors({invalid: true}); 
 // Code goes here 
 

 if ( this.FORM_TRIGGER_FAILURE == true) 
 return; 
 
 if (typeof this.form.controls['PROMPT_FOR_COMMENT'] != "undefined" ) 
     this.form.get('PROMPT_FOR_COMMENT').updateValueAndValidity();
 this.form.updateValueAndValidity(); 
 }

 async ON_CLICK_PROMPT_FOR_COMMENT(event){

}

async WHEN_VALIDATE_ITEM_AE_REMARK_ALARM_SERVER(value) {

 this.FORM_TRIGGER_FAILURE = false ; 
 if (typeof this.form.controls['AE_REMARK_ALARM_SERVER'] != "undefined" ) 
      this.form.controls['AE_REMARK_ALARM_SERVER'].setErrors({invalid: true}); 
 // Code goes here 
 

 if ( this.FORM_TRIGGER_FAILURE == true) 
 return; 
 
 if (typeof this.form.controls['AE_REMARK_ALARM_SERVER'] != "undefined" ) 
     this.form.get('AE_REMARK_ALARM_SERVER').updateValueAndValidity();
 this.form.updateValueAndValidity(); 
 }

 async ON_CLICK_AE_REMARK_ALARM_SERVER(event){

}

async WHEN_VALIDATE_ITEM_AE_REMARK_COMMENT(value) {

 this.FORM_TRIGGER_FAILURE = false ; 
 if (typeof this.form.controls['AE_REMARK_COMMENT'] != "undefined" ) 
      this.form.controls['AE_REMARK_COMMENT'].setErrors({invalid: true}); 
 // Code goes here 
 

 if ( this.FORM_TRIGGER_FAILURE == true) 
 return; 
 
 if (typeof this.form.controls['AE_REMARK_COMMENT'] != "undefined" ) 
     this.form.get('AE_REMARK_COMMENT').updateValueAndValidity();
 this.form.updateValueAndValidity(); 
 }

 async ON_CLICK_AE_REMARK_COMMENT(event){

}

async WHEN_VALIDATE_ITEM_BUT_TAG_MIN_VAL(value) {

 this.FORM_TRIGGER_FAILURE = false ; 
 if (typeof this.form.controls['BUT_TAG_MIN_VAL'] != "undefined" ) 
      this.form.controls['BUT_TAG_MIN_VAL'].setErrors({invalid: true}); 
 // Code goes here 
 

 if ( this.FORM_TRIGGER_FAILURE == true) 
 return; 
 
 if (typeof this.form.controls['BUT_TAG_MIN_VAL'] != "undefined" ) 
     this.form.get('BUT_TAG_MIN_VAL').updateValueAndValidity();
 this.form.updateValueAndValidity(); 
 }

 async ON_CLICK_BUT_TAG_MIN_VAL(event){

}

async WHEN_VALIDATE_ITEM_BUT_TAG_MAX_VAL(value) {

 this.FORM_TRIGGER_FAILURE = false ; 
 if (typeof this.form.controls['BUT_TAG_MAX_VAL'] != "undefined" ) 
      this.form.controls['BUT_TAG_MAX_VAL'].setErrors({invalid: true}); 
 // Code goes here 
 

 if ( this.FORM_TRIGGER_FAILURE == true) 
 return; 
 
 if (typeof this.form.controls['BUT_TAG_MAX_VAL'] != "undefined" ) 
     this.form.get('BUT_TAG_MAX_VAL').updateValueAndValidity();
 this.form.updateValueAndValidity(); 
 }

 async ON_CLICK_BUT_TAG_MAX_VAL(event){

}

async WHEN_VALIDATE_ITEM_BUT_TAG_UNITS(value) {

 this.FORM_TRIGGER_FAILURE = false ; 
 if (typeof this.form.controls['BUT_TAG_UNITS'] != "undefined" ) 
      this.form.controls['BUT_TAG_UNITS'].setErrors({invalid: true}); 
 // Code goes here 
 

 if ( this.FORM_TRIGGER_FAILURE == true) 
 return; 
 
 if (typeof this.form.controls['BUT_TAG_UNITS'] != "undefined" ) 
     this.form.get('BUT_TAG_UNITS').updateValueAndValidity();
 this.form.updateValueAndValidity(); 
 }

 async ON_CLICK_BUT_TAG_UNITS(event){

}

async WHEN_VALIDATE_ITEM_BUT_TAG_NAME(value) {

 this.FORM_TRIGGER_FAILURE = false ; 
 if (typeof this.form.controls['BUT_TAG_NAME'] != "undefined" ) 
      this.form.controls['BUT_TAG_NAME'].setErrors({invalid: true}); 
 // Code goes here 
 

 if ( this.FORM_TRIGGER_FAILURE == true) 
 return; 
 
 if (typeof this.form.controls['BUT_TAG_NAME'] != "undefined" ) 
     this.form.get('BUT_TAG_NAME').updateValueAndValidity();
 this.form.updateValueAndValidity(); 
 }

 async ON_CLICK_BUT_TAG_NAME(event){

}

async WHEN_VALIDATE_ITEM_BUT_TAG_DESC(value) {

 this.FORM_TRIGGER_FAILURE = false ; 
 if (typeof this.form.controls['BUT_TAG_DESC'] != "undefined" ) 
      this.form.controls['BUT_TAG_DESC'].setErrors({invalid: true}); 
 // Code goes here 
 

 if ( this.FORM_TRIGGER_FAILURE == true) 
 return; 
 
 if (typeof this.form.controls['BUT_TAG_DESC'] != "undefined" ) 
     this.form.get('BUT_TAG_DESC').updateValueAndValidity();
 this.form.updateValueAndValidity(); 
 }

 async ON_CLICK_BUT_TAG_DESC(event){

}

async WHEN_VALIDATE_ITEM_BUT_TAG_VALUE(value) {

 this.FORM_TRIGGER_FAILURE = false ; 
 if (typeof this.form.controls['BUT_TAG_VALUE'] != "undefined" ) 
      this.form.controls['BUT_TAG_VALUE'].setErrors({invalid: true}); 
 // Code goes here 
 

 if ( this.FORM_TRIGGER_FAILURE == true) 
 return; 
 
 if (typeof this.form.controls['BUT_TAG_VALUE'] != "undefined" ) 
     this.form.get('BUT_TAG_VALUE').updateValueAndValidity();
 this.form.updateValueAndValidity(); 
 }

 async ON_CLICK_BUT_TAG_VALUE(event){

}

async WHEN_VALIDATE_ITEM_TAG_SELECT(value) {

 this.FORM_TRIGGER_FAILURE = false ; 
 if (typeof this.form.controls['TAG_SELECT'] != "undefined" ) 
      this.form.controls['TAG_SELECT'].setErrors({invalid: true}); 
 // Code goes here 
 

 if ( this.FORM_TRIGGER_FAILURE == true) 
 return; 
 
 if (typeof this.form.controls['TAG_SELECT'] != "undefined" ) 
     this.form.get('TAG_SELECT').updateValueAndValidity();
 this.form.updateValueAndValidity(); 
 }

 async ON_CLICK_TAG_SELECT(event){

}

async WHEN_VALIDATE_ITEM_TAG_INPUT(value) {

 this.FORM_TRIGGER_FAILURE = false ; 
 if (typeof this.form.controls['TAG_INPUT'] != "undefined" ) 
      this.form.controls['TAG_INPUT'].setErrors({invalid: true}); 
 // Code goes here 
 

 if ( this.FORM_TRIGGER_FAILURE == true) 
 return; 
 
 if (typeof this.form.controls['TAG_INPUT'] != "undefined" ) 
     this.form.get('TAG_INPUT').updateValueAndValidity();
 this.form.updateValueAndValidity(); 
 }

 async ON_CLICK_TAG_INPUT(event){

}

async WHEN_VALIDATE_ITEM_PROMPT_FOR_COMMENT_2(value) {

 this.FORM_TRIGGER_FAILURE = false ; 
 if (typeof this.form.controls['PROMPT_FOR_COMMENT_2'] != "undefined" ) 
      this.form.controls['PROMPT_FOR_COMMENT_2'].setErrors({invalid: true}); 
 // Code goes here 
 

 if ( this.FORM_TRIGGER_FAILURE == true) 
 return; 
 
 if (typeof this.form.controls['PROMPT_FOR_COMMENT_2'] != "undefined" ) 
     this.form.get('PROMPT_FOR_COMMENT_2').updateValueAndValidity();
 this.form.updateValueAndValidity(); 
 }

 async ON_CLICK_PROMPT_FOR_COMMENT_2(event){

}

async WHEN_VALIDATE_ITEM_DATALOG_FILE(value) {

 this.FORM_TRIGGER_FAILURE = false ; 
 if (typeof this.form.controls['DATALOG_FILE'] != "undefined" ) 
      this.form.controls['DATALOG_FILE'].setErrors({invalid: true}); 
 // Code goes here 
 

 if ( this.FORM_TRIGGER_FAILURE == true) 
 return; 
 
 if (typeof this.form.controls['DATALOG_FILE'] != "undefined" ) 
     this.form.get('DATALOG_FILE').updateValueAndValidity();
 this.form.updateValueAndValidity(); 
 }

 async ON_CLICK_DATALOG_FILE(event){

}

async WHEN_VALIDATE_ITEM_FILE_IDENTIFIER(value) {

 this.FORM_TRIGGER_FAILURE = false ; 
 if (typeof this.form.controls['FILE_IDENTIFIER'] != "undefined" ) 
      this.form.controls['FILE_IDENTIFIER'].setErrors({invalid: true}); 
 // Code goes here 
 

 if ( this.FORM_TRIGGER_FAILURE == true) 
 return; 
 
 if (typeof this.form.controls['FILE_IDENTIFIER'] != "undefined" ) 
     this.form.get('FILE_IDENTIFIER').updateValueAndValidity();
 this.form.updateValueAndValidity(); 
 }

 async ON_CLICK_FILE_IDENTIFIER(event){

}

async WHEN_VALIDATE_ITEM_RATE(value) {

 this.FORM_TRIGGER_FAILURE = false ; 
 if (typeof this.form.controls['RATE'] != "undefined" ) 
      this.form.controls['RATE'].setErrors({invalid: true}); 
 // Code goes here 
 

 if ( this.FORM_TRIGGER_FAILURE == true) 
 return; 
 
 if (typeof this.form.controls['RATE'] != "undefined" ) 
     this.form.get('RATE').updateValueAndValidity();
 this.form.updateValueAndValidity(); 
 }

 async ON_CLICK_RATE(event){

}

async WHEN_VALIDATE_ITEM_DATALOG_UNITS(value) {

 this.FORM_TRIGGER_FAILURE = false ; 
 if (typeof this.form.controls['DATALOG_UNITS'] != "undefined" ) 
      this.form.controls['DATALOG_UNITS'].setErrors({invalid: true}); 
 // Code goes here 
 

 if ( this.FORM_TRIGGER_FAILURE == true) 
 return; 
 
 if (typeof this.form.controls['DATALOG_UNITS'] != "undefined" ) 
     this.form.get('DATALOG_UNITS').updateValueAndValidity();
 this.form.updateValueAndValidity(); 
 }

 async ON_CLICK_DATALOG_UNITS(event){

}

async WHEN_VALIDATE_ITEM_FILE_COMMAND(value) {

 this.FORM_TRIGGER_FAILURE = false ; 
 if (typeof this.form.controls['FILE_COMMAND'] != "undefined" ) 
      this.form.controls['FILE_COMMAND'].setErrors({invalid: true}); 
 // Code goes here 
 

 if ( this.FORM_TRIGGER_FAILURE == true) 
 return; 
 
 if (typeof this.form.controls['FILE_COMMAND'] != "undefined" ) 
     this.form.get('FILE_COMMAND').updateValueAndValidity();
 this.form.updateValueAndValidity(); 
 }

 async ON_CLICK_FILE_COMMAND(event){

}

async WHEN_VALIDATE_ITEM_PROGRAM(value) {

 this.FORM_TRIGGER_FAILURE = false ; 
 if (typeof this.form.controls['PROGRAM'] != "undefined" ) 
      this.form.controls['PROGRAM'].setErrors({invalid: true}); 
 // Code goes here 
 

 if ( this.FORM_TRIGGER_FAILURE == true) 
 return; 
 
 if (typeof this.form.controls['PROGRAM'] != "undefined" ) 
     this.form.get('PROGRAM').updateValueAndValidity();
 this.form.updateValueAndValidity(); 
 }

 async ON_CLICK_PROGRAM(event){

}

async WHEN_VALIDATE_ITEM_PROGRAM_BROWSE(value) {

 this.FORM_TRIGGER_FAILURE = false ; 
 if (typeof this.form.controls['PROGRAM_BROWSE'] != "undefined" ) 
      this.form.controls['PROGRAM_BROWSE'].setErrors({invalid: true}); 
 // Code goes here 
 

 if ( this.FORM_TRIGGER_FAILURE == true) 
 return; 
 
 if (typeof this.form.controls['PROGRAM_BROWSE'] != "undefined" ) 
     this.form.get('PROGRAM_BROWSE').updateValueAndValidity();
 this.form.updateValueAndValidity(); 
 }

 async ON_CLICK_PROGRAM_BROWSE(event){

}

async WHEN_VALIDATE_ITEM_WAVE_FILE(value) {

 this.FORM_TRIGGER_FAILURE = false ; 
 if (typeof this.form.controls['WAVE_FILE'] != "undefined" ) 
      this.form.controls['WAVE_FILE'].setErrors({invalid: true}); 
 // Code goes here 
 

 if ( this.FORM_TRIGGER_FAILURE == true) 
 return; 
 
 if (typeof this.form.controls['WAVE_FILE'] != "undefined" ) 
     this.form.get('WAVE_FILE').updateValueAndValidity();
 this.form.updateValueAndValidity(); 
 }

 async ON_CLICK_WAVE_FILE(event){

}

async WHEN_VALIDATE_ITEM_WAVE_BROWSE(value) {

 this.FORM_TRIGGER_FAILURE = false ; 
 if (typeof this.form.controls['WAVE_BROWSE'] != "undefined" ) 
      this.form.controls['WAVE_BROWSE'].setErrors({invalid: true}); 
 // Code goes here 
 

 if ( this.FORM_TRIGGER_FAILURE == true) 
 return; 
 
 if (typeof this.form.controls['WAVE_BROWSE'] != "undefined" ) 
     this.form.get('WAVE_BROWSE').updateValueAndValidity();
 this.form.updateValueAndValidity(); 
 }

 async ON_CLICK_WAVE_BROWSE(event){

}

async WHEN_VALIDATE_ITEM_DEFINE_SYMBOL(value) {

 this.FORM_TRIGGER_FAILURE = false ; 
 if (typeof this.form.controls['DEFINE_SYMBOL'] != "undefined" ) 
      this.form.controls['DEFINE_SYMBOL'].setErrors({invalid: true}); 
 // Code goes here 
 

 if ( this.FORM_TRIGGER_FAILURE == true) 
 return; 
 
 if (typeof this.form.controls['DEFINE_SYMBOL'] != "undefined" ) 
     this.form.get('DEFINE_SYMBOL').updateValueAndValidity();
 this.form.updateValueAndValidity(); 
 }

 async ON_CLICK_DEFINE_SYMBOL(event){

}

async WHEN_VALIDATE_ITEM_DEFINE_COMMAND(value) {

 this.FORM_TRIGGER_FAILURE = false ; 
 if (typeof this.form.controls['DEFINE_COMMAND'] != "undefined" ) 
      this.form.controls['DEFINE_COMMAND'].setErrors({invalid: true}); 
 // Code goes here 
 

 if ( this.FORM_TRIGGER_FAILURE == true) 
 return; 
 
 if (typeof this.form.controls['DEFINE_COMMAND'] != "undefined" ) 
     this.form.get('DEFINE_COMMAND').updateValueAndValidity();
 this.form.updateValueAndValidity(); 
 }

 async ON_CLICK_DEFINE_COMMAND(event){
await this.starServices.sleep(200);
this.starServices.sessionParams['NAVIGATE_DATA'] = this.form.value;
console.log ('NAVIGATE:NAVIGATE_DATA', this.starServices.sessionParams['NAVIGATE_DATA'] );
let routerLink =  'scd2_command_wizard_editor';
this.router.navigate(['/' + routerLink] , { skipLocationChange: true });

}

async WHEN_VALIDATE_ITEM_HELP_FILE(value) {

 this.FORM_TRIGGER_FAILURE = false ; 
 if (typeof this.form.controls['HELP_FILE'] != "undefined" ) 
      this.form.controls['HELP_FILE'].setErrors({invalid: true}); 
 // Code goes here 
 

 if ( this.FORM_TRIGGER_FAILURE == true) 
 return; 
 
 if (typeof this.form.controls['HELP_FILE'] != "undefined" ) 
     this.form.get('HELP_FILE').updateValueAndValidity();
 this.form.updateValueAndValidity(); 
 }

 async ON_CLICK_HELP_FILE(event){

}

async WHEN_VALIDATE_ITEM_HELP_BROWSE(value) {

 this.FORM_TRIGGER_FAILURE = false ; 
 if (typeof this.form.controls['HELP_BROWSE'] != "undefined" ) 
      this.form.controls['HELP_BROWSE'].setErrors({invalid: true}); 
 // Code goes here 
 

 if ( this.FORM_TRIGGER_FAILURE == true) 
 return; 
 
 if (typeof this.form.controls['HELP_BROWSE'] != "undefined" ) 
     this.form.get('HELP_BROWSE').updateValueAndValidity();
 this.form.updateValueAndValidity(); 
 }

 async ON_CLICK_HELP_BROWSE(event){

}

async WHEN_VALIDATE_ITEM_SEARCH_FOR(value) {

 this.FORM_TRIGGER_FAILURE = false ; 
 if (typeof this.form.controls['SEARCH_FOR'] != "undefined" ) 
      this.form.controls['SEARCH_FOR'].setErrors({invalid: true}); 
 // Code goes here 
 

 if ( this.FORM_TRIGGER_FAILURE == true) 
 return; 
 
 if (typeof this.form.controls['SEARCH_FOR'] != "undefined" ) 
     this.form.get('SEARCH_FOR').updateValueAndValidity();
 this.form.updateValueAndValidity(); 
 }

 async ON_CLICK_SEARCH_FOR(event){

}

async WHEN_VALIDATE_ITEM_PRINT_TO_PDF(value) {

 this.FORM_TRIGGER_FAILURE = false ; 
 if (typeof this.form.controls['PRINT_TO_PDF'] != "undefined" ) 
      this.form.controls['PRINT_TO_PDF'].setErrors({invalid: true}); 
 // Code goes here 
 

 if ( this.FORM_TRIGGER_FAILURE == true) 
 return; 
 
 if (typeof this.form.controls['PRINT_TO_PDF'] != "undefined" ) 
     this.form.get('PRINT_TO_PDF').updateValueAndValidity();
 this.form.updateValueAndValidity(); 
 }

 async ON_CLICK_PRINT_TO_PDF(event){

}

async WHEN_VALIDATE_ITEM_PDF_FILE_PATH(value) {

 this.FORM_TRIGGER_FAILURE = false ; 
 if (typeof this.form.controls['PDF_FILE_PATH'] != "undefined" ) 
      this.form.controls['PDF_FILE_PATH'].setErrors({invalid: true}); 
 // Code goes here 
 

 if ( this.FORM_TRIGGER_FAILURE == true) 
 return; 
 
 if (typeof this.form.controls['PDF_FILE_PATH'] != "undefined" ) 
     this.form.get('PDF_FILE_PATH').updateValueAndValidity();
 this.form.updateValueAndValidity(); 
 }

 async ON_CLICK_PDF_FILE_PATH(event){

}
 
 async onValueChange_PRINTDISPLAY_DISPLAY_FILE(value) { 
  this.FORM_TRIGGER_FAILURE = false;	
 await this.WHEN_VALIDATE_ITEM_PRINTDISPLAY_DISPLAY_FILE(value); if ( this.FORM_TRIGGER_FAILURE) return; 
 this.formValidationChangedOutput.emit(this.form.valid); 
  
  } 
 async onChange_PRINTDISPLAY_UPLOAD_DATA_ENTRY_FIELDS(event:any) { 
 var value = event.target.value; 
 if ((value == null) || (value == '')) 	
 	return;  
    this.FORM_TRIGGER_FAILURE = false;	
 await   this.WHEN_VALIDATE_ITEM_PRINTDISPLAY_UPLOAD_DATA_ENTRY_FIELDS(value); if ( this.FORM_TRIGGER_FAILURE) return; 
 this.formValidationChangedOutput.emit(this.form.valid); 
  
 } 
 async onChange_PRINTDISPLAY_WAIT_BEFORE_PRINT(event:any) { 
 var value = event.target.value; 
 if ((value == null) || (value == '')) 	
 	return;  
    this.FORM_TRIGGER_FAILURE = false;	
 await   this.WHEN_VALIDATE_ITEM_PRINTDISPLAY_WAIT_BEFORE_PRINT(value); if ( this.FORM_TRIGGER_FAILURE) return; 
 this.formValidationChangedOutput.emit(this.form.valid); 
  
 } 
 async onChange_WAIT_MS(event:any) { 
 var value = event.target.value; 
 if ((value == null) || (value == '')) 	
 	return;  
    this.FORM_TRIGGER_FAILURE = false;	
 await   this.WHEN_VALIDATE_ITEM_WAIT_MS(value); if ( this.FORM_TRIGGER_FAILURE) return; 
 this.formValidationChangedOutput.emit(this.form.valid); 
  
 } 
 async onChange_PRINTDISPLAY_PRINT_TO_PDF(event:any) { 
 var value = event.target.value; 
 if ((value == null) || (value == '')) 	
 	return;  
    this.FORM_TRIGGER_FAILURE = false;	
 await   this.WHEN_VALIDATE_ITEM_PRINTDISPLAY_PRINT_TO_PDF(value); if ( this.FORM_TRIGGER_FAILURE) return; 
 this.formValidationChangedOutput.emit(this.form.valid); 
  
 } 
 async onChange_PDF_FILE_PATH2(event:any) { 
 var value = event.target.value; 
 if ((value == null) || (value == '')) 	
 	return;  
    this.FORM_TRIGGER_FAILURE = false;	
 await   this.WHEN_VALIDATE_ITEM_PDF_FILE_PATH2(value); if ( this.FORM_TRIGGER_FAILURE) return; 
 this.formValidationChangedOutput.emit(this.form.valid); 
  
 } 
 async onValueChange_DISPLAY_BROWSE(value) { 
  this.FORM_TRIGGER_FAILURE = false;	
 await this.WHEN_VALIDATE_ITEM_DISPLAY_BROWSE(value); if ( this.FORM_TRIGGER_FAILURE) return; 
 this.formValidationChangedOutput.emit(this.form.valid); 
  
  } 
 async onChange_PRINTDISPLAY_PARAMETER_TAGS(event:any) { 
 var value = event.target.value; 
 if ((value == null) || (value == '')) 	
 	return;  
    this.FORM_TRIGGER_FAILURE = false;	
 await   this.WHEN_VALIDATE_ITEM_PRINTDISPLAY_PARAMETER_TAGS(value); if ( this.FORM_TRIGGER_FAILURE) return; 
 this.formValidationChangedOutput.emit(this.form.valid); 
  
 } 
 async onValueChange_PARAMETER_TAGS_LKP(value) { 
  this.FORM_TRIGGER_FAILURE = false;	
 await this.WHEN_VALIDATE_ITEM_PARAMETER_TAGS_LKP(value); if ( this.FORM_TRIGGER_FAILURE) return; 
 this.formValidationChangedOutput.emit(this.form.valid); 
  
  } 
 async onChange_PRINTDISPLAY_PARAMETER_FILE(event:any) { 
 var value = event.target.value; 
 if ((value == null) || (value == '')) 	
 	return;  
    this.FORM_TRIGGER_FAILURE = false;	
 await   this.WHEN_VALIDATE_ITEM_PRINTDISPLAY_PARAMETER_FILE(value); if ( this.FORM_TRIGGER_FAILURE) return; 
 this.formValidationChangedOutput.emit(this.form.valid); 
  
 } 
 async onValueChange_PARAMETER_FILE_LKP(value) { 
  this.FORM_TRIGGER_FAILURE = false;	
 await this.WHEN_VALIDATE_ITEM_PARAMETER_FILE_LKP(value); if ( this.FORM_TRIGGER_FAILURE) return; 
 this.formValidationChangedOutput.emit(this.form.valid); 
  
  } 
 async onChange_PRINTDISPLAY_TAG_LIST(event:any) { 
 var value = event.target.value; 
 if ((value == null) || (value == '')) 	
 	return;  
    this.FORM_TRIGGER_FAILURE = false;	
 await   this.WHEN_VALIDATE_ITEM_PRINTDISPLAY_TAG_LIST(value); if ( this.FORM_TRIGGER_FAILURE) return; 
 this.formValidationChangedOutput.emit(this.form.valid); 
  
 } 
 async onChange_X_PX(event:any) { 
 var value = event.target.value; 
 if ((value == null) || (value == '')) 	
 	return;  
    this.FORM_TRIGGER_FAILURE = false;	
 await   this.WHEN_VALIDATE_ITEM_X_PX(value); if ( this.FORM_TRIGGER_FAILURE) return; 
 this.formValidationChangedOutput.emit(this.form.valid); 
  
 } 
 async onChange_Y_PX(event:any) { 
 var value = event.target.value; 
 if ((value == null) || (value == '')) 	
 	return;  
    this.FORM_TRIGGER_FAILURE = false;	
 await   this.WHEN_VALIDATE_ITEM_Y_PX(value); if ( this.FORM_TRIGGER_FAILURE) return; 
 this.formValidationChangedOutput.emit(this.form.valid); 
  
 } 
 async onValueChange_DISPLAY_DISPLAY_FILE(value) { 
  this.FORM_TRIGGER_FAILURE = false;	
 await this.WHEN_VALIDATE_ITEM_DISPLAY_DISPLAY_FILE(value); if ( this.FORM_TRIGGER_FAILURE) return; 
 this.formValidationChangedOutput.emit(this.form.valid); 
  
  } 
 async onChange_DISPLAY_IN_BACKGROUND(event:any) { 
 var value = event.target.value; 
 if ((value == null) || (value == '')) 	
 	return;  
    this.FORM_TRIGGER_FAILURE = false;	
 await   this.WHEN_VALIDATE_ITEM_DISPLAY_IN_BACKGROUND(value); if ( this.FORM_TRIGGER_FAILURE) return; 
 this.formValidationChangedOutput.emit(this.form.valid); 
  
 } 
 async onChange_WINDOW_POSITION(event:any) { 
 var value = event.target.value; 
 if ((value == null) || (value == '')) 	
 	return;  
    this.FORM_TRIGGER_FAILURE = false;	
 await   this.WHEN_VALIDATE_ITEM_WINDOW_POSITION(value); if ( this.FORM_TRIGGER_FAILURE) return; 
 this.formValidationChangedOutput.emit(this.form.valid); 
  
 } 
 async onValueChange_DISPLAY_POSITION(value) { 
  this.FORM_TRIGGER_FAILURE = false;	
 await this.WHEN_VALIDATE_ITEM_DISPLAY_POSITION(value); if ( this.FORM_TRIGGER_FAILURE) return; 
 this.formValidationChangedOutput.emit(this.form.valid); 
  
  } 
 async onChange_DISABLE_ENTER_KEY(event:any) { 
 var value = event.target.value; 
 if ((value == null) || (value == '')) 	
 	return;  
    this.FORM_TRIGGER_FAILURE = false;	
 await   this.WHEN_VALIDATE_ITEM_DISABLE_ENTER_KEY(value); if ( this.FORM_TRIGGER_FAILURE) return; 
 this.formValidationChangedOutput.emit(this.form.valid); 
  
 } 
 async onChange_MONITOR_INDEX(event:any) { 
 var value = event.target.value; 
 if ((value == null) || (value == '')) 	
 	return;  
    this.FORM_TRIGGER_FAILURE = false;	
 await   this.WHEN_VALIDATE_ITEM_MONITOR_INDEX(value); if ( this.FORM_TRIGGER_FAILURE) return; 
 this.formValidationChangedOutput.emit(this.form.valid); 
  
 } 
 async onValueChange_MONITOR_INDEX_VALUE(value) { 
  this.FORM_TRIGGER_FAILURE = false;	
 await this.WHEN_VALIDATE_ITEM_MONITOR_INDEX_VALUE(value); if ( this.FORM_TRIGGER_FAILURE) return; 
 this.formValidationChangedOutput.emit(this.form.valid); 
  
  } 
 async onChange_DISPLAY_UPLOAD_DATA_ENTRY_FIELDS(event:any) { 
 var value = event.target.value; 
 if ((value == null) || (value == '')) 	
 	return;  
    this.FORM_TRIGGER_FAILURE = false;	
 await   this.WHEN_VALIDATE_ITEM_DISPLAY_UPLOAD_DATA_ENTRY_FIELDS(value); if ( this.FORM_TRIGGER_FAILURE) return; 
 this.formValidationChangedOutput.emit(this.form.valid); 
  
 } 
 async onChange_DISPLAY_HEIGHT(event:any) { 
 var value = event.target.value; 
 if ((value == null) || (value == '')) 	
 	return;  
    this.FORM_TRIGGER_FAILURE = false;	
 await   this.WHEN_VALIDATE_ITEM_DISPLAY_HEIGHT(value); if ( this.FORM_TRIGGER_FAILURE) return; 
 this.formValidationChangedOutput.emit(this.form.valid); 
  
 } 
 async onChange_HEIGHT_PX(event:any) { 
 var value = event.target.value; 
 if ((value == null) || (value == '')) 	
 	return;  
    this.FORM_TRIGGER_FAILURE = false;	
 await   this.WHEN_VALIDATE_ITEM_HEIGHT_PX(value); if ( this.FORM_TRIGGER_FAILURE) return; 
 this.formValidationChangedOutput.emit(this.form.valid); 
  
 } 
 async onChange_DISABLE_KEY_LIST(event:any) { 
 var value = event.target.value; 
 if ((value == null) || (value == '')) 	
 	return;  
    this.FORM_TRIGGER_FAILURE = false;	
 await   this.WHEN_VALIDATE_ITEM_DISABLE_KEY_LIST(value); if ( this.FORM_TRIGGER_FAILURE) return; 
 this.formValidationChangedOutput.emit(this.form.valid); 
  
 } 
 async onChange_DISPLAY_WIDTH(event:any) { 
 var value = event.target.value; 
 if ((value == null) || (value == '')) 	
 	return;  
    this.FORM_TRIGGER_FAILURE = false;	
 await   this.WHEN_VALIDATE_ITEM_DISPLAY_WIDTH(value); if ( this.FORM_TRIGGER_FAILURE) return; 
 this.formValidationChangedOutput.emit(this.form.valid); 
  
 } 
 async onChange_WIDTH_PX(event:any) { 
 var value = event.target.value; 
 if ((value == null) || (value == '')) 	
 	return;  
    this.FORM_TRIGGER_FAILURE = false;	
 await   this.WHEN_VALIDATE_ITEM_WIDTH_PX(value); if ( this.FORM_TRIGGER_FAILURE) return; 
 this.formValidationChangedOutput.emit(this.form.valid); 
  
 } 
 async onChange_DISPLAY_MINIMIZED(event:any) { 
 var value = event.target.value; 
 if ((value == null) || (value == '')) 	
 	return;  
    this.FORM_TRIGGER_FAILURE = false;	
 await   this.WHEN_VALIDATE_ITEM_DISPLAY_MINIMIZED(value); if ( this.FORM_TRIGGER_FAILURE) return; 
 this.formValidationChangedOutput.emit(this.form.valid); 
  
 } 
 async onChange_DISPLAY_LEFT(event:any) { 
 var value = event.target.value; 
 if ((value == null) || (value == '')) 	
 	return;  
    this.FORM_TRIGGER_FAILURE = false;	
 await   this.WHEN_VALIDATE_ITEM_DISPLAY_LEFT(value); if ( this.FORM_TRIGGER_FAILURE) return; 
 this.formValidationChangedOutput.emit(this.form.valid); 
  
 } 
 async onChange_LEFT_PX(event:any) { 
 var value = event.target.value; 
 if ((value == null) || (value == '')) 	
 	return;  
    this.FORM_TRIGGER_FAILURE = false;	
 await   this.WHEN_VALIDATE_ITEM_LEFT_PX(value); if ( this.FORM_TRIGGER_FAILURE) return; 
 this.formValidationChangedOutput.emit(this.form.valid); 
  
 } 
 async onChange_DISPLAY_MAXIMIZED(event:any) { 
 var value = event.target.value; 
 if ((value == null) || (value == '')) 	
 	return;  
    this.FORM_TRIGGER_FAILURE = false;	
 await   this.WHEN_VALIDATE_ITEM_DISPLAY_MAXIMIZED(value); if ( this.FORM_TRIGGER_FAILURE) return; 
 this.formValidationChangedOutput.emit(this.form.valid); 
  
 } 
 async onChange_DISPLAY_TOP(event:any) { 
 var value = event.target.value; 
 if ((value == null) || (value == '')) 	
 	return;  
    this.FORM_TRIGGER_FAILURE = false;	
 await   this.WHEN_VALIDATE_ITEM_DISPLAY_TOP(value); if ( this.FORM_TRIGGER_FAILURE) return; 
 this.formValidationChangedOutput.emit(this.form.valid); 
  
 } 
 async onChange_TOP_PX(event:any) { 
 var value = event.target.value; 
 if ((value == null) || (value == '')) 	
 	return;  
    this.FORM_TRIGGER_FAILURE = false;	
 await   this.WHEN_VALIDATE_ITEM_TOP_PX(value); if ( this.FORM_TRIGGER_FAILURE) return; 
 this.formValidationChangedOutput.emit(this.form.valid); 
  
 } 
 async onChange_CACHE_DISPLAY_ALWAYS_UPDATING(event:any) { 
 var value = event.target.value; 
 if ((value == null) || (value == '')) 	
 	return;  
    this.FORM_TRIGGER_FAILURE = false;	
 await   this.WHEN_VALIDATE_ITEM_CACHE_DISPLAY_ALWAYS_UPDATING(value); if ( this.FORM_TRIGGER_FAILURE) return; 
 this.formValidationChangedOutput.emit(this.form.valid); 
  
 } 
 async onChange_DISPLAY_PARAMETER_TAGS3(event:any) { 
 var value = event.target.value; 
 if ((value == null) || (value == '')) 	
 	return;  
    this.FORM_TRIGGER_FAILURE = false;	
 await   this.WHEN_VALIDATE_ITEM_DISPLAY_PARAMETER_TAGS3(value); if ( this.FORM_TRIGGER_FAILURE) return; 
 this.formValidationChangedOutput.emit(this.form.valid); 
  
 } 
 async onValueChange_TAG_LIST2(value) { 
  this.FORM_TRIGGER_FAILURE = false;	
 await this.WHEN_VALIDATE_ITEM_TAG_LIST2(value); if ( this.FORM_TRIGGER_FAILURE) return; 
 this.formValidationChangedOutput.emit(this.form.valid); 
  
  } 
 async onChange_CACHE_DISPLAY(event:any) { 
 var value = event.target.value; 
 if ((value == null) || (value == '')) 	
 	return;  
    this.FORM_TRIGGER_FAILURE = false;	
 await   this.WHEN_VALIDATE_ITEM_CACHE_DISPLAY(value); if ( this.FORM_TRIGGER_FAILURE) return; 
 this.formValidationChangedOutput.emit(this.form.valid); 
  
 } 
 async onChange_DISPLAY_PARAMETER_FILE3(event:any) { 
 var value = event.target.value; 
 if ((value == null) || (value == '')) 	
 	return;  
    this.FORM_TRIGGER_FAILURE = false;	
 await   this.WHEN_VALIDATE_ITEM_DISPLAY_PARAMETER_FILE3(value); if ( this.FORM_TRIGGER_FAILURE) return; 
 this.formValidationChangedOutput.emit(this.form.valid); 
  
 } 
 async onValueChange_DISPLAY_PARAMETER_FILE(value) { 
  this.FORM_TRIGGER_FAILURE = false;	
 await this.WHEN_VALIDATE_ITEM_DISPLAY_PARAMETER_FILE(value); if ( this.FORM_TRIGGER_FAILURE) return; 
 this.formValidationChangedOutput.emit(this.form.valid); 
  
  } 
 async onChange_CLOSE_MODE(event:any) { 
 var value = event.target.value; 
 if ((value == null) || (value == '')) 	
 	return;  
    this.FORM_TRIGGER_FAILURE = false;	
 await   this.WHEN_VALIDATE_ITEM_CLOSE_MODE(value); if ( this.FORM_TRIGGER_FAILURE) return; 
 this.formValidationChangedOutput.emit(this.form.valid); 
  
 } 
 async onValueChange_DISPLAY_ABORT(value) { 
  this.FORM_TRIGGER_FAILURE = false;	
 await this.WHEN_VALIDATE_ITEM_DISPLAY_ABORT(value); if ( this.FORM_TRIGGER_FAILURE) return; 
 this.formValidationChangedOutput.emit(this.form.valid); 
  
  } 
 async onChange_INCLUDE_DOCKED_DISPLAYS(event:any) { 
 var value = event.target.value; 
 if ((value == null) || (value == '')) 	
 	return;  
    this.FORM_TRIGGER_FAILURE = false;	
 await   this.WHEN_VALIDATE_ITEM_INCLUDE_DOCKED_DISPLAYS(value); if ( this.FORM_TRIGGER_FAILURE) return; 
 this.formValidationChangedOutput.emit(this.form.valid); 
  
 } 
 async onChange_UNPIN_MODE(event:any) { 
 var value = event.target.value; 
 if ((value == null) || (value == '')) 	
 	return;  
    this.FORM_TRIGGER_FAILURE = false;	
 await   this.WHEN_VALIDATE_ITEM_UNPIN_MODE(value); if ( this.FORM_TRIGGER_FAILURE) return; 
 this.formValidationChangedOutput.emit(this.form.valid); 
  
 } 
 async onValueChange_TAG(value) { 
  this.FORM_TRIGGER_FAILURE = false;	
 await this.WHEN_VALIDATE_ITEM_TAG(value); if ( this.FORM_TRIGGER_FAILURE) return; 
 this.formValidationChangedOutput.emit(this.form.valid); 
  
  } 
 async onChange_VERIFY(event:any) { 
 var value = event.target.value; 
 if ((value == null) || (value == '')) 	
 	return;  
    this.FORM_TRIGGER_FAILURE = false;	
 await   this.WHEN_VALIDATE_ITEM_VERIFY(value); if ( this.FORM_TRIGGER_FAILURE) return; 
 this.formValidationChangedOutput.emit(this.form.valid); 
  
 } 
 async onChange_ASYNCHRONOUS(event:any) { 
 var value = event.target.value; 
 if ((value == null) || (value == '')) 	
 	return;  
    this.FORM_TRIGGER_FAILURE = false;	
 await   this.WHEN_VALIDATE_ITEM_ASYNCHRONOUS(value); if ( this.FORM_TRIGGER_FAILURE) return; 
 this.formValidationChangedOutput.emit(this.form.valid); 
  
 } 
 async onChange_SET_TO(event:any) { 
 var value = event.target.value; 
 if ((value == null) || (value == '')) 	
 	return;  
    this.FORM_TRIGGER_FAILURE = false;	
 await   this.WHEN_VALIDATE_ITEM_SET_TO(value); if ( this.FORM_TRIGGER_FAILURE) return; 
 this.formValidationChangedOutput.emit(this.form.valid); 
  
 } 
 async onValueChange_EXPRESSION(value) { 
  this.FORM_TRIGGER_FAILURE = false;	
 await this.WHEN_VALIDATE_ITEM_EXPRESSION(value); if ( this.FORM_TRIGGER_FAILURE) return; 
 this.formValidationChangedOutput.emit(this.form.valid); 
  
  } 
 async onChange_RAMP_BY(event:any) { 
 var value = event.target.value; 
 if ((value == null) || (value == '')) 	
 	return;  
    this.FORM_TRIGGER_FAILURE = false;	
 await   this.WHEN_VALIDATE_ITEM_RAMP_BY(value); if ( this.FORM_TRIGGER_FAILURE) return; 
 this.formValidationChangedOutput.emit(this.form.valid); 
  
 } 
 async onChange_VALUE_INPUT(event:any) { 
 var value = event.target.value; 
 if ((value == null) || (value == '')) 	
 	return;  
    this.FORM_TRIGGER_FAILURE = false;	
 await   this.WHEN_VALIDATE_ITEM_VALUE_INPUT(value); if ( this.FORM_TRIGGER_FAILURE) return; 
 this.formValidationChangedOutput.emit(this.form.valid); 
  
 } 
 async onChange_PERCENTAGE_INPUT(event:any) { 
 var value = event.target.value; 
 if ((value == null) || (value == '')) 	
 	return;  
    this.FORM_TRIGGER_FAILURE = false;	
 await   this.WHEN_VALIDATE_ITEM_PERCENTAGE_INPUT(value); if ( this.FORM_TRIGGER_FAILURE) return; 
 this.formValidationChangedOutput.emit(this.form.valid); 
  
 } 
 async onChange_DIRECTION(event:any) { 
 var value = event.target.value; 
 if ((value == null) || (value == '')) 	
 	return;  
    this.FORM_TRIGGER_FAILURE = false;	
 await   this.WHEN_VALIDATE_ITEM_DIRECTION(value); if ( this.FORM_TRIGGER_FAILURE) return; 
 this.formValidationChangedOutput.emit(this.form.valid); 
  
 } 
 async onValueChange_OTHER_TAG_INPUT(value) { 
  this.FORM_TRIGGER_FAILURE = false;	
 await this.WHEN_VALIDATE_ITEM_OTHER_TAG_INPUT(value); if ( this.FORM_TRIGGER_FAILURE) return; 
 this.formValidationChangedOutput.emit(this.form.valid); 
  
  } 
 async onChange_STRING_INPUT(event:any) { 
 var value = event.target.value; 
 if ((value == null) || (value == '')) 	
 	return;  
    this.FORM_TRIGGER_FAILURE = false;	
 await   this.WHEN_VALIDATE_ITEM_STRING_INPUT(value); if ( this.FORM_TRIGGER_FAILURE) return; 
 this.formValidationChangedOutput.emit(this.form.valid); 
  
 } 
 async onChange_POSITION_INDEX(event:any) { 
 var value = event.target.value; 
 if ((value == null) || (value == '')) 	
 	return;  
    this.FORM_TRIGGER_FAILURE = false;	
 await   this.WHEN_VALIDATE_ITEM_POSITION_INDEX(value); if ( this.FORM_TRIGGER_FAILURE) return; 
 this.formValidationChangedOutput.emit(this.form.valid); 
  
 } 
 async onValueChange_LANGUAGE_ID(value) { 
  this.FORM_TRIGGER_FAILURE = false;	
 await this.WHEN_VALIDATE_ITEM_LANGUAGE_ID(value); if ( this.FORM_TRIGGER_FAILURE) return; 
 this.formValidationChangedOutput.emit(this.form.valid); 
  
  } 
 async onChange_SIMPLE_UTILITY_USER(event:any) { 
 var value = event.target.value; 
 if ((value == null) || (value == '')) 	
 	return;  
    this.FORM_TRIGGER_FAILURE = false;	
 await   this.WHEN_VALIDATE_ITEM_SIMPLE_UTILITY_USER(value); if ( this.FORM_TRIGGER_FAILURE) return; 
 this.formValidationChangedOutput.emit(this.form.valid); 
  
 } 
 async onChange_SIMPLE_UTILITY_PASSWORD(event:any) { 
 var value = event.target.value; 
 if ((value == null) || (value == '')) 	
 	return;  
    this.FORM_TRIGGER_FAILURE = false;	
 await   this.WHEN_VALIDATE_ITEM_SIMPLE_UTILITY_PASSWORD(value); if ( this.FORM_TRIGGER_FAILURE) return; 
 this.formValidationChangedOutput.emit(this.form.valid); 
  
 } 
 async onChange_SIMPLE_UTILITY_SYMBOL(event:any) { 
 var value = event.target.value; 
 if ((value == null) || (value == '')) 	
 	return;  
    this.FORM_TRIGGER_FAILURE = false;	
 await   this.WHEN_VALIDATE_ITEM_SIMPLE_UTILITY_SYMBOL(value); if ( this.FORM_TRIGGER_FAILURE) return; 
 this.formValidationChangedOutput.emit(this.form.valid); 
  
 } 
 async onChange_SIMPLE_UTILITY_REMARK_TEXT(event:any) { 
 var value = event.target.value; 
 if ((value == null) || (value == '')) 	
 	return;  
    this.FORM_TRIGGER_FAILURE = false;	
 await   this.WHEN_VALIDATE_ITEM_SIMPLE_UTILITY_REMARK_TEXT(value); if ( this.FORM_TRIGGER_FAILURE) return; 
 this.formValidationChangedOutput.emit(this.form.valid); 
  
 } 
 async onValueChange_SENDKEYS_KEYSTRING(value) { 
  this.FORM_TRIGGER_FAILURE = false;	
 await this.WHEN_VALIDATE_ITEM_SENDKEYS_KEYSTRING(value); if ( this.FORM_TRIGGER_FAILURE) return; 
 this.formValidationChangedOutput.emit(this.form.valid); 
  
  } 
 async onValueChange_START_RECORDING_KEYS(value) { 
  this.FORM_TRIGGER_FAILURE = false;	
 await this.WHEN_VALIDATE_ITEM_START_RECORDING_KEYS(value); if ( this.FORM_TRIGGER_FAILURE) return; 
 this.formValidationChangedOutput.emit(this.form.valid); 
  
  } 
 async onValueChange_STOP_RECORDING_KEYS(value) { 
  this.FORM_TRIGGER_FAILURE = false;	
 await this.WHEN_VALIDATE_ITEM_STOP_RECORDING_KEYS(value); if ( this.FORM_TRIGGER_FAILURE) return; 
 this.formValidationChangedOutput.emit(this.form.valid); 
  
  } 
 async onValueChange_CLEAR_KEYS(value) { 
  this.FORM_TRIGGER_FAILURE = false;	
 await this.WHEN_VALIDATE_ITEM_CLEAR_KEYS(value); if ( this.FORM_TRIGGER_FAILURE) return; 
 this.formValidationChangedOutput.emit(this.form.valid); 
  
  } 
 async onChange_KEY_MODE(event:any) { 
 var value = event.target.value; 
 if ((value == null) || (value == '')) 	
 	return;  
    this.FORM_TRIGGER_FAILURE = false;	
 await   this.WHEN_VALIDATE_ITEM_KEY_MODE(value); if ( this.FORM_TRIGGER_FAILURE) return; 
 this.formValidationChangedOutput.emit(this.form.valid); 
  
 } 
 async onValueChange_KEY_FILE(value) { 
  this.FORM_TRIGGER_FAILURE = false;	
 await this.WHEN_VALIDATE_ITEM_KEY_FILE(value); if ( this.FORM_TRIGGER_FAILURE) return; 
 this.formValidationChangedOutput.emit(this.form.valid); 
  
  } 
 async onChange_TIME_SECONDS(event:any) { 
 var value = event.target.value; 
 if ((value == null) || (value == '')) 	
 	return;  
    this.FORM_TRIGGER_FAILURE = false;	
 await   this.WHEN_VALIDATE_ITEM_TIME_SECONDS(value); if ( this.FORM_TRIGGER_FAILURE) return; 
 this.formValidationChangedOutput.emit(this.form.valid); 
  
 } 
 async onChange_DISPLAY_CLIENT_CLOSE_MODE(event:any) { 
 var value = event.target.value; 
 if ((value == null) || (value == '')) 	
 	return;  
    this.FORM_TRIGGER_FAILURE = false;	
 await   this.WHEN_VALIDATE_ITEM_DISPLAY_CLIENT_CLOSE_MODE(value); if ( this.FORM_TRIGGER_FAILURE) return; 
 this.formValidationChangedOutput.emit(this.form.valid); 
  
 } 
 async onValueChange_FILE_NAME(value) { 
  this.FORM_TRIGGER_FAILURE = false;	
 await this.WHEN_VALIDATE_ITEM_FILE_NAME(value); if ( this.FORM_TRIGGER_FAILURE) return; 
 this.formValidationChangedOutput.emit(this.form.valid); 
  
  } 
 async onValueChange_SIMPLE_UTILITY_BROWSE(value) { 
  this.FORM_TRIGGER_FAILURE = false;	
 await this.WHEN_VALIDATE_ITEM_SIMPLE_UTILITY_BROWSE(value); if ( this.FORM_TRIGGER_FAILURE) return; 
 this.formValidationChangedOutput.emit(this.form.valid); 
  
  } 
 async onChange_TITLE_TEXT(event:any) { 
 var value = event.target.value; 
 if ((value == null) || (value == '')) 	
 	return;  
    this.FORM_TRIGGER_FAILURE = false;	
 await   this.WHEN_VALIDATE_ITEM_TITLE_TEXT(value); if ( this.FORM_TRIGGER_FAILURE) return; 
 this.formValidationChangedOutput.emit(this.form.valid); 
  
 } 
 async onChange_WRITE_RECIPE_NAME_TO_STRING_TAG(event:any) { 
 var value = event.target.value; 
 if ((value == null) || (value == '')) 	
 	return;  
    this.FORM_TRIGGER_FAILURE = false;	
 await   this.WHEN_VALIDATE_ITEM_WRITE_RECIPE_NAME_TO_STRING_TAG(value); if ( this.FORM_TRIGGER_FAILURE) return; 
 this.formValidationChangedOutput.emit(this.form.valid); 
  
 } 
 async onValueChange_RECIPE_NAME_TAG(value) { 
  this.FORM_TRIGGER_FAILURE = false;	
 await this.WHEN_VALIDATE_ITEM_RECIPE_NAME_TAG(value); if ( this.FORM_TRIGGER_FAILURE) return; 
 this.formValidationChangedOutput.emit(this.form.valid); 
  
  } 
 async onChange_EXPRESSION_EDITOR(event:any) { 
 var value = event.target.value; 
 if ((value == null) || (value == '')) 	
 	return;  
    this.FORM_TRIGGER_FAILURE = false;	
 await   this.WHEN_VALIDATE_ITEM_EXPRESSION_EDITOR(value); if ( this.FORM_TRIGGER_FAILURE) return; 
 this.formValidationChangedOutput.emit(this.form.valid); 
  
 } 
 async onValueChange_THEN_ACTION(value) { 
  this.FORM_TRIGGER_FAILURE = false;	
 await this.WHEN_VALIDATE_ITEM_THEN_ACTION(value); if ( this.FORM_TRIGGER_FAILURE) return; 
 this.formValidationChangedOutput.emit(this.form.valid); 
  
  } 
 async onValueChange_THEN_ACTION_BUTTON(value) { 
  this.FORM_TRIGGER_FAILURE = false;	
 await this.WHEN_VALIDATE_ITEM_THEN_ACTION_BUTTON(value); if ( this.FORM_TRIGGER_FAILURE) return; 
 this.formValidationChangedOutput.emit(this.form.valid); 
  
  } 
 async onValueChange_ELSE_ACTION(value) { 
  this.FORM_TRIGGER_FAILURE = false;	
 await this.WHEN_VALIDATE_ITEM_ELSE_ACTION(value); if ( this.FORM_TRIGGER_FAILURE) return; 
 this.formValidationChangedOutput.emit(this.form.valid); 
  
  } 
 async onValueChange_ELSE_ACTION_BUTTON(value) { 
  this.FORM_TRIGGER_FAILURE = false;	
 await this.WHEN_VALIDATE_ITEM_ELSE_ACTION_BUTTON(value); if ( this.FORM_TRIGGER_FAILURE) return; 
 this.formValidationChangedOutput.emit(this.form.valid); 
  
  } 
 async onValueChange_INVOKE_DISPLAY_FILE(value) { 
  this.FORM_TRIGGER_FAILURE = false;	
 await this.WHEN_VALIDATE_ITEM_INVOKE_DISPLAY_FILE(value); if ( this.FORM_TRIGGER_FAILURE) return; 
 this.formValidationChangedOutput.emit(this.form.valid); 
  
  } 
 async onChange_INVOKE_OBJECT(event:any) { 
 var value = event.target.value; 
 if ((value == null) || (value == '')) 	
 	return;  
    this.FORM_TRIGGER_FAILURE = false;	
 await   this.WHEN_VALIDATE_ITEM_INVOKE_OBJECT(value); if ( this.FORM_TRIGGER_FAILURE) return; 
 this.formValidationChangedOutput.emit(this.form.valid); 
  
 } 
 async onChange_PROPERTY_OR_METHOD(event:any) { 
 var value = event.target.value; 
 if ((value == null) || (value == '')) 	
 	return;  
    this.FORM_TRIGGER_FAILURE = false;	
 await   this.WHEN_VALIDATE_ITEM_PROPERTY_OR_METHOD(value); if ( this.FORM_TRIGGER_FAILURE) return; 
 this.formValidationChangedOutput.emit(this.form.valid); 
  
 } 
 async onChange_METHOD_PARAMETER(event:any) { 
 var value = event.target.value; 
 if ((value == null) || (value == '')) 	
 	return;  
    this.FORM_TRIGGER_FAILURE = false;	
 await   this.WHEN_VALIDATE_ITEM_METHOD_PARAMETER(value); if ( this.FORM_TRIGGER_FAILURE) return; 
 this.formValidationChangedOutput.emit(this.form.valid); 
  
 } 
 async onValueChange_INVOKE_ADD_TAG(value) { 
  this.FORM_TRIGGER_FAILURE = false;	
 await this.WHEN_VALIDATE_ITEM_INVOKE_ADD_TAG(value); if ( this.FORM_TRIGGER_FAILURE) return; 
 this.formValidationChangedOutput.emit(this.form.valid); 
  
  } 
 async onChange_INVOKE_MODE(event:any) { 
 var value = event.target.value; 
 if ((value == null) || (value == '')) 	
 	return;  
    this.FORM_TRIGGER_FAILURE = false;	
 await   this.WHEN_VALIDATE_ITEM_INVOKE_MODE(value); if ( this.FORM_TRIGGER_FAILURE) return; 
 this.formValidationChangedOutput.emit(this.form.valid); 
  
 } 
 async onValueChange_SET_TAG_TO_VALUE_OF_OBJECT(value) { 
  this.FORM_TRIGGER_FAILURE = false;	
 await this.WHEN_VALIDATE_ITEM_SET_TAG_TO_VALUE_OF_OBJECT(value); if ( this.FORM_TRIGGER_FAILURE) return; 
 this.formValidationChangedOutput.emit(this.form.valid); 
  
  } 
 async onValueChange_SET_OBJECT_PROPERTY(value) { 
  this.FORM_TRIGGER_FAILURE = false;	
 await this.WHEN_VALIDATE_ITEM_SET_OBJECT_PROPERTY(value); if ( this.FORM_TRIGGER_FAILURE) return; 
 this.formValidationChangedOutput.emit(this.form.valid); 
  
  } 
 async onValueChange_SET_TAG_TO_VALUE_FROM(value) { 
  this.FORM_TRIGGER_FAILURE = false;	
 await this.WHEN_VALIDATE_ITEM_SET_TAG_TO_VALUE_FROM(value); if ( this.FORM_TRIGGER_FAILURE) return; 
 this.formValidationChangedOutput.emit(this.form.valid); 
  
  } 
 async onChange_RECIPE_FILE_MODE(event:any) { 
 var value = event.target.value; 
 if ((value == null) || (value == '')) 	
 	return;  
    this.FORM_TRIGGER_FAILURE = false;	
 await   this.WHEN_VALIDATE_ITEM_RECIPE_FILE_MODE(value); if ( this.FORM_TRIGGER_FAILURE) return; 
 this.formValidationChangedOutput.emit(this.form.valid); 
  
 } 
 async onValueChange_RECIPE_FILE(value) { 
  this.FORM_TRIGGER_FAILURE = false;	
 await this.WHEN_VALIDATE_ITEM_RECIPE_FILE(value); if ( this.FORM_TRIGGER_FAILURE) return; 
 this.formValidationChangedOutput.emit(this.form.valid); 
  
  } 
 async onValueChange_VARIABLE_RECIPE_INPUT(value) { 
  this.FORM_TRIGGER_FAILURE = false;	
 await this.WHEN_VALIDATE_ITEM_VARIABLE_RECIPE_INPUT(value); if ( this.FORM_TRIGGER_FAILURE) return; 
 this.formValidationChangedOutput.emit(this.form.valid); 
  
  } 
 async onChange_RECIPE_FILTER(event:any) { 
 var value = event.target.value; 
 if ((value == null) || (value == '')) 	
 	return;  
    this.FORM_TRIGGER_FAILURE = false;	
 await   this.WHEN_VALIDATE_ITEM_RECIPE_FILTER(value); if ( this.FORM_TRIGGER_FAILURE) return; 
 this.formValidationChangedOutput.emit(this.form.valid); 
  
 } 
 async onChange_FILTER_TEXT(event:any) { 
 var value = event.target.value; 
 if ((value == null) || (value == '')) 	
 	return;  
    this.FORM_TRIGGER_FAILURE = false;	
 await   this.WHEN_VALIDATE_ITEM_FILTER_TEXT(value); if ( this.FORM_TRIGGER_FAILURE) return; 
 this.formValidationChangedOutput.emit(this.form.valid); 
  
 } 
 async onChange_WRITE_RECIPE_NAME_AFTER_DOWNLOAD(event:any) { 
 var value = event.target.value; 
 if ((value == null) || (value == '')) 	
 	return;  
    this.FORM_TRIGGER_FAILURE = false;	
 await   this.WHEN_VALIDATE_ITEM_WRITE_RECIPE_NAME_AFTER_DOWNLOAD(value); if ( this.FORM_TRIGGER_FAILURE) return; 
 this.formValidationChangedOutput.emit(this.form.valid); 
  
 } 
 async onValueChange_TAG_AFTER_DOWNLOAD(value) { 
  this.FORM_TRIGGER_FAILURE = false;	
 await this.WHEN_VALIDATE_ITEM_TAG_AFTER_DOWNLOAD(value); if ( this.FORM_TRIGGER_FAILURE) return; 
 this.formValidationChangedOutput.emit(this.form.valid); 
  
  } 
 async onChange_STATUS_CODE(event:any) { 
 var value = event.target.value; 
 if ((value == null) || (value == '')) 	
 	return;  
    this.FORM_TRIGGER_FAILURE = false;	
 await   this.WHEN_VALIDATE_ITEM_STATUS_CODE(value); if ( this.FORM_TRIGGER_FAILURE) return; 
 this.formValidationChangedOutput.emit(this.form.valid); 
  
 } 
 async onValueChange_STATUS_TAG(value) { 
  this.FORM_TRIGGER_FAILURE = false;	
 await this.WHEN_VALIDATE_ITEM_STATUS_TAG(value); if ( this.FORM_TRIGGER_FAILURE) return; 
 this.formValidationChangedOutput.emit(this.form.valid); 
  
  } 
 async onChange_CURRENT_RECIPE_NAME(event:any) { 
 var value = event.target.value; 
 if ((value == null) || (value == '')) 	
 	return;  
    this.FORM_TRIGGER_FAILURE = false;	
 await   this.WHEN_VALIDATE_ITEM_CURRENT_RECIPE_NAME(value); if ( this.FORM_TRIGGER_FAILURE) return; 
 this.formValidationChangedOutput.emit(this.form.valid); 
  
 } 
 async onValueChange_RECIPE_NAME_TAG_RPC(value) { 
  this.FORM_TRIGGER_FAILURE = false;	
 await this.WHEN_VALIDATE_ITEM_RECIPE_NAME_TAG_RPC(value); if ( this.FORM_TRIGGER_FAILURE) return; 
 this.formValidationChangedOutput.emit(this.form.valid); 
  
  } 
 async onChange_COMMAND_WIZRD_ID(event:any) { 
 var value = event.target.value; 
 if ((value == null) || (value == '')) 	
 	return;  
    this.FORM_TRIGGER_FAILURE = false;	
 await   this.WHEN_VALIDATE_ITEM_COMMAND_WIZRD_ID(value); if ( this.FORM_TRIGGER_FAILURE) return; 
 this.formValidationChangedOutput.emit(this.form.valid); 
  
 } 
 async onValueChange_ALARM_SOURCE(value) { 
  this.FORM_TRIGGER_FAILURE = false;	
 await this.WHEN_VALIDATE_ITEM_ALARM_SOURCE(value); if ( this.FORM_TRIGGER_FAILURE) return; 
 this.formValidationChangedOutput.emit(this.form.valid); 
  
  } 
 async onChange_DURATION(event:any) { 
 var value = event.target.value; 
 if ((value == null) || (value == '')) 	
 	return;  
    this.FORM_TRIGGER_FAILURE = false;	
 await   this.WHEN_VALIDATE_ITEM_DURATION(value); if ( this.FORM_TRIGGER_FAILURE) return; 
 this.formValidationChangedOutput.emit(this.form.valid); 
  
 } 
 async onChange_PROMPT_FOR_COMMENT(event:any) { 
 var value = event.target.value; 
 if ((value == null) || (value == '')) 	
 	return;  
    this.FORM_TRIGGER_FAILURE = false;	
 await   this.WHEN_VALIDATE_ITEM_PROMPT_FOR_COMMENT(value); if ( this.FORM_TRIGGER_FAILURE) return; 
 this.formValidationChangedOutput.emit(this.form.valid); 
  
 } 
 async onValueChange_AE_REMARK_ALARM_SERVER(value) { 
  this.FORM_TRIGGER_FAILURE = false;	
 await this.WHEN_VALIDATE_ITEM_AE_REMARK_ALARM_SERVER(value); if ( this.FORM_TRIGGER_FAILURE) return; 
 this.formValidationChangedOutput.emit(this.form.valid); 
  
  } 
 async onValueChange_AE_REMARK_COMMENT(value) { 
  this.FORM_TRIGGER_FAILURE = false;	
 await this.WHEN_VALIDATE_ITEM_AE_REMARK_COMMENT(value); if ( this.FORM_TRIGGER_FAILURE) return; 
 this.formValidationChangedOutput.emit(this.form.valid); 
  
  } 
 async onValueChange_BUT_TAG_MIN_VAL(value) { 
  this.FORM_TRIGGER_FAILURE = false;	
 await this.WHEN_VALIDATE_ITEM_BUT_TAG_MIN_VAL(value); if ( this.FORM_TRIGGER_FAILURE) return; 
 this.formValidationChangedOutput.emit(this.form.valid); 
  
  } 
 async onValueChange_BUT_TAG_MAX_VAL(value) { 
  this.FORM_TRIGGER_FAILURE = false;	
 await this.WHEN_VALIDATE_ITEM_BUT_TAG_MAX_VAL(value); if ( this.FORM_TRIGGER_FAILURE) return; 
 this.formValidationChangedOutput.emit(this.form.valid); 
  
  } 
 async onValueChange_BUT_TAG_UNITS(value) { 
  this.FORM_TRIGGER_FAILURE = false;	
 await this.WHEN_VALIDATE_ITEM_BUT_TAG_UNITS(value); if ( this.FORM_TRIGGER_FAILURE) return; 
 this.formValidationChangedOutput.emit(this.form.valid); 
  
  } 
 async onValueChange_BUT_TAG_NAME(value) { 
  this.FORM_TRIGGER_FAILURE = false;	
 await this.WHEN_VALIDATE_ITEM_BUT_TAG_NAME(value); if ( this.FORM_TRIGGER_FAILURE) return; 
 this.formValidationChangedOutput.emit(this.form.valid); 
  
  } 
 async onValueChange_BUT_TAG_DESC(value) { 
  this.FORM_TRIGGER_FAILURE = false;	
 await this.WHEN_VALIDATE_ITEM_BUT_TAG_DESC(value); if ( this.FORM_TRIGGER_FAILURE) return; 
 this.formValidationChangedOutput.emit(this.form.valid); 
  
  } 
 async onValueChange_BUT_TAG_VALUE(value) { 
  this.FORM_TRIGGER_FAILURE = false;	
 await this.WHEN_VALIDATE_ITEM_BUT_TAG_VALUE(value); if ( this.FORM_TRIGGER_FAILURE) return; 
 this.formValidationChangedOutput.emit(this.form.valid); 
  
  } 
 async onChange_TAG_SELECT(event:any) { 
 var value = event.target.value; 
 if ((value == null) || (value == '')) 	
 	return;  
    this.FORM_TRIGGER_FAILURE = false;	
 await   this.WHEN_VALIDATE_ITEM_TAG_SELECT(value); if ( this.FORM_TRIGGER_FAILURE) return; 
 this.formValidationChangedOutput.emit(this.form.valid); 
  
 } 
 async onValueChange_TAG_INPUT(value) { 
  this.FORM_TRIGGER_FAILURE = false;	
 await this.WHEN_VALIDATE_ITEM_TAG_INPUT(value); if ( this.FORM_TRIGGER_FAILURE) return; 
 this.formValidationChangedOutput.emit(this.form.valid); 
  
  } 
 async onChange_PROMPT_FOR_COMMENT_2(event:any) { 
 var value = event.target.value; 
 if ((value == null) || (value == '')) 	
 	return;  
    this.FORM_TRIGGER_FAILURE = false;	
 await   this.WHEN_VALIDATE_ITEM_PROMPT_FOR_COMMENT_2(value); if ( this.FORM_TRIGGER_FAILURE) return; 
 this.formValidationChangedOutput.emit(this.form.valid); 
  
 } 
 async onValueChange_DATALOG_FILE(value) { 
  this.FORM_TRIGGER_FAILURE = false;	
 await this.WHEN_VALIDATE_ITEM_DATALOG_FILE(value); if ( this.FORM_TRIGGER_FAILURE) return; 
 this.formValidationChangedOutput.emit(this.form.valid); 
  
  } 
 async onChange_FILE_IDENTIFIER(event:any) { 
 var value = event.target.value; 
 if ((value == null) || (value == '')) 	
 	return;  
    this.FORM_TRIGGER_FAILURE = false;	
 await   this.WHEN_VALIDATE_ITEM_FILE_IDENTIFIER(value); if ( this.FORM_TRIGGER_FAILURE) return; 
 this.formValidationChangedOutput.emit(this.form.valid); 
  
 } 
 async onChange_RATE(event:any) { 
 var value = event.target.value; 
 if ((value == null) || (value == '')) 	
 	return;  
    this.FORM_TRIGGER_FAILURE = false;	
 await   this.WHEN_VALIDATE_ITEM_RATE(value); if ( this.FORM_TRIGGER_FAILURE) return; 
 this.formValidationChangedOutput.emit(this.form.valid); 
  
 } 
 async onValueChange_DATALOG_UNITS(value) { 
  this.FORM_TRIGGER_FAILURE = false;	
 await this.WHEN_VALIDATE_ITEM_DATALOG_UNITS(value); if ( this.FORM_TRIGGER_FAILURE) return; 
 this.formValidationChangedOutput.emit(this.form.valid); 
  
  } 
 async onValueChange_FILE_COMMAND(value) { 
  this.FORM_TRIGGER_FAILURE = false;	
 await this.WHEN_VALIDATE_ITEM_FILE_COMMAND(value); if ( this.FORM_TRIGGER_FAILURE) return; 
 this.formValidationChangedOutput.emit(this.form.valid); 
  
  } 
 async onValueChange_PROGRAM(value) { 
  this.FORM_TRIGGER_FAILURE = false;	
 await this.WHEN_VALIDATE_ITEM_PROGRAM(value); if ( this.FORM_TRIGGER_FAILURE) return; 
 this.formValidationChangedOutput.emit(this.form.valid); 
  
  } 
 async onValueChange_PROGRAM_BROWSE(value) { 
  this.FORM_TRIGGER_FAILURE = false;	
 await this.WHEN_VALIDATE_ITEM_PROGRAM_BROWSE(value); if ( this.FORM_TRIGGER_FAILURE) return; 
 this.formValidationChangedOutput.emit(this.form.valid); 
  
  } 
 async onChange_WAVE_FILE(event:any) { 
 var value = event.target.value; 
 if ((value == null) || (value == '')) 	
 	return;  
    this.FORM_TRIGGER_FAILURE = false;	
 await   this.WHEN_VALIDATE_ITEM_WAVE_FILE(value); if ( this.FORM_TRIGGER_FAILURE) return; 
 this.formValidationChangedOutput.emit(this.form.valid); 
  
 } 
 async onValueChange_WAVE_BROWSE(value) { 
  this.FORM_TRIGGER_FAILURE = false;	
 await this.WHEN_VALIDATE_ITEM_WAVE_BROWSE(value); if ( this.FORM_TRIGGER_FAILURE) return; 
 this.formValidationChangedOutput.emit(this.form.valid); 
  
  } 
 async onChange_DEFINE_SYMBOL(event:any) { 
 var value = event.target.value; 
 if ((value == null) || (value == '')) 	
 	return;  
    this.FORM_TRIGGER_FAILURE = false;	
 await   this.WHEN_VALIDATE_ITEM_DEFINE_SYMBOL(value); if ( this.FORM_TRIGGER_FAILURE) return; 
 this.formValidationChangedOutput.emit(this.form.valid); 
  
 } 
 async onChange_DEFINE_COMMAND(event:any) { 
 var value = event.target.value; 
 if ((value == null) || (value == '')) 	
 	return;  
    this.FORM_TRIGGER_FAILURE = false;	
 await   this.WHEN_VALIDATE_ITEM_DEFINE_COMMAND(value); if ( this.FORM_TRIGGER_FAILURE) return; 
 this.formValidationChangedOutput.emit(this.form.valid); 
  
 } 
 async onChange_HELP_FILE(event:any) { 
 var value = event.target.value; 
 if ((value == null) || (value == '')) 	
 	return;  
    this.FORM_TRIGGER_FAILURE = false;	
 await   this.WHEN_VALIDATE_ITEM_HELP_FILE(value); if ( this.FORM_TRIGGER_FAILURE) return; 
 this.formValidationChangedOutput.emit(this.form.valid); 
  
 } 
 async onValueChange_HELP_BROWSE(value) { 
  this.FORM_TRIGGER_FAILURE = false;	
 await this.WHEN_VALIDATE_ITEM_HELP_BROWSE(value); if ( this.FORM_TRIGGER_FAILURE) return; 
 this.formValidationChangedOutput.emit(this.form.valid); 
  
  } 
 async onChange_SEARCH_FOR(event:any) { 
 var value = event.target.value; 
 if ((value == null) || (value == '')) 	
 	return;  
    this.FORM_TRIGGER_FAILURE = false;	
 await   this.WHEN_VALIDATE_ITEM_SEARCH_FOR(value); if ( this.FORM_TRIGGER_FAILURE) return; 
 this.formValidationChangedOutput.emit(this.form.valid); 
  
 } 
 async onChange_PRINT_TO_PDF(event:any) { 
 var value = event.target.value; 
 if ((value == null) || (value == '')) 	
 	return;  
    this.FORM_TRIGGER_FAILURE = false;	
 await   this.WHEN_VALIDATE_ITEM_PRINT_TO_PDF(value); if ( this.FORM_TRIGGER_FAILURE) return; 
 this.formValidationChangedOutput.emit(this.form.valid); 
  
 } 
 async onChange_PDF_FILE_PATH(event:any) { 
 var value = event.target.value; 
 if ((value == null) || (value == '')) 	
 	return;  
    this.FORM_TRIGGER_FAILURE = false;	
 await   this.WHEN_VALIDATE_ITEM_PDF_FILE_PATH(value); if ( this.FORM_TRIGGER_FAILURE) return; 
 this.formValidationChangedOutput.emit(this.form.valid); 
  
 }
public commandString = "xx";
public ON_CLICK_OK(event){
		this.componentConfig_output = new componentConfigDef();
        let masterParams = {
            data: this.commandString
        }
        this.componentConfig_output.masterParams = masterParams;    
        this.emitcomponentConfig_output();
	}
	@Output() cancelClicked = new EventEmitter<void>();  // Add this line
	public ON_CLICK_CANCEL(event){
    this.cancelClicked.emit();
	}
	public  help_1Config : componentConfigDef;
  	public helpOpened = false;
	public ON_CLICK_HELP(event){
    	this.helpOpened = true;
	}
	public visibleOK_BTNS = true;
	
  
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
      if (typeof this.form['kendoui_content'] == "undefined")
        this.starServices.convertSvgToKendoSVGIcon (this, formGroup[this.svg_arr[i]], formGroup.svg_name,this.svg_arr[i])
      else
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


