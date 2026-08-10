import { Component, OnInit, Output,Input, EventEmitter, HostListener } from '@angular/core';
import {  scdshapeScdTpCommonScreen  ,scdlistIndicatorGeneralScdLigListIndicatorGeneral  ,scdalarmScdListIndicatorStatesProperties  ,scdcontrolListTimingScdLtControlListTiming  ,scdshapeConnectionScdScShapeConnections  , componentConfigDef} from '@modeldir/model';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { Subscription } from 'rxjs';
import { starServices } from 'starlib';
import { Starlib1 } from '../../Starlib1';
import { Router } from '@angular/router';
import { StarNotifyService } from '../../../services/starnotification.service';
import { TabAlignment } from '@progress/kendo-angular-layout';
declare function getParamConfig():any;

@Component({

  selector: 'app-scd-control-list-selector-properties',
  templateUrl: './scd-control-list-selector-properties.component.html',
  styleUrls: ['./scd-control-list-selector-properties.component.scss'],
  standalone: false
})
export class ScdControlListSelectorPropertiesComponent implements OnInit {
  @Output() saveTriggerOutput: EventEmitter<any> = new EventEmitter();
  @Output() formValidationChangedOutput: EventEmitter<boolean> = new EventEmitter();
  constructor(public router: Router,public responsive: BreakpointObserver, private starNotify: StarNotifyService, public starServices: starServices, public starlib1: Starlib1) {
   this.router = router;
  this.title =  this.starServices.getNLS([],"scd_control_list_selector_properties.scd_control_list_selector_properties.component_title","");
    this.paramConfig = getParamConfig();
    this.componentConfig = new componentConfigDef();
	this.componentConfig.showToolBar = !this.visibleOK_BTNS; 
	this.handleComponentConfig(this.componentConfig); 
  }
  public showToolBar = false;
  public paramConfig; 
  public title = '';
  public isPhonePortrait = false;
  public customerFacing = false;
  public isSearchScreen = false;
  public routineName = "scd_control_list_selector_properties";
  public alignment: TabAlignment = 'start';
  public selectedTab = 2;
  public masterParams;
  public gap: any = {
  	rows: 1,
  	columns: 1,
    };

  public componentConfig: componentConfigDef;

  public form_0_SCD_SHAPE : scdshapeScdTpCommonScreen;
  public formdivs_1_SCD_LIST_INDICATOR_GENERAL : scdlistIndicatorGeneralScdLigListIndicatorGeneral;
  public formtabs_2_SCD_ALARM : scdalarmScdListIndicatorStatesProperties;
  public form_3_SCD_CONTROL_LIST_TIMING : scdcontrolListTimingScdLtControlListTiming;
  public grid_4_SCD_SHAPE_CONNECTION : scdshapeConnectionScdScShapeConnections;
  public  SCD_SHAPEForm_0Config : componentConfigDef;
  public  SCD_LIST_INDICATOR_GENERALFormdivs_1Config : componentConfigDef;
  public  SCD_ALARMFormtabs_2Config : componentConfigDef;
  public  SCD_CONTROL_LIST_TIMINGForm_3Config : componentConfigDef;
  public  SCD_SHAPE_CONNECTIONGrid_4Config : componentConfigDef;
  public PDFfileName = this.title + ".PDF";
  public routineAuth = "ScdControlListSelectorProperties";

  public ngAfterViewInit() {
    this.starServices.setRTL();
  }
  private componentConfigChangeEvent!: Subscription;
  public compSelector = 'app-scd-control-list-selector-properties';
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
   this.SCD_SHAPEForm_0Config.title = this.starServices.getNLS([],"scd_control_list_selector_properties.scd_control_list_selector_properties.compsTitleID1","Common");
   this.SCD_SHAPEForm_0Config.isMaster = true;
   this.SCD_SHAPEForm_0Config.isSearchScreen = this.isSearchScreen;
   if (typeof this['steps']  !== 'undefined') {
     this.SCD_SHAPEForm_0Config.queryable = false;
     this.SCD_SHAPEForm_0Config.removeable = false;
     this.SCD_SHAPEForm_0Config.updateable = false;
     this.SCD_SHAPEForm_0Config.navigable = false;
     this.SCD_SHAPEForm_0Config.insertable = false;
   }
   this.SCD_LIST_INDICATOR_GENERALFormdivs_1Config = new componentConfigDef();
   this.SCD_LIST_INDICATOR_GENERALFormdivs_1Config.title = this.starServices.getNLS([],"scd_control_list_selector_properties.scd_control_list_selector_properties.compsTitleID2","General");
   this.SCD_LIST_INDICATOR_GENERALFormdivs_1Config.isChild = true;
   this.SCD_LIST_INDICATOR_GENERALFormdivs_1Config.masterSelector = 'app-scd-control-list-selector-properties';
   if (typeof this['steps']  !== 'undefined') {
     this.SCD_LIST_INDICATOR_GENERALFormdivs_1Config.navigable = false;
     //this.SCD_LIST_INDICATOR_GENERALFormdivs_1Config.insertable = true;
     //this.SCD_LIST_INDICATOR_GENERALFormdivs_1Config.removeable = true;
   }
   this.SCD_ALARMFormtabs_2Config = new componentConfigDef();
   this.SCD_ALARMFormtabs_2Config.title = this.starServices.getNLS([],"scd_control_list_selector_properties.scd_control_list_selector_properties.compsTitleID3","States");
   this.SCD_ALARMFormtabs_2Config.isChild = true;
   this.SCD_ALARMFormtabs_2Config.masterSelector = 'app-scd-control-list-selector-properties';
   if (typeof this['steps']  !== 'undefined') {
     this.SCD_ALARMFormtabs_2Config.navigable = false;
     //this.SCD_ALARMFormtabs_2Config.insertable = true;
     //this.SCD_ALARMFormtabs_2Config.removeable = true;
   }
   this.SCD_CONTROL_LIST_TIMINGForm_3Config = new componentConfigDef();
   this.SCD_CONTROL_LIST_TIMINGForm_3Config.title = this.starServices.getNLS([],"scd_control_list_selector_properties.scd_control_list_selector_properties.compsTitleID4","Timing");
   this.SCD_CONTROL_LIST_TIMINGForm_3Config.isChild = true;
   this.SCD_CONTROL_LIST_TIMINGForm_3Config.masterSelector = 'app-scd-control-list-selector-properties';
   if (typeof this['steps']  !== 'undefined') {
     this.SCD_CONTROL_LIST_TIMINGForm_3Config.navigable = false;
     //this.SCD_CONTROL_LIST_TIMINGForm_3Config.insertable = true;
     //this.SCD_CONTROL_LIST_TIMINGForm_3Config.removeable = true;
   }
   this.SCD_SHAPE_CONNECTIONGrid_4Config = new componentConfigDef();
   this.SCD_SHAPE_CONNECTIONGrid_4Config.title = this.starServices.getNLS([],"scd_control_list_selector_properties.scd_control_list_selector_properties.compsTitleID5","Connections");
   this.SCD_SHAPE_CONNECTIONGrid_4Config.isChild = true;
   this.SCD_SHAPE_CONNECTIONGrid_4Config.masterSelector = 'app-scd-control-list-selector-properties';
   if (typeof this['steps']  !== 'undefined') {
     this.SCD_SHAPE_CONNECTIONGrid_4Config.navigable = false;
     //this.SCD_SHAPE_CONNECTIONGrid_4Config.insertable = true;
     //this.SCD_SHAPE_CONNECTIONGrid_4Config.removeable = true;
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
    	this.SCD_LIST_INDICATOR_GENERALFormdivs_1Config = new componentConfigDef();
    	this.SCD_LIST_INDICATOR_GENERALFormdivs_1Config.formattedWhere  = form_SCD_SHAPE;
    	this.SCD_ALARMFormtabs_2Config = new componentConfigDef();
    	this.SCD_ALARMFormtabs_2Config.formattedWhere  = form_SCD_SHAPE;
    	this.SCD_CONTROL_LIST_TIMINGForm_3Config = new componentConfigDef();
    	this.SCD_CONTROL_LIST_TIMINGForm_3Config.formattedWhere  = form_SCD_SHAPE;
    	this.SCD_SHAPE_CONNECTIONGrid_4Config = new componentConfigDef();
    	this.SCD_SHAPE_CONNECTIONGrid_4Config.formattedWhere  = form_SCD_SHAPE;
    	return;
	  }
    //this.formdivs_1_SCD_LIST_INDICATOR_GENERAL = new scdlistIndicatorGeneralScdLigListIndicatorGeneral();
    //for (let i = 0; i< masterKeyNameArr.length; i++){
    //   this.formdivs_1_SCD_LIST_INDICATOR_GENERAL[masterKeyNameArr[i]] = masterKeyArr[i];
    //}
    this.SCD_LIST_INDICATOR_GENERALFormdivs_1Config = new componentConfigDef();
    this.SCD_LIST_INDICATOR_GENERALFormdivs_1Config.masterKeyArr =  [form_SCD_SHAPE.SHAPE_ID,form_SCD_SHAPE.DISPLAY_ID];
    this.SCD_LIST_INDICATOR_GENERALFormdivs_1Config.masterKeyNameArr =  ["SHAPE_ID","DISPLAY_ID"];
    this.SCD_LIST_INDICATOR_GENERALFormdivs_1Config.masterReadCompleted = true;
   if (typeof this['steps'] !== 'undefined') {
     this.SCD_LIST_INDICATOR_GENERALFormdivs_1Config.queryable = false;
     //this.SCD_LIST_INDICATOR_GENERALFormdivs_1Config.removeable = true;
     //this.SCD_LIST_INDICATOR_GENERALFormdivs_1Config.updateable = true;
   }
    //this.formtabs_2_SCD_ALARM = new scdalarmScdListIndicatorStatesProperties();
    //for (let i = 0; i< masterKeyNameArr.length; i++){
    //   this.formtabs_2_SCD_ALARM[masterKeyNameArr[i]] = masterKeyArr[i];
    //}
    this.SCD_ALARMFormtabs_2Config = new componentConfigDef();
    this.SCD_ALARMFormtabs_2Config.masterKeyArr =  [form_SCD_SHAPE.SHAPE_ID,form_SCD_SHAPE.DISPLAY_ID];
    this.SCD_ALARMFormtabs_2Config.masterKeyNameArr =  ["SHAPE_ID","DISPLAY_ID"];
    this.SCD_ALARMFormtabs_2Config.masterReadCompleted = true;
   if (typeof this['steps'] !== 'undefined') {
     this.SCD_ALARMFormtabs_2Config.queryable = false;
     //this.SCD_ALARMFormtabs_2Config.removeable = true;
     //this.SCD_ALARMFormtabs_2Config.updateable = true;
   }
    //this.form_3_SCD_CONTROL_LIST_TIMING = new scdcontrolListTimingScdLtControlListTiming();
    //for (let i = 0; i< masterKeyNameArr.length; i++){
    //   this.form_3_SCD_CONTROL_LIST_TIMING[masterKeyNameArr[i]] = masterKeyArr[i];
    //}
    this.SCD_CONTROL_LIST_TIMINGForm_3Config = new componentConfigDef();
    this.SCD_CONTROL_LIST_TIMINGForm_3Config.masterKeyArr =  [form_SCD_SHAPE.SHAPE_ID,form_SCD_SHAPE.DISPLAY_ID];
    this.SCD_CONTROL_LIST_TIMINGForm_3Config.masterKeyNameArr =  ["SHAPE_ID","DISPLAY_ID"];
    this.SCD_CONTROL_LIST_TIMINGForm_3Config.masterReadCompleted = true;
   if (typeof this['steps'] !== 'undefined') {
     this.SCD_CONTROL_LIST_TIMINGForm_3Config.queryable = false;
     //this.SCD_CONTROL_LIST_TIMINGForm_3Config.removeable = true;
     //this.SCD_CONTROL_LIST_TIMINGForm_3Config.updateable = true;
   }
    //this.grid_4_SCD_SHAPE_CONNECTION = new scdshapeConnectionScdScShapeConnections();
    //for (let i = 0; i< masterKeyNameArr.length; i++){
    //   this.grid_4_SCD_SHAPE_CONNECTION[masterKeyNameArr[i]] = masterKeyArr[i];
    //}
    this.SCD_SHAPE_CONNECTIONGrid_4Config = new componentConfigDef();
    this.SCD_SHAPE_CONNECTIONGrid_4Config.masterKeyArr =  [form_SCD_SHAPE.SHAPE_ID,form_SCD_SHAPE.DISPLAY_ID];
    this.SCD_SHAPE_CONNECTIONGrid_4Config.masterKeyNameArr =  ["SHAPE_ID","DISPLAY_ID"];
    this.SCD_SHAPE_CONNECTIONGrid_4Config.masterReadCompleted = true;
   if (typeof this['steps'] !== 'undefined') {
     this.SCD_SHAPE_CONNECTIONGrid_4Config.queryable = false;
     //this.SCD_SHAPE_CONNECTIONGrid_4Config.removeable = true;
     //this.SCD_SHAPE_CONNECTIONGrid_4Config.updateable = true;
   }
  }
  async clearCompletedHandler( form_SCD_SHAPE) {
     await this.starServices.sleep(200);
    this.SCD_LIST_INDICATOR_GENERALFormdivs_1Config = new componentConfigDef();
     await this.starServices.sleep(200);
    this.SCD_ALARMFormtabs_2Config = new componentConfigDef();
     await this.starServices.sleep(200);
    this.SCD_CONTROL_LIST_TIMINGForm_3Config = new componentConfigDef();
     await this.starServices.sleep(200);
    this.SCD_SHAPE_CONNECTIONGrid_4Config = new componentConfigDef();
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
  	this.SCD_LIST_INDICATOR_GENERALFormdivs_1Config = new componentConfigDef(); 
  	this.SCD_LIST_INDICATOR_GENERALFormdivs_1Config = componentConfig; 
   }
   if ( (pageNo + 1) == 3){
  	this.SCD_ALARMFormtabs_2Config = new componentConfigDef(); 
  	this.SCD_ALARMFormtabs_2Config = componentConfig; 
   }
   if ( (pageNo + 1) == 4){
  	this.SCD_CONTROL_LIST_TIMINGForm_3Config = new componentConfigDef(); 
  	this.SCD_CONTROL_LIST_TIMINGForm_3Config = componentConfig; 
   }
   if ( (pageNo + 1) == 5){
  	this.SCD_SHAPE_CONNECTIONGrid_4Config = new componentConfigDef(); 
  	this.SCD_SHAPE_CONNECTIONGrid_4Config = componentConfig; 
   }
 } 
  public saveCompletedHandler( form_SCD_SHAPE) {
 let key:any = [form_SCD_SHAPE.SHAPE_ID,form_SCD_SHAPE.DISPLAY_ID]; 
 if ( key != '') { 
    this.SCD_LIST_INDICATOR_GENERALFormdivs_1Config = new componentConfigDef();
    this.SCD_LIST_INDICATOR_GENERALFormdivs_1Config.masterSaved = form_SCD_SHAPE;
    this.SCD_LIST_INDICATOR_GENERALFormdivs_1Config.masterKeyArr =  [form_SCD_SHAPE.SHAPE_ID,form_SCD_SHAPE.DISPLAY_ID];
    this.SCD_LIST_INDICATOR_GENERALFormdivs_1Config.masterKeyNameArr =  ["SHAPE_ID","DISPLAY_ID"];
  
    this.SCD_ALARMFormtabs_2Config = new componentConfigDef();
    this.SCD_ALARMFormtabs_2Config.masterSaved = form_SCD_SHAPE;
    this.SCD_ALARMFormtabs_2Config.masterKeyArr =  [form_SCD_SHAPE.SHAPE_ID,form_SCD_SHAPE.DISPLAY_ID];
    this.SCD_ALARMFormtabs_2Config.masterKeyNameArr =  ["SHAPE_ID","DISPLAY_ID"];
  
    this.SCD_CONTROL_LIST_TIMINGForm_3Config = new componentConfigDef();
    this.SCD_CONTROL_LIST_TIMINGForm_3Config.masterSaved = form_SCD_SHAPE;
    this.SCD_CONTROL_LIST_TIMINGForm_3Config.masterKeyArr =  [form_SCD_SHAPE.SHAPE_ID,form_SCD_SHAPE.DISPLAY_ID];
    this.SCD_CONTROL_LIST_TIMINGForm_3Config.masterKeyNameArr =  ["SHAPE_ID","DISPLAY_ID"];
  
    this.SCD_SHAPE_CONNECTIONGrid_4Config = new componentConfigDef();
    this.SCD_SHAPE_CONNECTIONGrid_4Config.masterSaved = form_SCD_SHAPE;
    this.SCD_SHAPE_CONNECTIONGrid_4Config.masterKeyArr =  [form_SCD_SHAPE.SHAPE_ID,form_SCD_SHAPE.DISPLAY_ID];
    this.SCD_SHAPE_CONNECTIONGrid_4Config.masterKeyNameArr =  ["SHAPE_ID","DISPLAY_ID"];
  
    this.saveTriggerOutput.emit(form_SCD_SHAPE);
  } 
      }
  public saveCompletedHandler2( event) {
      this.saveTriggerOutput.emit(event)
  }
  public saveTriggerHandler(event){
        }
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
    if (this.paramConfig.DEBUG_FLAG) console.log("ComponentConfig:ScdControlListSelectorPropertiesComponent:",ComponentConfig);
    if (typeof ComponentConfig !== "undefined"){
       this.componentConfig = this.starServices.setComponentConfig(ComponentConfig, this.componentConfig  );
       if (ComponentConfig.languageChanged != null) { 
           setTimeout(() => {
             this.SCD_SHAPEForm_0Config = new componentConfigDef();
             this.SCD_SHAPEForm_0Config.languageChanged = ComponentConfig.languageChanged;
             this.SCD_SHAPEForm_0Config.title = this.starServices.getNLS([],"scd_control_list_selector_properties.scd_control_list_selector_properties.compsTitleID1","Common");
             this.SCD_LIST_INDICATOR_GENERALFormdivs_1Config = new componentConfigDef();
             this.SCD_LIST_INDICATOR_GENERALFormdivs_1Config.languageChanged = ComponentConfig.languageChanged;
             this.SCD_LIST_INDICATOR_GENERALFormdivs_1Config.title = this.starServices.getNLS([],"scd_control_list_selector_properties.scd_control_list_selector_properties.compsTitleID2","General");
             this.SCD_ALARMFormtabs_2Config = new componentConfigDef();
             this.SCD_ALARMFormtabs_2Config.languageChanged = ComponentConfig.languageChanged;
             this.SCD_ALARMFormtabs_2Config.title = this.starServices.getNLS([],"scd_control_list_selector_properties.scd_control_list_selector_properties.compsTitleID3","States");
             this.SCD_CONTROL_LIST_TIMINGForm_3Config = new componentConfigDef();
             this.SCD_CONTROL_LIST_TIMINGForm_3Config.languageChanged = ComponentConfig.languageChanged;
             this.SCD_CONTROL_LIST_TIMINGForm_3Config.title = this.starServices.getNLS([],"scd_control_list_selector_properties.scd_control_list_selector_properties.compsTitleID4","Timing");
             this.SCD_SHAPE_CONNECTIONGrid_4Config = new componentConfigDef();
             this.SCD_SHAPE_CONNECTIONGrid_4Config.languageChanged = ComponentConfig.languageChanged;
             this.SCD_SHAPE_CONNECTIONGrid_4Config.title = this.starServices.getNLS([],"scd_control_list_selector_properties.scd_control_list_selector_properties.compsTitleID5","Connections");
           this.setSteps(this);
           }, 400);
       }
  
   		
       if (ComponentConfig.masterParams != null) {
   		
       }
       else{
       this.SCD_SHAPEForm_0Config = new componentConfigDef();
       this.SCD_SHAPEForm_0Config = ComponentConfig;
       this.SCD_LIST_INDICATOR_GENERALFormdivs_1Config = new componentConfigDef();
       this.SCD_LIST_INDICATOR_GENERALFormdivs_1Config = ComponentConfig;
       this.SCD_ALARMFormtabs_2Config = new componentConfigDef();
       this.SCD_ALARMFormtabs_2Config = ComponentConfig;
       this.SCD_CONTROL_LIST_TIMINGForm_3Config = new componentConfigDef();
       this.SCD_CONTROL_LIST_TIMINGForm_3Config = ComponentConfig;
       this.SCD_SHAPE_CONNECTIONGrid_4Config = new componentConfigDef();
       this.SCD_SHAPE_CONNECTIONGrid_4Config = ComponentConfig;
      if (ComponentConfig.masterSaved != null)
      {
       this.SCD_SHAPEForm_0Config.masterSaved = ComponentConfig.masterSaved;
       this.SCD_LIST_INDICATOR_GENERALFormdivs_1Config.masterSaved = ComponentConfig.masterSaved;
       this.SCD_ALARMFormtabs_2Config.masterSaved = ComponentConfig.masterSaved;
       this.SCD_CONTROL_LIST_TIMINGForm_3Config.masterSaved = ComponentConfig.masterSaved;
       this.SCD_SHAPE_CONNECTIONGrid_4Config.masterSaved = ComponentConfig.masterSaved;
      }
      if (ComponentConfig.newRec != null)
      {
       this.SCD_SHAPEForm_0Config.newRec = ComponentConfig.newRec;
       this.SCD_LIST_INDICATOR_GENERALFormdivs_1Config.newRec = ComponentConfig.newRec;
       this.SCD_ALARMFormtabs_2Config.newRec = ComponentConfig.newRec;
       this.SCD_CONTROL_LIST_TIMINGForm_3Config.newRec = ComponentConfig.newRec;
       this.SCD_SHAPE_CONNECTIONGrid_4Config.newRec = ComponentConfig.newRec;
      }
      if (ComponentConfig.clearScreen != null)
      {
       this.SCD_SHAPEForm_0Config.clearScreen = ComponentConfig.clearScreen;
       this.SCD_LIST_INDICATOR_GENERALFormdivs_1Config.clearScreen = ComponentConfig.clearScreen;
       this.SCD_ALARMFormtabs_2Config.clearScreen = ComponentConfig.clearScreen;
       this.SCD_CONTROL_LIST_TIMINGForm_3Config.clearScreen = ComponentConfig.clearScreen;
       this.SCD_SHAPE_CONNECTIONGrid_4Config.clearScreen = ComponentConfig.clearScreen;
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
         this.SCD_LIST_INDICATOR_GENERALFormdivs_1Config.masterKeyArr = ComponentConfig.masterKeyArr;
         this.SCD_LIST_INDICATOR_GENERALFormdivs_1Config.masterKeyNameArr = ComponentConfig.masterKeyNameArr;
         if (ComponentConfig.masterReadCompleted != null) 
         {
             this.SCD_LIST_INDICATOR_GENERALFormdivs_1Config.masterReadCompleted = ComponentConfig.masterReadCompleted;
          }
         this.SCD_ALARMFormtabs_2Config.masterKeyArr = ComponentConfig.masterKeyArr;
         this.SCD_ALARMFormtabs_2Config.masterKeyNameArr = ComponentConfig.masterKeyNameArr;
         if (ComponentConfig.masterReadCompleted != null) 
         {
             this.SCD_ALARMFormtabs_2Config.masterReadCompleted = ComponentConfig.masterReadCompleted;
          }
         this.SCD_CONTROL_LIST_TIMINGForm_3Config.masterKeyArr = ComponentConfig.masterKeyArr;
         this.SCD_CONTROL_LIST_TIMINGForm_3Config.masterKeyNameArr = ComponentConfig.masterKeyNameArr;
         if (ComponentConfig.masterReadCompleted != null) 
         {
             this.SCD_CONTROL_LIST_TIMINGForm_3Config.masterReadCompleted = ComponentConfig.masterReadCompleted;
          }
         this.SCD_SHAPE_CONNECTIONGrid_4Config.masterKeyArr = ComponentConfig.masterKeyArr;
         this.SCD_SHAPE_CONNECTIONGrid_4Config.masterKeyNameArr = ComponentConfig.masterKeyNameArr;
         if (ComponentConfig.masterReadCompleted != null) 
         {
             this.SCD_SHAPE_CONNECTIONGrid_4Config.masterReadCompleted = ComponentConfig.masterReadCompleted;
          }
       }
      }
     }
    }
  }
   public formdivs_1_SCD_LIST_INDICATOR_GENERALOpened = false;
  public  formdivs_1_SCD_LIST_INDICATOR_GENERALClose() { 
    this.formdivs_1_SCD_LIST_INDICATOR_GENERALOpened = false;  
  }
  public  formdivs_1_SCD_LIST_INDICATOR_GENERALOpen() { 
    this.formdivs_1_SCD_LIST_INDICATOR_GENERALOpened = true;  
  }
  
  public formtabs_2_SCD_ALARMOpened = false;
  public  formtabs_2_SCD_ALARMClose() { 
    this.formtabs_2_SCD_ALARMOpened = false;  
  }
  public  formtabs_2_SCD_ALARMOpen() { 
    this.formtabs_2_SCD_ALARMOpened = true;  
  }
  
  public form_3_SCD_CONTROL_LIST_TIMINGOpened = false;
  public  form_3_SCD_CONTROL_LIST_TIMINGClose() { 
    this.form_3_SCD_CONTROL_LIST_TIMINGOpened = false;  
  }
  public  form_3_SCD_CONTROL_LIST_TIMINGOpen() { 
    this.form_3_SCD_CONTROL_LIST_TIMINGOpened = true;  
  }
  
  public grid_4_SCD_SHAPE_CONNECTIONOpened = false;
  public  grid_4_SCD_SHAPE_CONNECTIONClose() { 
    this.grid_4_SCD_SHAPE_CONNECTIONOpened = false;  
  }
  public  grid_4_SCD_SHAPE_CONNECTIONOpen() { 
    this.grid_4_SCD_SHAPE_CONNECTIONOpened = true;  
  }
  
 
	public ON_CLICK_OK(event){
		this.componentConfig = new componentConfigDef(); 
		this.componentConfig.masterSaved = true;
		this.handleComponentConfig(this.componentConfig); 
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
	
  }
