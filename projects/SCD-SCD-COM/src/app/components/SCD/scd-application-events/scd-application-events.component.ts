import { Component, OnInit, Output,Input, EventEmitter, HostListener } from '@angular/core';
import {  scdeventChildScdAeEventChildren  ,scdeventScdAeEvent  , componentConfigDef} from '@modeldir/model';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { Subscription } from 'rxjs';
import { starServices } from 'starlib';
import { Starlib1 } from '../../Starlib1';
import { Router } from '@angular/router';
import { StarNotifyService } from '../../../services/starnotification.service';
import { TabAlignment } from '@progress/kendo-angular-layout';
declare function getParamConfig():any;

@Component({

  selector: 'app-scd-application-events',
  templateUrl: './scd-application-events.component.html',
  styleUrls: ['./scd-application-events.component.scss'],
  standalone: false
})
export class ScdApplicationEventsComponent implements OnInit {
  @Output() saveTriggerOutput: EventEmitter<any> = new EventEmitter();
  @Output() formValidationChangedOutput: EventEmitter<boolean> = new EventEmitter();
  constructor(public router: Router,public responsive: BreakpointObserver, private starNotify: StarNotifyService, public starServices: starServices, public starlib1: Starlib1) {
   this.router = router;
  this.title =  this.starServices.getNLS([],"scd_application_events.scd_application_events.component_title","");
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
  public routineName = "scd_application_events";
  public alignment: TabAlignment = 'start';
  public selectedTab = 2;
  public masterParams;
  public gap: any = {
  	rows: 1,
  	columns: 1,
    };

  public componentConfig: componentConfigDef;

  public grid_0_SCD_EVENT_CHILD : scdeventChildScdAeEventChildren;
  public form_1_SCD_EVENT : scdeventScdAeEvent;
  public  SCD_EVENT_CHILDGrid_0Config : componentConfigDef;
  public  SCD_EVENTForm_1Config : componentConfigDef;
  public PDFfileName = this.title + ".PDF";
  public routineAuth = "ScdApplicationEvents";

  public ngAfterViewInit() {
    this.starServices.setRTL();
  }
  private componentConfigChangeEvent!: Subscription;
  public compSelector = 'app-scd-application-events';
  public masterKeyNameArr = ["EVENT_CHILD_ID","EVENT_ID"];

  public masterINSERT = 'INSERT_SCD_EVENT_CHILD';
  public masterDataSource = 'SCD_EVENT_CHILD';
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
   this.SCD_EVENT_CHILDGrid_0Config = new componentConfigDef();
   this.SCD_EVENT_CHILDGrid_0Config.title = this.starServices.getNLS([],"scd_application_events.scd_application_events.compsTitleID1","Events");
   this.SCD_EVENT_CHILDGrid_0Config.isMaster = true;
   this.SCD_EVENT_CHILDGrid_0Config.isSearchScreen = this.isSearchScreen;
   if (typeof this['steps']  !== 'undefined') {
     this.SCD_EVENT_CHILDGrid_0Config.queryable = false;
     this.SCD_EVENT_CHILDGrid_0Config.removeable = false;
     this.SCD_EVENT_CHILDGrid_0Config.updateable = false;
     this.SCD_EVENT_CHILDGrid_0Config.navigable = false;
     this.SCD_EVENT_CHILDGrid_0Config.insertable = false;
   }
   this.SCD_EVENTForm_1Config = new componentConfigDef();
   this.SCD_EVENTForm_1Config.title = this.starServices.getNLS([],"scd_application_events.scd_application_events.compsTitleID2","Event");
   this.SCD_EVENTForm_1Config.isChild = true;
   if (typeof this['steps']  !== 'undefined') {
     this.SCD_EVENTForm_1Config.navigable = false;
     //this.SCD_EVENTForm_1Config.insertable = true;
     //this.SCD_EVENTForm_1Config.removeable = true;
   }
  }
  public ngOnDestroy(): void {
     // Unsubscribe the event once not needed.
     if (typeof this.componentConfigChangeEvent !== 'undefined') this.componentConfigChangeEvent.unsubscribe();
  }
  public readCompletedHandler( form_SCD_EVENT_CHILD) {
    let masterKeyArr = [form_SCD_EVENT_CHILD.EVENT_CHILD_ID,form_SCD_EVENT_CHILD.EVENT_ID];
    let masterKeyNameArr = ["EVENT_CHILD_ID","EVENT_ID"];
     if (this.isSearchScreen == true) 
	  {
    	this.SCD_EVENTForm_1Config = new componentConfigDef();
    	this.SCD_EVENTForm_1Config.formattedWhere  = form_SCD_EVENT_CHILD;
    	return;
	  }
    //this.form_1_SCD_EVENT = new scdeventScdAeEvent();
    //for (let i = 0; i< masterKeyNameArr.length; i++){
    //   this.form_1_SCD_EVENT[masterKeyNameArr[i]] = masterKeyArr[i];
    //}
    this.SCD_EVENTForm_1Config = new componentConfigDef();
    this.SCD_EVENTForm_1Config.masterKeyArr =  [form_SCD_EVENT_CHILD.EVENT_CHILD_ID,form_SCD_EVENT_CHILD.EVENT_ID];
    this.SCD_EVENTForm_1Config.masterKeyNameArr =  ["EVENT_CHILD_ID","EVENT_ID"];
    this.SCD_EVENTForm_1Config.masterReadCompleted = true;
   if (typeof this['steps'] !== 'undefined') {
     this.SCD_EVENTForm_1Config.queryable = false;
     //this.SCD_EVENTForm_1Config.removeable = true;
     //this.SCD_EVENTForm_1Config.updateable = true;
   }
  }
  async clearCompletedHandler( form_SCD_EVENT_CHILD) {
     await this.starServices.sleep(200);
    this.SCD_EVENTForm_1Config = new componentConfigDef();
  }
  public keyNameArr = ["EVENT_CHILD_ID","EVENT_ID"];

  public callreadSavedMaster( ) {
    let masterTable = 'SCD_EVENT_CHILD' 
     }
  public sendToMaster(componentConfig){ 
  	this.SCD_EVENT_CHILDGrid_0Config = new componentConfigDef(); 
  	this.SCD_EVENT_CHILDGrid_0Config = componentConfig; 
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
  	this.SCD_EVENTForm_1Config = new componentConfigDef(); 
  	this.SCD_EVENTForm_1Config = componentConfig; 
   }
 } 
  public saveCompletedHandler( form_SCD_EVENT_CHILD) {
 let key:any = [form_SCD_EVENT_CHILD.EVENT_CHILD_ID,form_SCD_EVENT_CHILD.EVENT_ID]; 
 if ( key != '') { 
    this.SCD_EVENTForm_1Config = new componentConfigDef();
    this.SCD_EVENTForm_1Config.masterSaved = form_SCD_EVENT_CHILD;
    this.SCD_EVENTForm_1Config.masterKeyArr =  [form_SCD_EVENT_CHILD.EVENT_CHILD_ID,form_SCD_EVENT_CHILD.EVENT_ID];
    this.SCD_EVENTForm_1Config.masterKeyNameArr =  ["EVENT_CHILD_ID","EVENT_ID"];
  
    this.saveTriggerOutput.emit(form_SCD_EVENT_CHILD);
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
        this.grid_0_SCD_EVENT_CHILD = form;
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
    if (this.paramConfig.DEBUG_FLAG) console.log("ComponentConfig:ScdApplicationEventsComponent:",ComponentConfig);
    if (typeof ComponentConfig !== "undefined"){
       this.componentConfig = this.starServices.setComponentConfig(ComponentConfig, this.componentConfig  );
       if (ComponentConfig.languageChanged != null) { 
           setTimeout(() => {
             this.SCD_EVENT_CHILDGrid_0Config = new componentConfigDef();
             this.SCD_EVENT_CHILDGrid_0Config.languageChanged = ComponentConfig.languageChanged;
             this.SCD_EVENT_CHILDGrid_0Config.title = this.starServices.getNLS([],"scd_application_events.scd_application_events.compsTitleID1","Events");
             this.SCD_EVENTForm_1Config = new componentConfigDef();
             this.SCD_EVENTForm_1Config.languageChanged = ComponentConfig.languageChanged;
             this.SCD_EVENTForm_1Config.title = this.starServices.getNLS([],"scd_application_events.scd_application_events.compsTitleID2","Event");
           this.setSteps(this);
           }, 400);
       }
  
   		
       if (ComponentConfig.masterParams != null) {
   		
       }
       else{
       this.SCD_EVENT_CHILDGrid_0Config = new componentConfigDef();
       this.SCD_EVENT_CHILDGrid_0Config = ComponentConfig;
       this.SCD_EVENTForm_1Config = new componentConfigDef();
       this.SCD_EVENTForm_1Config = ComponentConfig;
      if (ComponentConfig.masterSaved != null)
      {
       this.SCD_EVENT_CHILDGrid_0Config.masterSaved = ComponentConfig.masterSaved;
       this.SCD_EVENTForm_1Config.masterSaved = ComponentConfig.masterSaved;
      }
      if (ComponentConfig.newRec != null)
      {
       this.SCD_EVENT_CHILDGrid_0Config.newRec = ComponentConfig.newRec;
       this.SCD_EVENTForm_1Config.newRec = ComponentConfig.newRec;
      }
      if (ComponentConfig.clearScreen != null)
      {
       this.SCD_EVENT_CHILDGrid_0Config.clearScreen = ComponentConfig.clearScreen;
       this.SCD_EVENTForm_1Config.clearScreen = ComponentConfig.clearScreen;
	   }
      if ((ComponentConfig.masterKeyArr != null) && (ComponentConfig.masterKeyNameArr != null) )
      {
       if ((ComponentConfig.masterKeyArr.length != 0) && (ComponentConfig.masterKeyNameArr.length != 0) )
       {
         this.SCD_EVENT_CHILDGrid_0Config.masterKeyArr = ComponentConfig.masterKeyArr;
         this.SCD_EVENT_CHILDGrid_0Config.masterKeyNameArr = ComponentConfig.masterKeyNameArr;
         if (ComponentConfig.masterReadCompleted != null) 
         {
             this.SCD_EVENT_CHILDGrid_0Config.masterReadCompleted = ComponentConfig.masterReadCompleted;
          }
         this.SCD_EVENTForm_1Config.masterKeyArr = ComponentConfig.masterKeyArr;
         this.SCD_EVENTForm_1Config.masterKeyNameArr = ComponentConfig.masterKeyNameArr;
         if (ComponentConfig.masterReadCompleted != null) 
         {
             this.SCD_EVENTForm_1Config.masterReadCompleted = ComponentConfig.masterReadCompleted;
          }
       }
      }
     }
    }
  }
   public form_1_SCD_EVENTOpened = false;
  public  form_1_SCD_EVENTClose() { 
    this.form_1_SCD_EVENTOpened = false;  
  }
  public  form_1_SCD_EVENTOpen() { 
    this.form_1_SCD_EVENTOpened = true;  
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
