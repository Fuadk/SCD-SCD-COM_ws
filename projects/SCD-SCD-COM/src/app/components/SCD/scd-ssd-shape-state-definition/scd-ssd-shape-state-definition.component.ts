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
import { scdshapeStateScdSsdShapeStateDefinition , componentConfigDef} from '@modeldir/model';


 const createFormGroup = (dataItem:any) => new FormGroup({
'SHAPE_STATE_ID' : new FormControl(dataItem.SHAPE_STATE_ID  , ) ,
'SHAPE_ID' : new FormControl(dataItem.SHAPE_ID  ,   Validators.required ) ,
'STATE_ID' : new FormControl(dataItem.STATE_ID  , ) ,
'STATE_NAME' : new FormControl(dataItem.STATE_NAME  , ) ,
'BACK_COLOR' : new FormControl(dataItem.BACK_COLOR  , ) ,
'VALUE' : new FormControl(dataItem.VALUE  , ) ,
'PATTERN_COLOR' : new FormControl(dataItem.PATTERN_COLOR  , ) ,
'PATTERN_STYLE' : new FormControl(dataItem.PATTERN_STYLE  , ) ,
'BORDER_COLOR' : new FormControl(dataItem.BORDER_COLOR  , ) ,
'BLINK' : new FormControl(dataItem.BLINK  , ) ,
'CAPTION' : new FormControl(dataItem.CAPTION  , ) ,
'INSERT_VARIABLE' : new FormControl(dataItem.INSERT_VARIABLE  , ) ,
'FONT_NAME' : new FormControl(dataItem.FONT_NAME  , ) ,
'FONT_SIZE' : new FormControl(dataItem.FONT_SIZE  , ) ,
'FONT_BOLD' : new FormControl(dataItem.FONT_BOLD  , ) ,
'FONT_ITALIC' : new FormControl(dataItem.FONT_ITALIC  , ) ,
'FONT_UNDERLINE' : new FormControl(dataItem.FONT_UNDERLINE  , ) ,
'CAPTION_COLOR' : new FormControl(dataItem.CAPTION_COLOR  , ) ,
'CAPTION_BLINK' : new FormControl(dataItem.CAPTION_BLINK  , ) ,
'CAPTION_BACK_COLOR' : new FormControl(dataItem.CAPTION_BACK_COLOR  , ) ,
'CAPTION_WORD_WRAP' : new FormControl(dataItem.CAPTION_WORD_WRAP  , ) ,
'CAPTION_ALIGNMENT' : new FormControl(dataItem.CAPTION_ALIGNMENT  , ) ,
'CAPTION_BACK_STYLE' : new FormControl(dataItem.CAPTION_BACK_STYLE  , ) ,
'IMAGE_NAME' : new FormControl(dataItem.IMAGE_NAME  , ) ,
'IMAGE_TYPE' : new FormControl(dataItem.IMAGE_TYPE  , ) ,
'IMAGE_COLOR' : new FormControl(dataItem.IMAGE_COLOR  , ) ,
'IMAGE_BLINK' : new FormControl(dataItem.IMAGE_BLINK  , ) ,
'IMAGE_BACK_COLOR' : new FormControl(dataItem.IMAGE_BACK_COLOR  , ) ,
'SCALE_IMAGE' : new FormControl(dataItem.SCALE_IMAGE  , ) ,
'IMAGE_ALIGNMENT' : new FormControl(dataItem.IMAGE_ALIGNMENT  , ) 
});

declare function getParamConfig():any;
@Component({
  selector: 'app-scd-ssd-shape-state-definition',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './scd-ssd-shape-state-definition.component.html',
  styleUrls: ['./scd-ssd-shape-state-definition.component.scss'],
  standalone: false
})


export class ScdShapeStateScdSsdShapeStateDefinitionFormdivsComponent {
  public title =  this.starServices.getNLS([],"SCD_SSD_SHAPE_STATE_DEFINITION.scdshapeStateScdSsdShapeStateDefinition.component_title","Shape State Definition");
  public compTitleMsg =  "SCD_SSD_SHAPE_STATE_DEFINITION.scdshapeStateScdSsdShapeStateDefinition";
  public routineName = "ScdShapeStateScdSsdShapeStateDefinitionFormdivs";
  private insertCMD = "INSERT_SCD_SHAPE_STATE";
  private updateCMD = "UPDATE_SCD_SHAPE_STATE";
  private deleteCMD =   "DELETE_SCD_SHAPE_STATE";
  private getCMD = "GET_SCD_SHAPE_STATE_QUERY";

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
  public primarKeyReadOnlyArr = {isSHAPE_STATE_IDreadOnly : false , isSHAPE_IDreadOnly : false};  
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
  public compSelector = 'app-scd-ssd-shape-state-definition';
  public PK_AUTO = 'SHAPE_STATE_ID';
  public customerFacing = false;
  public FormStepsArr = [{"CODE":"","CODETEXT_LANG":"","visible":true},{"CODE":"1","CODETEXT_LANG":"General","visible":true},{"CODE":"2","CODETEXT_LANG":"Caption","visible":true},{"CODE":"3","CODETEXT_LANG":"Image Settings","visible":true}] ;
public labelSHAPE_STATE_IDTop=false;
public labelSHAPE_STATE_IDVisible=true;
public labelSHAPE_IDTop=false;
public labelSHAPE_IDVisible=true;
public labelSTATE_IDTop=false;
public labelSTATE_IDVisible=true;
public labelSTATE_NAMETop=false;
public labelSTATE_NAMEVisible=true;
public labelBACK_COLORTop=false;
public labelBACK_COLORVisible=true;
public labelVALUETop=false;
public labelVALUEVisible=true;
public labelPATTERN_COLORTop=false;
public labelPATTERN_COLORVisible=true;
public labelPATTERN_STYLETop=false;
public labelPATTERN_STYLEVisible=true;
public labelBORDER_COLORTop=false;
public labelBORDER_COLORVisible=true;
public labelBLINKTop=false;
public labelBLINKVisible=true;
public labelCAPTIONTop=false;
public labelCAPTIONVisible=true;
public labelINSERT_VARIABLETop=false;
public labelINSERT_VARIABLEVisible=true;
public labelFONT_NAMETop=false;
public labelFONT_NAMEVisible=true;
public labelFONT_SIZETop=false;
public labelFONT_SIZEVisible=true;
public labelFONT_BOLDTop=false;
public labelFONT_BOLDVisible=true;
public labelFONT_ITALICTop=false;
public labelFONT_ITALICVisible=true;
public labelFONT_UNDERLINETop=false;
public labelFONT_UNDERLINEVisible=true;
public labelCAPTION_COLORTop=false;
public labelCAPTION_COLORVisible=true;
public labelCAPTION_BLINKTop=false;
public labelCAPTION_BLINKVisible=true;
public labelCAPTION_BACK_COLORTop=false;
public labelCAPTION_BACK_COLORVisible=true;
public labelCAPTION_WORD_WRAPTop=false;
public labelCAPTION_WORD_WRAPVisible=true;
public labelCAPTION_ALIGNMENTTop=false;
public labelCAPTION_ALIGNMENTVisible=true;
public labelCAPTION_BACK_STYLETop=false;
public labelCAPTION_BACK_STYLEVisible=true;
public labelIMAGE_NAMETop=false;
public labelIMAGE_NAMEVisible=true;
public labelIMAGE_SELECT_STATETop=false;
public labelIMAGE_SELECT_STATEVisible=true;
public labelIMAGE_TYPETop=false;
public labelIMAGE_TYPEVisible=true;
public labelIMAGE_COLORTop=false;
public labelIMAGE_COLORVisible=true;
public labelIMAGE_BLINKTop=false;
public labelIMAGE_BLINKVisible=true;
public labelIMAGE_BACK_COLORTop=false;
public labelIMAGE_BACK_COLORVisible=true;
public labelSCALE_IMAGETop=false;
public labelSCALE_IMAGEVisible=true;
public labelIMAGE_ALIGNMENTTop=false;
public labelIMAGE_ALIGNMENTVisible=true;

public visibleSHAPE_STATE_ID = false;
public visibleSHAPE_ID = false;
public visibleSTATE_ID = true;
public visibleSTATE_NAME = true;
public visibleBACK_COLOR = true;
public visibleVALUE = true;
public visiblePATTERN_COLOR = true;
public visiblePATTERN_STYLE = true;
public visibleBORDER_COLOR = true;
public visibleBLINK = true;
public visibleCAPTION = true;
public visibleINSERT_VARIABLE = true;
public visibleFONT_NAME = true;
public visibleFONT_SIZE = true;
public visibleFONT_BOLD = true;
public visibleFONT_ITALIC = true;
public visibleFONT_UNDERLINE = true;
public visibleCAPTION_COLOR = true;
public visibleCAPTION_BLINK = true;
public visibleCAPTION_BACK_COLOR = true;
public visibleCAPTION_WORD_WRAP = true;
public visibleCAPTION_ALIGNMENT = true;
public visibleCAPTION_BACK_STYLE = true;
public visibleIMAGE_NAME = true;
public visibleIMAGE_SELECT_STATE = true;
public visibleIMAGE_TYPE = false;
public visibleIMAGE_COLOR = true;
public visibleIMAGE_BLINK = true;
public visibleIMAGE_BACK_COLOR = true;
public visibleSCALE_IMAGE = true;
public visibleIMAGE_ALIGNMENT = true;

public disableSHAPE_STATE_ID = false;
public disableSHAPE_ID = false;
public disableSTATE_ID = false;
public disableSTATE_NAME = false;
public disableBACK_COLOR = false;
public disableVALUE = false;
public disablePATTERN_COLOR = false;
public disablePATTERN_STYLE = false;
public disableBORDER_COLOR = false;
public disableBLINK = false;
public disableCAPTION = false;
public disableINSERT_VARIABLE = false;
public disableFONT_NAME = false;
public disableFONT_SIZE = false;
public disableFONT_BOLD = false;
public disableFONT_ITALIC = false;
public disableFONT_UNDERLINE = false;
public disableCAPTION_COLOR = false;
public disableCAPTION_BLINK = false;
public disableCAPTION_BACK_COLOR = false;
public disableCAPTION_WORD_WRAP = false;
public disableCAPTION_ALIGNMENT = false;
public disableCAPTION_BACK_STYLE = false;
public disableIMAGE_NAME = false;
public disableIMAGE_SELECT_STATE = false;
public disableIMAGE_TYPE = false;
public disableIMAGE_COLOR = false;
public disableIMAGE_BLINK = false;
public disableIMAGE_BACK_COLOR = false;
public disableSCALE_IMAGE = false;
public disableIMAGE_ALIGNMENT = false;

public variableIMAGE_SELECT_STATE;

  
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

  private formInitialValues:any =   new scdshapeStateScdSsdShapeStateDefinition();   
    @Input() public set detail_Input(form: any) {
       if (typeof form != "undefined"){
        this.isSearch = true;
        this.executeQuery(form);
        this.isChild = true;
      }
      /*
    if (this.paramConfig.DEBUG_FLAG) console.log('detail_Input ScdShapeStateScdSsdShapeStateDefinitionFormdivs form.SHAPE_ID :' + form.SHAPE_ID);
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
      this.Comp_Config.masterKeyArr =  [NewVal['SHAPE_STATE_ID']];
      this.Comp_Config.masterKeyNameArr =  ["SHAPE_STATE_ID"];
         
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
	{"statment":"SELECT CODE, CODETEXT_LANG , PARTCODE FROM SOM_TABS_CODES WHERE CODENAME = \"PATTERN_STYLE\"  and LANGUAGE_NAME = '" + this.userLang + "' order by CODETEXT_LANG ",
			"lkpArrName":"lkpArrPATTERN_STYLE"},
	{"statment":"SELECT CODE, CODETEXT_LANG , PARTCODE FROM SOM_TABS_CODES WHERE CODENAME = \"INSERT_VARIABLE\"  and LANGUAGE_NAME = '" + this.userLang + "' order by CODETEXT_LANG ",
			"lkpArrName":"lkpArrINSERT_VARIABLE"},
	{"statment":"SELECT CODE, CODETEXT_LANG , PARTCODE FROM SOM_TABS_CODES WHERE CODENAME = \"FONT_NAME\"  and LANGUAGE_NAME = '" + this.userLang + "' order by CODETEXT_LANG ",
			"lkpArrName":"lkpArrFONT_NAME"},
	{"statment":"SELECT CODE, CODETEXT_LANG , PARTCODE FROM SOM_TABS_CODES WHERE CODENAME = \"FONT_SIZE\"  and LANGUAGE_NAME = '" + this.userLang + "' order by CODETEXT_LANG ",
			"lkpArrName":"lkpArrFONT_SIZE"},
	{"statment":"SELECT CODE, CODETEXT_LANG , PARTCODE FROM SOM_TABS_CODES WHERE CODENAME = \"CAPTION_ALIGNMENT\"  and LANGUAGE_NAME = '" + this.userLang + "' order by CODETEXT_LANG ",
			"lkpArrName":"lkpArrCAPTION_ALIGNMENT"},
	{"statment":"SELECT CODE, CODETEXT_LANG , PARTCODE FROM SOM_TABS_CODES WHERE CODENAME = \"CAPTION_BACK_STYLE\"  and LANGUAGE_NAME = '" + this.userLang + "' order by CODETEXT_LANG ",
			"lkpArrName":"lkpArrCAPTION_BACK_STYLE"},
	{"statment":"SELECT CODE, CODETEXT_LANG , PARTCODE FROM SOM_TABS_CODES WHERE CODENAME = \"IMAGE_TYPE\"  and LANGUAGE_NAME = '" + this.userLang + "' order by CODETEXT_LANG ",
			"lkpArrName":"lkpArrIMAGE_TYPE"},
	{"statment":"SELECT CODE, CODETEXT_LANG , PARTCODE FROM SOM_TABS_CODES WHERE CODENAME = \"IMAGE_ALIGNMENT\"  and LANGUAGE_NAME = '" + this.userLang + "' order by CODETEXT_LANG ",
			"lkpArrName":"lkpArrIMAGE_ALIGNMENT"}];
 if (this.lookupArrDef.length > 0)
   this.starServices.fetchLookups(this, this.lookupArrDef);
}

public lkpArrSHAPE_ID = [];

public lkpArrPATTERN_STYLE = [];

public lkpArrINSERT_VARIABLE = [];

public lkpArrFONT_NAME = [];

public lkpArrFONT_SIZE = [];

public lkpArrCAPTION_ALIGNMENT = [];

public lkpArrCAPTION_BACK_STYLE = [];

public lkpArrIMAGE_TYPE = [];

public lkpArrIMAGE_ALIGNMENT = [];

public lkpArrGetSHAPE_ID(CODE: any): any {
var rec = this.lkpArrSHAPE_ID.find((x:any) => x.CODE === CODE);
return rec;
}

public lkpArrGetPATTERN_STYLE(CODE: any): any {
var rec = this.lkpArrPATTERN_STYLE.find((x:any) => x.CODE === CODE);
return rec;
}

public lkpArrGetINSERT_VARIABLE(CODE: any): any {
var rec = this.lkpArrINSERT_VARIABLE.find((x:any) => x.CODE === CODE);
return rec;
}

public lkpArrGetFONT_NAME(CODE: any): any {
var rec = this.lkpArrFONT_NAME.find((x:any) => x.CODE === CODE);
return rec;
}

public lkpArrGetFONT_SIZE(CODE: any): any {
var rec = this.lkpArrFONT_SIZE.find((x:any) => x.CODE === CODE);
return rec;
}

public lkpArrGetCAPTION_ALIGNMENT(CODE: any): any {
var rec = this.lkpArrCAPTION_ALIGNMENT.find((x:any) => x.CODE === CODE);
return rec;
}

public lkpArrGetCAPTION_BACK_STYLE(CODE: any): any {
var rec = this.lkpArrCAPTION_BACK_STYLE.find((x:any) => x.CODE === CODE);
return rec;
}

public lkpArrGetIMAGE_TYPE(CODE: any): any {
var rec = this.lkpArrIMAGE_TYPE.find((x:any) => x.CODE === CODE);
return rec;
}

public lkpArrGetIMAGE_ALIGNMENT(CODE: any): any {
var rec = this.lkpArrIMAGE_ALIGNMENT.find((x:any) => x.CODE === CODE);
return rec;
}

onChanges(): void {
this.form.get('SHAPE_STATE_ID').valueChanges.subscribe(val => {
});
this.form.get('STATE_ID').valueChanges.subscribe(val => {
});
this.form.get('STATE_NAME').valueChanges.subscribe(val => {
});
this.form.get('VALUE').valueChanges.subscribe(val => {
});
this.form.get('CAPTION').valueChanges.subscribe(val => {
});
this.form.get('IMAGE_NAME').valueChanges.subscribe(val => {
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
      if (this.paramConfig.DEBUG_FLAG) console.log("ScdShapeStateScdSsdShapeStateDefinitionFormdivs ComponentConfig:", {...ComponentConfig});

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



async WHEN_VALIDATE_ITEM_SHAPE_STATE_ID(value) {

 this.FORM_TRIGGER_FAILURE = false ; 
 if (typeof this.form.controls['SHAPE_STATE_ID'] != "undefined" ) 
      this.form.controls['SHAPE_STATE_ID'].setErrors({invalid: true}); 
 // Code goes here 
 

 if ( this.FORM_TRIGGER_FAILURE == true) 
 return; 
 
 if (typeof this.form.controls['SHAPE_STATE_ID'] != "undefined" ) 
     this.form.get('SHAPE_STATE_ID').updateValueAndValidity();
 this.form.updateValueAndValidity(); 
 }

 async ON_CLICK_SHAPE_STATE_ID(event){

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

async WHEN_VALIDATE_ITEM_STATE_ID(value) {

 this.FORM_TRIGGER_FAILURE = false ; 
 if (typeof this.form.controls['STATE_ID'] != "undefined" ) 
      this.form.controls['STATE_ID'].setErrors({invalid: true}); 
 // Code goes here 
 

 if ( this.FORM_TRIGGER_FAILURE == true) 
 return; 
 
 if (typeof this.form.controls['STATE_ID'] != "undefined" ) 
     this.form.get('STATE_ID').updateValueAndValidity();
 this.form.updateValueAndValidity(); 
 }

 async ON_CLICK_STATE_ID(event){

}

async WHEN_VALIDATE_ITEM_STATE_NAME(value) {

 this.FORM_TRIGGER_FAILURE = false ; 
 if (typeof this.form.controls['STATE_NAME'] != "undefined" ) 
      this.form.controls['STATE_NAME'].setErrors({invalid: true}); 
 // Code goes here 
 

 if ( this.FORM_TRIGGER_FAILURE == true) 
 return; 
 
 if (typeof this.form.controls['STATE_NAME'] != "undefined" ) 
     this.form.get('STATE_NAME').updateValueAndValidity();
 this.form.updateValueAndValidity(); 
 }

 async ON_CLICK_STATE_NAME(event){

}

async WHEN_VALIDATE_ITEM_BACK_COLOR(value) {

 this.FORM_TRIGGER_FAILURE = false ; 
 if (typeof this.form.controls['BACK_COLOR'] != "undefined" ) 
      this.form.controls['BACK_COLOR'].setErrors({invalid: true}); 
 // Code goes here 
 

 if ( this.FORM_TRIGGER_FAILURE == true) 
 return; 
 
 if (typeof this.form.controls['BACK_COLOR'] != "undefined" ) 
     this.form.get('BACK_COLOR').updateValueAndValidity();
 this.form.updateValueAndValidity(); 
 }

 async ON_CLICK_BACK_COLOR(event){

}

async WHEN_VALIDATE_ITEM_VALUE(value) {

 this.FORM_TRIGGER_FAILURE = false ; 
 if (typeof this.form.controls['VALUE'] != "undefined" ) 
      this.form.controls['VALUE'].setErrors({invalid: true}); 
 // Code goes here 
 

 if ( this.FORM_TRIGGER_FAILURE == true) 
 return; 
 
 if (typeof this.form.controls['VALUE'] != "undefined" ) 
     this.form.get('VALUE').updateValueAndValidity();
 this.form.updateValueAndValidity(); 
 }

 async ON_CLICK_VALUE(event){

}

async WHEN_VALIDATE_ITEM_PATTERN_COLOR(value) {

 this.FORM_TRIGGER_FAILURE = false ; 
 if (typeof this.form.controls['PATTERN_COLOR'] != "undefined" ) 
      this.form.controls['PATTERN_COLOR'].setErrors({invalid: true}); 
 // Code goes here 
 

 if ( this.FORM_TRIGGER_FAILURE == true) 
 return; 
 
 if (typeof this.form.controls['PATTERN_COLOR'] != "undefined" ) 
     this.form.get('PATTERN_COLOR').updateValueAndValidity();
 this.form.updateValueAndValidity(); 
 }

 async ON_CLICK_PATTERN_COLOR(event){

}

async WHEN_VALIDATE_ITEM_PATTERN_STYLE(value) {

 this.FORM_TRIGGER_FAILURE = false ; 
 if (typeof this.form.controls['PATTERN_STYLE'] != "undefined" ) 
      this.form.controls['PATTERN_STYLE'].setErrors({invalid: true}); 
 // Code goes here 
 

 if ( this.FORM_TRIGGER_FAILURE == true) 
 return; 
 
 if (typeof this.form.controls['PATTERN_STYLE'] != "undefined" ) 
     this.form.get('PATTERN_STYLE').updateValueAndValidity();
 this.form.updateValueAndValidity(); 
 }

 async ON_CLICK_PATTERN_STYLE(event){

}

async WHEN_VALIDATE_ITEM_BORDER_COLOR(value) {

 this.FORM_TRIGGER_FAILURE = false ; 
 if (typeof this.form.controls['BORDER_COLOR'] != "undefined" ) 
      this.form.controls['BORDER_COLOR'].setErrors({invalid: true}); 
 // Code goes here 
 

 if ( this.FORM_TRIGGER_FAILURE == true) 
 return; 
 
 if (typeof this.form.controls['BORDER_COLOR'] != "undefined" ) 
     this.form.get('BORDER_COLOR').updateValueAndValidity();
 this.form.updateValueAndValidity(); 
 }

 async ON_CLICK_BORDER_COLOR(event){

}

async WHEN_VALIDATE_ITEM_BLINK(value) {

 this.FORM_TRIGGER_FAILURE = false ; 
 if (typeof this.form.controls['BLINK'] != "undefined" ) 
      this.form.controls['BLINK'].setErrors({invalid: true}); 
 // Code goes here 
 

 if ( this.FORM_TRIGGER_FAILURE == true) 
 return; 
 
 if (typeof this.form.controls['BLINK'] != "undefined" ) 
     this.form.get('BLINK').updateValueAndValidity();
 this.form.updateValueAndValidity(); 
 }

 async ON_CLICK_BLINK(event){

}

async WHEN_VALIDATE_ITEM_CAPTION(value) {

 this.FORM_TRIGGER_FAILURE = false ; 
 if (typeof this.form.controls['CAPTION'] != "undefined" ) 
      this.form.controls['CAPTION'].setErrors({invalid: true}); 
 // Code goes here 
 

 if ( this.FORM_TRIGGER_FAILURE == true) 
 return; 
 
 if (typeof this.form.controls['CAPTION'] != "undefined" ) 
     this.form.get('CAPTION').updateValueAndValidity();
 this.form.updateValueAndValidity(); 
 }

 async ON_CLICK_CAPTION(event){

}

async WHEN_VALIDATE_ITEM_INSERT_VARIABLE(value) {

 this.FORM_TRIGGER_FAILURE = false ; 
 if (typeof this.form.controls['INSERT_VARIABLE'] != "undefined" ) 
      this.form.controls['INSERT_VARIABLE'].setErrors({invalid: true}); 
 // Code goes here 
 

 if ( this.FORM_TRIGGER_FAILURE == true) 
 return; 
 
 if (typeof this.form.controls['INSERT_VARIABLE'] != "undefined" ) 
     this.form.get('INSERT_VARIABLE').updateValueAndValidity();
 this.form.updateValueAndValidity(); 
 }

 async ON_CLICK_INSERT_VARIABLE(event){

}

async WHEN_VALIDATE_ITEM_FONT_NAME(value) {

 this.FORM_TRIGGER_FAILURE = false ; 
 if (typeof this.form.controls['FONT_NAME'] != "undefined" ) 
      this.form.controls['FONT_NAME'].setErrors({invalid: true}); 
 // Code goes here 
 

 if ( this.FORM_TRIGGER_FAILURE == true) 
 return; 
 
 if (typeof this.form.controls['FONT_NAME'] != "undefined" ) 
     this.form.get('FONT_NAME').updateValueAndValidity();
 this.form.updateValueAndValidity(); 
 }

 async ON_CLICK_FONT_NAME(event){

}

async WHEN_VALIDATE_ITEM_FONT_SIZE(value) {

 this.FORM_TRIGGER_FAILURE = false ; 
 if (typeof this.form.controls['FONT_SIZE'] != "undefined" ) 
      this.form.controls['FONT_SIZE'].setErrors({invalid: true}); 
 // Code goes here 
 

 if ( this.FORM_TRIGGER_FAILURE == true) 
 return; 
 
 if (typeof this.form.controls['FONT_SIZE'] != "undefined" ) 
     this.form.get('FONT_SIZE').updateValueAndValidity();
 this.form.updateValueAndValidity(); 
 }

 async ON_CLICK_FONT_SIZE(event){

}

async WHEN_VALIDATE_ITEM_FONT_BOLD(value) {

 this.FORM_TRIGGER_FAILURE = false ; 
 if (typeof this.form.controls['FONT_BOLD'] != "undefined" ) 
      this.form.controls['FONT_BOLD'].setErrors({invalid: true}); 
 // Code goes here 
 

 if ( this.FORM_TRIGGER_FAILURE == true) 
 return; 
 
 if (typeof this.form.controls['FONT_BOLD'] != "undefined" ) 
     this.form.get('FONT_BOLD').updateValueAndValidity();
 this.form.updateValueAndValidity(); 
 }

 async ON_CLICK_FONT_BOLD(event){

}

async WHEN_VALIDATE_ITEM_FONT_ITALIC(value) {

 this.FORM_TRIGGER_FAILURE = false ; 
 if (typeof this.form.controls['FONT_ITALIC'] != "undefined" ) 
      this.form.controls['FONT_ITALIC'].setErrors({invalid: true}); 
 // Code goes here 
 

 if ( this.FORM_TRIGGER_FAILURE == true) 
 return; 
 
 if (typeof this.form.controls['FONT_ITALIC'] != "undefined" ) 
     this.form.get('FONT_ITALIC').updateValueAndValidity();
 this.form.updateValueAndValidity(); 
 }

 async ON_CLICK_FONT_ITALIC(event){

}

async WHEN_VALIDATE_ITEM_FONT_UNDERLINE(value) {

 this.FORM_TRIGGER_FAILURE = false ; 
 if (typeof this.form.controls['FONT_UNDERLINE'] != "undefined" ) 
      this.form.controls['FONT_UNDERLINE'].setErrors({invalid: true}); 
 // Code goes here 
 

 if ( this.FORM_TRIGGER_FAILURE == true) 
 return; 
 
 if (typeof this.form.controls['FONT_UNDERLINE'] != "undefined" ) 
     this.form.get('FONT_UNDERLINE').updateValueAndValidity();
 this.form.updateValueAndValidity(); 
 }

 async ON_CLICK_FONT_UNDERLINE(event){

}

async WHEN_VALIDATE_ITEM_CAPTION_COLOR(value) {

 this.FORM_TRIGGER_FAILURE = false ; 
 if (typeof this.form.controls['CAPTION_COLOR'] != "undefined" ) 
      this.form.controls['CAPTION_COLOR'].setErrors({invalid: true}); 
 // Code goes here 
 

 if ( this.FORM_TRIGGER_FAILURE == true) 
 return; 
 
 if (typeof this.form.controls['CAPTION_COLOR'] != "undefined" ) 
     this.form.get('CAPTION_COLOR').updateValueAndValidity();
 this.form.updateValueAndValidity(); 
 }

 async ON_CLICK_CAPTION_COLOR(event){

}

async WHEN_VALIDATE_ITEM_CAPTION_BLINK(value) {

 this.FORM_TRIGGER_FAILURE = false ; 
 if (typeof this.form.controls['CAPTION_BLINK'] != "undefined" ) 
      this.form.controls['CAPTION_BLINK'].setErrors({invalid: true}); 
 // Code goes here 
 

 if ( this.FORM_TRIGGER_FAILURE == true) 
 return; 
 
 if (typeof this.form.controls['CAPTION_BLINK'] != "undefined" ) 
     this.form.get('CAPTION_BLINK').updateValueAndValidity();
 this.form.updateValueAndValidity(); 
 }

 async ON_CLICK_CAPTION_BLINK(event){

}

async WHEN_VALIDATE_ITEM_CAPTION_BACK_COLOR(value) {

 this.FORM_TRIGGER_FAILURE = false ; 
 if (typeof this.form.controls['CAPTION_BACK_COLOR'] != "undefined" ) 
      this.form.controls['CAPTION_BACK_COLOR'].setErrors({invalid: true}); 
 // Code goes here 
 

 if ( this.FORM_TRIGGER_FAILURE == true) 
 return; 
 
 if (typeof this.form.controls['CAPTION_BACK_COLOR'] != "undefined" ) 
     this.form.get('CAPTION_BACK_COLOR').updateValueAndValidity();
 this.form.updateValueAndValidity(); 
 }

 async ON_CLICK_CAPTION_BACK_COLOR(event){

}

async WHEN_VALIDATE_ITEM_CAPTION_WORD_WRAP(value) {

 this.FORM_TRIGGER_FAILURE = false ; 
 if (typeof this.form.controls['CAPTION_WORD_WRAP'] != "undefined" ) 
      this.form.controls['CAPTION_WORD_WRAP'].setErrors({invalid: true}); 
 // Code goes here 
 

 if ( this.FORM_TRIGGER_FAILURE == true) 
 return; 
 
 if (typeof this.form.controls['CAPTION_WORD_WRAP'] != "undefined" ) 
     this.form.get('CAPTION_WORD_WRAP').updateValueAndValidity();
 this.form.updateValueAndValidity(); 
 }

 async ON_CLICK_CAPTION_WORD_WRAP(event){

}

async WHEN_VALIDATE_ITEM_CAPTION_ALIGNMENT(value) {

 this.FORM_TRIGGER_FAILURE = false ; 
 if (typeof this.form.controls['CAPTION_ALIGNMENT'] != "undefined" ) 
      this.form.controls['CAPTION_ALIGNMENT'].setErrors({invalid: true}); 
 // Code goes here 
 

 if ( this.FORM_TRIGGER_FAILURE == true) 
 return; 
 
 if (typeof this.form.controls['CAPTION_ALIGNMENT'] != "undefined" ) 
     this.form.get('CAPTION_ALIGNMENT').updateValueAndValidity();
 this.form.updateValueAndValidity(); 
 }

 async ON_CLICK_CAPTION_ALIGNMENT(event){

}

async WHEN_VALIDATE_ITEM_CAPTION_BACK_STYLE(value) {

 this.FORM_TRIGGER_FAILURE = false ; 
 if (typeof this.form.controls['CAPTION_BACK_STYLE'] != "undefined" ) 
      this.form.controls['CAPTION_BACK_STYLE'].setErrors({invalid: true}); 
 // Code goes here 
 

 if ( this.FORM_TRIGGER_FAILURE == true) 
 return; 
 
 if (typeof this.form.controls['CAPTION_BACK_STYLE'] != "undefined" ) 
     this.form.get('CAPTION_BACK_STYLE').updateValueAndValidity();
 this.form.updateValueAndValidity(); 
 }

 async ON_CLICK_CAPTION_BACK_STYLE(event){

}

async WHEN_VALIDATE_ITEM_IMAGE_NAME(value) {

 this.FORM_TRIGGER_FAILURE = false ; 
 if (typeof this.form.controls['IMAGE_NAME'] != "undefined" ) 
      this.form.controls['IMAGE_NAME'].setErrors({invalid: true}); 
 // Code goes here 
 

 if ( this.FORM_TRIGGER_FAILURE == true) 
 return; 
 
 if (typeof this.form.controls['IMAGE_NAME'] != "undefined" ) 
     this.form.get('IMAGE_NAME').updateValueAndValidity();
 this.form.updateValueAndValidity(); 
 }

 async ON_CLICK_IMAGE_NAME(event){

}

async WHEN_VALIDATE_ITEM_IMAGE_SELECT_STATE(value) {

 this.FORM_TRIGGER_FAILURE = false ; 
 if (typeof this.form.controls['IMAGE_SELECT_STATE'] != "undefined" ) 
      this.form.controls['IMAGE_SELECT_STATE'].setErrors({invalid: true}); 
 // Code goes here 
 

 if ( this.FORM_TRIGGER_FAILURE == true) 
 return; 
 
 if (typeof this.form.controls['IMAGE_SELECT_STATE'] != "undefined" ) 
     this.form.get('IMAGE_SELECT_STATE').updateValueAndValidity();
 this.form.updateValueAndValidity(); 
 }

 async ON_CLICK_IMAGE_SELECT_STATE(event){

}

async WHEN_VALIDATE_ITEM_IMAGE_TYPE(value) {

 this.FORM_TRIGGER_FAILURE = false ; 
 if (typeof this.form.controls['IMAGE_TYPE'] != "undefined" ) 
      this.form.controls['IMAGE_TYPE'].setErrors({invalid: true}); 
 // Code goes here 
 

 if ( this.FORM_TRIGGER_FAILURE == true) 
 return; 
 
 if (typeof this.form.controls['IMAGE_TYPE'] != "undefined" ) 
     this.form.get('IMAGE_TYPE').updateValueAndValidity();
 this.form.updateValueAndValidity(); 
 }

 async ON_CLICK_IMAGE_TYPE(event){

}

async WHEN_VALIDATE_ITEM_IMAGE_COLOR(value) {

 this.FORM_TRIGGER_FAILURE = false ; 
 if (typeof this.form.controls['IMAGE_COLOR'] != "undefined" ) 
      this.form.controls['IMAGE_COLOR'].setErrors({invalid: true}); 
 // Code goes here 
 

 if ( this.FORM_TRIGGER_FAILURE == true) 
 return; 
 
 if (typeof this.form.controls['IMAGE_COLOR'] != "undefined" ) 
     this.form.get('IMAGE_COLOR').updateValueAndValidity();
 this.form.updateValueAndValidity(); 
 }

 async ON_CLICK_IMAGE_COLOR(event){

}

async WHEN_VALIDATE_ITEM_IMAGE_BLINK(value) {

 this.FORM_TRIGGER_FAILURE = false ; 
 if (typeof this.form.controls['IMAGE_BLINK'] != "undefined" ) 
      this.form.controls['IMAGE_BLINK'].setErrors({invalid: true}); 
 // Code goes here 
 

 if ( this.FORM_TRIGGER_FAILURE == true) 
 return; 
 
 if (typeof this.form.controls['IMAGE_BLINK'] != "undefined" ) 
     this.form.get('IMAGE_BLINK').updateValueAndValidity();
 this.form.updateValueAndValidity(); 
 }

 async ON_CLICK_IMAGE_BLINK(event){

}

async WHEN_VALIDATE_ITEM_IMAGE_BACK_COLOR(value) {

 this.FORM_TRIGGER_FAILURE = false ; 
 if (typeof this.form.controls['IMAGE_BACK_COLOR'] != "undefined" ) 
      this.form.controls['IMAGE_BACK_COLOR'].setErrors({invalid: true}); 
 // Code goes here 
 

 if ( this.FORM_TRIGGER_FAILURE == true) 
 return; 
 
 if (typeof this.form.controls['IMAGE_BACK_COLOR'] != "undefined" ) 
     this.form.get('IMAGE_BACK_COLOR').updateValueAndValidity();
 this.form.updateValueAndValidity(); 
 }

 async ON_CLICK_IMAGE_BACK_COLOR(event){

}

async WHEN_VALIDATE_ITEM_SCALE_IMAGE(value) {

 this.FORM_TRIGGER_FAILURE = false ; 
 if (typeof this.form.controls['SCALE_IMAGE'] != "undefined" ) 
      this.form.controls['SCALE_IMAGE'].setErrors({invalid: true}); 
 // Code goes here 
 

 if ( this.FORM_TRIGGER_FAILURE == true) 
 return; 
 
 if (typeof this.form.controls['SCALE_IMAGE'] != "undefined" ) 
     this.form.get('SCALE_IMAGE').updateValueAndValidity();
 this.form.updateValueAndValidity(); 
 }

 async ON_CLICK_SCALE_IMAGE(event){

}

async WHEN_VALIDATE_ITEM_IMAGE_ALIGNMENT(value) {

 this.FORM_TRIGGER_FAILURE = false ; 
 if (typeof this.form.controls['IMAGE_ALIGNMENT'] != "undefined" ) 
      this.form.controls['IMAGE_ALIGNMENT'].setErrors({invalid: true}); 
 // Code goes here 
 

 if ( this.FORM_TRIGGER_FAILURE == true) 
 return; 
 
 if (typeof this.form.controls['IMAGE_ALIGNMENT'] != "undefined" ) 
     this.form.get('IMAGE_ALIGNMENT').updateValueAndValidity();
 this.form.updateValueAndValidity(); 
 }

 async ON_CLICK_IMAGE_ALIGNMENT(event){

}
 
 async onChange_SHAPE_STATE_ID(event:any) { 
 var value = event.target.value; 
 if ((value == null) || (value == '')) 	
 	return;  
    this.FORM_TRIGGER_FAILURE = false;	
 await   this.WHEN_VALIDATE_ITEM_SHAPE_STATE_ID(value); if ( this.FORM_TRIGGER_FAILURE) return; 
 this.formValidationChangedOutput.emit(this.form.valid); 
  
 } 
 async onValueChange_SHAPE_ID(value) { 
  this.FORM_TRIGGER_FAILURE = false;	
 await this.WHEN_VALIDATE_ITEM_SHAPE_ID(value); if ( this.FORM_TRIGGER_FAILURE) return; 
 this.formValidationChangedOutput.emit(this.form.valid); 
  
  } 
 async onChange_STATE_ID(event:any) { 
 var value = event.target.value; 
 if ((value == null) || (value == '')) 	
 	return;  
    this.FORM_TRIGGER_FAILURE = false;	
 await   this.WHEN_VALIDATE_ITEM_STATE_ID(value); if ( this.FORM_TRIGGER_FAILURE) return; 
 this.formValidationChangedOutput.emit(this.form.valid); 
  
 } 
 async onChange_STATE_NAME(event:any) { 
 var value = event.target.value; 
 if ((value == null) || (value == '')) 	
 	return;  
    this.FORM_TRIGGER_FAILURE = false;	
 await   this.WHEN_VALIDATE_ITEM_STATE_NAME(value); if ( this.FORM_TRIGGER_FAILURE) return; 
 this.formValidationChangedOutput.emit(this.form.valid); 
  
 } 
 async onValueChange_BACK_COLOR(value) { 
  this.FORM_TRIGGER_FAILURE = false;	
 await this.WHEN_VALIDATE_ITEM_BACK_COLOR(value); if ( this.FORM_TRIGGER_FAILURE) return; 
 this.formValidationChangedOutput.emit(this.form.valid); 
  
  } 
 async onChange_VALUE(event:any) { 
 var value = event.target.value; 
 if ((value == null) || (value == '')) 	
 	return;  
    this.FORM_TRIGGER_FAILURE = false;	
 await   this.WHEN_VALIDATE_ITEM_VALUE(value); if ( this.FORM_TRIGGER_FAILURE) return; 
 this.formValidationChangedOutput.emit(this.form.valid); 
  
 } 
 async onValueChange_PATTERN_COLOR(value) { 
  this.FORM_TRIGGER_FAILURE = false;	
 await this.WHEN_VALIDATE_ITEM_PATTERN_COLOR(value); if ( this.FORM_TRIGGER_FAILURE) return; 
 this.formValidationChangedOutput.emit(this.form.valid); 
  
  } 
 async onValueChange_PATTERN_STYLE(value) { 
  this.FORM_TRIGGER_FAILURE = false;	
 await this.WHEN_VALIDATE_ITEM_PATTERN_STYLE(value); if ( this.FORM_TRIGGER_FAILURE) return; 
 this.formValidationChangedOutput.emit(this.form.valid); 
  
  } 
 async onValueChange_BORDER_COLOR(value) { 
  this.FORM_TRIGGER_FAILURE = false;	
 await this.WHEN_VALIDATE_ITEM_BORDER_COLOR(value); if ( this.FORM_TRIGGER_FAILURE) return; 
 this.formValidationChangedOutput.emit(this.form.valid); 
  
  } 
 async onChange_BLINK(event:any) { 
 var value = event.target.value; 
 if ((value == null) || (value == '')) 	
 	return;  
    this.FORM_TRIGGER_FAILURE = false;	
 await   this.WHEN_VALIDATE_ITEM_BLINK(value); if ( this.FORM_TRIGGER_FAILURE) return; 
 this.formValidationChangedOutput.emit(this.form.valid); 
  
 } 
 async onValueChange_CAPTION(value) { 
  this.FORM_TRIGGER_FAILURE = false;	
 await this.WHEN_VALIDATE_ITEM_CAPTION(value); if ( this.FORM_TRIGGER_FAILURE) return; 
 this.formValidationChangedOutput.emit(this.form.valid); 
  
  } 
 async onValueChange_INSERT_VARIABLE(value) { 
  this.FORM_TRIGGER_FAILURE = false;	
 await this.WHEN_VALIDATE_ITEM_INSERT_VARIABLE(value); if ( this.FORM_TRIGGER_FAILURE) return; 
 this.formValidationChangedOutput.emit(this.form.valid); 
  
  } 
 async onValueChange_FONT_NAME(value) { 
  this.FORM_TRIGGER_FAILURE = false;	
 await this.WHEN_VALIDATE_ITEM_FONT_NAME(value); if ( this.FORM_TRIGGER_FAILURE) return; 
 this.formValidationChangedOutput.emit(this.form.valid); 
  
  } 
 async onValueChange_FONT_SIZE(value) { 
  this.FORM_TRIGGER_FAILURE = false;	
 await this.WHEN_VALIDATE_ITEM_FONT_SIZE(value); if ( this.FORM_TRIGGER_FAILURE) return; 
 this.formValidationChangedOutput.emit(this.form.valid); 
  
  } 
 async onValueChange_FONT_BOLD(value) { 
  this.FORM_TRIGGER_FAILURE = false;	
 await this.WHEN_VALIDATE_ITEM_FONT_BOLD(value); if ( this.FORM_TRIGGER_FAILURE) return; 
 this.formValidationChangedOutput.emit(this.form.valid); 
  
  } 
 async onValueChange_FONT_ITALIC(value) { 
  this.FORM_TRIGGER_FAILURE = false;	
 await this.WHEN_VALIDATE_ITEM_FONT_ITALIC(value); if ( this.FORM_TRIGGER_FAILURE) return; 
 this.formValidationChangedOutput.emit(this.form.valid); 
  
  } 
 async onValueChange_FONT_UNDERLINE(value) { 
  this.FORM_TRIGGER_FAILURE = false;	
 await this.WHEN_VALIDATE_ITEM_FONT_UNDERLINE(value); if ( this.FORM_TRIGGER_FAILURE) return; 
 this.formValidationChangedOutput.emit(this.form.valid); 
  
  } 
 async onValueChange_CAPTION_COLOR(value) { 
  this.FORM_TRIGGER_FAILURE = false;	
 await this.WHEN_VALIDATE_ITEM_CAPTION_COLOR(value); if ( this.FORM_TRIGGER_FAILURE) return; 
 this.formValidationChangedOutput.emit(this.form.valid); 
  
  } 
 async onChange_CAPTION_BLINK(event:any) { 
 var value = event.target.value; 
 if ((value == null) || (value == '')) 	
 	return;  
    this.FORM_TRIGGER_FAILURE = false;	
 await   this.WHEN_VALIDATE_ITEM_CAPTION_BLINK(value); if ( this.FORM_TRIGGER_FAILURE) return; 
 this.formValidationChangedOutput.emit(this.form.valid); 
  
 } 
 async onValueChange_CAPTION_BACK_COLOR(value) { 
  this.FORM_TRIGGER_FAILURE = false;	
 await this.WHEN_VALIDATE_ITEM_CAPTION_BACK_COLOR(value); if ( this.FORM_TRIGGER_FAILURE) return; 
 this.formValidationChangedOutput.emit(this.form.valid); 
  
  } 
 async onChange_CAPTION_WORD_WRAP(event:any) { 
 var value = event.target.value; 
 if ((value == null) || (value == '')) 	
 	return;  
    this.FORM_TRIGGER_FAILURE = false;	
 await   this.WHEN_VALIDATE_ITEM_CAPTION_WORD_WRAP(value); if ( this.FORM_TRIGGER_FAILURE) return; 
 this.formValidationChangedOutput.emit(this.form.valid); 
  
 } 
 async onChange_CAPTION_ALIGNMENT(event:any) { 
 var value = event.target.value; 
 if ((value == null) || (value == '')) 	
 	return;  
    this.FORM_TRIGGER_FAILURE = false;	
 await   this.WHEN_VALIDATE_ITEM_CAPTION_ALIGNMENT(value); if ( this.FORM_TRIGGER_FAILURE) return; 
 this.formValidationChangedOutput.emit(this.form.valid); 
  
 } 
 async onValueChange_CAPTION_BACK_STYLE(value) { 
  this.FORM_TRIGGER_FAILURE = false;	
 await this.WHEN_VALIDATE_ITEM_CAPTION_BACK_STYLE(value); if ( this.FORM_TRIGGER_FAILURE) return; 
 this.formValidationChangedOutput.emit(this.form.valid); 
  
  } 
 async onChange_IMAGE_NAME(event:any) { 
 var value = event.target.value; 
 if ((value == null) || (value == '')) 	
 	return;  
    this.FORM_TRIGGER_FAILURE = false;	
 await   this.WHEN_VALIDATE_ITEM_IMAGE_NAME(value); if ( this.FORM_TRIGGER_FAILURE) return; 
 this.formValidationChangedOutput.emit(this.form.valid); 
  
 } 
 async onValueChange_IMAGE_SELECT_STATE(value) { 
  this.FORM_TRIGGER_FAILURE = false;	
 await this.WHEN_VALIDATE_ITEM_IMAGE_SELECT_STATE(value); if ( this.FORM_TRIGGER_FAILURE) return; 
 this.formValidationChangedOutput.emit(this.form.valid); 
  
  } 
 async onValueChange_IMAGE_TYPE(value) { 
  this.FORM_TRIGGER_FAILURE = false;	
 await this.WHEN_VALIDATE_ITEM_IMAGE_TYPE(value); if ( this.FORM_TRIGGER_FAILURE) return; 
 this.formValidationChangedOutput.emit(this.form.valid); 
  
  } 
 async onValueChange_IMAGE_COLOR(value) { 
  this.FORM_TRIGGER_FAILURE = false;	
 await this.WHEN_VALIDATE_ITEM_IMAGE_COLOR(value); if ( this.FORM_TRIGGER_FAILURE) return; 
 this.formValidationChangedOutput.emit(this.form.valid); 
  
  } 
 async onChange_IMAGE_BLINK(event:any) { 
 var value = event.target.value; 
 if ((value == null) || (value == '')) 	
 	return;  
    this.FORM_TRIGGER_FAILURE = false;	
 await   this.WHEN_VALIDATE_ITEM_IMAGE_BLINK(value); if ( this.FORM_TRIGGER_FAILURE) return; 
 this.formValidationChangedOutput.emit(this.form.valid); 
  
 } 
 async onValueChange_IMAGE_BACK_COLOR(value) { 
  this.FORM_TRIGGER_FAILURE = false;	
 await this.WHEN_VALIDATE_ITEM_IMAGE_BACK_COLOR(value); if ( this.FORM_TRIGGER_FAILURE) return; 
 this.formValidationChangedOutput.emit(this.form.valid); 
  
  } 
 async onChange_SCALE_IMAGE(event:any) { 
 var value = event.target.value; 
 if ((value == null) || (value == '')) 	
 	return;  
    this.FORM_TRIGGER_FAILURE = false;	
 await   this.WHEN_VALIDATE_ITEM_SCALE_IMAGE(value); if ( this.FORM_TRIGGER_FAILURE) return; 
 this.formValidationChangedOutput.emit(this.form.valid); 
  
 } 
 async onChange_IMAGE_ALIGNMENT(event:any) { 
 var value = event.target.value; 
 if ((value == null) || (value == '')) 	
 	return;  
    this.FORM_TRIGGER_FAILURE = false;	
 await   this.WHEN_VALIDATE_ITEM_IMAGE_ALIGNMENT(value); if ( this.FORM_TRIGGER_FAILURE) return; 
 this.formValidationChangedOutput.emit(this.form.valid); 
  
 }

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


