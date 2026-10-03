import { Component, Input, Output, EventEmitter, HostListener } from '@angular/core';
import { FormGroup, FormControl, Validators ,FormBuilder} from '@angular/forms';
import { starServices } from 'starlib';
import { StarNotifyService } from '../../../services/starnotification.service';

import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';

import { Subscription } from 'rxjs';
import { IntlService } from "@progress/kendo-angular-intl";
import {  ViewEncapsulation } from "@angular/core";
import { Router } from '@angular/router';
import { scdalarmDisplayFiltersScdAdfsAlarmDisplayFilters , componentConfigDef} from '@modeldir/model';


 const createFormGroup = (dataItem:any) => new FormGroup({
'FILTER_ID' : new FormControl(dataItem.FILTER_ID  , ) ,
'FILTER_NAME' : new FormControl(dataItem.FILTER_NAME  , ) ,
'WHERE_CLAUSE' : new FormControl(dataItem.WHERE_CLAUSE  , ) ,
'SHAPE_ID' : new FormControl(dataItem.SHAPE_ID  ,   Validators.required ) 
});

declare function getParamConfig():any;
@Component({
  selector: 'app-scd-adfs-alarm-display-filters',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './scd-adfs-alarm-display-filters.component.html',
  styleUrls: ['./scd-adfs-alarm-display-filters.component.scss'],
  standalone: false
})


export class ScdAlarmDisplayFiltersScdAdfsAlarmDisplayFiltersListComponent {
  public title =  this.starServices.getNLS([],"SCD_ADFS_ALARM_DISPLAY_FILTERS.scdalarmDisplayFiltersScdAdfsAlarmDisplayFilters.component_title","Alarm Display Filters");
  public compTitleMsg =  "SCD_ADFS_ALARM_DISPLAY_FILTERS.scdalarmDisplayFiltersScdAdfsAlarmDisplayFilters";
  public routineName = "ScdAlarmDisplayFiltersScdAdfsAlarmDisplayFiltersList";
  private insertCMD = "INSERT_SCD_ALARM_DISPLAY_FILTERS";
  private updateCMD = "UPDATE_SCD_ALARM_DISPLAY_FILTERS";
  private deleteCMD =   "DELETE_SCD_ALARM_DISPLAY_FILTERS";
  private getCMD = "GET_SCD_ALARM_DISPLAY_FILTERS_QUERY";

  public value: Date = new Date(2019, 5, 1, 22);
  public format: string = 'MM/dd/yyyy HH:mm';
  public active = false;

  public  form!: FormGroup; 
  public  form2!: FormGroup; 
  public PDFfileName = this.title + ".PDF";
  public componentConfig: componentConfigDef;
  public componentConfig_output: componentConfigDef;
  public editableMode = false;
  private CurrentRec = 0;
  public  executeQueryresult:any=[];
  public cardsArr:any =[];
  public isSearch!: boolean;
  public isChild: boolean = false;
  public isMaster: boolean = false;
  public  isSHAPE_IDEnable : boolean = true;

  public FORM_TRIGGER_FAILURE:any;
  public NOTFOUND:any;
  public disableEmitSave = false;
  public disableEmitReadCompleted = false;
  public children = ["any"];

  public action = "";
  private Body:any =[];
  public isNew!: boolean;
  public primarKeyReadOnlyArr = {isFILTER_IDreadOnly : false};  
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
  public isPhonePortrait = false;
  public compSelector = 'app-scd-adfs-alarm-display-filters';
  public PK_AUTO = 'FILTER_ID';
  public showFilterWindow = false;
  public showEditWindow = false;
  public  queryable2 = true;
  public navigable2 = false;
  public updateable2 = false;
  public insertable2 = false;
  public removeable2 = false;
  public customerFacing = false;
public labelFILTER_IDTop=true;
public labelFILTER_IDVisible=true;
public labelFILTER_NAMETop=true;
public labelFILTER_NAMEVisible=true;
public labelWHERE_CLAUSETop=true;
public labelWHERE_CLAUSEVisible=true;
public labelSHAPE_IDTop=true;
public labelSHAPE_IDVisible=true;

public visibleFILTER_ID = true;
public visibleFILTER_NAME = true;
public visibleWHERE_CLAUSE = true;
public visibleSHAPE_ID = false;

  
  //@Input()  
  public showToolBar = true;
  @Output() readCompletedOutput: EventEmitter<any> = new EventEmitter();
  @Output() clearCompletedOutput: EventEmitter<any> = new EventEmitter();
  @Output() saveCompletedOutput: EventEmitter<any> = new EventEmitter();

   constructor(public router: Router,public intl: IntlService, public responsive: BreakpointObserver, private starNotify: StarNotifyService,   public starServices: starServices) {
      this.router = router;
      this.componentConfig = new componentConfigDef(); 
      this.paramConfig = getParamConfig();
      this.userLang =  this.paramConfig.userLang.toUpperCase() ;
      this.componentConfig.queryable  = true;
      this.componentConfig.navigable = false;
      this.componentConfig.insertable = false;
      this.componentConfig.removeable = false;
      this.componentConfig.updateable = false;       
      this.componentConfig.showToolBar = true;
      this.componentConfig.enabled = true;

  }
  private componentConfigChangeEvent!: Subscription;
  public ngAfterViewInit() {
    this.starServices.setRTL();
  }
  public Comp_Config!: componentConfigDef;
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
this.form2 = createFormGroup(
        this.formInitialValues
    );     
    //this.executeQuery (this.form);
    
    //let Choice_cd = this.starlib1.get_application_property(this, 'Current_Form');
    //let P_Form_Ver = '1.0';
    // await this.starlib1.invoke_form(this.routineName);
    // await this.starlib1.global_program(Choice_cd, P_Form_Ver);

    

    this.onChanges();
    this.setlookupArrDef();
    this.form2.reset(this.formInitialValues);
    //this.onNew(this.form2);

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
    this.WHEN_NEW_FORM_INSTANCE();

  }
  
  public ngOnDestroy(): void {
    // Unsubscribe the event once not needed.
    if (typeof this.componentConfigChangeEvent !== "undefined") this.componentConfigChangeEvent.unsubscribe();
 }

  callStarNotify(componentConfig:any) {
    componentConfig.eventFrom = this.compSelector;
    this.starNotify.sendEvent<componentConfigDef>('componentConfigDef', componentConfig);
  }

  private formInitialValues:any =   new scdalarmDisplayFiltersScdAdfsAlarmDisplayFilters();   
    @Input() public set detail_Input(form: any) {
      if (typeof form != "undefined"){
        this.isSearch = true;
        this.executeQuery(form);
        this.isChild = true;
      }
    /*
    if (this.paramConfig.DEBUG_FLAG) console.log('detail_Input ScdAlarmDisplayFiltersScdAdfsAlarmDisplayFiltersList form.SHAPE_ID :' + form.SHAPE_ID);
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

   async callBackFunction(data:any) {
    if (this.paramConfig.DEBUG_FLAG) console.log("inside callBackFunction:data:", data);
    if (typeof this.executeQueryresult.data !== "undefined") {
      this.cardsArr = this.executeQueryresult;
      this.myFiles = [[]];
      this.filesDeleted = [[]];
      this.img_gallery = [[]];
      await this.POST_QUERY(data);
    if (this.att_arr.length != 0 || this.img_arr.length != 0){
      for (let i=0;i < this.executeQueryresult.data.length;i++){
        this.starServices.callGetSaveAttachemts("fetch", this.executeQueryresult.data[i],this);
        await this.starServices.sleep(100);
      }
    
      //await this.starServices.att_img_populateArrs(data,this);
      for (let i=0;i < this.executeQueryresult.data.length;i++){
        await this.starServices.att_img_populateArrsList(this.executeQueryresult.data[i],this);
        //await this.starServices.sleep(200);
      }
    }

      //this.form.markAsPristine();
      //this.form.markAsUntouched();
      //this.commonCallStarNotify(data);

      
    }
  }
   public commonCallStarNotify(data:any){
    let componentConfig = new componentConfigDef();
      let masterParams = {
        data: data
      }

      let masterKeyArr = [data['SHAPE_ID']];
      let masterKeyNameArr = ['SHAPE_ID'];
      //for (let i = 0; i < masterKeyNameArr.length; i++) {
      //  componentConfig.masterKeyNameArr[i] = masterKeyArr[i];
      //}
      componentConfig.masterKeyArr = masterKeyArr;
      componentConfig.masterKeyNameArr = masterKeyNameArr;
      componentConfig.masterReadCompleted = true;
      componentConfig.eventTo = this.children;
      componentConfig.masterParams = masterParams;
      //this.callStarNotify(componentConfig);
   }

    async executeQuery( form: any ) {
      if (typeof form == "undefined")
        return;
     await this.PRE_QUERY(form);
     if (this.FORM_TRIGGER_FAILURE == true)
         return;
    if ( (this.WhereClause != "") && (this.isSearch != true) )
    {
      this.formattedWhere = this.WhereClause ;
      this.isSearch = true;
    }
    let formGroup = createFormGroup(this.formInitialValues);
    let newForm = {...form}
    this.starServices.removeNonValidColumns(newForm,formGroup.value);
    this.starServices.executeQuery_form(newForm, this); // Fuad: this should be form, and not this.form.getRawValue()
    this.showFilterWindow = false;
  }

  private addToBody(NewVal:any){
    this.Body.push(NewVal);
  }

  public onCancel(e:any): void {
    this.starServices.onCancel_form ( e , this);
  }
   async fetchLookupsCallBack() {

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
  async cellClickHandler(rowIndex, dataitem) {
    console.log("cellClickHandler:rowIndex,dataitem:", rowIndex, dataitem)
    await this.ON_CLICK(dataitem);
    this.readCompletedOutput.emit(dataitem);

    let componentConfig = new componentConfigDef();
    let masterParams = {
      data: dataitem
    }

      let masterKeyArr = [dataitem['SHAPE_ID']];
      let masterKeyNameArr = ['SHAPE_ID'];
      //for (let i = 0; i < masterKeyNameArr.length; i++) {
      //  componentConfig.[masterKeyNameArr[i]] = masterKeyArr[i];
      //}
      componentConfig.masterKeyArr = masterKeyArr;
      componentConfig.masterKeyNameArr = masterKeyNameArr;
      componentConfig.masterReadCompleted = true;
      componentConfig.eventTo = this.children;
      componentConfig.masterParams = masterParams;
      //this.callStarNotify(componentConfig);
}


  async  enterQuery (form : any){
    
    this.starServices.enterQuery_form ( form, this);

    await this.KEY_ENTQRY();
  }

    async callBackPost_Insert(NewVal:any) {
      if (this.paramConfig.DEBUG_FLAG) console.log("callBackPost_Insert:",  " NewVal:", NewVal)
      this.commonCallStarNotify(NewVal);
      if (this.FORM_TRIGGER_FAILURE) 
      {
         this.starServices.endTrans(this, false);
         return;
      }
      this.Comp_Config = new componentConfigDef();
      this.Comp_Config.masterSaved = NewVal;
      this.Comp_Config.masterKeyArr =  [NewVal['FILTER_ID']];
      this.Comp_Config.masterKeyNameArr =  ["FILTER_ID"];
       await this.POST_INSERT(NewVal);
      if (this.FORM_TRIGGER_FAILURE) 
      {
         this.starServices.endTrans(this, false);
         return;
      }

      if (this.paramConfig.DEBUG_FLAG) console.log("testing  post POST_INSERT : ", this.FORM_TRIGGER_FAILURE)
      if (!this.FORM_TRIGGER_FAILURE) {
         this.saveCompletedOutput.emit(this.form.getRawValue());
      }
      this.showFilterWindow = false;
   }
   async callBackPost_Update( NewVal:any) {
      if (this.paramConfig.DEBUG_FLAG) console.log("callBackPost_Update:",  " NewVal:", NewVal);
      this.commonCallStarNotify(NewVal);
      await this.POST_UPDATE(NewVal);
      this.showFilterWindow = false;
   }

   async callBackPost_Remove( NewVal:any) {
      if (this.paramConfig.DEBUG_FLAG) console.log("callBackPost_Remove:",  " NewVal:", NewVal);
      this.commonCallStarNotify("");
      await this.POST_DELETE(NewVal);
      this.showFilterWindow = false;
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
      if (this.form.valid == false){
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
         let form1 = this.starServices.stringifyMultiSelectFields(this,form);
         this.starServices.saveChanges_form(form1, this);
         this.executeQuery(this.form.getRawValue());
         
      }

   }


  public goRecord ( target:any): void{
    this.starServices.goRecord ( target, this);
  }

public userLang = "EN" ; 
public lookupArrDef:any =[];
public setlookupArrDef(){
this.lookupArrDef =[	{"statment":"SELECT SHAPE_ID CODE, NAME CODETEXT_LANG  FROM  SCD_SHAPE  order by CODETEXT_LANG",
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
}


public printScreen(){
  window.print();
}
  public handleComponentConfig(ComponentConfig:any) {
    if (typeof ComponentConfig !== "undefined") {
      if (this.paramConfig.DEBUG_FLAG) console.log("ScdAlarmDisplayFiltersScdAdfsAlarmDisplayFiltersList ComponentConfig:", ComponentConfig);

      this.componentConfig = this.starServices.setComponentConfig(ComponentConfig, this.componentConfig);
      this.WHEN_NOTIFY(ComponentConfig);
      if (ComponentConfig.isMaster == true)
        this.isMaster = true;

      
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
        this.executeQuery(formGroup)

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




async WHEN_VALIDATE_ITEM_FILTER_ID(value) {

 this.FORM_TRIGGER_FAILURE = false ; 
 if (typeof this.form.controls['FILTER_ID'] != "undefined" ) 
      this.form.controls['FILTER_ID'].setErrors({invalid: true}); 
 // Code goes here 
 

 if ( this.FORM_TRIGGER_FAILURE == true) 
 return; 
 
 if (typeof this.form.controls['FILTER_ID'] != "undefined" ) 
     this.form.get('FILTER_ID').updateValueAndValidity();
 this.form.updateValueAndValidity(); 
 }

 async ON_CLICK_FILTER_ID(event){

}

async WHEN_VALIDATE_ITEM_FILTER_NAME(value) {

 this.FORM_TRIGGER_FAILURE = false ; 
 if (typeof this.form.controls['FILTER_NAME'] != "undefined" ) 
      this.form.controls['FILTER_NAME'].setErrors({invalid: true}); 
 // Code goes here 
 

 if ( this.FORM_TRIGGER_FAILURE == true) 
 return; 
 
 if (typeof this.form.controls['FILTER_NAME'] != "undefined" ) 
     this.form.get('FILTER_NAME').updateValueAndValidity();
 this.form.updateValueAndValidity(); 
 }

 async ON_CLICK_FILTER_NAME(event){

}

async WHEN_VALIDATE_ITEM_WHERE_CLAUSE(value) {

 this.FORM_TRIGGER_FAILURE = false ; 
 if (typeof this.form.controls['WHERE_CLAUSE'] != "undefined" ) 
      this.form.controls['WHERE_CLAUSE'].setErrors({invalid: true}); 
 // Code goes here 
 

 if ( this.FORM_TRIGGER_FAILURE == true) 
 return; 
 
 if (typeof this.form.controls['WHERE_CLAUSE'] != "undefined" ) 
     this.form.get('WHERE_CLAUSE').updateValueAndValidity();
 this.form.updateValueAndValidity(); 
 }

 async ON_CLICK_WHERE_CLAUSE(event){

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


// For Adding new CODE
  public  grid_som_tabs_codes={};
  public SOM_TABS_CODESConfig!: componentConfigDef;
  public filterCode!: string;
  public showCodeDetails:boolean=false;

// For Attachments and images
public myFiles = [[]];
public filesDeleted = [[]];
public img_gallery = [[]];
public DSP_UPLOADConfig!: componentConfigDef;
public DSP_WEBCAMConfig!: componentConfigDef;
public att_arr = [];
public img_arr = [];
public AttDwnUrl = "";
public uploadimage = false;

 public async att_img_saveFormCompleted(field_id){
  console.log("att_img_saveFormCompleted:",  field_id, this.form.getRawValue()[field_id])
  let routine = "WHEN_VALIDATE_ITEM_" + field_id;
  await   this[routine](this.form.getRawValue()[field_id]);
}
public getAttWrapper(field){
  
  //console.log("getAtt_data: inside getAttWrapper:field:", field)
    //console.log("getAtt_data: inside getAttWrapper:field:", field, "form.get:", 
      //this.form.get(field).value)
      
  //console.log("getAtt_data:this.form:",this.form, this.form.getRawValue()[field]);
  let val = this.form.getRawValue()[field];
  //console.log("getAtt_data: inside getAttWrapper:field:", field, val)
  let retVal = this.starServices.att_img_getAtt(val,this);
  return retVal;
}
public closeFilter()
  {
    this.showFilterWindow = false;
  }
  
  public openFilter()
  {
    this.showFilterWindow = true;
    this.queryable2 = true;
    this.navigable2 = false;
    this.updateable2 = false;
    this.insertable2 = false;
    this.removeable2 = false;
    this.isSearch = true;
    this.isNew = false;
    if (this.paramConfig.DEBUG_FLAG) console.log('enterQuery : this.isSearch:' + this.isSearch);
    this.clearCompletedOutput.emit(this.formInitialValues);
    this.form2.reset();
    this.starServices.setPrimarKeyNameArr(this, false);
    this.starServices.helpMsg =   this.isPhonePortrait ? '' : this.starServices.getNLS([],'HELP_ENTER_QUERY',this.starServices.enterQueryMsg) ;
  }
  public openEdit(index:any)
  {
    this.showFilterWindow = true;
    this.queryable2 = false;
    this.navigable2 = false;
    this.updateable2 = true && this.componentConfig.updateable;
    this.insertable2 = true && this.componentConfig.insertable;
    this.removeable2 = false;
    this.isSearch = false;
    this.isNew = false;
    let formVal = this.executeQueryresult.data[index];
    this.form2.reset(formVal);
  }
  actRemove(index){
    let formVal = this.executeQueryresult.data[index];
    this.form2.reset(formVal);
    this.onRemove( this.form2);
  }
}


