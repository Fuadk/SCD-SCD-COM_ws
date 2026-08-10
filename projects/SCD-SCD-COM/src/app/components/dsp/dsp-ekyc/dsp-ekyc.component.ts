import { Component, OnInit, Output, EventEmitter, HostListener, AfterViewInit, ViewChild} from '@angular/core';
import { DialogService, DialogRef, DialogCloseResult } from '@progress/kendo-angular-dialog';
import { dynamic, componentConfigDef } from '@modeldir/model';
import { starServices } from 'starlib';
import { StarNotifyService } from '../../../services/starnotification.service';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { MyMessageService } from '../../../services/my-message.service';
import { PDFExportComponent } from '@progress/kendo-angular-pdf-export';
import { Router } from '@angular/router';
declare function getParamConfig(): any;


@Component({

  selector: 'app-dsp-ekyc',
  templateUrl: './dsp-ekyc.component.html',
  styleUrls: ['./dsp-ekyc.component.css']
})
export class DspEkycComponent implements OnInit, AfterViewInit {
  @ViewChild("ekycPdf") ekycPdf: PDFExportComponent

  @Output() saveTriggerOutput: EventEmitter<any> = new EventEmitter();
  constructor(public router: Router,public responsive: BreakpointObserver ,public starServices: starServices 
    , private starNotify: StarNotifyService,private msgService: MyMessageService) {
    this.router = router;
    this.paramConfig = getParamConfig();
    this.componentConfig = new componentConfigDef();
    // var w = window.innerWidth;
    // if (this.paramConfig.DEBUG_FLAG) console.log("window.innerWidth:",window.innerWidth)
    // w = w - 40;
    // this.screenStyle = "width: " + w  + "px;";
  }
  // public screenStyle;
  public showToolBar = false;
  public paramConfig;
  public title = "";
  public routineAuth = null;
  public notAllowedMsg = "You are not allowed to complete the transaction. Please contact 107.";

  public componentConfig: componentConfigDef;

  public compSelector = 'app-dsp-ekyc';
  public children = ["any"];

  public form_DSP_DYNAMIC_RW: dynamic;
  public grid_DSP_DYNAMIC_RW: dynamic;
  public DSP_MULTISTEPFormConfig: componentConfigDef;
  public isPhonePortrait = false;
private Body = [];
  public workOrders;
  public templateFields;
  public templateInfo;
  public templateDetailAll;
  public multiStepFormOpened: boolean = false;
  public fieldsData = [];
  public fieldsSave: boolean = false;
  public fieldsFormSave: boolean = false;
  public showURLMsg: boolean = false;

  public ordernNO;
  public external_id;
  public step = null;
  public language_name;
  public woorderno;
  public orderStatus;
  public processingCount =0;
  public dspOrder;
  public workOrderRec;
  public workOrderPtr;
  public URL_msg = "";
  public status = "";
  public href = "";
  public tabsAPIResponse = {
    USER_STATUS: "",
    URL: ""
  }
  public formPagesNo = "";

  public signature
  public languageChanged
  public printTitle = ""

  public ngAfterViewInit() {
    this.starServices.setRTL();
  }
  ngOnInit(): void {
    this.starServices.actOnParamConfig(this, 'DSPEKYC');
if (this.paramConfig.DEBUG_FLAG) console.log("test:ngOnInit:this.starServices.sessionParams:", this.starServices.sessionParams)
    console.log("IDMatch:", this.starServices.sessionParams["IDMatch"]);

    console.log("faceMatch:", this.starServices.sessionParams["faceMatch"]);

    

    this.ordernNO = this.starServices.sessionParams["orderno"];
    this.external_id = this.starServices.sessionParams["external_id"];
    if (this.paramConfig.DEBUG_FLAG) console.log("this.external_id:", this.external_id)
    this.language_name = this.starServices.sessionParams["language_name"];
    this.step = this.starServices.sessionParams["step"];
    this.woorderno = this.starServices.sessionParams["woorderno"];
    this.status = this.starServices.sessionParams["status"];
    this.href = this.starServices.sessionParams["href"];

 
    

    


//http://localhost:2405/ekyc?link=DSPEKYC&orderno=551&status=0&step=1&lang=en
    //http://localhost:4200?link=DSPEKYC&orderno=336&status=0

    /*
    this.ordernNO  = '401'
    this.external_id  = '401'
    this.step = "6";
    this.woorderno = "401-6";
    this.status = "0";
    */


//    this.router.navigate(['/' + 'tst_tickeit_form'], { skipLocationChange: true });
    
    
    this.starServices.fetchLookups(this, this.lookupArrDef);
    // check  fetchLookupsCallBack()  it calls     this.fetchCurrenWO(this.ordernNO)

    //  var ordernNO = 141;
    // this.ordernNO = ordernNO;
    this.language_name = this.paramConfig.userLang

    this.msgService.languageChanged.subscribe(lang => {
      this.languageChanged = lang
    })
    window.addEventListener('resize', this.resizeSignaturePad)
  }

  resizeSignaturePad() {
    let sig = document.querySelector('signature-pad canvas')
    if (sig)
      sig.setAttribute('width', `${sig.parentElement.parentElement.clientWidth - 15}px`)
  }

  public fetchLookupsCallBack() {
    this.fetchCurrenWO(this.ordernNO)
  }
  private addToBody(NewVal) {
    this.Body.push(NewVal);
  }
  public getWOToProcess() {
    function getParentRec(workOrders, parentWONo) {
      var i = 0;
      var parentWorkOrderRec = null;
      while (i < workOrders.length) {
        if (workOrders[i].WO_ORDER_NO == parentWONo) {
          parentWorkOrderRec = workOrders[i];
        }
        console.log("parentWorkOrderRec:", parentWorkOrderRec)
        return parentWorkOrderRec;
      }
    }

    var i = 0;

    var workOrderPtr = -1;
    if (this.paramConfig.DEBUG_FLAG) console.log("this.workOrders:", this.workOrders)
    while (i < this.workOrders.length) {
      if (this.paramConfig.DEBUG_FLAG) console.log(" check : i:WO_STATUS:this.workOrders[i]:", i,this.workOrders[i].WO_STATUS, this.workOrders[i])
      if (parseInt(this.workOrders[i].WO_STATUS) <= 20) {
        var parentWONo = this.workOrders[i].PARENT_WO_ORDER_NO;
        if (this.paramConfig.DEBUG_FLAG) console.log("this.workOrders[i]:", this.workOrders[i], "this.step:", 
              this.step, "this.workOrders[i].TEMPLATE_ORDER):", this.workOrders[i].TEMPLATE_ORDER);
        if (this.step != null) {
          if (this.step < this.workOrders[i].TEMPLATE_ORDER) {
            this.workOrders[i].WO_STATUS = 10;
            workOrderPtr = i;
            this.step = null;
            if (this.paramConfig.DEBUG_FLAG) console.log(" -----------got this.workOrders[i]:1:", this.workOrders[i])
            break;
          }
        }
        var parentWorkOrderRec = null;
        if (parentWONo != null) {
          parentWorkOrderRec = getParentRec(this.workOrders, parentWONo);
        }
        if ((parentWorkOrderRec == null) || (parentWorkOrderRec.WO_STATUS == 30)) {
          workOrderPtr = i;

          if (this.paramConfig.DEBUG_FLAG) console.log(" -----------got this.workOrders[i]:2:", this.workOrders[i])
          break;
        }
      }
      i++;
    }
    return workOrderPtr;
  }


  async showMultiStepFormScreen(formVal, ORDER_FIELDS) {
    if (this.paramConfig.DEBUG_FLAG) console.log("test:ORDER_FIELDS:", ORDER_FIELDS);
    if (this.paramConfig.DEBUG_FLAG) console.log("test:parseInt(this.formPagesNo):", parseInt(this.formPagesNo));
    if (parseInt(this.formPagesNo) < 1) {
      this.starServices.showOkMsg(this, "No Pages defined for this work order.", "Warning");
      if (this.paramConfig.DEBUG_FLAG) console.log("test:here");
      return;
    }
    if (this.paramConfig.DEBUG_FLAG) console.log("test:this.templateInfo:", this.templateInfo);
    if (this.templateInfo.FORM_TYPE == "FORM"){
        let masterParams = {
      "formName": this.templateInfo.FORM_NAME,
      "formPagesNo": this.formPagesNo,
      "orderFields": ORDER_FIELDS

    };

    this.DSP_MULTISTEPFormConfig = new componentConfigDef();
    this.DSP_MULTISTEPFormConfig.masterParams = masterParams;
    this.multiStepFormOpened = true;
    //if (formVal.ORDER_FIELDS == "")
    //  formVal.ORDER_FIELDS = null;
    if (this.paramConfig.DEBUG_FLAG) console.log("test:masterParams:", masterParams);

    this.fieldsData = JSON.parse(ORDER_FIELDS);
    if (this.paramConfig.DEBUG_FLAG) console.log("test:this.fieldsData:", this.fieldsData);
    this.fieldsSave = false;
    //wait sleep
    setTimeout(() => {
      this.resizeSignaturePad()
    }, 300)
  }
      else if (this.templateInfo.FORM_TYPE == "SCREEN")
      {
        this.workOrderRec = this.workOrders[this.workOrderPtr];

        let Body =[];
        var newVal = { "_QUERY": "GET_DSP_TEMPLATE_DETAIL", 
          "TEMPLATE_NAME": this.templateInfo.TEMPLATE_NAME,
        "SEQUENCE_NAME": this.workOrderRec.SEQUENCE_NAME};
        Body.push(newVal);

        let data = await this.starServices.execSQLBody(this, Body, "");
        if (this.paramConfig.DEBUG_FLAG) console.log("data:", data,"Body:",Body )
      if (typeof data != "undefined" && data[0].data.length > 0) {
          var templateDetail = data[0].data[0];
          if (this.paramConfig.DEBUG_FLAG) console.log("templateDetail:", templateDetail, templateDetail.FORM_PAGES_NO)
          var formPagesNo = "";
          let isReadOnly = true;
          let currentStep=1;
          if (templateDetail.FORM_PAGES_NO != "")
          {
            isReadOnly = false;
            let array= templateDetail.FORM_PAGES_NO.split(",");
            let formPagesNo = array[0];
            currentStep = formPagesNo -1 ;
            
            if (this.paramConfig.DEBUG_FLAG) console.log("formPagesNo:", formPagesNo)
          }
            formPagesNo = templateDetail.FORM_PAGES_NO;
          //console.log("this.selectedData:", this.selectedData, templateDetailAll)
          if (this.paramConfig.DEBUG_FLAG) console.log("formPagesNo:", formPagesNo)
          let pageReadOnly = "";
          if (formPagesNo != ""){
            let i=0;
            while ( i < this.templateDetailAll.length){
              if (this.templateDetailAll[i].SEQUENCE_NAME == this.workOrderRec.SEQUENCE_NAME){
                break;
              }
              else{
                if (this.templateDetailAll[i].FORM_PAGES_NO != "")
                  pageReadOnly = pageReadOnly + this.templateDetailAll[i].FORM_PAGES_NO + ",";
              }
              i++;
            }
            formPagesNo = pageReadOnly + formPagesNo;
            if (this.paramConfig.DEBUG_FLAG) console.log("formPagesNo:", formPagesNo)
          }

          let masterParams = {
            "addForm": this.dspOrder,
            "callingForm": "",
            "formName": this.templateInfo.FORM_NAME,
            "formPagesNo": formPagesNo,
           //"formPagesNo": "1",
             "orderFields": this.dspOrder.ORDER_FIELDS,

            "pageReadOnly": pageReadOnly,
            "currentStep": currentStep,
            "isReadOnly": isReadOnly,
            "selectedData": this.workOrderRec
          };
          this.callScreen(this.templateInfo, masterParams)
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


  public multiStepFormClose() {
    this.multiStepFormOpened = false;
  }
  public savemultiStepFormCompletedHandler(DSP_MULTISTEP) {
    if (this.paramConfig.DEBUG_FLAG) console.log("TABS:this.tabsAPIResponse:2:", this.tabsAPIResponse, " DSP_MULTISTEP:", DSP_MULTISTEP)
    if ((this.workOrderPtr == 10) && (this.tabsAPIResponse.USER_STATUS != "30")) {
      var dialogStruc = {
        msg: this.notAllowedMsg,
        title: "Error",
        info: null,
        object: this,
        action: this.starServices.OkActions,
        callback: null
      };
      this.starServices.showConfirmation(dialogStruc);
      return;
    }

    this.fieldsFormSave = true;
    if (this.paramConfig.DEBUG_FLAG) console.log("test1:this.fieldsFormSave :", this.fieldsFormSave, " DSP_MULTISTEP:", DSP_MULTISTEP);

    this.fieldsData = DSP_MULTISTEP;
    // var fieldsData =[];
    //fieldsData.push(this.fieldsData);

    if (this.paramConfig.DEBUG_FLAG) console.log("TABS:this.tabsAPIResponse:1:", this.tabsAPIResponse,"this.fieldsData:",this.fieldsData)

    var orderField = JSON.stringify(this.fieldsData);
    if (this.paramConfig.DEBUG_FLAG) console.log("test:savemultiStepFormCompletedHandler:orderField,", orderField,"this.fieldsData:", this.fieldsData)
    if (this.paramConfig.DEBUG_FLAG) console.log("test:this.fieldsFormSave:", this.fieldsFormSave)
    if (this.paramConfig.DEBUG_FLAG) console.log("test:savemultiStepFormCompletedHandler:orderField,", orderField)
    var WOStatus = 30;
    this.updateWOPerformNext(orderField, WOStatus);

  }

  public processMultiStepFormWO(workOrderRec) {
    this.Body = [];
    var Page = "&_trans=Y";


    var OrderNo = workOrderRec.ORDER_NO;

    this.Body = [];

    var Page = "&_trans=Y";
    var newVal = { "_QUERY": "GET_DSP_TEMPLATE_BY_ORDER_NO", "ORDER_NO": OrderNo };
    this.addToBody(newVal);

    var newVal1 = { "_QUERY": "GET_DSP_ORDERS", "ORDER_NO": OrderNo, "ORDER_TYPE": "%" };
    this.addToBody(newVal1);

    var newVal2 = { "_QUERY": "GET_DSP_TEMPLATE_DETAIL_BY_ORDER_NO", "ORDER_NO": OrderNo };
    this.addToBody(newVal2);



   

    //  var newVal = { "_QUERY": "GET_DSP_TEMPLATE" , "TEMPLATE_NAME": formVal.TEMPLATE_NAME};
    //  this.addToBody(newVal);


    this.starServices.post(this, Page, this.Body).subscribe(result => {
      this.Body = [];
      if (this.paramConfig.DEBUG_FLAG) console.log("result.data[0].data:", result.data[0].data)
      this.templateInfo = result.data[0].data[0];
      this.templateDetailAll = result.data[2].data;
      if (this.paramConfig.DEBUG_FLAG) console.log("test2:this.templateInfo:", "this.templateInfo:", this.templateInfo);

      var dspOrder = result.data[1].data[0];
      if (this.paramConfig.DEBUG_FLAG) console.log("test2:dspOrder:", dspOrder);
      var ORDER_FIELDS = dspOrder.ORDER_FIELDS;
      if (ORDER_FIELDS == "") {
        ORDER_FIELDS = "{}";
      }

      this.formPagesNo = "";
      //if (this.templateInfo.FORM_USAGE  == "PAGE_PER_WO"){
      var WO_ORDER_NO = workOrderRec.WO_ORDER_NO;
      var array = WO_ORDER_NO.split("-");
      var order = array[1];
      var rec = result.data[2].data[order - 1];
     
      if (this.paramConfig.DEBUG_FLAG) console.log("test2:rec:", rec);
      this.formPagesNo = "";
      if (rec.TEMPLATE_ORDER == order) {
        this.formPagesNo = rec.FORM_PAGES_NO;
      }
      //}
      if (this.paramConfig.DEBUG_FLAG) console.log("test2:this.formPagesNo:", this.formPagesNo);

      if (this.paramConfig.DEBUG_FLAG) console.log("test2:result.data[2].data:", result.data[2].data)
      if (this.paramConfig.DEBUG_FLAG) console.log("test2:workOrderRec:", workOrderRec)

      this.showMultiStepFormScreen(workOrderRec, ORDER_FIELDS);


    },
      err => {
        alert('error:' + err.message);
      });


  }
  public processNAVIGATE_WO(workOrderRec) {
    console.log("processNAVIGATE_WO:workOrderRec:",workOrderRec)
    this.showURLMsg = true;
    this.URL_msg = "Processing URL";
    if (this.paramConfig.DEBUG_FLAG) console.log("TABS:status:", this.status)
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
      this.updateWOStatus(WOStatus, null);
      this.router.navigate(['/' +  compName ], { skipLocationChange: true });
    }
    else {
      //var href =  window.location.href;
      //if (this.paramConfig.DEBUG_FLAG) console.log ("test:href:", href);
      this.orderStatus = 20;

      // var urlObj = new URL(this.href);
      // var successMsg = rec.SUCCESS_MSG;
      // if (this.paramConfig.DEBUG_FLAG) console.log("-------urlObj:", urlObj, successMsg);
      // var array = successMsg.split(":");
      // var field = array[0];
      // var value = array[1];
      // var fieldVal = urlObj.searchParams.get(field);
      // if (this.paramConfig.DEBUG_FLAG) console.log("value:", value, " fieldVal:", fieldVal);
      let faceMatch = this.starServices.sessionParams["faceMatch"];
      console.log("faceMatch:sessionParams:", this.starServices.sessionParams["faceMatch"]);
      console.log("faceMatch:", faceMatch);
      if (faceMatch.result.is_similar  == true) {
        this.URL_msg = "Success";
        this.orderStatus = 20;
        var WOStatus = 30;
        this.updateWOPerformNext(this.dspOrder.ORDER_FIELDS, WOStatus);

      }
      else {
        this.URL_msg = "Failed";
        this.orderStatus = 20;
        var WOStatus = 11;
        this.updateWOStatus(WOStatus, null);

      }



    }





  }
  public processURLWO(workOrderRec) {
    this.showURLMsg = true;
    this.URL_msg = "Processing URL";
    if (this.paramConfig.DEBUG_FLAG) console.log("TABS:status:", this.status)
    if (this.paramConfig.DEBUG_FLAG) console.log("workOrderRec:", workOrderRec)
    var assignee = workOrderRec.ASSIGNEE;
    var assigneeURLrec = this.lkpArrGetASSIGNEE_URL(assignee);
    if (this.paramConfig.DEBUG_FLAG) console.log("assigneeURLrec:", assigneeURLrec)
    var hostDef = assigneeURLrec.PARTCODE;
    var rec = this.lkpArrGetHOST_DEF(hostDef);
    if (this.paramConfig.DEBUG_FLAG) console.log("rec:", rec)

    if (parseInt(workOrderRec.WO_STATUS) < 20) {
      var href = this.starServices.sessionParams["href"];

      var hrefArray = href.split("?");
      var returl = hrefArray[0];

      returl = returl + "?link=" + this.starServices.eKycScr;
      returl = encodeURIComponent(returl);

      var var1 = "language_name";
      var var2 = this[var1];
      //alert("var2:" + var2);

      var n = rec.URL.indexOf("?");
      if (n == -1) {
        var ordernnoParam = "?external_id=";
      }
      else {
        var ordernnoParam = "&external_id=";
      }

      var language_name = this.paramConfig.userLang.toLowerCase();
      var recURL = rec.URL
      if (this.paramConfig.DEBUG_FLAG) console.log("TABS:this.tabsAPIResponse:", this.tabsAPIResponse)
      if ((assigneeURLrec.CODEVALUE_LANG == 1) && (this.tabsAPIResponse.URL != "")) {
        recURL = recURL + this.tabsAPIResponse.URL;
        this.tabsAPIResponse.URL = "";
      }
      var url = recURL + ordernnoParam + this.ordernNO + "&lang=" + language_name
        + "&mobno=" + this.dspOrder.SUBNO + "&returl=" + returl;
      //alert("url:"+ url)
      if (this.paramConfig.DEBUG_FLAG) console.log("url:", url)
      var WOStatus = 20;
      this.updateWOStatus(WOStatus, url);
    }
    else {
      //var href =  window.location.href;
      //if (this.paramConfig.DEBUG_FLAG) console.log ("test:href:", href);
      this.orderStatus = 20;
      var urlObj = new URL(this.href);


      var successMsg = rec.SUCCESS_MSG;
      if (this.paramConfig.DEBUG_FLAG) console.log("-------urlObj:", urlObj, successMsg);
      var array = successMsg.split(":");
      var field = array[0];
      var value = array[1];
      var fieldVal = urlObj.searchParams.get(field);
      if (this.paramConfig.DEBUG_FLAG) console.log("value:", value, " fieldVal:", fieldVal);
      if (value == fieldVal) {
        this.URL_msg = "Success";
        this.orderStatus = 20;
        var WOStatus = 30;
        this.updateWOPerformNext(this.dspOrder.ORDER_FIELDS, WOStatus);

      }
      else {
        this.URL_msg = "Failed";
        this.orderStatus = 20;
        var WOStatus = 11;
        this.updateWOStatus(WOStatus, null);

      }



    }





  }
  public processCurrentWO(workOrderRec) {
    if (this.starServices.syncFlag != 0) {
      setTimeout(() => {
        if (this.starServices.syncFlag == 0)
          this.processCurrentWO_ACT(workOrderRec)
        else {
          this.starServices.syncFlag++;
          if (this.starServices.syncFlag >= 20)
            alert("timeout :" + + this.starServices.syncFlag)
          else {
            //alert ("done :" + + this.starServices.syncFlag)
            this.processCurrentWO(workOrderRec);
          }
        }
      },
        300);
    }
    else
      this.processCurrentWO_ACT(workOrderRec)

  }
  public processCurrentWO_ACT(workOrderRec) {

    if (this.paramConfig.DEBUG_FLAG) console.log("PAY:workOrderRec:", workOrderRec, " this.fieldsData:", this.fieldsData)
    var fieldsData = this.fieldsData["data"];

    if ((typeof fieldsData != "undefined") && (workOrderRec.TEMPLATE_ORDER == 4) && (fieldsData.PAY_ONLINE != 0)) {
      var WOStatus = 40;
      var orderField = JSON.stringify(this.fieldsData);
      this.updateWOPerformNext(orderField, WOStatus);
      this.processingCount++;
    }
    else {
      if (workOrderRec.ASSIGNEE_TYPE == "FORM") {
        this.orderStatus = 20;
        var WOStatus = 20;
        this.updateWOStatus(WOStatus, null);
        this.processMultiStepFormWO(workOrderRec);
        this.processingCount++;


      }
      else if (workOrderRec.ASSIGNEE_TYPE == "URL") {
        this.processURLWO(workOrderRec);
        this.processingCount++;
      }
      else if (workOrderRec.WO_TYPE == "AUTH.ID_MATCH") {
        this.processNAVIGATE_WO(workOrderRec);
        this.processingCount++;
      }
      else if (workOrderRec.ASSIGNEE_TYPE == "API") {
        this.orderStatus = 20;
        var WOStatus = 20;
        this.updateWOStatus(WOStatus, null);
        this.processingCount++;
      }
      else
      {
        let  msg= "Nothing to propcess";
        if (this.processingCount > 0)
          msg= "Form Submitted";
        this.printTitle="";
        var dialogStruc = {
          msg: msg,
          title: "Completed",
          info: null,
          object: this,
          action: this.starServices.OkActions,
          callback: null
        };
        this.starServices.showConfirmation(dialogStruc);
      }
    }

  }


  public fetchCurrenWO(ordernNO) {

    this.Body = [];
    var Page = "&_trans=Y";


    var OrderNo = ordernNO;

    var newVal = { "_QUERY": "GET_DSP_WORK_ORDERS_BY_ORDER_NO", "ORDER_NO": OrderNo };
    this.addToBody(newVal);

    var newVal1 = { "_QUERY": "GET_DSP_ORDERS", "ORDER_NO": OrderNo, "ORDER_TYPE": "%" };
    this.addToBody(newVal1);
    if (this.paramConfig.DEBUG_FLAG) console.log("TABS:this.Body:", this.Body)
    if (this.paramConfig.DEBUG_FLAG) console.log("checkRules:this.Body1:", this.Body)
    this.workOrderRec = null;
    this.starServices.post(this, Page, this.Body).subscribe(result => {
      this.Body = [];
      if (this.paramConfig.DEBUG_FLAG) console.log("TABS:test:result:", result.data)
      this.workOrders = result.data[0].data;
      if (this.paramConfig.DEBUG_FLAG) console.log("this.workOrders", this.workOrders)
      this.dspOrder = result.data[1].data[0];

      this.orderStatus = 20;
      this.workOrderPtr = this.getWOToProcess();
      if (this.paramConfig.DEBUG_FLAG) console.log("---- now processing : this.workOrderPtr:", this.workOrderPtr)
      if (this.workOrderPtr != -1) {
        this.workOrderRec = this.workOrders[this.workOrderPtr];
        if (this.paramConfig.DEBUG_FLAG) console.log("---- now processing : this.workOrderRec:", this.workOrderRec)
        this.processCurrentWO(this.workOrderRec);
      }
      //this.showFieldsScreen(formVal, ORDER_FIELDS);
    },
      err => {
        //this.starServices.showNotification ("error","error:" + err.message );
        console.log("checkRules:this.Body2:", this.Body)
        console.log("checkRules:1------------error::", err.message)
        //alert('1------------error:' + err.message);
      });



  }

  /////////////

  updateWOPerformNext(orderFields, WOStatus) {
    if (this.paramConfig.DEBUG_FLAG) console.log(" updateWOPerformNext updating this.workOrderPtr:", this.workOrderPtr)
    this.Body = [];
    var Page = "&_trans=Y";


    var OrderNo = this.ordernNO;
    var actualStartDate: Date = new Date();

    var NewVal = this.dspOrder;
    NewVal["_QUERY"] = "UPDATE_DSP_ORDERS";
    NewVal["ORDER_STATUS"] = this.orderStatus;
    NewVal["ORDER_FIELDS"] = orderFields;
    NewVal["ACTUAL_START_DATE"] = actualStartDate;

    if (this.paramConfig.DEBUG_FLAG) console.log("NewVal:", NewVal);
    this.addToBody(NewVal);



    this.workOrders[this.workOrderPtr].WO_STATUS = WOStatus;
    this.workOrders[this.workOrderPtr].ACTUAL_START_DATE = actualStartDate;
    if (WOStatus == 30) {
      var completedDate: Date = new Date();
      this.workOrders[this.workOrderPtr].COMPLETION_DATE = completedDate;
    }

    var NewVal = this.workOrders[this.workOrderPtr];
    NewVal["ORDER_FIELDS"] = this.dspOrder.ORDER_FIELDS;

    NewVal["_QUERY"] = "UPDATE_DSP_WORK_ORDERS";

    if (this.paramConfig.DEBUG_FLAG) console.log("NewVal:", NewVal);
    this.addToBody(NewVal);

    if (this.paramConfig.DEBUG_FLAG) console.log("this.workOrders:", this.workOrders, " this.Body:", this.Body)
    this.starServices.post(this, Page, this.Body).subscribe(result => {
      this.Body = [];
      if (this.paramConfig.DEBUG_FLAG) console.log("test:result:", result.data)
      this.multiStepFormOpened = false;
      if (this.paramConfig.DEBUG_FLAG) console.log("this.workOrders:", this.workOrders)

      this.workOrderPtr = this.getWOToProcess();
      if (this.workOrderPtr != -1) {

        this.workOrderRec = this.workOrders[this.workOrderPtr];
        this.processCurrentWO(this.workOrderRec);
      }


    },
      err => {
        alert('3------------error:' + err.message);
      });


  }
  updateWOStatus(WOStatus, url) {
    if (this.paramConfig.DEBUG_FLAG) console.log(" updateWOStatus updating this.workOrderPtr:", this.workOrderPtr)
    this.Body = [];
    var Page = "&_trans=Y";


    var OrderNo = this.ordernNO;
    var actualStartDate: Date = new Date();

    var NewVal = this.dspOrder;
    NewVal["_QUERY"] = "UPDATE_DSP_ORDERS";
    NewVal["ORDER_STATUS"] = this.orderStatus;
    NewVal["ACTUAL_START_DATE"] = actualStartDate;

    if (this.paramConfig.DEBUG_FLAG) console.log("NewVal:", NewVal);
    this.addToBody(NewVal);



    this.workOrders[this.workOrderPtr].WO_STATUS = WOStatus;
    this.workOrders[this.workOrderPtr].ACTUAL_START_DATE = actualStartDate;
    if (WOStatus == 30) {
      var completedDate: Date = new Date();
      this.workOrders[this.workOrderPtr].COMPLETION_DATE = completedDate;
    }

    var NewVal = this.workOrders[this.workOrderPtr];
    NewVal["ORDER_FIELDS"] = this.dspOrder.ORDER_FIELDS;
    NewVal["_QUERY"] = "UPDATE_DSP_WORK_ORDERS";

    if (this.paramConfig.DEBUG_FLAG) console.log("NewVal:", NewVal);
    this.addToBody(NewVal);


    this.starServices.post(this, Page, this.Body).subscribe(result => {
      this.Body = [];
      if (this.paramConfig.DEBUG_FLAG) console.log("test:result:", result.data)
      if (url != null) {
        //alert ("url :" + url)
        window.location.assign(url);
      }
    },
      err => {
        alert('4-----------error:' + err.message);
      });


  }
  public userLang = "EN";
  public lookupArrDef = [
    {
      "statment": "SELECT CODE, PARTCODE, CODEVALUE_LANG, CODETEXT_LANG FROM SOM_TABS_CODES WHERE CODENAME ='API' and LANGUAGE_NAME = '" + this.userLang + "' order by CODETEXT_LANG",
      "lkpArrName": "lkpArrASSIGNEE_API"
    },
    {
      "statment": "SELECT CODE, PARTCODE, CODEVALUE_LANG, CODETEXT_LANG FROM SOM_TABS_CODES WHERE CODENAME ='URL' and LANGUAGE_NAME = '" + this.userLang + "' order by CODETEXT_LANG",
      "lkpArrName": "lkpArrASSIGNEE_URL"
    },
  {
    "statment": "SELECT  CODENAME CODE, PARTCODE, CODEVALUE_LANG, CODETEXT_LANG FROM SOM_TABS_CODES WHERE CODENAME = 'AUTH.ID_MATCH' and LANGUAGE_NAME = '" + this.userLang + "' order by CODETEXT_LANG",
    "lkpArrName": "lkpArrAUTH_IDMATCH"
  },
    {
      "statment": "SELECT HOST_ID CODE, URL, HTTP_METHOD, RULE_AUTHORIZATION AUTHORIZATION, RULE_HEADER HEADER, SUCCESS_MSG FROM ADM_RULE_HOST  ",
      "lkpArrName": "lkpArrHOST_DEF"
    },

  ];

  public lkpArrWO_TYPE = [];


  public lkpArrASSIGNEE_API = [];
  public lkpArrASSIGNEE_URL = [];
  public lkpArrHOST_DEF = [];
  public lkpArrAUTH_IDMATCH = [];
  
  public lkpArrGetAUTH_IDMATCH(CODE: any): any {
    // Change x.CODE below if not from SOM_TABS_CODE
    var rec = this.lkpArrAUTH_IDMATCH.find(x => x.CODE === CODE);
    return rec;
  }


  public lkpArrGetASSIGNEE_API(CODE: any): any {
    // Change x.CODE below if not from SOM_TABS_CODE
    var rec = this.lkpArrASSIGNEE_API.find(x => x.CODE === CODE);
    return rec;
  }
  public lkpArrGetASSIGNEE_URL(CODE: any): any {
    // Change x.CODE below if not from SOM_TABS_CODE
    var rec = this.lkpArrASSIGNEE_URL.find(x => x.CODE === CODE);
    return rec;
  }
  public lkpArrGetHOST_DEF(CODE: any): any {
    // Change x.CODE below if not from SOM_TABS_CODE
    var rec = this.lkpArrHOST_DEF.find(x => x.CODE === CODE);
    return rec;
  }
  public doProxyURL = false;
  public pdfexportURL = "pdfexport";
  public exportfileName = "contract.pdf"
  public proxyData;

  handleFormNext(formFields) {
    setTimeout(() => {
      this.resizeSignaturePad()
    }, 10)
    if (formFields.templateFields.find(t => t["FIELD_TYPE"] == "SIGNATURE")) {
      let sig = formFields.templateFields.find(t => t["FIELD_TYPE"] == "SIGNATURE")
      this.signature = formFields.data[0][sig.FIELD_ID]
    }

    if (formFields.pageType == "PRINT")
    {
    
      this.doProxyURL = false;
      this.ekycPdf.saveAs('Contract.pdf');

      
      setTimeout(() => {
        //this.doProxyURL = true;
        //this.proxyData = {"orderno":this.ordernNO};
        //this.ekycPdf.saveAs(this.exportfileName);
      }, 1000)
      
    }
  

  }

  getCurrentPageData(pageData) {
    this.printTitle = pageData.PAGE_TITLE
  }
}
