import { Component, OnInit, Output,Input, EventEmitter, HostListener } from '@angular/core';
import { themedefMysecondappThemeDefForm ,themedetailMysecondappThemeDetailGrid  , componentConfigDef} from '@modeldir/model';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { starServices } from 'starlib';
import { StarNotifyService } from '../../../services/starnotification.service';
import { TabAlignment } from '@progress/kendo-angular-layout';
declare function getParamConfig():any;

@Component({

  selector: 'app-adm-theme-def',
  templateUrl: './adm-theme-def.component.html',
  styleUrls: ['./adm-theme-def.component.scss']
})
export class AdmThemeDefComponent implements OnInit {
  @Output() saveTriggerOutput: EventEmitter<any> = new EventEmitter();
  constructor(public responsive: BreakpointObserver, private starNotify: StarNotifyService, public starServices: starServices) {
    this.paramConfig = getParamConfig();
    this.componentConfig = new componentConfigDef();
  }
  public showToolBar = false;
  public paramConfig; 
  public title =  this.starServices.getNLS([],"mysecondapp_THEME_DEF.mysecondapp_THEME_DEF.component_title","Theme Definition");
  public routineName = "ADMTHEME";

  public alignment: TabAlignment = 'start';
  public selectedTab = 2;

  public componentConfig: componentConfigDef;

  public form_0_THEME_DEF : themedefMysecondappThemeDefForm;
  public grid_1_THEME_DETAIL : themedetailMysecondappThemeDetailGrid;
  public  THEME_DEFForm_0Config : componentConfigDef;
  public  THEME_DETAILGrid_1Config : componentConfigDef;
  public PDFfileName = this.title + ".PDF";
  public routineAuth = "ADMTHEME";

  public ngAfterViewInit() {
    this.starServices.setRTL();
  }
  ngOnInit(): void {
    this.starServices.actOnParamConfig(this, this.routineName );

    // to stop initial loading remove [executeQueryInput]="form_dsp_template"  from this (parent) html file
   this.form_0_THEME_DEF = new themedefMysecondappThemeDefForm();
   this.THEME_DEFForm_0Config = new componentConfigDef();
   this.THEME_DEFForm_0Config.isMaster = true;
   this.THEME_DEFForm_0Config.routineAuth = this.routineAuth;
   this.grid_1_THEME_DETAIL = new themedetailMysecondappThemeDetailGrid();
   this.THEME_DETAILGrid_1Config = new componentConfigDef();
   this.THEME_DETAILGrid_1Config.isChild = true;
   this.THEME_DETAILGrid_1Config.gridHeight = "600";
  }
    public readCompletedHandler( form_THEME_DEF) {
    let masterKeyArr = [form_THEME_DEF.THEME_NAME];
    let masterKeyNameArr = ["THEME_NAME"];
 this.grid_1_THEME_DETAIL = new themedetailMysecondappThemeDetailGrid();
 for (let i = 0; i< masterKeyNameArr.length; i++){
       this.grid_1_THEME_DETAIL[masterKeyNameArr[i]] = masterKeyArr[i];
    }
    this.THEME_DETAILGrid_1Config = new componentConfigDef();
    this.THEME_DETAILGrid_1Config.masterKeyArr =  [form_THEME_DEF.THEME_NAME];
    this.THEME_DETAILGrid_1Config.masterKeyNameArr =  ["THEME_NAME"];
  }
  public clearCompletedHandler( form_THEME_DEF) {
    this.grid_1_THEME_DETAIL = new  themedetailMysecondappThemeDetailGrid();
  }
  public saveCompletedHandler( form_THEME_DEF) {
    this.THEME_DETAILGrid_1Config = new componentConfigDef();
    this.THEME_DETAILGrid_1Config.masterSaved = form_THEME_DEF;
    this.THEME_DETAILGrid_1Config.masterKeyArr =  [form_THEME_DEF.THEME_NAME];
    this.THEME_DETAILGrid_1Config.masterKeyNameArr =  ["THEME_NAME"];

  }
  @Input() public set detail_Input(form: any) {
    if (typeof form !== "undefined")
    {
        this.form_0_THEME_DEF = form;
    }
  }

  @Input() public set setComponentConfig_Input(ComponentConfig: componentConfigDef) {
    if (this.paramConfig.DEBUG_FLAG) console.log("ComponentConfig:",ComponentConfig);
    if (typeof ComponentConfig !== "undefined"){
	   this.componentConfig = this.starServices.setComponentConfig(ComponentConfig, this.componentConfig  );
      if (ComponentConfig.masterSaved != null)
      {
        this.THEME_DEFForm_0Config = new componentConfigDef();
        this.THEME_DEFForm_0Config.masterSaved = ComponentConfig.masterSaved;
        this.THEME_DETAILGrid_1Config = new componentConfigDef();
        this.THEME_DETAILGrid_1Config.masterSaved = ComponentConfig.masterSaved;
      }
      if (ComponentConfig.clearScreen != null)
      {
        this.THEME_DEFForm_0Config = new componentConfigDef();
        this.THEME_DEFForm_0Config.clearScreen = ComponentConfig.clearScreen;
        this.THEME_DETAILGrid_1Config = new componentConfigDef();
        this.THEME_DETAILGrid_1Config.clearScreen = ComponentConfig.clearScreen;
      }
      if ((ComponentConfig.masterKeyArr != null) && (ComponentConfig.masterKeyNameArr != null) )
      {
        if ((ComponentConfig.masterKeyArr.length != 0) && (ComponentConfig.masterKeyNameArr.length != 0) )
        {
          this.THEME_DEFForm_0Config = new componentConfigDef();
          this.THEME_DEFForm_0Config.masterKeyArr = ComponentConfig.masterKeyArr;
          this.THEME_DEFForm_0Config.masterKeyNameArr = ComponentConfig.masterKeyNameArr;
          this.THEME_DETAILGrid_1Config = new componentConfigDef();
          this.THEME_DETAILGrid_1Config.masterKeyArr = ComponentConfig.masterKeyArr;
          this.THEME_DETAILGrid_1Config.masterKeyNameArr = ComponentConfig.masterKeyNameArr;
        }
      }
      }
    }
 }
