import { Component, OnInit, Output,Input, EventEmitter, HostListener } from '@angular/core';
import { dspbatchDefDspBatchDspBatchDefForm ,dspbatchLogDspBatchDspBatchLogGrid ,dspbatchFilesDspBatchDspBatchFilesGrid ,dspbatchDefDspBatchChartBatchProcessing  , componentConfigDef} from '@modeldir/model';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { starServices } from 'starlib';
import { StarNotifyService } from '../../../services/starnotification.service';
import { TabAlignment } from '@progress/kendo-angular-layout';
declare function getParamConfig():any;

@Component({

  selector: 'app-dsp-batch-batch-process',
  templateUrl: './dsp-batch-batch-process.component.html',
  styleUrls: ['./dsp-batch-batch-process.component.scss']
})
export class DspBatchBatchProcessComponent implements OnInit {
  @Output() saveTriggerOutput: EventEmitter<any> = new EventEmitter();
  constructor(public responsive: BreakpointObserver, private starNotify: StarNotifyService, public starServices: starServices) {
  this.title =  this.starServices.getNLS([],"dsp_batch_batch_process.dsp_batch_batch_process.component_title","Dsp Batch Def Dsp Batch Def Form");
    this.paramConfig = getParamConfig();
    this.componentConfig = new componentConfigDef();
  }
  public showToolBar = false;
  public paramConfig; 
  public title = '';
  public routineName = "dsp_batch_batch_process";
  public alignment: TabAlignment = 'start';
  public selectedTab = 2;

  public componentConfig: componentConfigDef;

  public form_0_DSP_BATCH_DEF : dspbatchDefDspBatchDspBatchDefForm;
  public grid_1_DSP_BATCH_LOG : dspbatchLogDspBatchDspBatchLogGrid;
  public grid_2_DSP_BATCH_FILES : dspbatchFilesDspBatchDspBatchFilesGrid;
  public form_3_DSP_BATCH_DEF : dspbatchDefDspBatchChartBatchProcessing;
  public  DSP_BATCH_DEFForm_0Config : componentConfigDef;
  public  DSP_BATCH_LOGGrid_1Config : componentConfigDef;
  public  DSP_BATCH_FILESGrid_2Config : componentConfigDef;
  public  DSP_BATCH_DEFForm_3Config : componentConfigDef;
  public PDFfileName = this.title + ".PDF";
  public routineAuth = "DspBatchBatchProcess";

  public ngAfterViewInit() {
    this.starServices.setRTL();
  }
  ngOnInit(): void {
    this.starServices.actOnParamConfig(this, this.routineName );

    // to stop initial loading remove [executeQueryInput]="form_dsp_template"  from this (parent) html file
   this.form_0_DSP_BATCH_DEF = new dspbatchDefDspBatchDspBatchDefForm();
   this.DSP_BATCH_DEFForm_0Config = new componentConfigDef();
   this.DSP_BATCH_DEFForm_0Config.isMaster = true;
   this.grid_1_DSP_BATCH_LOG = new dspbatchLogDspBatchDspBatchLogGrid();
   this.DSP_BATCH_LOGGrid_1Config = new componentConfigDef();
   this.DSP_BATCH_LOGGrid_1Config.isChild = true;
   this.DSP_BATCH_LOGGrid_1Config.gridHeight = "250";
   this.grid_2_DSP_BATCH_FILES = new dspbatchFilesDspBatchDspBatchFilesGrid();
   this.DSP_BATCH_FILESGrid_2Config = new componentConfigDef();
   this.DSP_BATCH_FILESGrid_2Config.isChild = true;
   this.DSP_BATCH_FILESGrid_2Config.gridHeight = "250";
   this.form_3_DSP_BATCH_DEF = new dspbatchDefDspBatchChartBatchProcessing();
   this.DSP_BATCH_DEFForm_3Config = new componentConfigDef();
   this.DSP_BATCH_DEFForm_3Config.isChild = true;
   this.DSP_BATCH_DEFForm_3Config.gridHeight = "250";
  }
    public readCompletedHandler( form_DSP_BATCH_DEF) {
    let masterKeyArr = [form_DSP_BATCH_DEF.BATCH_ID];
    let masterKeyNameArr = ["BATCH_ID"];
 this.grid_1_DSP_BATCH_LOG = new dspbatchLogDspBatchDspBatchLogGrid();
 for (let i = 0; i< masterKeyNameArr.length; i++){
       this.grid_1_DSP_BATCH_LOG[masterKeyNameArr[i]] = masterKeyArr[i];
    }
    this.DSP_BATCH_LOGGrid_1Config = new componentConfigDef();
    this.DSP_BATCH_LOGGrid_1Config.masterKeyArr =  [form_DSP_BATCH_DEF.BATCH_ID];
    this.DSP_BATCH_LOGGrid_1Config.masterKeyNameArr =  ["BATCH_ID"];
 this.grid_2_DSP_BATCH_FILES = new dspbatchFilesDspBatchDspBatchFilesGrid();
 for (let i = 0; i< masterKeyNameArr.length; i++){
       this.grid_2_DSP_BATCH_FILES[masterKeyNameArr[i]] = masterKeyArr[i];
    }
    this.DSP_BATCH_FILESGrid_2Config = new componentConfigDef();
    this.DSP_BATCH_FILESGrid_2Config.masterKeyArr =  [form_DSP_BATCH_DEF.BATCH_ID];
    this.DSP_BATCH_FILESGrid_2Config.masterKeyNameArr =  ["BATCH_ID"];
    
    this.DSP_BATCH_FILESGrid_2Config.masterParams =  form_DSP_BATCH_DEF;

 this.form_3_DSP_BATCH_DEF = new dspbatchDefDspBatchChartBatchProcessing();
 for (let i = 0; i< masterKeyNameArr.length; i++){
       this.form_3_DSP_BATCH_DEF[masterKeyNameArr[i]] = masterKeyArr[i];
    }

  
  }
  public readCompletedHandler2( grid_DSP_BATCH_LOG) {
    let masterKeyArr = [grid_DSP_BATCH_LOG.BATCH_LOG_ID];
    let masterKeyNameArr = ["BATCH_LOG_ID"];
    if (this.paramConfig.DEBUG_FLAG) console.log ("readCompletedHandler2:",grid_DSP_BATCH_LOG)

    this.DSP_BATCH_DEFForm_3Config = new componentConfigDef();
    
    let gridParamsDataUser:any=[];
 
    let BATCH_LOG_ID= grid_DSP_BATCH_LOG.BATCH_LOG_ID;
    let chartName= "Batch :" + BATCH_LOG_ID ;
    if (typeof BATCH_LOG_ID == "undefined")
    {
      BATCH_LOG_ID = -1;
      chartName= "";
    }

    let params = {
      BATCH_LOG_ID:BATCH_LOG_ID,
      ORDER_STATUS:"%"
     
    };
    gridParamsDataUser.push(params);
    let chartHeight = 350;
    var masterParams = {
      name : chartName ,
      type : "bar",
      queryID : 17,
      showParams : false,
      height:chartHeight,
      gridParamsDataUser :gridParamsDataUser
    
    }
    this.DSP_BATCH_DEFForm_3Config.masterParams = masterParams;

  }
  public clearCompletedHandler( form_DSP_BATCH_DEF) {
    this.grid_1_DSP_BATCH_LOG = new  dspbatchLogDspBatchDspBatchLogGrid();
    this.grid_2_DSP_BATCH_FILES = new  dspbatchFilesDspBatchDspBatchFilesGrid();
    this.form_3_DSP_BATCH_DEF = new  dspbatchDefDspBatchChartBatchProcessing();
  }
  public saveCompletedHandler( form_DSP_BATCH_DEF) {
    this.DSP_BATCH_LOGGrid_1Config = new componentConfigDef();
    this.DSP_BATCH_LOGGrid_1Config.masterSaved = form_DSP_BATCH_DEF;
    this.DSP_BATCH_LOGGrid_1Config.masterKeyArr =  [form_DSP_BATCH_DEF.BATCH_ID];
    this.DSP_BATCH_LOGGrid_1Config.masterKeyNameArr =  ["BATCH_ID"];

    this.DSP_BATCH_FILESGrid_2Config = new componentConfigDef();
    this.DSP_BATCH_FILESGrid_2Config.masterSaved = form_DSP_BATCH_DEF;
    this.DSP_BATCH_FILESGrid_2Config.masterKeyArr =  [form_DSP_BATCH_DEF.BATCH_ID];
    this.DSP_BATCH_FILESGrid_2Config.masterKeyNameArr =  ["BATCH_ID"];
    this.DSP_BATCH_FILESGrid_2Config.masterParams =  form_DSP_BATCH_DEF;

    this.DSP_BATCH_DEFForm_3Config = new componentConfigDef();
    this.DSP_BATCH_DEFForm_3Config.masterSaved = form_DSP_BATCH_DEF;
    this.DSP_BATCH_DEFForm_3Config.masterKeyArr =  [form_DSP_BATCH_DEF.BATCH_ID];
    this.DSP_BATCH_DEFForm_3Config.masterKeyNameArr =  ["BATCH_ID"];

  }
  @Input() public set detail_Input(form: any) {
    if (typeof form !== "undefined")
    {
        this.form_0_DSP_BATCH_DEF = form;
    }
  }

  @Input() public set setComponentConfig_Input(ComponentConfig: componentConfigDef) {
    if (this.paramConfig.DEBUG_FLAG) console.log("ComponentConfig:",ComponentConfig);
    if (typeof ComponentConfig !== "undefined"){
	   this.componentConfig = this.starServices.setComponentConfig(ComponentConfig, this.componentConfig  );
      if (ComponentConfig.masterSaved != null)
      {
        this.DSP_BATCH_DEFForm_0Config = new componentConfigDef();
        this.DSP_BATCH_DEFForm_0Config.masterSaved = ComponentConfig.masterSaved;
        this.DSP_BATCH_LOGGrid_1Config = new componentConfigDef();
        this.DSP_BATCH_LOGGrid_1Config.masterSaved = ComponentConfig.masterSaved;
        this.DSP_BATCH_FILESGrid_2Config = new componentConfigDef();
        this.DSP_BATCH_FILESGrid_2Config.masterSaved = ComponentConfig.masterSaved;
        this.DSP_BATCH_DEFForm_3Config = new componentConfigDef();
        this.DSP_BATCH_DEFForm_3Config.masterSaved = ComponentConfig.masterSaved;
      }
      if (ComponentConfig.clearScreen != null)
      {
        this.DSP_BATCH_DEFForm_0Config = new componentConfigDef();
        this.DSP_BATCH_DEFForm_0Config.clearScreen = ComponentConfig.clearScreen;
        this.DSP_BATCH_LOGGrid_1Config = new componentConfigDef();
        this.DSP_BATCH_LOGGrid_1Config.clearScreen = ComponentConfig.clearScreen;
        this.DSP_BATCH_FILESGrid_2Config = new componentConfigDef();
        this.DSP_BATCH_FILESGrid_2Config.clearScreen = ComponentConfig.clearScreen;
        this.DSP_BATCH_DEFForm_3Config = new componentConfigDef();
        this.DSP_BATCH_DEFForm_3Config.clearScreen = ComponentConfig.clearScreen;
      }
      if ((ComponentConfig.masterKeyArr != null) && (ComponentConfig.masterKeyNameArr != null) )
      {
        if ((ComponentConfig.masterKeyArr.length != 0) && (ComponentConfig.masterKeyNameArr.length != 0) )
        {
          this.DSP_BATCH_DEFForm_0Config = new componentConfigDef();
          this.DSP_BATCH_DEFForm_0Config.masterKeyArr = ComponentConfig.masterKeyArr;
          this.DSP_BATCH_DEFForm_0Config.masterKeyNameArr = ComponentConfig.masterKeyNameArr;
          this.DSP_BATCH_LOGGrid_1Config = new componentConfigDef();
          this.DSP_BATCH_LOGGrid_1Config.masterKeyArr = ComponentConfig.masterKeyArr;
          this.DSP_BATCH_LOGGrid_1Config.masterKeyNameArr = ComponentConfig.masterKeyNameArr;
          this.DSP_BATCH_FILESGrid_2Config = new componentConfigDef();
          this.DSP_BATCH_FILESGrid_2Config.masterKeyArr = ComponentConfig.masterKeyArr;
          this.DSP_BATCH_FILESGrid_2Config.masterKeyNameArr = ComponentConfig.masterKeyNameArr;
          this.DSP_BATCH_DEFForm_3Config = new componentConfigDef();
          this.DSP_BATCH_DEFForm_3Config.masterKeyArr = ComponentConfig.masterKeyArr;
          this.DSP_BATCH_DEFForm_3Config.masterKeyNameArr = ComponentConfig.masterKeyNameArr;
        }
      }
      }
    }
 }
