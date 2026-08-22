import { Component, OnInit,Output,Input, EventEmitter } from '@angular/core';
import { componentConfigDef} from '@modeldir/model';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { starServices } from 'starlib';
import { StarNotifyService } from '../../../services/starnotification.service';
import { TabAlignment } from '@progress/kendo-angular-layout';
declare function getParamConfig():any;
@Component({
  selector: 'app-scd-opcua-server-definition',
  templateUrl: './scd-opcua-server-definition.component.html',
  styleUrls: ['./scd-opcua-server-definition.component.scss'],
  standalone: false
})
export class ScdOpcuaServerDefinitionComponent implements OnInit {
  public componentConfig: componentConfigDef;
  public paramConfig;  
  public title = '';
  public isPhonePortrait = false;
  public customerFacing = false;
  public isSearchScreen = false;
  public compSelector = 'app-scd-opcua-server-definition';
  public routineName = "ScdOpcuaServerDefinition";
  public alignment: TabAlignment = 'start';
  public gap: any = {
  	rows: 2,
  	columns: 2,
    };
  constructor(public responsive: BreakpointObserver, private starNotify: StarNotifyService, public starServices: starServices) {
    this.title =  this.starServices.getNLS([],"SCD_opcua_server_definition.SCD_opcua_server_definition.component_title","OPCUA Server Definition");
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
   this.scd_scd_opcua_server0_0Config = new componentConfigDef();
   this.scd_scd_opcua_server0_0Config.showToolBar = !this.visibleOK_BTNS; 
  }
  public  scd_scd_opcua_server0_0Config : componentConfigDef;
  public  hide_comp_1 = false;
  public onComponentConfig_Output(ComponentConfig) 
{
    this.setComponentConfig_Output.emit(ComponentConfig);
}
  @Input() public set setComponentConfig_Input(ComponentConfig: componentConfigDef) {
    this.handleComponentConfig(ComponentConfig);
    } 
    public handleComponentConfig(ComponentConfig:any) {
    if (this.paramConfig.DEBUG_FLAG) console.log("ComponentConfig:ScdOpcuaServerDefinitionComponent:",ComponentConfig);
    if (typeof ComponentConfig !== "undefined"){
       this.componentConfig = this.starServices.setComponentConfig(ComponentConfig, this.componentConfig  );
       if (ComponentConfig.languageChanged != null) { 
           setTimeout(() => {
           }, 400);
       }
  
       this.scd_scd_opcua_server0_0Config = new componentConfigDef();
       if (ComponentConfig.masterParams != null) {
              this.scd_scd_opcua_server0_0Config.masterParams = ComponentConfig.masterParams;
   		
       }
      if (ComponentConfig.masterSaved != null)
      {
       this.scd_scd_opcua_server0_0Config.masterSaved = ComponentConfig.masterSaved;
      }
      if (ComponentConfig.showToolBar != null)
      {
       this.scd_scd_opcua_server0_0Config.showToolBar = ComponentConfig.showToolBar;
      }
      if (ComponentConfig.newRec != null)
      {
       this.scd_scd_opcua_server0_0Config.newRec = ComponentConfig.newRec;
      }
      if (ComponentConfig.clearScreen != null)
      {
       this.scd_scd_opcua_server0_0Config.clearScreen = ComponentConfig.clearScreen;
	   }
      if ((ComponentConfig.masterKeyArr != null) && (ComponentConfig.masterKeyNameArr != null) )
      {
       if ((ComponentConfig.masterKeyArr.length != 0) && (ComponentConfig.masterKeyNameArr.length != 0) )
       {
         this.scd_scd_opcua_server0_0Config.masterKeyArr = ComponentConfig.masterKeyArr;
         this.scd_scd_opcua_server0_0Config.masterKeyNameArr = ComponentConfig.masterKeyNameArr;
         if (ComponentConfig.masterReadCompleted != null) 
         {
             this.scd_scd_opcua_server0_0Config.masterReadCompleted = ComponentConfig.masterReadCompleted;
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
	public visibleOK_BTNS = true;
	
  }
