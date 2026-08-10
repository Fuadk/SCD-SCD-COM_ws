import { Component, Input, Output, OnInit, OnDestroy, ViewChild, Renderer2,EventEmitter,ViewEncapsulation } from '@angular/core';
import { FormGroup, FormControl, Validators ,FormBuilder} from '@angular/forms';
import { AddEvent, GridComponent } from '@progress/kendo-angular-grid';
import { groupBy, GroupDescriptor  } from '@progress/kendo-data-query';

import { process, State } from '@progress/kendo-data-query';
import { DataStateChangeEvent, GridDataResult ,RowClassArgs} from '@progress/kendo-angular-grid';

import { starServices } from 'starlib';
import { StarNotifyService } from '../../../services/starnotification.service';

import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { Starlib1 } from '../../Starlib1';
import { IntlService } from "@progress/kendo-angular-intl";
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

import {   dspbatchLogDspBatchDspBatchLogGrid , componentConfigDef } from '@modeldir/model';

// must invalidate table KEY by adding Validators.required otherwise add new as detail in master/detail screen won't work
 const createFormGroup = (dataItem:any) => new FormGroup({
'BATCH_ID' : new FormControl(dataItem.BATCH_ID  ,   Validators.required ) ,
'BATCH_LOG_ID' : new FormControl(dataItem.BATCH_LOG_ID  ,   Validators.required ) ,
'WHERE_CLAUSE' : new FormControl(dataItem.WHERE_CLAUSE  , ) ,
'BATCH_LIMIT' : new FormControl(dataItem.BATCH_LIMIT  , ) ,
'BATCH_STATUS' : new FormControl(dataItem.BATCH_STATUS  , ) ,
'COUNT_SENT' : new FormControl(dataItem.COUNT_SENT  , ) ,
'START_SEND' : new FormControl(dataItem.START_SEND  , ) ,
'END_SEND' : new FormControl(dataItem.END_SEND  , ) ,
'LOGNAME' : new FormControl(dataItem.LOGNAME  , ) ,
'LOGDATE' : new FormControl(dataItem.LOGDATE  , ) 
});



const matches = (el:any, selector:any) => (el.matches || el.msMatchesSelector).call(el, selector);
declare function getParamConfig():any;
declare function setParamConfig(var1:any):any;
@Component({
  selector: 'app-dsp-batch-dsp-batch-log-grid',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './dsp-batch-dsp-batch-log-grid.component.html',
  styleUrls: ['./dsp-batch-dsp-batch-log-grid.component.scss'
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

export class DspBatchLogDspBatchDspBatchLogGridGridComponent implements OnInit,OnDestroy {
  @ViewChild(GridComponent) 
 
 public grid!: GridComponent;
 
 //@Input()    
 public showToolBar = false;
  public removedRec=[];
  public groups: GroupDescriptor[] = [];
  public view!: any[];
  public formGroup!: FormGroup; 
  private editedRowIndex!: number;
  private docClickSubscription: any;
  private isNew!: boolean;
  public isSearch!: boolean;
  public isChild: boolean = false;
  public isMaster: boolean = false;
  
  		public  isBATCH_IDEnable : boolean = true; 
public  isBATCH_LOG_IDEnable : boolean = true; 

  public  isFilterable : boolean = false;
  public  isColumnMenu : boolean = false;
  public  gridHeight = "400";

  private masterKeyArr = [];
  private masterKeyNameArr = [];
  private masterKey ="";
  private masterKeyName ="BATCH_ID";
  private insertCMD = "INSERT_DSP_BATCH_LOG";
  private updateCMD = "UPDATE_DSP_BATCH_LOG";
  private deleteCMD =   "DELETE_DSP_BATCH_LOG";
  private getCMD = "GET_DSP_BATCH_LOG_QUERY";

  public  executeQueryresult:any;
  public title =  this.starServices.getNLS([],"dsp_batch_DSP_BATCH_LOG_GRID.dspbatchLogDspBatchDspBatchLogGrid.component_title","Dsp Batch Log Dsp Batch Dsp Batch Log Grid");
  public PDFfileName = this.title + ".PDF";
  public ExcelfileName = this.title + ".xlsx";
  public componentConfig: componentConfigDef;
  public editableMode = false;
  
  public WhereClause = "";
  public OrderByClause = "";

  public formattedWhere:any = null;
  public primarKeyReadOnlyArr = {isBATCH_IDreadOnly : false , isBATCH_LOG_IDreadOnly : false};  
  public paramConfig;
  public createFormGroupGrid = createFormGroup;

  public FORM_TRIGGER_FAILURE:any;
  public NOTFOUND:any;
  public disableEmitSave = false;
  public disableEmitReadCompleted = false;
  public children = ["any"];
  public masterParams:any;
public isPhonePortrait = false;
public compSelector = 'app-dsp-batch-dsp-batch-log-grid';

  private Body:any =[];
  @Output() readCompletedOutput: EventEmitter<any> = new EventEmitter();
  @Output() clearCompletedOutput: EventEmitter<any> = new EventEmitter();
  @Output() saveCompletedOutput: EventEmitter<any> = new EventEmitter();

    constructor(public router: Router,public intl: IntlService, public responsive: BreakpointObserver, private starNotify: StarNotifyService,  private starlib1: Starlib1, public starServices: starServices, private renderer: Renderer2) {
      this.router = router;
      this.paramConfig = getParamConfig();
      this.componentConfig = new componentConfigDef(); 
      this.componentConfig.gridHeight =  "200";
      this.componentConfig.showTitle = false;
      this.componentConfig.queryable  = false;
      this.componentConfig.insertable = false;
      this.componentConfig.removeable = false;
      this.componentConfig.updateable = false;
      this.componentConfig.enabled = false;
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
    this.AttDwnUrl = this.starServices.SERVER_URL + "/api/att?action=download&username=" + this.starServices.sessionParams.USERNAME.toLowerCase() + "&name=";
    
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
    if ( (grid.BATCH_ID != "") &&   (typeof grid.BATCH_ID != "undefined"))
    {
      this.masterKey = grid.BATCH_ID;
      
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
  }

  public toggleFilter(): void {
    this.isFilterable = !this.isFilterable;
  }
  public toggleColumnMenu(): void {
    this.isColumnMenu = !this.isColumnMenu;
  }

  
  private gridInitialValues:any = new dspbatchLogDspBatchDspBatchLogGrid();   

  private addToBody(NewVal:any){
    this.Body.push(NewVal);
  }
  private onDocumentClick(e: any): void {
    if (this.formGroup)
      if (this.paramConfig.DEBUG_FLAG) console.log("debug:this.formGroup.valid:", this.formGroup.valid, this.formGroup);

    if (!this.uploadimage && this.formGroup && this.formGroup.valid &&
        !matches(e.target, '#grid tbody *, #grid .k-grid-toolbar .k-button, .k-link')) {
        this.saveCurrent();
    }
  }
  

  public addHandler(): void {
    this.isNew = true;
    this.starServices.addHandler_grid(this)
    this.setRequired();
    if (this.isSearch != true){
      this.setInitialValues();
    }
    this.editableMode = true;

  }
   public setInitialValues() {
   
   }
   public setRequired() {
   }

 async cellClickHandler(event:any ) {

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

      let masterKeyArr = [this.formGroup.value['BATCH_ID']];
      let masterKeyNameArr = ['BATCH_ID'];
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
        await this.starServices.callGetSaveAttachemts("fetch", GridData.data[i],this); 
        this.POST_QUERY(GridData.data[i], i);
         this.starServices.att_img_populateArrs(GridData.data[i],this);
         await this.starServices.sleep(100);

      }

      let componentConfig = new componentConfigDef();
      let masterParams = {
        data: GridData.data[0]
      }

      let masterKeyArr = [GridData.data[0]['BATCH_ID']];
      let masterKeyNameArr = ['BATCH_ID'];
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

       let masterKeyArr = [data['BATCH_ID'],data['BATCH_LOG_ID']];
      let masterKeyNameArr = ['BATCH_ID','BATCH_LOG_ID'];
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
   executeQuery (grid : GridComponent){
    if (this.formGroup)
       this.PRE_QUERY(this.formGroup.value);
    if ( (this.WhereClause != "") && (this.isSearch != true) )
    {
      this.formattedWhere = this.WhereClause;
      this.isSearch = true;
    }
    this.starServices.executeQuery_grid( grid,this);
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
  }
   public fetchLookupsCallBack() {

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
  this.starServices.saveCurrent_grid( this);
  return true;
}


  async removeHandler(sender:any ) {
    this.starServices.removeHandler_grid(sender, this);

    await this.PRE_DELETE(this.formGroup.value);
    if (this.FORM_TRIGGER_FAILURE == true) {
      this.Body=[];
      this.starServices.endTrans(this, false);
      this.cancelHandler();
      this.executeQuery(this.grid);
      return;
    }
  }

public userLang = "EN" ; 
public lookupArrDef:any =[];
public setlookupArrDef(){

this.lookupArrDef =[	{"statment":"SELECT CODE, CODETEXT_LANG FROM SOM_TABS_CODES WHERE CODENAME ='ORDER_STATUS'  and LANGUAGE_NAME = '" + this.userLang + "' order by CODETEXT_LANG ",
			"lkpArrName":"lkpArrBATCH_STATUS"}];
this.starServices.fetchLookups(this, this.lookupArrDef);
}

public lkpArrBATCH_STATUS = [];

public lkpArrGetBATCH_STATUS(CODE: any): any {
var rec = this.lkpArrBATCH_STATUS.find((x:any) => x.CODE === CODE);
return rec;
}


public printScreen(){
  window.print();
}
   public handleComponentConfig(ComponentConfig:any) {

      if (typeof ComponentConfig !== "undefined") {
         if (this.paramConfig.DEBUG_FLAG) console.log("DspBatchLogDspBatchDspBatchLogGridGrid ComponentConfig:", ComponentConfig);
         this.componentConfig = this.starServices.setComponentConfig(ComponentConfig, this.componentConfig);
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
WHEN_NEW_FORM_INSTANCE(){
   

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
//  console.log("check batch:", formGroup.BATCH_LOG_ID)
//  //console.log("check batch:",formGroup.BATCH_LOG_ID.substring(0, 4));
//  let year = formGroup.BATCH_LOG_ID.substring(0, 4);
//  //console.log("check batch:",formGroup.BATCH_LOG_ID.substring(4, 6));
//  let month = formGroup.BATCH_LOG_ID.substring(4, 6);
//  //console.log("check batch:",formGroup.BATCH_LOG_ID.substring(6, 8));
//  let day = formGroup.BATCH_LOG_ID.substring(6, 8);
//  //console.log("check batch:",formGroup.BATCH_LOG_ID.substring(8, 10));
//  let hour = formGroup.BATCH_LOG_ID.substring(8, 10);
//  //console.log("check batch:",formGroup.BATCH_LOG_ID.substring(10, 12));
//  let min = formGroup.BATCH_LOG_ID.substring(10, 12);
//  //console.log("check batch:",formGroup.BATCH_LOG_ID.substring(12, 16));
//  let sec = formGroup.BATCH_LOG_ID.substring(12, 17);
 
//  formGroup.BATCH_LOG_ID = year + "/" + month + "/" + day + " " + hour + ":" + min + ":" + sec;
//  console.log("check batch:", formGroup.BATCH_LOG_ID)

}
 public ROW_CLASS = (context: RowClassArgs) => {
    
    return{};
  };




async WHEN_VALIDATE_ITEM_BATCH_ID(formGroup) {

 this.FORM_TRIGGER_FAILURE = false ; 
 this.formGroup.controls['BATCH_ID'].setErrors({invalid: true}); 
 // Code goes here 
 

 if ( this.FORM_TRIGGER_FAILURE == true) 
 return; 
 
 this.formGroup.get('BATCH_ID').updateValueAndValidity();
 this.formGroup.updateValueAndValidity(); 
 }
async WHEN_VALIDATE_ITEM_BATCH_LOG_ID(formGroup) {

 this.FORM_TRIGGER_FAILURE = false ; 
 this.formGroup.controls['BATCH_LOG_ID'].setErrors({invalid: true}); 
 // Code goes here 
 

 if ( this.FORM_TRIGGER_FAILURE == true) 
 return; 
 
 this.formGroup.get('BATCH_LOG_ID').updateValueAndValidity();
 this.formGroup.updateValueAndValidity(); 
 }
async WHEN_VALIDATE_ITEM_WHERE_CLAUSE(formGroup) {

 this.FORM_TRIGGER_FAILURE = false ; 
 this.formGroup.controls['WHERE_CLAUSE'].setErrors({invalid: true}); 
 // Code goes here 
 

 if ( this.FORM_TRIGGER_FAILURE == true) 
 return; 
 
 this.formGroup.get('WHERE_CLAUSE').updateValueAndValidity();
 this.formGroup.updateValueAndValidity(); 
 }
async WHEN_VALIDATE_ITEM_BATCH_LIMIT(formGroup) {

 this.FORM_TRIGGER_FAILURE = false ; 
 this.formGroup.controls['BATCH_LIMIT'].setErrors({invalid: true}); 
 // Code goes here 
 

 if ( this.FORM_TRIGGER_FAILURE == true) 
 return; 
 
 this.formGroup.get('BATCH_LIMIT').updateValueAndValidity();
 this.formGroup.updateValueAndValidity(); 
 }
async WHEN_VALIDATE_ITEM_BATCH_STATUS(formGroup) {

 this.FORM_TRIGGER_FAILURE = false ; 
 this.formGroup.controls['BATCH_STATUS'].setErrors({invalid: true}); 
 // Code goes here 
 

 if ( this.FORM_TRIGGER_FAILURE == true) 
 return; 
 
 this.formGroup.get('BATCH_STATUS').updateValueAndValidity();
 this.formGroup.updateValueAndValidity(); 
 }
async WHEN_VALIDATE_ITEM_COUNT_SENT(formGroup) {

 this.FORM_TRIGGER_FAILURE = false ; 
 this.formGroup.controls['COUNT_SENT'].setErrors({invalid: true}); 
 // Code goes here 
 

 if ( this.FORM_TRIGGER_FAILURE == true) 
 return; 
 
 this.formGroup.get('COUNT_SENT').updateValueAndValidity();
 this.formGroup.updateValueAndValidity(); 
 }
async WHEN_VALIDATE_ITEM_START_SEND(formGroup) {

 this.FORM_TRIGGER_FAILURE = false ; 
 this.formGroup.controls['START_SEND'].setErrors({invalid: true}); 
 // Code goes here 
 

 if ( this.FORM_TRIGGER_FAILURE == true) 
 return; 
 
 this.formGroup.get('START_SEND').updateValueAndValidity();
 this.formGroup.updateValueAndValidity(); 
 }
async WHEN_VALIDATE_ITEM_END_SEND(formGroup) {

 this.FORM_TRIGGER_FAILURE = false ; 
 this.formGroup.controls['END_SEND'].setErrors({invalid: true}); 
 // Code goes here 
 

 if ( this.FORM_TRIGGER_FAILURE == true) 
 return; 
 
 this.formGroup.get('END_SEND').updateValueAndValidity();
 this.formGroup.updateValueAndValidity(); 
 }
async WHEN_VALIDATE_ITEM_LOGNAME(formGroup) {

 this.FORM_TRIGGER_FAILURE = false ; 
 this.formGroup.controls['LOGNAME'].setErrors({invalid: true}); 
 // Code goes here 
 

 if ( this.FORM_TRIGGER_FAILURE == true) 
 return; 
 
 this.formGroup.get('LOGNAME').updateValueAndValidity();
 this.formGroup.updateValueAndValidity(); 
 }
async WHEN_VALIDATE_ITEM_LOGDATE(formGroup) {

 this.FORM_TRIGGER_FAILURE = false ; 
 this.formGroup.controls['LOGDATE'].setErrors({invalid: true}); 
 // Code goes here 
 

 if ( this.FORM_TRIGGER_FAILURE == true) 
 return; 
 
 this.formGroup.get('LOGDATE').updateValueAndValidity();
 this.formGroup.updateValueAndValidity(); 
 } 
 async onBlur_BATCH_ID() { 
  await this.WHEN_VALIDATE_ITEM_BATCH_ID(this.formGroup); if ( this.FORM_TRIGGER_FAILURE) return;  
 } 
 async onBlur_BATCH_LOG_ID() { 
  await this.WHEN_VALIDATE_ITEM_BATCH_LOG_ID(this.formGroup); if ( this.FORM_TRIGGER_FAILURE) return;  
 } 
 async onBlur_WHERE_CLAUSE() { 
  await this.WHEN_VALIDATE_ITEM_WHERE_CLAUSE(this.formGroup); if ( this.FORM_TRIGGER_FAILURE) return;  
 } 
 async onBlur_BATCH_LIMIT() { 
  await this.WHEN_VALIDATE_ITEM_BATCH_LIMIT(this.formGroup); if ( this.FORM_TRIGGER_FAILURE) return;  
 } 
 async valueChangeBATCH_STATUS(value: any) { 
 await this.WHEN_VALIDATE_ITEM_BATCH_STATUS(this.formGroup); if ( this.FORM_TRIGGER_FAILURE) return;  
 } 
 async onBlur_COUNT_SENT() { 
  await this.WHEN_VALIDATE_ITEM_COUNT_SENT(this.formGroup); if ( this.FORM_TRIGGER_FAILURE) return;  
 } 
 async valueChangeSTART_SEND(value: any) { 
 await this.WHEN_VALIDATE_ITEM_START_SEND(this.formGroup); if ( this.FORM_TRIGGER_FAILURE) return;  
 } 
 async valueChangeEND_SEND(value: any) { 
 await this.WHEN_VALIDATE_ITEM_END_SEND(this.formGroup); if ( this.FORM_TRIGGER_FAILURE) return;  
 } 
 async onBlur_LOGNAME() { 
  await this.WHEN_VALIDATE_ITEM_LOGNAME(this.formGroup); if ( this.FORM_TRIGGER_FAILURE) return;  
 } 
 async valueChangeLOGDATE(value: any) { 
 await this.WHEN_VALIDATE_ITEM_LOGDATE(this.formGroup); if ( this.FORM_TRIGGER_FAILURE) return;  
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
public att_arr = [];
public img_arr = [];
public AttDwnUrl = "";
public uploadimage = false;


async DeleteLog(formGroup){

  
  let body:any = [];
   let sqlStmt = "Delete from DSP_WORK_ORDERS  where ORDER_NO in ( "
                + " select ORDER_NO from DSP_ORDERS  where BATCH_LOG_ID  = '" + formGroup.BATCH_LOG_ID + "')" ;
  let NewVal = 
    {
      "_QUERY": "GET_STMT",
      "_STMT": sqlStmt 
    };
    sqlStmt = " Delete from DSP_ORDERS  where BATCH_LOG_ID  = '" + formGroup.BATCH_LOG_ID + "'" ;

    let NewVal1 = 
    {
      "_QUERY": "GET_STMT",
      "_STMT": sqlStmt 
    };
    sqlStmt =  " Delete from DSP_BATCH_LOG  where BATCH_LOG_ID  = '" + formGroup.BATCH_LOG_ID + "'" ;
  let NewVal2 = {
    "_QUERY": "GET_STMT",
    "_STMT": sqlStmt 

    }
    
  
  body.push(NewVal);
  body.push(NewVal1);
  body.push(NewVal2);
  if (this.paramConfig.DEBUG_FLAG) console.log("DeleteLog:", body);


  let data = await this.starServices.execSQLBody(this, body, "");
  let allColumns = data[0].data;
  if (this.paramConfig.DEBUG_FLAG) console.log("tst post dels:", data);
  if (typeof data[0] != "undefined") {
    if (this.paramConfig.DEBUG_FLAG) console.log("this.formattedWhere:", this.formattedWhere)
    this.WhereClause =  "&_WHERE=" + "BATCH_ID='" + formGroup.BATCH_ID + "'" ;
    this.executeQuery(this.grid);
  }


}


async viewOrders(formGroup){
  let formattedWhere =  "&_WHERE=" + "BATCH_LOG_ID='" + formGroup.BATCH_LOG_ID + "'" ;
  let componentConfig = new componentConfigDef();


  componentConfig.masterReadCompleted = true;
  componentConfig.eventTo = ["app-dsp-batch-batch"];
  componentConfig.formattedWhere = formattedWhere;
  let masterParams={
    hideOthers:false
  }
  componentConfig.masterParams = masterParams;
  
  
  this.callStarNotify(componentConfig);

}
}


