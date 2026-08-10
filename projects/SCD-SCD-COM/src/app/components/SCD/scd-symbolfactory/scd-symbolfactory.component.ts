import { Component, OnInit, Output,Input, EventEmitter, HostListener } from '@angular/core';
import {  scdiconsCategoryScdScdIconsCategoryTree  ,scdiconsScdScdIconsCard  ,scdiconsScdScdIconsForm  , componentConfigDef} from '@modeldir/model';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { starServices } from 'starlib';
import { Subscription } from 'rxjs';
import { StarNotifyService } from '../../../services/starnotification.service';
import { TabAlignment } from '@progress/kendo-angular-layout';
declare function getParamConfig():any;

@Component({

  selector: 'app-scd-symbolfactory',
  templateUrl: './scd-symbolfactory.component.html',
  styleUrls: ['./scd-symbolfactory.component.scss'],
  standalone: false
})
export class ScdSymbolfactoryComponent implements OnInit {
  @Output() saveTriggerOutput: EventEmitter<any> = new EventEmitter();
  @Output() formValidationChangedOutput: EventEmitter<boolean> = new EventEmitter();
  constructor(public responsive: BreakpointObserver, private starNotify: StarNotifyService, public starServices: starServices) {
  this.title =  this.starServices.getNLS([],"scd_symbolfactory.scd_symbolfactory.component_title","");
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
  public routineName = "scd_symbolfactory";
  public alignment: TabAlignment = 'start';
  public selectedTab = 2;
  public gap: any = {
  	rows: 2,
  	columns: 2,
    };

  public componentConfig: componentConfigDef;

  public tree_0_SCD_ICONS_CATEGORY : scdiconsCategoryScdScdIconsCategoryTree;
  public card_1_SCD_ICONS : scdiconsScdScdIconsCard;
  public form_2_SCD_ICONS : scdiconsScdScdIconsForm;
  public  SCD_ICONS_CATEGORYTree_0Config : componentConfigDef;
  public  SCD_ICONSCard_1Config : componentConfigDef;
  public  SCD_ICONSForm_2Config : componentConfigDef;
  public PDFfileName = this.title + ".PDF";
  public routineAuth = "ScdSymbolfactory";

  public ngAfterViewInit() {
    this.starServices.setRTL();
  }
  private componentConfigChangeEvent!: Subscription;
  public compSelector = 'app-scd-symbolfactory';
  public masterKeyNameArr = ["category_id","category"];

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
   this.SCD_ICONS_CATEGORYTree_0Config = new componentConfigDef();
   this.SCD_ICONS_CATEGORYTree_0Config.isMaster = true;
   this.SCD_ICONS_CATEGORYTree_0Config.isSearchScreen = this.isSearchScreen;
   this.SCD_ICONSCard_1Config = new componentConfigDef();
   this.SCD_ICONSCard_1Config.title = this.starServices.getNLS([],"scd_symbolfactory.scd_symbolfactory.compsTitleID2","Icons");
   this.SCD_ICONSCard_1Config.isChild = true;
   this.SCD_ICONSCard_1Config.masterSelector = 'app-scd-symbolfactory';
   this.SCD_ICONSForm_2Config = new componentConfigDef();
   this.SCD_ICONSForm_2Config.title = this.starServices.getNLS([],"scd_symbolfactory.scd_symbolfactory.compsTitleID3","Icon");
   this.SCD_ICONSForm_2Config.isChild = true;
   this.SCD_ICONSForm_2Config.masterSelector = 'app-scd-symbolfactory';
  }
  public ngOnDestroy(): void {
     // Unsubscribe the event once not needed.
     if (typeof this.componentConfigChangeEvent !== 'undefined') this.componentConfigChangeEvent.unsubscribe();
  }
  public readCompletedHandler( form_SCD_ICONS_CATEGORY) {
    if (Object.keys(form_SCD_ICONS_CATEGORY).length == 0) {
    	this.SCD_ICONSCard_1Config = new componentConfigDef();
    	this.SCD_ICONSCard_1Config.clearComponent = true;
    }
    else{
    	let masterKeyArr = [form_SCD_ICONS_CATEGORY.category_id,form_SCD_ICONS_CATEGORY.category];
    	let masterKeyNameArr = ["category_id","category"];
 		let seq = '2';
     	if ( (this.isSearchScreen == true) &&  ( seq == '2')) 
	 	 {
   	 	this.SCD_ICONSCard_1Config = new componentConfigDef();
   	 	this.SCD_ICONSCard_1Config.formattedWhere  = form_SCD_ICONS_CATEGORY;
   	 	return;
		  }
    	this.card_1_SCD_ICONS = new scdiconsScdScdIconsCard();
    	for (let i = 0; i< masterKeyNameArr.length; i++){
       	this.card_1_SCD_ICONS[masterKeyNameArr[i]] = masterKeyArr[i];
    	}
    	this.SCD_ICONSCard_1Config = new componentConfigDef();
    	this.SCD_ICONSCard_1Config.masterKeyArr =  [form_SCD_ICONS_CATEGORY.category_id,form_SCD_ICONS_CATEGORY.category];
    	this.SCD_ICONSCard_1Config.masterKeyNameArr =  ["category_id","category"];
     //  this.SCD_ICONSCard_1Config.masterReadCompleted = true;
    	}
    }
  public readCompletedHandler2( form_SCD_ICONS) {
    if (Object.keys(form_SCD_ICONS).length == 0) {
    	this.SCD_ICONSForm_2Config = new componentConfigDef();
    	this.SCD_ICONSForm_2Config.clearComponent = true;
    }
    else{
    	let masterKeyArr = [form_SCD_ICONS.id,form_SCD_ICONS.category,form_SCD_ICONS.svg_name];
    	let masterKeyNameArr = ["id","category","svg_name"];
 		let seq = '3';
     	if ( (this.isSearchScreen == true) &&  ( seq == '2')) 
	 	 {
   	 	this.SCD_ICONSForm_2Config = new componentConfigDef();
   	 	this.SCD_ICONSForm_2Config.formattedWhere  = form_SCD_ICONS;
   	 	return;
		  }
    	this.form_2_SCD_ICONS = new scdiconsScdScdIconsForm();
    	for (let i = 0; i< masterKeyNameArr.length; i++){
       	this.form_2_SCD_ICONS[masterKeyNameArr[i]] = masterKeyArr[i];
    	}
    	this.SCD_ICONSForm_2Config = new componentConfigDef();
    	this.SCD_ICONSForm_2Config.masterKeyArr =  [form_SCD_ICONS.id,form_SCD_ICONS.category,form_SCD_ICONS.svg_name];
    	this.SCD_ICONSForm_2Config.masterKeyNameArr =  ["id","category","svg_name"];
     //  this.SCD_ICONSForm_2Config.masterReadCompleted = true;
    	}
    }
  async clearCompletedHandler( form_SCD_ICONS_CATEGORY) {
     await this.starServices.sleep(200);
    this.SCD_ICONSCard_1Config = new componentConfigDef();
     await this.starServices.sleep(200);
    this.SCD_ICONSForm_2Config = new componentConfigDef();
  }
  public keyNameArr = ["category_id","category"];

  public callreadSavedMaster( ) {
    let masterTable = 'SCD_ICONS_CATEGORY' 
     }
  public sendToMaster(componentConfig){ 
  	this.SCD_ICONS_CATEGORYTree_0Config = new componentConfigDef(); 
  	this.SCD_ICONS_CATEGORYTree_0Config = componentConfig; 
 } 
  public sendToChildren(componentConfig, pageNo){ 
   if (pageNo == 2){
  	this.SCD_ICONSCard_1Config = new componentConfigDef(); 
  	this.SCD_ICONSCard_1Config = componentConfig; 
   }
   if (pageNo == 3){
  	this.SCD_ICONSForm_2Config = new componentConfigDef(); 
  	this.SCD_ICONSForm_2Config = componentConfig; 
   }
 } 
  public saveCompletedHandler( form_SCD_ICONS_CATEGORY) {
    this.SCD_ICONSCard_1Config = new componentConfigDef();
    this.SCD_ICONSCard_1Config.masterSaved = form_SCD_ICONS_CATEGORY;
    this.SCD_ICONSCard_1Config.masterKeyArr =  [form_SCD_ICONS_CATEGORY.category_id,form_SCD_ICONS_CATEGORY.category];
    this.SCD_ICONSCard_1Config.masterKeyNameArr =  ["category_id","category"];

    this.saveTriggerOutput.emit(form_SCD_ICONS_CATEGORY);
    this.SCD_ICONSForm_2Config = new componentConfigDef();
    this.SCD_ICONSForm_2Config.masterSaved = form_SCD_ICONS_CATEGORY;
    this.SCD_ICONSForm_2Config.masterKeyArr =  [form_SCD_ICONS_CATEGORY.category_id,form_SCD_ICONS_CATEGORY.category];
    this.SCD_ICONSForm_2Config.masterKeyNameArr =  ["category_id","category"];

    this.saveTriggerOutput.emit(form_SCD_ICONS_CATEGORY);
  }
  public saveCompletedHandler2( event) {
      this.saveTriggerOutput.emit(event)
    }
  @Input() public set detail_Input(form: any) {
    if (typeof form !== "undefined")
    {
        this.tree_0_SCD_ICONS_CATEGORY = form;
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
    if (this.paramConfig.DEBUG_FLAG) console.log("ComponentConfig:ScdSymbolfactoryComponent:",ComponentConfig);
    if (typeof ComponentConfig !== "undefined"){
       this.componentConfig = this.starServices.setComponentConfig(ComponentConfig, this.componentConfig  );
       if (ComponentConfig.languageChanged != null) { 
           setTimeout(() => {
             this.SCD_ICONS_CATEGORYTree_0Config = new componentConfigDef();
             this.SCD_ICONS_CATEGORYTree_0Config.languageChanged = ComponentConfig.languageChanged;
             this.SCD_ICONS_CATEGORYTree_0Config.title = this.starServices.getNLS([],"scd_symbolfactory.scd_symbolfactory.compsTitleID1","Cateogry");
             this.SCD_ICONSCard_1Config = new componentConfigDef();
             this.SCD_ICONSCard_1Config.languageChanged = ComponentConfig.languageChanged;
             this.SCD_ICONSCard_1Config.title = this.starServices.getNLS([],"scd_symbolfactory.scd_symbolfactory.compsTitleID2","Icons");
             this.SCD_ICONSForm_2Config = new componentConfigDef();
             this.SCD_ICONSForm_2Config.languageChanged = ComponentConfig.languageChanged;
             this.SCD_ICONSForm_2Config.title = this.starServices.getNLS([],"scd_symbolfactory.scd_symbolfactory.compsTitleID3","Icon");
           }, 200);
       }
  
       this.SCD_ICONS_CATEGORYTree_0Config = new componentConfigDef();
       this.SCD_ICONS_CATEGORYTree_0Config.showToolBar = ComponentConfig.showToolBar;
       this.SCD_ICONSCard_1Config = new componentConfigDef();
       this.SCD_ICONSCard_1Config.showToolBar = ComponentConfig.showToolBar;
       this.SCD_ICONSForm_2Config = new componentConfigDef();
       this.SCD_ICONSForm_2Config.showToolBar = ComponentConfig.showToolBar;
      if (ComponentConfig.masterSaved != null)
      {
       this.SCD_ICONS_CATEGORYTree_0Config.masterSaved = ComponentConfig.masterSaved;
       this.SCD_ICONSCard_1Config.masterSaved = ComponentConfig.masterSaved;
       this.SCD_ICONSForm_2Config.masterSaved = ComponentConfig.masterSaved;
      }
      if (ComponentConfig.newRec != null)
      {
       this.SCD_ICONS_CATEGORYTree_0Config.newRec = ComponentConfig.newRec;
       this.SCD_ICONSCard_1Config.newRec = ComponentConfig.newRec;
       this.SCD_ICONSForm_2Config.newRec = ComponentConfig.newRec;
      }
      if (ComponentConfig.clearScreen != null)
      {
       this.SCD_ICONS_CATEGORYTree_0Config.clearScreen = ComponentConfig.clearScreen;
       this.SCD_ICONSCard_1Config.clearScreen = ComponentConfig.clearScreen;
       this.SCD_ICONSForm_2Config.clearScreen = ComponentConfig.clearScreen;
	   }
      if ((ComponentConfig.masterKeyArr != null) && (ComponentConfig.masterKeyNameArr != null) )
      {
       if ((ComponentConfig.masterKeyArr.length != 0) && (ComponentConfig.masterKeyNameArr.length != 0) )
       {
         this.SCD_ICONS_CATEGORYTree_0Config.masterKeyArr = ComponentConfig.masterKeyArr;
         this.SCD_ICONS_CATEGORYTree_0Config.masterKeyNameArr = ComponentConfig.masterKeyNameArr;
         if (ComponentConfig.masterReadCompleted != null) 
         {
             this.SCD_ICONS_CATEGORYTree_0Config.masterReadCompleted = ComponentConfig.masterReadCompleted;
          }
         this.SCD_ICONSCard_1Config.masterKeyArr = ComponentConfig.masterKeyArr;
         this.SCD_ICONSCard_1Config.masterKeyNameArr = ComponentConfig.masterKeyNameArr;
         if (ComponentConfig.masterReadCompleted != null) 
         {
             this.SCD_ICONSCard_1Config.masterReadCompleted = ComponentConfig.masterReadCompleted;
          }
         this.SCD_ICONSForm_2Config.masterKeyArr = ComponentConfig.masterKeyArr;
         this.SCD_ICONSForm_2Config.masterKeyNameArr = ComponentConfig.masterKeyNameArr;
         if (ComponentConfig.masterReadCompleted != null) 
         {
             this.SCD_ICONSForm_2Config.masterReadCompleted = ComponentConfig.masterReadCompleted;
          }
       }
     }
    }
  }
  public card_1_SCD_ICONSOpened = false;
  public  card_1_SCD_ICONSClose() { 
    this.card_1_SCD_ICONSOpened = false;  
  }
  public  card_1_SCD_ICONSOpen() { 
    this.card_1_SCD_ICONSOpened = true;  
  }
  
  public form_2_SCD_ICONSOpened = false;
  public  form_2_SCD_ICONSClose() { 
    this.form_2_SCD_ICONSOpened = false;  
  }
  public  form_2_SCD_ICONSOpen() { 
    this.form_2_SCD_ICONSOpened = true;  
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
