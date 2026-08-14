import { Component, OnInit, Output,Input, EventEmitter, HostListener } from '@angular/core';
import {  scdgroupMembershipScdGmGroup  ,scdgroupMembershipScdGmMembers  , componentConfigDef} from '@modeldir/model';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { Subscription } from 'rxjs';
import { starServices } from 'starlib';
import { Starlib1 } from '../../Starlib1';
import { Router } from '@angular/router';
import { StarNotifyService } from '../../../services/starnotification.service';
import { TabAlignment } from '@progress/kendo-angular-layout';
declare function getParamConfig():any;

@Component({

  selector: 'app-scd-group-membership',
  templateUrl: './scd-group-membership.component.html',
  styleUrls: ['./scd-group-membership.component.scss'],
  standalone: false
})
export class ScdGroupMembershipComponent implements OnInit {
  @Output() saveTriggerOutput: EventEmitter<any> = new EventEmitter();
  @Output() formValidationChangedOutput: EventEmitter<boolean> = new EventEmitter();
  constructor(public router: Router,public responsive: BreakpointObserver, private starNotify: StarNotifyService, public starServices: starServices, public starlib1: Starlib1) {
   this.router = router;
  this.title =  this.starServices.getNLS([],"scd_group_membership.scd_group_membership.component_title","");
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
  public routineName = "scd_group_membership";
  public alignment: TabAlignment = 'start';
  public selectedTab = 2;
  public masterParams;
  public gap: any = {
  	rows: 1,
  	columns: 1,
    };

  public componentConfig: componentConfigDef;

  public form_0_SCD_GROUP_MEMBERSHIP : scdgroupMembershipScdGmGroup;
  public grid_1_SCD_GROUP_MEMBERSHIP : scdgroupMembershipScdGmMembers;
  public  SCD_GROUP_MEMBERSHIPForm_0Config : componentConfigDef;
  public  hide_comp_1 = false
  public  SCD_GROUP_MEMBERSHIPGrid_1Config : componentConfigDef;
  public  hide_comp_2 = false
  public PDFfileName = this.title + ".PDF";
  public routineAuth = "ScdGroupMembership";

  public ngAfterViewInit() {
    this.starServices.setRTL();
  }
  private componentConfigChangeEvent!: Subscription;
  public compSelector = 'app-scd-group-membership';
  public masterKeyNameArr = ["GROUP_MEMBERSHIP_ID","APPLICATION_ID"];

  public masterINSERT = 'INSERT_SCD_GROUP_MEMBERSHIP';
  public masterDataSource = 'SCD_GROUP_MEMBERSHIP';
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
   this.SCD_GROUP_MEMBERSHIPForm_0Config = new componentConfigDef();
   this.SCD_GROUP_MEMBERSHIPForm_0Config.title = this.starServices.getNLS([],"scd_group_membership.scd_group_membership.compsTitleID1","Group");
   this.SCD_GROUP_MEMBERSHIPForm_0Config.isMaster = true;
   this.SCD_GROUP_MEMBERSHIPForm_0Config.isSearchScreen = this.isSearchScreen;
   if (typeof this['steps']  !== 'undefined') {
     this.SCD_GROUP_MEMBERSHIPForm_0Config.queryable = false;
     this.SCD_GROUP_MEMBERSHIPForm_0Config.removeable = false;
     this.SCD_GROUP_MEMBERSHIPForm_0Config.updateable = false;
     this.SCD_GROUP_MEMBERSHIPForm_0Config.navigable = false;
     this.SCD_GROUP_MEMBERSHIPForm_0Config.insertable = false;
   }
   this.SCD_GROUP_MEMBERSHIPGrid_1Config = new componentConfigDef();
   this.SCD_GROUP_MEMBERSHIPGrid_1Config.title = this.starServices.getNLS([],"scd_group_membership.scd_group_membership.compsTitleID2","Members");
   this.SCD_GROUP_MEMBERSHIPGrid_1Config.isChild = true;
   this.SCD_GROUP_MEMBERSHIPGrid_1Config.masterSelector = 'app-scd-group-membership';
   if (typeof this['steps']  !== 'undefined') {
     this.SCD_GROUP_MEMBERSHIPGrid_1Config.navigable = false;
     //this.SCD_GROUP_MEMBERSHIPGrid_1Config.insertable = true;
     //this.SCD_GROUP_MEMBERSHIPGrid_1Config.removeable = true;
   }
  }
  public ngOnDestroy(): void {
     // Unsubscribe the event once not needed.
     if (typeof this.componentConfigChangeEvent !== 'undefined') this.componentConfigChangeEvent.unsubscribe();
  }
  public readCompletedHandler( form_SCD_GROUP_MEMBERSHIP) {
    let masterKeyArr = [form_SCD_GROUP_MEMBERSHIP.GROUP_MEMBERSHIP_ID,form_SCD_GROUP_MEMBERSHIP.APPLICATION_ID];
    let masterKeyNameArr = ["GROUP_MEMBERSHIP_ID","APPLICATION_ID"];
     if (this.isSearchScreen == true) 
	  {
    	this.SCD_GROUP_MEMBERSHIPGrid_1Config = new componentConfigDef();
    	this.SCD_GROUP_MEMBERSHIPGrid_1Config.formattedWhere  = form_SCD_GROUP_MEMBERSHIP;
    	return;
	  }
    //this.grid_1_SCD_GROUP_MEMBERSHIP = new scdgroupMembershipScdGmMembers();
    //for (let i = 0; i< masterKeyNameArr.length; i++){
    //   this.grid_1_SCD_GROUP_MEMBERSHIP[masterKeyNameArr[i]] = masterKeyArr[i];
    //}
    this.SCD_GROUP_MEMBERSHIPGrid_1Config = new componentConfigDef();
    this.SCD_GROUP_MEMBERSHIPGrid_1Config.masterKeyArr =  [form_SCD_GROUP_MEMBERSHIP.GROUP_MEMBERSHIP_ID,form_SCD_GROUP_MEMBERSHIP.APPLICATION_ID];
    this.SCD_GROUP_MEMBERSHIPGrid_1Config.masterKeyNameArr =  ["GROUP_MEMBERSHIP_ID","APPLICATION_ID"];
    this.SCD_GROUP_MEMBERSHIPGrid_1Config.masterReadCompleted = true;
   if (typeof this['steps'] !== 'undefined') {
     this.SCD_GROUP_MEMBERSHIPGrid_1Config.queryable = false;
     //this.SCD_GROUP_MEMBERSHIPGrid_1Config.removeable = true;
     //this.SCD_GROUP_MEMBERSHIPGrid_1Config.updateable = true;
   }
  }
  async clearCompletedHandler( form_SCD_GROUP_MEMBERSHIP) {
     await this.starServices.sleep(200);
    this.SCD_GROUP_MEMBERSHIPGrid_1Config = new componentConfigDef();
  }
  public keyNameArr = ["GROUP_MEMBERSHIP_ID","APPLICATION_ID"];

  public callreadSavedMaster( ) {
    let masterTable = 'SCD_GROUP_MEMBERSHIP' 
     }
  public sendToMaster(componentConfig){ 
  	this.SCD_GROUP_MEMBERSHIPForm_0Config = new componentConfigDef(); 
  	this.SCD_GROUP_MEMBERSHIPForm_0Config = componentConfig; 
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
  	this.SCD_GROUP_MEMBERSHIPGrid_1Config = new componentConfigDef(); 
  	this.SCD_GROUP_MEMBERSHIPGrid_1Config = componentConfig; 
   }
 } 
  public saveCompletedHandler( form_SCD_GROUP_MEMBERSHIP) {
 let key:any = [form_SCD_GROUP_MEMBERSHIP.GROUP_MEMBERSHIP_ID,form_SCD_GROUP_MEMBERSHIP.APPLICATION_ID]; 
 if ( key != '') { 
    this.SCD_GROUP_MEMBERSHIPGrid_1Config = new componentConfigDef();
    this.SCD_GROUP_MEMBERSHIPGrid_1Config.masterSaved = form_SCD_GROUP_MEMBERSHIP;
    this.SCD_GROUP_MEMBERSHIPGrid_1Config.masterKeyArr =  [form_SCD_GROUP_MEMBERSHIP.GROUP_MEMBERSHIP_ID,form_SCD_GROUP_MEMBERSHIP.APPLICATION_ID];
    this.SCD_GROUP_MEMBERSHIPGrid_1Config.masterKeyNameArr =  ["GROUP_MEMBERSHIP_ID","APPLICATION_ID"];
  
    this.saveTriggerOutput.emit(form_SCD_GROUP_MEMBERSHIP);
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
        this.form_0_SCD_GROUP_MEMBERSHIP = form;
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
    if (this.paramConfig.DEBUG_FLAG) console.log("ComponentConfig:ScdGroupMembershipComponent:",ComponentConfig);
    if (typeof ComponentConfig !== "undefined"){
       this.componentConfig = this.starServices.setComponentConfig(ComponentConfig, this.componentConfig  );
       if (ComponentConfig.languageChanged != null) { 
           setTimeout(() => {
             this.SCD_GROUP_MEMBERSHIPForm_0Config = new componentConfigDef();
             this.SCD_GROUP_MEMBERSHIPForm_0Config.languageChanged = ComponentConfig.languageChanged;
             this.SCD_GROUP_MEMBERSHIPForm_0Config.title = this.starServices.getNLS([],"scd_group_membership.scd_group_membership.compsTitleID1","Group");
             this.SCD_GROUP_MEMBERSHIPGrid_1Config = new componentConfigDef();
             this.SCD_GROUP_MEMBERSHIPGrid_1Config.languageChanged = ComponentConfig.languageChanged;
             this.SCD_GROUP_MEMBERSHIPGrid_1Config.title = this.starServices.getNLS([],"scd_group_membership.scd_group_membership.compsTitleID2","Members");
           this.setSteps(this);
           }, 400);
       }
  
   		
       if (ComponentConfig.masterParams != null) {
   		
       }
       else{
       this.SCD_GROUP_MEMBERSHIPForm_0Config = new componentConfigDef();
       this.SCD_GROUP_MEMBERSHIPForm_0Config = ComponentConfig;
       this.SCD_GROUP_MEMBERSHIPGrid_1Config = new componentConfigDef();
       this.SCD_GROUP_MEMBERSHIPGrid_1Config = ComponentConfig;
      if (ComponentConfig.masterSaved != null)
      {
       this.SCD_GROUP_MEMBERSHIPForm_0Config.masterSaved = ComponentConfig.masterSaved;
       this.SCD_GROUP_MEMBERSHIPGrid_1Config.masterSaved = ComponentConfig.masterSaved;
      }
      if (ComponentConfig.newRec != null)
      {
       this.SCD_GROUP_MEMBERSHIPForm_0Config.newRec = ComponentConfig.newRec;
       this.SCD_GROUP_MEMBERSHIPGrid_1Config.newRec = ComponentConfig.newRec;
      }
      if (ComponentConfig.clearScreen != null)
      {
       this.SCD_GROUP_MEMBERSHIPForm_0Config.clearScreen = ComponentConfig.clearScreen;
       this.SCD_GROUP_MEMBERSHIPGrid_1Config.clearScreen = ComponentConfig.clearScreen;
	   }
      if ((ComponentConfig.masterKeyArr != null) && (ComponentConfig.masterKeyNameArr != null) )
      {
       if ((ComponentConfig.masterKeyArr.length != 0) && (ComponentConfig.masterKeyNameArr.length != 0) )
       {
         this.SCD_GROUP_MEMBERSHIPForm_0Config.masterKeyArr = ComponentConfig.masterKeyArr;
         this.SCD_GROUP_MEMBERSHIPForm_0Config.masterKeyNameArr = ComponentConfig.masterKeyNameArr;
         if (ComponentConfig.masterReadCompleted != null) 
         {
             this.SCD_GROUP_MEMBERSHIPForm_0Config.masterReadCompleted = ComponentConfig.masterReadCompleted;
          }
         this.SCD_GROUP_MEMBERSHIPGrid_1Config.masterKeyArr = ComponentConfig.masterKeyArr;
         this.SCD_GROUP_MEMBERSHIPGrid_1Config.masterKeyNameArr = ComponentConfig.masterKeyNameArr;
         if (ComponentConfig.masterReadCompleted != null) 
         {
             this.SCD_GROUP_MEMBERSHIPGrid_1Config.masterReadCompleted = ComponentConfig.masterReadCompleted;
          }
       }
      }
     }
    }
  }
   public grid_1_SCD_GROUP_MEMBERSHIPOpened = false;
  public  grid_1_SCD_GROUP_MEMBERSHIPClose() { 
    this.grid_1_SCD_GROUP_MEMBERSHIPOpened = false;  
  }
  public  grid_1_SCD_GROUP_MEMBERSHIPOpen() { 
    this.grid_1_SCD_GROUP_MEMBERSHIPOpened = true;  
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
