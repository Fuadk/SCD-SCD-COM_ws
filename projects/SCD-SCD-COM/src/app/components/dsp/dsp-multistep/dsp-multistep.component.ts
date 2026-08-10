import {inject, ViewContainerRef, Component, OnInit, Output, Input, EventEmitter, ViewChild, HostListener} from '@angular/core';
import { dynamic, componentConfigDef } from '@modeldir/model';
import { StepperComponent } from '@progress/kendo-angular-layout';
import { starServices } from 'starlib';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';


//import { RoutinesFormComponent } from '../../../../../../star/src/app/components/adm/routines-form/routines-form.component';

declare function getParamConfig(): any;
declare function performCode(object, fieldsData):any;




@Component({

  selector: 'app-dsp-multistep',
  templateUrl: './dsp-multistep.component.html',
  styleUrls: ['./dsp-multistep.component.css']
})
export class DspMultistepComponent implements OnInit {
  @Output() saveTriggerOutput: EventEmitter<any> = new EventEmitter();
  @Output() saveCompletedOutput: EventEmitter<any> = new EventEmitter();
  @Output() formNextOutput: EventEmitter<any> = new EventEmitter();
  @Output() currentPageData: EventEmitter<any> = new EventEmitter();
  @Output() formValidationChangedOutput: EventEmitter<boolean> = new EventEmitter();

  constructor(public responsive: BreakpointObserver ,public starServices: starServices) {
    this.paramConfig = getParamConfig();
    this.componentConfig = new componentConfigDef();
    var w = window.innerWidth;
    w = w - 20;
    this.screenStyle = "width: " + w + "px;";
  }
  //////////////////////////
  public currentStep = 0;
  public pageReadOnly =null;
  public totalSteps = 0;
  public pageToShow = -1;
  public pageNo = -1;
  public submitData = false;
  public showStepper = false;
  public pagesArray = [];
  public orderFields1;/* = {
    "data":
     {
        "NAME1":"Fuad2",
        "NAME2":"some text",
         "AGE1":"63"
     },
    "Address Info":[
     {
        "ADD1":"Dokki"
     },
     {
        "ADD1":"Giza1"
     }
     ]
    }
*/
  @ViewChild('stepper', { static: true })
  public stepper: StepperComponent;


  public isNextPressed = false

  private isStepValid = (index: number): boolean => {
    //return this.getGroupAt(index).valid || this.currentGroup.untouched;
    return true;
  }

  private shouldValidate = (index: number): boolean => {
    //return this.getGroupAt(index).touched && this.currentStep >= index;
    return false;
  }
  public steps = [];
  /*
   {
       label: 'Account Details',
       isValid: this.isStepValid,
       validate: this.shouldValidate
   },
   {
       label: 'Personal Details',
       isValid: this.isStepValid,
       validate: this.shouldValidate
   },
   {
       label: 'Payment Details',
       isValid: this.isStepValid,
       validate: this.shouldValidate
   }
];*/
  /*
  private getGroupAt(index: number): FormGroup {
    const groups = Object.keys(this.form.controls).map(groupName =>
        //@ts-ignore: Object is possibly 'null'.
this.form.get(groupName)
        ) as FormGroup[];

    return groups[index];
  }
  */

  public next(): void {
    this.isNextPressed = true
    this.currentStep += 1;
    this.steps[this.currentStep].disabled = false
    this.stepperClicked();
  }

  public prev(): void {
    this.isNextPressed = false
    this.currentStep -= 1;
    this.stepperClicked();
  }

   public  submit() {
    if (this.paramConfig.DEBUG_FLAG) console.log("test1:submit :");
    this.onSaveFields();
    this.submitData = true;

     setTimeout(() => {
      
      if (this.paramConfig.DEBUG_FLAG) console.log("checking :1:before saveCompletedOutput:this.orderFields:", this.isFormValid,
        this.orderFields, JSON.stringify(this.orderFields))
      this.saveCompletedOutput.emit(this.orderFields);
      this.submitData = false;
     }, 200)

  }
  public stepperClicked() {
    if (this.paramConfig.DEBUG_FLAG) console.log("test1:stepperClicked :");
    this.onSaveFields();
    if (this.paramConfig.DEBUG_FLAG) console.log("currentStep:", this.currentStep, " totalSteps:", this.totalSteps);
    this.pageToShow = this.pagesArray[this.currentStep];
    this.currentPageData.emit(this.pagesInfo[this.currentStep])
  }

  /////////////////
  public screenStyle;
  public showToolBar = false;
  public paramConfig;
  public title = "";
  public routineAuth = null;

  public componentConfig: componentConfigDef;

  public form_DSP_DYNAMIC_RW: dynamic;
  public grid_DSP_DYNAMIC_RW: dynamic;
  public DSP_DYNAMIC_RWFormConfig: componentConfigDef;
  public DSP_DYNAMIC_RWGridConfig: componentConfigDef;

  public isPhonePortrait = false;
private Body:any = [];
  public workOrders;
  public areaFields;
  public pagesInfo;
  public areasInfo;
  public fieldsInfo;
  public fieldsRadio;
  public fieldsOpened: boolean = false;
  public fieldsFormOpened: boolean = false;
  public fieldsData = [];
  public fieldsSave: boolean = false;
  public fieldsFormSave: boolean = false;
  public showURLMsg: boolean = false;
  public areaType;
  public formName;

  public ordernNO;
  public woorderno;
  public orderStatus;
  public dspOrder;
  public workOrderRec;
  public workOrderPtr;
  public URL_msg = "";
  public status = "";
  public orderFields = [];
  public isReadOnly = false

  public href = "";
  public responseData = {
    FINGER: false,
    BIO: false,
    ID: false
  };

  public isFormValid = false;
  public languageChanged

  ngOnInit(): void {
    console.log("this.stepper:", this.stepper)
    //this.starServices.actOnParamConfig(this, 'DSPEKYC');

    this.DSP_DYNAMIC_RWFormConfig = new componentConfigDef();

    this.DSP_DYNAMIC_RWGridConfig = new componentConfigDef();
    this.DSP_DYNAMIC_RWGridConfig.gridHeight = 200;


  }

  private addToBody(NewVal:any) {
    this.Body.push(NewVal);
  }

  public showFieldsScreen(areaFields, ORDER_FIELDS, areasInfo, pageNo) {
    var AREA_TYPE = areasInfo.AREA_TYPE;
    var title = areasInfo.AREA_TITLE;
    var title_nls_id = this.formName + "_P" + pageNo + "_A" + areasInfo.AREA_NO;
    if (this.paramConfig.DEBUG_FLAG) console.log("title_nls_id:", title_nls_id)
    title = this.starServices.getNLS([],title_nls_id, title);
    var title_help = this.starServices.getNLS([],title_nls_id + "_HELP", areasInfo.AREA_HELP);


    var areaNo = areasInfo.AREA_NO;
    if (ORDER_FIELDS == "") {
      ORDER_FIELDS = null;
    }
    
    var orderFieldsData = null;
    if (this.orderFields1 != null) 
      orderFieldsData = this.orderFields1.data;
    let isPageReadOnly = false;
    if (this.pageReadOnly != null){
      let pageReadOnlyArr = this.pageReadOnly.split(",");
      isPageReadOnly = pageReadOnlyArr.includes(pageNo+"");
    } 
    
    if (typeof areaFields != "undefined") {
      var masterParams = {
        "templateFields": areaFields,
        "orderFields": ORDER_FIELDS,
        "orderFieldsData": orderFieldsData,
        "pageNo": pageNo,
        "areaNo": areaNo,
        "areaTitle": title,
        "areaDataName": areasInfo.AREA_DATA_NAME,
        "areaTitleDef": areasInfo.AREA_TITLE,
        "areaType": areasInfo.AREA_TYPE,
        "areaProtected": areasInfo.AREA_PROTECTED,
        "areaHelp": title_help,
        "areaHelpDef": areasInfo.AREA_HELP,
        "formType": this.pagesInfo[this.currentStep].PAGE_TYPE,
        "formName" : areasInfo.FORM_NAME,
        "isPageReadOnly":isPageReadOnly
      };
      if (this.paramConfig.DEBUG_FLAG) console.log("masterParams:", masterParams)
      if (this.paramConfig.DEBUG_FLAG) console.log("test:areaFields:", areaFields);
      this.areaType = AREA_TYPE;
      if (AREA_TYPE == "GRID") {
        this.DSP_DYNAMIC_RWGridConfig = new componentConfigDef();
        this.DSP_DYNAMIC_RWGridConfig.masterParams = masterParams;
        this.DSP_DYNAMIC_RWGridConfig.title = title;
        this.DSP_DYNAMIC_RWGridConfig.showToolBar = true;
        this.fieldsOpened = true;
      }
      else if (AREA_TYPE == "FORM") {
        this.DSP_DYNAMIC_RWFormConfig = new componentConfigDef();
        this.DSP_DYNAMIC_RWFormConfig.masterParams = masterParams;
        this.DSP_DYNAMIC_RWFormConfig.title = title;
        this.DSP_DYNAMIC_RWFormConfig.showToolBar = false;
        this.fieldsFormOpened = true
      }

      this.fieldsData = JSON.parse(ORDER_FIELDS);
      //formVal.ORDER_FIELDS = ORDER_FIELDS;
      if (this.paramConfig.DEBUG_FLAG) console.log("test:this.fieldsData:", this.fieldsData);
      this.fieldsSave = false;
    }
  }

  public readCompletedHandler(form_DSP_DYNAMIC_RW) {
    var masterKeyArr = [form_DSP_DYNAMIC_RW.DYNAMIC_FIELD];
    var masterKeyNameArr = ["DYNAMIC_FIELD"];

    if (this.paramConfig.DEBUG_FLAG) console.log(form_DSP_DYNAMIC_RW);
    this.grid_DSP_DYNAMIC_RW = new dynamic();
    //    this.grid_DSP_DYNAMIC_RW.DYNAMIC_FIELD =  form_DSP_DYNAMIC_RW.DYNAMIC_FIELD;


    for (var i = 0; i < masterKeyNameArr.length; i++) {
      if (this.paramConfig.DEBUG_FLAG) console.log(masterKeyNameArr[i] + ":" + masterKeyArr[i])
      this.grid_DSP_DYNAMIC_RW[masterKeyNameArr[i]] = masterKeyArr[i];
    }

    this.DSP_DYNAMIC_RWGridConfig = new componentConfigDef();
    this.DSP_DYNAMIC_RWGridConfig.masterKeyArr = [form_DSP_DYNAMIC_RW.DYNAMIC_FIELD];
    this.DSP_DYNAMIC_RWGridConfig.masterKeyNameArr = ["DYNAMIC_FIELD"];

  }



  public onSaveFields(): void {

    //this.fieldsOpened = false;
    var pageToShow = this.pagesArray[this.currentStep];
    if (this.paramConfig.DEBUG_FLAG) console.log("test:this.areasInfo :", this.areasInfo, " this.pageNo :", this.pageNo);
    for (var i = 0; i < this.areasInfo.length; i++) {
      if (this.areasInfo[i].PAGE_NO == this.pageNo) {
        var areaType = this.areasInfo[i].AREA_TYPE;
        if (this.paramConfig.DEBUG_FLAG) console.log("test:areaType :", areaType);
        if (areaType == "FORM") {
          this.DSP_DYNAMIC_RWFormConfig = new componentConfigDef();
          if (this.paramConfig.DEBUG_FLAG) console.log("test1:this.DSP_DYNAMIC_RWFormConfig.masterSaved:2:", this.DSP_DYNAMIC_RWFormConfig.masterSaved);
          this.DSP_DYNAMIC_RWFormConfig.masterSaved = true;
          this.fieldsFormSave = true; //trigger save then show in saveFormCompletedHandler
        }
        else
          if (areaType == "GRID") {
            this.DSP_DYNAMIC_RWGridConfig = new componentConfigDef();
            if (this.paramConfig.DEBUG_FLAG) console.log("test1:this.DSP_DYNAMIC_RWGridConfig.masterSaved:3:", this.DSP_DYNAMIC_RWGridConfig.masterSaved);
            this.DSP_DYNAMIC_RWGridConfig.masterSaved = true;
            this.fieldsFormSave = true; //trigger save then show in saveCompletedHandler
  
            /*this.fieldsSave = true;
            //var fieldsData =[];
            //fieldsData.push(this.fieldsData);
            var fieldsData = this.fieldsData;
            var orderField = JSON.stringify(fieldsData);
            this.fieldsSave = true;
            if (this.paramConfig.DEBUG_FLAG) console.log("test:this.fieldsSave:", this.fieldsSave, " orderField:", orderField, " this.pageToShow:",this.pageToShow)
            if (this.submitData) {
              this.submitData = false;
              this.saveCompletedOutput.emit(this.orderFields1);
            }
            else     {
              this.pageToShow = this.pagesArray[this.currentStep];
              this.showPage(this.pageToShow);
              this.pageToShow = -1;
            }*/

          }
      }
    }

  }


  public saveCompletedHandler(DSP_DYNAMIC_RW) {
    if (this.paramConfig.DEBUG_FLAG) console.log("checking :this.fieldsSave:", this.fieldsSave, " this.submitData:", this.submitData, " DSP_DYNAMIC_RW:", DSP_DYNAMIC_RW);
    if (this.paramConfig.DEBUG_FLAG) console.log("test:DSP_DYNAMIC_RW.data:", DSP_DYNAMIC_RW.data);
    for (var i = DSP_DYNAMIC_RW.data.length - 1; i >= 0; i--) {
      if (typeof DSP_DYNAMIC_RW.data[i]._QUERY != "undefined") {
        delete DSP_DYNAMIC_RW.data[i]._QUERY;
      }
    }
    this.fieldsData = DSP_DYNAMIC_RW;
    var fieldsData = [];

    fieldsData.push(this.fieldsData);
    this.saveToMultiStepFieldsData(fieldsData);
    if (this.pageToShow != -1) {
      this.showPage(this.pageToShow);
      this.pageToShow = -1;
    }
    if (this.submitData) {
      //this.saveCompletedOutput.emit(this.orderFields);
    }

  }


  ///////////


  public saveToMultiStepFieldsData(fieldsData) {
    /*
    var i=0;
    if (this.paramConfig.DEBUG_FLAG) console.log("checking :fieldsData", fieldsData);
    while ( i < this.orderFields.length ){
      if (fieldsData[0].pageNo == this.orderFields[i].pageNo ){
        if (fieldsData[0].areaNo == this.orderFields[i].areaNo ){
          if (this.paramConfig.DEBUG_FLAG) console.log("checking :this.orderFields:pre:", this.orderFields);
          this.orderFields.splice(i,1);
          if (this.paramConfig.DEBUG_FLAG) console.log("checking :this.orderFields:post:", this.orderFields);
          break;
        }
      }
      i++;
    }
    this.orderFields.push(fieldsData[0]);
    */
    //////////////
    if (this.paramConfig.DEBUG_FLAG) console.log("checking :this.orderFields1:", this.orderFields1, " fieldsData:", fieldsData);
    var areaDataName = fieldsData[0].areaDataName;
    if ( (fieldsData[0].areaType == "GRID") || (fieldsData[0].areaType == "FORM") ) {
      var data = fieldsData[0].data;
      if (this.paramConfig.DEBUG_FLAG) console.log("testkey:data:", data[0])
      if (typeof this.orderFields1[areaDataName] == "undefined") {
        this.orderFields1[areaDataName] = {};
      }
      for (var key in data[0]) {
        var val = data[0][key];
        if (val != null) {
          if (this.paramConfig.DEBUG_FLAG) console.log("checking :key:", key, " val:", val)
          this.orderFields1[areaDataName][key] = val;
        }
      }
    }
   
    if (this.paramConfig.DEBUG_FLAG) console.log("checking :this.orderFields1:", this.orderFields1, " this.submitData:", " Stringify:", JSON.stringify(this.orderFields));

    this.orderFields = this.orderFields1;
    if (this.paramConfig.DEBUG_FLAG) console.log("checking :this.orderFields:", this.orderFields, " Stringify:", JSON.stringify(this.orderFields));

    // if (this.submitData) {
    //   if (this.paramConfig.DEBUG_FLAG) console.log("before saveCompletedOutput:this.orderFields:", this.orderFields)
    //   this.saveCompletedOutput.emit(this.orderFields);
    // }


  }
  public getFieldsDataFromMultiStep(pageNo, areaNo, areaFields, areaType, areaTitle, areaDataName) {
    var i = 0;
    var fieldsData = [];

    /*
  if (this.paramConfig.DEBUG_FLAG) console.log("test:searching this.orderFields:", this.orderFields, "pageNo:", pageNo, " areaNo:", areaNo);
  while ( i < this.orderFields.length ){
    if (pageNo == this.orderFields[i].pageNo ){
      if (areaNo == this.orderFields[i].areaNo ){
        fieldsData = this.orderFields[i].data;
        break;
      }
    }
    i++;
  }
  */
    //////
    function getObject(orderFields) {
      var obj = {};
      for (var j = 0; j < areaFields.length; j++) {
        var fieldID = areaFields[j].FIELD_ID;
        for (var key in orderFields) {
          //console.log("test:key:", key, "  fieldID:", fieldID, " orderFields:", orderFields );
          if (fieldID == key) {
            var val = orderFields[key];
            obj[key] = val;
          }
        }
      }
      return obj;

    }
    var fieldsData1 = [];

    if (this.paramConfig.DEBUG_FLAG) console.log("test:got fieldsData1:pre:", fieldsData1);
    if (this.paramConfig.DEBUG_FLAG) console.log("test:searching this.orderFields1:", this.orderFields1, "areaType:", areaType, " areaTitle:", areaTitle, "areaDataName:", areaDataName);

    if ( ((areaType == "FORM") || (areaType == "GRID") ) && (this.orderFields1 != null) ) {
      var obj = getObject(this.orderFields1[areaDataName]);
      fieldsData1.push(obj);
    }

    // else if (areaType == "GRID") {
    //   var gridFields = this.orderFields1[areaDataName];
    //   if (typeof gridFields != "undefined") {
    //     for (var i = 0; i < gridFields.length; i++) {
    //       var obj = getObject(gridFields[i]);
    //       fieldsData1.push(obj);
    //     }
    //   }
    // }




    if (this.paramConfig.DEBUG_FLAG) console.log("test:got fieldsData1:", fieldsData1, " from : this.orderFields1:", this.orderFields1, " for:areaDataName:", areaDataName);
    ////////
    if (this.paramConfig.DEBUG_FLAG) console.log("test:got fieldsData:", fieldsData);
    var fieldsDataStr = JSON.stringify(fieldsData1);
    return fieldsDataStr;

  }
  public saveFormCompletedHandler(DSP_DYNAMIC_RW) {
    if (this.paramConfig.DEBUG_FLAG) console.log("checking :1:this.fieldsSaveForm :", this.fieldsFormSave, " DSP_DYNAMIC_RW:", DSP_DYNAMIC_RW);
    if (this.isNextPressed)
      this.formNextOutput.emit(DSP_DYNAMIC_RW)
    

     // setTimeout(() => {
        this.fieldsData = DSP_DYNAMIC_RW;
        if (typeof performCode != "undefined")
          performCode(this,this.fieldsData)
        var fieldsData = [];
    
        fieldsData.push(this.fieldsData);
        this.saveToMultiStepFieldsData(fieldsData);
        if (this.pageToShow != -1) {
          this.showPage(this.pageToShow);
          this.pageToShow = -1;
        }
        if (this.submitData) {
          //this.saveCompletedOutput.emit(this.orderFields);
        }
    
    //}, 200)


  }



  public buildMultiSteps() {
    var steps = [];
    this.showStepper = true;
    for (var i = 0; i < this.pagesInfo.length; i++) {
      var pageTitle = this.pagesInfo[i].PAGE_TITLE;
      var title_nls_id = this.formName + "_P" + this.pagesInfo[i].PAGE_NO;
      if (this.paramConfig.DEBUG_FLAG) console.log("title_nls_id:", title_nls_id)
      pageTitle = this.starServices.getNLS([],title_nls_id, pageTitle);


      var step = {
        label: pageTitle,
        labelDef: this.pagesInfo[i].PAGE_TITLE,
        icon: this.pagesInfo[i].PAGE_ICON,
        isValid: this.isStepValid,
        validate: this.shouldValidate,
        disabled: i == 0 ? false : true,
        index: i
      }
      steps.push(step);
    }
    this.steps = steps;
    this.totalSteps = this.pagesInfo.length - 1;
    if (this.totalSteps < 1) {
      this.showStepper = false;
    }
    if (this.paramConfig.DEBUG_FLAG) console.log("this.steps:", this.steps)


  }
  public showPage(pageNo) {
    if (this.paramConfig.DEBUG_FLAG) console.log("pageNo:", pageNo)
    this.pageNo = pageNo;
    this.fieldsFormOpened = false;
    this.fieldsOpened = false;
    var i = 0;
    /*
    while (i < this.pagesInfo.length){
      if (this.pagesInfo[i].PAGE_NO == pageNo ){
        break;
      }
      i++;
    }*/
    function getAreaFields(pageNo, areaNo, fieldsInfo, fieldsRadio) {
      var areaFields = [];
      for (var i = 0; i < fieldsInfo.length; i++) {
        if ((fieldsInfo[i].PAGE_NO == pageNo) && (fieldsInfo[i].AREA_NO == areaNo)) {
          let fieldsRadioArr=[];
          for (var j = 0; j < fieldsRadio.length; j++) {
            if ((fieldsRadio[j].PAGE_NO == pageNo) && (fieldsRadio[j].AREA_NO == areaNo) && (fieldsRadio[j].FIELD_ID == fieldsInfo[i].FIELD_ID)) {
              fieldsRadioArr.push(fieldsRadio[j])
              
            }
          }
          if (fieldsRadioArr.length != 0){
            fieldsInfo[i].FIELD_RADIO = fieldsRadioArr;
          }
          areaFields.push(fieldsInfo[i]);
        }

      }
      console.log("getAreaFields:areaFields:", areaFields)
      return areaFields;

    }
    if (this.paramConfig.DEBUG_FLAG) console.log("test:this.areasInfo:", this.areasInfo)

    for (var i = 0; i < this.areasInfo.length; i++) {
      if (this.areasInfo[i].PAGE_NO == pageNo) {
        if (this.paramConfig.DEBUG_FLAG) console.log("test:this.areasInfo[i]:", this.areasInfo[i])
        var areaFields = getAreaFields(pageNo, this.areasInfo[i].AREA_NO, this.fieldsInfo, this.fieldsRadio);
        var fieldsData = this.getFieldsDataFromMultiStep(pageNo, this.areasInfo[i].AREA_NO, areaFields, this.areasInfo[i].AREA_TYPE, this.areasInfo[i].AREA_TITLE,  this.areasInfo[i].AREA_DATA_NAME);
        if (this.paramConfig.DEBUG_FLAG) console.log("test:areaFields:", areaFields, " fieldsData:", fieldsData)

        this.showFieldsScreen(areaFields, fieldsData, this.areasInfo[i], pageNo);
      }

    }
    if (this.paramConfig.DEBUG_FLAG) console.log("test:this.pagesInfo:", this.pagesInfo, " this.currentStep:", this.currentStep)
    this.currentPageData.emit(this.pagesInfo[this.currentStep])
  }

  public showMultiStepFormData(orderFields, formName, formPagesNo) {
    this.submitData = false;
    this.formName = formName;
    function getPartInfo(array, data) {
      var part = [];
      for (var i = 0; i < data.length; i++) {
        for (var j = 0; j < array.length; j++) {
          if (data[i].PAGE_NO == array[j]) {
            part.push(data[i]);

          }
        }
      }
      return part;
    }
    this.Body = [];

    var Page = "&_trans=Y";
    var newVal = { "_QUERY": "GET_DSP_FORM_PAGE", "FORM_NAME": formName, "PAGE_NO": "%" };
    this.addToBody(newVal);

    var newVal1 = { "_QUERY": "GET_DSP_FORM_AREA", "FORM_NAME": formName, "PAGE_NO": "%", "AREA_NO": "%" };
    this.addToBody(newVal1);

    var newVal2 = { "_QUERY": "GET_DSP_FORM_FIELDS", "FORM_NAME": formName, "PAGE_NO": "%", "AREA_NO": "%", "FIELD_ID": "%" };
    this.addToBody(newVal2);

    var newVal3 = { "_QUERY": "GET_DSP_FORM_FIELDS_RADIO", "FORM_NAME": formName, "PAGE_NO": "%", "AREA_NO": "%", "FIELD_ID": "%", "FIELD_VALUE": "%" };
    this.addToBody(newVal3);

    this.starServices.post(this, Page, this.Body).subscribe(result => {
      this.Body = [];
      if (this.paramConfig.DEBUG_FLAG) console.log("test:result:", result.data[0].data)
      if ( (formPagesNo != "") && (typeof formPagesNo != "undefined")){
        var array = formPagesNo.split(",");
        this.pagesInfo = getPartInfo(array, result.data[0].data);
        this.areasInfo = getPartInfo(array, result.data[1].data);
        this.fieldsInfo = getPartInfo(array, result.data[2].data);
        this.fieldsRadio = getPartInfo(array, result.data[3].data);
        

      } else {
        this.pagesInfo = result.data[0].data;
        this.areasInfo = result.data[1].data;
        this.fieldsInfo = result.data[2].data;
        this.fieldsRadio = result.data[3].data;
      }
      if (this.paramConfig.DEBUG_FLAG) console.log("test:this.pagesInfo :", this.pagesInfo);
      this.pagesArray = [];
      if (typeof this.pagesInfo != "undefined") {
        for (var i = 0; i < this.pagesInfo.length; i++) {
          this.pagesArray[i] = this.pagesInfo[i].PAGE_NO;
        }
        if (this.paramConfig.DEBUG_FLAG) console.log("test:this.pagesInfo :", this.pagesInfo);
        if (this.paramConfig.DEBUG_FLAG) console.log("test:this.areasInfo :", this.areasInfo);
        if (this.paramConfig.DEBUG_FLAG) console.log("test:this.fieldsInfo :", this.fieldsInfo);
        if (this.paramConfig.DEBUG_FLAG) console.log("test:this.fieldsRadio :", this.fieldsRadio);

        //if (formUsage == "ORDER_FORM")
        {
          this.buildMultiSteps();
        }
        if (this.paramConfig.DEBUG_FLAG) console.log("test:this.pagesArray :", this.pagesArray, " this.currentStep :", this.currentStep );
        if (this.pagesArray.length > 0) {
          
            this.showPage(this.pagesArray[0]);
          if (this.currentStep != 0)
            this.stepperClicked();
        }
      }
    },
      err => {
        alert('error:' + err.message);
      });

  }
  @Input() public set setComponentConfig_Input(ComponentConfig: componentConfigDef) {
    if (this.paramConfig.DEBUG_FLAG) console.log("app-dsp-multistep ComponentConfig:", ComponentConfig);
    if (typeof ComponentConfig !== "undefined") {
      

      this.componentConfig = this.starServices.setComponentConfig(ComponentConfig, this.componentConfig);
      if (ComponentConfig.masterSaved != null) {
        if (this.paramConfig.DEBUG_FLAG) console.log("test1:ComponentConfig.masterSaved:1:", ComponentConfig.masterSaved);
        this.DSP_DYNAMIC_RWFormConfig = new componentConfigDef();
        this.DSP_DYNAMIC_RWFormConfig.masterSaved = true;

      }

      if (ComponentConfig.masterParams != null) {
        if (this.paramConfig.DEBUG_FLAG) console.log("ComponentConfig.masterParams:", ComponentConfig.masterParams)
        if (this.paramConfig.DEBUG_FLAG) console.log("ComponentConfig.masterParams.orderFields:", ComponentConfig.masterParams.orderFields)
        if ( (ComponentConfig.masterParams.orderFields == "") || (typeof ComponentConfig.masterParams.orderFields == "undefined") )
          ComponentConfig.masterParams.orderFields = "{}";
        if (this.paramConfig.DEBUG_FLAG) console.log("ComponentConfig.masterParams.orderFields:", ComponentConfig.masterParams.orderFields)
        var orderFields = JSON.parse(ComponentConfig.masterParams.orderFields);
        if (this.paramConfig.DEBUG_FLAG) console.log("orderFields:", orderFields)
        this.orderFields1 = orderFields;
        this.currentStep = 0;
        this.pageReadOnly = null;
        this.totalSteps = 0;
        this.pageToShow = -1;
        this.submitData = false;
        this.showStepper = false;
        if (typeof ComponentConfig.masterParams.currentStep != "undefined") {
          this.currentStep =  ComponentConfig.masterParams.currentStep;
        }
        this.pageReadOnly = null;
        if (typeof ComponentConfig.masterParams.pageReadOnly != "undefined") {
          this.pageReadOnly =  ComponentConfig.masterParams.pageReadOnly;
        }
        this.showMultiStepFormData(orderFields,
          ComponentConfig.masterParams.formName,
          ComponentConfig.masterParams.formPagesNo);

        if (ComponentConfig.masterParams.isReadOnly != null)
          this.isReadOnly = ComponentConfig.masterParams.isReadOnly
        this.loadComponent();
      }
    }

    for (let index = 1; index < this.steps.length; index++) {
      this.steps[index].disabled = true
    }
  }

  formValidationChanged(e) {
    this.isFormValid = e;
    this.formValidationChangedOutput.emit(this.isFormValid)

    if (this.currentStep + 1 < this.steps.length) {
      if (this.isFormValid) this.steps[this.currentStep + 1].disabled = false
      else this.steps[this.currentStep + 1].disabled = true
    }
  }

  @Input() public set setLanguageChanged(lang) {
    this.languageChanged = lang

    setTimeout(() => {
      if (this.steps) {
        this.steps.forEach(step => {
          var title_nls_id = this.formName + "_P" + this.pagesInfo[step.index].PAGE_NO;
          step.label = this.starServices.getNLS([],title_nls_id, step.labelDef);
        })
      }

      if (this.DSP_DYNAMIC_RWFormConfig.masterParams) {
        var title_nls_id_FORM = this.formName + "_P" + this.DSP_DYNAMIC_RWFormConfig.masterParams.pageNo + "_A" + this.DSP_DYNAMIC_RWFormConfig.masterParams.areaNo;
        let titleFORM = this.starServices.getNLS([],title_nls_id_FORM, this.DSP_DYNAMIC_RWFormConfig.masterParams.areaTitleDef);
        let helpFORM = this.starServices.getNLS([],title_nls_id_FORM + "_HELP", this.DSP_DYNAMIC_RWFormConfig.masterParams.areaHelpDef);

        let DSP_DYNAMIC_RWFormConfig_NEW = new componentConfigDef();
        DSP_DYNAMIC_RWFormConfig_NEW.masterParams = this.DSP_DYNAMIC_RWFormConfig.masterParams;
        DSP_DYNAMIC_RWFormConfig_NEW.masterParams.areaHelp = helpFORM
        DSP_DYNAMIC_RWFormConfig_NEW.title = titleFORM;
        DSP_DYNAMIC_RWFormConfig_NEW.showToolBar = this.DSP_DYNAMIC_RWFormConfig.showToolBar;
        this.DSP_DYNAMIC_RWFormConfig = DSP_DYNAMIC_RWFormConfig_NEW
      }

      if (this.DSP_DYNAMIC_RWGridConfig.masterParams) {
        var title_nls_id_GRID = this.formName + "_P" + this.DSP_DYNAMIC_RWGridConfig.masterParams.pageNo + "_A" + this.DSP_DYNAMIC_RWGridConfig.masterParams.areaNo;
        let titleGRID = this.starServices.getNLS([],title_nls_id_GRID, this.DSP_DYNAMIC_RWGridConfig.masterParams.areaTitleDef);
        let helpGRID = this.starServices.getNLS([],title_nls_id_GRID + "_HELP", this.DSP_DYNAMIC_RWGridConfig.masterParams.areaHelpDef);

        let DSP_DYNAMIC_RWGridConfig_NEW = new componentConfigDef();
        DSP_DYNAMIC_RWGridConfig_NEW.masterParams = this.DSP_DYNAMIC_RWGridConfig.masterParams;
        DSP_DYNAMIC_RWGridConfig_NEW.masterParams.areaHelp = helpGRID
        DSP_DYNAMIC_RWGridConfig_NEW.title = titleGRID;
        DSP_DYNAMIC_RWGridConfig_NEW.showToolBar = this.DSP_DYNAMIC_RWGridConfig.showToolBar;
        this.DSP_DYNAMIC_RWGridConfig = DSP_DYNAMIC_RWGridConfig_NEW
      }
    }, 500);
  }
  
public showComp = false;
// get currentAd() {
//   let tmp={
//     component: RoutinesFormComponent,
//     inputs: {
//       headline: 'Hiring for several positions',
//       body: 'Submit your resume today!',
//     },
//   }
//   return tmp;
// }


//Lazy loading :
// https://dev.to/debug_mode/how-to-lazy-and-dynamically-load-a-component-in-angular-18ke

message = "data from parent"
  greetcomp: any;
  vcr = inject(ViewContainerRef);
  
  async loadComponent() {
  //   this.vcr.clear();
  //   let  { AdmThemeDefFormFormComponent } = await import('../../../../../../star/src/app/components/adm/adm-theme-def-form/adm-theme-def-form.component');
  //   this.greetcomp = this.vcr.createComponent(AdmThemeDefFormFormComponent);
  //  // await this.starServices.sleep(5000);
  //   console.log("this.greetcomp :", this.greetcomp )
  //   if (this.greetcomp) {
  //     this.greetcomp.instance.title = "Hello dynamic Component";  //Variable
  //     this.greetcomp.instance.handleComponentConfig ("test") //Input
 
  //     this.greetcomp.instance.readCompletedOutput.subscribe((data:any)=>{ //Output
  //       console.log("readCompletedOutput",data);
  //     })
  //   }
    
    //this.vcr.detach();
  }
}