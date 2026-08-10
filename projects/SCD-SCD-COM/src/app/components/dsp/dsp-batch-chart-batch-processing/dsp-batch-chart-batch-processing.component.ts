import { Component, OnInit } from '@angular/core';
import { componentConfigDef} from '@modeldir/model';
import { starServices } from 'starlib';
import { StarNotifyService } from '../../../services/starnotification.service';

import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';

declare function getParamConfig():any;
@Component({
  selector: 'app-dsp-batch-chart-batch-processing',
  templateUrl: './dsp-batch-chart-batch-processing.component.html',
  styleUrls: ['./dsp-batch-chart-batch-processing.component.scss']
})
export class DspBatchChartBatchProcessingComponent implements OnInit {
  public componentConfig: componentConfigDef;
  public paramConfig;  
  public title = "";
  public routineName = "DspBatchChartBatchProcessing";
  public DSP_COMPConfig : componentConfigDef;

  constructor(public responsive: BreakpointObserver, private starNotify: StarNotifyService, public starServices: starServices) {
    this.paramConfig = getParamConfig();
    this.componentConfig = new componentConfigDef(); 
}

public ngAfterViewInit() {
  this.starServices.setRTL();
 }
  ngOnInit(): void {
    this.starServices.actOnParamConfig(this, this.routineName );

this.DSP_COMPConfig = new componentConfigDef();
   // var formVal = this.form.value;
    var masterParams = {
      name : "chart_batch_processing",
      type : "column",
      width : 400,
      height : 400,
      queryID : 1,
      chartOrder : 1,
      showParams : true,
      QUERY_ID: 1,
      DASHBOARD_ID : 1,
      formName: "",
      formPagesNo: "",
      orderFields: "[]"

    }
    this.DSP_COMPConfig.masterParams = masterParams;

    //	this.pre_form();
	//this.when_window_activated();
	//this.when_new_form_instance();
 
  }

}
