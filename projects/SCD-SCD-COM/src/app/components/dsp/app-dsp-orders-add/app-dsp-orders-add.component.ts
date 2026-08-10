import { Component, Input,OnInit, Output, EventEmitter, ViewEncapsulation } from '@angular/core';
import { starServices } from 'starlib';
import { StarNotifyService } from '../../../services/starnotification.service';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { workOrders, componentConfigDef, orders } from '@modeldir/model';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { addDays } from '@progress/kendo-date-math';
import { SelectEvent, UploadEvent } from '@progress/kendo-angular-upload';
import { Router } from '@angular/router';
import { Starlib1 } from '../../Starlib1';
import { Subscription } from 'rxjs';
declare function getParamConfig(): any;

const createFormGroup = (dataItem) => new FormGroup({
  'ORDER_TYPE': new FormControl(dataItem.ORDER_TYPE),
  'ORDER_NO': new FormControl(dataItem.ORDER_NO),
  'TEMPLATE_NAME': new FormControl(dataItem.TEMPLATE_NAME),
  'SUBNO': new FormControl(dataItem.SUBNO, Validators.required),
  'ORDER_STATUS': new FormControl(dataItem.ORDER_STATUS),
  'DIV': new FormControl(dataItem.DIV),
  'DEPT': new FormControl(dataItem.DEPT),
  'ASSIGNEE_TYPE': new FormControl(dataItem.ASSIGNEE_TYPE),
  'ASSIGNEE': new FormControl(dataItem.ASSIGNEE),
  'PROMISED_DATE': new FormControl(dataItem.PROMISED_DATE),
  'ORDERED_DATE': new FormControl(dataItem.ORDERED_DATE),
  'COMPLETION_DATE': new FormControl(dataItem.COMPLETION_DATE),
  'NOTES': new FormControl(dataItem.NOTES),
  'PARENT_ORDER_TYPE': new FormControl(dataItem.PARENT_ORDER_TYPE),
  'PARENT_ORDER_NO': new FormControl(dataItem.PARENT_ORDER_NO),
  'ACTUAL_START_DATE': new FormControl(dataItem.ACTUAL_START_DATE),
  'ACTUAL_END_DATE': new FormControl(dataItem.ACTUAL_END_DATE),
  'ATTACHMENTS': new FormControl(dataItem.ATTACHMENTS),
  'LOGDATE': new FormControl(dataItem.LOGDATE),
  'LOGNAME': new FormControl(dataItem.LOGNAME),
});

const createAddFormGroup = (dataItem) => new FormGroup({
  'ORDER_TYPE': new FormControl(dataItem.ORDER_TYPE, Validators.required),
  'ORDER_NO': new FormControl(dataItem.ORDER_NO),
  'TEMPLATE_NAME': new FormControl(dataItem.TEMPLATE_NAME, Validators.required),
  'FORM_TYPE': new FormControl(dataItem.FORM_TYPE),
  'SUBNO': new FormControl(dataItem.SUBNO, Validators.required),
  'ORDER_STATUS': new FormControl(dataItem.ORDER_STATUS),
  'DIV': new FormControl(dataItem.DIV),
  'DEPT': new FormControl(dataItem.DEPT),
  'ASSIGNEE_TYPE': new FormControl(dataItem.ASSIGNEE_TYPE),
  'ASSIGNEE': new FormControl(dataItem.ASSIGNEE),
  'PROMISED_DATE': new FormControl(dataItem.PROMISED_DATE, Validators.required),
  'ORDERED_DATE': new FormControl(dataItem.ORDERED_DATE),
  'COMPLETION_DATE': new FormControl(dataItem.COMPLETION_DATE),
  'NOTES': new FormControl(dataItem.NOTES),
  'PARENT_ORDER_TYPE': new FormControl(dataItem.PARENT_ORDER_TYPE),
  'PARENT_ORDER_NO': new FormControl(dataItem.PARENT_ORDER_NO),
  'ACTUAL_START_DATE': new FormControl(dataItem.ACTUAL_START_DATE),
  'ACTUAL_END_DATE': new FormControl(dataItem.ACTUAL_END_DATE),
  'ORDER_FIELDS': new FormControl(dataItem.ORDER_FIELDS),
  'ATTACHMENTS': new FormControl(dataItem.ATTACHMENTS),
  'LOGDATE': new FormControl(dataItem.LOGDATE),
  'LOGNAME': new FormControl(dataItem.LOGNAME),
});


@Component({
  selector: 'app-dsp-orders-add',
  templateUrl: './app-dsp-orders-add.component.html',
  styleUrls: ['./app-dsp-orders-add.component.css']
})
export class AppDspOrdersAddComponent implements OnInit {
  public title = "Service creation"
  public showToolBar = false

  public componentConfig: componentConfigDef
  public paramConfig
  public DSP_ORDERSGridConfig: componentConfigDef;
  public DSP_WORK_ORDERSGridConfig: componentConfigDef;
  public grid_DSP_ORDERS: orders;
  public grid_DSP_WORK_ORDERS: workOrders;
  public compSelector = 'app-dsp-orders-add';
  public children = ["any"];
  public routineAuth = null;
  public form: FormGroup;
  public addForm: FormGroup;
  private formInitialValues:any = new orders();
  private addFormInitialValues = new orders();
  public isSearch: boolean=false;
  public isPhonePortrait = false;
private Body:any = [];
  //fieldsDataObj = {}
  fieldsDataObjKeys = {}
  public isAsigneeTypeReadOnly: boolean = false;
  public isAsigneeReadOnly: boolean = false;
  
  @Output() readCompletedOutput: EventEmitter<any> = new EventEmitter();

  newRequestOpened = false

  public CRC_CRC_STATConfig: componentConfigDef;
  public CRC_CRC_STATConfig2: componentConfigDef;
  public userLang = "EN";
  public lookupArrDef:any = [
    {
      "statment": "SELECT CODE, CODETEXT_LANG FROM SOM_TABS_CODES WHERE CODENAME ='ORDER_STATUS' and LANGUAGE_NAME = '" + this.userLang + "' order by CODETEXT_LANG ",
      "lkpArrName": "lkpArrORDER_STATUS"
    },
    {
      "statment": "SELECT CODE, CODETEXT_LANG FROM SOM_TABS_CODES WHERE CODENAME ='DEPT' and LANGUAGE_NAME = '" + this.userLang + "' order by CODETEXT_LANG ",
      "lkpArrName": "lkpArrDEPT"
    },
    {
      "statment": "SELECT CODE, CODETEXT_LANG FROM SOM_TABS_CODES WHERE CODENAME ='ASSIGNEE_TYPE' and LANGUAGE_NAME = '" + this.userLang + "' order by CODETEXT_LANG ",
      "lkpArrName": "lkpArrASSIGNEE_TYPE"
    },
    // {
    //   "statment": "SELECT CODE, CODETEXT_LANG FROM SOM_TABS_CODES WHERE CODENAME ='YES_OR_NO' and LANGUAGE_NAME = '" + this.userLang + "' order by CODETEXT_LANG ",
    //   "lkpArrName": "lkpArrASSIGNEE_TYPE"
    // },
    {
      //"statment": "SELECT CODE,  CODETEXT_LANG FROM SOM_TABS_CODES WHERE CODENAME ='ORDER_TYPE' and LANGUAGE_NAME = '" + this.userLang + "' and CODEVALUE_LANG = 'HR' order by CODETEXT_LANG  ",
      "statment": "SELECT CODE,  CODETEXT_LANG FROM SOM_TABS_CODES WHERE CODENAME ='ORDER_TYPE' and LANGUAGE_NAME = '" + this.userLang + "'  order by CODETEXT_LANG  ",
      "lkpArrName": "lkpArrORDER_TYPE"
    },
    // {
    //   "statment": "SELECT TEMPLATE_NAME, TEMPLATE_NAME CODETEXT_LANG FROM DSP_TEMPLATE  ",
    //   "lkpArrName": "lkpArrTEMPLATE_NAME"
    // }
  ];

  public lookupArrDefTemplateName = [
    {
      "statment": "SELECT TEMPLATE_NAME, TEMPLATE_NAME CODETEXT_LANG FROM DSP_TEMPLATE WHERE ORDER_TYPE = REPLACE_THIS",
      "lkpArrName": "lkpArrTEMPLATE_NAME"
    }
  ]
  public lkpArrORDER_TYPE = [];
  public lkpArrORDER_STATUS = [];
  public lkpArrDEPT = [];
  public lkpArrASSIGNEE_TYPE = [];
  public lkpArrASSIGNEE = [];
  public lkpArrTEMPLATE_NAME = [];
  public DSP_ORDERSFormConfig: componentConfigDef;

  public uploadSaveUrl = 'saveUrl';
  public uploadRemoveUrl = 'removeUrl';
  public currentFileUpload;
  public myFiles: Array<any> = [];
  public filesDeleted: Array<any> = [];
  public uploadInProgress: boolean = false;
  public kendoFiles;
  public filesSet;
  public AttDwnUrl = "";
  public submitted = false;

  public DSP_MULTISTEPFormConfig: componentConfigDef;
  public templateInfo;
  public fieldsData = {};
  public fieldsSave: boolean = false;
  showMultistep = false

  constructor(public router: Router,public responsive: BreakpointObserver ,public starServices: starServices, private starNotify: StarNotifyService, private starlib1: Starlib1,) {
    this.router = router;
    this.paramConfig = getParamConfig()
    this.componentConfig = new componentConfigDef()

    this.DSP_MULTISTEPFormConfig = new componentConfigDef();
    this.DSP_MULTISTEPFormConfig.gridHeight = 400;

    // this.CRC_CRC_STATConfig = new componentConfigDef();
    // this.CRC_CRC_STATConfig2 = new componentConfigDef();
    // var masterParams = {
    //   DASHBOARD_ID: 2,
    //   hideOptions: true
    // }
    // this.CRC_CRC_STATConfig.masterParams = masterParams;
  }

  private componentConfigChangeEvent!: Subscription;
  async ngOnInit() {
    this.responsive
    .observe([Breakpoints.HandsetPortrait])
    .subscribe((state: BreakpointState) => {
      
      this.isPhonePortrait = false;
      if (state.matches) {
         this.isPhonePortrait = true;
      }
    });
    this.starServices.actOnParamConfig(this, 'PRVORDEROV');

    this.form = createFormGroup(
      this.formInitialValues
    );

    this.addFormInitialValues.ASSIGNEE_TYPE = "TEAM";
    this.addFormInitialValues.ASSIGNEE = this.starServices.sessionParams.USER_INFO.TEAM;
    this.addForm = createAddFormGroup(
      this.addFormInitialValues
    );

    
    this.starServices.fetchLookups(this, this.lookupArrDef);

     // Subscribing the event.
     this.componentConfigChangeEvent = this.starNotify.subscribeEvent<componentConfigDef>('componentConfigDef', componentConfig => {
      if (componentConfig.eventFrom != this.compSelector) {
         if (componentConfig.eventTo.includes(this.compSelector)|| componentConfig.eventTo.includes("any"))  {
            this.handleComponentConfig(componentConfig);
         }
      }
   });
    this.AttDwnUrl = this.starServices.SERVER_URL + "/api/att?action=download&username=" + this.starServices.sessionParams.USERNAME.toLowerCase() + "&name=";

    
  }



  print() {
    window.print()
  }


  public valueChangeORDER_TYPE(value: any): void {
    console.log("valueChangeORDER_TYPE:", value, this.addForm.value["ORDER_TYPE"])
    this.lookupArrDefTemplateName = [
      {
        "statment": `SELECT TEMPLATE_NAME, TEMPLATE_NAME CODETEXT_LANG, FORM_TYPE FROM DSP_TEMPLATE WHERE ORDER_TYPE = '${this.addForm.value["ORDER_TYPE"]}'`,
        "lkpArrName": "lkpArrTEMPLATE_NAME"
      }
    ]
    this.starServices.fetchLookups(this, this.lookupArrDefTemplateName);
    this.newRequestOpened = true;
  }

  public fetchLookupsCallBack() {
    console.log("ELHAMY", this.lkpArrTEMPLATE_NAME)
    if (this.newRequestOpened) {
      let selectedVal = this.lkpArrTEMPLATE_NAME.find(d => d["TEMPLATE_NAME"] != "")
      if (selectedVal) {
        this.addForm.patchValue({
          "TEMPLATE_NAME": selectedVal["TEMPLATE_NAME"]
        }, { emitEvent: true })
        console.log("new:selectedVal:", selectedVal)
        this.valueChangeTEMPLATE_NAME(null)
      }
    }
  }

  public valueChangeTEMPLATE_NAME(value: any): void {
    var formVal = this.addForm.value;
    console.log("new:selectedVal:", formVal)
    if (typeof formVal.TEMPLATE_NAME != "undefined") {
      this.readCompletedOutput.emit(formVal);
      var NewVal = {
        "TEMPLATE_NAME": formVal.TEMPLATE_NAME
      };
      NewVal["_QUERY"] = "GET_DSP_TEMPLATE";

      this.Body.push(NewVal);
      var NewVal1 = {
        "TEMPLATE_NAME": formVal.TEMPLATE_NAME,
        "SEQUENCE_NAME": "%",
      };
      NewVal1["_QUERY"] = "GET_DSP_TEMPLATE_DETAIL";
      this.Body.push(NewVal1);

      this.starServices.performPost(this, this.populateForm);
      this.showMultiStepForm(this.addForm.value.TEMPLATE_NAME)
    }
  }

  public populateForm(object, result) {
    console.log("new:selectedVal:",object.isNew,  result)
   // if (object.isNew == true) {
      let formVal: orders = object.addForm.value;
      if ((result.data[0].data[0].DAYS == null) || (result.data[0].data[0].DAYS == 0)) {
        var details = result.data[1].data;
        var detailDays = 0;
        for (var i = 0; i < details.length; i++) {
          detailDays = detailDays + details[i].DURATION;
        }
        result.data[0].data[0].DAYS = detailDays;
      }
      let days: number = parseInt(result.data[0].data[0].DAYS);

      var promisedDate: Date = new Date();

      promisedDate = addDays(promisedDate, days);

      formVal.ORDER_TYPE = result.data[0].data[0].ORDER_TYPE;
      formVal.PROMISED_DATE = promisedDate;
      formVal.ORDERED_DATE = new Date();
      formVal.DEPT = result.data[0].data[0].DEPT;
      formVal.DIVS = result.data[0].data[0].DIVS;
      formVal.ASSIGNEE_TYPE = result.data[0].data[0].ASSIGNEE_TYPE;
      formVal.ASSIGNEE = object.starServices.sessionParams.USER_INFO.TEAM;
      formVal.FORM_TYPE = result.data[0].data[0].FORM_TYPE;
console.log("submit:Cur,New::", formVal)
      object.form.reset(formVal);
   // }
  }

  public selectEventHandler(e: SelectEvent) {
    e.files.forEach((file) => {
      if (this.paramConfig.DEBUG_FLAG) console.log(`File selected: ${file.name}`);
      if (!file.validationErrors) {
        this.currentFileUpload = file;
      }
    });
  }

  public removeEventHandler_not_used(e: SelectEvent): void {
    e.files.forEach((file) => {
      var exists = this.checkNameExist(this.filesDeleted, file.name);
      if (exists == -1)
        this.filesDeleted.push({ name: file.name })
    });
  }

  public removeFile(name): void {
    var exists = this.checkNameExist(this.filesDeleted, name);
    if (exists == -1)
      this.filesDeleted.push({ name: name })

    var exists = this.checkNameExist(this.myFiles, name);
    if (exists != -1)
      this.myFiles.splice(exists, 1);

    this.rebuildMyFiles();
  }

  public checkNameExist(fileList, name) {
    var exists = -1;
    var i = 0;
    while (i < fileList.length) {
      if (fileList[i].name == name) {
        exists = i;
        break;
      }
      i++;
    }
    return exists;
  }

  public rebuildMyFiles() {
    var myFilesNew:any = [];
    for (var i = 0; i < this.myFiles.length; i++) {
      var exists = this.checkNameExist(myFilesNew, this.myFiles[i].name);
      if (exists == -1) {
        var fileElm = { name: this.myFiles[i].name, size: this.myFiles[i].size };
        myFilesNew.push(fileElm)
      }
    }
    this.myFiles = myFilesNew

    var myFilesNew:any = [];
    for (var i = 0; i < this.filesDeleted.length; i++) {
      var exists = this.checkNameExist(this.myFiles, this.filesDeleted[i].name);
      if (exists == -1) {
        var fileElm = { name: this.filesDeleted[i].name, size: this.filesDeleted[i].size };
        myFilesNew.push(fileElm)
      }
    }
    this.filesDeleted = myFilesNew
  }

  public completeEventHandler(e: SelectEvent) {
    this.rebuildMyFiles();
    this.uploadInProgress = false;
    this.buildAttachmentField();
  }

  public buildAttachmentField() {
    var attachments = "";
    var formVal = this.addForm.value;
    if (this.myFiles != null) {
      var attachmentsArr:any = [];
      var id = "";
      for (var i = 0; i < this.myFiles.length; i++) {
        id = formVal.ORDER_NO + "-" + this.myFiles[i].name;
        var attElm = {
          name: this.myFiles[i].name,
          id: id,
          size: this.myFiles[i].size
        }
        attachmentsArr.push(attElm);

      }

      attachments = JSON.stringify(attachmentsArr);
    }

    formVal.ATTACHMENTS = attachments;
    this.addForm.reset(formVal);
    this.addForm.markAsDirty();
  }

  public uploadEventHandler(e: UploadEvent) {
    this.uploadInProgress = true;
    var ver = "";
    var name = "";
    this.kendoFiles = e.files;
    this.filesSet = new Set<File>();
    for (let i = 0; i < this.kendoFiles.length; i++) {
      const rawFile: File = this.kendoFiles[i].rawFile;
      if (this.paramConfig.DEBUG_FLAG) console.log("rawFile:" + rawFile)
      if (this.paramConfig.DEBUG_FLAG) console.log(rawFile)
      this.filesSet.add(rawFile);
      if (this.paramConfig.DEBUG_FLAG) console.log(rawFile.name + " " + rawFile.lastModified)
      ver = rawFile.lastModified.toString();
      name = rawFile.name;
    }

    let formVal: orders = this.addForm.value;
    var id = formVal.ORDER_NO;
    var page = "?action=upload";

    this.starServices.uploadFile(page, this.filesSet, id);
  }

  async  showMultiStepForm(templateName) {
    let Body = [];
    var newVal:any = { "_QUERY": "GET_DSP_TEMPLATE", 
                            "TEMPLATE_NAME": templateName };
    Body.push(newVal);
    newVal = { "_QUERY": "GET_DSP_TEMPLATE_DETAIL", 
                            "TEMPLATE_NAME": templateName,
                           "SEQUENCE_NAME": "%"};
     Body.push(newVal);
     let data = await this.starServices.execSQLBody(this, Body, "");
    if (typeof data != "undefined" && data[0].data.length > 0) {
      this.Body = [];
      this.templateInfo = data[0].data[0];
      let templateDetail = data[1].data[0];

      if ((this.addForm.value.ORDER_FIELDS == "") || (this.addForm.value.ORDER_FIELDS == null)) {
        this.addForm.value.ORDER_FIELDS = "{}";
      }

      
      var formPagesNo = templateDetail.FORM_PAGES_NO;
      this.formMasterParams = {
        "formName": this.templateInfo.FORM_NAME,
        "formPagesNo": formPagesNo,
        "orderFields": this.addForm.value.ORDER_FIELDS,
        "addForm": this.addForm.value,
        "callingForm": "PRVORDERAD",
      };

      console.log("this.templateInfo:", this.templateInfo, "this.formMasterParams:",this.formMasterParams)
      this.fieldsData = JSON.parse(this.addForm.value.ORDER_FIELDS);
      this.fieldsSave = false;
      if (this.templateInfo.FORM_TYPE == "FORM"){
        this.showCallScreen = false;
        this.DSP_MULTISTEPFormConfig = new componentConfigDef();
        this.DSP_MULTISTEPFormConfig.masterParams = this.formMasterParams;
        this.showMultistep = true;
      }
      else  if (this.templateInfo.FORM_TYPE == "SCREEN"){
        this.showCallScreen = true;
        
      }
    }
 
  }
  public showCallScreen = false;
  public formMasterParams = {}
  async  callScreen(){
    
          let Body = [];
          var newVal:any = { "_QUERY": "GET_MENUS_QUERY", 
             "_WHERE": "CHOICE  = '" + this.templateInfo.FORM_NAME + "'" };
          Body.push(newVal);
          let data = await this.starServices.execSQLBody(this, Body, "");
          if (typeof data != "undefined" && data[0].data.length > 0) {
            var menu = data[0].data[0];
            let compSelector = menu.FLEX_FLD1;
            this.children = [];
            this.children.push(compSelector);
        this.commonCallStarNotify(this.formMasterParams);
      }
      this.router.navigate(['/' +this.templateInfo.FORM_NAME], 
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
    console.log("New:sending: ", {...componentConfig})
    this.starNotify.sendEvent<componentConfigDef>('componentConfigDef', componentConfig);
  }
  
  public orderField;
  public submitAction() {
    //if (!this.fieldsDataObj || typeof this.fieldsDataObj === undefined) return
    //if (this.fieldsDataObj && Object.keys(this.fieldsDataObj).length == 0) return
    //if (this.fieldsDataObj && Object.keys(this.fieldsDataObj).length == 0) return

    var page = "";
    var url = this.starServices.SERVER_URL + '/prov/api?_format=json';
    var formVal = this.addForm.value;
    //this.orderField = formVal.ORDER_FIELDS;

    var newVal = { "_QUERY": "CREATE_ORDER" };

    newVal["TEMPLATE_NAME"] = formVal.TEMPLATE_NAME;
    newVal["SUBNO"] = formVal.SUBNO;
    newVal["EMAIL"] = "";
    newVal["NOTES"] = formVal.ORDER_NOTE;
    newVal["ASSIGNEE"] = this.starServices.sessionParams.USERNAME;
    newVal["ASSIGNEE_TYPE"] = "PERSON";
    newVal["ORDERED_DATE"] = this.starlib1.GET_DATE_ISO();
    newVal["ATTACHMENTS"] = formVal.ATTACHMENTS;


    newVal["ORDER_FIELDS"] = this.fieldsDataObjKeys;
    this.addForm.value.ORDER_FIELDS = JSON.stringify(this.fieldsDataObjKeys);
    this.Body.push(newVal);
    let DBLoc = this.paramConfig.DBLoc;

    console.log("submitAction:page:", page, "url:",url)
    this.starServices.postCommand(page, url, this.Body).subscribe(result => {
      if (result != null) {
        this.Body = [];
        var dataResult = JSON.parse(JSON.stringify(result));

        this.starServices.showNotification("success", "Order created No:" + dataResult.ORDER_NO);
        var dialogStruc = {
          msg: "Successfully Created Request No:" + dataResult.ORDER_NO,
          title: "Success",
          info: null,
          object: this,
          action: this.starServices.OkActions
        };
        this.starServices.showConfirmation(dialogStruc);
        this.showMultistep = false;
        
        this.starlib1.getOrder(dataResult.ORDER_NO, this.form.value, this.fieldsDataObjKeys);
      }
      else
        this.starServices.showNotification("error", "error:" + result);
      this.Body = [];

      this.newRequestOpened = false
  
    });
  }

  saveCompletedOutputHandler(e) {
    console.log("saveCompletedOutputHandler:", e)
    //this.fieldsDataObj = e.data
    this.fieldsDataObjKeys = e
    this.submitAction()
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
