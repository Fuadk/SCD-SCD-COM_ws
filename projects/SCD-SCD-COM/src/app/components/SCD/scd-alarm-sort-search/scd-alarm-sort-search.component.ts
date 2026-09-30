import { Component, OnInit,Output,Input, EventEmitter } from '@angular/core';
import { componentConfigDef} from '@modeldir/model';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { starServices } from 'starlib';
import { StarNotifyService } from '../../../services/starnotification.service';
import { TabAlignment } from '@progress/kendo-angular-layout';
declare function getParamConfig():any;
@Component({
  selector: 'app-scd-alarm-sort-search',
  templateUrl: './scd-alarm-sort-search.component.html',
  styleUrls: ['./scd-alarm-sort-search.component.scss'],
  standalone: false
})
export class ScdAlarmSortSearchComponent implements OnInit {
  public componentConfig: componentConfigDef;
  public paramConfig;  
  public title = '';
  public isPhonePortrait = false;
  public customerFacing = false;
  public isSearchScreen = false;
  public compSelector = 'app-scd-alarm-sort-search';
  public routineName = "ScdAlarmSortSearch";
  public alignment: TabAlignment = 'start';
  public gap: any = {
  	rows: 2,
  	columns: 2,
    };
  constructor(public responsive: BreakpointObserver, private starNotify: StarNotifyService, public starServices: starServices) {
    this.title =  this.starServices.getNLS([],"SCD_alarm_sort_search.SCD_alarm_sort_search.component_title","Alarm Sort Search");
    this.paramConfig = getParamConfig();
    this.componentConfig = new componentConfigDef();
}
public ngAfterViewInit() {
  this.starServices.setRTL();
 }
 @Output() setComponentConfig_Output: EventEmitter<any> = new EventEmitter();
 @Input() public set detail_Input(form: any) { 
  }
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
    //	this.pre_form();
	//this.when_window_activated();
	//this.when_new_form_instance();
 
    this.initComponents();
  }

  async initComponents(){
    await this.starServices.sleep(200);
    // to stop initial loading remove [executeQueryInput]="form_dsp_template"  from this (parent) html file
   this.scd_aaesp_alarm_sort_00_0Config = new componentConfigDef();
   this.scd_aaesp_alarm_sort_00_0Config.showToolBar = !this.visibleOK_BTNS; 
   this.scd_ass_alarm_sort_results1_1Config = new componentConfigDef();
   this.scd_ass_alarm_sort_results1_1Config.showToolBar = !this.visibleOK_BTNS; 
  }
  public  scd_aaesp_alarm_sort_00_0Config : componentConfigDef;
  public  hide_comp_1 = false;
  public  scd_ass_alarm_sort_results1_1Config : componentConfigDef;
  public  hide_comp_2 = false;
  public onComponentConfig_Output(ComponentConfig) 
{
    this.setComponentConfig_Output.emit(ComponentConfig);
}
  @Input() public set setComponentConfig_Input(ComponentConfig: componentConfigDef) {
    this.handleComponentConfig(ComponentConfig);
    } 
    public handleComponentConfig(ComponentConfig:any) {
    if (this.paramConfig.DEBUG_FLAG) console.log("ComponentConfig:ScdAlarmSortSearchComponent:",ComponentConfig);
    if (typeof ComponentConfig !== "undefined"){
       this.componentConfig = this.starServices.setComponentConfig(ComponentConfig, this.componentConfig  );
       if (ComponentConfig.languageChanged != null) { 
           setTimeout(() => {
             this.scd_ass_alarm_sort_results1_1Config = new componentConfigDef();
             this.scd_ass_alarm_sort_results1_1Config.languageChanged = ComponentConfig.languageChanged;
            // this.scd_ass_alarm_sort_results2Config.title = this.starServices.getNLS([],"SCD_alarm_sort_search.SCD_alarm_sort_search.compsTitleID","");
           }, 400);
       }
  
       this.scd_aaesp_alarm_sort_00_0Config = new componentConfigDef();
       this.scd_ass_alarm_sort_results1_1Config = new componentConfigDef();
       if (ComponentConfig.masterParams != null) {
              this.scd_aaesp_alarm_sort_00_0Config.masterParams = ComponentConfig.masterParams;
              this.scd_ass_alarm_sort_results1_1Config.masterParams = ComponentConfig.masterParams;
   		
       }
      if (ComponentConfig.masterSaved != null)
      {
       this.scd_aaesp_alarm_sort_00_0Config.masterSaved = ComponentConfig.masterSaved;
       this.scd_ass_alarm_sort_results1_1Config.masterSaved = ComponentConfig.masterSaved;
      }
      if (ComponentConfig.showToolBar != null)
      {
       this.scd_aaesp_alarm_sort_00_0Config.showToolBar = ComponentConfig.showToolBar;
       this.scd_ass_alarm_sort_results1_1Config.showToolBar = ComponentConfig.showToolBar;
      }
      if (ComponentConfig.newRec != null)
      {
       this.scd_aaesp_alarm_sort_00_0Config.newRec = ComponentConfig.newRec;
       this.scd_ass_alarm_sort_results1_1Config.newRec = ComponentConfig.newRec;
      }
      if (ComponentConfig.clearScreen != null)
      {
       this.scd_aaesp_alarm_sort_00_0Config.clearScreen = ComponentConfig.clearScreen;
       this.scd_ass_alarm_sort_results1_1Config.clearScreen = ComponentConfig.clearScreen;
	   }
      if ((ComponentConfig.masterKeyArr != null) && (ComponentConfig.masterKeyNameArr != null) )
      {
       if ((ComponentConfig.masterKeyArr.length != 0) && (ComponentConfig.masterKeyNameArr.length != 0) )
       {
         this.scd_aaesp_alarm_sort_00_0Config.masterKeyArr = ComponentConfig.masterKeyArr;
         this.scd_aaesp_alarm_sort_00_0Config.masterKeyNameArr = ComponentConfig.masterKeyNameArr;
         if (ComponentConfig.masterReadCompleted != null) 
         {
             this.scd_aaesp_alarm_sort_00_0Config.masterReadCompleted = ComponentConfig.masterReadCompleted;
          }
         this.scd_ass_alarm_sort_results1_1Config.masterKeyArr = ComponentConfig.masterKeyArr;
         this.scd_ass_alarm_sort_results1_1Config.masterKeyNameArr = ComponentConfig.masterKeyNameArr;
         if (ComponentConfig.masterReadCompleted != null) 
         {
             this.scd_ass_alarm_sort_results1_1Config.masterReadCompleted = ComponentConfig.masterReadCompleted;
          }
       }
      }
    }
  }
 
	public ON_CLICK_OK(event){
    console.log('ON_CLICK_OK: Called');
		this.componentConfig = new componentConfigDef(); 
		this.componentConfig.masterSaved = true;
		this.handleComponentConfig(this.componentConfig); 
    ///
    setTimeout(() => {
      const config = new componentConfigDef();
      config.parentClose = true;  // Should be Close
      // Emit through setComponentConfig_Output
      this.setComponentConfig_Output.emit(config);
     }, 300);
    
	}
	
	public ON_CLICK_CANCEL(event: any): void {
  console.log('ON_CLICK_CANCEL: Called');
  
  // Create a new componentConfig with parentClose = true
  const config = new componentConfigDef();
  config.parentClose = true;
  config.eventFrom = this.compSelector;
  config.eventTo = ['any'];
  
  // Emit through setComponentConfig_Output
  this.setComponentConfig_Output.emit(config);
  
  console.log('ON_CLICK_CANCEL: parentClose emitted to parent');
}
	public  help_1Config : componentConfigDef;
  	public helpOpened = false;
	public ON_CLICK_HELP(event){
    	this.helpOpened = true;
	}
	public visibleOK_BTNS = false;
	
  }
