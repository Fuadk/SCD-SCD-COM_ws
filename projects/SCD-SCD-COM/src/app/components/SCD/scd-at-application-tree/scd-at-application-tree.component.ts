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
import { scdappTreeScdAtApplicationTree , componentConfigDef} from '@modeldir/model';


 const createFormGroup = (dataItem:any) => new FormGroup({
'APP_TREE_ID' : new FormControl(dataItem.APP_TREE_ID  , ) ,
'MENU_ID' : new FormControl(dataItem.MENU_ID  , ) ,
'MENU_TYPE' : new FormControl(dataItem.MENU_TYPE  , ) ,
'MENU' : new FormControl(dataItem.MENU  , ) ,
'ITEM' : new FormControl(dataItem.ITEM  , ) ,
'LINE_NO' : new FormControl(dataItem.LINE_NO  , ) ,
'ID' : new FormControl(dataItem.ID  , ) ,
'ICON' : new FormControl(dataItem.ICON  , ) 
});

declare function getParamConfig():any;

@Component({
  selector: 'app-scd-at-application-tree',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './scd-at-application-tree.component.html',
  styleUrls: ['./scd-at-application-tree.component.scss'],
  standalone: false
})


export class ScdAppTreeScdAtApplicationTreeTreeComponent {
  public title =  this.starServices.getNLS([],"SCD_AT_APPLICATION_TREE.scdappTreeScdAtApplicationTree.component_title","Application Tree");
  public compTitleMsg =  "SCD_AT_APPLICATION_TREE.scdappTreeScdAtApplicationTree";
  public routineName = "ScdAppTreeScdAtApplicationTreeTree";
  private insertCMD = "INSERT_SCD_APP_TREE";
  private updateCMD = "UPDATE_SCD_APP_TREE";
  private deleteCMD =   "DELETE_SCD_APP_TREE";
  private getCMD = "GET_SCD_APP_TREE_QUERY";

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
  public  isAPP_TREE_IDEnable : boolean = true;

  public FORM_TRIGGER_FAILURE:any;
  public NOTFOUND:any;
  public disableEmitSave = false;
  public disableEmitReadCompleted = false;
  public children = ["any"];

  public action = "";
  private Body:any =[];
  public isNew!: boolean;
  public primarKeyReadOnlyArr = {isAPP_TREE_IDreadOnly : false};  
  public paramConfig;
  private masterKeyArr = [];
  private masterKeyNameArr = [];
  public  masterKey="";
  public masterKeyName ="APP_TREE_ID";
  public WhereClause = "";
  public OrderByClause = "";
  
  public formattedWhere:any = null;  
  public  submitted =  false;
  public masterParams:any;
  public alignment: TabAlignment = 'start';
  public isPhonePortrait = false;
  public compSelector = 'app-scd-at-application-tree';
  public PK_AUTO = 'APP_TREE_ID';
  public customerFacing = false;
  public FormStepsArr = [] ;
public labelAPP_TREE_IDTop=false;
public labelAPP_TREE_IDVisible=true;
public labelMENU_IDTop=false;
public labelMENU_IDVisible=true;
public labelMENU_TYPETop=false;
public labelMENU_TYPEVisible=true;
public labelMENUTop=false;
public labelMENUVisible=true;
public labelITEMTop=false;
public labelITEMVisible=true;
public labelLINE_NOTop=false;
public labelLINE_NOVisible=true;
public labelIDTop=false;
public labelIDVisible=true;
public labelICONTop=false;
public labelICONVisible=true;

public visibleAPP_TREE_ID = false;
public visibleMENU_ID = true;
public visibleMENU_TYPE = true;
public visibleMENU = true;
public visibleITEM = true;
public visibleLINE_NO = true;
public visibleID = true;
public visibleICON = true;

public disableAPP_TREE_ID = false;
public disableMENU_ID = false;
public disableMENU_TYPE = false;
public disableMENU = false;
public disableITEM = false;
public disableLINE_NO = false;
public disableID = false;
public disableICON = false;


  
  //@Input()  
  public showToolBar = false;
  @Output() readCompletedOutput: EventEmitter<any> = new EventEmitter();
  @Output() clearCompletedOutput: EventEmitter<any> = new EventEmitter();
  @Output() saveCompletedOutput: EventEmitter<any> = new EventEmitter();
  @Output() formValidationChangedOutput: EventEmitter<boolean> = new EventEmitter();

   constructor(public router: Router,public intl: IntlService, public responsive: BreakpointObserver, private starNotify: StarNotifyService,   public starServices: starServices) {
      this.router = router;
      this.componentConfig = new componentConfigDef(); 
      this.paramConfig = getParamConfig();
      this.userLang =  this.paramConfig.userLang.toUpperCase() ;
      this.componentConfig.queryable  = false;
      this.componentConfig.navigable = false;
      this.componentConfig.insertable = false;
      this.componentConfig.removeable = false;
      this.componentConfig.updateable = false;       
      this.componentConfig.showToolBar = false;
    //  this.componentConfig.enabled = false;

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

  private formInitialValues:any =   new scdappTreeScdAtApplicationTree();   
    @Input() public set detail_Input(form: any) {
       if (typeof form != "undefined"){
        this.isSearch = true;
        this.executeQuery(form);
        this.isChild = true;
      }
      /*
    if (this.paramConfig.DEBUG_FLAG) console.log('detail_Input ScdAppTreeScdAtApplicationTreeTree form.APP_TREE_ID :' + form.APP_TREE_ID);
    if ( (form.APP_TREE_ID != "") &&   (typeof form.APP_TREE_ID != "undefined"))
    {
      this.masterKey = form.APP_TREE_ID;
      
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
    if ( (typeof form != "undefined") &&   (typeof form.APP_TREE_ID != "undefined") &&   (form.APP_TREE_ID != ""))
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

      this.mapSampleData();

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
      this.Comp_Config.masterKeyArr =  [NewVal['APP_TREE_ID']];
      this.Comp_Config.masterKeyNameArr =  ["APP_TREE_ID"];
         
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
this.lookupArrDef =[];
 if (this.lookupArrDef.length > 0)
   this.starServices.fetchLookups(this, this.lookupArrDef);
}


onChanges(): void {
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
      if (this.paramConfig.DEBUG_FLAG) console.log("ScdAppTreeScdAtApplicationTreeTree ComponentConfig:", {...ComponentConfig});

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
    	// if (!this.isChild){
	// 	this.executeQuery(this.form.value);
	// }

    
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
 async ON_EVENT(type: string, event: any) {
    
  }

 ICON_CLASS(formGroup):any {
   
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



async WHEN_VALIDATE_ITEM_APP_TREE_ID(value) {

 this.FORM_TRIGGER_FAILURE = false ; 
 if (typeof this.form.controls['APP_TREE_ID'] != "undefined" ) 
      this.form.controls['APP_TREE_ID'].setErrors({invalid: true}); 
 // Code goes here 
 

 if ( this.FORM_TRIGGER_FAILURE == true) 
 return; 
 
 if (typeof this.form.controls['APP_TREE_ID'] != "undefined" ) 
     this.form.get('APP_TREE_ID').updateValueAndValidity();
 this.form.updateValueAndValidity(); 
 }

 async ON_CLICK_APP_TREE_ID(event){

}

async WHEN_VALIDATE_ITEM_MENU_ID(value) {

 this.FORM_TRIGGER_FAILURE = false ; 
 if (typeof this.form.controls['MENU_ID'] != "undefined" ) 
      this.form.controls['MENU_ID'].setErrors({invalid: true}); 
 // Code goes here 
 

 if ( this.FORM_TRIGGER_FAILURE == true) 
 return; 
 
 if (typeof this.form.controls['MENU_ID'] != "undefined" ) 
     this.form.get('MENU_ID').updateValueAndValidity();
 this.form.updateValueAndValidity(); 
 }

 async ON_CLICK_MENU_ID(event){

}

async WHEN_VALIDATE_ITEM_MENU_TYPE(value) {

 this.FORM_TRIGGER_FAILURE = false ; 
 if (typeof this.form.controls['MENU_TYPE'] != "undefined" ) 
      this.form.controls['MENU_TYPE'].setErrors({invalid: true}); 
 // Code goes here 
 

 if ( this.FORM_TRIGGER_FAILURE == true) 
 return; 
 
 if (typeof this.form.controls['MENU_TYPE'] != "undefined" ) 
     this.form.get('MENU_TYPE').updateValueAndValidity();
 this.form.updateValueAndValidity(); 
 }

 async ON_CLICK_MENU_TYPE(event){

}

async WHEN_VALIDATE_ITEM_MENU(value) {

 this.FORM_TRIGGER_FAILURE = false ; 
 if (typeof this.form.controls['MENU'] != "undefined" ) 
      this.form.controls['MENU'].setErrors({invalid: true}); 
 // Code goes here 
 

 if ( this.FORM_TRIGGER_FAILURE == true) 
 return; 
 
 if (typeof this.form.controls['MENU'] != "undefined" ) 
     this.form.get('MENU').updateValueAndValidity();
 this.form.updateValueAndValidity(); 
 }

 async ON_CLICK_MENU(event){

}

async WHEN_VALIDATE_ITEM_ITEM(value) {

 this.FORM_TRIGGER_FAILURE = false ; 
 if (typeof this.form.controls['ITEM'] != "undefined" ) 
      this.form.controls['ITEM'].setErrors({invalid: true}); 
 // Code goes here 
 

 if ( this.FORM_TRIGGER_FAILURE == true) 
 return; 
 
 if (typeof this.form.controls['ITEM'] != "undefined" ) 
     this.form.get('ITEM').updateValueAndValidity();
 this.form.updateValueAndValidity(); 
 }

 async ON_CLICK_ITEM(event){

}

async WHEN_VALIDATE_ITEM_LINE_NO(value) {

 this.FORM_TRIGGER_FAILURE = false ; 
 if (typeof this.form.controls['LINE_NO'] != "undefined" ) 
      this.form.controls['LINE_NO'].setErrors({invalid: true}); 
 // Code goes here 
 

 if ( this.FORM_TRIGGER_FAILURE == true) 
 return; 
 
 if (typeof this.form.controls['LINE_NO'] != "undefined" ) 
     this.form.get('LINE_NO').updateValueAndValidity();
 this.form.updateValueAndValidity(); 
 }

 async ON_CLICK_LINE_NO(event){

}

async WHEN_VALIDATE_ITEM_ID(value) {

 this.FORM_TRIGGER_FAILURE = false ; 
 if (typeof this.form.controls['ID'] != "undefined" ) 
      this.form.controls['ID'].setErrors({invalid: true}); 
 // Code goes here 
 

 if ( this.FORM_TRIGGER_FAILURE == true) 
 return; 
 
 if (typeof this.form.controls['ID'] != "undefined" ) 
     this.form.get('ID').updateValueAndValidity();
 this.form.updateValueAndValidity(); 
 }

 async ON_CLICK_ID(event){

}

async WHEN_VALIDATE_ITEM_ICON(value) {

 this.FORM_TRIGGER_FAILURE = false ; 
 if (typeof this.form.controls['ICON'] != "undefined" ) 
      this.form.controls['ICON'].setErrors({invalid: true}); 
 // Code goes here 
 

 if ( this.FORM_TRIGGER_FAILURE == true) 
 return; 
 
 if (typeof this.form.controls['ICON'] != "undefined" ) 
     this.form.get('ICON').updateValueAndValidity();
 this.form.updateValueAndValidity(); 
 }

 async ON_CLICK_ICON(event){

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
public multiselect_arr = [];
public AttDwnUrl = "";
public uploadimage = false;

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

//TREE
//diagram

public mapperFromOrg = {
    "Id": "Id",
    "Meuu": "Meuu",
    "Item": "Item",
  };
public mapperFrom = {"Menu":"MENU","Item":"ITEM","Id":"MENU_ID"};

public performMapperFrom(In) {
    let mapppedData =[];
  
    
    for (let i = 0; i < In.length; i++) {
      let OutRec: any = {};
      let rec = {};
      rec = In[i];
      OutRec.dataItem = rec;
      
      let Keys = Object.keys(this.mapperFrom);
      for (let j = 0; j < Keys.length; j++) {
        let field = Keys[j];
        OutRec[field] = rec[this.mapperFrom[field]];
        //delete OutRec[this.mapperFrom[field]];
        if (this.paramConfig.DEBUG_FLAG) console.log("field found:", field, rec, this.mapperFrom[field], rec[this.mapperFrom[field]], OutRec)

      }
      mapppedData.push(OutRec);
    }
    if (this.paramConfig.DEBUG_FLAG) console.log("mapppedData:", mapppedData);
    return mapppedData;
}
public mapSampleData() {
    let mapppedData = this.performMapperFrom(this.executeQueryresult.data);
    if (this.paramConfig.DEBUG_FLAG) console.log("mapppedData:1:", mapppedData)
    //this.treeData = this.restructureMenuData(mapppedData);
   //if (this.paramConfig.DEBUG_FLAG) console.log("this.treeData:", this.treeData);
    

   

    // Generate the JSON
const result = this.buildHierarchy(mapppedData);
this.treeData=result;



}

// Build the hierarchy

// Simulating your database results
public dbRows = [
    { Menu: "Main", Item: "item1" },
    { Menu: "Main", Item: "item2" },
    { Menu: "Main", Item: "item3" },
    { Menu: "item1", Item: "item11" },
    { Menu: "item1", Item: "item12" }
];
public buildHierarchy(rows) {
    const childrenMap = {};
    const itemMap = {};
    const rootNodes = [];
    
    rows.forEach(row => {
        const itemName = row.Item;
        const menuName = row.Menu;
        
        // Store ALL fields from the row
        if (!itemMap[itemName]) {
            itemMap[itemName] = { ...row };
        } else {
            itemMap[itemName] = { ...itemMap[itemName], ...row };
        }
        
        // Build children map with all fields
        if (!childrenMap[menuName]) {
            childrenMap[menuName] = [];
        }
        
        childrenMap[menuName].push({
            ...row,
            name: itemName
        });
    });
    
    // Determine root nodes
    // If "Main" exists, use it as root
    if (childrenMap["Main"]) {
        rootNodes.push("Main");
    } else {
        // Find nodes that are not children of any other node
        const allItems = new Set(Object.keys(itemMap));
        const childItems = new Set();
        
        Object.keys(childrenMap).forEach(menu => {
            childrenMap[menu].forEach(child => {
                if (child.name) {
                    childItems.add(child.name);
                }
            });
        });
        
        allItems.forEach(item => {
            if (!childItems.has(item)) {
                rootNodes.push(item);
            }
        });
        
        // If still no root nodes, use all items
        if (rootNodes.length === 0) {
            allItems.forEach(item => {
                rootNodes.push(item);
            });
        }
    }
    
    function buildNode(itemName, childData = null) {
        let nodeData = childData ? { ...childData } : { ...itemMap[itemName] };
        
        nodeData.text = nodeData.Item || nodeData.text || itemName;
        delete nodeData.name;
        
        if (childrenMap[itemName] && childrenMap[itemName].length > 0) {
            nodeData.items = childrenMap[itemName].map(child => 
                buildNode(child.name, child)
            );
        }
        
        return nodeData;
    }
    
    let finalResult = [];
    
    for (let i = 0; i < rootNodes.length; i++) {
        const rootItem = rootNodes[i];
        let nodeData;
        
        if (rootItem === "Main" && childrenMap["Main"]) {
            // Process Main menu items
            const topLevelItems = childrenMap["Main"] || [];
            for (let j = 0; j < topLevelItems.length; j++) {
                const item = topLevelItems[j];
                const builtNode = buildNode(item.name, item);
                finalResult.push(builtNode);
            }
        } else {
            // Process regular root nodes
            const originalRow = rows.find(row => row.Item === rootItem);
            nodeData = buildNode(rootItem, originalRow || null);
            finalResult.push(nodeData);
        }
    }
    
    return finalResult;
}

public onItemSelectItem (event){
  console.log("event:",event)
}
public treeData: any = [];

  public selectedKeys: any[] = []; 
  
  
    
public expandedKeys: any[] = [];

public handleSelection(event: any): void {
    // 1. Get the raw selected data item object
    const selectedItem = event.dataItem; 
    console.log("selectedItem:", selectedItem)
    // 2. Flatten your original hierarchical treeData array
    const flatArray = this.flattenTree(this.treeData);

    // 3. Find the single numeric index in that flat array
    const singleIndexNumber = flatArray.findIndex(item => item.Id === selectedItem.Id);

    console.log('Single Index Number:', singleIndexNumber);
}

// Helper method to flatten hierarchical data into a single array
private flattenTree(nodes: any[]): any[] {
    let result: any[] = [];
    nodes.forEach(node => {
        result.push(node);
        if (node.items && node.items.length > 0) {
            result = result.concat(this.flattenTree(node.items));
        }
    });
    return result;
}



async  handleSelection_old({ index }: any) {
    let dataItem = this.treeData[index].dataItem;
    console.log("index:", index , dataItem)
    await this.ON_CLICK(dataItem);
    this.readCompletedOutput.emit(dataItem);
    
  }

}


