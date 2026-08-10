import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { componentConfigDef } from '@modeldir/model';
import { starServices } from 'starlib';
import { Starlib1 } from '../../Starlib1';

import {
  DomSanitizer,
  SafeHtml,
  SafeStyle,
  SafeScript,
  SafeUrl,
  SafeResourceUrl
} from '@angular/platform-browser';


declare function getParamConfig(): any;

@Component({
  selector: 'app-dsp-ifram-form',
  templateUrl: './dsp-ifram-form.component.html',
  styleUrls: ['./dsp-ifram-form.component.css']
})
export class DspIframFormComponent implements OnInit {
  @Output() saveCompletedOutput: EventEmitter<any> = new EventEmitter();
  constructor(private starlib1: Starlib1, protected sanitizer: DomSanitizer, public starServices: starServices) {
    this.componentConfig = new componentConfigDef();
    this.paramConfig = getParamConfig();
  }

  ngOnInit(): void {
  }
  public componentConfig: componentConfigDef;
  public iframType = "";
  public iframValue = "";
  public enableHtmlIfram: boolean = false;
  public enableTextIfram: boolean = false;
  public paramConfig;

  public events: string[] = [];
  public NewValue;
  public value = `
        <p>
            The Kendo UI Angular Ifram allows your users to edit HTML in a familiar, user-friendly way.<br />
            In this version, the Ifram provides the core HTML editing engine which includes basic text formatting, hyperlinks, and lists.
            The widget <strong>outputs identical HTML</strong> across all major browsers, follows
            accessibility standards, and provides API for content manipulation.
        </p>
        <p>Features include:</p>
        <ul>
            <li>Text formatting</li>
            <li>Bulleted and numbered lists</li>
            <li>Hyperlinks</li>
            <li>Cross-browser support</li>
            <li>Identical HTML output across browsers</li>
        </ul>
    `;
  public title = "";
  public submit(): void {
    this.saveCompletedOutput.emit(this.NewValue);
  }
  public valueChange(value: any): void {
    this.NewValue = value;
    if (this.paramConfig.DEBUG_FLAG) console.log("this.NewValue:", this.NewValue)
  }

  private log(event: string, arg: any): void {
    this.events.push(`${event} ${arg || ''}`);
  }

  @Input() public set setComponentConfig_Input(ComponentConfig: componentConfigDef) {
    if (this.paramConfig.DEBUG_FLAG) console.log("DspIframFormComponent ComponentConfig:", ComponentConfig);
    if (typeof ComponentConfig !== "undefined") {

      this.componentConfig = this.starServices.setComponentConfig(ComponentConfig, this.componentConfig);

      if (ComponentConfig.masterSaved != null) {
        /*var jsonData =[];
        jsonData.push(this.form.value);
  
        var rec ={
          "pageNo" : this.pageNo,
          "areaNo" : this.areaNo,
          "data" : jsonData
        
        }*/

        this.saveCompletedOutput.emit(this.value);
      }

      if (ComponentConfig.title != null) {
        this.title = ComponentConfig.title;
      }

      if (ComponentConfig.masterParams != null) {
        if (this.paramConfig.DEBUG_FLAG) console.log("ComponentConfig.masterParams:", ComponentConfig.masterParams);

        if (typeof ComponentConfig.masterParams.showPDF !== "undefined"){
          let urlnavTo = ComponentConfig.masterParams.showPDF;
          this. showPDF(urlnavTo);
        }
        else{
          let dataItem = ComponentConfig.masterParams.dataItem;
          let compType = ComponentConfig.masterParams.COMP_TYPE;
          let genComp = ComponentConfig.masterParams.genComp;
          this.setiFrame(dataItem, compType, genComp);
        }

      }


    }
  }


  public testurl: SafeUrl = null;

  public navTo: SafeUrl;
  public formKey = "";

  public showFram(dataItem) {
    //let formKey = dataItem.APP_ID.toLowerCase() + "_" + dataItem.COMP_ID.toLowerCase();
    let formKey =  dataItem.COMP_ID.toLowerCase();
    if (this.paramConfig.DEBUG_FLAG) console.log("formKey:", formKey, " this.formKey:", this.formKey)
      
    if (formKey != this.formKey) {
      this.formKey = formKey;
      // let temp = "http://localhost:24320"
      // this.navTo = this.sanitizer.bypassSecurityTrustResourceUrl(temp + "?nav=" + formKey);
      console.log("location.origin:", location.origin)
        let locArr = location.origin.split(":");
        let userAppUrl = window.location.href  ;
        this.starServices.sessionParams['userAppUrl'] = userAppUrl;

      console.log("userAppUrl:", this.starServices.sessionParams['userAppUrl'])
      if (typeof this.starServices.sessionParams['userAppUrl'] != "undefined") {
        this.navTo = this.sanitizer.bypassSecurityTrustResourceUrl(this.starServices.sessionParams['userAppUrl'] + "?nav=" + formKey);
      }
    }
  }
  public showPDF(urlnavTo) {
          console.log("showPDF:", urlnavTo);
          //urlnavTo  = "https://localhost:24332/";
          //urlnavTo  = urlnavTo   + '#view=fitH'; 
          const googleViewerUrl = 'docs.google.com' + encodeURIComponent(urlnavTo);

        this.navTo = this.sanitizer.bypassSecurityTrustResourceUrl(googleViewerUrl);
  }
  public async setiFrame(dataItem, compType, genComp) {
    if (this.paramConfig.DEBUG_FLAG) console.log("setiFrame:dataItem:", dataItem,compType, genComp)
    if (genComp) {
      let data = {
        APP_ID: dataItem.APP_ID,
        TABLE_NAME: dataItem.TABLE_NAME,
        COMP_ID: dataItem.COMP_ID

      }
      if (this.paramConfig.DEBUG_FLAG) console.log("generateComp:data:", data)
      let informing = true;
      //await this.starlib1.generateComp(this, data, compType, informing);
      this.showFram(dataItem);
    }
    else
      this.showFram(dataItem);

  }
}


