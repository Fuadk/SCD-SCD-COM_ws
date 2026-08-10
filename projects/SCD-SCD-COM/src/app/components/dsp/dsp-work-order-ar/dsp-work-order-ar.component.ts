import { Component, Input, Output, OnInit, EventEmitter} from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { componentConfigDef } from '@modeldir/model';
import { starServices } from 'starlib';
import { Starlib1 } from '../../Starlib1';
import { StarNotifyService } from '../../../services/starnotification.service';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { FormControl, FormGroup, Validators } from '@angular/forms';
declare function getParamConfig(): any;


const createFormGroup = (dataItem:any) => new FormGroup({
  'WO_TYPE': new FormControl(dataItem.WO_TYPE),
  'WO_ORDER_NO': new FormControl(dataItem.WO_ORDER_NO, Validators.required),
  'SUBNO': new FormControl(dataItem.SUBNO),
  'WO_STATUS': new FormControl(dataItem.WO_STATUS),
  'TEMPLATE_NAME': new FormControl(dataItem.TEMPLATE_NAME),
  'TEMPLATE_ORDER': new FormControl(dataItem.TEMPLATE_ORDER),
  'DIV': new FormControl(dataItem.DIV),
  'DEPT': new FormControl(dataItem.DEPT),
  'ASSIGNEE_TYPE': new FormControl(dataItem.ASSIGNEE_TYPE),
  'ASSIGNEE': new FormControl(dataItem.ASSIGNEE),
  'PROMISED_DATE': new FormControl(dataItem.PROMISED_DATE),
  'COMPLETION_DATE': new FormControl(dataItem.COMPLETION_DATE),
  'NOTES': new FormControl(dataItem.NOTES),
  'PARENT_WO_ORDER_NO': new FormControl(dataItem.PARENT_WO_ORDER_NO),
  'ORDER_NO': new FormControl(dataItem.ORDER_NO, Validators.required),
  'ACTUAL_START_DATE': new FormControl(dataItem.ACTUAL_START_DATE),
  'ACTUAL_END_DATE': new FormControl(dataItem.ACTUAL_END_DATE),
  'ORDERED_DATE': new FormControl(dataItem.ORDERED_DATE),
  'ORDER_FIELDS': new FormControl(dataItem.ORDER_FIELDS),
  'EXTERNAL_INFO': new FormControl(dataItem.EXTERNAL_INFO),
  'LOGDATE': new FormControl(dataItem.LOGDATE),
  'LOGNAME': new FormControl(dataItem.LOGNAME),
  'ATTACHMENTS': new FormControl(dataItem.ATTACHMENTS),
  'SEQUENCE_NAME': new FormControl(dataItem.SEQUENCE_NAME),
  
});


@Component({
  selector: 'app-dsp-work-order-ar',
  templateUrl: './dsp-work-order-ar.component.html',
  styleUrls: ['./dsp-work-order-ar.component.css']
})
export class DspWorkOrderArComponent implements OnInit {
  public showDiagram = true;
  public showNotes = false;
  public title = "Request Acceptance"

  public DSP_MULTISTEPFormConfig: componentConfigDef;
  public DSP_ORDERSFormConfig: componentConfigDef;
  
  public app_dsp_diagram_wrapConfig:componentConfigDef;
  public compSelector = 'app-dsp-work-order-ar';
  public children = ["any"];
  public componentConfig: componentConfigDef;
  public showMultistep = false
  public showApproveReject:boolean = false;
  public submitted = false;
  public isPhonePortrait = false;
  Body = []
  gridData = []
  public paramConfig;
  showHistoryCheck = false
  showForm = false

  constructor(public router: Router,public responsive: BreakpointObserver ,public starServices: starServices, private starNotify: StarNotifyService, private starlib1: Starlib1,) {
    this.DSP_ORDERSFormConfig = new componentConfigDef();
    this.DSP_ORDERSFormConfig.isMaster = true;
    this.DSP_ORDERSFormConfig.masterParams = {
      hideOthers: true
    }

    this.DSP_MULTISTEPFormConfig = new componentConfigDef();
    this.DSP_MULTISTEPFormConfig.gridHeight = 400;
    this.DSP_MULTISTEPFormConfig.masterParams = {
      isReadOnly: true
    }

    this.paramConfig = getParamConfig();
  }
  public approvalFlag ;
  private componentConfigChangeEvent!: Subscription;
  ngOnInit(): void {
    this.approvalFlag = this.paramConfig.CREATED;
    this.getWorkOrdersApprove();
    this.starServices.fetchLookups(this, this.lookupArrDef);
    this.app_dsp_diagram_wrapConfig = new componentConfigDef();
    this.app_dsp_diagram_wrapConfig.masterParams = {
      action:"build",
      workOrders: [],
      useModeler: true,
      showDiagram: this.showDiagram,
      rulesDef:[]
    }
// Subscribing the event.
    this.componentConfigChangeEvent = this.starNotify.subscribeEvent<componentConfigDef>('componentConfigDef', componentConfig => {
      if (componentConfig.eventFrom != this.compSelector) {
        if (componentConfig.eventTo.includes(this.compSelector)|| componentConfig.eventTo.includes("any"))  {
            this.handleComponentConfig(componentConfig);
        }
      }
    });
  }
  public multSetpValid=false;

  public closeApproveReject() {
    this.showApproveReject = false;
  }
  public closeMultistep(){
    this.showMultistep = false;
    this.submitted = false;
    if (this.multSetpValid)
      this.submitted = this.multSetpValid;
    this.DSP_ORDERSFormConfig = new componentConfigDef();
    var masterParams = {
      submitted: this.submitted
    }
    this.DSP_ORDERSFormConfig.masterParams = masterParams;
  }
  public formValidationChanged(e){
    this.multSetpValid = e;
    console.log("submitted:6:e:", e,this.multSetpValid )
  }
  getWorkOrdersApprove() {
    this.gridData = []
    this.showHistoryCheck = false
    this.showForm = false
    this.showMultistep = false
    let minFlag = "";
    let query ="GET_DSP_WORK_ORDERS_TO_APPROVE"
    if (this.approvalFlag == "%")
      query ="GET_DSP_WORK_ORDERS_TO_APPROVE_HIST"
    this.Body = []
    this.Body.push({
      "_QUERY": query,
      "TEMPLATE_NAME": "%",
//      "APPROVAL_FLAG": "%",
      "USERNAME" : this.starServices.USER_INFO.USERNAME,
      "DEPT" : this.starServices.USER_INFO.DEPT,
      "TEAM" : this.starServices.USER_INFO.TEAM,
      "WO_STATUS": this.approvalFlag,
    })

    this.starServices.post(this, "&_trans=Y", this.Body).subscribe(res => {
      // let workOrders = (res.data[0].data as []).filter(wo =>
      //   wo["WO_STATUS"] == this.paramConfig.CREATED &&
      //   this.filterWorkOrder(wo))

      //let workOrdersAll = (res.data[0].data as []).filter(wo => this.filterWorkOrder(wo))
      let workOrdersAll = res.data[0].data;
      console.log("got:res.data[0].data:", res.data[0].data)
      console.log("got:workOrdersAll:", workOrdersAll)

      // this.gridData = workOrders
      // this.gridDataNew = workOrders
      this.gridData = workOrdersAll
    })
  }

  filterWorkOrder(wo) {
    if (wo["ASSIGNEE_TYPE"] == "MGR") {
      if (this.starServices.sessionParams.USER_INFO.MANAGER == 1 && this.starServices.sessionParams.USER_INFO.DEPT == wo["DEPT"]) {
        console.log("MANAGER MATCH 1", this.starServices.sessionParams.USER_INFO)
        return true
      }
    }

    if (wo["ASSIGNEE_TYPE"] == "TEAM") {
      if (this.starServices.sessionParams.USER_INFO.TEAM == wo["ASSIGNEE"]) {
        console.log("MANAGER MATCH 1: TEAM", wo, this.starServices.sessionParams.USER_INFO)
        return true;
      }
    }

    return false;
    // if(wo["ASSIGNEE_TYPE"] == "MGR" && this.starServices.sessionParams.USER_INFO.MANAGER == 1) {
    //   console.log("MANAGER MATCH 2", this.starServices.sessionParams.USER_INFO);
    //   return true;
    // }else 
    //   return false;
  }

  public readCompletedHandler(form) {
    console.log("readCompletedHandler:form:",form)
    if (form.type == "cancel") {
      this.showMultistep = false
      this.DSP_MULTISTEPFormConfig = new componentConfigDef();
      this.DSP_MULTISTEPFormConfig.gridHeight = 400;
      this.DSP_MULTISTEPFormConfig.masterParams = {
        isReadOnly: true
      }
    }
    else if (form["ORDER_NO"] != "") {
      this.showMultiStepForm(form)
    }
  }

  public showMultiStepForm(form) {
    this.Body = [];

    var Page = "&_trans=Y";

    var newVal:any = { "_QUERY": "GET_DSP_TEMPLATE", "TEMPLATE_NAME": form.TEMPLATE_NAME };
    this.Body.push(newVal);
    newVal = { "_QUERY": "GET_DSP_TEMPLATE_DETAIL", 
      "TEMPLATE_NAME": form.TEMPLATE_NAME,
     "SEQUENCE_NAME": this.selectedData.SEQUENCE_NAME};
    this.Body.push(newVal);
    newVal = { "_QUERY": "GET_DSP_TEMPLATE_DETAIL", 
      "TEMPLATE_NAME": form.TEMPLATE_NAME,
     "SEQUENCE_NAME": "%"};
    this.Body.push(newVal);
      console.log("showMultiStepForm:this.Body:", this.Body)
    this.starServices.post(this, Page, this.Body).subscribe(result => {
      this.Body = [];
      let templateInfo = result.data[0].data[0];
      let templateDetail = result.data[1].data[0];
      let templateDetailAll = result.data[2].data;
console.log("showMultiStepForm:result.data:", result.data)
      if ((form.ORDER_FIELDS == "") || (form.ORDER_FIELDS == null)) {
        form.ORDER_FIELDS = "{}";
      }

      var formPagesNo = "";
      let isReadOnly = true;
      let currentStep=1;
      if (templateDetail.FORM_PAGES_NO != "")
      {
        isReadOnly = false;
        let array= templateDetail.FORM_PAGES_NO.split(",");
        let formPagesNo = array[0];
        currentStep = formPagesNo -1 ;
        
      }
      formPagesNo = templateDetail.FORM_PAGES_NO;
      if (this.paramConfig.DEBUG_FLAG) console.log("formPagesNo:", formPagesNo)
      console.log("this.selectedData:", this.selectedData, templateDetailAll)
      let pageReadOnly = "";
      if (formPagesNo != ""){
        let i=0;
        while ( i < templateDetailAll.length){
          if (templateDetailAll[i].SEQUENCE_NAME == this.selectedData.SEQUENCE_NAME){
            break;
          }
          else{
            if (templateDetailAll[i].FORM_PAGES_NO != "")
              pageReadOnly = pageReadOnly + templateDetailAll[i].FORM_PAGES_NO + ",";
          }
          i++;
        }
        formPagesNo = pageReadOnly + formPagesNo;
      }
      


      var masterParams = {
        "formName": templateInfo.FORM_NAME,
        "formPagesNo": formPagesNo,
        "pageReadOnly": pageReadOnly,
        "orderFields": form.ORDER_FIELDS,
        "currentStep": currentStep,
        "isReadOnly": isReadOnly,
        "addForm": form,
        "callingForm": "PRVWORDERAR",
        "hidePrevSteps" : templateInfo.HIDE_PRV_STEPS ,
        "selectedData": this.selectedData
      };
  
      if (templateDetail.WO_TYPE == "API.TABS"){
        var WOStatus = 30;
        this.changeWOStatus(WOStatus);
      }
      else if (templateDetail.WO_TYPE == "AUTH.ID_MATCH"){
        this.processNAVIGATE_WO(this.workOrderRec);
      }
      else{
        if (templateInfo.FORM_TYPE == "FORM"){
        if (this.paramConfig.DEBUG_FLAG) console.log("test1: Sending masterParams:", masterParams)
        this.DSP_MULTISTEPFormConfig = new componentConfigDef();
        this.DSP_MULTISTEPFormConfig.masterParams = masterParams;

        this.showMultistep = true;
        }
        else  if (templateInfo.FORM_TYPE == "SCREEN"){
          this.callScreen(templateInfo, masterParams)
        }
      }

    });
  }

  public lkpArrAUTH_IDMATCH = [];
   public lkpArrGetAUTH_IDMATCH(CODE: any): any {
    // Change x.CODE below if not from SOM_TABS_CODE
    var rec = this.lkpArrAUTH_IDMATCH.find(x => x.CODE === CODE);
    return rec;
  }

    public processNAVIGATE_WO(workOrderRec) {
      console.log("processNAVIGATE_WO:workOrderRec:",workOrderRec)
      if (this.paramConfig.DEBUG_FLAG) console.log("workOrderRec:1:", workOrderRec)
      console.log("workOrderRec.WO_STATUS:", workOrderRec.WO_STATUS, workOrderRec.WO_ORDER_NO);
      var assignee = workOrderRec.WO_TYPE;
    
      var assigneeComprec = this.lkpArrGetAUTH_IDMATCH(assignee);
      if (this.paramConfig.DEBUG_FLAG) console.log("assigneeComprec:", assigneeComprec)
      var compName = assigneeComprec.PARTCODE;
      if (this.paramConfig.DEBUG_FLAG) console.log("assigneeComprec:", assigneeComprec)
      
      var rec={
        SUCCESS_MSG :""
      }
      // var rec = this.lkpArrGetHOST_DEF(hostDef);
      // if (this.paramConfig.DEBUG_FLAG) console.log("rec:", rec)
      console.log("workOrderRec.WO_STATUS:", workOrderRec.WO_STATUS);
      if (parseInt(workOrderRec.WO_STATUS) < 20) {
        var WOStatus = 20;
        //this.updateWOStatus(WOStatus, null);
        this.changeWOStatus(WOStatus);
        this.router.navigate(['/' +  compName ], { skipLocationChange: true });
      }
      else {
       
        //this.orderStatus = 20;
  
       
        let faceMatch = this.starServices.sessionParams["faceMatch"];
        console.log("faceMatch:sessionParams:", this.starServices.sessionParams["faceMatch"]);
        console.log("faceMatch:", faceMatch);
        if (faceMatch.result.is_similar  == true) {
          
          //this.orderStatus = 20;
          var WOStatus = 30;
          //this.updateWOPerformNext(this.dspOrder.ORDER_FIELDS, WOStatus);
          this.changeWOStatus(WOStatus);
  
        }
        else {
          //this.orderStatus = 20;
          var WOStatus = 11;
          //this.updateWOStatus(WOStatus, null);
          this.changeWOStatus(WOStatus);
  
        }
  
  
  
      }
  
  
  
  
  
    }

  async  callScreen(templateInfo, formMasterParams){
    
    let Body = [];
    var newVal:any = { "_QUERY": "GET_MENUS_QUERY", 
       "_WHERE": "CHOICE  = '" + templateInfo.FORM_NAME + "'" };
    Body.push(newVal);
    let data = await this.starServices.execSQLBody(this, Body, "");
    if (typeof data != "undefined" && data[0].data.length > 0) {
      var menu = data[0].data[0];
      let compSelector = menu.FLEX_FLD1;
      this.children = [];
      this.children.push(compSelector);
      this.commonCallStarNotify(formMasterParams);
      }
    this.router.navigate(['/' + templateInfo.FORM_NAME], 
      { skipLocationChange: true, replaceUrl: false, preserveFragment: true });
  }
  async  commonCallStarNotify(masterParams){
    await this.starServices.sleep(200);
    let componentConfig = new componentConfigDef();
      componentConfig.eventTo = this.children;
      componentConfig.masterParams = masterParams;
      this.callStarNotify(componentConfig);
   }
   callStarNotify(componentConfig:any) {
    componentConfig.eventFrom = this.compSelector;
    console.log("New:sending: ", componentConfig)
    this.starNotify.sendEvent<componentConfigDef>('componentConfigDef', componentConfig);
  }


  saveCompletedOutputHandler(fieldsData) { 
    if (this.paramConfig.DEBUG_FLAG) console.log("test1: fieldsData:", fieldsData);
    var orderField = JSON.stringify(fieldsData);
    
    this.DSP_ORDERSFormConfig = new componentConfigDef();
    this.DSP_ORDERSFormConfig.masterParams = {
      orderField: orderField
    }
    this.submitted = true;
    this.showMultistep=false;
    this.NoteValue = "";
    if (this.workOrderRec.TEMPLATE_ORDER == "1"){
      this.changeWOStatus(this.paramConfig.APPROVED)
    }
    else
      this.showApproveReject = true;
    
  }
  public NoteValue = "";
 public ApprovalType = "NEXT"; 
 async ON_CLICK_APPROVAL_TYPE(event){
  console.log("Tracing:ON_CLICK_APPROVAL_TYPE:event:", event, this.ApprovalType)
}
async onChange_APPROVAL_TYPE(event:any) { 
 var value = event.target.value; 
 console.log("Tracing:onChange_APPROVAL_TYPE:value:", value , this.ApprovalType)
}
  changeWOStatus(status) {
    console.log("Tracing:changeWOStatus:status:", status, this.NoteValue)
    this.DSP_ORDERSFormConfig = new componentConfigDef();
    this.DSP_ORDERSFormConfig.masterParams = {
      WOStatus: status,
      NoteValue: this.NoteValue,
      ApprovalType: this.ApprovalType
    }
    this.showApproveReject = false;
  }
  public selectedData;
  
  gridUserSelectionChange(selection) {
    this.showMultistep = false;
    this.selectedData = selection.selectedRows[0].dataItem;
    console.log("this.selectedData:",this.selectedData)

    //this.showForm = true
    this.DSP_ORDERSFormConfig = new componentConfigDef();
    if (this.approvalFlag == "%")
      this.DSP_ORDERSFormConfig.enabled = false;

    this.DSP_ORDERSFormConfig.isMaster = true;
    this.DSP_ORDERSFormConfig.masterParams = {
      hideOthers: true,
      order: this.selectedData
    }
  }

  orderStatusHandler(data) {
    this.gridData[this.gridData.findIndex(d => d["WO_ORDER_NO"] == data.WO_ORDER_NO)].WO_STATUS = data.status;
    this.getsendWOs(data);
  }

  parseApprvalFlag(status) {
    if (status == "") return "Created.";

    if (status == this.paramConfig.CREATED)
      return "Created.";

    else if (status == this.paramConfig.APPROVED)
      return "Approved.";

    else if (status == this.paramConfig.REJECTED)
      return "Rejected.";

    else if (status == this.paramConfig.MODIFIED)
      return "Modified.";

    else return "On Hand.";
  }

  showHistory() {
    this.approvalFlag = this.showHistoryCheck ? '%' : this.paramConfig.CREATED
    this.getWorkOrdersApprove();
  }

  public printScreen() {
    window.print();
  }
  public view: any[] = [{}];
  public items =[];
  public workOrderRec;
  public async getsendWOs(dataItem){
    this.workOrderRec = dataItem;
    console.log("this.workOrderRec:",this.workOrderRec)
    let whereClause = " ORDER_NO = '" + dataItem.ORDER_NO + "'";
    let whereClauseRules = " TEMPLATE_NAME = '" + dataItem.TEMPLATE_NAME + "'";
    let body = [
      {
        "_QUERY": "GET_DSP_WORK_ORDERS_QUERY",
        "_WHERE": whereClause
      },
      {
        "_QUERY": "GET_ADM_RULE_DEF_QUERY",
        "_WHERE": whereClauseRules
      }
    ]
  
    let workOrders;
    let data = await this.starServices.execSQLBody(this, body, "");
    workOrders = data[0].data;
    let rulesDef = data[1].data;
    console.log("testx post execSQLBody:", data);
    if (workOrders.length != 0) {
      let j =0;
      this.showNotes = false;
      for (let i=0; i< workOrders.length;i++){
        if (workOrders[i].NOTES != ""){
          this.items[j] = workOrders[i];
          this.showNotes = true;
          j++;
        }
      }
      this.app_dsp_diagram_wrapConfig = new componentConfigDef();
      this.app_dsp_diagram_wrapConfig.masterParams = {
        action:"build",
        flowName : dataItem.TEMPLATE_NAME,
        workOrders: workOrders,
        useModeler: true,
        showDiagram: this.showDiagram,
        rulesDef:rulesDef
      }
  
      
      
    }
    
  
  }
  public cellClickHandler({ isEdited, dataItem, rowIndex }): void {
    this.getsendWOs(dataItem);
    console.log("inside cellClickHandler:dataItem", dataItem);
  }
  public lkpArrWO_STATUS = [];
  public userLang = "EN" ; 
  public lookupArrDef:any =[	
{"statment":"SELECT CODE, CODETEXT_LANG , PARTCODE FROM SOM_TABS_CODES WHERE CODENAME ='WO_STATUS' and LANGUAGE_NAME = '" + this.userLang + "' order by CODETEXT_LANG",
    "lkpArrName":"lkpArrWO_STATUS"},
  {
    "statment": "SELECT  CODENAME CODE, PARTCODE, CODEVALUE_LANG, CODETEXT_LANG FROM SOM_TABS_CODES WHERE CODENAME = 'AUTH.ID_MATCH' and LANGUAGE_NAME = '" + this.userLang + "' order by CODETEXT_LANG",
    "lkpArrName": "lkpArrAUTH_IDMATCH"
  },
  {"statment":"SELECT CODE, CODETEXT_LANG, CODEVALUE_LANG FROM SOM_TABS_CODES WHERE CODENAME ='APPROVAL_TYPE' and LANGUAGE_NAME = '" + this.userLang + "' order by CODETEXT_LANG",
			"lkpArrName":"lkpArrAPPROVAL_TYPE"}
];



public lkpArrAPPROVAL_TYPE = [];

public lkpArrGetAPPROVAL_TYPE(CODE: any): any {
var rec = this.lkpArrAPPROVAL_TYPE.find((x:any) => x.CODE === CODE);
return rec;
}

  public lkpArrGetWO_STATUS(CODE: any): any {
    // Change x.CODE below if not from SOM_TABS_CODE
    var rec = this.lkpArrWO_STATUS.find((x:any) => x.CODE === CODE);
    //console.log("STATUS HF = ",rec);
    return rec;
    }
    public colorCode(code: string) {
      let result='transparent';
      let rec =  this.lkpArrGetWO_STATUS(code)
      if (typeof rec !== "undefined") 
        result = rec.PARTCODE;
  
      return (result);
    }

    public handleComponentConfig(ComponentConfig:any) {
      if (typeof ComponentConfig !== "undefined") {
        if (this.paramConfig.DEBUG_FLAG) console.log("AppDspOrdersAddComponent ComponentConfig:", ComponentConfig);
        this.componentConfig = this.starServices.setComponentConfig(ComponentConfig, this.componentConfig);
        if (ComponentConfig.languageChanged != null) {
          this.userLang =  ComponentConfig.languageChanged;
         // this.setlookupArrDef();
        }
      }
    }
    @Input() public set setComponentConfig_Input(ComponentConfig: componentConfigDef) {
      this.handleComponentConfig(ComponentConfig);
    }
}
