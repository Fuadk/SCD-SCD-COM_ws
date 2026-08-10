import { Component, OnInit, Output,Input, EventEmitter, HostListener } from '@angular/core';
import {  scdapplicationScdAdApplication  ,scddiagramScdScdDiagramDiagram      ,scdalarmScdGroupMembership  , componentConfigDef} from '@modeldir/model';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { Subscription } from 'rxjs';
import { starServices } from 'starlib';
import { Starlib1 } from '../../Starlib1';
import { Router } from '@angular/router';
import { StarNotifyService } from '../../../services/starnotification.service';
import { TabAlignment } from '@progress/kendo-angular-layout';
declare function getParamConfig():any;

@Component({

  selector: 'app-scd-appboard',
  templateUrl: './scd-appboard.component.html',
  styleUrls: ['./scd-appboard.component.scss'],
  standalone: false
})
export class ScdAppboardComponent implements OnInit {
  @Output() saveTriggerOutput: EventEmitter<any> = new EventEmitter();
  @Output() formValidationChangedOutput: EventEmitter<boolean> = new EventEmitter();
  constructor(public router: Router,public responsive: BreakpointObserver, private starNotify: StarNotifyService, public starServices: starServices, public starlib1: Starlib1) {
   this.router = router;
  this.title =  this.starServices.getNLS([],"scd_appboard.scd_appboard.component_title","");
    this.paramConfig = getParamConfig();
    this.componentConfig = new componentConfigDef();
    if (this.visibleOK_BTNS)
	     this.componentConfig.showToolBar = !this.visibleOK_BTNS; 
	this.handleComponentConfig(this.componentConfig); 
  }
  public showToolBar = false;
  public paramConfig; 
  public title = '';
  public isPhonePortrait = false;
  public customerFacing = false;
  public isSearchScreen = false;
  public routineName = "scd_appboard";
  public alignment: TabAlignment = 'start';
  public selectedTab = 2;
  public masterParams;
  public gap: any = {
  	rows: 1,
  	columns: 1,
    };

  public componentConfig: componentConfigDef;

  public form_0_SCD_APPLICATION : scdapplicationScdAdApplication;
  public diagram_1_SCD_DIAGRAM : scddiagramScdScdDiagramDiagram;
  public diagram_2_SCD_DIAGRAM : scddiagramScdScdDiagramDiagram;
  public diagram_3_SCD_DIAGRAM : scddiagramScdScdDiagramDiagram;
  public formtabs_4_SCD_ALARM : scdalarmScdGroupMembership;
  public  SCD_APPLICATIONForm_0Config : componentConfigDef;
  public  SCD_DIAGRAMDiagram_1Config : componentConfigDef;
  public  SCD_DIAGRAMDiagram_2Config : componentConfigDef;
  public  SCD_DIAGRAMDiagram_3Config : componentConfigDef;
  public  SCD_ALARMFormtabs_4Config : componentConfigDef;
  public PDFfileName = this.title + ".PDF";
  public routineAuth = "ScdAppboard";

  public ngAfterViewInit() {
    this.starServices.setRTL();
  }
  private componentConfigChangeEvent!: Subscription;
  public compSelector = 'app-scd-appboard';
  public masterKeyNameArr = ["APPLICATION_ID"];

  public masterINSERT = 'INSERT_SCD_APPLICATION';
  public masterDataSource = 'SCD_APPLICATION';
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
   this.SCD_APPLICATIONForm_0Config = new componentConfigDef();
   this.SCD_APPLICATIONForm_0Config.title = this.starServices.getNLS([],"scd_appboard.scd_appboard.compsTitleID1","Application");
   this.SCD_APPLICATIONForm_0Config.isMaster = true;
   this.SCD_APPLICATIONForm_0Config.isSearchScreen = this.isSearchScreen;
   if (typeof this['steps']  !== 'undefined') {
     this.SCD_APPLICATIONForm_0Config.queryable = false;
     this.SCD_APPLICATIONForm_0Config.removeable = false;
     this.SCD_APPLICATIONForm_0Config.updateable = false;
     this.SCD_APPLICATIONForm_0Config.navigable = false;
     this.SCD_APPLICATIONForm_0Config.insertable = false;
   }
   this.SCD_DIAGRAMDiagram_1Config = new componentConfigDef();
   this.SCD_DIAGRAMDiagram_1Config.title = this.starServices.getNLS([],"scd_appboard.scd_appboard.compsTitleID2","Diagram");
   this.SCD_DIAGRAMDiagram_1Config.isChild = true;
   this.SCD_DIAGRAMDiagram_1Config.masterSelector = 'app-scd-appboard';
   if (typeof this['steps']  !== 'undefined') {
     this.SCD_DIAGRAMDiagram_1Config.navigable = false;
     //this.SCD_DIAGRAMDiagram_1Config.insertable = true;
     //this.SCD_DIAGRAMDiagram_1Config.removeable = true;
   }
   this.SCD_DIAGRAMDiagram_2Config = new componentConfigDef();
   this.SCD_DIAGRAMDiagram_2Config.title = this.starServices.getNLS([],"scd_appboard.scd_appboard.compsTitleID3","Diagram1");
   this.SCD_DIAGRAMDiagram_2Config.isChild = true;
   this.SCD_DIAGRAMDiagram_2Config.masterSelector = 'app-scd-appboard';
   if (typeof this['steps']  !== 'undefined') {
     this.SCD_DIAGRAMDiagram_2Config.navigable = false;
     //this.SCD_DIAGRAMDiagram_2Config.insertable = true;
     //this.SCD_DIAGRAMDiagram_2Config.removeable = true;
   }
   this.SCD_DIAGRAMDiagram_3Config = new componentConfigDef();
   this.SCD_DIAGRAMDiagram_3Config.title = this.starServices.getNLS([],"scd_appboard.scd_appboard.compsTitleID4","Diagram 2");
   this.SCD_DIAGRAMDiagram_3Config.isChild = true;
   this.SCD_DIAGRAMDiagram_3Config.masterSelector = 'app-scd-appboard';
   if (typeof this['steps']  !== 'undefined') {
     this.SCD_DIAGRAMDiagram_3Config.navigable = false;
     //this.SCD_DIAGRAMDiagram_3Config.insertable = true;
     //this.SCD_DIAGRAMDiagram_3Config.removeable = true;
   }
   this.SCD_ALARMFormtabs_4Config = new componentConfigDef();
   this.SCD_ALARMFormtabs_4Config.title = this.starServices.getNLS([],"scd_appboard.scd_appboard.compsTitleID5","Groups");
   this.SCD_ALARMFormtabs_4Config.isChild = true;
   this.SCD_ALARMFormtabs_4Config.masterSelector = 'app-scd-appboard';
   if (typeof this['steps']  !== 'undefined') {
     this.SCD_ALARMFormtabs_4Config.navigable = false;
     //this.SCD_ALARMFormtabs_4Config.insertable = true;
     //this.SCD_ALARMFormtabs_4Config.removeable = true;
   }
  }
  public ngOnDestroy(): void {
     // Unsubscribe the event once not needed.
     if (typeof this.componentConfigChangeEvent !== 'undefined') this.componentConfigChangeEvent.unsubscribe();
  }
  public readCompletedHandler( form_SCD_APPLICATION) {
    let masterKeyArr = [form_SCD_APPLICATION.APPLICATION_ID];
    let masterKeyNameArr = ["APPLICATION_ID"];
     if (this.isSearchScreen == true) 
	  {
    	this.SCD_DIAGRAMDiagram_1Config = new componentConfigDef();
    	this.SCD_DIAGRAMDiagram_1Config.formattedWhere  = form_SCD_APPLICATION;
    	this.SCD_DIAGRAMDiagram_2Config = new componentConfigDef();
    	this.SCD_DIAGRAMDiagram_2Config.formattedWhere  = form_SCD_APPLICATION;
    	this.SCD_DIAGRAMDiagram_3Config = new componentConfigDef();
    	this.SCD_DIAGRAMDiagram_3Config.formattedWhere  = form_SCD_APPLICATION;
    	this.SCD_ALARMFormtabs_4Config = new componentConfigDef();
    	this.SCD_ALARMFormtabs_4Config.formattedWhere  = form_SCD_APPLICATION;
    	return;
	  }
    //this.diagram_1_SCD_DIAGRAM = new scddiagramScdScdDiagramDiagram();
    //for (let i = 0; i< masterKeyNameArr.length; i++){
    //   this.diagram_1_SCD_DIAGRAM[masterKeyNameArr[i]] = masterKeyArr[i];
    //}
    this.SCD_DIAGRAMDiagram_1Config = new componentConfigDef();
    this.SCD_DIAGRAMDiagram_1Config.masterKeyArr =  [form_SCD_APPLICATION.APPLICATION_ID];
    this.SCD_DIAGRAMDiagram_1Config.masterKeyNameArr =  ["APPLICATION_ID"];
    this.SCD_DIAGRAMDiagram_1Config.masterReadCompleted = true;
   if (typeof this['steps'] !== 'undefined') {
     this.SCD_DIAGRAMDiagram_1Config.queryable = false;
     //this.SCD_DIAGRAMDiagram_1Config.removeable = true;
     //this.SCD_DIAGRAMDiagram_1Config.updateable = true;
   }
    //this.diagram_2_SCD_DIAGRAM = new scddiagramScdScdDiagramDiagram();
    //for (let i = 0; i< masterKeyNameArr.length; i++){
    //   this.diagram_2_SCD_DIAGRAM[masterKeyNameArr[i]] = masterKeyArr[i];
    //}
    this.SCD_DIAGRAMDiagram_2Config = new componentConfigDef();
    this.SCD_DIAGRAMDiagram_2Config.masterKeyArr =  [form_SCD_APPLICATION.APPLICATION_ID];
    this.SCD_DIAGRAMDiagram_2Config.masterKeyNameArr =  ["APPLICATION_ID"];
    this.SCD_DIAGRAMDiagram_2Config.masterReadCompleted = true;
   if (typeof this['steps'] !== 'undefined') {
     this.SCD_DIAGRAMDiagram_2Config.queryable = false;
     //this.SCD_DIAGRAMDiagram_2Config.removeable = true;
     //this.SCD_DIAGRAMDiagram_2Config.updateable = true;
   }
    //this.diagram_3_SCD_DIAGRAM = new scddiagramScdScdDiagramDiagram();
    //for (let i = 0; i< masterKeyNameArr.length; i++){
    //   this.diagram_3_SCD_DIAGRAM[masterKeyNameArr[i]] = masterKeyArr[i];
    //}
    this.SCD_DIAGRAMDiagram_3Config = new componentConfigDef();
    this.SCD_DIAGRAMDiagram_3Config.masterKeyArr =  [form_SCD_APPLICATION.APPLICATION_ID];
    this.SCD_DIAGRAMDiagram_3Config.masterKeyNameArr =  ["APPLICATION_ID"];
    this.SCD_DIAGRAMDiagram_3Config.masterReadCompleted = true;
   if (typeof this['steps'] !== 'undefined') {
     this.SCD_DIAGRAMDiagram_3Config.queryable = false;
     //this.SCD_DIAGRAMDiagram_3Config.removeable = true;
     //this.SCD_DIAGRAMDiagram_3Config.updateable = true;
   }
    //this.formtabs_4_SCD_ALARM = new scdalarmScdGroupMembership();
    //for (let i = 0; i< masterKeyNameArr.length; i++){
    //   this.formtabs_4_SCD_ALARM[masterKeyNameArr[i]] = masterKeyArr[i];
    //}
    this.SCD_ALARMFormtabs_4Config = new componentConfigDef();
    this.SCD_ALARMFormtabs_4Config.masterKeyArr =  [form_SCD_APPLICATION.APPLICATION_ID];
    this.SCD_ALARMFormtabs_4Config.masterKeyNameArr =  ["APPLICATION_ID"];
    this.SCD_ALARMFormtabs_4Config.masterReadCompleted = true;
   if (typeof this['steps'] !== 'undefined') {
     this.SCD_ALARMFormtabs_4Config.queryable = false;
     //this.SCD_ALARMFormtabs_4Config.removeable = true;
     //this.SCD_ALARMFormtabs_4Config.updateable = true;
   }
  }
  async clearCompletedHandler( form_SCD_APPLICATION) {
     await this.starServices.sleep(200);
    this.SCD_DIAGRAMDiagram_1Config = new componentConfigDef();
     await this.starServices.sleep(200);
    this.SCD_DIAGRAMDiagram_2Config = new componentConfigDef();
     await this.starServices.sleep(200);
    this.SCD_DIAGRAMDiagram_3Config = new componentConfigDef();
     await this.starServices.sleep(200);
    this.SCD_ALARMFormtabs_4Config = new componentConfigDef();
  }
  public keyNameArr = ["APPLICATION_ID"];

  public callreadSavedMaster( ) {
    let masterTable = 'SCD_APPLICATION' 
     }
  public sendToMaster(componentConfig){ 
  	this.SCD_APPLICATIONForm_0Config = new componentConfigDef(); 
  	this.SCD_APPLICATIONForm_0Config = componentConfig; 
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
  	this.SCD_DIAGRAMDiagram_1Config = new componentConfigDef(); 
  	this.SCD_DIAGRAMDiagram_1Config = componentConfig; 
   }
   if ( (pageNo + 1) == 3){
  	this.SCD_DIAGRAMDiagram_2Config = new componentConfigDef(); 
  	this.SCD_DIAGRAMDiagram_2Config = componentConfig; 
   }
   if ( (pageNo + 1) == 4){
  	this.SCD_DIAGRAMDiagram_3Config = new componentConfigDef(); 
  	this.SCD_DIAGRAMDiagram_3Config = componentConfig; 
   }
   if ( (pageNo + 1) == 5){
  	this.SCD_ALARMFormtabs_4Config = new componentConfigDef(); 
  	this.SCD_ALARMFormtabs_4Config = componentConfig; 
   }
 } 
  public saveCompletedHandler( form_SCD_APPLICATION) {
 let key:any = [form_SCD_APPLICATION.APPLICATION_ID]; 
 if ( key != '') { 
    this.SCD_DIAGRAMDiagram_1Config = new componentConfigDef();
    this.SCD_DIAGRAMDiagram_1Config.masterSaved = form_SCD_APPLICATION;
    this.SCD_DIAGRAMDiagram_1Config.masterKeyArr =  [form_SCD_APPLICATION.APPLICATION_ID];
    this.SCD_DIAGRAMDiagram_1Config.masterKeyNameArr =  ["APPLICATION_ID"];
  
    this.SCD_DIAGRAMDiagram_2Config = new componentConfigDef();
    this.SCD_DIAGRAMDiagram_2Config.masterSaved = form_SCD_APPLICATION;
    this.SCD_DIAGRAMDiagram_2Config.masterKeyArr =  [form_SCD_APPLICATION.APPLICATION_ID];
    this.SCD_DIAGRAMDiagram_2Config.masterKeyNameArr =  ["APPLICATION_ID"];
  
    this.SCD_DIAGRAMDiagram_3Config = new componentConfigDef();
    this.SCD_DIAGRAMDiagram_3Config.masterSaved = form_SCD_APPLICATION;
    this.SCD_DIAGRAMDiagram_3Config.masterKeyArr =  [form_SCD_APPLICATION.APPLICATION_ID];
    this.SCD_DIAGRAMDiagram_3Config.masterKeyNameArr =  ["APPLICATION_ID"];
  
    this.SCD_ALARMFormtabs_4Config = new componentConfigDef();
    this.SCD_ALARMFormtabs_4Config.masterSaved = form_SCD_APPLICATION;
    this.SCD_ALARMFormtabs_4Config.masterKeyArr =  [form_SCD_APPLICATION.APPLICATION_ID];
    this.SCD_ALARMFormtabs_4Config.masterKeyNameArr =  ["APPLICATION_ID"];
  
    this.saveTriggerOutput.emit(form_SCD_APPLICATION);
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
        this.form_0_SCD_APPLICATION = form;
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
    if (this.paramConfig.DEBUG_FLAG) console.log("ComponentConfig:ScdAppboardComponent:",ComponentConfig);
    if (typeof ComponentConfig !== "undefined"){
       this.componentConfig = this.starServices.setComponentConfig(ComponentConfig, this.componentConfig  );
       if (ComponentConfig.languageChanged != null) { 
           setTimeout(() => {
             this.SCD_APPLICATIONForm_0Config = new componentConfigDef();
             this.SCD_APPLICATIONForm_0Config.languageChanged = ComponentConfig.languageChanged;
             this.SCD_APPLICATIONForm_0Config.title = this.starServices.getNLS([],"scd_appboard.scd_appboard.compsTitleID1","Application");
             this.SCD_DIAGRAMDiagram_1Config = new componentConfigDef();
             this.SCD_DIAGRAMDiagram_1Config.languageChanged = ComponentConfig.languageChanged;
             this.SCD_DIAGRAMDiagram_1Config.title = this.starServices.getNLS([],"scd_appboard.scd_appboard.compsTitleID2","Diagram");
             this.SCD_DIAGRAMDiagram_2Config = new componentConfigDef();
             this.SCD_DIAGRAMDiagram_2Config.languageChanged = ComponentConfig.languageChanged;
             this.SCD_DIAGRAMDiagram_2Config.title = this.starServices.getNLS([],"scd_appboard.scd_appboard.compsTitleID3","Diagram1");
             this.SCD_DIAGRAMDiagram_3Config = new componentConfigDef();
             this.SCD_DIAGRAMDiagram_3Config.languageChanged = ComponentConfig.languageChanged;
             this.SCD_DIAGRAMDiagram_3Config.title = this.starServices.getNLS([],"scd_appboard.scd_appboard.compsTitleID4","Diagram 2");
             this.SCD_ALARMFormtabs_4Config = new componentConfigDef();
             this.SCD_ALARMFormtabs_4Config.languageChanged = ComponentConfig.languageChanged;
             this.SCD_ALARMFormtabs_4Config.title = this.starServices.getNLS([],"scd_appboard.scd_appboard.compsTitleID5","Groups");
           this.setSteps(this);
           }, 400);
       }
  
   		
       if (ComponentConfig.masterParams != null) {
   		
       }
       else{
       this.SCD_APPLICATIONForm_0Config = new componentConfigDef();
       this.SCD_APPLICATIONForm_0Config = ComponentConfig;
       this.SCD_DIAGRAMDiagram_1Config = new componentConfigDef();
       this.SCD_DIAGRAMDiagram_1Config = ComponentConfig;
       this.SCD_DIAGRAMDiagram_2Config = new componentConfigDef();
       this.SCD_DIAGRAMDiagram_2Config = ComponentConfig;
       this.SCD_DIAGRAMDiagram_3Config = new componentConfigDef();
       this.SCD_DIAGRAMDiagram_3Config = ComponentConfig;
       this.SCD_ALARMFormtabs_4Config = new componentConfigDef();
       this.SCD_ALARMFormtabs_4Config = ComponentConfig;
      if (ComponentConfig.masterSaved != null)
      {
       this.SCD_APPLICATIONForm_0Config.masterSaved = ComponentConfig.masterSaved;
       this.SCD_DIAGRAMDiagram_1Config.masterSaved = ComponentConfig.masterSaved;
       this.SCD_DIAGRAMDiagram_2Config.masterSaved = ComponentConfig.masterSaved;
       this.SCD_DIAGRAMDiagram_3Config.masterSaved = ComponentConfig.masterSaved;
       this.SCD_ALARMFormtabs_4Config.masterSaved = ComponentConfig.masterSaved;
      }
      if (ComponentConfig.newRec != null)
      {
       this.SCD_APPLICATIONForm_0Config.newRec = ComponentConfig.newRec;
       this.SCD_DIAGRAMDiagram_1Config.newRec = ComponentConfig.newRec;
       this.SCD_DIAGRAMDiagram_2Config.newRec = ComponentConfig.newRec;
       this.SCD_DIAGRAMDiagram_3Config.newRec = ComponentConfig.newRec;
       this.SCD_ALARMFormtabs_4Config.newRec = ComponentConfig.newRec;
      }
      if (ComponentConfig.clearScreen != null)
      {
       this.SCD_APPLICATIONForm_0Config.clearScreen = ComponentConfig.clearScreen;
       this.SCD_DIAGRAMDiagram_1Config.clearScreen = ComponentConfig.clearScreen;
       this.SCD_DIAGRAMDiagram_2Config.clearScreen = ComponentConfig.clearScreen;
       this.SCD_DIAGRAMDiagram_3Config.clearScreen = ComponentConfig.clearScreen;
       this.SCD_ALARMFormtabs_4Config.clearScreen = ComponentConfig.clearScreen;
	   }
      if ((ComponentConfig.masterKeyArr != null) && (ComponentConfig.masterKeyNameArr != null) )
      {
       if ((ComponentConfig.masterKeyArr.length != 0) && (ComponentConfig.masterKeyNameArr.length != 0) )
       {
         this.SCD_APPLICATIONForm_0Config.masterKeyArr = ComponentConfig.masterKeyArr;
         this.SCD_APPLICATIONForm_0Config.masterKeyNameArr = ComponentConfig.masterKeyNameArr;
         if (ComponentConfig.masterReadCompleted != null) 
         {
             this.SCD_APPLICATIONForm_0Config.masterReadCompleted = ComponentConfig.masterReadCompleted;
          }
         this.SCD_DIAGRAMDiagram_1Config.masterKeyArr = ComponentConfig.masterKeyArr;
         this.SCD_DIAGRAMDiagram_1Config.masterKeyNameArr = ComponentConfig.masterKeyNameArr;
         if (ComponentConfig.masterReadCompleted != null) 
         {
             this.SCD_DIAGRAMDiagram_1Config.masterReadCompleted = ComponentConfig.masterReadCompleted;
          }
         this.SCD_DIAGRAMDiagram_2Config.masterKeyArr = ComponentConfig.masterKeyArr;
         this.SCD_DIAGRAMDiagram_2Config.masterKeyNameArr = ComponentConfig.masterKeyNameArr;
         if (ComponentConfig.masterReadCompleted != null) 
         {
             this.SCD_DIAGRAMDiagram_2Config.masterReadCompleted = ComponentConfig.masterReadCompleted;
          }
         this.SCD_DIAGRAMDiagram_3Config.masterKeyArr = ComponentConfig.masterKeyArr;
         this.SCD_DIAGRAMDiagram_3Config.masterKeyNameArr = ComponentConfig.masterKeyNameArr;
         if (ComponentConfig.masterReadCompleted != null) 
         {
             this.SCD_DIAGRAMDiagram_3Config.masterReadCompleted = ComponentConfig.masterReadCompleted;
          }
         this.SCD_ALARMFormtabs_4Config.masterKeyArr = ComponentConfig.masterKeyArr;
         this.SCD_ALARMFormtabs_4Config.masterKeyNameArr = ComponentConfig.masterKeyNameArr;
         if (ComponentConfig.masterReadCompleted != null) 
         {
             this.SCD_ALARMFormtabs_4Config.masterReadCompleted = ComponentConfig.masterReadCompleted;
          }
       }
      }
     }
    }
  }
   public diagram_1_SCD_DIAGRAMOpened = false;
  public  diagram_1_SCD_DIAGRAMClose() { 
    this.diagram_1_SCD_DIAGRAMOpened = false;  
  }
  public  diagram_1_SCD_DIAGRAMOpen() { 
    this.diagram_1_SCD_DIAGRAMOpened = true;  
  }
  
  public diagram_2_SCD_DIAGRAMOpened = false;
  public  diagram_2_SCD_DIAGRAMClose() { 
    this.diagram_2_SCD_DIAGRAMOpened = false;  
  }
  public  diagram_2_SCD_DIAGRAMOpen() { 
    this.diagram_2_SCD_DIAGRAMOpened = true;  
  }
  
  public diagram_3_SCD_DIAGRAMOpened = false;
  public  diagram_3_SCD_DIAGRAMClose() { 
    this.diagram_3_SCD_DIAGRAMOpened = false;  
  }
  public  diagram_3_SCD_DIAGRAMOpen() { 
    this.diagram_3_SCD_DIAGRAMOpened = true;  
  }
  
  public formtabs_4_SCD_ALARMOpened = false;
  public  formtabs_4_SCD_ALARMClose() { 
    this.formtabs_4_SCD_ALARMOpened = false;  
  }
  public  formtabs_4_SCD_ALARMOpen() { 
    this.formtabs_4_SCD_ALARMOpened = true;  
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
	public visibleOK_BTNS = false;
	
  }
