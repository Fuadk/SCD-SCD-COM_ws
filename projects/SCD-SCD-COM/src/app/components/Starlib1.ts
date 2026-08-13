//import { starServices } from 'starlib';


import { Injectable } from '@angular/core';
import { starServices } from 'starlib';
import { formatDate } from '@angular/common';
import { getDate } from '@progress/kendo-date-math';
import {  componentConfigDef } from '@modeldir/model';

declare function getParamConfig(): any;
@Injectable({
  providedIn: 'root',
})
export class Starlib1 {

  constructor(public starServices: starServices) {

  }
  public FORM_TRIGGER_FAILURE;
  public NOTFOUND = false;


  private Body = [];
  private commitBody = [];
  public inTrans = false;

 
  GET_DATE_ISO():Date {
    let dateVal: Date = new Date();
    dateVal = this.starServices.FORMAT_ISO(dateVal); 
    return dateVal;
    }
  public get_dbdate_del() {
    let wtime: Date = new Date();
    return wtime;

  }

  public nvl_del(var1, var2) {
    if ((var1 == "") || (var1 == null))
      return var2;
    else
      return var1;

  }
 
  ///////
  public durationInDays(date1, date2) {
    let Time = date2.getTime() - date1.getTime();
    let Days = Time / (1000 * 3600 * 24); //Diference in Days
    return Days;
  }
  public getInvalidControls(object) {
    //console.log ("getInvalidControls:",   object.form.invalid, object.form.controls)
    const invalid = [];
    const controls = object.form.controls;
    for (let name in controls) {
        if (controls[name].invalid) {
           if (typeof object.compTitleMsg != "undefined"){
              name = this.starServices.getNLS([],object.compTitleMsg + "." + name,name)
           }
            invalid.push(name);
        }
    }
   
     this.starServices.showNotification("error", this.starServices.getNLS([invalid.toString()],
    'NO_VALID_DATA_FOR','No valid data for :  ## '));
    let Msg = this.starServices.getNLS([invalid.toString()], 'NO_VALID_DATA_FOR','No valid data for :  ## ');
    
    var dialogStruc = {
      msg: Msg,
      title: "Error",
      info: null,
      object: this,
      action: this.starServices.OkActions,
      callback: null
    };
    this.starServices.showConfirmation(dialogStruc);
    return invalid;
}
public getInvalidControls_grid(object) {
  //console.log ("testing getInvalidControls:",   object.formGroup.invalid, object.formGroup.controls)
  const invalid = [];
  const controls = object.formGroup.controls;
  for (const name in controls) {
      if (controls[name].invalid) {
         let nameMSg = this.starServices.getNLS([], 'ormpgmob_fmb.userInfoOrmpgmobFmbBSubscriber["name"]',name)
          invalid.push(nameMSg);
      }
  }
  this.starServices.showNotification("error", this.starServices.getNLS([invalid.toString()],
  'NO_VALID_DATA_FOR','No valid data for :  ## '));
  return invalid;
}
//
async getScreenOrderFields(object, params, templateName){
  if (object.paramConfig.DEBUG_FLAG) console.log("addOrderFields:params, templateName:", params, templateName );
   let sqlStmt = "select ORDER_FIELDS "
               + "  from DSP_ORDERS O , DSP_TEMPLATE T "
               + "  where O.TEMPLATE_NAME = T.TEMPLATE_NAME "
               + "  and T.TEMPLATE_NAME = '" + templateName + "' "
               + "  and T.FORM_TYPE = 'SCREEN' ";
                 
   let body = [
     {
       "_QUERY": "GET_STMT",
       "_STMT":sqlStmt
     }
   ]
   let data = await this.starServices.execSQLBody(this, body, "");
   if (object.paramConfig.DEBUG_FLAG) console.log("addOrderFields:data[0].data:", data[0] );
   if (typeof data[0].data[0] != "undefined") {
     for (let k =0;k<data[0].data.length;k++){
       console.log("ORDER_FIELDS:", JSON.parse(data[0].data[k].ORDER_FIELDS))
       let orderFieldsJSON = JSON.parse(data[0].data[k].ORDER_FIELDS);
       
       let keys = Object.keys(orderFieldsJSON);
       console.log("keys:",keys)
       for (let i =0; i< keys.length;i++){
         //console.log(" key:", keys[i] )
         let objData = orderFieldsJSON[keys[i]];
         //console.log("objData:", objData );
         let objDataRec;
         if (Array.isArray( objData )){
           console.log(keys[i] + "is an array")
           objDataRec = objData[0];
         }
         else{
           console.log(keys[i] + "is not an array")
           objDataRec = objData;
         }

           let fieldKeys = Object.keys(objDataRec);
           //console.log("fieldKeys:",fieldKeys)
           for (let j =0; j < fieldKeys.length;j++){
               if (fieldKeys[j] != "_QUERY"){
                   let orderFieldsKeys = keys[i]+ "." +fieldKeys[j]
                   params[orderFieldsKeys] = orderFieldsKeys;
               }
           }
         }
       
       
     
     }
     console.log("Screen params:",params)
   }
  
}

/////// workflow using screens ////////
public WorkFlowDelay = 300; //1500;
async readMasterNewChildren(object, rec, WO_STATUS){
  await this.starServices.sleep(this.WorkFlowDelay);
  let whereClause = "";
  for (let i =0; i< object.keyNameArr.length; i++ ){
    if ((i > 0) && whereClause != "")
      whereClause = whereClause + " AND ";
    if (typeof rec[object.keyNameArr[i]] != 'undefined') {
        whereClause = whereClause +  object.keyNameArr[i] + " = " +  rec[object.keyNameArr[i]];
    }
  }
  let componentConfigMaster = new componentConfigDef(); 
  if (whereClause != ""){
    var Page = "&_WHERE=" + whereClause;
    componentConfigMaster.formattedWhere = Page; 
  }
  console.log("object.isReadOnly:", object.isReadOnly)
  

  console.log("object.masterParams:",object.masterParams)
  let formPagesNo = object.masterParams.formPagesNo;
  let pageReadOnly = object.masterParams.pageReadOnly;
  console.log("formPagesNo:", formPagesNo, "pageReadOnly:", pageReadOnly );
  if (typeof pageReadOnly == "undefined")
    pageReadOnly = "";
  if (typeof formPagesNo !== "undefined"){
    let formPagesNoArr = formPagesNo.split(",");
    let pageReadOnlyArr = pageReadOnly.split(",");
    console.log("formPagesNoArr:", formPagesNoArr, "pageReadOnlyArr:", pageReadOnlyArr );
    for (let i =0; i< formPagesNoArr.length;i++){
      let pageNo = formPagesNoArr[i] ;
      let isPageReadOnly = pageReadOnlyArr.includes(pageNo+"");
      console.log("pageNo:", pageNo, "isPageReadOnly:", isPageReadOnly)
      if (i == 0){
          if (isPageReadOnly){
            componentConfigMaster.updateable = false;
            // componentConfigMaster.insertable = false;
            componentConfigMaster.queryable = false;
            componentConfigMaster.navigable = false;
            componentConfigMaster.enabled = false;
            componentConfigMaster.showToolBar = false;
          }
          object.sendToMaster(componentConfigMaster);
          console.log("readMasterNewChildren:componentConfigMaster:", componentConfigMaster)
          await this.starServices.sleep(this.WorkFlowDelay);
      }
      else{
          let componentConfigChild = new componentConfigDef(); 
          console.log("readMasterNewChildren:componentConfigChild:", componentConfigChild)
         // if ( (WO_STATUS != object.paramConfig.REJECTED) ||(WO_STATUS != object.paramConfig.COMPLETED) )
          if (!isPageReadOnly){
             componentConfigChild.newRec = true
          }
          
          if (isPageReadOnly){
            componentConfigChild.updateable = false;
          //  componentConfigChild.insertable = false;
            componentConfigMaster.queryable = false;
            componentConfigChild.navigable = false;
            componentConfigChild.enabled = false;
          componentConfigChild.showToolBar = false;
          }
          object.sendToChildren(componentConfigChild, i)
      }
    }
  }


  
}
public handleMasterParams(object , ComponentConfig){
  if ( (ComponentConfig.masterParams.orderFields == '') || (typeof ComponentConfig.masterParams.orderFields == 'undefined') )
    ComponentConfig.masterParams.orderFields = '[]';
  if (object.paramConfig.DEBUG_FLAG) console.log('ComponentConfig.handleMasterParams:', ComponentConfig)
  if (object.paramConfig.DEBUG_FLAG) console.log('ComponentConfig.masterParams.orderFields:', ComponentConfig.masterParams.orderFields)
  var orderFields = JSON.parse(ComponentConfig.masterParams.orderFields);
  if (object.paramConfig.DEBUG_FLAG) console.log('orderFields:', orderFields)
  object.orderFields1 = orderFields;
  
  object.orderFields = orderFields;
  
  object.currentStep = 0;
  object.pageReadOnly = null;
  //object.totalSteps = 0;
  
  if (typeof ComponentConfig.masterParams.currentStep != 'undefined') {
    object.currentStep =  ComponentConfig.masterParams.currentStep;
    object.originalcurrentStep =  ComponentConfig.masterParams.currentStep;
    if (ComponentConfig.masterParams.hidePrevSteps == 1)
      object.showafter = object.originalcurrentStep;
    else
      object.showafter = 0;
  }

  object.totalSteps = object.steps.length - object.showafter - 1;
  object.pageToShow = -1;
  object.submitData = false;
  object.showStepper = true;

  
  console.log("object.currentStep:", object.currentStep, "object.steps:", object.steps)

  let formPagesNo = ComponentConfig.masterParams.formPagesNo;
  //formPagesNo = "1,2";
  for (let i =object.showafter; i<object.steps.length;i++){
    object.steps[i].compNo = i+1;
  }
  if ( (formPagesNo != "") && (typeof formPagesNo != "undefined")){
    var array = formPagesNo.split(",");
    object.maxformPagesNo = array [array.length-1]
    object.initComponents();
    console.log("showafter:maxformPagesNo:", object.maxformPagesNo)
    console.log("showafter:pre:",object.steps );
    let newSteps=[];
    for (let i =object.showafter; i<object.steps.length;i++){
      if ( array.includes((i+1).toString()) ) {
        console.log("showafter:formPagesNo:", array,i+1, object.steps[i] )
        newSteps.push(object.steps[i]);
      }
    }
    object.steps = newSteps;
    console.log("showafter:post:",object.steps );
    object.totalSteps = object.steps.length  - 1;
    console.log("showafter:totalSteps:",object.totalSteps );
    if (object.totalSteps < 1) {
      object.showStepper = false;
    }
    object.currentStep = object.currentStep - object.showafter;
    
  }

 
  console.log("showafter:object.currentStep:1:",object.currentStep );
  object.currentComp = object.steps[object.currentStep].compNo;
  
  console.log("object.steps:", object.steps,"object.totalSteps:", object.totalSteps,"object.currentStep:", object.currentStep,"object.showStepper:", object.showStepper )
  object.pageReadOnly = null;
  if (typeof ComponentConfig.masterParams.pageReadOnly != 'undefined') {
    object.pageReadOnly =  ComponentConfig.masterParams.pageReadOnly;
  }
  // object.showMultiStepFormData(orderFields,
  //   ComponentConfig.masterParams.formName,
  //   ComponentConfig.masterParams.formPagesNo);
  if (ComponentConfig.masterParams.isReadOnly != null)
    object.isReadOnly = ComponentConfig.masterParams.isReadOnly
  if (Object.keys(object.orderFields).length !== 0  ){
   let masterDataSource = object.orderFields[object.masterDataSource];
   let Page = this.readMasterNewChildren(object,masterDataSource, object.masterParams.selectedData.WO_STATUS );
   object.submitData = true;
   this.gridUserSelectionChange(object, object.masterParams.selectedData);
  
  }
}
async readSavedMaster(object, masterTable,keyNameArr){
  console.log("readSavedMaster:object.orderFields:",object.orderFields)
  if (Object.keys(object.orderFields).length !== 0  ){
    return;
  }
  let sqlStmt = "SELECT * FROM " + masterTable + " ORDER BY rowid DESC ";
  
  let tableData;
  tableData = await this.starServices.execSQL(this, sqlStmt);
  console.log("tableData:", tableData)
  let rec = tableData[0];
   rec._QUERY = object.masterINSERT;
   this.store2orderFields(object, rec);
 


  let Page = this.readMasterNewChildren(object,rec,0 )
  
 

}

public next(object): void {
  object.isNextPressed = true
  object.currentStep += 1;
  console.log("showafter:object.currentStep:2:",object.currentStep );
  object.currentComp = object.steps[object.currentStep].compNo;
  console.log("next:totalSteps",object.totalSteps, "currentStep",object.currentStep,"isReadOnly:",object.isReadOnly, "object.orderFields:", object.orderFields);
  object.steps[object.currentStep].disabled = false
  //object.stepperClicked();
  if (Object.keys(object.orderFields).length === 0  ){
    let componentConfig = new componentConfigDef(); 
    componentConfig.masterSaved = true; 
    object.sendToMaster(componentConfig);
    console.log("WfIdeasWfWfIdeasFormForm ComponentConfig: :seding:", componentConfig.masterSaved)
  
  }

}
public prev(object): void {
  object.isNextPressed = false
  object.currentStep -= 1;
  console.log("showafter:object.currentStep:2:",object.currentStep );
  object.currentComp = object.steps[object.currentStep].compNo;
  console.log("prev:totalSteps",object.totalSteps, "currentStep",object.currentStep);
}
public stepperClicked_del(object) {
  if (object.paramConfig.DEBUG_FLAG) console.log("test1:stepperClicked :");
  //object.onSaveFields();
  if (object.paramConfig.DEBUG_FLAG) console.log("currentStep:", object.currentStep, " totalSteps:", object.totalSteps);
  object.pageToShow = object.pagesArray[object.currentStep];
  //object.currentPageData.emit(object.pagesInfo[object.currentStep])
}
public  submit(object) {
  if (object.paramConfig.DEBUG_FLAG) console.log("test1:submit :");
 // object.onSaveFields();
    if (object.paramConfig.DEBUG_FLAG) console.log("checking :1:before saveCompletedOutput:object.orderFields:", object.isFormValid,
      object.orderFields, JSON.stringify(object.orderFields));
      
    let componentConfig = new componentConfigDef(); 
    componentConfig.masterSaved = true; 
    object.sendToMaster(componentConfig);
    console.log("WfIdeasWfWfIdeasFormForm ComponentConfig: :seding:", componentConfig.masterSaved)
    
    let orderFieldsKeysCur = Object.keys(object.orderFields).length;
    setTimeout(() => {
      console.log("object.submitData :", object.submitData , object.orderFields)
      if (object.submitData == true){
        this.NoteValue = "";
        let workOrderRec = object.masterParams.selectedData;
        if (workOrderRec.TEMPLATE_ORDER == "1"){
          this.changeWOStatusExist(object,object.paramConfig.APPROVED)
        }
        else
          object.showApproveReject = true;
        return;
      }

      let orderFieldsKeysNew = Object.keys(object.orderFields).length;
      console.log("submit:Cur,New:", orderFieldsKeysCur, orderFieldsKeysNew, object.masterParams, object.orderFields)
      if (orderFieldsKeysNew > orderFieldsKeysCur){
        let DS = object.orderFields[object.masterDataSource];
        console.log(DS);
        let masterKeyName = object.masterKeyNameArr[0];
        let masterKeyValue = DS[masterKeyName];
        object.masterParams.addForm['SUBNO'] = masterKeyValue;

        this.submitAction(object, object.masterParams.addForm, object.orderFields)
      }
      else{
        let Msg = this.starServices.getNLS([], 'ADD_REQUIRED_DATA','Add Required Data.   ');
    
        var dialogStruc = {
          msg: Msg,
          title: "Error",
          info: null,
          object: this,
          action: this.starServices.OkActions,
          callback: null
        };
        this.starServices.showConfirmation(dialogStruc);
      }
     }, this.WorkFlowDelay)


}

public submitAction(object, formVal, orderFields) {
 

  var page = "";
  var url = this.starServices.SERVER_URL + '/prov/api?_format=json';

  var newVal = { "_QUERY": "CREATE_ORDER" };

  newVal["TEMPLATE_NAME"] = formVal.TEMPLATE_NAME;
  newVal["SUBNO"] = formVal.SUBNO;
  newVal["EMAIL"] = "";
  newVal["NOTES"] = formVal.ORDER_NOTE;
  newVal["ASSIGNEE"] = this.starServices.sessionParams.USERNAME;
  newVal["ASSIGNEE_TYPE"] = "PERSON";
  newVal["ORDERED_DATE"] = this.GET_DATE_ISO();
  newVal["ATTACHMENTS"] = formVal.ATTACHMENTS;

  console.log("submitAction:orderFields:", orderFields,JSON.stringify(orderFields) )
  newVal["ORDER_FIELDS"] = orderFields;
  //this.addForm.value.ORDER_FIELDS = JSON.stringify(this.fieldsDataObjKeys);
  this.Body.push(newVal);
  let DBLoc = object.paramConfig.DBLoc;
  

  console.log("submitAction:page:", page, "url:",url)
  this.starServices.postCommand(page, url, this.Body).subscribe(result => {
    if (result != null) {
      this.Body = [];
      var dataResult = JSON.parse(JSON.stringify(result));

      this.starServices.showNotification("success", "Order created No:" + dataResult.ORDER_NO);
      var dialogStruc = {
        msg: "Successfully Created Request No:" + dataResult.ORDER_NO,
        title: "Success",
        info: null,
        object: this,
        action: this.starServices.OkActions
      };
      this.starServices.showConfirmation(dialogStruc);
      this.getOrder(dataResult.ORDER_NO, formVal, orderFields);
      if (formVal.FORM_TYPE == "FORM")
        object.showMultistep = false;
      else  if (formVal.FORM_TYPE == "SCREEN"){

        object.router.navigate(['/' + object.masterParams.callingForm], 
          { skipLocationChange: true, replaceUrl: false, preserveFragment: true });

      }
      
    }
    else
      this.starServices.showNotification("error", "error:" + result);
    this.Body = [];

    //this.newRequestOpened = false

  });
}
public lastWO;
getOrder(id, formVal, orderFields) {
  let Body = []
  Body.push({
    "_QUERY": "GET_DSP_ORDERS",
    "ORDER_NO": id,
    "ORDER_TYPE": "%"
  });

  let sqlStmt = "select max(TEMPLATE_ORDER), WO_ORDER_NO  from DSP_WORK_ORDERS where ORDER_NO =" + id;
  Body.push({
    "_QUERY": "GET_STMT",
    "_STMT": sqlStmt
  })
  Body.push({
    "_QUERY": "GET_DSP_WORK_ORDERS_BY_ORDER_NO",
    "ORDER_NO": id
  });
console.log("check:Body:",Body);
  this.starServices.post(this, "&_trans=Y", Body).subscribe(res => {
    let data = res.data[0].data[0]
    let lastWORec = res.data[1].data[0]
    this.lastWO =  lastWORec['WO_ORDER_NO']
    let workOrder = res.data[2].data[0]
    console.log("check:workOrder[WO_TYPE]", workOrder["WO_TYPE"])
    if (workOrder["WO_TYPE"] == "INPUT")
      this.changeWOStatus(30, workOrder, formVal, orderFields);
  })
}
changeWOStatus(status, workOrder, formVal, orderFields) {
  let orderStatus = 20; 
  if (this.lastWO == workOrder["WO_ORDER_NO"]){
      orderStatus = status; 
  }
  //var formVal = this.addForm.value;

  //newVal["TEMPLATE_NAME"] = formVal.TEMPLATE_NAME;

  let Body = []
  Body.push({
    "_QUERY": "UPDATE_DSP_WORK_ORDERS_DISPATCH",
    "WO_STATUS": status,
    "NOTES":  formVal['NOTES'],
    "LOGNAME": this.starServices.USERNAME,
    "FULLNAME": this.starServices.sessionParams.USER_INFO.FULLNAME,
    "WO_ORDER_NO": workOrder["WO_ORDER_NO"],
    "ORDER_NO": workOrder["ORDER_NO"],
    "TEMPLATE_NAME" : workOrder.TEMPLATE_NAME,
    "SEQUENCE_NAME" : workOrder.SEQUENCE_NAME,
    "ORDER_FIELDS" : JSON.stringify(orderFields),
  })
  
  Body.push({
  "_QUERY": "UPDATE_DSP_ORDERS_DISPATCH",
  "ORDER_STATUS": orderStatus,
  "ORDER_NO": workOrder["ORDER_NO"],
   "LOGNAME": this.starServices.USERNAME,
  "ORDER_FIELDS" : JSON.stringify(orderFields),
  "TEMPLATE_NAME" : workOrder.TEMPLATE_NAME,
  "SEQUENCE_NAME" : workOrder.SEQUENCE_NAME
});
console.log("check:Body2:",Body);
  this.starServices.post(this, "&_trans=Y", Body).subscribe(res => {
    this.starServices.showNotification("success", "Order created No:" + workOrder["ORDER_NO"]);
    var dialogStruc = {
      msg: "Successfully updated order  No:" + workOrder["ORDER_NO"],
      title: "Success",
      info: null,
      object: this,
      action: this.starServices.OkActions,
      callback: null
    };
   // this.starServices.showConfirmation(dialogStruc);
    
  })
}

store2orderFields(object, event){
  function checktoPush(rec){
    console.log("store2orderFields:rec:", rec)
    let queryFound = null;
    if (typeof rec._QUERY != 'undefined') {
      let query = rec._QUERY;
      let sql = query.substr(0, 6);
      console.log("store2orderFields:sql:", sql)
      if (sql == "INSERT" || sql == "UPDATE"){
        queryFound = query.substr( 7);
      }
    }
    return queryFound;
  }
  console.log("store2orderFields:event:", typeof event, Array.isArray( event ),  event)
  // object.orderFields.push( event);
  // console.log("store2orderFields:object.orderFields:",  object.orderFields)
  // return;
  if ( typeof event ['data'] != 'undefined'){
    console.log("store2orderFields:event:ARRAY:", event)
    let orderFields =[];
    let query = null;
    for (let i = 0; i < event.data.length; i++){
      let rec = event.data[i];
      query = checktoPush(rec)
      if (query != null){
        orderFields.push(rec);
        //orderFields.push(rec)
      }
    }
    if (query != null){
      object.orderFields[query] = orderFields;
    }

  }
  else {
    let query = checktoPush(event)
    if (query != null)
      object.orderFields[query] = event;
  }
  console.log("store2orderFields:object.orderFields:",  " object.orderFields:",JSON.stringify( object.orderFields), object.orderFields)
}
public NoteValue = "";
public ApprovalType = "NEXT";
changeWOStatusExist(object, status) {
  let componentConfig = new componentConfigDef(); 
  componentConfig.masterParams = {
    orderField: JSON.stringify( object.orderFields),
    WOStatus: status,
    NoteValue: this.NoteValue,
    ApprovalType: this.ApprovalType
  }
  object.sendToOrder(componentConfig);
  object.showApproveReject = false;
  
  setTimeout(() => {
    object.router.navigate(['/' + object.masterParams.callingForm], 
      { skipLocationChange: true, replaceUrl: false, preserveFragment: true });
    }, this.WorkFlowDelay)
}

gridUserSelectionChange(object, selectedData) {
  console.log("selectedData:",selectedData)

  //object.showForm = true
  let componentConfig = new componentConfigDef(); 
  componentConfig.isMaster = true;
  componentConfig.masterParams = {
 //   hideOthers: true,
    order: selectedData
  }
  object.sendToOrder(componentConfig);
}

//// Dialog //////
 
  // Method to open property dialog
  public dialog_openPropertyDialog(object, shapeType: string, definition: any): void {
    object.propertyDialogShapeType = shapeType;
    object.propertyDialogDefinition = definition;
    object.propertyDialogVisible = true;
  }
  // Update dialog_openDialog method
  public dialog_openDialog(object, comp: string, Maximize): void {
    // Create default definition based on type
    let definition: any = {};
    
  let  rec = object.dialogProperties.find(x => x.Id == comp);
	if (typeof (rec) != 'undefined')
  {
    definition = rec;
  }
  object.componentToRender = object.dialog_getComponentToRender(comp,Maximize);
  
    // if (comp === 'TEXT') {
    //   definition = {
    //     text: 'New Text',
    //     fontSize: 14,
    //     fontWeight: 'normal',
    //     fontFamily: 'Arial',
    //     color: '#000000',
    //     justification: 'center'
    //   };
    // } else if (comp === 'PUSH_BUTTON') {
    //   definition = {
    //     label: 'Button',
    //     action: 'Start',
    //     backgroundColor: '#4CAF50',
    //     textColor: '#FFFFFF',
    //     width: 120,
    //     height: 40,
    //     cornerRadius: 4
    //   };
    // }

    // Open the property dialog
    this.dialog_openPropertyDialog(object, comp, definition);
  }
  public dialog_onPropertySaved(object, updatedDefinition: any): void { //to remove
    // Update the shape in the diagram
    // You can add logic here to update the shape with the saved definition
    object.propertyDialogVisible = false;
  }
  
  // Get component inputs for the property dialog
  dialog_getComponentInputs(definition: any): any {
    const componentConfig = new componentConfigDef();
    componentConfig.masterParams = {
      data: definition
    };
    return {
      setComponentConfig_Input: componentConfig
    };
  }
  

}