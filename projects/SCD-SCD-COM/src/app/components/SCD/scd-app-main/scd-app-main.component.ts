import { Component, OnInit, Output,Input, EventEmitter, HostListener } from '@angular/core';
import {  scdapplicationScdScdApplicationForm  ,scdappTreeViewScdScdAppTreeView  ,scdalarmScdMdiWin  , componentConfigDef} from '@modeldir/model';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { starServices } from 'starlib';
import { Subscription } from 'rxjs';
import { StarNotifyService } from '../../../services/starnotification.service';
import { TabAlignment } from '@progress/kendo-angular-layout';
declare function getParamConfig():any;

@Component({

  selector: 'app-scd-app-main',
  templateUrl: './scd-app-main.component.html',
  styleUrls: ['./scd-app-main.component.scss'],
  standalone: false
})
export class ScdAppMainComponent implements OnInit {
  @Output() saveTriggerOutput: EventEmitter<any> = new EventEmitter();
  @Output() formValidationChangedOutput: EventEmitter<boolean> = new EventEmitter();
  constructor(public responsive: BreakpointObserver, private starNotify: StarNotifyService, public starServices: starServices) {
  this.title =  this.starServices.getNLS([],"scd_app_main.scd_app_main.component_title","");
    this.paramConfig = getParamConfig();
    this.componentConfig = new componentConfigDef();
	this.componentConfig.showToolBar = !this.visibleOK_BTNS; 
    if (this.visibleOK_BTNS)
	     this.handleComponentConfig(this.componentConfig); 
  }
  public showToolBar = false;
  public paramConfig; 
  public title = '';
  public isPhonePortrait = false;
  public customerFacing = false;
  public isSearchScreen = false;
  public routineName = "scd_app_main";
  public alignment: TabAlignment = 'start';
  public selectedTab = 2;
  public gap: any = {
  	rows: 2,
  	columns: 2,
    };

  public componentConfig: componentConfigDef;

  public form_0_SCD_APPLICATION : scdapplicationScdScdApplicationForm;
  public tree_1_SCD_APP_TREE_VIEW : scdappTreeViewScdScdAppTreeView;
  public formtabs_2_SCD_ALARM : scdalarmScdMdiWin;
  public  SCD_APPLICATIONForm_0Config : componentConfigDef;
  public  SCD_APP_TREE_VIEWTree_1Config : componentConfigDef;
  public  SCD_ALARMFormtabs_2Config : componentConfigDef;
  public PDFfileName = this.title + ".PDF";
  public routineAuth = "ScdAppMain";

  public ngAfterViewInit() {
    this.starServices.setRTL();
  }
  private componentConfigChangeEvent!: Subscription;
  public compSelector = 'app-scd-app-main';
  public masterKeyNameArr = ["APPLICATION_ID"];

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
   this.SCD_APPLICATIONForm_0Config.isMaster = true;
   this.SCD_APPLICATIONForm_0Config.isSearchScreen = this.isSearchScreen;
   this.SCD_APP_TREE_VIEWTree_1Config = new componentConfigDef();
   this.SCD_APP_TREE_VIEWTree_1Config.title = this.starServices.getNLS([],"scd_app_main.scd_app_main.compsTitleID2","Tree");
   this.SCD_APP_TREE_VIEWTree_1Config.isChild = true;
   this.SCD_APP_TREE_VIEWTree_1Config.masterSelector = 'app-scd-app-main';
   this.SCD_ALARMFormtabs_2Config = new componentConfigDef();
   this.SCD_ALARMFormtabs_2Config.title = this.starServices.getNLS([],"scd_app_main.scd_app_main.compsTitleID3","MDI");
   this.SCD_ALARMFormtabs_2Config.isChild = true;
   this.SCD_ALARMFormtabs_2Config.masterSelector = 'app-scd-app-main';
  }
  public ngOnDestroy(): void {
     // Unsubscribe the event once not needed.
     if (typeof this.componentConfigChangeEvent !== 'undefined') this.componentConfigChangeEvent.unsubscribe();
  }
  public readCompletedHandler( form_SCD_APPLICATION) {
    if (Object.keys(form_SCD_APPLICATION).length == 0) {
    	this.SCD_APP_TREE_VIEWTree_1Config = new componentConfigDef();
    	this.SCD_APP_TREE_VIEWTree_1Config.clearComponent = true;
    }
    else{
    	let masterKeyArr = [form_SCD_APPLICATION.APPLICATION_ID];
    	let masterKeyNameArr = ["APPLICATION_ID"];
 		let seq = '2';
     	if ( (this.isSearchScreen == true) &&  ( seq == '2')) 
	 	 {
   	 	this.SCD_APP_TREE_VIEWTree_1Config = new componentConfigDef();
   	 	this.SCD_APP_TREE_VIEWTree_1Config.formattedWhere  = form_SCD_APPLICATION;
   	 	return;
		  }
    	//this.tree_1_SCD_APP_TREE_VIEW = new scdappTreeViewScdScdAppTreeView();
    	//for (let i = 0; i< masterKeyNameArr.length; i++){
       //	this.tree_1_SCD_APP_TREE_VIEW[masterKeyNameArr[i]] = masterKeyArr[i];
    	//}
    	this.SCD_APP_TREE_VIEWTree_1Config = new componentConfigDef();
    	this.SCD_APP_TREE_VIEWTree_1Config.masterKeyArr =  [form_SCD_APPLICATION.APPLICATION_ID];
    	this.SCD_APP_TREE_VIEWTree_1Config.masterKeyNameArr =  ["APPLICATION_ID"];
       this.SCD_APP_TREE_VIEWTree_1Config.masterReadCompleted = true;
    	}
    }
  public readCompletedHandler2( form_SCD_APP_TREE_VIEW) {
    if (Object.keys(form_SCD_APP_TREE_VIEW).length == 0) {
    	this.SCD_ALARMFormtabs_2Config = new componentConfigDef();
    	this.SCD_ALARMFormtabs_2Config.clearComponent = true;
    }
    else{
    	let masterKeyArr = [form_SCD_APP_TREE_VIEW.MENU_ID,form_SCD_APP_TREE_VIEW.APPLICATION_ID];
    	let masterKeyNameArr = [];
 		let seq = '3';
     	if ( (this.isSearchScreen == true) &&  ( seq == '2')) 
	 	 {
   	 	this.SCD_ALARMFormtabs_2Config = new componentConfigDef();
   	 	this.SCD_ALARMFormtabs_2Config.formattedWhere  = form_SCD_APP_TREE_VIEW;
   	 	return;
		  }
    	//this.formtabs_2_SCD_ALARM = new scdalarmScdMdiWin();
    	//for (let i = 0; i< masterKeyNameArr.length; i++){
       //	this.formtabs_2_SCD_ALARM[masterKeyNameArr[i]] = masterKeyArr[i];
    	//}
    	this.SCD_ALARMFormtabs_2Config = new componentConfigDef();
    	this.SCD_ALARMFormtabs_2Config.masterKeyArr =  [form_SCD_APP_TREE_VIEW.MENU_ID,form_SCD_APP_TREE_VIEW.APPLICATION_ID];
    	this.SCD_ALARMFormtabs_2Config.masterKeyNameArr =  [];
       this.SCD_ALARMFormtabs_2Config.masterReadCompleted = true;
    	}
    }
  async clearCompletedHandler( form_SCD_APPLICATION) {
     await this.starServices.sleep(200);
    this.SCD_APP_TREE_VIEWTree_1Config = new componentConfigDef();
     await this.starServices.sleep(200);
    this.SCD_ALARMFormtabs_2Config = new componentConfigDef();
  }
  public keyNameArr = ["APPLICATION_ID"];

  public callreadSavedMaster( ) {
    let masterTable = 'SCD_APPLICATION' 
     }
  public sendToMaster(componentConfig){ 
  	this.SCD_APPLICATIONForm_0Config = new componentConfigDef(); 
  	this.SCD_APPLICATIONForm_0Config = componentConfig; 
 } 
  public sendToChildren(componentConfig, pageNo){ 
   if (pageNo == 2){
  	this.SCD_APP_TREE_VIEWTree_1Config = new componentConfigDef(); 
  	this.SCD_APP_TREE_VIEWTree_1Config = componentConfig; 
   }
   if (pageNo == 3){
  	this.SCD_ALARMFormtabs_2Config = new componentConfigDef(); 
  	this.SCD_ALARMFormtabs_2Config = componentConfig; 
   }
 } 
  public saveCompletedHandler( form_SCD_APPLICATION) {
    this.SCD_APP_TREE_VIEWTree_1Config = new componentConfigDef();
    this.SCD_APP_TREE_VIEWTree_1Config.masterSaved = form_SCD_APPLICATION;
    this.SCD_APP_TREE_VIEWTree_1Config.masterKeyArr =  [form_SCD_APPLICATION.APPLICATION_ID];
    this.SCD_APP_TREE_VIEWTree_1Config.masterKeyNameArr =  ["APPLICATION_ID"];

    this.saveTriggerOutput.emit(form_SCD_APPLICATION);
    this.SCD_ALARMFormtabs_2Config = new componentConfigDef();
    this.SCD_ALARMFormtabs_2Config.masterSaved = form_SCD_APPLICATION;
    this.SCD_ALARMFormtabs_2Config.masterKeyArr =  [form_SCD_APPLICATION.APPLICATION_ID];
    this.SCD_ALARMFormtabs_2Config.masterKeyNameArr =  ["APPLICATION_ID"];

    this.saveTriggerOutput.emit(form_SCD_APPLICATION);
  }
  public saveCompletedHandler2( event) {
      this.saveTriggerOutput.emit(event)
    }
  @Input() public set detail_Input(form: any) {
    if (typeof form !== "undefined")
    {
        this.form_0_SCD_APPLICATION = form;
    }
  }

  public validForms =[true,true,true,true,true,true,true]; //length should be number of components
    formValidationChangedMD(e,fornNum) { //check if any component is not valid and emit screen status
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
    public handleComponentConfig(ComponentConfig:any) {
    if (this.paramConfig.DEBUG_FLAG) console.log("ComponentConfig:ScdAppMainComponent:",ComponentConfig);
    if (typeof ComponentConfig !== "undefined"){
       this.componentConfig = this.starServices.setComponentConfig(ComponentConfig, this.componentConfig  );
       if (ComponentConfig.languageChanged != null) { 
           setTimeout(() => {
             this.SCD_APPLICATIONForm_0Config = new componentConfigDef();
             this.SCD_APPLICATIONForm_0Config.languageChanged = ComponentConfig.languageChanged;
             this.SCD_APPLICATIONForm_0Config.title = this.starServices.getNLS([],"scd_app_main.scd_app_main.compsTitleID1","App");
             this.SCD_APP_TREE_VIEWTree_1Config = new componentConfigDef();
             this.SCD_APP_TREE_VIEWTree_1Config.languageChanged = ComponentConfig.languageChanged;
             this.SCD_APP_TREE_VIEWTree_1Config.title = this.starServices.getNLS([],"scd_app_main.scd_app_main.compsTitleID2","Tree");
             this.SCD_ALARMFormtabs_2Config = new componentConfigDef();
             this.SCD_ALARMFormtabs_2Config.languageChanged = ComponentConfig.languageChanged;
             this.SCD_ALARMFormtabs_2Config.title = this.starServices.getNLS([],"scd_app_main.scd_app_main.compsTitleID3","MDI");
           }, 200);
       }
  
       this.SCD_APPLICATIONForm_0Config = new componentConfigDef();
       this.SCD_APPLICATIONForm_0Config.showToolBar = ComponentConfig.showToolBar;
       this.SCD_APP_TREE_VIEWTree_1Config = new componentConfigDef();
       this.SCD_APP_TREE_VIEWTree_1Config.showToolBar = ComponentConfig.showToolBar;
       this.SCD_ALARMFormtabs_2Config = new componentConfigDef();
       this.SCD_ALARMFormtabs_2Config.showToolBar = ComponentConfig.showToolBar;
      if (ComponentConfig.masterSaved != null)
      {
       this.SCD_APPLICATIONForm_0Config.masterSaved = ComponentConfig.masterSaved;
       this.SCD_APP_TREE_VIEWTree_1Config.masterSaved = ComponentConfig.masterSaved;
       this.SCD_ALARMFormtabs_2Config.masterSaved = ComponentConfig.masterSaved;
      }
      if (ComponentConfig.newRec != null)
      {
       this.SCD_APPLICATIONForm_0Config.newRec = ComponentConfig.newRec;
       this.SCD_APP_TREE_VIEWTree_1Config.newRec = ComponentConfig.newRec;
       this.SCD_ALARMFormtabs_2Config.newRec = ComponentConfig.newRec;
      }
      if (ComponentConfig.clearScreen != null)
      {
       this.SCD_APPLICATIONForm_0Config.clearScreen = ComponentConfig.clearScreen;
       this.SCD_APP_TREE_VIEWTree_1Config.clearScreen = ComponentConfig.clearScreen;
       this.SCD_ALARMFormtabs_2Config.clearScreen = ComponentConfig.clearScreen;
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
         this.SCD_APP_TREE_VIEWTree_1Config.masterKeyArr = ComponentConfig.masterKeyArr;
         this.SCD_APP_TREE_VIEWTree_1Config.masterKeyNameArr = ComponentConfig.masterKeyNameArr;
         if (ComponentConfig.masterReadCompleted != null) 
         {
             this.SCD_APP_TREE_VIEWTree_1Config.masterReadCompleted = ComponentConfig.masterReadCompleted;
          }
         this.SCD_ALARMFormtabs_2Config.masterKeyArr = ComponentConfig.masterKeyArr;
         this.SCD_ALARMFormtabs_2Config.masterKeyNameArr = ComponentConfig.masterKeyNameArr;
         if (ComponentConfig.masterReadCompleted != null) 
         {
             this.SCD_ALARMFormtabs_2Config.masterReadCompleted = ComponentConfig.masterReadCompleted;
          }
       }
     }
    }
  }
  public tree_1_SCD_APP_TREE_VIEWOpened = false;
  public  tree_1_SCD_APP_TREE_VIEWClose() { 
    this.tree_1_SCD_APP_TREE_VIEWOpened = false;  
  }
  public  tree_1_SCD_APP_TREE_VIEWOpen() { 
    this.tree_1_SCD_APP_TREE_VIEWOpened = true;  
  }
  
  public formtabs_2_SCD_ALARMOpened = false;
  public  formtabs_2_SCD_ALARMClose() { 
    this.formtabs_2_SCD_ALARMOpened = false;  
  }
  public  formtabs_2_SCD_ALARMOpen() { 
    this.formtabs_2_SCD_ALARMOpened = true;  
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
