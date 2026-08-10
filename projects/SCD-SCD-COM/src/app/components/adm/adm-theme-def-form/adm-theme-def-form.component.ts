import { Component, Input, Output, EventEmitter, HostListener } from '@angular/core';
import { FormGroup, FormControl, Validators ,FormBuilder} from '@angular/forms';
import { starServices } from 'starlib';
import { StarNotifyService } from '../../../services/starnotification.service';

import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { Starlib1 } from '../../Starlib1';
import { Subscription } from 'rxjs';
import { IntlService } from "@progress/kendo-angular-intl";
import {  ViewEncapsulation } from "@angular/core";
import { themedefMysecondappThemeDefForm , componentConfigDef} from '@modeldir/model';


 const createFormGroup = dataItem => new FormGroup({
'THEME_NAME' : new FormControl(dataItem.THEME_NAME  ,   Validators.required ) ,
'DEFAULT_THEME' : new FormControl(dataItem.DEFAULT_THEME  )

});

declare function getParamConfig():any;
@Component({
  selector: 'app-adm-theme-def-form',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './adm-theme-def-form.component.html',
  styleUrls: ['./adm-theme-def-form.component.scss']
})


export class AdmThemeDefFormFormComponent {
  public title =  this.starServices.getNLS([],"MySecondApp_theme_def_FORM.themedefMysecondappThemeDefForm.component_title","");
  public routineName = "ADMTHEME";
  private insertCMD = "INSERT_THEME_DEF";
  private updateCMD = "UPDATE_THEME_DEF";
  private deleteCMD =   "DELETE_THEME_DEF";
  private getCMD = "GET_THEME_DEF_QUERY";

  public value: Date = new Date(2019, 5, 1, 22);
  public format: string = 'MM/dd/yyyy HH:mm';
  public active = false;

  public  form: FormGroup;
  public PDFfileName = this.title + ".PDF";
  public componentConfig: componentConfigDef;
  public editableMode = false;
  private CurrentRec = 0;
  public  executeQueryresult:any;
  public isSearch: boolean;
  public isChild: boolean = false;
  public isMaster: boolean = false;
  public  isTHEME_NAMEEnable : boolean = true;

  public FORM_TRIGGER_FAILURE;
  public NOTFOUND;
  public disableEmitSave = false;
  public disableEmitReadCompleted = false;
  public children = ["any"];

  public action = "";
  private Body =[];
  private isNew: boolean;
  public primarKeyReadOnlyArr = {isTHEME_NAMEreadOnly : false};
  public paramConfig;
  private masterKeyArr = [];
  private masterKeyNameArr = [];
  public  masterKey="";
  public masterKeyName ="THEME_NAME";
  public WhereClause = "";
  public OrderByClause = "";

  public formattedWhere = null;
  public  submitted =  false;
  public masterParams;
public isPhonePortrait = false;
public compSelector = 'app-adm-theme-def-form';

  //@Input()
  public showToolBar = true;
  @Output() readCompletedOutput: EventEmitter<any> = new EventEmitter();
  @Output() clearCompletedOutput: EventEmitter<any> = new EventEmitter();
  @Output() saveCompletedOutput: EventEmitter<any> = new EventEmitter();

   constructor(public intl: IntlService, public responsive: BreakpointObserver, private starNotify: StarNotifyService, private starlib1: Starlib1,  public starServices: starServices) {
      this.componentConfig = new componentConfigDef();
      this.paramConfig = getParamConfig();
    this.componentConfig.queryable  = true;
    this.componentConfig.navigable = true;
    this.componentConfig.insertable = true;
    this.componentConfig.removeable = true;
    this.componentConfig.updateable = true;
    this.componentConfig.enabled = true;
  }
  private componentConfigChangeEvent: Subscription;
  public ngAfterViewInit() {
    this.starServices.setRTL();
    this.WHEN_NEW_FORM_INSTANCE();
  }
   async ngOnInit() {
        this.responsive
      .observe([Breakpoints.HandsetPortrait])
      .subscribe((state: BreakpointState) => {
        
        this.isPhonePortrait = false;
        if (state.matches) {
           this.isPhonePortrait = true;

          let componentConfig = new componentConfigDef();
          let masterParams = {
            isPhonePortrait: this.isPhonePortrait
          }
          componentConfig.masterParams = masterParams;
          this.children = ["AppComponent"];
          componentConfig.eventTo = this.children;
          this.callStarNotify(componentConfig);
        
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
    this.AttDwnUrl = this.starServices.SERVER_URL + "/api/att?action=download&username=" + this.starServices.sessionParams.USERNAME.toLowerCase() + "&name=";

  }
  
  public ngOnDestroy(): void {
    // Unsubscribe the event once not needed.
    if (typeof this.componentConfigChangeEvent !== "undefined") this.componentConfigChangeEvent.unsubscribe();
 }

  callStarNotify(componentConfig) {
    componentConfig.eventFrom = this.compSelector;
    this.starNotify.sendEvent<componentConfigDef>('componentConfigDef', componentConfig);
  }

  private formInitialValues =   new themedefMysecondappThemeDefForm();
    @Input() public set detail_Input(form: any) {
    console.log('detail_Input ThemeDefMysecondappThemeDefFormForm form.THEME_NAME :' + form.THEME_NAME);
    if ( (form.THEME_NAME != "") &&   (typeof form.THEME_NAME != "undefined"))
    {
      this.masterKey = form.THEME_NAME;
      
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
  @Input() public set executeQueryInput( form: any) {
    if ( (typeof form != "undefined") &&   (typeof form.THEME_NAME != "undefined") &&   (form.THEME_NAME != ""))
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

   async callBackFunction(data) {
    console.log("inside callBackFunction:data:", data);
    this.starServices.callGetSaveAttachemts("fetch", data,this);
    if (typeof data !== "undefined") {
      await this.POST_QUERY(data);
      await this.starServices.att_img_populateArrs(data,this);
      //this.form.markAsPristine();
      //this.form.markAsUntouched();
      //this.commonCallStarNotify(data);

      
    }
  }
   public commonCallStarNotify(data){
    let componentConfig = new componentConfigDef();
      let masterParams = {
        data: data
      }

      let masterKeyArr = [data['THEME_NAME']];
      let masterKeyNameArr = ['THEME_NAME'];
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
    this.starServices.executeQuery_form(form, this); // Fuad: this should be form, and not this.form.value
  }

  private addToBody(NewVal){
    this.Body.push(NewVal);
  }

  public onCancel(e): void {
    this.starServices.onCancel_form ( e , this);
  }
   public fetchLookupsCallBack() {

      console.log("this.lookupArrDef:", this.lookupArrDef)
   }

  public onNew(e): void {
    console.log("this.masterKeyNameArr:", this.masterKeyNameArr, "this.masterKeyNameArr.length",this.masterKeyNameArr.length)
    if (this.masterKeyNameArr.length != 0)
    {
      for (let i = 0; i< this.masterKeyNameArr.length; i++){
        console.log(this.masterKeyNameArr[i] + ":" + this.masterKeyArr[i])
        this.formInitialValues[this.masterKeyNameArr[i]] = this.masterKeyArr[i];
      }
    }
    else
    {
      console.log(this.masterKeyName + this.masterKey)
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



  async onRemove( form) {
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

    async callBackPost_Insert(NewVal) {
      console.log("callBackPost_Insert:",  " NewVal:", NewVal)
      this.commonCallStarNotify(NewVal);
      if (this.FORM_TRIGGER_FAILURE)
      {
         this.starServices.endTrans(this, false);
         return;
      }
       await this.POST_INSERT(NewVal);
      if (this.FORM_TRIGGER_FAILURE)
      {
         this.starServices.endTrans(this, false);
         return;
      }

      console.log("testing  post POST_INSERT : ", this.FORM_TRIGGER_FAILURE)
      if (!this.FORM_TRIGGER_FAILURE) {
         this.saveCompletedOutput.emit(this.form.value);
      }
   }
   async callBackPost_Update( NewVal) {
      console.log("callBackPost_Update:",  " NewVal:", NewVal);
      this.commonCallStarNotify(NewVal);
      await this.POST_UPDATE(NewVal);
   }

   async callBackPost_Remove( NewVal) {
      console.log("callBackPost_Remove:",  " NewVal:", NewVal);
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
         this.starServices.saveChanges_form(form, this);
      }

   }


  public goRecord ( target:any): void{
    this.starServices.goRecord ( target, this);
  }

public userLang = "EN" ;
public lookupArrDef =[];
public setlookupArrDef(){
this.lookupArrDef =[];
this.starServices.fetchLookups(this, this.lookupArrDef);
}

onChanges(): void {
this.form.get('THEME_NAME').valueChanges.subscribe(val => {
});
}


public printScreen(){
  window.print();
}
  public handleComponentConfig(ComponentConfig) {
    if (typeof ComponentConfig !== "undefined") {
      console.log("ThemeDefMysecondappThemeDefFormForm ComponentConfig:", ComponentConfig);

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
        this.executeQuery(this.form)
      }
      if (ComponentConfig.clearComponent == true) {
        this.onCancel(this.form)
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
  
  WHEN_NEW_FORM_INSTANCE(){
    
    
  }
  WHEN_CREATE_RECORD(){
    

  }
   KEY_ENTQRY(){
    

  }
   KEY_DELREC(){
    

  }
   async WHEN_VALIDATE_RECORD(formGroup){
    

  }
  async  PRE_UPDATE(formGroup){
    let Body=[];
   let  newVal = {
      "_QUERY": "UPDATE_THEME_DEF",
      "THEME_NAME": "%",
      "DEFAULT_THEME":0
  };
  Body.push(newVal);

  // Step 5: Execute the SQL to insert the new theme and its details
  let retVal = await this.starServices.execSQLBody(this, Body, "");

  }
  async  POST_UPDATE(formGroup){
    
    
  }
  async KEY_COMMIT(){
   

}
 async ON_CLICK(formGroup){
     //alert ("Form Component Trigger: ON_CLICK")

}
  async  PRE_INSERT(formGroup){
    
    
  }
  async  POST_INSERT(formGroup){
    
   
  }
  async  PRE_QUERY (formGroup){
    
   
  }
  public themeName: string = '';
  public isAdmin: boolean;

  async POST_QUERY(formGroup) {
    const userGroup = this.starServices.sessionParams.USER_INFO.GROUPNAME;
    this.isAdmin = userGroup !== 'SYSADM';
    await this.fetchUserTheme();
  }

  private async fetchUserTheme(): Promise<void> {

    const userThemeQuery = {
      "_QUERY": "GET_ADM_USER_INFORMATION_QUERY",
      "_WHERE": `THEME_NAME <> '' and THEME_NAME is not null and USERNAME = '${this.starServices.USERNAME}'`
    };

    let data = await this.starServices.execSQLBody(this, [userThemeQuery], "");
    if (typeof data != "undefined" && data[0].data.length > 0) {
      this.themeName = data[0].data[0].THEME_NAME;
    } else {
      this.themeName = '';
    }
  }
  
  public async setAsDefaultTheme(): Promise<void> {
    const USERNAME = this.starServices.sessionParams.USER_INFO.USERNAME;
    console.log("setAsDefaultTheme(): USERNAME:", USERNAME);

    // Step 1: Call Exec SQL to get details of the user
    let Body2 = [];
    let newVal2: any = {
      "_QUERY": "GET_ADM_USER_INFORMATION",
      "USERNAME": USERNAME
    };
    Body2.push(newVal2);

    // Step 2: Execute the SQL to retrieve user details
    let data = await this.starServices.execSQLBody(this, Body2, "");
    let user_detail = data[0].data;

    // Extract the current theme name
    let srcTheme = this.form.value.THEME_NAME;
    console.log("setAsDefaultTheme(): Selected Theme:", srcTheme);
    // Step 3: Prepare the update query with the new theme
    newVal2 = {
      "_QUERY": "UPDATE_ADM_USER_INFORMATION",
      "USERNAME": USERNAME,
      "THEME_NAME": srcTheme,
      "FULLNAME": user_detail[0].FULLNAME,
      "SIGN": user_detail[0].SIGN,
      "DIVS": user_detail[0].DIVS,
      "DEPT": user_detail[0].DEPT,
      "PHONE": user_detail[0].PHONE,
      "GROUPNAME": user_detail[0].GROUPNAME,
      "LANGUAGE_NAME": user_detail[0].LANGUAGE_NAME,
      "IP_RESTRICT": user_detail[0].IP_RESTRICT,
      "WEB_ENABLED": user_detail[0].WEB_ENABLED,
      "WEB_BROWSER": user_detail[0].WEB_BROWSER,
      "DEFAULT_PRINTER": user_detail[0].DEFAULT_PRINTER,
      "EXTRA_PERC": user_detail[0].EXTRA_PERC,
      "FIN_ADMIN": user_detail[0].FIN_ADMIN,
      "LOGDATE": user_detail[0].LOGDATE,
      "LOGNAME": user_detail[0].LOGNAME,
      "PASSWORD": user_detail[0].PASSWORD,
      "TEAM": user_detail[0].TEAM,
      "LEADER": user_detail[0].LEADER,
      "MANAGER": user_detail[0].MANAGER,
      "TODAY": user_detail[0].TODAY,
      "TOMORROW": user_detail[0].TOMORROW,
      "NOTES": user_detail[0].NOTES
    };
    Body2.push(newVal2);

    // Step 4: Execute the SQL to update the user information
    let retVal2 = await this.starServices.execSQLBody(this, Body2, "");

    console.log("setAsDefaultTheme(): Theme updated successfully to:", srcTheme);
    await this.fetchUserTheme();
  }

  public async resetToAppTheme(): Promise<void> {
    const USERNAME = this.starServices.sessionParams.USER_INFO.USERNAME;
    console.log("resetToAppTheme(): USERNAME:", USERNAME);

    // Step 1: Call Exec SQL to get details of the user
    let Body2 = [];
    let newVal2: any = {
      "_QUERY": "GET_ADM_USER_INFORMATION",
      "USERNAME": USERNAME
    };
    Body2.push(newVal2);

    // Step 2: Execute the SQL to retrieve user details
    let data = await this.starServices.execSQLBody(this, Body2, "");
    let user_detail = data[0].data;

    // Extract the current theme name
    let currentTheme = user_detail[0].THEME_NAME;
    console.log("resetToAppTheme(): Current Theme in ADM_USER_INFORMATION:", currentTheme);

    // Step 3: Prepare the update query with the default theme
    const defaultTheme = '';
    Body2 = [];
    newVal2 = {
      "_QUERY": "UPDATE_ADM_USER_INFORMATION",
      "USERNAME": USERNAME,
      "THEME_NAME": defaultTheme,
      "FULLNAME": user_detail[0].FULLNAME,
      "SIGN": user_detail[0].SIGN,
      "DIVS": user_detail[0].DIVS,
      "DEPT": user_detail[0].DEPT,
      "PHONE": user_detail[0].PHONE,
      "GROUPNAME": user_detail[0].GROUPNAME,
      "LANGUAGE_NAME": user_detail[0].LANGUAGE_NAME,
      "IP_RESTRICT": user_detail[0].IP_RESTRICT,
      "WEB_ENABLED": user_detail[0].WEB_ENABLED,
      "WEB_BROWSER": user_detail[0].WEB_BROWSER,
      "DEFAULT_PRINTER": user_detail[0].DEFAULT_PRINTER,
      "EXTRA_PERC": user_detail[0].EXTRA_PERC,
      "FIN_ADMIN": user_detail[0].FIN_ADMIN,
      "LOGDATE": user_detail[0].LOGDATE,
      "LOGNAME": user_detail[0].LOGNAME,
      "PASSWORD": user_detail[0].PASSWORD,
      "TEAM": user_detail[0].TEAM,
      "LEADER": user_detail[0].LEADER,
      "MANAGER": user_detail[0].MANAGER,
      "TODAY": user_detail[0].TODAY,
      "TOMORROW": user_detail[0].TOMORROW,
      "NOTES": user_detail[0].NOTES
    };
    Body2.push(newVal2);

    // Step 4: Execute the SQL to update the user information
    let retVal2 = await this.starServices.execSQLBody(this, Body2, "");

    console.log("resetToAppTheme(): Theme reset successfully to default theme");
    await this.fetchUserTheme();
  }


  async  PRE_DELETE(formGroup){
    

  }
  async POST_DELETE(formGroup){
    

  }



async WHEN_VALIDATE_ITEM_THEME_NAME(value) {

 this.FORM_TRIGGER_FAILURE = false ;
 this.form.controls['THEME_NAME'].setErrors({invalid: true});
 // Code goes here


 if ( this.FORM_TRIGGER_FAILURE == true)
 return;

 this.form.get('THEME_NAME').updateValueAndValidity();
 this.form.updateValueAndValidity();
 }
 async onChange_THEME_NAME({ target }) {
 var value = target.value;
 if ((value == null) || (value == ''))
 	return;
    this.FORM_TRIGGER_FAILURE = false;
 await   this.WHEN_VALIDATE_ITEM_THEME_NAME(value); if ( this.FORM_TRIGGER_FAILURE) return;
 }
// FORM\CODE_TS.ts

public opened = false;
public targetTheme: string = "";

public openEditorForm(): void {
    this.opened = true;
}

public async copyTheme(): Promise<void> {
    let srcTheme = this.form.value.THEME_NAME;
    console.log("Source Theme:", srcTheme);

    // Step 1: Call Exec SQL to get details of the source theme
    let Body = [];
    let newVal: any = {
        "_QUERY": "GET_THEME_DETAIL",
        "THEME_NAME": srcTheme
    };
    Body.push(newVal);

    // Step 2: Execute the SQL to retrieve source theme details
    let data = await this.starServices.execSQLBody(this, Body, "");
    let theme_detail = data[0].data;

    // Clear the Body array for the next operation
    Body = [];

    // Step 3: Loop through theme details and prepare insert statements for the new theme
    for (let i = 0; i < theme_detail.length; i++) {
        theme_detail[i].THEME_NAME = this.targetTheme;
        newVal = {
            "_QUERY": "INSERT_THEME_DETAIL",
            "THEME_NAME": theme_detail[i].THEME_NAME,
            "THEME_VARIABLE": theme_detail[i].THEME_VARIABLE,
            "THEME_VARIABLE_VALUE": theme_detail[i].THEME_VARIABLE_VALUE
        };
        Body.push(newVal);
    }

    // Step 4: Create the new theme in the THEME_DEF table
    newVal = {
        "_QUERY": "INSERT_THEME_DEF",
        "THEME_NAME": this.targetTheme,
        "DEFAULT_THEME":0
    };
    Body.push(newVal);

    // Step 5: Execute the SQL to insert the new theme and its details
    let retVal = await this.starServices.execSQLBody(this, Body, "");

    console.log("Theme created successfully with the name:", this.targetTheme);

    this.opened = false;
}

// FORM\CODE_TS.ts
// For Adding new CODE
  public  grid_som_tabs_codes={};
  public SOM_TABS_CODESConfig: componentConfigDef;
  public filterCode: string;
  public showCodeDetails:boolean=false;

// For Attachments and images
public myFiles = [[]];
public filesDeleted = [[]];
public img_gallery = [[]];
public DSP_UPLOADConfig: componentConfigDef;
public att_arr = [];
public img_arr = [];
public AttDwnUrl = "";
public uploadimage = false;

public checkBoxDisabled: boolean = true;

}



