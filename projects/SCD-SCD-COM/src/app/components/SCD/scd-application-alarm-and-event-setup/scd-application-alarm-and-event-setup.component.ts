import { Component, OnInit,Input, Output, EventEmitter } from '@angular/core';
import { componentConfigDef} from '@modeldir/model';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { starServices } from 'starlib';
import { StarNotifyService } from '../../../services/starnotification.service';
import { TabAlignment } from '@progress/kendo-angular-layout';
 import { SelectEvent, TabCloseEvent } from '@progress/kendo-angular-layout';
declare function getParamConfig():any;
@Component({
  selector: 'app-scd-application-alarm-and-event-setup',
  templateUrl: './scd-application-alarm-and-event-setup.component.html',
  styleUrls: ['./scd-application-alarm-and-event-setup.component.scss'],
  standalone: false
})
export class ScdApplicationAlarmAndEventSetupComponent implements OnInit {
  public componentConfig: componentConfigDef;
  public paramConfig;  
  public title =  '';
  public isPhonePortrait = false;
  public customerFacing = false;
  public isSearchScreen = false;
  public routineName = "ScdApplicationAlarmAndEventSetup";
  public alignment: TabAlignment = 'start';
  public gap: any = {
  	rows: 2,
  	columns: 2,
    };
  constructor(public responsive: BreakpointObserver, private starNotify: StarNotifyService, public starServices: starServices) {
    this.title =  this.starServices.getNLS([],"SCD_application_alarm_and_event_setup.SCD_application_alarm_and_event_setup.component_title","Application Alarm and Event Setup under AE Server");
    this.paramConfig = getParamConfig();
    this.componentConfig = new componentConfigDef(); 
	this.componentConfig.showToolBar = !this.visibleOK_BTNS; 
	this.handleComponentConfig(this.componentConfig); 
}
 @Input() public set detail_Input(form: any) { 
  }
public ngAfterViewInit() {
  this.starServices.setRTL();
 }
  ngOnInit(): void {
    this.starServices.actOnParamConfig(this, this.routineName );
    //	this.pre_form();
	//this.when_window_activated();
	//this.when_new_form_instance();
 
    this.WHEN_NEW_FORM_INSTANCE();
  }

  async WHEN_NEW_FORM_INSTANCE(){
	   }
  public onSelect(e: SelectEvent): void { 
	  }
  public  scd_all_alarms0_0Config : componentConfigDef;
  public  scd_alm_local_messages1_1Config : componentConfigDef;
  public  scd_tur_tag_update_rates2_2Config : componentConfigDef;
  @Input() public set setComponentConfig_Input(ComponentConfig: componentConfigDef) {
    this.handleComponentConfig(ComponentConfig);
    } 
    public handleComponentConfig(ComponentConfig:any) {
    if (this.paramConfig.DEBUG_FLAG) console.log("ComponentConfig:ScdApplicationAlarmAndEventSetupComponent:",ComponentConfig);
    if (typeof ComponentConfig !== "undefined"){
       this.componentConfig = this.starServices.setComponentConfig(ComponentConfig, this.componentConfig  );
       if (ComponentConfig.languageChanged != null) { 
           setTimeout(() => {
             this.scd_alm_local_messages1_1Config = new componentConfigDef();
             this.scd_alm_local_messages1_1Config.languageChanged = ComponentConfig.languageChanged;
            // this.scd_alm_local_messages2Config.title = this.starServices.getNLS([],"SCD_application_alarm_and_event_setup.SCD_application_alarm_and_event_setup.compsTitleID","");
             this.scd_tur_tag_update_rates2_2Config = new componentConfigDef();
             this.scd_tur_tag_update_rates2_2Config.languageChanged = ComponentConfig.languageChanged;
            // this.scd_tur_tag_update_rates3Config.title = this.starServices.getNLS([],"SCD_application_alarm_and_event_setup.SCD_application_alarm_and_event_setup.compsTitleID","");
           }, 400);
       }
  
       if (ComponentConfig.masterParams != null) {
   		
       }
       else{
       this.scd_all_alarms0_0Config = new componentConfigDef();
       this.scd_all_alarms0_0Config = ComponentConfig;
       this.scd_alm_local_messages1_1Config = new componentConfigDef();
       this.scd_alm_local_messages1_1Config = ComponentConfig;
       this.scd_tur_tag_update_rates2_2Config = new componentConfigDef();
       this.scd_tur_tag_update_rates2_2Config = ComponentConfig;
      if (ComponentConfig.masterSaved != null)
      {
       this.scd_all_alarms0_0Config.masterSaved = ComponentConfig.masterSaved;
       this.scd_alm_local_messages1_1Config.masterSaved = ComponentConfig.masterSaved;
       this.scd_tur_tag_update_rates2_2Config.masterSaved = ComponentConfig.masterSaved;
      }
      if (ComponentConfig.newRec != null)
      {
       this.scd_all_alarms0_0Config.newRec = ComponentConfig.newRec;
       this.scd_alm_local_messages1_1Config.newRec = ComponentConfig.newRec;
       this.scd_tur_tag_update_rates2_2Config.newRec = ComponentConfig.newRec;
      }
      if (ComponentConfig.showToolBar != null)
      {
       this.scd_all_alarms0_0Config.showToolBar = ComponentConfig.showToolBar;
       this.scd_alm_local_messages1_1Config.showToolBar = ComponentConfig.showToolBar;
       this.scd_tur_tag_update_rates2_2Config.showToolBar = ComponentConfig.showToolBar;
      }
      if (ComponentConfig.clearScreen != null)
      {
       this.scd_all_alarms0_0Config.clearScreen = ComponentConfig.clearScreen;
       this.scd_alm_local_messages1_1Config.clearScreen = ComponentConfig.clearScreen;
       this.scd_tur_tag_update_rates2_2Config.clearScreen = ComponentConfig.clearScreen;
	   }
      if ((ComponentConfig.masterKeyArr != null) && (ComponentConfig.masterKeyNameArr != null) )
      {
       if ((ComponentConfig.masterKeyArr.length != 0) && (ComponentConfig.masterKeyNameArr.length != 0) )
       {
         this.scd_all_alarms0_0Config.masterKeyArr = ComponentConfig.masterKeyArr;
         this.scd_all_alarms0_0Config.masterKeyNameArr = ComponentConfig.masterKeyNameArr;
         if (ComponentConfig.masterReadCompleted != null) 
         {
             this.scd_all_alarms0_0Config.masterReadCompleted = ComponentConfig.masterReadCompleted;
          }
         this.scd_alm_local_messages1_1Config.masterKeyArr = ComponentConfig.masterKeyArr;
         this.scd_alm_local_messages1_1Config.masterKeyNameArr = ComponentConfig.masterKeyNameArr;
         if (ComponentConfig.masterReadCompleted != null) 
         {
             this.scd_alm_local_messages1_1Config.masterReadCompleted = ComponentConfig.masterReadCompleted;
          }
         this.scd_tur_tag_update_rates2_2Config.masterKeyArr = ComponentConfig.masterKeyArr;
         this.scd_tur_tag_update_rates2_2Config.masterKeyNameArr = ComponentConfig.masterKeyNameArr;
         if (ComponentConfig.masterReadCompleted != null) 
         {
             this.scd_tur_tag_update_rates2_2Config.masterReadCompleted = ComponentConfig.masterReadCompleted;
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
	public visibleOK_BTNS = true;
	
  }
