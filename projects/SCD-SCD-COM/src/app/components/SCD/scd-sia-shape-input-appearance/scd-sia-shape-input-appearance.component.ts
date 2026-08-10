import { Component, Input, Output, EventEmitter, HostListener } from '@angular/core';
import { FormGroup, FormControl, Validators ,FormBuilder} from '@angular/forms';
import { starServices } from 'starlib';
import { StarNotifyService } from '../../../services/starnotification.service';

import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';

import { Subscription } from 'rxjs';
import { IntlService } from "@progress/kendo-angular-intl";
import {  ViewEncapsulation } from "@angular/core";
import { Router } from '@angular/router';
import { TabAlignment } from '@progress/kendo-angular-layout';
import { scdshapeInputAppearanceScdSiaShapeInputAppearance , componentConfigDef} from '@modeldir/model';


 const createFormGroup = (dataItem:any) => new FormGroup({
'SHAPE_INPUT_APPEARANCE_ID' : new FormControl(dataItem.SHAPE_INPUT_APPEARANCE_ID  , ) ,
'SHAPE_ID' : new FormControl(dataItem.SHAPE_ID  ,   Validators.required ) ,
'WIDTH' : new FormControl(dataItem.WIDTH  , ) ,
'HEIGHT' : new FormControl(dataItem.HEIGHT  , ) ,
'FORMAT' : new FormControl(dataItem.FORMAT  , ) ,
'OVERFLOW' : new FormControl(dataItem.OVERFLOW  , ) ,
'FIELD_LENGTH' : new FormControl(dataItem.FIELD_LENGTH  , ) ,
'SHOW_DIGIT_GROUPING' : new FormControl(dataItem.SHOW_DIGIT_GROUPING  , ) ,
'DECIMAL_PLACES' : new FormControl(dataItem.DECIMAL_PLACES  , ) ,
'DYNAMIC_DECIMAL_PLACES' : new FormControl(dataItem.DYNAMIC_DECIMAL_PLACES  , ) ,
'FIXED_DECIMAL_PLACES' : new FormControl(dataItem.FIXED_DECIMAL_PLACES  , ) ,
'JUSTIFICATION' : new FormControl(dataItem.JUSTIFICATION  , ) ,
'LEADING_CHARACTER' : new FormControl(dataItem.LEADING_CHARACTER  , ) ,
'EXPRESSION' : new FormControl(dataItem.EXPRESSION  , ) ,
'EXPRESSION_TRUE_STATE' : new FormControl(dataItem.EXPRESSION_TRUE_STATE  , ) 
});

declare function getParamConfig():any;
@Component({
  selector: 'app-scd-sia-shape-input-appearance',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './scd-sia-shape-input-appearance.component.html',
  styleUrls: ['./scd-sia-shape-input-appearance.component.scss'],
  standalone: false
})


export class ScdShapeInputAppearanceScdSiaShapeInputAppearanceFormdivsComponent {
  public title =  this.starServices.getNLS([],"SCD_SIA_SHAPE_INPUT_APPEARANCE.scdshapeInputAppearanceScdSiaShapeInputAppearance.component_title","Shape Input Appearance");
  public compTitleMsg =  "SCD_SIA_SHAPE_INPUT_APPEARANCE.scdshapeInputAppearanceScdSiaShapeInputAppearance";
  public routineName = "ScdShapeInputAppearanceScdSiaShapeInputAppearanceFormdivs";
  private insertCMD = "INSERT_SCD_SHAPE_INPUT_APPEARANCE";
  private updateCMD = "UPDATE_SCD_SHAPE_INPUT_APPEARANCE";
  private deleteCMD =   "DELETE_SCD_SHAPE_INPUT_APPEARANCE";
  private getCMD = "GET_SCD_SHAPE_INPUT_APPEARANCE_QUERY";

  public value: Date = new Date(2019, 5, 1, 22);
  public format: string = 'MM/dd/yyyy HH:mm';
  public active = false;

  public  form!: FormGroup; 
  public PDFfileName = this.title + ".PDF";
  public componentConfig: componentConfigDef;
  public editableMode = false;
  private CurrentRec = 0;
  public  executeQueryresult:any;
  public isSearch!: boolean;
  public isChild: boolean = false;
  public isMaster: boolean = false;
  public isSearchScreen:boolean = false;
  public  isSHAPE_IDEnable : boolean = true;

  public FORM_TRIGGER_FAILURE:any;
  public NOTFOUND:any;
  public disableEmitSave = false;
  public disableEmitReadCompleted = false;
  public children = ["any"];

  public action = "";
  private Body:any =[];
  public isNew!: boolean;
  public primarKeyReadOnlyArr = {isSHAPE_INPUT_APPEARANCE_IDreadOnly : false , isSHAPE_IDreadOnly : false};  
  public paramConfig;
  private masterKeyArr = [];
  private masterKeyNameArr = [];
  public  masterKey="";
  public masterKeyName ="SHAPE_ID";
  public WhereClause = "";
  public OrderByClause = "";
  
  public formattedWhere:any = null;  
  public  submitted =  false;
  public masterParams:any;
  public alignment: TabAlignment = 'start';
  public isPhonePortrait = false;
  public compSelector = 'app-scd-sia-shape-input-appearance';
  public PK_AUTO = 'SHAPE_INPUT_APPEARANCE_ID';
  public customerFacing = false;
  public FormStepsArr = [{"CODE":"","CODETEXT_LANG":"","visible":true},{"CODE":"1","CODETEXT_LANG":"Dimensions","visible":true},{"CODE":"2","CODETEXT_LANG":"Numeric","visible":true},{"CODE":"3","CODETEXT_LANG":"Justification","visible":true},{"CODE":"4","CODETEXT_LANG":"Leading Character","visible":true},{"CODE":"5","CODETEXT_LANG":"Disabled State","visible":true}] ;
public labelSHAPE_INPUT_APPEARANCE_IDTop=false;
public labelSHAPE_INPUT_APPEARANCE_IDVisible=true;
public labelSHAPE_IDTop=false;
public labelSHAPE_IDVisible=true;
public labelWIDTHTop=false;
public labelWIDTHVisible=true;
public labelHEIGHTTop=false;
public labelHEIGHTVisible=true;
public labelFORMATTop=false;
public labelFORMATVisible=true;
public labelOVERFLOWTop=false;
public labelOVERFLOWVisible=true;
public labelFIELD_LENGTHTop=false;
public labelFIELD_LENGTHVisible=true;
public labelSHOW_DIGIT_GROUPINGTop=false;
public labelSHOW_DIGIT_GROUPINGVisible=true;
public labelDECIMAL_PLACESTop=false;
public labelDECIMAL_PLACESVisible=true;
public labelDYNAMIC_DECIMAL_PLACESTop=false;
public labelDYNAMIC_DECIMAL_PLACESVisible=true;
public labelFIXED_DECIMAL_PLACESTop=false;
public labelFIXED_DECIMAL_PLACESVisible=true;
public labelJUSTIFICATIONTop=false;
public labelJUSTIFICATIONVisible=true;
public labelLEADING_CHARACTERTop=false;
public labelLEADING_CHARACTERVisible=true;
public labelEXPRESSIONTop=false;
public labelEXPRESSIONVisible=true;
public labelTAGS1Top=false;
public labelTAGS1Visible=true;
public labelEXPRESSIONSTop=false;
public labelEXPRESSIONSVisible=true;
public labelEXPRESSION_TRUE_STATETop=false;
public labelEXPRESSION_TRUE_STATEVisible=true;
public labelTAGS2Top=false;
public labelTAGS2Visible=true;

public visibleSHAPE_INPUT_APPEARANCE_ID = false;
public visibleSHAPE_ID = false;
public visibleWIDTH = true;
public visibleHEIGHT = true;
public visibleFORMAT = true;
public visibleOVERFLOW = true;
public visibleFIELD_LENGTH = true;
public visibleSHOW_DIGIT_GROUPING = true;
public visibleDECIMAL_PLACES = true;
public visibleDYNAMIC_DECIMAL_PLACES = true;
public visibleFIXED_DECIMAL_PLACES = true;
public visibleJUSTIFICATION = true;
public visibleLEADING_CHARACTER = true;
public visibleEXPRESSION = true;
public visibleTAGS1 = true;
public visibleEXPRESSIONS = true;
public visibleEXPRESSION_TRUE_STATE = true;
public visibleTAGS2 = true;

public disableSHAPE_INPUT_APPEARANCE_ID = false;
public disableSHAPE_ID = false;
public disableWIDTH = false;
public disableHEIGHT = false;
public disableFORMAT = false;
public disableOVERFLOW = false;
public disableFIELD_LENGTH = false;
public disableSHOW_DIGIT_GROUPING = false;
public disableDECIMAL_PLACES = false;
public disableDYNAMIC_DECIMAL_PLACES = false;
public disableFIXED_DECIMAL_PLACES = false;
public disableJUSTIFICATION = false;
public disableLEADING_CHARACTER = false;
public disableEXPRESSION = false;
public disableTAGS1 = false;
public disableEXPRESSIONS = false;
public disableEXPRESSION_TRUE_STATE = false;
public disableTAGS2 = false;

public variableTAGS1;
public variableEXPRESSIONS;
public variableTAGS2;

  
  //@Input()  
  public showToolBar = true;
  @Output() readCompletedOutput: EventEmitter<any> = new EventEmitter();
  @Output() clearCompletedOutput: EventEmitter<any> = new EventEmitter();
  @Output() saveCompletedOutput: EventEmitter<any> = new EventEmitter();
  @Output() formValidationChangedOutput: EventEmitter<boolean> = new EventEmitter();

   constructor(public router: Router,public intl: IntlService, public responsive: BreakpointObserver, private starNotify: StarNotifyService,   public starServices: starServices) {
      this.router = router;
      this.componentConfig = new componentConfigDef(); 
      this.paramConfig = getParamConfig();
      this.userLang =  this.paramConfig.userLang.toUpperCase() ;
      this.componentConfig.queryable  = true;
      this.componentConfig.navigable = true;
      this.componentConfig.insertable = true;
      this.componentConfig.removeable = true;
      this.componentConfig.updateable = true;       
      this.componentConfig.showToolBar = true;
    //  this.componentConfig.enabled = true;

  }
  private componentConfigChangeEvent!: Subscription;
  public ngAfterViewInit() {
    this.starServices.setRTL();
    this.disableFields();
    this.WHEN_NEW_FORM_INSTANCE();
    
  }
  public Comp_Config!: componentConfigDef;
   async ngOnInit() {
     this.Comp_Config = new componentConfigDef();
      this.Comp_Config.isChild = true;

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
         if (componentConfig.eventTo.includes(this.compSelector)|| componentConfig.eventTo.includes("any"))  {
            this.handleComponentConfig(componentConfig);
         }
      }
   });


    //this.PRE_BLOCK();
    this.AttDwnUrl = this.starServices.SERVER_URL + "/api/att?action=download&username=" + this.starServices.sessionParams['USERNAME'].toLowerCase() + "&name=";

  this.form.markAllAsTouched()
    setTimeout(() => {
      this.formValidationChangedOutput.emit(this.form.valid)
    }, 100)
  }
  
  public ngOnDestroy(): void {
    // Unsubscribe the event once not needed.
    if (typeof this.componentConfigChangeEvent !== "undefined") this.componentConfigChangeEvent.unsubscribe();
 }

  callStarNotify(componentConfig:any) {
    componentConfig.eventFrom = this.compSelector;
    this.starNotify.sendEvent<componentConfigDef>('componentConfigDef', componentConfig);
  }

  private formInitialValues:any =   new scdshapeInputAppearanceScdSiaShapeInputAppearance();   
    @Input() public set detail_Input(form: any) {
       if (typeof form != "undefined"){
        this.isSearch = true;
        this.executeQuery(form);
        this.isChild = true;
      }
      /*
    if (this.paramConfig.DEBUG_FLAG) console.log('detail_Input ScdShapeInputAppearanceScdSiaShapeInputAppearanceFormdivs form.SHAPE_ID :' + form.SHAPE_ID);
    if ( (form.SHAPE_ID != "") &&   (typeof form.SHAPE_ID != "undefined"))
    {
      this.masterKey = form.SHAPE_ID;
      
      this.isSearch = true;
      this.executeQuery(form);
      this.isChild = true;
      //this.showToolBar = false;
    }
    else
    {
      
      if (typeof this.form != "undefined")
      {
        //this.isChild = false;
         this.form.reset();
        this.masterKey = "";
        
      }
    }
    */
  }
  @Input() public set executeQueryInput( form: any) {
    if ( (typeof form != "undefined") &&   (typeof form.SHAPE_ID != "undefined") &&   (form.SHAPE_ID != ""))
    {
      
      this.isSearch = true;
      this.executeQuery(form);
      this.isChild = true;
      //this.showToolBar = false;
    }
    else
    {
      
      if (typeof this.form != "undefined")
      {
        //this.isChild = false;
        this.form.reset();
        this.masterKey = "";
      }
    }
  }

  get f():any { return this.form.controls; }
  public formRec;
   async callBackFunction(data:any) {
    if (this.paramConfig.DEBUG_FLAG) console.log("inside callBackFunction:data:", data);
     this.form.markAllAsTouched()
    setTimeout(() => {
      this.formValidationChangedOutput.emit(this.form.valid)
    }, 100)
    this.myFiles = [[]];
    this.filesDeleted = [[]];
    this.img_gallery = [[]];
    this.starServices.callGetSaveAttachemts("fetch", data,this);
    this.starServices.callGetSaveWebCam("fetch", data,this);
    if (typeof data !== "undefined") {
      this.formRec = data;

    setTimeout(() => {
       this.update_svgicons(data);
    });
      await this.POST_QUERY(data);
      await this.starServices.att_img_populateArrs(data,this);
      //this.form.markAsPristine();
      //this.form.markAsUntouched();
      //this.commonCallStarNotify(data);

      
    }
  }async  commonCallStarNotify(masterParams){
    await this.starServices.sleep(200);
    let componentConfig = new componentConfigDef();
      componentConfig.eventTo = this.children;
      componentConfig.masterParams = masterParams;
      this.callStarNotify(componentConfig);
   }

    async executeQuery( form: any ) {
      if (typeof form == "undefined")
        return;
     await this.PRE_QUERY(form);
     if (this.FORM_TRIGGER_FAILURE == true)
         return;
    if (this.isSearchScreen == true){
      console.log("isSearchScreen:form.value:",form )
      let Page = this.starServices.formatWhere(form);
      console.log("isSearchScreen:Page:",Page )
      this.readCompletedOutput.emit(Page);
      return;
    }
    if ( (this.WhereClause != "") && (this.isSearch != true) )
    {
      this.formattedWhere = this.WhereClause ;
      this.isSearch = true;
    }
    let formGroup = createFormGroup(this.formInitialValues);
    let newForm = {...form}
    this.starServices.removeNonValidColumns(newForm,formGroup.value);
    this.starServices.executeQuery_form(newForm, this); // Fuad: this should be form, and not this.form.getRawValue()
  }

  private addToBody(NewVal:any){
    this.Body.push(NewVal);
  }

  public onCancel(e:any): void {
    this.starServices.onCancel_form ( e , this);
  }
   async fetchLookupsCallBack() {
      this.starServices.callltransformForTreeView(this);
      if (this.paramConfig.DEBUG_FLAG) console.log("this.lookupArrDef:", this.lookupArrDef)
      
   }

  public onNew(e:any): void {
    if (this.paramConfig.DEBUG_FLAG) console.log("this.masterKeyNameArr:", this.masterKeyNameArr, "this.masterKeyNameArr.length",this.masterKeyNameArr.length)
    if (this.masterKeyNameArr.length != 0)
    {
      for (let i = 0; i< this.masterKeyNameArr.length; i++){
        if (this.paramConfig.DEBUG_FLAG) console.log(this.masterKeyNameArr[i] + ":" + this.masterKeyArr[i])
        this.formInitialValues[this.masterKeyNameArr[i]] = this.masterKeyArr[i];
      }
    }
    else
    {
      if (this.paramConfig.DEBUG_FLAG) console.log(this.masterKeyName + this.masterKey)
      this.formInitialValues[this.masterKeyName] = this.masterKey;
    }

    this.starServices.onNew_form ( e , this);
    this.setRequired();
    this.setInitialValues();
    this.WHEN_CREATE_RECORD();
    //this.KEY_CRREC();
    this.form.markAllAsTouched();
    this.formValidationChangedOutput.emit(this.form.valid);


  }
   public setInitialValues() {
    
  
    //this.form.patchValue({ 'GSM_OPERATOR': 'N' });
    this.form.markAsPristine();
    this.form.markAsUntouched();

   }
   public setRequired() {
   //this.form.controls['GOVERNATE'].setValidators([Validators.required]);
   }



  async onRemove( form:any) {
    await this.PRE_DELETE(form.value);
    //await this.KEY_DELREC();
     if (this.FORM_TRIGGER_FAILURE) 
       return;

    this.starServices.onRemove_form(form,this);
  }

  async  enterQuery (form : any){
    
    this.starServices.enterQuery_form ( form, this);

    await this.KEY_ENTQRY();
  }

    async callBackPost_Insert(NewVal:any) {
      if (this.paramConfig.DEBUG_FLAG) console.log("callBackPost_Insert:",  " NewVal:", NewVal)
      //this.commonCallStarNotify(NewVal);
      if (this.FORM_TRIGGER_FAILURE) 
      {
         this.starServices.endTrans(this, false);
         return;
      }
      this.Comp_Config = new componentConfigDef();
      this.Comp_Config.masterSaved = NewVal;
      this.Comp_Config.masterKeyArr =  [NewVal['SHAPE_INPUT_APPEARANCE_ID']];
      this.Comp_Config.masterKeyNameArr =  ["SHAPE_INPUT_APPEARANCE_ID"];
         
       await this.POST_INSERT(NewVal);
      if (this.FORM_TRIGGER_FAILURE) 
      {
         this.starServices.endTrans(this, false);
         return;
      }

      if (this.paramConfig.DEBUG_FLAG) console.log("testing  post POST_INSERT : ", this.FORM_TRIGGER_FAILURE)
      if (!this.FORM_TRIGGER_FAILURE) {
        // Fuad: emit already taking place in starlib service
         //this.saveCompletedOutput.emit(this.form.getRawValue());
      }
   }
   async callBackPost_Update( NewVal:any) {
      if (this.paramConfig.DEBUG_FLAG) console.log("callBackPost_Update:",  " NewVal:", NewVal);
      //this.commonCallStarNotify(NewVal);
      await this.POST_UPDATE(NewVal);
   }

   async callBackPost_Remove( NewVal:any) {
      if (this.paramConfig.DEBUG_FLAG) console.log("callBackPost_Remove:",  " NewVal:", NewVal);
      //this.commonCallStarNotify("");
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
         if (this.FORM_TRIGGER_FAILURE){
            this.starServices.endTrans(this, false);
            return;
         }

      }
      else {
       
             await this.PRE_UPDATE(form.value);
         if (this.FORM_TRIGGER_FAILURE){
            this.starServices.endTrans(this, false);
            return;
         }

      }
      if (this.form.valid == false && this.form.dirty == true){
         let invalid = this.starServices.getInvalidControls(this);
          this.FORM_TRIGGER_FAILURE = true;
          this.starServices.endTrans(this, false);
          return;
      }

     
      if (!this.FORM_TRIGGER_FAILURE) {
	        await this.KEY_COMMIT();
	      if (this.FORM_TRIGGER_FAILURE == true){
		this.starServices.endTrans(this, false);
		 return;
		}
         this.starServices.callGetSaveAttachemts("save","",this);
         this.starServices.callGetSaveWebCam("save","",this);
         let form1 = this.starServices.stringifyMultiSelectFields(this,form);
         this.starServices.saveChanges_form(form1, this);
      }

   }


  public goRecord ( target:any): void{
    this.starServices.goRecord ( target, this);
  }

public userLang = "EN" ; 
public lookupArrDef:any =[];
public setlookupArrDef(){
this.lookupArrDef =[	{"statment":"SELECT SHAPE_ID CODE, NAME CODETEXT_LANG  FROM SCD_SHAPE  order by CODETEXT_LANG ",
			"lkpArrName":"lkpArrSHAPE_ID"},
	{"statment":"SELECT CODE, CODETEXT_LANG , PARTCODE FROM SOM_TABS_CODES WHERE CODENAME = \"FORMAT\"  and LANGUAGE_NAME = '" + this.userLang + "' order by CODETEXT_LANG ",
			"lkpArrName":"lkpArrFORMAT"},
	{"statment":"SELECT CODE, CODETEXT_LANG , PARTCODE FROM SOM_TABS_CODES WHERE CODENAME = \"OVERFLOW\"  and LANGUAGE_NAME = '" + this.userLang + "' order by CODETEXT_LANG ",
			"lkpArrName":"lkpArrOVERFLOW"},
	{"statment":"SELECT CODE, CODETEXT_LANG , PARTCODE FROM SOM_TABS_CODES WHERE CODENAME = \"DECIMAL_PLACES\"  and LANGUAGE_NAME = '" + this.userLang + "' order by CODETEXT_LANG ",
			"lkpArrName":"lkpArrDECIMAL_PLACES"},
	{"statment":"SELECT CODE, CODETEXT_LANG , PARTCODE FROM SOM_TABS_CODES WHERE CODENAME = \"JUSTIFICATION\"  and LANGUAGE_NAME = '" + this.userLang + "' order by CODETEXT_LANG ",
			"lkpArrName":"lkpArrJUSTIFICATION"},
	{"statment":"SELECT CODE, CODETEXT_LANG , PARTCODE FROM SOM_TABS_CODES WHERE CODENAME = \"LEADING_CHARACTER\"  and LANGUAGE_NAME = '" + this.userLang + "' order by CODETEXT_LANG ",
			"lkpArrName":"lkpArrLEADING_CHARACTER"},
	{"statment":"SELECT CODE, CODETEXT_LANG , PARTCODE FROM SOM_TABS_CODES WHERE CODENAME = \"EXPRESSION_TRUE_STATE\"  and LANGUAGE_NAME = '" + this.userLang + "' order by CODETEXT_LANG ",
			"lkpArrName":"lkpArrEXPRESSION_TRUE_STATE"}];
 if (this.lookupArrDef.length > 0)
   this.starServices.fetchLookups(this, this.lookupArrDef);
}

public lkpArrSHAPE_ID = [];

public lkpArrFORMAT = [];

public lkpArrOVERFLOW = [];

public lkpArrDECIMAL_PLACES = [];

public lkpArrJUSTIFICATION = [];

public lkpArrLEADING_CHARACTER = [];

public lkpArrEXPRESSION_TRUE_STATE = [];

public lkpArrGetSHAPE_ID(CODE: any): any {
var rec = this.lkpArrSHAPE_ID.find((x:any) => x.CODE === CODE);
return rec;
}

public lkpArrGetFORMAT(CODE: any): any {
var rec = this.lkpArrFORMAT.find((x:any) => x.CODE === CODE);
return rec;
}

public lkpArrGetOVERFLOW(CODE: any): any {
var rec = this.lkpArrOVERFLOW.find((x:any) => x.CODE === CODE);
return rec;
}

public lkpArrGetDECIMAL_PLACES(CODE: any): any {
var rec = this.lkpArrDECIMAL_PLACES.find((x:any) => x.CODE === CODE);
return rec;
}

public lkpArrGetJUSTIFICATION(CODE: any): any {
var rec = this.lkpArrJUSTIFICATION.find((x:any) => x.CODE === CODE);
return rec;
}

public lkpArrGetLEADING_CHARACTER(CODE: any): any {
var rec = this.lkpArrLEADING_CHARACTER.find((x:any) => x.CODE === CODE);
return rec;
}

public lkpArrGetEXPRESSION_TRUE_STATE(CODE: any): any {
var rec = this.lkpArrEXPRESSION_TRUE_STATE.find((x:any) => x.CODE === CODE);
return rec;
}

onChanges(): void {
this.form.get('SHAPE_INPUT_APPEARANCE_ID').valueChanges.subscribe(val => {
});
this.form.get('WIDTH').valueChanges.subscribe(val => {
});
this.form.get('HEIGHT').valueChanges.subscribe(val => {
});
this.form.get('FIELD_LENGTH').valueChanges.subscribe(val => {
});
this.form.get('DYNAMIC_DECIMAL_PLACES').valueChanges.subscribe(val => {
});
this.form.get('FIXED_DECIMAL_PLACES').valueChanges.subscribe(val => {
});
this.form.get('EXPRESSION').valueChanges.subscribe(val => {
});
}


public printScreen(){
  window.print();
}
  disableForm(){
    let controlNames = Object.keys(this.form.controls);
    //console.log("controlNames:", controlNames);
    controlNames.forEach(name => {
      this.form.get(name).disable();
      let id = "disable" + name;
      let status = this[id];     
      if (status !== '' && status == false)
        this.form.get(name).enable();
    });
  }
  disableFields(){
    let controlNames = Object.keys(this.form.controls);
     controlNames.forEach(name => {
      //console.log("disableFields name:", name);
      let id = "disable" + name;
      let status = this[id];     
       //console.log("disableFields id:", id, " status:", status);
      if (status == true)
        this.form.get(name).disable();
      else        
        this.form.get(name).enable();
    });
  }
  public handleComponentConfig(ComponentConfig:any) {
    if (typeof ComponentConfig !== "undefined") {
      if (this.paramConfig.DEBUG_FLAG) console.log("ScdShapeInputAppearanceScdSiaShapeInputAppearanceFormdivs ComponentConfig:", {...ComponentConfig});

      this.componentConfig = this.starServices.setComponentConfig(ComponentConfig, this.componentConfig);
      this.WHEN_NOTIFY(ComponentConfig);
      if (this.componentConfig.enabled == false) {
        this.disableForm();
      }
      if (ComponentConfig.isMaster == true)
        this.isMaster = true;
      if (ComponentConfig.isSearchScreen == true){
        this.isSearchScreen = true;
        this.isSearch = true;
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
      if (ComponentConfig.newRec != null) {
        if (this.componentConfig.insertable){
          this.form.reset(this.formInitialValues);
          this.onNew(this.form);
          this.form.markAsDirty();
        }
      }
      if (ComponentConfig.masterSaved != null) {
        this.saveChanges(this.form);
        ComponentConfig.masterSaved = null;
      }
      if (ComponentConfig.masterParams != null) {
        this.masterParams = ComponentConfig.masterParams;
      }

      if (ComponentConfig.formattedWhere != null) {
        this.formattedWhere = ComponentConfig.formattedWhere;
        this.isSearch = true;
        let formGroup = createFormGroup(this.formInitialValues);
        this.executeQuery(formGroup);

      }
      if (ComponentConfig.masterReadCompleted != null) {
        this.isSearch = false;
        this.isChild = true;
        this.executeQuery(this.form.getRawValue())
      }
      if (ComponentConfig.clearComponent == true) {
        this.onCancel(this.form)
      }
      if ( ComponentConfig.isChild == true)
      {
          this.isChild = true;
      }
      if (ComponentConfig.languageChanged != null) {
        if (this.userLang != ComponentConfig.languageChanged) {
          this.userLang =  ComponentConfig.languageChanged;
          this.setlookupArrDef();
        }
      }
      if (typeof this.form != "undefined") {
            this.formValidationChangedOutput.emit(this.form.status == "DISABLED" ? true :this.form.valid)
            this.form.statusChanges.subscribe(() => {
              this.formValidationChangedOutput.emit(this.form.status == "DISABLED" ? true :this.form.valid)
            })
          }
      
    }

  }
  @Input() public set setComponentConfig_Input(ComponentConfig: componentConfigDef) {
    this.handleComponentConfig(ComponentConfig);


  }
  async WHEN_NOTIFY(ComponentConfig){
    
if (ComponentConfig.masterSelector != null) {
    //alert(ComponentConfig.masterSelector )
    let masterSelector = ComponentConfig.masterSelector;
    if (masterSelector.includes("numeric")){
        this.appMode = "NUMERIC";
         
    }
       
    switch (this.appMode) {
        case 'NUMERIC':
            this.FormStepsArr[1].visible = false;
            //alert(this.appMode);
            break;
        default:
            break;
    }
}
  }
  async WHEN_NEW_FORM_INSTANCE(){
    	if (!this.isChild){
		this.executeQuery(this.form.value);
	}


    
  }
  async WHEN_CREATE_RECORD(){
    

  }
   KEY_ENTQRY(){
    

  }
   KEY_DELREC(){
    

  }
   async WHEN_VALIDATE_RECORD(formGroup){
    

  }
  async  PRE_UPDATE(formGroup){

  }
  async  POST_UPDATE(formGroup){
    
    
  }
  async KEY_COMMIT(){
   

}
 async ON_CLICK(formGroup){
     

}
  async  PRE_INSERT(formGroup){
    
    
  }
  async  POST_INSERT(formGroup){
    
   
  }
  async  PRE_QUERY (formGroup){
    
   
  }
  async  POST_QUERY(formGroup){
    
    
  }
  async  PRE_DELETE(formGroup:any){
    

  }
  async POST_DELETE(formGroup:any){
    

  }



async WHEN_VALIDATE_ITEM_SHAPE_INPUT_APPEARANCE_ID(value) {

 this.FORM_TRIGGER_FAILURE = false ; 
 if (typeof this.form.controls['SHAPE_INPUT_APPEARANCE_ID'] != "undefined" ) 
      this.form.controls['SHAPE_INPUT_APPEARANCE_ID'].setErrors({invalid: true}); 
 // Code goes here 
 

 if ( this.FORM_TRIGGER_FAILURE == true) 
 return; 
 
 if (typeof this.form.controls['SHAPE_INPUT_APPEARANCE_ID'] != "undefined" ) 
     this.form.get('SHAPE_INPUT_APPEARANCE_ID').updateValueAndValidity();
 this.form.updateValueAndValidity(); 
 }

 async ON_CLICK_SHAPE_INPUT_APPEARANCE_ID(event){

}

async WHEN_VALIDATE_ITEM_SHAPE_ID(value) {

 this.FORM_TRIGGER_FAILURE = false ; 
 if (typeof this.form.controls['SHAPE_ID'] != "undefined" ) 
      this.form.controls['SHAPE_ID'].setErrors({invalid: true}); 
 // Code goes here 
 

 if ( this.FORM_TRIGGER_FAILURE == true) 
 return; 
 
 if (typeof this.form.controls['SHAPE_ID'] != "undefined" ) 
     this.form.get('SHAPE_ID').updateValueAndValidity();
 this.form.updateValueAndValidity(); 
 }

 async ON_CLICK_SHAPE_ID(event){

}

async WHEN_VALIDATE_ITEM_WIDTH(value) {

 this.FORM_TRIGGER_FAILURE = false ; 
 if (typeof this.form.controls['WIDTH'] != "undefined" ) 
      this.form.controls['WIDTH'].setErrors({invalid: true}); 
 // Code goes here 
 

 if ( this.FORM_TRIGGER_FAILURE == true) 
 return; 
 
 if (typeof this.form.controls['WIDTH'] != "undefined" ) 
     this.form.get('WIDTH').updateValueAndValidity();
 this.form.updateValueAndValidity(); 
 }

 async ON_CLICK_WIDTH(event){

}

async WHEN_VALIDATE_ITEM_HEIGHT(value) {

 this.FORM_TRIGGER_FAILURE = false ; 
 if (typeof this.form.controls['HEIGHT'] != "undefined" ) 
      this.form.controls['HEIGHT'].setErrors({invalid: true}); 
 // Code goes here 
 

 if ( this.FORM_TRIGGER_FAILURE == true) 
 return; 
 
 if (typeof this.form.controls['HEIGHT'] != "undefined" ) 
     this.form.get('HEIGHT').updateValueAndValidity();
 this.form.updateValueAndValidity(); 
 }

 async ON_CLICK_HEIGHT(event){

}

async WHEN_VALIDATE_ITEM_FORMAT(value) {

 this.FORM_TRIGGER_FAILURE = false ; 
 if (typeof this.form.controls['FORMAT'] != "undefined" ) 
      this.form.controls['FORMAT'].setErrors({invalid: true}); 
 // Code goes here 
 

 if ( this.FORM_TRIGGER_FAILURE == true) 
 return; 
 
 if (typeof this.form.controls['FORMAT'] != "undefined" ) 
     this.form.get('FORMAT').updateValueAndValidity();
 this.form.updateValueAndValidity(); 
 }

 async ON_CLICK_FORMAT(event){

}

async WHEN_VALIDATE_ITEM_OVERFLOW(value) {

 this.FORM_TRIGGER_FAILURE = false ; 
 if (typeof this.form.controls['OVERFLOW'] != "undefined" ) 
      this.form.controls['OVERFLOW'].setErrors({invalid: true}); 
 // Code goes here 
 

 if ( this.FORM_TRIGGER_FAILURE == true) 
 return; 
 
 if (typeof this.form.controls['OVERFLOW'] != "undefined" ) 
     this.form.get('OVERFLOW').updateValueAndValidity();
 this.form.updateValueAndValidity(); 
 }

 async ON_CLICK_OVERFLOW(event){

}

async WHEN_VALIDATE_ITEM_FIELD_LENGTH(value) {

 this.FORM_TRIGGER_FAILURE = false ; 
 if (typeof this.form.controls['FIELD_LENGTH'] != "undefined" ) 
      this.form.controls['FIELD_LENGTH'].setErrors({invalid: true}); 
 // Code goes here 
 

 if ( this.FORM_TRIGGER_FAILURE == true) 
 return; 
 
 if (typeof this.form.controls['FIELD_LENGTH'] != "undefined" ) 
     this.form.get('FIELD_LENGTH').updateValueAndValidity();
 this.form.updateValueAndValidity(); 
 }

 async ON_CLICK_FIELD_LENGTH(event){

}

async WHEN_VALIDATE_ITEM_SHOW_DIGIT_GROUPING(value) {

 this.FORM_TRIGGER_FAILURE = false ; 
 if (typeof this.form.controls['SHOW_DIGIT_GROUPING'] != "undefined" ) 
      this.form.controls['SHOW_DIGIT_GROUPING'].setErrors({invalid: true}); 
 // Code goes here 
 

 if ( this.FORM_TRIGGER_FAILURE == true) 
 return; 
 
 if (typeof this.form.controls['SHOW_DIGIT_GROUPING'] != "undefined" ) 
     this.form.get('SHOW_DIGIT_GROUPING').updateValueAndValidity();
 this.form.updateValueAndValidity(); 
 }

 async ON_CLICK_SHOW_DIGIT_GROUPING(event){

}

async WHEN_VALIDATE_ITEM_DECIMAL_PLACES(value) {

 this.FORM_TRIGGER_FAILURE = false ; 
 if (typeof this.form.controls['DECIMAL_PLACES'] != "undefined" ) 
      this.form.controls['DECIMAL_PLACES'].setErrors({invalid: true}); 
 // Code goes here 
 

 if ( this.FORM_TRIGGER_FAILURE == true) 
 return; 
 
 if (typeof this.form.controls['DECIMAL_PLACES'] != "undefined" ) 
     this.form.get('DECIMAL_PLACES').updateValueAndValidity();
 this.form.updateValueAndValidity(); 
 }

 async ON_CLICK_DECIMAL_PLACES(event){

}

async WHEN_VALIDATE_ITEM_DYNAMIC_DECIMAL_PLACES(value) {

 this.FORM_TRIGGER_FAILURE = false ; 
 if (typeof this.form.controls['DYNAMIC_DECIMAL_PLACES'] != "undefined" ) 
      this.form.controls['DYNAMIC_DECIMAL_PLACES'].setErrors({invalid: true}); 
 // Code goes here 
 

 if ( this.FORM_TRIGGER_FAILURE == true) 
 return; 
 
 if (typeof this.form.controls['DYNAMIC_DECIMAL_PLACES'] != "undefined" ) 
     this.form.get('DYNAMIC_DECIMAL_PLACES').updateValueAndValidity();
 this.form.updateValueAndValidity(); 
 }

 async ON_CLICK_DYNAMIC_DECIMAL_PLACES(event){

}

async WHEN_VALIDATE_ITEM_FIXED_DECIMAL_PLACES(value) {

 this.FORM_TRIGGER_FAILURE = false ; 
 if (typeof this.form.controls['FIXED_DECIMAL_PLACES'] != "undefined" ) 
      this.form.controls['FIXED_DECIMAL_PLACES'].setErrors({invalid: true}); 
 // Code goes here 
 

 if ( this.FORM_TRIGGER_FAILURE == true) 
 return; 
 
 if (typeof this.form.controls['FIXED_DECIMAL_PLACES'] != "undefined" ) 
     this.form.get('FIXED_DECIMAL_PLACES').updateValueAndValidity();
 this.form.updateValueAndValidity(); 
 }

 async ON_CLICK_FIXED_DECIMAL_PLACES(event){

}

async WHEN_VALIDATE_ITEM_JUSTIFICATION(value) {

 this.FORM_TRIGGER_FAILURE = false ; 
 if (typeof this.form.controls['JUSTIFICATION'] != "undefined" ) 
      this.form.controls['JUSTIFICATION'].setErrors({invalid: true}); 
 // Code goes here 
 

 if ( this.FORM_TRIGGER_FAILURE == true) 
 return; 
 
 if (typeof this.form.controls['JUSTIFICATION'] != "undefined" ) 
     this.form.get('JUSTIFICATION').updateValueAndValidity();
 this.form.updateValueAndValidity(); 
 }

 async ON_CLICK_JUSTIFICATION(event){

}

async WHEN_VALIDATE_ITEM_LEADING_CHARACTER(value) {

 this.FORM_TRIGGER_FAILURE = false ; 
 if (typeof this.form.controls['LEADING_CHARACTER'] != "undefined" ) 
      this.form.controls['LEADING_CHARACTER'].setErrors({invalid: true}); 
 // Code goes here 
 

 if ( this.FORM_TRIGGER_FAILURE == true) 
 return; 
 
 if (typeof this.form.controls['LEADING_CHARACTER'] != "undefined" ) 
     this.form.get('LEADING_CHARACTER').updateValueAndValidity();
 this.form.updateValueAndValidity(); 
 }

 async ON_CLICK_LEADING_CHARACTER(event){

}

async WHEN_VALIDATE_ITEM_EXPRESSION(value) {

 this.FORM_TRIGGER_FAILURE = false ; 
 if (typeof this.form.controls['EXPRESSION'] != "undefined" ) 
      this.form.controls['EXPRESSION'].setErrors({invalid: true}); 
 // Code goes here 
 

 if ( this.FORM_TRIGGER_FAILURE == true) 
 return; 
 
 if (typeof this.form.controls['EXPRESSION'] != "undefined" ) 
     this.form.get('EXPRESSION').updateValueAndValidity();
 this.form.updateValueAndValidity(); 
 }

 async ON_CLICK_EXPRESSION(event){

}

async WHEN_VALIDATE_ITEM_TAGS1(value) {

 this.FORM_TRIGGER_FAILURE = false ; 
 if (typeof this.form.controls['TAGS1'] != "undefined" ) 
      this.form.controls['TAGS1'].setErrors({invalid: true}); 
 // Code goes here 
 

 if ( this.FORM_TRIGGER_FAILURE == true) 
 return; 
 
 if (typeof this.form.controls['TAGS1'] != "undefined" ) 
     this.form.get('TAGS1').updateValueAndValidity();
 this.form.updateValueAndValidity(); 
 }

 async ON_CLICK_TAGS1(event){

}

async WHEN_VALIDATE_ITEM_EXPRESSIONS(value) {

 this.FORM_TRIGGER_FAILURE = false ; 
 if (typeof this.form.controls['EXPRESSIONS'] != "undefined" ) 
      this.form.controls['EXPRESSIONS'].setErrors({invalid: true}); 
 // Code goes here 
 

 if ( this.FORM_TRIGGER_FAILURE == true) 
 return; 
 
 if (typeof this.form.controls['EXPRESSIONS'] != "undefined" ) 
     this.form.get('EXPRESSIONS').updateValueAndValidity();
 this.form.updateValueAndValidity(); 
 }

 async ON_CLICK_EXPRESSIONS(event){

}

async WHEN_VALIDATE_ITEM_EXPRESSION_TRUE_STATE(value) {

 this.FORM_TRIGGER_FAILURE = false ; 
 if (typeof this.form.controls['EXPRESSION_TRUE_STATE'] != "undefined" ) 
      this.form.controls['EXPRESSION_TRUE_STATE'].setErrors({invalid: true}); 
 // Code goes here 
 

 if ( this.FORM_TRIGGER_FAILURE == true) 
 return; 
 
 if (typeof this.form.controls['EXPRESSION_TRUE_STATE'] != "undefined" ) 
     this.form.get('EXPRESSION_TRUE_STATE').updateValueAndValidity();
 this.form.updateValueAndValidity(); 
 }

 async ON_CLICK_EXPRESSION_TRUE_STATE(event){

}

async WHEN_VALIDATE_ITEM_TAGS2(value) {

 this.FORM_TRIGGER_FAILURE = false ; 
 if (typeof this.form.controls['TAGS2'] != "undefined" ) 
      this.form.controls['TAGS2'].setErrors({invalid: true}); 
 // Code goes here 
 

 if ( this.FORM_TRIGGER_FAILURE == true) 
 return; 
 
 if (typeof this.form.controls['TAGS2'] != "undefined" ) 
     this.form.get('TAGS2').updateValueAndValidity();
 this.form.updateValueAndValidity(); 
 }

 async ON_CLICK_TAGS2(event){

}
 
 async onChange_SHAPE_INPUT_APPEARANCE_ID(event:any) { 
 var value = event.target.value; 
 if ((value == null) || (value == '')) 	
 	return;  
    this.FORM_TRIGGER_FAILURE = false;	
 await   this.WHEN_VALIDATE_ITEM_SHAPE_INPUT_APPEARANCE_ID(value); if ( this.FORM_TRIGGER_FAILURE) return; 
 this.formValidationChangedOutput.emit(this.form.valid); 
  
 } 
 async onValueChange_SHAPE_ID(value) { 
  this.FORM_TRIGGER_FAILURE = false;	
 await this.WHEN_VALIDATE_ITEM_SHAPE_ID(value); if ( this.FORM_TRIGGER_FAILURE) return; 
 this.formValidationChangedOutput.emit(this.form.valid); 
  
  } 
 async onChange_WIDTH(event:any) { 
 var value = event.target.value; 
 if ((value == null) || (value == '')) 	
 	return;  
    this.FORM_TRIGGER_FAILURE = false;	
 await   this.WHEN_VALIDATE_ITEM_WIDTH(value); if ( this.FORM_TRIGGER_FAILURE) return; 
 this.formValidationChangedOutput.emit(this.form.valid); 
  
 } 
 async onChange_HEIGHT(event:any) { 
 var value = event.target.value; 
 if ((value == null) || (value == '')) 	
 	return;  
    this.FORM_TRIGGER_FAILURE = false;	
 await   this.WHEN_VALIDATE_ITEM_HEIGHT(value); if ( this.FORM_TRIGGER_FAILURE) return; 
 this.formValidationChangedOutput.emit(this.form.valid); 
  
 } 
 async onValueChange_FORMAT(value) { 
  this.FORM_TRIGGER_FAILURE = false;	
 await this.WHEN_VALIDATE_ITEM_FORMAT(value); if ( this.FORM_TRIGGER_FAILURE) return; 
 this.formValidationChangedOutput.emit(this.form.valid); 
  
  } 
 async onValueChange_OVERFLOW(value) { 
  this.FORM_TRIGGER_FAILURE = false;	
 await this.WHEN_VALIDATE_ITEM_OVERFLOW(value); if ( this.FORM_TRIGGER_FAILURE) return; 
 this.formValidationChangedOutput.emit(this.form.valid); 
  
  } 
 async onChange_FIELD_LENGTH(event:any) { 
 var value = event.target.value; 
 if ((value == null) || (value == '')) 	
 	return;  
    this.FORM_TRIGGER_FAILURE = false;	
 await   this.WHEN_VALIDATE_ITEM_FIELD_LENGTH(value); if ( this.FORM_TRIGGER_FAILURE) return; 
 this.formValidationChangedOutput.emit(this.form.valid); 
  
 } 
 async onChange_SHOW_DIGIT_GROUPING(event:any) { 
 var value = event.target.value; 
 if ((value == null) || (value == '')) 	
 	return;  
    this.FORM_TRIGGER_FAILURE = false;	
 await   this.WHEN_VALIDATE_ITEM_SHOW_DIGIT_GROUPING(value); if ( this.FORM_TRIGGER_FAILURE) return; 
 this.formValidationChangedOutput.emit(this.form.valid); 
  
 } 
 async onChange_DECIMAL_PLACES(event:any) { 
 var value = event.target.value; 
 if ((value == null) || (value == '')) 	
 	return;  
    this.FORM_TRIGGER_FAILURE = false;	
 await   this.WHEN_VALIDATE_ITEM_DECIMAL_PLACES(value); if ( this.FORM_TRIGGER_FAILURE) return; 
 this.formValidationChangedOutput.emit(this.form.valid); 
  
 } 
 async onChange_DYNAMIC_DECIMAL_PLACES(event:any) { 
 var value = event.target.value; 
 if ((value == null) || (value == '')) 	
 	return;  
    this.FORM_TRIGGER_FAILURE = false;	
 await   this.WHEN_VALIDATE_ITEM_DYNAMIC_DECIMAL_PLACES(value); if ( this.FORM_TRIGGER_FAILURE) return; 
 this.formValidationChangedOutput.emit(this.form.valid); 
  
 } 
 async onChange_FIXED_DECIMAL_PLACES(event:any) { 
 var value = event.target.value; 
 if ((value == null) || (value == '')) 	
 	return;  
    this.FORM_TRIGGER_FAILURE = false;	
 await   this.WHEN_VALIDATE_ITEM_FIXED_DECIMAL_PLACES(value); if ( this.FORM_TRIGGER_FAILURE) return; 
 this.formValidationChangedOutput.emit(this.form.valid); 
  
 } 
 async onChange_JUSTIFICATION(event:any) { 
 var value = event.target.value; 
 if ((value == null) || (value == '')) 	
 	return;  
    this.FORM_TRIGGER_FAILURE = false;	
 await   this.WHEN_VALIDATE_ITEM_JUSTIFICATION(value); if ( this.FORM_TRIGGER_FAILURE) return; 
 this.formValidationChangedOutput.emit(this.form.valid); 
  
 } 
 async onChange_LEADING_CHARACTER(event:any) { 
 var value = event.target.value; 
 if ((value == null) || (value == '')) 	
 	return;  
    this.FORM_TRIGGER_FAILURE = false;	
 await   this.WHEN_VALIDATE_ITEM_LEADING_CHARACTER(value); if ( this.FORM_TRIGGER_FAILURE) return; 
 this.formValidationChangedOutput.emit(this.form.valid); 
  
 } 
 async onValueChange_EXPRESSION(value) { 
  this.FORM_TRIGGER_FAILURE = false;	
 await this.WHEN_VALIDATE_ITEM_EXPRESSION(value); if ( this.FORM_TRIGGER_FAILURE) return; 
 this.formValidationChangedOutput.emit(this.form.valid); 
  
  } 
 async onValueChange_TAGS1(value) { 
  this.FORM_TRIGGER_FAILURE = false;	
 await this.WHEN_VALIDATE_ITEM_TAGS1(value); if ( this.FORM_TRIGGER_FAILURE) return; 
 this.formValidationChangedOutput.emit(this.form.valid); 
  
  } 
 async onValueChange_EXPRESSIONS(value) { 
  this.FORM_TRIGGER_FAILURE = false;	
 await this.WHEN_VALIDATE_ITEM_EXPRESSIONS(value); if ( this.FORM_TRIGGER_FAILURE) return; 
 this.formValidationChangedOutput.emit(this.form.valid); 
  
  } 
 async onChange_EXPRESSION_TRUE_STATE(event:any) { 
 var value = event.target.value; 
 if ((value == null) || (value == '')) 	
 	return;  
    this.FORM_TRIGGER_FAILURE = false;	
 await   this.WHEN_VALIDATE_ITEM_EXPRESSION_TRUE_STATE(value); if ( this.FORM_TRIGGER_FAILURE) return; 
 this.formValidationChangedOutput.emit(this.form.valid); 
  
 } 
 async onValueChange_TAGS2(value) { 
  this.FORM_TRIGGER_FAILURE = false;	
 await this.WHEN_VALIDATE_ITEM_TAGS2(value); if ( this.FORM_TRIGGER_FAILURE) return; 
 this.formValidationChangedOutput.emit(this.form.valid); 
  
  }
public appMode = "";
// For Adding new CODE
  public  grid_som_tabs_codes={};
  public SOM_TABS_CODESConfig!: componentConfigDef;
  public filterCode!: string;
  public showCodeDetails:boolean=false;

// For Attachments and images and svg
public myFiles = [[]];
public filesDeleted = [[]];
public img_gallery = [[]];
public DSP_UPLOADConfig!: componentConfigDef;
public DSP_WEBCAMConfig!: componentConfigDef;
public att_arr = [];
public img_arr = [];
public multiselect_arr = [];
public multiselect_tree_arr = [];
public AttDwnUrl = "";
public uploadimage = false;
public showIcon=true;
public svg_arr = [];
public svg_data = [];

public update_svgicons(formGroup){
  this.showIcon = false;
    for (let i = 0; i < this.svg_arr.length; i++) {
      this.starServices.convertSvgToKendoIcon(this, formGroup[this.svg_arr[i]], formGroup.svg_name,this.svg_arr[i])
      
    }
    
    setTimeout(() => {
      this.showIcon = true;
    });
}
 public async att_img_saveFormCompleted(field_id){
  console.log("att_img_saveFormCompleted:",  field_id, this.form.getRawValue()[field_id])
  let routine = "WHEN_VALIDATE_ITEM_" + field_id;
  await   this[routine](this.form.getRawValue()[field_id]);
}
public getAttWrapper(field){
  
  //console.log("getAtt_data: inside getAttWrapper:field:", field)
   // console.log("getAtt_data: inside getAttWrapper:field:", field, "form.get:", 
     // this.form.get(field).value)
      
  //console.log("getAtt_data:this.form:",this.form, this.form.getRawValue()[field]);
  let val = this.form.getRawValue()[field];
  //console.log("getAtt_data: inside getAttWrapper:field:", field, val)
  let retVal = this.starServices.att_img_getAtt(val,this);
  return retVal;
}

}


