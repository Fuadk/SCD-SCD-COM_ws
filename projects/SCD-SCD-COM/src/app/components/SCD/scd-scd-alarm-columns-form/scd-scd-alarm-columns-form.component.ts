import { Component, Input, Output, EventEmitter, HostListener,ChangeDetectionStrategy } from '@angular/core';
import { FormGroup, FormControl, Validators ,FormBuilder} from '@angular/forms';
import { starServices } from 'starlib';
import { Starlib1 } from '../../Starlib1';
import { StarNotifyService } from '../../../services/starnotification.service';

import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';

import { Subscription } from 'rxjs';
import { IntlService } from "@progress/kendo-angular-intl";
import {  ViewEncapsulation } from "@angular/core";
import { Router } from '@angular/router';
import { TabAlignment } from '@progress/kendo-angular-layout';
import { scdalarmColumnsScdScdAlarmColumnsForm , componentConfigDef} from '@modeldir/model';


 const createFormGroup = (dataItem:any) => new FormGroup({
'COLUMN_ID' : new FormControl(dataItem.COLUMN_ID  , ) ,
'SHAPE_ID' : new FormControl(dataItem.SHAPE_ID  ,   Validators.required ) ,
'CAPTION' : new FormControl(dataItem.CAPTION  , ) ,
'ALARM_TYPE' : new FormControl(dataItem.ALARM_TYPE  , ) ,
'ROW_ORDER' : new FormControl(dataItem.ROW_ORDER  , ) ,
'ROW_TYPE' : new FormControl(dataItem.ROW_TYPE  , ) ,
'SHOW_COLUMN_BUTTON_PANEL' : new FormControl(dataItem.SHOW_COLUMN_BUTTON_PANEL  , ) ,
'IMAGE_ICON' : new FormControl(dataItem.IMAGE_ICON  , ) ,
'HEADING_TEXT' : new FormControl(dataItem.HEADING_TEXT  , ) ,
'WIDTH' : new FormControl(dataItem.WIDTH  , ) ,
'ALIGN' : new FormControl(dataItem.ALIGN  , ) ,
'FORMAT' : new FormControl(dataItem.FORMAT  , ) ,
'SAMPLE' : new FormControl(dataItem.SAMPLE  , ) ,
'TOOLTIP' : new FormControl(dataItem.TOOLTIP  , ) ,
'SHOW_COLUMN_FIELD' : new FormControl(dataItem.SHOW_COLUMN_FIELD  , ) 
});

declare function getParamConfig():any;
@Component({
  selector: 'app-scd-scd-alarm-columns-form',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './scd-scd-alarm-columns-form.component.html',
  styleUrls: ['./scd-scd-alarm-columns-form.component.scss'],
  standalone: false,
  changeDetection: ChangeDetectionStrategy.OnPush
})


export class ScdAlarmColumnsScdScdAlarmColumnsFormFormComponent {
  public title =  this.starServices.getNLS([],"SCD_SCD_ALARM_COLUMNS_FORM.scdalarmColumnsScdScdAlarmColumnsForm.component_title","SCD ALARM COLUMNS FORM");
  public compTitleMsg =  "SCD_SCD_ALARM_COLUMNS_FORM.scdalarmColumnsScdScdAlarmColumnsForm";
  public routineName = "ScdAlarmColumnsScdScdAlarmColumnsFormForm";
  private insertCMD = "INSERT_SCD_ALARM_COLUMNS";
  private updateCMD = "UPDATE_SCD_ALARM_COLUMNS";
  private deleteCMD =   "DELETE_SCD_ALARM_COLUMNS";
  private getCMD = "GET_SCD_ALARM_COLUMNS_QUERY";

  public value: Date = new Date(2019, 5, 1, 22);
  public format: string = 'MM/dd/yyyy HH:mm';
  public active = false;

  public  form!: FormGroup; 
  public PDFfileName = this.title + ".PDF";
  public componentConfig: componentConfigDef;
  public componentConfig_output: componentConfigDef;
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
  public primarKeyReadOnlyArr = {isCOLUMN_IDreadOnly : false , isSHAPE_IDreadOnly : false};  
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
  public compSelector = 'app-scd-scd-alarm-columns-form';
  public PK_AUTO = 'COLUMN_ID';
  public customerFacing = false;
  public FormStepsArr = [] ;
public labelCOLUMN_IDTop=true;
public labelCOLUMN_IDVisible=true;
public labelSHAPE_IDTop=true;
public labelSHAPE_IDVisible=true;
public labelCAPTIONTop=true;
public labelCAPTIONVisible=true;
public labelALARM_TYPETop=true;
public labelALARM_TYPEVisible=true;
public labelROW_ORDERTop=true;
public labelROW_ORDERVisible=true;
public labelROW_TYPETop=true;
public labelROW_TYPEVisible=true;
public labelSHOW_COLUMN_BUTTON_PANELTop=true;
public labelSHOW_COLUMN_BUTTON_PANELVisible=true;
public labelIMAGE_ICONTop=true;
public labelIMAGE_ICONVisible=true;
public labelHEADING_TEXTTop=true;
public labelHEADING_TEXTVisible=true;
public labelWIDTHTop=true;
public labelWIDTHVisible=true;
public labelALIGNTop=true;
public labelALIGNVisible=true;
public labelFORMATTop=true;
public labelFORMATVisible=true;
public labelSAMPLETop=true;
public labelSAMPLEVisible=true;
public labelTOOLTIPTop=true;
public labelTOOLTIPVisible=true;
public labelSHOW_COLUMN_FIELDTop=true;
public labelSHOW_COLUMN_FIELDVisible=true;

public visibleCOLUMN_ID = true;
public visibleSHAPE_ID = true;
public visibleCAPTION = true;
public visibleALARM_TYPE = true;
public visibleROW_ORDER = true;
public visibleROW_TYPE = true;
public visibleSHOW_COLUMN_BUTTON_PANEL = true;
public visibleIMAGE_ICON = true;
public visibleHEADING_TEXT = true;
public visibleWIDTH = true;
public visibleALIGN = true;
public visibleFORMAT = true;
public visibleSAMPLE = true;
public visibleTOOLTIP = true;
public visibleSHOW_COLUMN_FIELD = true;

public disableCOLUMN_ID = false;
public disableSHAPE_ID = false;
public disableCAPTION = false;
public disableALARM_TYPE = false;
public disableROW_ORDER = false;
public disableROW_TYPE = false;
public disableSHOW_COLUMN_BUTTON_PANEL = false;
public disableIMAGE_ICON = false;
public disableHEADING_TEXT = false;
public disableWIDTH = false;
public disableALIGN = false;
public disableFORMAT = false;
public disableSAMPLE = false;
public disableTOOLTIP = false;
public disableSHOW_COLUMN_FIELD = false;


  
  //@Input()  
  public showToolBar = true;
  @Output() readCompletedOutput: EventEmitter<any> = new EventEmitter();
  @Output() clearCompletedOutput: EventEmitter<any> = new EventEmitter();
  @Output() saveCompletedOutput: EventEmitter<any> = new EventEmitter();
  @Output() formValidationChangedOutput: EventEmitter<boolean> = new EventEmitter();
  @Output() setComponentConfig_Output: EventEmitter<any> = new EventEmitter();
  @Output() valueChange = new EventEmitter<string>();

   constructor(public starlib1: Starlib1,public router: Router,public intl: IntlService, 
    public responsive: BreakpointObserver, 
   private starNotify: StarNotifyService,  
    public starServices: starServices
   ) {
      this.router = router;
      this.componentConfig = new componentConfigDef(); 
      this.componentConfig_output = new componentConfigDef(); 
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
  // Watch form changes to update isDirty in componentConfig
  this.form.valueChanges.subscribe(() => {
    if (this.componentConfig_output) {
      const wasDirty = this.componentConfig_output.isDirty;
      this.componentConfig_output = new componentConfigDef();
      this.componentConfig_output.isDirty = this.form.dirty;
      
      // Only emit if state changed
      if (wasDirty !== this.componentConfig_output.isDirty) {
        console.log('onCloseWindowDebug:Form dirty state changed:', this.form.dirty, this.componentConfig_output.isDirty);
        this.emitcomponentConfig_output();
      }
    }
  });

  }
  private emitcomponentConfig_output(): void {
  if (this.componentConfig_output) {
    this.componentConfig_output.eventFrom = this.compSelector;
    
    console.log('onCloseWindowDebug:Emitting componentConfig_output:', this.componentConfig_output);
    this.setComponentConfig_Output.emit(this.componentConfig_output);
  }
}
  public ngOnDestroy(): void {
    // Unsubscribe the event once not needed.
    if (typeof this.componentConfigChangeEvent !== "undefined") this.componentConfigChangeEvent.unsubscribe();
 }

  callStarNotify(componentConfig:any) {
    componentConfig.eventFrom = this.compSelector;
    this.starNotify.sendEvent<componentConfigDef>('componentConfigDef', componentConfig);
  }

  private formInitialValues:any =   new scdalarmColumnsScdScdAlarmColumnsForm();   
    @Input() public set detail_Input(form: any) {
       if (typeof form != "undefined"){
        this.isSearch = true;
        this.executeQuery(form);
        this.isChild = true;
      }
      /*
    if (this.paramConfig.DEBUG_FLAG) console.log('detail_Input ScdAlarmColumnsScdScdAlarmColumnsFormForm form.SHAPE_ID :' + form.SHAPE_ID);
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
      this.FormStepsArr.forEach(item => {
      (item as any).visible = true;
    });
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
      this.Comp_Config.masterKeyArr =  [NewVal['COLUMN_ID']];
      this.Comp_Config.masterKeyNameArr =  ["COLUMN_ID"];
         
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
        //Add Key Fields
         for (let i=0;i< this.masterKeyArr.length;i++){
          console.log("NoValidData:check:", typeof form.value[this.masterKeyNameArr[i]]);
          if (typeof form.value[this.masterKeyNameArr[i]] != "undefined" 
            && (form.value[this.masterKeyNameArr[i]] == ""
            || form.value[this.masterKeyNameArr[i]] == null)){
            let object= {}
            object[this.masterKeyNameArr[i]] = this.masterKeyArr[i];
            form.patchValue(object);
            }
         }
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
this.lookupArrDef =[	{"statment":"SELECT CODE, CODETEXT_LANG, CODEVALUE_LANG FROM SOM_TABS_CODES WHERE CODENAME ='SHAPE_ID' and LANGUAGE_NAME = '" + this.userLang + "' order by CODETEXT_LANG",
			"lkpArrName":"lkpArrSHAPE_ID"}];
 if (this.lookupArrDef.length > 0)
   this.starServices.fetchLookups(this, this.lookupArrDef);
}

public lkpArrSHAPE_ID = [];

public lkpArrGetSHAPE_ID(CODE: any): any {
var rec = this.lkpArrSHAPE_ID.find((x:any) => x.CODE === CODE);
return rec;
}

onChanges(): void {
this.form.get('COLUMN_ID').valueChanges.subscribe(val => {
});
this.form.get('CAPTION').valueChanges.subscribe(val => {
});
this.form.get('ALARM_TYPE').valueChanges.subscribe(val => {
});
this.form.get('ROW_ORDER').valueChanges.subscribe(val => {
});
this.form.get('ROW_TYPE').valueChanges.subscribe(val => {
});
this.form.get('SHOW_COLUMN_BUTTON_PANEL').valueChanges.subscribe(val => {
});
this.form.get('HEADING_TEXT').valueChanges.subscribe(val => {
});
this.form.get('WIDTH').valueChanges.subscribe(val => {
});
this.form.get('ALIGN').valueChanges.subscribe(val => {
});
this.form.get('FORMAT').valueChanges.subscribe(val => {
});
this.form.get('SAMPLE').valueChanges.subscribe(val => {
});
this.form.get('TOOLTIP').valueChanges.subscribe(val => {
});
this.form.get('SHOW_COLUMN_FIELD').valueChanges.subscribe(val => {
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
      if (this.paramConfig.DEBUG_FLAG) console.log("ScdAlarmColumnsScdScdAlarmColumnsFormForm ComponentConfig:", {...ComponentConfig});

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



async WHEN_VALIDATE_ITEM_COLUMN_ID(value) {

 this.FORM_TRIGGER_FAILURE = false ; 
 if (typeof this.form.controls['COLUMN_ID'] != "undefined" ) 
      this.form.controls['COLUMN_ID'].setErrors({invalid: true}); 
 // Code goes here 
 

 if ( this.FORM_TRIGGER_FAILURE == true) 
 return; 
 
 if (typeof this.form.controls['COLUMN_ID'] != "undefined" ) 
     this.form.get('COLUMN_ID').updateValueAndValidity();
 this.form.updateValueAndValidity(); 
 }

 async ON_CLICK_COLUMN_ID(event){

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

async WHEN_VALIDATE_ITEM_ALARM_TYPE(value) {

 this.FORM_TRIGGER_FAILURE = false ; 
 if (typeof this.form.controls['ALARM_TYPE'] != "undefined" ) 
      this.form.controls['ALARM_TYPE'].setErrors({invalid: true}); 
 // Code goes here 
 

 if ( this.FORM_TRIGGER_FAILURE == true) 
 return; 
 
 if (typeof this.form.controls['ALARM_TYPE'] != "undefined" ) 
     this.form.get('ALARM_TYPE').updateValueAndValidity();
 this.form.updateValueAndValidity(); 
 }

 async ON_CLICK_ALARM_TYPE(event){

}

async WHEN_VALIDATE_ITEM_ROW_ORDER(value) {

 this.FORM_TRIGGER_FAILURE = false ; 
 if (typeof this.form.controls['ROW_ORDER'] != "undefined" ) 
      this.form.controls['ROW_ORDER'].setErrors({invalid: true}); 
 // Code goes here 
 

 if ( this.FORM_TRIGGER_FAILURE == true) 
 return; 
 
 if (typeof this.form.controls['ROW_ORDER'] != "undefined" ) 
     this.form.get('ROW_ORDER').updateValueAndValidity();
 this.form.updateValueAndValidity(); 
 }

 async ON_CLICK_ROW_ORDER(event){

}

async WHEN_VALIDATE_ITEM_ROW_TYPE(value) {

 this.FORM_TRIGGER_FAILURE = false ; 
 if (typeof this.form.controls['ROW_TYPE'] != "undefined" ) 
      this.form.controls['ROW_TYPE'].setErrors({invalid: true}); 
 // Code goes here 
 

 if ( this.FORM_TRIGGER_FAILURE == true) 
 return; 
 
 if (typeof this.form.controls['ROW_TYPE'] != "undefined" ) 
     this.form.get('ROW_TYPE').updateValueAndValidity();
 this.form.updateValueAndValidity(); 
 }

 async ON_CLICK_ROW_TYPE(event){

}

async WHEN_VALIDATE_ITEM_SHOW_COLUMN_BUTTON_PANEL(value) {

 this.FORM_TRIGGER_FAILURE = false ; 
 if (typeof this.form.controls['SHOW_COLUMN_BUTTON_PANEL'] != "undefined" ) 
      this.form.controls['SHOW_COLUMN_BUTTON_PANEL'].setErrors({invalid: true}); 
 // Code goes here 
 

 if ( this.FORM_TRIGGER_FAILURE == true) 
 return; 
 
 if (typeof this.form.controls['SHOW_COLUMN_BUTTON_PANEL'] != "undefined" ) 
     this.form.get('SHOW_COLUMN_BUTTON_PANEL').updateValueAndValidity();
 this.form.updateValueAndValidity(); 
 }

 async ON_CLICK_SHOW_COLUMN_BUTTON_PANEL(event){

}

async WHEN_VALIDATE_ITEM_IMAGE_ICON(value) {

 this.FORM_TRIGGER_FAILURE = false ; 
 if (typeof this.form.controls['IMAGE_ICON'] != "undefined" ) 
      this.form.controls['IMAGE_ICON'].setErrors({invalid: true}); 
 // Code goes here 
 

 if ( this.FORM_TRIGGER_FAILURE == true) 
 return; 
 
 if (typeof this.form.controls['IMAGE_ICON'] != "undefined" ) 
     this.form.get('IMAGE_ICON').updateValueAndValidity();
 this.form.updateValueAndValidity(); 
 }

 async ON_CLICK_IMAGE_ICON(event){

}

async WHEN_VALIDATE_ITEM_HEADING_TEXT(value) {

 this.FORM_TRIGGER_FAILURE = false ; 
 if (typeof this.form.controls['HEADING_TEXT'] != "undefined" ) 
      this.form.controls['HEADING_TEXT'].setErrors({invalid: true}); 
 // Code goes here 
 

 if ( this.FORM_TRIGGER_FAILURE == true) 
 return; 
 
 if (typeof this.form.controls['HEADING_TEXT'] != "undefined" ) 
     this.form.get('HEADING_TEXT').updateValueAndValidity();
 this.form.updateValueAndValidity(); 
 }

 async ON_CLICK_HEADING_TEXT(event){

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

async WHEN_VALIDATE_ITEM_ALIGN(value) {

 this.FORM_TRIGGER_FAILURE = false ; 
 if (typeof this.form.controls['ALIGN'] != "undefined" ) 
      this.form.controls['ALIGN'].setErrors({invalid: true}); 
 // Code goes here 
 

 if ( this.FORM_TRIGGER_FAILURE == true) 
 return; 
 
 if (typeof this.form.controls['ALIGN'] != "undefined" ) 
     this.form.get('ALIGN').updateValueAndValidity();
 this.form.updateValueAndValidity(); 
 }

 async ON_CLICK_ALIGN(event){

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

async WHEN_VALIDATE_ITEM_SAMPLE(value) {

 this.FORM_TRIGGER_FAILURE = false ; 
 if (typeof this.form.controls['SAMPLE'] != "undefined" ) 
      this.form.controls['SAMPLE'].setErrors({invalid: true}); 
 // Code goes here 
 

 if ( this.FORM_TRIGGER_FAILURE == true) 
 return; 
 
 if (typeof this.form.controls['SAMPLE'] != "undefined" ) 
     this.form.get('SAMPLE').updateValueAndValidity();
 this.form.updateValueAndValidity(); 
 }

 async ON_CLICK_SAMPLE(event){

}

async WHEN_VALIDATE_ITEM_TOOLTIP(value) {

 this.FORM_TRIGGER_FAILURE = false ; 
 if (typeof this.form.controls['TOOLTIP'] != "undefined" ) 
      this.form.controls['TOOLTIP'].setErrors({invalid: true}); 
 // Code goes here 
 

 if ( this.FORM_TRIGGER_FAILURE == true) 
 return; 
 
 if (typeof this.form.controls['TOOLTIP'] != "undefined" ) 
     this.form.get('TOOLTIP').updateValueAndValidity();
 this.form.updateValueAndValidity(); 
 }

 async ON_CLICK_TOOLTIP(event){

}

async WHEN_VALIDATE_ITEM_SHOW_COLUMN_FIELD(value) {

 this.FORM_TRIGGER_FAILURE = false ; 
 if (typeof this.form.controls['SHOW_COLUMN_FIELD'] != "undefined" ) 
      this.form.controls['SHOW_COLUMN_FIELD'].setErrors({invalid: true}); 
 // Code goes here 
 

 if ( this.FORM_TRIGGER_FAILURE == true) 
 return; 
 
 if (typeof this.form.controls['SHOW_COLUMN_FIELD'] != "undefined" ) 
     this.form.get('SHOW_COLUMN_FIELD').updateValueAndValidity();
 this.form.updateValueAndValidity(); 
 }

 async ON_CLICK_SHOW_COLUMN_FIELD(event){

}
 
 async onChange_COLUMN_ID(event:any) { 
 var value = event.target.value; 
 if ((value == null) || (value == '')) 	
 	return;  
    this.FORM_TRIGGER_FAILURE = false;	
 await   this.WHEN_VALIDATE_ITEM_COLUMN_ID(value); if ( this.FORM_TRIGGER_FAILURE) return; 
 this.formValidationChangedOutput.emit(this.form.valid); 
  
 } 
 async onValueChange_SHAPE_ID(value) { 
  this.FORM_TRIGGER_FAILURE = false;	
 await this.WHEN_VALIDATE_ITEM_SHAPE_ID(value); if ( this.FORM_TRIGGER_FAILURE) return; 
 this.formValidationChangedOutput.emit(this.form.valid); 
  
  } 
 async onChange_CAPTION(event:any) { 
 var value = event.target.value; 
 if ((value == null) || (value == '')) 	
 	return;  
    this.FORM_TRIGGER_FAILURE = false;	
 await   this.WHEN_VALIDATE_ITEM_CAPTION(value); if ( this.FORM_TRIGGER_FAILURE) return; 
 this.formValidationChangedOutput.emit(this.form.valid); 
  
 } 
 async onChange_ALARM_TYPE(event:any) { 
 var value = event.target.value; 
 if ((value == null) || (value == '')) 	
 	return;  
    this.FORM_TRIGGER_FAILURE = false;	
 await   this.WHEN_VALIDATE_ITEM_ALARM_TYPE(value); if ( this.FORM_TRIGGER_FAILURE) return; 
 this.formValidationChangedOutput.emit(this.form.valid); 
  
 } 
 async onChange_ROW_ORDER(event:any) { 
 var value = event.target.value; 
 if ((value == null) || (value == '')) 	
 	return;  
    this.FORM_TRIGGER_FAILURE = false;	
 await   this.WHEN_VALIDATE_ITEM_ROW_ORDER(value); if ( this.FORM_TRIGGER_FAILURE) return; 
 this.formValidationChangedOutput.emit(this.form.valid); 
  
 } 
 async onChange_ROW_TYPE(event:any) { 
 var value = event.target.value; 
 if ((value == null) || (value == '')) 	
 	return;  
    this.FORM_TRIGGER_FAILURE = false;	
 await   this.WHEN_VALIDATE_ITEM_ROW_TYPE(value); if ( this.FORM_TRIGGER_FAILURE) return; 
 this.formValidationChangedOutput.emit(this.form.valid); 
  
 } 
 async onChange_SHOW_COLUMN_BUTTON_PANEL(event:any) { 
 var value = event.target.value; 
 if ((value == null) || (value == '')) 	
 	return;  
    this.FORM_TRIGGER_FAILURE = false;	
 await   this.WHEN_VALIDATE_ITEM_SHOW_COLUMN_BUTTON_PANEL(value); if ( this.FORM_TRIGGER_FAILURE) return; 
 this.formValidationChangedOutput.emit(this.form.valid); 
  
 } 
 async onValueChange_IMAGE_ICON(value) { 
  this.FORM_TRIGGER_FAILURE = false;	
 await this.WHEN_VALIDATE_ITEM_IMAGE_ICON(value); if ( this.FORM_TRIGGER_FAILURE) return; 
 this.formValidationChangedOutput.emit(this.form.valid); 
  
  } 
 async onChange_HEADING_TEXT(event:any) { 
 var value = event.target.value; 
 if ((value == null) || (value == '')) 	
 	return;  
    this.FORM_TRIGGER_FAILURE = false;	
 await   this.WHEN_VALIDATE_ITEM_HEADING_TEXT(value); if ( this.FORM_TRIGGER_FAILURE) return; 
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
 async onChange_ALIGN(event:any) { 
 var value = event.target.value; 
 if ((value == null) || (value == '')) 	
 	return;  
    this.FORM_TRIGGER_FAILURE = false;	
 await   this.WHEN_VALIDATE_ITEM_ALIGN(value); if ( this.FORM_TRIGGER_FAILURE) return; 
 this.formValidationChangedOutput.emit(this.form.valid); 
  
 } 
 async onChange_FORMAT(event:any) { 
 var value = event.target.value; 
 if ((value == null) || (value == '')) 	
 	return;  
    this.FORM_TRIGGER_FAILURE = false;	
 await   this.WHEN_VALIDATE_ITEM_FORMAT(value); if ( this.FORM_TRIGGER_FAILURE) return; 
 this.formValidationChangedOutput.emit(this.form.valid); 
  
 } 
 async onChange_SAMPLE(event:any) { 
 var value = event.target.value; 
 if ((value == null) || (value == '')) 	
 	return;  
    this.FORM_TRIGGER_FAILURE = false;	
 await   this.WHEN_VALIDATE_ITEM_SAMPLE(value); if ( this.FORM_TRIGGER_FAILURE) return; 
 this.formValidationChangedOutput.emit(this.form.valid); 
  
 } 
 async onChange_TOOLTIP(event:any) { 
 var value = event.target.value; 
 if ((value == null) || (value == '')) 	
 	return;  
    this.FORM_TRIGGER_FAILURE = false;	
 await   this.WHEN_VALIDATE_ITEM_TOOLTIP(value); if ( this.FORM_TRIGGER_FAILURE) return; 
 this.formValidationChangedOutput.emit(this.form.valid); 
  
 } 
 async onChange_SHOW_COLUMN_FIELD(event:any) { 
 var value = event.target.value; 
 if ((value == null) || (value == '')) 	
 	return;  
    this.FORM_TRIGGER_FAILURE = false;	
 await   this.WHEN_VALIDATE_ITEM_SHOW_COLUMN_FIELD(value); if ( this.FORM_TRIGGER_FAILURE) return; 
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
public svg_arr = ["IMAGE_ICON"];
public svg_data = [];




public update_svgicons(formGroup){
  this.showIcon = false;
    for (let i = 0; i < this.svg_arr.length; i++) {
      if (typeof this.form['kendoui_content'] == "undefined")
        this.starServices.convertSvgToKendoSVGIcon (this, formGroup[this.svg_arr[i]], formGroup.svg_name,this.svg_arr[i])
      else
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


