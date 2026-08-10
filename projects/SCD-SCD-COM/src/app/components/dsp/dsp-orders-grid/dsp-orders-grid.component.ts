import { Component, Input, Output, OnInit, OnDestroy, ViewChild, Renderer2, EventEmitter, ViewEncapsulation } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { AddEvent, GridComponent } from '@progress/kendo-angular-grid';
import { groupBy, GroupDescriptor } from '@progress/kendo-data-query';
import { Router } from '@angular/router';
import { process, State } from '@progress/kendo-data-query';
import { DataStateChangeEvent, GridDataResult } from '@progress/kendo-angular-grid';

import { starServices } from 'starlib';
import { StarNotifyService } from '../../../services/starnotification.service';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';

import { orders, componentConfigDef } from '@modeldir/model';

// must invalidate table KEY by adding Validators.required otherwise add new as detail in master/detail screen won't work
const createFormGroup = dataItem => new FormGroup({
  'ORDER_TYPE': new FormControl(dataItem.ORDER_TYPE),
  'ORDER_NO': new FormControl(dataItem.ORDER_NO, Validators.required),
  'SUBNO': new FormControl(dataItem.SUBNO),
  'ORDER_STATUS': new FormControl(dataItem.ORDER_STATUS),
  'DIV': new FormControl(dataItem.DIVS),
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
  'TEMPLATE_NAME': new FormControl(dataItem.TEMPLATE_NAME),
  'ATTACHMENTS': new FormControl(dataItem.ATTACHMENTS),
  'LOGDATE': new FormControl(dataItem.LOGDATE),
  'LOGNAME': new FormControl(dataItem.LOGNAME)
});



const matches = (el, selector) => (el.matches || el.msMatchesSelector).call(el, selector);
declare function getParamConfig(): any;

@Component({
  selector: 'app-dsp-orders-grid',
  templateUrl: './dsp-orders-grid.component.html',
  styleUrls: ['./dsp-orders-grid.component.css'
    //  , './pdf-styles.css'
  ],

  styles: [
    `.button-notification {
          padding: 10px 5px;
          font-size: 1em;
          color: #313536;
      }
      .kendo-pdf-export {
        font-family: "DejaVu Sans", "Arial", sans-serif;
        font-size: 12px;
      }
      `
  ]
})

export class DspOrdersGridComponent implements OnInit, OnDestroy {
  @ViewChild(GridComponent)

  public grid: GridComponent;

  //@Input()    
  public showToolBar = true;
  public showDiagram = true;
  public showHideGridFlag = true;
  

  public groups: GroupDescriptor[] = [];
  public view: any[];
  public formGroup: FormGroup;
  private editedRowIndex: number;
  private docClickSubscription: any;
  private isNew: boolean;
  public isSearch: boolean=false;
  public isChild: boolean = false;
  public isMaster: boolean = false;
  public isORDER_NOEnable: boolean = true;
  public isFilterable: boolean = false;
  public isColumnMenu: boolean = false;
  public insertable: boolean = true;
  public showAll: boolean = false;

  private masterKey = "";
  public masterKeyName = "ORDER_NO";
  private insertCMD = "INSERT_DSP_ORDERS";
  private updateCMD = "UPDATE_DSP_ORDERS";
  private deleteCMD = "DELETE_DSP_ORDERS";
  private getCMD = "GET_DSP_ORDERS_QUERY";

  public executeQueryresult: any;
  public title = "Requests";
  public PDFfileName = this.title + ".PDF";
  public ExcelfileName = this.title + ".xlsx";
  public compSelector = 'app-dsp-orders-grid';
  public children = ["any"];
  public componentConfig: componentConfigDef;
  public gridHeight = 250;
  public paramConfig;
  public createFormGroupGrid = createFormGroup;
  public formattedWhere = null;

  public isPhonePortrait = false;
private Body = [];

  isReadOnly = false
  workOrders = []
  formRequestOpened = false
  public DSP_MULTISTEPFormConfig: componentConfigDef;
  public DSP_ORDERSFormConfig: componentConfigDef;

  public app_dsp_diagram_wrapConfig:componentConfigDef;

  @Output() readCompletedOutput: EventEmitter<any> = new EventEmitter();
  @Output() clearCompletedOutput: EventEmitter<any> = new EventEmitter();
  @Output() saveCompletedOutput: EventEmitter<any> = new EventEmitter();

  constructor(public router: Router,public responsive: BreakpointObserver ,public starServices: starServices, private renderer: Renderer2, private starNotify: StarNotifyService) {
    this.paramConfig = getParamConfig();
    this.componentConfig = new componentConfigDef();

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
    this.componentConfig.showTitle = true;
    this.componentConfig.queryable  = true;
    this.componentConfig.insertable = true;
    this.componentConfig.removeable = true;
    this.componentConfig.updateable = true;
    this.componentConfig.enabled = true;
  }

  public ngAfterViewInit() {
    this.starServices.setRTL();
  }
  public async setApprovalStatus() {
    function getWOs (result, orderNo){
      let result1 = [];
      for (let i=0; i< result.length; i++){
        if (result[i].ORDER_NO == orderNo){
          result1.push(result[i]);
        }
      }
      return result1;
    }
    let body = [
      {
        "_QUERY": "GET_DSP_WORK_ORDERS_BY_ORDER_NO",
        "ORDER_NO": "%"
      }
    ]
    let result = await this.starServices.post(this, "&_trans=Y", body).toPromise();

    (this.grid.data as any).data.forEach(async order => {
     

      // this.workOrders = []
      let resultData = result.data[0].data;
      let result1 = getWOs (resultData, order["ORDER_NO"]);

      order["WO_STATUS"] = "Checking..."
          order["WO_STATUS"] = this.getApprovalStatus(result1)

        console.log("Checking:resultData:", result1.length, result1)
        if (result.data[0].data.length > 0)
          order["NOTES"] = result1[result1.length -1].NOTES
    
    })
  }
  public async ngOnInit() {
        this.responsive
      .observe([Breakpoints.HandsetPortrait])
      .subscribe((state: BreakpointState) => {
        
        this.isPhonePortrait = false;
        if (state.matches) {
           this.isPhonePortrait = true;
        }
        
      });
    this.docClickSubscription = this.renderer.listen('document', 'click', this.onDocumentClick.bind(this));
    this.starServices.fetchLookups(this, this.lookupArrDef);
    this.readCompletedOutput.subscribe(() => {
      this.setApprovalStatus();
      
    })

    ///

    // this.readCompletedOutput.subscribe(() => {
    //   (this.grid.data as any).data.forEach(async order => {
    //     let body = [
    //       {
    //         "_QUERY": "GET_DSP_WORK_ORDERS_BY_ORDER_NO",
    //         "ORDER_NO": order["ORDER_NO"]
    //       }
    //     ]

    //     // this.workOrders = []

    //     order["WO_STATUS"] = "Checking..."

    //     let result = await this.starServices.post(this, "&_trans=Y", body).toPromise()
    //     // result.data[0].data
    //     order["WO_STATUS"] = this.getApprovalStatus(result.data[0].data)

    //     console.log("Checking:result.data[0].data:", result.data[0].data.length, result.data[0].data)
    //     if (result.data[0].data.length > 0)
    //       order["NOTES"] = result.data[0].data[result.data[0].data.length -1].NOTES
      
        
    //   })
    // })
    console.log("constructor:", this.compSelector)
  }

  public ngOnDestroy(): void {
    this.docClickSubscription();
  }
  //Next part for filtering
  public state: State = {
  };

  public fetchLookupsCallBack() {
    console.log("lookupArrDef[i].lkpArrName:dsp-orders-grid.component:this.lkpArrORDER_STATUS:", this.lkpArrORDER_STATUS)
   }
  public dataStateChange(state: DataStateChangeEvent): void {
    if (this.paramConfig.DEBUG_FLAG) console.log("dataStateChange");
    this.state = state;
    var out = process(this.executeQueryresult.data, this.state);
    if (this.paramConfig.DEBUG_FLAG) console.log(out);
    this.grid.data = out;
    if (this.paramConfig.DEBUG_FLAG) console.log(this.grid.data);
  }

  @Input() public set detail_Input(grid: any) {
    if (this.paramConfig.DEBUG_FLAG) console.log('detail_Input order grid.ORDER_NO :' + grid.ORDER_NO);
    if (grid.ORDER_NO != "") {

      this.masterKey = grid.ORDER_NO;
      this.isORDER_NOEnable = false;
      this.isSearch = true;
      this.executeQuery(grid);
      this.isChild = true;
      //this.showToolBar = false;
    }
    else {

      if (typeof this.grid != "undefined") {

        //this.isChild = false;
        this.grid.data = [];
        this.masterKey = "";
        this.isORDER_NOEnable = true;
      }
    }
  }

  public toggleFilter(): void {
    this.isFilterable = !this.isFilterable;
  }
  public toggleColumnMenu(): void {
    this.isColumnMenu = !this.isColumnMenu;
  }


  private gridInitialValues = new orders();

  private addToBody(NewVal) {
    this.Body.push(NewVal);
  }
  private onDocumentClick(e: any): void {
    if (this.formGroup && this.formGroup.valid &&
      !matches(e.target, '#grid tbody *, #grid .k-grid-toolbar .k-button, .k-link')) {
      this.saveCurrent();
    }
  }


  public addHandler(): void {
    if (this.isChild == true) {
      if (this.masterKey == "") {
        this.starServices.showOkMsg(this, this.starServices.saveMasterMsg, "Error");
        return;
      }
    }
    this.saveCurrent();
    this.gridInitialValues.ORDER_NO = this.masterKey;
    this.closeEditor();
    this.formGroup = createFormGroup(
      this.gridInitialValues
    );
    console.log("lkpArrORDER_STATUS:",this.lkpArrORDER_STATUS)
    this.isNew = true;
    this.grid.addRow(this.formGroup);
  }

public async getsendWOs(dataItem){
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
  console.log("testx post execSQLBody:", workOrders);
  if (workOrders.length != 0) {
    this.app_dsp_diagram_wrapConfig = new componentConfigDef();
    this.app_dsp_diagram_wrapConfig.masterParams = {
      action:"build",
      workOrders: workOrders,
      flowName : dataItem.TEMPLATE_NAME,
      useModeler: true,
      showDiagram: this.showDiagram,
      rulesDef:rulesDef
    }
    
  }
  

}
  public cellClickHandler({ isEdited, dataItem, rowIndex }): void {
    this.getsendWOs(dataItem);
    
    if (this.isReadOnly)
      return

    if (isEdited || (this.formGroup && !this.formGroup.valid)) {
      return;
    }
    if (this.isNew) {
      rowIndex += 1;
    }
    this.saveCurrent();
    this.formGroup = createFormGroup(dataItem);
    if (this.componentConfig.enabled && this.componentConfig.updateable) {
      this.editedRowIndex = rowIndex;
      this.grid.editRow(rowIndex, this.formGroup);
    }
    
    this.readCompletedOutput.emit(this.formGroup.value);
  }


  public enterQuery(grid: GridComponent): void {
    this.starServices.enterQuery_grid(grid, this);
  }


  public executeQuery(grid: GridComponent): void {
    this.starServices.executeQuery_grid(grid, this);
  }

  public saveChanges(grid: GridComponent): void {
    this.starServices.saveChanges_grid(grid, this);
  }

  public cancelHandler(): void {
    this.starServices.cancelHandler_grid(this);
  }

  private closeEditor(): void {
    this.starServices.closeEditor_grid(this);
  }

  private saveCurrent(): void {
    this.starServices.saveCurrent_grid(this);
  }

  public removeHandler(sender) {

    this.starServices.removeHandler_grid(sender, this);

  }

  public userLang = "EN";
  public lookupArrDef = [{
    "statment": "SELECT CODE,  CODETEXT_LANG FROM SOM_TABS_CODES WHERE CODENAME ='ORDER_TYPE' and LANGUAGE_NAME = '" + this.userLang + "' order by CODETEXT_LANG  ",
    "lkpArrName": "lkpArrORDER_TYPE"
  },
  {
    "statment": "SELECT CODE, CODETEXT_LANG, PARTCODE FROM SOM_TABS_CODES WHERE CODENAME ='ORDER_STATUS' and LANGUAGE_NAME = '" + this.userLang + "' order by CODETEXT_LANG  ",
    "lkpArrName": "lkpArrORDER_STATUS"
  },
  {
    "statment": "SELECT CODE, CODETEXT_LANG, CODEVALUE_LANG FROM SOM_TABS_CODES WHERE CODENAME ='DIV' and LANGUAGE_NAME = '" + this.userLang + "' order by CODETEXT_LANG  ",
    "lkpArrName": "lkpArrDIV"
  },
  {
    "statment": "SELECT CODE, CODETEXT_LANG FROM SOM_TABS_CODES WHERE CODENAME ='DEPT' and LANGUAGE_NAME = '" + this.userLang + "' order by CODETEXT_LANG  ",
    "lkpArrName": "lkpArrDEPT"
  },
  {
    "statment": "SELECT CODE, CODETEXT_LANG FROM SOM_TABS_CODES WHERE CODENAME ='ASSIGNEE_TYPE' and LANGUAGE_NAME = '" + this.userLang + "' order by CODETEXT_LANG  ",
    "lkpArrName": "lkpArrASSIGNEE_TYPE"
  },
  {
    "statment": "SELECT TEAM  CODE, FULLNAME CODETEXT_LANG, DEPT, DIVS  FROM ADM_TEAM  ",
    "lkpArrName": "lkpArrASSIGNEE_TEAMS"
  },
  {
    "statment": "SELECT USERNAME  CODE, FULLNAME CODETEXT_LANG, DEPT, DIVS FROM ADM_USER_INFORMATION  ",
    "lkpArrName": "lkpArrASSIGNEE_PERSON"
  },
  {
    "statment": "SELECT CODE, CODETEXT_LANG FROM SOM_TABS_CODES WHERE CODENAME ='EXCH_SYST' and LANGUAGE_NAME = '" + this.userLang + "' order by CODETEXT_LANG",
    "lkpArrName": "lkpArrASSIGNEE_NETWORK"
  },
  {
    "statment": "SELECT CODE, CODE CODETEXT_LANG FROM SOM_TABS_CODES WHERE CODENAME ='API' and LANGUAGE_NAME = '" + this.userLang + "' order by CODETEXT_LANG",
    "lkpArrName": "lkpArrASSIGNEE_API"
  },
  {
    "statment": "SELECT CODE, CODE CODETEXT_LANG FROM SOM_TABS_CODES WHERE CODENAME ='URL' and LANGUAGE_NAME = '" + this.userLang + "' order by CODETEXT_LANG",
    "lkpArrName": "lkpArrASSIGNEE_URL"
  },
  {
    "statment": "SELECT CODE, CODE CODETEXT_LANG FROM SOM_TABS_CODES WHERE CODENAME ='NAVIGATE' and LANGUAGE_NAME = '" + this.userLang + "' order by CODETEXT_LANG",
    "lkpArrName": "lkpArrASSIGNEE_NAVIGATE"
  },
  {
    "statment": "SELECT TEMPLATE_NAME CODE, TEMPLATE_NAME CODETEXT_LANG FROM DSP_TEMPLATE  ",
    "lkpArrName": "lkpArrTEMPLATE_NAME"
  }
];

  public lkpArrORDER_TYPE = [];

  public lkpArrORDER_STATUS = [];

  public lkpArrDIV = [];

  public lkpArrDEPT = [];

  public lkpArrASSIGNEE_TYPE = [];

  public lkpArrASSIGNEE_TEAMS = [];
  public lkpArrASSIGNEE_PERSON = [];
  public lkpArrASSIGNEE_NETWORK = [];
  public lkpArrASSIGNEE_API = [];
  public lkpArrASSIGNEE_URL = [];
  public lkpArrASSIGNEE_NAVIGATE = [];

  public lkpArrTEMPLATE_NAME = [];

  public lkpArrGetORDER_TYPE(CODE: any): any {
    // Change x.CODE below if not from SOM_TABS_CODE
    var rec = this.lkpArrORDER_TYPE.find(x => x.CODE === CODE);
    return rec;
  }

  public lkpArrGetORDER_STATUS(CODE: any): any {
    // Change x.CODE below if not from SOM_TABS_CODE
    var rec = this.lkpArrORDER_STATUS.find(x => x.CODE === CODE);
    return rec;
  }

  public lkpArrGetDIV(CODE: any): any {
    // Change x.CODE below if not from SOM_TABS_CODE
    var rec = this.lkpArrDIV.find(x => x.CODE === CODE);
    return rec;
  }

  public lkpArrGetDEPT(CODE: any): any {
    // Change x.CODE below if not from SOM_TABS_CODE
    var rec = this.lkpArrDEPT.find(x => x.CODE === CODE);
    return rec;
  }

  public lkpArrGetASSIGNEE_TYPE(CODE: any): any {
    // Change x.CODE below if not from SOM_TABS_CODE
    var rec = this.lkpArrASSIGNEE_TYPE.find(x => x.CODE === CODE);
    return rec;
  }

  public lkpArrGetASSIGNEE(CODE: any, TYPE_NAME: any): any {
    // Change x.CODE below if not from SOM_TABS_CODE
    if (TYPE_NAME == "TEAM")
      var rec = this.lkpArrASSIGNEE_TEAMS.find(x => x.CODE === CODE);
    else if (TYPE_NAME == "PERSON")
      var rec = this.lkpArrASSIGNEE_PERSON.find(x => x.CODE === CODE);
    else if (TYPE_NAME == "NETWORK")
      var rec = this.lkpArrASSIGNEE_NETWORK.find(x => x.CODE === CODE);
    else if (TYPE_NAME == "API")
      var rec = this.lkpArrASSIGNEE_API.find(x => x.CODE === CODE);
    else if (TYPE_NAME == "URL")
      var rec = this.lkpArrASSIGNEE_URL.find(x => x.CODE === CODE);
    else if (TYPE_NAME == "NAVIGATE")
      var rec = this.lkpArrASSIGNEE_NAVIGATE.find(x => x.CODE === CODE);
    //console.log("TYPE_NAME:", TYPE_NAME, rec)
    return rec;
  }

  public lkpArrGetTEMPLATE_NAME(CODE: any): any {
    // Change x.CODE below if not from SOM_TABS_CODE
    var rec = this.lkpArrTEMPLATE_NAME.find(x => x.CODE === CODE);
    //if (this.paramConfig.DEBUG_FLAG) console.log("lkpArrGetTEMPLATE_NAME:CODE:", CODE,rec,  this.lkpArrTEMPLATE_NAME)
    return rec;
  }
  public getlkpArrASSIGNEE() {
    var newlkpArrASSIGNEE = [];
    var recVal = this.formGroup.value;
    var ASSIGNEE_TYPE = recVal.ASSIGNEE_TYPE;
    var team = this.starServices.sessionParams.USER_INFO.TEAM;

    if (ASSIGNEE_TYPE == "TEAM") {
      var DEPT = recVal.DEPT;
      var DIV = recVal.DIVS;
      for (var i = 0; i < this.lkpArrASSIGNEE_TEAMS.length; i++) {
        //if ( (this.lkpArrASSIGNEE_TEAMS[i].DEPT == DEPT) && (this.lkpArrASSIGNEE_TEAMS[i].DIV == DIV) )
        newlkpArrASSIGNEE.push(this.lkpArrASSIGNEE_TEAMS[i])
      }
    }
    else if (ASSIGNEE_TYPE == "PERSON") {
      var DEPT = recVal.DEPT;
      var DIV = recVal.DIVS;
      for (var i = 0; i < this.lkpArrASSIGNEE_PERSON.length; i++) {
        if ((this.lkpArrASSIGNEE_PERSON[i].TEAM == team))
          newlkpArrASSIGNEE.push(this.lkpArrASSIGNEE_PERSON[i])
      }
    }
    else if (ASSIGNEE_TYPE == "NETWORK")
      newlkpArrASSIGNEE = this.lkpArrASSIGNEE_NETWORK;
    else if (ASSIGNEE_TYPE == "API")
      newlkpArrASSIGNEE = this.lkpArrASSIGNEE_API;
    else if (ASSIGNEE_TYPE == "URL")
      newlkpArrASSIGNEE = this.lkpArrASSIGNEE_URL;
    else if (ASSIGNEE_TYPE == "NAVIGATE")
      newlkpArrASSIGNEE = this.lkpArrASSIGNEE_NAVIGATE;
      
    return newlkpArrASSIGNEE;
  }
  public valueChangeORDER_TYPE(value: any): void {
    //this.form.get('ORDER_TYPE').valueChanges.subscribe(val => {
    //this.lookupArrDef =[];
    //this.starServices.fetchLookups(this, this.lookupArrDef);
  }
  public valueChangeORDER_STATUS(value: any): void {
    //this.form.get('ORDER_STATUS').valueChanges.subscribe(val => {
    //this.lookupArrDef =[];
    //this.starServices.fetchLookups(this, this.lookupArrDef);
  }
  public valueChangeDEPT(value: any): void {
    /*if (this.paramConfig.DEBUG_FLAG) console.log("in valueChangeDEPT");
    if (this.paramConfig.DEBUG_FLAG) console.log(value);
  
    this.lookupArrDef =[	{"statment":"SELECT CODE,  CODETEXT_LANG FROM SOM_TABS_CODES WHERE CODENAME ='DIV' and LANGUAGE_NAME = '" + this.userLang + "'   and CODEVALUE_LANG = '" + value + "' order by CODETEXT_LANG ",
      "lkpArrName":"lkpArrDIV"}];
     this.starServices.fetchLookups(this, this.lookupArrDef);
     */
  }
  public getlkpArrDIV() {
    var newlkpArrDIV = [];
    var recVal = this.formGroup.value;
    var DEPT = recVal.DEPT;
    for (var i = 0; i < this.lkpArrDIV.length; i++) {
      if (this.lkpArrDIV[i].CODEVALUE_LANG == DEPT)
        newlkpArrDIV.push(this.lkpArrDIV[i])
    }
    return newlkpArrDIV;
  }
  public valueChangeDIV(value: any): void {
    var recVal = this.formGroup.value;
    if (this.paramConfig.DEBUG_FLAG) console.log("recVal: value:" + value);
    if (this.paramConfig.DEBUG_FLAG) console.log(recVal);
    var value = recVal.ASSIGNEE_TYPE;
    this.valueChangeASSIGNEE_TYPE(value);
  }
  public valueChangeASSIGNEE_TYPE(value: any): void {

  }

  public valueChangeASSIGNEE(value: any): void {
    //this.form.get('ASSIGNEE').valueChanges.subscribe(val => {
    //this.lookupArrDef =[];
    //this.starServices.fetchLookups(this, this.lookupArrDef);
  }
  public valueChangeTEMPLATE_NAME(value: any): void {
    //this.form.get('TEMPLATE_NAME').valueChanges.subscribe(val => {
    //this.lookupArrDef =[];
    //this.starServices.fetchLookups(this, this.lookupArrDef);
  }


  public printScreen() {
    window.print();
  }

  @Input() public set setComponentConfig_Input(ComponentConfig: componentConfigDef) {
    if (this.paramConfig.DEBUG_FLAG) console.log("ComponentConfig:");
    if (this.paramConfig.DEBUG_FLAG) console.log(ComponentConfig);

    if (typeof ComponentConfig !== "undefined") {
      this.componentConfig = this.starServices.setComponentConfig(ComponentConfig, this.componentConfig);

      if (ComponentConfig.showToolBar != null)
        this.showToolBar = ComponentConfig.showToolBar;

      if (ComponentConfig.isMaster == true) {
        this.isMaster = true;


      }

      if (ComponentConfig.masterSaved != null) {
        this.saveChanges(this.grid);
        ComponentConfig.masterSaved = null;
      }
      if (ComponentConfig.masterKey != null) {
        this.isORDER_NOEnable = false;
        this.masterKey = ComponentConfig.masterKey;
      }
      if (ComponentConfig.isChild == true) {
        this.isChild = true;
        this.isORDER_NOEnable = false;
      }
      if (ComponentConfig.insertable != null)
        this.insertable = ComponentConfig.insertable;

      if (ComponentConfig.formattedWhere != null) {
        this.formattedWhere = ComponentConfig.formattedWhere;
        this.isSearch = true;
        this.executeQuery(this.grid)

      }
      if (ComponentConfig.clearComponent == true) {
        this.cancelHandler();
        this.grid.cancel;
        this.grid.data = [];
        this.Body = [];
      }

      if (ComponentConfig.masterParams != null) {
        this.isReadOnly = ComponentConfig.masterParams.readOnly;
        this.gridHeight  = ComponentConfig.gridHeight;
      }
      if (ComponentConfig.showDiagram != null)
        this.showDiagram = ComponentConfig.showDiagram;
      if (ComponentConfig.showHideGridFlag != null)
        this.showHideGridFlag = ComponentConfig.showHideGridFlag;

      console.log("this.showDiagram:", this.showDiagram, ComponentConfig)
    }

  }

  getApprovalStatus(workOrders) {
    // if (!this.workOrders[index]) 
    //   return "Checking..."

    let lastWOApprovedFilter = workOrders.filter(wo => wo["WO_STATUS"] == this.paramConfig.APPROVED)
    let lastWORejectedFilter = workOrders.filter(wo => wo["WO_STATUS"] == this.paramConfig.REJECTED)

    if(lastWOApprovedFilter.length == workOrders.length)
      return "Request approved"
    
    if(lastWORejectedFilter.length == workOrders.length)
      return "Request rejected"

    if (lastWOApprovedFilter.length == 0 && lastWORejectedFilter.length == 0) {
      return "Waiting for leader approval"
    }

    if (lastWORejectedFilter.length > 0) {
      let lastWORejected = lastWORejectedFilter[lastWORejectedFilter.length - 1]
      return `Rejected by ${lastWORejected["ASSIGNEE_TYPE"] == "TEAM" ? `${lastWORejected["ASSIGNEE_TYPE"] + ' ' + lastWORejected["ASSIGNEE"]}` : `${lastWORejected["ASSIGNEE_TYPE"]}`}`;
    }
  

    let result = "Approved by ";
   
    workOrders.sort((f, s) => s["WO_STATUS"] - f["WO_STATUS"])
    console.log("workOrders:", workOrders)
    
    workOrders.every(wo => {
      if(wo["WO_STATUS"] == this.paramConfig.APPROVED) result += `${wo["ASSIGNEE_TYPE"] == "TEAM"||"PERSON" ? `${wo["ASSIGNEE_TYPE"] + ' ' + wo["ASSIGNEE"]}` : `${wo["ASSIGNEE_TYPE"]}`}`
      if(wo["WO_STATUS"] == this.paramConfig.CREATED || wo["WO_STATUS"] == "") result += ` waiting for ${wo["ASSIGNEE_TYPE"] == "TEAM"||"PERSON" ? `${wo["ASSIGNEE_TYPE"] + ' ' + wo["ASSIGNEE"]}` : `${wo["ASSIGNEE_TYPE"]}`}`
      if(wo["WO_STATUS"] == this.paramConfig.REJECTED) result += ` rejected by ${wo["ASSIGNEE_TYPE"] == "TEAM"||"PERSON" ? `${wo["ASSIGNEE_TYPE"] + ' ' + wo["ASSIGNEE"]}` : `${wo["ASSIGNEE_TYPE"]}`}`
      console.log("WO_STATUS:",  Number(wo["WO_STATUS"]) , Number(this.paramConfig.CREATED))
      if ( (Number(wo["WO_STATUS"]) == Number(this.paramConfig.CREATED) ) 
        || (Number(wo["WO_STATUS"]) == Number(this.paramConfig.ON_HAND) ) 
        || (Number(wo["WO_STATUS"]) == 0 )){
          console.log("WO_STATUS:match",Number(wo["WO_STATUS"]));
          return false;
        }
        return true;
    })
    
    return result;
    // let lastWOApproved = lastWOApprovedFilter[lastWOApprovedFilter.length - 1]
    // return `Approved by ${lastWOApproved["ASSIGNEE_TYPE"] == "TEAM" ? `${lastWOApproved["ASSIGNEE_TYPE"] + ' ' + lastWOApproved["ASSIGNEE"]}` : `${lastWOApproved["ASSIGNEE_TYPE"]}`}`;
  }

  showFormRequest(data) {
    this.DSP_ORDERSFormConfig = new componentConfigDef();
    this.DSP_ORDERSFormConfig.isMaster = true;
    this.DSP_ORDERSFormConfig.masterParams = {
      hideOthers: true,
      getOrder: true,
      order: data
    }
    
  }

  public showMultiStepForm(form:any) {
    this.Body = [];

    var Page = "&_trans=Y";

    var newVal = { "_QUERY": "GET_DSP_TEMPLATE", "TEMPLATE_NAME": form.TEMPLATE_NAME };
    this.Body.push(newVal);

    this.starServices.post(this, Page, this.Body).subscribe(result => {
      this.Body = [];
      let templateInfo = result.data[0].data[0];

      if ((form.ORDER_FIELDS == "") || (form.ORDER_FIELDS == null)) {
        form.ORDER_FIELDS = "{}";
      }

      var formPagesNo = "";
      var masterParams = {
        "formName": templateInfo.FORM_NAME,
        "formPagesNo": formPagesNo,
        "orderFields": form.ORDER_FIELDS,
        "isReadOnly": true,
        "addForm": form,
        "callingForm": "PRVORDEROV",
        "selectedData": []//this.selectedData
      };
      if (templateInfo.FORM_TYPE == "FORM"){
      this.DSP_MULTISTEPFormConfig = new componentConfigDef();
      this.DSP_MULTISTEPFormConfig.masterParams = masterParams;
      this.formRequestOpened = true;
      }
      else  if (templateInfo.FORM_TYPE == "SCREEN"){
        this.callScreen(templateInfo, masterParams)
      }
    });
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

  public toggleShowAll(){
    this.showAll = !this.showAll;
  }
  public colorCode(code: string) {
    
    let result='transparent';
    let rec =  this.lkpArrGetORDER_STATUS(code)
    //console.log("colorCode:",code, rec)
    if (typeof rec !== "undefined") 
      result = rec.PARTCODE;

    return (result);
  }
}


