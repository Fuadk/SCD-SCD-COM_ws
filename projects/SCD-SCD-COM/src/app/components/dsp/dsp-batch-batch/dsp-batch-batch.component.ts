import { Component, OnInit, ViewChild } from '@angular/core';
import { componentConfigDef} from '@modeldir/model';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { starServices } from 'starlib';
import { StarNotifyService } from '../../../services/starnotification.service';
import { TabAlignment } from '@progress/kendo-angular-layout';
import { Subscription } from 'rxjs';

declare function getParamConfig():any;
@Component({
  selector: 'app-dsp-batch-batch',
  templateUrl: './dsp-batch-batch.component.html',
  styleUrls: ['./dsp-batch-batch.component.scss']
})

export class DspBatchBatchComponent implements OnInit {
  @ViewChild('tabstrip') public tabstrip: any;
  public compSelector = 'app-dsp-batch-batch';
  public componentConfig: componentConfigDef;
  public paramConfig;  
  public title =  '';
  public routineName = "DspBatchBatch";
  public alignment: TabAlignment = 'start';
  constructor(public responsive: BreakpointObserver, private starNotify: StarNotifyService, public starServices: starServices) {
    this.title =  this.starServices.getNLS([],"dsp_batch_batch.dsp_batch_batch.component_title","Batches");
    this.paramConfig = getParamConfig();
    this.componentConfig = new componentConfigDef(); 
}
private componentConfigChangeEvent!: Subscription;
public ngAfterViewInit() {
  this.starServices.setRTL();
 }
  ngOnInit(): void {
    this.starServices.actOnParamConfig(this, this.routineName );
    //	this.pre_form();
	//this.when_window_activated();
	//this.when_new_form_instance();
    // Subscribing the event.
    this.componentConfigChangeEvent = this.starNotify.subscribeEvent<componentConfigDef>('componentConfigDef', componentConfig => {
      if (componentConfig.eventFrom != this.compSelector) {
         if (componentConfig.eventTo.includes(this.compSelector)|| componentConfig.eventTo.includes("any"))  {
            this.handleComponentConfig(componentConfig);
         }
      }
   });
 
  }
  public  DSP_ORDER_WORK_ORDERS : componentConfigDef;
  public handleComponentConfig(ComponentConfig:any) {

    if (typeof ComponentConfig !== "undefined") {
       if (this.paramConfig.DEBUG_FLAG) console.log("DspBatchBatchComponent ComponentConfig:", ComponentConfig);
       this.componentConfig = this.starServices.setComponentConfig(ComponentConfig, this.componentConfig);
     

       if (ComponentConfig.formattedWhere != null) {
           this.tabstrip.selectTab(2);
           this.DSP_ORDER_WORK_ORDERS = new componentConfigDef();
           this.DSP_ORDER_WORK_ORDERS= ComponentConfig;
        

       }
     

    }

 }

}
