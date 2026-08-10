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

import {   dspbatchFilesDspBatchDspBatchFilesGrid , componentConfigDef } from '@modeldir/model';

// must invalidate table KEY by adding Validators.required otherwise add new as detail in master/detail screen won't work
 const createFormGroup = (dataItem:any) => new FormGroup({
'BATCH_ID' : new FormControl(dataItem.BATCH_ID  ,   Validators.required ) ,
'FILE_NAME' : new FormControl(dataItem.FILE_NAME  ,   Validators.required ) ,
'DATA_NAME' : new FormControl(dataItem.DATA_NAME  ,   Validators.required ) ,
'LINK_FIELD' : new FormControl(dataItem.LINK_FIELD  , ) ,
'AREA_TYPE' : new FormControl(dataItem.AREA_TYPE  , ) ,
'MASTER_FILE' : new FormControl(dataItem.MASTER_FILE  , ) ,
'LOGNAME' : new FormControl(dataItem.LOGNAME  , ) ,
'LOGDATE' : new FormControl(dataItem.LOGDATE  , ) 
});



const matches = (el:any, selector:any) => (el.matches || el.msMatchesSelector).call(el, selector);
declare function getParamConfig():any;
declare function setParamConfig(var1:any):any;
@Component({
  selector: 'app-dsp-batch-dsp-batch-files-grid',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './dsp-batch-dsp-batch-files-grid.component.html',
  styleUrls: ['./dsp-batch-dsp-batch-files-grid.component.scss'
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

export class DspBatchFilesDspBatchDspBatchFilesGridGridComponent implements OnInit,OnDestroy {
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
  private isNew!: boolean;
  public isSearch!: boolean;
  public isChild: boolean = false;
  public isMaster: boolean = false;
  
  		public  isBATCH_IDEnable : boolean = true; 
public  isFILE_NAMEEnable : boolean = true; 

  public  isFilterable : boolean = false;
  public  isColumnMenu : boolean = false;
  public  gridHeight = "400";

  private masterKeyArr = [];
  private masterKeyNameArr = [];
  private masterKey ="";
  private masterKeyName ="BATCH_ID";
  private insertCMD = "INSERT_DSP_BATCH_FILES";
  private updateCMD = "UPDATE_DSP_BATCH_FILES";
  private deleteCMD =   "DELETE_DSP_BATCH_FILES";
  private getCMD = "GET_DSP_BATCH_FILES_QUERY";

  public  executeQueryresult:any;
  public title =  this.starServices.getNLS([],"dsp_batch_DSP_BATCH_FILES_GRID.dspbatchFilesDspBatchDspBatchFilesGrid.component_title","Dsp Batch Files Dsp Batch Dsp Batch Files Grid");
  public PDFfileName = this.title + ".PDF";
  public ExcelfileName = this.title + ".xlsx";
  public componentConfig: componentConfigDef;
  public editableMode = false;
  
  public WhereClause = "";
  public OrderByClause = "";

  public formattedWhere:any = null;
  public primarKeyReadOnlyArr = {isBATCH_IDreadOnly : false , isFILE_NAMEreadOnly : false};  
  public paramConfig;
  public createFormGroupGrid = createFormGroup;
  public templateInfo;

  public FORM_TRIGGER_FAILURE:any;
  public NOTFOUND:any;
  public disableEmitSave = false;
  public disableEmitReadCompleted = false;
  public children = ["any"];
  public masterParams:any;
public isPhonePortrait = false;
public compSelector = 'app-dsp-batch-dsp-batch-files-grid';

  private Body:any =[];
  @Output() readCompletedOutput: EventEmitter<any> = new EventEmitter();
  @Output() clearCompletedOutput: EventEmitter<any> = new EventEmitter();
  @Output() saveCompletedOutput: EventEmitter<any> = new EventEmitter();

    constructor(public router: Router,public intl: IntlService, public responsive: BreakpointObserver, private starNotify: StarNotifyService,  private starlib1: Starlib1, public starServices: starServices, private renderer: Renderer2) {
      this.router = router;
      this.paramConfig = getParamConfig();
      this.componentConfig = new componentConfigDef(); 
      //this.componentConfig.gridHeight =  "500";
      this.componentConfig.showTitle = true;
      this.componentConfig.queryable  = true;
      this.componentConfig.insertable = true;
      this.componentConfig.removeable = true;
      this.componentConfig.updateable = true;
      this.componentConfig.enabled = true;
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

  
  private gridInitialValues:any = new dspbatchFilesDspBatchDspBatchFilesGrid();   

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
  
  public async getDataNames(){
    let templateName = this.masterParams['TEMPLATE_NAME'];
    let body = [
      {
        "_QUERY": "GET_DSP_TEMPLATE",
        "TEMPLATE_NAME": templateName,
      }
    ]
    let data = await this.starServices.execSQLBody(this, body, "");
    if (this.paramConfig.DEBUG_FLAG) console.log("getDataNames:data:",data);
    if (typeof data != "undefined") {
      if (this.paramConfig.DEBUG_FLAG) console.log("getDataNames:data[0].data:",data[0].data);
      this.templateInfo = data[0].data[0];
      let formName = data[0].data[0].FORM_NAME;
      if (formName != ""){
        console.log("this.templateInfo.FORM_TYPE:", this.templateInfo.FORM_TYPE)
        if (this.templateInfo.FORM_TYPE == "FORM"){

        let lookupArrDef =[
          {"statment":"SELECT distinct AREA_DATA_NAME CODE, AREA_DATA_NAME CODETEXT_LANG, AREA_TYPE  FROM DSP_FORM_AREA WHERE FORM_NAME = '" + formName + "' order by CODETEXT_LANG ",
              "lkpArrName":"lkpArrDATA_NAME"},
          {"statment":"SELECT FIELD_ID CODE, FIELD_NAME CODETEXT_LANG, A.AREA_DATA_NAME from DSP_FORM_AREA A , DSP_FORM_FIELDS F "
              + " where A.FORM_NAME = F.FORM_NAME and A.PAGE_NO = F.PAGE_NO  and A.AREA_NO = F.AREA_NO AND A.FORM_NAME = '" + formName + "' order by CODETEXT_LANG " ,
              "lkpArrName":"lkpArrLINK_FIELD"}
          ];
          this.starServices.fetchLookups(this, lookupArrDef);
      }
        else  if (this.templateInfo.FORM_TYPE == "SCREEN"){
          ///
          let params = {};
           await this.starlib1.getScreenOrderFields(this, params, this.templateInfo.TEMPLATE_NAME);
      
          let fieldKeys = Object.keys(params);
              console.log("fieldKeys:",fieldKeys)
              this.lkpArrDATA_NAME = [];
              this.lkpArrLINK_FIELD = [];
              for (let j =0; j < fieldKeys.length;j++){
                let myArray = fieldKeys[j].split(".");
                var recExst = this.lkpArrDATA_NAME.find((x:any) => x.CODE === myArray[0]);
                if (typeof recExst == "undefined") {
                  let rec = {
                    CODE: myArray[0],
                    CODETEXT_LANG : myArray[0]
                  }
                  this.lkpArrDATA_NAME.push(rec)
                }

                let rec = {
                  CODE: myArray[1],
                  CODETEXT_LANG : myArray[1],
                  AREA_DATA_NAME : myArray[0]
                }
                this.lkpArrLINK_FIELD.push(rec)
              }
              console.log("this.lkpArrDATA_NAME:",this.lkpArrDATA_NAME, this.lkpArrLINK_FIELD)
        }

      }
    }

  }
  public getlkpArrLINK_FIELD(){
    let lkpArrLINK_FIELD=[];
    var recVal = this.formGroup.value;
    var DATA_NAME = recVal.DATA_NAME;
   
    for (let i=0;i<this.lkpArrLINK_FIELD.length;i++){
      if ( (this.lkpArrLINK_FIELD[i].AREA_DATA_NAME == DATA_NAME) || (this.lkpArrLINK_FIELD[i].CODE =="" ) ){
        lkpArrLINK_FIELD.push(this.lkpArrLINK_FIELD[i]);
      }
    }
    


    console.log("getlkpArrLINK_FIELD:", DATA_NAME, this.lkpArrLINK_FIELD,lkpArrLINK_FIELD )
    return lkpArrLINK_FIELD;
  }
  
  public addHandler(): void {
    this.getDataNames();
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

       let masterKeyArr = [data['BATCH_ID'],data['FILE_NAME']];
      let masterKeyNameArr = ['BATCH_ID','FILE_NAME'];
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
  this.setlookupArrDef();
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
this.lookupArrDef =[	{"statment":"SELECT FILE_NAME CODE, FILE_NAME CODETEXT_LANG  FROM DSP_BATCH_FILE_DEF  order by CODETEXT_LANG ",
			"lkpArrName":"lkpArrFILE_NAME"},
	 {"statment":"SELECT CODE, CODETEXT_LANG , PARTCODE FROM SOM_TABS_CODES WHERE CODENAME = 'YES_OR_NO'  and LANGUAGE_NAME = '" + this.userLang + "' order by CODETEXT_LANG ",
	 		"lkpArrName":"lkpArrMASTER_FILE"},
	// {"statment":"SELECT CODE, CODETEXT_LANG , PARTCODE FROM SOM_TABS_CODES WHERE CODENAME = \"LINK_FIELD\"  and LANGUAGE_NAME = '" + this.userLang + "' order by CODETEXT_LANG ",
	// 		"lkpArrName":"lkpArrLINK_FIELD"}
    ];
this.starServices.fetchLookups(this, this.lookupArrDef);
}

public lkpArrFILE_NAME = [];

public lkpArrDATA_NAME = [];

public lkpArrLINK_FIELD = [];
public lkpArrMASTER_FILE =[];

public lkpArrGetFILE_NAME(CODE: any): any {
var rec = this.lkpArrFILE_NAME.find((x:any) => x.CODE === CODE);
return rec;
}

public lkpArrGetDATA_NAME(CODE: any): any {
var rec = this.lkpArrDATA_NAME.find((x:any) => x.CODE === CODE);
return rec;
}

public lkpArrGetLINK_FIELD(CODE: any): any {
var rec = this.lkpArrLINK_FIELD.find((x:any) => x.CODE === CODE);
//console.log("lkpArrGetLINK_FIELD:", CODE, rec)
return rec;
}


public lkpArrGetMASTER_FILE(CODE: any): any {
  var rec = this.lkpArrMASTER_FILE.find((x:any) => x.CODE === CODE);
  //console.log("lkpArrGetLINK_FIELD:", CODE, rec)
  return rec;
  }
  
public printScreen(){
  window.print();
}
   public handleComponentConfig(ComponentConfig:any) {

      if (typeof ComponentConfig !== "undefined") {
         if (this.paramConfig.DEBUG_FLAG) console.log("DspBatchFilesDspBatchDspBatchFilesGridGrid ComponentConfig:", ComponentConfig);
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
public setAreaType(formGroup){
  let rec = this.lkpArrGetDATA_NAME(formGroup['DATA_NAME'])
 
  if (this.paramConfig.DEBUG_FLAG) console.log("WHEN_VALIDATE_ITEM_DATA_NAME rec:", rec, formGroup['DATA_NAME'],formGroup, this.lkpArrDATA_NAME );
 if (typeof rec !== "undefined"){
  let areaType = rec['AREA_TYPE'];
  if (this.paramConfig.DEBUG_FLAG) console.log("WHEN_VALIDATE_ITEM_DATA_NAME areaType:",  areaType );
  formGroup['AREA_TYPE'] = areaType;
  if (this.paramConfig.DEBUG_FLAG) console.log("WHEN_VALIDATE_ITEM_DATA_NAME formGroup:",  formGroup );
 }
 
}
   async PRE_INSERT(formGroup:any, P_INDEX:any){
    this.setAreaType(formGroup);
    await this.checkMatchFields(formGroup);
}
public checkMasterFiles(){
  let GridData:any;
    GridData = Object.assign([], this.grid.data);
    if (typeof GridData.data !== "undefined") {
    let i = 0;
    let Masters = 0;
    while (i < GridData.data.length) {
      
      if (GridData.data[i].MASTER_FILE == "Y")
        Masters++;
      if (this.paramConfig.DEBUG_FLAG) console.log ("GridData.data[i]:",i,Masters,  GridData.data[i].MASTER_FILE);
      i++;
    }
    if (Masters != 1 && GridData.data.length > 1){
      //this.formGroup.controls['MASTER_FILE'].setErrors({invalid: true}); 
      this.FORM_TRIGGER_FAILURE = true;
      let Msg = "One Master file should be set only.";
      this.starServices.showNotification ("error","error:" + Msg);
      var dialogStruc = {
        msg: Msg,
        title: "Error",
        info: null,
        object: this,
        action: this.starServices.OkActions,
        callback: null
      };
      this.starServices.showConfirmation(dialogStruc);
      this.FORM_TRIGGER_FAILURE = true;
    }
    else{
    //   this.formGroup.get('MASTER_FILE').updateValueAndValidity();
    //  this.formGroup.updateValueAndValidity(); 
    }
  }
}
async checkMatchFields(formGroup){
      let fileName = formGroup['FILE_NAME'];
      let areaDataName = formGroup['DATA_NAME'];
      if (this.paramConfig.DEBUG_FLAG) console.log("check PRE_UPDATE:", fileName )
      let body = [
        {
          "_QUERY": "GET_DSP_BATCH_FIELDS",
          "FILE_NAME": fileName,
          "REC_SEQ" : "%"
        }
      ]
      let data = await this.starServices.execSQLBody(this, body, "");
      if (this.paramConfig.DEBUG_FLAG) console.log("PRE_UPDATE:data:",data);
      let Msg = "";
      let notFound = false;
      let MatchesFound =0;
      let MatchString ="";
      if (typeof data != "undefined") {
        let fieldData = JSON.parse(data[0].data[0].FIELD_DATA);
        console.log("PRE_UPDATE:fieldData:", fieldData);
        const keys = Object.keys(fieldData)
    if (this.paramConfig.DEBUG_FLAG) console.log("PRE_UPDATE:keys:",keys, "this.lkpArrLINK_FIELD:",this.lkpArrLINK_FIELD)
          for (let i=0;i<keys.length;i++){
            let fieldName = keys[i];
            var rec = this.lkpArrLINK_FIELD.find((x:any) => x.CODE === fieldName && x.AREA_DATA_NAME === areaDataName );
            if (typeof rec != "undefined") {
              if (this.paramConfig.DEBUG_FLAG) console.log("PRE_UPDATE:found : fieldName:",fieldName, " areaDataName:", areaDataName)
                MatchesFound++;
              MatchString = MatchString + " : "  + fieldName  ;
                
            }
          }
          if (MatchesFound > 0){
            MatchString = "Found " + MatchesFound + " matching Fields  " + " for area : " + areaDataName + "  " + MatchString;
          }else{
            MatchString = "No matching fields Found for area : " +  areaDataName
        this.FORM_TRIGGER_FAILURE = true;
          }

          var dialogStruc = {
            msg: MatchString,
            title: "Info",
            info: null,
            object: this,
            action: this.starServices.OkActions,
            callback: null
          };
          this.starServices.showConfirmation(dialogStruc);


  }
}
async PRE_UPDATE(formGroup:any, P_INDEX:any){
  this.setAreaType(formGroup);
  if (P_INDEX == 0){
    this.checkMasterFiles();
  }

    await this.checkMatchFields(formGroup);
      return;
      
     
    
      


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
  this.getDataNames();
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
async WHEN_VALIDATE_ITEM_FILE_NAME(formGroup) {

 this.FORM_TRIGGER_FAILURE = false ; 
 this.formGroup.controls['FILE_NAME'].setErrors({invalid: true}); 
 // Code goes here 
 

 if ( this.FORM_TRIGGER_FAILURE == true) 
 return; 
 
 this.formGroup.get('FILE_NAME').updateValueAndValidity();
 this.formGroup.updateValueAndValidity(); 
 }
async WHEN_VALIDATE_ITEM_DATA_NAME(formGroup) {

 this.FORM_TRIGGER_FAILURE = false ; 
 this.formGroup.controls['DATA_NAME'].setErrors({invalid: true}); 
 // Code goes here 
 

 if ( this.FORM_TRIGGER_FAILURE == true) 
 return; 
 
 this.formGroup.get('DATA_NAME').updateValueAndValidity();
 this.formGroup.updateValueAndValidity(); 
 }

 public async getBatchFields(fileName, linkField){
  if (this.paramConfig.DEBUG_FLAG) console.log("getBatchFields:fileName:",fileName, "linkField:",linkField);
  let body = [
    {
      "_QUERY": "GET_DSP_BATCH_FIELDS",
      "FILE_NAME": fileName,
      "REC_SEQ" : "%"
    }
  ]
  let data = await this.starServices.execSQLBody(this, body, "");
  if (this.paramConfig.DEBUG_FLAG) console.log("getBatchFields:data:",data);
  let Msg = "";
  let notFound = false;
  if (typeof data != "undefined") {
    let fieldData = JSON.parse(data[0].data[0].FIELD_DATA);
    let fieldChek = fieldData[linkField];
    if (typeof fieldChek == "undefined") {
        notFound = true;
        const keys = Object.keys(fieldData)
        if (this.paramConfig.DEBUG_FLAG) console.log("getBatchFields:keys:",keys)
         Msg = linkField + " is not a field in file:" + fileName + ". Fields are : " + JSON.stringify(keys);
        this.starServices.showNotification ("error","error:" + Msg);
        var dialogStruc = {
          msg: Msg,
          title: "Error",
          info: null,
          object: this,
          action: this.starServices.OkActions,
          callback: null
        };
        this.starServices.showConfirmation(dialogStruc);
        if (this.paramConfig.DEBUG_FLAG) console.log("getBatchFields:fieldChek:", fieldChek)
    }
  }
  return notFound;
 }
 
 async WHEN_VALIDATE_ITEM_MASTER_FILE(formGroup) {

  this.FORM_TRIGGER_FAILURE = false ; 
  this.formGroup.controls['MASTER_FILE'].setErrors({invalid: true}); 
  // Code goes here 

 
  if ( this.FORM_TRIGGER_FAILURE == true) 
  return; 
  
  this.formGroup.get('MASTER_FILE').updateValueAndValidity();
  this.formGroup.updateValueAndValidity(); 
  }

async WHEN_VALIDATE_ITEM_LINK_FIELD(formGroup) {

 this.FORM_TRIGGER_FAILURE = false ; 
 this.formGroup.controls['LINK_FIELD'].setErrors({invalid: true}); 
 // Code goes here 
 if (this.paramConfig.DEBUG_FLAG) console.log("check LINK_FIELD:", formGroup.value['LINK_FIELD'] )
 if (formGroup.value['LINK_FIELD'] != ""){
 let notFound = await this.getBatchFields(formGroup.value['FILE_NAME'], formGroup.value['LINK_FIELD']);
 if (this.paramConfig.DEBUG_FLAG) console.log("notFound:", notFound)
  if (notFound){
   this.FORM_TRIGGER_FAILURE = true;
  }
}

 if ( this.FORM_TRIGGER_FAILURE == true) 
 return; 
 
 this.formGroup.get('LINK_FIELD').updateValueAndValidity();
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
 async valueChangeFILE_NAME(value: any) { 
 await this.WHEN_VALIDATE_ITEM_FILE_NAME(this.formGroup); if ( this.FORM_TRIGGER_FAILURE) return;  
 } 
 async valueChangeDATA_NAME(value: any) { 
 await this.WHEN_VALIDATE_ITEM_DATA_NAME(this.formGroup); if ( this.FORM_TRIGGER_FAILURE) return;  
 } 
 async valueChangeLINK_FIELD(value: any) { 
 await this.WHEN_VALIDATE_ITEM_LINK_FIELD(this.formGroup); if ( this.FORM_TRIGGER_FAILURE) return;  
 } 
 async onBlur_LOGNAME() { 
  await this.WHEN_VALIDATE_ITEM_LOGNAME(this.formGroup); if ( this.FORM_TRIGGER_FAILURE) return;  
 } 
 async valueChangeLOGDATE(value: any) { 
 await this.WHEN_VALIDATE_ITEM_LOGDATE(this.formGroup); if ( this.FORM_TRIGGER_FAILURE) return;  
 }
 
 async valueChangeMASTER_FILE(value: any) { 
  await this.WHEN_VALIDATE_ITEM_MASTER_FILE(this.formGroup); if ( this.FORM_TRIGGER_FAILURE) return;  
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


}


