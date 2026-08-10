import { Component, Input, Output, EventEmitter, HostListener, ViewChild } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { TabAlignment } from '@progress/kendo-angular-layout';
import { starServices } from 'starlib';
import { StarNotifyService } from '../../../services/starnotification.service';

import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { Starlib1 } from '../../Starlib1';
import { Subscription } from 'rxjs';
import { IntlService } from "@progress/kendo-angular-intl";
import { ViewEncapsulation } from "@angular/core";
import { Router } from '@angular/router';
import { aiaiAiForm, dynamic, componentConfigDef } from '@modeldir/model';
import JSON5 from 'json5'



const createFormGroup = (dataItem: any) => new FormGroup({
  'question': new FormControl(dataItem.question),
  
  
  
  'answer': new FormControl(dataItem.answer),
  'helpText': new FormControl(dataItem.helpText,),
  'LOGDATE': new FormControl(dataItem.LOGDATE,),
  'LOGNAME': new FormControl(dataItem.LOGNAME,)
});

declare function getParamConfig(): any;
@Component({
  selector: 'app-ai-ai-form',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './ai-ai-form.component.html',
  styleUrls: ['./ai-ai-form.component.scss']
})



export class AiAiAiFormFormComponent {
  @ViewChild('tabstrip') public tabstrip: any;
  public title = this.starServices.getNLS([], "AI_AI_FORM.aiaiAiForm.component_title", "AI FORM");
  public routineName = "AiAiAiFormForm";
  private insertCMD = "INSERT_AI";
  private updateCMD = "UPDATE_AI";
  private deleteCMD = "DELETE_AI";
  private getCMD = "GET_AI_QUERY";
  public alignment: TabAlignment = 'start';
  public value: Date = new Date(2019, 5, 1, 22);
  public format: string = 'MM/dd/yyyy HH:mm';
  public active = false;

  public form!: FormGroup;
  public PDFfileName = this.title + ".PDF";
  public componentConfig: componentConfigDef;
  public grid_DSP_DYNAMIC_RW: dynamic;
  public DSP_DYNAMIC_RWGridConfig: componentConfigDef;
  public DSP_DYNAMIC_RWWrapGridConfig: componentConfigDef;
  public fieldsOpened: boolean = false;
  public languageChanged;
  public editableMode = false;
  private CurrentRec = 0;
  public executeQueryresult: any;
  public isSearch!: boolean;
  public isChild: boolean = false;
  public isMaster: boolean = false;
  public isquestionEnable: boolean = true;

  public FORM_TRIGGER_FAILURE: any;
  public NOTFOUND: any;
  public disableEmitSave = false;
  public disableEmitReadCompleted = false;
  public children = ["any"];

  public action = "";
  private Body: any = [];
  private isNew!: boolean;
  public primarKeyReadOnlyArr = { isquestionreadOnly: false };
  public paramConfig;
  private masterKeyArr = [];
  private masterKeyNameArr = [];
  public masterKey = "";
  public masterKeyName = "question";
  public WhereClause = "";
  public OrderByClause = "";

  public formattedWhere: any = null;
  public submitted = false;
  public masterParams: any;
  public isPhonePortrait = false;
  public compSelector = 'app-ai-ai-form';
  public labelquestionTop = false;
  public labelquestionVisible = false;
  public labelanswerTop = false;
  public labelanswerVisible = true;
  public labelhelpTextTop = false;
  public labelhelpTextVisible = false;
  public labelLOGDATETop = false;
  public labelLOGDATEVisible = true;
  public labelLOGNAMETop = false;
  
  
  
  public labelLOGNAMEVisible = true;
  

  //@Input()  
  public showToolBar = false;
  @Output() readCompletedOutput: EventEmitter<any> = new EventEmitter();
  @Output() clearCompletedOutput: EventEmitter<any> = new EventEmitter();
  @Output() saveCompletedOutput: EventEmitter<any> = new EventEmitter();

  constructor(public router: Router, public intl: IntlService, public responsive: BreakpointObserver, private starNotify: StarNotifyService, private starlib1: Starlib1, public starServices: starServices) {
    this.router = router;
    this.componentConfig = new componentConfigDef();
    this.paramConfig = getParamConfig();
    this.componentConfig.queryable = true;
    this.componentConfig.navigable = true;
    this.componentConfig.insertable = true;
    this.componentConfig.removeable = true;
    this.componentConfig.updateable = true;
    this.componentConfig.enabled = true;

  }
  private componentConfigChangeEvent!: Subscription;
  public ngAfterViewInit() {
    this.starServices.setRTL();
    this.WHEN_NEW_FORM_INSTANCE();
    this.DSP_DYNAMIC_RWGridConfig = new componentConfigDef();
    this.DSP_DYNAMIC_RWGridConfig.gridHeight = "200";
    this.DSP_DYNAMIC_RWGridConfig.updateable = true;
    this.DSP_DYNAMIC_RWGridConfig.queryable = false;
    this.DSP_DYNAMIC_RWGridConfig.insertable = false;
    this.DSP_DYNAMIC_RWGridConfig.removeable = false;
  }
  async ngOnInit() {
    this.responsive
      .observe([Breakpoints.HandsetPortrait])
      .subscribe((state: BreakpointState) => {

        this.isPhonePortrait = false;
        if (state.matches) {
          this.isPhonePortrait = true;
        }

      });


    this.form = createFormGroup(
      this.formInitialValues
    );
    //this.executeQuery (this.form);

    //let Choice_cd = this.starlib1.get_application_property(this, 'Current_Form');
    //let P_Form_Ver = '1.0';
    // await this.starlib1.invoke_form(this.routineName);
    // await this.starlib1.global_program(Choice_cd, P_Form_Ver);



    this.onChanges();
    this.setlookupArrDef();
    this.form.reset(this.formInitialValues);
    this.onNew(this.form);

    // Subscribing the event.
    this.componentConfigChangeEvent = this.starNotify.subscribeEvent<componentConfigDef>('componentConfigDef', componentConfig => {
      if (componentConfig.eventFrom != this.compSelector) {
        if (componentConfig.eventTo.includes(this.compSelector) || componentConfig.eventTo.includes("any")) {
          this.handleComponentConfig(componentConfig);
        }
      }
    });


    //this.PRE_BLOCK();
    this.AttDwnUrl = this.starServices.SERVER_URL + "/api/att?action=download&username=" + this.starServices.sessionParams.USERNAME.toLowerCase() + "&name=";

  }

  public ngOnDestroy(): void {
    // Unsubscribe the event once not needed.
    if (typeof this.componentConfigChangeEvent !== "undefined") this.componentConfigChangeEvent.unsubscribe();
  }

  callStarNotify(componentConfig: any) {
    componentConfig.eventFrom = this.compSelector;
    this.starNotify.sendEvent<componentConfigDef>('componentConfigDef', componentConfig);
  }

  private formInitialValues: any = new aiaiAiForm();
  @Input() public set detail_Input(form: any) {
    if (this.paramConfig.DEBUG_FLAG) console.log('detail_Input AiAiAiFormForm form.question :' + form.question);
    if ((form.question != "") && (typeof form.question != "undefined")) {
      this.masterKey = form.question;

      this.isSearch = true;
      this.executeQuery(form);
      this.isChild = true;
      //this.showToolBar = false;
    }
    else {

      if (typeof this.form != "undefined") {
        //this.isChild = false;
        this.form.reset();
        this.masterKey = "";

      }
    }
  }
  @Input() public set executeQueryInput(form: any) {
    if ((typeof form != "undefined") && (typeof form.question != "undefined") && (form.question != "")) {

      this.isSearch = true;
      this.executeQuery(form);
      this.isChild = true;
      //this.showToolBar = false;
    }
    else {

      if (typeof this.form != "undefined") {
        //this.isChild = false;
        this.form.reset();
        this.masterKey = "";
      }
    }
  }

  get f(): any { return this.form.controls; }

  async callBackFunction(data: any) {
    if (this.paramConfig.DEBUG_FLAG) console.log("inside callBackFunction:data:", data);
    this.starServices.callGetSaveAttachemts("fetch", data, this);
    if (typeof data !== "undefined") {
      await this.POST_QUERY(data);
      await this.starServices.att_img_populateArrs(data, this);
      //this.form.markAsPristine();
      //this.form.markAsUntouched();
      //this.commonCallStarNotify(data);


    }
  }
  public commonCallStarNotify(data: any) {
    if (this.paramConfig.DEBUG_FLAG) console.log("trace:commonCallStarNotify:data", data);
    //data = this.masterKeyArr;
    if (this.paramConfig.DEBUG_FLAG) console.log("trace:commonCallStarNotify:data", data);
    let componentConfig = new componentConfigDef();
    let masterParams = {};

    masterParams = {
      "ITEM_TYPE": 'NAME',
      "ITEM_ID": this.COMP_ID,
      "UPDATE_RIGHT": false,
      data: []
    }

    let masterKeyArr = [data['USERNAME'], data['APP_ID']];
    let masterKeyNameArr = ['USERNAME', 'APP_ID'];
    //for (let i = 0; i < masterKeyNameArr.length; i++) {
    //  componentConfig.masterKeyNameArr[i] = masterKeyArr[i];
    //}
    componentConfig.masterKeyArr = masterKeyArr;
    componentConfig.masterKeyNameArr = masterKeyNameArr;
    componentConfig.masterReadCompleted = true;
    this.children = ["apg-app-flow"];
    componentConfig.eventTo = this.children;
    componentConfig.masterParams = masterParams;
    this.callStarNotify(componentConfig);
  }

  async executeQuery(form: any) {
    if (typeof form == "undefined")
      return;
    await this.PRE_QUERY(form);
    if (this.FORM_TRIGGER_FAILURE == true)
      return;
    if ((this.WhereClause != "") && (this.isSearch != true)) {
      this.formattedWhere = this.WhereClause;
      this.isSearch = true;
    }
    this.starServices.executeQuery_form(form, this); // Fuad: this should be form, and not this.form.value
  }

  private addToBody(NewVal: any) {
    this.Body.push(NewVal);
  }

  public onCancel(e: any): void {
    this.starServices.onCancel_form(e, this);
  }
  public fetchLookupsCallBack() {

    if (this.paramConfig.DEBUG_FLAG) console.log("this.lookupArrDef:", this.lkpArrCOMP_TYPE)
  }

  public onNew(e: any): void {
    if (this.paramConfig.DEBUG_FLAG) console.log("this.masterKeyNameArr:", this.masterKeyNameArr, "this.masterKeyNameArr.length", this.masterKeyNameArr.length)
    if (this.masterKeyNameArr.length != 0) {
      for (let i = 0; i < this.masterKeyNameArr.length; i++) {
        if (this.paramConfig.DEBUG_FLAG) console.log(this.masterKeyNameArr[i] + ":" + this.masterKeyArr[i])
        this.formInitialValues[this.masterKeyNameArr[i]] = this.masterKeyArr[i];
      }
    }
    else {
      if (this.paramConfig.DEBUG_FLAG) console.log(this.masterKeyName + this.masterKey)
      this.formInitialValues[this.masterKeyName] = this.masterKey;
    }

    this.starServices.onNew_form(e, this);
    this.setRequired();
    this.setInitialValues();
    this.WHEN_CREATE_RECORD();
    //this.KEY_CRREC();

  }
  public setInitialValues() {


    //this.form.patchValue({ 'GSM_OPERATOR': 'N' });
    this.form.markAsPristine();
    this.form.markAsUntouched();

  }
  public setRequired() {
    //this.form.controls['GOVERNATE'].setValidators([Validators.required]);
  }



  async onRemove(form: any) {
    await this.PRE_DELETE(form.value);
    //await this.KEY_DELREC();
    if (this.FORM_TRIGGER_FAILURE)
      return;

    this.starServices.onRemove_form(form, this);
  }

  async enterQuery(form: any) {

    this.starServices.enterQuery_form(form, this);

    await this.KEY_ENTQRY();
  }

  async callBackPost_Insert(NewVal: any) {
    if (this.paramConfig.DEBUG_FLAG) console.log("callBackPost_Insert:", " NewVal:", NewVal)
    this.commonCallStarNotify(NewVal);
    if (this.FORM_TRIGGER_FAILURE) {
      this.starServices.endTrans(this, false);
      return;
    }
    await this.POST_INSERT(NewVal);
    if (this.FORM_TRIGGER_FAILURE) {
      this.starServices.endTrans(this, false);
      return;
    }

    if (this.paramConfig.DEBUG_FLAG) console.log("testing  post POST_INSERT : ", this.FORM_TRIGGER_FAILURE)
    if (!this.FORM_TRIGGER_FAILURE) {
      this.saveCompletedOutput.emit(this.form.value);
    }
  }
  async callBackPost_Update(NewVal: any) {
    if (this.paramConfig.DEBUG_FLAG) console.log("callBackPost_Update:", " NewVal:", NewVal);
    this.commonCallStarNotify(NewVal);
    await this.POST_UPDATE(NewVal);
  }

  async callBackPost_Remove(NewVal: any) {
    if (this.paramConfig.DEBUG_FLAG) console.log("callBackPost_Remove:", " NewVal:", NewVal);
    this.commonCallStarNotify("");
    await this.POST_DELETE(NewVal);
  }

  async saveChanges(form: any) {
    this.FORM_TRIGGER_FAILURE = false;
    this.Body = [];




    this.form.markAllAsTouched();

    await this.WHEN_VALIDATE_RECORD(form.value);
    if (this.FORM_TRIGGER_FAILURE)
      return;

    //this.starServices.beginTrans();

    if (this.isNew == true) {
      this.disableEmitSave = true;
      await this.PRE_INSERT(form.value);
      if (this.FORM_TRIGGER_FAILURE) {
        this.starServices.endTrans(this, false);
        return;
      }

    }
    else {

      await this.PRE_UPDATE(form.value);
      if (this.FORM_TRIGGER_FAILURE) {
        this.starServices.endTrans(this, false);
        return;
      }

    }
    if (this.form.valid == false) {
      let invalid = this.starlib1.getInvalidControls(this);
      this.FORM_TRIGGER_FAILURE = true;
      this.starServices.endTrans(this, false);
      return;
    }


    if (!this.FORM_TRIGGER_FAILURE) {
      await this.KEY_COMMIT();
      if (this.FORM_TRIGGER_FAILURE == true) {
        this.starServices.endTrans(this, false);
        return;
      }
      this.starServices.callGetSaveAttachemts("save", "", this);
      this.starServices.saveChanges_form(form, this);
    }

  }


  public goRecord(target: any): void {
    this.starServices.goRecord(target, this);
  }

  public userLang = "EN";
  public lookupArrDef: any = [];

  public setlookupArrDef() {
    this.lookupArrDef = [
      {
        "statment": "SELECT CODE, CODETEXT_LANG  FROM SOM_TABS_CODES WHERE CODENAME ='COMP_TYPE' "
          + " and LANGUAGE_NAME = '" + this.userLang + "' order by CODETEXT_LANG",
        "lkpArrName": "lkpArrCOMP_TYPE"
      },
      {
        "statment": "SELECT CODE, CODETEXT_LANG , PARTCODE FROM SOM_TABS_CODES WHERE CODENAME ='COMP_ATT_ID' "
          + " and PARTCODE like 'TRIG' "
          + " and LANGUAGE_NAME = '" + this.userLang + "' order by CODETEXT_LANG",
        "lkpArrName": "lkpArrTRIG"
      },
      {
        "statment": "SELECT CODE, CODETEXT_LANG , PARTCODE FROM SOM_TABS_CODES WHERE CODENAME ='COMP_ATT_ID' "
          + " and PARTCODE like 'ATT' "
          + " and LANGUAGE_NAME = '" + this.userLang + "' order by CODETEXT_LANG",
        "lkpArrName": "lkpArrATT"
      },
    ];
    this.starServices.fetchLookups(this, this.lookupArrDef);
  }
  public lkpArrCOMP_TYPE = [];
  public lkpArrTRIG = [];
  public lkpArrATT = [];
  onChanges(): void {
    this.form.get('question').valueChanges.subscribe(val => {
    });
    this.form.get('answer').valueChanges.subscribe(val => {
    });
    this.form.get('helpText').valueChanges.subscribe(val => {
    });
    this.form.get('LOGNAME').valueChanges.subscribe(val => {
    });


    
    
  }


  public printScreen() {
    window.print();
  }
  questionPlaceholder = "";
  public handleComponentConfig(ComponentConfig: any) {
    if (typeof ComponentConfig !== "undefined") {
      if (this.paramConfig.DEBUG_FLAG) console.log("AiAiAiFormForm ComponentConfig:", ComponentConfig);

      this.componentConfig = this.starServices.setComponentConfig(ComponentConfig, this.componentConfig);
      if (ComponentConfig.isMaster == true)
        this.isMaster = true;

      if (ComponentConfig.masterSaved != null) {
        this.saveChanges(this.form);
        ComponentConfig.masterSaved = null;
      }
      if (ComponentConfig.masterKey != null) {

        this.masterKey = ComponentConfig.masterKey;
      }
      if (ComponentConfig.masterKeyArr != null) {
        this.masterKeyArr = ComponentConfig.masterKeyArr;
      }
      if (ComponentConfig.masterKeyNameArr != null) {
        this.masterKeyNameArr = ComponentConfig.masterKeyNameArr;
      }
      if (ComponentConfig.masterParams != null) {
        if (this.paramConfig.DEBUG_FLAG) console.log("ComponentConfig.masterParams:", ComponentConfig.masterParams);
        this.formInitialValues['helpText'] = ComponentConfig.masterParams.editorPlaceholder;
        
        

        this.form = createFormGroup(
          this.formInitialValues
        );
        this.questionPlaceholder = ComponentConfig.masterParams.questionPlaceholder;
        if (this.paramConfig.DEBUG_FLAG) console.log("this.form.value:", this.form.value);
        this.masterParams = ComponentConfig.masterParams;
      }

      if (ComponentConfig.formattedWhere != null) {
        this.formattedWhere = ComponentConfig.formattedWhere;
        this.isSearch = true;
        this.executeQuery(this.form)

      }
      if (ComponentConfig.masterReadCompleted != null) {
        this.isSearch = false;
        this.isChild = true;
        this.executeQuery(this.form.value)
      }
      if (ComponentConfig.clearComponent == true) {
        this.onCancel(this.form)
      }
      if (ComponentConfig.isChild == true) {
        this.isChild = true;
      }
      if (ComponentConfig.languageChanged != null) {
        this.userLang = ComponentConfig.languageChanged;
        this.setlookupArrDef();
      }


    }
  }
  @Input() public set setComponentConfig_Input(ComponentConfig: componentConfigDef) {
    this.handleComponentConfig(ComponentConfig);


  }

  WHEN_NEW_FORM_INSTANCE() {


  }
  WHEN_CREATE_RECORD() {


  }
  KEY_ENTQRY() {


  }
  KEY_DELREC() {


  }
  async WHEN_VALIDATE_RECORD(formGroup) {


  }
  async PRE_UPDATE(formGroup) {

  }
  async POST_UPDATE(formGroup) {


  }
  async KEY_COMMIT() {


  }
  async ON_CLICK(formGroup) {


  }
  async PRE_INSERT(formGroup) {


  }
  async POST_INSERT(formGroup) {


  }
  async PRE_QUERY(formGroup) {


  }
  async POST_QUERY(formGroup) {


  }
  async PRE_DELETE(formGroup: any) {


  }
  async POST_DELETE(formGroup: any) {


  }



  async WHEN_VALIDATE_ITEM_question(value) {

    this.FORM_TRIGGER_FAILURE = false;
    this.form.controls['question'].setErrors({ invalid: true });
    // Code goes here 


    if (this.FORM_TRIGGER_FAILURE == true)
      return;

    this.form.get('question').updateValueAndValidity();
    this.form.updateValueAndValidity();
  }

  async ON_CLICK_question(event) {

  }

  async WHEN_VALIDATE_ITEM_answer(value) {

    this.FORM_TRIGGER_FAILURE = false;
    this.form.controls['answer'].setErrors({ invalid: true });
    // Code goes here 


    if (this.FORM_TRIGGER_FAILURE == true)
      return;

    this.form.get('answer').updateValueAndValidity();
    this.form.updateValueAndValidity();
  }

  async ON_CLICK_answer(event) {

  }

  async WHEN_VALIDATE_ITEM_helpText(value) {

    this.FORM_TRIGGER_FAILURE = false;
    this.form.controls['helpText'].setErrors({ invalid: true });
    // Code goes here 


    if (this.FORM_TRIGGER_FAILURE == true)
      return;

    this.form.get('helpText').updateValueAndValidity();
    this.form.updateValueAndValidity();
  }

  async ON_CLICK_helpText(event) {

  }

  async WHEN_VALIDATE_ITEM_LOGDATE(value) {

    this.FORM_TRIGGER_FAILURE = false;
    this.form.controls['LOGDATE'].setErrors({ invalid: true });
    // Code goes here 


    if (this.FORM_TRIGGER_FAILURE == true)
      return;

    this.form.get('LOGDATE').updateValueAndValidity();
    this.form.updateValueAndValidity();
  }

  async ON_CLICK_LOGDATE(event) {

  }

  async WHEN_VALIDATE_ITEM_LOGNAME(value) {

    this.FORM_TRIGGER_FAILURE = false;
    this.form.controls['LOGNAME'].setErrors({ invalid: true });
    // Code goes here 


    if (this.FORM_TRIGGER_FAILURE == true)
      return;

    this.form.get('LOGNAME').updateValueAndValidity();
    this.form.updateValueAndValidity();
  }

  async ON_CLICK_LOGNAME(event) {

  }








  async onValueChange_question(value) {
    this.FORM_TRIGGER_FAILURE = false;
    await this.WHEN_VALIDATE_ITEM_question(value); if (this.FORM_TRIGGER_FAILURE) return;
  }
  async onValueChange_answer(value) {
    this.FORM_TRIGGER_FAILURE = false;
    await this.WHEN_VALIDATE_ITEM_answer(value); if (this.FORM_TRIGGER_FAILURE) return;
  }
  async onValueChange_helpText(value) {
    this.FORM_TRIGGER_FAILURE = false;
    await this.WHEN_VALIDATE_ITEM_helpText(value); if (this.FORM_TRIGGER_FAILURE) return;
  }
  async onValueChange_LOGDATE(value) {
    this.FORM_TRIGGER_FAILURE = false;
    await this.WHEN_VALIDATE_ITEM_LOGDATE(value); if (this.FORM_TRIGGER_FAILURE) return;
  }
  async onChange_LOGNAME(event: any) {
    var value = event.target.value;
    if ((value == null) || (value == ''))
      return;
    this.FORM_TRIGGER_FAILURE = false;
    await this.WHEN_VALIDATE_ITEM_LOGNAME(value); if (this.FORM_TRIGGER_FAILURE) return;
  }

  // For Adding new CODE
  public grid_som_tabs_codes = {};
  public SOM_TABS_CODESConfig!: componentConfigDef;

  public app_adm_ailog = {};
  public APP_ADM_AILOGConfig!: componentConfigDef;
  public MERMAIDConfig!: componentConfigDef;


  public filterCode!: string;
  public showCodeDetails: boolean = false;

  // For Attachments and images
  public myFiles = [[]];
  public filesDeleted = [[]];
  public img_gallery = [[]];
  public DSP_UPLOADConfig!: componentConfigDef;
  public att_arr = [];
  public img_arr = [];
  public AttDwnUrl = "";
  public uploadimage = false;

  public async att_img_saveFormCompleted(field_id) {
    if (this.paramConfig.DEBUG_FLAG) console.log("att_img_saveFormCompleted:", field_id, this.form.value[field_id])
    let routine = "WHEN_VALIDATE_ITEM_" + field_id;
    await this[routine](this.form.value[field_id]);
  }

  public answers = [

  ];



  async getThisLog(logID) {

    let whereClause = "  LOG_ID= '" + logID + "'";
    let body = [
      {
        "_QUERY": "GET_ADM_AI_LOG_HEAD_QUERY",
        "_WHERE": whereClause
      }
    ]
    if (this.paramConfig.DEBUG_FLAG) console.log("getThisLog:body:", body)

    let logHead = await this.starServices.execSQLBody(this, body, "");
    if (logHead[0].data.length != 0) {
      if (this.paramConfig.DEBUG_FLAG) console.log("getThisLog:logHead:", logHead[0].data[0])
      let logHeadRec = logHead[0].data[0];
      let requestedOn = logHeadRec.REQUESTED_ON;
      // if (this.masterParams.data.APP_ID != logHeadRec.AI_ENTITY_ID) {
      //   this.sameApp = false;
      //   let msg = "Simulate not match Current App :." + this.masterParams.data.APP_ID + " while for " + logHeadRec.LOG_ID + " is : " + logHeadRec.AI_ENTITY_ID;
      //   let dialogStruc = {
      //     msg: msg,
      //     title: "Error",
      //     info: null,
      //     object: this,
      //     action: this.starServices.OkActions,
      //     callback: null
      //   };
      //   this.starServices.showConfirmation(dialogStruc);
      //   return;
      // }
      let whereClause = "  REQUESTED_ON = '" + requestedOn + "'";
      let body = [
        {
          "_QUERY": "GET_ADM_AI_LOG_DETAIL_QUERY",
          "_WHERE": whereClause
        }
      ];
      let logDetail = await this.starServices.execSQLBody(this, body, "");
      if (logDetail[0].data.length != 0) {
        if (this.paramConfig.DEBUG_FLAG) console.log("getThisLog:logDetail:", logDetail[0].data)
        for (let i = 0; i < logDetail[0].data.length; i++) {
          this.answers[i] = logDetail[0].data[i].ANSWER;
        }
        if (this.paramConfig.DEBUG_FLAG) console.log("getThisLog:answers:", this.answers)

      }

    }
  }

  async insertAILogHead() {
    if (this.simulate)
      return;
    let body = [
      {
        "_QUERY": "INSERT_ADM_AI_LOG_HEAD",
        "USERNAME": this.starServices.MASTER_DB,
        "APP_ID": this.masterParams.data.APP_ID,
        "AI_ACTION_ID": this.masterParams.data.AI_ACTION_ID,
        "AI_ENTITY_ID": this.masterParams.data.AI_ENTITY_ID,
        "REQUESTED_ON": this.masterParams.data.REQUESTED_ON,
        "DURATION": 0,
        "LOGNAME": this.starServices.MASTER_DB,
        "LOGDATE": new Date()
      }
    ]
    if (this.paramConfig.DEBUG_FLAG) console.log("Checking:insertAILogHead:body:", body)
    let data = await this.starServices.execSQLBody(this, body, "");
  }

  async updateAILogHead() {
    if (this.simulate)
      return;

    let body = [
      {
        "_QUERY": "UPDATE_ADM_AI_LOG_HEAD",
        "USERNAME": this.starServices.MASTER_DB,
        "APP_ID": this.masterParams.data.APP_ID,
        "AI_ACTION_ID": this.masterParams.data.AI_ACTION_ID,
        "AI_ENTITY_ID": this.masterParams.data.AI_ENTITY_ID,
        "REQUESTED_ON": this.masterParams.data.REQUESTED_ON,
        "DURATION": this.masterParams.data.DURATION,
        "LOGNAME": this.starServices.MASTER_DB,
        "LOGDATE": new Date()
      }
    ]
    if (this.paramConfig.DEBUG_FLAG) console.log("Checking:updateAILogHead:body:", body)
    let data = await this.starServices.execSQLBody(this, body, "");
  }


  async insertAILogDetail(Question, Stage) {
    if (this.simulate)
      return;

    let body = [
      {
        "_QUERY": "INSERT_ADM_AI_LOG_DETAIL",
        "USERNAME": this.starServices.MASTER_DB,
        "APP_ID": this.masterParams.data.APP_ID,
        "AI_ACTION_ID": this.masterParams.data.AI_ACTION_ID,
        "AI_ENTITY_ID": this.masterParams.data.AI_ENTITY_ID,
        "REQUESTED_ON": this.masterParams.data.REQUESTED_ON,
        "DURATION": 0,
        "AI_SEQ": this.masterParams.data.AI_SEQ,
        "STAGE": Stage,
        "QUESTION": Question,
        "ANSWER": "",
        "LOGNAME": this.starServices.MASTER_DB,
        "LOGDATE": new Date()
      }
    ]
    if (this.paramConfig.DEBUG_FLAG) console.log("Checking:insertAILogDetail:body:", body)
    let data = await this.starServices.execSQLBody(this, body, "");
  }
  async updateAILogDetail(Question, Answer, Stage) {
    if (this.simulate)
      return;

    let body = [
      {
        "_QUERY": "UPDATE_ADM_AI_LOG_DETAIL",
        "USERNAME": this.starServices.MASTER_DB,
        "APP_ID": this.masterParams.data.APP_ID,
        "AI_ACTION_ID": this.masterParams.data.AI_ACTION_ID,
        "AI_ENTITY_ID": this.masterParams.data.AI_ENTITY_ID,
        "REQUESTED_ON": this.masterParams.data.REQUESTED_ON,
        "DURATION": this.masterParams.data.DURATION,
        "AI_SEQ": this.masterParams.data.AI_SEQ,
        "STAGE": Stage,
        "QUESTION": Question,
        "ANSWER": Answer,
        "LOGNAME": this.starServices.MASTER_DB,
        "LOGDATE": new Date()
      }
    ]
    if (this.paramConfig.DEBUG_FLAG) console.log("Checking:updateAILogDetail:body:", body)
    let data = await this.starServices.execSQLBody(this, body, "");
  }

  public separateInsertQuestion = true;

  public diagramOperations ;
  public simulate = true;
  public sampleData = true;
  //use 595 for HC
  //789 : MED2 : button on Grid
  // 898 : multi, 897 single
  public logID = 37; // 37;  
  public showMsg(Msg, Title) {
    var dialogStruc = {
      msg: Msg,
      title: Title,
      info: null,
      object: this,
      action: this.starServices.OkActions,
      callback: null
    };
    this.starServices.showConfirmation(dialogStruc);
  }
  public systemMsgs = [
    "You are an expert in Kendo UI Diagram for Angular. "
    + " === RESPONSE FORMAT ==="
    + " Your JSON response MUST follow this EXACT structure below, and the word [COMPLETE] is added after JSON as shown below :"
    + " ```json "
    + " { "
    + "// Your JSON content here "
    + "}"
    + " ``` \n"
    + "[COMPLETE] \n"
    +
    `
     === DIAGRAM OPERATIONS TRACKING ===
You MUST include a "diagramOperations" array as the FIRST property in your JSON response.

Structure:
"diagramOperations": [
{
"operation": "create" | "update" | "delete" | "no_change",
"target": "shape" | "connection" | "shapeDefaults" | "connectionDefaults" | "layout",
"id": "motor1", // required for shape/connection operations
"status": "success" | "not_found" | "error",
"message": "Brief description of what was done"
}
]

RULES for diagramOperations:

    If user requests to MODIFY an object:

        Check if the object ID exists in the current diagram

        If EXISTS → status: "success", operation: "update"

        If NOT EXISTS → status: "not_found", operation: "update", message: "Object 'X' not found"

    If user requests to DELETE an object:

        Check if the object ID exists

        If EXISTS → status: "success", operation: "delete", REMOVE the object

        If NOT EXISTS → status: "not_found", operation: "delete", message: "Cannot delete: 'X' not found"

    If user requests to CREATE a new object:

        status: "success", operation: "create", ADD the new object

    If user makes NO changes request:

        operation: "no_change", status: "success", message: "No modifications requested"

    ALWAYS include this array, even for "no_change"

=== CRITICAL: CONTAINER & RELATIVE POSITIONING RULES ===
⚠️ THIS IS THE MOST IMPORTANT RULE FOR DIAGRAM STRUCTURE:

    Each ShapeOption is a CONTAINER:

        x, y: Absolute position on the 1200x900 canvas

        width, height: Container size

        The container itself is NOT drawn - it's just a bounding box

    ALL children inside definition.shapes use RELATIVE positioning:

        Child x: 0 = container's left edge

        Child y: 0 = container's top edge

        Child x/y are RELATIVE to the container, NOT absolute on canvas

    Example of CORRECT structure:
    {
    "id": "motor1",
    "x": 100, // ← Container absolute position
    "y": 350, // ← Container absolute position
    "width": 200, // ← Container size
    "height": 200, // ← Container size
    "dataItem": {
    "definition": {
    "shapes": [
    {
    "id": "motor-body",
    "x": 0, // ← RELATIVE to container (starts at 100)
    "y": 0, // ← RELATIVE to container (starts at 350)
    "width": 200,
    "height": 200
    },
    {
    "id": "motor-top",
    "x": 25, // ← RELATIVE: 100+25 = 125 on canvas
    "y": -20, // ← RELATIVE: 350-20 = 330 on canvas
    "width": 150,
    "height": 40
    }
    ]
    }
    }
    }

    For placeholder shapes:

        Create a single placeholder shape at x:0, y:0

        Add "placeholder": true to identify it

        This will be replaced with the full definition later

    NO absolute positioning inside definition.shapes

        All x/y inside definition.shapes MUST be relative to the container

        This allows easy merging without complex transformations

    When creating the initial diagram:

        ShapeOptions have the container position (x, y) on the canvas

        Each ShapeOption contains a placeholder at x:0, y:0

        The placeholder has "placeholder": true

=== FILL PROPERTY RULES ===

    ONLY use solid hex colors: #a0a0a0, #6a6a6a, #4a4a4a, #3399ff, #ff6600

    DO NOT use: "linear-gradient()", "radial-gradient()", or CSS gradient strings

    Use solid colors with different shades for depth:

        Top: lighter shade #b0b0b0

        Body: medium shade #a0a0a0

        Bottom: darker shade #808080

    Water effects: #3399ff with opacity: 0.6

    Fire/flame: #ff6600 or #ff4400 with opacity: 0.8

=== LAYOUT RULES ===

    Canvas: 1200x900

    50px margin from edges

    100-150px padding between components

    Include descriptive text labels

    NO "fontStyle" property - use "font" string only

    NO legend box in DiagramDefinition

=== CRITICAL RULES - Per-Definition Approach ===

    NO definitionId strings

    Embed COMPLETE DiagramDefinition in dataItem.definition

    Each shape type gets its own full definition

    ShapeOptions is an array - each entry is one visual instance

    No external references - everything inside dataItem.definition

=== OUTPUT RULES ===

    Return a single JSON object only

    NO explanation text outside JSON

    All IDs must be unique and descriptive

    Valid JSON only

    REMEMBER: Children use RELATIVE positioning inside definition.shapes
    REMEMBER: to add [COMPLETE] at end of JSON structure
              
    `
  ];

  public isComplete = false;
  public sameApp = true;

  async callAI_API(qCode, Question, cursystemMsg, Stage) {
    let answer;
    this.isComplete = true;
    this.sameApp = true;

    this.masterParams.data.SENT_ON = new Date();
    this.masterParams.data.AI_SEQ = qCode;
    this.insertAILogDetail(Question, Stage);
    if (this.simulate) {
      if (qCode == 0) {
        await this.getThisLog(this.logID);
        if (!this.sameApp)
          return;
      }
      console.log("this.answers.length:", this.answers.length, "qCode:", qCode, "this.singleMultiMsg:", this.singleMultiMsg)
      answer = this.answers[qCode];
      answer = answer.replace('[COMPLETE]', '');
      
      if (this.answers.length >= 3) {
        if (qCode == 0) {
          answer = this.answers[qCode];
          answer = answer.replace('[COMPLETE]', '');
        }
        else {
          answer = this.answers[Stage];
          answer = answer.replace('[COMPLETE]', '');
        }
      


      }
      else {
        answer = this.answers[qCode];
        answer = answer.replace('[COMPLETE]', '');
      }

      //answer = this.answers_tasks[qCode];
      //answer = this.answersWildLif[qCode];


      if (this.paramConfig.DEBUG_FLAG) console.log("qCode answer:", qCode, answer);
      let now: any = new Date();
      if (this.paramConfig.DEBUG_FLAG) console.log("checking:", now, this.masterParams.data.SENT_ON)
      this.masterParams.data.DURATION = (now.getTime() - this.masterParams.data.SENT_ON.getTime()) / (1000);
      this.updateAILogDetail(Question, answer, Stage);



      return answer;
    }
    else {
      if (this.paramConfig.DEBUG_FLAG) console.log("Question:", Question)
      let Body = [];
      var page = "";
      var url = this.starServices.SERVER_URL + '/api/appgen?action=callAI';
      var newVal = {};
      //if (this.paramConfig.DEBUG_FLAG) console.log("this.starServices.MASTER_DB:", this.starServices.MASTER_DB)
      newVal["question"] = Question;
      newVal["AI_PROVIDER"] = "DEEPSEEK";
      //newVal["AI_PROVIDER"] = "OPENAI";
      newVal["systemContent"] = cursystemMsg

      if (this.paramConfig.DEBUG_FLAG) console.log("newVal:", newVal)
      Body.push(newVal);
      let respone;
      this.helpText = this.helpText + "thinking... ";
      this.form.patchValue({ 'helpText': this.helpText });

      return new Promise(resolve => {
        this.starServices.postCommand(page, url, Body).subscribe(result => {
          this.helpText = this.helpText + " Done.\n";
          this.form.patchValue({ 'helpText': this.helpText });
          //if (this.paramConfig.DEBUG_FLAG) console.log("testx:execSQL:sqlStmt:result.data[0]:", Body, result.data[0])
          //if (this.paramConfig.DEBUG_FLAG) console.log("testx:execSQL:sqlStmt:result.data[0]:", Body, result.data)
          respone = result.data;
          // if (result.data.length == 0)
          //   object.NOTFOUND = true;
          let answer = respone.content;
          if (this.paramConfig.DEBUG_FLAG) console.log("answer:", respone.content)

          let now: any = new Date();
          if (this.paramConfig.DEBUG_FLAG) console.log("checking:", now, this.masterParams.data.SENT_ON)
          this.masterParams.data.DURATION = (now.getTime() - this.masterParams.data.SENT_ON.getTime()) / (1000);
          this.updateAILogDetail(Question, answer, Stage);

          if (answer.includes('[COMPLETE]')) {
            this.isComplete = true;
            answer = answer.replace('[COMPLETE]', '');
          }
          else {
            this.isComplete = false;
            let msg = "Answer not complete. Trye again."
            let dialogStruc = {
              msg: msg,
              title: "Error",
              info: null,
              object: this,
              action: this.starServices.OkActions,
              callback: null
            };
            this.starServices.showConfirmation(dialogStruc);
          }

          return resolve(answer);
        },
          err => {

            alert('error callAI_API:' + err.message);
            let Msg = this.starServices.getNLS([], 'ERROR_callAI_API', 'Error callAI_API ');
            this.showMsg(Msg, "Error");
            return resolve(answer);
          });
      });


    }

  }
  public helpText = "";

  async parseandProcessCreateDwg(answer) {
    this.helpText = this.helpText + "Got Dwg Def: \n";
    this.form.patchValue({ 'helpText': this.helpText });
    let n = answer.indexOf("```json");
    if (n != -1)
      n = answer.indexOf("{");
      
    let answerDwg = answer.slice(n);
    console.log("answerDwg:", n, answerDwg, answer)
    let dwgDefTxt = answerDwg.split("```");
    console.log("dwgDefTxt::", dwgDefTxt)
    let dwgDef = JSON.parse(dwgDefTxt[0]);
    console.log("dwgDef:", dwgDef)
    this.diagramOperations = dwgDef['diagramOperations']
   let shapeOptions = dwgDef['shapeOptions']
   for (let i =0; i < shapeOptions.length; i++) {
      let id = shapeOptions[i].id;
      this.helpText = this.helpText + "Got shape " + id + ":\n";
      this.form.patchValue({ 'helpText': this.helpText });

    }
     
    
  
    //console.log("tableNamesArr:return:", tableNamesArr)
    
    return dwgDef;

  }
  public COMP_ID;




















  buildScreenToDisplayQuestion2Loop(dwgDef, id) {

    console.log("Question2:dwgDef:", dwgDef)

    let DB_ADAPTOR = this.starServices.sessionParams["DB_ADAPTOR"];
    let Question2 = "I need you to generate a JSON configuration for a Kendo UI diagram for shape:" + id  + " ONLY "
    + `
    ## CRITICAL: This is a DETAILED shape definition, NOT a placeholder!
    Please generate the FULL visual representation  with ALL details.

    ## Target JSON Structure:

    interface KendoDiagramConfig {
      shapeDefaults: {
        visual: null;
        fill: string;
        stroke: { color: string; width: number };
      };
      connectionDefaults: {
        stroke: { color: string; width: number; dashType?: string };
      };
      layout: {
        type: "tree" | "layered" | "force" | "grid";
        subtype?: "tipover" | "horizontal" | "vertical";
      };
    }

    interface DiagramDefinition {
      shapes: Array<{
        id: string;
        x: number;      // RELATIVE to container (0 = container left edge)
        y: number;      // RELATIVE to container (0 = container top edge)
        width: number;
        height: number;
        fill?: string;
        stroke?: { color: string; width: number };
        cornerRadius?: number;
        opacity?: number;
        shape?: "rectangle" | "circle";
      }>;
      textBlocks: Array<{
        id: string;
        x: number;      // RELATIVE to container
        y: number;      // RELATIVE to container
        text: string;
        font?: string;
        fill?: string;
        textAnchor?: "start" | "middle" | "end";
        opacity?: number;
      }>;
      lines: Array<{
        id: string;
        from?: { x: number; y: number };  // RELATIVE to container
        to?: { x: number; y: number };    // RELATIVE to container
        path?: string;
        stroke?: { color: string; width: number; dashType?: string };
        opacity?: number;
      }>;
      connections: Array<{
        from: string;
        to: string;
        stroke?: { color: string; width: number; dashType?: string };
      }>;
    }

    interface ShapeOption {
      id: string;
      x: number;        // Absolute position on canvas (container position)
      y: number;        // Absolute position on canvas (container position)
      width: number;    // Container width
      height: number;   // Container height
      dataItem: {
        type: string;
        definition: DiagramDefinition;  // ALL children use RELATIVE positioning
        title?: string;
        offsetX?: number;
        offsetY?: number;
        customColors?: any;
      };
    }

    ## CRITICAL RULES FOR DETAILED DEFINITION:



    3. Use RELATIVE positioning inside definition.shapes (x:0, y:0 is top-left of container)
    4. Use ONLY solid hex colors: #a0a0a0, #6a6a6a, #4a4a4a, #b0b0b0, #808080, #3399ff, #ff6600
    5. Include descriptive text labels for all major parts
    6. All IDs must be unique and descriptive

    ## Container Position:
    - The container is at x:100, y:350 with width:200, height:200
    - ALL shapes inside use RELATIVE positioning (0,0 = container top-left)
    - The container position (100, 350) will be added by the system

    ## Output Structure:
    Return a single JSON object with:
    {
      "shapeDefaults": { ... },
      "connectionDefaults": { ... },
      "layout": { ... },
      "shapeOptions": [
        {
          "id": "motor1",
          "x": 100,
          "y": 350,
          "width": 200,
          "height": 200,
          "dataItem": {
            "type": "motor",
            "title": "Motor 1",
            "definition": {
              "shapes": [
                // FULL DETAILED SHAPES HERE - NOT PLACEHOLDERS!
                // Include body, top, fan, shaft, bolts, etc.
              ],
              "textBlocks": [
                // FULL TEXT LABELS HERE
                // Include "MOTOR", specs, labels for parts
              ],
              "lines": [
                // FULL LINES HERE
                // Include power lines, ground lines, etc.
              ],
              "connections": []
            }
          }
        }
      ],
      "connections": []
    }

    ## IMPORTANT REMINDERS:
    - DO NOT use placeholder: true - this is a REAL detailed definition
    - ALL shapes inside definition.shapes use RELATIVE positioning
    - The shape should look detailed and realistic
    - Include at least 5-8 shapes, 3-4 textBlocks, and 2-3 lines
    - Use proper colors for appearance.


    `
    Question2 = Question2 + " as per earlier provided requirement. \n"
    // Question2 = Question2 + ".  Based on the requirements provided earlier stated again to maintain the context  :"
    // Question2 = Question2 + this.form.value['question']
    

    console.log("Question2:", Question2)
    return Question2;
  }


  public showAiLog = false;
  submitshowAiLog() {
    this.showAiLog = true;
  }
  public somBody = [];
  public showLog = false;
  public hideSubmit = false;
  public answer = "";
  public answer_dwg = "";
  public answer_relations = "";
  public compsArray = [];
  public DSP_DYNAMIC_RW: any = [];
  public ComponentsMapsArr: any = {};
  public createdComponentsArr = [];



  public tableNamesArr = [];

  getJsonArr(answer, KeyToGet) {
    if (this.paramConfig.DEBUG_FLAG) console.log("getJsonArr:answer:", answer)
    let valFound;
    let prefix = "```json";
    let suffix = "```";
    let jsonArrays = answer.split("```json")
    for (let i = 1; i < jsonArrays.length; i++) {
      if (this.paramConfig.DEBUG_FLAG) console.log("getJsonArr:jsonArrays[i]:", jsonArrays[i]);
      //let n1 = answer.indexOf(prefix);
      let n1 = 0;
      let n2 = jsonArrays[i].indexOf(suffix);
      if (this.paramConfig.DEBUG_FLAG) console.log("getJsonArr:n1, n2:", n1, n2);


      if (n1 != -1 && n2 != -1) {
        let jsonArrTxt = jsonArrays[i].slice(0, n2);
        console.log("jsonArrTxt len:", n1, prefix.length, n2);
        jsonArrTxt = jsonArrTxt.replaceAll("`", "'");
        if (this.paramConfig.DEBUG_FLAG) console.log("getJsonArr:jsonArrTxt:", typeof (jsonArrTxt), jsonArrTxt)
        let jsonArr;
        try {
          jsonArr = JSON5.parse(jsonArrTxt);
          if (typeof jsonArr[KeyToGet] != "undefined") {
            valFound = jsonArr[KeyToGet];
          }
        }
        catch (e) {
          //jsonArrErr = 1;
          return null;
        }
      }

    }

    return valFound;

  }

public mergeShapeWithScalingAndClean(mainDiagram: any, shapeDetail: any, shapeId: string): any {
    // 1. Create a deep copy
    const result = JSON.parse(JSON.stringify(mainDiagram));
    
    // 2. Find the container
    const container = result.shapeOptions.find((s: any) => s.id === shapeId);
    if (!container) {
        console.warn(`Container "${shapeId}" not found`);
        return result;
    }
    
    // 3. Find the detail
    const detailShape = shapeDetail.shapeOptions?.find((s: any) => s.id === shapeId);
    if (!detailShape) {
        console.warn(`Detail for "${shapeId}" not found`);
        return result;
    }
    
    // 4. Get container and detail sizes
    const containerWidth = container.width;
    const containerHeight = container.height;
    const detailWidth = detailShape.width || containerWidth;
    const detailHeight = detailShape.height || containerHeight;
    
    // 5. Calculate scale factors
    const scaleX = containerWidth / detailWidth;
    const scaleY = containerHeight / detailHeight;
    
    console.log(`📐 Scaling ${shapeId}: ${detailWidth}x${detailHeight} → ${containerWidth}x${containerHeight}`);
    
    // 6. Get the definition
    let definition = detailShape.dataItem?.definition;
    if (!definition) return result;
    
    // 7. 🔑 Clean placeholder properties (from simpleMergeClean)
    definition = this.cleanPlaceholderProperties(definition);
    
    // 8. Scale all shapes
    if (definition.shapes) {
        definition.shapes = definition.shapes.map((shape: any) => ({
            ...shape,
            x: shape.x * scaleX,
            y: shape.y * scaleY,
            width: shape.width * scaleX,
            height: shape.height * scaleY,
            cornerRadius: shape.cornerRadius ? shape.cornerRadius * Math.min(scaleX, scaleY) : shape.cornerRadius,
            // Ensure opacity is set
            opacity: shape.opacity !== undefined ? shape.opacity : 1
        }));
    }
    
    // 9. Scale textBlocks
    if (definition.textBlocks) {
        definition.textBlocks = definition.textBlocks.map((text: any) => ({
            ...text,
            x: text.x * scaleX,
            y: text.y * scaleY,
            font: text.font ? this.scaleFont(text.font, Math.min(scaleX, scaleY)) : text.font,
            opacity: text.opacity !== undefined ? text.opacity : 1
        }));
    }
    
    // 10. Scale lines
    if (definition.lines) {
        definition.lines = definition.lines.map((line: any) => ({
            ...line,
            from: line.from ? {
                x: line.from.x * scaleX,
                y: line.from.y * scaleY
            } : line.from,
            to: line.to ? {
                x: line.to.x * scaleX,
                y: line.to.y * scaleY
            } : line.to,
            opacity: line.opacity !== undefined ? line.opacity : 1
        }));
    }
    
    // 11. Replace the definition
    container.dataItem.definition = definition;
    
    // 12. Update title if needed
    if (detailShape.dataItem?.title) {
        container.dataItem.title = detailShape.dataItem.title;
    }
    
    // 13. Remove placeholder flags (from simpleMergeClean)
    delete container.placeholder;
    
    // 14. Track operation
    if (!result.diagramOperations) {
        result.diagramOperations = [];
    }
    
    // Remove existing update operations for this shape
    result.diagramOperations = result.diagramOperations.filter(
        (op: any) => !(op.target === 'shape' && op.id === shapeId && op.operation === 'update')
    );
    
    result.diagramOperations.push({
        operation: "update",
        target: "shape",
        id: shapeId,
        status: "success",
        message: `Merged and scaled definition for "${shapeId}"`
    });
    
    return result;
}


// Helper: Scale font size
public scaleFont(font: string, scale: number): string {
    if (!font) return font;
    return font.replace(/(\d+)px/, (match, size) => {
        return `${Math.round(parseInt(size) * scale)}px`;
    });
}
public cleanPlaceholderProperties(definition: any): any {
    const cleaned = JSON.parse(JSON.stringify(definition));
    
    // Remove placeholder and set opacity to 1
    if (cleaned.shapes) {
        cleaned.shapes = cleaned.shapes.map((shape: any) => {
            const { placeholder, ...cleanShape } = shape;
            return {
                ...cleanShape,
                opacity: 1
            };
        });
    }
    
    // Clean textBlocks
    if (cleaned.textBlocks) {
        cleaned.textBlocks = cleaned.textBlocks.map((text: any) => {
            const { opacity, ...cleanText } = text;
            return {
                ...cleanText,
                opacity: 1
            };
        });
    }
    
    return cleaned;
}

appendShapeToDwg(dwgDef,answer, id ){
  let n = answer.indexOf("```json");
    if (n != -1)
      n = answer.indexOf("{");
      
    let answerDwg = answer.slice(n);
    console.log("appendShapeToDwg:", n, answerDwg, answer)
    let dwgDefTxt = answerDwg.split("```");
    console.log("appendShapeToDwg:dwgDefTxt::", dwgDefTxt)
    let shapesDef = JSON.parse(dwgDefTxt[0]);
    //console.log("appendShapeToDwg:shapesDef:", shapesDef)
    //let DiagramDefinitionForShape = shapesDef['DiagramDefinition']

 let shapeOptions = dwgDef['shapeOptions']
   
  
  dwgDef = this.mergeShapeWithScalingAndClean(dwgDef, shapesDef, id)
  //dwgDef['shapeOptions'] = shapeOptions;

console.log("dwgDef post merge:", 
      JSON.stringify(dwgDef, null, 2), "DiagramDefinitionForShape:",JSON.stringify(shapesDef, null, 2))
  // for (let i =0; i < shapeOptions.length; i++) {
  //   console.log("appendShapeToDwg:shapeOptions[i]:", 
  //     JSON.stringify(shapeOptions[i], null, 2), "DiagramDefinitionForShape:",JSON.stringify(DiagramDefinitionForShape, null, 2))
  //     let id = shapeOptions[i].id;
  // }
  return dwgDef;
  
}
  resetVars(){
    this.diagramOperations = [];
    this.helpText = "";
    this.somBody = [];
    this.compsArray = [];
    this.erDiagramFull = "";
    this.erDiagramNames = "";
    //this.relationshipsArrWithMap = [];
    this.DSP_DYNAMIC_RW = [];
    this.ComponentsMapsArr = {};
    this.answer = "";
    this.answer_dwg = "";
    this.answer_relations = "";
  }
  async submit() {
    this.resetVars();
    let Question = "";

    this.masterParams.data.REQUESTED_ON = new Date();
    this.insertAILogHead();
    if (this.paramConfig.DEBUG_FLAG) console.log("question:", this.form.value['question']);
    if (!this.simulate && this.form.value['question'] == "") {
      let Msg = this.starServices.getNLS([], 'ERROR_DESCRIBE_DIAGRAM', 'Please describe the diagram you would like to create.');
      this.showMsg(Msg, "Error");
      return;
    }

    let q_prefix = "I need you to generate a JSON configuration for a Kendo UI diagram following the exact structure below. "
      + ` 
          ## Target JSON Structure:

        interface KendoDiagramConfig {
          shapeDefaults: {
            visual: null;
            fill: string;
            stroke: { color: string; width: number };
          };
          connectionDefaults: {
            stroke: { color: string; width: number; dashType?: string };
          };
          layout: {
            type: "tree" | "layered" | "force" | "grid";
            subtype?: "tipover" | "horizontal" | "vertical";
          };
        }

        interface DiagramDefinition {
          shapes: Array<{
            id: string;
            x: number;
            y: number;
            width: number;
            height: number;
            fill?: string;
            stroke?: { color: string; width: number };
            cornerRadius?: number;
            opacity?: number;
            shape?: "rectangle" | "circle";
          }>;
          textBlocks: Array<{
            id: string;
            x: number;
            y: number;
            text: string;
            font?: string;
            fill?: string;
            textAnchor?: "start" | "middle" | "end";
            opacity?: number;
          }>;
          lines: Array<{
            id: string;
            from?: { x: number; y: number };
            to?: { x: number; y: number };
            path?: string;
            stroke?: { color: string; width: number; dashType?: string };
            opacity?: number;
          }>;
          connections: Array<{
            from: string;
            to: string;
            stroke?: { color: string; width: number; dashType?: string };
          }>;
        }

        interface ShapeOption {
          id: string;
          x: number;
          y: number;
          width: number;
          height: number;
          dataItem: {
            type: string;
            definition: DiagramDefinition;
            title?: string;
            offsetX?: number;
            offsetY?: number;
            customColors?: any;
          };
        }

        Critical Rules (Per-Definition Approach):
        1. NO definitionId strings - Embed the COMPLETE DiagramDefinition directly in dataItem.definition
        2. Each shape type gets its own full definition - Boiler and AC have separate, self-contained definitions
        3. ShapeOptions is an array - Each entry represents one visual instance on the canvas
        4. No external references - Everything needed to draw the diagram is inside dataItem.definition

        Output Structure:
        Return a single JSON object with:
        {
          "shapeDefaults": { ... },
          "connectionDefaults": { ... },
          "layout": { ... },
          "shapeOptions": [ ... ],
          "connections": [ ... ]
        }
      The Request is : Please generate a complete JSON configuration for:
    + `

    let q_suffix =
      ", For each ShapeOption, provide:\n"
    + ` - Complete ShapeOption with id, x, y, width, height
        - dataItem with type, title, and definition (initially empty definition 
        - I will request the full DiagramDefinition for each type later)
          Please generate the top-level ShapeOptions[] now.
    + `


    if (this.form.value['question'] !== "")
      Question = q_prefix
        + this.form.value['question']
        + q_suffix;




    this.showLog = true;
    this.hideSubmit = true;


    let answer = await this.callAI_API(0, Question, this.systemMsgs[0], 0);  // Get Tables and mermaid
    if (!this.isComplete)
      return;
    if (!this.sameApp)
      return;
    this.answer = answer;
    if (this.paramConfig.DEBUG_FLAG) console.log("answer received post callAI_API:", answer);
    if (typeof answer == "undefined")
      return;
    
    //1
    console.log("structured answer : dwg_def:", answer);
    this.answer_dwg = answer;
    let dwgDef: any = await this.parseandProcessCreateDwg(answer);   // to extract  TABLE CREATE
    if (this.paramConfig.DEBUG_FLAG) console.log("dwgDef:", dwgDef)

    if ((typeof dwgDef == "undefined") ) {
      let userMSg = "No dwg found in answer. Try again."
      var dialogStruc = {
        msg: userMSg,
        title: "Info",
        info: null,
        object: this,
        action: this.starServices.OkActions,
        callback: null
      };
      this.starServices.showConfirmation(dialogStruc);
      return;
    }
    //this.saveCompletedOutput.emit(dwgDef);
  
  //  return;
     
      let Stage = 1;
        let shapeOptions = dwgDef['shapeOptions']
        for (let i =0; i < shapeOptions.length; i++) {
            let id = shapeOptions[i].id;
            let Question2 = this.buildScreenToDisplayQuestion2Loop(dwgDef, id);
            this.helpText = this.helpText + "Generating shape " + id + ":\n";
            this.form.patchValue({ 'helpText': this.helpText });
            console.log("Question2 for multi Loop:", Question2)

           answer = await this.callAI_API(1, Question2, this.systemMsgs[0], Stage);  // Get screens_to_display_summary
           console.log("got this answer for :", id, " at stage :", Stage, "answer:",answer)
            Stage++;

           dwgDef = this.appendShapeToDwg(dwgDef,answer, id )
          // //this.mergeAnswer_1(answer);
          if (!this.isComplete)
             return;

          }
      console.log("final dwgDef after multi Loop:", JSON.stringify(dwgDef, null, 2))

      console.log("final dwgDef after multi Loop:json:", dwgDef)
      this.saveCompletedOutput.emit(dwgDef);
      // this.screens_to_displayFix();
      this.answer = answer;
      this.answer_relations = answer;
      //return;  
    

 

  }




  public singleMultiFlag = false;

  

  public toCreateMS = [];
  public ERDFull = true;
  public singleMultiMsg = "Multi"; //"Single";
  public erDiagramFull = "";
  public erDiagramNames = "";
  public display_recommendations = {};
  public workflow_recommendations = {};
  public screens_to_display = {};
  public screens_to_display_used = [];

  public tableField_icons = {};
  public card_layouts = {};
  public kanban_layouts = {};
  public kanban_key = {};
  public calculations = {};

  public showDiagramFlag = false;

  // public singleMulti() {
  //   this.singleMultiFlag = !this.singleMultiFlag;
  //   if (!this.singleMultiFlag)
  //     this.singleMultiMsg = "Single"
  //   else
  //     this.singleMultiMsg = "Multi"
  // }


















}