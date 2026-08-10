import { Component, Input, Output, EventEmitter, HostListener } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { starServices } from 'starlib';
import { StarNotifyService } from '../../../services/starnotification.service';

//
import { WebcamImage, WebcamInitError, WebcamUtil } from 'ngx-webcam';
import { Subject, Observable } from 'rxjs';
//

import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { Starlib1 } from '../../Starlib1';
import { Subscription } from 'rxjs';
import { IntlService } from "@progress/kendo-angular-intl";
import { tst1Upload, componentConfigDef } from '@modeldir/model';
import { UploadEvent, SelectEvent, ClearEvent, FileInfo } from '@progress/kendo-angular-upload';
import { FileRestrictions } from "@progress/kendo-angular-upload";
const createFormGroup = dataItem => new FormGroup({
  'id': new FormControl(dataItem.id,),
  'agent_id': new FormControl(dataItem.agent_id,),
  'category_id': new FormControl(dataItem.category_id,),
  'completed_at': new FormControl(dataItem.completed_at,),
  'content': new FormControl(dataItem.content, Validators.required),
  'created_at': new FormControl(dataItem.created_at,),
  'priority_id': new FormControl(dataItem.priority_id,),
  'user_id': new FormControl(dataItem.user_id,),
  'updated_at': new FormControl(dataItem.updated_at,),
  'subject': new FormControl(dataItem.subject,),
  'status_id': new FormControl(dataItem.status_id,)
});

declare function getParamConfig(): any;
@Component({
  selector: 'app-dsp-webcam',
  templateUrl: './dsp-webcam.component.html',
  styleUrls: ['./dsp-webcam.component.scss']
})


export class DspWebcamComponent {
  public title = this.starServices.getNLS([], "dsp_upload.dspUpload.component_title", "Tickeit Tst1 Upload");
  public routineName = "TickeitTst1UploadForm";
  private insertCMD = "INSERT_tickeit";
  private updateCMD = "UPDATE_tickeit";
  private deleteCMD = "DELETE_tickeit";
  private getCMD = "GET_tickeit_QUERY";

  public value: Date = new Date(2019, 5, 1, 22);
  public format: string = 'MM/dd/yyyy HH:mm';
  public active = false;

  public form: FormGroup;
  public PDFfileName = this.title + ".PDF";
  public componentConfig: componentConfigDef;
  public editableMode = false;
  private CurrentRec = 0;
  public executeQueryresult: any;
  public isSearch: boolean;
  public isChild: boolean = false;
  public isMaster: boolean = false;
  public isidEnable: boolean = true;

  public FORM_TRIGGER_FAILURE;
  public NOTFOUND;
  public disableEmitSave = false;
  public disableEmitReadCompleted = false;
  public children = ["any"];

  public action = "";
  private Body = [];
  private isNew: boolean;
  public primarKeyReadOnlyArr = { isidreadOnly: false };
  public paramConfig;
  private masterKeyArr = [];
  private masterKeyNameArr = [];
  public masterKey = "";
  public masterKeyName = "id";
  public WhereClause = "";
  public OrderByClause = "";

  public formattedWhere = null;
  public submitted = false;
  public masterParams;
  public isPhonePortrait = false;
  public userLang = "EN";

  //@Input()  
  public showToolBar = true;
  @Output() readCompletedOutput: EventEmitter<any> = new EventEmitter();
  @Output() clearCompletedOutput: EventEmitter<any> = new EventEmitter();
  @Output() saveCompletedOutput: EventEmitter<any> = new EventEmitter();

  constructor(public intl: IntlService, public responsive: BreakpointObserver, private starNotify: StarNotifyService, private starlib1: Starlib1, public starServices: starServices) {
    this.componentConfig = new componentConfigDef();
    this.paramConfig = getParamConfig();
  }
  private componentConfigChangeEvent: Subscription;
  public ngAfterViewInit() {
    this.starServices.setRTL();
  }
  public screenWidth;
  public screenHeight;

  async ngOnInit() {
    this.responsive
      .observe([Breakpoints.HandsetPortrait])
      .subscribe((state: BreakpointState) => {

        this.isPhonePortrait = false;
        this.screenHeight = (window.innerHeight - 50) + "px";
        this.screenWidth = (window.innerWidth -40) + "px";
        //console.log("state:", state, this.screenWidth, this.screenHeight)
        if (state.matches) {
          this.isPhonePortrait = true;

          let componentConfig = new componentConfigDef();
          let masterParams = {
            isPhonePortrait: this.isPhonePortrait
          }
          componentConfig.masterParams = masterParams;
          this.children = ["AppComponent"];
          componentConfig.eventTo = this.children;


        }

      });


    this.form = createFormGroup(
      this.formInitialValues
    );
    this.AttDwnUrl = this.starServices.SERVER_URL + "/api/att?action=download&username=" + this.starServices.sessionParams.USERNAME.toLowerCase() + "&name=";

  }



  private formInitialValues = new tst1Upload();






  public printScreen() {
    window.print();
  }
  public handleComponentConfig(ComponentConfig) {
    if (typeof ComponentConfig !== "undefined") {
      if (this.paramConfig.DEBUG_FLAG)
        console.log("DspUploadComponent ComponentConfig:", ComponentConfig);

      this.componentConfig = this.starServices.setComponentConfig(ComponentConfig, this.componentConfig);
      if (ComponentConfig.isMaster == true)
        this.isMaster = true;

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
        if (this.masterParams.action == "upload") {
          this.showWebcam = true;
          this.imageID = this.masterParams.imageID;
          this.myFiles = this.masterParams.myFiles;
          this.filesDeleted = this.masterParams.filesDeleted;
          this.uploadimage = true;
        }
        else if (this.masterParams.action == "save") {
          this.callSaveAttachment();
        }
        else if (this.masterParams.action == "fetch") {
          this.callGetTempAtt();
        }
        if (typeof this.masterParams.hideOthers != "undefined") {
          this.hideOthers = this.masterParams.hideOthers;
        }
        if (typeof this.masterParams.multipleOption != "undefined") {
          this.multipleOption = this.masterParams.multipleOption;
        }


        //console.log ("tesing:",this.myFiles);
      }

      if (ComponentConfig.languageChanged != null) {
        this.userLang = ComponentConfig.languageChanged;
      }


    }
  }
  @Input() public set setComponentConfig_Input(ComponentConfig: componentConfigDef) {
    this.handleComponentConfig(ComponentConfig);


  }
  public callGetTempAtt() {
    this.att_arr = this.masterParams.att_arr;
    this.img_arr = this.masterParams.img_arr;
    this.myFiles = this.masterParams.myFiles;
    this.filesDeleted = this.masterParams.filesDeleted;
    this.getTempAtt(this.masterParams.data);

  }
  public callSaveAttachment() {
    this.att_arr = this.masterParams.att_arr;
    this.img_arr = this.masterParams.img_arr;
    this.myFiles = this.masterParams.myFiles;
    this.filesDeleted = this.masterParams.filesDeleted;


    for (let i = 0; i < this.att_arr.length; i++) {
      this.saveAttachment(this.att_arr[i]);
    }
    for (let i = 0; i < this.img_arr.length; i++) {
      this.saveAttachment(this.img_arr[i]);
    }
  }
  public accountImg٠ = 'https://demos.telerik.com/kendo-ui/content/web/Customers/RICSU.jpg';
  public accountImg1 = 'http://localhost:9090/api/att?action=download&username=star&name=logo.png';
  public accountImg = "data:image/jpeg;base64,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";

  ////////////
  public imageID;
  public currentFileUpload_del;
  public kendoFiles_del;
  public filesSet_del;
  public attachements_del = [];

  public hideOthers = false;
  public multipleOption = true;

  myRestrictions: FileRestrictions = {
    //allowedExtensions: [".xlsx", ".csv"],
  };
  public uploadSaveUrl = 'saveUrl'; // should represent an actual API endpoint
  public uploadRemoveUrl = 'removeUrl'; // should represent an actual API endpoint

  public myFiles = [];
  public filesDeleted = [];

  public att_arr = ['subject', 'content'];
  public img_arr = ['status_id', 'priority_id'];
  public status_id_Img;
  public priority_id_Img;

  public uploadimage = false;

  public AttDwnUrl = "";



  public clearEventHandler(e: ClearEvent): void { if (this.paramConfig.DEBUG_FLAG) console.log("clearEventHandler:") }

  public selectEventHandler_del(e: SelectEvent, field_id) {
    //console.log("selectEventHandler_del", this.myFiles);
    const that = this;


    e.files.forEach((file) => {
      //console.log('field_id:', field_id, file, this.myFiles);
      //if (this.paramConfig.DEBUG_FLAG) console.log(`File selected: ${file.name}`);
      if (!file.validationErrors) {
        this.currentFileUpload_del = file;
      }
    });
  }
  // public uploadEventHandler(e: UploadEvent) {
  //   console.log("uploadEventHandler", this.myFiles);

  //   var ver = "";
  //   var name = "";
  //   let kendoFiles = e.files;
  //   let filesSet = new Set<File>();
  //   for (let i = 0; i < kendoFiles.length; i++) {
  //     const rawFile: File = kendoFiles[i].rawFile;
  //     if (this.paramConfig.DEBUG_FLAG) console.log("rawFile:" + rawFile)
  //     if (this.paramConfig.DEBUG_FLAG) console.log(rawFile)
  //     filesSet.add(rawFile);
  //     if (this.paramConfig.DEBUG_FLAG) console.log(rawFile.name + " " + rawFile.lastModified)
  //     ver = rawFile.lastModified.toString();
  //     name = rawFile.name;
  //   }



  //   var id = this.paramConfig.DBLoc + "_" + this.imageID;


  //   var page = "?action=upload";
  //   if (this.paramConfig.DEBUG_FLAG) console.log("page:" ,  page, this.myFiles, filesSet, id);
  //   if (this.paramConfig.DEBUG_FLAG) console.log("uploadEventHandler: page:" , page, "filesSet:", filesSet, " id:", id, this.myFiles)
  //   this.starServices.uploadFile(page, filesSet, id);
     

  //   this.completeEventHandler(e);

  // }
  public completeEventHandler(e: SelectEvent) {
    //console.log("completeEventHandler", this.myFiles);

    this.rebuildMyFiles();

    this.buildAttachmentField();
  }

  public rebuildMyFiles() {
    //console.log("rebuildMyFiles", this.myFiles);
    var myFilesNew = [];
    for (var i = 0; i < this.myFiles.length; i++) {
      var exists = this.checkNameExist(myFilesNew, this.myFiles[i].name);
      if (exists == -1) {
        var fileElm = { name: this.myFiles[i].name, uid: this.myFiles[i].uid, size: this.myFiles[i].size };
        myFilesNew.push(fileElm)
      }
    }
    this.myFiles = myFilesNew //here

    if (typeof this.filesDeleted != "undefined") {
      var myFilesNew = [];

      for (var i = 0; i < this.filesDeleted.length; i++) {
        var exists = this.checkNameExist(this.myFiles, this.filesDeleted[i].name);
        if (this.paramConfig.DEBUG_FLAG) console.log(exists + " " + this.filesDeleted[i].name)
        if (exists == -1) {
          var fileElm = { name: this.filesDeleted[i].name, uid: this.filesDeleted[i].uid, size: this.filesDeleted[i].size };
          if (this.paramConfig.DEBUG_FLAG) console.log(fileElm)
          myFilesNew.push(fileElm)
        }
      }
      this.filesDeleted = myFilesNew
    }

    this.buildAttachmentField();

  }
  public buildAttachmentField() {
    //console.log("buildAttachmentField:this.myFiles:", this.myFiles);
    var attachments = "";

    if (this.myFiles != null) {
      if (this.paramConfig.DEBUG_FLAG) console.log("this.myFiles.length:" + this.myFiles.length, this.myFiles)
      var attachmentsArr = [];
      var id = "";
      for (var i = 0; i < this.myFiles.length; i++) {

        //console.log("id:", id);
        var attElm = {
          name: this.myFiles[i].name,
          uid: this.myFiles[i].uid,
          size: this.myFiles[i].size
        }
        attachmentsArr.push(attElm);

      }
      attachments = JSON.stringify(attachmentsArr);


    }
    // formVal.SUBJECT = attachments;
    // this.form.reset(formVal);
    // this.form.markAsDirty();
    //this.form.patchValue({ [field_id]: attachments });

    //console.log("this.form:", this.form);

  }
  public checkNameExist(fileList, name) {
    //console.log("checkNameExist", this.myFiles);
    //console.log("checkNameExist:fileList", fileList, " name:", name)
    var exists = -1;
    var i = 0;
    if (typeof fileList != "undefined") {
      while (i < fileList.length) {
        if (fileList[i].name == name) {
          exists = i;
          break;
        }
        i++;
      }
    }
    return exists;
  }
  public removeFile(name, uid): void {
    //console.log("removeFile", this.myFiles);
    if (this.paramConfig.DEBUG_FLAG) console.log("removeFile:uid:", uid)
    var exists = this.checkNameExist(this.filesDeleted, name);
    if (exists == -1) {
      this.filesDeleted = [];
      this.filesDeleted.push({ name: name, uid: uid })
    }

    if (this.paramConfig.DEBUG_FLAG) console.log(this.filesDeleted)

    var exists = this.checkNameExist(this.myFiles, name);
    if (exists != -1)
      this.myFiles.splice(exists, 1);

    if (this.paramConfig.DEBUG_FLAG) console.log(this.myFiles)

    this.rebuildMyFiles();
  }
  public removeEventHandler_not_used(e: SelectEvent): void {
    //console.log("removeEventHandler_not_used", this.myFiles);
    if (this.paramConfig.DEBUG_FLAG) console.log("removeEventHandler:")
    e.files.forEach((file) => {
      if (this.paramConfig.DEBUG_FLAG) console.log(`File selected: ${file.name}`);
      var exists = this.checkNameExist(this.filesDeleted, file.name);
      if (exists == -1)
        this.filesDeleted.push({ name: file.name })
    });
    if (this.paramConfig.DEBUG_FLAG) console.log(this.filesDeleted)
  }

  public saveAttachment(field_id) {
    var attachments = "";
    var formVal = this.form.value;
    //console.log("this.filesDeleted[]:", field_id, this.filesDeleted[field_id]);
    if (typeof this.filesDeleted[field_id] != "undefined") {
      for (var i = 0; i < this.filesDeleted[field_id].length; i++) {
        let uid = this.filesDeleted[field_id][i].uid;
        let id = uid + "-" + this.filesDeleted[field_id][i].name;
        var orderno = this.paramConfig.DBLoc + "_" + field_id;
        var page = "?action=remove&id=" + id + "&name=" + this.filesDeleted[field_id][i].name + "&orderno=" + orderno;
        if (this.paramConfig.DEBUG_FLAG) console.log("page:" + page);
        var apiURL = this.starServices.SERVER_URL + '/api/att' + page;
        this.starServices.postUpload(apiURL, "").subscribe(result => {
          //if (this.paramConfig.DEBUG_FLAG) console.log('result', result); });
          if (this.paramConfig.DEBUG_FLAG) console.log(result);
        });
      }
    }

    if (this.myFiles[field_id] != null) {
      if (this.paramConfig.DEBUG_FLAG) console.log("this.myFiles[field_id].length:" + this.myFiles[field_id].length, field_id, this.myFiles[field_id])
      var attachmentsArr = [];
      var uid = "";
      let curTime = Date.now();

      for (var i = 0; i < this.myFiles[field_id].length; i++) {
        uid = this.myFiles[field_id][i].uid;
        let id = uid + "-" + this.myFiles[field_id][i].name;
        var orderno = this.paramConfig.DBLoc + "_" + field_id;
        var attElm = {
          name: this.myFiles[field_id][i].name,
          uid: this.myFiles[field_id][i].uid,
          size: this.myFiles[field_id][i].size
        }
        attachmentsArr.push(attElm);
        var page = "?action=save&id=" + id + "&isNew=" + this.isNew + "&name=" + this.myFiles[field_id][i].name + "&orderno=" + orderno;
        if (this.paramConfig.DEBUG_FLAG) console.log("page:" + page);
        var apiURL = this.starServices.SERVER_URL + '/api/att' + page;
        this.starServices.postUpload(apiURL, "").subscribe(result => {
          //if (this.paramConfig.DEBUG_FLAG) console.log('result', result); });
          if (this.paramConfig.DEBUG_FLAG) console.log(result);
        });

      }
      attachments = JSON.stringify(attachmentsArr);


    }
    formVal[field_id] = attachments;
  }

  getTempAttField(data, field_id) {
    //id=120_test3.txt;size=11|id=120_test1.txt;size=11|"

    var attachments = data[field_id];
    if ((attachments != null) && (attachments.trim() != "")) {
      try {
        this.myFiles[field_id] = JSON.parse(attachments);
      } catch (e) {
          //console.log ("Error parsing :",field_data);
          return ;
      }
      if (this.paramConfig.DEBUG_FLAG) console.log("att:this.myFiles[field_id]:", this.myFiles[field_id])

    }
    if (this.paramConfig.DEBUG_FLAG) console.log("att:2this.myFiles[field_id]:", this.myFiles[field_id]);
    if (typeof this.myFiles[field_id] != "undefined") {
      for (var i = 0; i < this.myFiles[field_id].length; i++) {
        let uid = this.myFiles[field_id][i].uid;
        let id = uid + "-" + this.myFiles[field_id][i].name;
        var orderno = this.paramConfig.DBLoc + "_" + field_id;
        var page = "?action=fetch&name=" + this.myFiles[field_id][i].name + "&id=" + id + "&orderno=" + orderno;
        if (this.paramConfig.DEBUG_FLAG) console.log("page:" + page);
        var apiURL = this.starServices.SERVER_URL + '/api/att' + encodeURI(page);
        this.starServices.postUpload(apiURL, "").subscribe(result => {
          //if (this.paramConfig.DEBUG_FLAG) console.log('result', result); });
          if (this.paramConfig.DEBUG_FLAG) console.log("ATT:", result);
        });

      }
    }



  }
  getTempAtt(data) {
    if (typeof data != "undefined") {
      this.myFiles = [];
      for (let i = 0; i < this.att_arr.length; i++) {
        this.getTempAttField(data, this.att_arr[i]);
      }
      for (let i = 0; i < this.img_arr.length; i++) {
        this.getTempAttField(data, this.img_arr[i]);
      }

    }

  }
  ///////


  public  dataUrlToBlob(dataUrl) {
  const [header, base64Data] = dataUrl.split(",");

  // Extract MIME type
  const mimeMatch = header.match(/:(.*?);/);
  const mimeType = mimeMatch ? mimeMatch[1] : "application/octet-stream";

  // Decode Base64
  const binary = atob(base64Data);
  const length = binary.length;
  const bytes = new Uint8Array(length);

  for (let i = 0; i < length; i++) {
    bytes[i] = binary.charCodeAt(i);
  }

  return new Blob([bytes], { type: mimeType });
}


  public InsertImage(field_id) {
   
    //console.log("InsertImage", this.myFiles);
    //console.log("InsertImage:field_id:", field_id, this.myFiles);
    //console.log("this.myFiles[]:", this.myFiles)

    this.uploadimage = false;
    let masterParams = {
      "myFiles": this.myFiles,
      "filesDeleted": this.filesDeleted,
      "field_id": field_id,
      "camImage": this.camImage
    }

    this.saveCompletedOutput.emit(masterParams);
    //this.myFiles = [];
    //console.log("tesing:", masterParams);
    return;
    
    
    // This code is commented untill able to make this.starServices.sendGetCommand working
    //let field_id = this.imageID ;
    //console.log("value:", this.form.value[field_id]);
    let value = this.form.value[field_id];
    //console.log("value:", value, value.length);
    if ((value != "") && (value != "[]")) {
      value = JSON.parse(value);
      let name = value[0].name;
      var page = "?action=download&username=" + this.starServices.sessionParams.USERNAME.toLowerCase() + "&name=" + name;
      page = encodeURI(page);
      if (this.paramConfig.DEBUG_FLAG) console.log("page:" + page);
      var apiURL = this.starServices.SERVER_URL + '/api/att';


      this.starServices.sendGetCommand(apiURL, page).subscribe(result => {
        if (this.paramConfig.DEBUG_FLAG) console.log("result:");
        if (this.paramConfig.DEBUG_FLAG) console.log(result.data[0].data);
        if (result != null) {
          console.log(result);



        }


      },
        err => {
          alert('error:' + err.message);
        });

    }


  }
  public cancelImage() {
    //console.log("cancelImage", this.myFiles);
    this.uploadimage = false;
  }





  ////
  public onSelect(ev: SelectEvent): void {
    //console.log("onSelect", this.myFiles);
    let i = 0;
    ev.files.forEach((file: FileInfo) => {
      if (file.rawFile) {
        const reader = new FileReader();

        reader.onloadend = () => {
          let img = new Image();

          img.src = <string>reader.result;
          //console.log(img.src)
          //this.myFiles[i].imgSrc= img.src;
          this.accountImg = img.src;

        };

        reader.readAsDataURL(file.rawFile);
      }
    });
  }

  public clearAttImg() {
    //console.log("clearAttImg", this.myFiles);
    for (let i = 0; i < this.att_arr.length; i++) {
      this.myFiles[this.att_arr[i]] = [];
    }
    for (let i = 0; i < this.img_arr.length; i++) {
      this.myFiles[this.img_arr[i]] = [];
    }
  }




  ///////
 
  public allowCameraSwitch = true;
  public multipleWebcamsAvailable = false;
  public deviceId: string;
  public camImage = null;
  @Output() public pictureTaken = new EventEmitter<WebcamImage>();


public get videoOptions(): MediaTrackConstraints {
  const result: MediaTrackConstraints = {};
  let camMode = 'user';
  if (this.isPhonePortrait) {
    camMode = 'environment';
  }
  result.facingMode = { ideal: camMode };
  return result;
}

  public errors: WebcamInitError[] = [];
  // webcam snapshot trigger
  private trigger: Subject<void> = new Subject<void>();
  // switch to next / previous / specific webcam; true/false: forward/backwards, string: deviceIdprivate 
  nextWebcam: Subject<boolean | string> = new Subject<boolean | string>();

  ///////
  public showWebcam = false;
  public triggerSnapshot(): void {
    this.trigger.next();
    this.showWebcam = false;

  } 
  public resetPic(){
    this.showWebcam = true;
  }

  
  public handleInitError(error: WebcamInitError): void {
    this.errors.push(error);
  } 
  
  public showNextWebcam(directionOrDeviceId: boolean | string): void {
    // true => move forward through devices
    // false => move backwards through devices
    // string => move to device with given deviceId
    this.nextWebcam.next(directionOrDeviceId);
  } 
  
  public handleImage(webcamImage: WebcamImage): void {
    //console.info('handleImage:received webcam image', webcamImage);
    this.camImage = webcamImage.imageAsDataUrl;
    //console.log("handleImage:this.camImage :", this.camImage)
    this.pictureTaken.emit(webcamImage);

     
    const blob = this.dataUrlToBlob(this.camImage);
    let uid = crypto.randomUUID()
    let name = uid;
    const file = new File(
      [blob],                // data (Array of Blob / BufferSource)
      name,           // filename
      {
        type: "image/png",
        lastModified: Date.now(),
      }
    );
    //console.log("handleImage:file:", file);
    let filesSet = new Set<File>();
    filesSet.add(file);
    var id = this.paramConfig.DBLoc + "_" + this.imageID  ;
    //console.log("handleImage:filesSet:", filesSet,"id:", id );
  

  var id = this.paramConfig.DBLoc + "_" + this.imageID  ;


  var page = "?action=upload";
  if (this.paramConfig.DEBUG_FLAG) console.log("handleImage: size:",file.size);
  if (this.paramConfig.DEBUG_FLAG) console.log("handleImage: page:" , page, "filesSet:", filesSet, " id:", id)
  this.starServices.uploadFile(page, filesSet, id);
  var fileElm = { 
      name: file.name, 
      uid: uid ,
      size: file.size,
      extension: file.name.split(".").pop(),
      rawFile: file
    };
  if (this.paramConfig.DEBUG_FLAG) console.log(fileElm)
  this.myFiles = [];
  this.myFiles.push(fileElm)
if (this.paramConfig.DEBUG_FLAG) console.log("handleImage: page:" , page, "filesSet:", filesSet, " id:", id, "this.myFiles:",this.myFiles)

  this.completeEventHandler(null);
    
  }
  
  public cameraWasSwitched(deviceId: string): void {
    //console.log('active device: ' + deviceId);
    this.deviceId = deviceId;
  } 
  
  public get triggerObservable(): Observable<void> {
    return this.trigger.asObservable();
  } 
  
  public get nextWebcamObservable(): Observable<boolean | string> {
    return this.nextWebcam.asObservable();
  }



  ////////


}


