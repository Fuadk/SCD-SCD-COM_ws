import { Component, OnInit, Output,Input, EventEmitter, HostListener } from '@angular/core';
import {  scdalarmGeneralScdAgdAlarmGeneral1  ,scdalarmColumnsScdAclAlarmColumns2  ,scdalarmDisplayFiltersScdAdflAlarmDisplayFilters3  ,scdalarmStatesScdAslAlarmStates4  ,scdalarmSortScdAaespAlarmSort  , componentConfigDef} from '@modeldir/model';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { Subscription } from 'rxjs';
import { starServices } from 'starlib';
import { Starlib1 } from '../../Starlib1';
import { Router } from '@angular/router';
import { StarNotifyService } from '../../../services/starnotification.service';
import { TabAlignment } from '@progress/kendo-angular-layout';
declare function getParamConfig():any;

@Component({

  selector: 'app-scd-alarm-and-event-log-viewer-properties',
  templateUrl: './scd-alarm-and-event-log-viewer-properties.component.html',
  styleUrls: ['./scd-alarm-and-event-log-viewer-properties.component.scss'],
  standalone: false
})
export class ScdAlarmAndEventLogViewerPropertiesComponent implements OnInit {
  @Output() saveTriggerOutput: EventEmitter<any> = new EventEmitter();
  @Output() formValidationChangedOutput: EventEmitter<boolean> = new EventEmitter();
  constructor(public router: Router,public responsive: BreakpointObserver, private starNotify: StarNotifyService, public starServices: starServices, public starlib1: Starlib1) {
   this.router = router;
  this.title =  this.starServices.getNLS([],"scd_alarm_and_event_log_viewer_properties.scd_alarm_and_event_log_viewer_properties.component_title","");
    this.componentConfig = new componentConfigDef();
    this.paramConfig = getParamConfig();
  }
  public showToolBar = false;
  public paramConfig; 
  public title = '';
  public isPhonePortrait = false;
  public customerFacing = false;
  public isSearchScreen = false;
  public routineName = "scd_alarm_and_event_log_viewer_properties";
  public alignment: TabAlignment = 'start';
  public selectedTab = 2;
  public masterParams;
  public gap: any = {
  	rows: 1,
  	columns: 1,
    };

  public componentConfig: componentConfigDef;

  public formdivs_0_SCD_ALARM_GENERAL : scdalarmGeneralScdAgdAlarmGeneral1;
  public grid_1_SCD_ALARM_COLUMNS : scdalarmColumnsScdAclAlarmColumns2;
  public grid_2_SCD_ALARM_DISPLAY_FILTERS : scdalarmDisplayFiltersScdAdflAlarmDisplayFilters3;
  public grid_3_SCD_ALARM_STATES : scdalarmStatesScdAslAlarmStates4;
  public form_4_SCD_ALARM_SORT : scdalarmSortScdAaespAlarmSort;
  public  SCD_ALARM_GENERALFormdivs_0Config : componentConfigDef;
  public  hide_comp_1 = false
  public  SCD_ALARM_COLUMNSGrid_1Config : componentConfigDef;
  public  hide_comp_2 = false
  public  SCD_ALARM_DISPLAY_FILTERSGrid_2Config : componentConfigDef;
  public  hide_comp_3 = false
  public  SCD_ALARM_STATESGrid_3Config : componentConfigDef;
  public  hide_comp_4 = false
  public  SCD_ALARM_SORTForm_4Config : componentConfigDef;
  public  hide_comp_5 = false
  public PDFfileName = this.title + ".PDF";
  public routineAuth = "ScdAlarmAndEventLogViewerProperties";

  public ngAfterViewInit() {
    this.starServices.setRTL();
  }
  private componentConfigChangeEvent!: Subscription;
  public compSelector = 'app-scd-alarm-and-event-log-viewer-properties';
  public masterKeyNameArr = ["GENERAL_ID","APP_ID","DISPLAY_ID","SHAPE_ID"];

  public masterINSERT = 'INSERT_SCD_ALARM_GENERAL';
  public masterDataSource = 'SCD_ALARM_GENERAL';
  public showForm=false;
  public showApproveReject:boolean = false;
  public DSP_ORDERSFormConfig: componentConfigDef;
  ngOnInit(): void {
    this.starServices.actOnParamConfig(this, this.routineName );
      this.responsive 
      .observe([Breakpoints.HandsetPortrait]) 
      .subscribe((state: BreakpointState) => { 
      this.isPhonePortrait = false; 
        if (state.matches) { 
       this.isPhonePortrait = true; 
        } 
      }); 
  this.componentConfigChangeEvent = this.starNotify.subscribeEvent<componentConfigDef>('componentConfigDef', componentConfig => {
  	if (componentConfig.eventFrom != this.compSelector) {
  	   if (componentConfig.eventTo.includes(this.compSelector)|| componentConfig.eventTo.includes('any'))  {
  		  this.handleComponentConfig(componentConfig);
  	   }
  	}
   });
    this.initComponents();
  }

  async initComponents(){
    await this.starServices.sleep(200);
    // to stop initial loading remove [executeQueryInput]="form_dsp_template"  from this (parent) html file
   this.SCD_ALARM_GENERALFormdivs_0Config = new componentConfigDef();
   this.SCD_ALARM_GENERALFormdivs_0Config.title = this.starServices.getNLS([],"scd_alarm_and_event_log_viewer_properties.scd_alarm_and_event_log_viewer_properties.compsTitleID1","Alarm General");
   this.SCD_ALARM_GENERALFormdivs_0Config.isMaster = true;
   this.SCD_ALARM_GENERALFormdivs_0Config.isSearchScreen = this.isSearchScreen;
	if (this.visibleOK_BTNS) 
   	this.SCD_ALARM_GENERALFormdivs_0Config.showToolBar = !this.visibleOK_BTNS; 
   if (typeof this['steps']  !== 'undefined') {
     this.SCD_ALARM_GENERALFormdivs_0Config.queryable = false;
     this.SCD_ALARM_GENERALFormdivs_0Config.removeable = false;
     this.SCD_ALARM_GENERALFormdivs_0Config.updateable = false;
     this.SCD_ALARM_GENERALFormdivs_0Config.navigable = false;
     this.SCD_ALARM_GENERALFormdivs_0Config.insertable = false;
   }
   this.SCD_ALARM_COLUMNSGrid_1Config = new componentConfigDef();
   this.SCD_ALARM_COLUMNSGrid_1Config.title = this.starServices.getNLS([],"scd_alarm_and_event_log_viewer_properties.scd_alarm_and_event_log_viewer_properties.compsTitleID2","Alarm Columns");
   this.SCD_ALARM_COLUMNSGrid_1Config.isChild = true;
   this.SCD_ALARM_COLUMNSGrid_1Config.masterSelector = 'app-scd-alarm-and-event-log-viewer-properties';
   this.SCD_ALARM_COLUMNSGrid_1Config.showToolBar = !this.visibleOK_BTNS; 
   if (typeof this['steps']  !== 'undefined') {
     this.SCD_ALARM_COLUMNSGrid_1Config.navigable = false;
     //this.SCD_ALARM_COLUMNSGrid_1Config.insertable = true;
     //this.SCD_ALARM_COLUMNSGrid_1Config.removeable = true;
   }
   this.SCD_ALARM_DISPLAY_FILTERSGrid_2Config = new componentConfigDef();
   this.SCD_ALARM_DISPLAY_FILTERSGrid_2Config.title = this.starServices.getNLS([],"scd_alarm_and_event_log_viewer_properties.scd_alarm_and_event_log_viewer_properties.compsTitleID3","Alarm Display Filters");
   this.SCD_ALARM_DISPLAY_FILTERSGrid_2Config.isChild = true;
   this.SCD_ALARM_DISPLAY_FILTERSGrid_2Config.masterSelector = 'app-scd-alarm-and-event-log-viewer-properties';
   this.SCD_ALARM_DISPLAY_FILTERSGrid_2Config.showToolBar = !this.visibleOK_BTNS; 
   if (typeof this['steps']  !== 'undefined') {
     this.SCD_ALARM_DISPLAY_FILTERSGrid_2Config.navigable = false;
     //this.SCD_ALARM_DISPLAY_FILTERSGrid_2Config.insertable = true;
     //this.SCD_ALARM_DISPLAY_FILTERSGrid_2Config.removeable = true;
   }
   this.SCD_ALARM_STATESGrid_3Config = new componentConfigDef();
   this.SCD_ALARM_STATESGrid_3Config.title = this.starServices.getNLS([],"scd_alarm_and_event_log_viewer_properties.scd_alarm_and_event_log_viewer_properties.compsTitleID4","Alarm States");
   this.SCD_ALARM_STATESGrid_3Config.isChild = true;
   this.SCD_ALARM_STATESGrid_3Config.masterSelector = 'app-scd-alarm-and-event-log-viewer-properties';
   this.SCD_ALARM_STATESGrid_3Config.showToolBar = !this.visibleOK_BTNS; 
   if (typeof this['steps']  !== 'undefined') {
     this.SCD_ALARM_STATESGrid_3Config.navigable = false;
     //this.SCD_ALARM_STATESGrid_3Config.insertable = true;
     //this.SCD_ALARM_STATESGrid_3Config.removeable = true;
   }
   this.SCD_ALARM_SORTForm_4Config = new componentConfigDef();
   this.SCD_ALARM_SORTForm_4Config.title = this.starServices.getNLS([],"scd_alarm_and_event_log_viewer_properties.scd_alarm_and_event_log_viewer_properties.compsTitleID5","Alarm Sort");
   this.SCD_ALARM_SORTForm_4Config.isChild = true;
   this.SCD_ALARM_SORTForm_4Config.masterSelector = 'app-scd-alarm-and-event-log-viewer-properties';
   this.SCD_ALARM_SORTForm_4Config.showToolBar = !this.visibleOK_BTNS; 
   if (typeof this['steps']  !== 'undefined') {
     this.SCD_ALARM_SORTForm_4Config.navigable = false;
     //this.SCD_ALARM_SORTForm_4Config.insertable = true;
     //this.SCD_ALARM_SORTForm_4Config.removeable = true;
   }
  }
  public ngOnDestroy(): void {
     // Unsubscribe the event once not needed.
     if (typeof this.componentConfigChangeEvent !== 'undefined') this.componentConfigChangeEvent.unsubscribe();
  }
  public readCompletedHandler( form_SCD_ALARM_GENERAL) {
    let masterKeyArr = [form_SCD_ALARM_GENERAL.GENERAL_ID,form_SCD_ALARM_GENERAL.APP_ID,form_SCD_ALARM_GENERAL.DISPLAY_ID,form_SCD_ALARM_GENERAL.SHAPE_ID];
    let masterKeyNameArr = ["GENERAL_ID","APP_ID","DISPLAY_ID","SHAPE_ID"];
     if (this.isSearchScreen == true) 
	  {
    	this.SCD_ALARM_COLUMNSGrid_1Config = new componentConfigDef();
    	this.SCD_ALARM_COLUMNSGrid_1Config.formattedWhere  = form_SCD_ALARM_GENERAL;
    	this.SCD_ALARM_DISPLAY_FILTERSGrid_2Config = new componentConfigDef();
    	this.SCD_ALARM_DISPLAY_FILTERSGrid_2Config.formattedWhere  = form_SCD_ALARM_GENERAL;
    	this.SCD_ALARM_STATESGrid_3Config = new componentConfigDef();
    	this.SCD_ALARM_STATESGrid_3Config.formattedWhere  = form_SCD_ALARM_GENERAL;
    	this.SCD_ALARM_SORTForm_4Config = new componentConfigDef();
    	this.SCD_ALARM_SORTForm_4Config.formattedWhere  = form_SCD_ALARM_GENERAL;
    	return;
	  }
    //this.grid_1_SCD_ALARM_COLUMNS = new scdalarmColumnsScdAclAlarmColumns2();
    //for (let i = 0; i< masterKeyNameArr.length; i++){
    //   this.grid_1_SCD_ALARM_COLUMNS[masterKeyNameArr[i]] = masterKeyArr[i];
    //}
    this.SCD_ALARM_COLUMNSGrid_1Config = new componentConfigDef();
    this.SCD_ALARM_COLUMNSGrid_1Config.masterKeyArr =  [form_SCD_ALARM_GENERAL.GENERAL_ID,form_SCD_ALARM_GENERAL.APP_ID,form_SCD_ALARM_GENERAL.DISPLAY_ID,form_SCD_ALARM_GENERAL.SHAPE_ID];
    this.SCD_ALARM_COLUMNSGrid_1Config.masterKeyNameArr =  ["GENERAL_ID","APP_ID","DISPLAY_ID","SHAPE_ID"];
    this.SCD_ALARM_COLUMNSGrid_1Config.masterReadCompleted = true;
   if (typeof this['steps'] !== 'undefined') {
     this.SCD_ALARM_COLUMNSGrid_1Config.queryable = false;
     //this.SCD_ALARM_COLUMNSGrid_1Config.removeable = true;
     //this.SCD_ALARM_COLUMNSGrid_1Config.updateable = true;
   }
    //this.grid_2_SCD_ALARM_DISPLAY_FILTERS = new scdalarmDisplayFiltersScdAdflAlarmDisplayFilters3();
    //for (let i = 0; i< masterKeyNameArr.length; i++){
    //   this.grid_2_SCD_ALARM_DISPLAY_FILTERS[masterKeyNameArr[i]] = masterKeyArr[i];
    //}
    this.SCD_ALARM_DISPLAY_FILTERSGrid_2Config = new componentConfigDef();
    this.SCD_ALARM_DISPLAY_FILTERSGrid_2Config.masterKeyArr =  [form_SCD_ALARM_GENERAL.GENERAL_ID,form_SCD_ALARM_GENERAL.APP_ID,form_SCD_ALARM_GENERAL.DISPLAY_ID,form_SCD_ALARM_GENERAL.SHAPE_ID];
    this.SCD_ALARM_DISPLAY_FILTERSGrid_2Config.masterKeyNameArr =  ["GENERAL_ID","APP_ID","DISPLAY_ID","SHAPE_ID"];
    this.SCD_ALARM_DISPLAY_FILTERSGrid_2Config.masterReadCompleted = true;
   if (typeof this['steps'] !== 'undefined') {
     this.SCD_ALARM_DISPLAY_FILTERSGrid_2Config.queryable = false;
     //this.SCD_ALARM_DISPLAY_FILTERSGrid_2Config.removeable = true;
     //this.SCD_ALARM_DISPLAY_FILTERSGrid_2Config.updateable = true;
   }
    //this.grid_3_SCD_ALARM_STATES = new scdalarmStatesScdAslAlarmStates4();
    //for (let i = 0; i< masterKeyNameArr.length; i++){
    //   this.grid_3_SCD_ALARM_STATES[masterKeyNameArr[i]] = masterKeyArr[i];
    //}
    this.SCD_ALARM_STATESGrid_3Config = new componentConfigDef();
    this.SCD_ALARM_STATESGrid_3Config.masterKeyArr =  [form_SCD_ALARM_GENERAL.GENERAL_ID,form_SCD_ALARM_GENERAL.APP_ID,form_SCD_ALARM_GENERAL.DISPLAY_ID,form_SCD_ALARM_GENERAL.SHAPE_ID];
    this.SCD_ALARM_STATESGrid_3Config.masterKeyNameArr =  ["GENERAL_ID","APP_ID","DISPLAY_ID","SHAPE_ID"];
    this.SCD_ALARM_STATESGrid_3Config.masterReadCompleted = true;
   if (typeof this['steps'] !== 'undefined') {
     this.SCD_ALARM_STATESGrid_3Config.queryable = false;
     //this.SCD_ALARM_STATESGrid_3Config.removeable = true;
     //this.SCD_ALARM_STATESGrid_3Config.updateable = true;
   }
    //this.form_4_SCD_ALARM_SORT = new scdalarmSortScdAaespAlarmSort();
    //for (let i = 0; i< masterKeyNameArr.length; i++){
    //   this.form_4_SCD_ALARM_SORT[masterKeyNameArr[i]] = masterKeyArr[i];
    //}
    this.SCD_ALARM_SORTForm_4Config = new componentConfigDef();
    this.SCD_ALARM_SORTForm_4Config.masterKeyArr =  [form_SCD_ALARM_GENERAL.GENERAL_ID,form_SCD_ALARM_GENERAL.APP_ID,form_SCD_ALARM_GENERAL.DISPLAY_ID,form_SCD_ALARM_GENERAL.SHAPE_ID];
    this.SCD_ALARM_SORTForm_4Config.masterKeyNameArr =  ["GENERAL_ID","APP_ID","DISPLAY_ID","SHAPE_ID"];
    this.SCD_ALARM_SORTForm_4Config.masterReadCompleted = true;
   if (typeof this['steps'] !== 'undefined') {
     this.SCD_ALARM_SORTForm_4Config.queryable = false;
     //this.SCD_ALARM_SORTForm_4Config.removeable = true;
     //this.SCD_ALARM_SORTForm_4Config.updateable = true;
   }
  }
  async clearCompletedHandler( form_SCD_ALARM_GENERAL) {
     await this.starServices.sleep(200);
    this.SCD_ALARM_COLUMNSGrid_1Config = new componentConfigDef();
     await this.starServices.sleep(200);
    this.SCD_ALARM_DISPLAY_FILTERSGrid_2Config = new componentConfigDef();
     await this.starServices.sleep(200);
    this.SCD_ALARM_STATESGrid_3Config = new componentConfigDef();
     await this.starServices.sleep(200);
    this.SCD_ALARM_SORTForm_4Config = new componentConfigDef();
  }
  public keyNameArr = ["GENERAL_ID","APP_ID","DISPLAY_ID","SHAPE_ID"];

  public callreadSavedMaster( ) {
    let masterTable = 'SCD_ALARM_GENERAL' 
     }
  public sendToMaster(componentConfig){ 
  	this.SCD_ALARM_GENERALFormdivs_0Config = new componentConfigDef(); 
  	this.SCD_ALARM_GENERALFormdivs_0Config = componentConfig; 
 } 
  public sendToOrder(componentConfig){  
  	this.DSP_ORDERSFormConfig = new componentConfigDef();  
  	this.DSP_ORDERSFormConfig = componentConfig;  
    }  
  public closeApproveReject() {
      this.showApproveReject = false;
    }
  public sendToChildren(componentConfig, pageNo){ 
   if ( (pageNo + 1) == 2){
  	this.SCD_ALARM_COLUMNSGrid_1Config = new componentConfigDef(); 
  	this.SCD_ALARM_COLUMNSGrid_1Config = componentConfig; 
   }
   if ( (pageNo + 1) == 3){
  	this.SCD_ALARM_DISPLAY_FILTERSGrid_2Config = new componentConfigDef(); 
  	this.SCD_ALARM_DISPLAY_FILTERSGrid_2Config = componentConfig; 
   }
   if ( (pageNo + 1) == 4){
  	this.SCD_ALARM_STATESGrid_3Config = new componentConfigDef(); 
  	this.SCD_ALARM_STATESGrid_3Config = componentConfig; 
   }
   if ( (pageNo + 1) == 5){
  	this.SCD_ALARM_SORTForm_4Config = new componentConfigDef(); 
  	this.SCD_ALARM_SORTForm_4Config = componentConfig; 
   }
 } 
  public saveCompletedHandler( form_SCD_ALARM_GENERAL) {
 let key:any = [form_SCD_ALARM_GENERAL.GENERAL_ID,form_SCD_ALARM_GENERAL.APP_ID,form_SCD_ALARM_GENERAL.DISPLAY_ID,form_SCD_ALARM_GENERAL.SHAPE_ID]; 
 if ( key != '') { 
    this.SCD_ALARM_COLUMNSGrid_1Config = new componentConfigDef();
    this.SCD_ALARM_COLUMNSGrid_1Config.masterSaved = form_SCD_ALARM_GENERAL;
    this.SCD_ALARM_COLUMNSGrid_1Config.masterKeyArr =  [form_SCD_ALARM_GENERAL.GENERAL_ID,form_SCD_ALARM_GENERAL.APP_ID,form_SCD_ALARM_GENERAL.DISPLAY_ID,form_SCD_ALARM_GENERAL.SHAPE_ID];
    this.SCD_ALARM_COLUMNSGrid_1Config.masterKeyNameArr =  ["GENERAL_ID","APP_ID","DISPLAY_ID","SHAPE_ID"];
  
    this.SCD_ALARM_DISPLAY_FILTERSGrid_2Config = new componentConfigDef();
    this.SCD_ALARM_DISPLAY_FILTERSGrid_2Config.masterSaved = form_SCD_ALARM_GENERAL;
    this.SCD_ALARM_DISPLAY_FILTERSGrid_2Config.masterKeyArr =  [form_SCD_ALARM_GENERAL.GENERAL_ID,form_SCD_ALARM_GENERAL.APP_ID,form_SCD_ALARM_GENERAL.DISPLAY_ID,form_SCD_ALARM_GENERAL.SHAPE_ID];
    this.SCD_ALARM_DISPLAY_FILTERSGrid_2Config.masterKeyNameArr =  ["GENERAL_ID","APP_ID","DISPLAY_ID","SHAPE_ID"];
  
    this.SCD_ALARM_STATESGrid_3Config = new componentConfigDef();
    this.SCD_ALARM_STATESGrid_3Config.masterSaved = form_SCD_ALARM_GENERAL;
    this.SCD_ALARM_STATESGrid_3Config.masterKeyArr =  [form_SCD_ALARM_GENERAL.GENERAL_ID,form_SCD_ALARM_GENERAL.APP_ID,form_SCD_ALARM_GENERAL.DISPLAY_ID,form_SCD_ALARM_GENERAL.SHAPE_ID];
    this.SCD_ALARM_STATESGrid_3Config.masterKeyNameArr =  ["GENERAL_ID","APP_ID","DISPLAY_ID","SHAPE_ID"];
  
    this.SCD_ALARM_SORTForm_4Config = new componentConfigDef();
    this.SCD_ALARM_SORTForm_4Config.masterSaved = form_SCD_ALARM_GENERAL;
    this.SCD_ALARM_SORTForm_4Config.masterKeyArr =  [form_SCD_ALARM_GENERAL.GENERAL_ID,form_SCD_ALARM_GENERAL.APP_ID,form_SCD_ALARM_GENERAL.DISPLAY_ID,form_SCD_ALARM_GENERAL.SHAPE_ID];
    this.SCD_ALARM_SORTForm_4Config.masterKeyNameArr =  ["GENERAL_ID","APP_ID","DISPLAY_ID","SHAPE_ID"];
  
    this.saveTriggerOutput.emit(form_SCD_ALARM_GENERAL);
  } 
      }
  public saveCompletedHandler2( event) {
      this.saveTriggerOutput.emit(event)
  }
  public saveTriggerHandler(event){
        }
  @Output() setComponentConfig_Output: EventEmitter<any> = new EventEmitter();
  @Input() public set detail_Input(form: any) {
    if (typeof form !== "undefined")
    {
        this.formdivs_0_SCD_ALARM_GENERAL = form;
    }
  }

  public validForms =[true,true,true,true,true,true,true]; //length should be number of components
  public formValidationChangedMD(e,fornNum) { //check if any component is not valid and emit screen status
    this.validForms[fornNum-1] = e;
    let formValidation = true;
    for (let i =0; i< this.validForms.length; i++) {
      formValidation = formValidation && this.validForms[i];
    }
    this.formValidationChangedOutput.emit(formValidation)
  }
  public onComponentConfig_Output(ComponentConfig)
  {
  if (typeof ComponentConfig !== 'undefined'){
    this.setComponentConfig_Output.emit(ComponentConfig);
    if (ComponentConfig.hideComponents != null) { 
      for (let i=0; i < ComponentConfig.hideComponents.length;i++){
        let comp = ComponentConfig.hideComponents[i];
        let comp_name = 'hide_comp_' + comp;
        this[comp_name] = !this[comp_name];
      }
    }
  }
}
  @Input() public set setComponentConfig_Input(ComponentConfig: componentConfigDef) {
    this.handleComponentConfig(ComponentConfig);
    } 
    public setSteps(object){
    if (typeof object.steps != 'undefined'){
    		let newSteps=[];
    		for (let i =object.showafter; i<object.steps.length;i++){
    		let key = 'etr_ent_tem_wf.etr_ent_tem_wf.compsTitleID' + (i+ 1);
    		let defaultVal = object.steps[i].label;
    		let val = object.starServices.getNLS([],key ,defaultVal);
    		let rec = {
    	 		label : val,
    	 		compNo : object.steps[i].compNo
    		}
    		console.log('setSteps:',key, val,object.steps[i] ,rec )
    		newSteps.push(rec);
    		}
    	object.steps = newSteps;
   	 }
    }
    public handleComponentConfig(ComponentConfig:any) {
    if (this.paramConfig.DEBUG_FLAG) console.log("ComponentConfig:ScdAlarmAndEventLogViewerPropertiesComponent:",ComponentConfig);
    if (typeof ComponentConfig !== "undefined"){
       this.componentConfig = this.starServices.setComponentConfig(ComponentConfig, this.componentConfig  );
       if (ComponentConfig.languageChanged != null) { 
           setTimeout(() => {
             this.SCD_ALARM_GENERALFormdivs_0Config = new componentConfigDef();
             this.SCD_ALARM_GENERALFormdivs_0Config.languageChanged = ComponentConfig.languageChanged;
             this.SCD_ALARM_GENERALFormdivs_0Config.title = this.starServices.getNLS([],"scd_alarm_and_event_log_viewer_properties.scd_alarm_and_event_log_viewer_properties.compsTitleID1","Alarm General");
             this.SCD_ALARM_COLUMNSGrid_1Config = new componentConfigDef();
             this.SCD_ALARM_COLUMNSGrid_1Config.languageChanged = ComponentConfig.languageChanged;
             this.SCD_ALARM_COLUMNSGrid_1Config.title = this.starServices.getNLS([],"scd_alarm_and_event_log_viewer_properties.scd_alarm_and_event_log_viewer_properties.compsTitleID2","Alarm Columns");
             this.SCD_ALARM_DISPLAY_FILTERSGrid_2Config = new componentConfigDef();
             this.SCD_ALARM_DISPLAY_FILTERSGrid_2Config.languageChanged = ComponentConfig.languageChanged;
             this.SCD_ALARM_DISPLAY_FILTERSGrid_2Config.title = this.starServices.getNLS([],"scd_alarm_and_event_log_viewer_properties.scd_alarm_and_event_log_viewer_properties.compsTitleID3","Alarm Display Filters");
             this.SCD_ALARM_STATESGrid_3Config = new componentConfigDef();
             this.SCD_ALARM_STATESGrid_3Config.languageChanged = ComponentConfig.languageChanged;
             this.SCD_ALARM_STATESGrid_3Config.title = this.starServices.getNLS([],"scd_alarm_and_event_log_viewer_properties.scd_alarm_and_event_log_viewer_properties.compsTitleID4","Alarm States");
             this.SCD_ALARM_SORTForm_4Config = new componentConfigDef();
             this.SCD_ALARM_SORTForm_4Config.languageChanged = ComponentConfig.languageChanged;
             this.SCD_ALARM_SORTForm_4Config.title = this.starServices.getNLS([],"scd_alarm_and_event_log_viewer_properties.scd_alarm_and_event_log_viewer_properties.compsTitleID5","Alarm Sort");
           this.setSteps(this);
           }, 500);
       }
  
       this.SCD_ALARM_GENERALFormdivs_0Config = new componentConfigDef();
       this.SCD_ALARM_COLUMNSGrid_1Config = new componentConfigDef();
       this.SCD_ALARM_DISPLAY_FILTERSGrid_2Config = new componentConfigDef();
       this.SCD_ALARM_STATESGrid_3Config = new componentConfigDef();
       this.SCD_ALARM_SORTForm_4Config = new componentConfigDef();
   		
       if (ComponentConfig.masterParams != null) {
              this.SCD_ALARM_GENERALFormdivs_0Config.masterParams = ComponentConfig.masterParams;
              this.SCD_ALARM_COLUMNSGrid_1Config.masterParams = ComponentConfig.masterParams;
              this.SCD_ALARM_DISPLAY_FILTERSGrid_2Config.masterParams = ComponentConfig.masterParams;
              this.SCD_ALARM_STATESGrid_3Config.masterParams = ComponentConfig.masterParams;
              this.SCD_ALARM_SORTForm_4Config.masterParams = ComponentConfig.masterParams;
   		
       }
       if (ComponentConfig.showToolBar != null) {
              this.SCD_ALARM_GENERALFormdivs_0Config.showToolBar = ComponentConfig.showToolBar;
              this.SCD_ALARM_COLUMNSGrid_1Config.showToolBar = ComponentConfig.showToolBar;
              this.SCD_ALARM_DISPLAY_FILTERSGrid_2Config.showToolBar = ComponentConfig.showToolBar;
              this.SCD_ALARM_STATESGrid_3Config.showToolBar = ComponentConfig.showToolBar;
              this.SCD_ALARM_SORTForm_4Config.showToolBar = ComponentConfig.showToolBar;
       }
      if (ComponentConfig.masterSaved != null)//here1
      {
       this.SCD_ALARM_GENERALFormdivs_0Config.masterSaved = ComponentConfig.masterSaved;
      }
      if (ComponentConfig.newRec != null)
      {
       this.SCD_ALARM_GENERALFormdivs_0Config.newRec = ComponentConfig.newRec;
       this.SCD_ALARM_COLUMNSGrid_1Config.newRec = ComponentConfig.newRec;
       this.SCD_ALARM_DISPLAY_FILTERSGrid_2Config.newRec = ComponentConfig.newRec;
       this.SCD_ALARM_STATESGrid_3Config.newRec = ComponentConfig.newRec;
       this.SCD_ALARM_SORTForm_4Config.newRec = ComponentConfig.newRec;
      }
      if (ComponentConfig.clearScreen != null)
      {
       this.SCD_ALARM_GENERALFormdivs_0Config.clearScreen = ComponentConfig.clearScreen;
       this.SCD_ALARM_COLUMNSGrid_1Config.clearScreen = ComponentConfig.clearScreen;
       this.SCD_ALARM_DISPLAY_FILTERSGrid_2Config.clearScreen = ComponentConfig.clearScreen;
       this.SCD_ALARM_STATESGrid_3Config.clearScreen = ComponentConfig.clearScreen;
       this.SCD_ALARM_SORTForm_4Config.clearScreen = ComponentConfig.clearScreen;
	   }
      if ((ComponentConfig.masterKeyArr != null) && (ComponentConfig.masterKeyNameArr != null) )
      {
       if ((ComponentConfig.masterKeyArr.length != 0) && (ComponentConfig.masterKeyNameArr.length != 0) )
       {
         this.SCD_ALARM_GENERALFormdivs_0Config.masterKeyArr = ComponentConfig.masterKeyArr;
         this.SCD_ALARM_GENERALFormdivs_0Config.masterKeyNameArr = ComponentConfig.masterKeyNameArr;
         if (ComponentConfig.masterReadCompleted != null) 
         {
             this.SCD_ALARM_GENERALFormdivs_0Config.masterReadCompleted = ComponentConfig.masterReadCompleted;
          }
         this.SCD_ALARM_COLUMNSGrid_1Config.masterKeyArr = ComponentConfig.masterKeyArr;
         this.SCD_ALARM_COLUMNSGrid_1Config.masterKeyNameArr = ComponentConfig.masterKeyNameArr;
         if (ComponentConfig.masterReadCompleted != null) 
         {
             this.SCD_ALARM_COLUMNSGrid_1Config.masterReadCompleted = ComponentConfig.masterReadCompleted;
          }
         this.SCD_ALARM_DISPLAY_FILTERSGrid_2Config.masterKeyArr = ComponentConfig.masterKeyArr;
         this.SCD_ALARM_DISPLAY_FILTERSGrid_2Config.masterKeyNameArr = ComponentConfig.masterKeyNameArr;
         if (ComponentConfig.masterReadCompleted != null) 
         {
             this.SCD_ALARM_DISPLAY_FILTERSGrid_2Config.masterReadCompleted = ComponentConfig.masterReadCompleted;
          }
         this.SCD_ALARM_STATESGrid_3Config.masterKeyArr = ComponentConfig.masterKeyArr;
         this.SCD_ALARM_STATESGrid_3Config.masterKeyNameArr = ComponentConfig.masterKeyNameArr;
         if (ComponentConfig.masterReadCompleted != null) 
         {
             this.SCD_ALARM_STATESGrid_3Config.masterReadCompleted = ComponentConfig.masterReadCompleted;
          }
         this.SCD_ALARM_SORTForm_4Config.masterKeyArr = ComponentConfig.masterKeyArr;
         this.SCD_ALARM_SORTForm_4Config.masterKeyNameArr = ComponentConfig.masterKeyNameArr;
         if (ComponentConfig.masterReadCompleted != null) 
         {
             this.SCD_ALARM_SORTForm_4Config.masterReadCompleted = ComponentConfig.masterReadCompleted;
          }
       }
      }
    }
  }
   public grid_1_SCD_ALARM_COLUMNSOpened = false;
  public  grid_1_SCD_ALARM_COLUMNSClose() { 
    this.grid_1_SCD_ALARM_COLUMNSOpened = false;  
  }
  public  grid_1_SCD_ALARM_COLUMNSOpen() { 
    this.grid_1_SCD_ALARM_COLUMNSOpened = true;  
  }
  
  public grid_2_SCD_ALARM_DISPLAY_FILTERSOpened = false;
  public  grid_2_SCD_ALARM_DISPLAY_FILTERSClose() { 
    this.grid_2_SCD_ALARM_DISPLAY_FILTERSOpened = false;  
  }
  public  grid_2_SCD_ALARM_DISPLAY_FILTERSOpen() { 
    this.grid_2_SCD_ALARM_DISPLAY_FILTERSOpened = true;  
  }
  
  public grid_3_SCD_ALARM_STATESOpened = false;
  public  grid_3_SCD_ALARM_STATESClose() { 
    this.grid_3_SCD_ALARM_STATESOpened = false;  
  }
  public  grid_3_SCD_ALARM_STATESOpen() { 
    this.grid_3_SCD_ALARM_STATESOpened = true;  
  }
  
  public form_4_SCD_ALARM_SORTOpened = false;
  public  form_4_SCD_ALARM_SORTClose() { 
    this.form_4_SCD_ALARM_SORTOpened = false;  
  }
  public  form_4_SCD_ALARM_SORTOpen() { 
    this.form_4_SCD_ALARM_SORTOpened = true;  
  }
  
 
	public ON_CLICK_OK(event){
    console.log('ON_CLICK_OK: Called');
		this.componentConfig = new componentConfigDef(); 
		this.componentConfig.masterSaved = true;
		this.handleComponentConfig(this.componentConfig); 
    ///
    setTimeout(() => {
      const config = new componentConfigDef();
      config.parentClose = true;  // Should be Close
      // Emit through setComponentConfig_Output
      this.setComponentConfig_Output.emit(config);
     }, 300);
    
	}
	
	public ON_CLICK_CANCEL(event: any): void {
  console.log('ON_CLICK_CANCEL: Called');
  
  // Create a new componentConfig with parentClose = true
  const config = new componentConfigDef();
  config.parentClose = true;
  config.eventFrom = this.compSelector;
  config.eventTo = ['any'];
  
  // Emit through setComponentConfig_Output
  this.setComponentConfig_Output.emit(config);
  
  console.log('ON_CLICK_CANCEL: parentClose emitted to parent');
}
	public  help_1Config : componentConfigDef;
  	public helpOpened = false;
	public ON_CLICK_HELP(event){
    	this.helpOpened = true;
	}
	public visibleOK_BTNS = false;
	
  }
