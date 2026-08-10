import {
  ProgressBarComponent
} from "./chunk-FZUVKZDE.js";
import {
  ButtonComponent
} from "./chunk-GUER2DF3.js";
import {
  arrowRotateCwSmallIcon,
  cancelIcon,
  checkIcon,
  copyIcon,
  exclamationCircleIcon,
  fileAudioIcon,
  fileConfigIcon,
  fileDataIcon,
  fileDiscImageIcon,
  fileIcon,
  fileImageIcon,
  filePdfIcon,
  filePresentationIcon,
  fileProgrammingIcon,
  fileTxtIcon,
  fileVideoIcon,
  fileZipIcon,
  pauseSmIcon,
  playSmIcon,
  uploadIcon,
  xIcon
} from "./chunk-KXMGKHT2.js";
import {
  PopupService
} from "./chunk-NKWNDTJB.js";
import {
  IconWrapperComponent,
  IconsService
} from "./chunk-3ZH7CTYC.js";
import {
  KendoInput,
  Keys,
  ResizeBatchService,
  guid,
  isChanged,
  isControlRequired,
  isDocumentAvailable,
  normalizeKeys
} from "./chunk-5AZCHGRK.js";
import {
  ComponentMessages,
  L10N_PREFIX,
  LocalizationService
} from "./chunk-YGURSKD5.js";
import {
  A
} from "./chunk-RWPIEFVW.js";
import {
  NG_VALUE_ACCESSOR,
  NgControl
} from "./chunk-CW7PMWWW.js";
import {
  animate,
  state,
  style,
  transition,
  trigger
} from "./chunk-OBI53R7Q.js";
import {
  HttpClient,
  HttpEventType,
  HttpHeaders,
  HttpRequest,
  HttpResponse
} from "./chunk-F2IMJFZ7.js";
import {
  NgClass,
  NgTemplateOutlet
} from "./chunk-YS5E6LKP.js";
import {
  ChangeDetectorRef,
  Component,
  ContentChild,
  Directive,
  ElementRef,
  EventEmitter,
  HostBinding,
  HostListener,
  Inject,
  Injectable,
  Injector,
  Input,
  NgModule,
  NgZone,
  Output,
  Renderer2,
  TemplateRef,
  ViewChild,
  ViewChildren,
  forwardRef,
  isDevMode,
  setClassMetadata,
  ɵɵInheritDefinitionFeature,
  ɵɵNgOnChangesFeature,
  ɵɵProvidersFeature,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵcontentQuery,
  ɵɵdefineComponent,
  ɵɵdefineDirective,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementContainer,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵgetInheritedFactory,
  ɵɵinject,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnextContext,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵpureFunction1,
  ɵɵpureFunction2,
  ɵɵpureFunction3,
  ɵɵqueryRefresh,
  ɵɵreference,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵviewQuery
} from "./chunk-R7LRY632.js";
import {
  fromEvent,
  merge
} from "./chunk-UG3XN6F5.js";
import {
  filter
} from "./chunk-WISTXZPE.js";

// node_modules/@progress/kendo-angular-upload/fesm2022/progress-kendo-angular-upload.mjs
var _c0 = ["fileSelectButton"];
var _c1 = ["clearButton"];
var _c2 = ["uploadButton"];
function FileListItemActionButtonComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span", 1);
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵtextInterpolate1("", ctx_r0.progress, "%");
  }
}
function FileListItemActionButtonComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "button", 5);
    ɵɵlistener("pointerdown", function FileListItemActionButtonComponent_Conditional_2_Template_button_pointerdown_0_listener($event) {
      ɵɵrestoreView(_r2);
      return ɵɵresetView($event.preventDefault());
    })("click", function FileListItemActionButtonComponent_Conditional_2_Template_button_click_0_listener() {
      ɵɵrestoreView(_r2);
      const ctx_r0 = ɵɵnextContext();
      return ɵɵresetView(ctx_r0.onRetryClick());
    });
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵproperty("svgIcon", ctx_r0.retrySVGIcon);
    ɵɵattribute("tabIndex", -1)("aria-hidden", true)("title", ctx_r0.retryButtonTitle);
  }
}
function FileListItemActionButtonComponent_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "button", 6);
    ɵɵlistener("pointerdown", function FileListItemActionButtonComponent_Conditional_3_Template_button_pointerdown_0_listener($event) {
      ɵɵrestoreView(_r3);
      return ɵɵresetView($event.preventDefault());
    })("click", function FileListItemActionButtonComponent_Conditional_3_Template_button_click_0_listener() {
      ɵɵrestoreView(_r3);
      const ctx_r0 = ɵɵnextContext();
      return ɵɵresetView(ctx_r0.onPauseResumeClick());
    });
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵproperty("svgIcon", ctx_r0.isPaused ? ctx_r0.playSVGIcon : ctx_r0.pauseSVGIcon)("icon", ctx_r0.isPaused ? "play-sm" : "pause-sm");
    ɵɵattribute("tabIndex", -1)("aria-hidden", true)("title", ctx_r0.pauseResumeButtonTitle);
  }
}
function FileListItemActionButtonComponent_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "button", 7);
    ɵɵlistener("click", function FileListItemActionButtonComponent_Conditional_4_Template_button_click_0_listener($event) {
      ɵɵrestoreView(_r4);
      const ctx_r0 = ɵɵnextContext();
      return ɵɵresetView(ctx_r0.onRemoveCancelClick($event));
    });
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵclassProp("k-delete", !ctx_r0.isUploading);
    ɵɵproperty("svgIcon", ctx_r0.isUploading ? ctx_r0.cancelSVGIcon : ctx_r0.deleteSVGIcon)("icon", ctx_r0.isUploading ? "cancel" : "x");
    ɵɵattribute("tabIndex", -1)("aria-hidden", true)("title", ctx_r0.actionButtonTitle);
  }
}
var _c3 = () => ({
  visible: false
});
var _c4 = (a0, a1) => ({
  "k-file-validation-message": a0,
  "k-file-size": a1
});
var _c5 = (a0, a1, a2) => ({
  templateRef: a0,
  state: a1,
  $implicit: a2
});
function FileListMultipleItemsComponent_Conditional_4_For_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span", 7)(1, "span", 8);
    ɵɵtext(2);
    ɵɵelementEnd();
    ɵɵelementStart(3, "span", 9);
    ɵɵtext(4);
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const file_r1 = ctx.$implicit;
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵproperty("title", file_r1.name);
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", file_r1.name, " ");
    ɵɵadvance();
    ɵɵproperty("ngClass", ɵɵpureFunction2(5, _c4, file_r1.validationErrors, !file_r1.validationErrors));
    ɵɵattribute("aria-live", "polite");
    ɵɵadvance();
    ɵɵtextInterpolate(ctx_r1.fileStatusText(file_r1));
  }
}
function FileListMultipleItemsComponent_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵrepeaterCreate(0, FileListMultipleItemsComponent_Conditional_4_For_1_Template, 5, 8, "span", 7, ɵɵrepeaterTrackByIdentity);
    ɵɵelementStart(2, "span", 4);
    ɵɵtext(3);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵrepeater(ctx_r1.files);
    ɵɵadvance(3);
    ɵɵtextInterpolate(ctx_r1.batchStatusText);
  }
}
function FileListMultipleItemsComponent_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0, 5);
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵproperty("ngTemplateOutlet", ctx_r1.fileInfoTemplate.templateRef)("ngTemplateOutletContext", ɵɵpureFunction3(2, _c5, ctx_r1.fileInfoTemplate.templateRef, ctx_r1.files[0].state, ctx_r1.files));
  }
}
var _c6 = (a0, a1, a2) => ({
  "k-file-validation-message": a0,
  "k-file-size": a1,
  "k-file-summary": a2
});
var _c7 = (a0) => [a0];
function FileListSingleItemComponent_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span", 6);
    ɵɵtext(1);
    ɵɵelementEnd();
    ɵɵelementStart(2, "span", 7);
    ɵɵtext(3);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵproperty("title", ctx_r0.file.name);
    ɵɵadvance();
    ɵɵtextInterpolate(ctx_r0.file.name);
    ɵɵadvance();
    ɵɵproperty("ngClass", ɵɵpureFunction3(5, _c6, ctx_r0.file.validationErrors, !ctx_r0.file.validationErrors && ctx_r0.isNotYetUploaded, ctx_r0.isUploadSuccessful || ctx_r0.isUploadFailed));
    ɵɵattribute("aria-live", "polite");
    ɵɵadvance();
    ɵɵtextInterpolate(ctx_r0.fileStatusText);
  }
}
function FileListSingleItemComponent_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0, 4);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵproperty("ngTemplateOutlet", ctx_r0.fileInfoTemplate.templateRef)("ngTemplateOutletContext", ɵɵpureFunction3(4, _c5, ctx_r0.fileInfoTemplate.templateRef, ctx_r0.file.state, ɵɵpureFunction1(2, _c7, ctx_r0.file)));
  }
}
var _c8 = ["kendo-upload-file-list", ""];
function FileListComponent_For_1_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "kendo-upload-file-list-single-item", 1);
  }
  if (rf & 2) {
    const files_r1 = ɵɵnextContext().$implicit;
    const ctx_r1 = ɵɵnextContext();
    ɵɵproperty("disabled", ctx_r1.disabled)("file", files_r1[0])("fileInfoTemplate", ctx_r1.fileInfoTemplate);
  }
}
function FileListComponent_For_1_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "kendo-upload-file-list-multiple-items", 2);
  }
  if (rf & 2) {
    const files_r1 = ɵɵnextContext().$implicit;
    const ctx_r1 = ɵɵnextContext();
    ɵɵproperty("disabled", ctx_r1.disabled)("files", files_r1)("fileInfoTemplate", ctx_r1.fileInfoTemplate);
  }
}
function FileListComponent_For_1_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0, 3);
  }
  if (rf & 2) {
    const files_r1 = ɵɵnextContext().$implicit;
    const ctx_r1 = ɵɵnextContext();
    ɵɵproperty("ngTemplateOutlet", ctx_r1.fileTemplate.templateRef)("ngTemplateOutletContext", ɵɵpureFunction3(2, _c5, ctx_r1.fileTemplate.templateRef, files_r1[0].state, files_r1));
  }
}
function FileListComponent_For_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "li", 0);
    ɵɵtemplate(1, FileListComponent_For_1_Conditional_1_Template, 1, 3, "kendo-upload-file-list-single-item", 1)(2, FileListComponent_For_1_Conditional_2_Template, 1, 3, "kendo-upload-file-list-multiple-items", 2)(3, FileListComponent_For_1_Conditional_3_Template, 1, 6, "ng-container", 3);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const files_r1 = ctx.$implicit;
    const ɵ$index_1_r3 = ctx.$index;
    const ctx_r1 = ɵɵnextContext();
    ɵɵproperty("files", files_r1)("index", ɵ$index_1_r3);
    ɵɵadvance();
    ɵɵconditional(files_r1.length === 1 && !ctx_r1.fileTemplate ? 1 : -1);
    ɵɵadvance();
    ɵɵconditional(files_r1.length > 1 && !ctx_r1.fileTemplate ? 2 : -1);
    ɵɵadvance();
    ɵɵconditional(ctx_r1.fileTemplate ? 3 : -1);
  }
}
var _c9 = ["fileSelectInput"];
function UploadComponent_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "kendo-upload-status-total", 7);
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext();
    ɵɵproperty("fileList", ctx_r2.fileList);
  }
}
function UploadComponent_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "ul", 9);
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext();
    ɵɵproperty("disabled", ctx_r2.disabled)("fileList", ctx_r2.fileList.files)("fileTemplate", ctx_r2.fileTemplate)("fileInfoTemplate", ctx_r2.fileInfoTemplate)("id", ctx_r2.fileListId);
  }
}
function UploadComponent_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "kendo-upload-action-buttons", 10);
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext();
    ɵɵproperty("disabled", ctx_r2.disabled)("actionsLayout", ctx_r2.actionsLayout);
  }
}
var _c10 = ["*"];
function FileSelectComponent_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "ul", 8);
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext();
    ɵɵproperty("disabled", ctx_r2.disabled)("fileList", ctx_r2.fileList.files)("fileTemplate", ctx_r2.fileTemplate)("fileInfoTemplate", ctx_r2.fileInfoTemplate)("id", ctx_r2.fileListId);
  }
}
var FileState;
(function(FileState2) {
  FileState2[FileState2["Failed"] = 0] = "Failed";
  FileState2[FileState2["Initial"] = 1] = "Initial";
  FileState2[FileState2["Selected"] = 2] = "Selected";
  FileState2[FileState2["Uploaded"] = 3] = "Uploaded";
  FileState2[FileState2["Uploading"] = 4] = "Uploading";
  FileState2[FileState2["Paused"] = 5] = "Paused";
})(FileState || (FileState = {}));
var FileMap = class {
  _files;
  constructor() {
    this._files = {};
  }
  add(file) {
    const uid = file.uid;
    if (this.has(uid)) {
      if (file.validationErrors && file.validationErrors.length > 0) {
        this._files[uid].unshift(file);
      } else {
        this._files[uid].push(file);
      }
    } else {
      this._files[uid] = [file];
    }
  }
  remove(uid) {
    if (this.has(uid)) {
      this._files[uid] = null;
      delete this._files[uid];
    }
  }
  clear() {
    const allFiles = this._files;
    for (const uid in allFiles) {
      if (allFiles.hasOwnProperty(uid)) {
        for (const file of allFiles[uid]) {
          if (file.httpSubscription) {
            file.httpSubscription.unsubscribe();
          }
        }
        allFiles[uid] = null;
        delete allFiles[uid];
      }
    }
  }
  has(uid) {
    return uid in this._files;
  }
  get(uid) {
    return this._files[uid];
  }
  setFilesState(files, state2) {
    for (const file of files) {
      this.setFilesStateByUid(file.uid, state2);
    }
  }
  setFilesStateByUid(uid, state2) {
    this.get(uid).forEach((f) => {
      f.state = state2;
    });
  }
  get count() {
    return Object.getOwnPropertyNames(this._files).length;
  }
  get files() {
    const initial = this._files;
    const transformed = [];
    for (const uid in initial) {
      if (initial.hasOwnProperty(uid)) {
        transformed.push(initial[uid]);
      }
    }
    return transformed;
  }
  get filesFlat() {
    const initial = this._files;
    const transformed = [];
    for (const uid in initial) {
      if (initial.hasOwnProperty(uid)) {
        const current = initial[uid];
        current.forEach((file) => {
          transformed.push(file);
        });
      }
    }
    return transformed;
  }
  get filesToUpload() {
    const files = this._files;
    const notUploaded = [];
    for (const uid in files) {
      if (files.hasOwnProperty(uid)) {
        const currentFiles = files[uid];
        let currentFilesValid = true;
        for (const file of currentFiles) {
          if (file.state !== FileState.Selected || file.validationErrors && file.validationErrors.length > 0) {
            currentFilesValid = false;
          }
        }
        if (currentFilesValid) {
          notUploaded.push(currentFiles);
        }
      }
    }
    return notUploaded;
  }
  get firstFileToUpload() {
    const files = this._files;
    for (const uid in files) {
      if (files.hasOwnProperty(uid)) {
        const currentFiles = files[uid];
        let currentFilesValid = true;
        for (const file of currentFiles) {
          if (file.state !== FileState.Selected || file.validationErrors && file.validationErrors.length > 0) {
            currentFilesValid = false;
          }
        }
        if (currentFilesValid) {
          return currentFiles;
        }
      }
    }
    return null;
  }
  getFilesWithState(state2) {
    return this.filesFlat.filter((file) => file.state === state2);
  }
  hasFileWithState(fileStates) {
    const files = this._files;
    for (const uid in files) {
      if (files.hasOwnProperty(uid)) {
        const currentFiles = files[uid];
        for (const file of currentFiles) {
          if (fileStates.indexOf(file.state) >= 0) {
            return true;
          }
        }
      }
    }
    return false;
  }
};
var CancelEvent = class {
  /**
   * The files that you canceled during the upload process.
   */
  files;
  /**
   * @hidden
   * Constructs the event arguments for the `cancel` event.
   * @param files - The list of the files that were going to be uploaded.
   */
  constructor(files) {
    this.files = files;
  }
};
var PreventableEvent = class {
  prevented = false;
  /**
   * Prevents the default action for a specified event.
   * In this way, the source component suppresses the built-in behavior that follows the event.
   */
  preventDefault() {
    this.prevented = true;
  }
  /**
   * If the event is prevented by any of its subscribers, returns `true`.
   *
   * @returns `true` if the default action was prevented. Otherwise, returns `false`.
   */
  isDefaultPrevented() {
    return this.prevented;
  }
};
var ClearEvent = class extends PreventableEvent {
  /**
   * @hidden
   * Constructs the event arguments for the `clear` event.
   */
  constructor() {
    super();
  }
};
var ErrorEvent = class {
  /**
   * The array of files that failed to be uploaded or removed.
   */
  files;
  /**
   * The operation type that failed (`upload` or `remove`).
   */
  operation;
  /**
   * The HTTP response returned by the server containing error details.
   */
  response;
  /**
   * @hidden
   * Constructs the event arguments for the `error` event.
   *
   * @param files - The list of the files that failed to be uploaded or removed.
   * @param operation - The operation type (`upload` or `remove`).
   * @param response - The response object returned by the server.
   */
  constructor(files, operation, response) {
    this.files = files;
    this.operation = operation;
    this.response = response;
  }
};
var PauseEvent = class {
  /**
   * The file that you paused during the upload process.
   */
  file;
  /**
   * @hidden
   * Constructs the event arguments for the `pause` event.
   * @param file - The file that is going to be paused.
   */
  constructor(file) {
    this.file = file;
  }
};
var RemoveEvent = class extends PreventableEvent {
  /**
   * An optional object that you send to the `remove` handler as key/value pairs.
   *
   */
  data;
  /**
   * The files that you will remove from the server.
   */
  files;
  /**
   * The headers of the request.
   * You can use this to add custom headers to the remove request.
   */
  headers;
  /**
   * @hidden
   * Constructs the event arguments for the `remove` event.
   * @param files - The list of the files that will be removed.
   * @param headers - The headers of the request.
   */
  constructor(files, headers) {
    super();
    this.files = files;
    this.headers = headers;
  }
};
var ResumeEvent = class {
  /**
   * The file that you resumed during the upload process.
   */
  file;
  /**
   * @hidden
   * Constructs the event arguments for the `resume` event.
   * @param file - The file that is going to be resumed.
   */
  constructor(file) {
    this.file = file;
  }
};
var SelectEvent = class extends PreventableEvent {
  /**
   * The files that are selected for upload.
   */
  files;
  /**
   * @hidden
   * Constructs the event arguments for the `select` event.
   * @param files - The list of the selected files.
   */
  constructor(files) {
    super();
    this.files = files;
  }
};
var SuccessEvent = class extends PreventableEvent {
  /**
   * The files that you successfully uploaded or removed.
   */
  files;
  /**
   * The operation type that succeeded (`upload` or `remove`).
   */
  operation;
  /**
   * The HTTP response that the server returns to confirm success.
   */
  response;
  /**
   * @hidden
   * Constructs the event arguments for the `success` event.
   * @param files - The list of the files that were uploaded or removed.
   * @param operation - The operation type (`upload` or `remove`).
   * @param response - The response object returned by the server.
   */
  constructor(files, operation, response) {
    super();
    this.files = files;
    this.operation = operation;
    this.response = response;
  }
};
var UploadEvent = class extends PreventableEvent {
  /**
   * The optional object that you send to the `upload` handler as key/value pairs.
   *
   */
  data;
  /**
   * The files that you will upload to the server.
   */
  files;
  /**
   * The headers of the request.
   * You can use this to add custom headers to the upload request.
   */
  headers;
  /**
   * @hidden
   * Constructs the event arguments for the `upload` event.
   * @param files - The list of the files that will be uploaded.
   * @param headers - The headers of the request.
   */
  constructor(files, headers) {
    super();
    this.files = files;
    this.headers = headers;
  }
};
var UploadProgressEvent = class {
  /**
   * The files that you are currently uploading.
   */
  files;
  /**
   * The upload progress as a percentage from 0 to 100.
   */
  percentComplete;
  /**
   * @hidden
   * Constructs the event arguments for the `uploadprogress` event.
   * @param files - The list of files that are being uploaded.
   * @param percentComplete - The portion that has been uploaded.
   */
  constructor(files, percentComplete) {
    this.files = files;
    this.percentComplete = percentComplete;
  }
};
var fileGroupMap = {
  audio: [".aif", ".iff", ".m3u", ".m4a", ".mid", ".mp3", ".mpa", ".wav", ".wma", ".ogg", ".wav", ".wma", ".wpl"],
  video: [".3g2", ".3gp", ".avi", ".asf", ".flv", ".m4u", ".rm", ".h264", ".m4v", ".mkv", ".mov", ".mp4", ".mpg", ".rm", ".swf", ".vob", ".wmv"],
  image: [".ai", ".dds", ".heic", ".jpe", "jfif", ".jif", ".jp2", ".jps", ".eps", ".bmp", ".gif", ".jpeg", ".jpg", ".png", ".ps", ".psd", ".svg", ".svgz", ".tif", ".tiff"],
  txt: [".doc", ".docx", ".log", ".pages", ".tex", ".wpd", ".wps", ".odt", ".rtf", ".text", ".txt", ".wks"],
  presentation: [".key", ".odp", ".pps", ".ppt", ".pptx"],
  data: [".xlr", ".xls", ".xlsx"],
  programming: [".tmp", ".bak", ".msi", ".cab", ".cpl", ".cur", ".dll", ".dmp", ".drv", ".icns", ".ico", ".link", ".sys", ".cfg", ".ini", ".asp", ".aspx", ".cer", ".csr", ".css", ".dcr", ".htm", ".html", ".js", ".php", ".rss", ".xhtml"],
  pdf: [".pdf"],
  config: [".apk", ".app", ".bat", ".cgi", ".com", ".exe", ".gadget", ".jar", ".wsf"],
  zip: [".7z", ".cbr", ".gz", ".sitx", ".arj", ".deb", ".pkg", ".rar", ".rpm", ".tar.gz", ".z", ".zip", ".zipx"],
  discImage: [".dmg", ".iso", ".toast", ".vcd", ".bin", ".cue", ".mdf"]
};
var fileSVGGroupMap = {
  audio: fileAudioIcon,
  video: fileVideoIcon,
  image: fileImageIcon,
  txt: fileTxtIcon,
  presentation: filePresentationIcon,
  data: fileDataIcon,
  programming: fileProgrammingIcon,
  pdf: filePdfIcon,
  config: fileConfigIcon,
  zip: fileZipIcon,
  discImage: fileDiscImageIcon
};
var getTotalFilesSizeMessage = (files) => {
  let totalSize = 0;
  let i;
  if (typeof files[0].size === "number") {
    for (i = 0; i < files.length; i++) {
      if (files[i].size) {
        totalSize += files[i].size;
      }
    }
  } else {
    return "";
  }
  totalSize /= 1024;
  if (totalSize < 1024) {
    return totalSize.toFixed(2) + " KB";
  } else {
    return (totalSize / 1024).toFixed(2) + " MB";
  }
};
var stripPath = (name) => {
  const slashIndex = name.lastIndexOf("\\");
  return slashIndex !== -1 ? name.substr(slashIndex + 1) : name;
};
var getFileExtension = (fileName) => {
  const rFileExtension = /\.([^\.]+)$/;
  const matches = fileName.match(rFileExtension);
  return matches ? matches[0] : "";
};
var validateInitialFileInfo = (file) => {
  if (file instanceof Object && file.hasOwnProperty("name")) {
    return true;
  }
  return false;
};
var validateInitialFileSelectFile = (file) => {
  if (file instanceof File || validateInitialFileInfo(file)) {
    return true;
  }
  return false;
};
var getInitialFileInfo = (fakeFile) => {
  fakeFile.extension = fakeFile.extension || getFileExtension(fakeFile.name);
  fakeFile.name = fakeFile.name;
  fakeFile.size = fakeFile.size || 0;
  if (!fakeFile.hasOwnProperty("state")) {
    fakeFile.state = FileState.Initial;
  }
  if (!fakeFile.hasOwnProperty("uid")) {
    fakeFile.uid = guid();
  }
  return fakeFile;
};
var convertFileToFileInfo = (file) => {
  const fileInfo = getFileInfo(file);
  fileInfo.uid = guid();
  fileInfo.state = FileState.Selected;
  return fileInfo;
};
var getFileInfo = (rawFile) => {
  const fileName = rawFile.name;
  const fileSize = rawFile.size;
  return {
    extension: getFileExtension(fileName),
    name: fileName,
    rawFile,
    size: fileSize,
    state: FileState.Selected
  };
};
var getAllFileInfo = (rawFiles) => {
  const allFileInfo = new Array();
  let i;
  for (i = 0; i < rawFiles.length; i++) {
    allFileInfo.push(getFileInfo(rawFiles[i]));
  }
  return allFileInfo;
};
var fileHasValidationErrors = (file) => {
  if (file.validationErrors && file.validationErrors.length > 0) {
    return true;
  }
  return false;
};
var filesHaveValidationErrors = (files) => {
  for (const file of files) {
    if (fileHasValidationErrors(file)) {
      return true;
    }
  }
  return false;
};
var inputFiles = (input) => {
  if (input.files) {
    return getAllFileInfo(input.files);
  } else {
    const fileNames = input.value.split("|").map((file, index) => {
      const fileName = file.trim();
      return {
        extension: getFileExtension(fileName),
        name: stripPath(fileName),
        rawFile: null,
        size: (index + 1) * 1e3,
        state: FileState.Selected
      };
    });
    return fileNames;
  }
};
var assignGuidToFiles = (files, isUnique) => {
  const uid = guid();
  return files.map((file) => {
    file.uid = isUnique ? guid() : uid;
    return file;
  });
};
var focusableRegex = /^(?:a|input|select|textarea|button|object)$/i;
var IGNORE_TARGET_CLASSES = "k-icon k-select k-input k-multiselect-wrap";
var UPLOAD_CLASSES = "k-upload-button k-clear-selected k-upload-selected k-upload-action k-file";
var isVisible = (element) => {
  if (!isDocumentAvailable()) {
    return false;
  }
  const rect = element.getBoundingClientRect();
  return !!(rect.width && rect.height) && window.getComputedStyle(element).visibility !== "hidden";
};
var toClassList = (classNames) => String(classNames).trim().split(" ");
var hasClasses = (element, classNames) => {
  const namesList = toClassList(classNames);
  return Boolean(toClassList(element.className).find((className) => namesList.indexOf(className) >= 0));
};
var isFocusable = (element, checkVisibility = true) => {
  if (element.tagName) {
    const tagName = element.tagName.toLowerCase();
    const tabIndex = element.getAttribute("tabIndex");
    const validTabIndex = tabIndex !== null && !isNaN(tabIndex) && tabIndex > -1;
    let focusable = false;
    if (focusableRegex.test(tagName)) {
      focusable = !element.disabled;
    } else {
      focusable = validTabIndex;
    }
    return focusable && (!checkVisibility || isVisible(element));
  }
  return false;
};
var getFileGroupCssClass = (fileExtension) => {
  const initial = "file";
  for (const group in fileGroupMap) {
    if (fileGroupMap[group].indexOf(fileExtension) >= 0) {
      if (group === "discImage") {
        return `${initial}-disc-image`;
      }
      return `${initial}-${group}`;
    }
  }
  return initial;
};
var isPresent = (value) => value !== null && value !== void 0;
var fileSVGGroupIcon = (extension) => {
  const initial = fileIcon;
  if (extension) {
    for (const group in fileGroupMap) {
      if (fileGroupMap[group].indexOf(extension.toLowerCase()) >= 0) {
        return fileSVGGroupMap[group];
      }
    }
  }
  return initial;
};
var fileGroupClass = (extension) => getFileGroupCssClass(extension || "");
var ChunkMap = class {
  _files;
  constructor() {
    this._files = {};
  }
  add(uid, totalChunks) {
    const initialChunkInfo = {
      index: 0,
      position: 0,
      retries: 0,
      totalChunks
    };
    this._files[uid] = initialChunkInfo;
    return initialChunkInfo;
  }
  remove(uid) {
    if (this.has(uid)) {
      this._files[uid] = null;
      delete this._files[uid];
    }
  }
  has(uid) {
    return uid in this._files;
  }
  get(uid) {
    return this._files[uid];
  }
};
var UploadService = class _UploadService {
  http;
  cancelEvent = new EventEmitter();
  clearEvent = new EventEmitter();
  completeEvent = new EventEmitter();
  errorEvent = new EventEmitter();
  pauseEvent = new EventEmitter();
  removeEvent = new EventEmitter();
  resumeEvent = new EventEmitter();
  selectEvent = new EventEmitter();
  successEvent = new EventEmitter();
  uploadEvent = new EventEmitter();
  uploadProgressEvent = new EventEmitter();
  /**
   * Required for the `ControlValueAccessor` integration
   */
  changeEvent = new EventEmitter();
  /**
   * Default async settings
   */
  async = {
    autoUpload: true,
    batch: false,
    chunk: false,
    concurrent: true,
    removeField: "fileNames",
    removeHeaders: new HttpHeaders(),
    removeMethod: "POST",
    removeUrl: "",
    responseType: "json",
    saveField: "files",
    saveHeaders: new HttpHeaders(),
    saveMethod: "POST",
    saveUrl: "",
    withCredentials: true
  };
  /**
   * Default chunk settings
   */
  chunk = {
    autoRetryAfter: 100,
    size: 1024 * 1024,
    maxAutoRetries: 1,
    resumable: true
  };
  component = "Upload";
  chunkMap = new ChunkMap();
  fileList = new FileMap();
  constructor(http) {
    this.http = http;
  }
  get files() {
    return this.fileList;
  }
  setChunkSettings(settings) {
    if (settings !== false) {
      this.async.chunk = true;
      if (typeof settings === "object") {
        this.chunk = Object.assign({}, this.chunk, settings);
      }
    }
  }
  onChange() {
    const files = this.fileList.filesFlat.filter((file) => {
      return file.state === FileState.Initial || file.state === FileState.Uploaded;
    });
    this.changeEvent.emit(files.length > 0 ? files : null);
  }
  addFiles(files) {
    const selectEventArgs = new SelectEvent(files);
    this.selectEvent.emit(selectEventArgs);
    if (!selectEventArgs.isDefaultPrevented()) {
      for (const file of files) {
        this.fileList.add(file);
      }
      if (this.async.autoUpload) {
        this.uploadFiles();
      }
    }
    if (this.component === "FileSelect") {
      const flatFiles = this.fileList.filesFlat;
      this.changeEvent.emit(flatFiles.length > 0 ? flatFiles : null);
    }
  }
  addInitialFiles(initialFiles) {
    this.fileList.clear();
    initialFiles.forEach((file) => {
      const fakeFile = getInitialFileInfo(file);
      this.fileList.add(fakeFile);
    });
  }
  addInitialFileSelectFiles(initialFiles) {
    this.fileList.clear();
    initialFiles.forEach((file) => {
      if (file instanceof File) {
        this.fileList.add(convertFileToFileInfo(file));
      } else {
        this.fileList.add(getInitialFileInfo(file));
      }
    });
  }
  resumeFile(uid) {
    const fileToResume = this.fileList.get(uid);
    this.resumeEvent.emit(new ResumeEvent(fileToResume[0]));
    this.fileList.setFilesStateByUid(uid, FileState.Uploading);
    this._uploadFiles([fileToResume]);
  }
  pauseFile(uid) {
    const pausedFile = this.fileList.get(uid)[0];
    this.pauseEvent.emit(new PauseEvent(pausedFile));
    this.fileList.setFilesStateByUid(uid, FileState.Paused);
  }
  removeFiles(uid) {
    const removedFiles = this.fileList.get(uid);
    const removeEventArgs = new RemoveEvent(removedFiles, this.cloneRequestHeaders(this.async.removeHeaders));
    this.removeEvent.emit(removeEventArgs);
    if (!removeEventArgs.isDefaultPrevented()) {
      if (this.component === "Upload" && (removedFiles[0].state === FileState.Uploaded || removedFiles[0].state === FileState.Initial)) {
        this.performRemove(removedFiles, removeEventArgs);
      } else {
        this.fileList.remove(uid);
        if (this.component === "FileSelect") {
          const flatFiles = this.fileList.filesFlat;
          this.changeEvent.emit(flatFiles.length > 0 ? flatFiles : null);
        }
      }
    }
  }
  cancelFiles(uid) {
    const canceledFiles = this.fileList.get(uid);
    const cancelEventArgs = new CancelEvent(canceledFiles);
    this.cancelEvent.emit(cancelEventArgs);
    for (const file of canceledFiles) {
      if (file.httpSubscription) {
        file.httpSubscription.unsubscribe();
      }
    }
    this.fileList.remove(uid);
    this.checkAllComplete();
  }
  clearFiles() {
    const clearEventArgs = new ClearEvent();
    this.clearEvent.emit(clearEventArgs);
    if (!clearEventArgs.isDefaultPrevented()) {
      const triggerChange = this.fileList.hasFileWithState([FileState.Initial, FileState.Uploaded]);
      this.fileList.clear();
      if (triggerChange) {
        this.onChange();
      }
    }
  }
  uploadFiles() {
    let filesToUpload = [];
    if (this.async.concurrent) {
      filesToUpload = this.fileList.filesToUpload;
    }
    if (!this.async.concurrent && !this.fileList.hasFileWithState([FileState.Uploading])) {
      filesToUpload = this.fileList.firstFileToUpload ? [this.fileList.firstFileToUpload] : [];
    }
    if (filesToUpload && filesToUpload.length > 0) {
      this._uploadFiles(filesToUpload);
    }
  }
  retryFiles(uid) {
    const filesToRetry = [this.fileList.get(uid)];
    if (filesToRetry) {
      this._uploadFiles(filesToRetry);
    }
  }
  _uploadFiles(allFiles) {
    for (const filesToUpload of allFiles) {
      if (filesToUpload[0].state === FileState.Paused) {
        return;
      }
      const uploadEventArgs = new UploadEvent(filesToUpload, this.cloneRequestHeaders(this.async.saveHeaders));
      this.uploadEvent.emit(uploadEventArgs);
      if (!uploadEventArgs.isDefaultPrevented()) {
        this.fileList.setFilesState(filesToUpload, FileState.Uploading);
        const httpSubcription = this.performUpload(filesToUpload, uploadEventArgs);
        filesToUpload.forEach((file) => {
          file.httpSubscription = httpSubcription;
        });
      } else {
        this.fileList.remove(filesToUpload[0].uid);
        this.checkAllComplete();
      }
    }
  }
  performRemove(files, removeEventArgs) {
    const async = this.async;
    const fileNames = files.map((file) => {
      return file.name;
    });
    const formData = this.populateRemoveFormData(fileNames, removeEventArgs.data);
    const options = this.populateRequestOptions(removeEventArgs.headers, false);
    const removeRequest = new HttpRequest(async.removeMethod, async.removeUrl, formData, options);
    this.http.request(removeRequest).subscribe((success) => {
      this.onSuccess(success, files, "remove");
    }, (error) => {
      this.onError(error, files, "remove");
    });
  }
  performUpload(files, uploadEventArgs) {
    const async = this.async;
    const formData = this.populateUploadFormData(files, uploadEventArgs.data);
    const options = this.populateRequestOptions(uploadEventArgs.headers);
    const uploadRequest = new HttpRequest(async.saveMethod, async.saveUrl, formData, options);
    const httpSubscription = this.http.request(uploadRequest).subscribe((event) => {
      if (event.type === HttpEventType.UploadProgress && !this.async.chunk) {
        this.onProgress(event, files);
      } else if (event instanceof HttpResponse) {
        this.onSuccess(event, files, "upload");
        this.checkAllComplete();
      }
    }, (error) => {
      this.onError(error, files, "upload");
      this.checkAllComplete();
    });
    return httpSubscription;
  }
  onSuccess(successResponse, files, operation) {
    if (operation === "upload" && this.async.chunk) {
      this.onChunkProgress(files);
      if (this.isChunkUploadComplete(files[0].uid)) {
        this.removeChunkInfo(files[0].uid);
      } else {
        this.updateChunkInfo(files[0].uid);
        this._uploadFiles([files]);
        return;
      }
    }
    const successArgs = new SuccessEvent(files, operation, successResponse);
    this.successEvent.emit(successArgs);
    if (operation === "upload") {
      this.fileList.setFilesState(files, successArgs.isDefaultPrevented() ? FileState.Failed : FileState.Uploaded);
    } else {
      if (!successArgs.isDefaultPrevented()) {
        this.fileList.remove(files[0].uid);
      }
    }
    if (!successArgs.isDefaultPrevented()) {
      this.onChange();
    }
  }
  onError(errorResponse, files, operation) {
    if (operation === "upload" && this.async.chunk) {
      const maxRetries = this.chunk.maxAutoRetries;
      const chunkInfo = this.chunkMap.get(files[0].uid);
      if (chunkInfo.retries < maxRetries) {
        chunkInfo.retries += 1;
        setTimeout(() => {
          this.retryFiles(files[0].uid);
        }, this.chunk.autoRetryAfter);
        return;
      }
    }
    const errorArgs = new ErrorEvent(files, operation, errorResponse);
    this.errorEvent.emit(errorArgs);
    if (operation === "upload") {
      this.fileList.setFilesState(files, FileState.Failed);
    }
  }
  onProgress(event, files) {
    const percentComplete = Math.round(100 * event.loaded / event.total);
    const progressArgs = new UploadProgressEvent(files, percentComplete < 100 ? percentComplete : 100);
    this.uploadProgressEvent.emit(progressArgs);
  }
  onChunkProgress(files) {
    const chunkInfo = this.chunkMap.get(files[0].uid);
    let percentComplete = 0;
    if (chunkInfo) {
      if (chunkInfo.index === chunkInfo.totalChunks - 1) {
        percentComplete = 100;
      } else {
        percentComplete = Math.round((chunkInfo.index + 1) / chunkInfo.totalChunks * 100);
      }
    }
    const progressArgs = new UploadProgressEvent(files, percentComplete < 100 ? percentComplete : 100);
    this.uploadProgressEvent.emit(progressArgs);
  }
  checkAllComplete() {
    if (!this.fileList.hasFileWithState([FileState.Uploading, FileState.Paused]) && this.areAllSelectedFilesHandled()) {
      this.completeEvent.emit();
    } else if (this.shouldUploadNextFile()) {
      this.uploadFiles();
    }
  }
  shouldUploadNextFile() {
    return !this.async.concurrent && this.fileList.hasFileWithState([FileState.Selected]) && !this.fileList.hasFileWithState([FileState.Uploading]);
  }
  areAllSelectedFilesHandled() {
    const validSelectedFiles = this.fileList.getFilesWithState(FileState.Selected).filter((file) => !file.validationErrors);
    return validSelectedFiles.length === 0;
  }
  cloneRequestHeaders(headers) {
    const cloned = {};
    if (headers) {
      headers.keys().forEach((key) => {
        if (key !== "constructor" && key !== "__proto__" && key !== "prototype") cloned[key] = headers.get(key);
      });
    }
    return new HttpHeaders(cloned);
  }
  populateRequestOptions(headers, reportProgress = true) {
    return {
      headers,
      reportProgress,
      responseType: this.async.responseType,
      withCredentials: this.async.withCredentials
    };
  }
  populateUploadFormData(files, clientData) {
    const saveField = this.async.saveField;
    const data = new FormData();
    this.populateClientFormData(data, clientData);
    if (this.async.chunk) {
      data.append(saveField, this.getNextChunk(files[0]));
      data.append("metadata", this.getChunkMetadata(files[0]));
    } else {
      for (const file of files) {
        data.append(saveField, file.rawFile);
      }
    }
    return data;
  }
  populateRemoveFormData(fileNames, clientData) {
    const data = new FormData();
    this.populateClientFormData(data, clientData);
    for (const fileName of fileNames) {
      data.append(this.async.removeField, fileName);
    }
    return data;
  }
  populateClientFormData(data, clientData) {
    for (const key in clientData) {
      if (clientData.hasOwnProperty(key)) {
        data.append(key, clientData[key]);
      }
    }
  }
  /* Chunking Helper Methods Section */
  getNextChunk(file) {
    const info = this.getChunkInfo(file);
    const newPosition = info.position + this.chunk.size;
    return file.rawFile.slice(info.position, newPosition);
  }
  getChunkInfo(file) {
    let chunkInfo = this.chunkMap.get(file.uid);
    if (!chunkInfo) {
      const totalChunks = file.size > 0 ? Math.ceil(file.size / this.chunk.size) : 1;
      chunkInfo = this.chunkMap.add(file.uid, totalChunks);
    }
    return chunkInfo;
  }
  updateChunkInfo(uid) {
    const chunkInfo = this.chunkMap.get(uid);
    if (chunkInfo.index < chunkInfo.totalChunks - 1) {
      chunkInfo.index += 1;
      chunkInfo.position += this.chunk.size;
      chunkInfo.retries = 0;
    }
  }
  removeChunkInfo(uid) {
    this.chunkMap.remove(uid);
  }
  getChunkMetadata(file) {
    const chunkInfo = this.chunkMap.get(file.uid);
    const chunkMetadata = {
      chunkIndex: chunkInfo.index,
      contentType: file.rawFile.type,
      fileName: file.name,
      fileSize: file.size,
      fileUid: file.uid,
      totalChunks: chunkInfo.totalChunks
    };
    return JSON.stringify(chunkMetadata);
  }
  isChunkUploadComplete(uid) {
    const chunkInfo = this.chunkMap.get(uid);
    if (chunkInfo) {
      return chunkInfo.index + 1 === chunkInfo.totalChunks;
    }
    return false;
  }
  static ɵfac = function UploadService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _UploadService)(ɵɵinject(HttpClient));
  };
  static ɵprov = ɵɵdefineInjectable({
    token: _UploadService,
    factory: _UploadService.ɵfac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UploadService, [{
    type: Injectable
  }], () => [{
    type: HttpClient
  }], null);
})();
var NavigationService = class _NavigationService {
  uploadService;
  zone;
  onActionButtonFocus = new EventEmitter();
  onFileAction = new EventEmitter();
  onFileFocus = new EventEmitter();
  onTabOut = new EventEmitter();
  onWrapperFocus = new EventEmitter();
  onSelectButtonFocus = new EventEmitter();
  actionButtonsVisible = false;
  fileListVisible = false;
  focused = false;
  keyBindings;
  focusedFileIndex = 0;
  _focusedIndex = -1;
  constructor(uploadService, zone) {
    this.uploadService = uploadService;
    this.zone = zone;
  }
  action(event) {
    const key = normalizeKeys(event);
    return this.keyBindings[key];
  }
  process(event, component) {
    const handler = this.action(event);
    if (handler) {
      handler(event, component);
    }
  }
  computeKeys() {
    this.keyBindings = {
      [Keys.Space]: () => this.handleSpace(),
      [Keys.Enter]: () => this.handleEnter(),
      [Keys.NumpadEnter]: () => this.handleEnter(),
      [Keys.Escape]: () => this.handleEscape(),
      [Keys.Delete]: () => this.handleDelete(),
      [Keys.Tab]: (event, component) => this.handleTab(event, component),
      [Keys.ArrowUp]: (event) => this.handleUpDown(event, -1),
      [Keys.ArrowDown]: (event) => this.handleUpDown(event, 1)
    };
  }
  focusSelectButton() {
    this.focused = true;
    this._focusedIndex = -1;
    this.onSelectButtonFocus.emit();
  }
  handleEnter() {
    if (this.lastIndex >= 0 && this.focusedIndex >= 0 && this.focusedIndex <= this.lastFileIndex) {
      this.zone.run(() => this.onFileAction.emit(Keys.Enter));
    }
  }
  handleSpace() {
    if (this.lastIndex >= 0 && this.focusedIndex >= 0 && this.focusedIndex <= this.lastFileIndex) {
      this.zone.run(() => this.onFileAction.emit(Keys.Space));
    }
  }
  handleDelete() {
    if (this.focusedIndex >= 0 && this.focusedIndex <= this.lastFileIndex) {
      this.zone.run(() => this.onFileAction.emit(Keys.Delete));
    }
  }
  handleEscape() {
    if (this.focusedIndex >= 0 && this.focusedIndex <= this.lastFileIndex) {
      this.zone.run(() => this.onFileAction.emit(Keys.Escape));
    }
  }
  handleTab(event, component) {
    const shifted = event.shiftKey;
    if (this.focusedIndex === -1 && this.fileListVisible && !shifted) {
      this.focusedIndex = this.focusedFileIndex;
      event.preventDefault();
      this.onFileFocus.emit(this.focusedFileIndex);
      return;
    }
    if (this.focusedIndex > -1 && this.focusedIndex <= this.lastFileIndex) {
      if (shifted) {
        this.focusedIndex = -1;
      } else if (component !== "fileselect" && this.actionButtonsVisible) {
        this.focusedIndex = this.lastFileIndex + 1;
        return;
      }
    }
    if (this.focusedIndex === this.lastFileIndex + 1) {
      this.focusedIndex = shifted ? this.focusedFileIndex : this.lastIndex;
      if (shifted) {
        event.preventDefault();
        this.onFileFocus.emit(this.focusedFileIndex);
      }
      return;
    }
    if (this.focusedIndex === this.lastIndex && this.actionButtonsVisible && shifted) {
      this.focusedIndex -= 1;
      return;
    }
    this.onTabOut.emit();
  }
  handleUpDown(event, direction) {
    const focusOnFileList = this.focusedIndex > -1 && this.uploadService.files.count >= 0;
    const nextFocusableIndexInBoundaries = direction > 0 ? this.focusedFileIndex < this.lastFileIndex : this.focusedFileIndex > 0;
    const focusNextFile = focusOnFileList && nextFocusableIndexInBoundaries;
    if (focusNextFile) {
      event.preventDefault();
      this.zone.run(() => {
        this.focusedIndex += direction;
        this.focusedFileIndex += direction;
      });
    }
  }
  get focusedIndex() {
    return this._focusedIndex;
  }
  set focusedIndex(index) {
    if (!this.focused) {
      this.onWrapperFocus.emit();
    }
    this._focusedIndex = index;
    this.focused = true;
    if (this._focusedIndex >= 0 && this._focusedIndex <= this.lastFileIndex) {
      this.onFileFocus.emit(index);
    }
  }
  get lastFileIndex() {
    return this.actionButtonsVisible ? this.lastIndex - 2 : this.lastIndex;
  }
  get lastIndex() {
    const fileCount = this.uploadService.files.count;
    return this.actionButtonsVisible ? fileCount + 1 : fileCount - 1;
  }
  static ɵfac = function NavigationService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NavigationService)(ɵɵinject(UploadService), ɵɵinject(NgZone));
  };
  static ɵprov = ɵɵdefineInjectable({
    token: _NavigationService,
    factory: _NavigationService.ɵfac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NavigationService, [{
    type: Injectable
  }], () => [{
    type: UploadService
  }, {
    type: NgZone
  }], null);
})();
var components = {};
var DropZoneService = class _DropZoneService {
  addComponent(component, zoneId) {
    if (this.has(zoneId)) {
      components[zoneId].push(component);
    } else {
      components[zoneId] = [component];
    }
  }
  clearComponent(component, zoneId) {
    if (this.has(zoneId)) {
      const componentIdx = components[zoneId].indexOf(component);
      components[zoneId].splice(componentIdx, 1);
    }
  }
  getComponents(zoneId) {
    return components[zoneId];
  }
  has(id) {
    return id in components;
  }
  static ɵfac = function DropZoneService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _DropZoneService)();
  };
  static ɵprov = ɵɵdefineInjectable({
    token: _DropZoneService,
    factory: _DropZoneService.ɵfac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DropZoneService, [{
    type: Injectable
  }], null, null);
})();
var INVALIDMAXFILESIZE = "invalidMaxFileSize";
var INVALIDMINFILESIZE = "invalidMinFileSize";
var INVALIDFILEEXTENSION = "invalidFileExtension";
var validateFileExtension = (file, allowedExtensions) => {
  if (allowedExtensions.length > 0) {
    if (allowedExtensions.indexOf(file.extension.toLowerCase()) < 0) {
      file.validationErrors = file.validationErrors || [];
      if (file.validationErrors.indexOf(INVALIDFILEEXTENSION) < 0) {
        file.validationErrors.push(INVALIDFILEEXTENSION);
      }
    }
  }
};
var validateFileSize = (file, minFileSize, maxFileSize) => {
  if (minFileSize !== 0 && file.size < minFileSize) {
    file.validationErrors = file.validationErrors || [];
    if (file.validationErrors.indexOf(INVALIDMINFILESIZE) < 0) {
      file.validationErrors.push(INVALIDMINFILESIZE);
    }
  }
  if (maxFileSize !== 0 && file.size > maxFileSize) {
    file.validationErrors = file.validationErrors || [];
    if (file.validationErrors.indexOf(INVALIDMAXFILESIZE) < 0) {
      file.validationErrors.push(INVALIDMAXFILESIZE);
    }
  }
};
var parseAllowedExtensions = (extensions) => {
  const allowedExtensions = extensions.map((ext) => {
    const parsedExt = ext.substring(0, 1) === "." ? ext : "." + ext;
    return parsedExt.toLowerCase();
  });
  return allowedExtensions;
};
var validateFiles = (files, restrictionInfo) => {
  const allowedExtensions = parseAllowedExtensions(restrictionInfo.allowedExtensions);
  const maxFileSize = restrictionInfo.maxFileSize;
  const minFileSize = restrictionInfo.minFileSize;
  let i;
  for (i = 0; i < files.length; i++) {
    validateFileExtension(files[i], allowedExtensions);
    validateFileSize(files[i], minFileSize, maxFileSize);
  }
};
var packageMetadata = {
  name: "@progress/kendo-angular-upload",
  productName: "Kendo UI for Angular",
  productCode: "KENDOUIANGULAR",
  productCodes: ["KENDOUIANGULAR"],
  publishDate: 1768393077,
  version: "21.4.1",
  licensingDocsUrl: "https://www.telerik.com/kendo-angular-ui/my-license/"
};
var FileTemplateDirective = class _FileTemplateDirective {
  templateRef;
  constructor(templateRef) {
    this.templateRef = templateRef;
  }
  static ɵfac = function FileTemplateDirective_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _FileTemplateDirective)(ɵɵdirectiveInject(TemplateRef));
  };
  static ɵdir = ɵɵdefineDirective({
    type: _FileTemplateDirective,
    selectors: [["", "kendoUploadFileTemplate", ""], ["", "kendoFileSelectFileTemplate", ""]],
    standalone: true
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FileTemplateDirective, [{
    type: Directive,
    args: [{
      selector: "[kendoUploadFileTemplate], [kendoFileSelectFileTemplate]",
      standalone: true
    }]
  }], () => [{
    type: TemplateRef
  }], null);
})();
var FileInfoTemplateDirective = class _FileInfoTemplateDirective {
  templateRef;
  constructor(templateRef) {
    this.templateRef = templateRef;
  }
  static ɵfac = function FileInfoTemplateDirective_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _FileInfoTemplateDirective)(ɵɵdirectiveInject(TemplateRef));
  };
  static ɵdir = ɵɵdefineDirective({
    type: _FileInfoTemplateDirective,
    selectors: [["", "kendoUploadFileInfoTemplate", ""], ["", "kendoFileSelectFileInfoTemplate", ""]],
    standalone: true
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FileInfoTemplateDirective, [{
    type: Directive,
    args: [{
      selector: "[kendoUploadFileInfoTemplate], [kendoFileSelectFileInfoTemplate]",
      standalone: true
    }]
  }], () => [{
    type: TemplateRef
  }], null);
})();
var UploadFileSelectBase = class _UploadFileSelectBase {
  uploadService;
  navigation;
  cdr;
  injector;
  zone;
  /**
   * @hidden
   */
  fileTemplate;
  /**
   * @hidden
   */
  fileInfoTemplate;
  /**
   * @hidden
   */
  fileSelectButton;
  /**
   * Sets the `accept` attribute of the internal `input` element of the component.
   */
  accept;
  /**
   * Disables the component.
   *
   * @default false
   */
  disabled = false;
  /**
   * Allows you to select multiple files.
   * When you set this to `false`, you can select only one file at a time.
   *
   * @default true
   */
  multiple = true;
  /**
   * Controls the visibility of the file list.
   *
   * @default true
   */
  showFileList = true;
  /**
   * Sets the [`tabindex`](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/tabindex) of the component.
   *
   * @default 0
   */
  tabindex = 0;
  /**
   * Sets the restrictions for selected files.
   */
  set restrictions(restrictions) {
    const parsedRestrictions = Object.assign({}, this.restrictions, restrictions);
    this._restrictions = parsedRestrictions;
  }
  get restrictions() {
    return this._restrictions;
  }
  /**
   * Sets the `id` of the external drop zone that you want to associate with the component.
   *
   */
  zoneId;
  /**
   * @hidden
   */
  focusableId = `k-${guid()}`;
  /**
   * @hidden
   */
  hostDefaultClasses = true;
  /**
   * @hidden
   */
  get hostDisabledClass() {
    return this.disabled;
  }
  /**
   * Fires when you navigate outside the component.
   */
  onBlur = new EventEmitter();
  /**
   * Fires when you focus the component.
   */
  onFocus = new EventEmitter();
  /**
   * Fires when you select files. If you prevent this event, the component will not add the selected files to the list.
   */
  select = new EventEmitter();
  /**
   * Fires when you are about to remove a file. If you prevent this event, the file will remain in the list.
   */
  remove = new EventEmitter();
  /**
   * @hidden
   */
  _restrictions = {
    allowedExtensions: [],
    maxFileSize: 0,
    minFileSize: 0
  };
  /**
   * @hidden
   */
  fileList;
  constructor(uploadService, navigation, cdr, injector, zone) {
    this.uploadService = uploadService;
    this.navigation = navigation;
    this.cdr = cdr;
    this.injector = injector;
    this.zone = zone;
    this.fileList = this.uploadService.files;
  }
  /**
   * @hidden
   */
  get formControl() {
    const ngControl = this.injector.get(NgControl, null);
    return ngControl?.control || null;
  }
  /**
   * @hidden
   */
  get isControlRequired() {
    return isControlRequired(this.formControl);
  }
  /**
   * @hidden
   */
  get hasFileList() {
    const hasFileList = this.showFileList && this.fileList.count > 0;
    this.navigation.fileListVisible = hasFileList;
    return hasFileList;
  }
  /**
   * @hidden
   */
  writeValue(newValue, validation, callback) {
    let isValid = true;
    if (newValue instanceof Array) {
      newValue.forEach((file) => {
        if (!validation(file)) {
          isValid = false;
        }
      });
      if (isValid) {
        this.uploadService[callback](newValue);
      }
    }
    if (newValue === null) {
      this.fileList.clear();
    }
    this.cdr.markForCheck();
  }
  onTouchedCallback = (_) => {
  };
  onChangeCallback = (_) => {
  };
  /**
   * @hidden
   */
  registerOnChange(fn) {
    this.onChangeCallback = fn;
  }
  /**
   * @hidden
   */
  registerOnTouched(fn) {
    this.onTouchedCallback = fn;
  }
  /**
   * @hidden
   */
  setDisabledState(isDisabled) {
    this.disabled = isDisabled;
  }
  /**
   * @hidden
   */
  onFileSelectButtonFocus() {
    if (!this.navigation.focused) {
      this.navigation.focusedIndex = -1;
    }
  }
  /**
   * Focuses the component's **Select files** button.
   */
  focus() {
    this.zone.runOutsideAngular(() => {
      setTimeout(() => {
        this.fileSelectButton.nativeElement.focus();
        this.navigation.focused = true;
      });
    });
  }
  /**
   * @hidden
   * @deprecated
   */
  focusComponent() {
    this.focus();
  }
  /**
   * Blurs the component if you previously focused it.
   */
  blur() {
    if (this.navigation.focused) {
      this.navigation.focused = false;
      document.activeElement.blur();
    }
  }
  /**
   * @hidden
   * @deprecated
   */
  blurComponent() {
    this.blur();
  }
  static ɵfac = function UploadFileSelectBase_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _UploadFileSelectBase)(ɵɵdirectiveInject(UploadService), ɵɵdirectiveInject(NavigationService), ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(Injector), ɵɵdirectiveInject(NgZone));
  };
  static ɵdir = ɵɵdefineDirective({
    type: _UploadFileSelectBase,
    contentQueries: function UploadFileSelectBase_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        ɵɵcontentQuery(dirIndex, FileTemplateDirective, 5);
        ɵɵcontentQuery(dirIndex, FileInfoTemplateDirective, 5);
      }
      if (rf & 2) {
        let _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.fileTemplate = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.fileInfoTemplate = _t.first);
      }
    },
    viewQuery: function UploadFileSelectBase_Query(rf, ctx) {
      if (rf & 1) {
        ɵɵviewQuery(_c0, 7, ElementRef);
      }
      if (rf & 2) {
        let _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.fileSelectButton = _t.first);
      }
    },
    hostVars: 4,
    hostBindings: function UploadFileSelectBase_HostBindings(rf, ctx) {
      if (rf & 2) {
        ɵɵclassProp("k-upload", ctx.hostDefaultClasses)("k-disabled", ctx.hostDisabledClass);
      }
    },
    inputs: {
      accept: "accept",
      disabled: "disabled",
      multiple: "multiple",
      showFileList: "showFileList",
      tabindex: "tabindex",
      restrictions: "restrictions",
      zoneId: "zoneId",
      focusableId: "focusableId"
    },
    outputs: {
      onBlur: "blur",
      onFocus: "focus",
      select: "select",
      remove: "remove"
    }
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UploadFileSelectBase, [{
    type: Directive,
    args: [{}]
  }], () => [{
    type: UploadService
  }, {
    type: NavigationService
  }, {
    type: ChangeDetectorRef
  }, {
    type: Injector
  }, {
    type: NgZone
  }], {
    fileTemplate: [{
      type: ContentChild,
      args: [FileTemplateDirective]
    }],
    fileInfoTemplate: [{
      type: ContentChild,
      args: [FileInfoTemplateDirective]
    }],
    fileSelectButton: [{
      type: ViewChild,
      args: ["fileSelectButton", {
        static: true,
        read: ElementRef
      }]
    }],
    accept: [{
      type: Input
    }],
    disabled: [{
      type: Input
    }],
    multiple: [{
      type: Input
    }],
    showFileList: [{
      type: Input
    }],
    tabindex: [{
      type: Input
    }],
    restrictions: [{
      type: Input
    }],
    zoneId: [{
      type: Input
    }],
    focusableId: [{
      type: Input
    }],
    hostDefaultClasses: [{
      type: HostBinding,
      args: ["class.k-upload"]
    }],
    hostDisabledClass: [{
      type: HostBinding,
      args: ["class.k-disabled"]
    }],
    onBlur: [{
      type: Output,
      args: ["blur"]
    }],
    onFocus: [{
      type: Output,
      args: ["focus"]
    }],
    select: [{
      type: Output
    }],
    remove: [{
      type: Output
    }]
  });
})();
var UploadActionButtonsComponent = class _UploadActionButtonsComponent {
  uploadService;
  localization;
  navigation;
  disabled;
  actionsLayout;
  clearButton;
  uploadButton;
  hostDefaultClass = true;
  get actionButtonsEndClassName() {
    return this.actionsLayout === "end";
  }
  get actionButtonsStretchedClassName() {
    return this.actionsLayout === "stretched";
  }
  get actionButtonsStartClassName() {
    return this.actionsLayout === "start";
  }
  get actionButtonsCenterClassName() {
    return this.actionsLayout === "center";
  }
  constructor(uploadService, localization, navigation) {
    this.uploadService = uploadService;
    this.localization = localization;
    this.navigation = navigation;
  }
  onUploadButtonFocus() {
    if (!this.navigation.focused) {
      this.navigation.focusedIndex = this.navigation.lastIndex;
    }
  }
  onUploadButtonClick(event) {
    event.stopImmediatePropagation();
    this.performUpload();
  }
  performUpload() {
    if (!this.disabled) {
      this.uploadService.uploadFiles();
      this.navigation.focusSelectButton();
    }
  }
  onClearButtonClick(event) {
    event.stopImmediatePropagation();
    this.clearFiles();
  }
  clearFiles() {
    if (!this.disabled) {
      this.uploadService.clearFiles();
      this.navigation.focusSelectButton();
    }
  }
  textFor(key) {
    return this.localization.get(key);
  }
  static ɵfac = function UploadActionButtonsComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _UploadActionButtonsComponent)(ɵɵdirectiveInject(UploadService), ɵɵdirectiveInject(LocalizationService), ɵɵdirectiveInject(NavigationService));
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _UploadActionButtonsComponent,
    selectors: [["kendo-upload-action-buttons"]],
    viewQuery: function UploadActionButtonsComponent_Query(rf, ctx) {
      if (rf & 1) {
        ɵɵviewQuery(_c1, 7);
        ɵɵviewQuery(_c2, 7);
      }
      if (rf & 2) {
        let _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.clearButton = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.uploadButton = _t.first);
      }
    },
    hostVars: 10,
    hostBindings: function UploadActionButtonsComponent_HostBindings(rf, ctx) {
      if (rf & 2) {
        ɵɵclassProp("k-actions", ctx.hostDefaultClass)("k-actions-end", ctx.actionButtonsEndClassName)("k-actions-stretched", ctx.actionButtonsStretchedClassName)("k-actions-start", ctx.actionButtonsStartClassName)("k-actions-center", ctx.actionButtonsCenterClassName);
      }
    },
    inputs: {
      disabled: "disabled",
      actionsLayout: "actionsLayout"
    },
    standalone: true,
    features: [ɵɵStandaloneFeature],
    decls: 6,
    vars: 2,
    consts: [["clearButton", ""], ["uploadButton", ""], ["role", "button", 1, "k-button", "k-button-md", "k-rounded-md", "k-button-solid", "k-button-solid-base", "k-clear-selected", 3, "click"], ["role", "button", 1, "k-button", "k-button-md", "k-rounded-md", "k-button-solid", "k-button-solid-primary", "k-upload-selected", 3, "focus", "click"]],
    template: function UploadActionButtonsComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = ɵɵgetCurrentView();
        ɵɵelementStart(0, "button", 2, 0);
        ɵɵlistener("click", function UploadActionButtonsComponent_Template_button_click_0_listener($event) {
          ɵɵrestoreView(_r1);
          return ɵɵresetView(ctx.onClearButtonClick($event));
        });
        ɵɵtext(2);
        ɵɵelementEnd();
        ɵɵelementStart(3, "button", 3, 1);
        ɵɵlistener("focus", function UploadActionButtonsComponent_Template_button_focus_3_listener() {
          ɵɵrestoreView(_r1);
          return ɵɵresetView(ctx.onUploadButtonFocus());
        })("click", function UploadActionButtonsComponent_Template_button_click_3_listener($event) {
          ɵɵrestoreView(_r1);
          return ɵɵresetView(ctx.onUploadButtonClick($event));
        });
        ɵɵtext(5);
        ɵɵelementEnd();
      }
      if (rf & 2) {
        ɵɵadvance(2);
        ɵɵtextInterpolate1(" ", ctx.textFor("clearSelectedFiles"), " ");
        ɵɵadvance(3);
        ɵɵtextInterpolate1(" ", ctx.textFor("uploadSelectedFiles"), " ");
      }
    },
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UploadActionButtonsComponent, [{
    type: Component,
    args: [{
      selector: "kendo-upload-action-buttons",
      template: `
        <button #clearButton role="button" class="k-button k-button-md k-rounded-md k-button-solid k-button-solid-base k-clear-selected"
            (click)="onClearButtonClick($event)">
                {{textFor('clearSelectedFiles')}}
        </button>
        <button #uploadButton role="button" class="k-button k-button-md k-rounded-md k-button-solid k-button-solid-primary k-upload-selected"
            (focus)="onUploadButtonFocus()"
            (click)="onUploadButtonClick($event)">
                {{textFor('uploadSelectedFiles')}}
        </button>
    `,
      standalone: true
    }]
  }], () => [{
    type: UploadService
  }, {
    type: LocalizationService
  }, {
    type: NavigationService
  }], {
    disabled: [{
      type: Input
    }],
    actionsLayout: [{
      type: Input
    }],
    clearButton: [{
      type: ViewChild,
      args: ["clearButton", {
        static: true
      }]
    }],
    uploadButton: [{
      type: ViewChild,
      args: ["uploadButton", {
        static: true
      }]
    }],
    hostDefaultClass: [{
      type: HostBinding,
      args: ["class.k-actions"]
    }],
    actionButtonsEndClassName: [{
      type: HostBinding,
      args: ["class.k-actions-end"]
    }],
    actionButtonsStretchedClassName: [{
      type: HostBinding,
      args: ["class.k-actions-stretched"]
    }],
    actionButtonsStartClassName: [{
      type: HostBinding,
      args: ["class.k-actions-start"]
    }],
    actionButtonsCenterClassName: [{
      type: HostBinding,
      args: ["class.k-actions-center"]
    }]
  });
})();
var FileListItemDirective = class _FileListItemDirective {
  navigationService;
  uploadService;
  files;
  index;
  fileClass = true;
  focused = false;
  element;
  constructor(el, navigationService, uploadService) {
    this.navigationService = navigationService;
    this.uploadService = uploadService;
    this.element = el;
  }
  focus() {
    this.element.nativeElement.focus();
  }
  get uidAttribute() {
    return this.files[0].uid;
  }
  get tabIndex() {
    return this.navigationService.focusedFileIndex === this.index ? "0" : "-1";
  }
  get kFileError() {
    return this.files[0].state === FileState.Failed;
  }
  get kFileInvalid() {
    return filesHaveValidationErrors(this.files);
  }
  get kFileProgress() {
    return this.files[0].state === FileState.Uploading || this.files[0].state === FileState.Paused;
  }
  get kFileSuccess() {
    if (this.uploadService.component === "Upload") {
      return this.files[0].state === FileState.Uploaded || this.files[0].state === FileState.Initial;
    }
    return false;
  }
  get kStateFocused() {
    return this.focused;
  }
  onFocus() {
    this.focused = true;
  }
  onBlur() {
    this.focused = false;
  }
  onClick(event) {
    if (!isFocusable(event.target) && !hasClasses(event.target, IGNORE_TARGET_CLASSES) || !!event.target.closest(".k-upload-action")) {
      this.navigationService.focusedIndex = this.navigationService.focusedFileIndex = this.index;
    }
  }
  static ɵfac = function FileListItemDirective_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _FileListItemDirective)(ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NavigationService), ɵɵdirectiveInject(UploadService));
  };
  static ɵdir = ɵɵdefineDirective({
    type: _FileListItemDirective,
    selectors: [["", "kendoUploadFileListItem", ""]],
    hostVars: 14,
    hostBindings: function FileListItemDirective_HostBindings(rf, ctx) {
      if (rf & 1) {
        ɵɵlistener("focus", function FileListItemDirective_focus_HostBindingHandler() {
          return ctx.onFocus();
        })("blur", function FileListItemDirective_blur_HostBindingHandler() {
          return ctx.onBlur();
        })("click", function FileListItemDirective_click_HostBindingHandler($event) {
          return ctx.onClick($event);
        });
      }
      if (rf & 2) {
        ɵɵattribute("data-uid", ctx.uidAttribute)("tabIndex", ctx.tabIndex);
        ɵɵclassProp("k-file", ctx.fileClass)("k-file-error", ctx.kFileError)("k-file-invalid", ctx.kFileInvalid)("k-file-progress", ctx.kFileProgress)("k-file-success", ctx.kFileSuccess)("k-focus", ctx.kStateFocused);
      }
    },
    inputs: {
      files: "files",
      index: "index"
    },
    standalone: true
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FileListItemDirective, [{
    type: Directive,
    args: [{
      selector: "[kendoUploadFileListItem]",
      standalone: true
    }]
  }], () => [{
    type: ElementRef
  }, {
    type: NavigationService
  }, {
    type: UploadService
  }], {
    files: [{
      type: Input
    }],
    index: [{
      type: Input
    }],
    fileClass: [{
      type: HostBinding,
      args: ["class.k-file"]
    }],
    uidAttribute: [{
      type: HostBinding,
      args: ["attr.data-uid"]
    }],
    tabIndex: [{
      type: HostBinding,
      args: ["attr.tabIndex"]
    }],
    kFileError: [{
      type: HostBinding,
      args: ["class.k-file-error"]
    }],
    kFileInvalid: [{
      type: HostBinding,
      args: ["class.k-file-invalid"]
    }],
    kFileProgress: [{
      type: HostBinding,
      args: ["class.k-file-progress"]
    }],
    kFileSuccess: [{
      type: HostBinding,
      args: ["class.k-file-success"]
    }],
    kStateFocused: [{
      type: HostBinding,
      args: ["class.k-focus"]
    }],
    onFocus: [{
      type: HostListener,
      args: ["focus"]
    }],
    onBlur: [{
      type: HostListener,
      args: ["blur"]
    }],
    onClick: [{
      type: HostListener,
      args: ["click", ["$event"]]
    }]
  });
})();
var FileListItemBase = class _FileListItemBase {
  uploadService;
  progressComplete = 0;
  localization;
  uploadProgressSubscription;
  constructor(uploadService) {
    this.uploadService = uploadService;
  }
  subscribeUploadProgress(uploadProgressHandler) {
    this.uploadProgressSubscription = this.uploadService.uploadProgressEvent.subscribe(uploadProgressHandler);
  }
  fileHasValidationErrors(file) {
    return fileHasValidationErrors(file);
  }
  filesHaveValidationErrors(files) {
    return filesHaveValidationErrors(files);
  }
  ngOnDestroy() {
    this.uploadProgressSubscription.unsubscribe();
  }
  getFileValidationMessage(file) {
    let validationMessage;
    if (file.validationErrors && file.validationErrors.length > 0) {
      validationMessage = this.localization.get(file.validationErrors[0]);
    }
    return validationMessage;
  }
  getTotalFilesSizeMessage(files) {
    return getTotalFilesSizeMessage(files);
  }
  textFor(key) {
    return this.localization.get(key);
  }
  static ɵfac = function FileListItemBase_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _FileListItemBase)(ɵɵdirectiveInject(UploadService));
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _FileListItemBase,
    selectors: [["ng-component"]],
    decls: 0,
    vars: 0,
    template: function FileListItemBase_Template(rf, ctx) {
    },
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FileListItemBase, [{
    type: Component,
    args: [{
      template: ""
    }]
  }], () => [{
    type: UploadService
  }], null);
})();
var FileListItemActionButtonComponent = class _FileListItemActionButtonComponent {
  uploadService;
  localization;
  navigation;
  file;
  disabled;
  progress;
  retrySVGIcon = arrowRotateCwSmallIcon;
  playSVGIcon = playSmIcon;
  pauseSVGIcon = pauseSmIcon;
  cancelSVGIcon = cancelIcon;
  deleteSVGIcon = xIcon;
  constructor(uploadService, localization, navigation) {
    this.uploadService = uploadService;
    this.localization = localization;
    this.navigation = navigation;
  }
  onRetryClick() {
    if (this.disabled) {
      return;
    }
    this.uploadService.retryFiles(this.file.uid);
  }
  onRemoveCancelClick(event) {
    if (this.disabled) {
      return;
    }
    event.stopImmediatePropagation();
    const uid = this.file.uid;
    if (this.file.state === FileState.Uploading) {
      this.uploadService.cancelFiles(uid);
    } else {
      this.uploadService.removeFiles(uid);
    }
    this.navigation.focusSelectButton();
  }
  onPauseResumeClick() {
    if (this.disabled) {
      return;
    }
    const uid = this.file.uid;
    if (this.file.state === FileState.Paused) {
      this.uploadService.resumeFile(uid);
    } else {
      this.uploadService.pauseFile(uid);
    }
  }
  get actionButtonTitle() {
    if (this.file.state === FileState.Uploading) {
      return this.localization.get("cancel");
    }
    return this.localization.get("remove");
  }
  get retryButtonTitle() {
    return this.localization.get("retry");
  }
  get pauseResumeButtonTitle() {
    if (this.file.state === FileState.Uploading) {
      return this.localization.get("pause");
    }
    return this.localization.get("resume");
  }
  get isUploading() {
    return this.file.state === FileState.Uploading;
  }
  get isFailed() {
    return this.file.state === FileState.Failed;
  }
  get isPaused() {
    return this.file.state === FileState.Paused;
  }
  get isResumable() {
    const service = this.uploadService;
    const isResumable = service.async.chunk && service.chunk.resumable;
    const isUploading = this.file.state === FileState.Paused || this.file.state === FileState.Uploading;
    return isResumable && isUploading;
  }
  get isActionButtonVisible() {
    if ((this.file.state === FileState.Uploaded || this.file.state === FileState.Initial) && !this.uploadService.async.removeUrl && this.uploadService.component === "Upload") {
      return false;
    }
    return true;
  }
  static ɵfac = function FileListItemActionButtonComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _FileListItemActionButtonComponent)(ɵɵdirectiveInject(UploadService), ɵɵdirectiveInject(LocalizationService), ɵɵdirectiveInject(NavigationService));
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _FileListItemActionButtonComponent,
    selectors: [["kendo-upload-file-list-item-action-button"]],
    inputs: {
      file: "file",
      disabled: "disabled",
      progress: "progress"
    },
    standalone: true,
    features: [ɵɵStandaloneFeature],
    decls: 5,
    vars: 4,
    consts: [[1, "k-upload-actions"], [1, "k-upload-pct"], ["kendoButton", "", "type", "button", "fillMode", "flat", "icon", "refresh-sm", 1, "k-upload-action", "k-retry", 3, "svgIcon"], ["kendoButton", "", "type", "button", "fillMode", "flat", 1, "k-upload-action", 3, "svgIcon", "icon"], ["kendoButton", "", "fillMode", "flat", "type", "button", 1, "k-upload-action", 3, "k-delete", "svgIcon", "icon"], ["kendoButton", "", "type", "button", "fillMode", "flat", "icon", "refresh-sm", 1, "k-upload-action", "k-retry", 3, "pointerdown", "click", "svgIcon"], ["kendoButton", "", "type", "button", "fillMode", "flat", 1, "k-upload-action", 3, "pointerdown", "click", "svgIcon", "icon"], ["kendoButton", "", "fillMode", "flat", "type", "button", 1, "k-upload-action", 3, "click", "svgIcon", "icon"]],
    template: function FileListItemActionButtonComponent_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵelementStart(0, "span", 0);
        ɵɵtemplate(1, FileListItemActionButtonComponent_Conditional_1_Template, 2, 1, "span", 1)(2, FileListItemActionButtonComponent_Conditional_2_Template, 1, 4, "button", 2)(3, FileListItemActionButtonComponent_Conditional_3_Template, 1, 5, "button", 3)(4, FileListItemActionButtonComponent_Conditional_4_Template, 1, 7, "button", 4);
        ɵɵelementEnd();
      }
      if (rf & 2) {
        ɵɵadvance();
        ɵɵconditional(ctx.isUploading || ctx.isPaused ? 1 : -1);
        ɵɵadvance();
        ɵɵconditional(ctx.isFailed ? 2 : -1);
        ɵɵadvance();
        ɵɵconditional(ctx.isResumable ? 3 : -1);
        ɵɵadvance();
        ɵɵconditional(ctx.isActionButtonVisible ? 4 : -1);
      }
    },
    dependencies: [ButtonComponent],
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FileListItemActionButtonComponent, [{
    type: Component,
    args: [{
      selector: "kendo-upload-file-list-item-action-button",
      template: `
    <span class="k-upload-actions">
      @if (isUploading || isPaused) {
        <span class="k-upload-pct">{{progress}}%</span>
      }
    
      @if (isFailed) {
        <button
          kendoButton
          type="button"
          class="k-upload-action k-retry"
          fillMode="flat"
          [attr.tabIndex]="-1"
          [attr.aria-hidden]="true"
          [attr.title]="retryButtonTitle"
          [svgIcon]="retrySVGIcon"
          icon="refresh-sm"
          (pointerdown)="$event.preventDefault()"
          (click)="onRetryClick()"
        ></button>
      }
    
      @if (isResumable) {
        <button
          kendoButton
          type="button"
          class="k-upload-action"
          fillMode="flat"
          [attr.tabIndex]="-1"
          [attr.aria-hidden]="true"
          [attr.title]="pauseResumeButtonTitle"
          [svgIcon]="isPaused ? playSVGIcon : pauseSVGIcon"
          [icon]="isPaused ? 'play-sm' : 'pause-sm'"
          (pointerdown)="$event.preventDefault()"
          (click)="onPauseResumeClick()"
        ></button>
      }
    
      @if (isActionButtonVisible) {
        <button
          kendoButton
          class="k-upload-action"
          [class.k-delete]="!isUploading"
          fillMode="flat"
          type="button"
          [attr.tabIndex]="-1"
          [attr.aria-hidden]="true"
          [attr.title]="actionButtonTitle"
          [svgIcon]="isUploading ? cancelSVGIcon : deleteSVGIcon"
          [icon]="isUploading ? 'cancel' : 'x'"
          (click)="onRemoveCancelClick($event)"
        ></button>
      }
    </span>
    `,
      standalone: true,
      imports: [ButtonComponent]
    }]
  }], () => [{
    type: UploadService
  }, {
    type: LocalizationService
  }, {
    type: NavigationService
  }], {
    file: [{
      type: Input
    }],
    disabled: [{
      type: Input
    }],
    progress: [{
      type: Input
    }]
  });
})();
var FileListMultipleItemsComponent = class _FileListMultipleItemsComponent extends FileListItemBase {
  localization;
  disabled;
  files;
  fileInfoTemplate;
  filesHaveErrors;
  copySVGIcon = copyIcon;
  constructor(localization, uploadService) {
    super(uploadService);
    this.localization = localization;
    this.subscribeUploadProgress((args) => {
      if (args.files[0].uid === this.files[0].uid) {
        this.progressComplete = args.percentComplete;
      }
    });
  }
  get showProgress() {
    const showProgress = this.files[0].state === FileState.Uploading || this.files[0].state === FileState.Paused;
    return showProgress ? "active" : "inactive";
  }
  ngOnInit() {
    this.filesHaveErrors = super.filesHaveValidationErrors(this.files);
  }
  fileStatusText(file) {
    const errors = file.validationErrors;
    if (!isPresent(errors)) {
      return this.getTotalFilesSizeMessage([file]);
    }
    return this.getFileValidationMessage(file);
  }
  get batchStatusText() {
    const state2 = this.files[0].state;
    const fileCount = this.files.length;
    if (state2 === FileState.Uploaded) {
      return `${fileCount} ${this.textFor("filesBatchStatusUploaded")}`;
    }
    if (state2 === FileState.Failed) {
      return `${fileCount} ${this.textFor("filesBatchStatusFailed")}`;
    }
    return `${fileCount} ${this.textFor("filesBatchStatus")}`;
  }
  get isUploadSuccessful() {
    return this.files[0].state === FileState.Uploaded;
  }
  get isUploadFailed() {
    return this.files[0].state === FileState.Failed;
  }
  static ɵfac = function FileListMultipleItemsComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _FileListMultipleItemsComponent)(ɵɵdirectiveInject(LocalizationService), ɵɵdirectiveInject(UploadService));
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _FileListMultipleItemsComponent,
    selectors: [["kendo-upload-file-list-multiple-items"]],
    inputs: {
      disabled: "disabled",
      files: "files",
      fileInfoTemplate: "fileInfoTemplate"
    },
    standalone: true,
    features: [ɵɵInheritDefinitionFeature, ɵɵStandaloneFeature],
    decls: 7,
    vars: 10,
    consts: [[3, "value", "label"], [1, "k-file-icon-wrapper"], ["name", "copy", "size", "xxlarge", "innerCssClass", "k-file-icon", 3, "svgIcon"], [1, "k-multiple-files-wrapper"], [1, "k-file-summary"], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], [3, "file", "disabled", "progress"], [1, "k-file-info"], [1, "k-file-name", 3, "title"], [3, "ngClass"]],
    template: function FileListMultipleItemsComponent_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵelement(0, "kendo-progressbar", 0);
        ɵɵelementStart(1, "span", 1);
        ɵɵelement(2, "kendo-icon-wrapper", 2);
        ɵɵelementEnd();
        ɵɵelementStart(3, "span", 3);
        ɵɵtemplate(4, FileListMultipleItemsComponent_Conditional_4_Template, 4, 1, "span", 4)(5, FileListMultipleItemsComponent_Conditional_5_Template, 1, 6, "ng-container", 5);
        ɵɵelementEnd();
        ɵɵelement(6, "kendo-upload-file-list-item-action-button", 6);
      }
      if (rf & 2) {
        ɵɵproperty("@progressState", ctx.showProgress)("value", ctx.progressComplete)("label", ɵɵpureFunction0(9, _c3));
        ɵɵadvance(2);
        ɵɵproperty("svgIcon", ctx.copySVGIcon);
        ɵɵadvance(2);
        ɵɵconditional(!ctx.fileInfoTemplate ? 4 : -1);
        ɵɵadvance();
        ɵɵconditional(ctx.fileInfoTemplate ? 5 : -1);
        ɵɵadvance();
        ɵɵproperty("file", ctx.files[0])("disabled", ctx.disabled)("progress", ctx.progressComplete);
      }
    },
    dependencies: [ProgressBarComponent, IconWrapperComponent, NgClass, NgTemplateOutlet, FileListItemActionButtonComponent],
    encapsulation: 2,
    data: {
      animation: [trigger("progressState", [state("active", style({
        opacity: 1
      })), state("inactive", style({
        opacity: 0
      })), transition("void => active", style({
        opacity: 0
      })), transition("inactive => active", style({
        opacity: 1
      })), transition("active => inactive", animate("1s 2s ease-out"))])]
    }
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FileListMultipleItemsComponent, [{
    type: Component,
    args: [{
      animations: [trigger("progressState", [state("active", style({
        opacity: 1
      })), state("inactive", style({
        opacity: 0
      })), transition("void => active", style({
        opacity: 0
      })), transition("inactive => active", style({
        opacity: 1
      })), transition("active => inactive", animate("1s 2s ease-out"))])],
      selector: "kendo-upload-file-list-multiple-items",
      template: `
        <kendo-progressbar
          [@progressState]="showProgress"
          [value]="progressComplete"
          [label]="{ visible: false }"
          >
        </kendo-progressbar>
        <span class="k-file-icon-wrapper">
          <kendo-icon-wrapper
            name="copy"
            size="xxlarge"
            [svgIcon]="copySVGIcon"
            innerCssClass="k-file-icon"
            >
          </kendo-icon-wrapper>
        </span>
        <span class="k-multiple-files-wrapper">
          @if (!fileInfoTemplate) {
            @for (file of files; track file) {
              <span class="k-file-info">
                <span [title]="file.name" class="k-file-name">
                  {{file.name}}
                </span>
                    <span [attr.aria-live]="'polite'" [ngClass]="{
                        'k-file-validation-message': file.validationErrors,
                        'k-file-size': !file.validationErrors
                        }"
                >{{fileStatusText(file)}}</span>
              </span>
            }
            <span class="k-file-summary"
            >{{batchStatusText}}</span>
          }
          @if (fileInfoTemplate) {
            <ng-container
              [ngTemplateOutlet]="fileInfoTemplate.templateRef"
                [ngTemplateOutletContext]="{
                    templateRef: fileInfoTemplate.templateRef,
                    state: files[0].state,
                    $implicit: files
                }"></ng-container>
          }
        </span>
        <kendo-upload-file-list-item-action-button
          [file]='files[0]'
          [disabled]='disabled'
          [progress]='progressComplete'>
        </kendo-upload-file-list-item-action-button>
        `,
      standalone: true,
      imports: [ProgressBarComponent, IconWrapperComponent, NgClass, NgTemplateOutlet, FileListItemActionButtonComponent]
    }]
  }], () => [{
    type: LocalizationService
  }, {
    type: UploadService
  }], {
    disabled: [{
      type: Input
    }],
    files: [{
      type: Input
    }],
    fileInfoTemplate: [{
      type: Input
    }]
  });
})();
var FileListSingleItemComponent = class _FileListSingleItemComponent extends FileListItemBase {
  localization;
  disabled;
  file;
  fileInfoTemplate;
  constructor(localization, uploadService) {
    super(uploadService);
    this.localization = localization;
    this.subscribeUploadProgress((args) => {
      if (args.files[0].uid === this.file.uid) {
        this.progressComplete = args.percentComplete;
      }
    });
  }
  get fileStatusText() {
    const errors = this.file.validationErrors;
    if (this.file.state === FileState.Uploaded) {
      return `${this.textFor("fileStatusUploaded")}`;
    }
    if (this.file.state === FileState.Failed) {
      return `${this.textFor("fileStatusFailed")}`;
    }
    if (!isPresent(errors)) {
      return this.getTotalFilesSizeMessage([this.file]);
    }
    return this.getFileValidationMessage(this.file);
  }
  get showProgress() {
    const showProgress = this.file.state === FileState.Uploading || this.file.state === FileState.Paused;
    return showProgress ? "active" : "inactive";
  }
  get fileGroupClass() {
    return fileGroupClass(this.file.extension);
  }
  get fileSVGGroupIcon() {
    return fileSVGGroupIcon(this.file.extension);
  }
  get isUploadSuccessful() {
    return this.file.state === FileState.Uploaded;
  }
  get isUploadFailed() {
    return this.file.state === FileState.Failed;
  }
  get isNotYetUploaded() {
    return !this.isUploadFailed && !this.isUploadSuccessful;
  }
  static ɵfac = function FileListSingleItemComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _FileListSingleItemComponent)(ɵɵdirectiveInject(LocalizationService), ɵɵdirectiveInject(UploadService));
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _FileListSingleItemComponent,
    selectors: [["kendo-upload-file-list-single-item"]],
    inputs: {
      disabled: "disabled",
      file: "file",
      fileInfoTemplate: "fileInfoTemplate"
    },
    standalone: true,
    features: [ɵɵInheritDefinitionFeature, ɵɵStandaloneFeature],
    decls: 7,
    vars: 11,
    consts: [[3, "value", "label"], [1, "k-file-icon-wrapper"], ["size", "xxlarge", "innerCssClass", "k-file-icon", 3, "name", "svgIcon"], [1, "k-file-info"], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], [3, "file", "disabled", "progress"], [1, "k-file-name", 3, "title"], [3, "ngClass"]],
    template: function FileListSingleItemComponent_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵelement(0, "kendo-progressbar", 0);
        ɵɵelementStart(1, "span", 1);
        ɵɵelement(2, "kendo-icon-wrapper", 2);
        ɵɵelementEnd();
        ɵɵelementStart(3, "span", 3);
        ɵɵtemplate(4, FileListSingleItemComponent_Conditional_4_Template, 4, 9)(5, FileListSingleItemComponent_Conditional_5_Template, 1, 8, "ng-container", 4);
        ɵɵelementEnd();
        ɵɵelement(6, "kendo-upload-file-list-item-action-button", 5);
      }
      if (rf & 2) {
        ɵɵproperty("@progressState", ctx.showProgress)("value", ctx.progressComplete)("label", ɵɵpureFunction0(10, _c3));
        ɵɵadvance(2);
        ɵɵproperty("name", ctx.fileGroupClass)("svgIcon", ctx.fileSVGGroupIcon);
        ɵɵadvance(2);
        ɵɵconditional(!ctx.fileInfoTemplate ? 4 : -1);
        ɵɵadvance();
        ɵɵconditional(ctx.fileInfoTemplate ? 5 : -1);
        ɵɵadvance();
        ɵɵproperty("file", ctx.file)("disabled", ctx.disabled)("progress", ctx.progressComplete);
      }
    },
    dependencies: [ProgressBarComponent, IconWrapperComponent, NgClass, NgTemplateOutlet, FileListItemActionButtonComponent],
    encapsulation: 2,
    data: {
      animation: [trigger("progressState", [state("active", style({
        opacity: 1
      })), state("inactive", style({
        opacity: 0
      })), transition("void => active", style({
        opacity: 0
      })), transition("inactive => active", style({
        opacity: 1
      })), transition("active => inactive", animate("1s 2s ease-out"))])]
    }
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FileListSingleItemComponent, [{
    type: Component,
    args: [{
      animations: [trigger("progressState", [state("active", style({
        opacity: 1
      })), state("inactive", style({
        opacity: 0
      })), transition("void => active", style({
        opacity: 0
      })), transition("inactive => active", style({
        opacity: 1
      })), transition("active => inactive", animate("1s 2s ease-out"))])],
      selector: "kendo-upload-file-list-single-item",
      template: `
        <kendo-progressbar
          [@progressState]="showProgress"
          [value]="progressComplete"
          [label]="{ visible: false }"
          >
        </kendo-progressbar>
        <span class="k-file-icon-wrapper">
          <kendo-icon-wrapper
            size="xxlarge"
            [name]="fileGroupClass"
            [svgIcon]="fileSVGGroupIcon"
            innerCssClass="k-file-icon"
            >
          </kendo-icon-wrapper>
        </span>
        <span class="k-file-info">
          @if (!fileInfoTemplate) {
            <span class="k-file-name" [title]="file.name">{{ file.name }}</span>
                <span [attr.aria-live]="'polite'" [ngClass]="{
                    'k-file-validation-message': file.validationErrors,
                    'k-file-size': !file.validationErrors && isNotYetUploaded,
                    'k-file-summary': isUploadSuccessful || isUploadFailed
                    }"
            >{{fileStatusText}}</span>
          }
          @if (fileInfoTemplate) {
<ng-container [ngTemplateOutlet]="fileInfoTemplate.templateRef" [ngTemplateOutletContext]="{
                    templateRef: fileInfoTemplate.templateRef,
                    state: file.state,
                    $implicit: [file]
                }"></ng-container>
          }
        </span>
        <kendo-upload-file-list-item-action-button
          [file]='file'
          [disabled]='disabled'
          [progress]='progressComplete'>
        </kendo-upload-file-list-item-action-button>
        `,
      standalone: true,
      imports: [ProgressBarComponent, IconWrapperComponent, NgClass, NgTemplateOutlet, FileListItemActionButtonComponent]
    }]
  }], () => [{
    type: LocalizationService
  }, {
    type: UploadService
  }], {
    disabled: [{
      type: Input
    }],
    file: [{
      type: Input
    }],
    fileInfoTemplate: [{
      type: Input
    }]
  });
})();
var FileListComponent = class _FileListComponent {
  uploadService;
  navigation;
  disabled;
  fileList;
  fileTemplate;
  fileInfoTemplate;
  fileListItems;
  fileListRole = "list";
  focusSubscription;
  actionSubscription;
  constructor(uploadService, navigation) {
    this.uploadService = uploadService;
    this.navigation = navigation;
    this.onItemFocus();
    this.onItemAction();
  }
  onItemFocus() {
    this.focusSubscription = this.navigation.onFileFocus.subscribe((index) => {
      this.fileListItems.toArray()[index].focus();
    });
  }
  onItemAction() {
    this.actionSubscription = this.navigation.onFileAction.subscribe((key) => {
      this.itemActionHandler(key);
    });
  }
  itemActionHandler(key) {
    const index = this.navigation.focusedIndex;
    const filesArray = this.fileListItems.toArray();
    const numberOfFiles = filesArray.length;
    const item = filesArray[index];
    const uid = item.uidAttribute;
    const files = this.uploadService.files.get(uid);
    if (key === Keys.Escape && files[0].state === FileState.Uploading) {
      this.uploadService.cancelFiles(uid);
      this.navigation.focusSelectButton();
      return;
    }
    if ((key === Keys.Enter || key === Keys.NumpadEnter) && files[0].state === FileState.Failed) {
      this.uploadService.retryFiles(uid);
      return;
    }
    if (key === Keys.Delete) {
      if (files[0].state === FileState.Uploading) {
        this.uploadService.cancelFiles(uid);
      } else if (this.hasDelete(item)) {
        this.uploadService.removeFiles(uid);
      }
      if (index < numberOfFiles - 1) {
        filesArray[index + 1].focus();
      } else if (numberOfFiles === 1) {
        this.navigation.focusSelectButton();
      } else if (index === numberOfFiles - 1) {
        this.navigation.focusedIndex = this.navigation.focusedFileIndex = index - 1;
        filesArray[index - 1].focus();
      }
    }
    const isUploadChunk = this.uploadService.async.chunk;
    const canTogglePauseResume = key === Keys.Space && files[0].state !== FileState.Uploaded;
    if (canTogglePauseResume && isUploadChunk) {
      if (files[0].state === FileState.Paused) {
        this.uploadService.resumeFile(uid);
      } else {
        this.uploadService.pauseFile(uid);
      }
    }
  }
  hasDelete(item) {
    return item.element.nativeElement.getElementsByClassName("k-svg-i-x").length > 0;
  }
  /**
   * Tracks files array by the UID of the first file in the batch.
   * Each batch of files shares the same UID, which remains stable
   * throughout the file lifecycle until the batch is removed.
   */
  trackByUid(index, files) {
    return files[0]?.uid || index.toString();
  }
  ngOnDestroy() {
    this.focusSubscription.unsubscribe();
    this.actionSubscription.unsubscribe();
  }
  static ɵfac = function FileListComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _FileListComponent)(ɵɵdirectiveInject(UploadService), ɵɵdirectiveInject(NavigationService));
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _FileListComponent,
    selectors: [["", "kendo-upload-file-list", ""]],
    viewQuery: function FileListComponent_Query(rf, ctx) {
      if (rf & 1) {
        ɵɵviewQuery(FileListItemDirective, 5);
      }
      if (rf & 2) {
        let _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.fileListItems = _t);
      }
    },
    hostVars: 1,
    hostBindings: function FileListComponent_HostBindings(rf, ctx) {
      if (rf & 2) {
        ɵɵattribute("role", ctx.fileListRole);
      }
    },
    inputs: {
      disabled: "disabled",
      fileList: "fileList",
      fileTemplate: "fileTemplate",
      fileInfoTemplate: "fileInfoTemplate"
    },
    standalone: true,
    features: [ɵɵStandaloneFeature],
    attrs: _c8,
    decls: 2,
    vars: 0,
    consts: [["kendoUploadFileListItem", "", "role", "listitem", 3, "files", "index"], [1, "k-file-single", 3, "disabled", "file", "fileInfoTemplate"], [1, "k-file-multiple", 3, "disabled", "files", "fileInfoTemplate"], [3, "ngTemplateOutlet", "ngTemplateOutletContext"]],
    template: function FileListComponent_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵrepeaterCreate(0, FileListComponent_For_1_Template, 4, 5, "li", 0, ctx.trackByUid, true);
      }
      if (rf & 2) {
        ɵɵrepeater(ctx.fileList);
      }
    },
    dependencies: [FileListItemDirective, FileListSingleItemComponent, FileListMultipleItemsComponent, NgTemplateOutlet],
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FileListComponent, [{
    type: Component,
    args: [{
      selector: "[kendo-upload-file-list]",
      template: `
        @for (files of fileList; track trackByUid($index, files); let index = $index) {
          <li kendoUploadFileListItem [files]='files' [index]='index' role="listitem">
            @if (files.length === 1 && !fileTemplate) {
              <kendo-upload-file-list-single-item
                class='k-file-single'
                [disabled]='disabled'
                [file]='files[0]'
              [fileInfoTemplate]="fileInfoTemplate"></kendo-upload-file-list-single-item>
            }
            @if (files.length > 1 && !fileTemplate) {
              <kendo-upload-file-list-multiple-items
                class='k-file-multiple'
                [disabled]='disabled'
                [files]='files'
              [fileInfoTemplate]="fileInfoTemplate"></kendo-upload-file-list-multiple-items>
            }
            @if (fileTemplate) {
              <ng-container
                    [ngTemplateOutlet]="fileTemplate.templateRef" [ngTemplateOutletContext]="{
                            templateRef: fileTemplate.templateRef,
                            state: files[0].state,
                            $implicit: files
                        }"></ng-container>
            }
          </li>
        }
        `,
      standalone: true,
      imports: [FileListItemDirective, FileListSingleItemComponent, FileListMultipleItemsComponent, NgTemplateOutlet]
    }]
  }], () => [{
    type: UploadService
  }, {
    type: NavigationService
  }], {
    disabled: [{
      type: Input
    }],
    fileList: [{
      type: Input
    }],
    fileTemplate: [{
      type: Input
    }],
    fileInfoTemplate: [{
      type: Input
    }],
    fileListItems: [{
      type: ViewChildren,
      args: [FileListItemDirective]
    }],
    fileListRole: [{
      type: HostBinding,
      args: ["attr.role"]
    }]
  });
})();
var UploadStatusTotalComponent = class _UploadStatusTotalComponent {
  localization;
  fileList;
  isFailed;
  isPaused;
  isUploading;
  statusText;
  checkmarkIcon = checkIcon;
  exceptionSVGIcon = exclamationCircleIcon;
  uploadSVGIcon = uploadIcon;
  pauseSVGIcon = pauseSmIcon;
  constructor(localization) {
    this.localization = localization;
  }
  get iconClass() {
    if (!this.isUploading && !this.isFailed) {
      return "checkmark";
    }
    if (!this.isUploading && this.isFailed) {
      return "exception";
    }
    if (this.isUploading) {
      return "upload";
    }
    if (this.isPaused) {
      return "pause-sm";
    }
  }
  get SVGIconClass() {
    if (!this.isUploading && !this.isFailed) {
      return this.checkmarkIcon;
    }
    if (!this.isUploading && this.isFailed) {
      return this.exceptionSVGIcon;
    }
    if (this.isUploading) {
      return this.uploadSVGIcon;
    }
    if (this.isPaused) {
      return this.pauseSVGIcon;
    }
  }
  ngDoCheck() {
    this.isPaused = this.fileList.hasFileWithState([FileState.Paused]);
    this.isFailed = this.fileList.hasFileWithState([FileState.Failed]);
    this.isUploading = this.fileList.hasFileWithState([FileState.Uploading]);
    if (this.isPaused && !this.isUploading) {
      this.statusText = this.localization.get("headerStatusPaused");
    } else {
      this.statusText = this.isUploading ? this.localization.get("headerStatusUploading") : this.localization.get("headerStatusUploaded");
    }
  }
  static ɵfac = function UploadStatusTotalComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _UploadStatusTotalComponent)(ɵɵdirectiveInject(LocalizationService));
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _UploadStatusTotalComponent,
    selectors: [["kendo-upload-status-total"]],
    inputs: {
      fileList: "fileList"
    },
    standalone: true,
    features: [ɵɵStandaloneFeature],
    decls: 2,
    vars: 3,
    consts: [[3, "name", "svgIcon"]],
    template: function UploadStatusTotalComponent_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵelement(0, "kendo-icon-wrapper", 0);
        ɵɵtext(1);
      }
      if (rf & 2) {
        ɵɵproperty("name", ctx.iconClass)("svgIcon", ctx.SVGIconClass);
        ɵɵadvance();
        ɵɵtextInterpolate1(" ", ctx.statusText, " ");
      }
    },
    dependencies: [IconWrapperComponent],
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UploadStatusTotalComponent, [{
    type: Component,
    args: [{
      selector: "kendo-upload-status-total",
      template: `
        <kendo-icon-wrapper
            [name]="iconClass"
            [svgIcon]="SVGIconClass"
        >
        </kendo-icon-wrapper>
        {{statusText}}
    `,
      standalone: true,
      imports: [IconWrapperComponent]
    }]
  }], () => [{
    type: LocalizationService
  }], {
    fileList: [{
      type: Input
    }]
  });
})();
var FileSelectDirective = class _FileSelectDirective {
  uploadService;
  navigation;
  dir;
  disabled;
  multiple;
  restrictions;
  accept;
  required;
  type = "file";
  autocomplete = "off";
  tabIndex = -1;
  ariaHidden = true;
  element;
  constructor(uploadService, navigation, el) {
    this.uploadService = uploadService;
    this.navigation = navigation;
    this.element = el;
  }
  classNames = true;
  get nameAttribute() {
    return this.uploadService.async.saveField;
  }
  get multipleAttribute() {
    return this.multiple ? "multiple" : null;
  }
  get dirAttribute() {
    return this.dir;
  }
  get disabledAttribute() {
    return this.disabled ? "true" : null;
  }
  get acceptAttribute() {
    return this.accept ? this.accept : null;
  }
  get requiredAttribute() {
    return this.required ? "" : null;
  }
  onInputChange(event) {
    const ua = navigator.userAgent;
    const webkit = /(webkit)[ \/]([\w.]+)/i;
    const msBrowsers = /(windows)[ \/]([\w.]+)/i;
    let selectedFiles = inputFiles(event.target);
    selectedFiles = assignGuidToFiles(selectedFiles, !this.uploadService.async.batch);
    validateFiles(selectedFiles, this.restrictions);
    if (!this.multiple) {
      this.uploadService.clearFiles();
    }
    this.uploadService.addFiles(selectedFiles);
    const native = this.element.nativeElement;
    if (ua.match(webkit) || ua.match(msBrowsers)) {
      native.type = "";
      native.type = "file";
    }
    setTimeout(() => {
      this.navigation.focusedIndex = -1;
    });
  }
  static ɵfac = function FileSelectDirective_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _FileSelectDirective)(ɵɵdirectiveInject(UploadService), ɵɵdirectiveInject(NavigationService), ɵɵdirectiveInject(ElementRef));
  };
  static ɵdir = ɵɵdefineDirective({
    type: _FileSelectDirective,
    selectors: [["", "kendoFileSelect", ""]],
    hostVars: 12,
    hostBindings: function FileSelectDirective_HostBindings(rf, ctx) {
      if (rf & 1) {
        ɵɵlistener("change", function FileSelectDirective_change_HostBindingHandler($event) {
          return ctx.onInputChange($event);
        });
      }
      if (rf & 2) {
        ɵɵattribute("type", ctx.type)("autocomplete", ctx.autocomplete)("tabindex", ctx.tabIndex)("aria-hidden", ctx.ariaHidden)("name", ctx.nameAttribute)("multiple", ctx.multipleAttribute)("dir", ctx.dirAttribute)("disabled", ctx.disabledAttribute)("accept", ctx.acceptAttribute)("required", ctx.requiredAttribute);
        ɵɵclassProp("k-hidden", ctx.classNames);
      }
    },
    inputs: {
      dir: "dir",
      disabled: "disabled",
      multiple: "multiple",
      restrictions: "restrictions",
      accept: "accept",
      required: "required"
    },
    standalone: true
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FileSelectDirective, [{
    type: Directive,
    args: [{
      selector: "[kendoFileSelect]",
      standalone: true
    }]
  }], () => [{
    type: UploadService
  }, {
    type: NavigationService
  }, {
    type: ElementRef
  }], {
    dir: [{
      type: Input
    }],
    disabled: [{
      type: Input
    }],
    multiple: [{
      type: Input
    }],
    restrictions: [{
      type: Input
    }],
    accept: [{
      type: Input
    }],
    required: [{
      type: Input
    }],
    type: [{
      type: HostBinding,
      args: ["attr.type"]
    }],
    autocomplete: [{
      type: HostBinding,
      args: ["attr.autocomplete"]
    }],
    tabIndex: [{
      type: HostBinding,
      args: ["attr.tabindex"]
    }],
    ariaHidden: [{
      type: HostBinding,
      args: ["attr.aria-hidden"]
    }],
    classNames: [{
      type: HostBinding,
      args: ["class.k-hidden"]
    }],
    nameAttribute: [{
      type: HostBinding,
      args: ["attr.name"]
    }],
    multipleAttribute: [{
      type: HostBinding,
      args: ["attr.multiple"]
    }],
    dirAttribute: [{
      type: HostBinding,
      args: ["attr.dir"]
    }],
    disabledAttribute: [{
      type: HostBinding,
      args: ["attr.disabled"]
    }],
    acceptAttribute: [{
      type: HostBinding,
      args: ["attr.accept"]
    }],
    requiredAttribute: [{
      type: HostBinding,
      args: ["attr.required"]
    }],
    onInputChange: [{
      type: HostListener,
      args: ["change", ["$event"]]
    }]
  });
})();
var DropZoneBase = class _DropZoneBase {
  element;
  renderer;
  hoverClass;
  lastDragElement;
  hideIntervalElement = null;
  /**
   * @hidden
   */
  onElementDragEnterListener() {
    this.addClass(this.hoverClass);
    this.lastDragElement = /* @__PURE__ */ new Date();
    if (!this.hideIntervalElement) {
      this.hideIntervalElement = setInterval(() => {
        if (this.calculateTimeDiff(this.lastDragElement) < 100) {
          return;
        }
        this.removeClass(this.hoverClass);
        clearInterval(this.hideIntervalElement);
        this.hideIntervalElement = null;
      }, 100);
    }
    return false;
  }
  /**
   * @hidden
   */
  onElementDragOverListener() {
    this.lastDragElement = /* @__PURE__ */ new Date();
    return false;
  }
  constructor(element, renderer, cssClass) {
    this.element = element;
    this.renderer = renderer;
    this.hoverClass = cssClass;
  }
  calculateTimeDiff(prevEvent) {
    return (/* @__PURE__ */ new Date()).getTime() - prevEvent.getTime();
  }
  addClass(className) {
    this.renderer.addClass(this.element.nativeElement, className);
  }
  removeClass(className) {
    this.renderer.removeClass(this.element.nativeElement, className);
  }
  static ɵfac = function DropZoneBase_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _DropZoneBase)(ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(Renderer2), ɵɵdirectiveInject("hoverClass"));
  };
  static ɵdir = ɵɵdefineDirective({
    type: _DropZoneBase,
    hostBindings: function DropZoneBase_HostBindings(rf, ctx) {
      if (rf & 1) {
        ɵɵlistener("dragenter", function DropZoneBase_dragenter_HostBindingHandler() {
          return ctx.onElementDragEnterListener();
        })("dragover", function DropZoneBase_dragover_HostBindingHandler() {
          return ctx.onElementDragOverListener();
        });
      }
    }
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DropZoneBase, [{
    type: Directive
  }], () => [{
    type: ElementRef
  }, {
    type: Renderer2
  }, {
    type: void 0,
    decorators: [{
      type: Inject,
      args: ["hoverClass"]
    }]
  }], {
    onElementDragEnterListener: [{
      type: HostListener,
      args: ["dragenter"]
    }],
    onElementDragOverListener: [{
      type: HostListener,
      args: ["dragover"]
    }]
  });
})();
var DropZoneInternalDirective = class _DropZoneInternalDirective extends DropZoneBase {
  ngZone;
  uploadService;
  disabled;
  multiple;
  restrictions;
  initialClassName = true;
  unsubscribeDocumentDragEnter;
  unsubscribeDocumentDragOver;
  lastDragDocument;
  hideIntervalDocument = null;
  activeClass = "k-dropzone-active";
  constructor(element, renderer, ngZone, uploadService) {
    super(element, renderer, "k-hover");
    this.ngZone = ngZone;
    this.uploadService = uploadService;
    this.ngZone.runOutsideAngular(() => {
      this.unsubscribeDocumentDragEnter = this.renderer.listen("document", "dragenter", () => this.onDocumentDragEnter());
      this.unsubscribeDocumentDragOver = this.renderer.listen("document", "dragover", () => this.onDocumentDragOver());
    });
  }
  ngOnDestroy() {
    this.ngZone.runOutsideAngular(() => {
      if (this.unsubscribeDocumentDragEnter) {
        this.unsubscribeDocumentDragEnter();
      }
      if (this.unsubscribeDocumentDragOver) {
        this.unsubscribeDocumentDragOver();
      }
    });
  }
  onDocumentDragEnter() {
    this.addClass(this.activeClass);
    this.lastDragDocument = /* @__PURE__ */ new Date();
    if (!this.hideIntervalDocument) {
      this.hideIntervalDocument = setInterval(() => {
        if (this.calculateTimeDiff(this.lastDragDocument) < 100) {
          return;
        }
        this.removeClass(this.activeClass);
        clearInterval(this.hideIntervalDocument);
        this.hideIntervalDocument = null;
      }, 100);
    }
    return false;
  }
  /**
   * @hidden
   */
  onDocumentDragOver() {
    this.lastDragDocument = /* @__PURE__ */ new Date();
    return false;
  }
  onDropListener(event) {
    const droppedFiles = event.dataTransfer.files;
    if (droppedFiles.length > 0 && !this.disabled) {
      let files = getAllFileInfo(droppedFiles);
      files = assignGuidToFiles(files, !this.uploadService.async.batch);
      if (!this.multiple) {
        files.splice(1, files.length - 1);
        this.uploadService.clearFiles();
      }
      validateFiles(files, this.restrictions);
      this.uploadService.addFiles(files);
    }
    return false;
  }
  static ɵfac = function DropZoneInternalDirective_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _DropZoneInternalDirective)(ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(Renderer2), ɵɵdirectiveInject(NgZone), ɵɵdirectiveInject(UploadService));
  };
  static ɵdir = ɵɵdefineDirective({
    type: _DropZoneInternalDirective,
    selectors: [["", "kendoUploadInternalDropZone", ""], ["", "kendoFileSelectInternalDropZone", ""]],
    hostVars: 4,
    hostBindings: function DropZoneInternalDirective_HostBindings(rf, ctx) {
      if (rf & 1) {
        ɵɵlistener("drop", function DropZoneInternalDirective_drop_HostBindingHandler($event) {
          return ctx.onDropListener($event);
        });
      }
      if (rf & 2) {
        ɵɵclassProp("k-dropzone", ctx.initialClassName)("k-upload-dropzone", ctx.initialClassName);
      }
    },
    inputs: {
      disabled: "disabled",
      multiple: "multiple",
      restrictions: "restrictions"
    },
    standalone: true,
    features: [ɵɵInheritDefinitionFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DropZoneInternalDirective, [{
    type: Directive,
    args: [{
      selector: `
      [kendoUploadInternalDropZone],
      [kendoFileSelectInternalDropZone]
    `,
      standalone: true
    }]
  }], () => [{
    type: ElementRef
  }, {
    type: Renderer2
  }, {
    type: NgZone
  }, {
    type: UploadService
  }], {
    disabled: [{
      type: Input
    }],
    multiple: [{
      type: Input
    }],
    restrictions: [{
      type: Input
    }],
    initialClassName: [{
      type: HostBinding,
      args: ["class.k-dropzone"]
    }, {
      type: HostBinding,
      args: ["class.k-upload-dropzone"]
    }],
    onDropListener: [{
      type: HostListener,
      args: ["drop", ["$event"]]
    }]
  });
})();
var Messages = class _Messages extends ComponentMessages {
  /**
   * Sets the text for the **Cancel** button.
   *
   * @default 'Cancel'
   */
  cancel;
  /**
   * Sets the text for the **Clear** button.
   *
   * @default 'Clear'
   */
  clearSelectedFiles;
  /**
   * Sets the drop-zone hint.
   *
   * @default 'Drop files here to upload'
   */
  dropFilesHere;
  /**
   * Sets the external drop-zone hint.
   *
   * @default 'Drag and drop files here to upload'
   */
  externalDropFilesHere;
  /**
   * Sets the status message for a batch of files.
   *
   * @default 'files'
   */
  filesBatchStatus;
  /**
   * Sets the status message for a batch of files after failed upload.
   *
   * @default 'files failed to upload.'
   */
  filesBatchStatusFailed;
  /**
   * Sets the status message for a batch of files after successful upload.
   *
   * @default 'files successfully uploaded.'
   */
  filesBatchStatusUploaded;
  /**
   * Sets the file status message after failed upload.
   *
   * @default 'File failed to upload.'
   */
  fileStatusFailed;
  /**
   * Sets the file status message after successful upload.
   *
   * @default 'File successfully uploaded.'
   */
  fileStatusUploaded;
  /**
   * Sets the header status message when the file upload is paused.
   *
   * @default 'Paused'
   */
  headerStatusPaused;
  /**
   * Sets the header status message after the file upload completes.
   *
   * @default 'Done'
   */
  headerStatusUploaded;
  /**
   * Sets the header status message during the upload of the file.
   *
   * @default 'Uploading...'
   */
  headerStatusUploading;
  /**
   * Sets the text for the invalid `allowedExtensions` restriction message.
   *
   * @default 'File type not allowed.'
   */
  invalidFileExtension;
  /**
   * Sets the text for the invalid `maxFileSize` restriction message.
   *
   * @default 'File size too large.'
   */
  invalidMaxFileSize;
  /**
   * Sets the text for the invalid `minFileSize` restriction message.
   *
   * @default 'File size too small.'
   */
  invalidMinFileSize;
  /**
   * Sets the text for the **Pause** button.
   *
   * @default 'Pause'
   */
  pause;
  /**
   * Sets the text for the **Remove** button.
   *
   * @default 'Remove'
   */
  remove;
  /**
   * Sets the text for the **Resume** button.
   *
   * @default 'Resume'
   */
  resume;
  /**
   * Sets the text for the **Retry** button.
   *
   * @default 'Retry'
   */
  retry;
  /**
   * Sets the text for the **Select** button.
   *
   * @default 'Select files...'
   */
  select;
  /**
   * Sets the text for the **Upload files** button.
   *
   * @default 'Upload'
   */
  uploadSelectedFiles;
  static ɵfac = /* @__PURE__ */ (() => {
    let ɵMessages_BaseFactory;
    return function Messages_Factory(__ngFactoryType__) {
      return (ɵMessages_BaseFactory || (ɵMessages_BaseFactory = ɵɵgetInheritedFactory(_Messages)))(__ngFactoryType__ || _Messages);
    };
  })();
  static ɵdir = ɵɵdefineDirective({
    type: _Messages,
    inputs: {
      cancel: "cancel",
      clearSelectedFiles: "clearSelectedFiles",
      dropFilesHere: "dropFilesHere",
      externalDropFilesHere: "externalDropFilesHere",
      filesBatchStatus: "filesBatchStatus",
      filesBatchStatusFailed: "filesBatchStatusFailed",
      filesBatchStatusUploaded: "filesBatchStatusUploaded",
      fileStatusFailed: "fileStatusFailed",
      fileStatusUploaded: "fileStatusUploaded",
      headerStatusPaused: "headerStatusPaused",
      headerStatusUploaded: "headerStatusUploaded",
      headerStatusUploading: "headerStatusUploading",
      invalidFileExtension: "invalidFileExtension",
      invalidMaxFileSize: "invalidMaxFileSize",
      invalidMinFileSize: "invalidMinFileSize",
      pause: "pause",
      remove: "remove",
      resume: "resume",
      retry: "retry",
      select: "select",
      uploadSelectedFiles: "uploadSelectedFiles"
    },
    features: [ɵɵInheritDefinitionFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Messages, [{
    type: Directive
  }], null, {
    cancel: [{
      type: Input
    }],
    clearSelectedFiles: [{
      type: Input
    }],
    dropFilesHere: [{
      type: Input
    }],
    externalDropFilesHere: [{
      type: Input
    }],
    filesBatchStatus: [{
      type: Input
    }],
    filesBatchStatusFailed: [{
      type: Input
    }],
    filesBatchStatusUploaded: [{
      type: Input
    }],
    fileStatusFailed: [{
      type: Input
    }],
    fileStatusUploaded: [{
      type: Input
    }],
    headerStatusPaused: [{
      type: Input
    }],
    headerStatusUploaded: [{
      type: Input
    }],
    headerStatusUploading: [{
      type: Input
    }],
    invalidFileExtension: [{
      type: Input
    }],
    invalidMaxFileSize: [{
      type: Input
    }],
    invalidMinFileSize: [{
      type: Input
    }],
    pause: [{
      type: Input
    }],
    remove: [{
      type: Input
    }],
    resume: [{
      type: Input
    }],
    retry: [{
      type: Input
    }],
    select: [{
      type: Input
    }],
    uploadSelectedFiles: [{
      type: Input
    }]
  });
})();
var LocalizedMessagesDirective = class _LocalizedMessagesDirective extends Messages {
  service;
  constructor(service) {
    super();
    this.service = service;
  }
  static ɵfac = function LocalizedMessagesDirective_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _LocalizedMessagesDirective)(ɵɵdirectiveInject(LocalizationService));
  };
  static ɵdir = ɵɵdefineDirective({
    type: _LocalizedMessagesDirective,
    selectors: [["", "kendoUploadLocalizedMessages", ""], ["", "kendoFileSelectLocalizedMessages", ""], ["", "kendoUploadDropZoneLocalizedMessages", ""]],
    standalone: true,
    features: [ɵɵProvidersFeature([{
      provide: Messages,
      useExisting: forwardRef(() => _LocalizedMessagesDirective)
    }]), ɵɵInheritDefinitionFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LocalizedMessagesDirective, [{
    type: Directive,
    args: [{
      providers: [{
        provide: Messages,
        useExisting: forwardRef(() => LocalizedMessagesDirective)
      }],
      selector: `
    [kendoUploadLocalizedMessages],
    [kendoFileSelectLocalizedMessages],
    [kendoUploadDropZoneLocalizedMessages]
  `,
      standalone: true
    }]
  }], () => [{
    type: LocalizationService
  }], null);
})();
var UPLOAD_VALUE_ACCESSOR = {
  multi: true,
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => UploadComponent)
};
var idx$1 = 0;
var UploadComponent = class _UploadComponent extends UploadFileSelectBase {
  uploadService;
  localization;
  navigation;
  dropZoneService;
  zone;
  renderer;
  cdr;
  injector;
  /**
   * Specifies whether selected files upload automatically
   * ([see example]({% slug fileprocessing_upload %}#toc-automatic-upload-of-files)).
   * Set `autoUpload` to `false` to change this behavior.
   *
   * @default true
   */
  set autoUpload(autoUpload) {
    this.uploadService.async.autoUpload = autoUpload;
  }
  get autoUpload() {
    return this.uploadService.async.autoUpload;
  }
  /**
   * Specifies whether all files in the selection upload in a single request
   * ([see example]({% slug fileprocessing_upload %}#toc-upload-of-batches-of-files)).
   * Files selected one after the other upload in separate requests.
   *
   * @default false
   */
  set batch(batch) {
    this.uploadService.async.batch = batch;
  }
  get batch() {
    return this.uploadService.async.batch;
  }
  /**
   * Specifies whether credentials (cookies, headers) are sent for cross-site requests
   * ([see example]({% slug credentials_upload %}#toc-attaching-credentials-to-requests)).
   * Set `withCredentials` has no effect on same-site requests.
   * Use the `saveHeaders` or `removeHeaders` property to add credentials to the request.
   * You can also use the [`upload`]({% slug api_upload_uploadevent %}) event.
   *
   * @default true
   */
  set withCredentials(withCredentials) {
    this.uploadService.async.withCredentials = withCredentials;
  }
  get withCredentials() {
    return this.uploadService.async.withCredentials;
  }
  /**
   * Specifies the [`FormData`](https://developer.mozilla.org/en-US/docs/Web/API/FormData) key which contains the files submitted to `saveUrl`.
   *
   */
  set saveField(saveField) {
    this.uploadService.async.saveField = saveField;
  }
  get saveField() {
    return this.uploadService.async.saveField;
  }
  /**
   * Specifies the [`HttpHeaders`](https://angular.io/api/common/http/HttpHeaders) attached to each upload request.
   */
  set saveHeaders(saveHeaders) {
    this.uploadService.async.saveHeaders = saveHeaders;
  }
  get saveHeaders() {
    return this.uploadService.async.saveHeaders;
  }
  /**
   * Specifies the [`RequestMethod`](https://angular.io/api/http/RequestMethod) of the upload request.
   *
   */
  set saveMethod(saveMethod) {
    this.uploadService.async.saveMethod = saveMethod;
  }
  get saveMethod() {
    return this.uploadService.async.saveMethod;
  }
  /**
   * Specifies the URL of the endpoint for the upload request.
   * The request [`FormData`](https://developer.mozilla.org/en-US/docs/Web/API/FormData) key uses the name from the `saveField` property.
   * This key contains the list of files to be uploaded.
   */
  set saveUrl(saveUrl) {
    this.uploadService.async.saveUrl = saveUrl;
  }
  get saveUrl() {
    return this.uploadService.async.saveUrl;
  }
  /**
   * Specifies the expected [`response type`](https://angular.io/api/common/http/HttpRequest#responseType) of the server.
   * The response type determines how the response is parsed.
   *
   * @default 'json'
   */
  set responseType(responseType) {
    this.uploadService.async.responseType = responseType;
  }
  get responseType() {
    return this.uploadService.async.responseType;
  }
  /**
   * Specifies the [`FormData`](https://developer.mozilla.org/en-US/docs/Web/API/FormData) key which contains the list of file names submitted to `removeUrl`.
   *
   */
  set removeField(removeField) {
    this.uploadService.async.removeField = removeField;
  }
  get removeField() {
    return this.uploadService.async.removeField;
  }
  /**
   * Specifies the [`HttpHeaders`](https://angular.io/api/common/http/HttpHeaders) attached to each `remove` request.
   */
  set removeHeaders(removeHeaders) {
    this.uploadService.async.removeHeaders = removeHeaders;
  }
  get removeHeaders() {
    return this.uploadService.async.removeHeaders;
  }
  /**
   * Specifies the [`RequestMethod`](https://angular.io/api/http/RequestMethod) of the `remove` request.
   *
   */
  set removeMethod(removeMethod) {
    this.uploadService.async.removeMethod = removeMethod;
  }
  get removeMethod() {
    return this.uploadService.async.removeMethod;
  }
  /**
   * Specifies the URL of the endpoint for the `remove` request.
   * The [`FormData`](https://developer.mozilla.org/en-US/docs/Web/API/FormData) request key uses the name from the `removeField` property.
   * This key contains the list of file names to be removed.
   */
  set removeUrl(removeUrl) {
    this.uploadService.async.removeUrl = removeUrl;
  }
  get removeUrl() {
    return this.uploadService.async.removeUrl;
  }
  /**
   * Specifies whether the chunk functionality of the Upload is enabled.
   *
   * @default false
   */
  chunkable = false;
  /**
   * Specifies whether selected files upload simultaneously or one by one.
   *
   * @default true
   */
  set concurrent(concurrent) {
    this.uploadService.async.concurrent = concurrent;
  }
  get concurrent() {
    return this.uploadService.async.concurrent;
  }
  /**
   * Specifies whether the file list is visible.
   *
   * @default true
   */
  showFileList = true;
  /**
   * @hidden
   */
  set tabIndex(tabIndex) {
    this.tabindex = tabIndex;
  }
  get tabIndex() {
    return this.tabindex;
  }
  /**
   * Specifies the layout of the action buttons.
   *
   * @default 'end'
   */
  actionsLayout = "end";
  fileSelectInput;
  /**
   * Fires when the upload is canceled while in progress.
   */
  cancel = new EventEmitter();
  /**
   * Fires when the file list is about to be cleared.
   * Prevent this event to keep the files in the list.
   */
  clear = new EventEmitter();
  /**
   * Fires when all active uploads complete successfully or with errors.
   */
  complete = new EventEmitter();
  /**
   * Fires when an `upload` or `remove` operation fails.
   */
  error = new EventEmitter();
  /**
   * Fires when the upload of a file is paused.
   */
  pause = new EventEmitter();
  /**
   * Fires when the upload of a file is resumed.
   */
  resume = new EventEmitter();
  /**
   * Fires when an `upload` or `remove` operation completes successfully.
   */
  success = new EventEmitter();
  /**
   * Fires when one or more files are about to be uploaded.
   * Prevent this event to stop the files from uploading and being added to the file list.
   */
  upload = new EventEmitter();
  /**
   * Fires when one or more files are uploading.
   */
  uploadProgress = new EventEmitter();
  /**
   * Fires when the component value changes after a successful `upload`, `remove`, or `clear` operation.
   */
  valueChange = new EventEmitter();
  get dir() {
    return this.direction;
  }
  direction;
  wrapper;
  fileListId;
  documentClick;
  blurSubscription;
  wrapperFocusSubscription;
  selectButtonFocusSubscription;
  localizationChangeSubscription;
  subs;
  constructor(uploadService, localization, navigation, dropZoneService, zone, renderer, cdr, wrapper, injector) {
    super(uploadService, navigation, cdr, injector, zone);
    this.uploadService = uploadService;
    this.localization = localization;
    this.navigation = navigation;
    this.dropZoneService = dropZoneService;
    this.zone = zone;
    this.renderer = renderer;
    this.cdr = cdr;
    this.injector = injector;
    A(packageMetadata);
    this.fileList = this.uploadService.files;
    this.localizationChangeSubscription = localization.changes.subscribe(({
      rtl
    }) => {
      this.direction = rtl ? "rtl" : "ltr";
    });
    this.direction = localization.rtl ? "rtl" : "ltr";
    this.navigation.computeKeys();
    this.wrapper = wrapper.nativeElement;
    this.subscribeBlur();
    this.subscribeFocus();
    this.attachEventHandlers();
  }
  ngOnInit() {
    this.verifySettings();
    const {
      buttonId,
      fileListId
    } = this.getIds();
    this.focusableId = buttonId;
    this.fileListId = fileListId;
    this.uploadService.setChunkSettings(this.chunkable);
    if (this.zoneId) {
      this.dropZoneService.addComponent(this, this.zoneId);
    }
    this.zone.runOutsideAngular(() => {
      this.subs.add(this.renderer.listen(this.wrapper, "keydown", (event) => this.handleKeydown(event)));
    });
  }
  ngOnChanges(changes) {
    if (isChanged("chunkable", changes)) {
      const newChunkable = changes.chunkable.currentValue;
      if (typeof newChunkable === "boolean") {
        this.uploadService.async.chunk = newChunkable;
      }
      if (typeof newChunkable === "object" && newChunkable !== null) {
        this.uploadService.async.chunk = true;
        this.uploadService.chunk = Object.assign({}, this.uploadService.chunk, newChunkable);
      }
    }
  }
  ngOnDestroy() {
    this.fileList.clear();
    if (this.zoneId) {
      this.dropZoneService.clearComponent(this, this.zoneId);
    }
    if (this.blurSubscription) {
      this.blurSubscription.unsubscribe();
    }
    if (this.wrapperFocusSubscription) {
      this.wrapperFocusSubscription.unsubscribe();
    }
    if (this.selectButtonFocusSubscription) {
      this.selectButtonFocusSubscription.unsubscribe();
    }
    if (this.localizationChangeSubscription) {
      this.localizationChangeSubscription.unsubscribe();
    }
    if (this.subs) {
      this.subs.unsubscribe();
    }
  }
  /**
   * @hidden
   */
  writeValue(newValue) {
    super.writeValue(newValue, validateInitialFileInfo, "addInitialFiles");
  }
  /**
   * @hidden
   */
  get showActionButtons() {
    let areVisible = false;
    if (!this.autoUpload) {
      const hasFilesToUpload = this.fileList.filesToUpload.length > 0;
      const uploadingFiles = this.fileList.hasFileWithState([FileState.Uploading]);
      if (this.concurrent && hasFilesToUpload) {
        areVisible = true;
      }
      if (!this.concurrent && hasFilesToUpload && !uploadingFiles) {
        areVisible = true;
      }
    }
    this.navigation.actionButtonsVisible = areVisible;
    return areVisible;
  }
  /**
   * @hidden
   */
  get showTotalStatus() {
    const states = [FileState.Uploaded, FileState.Uploading, FileState.Failed, FileState.Paused];
    if (this.fileList.hasFileWithState(states)) {
      return true;
    }
    return false;
  }
  /**
   * @hidden
   */
  textFor(key) {
    return this.localization.get(key);
  }
  /**
   * @hidden
   */
  getIds() {
    const id = ++idx$1;
    const buttonId = `k-upload-button-${id}`;
    const fileListId = `k-upload-file-list-${id}`;
    return {
      buttonId,
      fileListId
    };
  }
  /**
   * Pauses the upload process of a file that is currently uploading.
   * This method requires the `chunkable` option of the Upload to be enabled.
   *
   * @param uid The `uid` of the file that will be paused.
   */
  pauseFileByUid(uid) {
    this.uploadService.pauseFile(uid);
  }
  /**
   * Resumes the upload process for a file that was previously paused.
   * This method requires the `chunkable` option of the Upload to be enabled.
   *
   * @param uid The `uid` of the file that will be resumed.
   */
  resumeFileByUid(uid) {
    this.uploadService.resumeFile(uid);
  }
  /**
   * Removes a file or a batch of files.
   *
   * @param uid The `uid` of the file or a batch of files that will be removed.
   */
  removeFilesByUid(uid) {
    this.uploadService.removeFiles(uid);
  }
  /**
   * Retries the upload of a file or batch of files that failed to upload.
   *
   * @param uid The `uid` of the file or a batch of files to be retried.
   */
  retryUploadByUid(uid) {
    this.uploadService.retryFiles(uid);
  }
  /**
   * Cancels the upload of a file or a batch of files.
   *
   * @param uid The `uid` of the file or a batch of files that will be canceled.
   */
  cancelUploadByUid(uid) {
    this.uploadService.cancelFiles(uid);
  }
  /**
   * Uploads the currently selected files that pass the set restrictions.
   */
  uploadFiles() {
    if (this.fileList.filesToUpload.length) {
      this.uploadService.uploadFiles();
    }
  }
  /**
   * Clears all files from the UI without sending requests to the remove handler.
   */
  clearFiles() {
    this.uploadService.clearFiles();
  }
  /**
   * @hidden
   * Used by the external dropzone to add files to the Upload
   */
  addFiles(files) {
    this.uploadService.addFiles(files);
  }
  /**
   * @hidden
   * Used to determine if the component is empty.
   */
  isEmpty() {
    return false;
  }
  verifySettings() {
    if (isDevMode()) {
      if (this.batch && this.chunkable !== false) {
        throw new Error("The file chunking functionality requires the batch setting to be disabled.");
      }
    }
  }
  subscribeBlur() {
    if (!isDocumentAvailable()) {
      return;
    }
    this.zone.runOutsideAngular(() => {
      this.documentClick = fromEvent(document, "click").pipe(filter((event) => {
        return !(this.wrapper !== event.target && this.wrapper.contains(event.target));
      }));
      this.blurSubscription = merge(this.documentClick, this.navigation.onTabOut).subscribe(() => {
        if (this.navigation.focused) {
          this.zone.run(() => {
            this.navigation.focused = false;
            this.onTouchedCallback();
            this.onBlur.emit();
          });
        }
      });
    });
  }
  handleKeydown(event) {
    if (this.disabled) {
      return;
    }
    if (event.target === this.fileSelectButton.nativeElement && (event.code === Keys.Enter || event.code === Keys.Space)) {
      event.preventDefault();
      this.fileSelectInput.nativeElement.click();
      return;
    }
    if (hasClasses(event.target, UPLOAD_CLASSES) || !isFocusable(event.target) && !hasClasses(event.target, IGNORE_TARGET_CLASSES)) {
      this.navigation.process(event);
    }
  }
  subscribeFocus() {
    this.wrapperFocusSubscription = this.navigation.onWrapperFocus.subscribe(() => {
      this.onFocus.emit();
    });
    this.selectButtonFocusSubscription = this.navigation.onSelectButtonFocus.subscribe(() => {
      this.fileSelectButton.nativeElement.focus();
    });
  }
  attachEventHandlers() {
    this.subs = this.uploadService.cancelEvent.subscribe((args) => {
      this.cancel.emit(args);
    });
    this.subs.add(this.uploadService.changeEvent.subscribe((files) => {
      this.onChangeCallback(files);
      this.valueChange.emit(files);
    }));
    this.subs.add(this.uploadService.clearEvent.subscribe((args) => {
      this.clear.emit(args);
    }));
    this.subs.add(this.uploadService.completeEvent.subscribe(() => {
      this.complete.emit();
    }));
    this.subs.add(this.uploadService.errorEvent.subscribe((args) => {
      this.error.emit(args);
    }));
    this.subs.add(this.uploadService.pauseEvent.subscribe((args) => {
      this.pause.emit(args);
    }));
    this.subs.add(this.uploadService.removeEvent.subscribe((args) => {
      this.remove.emit(args);
    }));
    this.subs.add(this.uploadService.resumeEvent.subscribe((args) => {
      this.resume.emit(args);
    }));
    this.subs.add(this.uploadService.selectEvent.subscribe((args) => {
      this.select.emit(args);
    }));
    this.subs.add(this.uploadService.successEvent.subscribe((args) => {
      this.success.emit(args);
    }));
    this.subs.add(this.uploadService.uploadEvent.subscribe((args) => {
      this.upload.emit(args);
    }));
    this.subs.add(this.uploadService.uploadProgressEvent.subscribe((args) => {
      this.uploadProgress.emit(args);
    }));
  }
  static ɵfac = function UploadComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _UploadComponent)(ɵɵdirectiveInject(UploadService), ɵɵdirectiveInject(LocalizationService), ɵɵdirectiveInject(NavigationService), ɵɵdirectiveInject(DropZoneService), ɵɵdirectiveInject(NgZone), ɵɵdirectiveInject(Renderer2), ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(Injector));
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _UploadComponent,
    selectors: [["kendo-upload"]],
    viewQuery: function UploadComponent_Query(rf, ctx) {
      if (rf & 1) {
        ɵɵviewQuery(_c9, 7);
      }
      if (rf & 2) {
        let _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.fileSelectInput = _t.first);
      }
    },
    hostVars: 1,
    hostBindings: function UploadComponent_HostBindings(rf, ctx) {
      if (rf & 2) {
        ɵɵattribute("dir", ctx.dir);
      }
    },
    inputs: {
      autoUpload: "autoUpload",
      batch: "batch",
      withCredentials: "withCredentials",
      saveField: "saveField",
      saveHeaders: "saveHeaders",
      saveMethod: "saveMethod",
      saveUrl: "saveUrl",
      responseType: "responseType",
      removeField: "removeField",
      removeHeaders: "removeHeaders",
      removeMethod: "removeMethod",
      removeUrl: "removeUrl",
      chunkable: "chunkable",
      concurrent: "concurrent",
      showFileList: "showFileList",
      tabIndex: "tabIndex",
      actionsLayout: "actionsLayout"
    },
    outputs: {
      cancel: "cancel",
      clear: "clear",
      complete: "complete",
      error: "error",
      pause: "pause",
      resume: "resume",
      success: "success",
      upload: "upload",
      uploadProgress: "uploadProgress",
      valueChange: "valueChange"
    },
    exportAs: ["kendoUpload"],
    standalone: true,
    features: [ɵɵProvidersFeature([LocalizationService, NavigationService, UploadService, DropZoneService, UPLOAD_VALUE_ACCESSOR, {
      provide: L10N_PREFIX,
      useValue: "kendo.upload"
    }, {
      provide: KendoInput,
      useExisting: forwardRef(() => _UploadComponent)
    }]), ɵɵInheritDefinitionFeature, ɵɵNgOnChangesFeature, ɵɵStandaloneFeature],
    decls: 13,
    vars: 19,
    consts: () => {
      let i18n_0;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG__USERS_MACBOOKPRO_DOCUMENTS_WIN_GENOVITY_DEV_USERS_SCD_SCD_COM_WS_NODE_MODULES__PROGRESS_KENDO_ANGULAR_UPLOAD_FESM2022_PROGRESS_KENDO_ANGULAR_UPLOAD_MJS_0 = goog.getMsg("Cancel");
        i18n_0 = MSG__USERS_MACBOOKPRO_DOCUMENTS_WIN_GENOVITY_DEV_USERS_SCD_SCD_COM_WS_NODE_MODULES__PROGRESS_KENDO_ANGULAR_UPLOAD_FESM2022_PROGRESS_KENDO_ANGULAR_UPLOAD_MJS_0;
      } else {
        i18n_0 = $localize`:kendo.upload.cancel|The text for the Cancel button:Cancel`;
      }
      let i18n_1;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG__USERS_MACBOOKPRO_DOCUMENTS_WIN_GENOVITY_DEV_USERS_SCD_SCD_COM_WS_NODE_MODULES__PROGRESS_KENDO_ANGULAR_UPLOAD_FESM2022_PROGRESS_KENDO_ANGULAR_UPLOAD_MJS_1 = goog.getMsg("Clear");
        i18n_1 = MSG__USERS_MACBOOKPRO_DOCUMENTS_WIN_GENOVITY_DEV_USERS_SCD_SCD_COM_WS_NODE_MODULES__PROGRESS_KENDO_ANGULAR_UPLOAD_FESM2022_PROGRESS_KENDO_ANGULAR_UPLOAD_MJS_1;
      } else {
        i18n_1 = $localize`:kendo.upload.clearSelectedFiles|The text for the Clear button:Clear`;
      }
      let i18n_2;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG__USERS_MACBOOKPRO_DOCUMENTS_WIN_GENOVITY_DEV_USERS_SCD_SCD_COM_WS_NODE_MODULES__PROGRESS_KENDO_ANGULAR_UPLOAD_FESM2022_PROGRESS_KENDO_ANGULAR_UPLOAD_MJS_2 = goog.getMsg("Drop files here to upload");
        i18n_2 = MSG__USERS_MACBOOKPRO_DOCUMENTS_WIN_GENOVITY_DEV_USERS_SCD_SCD_COM_WS_NODE_MODULES__PROGRESS_KENDO_ANGULAR_UPLOAD_FESM2022_PROGRESS_KENDO_ANGULAR_UPLOAD_MJS_2;
      } else {
        i18n_2 = $localize`:kendo.upload.dropFilesHere|The drop zone hint:Drop files here to upload`;
      }
      let i18n_3;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG__USERS_MACBOOKPRO_DOCUMENTS_WIN_GENOVITY_DEV_USERS_SCD_SCD_COM_WS_NODE_MODULES__PROGRESS_KENDO_ANGULAR_UPLOAD_FESM2022_PROGRESS_KENDO_ANGULAR_UPLOAD_MJS_3 = goog.getMsg("files");
        i18n_3 = MSG__USERS_MACBOOKPRO_DOCUMENTS_WIN_GENOVITY_DEV_USERS_SCD_SCD_COM_WS_NODE_MODULES__PROGRESS_KENDO_ANGULAR_UPLOAD_FESM2022_PROGRESS_KENDO_ANGULAR_UPLOAD_MJS_3;
      } else {
        i18n_3 = $localize`:kendo.upload.filesBatchStatus|The status message for a batch of files:files`;
      }
      let i18n_4;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG__USERS_MACBOOKPRO_DOCUMENTS_WIN_GENOVITY_DEV_USERS_SCD_SCD_COM_WS_NODE_MODULES__PROGRESS_KENDO_ANGULAR_UPLOAD_FESM2022_PROGRESS_KENDO_ANGULAR_UPLOAD_MJS_4 = goog.getMsg("files failed to upload.");
        i18n_4 = MSG__USERS_MACBOOKPRO_DOCUMENTS_WIN_GENOVITY_DEV_USERS_SCD_SCD_COM_WS_NODE_MODULES__PROGRESS_KENDO_ANGULAR_UPLOAD_FESM2022_PROGRESS_KENDO_ANGULAR_UPLOAD_MJS_4;
      } else {
        i18n_4 = $localize`:kendo.upload.filesBatchStatusFailed|The status message for a batch of files after failed upload:files failed to upload.`;
      }
      let i18n_5;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG__USERS_MACBOOKPRO_DOCUMENTS_WIN_GENOVITY_DEV_USERS_SCD_SCD_COM_WS_NODE_MODULES__PROGRESS_KENDO_ANGULAR_UPLOAD_FESM2022_PROGRESS_KENDO_ANGULAR_UPLOAD_MJS_5 = goog.getMsg("files successfully uploaded.");
        i18n_5 = MSG__USERS_MACBOOKPRO_DOCUMENTS_WIN_GENOVITY_DEV_USERS_SCD_SCD_COM_WS_NODE_MODULES__PROGRESS_KENDO_ANGULAR_UPLOAD_FESM2022_PROGRESS_KENDO_ANGULAR_UPLOAD_MJS_5;
      } else {
        i18n_5 = $localize`:kendo.upload.filesBatchStatusUploaded|The status message for a batch of files after successful upload:files successfully uploaded.`;
      }
      let i18n_6;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG__USERS_MACBOOKPRO_DOCUMENTS_WIN_GENOVITY_DEV_USERS_SCD_SCD_COM_WS_NODE_MODULES__PROGRESS_KENDO_ANGULAR_UPLOAD_FESM2022_PROGRESS_KENDO_ANGULAR_UPLOAD_MJS_6 = goog.getMsg("File failed to upload.");
        i18n_6 = MSG__USERS_MACBOOKPRO_DOCUMENTS_WIN_GENOVITY_DEV_USERS_SCD_SCD_COM_WS_NODE_MODULES__PROGRESS_KENDO_ANGULAR_UPLOAD_FESM2022_PROGRESS_KENDO_ANGULAR_UPLOAD_MJS_6;
      } else {
        i18n_6 = $localize`:kendo.upload.fileStatusFailed|The file status message after failed upload:File failed to upload.`;
      }
      let i18n_7;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG__USERS_MACBOOKPRO_DOCUMENTS_WIN_GENOVITY_DEV_USERS_SCD_SCD_COM_WS_NODE_MODULES__PROGRESS_KENDO_ANGULAR_UPLOAD_FESM2022_PROGRESS_KENDO_ANGULAR_UPLOAD_MJS_7 = goog.getMsg("File successfully uploaded.");
        i18n_7 = MSG__USERS_MACBOOKPRO_DOCUMENTS_WIN_GENOVITY_DEV_USERS_SCD_SCD_COM_WS_NODE_MODULES__PROGRESS_KENDO_ANGULAR_UPLOAD_FESM2022_PROGRESS_KENDO_ANGULAR_UPLOAD_MJS_7;
      } else {
        i18n_7 = $localize`:kendo.upload.fileStatusUploaded|The file status message after successful upload:File successfully uploaded.`;
      }
      let i18n_8;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG__USERS_MACBOOKPRO_DOCUMENTS_WIN_GENOVITY_DEV_USERS_SCD_SCD_COM_WS_NODE_MODULES__PROGRESS_KENDO_ANGULAR_UPLOAD_FESM2022_PROGRESS_KENDO_ANGULAR_UPLOAD_MJS_8 = goog.getMsg("Paused");
        i18n_8 = MSG__USERS_MACBOOKPRO_DOCUMENTS_WIN_GENOVITY_DEV_USERS_SCD_SCD_COM_WS_NODE_MODULES__PROGRESS_KENDO_ANGULAR_UPLOAD_FESM2022_PROGRESS_KENDO_ANGULAR_UPLOAD_MJS_8;
      } else {
        i18n_8 = $localize`:kendo.upload.headerStatusPaused|The header status message when the file upload is paused:Paused`;
      }
      let i18n_9;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG__USERS_MACBOOKPRO_DOCUMENTS_WIN_GENOVITY_DEV_USERS_SCD_SCD_COM_WS_NODE_MODULES__PROGRESS_KENDO_ANGULAR_UPLOAD_FESM2022_PROGRESS_KENDO_ANGULAR_UPLOAD_MJS_9 = goog.getMsg("Done");
        i18n_9 = MSG__USERS_MACBOOKPRO_DOCUMENTS_WIN_GENOVITY_DEV_USERS_SCD_SCD_COM_WS_NODE_MODULES__PROGRESS_KENDO_ANGULAR_UPLOAD_FESM2022_PROGRESS_KENDO_ANGULAR_UPLOAD_MJS_9;
      } else {
        i18n_9 = $localize`:kendo.upload.headerStatusUploaded|The header status message after file upload completion:Done`;
      }
      let i18n_10;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG__USERS_MACBOOKPRO_DOCUMENTS_WIN_GENOVITY_DEV_USERS_SCD_SCD_COM_WS_NODE_MODULES__PROGRESS_KENDO_ANGULAR_UPLOAD_FESM2022_PROGRESS_KENDO_ANGULAR_UPLOAD_MJS_10 = goog.getMsg("Uploading...");
        i18n_10 = MSG__USERS_MACBOOKPRO_DOCUMENTS_WIN_GENOVITY_DEV_USERS_SCD_SCD_COM_WS_NODE_MODULES__PROGRESS_KENDO_ANGULAR_UPLOAD_FESM2022_PROGRESS_KENDO_ANGULAR_UPLOAD_MJS_10;
      } else {
        i18n_10 = $localize`:kendo.upload.headerStatusUploading|The header status message during file upload:Uploading...`;
      }
      let i18n_11;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG__USERS_MACBOOKPRO_DOCUMENTS_WIN_GENOVITY_DEV_USERS_SCD_SCD_COM_WS_NODE_MODULES__PROGRESS_KENDO_ANGULAR_UPLOAD_FESM2022_PROGRESS_KENDO_ANGULAR_UPLOAD_MJS_11 = goog.getMsg("File type not allowed.");
        i18n_11 = MSG__USERS_MACBOOKPRO_DOCUMENTS_WIN_GENOVITY_DEV_USERS_SCD_SCD_COM_WS_NODE_MODULES__PROGRESS_KENDO_ANGULAR_UPLOAD_FESM2022_PROGRESS_KENDO_ANGULAR_UPLOAD_MJS_11;
      } else {
        i18n_11 = $localize`:kendo.upload.invalidFileExtension|The text for the invalid allowed extensions restriction message:File type not allowed.`;
      }
      let i18n_12;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG__USERS_MACBOOKPRO_DOCUMENTS_WIN_GENOVITY_DEV_USERS_SCD_SCD_COM_WS_NODE_MODULES__PROGRESS_KENDO_ANGULAR_UPLOAD_FESM2022_PROGRESS_KENDO_ANGULAR_UPLOAD_MJS_12 = goog.getMsg("File size too large.");
        i18n_12 = MSG__USERS_MACBOOKPRO_DOCUMENTS_WIN_GENOVITY_DEV_USERS_SCD_SCD_COM_WS_NODE_MODULES__PROGRESS_KENDO_ANGULAR_UPLOAD_FESM2022_PROGRESS_KENDO_ANGULAR_UPLOAD_MJS_12;
      } else {
        i18n_12 = $localize`:kendo.upload.invalidMaxFileSize|The text for the invalid max file size restriction message:File size too large.`;
      }
      let i18n_13;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG__USERS_MACBOOKPRO_DOCUMENTS_WIN_GENOVITY_DEV_USERS_SCD_SCD_COM_WS_NODE_MODULES__PROGRESS_KENDO_ANGULAR_UPLOAD_FESM2022_PROGRESS_KENDO_ANGULAR_UPLOAD_MJS_13 = goog.getMsg("File size too small.");
        i18n_13 = MSG__USERS_MACBOOKPRO_DOCUMENTS_WIN_GENOVITY_DEV_USERS_SCD_SCD_COM_WS_NODE_MODULES__PROGRESS_KENDO_ANGULAR_UPLOAD_FESM2022_PROGRESS_KENDO_ANGULAR_UPLOAD_MJS_13;
      } else {
        i18n_13 = $localize`:kendo.upload.invalidMinFileSize|The text for the invalid min file size restriction message:File size too small.`;
      }
      let i18n_14;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG__USERS_MACBOOKPRO_DOCUMENTS_WIN_GENOVITY_DEV_USERS_SCD_SCD_COM_WS_NODE_MODULES__PROGRESS_KENDO_ANGULAR_UPLOAD_FESM2022_PROGRESS_KENDO_ANGULAR_UPLOAD_MJS_14 = goog.getMsg("Pause");
        i18n_14 = MSG__USERS_MACBOOKPRO_DOCUMENTS_WIN_GENOVITY_DEV_USERS_SCD_SCD_COM_WS_NODE_MODULES__PROGRESS_KENDO_ANGULAR_UPLOAD_FESM2022_PROGRESS_KENDO_ANGULAR_UPLOAD_MJS_14;
      } else {
        i18n_14 = $localize`:kendo.upload.pause|The text for the Pause button:Pause`;
      }
      let i18n_15;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG__USERS_MACBOOKPRO_DOCUMENTS_WIN_GENOVITY_DEV_USERS_SCD_SCD_COM_WS_NODE_MODULES__PROGRESS_KENDO_ANGULAR_UPLOAD_FESM2022_PROGRESS_KENDO_ANGULAR_UPLOAD_MJS_15 = goog.getMsg("Remove");
        i18n_15 = MSG__USERS_MACBOOKPRO_DOCUMENTS_WIN_GENOVITY_DEV_USERS_SCD_SCD_COM_WS_NODE_MODULES__PROGRESS_KENDO_ANGULAR_UPLOAD_FESM2022_PROGRESS_KENDO_ANGULAR_UPLOAD_MJS_15;
      } else {
        i18n_15 = $localize`:kendo.upload.remove|The text for the Remove button:Remove`;
      }
      let i18n_16;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG__USERS_MACBOOKPRO_DOCUMENTS_WIN_GENOVITY_DEV_USERS_SCD_SCD_COM_WS_NODE_MODULES__PROGRESS_KENDO_ANGULAR_UPLOAD_FESM2022_PROGRESS_KENDO_ANGULAR_UPLOAD_MJS_16 = goog.getMsg("Resume");
        i18n_16 = MSG__USERS_MACBOOKPRO_DOCUMENTS_WIN_GENOVITY_DEV_USERS_SCD_SCD_COM_WS_NODE_MODULES__PROGRESS_KENDO_ANGULAR_UPLOAD_FESM2022_PROGRESS_KENDO_ANGULAR_UPLOAD_MJS_16;
      } else {
        i18n_16 = $localize`:kendo.upload.resume|The text for the Resume button:Resume`;
      }
      let i18n_17;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG__USERS_MACBOOKPRO_DOCUMENTS_WIN_GENOVITY_DEV_USERS_SCD_SCD_COM_WS_NODE_MODULES__PROGRESS_KENDO_ANGULAR_UPLOAD_FESM2022_PROGRESS_KENDO_ANGULAR_UPLOAD_MJS_17 = goog.getMsg("Retry");
        i18n_17 = MSG__USERS_MACBOOKPRO_DOCUMENTS_WIN_GENOVITY_DEV_USERS_SCD_SCD_COM_WS_NODE_MODULES__PROGRESS_KENDO_ANGULAR_UPLOAD_FESM2022_PROGRESS_KENDO_ANGULAR_UPLOAD_MJS_17;
      } else {
        i18n_17 = $localize`:kendo.upload.retry|The text for the Retry button:Retry`;
      }
      let i18n_18;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG__USERS_MACBOOKPRO_DOCUMENTS_WIN_GENOVITY_DEV_USERS_SCD_SCD_COM_WS_NODE_MODULES__PROGRESS_KENDO_ANGULAR_UPLOAD_FESM2022_PROGRESS_KENDO_ANGULAR_UPLOAD_MJS_18 = goog.getMsg("Select files...");
        i18n_18 = MSG__USERS_MACBOOKPRO_DOCUMENTS_WIN_GENOVITY_DEV_USERS_SCD_SCD_COM_WS_NODE_MODULES__PROGRESS_KENDO_ANGULAR_UPLOAD_FESM2022_PROGRESS_KENDO_ANGULAR_UPLOAD_MJS_18;
      } else {
        i18n_18 = $localize`:kendo.upload.select|The text for the Select button:Select files...`;
      }
      let i18n_19;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG__USERS_MACBOOKPRO_DOCUMENTS_WIN_GENOVITY_DEV_USERS_SCD_SCD_COM_WS_NODE_MODULES__PROGRESS_KENDO_ANGULAR_UPLOAD_FESM2022_PROGRESS_KENDO_ANGULAR_UPLOAD_MJS_19 = goog.getMsg("Upload");
        i18n_19 = MSG__USERS_MACBOOKPRO_DOCUMENTS_WIN_GENOVITY_DEV_USERS_SCD_SCD_COM_WS_NODE_MODULES__PROGRESS_KENDO_ANGULAR_UPLOAD_FESM2022_PROGRESS_KENDO_ANGULAR_UPLOAD_MJS_19;
      } else {
        i18n_19 = $localize`:kendo.upload.uploadSelectedFiles|The text for the Upload files button:Upload`;
      }
      return [["fileSelectButton", ""], ["fileSelectInput", ""], ["kendoUploadLocalizedMessages", "", "cancel", i18n_0, "clearSelectedFiles", i18n_1, "dropFilesHere", i18n_2, "filesBatchStatus", i18n_3, "filesBatchStatusFailed", i18n_4, "filesBatchStatusUploaded", i18n_5, "fileStatusFailed", i18n_6, "fileStatusUploaded", i18n_7, "headerStatusPaused", i18n_8, "headerStatusUploaded", i18n_9, "headerStatusUploading", i18n_10, "invalidFileExtension", i18n_11, "invalidMaxFileSize", i18n_12, "invalidMinFileSize", i18n_13, "pause", i18n_14, "remove", i18n_15, "resume", i18n_16, "retry", i18n_17, "select", i18n_18, "uploadSelectedFiles", i18n_19], ["kendoUploadInternalDropZone", "", 3, "restrictions", "multiple", "disabled"], [1, "k-upload-button-wrap"], ["kendoButton", "", "type", "button", 1, "k-upload-button", 3, "click", "focus", "id"], ["kendoFileSelect", "", 3, "dir", "accept", "restrictions", "multiple", "disabled", "required"], [1, "k-upload-status", 3, "fileList"], [1, "k-dropzone-hint"], ["kendo-upload-file-list", "", 1, "k-upload-files", "k-reset", 3, "disabled", "fileList", "fileTemplate", "fileInfoTemplate", "id"], [3, "disabled", "actionsLayout"]];
    },
    template: function UploadComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = ɵɵgetCurrentView();
        ɵɵelementContainer(0, 2);
        ɵɵelementStart(1, "div", 3)(2, "div", 4)(3, "button", 5, 0);
        ɵɵlistener("click", function UploadComponent_Template_button_click_3_listener() {
          ɵɵrestoreView(_r1);
          const fileSelectInput_r2 = ɵɵreference(7);
          return ɵɵresetView(fileSelectInput_r2.click());
        })("focus", function UploadComponent_Template_button_focus_3_listener() {
          ɵɵrestoreView(_r1);
          return ɵɵresetView(ctx.onFileSelectButtonFocus());
        });
        ɵɵtext(5);
        ɵɵelementEnd();
        ɵɵelement(6, "input", 6, 1);
        ɵɵelementEnd();
        ɵɵtemplate(8, UploadComponent_Conditional_8_Template, 1, 1, "kendo-upload-status-total", 7);
        ɵɵelementStart(9, "div", 8);
        ɵɵtext(10);
        ɵɵelementEnd()();
        ɵɵtemplate(11, UploadComponent_Conditional_11_Template, 1, 5, "ul", 9)(12, UploadComponent_Conditional_12_Template, 1, 2, "kendo-upload-action-buttons", 10);
      }
      if (rf & 2) {
        ɵɵadvance();
        ɵɵproperty("restrictions", ctx.restrictions)("multiple", ctx.multiple)("disabled", ctx.disabled);
        ɵɵadvance(2);
        ɵɵproperty("id", ctx.focusableId);
        ɵɵattribute("aria-label", ctx.textFor("select"))("tabindex", ctx.tabindex)("aria-expanded", ctx.hasFileList)("aria-controls", ctx.hasFileList ? ctx.fileListId : void 0);
        ɵɵadvance(2);
        ɵɵtextInterpolate1(" ", ctx.textFor("select"), " ");
        ɵɵadvance();
        ɵɵproperty("dir", ctx.direction)("accept", ctx.accept)("restrictions", ctx.restrictions)("multiple", ctx.multiple)("disabled", ctx.disabled)("required", ctx.isControlRequired);
        ɵɵadvance(2);
        ɵɵconditional(ctx.showTotalStatus ? 8 : -1);
        ɵɵadvance(2);
        ɵɵtextInterpolate(ctx.textFor("dropFilesHere"));
        ɵɵadvance();
        ɵɵconditional(ctx.hasFileList ? 11 : -1);
        ɵɵadvance();
        ɵɵconditional(ctx.showActionButtons ? 12 : -1);
      }
    },
    dependencies: [LocalizedMessagesDirective, DropZoneInternalDirective, ButtonComponent, FileSelectDirective, UploadStatusTotalComponent, FileListComponent, UploadActionButtonsComponent],
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UploadComponent, [{
    type: Component,
    args: [{
      exportAs: "kendoUpload",
      providers: [LocalizationService, NavigationService, UploadService, DropZoneService, UPLOAD_VALUE_ACCESSOR, {
        provide: L10N_PREFIX,
        useValue: "kendo.upload"
      }, {
        provide: KendoInput,
        useExisting: forwardRef(() => UploadComponent)
      }],
      selector: "kendo-upload",
      template: `
    <ng-container kendoUploadLocalizedMessages
      i18n-cancel="kendo.upload.cancel|The text for the Cancel button"
      cancel="Cancel"
    
      i18n-clearSelectedFiles="kendo.upload.clearSelectedFiles|The text for the Clear button"
      clearSelectedFiles="Clear"
    
      i18n-dropFilesHere="kendo.upload.dropFilesHere|The drop zone hint"
      dropFilesHere="Drop files here to upload"
    
      i18n-filesBatchStatus="kendo.upload.filesBatchStatus|The status message for a batch of files"
      filesBatchStatus="files"
    
      i18n-filesBatchStatusFailed="kendo.upload.filesBatchStatusFailed|The status message for a batch of files after failed upload"
      filesBatchStatusFailed="files failed to upload."
    
      i18n-filesBatchStatusUploaded="kendo.upload.filesBatchStatusUploaded|The status message for a batch of files after successful upload"
      filesBatchStatusUploaded="files successfully uploaded."
    
      i18n-fileStatusFailed="kendo.upload.fileStatusFailed|The file status message after failed upload"
      fileStatusFailed="File failed to upload."
    
      i18n-fileStatusUploaded="kendo.upload.fileStatusUploaded|The file status message after successful upload"
      fileStatusUploaded="File successfully uploaded."
    
      i18n-headerStatusPaused="kendo.upload.headerStatusPaused|The header status message when the file upload is paused"
      headerStatusPaused="Paused"
    
      i18n-headerStatusUploaded="kendo.upload.headerStatusUploaded|The header status message after file upload completion"
      headerStatusUploaded="Done"
    
      i18n-headerStatusUploading="kendo.upload.headerStatusUploading|The header status message during file upload"
      headerStatusUploading="Uploading..."
    
      i18n-invalidFileExtension="kendo.upload.invalidFileExtension|The text for the invalid allowed extensions restriction message"
      invalidFileExtension="File type not allowed."
    
      i18n-invalidMaxFileSize="kendo.upload.invalidMaxFileSize|The text for the invalid max file size restriction message"
      invalidMaxFileSize="File size too large."
    
      i18n-invalidMinFileSize="kendo.upload.invalidMinFileSize|The text for the invalid min file size restriction message"
      invalidMinFileSize="File size too small."
    
      i18n-pause="kendo.upload.pause|The text for the Pause button"
      pause="Pause"
    
      i18n-remove="kendo.upload.remove|The text for the Remove button"
      remove="Remove"
    
      i18n-resume="kendo.upload.resume|The text for the Resume button"
      resume="Resume"
    
      i18n-retry="kendo.upload.retry|The text for the Retry button"
      retry="Retry"
    
      i18n-select="kendo.upload.select|The text for the Select button"
      select="Select files..."
    
      i18n-uploadSelectedFiles="kendo.upload.uploadSelectedFiles|The text for the Upload files button"
      uploadSelectedFiles="Upload"
      >
    </ng-container>
    <div kendoUploadInternalDropZone
      [restrictions]="restrictions"
      [multiple]="multiple"
      [disabled]="disabled"
      >
      <div class="k-upload-button-wrap">
        <button
          kendoButton
          #fileSelectButton
          class="k-upload-button"
          type="button"
          (click)="fileSelectInput.click()"
          (focus)="onFileSelectButtonFocus()"
          [id]="focusableId"
          [attr.aria-label]="textFor('select')"
          [attr.tabindex]="tabindex"
          [attr.aria-expanded]="hasFileList"
          [attr.aria-controls]="hasFileList ? fileListId : undefined"
          >
          {{textFor('select')}}
        </button>
        <input kendoFileSelect #fileSelectInput
          [dir]="direction"
          [accept]="accept"
          [restrictions]="restrictions"
          [multiple]="multiple"
          [disabled]="disabled"
          [required]="isControlRequired" />
      </div>
      @if (showTotalStatus) {
        <kendo-upload-status-total
          class="k-upload-status"
          [fileList]="fileList">
        </kendo-upload-status-total>
      }
      <div class="k-dropzone-hint">{{textFor('dropFilesHere')}}</div>
    </div>
    @if (hasFileList) {
      <ul kendo-upload-file-list
        class="k-upload-files k-reset"
        [disabled]="disabled"
        [fileList]="fileList.files"
        [fileTemplate]="fileTemplate"
        [fileInfoTemplate]="fileInfoTemplate"
        [id]="fileListId">
      </ul>
    }
    @if (showActionButtons) {
      <kendo-upload-action-buttons
        [disabled]="disabled"
        [actionsLayout]="actionsLayout">
      </kendo-upload-action-buttons>
    }
    `,
      standalone: true,
      imports: [LocalizedMessagesDirective, DropZoneInternalDirective, ButtonComponent, FileSelectDirective, UploadStatusTotalComponent, FileListComponent, UploadActionButtonsComponent]
    }]
  }], () => [{
    type: UploadService
  }, {
    type: LocalizationService
  }, {
    type: NavigationService
  }, {
    type: DropZoneService
  }, {
    type: NgZone
  }, {
    type: Renderer2
  }, {
    type: ChangeDetectorRef
  }, {
    type: ElementRef
  }, {
    type: Injector
  }], {
    autoUpload: [{
      type: Input
    }],
    batch: [{
      type: Input
    }],
    withCredentials: [{
      type: Input
    }],
    saveField: [{
      type: Input
    }],
    saveHeaders: [{
      type: Input
    }],
    saveMethod: [{
      type: Input
    }],
    saveUrl: [{
      type: Input
    }],
    responseType: [{
      type: Input
    }],
    removeField: [{
      type: Input
    }],
    removeHeaders: [{
      type: Input
    }],
    removeMethod: [{
      type: Input
    }],
    removeUrl: [{
      type: Input
    }],
    chunkable: [{
      type: Input
    }],
    concurrent: [{
      type: Input
    }],
    showFileList: [{
      type: Input
    }],
    tabIndex: [{
      type: Input,
      args: ["tabIndex"]
    }],
    actionsLayout: [{
      type: Input
    }],
    fileSelectInput: [{
      type: ViewChild,
      args: ["fileSelectInput", {
        static: true
      }]
    }],
    cancel: [{
      type: Output
    }],
    clear: [{
      type: Output
    }],
    complete: [{
      type: Output
    }],
    error: [{
      type: Output
    }],
    pause: [{
      type: Output
    }],
    resume: [{
      type: Output
    }],
    success: [{
      type: Output
    }],
    upload: [{
      type: Output
    }],
    uploadProgress: [{
      type: Output
    }],
    valueChange: [{
      type: Output
    }],
    dir: [{
      type: HostBinding,
      args: ["attr.dir"]
    }]
  });
})();
var UploadDropZoneDirective = class _UploadDropZoneDirective {
  dropZoneService;
  /**
   * The id of the drop zone to associate with an existing Upload component.
   */
  zoneId;
  /**
   * The id of the drop zone to associate with an existing FileSelect component.
   */
  fileSelectZoneId;
  constructor(dropZoneService) {
    this.dropZoneService = dropZoneService;
  }
  /**
   * @hidden
   */
  onElementDragEnter() {
    return false;
  }
  /**
   * @hidden
   */
  onElementDragOver() {
    return false;
  }
  /**
   * @hidden
   */
  onDropListener(event) {
    const components2 = this.componentInstance;
    if (!isPresent(components2)) {
      return;
    }
    components2.forEach((component) => {
      const droppedFiles = event.dataTransfer.files;
      if (droppedFiles.length > 0 && !component.disabled) {
        let files = getAllFileInfo(droppedFiles);
        if (component instanceof UploadComponent) {
          files = assignGuidToFiles(files, !component.batch);
        } else {
          files = assignGuidToFiles(files, true);
        }
        if (!component.multiple) {
          files.splice(1, files.length - 1);
          component.clearFiles();
        }
        validateFiles(files, component.restrictions);
        component.addFiles(files);
      }
    });
    return false;
  }
  /**
   * @hidden
   */
  get componentInstance() {
    const id = this.zoneId || this.fileSelectZoneId;
    return this.dropZoneService.getComponents(id);
  }
  static ɵfac = function UploadDropZoneDirective_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _UploadDropZoneDirective)(ɵɵdirectiveInject(DropZoneService));
  };
  static ɵdir = ɵɵdefineDirective({
    type: _UploadDropZoneDirective,
    selectors: [["", "kendoUploadDropZone", ""], ["", "kendoFileSelectDropZone", ""]],
    hostBindings: function UploadDropZoneDirective_HostBindings(rf, ctx) {
      if (rf & 1) {
        ɵɵlistener("dragenter", function UploadDropZoneDirective_dragenter_HostBindingHandler() {
          return ctx.onElementDragEnter();
        })("dragover", function UploadDropZoneDirective_dragover_HostBindingHandler() {
          return ctx.onElementDragOver();
        })("drop", function UploadDropZoneDirective_drop_HostBindingHandler($event) {
          return ctx.onDropListener($event);
        });
      }
    },
    inputs: {
      zoneId: [0, "kendoUploadDropZone", "zoneId"],
      fileSelectZoneId: [0, "kendoFileSelectDropZone", "fileSelectZoneId"]
    },
    standalone: true,
    features: [ɵɵProvidersFeature([DropZoneService])]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UploadDropZoneDirective, [{
    type: Directive,
    args: [{
      providers: [DropZoneService],
      selector: "[kendoUploadDropZone], [kendoFileSelectDropZone]",
      standalone: true
    }]
  }], () => [{
    type: DropZoneService
  }], {
    zoneId: [{
      type: Input,
      args: ["kendoUploadDropZone"]
    }],
    fileSelectZoneId: [{
      type: Input,
      args: ["kendoFileSelectDropZone"]
    }],
    onElementDragEnter: [{
      type: HostListener,
      args: ["dragenter"]
    }],
    onElementDragOver: [{
      type: HostListener,
      args: ["dragover"]
    }],
    onDropListener: [{
      type: HostListener,
      args: ["drop", ["$event"]]
    }]
  });
})();
var UploadDropZoneComponent = class _UploadDropZoneComponent extends DropZoneBase {
  localization;
  hostClass = true;
  get dirAttribute() {
    return this.direction;
  }
  /**
   * Specifies the id of the component.
   * Use this id to associate the DropZone with an existing Upload or FileSelect component.
   */
  zoneId;
  /**
   * Specifies the name for an existing icon in a Kendo UI theme.
   * The icon renders inside the DropZone.
   */
  icon;
  /**
   * Specifies a CSS class or multiple classes separated by spaces which apply to a span element.
   * Use this property to apply custom icons.
   */
  iconClass;
  /**
   * Specifies an SVGIcon to render inside the DropZone.
   * The input accepts either an [existing Kendo SVG icon](slug:svgicon_list) or a custom one.
   */
  set svgIcon(icon) {
    if (isDevMode() && icon && this.icon && this.iconClass) {
      throw new Error("Setting both icon/svgIcon and iconClass options at the same time is not supported.");
    }
    this._svgIcon = icon;
  }
  get svgIcon() {
    return this._svgIcon;
  }
  direction;
  localizationChangeSubscription;
  _svgIcon = uploadIcon;
  constructor(element, renderer, localization) {
    super(element, renderer, "k-external-dropzone-hover");
    this.localization = localization;
    this.localizationChangeSubscription = this.localization.changes.subscribe(({
      rtl
    }) => {
      this.direction = rtl ? "rtl" : "ltr";
    });
  }
  /**
   * @hidden
   */
  textFor(key) {
    return this.localization.get(key);
  }
  /**
   * @hidden
   */
  get iconClasses() {
    if (this.icon) {
      return `${this.icon}`;
    }
    if (!this.icon && !this.iconClass) {
      return "upload";
    }
  }
  ngOnDestroy() {
    if (this.localizationChangeSubscription) {
      this.localizationChangeSubscription.unsubscribe();
    }
  }
  static ɵfac = function UploadDropZoneComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _UploadDropZoneComponent)(ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(Renderer2), ɵɵdirectiveInject(LocalizationService));
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _UploadDropZoneComponent,
    selectors: [["kendo-uploaddropzone"]],
    hostVars: 3,
    hostBindings: function UploadDropZoneComponent_HostBindings(rf, ctx) {
      if (rf & 2) {
        ɵɵattribute("dir", ctx.dirAttribute);
        ɵɵclassProp("k-external-dropzone", ctx.hostClass);
      }
    },
    inputs: {
      zoneId: "zoneId",
      icon: "icon",
      iconClass: "iconClass",
      svgIcon: "svgIcon"
    },
    exportAs: ["kendoUploadDropZone"],
    standalone: true,
    features: [ɵɵProvidersFeature([LocalizationService, {
      provide: L10N_PREFIX,
      useValue: "kendo.uploaddropzone"
    }]), ɵɵInheritDefinitionFeature, ɵɵStandaloneFeature],
    ngContentSelectors: _c10,
    decls: 7,
    vars: 5,
    consts: () => {
      let i18n_20;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG__USERS_MACBOOKPRO_DOCUMENTS_WIN_GENOVITY_DEV_USERS_SCD_SCD_COM_WS_NODE_MODULES__PROGRESS_KENDO_ANGULAR_UPLOAD_FESM2022_PROGRESS_KENDO_ANGULAR_UPLOAD_MJS_20 = goog.getMsg("Drag and drop files here to upload");
        i18n_20 = MSG__USERS_MACBOOKPRO_DOCUMENTS_WIN_GENOVITY_DEV_USERS_SCD_SCD_COM_WS_NODE_MODULES__PROGRESS_KENDO_ANGULAR_UPLOAD_FESM2022_PROGRESS_KENDO_ANGULAR_UPLOAD_MJS_20;
      } else {
        i18n_20 = $localize`:kendo.uploaddropzone.externalDropFilesHere|Sets the external drop-zone hint:Drag and drop files here to upload`;
      }
      return [["kendoUploadDropZoneLocalizedMessages", "", "externalDropFilesHere", i18n_20], [1, "k-dropzone-inner", 3, "kendoUploadDropZone"], ["size", "xxxlarge", "innerCssClass", "k-dropzone-icon", 3, "name", "customFontClass", "svgIcon"], [1, "k-dropzone-hint"], [1, "k-dropzone-note"]];
    },
    template: function UploadDropZoneComponent_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵprojectionDef();
        ɵɵelementContainer(0, 0);
        ɵɵelementStart(1, "div", 1);
        ɵɵelement(2, "kendo-icon-wrapper", 2);
        ɵɵelementStart(3, "span", 3);
        ɵɵtext(4);
        ɵɵelementEnd();
        ɵɵelementStart(5, "span", 4);
        ɵɵprojection(6);
        ɵɵelementEnd()();
      }
      if (rf & 2) {
        ɵɵadvance();
        ɵɵproperty("kendoUploadDropZone", ctx.zoneId);
        ɵɵadvance();
        ɵɵproperty("name", ctx.iconClasses)("customFontClass", ctx.iconClass)("svgIcon", ctx.svgIcon);
        ɵɵadvance(2);
        ɵɵtextInterpolate(ctx.textFor("externalDropFilesHere"));
      }
    },
    dependencies: [LocalizedMessagesDirective, UploadDropZoneDirective, IconWrapperComponent],
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UploadDropZoneComponent, [{
    type: Component,
    args: [{
      exportAs: "kendoUploadDropZone",
      providers: [LocalizationService, {
        provide: L10N_PREFIX,
        useValue: "kendo.uploaddropzone"
      }],
      selector: "kendo-uploaddropzone",
      template: `
        <ng-container kendoUploadDropZoneLocalizedMessages
            i18n-externalDropFilesHere='kendo.uploaddropzone.externalDropFilesHere|Sets the external drop-zone hint'
            externalDropFilesHere='Drag and drop files here to upload'>
        </ng-container>
        <div class='k-dropzone-inner' [kendoUploadDropZone]="zoneId">
            <kendo-icon-wrapper
                size="xxxlarge"
                innerCssClass="k-dropzone-icon"
                [name]="iconClasses"
                [customFontClass]="iconClass"
                [svgIcon]="svgIcon"
            ></kendo-icon-wrapper>
            <span class="k-dropzone-hint">{{ textFor('externalDropFilesHere') }}</span>
            <span class="k-dropzone-note">
                <ng-content></ng-content>
            </span>
        </div>
    `,
      standalone: true,
      imports: [LocalizedMessagesDirective, UploadDropZoneDirective, IconWrapperComponent]
    }]
  }], () => [{
    type: ElementRef
  }, {
    type: Renderer2
  }, {
    type: LocalizationService
  }], {
    hostClass: [{
      type: HostBinding,
      args: ["class.k-external-dropzone"]
    }],
    dirAttribute: [{
      type: HostBinding,
      args: ["attr.dir"]
    }],
    zoneId: [{
      type: Input
    }],
    icon: [{
      type: Input
    }],
    iconClass: [{
      type: Input
    }],
    svgIcon: [{
      type: Input
    }]
  });
})();
var FILESELECT_VALUE_ACCESSOR = {
  multi: true,
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => FileSelectComponent)
};
var idx = 0;
var FileSelectComponent = class _FileSelectComponent extends UploadFileSelectBase {
  uploadService;
  localization;
  navigation;
  dropZoneService;
  ngZone;
  renderer;
  cdr;
  injector;
  fileSelectInput;
  get dir() {
    return this.direction;
  }
  /**
   * Specifies the `name` attribute of the `input` element of the FileSelect.
   */
  set name(name) {
    this.uploadService.async.saveField = name;
  }
  get name() {
    return this.uploadService.async.saveField;
  }
  /**
   * Fires when the component value changes after a successful `select` or `remove` operation.
   */
  valueChange = new EventEmitter();
  /**
   * @hidden
   */
  _restrictions = {
    allowedExtensions: [],
    maxFileSize: 0,
    minFileSize: 0
  };
  direction;
  wrapper;
  fileListId;
  documentClick;
  blurSubscription;
  wrapperFocusSubscription;
  selectButtonFocusSubscription;
  localizationChangeSubscription;
  subs;
  constructor(uploadService, localization, navigation, dropZoneService, ngZone, renderer, cdr, wrapper, injector) {
    super(uploadService, navigation, cdr, injector, ngZone);
    this.uploadService = uploadService;
    this.localization = localization;
    this.navigation = navigation;
    this.dropZoneService = dropZoneService;
    this.ngZone = ngZone;
    this.renderer = renderer;
    this.cdr = cdr;
    this.injector = injector;
    A(packageMetadata);
    this.wrapper = wrapper.nativeElement;
    this.direction = localization.rtl ? "rtl" : "ltr";
    this.navigation.computeKeys();
    this.localizationChangeSubscription = localization.changes.subscribe(({
      rtl
    }) => {
      this.direction = rtl ? "rtl" : "ltr";
    });
    this.subscribeBlur();
    this.subscribeFocus();
    this.attachEventHandlers();
    this.setDefaultSettings();
  }
  ngOnInit() {
    const {
      buttonId,
      fileListId
    } = this.getIds();
    this.focusableId = buttonId;
    this.fileListId = fileListId;
    if (this.zoneId) {
      this.dropZoneService.addComponent(this, this.zoneId);
    }
    this.subs.add(this.renderer.listen(this.fileSelectInput.nativeElement, "mouseenter", () => {
      this.renderer.addClass(this.fileSelectButton.nativeElement, "k-hover");
    }));
    this.subs.add(this.renderer.listen(this.fileSelectInput.nativeElement, "mouseleave", () => {
      this.renderer.removeClass(this.fileSelectButton.nativeElement, "k-hover");
    }));
    this.ngZone.runOutsideAngular(() => {
      this.subs.add(this.renderer.listen(this.wrapper, "keydown", (event) => this.handleKeydown(event)));
    });
  }
  /**
   * @hidden
   */
  textFor(key) {
    return this.localization.get(key);
  }
  ngOnDestroy() {
    this.fileList.clear();
    if (this.blurSubscription) {
      this.blurSubscription.unsubscribe();
    }
    if (this.wrapperFocusSubscription) {
      this.wrapperFocusSubscription.unsubscribe();
    }
    if (this.selectButtonFocusSubscription) {
      this.selectButtonFocusSubscription.unsubscribe();
    }
    if (this.localizationChangeSubscription) {
      this.localizationChangeSubscription.unsubscribe();
    }
    if (this.subs) {
      this.subs.unsubscribe();
    }
  }
  /**
   * Removes a specific file from the file list.
   *
   * @param uid The `uid` of the file to be removed.
   */
  removeFileByUid(uid) {
    this.uploadService.removeFiles(uid);
  }
  /**
   * Clears all files from the UI.
   */
  clearFiles() {
    this.uploadService.clearFiles();
  }
  /**
   * @hidden
   * Used to determine if the component is empty.
   */
  isEmpty() {
    return false;
  }
  /**
   * @hidden
   * Used by the external dropzone to add files to the FileSelect
   */
  addFiles(files) {
    this.uploadService.addFiles(files);
  }
  /**
   * @hidden
   */
  get selectButtonTabIndex() {
    return this.disabled ? void 0 : this.tabindex;
  }
  /**
   * @hidden
   */
  getIds() {
    const id = ++idx;
    const buttonId = `k-fileselect-button-${id}`;
    const fileListId = `k-fileselect-file-list-${id}`;
    return {
      buttonId,
      fileListId
    };
  }
  /**
   * @hidden
   */
  writeValue(newValue) {
    super.writeValue(newValue, validateInitialFileSelectFile, "addInitialFileSelectFiles");
  }
  subscribeBlur() {
    if (!isDocumentAvailable()) {
      return;
    }
    this.ngZone.runOutsideAngular(() => {
      this.documentClick = fromEvent(document, "click").pipe(filter((event) => {
        return !(this.wrapper !== event.target && this.wrapper.contains(event.target));
      }));
      this.blurSubscription = merge(this.documentClick, this.navigation.onTabOut).subscribe(() => {
        if (this.navigation.focused) {
          this.ngZone.run(() => {
            this.navigation.focused = false;
            this.onTouchedCallback();
            this.onBlur.emit();
          });
        }
      });
    });
  }
  subscribeFocus() {
    this.wrapperFocusSubscription = this.navigation.onWrapperFocus.subscribe(() => {
      this.onFocus.emit();
    });
    this.selectButtonFocusSubscription = this.navigation.onSelectButtonFocus.subscribe(() => {
      this.fileSelectButton.nativeElement.focus();
    });
  }
  handleKeydown(event) {
    if (this.disabled) {
      return;
    }
    if (event.target === this.fileSelectButton.nativeElement && (event.code === Keys.Enter || event.code === Keys.NumpadEnter || event.code === Keys.Space)) {
      event.preventDefault();
      this.fileSelectInput.nativeElement.click();
      return;
    }
    if (hasClasses(event.target, UPLOAD_CLASSES) || !isFocusable(event.target) && !hasClasses(event.target, IGNORE_TARGET_CLASSES)) {
      this.navigation.process(event, "fileselect");
    }
  }
  attachEventHandlers() {
    this.subs = this.uploadService.changeEvent.subscribe((files) => {
      let model = [];
      if (files !== null) {
        files.forEach((file) => {
          if (file.state === FileState.Initial) {
            model.push(file);
          }
          if (file.state === FileState.Selected && file.rawFile && !file.validationErrors) {
            model.push(file.rawFile);
          }
        });
      }
      if (model.length === 0) {
        model = null;
      }
      this.onChangeCallback(model);
      this.valueChange.emit(model);
    });
    this.subs.add(this.uploadService.removeEvent.subscribe((args) => {
      this.remove.emit(args);
    }));
    this.subs.add(this.uploadService.selectEvent.subscribe((args) => {
      this.select.emit(args);
    }));
  }
  setDefaultSettings() {
    this.uploadService.async.autoUpload = false;
    this.uploadService.component = "FileSelect";
  }
  static ɵfac = function FileSelectComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _FileSelectComponent)(ɵɵdirectiveInject(UploadService), ɵɵdirectiveInject(LocalizationService), ɵɵdirectiveInject(NavigationService), ɵɵdirectiveInject(DropZoneService), ɵɵdirectiveInject(NgZone), ɵɵdirectiveInject(Renderer2), ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(Injector));
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _FileSelectComponent,
    selectors: [["kendo-fileselect"]],
    viewQuery: function FileSelectComponent_Query(rf, ctx) {
      if (rf & 1) {
        ɵɵviewQuery(_c9, 7);
      }
      if (rf & 2) {
        let _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.fileSelectInput = _t.first);
      }
    },
    hostVars: 1,
    hostBindings: function FileSelectComponent_HostBindings(rf, ctx) {
      if (rf & 2) {
        ɵɵattribute("dir", ctx.dir);
      }
    },
    inputs: {
      name: "name"
    },
    outputs: {
      valueChange: "valueChange"
    },
    exportAs: ["kendoFileSelect"],
    standalone: true,
    features: [ɵɵProvidersFeature([LocalizationService, NavigationService, UploadService, DropZoneService, FILESELECT_VALUE_ACCESSOR, {
      provide: L10N_PREFIX,
      useValue: "kendo.fileselect"
    }, {
      provide: KendoInput,
      useExisting: forwardRef(() => _FileSelectComponent)
    }]), ɵɵInheritDefinitionFeature, ɵɵStandaloneFeature],
    decls: 11,
    vars: 17,
    consts: () => {
      let i18n_21;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG__USERS_MACBOOKPRO_DOCUMENTS_WIN_GENOVITY_DEV_USERS_SCD_SCD_COM_WS_NODE_MODULES__PROGRESS_KENDO_ANGULAR_UPLOAD_FESM2022_PROGRESS_KENDO_ANGULAR_UPLOAD_MJS_21 = goog.getMsg("Drop files here to select");
        i18n_21 = MSG__USERS_MACBOOKPRO_DOCUMENTS_WIN_GENOVITY_DEV_USERS_SCD_SCD_COM_WS_NODE_MODULES__PROGRESS_KENDO_ANGULAR_UPLOAD_FESM2022_PROGRESS_KENDO_ANGULAR_UPLOAD_MJS_21;
      } else {
        i18n_21 = $localize`:kendo.fileselect.dropFilesHere|The drop zone hint:Drop files here to select`;
      }
      let i18n_22;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG__USERS_MACBOOKPRO_DOCUMENTS_WIN_GENOVITY_DEV_USERS_SCD_SCD_COM_WS_NODE_MODULES__PROGRESS_KENDO_ANGULAR_UPLOAD_FESM2022_PROGRESS_KENDO_ANGULAR_UPLOAD_MJS_22 = goog.getMsg("File type not allowed.");
        i18n_22 = MSG__USERS_MACBOOKPRO_DOCUMENTS_WIN_GENOVITY_DEV_USERS_SCD_SCD_COM_WS_NODE_MODULES__PROGRESS_KENDO_ANGULAR_UPLOAD_FESM2022_PROGRESS_KENDO_ANGULAR_UPLOAD_MJS_22;
      } else {
        i18n_22 = $localize`:kendo.fileselect.invalidFileExtension|The text for the invalid allowed extensions restriction message:File type not allowed.`;
      }
      let i18n_23;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG__USERS_MACBOOKPRO_DOCUMENTS_WIN_GENOVITY_DEV_USERS_SCD_SCD_COM_WS_NODE_MODULES__PROGRESS_KENDO_ANGULAR_UPLOAD_FESM2022_PROGRESS_KENDO_ANGULAR_UPLOAD_MJS_23 = goog.getMsg("File size too large.");
        i18n_23 = MSG__USERS_MACBOOKPRO_DOCUMENTS_WIN_GENOVITY_DEV_USERS_SCD_SCD_COM_WS_NODE_MODULES__PROGRESS_KENDO_ANGULAR_UPLOAD_FESM2022_PROGRESS_KENDO_ANGULAR_UPLOAD_MJS_23;
      } else {
        i18n_23 = $localize`:kendo.fileselect.invalidMaxFileSize|The text for the invalid max file size restriction message:File size too large.`;
      }
      let i18n_24;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG__USERS_MACBOOKPRO_DOCUMENTS_WIN_GENOVITY_DEV_USERS_SCD_SCD_COM_WS_NODE_MODULES__PROGRESS_KENDO_ANGULAR_UPLOAD_FESM2022_PROGRESS_KENDO_ANGULAR_UPLOAD_MJS_24 = goog.getMsg("File size too small.");
        i18n_24 = MSG__USERS_MACBOOKPRO_DOCUMENTS_WIN_GENOVITY_DEV_USERS_SCD_SCD_COM_WS_NODE_MODULES__PROGRESS_KENDO_ANGULAR_UPLOAD_FESM2022_PROGRESS_KENDO_ANGULAR_UPLOAD_MJS_24;
      } else {
        i18n_24 = $localize`:kendo.fileselect.invalidMinFileSize|The text for the invalid min file size restriction message:File size too small.`;
      }
      let i18n_25;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG__USERS_MACBOOKPRO_DOCUMENTS_WIN_GENOVITY_DEV_USERS_SCD_SCD_COM_WS_NODE_MODULES__PROGRESS_KENDO_ANGULAR_UPLOAD_FESM2022_PROGRESS_KENDO_ANGULAR_UPLOAD_MJS_25 = goog.getMsg("Remove");
        i18n_25 = MSG__USERS_MACBOOKPRO_DOCUMENTS_WIN_GENOVITY_DEV_USERS_SCD_SCD_COM_WS_NODE_MODULES__PROGRESS_KENDO_ANGULAR_UPLOAD_FESM2022_PROGRESS_KENDO_ANGULAR_UPLOAD_MJS_25;
      } else {
        i18n_25 = $localize`:kendo.fileselect.remove|The text for the Remove button:Remove`;
      }
      let i18n_26;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG__USERS_MACBOOKPRO_DOCUMENTS_WIN_GENOVITY_DEV_USERS_SCD_SCD_COM_WS_NODE_MODULES__PROGRESS_KENDO_ANGULAR_UPLOAD_FESM2022_PROGRESS_KENDO_ANGULAR_UPLOAD_MJS_26 = goog.getMsg("Select files...");
        i18n_26 = MSG__USERS_MACBOOKPRO_DOCUMENTS_WIN_GENOVITY_DEV_USERS_SCD_SCD_COM_WS_NODE_MODULES__PROGRESS_KENDO_ANGULAR_UPLOAD_FESM2022_PROGRESS_KENDO_ANGULAR_UPLOAD_MJS_26;
      } else {
        i18n_26 = $localize`:kendo.fileselect.select|The text for the Select button:Select files...`;
      }
      return [["fileSelectButton", ""], ["fileSelectInput", ""], ["kendoFileSelectLocalizedMessages", "", "dropFilesHere", i18n_21, "invalidFileExtension", i18n_22, "invalidMaxFileSize", i18n_23, "invalidMinFileSize", i18n_24, "remove", i18n_25, "select", i18n_26], ["kendoFileSelectInternalDropZone", "", 3, "restrictions", "multiple", "disabled"], [1, "k-upload-button-wrap"], ["kendoButton", "", "type", "button", "role", "button", 1, "k-upload-button", 3, "click", "focus", "id"], ["kendoFileSelect", "", 3, "dir", "accept", "restrictions", "multiple", "disabled", "required"], [1, "k-dropzone-hint"], ["kendo-upload-file-list", "", 1, "k-upload-files", "k-reset", 3, "disabled", "fileList", "fileTemplate", "fileInfoTemplate", "id"]];
    },
    template: function FileSelectComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = ɵɵgetCurrentView();
        ɵɵelementContainer(0, 2);
        ɵɵelementStart(1, "div", 3)(2, "div", 4)(3, "button", 5, 0);
        ɵɵlistener("click", function FileSelectComponent_Template_button_click_3_listener() {
          ɵɵrestoreView(_r1);
          const fileSelectInput_r2 = ɵɵreference(7);
          return ɵɵresetView(fileSelectInput_r2.click());
        })("focus", function FileSelectComponent_Template_button_focus_3_listener() {
          ɵɵrestoreView(_r1);
          return ɵɵresetView(ctx.onFileSelectButtonFocus());
        });
        ɵɵtext(5);
        ɵɵelementEnd();
        ɵɵelement(6, "input", 6, 1);
        ɵɵelementEnd();
        ɵɵelementStart(8, "div", 7);
        ɵɵtext(9);
        ɵɵelementEnd()();
        ɵɵtemplate(10, FileSelectComponent_Conditional_10_Template, 1, 5, "ul", 8);
      }
      if (rf & 2) {
        ɵɵadvance();
        ɵɵproperty("restrictions", ctx.restrictions)("multiple", ctx.multiple)("disabled", ctx.disabled);
        ɵɵadvance(2);
        ɵɵproperty("id", ctx.focusableId);
        ɵɵattribute("aria-label", ctx.textFor("select"))("tabindex", ctx.tabindex)("aria-expanded", ctx.hasFileList)("aria-controls", ctx.hasFileList ? ctx.fileListId : void 0);
        ɵɵadvance(2);
        ɵɵtextInterpolate1(" ", ctx.textFor("select"), " ");
        ɵɵadvance();
        ɵɵproperty("dir", ctx.direction)("accept", ctx.accept)("restrictions", ctx.restrictions)("multiple", ctx.multiple)("disabled", ctx.disabled)("required", ctx.isControlRequired);
        ɵɵadvance(3);
        ɵɵtextInterpolate(ctx.textFor("dropFilesHere"));
        ɵɵadvance();
        ɵɵconditional(ctx.hasFileList ? 10 : -1);
      }
    },
    dependencies: [LocalizedMessagesDirective, DropZoneInternalDirective, ButtonComponent, FileSelectDirective, FileListComponent],
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FileSelectComponent, [{
    type: Component,
    args: [{
      exportAs: "kendoFileSelect",
      providers: [LocalizationService, NavigationService, UploadService, DropZoneService, FILESELECT_VALUE_ACCESSOR, {
        provide: L10N_PREFIX,
        useValue: "kendo.fileselect"
      }, {
        provide: KendoInput,
        useExisting: forwardRef(() => FileSelectComponent)
      }],
      selector: "kendo-fileselect",
      template: `
        <ng-container kendoFileSelectLocalizedMessages
          i18n-dropFilesHere="kendo.fileselect.dropFilesHere|The drop zone hint"
          dropFilesHere="Drop files here to select"
        
          i18n-invalidFileExtension="kendo.fileselect.invalidFileExtension|The text for the invalid allowed extensions restriction message"
          invalidFileExtension="File type not allowed."
        
          i18n-invalidMaxFileSize="kendo.fileselect.invalidMaxFileSize|The text for the invalid max file size restriction message"
          invalidMaxFileSize="File size too large."
        
          i18n-invalidMinFileSize="kendo.fileselect.invalidMinFileSize|The text for the invalid min file size restriction message"
          invalidMinFileSize="File size too small."
        
          i18n-remove="kendo.fileselect.remove|The text for the Remove button"
          remove="Remove"
        
          i18n-select="kendo.fileselect.select|The text for the Select button"
          select="Select files..."
          >
        </ng-container>
        <div kendoFileSelectInternalDropZone
          [restrictions]="restrictions"
          [multiple]="multiple"
          [disabled]="disabled">
          <div class="k-upload-button-wrap">
            <button
              kendoButton
              #fileSelectButton
              class="k-upload-button"
              type="button"
              role="button"
              (click)="fileSelectInput.click()"
              (focus)="onFileSelectButtonFocus()"
              [id]="focusableId"
              [attr.aria-label]="textFor('select')"
              [attr.tabindex]="tabindex"
              [attr.aria-expanded]="hasFileList"
              [attr.aria-controls]="hasFileList ? fileListId : undefined"
              >
              {{textFor('select')}}
            </button>
            <input kendoFileSelect #fileSelectInput
              [dir]="direction"
              [accept]="accept"
              [restrictions]="restrictions"
              [multiple]="multiple"
              [disabled]="disabled"
              [required]="isControlRequired"
              />
          </div>
          <div class="k-dropzone-hint">{{textFor('dropFilesHere')}}</div>
        </div>
        @if (hasFileList) {
          <ul kendo-upload-file-list
            class="k-upload-files k-reset"
            [disabled]="disabled"
            [fileList]="fileList.files"
            [fileTemplate]="fileTemplate"
            [fileInfoTemplate]="fileInfoTemplate"
            [id]="fileListId">
          </ul>
        }
        `,
      standalone: true,
      imports: [LocalizedMessagesDirective, DropZoneInternalDirective, ButtonComponent, FileSelectDirective, FileListComponent]
    }]
  }], () => [{
    type: UploadService
  }, {
    type: LocalizationService
  }, {
    type: NavigationService
  }, {
    type: DropZoneService
  }, {
    type: NgZone
  }, {
    type: Renderer2
  }, {
    type: ChangeDetectorRef
  }, {
    type: ElementRef
  }, {
    type: Injector
  }], {
    fileSelectInput: [{
      type: ViewChild,
      args: ["fileSelectInput", {
        static: true
      }]
    }],
    dir: [{
      type: HostBinding,
      args: ["attr.dir"]
    }],
    name: [{
      type: Input
    }],
    valueChange: [{
      type: Output
    }]
  });
})();
var CustomMessagesComponent = class _CustomMessagesComponent extends Messages {
  service;
  get override() {
    return true;
  }
  constructor(service) {
    super();
    this.service = service;
  }
  static ɵfac = function CustomMessagesComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CustomMessagesComponent)(ɵɵdirectiveInject(LocalizationService));
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _CustomMessagesComponent,
    selectors: [["kendo-upload-messages"], ["kendo-fileselect-messages"], ["kendo-uploaddropzone-messages"]],
    standalone: true,
    features: [ɵɵProvidersFeature([{
      provide: Messages,
      useExisting: forwardRef(() => _CustomMessagesComponent)
    }]), ɵɵInheritDefinitionFeature, ɵɵStandaloneFeature],
    decls: 0,
    vars: 0,
    template: function CustomMessagesComponent_Template(rf, ctx) {
    },
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CustomMessagesComponent, [{
    type: Component,
    args: [{
      providers: [{
        provide: Messages,
        useExisting: forwardRef(() => CustomMessagesComponent)
      }],
      selector: "kendo-upload-messages, kendo-fileselect-messages, kendo-uploaddropzone-messages",
      template: ``,
      standalone: true
    }]
  }], () => [{
    type: LocalizationService
  }], null);
})();
var KENDO_FILESELECT = [FileSelectComponent, FileTemplateDirective, FileInfoTemplateDirective, CustomMessagesComponent, UploadDropZoneDirective, UploadDropZoneComponent];
var KENDO_UPLOAD = [UploadComponent, UploadActionButtonsComponent, UploadStatusTotalComponent, FileTemplateDirective, FileInfoTemplateDirective, CustomMessagesComponent, UploadDropZoneDirective, UploadDropZoneComponent];
var KENDO_UPLOADS = [...KENDO_FILESELECT, ...KENDO_UPLOAD];
var FileSelectModule = class _FileSelectModule {
  static ɵfac = function FileSelectModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _FileSelectModule)();
  };
  static ɵmod = ɵɵdefineNgModule({
    type: _FileSelectModule,
    imports: [FileSelectComponent, FileTemplateDirective, FileInfoTemplateDirective, CustomMessagesComponent, UploadDropZoneDirective, UploadDropZoneComponent],
    exports: [FileSelectComponent, FileTemplateDirective, FileInfoTemplateDirective, CustomMessagesComponent, UploadDropZoneDirective, UploadDropZoneComponent]
  });
  static ɵinj = ɵɵdefineInjector({
    providers: [IconsService, PopupService, ResizeBatchService],
    imports: [FileSelectComponent, UploadDropZoneComponent]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FileSelectModule, [{
    type: NgModule,
    args: [{
      exports: [...KENDO_FILESELECT],
      imports: [...KENDO_FILESELECT],
      providers: [IconsService, PopupService, ResizeBatchService]
    }]
  }], null, null);
})();
var UploadModule = class _UploadModule {
  static ɵfac = function UploadModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _UploadModule)();
  };
  static ɵmod = ɵɵdefineNgModule({
    type: _UploadModule,
    imports: [UploadComponent, UploadActionButtonsComponent, UploadStatusTotalComponent, FileTemplateDirective, FileInfoTemplateDirective, CustomMessagesComponent, UploadDropZoneDirective, UploadDropZoneComponent],
    exports: [UploadComponent, UploadActionButtonsComponent, UploadStatusTotalComponent, FileTemplateDirective, FileInfoTemplateDirective, CustomMessagesComponent, UploadDropZoneDirective, UploadDropZoneComponent]
  });
  static ɵinj = ɵɵdefineInjector({
    providers: [IconsService, PopupService, ResizeBatchService],
    imports: [UploadComponent, UploadStatusTotalComponent, UploadDropZoneComponent]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UploadModule, [{
    type: NgModule,
    args: [{
      exports: [...KENDO_UPLOAD],
      imports: [...KENDO_UPLOAD],
      providers: [IconsService, PopupService, ResizeBatchService]
    }]
  }], null, null);
})();
var UploadsModule = class _UploadsModule {
  static ɵfac = function UploadsModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _UploadsModule)();
  };
  static ɵmod = ɵɵdefineNgModule({
    type: _UploadsModule,
    imports: [FileSelectComponent, FileTemplateDirective, FileInfoTemplateDirective, CustomMessagesComponent, UploadDropZoneDirective, UploadDropZoneComponent, UploadComponent, UploadActionButtonsComponent, UploadStatusTotalComponent, FileTemplateDirective, FileInfoTemplateDirective, CustomMessagesComponent, UploadDropZoneDirective, UploadDropZoneComponent],
    exports: [FileSelectComponent, FileTemplateDirective, FileInfoTemplateDirective, CustomMessagesComponent, UploadDropZoneDirective, UploadDropZoneComponent, UploadComponent, UploadActionButtonsComponent, UploadStatusTotalComponent, FileTemplateDirective, FileInfoTemplateDirective, CustomMessagesComponent, UploadDropZoneDirective, UploadDropZoneComponent]
  });
  static ɵinj = ɵɵdefineInjector({
    providers: [IconsService, PopupService, ResizeBatchService],
    imports: [FileSelectComponent, UploadDropZoneComponent, UploadComponent, UploadStatusTotalComponent, UploadDropZoneComponent]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UploadsModule, [{
    type: NgModule,
    args: [{
      exports: [...KENDO_UPLOADS],
      imports: [...KENDO_UPLOADS],
      providers: [IconsService, PopupService, ResizeBatchService]
    }]
  }], null, null);
})();

export {
  FileState,
  FileMap,
  CancelEvent,
  ClearEvent,
  ErrorEvent,
  PauseEvent,
  RemoveEvent,
  ResumeEvent,
  SelectEvent,
  SuccessEvent,
  UploadEvent,
  UploadProgressEvent,
  getTotalFilesSizeMessage,
  fileSVGGroupIcon,
  fileGroupClass,
  UploadService,
  NavigationService,
  DropZoneService,
  validateFiles,
  FileTemplateDirective,
  FileInfoTemplateDirective,
  UploadActionButtonsComponent,
  FileListItemBase,
  FileListItemActionButtonComponent,
  FileListMultipleItemsComponent,
  FileListSingleItemComponent,
  FileListComponent,
  UploadStatusTotalComponent,
  FileSelectDirective,
  UPLOAD_VALUE_ACCESSOR,
  UploadComponent,
  UploadDropZoneDirective,
  UploadDropZoneComponent,
  FileSelectComponent,
  CustomMessagesComponent,
  KENDO_FILESELECT,
  KENDO_UPLOAD,
  KENDO_UPLOADS,
  FileSelectModule,
  UploadModule,
  UploadsModule
};
//# sourceMappingURL=chunk-GRBGWSKS.js.map
