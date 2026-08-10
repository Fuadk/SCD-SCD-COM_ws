import { Component, OnInit, Output,Input, EventEmitter, HostListener } from '@angular/core';
import {  admaiLogHeadAdmAdmAiLogHeadGrid  ,admaiLogDetailAdmAdmAiLogDetailGrid  ,admaiLogDetailAdmAdmAiLogDetailForm  , componentConfigDef} from '@modeldir/model';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { starServices } from 'starlib';
import { StarNotifyService } from '../../../services/starnotification.service';
import { TabAlignment } from '@progress/kendo-angular-layout';
declare function getParamConfig():any;

@Component({

  selector: 'app-adm-ailogs',
  templateUrl: './adm-ailogs.component.html',
  styleUrls: ['./adm-ailogs.component.scss']
})
export class AdmAilogsComponent implements OnInit {
  @Output() saveTriggerOutput: EventEmitter<any> = new EventEmitter();
  constructor(public responsive: BreakpointObserver, private starNotify: StarNotifyService, public starServices: starServices) {
  this.title =  this.starServices.getNLS([],"adm_ailogs.adm_ailogs.component_title","");
    this.paramConfig = getParamConfig();
    this.componentConfig = new componentConfigDef();
  }
  public showToolBar = false;
  public paramConfig; 
  public title = '';
  public routineName = "adm_ailogs";
  public alignment: TabAlignment = 'start';
  public selectedTab = 2;
  public gap: any = {
  	rows: 2,
  	columns: 2,
    };

  public componentConfig: componentConfigDef;

  public grid_0_ADM_AI_LOG_HEAD : admaiLogHeadAdmAdmAiLogHeadGrid;
  public grid_1_ADM_AI_LOG_DETAIL : admaiLogDetailAdmAdmAiLogDetailGrid;
  public form_2_ADM_AI_LOG_DETAIL : admaiLogDetailAdmAdmAiLogDetailForm;
  public  ADM_AI_LOG_HEADGrid_0Config : componentConfigDef;
  public  ADM_AI_LOG_DETAILGrid_1Config : componentConfigDef;
  public  ADM_AI_LOG_DETAILForm_2Config : componentConfigDef;
  public PDFfileName = this.title + ".PDF";
  public routineAuth = "AdmAilogs";

  public ngAfterViewInit() {
    this.starServices.setRTL();
  }
  ngOnInit(): void {
    this.starServices.actOnParamConfig(this, this.routineName );

    // to stop initial loading remove [executeQueryInput]="form_dsp_template"  from this (parent) html file
   this.ADM_AI_LOG_HEADGrid_0Config = new componentConfigDef();
   this.ADM_AI_LOG_HEADGrid_0Config.isMaster = true;
   this.ADM_AI_LOG_DETAILGrid_1Config = new componentConfigDef();
   this.ADM_AI_LOG_DETAILGrid_1Config.isChild = true;
   this.ADM_AI_LOG_DETAILGrid_1Config.gridHeight = "300";
   this.ADM_AI_LOG_DETAILForm_2Config = new componentConfigDef();
   this.ADM_AI_LOG_DETAILForm_2Config.isChild = true;
   this.ADM_AI_LOG_DETAILForm_2Config.gridHeight = "300";
  }
  public readCompletedHandler( form_ADM_AI_LOG_HEAD) {
    if (Object.keys(form_ADM_AI_LOG_HEAD).length == 0) {
    	this.ADM_AI_LOG_DETAILGrid_1Config = new componentConfigDef();
    	this.ADM_AI_LOG_DETAILGrid_1Config.clearComponent = true;
    }
    else{
    	let masterKeyArr = [form_ADM_AI_LOG_HEAD.USERNAME,form_ADM_AI_LOG_HEAD.APP_ID,form_ADM_AI_LOG_HEAD.AI_ACTION_ID,form_ADM_AI_LOG_HEAD.AI_ENTITY_ID,form_ADM_AI_LOG_HEAD.REQUESTED_ON];
    	let masterKeyNameArr = ["USERNAME","APP_ID","AI_ACTION_ID","AI_ENTITY_ID","REQUESTED_ON"];
    	this.grid_1_ADM_AI_LOG_DETAIL = new admaiLogDetailAdmAdmAiLogDetailGrid();
    	for (let i = 0; i< masterKeyNameArr.length; i++){
       	this.grid_1_ADM_AI_LOG_DETAIL[masterKeyNameArr[i]] = masterKeyArr[i];
    	}
    	this.ADM_AI_LOG_DETAILGrid_1Config = new componentConfigDef();
    	this.ADM_AI_LOG_DETAILGrid_1Config.masterKeyArr =  [form_ADM_AI_LOG_HEAD.USERNAME,form_ADM_AI_LOG_HEAD.APP_ID,form_ADM_AI_LOG_HEAD.AI_ACTION_ID,form_ADM_AI_LOG_HEAD.AI_ENTITY_ID,form_ADM_AI_LOG_HEAD.REQUESTED_ON];
    	this.ADM_AI_LOG_DETAILGrid_1Config.masterKeyNameArr =  ["USERNAME","APP_ID","AI_ACTION_ID","AI_ENTITY_ID","REQUESTED_ON"];
    	}
    }
  public readCompletedHandler2( form_ADM_AI_LOG_DETAIL) {
    if (Object.keys(form_ADM_AI_LOG_DETAIL).length == 0) {
    	this.ADM_AI_LOG_DETAILForm_2Config = new componentConfigDef();
    	this.ADM_AI_LOG_DETAILForm_2Config.clearComponent = true;
    }
    else{
    	let masterKeyArr = [form_ADM_AI_LOG_DETAIL.USERNAME,form_ADM_AI_LOG_DETAIL.APP_ID,form_ADM_AI_LOG_DETAIL.AI_ACTION_ID,form_ADM_AI_LOG_DETAIL.AI_ENTITY_ID,form_ADM_AI_LOG_DETAIL.REQUESTED_ON
        ,form_ADM_AI_LOG_DETAIL.AI_SEQ,form_ADM_AI_LOG_DETAIL.STAGE];
    	let masterKeyNameArr = ["USERNAME","APP_ID","AI_ACTION_ID","AI_ENTITY_ID","REQUESTED_ON","AI_SEQ","STAGE"];
    	this.form_2_ADM_AI_LOG_DETAIL = new admaiLogDetailAdmAdmAiLogDetailForm();
    	for (let i = 0; i< masterKeyNameArr.length; i++){
       	this.form_2_ADM_AI_LOG_DETAIL[masterKeyNameArr[i]] = masterKeyArr[i];
    	}
    	this.ADM_AI_LOG_DETAILForm_2Config = new componentConfigDef();
    	this.ADM_AI_LOG_DETAILForm_2Config.masterKeyArr =  [form_ADM_AI_LOG_DETAIL.USERNAME,form_ADM_AI_LOG_DETAIL.APP_ID,form_ADM_AI_LOG_DETAIL.AI_ACTION_ID,form_ADM_AI_LOG_DETAIL.AI_ENTITY_ID,form_ADM_AI_LOG_DETAIL.REQUESTED_ON
        ,form_ADM_AI_LOG_DETAIL.AI_SEQ,form_ADM_AI_LOG_DETAIL.STAGE];
    	this.ADM_AI_LOG_DETAILForm_2Config.masterKeyNameArr =  ["USERNAME","APP_ID","AI_ACTION_ID","AI_ENTITY_ID","REQUESTED_ON","AI_SEQ","STAGE"];
    	}
    }
  public clearCompletedHandler( form_ADM_AI_LOG_HEAD) {
    this.ADM_AI_LOG_DETAILGrid_1Config = new componentConfigDef();
    this.ADM_AI_LOG_DETAILForm_2Config = new componentConfigDef();
  }
  public saveCompletedHandler( form_ADM_AI_LOG_HEAD) {
    this.ADM_AI_LOG_DETAILGrid_1Config = new componentConfigDef();
    this.ADM_AI_LOG_DETAILGrid_1Config.masterSaved = form_ADM_AI_LOG_HEAD;
    this.ADM_AI_LOG_DETAILGrid_1Config.masterKeyArr =  [form_ADM_AI_LOG_HEAD.USERNAME,form_ADM_AI_LOG_HEAD.APP_ID,form_ADM_AI_LOG_HEAD.AI_ACTION_ID,form_ADM_AI_LOG_HEAD.AI_ENTITY_ID,form_ADM_AI_LOG_HEAD.REQUESTED_ON];
    this.ADM_AI_LOG_DETAILGrid_1Config.masterKeyNameArr =  ["USERNAME","APP_ID","AI_ACTION_ID","AI_ENTITY_ID","REQUESTED_ON"];

    this.ADM_AI_LOG_DETAILForm_2Config = new componentConfigDef();
    this.ADM_AI_LOG_DETAILForm_2Config.masterSaved = form_ADM_AI_LOG_HEAD;
    this.ADM_AI_LOG_DETAILForm_2Config.masterKeyArr =  [form_ADM_AI_LOG_HEAD.USERNAME,form_ADM_AI_LOG_HEAD.APP_ID,form_ADM_AI_LOG_HEAD.AI_ACTION_ID,form_ADM_AI_LOG_HEAD.AI_ENTITY_ID,form_ADM_AI_LOG_HEAD.REQUESTED_ON];
    this.ADM_AI_LOG_DETAILForm_2Config.masterKeyNameArr =  ["USERNAME","APP_ID","AI_ACTION_ID","AI_ENTITY_ID","REQUESTED_ON"];

  }
  @Input() public set detail_Input(form: any) {
    if (typeof form !== "undefined")
    {
        this.grid_0_ADM_AI_LOG_HEAD = form;
    }
  }

  @Input() public set setComponentConfig_Input(ComponentConfig: componentConfigDef) {
    if (this.paramConfig.DEBUG_FLAG) console.log("ComponentConfig:",ComponentConfig);
    if (typeof ComponentConfig !== "undefined"){
	   this.componentConfig = this.starServices.setComponentConfig(ComponentConfig, this.componentConfig  );
      if (ComponentConfig.masterSaved != null)
      {
        this.ADM_AI_LOG_HEADGrid_0Config = new componentConfigDef();
        this.ADM_AI_LOG_HEADGrid_0Config.masterSaved = ComponentConfig.masterSaved;
        this.ADM_AI_LOG_DETAILGrid_1Config = new componentConfigDef();
        this.ADM_AI_LOG_DETAILGrid_1Config.masterSaved = ComponentConfig.masterSaved;
        this.ADM_AI_LOG_DETAILForm_2Config = new componentConfigDef();
        this.ADM_AI_LOG_DETAILForm_2Config.masterSaved = ComponentConfig.masterSaved;
      }
      if (ComponentConfig.clearScreen != null)
      {
        this.ADM_AI_LOG_HEADGrid_0Config = new componentConfigDef();
        this.ADM_AI_LOG_HEADGrid_0Config.clearScreen = ComponentConfig.clearScreen;
        this.ADM_AI_LOG_DETAILGrid_1Config = new componentConfigDef();
        this.ADM_AI_LOG_DETAILGrid_1Config.clearScreen = ComponentConfig.clearScreen;
        this.ADM_AI_LOG_DETAILForm_2Config = new componentConfigDef();
        this.ADM_AI_LOG_DETAILForm_2Config.clearScreen = ComponentConfig.clearScreen;
      }
      if ((ComponentConfig.masterKeyArr != null) && (ComponentConfig.masterKeyNameArr != null) )
      {
        if ((ComponentConfig.masterKeyArr.length != 0) && (ComponentConfig.masterKeyNameArr.length != 0) )
        {
          this.ADM_AI_LOG_HEADGrid_0Config = new componentConfigDef();
          this.ADM_AI_LOG_HEADGrid_0Config.masterKeyArr = ComponentConfig.masterKeyArr;
          this.ADM_AI_LOG_HEADGrid_0Config.masterKeyNameArr = ComponentConfig.masterKeyNameArr;
      		if (ComponentConfig.masterReadCompleted != null) 
      			{
          			this.ADM_AI_LOG_HEADGrid_0Config.masterReadCompleted = ComponentConfig.masterReadCompleted;
      			}
          this.ADM_AI_LOG_DETAILGrid_1Config = new componentConfigDef();
          this.ADM_AI_LOG_DETAILGrid_1Config.masterKeyArr = ComponentConfig.masterKeyArr;
          this.ADM_AI_LOG_DETAILGrid_1Config.masterKeyNameArr = ComponentConfig.masterKeyNameArr;
      		if (ComponentConfig.masterReadCompleted != null) 
      			{
          			this.ADM_AI_LOG_DETAILGrid_1Config.masterReadCompleted = ComponentConfig.masterReadCompleted;
      			}
          this.ADM_AI_LOG_DETAILForm_2Config = new componentConfigDef();
          this.ADM_AI_LOG_DETAILForm_2Config.masterKeyArr = ComponentConfig.masterKeyArr;
          this.ADM_AI_LOG_DETAILForm_2Config.masterKeyNameArr = ComponentConfig.masterKeyNameArr;
      		if (ComponentConfig.masterReadCompleted != null) 
      			{
          			this.ADM_AI_LOG_DETAILForm_2Config.masterReadCompleted = ComponentConfig.masterReadCompleted;
      			}
        }
      }
      }
    }
 }
