import { Component, Input, Output, OnInit, OnDestroy, ViewChild, Renderer2,EventEmitter,ViewEncapsulation } from '@angular/core';
import { FormGroup, FormControl, Validators ,FormBuilder} from '@angular/forms';
import { AddEvent, GridComponent } from '@progress/kendo-angular-grid';
import { groupBy, GroupDescriptor  } from '@progress/kendo-data-query';

import { process, State } from '@progress/kendo-data-query';
import { DataStateChangeEvent, GridDataResult ,RowClassArgs} from '@progress/kendo-angular-grid';

import { starServices } from 'starlib';
import { StarNotifyService } from '../../../services/starnotification.service';

import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';

import { IntlService } from "@progress/kendo-angular-intl";
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

import {   scdlocalMessageScdAlmLocalMessages , componentConfigDef } from '@modeldir/model';

// must invalidate table KEY by adding Validators.required otherwise add new as detail in master/detail screen won't work
 const createFormGroup = (dataItem:any) => new FormGroup({
'LOCAL_MESSAGE_ID' : new FormControl(dataItem.LOCAL_MESSAGE_ID  , ) ,
'APPLICATION_ID' : new FormControl(dataItem.APPLICATION_ID  ,   Validators.required ) ,
'TRIGGER_VALUE' : new FormControl(dataItem.TRIGGER_VALUE  , ) ,
'MESSAGE' : new FormControl(dataItem.MESSAGE  , ) 
});



const matches = (el:any, selector:any) => (el.matches || el.msMatchesSelector).call(el, selector);
declare function getParamConfig():any;
declare function setParamConfig(var1:any):any;
@Component({
  selector: 'app-scd-alm-local-messages',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './scd-alm-local-messages.component.html',
  standalone: false,
  styleUrls: ['./scd-alm-local-messages.component.scss'
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

export class ScdLocalMessageScdAlmLocalMessagesGridComponent implements OnInit,OnDestroy {
  @ViewChild(GridComponent) 
 
 public grid!: GridComponent;
 
 //@Input()    
 public showToolBar = true;
  public removedRec=[];
  public groups: GroupDescriptor[] = [];
  public view!: any[];
  public formGroup!: FormGroup; 
  private editedRowIndex!: number;
  private docClickSubscription: any;
  public isNew!: boolean;
  public isSearch!: boolean;
  public isChild: boolean = false;
  public isMaster: boolean = false;
  
  		public  isLOCAL_MESSAGE_IDEnable : boolean = true; 
public  isAPPLICATION_IDEnable : boolean = true; 

  public  isFilterable : boolean = false;
  public  isColumnMenu : boolean = false;
  public  gridHeight = "";

  private masterKeyArr = [];
  private masterKeyNameArr = [];
  private masterKey ="";
  private masterKeyName ="APPLICATION_ID";
  private insertCMD = "INSERT_SCD_LOCAL_MESSAGE";
  private updateCMD = "UPDATE_SCD_LOCAL_MESSAGE";
  private deleteCMD =   "DELETE_SCD_LOCAL_MESSAGE";
  private getCMD = "GET_SCD_LOCAL_MESSAGE_QUERY";

  public  executeQueryresult:any;
  public title =  this.starServices.getNLS([],"SCD_ALM_LOCAL_MESSAGES.scdlocalMessageScdAlmLocalMessages.component_title","Local Messages");
  public PDFfileName = this.title + ".PDF";
  public ExcelfileName = this.title + ".xlsx";
  public componentConfig
  public compTitleMsg =  "SCD_ALM_LOCAL_MESSAGES.scdlocalMessageScdAlmLocalMessages";
  public editableMode = false;
  
  public WhereClause = "";
  public OrderByClause = "";

  public formattedWhere:any = null;
  public primarKeyReadOnlyArr = {isLOCAL_MESSAGE_IDreadOnly : false , isAPPLICATION_IDreadOnly : false};  
  public paramConfig;
  public createFormGroupGrid = createFormGroup;

  public FORM_TRIGGER_FAILURE:any;
  public NOTFOUND:any;
  public disableEmitSave = false;
  public disableEmitReadCompleted = false;
  public children = ["any"];
  public masterParams:any;
public isPhonePortrait = false;
public visibleLOCAL_MESSAGE_ID = false;
public visibleAPPLICATION_ID = false;
public visibleTRIGGER_VALUE = true;
public visibleMESSAGE = true;

public compSelector = 'app-scd-alm-local-messages';

  private Body:any =[];
  @Output() readCompletedOutput: EventEmitter<any> = new EventEmitter();
  @Output() clearCompletedOutput: EventEmitter<any> = new EventEmitter();
  @Output() saveCompletedOutput: EventEmitter<any> = new EventEmitter();
  @Output() formValidationChangedOutput: EventEmitter<boolean> = new EventEmitter();

    constructor(public router: Router,public intl: IntlService, public responsive: BreakpointObserver, private starNotify: StarNotifyService,   public starServices: starServices, private renderer: Renderer2) {
      this.router = router;
      this.paramConfig = getParamConfig();
      this.userLang =  this.paramConfig.userLang.toUpperCase() ;
      this.componentConfig = new componentConfigDef(); 
      //this.componentConfig.gridHeight =  "500";
      this.componentConfig.showTitle = true;
      this.componentConfig.queryable  = true;
      this.componentConfig.insertable = true;
      this.componentConfig.removeable = true;
      this.componentConfig.updateable = true;       
      this.componentConfig.showToolBar = true;
      this.componentConfig.enabled = true;
      this.title = this.componentConfig.title ? this.componentConfig.title :this.starServices.getNLS([],"SCD_ALM_LOCAL_MESSAGES.scdlocalMessageScdAlmLocalMessages.component_title","Local Messages");
  }
  private componentConfigChangeEvent!: Subscription;
  public ngAfterViewInit() {
    this.starServices.setRTL();
    this.WHEN_NEW_FORM_INSTANCE();
  }
  public ngOnInit(): void {
      this.responsive
      .observe([Breakpoints.HandsetPortrait])
      .subscribe((state: BreakpointState) => {
        
        this.isPhonePortrait = false;
        if (state.matches) {
           this.isPhonePortrait = true;
        }
        
      });
    this.docClickSubscription = this.renderer.listen('document', 'click', this.onDocumentClick.bind(this));
    this.setlookupArrDef();
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
    
  }
 
  
    public ngOnDestroy(): void {
        this.docClickSubscription();
   // Unsubscribe the event once not needed.
    if (typeof this.componentConfigChangeEvent !== "undefined") this.componentConfigChangeEvent.unsubscribe();

    }

   callStarNotify(componentConfig:any) {
    componentConfig.eventFrom = this.compSelector;
    this.starNotify.sendEvent<componentConfigDef>('componentConfigDef', componentConfig);
  }

//Next part for filtering
   public state: State = {
  };
  
    public dataStateChange(state: DataStateChangeEvent): void {
      this.state = state;
      let out = process(this.executeQueryresult.data , this.state);
      this.grid.data = out;
  }

  @Input() public set detail_Input(grid: any) {
    if (typeof grid !== "undefined"){
      this.isSearch = true;
      this.executeQuery(grid);
      this.isChild = true;
    }
    /*
    if ( (grid.APPLICATION_ID != "") &&   (typeof grid.APPLICATION_ID != "undefined"))
    {
      this.masterKey = grid.APPLICATION_ID;
      
      this.isSearch = true;
      this.executeQuery(grid);
      this.isChild = true;
      //this.showToolBar = false;
    }
    else
    {
      
      if (typeof this.grid != "undefined")
      {
        //this.isChild = false;
        this.grid.data = null;
        this.masterKey = "";
        
      }
    }
    */
  }

  public toggleFilter(): void {
    this.isFilterable = !this.isFilterable;
  }
  public toggleColumnMenu(): void {
    this.isColumnMenu = !this.isColumnMenu;
  }

  
  private gridInitialValues:any = new scdlocalMessageScdAlmLocalMessages();   

  private addToBody(NewVal:any){
    this.Body.push(NewVal);
  }
  private onDocumentClick(e: any): void {
    if (this.formGroup)
      if (this.paramConfig.DEBUG_FLAG) console.log("debug:this.formGroup.valid:", this.formGroup.valid, this.formGroup);
 // Check if click is inside TimePicker popup or its "Set" button
    const isTimePickerPopup = matches(e.target, '.k-timepicker .k-popup, .k-timepicker .k-popup *, .k-time-list, .k-time-list *, .k-time-selection, .k-button');
    const isTimePickerSetButton = matches(e.target, '.k-timepicker .k-button, .k-timepicker .k-button *');

    if (!this.uploadimage && this.formGroup && this.formGroup.valid &&
        !matches(e.target, '#grid tbody *, #grid .k-grid-toolbar .k-button, .k-link') &&
        !isTimePickerPopup && !isTimePickerSetButton) {
        this.saveCurrent();
    }
    else if (typeof this.formGroup !== "undefined") {
      this.formGroup.markAllAsTouched();
      this.formValidationChangedOutput.emit(this.formGroup.valid)
    }
  }
  

  public addHandler(): void {
    this.isNew = true;
    if (this.isSearch != true){
      this.setInitialValues();
    }
    this.starServices.addHandler_grid(this)
    this.setRequired();

    this.editableMode = true;

  if (this.formGroup.valid == false) {
        this.formGroup.markAllAsTouched()
        setTimeout(() => {
          this.formValidationChangedOutput.emit(this.formGroup.valid)
        }, 100)
      }
  }
   public setInitialValues() {
   
   }
   public setRequired() {
   }

 async cellClickHandler(event:any ) {

  const name = 'ON_CLICK_' + event.column.field;
  if (typeof this[name] === 'function') {
    this[name](event);
  }

    if (event.isEdited || (this.formGroup && !this.formGroup.valid)) {
        return;
    }
    this.editableMode = false;
    if (this.isNew) {
        event.rowIndex += 1;
	this.editableMode = true;
    }
    if (!this.saveCurrent())
      return;
    this.formGroup = createFormGroup(event.dataItem);
    if (this.componentConfig.enabled && this.componentConfig.updateable) {
      this.editedRowIndex = event.rowIndex;
      this.grid.editRow(event.rowIndex, this.formGroup);
    }
    await this.ON_CLICK(this.formGroup.value, event.rowIndex);
    this.readCompletedOutput.emit(this.formGroup.value);

     let componentConfig = new componentConfigDef();
      let masterParams = {
        data: this.formGroup.value
      }

      let masterKeyArr = [this.formGroup.value['APPLICATION_ID']];
      let masterKeyNameArr = ['APPLICATION_ID'];
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


  public enterQuery (grid : GridComponent): void{
     this.editableMode = true;
    this.starServices.enterQuery_grid( grid, this);
  }
  

   async callBackFunction(data:any) {
      if (data.total === 0)
         return;

      let GridData:any;
      GridData = Object.assign([], this.grid.data);
      for (let i = 0; i < GridData.data.length; i++){
        this.POST_QUERY(GridData.data[i], i);
        if (this.att_arr.length != 0 || this.img_arr.length != 0){
          await this.starServices.callGetSaveAttachemts("fetch", GridData.data[i],this); 
          await this.starServices.sleep(100);
          this.starServices.att_img_populateArrs(GridData.data[i],this);
          await this.starServices.sleep(100);
        }

      }
      if (this.img_arr.length != 0){
        this.grid.data = [];
        await this.starServices.sleep(10);
        this.grid.data = GridData;
      }
      

      let componentConfig = new componentConfigDef();
      let masterParams = {
        data: GridData.data[0]
      }

      let masterKeyArr = [GridData.data[0]['APPLICATION_ID']];
      let masterKeyNameArr = ['APPLICATION_ID'];
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
  public commonCallStarNotify(data:any) {
    //data = this.masterKeyArr;
    if (this.paramConfig.DEBUG_FLAG) console.log("commonCallStarNotify:data", data);
    let componentConfig = new componentConfigDef();
    let masterParams = {
      data: this.masterKeyArr
    }

       let masterKeyArr = [data['APPLICATION_ID'],data['LOCAL_MESSAGE_ID']];
      let masterKeyNameArr = ['APPLICATION_ID','LOCAL_MESSAGE_ID'];
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
   async  executeQuery (grid : GridComponent){
    if (this.formGroup)
       this.PRE_QUERY(this.formGroup.value);
    if ( (this.WhereClause != "") && (this.isSearch != true) )
    {
      this.formattedWhere = this.WhereClause;
      this.isSearch = true;
    }
    if  (typeof this.grid == "undefined")
      await this.starServices.sleep(100)
    let formGroup = createFormGroup(this.gridInitialValues);
    let newGrid = {...grid}
    if ( (typeof grid !== "undefined") && (typeof grid.autoSize == "undefined") )
      this.starServices.removeNonValidColumns(newGrid,formGroup.value);
    this.starServices.executeQuery_grid( newGrid,this);
    this.editableMode = false;
  } 


  async callBackPost_Save( NewVal:any) {
      if (this.FORM_TRIGGER_FAILURE)
      {
         this.starServices.endTrans(this, false);
         return;
      }
      this.FORM_TRIGGER_FAILURE = false;
      let GridData:any;
      this.commonCallStarNotify(NewVal);
      GridData = Object.assign([], this.grid.data);
      let i = 0;
      while (i < GridData.data.length) {
         let query = GridData.data[i]._QUERY_DONE;
         if (typeof query !== "undefined") {
         let myArray = query.split("_");
         if (myArray[0] == "INSERT"){
           await this.POST_INSERT(GridData.data[i], i);
         }else if (myArray[0] == "UPDATE"){
           await this.POST_UPDATE(GridData.data[i], i);
         }
       
         if (this.FORM_TRIGGER_FAILURE){
            this.starServices.endTrans(this, false);
            return;
         }
       }
       delete GridData.data[i]._QUERY_DONE;
         i++;
      }

      if (!this.FORM_TRIGGER_FAILURE) {
        //this.KEY_COMMIT();
        this.starServices.endTrans(this, true);
      }


   }

   async saveChanges(grid: GridComponent) {
    
    //await this.KEY_COMMIT();
    this.FORM_TRIGGER_FAILURE = false;
      

       let GridData:any;
       if (!this.saveCurrent())
          return;
       GridData = Object.assign([], this.grid.data);
       if (typeof GridData.data !== "undefined") {
        let i = 0;
        while (i < GridData.data.length) {
            let query = GridData.data[i]._QUERY;
            if (typeof query !== "undefined") {
            let myArray = query.split("_");
            if (myArray[0] == "INSERT"){
              await this.PRE_INSERT(GridData.data[i], i);
            }else if (myArray[0] == "UPDATE"){
              await this.PRE_UPDATE(GridData.data[i], i);
            }
          
            if (this.FORM_TRIGGER_FAILURE){
              this.starServices.endTrans(this, false);
              return;
            }
          }
            i++;
        }
       }
      if (this.removedRec.length > 0){
        for (let i =0; i<this.removedRec.length;i++ ){
          await this.POST_DELETE(this.removedRec[i]);
        }
        this.removedRec.length = 0;
      }
      if (!this.FORM_TRIGGER_FAILURE) {
        //this.KEY_COMMIT();
        this.starServices.endTrans(this, true);
      }
    await this.KEY_COMMIT();
    if (this.FORM_TRIGGER_FAILURE == true){
      this.starServices.endTrans(this, false);
       return;
    }
    this.starServices.callGetSaveAttachemts("save","",this);
    this.starServices.saveChanges_grid(grid, this);
 }


  public cancelHandler(): void {
    this.starServices.cancelHandler_grid( this);
    if (typeof this.formGroup == "undefined") {
      this.formValidationChangedOutput.emit(true)
    }
  }
   async fetchLookupsCallBack() {
    if (this.paramConfig.DEBUG_FLAG) console.log("this.lookupArrDef:", this.lookupArrDef)
    

   }

  private closeEditor(): void {
    this.starServices.closeEditor_grid(this);
  }

public saveCurrent() {
    if (typeof this.formGroup !== "undefined") {
      if (this.formGroup.valid == false) {
        let invalid = this.starServices.getInvalidControls_grid(this);
        this.FORM_TRIGGER_FAILURE = true;
        //this.starServices.endTrans(this, false);
        return false;
      }
    }
    if (typeof this.formGroup !== "undefined") {
        this.formGroup.markAllAsTouched();
        this.formValidationChangedOutput.emit(this.formGroup.valid)
      }
  this.starServices.saveCurrent_grid( this);
  return true;
}


   async removeHandler(sender:any ) {
    
    if (typeof this.formGroup !== "undefined") {
      await this.PRE_DELETE(this.formGroup.value);
      if (this.FORM_TRIGGER_FAILURE == true) {
        this.Body=[];
        this.starServices.endTrans(this, false);
        this.cancelHandler();
        this.executeQuery(this.grid);
        return;
      }
      this.starServices.removeHandler_grid(sender, this);
      this.formGroup.markAllAsTouched()
      this.formValidationChangedOutput.emit(this.formGroup.valid)
    }
  }

public userLang = "EN" ; 
public lookupArrDef:any =[];
public setlookupArrDef(){
this.lookupArrDef =[	{"statment":"SELECT APPLICATION_ID CODE, APPLICATION_NAME CODETEXT_LANG  FROM SCD_APPLICATION  order by CODETEXT_LANG ",
			"lkpArrName":"lkpArrAPPLICATION_ID"}];
 if (this.lookupArrDef.length > 0)
   this.starServices.fetchLookups(this, this.lookupArrDef);
}

public lkpArrAPPLICATION_ID = [];

public lkpArrGetAPPLICATION_ID(CODE: any): any {
var rec = this.lkpArrAPPLICATION_ID.find((x:any) => x.CODE === CODE);
return rec;
}


public printScreen(){
  window.print();
}
   public handleComponentConfig(ComponentConfig:any) {

      if (typeof ComponentConfig !== "undefined") {
         if (this.paramConfig.DEBUG_FLAG) console.log("ScdLocalMessageScdAlmLocalMessagesGrid ComponentConfig:", ComponentConfig);
         this.componentConfig = this.starServices.setComponentConfig(ComponentConfig, this.componentConfig);
         this.WHEN_NOTIFY(ComponentConfig);
         if (ComponentConfig.gridHeight != null)
            this.gridHeight = ComponentConfig.gridHeight;

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
              this.addHandler();
            }
         }
        if (ComponentConfig.masterParams != null) {
          this.masterParams = ComponentConfig.masterParams;
        }


         if (ComponentConfig.isChild == true) {
            this.isChild = true;

         }

         if (ComponentConfig.formattedWhere != null) {
            this.formattedWhere = ComponentConfig.formattedWhere;
            this.isSearch = true;
            this.executeQuery(this.grid);

         }
         if (ComponentConfig.clearComponent == true) {
            this.cancelHandler();
            this.grid.cancel;
            this.grid.data = [];
            this.Body = [];
         }
         if (ComponentConfig.clearScreen == true) {
            this.grid.data = [];
         }

	 if (ComponentConfig.masterReadCompleted != null) {
            if (typeof this.grid !== "undefined") {
              this.isSearch = false;
              this.isChild = true;
               this.executeQuery(this.grid)
            }
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
public hiddenColumns: string[] = [];
public disabledColumns: string[] = [];
async WHEN_NOTIFY(ComponentConfig){
    
}
async WHEN_NEW_FORM_INSTANCE(){
   	if (!this.isChild){
this.executeQuery(this.grid);
	}


}
async KEY_COMMIT(){
   

}
  async ON_CLICK(formGroup:any, P_INDEX:any){
     

}
   async PRE_INSERT(formGroup:any, P_INDEX:any){
     

}
async PRE_UPDATE(formGroup:any, P_INDEX:any){
   

}
async PRE_DELETE(formGroup:any){
   
}

async POST_DELETE(formGroup:any){
   
}

async POST_INSERT(formGroup:any, P_INDEX:any){
   
}
async POST_UPDATE(formGroup:any, P_INDEX:any){
   
}
async PRE_QUERY(formGroup:any){
 
}
async POST_QUERY(formGroup:any, P_INDEX:any){
 
}
 public ROW_CLASS = (context: RowClassArgs) => {
    
    return{};
  };




async WHEN_VALIDATE_ITEM_LOCAL_MESSAGE_ID(formGroup) {

 this.FORM_TRIGGER_FAILURE = false ; 
 if (typeof this.formGroup.controls['LOCAL_MESSAGE_ID'] != "undefined" ) 
      this.formGroup.controls['LOCAL_MESSAGE_ID'].setErrors({invalid: true}); 
 // Code goes here 
 

 if ( this.FORM_TRIGGER_FAILURE == true) 
 return; 
 
 if (typeof this.formGroup.controls['LOCAL_MESSAGE_ID'] != "undefined" ) 
     this.formGroup.get('LOCAL_MESSAGE_ID').updateValueAndValidity();
 this.formGroup.updateValueAndValidity(); 
 }

 async ON_CLICK_LOCAL_MESSAGE_ID(event){

}

async WHEN_VALIDATE_ITEM_APPLICATION_ID(formGroup) {

 this.FORM_TRIGGER_FAILURE = false ; 
 if (typeof this.formGroup.controls['APPLICATION_ID'] != "undefined" ) 
      this.formGroup.controls['APPLICATION_ID'].setErrors({invalid: true}); 
 // Code goes here 
 

 if ( this.FORM_TRIGGER_FAILURE == true) 
 return; 
 
 if (typeof this.formGroup.controls['APPLICATION_ID'] != "undefined" ) 
     this.formGroup.get('APPLICATION_ID').updateValueAndValidity();
 this.formGroup.updateValueAndValidity(); 
 }

 async ON_CLICK_APPLICATION_ID(event){

}

async WHEN_VALIDATE_ITEM_TRIGGER_VALUE(formGroup) {

 this.FORM_TRIGGER_FAILURE = false ; 
 if (typeof this.formGroup.controls['TRIGGER_VALUE'] != "undefined" ) 
      this.formGroup.controls['TRIGGER_VALUE'].setErrors({invalid: true}); 
 // Code goes here 
 

 if ( this.FORM_TRIGGER_FAILURE == true) 
 return; 
 
 if (typeof this.formGroup.controls['TRIGGER_VALUE'] != "undefined" ) 
     this.formGroup.get('TRIGGER_VALUE').updateValueAndValidity();
 this.formGroup.updateValueAndValidity(); 
 }

 async ON_CLICK_TRIGGER_VALUE(event){

}

async WHEN_VALIDATE_ITEM_MESSAGE(formGroup) {

 this.FORM_TRIGGER_FAILURE = false ; 
 if (typeof this.formGroup.controls['MESSAGE'] != "undefined" ) 
      this.formGroup.controls['MESSAGE'].setErrors({invalid: true}); 
 // Code goes here 
 

 if ( this.FORM_TRIGGER_FAILURE == true) 
 return; 
 
 if (typeof this.formGroup.controls['MESSAGE'] != "undefined" ) 
     this.formGroup.get('MESSAGE').updateValueAndValidity();
 this.formGroup.updateValueAndValidity(); 
 }

 async ON_CLICK_MESSAGE(event){

}
 
 async onBlur_LOCAL_MESSAGE_ID() { 
  await this.WHEN_VALIDATE_ITEM_LOCAL_MESSAGE_ID(this.formGroup); if ( this.FORM_TRIGGER_FAILURE) return;  
 } 
 async valueChangeAPPLICATION_ID(value: any) { 
 await this.WHEN_VALIDATE_ITEM_APPLICATION_ID(this.formGroup); if ( this.FORM_TRIGGER_FAILURE) return;  
 } 
 async onBlur_TRIGGER_VALUE() { 
  await this.WHEN_VALIDATE_ITEM_TRIGGER_VALUE(this.formGroup); if ( this.FORM_TRIGGER_FAILURE) return;  
 } 
 async onBlur_MESSAGE() { 
  await this.WHEN_VALIDATE_ITEM_MESSAGE(this.formGroup); if ( this.FORM_TRIGGER_FAILURE) return;  
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


// 1. In Component
public onExcelExport(e: any): void {
  const rows = e.workbook.sheets[0].rows;
  console.log("Excel Export Rows:", rows);
  // Skip headers, iterate through data rows
  rows.forEach((row, rowIndex) => {
    if (row.type === 'data') {
      // Assuming Column 1 (index 0) has raw value '1' and you need 'Active'
      const rawValue = row.cells[0].value;
      //lkpArrGetEMPLOYEE_ID()
      //const mappedText = this.lookupData.find(x => x.id === rawValue)?.text;
      
      // Update cell value
      //  row.cells[0].value = mappedText;
    }
  });
}
}


