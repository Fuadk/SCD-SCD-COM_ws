import { Component, OnInit,Input, Output, EventEmitter } from '@angular/core';
import { componentConfigDef} from '@modeldir/model';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { starServices } from 'starlib';
import { StarNotifyService } from '../../../services/starnotification.service';
import { TabAlignment } from '@progress/kendo-angular-layout';
 import { SelectEvent, TabCloseEvent } from '@progress/kendo-angular-layout';
declare function getParamConfig():any;
@Component({
  selector: 'app-scd-symbolfactoryplus',
  templateUrl: './scd-symbolfactoryplus.component.html',
  styleUrls: ['./scd-symbolfactoryplus.component.scss'],
  standalone: false
})
export class ScdSymbolfactoryplusComponent implements OnInit {
  public componentConfig: componentConfigDef;
  public paramConfig;  
  public title =  '';
  public isPhonePortrait = false;
  public customerFacing = false;
  public isSearchScreen = false;
  public routineName = "ScdSymbolfactoryplus";
  public alignment: TabAlignment = 'start';
  public gap: any = {
  	rows: 2,
  	columns: 2,
    };
  constructor(public responsive: BreakpointObserver, private starNotify: StarNotifyService, public starServices: starServices) {
    this.title =  this.starServices.getNLS([],"SCD_symbolfactoryplus.SCD_symbolfactoryplus.component_title","Symbol Factory Plus");
    this.paramConfig = getParamConfig();
    this.componentConfig = new componentConfigDef(); 
    if (this.visibleOK_BTNS)
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
  public  scd_symbolfactory0_0Config : componentConfigDef;
  public  scd_icons1_1Config : componentConfigDef;
  @Input() public set setComponentConfig_Input(ComponentConfig: componentConfigDef) {
    this.handleComponentConfig(ComponentConfig);
    } 
    public handleComponentConfig(ComponentConfig:any) {
    if (this.paramConfig.DEBUG_FLAG) console.log("ComponentConfig:ScdSymbolfactoryplusComponent:",ComponentConfig);
    if (typeof ComponentConfig !== "undefined"){
       this.componentConfig = this.starServices.setComponentConfig(ComponentConfig, this.componentConfig  );
       if (ComponentConfig.languageChanged != null) { 
           setTimeout(() => {
             this.scd_icons1_1Config = new componentConfigDef();
             this.scd_icons1_1Config.languageChanged = ComponentConfig.languageChanged;
            // this.scd_icons2Config.title = this.starServices.getNLS([],"SCD_symbolfactoryplus.SCD_symbolfactoryplus.compsTitleID","");
           }, 400);
       }
  
       if (ComponentConfig.masterParams != null) {
   		
       }
       else{
       this.scd_symbolfactory0_0Config = new componentConfigDef();
       this.scd_symbolfactory0_0Config = ComponentConfig;
       this.scd_icons1_1Config = new componentConfigDef();
       this.scd_icons1_1Config = ComponentConfig;
      if (ComponentConfig.masterSaved != null)
      {
       this.scd_symbolfactory0_0Config.masterSaved = ComponentConfig.masterSaved;
       this.scd_icons1_1Config.masterSaved = ComponentConfig.masterSaved;
      }
      if (ComponentConfig.newRec != null)
      {
       this.scd_symbolfactory0_0Config.newRec = ComponentConfig.newRec;
       this.scd_icons1_1Config.newRec = ComponentConfig.newRec;
      }
      if (ComponentConfig.showToolBar != null)
      {
       this.scd_symbolfactory0_0Config.showToolBar = ComponentConfig.showToolBar;
       this.scd_icons1_1Config.showToolBar = ComponentConfig.showToolBar;
      }
      if (ComponentConfig.clearScreen != null)
      {
       this.scd_symbolfactory0_0Config.clearScreen = ComponentConfig.clearScreen;
       this.scd_icons1_1Config.clearScreen = ComponentConfig.clearScreen;
	   }
      if ((ComponentConfig.masterKeyArr != null) && (ComponentConfig.masterKeyNameArr != null) )
      {
       if ((ComponentConfig.masterKeyArr.length != 0) && (ComponentConfig.masterKeyNameArr.length != 0) )
       {
         this.scd_symbolfactory0_0Config.masterKeyArr = ComponentConfig.masterKeyArr;
         this.scd_symbolfactory0_0Config.masterKeyNameArr = ComponentConfig.masterKeyNameArr;
         if (ComponentConfig.masterReadCompleted != null) 
         {
             this.scd_symbolfactory0_0Config.masterReadCompleted = ComponentConfig.masterReadCompleted;
          }
         this.scd_icons1_1Config.masterKeyArr = ComponentConfig.masterKeyArr;
         this.scd_icons1_1Config.masterKeyNameArr = ComponentConfig.masterKeyNameArr;
         if (ComponentConfig.masterReadCompleted != null) 
         {
             this.scd_icons1_1Config.masterReadCompleted = ComponentConfig.masterReadCompleted;
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
