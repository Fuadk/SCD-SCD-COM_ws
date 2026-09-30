import { Component, OnInit, Output,Input, EventEmitter, HostListener } from '@angular/core';
import {  scdalarmEventSubscriptionsScdAessSearchAlarmEventSubscriptions  , componentConfigDef} from '@modeldir/model';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { Subscription } from 'rxjs';
import { starServices } from 'starlib';
import { Starlib1 } from '../../Starlib1';
import { Router } from '@angular/router';
import { StarNotifyService } from '../../../services/starnotification.service';
import { TabAlignment } from '@progress/kendo-angular-layout';
declare function getParamConfig():any;

@Component({

  selector: 'app-scd-alarm-event-subscriptions-search',
  templateUrl: './scd-alarm-event-subscriptions-search.component.html',
  styleUrls: ['./scd-alarm-event-subscriptions-search.component.scss'],
  standalone: false
})
export class ScdAlarmEventSubscriptionsSearchComponent implements OnInit {
  @Output() saveTriggerOutput: EventEmitter<any> = new EventEmitter();
  @Output() formValidationChangedOutput: EventEmitter<boolean> = new EventEmitter();
  constructor(public router: Router,public responsive: BreakpointObserver, private starNotify: StarNotifyService, public starServices: starServices, public starlib1: Starlib1) {
   this.router = router;
  this.title =  this.starServices.getNLS([],"scd_alarm_event_subscriptions_search.scd_alarm_event_subscriptions_search.component_title","Alarm Event Subscriptions Search");
    this.componentConfig = new componentConfigDef();
    this.paramConfig = getParamConfig();
  }
  public showToolBar = false;
  public paramConfig; 
  public title = '';
  public isPhonePortrait = false;
  public customerFacing = false;
  public isSearchScreen = true;
  public routineName = "scd_alarm_event_subscriptions_search";
  public alignment: TabAlignment = 'start';
  public selectedTab = 2;
  public masterParams;
  public gap: any = {
  	rows: 1,
  	columns: 1,
    };

  public componentConfig: componentConfigDef;

  public form_0_SCD_ALARM_EVENT_SUBSCRIPTIONS : scdalarmEventSubscriptionsScdAessSearchAlarmEventSubscriptions;
  public  SCD_ALARM_EVENT_SUBSCRIPTIONSForm_0Config : componentConfigDef;
  public  hide_comp_1 = false
  public PDFfileName = this.title + ".PDF";
  public routineAuth = "ScdAlarmEventSubscriptionsSearch";

  public ngAfterViewInit() {
    this.starServices.setRTL();
  }
  private componentConfigChangeEvent!: Subscription;
  public compSelector = 'app-scd-alarm-event-subscriptions-search';
  public masterKeyNameArr = ["EVENT_ID","APP_ID","DISPLAY_ID","SHAPE_ID"];

  public masterINSERT = 'INSERT_SCD_ALARM_EVENT_SUBSCRIPTIONS';
  public masterDataSource = 'SCD_ALARM_EVENT_SUBSCRIPTIONS';
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
   this.SCD_ALARM_EVENT_SUBSCRIPTIONSForm_0Config = new componentConfigDef();
   this.SCD_ALARM_EVENT_SUBSCRIPTIONSForm_0Config.title = this.starServices.getNLS([],"scd_alarm_event_subscriptions_search.scd_alarm_event_subscriptions_search.compsTitleID1","Search Alarm Event Subscriptions");
   this.SCD_ALARM_EVENT_SUBSCRIPTIONSForm_0Config.isMaster = true;
   this.SCD_ALARM_EVENT_SUBSCRIPTIONSForm_0Config.isSearchScreen = this.isSearchScreen;
	if (this.visibleOK_BTNS) 
   	this.SCD_ALARM_EVENT_SUBSCRIPTIONSForm_0Config.showToolBar = !this.visibleOK_BTNS; 
   if (typeof this['steps']  !== 'undefined') {
     this.SCD_ALARM_EVENT_SUBSCRIPTIONSForm_0Config.queryable = false;
     this.SCD_ALARM_EVENT_SUBSCRIPTIONSForm_0Config.removeable = false;
     this.SCD_ALARM_EVENT_SUBSCRIPTIONSForm_0Config.updateable = false;
     this.SCD_ALARM_EVENT_SUBSCRIPTIONSForm_0Config.navigable = false;
     this.SCD_ALARM_EVENT_SUBSCRIPTIONSForm_0Config.insertable = false;
   }
  }
  public ngOnDestroy(): void {
     // Unsubscribe the event once not needed.
     if (typeof this.componentConfigChangeEvent !== 'undefined') this.componentConfigChangeEvent.unsubscribe();
  }
  public readCompletedHandler( form_SCD_ALARM_EVENT_SUBSCRIPTIONS) {
    let masterKeyArr = [form_SCD_ALARM_EVENT_SUBSCRIPTIONS.EVENT_ID,form_SCD_ALARM_EVENT_SUBSCRIPTIONS.APP_ID,form_SCD_ALARM_EVENT_SUBSCRIPTIONS.DISPLAY_ID,form_SCD_ALARM_EVENT_SUBSCRIPTIONS.SHAPE_ID];
    let masterKeyNameArr = ["EVENT_ID","APP_ID","DISPLAY_ID","SHAPE_ID"];
     if (this.isSearchScreen == true) 
	  {
    	return;
	  }
  }
  async clearCompletedHandler( form_SCD_ALARM_EVENT_SUBSCRIPTIONS) {
  }
  public keyNameArr = ["EVENT_ID","APP_ID","DISPLAY_ID","SHAPE_ID"];

  public callreadSavedMaster( ) {
    let masterTable = 'SCD_ALARM_EVENT_SUBSCRIPTIONS' 
     }
  public sendToMaster(componentConfig){ 
  	this.SCD_ALARM_EVENT_SUBSCRIPTIONSForm_0Config = new componentConfigDef(); 
  	this.SCD_ALARM_EVENT_SUBSCRIPTIONSForm_0Config = componentConfig; 
 } 
  public sendToOrder(componentConfig){  
  	this.DSP_ORDERSFormConfig = new componentConfigDef();  
  	this.DSP_ORDERSFormConfig = componentConfig;  
    }  
  public closeApproveReject() {
      this.showApproveReject = false;
    }
  public sendToChildren(componentConfig, pageNo){ 
 } 
  public saveCompletedHandler( form_SCD_ALARM_EVENT_SUBSCRIPTIONS) {
 let key:any = [form_SCD_ALARM_EVENT_SUBSCRIPTIONS.EVENT_ID,form_SCD_ALARM_EVENT_SUBSCRIPTIONS.APP_ID,form_SCD_ALARM_EVENT_SUBSCRIPTIONS.DISPLAY_ID,form_SCD_ALARM_EVENT_SUBSCRIPTIONS.SHAPE_ID]; 
 if ( key != '') { 
    this.saveTriggerOutput.emit(form_SCD_ALARM_EVENT_SUBSCRIPTIONS);
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
        this.form_0_SCD_ALARM_EVENT_SUBSCRIPTIONS = form;
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
    if (this.paramConfig.DEBUG_FLAG) console.log("ComponentConfig:ScdAlarmEventSubscriptionsSearchComponent:",ComponentConfig);
    if (typeof ComponentConfig !== "undefined"){
       this.componentConfig = this.starServices.setComponentConfig(ComponentConfig, this.componentConfig  );
       if (ComponentConfig.languageChanged != null) { 
           setTimeout(() => {
             this.SCD_ALARM_EVENT_SUBSCRIPTIONSForm_0Config = new componentConfigDef();
             this.SCD_ALARM_EVENT_SUBSCRIPTIONSForm_0Config.languageChanged = ComponentConfig.languageChanged;
             this.SCD_ALARM_EVENT_SUBSCRIPTIONSForm_0Config.title = this.starServices.getNLS([],"scd_alarm_event_subscriptions_search.scd_alarm_event_subscriptions_search.compsTitleID1","Search Alarm Event Subscriptions");
           this.setSteps(this);
           }, 500);
       }
  
       this.SCD_ALARM_EVENT_SUBSCRIPTIONSForm_0Config = new componentConfigDef();
   		
       if (ComponentConfig.masterParams != null) {
              this.SCD_ALARM_EVENT_SUBSCRIPTIONSForm_0Config.masterParams = ComponentConfig.masterParams;
   		
       }
       if (ComponentConfig.showToolBar != null) {
              this.SCD_ALARM_EVENT_SUBSCRIPTIONSForm_0Config.showToolBar = ComponentConfig.showToolBar;
       }
      if (ComponentConfig.masterSaved != null)//here1
      {
       this.SCD_ALARM_EVENT_SUBSCRIPTIONSForm_0Config.masterSaved = ComponentConfig.masterSaved;
      }
      if (ComponentConfig.newRec != null)
      {
       this.SCD_ALARM_EVENT_SUBSCRIPTIONSForm_0Config.newRec = ComponentConfig.newRec;
      }
      if (ComponentConfig.clearScreen != null)
      {
       this.SCD_ALARM_EVENT_SUBSCRIPTIONSForm_0Config.clearScreen = ComponentConfig.clearScreen;
	   }
      if ((ComponentConfig.masterKeyArr != null) && (ComponentConfig.masterKeyNameArr != null) )
      {
       if ((ComponentConfig.masterKeyArr.length != 0) && (ComponentConfig.masterKeyNameArr.length != 0) )
       {
         this.SCD_ALARM_EVENT_SUBSCRIPTIONSForm_0Config.masterKeyArr = ComponentConfig.masterKeyArr;
         this.SCD_ALARM_EVENT_SUBSCRIPTIONSForm_0Config.masterKeyNameArr = ComponentConfig.masterKeyNameArr;
         if (ComponentConfig.masterReadCompleted != null) 
         {
             this.SCD_ALARM_EVENT_SUBSCRIPTIONSForm_0Config.masterReadCompleted = ComponentConfig.masterReadCompleted;
          }
       }
      }
    }
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
