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

import {   scdalarmSortScdAssAlarmSortResults , componentConfigDef } from '@modeldir/model';

// must invalidate table KEY by adding Validators.required otherwise add new as detail in master/detail screen won't work
 const createFormGroup = (dataItem:any) => new FormGroup({
'SORT_ID' : new FormControl(dataItem.SORT_ID  , ) ,
'APP_ID' : new FormControl(dataItem.APP_ID  ,   Validators.required ) ,
'SORT_BY_FIELD' : new FormControl(dataItem.SORT_BY_FIELD  , ) ,
'THEN_BY_FIELD_ASC_DESC' : new FormControl(dataItem.THEN_BY_FIELD_ASC_DESC  , ) ,
'DISPLAY_ID' : new FormControl(dataItem.DISPLAY_ID  ,   Validators.required ) ,
'SORT_BY_FIELD_ASC_DESC' : new FormControl(dataItem.SORT_BY_FIELD_ASC_DESC  , ) ,
'THEN_BY_2' : new FormControl(dataItem.THEN_BY_2  , ) ,
'SHAPE_ID' : new FormControl(dataItem.SHAPE_ID  ,   Validators.required ) ,
'THEN_BY' : new FormControl(dataItem.THEN_BY  , ) ,
'THEN_BY_2_FIELD_ASC_DESC' : new FormControl(dataItem.THEN_BY_2_FIELD_ASC_DESC  , ) 
});



const matches = (el:any, selector:any) => (el.matches || el.msMatchesSelector).call(el, selector);
declare function getParamConfig():any;
declare function setParamConfig(var1:any):any;
@Component({
  selector: 'app-scd-ass-alarm-sort-results',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './scd-ass-alarm-sort-results.component.html',
  standalone: false,
  styleUrls: ['./scd-ass-alarm-sort-results.component.scss'
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

export class ScdAlarmSortScdAssAlarmSortResultsGridComponent implements OnInit,OnDestroy {
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
  
  	public  isSORT_IDEnable : boolean = true; 

  public  isFilterable : boolean = false;
  public  isColumnMenu : boolean = false;
  public  gridHeight = "";

  private masterKeyArr = [];
  private masterKeyNameArr = [];
  private masterKey ="";
  private masterKeyName ="APP_ID";
  private insertCMD = "INSERT_SCD_ALARM_SORT";
  private updateCMD = "UPDATE_SCD_ALARM_SORT";
  private deleteCMD =   "DELETE_SCD_ALARM_SORT";
  private getCMD = "GET_SCD_ALARM_SORT_QUERY";

  public  executeQueryresult:any;
  public title =  this.starServices.getNLS([],"SCD_ASS_ALARM_SORT_RESULTS.scdalarmSortScdAssAlarmSortResults.component_title","Alarm Sort Results");
  public PDFfileName = this.title + ".PDF";
  public ExcelfileName = this.title + ".xlsx";
  public componentConfig: componentConfigDef;
  public componentConfig_output: componentConfigDef;
  public compTitleMsg =  "SCD_ASS_ALARM_SORT_RESULTS.scdalarmSortScdAssAlarmSortResults";
  public editableMode = false;
  
  public WhereClause = "";
  public OrderByClause = "";

  public formattedWhere:any = null;
  public primarKeyReadOnlyArr = {isSORT_IDreadOnly : false};  
  public paramConfig;
  public createFormGroupGrid = createFormGroup;

  public FORM_TRIGGER_FAILURE:any;
  public NOTFOUND:any;
  public disableEmitSave = false;
  public disableEmitReadCompleted = false;
  public children = ["any"];
  public masterParams:any;
public isPhonePortrait = false;
public visibleSORT_ID = true;
public visibleAPP_ID = false;
public visibleSORT_BY_FIELD = true;
public visibleTHEN_BY_FIELD_ASC_DESC = true;
public visibleDISPLAY_ID = false;
public visibleSORT_BY_FIELD_ASC_DESC = true;
public visibleTHEN_BY_2 = true;
public visibleSHAPE_ID = false;
public visibleTHEN_BY = true;
public visibleTHEN_BY_2_FIELD_ASC_DESC = true;

public compSelector = 'app-scd-ass-alarm-sort-results';

  private Body:any =[];
  @Output() readCompletedOutput: EventEmitter<any> = new EventEmitter();
  @Output() clearCompletedOutput: EventEmitter<any> = new EventEmitter();
  @Output() saveCompletedOutput: EventEmitter<any> = new EventEmitter();
  @Output() formValidationChangedOutput: EventEmitter<boolean> = new EventEmitter();
  @Output() setComponentConfig_Output: EventEmitter<any> = new EventEmitter();

    constructor(public router: Router,public intl: IntlService, public responsive: BreakpointObserver, private starNotify: StarNotifyService,   public starServices: starServices, private renderer: Renderer2) {
      this.router = router;
      this.paramConfig = getParamConfig();
      this.userLang =  this.paramConfig.userLang.toUpperCase() ;
      this.componentConfig = new componentConfigDef(); 
      //this.componentConfig.gridHeight =  "500";
      this.componentConfig.showTitle = true;
      this.componentConfig.queryable  = true;
      this.componentConfig.insertable = false;
      this.componentConfig.removeable = false;
      this.componentConfig.updateable = false;       
      this.componentConfig.showToolBar = true;
      this.componentConfig.enabled = true;
      this.title = this.componentConfig.title ? this.componentConfig.title :this.starServices.getNLS([],"SCD_ASS_ALARM_SORT_RESULTS.scdalarmSortScdAssAlarmSortResults.component_title","Alarm Sort Results");
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
  public gridData: any[] = [];
  public originalGridData: any[] = [];
  private gridDataCopy: any[] = [];
    public isDirty: boolean = false;

   onCellClose(event: any): void {
    // Watch form changes to update isDirty in componentConfig
    const hasChanges = this.hasDataChanged();
    
    if (this.isDirty !== hasChanges) {
      this.isDirty = hasChanges;
      this.componentConfig = new componentConfigDef();
      this.componentConfig.isDirty = this.isDirty;
      
      console.log('Grid dirty state changed:', this.isDirty);
      this.emitComponentConfig();
    }
  }
  private hasDataChanged(): boolean {
    if (!this.gridData || !this.originalGridData) {
      return false;
    }

    // Compare current data with original
    if (this.gridData.length !== this.originalGridData.length) {
      return true; // Rows added or deleted
    }

    // Deep compare each row
    for (let i = 0; i < this.gridData.length; i++) {
      const currentRow = JSON.stringify(this.gridData[i]);
      const originalRow = JSON.stringify(this.originalGridData[i]);
      
      if (currentRow !== originalRow) {
        return true; // Row changed
      }
    }

    return false; // No changes
  }

  private emitComponentConfig(): void {
  if (this.componentConfig) {
    this.componentConfig.eventFrom = this.compSelector;
    //this.componentConfig.eventTo = ['any'];
    console.log('onCloseWindowDebug:Emitting componentConfig:', this.componentConfig);
    this.setComponentConfig_Output.emit(this.componentConfig);
  }
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
    if ( (grid.APP_ID != "") &&   (typeof grid.APP_ID != "undefined"))
    {
      this.masterKey = grid.APP_ID;
      
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

  
  private gridInitialValues:any = new scdalarmSortScdAssAlarmSortResults();   

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

      let masterKeyArr = [this.formGroup.value['APP_ID']];
      let masterKeyNameArr = ['APP_ID'];
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

      let masterKeyArr = [GridData.data[0]['APP_ID']];
      let masterKeyNameArr = ['APP_ID'];
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

       let masterKeyArr = [data['SORT_ID']];
      let masterKeyNameArr = ['SORT_ID'];
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
this.lookupArrDef =[	{"statment":"SELECT APPLICATION_ID CODE, APPLICATION_NAME CODETEXT_LANG  FROM  SCD_APPLICATION  order by CODETEXT_LANG ",
			"lkpArrName":"lkpArrAPP_ID"},
	{"statment":"SELECT DISPLAY_ID CODE, DISPLAY_NAME CODETEXT_LANG  FROM SCD_DISPLAY  order by CODETEXT_LANG ",
			"lkpArrName":"lkpArrDISPLAY_ID"},
	{"statment":"SELECT SHAPE_ID CODE, NAME CODETEXT_LANG  FROM  SCD_SHAPE  order by CODETEXT_LANG",
			"lkpArrName":"lkpArrSHAPE_ID"}];
 if (this.lookupArrDef.length > 0)
   this.starServices.fetchLookups(this, this.lookupArrDef);
}

public lkpArrAPP_ID = [];

public lkpArrDISPLAY_ID = [];

public lkpArrSHAPE_ID = [];

public lkpArrGetAPP_ID(CODE: any): any {
var rec = this.lkpArrAPP_ID.find((x:any) => x.CODE === CODE);
return rec;
}

public lkpArrGetDISPLAY_ID(CODE: any): any {
var rec = this.lkpArrDISPLAY_ID.find((x:any) => x.CODE === CODE);
return rec;
}

public lkpArrGetSHAPE_ID(CODE: any): any {
var rec = this.lkpArrSHAPE_ID.find((x:any) => x.CODE === CODE);
return rec;
}


public printScreen(){
  window.print();
}
   public handleComponentConfig(ComponentConfig:any) {

      if (typeof ComponentConfig !== "undefined") {
         if (this.paramConfig.DEBUG_FLAG) console.log("ScdAlarmSortScdAssAlarmSortResultsGrid ComponentConfig:", ComponentConfig);
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




async WHEN_VALIDATE_ITEM_SORT_ID(formGroup) {

 this.FORM_TRIGGER_FAILURE = false ; 
 if (typeof this.formGroup.controls['SORT_ID'] != "undefined" ) 
      this.formGroup.controls['SORT_ID'].setErrors({invalid: true}); 
 // Code goes here 
 

 if ( this.FORM_TRIGGER_FAILURE == true) 
 return; 
 
 if (typeof this.formGroup.controls['SORT_ID'] != "undefined" ) 
     this.formGroup.get('SORT_ID').updateValueAndValidity();
 this.formGroup.updateValueAndValidity(); 
 }

 async ON_CLICK_SORT_ID(event){

}

async WHEN_VALIDATE_ITEM_APP_ID(formGroup) {

 this.FORM_TRIGGER_FAILURE = false ; 
 if (typeof this.formGroup.controls['APP_ID'] != "undefined" ) 
      this.formGroup.controls['APP_ID'].setErrors({invalid: true}); 
 // Code goes here 
 

 if ( this.FORM_TRIGGER_FAILURE == true) 
 return; 
 
 if (typeof this.formGroup.controls['APP_ID'] != "undefined" ) 
     this.formGroup.get('APP_ID').updateValueAndValidity();
 this.formGroup.updateValueAndValidity(); 
 }

 async ON_CLICK_APP_ID(event){

}

async WHEN_VALIDATE_ITEM_SORT_BY_FIELD(formGroup) {

 this.FORM_TRIGGER_FAILURE = false ; 
 if (typeof this.formGroup.controls['SORT_BY_FIELD'] != "undefined" ) 
      this.formGroup.controls['SORT_BY_FIELD'].setErrors({invalid: true}); 
 // Code goes here 
 

 if ( this.FORM_TRIGGER_FAILURE == true) 
 return; 
 
 if (typeof this.formGroup.controls['SORT_BY_FIELD'] != "undefined" ) 
     this.formGroup.get('SORT_BY_FIELD').updateValueAndValidity();
 this.formGroup.updateValueAndValidity(); 
 }

 async ON_CLICK_SORT_BY_FIELD(event){

}

async WHEN_VALIDATE_ITEM_THEN_BY_FIELD_ASC_DESC(formGroup) {

 this.FORM_TRIGGER_FAILURE = false ; 
 if (typeof this.formGroup.controls['THEN_BY_FIELD_ASC_DESC'] != "undefined" ) 
      this.formGroup.controls['THEN_BY_FIELD_ASC_DESC'].setErrors({invalid: true}); 
 // Code goes here 
 

 if ( this.FORM_TRIGGER_FAILURE == true) 
 return; 
 
 if (typeof this.formGroup.controls['THEN_BY_FIELD_ASC_DESC'] != "undefined" ) 
     this.formGroup.get('THEN_BY_FIELD_ASC_DESC').updateValueAndValidity();
 this.formGroup.updateValueAndValidity(); 
 }

 async ON_CLICK_THEN_BY_FIELD_ASC_DESC(event){

}

async WHEN_VALIDATE_ITEM_DISPLAY_ID(formGroup) {

 this.FORM_TRIGGER_FAILURE = false ; 
 if (typeof this.formGroup.controls['DISPLAY_ID'] != "undefined" ) 
      this.formGroup.controls['DISPLAY_ID'].setErrors({invalid: true}); 
 // Code goes here 
 

 if ( this.FORM_TRIGGER_FAILURE == true) 
 return; 
 
 if (typeof this.formGroup.controls['DISPLAY_ID'] != "undefined" ) 
     this.formGroup.get('DISPLAY_ID').updateValueAndValidity();
 this.formGroup.updateValueAndValidity(); 
 }

 async ON_CLICK_DISPLAY_ID(event){

}

async WHEN_VALIDATE_ITEM_SORT_BY_FIELD_ASC_DESC(formGroup) {

 this.FORM_TRIGGER_FAILURE = false ; 
 if (typeof this.formGroup.controls['SORT_BY_FIELD_ASC_DESC'] != "undefined" ) 
      this.formGroup.controls['SORT_BY_FIELD_ASC_DESC'].setErrors({invalid: true}); 
 // Code goes here 
 

 if ( this.FORM_TRIGGER_FAILURE == true) 
 return; 
 
 if (typeof this.formGroup.controls['SORT_BY_FIELD_ASC_DESC'] != "undefined" ) 
     this.formGroup.get('SORT_BY_FIELD_ASC_DESC').updateValueAndValidity();
 this.formGroup.updateValueAndValidity(); 
 }

 async ON_CLICK_SORT_BY_FIELD_ASC_DESC(event){

}

async WHEN_VALIDATE_ITEM_THEN_BY_2(formGroup) {

 this.FORM_TRIGGER_FAILURE = false ; 
 if (typeof this.formGroup.controls['THEN_BY_2'] != "undefined" ) 
      this.formGroup.controls['THEN_BY_2'].setErrors({invalid: true}); 
 // Code goes here 
 

 if ( this.FORM_TRIGGER_FAILURE == true) 
 return; 
 
 if (typeof this.formGroup.controls['THEN_BY_2'] != "undefined" ) 
     this.formGroup.get('THEN_BY_2').updateValueAndValidity();
 this.formGroup.updateValueAndValidity(); 
 }

 async ON_CLICK_THEN_BY_2(event){

}

async WHEN_VALIDATE_ITEM_SHAPE_ID(formGroup) {

 this.FORM_TRIGGER_FAILURE = false ; 
 if (typeof this.formGroup.controls['SHAPE_ID'] != "undefined" ) 
      this.formGroup.controls['SHAPE_ID'].setErrors({invalid: true}); 
 // Code goes here 
 

 if ( this.FORM_TRIGGER_FAILURE == true) 
 return; 
 
 if (typeof this.formGroup.controls['SHAPE_ID'] != "undefined" ) 
     this.formGroup.get('SHAPE_ID').updateValueAndValidity();
 this.formGroup.updateValueAndValidity(); 
 }

 async ON_CLICK_SHAPE_ID(event){

}

async WHEN_VALIDATE_ITEM_THEN_BY(formGroup) {

 this.FORM_TRIGGER_FAILURE = false ; 
 if (typeof this.formGroup.controls['THEN_BY'] != "undefined" ) 
      this.formGroup.controls['THEN_BY'].setErrors({invalid: true}); 
 // Code goes here 
 

 if ( this.FORM_TRIGGER_FAILURE == true) 
 return; 
 
 if (typeof this.formGroup.controls['THEN_BY'] != "undefined" ) 
     this.formGroup.get('THEN_BY').updateValueAndValidity();
 this.formGroup.updateValueAndValidity(); 
 }

 async ON_CLICK_THEN_BY(event){

}

async WHEN_VALIDATE_ITEM_THEN_BY_2_FIELD_ASC_DESC(formGroup) {

 this.FORM_TRIGGER_FAILURE = false ; 
 if (typeof this.formGroup.controls['THEN_BY_2_FIELD_ASC_DESC'] != "undefined" ) 
      this.formGroup.controls['THEN_BY_2_FIELD_ASC_DESC'].setErrors({invalid: true}); 
 // Code goes here 
 

 if ( this.FORM_TRIGGER_FAILURE == true) 
 return; 
 
 if (typeof this.formGroup.controls['THEN_BY_2_FIELD_ASC_DESC'] != "undefined" ) 
     this.formGroup.get('THEN_BY_2_FIELD_ASC_DESC').updateValueAndValidity();
 this.formGroup.updateValueAndValidity(); 
 }

 async ON_CLICK_THEN_BY_2_FIELD_ASC_DESC(event){

}
 
 async onBlur_SORT_ID() { 
  await this.WHEN_VALIDATE_ITEM_SORT_ID(this.formGroup); if ( this.FORM_TRIGGER_FAILURE) return;  
 } 
 async valueChangeAPP_ID(value: any) { 
 await this.WHEN_VALIDATE_ITEM_APP_ID(this.formGroup); if ( this.FORM_TRIGGER_FAILURE) return;  
 } 
 async onBlur_SORT_BY_FIELD() { 
  await this.WHEN_VALIDATE_ITEM_SORT_BY_FIELD(this.formGroup); if ( this.FORM_TRIGGER_FAILURE) return;  
 } 
 async onBlur_THEN_BY_FIELD_ASC_DESC() { 
  await this.WHEN_VALIDATE_ITEM_THEN_BY_FIELD_ASC_DESC(this.formGroup); if ( this.FORM_TRIGGER_FAILURE) return;  
 } 
 async valueChangeDISPLAY_ID(value: any) { 
 await this.WHEN_VALIDATE_ITEM_DISPLAY_ID(this.formGroup); if ( this.FORM_TRIGGER_FAILURE) return;  
 } 
 async onBlur_SORT_BY_FIELD_ASC_DESC() { 
  await this.WHEN_VALIDATE_ITEM_SORT_BY_FIELD_ASC_DESC(this.formGroup); if ( this.FORM_TRIGGER_FAILURE) return;  
 } 
 async onBlur_THEN_BY_2() { 
  await this.WHEN_VALIDATE_ITEM_THEN_BY_2(this.formGroup); if ( this.FORM_TRIGGER_FAILURE) return;  
 } 
 async valueChangeSHAPE_ID(value: any) { 
 await this.WHEN_VALIDATE_ITEM_SHAPE_ID(this.formGroup); if ( this.FORM_TRIGGER_FAILURE) return;  
 } 
 async onBlur_THEN_BY() { 
  await this.WHEN_VALIDATE_ITEM_THEN_BY(this.formGroup); if ( this.FORM_TRIGGER_FAILURE) return;  
 } 
 async onBlur_THEN_BY_2_FIELD_ASC_DESC() { 
  await this.WHEN_VALIDATE_ITEM_THEN_BY_2_FIELD_ASC_DESC(this.formGroup); if ( this.FORM_TRIGGER_FAILURE) return;  
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


