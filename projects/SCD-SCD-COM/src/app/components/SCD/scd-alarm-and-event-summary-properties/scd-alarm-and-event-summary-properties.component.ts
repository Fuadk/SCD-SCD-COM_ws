import { Component, OnInit, Output,Input, EventEmitter, HostListener } from '@angular/core';
import {  scdshapeScdTpCommonScreen  ,scdalarmAppearanceScdAadAlarmAppearance1  ,scdalarmColumnsScdAclAlarmColumns  ,scdalarmScdAlarmEventSubscriptionsProperties  ,scdalarmDisplayFiltersScdAdflAlarmDisplayFilters4  ,scdalarmSortScdScdAlarmSort  ,scdalarmScdAlarmStatesProperties  ,scdalarmBehaviorScdAbdAlarmBehavior  , componentConfigDef} from '@modeldir/model';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { Subscription } from 'rxjs';
import { starServices } from 'starlib';
import { Starlib1 } from '../../Starlib1';
import { Router } from '@angular/router';
import { StarNotifyService } from '../../../services/starnotification.service';
import { TabAlignment } from '@progress/kendo-angular-layout';
declare function getParamConfig():any;

@Component({

  selector: 'app-scd-alarm-and-event-summary-properties',
  templateUrl: './scd-alarm-and-event-summary-properties.component.html',
  styleUrls: ['./scd-alarm-and-event-summary-properties.component.scss'],
  standalone: false
})
export class ScdAlarmAndEventSummaryPropertiesComponent implements OnInit {
  @Output() saveTriggerOutput: EventEmitter<any> = new EventEmitter();
  @Output() formValidationChangedOutput: EventEmitter<boolean> = new EventEmitter();
  constructor(public router: Router,public responsive: BreakpointObserver, private starNotify: StarNotifyService, public starServices: starServices, public starlib1: Starlib1) {
   this.router = router;
  this.title =  this.starServices.getNLS([],"scd_alarm_and_event_summary_properties.scd_alarm_and_event_summary_properties.component_title","");
    this.componentConfig = new componentConfigDef();
    this.paramConfig = getParamConfig();
  }
  public showToolBar = false;
  public paramConfig; 
  public title = '';
  public isPhonePortrait = false;
  public customerFacing = false;
  public isSearchScreen = false;
  public routineName = "scd_alarm_and_event_summary_properties";
  public alignment: TabAlignment = 'start';
  public selectedTab = 2;
  public masterParams;
  public gap: any = {
  	rows: 1,
  	columns: 1,
    };

  public componentConfig: componentConfigDef;

  public form_0_SCD_SHAPE : scdshapeScdTpCommonScreen;
  public formdivs_1_SCD_ALARM_APPEARANCE : scdalarmAppearanceScdAadAlarmAppearance1;
  public grid_2_SCD_ALARM_COLUMNS : scdalarmColumnsScdAclAlarmColumns;
  public formtabs_3_SCD_ALARM : scdalarmScdAlarmEventSubscriptionsProperties;
  public grid_4_SCD_ALARM_DISPLAY_FILTERS : scdalarmDisplayFiltersScdAdflAlarmDisplayFilters4;
  public form_5_SCD_ALARM_SORT : scdalarmSortScdScdAlarmSort;
  public formtabs_6_SCD_ALARM : scdalarmScdAlarmStatesProperties;
  public form_7_SCD_ALARM_BEHAVIOR : scdalarmBehaviorScdAbdAlarmBehavior;
  public  SCD_SHAPEForm_0Config : componentConfigDef;
  public  hide_comp_1 = false
  public  SCD_ALARM_APPEARANCEFormdivs_1Config : componentConfigDef;
  public  hide_comp_2 = false
  public  SCD_ALARM_COLUMNSGrid_2Config : componentConfigDef;
  public  hide_comp_3 = false
  public  SCD_ALARMFormtabs_3Config : componentConfigDef;
  public  hide_comp_4 = false
  public  SCD_ALARM_DISPLAY_FILTERSGrid_4Config : componentConfigDef;
  public  hide_comp_5 = false
  public  SCD_ALARM_SORTForm_5Config : componentConfigDef;
  public  hide_comp_6 = false
  public  SCD_ALARMFormtabs_6Config : componentConfigDef;
  public  hide_comp_7 = false
  public  SCD_ALARM_BEHAVIORForm_7Config : componentConfigDef;
  public  hide_comp_8 = false
  public PDFfileName = this.title + ".PDF";
  public routineAuth = "ScdAlarmAndEventSummaryProperties";

  public ngAfterViewInit() {
    this.starServices.setRTL();
  }
  private componentConfigChangeEvent!: Subscription;
  public compSelector = 'app-scd-alarm-and-event-summary-properties';
  public masterKeyNameArr = ["SHAPE_ID","DISPLAY_ID"];

  public masterINSERT = 'INSERT_SCD_SHAPE';
  public masterDataSource = 'SCD_SHAPE';
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
   this.SCD_SHAPEForm_0Config = new componentConfigDef();
   this.SCD_SHAPEForm_0Config.title = this.starServices.getNLS([],"scd_alarm_and_event_summary_properties.scd_alarm_and_event_summary_properties.compsTitleID1","Common");
   this.SCD_SHAPEForm_0Config.isMaster = true;
   this.SCD_SHAPEForm_0Config.isSearchScreen = this.isSearchScreen;
	if (this.visibleOK_BTNS) 
   	this.SCD_SHAPEForm_0Config.showToolBar = !this.visibleOK_BTNS; 
   if (typeof this['steps']  !== 'undefined') {
     this.SCD_SHAPEForm_0Config.queryable = false;
     this.SCD_SHAPEForm_0Config.removeable = false;
     this.SCD_SHAPEForm_0Config.updateable = false;
     this.SCD_SHAPEForm_0Config.navigable = false;
     this.SCD_SHAPEForm_0Config.insertable = false;
   }
   this.SCD_ALARM_APPEARANCEFormdivs_1Config = new componentConfigDef();
   this.SCD_ALARM_APPEARANCEFormdivs_1Config.title = this.starServices.getNLS([],"scd_alarm_and_event_summary_properties.scd_alarm_and_event_summary_properties.compsTitleID2","Appearance");
   this.SCD_ALARM_APPEARANCEFormdivs_1Config.isChild = true;
   this.SCD_ALARM_APPEARANCEFormdivs_1Config.masterSelector = 'app-scd-alarm-and-event-summary-properties';
   this.SCD_ALARM_APPEARANCEFormdivs_1Config.showToolBar = !this.visibleOK_BTNS; 
   if (typeof this['steps']  !== 'undefined') {
     this.SCD_ALARM_APPEARANCEFormdivs_1Config.navigable = false;
     //this.SCD_ALARM_APPEARANCEFormdivs_1Config.insertable = true;
     //this.SCD_ALARM_APPEARANCEFormdivs_1Config.removeable = true;
   }
   this.SCD_ALARM_COLUMNSGrid_2Config = new componentConfigDef();
   this.SCD_ALARM_COLUMNSGrid_2Config.title = this.starServices.getNLS([],"scd_alarm_and_event_summary_properties.scd_alarm_and_event_summary_properties.compsTitleID3","Columns");
   this.SCD_ALARM_COLUMNSGrid_2Config.isChild = true;
   this.SCD_ALARM_COLUMNSGrid_2Config.masterSelector = 'app-scd-alarm-and-event-summary-properties';
   this.SCD_ALARM_COLUMNSGrid_2Config.showToolBar = !this.visibleOK_BTNS; 
   if (typeof this['steps']  !== 'undefined') {
     this.SCD_ALARM_COLUMNSGrid_2Config.navigable = false;
     //this.SCD_ALARM_COLUMNSGrid_2Config.insertable = true;
     //this.SCD_ALARM_COLUMNSGrid_2Config.removeable = true;
   }
   this.SCD_ALARMFormtabs_3Config = new componentConfigDef();
   this.SCD_ALARMFormtabs_3Config.title = this.starServices.getNLS([],"scd_alarm_and_event_summary_properties.scd_alarm_and_event_summary_properties.compsTitleID4","Event Subscriptions");
   this.SCD_ALARMFormtabs_3Config.isChild = true;
   this.SCD_ALARMFormtabs_3Config.masterSelector = 'app-scd-alarm-and-event-summary-properties';
   this.SCD_ALARMFormtabs_3Config.showToolBar = !this.visibleOK_BTNS; 
   if (typeof this['steps']  !== 'undefined') {
     this.SCD_ALARMFormtabs_3Config.navigable = false;
     //this.SCD_ALARMFormtabs_3Config.insertable = true;
     //this.SCD_ALARMFormtabs_3Config.removeable = true;
   }
   this.SCD_ALARM_DISPLAY_FILTERSGrid_4Config = new componentConfigDef();
   this.SCD_ALARM_DISPLAY_FILTERSGrid_4Config.title = this.starServices.getNLS([],"scd_alarm_and_event_summary_properties.scd_alarm_and_event_summary_properties.compsTitleID5","Display Filters");
   this.SCD_ALARM_DISPLAY_FILTERSGrid_4Config.isChild = true;
   this.SCD_ALARM_DISPLAY_FILTERSGrid_4Config.masterSelector = 'app-scd-alarm-and-event-summary-properties';
   this.SCD_ALARM_DISPLAY_FILTERSGrid_4Config.showToolBar = !this.visibleOK_BTNS; 
   if (typeof this['steps']  !== 'undefined') {
     this.SCD_ALARM_DISPLAY_FILTERSGrid_4Config.navigable = false;
     //this.SCD_ALARM_DISPLAY_FILTERSGrid_4Config.insertable = true;
     //this.SCD_ALARM_DISPLAY_FILTERSGrid_4Config.removeable = true;
   }
   this.SCD_ALARM_SORTForm_5Config = new componentConfigDef();
   this.SCD_ALARM_SORTForm_5Config.title = this.starServices.getNLS([],"scd_alarm_and_event_summary_properties.scd_alarm_and_event_summary_properties.compsTitleID6","Sort");
   this.SCD_ALARM_SORTForm_5Config.isChild = true;
   this.SCD_ALARM_SORTForm_5Config.masterSelector = 'app-scd-alarm-and-event-summary-properties';
   this.SCD_ALARM_SORTForm_5Config.showToolBar = !this.visibleOK_BTNS; 
   if (typeof this['steps']  !== 'undefined') {
     this.SCD_ALARM_SORTForm_5Config.navigable = false;
     //this.SCD_ALARM_SORTForm_5Config.insertable = true;
     //this.SCD_ALARM_SORTForm_5Config.removeable = true;
   }
   this.SCD_ALARMFormtabs_6Config = new componentConfigDef();
   this.SCD_ALARMFormtabs_6Config.title = this.starServices.getNLS([],"scd_alarm_and_event_summary_properties.scd_alarm_and_event_summary_properties.compsTitleID7","States");
   this.SCD_ALARMFormtabs_6Config.isChild = true;
   this.SCD_ALARMFormtabs_6Config.masterSelector = 'app-scd-alarm-and-event-summary-properties';
   this.SCD_ALARMFormtabs_6Config.showToolBar = !this.visibleOK_BTNS; 
   if (typeof this['steps']  !== 'undefined') {
     this.SCD_ALARMFormtabs_6Config.navigable = false;
     //this.SCD_ALARMFormtabs_6Config.insertable = true;
     //this.SCD_ALARMFormtabs_6Config.removeable = true;
   }
   this.SCD_ALARM_BEHAVIORForm_7Config = new componentConfigDef();
   this.SCD_ALARM_BEHAVIORForm_7Config.title = this.starServices.getNLS([],"scd_alarm_and_event_summary_properties.scd_alarm_and_event_summary_properties.compsTitleID8","Behavior");
   this.SCD_ALARM_BEHAVIORForm_7Config.isChild = true;
   this.SCD_ALARM_BEHAVIORForm_7Config.masterSelector = 'app-scd-alarm-and-event-summary-properties';
   this.SCD_ALARM_BEHAVIORForm_7Config.showToolBar = !this.visibleOK_BTNS; 
   if (typeof this['steps']  !== 'undefined') {
     this.SCD_ALARM_BEHAVIORForm_7Config.navigable = false;
     //this.SCD_ALARM_BEHAVIORForm_7Config.insertable = true;
     //this.SCD_ALARM_BEHAVIORForm_7Config.removeable = true;
   }
  }
  public ngOnDestroy(): void {
     // Unsubscribe the event once not needed.
     if (typeof this.componentConfigChangeEvent !== 'undefined') this.componentConfigChangeEvent.unsubscribe();
  }
  public readCompletedHandler( form_SCD_SHAPE) {
    let masterKeyArr = [form_SCD_SHAPE.SHAPE_ID,form_SCD_SHAPE.DISPLAY_ID];
    let masterKeyNameArr = ["SHAPE_ID","DISPLAY_ID"];
     if (this.isSearchScreen == true) 
	  {
    	this.SCD_ALARM_APPEARANCEFormdivs_1Config = new componentConfigDef();
    	this.SCD_ALARM_APPEARANCEFormdivs_1Config.formattedWhere  = form_SCD_SHAPE;
    	this.SCD_ALARM_COLUMNSGrid_2Config = new componentConfigDef();
    	this.SCD_ALARM_COLUMNSGrid_2Config.formattedWhere  = form_SCD_SHAPE;
    	this.SCD_ALARMFormtabs_3Config = new componentConfigDef();
    	this.SCD_ALARMFormtabs_3Config.formattedWhere  = form_SCD_SHAPE;
    	this.SCD_ALARM_DISPLAY_FILTERSGrid_4Config = new componentConfigDef();
    	this.SCD_ALARM_DISPLAY_FILTERSGrid_4Config.formattedWhere  = form_SCD_SHAPE;
    	this.SCD_ALARM_SORTForm_5Config = new componentConfigDef();
    	this.SCD_ALARM_SORTForm_5Config.formattedWhere  = form_SCD_SHAPE;
    	this.SCD_ALARMFormtabs_6Config = new componentConfigDef();
    	this.SCD_ALARMFormtabs_6Config.formattedWhere  = form_SCD_SHAPE;
    	this.SCD_ALARM_BEHAVIORForm_7Config = new componentConfigDef();
    	this.SCD_ALARM_BEHAVIORForm_7Config.formattedWhere  = form_SCD_SHAPE;
    	return;
	  }
    //this.formdivs_1_SCD_ALARM_APPEARANCE = new scdalarmAppearanceScdAadAlarmAppearance1();
    //for (let i = 0; i< masterKeyNameArr.length; i++){
    //   this.formdivs_1_SCD_ALARM_APPEARANCE[masterKeyNameArr[i]] = masterKeyArr[i];
    //}
    this.SCD_ALARM_APPEARANCEFormdivs_1Config = new componentConfigDef();
    this.SCD_ALARM_APPEARANCEFormdivs_1Config.masterKeyArr =  [form_SCD_SHAPE.SHAPE_ID,form_SCD_SHAPE.DISPLAY_ID];
    this.SCD_ALARM_APPEARANCEFormdivs_1Config.masterKeyNameArr =  ["SHAPE_ID","DISPLAY_ID"];
    this.SCD_ALARM_APPEARANCEFormdivs_1Config.masterReadCompleted = true;
   if (typeof this['steps'] !== 'undefined') {
     this.SCD_ALARM_APPEARANCEFormdivs_1Config.queryable = false;
     //this.SCD_ALARM_APPEARANCEFormdivs_1Config.removeable = true;
     //this.SCD_ALARM_APPEARANCEFormdivs_1Config.updateable = true;
   }
    //this.grid_2_SCD_ALARM_COLUMNS = new scdalarmColumnsScdAclAlarmColumns();
    //for (let i = 0; i< masterKeyNameArr.length; i++){
    //   this.grid_2_SCD_ALARM_COLUMNS[masterKeyNameArr[i]] = masterKeyArr[i];
    //}
    this.SCD_ALARM_COLUMNSGrid_2Config = new componentConfigDef();
    this.SCD_ALARM_COLUMNSGrid_2Config.masterKeyArr =  [form_SCD_SHAPE.SHAPE_ID,form_SCD_SHAPE.DISPLAY_ID];
    this.SCD_ALARM_COLUMNSGrid_2Config.masterKeyNameArr =  ["SHAPE_ID","DISPLAY_ID"];
    this.SCD_ALARM_COLUMNSGrid_2Config.masterReadCompleted = true;
   if (typeof this['steps'] !== 'undefined') {
     this.SCD_ALARM_COLUMNSGrid_2Config.queryable = false;
     //this.SCD_ALARM_COLUMNSGrid_2Config.removeable = true;
     //this.SCD_ALARM_COLUMNSGrid_2Config.updateable = true;
   }
    //this.formtabs_3_SCD_ALARM = new scdalarmScdAlarmEventSubscriptionsProperties();
    //for (let i = 0; i< masterKeyNameArr.length; i++){
    //   this.formtabs_3_SCD_ALARM[masterKeyNameArr[i]] = masterKeyArr[i];
    //}
    this.SCD_ALARMFormtabs_3Config = new componentConfigDef();
    this.SCD_ALARMFormtabs_3Config.masterKeyArr =  [form_SCD_SHAPE.SHAPE_ID,form_SCD_SHAPE.DISPLAY_ID];
    this.SCD_ALARMFormtabs_3Config.masterKeyNameArr =  ["SHAPE_ID","DISPLAY_ID"];
    this.SCD_ALARMFormtabs_3Config.masterReadCompleted = true;
   if (typeof this['steps'] !== 'undefined') {
     this.SCD_ALARMFormtabs_3Config.queryable = false;
     //this.SCD_ALARMFormtabs_3Config.removeable = true;
     //this.SCD_ALARMFormtabs_3Config.updateable = true;
   }
    //this.grid_4_SCD_ALARM_DISPLAY_FILTERS = new scdalarmDisplayFiltersScdAdflAlarmDisplayFilters4();
    //for (let i = 0; i< masterKeyNameArr.length; i++){
    //   this.grid_4_SCD_ALARM_DISPLAY_FILTERS[masterKeyNameArr[i]] = masterKeyArr[i];
    //}
    this.SCD_ALARM_DISPLAY_FILTERSGrid_4Config = new componentConfigDef();
    this.SCD_ALARM_DISPLAY_FILTERSGrid_4Config.masterKeyArr =  [form_SCD_SHAPE.SHAPE_ID,form_SCD_SHAPE.DISPLAY_ID];
    this.SCD_ALARM_DISPLAY_FILTERSGrid_4Config.masterKeyNameArr =  ["SHAPE_ID","DISPLAY_ID"];
    this.SCD_ALARM_DISPLAY_FILTERSGrid_4Config.masterReadCompleted = true;
   if (typeof this['steps'] !== 'undefined') {
     this.SCD_ALARM_DISPLAY_FILTERSGrid_4Config.queryable = false;
     //this.SCD_ALARM_DISPLAY_FILTERSGrid_4Config.removeable = true;
     //this.SCD_ALARM_DISPLAY_FILTERSGrid_4Config.updateable = true;
   }
    //this.form_5_SCD_ALARM_SORT = new scdalarmSortScdScdAlarmSort();
    //for (let i = 0; i< masterKeyNameArr.length; i++){
    //   this.form_5_SCD_ALARM_SORT[masterKeyNameArr[i]] = masterKeyArr[i];
    //}
    this.SCD_ALARM_SORTForm_5Config = new componentConfigDef();
    this.SCD_ALARM_SORTForm_5Config.masterKeyArr =  [form_SCD_SHAPE.SHAPE_ID,form_SCD_SHAPE.DISPLAY_ID];
    this.SCD_ALARM_SORTForm_5Config.masterKeyNameArr =  ["SHAPE_ID","DISPLAY_ID"];
    this.SCD_ALARM_SORTForm_5Config.masterReadCompleted = true;
   if (typeof this['steps'] !== 'undefined') {
     this.SCD_ALARM_SORTForm_5Config.queryable = false;
     //this.SCD_ALARM_SORTForm_5Config.removeable = true;
     //this.SCD_ALARM_SORTForm_5Config.updateable = true;
   }
    //this.formtabs_6_SCD_ALARM = new scdalarmScdAlarmStatesProperties();
    //for (let i = 0; i< masterKeyNameArr.length; i++){
    //   this.formtabs_6_SCD_ALARM[masterKeyNameArr[i]] = masterKeyArr[i];
    //}
    this.SCD_ALARMFormtabs_6Config = new componentConfigDef();
    this.SCD_ALARMFormtabs_6Config.masterKeyArr =  [form_SCD_SHAPE.SHAPE_ID,form_SCD_SHAPE.DISPLAY_ID];
    this.SCD_ALARMFormtabs_6Config.masterKeyNameArr =  ["SHAPE_ID","DISPLAY_ID"];
    this.SCD_ALARMFormtabs_6Config.masterReadCompleted = true;
   if (typeof this['steps'] !== 'undefined') {
     this.SCD_ALARMFormtabs_6Config.queryable = false;
     //this.SCD_ALARMFormtabs_6Config.removeable = true;
     //this.SCD_ALARMFormtabs_6Config.updateable = true;
   }
    //this.form_7_SCD_ALARM_BEHAVIOR = new scdalarmBehaviorScdAbdAlarmBehavior();
    //for (let i = 0; i< masterKeyNameArr.length; i++){
    //   this.form_7_SCD_ALARM_BEHAVIOR[masterKeyNameArr[i]] = masterKeyArr[i];
    //}
    this.SCD_ALARM_BEHAVIORForm_7Config = new componentConfigDef();
    this.SCD_ALARM_BEHAVIORForm_7Config.masterKeyArr =  [form_SCD_SHAPE.SHAPE_ID,form_SCD_SHAPE.DISPLAY_ID];
    this.SCD_ALARM_BEHAVIORForm_7Config.masterKeyNameArr =  ["SHAPE_ID","DISPLAY_ID"];
    this.SCD_ALARM_BEHAVIORForm_7Config.masterReadCompleted = true;
   if (typeof this['steps'] !== 'undefined') {
     this.SCD_ALARM_BEHAVIORForm_7Config.queryable = false;
     //this.SCD_ALARM_BEHAVIORForm_7Config.removeable = true;
     //this.SCD_ALARM_BEHAVIORForm_7Config.updateable = true;
   }
  }
  async clearCompletedHandler( form_SCD_SHAPE) {
     await this.starServices.sleep(200);
    this.SCD_ALARM_APPEARANCEFormdivs_1Config = new componentConfigDef();
     await this.starServices.sleep(200);
    this.SCD_ALARM_COLUMNSGrid_2Config = new componentConfigDef();
     await this.starServices.sleep(200);
    this.SCD_ALARMFormtabs_3Config = new componentConfigDef();
     await this.starServices.sleep(200);
    this.SCD_ALARM_DISPLAY_FILTERSGrid_4Config = new componentConfigDef();
     await this.starServices.sleep(200);
    this.SCD_ALARM_SORTForm_5Config = new componentConfigDef();
     await this.starServices.sleep(200);
    this.SCD_ALARMFormtabs_6Config = new componentConfigDef();
     await this.starServices.sleep(200);
    this.SCD_ALARM_BEHAVIORForm_7Config = new componentConfigDef();
  }
  public keyNameArr = ["SHAPE_ID","DISPLAY_ID"];

  public callreadSavedMaster( ) {
    let masterTable = 'SCD_SHAPE' 
     }
  public sendToMaster(componentConfig){ 
  	this.SCD_SHAPEForm_0Config = new componentConfigDef(); 
  	this.SCD_SHAPEForm_0Config = componentConfig; 
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
  	this.SCD_ALARM_APPEARANCEFormdivs_1Config = new componentConfigDef(); 
  	this.SCD_ALARM_APPEARANCEFormdivs_1Config = componentConfig; 
   }
   if ( (pageNo + 1) == 3){
  	this.SCD_ALARM_COLUMNSGrid_2Config = new componentConfigDef(); 
  	this.SCD_ALARM_COLUMNSGrid_2Config = componentConfig; 
   }
   if ( (pageNo + 1) == 4){
  	this.SCD_ALARMFormtabs_3Config = new componentConfigDef(); 
  	this.SCD_ALARMFormtabs_3Config = componentConfig; 
   }
   if ( (pageNo + 1) == 5){
  	this.SCD_ALARM_DISPLAY_FILTERSGrid_4Config = new componentConfigDef(); 
  	this.SCD_ALARM_DISPLAY_FILTERSGrid_4Config = componentConfig; 
   }
   if ( (pageNo + 1) == 6){
  	this.SCD_ALARM_SORTForm_5Config = new componentConfigDef(); 
  	this.SCD_ALARM_SORTForm_5Config = componentConfig; 
   }
   if ( (pageNo + 1) == 7){
  	this.SCD_ALARMFormtabs_6Config = new componentConfigDef(); 
  	this.SCD_ALARMFormtabs_6Config = componentConfig; 
   }
   if ( (pageNo + 1) == 8){
  	this.SCD_ALARM_BEHAVIORForm_7Config = new componentConfigDef(); 
  	this.SCD_ALARM_BEHAVIORForm_7Config = componentConfig; 
   }
 } 
  public saveCompletedHandler( form_SCD_SHAPE) {
 let key:any = [form_SCD_SHAPE.SHAPE_ID,form_SCD_SHAPE.DISPLAY_ID]; 
 if ( key != '') { 
    this.SCD_ALARM_APPEARANCEFormdivs_1Config = new componentConfigDef();
    this.SCD_ALARM_APPEARANCEFormdivs_1Config.masterSaved = form_SCD_SHAPE;
    this.SCD_ALARM_APPEARANCEFormdivs_1Config.masterKeyArr =  [form_SCD_SHAPE.SHAPE_ID,form_SCD_SHAPE.DISPLAY_ID];
    this.SCD_ALARM_APPEARANCEFormdivs_1Config.masterKeyNameArr =  ["SHAPE_ID","DISPLAY_ID"];
  
    this.SCD_ALARM_COLUMNSGrid_2Config = new componentConfigDef();
    this.SCD_ALARM_COLUMNSGrid_2Config.masterSaved = form_SCD_SHAPE;
    this.SCD_ALARM_COLUMNSGrid_2Config.masterKeyArr =  [form_SCD_SHAPE.SHAPE_ID,form_SCD_SHAPE.DISPLAY_ID];
    this.SCD_ALARM_COLUMNSGrid_2Config.masterKeyNameArr =  ["SHAPE_ID","DISPLAY_ID"];
  
    this.SCD_ALARMFormtabs_3Config = new componentConfigDef();
    this.SCD_ALARMFormtabs_3Config.masterSaved = form_SCD_SHAPE;
    this.SCD_ALARMFormtabs_3Config.masterKeyArr =  [form_SCD_SHAPE.SHAPE_ID,form_SCD_SHAPE.DISPLAY_ID];
    this.SCD_ALARMFormtabs_3Config.masterKeyNameArr =  ["SHAPE_ID","DISPLAY_ID"];
  
    this.SCD_ALARM_DISPLAY_FILTERSGrid_4Config = new componentConfigDef();
    this.SCD_ALARM_DISPLAY_FILTERSGrid_4Config.masterSaved = form_SCD_SHAPE;
    this.SCD_ALARM_DISPLAY_FILTERSGrid_4Config.masterKeyArr =  [form_SCD_SHAPE.SHAPE_ID,form_SCD_SHAPE.DISPLAY_ID];
    this.SCD_ALARM_DISPLAY_FILTERSGrid_4Config.masterKeyNameArr =  ["SHAPE_ID","DISPLAY_ID"];
  
    this.SCD_ALARM_SORTForm_5Config = new componentConfigDef();
    this.SCD_ALARM_SORTForm_5Config.masterSaved = form_SCD_SHAPE;
    this.SCD_ALARM_SORTForm_5Config.masterKeyArr =  [form_SCD_SHAPE.SHAPE_ID,form_SCD_SHAPE.DISPLAY_ID];
    this.SCD_ALARM_SORTForm_5Config.masterKeyNameArr =  ["SHAPE_ID","DISPLAY_ID"];
  
    this.SCD_ALARMFormtabs_6Config = new componentConfigDef();
    this.SCD_ALARMFormtabs_6Config.masterSaved = form_SCD_SHAPE;
    this.SCD_ALARMFormtabs_6Config.masterKeyArr =  [form_SCD_SHAPE.SHAPE_ID,form_SCD_SHAPE.DISPLAY_ID];
    this.SCD_ALARMFormtabs_6Config.masterKeyNameArr =  ["SHAPE_ID","DISPLAY_ID"];
  
    this.SCD_ALARM_BEHAVIORForm_7Config = new componentConfigDef();
    this.SCD_ALARM_BEHAVIORForm_7Config.masterSaved = form_SCD_SHAPE;
    this.SCD_ALARM_BEHAVIORForm_7Config.masterKeyArr =  [form_SCD_SHAPE.SHAPE_ID,form_SCD_SHAPE.DISPLAY_ID];
    this.SCD_ALARM_BEHAVIORForm_7Config.masterKeyNameArr =  ["SHAPE_ID","DISPLAY_ID"];
  
    this.saveTriggerOutput.emit(form_SCD_SHAPE);
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
        this.form_0_SCD_SHAPE = form;
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
    if (this.paramConfig.DEBUG_FLAG) console.log("ComponentConfig:ScdAlarmAndEventSummaryPropertiesComponent:",ComponentConfig);
    if (typeof ComponentConfig !== "undefined"){
       this.componentConfig = this.starServices.setComponentConfig(ComponentConfig, this.componentConfig  );
       if (ComponentConfig.languageChanged != null) { 
           setTimeout(() => {
             this.SCD_SHAPEForm_0Config = new componentConfigDef();
             this.SCD_SHAPEForm_0Config.languageChanged = ComponentConfig.languageChanged;
             this.SCD_SHAPEForm_0Config.title = this.starServices.getNLS([],"scd_alarm_and_event_summary_properties.scd_alarm_and_event_summary_properties.compsTitleID1","Common");
             this.SCD_ALARM_APPEARANCEFormdivs_1Config = new componentConfigDef();
             this.SCD_ALARM_APPEARANCEFormdivs_1Config.languageChanged = ComponentConfig.languageChanged;
             this.SCD_ALARM_APPEARANCEFormdivs_1Config.title = this.starServices.getNLS([],"scd_alarm_and_event_summary_properties.scd_alarm_and_event_summary_properties.compsTitleID2","Appearance");
             this.SCD_ALARM_COLUMNSGrid_2Config = new componentConfigDef();
             this.SCD_ALARM_COLUMNSGrid_2Config.languageChanged = ComponentConfig.languageChanged;
             this.SCD_ALARM_COLUMNSGrid_2Config.title = this.starServices.getNLS([],"scd_alarm_and_event_summary_properties.scd_alarm_and_event_summary_properties.compsTitleID3","Columns");
             this.SCD_ALARMFormtabs_3Config = new componentConfigDef();
             this.SCD_ALARMFormtabs_3Config.languageChanged = ComponentConfig.languageChanged;
             this.SCD_ALARMFormtabs_3Config.title = this.starServices.getNLS([],"scd_alarm_and_event_summary_properties.scd_alarm_and_event_summary_properties.compsTitleID4","Event Subscriptions");
             this.SCD_ALARM_DISPLAY_FILTERSGrid_4Config = new componentConfigDef();
             this.SCD_ALARM_DISPLAY_FILTERSGrid_4Config.languageChanged = ComponentConfig.languageChanged;
             this.SCD_ALARM_DISPLAY_FILTERSGrid_4Config.title = this.starServices.getNLS([],"scd_alarm_and_event_summary_properties.scd_alarm_and_event_summary_properties.compsTitleID5","Display Filters");
             this.SCD_ALARM_SORTForm_5Config = new componentConfigDef();
             this.SCD_ALARM_SORTForm_5Config.languageChanged = ComponentConfig.languageChanged;
             this.SCD_ALARM_SORTForm_5Config.title = this.starServices.getNLS([],"scd_alarm_and_event_summary_properties.scd_alarm_and_event_summary_properties.compsTitleID6","Sort");
             this.SCD_ALARMFormtabs_6Config = new componentConfigDef();
             this.SCD_ALARMFormtabs_6Config.languageChanged = ComponentConfig.languageChanged;
             this.SCD_ALARMFormtabs_6Config.title = this.starServices.getNLS([],"scd_alarm_and_event_summary_properties.scd_alarm_and_event_summary_properties.compsTitleID7","States");
             this.SCD_ALARM_BEHAVIORForm_7Config = new componentConfigDef();
             this.SCD_ALARM_BEHAVIORForm_7Config.languageChanged = ComponentConfig.languageChanged;
             this.SCD_ALARM_BEHAVIORForm_7Config.title = this.starServices.getNLS([],"scd_alarm_and_event_summary_properties.scd_alarm_and_event_summary_properties.compsTitleID8","Behavior");
           this.setSteps(this);
           }, 500);
       }
  
       this.SCD_SHAPEForm_0Config = new componentConfigDef();
       this.SCD_ALARM_APPEARANCEFormdivs_1Config = new componentConfigDef();
       this.SCD_ALARM_COLUMNSGrid_2Config = new componentConfigDef();
       this.SCD_ALARMFormtabs_3Config = new componentConfigDef();
       this.SCD_ALARM_DISPLAY_FILTERSGrid_4Config = new componentConfigDef();
       this.SCD_ALARM_SORTForm_5Config = new componentConfigDef();
       this.SCD_ALARMFormtabs_6Config = new componentConfigDef();
       this.SCD_ALARM_BEHAVIORForm_7Config = new componentConfigDef();
   		
       if (ComponentConfig.masterParams != null) {
              this.SCD_SHAPEForm_0Config.masterParams = ComponentConfig.masterParams;
              this.SCD_ALARM_APPEARANCEFormdivs_1Config.masterParams = ComponentConfig.masterParams;
              this.SCD_ALARM_COLUMNSGrid_2Config.masterParams = ComponentConfig.masterParams;
              this.SCD_ALARMFormtabs_3Config.masterParams = ComponentConfig.masterParams;
              this.SCD_ALARM_DISPLAY_FILTERSGrid_4Config.masterParams = ComponentConfig.masterParams;
              this.SCD_ALARM_SORTForm_5Config.masterParams = ComponentConfig.masterParams;
              this.SCD_ALARMFormtabs_6Config.masterParams = ComponentConfig.masterParams;
              this.SCD_ALARM_BEHAVIORForm_7Config.masterParams = ComponentConfig.masterParams;
   		
       }
       if (ComponentConfig.showToolBar != null) {
              this.SCD_SHAPEForm_0Config.showToolBar = ComponentConfig.showToolBar;
              this.SCD_ALARM_APPEARANCEFormdivs_1Config.showToolBar = ComponentConfig.showToolBar;
              this.SCD_ALARM_COLUMNSGrid_2Config.showToolBar = ComponentConfig.showToolBar;
              this.SCD_ALARMFormtabs_3Config.showToolBar = ComponentConfig.showToolBar;
              this.SCD_ALARM_DISPLAY_FILTERSGrid_4Config.showToolBar = ComponentConfig.showToolBar;
              this.SCD_ALARM_SORTForm_5Config.showToolBar = ComponentConfig.showToolBar;
              this.SCD_ALARMFormtabs_6Config.showToolBar = ComponentConfig.showToolBar;
              this.SCD_ALARM_BEHAVIORForm_7Config.showToolBar = ComponentConfig.showToolBar;
       }
      if (ComponentConfig.masterSaved != null)//here1
      {
       this.SCD_SHAPEForm_0Config.masterSaved = ComponentConfig.masterSaved;
      }
      if (ComponentConfig.newRec != null)
      {
       this.SCD_SHAPEForm_0Config.newRec = ComponentConfig.newRec;
       this.SCD_ALARM_APPEARANCEFormdivs_1Config.newRec = ComponentConfig.newRec;
       this.SCD_ALARM_COLUMNSGrid_2Config.newRec = ComponentConfig.newRec;
       this.SCD_ALARMFormtabs_3Config.newRec = ComponentConfig.newRec;
       this.SCD_ALARM_DISPLAY_FILTERSGrid_4Config.newRec = ComponentConfig.newRec;
       this.SCD_ALARM_SORTForm_5Config.newRec = ComponentConfig.newRec;
       this.SCD_ALARMFormtabs_6Config.newRec = ComponentConfig.newRec;
       this.SCD_ALARM_BEHAVIORForm_7Config.newRec = ComponentConfig.newRec;
      }
      if (ComponentConfig.clearScreen != null)
      {
       this.SCD_SHAPEForm_0Config.clearScreen = ComponentConfig.clearScreen;
       this.SCD_ALARM_APPEARANCEFormdivs_1Config.clearScreen = ComponentConfig.clearScreen;
       this.SCD_ALARM_COLUMNSGrid_2Config.clearScreen = ComponentConfig.clearScreen;
       this.SCD_ALARMFormtabs_3Config.clearScreen = ComponentConfig.clearScreen;
       this.SCD_ALARM_DISPLAY_FILTERSGrid_4Config.clearScreen = ComponentConfig.clearScreen;
       this.SCD_ALARM_SORTForm_5Config.clearScreen = ComponentConfig.clearScreen;
       this.SCD_ALARMFormtabs_6Config.clearScreen = ComponentConfig.clearScreen;
       this.SCD_ALARM_BEHAVIORForm_7Config.clearScreen = ComponentConfig.clearScreen;
	   }
      if ((ComponentConfig.masterKeyArr != null) && (ComponentConfig.masterKeyNameArr != null) )
      {
       if ((ComponentConfig.masterKeyArr.length != 0) && (ComponentConfig.masterKeyNameArr.length != 0) )
       {
         this.SCD_SHAPEForm_0Config.masterKeyArr = ComponentConfig.masterKeyArr;
         this.SCD_SHAPEForm_0Config.masterKeyNameArr = ComponentConfig.masterKeyNameArr;
         if (ComponentConfig.masterReadCompleted != null) 
         {
             this.SCD_SHAPEForm_0Config.masterReadCompleted = ComponentConfig.masterReadCompleted;
          }
         this.SCD_ALARM_APPEARANCEFormdivs_1Config.masterKeyArr = ComponentConfig.masterKeyArr;
         this.SCD_ALARM_APPEARANCEFormdivs_1Config.masterKeyNameArr = ComponentConfig.masterKeyNameArr;
         if (ComponentConfig.masterReadCompleted != null) 
         {
             this.SCD_ALARM_APPEARANCEFormdivs_1Config.masterReadCompleted = ComponentConfig.masterReadCompleted;
          }
         this.SCD_ALARM_COLUMNSGrid_2Config.masterKeyArr = ComponentConfig.masterKeyArr;
         this.SCD_ALARM_COLUMNSGrid_2Config.masterKeyNameArr = ComponentConfig.masterKeyNameArr;
         if (ComponentConfig.masterReadCompleted != null) 
         {
             this.SCD_ALARM_COLUMNSGrid_2Config.masterReadCompleted = ComponentConfig.masterReadCompleted;
          }
         this.SCD_ALARMFormtabs_3Config.masterKeyArr = ComponentConfig.masterKeyArr;
         this.SCD_ALARMFormtabs_3Config.masterKeyNameArr = ComponentConfig.masterKeyNameArr;
         if (ComponentConfig.masterReadCompleted != null) 
         {
             this.SCD_ALARMFormtabs_3Config.masterReadCompleted = ComponentConfig.masterReadCompleted;
          }
         this.SCD_ALARM_DISPLAY_FILTERSGrid_4Config.masterKeyArr = ComponentConfig.masterKeyArr;
         this.SCD_ALARM_DISPLAY_FILTERSGrid_4Config.masterKeyNameArr = ComponentConfig.masterKeyNameArr;
         if (ComponentConfig.masterReadCompleted != null) 
         {
             this.SCD_ALARM_DISPLAY_FILTERSGrid_4Config.masterReadCompleted = ComponentConfig.masterReadCompleted;
          }
         this.SCD_ALARM_SORTForm_5Config.masterKeyArr = ComponentConfig.masterKeyArr;
         this.SCD_ALARM_SORTForm_5Config.masterKeyNameArr = ComponentConfig.masterKeyNameArr;
         if (ComponentConfig.masterReadCompleted != null) 
         {
             this.SCD_ALARM_SORTForm_5Config.masterReadCompleted = ComponentConfig.masterReadCompleted;
          }
         this.SCD_ALARMFormtabs_6Config.masterKeyArr = ComponentConfig.masterKeyArr;
         this.SCD_ALARMFormtabs_6Config.masterKeyNameArr = ComponentConfig.masterKeyNameArr;
         if (ComponentConfig.masterReadCompleted != null) 
         {
             this.SCD_ALARMFormtabs_6Config.masterReadCompleted = ComponentConfig.masterReadCompleted;
          }
         this.SCD_ALARM_BEHAVIORForm_7Config.masterKeyArr = ComponentConfig.masterKeyArr;
         this.SCD_ALARM_BEHAVIORForm_7Config.masterKeyNameArr = ComponentConfig.masterKeyNameArr;
         if (ComponentConfig.masterReadCompleted != null) 
         {
             this.SCD_ALARM_BEHAVIORForm_7Config.masterReadCompleted = ComponentConfig.masterReadCompleted;
          }
       }
      }
    }
  }
   public formdivs_1_SCD_ALARM_APPEARANCEOpened = false;
  public  formdivs_1_SCD_ALARM_APPEARANCEClose() { 
    this.formdivs_1_SCD_ALARM_APPEARANCEOpened = false;  
  }
  public  formdivs_1_SCD_ALARM_APPEARANCEOpen() { 
    this.formdivs_1_SCD_ALARM_APPEARANCEOpened = true;  
  }
  
  public grid_2_SCD_ALARM_COLUMNSOpened = false;
  public  grid_2_SCD_ALARM_COLUMNSClose() { 
    this.grid_2_SCD_ALARM_COLUMNSOpened = false;  
  }
  public  grid_2_SCD_ALARM_COLUMNSOpen() { 
    this.grid_2_SCD_ALARM_COLUMNSOpened = true;  
  }
  
  public formtabs_3_SCD_ALARMOpened = false;
  public  formtabs_3_SCD_ALARMClose() { 
    this.formtabs_3_SCD_ALARMOpened = false;  
  }
  public  formtabs_3_SCD_ALARMOpen() { 
    this.formtabs_3_SCD_ALARMOpened = true;  
  }
  
  public grid_4_SCD_ALARM_DISPLAY_FILTERSOpened = false;
  public  grid_4_SCD_ALARM_DISPLAY_FILTERSClose() { 
    this.grid_4_SCD_ALARM_DISPLAY_FILTERSOpened = false;  
  }
  public  grid_4_SCD_ALARM_DISPLAY_FILTERSOpen() { 
    this.grid_4_SCD_ALARM_DISPLAY_FILTERSOpened = true;  
  }
  
  public form_5_SCD_ALARM_SORTOpened = false;
  public  form_5_SCD_ALARM_SORTClose() { 
    this.form_5_SCD_ALARM_SORTOpened = false;  
  }
  public  form_5_SCD_ALARM_SORTOpen() { 
    this.form_5_SCD_ALARM_SORTOpened = true;  
  }
  
  public formtabs_6_SCD_ALARMOpened = false;
  public  formtabs_6_SCD_ALARMClose() { 
    this.formtabs_6_SCD_ALARMOpened = false;  
  }
  public  formtabs_6_SCD_ALARMOpen() { 
    this.formtabs_6_SCD_ALARMOpened = true;  
  }
  
  public form_7_SCD_ALARM_BEHAVIOROpened = false;
  public  form_7_SCD_ALARM_BEHAVIORClose() { 
    this.form_7_SCD_ALARM_BEHAVIOROpened = false;  
  }
  public  form_7_SCD_ALARM_BEHAVIOROpen() { 
    this.form_7_SCD_ALARM_BEHAVIOROpened = true;  
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
	public visibleOK_BTNS = true;
	
  }
