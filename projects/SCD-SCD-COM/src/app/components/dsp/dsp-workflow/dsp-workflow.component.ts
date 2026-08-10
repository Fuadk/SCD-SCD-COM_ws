import { Component, Input, Output, OnInit, OnDestroy, ViewChild, Renderer2, EventEmitter, ViewEncapsulation } from '@angular/core';
import { FormGroup, FormControl, Validators ,FormBuilder} from '@angular/forms';
import { AddEvent, GridComponent } from '@progress/kendo-angular-grid';
import { Template, templateDetail,     componentConfigDef} from '@modeldir/model';
import { process, State } from '@progress/kendo-data-query';
import { DataStateChangeEvent, GridDataResult } from '@progress/kendo-angular-grid';
import { starServices } from 'starlib';
import { StarNotifyService } from '../../../services/starnotification.service';
import { Router, ActivatedRoute } from '@angular/router';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { of } from 'rxjs';
import { Subscription } from 'rxjs';
import {
  // logoutIcon,
  // exeIcon,
  // fileErrorIcon,
  // arrowsMoveIcon,
  // copyIcon,
  // minusCircleIcon,
  // xCircleIcon,
  // graphIcon,
  // arrowDownIcon,
  // arrowUpIcon,
  // arrowsSwapIcon,
  
  // chevronLeftIcon,
  // chevronRightIcon,

  // saveIcon,
  // plusCircleIcon,
  
  // searchIcon,
  // eyeIcon,
 
  // filePdfIcon,
  
  // codeIcon,
  // imageIcon,

  filterIcon,
  checkIcon,
  trackChangesAcceptIcon,
  trackChangesEnableIcon,
  caretAltToRightIcon,
  formElementIcon,
  infoSolidIcon,
  dollarIcon,
  arrowsSwapIcon,
  aggregateFieldsIcon,
  
  folderIcon,
  groupIcon,
  cancelIcon,
  puzzlePieceIcon,
  SVGIcon,
} from "@progress/kendo-svg-icons";
import * as allIcons from "@progress/kendo-svg-icons";
const is = (fileName: string, ext: string) => new RegExp(`.${ext}\$`).test(fileName);

const createFormGroup = (dataItem:any) => new FormGroup({
  'FLOW_CODE' : new FormControl(dataItem.FLOW_CODE   ) ,
  'FLOW_DESCRIPTION' : new FormControl(dataItem.FLOW_DESCRIPTION ) ,
  'MASTER_FLOW_CODE' : new FormControl(dataItem.MASTER_FLOW_CODE ) ,
  'ENGINE_LEVEL' : new FormControl(dataItem.ENGINE_LEVEL ) ,
  'CDR_TYPE' : new FormControl(dataItem.CDR_TYPE ) ,
  'COMMIT_FLOW' : new FormControl(dataItem.COMMIT_FLOW ) ,
  'COMMIT_STEP' : new FormControl(dataItem.COMMIT_STEP ) ,
  'COMMIT_RECORDS' : new FormControl(dataItem.COMMIT_RECORDS ) ,
  'FLOW_COMMENT' : new FormControl(dataItem.FLOW_COMMENT ) ,
  'FLOW_CATEGORY' : new FormControl(dataItem.FLOW_CATEGORY ) 
  });
  
  

  const matches = (el:any, selector:any) => (el.matches || el.msMatchesSelector).call(el, selector);    
  declare function getParamConfig():any;
  

@Component({
  selector: 'app-dsp-workflow',
  templateUrl: './dsp-workflow.component.html',
  styleUrls: ['./dsp-workflow.component.css']
})
export class DspWorkFlowComponent implements OnInit,OnDestroy {  
  public icons = allIcons;
//export class TestTreeComponent implements OnInit,OnDestroy {
  @ViewChild(GridComponent) 
  
  public grid!: GridComponent;
  @Output() saveCompletedOutput: EventEmitter<any> = new EventEmitter();
  @Input() public set setComponentConfig_Input(ComponentConfig: componentConfigDef) {
    this.handleComponentConfig(ComponentConfig);


  }
  // issues with RATING no proper parent, and ASNERICSON, KNETSRV, PAYGATE, RECON_SF, PAY_REV, ONE_INV, Significs gives error
  public sourceOpened = false;
  public  flowCode = "PRV_BLD";
  public  cdrType2 = "PRV_CDR";
  public  cdrType1 = "";
  private editedRowIndex!: number;
  private formInitialValues:any =   new Template();   
  public isPhonePortrait = false;
  private Body:any =[];

  public gridLgcHead: any[] ;
  public ENGINE_MODULETitle = "Source"
  public showToolBar = true;
  private isNew!: boolean;
  public  isSTM_CDR_TYPE_1Enable : boolean = true;
  public  isFilterable : boolean = false;
  public  isColumnMenu : boolean = false;
  public isChild: boolean = false;
  public  enableFlowCode : boolean = true;
  public showTemplateDetail = false;
  public showTemplate = false;
  public showRules = false;
  public formName;
  public formType;
  public children = ["any"];
  public compSelector = 'app-dsp-workflow';
  public ADM_RULE_DEFFormConfig: componentConfigDef;
  public DSP_IFRAME_FormConfig: componentConfigDef;
  public masterSaved = null;
  public masterParams = null;
  
  public showSteps: boolean = true;
//  public showGridLgcHead: boolean = false;
  
//  public showGridLgcGroup: boolean = false;
  
//  public showGridCepJoinsDetails: boolean = false;
  //public LKP_LIKE = ["LKP","SND", "RCV", "SRV", "UPD", "DEL", "LOG", "FLOW", "TRANS", "MAP"];
  
  

  public form_EMP_STEPS : templateDetail;
  public form_TEMPLATE_DETAIL : templateDetail;
  public form_TEMPLATE : Template;

  public currentOrder = null;

  /*= [
    {"ProductID": "Increment CMDNO and reset CMDTXT"}
  ]*/

  public gridDataLgcDetail: any[] = [
    {"ProductID": "customer numnber = 1"},
    {"ProductID": "and"},
    {"ProductID": "   customer id  = 1123"}
  ]
  public gridDataLgcGroup: any[] = [
    {"ProductID": "set customer status = ok"}
  ]
  public gridCepJoinsDef: any[] = [];
  public gridCepJoinsDetailsData: any[] = [];

  public data :any = [];
  public serverData:any = [];

  private masterKey ="";
  private masterKeyName ="STM_CDR_TYPE_1";
  private insertCMD = "INSERT_CEP_JOIN_DETAILS";
  private updateCMD = "UPDATE_CEP_JOIN_DETAILS";
  private deleteCMD =   "DELETE_CEP_JOIN_DETAILS";
  private getCMD = "GET_CEP_JOIN_DETAILS_QUERY";

  public  executeQueryresult:any;
  public title = "Flow";
  public PDFfileName = this.title + ".PDF";
  public ExcelfileName = this.title + ".xlsx";

  public paramConfig;
  public componentConfig: componentConfigDef;
  private docClickSubscription: any;
  public formGroup!: FormGroup; // for the grid
  
  public  form!: FormGroup; 
  public  EPM_STEPSFormConfig : componentConfigDef;
  
  public  DSP_TEMPLATE_DETAILFormConfig : componentConfigDef;
  public  DSP_TEMPLATEFormConfig : componentConfigDef;
  public app_dsp_diagram_wrapConfig:componentConfigDef;
  public  DSP_MULTISTEPFormConfig : componentConfigDef;
  public  multiStepFormOpened : boolean = false;
  public iFormOpened : boolean = false;

  
  

  public LGC_DETAILGridConfig : componentConfigDef;
  public FLOW_CODE ="";
  public routine_name = "PRVFLOW";
  
  constructor(public responsive: BreakpointObserver ,public starServices: starServices, 
    private renderer: Renderer2,private router: Router, private starNotify: StarNotifyService) { 
    this.paramConfig = getParamConfig();
    //this.flowCode = this.paramConfig.PrvUserFlow;
    //this.cdrType2 = this.paramConfig.PrvUserCDR;
    this.flowCode = this.starServices.sessionParams["PrvUserFlow"];
    this.cdrType2 = this.starServices.sessionParams["PrvUserCDR"];
    if (this.paramConfig.DEBUG_FLAG) console.log("this.flowCode:", this.flowCode)
    if  ( this.flowCode == ""){
      this.enableFlowCode  = true;
      this.routine_name = "ADMFLOW"
    }
    else
    {
      this.starServices.sessionParams["PrvUserFlow"] ="";
      this.starServices.sessionParams["PrvUserCDR"] = "";
 
    }
    





    this.componentConfig = new componentConfigDef(); 
    this.componentConfig.gridHeight = 500;
    this.componentConfig.showTitle = true;

    this.EPM_STEPSFormConfig = new componentConfigDef(); 
    this.EPM_STEPSFormConfig.queryable = false;
    this.DSP_TEMPLATE_DETAILFormConfig = new componentConfigDef(); 
    this.DSP_TEMPLATE_DETAILFormConfig.queryable = false;
    this.DSP_TEMPLATE_DETAILFormConfig.updateable = true;

     this.DSP_TEMPLATEFormConfig = new componentConfigDef(); 
    this.DSP_TEMPLATEFormConfig.queryable = false;

    
}
private componentConfigChangeEvent: Subscription;
  public ngAfterViewInit() {
    this.starServices.setRTL();
  }
  public ngOnInit(): void {
   
    let keys = Object.keys(this.icons);
     console.log("keys:",keys)
    this.form = createFormGroup(
      this.formInitialValues
  );
    this.starServices.actOnParamConfig(this, this.routine_name );

  
  this.setlookupArrDef();
  if (this.paramConfig.DEBUG_FLAG) console.log("this.flowCode:", this.flowCode);
  if (typeof this.flowCode !== "undefined"){
   //this.executeQuery(this.flowCode);
  }
//  this.docClickSubscription = this.renderer.listen('document', 'click', this.onDocumentClick.bind(this));
 
  // this.form_EMP_STEPS = new steps ();
  

// Subscribing the event.
    this.componentConfigChangeEvent = this.starNotify.subscribeEvent<componentConfigDef>('componentConfigDef', componentConfig => {
      if (componentConfig.eventFrom != this.compSelector) {
        if (this.paramConfig.DEBUG_FLAG) console.log(":refresh:this.compSelector:", this.compSelector, " componentConfig.eventTo:", componentConfig.eventTo)
        if (componentConfig.eventTo.includes(this.compSelector) || componentConfig.eventTo.includes("any")) {
          this.handleComponentConfig(componentConfig);
        }
      }
    });
    
  }
  public ngOnDestroy(): void {
   // this.docClickSubscription();
}
public currentFlow = "";
public fetchLookupsCallBack() {
  this.currentFlow = this.flowCode;
  if (this.paramConfig.DEBUG_FLAG) console.log("this.currentFlow:1:",this.currentFlow, this.lkpArrWORKFLOW_CODE);
  
}

  //////////////////////////////////////////
  public buildTree(treeData) {
    var parents = 0;
    var itemsMain = {
      "text": "main",
      items: []
    };
    var parentArr = [];

    for (var i = 0; i < treeData.length; i++) {
      if ((i != 0) && (treeData[i].ENGINE_LEVEL > treeData[i - 1].ENGINE_LEVEL)) {
        treeData[i].parent = treeData[i - 1].STEP_ID;
        treeData[i - 1].isParent = "Y";
        parentArr.push(treeData[i - 1].STEP_ID);
      }
      else {
        if ((i != 0) && (treeData[i].ENGINE_LEVEL == treeData[i - 1].ENGINE_LEVEL) && (treeData[i - 1].parent != "")) {
          treeData[i].parent = treeData[i - 1].parent;
          //treeData[i].parent = parentArr[ treeData[i].ENGINE_LEVEL -1];
        }
      }

      if ((i != 0) && (treeData[i].ENGINE_LEVEL < treeData[i - 1].ENGINE_LEVEL)) {
        while (parentArr.length > treeData[i].ENGINE_LEVEL - 1)
          parentArr.pop();
        let parent = parentArr[parentArr.length - 1];

        treeData[i].parent = parentArr[parentArr.length - 1];
        if (this.paramConfig.DEBUG_FLAG) console.log("i:parentArr:", i, treeData[i].DESCRIPTION, treeData[i].ENGINE_LEVEL - 1, parentArr, parent);
      }

    }

    if (this.paramConfig.DEBUG_FLAG) console.log("Testing treeData:", treeData);

    function getChild(i, treeData, parentID) {
      let items = [];
      while (i < treeData.length ) {
        if (treeData[i].parent == parentID) {
          var Elm = {
            "i": i, "text": treeData[i].DESCRIPTION, "type": treeData[i].ENGINE_TYPE, "id": treeData[i].STEP_ID,
            "level": treeData[i].ENGINE_LEVEL, "disabled": treeData[i].DISABLED, "order": treeData[i].PROCESSING_ORDER
            ,"ENGINE_PARAM2" : treeData[i].ENGINE_PARAM2
            , items: []
          };
          if (treeData[i].isParent == "Y") {
            //console.log("getting children  for ", treeData[i].DESCRIPTION);
            let items = getChild(i + 1, treeData, treeData[i].STEP_ID);
            Elm.items= items;
          }
          items.push(Elm);
        }
        i++;
      }
      return items;
    }
  
for(var i = 0; i < treeData.length ; i++)
{
  if ((treeData[i].parent == "") || (typeof treeData[i].parent === "undefined")) {
    var Elm = {
      "i": i, "text": treeData[i].DESCRIPTION, "type": treeData[i].ENGINE_TYPE, "id": treeData[i].STEP_ID,
      "level": treeData[i].ENGINE_LEVEL, "disabled": treeData[i].DISABLED, "order": treeData[i].PROCESSING_ORDER
      , items: []
    };
    if (treeData[i].isParent == "Y") {
      //console.log("getting children  for ", treeData[i].DESCRIPTION);
      let items = getChild(i + 1, treeData, treeData[i].STEP_ID);
      Elm.items= items;
    }
    itemsMain.items.push(Elm);
  }
}


if (this.paramConfig.DEBUG_FLAG) console.log("---itemsMain");


if (this.paramConfig.DEBUG_FLAG) console.log("itemsMain.items:", itemsMain.items);
return itemsMain.items;

}

 

    public  executeQuery( flowCode: any ): void {
      var getCMD = "GET_DSP_TEMPLATE_DETAIL_WITH_RULES";
      var stepID = "%";
      stepID = encodeURIComponent(stepID);
      
      var page = "&_query=" + getCMD + "&TEMPLATE_NAME=" + this.flowCode + "&SEQUENCE_NAME=" + stepID;

      page = encodeURI(page);


      this.starServices.fetch(this, page).subscribe(result => {
        if (this.paramConfig.DEBUG_FLAG) console.log("DSP_TEMPLATE_DETAILresult:",result.data[0].data);
        if (this.paramConfig.DEBUG_FLAG) console.log(result.data[0].data);
        if (result != null){
          this.serverData = result.data[0].data;
           let sampleData1=[];
           sampleData1 = this.serverData.map(
        (dataItem) =>
          <any>{
            FLOW_CODE: dataItem.TEMPLATE_NAME,
            STEP_ID: dataItem.SEQUENCE_NAME,
            ENGINE_LEVEL: dataItem.STEP_LEVEL,
            ENGINE_TYPE: dataItem.WO_TYPE,
            ENGINE_MODULE: "",
            ENGINE_PARAM: dataItem.FORM_PAGES_NO,
            ENGINE_PARAM2 : dataItem.RULE_ID,
            ENGINE_PARAM3 : dataItem.ASSIGNEE_TYPE,
            ENGINE_PARAM4 : dataItem.ASSIGNEE,
            PROCESSING_ORDER: dataItem.TEMPLATE_ORDER,
            IF_TRUE: dataItem.APPROVE_SEQ,
            IF_FALSE: dataItem.REJECT_SEQ,
            DISABLED: "",
            DESCRIPTION: dataItem.DESCRIPTION,
            PARENT_FLOW_CODE: dataItem.DEPENDANT_WO_ORDER,
           
            ICON: "",
            PARENT_STEP_ID: dataItem.DEPENDANT_WO_ORDER,

          }
      );
      
       this.serverData = sampleData1
       if (this.paramConfig.DEBUG_FLAG) console.log("this.serverData:",this.serverData)
// FLOW_CODE, STEP_ID, ENGINE_TYPE, ENGINE_MODULE, ENGINE_PARAM, ",
// 	" PROCESSING_ORDER, ENGINE_PARAM2, IF_TRUE, IF_TRUE_PARAM, IF_FALSE, IF_FALSE_PARAM, ERROR_CODE, ",
// 	" DISABLED, DESCRIPTION, PARENT_FLOW_CODE, ENGINE_LEVEL, ICON, SIM_STATUS, SIM_ICON, ENGINE_PARAM3, ",
// 	" THREAD_ENABLE, ENGINE_PARAM4, ENGINE_PARAM5, CATEGORY, PARENT_STEP_ID, CHILD, ENGINE_PARAM6 ",
	
          this.data = this.buildTree(this.serverData);

          if (this.paramConfig.DEBUG_FLAG) console.log("this.selectedKeys[0]:",this.selectedKeys)
          
          if (this.paramConfig.DEBUG_FLAG) console.log("this.selectedKeys[0]:" + JSON.stringify(this.selectedKeys));
          if (this.paramConfig.DEBUG_FLAG) console.log("this.currentOrder:" + this.currentOrder)
          var treeID =0;
          if (typeof this.data !== "undefined"){
            if (this.data.length > 0){
              this.showAddStep = false;
            }
            else{
              this.showAddStep = true; 
              this.AddStepMsg = "Add step";
              this.AddStepType = "Step";
            }
            if(this.masterParams.ACTION == "RELOAD"){
              this.masterParams.ACTION = null;
              this.currentOrder = this.masterParams.PROCESSING_ORDER;
              var i=0;
              while ( i < this.serverData.length ) {
                if (this.paramConfig.DEBUG_FLAG) console.log ("currentOrder:" , this.serverData, 
                  this.serverData[i].PROCESSING_ORDER ,   this.masterParams.PROCESSING_ORDER, this.serverData[i].ENGINE_PARAM2 ,  this.masterParams.RULE_ID)
                if ( (this.serverData[i].PROCESSING_ORDER == this.masterParams.PROCESSING_ORDER) &&
                      this.serverData[i].ENGINE_PARAM2 == this.masterParams.RULE_ID
                    )
                {
                  treeID = i;
                  break;
                }
                i++;
              }
            }
            // if (this.currentOrder != null){
            //   var i=0;
            //   while ( i < this.data.length ) {
            //     if (this.paramConfig.DEBUG_FLAG) console.log ("currentOrder:" , this.data[i].order , this.currentOrder)
            //     if (this.data[i].order == this.currentOrder)
            //     {
            //       treeID = i;
            //       break;
            //     }
            //     i++;
            //   }
            // }
          }
          console.log("treeID:", treeID)
          this.selectedKeys = [];
          this.selectedKeys.push(treeID);

          this.actonSelection(treeID);
          this.currentOrder = null;
         
          
        }

       
      },
      err => {
      alert ('error:' + err.message);
      });

      //this.starServices.executeQuery_form( form, this);
    }
    public getSvgIcon({ text, items , type}: any): SVGIcon {
      console.log ("type:", type)
      switch (type) {
         case 'APRV':
          return checkIcon;
        case 'AUTH.ID_MATCH':
          return trackChangesAcceptIcon;
        case 'CONFIRM':
          return trackChangesEnableIcon;   
        case 'END':
          return caretAltToRightIcon;  
        case 'INPUT':
          return formElementIcon;   
        case "API.TABS":
          return arrowsSwapIcon; 
        case 'NOTIFY':
          return infoSolidIcon;   
        case 'PAY':
            return dollarIcon;      
        case 'RULE':
          return filterIcon;
        case 'PREP':
         return aggregateFieldsIcon;    
        case 'GRP':
            return folderIcon;     
        case 'FLOW':
          return groupIcon;                     
 
   
        case 'ABRT':
          return cancelIcon;    
          
                         
        default:
          return puzzlePieceIcon;
     
      }
    }
    
// PREP	Prepare Data
// INST	Install
// ADDN	Add Network
// ADDE	Add E-Matrix
// ADDV	Add Voice
// ADDU	Add UNMS
// CONFIGE	Configure E-matrix
// CONFIRM	Confirm
// NOTIFY	Notification About order is completed
// PAY	Payment GW
// AUTH	Authenticate
// APRV	Approve
// END	END
// MAIL	Send Mail
// INPUT	Form Input

    public iconClass_del({ text,type, items }: any): any {
      //if (this.paramConfig.DEBUG_FLAG) console.log("iconClass:" + type + " " + text +  " items:" + items)
      return {
          'k-i-filter': type == 'LGC' ,
          'k-i-folder': type == 'GRP' ,
          'k-i-eye': type == 'CDR_G' ,

          'k-i-find': type == 'LKP' ,
          //'k-i-file-add': type == 'LOG' ,
          'k-i-plus-circle': type == 'LOG' ,
          
          'k-i-save': type == 'UPD' ,
          'k-i-group' : type == 'FLOW',
          'k-i-arrow-chevron-right': type == 'CALL' ,
          'k-i-arrow-chevron-left': type == 'RET' ,
          'k-i-cancel': type == 'ABRT' ,


          'k-i-arrow-60-down': type == 'SND' ,
          'k-i-arrow-60-up': type == 'RCV' ,
          'k-i-arrows-no-change': type == 'SRV' ,

          'k-i-delete': type == 'DEL' ,
          'k-i-close-circle': type == 'EXP' ,
          'k-i-graph': type == 'STM' ,

          'k-i-copy' : type == 'CPY' ,
          'k-i-move' : type == 'MOV' ,
          'k-i-file-error' : type == 'SNS' ,
          'k-i-exe' : type == 'SYS' ,
          'k-i-logout' : type == 'TRANS' ,
          
          //  'k-i-question': items !== undefined,
          'k-icon': true
      };
  }
  public showHideComponents (ENGINE_TYPE ){
    if (ENGINE_TYPE != "RULE"){
      this.showTemplateDetail = true;
      this.showRules = false;
    }
    if (ENGINE_TYPE == "RULE"){
      this.showTemplateDetail = false;
      this.showRules = true;
    }

   
}

  public selectedKeys: any[] = ['0_1'];
  
  async actonSelection(i){
    console.log("actonSelection:",i,this.serverData[i] )
 


    var prevOrder = -1;
    var nextOrder = -1;
    if (i != 0){
      if (this.paramConfig.DEBUG_FLAG) console.log("order prev:" + this.serverData[i-1].PROCESSING_ORDER)
      prevOrder = this.serverData[i-1].PROCESSING_ORDER;
    }
    if (this.paramConfig.DEBUG_FLAG) console.log("order plen:" + this.serverData.length + " i :" + i)
    if (this.serverData.length > i +1)
    {
      nextOrder = this.serverData[i+1].PROCESSING_ORDER;
    }


    var NewVal:any = {};
    this.cdrType1 = this.serverData[i].ENGINE_MODULE;
    if (this.paramConfig.DEBUG_FLAG) console.log("this.cdrType1:" + this.cdrType1)
    
    this.showHideComponents(this.serverData[i].ENGINE_TYPE);
   
   if (this.serverData[i].ENGINE_TYPE != "RULE"){
      this.showAddStep = true; 
      this.AddStepMsg = "Add Rule";
      this.AddStepType = "Rule";
      
      await this.starServices.sleep(300); 
      this.showMultiStepForm(this.serverData[i]);
      
      var masterKeyArr = [this.serverData[i].FLOW_CODE];
      var masterKeyNameArr = ["TEMPLATE_NAME"];

  
      let whereClause = "  TEMPLATE_NAME= '" + this.serverData[i].FLOW_CODE + "' and SEQUENCE_NAME ='" + this.serverData[i].STEP_ID + "'";
      var Page = "&_WHERE=" + whereClause;
      
      this.DSP_TEMPLATE_DETAILFormConfig = new componentConfigDef();
      this.DSP_TEMPLATE_DETAILFormConfig.masterKeyArr =  masterKeyArr;
      this.DSP_TEMPLATE_DETAILFormConfig.masterKeyNameArr =  masterKeyNameArr;
      this.DSP_TEMPLATE_DETAILFormConfig.formattedWhere = Page;
    }
    else if (this.serverData[i].ENGINE_TYPE == "RULE"){
        this.showAddStep = false; 
        this.AddStepMsg = "";
        this.AddStepType = "";

        await this.starServices.sleep(300); 
         let formattedWhere_rule = "&_WHERE=" + "RULE_ID= '" + this.serverData[i].ENGINE_PARAM2  + "'";
        let masterParams = {
          showForm: true,
          formattedWhere_rule: formattedWhere_rule
        }
        this.ADM_RULE_DEFFormConfig = new componentConfigDef();
        this.ADM_RULE_DEFFormConfig.masterParams = masterParams;
       // this.ADM_RULE_DEFFormConfig.showHideGridFlag = true;
          
    }
  
  }

  public handleSelection({ index }: any): void {
    
    
    this.showTemplate = false;
    this.showDiagramWrap = true;
    this.multiStepFormOpened = false;
    this.iFormOpened = false;
    
    //this.selectedKeys = [index];

    if (this.paramConfig.DEBUG_FLAG) console.log("this.selectedKeys[0]:",this.selectedKeys)
    if (this.paramConfig.DEBUG_FLAG) console.log("this.selectedKeys[0]:" + JSON.stringify(this.selectedKeys));
    if (this.paramConfig.DEBUG_FLAG) console.log("this.selectedKeys:" + this.selectedKeys + " " + this.serverData[this.selectedKeys[0]].ENGINE_MODULE);
      this.actonSelection(this.selectedKeys[0]);

}



public userLang = "EN" ; 
public lookupArrDef:any =[];
public setlookupArrDef(){
this.lookupArrDef =[	{"statment":"select TEMPLATE_NAME CODE, TEMPLATE_NAME  CODETEXT_LANG from DSP_TEMPLATE  ",
			"lkpArrName":"lkpArrWORKFLOW_CODE"},
    {
    "statment": "SELECT  CODENAME CODE, PARTCODE, CODEVALUE_LANG, CODETEXT_LANG FROM SOM_TABS_CODES WHERE CODENAME = 'AUTH.ID_MATCH' and LANGUAGE_NAME = '" + this.userLang + "' order by CODETEXT_LANG",
    "lkpArrName": "lkpArrAUTH_IDMATCH"
  },
    ];
    this.starServices.fetchLookups(this, this.lookupArrDef);
  }

public lkpArrWORKFLOW_CODE = [];
public lkpArrAUTH_IDMATCH = [];

public lkpArrGetFLOW_CODE(CODE: any): any {
// Change x.CODE below if not from SOM_TABS_CODE
var rec = this.lkpArrWORKFLOW_CODE.find((x:any) => x.CODE === CODE);
return rec;
}
public lkpArrGetAUTH_IDMATCH(CODE: any): any {
    // Change x.CODE below if not from SOM_TABS_CODE
    console.log("lkpArrAUTH_IDMATCH:", this.lkpArrAUTH_IDMATCH, CODE)
    var rec = this.lkpArrAUTH_IDMATCH.find(x => x.CODE === CODE);
    return rec;
  }

public populateTree(object,result){
  if (object.paramConfig.DEBUG_FLAG) console.log ("got data:" , result);
  if (object.paramConfig.DEBUG_FLAG) console.log("result:", result.data[0].data);
  if (typeof result.data[0].data[0].TEMPLATE_NAME != "undefined"){
    object.flowCode = result.data[0].data[0].TEMPLATE_NAME;
    object.cdrType2 = result.data[0].data[0].ORDER_TYPE;
    object.formName = result.data[0].data[0].FORM_NAME;
    object.formType = result.data[0].data[0].FORM_TYPE;
    object.executeQuery(object.flowCode);
  }

  
}

public home(){
  var formVal = this.form.value;
  console.log("formVal:",formVal)
  if (typeof formVal.FLOW_CODE != "undefined"){
    this.valueChangeFLOW_CODE(formVal.FLOW_CODE);
    this.showTemplate = true;
    this.showTemplateDetail = false;
    this.showRules = false;
    
  }
}
public valueChangeFLOW_CODE(value: any): void {
  //This is for combobox value change
  if (this.paramConfig.DEBUG_FLAG) console.log("valueChangeFLOW_CODE:value:", value)
  this.Body =[];
  var formVal = this.form.value;
  if ( (typeof formVal.FLOW_CODE != "undefined") && (formVal.FLOW_CODE != null) ) {
    //this.readCompletedOutput.emit(formVal);
    var NewVal={
      "TEMPLATE_NAME" : formVal.FLOW_CODE
    };
    NewVal["_QUERY"] = "GET_DSP_TEMPLATE";

    this.addToBody(NewVal);
    

    this.starServices.performPost(this, this.populateTree);
    //
         this.showTemplate = true;
         this.showDiagramWrap = true;
          this.showTemplateDetail = false;
          this.iFormOpened = false;
          this.showRules = false;
          this.multiStepFormOpened = false;
          var masterKeyArr = [value];
          var masterKeyNameArr = ["TEMPLATE_NAME"];

          this.form_TEMPLATE    = new Template ();

          for (var j = 0; j< masterKeyNameArr.length; j++){
            if (this.paramConfig.DEBUG_FLAG) console.log(masterKeyNameArr[j] + ":" + masterKeyArr[j])
            this.form_TEMPLATE[masterKeyNameArr[j]] = masterKeyArr[j];
          }
          this.form_TEMPLATE.TEMPLATE_NAME = value;
          
          this.DSP_TEMPLATEFormConfig = new componentConfigDef();
          this.DSP_TEMPLATEFormConfig.masterKeyArr =  masterKeyArr;
          this.DSP_TEMPLATEFormConfig.masterKeyNameArr =  masterKeyNameArr;
          console.log("this.DSP_TEMPLATEFormConfig:", this.DSP_TEMPLATEFormConfig)
          this.sendToDiagramWrapper(value)
    //
  }
}
private addToBody(NewVal:any){
  this.Body.push(NewVal);
}
onChanges(): void {

}

    

  public saveCompletedHandlerTemplate( form_EPM_STEPS) {
    if (this.paramConfig.DEBUG_FLAG) console.log("saveCompletedHandlerTemplate:form_EPM_STEPS:",form_EPM_STEPS)
    this.currentOrder = form_EPM_STEPS.PROCESSING_ORDER;
   
    this.flowCode = form_EPM_STEPS.TEMPLATE_NAME;
    // this.LGC_HEADGridConfig = new componentConfigDef();
    // this.LGC_HEADGridConfig.masterSaved = form_EPM_STEPS;    
    this.setlookupArrDef();
    this.executeQuery(this.flowCode);

  }
    public saveCompletedHandlerTemplateDetail( form_EPM_STEPS) {
    if (this.paramConfig.DEBUG_FLAG) console.log("saveCompletedHandlerTemplateDetail:form_EPM_STEPS:",form_EPM_STEPS)
    this.currentOrder = form_EPM_STEPS.PROCESSING_ORDER;
   
    // this.LGC_HEADGridConfig = new componentConfigDef();
    // this.LGC_HEADGridConfig.masterSaved = form_EPM_STEPS;    
    this.setlookupArrDef();
    this.executeQuery(this.flowCode);
    this.sendToDiagramWrapper(this.flowCode)

  }
  public clearCompletedHandler( form_EPM_STEPS) {
    if (this.paramConfig.DEBUG_FLAG) console.log("clearCompletedHandler:")
 


    // this.LGC_HEADGridConfig = new componentConfigDef();
    // this.LGC_HEADGridConfig.clearScreen = true;
  }  
  public setComponentConfigHandler (ComponentConfig: any){
    if (this.paramConfig.DEBUG_FLAG) console.log("steps ComponentConfig:", ComponentConfig);

    if (typeof ComponentConfig !== "undefined"){
	    this.componentConfig = this.starServices.setComponentConfig(ComponentConfig, this.componentConfig  );
	    if ( ComponentConfig.setScreen != null)
        this.showHideComponents (ComponentConfig.setScreen.ENGINE_TYPE )

      
    }

  }

  public handleComponentConfig(ComponentConfig:any) {
    if (typeof ComponentConfig !== "undefined") {
      if (this.paramConfig.DEBUG_FLAG) console.log("EpmFlowComponent ComponentConfig:", ComponentConfig);

      this.componentConfig = this.starServices.setComponentConfig(ComponentConfig, this.componentConfig);
      if ( ComponentConfig.masterParams != null){
        this.flowCode = ComponentConfig.masterParams.flowCode;
        this.cdrType2 = ComponentConfig.masterParams.cdrType2;
        this.masterParams= ComponentConfig.masterParams;
        
        this.executeQuery(this.flowCode);
        if (typeof this.form !== "undefined") {
          this.form.patchValue({ 'FLOW_CODE': this.flowCode });
        }
      }
    }
  }
  public showHideGridFlag =false;
  public showHideGrid(){
    this.showHideGridFlag = ! this.showHideGridFlag;
   }
   public showHideFlowFlag = true;
   public showHideFlow(){
    this.showHideFlowFlag = ! this.showHideFlowFlag;
    console.log("this.showHideFlowFlag:",this.showHideFlowFlag)
   }
   public showDiagram = true;
   public showDiagramWrap = false;
   


  public async sendToDiagramWrapper(templateName){
  let whereClause = " TEMPLATE_NAME = '" + templateName + "'" ;
  let whereClauseRules = " TEMPLATE_NAME = '" + templateName + "'";
  let body = [
    {
      "_QUERY": "GET_DSP_TEMPLATE_DETAIL_QUERY",
      "_WHERE": whereClause
    },
    {
      "_QUERY": "GET_ADM_RULE_DEF_QUERY",
      "_WHERE": whereClauseRules
    }
  ]

  let workOrders;
  let data = await this.starServices.execSQLBody(this, body, "");
  workOrders = data[0].data;
  let rulesDef = data[1].data;
  console.log("testx post execSQLBody:", workOrders);
  if (workOrders.length != 0) {
    this.app_dsp_diagram_wrapConfig = new componentConfigDef();
    this.app_dsp_diagram_wrapConfig.masterParams = {
      action:"build",
      workOrders: workOrders,
      flowName : templateName,
      useModeler: true,
      showDiagram: this.showDiagram,
      rulesDef:rulesDef
    }
    this.DSP_TEMPLATE_DETAILFormConfig = new componentConfigDef();
    var masterParams = {
      workOrders: workOrders
    }
    this.DSP_TEMPLATE_DETAILFormConfig.masterParams =  masterParams;
    
  }
  

}

  async showMultiStepForm(dataItem){
    console.log("dataItem:", dataItem, "this.formType:", this.formType, "this.formName:", this.formName)
    var formPagesNo = dataItem.ENGINE_PARAM;
    // if (formPagesNo == ""){
    //   this.multiStepFormOpened = false;
    //   this.iFormOpened = false;
    //   return;
    // }
    let formName = this.formName;

    var orderFields = "[]";

    if (dataItem.ENGINE_TYPE == "AUTH.ID_MATCH") {
      this.iFormOpened = true;
      this.processNAVIGATE_WO(dataItem);
      
    }
    else if ( (formName!= "") && ( (formPagesNo != 0) && (formPagesNo != "") && (formPagesNo != null))  ){
        var masterParams={
        "formName" : formName,
        "formPagesNo" : formPagesNo, 
        "orderFields" : orderFields,
        "addForm": {},
        "isReadOnly": false,
        "callingForm": "PRVTEMP",
        "selectedData": []//this.selectedData
        };
        if (this.paramConfig.DEBUG_FLAG) console.log("test:masterParams:", masterParams    );
        if (this.formType == "FORM" && this.formName != ""){
        this.DSP_MULTISTEPFormConfig = new componentConfigDef();
        this.DSP_MULTISTEPFormConfig.masterParams = masterParams;
        
        this.multiStepFormOpened = true;
      }
      else  if (this.formType == "SCREEN" && this.formName != ""){
        this.iFormOpened = true;
        this.callScreen( masterParams)
      }
      }
  }
  async processNAVIGATE_WO(workOrderRec)
  {
    console.log("processNAVIGATE_WO:workOrderRec:",workOrderRec)
    if (this.paramConfig.DEBUG_FLAG) console.log("workOrderRec:", workOrderRec)
    var assignee = workOrderRec.ENGINE_TYPE;
  
    var assigneeComprec = this.lkpArrGetAUTH_IDMATCH(assignee);
    if (this.paramConfig.DEBUG_FLAG) console.log("assigneeComprec:", assigneeComprec)
    var compName = assigneeComprec.PARTCODE;
    if (this.paramConfig.DEBUG_FLAG) console.log("assigneeComprec:", assigneeComprec)
      let genComp = false
          let dataItem = {
            APP_ID : "",
            COMP_ID : compName
          }
            let masterParams = {
            dataItem: dataItem,
            COMP_TYPE : "SCREEN",
            genComp : genComp
          }
          console.log("this.DSP_IFRAME_FormConfig:masterParams:", masterParams)
          this.DSP_IFRAME_FormConfig = new componentConfigDef();
          this.DSP_IFRAME_FormConfig.masterParams = masterParams;
          console.log("this.DSP_IFRAME_FormConfig:", this.DSP_IFRAME_FormConfig)
          
        

  }
    async  callScreen( formMasterParams){
      
    let Body = [];
    var newVal:any = { "_QUERY": "GET_MENUS_QUERY", 
       "_WHERE": "CHOICE  = '" + this.formName + "'" };
    Body.push(newVal);
    let data = await this.starServices.execSQLBody(this, Body, "");
    if (typeof data != "undefined" && data[0].data.length > 0) {
      var menu = data[0].data[0];
      let compSelector = menu.FLEX_FLD1;
            
          
          let genComp = false
          let dataItem = {
            APP_ID : "",
            COMP_ID : this.formName
          }
            let masterParams = {
            dataItem: dataItem,
            COMP_TYPE : "SCREEN",
            genComp : genComp
          }
          
          this.DSP_IFRAME_FormConfig = new componentConfigDef();
          this.DSP_IFRAME_FormConfig.masterParams = masterParams;
          console.log("this.DSP_IFRAME_FormConfig:", this.DSP_IFRAME_FormConfig)
          }

    


      
    // let Body = [];
    // var newVal:any = { "_QUERY": "GET_MENUS_QUERY", 
    //    "_WHERE": "CHOICE  = '" + this.formName + "'" };
    // Body.push(newVal);
    // let data = await this.starServices.execSQLBody(this, Body, "");
    // if (typeof data != "undefined" && data[0].data.length > 0) {
    //   var menu = data[0].data[0];
    //   let compSelector = menu.FLEX_FLD1;
    //   this.children = [];
    //   this.children.push(compSelector);
    //   this.commonCallStarNotify(formMasterParams);
    // }
    // this.router.navigate(['/' + this.formName], 
    //   { skipLocationChange: true, replaceUrl: false, preserveFragment: true });
  }
   async  commonCallStarNotify(masterParams){
    await this.starServices.sleep(200);
    let componentConfig = new componentConfigDef();
      componentConfig.eventTo = this.children;
      componentConfig.masterParams = masterParams;
      this.callStarNotify(componentConfig);
   }
      callStarNotify(componentConfig:any) {
    componentConfig.eventFrom = this.compSelector;
    console.log("New:sending: ", componentConfig)
    this.starNotify.sendEvent<componentConfigDef>('componentConfigDef', componentConfig);
  }
 public savemultiStepFormCompletedHandler(DSP_MULTISTEP){
  //this.multiStepFormOpened = false; 
  }
  public AddStepMsg = "Add Rule";
  public AddStepType = "Rule";
  public showAddStep : boolean = false;
  async AddStep(){
    console.log("this.selectedKeys[0]:",this.selectedKeys)
    
   
   
    if (this.flowCode != ""){
      console.log("this.selectedKeys[0:", this.serverData[this.selectedKeys[0]]);
      if (this.AddStepType == "Rule"){
        
        this.showTemplateDetail = false;
        this.showRules = true;
        this.showTemplate = false;
        let defaultTrigger = "POST";
        if (this.serverData[this.selectedKeys[0]].ENGINE_TYPE == "API.TABS"){
           defaultTrigger = "INVOKE_RULE"
        }
        let masterParams = {
          showForm: true,
          TEMPLATE_NAME : this.flowCode,
          SEQUENCE_NAME : this.serverData[this.selectedKeys[0]].STEP_ID,  
          DESCRIPTION : this.serverData[this.selectedKeys[0]].DESCRIPTION,
          MODULE : "FLWTRANS",
          DEFAULT_TRIGGER : defaultTrigger,
          PROCESSING_ORDER : this.serverData[this.selectedKeys[0]].PROCESSING_ORDER,
          newRule : true
          
        }
        this.ADM_RULE_DEFFormConfig = new componentConfigDef();
        this.ADM_RULE_DEFFormConfig.masterParams = masterParams;
       // this.ADM_RULE_DEFFormConfig.showHideGridFlag = false;

      }
      else if (this.AddStepType = "Step"){
        this.showTemplateDetail = true;
        this.showRules = false;
        this.showTemplate = false;
        
        let i = this.selectedKeys[0];
      
        var masterKeyArr = [this.flowCode];
        var masterKeyNameArr = ["TEMPLATE_NAME"];

      
      

        this.DSP_TEMPLATE_DETAILFormConfig = new componentConfigDef(); 
        this.DSP_TEMPLATE_DETAILFormConfig.masterKeyArr =  masterKeyArr;
        this.DSP_TEMPLATE_DETAILFormConfig.masterKeyNameArr =  masterKeyNameArr;
        this.DSP_TEMPLATE_DETAILFormConfig.newRec = true;
      
        console.log("this.DSP_TEMPLATE_DETAILFormConfig:",this.DSP_TEMPLATE_DETAILFormConfig)
       }
    }
  }

}
