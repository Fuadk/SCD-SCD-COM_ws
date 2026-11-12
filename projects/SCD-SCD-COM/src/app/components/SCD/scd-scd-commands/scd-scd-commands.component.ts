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

import {   scdcommandsScdScdCommands , componentConfigDef } from '@modeldir/model';

// must invalidate table KEY by adding Validators.required otherwise add new as detail in master/detail screen won't work
 const createFormGroup = (dataItem:any) => new FormGroup({
'COMMAND_ID' : new FormControl(dataItem.COMMAND_ID  , ) ,
'NAME' : new FormControl(dataItem.NAME  ,   Validators.required ) ,
'DESCRIPTION' : new FormControl(dataItem.DESCRIPTION  ,   Validators.required ) ,
'SYNTAX' : new FormControl(dataItem.SYNTAX  ,   Validators.required ) ,
'CATEGORY' : new FormControl(dataItem.CATEGORY  , ) ,
'SUB_CATEGORY' : new FormControl(dataItem.SUB_CATEGORY  , ) 
});



const matches = (el:any, selector:any) => (el.matches || el.msMatchesSelector).call(el, selector);
declare function getParamConfig():any;
declare function setParamConfig(var1:any):any;
@Component({
  selector: 'app-scd-scd-commands',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './scd-scd-commands.component.html',
  standalone: false,
  styleUrls: ['./scd-scd-commands.component.scss'
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

export class ScdCommandsScdScdCommandsGridComponent implements OnInit,OnDestroy {
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
  
  	public  isCOMMAND_IDEnable : boolean = true; 

  
  public  isFilterable : boolean = false;
  public  isColumnMenu : boolean = false;
  public  gridHeight = "";

  public masterKeyArr = [];
  public masterKeyNameArr = [];
  private masterKey ="";
  private masterKeyName ="COMMAND_ID";
  private insertCMD = "INSERT_SCD_COMMANDS";
  private updateCMD = "UPDATE_SCD_COMMANDS";
  private deleteCMD =   "DELETE_SCD_COMMANDS";
  private getCMD = "GET_SCD_COMMANDS_QUERY";

  public  executeQueryresult:any;
  public title =  this.starServices.getNLS([],"SCD_SCD_COMMANDS.scdcommandsScdScdCommands.component_title","SCD COMMANDS");
  public PDFfileName = this.title + ".PDF";
  public ExcelfileName = this.title + ".xlsx";
  public componentConfig: componentConfigDef;
  public componentConfig_output: componentConfigDef;
  public compTitleMsg =  "SCD_SCD_COMMANDS.scdcommandsScdScdCommands";
  public editableMode = false;
  
  public WhereClause = "";
  public OrderByClause = "";

  public formattedWhere:any = null;
  public primarKeyReadOnlyArr = {isCOMMAND_IDreadOnly : false};  
  public paramConfig;
  public createFormGroupGrid = createFormGroup;

  public FORM_TRIGGER_FAILURE:any;
  public NOTFOUND:any;
  public disableEmitSave = false;
  public disableEmitReadCompleted = false;
  public children = ["any"];
  public masterParams:any;
public isPhonePortrait = false;
public visibleCOMMAND_ID = true;
public visibleNAME = true;
public visibleDESCRIPTION = true;
public visibleSYNTAX = true;
public visibleCATEGORY = true;
public visibleSUB_CATEGORY = true;

public compSelector = 'app-scd-scd-commands';

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
      this.componentConfig.insertable = true;
      this.componentConfig.removeable = true;
      this.componentConfig.updateable = true;       
      this.componentConfig.showToolBar = true;
      this.componentConfig.enabled = true;
      this.title = this.componentConfig.title ? this.componentConfig.title :this.starServices.getNLS([],"SCD_SCD_COMMANDS.scdcommandsScdScdCommands.component_title","SCD COMMANDS");
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
    if ( (grid.COMMAND_ID != "") &&   (typeof grid.COMMAND_ID != "undefined"))
    {
      this.masterKey = grid.COMMAND_ID;
      
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

  
  private gridInitialValues:any = new scdcommandsScdScdCommands();   

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
        !isTimePickerPopup && !isTimePickerSetButton 
        && (this.editedRowIndex != null && typeof this.editedRowIndex != "undefined" ) ) {
        this.saveCurrent();
    }
    else if (typeof this.formGroup !== "undefined") {
      this.formGroup.markAllAsTouched();
      this.formValidationChangedOutput.emit(this.formGroup.valid)
    }
  }
  

  public addHandler(): void {
    if (this.paramConfig.DEBUG_FLAG) console.log("addHandler:this.gridInitialValues:", 
        {...this.gridInitialValues});
    this.isNew = true;
    if (this.isSearch != true){
      this.setInitialValues();
    }
    this.starServices.addHandler_grid(this)
    this.setRequired();

    this.editableMode = true;

  if (this.formGroup.valid == false) {
        this.formGroup.markAllAsTouched()
        //setTimeout(() => {
          this.formValidationChangedOutput.emit(this.formGroup.valid)
        //}, 100)
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

      let masterKeyArr = [this.formGroup.value['COMMAND_ID']];
      let masterKeyNameArr = ['COMMAND_ID'];
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
      setTimeout(() => {
        for (let i = 0; i < GridData.data.length; i++) {
          this.POST_QUERY(GridData.data[i], i);
          if (this.att_arr.length != 0 || this.img_arr.length != 0 || this.svg_arr.length != 0) {
            this.starServices.callGetSaveAttachemts("fetch", GridData.data[i], this);
            this.starServices.att_img_populateArrs(GridData.data[i], this);
          }
        }
      }, 100)
      if (this.img_arr.length != 0){
        this.grid.data = [];
        await this.starServices.sleep(10);
        this.grid.data = GridData;
      }
      

      let componentConfig = new componentConfigDef();
      let masterParams = {
        data: GridData.data[0]
      }

      let masterKeyArr = [GridData.data[0]['COMMAND_ID']];
      let masterKeyNameArr = ['COMMAND_ID'];
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

       let masterKeyArr = [data['COMMAND_ID']];
      let masterKeyNameArr = ['COMMAND_ID'];
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
    if (this.paramConfig.DEBUG_FLAG) console.log("this.gridInitialValues:executeQuery:2:", 
        {...this.gridInitialValues});
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
this.lookupArrDef =[];
 if (this.lookupArrDef.length > 0)
   this.starServices.fetchLookups(this, this.lookupArrDef);
}


public printScreen(){
  window.print();
}
   public handleComponentConfig(ComponentConfig:any) {

      if (typeof ComponentConfig !== "undefined") {
         if (this.paramConfig.DEBUG_FLAG) console.log("ScdCommandsScdScdCommandsGrid ComponentConfig:", ComponentConfig);
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
   // 	if (!this.isChild){
// this.executeQuery(this.grid);
// 	}

this.grid.data = this.gridDataStatic.data;

}
async KEY_COMMIT(){
   

}
  async ON_CLICK(formGroup:any, P_INDEX:any){
     this.formtabs_1_SCD2_COMMAND_WIZRDOpen();
this.SCD2_COMMAND_WIZRDFormtabs_1Config = new componentConfigDef();
let masterParams = {
    data: formGroup
}
this.SCD2_COMMAND_WIZRDFormtabs_1Config.masterParams = masterParams;


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




async WHEN_VALIDATE_ITEM_COMMAND_ID(formGroup) {

 this.FORM_TRIGGER_FAILURE = false ; 
 if (typeof this.formGroup.controls['COMMAND_ID'] != "undefined" ) 
      this.formGroup.controls['COMMAND_ID'].setErrors({invalid: true}); 
 // Code goes here 
 

 if ( this.FORM_TRIGGER_FAILURE == true) 
 return; 
 
 if (typeof this.formGroup.controls['COMMAND_ID'] != "undefined" ) 
     this.formGroup.get('COMMAND_ID').updateValueAndValidity();
 this.formGroup.updateValueAndValidity(); 
 }

 async ON_CLICK_COMMAND_ID(event){

}

async WHEN_VALIDATE_ITEM_NAME(formGroup) {

 this.FORM_TRIGGER_FAILURE = false ; 
 if (typeof this.formGroup.controls['NAME'] != "undefined" ) 
      this.formGroup.controls['NAME'].setErrors({invalid: true}); 
 // Code goes here 
 

 if ( this.FORM_TRIGGER_FAILURE == true) 
 return; 
 
 if (typeof this.formGroup.controls['NAME'] != "undefined" ) 
     this.formGroup.get('NAME').updateValueAndValidity();
 this.formGroup.updateValueAndValidity(); 
 }

 async ON_CLICK_NAME(event){

}

async WHEN_VALIDATE_ITEM_DESCRIPTION(formGroup) {

 this.FORM_TRIGGER_FAILURE = false ; 
 if (typeof this.formGroup.controls['DESCRIPTION'] != "undefined" ) 
      this.formGroup.controls['DESCRIPTION'].setErrors({invalid: true}); 
 // Code goes here 
 

 if ( this.FORM_TRIGGER_FAILURE == true) 
 return; 
 
 if (typeof this.formGroup.controls['DESCRIPTION'] != "undefined" ) 
     this.formGroup.get('DESCRIPTION').updateValueAndValidity();
 this.formGroup.updateValueAndValidity(); 
 }

 async ON_CLICK_DESCRIPTION(event){

}

async WHEN_VALIDATE_ITEM_SYNTAX(formGroup) {

 this.FORM_TRIGGER_FAILURE = false ; 
 if (typeof this.formGroup.controls['SYNTAX'] != "undefined" ) 
      this.formGroup.controls['SYNTAX'].setErrors({invalid: true}); 
 // Code goes here 
 

 if ( this.FORM_TRIGGER_FAILURE == true) 
 return; 
 
 if (typeof this.formGroup.controls['SYNTAX'] != "undefined" ) 
     this.formGroup.get('SYNTAX').updateValueAndValidity();
 this.formGroup.updateValueAndValidity(); 
 }

 async ON_CLICK_SYNTAX(event){

}

async WHEN_VALIDATE_ITEM_CATEGORY(formGroup) {

 this.FORM_TRIGGER_FAILURE = false ; 
 if (typeof this.formGroup.controls['CATEGORY'] != "undefined" ) 
      this.formGroup.controls['CATEGORY'].setErrors({invalid: true}); 
 // Code goes here 
 

 if ( this.FORM_TRIGGER_FAILURE == true) 
 return; 
 
 if (typeof this.formGroup.controls['CATEGORY'] != "undefined" ) 
     this.formGroup.get('CATEGORY').updateValueAndValidity();
 this.formGroup.updateValueAndValidity(); 
 }

 async ON_CLICK_CATEGORY(event){

}

async WHEN_VALIDATE_ITEM_SUB_CATEGORY(formGroup) {

 this.FORM_TRIGGER_FAILURE = false ; 
 if (typeof this.formGroup.controls['SUB_CATEGORY'] != "undefined" ) 
      this.formGroup.controls['SUB_CATEGORY'].setErrors({invalid: true}); 
 // Code goes here 
 

 if ( this.FORM_TRIGGER_FAILURE == true) 
 return; 
 
 if (typeof this.formGroup.controls['SUB_CATEGORY'] != "undefined" ) 
     this.formGroup.get('SUB_CATEGORY').updateValueAndValidity();
 this.formGroup.updateValueAndValidity(); 
 }

 async ON_CLICK_SUB_CATEGORY(event){

}
 
 async onBlur_COMMAND_ID() { 
  await this.WHEN_VALIDATE_ITEM_COMMAND_ID(this.formGroup); if ( this.FORM_TRIGGER_FAILURE) return;  
 } 
 async onBlur_NAME() { 
  await this.WHEN_VALIDATE_ITEM_NAME(this.formGroup); if ( this.FORM_TRIGGER_FAILURE) return;  
 } 
 async onBlur_DESCRIPTION() { 
  await this.WHEN_VALIDATE_ITEM_DESCRIPTION(this.formGroup); if ( this.FORM_TRIGGER_FAILURE) return;  
 } 
 async onBlur_SYNTAX() { 
  await this.WHEN_VALIDATE_ITEM_SYNTAX(this.formGroup); if ( this.FORM_TRIGGER_FAILURE) return;  
 } 
 async onBlur_CATEGORY() { 
  await this.WHEN_VALIDATE_ITEM_CATEGORY(this.formGroup); if ( this.FORM_TRIGGER_FAILURE) return;  
 } 
 async onBlur_SUB_CATEGORY() { 
  await this.WHEN_VALIDATE_ITEM_SUB_CATEGORY(this.formGroup); if ( this.FORM_TRIGGER_FAILURE) return;  
 }
public formtabs_1_SCD2_COMMAND_WIZRDOpened = false;
public  SCD2_COMMAND_WIZRDFormtabs_1Config : componentConfigDef;
  public  formtabs_1_SCD2_COMMAND_WIZRDClose() { 
    this.formtabs_1_SCD2_COMMAND_WIZRDOpened = false;  
  }
  public  formtabs_1_SCD2_COMMAND_WIZRDOpen() { 
    this.formtabs_1_SCD2_COMMAND_WIZRDOpened = true;  
  }
public onComponentConfig_Output(ComponentConfig)
  {
  if (typeof ComponentConfig !== 'undefined'){
    this.setComponentConfig_Output.emit(ComponentConfig);
    if (ComponentConfig.hideComponents != null) { 
      for (let i=0; i < ComponentConfig.hideComponents.length;i++){
        let comp = ComponentConfig.hideComponents[i];
        let comp_name = 'hide_comp_' + comp;
        this[comp_name] = !this[comp_name];
      }
    }
  }
}
public gridDataStatic = {
  "data": [
    {
      "COMMAND_ID": 1,
      "NAME": "=",
      "DESCRIPTION": "Writes the value resulting from an expression to a tag.",
      "SYNTAX": "[&&]<tag> = <expression>",
      "CATEGORY": "System",
      "SUB_CATEGORY": "Tag and Database"
    },
    {
      "COMMAND_ID": 2,
      "NAME": "Abort",
      "DESCRIPTION": "Closes the specified item.",
      "SYNTAX": "Abort [Me | display | * [/D]]",
      "CATEGORY": "Graphics Display",
      "SUB_CATEGORY": "Navigation"
    },
    {
      "COMMAND_ID": 3,
      "NAME": "AE_Acknowledge",
      "DESCRIPTION": "Acknowledges one or more alarms.",
      "SYNTAX": "AE_Acknowledge <alarms_source> [/P]",
      "CATEGORY": "Alarm and Event",
      "SUB_CATEGORY": null
    },
    {
      "COMMAND_ID": 4,
      "NAME": "AE_ClearCount",
      "DESCRIPTION": "Clears alarms count of one or more alarms.",
      "SYNTAX": "AE_ClearCount <alarms_source> [/P]",
      "CATEGORY": "Alarm and Event",
      "SUB_CATEGORY": null
    },
    {
      "COMMAND_ID": 5,
      "NAME": "AE_Disable",
      "DESCRIPTION": "Disables one or more alarms.",
      "SYNTAX": "AE_Disable <alarm_source> [/P]",
      "CATEGORY": "Alarm and Event",
      "SUB_CATEGORY": null
    },
    {
      "COMMAND_ID": 6,
      "NAME": "AE_Enable",
      "DESCRIPTION": "Enables one or more alarms.",
      "SYNTAX": "AE_Enable <alarm_source> [/P]",
      "CATEGORY": "Alarm and Event",
      "SUB_CATEGORY": null
    },
    {
      "COMMAND_ID": 7,
      "NAME": "AE_Remark",
      "DESCRIPTION": "Adds a remark to Factory Talk Alarm and Event history log.",
      "SYNTAX": "AE_Remark <alarm server> [/Ccomment] [/Ttag_name] [/P]",
      "CATEGORY": "Alarm and Event",
      "SUB_CATEGORY": null
    },
    {
      "COMMAND_ID": 8,
      "NAME": "AE_Reset",
      "DESCRIPTION": "Resets one or more alarms.",
      "SYNTAX": "AE_Reset <alarm_source> [/P]",
      "CATEGORY": "Alarm and Event",
      "SUB_CATEGORY": null
    },
    {
      "COMMAND_ID": 9,
      "NAME": "AE_Shelve",
      "DESCRIPTION": "Shelves one or more alarms.",
      "SYNTAX": "AE_Shelve <alarm_source> </Dduration> [/P]",
      "CATEGORY": "Alarm and Event",
      "SUB_CATEGORY": null
    },
    {
      "COMMAND_ID": 10,
      "NAME": "AE_Suppress",
      "DESCRIPTION": "Suppresses one or more alarms.",
      "SYNTAX": "AE_Suppress <alarm_source> [/P]",
      "CATEGORY": "Alarm and Event",
      "SUB_CATEGORY": null
    },
    {
      "COMMAND_ID": 11,
      "NAME": "AE_Unshelve",
      "DESCRIPTION": "Unshelves one or more alarms.",
      "SYNTAX": "AE_Unshelve <alarm_source> [/P]",
      "CATEGORY": "Alarm and Event",
      "SUB_CATEGORY": null
    },
    {
      "COMMAND_ID": 12,
      "NAME": "AE_Unsuppress",
      "DESCRIPTION": "Unsuppresses one or more alarms.",
      "SYNTAX": "AE_Unsuppress <alarm_source> [/P]",
      "CATEGORY": "Alarm and Event",
      "SUB_CATEGORY": null
    },
    {
      "COMMAND_ID": 13,
      "NAME": "AppAbort",
      "DESCRIPTION": "Closes the specified Windows application.",
      "SYNTAX": "AppAbort <program>",
      "CATEGORY": "System",
      "SUB_CATEGORY": "External Applications"
    },
    {
      "COMMAND_ID": 14,
      "NAME": "AppActivate",
      "DESCRIPTION": "Activates (pulls forward) the specified Windows application.",
      "SYNTAX": "AppActivate <program>",
      "CATEGORY": "System",
      "SUB_CATEGORY": "External Applications"
    },
    {
      "COMMAND_ID": 15,
      "NAME": "AppStart",
      "DESCRIPTION": "Runs the specified Windows application.",
      "SYNTAX": "AppStart <program>",
      "CATEGORY": "System",
      "SUB_CATEGORY": "External Applications"
    },
    {
      "COMMAND_ID": 16,
      "NAME": "Beep",
      "DESCRIPTION": "Plays the wave file assigned in Windows to the default sound event.",
      "SYNTAX": "Beep",
      "CATEGORY": "System",
      "SUB_CATEGORY": "Multimedia"
    },
    {
      "COMMAND_ID": 17,
      "NAME": "DataLogChangeRate",
      "DESCRIPTION": "Changes the periodic logging interval.",
      "SYNTAX": "DataLogChangeRate <file> <value> [units]",
      "CATEGORY": "Data Log",
      "SUB_CATEGORY": ""
    },
    {
      "COMMAND_ID": 18,
      "NAME": "DataLogMergeToPrimary",
      "DESCRIPTION": "Merges data in the secondary path to the primary path.",
      "SYNTAX": "DataLogMergeToPrimary <file> or *",
      "CATEGORY": "Data Log",
      "SUB_CATEGORY": ""
    },
    {
      "COMMAND_ID": 19,
      "NAME": "DataLogNewFile",
      "DESCRIPTION": "Creates a new data log file in the specified model.",
      "SYNTAX": "DataLogNewFile <file> or *",
      "CATEGORY": "Data Log",
      "SUB_CATEGORY": ""
    },
    {
      "COMMAND_ID": 20,
      "NAME": "DataLogOff",
      "DESCRIPTION": "Stops data logging for the specified Model.",
      "SYNTAX": "DataLogOff <file>",
      "CATEGORY": "Data Log",
      "SUB_CATEGORY": ""
    },
    {
      "COMMAND_ID": 21,
      "NAME": "DataLogOn",
      "DESCRIPTION": "Starts data logging for the specified Model.",
      "SYNTAX": "DataLogOn <file>",
      "CATEGORY": "Data Log",
      "SUB_CATEGORY": ""
    },
    {
      "COMMAND_ID": 22,
      "NAME": "DataLogRenameFile",
      "DESCRIPTION": "Specifies a new name for the logged files.",
      "SYNTAX": "DataLogRenameFile <file> <LogFileIDString>",
      "CATEGORY": "Data Log",
      "SUB_CATEGORY": ""
    },
    {
      "COMMAND_ID": 23,
      "NAME": "DataLogSnapshot",
      "DESCRIPTION": "Logs tag values to the data log file for the specified Model.",
      "SYNTAX": "DataLogSnapshot <file> or *",
      "CATEGORY": "Data Log",
      "SUB_CATEGORY": ""
    },
    {
      "COMMAND_ID": 24,
      "NAME": "DataLogSwitchBack",
      "DESCRIPTION": "Switches from logging in the secondary path back to the primary path.",
      "SYNTAX": "DataLogSwitchBack <file> or *",
      "CATEGORY": "Data Log",
      "SUB_CATEGORY": ""
    },
    {
      "COMMAND_ID": 25,
      "NAME": "DDEExecute",
      "DESCRIPTION": "Sends a command or series of commands to an application through a DDE channel.",
      "SYNTAX": "DDEExecute <application>|<topic> <command>",
      "CATEGORY": "System",
      "SUB_CATEGORY": "External Applications"
    },
    {
      "COMMAND_ID": 26,
      "NAME": "Define",
      "DESCRIPTION": "Creates a symbol.",
      "SYNTAX": "Define <symbol> [string]",
      "CATEGORY": "System",
      "SUB_CATEGORY": "Framework"
    },
    {
      "COMMAND_ID": 27,
      "NAME": "DerivedOff",
      "DESCRIPTION": "Stops running the specified derived tag file.",
      "SYNTAX": "DerivedOff <file>",
      "CATEGORY": "Logic and Control",
      "SUB_CATEGORY": "Derived Tags"
    },
    {
      "COMMAND_ID": 28,
      "NAME": "DerivedOn",
      "DESCRIPTION": "Starts running the specified derived tag file.",
      "SYNTAX": "DerivedOn <file>",
      "CATEGORY": "Logic and Control",
      "SUB_CATEGORY": "Derived Tags"
    },
    {
      "COMMAND_ID": 29,
      "NAME": "Display",
      "DESCRIPTION": "Opens and runs the specified graphic display file.",
      "SYNTAX": "Display <display> [/B][/E] [/U] [/0][/Z][/ZA] [/Pfile] [/T <tag>,<tag>....] [/Hnnn] [/Wnnn] [/Min] [/Max] [/M] [position]",
      "CATEGORY": "Graphics Display",
      "SUB_CATEGORY": "Navigation"
    },
    {
      "COMMAND_ID": 30,
      "NAME": "DisplayClientClose",
      "DESCRIPTION": "Close the specified Active Display Client window.",
      "SYNTAX": "DisplayClientClose <parameter>",
      "CATEGORY": "Logic and Control",
      "SUB_CATEGORY": "Display Client"
    },
    {
      "COMMAND_ID": 31,
      "NAME": "DisplayClientOpen",
      "DESCRIPTION": "Open the specified Active Display Client window.",
      "SYNTAX": "DisplayClientOpen <[display_station_path]filename>",
      "CATEGORY": "Logic and Control",
      "SUB_CATEGORY": "Display Client"
    },
    {
      "COMMAND_ID": 32,
      "NAME": "DisplayNavigationHistory",
      "DESCRIPTION": "Displays a list of previously opened screens.",
      "SYNTAX": "DisplayNavigationHistory",
      "CATEGORY": "Graphics Display",
      "SUB_CATEGORY": "Navigation"
    },
    {
      "COMMAND_ID": 33,
      "NAME": "DisplayNextScreen",
      "DESCRIPTION": "Opens the next graphic display in navigation history.",
      "SYNTAX": "DisplayNextScreen",
      "CATEGORY": "Graphics Display",
      "SUB_CATEGORY": "Navigation"
    },
    {
      "COMMAND_ID": 34,
      "NAME": "DisplayPreviousScreen",
      "DESCRIPTION": "Opens the previous graphic display in navigation history.",
      "SYNTAX": "DisplayPreviousScreen",
      "CATEGORY": "Graphics Display",
      "SUB_CATEGORY": "Navigation"
    },
    {
      "COMMAND_ID": 35,
      "NAME": "Download",
      "DESCRIPTION": "Writes the value in the selected input field of the active graphic display to the programmable controller.",
      "SYNTAX": "Download",
      "CATEGORY": "Legacy Recipes",
      "SUB_CATEGORY": ""
    },
    {
      "COMMAND_ID": 36,
      "NAME": "DownloadAll",
      "DESCRIPTION": "Writes the values in all input fields of the active graphic display to the programmable controller.",
      "SYNTAX": "DownloadAll",
      "CATEGORY": "Legacy Recipes",
      "SUB_CATEGORY": ""
    },
    {
      "COMMAND_ID": 37,
      "NAME": "EventOff",
      "DESCRIPTION": "Stops running the specified event file.",
      "SYNTAX": "EventOff <file>",
      "CATEGORY": "Logic and Control",
      "SUB_CATEGORY": "Events"
    },
    {
      "COMMAND_ID": 38,
      "NAME": "EventOn",
      "DESCRIPTION": "Starts running the specified event file.",
      "SYNTAX": "EventOn <file>",
      "CATEGORY": "Logic and Control",
      "SUB_CATEGORY": "Events"
    },
    {
      "COMMAND_ID": 39,
      "NAME": "FlushCache",
      "DESCRIPTION": "Unloads graphic displays from the display cache.",
      "SYNTAX": "FlushCache [file]",
      "CATEGORY": "Graphics Display",
      "SUB_CATEGORY": "Cache"
    },
    {
      "COMMAND_ID": 40,
      "NAME": "Help",
      "DESCRIPTION": "Displays the help file and word requested.",
      "SYNTAX": "Help [search word] [/Ffile]",
      "CATEGORY": "System",
      "SUB_CATEGORY": "Framework"
    },
    {
      "COMMAND_ID": 41,
      "NAME": "IF",
      "DESCRIPTION": "Execute command conditionally based on the result of an expression.",
      "SYNTAX": "IF <expression> THEN <command>; <command>;.. [ELSE <command>; <command>;...] ENDIF",
      "CATEGORY": "Logic and Control",
      "SUB_CATEGORY": "Flow Control"
    },
    {
      "COMMAND_ID": 42,
      "NAME": "Invoke",
      "DESCRIPTION": "Invokes a method on the specified ActiveX control.",
      "SYNTAX": "Invoke <parameters>",
      "CATEGORY": "Graphics Display",
      "SUB_CATEGORY": "Object Methods"
    },
    {
      "COMMAND_ID": 43,
      "NAME": "Key",
      "DESCRIPTION": "Starts or stops running a client key file.",
      "SYNTAX": "Key <file or /R>",
      "CATEGORY": "Logic and Control",
      "SUB_CATEGORY": "Client Keys"
    },
    {
      "COMMAND_ID": 44,
      "NAME": "Language",
      "DESCRIPTION": "Changes a client's language.",
      "SYNTAX": "Language <Language ID>",
      "CATEGORY": "System",
      "SUB_CATEGORY": "Languages"
    },
    {
      "COMMAND_ID": 45,
      "NAME": "Login",
      "DESCRIPTION": "Displays the Login dialog box so a user can log onto the system.",
      "SYNTAX": "Login [username] [password]",
      "CATEGORY": "System",
      "SUB_CATEGORY": "Security"
    },
    {
      "COMMAND_ID": 46,
      "NAME": "Logout",
      "DESCRIPTION": "Signs the current user off the system.",
      "SYNTAX": "Logout",
      "CATEGORY": "System",
      "SUB_CATEGORY": "Security"
    },
    {
      "COMMAND_ID": 47,
      "NAME": "NextPosition",
      "DESCRIPTION": "Moves focus to the object with the next highest index number.",
      "SYNTAX": "NextPosition",
      "CATEGORY": "Graphics Display",
      "SUB_CATEGORY": "Cursor Movement"
    },
    {
      "COMMAND_ID": 48,
      "NAME": "NextWindow",
      "DESCRIPTION": "Moves focus to another open graphic display.",
      "SYNTAX": "NextWindow",
      "CATEGORY": "Graphics Display",
      "SUB_CATEGORY": "Navigation"
    },
    {
      "COMMAND_ID": 49,
      "NAME": "OpenRSLogix5000",
      "DESCRIPTION": "Opens the RSLogix 5000 program and displays the specified routine.",
      "SYNTAX": "OpenRSLogix5000 <project> <program> <routine> [/RNrung_number] [/Rlrung_identifier]",
      "CATEGORY": "System",
      "SUB_CATEGORY": "External Applications"
    },
    {
      "COMMAND_ID": 50,
      "NAME": "Password",
      "DESCRIPTION": "Displays the Password dialog box so a user can change password.",
      "SYNTAX": "Password",
      "CATEGORY": "System",
      "SUB_CATEGORY": "Security"
    },
    {
      "COMMAND_ID": 51,
      "NAME": "Pause",
      "DESCRIPTION": "Pauses Macro and Command execution for the specified time.",
      "SYNTAX": "Pause <Seconds>",
      "CATEGORY": "System",
      "SUB_CATEGORY": "Framework"
    },
    {
      "COMMAND_ID": 52,
      "NAME": "Pin",
      "DESCRIPTION": "Pins the active window on top.",
      "SYNTAX": "Pin",
      "CATEGORY": "Graphics Display",
      "SUB_CATEGORY": "Navigation"
    },
    {
      "COMMAND_ID": 53,
      "NAME": "PlayWave",
      "DESCRIPTION": "Plays the specified wave file.",
      "SYNTAX": "PlayWave <file>",
      "CATEGORY": "System",
      "SUB_CATEGORY": "Multimedia"
    },
    {
      "COMMAND_ID": 54,
      "NAME": "Position",
      "DESCRIPTION": "Moves focus to the object with the specified index number.",
      "SYNTAX": "Position <n>",
      "CATEGORY": "Graphics Display",
      "SUB_CATEGORY": "Cursor Movement"
    },
    {
      "COMMAND_ID": 55,
      "NAME": "PrevPosition",
      "DESCRIPTION": "Moves focus to the object with the previous index number.",
      "SYNTAX": "PrevPosition",
      "CATEGORY": "Graphics Display",
      "SUB_CATEGORY": "Cursor Movement"
    },
    {
      "COMMAND_ID": 56,
      "NAME": "PrevWindow",
      "DESCRIPTION": "Moves focus to another open graphic display.",
      "SYNTAX": "PrevWindow",
      "CATEGORY": "Graphics Display",
      "SUB_CATEGORY": "Navigation"
    },
    {
      "COMMAND_ID": 57,
      "NAME": "PrintDisplay",
      "DESCRIPTION": "Prints the graphic display.",
      "SYNTAX": "PrintDisplay <Meldisplay> [/Wait=ttt] [/U][/P<component>][/T<tag>,<tag>...] [/F<file>]",
      "CATEGORY": "System",
      "SUB_CATEGORY": "Framework"
    },
    {
      "COMMAND_ID": 58,
      "NAME": "PullForward",
      "DESCRIPTION": "Moves the specified file in front of all other windows.",
      "SYNTAX": "PullForward <file>",
      "CATEGORY": "Graphics Display",
      "SUB_CATEGORY": "Navigation"
    },
    {
      "COMMAND_ID": 59,
      "NAME": "PushBack",
      "DESCRIPTION": "Moves the specified file behind all other windows.",
      "SYNTAX": "PushBack <file>",
      "CATEGORY": "Graphics Display",
      "SUB_CATEGORY": "Navigation"
    },
    {
      "COMMAND_ID": 60,
      "NAME": "Ramp",
      "DESCRIPTION": "Increases or decreases an analog tag's value by a particular value or by another tag's value.",
      "SYNTAX": "Ramp [/V] <tag> <valuetag>",
      "CATEGORY": "System",
      "SUB_CATEGORY": "Tag and Database"
    },
    {
      "COMMAND_ID": 61,
      "NAME": "RecipeProDownload",
      "DESCRIPTION": "Downloads specified recipe.",
      "SYNTAX": "RecipeProDownload <recipe_file> | <variable_recipe> [/Sstatus_tag] [/Rrecipename_tag]",
      "CATEGORY": "RecipesPro+",
      "SUB_CATEGORY": ""
    },
    {
      "COMMAND_ID": 62,
      "NAME": "RecipeProEdit",
      "DESCRIPTION": "Opens the RecipePro + editor.",
      "SYNTAX": "RecipeProEdit [/Rrecipename_tag]",
      "CATEGORY": "RecipesPro+",
      "SUB_CATEGORY": ""
    },
    {
      "COMMAND_ID": 63,
      "NAME": "RecipeProList",
      "DESCRIPTION": "Opens the RecipePro+ List.",
      "SYNTAX": "RecipeProList [/Ffile_filter] [/Rrecipename_tag]",
      "CATEGORY": "RecipesPro+",
      "SUB_CATEGORY": ""
    },
    {
      "COMMAND_ID": 64,
      "NAME": "RecipeProUpload",
      "DESCRIPTION": "Uploads specified recipe.",
      "SYNTAX": "RecipeProUpload <recipe_file> | <variable_recipe> [/Sstatus_tag]",
      "CATEGORY": "RecipesPro+",
      "SUB_CATEGORY": ""
    },
    {
      "COMMAND_ID": 65,
      "NAME": "RecipeRestore",
      "DESCRIPTION": "Reads the tag values from a recipe file into all input fields in the active graphic display.",
      "SYNTAX": "RecipeRestore <file>",
      "CATEGORY": "Legacy Recipes",
      "SUB_CATEGORY": ""
    },
    {
      "COMMAND_ID": 66,
      "NAME": "RecipeSave",
      "DESCRIPTION": "Saves the values in all input fields of the active graphic display to a recipe file.",
      "SYNTAX": "RecipeSave <file>",
      "CATEGORY": "Legacy Recipes",
      "SUB_CATEGORY": ""
    },
    {
      "COMMAND_ID": 67,
      "NAME": "Remark",
      "DESCRIPTION": "Logs text to an activity log file.",
      "SYNTAX": "Remark <comment>",
      "CATEGORY": "System",
      "SUB_CATEGORY": "Activity Log"
    },
    {
      "COMMAND_ID": 68,
      "NAME": "ScreenPrint",
      "DESCRIPTION": "Generates a screen print on the printer specified in Windows.",
      "SYNTAX": "ScreenPrint [/F <file>]",
      "CATEGORY": "System",
      "SUB_CATEGORY": "Framework"
    },
    {
      "COMMAND_ID": 69,
      "NAME": "SendKeys",
      "DESCRIPTION": "Sends the specified keystrokes to the active window, whether a graphic display, a command line, an RSView32 VBA Scripting Integrated Development Environment Windows or another application.",
      "SYNTAX": "SendKeys <keystring>",
      "CATEGORY": "System",
      "SUB_CATEGORY": "Framework"
    },
    {
      "COMMAND_ID": 70,
      "NAME": "Set",
      "DESCRIPTION": "Writes a value to a tag.",
      "SYNTAX": "[&&]Set [/V] <tag> <valuetag>",
      "CATEGORY": "System",
      "SUB_CATEGORY": "Tag and Database"
    },
    {
      "COMMAND_ID": 71,
      "NAME": "SetFocus",
      "DESCRIPTION": "Sets the focus to the specified graphic display.",
      "SYNTAX": "SetFocus <file>",
      "CATEGORY": "Graphics Display",
      "SUB_CATEGORY": "Navigation"
    },
    {
      "COMMAND_ID": 72,
      "NAME": "Toggle",
      "DESCRIPTION": "Reads the specified tag's value and writes back a 1 or 0.",
      "SYNTAX": "Toggle [/V] <tag>",
      "CATEGORY": "System",
      "SUB_CATEGORY": "Tag and Database"
    },
    {
      "COMMAND_ID": 73,
      "NAME": "Undefine",
      "DESCRIPTION": "Deletes a symbol definition.",
      "SYNTAX": "Undefine <symbol>",
      "CATEGORY": "System",
      "SUB_CATEGORY": "Framework"
    },
    {
      "COMMAND_ID": 74,
      "NAME": "Unpin",
      "DESCRIPTION": "Unpins one or more windows from top.",
      "SYNTAX": "Unpin [*]",
      "CATEGORY": "Graphics Display",
      "SUB_CATEGORY": "Navigation"
    },
    {
      "COMMAND_ID": 75,
      "NAME": "Upload",
      "DESCRIPTION": "Reads a value from the programmable controller and displays it in the selected input field of the active graphic display.",
      "SYNTAX": "Upload",
      "CATEGORY": "Legacy Recipes",
      "SUB_CATEGORY": ""
    },
    {
      "COMMAND_ID": 76,
      "NAME": "UploadAll",
      "DESCRIPTION": "Reads values from the programmable controller and displays them in all input fields of the active graphic display.",
      "SYNTAX": "UploadAll",
      "CATEGORY": "Legacy Recipes",
      "SUB_CATEGORY": ""
    }
  ],
  "total": 76
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
public svg_arr = [];
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


