import { Component, Input, Output, OnInit, OnDestroy, ViewChild, Renderer2, EventEmitter, ViewEncapsulation } from '@angular/core';
import { FormGroup, FormControl, Validators ,FormBuilder} from '@angular/forms';
import { AddEvent, GridComponent } from '@progress/kendo-angular-grid';
import { groupBy, GroupDescriptor  } from '@progress/kendo-data-query';

import { process, State } from '@progress/kendo-data-query';
import { DataStateChangeEvent, GridDataResult } from '@progress/kendo-angular-grid';

import { starServices } from 'starlib';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { Starlib1 } from '../../Starlib1';

import {   ruleItem , componentConfigDef } from '@modeldir/model';

// must invalidate table KEY by adding Validators.required otherwise add new as detail in master/detail screen won't work
 const createFormGroup = dataItem => new FormGroup({
'MODULE' : new FormControl(dataItem.MODULE  , Validators.required ) ,
'RULE_ID' : new FormControl(dataItem.RULE_ID  , Validators.required ) ,
'ITEM' : new FormControl(dataItem.ITEM  , Validators.required) ,
'FIELD' : new FormControl(dataItem.FIELD , Validators.required) ,
'OPERATION' : new FormControl(dataItem.OPERATION , Validators.required) ,
'FIELD_VALUE' : new FormControl(dataItem.FIELD_VALUE , Validators.required) ,
'DISABLED' : new FormControl(dataItem.DISABLED)  ,
'LOGNAME' : new FormControl(dataItem.LOGNAME ) ,
'LOGDATE' : new FormControl(dataItem.LOGDATE ) ,
'RULE_AND' : new FormControl(dataItem.RULE_AND ) ,
'RULE_CONDITION_TEXT' : new FormControl(dataItem.RULE_CONDITION_TEXT ) ,
});



const matches = (el, selector) => (el.matches || el.msMatchesSelector).call(el, selector);
declare function getParamConfig():any;
declare function setParamConfig(var1):any;

@Component({
  selector: 'app-adm-rule-item-grid',
  templateUrl: './adm-rule-item-grid.component.html',
  styleUrls: ['./adm-rule-item-grid.component.css'
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

export class AdmRuleItemGridComponent implements OnInit,OnDestroy {
  @ViewChild(GridComponent) 
 public grid: GridComponent;
 public  showValue : boolean = true; 
 
 //@Input()    
 public showToolBar = true;
 public  showKeys : boolean = false; 
 public  showText : boolean = true;
 public  isLGC_MODULEEnable : boolean = true; 
  
  public groups: GroupDescriptor[] = [];
  public view: any[];
  public formGroup: FormGroup; 
  private editedRowIndex: number;
  private docClickSubscription: any;
  private isNew: boolean;
  public isSearch: boolean=true;
  public isChild: boolean = false;
  public isMaster: boolean = false;
  		public  isMODULEEnable : boolean = true; 
public  isRULE_IDEnable : boolean = true; 
public isITEMEnable : boolean = true;

//  		public  isMODULEEnable : boolean = true; 
//public  isRULE_IDEnable : boolean = true; 

  public  isFilterable : boolean = false;
  public  isColumnMenu : boolean = false;
  
  private masterKeyArr = [];
  private masterKeyNameArr = [];
  private masterKey ="";
  private masterKeyName ="MODULE";
  private insertCMD = "INSERT_ADM_RULE_ITEM";
  private updateCMD = "UPDATE_ADM_RULE_ITEM";
  private deleteCMD =   "DELETE_ADM_RULE_ITEM";
  private getCMD = "GET_ADM_RULE_ITEM_QUERY";

  public  executeQueryresult:any;
  public title = "Rule Condition";
  public PDFfileName = this.title + ".PDF";
  public ExcelfileName = this.title + ".xlsx";
  public componentConfig: componentConfigDef;
  //public gridHeight = "500";
  public formattedWhere = null;
  public paramConfig;
  public templateName;
  public primarKeyReadOnlyArr = {isMODULEreadOnly : false , isRULE_IDreadOnly : false , isITEMreadOnly : false};  
  public createFormGroupGrid = createFormGroup;
  public lkpArrQUERY_DEF = [];

  public isPhonePortrait = false;
private Body =[];

  @Output() readCompletedOutput: EventEmitter<any> = new EventEmitter();
  @Output() clearCompletedOutput: EventEmitter<any> = new EventEmitter();
  @Output() saveCompletedOutput: EventEmitter<any> = new EventEmitter();

  constructor(public responsive: BreakpointObserver ,private starlib1: Starlib1, public starServices: starServices, private renderer: Renderer2) { 
      this.paramConfig = getParamConfig();
      this.componentConfig = new componentConfigDef(); 


      if (this.paramConfig.DEBUG_FLAG) console.log("HFshowFlowKeys flag",this.paramConfig.showFlowKeys);
      
      if (this.paramConfig.showFlowKeys == true)
        this.showKeys =  true;
      if (this.paramConfig.DEBUG_FLAG) console.log("paramConfig",this.paramConfig);
      this.componentConfig.gridHeight =  "250";
      this.componentConfig.showTitle = true;
      this.lkpArrQUERY_DEF = this.paramConfig.lkpArrQUERY_DEF;
  }

     public ngAfterViewInit() {
    this.starServices.setRTL();
   }
  public async ngOnInit() {
        this.responsive
      .observe([Breakpoints.HandsetPortrait])
      .subscribe((state: BreakpointState) => {
        
        this.isPhonePortrait = false;
        if (state.matches) {
           this.isPhonePortrait = true;
        }
        
      });
    this.docClickSubscription = this.renderer.listen('document', 'click', this.onDocumentClick.bind(this));
    this.starServices.fetchLookups(this, this.lookupArrDef);
  }
    public ngOnDestroy(): void {
        this.docClickSubscription();
    }
//Next part for filtering
   public state: State = {
  };
  
    public dataStateChange(state: DataStateChangeEvent): void {
      if (this.paramConfig.DEBUG_FLAG) console.log("dataStateChange");
      this.state = state;
      var out = process(this.executeQueryresult.data , this.state);
      if (this.paramConfig.DEBUG_FLAG) console.log(out);
      this.grid.data = out;
      if (this.paramConfig.DEBUG_FLAG) console.log(this.grid.data);
  }

  @Input() public set detail_Input(grid: any) {
    if (this.paramConfig.DEBUG_FLAG) console.log('detail_Input AdmRuleItemGrid grid.MODULE :' + grid.MODULE);
    if (this.paramConfig.DEBUG_FLAG) console.log('detail_Input AdmRuleItemGrid grid :' , grid);
    if ( (grid.MODULE != "") &&   (typeof grid.MODULE != "undefined"))
    {
      this.masterKey = grid.MODULE;
      this.isMODULEEnable = false;
      this.isRULE_IDEnable = false;
      this.isSearch = true;
      grid.RULE_AND = "";
      grid.RULE_CONDITION_TEXT = "";
      this.executeQuery(grid);
      this.isChild = true;
      //this.showToolBar = false;
     
    }
    else
    {
      
      if (typeof this.grid != "undefined")
      {
        //this.isChild = false;
        this.grid.data = [];
        this.masterKey = "";
        this.isMODULEEnable = true;
        this.isRULE_IDEnable = true;
  
      }
    }
  }

  public toggleFilter(): void {
    this.isFilterable = !this.isFilterable;
  }
  public toggleColumnMenu(): void {
    this.isColumnMenu = !this.isColumnMenu;
  }

  
  
  private gridInitialValues = new ruleItem();   

  private addToBody(NewVal){
    this.Body.push(NewVal);
  }
  private onDocumentClick(e: any): void {
    if (this.formGroup && this.formGroup.valid &&
        !matches(e.target, '#grid tbody *, #grid .k-grid-toolbar .k-button, .k-link')) {
        this.saveCurrent();
    }
  }
  
  public getNextItem(gridData){
    var item = 10;
    if (typeof gridData.data !== "undefined"){
      if (this.paramConfig.DEBUG_FLAG) console.log("gridData:", gridData.data, gridData.data.length)
      for (var i = 0; i< gridData.data.length; i++)
      {
        item = item + 10;
        if (this.paramConfig.DEBUG_FLAG) console.log("gridData:item:", item)
      }
    }
    return item;
  }


  public addHandler(): void {
    if (this.isChild == true){
    if (this.masterKey == ""){
      this.starServices.showOkMsg(this,this.starServices.saveMasterMsg,"Error");
      return;
    }
  }
  this.showText = false;

this.saveCurrent();
  /* this.gridInitialValues.LGC_MODULE = this.masterKey;*/
  
  
  if (this.paramConfig.DEBUG_FLAG) console.log("this.masterKeyNameArr:", this.masterKeyNameArr, "this.masterKeyNameArr.length",this.masterKeyNameArr.length)
  if (this.masterKeyNameArr.length != 0)
  {
    for (var i = 0; i< this.masterKeyNameArr.length; i++){
      if (this.paramConfig.DEBUG_FLAG) console.log(this.masterKeyNameArr[i] + ":" + this.masterKeyArr[i])
      this.gridInitialValues[this.masterKeyNameArr[i]] = this.masterKeyArr[i];
    }
  }
  else
  {
    if (this.paramConfig.DEBUG_FLAG) console.log(this.masterKeyName + this.masterKey)
    this.gridInitialValues[this.masterKeyName] = this.masterKey;
  }
   var item = this.getNextItem(this.grid.data);

  this.gridInitialValues.ITEM = item + "";

  this.gridInitialValues.RULE_AND = "";
  this.gridInitialValues.RULE_CONDITION_TEXT = "";
  

    if (this.paramConfig.DEBUG_FLAG) console.log("this.gridInitialValues:",this.gridInitialValues);
      this.closeEditor();
      this.formGroup = createFormGroup(
        this.gridInitialValues
      );
    this.isNew = true;
    this.grid.addRow(this.formGroup);
}

 public cellClickHandler({ isEdited, dataItem, rowIndex }): void {
  if (isEdited || (this.formGroup && !this.formGroup.valid)) {
    return;
}
if (this.isNew) {
    rowIndex += 1;
}
this.saveCurrent();
if (this.showText)
  this.showText = false;
this.formGroup = createFormGroup(dataItem);
this.editedRowIndex = rowIndex;
this.grid.editRow(rowIndex, this.formGroup);
this.readCompletedOutput.emit(this.formGroup.value);
}


  public enterQuery (grid : GridComponent): void{
    
    this.starServices.enterQuery_grid( grid, this);
  }
  
 
  public executeQuery (grid : any): void{
    grid.RULE_AND = "";
    grid.RULE_CONDITION_TEXT = "";
    this.starServices.executeQuery_grid( grid,this);
  } 

  public saveChanges(grid: GridComponent): void {
    this.starServices.saveChanges_grid( grid,this);
  }

  public cancelHandler(): void {
    this.showText = true;
    this.starServices.cancelHandler_grid( this);
    this.callBackFunction(this.grid.data );
  }

  private closeEditor(): void {
    this.starServices.closeEditor_grid(this);
  }

  private saveCurrent() {
    if (this.paramConfig.DEBUG_FLAG) console.log("saveCurrent: this.formGroup:" , this.formGroup);
    if  (this.formGroup) {
      var gridVal ;
      gridVal = this.formGroup.value;
      if (this.paramConfig.DEBUG_FLAG) console.log('HFthis.formGroup.dirty :' + this.formGroup.dirty +  " gridVal: " ,gridVal);
      if (this.formGroup.dirty === true)
      {
       
        var andStr = gridVal.RULE_AND ;
        var str = this.buildStr(gridVal); 

        gridVal.RULE_AND = andStr;
        gridVal.RULE_CONDITION_TEXT = str;
        this.formGroup.setValue(gridVal);

        //this.showText = true;
        
      }
    }
    if (typeof this.formGroup !== "undefined") {
      if (this.formGroup.valid == false) {
        let invalid = this.starServices.getInvalidControls_grid(this);
        //this.FORM_TRIGGER_FAILURE = true;
        //this.starServices.endTrans(this, false);
        return false;
      }
    }
    this.starServices.saveCurrent_grid( this);
  }

  public removeHandler(sender ) {
    
    this.starServices.removeHandler_grid(sender, this);

  }

  public buildStr(gridVal){
    
    var str = "";

    var rec = this.lkpArrGetFIELD(gridVal.FIELD);
    var fieldName = "";
    if (typeof rec !== "undefined")
       fieldName = rec.CODETEXT_LANG;
    
       
 
    if (this.paramConfig.DEBUG_FLAG) console.log("gridVal.FIELD:" + gridVal.FIELD)
   
        //str =  fieldName + " " + gridVal.OPERATION + " "  + gridVal.FIELD_VALUE;
        str =  gridVal.FIELD + " " + gridVal.OPERATION + " "  + gridVal.FIELD_VALUE;
   
      return str;
  }

  public lkpArrGetQUERY_DEF(CODE: any): any {
    // Change x.CODE below if not from SOM_TABS_CODE
    var rec = this.lkpArrQUERY_DEF.find(x => x.CODE === CODE);
    return rec;
    }
  public getParams(statement, params)
  {
    statement = statement.trim();
    var n = statement.toUpperCase().startsWith("SELECT ");
    if (n)
    {
      var phrase1 = statement.toUpperCase().split("SELECT ");
      if (this.paramConfig.DEBUG_FLAG) console.log("phrase1[1]:", phrase1[1]);
      var phrase2 = phrase1[1].toUpperCase().split(" FROM ");
      if (this.paramConfig.DEBUG_FLAG) console.log("phrase2:", phrase2);
      var columns = phrase2[0].toUpperCase().split(",");
      if (this.paramConfig.DEBUG_FLAG) console.log("columns:", columns);
      for (var i = 0; i < columns.length; i++) {
        columns[i] = columns[i].trim();
        var Table_column = columns[i].split(".");
        if (this.paramConfig.DEBUG_FLAG) console.log("Table_column:", Table_column, "Table_column.length:", Table_column.length);
        if (Table_column.length == 2)
          columns[i] = Table_column[1];

        params[columns[i]] = columns[i];
      }
      if (this.paramConfig.DEBUG_FLAG) console.log("columns:", columns);
    }
    return params;                  
  }
 
  async addOrderFields(CODE, params){
    console.log(" this.templateName:",  this.templateName);
    let sqlStmt = "select AREA_DATA_NAME , FIELD_ID"
                  + "  from DSP_FORM_AREA A, DSP_FORM_FIELDS F , DSP_TEMPLATE T "
                  + "  where A.FORM_NAME = F.FORM_NAME "
                  + "  and A.PAGE_NO = F.PAGE_NO "
                  + "  and A.AREA_NO = F.AREA_NO "
                  + "  and A.FORM_NAME = T.FORM_NAME "
                  + "  and T.TEMPLATE_NAME = '" + this.templateName + "' "
                  + "  and T.FORM_TYPE = 'FORM' "
                  + "  order by AREA_DATA_NAME, FIELD_ID ";
                    
    let body = [
      {
        "_QUERY": "GET_STMT",
        "_STMT":sqlStmt
      }
    ]



    let data = await this.starServices.execSQLBody(this, body, "");
    if (this.paramConfig.DEBUG_FLAG) console.log("addOrderFields:data[0].data:", data[0] );
    if (typeof data[0].data[0] != "undefined") {
      let DataNameFields = data[0].data;
      if (this.paramConfig.DEBUG_FLAG) console.log("addOrderFields:DataNameFields:", DataNameFields );
      for (let i=0; i< DataNameFields.length;i++){
        let orderFieldsKeys = DataNameFields[i].AREA_DATA_NAME + "." + DataNameFields[i].FIELD_ID;
        params[orderFieldsKeys] = orderFieldsKeys;
      }

     }
     else
     {
      await this.starlib1.getScreenOrderFields(this, params, this.templateName);
      
      return;
     
     }
  }
 
  public async setLkpArr(queryDef){
        this.lkpArrFIELD =[];
        var rec = this.lkpArrGetQUERY_DEF(queryDef);
        if (this.paramConfig.DEBUG_FLAG) console.log("rec:1:",rec);
        //Handle query Fields
        if (typeof rec !== "undefined"){
          var statement = rec.statement;
          statement = statement.join("");
          if (this.paramConfig.DEBUG_FLAG) console.log ("statement:1:",statement)
          if (this.paramConfig.DEBUG_FLAG) console.log("rec:2:",rec);

          var n = statement.search(":");
          var params = {};
          if (n != -1) {
              var array = statement.split(":");
              var newStatement = "";
          
              for (var i = 0; i < array.length; i++) {
                  if (i != 0) {
                      var n = array[i].search(" ");
                      if (this.paramConfig.DEBUG_FLAG) console.log("n:" + n);
                      if (n == -1)
                          n = array[i].length;
                      if (n != -1) {
                          var param = array[i].slice(0, n);
                          var CommaPart = "";
                          if (param.charAt(param.length - 1) == ",") {
                              param = param.slice(0, param.length - 1);
                              CommaPart = ",";
                          }
                          if (this.paramConfig.DEBUG_FLAG) console.log("param:" + param);
                         
                          params[param] = param;
                          // if (param == "ORDER_FIELDS"){
                          //   await this.addOrderFields(rec.CODE, params)
                          // }
                      }
                  }
              }
          }	
          await this.addOrderFields(rec.CODE, params);
          params = this.getParams(statement,  params);							
          if (this.paramConfig.DEBUG_FLAG) console.log("params:",params)

          var rec ;
          Object.keys(params).map(key => {
            var val = params[key];
            rec = {
              CODE : key,
              CODETEXT_LANG : val
            }
            
            this.lkpArrFIELD.push(rec);

          });
          rec = {
            CODE : "",
            CODETEXT_LANG : ""
          }
          this.lkpArrFIELD.push(rec);
          console.log ("this.lkpArrFIELD:", this.lkpArrFIELD)
          let paramConfig = {
            "Name": "lkpArrFIELD",
            "Val": this.lkpArrFIELD
          };
          setParamConfig(paramConfig);
          this.lkpArrFIELD.sort(function(a, b) {
            //return a.CODETEXT_LANG - b.CODETEXT_LANG;
            return a.CODETEXT_LANG.localeCompare(b.CODETEXT_LANG);
          });
      
        }
        //console.log("codeNames:this.lkpArrFIELD:", this.lkpArrFIELD);
        if (this.lkpArrFIELD.length != 0){
          let codeNames = "";
          for (let i=0;i<this.lkpArrFIELD.length ;i++){
            let code = this.lkpArrFIELD[i]['CODE'];
            
            let array1 = code.split(".");
            if (array1.length > 1)
              code = array1[1];
            if (codeNames.length > 0)
              codeNames = codeNames + ","
            codeNames = codeNames + " '" + code + "' " ;
          }
          //console.log("codeNames:", codeNames);

          let lookupArrDef  =[	{"statment":"SELECT CODENAME, CODE, CODETEXT_LANG, CODEVALUE_LANG FROM SOM_TABS_CODES "
            + " WHERE CODENAME in (" + codeNames + ") and LANGUAGE_NAME = '" + this.userLang + "' order by CODETEXT_LANG",
            "lkpArrName":"lkpArrFIELD_VALUEALL"}];
        
          this.starServices.fetchLookups(this, lookupArrDef);
        }
        
    
  }

  
public callBackFunction(data){
    
  if (this.paramConfig.DEBUG_FLAG) console.log("inside callBackFunction")
  if (this.paramConfig.DEBUG_FLAG) console.log(data);
  //this.gridLgcHead = data[0].data;
  
///////////////////////    
  var detailsData = data.data ;
  
  var andStr = "IF ";
  var str = "";
  if (this.paramConfig.DEBUG_FLAG) console.log("detailsData.length:" + detailsData.length)
  for (var i=0;i<detailsData.length; i++)
  {
    if (this.paramConfig.DEBUG_FLAG) console.log("callBackFunction:", detailsData[i].DISABLED);
    var gridVal = detailsData[i];
    if ((i == 0) && (gridVal.OPERATION == "")) {}
    else
      str = this.buildStr(gridVal);

    if ( (detailsData.length == 1) && (gridVal.FIELD == 0 ) )
    {
      andStr = "IF any";
      str = "";
    }


    if (i > 0){
      andStr = "AND " ;
    }
      if (detailsData[i].DISABLED == '1')
        andStr = "Disabled : " + andStr;
      gridVal.RULE_AND = andStr;
      gridVal.RULE_CONDITION_TEXT = str;

//      lgcDetailArr.push(lgcDetailElm);
    if (this.paramConfig.DEBUG_FLAG) console.log("detail str:" + str);

  }
  var len:number = detailsData.length;
  var result = {data: detailsData,
    total: len}
    if (this.paramConfig.DEBUG_FLAG) console.log("detail result:",result)
  this.grid.data = result;
  



}


public userLang = "EN" ; 
public lookupArrDef =[	{"statment":"SELECT CODE, CODETEXT_LANG, CODEVALUE_LANG FROM SOM_TABS_CODES WHERE CODENAME ='LGC_OPERATION' and PARTCODE = '0' and LANGUAGE_NAME = '" + this.userLang + "' order by CODETEXT_LANG",
			"lkpArrName":"lkpArrOPERATION"}];

public lkpArrOPERATION = [];
public lkpArrFIELD = [];
public lkpArrFIELD_VALUE = [];
public lkpArrFIELD_VALUEALL = [];


public lkpArrGetOPERATION(CODE: any): any {
// Change x.CODE below if not from SOM_TABS_CODE
var rec = this.lkpArrOPERATION.find(x => x.CODE === CODE);
return rec;
}
public lkpArrGetFIELD(CODE: any): any {
  // Change x.CODE below if not from SOM_TABS_CODE
  var rec = this.lkpArrFIELD.find(x => x.CODE === CODE);
  return rec;
}
public getlkpArrFIELD_VALUE(FIELD:any){
  let array1 = FIELD.split(".");
  if (array1.length > 1)
    FIELD = array1[1];
  let lkpArrFIELD_VALUE  = [];
  for (let i=0;i<this.lkpArrFIELD_VALUEALL.length ;i++){
    if (this.lkpArrFIELD_VALUEALL[i]['CODENAME'] == FIELD)
      lkpArrFIELD_VALUE.push( this.lkpArrFIELD_VALUEALL[i]);
  }
  return lkpArrFIELD_VALUE;
}

public   lkpArrGetFIELD_VALUE(CODE: any, FIELD:any):any {
  this.lkpArrFIELD_VALUE = this.getlkpArrFIELD_VALUE(FIELD);
  var rec = this.lkpArrFIELD_VALUE.find(x => (x.CODE === CODE) );
  return rec;
}
    
public valueChangeOPERATION(value: any): void {
//this.lookupArrDef =[];
//this.starServices.fetchLookups(this, this.lookupArrDef);
}


public valueChangeFIELD_VALUE(value: any): void {
  this.formGroup.patchValue({ 'FIELD_VALUE': value });
}

public valueChangeFIELD(value: any): void {
  this.formGroup.patchValue({ 'FIELD_VALUE': "" });
  this.lkpArrFIELD_VALUE = this.getlkpArrFIELD_VALUE(value);
   //console.log ("this.lkpArrFIELD_VALUE:", this.lkpArrFIELD_VALUE)
  }
  
public printScreen(){
  window.print();
}
  @Input() public set setComponentConfig_Input(ComponentConfig: componentConfigDef) {
	    if (this.paramConfig.DEBUG_FLAG) console.log("detail ComponentConfig:" ,ComponentConfig);

    if (typeof ComponentConfig !== "undefined"){
	    this.componentConfig = this.starServices.setComponentConfig(ComponentConfig, this.componentConfig  );
	    if ( ComponentConfig.showToolBar != null)
	      this.showToolBar = ComponentConfig.showToolBar;
	   
	    if (ComponentConfig.isMaster == true)
	    {
	     this.isMaster = true;
	    }
	

	    if ( ComponentConfig.masterSaved != null)
	    {
	      this.saveChanges(this.grid);
	      ComponentConfig.masterSaved  = null;
	    }
	    if ( ComponentConfig.masterKey != null)
	    {
	      this.isMODULEEnable = false;
	      this.masterKey = ComponentConfig.masterKey;
	    }
	    if ( ComponentConfig.masterKeyArr != null)
	    {
	      this.masterKeyArr = ComponentConfig.masterKeyArr;
	    }
	    if ( ComponentConfig.masterKeyNameArr != null)
	    {
	      this.masterKeyNameArr = ComponentConfig.masterKeyNameArr;
	    }
      
	    if ( ComponentConfig.isChild == true)
	    {
	      this.isChild = true;
	      this.isMODULEEnable = false;
	    }

	    if ( ComponentConfig.formattedWhere != null)
	    {
	      this.formattedWhere = ComponentConfig.formattedWhere ;
	      this.isSearch =  true;
	      if (typeof this.grid !== "undefined"){
	         this.executeQuery(this.grid)
	      }
		
	    }
	    if ( ComponentConfig.clearComponent == true)
	    {
        this.cancelHandler();
        this.grid.cancel;
        this.grid.data = [];
        this.Body =[];
	    }
	      if (ComponentConfig.clearScreen == true)
	      {
      		this.grid.data = [];
        }
        if ( ComponentConfig.masterParams != null)
        {
          this.templateName = ComponentConfig.masterParams.TEMPLATE_NAME;
          this.setLkpArr(ComponentConfig.masterParams.QUERY_DEF);
        }
    }

  }

}


