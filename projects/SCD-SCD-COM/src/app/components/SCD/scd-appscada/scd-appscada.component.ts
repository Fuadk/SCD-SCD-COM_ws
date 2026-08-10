import { Component, OnInit,Output,Input, EventEmitter } from '@angular/core';
import { componentConfigDef} from '@modeldir/model';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { starServices } from 'starlib';
import { StarNotifyService } from '../../../services/starnotification.service';
import { TabAlignment } from '@progress/kendo-angular-layout';
declare function getParamConfig():any;
@Component({
  selector: 'app-scd-appscada',
  templateUrl: './scd-appscada.component.html',
  styleUrls: ['./scd-appscada.component.scss'],
  standalone: false
})
export class ScdAppscadaComponent implements OnInit {
  public componentConfig: componentConfigDef;
  public paramConfig;  
  public title = '';
  public isPhonePortrait = false;
  public customerFacing = false;
  public isSearchScreen = false;
  public routineName = "ScdAppscada";
  public alignment: TabAlignment = 'start';
  public gap: any = {
  	rows: 2,
  	columns: 2,
    };
  constructor(public responsive: BreakpointObserver, private starNotify: StarNotifyService, public starServices: starServices) {
    this.title =  this.starServices.getNLS([],"SCD_appscada.SCD_appscada.component_title","AppScada");
    this.paramConfig = getParamConfig();
    this.componentConfig = new componentConfigDef(); 
    if (this.visibleOK_BTNS)
	    this.componentConfig.showToolBar = !this.visibleOK_BTNS; 
	this.handleComponentConfig(this.componentConfig); 
}
public ngAfterViewInit() {
  this.starServices.setRTL();
 }
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
 
  }

  public  scd_appselect0_0Config : componentConfigDef;
  public  scd_appboard1_1Config : componentConfigDef;
  @Input() public set setComponentConfig_Input(ComponentConfig: componentConfigDef) {
    this.handleComponentConfig(ComponentConfig);
    } 
    public handleComponentConfig(ComponentConfig:any) {
    if (this.paramConfig.DEBUG_FLAG) console.log("ComponentConfig:ScdAppscadaComponent:",ComponentConfig);
    if (typeof ComponentConfig !== "undefined"){
       this.componentConfig = this.starServices.setComponentConfig(ComponentConfig, this.componentConfig  );
       if (ComponentConfig.languageChanged != null) { 
           setTimeout(() => {
             this.scd_appboard1_1Config = new componentConfigDef();
             this.scd_appboard1_1Config.languageChanged = ComponentConfig.languageChanged;
            // this.scd_appboard2Config.title = this.starServices.getNLS([],"SCD_appscada.SCD_appscada.compsTitleID","");
           }, 400);
       }
  
       if (ComponentConfig.masterParams != null) {
   		
       }
       else{
       this.scd_appselect0_0Config = new componentConfigDef();
       this.scd_appselect0_0Config = ComponentConfig;
       this.scd_appboard1_1Config = new componentConfigDef();
       this.scd_appboard1_1Config = ComponentConfig;
      if (ComponentConfig.masterSaved != null)
      {
       this.scd_appselect0_0Config.masterSaved = ComponentConfig.masterSaved;
       this.scd_appboard1_1Config.masterSaved = ComponentConfig.masterSaved;
      }
      if (ComponentConfig.newRec != null)
      {
       this.scd_appselect0_0Config.newRec = ComponentConfig.newRec;
       this.scd_appboard1_1Config.newRec = ComponentConfig.newRec;
      }
      if (ComponentConfig.clearScreen != null)
      {
       this.scd_appselect0_0Config.clearScreen = ComponentConfig.clearScreen;
       this.scd_appboard1_1Config.clearScreen = ComponentConfig.clearScreen;
	   }
      if ((ComponentConfig.masterKeyArr != null) && (ComponentConfig.masterKeyNameArr != null) )
      {
       if ((ComponentConfig.masterKeyArr.length != 0) && (ComponentConfig.masterKeyNameArr.length != 0) )
       {
         this.scd_appselect0_0Config.masterKeyArr = ComponentConfig.masterKeyArr;
         this.scd_appselect0_0Config.masterKeyNameArr = ComponentConfig.masterKeyNameArr;
         if (ComponentConfig.masterReadCompleted != null) 
         {
             this.scd_appselect0_0Config.masterReadCompleted = ComponentConfig.masterReadCompleted;
          }
         this.scd_appboard1_1Config.masterKeyArr = ComponentConfig.masterKeyArr;
         this.scd_appboard1_1Config.masterKeyNameArr = ComponentConfig.masterKeyNameArr;
         if (ComponentConfig.masterReadCompleted != null) 
         {
             this.scd_appboard1_1Config.masterReadCompleted = ComponentConfig.masterReadCompleted;
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
