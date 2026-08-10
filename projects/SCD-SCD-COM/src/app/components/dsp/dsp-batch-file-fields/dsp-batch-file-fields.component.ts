import { Component, OnInit, Output,Input, EventEmitter, HostListener } from '@angular/core';
import { dspbatchFileDefDspBatchDspBatchFileDefForm ,dspbatchFieldsDspBatchDspBatchFieldsGrid  , componentConfigDef} from '@modeldir/model';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { starServices } from 'starlib';
import { StarNotifyService } from '../../../services/starnotification.service';
import { TabAlignment } from '@progress/kendo-angular-layout';
declare function getParamConfig():any;

@Component({

  selector: 'app-dsp-batch-file-fields',
  templateUrl: './dsp-batch-file-fields.component.html',
  styleUrls: ['./dsp-batch-file-fields.component.scss']
})
export class DspBatchFileFieldsComponent implements OnInit {
  @Output() saveTriggerOutput: EventEmitter<any> = new EventEmitter();
  constructor(public responsive: BreakpointObserver, private starNotify: StarNotifyService, public starServices: starServices) {
  //this.title =  this.starServices.getNLS([],"dsp_batch_file_fields.dsp_batch_file_fields.component_title","Dsp Batch File Def Dsp Batch File Def Form");
  this.title = "";
    this.paramConfig = getParamConfig();
    this.componentConfig = new componentConfigDef();
  }
  public showToolBar = false;
  public paramConfig; 
  public title = '';
  public routineName = "dsp_batch_file_fields";
  public alignment: TabAlignment = 'start';
  public selectedTab = 2;

  public componentConfig: componentConfigDef;

  public form_0_DSP_BATCH_FILE_DEF : dspbatchFileDefDspBatchDspBatchFileDefForm;
  public grid_1_DSP_BATCH_FIELDS : dspbatchFieldsDspBatchDspBatchFieldsGrid;
  public  DSP_BATCH_FILE_DEFForm_0Config : componentConfigDef;
  public  DSP_BATCH_FIELDSGrid_1Config : componentConfigDef;
  public PDFfileName = this.title + ".PDF";
  public routineAuth = "DspBatchFileFields";

  public ngAfterViewInit() {
    this.starServices.setRTL();
  }
  ngOnInit(): void {
    this.starServices.actOnParamConfig(this, this.routineName );

    // to stop initial loading remove [executeQueryInput]="form_dsp_template"  from this (parent) html file
   this.form_0_DSP_BATCH_FILE_DEF = new dspbatchFileDefDspBatchDspBatchFileDefForm();
   this.DSP_BATCH_FILE_DEFForm_0Config = new componentConfigDef();
   this.DSP_BATCH_FILE_DEFForm_0Config.isMaster = true;
   this.grid_1_DSP_BATCH_FIELDS = new dspbatchFieldsDspBatchDspBatchFieldsGrid();
   this.DSP_BATCH_FIELDSGrid_1Config = new componentConfigDef();
   this.DSP_BATCH_FIELDSGrid_1Config.isChild = true;
   //this.DSP_BATCH_FIELDSGrid_1Config.gridHeight = "300";
  }
    public readCompletedHandler( form_DSP_BATCH_FILE_DEF) {
    let masterKeyArr = [form_DSP_BATCH_FILE_DEF.FILE_NAME];
    let masterKeyNameArr = ["FILE_NAME"];
 this.grid_1_DSP_BATCH_FIELDS = new dspbatchFieldsDspBatchDspBatchFieldsGrid();
 for (let i = 0; i< masterKeyNameArr.length; i++){
       this.grid_1_DSP_BATCH_FIELDS[masterKeyNameArr[i]] = masterKeyArr[i];
    }
    this.DSP_BATCH_FIELDSGrid_1Config = new componentConfigDef();
    this.DSP_BATCH_FIELDSGrid_1Config.masterKeyArr =  [form_DSP_BATCH_FILE_DEF.FILE_NAME];
    this.DSP_BATCH_FIELDSGrid_1Config.masterKeyNameArr =  ["FILE_NAME"];
  }
  public clearCompletedHandler( form_DSP_BATCH_FILE_DEF) {
    this.grid_1_DSP_BATCH_FIELDS = new  dspbatchFieldsDspBatchDspBatchFieldsGrid();
  }
  public saveCompletedHandler( form_DSP_BATCH_FILE_DEF) {
    this.DSP_BATCH_FIELDSGrid_1Config = new componentConfigDef();
    this.DSP_BATCH_FIELDSGrid_1Config.masterSaved = form_DSP_BATCH_FILE_DEF;
    this.DSP_BATCH_FIELDSGrid_1Config.masterKeyArr =  [form_DSP_BATCH_FILE_DEF.FILE_NAME];
    this.DSP_BATCH_FIELDSGrid_1Config.masterKeyNameArr =  ["FILE_NAME"];

  }
  @Input() public set detail_Input(form: any) {
    if (typeof form !== "undefined")
    {
        this.form_0_DSP_BATCH_FILE_DEF = form;
    }
  }

  @Input() public set setComponentConfig_Input(ComponentConfig: componentConfigDef) {
    if (this.paramConfig.DEBUG_FLAG) console.log("ComponentConfig:",ComponentConfig);
    if (typeof ComponentConfig !== "undefined"){
	   this.componentConfig = this.starServices.setComponentConfig(ComponentConfig, this.componentConfig  );
      if (ComponentConfig.masterSaved != null)
      {
        this.DSP_BATCH_FILE_DEFForm_0Config = new componentConfigDef();
        this.DSP_BATCH_FILE_DEFForm_0Config.masterSaved = ComponentConfig.masterSaved;
        this.DSP_BATCH_FIELDSGrid_1Config = new componentConfigDef();
        this.DSP_BATCH_FIELDSGrid_1Config.masterSaved = ComponentConfig.masterSaved;
      }
      if (ComponentConfig.clearScreen != null)
      {
        this.DSP_BATCH_FILE_DEFForm_0Config = new componentConfigDef();
        this.DSP_BATCH_FILE_DEFForm_0Config.clearScreen = ComponentConfig.clearScreen;
        this.DSP_BATCH_FIELDSGrid_1Config = new componentConfigDef();
        this.DSP_BATCH_FIELDSGrid_1Config.clearScreen = ComponentConfig.clearScreen;
      }
      if ((ComponentConfig.masterKeyArr != null) && (ComponentConfig.masterKeyNameArr != null) )
      {
        if ((ComponentConfig.masterKeyArr.length != 0) && (ComponentConfig.masterKeyNameArr.length != 0) )
        {
          this.DSP_BATCH_FILE_DEFForm_0Config = new componentConfigDef();
          this.DSP_BATCH_FILE_DEFForm_0Config.masterKeyArr = ComponentConfig.masterKeyArr;
          this.DSP_BATCH_FILE_DEFForm_0Config.masterKeyNameArr = ComponentConfig.masterKeyNameArr;
          this.DSP_BATCH_FIELDSGrid_1Config = new componentConfigDef();
          this.DSP_BATCH_FIELDSGrid_1Config.masterKeyArr = ComponentConfig.masterKeyArr;
          this.DSP_BATCH_FIELDSGrid_1Config.masterKeyNameArr = ComponentConfig.masterKeyNameArr;
        }
      }
      }
    }
 }
