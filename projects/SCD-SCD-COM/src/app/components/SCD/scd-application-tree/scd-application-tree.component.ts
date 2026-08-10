import { Component, OnInit, Output,Input, EventEmitter, HostListener } from '@angular/core';
import {  scdarrowGeneralScdApArrowGeneral  , componentConfigDef} from '@modeldir/model';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { Subscription } from 'rxjs';
import { starServices } from 'starlib';
import { Starlib1 } from '../../Starlib1';
import { Router } from '@angular/router';
import { StarNotifyService } from '../../../services/starnotification.service';
import { TabAlignment } from '@progress/kendo-angular-layout';
declare function getParamConfig():any;

@Component({

  selector: 'app-scd-application-tree',
  templateUrl: './scd-application-tree.component.html',
  styleUrls: ['./scd-application-tree.component.scss'],
  standalone: false
})
export class ScdApplicationTreeComponent implements OnInit {
  @Output() saveTriggerOutput: EventEmitter<any> = new EventEmitter();
  @Output() formValidationChangedOutput: EventEmitter<boolean> = new EventEmitter();
  constructor(public router: Router,public responsive: BreakpointObserver, private starNotify: StarNotifyService, public starServices: starServices, public starlib1: Starlib1) {
   this.router = router;
  this.title =  this.starServices.getNLS([],"scd_application_tree.scd_application_tree.component_title","_del_Application Tree");
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
  public routineName = "scd_application_tree";
  public alignment: TabAlignment = 'start';
  public selectedTab = 2;
  public masterParams;
  public gap: any = {
  	rows: 1,
  	columns: 1,
    };

  public componentConfig: componentConfigDef;

  public form_0_SCD_ARROW_GENERAL : scdarrowGeneralScdApArrowGeneral;
  public  SCD_ARROW_GENERALForm_0Config : componentConfigDef;
  public PDFfileName = this.title + ".PDF";
  public routineAuth = "ScdApplicationTree";

  public ngAfterViewInit() {
    this.starServices.setRTL();
  }
  private componentConfigChangeEvent!: Subscription;
  public compSelector = 'app-scd-application-tree';
  public masterKeyNameArr = ["ARROW_GENERAL_ID","SHAPE_ID"];

  public masterINSERT = 'INSERT_SCD_ARROW_GENERAL';
  public masterDataSource = 'SCD_ARROW_GENERAL';
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
   this.SCD_ARROW_GENERALForm_0Config = new componentConfigDef();
   this.SCD_ARROW_GENERALForm_0Config.title = this.starServices.getNLS([],"scd_application_tree.scd_application_tree.compsTitleID1","Application Tree");
   this.SCD_ARROW_GENERALForm_0Config.isMaster = true;
   this.SCD_ARROW_GENERALForm_0Config.isSearchScreen = this.isSearchScreen;
   if (typeof this['steps']  !== 'undefined') {
     this.SCD_ARROW_GENERALForm_0Config.queryable = false;
     this.SCD_ARROW_GENERALForm_0Config.removeable = false;
     this.SCD_ARROW_GENERALForm_0Config.updateable = false;
     this.SCD_ARROW_GENERALForm_0Config.navigable = false;
     this.SCD_ARROW_GENERALForm_0Config.insertable = false;
   }
  }
  public ngOnDestroy(): void {
     // Unsubscribe the event once not needed.
     if (typeof this.componentConfigChangeEvent !== 'undefined') this.componentConfigChangeEvent.unsubscribe();
  }
  public readCompletedHandler( form_SCD_ARROW_GENERAL) {
    let masterKeyArr = [form_SCD_ARROW_GENERAL.ARROW_GENERAL_ID,form_SCD_ARROW_GENERAL.SHAPE_ID];
    let masterKeyNameArr = ["ARROW_GENERAL_ID","SHAPE_ID"];
     if (this.isSearchScreen == true) 
	  {
    	return;
	  }
  }
  async clearCompletedHandler( form_SCD_ARROW_GENERAL) {
  }
  public keyNameArr = ["ARROW_GENERAL_ID","SHAPE_ID"];

  public callreadSavedMaster( ) {
    let masterTable = 'SCD_ARROW_GENERAL' 
     }
  public sendToMaster(componentConfig){ 
  	this.SCD_ARROW_GENERALForm_0Config = new componentConfigDef(); 
  	this.SCD_ARROW_GENERALForm_0Config = componentConfig; 
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
  public saveCompletedHandler( form_SCD_ARROW_GENERAL) {
 let key:any = [form_SCD_ARROW_GENERAL.ARROW_GENERAL_ID,form_SCD_ARROW_GENERAL.SHAPE_ID]; 
 if ( key != '') { 
    this.saveTriggerOutput.emit(form_SCD_ARROW_GENERAL);
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
        this.form_0_SCD_ARROW_GENERAL = form;
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
    if (this.paramConfig.DEBUG_FLAG) console.log("ComponentConfig:ScdApplicationTreeComponent:",ComponentConfig);
    if (typeof ComponentConfig !== "undefined"){
       this.componentConfig = this.starServices.setComponentConfig(ComponentConfig, this.componentConfig  );
       if (ComponentConfig.languageChanged != null) { 
           setTimeout(() => {
             this.SCD_ARROW_GENERALForm_0Config = new componentConfigDef();
             this.SCD_ARROW_GENERALForm_0Config.languageChanged = ComponentConfig.languageChanged;
             this.SCD_ARROW_GENERALForm_0Config.title = this.starServices.getNLS([],"scd_application_tree.scd_application_tree.compsTitleID1","Application Tree");
           this.setSteps(this);
           }, 400);
       }
  
   		
       if (ComponentConfig.masterParams != null) {
   		
       }
       else{
       this.SCD_ARROW_GENERALForm_0Config = new componentConfigDef();
       this.SCD_ARROW_GENERALForm_0Config = ComponentConfig;
      if (ComponentConfig.masterSaved != null)
      {
       this.SCD_ARROW_GENERALForm_0Config.masterSaved = ComponentConfig.masterSaved;
      }
      if (ComponentConfig.newRec != null)
      {
       this.SCD_ARROW_GENERALForm_0Config.newRec = ComponentConfig.newRec;
      }
      if (ComponentConfig.clearScreen != null)
      {
       this.SCD_ARROW_GENERALForm_0Config.clearScreen = ComponentConfig.clearScreen;
	   }
      if ((ComponentConfig.masterKeyArr != null) && (ComponentConfig.masterKeyNameArr != null) )
      {
       if ((ComponentConfig.masterKeyArr.length != 0) && (ComponentConfig.masterKeyNameArr.length != 0) )
       {
         this.SCD_ARROW_GENERALForm_0Config.masterKeyArr = ComponentConfig.masterKeyArr;
         this.SCD_ARROW_GENERALForm_0Config.masterKeyNameArr = ComponentConfig.masterKeyNameArr;
         if (ComponentConfig.masterReadCompleted != null) 
         {
             this.SCD_ARROW_GENERALForm_0Config.masterReadCompleted = ComponentConfig.masterReadCompleted;
          }
       }
      }
     }
    }
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
