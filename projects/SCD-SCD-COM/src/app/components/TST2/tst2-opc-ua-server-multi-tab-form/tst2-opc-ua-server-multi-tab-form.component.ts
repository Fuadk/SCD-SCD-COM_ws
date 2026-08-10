import { Component, OnInit,Input } from '@angular/core';
import { componentConfigDef} from '@modeldir/model';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { starServices } from 'starlib';
import { StarNotifyService } from '../../../services/starnotification.service';
import { TabAlignment } from '@progress/kendo-angular-layout';
declare function getParamConfig():any;
@Component({
  selector: 'app-tst2-opc-ua-server-multi-tab-form',
  templateUrl: './tst2-opc-ua-server-multi-tab-form.component.html',
  styleUrls: ['./tst2-opc-ua-server-multi-tab-form.component.scss'],
  standalone: false
})
export class Tst2OpcUaServerMultiTabFormComponent implements OnInit {
  public componentConfig: componentConfigDef;
  public paramConfig;  
  public title = '';
  public isPhonePortrait = false;
  public customerFacing = false;
  public isSearchScreen = false;
  public routineName = "Tst2OpcUaServerMultiTabForm";
  public alignment: TabAlignment = 'start';
  public gap: any = {
  	rows: 2,
  	columns: 2,
    };
  constructor(public responsive: BreakpointObserver, private starNotify: StarNotifyService, public starServices: starServices) {
    this.title =  this.starServices.getNLS([],"TST2_opc_ua_server_multi_tab_form.TST2_opc_ua_server_multi_tab_form.component_title","OPC UA Server Multi Tab Form");
    this.paramConfig = getParamConfig();
    this.componentConfig = new componentConfigDef(); 
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

  public  tst2_ousmtf_opc_ua_server_configuration0_0Config : componentConfigDef;
  @Input() public set setComponentConfig_Input(ComponentConfig: componentConfigDef) {
    this.handleComponentConfig(ComponentConfig);
    } 
    public handleComponentConfig(ComponentConfig:any) {
    if (this.paramConfig.DEBUG_FLAG) console.log("ComponentConfig:Tst2OpcUaServerMultiTabFormComponent:",ComponentConfig);
    if (typeof ComponentConfig !== "undefined"){
       this.componentConfig = this.starServices.setComponentConfig(ComponentConfig, this.componentConfig  );
       if (ComponentConfig.languageChanged != null) { 
           setTimeout(() => {
           }, 400);
       }
  
       if (ComponentConfig.masterParams != null) {
   		
       }
       else{
       this.tst2_ousmtf_opc_ua_server_configuration0_0Config = new componentConfigDef();
       this.tst2_ousmtf_opc_ua_server_configuration0_0Config = ComponentConfig;
      if (ComponentConfig.masterSaved != null)
      {
       this.tst2_ousmtf_opc_ua_server_configuration0_0Config.masterSaved = ComponentConfig.masterSaved;
      }
      if (ComponentConfig.newRec != null)
      {
       this.tst2_ousmtf_opc_ua_server_configuration0_0Config.newRec = ComponentConfig.newRec;
      }
      if (ComponentConfig.clearScreen != null)
      {
       this.tst2_ousmtf_opc_ua_server_configuration0_0Config.clearScreen = ComponentConfig.clearScreen;
	   }
      if ((ComponentConfig.masterKeyArr != null) && (ComponentConfig.masterKeyNameArr != null) )
      {
       if ((ComponentConfig.masterKeyArr.length != 0) && (ComponentConfig.masterKeyNameArr.length != 0) )
       {
         this.tst2_ousmtf_opc_ua_server_configuration0_0Config.masterKeyArr = ComponentConfig.masterKeyArr;
         this.tst2_ousmtf_opc_ua_server_configuration0_0Config.masterKeyNameArr = ComponentConfig.masterKeyNameArr;
         if (ComponentConfig.masterReadCompleted != null) 
         {
             this.tst2_ousmtf_opc_ua_server_configuration0_0Config.masterReadCompleted = ComponentConfig.masterReadCompleted;
          }
       }
      }
     }
    }
  }
}
