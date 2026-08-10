import { Component, Input, Output, EventEmitter, HostListener, ViewChild} from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { starServices } from 'starlib';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { componentConfigDef } from '@modeldir/model';
import { formatDate } from '@angular/common';
// import { SignaturePad } from 'ngx-signaturepad/signature-pad';
//import { SignaturePad } from 'angular2-signaturepad/signature-pad';
import { SignaturePad } from 'angular2-signaturepad';

/*
 const createFormGroup = (dataItem:any) => new FormGroup({
'DYNAMIC_FIELD' : new FormControl(dataItem.DYNAMIC_FIELD  , Validators.required )
});
*/
////////////////////////////////
interface ColumnSetting {
  field: string;
  title: string;
  html: string;
  format?: string;
  type: 'text' | 'numeric' | 'boolean' | 'date';
  id;
  fieldNameCaps;
  fieldRequired;
}
////////////////////////////////

declare function getParamConfig(): any;
declare function onChangeConfig(formName, id,  value, form): any;




@Component({
  selector: 'app-dsp-dynamic-rw-form',
  templateUrl: './dsp-dynamic-rw-form.component.html',
  styleUrls: ['./dsp-dynamic-rw-form.component.css']
})


export class DspDynamicRwFormComponent {
  @ViewChild(SignaturePad) signaturePad: SignaturePad;

  public title = "Dynamic Rw";
  private insertCMD = "INSERT_DSP_DYNAMIC_RW";
  private updateCMD = "UPDATE_DSP_DYNAMIC_RW";
  private deleteCMD = "DELETE_DSP_DYNAMIC_RW";
  private getCMD = "GET_DSP_DYNAMIC_RW_QUERY";

  public value: Date = new Date(2019, 5, 1, 22);
  public format: string = 'MM/dd/yyyy HH:mm';
  public active = false;

  public form: FormGroup;
  public PDFfileName = this.title + ".PDF";
  public componentConfig: componentConfigDef;

  private CurrentRec = 0;
  public executeQueryresult: any;
  public isSearch!: boolean;
  public isChild: boolean = false;
  public isMaster: boolean = false;
  public isDYNAMIC_FIELDEnable: boolean = true;
  public isPhonePortrait = false;
private Body:any = [];
  private isNew!: boolean;
  public primarKeyReadOnlyArr = { isDYNAMIC_FIELDreadOnly: false };
  public paramConfig;
  private masterKeyArr = [];
  private masterKeyNameArr = [];
  public masterKey = "";
  public masterKeyName = "DYNAMIC_FIELD";
  public formattedWhere:any = null;
  public submitted = false;
  public columns;
  public pageNo = 0;
  public areaNo = 0;
  public areaTitle = "";
  public areaDataName = "";
  public areaType = "";
  public areaHelp = "";
  public formType = "";
  public formName = "";
  public areaProtected:boolean = false;
  public isPageReadOnly:boolean = false;
  public disableUpload = false;

  public orderFieldsData;

  public rows = [];
  public rows1 = [0, 1, 2];
  public columns1 = [[
    {
      field: 'ProductName',
      title: 'Product Name',
      type: 'text'
    }],
  [
    {
      field: 'UnitPrice',
      format: '{0:c}',
      title: 'Unit Price',
      type: 'numeric'
    }, {
      field: 'FirstOrderedOn',
      format: '{0:d}',
      title: 'First Ordered',
      type: 'date'
    }],
  [{
    field: 'FirstOrderedOn1',
    format: '{0:d}',
    title: 'First Ordered',
    type: 'date'
  }
  ]];

  public signaturePadOptions = {
    'minWidth': 1,
    'canvasWidth': 450,
    'canvasHeight': 150,
    "dotSize": 0.1,
    "backgroundColor": "white"
  }

  public createFormGroupForm = this.createFormGroup;
  public templateFields;
  ////////////////////////////////
  //@Input()
  public showToolBar = true;
  //public legend_color = "background-color: #0D2445;color:#ffffff";
  public legend_color = "";
  @Output() readCompletedOutput: EventEmitter<any> = new EventEmitter();
  @Output() clearCompletedOutput: EventEmitter<any> = new EventEmitter();
  @Output() saveCompletedOutput: EventEmitter<any> = new EventEmitter();

  @Output() formValidationChangedOutput: EventEmitter<boolean> = new EventEmitter();

  constructor(public responsive: BreakpointObserver ,public starServices: starServices) {
    this.componentConfig = new componentConfigDef();
    this.paramConfig = getParamConfig();
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
    this.form = this.createFormGroupForm(
      this.formInitialValues
    );
    this.form.markAllAsTouched()
    setTimeout(() => {
      this.formValidationChangedOutput.emit(this.form.valid)
    }, 100)


    //this.executeQuery (this.form);
    this.onChanges();
    this.starServices.fetchLookups(this, this.lookupArrDef);
    this.form.reset(this.formInitialValues);
    this.isNew = true;
    this.AttDwnUrl = this.starServices.SERVER_URL + "/api/att?action=download&username=" + this.starServices.sessionParams.USERNAME.toLowerCase() + "&name=";
  }

  private formInitialValues:any = {}; //=   new dynamicRw();

  @Input() public set executeQueryInput(form: any) {
    if ((typeof form != "undefined") && (typeof form.DYNAMIC_FIELD != "undefined") && (form.DYNAMIC_FIELD != "")) {
      this.isDYNAMIC_FIELDEnable = false;
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

  get f():any { return this.form.controls; }
  public executeQuery(form: any): void {
    this.starServices.executeQuery_form(form, this);
  }

  private addToBody(NewVal:any) {
    this.Body.push(NewVal);
  }

  public onCancel(e:any): void {
    this.starServices.onCancel_form(e, this);
  }

  public onNew(e:any): void {
    if (this.paramConfig.DEBUG_FLAG) console.log("this.masterKeyNameArr:", this.masterKeyNameArr, "this.masterKeyNameArr.length", this.masterKeyNameArr.length)
    if (this.masterKeyNameArr.length != 0) {
      for (var i = 0; i < this.masterKeyNameArr.length; i++) {
        if (this.paramConfig.DEBUG_FLAG) console.log(this.masterKeyNameArr[i] + ":" + this.masterKeyArr[i])
        this.formInitialValues[this.masterKeyNameArr[i]] = this.masterKeyArr[i];
      }
    }
    else {
      if (this.paramConfig.DEBUG_FLAG) console.log(this.masterKeyName + this.masterKey)
      this.formInitialValues[this.masterKeyName] = this.masterKey;
    }
    this.starServices.onNew_form(e, this);
  }

  public onRemove(form): void {
    this.starServices.onRemove_form(form, this);
  }

  public enterQuery(form: any): void {

    this.starServices.enterQuery_form(form, this);
  }

  public saveChanges(form: any): void {
    this.Body = [];
    this.starServices.saveChanges_form(form, this);
  }

  public goRecord(target: any): void {
    this.starServices.goRecord(target, this);
  }

  public userLang = "EN";
  public lookupArrDef:any = [];

  onChanges(): void {
    //  if (this.paramConfig.DEBUG_FLAG) console.log("test: change here:", this.form.value)
  }


  public lkpArrGetfield(fieldName, row: any): any {
    // Change x.CODE below if not from SOM_TABS_CODE
    var rec;
    if (this.paramConfig.DEBUG_FLAG) console.log("test:lkpArrGetfield:field", fieldName, row[fieldName])
    var CODE = row[fieldName];
    var templateFieldsRec = this.getFieldsRec(fieldName, this.templateFields);
    var lkpArrName = "lkpArr" + templateFieldsRec.FIELD_LOOKUP;

    if (this.paramConfig.DEBUG_FLAG) console.log("test:lkpArrName:", lkpArrName)
    rec = {
      CODE: CODE,
      CODETEXT_LANG: CODE
    };
    if ((typeof this[lkpArrName] !== "undefined") && (this[lkpArrName].length > 0)) {
      rec = this[lkpArrName].find((x:any) => x.CODE === CODE);
    }
    return rec;
  }

  public getlkpArrField(fieldName) {
    //if (this.paramConfig.DEBUG_FLAG) console.log("test:getlkpArrField: fieldName:", fieldName)
    var templateFieldsRec = this.getFieldsRec(fieldName, this.templateFields);
    var lkpArrName = "lkpArr" + templateFieldsRec.FIELD_LOOKUP;
    //if (this.paramConfig.DEBUG_FLAG) console.log("test:getlkpArrField: lkpArrName:", lkpArrName, " this[lkpArrName]:", this[lkpArrName])

    return this[lkpArrName];
  }
  private getFieldsRec(fieldID, templateFields) {
    var i = 0;
    var templateFieldsRec = null;
    while (i < templateFields.length) {
      //    if (this.paramConfig.DEBUG_FLAG) console.log("test:fieldID:", fieldID, " templateFields[i].FIELD_ID:", templateFields[i].FIELD_ID)
      if (fieldID == templateFields[i].FIELD_ID) {
        templateFieldsRec = templateFields[i];
        break;
      }
      i++;
    }
    return templateFieldsRec;
  }

  private createFormGroup(fields: any = {}) {
    if (this.paramConfig.DEBUG_FLAG) console.log("test:fields:", fields)
    var Rec = {}

    for (var key in fields) {
      //if (this.paramConfig.DEBUG_FLAG) console.log(key);
      var val = fields[key];
      val = this.parseDefaultField(val)
      //if (this.paramConfig.DEBUG_FLAG) console.log(fields[key]);

      var formControl = new FormControl(val);
      var templateFieldsRec = this.getFieldsRec(key, this.templateFields);
      if (templateFieldsRec != null) {
        if (templateFieldsRec.FIELD_TYPE == "DATE") {
          if ((val == "") || (val == null))
            val = null;
          else {
            val = formatDate(val, this.paramConfig.DateFormat, this.paramConfig.dateLocale)
            val = new Date(val);
          }
        }
        else if (templateFieldsRec.FIELD_TYPE == "CHECKBOX") {
          val = val == "1"
        }

        // if (templateFieldsRec != null) {
        //   if (templateFieldsRec.FIELD_REQUIRED == true)
        //     formControl = new FormControl(val, Validators.required);
        //   else
        //     formControl = new FormControl(val);
        //   Rec[key] = formControl;
        // }

        formControl.setValidators(this.getValidators(templateFieldsRec.FIELD_FORMAT, templateFieldsRec.FIELD_REQUIRED, templateFieldsRec.FIELD_TYPE))

        Rec[key] = formControl;
      }
    }

    if (this.paramConfig.DEBUG_FLAG) console.log("Valid Check:", Rec)
    var rec1 = new FormGroup(Rec);

    return rec1;
  }

  getValidators(validators, isRequired, isEmail) {
    if (this.paramConfig.DEBUG_FLAG) console.log("test1:validators:",validators)
    let _validators = JSON.parse(validators || "{}")
    let allValidators = []

    if (isRequired) allValidators.push(Validators.required)
    if (isEmail.toLowerCase() == "email" ) allValidators.push(Validators.email)

    Object.keys(_validators).forEach(key => {
      let validator = _validators[key]

      if (key.toLowerCase() == "min") allValidators.push(Validators.min(validator))
      else if (key.toLowerCase() == "minlength") allValidators.push(Validators.minLength(validator))
      else if (key.toLowerCase() == "max") allValidators.push(Validators.max(validator))
      else if (key.toLowerCase() == "maxlength") allValidators.push(Validators.maxLength(validator))
      else if (key.toLowerCase() == "pattern") allValidators.push(Validators.pattern(validator))
      else if (key.toLowerCase() == "email") allValidators.push(Validators.email)
    })

    return allValidators
  }

  public showFormData(jsonData, templateFields) {

    // this.grid.loading = true;
    // this.grid.data=[];

    function getProp(fieldFormat, key) {
      return (fieldFormat[key]);
    }

    this.disableUpload = false;
    if (this.paramConfig.DEBUG_FLAG) console.log("test1:------result::", jsonData);
    //if (this.paramConfig.DEBUG_FLAG) console.log(rjsonData);
    if (this.paramConfig.DEBUG_FLAG) console.log("test1:templateFields:", templateFields)
    var columnsDef = [];
    var columnsPerRowDef = [];
    var rowID, currentrowID;
    this.rows = [];

    currentrowID = templateFields[0].FIELD_ROW;
    var rowNum = 0;
    this.rows.push(rowNum);

    for (var i = 0; i < templateFields.length; i++) {
      var fieldName = templateFields[i].FIELD_ID;
      var fieldNameCaps = templateFields[i].FIELD_NAME;
      var fieldFormat = ""; //{};
      var fieldWidth = 50;
      var fieldStyle = "width:50px;";
      var fieldType = templateFields[i].FIELD_TYPE;
      if (fieldType != null)
        fieldType = fieldType.toLowerCase();
      var fieldDate = false;
      var fieldDateInput = false;
      var fieldLookup = false;
      var fieldCheckBox = false;
      var fieldNumericBox = false;
      var fieldEmailBox = false;
      var fieldAttachment = false;
      var fieldImageUpload = false;
      var fieldImage = false;
      var fieldText = false;
      var fieldPassword = false;
      var fieldRadio = false;
      var fieldRadioArr =[];
      var fieldTextArea = false;
      var fieldLabel = false;
      var fieldHtml = false;
      var fieldSignature = false;
      var numericSpinner = "false";
      var numericStep = 1;
      var numericMin = -100000000000000;
      var numericMax = 1000000000000000;
      var fieldHelp = templateFields[i].FIELD_HELP;
      fieldHelp = this.starServices.getNLS([],templateFields[i].FIELD_ID + "_" + "HELP", fieldHelp);
      var fieldRequired = templateFields[i].FIELD_REQUIRED;
      var fieldProtected = templateFields[i].FIELD_PROTECTED;
      var fieldDefault = templateFields[i].FIELD_DEFAULT;
      var showIf = templateFields[i].FIELD_SHOW_IF;

      let fieldMask: string = null
      if (templateFields[i].FIELD_FORMAT && templateFields[i].FIELD_FORMAT.indexOf("mask") > -1)
        fieldMask = JSON.parse(templateFields[i].FIELD_FORMAT)["mask"]
      if (fieldMask && fieldMask.trim() == "") fieldMask = null

      if (fieldType == "date") {
        fieldWidth = 250
        fieldFormat = this.paramConfig.DateFormat //"{0:d}";
        fieldLookup = false;
        fieldDate = true;
      }
      if (templateFields[i].FIELD_TYPE == "DATE_INPUT") {
        fieldWidth = 250
        fieldFormat = this.templateFields[i].FIELD_FORMAT;
        fieldLookup = false;
        fieldDateInput = true;
      }

      if (templateFields[i].FIELD_TYPE == "CHECKBOX") {
        fieldCheckBox = true;
      }

      if (templateFields[i].FIELD_TYPE == "SIGNATURE") {
        fieldSignature = true;
      }

      if (templateFields[i].FIELD_TYPE == "NUMERIC") {
        fieldNumericBox = true;
        fieldFormat = this.templateFields[i].FIELD_FORMAT;
        if (this.paramConfig.DEBUG_FLAG) console.log("fieldFormat:", fieldFormat)
        if ((fieldFormat == "") || (fieldFormat == null)) {
          fieldFormat = "n2";
        }
        else {
          if (fieldFormat[0] == "{") {
            fieldFormat = JSON.parse(fieldFormat);
            //{"style": "currency","currency": "KWD ","currencyDisplay": "code","minimumFractionDigits":0, "min":0, "max":5, "spinners":true,"step":1, "maximumFractionDigits":1}

            numericSpinner = getProp(fieldFormat, "spinners")
            numericStep = getProp(fieldFormat, "step")
            numericMin = getProp(fieldFormat, "min")
            numericMax = getProp(fieldFormat, "max")
            if (this.paramConfig.DEBUG_FLAG) console.log("fieldFormat:", fieldFormat)
          }

        }
      }
      if (templateFields[i].FIELD_TYPE == "") {
        templateFields[i].FIELD_TYPE = "TEXT";
      }
      if (templateFields[i].FIELD_TYPE == "EMAIL") {
        fieldEmailBox = true;
      }
      if (templateFields[i].FIELD_TYPE == "ATTACHMENT") {
        fieldAttachment = true;
      }
      if (templateFields[i].FIELD_TYPE == "IMAGE_UPLOAD") {
        fieldImageUpload = true;
      }
      
      if (this.paramConfig.DEBUG_FLAG) console.log("check:templateFields[i].FIELD_TYPE:", templateFields[i].FIELD_TYPE, fieldAttachment)
      if (templateFields[i].FIELD_TYPE == "IMAGE") {
        fieldImage = true;
      }
      if (templateFields[i].FIELD_TYPE == "TEXT") {
        fieldText = true;
      }
      if (templateFields[i].FIELD_LOOKUP != "") {
        fieldLookup = true;
        fieldText = false;
      }
      if (templateFields[i].FIELD_TYPE == "PASSWORD") {
        fieldPassword = true;
      }
      if (templateFields[i].FIELD_TYPE == "RADIO") {
        fieldRadio = true;
        fieldRadioArr = templateFields[i].FIELD_RADIO;
      }
      if (templateFields[i].FIELD_TYPE == "TEXT_AREA") {
        fieldTextArea = true;
      }
      if (templateFields[i].FIELD_TYPE == "LABEL") {
        fieldLabel = true;
      }
      if (templateFields[i].FIELD_TYPE == "HTML") {
        fieldHtml = true;
      }
      fieldNameCaps = this.starServices.getNLS([],templateFields[i].FIELD_ID, fieldNameCaps);
      if (this.isPageReadOnly){
        fieldProtected = 1;
        this.disableUpload = true;
      }
      if (templateFields[i].FIELD_TYPE == "IMAGE_UPLOAD")
        fieldStyle = templateFields[i].FIELD_FORMAT;

      var field = {
        id: templateFields[i].FIELD_ID,
        field: fieldName,
        fieldNameCaps,
        fieldRequired,
        title: fieldNameCaps + (fieldRequired == 1 ? " *" : ""),
        html: "",
        type: fieldType,
        width: fieldWidth,
        style: "width:50px;",
        format: fieldFormat,
        lookup: fieldLookup,
        numericSpinner: numericSpinner,
        numericStep: numericStep,
        numericMin: numericMin,
        numericMax: numericMax,

        datefield: fieldDate,
        dateInputfield: fieldDateInput,
        checkboxfield: fieldCheckBox,
        numericboxfield: fieldNumericBox,
        emailboxfield: fieldEmailBox,
        attachmentfield: fieldAttachment,
        imageUploadfield: fieldImageUpload,
        
        imagefield: fieldImage,
        textfield: fieldText,
        passwordfield: fieldPassword,
        radiofield: fieldRadio,
        radiofieldArr : fieldRadioArr,  
        textAreafield: fieldTextArea,
        labelfield: fieldLabel,
        htmlfield: fieldHtml,

        fieldHelp: fieldHelp,
        fieldProtected: fieldProtected,
        fieldDefault: fieldDefault,
        signatureField: fieldSignature,
        maskField: fieldMask,
        showIf
      }

      if (this.paramConfig.DEBUG_FLAG) console.log("test: currentrowID:", currentrowID, " templateFields[i].FIELD_ROW:", templateFields[i].FIELD_ROW, " field:", field)
      if (currentrowID != templateFields[i].FIELD_ROW) {
        columnsDef.push(columnsPerRowDef);
        currentrowID = templateFields[i].FIELD_ROW;
        rowNum++;
        this.rows.push(rowNum);
        columnsPerRowDef = [];
        columnsPerRowDef.push(field);
      }
      else
        columnsPerRowDef.push(field);

      if (this.paramConfig.DEBUG_FLAG) console.log("test:columnsDef:", columnsDef, " columnsPerRowDef:", columnsPerRowDef);



      if (templateFields[i].FIELD_TYPE == "IMAGE") {
        // field.style = "background-image: url(https://www.w3schools.com/images/w3schools_green.jpg);width: 200px;height: 100px;background-repeat: no-repeat;";
        var defaultValue = templateFields[i].FIELD_DEFAULT;
        field.style = "background-image: url(" + defaultValue + ");width: 200px;height: 100px;background-repeat: no-repeat;background-size:50%;";
        if (this.paramConfig.DEBUG_FLAG) console.log("field.style:", field.style);

      }
      else if (templateFields[i].FIELD_TYPE == "LABEL") { }
      else if (templateFields[i].FIELD_TYPE == "HTML") {

        field.html = templateFields[i].FIELD_DEFAULT;
      }
      else {
        var defaultValue = templateFields[i].FIELD_DEFAULT;
        if (templateFields[i].FIELD_TYPE == "CHECKBOX") {
          if (this.paramConfig.DEBUG_FLAG) console.log("formInitialValues:defaultValue:", defaultValue)
          if (defaultValue == 0)
            defaultValue = false;
          else
            defaultValue = true;
          if (this.paramConfig.DEBUG_FLAG) console.log("formInitialValues:defaultValue:", defaultValue)
        }

        try {
          let value = (0,eval)(defaultValue); 
          this.formInitialValues[fieldName] = value
        } catch (e) {
          this.formInitialValues[fieldName] = defaultValue;
        }
        // this.formInitialValues[fieldName] = defaultValue;

      }


      var lkpDef = this.starServices.prepareLookup(templateFields[i].FIELD_LOOKUP, this.paramConfig);
      this.lookupArrDef.push(lkpDef);
    }
    if (columnsPerRowDef.length != 0) {
      columnsDef.push(columnsPerRowDef);
    }
    if (this.paramConfig.DEBUG_FLAG) console.log("test:columnsDef:", columnsDef, " this.columns1:", this.columns1, " rows:", this.rows, " rows1:", this.rows1);
    if (this.paramConfig.DEBUG_FLAG) console.log("formInitialValues:", this.formInitialValues)
    this.form = this.createFormGroupForm(
      this.formInitialValues
    );
    //this.form.get('EMAIL').disable();
    
    Object.keys(this.form.controls).forEach(key => {
      fieldProtected = 0;
      var rec = templateFields.find((x:any) => x.FIELD_ID === key);
      if (typeof rec !== "undefined") {
        
        fieldProtected = rec.FIELD_PROTECTED;
      }
      console.log("FormKey :key:", key, fieldProtected);
      if (fieldProtected == 1 || this.areaProtected)
        this.form.get(key).disable();
  
    })

    this.form.markAllAsTouched()
    setTimeout(() => {
      this.formValidationChangedOutput.emit(this.form.valid)
    }, 100)

    this.columns = columnsDef;
    this.starServices.fetchLookups(this, this.lookupArrDef);
    /*
    if (this.paramConfig.DEBUG_FLAG) console.log("test:jsonData.length:", jsonData.length)
    var ol = Object.keys(jsonData);
    if (this.paramConfig.DEBUG_FLAG) console.log("test:",ol);
    if (this.paramConfig.DEBUG_FLAG) console.log("test:", ol.length);
    */
   if (typeof jsonData[0] !== "undefined") {
      if (Object.keys(jsonData[0]).length != 0) {
        var i = 0;
        var formData = jsonData[0];
        for (var key in formData) {

          var val = formData[key];
          val = this.parseDefaultField(val)
          if (this.paramConfig.DEBUG_FLAG) console.log("key:", key, " : ", formData[key]);

          var templateFieldsRec = this.getFieldsRec(key, this.templateFields);
          if (templateFieldsRec != null) {
            if (templateFieldsRec.FIELD_TYPE == "DATE") {
              if ((val == "") || (val == null)) {
                //val = new Date();
                val = null;
              }
              else
                val = new Date(val);
              if (this.paramConfig.DEBUG_FLAG) console.log("test:val:", val)
              formData[key] = val;

            }
            else if (templateFieldsRec.FIELD_TYPE == "SIGNATURE") {
              setTimeout(() => {
                if (this.signaturePad)
                  this.signaturePad.fromDataURL(formData[key])
              }, 100)
            }
          }

          Object.keys(this.form.controls).forEach(key => {
            if (!formData[key])
              formData[key] = this.form.controls[key].value
          })

          this.form.reset(formData);

        }

        /*var formData = {}
        for (var key in jsonData[0]) {
          var val = jsonData[0][key]
          if (val != "" && val != null) {
            formData[key] = val
          }
        }*/

        //if (this.paramConfig.DEBUG_FLAG) console.log("check:jsonData:", jsonData[0])
        //if (Object.entries(formData).length > 0)
        // this.form.reset(formData);

      }
    }

    for (let i = 0; i < this.rows.length; i++) {
      for (let j = 0; j < this.columns[i].length; j++) {
        const field = this.columns[i][j];
        if (field.showIf && field.showIf.includes('==')) {
          let fieldEnabler = field.showIf.trim().split('==')[0]

          if (this.isFieldShown(field, this.form.controls[fieldEnabler].value))
            this.form.controls[field.id].enable()
          else
            this.form.controls[field.id].disable()
        }
      }
    }

    if (this.paramConfig.DEBUG_FLAG) console.log("checking:this.form.value:", this.form.value)
    for (let i=0; i<templateFields.length;i++){
      if (templateFields[i].FIELD_TYPE == "ATTACHMENT")
        this.att_arr.push(templateFields[i].FIELD_ID);
      if (templateFields[i].FIELD_TYPE == "IMAGE_UPLOAD")
        this.img_arr.push(templateFields[i].FIELD_ID);

    }
    this.starServices.callGetSaveAttachemts("fetch", this.form.value,this);
    this.starServices.att_img_populateArrs(this.form.value,this);
    //this.grid.loading = false;
  }
  public ngAfterContentChecked() {
    this.starServices.setRTL();

  }
  ngAfterViewInit() {
    // this.signaturePad is now available
    // this.signaturePad.set('minWidth', 5); // set szimek/signature_pad options at runtime
    // this.signaturePad.clear(); // invoke functions from szimek/signature_pad API
  }
  public printScreen() {
    window.print();
  }
  @Input() public set setComponentConfig_Input(ComponentConfig: componentConfigDef) {
    if (typeof ComponentConfig !== "undefined") {
      if (this.paramConfig.DEBUG_FLAG) console.log("test1:dsp-dynamic-rw-form ComponentConfig:", ComponentConfig);

      this.componentConfig = this.starServices.setComponentConfig(ComponentConfig, this.componentConfig);
      if (ComponentConfig.isMaster == true)
        this.isMaster = true;

      if (ComponentConfig.masterSaved != null) {
        var jsonData = [];
        this.form.markAsPristine();
        jsonData.push(this.form.value);
        if (this.paramConfig.DEBUG_FLAG) console.log("test1:ComponentConfig.masterSaved:", ComponentConfig.masterSaved)
        if (this.paramConfig.DEBUG_FLAG) console.log("getFileLink:this.form.value:", this.form.value)
        var rec = {
          "pageNo": this.pageNo,
          "areaNo": this.areaNo,
          "areaTitle": this.areaTitle,
          "areaDataName": this.areaDataName,
          "areaType": this.areaType,
          "data": jsonData,
          "templateFields": this.templateFields,
          "pageType": this.formType
        }
        this.starServices.callGetSaveAttachemts("save","",this);
        if (this.paramConfig.DEBUG_FLAG) console.log("test1:pre saveCompletedOutput:rec:", rec)
        this.saveCompletedOutput.emit(rec);
      }
      if (ComponentConfig.masterKey != null) {
        this.isDYNAMIC_FIELDEnable = false;
        this.masterKey = ComponentConfig.masterKey;
      }
      if (ComponentConfig.masterKeyArr != null) {
        this.masterKeyArr = ComponentConfig.masterKeyArr;
      }
      if (ComponentConfig.masterKeyNameArr != null) {
        this.masterKeyNameArr = ComponentConfig.masterKeyNameArr;
      }

      if (ComponentConfig.formattedWhere != null) {
        this.formattedWhere = ComponentConfig.formattedWhere;
        this.isSearch = true;
        this.executeQuery(this.form)

      }
      if (ComponentConfig.title != null) {
        this.title = ComponentConfig.title;
      }


      if (ComponentConfig.masterParams != null) {

        if (this.paramConfig.DEBUG_FLAG) console.log("test1:ComponentConfig.masterParams:", ComponentConfig.masterParams)

        this.templateFields = ComponentConfig.masterParams.templateFields;
        if (ComponentConfig.masterParams.orderFields == "") {
          ComponentConfig.masterParams.orderFields = null;
        }
        this.pageNo = ComponentConfig.masterParams.pageNo;
        this.areaNo = ComponentConfig.masterParams.areaNo;
        this.areaTitle = ComponentConfig.masterParams.areaTitle;
        this.areaDataName = ComponentConfig.masterParams.areaDataName;
        this.areaType = ComponentConfig.masterParams.areaType;
        this.areaHelp = ComponentConfig.masterParams.areaHelp
        this.formType = ComponentConfig.masterParams.formType
        this.formName = ComponentConfig.masterParams.formName;
        this.orderFieldsData = ComponentConfig.masterParams.orderFieldsData;
        this.areaProtected = ComponentConfig.masterParams.areaProtected;
        this.isPageReadOnly  = ComponentConfig.masterParams.isPageReadOnly;

        this.componentConfig.showToolBar = !this.areaProtected;

        if (this.paramConfig.DEBUG_FLAG) console.log("ComponentConfig.masterParams.orderFields:", ComponentConfig.masterParams.orderFields)
        var orderFields = JSON.parse(ComponentConfig.masterParams.orderFields);
        this.showFormData(orderFields,
          ComponentConfig.masterParams.templateFields);
      }


    }
    if (typeof this.form != "undefined") {
      this.formValidationChangedOutput.emit(this.form.valid)
      this.form.statusChanges.subscribe(() => {
        this.formValidationChangedOutput.emit(this.form.valid)
      })
    }
  }

  hasComplexity(pad: SignaturePad, complexity?: number) {
    if (!complexity) {
      complexity = 10;
    }
    const points:any = pad.toData();
    const pointCount = [].concat.apply([], points[0].points).length;
    return points && pointCount >= complexity;
  }

  
  
  public signatureComplete(sig, field) {
    let signature = sig.toDataURL()
    const isValid = this.hasComplexity(sig, 20);
    if (isValid)
      this.form.get(field).setValue(signature)
    else this.form.get(field).setValue("")
  }

  clearSignaturePad(sig, field) {
    this.signaturePad.toDataURL();
    console.log("sig:", this.signaturePad.toDataURL())
    sig.clear()
    this.form.get(field).setValue("")
  }

  @Input() public set setLanguageChanged(lang) {
    setTimeout(() => {
      if (this.columns)
        this.columns.forEach(column => {
          column.forEach(row => {
            let title = this.starServices.getNLS([],row.id, row.fieldNameCaps)
            row.title = title + (row.fieldRequired == 1 ? " *" : "")
          })
        })
    }, 500);
  }

  isFieldShown(field, value = null) {
    if (field.showIf && field.showIf.includes('==')) {
      let fieldEnabler = field.showIf.trim().split('==')[0]

      if (fieldEnabler == field.id) return true;

      let checkValue = field.showIf.trim().split('==')[1]

      if (value)
        return value == checkValue;

      return this.form.get(fieldEnabler).value == checkValue;
    }

    return true
  }

  fieldsEnablerSelectionChange(id, e) {
    let isFieldEnabler = this.columns.some(column => column.some(field => field["showIf"].includes(id)))

    if (isFieldEnabler) {
      for (let i = 0; i < this.rows.length; i++) {
        for (let j = 0; j < this.columns[i].length; j++) {
          const field = this.columns[i][j];
          if (this.isFieldShown(field, e.CODE))
            this.form.controls[field.id].enable()
          else
            this.form.controls[field.id].disable()
        }
      }
    }
    if (this.paramConfig.DEBUG_FLAG) console.log("Valid Check:this.form.valid:", this.form.valid)
    this.formValidationChangedOutput.emit(this.form.valid)
  }

  parseDefaultField(value: string) {
    if (value && value.startsWith && value.startsWith(":") && this.orderFieldsData) {
      let val = this.orderFieldsData[value.split(':')[1]]
      if (val) return val
    }

    return value
  }
  public userMsg ="";
  public msgOpened = false;
 
  
  async onValueChange( event, column, form) { 
    function loadscript (scriptURL) {
      var head = document.getElementsByTagName('head')[0];
      var script = document.createElement('script');
      script.type = 'text/javascript';
      script.src = scriptURL;
      head.appendChild(script);
   }
    loadscript ("assets/js/gridfunctions.js");  //Fuad: this loading should take place in setup screen
    await this.starServices.sleep(500);
    let retVal = onChangeConfig(this.formName, column.id,  event.target.value, form.value);
    console.log("retVal:", retVal)
    if ( (retVal.WarnMsg  != "")){
      this.userMsg =  retVal.WarnMsg;
      this.msgOpened = true;
     
    }
    if ( (retVal.ErrMsg  != "") ){
      this.userMsg =  retVal.ErrMsg;
      this.msgOpened = true;
      this.form.controls[column.id].setErrors({invalid: true}); 
    }
    this.form.setValue(retVal.form);
    this.formValidationChangedOutput.emit(this.form.valid)
  } 
    // For Attachments and images
public myFiles = [[]];
public filesDeleted = [[]];
public img_gallery = [[]];
public DSP_UPLOADConfig: componentConfigDef;
public att_arr = [];
public img_arr = [];
public AttDwnUrl = "";
public uploadimage = false;


public getAttWrapper(field){
  
  //console.log("getAtt_data: inside getAttWrapper:field:", field, "form.get:", 
  //  this.form.get(field).value)
    
  //console.log("getAtt_data:this.form:",this.form, this.form.value[field]);
  let val = this.form.value[field];
  //console.log("getAtt_data: inside getAttWrapper:field:", field, val)
  let retVal = this.starServices.att_img_getAtt(val,this);
  return retVal;
}

public indices = [ {value:"1", text:"111111"},  {value:"2", text:"222222"}];
  

}

