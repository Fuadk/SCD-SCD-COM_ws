import { Injectable } from '@angular/core';
import { HttpHeaders, HttpRequest } from '@angular/common/http';
import { map, tap } from 'rxjs/operators';
//import { AnyARecord } from 'dns';
import { throwError } from 'rxjs';
import * as CryptoJS from 'crypto-js';
import { catchError } from 'rxjs/operators';
import { DialogCloseResult } from '@progress/kendo-angular-dialog';
import { Day, firstDayInWeek, getDate } from '@progress/kendo-date-math';
import { Md5 } from 'ts-md5/dist/md5';
import { formatDate } from '@angular/common';
import { tabsCodes, componentConfigDef } from './model';
import * as i0 from "@angular/core";
import * as i1 from "@progress/kendo-angular-notification";
import * as i2 from "@progress/kendo-angular-dialog";
import * as i3 from "@angular/common/http";
import * as i4 from "@progress/kendo-angular-l10n";
//export class starServices extends BehaviorSubject<GridDataResult> {
export class starServices {
    constructor(notificationService, dialogService, http, messages) {
        //super(null);
        //logger.warn("Warning message");
        this.notificationService = notificationService;
        this.dialogService = dialogService;
        this.http = http;
        this.messages = messages;
        this.createdItems = [];
        this.updatedItems = [];
        this.deletedItems = [];
        this.routine_name = "";
        this.saveChangesMsg = "Screen changed, are you sure you to navigate?";
        this.deleteDetailMsg = "Can not delete as detail has data.";
        this.pleaseConfirmMsg = "Please confirm";
        this.deleteConfirmMsg = "Are you sure you want to delete this record?";
        this.nothingToDeletelMsg = "No records to delete.";
        this.fieldsRequiredMsg = "Please enter required fields.";
        this.readOnlyMsg = "Can not save , your authority is readonly.";
        this.noAccessMsg = "You dont have access to this routine.";
        this.standardErrorMsg = "Error performing transaction";
        this.saveMasterMsg = "Save master record first.";
        this.enterQueryMsg = "Enter any field to search (e.g: name%) and then press Execute Query";
        this.helpMsg = "";
        this.helpMsg_grid = "";
        this.USERNAME = "";
        this.hideAfter = 500;
        this.StrAuth = "";
        this.MASTER_DB = "";
        this.USERNAME_DB = "";
        this.limit = 5000;
        this.YesNoActions = [
            { text: 'No', primary: false },
            { text: 'Yes', primary: true }
        ];
        this.OkActions = [
            { text: 'Ok', primary: false }
        ];
        this.sessionParams = {};
        //private BASE_URL = 'https://odatasampleservices.azurewebsites.net/V4/Northwind/Northwind.svc/';
        //private BASE_URL = 'http://192.168.1.3:8090/api?_format=json&_limit=50';
        this.EPMENG_URL = ""; //'http://192.168.1.5:8092/format';
        //private EPMENG_URL = 'http://gmashro.com:8092/format';
        this.SERVER_URL = ""; // 'http://localhost:8090';
        //public SERVER_URL = 'http://gmashro.com:8090';
        this.BASE_URL = this.SERVER_URL + '/api?_format=json&_limit=' + this.limit;
        //private BASE_URL = 'http://gmashro.com:8090/api?_format=json&_limit=' + this.limit;
        this.eKycScr = "DSPEKYC";
        this.portalScr = "DSPPORTAL";
        this.syncFlag = 0;
        this.userAdded = false;
        this.rulesPostQueryDef = {
            rulePtrsArr: {},
            rulesArr: [],
            actionPtrsArr: {},
            actionsArr: []
        };
        this.rulesPreQueryDef = {
            rulePtrsArr: {},
            rulesArr: [],
            actionPtrsArr: {},
            actionsArr: []
        };
        this.hostsArr = [];
        this.hostsMapArr = [];
        this.lkpCache = [];
        this.commitBody = [];
        this.inTrans = false;
        this.isPhonePortrait = false;
        this.Body = [];
        this.commitCommands = ['INSERT', 'UPDATE', 'DELETE'];
        this.encryptSecretKey = "AppGen@Star1234";
        this.parseCookies = (cookieStr) => cookieStr.split(";")
            .map(str => str.trim().split(/=(.+)/))
            .reduce((acc, curr) => {
            acc[curr[0]] = curr[1];
            return acc;
        }, {});
    }
    // public query(state: any): void {
    //   let queryName = "";
    //   this.fetch(this, queryName)
    //     .subscribe((x:any) => super.next(x));
    // }
    removeRec(gridData, editedRowIndex) {
        //let result1 = JSON.parse(JSON.stringify(gridData));
        if (typeof editedRowIndex !== "undefined") {
            gridData.data.splice(editedRowIndex, 1);
            gridData.total = gridData.data.length;
            /*  //if (this.paramConfig.DEBUG_FLAG) console.log('remving editedRowIndex:' + editedRowIndex)
              result1.data.splice( editedRowIndex , 1 );
              result1.total = result1.data.length;*/
        }
        return gridData;
    }
    updateRec(gridData, editedRowIndex, NewVal) {
        gridData.data[editedRowIndex] = NewVal;
        return gridData;
    }
    addRec(gridData, NewVal) {
        gridData.data.push(NewVal);
        /* let result ={"data":[], total:0};
         let result1 = JSON.parse(JSON.stringify(gridData));
         NewVal = this.parseToDate(NewVal);
         result1.data.push(NewVal);
         result.data = result1.data;
         result.total = result.data.length;
         return result1;*/
        return gridData;
    }
    formatWhere(NewVal) {
        function isDate(value) {
            return value instanceof Date;
        }
        function FORMAT_ISO_parse(d) {
            var dateIso = d.toISOString();
            var dateIsoArr = dateIso.split("T");
            dateIso = dateIsoArr[0] + " " + dateIsoArr[1];
            dateIso = dateIso.substr(0, 19);
            return dateIso;
        }
        function parseValue(key, value) {
            let phrase = "";
            //if (this.paramConfig.DEBUG_FLAG) console.log("isDate:" , isDate (value), value);
            if (isDate(value)) {
                //value = getDate(value);
                //value = FORMAT_ISO_parse(value);
                value = value.toISOString();
            }
            if (typeof value === 'string') {
                // it's a string
                if (value != "" && value != null) {
                    let operators = "<>!=";
                    let operatorVal = "";
                    let trimeedVal = value.trim();
                    let firstChar = trimeedVal.charAt(0);
                    let n = operators.search(firstChar);
                    if (n != -1) {
                        if (firstChar == "|")
                            operatorVal = " = '" + value + "' ";
                        else
                            operatorVal = value;
                    }
                    else if (value.toUpperCase().search("%") != -1) {
                        operatorVal = " like '" + value + "' ";
                        //if (this.paramConfig.DEBUG_FLAG) console.log("operatorVal:"+ operatorVal)
                    }
                    else {
                        operatorVal = " = '" + value + "' ";
                    }
                    phrase = key + encodeURIComponent(operatorVal);
                    //phrase = key + operatorVal;
                }
            }
            else {
                // it's something else
                let operatorVal = " = '" + value + "' ";
                phrase = key + encodeURIComponent(operatorVal);
            }
            return phrase;
        }
        let wherePhrase = "";
        let whereClause = "";
        if (this.paramConfig.DEBUG_FLAG)
            console.log("formatWhere:");
        if (this.paramConfig.DEBUG_FLAG)
            console.log(NewVal);
        Object.keys(NewVal).forEach(function (key) {
            let value = NewVal[key];
            //if (this.paramConfig.DEBUG_FLAG) console.log(key + ":" + value);
            if ((typeof value !== "undefined") && (value !== "") && (value !== null)) {
                let phrase = parseValue(key, value);
                if (wherePhrase == "") {
                    wherePhrase = wherePhrase + phrase;
                }
                else {
                    wherePhrase = wherePhrase + " and " + phrase;
                }
            }
        });
        if (wherePhrase != "")
            whereClause = "&_WHERE=" + wherePhrase;
        else
            whereClause = "&_WHERE=";
        if (this.paramConfig.DEBUG_FLAG)
            console.log("whereClause:" + whereClause);
        return whereClause;
    }
    checkDBLoc(theURL) {
        let paramConfig = getParamConfig();
        if (this.paramConfig.DBLoc != "") {
            //let userName = this.sessionParams.USERNAME;
            theURL = theURL + "&DBLoc=" + this.paramConfig.DBLoc;
        }
        if (this.paramConfig.DEBUG_FLAG)
            console.log("theURL:", theURL);
        return theURL;
    }
    fetch(object, queryName) {
        //const queryStr = `${toODataString(state)}&$count=true`;
        const queryStr = ``;
        this.loading = true;
        let theURL = `${this.BASE_URL}${queryName}`;
        theURL = this.checkDBLoc(theURL);
        this.httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'authorization': this.StrAuth
            })
        };
        return this.http
            .get(`${theURL}`, this.httpOptions)
            .pipe(catchError((err) => {
            return throwError(err);
        }), map((response) => ({ data: response['data'] })), tap(data => {
            if (this.paramConfig.DEBUG_FLAG)
                console.log("status data: ", data);
            this.loading = false;
            if (this.paramConfig.DEBUG_FLAG)
                console.log("test:this.rulesPostQueryDef", this.rulesPostQueryDef);
            let statusRec = {};
            statusRec = this.checkRules(object, this.rulesPostQueryDef, data, "POST_QUERY");
            if (this.paramConfig.DEBUG_FLAG)
                console.log("statusRec:post:POST_QUERY:fetch:", statusRec, statusRec['status']);
            if (statusRec['status'] == -1) {
                this.showNotification("error", "Rule:" + statusRec['msg']);
            }
        }));
    }
    /* public remove( page: any):Observable<any> {
         this.delete(page)
            .subscribe((x:any) => super.next(x));
 
             return 0;
     }
 */
    delete(Page) {
        //const queryStr = `${toODataString(state)}&$count=true`;
        const queryStr = ``;
        this.loading = true;
        let theURL = `${this.BASE_URL}${Page}`;
        theURL = this.checkDBLoc(theURL);
        this.httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'authorization': this.StrAuth
            })
        };
        return this.http
            .delete(`${theURL}`, this.httpOptions)
            .pipe(catchError((err) => {
            return throwError(err);
        }), map((response) => ({ data: response['data'] })), tap(() => this.loading = false));
    }
    post_delete(Page, Body) {
        //const queryStr = `${toODataString(state)}&$count=true`;
        const queryStr = ``;
        this.loading = true;
        //if (this.paramConfig.DEBUG_FLAG) console.log("post:Page:",Page," Body:",Body)
        let theURL = `${this.BASE_URL}${Page}`;
        this.httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'authorization': this.StrAuth
            })
        };
        //if (this.paramConfig.DEBUG_FLAG) console.log("this.StrAuth:" + this.StrAuth);
        return this.http
            .post(`${theURL}`, Body, this.httpOptions)
            .pipe(catchError((err) => {
            return throwError(err);
        }), map((response) => ({ data: response['data'] })), tap(data => {
            if (this.paramConfig.DEBUG_FLAG)
                console.log("status data:", data);
            this.loading = false;
        }));
    }
    showDailogErr(error) {
        let Msg = error.error;
        //console.log("Msg:", Msg);
        let position = Msg.search("UNIQUE constraint");
        if (position != -1)
            Msg = this.getNLS([], 'ALREADY_EXISTS', 'Record already exists');
        var dialogStruc = {
            msg: Msg,
            title: "Error",
            info: null,
            object: this,
            action: this.OkActions,
            callback: null
        };
        this.showConfirmation(dialogStruc);
    }
    post(object, Page, Body) {
        //const queryStr = `${toODataString(state)}&$count=true`;
        const queryStr = ``;
        this.loading = true;
        //if (this.paramConfig.DEBUG_FLAG) 
        //console.log("post :Page:",Page," Body:",Body)
        // if (Page=="" && Body.length == 0)
        //   console.log("post empty:Page:",Page['dum'].length," Body:",Body)
        let statusRec = {};
        statusRec = this.checkRules(object, this.rulesPreQueryDef, Body, "PRE_QUERY");
        if (this.paramConfig.DEBUG_FLAG)
            console.log("statusRec:post:PRE_QUERY", statusRec, statusRec['status']);
        if (statusRec['status'] == -1) {
            if (this.paramConfig.DEBUG_FLAG)
                console.log("statusRec: found -1");
            this.showNotification("error", "Rule:" + statusRec['msg']);
            Body[0]._QUERY = "";
        }
        let theURL = `${this.BASE_URL}${Page}`;
        theURL = this.checkDBLoc(theURL);
        this.httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'authorization': this.StrAuth
            })
        };
        console.log("post:theURL:", theURL, "Body:", Body);
        //if (this.paramConfig.DEBUG_FLAG) console.log("this.StrAuth:" , this.StrAuth , theURL);
        //if (this.paramConfig.DEBUG_FLAG) console.log("this.StrAuth: with URL" , this.StrAuth , theURL);
        return this.http
            .post(`${theURL}`, Body, this.httpOptions)
            .pipe(catchError((err) => {
            console.log("statusRec['msg'] :", statusRec['msg'], " err.error :", err.error);
            if ((typeof statusRec['msg'] != "undefined") && (statusRec['msg'] != "")) {
                //if ( (statusRec['msg'] != "")) {
                if (typeof err.error == "undefined") {
                    err = statusRec['msg'];
                }
                else
                    err.error.error = statusRec['msg'];
            }
            this.showDailogErr(err.error);
            return throwError(err);
        }), map((response) => ({ data: response['data'] })), tap(data => {
            //if (this.paramConfig.DEBUG_FLAG) console.log("status data:", data);
            this.loading = false;
            if (this.paramConfig.DEBUG_FLAG)
                console.log("test:this.rulesPostQueryDef", this.rulesPostQueryDef);
            this.syncFlag = 0;
            let statusRec = {};
            statusRec = this.checkRules(object, this.rulesPostQueryDef, data, "POST_QUERY");
            if (this.paramConfig.DEBUG_FLAG)
                console.log("statusRec:post:POST_QUERY", statusRec, statusRec['status']);
            if (statusRec['status'] == -1) {
                this.showNotification("error", "Rule:" + statusRec['msg']);
            }
        }));
    }
    /////////////////////////////////////////////////////
    postUpload(Page, Body) {
        //const queryStr = `${toODataString(state)}&$count=true`;
        const queryStr = ``;
        this.loading = true;
        let theURL = Page;
        this.httpOptions = {
            headers: new HttpHeaders({
                'authorization': this.StrAuth
            })
        };
        //if (this.paramConfig.DEBUG_FLAG) console.log("this.StrAuth:" + this.StrAuth);
        return this.http
            .post(`${theURL}`, Body, this.httpOptions)
            .pipe(catchError((err) => {
            return throwError(err);
        }), map((response) => ({ data: response['data'] })), tap(() => this.loading = false));
    }
    /////////////////////////////////////////////////////
    uploadFile(page, filesSet, id) {
        filesSet.forEach(file => {
            // create a new multipart-form for every file
            const formdata = new FormData();
            formdata.append('file', file);
            formdata.append('id', id);
            if (this.paramConfig.DEBUG_FLAG)
                console.log("uploadFile page:" + page);
            let apiURL = this.SERVER_URL + '/api/att' + page;
            if (this.paramConfig.DEBUG_FLAG)
                console.log("apiURL:" + apiURL);
            if (this.paramConfig.DEBUG_FLAG)
                console.log(formdata);
            //formdata.forEach(entries => console.log(JSON.stringify(entries)));
            this.postUpload(apiURL, formdata).subscribe(result => {
                if (this.paramConfig.DEBUG_FLAG)
                    console.log('result', result);
            });
        });
    }
    uploadFileOld(file) {
        const formdata = new FormData();
        formdata.append('file', file); //the uploaded file content
        formdata.append('documentVersionId', '123'); //I need to pass some additional info to the server besides the File data
        let apiURL = this.SERVER_URL + '/api?upload=y';
        if (this.paramConfig.DEBUG_FLAG)
            console.log("apiURL:" + apiURL);
        if (this.paramConfig.DEBUG_FLAG)
            console.log(formdata);
        formdata.forEach(entries => console.log(JSON.stringify(entries)));
        //const apiURL = this.api_path + 'Upload';     //calling http://localhost:52333/api/UploadController
        this.postUpload(apiURL, formdata).subscribe(result => {
            if (this.paramConfig.DEBUG_FLAG)
                console.log('result', result);
        });
        /*const uploadReq = new HttpRequest('POST', apiURL, formdata, {
           reportProgress: true
        });
        this.httpclient.request(uploadReq).subscribe(event => {
           if (event.type === HttpEventType.UploadProgress) {
               this.progress = Math.round(100 * event.loaded / event.total);
           }
       });
       */
    }
    /////////////////////////////////////////////////////
    hasChanges() {
        return Boolean(this.deletedItems.length || this.updatedItems.length || this.createdItems.length);
    }
    addToBody(NewVal, Body) {
        Body.push(NewVal);
        // if (this.paramConfig.DEBUG_FLAG) console.log('NewVal : HF Please'  + JSON.stringify(NewVal));
        return Body;
    }
    showNotification(styleNote, msg) {
        let hideAfter = this.hideAfter;
        if (styleNote == "error")
            hideAfter = 5000;
        this.notificationService.show({
            content: msg,
            cssClass: 'button-notification',
            animation: { type: 'fade', duration: 200 },
            position: { horizontal: 'center', vertical: 'bottom' },
            //            stacking: { stacking: 'down' },
            type: { style: styleNote, icon: true },
            //closable: true,
            hideAfter: hideAfter
        });
    }
    goRecordAct(target, object) {
        let rec;
        if (object.paramConfig.DEBUG_FLAG)
            console.log(target);
        if (object.paramConfig.DEBUG_FLAG)
            console.log("object.CurrentRec:" + object.CurrentRec);
        if (object.paramConfig.DEBUG_FLAG)
            console.log(object.executeQueryresult);
        if (target == "first") {
            object.CurrentRec = 0;
        }
        else if (target == "last") {
            object.CurrentRec = object.executeQueryresult.total - 1;
        }
        else if (target == "next") {
            if (object.CurrentRec < object.executeQueryresult.total - 1)
                object.CurrentRec = object.CurrentRec + 1;
        }
        else if (target == "prev") {
            if (object.CurrentRec > 0)
                object.CurrentRec = object.CurrentRec - 1;
        }
        else if (typeof target == "number") {
            object.CurrentRec = target;
        }
        rec = object.executeQueryresult.data[object.CurrentRec];
        if (object.paramConfig.DEBUG_FLAG)
            console.log("------rec:", rec);
        if (object.paramConfig.DEBUG_FLAG)
            console.log(object.form.getRawValue());
        if (typeof rec !== "undefined") {
            object.form.patchValue(rec);
            object.form.markAsPristine();
            object.form.markAsUntouched();
            //object.form.reset(rec, {emitEvent: object.emitEvent != null ? object.emitEvent : true});
            if (object.disableEmitReadCompleted != true)
                object.readCompletedOutput.emit(object.form.getRawValue());
            if (object.paramConfig.DEBUG_FLAG)
                console.log("ATT:object.callBackFunction:", object.callBackFunction);
            if (typeof object.callBackFunction !== "undefined")
                object.callBackFunction(rec);
        }
        else
            object.clearCompletedOutput.emit([]);
    }
    goRecord(target, object) {
        if (typeof object.executeQueryresult != "undefined") {
            if (this.paramConfig.DEBUG_FLAG)
                console.log(object.form.dirty);
            if (object.form.dirty == true) {
                let dialogStruc = {
                    msg: this.saveChangesMsg,
                    title: this.pleaseConfirmMsg,
                    info: target,
                    object: object,
                    action: this.YesNoActions,
                    callback: this.goRecordAct
                };
                this.showConfirmation(dialogStruc);
            }
            else {
                this.goRecordAct(target, object);
            }
        }
    }
    showConfirmation(dialogStruc) {
        let dialogResult;
        const dialog = this.dialogService.open({
            title: dialogStruc.title,
            content: dialogStruc.msg,
            actions: dialogStruc.action,
            width: 450,
            height: 200,
            minWidth: 250
        });
        dialog.result.subscribe((result) => {
            if (result instanceof DialogCloseResult) {
                if (this.paramConfig.DEBUG_FLAG)
                    console.log('close');
            }
            else {
                if (this.paramConfig.DEBUG_FLAG)
                    console.log('action', result);
            }
            dialogResult = JSON.parse(JSON.stringify(result));
            if (dialogResult.primary == true) {
                if (dialogStruc.hasOwnProperty('callback')) {
                    dialogStruc.callback(dialogStruc.info, dialogStruc.object);
                }
            }
        });
    }
    /**************** Form functions **************/
    executeQuery_form(form, object) {
        if (this.paramConfig.DEBUG_FLAG)
            console.log("star-services executeQuery_form object.form:");
        if (this.paramConfig.DEBUG_FLAG)
            console.log("object.isSearch:" + object.isSearch);
        //if (this.paramConfig.DEBUG_FLAG) console.log(object.form.getRawValue());
        //if (this.paramConfig.DEBUG_FLAG) console.log(form.value);
        if (typeof object.form !== "undefined") {
            if ((object.form.dirty == true) && (object.isSearch != true)) {
                let dialogStruc = {
                    msg: this.saveChangesMsg,
                    title: this.pleaseConfirmMsg,
                    info: form,
                    object: object,
                    action: this.YesNoActions,
                    callback: this.executeQueryAct_form
                };
                this.showConfirmation(dialogStruc);
            }
            else {
                this.executeQueryAct_form(form, object);
            }
        }
        else {
            this.executeQueryAct_form(form, object);
        }
    }
    // routine_name from : https://www.telerik.com/kendo-angular-ui/components/dateinputs/datepicker/integration-with-json/
    parseToDate(json) {
        //if (this.paramConfig.DEBUG_FLAG) console.log("json:in:", json)
        Object.keys(json).map(key => {
            let Val1 = json[key];
            //if (this.paramConfig.DEBUG_FLAG) console.log("key:", key, Val1, typeof Val1);
            //let n = key.toUpperCase().search("DATE");
            //if (n != -1){
            if (typeof Val1 != "number") { //it is not a number, check more
                if ((Val1 != null) && (Val1.length > 7)) {
                    const date = new Date(Val1);
                    let checkYYYY = isNaN(parseInt(Val1.substring(0, 4)));
                    let timeVal = date.getTime();
                    if (this.paramConfig.DEBUG_FLAG)
                        console.log("timeVal:", timeVal, isNaN(timeVal));
                    if (!isNaN(timeVal) && (timeVal > 0) && !checkYYYY) {
                        if (this.paramConfig.DEBUG_FLAG)
                            console.log("it is a date");
                        //if (this.paramConfig.DEBUG_FLAG) console.log("key:"+key + ":" + date.getTime());
                        json[key] = date;
                    }
                }
            }
        });
        //if (this.paramConfig.DEBUG_FLAG) console.log("json:out:", json)
        return json;
    }
    dateYYYYMMDD(object, json) {
        if (this.paramConfig.DEBUG_FLAG)
            console.log("json:", json);
        Object.keys(json).map(key => {
            let n = key.toUpperCase().search("_DATE");
            if (n != -1) {
                let dateOrg = json[key];
                let date = new Date(json[key]);
                //date = toLocalDate(date);
                let timeVal = date.getTime();
                if (!isNaN(timeVal) && (timeVal > 0)) {
                    //if (this.paramConfig.DEBUG_FLAG) console.log("key:"+key + ":" + date.getTime());
                    //let array = dateOrg.split("T")
                    dateOrg = formatDate(dateOrg, object.paramConfig.DateFormat, object.paramConfig.dateLocale);
                    json[key] = dateOrg;
                }
            }
        });
        return json;
    }
    smartStringProcessor(inputString, jsonData) {
        function replaceVariablesInString(inputString, jsonData) {
            // Check if string contains any variables (starts with :)
            let variablePattern = /:([a-zA-Z_][a-zA-Z0-9_]*)/g;
            let hasVariables = variablePattern.test(inputString);
            // If no variables found, return original string
            if (!hasVariables) {
                return {
                    original: inputString,
                    result: inputString,
                    replaced: false,
                    message: "No variables found - returning original string",
                    variablesFound: []
                };
            }
            // Reset regex lastIndex since we used test() above
            variablePattern.lastIndex = 0;
            // Find all unique variables
            let variables = new Set();
            let match;
            while ((match = variablePattern.exec(inputString)) !== null) {
                variables.add(match[1]); // Add variable name without colon
            }
            // Replace variables with values
            let resultString = inputString;
            let replacements = {};
            let missingVariables = [];
            variables.forEach(variableName => {
                // Convert variable name to uppercase to match JSON keys (case-insensitive)
                let key = Object.keys(jsonData).find(k => k.toUpperCase() === variableName.toUpperCase());
                console.log("Processing variable: ", variableName, "matched key:", key, "jsonData:", jsonData);
                if (key !== undefined && jsonData[key] !== undefined && jsonData[key] !== null) {
                    let value = jsonData[key];
                    // Format the value properly
                    let formattedValue;
                    if (typeof value === 'string') {
                        // Escape single quotes in strings
                        let escapedValue = value.replace(/'/g, "''");
                        formattedValue = `'${escapedValue}'`;
                    }
                    else if (typeof value === 'number') {
                        formattedValue = value.toString();
                    }
                    else if (value instanceof Date) {
                        // Format date as SQL date string
                        let year = value.getFullYear();
                        let month = String(value.getMonth() + 1).padStart(2, '0');
                        let day = String(value.getDate()).padStart(2, '0');
                        formattedValue = `'${year}-${month}-${day}'`;
                    }
                    else if (typeof value === 'boolean') {
                        formattedValue = value ? '1' : '0';
                    }
                    else {
                        // For other types, convert to string and quote
                        formattedValue = `'${String(value)}'`;
                    }
                    // Replace ALL occurrences of this variable
                    let variableRegex = new RegExp(`:${variableName}\\b`, 'g');
                    resultString = resultString.replace(variableRegex, formattedValue);
                    replacements[variableName] = {
                        original: `:${variableName}`,
                        replacedWith: formattedValue,
                        value: value,
                        type: typeof value
                    };
                }
                else {
                    missingVariables.push(variableName);
                    // Keep the variable as is if not found
                }
            });
            return {
                original: inputString,
                result: resultString,
                replaced: true,
                replacements: replacements,
                variablesFound: Array.from(variables),
                missingVariables: missingVariables,
                message: missingVariables.length > 0
                    ? `Some variables not found: ${missingVariables.join(', ')}`
                    : 'All variables replaced successfully'
            };
        }
        // First check if it looks like a SQL WHERE clause with variables
        let hasWhereClause = inputString.toUpperCase().includes('_WHERE=');
        let hasVariables = /:[a-zA-Z_][a-zA-Z0-9_]*/.test(inputString);
        // If it has WHERE but no variables, it might be complete already
        if (hasWhereClause && !hasVariables) {
            return {
                original: inputString,
                result: inputString,
                needsReplacement: false,
                type: 'complete_where_clause',
                message: 'WHERE clause appears complete - no variables to replace'
            };
        }
        // Otherwise, try to replace variables
        let replacementResult = replaceVariablesInString(inputString, jsonData);
        return {
            ...replacementResult,
            needsReplacement: replacementResult.replaced,
            type: replacementResult.replaced ? 'with_variables' : 'no_variables'
        };
    }
    processformattedWhere(object, formattedWhere) {
        if (this.sessionParams['NAVIGATE_DATA'] != "undefined") {
            this.sessionParams['NAVIGATE_DATA'] = {};
            let navData = {};
            for (let i = 0; i < object.masterKeyNameArr.length; i++) {
                navData[object.masterKeyNameArr[i]] = object.masterKeyArr[i];
            }
            this.sessionParams['NAVIGATE_DATA'] = navData;
        }
        let result = this.smartStringProcessor(formattedWhere, this.sessionParams['NAVIGATE_DATA']);
        if (result.needsReplacement == true) {
            if (result.message.startsWith("Some variables not found"))
                formattedWhere = "";
            else
                formattedWhere = result.result;
        }
        console.log("processformattedWhere:this.WhereClause", result, formattedWhere);
        this.sessionParams['NAVIGATE_DATA'] = {};
        return formattedWhere;
    }
    stringifyMultiSelectFields(object, form) {
        let formGroup = form.value;
        if (typeof object.multiselect_arr !== "undefined") {
            for (let i = 0; i < object.multiselect_arr.length; i++) {
                formGroup[object.multiselect_arr[i]] = JSON.stringify(formGroup[object.multiselect_arr[i]]);
            }
        }
        if (typeof object.multiselect_tree_arr !== "undefined") {
            for (let i = 0; i < object.multiselect_tree_arr.length; i++) {
                formGroup[object.multiselect_tree_arr[i]] = JSON.stringify(formGroup[object.multiselect_tree_arr[i]]);
            }
        }
        return form;
    }
    fixMultiSelectFields_result(object, result) {
        if (typeof object.multiselect_arr !== "undefined") {
            for (let i = 0; i < object.multiselect_arr.length; i++) {
                for (let j = 0; j < result.data.length; j++) {
                    try {
                        result.data[j][object.multiselect_arr[i]] = JSON.parse(result.data[j][object.multiselect_arr[i]]);
                    }
                    catch (e) {
                    }
                }
            }
        }
        if (typeof object.multiselect_tree_arr !== "undefined") {
            for (let i = 0; i < object.multiselect_tree_arr.length; i++) {
                for (let j = 0; j < result.data.length; j++) {
                    try {
                        result.data[j][object.multiselect_tree_arr[i]] = JSON.parse(result.data[j][object.multiselect_tree_arr[i]]);
                    }
                    catch (e) {
                    }
                }
            }
        }
    }
    fixMultiSelectFields_NewVal(object, NewVal) {
        if (typeof object.multiselect_arr !== "undefined") {
            for (let i = 0; i < object.multiselect_arr.length; i++) {
                if (NewVal[object.multiselect_arr[i]] != null && NewVal[object.multiselect_arr[i]].length > 0) {
                    NewVal[object.multiselect_arr[i]] = JSON.parse(NewVal[object.multiselect_arr[i]]);
                }
            }
        }
        if (typeof object.multiselect_tree_arr !== "undefined") {
            for (let i = 0; i < object.multiselect_tree_arr.length; i++) {
                if (NewVal[object.multiselect_tree_arr[i]] != null && NewVal[object.multiselect_tree_arr[i]].length > 0) {
                    NewVal[object.multiselect_tree_arr[i]] = JSON.parse(NewVal[object.multiselect_tree_arr[i]]);
                }
            }
        }
    }
    transformForTreeView(data) {
        const groupMap = new Map();
        data.forEach(item => {
            const groupKey = item.CODETEXT_LANG;
            if (!groupMap.has(groupKey)) {
                groupMap.set(groupKey, {
                    text: groupKey,
                    id: groupKey, // Added id field
                    items: []
                });
            }
            const group = groupMap.get(groupKey);
            group.items.push({
                text: item.CODE,
                id: item.CODE // Changed from 'code' to 'id'
            });
        });
        return Array.from(groupMap.values());
    }
    callltransformForTreeView(object) {
        //console.log ("this.lookupArrDef:object.multiselect_tree_arr:", object.multiselect_tree_arr)
        if (typeof object.multiselect_tree_arr != "undefined") {
            for (let i = 0; i < object.multiselect_tree_arr.length; i++) {
                let colName = object.multiselect_tree_arr[i];
                let kpName = "lkpArr" + colName;
                let lkpVal = object[kpName];
                //console.log ("this.lookupArrDef:kpName:", kpName, lkpVal)
                lkpVal = this.transformForTreeView(lkpVal);
                //console.log ("this.lookupArrDef:kpName:", kpName, lkpVal)
                object[kpName] = lkpVal;
            }
        }
    }
    executeQueryAct_form(form, object) {
        console.log("executeQueryAct_form:form:", form, "object.isChild :", object.isChild, "object.isSearch:", object.isSearch);
        if (typeof form === "undefined")
            return;
        let paramConfig = {
            "Name": "childRecords",
            "Val": 0
        };
        setParamConfig(paramConfig);
        if (object.isChild == true) {
            if (object.isSearch != true) {
                //object.form.reset();
                object.form.reset(object.formInitialValues);
                if ((typeof object.masterKeyNameArr != "undefined") && (object.masterKeyNameArr.length != 0)) {
                    for (let i = 0; i < object.masterKeyNameArr.length; i++) {
                        object.formInitialValues[object.masterKeyNameArr[i]] = object.masterKeyArr[i];
                    }
                }
                else {
                    object.formInitialValues[object.masterKeyName] = object.masterKey;
                }
                //object.formInitialValues[object.masterKeyName] = object.masterKey;
                object.form.reset(object.formInitialValues, { emitEvent: object.emitEvent != null ? object.emitEvent : true });
                if (object.paramConfig.DEBUG_FLAG)
                    console.log("object.masterKeyName:" + object.masterKeyName);
                object.isSearch = true;
                form = object.form.getRawValue();
            }
        }
        let Page = "&_query=" + object.getCMD;
        if (object.paramConfig.DEBUG_FLAG)
            console.log("object.isSearch:" + object.isSearch);
        if (object.isSearch == true) {
            if (object.paramConfig.DEBUG_FLAG)
                console.log(form.value);
            let NewVal = form;
            object.isSearch = false;
            if ((typeof object.formattedWhere === "undefined") || (object.formattedWhere == null)) {
                Page = Page + object.starServices.formatWhere(NewVal);
            }
            else {
                object.formattedWhere = this.processformattedWhere(object, object.formattedWhere);
                Page = Page + object.formattedWhere;
                object.formattedWhere = null;
            }
            if ((typeof object.OrderByClause !== "undefined") && (object.OrderByClause != ""))
                Page = Page + "&_ORDERBY=" + object.OrderByClause;
        }
        object.executeQueryresult = [];
        object.executeQueryresult.result = 0;
        object.CurrentRec = 0;
        Page = encodeURI(Page);
        object.starServices.fetch(object, Page).subscribe((result) => {
            if (result != null) {
                for (let i = 0; i < result.data[0].data.length; i++)
                    result.data[0].data[i] = object.starServices.parseToDate(result.data[0].data[i]);
                result = {
                    data: result.data[0].data,
                    total: parseInt(result.data[0].data.length, 10)
                };
                if (object.isMaster)
                    object.starServices.showNotification('success', "Records retrieved : " + result.total);
                object.starServices.fixMultiSelectFields_result(object, result);
                object.executeQueryresult = result;
                this.helpMsg = "";
                if (object.paramConfig.DEBUG_FLAG)
                    console.log("object.executeQueryresult:", object.executeQueryresult);
                if (typeof result.data[object.CurrentRec] !== "undefined") {
                    object.form.patchValue(result.data[object.CurrentRec]);
                    object.form.markAsPristine();
                    object.form.markAsUntouched();
                }
                object.form.reset(result.data[object.CurrentRec], { emitEvent: object.emitEvent != null ? object.emitEvent : true });
                if (object.paramConfig.DEBUG_FLAG)
                    console.log("form servicereadCompletedOutput");
                if (object.paramConfig.DEBUG_FLAG)
                    console.log(object.readCompletedOutput);
                let paramConfig = {
                    "Name": "childRecords",
                    "Val": result.total
                };
                setParamConfig(paramConfig);
                if (result.total != 0)
                    object.isNew = false;
                if (object.disableEmitReadCompleted != true) {
                    if (result.total != 0) {
                        object.readCompletedOutput.emit(object.form.getRawValue());
                    }
                    else
                        object.clearCompletedOutput.emit([]);
                }
                if (typeof object.callBackFunction !== "undefined")
                    object.callBackFunction(result.data[0]);
            }
            this.setPrimarKeyNameArr(object, true);
        }, (err) => {
            //alert('error:' + err.message);
            this.showErrorMsg(object, err);
        });
    }
    execstarServices_form_inTrans(NewVal, object) {
        this.commitBody.push(NewVal);
        if (object.action != "REMOVE") {
            if (typeof object.executeQueryresult !== "undefined") {
                if (object.isNew == true) {
                    object.executeQueryresult.data.push(NewVal);
                    object.executeQueryresult.total = object.executeQueryresult.total + 1;
                }
                else {
                    object.executeQueryresult.data[object.CurrentRec] = NewVal;
                }
            }
            else {
                let NewValArr = [];
                NewValArr.push(NewVal);
                let result = {
                    data: NewValArr,
                    total: 1
                };
                object.executeQueryresult = result;
                object.CurrentRec = 0;
            }
            var data = [];
            data.push(NewVal);
            if (object.isNew == true) {
                object.isNew = false;
                if (typeof object.callBackPost_Insert !== "undefined") {
                    object.callBackPost_Insert.apply(object, data);
                }
            }
            else {
                if (typeof object.callBackPost_update !== "undefined") {
                    object.callBackPost_update.apply(object, data);
                }
            }
        }
        else {
            //REMOVE
            object.executeQueryresult.data.splice(object.CurrentRec, 1);
            object.executeQueryresult.total--;
            if (object.CurrentRec > 0) {
                object.CurrentRec--;
                object.form.reset(object.executeQueryresult.data[object.CurrentRec], { emitEvent: object.emitEvent != null ? object.emitEvent : true });
                if (object.isNew == true)
                    object.isNew = false;
            }
            else {
                object.form.reset(object.formInitialValues, { emitEvent: object.emitEvent != null ? object.emitEvent : true });
                object.isNew = true;
            }
            let NewVal1 = [];
            NewVal1.push(NewVal);
            if (typeof object.callBackRemoveAtt !== "undefined")
                object.callBackRemoveAtt(object, NewVal);
            if (typeof object.callBackPost_Remove !== "undefined") {
                // let NewVal1 = [];
                // NewVal1.push(NewVal);
                object.callBackPost_Remove.apply(object, NewVal1);
            }
        }
        if (object.action != "REMOVE") {
            object.form.reset(NewVal, { emitEvent: object.emitEvent != null ? object.emitEvent : true });
        }
        if (object.diableEmitSave == true) { }
        else
            object.saveCompletedOutput.emit(NewVal);
        if (object.isChild == true) {
            let paramConfig = {
                "Name": "childRecords",
                "Val": object.executeQueryresult.total
            };
            setParamConfig(paramConfig);
        }
        object.action = "";
        this.setPrimarKeyNameArr(object, true);
    }
    execstarServices_form(NewVal, object) {
        if (this.paramConfig.DEBUG_FLAG)
            console.log("NewVal:", NewVal);
        object.addToBody(NewVal);
        if (object.isNew == true) {
            let suffix_sql = { "_QUERY": "GET_LAST_ID" };
            object.addToBody(suffix_sql);
            //object.suffix_sql= undefined;
        }
        let Page = "&_trans=Y";
        if (this.inTrans) {
            this.execstarServices_form_inTrans(NewVal, object);
            return;
        }
        this.post(object, Page, object.Body).subscribe(Page => {
            object.Body = [];
            if (this.paramConfig.DEBUG_FLAG)
                console.log("object.executeQueryresult.data:object.CurrentRec:", object.CurrentRec, " object.action:", object.action, object.executeQueryresult, "Page:", Page);
            //if (typeof object.executeQueryresult !== "undefined")
            {
                if (this.paramConfig.DEBUG_FLAG)
                    console.log("here1");
                if (object.action != "REMOVE") {
                    if (this.paramConfig.DEBUG_FLAG)
                        console.log(object.executeQueryresult);
                    if (typeof object.executeQueryresult !== "undefined") {
                        if (this.paramConfig.DEBUG_FLAG)
                            console.log("object.isNew:" + object.isNew, "object.executeQueryresult:", object.executeQueryresult, "object.executeQueryresult.data:", object.executeQueryresult.data);
                        if (typeof object.executeQueryresult.data !== "undefined") {
                            if (object.isNew == true) {
                                object.executeQueryresult.data.push(NewVal);
                                object.executeQueryresult.total = object.executeQueryresult.total + 1;
                                //object.CurrentRec++;
                            }
                            else {
                                object.executeQueryresult.data[object.CurrentRec] = NewVal;
                            }
                        }
                        if (this.paramConfig.DEBUG_FLAG)
                            console.log("object.executeQueryresult post");
                        if (this.paramConfig.DEBUG_FLAG)
                            console.log(object.executeQueryresult);
                    }
                    else {
                        let NewValArr = [];
                        NewValArr.push(NewVal);
                        let result = {
                            data: NewValArr,
                            total: 1
                        };
                        object.executeQueryresult = result;
                        object.CurrentRec = 0;
                    }
                    this.showNotification('success', "Data saved successfully");
                    var data = [];
                    data.push(NewVal);
                    if (object.isNew == true) {
                        object.isNew = false;
                        if (typeof object.callBackPost_Insert !== "undefined") {
                            //object.callBackPost_Insert(object, NewVal);
                            this.checkLastId(object, NewVal, Page);
                            object.callBackPost_Insert.apply(object, data);
                        }
                    }
                    else {
                        if (typeof object.callBackPost_Update !== "undefined") {
                            object.callBackPost_Update.apply(object, data);
                        }
                    }
                }
                else {
                    //REMOVE
                    object.executeQueryresult.data.splice(object.CurrentRec, 1);
                    object.executeQueryresult.total--;
                    if (this.paramConfig.DEBUG_FLAG)
                        console.log("object.CurrentRec:" + object.CurrentRec);
                    if (object.CurrentRec > 0) {
                        object.CurrentRec--;
                        object.form.reset(object.executeQueryresult.data[object.CurrentRec], { emitEvent: object.emitEvent != null ? object.emitEvent : true });
                        if (object.isNew == true)
                            object.isNew = false;
                    }
                    else {
                        object.form.reset(object.formInitialValues, { emitEvent: object.emitEvent != null ? object.emitEvent : true });
                        object.isNew = true;
                        if (this.paramConfig.DEBUG_FLAG)
                            console.log("object.isNew:" + object.isNew);
                    }
                    let NewVal1 = [];
                    NewVal1.push(NewVal);
                    if (typeof object.callBackRemoveAtt !== "undefined")
                        object.callBackRemoveAtt(object, NewVal1);
                    if (typeof object.callBackPost_Remove !== "undefined") {
                        object.callBackPost_Remove.apply(object, NewVal1);
                    }
                }
            }
            if (this.paramConfig.DEBUG_FLAG)
                console.log("here2");
            if (object.action != "REMOVE") {
                object.starServices.fixMultiSelectFields_NewVal(object, NewVal);
                object.form.reset(NewVal, { emitEvent: object.emitEvent != null ? object.emitEvent : true });
            }
            if (object.diableEmitSave == true) { }
            else
                object.saveCompletedOutput.emit(NewVal);
            if (object.isChild == true) {
                let paramConfig = {
                    "Name": "childRecords",
                    "Val": object.executeQueryresult.total
                };
                setParamConfig(paramConfig);
            }
            object.action = "";
            this.setPrimarKeyNameArr(object, true);
        }, err => {
            //alert ('error:' + err.message);
            this.showErrorMsg(object, err);
        });
    }
    checkLastId(object, NewVal, Page) {
        console.log("checkLastId:NewVal:", NewVal, "Page:", Page, "PK_AUTO:", object.PK_AUTO);
        if (typeof object.PK_AUTO != "undefined" && object.PK_AUTO != "") {
            let data = Page.data;
            for (let i = 0; i < data.length; i++) {
                let rec = data[i];
                let query = rec.query;
                if (query.startsWith("GET_LAST_ID")) {
                    let dataArr = rec.data;
                    let dataRec = dataArr[0];
                    console.log("checkLastId:dataRec:", dataRec);
                    let keys = Object.keys(dataRec);
                    let val = dataRec[keys[0]];
                    console.log("checkLastId:val:", val);
                    NewVal[object.PK_AUTO] = val;
                }
            }
        }
    }
    saveChanges_form(form, object) {
        if (this.paramConfig.DEBUG_FLAG)
            console.log("this.form:invalid", object.form.invalid);
        if (this.paramConfig.DEBUG_FLAG)
            console.log('saveChanges_form : object.isNew :' + object.isNew);
        if (this.paramConfig.DEBUG_FLAG)
            console.log(object.componentConfig.routineAuth);
        if (object.componentConfig.routineAuth != null) {
            if (this.paramConfig.DEBUG_FLAG)
                console.log("authLevel:" + object.componentConfig.routineAuth.authLevel);
            if (object.componentConfig.routineAuth.authLevel != 2) {
                let dialogStruc = {
                    msg: this.readOnlyMsg,
                    title: "Warning",
                    info: null,
                    object: object,
                    action: this.OkActions,
                    callback: null
                };
                this.showConfirmation(dialogStruc);
                return;
            }
        }
        if (this.paramConfig.DEBUG_FLAG)
            console.log('saveChanges_form : object.form.dirty:', object.form.dirty, " object.isChild:", object.isChild, " object.form.invalid:", object.form.invalid, " object.form:", object.form);
        if ((!object.form.dirty) && object.isChild)
            return;
        if (object.form.invalid) {
            object.submitted = true;
            if (this.paramConfig.DEBUG_FLAG)
                console.log("object.form:", object.form);
            //this.showOkMsg(object, this.fieldsRequiredMsg, "Error"); // This was commented for Form Drag. Case change page and select a field 
            return;
        }
        let NewVal = {};
        //object.Body = [];   // only one transaction allowed in  form. Moved to form
        //NewVal =  form.value;
        //NewVal = Object.assign({}, form.value, {})
        NewVal = { ...form.value };
        if (this.paramConfig.DEBUG_FLAG)
            console.log("----- NewVal:");
        if (this.paramConfig.DEBUG_FLAG)
            console.log(NewVal);
        if (object.isNew == true)
            NewVal["_QUERY"] = object.insertCMD;
        else
            NewVal["_QUERY"] = object.updateCMD;
        //object.isNew = false;
        this.execstarServices_form(NewVal, object);
    }
    enterQueryAct_form(form, object) {
        object.CurrentRec = 0;
        object.executeQueryresult = [];
        object.executeQueryresult.result = 0;
        object.isSearch = true;
        object.isNew = false;
        if (object.paramConfig.DEBUG_FLAG)
            console.log('enterQuery : object.isSearch:' + object.isSearch);
        object.clearCompletedOutput.emit(object.formInitialValues);
        // object.img_gallery = [];
        // object.img_arr = [];
        object.form.reset(object.formInitialValues, { emitEvent: object.emitEvent != null ? object.emitEvent : true });
        object.starServices.setPrimarKeyNameArr(object, false);
        this.helpMsg = object.starServices.getNLS([], "HELP_ENTER_QUERY", this.enterQueryMsg);
    }
    setPrimarKeyNameArr(object, value) {
        if (typeof object.primarKeyReadOnlyArr !== "undefined") {
            let keys = Object.keys(object.primarKeyReadOnlyArr);
            for (let k = 0; k < keys.length; k++) {
                if (object.paramConfig.DEBUG_FLAG)
                    console.log("[keys[k]:", keys[k], " value:", value);
                object.primarKeyReadOnlyArr[keys[k]] = value;
            }
        }
    }
    enterQuery_form(form, object) {
        if (this.paramConfig.DEBUG_FLAG)
            console.log("test:dirty:", object.form.dirty);
        if (object.form.dirty == true) {
            let dialogStruc = {
                msg: this.saveChangesMsg,
                title: this.pleaseConfirmMsg,
                info: form,
                object: object,
                action: this.YesNoActions,
                callback: this.enterQueryAct_form
            };
            this.showConfirmation(dialogStruc);
        }
        else {
            this.enterQueryAct_form(form, object);
        }
    }
    onCancel_form(e, object) {
        //object.img_gallery = [];
        // object.img_arr = [];
        object.form.reset(object.formInitialValues, { emitEvent: object.emitEvent != null ? object.emitEvent : true });
        object.isSearch = false;
        object.isNew = true;
        object.clearCompletedOutput.emit(object.formInitialValues);
        object.executeQueryresult = [];
        object.executeQueryresult.result = 0;
        object.myFiles = [];
        object.CurrentRec = 0;
        object.FORM_TRIGGER_FAILURE = false;
        this.helpMsg = "";
    }
    showOkMsg(object, msg, severity) {
        let dialogStruc = {
            msg: msg,
            title: severity,
            info: null,
            object: object,
            action: this.OkActions,
            callback: null
        };
        this.showConfirmation(dialogStruc);
    }
    onRemove_form(form, object) {
        if (this.paramConfig.DEBUG_FLAG)
            console.log("object.isNew:", object.isNew);
        if (object.isNew == true) {
            this.onCancel_form(null, object);
            return;
        }
        if (this.paramConfig.DEBUG_FLAG)
            console.log("object.executeQueryresult:");
        if (this.paramConfig.DEBUG_FLAG)
            console.log(object.executeQueryresult);
        if ((typeof object.executeQueryresult !== "undefined") && (object.executeQueryresult.total == 0)) {
            this.showOkMsg(object, this.nothingToDeletelMsg, "Warning");
            return;
        }
        if (this.paramConfig.DEBUG_FLAG)
            console.log('onRemove : isChild ' + object.isChild + " object.isMaster:" + object.isMaster);
        let NewVal = form.getRawValue();
        if (this.paramConfig.DEBUG_FLAG)
            console.log(NewVal);
        if (this.paramConfig.DEBUG_FLAG)
            console.log("object.executeQueryresult:" + object.executeQueryresult);
        if (object.isChild == false) {
            var paramConfig = getParamConfig();
            if (this.paramConfig.DEBUG_FLAG)
                console.log(paramConfig);
            if (this.paramConfig.DEBUG_FLAG)
                console.log("paramConfig.childRecords:" + paramConfig.childRecords);
            if (typeof paramConfig.childRecords === "undefined") {
                paramConfig.childRecords = 0;
            }
            if ((paramConfig.childRecords != 0) && (object.isMaster == true)) {
                let dialogStruc = {
                    msg: this.deleteDetailMsg,
                    title: "Warning",
                    info: null,
                    object: object,
                    action: this.OkActions,
                    callback: null
                };
                this.showConfirmation(dialogStruc);
                return;
            }
        }
        if (this.paramConfig.DEBUG_FLAG)
            console.log(paramConfig);
        let dialogStruc = {
            msg: this.deleteConfirmMsg,
            title: this.pleaseConfirmMsg,
            info: form,
            object: object,
            action: this.YesNoActions,
            callback: this.Remove_formAct
        };
        this.showConfirmation(dialogStruc);
    }
    Remove_formAct(form, object) {
        if (object.paramConfig.DEBUG_FLAG)
            console.log("in Remove_formAct");
        let NewVal = {};
        NewVal = form.getRawValue();
        if (object.paramConfig.DEBUG_FLAG)
            console.log(NewVal);
        //object.form.reset(object.formInitialValues);
        object.action = "REMOVE";
        NewVal["_QUERY"] = object.deleteCMD;
        object.starServices.execstarServices_form(NewVal, object);
    }
    onNew_form(e, object) {
        if (object.paramConfig.DEBUG_FLAG)
            console.log("onNew: object.masterKey:", object.masterKey, { ...object.form.value });
        object.myFiles = [];
        // object.img_gallery = [];
        // object.img_arr = [];
        object.form.reset(object.formInitialValues, { emitEvent: object.emitEvent != null ? object.emitEvent : true });
        console.log("checking:", object.formInitialValues, object.form.value);
        object.clearCompletedOutput.emit(object.formInitialValues);
        object.isSearch = false;
        object.isNew = true;
        this.setPrimarKeyNameArr(object, false);
    }
    /******************* Grid functions  ********/
    addHandler_grid(object) {
        if (typeof object.masterKeyNameArr != "undefined") {
            if (object.isChild == true) {
                if (object.masterKeyArr[0] == "") {
                    this.showOkMsg(this, this.saveMasterMsg, "Error");
                    return;
                }
            }
            else {
                if (object.isChild == true) {
                    if (object.masterKey == "") {
                        this.showOkMsg(this, this.saveMasterMsg, "Error");
                        return;
                    }
                }
            }
        }
        if (object.paramConfig.DEBUG_FLAG)
            console.log("test41:object.gridInitialValues:", object.gridInitialValues, object.masterKeyNameArr, object.masterKeyArr, "editedRowIndex:", object.editedRowIndex, "isChild:", object.isChild);
        object.saveCurrent();
        this.setPrimarKeyNameArr(object, false);
        /* object.gridInitialValues.MODULE = object.masterKey;*/
        if ((typeof object.masterKeyNameArr != "undefined") && (object.masterKeyNameArr.length != 0)) {
            this.setPrimarKeyNameArr(object, false);
            if (object.isChild == true) {
                for (let i = 0; i < object.masterKeyNameArr.length; i++) {
                    let readOnly = "is" + object.masterKeyNameArr[i] + "readOnly";
                    if (object.primarKeyReadOnlyArr) {
                        object.primarKeyReadOnlyArr[readOnly] = true;
                    }
                    let exists = object.gridInitialValues[object.masterKeyNameArr[i]];
                    if (object.paramConfig.DEBUG_FLAG)
                        console.log("test42:object.gridInitialValues:exists:", exists, object.gridInitialValues);
                    if (exists != false) {
                        object.gridInitialValues[object.masterKeyNameArr[i]] = object.masterKeyArr[i];
                    }
                }
            }
            if (object.paramConfig.DEBUG_FLAG)
                console.log("test42:object.gridInitialValues:1:", object.gridInitialValues);
        }
        else {
            if (object.paramConfig.DEBUG_FLAG)
                console.log("test4:object.masterKeyName:", object.masterKeyName, object.masterKey);
            if (object.masterKeyName != "" && object.masterKey != "") {
                object.gridInitialValues[object.masterKeyName] = object.masterKey;
            }
            if (object.paramConfig.DEBUG_FLAG)
                console.log("test42:object.gridInitialValues:2:", object.gridInitialValues);
        }
        if (object.paramConfig.DEBUG_FLAG)
            console.log("test42:object.gridInitialValues:", object.gridInitialValues);
        object.closeEditor();
        object.formGroup = object.createFormGroupGrid(object.gridInitialValues);
        object.formGroup.setErrors({
            notUnique: true
        });
        if (object.paramConfig.DEBUG_FLAG)
            console.log("object.formGroup:", object.formGroup);
        object.isNew = true;
        object.grid.addRow(object.formGroup);
        //this.setPrimarKeyNameArr(object, false);
    }
    removeHandler_grid(sender, object) {
        //sender.cancelCell();
        let paramConfig = getParamConfig();
        if (object.paramConfig.DEBUG_FLAG)
            console.log("removeHandler_grid paramConfig:object.isMaster " + object.isMaster);
        if (object.paramConfig.DEBUG_FLAG)
            console.log(paramConfig);
        if ((paramConfig.childRecords != 0) && (object.isMaster == true)) {
            let dialogStruc = {
                msg: this.deleteDetailMsg,
                title: "Warning",
                info: null,
                object: object,
                action: this.OkActions,
                callback: null
            };
            this.showConfirmation(dialogStruc);
            return;
        }
        if (object.paramConfig.DEBUG_FLAG)
            console.log("object.editedRowIndex :", object.editedRowIndex, object.grid.data.data);
        if (typeof object.editedRowIndex !== "undefined") {
            let NewVal = {};
            //let grid_data = JSON.parse(JSON.stringify(object.grid.data));
            let grid_data = object.grid.data;
            if (object.paramConfig.DEBUG_FLAG)
                console.log("object.editedRowIndex :", grid_data);
            NewVal = grid_data.data[object.editedRowIndex];
            let curCMD = NewVal["_QUERY"];
            if (object.paramConfig.DEBUG_FLAG)
                console.log("check:NewVal:_QUERY", NewVal["_QUERY"]);
            let result1 = object.starServices.removeRec(object.grid.data, object.editedRowIndex);
            object.grid.data = result1;
            if (object.paramConfig.DEBUG_FLAG)
                console.log("check:NewVal:", NewVal);
            NewVal["_QUERY"] = object.deleteCMD;
            if (curCMD != object.insertCMD) {
                object.addToBody(NewVal);
                object.removedRec.push(NewVal);
            }
        }
        else
            object.cancelHandler();
    }
    saveCurrent_grid(object) {
        if (this.paramConfig.DEBUG_FLAG)
            console.log("saveCurrent_grid:object.formGroup:", object.formGroup);
        if (object.formGroup) {
            if (this.paramConfig.DEBUG_FLAG)
                console.log("saveCurrent_grid:object.formGroup:", object.formGroup);
            let NewVal = {};
            NewVal = Object.assign({}, object.formGroup.value);
            if (this.paramConfig.DEBUG_FLAG)
                console.log('check:dirty :', object.formGroup.dirty, " isNew:", object.isNew, " NewVal: ", NewVal);
            if (object.formGroup.dirty === true) {
                if (object.isNew == true) {
                    if (this.paramConfig.DEBUG_FLAG)
                        console.log("here1 NewVal", NewVal);
                    //let result = object.starServices.addRec(object.grid.data, NewVal) ;
                    // object.grid.data = result;
                    if (this.paramConfig.DEBUG_FLAG)
                        console.log(object.grid.data);
                    if (object.grid.data == null || typeof object.grid.data.data == "undefined")
                        object.grid.data = { data: [], total: 0 };
                    //object.grid.data.data.push(NewVal);
                    object.grid.data.data.splice(0, 0, NewVal);
                    NewVal["_QUERY"] = object.insertCMD;
                }
                else {
                    if (this.paramConfig.DEBUG_FLAG)
                        console.log('check:object.grid.data:', object.grid.data, " NewVal:", NewVal);
                    //NewVal = this.parseToDate(NewVal);
                    if (object.grid.data.data[object.editedRowIndex]._QUERY == object.insertCMD) {
                        NewVal["_QUERY"] = object.insertCMD;
                    }
                    else {
                        NewVal["_QUERY"] = object.updateCMD;
                    }
                    object.grid.data.data[object.editedRowIndex] = NewVal;
                    //let result1 = object.starServices.updateRec(object.grid.data , object.editedRowIndex, NewVal );
                    //object.grid.data = result1;
                }
                //object.addToBody(NewVal); // addToBody will be done at saveChanges_grid to avoid duplicte update since object.grid.data.data is getting updated
                if (this.paramConfig.DEBUG_FLAG)
                    console.log(object.grid.data);
            }
            if (this.paramConfig.DEBUG_FLAG)
                console.log("pre close");
            object.closeEditor();
            if (this.paramConfig.DEBUG_FLAG)
                console.log("post close");
        }
    }
    closeEditor_grid(object) {
        //console.log("object.formGroup:closeEditor_grid")
        object.grid.closeRow(object.editedRowIndex);
        object.isNew = false;
        object.editedRowIndex = undefined;
        object.formGroup = undefined;
        // grid.cancel;
        // object.grid.data = null;
        // object.clearCompletedOutput.emit(object.formInitialValues);
    }
    cancelHandler_grid(object) {
        object.closeEditor();
        object.isSearch = false;
        this.helpMsg_grid = "";
    }
    saveChanges_grid_inTrans(grid, object, NewVal) {
        this.commitBody.push(NewVal);
        if (object.isChild == true) {
            let gridRecords = object.grid.data.data.length;
            let paramConfig = {
                "Name": "childRecords",
                "Val": gridRecords
            };
            setParamConfig(paramConfig);
        }
        if (typeof object.callBackPost_Save !== "undefined") {
            let NewVal1 = [];
            NewVal1.push(NewVal);
            object.callBackPost_Save.apply(object, NewVal1);
        }
        this.setPrimarKeyNameArr(object, true);
        object.saveCompletedOutput.emit(NewVal);
        //object.saveCompletedOutput.emit(object.grid.data);
    }
    saveChanges_grid(grid, object) {
        if ((object.grid.data == null) || (typeof object.grid.data.data == "undefined")) {
            return;
        }
        let Error = false;
        if (this.paramConfig.DEBUG_FLAG)
            console.log("pre object.saveCurrent");
        object.saveCurrent();
        if (object.componentConfig.routineAuth != null) {
            if (this.paramConfig.DEBUG_FLAG)
                console.log("authLevel:" + object.componentConfig.routineAuth.authLevel);
            if (object.componentConfig.routineAuth.authLevel != 2) {
                let dialogStruc = {
                    msg: this.readOnlyMsg,
                    title: "Warning",
                    info: null,
                    object: object,
                    action: this.OkActions,
                    callback: null
                };
                this.showConfirmation(dialogStruc);
                return;
            }
        }
        let NewVal = [];
        for (let i = 0; i < object.grid.data.data.length; i++) {
            if (this.paramConfig.DEBUG_FLAG)
                console.log("check: object.grid.data.data[i]._QUERY:", object.grid.data.data[i]._QUERY);
            if (typeof object.grid.data.data[i]._QUERY != "undefined") {
                NewVal = object.grid.data.data[i];
                object.addToBody(NewVal);
            }
        }
        if (this.inTrans) {
            this.saveChanges_grid_inTrans(grid, object, NewVal);
            return;
        }
        if (this.paramConfig.DEBUG_FLAG)
            console.log("check: object.Body:", object.Body);
        if (object.Body.length != 0) {
            let Page = "&_trans=Y";
            this.post(object, Page, object.Body).subscribe(Page => {
                object.Body = [];
                //object.saveCompletedOutput.emit(object.grid.data);
                object.saveCompletedOutput.emit(NewVal);
                for (let i = object.grid.data.data.length - 1; i >= 0; i--) {
                    if (typeof object.grid.data.data[i]._QUERY != "undefined") {
                        object.grid.data.data[i]._QUERY_DONE = object.grid.data.data[i]._QUERY;
                        delete object.grid.data.data[i]._QUERY;
                    }
                    if (this.paramConfig.DEBUG_FLAG)
                        console.log("check: object.grid.data.data[i]._QUERY:", object.grid.data.data[i]._QUERY);
                }
                if (this.paramConfig.DEBUG_FLAG)
                    console.log("object.grid.data.data:", object.grid.data.data);
                if (this.paramConfig.DEBUG_FLAG)
                    console.log("object.grid.data.data:.length", object.grid.data.data.length);
                if (object.isChild == true) {
                    let gridRecords = object.grid.data.data.length;
                    let paramConfig = {
                        "Name": "childRecords",
                        "Val": gridRecords
                    };
                    setParamConfig(paramConfig);
                }
                this.showNotification('success', "Data saved successfully");
                if (typeof object.callBackPost_Save !== "undefined") {
                    let NewVal1 = [];
                    NewVal1.push(NewVal);
                    object.callBackPost_Save.apply(object, NewVal1);
                }
                this.setPrimarKeyNameArr(object, true);
                // if (object.diableEmitSave == true) 
                //     {}
                //   else
                //object.saveCompletedOutput.emit(object.grid.data);
            }, err => {
                for (let i = object.Body.length - 1; i >= 0; i--) {
                    if (object.Body[i]._QUERY != object.deleteCMD) {
                        object.Body.splice(i, 1);
                    }
                }
                if (this.paramConfig.DEBUG_FLAG)
                    console.log("err:", err);
                let errMsg = this.getErrorMsg(err);
                this.showNotification("error", "error:" + errMsg);
                Error = true;
            });
        }
        else {
            if (this.paramConfig.DEBUG_FLAG)
                console.log("object.isMaster:" + object.isMaster);
            if (!object.isMaster)
                this.showNotification('warning', "No changes to save");
        }
        if (!Error) {
            object.saveCompletedOutput.emit(NewVal);
            //object.saveCompletedOutput.emit(object.grid.data);
        }
    }
    getErrorMsg(err) {
        let errMsg = "";
        if (typeof err.error.error != "undefined") {
            errMsg = err.error.error;
        }
        else
            errMsg = err.error;
        return errMsg;
    }
    executeQuery_grid(grid, object) {
        if (this.paramConfig.DEBUG_FLAG)
            console.log("object.grid:", object.grid);
        if (typeof grid == "undefined" || typeof object.grid == "undefined")
            return;
        let dirty = false;
        //if (this.paramConfig.DEBUG_FLAG) console.log ("executeQuery_grid:" + object.Body.length + " " + object.grid.isEditing(), "object.Body:",object.Body);
        //if (this.paramConfig.DEBUG_FLAG) console.log("object.Body:",object.Body)
        if ((object.Body.length != 0) || object.grid.isEditing() == true) {
            dirty = true;
        }
        if (dirty == true) {
            let dialogStruc = {
                msg: this.saveChangesMsg,
                title: this.pleaseConfirmMsg,
                info: grid,
                object: object,
                action: this.YesNoActions,
                callback: this.executeQueryAct_grid
            };
            this.showConfirmation(dialogStruc);
        }
        else {
            this.executeQueryAct_grid(grid, object);
        }
    }
    executeQueryAct_grid(grid, object) {
        let paramConfig = {
            "Name": "childRecords",
            "Val": 0
        };
        setParamConfig(paramConfig);
        if (object.paramConfig.DEBUG_FLAG)
            console.log("  " + object.masterKeyName, object.masterKeyArr);
        if (object.paramConfig.DEBUG_FLAG)
            console.log("object.isChild:", object.isChild, " object.isSearch :", object.isSearch);
        if (object.isChild == true) {
            if (object.isSearch != true) {
                grid = object.gridInitialValues;
                if (object.paramConfig.DEBUG_FLAG)
                    console.log("here1");
                if ((typeof object.masterKeyNameArr != "undefined") && (object.masterKeyNameArr.length != 0)) {
                    if (object.paramConfig.DEBUG_FLAG)
                        console.log("here2");
                    for (let i = 0; i < object.masterKeyNameArr.length; i++) {
                        let exists = object.masterKeyNameArr[i] in object.gridInitialValues;
                        //let exists = object.gridInitialValues[object.masterKeyNameArr[i]]
                        if (object.paramConfig.DEBUG_FLAG)
                            console.log("here3", exists, object.gridInitialValues, object.masterKeyNameArr[i], object.masterKeyArr[i]);
                        if (exists != false) {
                            if (object.paramConfig.DEBUG_FLAG)
                                console.log("here4");
                            object.gridInitialValues[object.masterKeyNameArr[i]] = object.masterKeyArr[i];
                        }
                    }
                }
                else {
                    object.gridInitialValues[object.masterKeyName] = object.masterKey;
                }
                //grid[object.masterKeyName] = object.masterKey;
                if (object.paramConfig.DEBUG_FLAG)
                    console.log("object.masterKeyName:" + object.masterKeyName);
                if (object.paramConfig.DEBUG_FLAG)
                    console.log(grid);
                object.isSearch = true;
                if (object.paramConfig.DEBUG_FLAG)
                    console.log("---Searching:");
                if (object.paramConfig.DEBUG_FLAG)
                    console.log(grid);
            }
        }
        if (object.paramConfig.DEBUG_FLAG)
            console.log('------------executeQuery object.isSearch :' + object.isSearch + "  object.isChild:" + object.isChild);
        // if (object.paramConfig.DEBUG_FLAG) console.log(object.grid);
        let Page = "&_query=" + object.getCMD;
        if (object.isSearch == true) {
            if (object.paramConfig.DEBUG_FLAG)
                console.log('object.formGroup:', object.formGroup, 'typeof(grid):', typeof (grid.data), ' grid:', grid);
            let NewVal = "";
            if (typeof object.formGroup == "undefined") {
                // a child component
                if (object.paramConfig.DEBUG_FLAG)
                    console.log('grid:', typeof (grid.data));
                if (typeof grid.data == "object")
                    NewVal = grid.data; // passed empty grid
                else
                    NewVal = grid; // used the passed grid param
            }
            else
                NewVal = object.formGroup.value;
            object.isSearch = false;
            if ((typeof object.formattedWhere === "undefined") || (object.formattedWhere == null)) {
                Page = Page + object.starServices.formatWhere(NewVal);
            }
            else {
                if (object.paramConfig.DEBUG_FLAG)
                    console.log("object.formattedWhere", object.formattedWhere);
                object.formattedWhere = this.processformattedWhere(object, object.formattedWhere);
                Page = Page + object.formattedWhere;
                object.formattedWhere = null;
            }
            if ((typeof object.OrderByClause !== "undefined") && (object.OrderByClause != ""))
                Page = Page + "&_ORDERBY=" + object.OrderByClause;
        }
        Page = encodeURI(Page);
        //if (object.paramConfig.DEBUG_FLAG) console.log('Page:' + Page);
        object.grid.loading = true;
        object.closeEditor();
        object.executeQueryresult = [];
        object.executeQueryresult.result = 0;
        object.CurrentRec = 0;
        object.grid.data = null;
        object.starServices.fetch(object, Page).subscribe((result) => {
            if (result != null) {
                let actualResult = Object.assign({}, result, {});
                if (object.paramConfig.DEBUG_FLAG)
                    console.log("------result.data[0].data :");
                //if (object.paramConfig.DEBUG_FLAG) console.log(result.data[0].data);
                this.helpMsg_grid = "";
                for (let i = 0; i < result.data[0].data.length; i++) {
                    result.data[0].data[i] = object.starServices.parseToDate(result.data[0].data[i]);
                    if (result.data[0].data[i]._QUERY != "undefined") {
                        delete result.data[0].data[i]._QUERY;
                        delete result.data[0].data[i]._QUERY_DONE;
                    }
                }
                if (object.paramConfig.DEBUG_FLAG)
                    console.log(result.data[0].data[0]);
                object.Body = [];
                result = {
                    data: result.data[0].data,
                    total: parseInt(result.data[0].data.length, 10)
                };
                if (object.isMaster)
                    object.starServices.showNotification('success', "Records retrieved : " + result.total);
                object.executeQueryresult = result;
                if (object.isChild == true) {
                    let paramConfig = {
                        "Name": "childRecords",
                        "Val": result.total
                    };
                    setParamConfig(paramConfig);
                }
            }
            object.grid.loading = false;
            object.grid.data = result;
            if (typeof object.callBackFunction !== "undefined")
                object.callBackFunction(result);
            if (object.paramConfig.DEBUG_FLAG)
                console.log("grid servicereadCompletedOutput");
            if (object.paramConfig.DEBUG_FLAG)
                console.log(object.grid.data.data);
            if (object.paramConfig.DEBUG_FLAG)
                console.log("result length:" + result.length);
            if (object.paramConfig.DEBUG_FLAG)
                console.log("result total:" + result.total);
            if (object.paramConfig.DEBUG_FLAG)
                console.log("object.performReadCompletedOutput:" + object.performReadCompletedOutput);
            if ((typeof object.performReadCompletedOutput !== "undefined") || (object.performReadCompletedOutput == false)) {
                if (object.paramConfig.DEBUG_FLAG)
                    console.log("here1");
            }
            else {
                if (object.paramConfig.DEBUG_FLAG)
                    console.log("here2");
                if (object.disableEmitReadCompleted != true) {
                    if (result.total != 0)
                        object.readCompletedOutput.emit(object.grid.data.data[0]);
                    else
                        object.readCompletedOutput.emit([]);
                }
            }
            object.starServices.setPrimarKeyNameArr(object, true);
        }, (err) => {
            object.Body = [];
            object.grid.loading = false;
            object.grid.data = null;
            if (object.paramConfig.DEBUG_FLAG)
                console.log("err:", err);
            object.starServices.showNotification("error", "error:" + err.error.error.code);
        });
        object.docClickSubscription = object.renderer.listen('document', 'click', object.onDocumentClick.bind(object));
    }
    enterQueryAct_grid(grid, object) {
        object.grid.cancel;
        object.grid.data = null;
        object.Body = [];
        object.isSearch = true;
        if (object.paramConfig.DEBUG_FLAG)
            console.log("object.isSearch:" + object.isSearch);
        object.addHandler();
        object.clearCompletedOutput.emit(object.formInitialValues);
        object.starServices.setPrimarKeyNameArr(object, false);
        object.starServices.helpMsg_grid = this.getNLS([], "HELP_ENTER_QUERY", this.enterQueryMsg);
    }
    enterQuery_grid(grid, object) {
        let dirty = false;
        if (this.paramConfig.DEBUG_FLAG)
            console.log("pre object.saveCurrent");
        object.saveCurrent();
        let modified = false;
        if (this.paramConfig.DEBUG_FLAG)
            console.log("object.grid.data");
        if (object.grid.data != null) {
            if (typeof object.grid.data.data !== "undefined") {
                for (let i = 0; i < object.grid.data.data.length; i++) {
                    if (this.paramConfig.DEBUG_FLAG)
                        console.log("check: i:", i, " object.grid.data.data[i]._QUERY:", object.grid.data.data[i]._QUERY);
                    if (typeof object.grid.data.data[i]._QUERY !== "undefined") {
                        modified = true;
                    }
                }
            }
        }
        if (this.paramConfig.DEBUG_FLAG)
            console.log("object.saveCurrent :" + object.Body.length + " " + object.grid.isEditing());
        if (object.Body.length != 0) {
            modified = true;
        }
        if ((modified == true) || object.grid.isEditing() == true) {
            dirty = true;
        }
        if (dirty == true) {
            let dialogStruc = {
                msg: this.saveChangesMsg,
                title: this.pleaseConfirmMsg,
                info: grid,
                object: object,
                action: this.YesNoActions,
                callback: this.enterQueryAct_grid
            };
            this.showConfirmation(dialogStruc);
        }
        else {
            this.enterQueryAct_grid(grid, object);
        }
    }
    setStrAuth(user, password) {
        this.StrAuth = user + ":" + password;
        this.StrAuth = btoa(this.StrAuth);
        this.StrAuth = "Basic " + this.StrAuth;
    }
    isASCII(str) {
        return /^[\x00-\x7F]*$/.test(str);
    }
    login(object, user, password) {
        if (!this.isASCII(user)) {
            this.showNotification("error", "ِrror: " + "Not a valid User Name");
        }
        this.paramConfig = getParamConfig();
        //console.log("this.paramConfig:", this.paramConfig)
        this.setStrAuth(user, password);
        //if (this.paramConfig.DEBUG_FLAG) console.log("this.StrAuth:" + this.StrAuth);
        let Page = "";
        let success = false;
        const md5 = new Md5();
        let pass = md5.appendStr(password).end();
        user = user.toUpperCase().trim();
        user = user.trim();
        let NewVal = {
            "USERNAME": user,
            "PASSWORD": pass
        };
        NewVal["_QUERY"] = "VERIFY_ADM_USER";
        object.Body = [];
        object.addToBody(NewVal);
        let paramConfig = {
            "Name": "USERNAME",
            "Val": user
        };
        setParamConfig(paramConfig);
        this.sessionParams["USERNAME"] = user;
        this.post(object, Page, object.Body).subscribe(result => {
            if (typeof result.data[0].data[0] !== "undefined") {
                if (this.paramConfig.DEBUG_FLAG)
                    console.log("Object in login HF", object.Body, user);
                if (result.data[0].data[0].USERNAME == user) {
                    this.USERNAME = user;
                    object.Body = [];
                    let paramConfig = {
                        "Name": "USER_INFO",
                        "Val": result.data[0].data[0]
                    };
                    setParamConfig(paramConfig);
                    this.sessionParams["USER_INFO"] = result.data[0].data[0];
                    let adapter = result.data[0]['_DB_AdApTor'];
                    if (typeof adapter !== "undefined") {
                        this.sessionParams["DB_ADAPTOR"] = adapter.toUpperCase();
                    }
                    this.USER_INFO = result.data[0].data[0];
                    if ((this.sessionParams.USER_INFO.MASTER_DB != "") && (typeof this.sessionParams.USER_INFO.MASTER_DB !== "undefined")) {
                        this.MASTER_DB = this.sessionParams.USER_INFO.MASTER_DB;
                        this.USERNAME_DB = this.sessionParams.USER_INFO.MASTER_DB;
                    }
                    success = true;
                    this.loadRules(object);
                    if ((object.testEKYC) || (object.navTo.length != 0) || (object.shareTo.length != 0)) {
                        object.loginCompletedHandler(null);
                    }
                    else
                        object.loginCompleted.emit(this);
                }
            }
            if (!success)
                this.showNotification("error", "error:" + "Wrong user or password");
        }, err => {
            object.Body = [];
            this.showNotification("error", "error:" + "Wrong user or password");
        });
    }
    addUserInfo(object, username, value) {
        this.paramConfig = getParamConfig();
        let Page = "";
        let success = false;
        username = username.toUpperCase().trim();
        username = username.trim();
        let d = new Date();
        let dateIso = this.FORMAT_ISO(d);
        let body = [
            {
                "_QUERY": "INSERT_ADM_USER_INFORMATION",
                "USERNAME": username,
                "EMAIL": value.email,
                "FULLNAME": value.firstName + " " + value.lastName,
                "FLEX_FLD1": value.id,
                "GROUPNAME": object.keycLoak.KEYCLOAK_USER_GROUP,
                "LOGDATE": new Date(),
                "LOGNAME": username
            }
        ];
        this.post(object, Page, body).subscribe(result => {
            success = true;
            console.log("result:insert:", result.data[0]);
            if (typeof result.data[0] !== "undefined") {
                console.log("result:", result.data[0]);
                success = true;
                this.userAdded = true;
                this.getUserInfo(object, username, value);
            }
            if (!success) {
                let errorMsg = "Not able to add " + username + " tp  DB";
                let dialogStruc = {
                    msg: errorMsg,
                    title: "Error",
                    info: null,
                    object: object,
                    action: null,
                    callback: null
                };
                this.showConfirmation(dialogStruc);
                // object.logoff(3000);
            }
        }, err => {
            object.Body = [];
            let errorMsg = " Error connecting to  DB";
            let dialogStruc = {
                msg: errorMsg,
                title: "Error",
                info: null,
                object: object,
                action: null,
                callback: null
            };
            this.showConfirmation(dialogStruc);
            // object.logoff(3000);
        });
    }
    getUserInfo(object, user, value) {
        this.paramConfig = getParamConfig();
        let Page = "";
        let success = false;
        user = user.toUpperCase().trim();
        user = user.trim();
        let NewVal = {
            "USERNAME": user
        };
        NewVal["_QUERY"] = "GET_ADM_USER_INFORMATION";
        object.Body = [];
        object.addToBody(NewVal);
        let paramConfig = {
            "Name": "USERNAME",
            "Val": user
        };
        setParamConfig(paramConfig);
        this.sessionParams["USERNAME"] = user;
        this.post(object, Page, object.Body).subscribe(result => {
            if (typeof result.data[0].data[0] !== "undefined") {
                console.log("result:get:", result.data[0].data[0]);
                if (result.data[0].data[0].USERNAME == user) {
                    this.USERNAME = user;
                    object.Body = [];
                    let paramConfig = {
                        "Name": "USER_INFO",
                        "Val": result.data[0].data[0]
                    };
                    setParamConfig(paramConfig);
                    this.sessionParams["USER_INFO"] = result.data[0].data[0];
                    let adapter = result.data[0]['_DB_AdApTor'];
                    if (typeof adapter !== "undefined") {
                        this.sessionParams["DB_ADAPTOR"] = adapter.toUpperCase();
                    }
                    this.USER_INFO = result.data[0].data[0];
                    if ((this.sessionParams.USER_INFO.MASTER_DB != "") && (typeof this.sessionParams.USER_INFO.MASTER_DB !== "undefined")) {
                        this.MASTER_DB = this.sessionParams.USER_INFO.MASTER_DB;
                    }
                    success = true;
                    this.loadRules(object);
                    if ((object.testEKYC) || (object.navTo.length != 0)) {
                        object.loginCompletedHandler(null);
                    }
                    else
                        object.loginCompletedHandler(this);
                }
            }
            console.log("result:success:", success);
            if (!success) {
                if (!this.userAdded)
                    this.addUserInfo(object, user, value);
                else {
                    // let errorMsg = user + "is not defined in STAR DB";
                    // let dialogStruc = {
                    //   msg: errorMsg,
                    //   title: "Error",
                    //   info: null,
                    //   object: object,
                    //   action: null,
                    //   callback: null
                    // };
                    // this.showConfirmation(dialogStruc);
                    // object.logoff(3000);
                }
            }
        }, err => {
            object.Body = [];
            let errorMsg = " Error contacting DB to verify user " + user;
            let dialogStruc = {
                msg: errorMsg,
                title: "Error",
                info: null,
                object: object,
                action: null,
                callback: null
            };
            this.showConfirmation(dialogStruc);
            //object.logoff(3000);
        });
    }
    /////////////////
    MAKE_DATE(val) {
        try {
            var d = new Date(val);
        }
        catch (e) {
            console.log("Error parsing :2:", val);
            return 0;
        }
        console.log("correct parsing :", val, d);
        var dateIso = d.toISOString();
        var dateIsoArr = dateIso.split(".");
        dateIso = dateIsoArr[0] + ".000Z";
        console.log("correct parsing :", val, d, dateIso);
        return dateIso;
    }
    FORMAT_ISO(d) {
        var dateIso = d.toISOString();
        var dateIsoArr = dateIso.split("T");
        dateIso = dateIsoArr[0] + " " + dateIsoArr[1];
        dateIso = dateIso.substr(0, 19);
        return dateIso;
    }
    LogRule(object, ruleLog, msgResponse, status) {
        function prepareDataForDB(dataIn) {
            let dataOut = JSON.stringify(dataIn);
            //console.log("dataIn:", dataIn, " dataOut:", dataOut);
            dataOut = dataOut.split("'").join('"');
            return dataOut;
        }
        if (typeof msgResponse == "object")
            msgResponse = JSON.stringify(msgResponse);
        if (this.paramConfig.DEBUG_FLAG)
            console.log("-----msgResponse:", msgResponse, "ruleLog:", ruleLog);
        let db = ruleLog.db;
        let d = new Date();
        let dateIso = this.FORMAT_ISO(d);
        let RULE_KEY = ruleLog.rule.RULE_KEY;
        let array = RULE_KEY.split(",");
        //let ruleKey = {};
        let ruleKey = "";
        let ruleKeyName = "";
        for (let i = 0; i < array.length; i++) {
            let elem = array[i];
            let elem_value = ruleLog.queryData[elem];
            if (typeof elem_value !== "undefined") {
                //ruleKey[elem] = elem_value;
                if (ruleKey != "") {
                    ruleKey = ruleKey + "_";
                }
                ruleKey = ruleKey + elem_value;
                if (ruleKeyName != "") {
                    ruleKeyName = ruleKeyName + "_";
                }
                ruleKeyName = ruleKeyName + elem;
            }
        }
        if (this.paramConfig.DEBUG_FLAG)
            console.log("ruleKey:", ruleKey, " ruleKeyName:", ruleKeyName);
        if (this.paramConfig.DEBUG_FLAG)
            console.log("RULE_KEY:", RULE_KEY);
        var templateName = ruleLog.queryData.TEMPLATE_NAME;
        let queryData = prepareDataForDB(ruleLog.queryData);
        //let bodyToSend = prepareDataForDB(ruleLog.bodyToSend);
        let bodyToSend = ruleLog.bodyToSend;
        let parametersToSend = prepareDataForDB(ruleLog.parametersToSend);
        // let ruleKeyStr = prepareDataForDB(ruleKey);
        let msgResponseStr = prepareDataForDB(msgResponse);
        if (this.paramConfig.DEBUG_FLAG)
            console.log("queryData:" + queryData);
        //
        let userName = object.starServices.sessionParams.USER_INFO.Name;
        object.Body = [];
        let Page = "";
        let NewVal = {
            "RULE_KEY": ruleKey,
            "RULE_KEY_NAME": ruleKeyName,
            "STATUS": status,
            "MODULE": ruleLog.rule.MODULE,
            "RULE_ID": ruleLog.rule.RULE_ID,
            "ACTION_ID": ruleLog.action.ACTION_ID,
            "SENT_DATE": ruleLog.sentDate,
            "MSG_RECEIVED": queryData,
            "PARAMETER_SENT": parametersToSend,
            "BODY_SENT": bodyToSend,
            "MSG_RESPONSE": msgResponseStr,
            "LOGDATE": dateIso,
            "LOGNAME": userName,
            "TEMPLATE_NAME": templateName
        };
        NewVal["_QUERY"] = "INSERT_ADM_RULE_LOG";
        //if (this.paramConfig.DEBUG_FLAG) console.log("test:NewVal:", NewVal)
        //if (this.paramConfig.DEBUG_FLAG) console.log("test:object.Body:", object.Body)
        object.addToBody(NewVal);
        this.post(object, Page, object.Body).subscribe(result => {
            if (this.paramConfig.DEBUG_FLAG)
                console.log("test:result.data:", result.data);
            object.Body = [];
        }, err => {
            object.Body = [];
            this.showNotification("error", "error:" + err.message);
        });
    }
    performHttpPost(object, bodyToSend, parametersToSend, sendTo, queryData, rule, action, Trigger, hostDef, hostMapDef, headerParam, pathExtra) {
        var valid = false;
        let error = 0;
        let msg = "";
        let options = {
            host: '',
            path: '',
            port: 80,
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                //'Content-Type': 'text/xml; charset=utf-8',
                "authorization": ""
            }
        };
        // if (this.paramConfig.DEBUG_FLAG) console.log("---------------req.url:",req.url);
        // if (this.paramConfig.DEBUG_FLAG) console.log("---------------pathname:",req._parsedUrl.pathname);
        // if (this.paramConfig.DEBUG_FLAG) console.log("---------------path:",req._parsedUrl.path);
        let d = new Date();
        let dateIso = this.FORMAT_ISO(d);
        if (hostDef == null)
            hostDef = "";
        let ruleLog = {
            rule: rule,
            action: action,
            queryData: queryData,
            bodyToSend: bodyToSend,
            parametersToSend: parametersToSend,
            //  "db": db,
            sentDate: dateIso,
            hostDef: hostDef
        };
        if (sendTo == "WF") {
            let url = this.BASE_URL;
            options.headers.authorization = this.StrAuth;
            valid = true;
        }
        else {
            if (hostDef != "") {
                let path = "/" + hostDef.PATH;
                if (parametersToSend != "")
                    path = path + parametersToSend;
                path = path + pathExtra;
                let host = hostDef.HOST;
                let port = parseInt(hostDef.PORT);
                let method = hostDef.HTTP_METHOD;
                options.host = host;
                options.port = port;
                options.path = path;
                options.method = method;
                // let url = "http://" + host + ":" + port  + path + parametersToSend ;
                let url = hostDef.URL;
                //					options.headers.authorization = req.headers.authorization;
                //bodyToSend = "";
                valid = true;
            }
            else {
                error = 100;
                msg = "undefined Host :" + sendTo;
                this.LogRule(object, ruleLog, msg, 100);
            }
        }
        if (this.paramConfig.DEBUG_FLAG)
            console.log("here2:valid:", valid);
        if (valid) {
            if (this.paramConfig.DEBUG_FLAG)
                console.log("options:", options);
            if (this.paramConfig.DEBUG_FLAG)
                console.log("------bodyToSend:" + bodyToSend, "  Trigger:", Trigger);
            let keys = Object.keys(headerParam);
            for (let i = 0; i < keys.length; i++) {
                if (this.paramConfig.DEBUG_FLAG)
                    console.log(keys[i] + " " + headerParam[keys[i]]);
                if (headerParam[keys[i]] != null) {
                    options.headers[keys[i]] = headerParam[keys[i]];
                    //screenConfig[ keys[i] ] = componentConfig[ keys[i] ];
                }
            }
            if (this.paramConfig.DEBUG_FLAG)
                console.log("here2:action.ACTION_CODE:", action.ACTION_CODE);
            if (action.ACTION_CODE == "SEND_WAIT") {
                /*
                let sendingLib = "request";
                status = 1;
                let headers  =  {headers:options.headers};
                if (this.paramConfig.DEBUG_FLAG) console.log("headers:", headers);
                let url = "http://" + host + ":" + port  + path + parametersToSend ;
                if (this.paramConfig.DEBUG_FLAG) console.log("---url:", url);
                if (method == "GET")
                {
                  let res = request(method, url, headers);
                  let result = JSON.parse(res.getBody('utf8'));
                }
                else
                if (method == "POST")
                {
        
                  let dataForSync = { body : bodyToSend, headers:options.headers};
                  let res = request(method, url, dataForSync);
                  if (this.paramConfig.DEBUG_FLAG) console.log("res:", res);
                  let statusCode = res.statusCode;
                  let msgResponse ="";
                  if (statusCode == 200)
                  {
                    let contentType = res.headers['content-type'];
        
                    let msgResponse = res.getBody('utf8');
                    if (this.paramConfig.DEBUG_FLAG) console.log("statusCode:", statusCode," headers:", headers,  " msgResponse:", msgResponse);
                    let n = contentType.search("json");
                    if (n != -1)
                      let result = JSON.stringify(JSON.parse(msgResponse));
                    else
                      let result = msgResponse;
                    if (this.paramConfig.DEBUG_FLAG) console.log("result:" +  result);
                  }
                  else
                  {
                    error = statusCode;
                    let msgResponse = res.body.toString();
                    msg = msgResponse;
                  }
        
                }
                if (error == 0)
                {
                  if ( (hostMapDef != null) &&  (hostMapDef.XSLT_RECEIVE != null) && (hostMapDef.XSLT_RECEIVE != "") )
                  {
                    {
                      //result = xsltmap.mapDataOut(result, hostMapDef.XSLT_RECEIVE);
                      //if (this.paramConfig.DEBUG_FLAG) console.log("result:", result);
        
                    }
                  }
        
                  let status = extractStatus (ruleLog, result);
                  LogRule(ruleLog, result, status );
                  error = status;
                  if (status != 0)
                    msg = result;
                }
                */
            }
            else {
                //async
                function extractStatus(ruleLog, msgResponse) {
                    let successMsg = ruleLog.hostDef.SUCCESS_MSG;
                    //console.log("-------msgResponse:", msgResponse, successMsg);
                    let array = successMsg.split(":");
                    let field = array[0];
                    let value = array[1];
                    let msgResponseArr = msgResponse;
                    msgResponse = JSON.stringify(msgResponseArr);
                    //console.log("field:", field, " value:", value, " msgResponseArr:", msgResponseArr);
                    //console.log("-------msgResponseArr[field]:", msgResponseArr[field], value);
                    let status = 1;
                    if (msgResponseArr[field] == value)
                        status = 0;
                    return status;
                }
                function extractResponseData(msgResponse, responseDataID) {
                    function getKey(Elm, elmVal) {
                        let keys = Object.keys(Elm);
                        let k = 0;
                        let elmObj;
                        while (k < keys.length) {
                            //console.log("[keys[k]:", keys[k]);
                            if (keys[k] == elmVal) {
                                let elmName = keys[k];
                                elmObj = Elm[elmName];
                                //console.log("elmObj:", elmObj);
                                break;
                            }
                            k++;
                        }
                        return elmObj;
                    }
                    let array = responseDataID.split(".");
                    for (let i = 0; i < array.length; i++) {
                        let returnKey = getKey(msgResponse, array[i]);
                        //console.log("returnKey.length:", returnKey.length);
                        if (returnKey.length == 1)
                            msgResponse = returnKey[0];
                        else
                            msgResponse = returnKey;
                        //console.log("msgResponse:", msgResponse);
                    }
                    return msgResponse;
                }
                /*
                function  handleResponseEnd(ruleLog, msgResponse){
                  let status = extractStatus (ruleLog, msgResponse);
                  this.LogRule(ruleLog, msgResponse, status);
        
        
                  //	.RULE_ID + "," +  action.ACTION_ID + "," + users.getUserName() + ","  + dateIso;
                  if (this.paramConfig.DEBUG_FLAG) console.log("-------handleResponse:status:" ,  status);
                }
                */
                function getBody(msgResponse) {
                    //if (this.paramConfig.DEBUG_FLAG) console.log("msgResponse:", msgResponse)
                    //if (this.paramConfig.DEBUG_FLAG) console.log("msgResponse:body", msgResponse.body)
                    return msgResponse.body;
                }
                /*
                      let handleResponse = function(response,  ruleLog){
                        let msgResponse = ''
                        response.on('data', function (chunk) {
                        msgResponse += chunk;
                        });
                        response.on('end', function () {
                         handleResponseEnd(ruleLog, msgResponse);
                         });
              
                      }
                      */
                let headers = {
                    headers: new HttpHeaders()
                        .set('Authorization', this.StrAuth)
                        .set('Content-Type', "application/json")
                };
                if (this.paramConfig.DEBUG_FLAG)
                    console.log("here2:headers:", headers);
                if (bodyToSend == "")
                    bodyToSend = null;
                let bodyToSendKSON = JSON.parse(bodyToSend);
                if (this.paramConfig.DEBUG_FLAG)
                    console.log("here2:bodyToSendKSON:", bodyToSendKSON);
                let url = hostDef.URL + parametersToSend;
                if (this.paramConfig.DEBUG_FLAG)
                    console.log("---url:", url);
                const request = new HttpRequest(options.method, url, bodyToSendKSON, headers);
                if (this.paramConfig.DEBUG_FLAG)
                    console.log("------------request:", request, " bodyToSendKSON:", bodyToSendKSON);
                let msgBodyAll;
                this.syncFlag = 1;
                //https://developpaper.com/getting-started-with-angular-http-client/
                this.http.request(request)
                    .subscribe((response) => {
                    if (this.paramConfig.DEBUG_FLAG)
                        console.log(" call successful value returned in body", response);
                    let msgBody = getBody(response);
                    if (typeof msgBody !== "undefined") {
                        msgBodyAll = msgBody;
                        if (this.paramConfig.DEBUG_FLAG)
                            console.log("msgBodyAll:", msgBodyAll);
                    }
                }, error => {
                    if (this.paramConfig.DEBUG_FLAG)
                        console.log("PUT call in error:", error);
                    this.syncFlag = 0;
                    this.showNotification("error", "error calling: " + url + ":" + error.error.error);
                }, () => {
                    if (this.paramConfig.DEBUG_FLAG)
                        console.log("The  observable is now completed:msgBodyAll:", msgBodyAll);
                    if (typeof msgBodyAll !== "undefined") {
                        let status = extractStatus(ruleLog, msgBodyAll);
                        if (this.paramConfig.DEBUG_FLAG)
                            console.log("-------uleLog.rule:", ruleLog.rule);
                        if (Trigger == "POST_QUERY") {
                            let responseDataID = ruleLog.rule.RESPONSE_DATA_ID;
                            if (this.paramConfig.DEBUG_FLAG)
                                console.log("TABS:responseDataID:", responseDataID);
                            let responseData = extractResponseData(msgBodyAll, responseDataID);
                            if (this.paramConfig.DEBUG_FLAG)
                                console.log("TABS:responseData:", responseData, "queryData:", queryData);
                            if (this.paramConfig.DEBUG_FLAG)
                                console.log("TABS:ruleLog.rule.RESPONSE_DATA_NAME:", ruleLog.rule.RESPONSE_DATA_NAME);
                            if (typeof responseData !== "undefined") {
                                object[ruleLog.rule.RESPONSE_DATA_NAME] = responseData;
                                if (this.paramConfig.DEBUG_FLAG)
                                    console.log("TABS:object.tabsAPIResponse:", object.tabsAPIResponse);
                            }
                        }
                        this.syncFlag = 0;
                        this.LogRule(object, ruleLog, msgBodyAll, status);
                    }
                });
                /*
              let reqNew = this.http.request(options, function(response){ handleResponse(response,  ruleLog); });
              reqNew.on('error', function(err) {
                // Handle error
                error = err;
                msg = "Error sending to Host :" +sendTo ;
                if (this.paramConfig.DEBUG_FLAG) console.log( msg + " Error:" + err );
                this.LogRule(ruleLog, msg + " Error:" + err, 400 );
              });
      
              if (this.paramConfig.DEBUG_FLAG) console.log("here1");
              reqNew.write(bodyToSend);
              if (this.paramConfig.DEBUG_FLAG) console.log("here2");
              reqNew.end();
              if (this.paramConfig.DEBUG_FLAG) console.log("here3");
              */
            }
        }
        let statusRec = {
            status: error,
            msg: msg
        };
        /*let status = 1;
        if (!valid){
          statusRec.status = 1;
          statusRec.msg =
        }*/
        if (this.paramConfig.DEBUG_FLAG)
            console.log("valid:", valid, " status:", statusRec);
        return (statusRec);
    }
    sendToServer(object, actionsArr, queryData, rule, action, Trigger, hostsArr, hostsMapArr) {
        function getElmValue(paramData, queryData) {
            function getORDER_FIELDSData(param, orderFields) {
                let val = "";
                if (orderFields != "") {
                    let array = param.split(".");
                    var arrName = array[0].trim();
                    let fieldName = array[1];
                    console.log("getElmValue:fieldName:", fieldName, " orderFields:", orderFields);
                    if (typeof orderFields !== "undefined") {
                        orderFields = JSON.parse(orderFields);
                        console.log("getElmValue:orderFields:", orderFields);
                        var fieldsData = orderFields[arrName];
                        val = fieldsData[fieldName];
                    }
                }
                return val;
            }
            console.log("getElmValue:paramData:", paramData);
            let val = paramData;
            var n = paramData.search("::");
            if (n != -1) {
                var array = paramData.split("::");
                console.log("getElmValue::array:", array);
                for (var i = 0; i < array.length; i++) {
                    if ((i != 0) && array[i] != "") {
                        var n = array[i].search(" ");
                        console.log("getElmValue::n:", n, "array[i]:", array[i]);
                        if (n == -1)
                            n = array[i].length;
                        if (n != -1) {
                            var param = array[i].slice(0, n);
                            param = param.trim();
                            console.log("getElmValue::param:" + param);
                            var n = param.includes(".");
                            console.log("getElmValue::n:", n);
                            if (n == true) {
                                val = getORDER_FIELDSData(param, queryData.ORDER_FIELDS);
                            }
                            else
                                val = queryData[param];
                            if (typeof val == "string")
                                val = val.trim();
                            console.log("getElmValue::param:", param, " val:", val);
                        }
                    }
                }
            }
            if (typeof val == "string")
                val = val.split("'").join("");
            return val;
        }
        function getHost(sendTo, hostsArr) {
            let i = 0;
            while (i < hostsArr.length) {
                //console.log("-----------hostsArr[i].HOST_ID :", hostsArr[i].HOST_ID, " sendTo:", sendTo);
                if (hostsArr[i].HOST_ID == sendTo)
                    return hostsArr[i];
                i++;
            }
            return null;
        }
        function getHostMap(hostDef, mapID, hostsMapArr) {
            let i = 0;
            //console.log("-----------mapID:", mapID, " hostDef.MAP_ID:", hostDef.MAP_ID);
            if ((mapID != null) && (mapID != "")) {
                while (i < hostsMapArr.length) {
                    if ((hostsMapArr[i].HOST_ID == hostDef.HOST_ID) && (mapID == hostsMapArr[i].MAP_ID))
                        return hostsMapArr[i];
                    i++;
                }
            }
            return null;
        }
        ////////////////////
        if (this.paramConfig.DEBUG_FLAG)
            console.log("****************actionsArr:", actionsArr);
        let statusRec;
        let sendTo = actionsArr.SEND_TO;
        let qryParam = {};
        let headerParam = {};
        let bodyToSendArr = [];
        let bodyToSend = "";
        let parametersToSend = "";
        let hostDef = getHost(sendTo, hostsArr);
        let hostMapDef = getHostMap(hostDef, action.MAP_ID, hostsMapArr);
        if (this.paramConfig.DEBUG_FLAG)
            console.log("hostMapDef:", hostMapDef);
        if (this.paramConfig.DEBUG_FLAG)
            console.log("****hostDef.HEADER:", hostDef.HEADER);
        if ((hostDef.HEADER != null) && (hostDef.HEADER != "")) {
            let array = hostDef.HEADER.split("\n");
            if (this.paramConfig.DEBUG_FLAG)
                console.log("array:", array, " array.length:", array.length);
            for (let i = 0; i < array.length; i++) {
                let elem = array[i];
                if (elem != "") {
                    let arrayParam = elem.split(":");
                    let param = arrayParam[0];
                    param = param.trim();
                    let paramData = arrayParam[1];
                    paramData = paramData.trim();
                    if (this.paramConfig.DEBUG_FLAG)
                        console.log("paramData:", paramData);
                    paramData = getElmValue(paramData, queryData);
                    if (this.paramConfig.DEBUG_FLAG)
                        console.log("getElmValue:post getElmValue param:", param, " paramData:", paramData);
                    headerParam[param] = paramData;
                }
            }
        }
        if ((actionsArr.BODY_DATA != null) && (actionsArr.BODY_DATA != "")) {
            let bodyData = actionsArr.BODY_DATA;
            if (this.paramConfig.DEBUG_FLAG)
                console.log(":post:bodyData:", bodyData);
            let array = bodyData.split("\n");
            if (this.paramConfig.DEBUG_FLAG)
                console.log(":post:array:", array, " array.length:", array.length);
            for (let i = 0; i < array.length; i++) {
                let elem = array[i];
                if (elem != "") {
                    let arrayParam = elem.split("=");
                    let param = arrayParam[0];
                    param = param.trim();
                    let paramData = arrayParam[1];
                    paramData = paramData.trim();
                    if (this.paramConfig.DEBUG_FLAG)
                        console.log("getElmValue:paramData:", paramData);
                    paramData = getElmValue(paramData, queryData);
                    if (this.paramConfig.DEBUG_FLAG)
                        console.log("getElmValue:post2 param:", param, " paramData:", paramData);
                    qryParam[param] = paramData;
                }
            }
            //if (this.paramConfig.DEBUG_FLAG) console.log("qryParam:here");
            //if (this.paramConfig.DEBUG_FLAG) console.log("qryParam:", qryParam , " qryParam.length :", Object.keys(qryParam).length);
            bodyToSendArr.push(qryParam);
            //if (this.paramConfig.DEBUG_FLAG) console.log("---hostDef:", hostDef);//fuad
            if (bodyToSendArr.length != 0) {
                /*if ( (hostMapDef != null) &&  (hostMapDef.XSLT_SEND != null) && (hostMapDef.XSLT_SEND != "") )
                {
                  {
                    bodyToSend = xsltmap.mapData(bodyToSendArr, hostMapDef.XSLT_SEND);
      
                  }
                }
                else
                {*/
                bodyToSend = JSON.stringify(bodyToSendArr);
                //}
            }
            /*
            let hexout = hexdump(bodyToSend, 16) ;
            if (this.paramConfig.DEBUG_FLAG) console.log("hexout:",hexout);
            */
        }
        if ((actionsArr.PARAMETER_DATA != null) && (actionsArr.PARAMETER_DATA != "")) {
            let parameterData = actionsArr.PARAMETER_DATA;
            if (this.paramConfig.DEBUG_FLAG)
                console.log("parameterData:", parameterData);
            if (this.paramConfig.DEBUG_FLAG)
                console.log("parameterData.length:", parameterData.length);
            let array = parameterData.split("\n");
            if (this.paramConfig.DEBUG_FLAG)
                console.log("array:", array, " array.length:", array.length);
            for (let i = 0; i < array.length; i++) {
                let elem = array[i];
                if (elem != "") {
                    let arrayParam = elem.split("=");
                    let param = arrayParam[0];
                    param = param.trim();
                    let paramData = arrayParam[1];
                    paramData = paramData.trim();
                    if (this.paramConfig.DEBUG_FLAG)
                        console.log("getElmValue::paramData:", paramData);
                    paramData = getElmValue(paramData, queryData);
                    if (this.paramConfig.DEBUG_FLAG)
                        console.log("getElmValue: post3:param:", param, " paramData:", paramData);
                    if (parametersToSend == "")
                        parametersToSend = "?" + param + "=" + paramData;
                    else
                        parametersToSend = parametersToSend + "&" + param + "=" + paramData;
                }
            }
            if (this.paramConfig.DEBUG_FLAG)
                console.log("getElmValue: parametersToSend:", parametersToSend);
        }
        let pathExtra = "";
        if ((actionsArr.EXTRA_DATA != null) && (actionsArr.EXTRA_DATA != "")) {
            let parameterExtra = actionsArr.EXTRA_DATA;
            console.log("parameterExtra:", parameterExtra);
            console.log("parameterExtra.length:", parameterExtra.length);
            let array = parameterExtra.split("\n");
            console.log("array:", array, " array.length:", array.length);
            for (let i = 0; i < array.length; i++) {
                let elem = array[i];
                console.log("elem:", elem);
                let arrayParam = elem.split("=");
                let param = arrayParam[0];
                param = param.trim();
                let paramData = arrayParam[1];
                if (param == "DBLOC") {
                    pathExtra = "&" + elem;
                    console.log("pathExtra:", pathExtra);
                    //req._parsedUrl.path = req._parsedUrl.path + "&" + elem;
                }
            }
        }
        if (this.paramConfig.DEBUG_FLAG)
            console.log("bodyToSend:", bodyToSend);
        if (this.paramConfig.DEBUG_FLAG)
            console.log("parametersToSend:", parametersToSend);
        statusRec = this.performHttpPost(object, bodyToSend, parametersToSend, sendTo, queryData, rule, action, Trigger, hostDef, hostMapDef, headerParam, pathExtra);
        if (this.paramConfig.DEBUG_FLAG)
            console.log("post performHttpPost: status:", statusRec);
        return statusRec;
    }
    performAction(object, qry, ptr, queryData, rule, rulesDef, Trigger, hostsArr, hostsMapArr, RULE_ID) {
        if (this.paramConfig.DEBUG_FLAG)
            console.log("---performAction:rulesDef:", rulesDef);
        let status = 0;
        let statusRec = {
            status: 0,
            msg: ""
        };
        let actionPtr = rulesDef.actionPtrsArr[qry];
        if (typeof actionPtr !== "undefined") {
            if (this.paramConfig.DEBUG_FLAG)
                console.log("ptr:", ptr);
            if (this.paramConfig.DEBUG_FLAG)
                console.log("actionPtr:", actionPtr);
            let i = ptr;
            let ptr1 = actionPtr[i];
            let ptr2 = actionPtr[actionPtr.length - 1];
            // if (typeof actionPtr[i + 1] !== "undefined")
            //   ptr2 = actionPtr[i + 1];
            // else
            //   ptr2 = rulesDef.actionsArr.length
            if (this.paramConfig.DEBUG_FLAG)
                console.log("ptr1:", ptr1, " ptr2:", ptr2);
            let j = ptr1;
            //let ruleID = rulesDef.actionsArr[j].RULE_ID;
            let ruleID = RULE_ID;
            while ((j <= ptr2) && (status == 0)) {
                if (ruleID == rulesDef.actionsArr[j].RULE_ID) {
                    //if (this.paramConfig.DEBUG_FLAG) console.log("rulesDef.actionsArr:",rulesDef.actionsArr[j]);
                    if ((rulesDef.actionsArr[j].ACTION_CODE == "SEND") || (rulesDef.actionsArr[j].ACTION_CODE == "SEND_WAIT")) {
                        statusRec = this.sendToServer(object, rulesDef.actionsArr[j], queryData, rule, rulesDef.actionsArr[j], Trigger, hostsArr, hostsMapArr);
                        status = statusRec.status;
                    }
                    else if (rulesDef.actionsArr[j].ACTION_CODE == "ERROR") {
                        let statusRec = {
                            status: -1,
                            msg: rulesDef.actionsArr[j].BODY_DATA
                        };
                        return statusRec;
                    }
                }
                j++;
            }
        }
        return statusRec;
    }
    checkRulesByTrigger(object, rulesDef, queryData, Trigger, routine_name, hostsArr, hostsMapArr) {
        if (this.paramConfig.DEBUG_FLAG)
            console.log("checkRulesByTrigger:rulesDef:", rulesDef, " queryData:", queryData, "Trigger:", Trigger);
        function getFieldData(rule, queryData) {
            let fieldData = "";
            let array = rule.FIELD.split(".");
            console.log("array:", array);
            if (array.length > 1) {
                let orderFields = queryData["ORDER_FIELDS"];
                //console.log("orderFields:",orderFields)
                if (typeof orderFields !== "undefined") {
                    if (orderFields != "") {
                        let fieldsData = JSON.parse(orderFields);
                        //console.log("fieldsData:",fieldsData)
                        let keys = Object.keys(fieldsData);
                        console.log("keys:", keys);
                        for (let j = 0; j < keys.length; j++) {
                            console.log("addOrderFields key:", keys[j]);
                            if (keys[j] == array[0]) {
                                let objData = fieldsData[keys[j]];
                                //console.log("objData:", objData );
                                if (typeof (objData.length) == "undefined") // it is a form (object)
                                    fieldData = objData[array[1]];
                                else { // it is a grid (array)
                                    if (typeof (objData[0]) != "undefined")
                                        fieldData = objData[0][array[1]];
                                }
                                break;
                            }
                        }
                    }
                }
            }
            else {
                fieldData = queryData[rule.FIELD];
            }
            return fieldData;
        }
        function checkRule(rule, queryData) {
            let ruleMatch = false;
            //if (object.paramConfig.DEBUG_FLAG) 
            console.log("checkRule rule:", rule, " queryData:", queryData);
            //let fieldData = queryData[rule.FIELD];
            let fieldData = getFieldData(rule, queryData);
            switch (rule.OPERATION) {
                case "=":
                    if (fieldData == rule.FIELD_VALUE) {
                        ruleMatch = true;
                    }
                    break;
                case "<":
                    if (fieldData < rule.FIELD_VALUE) {
                        ruleMatch = true;
                    }
                    break;
                case "<=":
                    if (fieldData <= rule.FIELD_VALUE) {
                        ruleMatch = true;
                    }
                    break;
                case ">":
                    if (fieldData > rule.FIELD_VALUE) {
                        ruleMatch = true;
                    }
                    break;
                case ">=":
                    if (fieldData >= rule.FIELD_VALUE) {
                        ruleMatch = true;
                    }
                    break;
                case "<>":
                    if (fieldData != rule.FIELD_VALUE) {
                        ruleMatch = true;
                    }
                    break;
                case "INSTR":
                    if (rule.FIELD_VALUE.search(fieldData) != -1) {
                        ruleMatch = true;
                    }
                    break;
                default:
                    ruleMatch = false;
            }
            console.log("test3:ruleMatch:", ruleMatch, " fieldData:", fieldData, " OPERATION:", rule.OPERATION, " FIELD_VALUE:", rule.FIELD_VALUE);
            return ruleMatch;
        }
        function checkSameTemplate(rulePtrsArr, queryData) {
            //console.log("checking template rulePtrsArr:",rulePtrsArr, " queryData:", queryData);
            var sameTemp = false;
            console.log("rulePtrsArr.TEMPLATE_NAME:", rulePtrsArr.TEMPLATE_NAME, "queryData.TEMPLATE_NAME:", queryData.TEMPLATE_NAME, " rulePtrsArr.SEQUENCE_NAME:", rulePtrsArr.SEQUENCE_NAME, " queryData.SEQUENCE_NAME:", queryData.SEQUENCE_NAME, queryData);
            if ((rulePtrsArr.TEMPLATE_NAME != "")) {
                if (rulePtrsArr.TEMPLATE_NAME == queryData.TEMPLATE_NAME) {
                    if ((rulePtrsArr.SEQUENCE_NAME != "")) {
                        if (rulePtrsArr.SEQUENCE_NAME == queryData.SEQUENCE_NAME) {
                            sameTemp = true;
                        }
                    }
                    else {
                        sameTemp = true;
                    }
                }
            }
            else {
                sameTemp = true;
            }
            //console.log("sameTemp:", sameTemp);
            return sameTemp;
        }
        let status = 0;
        let statusRec = {
            status: 0,
            msg: ""
        };
        let qry = queryData._QUERY;
        if (this.paramConfig.DEBUG_FLAG)
            console.log("_QUERY:", queryData._QUERY, " rulesDef.rulePtrsArr:", rulesDef.rulePtrsArr);
        if (this.paramConfig.DEBUG_FLAG)
            console.log("checking rulesDef.rulePtrsArr:", rulesDef.rulePtrsArr);
        let rulePtr = rulesDef.rulePtrsArr[qry];
        if (this.paramConfig.DEBUG_FLAG)
            console.log("rulePtr:", rulePtr);
        if (this.paramConfig.DEBUG_FLAG)
            console.log("qry:", qry, " rulesDef.rulePtrsArr:", rulesDef.rulePtrsArr, " rulePtr:", rulePtr);
        if (typeof rulePtr !== "undefined") {
            //let actionPtr = rulesDef.rulePtrsArr[qry];
            //if (typeof actionPtr !== "undefined")
            {
                let result = false;
                let i = 0;
                //while ( (i<rulePtr.length) && (status == 0) )
                {
                    var ptr1 = rulePtr[i];
                    var ptr2 = rulePtr[rulePtr.length - 1];
                    // if (typeof rulePtr[i+1] !== "undefined")
                    //     var ptr2 = rulePtr[i+1];
                    // else
                    //     //var ptr2 = rulesDef.rulesArr.length
                    //     var ptr2 = ptr1
                    if (this.paramConfig.DEBUG_FLAG)
                        console.log("Item:ptr1:", ptr1, " ptr2:", ptr2);
                    var j = ptr1;
                    var ruleMatch = false;
                    var FOUND_RULE_ID = "";
                    while (j <= ptr2) {
                        if (this.paramConfig.DEBUG_FLAG)
                            console.log("rulesDef.rulesArr:", rulesDef.rulesArr[j].RULE_ID, " item:", rulesDef.rulesArr[j].ITEM);
                        let sameTemplate = checkSameTemplate(rulesDef.rulesArr[j], queryData);
                        if (this.paramConfig.DEBUG_FLAG)
                            console.log("rulesDef.rulesArr:", rulesDef.rulesArr[j].RULE_ID, " item:", rulesDef.rulesArr[j].ITEM, " sameTemplate:", sameTemplate);
                        if (sameTemplate) {
                            ruleMatch = checkRule(rulesDef.rulesArr[j], queryData);
                            if (ruleMatch == false)
                                break;
                            else
                                FOUND_RULE_ID = rulesDef.rulesArr[j].RULE_ID;
                        }
                        j++;
                    }
                    console.log("checkRulesByTrigger:Conditions ruleMatch:", ruleMatch, " for rule:", FOUND_RULE_ID);
                    if (ruleMatch == true) {
                        //statusRec = performAction(db,req, qry, i, queryData, rulesDef.rulesArr[ptr1],rulesDef, Trigger );
                        statusRec = this.performAction(object, qry, i, queryData, rulesDef.rulesArr[ptr1], rulesDef, Trigger, hostsArr, hostsMapArr, FOUND_RULE_ID);
                        status = statusRec.status;
                    }
                    //if (ruleMatch == false)
                    //  break;
                    i++;
                }
            }
        }
        return statusRec;
    }
    checkHasRules(rulesDef, qry, Trigger) {
        let found = false;
        //console.log("checkHasRules:qry:",qry,  Trigger)
        var actionPtr = rulesDef.actionPtrsArr[qry];
        if (typeof actionPtr !== "undefined") {
            //console.log("checkHasRules:qry:",Trigger, qry,  actionPtr)
            found = true;
        }
        return found;
    }
    checkRules(object, rulesDef, actualResult, Trigger) {
        var statusRec = {};
        if (this.paramConfig.isCheckRules == false)
            return statusRec;
        //return;
        if (this.paramConfig.DEBUG_FLAG)
            console.log("checkRules:", Trigger, " routine_name:", this.routine_name, " actualResult:", actualResult);
        if (Trigger == "POST_QUERY") {
            if (typeof actualResult.data[0] !== "undefined") {
                let transData = actualResult.data[0].data;
                for (let i = 0; i < transData.length; i++) {
                    if (this.paramConfig.DEBUG_FLAG)
                        console.log("checkRules:transData[i]:", transData[i], i);
                    if (this.paramConfig.DEBUG_FLAG)
                        console.log("checkRules:actualResult.data[0].query:", actualResult.data[0].query);
                    if (this.paramConfig.DEBUG_FLAG)
                        console.log("checkRules:actualResult.data[0] HF please", actualResult.data[0].data);
                    let queryData = transData[i];
                    queryData["_QUERY"] = actualResult.data[0].query;
                    //       if (this.paramConfig.DEBUG_FLAG) console.log("queryData:", queryData)
                    let foundRule = this.checkHasRules(rulesDef, queryData['_QUERY'], "POST_QUERY");
                    if (foundRule) {
                        statusRec = this.checkRulesByTrigger(object, rulesDef, queryData, Trigger, this.routine_name, this.hostsArr, this.hostsMapArr);
                    }
                    //console.log("statusRec:POST_QUERY:", statusRec);
                    if (statusRec['status'] == -1) {
                        break;
                    }
                }
            }
        }
        else if (Trigger == "PRE_QUERY") {
            if (typeof actualResult !== "undefined") {
                for (let i = 0; i < actualResult.length; i++) {
                    if (this.paramConfig.DEBUG_FLAG)
                        console.log("actualResult[i]:", actualResult[i]);
                    let queryData = actualResult[i];
                    if (this.paramConfig.DEBUG_FLAG)
                        console.log("queryData:", queryData);
                    let foundRule = this.checkHasRules(rulesDef, queryData['_QUERY'], "PRE_QUERY");
                    if (foundRule) {
                        statusRec = this.checkRulesByTrigger(object, rulesDef, queryData, Trigger, this.routine_name, this.hostsArr, this.hostsMapArr);
                    }
                }
            }
        }
        if (this.paramConfig.DEBUG_FLAG)
            console.log("checkRules:Done", Trigger, " routine_name:", this.routine_name, " actualResult:", actualResult);
        return statusRec;
    }
    //////////////
    storeActionsPtrs(actions, rulesDef) {
        let currentQUERY_DEF = "";
        let currentRULE_ID = "";
        let actionPtrs = [];
        for (let i = 0; i < actions.length; i++) {
            if ((currentQUERY_DEF != actions[i].QUERY_DEF) && (currentRULE_ID != actions[i].RULE_ID)) {
                if (i == 0)
                    actionPtrs.push(i);
                if (currentQUERY_DEF != "") {
                    rulesDef.actionPtrsArr[currentQUERY_DEF] = actionPtrs;
                    actionPtrs = [];
                    actionPtrs.push(i);
                }
                currentQUERY_DEF = actions[i].QUERY_DEF;
                currentRULE_ID = actions[i].RULE_ID;
                //if (this.paramConfig.DEBUG_FLAG) console.log("rulePtrs1:",rulePtrs);
            }
            else if ((currentQUERY_DEF == actions[i].QUERY_DEF) && (currentRULE_ID != actions[i].RULE_ID)) {
                currentRULE_ID = actions[i].RULE_ID;
                actionPtrs.push(i);
            }
            else if ((currentQUERY_DEF == actions[i].QUERY_DEF) && (currentRULE_ID == actions[i].RULE_ID)) {
                actionPtrs.push(i);
                currentRULE_ID = actions[i].RULE_ID;
            }
            if (this.paramConfig.DEBUG_FLAG)
                console.log("actionPtrs2:", actionPtrs);
        }
        //actionPtrs.push(i);
        rulesDef.actionPtrsArr[currentQUERY_DEF] = actionPtrs;
        if (this.paramConfig.DEBUG_FLAG)
            console.log("rulesDef.actionPtrsArr:", rulesDef.actionPtrsArr);
    }
    storeRulesPtrs(rules, rulesDef) {
        let currentQUERY_DEF = "";
        let currentRULE_ID = "";
        let rulePtrs = [];
        for (let i = 0; i < rules.length; i++) {
            if (this.paramConfig.DEBUG_FLAG)
                console.log(rules[i].QUERY_DEF + " : " + rules[i].RULE_ID + "          " + currentQUERY_DEF + " : " + currentRULE_ID);
            if ((currentQUERY_DEF != rules[i].QUERY_DEF) && (currentRULE_ID != rules[i].RULE_ID)) {
                if (this.paramConfig.DEBUG_FLAG)
                    console.log(" not equal");
                if (i == 0)
                    rulePtrs.push(i);
                if (currentQUERY_DEF != "") {
                    if (this.paramConfig.DEBUG_FLAG)
                        console.log("--storing rulePtrs2:", rulePtrs);
                    rulesDef.rulePtrsArr[currentQUERY_DEF] = rulePtrs;
                    rulePtrs = [];
                    rulePtrs.push(i);
                }
                currentQUERY_DEF = rules[i].QUERY_DEF;
                currentRULE_ID = rules[i].RULE_ID;
                if (this.paramConfig.DEBUG_FLAG)
                    console.log("rulePtrs1:", rulePtrs);
            }
            else if ((currentQUERY_DEF == rules[i].QUERY_DEF) && (currentRULE_ID != rules[i].RULE_ID)) {
                if (this.paramConfig.DEBUG_FLAG)
                    console.log(" not equal2");
                rulePtrs.push(i);
                currentRULE_ID = rules[i].RULE_ID;
                if (this.paramConfig.DEBUG_FLAG)
                    console.log("rulePtrs2:", rulePtrs);
            }
            else if ((currentQUERY_DEF == rules[i].QUERY_DEF) && (currentRULE_ID == rules[i].RULE_ID)) {
                console.log(" equal3");
                rulePtrs.push(i);
                currentRULE_ID = rules[i].RULE_ID;
                console.log("rulePtrs3:", rulePtrs);
            }
            if (this.paramConfig.DEBUG_FLAG)
                console.log("rulePtrs4:", rulePtrs);
        }
        //rulePtrs.push(i);
        if (this.paramConfig.DEBUG_FLAG)
            console.log("rulePtrs5:", rulePtrs);
        rulesDef.rulePtrsArr[currentQUERY_DEF] = rulePtrs;
        if (this.paramConfig.DEBUG_FLAG)
            console.log("test3:rulesDef.rulePtrsArr:", rulesDef.rulePtrsArr);
    }
    //////////////
    loadRules(object) {
        object.Body = [];
        let Page = "";
        let NewVal = {};
        NewVal["_QUERY"] = "GET_ADM_RULE_DEF_RULE_ITEM";
        NewVal["RULE_TRIGGER"] = "POST_QUERY";
        if (this.paramConfig.DEBUG_FLAG)
            console.log("test:NewVal:", NewVal);
        if (this.paramConfig.DEBUG_FLAG)
            console.log("test:object.Body:", object.Body);
        object.addToBody(NewVal);
        if (this.paramConfig.DEBUG_FLAG)
            console.log("test:object.Body:", object.Body);
        NewVal = {};
        NewVal["_QUERY"] = "GET_ADM_RULE_DEF_RULE_ACTION";
        NewVal["RULE_TRIGGER"] = "POST_QUERY";
        object.addToBody(NewVal);
        NewVal = {};
        NewVal["_QUERY"] = "GET_ADM_RULE_HOST";
        NewVal["HOST_ID"] = "%";
        object.addToBody(NewVal);
        NewVal = {};
        NewVal["_QUERY"] = "GET_ADM_RULE_HOST_MAP";
        NewVal["HOST_ID"] = "%";
        NewVal["MAP_ID"] = "%";
        object.addToBody(NewVal);
        this.post(object, Page, object.Body).subscribe(result => {
            if (this.paramConfig.DEBUG_FLAG)
                console.log("test:result.data:", result.data);
            this.rulesPostQueryDef.rulePtrsArr = {};
            this.rulesPostQueryDef.actionPtrsArr = [];
            this.storeRulesPtrs(result.data[0].data, this.rulesPostQueryDef);
            this.rulesPostQueryDef.rulesArr = result.data[0].data;
            this.storeActionsPtrs(result.data[1].data, this.rulesPostQueryDef);
            this.rulesPostQueryDef.actionsArr = result.data[1].data;
            if (this.paramConfig.DEBUG_FLAG)
                console.log("test:this.rulesPostQueryDef", this.rulesPostQueryDef);
            this.hostsArr = result.data[2].data;
            this.hostsMapArr = result.data[3].data;
            //////////////
            object.Body = [];
        }, err => {
            object.Body = [];
            this.showNotification("error", "error:" + err.message);
        });
        //////////////////////////////
        //////////////
        object.Body = [];
        Page = "";
        NewVal = {};
        NewVal["_QUERY"] = "GET_ADM_RULE_DEF_RULE_ITEM";
        NewVal["RULE_TRIGGER"] = "PRE_QUERY";
        if (this.paramConfig.DEBUG_FLAG)
            console.log("test:NewVal:", NewVal);
        if (this.paramConfig.DEBUG_FLAG)
            console.log("test:object.Body:", object.Body);
        object.addToBody(NewVal);
        if (this.paramConfig.DEBUG_FLAG)
            console.log("test:object.Body:", object.Body);
        NewVal = {};
        NewVal["_QUERY"] = "GET_ADM_RULE_DEF_RULE_ACTION";
        NewVal["RULE_TRIGGER"] = "PRE_QUERY";
        object.addToBody(NewVal);
        this.post(object, Page, object.Body).subscribe(result => {
            if (this.paramConfig.DEBUG_FLAG)
                console.log("test:result.data:", result.data);
            //////////////
            this.rulesPreQueryDef.rulePtrsArr = {};
            this.rulesPreQueryDef.actionPtrsArr = {};
            this.storeRulesPtrs(result.data[0].data, this.rulesPreQueryDef);
            this.rulesPreQueryDef.rulesArr = result.data[0].data;
            this.storeActionsPtrs(result.data[1].data, this.rulesPreQueryDef);
            this.rulesPreQueryDef.actionsArr = result.data[1].data;
            if (this.paramConfig.DEBUG_FLAG)
                console.log("test:this.rulesPreQueryDef", this.rulesPreQueryDef);
            //////////////
            object.Body = [];
        }, err => {
            object.Body = [];
            this.showNotification("error", "error:" + err.message);
        });
    }
    fetchLookups(object, lookupArrDef) {
        let Body = [];
        for (let i = 0; i < lookupArrDef.length; i++) {
            let NewVal = {};
            NewVal["_QUERY"] = "GET_STMT";
            NewVal["_STMT"] = lookupArrDef[i].statment;
            if (lookupArrDef[i].statment != "[]")
                Body = this.addToBody(NewVal, Body);
        }
        let Page = "";
        this.post(object, Page, Body).subscribe(result => {
            for (let i = 0; i < lookupArrDef.length; i++) {
                //if (this.paramConfig.DEBUG_FLAG) console.log("result.data[i].data:",result.data[i].data[0])
                if (typeof result.data[i] !== "undefined") {
                    if (typeof result.data[i].data[0] !== "undefined") {
                        //add empty record at begining of the array for the LOV for insert new record in a grid work properly
                        let keys = Object.keys(result.data[i].data[0]);
                        let emptyRec = {};
                        let hasSpace = false;
                        // let codeTxt = keys[0];
                        // let dataSet = Object.assign([], result.data[i].data);
                        // dataSet.find(elem =>{
                        //   //console.log("elm:",elem);
                        //   if (elem[codeTxt].trim() == ""){
                        //     hasSpace = true;
                        //     return true;
                        //   }
                        // });
                        if (!hasSpace) {
                            for (let k = 0; k < keys.length; k++) {
                                //if (this.paramConfig.DEBUG_FLAG) console.log("[keys[k]:", keys[k]);
                                //console.log("[keys[k]:", keys[k]);
                                emptyRec[keys[k]] = "";
                                //object.primarKeyReadOnlyArr[keys[k]] = value;
                            }
                            //if (this.paramConfig.DEBUG_FLAG) console.log("emptyRec:",emptyRec)
                            //console.log("emptyRec:",emptyRec);
                            result.data[i].data.splice(0, 0, emptyRec); //Fuad:add empty record at begining of the array for the LOV for insert new record in a grid work properly
                        }
                    }
                    object[lookupArrDef[i].lkpArrName] = result.data[i].data;
                    //if (this.paramConfig.DEBUG_FLAG) console.log("lookupArrDef[i].lkpArrName:", lookupArrDef[i].lkpArrName, object[lookupArrDef[i].lkpArrName])
                }
            }
            if (typeof object.fetchLookupsCallBack !== "undefined")
                object.fetchLookupsCallBack();
        }, err => {
            //alert ('error:' + err.message);
            this.showErrorMsg(object, err);
        });
    }
    performPost(object, fn) {
        let Page = "";
        this.post(object, Page, object.Body).subscribe(result => {
            fn(object, result);
            object.Body = [];
        }, err => {
            //alert ('error:' + err.message);
            this.showErrorMsg(object, err);
        });
    }
    setComponentConfig(componentConfig, screenConfig) {
        let keys = Object.keys(componentConfig);
        for (let i = 0; i < keys.length; i++) {
            //if (this.paramConfig.DEBUG_FLAG) console.log( keys[i] + " " + componentConfig[ keys[i] ] ) ;
            if (componentConfig[keys[i]] != null) {
                screenConfig[keys[i]] = componentConfig[keys[i]];
            }
        }
        //if (this.paramConfig.DEBUG_FLAG) console.log(screenConfig);
        return screenConfig;
    }
    getRoutineAuth(menu, routine_name) {
        let i = 0;
        let routineAuth;
        let found = false;
        if (typeof menu !== "undefined") {
            while (i < menu.length) {
                let j = 0;
                while (j < menu[i].items.length) {
                    if (menu[i].items[j].choice == routine_name) {
                        routineAuth = menu[i].items[j];
                        found = true;
                        break;
                    }
                    j++;
                }
                if (found)
                    break;
                i++;
            }
        }
        if (this.paramConfig.DEBUG_FLAG)
            console.log("routine_name:", routine_name, "routineAuth:", routineAuth, " menu:", menu);
        return (routineAuth);
    }
    actOnParamConfig(object, routine_name) {
        if (this.paramConfig.DEBUG_FLAG)
            console.log("routine_name:" + routine_name);
        let paramConfig = getParamConfig();
        let menu = paramConfig.menu;
        let routineAuth = this.getRoutineAuth(menu, routine_name);
        if (typeof routineAuth !== "undefined") {
            object.title = routineAuth.text + " (" + routineAuth.routineVer + ")";
            object.routineAuth = routineAuth;
            this.routine_name = routine_name;
            if (this.paramConfig.DEBUG_FLAG)
                console.log("object.title:" + object.title);
        }
        else if (routine_name == "DSPEKYC") {
            this.routine_name = routine_name;
        }
        if (this.paramConfig.DEBUG_FLAG)
            console.log("this.routine_name:" + this.routine_name);
    }
    showErrorMsg(object, serverError) {
        let errorMsg = "";
        if (typeof serverError.error == "undefined") {
            errorMsg = this.standardErrorMsg + " : " + serverError;
        }
        else
            errorMsg = this.standardErrorMsg + " : " + serverError.error.error;
        let dialogStruc = {
            msg: errorMsg,
            title: "Error",
            info: null,
            object: object,
            action: this.OkActions,
            callback: null
        };
        this.showConfirmation(dialogStruc);
    }
    sendGetCommand(url, page) {
        if (this.paramConfig.DEBUG_FLAG)
            console.log(" inside sendGetCommand");
        let theURL = url + page;
        if (this.paramConfig.DEBUG_FLAG)
            console.log(" inside sendGetCommand:theURL:", theURL);
        this.httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'authorization': this.StrAuth
            })
        };
        if (this.paramConfig.DEBUG_FLAG)
            console.log("sendGetCommand theURL:" + theURL);
        return this.http
            .get(`${theURL}`, this.httpOptions)
            .pipe(catchError((err) => {
            if (this.paramConfig.DEBUG_FLAG)
                console.log("server error:", err.message);
            this.showNotification("error", "error:" + err.message);
            return throwError(err);
        }), map(response => response), tap(() => this.loading = false));
    }
    postCommandOptions(Options, page, url, Body) {
        //if (this.paramConfig.DEBUG_FLAG) console.log(" inside postCommand")
        let theURL = url; //this.EPMENG_URL + page;
        let httpOptions = {};
        if (Options == null) {
            httpOptions = {
                headers: new HttpHeaders({
                    'Content-Type': 'application/json',
                    'authorization': this.StrAuth
                })
            };
        }
        else {
            httpOptions = {
                headers: new HttpHeaders(Options)
            };
        }
        if (this.paramConfig.DEBUG_FLAG)
            console.log("postCommandOptions theURL:", theURL, "Body:", Body);
        return this.http
            .post(`${theURL}`, Body, httpOptions)
            .pipe(catchError((err) => {
            //if (this.paramConfig.DEBUG_FLAG) console.log("server error:", err.message)
            //this.showNotification ("error","error:" + err.message);
            //console.log("err:",err);
            return throwError(err);
            // throwError(err);
            // return JSON.stringify (err);
        }), map(response => response), catchError(err => {
            return err.message; //2
        }), //3
        tap((response) => { this.loading = false; console.log("response:", response); }));
    }
    postCommand(page, url, Body) {
        //if (this.paramConfig.DEBUG_FLAG) console.log(" inside postCommand")
        let theURL = url; //this.EPMENG_URL + page;
        theURL = this.checkDBLoc(theURL);
        this.httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'authorization': this.StrAuth
            })
        };
        //if (this.paramConfig.DEBUG_FLAG) console.log("postCommand theURL:" + theURL)
        return this.http
            .post(`${theURL}`, Body, this.httpOptions)
            .pipe(catchError((err) => {
            //if (this.paramConfig.DEBUG_FLAG) console.log("server error:", err.message)
            this.showNotification("error", "error:" + err.message);
            return throwError(err);
        }), map(response => response), tap(() => this.loading = false));
    }
    CapitalizeFirst(str) {
        str = str.toLowerCase();
        str = str.charAt(0).toUpperCase() + str.slice(1);
        return str;
    }
    CapitalizeTitle(fieldName) {
        let array = fieldName.split("_");
        if (this.paramConfig.DEBUG_FLAG)
            console.log("array:", array);
        for (let i = 0; i < array.length; i++)
            array[i] = this.CapitalizeFirst(array[i]);
        fieldName = array.join(" ");
        return fieldName;
    }
    prepareLookup(fieldName, paramConfig) {
        let lkpArrName = "lkpArr" + fieldName;
        let lkpDef;
        if (fieldName == "ASSIGNEE") {
            if (this.paramConfig.DEBUG_FLAG)
                console.log("starServices.sessionParams.USER_INFO:", this.sessionParams.USER_INFO);
            let team = this.sessionParams.USER_INFO.TEAM;
            lkpDef = {
                "statment": "select USERNAME CODE, FULLNAME CODETEXT_LANG from  ADM_USER_INFORMATION where TEAM = '" + team + "' ",
                "lkpArrName": lkpArrName, "fieldName": fieldName
            };
        }
        else {
            lkpDef = {
                "statment": "SELECT CODE,  CODETEXT_LANG FROM SOM_TABS_CODES WHERE CODENAME = '" + fieldName + "' and LANGUAGE_NAME = '" + paramConfig.userLang + "' order by CODETEXT_LANG  ",
                "lkpArrName": lkpArrName, "fieldName": fieldName
            };
        }
        return lkpDef;
    }
    getAssigneeSelect(object, assigneeType) {
        let selectStmt;
        if (assigneeType == "TEAM") {
            selectStmt = "SELECT CODE, CODETEXT_LANG FROM SOM_TABS_CODES WHERE CODENAME ='TEAM' and LANGUAGE_NAME = '" + object.paramConfig.userLang + "'  order by CODETEXT_LANG ";
        }
        else if (assigneeType == "PERSON") {
            selectStmt = "SELECT USERNAME  CODE, FULLNAME CODETEXT_LANG FROM ADM_USER_INFORMATION WHERE TEAM ='" + object.starServices.sessionParams.USER_INFO.TEAM + "' order by CODETEXT_LANG ";
        }
        else if (assigneeType == "NETWORK") {
            selectStmt = "SELECT CODE, CODETEXT_LANG FROM SOM_TABS_CODES WHERE CODENAME ='EXCH_SYST' and LANGUAGE_NAME = '" + object.paramConfig.userLang + "' order by CODETEXT_LANG";
        }
        return selectStmt;
    }
    getFirstWeekDay(object, value) {
        let valueDate;
        let firstWeekDay = Day.Monday;
        if (typeof object.paramConfig.firstWeekDay !== "undefined") {
            firstWeekDay = object.paramConfig.firstWeekDay;
        }
        valueDate = firstDayInWeek(new Date(value), firstWeekDay);
        valueDate = getDate(valueDate);
        if (this.paramConfig.DEBUG_FLAG)
            console.log("valueDate:", valueDate);
        return valueDate;
    }
    setRTL() {
        let paramConfig = getParamConfig();
        let language_name = paramConfig.userLang;
        language_name = language_name.toLowerCase();
        let parg = document.getElementById("mainpage");
        const svc = this.messages;
        //svc.language_name = svc.language_name === 'es' ? 'he' : 'es';
        //svc.language_name = language_name;
        //if (this.paramConfig.DEBUG_FLAG) console.log("setRTL:language_name:", language_name)
        if (language_name == "ar") {
            parg.dir = "rtl";
            this.messages.notify(true);
        }
        else {
            parg.dir = "ltr";
            this.messages.notify(false);
        }
    }
    loadLanguageOld(language_name) {
        language_name = !language_name ? "en" : language_name;
        let file = "assets/lang/" + language_name.toLowerCase() + ".json";
        if (this.paramConfig.DEBUG_FLAG)
            console.log("loadLanguage:file,", file);
        this.http.get(file).subscribe(data => {
            if (this.paramConfig.DEBUG_FLAG)
                console.log("loadLanguage:data,", data);
            let paramConfig = {
                "Name": "titles",
                "Val": data
            };
            setParamConfig(paramConfig);
            this.paramConfig = getParamConfig();
            paramConfig = {
                "Name": "userLang",
                "Val": language_name.toUpperCase()
            };
            setParamConfig(paramConfig);
            this.setRTL();
            if (this.paramConfig.DEBUG_FLAG)
                console.log("document.documentElement.dir:", document.documentElement.dir == 'ltr');
        }, err => {
            if (this.paramConfig.DEBUG_FLAG)
                console.log("loadLanguage:err,", err);
            //alert ('error:' + err.message);
            //this.showErrorMsg(object, err);
        });
    }
    loadLanguage(language) {
        language = !language ? "en" : language;
        let file = "lang/" + language.toLowerCase() + ".json";
        if (this.paramConfig.DEBUG_FLAG)
            console.log("loadLanguage:file,", file);
        let page = "?getfile=" + file;
        page = this.checkDBLoc(page);
        page = encodeURI(page);
        if (this.paramConfig.DEBUG_FLAG)
            console.log("loadLanguage:page,", page);
        this.paramConfig = getParamConfig();
        if (this.paramConfig.DEBUG_FLAG)
            console.log("this.paramConfig.titles,", this.paramConfig.titles);
        let paramConfig = {
            "Name": "userLang",
            "Val": language.toUpperCase()
        };
        setParamConfig(paramConfig);
        this.sendGetCommand(this.SERVER_URL, page).subscribe(result => {
            if (this.paramConfig.DEBUG_FLAG)
                console.log("loadLanguage:result,", result);
            let data = result.data;
            if (this.paramConfig.DEBUG_FLAG)
                console.log("loadLanguage:data,", data);
            let paramConfig = {
                "Name": "titles",
                "Val": data
            };
            setParamConfig(paramConfig);
            this.paramConfig = getParamConfig();
            if (this.paramConfig.DEBUG_FLAG)
                console.log("this.paramConfig.titles,", this.paramConfig.titles);
            paramConfig = {
                "Name": "userLang",
                "Val": language.toUpperCase()
            };
            setParamConfig(paramConfig);
            this.setRTL();
            if (this.paramConfig.DEBUG_FLAG)
                console.log("document.documentElement.dir:", document.documentElement.dir == 'ltr');
        }, err => {
            if (this.paramConfig.DEBUG_FLAG)
                console.log("loadLanguage:err,", err);
            //alert ('error:' + err.message);
            //this.showErrorMsg(object, err);
        });
    }
    getNLS(params, id, text) {
        //if (this.paramConfig.DEBUG_FLAG) console.log("checkx:getNLS:this.paramConfig.titles,",this.paramConfig.titles);
        if (typeof this.paramConfig !== "undefined") {
            if (typeof this.paramConfig.titles !== "undefined") {
                //console.log("checkx:getNLS:id:",id);
                let array = id.split(".");
                if (array.length == 3) {
                    if (typeof this.paramConfig.titles[array[0]] !== "undefined") {
                        if (typeof this.paramConfig.titles[array[0]][array[1]] !== "undefined") {
                            if (typeof this.paramConfig.titles[array[0]][array[1]][array[2]] !== "undefined") {
                                if (this.paramConfig.titles[array[0]][array[1]][array[2]] != "") {
                                    text = this.paramConfig.titles[array[0]][array[1]][array[2]];
                                }
                            }
                        }
                    }
                    else {
                        //console.log("checkx:getNLS:array[0] not found in this.paramConfig.titles :0:",array[0], this.paramConfig.titles);
                        //console.log("checkx:getNLS:array[0] not found in this.paramConfig.titles :0:",array[0]);
                    }
                    //console.log("checkx:getNLS:text,",text, "in array[0]:", array[0], this.paramConfig.titles);
                }
                else {
                    let nls_title = this.paramConfig.titles[id];
                    if (typeof nls_title !== "undefined") {
                        text = nls_title;
                    }
                }
            }
        }
        if (params.length > 0) {
            let strArray = text.split("##");
            text = "";
            for (let i = 0; i < strArray.length; i++) {
                if (typeof params[i] != "undefined")
                    text = text + strArray[i] + params[i];
                else
                    text = text + strArray[i];
            }
        }
        return text;
    }
    loadStatements(statements) {
        if (statements == "")
            statements = "statements.json";
        let page = "?getfile=" + statements;
        page = this.checkDBLoc(page);
        page = encodeURI(page);
        this.sendGetCommand(this.SERVER_URL, page).subscribe(result => {
            if (this.paramConfig.DEBUG_FLAG)
                console.log("loadStatements:result,", result);
            let data = result.data;
            if (this.paramConfig.DEBUG_FLAG)
                console.log("loadStatements:data,", data);
            let lkpArrQUERY_DEF = [];
            Object.keys(data).forEach(function (key) {
                let value = data[key];
                let rec = {
                    CODE: key,
                    CODETEXT_LANG: key,
                    statement: value
                };
                lkpArrQUERY_DEF.push(rec);
            });
            if (this.paramConfig.DEBUG_FLAG)
                console.log("loadStatements:data,", data);
            if (this.paramConfig.DEBUG_FLAG)
                console.log("loadStatements:lkpArrQUERY_DEF,", lkpArrQUERY_DEF);
            let paramConfig = {
                "Name": "statements",
                "Val": data
            };
            setParamConfig(paramConfig);
            paramConfig = {
                "Name": "lkpArrQUERY_DEF",
                "Val": lkpArrQUERY_DEF
            };
            setParamConfig(paramConfig);
        }, err => {
            if (this.paramConfig.DEBUG_FLAG)
                console.log("loadLanguage:err,", err);
        });
    }
    // public loadStatementsOld() {
    //   let file = "assets/" + "statements.json"
    //   if (this.paramConfig.DEBUG_FLAG) console.log("loadStatements:file,", file)
    //   this.http.get(file).subscribe(data => {
    //     let lkpArrQUERY_DEF:any = [];
    //     Object.keys(data).forEach(function (key:any) {
    //       let value = data[key];
    //       let rec = {
    //         CODE: key,
    //         CODETEXT_LANG: key,
    //         statement: value
    //       }
    //       lkpArrQUERY_DEF.push(rec);
    //     });
    //     if (this.paramConfig.DEBUG_FLAG) console.log("loadStatements:data,", data);
    //     if (this.paramConfig.DEBUG_FLAG) console.log("loadStatements:lkpArrQUERY_DEF,", lkpArrQUERY_DEF)
    //     let paramConfig = {
    //       "Name": "statements",
    //       "Val": data
    //     };
    //     setParamConfig(paramConfig);
    //     paramConfig = {
    //       "Name": "lkpArrQUERY_DEF",
    //       "Val": lkpArrQUERY_DEF
    //     };
    //     setParamConfig(paramConfig);
    //   },
    //     err => {
    //       if (this.paramConfig.DEBUG_FLAG) console.log("loadLanguage:err,", err)
    //     })
    // }
    handleFetchedModules(object, data) {
        if (object.paramConfig.DEBUG_FLAG)
            console.log('fetchedModules : ', data[0].data);
        //this.items[0].items =  data;
        object.items = [
            {
                text: 'Module',
                items: data[0].data
            }
        ];
        object.setModuleName(object.currentMenu);
        if (object.paramConfig.DEBUG_FLAG)
            console.log("object.items:", object.items, "data[0].data.length:", data[0].data.length);
        if (data[0].data.length == 1) {
            object.showModuleSelection = false;
        }
    }
    fetchMenu(object, handleFetchedData) {
        if ((this.StrAuth == "") || (typeof this.StrAuth === "undefined"))
            return;
        let Page = "";
        this.post(this, Page, object.Body).subscribe(result => {
            handleFetchedData(object, result.data, false);
            object.Body = [];
        }, err => {
            //alert('error:' + err.message);
        });
    }
    setModuleItems(object) {
        if (!object.staticMenu) {
            object.Body = [];
            let NewVal = {
                MENU: 'MAIN',
                CHOICES: object.paramConfig.licensedModules.toUpperCase(),
                LANGUAGE_NAME: object.paramConfig.userLang.toUpperCase(),
            };
            NewVal["_QUERY"] = "GET_ALLOWED_MODULES";
            object.addToBody(NewVal);
            if (this.paramConfig.DEBUG_FLAG)
                console.log("--------object.Body :", object.Body);
            this.fetchMenu(object, this.handleFetchedModules);
        }
    }
    stateChange(object, data) {
        //public stateChange(object:any, data: Array<PanelBarItemModel>): boolean {
        if (object.staticMenu == true) {
            const focusedEvent = data.items.filter(item => item.focused === true)[0];
            if (this.paramConfig.DEBUG_FLAG)
                console.log(" in stateChange : " + focusedEvent.id);
            if (this.paramConfig.DEBUG_FLAG)
                console.log(focusedEvent);
            if (focusedEvent.title == "Formatting Flow") {
                object.showPanelbar = false;
            }
            console.log("object.isPhonePortrait:", object.isPhonePortrait, object.showPanelbar);
            //this.selectedId = focusedEvent.id;
            //this.router.navigate(['/' + focusedEvent.id]);
            //this.starServices.setRTL();
            return true; //Fuad check if it should return false or true
        }
        const focusedEvent = data.items.filter(item => item.focused === true)[0];
        if (this.paramConfig.DEBUG_FLAG)
            console.log(" in stateChange : ", focusedEvent, focusedEvent.id);
        let routineAuth = this.getRoutineAuth(object.menu, focusedEvent.id);
        if (this.paramConfig.DEBUG_FLAG)
            console.log(" in stateChange : ", focusedEvent.id, "routineAuth :", routineAuth);
        if (focusedEvent.id == "PRVFLOW")
            object.showPanelbar = false;
        if (typeof routineAuth !== "undefined") {
            if (this.paramConfig.DEBUG_FLAG)
                console.log(" in stateChange : routineAuth.authLevel:" + routineAuth.authLevel);
            if (routineAuth.authLevel == 0) {
                let dialogStruc = {
                    msg: this.noAccessMsg,
                    title: "Warning",
                    info: null,
                    object: this,
                    action: this.OkActions,
                    callback: null
                };
                this.showConfirmation(dialogStruc);
                return false;
            }
            else {
                object.selectedId = focusedEvent.id;
                this.sessionParams["PrvUserFlow"] = "";
                this.sessionParams["PrvUserCDR"] = "";
                if (object.selectedId == "PRVFLOW") {
                    this.sessionParams["PrvUserFlow"] = "PRV_BLD";
                    this.sessionParams["PrvUserCDR"] = "PRV_CDR";
                    object.showPanelbar = false;
                }
                if (object.selectedId == "CCMCAT") {
                    this.sessionParams["PrvUserFlow"] = "CRC_CAT";
                    this.sessionParams["PrvUserCDR"] = "CRC_USER_INFO";
                    object.showPanelbar = false;
                }
                if (object.selectedId == "CCMGRP") {
                    this.sessionParams["PrvUserFlow"] = "CRC_GROUP";
                    this.sessionParams["PrvUserCDR"] = "CRC_GROUP_INFO";
                    object.showPanelbar = false;
                }
                if (object.selectedId == "CMGCAT") {
                    this.sessionParams["PrvUserFlow"] = "CAM_CAT";
                    this.sessionParams["PrvUserCDR"] = "CAM_USER_INFO";
                    object.showPanelbar = false;
                }
                if (object.selectedId == "CMGGRP") {
                    this.sessionParams["PrvUserFlow"] = "CAM_GROUP";
                    this.sessionParams["PrvUserCDR"] = "CAM_GROUP_INFO";
                    object.showPanelbar = false;
                }
                if (object.selectedId == "BILLING") {
                    this.sessionParams["PrvUserFlow"] = "BILLING";
                    this.sessionParams["PrvUserCDR"] = "BILLING_CDR";
                    object.showPanelbar = false;
                }
                if (object.selectedId.startsWith("PORTAL_")) //Fuad : RND
                 {
                    this.sessionParams["PORTAL_FORM"] = focusedEvent.id;
                    focusedEvent.id = 'DSPPORTAL';
                }
                //FUAD: check if below code till else is needed
                if (this.paramConfig.DEBUG_FLAG)
                    console.log(" in stateChange : here1");
                if (object.router.routerState.snapshot.url == ('/' + focusedEvent.id)) {
                    if (this.paramConfig.DEBUG_FLAG)
                        console.log(" in stateChange : here2");
                    object.router.navigateByUrl('', { skipLocationChange: true }).then(() => {
                        if (this.paramConfig.DEBUG_FLAG)
                            console.log(" in stateChange : here3");
                        object.router.navigate(['/' + focusedEvent.id], { skipLocationChange: true, replaceUrl: true, preserveFragment: false });
                        if (this.paramConfig.DEBUG_FLAG)
                            console.log(" in stateChange : here4");
                    });
                }
                else {
                    object.router.navigate(['/' + focusedEvent.id], { skipLocationChange: true, replaceUrl: true, preserveFragment: false });
                    if (this.paramConfig.DEBUG_FLAG)
                        console.log("in stateChange : ", focusedEvent.id);
                }
                if (object.isPhonePortrait) {
                    object.showPanelbar = false;
                }
                //this.starServices.setRTL();
                //this.showPanelbar = false;
            }
        }
        return false;
    }
    setPanelBar(object) {
        if (!object.staticMenu) {
            object.Body = [];
            let NewVal = {
                MENU: object.currentMenu.toUpperCase(),
                USERNAME: object.starServices.sessionParams.USERNAME.toUpperCase(),
                LANGUAGE_NAME: object.paramConfig.userLang.toUpperCase(),
                HIDDEN: '0'
            };
            NewVal["_QUERY"] = "GET_MENU_ROUTINES";
            object.addToBody(NewVal);
            let NewVal1 = {
                MENU: "",
                USERNAME: object.starServices.sessionParams.USERNAME.toUpperCase()
            };
            NewVal1["_QUERY"] = "GET_ROUTINES_AUTHORITY";
            object.addToBody(NewVal1);
            this.fetchMenu(object, this.handleFetchedPanelBar);
        }
    }
    handleFetchedPanelBar(object, data, showEmpty) {
        function checkAuthData(routine_name, authData) {
            let i = 0;
            let routineAuth;
            while (i < authData.length) {
                if (authData[i].ROUTINE_NAME == routine_name) {
                    routineAuth = authData[i];
                    break;
                }
                i++;
            }
            return routineAuth;
        }
        function formatData(arr, authData, showEmpty) {
            let menu = [];
            let items = [];
            for (let i = 0; i < arr.length; i++) {
                if (object.paramConfig.DEBUG_FLAG)
                    console.log("arr[i]:", arr[i]);
                let type = arr[i].choice_type.charAt(0);
                if (type == "M") {
                    if (items.length != 0) {
                        let item = {
                            text: menuItem.text,
                            choice: menuItem.choice,
                            items: items
                        };
                        menu.push(item);
                        items = [];
                    }
                    var menuItem = {
                        text: arr[i].text,
                        choice: arr[i].choice
                    };
                    //menu.push(item);
                }
                else if (type == "R") {
                    if (object.paramConfig.DEBUG_FLAG)
                        console.log("authData:", authData, "arr[i]:", arr[i]);
                    let routineAuth = checkAuthData(arr[i].choice, authData);
                    if (typeof routineAuth !== "undefined") {
                        if (object.paramConfig.DEBUG_FLAG)
                            console.log("arr[i].choice:" + arr[i].choice + "  routineAuth.DISP_FLAG:" + routineAuth.DISP_FLAG + " routineAuth.AUTHLEVEL :" + routineAuth.AUTHLEVEL);
                        if (routineAuth.DISP_FLAG != "N") // && (routineAuth.AUTHLEVEL != 0) )
                         {
                            let routineItem = {
                                text: arr[i].text,
                                choice: arr[i].choice,
                                authLevel: routineAuth.AUTHLEVEL,
                                routineDesc: routineAuth.ROUTINE_DESC,
                                routineVer: routineAuth.ROUT_VER,
                                routerLink: "/" + arr[i].choice
                            };
                            items.push(routineItem);
                        }
                    }
                    if (object.paramConfig.DEBUG_FLAG)
                        console.log("---items:", items);
                }
            }
            if (items.length != 0) {
                let item = {
                    text: menuItem.text,
                    choice: menuItem.choice,
                    items: items
                };
                menu.push(item);
                items = [];
            }
            else if (showEmpty && (typeof menuItem !== "undefined")) {
                let item = {
                    text: menuItem.text,
                    choice: menuItem.choice,
                    items: []
                };
                menu.push(item);
            }
            return menu;
        }
        object.menu = formatData(data[0].data, data[1].data, showEmpty);
        object.panelItems = object.menu;
        object.menuItemsHoriz = object.menu;
        let paramConfig = {
            "Name": "menu",
            "Val": object.menu
        };
        setParamConfig(paramConfig);
    }
    sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
    beginTrans() {
        this.commitBody = [];
        this.inTrans = true;
    }
    endTrans(object, commit) {
        let Page = "&_trans=Y";
        let tableInfo;
        if (commit && this.commitBody.length != 0) {
            return new Promise(resolve => {
                this.post(this, Page, this.commitBody).subscribe(result => {
                    this.commitBody = [];
                    this.inTrans = false;
                    tableInfo = result.data[0].data;
                    return resolve(tableInfo);
                }, err => {
                    object.FORM_TRIGGER_FAILURE = true;
                    this.commitBody = [];
                    this.inTrans = false;
                    //alert('error:' + err.message);
                    this.showErrorMsg(object, err);
                    return resolve(tableInfo);
                });
            });
        }
        else {
            this.commitBody = [];
            this.inTrans = false;
            return null;
        }
    }
    // public addToBody(NewVal) {
    //   this.Body.push(NewVal);
    // }
    execSQLBody(object, Body, DBLoc) {
        function getFirstWord(str) {
            let myArray = str.split("_");
            return myArray[0];
        }
        object.FORM_TRIGGER_FAILURE = false;
        let Page = "&_trans=N";
        if (DBLoc != "")
            Page = Page + "&DBLoc=" + DBLoc;
        let tableInfo;
        object.NOTFOUND = false;
        if (this.inTrans) {
            let firstWord = getFirstWord(Body[0]._QUERY).toUpperCase();
            let isCommitCommand = this.commitCommands.includes(firstWord);
            if (isCommitCommand) {
                this.commitBody.push(Body[0]);
                return tableInfo;
            }
        }
        return new Promise(resolve => {
            //console.log ("check:dirty testx execSQLBody 2");
            this.post(this, Page, Body).subscribe(result => {
                //console.log ("check:dirty testx execSQLBody 3");
                tableInfo = result.data;
                // if (result.data.length == 0)
                //   object.NOTFOUND = true;
                return resolve(tableInfo);
            }, err => {
                object.FORM_TRIGGER_FAILURE = true;
                alert('error:' + err.message);
                return resolve(tableInfo);
            });
        });
    }
    execSQL(object, sqlStmt) {
        function getFirstWord(str) {
            let spaceIndex = str.trim().indexOf(' ');
            return spaceIndex === -1 ? str : str.substr(0, spaceIndex);
        }
        object.FORM_TRIGGER_FAILURE = false;
        let Page = "&_trans=N";
        this.Body = [];
        let NewVal = {};
        NewVal["_QUERY"] = "EXECSQL";
        NewVal["_STMT"] = sqlStmt;
        let tableInfo;
        object.NOTFOUND = false;
        if (this.inTrans) {
            let firstWord = getFirstWord(sqlStmt).toUpperCase();
            let isCommitCommand = this.commitCommands.includes(firstWord);
            if (isCommitCommand) {
                this.commitBody.push(NewVal);
                return tableInfo;
            }
        }
        this.Body = this.addToBody(NewVal, this.Body);
        return new Promise(resolve => {
            this.post(this, Page, this.Body).subscribe(result => {
                this.Body = [];
                tableInfo = result.data[0].data;
                if (result.data[0].rowCount == 0)
                    object.NOTFOUND = true;
                return resolve(tableInfo);
            }, err => {
                object.FORM_TRIGGER_FAILURE = true;
                alert('error:' + err.message);
                return resolve(tableInfo);
            });
        });
    }
    ////////
    att_img_getFileLink(field_data, object) {
        let fileLink = "";
        if (field_data == null)
            return fileLink;
        field_data = field_data.trim();
        try {
            field_data = JSON.parse(field_data);
        }
        catch (e) {
            //console.log ("Error parsing :",field_data);
            return fileLink;
        }
        //console.log("getFileLink:field_data:", field_data, typeof field_data)    
        //console.log("getFileLink:field_data:", field_data)
        if (typeof field_data == "object")
            fileLink = object.AttDwnUrl + encodeURI(field_data[0].name);
        //console.log("getFileLink:fileLink:", fileLink)
        return fileLink;
    }
    att_img_getAtt(data, object) {
        let atts = "";
        // console.log("getAtt_data:", data);
        let vals = [{ name: "",
                size: "" }
        ];
        try {
            vals = JSON.parse(data);
        }
        catch (e) {
            console.log("Error parsing :3:", data);
            return atts;
        }
        //if ((data != "") && (data != "[]") && (data != null)) {
        //vals = JSON.parse(data);
        console.log("getAtt_data:", vals, typeof vals);
        if (typeof vals == "object") {
            vals.forEach(val => {
                console.log("val:", val);
                atts = atts + "<" + val.name + " Size:" + val.size + ">";
            });
        }
        //}
        console.log("atts:", atts);
        return atts;
    }
    att_img_populateArrs(formGroup, object) {
        //console.log("att_img_populateArrs:formGroup:", formGroup, object.att_arr, object.img_arr)
        for (let i = 0; i < object.att_arr.length; i++) {
            if (formGroup[object.att_arr[i]].trim() != "") {
                try {
                    object.myFiles[object.att_arr[i]] = JSON.parse(formGroup[object.att_arr[i]]);
                }
                catch (e) {
                    //console.log ("Error parsing :",field_data);
                    return;
                }
            }
        }
        for (let i = 0; i < object.img_arr.length; i++) {
            if (formGroup[object.img_arr[i]] != null) {
                if (formGroup[object.img_arr[i]].trim() != "")
                    object.myFiles[object.img_arr[i]] = JSON.parse(formGroup[object.img_arr[i]]);
            }
        }
        for (let i = 0; i < object.att_arr.length; i++) {
            //console.log("object.att_arr[i]:", object.att_arr[i])
            if (formGroup[object.att_arr[i]] != "") {
                let items1 = [];
                let field_data = formGroup[object.att_arr[i]];
                try {
                    field_data = JSON.parse(field_data);
                }
                catch (e) {
                    console.log("Error parsing :4:", field_data);
                    field_data = null;
                    //return atts;
                }
                //field_data = JSON.parse(field_data);
                if (field_data != null) {
                    for (let j = 0; j < field_data.length; j++) {
                        let item = { title: field_data[j].name, url: object.AttDwnUrl + encodeURI(field_data[j].name) };
                        items1.push(item);
                    }
                }
                object.img_gallery[object.att_arr[i]] = items1;
            }
            //console.log("img_gallery:", object.img_gallery)
        }
        if (typeof object.svg_arr != "undefined") {
            for (let i = 0; i < object.svg_arr.length; i++) {
                let svgVal = formGroup[object.svg_arr[i]];
                console.log("svg_arr[i]:", object.svg_arr[i], svgVal);
                svgVal = this.convertSvgToKendoSVGIcon(this, svgVal, null, object.svg_arr[i]);
                console.log("svg_arr[i]:new:", svgVal);
                formGroup[object.svg_arr[i] + "_SVG"] = svgVal;
            }
        }
    }
    convToString(val) {
        return String(val);
    }
    att_img_populateArrsList(formGroupArr, object) {
        //console.log("att_img_populateArrs:formGroup:", formGroupArr, object.att_arr, object.img_arr)
        for (let k = 0; k < formGroupArr.length; k++) {
            let formGroup = formGroupArr[k];
            for (let i = 0; i < object.att_arr.length; i++) {
                //console.log("att_img_populateArrs:object.att_arr[i]:", object.att_arr[i],formGroup , formGroup[object.att_arr[i]])
                //console.log("att_img_populateArrs:formGroup[object.att_arr[i]]:"+formGroup[object.att_arr[i]].trim() +":"  )
                if (formGroup[object.att_arr[i]].trim() != "")
                    object.myFiles[object.att_arr[i]] = JSON.parse(formGroup[object.att_arr[i]]);
            }
            for (let i = 0; i < object.img_arr.length; i++) {
                if (formGroup[object.img_arr[i]] != "")
                    object.myFiles[object.img_arr[i]] = JSON.parse(formGroup[object.img_arr[i]]);
            }
            //console.log("att_img_populateArrs:object.myFiles:k:", k,object.myFiles, object.att_arr )
            for (let i = 0; i < object.att_arr.length; i++) {
                //console.log("att_img_populateArrs:object.att_arr[i]:", object.att_arr[i], formGroup[object.att_arr[i]])
                //console.log("att_img_populateArrs:object.att_arr[i]:"+ formGroup[object.att_arr[i]] + ":")
                let arrVal = formGroup[object.att_arr[i]];
                arrVal = arrVal.trim();
                if (arrVal != "") {
                    let items1 = [];
                    let field_data = formGroup[object.att_arr[i]];
                    field_data = JSON.parse(field_data);
                    if (field_data != null) {
                        for (let j = 0; j < field_data.length; j++) {
                            let item = { title: field_data[j].name, url: object.AttDwnUrl + encodeURI(field_data[j].name) };
                            items1.push(item);
                        }
                    }
                    //console.log("att_img_populateArrs:img_gallery:k:", k,object.att_arr[i],  items1)
                    let img_gallery = [];
                    img_gallery[object.att_arr[i]] = items1;
                    object.img_gallery[k] = img_gallery;
                }
                else {
                    let img_gallery = [];
                    img_gallery[object.att_arr[i]] = [];
                    object.img_gallery[k] = img_gallery;
                }
            }
            //console.log("att_img_populateArrs:img_gallery:", object.img_gallery)
        }
    }
    att_webcam_form_openUploadimage(field_id, object) {
        //object.uploadimage = true;
        //console.log("openUploadimage:field_id:", field_id, object.myFiles, object.myFiles[field_id])
        let myFiles = [];
        if (typeof object.myFiles[field_id] != "undefined") {
            myFiles = object.myFiles[field_id];
        }
        let filesDeleted = [];
        if (typeof object.filesDeleted[field_id] != "undefined") {
            filesDeleted = object.filesDeleted[field_id];
        }
        let hideOthers = false;
        if (typeof object.disableUpload != "undefined") {
            hideOthers = object.disableUpload;
        }
        let imageID = field_id;
        var masterParams = {
            "action": "upload",
            "imageID": imageID,
            "myFiles": myFiles,
            "filesDeleted": filesDeleted,
            "hideOthers": hideOthers
        };
        object.DSP_WEBCAMConfig = new componentConfigDef();
        object.DSP_WEBCAMConfig.masterParams = masterParams;
        //console.log("object.DSP_WEBCAMConfig.masterParams:", object.DSP_WEBCAMConfig.masterParams)
    }
    att_img_form_openUploadimage(field_id, object) {
        //object.uploadimage = true;
        console.log("openUploadimage:field_id:", field_id, object.myFiles, object.myFiles[field_id]);
        let myFiles = [];
        if (typeof object.myFiles[field_id] != "undefined") {
            myFiles = object.myFiles[field_id];
        }
        let filesDeleted = [];
        if (typeof object.filesDeleted[field_id] != "undefined") {
            filesDeleted = object.filesDeleted[field_id];
        }
        let hideOthers = false;
        if (typeof object.disableUpload != "undefined") {
            hideOthers = object.disableUpload;
        }
        let imageID = field_id;
        var masterParams = {
            "action": "upload",
            "imageID": imageID,
            "myFiles": myFiles,
            "filesDeleted": filesDeleted,
            "hideOthers": hideOthers
        };
        object.DSP_UPLOADConfig = new componentConfigDef();
        object.DSP_UPLOADConfig.masterParams = masterParams;
        console.log("object.DSP_UPLOADConfig.masterParams:", object.DSP_UPLOADConfig.masterParams);
    }
    callGetSaveAttachemts(action, data, object) {
        //console.log("callSaveAttachemts:myFiles:", object.myFiles)
        let canSend = false;
        if (typeof object.att_arr != "undefined") {
            for (let i = 0; i < object.att_arr.length; i++) {
                if (typeof data[object.att_arr[i]] !== "undefined" && data[object.att_arr[i]].trim() != "")
                    canSend = true;
            }
        }
        if (typeof object.img_arr != "undefined") {
            for (let i = 0; i < object.img_arr.length; i++) {
                if (typeof data[object.img_arr[i]] !== "undefined" && data[object.img_arr[i]].trim() != "")
                    canSend = true;
            }
        }
        var masterParams = {
            "action": action,
            "att_arr": object.att_arr,
            "img_arr": object.img_arr,
            "myFiles": object.myFiles,
            "filesDeleted": object.filesDeleted,
            "data": data
        };
        if (action == "save")
            canSend = true;
        if (canSend) {
            console.log("callGetSaveAttachemts:masterParams:", masterParams);
            object.DSP_UPLOADConfig = new componentConfigDef();
            object.DSP_UPLOADConfig.masterParams = masterParams;
        }
    }
    callGetSaveWebCam(action, data, object) {
        //console.log("callSaveAttachemts:myFiles:", object.myFiles)
        var masterParams = {
            "action": action,
            "att_arr": object.att_arr,
            "img_arr": object.img_arr,
            "myFiles": object.myFiles,
            "filesDeleted": object.filesDeleted,
            "data": data
        };
        object.DSP_WEBCAMConfig = new componentConfigDef();
        object.DSP_WEBCAMConfig.masterParams = masterParams;
    }
    async att_img_saveFormCompletedHandler(value, object) {
        //console.log("att_img_saveFormCompletedHandler:value", value);
        let field_id = value.field_id;
        object.myFiles[field_id] = value.myFiles;
        object.filesDeleted[field_id] = value.filesDeleted;
        object.camImage = value.camImage;
        //console.log("object.myFiles[field_id]:", object.myFiles[field_id])
        let JSONVal = JSON.stringify(object.myFiles[field_id]);
        if (JSONVal == "[]")
            JSONVal = "";
        object.form.getRawValue()[field_id] = JSONVal;
        object.form.patchValue({ [field_id]: JSONVal });
        if (typeof object.att_img_saveFormCompleted != "undefined") {
            let NewVal = [];
            NewVal.push(field_id);
            object.att_img_saveFormCompleted.apply(object, NewVal);
        }
    }
    async att_img_saveForm2CompletedHandler(value, object) {
        console.log("att_img_saveFormCompletedHandler:value", value);
        let field_id = value.field_id;
        object.myFiles[field_id] = value.myFiles;
        object.filesDeleted[field_id] = value.filesDeleted;
        console.log("object.myFiles[field_id]:", object.myFiles[field_id]);
        let JSONVal = JSON.stringify(object.myFiles[field_id]);
        if (JSONVal == "[]")
            JSONVal = "";
        object.form2.value[field_id] = JSONVal;
        object.form2.patchValue({ [field_id]: JSONVal });
        if (typeof object.att_img_saveFormCompleted != "undefined") {
            let NewVal = [];
            NewVal.push(field_id);
            object.att_img_saveFormCompleted.apply(object, NewVal);
        }
    }
    att_img_saveGridCompletedHandler(value, object) {
        //console.log("att_img_saveGridCompletedHandler:value", value);
        let field_id = value.field_id;
        object.myFiles[field_id] = value.myFiles;
        object.filesDeleted[field_id] = value.filesDeleted;
        //console.log("checking:2:object.myFiles[field_id]:", JSON.stringify(object.myFiles[field_id]) )
        let JSONVal = JSON.stringify(object.myFiles[field_id]);
        if (JSONVal == "[]")
            JSONVal = "";
        object.formGroup.patchValue({ [field_id]: JSONVal });
        object.formGroup.markAsDirty();
        //console.log("att_img_saveGridCompletedHandler:object.formGroup.value", object.formGroup.value);
        object.uploadimage = false;
    }
    async att_img_grid_openUploadimage(field_id, object) {
        if (!object.componentConfig.enabled)
            return;
        await object.starServices.sleep(300);
        //console.log("att_img_grid_openUploadimage:object.formGroup:", object.formGroup)
        object.uploadimage = true;
        if (typeof object.formGroup != "undefined") {
            object.myFiles[field_id] = [];
            object.starServices.att_img_populateArrs(object.formGroup.value, object);
            //console.log("openUploadimage:field_id:", field_id, object.myFiles, object.myFiles[field_id])
            let myFiles = [];
            if (typeof object.myFiles[field_id] != "undefined") {
                myFiles = object.myFiles[field_id];
            }
            let filesDeleted = [];
            if (typeof object.filesDeleted[field_id] != "undefined") {
                filesDeleted = object.filesDeleted[field_id];
            }
            let hideOthers = false;
            if (typeof object.disableUpload != "undefined") {
                hideOthers = object.disableUpload;
            }
            let imageID = field_id;
            var masterParams = {
                "action": "upload",
                "imageID": imageID,
                "myFiles": myFiles,
                "filesDeleted": filesDeleted,
                "hideOthers": hideOthers
            };
            object.DSP_UPLOADConfig = new componentConfigDef();
            object.DSP_UPLOADConfig.masterParams = masterParams;
        }
    }
    async att_webcam_grid_openUploadimage(field_id, object) {
        if (!object.componentConfig.enabled)
            return;
        await object.starServices.sleep(300);
        //console.log("att_webcam_grid_openUploadimage:object.formGroup:", object.formGroup)
        object.uploadimage = true;
        if (typeof object.formGroup != "undefined") {
            object.myFiles[field_id] = [];
            object.starServices.att_img_populateArrs(object.formGroup.value, object);
            //console.log("openUploadimage:field_id:", field_id, object.myFiles, object.myFiles[field_id])
            let myFiles = [];
            if (typeof object.myFiles[field_id] != "undefined") {
                myFiles = object.myFiles[field_id];
            }
            let filesDeleted = [];
            if (typeof object.filesDeleted[field_id] != "undefined") {
                filesDeleted = object.filesDeleted[field_id];
            }
            let imageID = field_id;
            var masterParams = {
                "action": "upload",
                "imageID": imageID,
                "myFiles": myFiles,
                "filesDeleted": filesDeleted
            };
            object.DSP_WEBCAMConfig = new componentConfigDef();
            object.DSP_WEBCAMConfig.masterParams = masterParams;
        }
    }
    addNewCode(object, CODENAME) {
        object.grid_som_tabs_codes = new tabsCodes();
        object.grid_som_tabs_codes['CODENAME'] = CODENAME; // for retrieve data
        object.SOM_TABS_CODESConfig = new componentConfigDef();
        let masterParams = {
            action: "ADD",
            CODENAME: CODENAME,
            CODE: object.filterCode,
            CODETEXT_LANG: object.filterCode
        };
        object.SOM_TABS_CODESConfig.masterParams = masterParams; // For add new record
        object.showCodeDetails = true;
    }
    setIdOrder(object, idField, orderField) {
        let ID = 1;
        let ORDER = 1;
        let GridData = object.grid.data;
        if (typeof GridData.data !== "undefined") {
            for (let i = 0; i < GridData.data.length; i++) {
                if (GridData.data[i][idField] >= ID)
                    ID = parseInt(GridData.data[i][idField]) + 1;
                if (GridData.data[i][orderField] >= ORDER)
                    ORDER = parseInt(GridData.data[i][orderField]) + 1;
            }
        }
        let values = {
            [idField]: ID,
            [orderField]: ORDER
        };
        console.log("setInitialValues:values:", values);
        object.formGroup.patchValue(values);
    }
    rowReorder(object, orderField, e) {
        if (object.paramConfig.DEBUG_FLAG)
            console.log("rowReorder:", e);
        if (object.paramConfig.DEBUG_FLAG)
            console.log("rowReorder:", e.draggedRows[0].rowIndex);
        if (object.paramConfig.DEBUG_FLAG)
            console.log("rowReorder:", e.dropPosition);
        if (object.paramConfig.DEBUG_FLAG)
            console.log("rowReorder:", e.dropTargetRow.rowIndex);
        let dataItem = e.draggedRows[0].dataItem;
        let GridData;
        GridData = object.grid.data;
        if (e.dropPosition == "after") {
            GridData.data.splice(e.dropTargetRow.rowIndex + 1, 0, dataItem);
            //Remove draggedRows
            GridData.data = GridData.data.filter(function (dataItem, index) {
                return index !== e.draggedRows[0].rowIndex;
            });
        }
        else if (e.dropPosition == "before") {
            //Remove draggedRows
            GridData.data = GridData.data.filter(function (dataItem, index) {
                return index !== e.draggedRows[0].rowIndex;
            });
            GridData.data.splice(e.dropTargetRow.rowIndex, 0, dataItem);
        }
        //write order field
        if (object.paramConfig.DEBUG_FLAG)
            console.log("rowReorder:GridData.data:", GridData.data);
        for (let i = 0; i < GridData.data.length; i++) {
            GridData.data[i][orderField] = i + 1;
            GridData.data[i]._QUERY = object.updateCMD;
        }
        object.saveChanges(object.grid);
    }
    handleFilterCode(object, CODE) {
        if (object.starServices.sessionParams.USER_INFO.GROUPNAME == "SYSADM") {
            object.filterCode = CODE;
        }
    }
    removeNonValidColumns(comp, InitialValues) {
        console.log("removeNonValidGridColumns:", comp, InitialValues);
        let Keys = Object.keys(comp);
        for (let j = 0; j < Keys.length; j++) {
            let field = Keys[j];
            let exists = InitialValues[field];
            console.log("removeNonValidGridColumns:", field, exists);
            if (typeof exists == "undefined") {
                delete comp[field];
            }
        }
    }
    formatthisDate(date1, DateFormat, dateLocale) {
        if ((date1 != "") && (typeof date1 != "undefined"))
            return (formatDate(date1, DateFormat, dateLocale));
        else
            return null;
    }
    encryptData(data) {
        try {
            return CryptoJS.AES.encrypt(JSON.stringify(data), this.encryptSecretKey).toString();
        }
        catch (e) {
            console.log(e);
        }
    }
    decryptData(data) {
        try {
            const bytes = CryptoJS.AES.decrypt(data, this.encryptSecretKey);
            if (bytes.toString()) {
                return JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
            }
            return data;
        }
        catch (e) {
            console.log(e);
        }
    }
    dataExits(object) {
        let status = false;
        if (typeof (object.executeQueryresult) != "undefined") {
            if (object.executeQueryresult.data) {
                status = true;
            }
            return status;
        }
    }
    hideNoValidLicense() {
        const collection = document.getElementsByTagName("div");
        //console.log ("checking:collection:",collection);
        for (let i = 0; i < collection.length; i++) {
            let innerHTML = collection[i].innerHTML;
            //console.log ("checking:innerHTML:",innerHTML);
            //let result = innerHTML.includes("ng-reflect-ng-style");
            //let result = innerHTML.includes("display: flex;");
            let result = innerHTML.includes("A license key is required");
            //console.log ("checking:result:",i, result);
            if (result) {
                result = innerHTML.includes("License key missing");
                if (result) {
                    //console.log ("checking:innerHTML:",result,innerHTML);
                    collection[i].style.setProperty('display', 'none');
                }
            }
        }
        //console.log ("collection:", collection.length, collection[35])
    }
    async showMultiStepForm(object, templateName) {
        let Body = [];
        let templateInfo;
        var newVal = { "_QUERY": "GET_DSP_TEMPLATE",
            "TEMPLATE_NAME": templateName };
        Body.push(newVal);
        newVal = { "_QUERY": "GET_DSP_TEMPLATE_DETAIL",
            "TEMPLATE_NAME": templateName,
            "SEQUENCE_NAME": "%" };
        Body.push(newVal);
        let data = await this.execSQLBody(this, Body, "");
        if (typeof data != "undefined" && data[0].data.length > 0) {
            this.Body = [];
            templateInfo = data[0].data[0];
            let templateDetail = data[1].data[0];
            //if ((this.addForm.value.ORDER_FIELDS == "") || (this.addForm.value.ORDER_FIELDS == null)) {
            //  this.addForm.value.ORDER_FIELDS = "{}";
            //}
            var formPagesNo = templateDetail.FORM_PAGES_NO;
            object.formMasterParams = {
                "formName": templateInfo.FORM_NAME,
                "formPagesNo": formPagesNo,
                //"orderFields": this.addForm.value.ORDER_FIELDS,
                "orderFields": "{}",
                //"addForm": this.addForm.value,
                "addForm": templateInfo,
                "callingForm": "PRVORDERAD",
            };
            console.log("templateInfo:", templateInfo, "`objet`.formMasterParams:", object.formMasterParams);
            object.showCallScreen = true;
        }
        object.templateInfo = templateInfo;
        return templateInfo;
    }
    async callScreen(object, templateInfo) {
        console.log("callScreen - templateInfo:", templateInfo, "this.formMasterParams:", object.formMasterParams);
        let Body = [];
        var newVal = { "_QUERY": "GET_MENUS_QUERY",
            "_WHERE": "CHOICE  = '" + templateInfo.FORM_NAME + "'" };
        Body.push(newVal);
        console.log("callScreen - Body:", Body);
        let data = await this.execSQLBody(this, Body, "");
        console.log("callScreen - data:", data);
        if (typeof data != "undefined" && data[0].data.length > 0) {
            var menu = data[0].data[0];
            console.log("callScreen - menu:", menu);
            let compSelector = menu.FLEX_FLD1;
            object.children = [];
            object.children.push(compSelector);
            object.commonCallStarNotify(object.formMasterParams);
        }
        object.router.navigate(['/' + templateInfo.FORM_NAME], { skipLocationChange: true, replaceUrl: false, preserveFragment: true });
    }
    getInvalidControls(object) {
        //console.log ("getInvalidControls:",   object.form.invalid, object.form.controls)
        const invalid = [];
        const controls = object.form.controls;
        for (let name in controls) {
            if (controls[name].invalid) {
                if (typeof object.compTitleMsg != "undefined") {
                    name = this.getNLS([], object.compTitleMsg + "." + name, name);
                }
                invalid.push(name);
            }
        }
        this.showNotification("error", this.getNLS([invalid.toString()], 'NO_VALID_DATA_FOR', 'No valid data for :  ## '));
        let Msg = this.getNLS([invalid.toString()], 'NO_VALID_DATA_FOR', 'No valid data for :  ## ');
        var dialogStruc = {
            msg: Msg,
            title: "Error",
            info: null,
            object: this,
            action: this.OkActions,
            callback: null
        };
        this.showConfirmation(dialogStruc);
        return invalid;
    }
    convertSvgToKendoSVGIcon(object, svgContent, iconName, column) {
        if ((typeof iconName === 'undefined') || iconName === null)
            iconName = column;
        try {
            // --- 1. viewBox (fallback to width/height, then 0 0 24 24) ---
            let viewBox = svgContent.match(/viewBox\s*=\s*"([^"]+)"/)?.[1];
            if (!viewBox) {
                const wMatch = svgContent.match(/\bwidth\s*=\s*"([\d.]+)/);
                const hMatch = svgContent.match(/\bheight\s*=\s*"([\d.]+)/);
                const w = wMatch ? parseFloat(wMatch[1]) : 24;
                const h = hMatch ? parseFloat(hMatch[1]) : 24;
                viewBox = `0 0 ${w} ${h}`;
            }
            // --- 2. Extract inner content of <svg>...</svg> ---
            const innerMatch = svgContent.match(/<svg[^>]*>([\s\S]*?)<\/svg>/i);
            let content = innerMatch ? innerMatch[1] : svgContent;
            // --- 3. Remove XML declaration and comments ---
            content = content
                .replace(/<\?xml[\s\S]*?\?>/g, '')
                .replace(/<!--[\s\S]*?-->/g, '');
            // --- 4. Collapse whitespace between tags but keep the shape markup intact ---
            //    Keeps the exact attributes but avoids giant runs of spaces/newlines.
            content = content
                .replace(/\s+/g, ' ') // collapse all whitespace to single spaces
                .replace(/>\s+</g, '><') // remove whitespace between adjacent tags
                .trim();
            // --- 5. Build the icon descriptor ---
            const icon = {
                name: iconName,
                content: content,
                viewBox: viewBox,
                variants: {
                    solid: '',
                    outline: '',
                    duotone: ''
                }
            };
            // --- 6. Store on the caller's object (same pattern as before) ---
            if (!object.svg_data)
                object.svg_data = {};
            object.svg_data[column] = icon;
            console.log('convertSvgToKendoIcon:', icon);
            return icon;
        }
        catch (error) {
            if (object.svg_data)
                object.svg_data[column] = {};
            console.error(`convertSvgToKendoIcon error: ${iconName}`, error);
            return null;
        }
    }
    convertSvgToKendoIcon(object, svgContent, iconName, column) {
        if ((typeof iconName === 'undefined') || iconName === null)
            iconName = column;
        console.log("convertSvgToKendoIcon:svgContent:", svgContent, "iconName:", iconName, "column:", column);
        try {
            // Extract viewBox
            const viewBoxMatch = svgContent.match(/viewBox="([^"]+)"/);
            const viewBox = viewBoxMatch ? viewBoxMatch[1] : '0 0 24 24';
            // Parse viewBox values
            const viewBoxValues = viewBox.split(' ').map(Number);
            const [minX, minY, viewBoxWidth, viewBoxHeight] = viewBoxValues;
            // Extract width and height if specified
            const widthMatch = svgContent.match(/width="([^"]+)"/);
            const heightMatch = svgContent.match(/height="([^"]+)"/);
            const svgWidth = widthMatch ? parseFloat(widthMatch[1]) : viewBoxWidth;
            const svgHeight = heightMatch ? parseFloat(heightMatch[1]) : viewBoxHeight;
            // Target size for normalization (24x24 is common for icons)
            const TARGET_SIZE = 24;
            // Calculate scale to fit within target size while maintaining aspect ratio
            const scaleX = TARGET_SIZE / viewBoxWidth;
            const scaleY = TARGET_SIZE / viewBoxHeight;
            const scale = Math.min(scaleX, scaleY); // Use min to fit within target bounds
            // Calculate offset to center the icon
            const scaledWidth = viewBoxWidth * scale;
            const scaledHeight = viewBoxHeight * scale;
            const offsetX = (TARGET_SIZE - scaledWidth) / 2;
            const offsetY = (TARGET_SIZE - scaledHeight) / 2;
            // Extract all paths with their styles and attributes
            const pathRegex = /<path[^>]*>/g;
            let match;
            let paths = [];
            let pathCount = 0;
            while ((match = pathRegex.exec(svgContent)) !== null) {
                const pathTag = match[0];
                pathCount++;
                // Extract d attribute (required)
                const dMatch = pathTag.match(/d="([^"]*)"/);
                if (!dMatch) {
                    console.warn(`Path ${pathCount} has no 'd' attribute, skipping`);
                    continue;
                }
                // Transform the path data to scale and center it
                const transformedD = this.transformPathData(dMatch[1], scale, offsetX, offsetY, viewBoxWidth, viewBoxHeight);
                // Initialize attributes
                let fill = '';
                let stroke = '';
                let strokeWidth = '';
                let fillOpacity = '';
                let strokeOpacity = '';
                let opacity = '';
                // Extract from style attribute
                const styleMatch = pathTag.match(/style="([^"]*)"/);
                if (styleMatch) {
                    const style = styleMatch[1];
                    // Extract all style properties
                    const fillMatch = style.match(/fill:([^;"]+)/);
                    if (fillMatch) {
                        const fillValue = fillMatch[1].trim();
                        if (fillValue && fillValue !== '') {
                            fill = fillValue;
                        }
                    }
                    const strokeMatch = style.match(/stroke:([^;"]+)/);
                    if (strokeMatch) {
                        const strokeValue = strokeMatch[1].trim();
                        if (strokeValue && strokeValue !== '') {
                            stroke = strokeValue;
                        }
                    }
                    const strokeWidthMatch = style.match(/stroke-width:([^;"]+)/);
                    if (strokeWidthMatch) {
                        const originalStrokeWidth = parseFloat(strokeWidthMatch[1].trim());
                        // Scale stroke width proportionally
                        if (!isNaN(originalStrokeWidth)) {
                            strokeWidth = (originalStrokeWidth * scale).toString();
                        }
                    }
                    const fillOpacityMatch = style.match(/fill-opacity:([^;"]+)/);
                    if (fillOpacityMatch) {
                        fillOpacity = fillOpacityMatch[1].trim();
                    }
                    const strokeOpacityMatch = style.match(/stroke-opacity:([^;"]+)/);
                    if (strokeOpacityMatch) {
                        strokeOpacity = strokeOpacityMatch[1].trim();
                    }
                    const opacityMatch = style.match(/opacity:([^;"]+)/);
                    if (opacityMatch) {
                        opacity = opacityMatch[1].trim();
                    }
                }
                // If no style, check individual attributes
                if (!styleMatch) {
                    const fillAttr = pathTag.match(/fill="([^"]*)"/);
                    if (fillAttr && fillAttr[1] !== '') {
                        fill = fillAttr[1];
                    }
                    const strokeAttr = pathTag.match(/stroke="([^"]*)"/);
                    if (strokeAttr && strokeAttr[1] !== '') {
                        stroke = strokeAttr[1];
                    }
                    const strokeWidthAttr = pathTag.match(/stroke-width="([^"]*)"/);
                    if (strokeWidthAttr) {
                        const originalStrokeWidth = parseFloat(strokeWidthAttr[1]);
                        // Scale stroke width proportionally
                        if (!isNaN(originalStrokeWidth)) {
                            strokeWidth = (originalStrokeWidth * scale).toString();
                        }
                    }
                    const fillOpacityAttr = pathTag.match(/fill-opacity="([^"]*)"/);
                    if (fillOpacityAttr) {
                        fillOpacity = fillOpacityAttr[1];
                    }
                    const strokeOpacityAttr = pathTag.match(/stroke-opacity="([^"]*)"/);
                    if (strokeOpacityAttr) {
                        strokeOpacity = strokeOpacityAttr[1];
                    }
                }
                // Build path element with transformed d attribute
                let pathElement = `<path d="${transformedD}"`;
                // Add fill if it exists (including 'none')
                if (fill && fill !== '') {
                    pathElement += ` fill="${fill}"`;
                }
                // Add stroke if it exists (including 'none')
                if (stroke && stroke !== '') {
                    pathElement += ` stroke="${stroke}"`;
                }
                // Add stroke-width if it exists
                if (strokeWidth && strokeWidth !== '') {
                    pathElement += ` stroke-width="${strokeWidth}"`;
                }
                // Add opacity if it exists
                if (opacity && opacity !== '') {
                    pathElement += ` opacity="${opacity}"`;
                }
                // Add fill-opacity if it exists
                if (fillOpacity && fillOpacity !== '') {
                    pathElement += ` fill-opacity="${fillOpacity}"`;
                }
                // Add stroke-opacity if it exists
                if (strokeOpacity && strokeOpacity !== '') {
                    pathElement += ` stroke-opacity="${strokeOpacity}"`;
                }
                pathElement += ` />`;
                paths.push(pathElement);
            }
            console.log("convertSvgToKendoIcon:here1:");
            // If no paths found, try to extract from SVG content directly (fallback)
            if (paths.length === 0) {
                console.warn('No paths found in SVG, trying fallback extraction');
                const contentMatch = svgContent.match(/<svg[^>]*>([\s\S]*?)<\/svg>/);
                if (contentMatch && contentMatch[1]) {
                    const innerContent = contentMatch[1];
                    const innerPathRegex = /<path[^>]*>/g;
                    let innerMatch;
                    while ((innerMatch = innerPathRegex.exec(innerContent)) !== null) {
                        paths.push(innerMatch[0]);
                    }
                }
            }
            // If still no paths, return null or throw error
            if (paths.length === 0) {
                console.error(`No paths found in SVG for icon: ${iconName}`);
                return null;
            }
            // Build the content string with proper formatting
            const content = paths.join('');
            // Use the target size as the normalized viewBox
            const normalizedViewBox = `0 0 ${TARGET_SIZE} ${TARGET_SIZE}`;
            // Create the Kendo icon structure
            object.svg_data[column] = {
                name: iconName,
                content: content,
                viewBox: normalizedViewBox,
                variants: {
                    solid: '',
                    outline: '',
                    duotone: ''
                }
            };
            console.log("convertSvgToKendoIcon:object.svg_data:", object.svg_data);
            return {
                name: iconName,
                content: content,
                viewBox: normalizedViewBox,
                variants: {
                    solid: content,
                    outline: '',
                    duotone: ''
                }
            };
        }
        catch (error) {
            object.svg_data[column] = {};
            console.error(`Error converting SVG to Kendo icon: ${iconName}`, error);
            return null;
        }
    }
    // Helper function to transform path data
    transformPathData(d, scale, offsetX, offsetY, viewBoxWidth, viewBoxHeight) {
        // This function transforms the path commands
        // It handles absolute (uppercase) and relative (lowercase) commands
        const commands = d.match(/[a-zA-Z][^a-zA-Z]*/g);
        if (!commands)
            return d;
        const transformedCommands = commands.map(cmd => {
            const command = cmd[0];
            const values = cmd.slice(1).trim().split(/[\s,]+/).filter(v => v !== '').map(Number);
            if (values.length === 0)
                return cmd;
            let transformedValues = [];
            switch (command) {
                case 'M': // Move to (absolute)
                case 'L': // Line to (absolute)
                case 'C': // Cubic Bezier (absolute)
                case 'S': // Smooth Bezier (absolute)
                case 'Q': // Quadratic Bezier (absolute)
                case 'T': // Smooth Quadratic (absolute)
                case 'A': // Arc (absolute)
                case 'Z':
                case 'z':
                    // Don't transform Z commands
                    if (command === 'Z' || command === 'z') {
                        return 'Z';
                    }
                    // Transform coordinates
                    for (let i = 0; i < values.length; i += 2) {
                        const x = values[i];
                        const y = values[i + 1];
                        if (!isNaN(x) && !isNaN(y)) {
                            transformedValues.push(x * scale + offsetX);
                            transformedValues.push(y * scale + offsetY);
                        }
                        else {
                            transformedValues.push(x);
                            transformedValues.push(y);
                        }
                    }
                    break;
                case 'm': // Move to (relative)
                case 'l': // Line to (relative)
                case 'c': // Cubic Bezier (relative)
                case 's': // Smooth Bezier (relative)
                case 'q': // Quadratic Bezier (relative)
                case 't': // Smooth Quadratic (relative)
                case 'a': // Arc (relative)
                    // Transform coordinates
                    for (let i = 0; i < values.length; i += 2) {
                        const x = values[i];
                        const y = values[i + 1];
                        if (!isNaN(x) && !isNaN(y)) {
                            transformedValues.push(x * scale);
                            transformedValues.push(y * scale);
                        }
                        else {
                            transformedValues.push(x);
                            transformedValues.push(y);
                        }
                    }
                    break;
                case 'H': // Horizontal line (absolute)
                    transformedValues.push(values[0] * scale + offsetX);
                    break;
                case 'h': // Horizontal line (relative)
                    transformedValues.push(values[0] * scale);
                    break;
                case 'V': // Vertical line (absolute)
                    transformedValues.push(values[0] * scale + offsetY);
                    break;
                case 'v': // Vertical line (relative)
                    transformedValues.push(values[0] * scale);
                    break;
                default:
                    // Unknown command, keep original
                    return cmd;
            }
            // Format the values as a string
            const valueStr = transformedValues.map(v => {
                // Round to reasonable precision
                return Number.isInteger(v) ? v.toString() : v.toFixed(4);
            }).join(' ');
            return command + valueStr;
        });
        return transformedCommands.join('');
    }
    getInvalidControls_grid(object) {
        //console.log ("testing getInvalidControls:",   object.formGroup.invalid, object.formGroup.controls)
        const invalid = [];
        const controls = object.formGroup.controls;
        for (const name in controls) {
            if (controls[name].invalid) {
                let nameMSg = this.getNLS([], 'ormpgmob_fmb.userInfoOrmpgmobFmbBSubscriber["name"]', name);
                invalid.push(nameMSg);
            }
        }
        this.showNotification("error", this.getNLS([invalid.toString()], 'NO_VALID_DATA_FOR', 'No valid data for :  ## '));
        return invalid;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.10", ngImport: i0, type: starServices, deps: [{ token: i1.NotificationService }, { token: i2.DialogService }, { token: i3.HttpClient }, { token: i4.MessageService }], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "18.2.10", ngImport: i0, type: starServices, providedIn: 'root' }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.10", ngImport: i0, type: starServices, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root',
                }]
        }], ctorParameters: () => [{ type: i1.NotificationService }, { type: i2.DialogService }, { type: i3.HttpClient }, { type: i4.MessageService }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhcmxpYi5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vcHJvamVjdHMvc3RhcmxpYi9zcmMvbGliL3N0YXJsaWIuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBYyxXQUFXLEVBQUUsV0FBVyxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFJNUUsT0FBTyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUMxQyxtQ0FBbUM7QUFDbkMsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUNsQyxPQUFPLEtBQUssUUFBUSxNQUFNLFdBQVcsQ0FBQztBQUN0QyxPQUFPLEVBQUUsVUFBVSxFQUFTLE1BQU0sZ0JBQWdCLENBQUM7QUFFbkQsT0FBTyxFQUE0QixpQkFBaUIsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBQzdGLE9BQU8sRUFBRSxHQUFHLEVBQUUsY0FBYyxFQUFFLE9BQU8sRUFBZSxNQUFNLDJCQUEyQixDQUFDO0FBRXRGLE9BQU8sRUFBRSxHQUFHLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUN0QyxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFFN0MsT0FBTyxFQUFHLFNBQVMsRUFBRSxrQkFBa0IsRUFBRSxNQUFNLFNBQVMsQ0FBQzs7Ozs7O0FBV3pELHFFQUFxRTtBQUNuRSxNQUFNLE9BQU8sWUFBWTtJQXFEdkIsWUFDWSxtQkFBd0MsRUFDeEMsYUFBNEIsRUFDNUIsSUFBZ0IsRUFDaEIsUUFBd0I7UUFFcEMsY0FBYztRQUNWLGlDQUFpQztRQU56Qix3QkFBbUIsR0FBbkIsbUJBQW1CLENBQXFCO1FBQ3hDLGtCQUFhLEdBQWIsYUFBYSxDQUFlO1FBQzVCLFNBQUksR0FBSixJQUFJLENBQVk7UUFDaEIsYUFBUSxHQUFSLFFBQVEs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O1lBQzdELENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUViLE9BQU8sT0FBTyxHQUFHLFFBQVEsQ0FBQztRQUM5QixDQUFDLENBQUMsQ0FBQztRQUVILE9BQU8sbUJBQW1CLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQ3hDLENBQUM7SUFFTSx1QkFBdUIsQ0FBQyxNQUFNO1FBQ25DLG9HQUFvRztRQUNwRyxNQUFNLE9BQU8sR0FBRyxFQUFFLENBQUM7UUFDbkIsTUFBTSxRQUFRLEdBQUcsTUFBTSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUM7UUFDM0MsS0FBSyxNQUFNLElBQUksSUFBSSxRQUFRLEVBQUUsQ0FBQztZQUMxQixJQUFJLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxPQUFPLEVBQUUsQ0FBQztnQkFDMUIsSUFBSSxPQUFPLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxFQUFFLEVBQUUscURBQXFELEVBQUMsSUFBSSxDQUFDLENBQUE7Z0JBQ3hGLE9BQU8sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7WUFDMUIsQ0FBQztRQUNMLENBQUM7UUFDRCxJQUFJLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxPQUFPLENBQUMsUUFBUSxFQUFFLENBQUMsRUFDL0QsbUJBQW1CLEVBQUMsMEJBQTBCLENBQUMsQ0FBQyxDQUFDO1FBQ2pELE9BQU8sT0FBTyxDQUFDO0lBQ2pCLENBQUM7K0dBdnVLYyxZQUFZO21IQUFaLFlBQVksY0FIYixNQUFNOzs0RkFHTCxZQUFZO2tCQUoxQixVQUFVO21CQUFDO29CQUNWLFVBQVUsRUFBRSxNQUFNO2lCQUNuQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgSHR0cENsaWVudCwgSHR0cEhlYWRlcnMsIEh0dHBSZXF1ZXN0IH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xyXG5pbXBvcnQgeyBHcmlkRGF0YVJlc3VsdCB9IGZyb20gJ0Bwcm9ncmVzcy9rZW5kby1hbmd1bGFyLWdyaWQnO1xyXG5pbXBvcnQgeyB0b09EYXRhU3RyaW5nIH0gZnJvbSAnQHByb2dyZXNzL2tlbmRvLWRhdGEtcXVlcnknO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBCZWhhdmlvclN1YmplY3QgfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgbWFwLCB0YXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XHJcbi8vaW1wb3J0IHsgQW55QVJlY29yZCB9IGZyb20gJ2Rucyc7XHJcbmltcG9ydCB7IHRocm93RXJyb3IgfSBmcm9tICdyeGpzJztcclxuaW1wb3J0ICogYXMgQ3J5cHRvSlMgZnJvbSAnY3J5cHRvLWpzJztcclxuaW1wb3J0IHsgY2F0Y2hFcnJvciwgcmV0cnkgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XHJcbmltcG9ydCB7IE5vdGlmaWNhdGlvblNlcnZpY2UgfSBmcm9tICdAcHJvZ3Jlc3Mva2VuZG8tYW5ndWxhci1ub3RpZmljYXRpb24nO1xyXG5pbXBvcnQgeyBEaWFsb2dTZXJ2aWNlLCBEaWFsb2dSZWYsIERpYWxvZ0Nsb3NlUmVzdWx0IH0gZnJvbSAnQHByb2dyZXNzL2tlbmRvLWFuZ3VsYXItZGlhbG9nJztcclxuaW1wb3J0IHsgRGF5LCBmaXJzdERheUluV2VlaywgZ2V0RGF0ZSwgdG9Mb2NhbERhdGUgfSBmcm9tICdAcHJvZ3Jlc3Mva2VuZG8tZGF0ZS1tYXRoJztcclxuaW1wb3J0IHsgUGFuZWxCYXJJdGVtTW9kZWwsIFBhbmVsQmFyU3RhdGVDaGFuZ2VFdmVudCB9IGZyb20gJ0Bwcm9ncmVzcy9rZW5kby1hbmd1bGFyLWxheW91dCc7XHJcbmltcG9ydCB7IE1kNSB9IGZyb20gJ3RzLW1kNS9kaXN0L21kNSc7XHJcbmltcG9ydCB7IGZvcm1hdERhdGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQgeyBrZXlmcmFtZXMgfSBmcm9tICdAYW5ndWxhci9hbmltYXRpb25zJztcclxuaW1wb3J0IHsgIHRhYnNDb2RlcywgY29tcG9uZW50Q29uZmlnRGVmIH0gZnJvbSAnLi9tb2RlbCc7XHJcblxyXG5pbXBvcnQgeyBNZXNzYWdlU2VydmljZSB9IGZyb20gJ0Bwcm9ncmVzcy9rZW5kby1hbmd1bGFyLWwxMG4nO1xyXG5pbXBvcnQgeyBNeU1lc3NhZ2VTZXJ2aWNlIH0gZnJvbSAnLi9teS1tZXNzYWdlLnNlcnZpY2UnO1xyXG5cclxuXHJcbmRlY2xhcmUgZnVuY3Rpb24gZ2V0UGFyYW1Db25maWcoKTogYW55O1xyXG5kZWNsYXJlIGZ1bmN0aW9uIHNldFBhcmFtQ29uZmlnKHZhcjE6YW55KTphbnk7XHJcbkBJbmplY3RhYmxlKHtcclxuICBwcm92aWRlZEluOiAncm9vdCcsXHJcbn0pXHJcbi8vZXhwb3J0IGNsYXNzIHN0YXJTZXJ2aWNlcyBleHRlbmRzIEJlaGF2aW9yU3ViamVjdDxHcmlkRGF0YVJlc3VsdD4ge1xyXG4gIGV4cG9ydCBjbGFzcyBzdGFyU2VydmljZXMgIHtcclxuICBwdWJsaWMgcGFyYW1Db25maWc6YW55O1xyXG4gIHByaXZhdGUgY3JlYXRlZEl0ZW1zOiBhbnlbXSA9IFtdO1xyXG4gIHByaXZhdGUgdXBkYXRlZEl0ZW1zOiBhbnlbXSA9IFtdO1xyXG4gIHByaXZhdGUgZGVsZXRlZEl0ZW1zOiBhbnlbXSA9IFtdO1xyXG4gIHB1YmxpYyBsb2FkaW5nOiBhbnk7XHJcbiAgcHVibGljIHJvdXRpbmVfbmFtZSA9IFwiXCI7XHJcbiAgcHVibGljIHNhdmVDaGFuZ2VzTXNnID0gXCJTY3JlZW4gY2hhbmdlZCwgYXJlIHlvdSBzdXJlIHlvdSB0byBuYXZpZ2F0ZT9cIjtcclxuICBwdWJsaWMgZGVsZXRlRGV0YWlsTXNnID0gXCJDYW4gbm90IGRlbGV0ZSBhcyBkZXRhaWwgaGFzIGRhdGEuXCI7XHJcbiAgcHVibGljIHBsZWFzZUNvbmZpcm1Nc2cgPSBcIlBsZWFzZSBjb25maXJtXCI7XHJcbiAgcHVibGljIGRlbGV0ZUNvbmZpcm1Nc2cgPSBcIkFyZSB5b3Ugc3VyZSB5b3Ugd2FudCB0byBkZWxldGUgdGhpcyByZWNvcmQ/XCI7XHJcbiAgcHVibGljIG5vdGhpbmdUb0RlbGV0ZWxNc2cgPSBcIk5vIHJlY29yZHMgdG8gZGVsZXRlLlwiO1xyXG4gIHB1YmxpYyBmaWVsZHNSZXF1aXJlZE1zZyA9IFwiUGxlYXNlIGVudGVyIHJlcXVpcmVkIGZpZWxkcy5cIlxyXG4gIHB1YmxpYyByZWFkT25seU1zZyA9IFwiQ2FuIG5vdCBzYXZlICwgeW91ciBhdXRob3JpdHkgaXMgcmVhZG9ubHkuXCJcclxuICBwdWJsaWMgbm9BY2Nlc3NNc2cgPSBcIllvdSBkb250IGhhdmUgYWNjZXNzIHRvIHRoaXMgcm91dGluZS5cIlxyXG4gIHB1YmxpYyBzdGFuZGFyZEVycm9yTXNnID0gXCJFcnJvciBwZXJmb3JtaW5nIHRyYW5zYWN0aW9uXCJcclxuICBwdWJsaWMgc2F2ZU1hc3Rlck1zZyA9IFwiU2F2ZSBtYXN0ZXIgcmVjb3JkIGZpcnN0LlwiXHJcbiAgcHVibGljIGVudGVyUXVlcnlNc2cgPSAgXCJFbnRlciBhbnkgZmllbGQgdG8gc2VhcmNoIChlLmc6IG5hbWUlKSBhbmQgdGhlbiBwcmVzcyBFeGVjdXRlIFF1ZXJ5XCI7XHJcbiAgcHVibGljIGhlbHBNc2cgPSBcIlwiO1xyXG4gIHB1YmxpYyBoZWxwTXNnX2dyaWQgPSBcIlwiO1xyXG4gIHB1YmxpYyBVU0VSTkFNRSA9IFwiXCI7XHJcbiAgcHVibGljIGhpZGVBZnRlciA9IDUwMDtcclxuICBwdWJsaWMgU3RyQXV0aCA9IFwiXCI7XHJcbiAgcHVibGljIFVTRVJfSU5GTzphbnk7XHJcbiAgcHVibGljIE1BU1RFUl9EQiA9IFwiXCI7XHJcbiAgcHVibGljIFVTRVJOQU1FX0RCID0gXCJcIjtcclxuICBwcml2YXRlIGh0dHBPcHRpb25zOmFueTtcclxuICBwdWJsaWMgbGltaXQgPSA1MDAwO1xyXG4gIHB1YmxpYyBZZXNOb0FjdGlvbnMgPSBbXHJcbiAgICB7IHRleHQ6ICdObycsIHByaW1hcnk6IGZhbHNlIH0sXHJcbiAgICB7IHRleHQ6ICdZZXMnLCBwcmltYXJ5OiB0cnVlIH1cclxuICBdO1xyXG4gIHB1YmxpYyBPa0FjdGlvbnMgPSBbXHJcbiAgICB7IHRleHQ6ICdPaycsIHByaW1hcnk6IGZhbHNlIH1cclxuICBdO1xyXG4gIHB1YmxpYyBzZXNzaW9uUGFyYW1zOmFueSA9IHt9O1xyXG5cclxuXHJcblxyXG4gICAgLy9wcml2YXRlIEJBU0VfVVJMID0gJ2h0dHBzOi8vb2RhdGFzYW1wbGVzZXJ2aWNlcy5henVyZXdlYnNpdGVzLm5ldC9WNC9Ob3J0aHdpbmQvTm9ydGh3aW5kLnN2Yy8nO1xyXG4gIC8vcHJpdmF0ZSBCQVNFX1VSTCA9ICdodHRwOi8vMTkyLjE2OC4xLjM6ODA5MC9hcGk/X2Zvcm1hdD1qc29uJl9saW1pdD01MCc7XHJcblxyXG4gIHB1YmxpYyBFUE1FTkdfVVJMID0gXCJcIjsgLy8naHR0cDovLzE5Mi4xNjguMS41OjgwOTIvZm9ybWF0JztcclxuICAgIC8vcHJpdmF0ZSBFUE1FTkdfVVJMID0gJ2h0dHA6Ly9nbWFzaHJvLmNvbTo4MDkyL2Zvcm1hdCc7XHJcblxyXG4gIHB1YmxpYyBTRVJWRVJfVVJMID0gXCJcIjsgLy8gJ2h0dHA6Ly9sb2NhbGhvc3Q6ODA5MCc7XHJcbiAgLy9wdWJsaWMgU0VSVkVSX1VSTCA9ICdodHRwOi8vZ21hc2hyby5jb206ODA5MCc7XHJcblxyXG4gICAgcHVibGljIEJBU0VfVVJMID0gdGhpcy5TRVJWRVJfVVJMICsgJy9hcGk/X2Zvcm1hdD1qc29uJl9saW1pdD0nICsgdGhpcy5saW1pdDtcclxuICAvL3ByaXZhdGUgQkFTRV9VUkwgPSAnaHR0cDovL2dtYXNocm8uY29tOjgwOTAvYXBpP19mb3JtYXQ9anNvbiZfbGltaXQ9JyArIHRoaXMubGltaXQ7XHJcbiAgICBwdWJsaWMgZUt5Y1NjciA9IFwiRFNQRUtZQ1wiO1xyXG4gIHB1YmxpYyBwb3J0YWxTY3IgPSBcIkRTUFBPUlRBTFwiO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKFxyXG4gICAgICAgIHByaXZhdGUgbm90aWZpY2F0aW9uU2VydmljZTogTm90aWZpY2F0aW9uU2VydmljZSxcclxuICAgICAgICBwcml2YXRlIGRpYWxvZ1NlcnZpY2U6IERpYWxvZ1NlcnZpY2UsXHJcbiAgICAgICAgcHJpdmF0ZSBodHRwOiBIdHRwQ2xpZW50LFxyXG4gICAgICAgIHByaXZhdGUgbWVzc2FnZXM6IE1lc3NhZ2VTZXJ2aWNlXHJcbiAgICApIHtcclxuICAgIC8vc3VwZXIobnVsbCk7XHJcbiAgICAgICAgLy9sb2dnZXIud2FybihcIldhcm5pbmcgbWVzc2FnZVwiKTtcclxuXHJcbiAgICB9XHJcblxyXG4gIC8vIHB1YmxpYyBxdWVyeShzdGF0ZTogYW55KTogdm9pZCB7XHJcbiAgLy8gICBsZXQgcXVlcnlOYW1lID0gXCJcIjtcclxuICAvLyAgIHRoaXMuZmV0Y2godGhpcywgcXVlcnlOYW1lKVxyXG4gIC8vICAgICAuc3Vic2NyaWJlKCh4OmFueSkgPT4gc3VwZXIubmV4dCh4KSk7XHJcbiAgLy8gfVxyXG4gIHB1YmxpYyByZW1vdmVSZWMoZ3JpZERhdGE6IGFueSwgZWRpdGVkUm93SW5kZXg6IG51bWJlcikge1xyXG5cclxuICAgICAgICAvL2xldCByZXN1bHQxID0gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShncmlkRGF0YSkpO1xyXG4gICAgaWYgKHR5cGVvZiBlZGl0ZWRSb3dJbmRleCAhPT0gXCJ1bmRlZmluZWRcIikge1xyXG4gICAgICBncmlkRGF0YS5kYXRhLnNwbGljZShlZGl0ZWRSb3dJbmRleCwgMSk7XHJcbiAgICAgICAgICBncmlkRGF0YS50b3RhbCA9IGdyaWREYXRhLmRhdGEubGVuZ3RoO1xyXG4gICAgICAgICAgLyogIC8vaWYgKHRoaXMucGFyYW1Db25maWcuREVCVUdfRkxBRykgY29uc29sZS5sb2coJ3JlbXZpbmcgZWRpdGVkUm93SW5kZXg6JyArIGVkaXRlZFJvd0luZGV4KVxyXG4gICAgICAgICAgICByZXN1bHQxLmRhdGEuc3BsaWNlKCBlZGl0ZWRSb3dJbmRleCAsIDEgKTtcclxuICAgICAgICAgICAgcmVzdWx0MS50b3RhbCA9IHJlc3VsdDEuZGF0YS5sZW5ndGg7Ki9cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBncmlkRGF0YTtcclxuICAgIH1cclxuICBwdWJsaWMgdXBkYXRlUmVjKGdyaWREYXRhOiBhbnksIGVkaXRlZFJvd0luZGV4OiBudW1iZXIsIE5ld1ZhbDogYW55KSB7XHJcbiAgICAgIGdyaWREYXRhLmRhdGFbZWRpdGVkUm93SW5kZXhdID0gTmV3VmFsO1xyXG5cclxuICAgICAgICByZXR1cm4gZ3JpZERhdGE7XHJcblxyXG4gICAgfVxyXG4gIHB1YmxpYyBhZGRSZWMoZ3JpZERhdGE6IGFueSwgTmV3VmFsOiBhbnkpIHtcclxuICAgICAgZ3JpZERhdGEuZGF0YS5wdXNoKE5ld1ZhbCk7XHJcbiAgICAgICAvKiBsZXQgcmVzdWx0ID17XCJkYXRhXCI6W10sIHRvdGFsOjB9O1xyXG4gICAgICAgIGxldCByZXN1bHQxID0gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShncmlkRGF0YSkpO1xyXG4gICAgICAgIE5ld1ZhbCA9IHRoaXMucGFyc2VUb0RhdGUoTmV3VmFsKTtcclxuICAgICAgICByZXN1bHQxLmRhdGEucHVzaChOZXdWYWwpO1xyXG4gICAgICAgIHJlc3VsdC5kYXRhID0gcmVzdWx0MS5kYXRhO1xyXG4gICAgICAgIHJlc3VsdC50b3RhbCA9IHJlc3VsdC5kYXRhLmxlbmd0aDtcclxuICAgICAgICByZXR1cm4gcmVzdWx0MTsqL1xyXG4gICAgICAgIHJldHVybiBncmlkRGF0YTtcclxuICAgIH1cclxuICAgIHB1YmxpYyBmb3JtYXRXaGVyZShOZXdWYWw6YW55KXtcclxuICAgICAgZnVuY3Rpb24gaXNEYXRlICh2YWx1ZTphbnkpIHtcclxuICAgICAgICByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBEYXRlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmdW5jdGlvbiBGT1JNQVRfSVNPX3BhcnNlKGQ6YW55KSB7IC8vIFRoaXMgZnVuY3Rpb24gd2FzIGFkZGVkIGZvciBDUk0uIENSTSBkYXRlcyBzaG91bGQgYmUgSVNPXHJcbiAgICAgICAgICB2YXIgZGF0ZUlzbyA9IGQudG9JU09TdHJpbmcoKTtcclxuICAgICAgICAgIHZhciBkYXRlSXNvQXJyID0gZGF0ZUlzby5zcGxpdChcIlRcIik7XHJcbiAgICAgICAgICBkYXRlSXNvID0gZGF0ZUlzb0FyclswXSArIFwiIFwiICsgZGF0ZUlzb0FyclsxXTtcclxuICAgICAgICAgIGRhdGVJc28gPSBkYXRlSXNvLnN1YnN0cigwLCAxOSk7XHJcbiAgICAgICAgICByZXR1cm4gZGF0ZUlzbztcclxuICAgICAgICB9XHJcbiAgICAgIGZ1bmN0aW9uIHBhcnNlVmFsdWUoa2V5OmFueSwgdmFsdWU6YW55KXtcclxuICAgICAgICBsZXQgcGhyYXNlID0gXCJcIjtcclxuICAgICAgICAvL2lmICh0aGlzLnBhcmFtQ29uZmlnLkRFQlVHX0ZMQUcpIGNvbnNvbGUubG9nKFwiaXNEYXRlOlwiICwgaXNEYXRlICh2YWx1ZSksIHZhbHVlKTtcclxuXHJcbiAgICAgICAgaWYgKGlzRGF0ZSAodmFsdWUpKXtcclxuICAgICAgICAgICAgLy92YWx1ZSA9IGdldERhdGUodmFsdWUpO1xyXG4gICAgICAgICAgICAvL3ZhbHVlID0gRk9STUFUX0lTT19wYXJzZSh2YWx1ZSk7XHJcbiAgICAgICAgICAgIHZhbHVlID0gdmFsdWUudG9JU09TdHJpbmcoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycgKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgIC8vIGl0J3MgYSBzdHJpbmdcclxuICAgICAgICAgIGlmICh2YWx1ZSAhPSBcIlwiICYmIHZhbHVlICE9IG51bGwgKVxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBsZXQgb3BlcmF0b3JzID0gXCI8PiE9XCJcclxuICAgICAgICAgICAgbGV0IG9wZXJhdG9yVmFsID0gXCJcIjtcclxuICAgICAgICAgICAgbGV0IHRyaW1lZWRWYWwgPSB2YWx1ZS50cmltKCk7XHJcbiAgICAgICAgICAgIGxldCBmaXJzdENoYXIgPSB0cmltZWVkVmFsLmNoYXJBdCgwKTtcclxuICAgICAgICAgICAgbGV0IG4gPSBvcGVyYXRvcnMuc2VhcmNoKGZpcnN0Q2hhcik7XHJcbiAgICAgICAgICAgIGlmICggbiAhPSAtMSl7XHJcbiAgICAgICAgICAgICAgaWYgKGZpcnN0Q2hhciA9PSBcInxcIilcclxuICAgICAgICAgICAgICAgIG9wZXJhdG9yVmFsID0gXCIgPSAnXCIgICsgdmFsdWUgKyBcIicgXCI7XHJcbiAgICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICAgICAgb3BlcmF0b3JWYWwgPSB2YWx1ZTtcclxuXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSBpZiAoIHZhbHVlLnRvVXBwZXJDYXNlKCkuc2VhcmNoKFwiJVwiKSAhPSAtMSlcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgIG9wZXJhdG9yVmFsID0gXCIgbGlrZSAnXCIgICsgdmFsdWUgKyBcIicgXCI7XHJcbiAgICAgICAgICAgICAgLy9pZiAodGhpcy5wYXJhbUNvbmZpZy5ERUJVR19GTEFHKSBjb25zb2xlLmxvZyhcIm9wZXJhdG9yVmFsOlwiKyBvcGVyYXRvclZhbClcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICBvcGVyYXRvclZhbCA9IFwiID0gJ1wiICArIHZhbHVlICsgXCInIFwiO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHBocmFzZSA9IGtleSArIGVuY29kZVVSSUNvbXBvbmVudChvcGVyYXRvclZhbCk7XHJcbiAgICAgICAgICAgIC8vcGhyYXNlID0ga2V5ICsgb3BlcmF0b3JWYWw7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2V7XHJcbiAgICAgICAgLy8gaXQncyBzb21ldGhpbmcgZWxzZVxyXG4gICAgICAgICAgbGV0IG9wZXJhdG9yVmFsID0gXCIgPSAnXCIgICsgdmFsdWUgKyBcIicgXCI7XHJcbiAgICAgICAgICBwaHJhc2UgPSBrZXkgKyBlbmNvZGVVUklDb21wb25lbnQob3BlcmF0b3JWYWwpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHBocmFzZTtcclxuICAgICAgfVxyXG5cclxuICAgICAgbGV0IHdoZXJlUGhyYXNlID0gXCJcIjtcclxuICAgICAgICBsZXQgd2hlcmVDbGF1c2UgPSBcIlwiO1xyXG4gICAgICAgIGlmICh0aGlzLnBhcmFtQ29uZmlnLkRFQlVHX0ZMQUcpIGNvbnNvbGUubG9nKFwiZm9ybWF0V2hlcmU6XCIpXHJcbiAgICAgICAgaWYgKHRoaXMucGFyYW1Db25maWcuREVCVUdfRkxBRykgY29uc29sZS5sb2coTmV3VmFsKVxyXG4gICAgICAgIE9iamVjdC5rZXlzKE5ld1ZhbCkuZm9yRWFjaChmdW5jdGlvbihrZXkpIHtcclxuICAgICAgICAgICAgbGV0IHZhbHVlID0gTmV3VmFsW2tleV07XHJcbiAgICAgICAgICAgIC8vaWYgKHRoaXMucGFyYW1Db25maWcuREVCVUdfRkxBRykgY29uc29sZS5sb2coa2V5ICsgXCI6XCIgKyB2YWx1ZSk7XHJcbiAgICAgICAgICAgIGlmICggKHR5cGVvZiB2YWx1ZSAhPT0gXCJ1bmRlZmluZWRcIiApICYmICh2YWx1ZSAhPT0gXCJcIiApICYmICh2YWx1ZSAhPT0gbnVsbCkgKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgbGV0IHBocmFzZSA9IHBhcnNlVmFsdWUoa2V5LCB2YWx1ZSk7XHJcblxyXG4gICAgICAgICAgICAgIGlmICh3aGVyZVBocmFzZSA9PSBcIlwiKVxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHdoZXJlUGhyYXNlID0gd2hlcmVQaHJhc2UgKyAgIHBocmFzZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB3aGVyZVBocmFzZSA9IHdoZXJlUGhyYXNlICsgXCIgYW5kIFwiICsgcGhyYXNlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGlmICh3aGVyZVBocmFzZSAhPSBcIlwiKVxyXG4gICAgICAgICAgICB3aGVyZUNsYXVzZSA9IFwiJl9XSEVSRT1cIiArIHdoZXJlUGhyYXNlO1xyXG4gICAgICAgIGVsc2VcclxuICAgICAgICAgICAgd2hlcmVDbGF1c2UgPSBcIiZfV0hFUkU9XCI7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLnBhcmFtQ29uZmlnLkRFQlVHX0ZMQUcpIGNvbnNvbGUubG9nKFwid2hlcmVDbGF1c2U6XCIgKyB3aGVyZUNsYXVzZSk7XHJcbiAgICAgICAgcmV0dXJuIHdoZXJlQ2xhdXNlO1xyXG4gICAgfVxyXG5cclxuICBwdWJsaWMgY2hlY2tEQkxvYyh0aGVVUkw6YW55KSB7XHJcbiAgICBcclxuICAgICAgbGV0IHBhcmFtQ29uZmlnID0gZ2V0UGFyYW1Db25maWcoKTtcclxuICAgICAgaWYgKHRoaXMucGFyYW1Db25maWcuREJMb2MgIT0gXCJcIil7XHJcbiAgICAgIC8vbGV0IHVzZXJOYW1lID0gdGhpcy5zZXNzaW9uUGFyYW1zLlVTRVJOQU1FO1xyXG4gICAgICAgIHRoZVVSTCA9IHRoZVVSTCArIFwiJkRCTG9jPVwiICsgdGhpcy5wYXJhbUNvbmZpZy5EQkxvYztcclxuICAgICAgXHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy5wYXJhbUNvbmZpZy5ERUJVR19GTEFHKSBjb25zb2xlLmxvZyhcInRoZVVSTDpcIiwgdGhlVVJMKTtcclxuXHJcbiAgICByZXR1cm4gdGhlVVJMO1xyXG4gIH1cclxuICBcclxuICBwdWJsaWMgZmV0Y2gob2JqZWN0OmFueSwgcXVlcnlOYW1lOiBzdHJpbmcpOiBPYnNlcnZhYmxlPEdyaWREYXRhUmVzdWx0PiB7XHJcbiAgICAgICAgLy9jb25zdCBxdWVyeVN0ciA9IGAke3RvT0RhdGFTdHJpbmcoc3RhdGUpfSYkY291bnQ9dHJ1ZWA7XHJcbiAgICAgICAgY29uc3QgcXVlcnlTdHIgPSBgYDtcclxuICAgICAgICB0aGlzLmxvYWRpbmcgPSB0cnVlO1xyXG4gICAgICAgIGxldCB0aGVVUkwgPSBgJHt0aGlzLkJBU0VfVVJMfSR7cXVlcnlOYW1lfWA7XHJcbiAgICAgICAgdGhlVVJMID0gdGhpcy5jaGVja0RCTG9jKHRoZVVSTCk7XHJcblxyXG4gICAgICBcclxuICAgICAgICB0aGlzLmh0dHBPcHRpb25zID0ge1xyXG4gICAgICAgICAgaGVhZGVyczogbmV3IEh0dHBIZWFkZXJzKHtcclxuICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuICAgICAgICAgICAgJ2F1dGhvcml6YXRpb24nOiB0aGlzLlN0ckF1dGhcclxuXHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cFxyXG4gICAgICAuZ2V0KGAke3RoZVVSTH1gLCB0aGlzLmh0dHBPcHRpb25zKVxyXG4gICAgICAgICAgICAucGlwZShcclxuICAgICAgICAgICAgICAgIGNhdGNoRXJyb3IoKGVycikgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0aHJvd0Vycm9yKGVycik7XHJcbiAgICAgICAgICAgICAgICAgIH0pLFxyXG4gICAgICAgIG1hcCgocmVzcG9uc2U6YW55KSA9PiAoPEdyaWREYXRhUmVzdWx0PnsgZGF0YTogcmVzcG9uc2VbJ2RhdGEnXSB9XHJcbiAgICAgICAgICAgICAgICAgICkpLFxyXG4gICAgICAgICAgICAgICAgdGFwKGRhdGEgPT4ge1xyXG4gICAgICAgICAgICAgICAgICBpZiAodGhpcy5wYXJhbUNvbmZpZy5ERUJVR19GTEFHKSBjb25zb2xlLmxvZyhcInN0YXR1cyBkYXRhOiBcIiwgZGF0YSk7XHJcbiAgICAgICAgICAgICAgICAgIHRoaXMubG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICBpZiAodGhpcy5wYXJhbUNvbmZpZy5ERUJVR19GTEFHKSBjb25zb2xlLmxvZyhcInRlc3Q6dGhpcy5ydWxlc1Bvc3RRdWVyeURlZlwiLCB0aGlzLnJ1bGVzUG9zdFF1ZXJ5RGVmKVxyXG4gICAgICAgICAgICBsZXQgc3RhdHVzUmVjOmFueSA9IHt9O1xyXG4gICAgICAgICAgc3RhdHVzUmVjID0gdGhpcy5jaGVja1J1bGVzKG9iamVjdCwgdGhpcy5ydWxlc1Bvc3RRdWVyeURlZiwgZGF0YSxcIlBPU1RfUVVFUllcIik7XHJcbiAgICAgICAgICBpZiAodGhpcy5wYXJhbUNvbmZpZy5ERUJVR19GTEFHKSBjb25zb2xlLmxvZyhcInN0YXR1c1JlYzpwb3N0OlBPU1RfUVVFUlk6ZmV0Y2g6XCIsIHN0YXR1c1JlYywgc3RhdHVzUmVjWydzdGF0dXMnXSk7XHJcbiAgICAgICAgICBpZiAoc3RhdHVzUmVjWydzdGF0dXMnXSAgPT0gLTEpe1xyXG4gICAgICAgICAgICB0aGlzLnNob3dOb3RpZmljYXRpb24gKFwiZXJyb3JcIixcIlJ1bGU6XCIgKyBzdGF0dXNSZWNbJ21zZyddICk7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAvKiBwdWJsaWMgcmVtb3ZlKCBwYWdlOiBhbnkpOk9ic2VydmFibGU8YW55PiB7XHJcbiAgICAgICAgdGhpcy5kZWxldGUocGFnZSlcclxuICAgICAgICAgICAuc3Vic2NyaWJlKCh4OmFueSkgPT4gc3VwZXIubmV4dCh4KSk7XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gMDtcclxuICAgIH1cclxuKi9cclxucHVibGljIGRlbGV0ZShQYWdlOiBzdHJpbmcpOiBPYnNlcnZhYmxlPEdyaWREYXRhUmVzdWx0PiB7XHJcbiAgICAgICAgLy9jb25zdCBxdWVyeVN0ciA9IGAke3RvT0RhdGFTdHJpbmcoc3RhdGUpfSYkY291bnQ9dHJ1ZWA7XHJcbiAgICAgICAgY29uc3QgcXVlcnlTdHIgPSBgYDtcclxuICAgICAgICB0aGlzLmxvYWRpbmcgPSB0cnVlO1xyXG4gICAgICAgIGxldCB0aGVVUkwgPSBgJHt0aGlzLkJBU0VfVVJMfSR7UGFnZX1gO1xyXG4gICAgICAgIHRoZVVSTCA9IHRoaXMuY2hlY2tEQkxvYyh0aGVVUkwpO1xyXG5cclxuICAgICAgICB0aGlzLmh0dHBPcHRpb25zID0ge1xyXG4gICAgICAgICAgaGVhZGVyczogbmV3IEh0dHBIZWFkZXJzKHtcclxuICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuICAgICAgICAgICAgJ2F1dGhvcml6YXRpb24nOiB0aGlzLlN0ckF1dGhcclxuXHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cFxyXG4gICAgICAgICAgICAuZGVsZXRlPGFueT4oYCR7dGhlVVJMfWAsIHRoaXMuaHR0cE9wdGlvbnMpXHJcbiAgICAgICAgICAgIC5waXBlKFxyXG4gICAgICAgICAgICAgICAgY2F0Y2hFcnJvcigoZXJyKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRocm93RXJyb3IoZXJyKTtcclxuICAgICAgICAgICAgICAgICAgfSksXHJcblxyXG4gICAgICAgIG1hcCgocmVzcG9uc2U6YW55KSA9PiAoPEdyaWREYXRhUmVzdWx0PnsgZGF0YTogcmVzcG9uc2VbJ2RhdGEnXSB9XHJcbiAgICAgICAgICAgICAgICApKSxcclxuXHJcbiAgICAgICAgICAgICAgICB0YXAoKCkgPT4gdGhpcy5sb2FkaW5nID0gZmFsc2UpXHJcbiAgICAgICAgICAgICk7XHJcbiAgICB9XHJcbiAgcHVibGljIHBvc3RfZGVsZXRlKFBhZ2U6IHN0cmluZywgQm9keTogYW55KTogT2JzZXJ2YWJsZTxHcmlkRGF0YVJlc3VsdD4ge1xyXG4gICAgICAgIC8vY29uc3QgcXVlcnlTdHIgPSBgJHt0b09EYXRhU3RyaW5nKHN0YXRlKX0mJGNvdW50PXRydWVgO1xyXG4gICAgICAgIGNvbnN0IHF1ZXJ5U3RyID0gYGA7XHJcbiAgICAgICAgdGhpcy5sb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgICAvL2lmICh0aGlzLnBhcmFtQ29uZmlnLkRFQlVHX0ZMQUcpIGNvbnNvbGUubG9nKFwicG9zdDpQYWdlOlwiLFBhZ2UsXCIgQm9keTpcIixCb2R5KVxyXG5cclxuICAgICAgICBsZXQgdGhlVVJMID0gYCR7dGhpcy5CQVNFX1VSTH0ke1BhZ2V9YDtcclxuICAgICAgICB0aGlzLmh0dHBPcHRpb25zID0ge1xyXG4gICAgICAgICAgaGVhZGVyczogbmV3IEh0dHBIZWFkZXJzKHtcclxuICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuICAgICAgICAgICAgJ2F1dGhvcml6YXRpb24nOiB0aGlzLlN0ckF1dGhcclxuXHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgICAgICAvL2lmICh0aGlzLnBhcmFtQ29uZmlnLkRFQlVHX0ZMQUcpIGNvbnNvbGUubG9nKFwidGhpcy5TdHJBdXRoOlwiICsgdGhpcy5TdHJBdXRoKTtcclxuICAgICAgICByZXR1cm4gdGhpcy5odHRwXHJcbiAgICAgICAgICAgIC5wb3N0PGFueT4oYCR7dGhlVVJMfWAsIEJvZHksIHRoaXMuaHR0cE9wdGlvbnMpXHJcbiAgICAgICAgICAgIC5waXBlKFxyXG4gICAgICAgICAgICAgICAgY2F0Y2hFcnJvcigoZXJyKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRocm93RXJyb3IoZXJyKTtcclxuICAgICAgICAgICAgICAgICAgfSksXHJcblxyXG4gICAgICAgIG1hcCgocmVzcG9uc2U6YW55KSA9PiAoPEdyaWREYXRhUmVzdWx0PnsgZGF0YTogcmVzcG9uc2VbJ2RhdGEnXSB9XHJcbiAgICAgICAgICAgICAgICApKSxcclxuICAgICAgICAgICAgICAgIHRhcChkYXRhID0+IHtcclxuICAgICAgICAgICAgICAgICAgaWYgKHRoaXMucGFyYW1Db25maWcuREVCVUdfRkxBRykgY29uc29sZS5sb2coXCJzdGF0dXMgZGF0YTpcIiwgZGF0YSk7XHJcbiAgICAgICAgICAgICAgICAgIHRoaXMubG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgIH0pXHJcblxyXG5cclxuICAgICAgICAgICAgKTtcclxuICAgIH1cclxuICAgIHB1YmxpYyBzaG93RGFpbG9nRXJyKGVycm9yKXtcclxuICAgICAgbGV0IE1zZyA9IGVycm9yLmVycm9yO1xyXG4gICAgICAvL2NvbnNvbGUubG9nKFwiTXNnOlwiLCBNc2cpO1xyXG4gICAgICBsZXQgcG9zaXRpb24gPSBNc2cuc2VhcmNoKFwiVU5JUVVFIGNvbnN0cmFpbnRcIik7XHJcbiAgICAgIGlmIChwb3NpdGlvbiAhPSAtMSApXHJcbiAgICAgICAgTXNnID0gdGhpcy5nZXROTFMoW10sJ0FMUkVBRFlfRVhJU1RTJywnUmVjb3JkIGFscmVhZHkgZXhpc3RzJylcclxuICAgICAgdmFyIGRpYWxvZ1N0cnVjID0ge1xyXG4gICAgICAgIG1zZzogTXNnLFxyXG4gICAgICAgIHRpdGxlOiBcIkVycm9yXCIsXHJcbiAgICAgICAgaW5mbzogbnVsbCxcclxuICAgICAgICBvYmplY3Q6IHRoaXMsXHJcbiAgICAgICAgYWN0aW9uOiB0aGlzLk9rQWN0aW9ucyxcclxuICAgICAgICBjYWxsYmFjazogbnVsbFxyXG4gICAgICB9O1xyXG4gICAgICB0aGlzLnNob3dDb25maXJtYXRpb24oZGlhbG9nU3RydWMpO1xyXG4gIFxyXG4gICAgfVxyXG4gIHB1YmxpYyBzeW5jRmxhZyA9IDA7XHJcbiAgcHVibGljIHBvc3Qob2JqZWN0OmFueSwgUGFnZTogc3RyaW5nLCBCb2R5OiBhbnkpOiBPYnNlcnZhYmxlPEdyaWREYXRhUmVzdWx0PiB7XHJcbiAgICAgIC8vY29uc3QgcXVlcnlTdHIgPSBgJHt0b09EYXRhU3RyaW5nKHN0YXRlKX0mJGNvdW50PXRydWVgO1xyXG4gICAgICBjb25zdCBxdWVyeVN0ciA9IGBgO1xyXG4gICAgICB0aGlzLmxvYWRpbmcgPSB0cnVlO1xyXG4gICAgLy9pZiAodGhpcy5wYXJhbUNvbmZpZy5ERUJVR19GTEFHKSBcclxuICAgIC8vY29uc29sZS5sb2coXCJwb3N0IDpQYWdlOlwiLFBhZ2UsXCIgQm9keTpcIixCb2R5KVxyXG4gICAgLy8gaWYgKFBhZ2U9PVwiXCIgJiYgQm9keS5sZW5ndGggPT0gMClcclxuICAgIC8vICAgY29uc29sZS5sb2coXCJwb3N0IGVtcHR5OlBhZ2U6XCIsUGFnZVsnZHVtJ10ubGVuZ3RoLFwiIEJvZHk6XCIsQm9keSlcclxuICAgIGxldCBzdGF0dXNSZWM6YW55ID0ge307XHJcbiAgICBzdGF0dXNSZWMgPSB0aGlzLmNoZWNrUnVsZXMob2JqZWN0LCB0aGlzLnJ1bGVzUHJlUXVlcnlEZWYsIEJvZHksXCJQUkVfUVVFUllcIik7XHJcbiAgICBpZiAodGhpcy5wYXJhbUNvbmZpZy5ERUJVR19GTEFHKSBjb25zb2xlLmxvZyhcInN0YXR1c1JlYzpwb3N0OlBSRV9RVUVSWVwiLCBzdGF0dXNSZWMsIHN0YXR1c1JlY1snc3RhdHVzJ10pO1xyXG4gICAgaWYgKHN0YXR1c1JlY1snc3RhdHVzJ10gID09IC0xKXtcclxuICAgICAgaWYgKHRoaXMucGFyYW1Db25maWcuREVCVUdfRkxBRykgY29uc29sZS5sb2coXCJzdGF0dXNSZWM6IGZvdW5kIC0xXCIpO1xyXG4gICAgICB0aGlzLnNob3dOb3RpZmljYXRpb24gKFwiZXJyb3JcIixcIlJ1bGU6XCIgKyBzdGF0dXNSZWNbJ21zZyddICk7XHJcbiAgICAgIEJvZHlbMF0uX1FVRVJZID0gXCJcIjtcclxuICAgIH1cclxuXHJcbiAgICAgIGxldCB0aGVVUkwgPSBgJHt0aGlzLkJBU0VfVVJMfSR7UGFnZX1gO1xyXG4gICAgICB0aGVVUkwgPSB0aGlzLmNoZWNrREJMb2ModGhlVVJMKTtcclxuICAgICAgdGhpcy5odHRwT3B0aW9ucyA9IHtcclxuICAgICAgICBoZWFkZXJzOiBuZXcgSHR0cEhlYWRlcnMoe1xyXG4gICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuICAgICAgICAgICdhdXRob3JpemF0aW9uJzogdGhpcy5TdHJBdXRoXHJcblxyXG4gICAgICAgIH0pXHJcbiAgICAgIH1cclxuICAgICAgY29uc29sZS5sb2coXCJwb3N0OnRoZVVSTDpcIiwgdGhlVVJMLCBcIkJvZHk6XCIsIEJvZHkpO1xyXG4gICAgICAvL2lmICh0aGlzLnBhcmFtQ29uZmlnLkRFQlVHX0ZMQUcpIGNvbnNvbGUubG9nKFwidGhpcy5TdHJBdXRoOlwiICwgdGhpcy5TdHJBdXRoICwgdGhlVVJMKTtcclxuICAgICAgLy9pZiAodGhpcy5wYXJhbUNvbmZpZy5ERUJVR19GTEFHKSBjb25zb2xlLmxvZyhcInRoaXMuU3RyQXV0aDogd2l0aCBVUkxcIiAsIHRoaXMuU3RyQXV0aCAsIHRoZVVSTCk7XHJcbiAgICAgIHJldHVybiB0aGlzLmh0dHBcclxuICAgICAgICAgIC5wb3N0PGFueT4oYCR7dGhlVVJMfWAsIEJvZHksIHRoaXMuaHR0cE9wdGlvbnMpXHJcbiAgICAgICAgICAucGlwZShcclxuICAgICAgICAgICAgICBjYXRjaEVycm9yKChlcnIpID0+IHtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKFwic3RhdHVzUmVjWydtc2cnXSA6XCIsIHN0YXR1c1JlY1snbXNnJ10sIFwiIGVyci5lcnJvciA6XCIsIGVyci5lcnJvciAgKVxyXG4gICAgICAgICAgaWYgKCAodHlwZW9mIHN0YXR1c1JlY1snbXNnJ10gIT0gXCJ1bmRlZmluZWRcIikgJiYgKHN0YXR1c1JlY1snbXNnJ10gIT0gXCJcIikpIHtcclxuICAgICAgICAgIC8vaWYgKCAoc3RhdHVzUmVjWydtc2cnXSAhPSBcIlwiKSkge1xyXG4gICAgICAgICAgICBpZiAodHlwZW9mIGVyci5lcnJvciA9PSBcInVuZGVmaW5lZFwiKXtcclxuICAgICAgICAgICAgICBlcnIgPSBzdGF0dXNSZWNbJ21zZyddO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAgICBlcnIuZXJyb3IuZXJyb3IgPSAgc3RhdHVzUmVjWydtc2cnXTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHRoaXMuc2hvd0RhaWxvZ0VycihlcnIuZXJyb3IpO1xyXG4gICAgICAgICAgICAgICAgICByZXR1cm4gdGhyb3dFcnJvcihlcnIpO1xyXG4gICAgICAgICAgICAgICAgfSksXHJcblxyXG4gICAgICAgIG1hcCgocmVzcG9uc2U6YW55KSA9PiAoPEdyaWREYXRhUmVzdWx0PnsgZGF0YTogcmVzcG9uc2VbJ2RhdGEnXSB9XHJcbiAgICAgICAgICAgICAgKSksXHJcbiAgICAgICAgICAgICAgdGFwKGRhdGEgPT4ge1xyXG4gICAgICAgICAgICAgICAgLy9pZiAodGhpcy5wYXJhbUNvbmZpZy5ERUJVR19GTEFHKSBjb25zb2xlLmxvZyhcInN0YXR1cyBkYXRhOlwiLCBkYXRhKTtcclxuICAgICAgICAgICAgICAgIHRoaXMubG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgaWYgKHRoaXMucGFyYW1Db25maWcuREVCVUdfRkxBRykgY29uc29sZS5sb2coXCJ0ZXN0OnRoaXMucnVsZXNQb3N0UXVlcnlEZWZcIiwgdGhpcy5ydWxlc1Bvc3RRdWVyeURlZilcclxuICAgICAgICAgICAgICAgIHRoaXMuc3luY0ZsYWcgPSAwO1xyXG4gICAgICAgICAgbGV0IHN0YXR1c1JlYzphbnkgPSB7fTtcclxuICAgICAgICAgICAgICAgIHN0YXR1c1JlYyA9IHRoaXMuY2hlY2tSdWxlcyhvYmplY3QsIHRoaXMucnVsZXNQb3N0UXVlcnlEZWYsIGRhdGEsXCJQT1NUX1FVRVJZXCIpO1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMucGFyYW1Db25maWcuREVCVUdfRkxBRykgY29uc29sZS5sb2coXCJzdGF0dXNSZWM6cG9zdDpQT1NUX1FVRVJZXCIsIHN0YXR1c1JlYywgc3RhdHVzUmVjWydzdGF0dXMnXSlcclxuICAgICAgICAgICAgICAgIGlmIChzdGF0dXNSZWNbJ3N0YXR1cyddICA9PSAtMSl7XHJcbiAgICAgICAgICAgICAgICAgIHRoaXMuc2hvd05vdGlmaWNhdGlvbiAoXCJlcnJvclwiLFwiUnVsZTpcIiArIHN0YXR1c1JlY1snbXNnJ10gKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcblxyXG5cclxuICAgICAgICB9KVxyXG5cclxuXHJcbiAgICAgICAgICApO1xyXG4gIH1cclxuIFxyXG4gIFxyXG4gICAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuICBwdWJsaWMgcG9zdFVwbG9hZChQYWdlOiBzdHJpbmcsIEJvZHk6IGFueSk6IE9ic2VydmFibGU8R3JpZERhdGFSZXN1bHQ+IHtcclxuICAgICAgLy9jb25zdCBxdWVyeVN0ciA9IGAke3RvT0RhdGFTdHJpbmcoc3RhdGUpfSYkY291bnQ9dHJ1ZWA7XHJcbiAgICAgIGNvbnN0IHF1ZXJ5U3RyID0gYGA7XHJcbiAgICAgIHRoaXMubG9hZGluZyA9IHRydWU7XHJcblxyXG4gICAgICBsZXQgdGhlVVJMID0gUGFnZTtcclxuICAgICAgdGhpcy5odHRwT3B0aW9ucyA9IHtcclxuICAgICAgICBoZWFkZXJzOiBuZXcgSHR0cEhlYWRlcnMoe1xyXG4gICAgICAgICAgJ2F1dGhvcml6YXRpb24nOiB0aGlzLlN0ckF1dGhcclxuXHJcbiAgICAgICAgfSlcclxuICAgICAgfVxyXG4gICAgICAvL2lmICh0aGlzLnBhcmFtQ29uZmlnLkRFQlVHX0ZMQUcpIGNvbnNvbGUubG9nKFwidGhpcy5TdHJBdXRoOlwiICsgdGhpcy5TdHJBdXRoKTtcclxuICAgICAgcmV0dXJuIHRoaXMuaHR0cFxyXG4gICAgICAgICAgLnBvc3Q8YW55PihgJHt0aGVVUkx9YCwgQm9keSwgdGhpcy5odHRwT3B0aW9ucylcclxuICAgICAgICAgIC5waXBlKFxyXG4gICAgICAgICAgICAgIGNhdGNoRXJyb3IoKGVycikgPT4ge1xyXG4gICAgICAgICAgICAgICAgICByZXR1cm4gdGhyb3dFcnJvcihlcnIpO1xyXG4gICAgICAgICAgICAgICAgfSksXHJcblxyXG4gICAgICAgIG1hcCgocmVzcG9uc2U6YW55KSA9PiAoPEdyaWREYXRhUmVzdWx0PnsgZGF0YTogcmVzcG9uc2VbJ2RhdGEnXSB9XHJcbiAgICAgICAgICAgICAgKSksXHJcblxyXG4gICAgICAgICAgICAgIHRhcCgoKSA9PiB0aGlzLmxvYWRpbmcgPSBmYWxzZSlcclxuICAgICAgICAgICk7XHJcbiAgfVxyXG4gIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcblxyXG4gIHVwbG9hZEZpbGUocGFnZTogYW55LCBmaWxlc1NldDogU2V0PEZpbGU+LCBpZDogYW55KTogYW55IHtcclxuICAgIGZpbGVzU2V0LmZvckVhY2goZmlsZSA9PiB7XHJcbiAgICAgIC8vIGNyZWF0ZSBhIG5ldyBtdWx0aXBhcnQtZm9ybSBmb3IgZXZlcnkgZmlsZVxyXG4gICAgICBjb25zdCBmb3JtZGF0YTogRm9ybURhdGEgPSBuZXcgRm9ybURhdGEoKTtcclxuICAgICAgZm9ybWRhdGEuYXBwZW5kKCdmaWxlJywgZmlsZSk7XHJcbiAgICAgIGZvcm1kYXRhLmFwcGVuZCgnaWQnLCBpZCk7XHJcbiAgICAgIGlmICh0aGlzLnBhcmFtQ29uZmlnLkRFQlVHX0ZMQUcpIGNvbnNvbGUubG9nKFwidXBsb2FkRmlsZSBwYWdlOlwiICsgcGFnZSlcclxuICAgICAgbGV0IGFwaVVSTCA9IHRoaXMuU0VSVkVSX1VSTCArICcvYXBpL2F0dCcgKyBwYWdlO1xyXG4gICAgICBpZiAodGhpcy5wYXJhbUNvbmZpZy5ERUJVR19GTEFHKSBjb25zb2xlLmxvZyhcImFwaVVSTDpcIiArIGFwaVVSTCk7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLnBhcmFtQ29uZmlnLkRFQlVHX0ZMQUcpIGNvbnNvbGUubG9nKGZvcm1kYXRhKTtcclxuICAgICAgLy9mb3JtZGF0YS5mb3JFYWNoKGVudHJpZXMgPT4gY29uc29sZS5sb2coSlNPTi5zdHJpbmdpZnkoZW50cmllcykpKTtcclxuXHJcbiAgICAgICAgdGhpcy5wb3N0VXBsb2FkKGFwaVVSTCwgZm9ybWRhdGEpLnN1YnNjcmliZShyZXN1bHQgPT4ge1xyXG4gICAgICAgIGlmICh0aGlzLnBhcmFtQ29uZmlnLkRFQlVHX0ZMQUcpIGNvbnNvbGUubG9nKCdyZXN1bHQnLCByZXN1bHQpO1xyXG4gICAgICB9KTtcclxuICAgICAgICB9KTtcclxuXHJcblxyXG4gfVxyXG5cclxuICB1cGxvYWRGaWxlT2xkKGZpbGU6IEZpbGUpOiBhbnkge1xyXG4gICAgY29uc3QgZm9ybWRhdGE6IEZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKCk7XHJcbiAgICBmb3JtZGF0YS5hcHBlbmQoJ2ZpbGUnLCBmaWxlKTsgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy90aGUgdXBsb2FkZWQgZmlsZSBjb250ZW50XHJcbiAgICBmb3JtZGF0YS5hcHBlbmQoJ2RvY3VtZW50VmVyc2lvbklkJywgJzEyMycpOyAgICAgICAvL0kgbmVlZCB0byBwYXNzIHNvbWUgYWRkaXRpb25hbCBpbmZvIHRvIHRoZSBzZXJ2ZXIgYmVzaWRlcyB0aGUgRmlsZSBkYXRhXHJcbiAgICBsZXQgYXBpVVJMID0gdGhpcy5TRVJWRVJfVVJMICsgJy9hcGk/dXBsb2FkPXknO1xyXG4gICAgaWYgKHRoaXMucGFyYW1Db25maWcuREVCVUdfRkxBRykgY29uc29sZS5sb2coXCJhcGlVUkw6XCIgKyBhcGlVUkwpO1xyXG5cclxuICAgIGlmICh0aGlzLnBhcmFtQ29uZmlnLkRFQlVHX0ZMQUcpIGNvbnNvbGUubG9nKGZvcm1kYXRhKTtcclxuICAgIGZvcm1kYXRhLmZvckVhY2goZW50cmllcyA9PiBjb25zb2xlLmxvZyhKU09OLnN0cmluZ2lmeShlbnRyaWVzKSkpO1xyXG5cclxuXHJcbiAgICAvL2NvbnN0IGFwaVVSTCA9IHRoaXMuYXBpX3BhdGggKyAnVXBsb2FkJzsgICAgIC8vY2FsbGluZyBodHRwOi8vbG9jYWxob3N0OjUyMzMzL2FwaS9VcGxvYWRDb250cm9sbGVyXHJcblxyXG4gICAgdGhpcy5wb3N0VXBsb2FkKGFwaVVSTCwgZm9ybWRhdGEpLnN1YnNjcmliZShyZXN1bHQgPT4ge1xyXG4gICAgICBpZiAodGhpcy5wYXJhbUNvbmZpZy5ERUJVR19GTEFHKSBjb25zb2xlLmxvZygncmVzdWx0JywgcmVzdWx0KTtcclxuICAgIH0pO1xyXG4gICAgLypjb25zdCB1cGxvYWRSZXEgPSBuZXcgSHR0cFJlcXVlc3QoJ1BPU1QnLCBhcGlVUkwsIGZvcm1kYXRhLCB7XHJcbiAgICAgICByZXBvcnRQcm9ncmVzczogdHJ1ZVxyXG4gICAgfSk7XHJcbiAgICB0aGlzLmh0dHBjbGllbnQucmVxdWVzdCh1cGxvYWRSZXEpLnN1YnNjcmliZShldmVudCA9PiB7XHJcbiAgICAgICBpZiAoZXZlbnQudHlwZSA9PT0gSHR0cEV2ZW50VHlwZS5VcGxvYWRQcm9ncmVzcykge1xyXG4gICAgICAgICAgIHRoaXMucHJvZ3Jlc3MgPSBNYXRoLnJvdW5kKDEwMCAqIGV2ZW50LmxvYWRlZCAvIGV2ZW50LnRvdGFsKTtcclxuICAgICAgIH1cclxuICAgfSk7XHJcbiAgICovXHJcblxyXG4gfVxyXG5cclxuXHJcbiAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuICAgIHB1YmxpYyBoYXNDaGFuZ2VzKCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiBCb29sZWFuKHRoaXMuZGVsZXRlZEl0ZW1zLmxlbmd0aCB8fCB0aGlzLnVwZGF0ZWRJdGVtcy5sZW5ndGggfHwgdGhpcy5jcmVhdGVkSXRlbXMubGVuZ3RoKTtcclxuICAgIH1cclxuICBwcml2YXRlIGFkZFRvQm9keShOZXdWYWw6YW55LCBCb2R5OmFueSkge1xyXG4gICAgICAgIEJvZHkucHVzaChOZXdWYWwpO1xyXG4gICAgICAgLy8gaWYgKHRoaXMucGFyYW1Db25maWcuREVCVUdfRkxBRykgY29uc29sZS5sb2coJ05ld1ZhbCA6IEhGIFBsZWFzZScgICsgSlNPTi5zdHJpbmdpZnkoTmV3VmFsKSk7XHJcbiAgICAgICAgcmV0dXJuIEJvZHk7XHJcbiAgICAgIH1cclxuXHJcblxyXG5cclxuXHJcblxyXG4gIHB1YmxpYyBzaG93Tm90aWZpY2F0aW9uKHN0eWxlTm90ZTogYW55LCBtc2c6IGFueSk6IHZvaWQge1xyXG5cclxuICAgICAgbGV0IGhpZGVBZnRlciA9IHRoaXMuaGlkZUFmdGVyO1xyXG5cclxuICAgICAgaWYgKHN0eWxlTm90ZSA9PSBcImVycm9yXCIpXHJcbiAgICAgICAgaGlkZUFmdGVyID0gNTAwMDtcclxuICAgICAgICB0aGlzLm5vdGlmaWNhdGlvblNlcnZpY2Uuc2hvdyh7XHJcbiAgICAgICAgICAgIGNvbnRlbnQ6IG1zZyxcclxuICAgICAgICAgICAgY3NzQ2xhc3M6ICdidXR0b24tbm90aWZpY2F0aW9uJyxcclxuICAgICAgICAgICAgYW5pbWF0aW9uOiB7IHR5cGU6ICdmYWRlJywgZHVyYXRpb246IDIwMCB9LFxyXG4gICAgICAgICAgICBwb3NpdGlvbjogeyBob3Jpem9udGFsOiAnY2VudGVyJywgdmVydGljYWw6ICdib3R0b20nIH0sXHJcbi8vICAgICAgICAgICAgc3RhY2tpbmc6IHsgc3RhY2tpbmc6ICdkb3duJyB9LFxyXG4gICAgICB0eXBlOiB7IHN0eWxlOiBzdHlsZU5vdGUsIGljb246IHRydWUgfSxcclxuICAgICAgICAgICAgLy9jbG9zYWJsZTogdHJ1ZSxcclxuICAgICAgICAgICAgaGlkZUFmdGVyOiBoaWRlQWZ0ZXJcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICBwdWJsaWMgZ29SZWNvcmRBY3QodGFyZ2V0OiBhbnksIG9iamVjdDogYW55KTogdm9pZCB7XHJcblxyXG4gICAgICAgIGxldCByZWM7XHJcblxyXG4gICAgaWYgKG9iamVjdC5wYXJhbUNvbmZpZy5ERUJVR19GTEFHKSBjb25zb2xlLmxvZyh0YXJnZXQpO1xyXG4gICAgaWYgKG9iamVjdC5wYXJhbUNvbmZpZy5ERUJVR19GTEFHKSBjb25zb2xlLmxvZyhcIm9iamVjdC5DdXJyZW50UmVjOlwiICsgb2JqZWN0LkN1cnJlbnRSZWMpO1xyXG4gICAgaWYgKG9iamVjdC5wYXJhbUNvbmZpZy5ERUJVR19GTEFHKSBjb25zb2xlLmxvZyhvYmplY3QuZXhlY3V0ZVF1ZXJ5cmVzdWx0KTtcclxuXHJcbiAgICBpZiAodGFyZ2V0ID09IFwiZmlyc3RcIikge1xyXG4gICAgICAgICAgb2JqZWN0LkN1cnJlbnRSZWMgPSAwO1xyXG4gICAgICAgIH1cclxuICAgIGVsc2UgaWYgKHRhcmdldCA9PSBcImxhc3RcIikge1xyXG4gICAgICBvYmplY3QuQ3VycmVudFJlYyA9IG9iamVjdC5leGVjdXRlUXVlcnlyZXN1bHQudG90YWwgLSAxO1xyXG4gICAgICAgIH1cclxuICAgIGVsc2UgaWYgKHRhcmdldCA9PSBcIm5leHRcIikge1xyXG4gICAgICAgICAgaWYgKG9iamVjdC5DdXJyZW50UmVjIDwgb2JqZWN0LmV4ZWN1dGVRdWVyeXJlc3VsdC50b3RhbCAtIDEpXHJcbiAgICAgICAgICBvYmplY3QuQ3VycmVudFJlYyA9IG9iamVjdC5DdXJyZW50UmVjICsgMTtcclxuICAgICAgICB9XHJcbiAgICBlbHNlIGlmICh0YXJnZXQgPT0gXCJwcmV2XCIpIHtcclxuICAgICAgaWYgKG9iamVjdC5DdXJyZW50UmVjID4gMClcclxuICAgICAgICAgICAgb2JqZWN0LkN1cnJlbnRSZWMgPSBvYmplY3QuQ3VycmVudFJlYyAtIDE7XHJcbiAgICAgICAgfVxyXG4gICAgICBlbHNlIGlmICh0eXBlb2YgdGFyZ2V0ID09IFwibnVtYmVyXCIpIHtcclxuICAgICAgICAgICAgICBvYmplY3QuQ3VycmVudFJlYyA9IHRhcmdldDtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgcmVjID0gb2JqZWN0LmV4ZWN1dGVRdWVyeXJlc3VsdC5kYXRhW29iamVjdC5DdXJyZW50UmVjXTtcclxuICAgIGlmIChvYmplY3QucGFyYW1Db25maWcuREVCVUdfRkxBRykgY29uc29sZS5sb2coXCItLS0tLS1yZWM6XCIsIHJlYyk7XHJcbiAgICBpZiAob2JqZWN0LnBhcmFtQ29uZmlnLkRFQlVHX0ZMQUcpIGNvbnNvbGUubG9nKG9iamVjdC5mb3JtLmdldFJhd1ZhbHVlKCkpO1xyXG4gICAgaWYgKHR5cGVvZiByZWMgIT09IFwidW5kZWZpbmVkXCIpIHtcclxuICAgICAgICAgIG9iamVjdC5mb3JtLnBhdGNoVmFsdWUocmVjKTtcclxuICAgICAgICAgIG9iamVjdC5mb3JtLm1hcmtBc1ByaXN0aW5lKCk7XHJcbiAgICAgICAgICBvYmplY3QuZm9ybS5tYXJrQXNVbnRvdWNoZWQoKTtcclxuXHJcbiAgICAgICAgICAvL29iamVjdC5mb3JtLnJlc2V0KHJlYywge2VtaXRFdmVudDogb2JqZWN0LmVtaXRFdmVudCAhPSBudWxsID8gb2JqZWN0LmVtaXRFdmVudCA6IHRydWV9KTtcclxuICAgICAgICAgIGlmIChvYmplY3QuZGlzYWJsZUVtaXRSZWFkQ29tcGxldGVkICE9IHRydWUpXHJcbiAgICAgICAgICAgIG9iamVjdC5yZWFkQ29tcGxldGVkT3V0cHV0LmVtaXQob2JqZWN0LmZvcm0uZ2V0UmF3VmFsdWUoKSk7XHJcbiAgICAgIGlmIChvYmplY3QucGFyYW1Db25maWcuREVCVUdfRkxBRykgY29uc29sZS5sb2coXCJBVFQ6b2JqZWN0LmNhbGxCYWNrRnVuY3Rpb246XCIsIG9iamVjdC5jYWxsQmFja0Z1bmN0aW9uKVxyXG4gICAgICBpZiAodHlwZW9mIG9iamVjdC5jYWxsQmFja0Z1bmN0aW9uICE9PSBcInVuZGVmaW5lZFwiKVxyXG4gICAgICAgICAgICBvYmplY3QuY2FsbEJhY2tGdW5jdGlvbihyZWMpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlXHJcbiAgICAgICAgICBvYmplY3QuY2xlYXJDb21wbGV0ZWRPdXRwdXQuZW1pdChbXSk7XHJcblxyXG4gICAgfVxyXG4gIHB1YmxpYyBnb1JlY29yZCh0YXJnZXQ6IGFueSwgb2JqZWN0OmFueSk6IHZvaWQge1xyXG4gICAgaWYgKHR5cGVvZiBvYmplY3QuZXhlY3V0ZVF1ZXJ5cmVzdWx0ICE9IFwidW5kZWZpbmVkXCIpIHtcclxuICAgICAgICAgIGlmICh0aGlzLnBhcmFtQ29uZmlnLkRFQlVHX0ZMQUcpIGNvbnNvbGUubG9nKG9iamVjdC5mb3JtLmRpcnR5KTtcclxuICAgICAgaWYgKG9iamVjdC5mb3JtLmRpcnR5ID09IHRydWUpIHtcclxuICAgICAgICAgICAgbGV0IGRpYWxvZ1N0cnVjID0ge1xyXG4gICAgICAgICAgICAgIG1zZzogdGhpcy5zYXZlQ2hhbmdlc01zZyxcclxuICAgICAgICAgIHRpdGxlOiB0aGlzLnBsZWFzZUNvbmZpcm1Nc2csXHJcbiAgICAgICAgICAgICAgaW5mbzogdGFyZ2V0LFxyXG4gICAgICAgICAgb2JqZWN0OiBvYmplY3QsXHJcbiAgICAgICAgICBhY3Rpb246IHRoaXMuWWVzTm9BY3Rpb25zLFxyXG4gICAgICAgICAgY2FsbGJhY2s6IHRoaXMuZ29SZWNvcmRBY3RcclxuICAgICAgICB9O1xyXG4gICAgICAgICAgICAgIHRoaXMuc2hvd0NvbmZpcm1hdGlvbihkaWFsb2dTdHJ1Yyk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgIGVsc2Uge1xyXG4gICAgICAgIHRoaXMuZ29SZWNvcmRBY3QodGFyZ2V0LCBvYmplY3QpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgIH1cclxuXHJcbiAgcHVibGljIHNob3dDb25maXJtYXRpb24oZGlhbG9nU3RydWM6YW55KSB7XHJcbiAgICAgICAgbGV0IGRpYWxvZ1Jlc3VsdDtcclxuICAgICAgICAgIGNvbnN0IGRpYWxvZzogRGlhbG9nUmVmID0gdGhpcy5kaWFsb2dTZXJ2aWNlLm9wZW4oe1xyXG4gICAgICAgICAgICAgIHRpdGxlOiBkaWFsb2dTdHJ1Yy50aXRsZSxcclxuICAgICAgICAgICAgICBjb250ZW50OiBkaWFsb2dTdHJ1Yy5tc2csXHJcbiAgICAgICAgICAgICAgYWN0aW9uczogZGlhbG9nU3RydWMuYWN0aW9uLFxyXG4gICAgICAgICAgICAgIHdpZHRoOiA0NTAsXHJcbiAgICAgICAgICAgICAgaGVpZ2h0OiAyMDAsXHJcbiAgICAgICAgICAgICAgbWluV2lkdGg6IDI1MFxyXG4gICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgZGlhbG9nLnJlc3VsdC5zdWJzY3JpYmUoKHJlc3VsdCkgPT4ge1xyXG4gICAgICAgICAgICAgIGlmIChyZXN1bHQgaW5zdGFuY2VvZiBEaWFsb2dDbG9zZVJlc3VsdCkge1xyXG4gICAgICAgICAgICAgICAgICBpZiAodGhpcy5wYXJhbUNvbmZpZy5ERUJVR19GTEFHKSBjb25zb2xlLmxvZygnY2xvc2UnKTtcclxuICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICBpZiAodGhpcy5wYXJhbUNvbmZpZy5ERUJVR19GTEFHKSBjb25zb2xlLmxvZygnYWN0aW9uJywgcmVzdWx0KTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgZGlhbG9nUmVzdWx0ID0gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShyZXN1bHQpKTtcclxuICAgICAgaWYgKGRpYWxvZ1Jlc3VsdC5wcmltYXJ5ID09IHRydWUpIHtcclxuICAgICAgICAgICAgICAgIGlmIChkaWFsb2dTdHJ1Yy5oYXNPd25Qcm9wZXJ0eSgnY2FsbGJhY2snKSkge1xyXG4gICAgICAgICAgICAgICAgICBkaWFsb2dTdHJ1Yy5jYWxsYmFjayhkaWFsb2dTdHJ1Yy5pbmZvLCBkaWFsb2dTdHJ1Yy5vYmplY3QpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgIH0pO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAvKioqKioqKioqKioqKioqKiBGb3JtIGZ1bmN0aW9ucyAqKioqKioqKioqKioqKi9cclxuICBwdWJsaWMgZXhlY3V0ZVF1ZXJ5X2Zvcm0oZm9ybTogYW55LCBvYmplY3Q6YW55KSB7XHJcbiAgICAgICAgaWYgKHRoaXMucGFyYW1Db25maWcuREVCVUdfRkxBRykgY29uc29sZS5sb2coXCJzdGFyLXNlcnZpY2VzIGV4ZWN1dGVRdWVyeV9mb3JtIG9iamVjdC5mb3JtOlwiKTtcclxuICAgIGlmICh0aGlzLnBhcmFtQ29uZmlnLkRFQlVHX0ZMQUcpIGNvbnNvbGUubG9nKFwib2JqZWN0LmlzU2VhcmNoOlwiICsgb2JqZWN0LmlzU2VhcmNoKVxyXG4gICAgICAgIC8vaWYgKHRoaXMucGFyYW1Db25maWcuREVCVUdfRkxBRykgY29uc29sZS5sb2cob2JqZWN0LmZvcm0uZ2V0UmF3VmFsdWUoKSk7XHJcbiAgICAgICAgLy9pZiAodGhpcy5wYXJhbUNvbmZpZy5ERUJVR19GTEFHKSBjb25zb2xlLmxvZyhmb3JtLnZhbHVlKTtcclxuICAgIGlmICh0eXBlb2Ygb2JqZWN0LmZvcm0gIT09IFwidW5kZWZpbmVkXCIpIHtcclxuICAgICAgaWYgKChvYmplY3QuZm9ybS5kaXJ0eSA9PSB0cnVlKSAmJiAob2JqZWN0LmlzU2VhcmNoICE9IHRydWUpKSB7XHJcbiAgICAgICAgICAgIGxldCBkaWFsb2dTdHJ1YyA9IHtcclxuICAgICAgICAgICAgICBtc2c6IHRoaXMuc2F2ZUNoYW5nZXNNc2csXHJcbiAgICAgICAgICB0aXRsZTogdGhpcy5wbGVhc2VDb25maXJtTXNnLFxyXG4gICAgICAgICAgICAgIGluZm86IGZvcm0sXHJcbiAgICAgICAgICBvYmplY3Q6IG9iamVjdCxcclxuICAgICAgICAgIGFjdGlvbjogdGhpcy5ZZXNOb0FjdGlvbnMsXHJcbiAgICAgICAgICBjYWxsYmFjazogdGhpcy5leGVjdXRlUXVlcnlBY3RfZm9ybVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgICAgICAgdGhpcy5zaG93Q29uZmlybWF0aW9uKGRpYWxvZ1N0cnVjKTtcclxuICAgICAgICAgIH1cclxuICAgICAgZWxzZSB7XHJcbiAgICAgICAgdGhpcy5leGVjdXRlUXVlcnlBY3RfZm9ybShmb3JtLCBvYmplY3QpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICB0aGlzLmV4ZWN1dGVRdWVyeUFjdF9mb3JtKGZvcm0sIG9iamVjdCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgLy8gcm91dGluZV9uYW1lIGZyb20gOiBodHRwczovL3d3dy50ZWxlcmlrLmNvbS9rZW5kby1hbmd1bGFyLXVpL2NvbXBvbmVudHMvZGF0ZWlucHV0cy9kYXRlcGlja2VyL2ludGVncmF0aW9uLXdpdGgtanNvbi9cclxuXHJcbiAgcHVibGljIHBhcnNlVG9EYXRlKGpzb246IGFueSkge1xyXG4gICAgLy9pZiAodGhpcy5wYXJhbUNvbmZpZy5ERUJVR19GTEFHKSBjb25zb2xlLmxvZyhcImpzb246aW46XCIsIGpzb24pXHJcbiAgICAgICAgT2JqZWN0LmtleXMoanNvbikubWFwKGtleSA9PiB7XHJcbiAgICAgICAgICBsZXQgVmFsMSA9IGpzb25ba2V5XTtcclxuICAgICAgLy9pZiAodGhpcy5wYXJhbUNvbmZpZy5ERUJVR19GTEFHKSBjb25zb2xlLmxvZyhcImtleTpcIiwga2V5LCBWYWwxLCB0eXBlb2YgVmFsMSk7XHJcbiAgICAgICAgICAvL2xldCBuID0ga2V5LnRvVXBwZXJDYXNlKCkuc2VhcmNoKFwiREFURVwiKTtcclxuICAgICAgICAgIC8vaWYgKG4gIT0gLTEpe1xyXG4gICAgICBpZiAodHlwZW9mIFZhbDEgIT0gXCJudW1iZXJcIikgeyAgIC8vaXQgaXMgbm90IGEgbnVtYmVyLCBjaGVjayBtb3JlXHJcbiAgICAgICAgaWYgKChWYWwxICE9IG51bGwpICYmIChWYWwxLmxlbmd0aCA+IDcpKSB7XHJcbiAgICAgICAgICAgICAgY29uc3QgZGF0ZSA9IG5ldyBEYXRlKFZhbDEpO1xyXG4gICAgICAgICAgICAgIGxldCBjaGVja1lZWVkgPSBpc05hTihwYXJzZUludChWYWwxLnN1YnN0cmluZygwLCA0KSkpO1xyXG4gICAgICAgICAgICAgIGxldCB0aW1lVmFsID0gZGF0ZS5nZXRUaW1lKCk7XHJcbiAgICAgICAgICBpZiAodGhpcy5wYXJhbUNvbmZpZy5ERUJVR19GTEFHKSBjb25zb2xlLmxvZyhcInRpbWVWYWw6XCIsIHRpbWVWYWwsIGlzTmFOKHRpbWVWYWwpKTtcclxuICAgICAgICAgICAgICBpZiAoIWlzTmFOKHRpbWVWYWwpICYmICh0aW1lVmFsID4gMCkgJiYgIWNoZWNrWVlZWSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMucGFyYW1Db25maWcuREVCVUdfRkxBRykgY29uc29sZS5sb2coXCJpdCBpcyBhIGRhdGVcIik7XHJcbiAgICAgICAgICAgICAgICAvL2lmICh0aGlzLnBhcmFtQ29uZmlnLkRFQlVHX0ZMQUcpIGNvbnNvbGUubG9nKFwia2V5OlwiK2tleSArIFwiOlwiICsgZGF0ZS5nZXRUaW1lKCkpO1xyXG4gICAgICAgICAgICAgICAganNvbltrZXldID0gZGF0ZTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIC8vaWYgKHRoaXMucGFyYW1Db25maWcuREVCVUdfRkxBRykgY29uc29sZS5sb2coXCJqc29uOm91dDpcIiwganNvbilcclxuICAgICAgICByZXR1cm4ganNvbjtcclxuICAgICAgfVxyXG4gIHB1YmxpYyBkYXRlWVlZWU1NREQob2JqZWN0OmFueSwganNvbjogYW55KSB7XHJcbiAgICBpZiAodGhpcy5wYXJhbUNvbmZpZy5ERUJVR19GTEFHKSBjb25zb2xlLmxvZyhcImpzb246XCIsIGpzb24pXHJcbiAgICAgICAgIE9iamVjdC5rZXlzKGpzb24pLm1hcChrZXkgPT4ge1xyXG4gICAgICAgICAgIGxldCBuID0ga2V5LnRvVXBwZXJDYXNlKCkuc2VhcmNoKFwiX0RBVEVcIik7XHJcbiAgICAgIGlmIChuICE9IC0xKSB7XHJcbiAgICAgICAgICAgIGxldCBkYXRlT3JnID0ganNvbltrZXldO1xyXG4gICAgICAgICAgICAgbGV0IGRhdGUgPSBuZXcgRGF0ZShqc29uW2tleV0pO1xyXG4gICAgICAgICAgICAgLy9kYXRlID0gdG9Mb2NhbERhdGUoZGF0ZSk7XHJcbiAgICAgICAgICAgICBsZXQgdGltZVZhbCA9IGRhdGUuZ2V0VGltZSgpO1xyXG4gICAgICAgICAgICAgaWYgKCFpc05hTih0aW1lVmFsKSAmJiAodGltZVZhbCA+IDApKSB7XHJcbiAgICAgICAgICAgICAgIC8vaWYgKHRoaXMucGFyYW1Db25maWcuREVCVUdfRkxBRykgY29uc29sZS5sb2coXCJrZXk6XCIra2V5ICsgXCI6XCIgKyBkYXRlLmdldFRpbWUoKSk7XHJcbiAgICAgICAgICAgICAgIC8vbGV0IGFycmF5ID0gZGF0ZU9yZy5zcGxpdChcIlRcIilcclxuICAgICAgICAgIGRhdGVPcmcgPSBmb3JtYXREYXRlKGRhdGVPcmcsIG9iamVjdC5wYXJhbUNvbmZpZy5EYXRlRm9ybWF0LCBvYmplY3QucGFyYW1Db25maWcuZGF0ZUxvY2FsZSlcclxuICAgICAgICAgICAgICAganNvbltrZXldID0gZGF0ZU9yZztcclxuICAgICAgICAgICAgIH1cclxuICAgICAgICAgICB9XHJcbiAgICAgICAgIH0pO1xyXG4gICAgICAgICByZXR1cm4ganNvbjtcclxuICAgICAgIH1cclxuIHB1YmxpYyBzbWFydFN0cmluZ1Byb2Nlc3NvcihpbnB1dFN0cmluZzpzdHJpbmcsIGpzb25EYXRhOnsgW2tleTogc3RyaW5nXTogYW55IH0pIHtcclxuICAgIGZ1bmN0aW9uIHJlcGxhY2VWYXJpYWJsZXNJblN0cmluZyhpbnB1dFN0cmluZzpzdHJpbmcsIGpzb25EYXRhOnsgW2tleTogc3RyaW5nXTogYW55IH0pIHtcclxuICAgICAgICAvLyBDaGVjayBpZiBzdHJpbmcgY29udGFpbnMgYW55IHZhcmlhYmxlcyAoc3RhcnRzIHdpdGggOilcclxuICAgICAgICBsZXQgdmFyaWFibGVQYXR0ZXJuOiBSZWdFeHAgPSAvOihbYS16QS1aX11bYS16QS1aMC05X10qKS9nO1xyXG4gICAgICAgIGxldCBoYXNWYXJpYWJsZXM6Ym9vbGVhbiA9IHZhcmlhYmxlUGF0dGVybi50ZXN0KGlucHV0U3RyaW5nKTtcclxuICAgICAgICBcclxuICAgICAgICAvLyBJZiBubyB2YXJpYWJsZXMgZm91bmQsIHJldHVybiBvcmlnaW5hbCBzdHJpbmdcclxuICAgICAgICBpZiAoIWhhc1ZhcmlhYmxlcykge1xyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgb3JpZ2luYWw6IGlucHV0U3RyaW5nLFxyXG4gICAgICAgICAgICAgICAgcmVzdWx0OiBpbnB1dFN0cmluZyxcclxuICAgICAgICAgICAgICAgIHJlcGxhY2VkOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIG1lc3NhZ2U6IFwiTm8gdmFyaWFibGVzIGZvdW5kIC0gcmV0dXJuaW5nIG9yaWdpbmFsIHN0cmluZ1wiLFxyXG4gICAgICAgICAgICAgICAgdmFyaWFibGVzRm91bmQ6IFtdXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vIFJlc2V0IHJlZ2V4IGxhc3RJbmRleCBzaW5jZSB3ZSB1c2VkIHRlc3QoKSBhYm92ZVxyXG4gICAgICAgIHZhcmlhYmxlUGF0dGVybi5sYXN0SW5kZXggPSAwO1xyXG4gICAgICAgIFxyXG4gICAgICAgIC8vIEZpbmQgYWxsIHVuaXF1ZSB2YXJpYWJsZXNcclxuICAgICAgICBsZXQgdmFyaWFibGVzID0gbmV3IFNldDxzdHJpbmc+KCk7XHJcbiAgICAgICAgbGV0IG1hdGNoO1xyXG4gICAgICAgIHdoaWxlICgobWF0Y2ggPSB2YXJpYWJsZVBhdHRlcm4uZXhlYyhpbnB1dFN0cmluZykpICE9PSBudWxsKSB7XHJcbiAgICAgICAgICAgIHZhcmlhYmxlcy5hZGQobWF0Y2hbMV0pOyAvLyBBZGQgdmFyaWFibGUgbmFtZSB3aXRob3V0IGNvbG9uXHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vIFJlcGxhY2UgdmFyaWFibGVzIHdpdGggdmFsdWVzXHJcbiAgICAgICAgbGV0IHJlc3VsdFN0cmluZyA9IGlucHV0U3RyaW5nO1xyXG4gICAgICAgIGxldCByZXBsYWNlbWVudHMgPSB7fTtcclxuICAgICAgICBsZXQgbWlzc2luZ1ZhcmlhYmxlcyA9IFtdO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHZhcmlhYmxlcy5mb3JFYWNoKHZhcmlhYmxlTmFtZSA9PiB7XHJcbiAgICAgICAgICAgIC8vIENvbnZlcnQgdmFyaWFibGUgbmFtZSB0byB1cHBlcmNhc2UgdG8gbWF0Y2ggSlNPTiBrZXlzIChjYXNlLWluc2Vuc2l0aXZlKVxyXG4gICAgICAgICAgICBsZXQga2V5ID0gT2JqZWN0LmtleXMoanNvbkRhdGEpLmZpbmQoXHJcbiAgICAgICAgICAgICAgICBrID0+IGsudG9VcHBlckNhc2UoKSA9PT0gdmFyaWFibGVOYW1lLnRvVXBwZXJDYXNlKClcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJQcm9jZXNzaW5nIHZhcmlhYmxlOiBcIiAsIHZhcmlhYmxlTmFtZSwgXCJtYXRjaGVkIGtleTpcIiwga2V5ICwgXCJqc29uRGF0YTpcIiwganNvbkRhdGEpO1xyXG4gICAgICAgICAgICBpZiAoa2V5ICE9PSB1bmRlZmluZWQgJiYganNvbkRhdGFba2V5XSAhPT0gdW5kZWZpbmVkICYmIGpzb25EYXRhW2tleV0gIT09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgIGxldCB2YWx1ZSA9IGpzb25EYXRhW2tleV07XHJcbiAgICAgICAgICAgICAgICAvLyBGb3JtYXQgdGhlIHZhbHVlIHByb3Blcmx5XHJcbiAgICAgICAgICAgICAgICBsZXQgZm9ybWF0dGVkVmFsdWU7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gRXNjYXBlIHNpbmdsZSBxdW90ZXMgaW4gc3RyaW5nc1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBlc2NhcGVkVmFsdWUgPSB2YWx1ZS5yZXBsYWNlKC8nL2csIFwiJydcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9ybWF0dGVkVmFsdWUgPSBgJyR7ZXNjYXBlZFZhbHVlfSdgO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmICh0eXBlb2YgdmFsdWUgPT09ICdudW1iZXInKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9ybWF0dGVkVmFsdWUgPSB2YWx1ZS50b1N0cmluZygpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmICh2YWx1ZSBpbnN0YW5jZW9mIERhdGUpIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyBGb3JtYXQgZGF0ZSBhcyBTUUwgZGF0ZSBzdHJpbmdcclxuICAgICAgICAgICAgICAgICAgICBsZXQgeWVhciA9IHZhbHVlLmdldEZ1bGxZZWFyKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IG1vbnRoID0gU3RyaW5nKHZhbHVlLmdldE1vbnRoKCkgKyAxKS5wYWRTdGFydCgyLCAnMCcpO1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBkYXkgPSBTdHJpbmcodmFsdWUuZ2V0RGF0ZSgpKS5wYWRTdGFydCgyLCAnMCcpO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvcm1hdHRlZFZhbHVlID0gYCcke3llYXJ9LSR7bW9udGh9LSR7ZGF5fSdgO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmICh0eXBlb2YgdmFsdWUgPT09ICdib29sZWFuJykge1xyXG4gICAgICAgICAgICAgICAgICAgIGZvcm1hdHRlZFZhbHVlID0gdmFsdWUgPyAnMScgOiAnMCc7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIEZvciBvdGhlciB0eXBlcywgY29udmVydCB0byBzdHJpbmcgYW5kIHF1b3RlXHJcbiAgICAgICAgICAgICAgICAgICAgZm9ybWF0dGVkVmFsdWUgPSBgJyR7U3RyaW5nKHZhbHVlKX0nYDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgLy8gUmVwbGFjZSBBTEwgb2NjdXJyZW5jZXMgb2YgdGhpcyB2YXJpYWJsZVxyXG4gICAgICAgICAgICAgICAgbGV0IHZhcmlhYmxlUmVnZXggPSBuZXcgUmVnRXhwKGA6JHt2YXJpYWJsZU5hbWV9XFxcXGJgLCAnZycpO1xyXG4gICAgICAgICAgICAgICAgcmVzdWx0U3RyaW5nID0gcmVzdWx0U3RyaW5nLnJlcGxhY2UodmFyaWFibGVSZWdleCwgZm9ybWF0dGVkVmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICByZXBsYWNlbWVudHNbdmFyaWFibGVOYW1lXSA9IHtcclxuICAgICAgICAgICAgICAgICAgICBvcmlnaW5hbDogYDoke3ZhcmlhYmxlTmFtZX1gLFxyXG4gICAgICAgICAgICAgICAgICAgIHJlcGxhY2VkV2l0aDogZm9ybWF0dGVkVmFsdWUsXHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6IHZhbHVlLFxyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6IHR5cGVvZiB2YWx1ZVxyXG4gICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIG1pc3NpbmdWYXJpYWJsZXMucHVzaCh2YXJpYWJsZU5hbWUpO1xyXG4gICAgICAgICAgICAgICAgLy8gS2VlcCB0aGUgdmFyaWFibGUgYXMgaXMgaWYgbm90IGZvdW5kXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICBcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBvcmlnaW5hbDogaW5wdXRTdHJpbmcsXHJcbiAgICAgICAgICAgIHJlc3VsdDogcmVzdWx0U3RyaW5nLFxyXG4gICAgICAgICAgICByZXBsYWNlZDogdHJ1ZSxcclxuICAgICAgICAgICAgcmVwbGFjZW1lbnRzOiByZXBsYWNlbWVudHMsXHJcbiAgICAgICAgICAgIHZhcmlhYmxlc0ZvdW5kOiBBcnJheS5mcm9tKHZhcmlhYmxlcyksXHJcbiAgICAgICAgICAgIG1pc3NpbmdWYXJpYWJsZXM6IG1pc3NpbmdWYXJpYWJsZXMsXHJcbiAgICAgICAgICAgIG1lc3NhZ2U6IG1pc3NpbmdWYXJpYWJsZXMubGVuZ3RoID4gMCBcclxuICAgICAgICAgICAgICAgID8gYFNvbWUgdmFyaWFibGVzIG5vdCBmb3VuZDogJHttaXNzaW5nVmFyaWFibGVzLmpvaW4oJywgJyl9YFxyXG4gICAgICAgICAgICAgICAgOiAnQWxsIHZhcmlhYmxlcyByZXBsYWNlZCBzdWNjZXNzZnVsbHknXHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuICAgIC8vIEZpcnN0IGNoZWNrIGlmIGl0IGxvb2tzIGxpa2UgYSBTUUwgV0hFUkUgY2xhdXNlIHdpdGggdmFyaWFibGVzXHJcbiAgICAgIGxldCBoYXNXaGVyZUNsYXVzZSA9IGlucHV0U3RyaW5nLnRvVXBwZXJDYXNlKCkuaW5jbHVkZXMoJ19XSEVSRT0nKTtcclxuICAgICAgbGV0IGhhc1ZhcmlhYmxlcyA9IC86W2EtekEtWl9dW2EtekEtWjAtOV9dKi8udGVzdChpbnB1dFN0cmluZyk7XHJcbiAgICAgIFxyXG4gICAgICAvLyBJZiBpdCBoYXMgV0hFUkUgYnV0IG5vIHZhcmlhYmxlcywgaXQgbWlnaHQgYmUgY29tcGxldGUgYWxyZWFkeVxyXG4gICAgICBpZiAoaGFzV2hlcmVDbGF1c2UgJiYgIWhhc1ZhcmlhYmxlcykge1xyXG4gICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICBvcmlnaW5hbDogaW5wdXRTdHJpbmcsXHJcbiAgICAgICAgICAgICAgcmVzdWx0OiBpbnB1dFN0cmluZyxcclxuICAgICAgICAgICAgICBuZWVkc1JlcGxhY2VtZW50OiBmYWxzZSxcclxuICAgICAgICAgICAgICB0eXBlOiAnY29tcGxldGVfd2hlcmVfY2xhdXNlJyxcclxuICAgICAgICAgICAgICBtZXNzYWdlOiAnV0hFUkUgY2xhdXNlIGFwcGVhcnMgY29tcGxldGUgLSBubyB2YXJpYWJsZXMgdG8gcmVwbGFjZSdcclxuICAgICAgICAgIH07XHJcbiAgICAgIH1cclxuICAgICAgXHJcbiAgICAgIC8vIE90aGVyd2lzZSwgdHJ5IHRvIHJlcGxhY2UgdmFyaWFibGVzXHJcbiAgICAgIGxldCByZXBsYWNlbWVudFJlc3VsdCA9IHJlcGxhY2VWYXJpYWJsZXNJblN0cmluZyhpbnB1dFN0cmluZywganNvbkRhdGEpO1xyXG4gICAgICBcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgIC4uLnJlcGxhY2VtZW50UmVzdWx0LFxyXG4gICAgICAgICAgbmVlZHNSZXBsYWNlbWVudDogcmVwbGFjZW1lbnRSZXN1bHQucmVwbGFjZWQsXHJcbiAgICAgICAgICB0eXBlOiByZXBsYWNlbWVudFJlc3VsdC5yZXBsYWNlZCA/ICd3aXRoX3ZhcmlhYmxlcycgOiAnbm9fdmFyaWFibGVzJ1xyXG4gICAgICB9O1xyXG4gIH1cclxuICBwdWJsaWMgcHJvY2Vzc2Zvcm1hdHRlZFdoZXJlKG9iamVjdCwgZm9ybWF0dGVkV2hlcmUpe1xyXG4gICAgaWYgKHRoaXMuc2Vzc2lvblBhcmFtc1snTkFWSUdBVEVfREFUQSddICE9IFwidW5kZWZpbmVkXCIpe1xyXG4gICAgICB0aGlzLnNlc3Npb25QYXJhbXNbJ05BVklHQVRFX0RBVEEnXSA9IHt9O1xyXG4gICAgICBsZXQgbmF2RGF0YSA9IHt9XHJcbiAgICAgIGZvciAobGV0IGkgPTAgOyBpPCBvYmplY3QubWFzdGVyS2V5TmFtZUFyci5sZW5ndGg7aSsrKXtcclxuICAgICAgICAgIG5hdkRhdGFbb2JqZWN0Lm1hc3RlcktleU5hbWVBcnJbaV1dID0gb2JqZWN0Lm1hc3RlcktleUFycltpXVxyXG4gICAgICB9XHJcbiAgICAgIHRoaXMuc2Vzc2lvblBhcmFtc1snTkFWSUdBVEVfREFUQSddID0gbmF2RGF0YTtcclxuICAgIH1cclxuICAgIGxldCByZXN1bHQgPSB0aGlzLnNtYXJ0U3RyaW5nUHJvY2Vzc29yKGZvcm1hdHRlZFdoZXJlLCB0aGlzLnNlc3Npb25QYXJhbXNbJ05BVklHQVRFX0RBVEEnXSApO1xyXG4gICAgICBpZiAocmVzdWx0Lm5lZWRzUmVwbGFjZW1lbnQgPT0gdHJ1ZSApe1xyXG4gICAgICAgIGlmIChyZXN1bHQubWVzc2FnZS5zdGFydHNXaXRoIChcIlNvbWUgdmFyaWFibGVzIG5vdCBmb3VuZFwiKSApXHJcbiAgICAgICAgICBmb3JtYXR0ZWRXaGVyZSA9IFwiXCI7XHJcbiAgICAgICAgZWxzZVxyXG4gICAgICAgICAgZm9ybWF0dGVkV2hlcmUgPSByZXN1bHQucmVzdWx0O1xyXG4gICAgICB9XHJcbiAgICAgIGNvbnNvbGUubG9nIChcInByb2Nlc3Nmb3JtYXR0ZWRXaGVyZTp0aGlzLldoZXJlQ2xhdXNlXCIsIHJlc3VsdCwgZm9ybWF0dGVkV2hlcmUgKTtcclxuICAgIHRoaXMuc2Vzc2lvblBhcmFtc1snTkFWSUdBVEVfREFUQSddID0ge307XHJcbiAgICByZXR1cm4gZm9ybWF0dGVkV2hlcmU7XHJcbiAgfVxyXG4gIHB1YmxpYyBzdHJpbmdpZnlNdWx0aVNlbGVjdEZpZWxkcyhvYmplY3QsZm9ybSl7XHJcbiAgICBsZXQgZm9ybUdyb3VwID0gZm9ybS52YWx1ZTtcclxuICAgIGlmICh0eXBlb2Ygb2JqZWN0Lm11bHRpc2VsZWN0X2FyciAhPT0gXCJ1bmRlZmluZWRcIil7XHJcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgb2JqZWN0Lm11bHRpc2VsZWN0X2Fyci5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgZm9ybUdyb3VwW29iamVjdC5tdWx0aXNlbGVjdF9hcnJbaV1dID0gSlNPTi5zdHJpbmdpZnkoZm9ybUdyb3VwW29iamVjdC5tdWx0aXNlbGVjdF9hcnJbaV1dKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgaWYgKHR5cGVvZiBvYmplY3QubXVsdGlzZWxlY3RfdHJlZV9hcnIgIT09IFwidW5kZWZpbmVkXCIpe1xyXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG9iamVjdC5tdWx0aXNlbGVjdF90cmVlX2Fyci5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgZm9ybUdyb3VwW29iamVjdC5tdWx0aXNlbGVjdF90cmVlX2FycltpXV0gPSBKU09OLnN0cmluZ2lmeShmb3JtR3JvdXBbb2JqZWN0Lm11bHRpc2VsZWN0X3RyZWVfYXJyW2ldXSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiBmb3JtO1xyXG4gICB9XHJcbiAgcHVibGljIGZpeE11bHRpU2VsZWN0RmllbGRzX3Jlc3VsdChvYmplY3QsIHJlc3VsdCl7XHJcbiAgICBpZiAodHlwZW9mIG9iamVjdC5tdWx0aXNlbGVjdF9hcnIgIT09IFwidW5kZWZpbmVkXCIpe1xyXG4gICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBvYmplY3QubXVsdGlzZWxlY3RfYXJyLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCByZXN1bHQuZGF0YS5sZW5ndGg7IGorKykge1xyXG4gICAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICByZXN1bHQuZGF0YVtqXVtvYmplY3QubXVsdGlzZWxlY3RfYXJyW2ldXSA9IEpTT04ucGFyc2UocmVzdWx0LmRhdGFbal1bb2JqZWN0Lm11bHRpc2VsZWN0X2FycltpXV0pO1xyXG4gICAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGlmICh0eXBlb2Ygb2JqZWN0Lm11bHRpc2VsZWN0X3RyZWVfYXJyICE9PSBcInVuZGVmaW5lZFwiKXtcclxuICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgb2JqZWN0Lm11bHRpc2VsZWN0X3RyZWVfYXJyLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCByZXN1bHQuZGF0YS5sZW5ndGg7IGorKykge1xyXG4gICAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICByZXN1bHQuZGF0YVtqXVtvYmplY3QubXVsdGlzZWxlY3RfdHJlZV9hcnJbaV1dID0gSlNPTi5wYXJzZShyZXN1bHQuZGF0YVtqXVtvYmplY3QubXVsdGlzZWxlY3RfdHJlZV9hcnJbaV1dKTtcclxuICAgICAgICAgICAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgIH1cclxuICAgcHVibGljIGZpeE11bHRpU2VsZWN0RmllbGRzX05ld1ZhbChvYmplY3QsIE5ld1ZhbCl7XHJcbiAgICAgaWYgKHR5cGVvZiBvYmplY3QubXVsdGlzZWxlY3RfYXJyICE9PSBcInVuZGVmaW5lZFwiKXtcclxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBvYmplY3QubXVsdGlzZWxlY3RfYXJyLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgaWYgKE5ld1ZhbFtvYmplY3QubXVsdGlzZWxlY3RfYXJyW2ldXSAhPSBudWxsICYmIE5ld1ZhbFtvYmplY3QubXVsdGlzZWxlY3RfYXJyW2ldXS5sZW5ndGggPiAwKXtcclxuICAgICAgICAgIE5ld1ZhbFtvYmplY3QubXVsdGlzZWxlY3RfYXJyW2ldXSA9IEpTT04ucGFyc2UoTmV3VmFsW29iamVjdC5tdWx0aXNlbGVjdF9hcnJbaV1dKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIFxyXG4gICAgaWYgKHR5cGVvZiBvYmplY3QubXVsdGlzZWxlY3RfdHJlZV9hcnIgIT09IFwidW5kZWZpbmVkXCIpe1xyXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG9iamVjdC5tdWx0aXNlbGVjdF90cmVlX2Fyci5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIGlmIChOZXdWYWxbb2JqZWN0Lm11bHRpc2VsZWN0X3RyZWVfYXJyW2ldXSAhPSBudWxsICYmIE5ld1ZhbFtvYmplY3QubXVsdGlzZWxlY3RfdHJlZV9hcnJbaV1dLmxlbmd0aCA+IDApe1xyXG4gICAgICAgICAgTmV3VmFsW29iamVjdC5tdWx0aXNlbGVjdF90cmVlX2FycltpXV0gPSBKU09OLnBhcnNlKE5ld1ZhbFtvYmplY3QubXVsdGlzZWxlY3RfdHJlZV9hcnJbaV1dKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIFxyXG4gICB9XHJcbiAgICBwdWJsaWMgdHJhbnNmb3JtRm9yVHJlZVZpZXcoZGF0YSk6IGFueVtdIHtcclxuICAgIGNvbnN0IGdyb3VwTWFwID0gbmV3IE1hcDxzdHJpbmcsIGFueT4oKTtcclxuXHJcbiAgICBkYXRhLmZvckVhY2goaXRlbSA9PiB7XHJcbiAgICAgIGNvbnN0IGdyb3VwS2V5ID0gaXRlbS5DT0RFVEVYVF9MQU5HO1xyXG5cclxuICAgICAgaWYgKCFncm91cE1hcC5oYXMoZ3JvdXBLZXkpKSB7XHJcbiAgICAgICAgZ3JvdXBNYXAuc2V0KGdyb3VwS2V5LCB7XHJcbiAgICAgICAgICB0ZXh0OiBncm91cEtleSxcclxuICAgICAgICAgIGlkOiBncm91cEtleSwgIC8vIEFkZGVkIGlkIGZpZWxkXHJcbiAgICAgICAgICBpdGVtczogW11cclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG5cclxuICAgICAgY29uc3QgZ3JvdXAgPSBncm91cE1hcC5nZXQoZ3JvdXBLZXkpO1xyXG4gICAgICBncm91cC5pdGVtcy5wdXNoKHtcclxuICAgICAgICB0ZXh0OiBpdGVtLkNPREUsXHJcbiAgICAgICAgaWQ6IGl0ZW0uQ09ERSAgLy8gQ2hhbmdlZCBmcm9tICdjb2RlJyB0byAnaWQnXHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcblxyXG4gICAgcmV0dXJuIEFycmF5LmZyb20oZ3JvdXBNYXAudmFsdWVzKCkpO1xyXG4gIH1cclxuICAgcHVibGljIGNhbGxsdHJhbnNmb3JtRm9yVHJlZVZpZXcob2JqZWN0KXtcclxuICAgIC8vY29uc29sZS5sb2cgKFwidGhpcy5sb29rdXBBcnJEZWY6b2JqZWN0Lm11bHRpc2VsZWN0X3RyZWVfYXJyOlwiLCBvYmplY3QubXVsdGlzZWxlY3RfdHJlZV9hcnIpXHJcbiAgICBpZiAoIHR5cGVvZiBvYmplY3QubXVsdGlzZWxlY3RfdHJlZV9hcnIgIT0gXCJ1bmRlZmluZWRcIilcclxuICAgIHtcclxuICAgICAgZm9yIChsZXQgaSA9MDsgaSA8IG9iamVjdC5tdWx0aXNlbGVjdF90cmVlX2Fyci5sZW5ndGg7IGkrKyl7XHJcbiAgICAgICAgbGV0IGNvbE5hbWUgPSBvYmplY3QubXVsdGlzZWxlY3RfdHJlZV9hcnJbaV07XHJcbiAgICAgICAgbGV0IGtwTmFtZSA9IFwibGtwQXJyXCIgKyBjb2xOYW1lO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGxldCBsa3BWYWwgPSBvYmplY3Rba3BOYW1lXTtcclxuICAgICAgICAvL2NvbnNvbGUubG9nIChcInRoaXMubG9va3VwQXJyRGVmOmtwTmFtZTpcIiwga3BOYW1lLCBsa3BWYWwpXHJcbiAgICAgICAgbGtwVmFsID0gdGhpcy50cmFuc2Zvcm1Gb3JUcmVlVmlldyhsa3BWYWwpO1xyXG4gICAgICAgIC8vY29uc29sZS5sb2cgKFwidGhpcy5sb29rdXBBcnJEZWY6a3BOYW1lOlwiLCBrcE5hbWUsIGxrcFZhbClcclxuICAgICAgICBvYmplY3Rba3BOYW1lXSA9IGxrcFZhbDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHVibGljIGV4ZWN1dGVRdWVyeUFjdF9mb3JtKGZvcm06IGFueSwgb2JqZWN0OmFueSkge1xyXG4gICAgY29uc29sZS5sb2coXCJleGVjdXRlUXVlcnlBY3RfZm9ybTpmb3JtOlwiLGZvcm0sIFwib2JqZWN0LmlzQ2hpbGQgOlwiLG9iamVjdC5pc0NoaWxkLCBcIm9iamVjdC5pc1NlYXJjaDpcIixvYmplY3QuaXNTZWFyY2ggKVxyXG4gICAgaWYgKHR5cGVvZiBmb3JtID09PSBcInVuZGVmaW5lZFwiKVxyXG4gICAgICAgICAgcmV0dXJuO1xyXG5cclxuICAgICAgICBsZXQgcGFyYW1Db25maWcgPSB7XHJcbiAgICAgICAgICBcIk5hbWVcIjogXCJjaGlsZFJlY29yZHNcIixcclxuICAgICAgICAgIFwiVmFsXCI6IDBcclxuICAgICAgICB9O1xyXG4gICAgICAgIHNldFBhcmFtQ29uZmlnKHBhcmFtQ29uZmlnKTtcclxuICAgIGlmIChvYmplY3QuaXNDaGlsZCA9PSB0cnVlKSB7XHJcbiAgICAgIGlmIChvYmplY3QuaXNTZWFyY2ggIT0gdHJ1ZSkge1xyXG4gICAgICAgIC8vb2JqZWN0LmZvcm0ucmVzZXQoKTtcclxuICAgICAgICBvYmplY3QuZm9ybS5yZXNldChvYmplY3QuZm9ybUluaXRpYWxWYWx1ZXMpO1xyXG5cclxuICAgICAgICBpZiAoKHR5cGVvZiBvYmplY3QubWFzdGVyS2V5TmFtZUFyciAhPSBcInVuZGVmaW5lZFwiKSAmJiAob2JqZWN0Lm1hc3RlcktleU5hbWVBcnIubGVuZ3RoICE9IDApKSB7XHJcbiAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG9iamVjdC5tYXN0ZXJLZXlOYW1lQXJyLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBvYmplY3QuZm9ybUluaXRpYWxWYWx1ZXNbb2JqZWN0Lm1hc3RlcktleU5hbWVBcnJbaV1dID0gb2JqZWN0Lm1hc3RlcktleUFycltpXTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICBvYmplY3QuZm9ybUluaXRpYWxWYWx1ZXNbb2JqZWN0Lm1hc3RlcktleU5hbWVdID0gb2JqZWN0Lm1hc3RlcktleTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgLy9vYmplY3QuZm9ybUluaXRpYWxWYWx1ZXNbb2JqZWN0Lm1hc3RlcktleU5hbWVdID0gb2JqZWN0Lm1hc3RlcktleTtcclxuICAgICAgICBvYmplY3QuZm9ybS5yZXNldChvYmplY3QuZm9ybUluaXRpYWxWYWx1ZXMsIHsgZW1pdEV2ZW50OiBvYmplY3QuZW1pdEV2ZW50ICE9IG51bGwgPyBvYmplY3QuZW1pdEV2ZW50IDogdHJ1ZSB9KTtcclxuICAgICAgICBpZiAob2JqZWN0LnBhcmFtQ29uZmlnLkRFQlVHX0ZMQUcpIGNvbnNvbGUubG9nKFwib2JqZWN0Lm1hc3RlcktleU5hbWU6XCIgKyBvYmplY3QubWFzdGVyS2V5TmFtZSk7XHJcbiAgICAgICAgICAgIG9iamVjdC5pc1NlYXJjaCA9IHRydWU7XHJcbiAgICAgICAgICAgIGZvcm0gPSBvYmplY3QuZm9ybS5nZXRSYXdWYWx1ZSgpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbGV0IFBhZ2UgPSBcIiZfcXVlcnk9XCIgKyBvYmplY3QuZ2V0Q01EO1xyXG4gICAgaWYgKG9iamVjdC5wYXJhbUNvbmZpZy5ERUJVR19GTEFHKSBjb25zb2xlLmxvZyhcIm9iamVjdC5pc1NlYXJjaDpcIiArIG9iamVjdC5pc1NlYXJjaClcclxuICAgIGlmIChvYmplY3QuaXNTZWFyY2ggPT0gdHJ1ZSkge1xyXG4gICAgICAgICAgaWYgKG9iamVjdC5wYXJhbUNvbmZpZy5ERUJVR19GTEFHKSBjb25zb2xlLmxvZyhmb3JtLnZhbHVlKTtcclxuICAgIGxldCBOZXdWYWwgPSBmb3JtO1xyXG4gICAgICAgICAgICBvYmplY3QuaXNTZWFyY2ggPSBmYWxzZTtcclxuICAgIGlmICgodHlwZW9mIG9iamVjdC5mb3JtYXR0ZWRXaGVyZSA9PT0gXCJ1bmRlZmluZWRcIikgfHwgKG9iamVjdC5mb3JtYXR0ZWRXaGVyZSA9PSBudWxsKSkge1xyXG4gICAgICAgICAgICAgIFBhZ2UgPSBQYWdlICsgb2JqZWN0LnN0YXJTZXJ2aWNlcy5mb3JtYXRXaGVyZShOZXdWYWwpO1xyXG5cclxuICAgICAgICAgICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgb2JqZWN0LmZvcm1hdHRlZFdoZXJlID0gdGhpcy5wcm9jZXNzZm9ybWF0dGVkV2hlcmUob2JqZWN0LCBvYmplY3QuZm9ybWF0dGVkV2hlcmUpO1xyXG4gICAgICAgICAgICAgIFBhZ2UgPSBQYWdlICsgb2JqZWN0LmZvcm1hdHRlZFdoZXJlO1xyXG4gICAgICAgICAgICAgIG9iamVjdC5mb3JtYXR0ZWRXaGVyZSA9IG51bGw7XHJcbiAgICAgICAgICAgIH1cclxuICAgIGlmICgodHlwZW9mIG9iamVjdC5PcmRlckJ5Q2xhdXNlICE9PSBcInVuZGVmaW5lZFwiKSAmJiAob2JqZWN0Lk9yZGVyQnlDbGF1c2UgIT0gXCJcIikpXHJcbiAgICAgICAgICAgICAgUGFnZSA9IFBhZ2UgKyBcIiZfT1JERVJCWT1cIiArIG9iamVjdC5PcmRlckJ5Q2xhdXNlO1xyXG4gICAgfVxyXG5cclxuICAgIG9iamVjdC5leGVjdXRlUXVlcnlyZXN1bHQgPSBbXTtcclxuICAgIG9iamVjdC5leGVjdXRlUXVlcnlyZXN1bHQucmVzdWx0ID0gMDtcclxuICAgICAgICBvYmplY3QuQ3VycmVudFJlYyA9IDA7XHJcblxyXG4gICAgICAgIFBhZ2UgPSBlbmNvZGVVUkkoUGFnZSk7XHJcbiAgICBvYmplY3Quc3RhclNlcnZpY2VzLmZldGNoKG9iamVjdCwgUGFnZSkuc3Vic2NyaWJlKChyZXN1bHQ6YW55KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAocmVzdWx0ICE9IG51bGwpIHtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHJlc3VsdC5kYXRhWzBdLmRhdGEubGVuZ3RoOyBpKyspXHJcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0LmRhdGFbMF0uZGF0YVtpXSA9IG9iamVjdC5zdGFyU2VydmljZXMucGFyc2VUb0RhdGUocmVzdWx0LmRhdGFbMF0uZGF0YVtpXSk7XHJcblxyXG5cclxuICAgICAgICByZXN1bHQgPSB7XHJcbiAgICAgICAgICBkYXRhOiByZXN1bHQuZGF0YVswXS5kYXRhLFxyXG4gICAgICAgICAgdG90YWw6IHBhcnNlSW50KHJlc3VsdC5kYXRhWzBdLmRhdGEubGVuZ3RoLCAxMClcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKG9iamVjdC5pc01hc3RlcilcclxuICAgICAgICAgIG9iamVjdC5zdGFyU2VydmljZXMuc2hvd05vdGlmaWNhdGlvbignc3VjY2VzcycsIFwiUmVjb3JkcyByZXRyaWV2ZWQgOiBcIiArIHJlc3VsdC50b3RhbCk7XHJcbiAgICAgICAgb2JqZWN0LnN0YXJTZXJ2aWNlcy5maXhNdWx0aVNlbGVjdEZpZWxkc19yZXN1bHQob2JqZWN0LCByZXN1bHQpXHJcbiAgICAgICAgb2JqZWN0LmV4ZWN1dGVRdWVyeXJlc3VsdCA9IHJlc3VsdDtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmhlbHBNc2cgPSBcIlwiO1xyXG4gICAgICAgIGlmIChvYmplY3QucGFyYW1Db25maWcuREVCVUdfRkxBRykgY29uc29sZS5sb2coXCJvYmplY3QuZXhlY3V0ZVF1ZXJ5cmVzdWx0OlwiLCBvYmplY3QuZXhlY3V0ZVF1ZXJ5cmVzdWx0KTtcclxuICAgICAgICBpZiAodHlwZW9mIHJlc3VsdC5kYXRhW29iamVjdC5DdXJyZW50UmVjXSAhPT0gXCJ1bmRlZmluZWRcIikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgb2JqZWN0LmZvcm0ucGF0Y2hWYWx1ZShyZXN1bHQuZGF0YVtvYmplY3QuQ3VycmVudFJlY10pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgb2JqZWN0LmZvcm0ubWFya0FzUHJpc3RpbmUoKTtcclxuICAgICAgICAgICAgICAgICAgICAgIG9iamVjdC5mb3JtLm1hcmtBc1VudG91Y2hlZCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgb2JqZWN0LmZvcm0ucmVzZXQocmVzdWx0LmRhdGFbb2JqZWN0LkN1cnJlbnRSZWNdLCB7IGVtaXRFdmVudDogb2JqZWN0LmVtaXRFdmVudCAhPSBudWxsID8gb2JqZWN0LmVtaXRFdmVudCA6IHRydWUgfSk7XHJcblxyXG4gICAgICAgIGlmIChvYmplY3QucGFyYW1Db25maWcuREVCVUdfRkxBRykgY29uc29sZS5sb2coXCJmb3JtIHNlcnZpY2VyZWFkQ29tcGxldGVkT3V0cHV0XCIpO1xyXG4gICAgICAgIGlmIChvYmplY3QucGFyYW1Db25maWcuREVCVUdfRkxBRykgY29uc29sZS5sb2cob2JqZWN0LnJlYWRDb21wbGV0ZWRPdXRwdXQpO1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBwYXJhbUNvbmZpZyA9IHtcclxuICAgICAgICAgICAgICAgICAgICAgIFwiTmFtZVwiOiBcImNoaWxkUmVjb3Jkc1wiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgXCJWYWxcIjogcmVzdWx0LnRvdGFsXHJcbiAgICAgICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgICAgICBzZXRQYXJhbUNvbmZpZyhwYXJhbUNvbmZpZyk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHJlc3VsdC50b3RhbCAhPSAwKVxyXG4gICAgICAgICAgICAgICAgICAgICAgb2JqZWN0LmlzTmV3ID0gZmFsc2U7XHJcblxyXG4gICAgICAgIGlmIChvYmplY3QuZGlzYWJsZUVtaXRSZWFkQ29tcGxldGVkICE9IHRydWUpIHtcclxuICAgICAgICAgIGlmIChyZXN1bHQudG90YWwgIT0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBvYmplY3QucmVhZENvbXBsZXRlZE91dHB1dC5lbWl0KG9iamVjdC5mb3JtLmdldFJhd1ZhbHVlKCkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvYmplY3QuY2xlYXJDb21wbGV0ZWRPdXRwdXQuZW1pdChbXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgIGlmICh0eXBlb2Ygb2JqZWN0LmNhbGxCYWNrRnVuY3Rpb24gIT09IFwidW5kZWZpbmVkXCIpXHJcbiAgICAgICAgICAgICAgICAgICAgICBvYmplY3QuY2FsbEJhY2tGdW5jdGlvbihyZXN1bHQuZGF0YVswXSk7XHJcblxyXG5cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHRoaXMuc2V0UHJpbWFyS2V5TmFtZUFycihvYmplY3QsIHRydWUpO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAoZXJyOmFueSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgLy9hbGVydCgnZXJyb3I6JyArIGVyci5tZXNzYWdlKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2hvd0Vycm9yTXNnKG9iamVjdCwgZXJyKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgcHVibGljIGV4ZWNzdGFyU2VydmljZXNfZm9ybV9pblRyYW5zKE5ld1ZhbDphbnksIG9iamVjdDphbnkpIHtcclxuICAgICAgdGhpcy5jb21taXRCb2R5LnB1c2goTmV3VmFsKTtcclxuICAgIGlmIChvYmplY3QuYWN0aW9uICE9IFwiUkVNT1ZFXCIpIHtcclxuICAgICAgaWYgKHR5cGVvZiBvYmplY3QuZXhlY3V0ZVF1ZXJ5cmVzdWx0ICE9PSBcInVuZGVmaW5lZFwiKSB7XHJcbiAgICAgICAgaWYgKG9iamVjdC5pc05ldyA9PSB0cnVlKSB7XHJcbiAgICAgICAgICAgIG9iamVjdC5leGVjdXRlUXVlcnlyZXN1bHQuZGF0YS5wdXNoKE5ld1ZhbCk7XHJcbiAgICAgICAgICAgIG9iamVjdC5leGVjdXRlUXVlcnlyZXN1bHQudG90YWwgPSBvYmplY3QuZXhlY3V0ZVF1ZXJ5cmVzdWx0LnRvdGFsICsgMTtcclxuICAgICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgb2JqZWN0LmV4ZWN1dGVRdWVyeXJlc3VsdC5kYXRhW29iamVjdC5DdXJyZW50UmVjXSA9IE5ld1ZhbDtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIGVsc2Uge1xyXG4gICAgICAgIGxldCBOZXdWYWxBcnI6YW55ID0gW107XHJcbiAgICAgICAgICBOZXdWYWxBcnIucHVzaChOZXdWYWwpO1xyXG4gICAgICAgIGxldCByZXN1bHQgPSB7XHJcbiAgICAgICAgICBkYXRhOiBOZXdWYWxBcnIsXHJcbiAgICAgICAgICB0b3RhbDogMVxyXG4gICAgICAgIH1cclxuICAgICAgICBvYmplY3QuZXhlY3V0ZVF1ZXJ5cmVzdWx0ID0gcmVzdWx0O1xyXG4gICAgICAgICAgICBvYmplY3QuQ3VycmVudFJlYyA9IDA7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgdmFyIGRhdGE6YW55ID0gW107XHJcbiAgICAgICAgZGF0YS5wdXNoKE5ld1ZhbClcclxuICAgICAgaWYgKG9iamVjdC5pc05ldyA9PSB0cnVlKSB7XHJcbiAgICAgICAgICBvYmplY3QuaXNOZXcgPSBmYWxzZTtcclxuICAgICAgICBpZiAodHlwZW9mIG9iamVjdC5jYWxsQmFja1Bvc3RfSW5zZXJ0ICE9PSBcInVuZGVmaW5lZFwiKSB7XHJcbiAgICAgICAgICAgICAgb2JqZWN0LmNhbGxCYWNrUG9zdF9JbnNlcnQuYXBwbHkob2JqZWN0LCBkYXRhKTtcclxuICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICBlbHNlIHtcclxuICAgICAgICBpZiAodHlwZW9mIG9iamVjdC5jYWxsQmFja1Bvc3RfdXBkYXRlICE9PSBcInVuZGVmaW5lZFwiKSB7XHJcbiAgICAgICAgICBvYmplY3QuY2FsbEJhY2tQb3N0X3VwZGF0ZS5hcHBseShvYmplY3QsIGRhdGEpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICAgIC8vUkVNT1ZFXHJcbiAgICAgICAgb2JqZWN0LmV4ZWN1dGVRdWVyeXJlc3VsdC5kYXRhLnNwbGljZShvYmplY3QuQ3VycmVudFJlYywgMSk7XHJcbiAgICAgICAgb2JqZWN0LmV4ZWN1dGVRdWVyeXJlc3VsdC50b3RhbC0tO1xyXG4gICAgICBpZiAob2JqZWN0LkN1cnJlbnRSZWMgPiAwKSB7XHJcbiAgICAgICAgICBvYmplY3QuQ3VycmVudFJlYy0tO1xyXG4gICAgICAgIG9iamVjdC5mb3JtLnJlc2V0KG9iamVjdC5leGVjdXRlUXVlcnlyZXN1bHQuZGF0YVtvYmplY3QuQ3VycmVudFJlY10sIHsgZW1pdEV2ZW50OiBvYmplY3QuZW1pdEV2ZW50ICE9IG51bGwgPyBvYmplY3QuZW1pdEV2ZW50IDogdHJ1ZSB9KTtcclxuICAgICAgICAgIGlmIChvYmplY3QuaXNOZXcgPT0gdHJ1ZSlcclxuICAgICAgICAgICAgb2JqZWN0LmlzTmV3ID0gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICBlbHNlIHtcclxuICAgICAgICBvYmplY3QuZm9ybS5yZXNldChvYmplY3QuZm9ybUluaXRpYWxWYWx1ZXMsIHsgZW1pdEV2ZW50OiBvYmplY3QuZW1pdEV2ZW50ICE9IG51bGwgPyBvYmplY3QuZW1pdEV2ZW50IDogdHJ1ZSB9KTtcclxuICAgICAgICAgIG9iamVjdC5pc05ldyA9IHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICBsZXQgTmV3VmFsMTphbnkgPSBbXTtcclxuICAgICAgICAgICAgICAgIE5ld1ZhbDEucHVzaChOZXdWYWwpO1xyXG4gICAgICBpZiAodHlwZW9mIG9iamVjdC5jYWxsQmFja1JlbW92ZUF0dCAhPT0gXCJ1bmRlZmluZWRcIilcclxuICAgICAgICBvYmplY3QuY2FsbEJhY2tSZW1vdmVBdHQob2JqZWN0LCBOZXdWYWwpO1xyXG4gICAgICBpZiAodHlwZW9mIG9iamVjdC5jYWxsQmFja1Bvc3RfUmVtb3ZlICE9PSBcInVuZGVmaW5lZFwiKSB7XHJcbiAgICAgICAgLy8gbGV0IE5ld1ZhbDEgPSBbXTtcclxuICAgICAgICAvLyBOZXdWYWwxLnB1c2goTmV3VmFsKTtcclxuICAgICAgICAgICAgICBvYmplY3QuY2FsbEJhY2tQb3N0X1JlbW92ZS5hcHBseShvYmplY3QsIE5ld1ZhbDEpO1xyXG4gICAgICAgIH1cclxuICAgICAgICAgIFxyXG4gICAgICB9XHJcbiAgICBcclxuICAgIGlmIChvYmplY3QuYWN0aW9uICE9IFwiUkVNT1ZFXCIpIHtcclxuICAgICAgb2JqZWN0LmZvcm0ucmVzZXQoTmV3VmFsLCB7IGVtaXRFdmVudDogb2JqZWN0LmVtaXRFdmVudCAhPSBudWxsID8gb2JqZWN0LmVtaXRFdmVudCA6IHRydWUgfSk7XHJcbiAgICB9XHJcbiAgICBpZiAob2JqZWN0LmRpYWJsZUVtaXRTYXZlID09IHRydWUpIHsgfVxyXG4gICAgZWxzZVxyXG4gICAgICBvYmplY3Quc2F2ZUNvbXBsZXRlZE91dHB1dC5lbWl0KE5ld1ZhbCk7XHJcbiAgICBpZiAob2JqZWN0LmlzQ2hpbGQgPT0gdHJ1ZSkge1xyXG4gICAgICBsZXQgcGFyYW1Db25maWcgPSB7XHJcbiAgICAgICAgXCJOYW1lXCI6IFwiY2hpbGRSZWNvcmRzXCIsXHJcbiAgICAgICAgXCJWYWxcIjogb2JqZWN0LmV4ZWN1dGVRdWVyeXJlc3VsdC50b3RhbFxyXG4gICAgICB9O1xyXG4gICAgICBzZXRQYXJhbUNvbmZpZyhwYXJhbUNvbmZpZyk7XHJcbiAgICB9XHJcbiAgICBvYmplY3QuYWN0aW9uID0gXCJcIjtcclxuICAgIHRoaXMuc2V0UHJpbWFyS2V5TmFtZUFycihvYmplY3QsIHRydWUpO1xyXG5cclxuICAgIH1cclxuICBwdWJsaWMgZXhlY3N0YXJTZXJ2aWNlc19mb3JtKE5ld1ZhbDphbnksIG9iamVjdDphbnkpIHtcclxuICAgIGlmICh0aGlzLnBhcmFtQ29uZmlnLkRFQlVHX0ZMQUcpIGNvbnNvbGUubG9nKFwiTmV3VmFsOlwiLCBOZXdWYWwpO1xyXG4gICAgICAgIG9iamVjdC5hZGRUb0JvZHkoTmV3VmFsKTtcclxuICAgIGlmIChvYmplY3QuaXNOZXcgPT0gdHJ1ZSl7XHJcbiAgICAgIGxldCBzdWZmaXhfc3FsID0ge1wiX1FVRVJZXCI6IFwiR0VUX0xBU1RfSURcIn07XHJcbiAgICAgIG9iamVjdC5hZGRUb0JvZHkoc3VmZml4X3NxbCk7XHJcbiAgICAgIC8vb2JqZWN0LnN1ZmZpeF9zcWw9IHVuZGVmaW5lZDtcclxuICAgIH1cclxuICAgIGxldCBQYWdlID0gXCImX3RyYW5zPVlcIjtcclxuICAgICAgICAgIGlmICh0aGlzLmluVHJhbnMpIHtcclxuICAgICAgdGhpcy5leGVjc3RhclNlcnZpY2VzX2Zvcm1faW5UcmFucyhOZXdWYWwsIG9iamVjdCk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICB0aGlzLnBvc3Qob2JqZWN0LCBQYWdlLCBvYmplY3QuQm9keSkuc3Vic2NyaWJlKFBhZ2UgPT4ge1xyXG4gICAgICBvYmplY3QuQm9keSA9IFtdO1xyXG4gICAgICBpZiAodGhpcy5wYXJhbUNvbmZpZy5ERUJVR19GTEFHKSBjb25zb2xlLmxvZyhcIm9iamVjdC5leGVjdXRlUXVlcnlyZXN1bHQuZGF0YTpvYmplY3QuQ3VycmVudFJlYzpcIiAsIG9iamVjdC5DdXJyZW50UmVjICwgXCIgb2JqZWN0LmFjdGlvbjpcIiAsIG9iamVjdC5hY3Rpb24sIG9iamVjdC5leGVjdXRlUXVlcnlyZXN1bHQsIFwiUGFnZTpcIiwgUGFnZSk7XHJcbiAgICAgICAgICAgIC8vaWYgKHR5cGVvZiBvYmplY3QuZXhlY3V0ZVF1ZXJ5cmVzdWx0ICE9PSBcInVuZGVmaW5lZFwiKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgaWYgKHRoaXMucGFyYW1Db25maWcuREVCVUdfRkxBRykgY29uc29sZS5sb2coXCJoZXJlMVwiKTtcclxuICAgICAgICBpZiAob2JqZWN0LmFjdGlvbiAhPSBcIlJFTU9WRVwiKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5wYXJhbUNvbmZpZy5ERUJVR19GTEFHKSBjb25zb2xlLmxvZyhvYmplY3QuZXhlY3V0ZVF1ZXJ5cmVzdWx0KTtcclxuICAgICAgICAgIGlmICh0eXBlb2Ygb2JqZWN0LmV4ZWN1dGVRdWVyeXJlc3VsdCAhPT0gXCJ1bmRlZmluZWRcIikge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5wYXJhbUNvbmZpZy5ERUJVR19GTEFHKSBjb25zb2xlLmxvZyhcIm9iamVjdC5pc05ldzpcIiArIG9iamVjdC5pc05ldywgXCJvYmplY3QuZXhlY3V0ZVF1ZXJ5cmVzdWx0OlwiLCBvYmplY3QuZXhlY3V0ZVF1ZXJ5cmVzdWx0XHJcbiAgICAgICAgICAgICAgLCBcIm9iamVjdC5leGVjdXRlUXVlcnlyZXN1bHQuZGF0YTpcIiwgb2JqZWN0LmV4ZWN1dGVRdWVyeXJlc3VsdC5kYXRhKVxyXG4gICAgICAgICAgICBpZiAodHlwZW9mIG9iamVjdC5leGVjdXRlUXVlcnlyZXN1bHQuZGF0YSAhPT0gXCJ1bmRlZmluZWRcIikge1xyXG4gICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgIGlmIChvYmplY3QuaXNOZXcgPT0gdHJ1ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIG9iamVjdC5leGVjdXRlUXVlcnlyZXN1bHQuZGF0YS5wdXNoKE5ld1ZhbCk7XHJcbiAgICAgICAgICAgICAgICAgICAgb2JqZWN0LmV4ZWN1dGVRdWVyeXJlc3VsdC50b3RhbCA9IG9iamVjdC5leGVjdXRlUXVlcnlyZXN1bHQudG90YWwgKyAxO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vb2JqZWN0LkN1cnJlbnRSZWMrKztcclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIG9iamVjdC5leGVjdXRlUXVlcnlyZXN1bHQuZGF0YVtvYmplY3QuQ3VycmVudFJlY10gPSBOZXdWYWw7XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAodGhpcy5wYXJhbUNvbmZpZy5ERUJVR19GTEFHKSBjb25zb2xlLmxvZyhcIm9iamVjdC5leGVjdXRlUXVlcnlyZXN1bHQgcG9zdFwiKTtcclxuICAgICAgICAgICAgaWYgKHRoaXMucGFyYW1Db25maWcuREVCVUdfRkxBRykgY29uc29sZS5sb2cob2JqZWN0LmV4ZWN1dGVRdWVyeXJlc3VsdCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgbGV0IE5ld1ZhbEFycjphbnkgPSBbXTtcclxuICAgICAgICAgICAgICAgICAgTmV3VmFsQXJyLnB1c2goTmV3VmFsKTtcclxuICAgICAgICAgICAgbGV0IHJlc3VsdCA9IHtcclxuICAgICAgICAgICAgICBkYXRhOiBOZXdWYWxBcnIsXHJcbiAgICAgICAgICAgICAgdG90YWw6IDFcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBvYmplY3QuZXhlY3V0ZVF1ZXJ5cmVzdWx0ID0gcmVzdWx0O1xyXG4gICAgICAgICAgICAgICAgICAgIG9iamVjdC5DdXJyZW50UmVjID0gMDtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICB0aGlzLnNob3dOb3RpZmljYXRpb24oJ3N1Y2Nlc3MnLCBcIkRhdGEgc2F2ZWQgc3VjY2Vzc2Z1bGx5XCIpO1xyXG4gICAgICAgICAgdmFyIGRhdGE6YW55ID0gW107XHJcbiAgICAgICAgICAgICAgICBkYXRhLnB1c2goTmV3VmFsKVxyXG4gICAgICAgICAgaWYgKG9iamVjdC5pc05ldyA9PSB0cnVlKSB7XHJcbiAgICAgICAgICAgICAgICAgIG9iamVjdC5pc05ldyA9IGZhbHNlO1xyXG4gICAgICAgICAgICBpZiAodHlwZW9mIG9iamVjdC5jYWxsQmFja1Bvc3RfSW5zZXJ0ICE9PSBcInVuZGVmaW5lZFwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAvL29iamVjdC5jYWxsQmFja1Bvc3RfSW5zZXJ0KG9iamVjdCwgTmV3VmFsKTtcclxuICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY2hlY2tMYXN0SWQob2JqZWN0LCBOZXdWYWwsUGFnZSlcclxuICAgICAgICAgICAgICAgICAgICAgIG9iamVjdC5jYWxsQmFja1Bvc3RfSW5zZXJ0LmFwcGx5KG9iamVjdCwgZGF0YSk7XHJcbiAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgaWYgKHR5cGVvZiBvYmplY3QuY2FsbEJhY2tQb3N0X1VwZGF0ZSAhPT0gXCJ1bmRlZmluZWRcIikge1xyXG4gICAgICAgICAgICAgICAgICAgIG9iamVjdC5jYWxsQmFja1Bvc3RfVXBkYXRlLmFwcGx5KG9iamVjdCwgZGF0YSk7XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgLy9SRU1PVkVcclxuICAgICAgICAgICAgICAgIG9iamVjdC5leGVjdXRlUXVlcnlyZXN1bHQuZGF0YS5zcGxpY2Uob2JqZWN0LkN1cnJlbnRSZWMsIDEpO1xyXG4gICAgICAgICAgICAgICAgb2JqZWN0LmV4ZWN1dGVRdWVyeXJlc3VsdC50b3RhbC0tO1xyXG4gICAgICAgICAgaWYgKHRoaXMucGFyYW1Db25maWcuREVCVUdfRkxBRykgY29uc29sZS5sb2coXCJvYmplY3QuQ3VycmVudFJlYzpcIiArIG9iamVjdC5DdXJyZW50UmVjKVxyXG4gICAgICAgICAgaWYgKG9iamVjdC5DdXJyZW50UmVjID4gMCkge1xyXG4gICAgICAgICAgICAgICAgICBvYmplY3QuQ3VycmVudFJlYy0tO1xyXG4gICAgICAgICAgICBvYmplY3QuZm9ybS5yZXNldChvYmplY3QuZXhlY3V0ZVF1ZXJ5cmVzdWx0LmRhdGFbb2JqZWN0LkN1cnJlbnRSZWNdLCB7IGVtaXRFdmVudDogb2JqZWN0LmVtaXRFdmVudCAhPSBudWxsID8gb2JqZWN0LmVtaXRFdmVudCA6IHRydWUgfSk7XHJcbiAgICAgICAgICAgICAgICAgIGlmIChvYmplY3QuaXNOZXcgPT0gdHJ1ZSlcclxuICAgICAgICAgICAgICAgICAgICBvYmplY3QuaXNOZXcgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgb2JqZWN0LmZvcm0ucmVzZXQob2JqZWN0LmZvcm1Jbml0aWFsVmFsdWVzLCB7IGVtaXRFdmVudDogb2JqZWN0LmVtaXRFdmVudCAhPSBudWxsID8gb2JqZWN0LmVtaXRFdmVudCA6IHRydWUgfSk7XHJcbiAgICAgICAgICAgICAgICAgIG9iamVjdC5pc05ldyA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgIGlmICh0aGlzLnBhcmFtQ29uZmlnLkRFQlVHX0ZMQUcpIGNvbnNvbGUubG9nKFwib2JqZWN0LmlzTmV3OlwiICsgb2JqZWN0LmlzTmV3KVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgbGV0IE5ld1ZhbDE6YW55ID0gW107XHJcbiAgICAgICAgICAgICAgICBOZXdWYWwxLnB1c2goTmV3VmFsKTtcclxuICAgICAgICAgIGlmICh0eXBlb2Ygb2JqZWN0LmNhbGxCYWNrUmVtb3ZlQXR0ICE9PSBcInVuZGVmaW5lZFwiKVxyXG4gICAgICAgICAgICBvYmplY3QuY2FsbEJhY2tSZW1vdmVBdHQob2JqZWN0LCBOZXdWYWwxKTtcclxuICAgICAgICAgIGlmICh0eXBlb2Ygb2JqZWN0LmNhbGxCYWNrUG9zdF9SZW1vdmUgIT09IFwidW5kZWZpbmVkXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgIG9iamVjdC5jYWxsQmFja1Bvc3RfUmVtb3ZlLmFwcGx5KG9iamVjdCwgTmV3VmFsMSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAodGhpcy5wYXJhbUNvbmZpZy5ERUJVR19GTEFHKSBjb25zb2xlLmxvZyhcImhlcmUyXCIpO1xyXG4gICAgICBpZiAob2JqZWN0LmFjdGlvbiAhPSBcIlJFTU9WRVwiKSB7XHJcbiAgICAgICAgb2JqZWN0LnN0YXJTZXJ2aWNlcy5maXhNdWx0aVNlbGVjdEZpZWxkc19OZXdWYWwob2JqZWN0LCBOZXdWYWwpXHJcbiAgICAgICAgb2JqZWN0LmZvcm0ucmVzZXQoTmV3VmFsLCB7IGVtaXRFdmVudDogb2JqZWN0LmVtaXRFdmVudCAhPSBudWxsID8gb2JqZWN0LmVtaXRFdmVudCA6IHRydWUgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgaWYgKG9iamVjdC5kaWFibGVFbWl0U2F2ZSA9PSB0cnVlKSB7IH1cclxuICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICAgIG9iamVjdC5zYXZlQ29tcGxldGVkT3V0cHV0LmVtaXQoTmV3VmFsKTtcclxuICAgICAgaWYgKG9iamVjdC5pc0NoaWxkID09IHRydWUpIHtcclxuICAgICAgICAgICAgICBsZXQgcGFyYW1Db25maWcgPSB7XHJcbiAgICAgICAgICAgICAgICBcIk5hbWVcIjogXCJjaGlsZFJlY29yZHNcIixcclxuICAgICAgICAgICAgICAgIFwiVmFsXCI6IG9iamVjdC5leGVjdXRlUXVlcnlyZXN1bHQudG90YWxcclxuICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgIHNldFBhcmFtQ29uZmlnKHBhcmFtQ29uZmlnKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBvYmplY3QuYWN0aW9uID0gXCJcIjtcclxuICAgICAgICAgICAgdGhpcy5zZXRQcmltYXJLZXlOYW1lQXJyKG9iamVjdCwgdHJ1ZSk7XHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgZXJyID0+IHtcclxuICAgICAgICAgICAgLy9hbGVydCAoJ2Vycm9yOicgKyBlcnIubWVzc2FnZSk7XHJcbiAgICAgICAgICAgIHRoaXMuc2hvd0Vycm9yTXNnKG9iamVjdCwgZXJyKTtcclxuICAgICAgICAgIH0pO1xyXG4gICAgICB9XHJcbiAgcHVibGljIGNoZWNrTGFzdElkIChvYmplY3QsIE5ld1ZhbCxQYWdlKXtcclxuICAgIGNvbnNvbGUubG9nKFwiY2hlY2tMYXN0SWQ6TmV3VmFsOlwiLE5ld1ZhbCwgXCJQYWdlOlwiLFBhZ2UsIFwiUEtfQVVUTzpcIiwgb2JqZWN0LlBLX0FVVE8gKVxyXG4gICAgaWYgKHR5cGVvZiBvYmplY3QuUEtfQVVUTyAhPSBcInVuZGVmaW5lZFwiICYmIG9iamVjdC5QS19BVVRPICE9IFwiXCIpe1xyXG4gICAgICBsZXQgZGF0YSA9IFBhZ2UuZGF0YTtcclxuICAgICAgZm9yIChsZXQgaSA9IDA7IGk8IGRhdGEubGVuZ3RoOyBpKyspe1xyXG4gICAgICAgIGxldCByZWMgPSBkYXRhW2ldO1xyXG4gICAgICAgIGxldCBxdWVyeSA9IHJlYy5xdWVyeTtcclxuICAgICAgICBpZiAocXVlcnkuc3RhcnRzV2l0aChcIkdFVF9MQVNUX0lEXCIpKXtcclxuICAgICAgICAgIGxldCBkYXRhQXJyID0gcmVjLmRhdGE7XHJcbiAgICAgICAgICBsZXQgZGF0YVJlYyA9IGRhdGFBcnJbMF07XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhcImNoZWNrTGFzdElkOmRhdGFSZWM6XCIsZGF0YVJlYyk7XHJcbiAgICAgICAgICBsZXQga2V5cyA9IE9iamVjdC5rZXlzKGRhdGFSZWMpO1xyXG4gICAgICAgICAgbGV0IHZhbCA9IGRhdGFSZWNba2V5c1swXV07XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhcImNoZWNrTGFzdElkOnZhbDpcIix2YWwpO1xyXG4gICAgICAgICAgTmV3VmFsW29iamVjdC5QS19BVVRPXSA9IHZhbDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgcHVibGljIHNhdmVDaGFuZ2VzX2Zvcm0oZm9ybTogYW55LCBvYmplY3Q6YW55KTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5wYXJhbUNvbmZpZy5ERUJVR19GTEFHKSBjb25zb2xlLmxvZyhcInRoaXMuZm9ybTppbnZhbGlkXCIsb2JqZWN0LmZvcm0uaW52YWxpZCk7XHJcbiAgICBpZiAodGhpcy5wYXJhbUNvbmZpZy5ERUJVR19GTEFHKSBjb25zb2xlLmxvZygnc2F2ZUNoYW5nZXNfZm9ybSA6IG9iamVjdC5pc05ldyA6JyArIG9iamVjdC5pc05ldyk7XHJcbiAgICBpZiAodGhpcy5wYXJhbUNvbmZpZy5ERUJVR19GTEFHKSBjb25zb2xlLmxvZyhvYmplY3QuY29tcG9uZW50Q29uZmlnLnJvdXRpbmVBdXRoKTtcclxuICAgIGlmIChvYmplY3QuY29tcG9uZW50Q29uZmlnLnJvdXRpbmVBdXRoICE9IG51bGwpIHtcclxuICAgICAgaWYgKHRoaXMucGFyYW1Db25maWcuREVCVUdfRkxBRykgY29uc29sZS5sb2coXCJhdXRoTGV2ZWw6XCIgKyBvYmplY3QuY29tcG9uZW50Q29uZmlnLnJvdXRpbmVBdXRoLmF1dGhMZXZlbCk7XHJcbiAgICAgIGlmIChvYmplY3QuY29tcG9uZW50Q29uZmlnLnJvdXRpbmVBdXRoLmF1dGhMZXZlbCAhPSAyKSB7XHJcbiAgICAgICAgICAgIGxldCBkaWFsb2dTdHJ1YyA9IHtcclxuICAgICAgICAgICAgICBtc2c6IHRoaXMucmVhZE9ubHlNc2csXHJcbiAgICAgICAgICB0aXRsZTogXCJXYXJuaW5nXCIsXHJcbiAgICAgICAgICAgICAgaW5mbzogbnVsbCxcclxuICAgICAgICAgIG9iamVjdDogb2JqZWN0LFxyXG4gICAgICAgICAgYWN0aW9uOiB0aGlzLk9rQWN0aW9ucyxcclxuICAgICAgICAgIGNhbGxiYWNrOiBudWxsXHJcbiAgICAgICAgfTtcclxuICAgICAgICAgICAgICB0aGlzLnNob3dDb25maXJtYXRpb24oZGlhbG9nU3RydWMpO1xyXG4gICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgaWYgKHRoaXMucGFyYW1Db25maWcuREVCVUdfRkxBRykgY29uc29sZS5sb2coJ3NhdmVDaGFuZ2VzX2Zvcm0gOiBvYmplY3QuZm9ybS5kaXJ0eTonICwgb2JqZWN0LmZvcm0uZGlydHkgLCBcIiBvYmplY3QuaXNDaGlsZDpcIiwgb2JqZWN0LmlzQ2hpbGQsIFwiIG9iamVjdC5mb3JtLmludmFsaWQ6XCIsIG9iamVjdC5mb3JtLmludmFsaWQsIFwiIG9iamVjdC5mb3JtOlwiLCBvYmplY3QuZm9ybSk7XHJcbiAgICBpZiAoKCFvYmplY3QuZm9ybS5kaXJ0eSkgJiYgb2JqZWN0LmlzQ2hpbGQpXHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgaWYgKG9iamVjdC5mb3JtLmludmFsaWQpIHtcclxuICAgICAgb2JqZWN0LnN1Ym1pdHRlZCA9IHRydWU7XHJcbiAgICAgIGlmICh0aGlzLnBhcmFtQ29uZmlnLkRFQlVHX0ZMQUcpIGNvbnNvbGUubG9nKFwib2JqZWN0LmZvcm06XCIsb2JqZWN0LmZvcm0pO1xyXG4gICAgICAvL3RoaXMuc2hvd09rTXNnKG9iamVjdCwgdGhpcy5maWVsZHNSZXF1aXJlZE1zZywgXCJFcnJvclwiKTsgLy8gVGhpcyB3YXMgY29tbWVudGVkIGZvciBGb3JtIERyYWcuIENhc2UgY2hhbmdlIHBhZ2UgYW5kIHNlbGVjdCBhIGZpZWxkIFxyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG4gICAgbGV0IE5ld1ZhbDphbnk9e307XHJcbiAgICAgICAgLy9vYmplY3QuQm9keSA9IFtdOyAgIC8vIG9ubHkgb25lIHRyYW5zYWN0aW9uIGFsbG93ZWQgaW4gIGZvcm0uIE1vdmVkIHRvIGZvcm1cclxuICAgICAgICAvL05ld1ZhbCA9ICBmb3JtLnZhbHVlO1xyXG4gICAgICAgIC8vTmV3VmFsID0gT2JqZWN0LmFzc2lnbih7fSwgZm9ybS52YWx1ZSwge30pXHJcbiAgICAgICAgTmV3VmFsID0gey4uLmZvcm0udmFsdWV9O1xyXG4gICAgaWYgKHRoaXMucGFyYW1Db25maWcuREVCVUdfRkxBRykgY29uc29sZS5sb2coXCItLS0tLSBOZXdWYWw6XCIpXHJcbiAgICAgICAgaWYgKHRoaXMucGFyYW1Db25maWcuREVCVUdfRkxBRykgY29uc29sZS5sb2coTmV3VmFsKTtcclxuXHJcbiAgICAgICAgaWYgKG9iamVjdC5pc05ldyA9PSB0cnVlKVxyXG4gICAgICAgICAgTmV3VmFsW1wiX1FVRVJZXCJdID0gb2JqZWN0Lmluc2VydENNRDtcclxuICAgICAgICBlbHNlXHJcbiAgICAgICAgICBOZXdWYWxbXCJfUVVFUllcIl0gPSBvYmplY3QudXBkYXRlQ01EO1xyXG4gICAgICAgIC8vb2JqZWN0LmlzTmV3ID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5leGVjc3RhclNlcnZpY2VzX2Zvcm0oTmV3VmFsLCBvYmplY3QpO1xyXG4gICAgfVxyXG4gIHB1YmxpYyBlbnRlclF1ZXJ5QWN0X2Zvcm0oZm9ybTogYW55LCBvYmplY3Q6YW55KTogdm9pZCB7XHJcbiAgICAgICAgb2JqZWN0LkN1cnJlbnRSZWMgPSAwO1xyXG4gICAgb2JqZWN0LmV4ZWN1dGVRdWVyeXJlc3VsdCA9IFtdO1xyXG4gICAgb2JqZWN0LmV4ZWN1dGVRdWVyeXJlc3VsdC5yZXN1bHQgPSAwO1xyXG4gICAgICAgIFxyXG4gICAgICAgIG9iamVjdC5pc1NlYXJjaCA9IHRydWU7XHJcbiAgICAgICAgb2JqZWN0LmlzTmV3ID0gZmFsc2U7XHJcbiAgICBpZiAob2JqZWN0LnBhcmFtQ29uZmlnLkRFQlVHX0ZMQUcpIGNvbnNvbGUubG9nKCdlbnRlclF1ZXJ5IDogb2JqZWN0LmlzU2VhcmNoOicgKyBvYmplY3QuaXNTZWFyY2gpO1xyXG4gICAgICAgIG9iamVjdC5jbGVhckNvbXBsZXRlZE91dHB1dC5lbWl0KG9iamVjdC5mb3JtSW5pdGlhbFZhbHVlcyk7XHJcbiAgICAgICAgXHJcbiAgICAvLyBvYmplY3QuaW1nX2dhbGxlcnkgPSBbXTtcclxuICAgIC8vIG9iamVjdC5pbWdfYXJyID0gW107XHJcbiAgICBvYmplY3QuZm9ybS5yZXNldChvYmplY3QuZm9ybUluaXRpYWxWYWx1ZXMsIHsgZW1pdEV2ZW50OiBvYmplY3QuZW1pdEV2ZW50ICE9IG51bGwgPyBvYmplY3QuZW1pdEV2ZW50IDogdHJ1ZSB9KTtcclxuICAgICAgICBvYmplY3Quc3RhclNlcnZpY2VzLnNldFByaW1hcktleU5hbWVBcnIob2JqZWN0LCBmYWxzZSk7XHJcbiAgICAgICAgdGhpcy5oZWxwTXNnID0gIG9iamVjdC5zdGFyU2VydmljZXMuZ2V0TkxTKFtdLFwiSEVMUF9FTlRFUl9RVUVSWVwiLHRoaXMuZW50ZXJRdWVyeU1zZyk7XHJcblxyXG4gICAgICB9XHJcblxyXG4gIHB1YmxpYyBzZXRQcmltYXJLZXlOYW1lQXJyKG9iamVjdDphbnksIHZhbHVlOmFueSkge1xyXG4gICAgICAgIGlmICh0eXBlb2Ygb2JqZWN0LnByaW1hcktleVJlYWRPbmx5QXJyICE9PSBcInVuZGVmaW5lZFwiKSB7XHJcbiAgICAgICAgICBsZXQga2V5cyA9IE9iamVjdC5rZXlzKG9iamVjdC5wcmltYXJLZXlSZWFkT25seUFycik7XHJcbiAgICAgIGZvciAobGV0IGsgPSAwOyBrIDwga2V5cy5sZW5ndGg7IGsrKykge1xyXG4gICAgICAgICAgICAgIGlmIChvYmplY3QucGFyYW1Db25maWcuREVCVUdfRkxBRykgY29uc29sZS5sb2coXCJba2V5c1trXTpcIiwga2V5c1trXSwgXCIgdmFsdWU6XCIsIHZhbHVlKTtcclxuICAgICAgICAgICAgICBvYmplY3QucHJpbWFyS2V5UmVhZE9ubHlBcnJba2V5c1trXV0gPSB2YWx1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuXHJcbiAgcHVibGljIGVudGVyUXVlcnlfZm9ybShmb3JtOiBhbnksIG9iamVjdDphbnkpOiB2b2lkIHtcclxuICAgICAgICBpZiAodGhpcy5wYXJhbUNvbmZpZy5ERUJVR19GTEFHKSBjb25zb2xlLmxvZyhcInRlc3Q6ZGlydHk6XCIsIG9iamVjdC5mb3JtLmRpcnR5KTtcclxuICAgIGlmIChvYmplY3QuZm9ybS5kaXJ0eSA9PSB0cnVlKSB7XHJcbiAgICAgICAgICBsZXQgZGlhbG9nU3RydWMgPSB7XHJcbiAgICAgICAgICAgIG1zZzogdGhpcy5zYXZlQ2hhbmdlc01zZyxcclxuICAgICAgICB0aXRsZTogdGhpcy5wbGVhc2VDb25maXJtTXNnLFxyXG4gICAgICAgICAgICBpbmZvOiBmb3JtLFxyXG4gICAgICAgIG9iamVjdDogb2JqZWN0LFxyXG4gICAgICAgIGFjdGlvbjogdGhpcy5ZZXNOb0FjdGlvbnMsXHJcbiAgICAgICAgY2FsbGJhY2s6IHRoaXMuZW50ZXJRdWVyeUFjdF9mb3JtXHJcbiAgICAgIH07XHJcbiAgICAgICAgICAgIHRoaXMuc2hvd0NvbmZpcm1hdGlvbihkaWFsb2dTdHJ1Yyk7XHJcbiAgICAgICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgIHRoaXMuZW50ZXJRdWVyeUFjdF9mb3JtKGZvcm0sIG9iamVjdCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG5cclxuICBwdWJsaWMgb25DYW5jZWxfZm9ybShlOmFueSwgb2JqZWN0OmFueSk6IHZvaWQge1xyXG4gICAgLy9vYmplY3QuaW1nX2dhbGxlcnkgPSBbXTtcclxuICAgLy8gb2JqZWN0LmltZ19hcnIgPSBbXTtcclxuICAgIG9iamVjdC5mb3JtLnJlc2V0KG9iamVjdC5mb3JtSW5pdGlhbFZhbHVlcywgeyBlbWl0RXZlbnQ6IG9iamVjdC5lbWl0RXZlbnQgIT0gbnVsbCA/IG9iamVjdC5lbWl0RXZlbnQgOiB0cnVlIH0pO1xyXG4gICAgICAgIG9iamVjdC5pc1NlYXJjaCA9IGZhbHNlO1xyXG4gICAgICAgIG9iamVjdC5pc05ldyA9IHRydWU7XHJcbiAgICAgICAgb2JqZWN0LmNsZWFyQ29tcGxldGVkT3V0cHV0LmVtaXQob2JqZWN0LmZvcm1Jbml0aWFsVmFsdWVzKTtcclxuICAgIG9iamVjdC5leGVjdXRlUXVlcnlyZXN1bHQgPSBbXTtcclxuICAgIG9iamVjdC5leGVjdXRlUXVlcnlyZXN1bHQucmVzdWx0ID0gMDtcclxuICAgICAgICBvYmplY3QubXlGaWxlcz1bXTtcclxuICAgICAgICBvYmplY3QuQ3VycmVudFJlYyA9IDA7XHJcbiAgICAgICAgb2JqZWN0LkZPUk1fVFJJR0dFUl9GQUlMVVJFID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5oZWxwTXNnID0gXCJcIjtcclxuICAgICAgICBcclxuICAgIH1cclxuICBwdWJsaWMgc2hvd09rTXNnKG9iamVjdDphbnksIG1zZzphbnksIHNldmVyaXR5OmFueSkge1xyXG4gICAgICBsZXQgZGlhbG9nU3RydWMgPSB7XHJcbiAgICAgICAgbXNnOiBtc2csXHJcbiAgICAgIHRpdGxlOiBzZXZlcml0eSxcclxuICAgICAgICBpbmZvOiBudWxsLFxyXG4gICAgICBvYmplY3Q6IG9iamVjdCxcclxuICAgICAgYWN0aW9uOiB0aGlzLk9rQWN0aW9ucyxcclxuICAgICAgY2FsbGJhY2s6IG51bGxcclxuICAgIH07XHJcbiAgICAgICAgdGhpcy5zaG93Q29uZmlybWF0aW9uKGRpYWxvZ1N0cnVjKTtcclxuICAgIH1cclxuICBwdWJsaWMgb25SZW1vdmVfZm9ybShmb3JtOmFueSwgb2JqZWN0OmFueSk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMucGFyYW1Db25maWcuREVCVUdfRkxBRykgY29uc29sZS5sb2coXCJvYmplY3QuaXNOZXc6XCIsIG9iamVjdC5pc05ldylcclxuICAgIGlmIChvYmplY3QuaXNOZXcgPT0gdHJ1ZSkge1xyXG4gICAgICAgICAgdGhpcy5vbkNhbmNlbF9mb3JtKG51bGwsIG9iamVjdClcclxuICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh0aGlzLnBhcmFtQ29uZmlnLkRFQlVHX0ZMQUcpIGNvbnNvbGUubG9nKFwib2JqZWN0LmV4ZWN1dGVRdWVyeXJlc3VsdDpcIik7XHJcbiAgICAgICAgaWYgKHRoaXMucGFyYW1Db25maWcuREVCVUdfRkxBRykgY29uc29sZS5sb2cob2JqZWN0LmV4ZWN1dGVRdWVyeXJlc3VsdCk7XHJcbiAgICBpZiAoKHR5cGVvZiBvYmplY3QuZXhlY3V0ZVF1ZXJ5cmVzdWx0ICE9PSBcInVuZGVmaW5lZFwiKSAmJiAob2JqZWN0LmV4ZWN1dGVRdWVyeXJlc3VsdC50b3RhbCA9PSAwKSkge1xyXG4gICAgICB0aGlzLnNob3dPa01zZyhvYmplY3QsIHRoaXMubm90aGluZ1RvRGVsZXRlbE1zZywgXCJXYXJuaW5nXCIpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgaWYgKHRoaXMucGFyYW1Db25maWcuREVCVUdfRkxBRykgY29uc29sZS5sb2coJ29uUmVtb3ZlIDogaXNDaGlsZCAnICsgb2JqZWN0LmlzQ2hpbGQgKyBcIiBvYmplY3QuaXNNYXN0ZXI6XCIgKyBvYmplY3QuaXNNYXN0ZXIpO1xyXG4gICAgbGV0IE5ld1ZhbCA9IGZvcm0uZ2V0UmF3VmFsdWUoKTtcclxuICAgICAgICBpZiAodGhpcy5wYXJhbUNvbmZpZy5ERUJVR19GTEFHKSBjb25zb2xlLmxvZyhOZXdWYWwpO1xyXG4gICAgICAgIGlmICh0aGlzLnBhcmFtQ29uZmlnLkRFQlVHX0ZMQUcpIGNvbnNvbGUubG9nKFwib2JqZWN0LmV4ZWN1dGVRdWVyeXJlc3VsdDpcIiArIG9iamVjdC5leGVjdXRlUXVlcnlyZXN1bHQpXHJcbiAgICBpZiAob2JqZWN0LmlzQ2hpbGQgPT0gZmFsc2UpIHtcclxuICAgICAgICAgIHZhciBwYXJhbUNvbmZpZyA9IGdldFBhcmFtQ29uZmlnKCk7XHJcbiAgICAgICAgICBpZiAodGhpcy5wYXJhbUNvbmZpZy5ERUJVR19GTEFHKSBjb25zb2xlLmxvZyhwYXJhbUNvbmZpZyk7XHJcbiAgICAgICAgICBpZiAodGhpcy5wYXJhbUNvbmZpZy5ERUJVR19GTEFHKSBjb25zb2xlLmxvZyhcInBhcmFtQ29uZmlnLmNoaWxkUmVjb3JkczpcIiArIHBhcmFtQ29uZmlnLmNoaWxkUmVjb3JkcylcclxuICAgICAgaWYgKHR5cGVvZiBwYXJhbUNvbmZpZy5jaGlsZFJlY29yZHMgPT09IFwidW5kZWZpbmVkXCIpIHtcclxuICAgICAgICAgICAgcGFyYW1Db25maWcuY2hpbGRSZWNvcmRzID0gMDtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgIGlmICgocGFyYW1Db25maWcuY2hpbGRSZWNvcmRzICE9IDApICYmIChvYmplY3QuaXNNYXN0ZXIgPT0gdHJ1ZSkpIHtcclxuICAgICAgICAgICAgbGV0IGRpYWxvZ1N0cnVjID0ge1xyXG4gICAgICAgICAgICAgIG1zZzogdGhpcy5kZWxldGVEZXRhaWxNc2csXHJcbiAgICAgICAgICB0aXRsZTogXCJXYXJuaW5nXCIsXHJcbiAgICAgICAgICAgICAgaW5mbzogbnVsbCxcclxuICAgICAgICAgIG9iamVjdDogb2JqZWN0LFxyXG4gICAgICAgICAgYWN0aW9uOiB0aGlzLk9rQWN0aW9ucyxcclxuICAgICAgICAgIGNhbGxiYWNrOiBudWxsXHJcbiAgICAgICAgfTtcclxuICAgICAgICAgICAgICB0aGlzLnNob3dDb25maXJtYXRpb24oZGlhbG9nU3RydWMpO1xyXG4gICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5wYXJhbUNvbmZpZy5ERUJVR19GTEFHKSBjb25zb2xlLmxvZyhwYXJhbUNvbmZpZyk7XHJcblxyXG4gICAgICAgIGxldCBkaWFsb2dTdHJ1YyA9IHtcclxuICAgICAgICAgIG1zZzogdGhpcy5kZWxldGVDb25maXJtTXNnLFxyXG4gICAgICB0aXRsZTogdGhpcy5wbGVhc2VDb25maXJtTXNnLFxyXG4gICAgICAgICAgaW5mbzogZm9ybSxcclxuICAgICAgb2JqZWN0OiBvYmplY3QsXHJcbiAgICAgIGFjdGlvbjogdGhpcy5ZZXNOb0FjdGlvbnMsXHJcbiAgICAgIGNhbGxiYWNrOiB0aGlzLlJlbW92ZV9mb3JtQWN0XHJcbiAgICB9O1xyXG4gICAgICAgICAgdGhpcy5zaG93Q29uZmlybWF0aW9uKGRpYWxvZ1N0cnVjKTtcclxuXHJcblxyXG4gICAgfVxyXG4gIHB1YmxpYyBSZW1vdmVfZm9ybUFjdChmb3JtOmFueSwgb2JqZWN0OmFueSkge1xyXG4gICAgICBpZiAob2JqZWN0LnBhcmFtQ29uZmlnLkRFQlVHX0ZMQUcpIGNvbnNvbGUubG9nKFwiaW4gUmVtb3ZlX2Zvcm1BY3RcIik7XHJcbiAgICBsZXQgTmV3VmFsOmFueSA9e307XHJcbiAgICBOZXdWYWwgPSBmb3JtLmdldFJhd1ZhbHVlKCk7XHJcbiAgICAgIGlmIChvYmplY3QucGFyYW1Db25maWcuREVCVUdfRkxBRykgY29uc29sZS5sb2coTmV3VmFsKTtcclxuICAgICAgLy9vYmplY3QuZm9ybS5yZXNldChvYmplY3QuZm9ybUluaXRpYWxWYWx1ZXMpO1xyXG4gICAgICBvYmplY3QuYWN0aW9uID0gXCJSRU1PVkVcIjtcclxuXHJcbiAgICAgIE5ld1ZhbFtcIl9RVUVSWVwiXSA9IG9iamVjdC5kZWxldGVDTUQ7XHJcbiAgICAgIG9iamVjdC5zdGFyU2VydmljZXMuZXhlY3N0YXJTZXJ2aWNlc19mb3JtKE5ld1ZhbCwgb2JqZWN0KTtcclxuICAgIH1cclxuXHJcblxyXG4gIHB1YmxpYyBvbk5ld19mb3JtKGU6YW55LCBvYmplY3Q6YW55KTogdm9pZCB7XHJcbiAgICBpZiAob2JqZWN0LnBhcmFtQ29uZmlnLkRFQlVHX0ZMQUcpIGNvbnNvbGUubG9nKFwib25OZXc6IG9iamVjdC5tYXN0ZXJLZXk6XCIgLCBvYmplY3QubWFzdGVyS2V5LHsuLi5vYmplY3QuZm9ybS52YWx1ZX0pO1xyXG4gICAgICAgIG9iamVjdC5teUZpbGVzPVtdO1xyXG4gICAgLy8gb2JqZWN0LmltZ19nYWxsZXJ5ID0gW107XHJcbiAgICAvLyBvYmplY3QuaW1nX2FyciA9IFtdO1xyXG4gICAgb2JqZWN0LmZvcm0ucmVzZXQob2JqZWN0LmZvcm1Jbml0aWFsVmFsdWVzLCB7IGVtaXRFdmVudDogb2JqZWN0LmVtaXRFdmVudCAhPSBudWxsID8gb2JqZWN0LmVtaXRFdmVudCA6IHRydWUgfSk7XHJcbiAgICBjb25zb2xlLmxvZyhcImNoZWNraW5nOlwiLCBvYmplY3QuZm9ybUluaXRpYWxWYWx1ZXMsb2JqZWN0LmZvcm0udmFsdWUgKVxyXG4gICAgICAgIG9iamVjdC5jbGVhckNvbXBsZXRlZE91dHB1dC5lbWl0KG9iamVjdC5mb3JtSW5pdGlhbFZhbHVlcyk7XHJcbiAgICAgICAgb2JqZWN0LmlzU2VhcmNoID0gZmFsc2U7XHJcbiAgICAgICAgb2JqZWN0LmlzTmV3ID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLnNldFByaW1hcktleU5hbWVBcnIob2JqZWN0LCBmYWxzZSk7XHJcbiAgICB9XHJcbiAgICAvKioqKioqKioqKioqKioqKioqKiBHcmlkIGZ1bmN0aW9ucyAgKioqKioqKiovXHJcbiAgcHVibGljIGFkZEhhbmRsZXJfZ3JpZChvYmplY3Q6YW55KTogdm9pZCB7XHJcbiAgICAgIGlmICh0eXBlb2Ygb2JqZWN0Lm1hc3RlcktleU5hbWVBcnIgIT0gXCJ1bmRlZmluZWRcIikge1xyXG4gICAgICAgIGlmIChvYmplY3QuaXNDaGlsZCA9PSB0cnVlKSB7XHJcbiAgICAgICAgICBpZiAob2JqZWN0Lm1hc3RlcktleUFyclswXSA9PSBcIlwiKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2hvd09rTXNnKHRoaXMsIHRoaXMuc2F2ZU1hc3Rlck1zZywgXCJFcnJvclwiKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgIGlmIChvYmplY3QuaXNDaGlsZCA9PSB0cnVlKSB7XHJcbiAgICAgICAgICAgIGlmIChvYmplY3QubWFzdGVyS2V5ID09IFwiXCIpIHtcclxuICAgICAgICAgICAgICB0aGlzLnNob3dPa01zZyh0aGlzLCB0aGlzLnNhdmVNYXN0ZXJNc2csIFwiRXJyb3JcIik7XHJcbiAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgXHJcbiAgICAgIGlmIChvYmplY3QucGFyYW1Db25maWcuREVCVUdfRkxBRykgY29uc29sZS5sb2coXCJ0ZXN0NDE6b2JqZWN0LmdyaWRJbml0aWFsVmFsdWVzOlwiLCBcclxuICAgICAgICBvYmplY3QuZ3JpZEluaXRpYWxWYWx1ZXMsIG9iamVjdC5tYXN0ZXJLZXlOYW1lQXJyLCBvYmplY3QubWFzdGVyS2V5QXJyLCBcImVkaXRlZFJvd0luZGV4OlwiLCBvYmplY3QuZWRpdGVkUm93SW5kZXgsIFwiaXNDaGlsZDpcIiwgb2JqZWN0LmlzQ2hpbGQpO1xyXG4gICAgICBvYmplY3Quc2F2ZUN1cnJlbnQoKTtcclxuICAgICAgdGhpcy5zZXRQcmltYXJLZXlOYW1lQXJyKG9iamVjdCwgZmFsc2UpO1xyXG4gICAgICAvKiBvYmplY3QuZ3JpZEluaXRpYWxWYWx1ZXMuTU9EVUxFID0gb2JqZWN0Lm1hc3RlcktleTsqL1xyXG4gICAgICBpZiAoICh0eXBlb2Ygb2JqZWN0Lm1hc3RlcktleU5hbWVBcnIgIT0gXCJ1bmRlZmluZWRcIikgJiYgKG9iamVjdC5tYXN0ZXJLZXlOYW1lQXJyLmxlbmd0aCAhPSAwKSApXHJcbiAgICAgIHtcclxuICAgICAgICB0aGlzLnNldFByaW1hcktleU5hbWVBcnIob2JqZWN0LCBmYWxzZSk7XHJcbiAgICAgICAgaWYob2JqZWN0LmlzQ2hpbGQgPT0gdHJ1ZSl7XHJcbiAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaTwgb2JqZWN0Lm1hc3RlcktleU5hbWVBcnIubGVuZ3RoOyBpKyspe1xyXG4gICAgICAgICAgICBsZXQgcmVhZE9ubHkgPSBcImlzXCIrb2JqZWN0Lm1hc3RlcktleU5hbWVBcnJbaV0gKyBcInJlYWRPbmx5XCI7XHJcbiAgICAgICAgICAgIGlmIChvYmplY3QucHJpbWFyS2V5UmVhZE9ubHlBcnIpe1xyXG4gICAgICAgICAgICAgIG9iamVjdC5wcmltYXJLZXlSZWFkT25seUFycltyZWFkT25seV0gPSB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGxldCBleGlzdHMgPSBvYmplY3QuZ3JpZEluaXRpYWxWYWx1ZXNbb2JqZWN0Lm1hc3RlcktleU5hbWVBcnJbaV1dXHJcbiAgICAgICAgICAgIGlmIChvYmplY3QucGFyYW1Db25maWcuREVCVUdfRkxBRykgY29uc29sZS5sb2coXCJ0ZXN0NDI6b2JqZWN0LmdyaWRJbml0aWFsVmFsdWVzOmV4aXN0czpcIixleGlzdHMsIG9iamVjdC5ncmlkSW5pdGlhbFZhbHVlcyk7XHJcbiAgICAgICAgICAgICAgaWYgKCBleGlzdHMgIT0gZmFsc2Upe1xyXG4gICAgICAgICAgICAgIG9iamVjdC5ncmlkSW5pdGlhbFZhbHVlc1tvYmplY3QubWFzdGVyS2V5TmFtZUFycltpXV0gPSBvYmplY3QubWFzdGVyS2V5QXJyW2ldO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKG9iamVjdC5wYXJhbUNvbmZpZy5ERUJVR19GTEFHKSBjb25zb2xlLmxvZyhcInRlc3Q0MjpvYmplY3QuZ3JpZEluaXRpYWxWYWx1ZXM6MTpcIiwgb2JqZWN0LmdyaWRJbml0aWFsVmFsdWVzKTtcclxuICAgICAgfVxyXG4gICAgICBlbHNlXHJcbiAgICAgIHtcclxuICAgICAgICBpZiAob2JqZWN0LnBhcmFtQ29uZmlnLkRFQlVHX0ZMQUcpIGNvbnNvbGUubG9nKFwidGVzdDQ6b2JqZWN0Lm1hc3RlcktleU5hbWU6XCIsIG9iamVjdC5tYXN0ZXJLZXlOYW1lLCBvYmplY3QubWFzdGVyS2V5KTtcclxuICAgICAgICBpZiAob2JqZWN0Lm1hc3RlcktleU5hbWUgIT0gXCJcIiAmJiAgb2JqZWN0Lm1hc3RlcktleSAhPSBcIlwiKXtcclxuICAgICAgICAgIG9iamVjdC5ncmlkSW5pdGlhbFZhbHVlc1tvYmplY3QubWFzdGVyS2V5TmFtZV0gPSBvYmplY3QubWFzdGVyS2V5O1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAob2JqZWN0LnBhcmFtQ29uZmlnLkRFQlVHX0ZMQUcpIGNvbnNvbGUubG9nKFwidGVzdDQyOm9iamVjdC5ncmlkSW5pdGlhbFZhbHVlczoyOlwiLCBvYmplY3QuZ3JpZEluaXRpYWxWYWx1ZXMpO1xyXG4gICAgICB9XHJcbiAgICAgIGlmIChvYmplY3QucGFyYW1Db25maWcuREVCVUdfRkxBRykgY29uc29sZS5sb2coXCJ0ZXN0NDI6b2JqZWN0LmdyaWRJbml0aWFsVmFsdWVzOlwiLCBvYmplY3QuZ3JpZEluaXRpYWxWYWx1ZXMpO1xyXG4gICAgICBvYmplY3QuY2xvc2VFZGl0b3IoKTtcclxuICAgICAgb2JqZWN0LmZvcm1Hcm91cCA9IG9iamVjdC5jcmVhdGVGb3JtR3JvdXBHcmlkKFxyXG4gICAgICAgIG9iamVjdC5ncmlkSW5pdGlhbFZhbHVlc1xyXG4gICAgICApO1xyXG4gICAgICBvYmplY3QuZm9ybUdyb3VwLnNldEVycm9ycyh7XHJcbiAgICAgICAgbm90VW5pcXVlOiB0cnVlXHJcbiAgICAgIH0pO1xyXG4gICAgICBpZiAob2JqZWN0LnBhcmFtQ29uZmlnLkRFQlVHX0ZMQUcpIGNvbnNvbGUubG9nKFwib2JqZWN0LmZvcm1Hcm91cDpcIiwgb2JqZWN0LmZvcm1Hcm91cClcclxuICAgICAgb2JqZWN0LmlzTmV3ID0gdHJ1ZTtcclxuICAgICAgb2JqZWN0LmdyaWQuYWRkUm93KG9iamVjdC5mb3JtR3JvdXApO1xyXG4gICAgICAvL3RoaXMuc2V0UHJpbWFyS2V5TmFtZUFycihvYmplY3QsIGZhbHNlKTtcclxuICAgICAgfVxyXG4gIFxyXG4gICAgcHVibGljIHJlbW92ZUhhbmRsZXJfZ3JpZChzZW5kZXI6YW55LCBvYmplY3Q6YW55KSB7XHJcbiAgICAgIC8vc2VuZGVyLmNhbmNlbENlbGwoKTtcclxuICAgICAgbGV0IHBhcmFtQ29uZmlnID0gZ2V0UGFyYW1Db25maWcoKTtcclxuICAgIGlmIChvYmplY3QucGFyYW1Db25maWcuREVCVUdfRkxBRykgY29uc29sZS5sb2coXCJyZW1vdmVIYW5kbGVyX2dyaWQgcGFyYW1Db25maWc6b2JqZWN0LmlzTWFzdGVyIFwiICsgb2JqZWN0LmlzTWFzdGVyKTtcclxuICAgICAgaWYgKG9iamVjdC5wYXJhbUNvbmZpZy5ERUJVR19GTEFHKSBjb25zb2xlLmxvZyhwYXJhbUNvbmZpZyk7XHJcbiAgICBpZiAoKHBhcmFtQ29uZmlnLmNoaWxkUmVjb3JkcyAhPSAwKSAmJiAob2JqZWN0LmlzTWFzdGVyID09IHRydWUpKSB7XHJcbiAgICAgICAgbGV0IGRpYWxvZ1N0cnVjID0ge1xyXG4gICAgICAgICAgbXNnOiB0aGlzLmRlbGV0ZURldGFpbE1zZyxcclxuICAgICAgICB0aXRsZTogXCJXYXJuaW5nXCIsXHJcbiAgICAgICAgICBpbmZvOiBudWxsLFxyXG4gICAgICAgIG9iamVjdDogb2JqZWN0LFxyXG4gICAgICAgIGFjdGlvbjogdGhpcy5Pa0FjdGlvbnMsXHJcbiAgICAgICAgY2FsbGJhY2s6IG51bGxcclxuICAgICAgfTtcclxuICAgICAgICAgIHRoaXMuc2hvd0NvbmZpcm1hdGlvbihkaWFsb2dTdHJ1Yyk7XHJcbiAgICAgICAgICByZXR1cm47XHJcbiAgICAgIH1cclxuICAgIGlmIChvYmplY3QucGFyYW1Db25maWcuREVCVUdfRkxBRykgY29uc29sZS5sb2coXCJvYmplY3QuZWRpdGVkUm93SW5kZXggOlwiLCBvYmplY3QuZWRpdGVkUm93SW5kZXgsIG9iamVjdC5ncmlkLmRhdGEuZGF0YSlcclxuICAgIGlmICh0eXBlb2Ygb2JqZWN0LmVkaXRlZFJvd0luZGV4ICE9PSBcInVuZGVmaW5lZFwiKSB7XHJcbiAgICAgIGxldCBOZXdWYWw6YW55ID0ge307XHJcbiAgICAgICAgLy9sZXQgZ3JpZF9kYXRhID0gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShvYmplY3QuZ3JpZC5kYXRhKSk7XHJcbiAgICAgICAgbGV0IGdyaWRfZGF0YSA9IG9iamVjdC5ncmlkLmRhdGE7XHJcbiAgICAgICAgaWYgKG9iamVjdC5wYXJhbUNvbmZpZy5ERUJVR19GTEFHKSBjb25zb2xlLmxvZyhcIm9iamVjdC5lZGl0ZWRSb3dJbmRleCA6XCIsIGdyaWRfZGF0YSlcclxuXHJcbiAgICAgIE5ld1ZhbCA9IGdyaWRfZGF0YS5kYXRhW29iamVjdC5lZGl0ZWRSb3dJbmRleF07XHJcbiAgICAgICAgbGV0IGN1ckNNRCA9IE5ld1ZhbFtcIl9RVUVSWVwiXTtcclxuICAgICAgICBpZiAob2JqZWN0LnBhcmFtQ29uZmlnLkRFQlVHX0ZMQUcpIGNvbnNvbGUubG9nKFwiY2hlY2s6TmV3VmFsOl9RVUVSWVwiLCBOZXdWYWxbXCJfUVVFUllcIl0pXHJcbiAgICAgIGxldCByZXN1bHQxID0gb2JqZWN0LnN0YXJTZXJ2aWNlcy5yZW1vdmVSZWMob2JqZWN0LmdyaWQuZGF0YSwgb2JqZWN0LmVkaXRlZFJvd0luZGV4KTtcclxuICAgICAgICBvYmplY3QuZ3JpZC5kYXRhID0gcmVzdWx0MTtcclxuICAgICAgICBpZiAob2JqZWN0LnBhcmFtQ29uZmlnLkRFQlVHX0ZMQUcpIGNvbnNvbGUubG9nKFwiY2hlY2s6TmV3VmFsOlwiLCBOZXdWYWwpXHJcblxyXG4gICAgICAgIE5ld1ZhbFtcIl9RVUVSWVwiXSA9IG9iamVjdC5kZWxldGVDTUQ7XHJcbiAgICAgIGlmIChjdXJDTUQgIT0gb2JqZWN0Lmluc2VydENNRCkge1xyXG4gICAgICAgICAgb2JqZWN0LmFkZFRvQm9keShOZXdWYWwpO1xyXG4gICAgICAgICAgb2JqZWN0LnJlbW92ZWRSZWMucHVzaChOZXdWYWwpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgIH1cclxuICAgICAgZWxzZVxyXG4gICAgICAgIG9iamVjdC5jYW5jZWxIYW5kbGVyKCk7XHJcblxyXG5cclxuICAgIH1cclxuICAgIHB1YmxpYyBzYXZlQ3VycmVudF9ncmlkKG9iamVjdDphbnkpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLnBhcmFtQ29uZmlnLkRFQlVHX0ZMQUcpIGNvbnNvbGUubG9nKFwic2F2ZUN1cnJlbnRfZ3JpZDpvYmplY3QuZm9ybUdyb3VwOlwiLCBvYmplY3QuZm9ybUdyb3VwKTtcclxuXHJcblxyXG4gICAgaWYgKG9iamVjdC5mb3JtR3JvdXApIHtcclxuICAgICAgaWYgKHRoaXMucGFyYW1Db25maWcuREVCVUdfRkxBRykgY29uc29sZS5sb2coXCJzYXZlQ3VycmVudF9ncmlkOm9iamVjdC5mb3JtR3JvdXA6XCIsIG9iamVjdC5mb3JtR3JvdXApO1xyXG4gICAgICBsZXQgTmV3VmFsOmFueSA9IHt9O1xyXG4gICAgICAgICAgTmV3VmFsID0gT2JqZWN0LmFzc2lnbih7fSwgb2JqZWN0LmZvcm1Hcm91cC52YWx1ZSk7XHJcbiAgICAgIGlmICh0aGlzLnBhcmFtQ29uZmlnLkRFQlVHX0ZMQUcpIGNvbnNvbGUubG9nKCdjaGVjazpkaXJ0eSA6Jywgb2JqZWN0LmZvcm1Hcm91cC5kaXJ0eSwgXCIgaXNOZXc6XCIsIG9iamVjdC5pc05ldywgXCIgTmV3VmFsOiBcIiwgTmV3VmFsKTtcclxuICAgICAgaWYgKG9iamVjdC5mb3JtR3JvdXAuZGlydHkgPT09IHRydWUpIHtcclxuICAgICAgICBpZiAob2JqZWN0LmlzTmV3ID09IHRydWUpIHtcclxuICAgICAgICAgIGlmICh0aGlzLnBhcmFtQ29uZmlnLkRFQlVHX0ZMQUcpIGNvbnNvbGUubG9nKFwiaGVyZTEgTmV3VmFsXCIsIE5ld1ZhbCk7XHJcbiAgICAgICAgICAgICAgIC8vbGV0IHJlc3VsdCA9IG9iamVjdC5zdGFyU2VydmljZXMuYWRkUmVjKG9iamVjdC5ncmlkLmRhdGEsIE5ld1ZhbCkgO1xyXG4gICAgICAgICAgICAgLy8gb2JqZWN0LmdyaWQuZGF0YSA9IHJlc3VsdDtcclxuICAgICAgICAgICAgICBpZiAodGhpcy5wYXJhbUNvbmZpZy5ERUJVR19GTEFHKSBjb25zb2xlLmxvZyhvYmplY3QuZ3JpZC5kYXRhKTtcclxuXHJcbiAgICAgICAgICAgICAgaWYgKG9iamVjdC5ncmlkLmRhdGEgPT0gbnVsbCB8fCB0eXBlb2Ygb2JqZWN0LmdyaWQuZGF0YS5kYXRhID09IFwidW5kZWZpbmVkXCIpXHJcbiAgICAgICAgICAgIG9iamVjdC5ncmlkLmRhdGEgPSB7IGRhdGE6IFtdLCB0b3RhbDogMCB9O1xyXG4gICAgICAgICAgICAgIC8vb2JqZWN0LmdyaWQuZGF0YS5kYXRhLnB1c2goTmV3VmFsKTtcclxuICAgICAgICAgIG9iamVjdC5ncmlkLmRhdGEuZGF0YS5zcGxpY2UoMCwgMCwgTmV3VmFsKTtcclxuICAgICAgICAgICAgICBOZXdWYWxbXCJfUVVFUllcIl0gPSBvYmplY3QuaW5zZXJ0Q01EO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcblxyXG4gICAgICAgICAgaWYgKHRoaXMucGFyYW1Db25maWcuREVCVUdfRkxBRykgY29uc29sZS5sb2coJ2NoZWNrOm9iamVjdC5ncmlkLmRhdGE6Jywgb2JqZWN0LmdyaWQuZGF0YSwgXCIgTmV3VmFsOlwiLCBOZXdWYWwpO1xyXG4gICAgICAgICAgICAgIC8vTmV3VmFsID0gdGhpcy5wYXJzZVRvRGF0ZShOZXdWYWwpO1xyXG4gICAgICAgICAgaWYgKG9iamVjdC5ncmlkLmRhdGEuZGF0YVtvYmplY3QuZWRpdGVkUm93SW5kZXhdLl9RVUVSWSA9PSBvYmplY3QuaW5zZXJ0Q01EKSB7XHJcbiAgICAgICAgICAgICAgICBOZXdWYWxbXCJfUVVFUllcIl0gPSBvYmplY3QuaW5zZXJ0Q01EO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgTmV3VmFsW1wiX1FVRVJZXCJdID0gb2JqZWN0LnVwZGF0ZUNNRDtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgb2JqZWN0LmdyaWQuZGF0YS5kYXRhW29iamVjdC5lZGl0ZWRSb3dJbmRleF0gPSBOZXdWYWw7XHJcbiAgICAgICAgICAgICAgLy9sZXQgcmVzdWx0MSA9IG9iamVjdC5zdGFyU2VydmljZXMudXBkYXRlUmVjKG9iamVjdC5ncmlkLmRhdGEgLCBvYmplY3QuZWRpdGVkUm93SW5kZXgsIE5ld1ZhbCApO1xyXG4gICAgICAgICAgICAgIC8vb2JqZWN0LmdyaWQuZGF0YSA9IHJlc3VsdDE7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLy9vYmplY3QuYWRkVG9Cb2R5KE5ld1ZhbCk7IC8vIGFkZFRvQm9keSB3aWxsIGJlIGRvbmUgYXQgc2F2ZUNoYW5nZXNfZ3JpZCB0byBhdm9pZCBkdXBsaWN0ZSB1cGRhdGUgc2luY2Ugb2JqZWN0LmdyaWQuZGF0YS5kYXRhIGlzIGdldHRpbmcgdXBkYXRlZFxyXG4gICAgICAgIGlmICh0aGlzLnBhcmFtQ29uZmlnLkRFQlVHX0ZMQUcpIGNvbnNvbGUubG9nKG9iamVjdC5ncmlkLmRhdGEpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgaWYgKHRoaXMucGFyYW1Db25maWcuREVCVUdfRkxBRykgY29uc29sZS5sb2coXCJwcmUgY2xvc2VcIilcclxuICAgICAgICAgIG9iamVjdC5jbG9zZUVkaXRvcigpO1xyXG4gICAgICAgICAgaWYgKHRoaXMucGFyYW1Db25maWcuREVCVUdfRkxBRykgY29uc29sZS5sb2coXCJwb3N0IGNsb3NlXCIpXHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHB1YmxpYyBjbG9zZUVkaXRvcl9ncmlkKG9iamVjdCk6IHZvaWQge1xyXG4gICAgLy9jb25zb2xlLmxvZyhcIm9iamVjdC5mb3JtR3JvdXA6Y2xvc2VFZGl0b3JfZ3JpZFwiKVxyXG4gICAgICBvYmplY3QuZ3JpZC5jbG9zZVJvdyhvYmplY3QuZWRpdGVkUm93SW5kZXgpO1xyXG4gICAgICBvYmplY3QuaXNOZXcgPSBmYWxzZTtcclxuICAgICAgb2JqZWN0LmVkaXRlZFJvd0luZGV4ID0gdW5kZWZpbmVkO1xyXG4gICAgICBvYmplY3QuZm9ybUdyb3VwID0gdW5kZWZpbmVkO1xyXG5cclxuICAgIC8vIGdyaWQuY2FuY2VsO1xyXG4gICAgLy8gb2JqZWN0LmdyaWQuZGF0YSA9IG51bGw7XHJcbiAgICAvLyBvYmplY3QuY2xlYXJDb21wbGV0ZWRPdXRwdXQuZW1pdChvYmplY3QuZm9ybUluaXRpYWxWYWx1ZXMpO1xyXG4gICAgfVxyXG4gIHB1YmxpYyBjYW5jZWxIYW5kbGVyX2dyaWQob2JqZWN0OmFueSk6IHZvaWQge1xyXG4gICAgICBvYmplY3QuY2xvc2VFZGl0b3IoKTtcclxuICAgICAgb2JqZWN0LmlzU2VhcmNoID0gZmFsc2U7XHJcbiAgICAgIHRoaXMuaGVscE1zZ19ncmlkID0gXCJcIjtcclxuICAgIH1cclxuICBwdWJsaWMgc2F2ZUNoYW5nZXNfZ3JpZF9pblRyYW5zKGdyaWQ6YW55LCBvYmplY3Q6YW55LCBOZXdWYWw6YW55KSB7XHJcbiAgICAgIHRoaXMuY29tbWl0Qm9keS5wdXNoKE5ld1ZhbCk7XHJcbiAgICBpZiAob2JqZWN0LmlzQ2hpbGQgPT0gdHJ1ZSkge1xyXG4gICAgICAgIGxldCBncmlkUmVjb3JkcyA9IG9iamVjdC5ncmlkLmRhdGEuZGF0YS5sZW5ndGg7XHJcbiAgICAgICAgbGV0IHBhcmFtQ29uZmlnID0ge1xyXG4gICAgICAgICAgXCJOYW1lXCI6IFwiY2hpbGRSZWNvcmRzXCIsXHJcbiAgICAgICAgICBcIlZhbFwiOiBncmlkUmVjb3Jkc1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgc2V0UGFyYW1Db25maWcocGFyYW1Db25maWcpO1xyXG4gICAgICB9XHJcbiAgICAgIFxyXG4gICAgaWYgKHR5cGVvZiBvYmplY3QuY2FsbEJhY2tQb3N0X1NhdmUgIT09IFwidW5kZWZpbmVkXCIpIHtcclxuICAgICAgbGV0IE5ld1ZhbDE6YW55ID0gW107XHJcbiAgICAgICAgICAgIE5ld1ZhbDEucHVzaChOZXdWYWwpO1xyXG4gICAgICAgIG9iamVjdC5jYWxsQmFja1Bvc3RfU2F2ZS5hcHBseShvYmplY3QsIE5ld1ZhbDEpO1xyXG4gICAgICB9XHJcbiAgICAgIHRoaXMuc2V0UHJpbWFyS2V5TmFtZUFycihvYmplY3QsIHRydWUpO1xyXG4gICAgICBvYmplY3Quc2F2ZUNvbXBsZXRlZE91dHB1dC5lbWl0KE5ld1ZhbCk7XHJcbiAgICAvL29iamVjdC5zYXZlQ29tcGxldGVkT3V0cHV0LmVtaXQob2JqZWN0LmdyaWQuZGF0YSk7XHJcbiAgICB9XHJcbiAgcHVibGljIHNhdmVDaGFuZ2VzX2dyaWQoZ3JpZDogYW55LCBvYmplY3Q6YW55KTogdm9pZCB7XHJcbiAgICBpZiAoKG9iamVjdC5ncmlkLmRhdGEgPT0gbnVsbCkgfHwgKHR5cGVvZiBvYmplY3QuZ3JpZC5kYXRhLmRhdGEgPT0gXCJ1bmRlZmluZWRcIikpIHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH1cclxuICAgICAgbGV0IEVycm9yID0gZmFsc2U7XHJcbiAgICBpZiAodGhpcy5wYXJhbUNvbmZpZy5ERUJVR19GTEFHKSBjb25zb2xlLmxvZyhcInByZSBvYmplY3Quc2F2ZUN1cnJlbnRcIik7XHJcbiAgICAgIG9iamVjdC5zYXZlQ3VycmVudCgpO1xyXG5cclxuICAgIGlmIChvYmplY3QuY29tcG9uZW50Q29uZmlnLnJvdXRpbmVBdXRoICE9IG51bGwpIHtcclxuICAgICAgaWYgKHRoaXMucGFyYW1Db25maWcuREVCVUdfRkxBRykgY29uc29sZS5sb2coXCJhdXRoTGV2ZWw6XCIgKyBvYmplY3QuY29tcG9uZW50Q29uZmlnLnJvdXRpbmVBdXRoLmF1dGhMZXZlbCk7XHJcbiAgICAgIGlmIChvYmplY3QuY29tcG9uZW50Q29uZmlnLnJvdXRpbmVBdXRoLmF1dGhMZXZlbCAhPSAyKSB7XHJcbiAgICAgICAgICBsZXQgZGlhbG9nU3RydWMgPSB7XHJcbiAgICAgICAgICAgIG1zZzogdGhpcy5yZWFkT25seU1zZyxcclxuICAgICAgICAgIHRpdGxlOiBcIldhcm5pbmdcIixcclxuICAgICAgICAgICAgaW5mbzogbnVsbCxcclxuICAgICAgICAgIG9iamVjdDogb2JqZWN0LFxyXG4gICAgICAgICAgYWN0aW9uOiB0aGlzLk9rQWN0aW9ucyxcclxuICAgICAgICAgIGNhbGxiYWNrOiBudWxsXHJcbiAgICAgICAgfTtcclxuICAgICAgICAgICAgdGhpcy5zaG93Q29uZmlybWF0aW9uKGRpYWxvZ1N0cnVjKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgbGV0IE5ld1ZhbCA9IFtdO1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBvYmplY3QuZ3JpZC5kYXRhLmRhdGEubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBpZiAodGhpcy5wYXJhbUNvbmZpZy5ERUJVR19GTEFHKSBjb25zb2xlLmxvZyhcImNoZWNrOiBvYmplY3QuZ3JpZC5kYXRhLmRhdGFbaV0uX1FVRVJZOlwiLCBvYmplY3QuZ3JpZC5kYXRhLmRhdGFbaV0uX1FVRVJZKVxyXG4gICAgICBpZiAodHlwZW9mIG9iamVjdC5ncmlkLmRhdGEuZGF0YVtpXS5fUVVFUlkgIT0gXCJ1bmRlZmluZWRcIikge1xyXG4gICAgICAgICAgICBOZXdWYWwgPSBvYmplY3QuZ3JpZC5kYXRhLmRhdGFbaV07XHJcbiAgICAgICAgICBvYmplY3QuYWRkVG9Cb2R5KE5ld1ZhbCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIGlmICh0aGlzLmluVHJhbnMpIHtcclxuICAgICAgICB0aGlzLnNhdmVDaGFuZ2VzX2dyaWRfaW5UcmFucyhncmlkLCBvYmplY3QsIE5ld1ZhbCk7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9XHJcbiAgICAgIGlmICh0aGlzLnBhcmFtQ29uZmlnLkRFQlVHX0ZMQUcpIGNvbnNvbGUubG9nKFwiY2hlY2s6IG9iamVjdC5Cb2R5OlwiLCBvYmplY3QuQm9keSk7XHJcbiAgICBpZiAob2JqZWN0LkJvZHkubGVuZ3RoICE9IDApIHtcclxuICAgICAgbGV0IFBhZ2UgPSBcIiZfdHJhbnM9WVwiO1xyXG4gICAgICB0aGlzLnBvc3Qob2JqZWN0LCBQYWdlLCBvYmplY3QuQm9keSkuc3Vic2NyaWJlKFBhZ2UgPT4ge1xyXG4gICAgICAgIG9iamVjdC5Cb2R5ID0gW107XHJcbiAgICAgICAgLy9vYmplY3Quc2F2ZUNvbXBsZXRlZE91dHB1dC5lbWl0KG9iamVjdC5ncmlkLmRhdGEpO1xyXG4gICAgICAgIG9iamVjdC5zYXZlQ29tcGxldGVkT3V0cHV0LmVtaXQoTmV3VmFsKTtcclxuICAgICAgICBmb3IgKGxldCBpID0gb2JqZWN0LmdyaWQuZGF0YS5kYXRhLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XHJcbiAgICAgICAgICBpZiAodHlwZW9mIG9iamVjdC5ncmlkLmRhdGEuZGF0YVtpXS5fUVVFUlkgIT0gXCJ1bmRlZmluZWRcIikge1xyXG4gICAgICAgICAgICAgIG9iamVjdC5ncmlkLmRhdGEuZGF0YVtpXS5fUVVFUllfRE9ORSA9IG9iamVjdC5ncmlkLmRhdGEuZGF0YVtpXS5fUVVFUlk7XHJcbiAgICAgICAgICAgICAgZGVsZXRlIG9iamVjdC5ncmlkLmRhdGEuZGF0YVtpXS5fUVVFUlk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIGlmICh0aGlzLnBhcmFtQ29uZmlnLkRFQlVHX0ZMQUcpIGNvbnNvbGUubG9nKFwiY2hlY2s6IG9iamVjdC5ncmlkLmRhdGEuZGF0YVtpXS5fUVVFUlk6XCIsIG9iamVjdC5ncmlkLmRhdGEuZGF0YVtpXS5fUVVFUlkpXHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgaWYgKHRoaXMucGFyYW1Db25maWcuREVCVUdfRkxBRykgY29uc29sZS5sb2coXCJvYmplY3QuZ3JpZC5kYXRhLmRhdGE6XCIsIG9iamVjdC5ncmlkLmRhdGEuZGF0YSlcclxuICAgICAgICAgIGlmICh0aGlzLnBhcmFtQ29uZmlnLkRFQlVHX0ZMQUcpIGNvbnNvbGUubG9nKFwib2JqZWN0LmdyaWQuZGF0YS5kYXRhOi5sZW5ndGhcIiwgb2JqZWN0LmdyaWQuZGF0YS5kYXRhLmxlbmd0aClcclxuICAgICAgICBpZiAob2JqZWN0LmlzQ2hpbGQgPT0gdHJ1ZSkge1xyXG4gICAgICAgICAgICBsZXQgZ3JpZFJlY29yZHMgPSBvYmplY3QuZ3JpZC5kYXRhLmRhdGEubGVuZ3RoO1xyXG4gICAgICAgICAgICBsZXQgcGFyYW1Db25maWcgPSB7XHJcbiAgICAgICAgICAgICAgXCJOYW1lXCI6IFwiY2hpbGRSZWNvcmRzXCIsXHJcbiAgICAgICAgICAgICAgXCJWYWxcIjogZ3JpZFJlY29yZHNcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgc2V0UGFyYW1Db25maWcocGFyYW1Db25maWcpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuc2hvd05vdGlmaWNhdGlvbignc3VjY2VzcycsIFwiRGF0YSBzYXZlZCBzdWNjZXNzZnVsbHlcIik7XHJcbiAgICAgICAgaWYgKHR5cGVvZiBvYmplY3QuY2FsbEJhY2tQb3N0X1NhdmUgIT09IFwidW5kZWZpbmVkXCIpIHtcclxuICAgICAgICAgIGxldCBOZXdWYWwxOmFueSA9IFtdO1xyXG4gICAgICAgICAgICAgICAgTmV3VmFsMS5wdXNoKE5ld1ZhbCk7XHJcbiAgICAgICAgICAgIG9iamVjdC5jYWxsQmFja1Bvc3RfU2F2ZS5hcHBseShvYmplY3QsIE5ld1ZhbDEpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgdGhpcy5zZXRQcmltYXJLZXlOYW1lQXJyKG9iamVjdCwgdHJ1ZSk7XHJcbiAgICAgICAgLy8gaWYgKG9iamVjdC5kaWFibGVFbWl0U2F2ZSA9PSB0cnVlKSBcclxuICAgICAgICAvLyAgICAge31cclxuICAgICAgICAvLyAgIGVsc2VcclxuICAgICAgICAvL29iamVjdC5zYXZlQ29tcGxldGVkT3V0cHV0LmVtaXQob2JqZWN0LmdyaWQuZGF0YSk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBlcnIgPT4ge1xyXG4gICAgICAgICAgZm9yIChsZXQgaSA9IG9iamVjdC5Cb2R5Lmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XHJcbiAgICAgICAgICAgIGlmIChvYmplY3QuQm9keVtpXS5fUVVFUlkgIT0gb2JqZWN0LmRlbGV0ZUNNRCkge1xyXG4gICAgICAgICAgICAgIG9iamVjdC5Cb2R5LnNwbGljZShpLCAxKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgaWYgKHRoaXMucGFyYW1Db25maWcuREVCVUdfRkxBRykgY29uc29sZS5sb2coXCJlcnI6XCIsIGVycilcclxuICAgICAgICAgIGxldCBlcnJNc2cgPSB0aGlzLmdldEVycm9yTXNnKGVycik7XHJcbiAgICAgICAgICB0aGlzLnNob3dOb3RpZmljYXRpb24oXCJlcnJvclwiLCBcImVycm9yOlwiICsgZXJyTXNnKTtcclxuICAgICAgICAgIEVycm9yID0gdHJ1ZTtcclxuICAgICAgICB9KTtcclxuICAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgICBpZiAodGhpcy5wYXJhbUNvbmZpZy5ERUJVR19GTEFHKSBjb25zb2xlLmxvZyhcIm9iamVjdC5pc01hc3RlcjpcIiArIG9iamVjdC5pc01hc3Rlcik7XHJcbiAgICAgICAgaWYgKCFvYmplY3QuaXNNYXN0ZXIpXHJcbiAgICAgICAgdGhpcy5zaG93Tm90aWZpY2F0aW9uKCd3YXJuaW5nJywgXCJObyBjaGFuZ2VzIHRvIHNhdmVcIik7XHJcbiAgICAgIH1cclxuICAgICAgICBpZiAoIUVycm9yKXtcclxuICAgICAgICAgIG9iamVjdC5zYXZlQ29tcGxldGVkT3V0cHV0LmVtaXQoTmV3VmFsKTtcclxuICAgICAgICAgIC8vb2JqZWN0LnNhdmVDb21wbGV0ZWRPdXRwdXQuZW1pdChvYmplY3QuZ3JpZC5kYXRhKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgcHVibGljIGdldEVycm9yTXNnKGVycjphbnkpXHJcbiAgICB7XHJcbiAgICAgIGxldCBlcnJNc2cgPSBcIlwiO1xyXG4gICAgICBcclxuICAgICAgaWYgKHR5cGVvZiBlcnIuZXJyb3IuZXJyb3IgIT0gXCJ1bmRlZmluZWRcIil7XHJcbiAgICAgICAgZXJyTXNnID0gZXJyLmVycm9yLmVycm9yO1xyXG4gICAgICB9XHJcbiAgICAgIGVsc2VcclxuICAgICAgICBlcnJNc2cgPSBlcnIuZXJyb3I7XHJcblxyXG4gICAgICAgIHJldHVybiBlcnJNc2c7XHJcblxyXG4gICAgfVxyXG5cclxuXHJcblxyXG4gIHB1YmxpYyBleGVjdXRlUXVlcnlfZ3JpZChncmlkOiBhbnksIG9iamVjdDphbnkpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLnBhcmFtQ29uZmlnLkRFQlVHX0ZMQUcpIGNvbnNvbGUubG9nKFwib2JqZWN0LmdyaWQ6XCIsIG9iamVjdC5ncmlkKVxyXG4gICAgICAgIGlmICh0eXBlb2YgZ3JpZCA9PSBcInVuZGVmaW5lZFwiIHx8IHR5cGVvZiBvYmplY3QuZ3JpZCA9PSBcInVuZGVmaW5lZFwiKVxyXG4gICAgICAgIHJldHVybjtcclxuXHJcbiAgICAgIGxldCBkaXJ0eSA9IGZhbHNlO1xyXG4gICAgICAvL2lmICh0aGlzLnBhcmFtQ29uZmlnLkRFQlVHX0ZMQUcpIGNvbnNvbGUubG9nIChcImV4ZWN1dGVRdWVyeV9ncmlkOlwiICsgb2JqZWN0LkJvZHkubGVuZ3RoICsgXCIgXCIgKyBvYmplY3QuZ3JpZC5pc0VkaXRpbmcoKSwgXCJvYmplY3QuQm9keTpcIixvYmplY3QuQm9keSk7XHJcbiAgICAgIC8vaWYgKHRoaXMucGFyYW1Db25maWcuREVCVUdfRkxBRykgY29uc29sZS5sb2coXCJvYmplY3QuQm9keTpcIixvYmplY3QuQm9keSlcclxuICAgICAgaWYgKChvYmplY3QuQm9keS5sZW5ndGggIT0gMCkgfHwgb2JqZWN0LmdyaWQuaXNFZGl0aW5nKCkgPT0gdHJ1ZSlcclxuICAgICAge1xyXG4gICAgICAgIGRpcnR5ID0gdHJ1ZTtcclxuICAgICAgfVxyXG4gICAgaWYgKGRpcnR5ID09IHRydWUpIHtcclxuICAgICAgICBsZXQgZGlhbG9nU3RydWMgPSB7XHJcbiAgICAgICAgICBtc2c6IHRoaXMuc2F2ZUNoYW5nZXNNc2csXHJcbiAgICAgICAgdGl0bGU6IHRoaXMucGxlYXNlQ29uZmlybU1zZyxcclxuICAgICAgICAgIGluZm86IGdyaWQsXHJcbiAgICAgICAgb2JqZWN0OiBvYmplY3QsXHJcbiAgICAgICAgYWN0aW9uOiB0aGlzLlllc05vQWN0aW9ucyxcclxuICAgICAgICBjYWxsYmFjazogdGhpcy5leGVjdXRlUXVlcnlBY3RfZ3JpZFxyXG4gICAgICB9O1xyXG4gICAgICAgICAgdGhpcy5zaG93Q29uZmlybWF0aW9uKGRpYWxvZ1N0cnVjKTtcclxuICAgICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgIHRoaXMuZXhlY3V0ZVF1ZXJ5QWN0X2dyaWQoZ3JpZCwgb2JqZWN0KTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIHB1YmxpYyBleGVjdXRlUXVlcnlBY3RfZ3JpZChncmlkOiBhbnksIG9iamVjdDphbnkpOiB2b2lkIHtcclxuICAgICAgbGV0IHBhcmFtQ29uZmlnID0ge1xyXG4gICAgICAgIFwiTmFtZVwiOiBcImNoaWxkUmVjb3Jkc1wiLFxyXG4gICAgICAgIFwiVmFsXCI6IDBcclxuICAgICAgfTtcclxuICAgICAgc2V0UGFyYW1Db25maWcocGFyYW1Db25maWcpO1xyXG4gICAgICBpZiAob2JqZWN0LnBhcmFtQ29uZmlnLkRFQlVHX0ZMQUcpIGNvbnNvbGUubG9nKFwiICBcIiArIG9iamVjdC5tYXN0ZXJLZXlOYW1lLCBvYmplY3QubWFzdGVyS2V5QXJyKTtcclxuICAgIGlmIChvYmplY3QucGFyYW1Db25maWcuREVCVUdfRkxBRykgY29uc29sZS5sb2coXCJvYmplY3QuaXNDaGlsZDpcIiwgb2JqZWN0LmlzQ2hpbGQsIFwiIG9iamVjdC5pc1NlYXJjaCA6XCIsIG9iamVjdC5pc1NlYXJjaClcclxuICAgIGlmIChvYmplY3QuaXNDaGlsZCA9PSB0cnVlKSB7XHJcbiAgICAgIGlmIChvYmplY3QuaXNTZWFyY2ggIT0gdHJ1ZSkge1xyXG4gICAgICAgICAgZ3JpZCA9IG9iamVjdC5ncmlkSW5pdGlhbFZhbHVlcztcclxuICAgICAgICBpZiAob2JqZWN0LnBhcmFtQ29uZmlnLkRFQlVHX0ZMQUcpIGNvbnNvbGUubG9nKFwiaGVyZTFcIik7XHJcbiAgICAgICAgaWYgKCh0eXBlb2Ygb2JqZWN0Lm1hc3RlcktleU5hbWVBcnIgIT0gXCJ1bmRlZmluZWRcIikgJiYgKG9iamVjdC5tYXN0ZXJLZXlOYW1lQXJyLmxlbmd0aCAhPSAwKSkge1xyXG4gICAgICAgICAgaWYgKG9iamVjdC5wYXJhbUNvbmZpZy5ERUJVR19GTEFHKSBjb25zb2xlLmxvZyhcImhlcmUyXCIpO1xyXG4gICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBvYmplY3QubWFzdGVyS2V5TmFtZUFyci5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgbGV0IGV4aXN0cyA9IG9iamVjdC5tYXN0ZXJLZXlOYW1lQXJyW2ldIGluIG9iamVjdC5ncmlkSW5pdGlhbFZhbHVlcztcclxuICAgICAgICAgICAgLy9sZXQgZXhpc3RzID0gb2JqZWN0LmdyaWRJbml0aWFsVmFsdWVzW29iamVjdC5tYXN0ZXJLZXlOYW1lQXJyW2ldXVxyXG4gICAgICAgICAgICBpZiAob2JqZWN0LnBhcmFtQ29uZmlnLkRFQlVHX0ZMQUcpIGNvbnNvbGUubG9nKFwiaGVyZTNcIiwgZXhpc3RzLG9iamVjdC5ncmlkSW5pdGlhbFZhbHVlcywgb2JqZWN0Lm1hc3RlcktleU5hbWVBcnJbaV0sIG9iamVjdC5tYXN0ZXJLZXlBcnJbaV0pO1xyXG4gICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgIGlmICggZXhpc3RzICE9IGZhbHNlKXtcclxuICAgICAgICAgICAgICAgIGlmIChvYmplY3QucGFyYW1Db25maWcuREVCVUdfRkxBRykgY29uc29sZS5sb2coXCJoZXJlNFwiKTtcclxuICAgICAgICAgICAgICBvYmplY3QuZ3JpZEluaXRpYWxWYWx1ZXNbb2JqZWN0Lm1hc3RlcktleU5hbWVBcnJbaV1dID0gb2JqZWN0Lm1hc3RlcktleUFycltpXTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgb2JqZWN0LmdyaWRJbml0aWFsVmFsdWVzW29iamVjdC5tYXN0ZXJLZXlOYW1lXSA9IG9iamVjdC5tYXN0ZXJLZXk7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgLy9ncmlkW29iamVjdC5tYXN0ZXJLZXlOYW1lXSA9IG9iamVjdC5tYXN0ZXJLZXk7XHJcbiAgICAgICAgaWYgKG9iamVjdC5wYXJhbUNvbmZpZy5ERUJVR19GTEFHKSBjb25zb2xlLmxvZyhcIm9iamVjdC5tYXN0ZXJLZXlOYW1lOlwiICsgb2JqZWN0Lm1hc3RlcktleU5hbWUpO1xyXG4gICAgICAgICAgaWYgKG9iamVjdC5wYXJhbUNvbmZpZy5ERUJVR19GTEFHKSBjb25zb2xlLmxvZyhncmlkKTtcclxuICAgICAgICAgIG9iamVjdC5pc1NlYXJjaCA9IHRydWU7XHJcbiAgICAgICAgICBpZiAob2JqZWN0LnBhcmFtQ29uZmlnLkRFQlVHX0ZMQUcpIGNvbnNvbGUubG9nKFwiLS0tU2VhcmNoaW5nOlwiKTtcclxuICAgICAgICAgIGlmIChvYmplY3QucGFyYW1Db25maWcuREVCVUdfRkxBRykgY29uc29sZS5sb2coZ3JpZCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgaWYgKG9iamVjdC5wYXJhbUNvbmZpZy5ERUJVR19GTEFHKSBjb25zb2xlLmxvZygnLS0tLS0tLS0tLS0tZXhlY3V0ZVF1ZXJ5IG9iamVjdC5pc1NlYXJjaCA6JyArIG9iamVjdC5pc1NlYXJjaCArIFwiICBvYmplY3QuaXNDaGlsZDpcIiArIG9iamVjdC5pc0NoaWxkKTtcclxuICAgICAgLy8gaWYgKG9iamVjdC5wYXJhbUNvbmZpZy5ERUJVR19GTEFHKSBjb25zb2xlLmxvZyhvYmplY3QuZ3JpZCk7XHJcblxyXG4gICAgbGV0IFBhZ2UgPSBcIiZfcXVlcnk9XCIgKyBvYmplY3QuZ2V0Q01EO1xyXG4gICAgaWYgKG9iamVjdC5pc1NlYXJjaCA9PSB0cnVlKSB7XHJcbiAgICAgIGlmIChvYmplY3QucGFyYW1Db25maWcuREVCVUdfRkxBRykgY29uc29sZS5sb2coJ29iamVjdC5mb3JtR3JvdXA6Jywgb2JqZWN0LmZvcm1Hcm91cCwgJ3R5cGVvZihncmlkKTonLCB0eXBlb2YgKGdyaWQuZGF0YSksICcgZ3JpZDonLCBncmlkKVxyXG4gICAgICAgICAgbGV0IE5ld1ZhbCA9IFwiXCI7XHJcbiAgICAgIGlmICh0eXBlb2Ygb2JqZWN0LmZvcm1Hcm91cCA9PSBcInVuZGVmaW5lZFwiKSB7XHJcbiAgICAgICAgICAgIC8vIGEgY2hpbGQgY29tcG9uZW50XHJcbiAgICAgICAgaWYgKG9iamVjdC5wYXJhbUNvbmZpZy5ERUJVR19GTEFHKSBjb25zb2xlLmxvZygnZ3JpZDonLCB0eXBlb2YgKGdyaWQuZGF0YSkpO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgaWYgKHR5cGVvZiBncmlkLmRhdGEgPT0gXCJvYmplY3RcIilcclxuICAgICAgICAgICAgICBOZXdWYWwgPSBncmlkLmRhdGE7IC8vIHBhc3NlZCBlbXB0eSBncmlkXHJcbiAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgIE5ld1ZhbCA9IGdyaWQ7IC8vIHVzZWQgdGhlIHBhc3NlZCBncmlkIHBhcmFtXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgICBOZXdWYWwgPSBvYmplY3QuZm9ybUdyb3VwLnZhbHVlO1xyXG5cclxuICAgICAgICAgICAgb2JqZWN0LmlzU2VhcmNoID0gZmFsc2U7XHJcbiAgICAgIGlmICgodHlwZW9mIG9iamVjdC5mb3JtYXR0ZWRXaGVyZSA9PT0gXCJ1bmRlZmluZWRcIikgfHwgKG9iamVjdC5mb3JtYXR0ZWRXaGVyZSA9PSBudWxsKSkge1xyXG4gICAgICAgICAgICAgIFBhZ2UgPSBQYWdlICsgb2JqZWN0LnN0YXJTZXJ2aWNlcy5mb3JtYXRXaGVyZShOZXdWYWwpO1xyXG5cclxuICAgICAgICAgICAgfVxyXG4gICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICBpZiAob2JqZWN0LnBhcmFtQ29uZmlnLkRFQlVHX0ZMQUcpIGNvbnNvbGUubG9nKFwib2JqZWN0LmZvcm1hdHRlZFdoZXJlXCIsIG9iamVjdC5mb3JtYXR0ZWRXaGVyZSlcclxuICAgICAgICAgICAgICBvYmplY3QuZm9ybWF0dGVkV2hlcmUgPSB0aGlzLnByb2Nlc3Nmb3JtYXR0ZWRXaGVyZShvYmplY3QsIG9iamVjdC5mb3JtYXR0ZWRXaGVyZSk7XHJcbiAgICAgICAgICAgICAgUGFnZSA9IFBhZ2UgKyBvYmplY3QuZm9ybWF0dGVkV2hlcmU7XHJcbiAgICAgICAgICAgICAgb2JqZWN0LmZvcm1hdHRlZFdoZXJlID0gbnVsbDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICBpZiAoKHR5cGVvZiBvYmplY3QuT3JkZXJCeUNsYXVzZSAhPT0gXCJ1bmRlZmluZWRcIikgJiYgKG9iamVjdC5PcmRlckJ5Q2xhdXNlICE9IFwiXCIpKVxyXG4gICAgICAgICAgICAgIFBhZ2UgPSBQYWdlICsgXCImX09SREVSQlk9XCIgKyBvYmplY3QuT3JkZXJCeUNsYXVzZTtcclxuXHJcblxyXG4gICAgICAgIH1cclxuICAgICAgICBQYWdlID0gZW5jb2RlVVJJKFBhZ2UpO1xyXG4gICAgICAgIC8vaWYgKG9iamVjdC5wYXJhbUNvbmZpZy5ERUJVR19GTEFHKSBjb25zb2xlLmxvZygnUGFnZTonICsgUGFnZSk7XHJcbiAgICAgICAgb2JqZWN0LmdyaWQubG9hZGluZyA9IHRydWU7XHJcbiAgICAgICAgb2JqZWN0LmNsb3NlRWRpdG9yKCk7XHJcbiAgICBvYmplY3QuZXhlY3V0ZVF1ZXJ5cmVzdWx0ID0gW107XHJcbiAgICBvYmplY3QuZXhlY3V0ZVF1ZXJ5cmVzdWx0LnJlc3VsdCA9IDA7XHJcbiAgICAgICAgb2JqZWN0LkN1cnJlbnRSZWMgPSAwO1xyXG4gICAgICAgIG9iamVjdC5ncmlkLmRhdGEgPSBudWxsO1xyXG4gICAgICAgIFxyXG5cclxuICAgIG9iamVjdC5zdGFyU2VydmljZXMuZmV0Y2gob2JqZWN0LCBQYWdlKS5zdWJzY3JpYmUoKHJlc3VsdDphbnkpID0+IHtcclxuICAgICAgaWYgKHJlc3VsdCAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgbGV0IGFjdHVhbFJlc3VsdCA9IE9iamVjdC5hc3NpZ24oe30sIHJlc3VsdCwge30pXHJcbiAgICAgICAgICAgICAgaWYgKG9iamVjdC5wYXJhbUNvbmZpZy5ERUJVR19GTEFHKSBjb25zb2xlLmxvZyhcIi0tLS0tLXJlc3VsdC5kYXRhWzBdLmRhdGEgOlwiKTtcclxuICAgICAgICAgICAgICAvL2lmIChvYmplY3QucGFyYW1Db25maWcuREVCVUdfRkxBRykgY29uc29sZS5sb2cocmVzdWx0LmRhdGFbMF0uZGF0YSk7XHJcbiAgICAgICAgICAgICAgdGhpcy5oZWxwTXNnX2dyaWQgPSBcIlwiO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcmVzdWx0LmRhdGFbMF0uZGF0YS5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgcmVzdWx0LmRhdGFbMF0uZGF0YVtpXSA9IG9iamVjdC5zdGFyU2VydmljZXMucGFyc2VUb0RhdGUocmVzdWx0LmRhdGFbMF0uZGF0YVtpXSk7XHJcbiAgICAgICAgICBpZiAocmVzdWx0LmRhdGFbMF0uZGF0YVtpXS5fUVVFUlkgIT0gXCJ1bmRlZmluZWRcIikge1xyXG4gICAgICAgICAgICAgICAgICBkZWxldGUgcmVzdWx0LmRhdGFbMF0uZGF0YVtpXS5fUVVFUlk7XHJcbiAgICAgICAgICAgICAgICAgIGRlbGV0ZSByZXN1bHQuZGF0YVswXS5kYXRhW2ldLl9RVUVSWV9ET05FO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICBpZiAob2JqZWN0LnBhcmFtQ29uZmlnLkRFQlVHX0ZMQUcpIGNvbnNvbGUubG9nKHJlc3VsdC5kYXRhWzBdLmRhdGFbMF0pO1xyXG5cclxuICAgICAgICBvYmplY3QuQm9keSA9IFtdO1xyXG4gICAgICAgIHJlc3VsdCA9IHtcclxuICAgICAgICAgIGRhdGE6IHJlc3VsdC5kYXRhWzBdLmRhdGEsXHJcbiAgICAgICAgICB0b3RhbDogcGFyc2VJbnQocmVzdWx0LmRhdGFbMF0uZGF0YS5sZW5ndGgsIDEwKVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAob2JqZWN0LmlzTWFzdGVyKVxyXG4gICAgICAgICAgb2JqZWN0LnN0YXJTZXJ2aWNlcy5zaG93Tm90aWZpY2F0aW9uKCdzdWNjZXNzJywgXCJSZWNvcmRzIHJldHJpZXZlZCA6IFwiICsgcmVzdWx0LnRvdGFsKTtcclxuICAgICAgICBvYmplY3QuZXhlY3V0ZVF1ZXJ5cmVzdWx0ID0gcmVzdWx0O1xyXG4gICAgICAgIGlmIChvYmplY3QuaXNDaGlsZCA9PSB0cnVlKSB7XHJcbiAgICAgICAgICAgICAgICAgIGxldCBwYXJhbUNvbmZpZyA9IHtcclxuICAgICAgICAgICAgICAgICAgICBcIk5hbWVcIjogXCJjaGlsZFJlY29yZHNcIixcclxuICAgICAgICAgICAgICAgICAgICBcIlZhbFwiOiByZXN1bHQudG90YWxcclxuICAgICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgICAgc2V0UGFyYW1Db25maWcocGFyYW1Db25maWcpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuXHJcblxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIG9iamVjdC5ncmlkLmxvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgb2JqZWN0LmdyaWQuZGF0YSA9IHJlc3VsdDtcclxuXHJcbiAgICAgIGlmICh0eXBlb2Ygb2JqZWN0LmNhbGxCYWNrRnVuY3Rpb24gIT09IFwidW5kZWZpbmVkXCIpXHJcbiAgICAgICAgICAgICAgICBvYmplY3QuY2FsbEJhY2tGdW5jdGlvbihyZXN1bHQpO1xyXG5cclxuICAgICAgaWYgKG9iamVjdC5wYXJhbUNvbmZpZy5ERUJVR19GTEFHKSBjb25zb2xlLmxvZyhcImdyaWQgc2VydmljZXJlYWRDb21wbGV0ZWRPdXRwdXRcIik7XHJcbiAgICAgIGlmIChvYmplY3QucGFyYW1Db25maWcuREVCVUdfRkxBRykgY29uc29sZS5sb2cob2JqZWN0LmdyaWQuZGF0YS5kYXRhKTtcclxuICAgICAgICAgICAgaWYgKG9iamVjdC5wYXJhbUNvbmZpZy5ERUJVR19GTEFHKSBjb25zb2xlLmxvZyhcInJlc3VsdCBsZW5ndGg6XCIgKyByZXN1bHQubGVuZ3RoKTtcclxuICAgICAgICAgICAgaWYgKG9iamVjdC5wYXJhbUNvbmZpZy5ERUJVR19GTEFHKSBjb25zb2xlLmxvZyhcInJlc3VsdCB0b3RhbDpcIiArIHJlc3VsdC50b3RhbCk7XHJcbiAgICAgIGlmIChvYmplY3QucGFyYW1Db25maWcuREVCVUdfRkxBRykgY29uc29sZS5sb2coXCJvYmplY3QucGVyZm9ybVJlYWRDb21wbGV0ZWRPdXRwdXQ6XCIgKyBvYmplY3QucGVyZm9ybVJlYWRDb21wbGV0ZWRPdXRwdXQpXHJcbiAgICAgIGlmICgodHlwZW9mIG9iamVjdC5wZXJmb3JtUmVhZENvbXBsZXRlZE91dHB1dCAhPT0gXCJ1bmRlZmluZWRcIikgfHwgKG9iamVjdC5wZXJmb3JtUmVhZENvbXBsZXRlZE91dHB1dCA9PSBmYWxzZSkpIHtcclxuICAgICAgICAgICAgICBpZiAob2JqZWN0LnBhcmFtQ29uZmlnLkRFQlVHX0ZMQUcpIGNvbnNvbGUubG9nKFwiaGVyZTFcIilcclxuICAgICAgICAgICAgfVxyXG4gICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICBpZiAob2JqZWN0LnBhcmFtQ29uZmlnLkRFQlVHX0ZMQUcpIGNvbnNvbGUubG9nKFwiaGVyZTJcIilcclxuICAgICAgICBpZiAob2JqZWN0LmRpc2FibGVFbWl0UmVhZENvbXBsZXRlZCAhPSB0cnVlKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAocmVzdWx0LnRvdGFsICE9IDApXHJcbiAgICAgICAgICAgICAgICAgIG9iamVjdC5yZWFkQ29tcGxldGVkT3V0cHV0LmVtaXQob2JqZWN0LmdyaWQuZGF0YS5kYXRhWzBdKTtcclxuICAgICAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAgICAgICAgb2JqZWN0LnJlYWRDb21wbGV0ZWRPdXRwdXQuZW1pdChbXSk7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgICBvYmplY3Quc3RhclNlcnZpY2VzLnNldFByaW1hcktleU5hbWVBcnIob2JqZWN0LCB0cnVlKTtcclxuICAgICAgICAgIH0sXHJcbiAgICAgIChlcnI6YW55KSA9PiB7XHJcbiAgICAgICAgb2JqZWN0LkJvZHkgPSBbXTtcclxuICAgICAgICAgICAgICAgIG9iamVjdC5ncmlkLmxvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIG9iamVjdC5ncmlkLmRhdGEgPSBudWxsO1xyXG4gICAgICAgIGlmIChvYmplY3QucGFyYW1Db25maWcuREVCVUdfRkxBRykgY29uc29sZS5sb2coXCJlcnI6XCIsIGVycilcclxuICAgICAgICBvYmplY3Quc3RhclNlcnZpY2VzLnNob3dOb3RpZmljYXRpb24oXCJlcnJvclwiLCBcImVycm9yOlwiICsgZXJyLmVycm9yLmVycm9yLmNvZGUpO1xyXG4gICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgb2JqZWN0LmRvY0NsaWNrU3Vic2NyaXB0aW9uID0gb2JqZWN0LnJlbmRlcmVyLmxpc3RlbignZG9jdW1lbnQnLCAnY2xpY2snLCBvYmplY3Qub25Eb2N1bWVudENsaWNrLmJpbmQob2JqZWN0KSk7XHJcbiAgICB9XHJcblxyXG5cclxuICBwdWJsaWMgZW50ZXJRdWVyeUFjdF9ncmlkKGdyaWQ6IGFueSwgb2JqZWN0OmFueSk6IHZvaWQge1xyXG4gIG9iamVjdC5ncmlkLmNhbmNlbDtcclxuICBvYmplY3QuZ3JpZC5kYXRhID0gbnVsbDtcclxuICAgIG9iamVjdC5Cb2R5ID0gW107XHJcblxyXG4gIG9iamVjdC5pc1NlYXJjaCA9IHRydWU7XHJcbiAgaWYgKG9iamVjdC5wYXJhbUNvbmZpZy5ERUJVR19GTEFHKSBjb25zb2xlLmxvZyhcIm9iamVjdC5pc1NlYXJjaDpcIiArIG9iamVjdC5pc1NlYXJjaCk7XHJcbiAgb2JqZWN0LmFkZEhhbmRsZXIoKTtcclxuICBvYmplY3QuY2xlYXJDb21wbGV0ZWRPdXRwdXQuZW1pdChvYmplY3QuZm9ybUluaXRpYWxWYWx1ZXMpO1xyXG4gIG9iamVjdC5zdGFyU2VydmljZXMuc2V0UHJpbWFyS2V5TmFtZUFycihvYmplY3QsIGZhbHNlKTtcclxuICBvYmplY3Quc3RhclNlcnZpY2VzLmhlbHBNc2dfZ3JpZCA9ICB0aGlzLmdldE5MUyhbXSxcIkhFTFBfRU5URVJfUVVFUllcIix0aGlzLmVudGVyUXVlcnlNc2cpO1xyXG5cclxufVxyXG5cclxuICBwdWJsaWMgZW50ZXJRdWVyeV9ncmlkKGdyaWQ6IGFueSwgb2JqZWN0OmFueSk6IHZvaWQge1xyXG4gICAgbGV0IGRpcnR5ID0gZmFsc2U7XHJcbiAgICBpZiAodGhpcy5wYXJhbUNvbmZpZy5ERUJVR19GTEFHKSBjb25zb2xlLmxvZyhcInByZSBvYmplY3Quc2F2ZUN1cnJlbnRcIik7XHJcbiAgICBvYmplY3Quc2F2ZUN1cnJlbnQoKTtcclxuICAgIGxldCBtb2RpZmllZCA9IGZhbHNlO1xyXG4gICAgaWYgKHRoaXMucGFyYW1Db25maWcuREVCVUdfRkxBRykgY29uc29sZS5sb2coXCJvYmplY3QuZ3JpZC5kYXRhXCIpO1xyXG4gICAgaWYgKG9iamVjdC5ncmlkLmRhdGEgIT0gbnVsbCkge1xyXG4gICAgICBpZiAodHlwZW9mIG9iamVjdC5ncmlkLmRhdGEuZGF0YSAhPT0gXCJ1bmRlZmluZWRcIikge1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgb2JqZWN0LmdyaWQuZGF0YS5kYXRhLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICBpZiAodGhpcy5wYXJhbUNvbmZpZy5ERUJVR19GTEFHKSBjb25zb2xlLmxvZyhcImNoZWNrOiBpOlwiLCBpLCBcIiBvYmplY3QuZ3JpZC5kYXRhLmRhdGFbaV0uX1FVRVJZOlwiLCBvYmplY3QuZ3JpZC5kYXRhLmRhdGFbaV0uX1FVRVJZKVxyXG4gICAgICAgICAgaWYgKHR5cGVvZiBvYmplY3QuZ3JpZC5kYXRhLmRhdGFbaV0uX1FVRVJZICE9PSBcInVuZGVmaW5lZFwiKSB7XHJcbiAgICAgICAgICAgIG1vZGlmaWVkID0gdHJ1ZTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGlmICh0aGlzLnBhcmFtQ29uZmlnLkRFQlVHX0ZMQUcpIGNvbnNvbGUubG9nKFwib2JqZWN0LnNhdmVDdXJyZW50IDpcIiArIG9iamVjdC5Cb2R5Lmxlbmd0aCArIFwiIFwiICsgb2JqZWN0LmdyaWQuaXNFZGl0aW5nKCkpO1xyXG4gICAgaWYgKG9iamVjdC5Cb2R5Lmxlbmd0aCAhPSAwKSB7XHJcbiAgICAgIG1vZGlmaWVkID0gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoKG1vZGlmaWVkID09IHRydWUpIHx8IG9iamVjdC5ncmlkLmlzRWRpdGluZygpID09IHRydWUpIHtcclxuICAgICAgZGlydHkgPSB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChkaXJ0eSA9PSB0cnVlKSB7XHJcbiAgICAgIGxldCBkaWFsb2dTdHJ1YyA9IHtcclxuICAgICAgICBtc2c6IHRoaXMuc2F2ZUNoYW5nZXNNc2csXHJcbiAgICAgICAgdGl0bGU6IHRoaXMucGxlYXNlQ29uZmlybU1zZyxcclxuICAgICAgICBpbmZvOiBncmlkLFxyXG4gICAgICAgIG9iamVjdDogb2JqZWN0LFxyXG4gICAgICAgIGFjdGlvbjogdGhpcy5ZZXNOb0FjdGlvbnMsXHJcbiAgICAgICAgY2FsbGJhY2s6IHRoaXMuZW50ZXJRdWVyeUFjdF9ncmlkXHJcbiAgICAgIH07XHJcbiAgICAgICAgdGhpcy5zaG93Q29uZmlybWF0aW9uKGRpYWxvZ1N0cnVjKTtcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICB0aGlzLmVudGVyUXVlcnlBY3RfZ3JpZChncmlkLCBvYmplY3QpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHVibGljIHNldFN0ckF1dGgodXNlcjphbnksIHBhc3N3b3JkOmFueSkge1xyXG4gICAgdGhpcy5TdHJBdXRoID0gdXNlciArIFwiOlwiICsgcGFzc3dvcmQ7XHJcbiAgICB0aGlzLlN0ckF1dGggPSBidG9hKHRoaXMuU3RyQXV0aCk7XHJcbiAgICB0aGlzLlN0ckF1dGggPSBcIkJhc2ljIFwiICsgdGhpcy5TdHJBdXRoO1xyXG4gIH1cclxuICBwdWJsaWMgaXNBU0NJSShzdHIpIHtcclxuICAgIHJldHVybiAvXltcXHgwMC1cXHg3Rl0qJC8udGVzdChzdHIpO1xyXG4gIH1cclxuICBwdWJsaWMgbG9naW4ob2JqZWN0OmFueSwgdXNlcjphbnksIHBhc3N3b3JkOmFueSkge1xyXG4gICAgaWYgKCF0aGlzLmlzQVNDSUkodXNlcikpe1xyXG4gICAgICB0aGlzLnNob3dOb3RpZmljYXRpb24oXCJlcnJvclwiLCBcItmQcnJvcjogXCIgKyBcIk5vdCBhIHZhbGlkIFVzZXIgTmFtZVwiKTtcclxufVxyXG4gICAgdGhpcy5wYXJhbUNvbmZpZyA9IGdldFBhcmFtQ29uZmlnKCk7XHJcbiAgICAvL2NvbnNvbGUubG9nKFwidGhpcy5wYXJhbUNvbmZpZzpcIiwgdGhpcy5wYXJhbUNvbmZpZylcclxuICAgIHRoaXMuc2V0U3RyQXV0aCh1c2VyLCBwYXNzd29yZCk7XHJcbiAgICAvL2lmICh0aGlzLnBhcmFtQ29uZmlnLkRFQlVHX0ZMQUcpIGNvbnNvbGUubG9nKFwidGhpcy5TdHJBdXRoOlwiICsgdGhpcy5TdHJBdXRoKTtcclxuXHJcblxyXG4gICAgbGV0IFBhZ2UgPSBcIlwiO1xyXG4gICAgbGV0IHN1Y2Nlc3MgPSBmYWxzZTtcclxuICAgIGNvbnN0IG1kNSA9IG5ldyBNZDUoKTtcclxuICAgIGxldCBwYXNzID0gbWQ1LmFwcGVuZFN0cihwYXNzd29yZCkuZW5kKCk7XHJcbiAgICB1c2VyID0gdXNlci50b1VwcGVyQ2FzZSgpLnRyaW0oKTtcclxuICAgIHVzZXIgPSB1c2VyLnRyaW0oKTtcclxuICAgIGxldCBOZXdWYWw6YW55ID0ge1xyXG4gICAgICBcIlVTRVJOQU1FXCI6IHVzZXIsXHJcbiAgICAgIFwiUEFTU1dPUkRcIjogcGFzc1xyXG4gICAgfTtcclxuXHJcblxyXG4gICAgTmV3VmFsW1wiX1FVRVJZXCJdID0gXCJWRVJJRllfQURNX1VTRVJcIjtcclxuICAgIG9iamVjdC5Cb2R5PVtdO1xyXG4gICAgb2JqZWN0LmFkZFRvQm9keShOZXdWYWwpO1xyXG4gICAgXHJcbiAgICBsZXQgcGFyYW1Db25maWcgPSB7XHJcbiAgICAgIFwiTmFtZVwiOiBcIlVTRVJOQU1FXCIsXHJcbiAgICAgIFwiVmFsXCI6IHVzZXJcclxuICAgIH07XHJcbiAgICBzZXRQYXJhbUNvbmZpZyhwYXJhbUNvbmZpZyk7XHJcbiAgICB0aGlzLnNlc3Npb25QYXJhbXNbXCJVU0VSTkFNRVwiXSA9IHVzZXI7XHJcblxyXG4gICAgdGhpcy5wb3N0KG9iamVjdCwgUGFnZSwgb2JqZWN0LkJvZHkpLnN1YnNjcmliZShyZXN1bHQgPT4ge1xyXG4gICAgICBpZiAodHlwZW9mIHJlc3VsdC5kYXRhWzBdLmRhdGFbMF0gIT09IFwidW5kZWZpbmVkXCIpIHtcclxuICAgICAgICBpZiAodGhpcy5wYXJhbUNvbmZpZy5ERUJVR19GTEFHKSBjb25zb2xlLmxvZyhcIk9iamVjdCBpbiBsb2dpbiBIRlwiLCBvYmplY3QuQm9keSwgdXNlcik7XHJcbiAgICAgICAgaWYgKHJlc3VsdC5kYXRhWzBdLmRhdGFbMF0uVVNFUk5BTUUgPT0gdXNlcikge1xyXG4gICAgICAgICAgdGhpcy5VU0VSTkFNRSA9IHVzZXI7XHJcbiAgICAgICAgICBvYmplY3QuQm9keSA9IFtdO1xyXG5cclxuICAgICAgICAgIGxldCBwYXJhbUNvbmZpZyA9IHtcclxuICAgICAgICAgICAgXCJOYW1lXCI6IFwiVVNFUl9JTkZPXCIsXHJcbiAgICAgICAgICAgIFwiVmFsXCI6IHJlc3VsdC5kYXRhWzBdLmRhdGFbMF1cclxuICAgICAgICAgIH07XHJcbiAgICAgICAgICBzZXRQYXJhbUNvbmZpZyhwYXJhbUNvbmZpZyk7XHJcbiAgICAgICAgICB0aGlzLnNlc3Npb25QYXJhbXNbXCJVU0VSX0lORk9cIl0gPSByZXN1bHQuZGF0YVswXS5kYXRhWzBdO1xyXG4gICAgICAgICAgbGV0IGFkYXB0ZXIgPSByZXN1bHQuZGF0YVswXVsnX0RCX0FkQXBUb3InXTtcclxuICAgICAgICAgIGlmICh0eXBlb2YgYWRhcHRlciAhPT0gXCJ1bmRlZmluZWRcIil7XHJcbiAgICAgICAgICAgIHRoaXMuc2Vzc2lvblBhcmFtc1tcIkRCX0FEQVBUT1JcIl0gPSBhZGFwdGVyLnRvVXBwZXJDYXNlKCk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICB0aGlzLlVTRVJfSU5GTyA9IHJlc3VsdC5kYXRhWzBdLmRhdGFbMF07XHJcbiAgICAgICAgICBpZiAoKHRoaXMuc2Vzc2lvblBhcmFtcy5VU0VSX0lORk8uTUFTVEVSX0RCICE9IFwiXCIpICYmICh0eXBlb2YgdGhpcy5zZXNzaW9uUGFyYW1zLlVTRVJfSU5GTy5NQVNURVJfREIgIT09IFwidW5kZWZpbmVkXCIpKXtcclxuICAgICAgICAgICAgdGhpcy5NQVNURVJfREIgPSB0aGlzLnNlc3Npb25QYXJhbXMuVVNFUl9JTkZPLk1BU1RFUl9EQjtcclxuICAgICAgICAgICAgdGhpcy5VU0VSTkFNRV9EQiA9IHRoaXMuc2Vzc2lvblBhcmFtcy5VU0VSX0lORk8uTUFTVEVSX0RCO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIFxyXG5cclxuXHJcbiAgICAgICAgICBzdWNjZXNzID0gdHJ1ZTtcclxuICAgICAgICAgIHRoaXMubG9hZFJ1bGVzKG9iamVjdCk7XHJcbiAgICAgICAgICBpZiAoKG9iamVjdC50ZXN0RUtZQykgfHwob2JqZWN0Lm5hdlRvLmxlbmd0aCE9MCl8fChvYmplY3Quc2hhcmVUby5sZW5ndGghPTApKSB7XHJcbiAgICAgICAgICAgIG9iamVjdC5sb2dpbkNvbXBsZXRlZEhhbmRsZXIobnVsbCk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgIG9iamVjdC5sb2dpbkNvbXBsZXRlZC5lbWl0KHRoaXMpO1xyXG5cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgaWYgKCFzdWNjZXNzKVxyXG4gICAgICAgIHRoaXMuc2hvd05vdGlmaWNhdGlvbihcImVycm9yXCIsIFwiZXJyb3I6XCIgKyBcIldyb25nIHVzZXIgb3IgcGFzc3dvcmRcIik7XHJcblxyXG5cclxuXHJcbiAgICB9LFxyXG4gICAgZXJyID0+IHtcclxuICAgICAgICBvYmplY3QuQm9keSA9IFtdO1xyXG4gICAgICAgIHRoaXMuc2hvd05vdGlmaWNhdGlvbihcImVycm9yXCIsIFwiZXJyb3I6XCIgKyBcIldyb25nIHVzZXIgb3IgcGFzc3dvcmRcIik7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyB1c2VyQWRkZWQgPSBmYWxzZTtcclxuICBwdWJsaWMgYWRkVXNlckluZm8ob2JqZWN0OmFueSwgdXNlcm5hbWU6YW55LCB2YWx1ZTphbnkpIHtcclxuICAgIHRoaXMucGFyYW1Db25maWcgPSBnZXRQYXJhbUNvbmZpZygpO1xyXG4gICAgbGV0IFBhZ2UgPSBcIlwiO1xyXG4gICAgbGV0IHN1Y2Nlc3MgPSBmYWxzZTtcclxuICAgIHVzZXJuYW1lID0gdXNlcm5hbWUudG9VcHBlckNhc2UoKS50cmltKCk7XHJcbiAgICB1c2VybmFtZSA9IHVzZXJuYW1lLnRyaW0oKTtcclxuICAgIGxldCBkID0gbmV3IERhdGUoKTtcclxuICAgIGxldCBkYXRlSXNvID0gdGhpcy5GT1JNQVRfSVNPKGQpO1xyXG4gICAgbGV0IGJvZHkgPVtcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgXCJfUVVFUllcIjpcIklOU0VSVF9BRE1fVVNFUl9JTkZPUk1BVElPTlwiLFxyXG4gICAgICAgICAgICAgICAgXCJVU0VSTkFNRVwiOnVzZXJuYW1lLFxyXG4gICAgICAgICAgICAgICAgXCJFTUFJTFwiOnZhbHVlLmVtYWlsLFxyXG4gICAgICAgICAgICAgICAgXCJGVUxMTkFNRVwiIDogdmFsdWUuZmlyc3ROYW1lICsgXCIgXCIgKyB2YWx1ZS5sYXN0TmFtZSAsXHJcbiAgICAgICAgICAgICAgICBcIkZMRVhfRkxEMVwiIDogdmFsdWUuaWQsXHJcbiAgICAgICAgICAgICAgICBcIkdST1VQTkFNRVwiOiBvYmplY3Qua2V5Y0xvYWsuS0VZQ0xPQUtfVVNFUl9HUk9VUCxcclxuICAgICAgICAgICAgICAgIFwiTE9HREFURVwiOiBuZXcgRGF0ZSgpLFxyXG4gICAgICAgICAgICAgICAgXCJMT0dOQU1FXCI6IHVzZXJuYW1lXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIF1cclxuXHJcbiAgICB0aGlzLnBvc3Qob2JqZWN0LCBQYWdlLCBib2R5KS5zdWJzY3JpYmUocmVzdWx0ID0+IHtcclxuICAgICAgIHN1Y2Nlc3MgPSB0cnVlO1xyXG4gICAgICAgY29uc29sZS5sb2coXCJyZXN1bHQ6aW5zZXJ0OlwiLCByZXN1bHQuZGF0YVswXSlcclxuICAgICAgaWYgKHR5cGVvZiByZXN1bHQuZGF0YVswXSAhPT0gXCJ1bmRlZmluZWRcIikge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwicmVzdWx0OlwiLCByZXN1bHQuZGF0YVswXSlcclxuICAgICAgICAgIHN1Y2Nlc3MgPSB0cnVlO1xyXG4gICAgICAgICAgdGhpcy51c2VyQWRkZWQgPSB0cnVlO1xyXG4gICAgICAgICAgdGhpcy5nZXRVc2VySW5mbyhvYmplY3QsIHVzZXJuYW1lLCB2YWx1ZSk7XHJcbiAgICAgICAgICBcclxuICAgICAgfVxyXG4gICAgICBpZiAoIXN1Y2Nlc3Mpe1xyXG4gICAgICAgIFxyXG4gICAgICAgIGxldCBlcnJvck1zZyA9IFwiTm90IGFibGUgdG8gYWRkIFwiICsgdXNlcm5hbWUgKyBcIiB0cCAgREJcIjtcclxuICAgICAgICBsZXQgZGlhbG9nU3RydWMgPSB7XHJcbiAgICAgICAgICBtc2c6IGVycm9yTXNnLFxyXG4gICAgICAgICAgdGl0bGU6IFwiRXJyb3JcIixcclxuICAgICAgICAgIGluZm86IG51bGwsXHJcbiAgICAgICAgICBvYmplY3Q6IG9iamVjdCxcclxuICAgICAgICAgIGFjdGlvbjogbnVsbCxcclxuICAgICAgICAgIGNhbGxiYWNrOiBudWxsXHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLnNob3dDb25maXJtYXRpb24oZGlhbG9nU3RydWMpO1xyXG4gICAgICAgXHJcbiAgICAgICAvLyBvYmplY3QubG9nb2ZmKDMwMDApO1xyXG4gICAgICB9XHJcblxyXG5cclxuXHJcbiAgICB9LFxyXG4gICAgICBlcnIgPT4ge1xyXG4gICAgICAgIG9iamVjdC5Cb2R5ID0gW107XHJcbiAgICAgICAgbGV0IGVycm9yTXNnID0gXCIgRXJyb3IgY29ubmVjdGluZyB0byAgREJcIjtcclxuICAgICAgICBsZXQgZGlhbG9nU3RydWMgPSB7XHJcbiAgICAgICAgICBtc2c6IGVycm9yTXNnLFxyXG4gICAgICAgICAgdGl0bGU6IFwiRXJyb3JcIixcclxuICAgICAgICAgIGluZm86IG51bGwsXHJcbiAgICAgICAgICBvYmplY3Q6IG9iamVjdCxcclxuICAgICAgICAgIGFjdGlvbjogbnVsbCxcclxuICAgICAgICAgIGNhbGxiYWNrOiBudWxsXHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLnNob3dDb25maXJtYXRpb24oZGlhbG9nU3RydWMpO1xyXG4gICAgICAgLy8gb2JqZWN0LmxvZ29mZigzMDAwKTtcclxuICAgICAgfSk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZ2V0VXNlckluZm8ob2JqZWN0OmFueSwgdXNlcjphbnksIHZhbHVlOmFueSkge1xyXG4gICAgdGhpcy5wYXJhbUNvbmZpZyA9IGdldFBhcmFtQ29uZmlnKCk7XHJcbiAgICBsZXQgUGFnZSA9IFwiXCI7XHJcbiAgICBsZXQgc3VjY2VzcyA9IGZhbHNlO1xyXG4gICAgdXNlciA9IHVzZXIudG9VcHBlckNhc2UoKS50cmltKCk7XHJcbiAgICB1c2VyID0gdXNlci50cmltKCk7XHJcbiAgICBsZXQgTmV3VmFsOmFueSA9IHtcclxuICAgICAgXCJVU0VSTkFNRVwiOiB1c2VyXHJcbiAgICB9O1xyXG5cclxuXHJcbiAgICBOZXdWYWxbXCJfUVVFUllcIl0gPSBcIkdFVF9BRE1fVVNFUl9JTkZPUk1BVElPTlwiO1xyXG4gICAgb2JqZWN0LkJvZHk9W107XHJcbiAgICBvYmplY3QuYWRkVG9Cb2R5KE5ld1ZhbCk7XHJcblxyXG4gICAgbGV0IHBhcmFtQ29uZmlnID0ge1xyXG4gICAgICBcIk5hbWVcIjogXCJVU0VSTkFNRVwiLFxyXG4gICAgICBcIlZhbFwiOiB1c2VyXHJcbiAgICB9O1xyXG4gICAgc2V0UGFyYW1Db25maWcocGFyYW1Db25maWcpO1xyXG4gICAgdGhpcy5zZXNzaW9uUGFyYW1zW1wiVVNFUk5BTUVcIl0gPSB1c2VyO1xyXG5cclxuICAgIHRoaXMucG9zdChvYmplY3QsIFBhZ2UsIG9iamVjdC5Cb2R5KS5zdWJzY3JpYmUocmVzdWx0ID0+IHtcclxuICAgICAgaWYgKHR5cGVvZiByZXN1bHQuZGF0YVswXS5kYXRhWzBdICE9PSBcInVuZGVmaW5lZFwiKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJyZXN1bHQ6Z2V0OlwiLCByZXN1bHQuZGF0YVswXS5kYXRhWzBdKVxyXG4gICAgICAgIGlmIChyZXN1bHQuZGF0YVswXS5kYXRhWzBdLlVTRVJOQU1FID09IHVzZXIpIHtcclxuICAgICAgICAgIHRoaXMuVVNFUk5BTUUgPSB1c2VyO1xyXG4gICAgICAgICAgb2JqZWN0LkJvZHkgPSBbXTtcclxuXHJcbiAgICAgICAgICBsZXQgcGFyYW1Db25maWcgPSB7XHJcbiAgICAgICAgICAgIFwiTmFtZVwiOiBcIlVTRVJfSU5GT1wiLFxyXG4gICAgICAgICAgICBcIlZhbFwiOiByZXN1bHQuZGF0YVswXS5kYXRhWzBdXHJcbiAgICAgICAgICB9O1xyXG4gICAgICAgICAgc2V0UGFyYW1Db25maWcocGFyYW1Db25maWcpO1xyXG4gICAgICAgICAgdGhpcy5zZXNzaW9uUGFyYW1zW1wiVVNFUl9JTkZPXCJdID0gcmVzdWx0LmRhdGFbMF0uZGF0YVswXTtcclxuICAgICAgICAgIGxldCBhZGFwdGVyID0gcmVzdWx0LmRhdGFbMF1bJ19EQl9BZEFwVG9yJ107XHJcbiAgICAgICAgICBpZiAodHlwZW9mIGFkYXB0ZXIgIT09IFwidW5kZWZpbmVkXCIpe1xyXG4gICAgICAgICAgICB0aGlzLnNlc3Npb25QYXJhbXNbXCJEQl9BREFQVE9SXCJdID0gYWRhcHRlci50b1VwcGVyQ2FzZSgpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgdGhpcy5VU0VSX0lORk8gPSByZXN1bHQuZGF0YVswXS5kYXRhWzBdO1xyXG4gICAgICAgICAgaWYgKCh0aGlzLnNlc3Npb25QYXJhbXMuVVNFUl9JTkZPLk1BU1RFUl9EQiAhPSBcIlwiKSAmJiAodHlwZW9mIHRoaXMuc2Vzc2lvblBhcmFtcy5VU0VSX0lORk8uTUFTVEVSX0RCICE9PSBcInVuZGVmaW5lZFwiKSl7XHJcbiAgICAgICAgICAgIHRoaXMuTUFTVEVSX0RCID0gdGhpcy5zZXNzaW9uUGFyYW1zLlVTRVJfSU5GTy5NQVNURVJfREI7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgXHJcblxyXG5cclxuXHJcbiAgICAgICAgICBzdWNjZXNzID0gdHJ1ZTtcclxuICAgICAgICAgIHRoaXMubG9hZFJ1bGVzKG9iamVjdCk7XHJcbiAgICAgICAgICBpZiAoKG9iamVjdC50ZXN0RUtZQykgfHwob2JqZWN0Lm5hdlRvLmxlbmd0aCE9MCkpIHtcclxuICAgICAgICAgICAgb2JqZWN0LmxvZ2luQ29tcGxldGVkSGFuZGxlcihudWxsKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAgb2JqZWN0LmxvZ2luQ29tcGxldGVkSGFuZGxlcih0aGlzKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgY29uc29sZS5sb2coXCJyZXN1bHQ6c3VjY2VzczpcIixzdWNjZXNzKVxyXG4gICAgICBpZiAoIXN1Y2Nlc3Mpe1xyXG4gICAgICAgIGlmICghdGhpcy51c2VyQWRkZWQpXHJcbiAgICAgICAgICB0aGlzLmFkZFVzZXJJbmZvKG9iamVjdCwgdXNlciwgdmFsdWUpO1xyXG4gICAgICAgIGVsc2V7XHJcbiAgICAgICAgICAvLyBsZXQgZXJyb3JNc2cgPSB1c2VyICsgXCJpcyBub3QgZGVmaW5lZCBpbiBTVEFSIERCXCI7XHJcbiAgICAgICAgICAvLyBsZXQgZGlhbG9nU3RydWMgPSB7XHJcbiAgICAgICAgICAvLyAgIG1zZzogZXJyb3JNc2csXHJcbiAgICAgICAgICAvLyAgIHRpdGxlOiBcIkVycm9yXCIsXHJcbiAgICAgICAgICAvLyAgIGluZm86IG51bGwsXHJcbiAgICAgICAgICAvLyAgIG9iamVjdDogb2JqZWN0LFxyXG4gICAgICAgICAgLy8gICBhY3Rpb246IG51bGwsXHJcbiAgICAgICAgICAvLyAgIGNhbGxiYWNrOiBudWxsXHJcbiAgICAgICAgICAvLyB9O1xyXG4gICAgICAgICAgLy8gdGhpcy5zaG93Q29uZmlybWF0aW9uKGRpYWxvZ1N0cnVjKTtcclxuICAgICAgICBcclxuICAgICAgICAgIC8vIG9iamVjdC5sb2dvZmYoMzAwMCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG5cclxuXHJcbiAgICB9LFxyXG4gICAgICBlcnIgPT4ge1xyXG4gICAgICAgIG9iamVjdC5Cb2R5ID0gW107XHJcbiAgICAgICAgbGV0IGVycm9yTXNnID0gXCIgRXJyb3IgY29udGFjdGluZyBEQiB0byB2ZXJpZnkgdXNlciBcIiArIHVzZXI7XHJcbiAgICAgICAgbGV0IGRpYWxvZ1N0cnVjID0ge1xyXG4gICAgICAgICAgbXNnOiBlcnJvck1zZyxcclxuICAgICAgICAgIHRpdGxlOiBcIkVycm9yXCIsXHJcbiAgICAgICAgICBpbmZvOiBudWxsLFxyXG4gICAgICAgICAgb2JqZWN0OiBvYmplY3QsXHJcbiAgICAgICAgICBhY3Rpb246IG51bGwsXHJcbiAgICAgICAgICBjYWxsYmFjazogbnVsbFxyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy5zaG93Q29uZmlybWF0aW9uKGRpYWxvZ1N0cnVjKTtcclxuICAgICAgIC8vb2JqZWN0LmxvZ29mZigzMDAwKTtcclxuICAgICAgfSk7XHJcbiAgfVxyXG4gIHB1YmxpYyBydWxlc1Bvc3RRdWVyeURlZiA9IHtcclxuICAgIHJ1bGVQdHJzQXJyOiB7fSxcclxuICAgIHJ1bGVzQXJyOiBbXSxcclxuICAgIGFjdGlvblB0cnNBcnI6IHt9LFxyXG4gICAgYWN0aW9uc0FycjogW11cclxuICB9O1xyXG4gIHB1YmxpYyBydWxlc1ByZVF1ZXJ5RGVmID0ge1xyXG4gICAgcnVsZVB0cnNBcnI6IHt9LFxyXG4gICAgcnVsZXNBcnI6IFtdLFxyXG4gICAgYWN0aW9uUHRyc0Fycjoge30sXHJcbiAgICBhY3Rpb25zQXJyOiBbXVxyXG4gIH07XHJcbiAgcHVibGljIGhvc3RzQXJyID0gW107XHJcbiAgcHVibGljIGhvc3RzTWFwQXJyID0gW107XHJcbiAgLy8vLy8vLy8vLy8vLy8vLy9cclxuICAgIHB1YmxpYyBNQUtFX0RBVEUgICh2YWwpXHJcblx0e1xyXG5cdFx0dHJ5IHtcclxuXHRcdFx0dmFyIGQgPSBuZXcgRGF0ZSh2YWwpO1xyXG5cdFx0XHR9IGNhdGNoIChlKSB7XHJcblx0XHRcdFx0Y29uc29sZS5sb2cgKFwiRXJyb3IgcGFyc2luZyA6MjpcIix2YWwpO1xyXG5cdFx0XHRcdHJldHVybiAwO1xyXG5cdFx0XHR9XHJcblx0XHRjb25zb2xlLmxvZyAoXCJjb3JyZWN0IHBhcnNpbmcgOlwiLHZhbCwgZCk7XHJcblx0XHR2YXIgZGF0ZUlzbyA9IGQudG9JU09TdHJpbmcoKTtcclxuXHRcdCB2YXIgZGF0ZUlzb0FyciA9IGRhdGVJc28uc3BsaXQoXCIuXCIpO1xyXG5cdFx0IGRhdGVJc28gPSBkYXRlSXNvQXJyWzBdICsgXCIuMDAwWlwiO1xyXG4gICAgIGNvbnNvbGUubG9nIChcImNvcnJlY3QgcGFyc2luZyA6XCIsdmFsLCBkLGRhdGVJc28pO1xyXG5cdFx0cmV0dXJuIGRhdGVJc287XHJcblx0fVxyXG4gIHB1YmxpYyBGT1JNQVRfSVNPKGQ6YW55KSB7XHJcbiAgICB2YXIgZGF0ZUlzbyA9IGQudG9JU09TdHJpbmcoKTtcclxuICAgIHZhciBkYXRlSXNvQXJyID0gZGF0ZUlzby5zcGxpdChcIlRcIik7XHJcbiAgICBkYXRlSXNvID0gZGF0ZUlzb0FyclswXSArIFwiIFwiICsgZGF0ZUlzb0FyclsxXTtcclxuICAgIGRhdGVJc28gPSBkYXRlSXNvLnN1YnN0cigwLCAxOSk7XHJcbiAgICByZXR1cm4gZGF0ZUlzbztcclxuICB9XHJcbiAgcHVibGljIExvZ1J1bGUob2JqZWN0OmFueSwgcnVsZUxvZzphbnksIG1zZ1Jlc3BvbnNlOmFueSwgc3RhdHVzOmFueSkge1xyXG4gICAgZnVuY3Rpb24gcHJlcGFyZURhdGFGb3JEQihkYXRhSW46YW55KSB7XHJcblxyXG5cdFx0XHRsZXQgZGF0YU91dCA9IEpTT04uc3RyaW5naWZ5KGRhdGFJbik7XHJcbiAgICAgIC8vY29uc29sZS5sb2coXCJkYXRhSW46XCIsIGRhdGFJbiwgXCIgZGF0YU91dDpcIiwgZGF0YU91dCk7XHJcblx0XHRcdGRhdGFPdXQgPSBkYXRhT3V0LnNwbGl0KFwiJ1wiKS5qb2luKCdcIicpO1xyXG5cdFx0XHRyZXR1cm4gZGF0YU91dDtcclxuXHJcblx0XHR9XHJcbiAgICBpZiAodHlwZW9mIG1zZ1Jlc3BvbnNlID09IFwib2JqZWN0XCIpXHJcblx0XHRcdG1zZ1Jlc3BvbnNlID0gSlNPTi5zdHJpbmdpZnkobXNnUmVzcG9uc2UpO1xyXG4gICAgaWYgKHRoaXMucGFyYW1Db25maWcuREVCVUdfRkxBRykgY29uc29sZS5sb2coXCItLS0tLW1zZ1Jlc3BvbnNlOlwiLCBtc2dSZXNwb25zZSwgXCJydWxlTG9nOlwiLCBydWxlTG9nKTtcclxuICAgIGxldCBkYiA9IHJ1bGVMb2cuZGI7XHJcbiAgICBsZXQgZCA9IG5ldyBEYXRlKCk7XHJcbiAgICBsZXQgZGF0ZUlzbyA9IHRoaXMuRk9STUFUX0lTTyhkKTtcclxuXHJcbiAgICBsZXQgUlVMRV9LRVkgPSBydWxlTG9nLnJ1bGUuUlVMRV9LRVk7XHJcblxyXG4gICAgbGV0IGFycmF5ID0gUlVMRV9LRVkuc3BsaXQoXCIsXCIpO1xyXG4gICAgLy9sZXQgcnVsZUtleSA9IHt9O1xyXG4gICAgbGV0IHJ1bGVLZXkgPSBcIlwiO1xyXG4gICAgbGV0IHJ1bGVLZXlOYW1lID0gXCJcIjtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYXJyYXkubGVuZ3RoOyBpKyspIHtcclxuICAgICAgbGV0IGVsZW0gPSBhcnJheVtpXTtcclxuICAgICAgbGV0IGVsZW1fdmFsdWUgPSBydWxlTG9nLnF1ZXJ5RGF0YVtlbGVtXTtcclxuICAgICAgaWYgKHR5cGVvZiBlbGVtX3ZhbHVlICE9PSBcInVuZGVmaW5lZFwiKSB7XHJcblx0XHRcdFx0Ly9ydWxlS2V5W2VsZW1dID0gZWxlbV92YWx1ZTtcclxuICAgICAgICBpZiAocnVsZUtleSAhPSBcIlwiKSB7XHJcblx0XHRcdFx0XHRydWxlS2V5ID0gcnVsZUtleSArIFwiX1wiO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRydWxlS2V5ID0gcnVsZUtleSArIGVsZW1fdmFsdWU7XHJcblxyXG4gICAgICAgIGlmIChydWxlS2V5TmFtZSAhPSBcIlwiKSB7XHJcblx0XHRcdFx0XHRydWxlS2V5TmFtZSA9IHJ1bGVLZXlOYW1lICsgXCJfXCI7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdHJ1bGVLZXlOYW1lID0gcnVsZUtleU5hbWUgKyBlbGVtO1xyXG4gICAgICB9XHJcblxyXG4gICAgfVxyXG4gICAgaWYgKHRoaXMucGFyYW1Db25maWcuREVCVUdfRkxBRykgY29uc29sZS5sb2coXCJydWxlS2V5OlwiLCBydWxlS2V5LCBcIiBydWxlS2V5TmFtZTpcIiwgcnVsZUtleU5hbWUpO1xyXG5cclxuXHJcblxyXG4gICAgaWYgKHRoaXMucGFyYW1Db25maWcuREVCVUdfRkxBRykgY29uc29sZS5sb2coXCJSVUxFX0tFWTpcIiwgUlVMRV9LRVkpO1xyXG5cclxuXHJcbiAgICB2YXIgdGVtcGxhdGVOYW1lID0gcnVsZUxvZy5xdWVyeURhdGEuVEVNUExBVEVfTkFNRTtcclxuICAgIGxldCBxdWVyeURhdGEgPSBwcmVwYXJlRGF0YUZvckRCKHJ1bGVMb2cucXVlcnlEYXRhKTtcclxuICAgIC8vbGV0IGJvZHlUb1NlbmQgPSBwcmVwYXJlRGF0YUZvckRCKHJ1bGVMb2cuYm9keVRvU2VuZCk7XHJcbiAgICBsZXQgYm9keVRvU2VuZCA9IHJ1bGVMb2cuYm9keVRvU2VuZDtcclxuICAgIGxldCBwYXJhbWV0ZXJzVG9TZW5kID0gcHJlcGFyZURhdGFGb3JEQihydWxlTG9nLnBhcmFtZXRlcnNUb1NlbmQpO1xyXG4gICAvLyBsZXQgcnVsZUtleVN0ciA9IHByZXBhcmVEYXRhRm9yREIocnVsZUtleSk7XHJcbiAgICBsZXQgbXNnUmVzcG9uc2VTdHIgPSBwcmVwYXJlRGF0YUZvckRCKG1zZ1Jlc3BvbnNlKTtcclxuXHJcbiAgICBpZiAodGhpcy5wYXJhbUNvbmZpZy5ERUJVR19GTEFHKSBjb25zb2xlLmxvZyhcInF1ZXJ5RGF0YTpcIiArIHF1ZXJ5RGF0YSk7XHJcblxyXG4vL1xyXG4gICAgICAgICAgICAgIGxldCB1c2VyTmFtZSA9IG9iamVjdC5zdGFyU2VydmljZXMuc2Vzc2lvblBhcmFtcy5VU0VSX0lORk8uTmFtZTtcclxuICAgIG9iamVjdC5Cb2R5ID0gW107XHJcbiAgICBsZXQgUGFnZSA9IFwiXCI7XHJcbiAgICBsZXQgTmV3VmFsOmFueSA9IHtcclxuICAgICAgXCJSVUxFX0tFWVwiOiBydWxlS2V5LFxyXG4gICAgICBcIlJVTEVfS0VZX05BTUVcIjogcnVsZUtleU5hbWUsXHJcbiAgICAgIFwiU1RBVFVTXCI6IHN0YXR1cyxcclxuICAgICAgXCJNT0RVTEVcIjogcnVsZUxvZy5ydWxlLk1PRFVMRSxcclxuICAgICAgXCJSVUxFX0lEXCI6IHJ1bGVMb2cucnVsZS5SVUxFX0lELFxyXG4gICAgICBcIkFDVElPTl9JRFwiOiBydWxlTG9nLmFjdGlvbi5BQ1RJT05fSUQsXHJcbiAgICAgIFwiU0VOVF9EQVRFXCI6IHJ1bGVMb2cuc2VudERhdGUsXHJcbiAgICAgIFwiTVNHX1JFQ0VJVkVEXCI6IHF1ZXJ5RGF0YSxcclxuICAgICAgICAgICAgICAgIFwiUEFSQU1FVEVSX1NFTlRcIjogcGFyYW1ldGVyc1RvU2VuZCxcclxuICAgICAgXCJCT0RZX1NFTlRcIjogYm9keVRvU2VuZCxcclxuICAgICAgXCJNU0dfUkVTUE9OU0VcIjogbXNnUmVzcG9uc2VTdHIsXHJcbiAgICAgIFwiTE9HREFURVwiOiBkYXRlSXNvLFxyXG4gICAgICBcIkxPR05BTUVcIjogdXNlck5hbWUsXHJcbiAgICAgIFwiVEVNUExBVEVfTkFNRVwiIDogdGVtcGxhdGVOYW1lXHJcblxyXG4gICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgTmV3VmFsW1wiX1FVRVJZXCJdID0gXCJJTlNFUlRfQURNX1JVTEVfTE9HXCI7XHJcblxyXG4gICAgICAgICAgICAgIC8vaWYgKHRoaXMucGFyYW1Db25maWcuREVCVUdfRkxBRykgY29uc29sZS5sb2coXCJ0ZXN0Ok5ld1ZhbDpcIiwgTmV3VmFsKVxyXG4gICAgICAgICAgICAgIC8vaWYgKHRoaXMucGFyYW1Db25maWcuREVCVUdfRkxBRykgY29uc29sZS5sb2coXCJ0ZXN0Om9iamVjdC5Cb2R5OlwiLCBvYmplY3QuQm9keSlcclxuICAgICAgICAgICAgICBvYmplY3QuYWRkVG9Cb2R5KE5ld1ZhbCk7XHJcblxyXG5cclxuICAgIHRoaXMucG9zdChvYmplY3QsIFBhZ2UsIG9iamVjdC5Cb2R5KS5zdWJzY3JpYmUocmVzdWx0ID0+IHtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLnBhcmFtQ29uZmlnLkRFQlVHX0ZMQUcpIGNvbnNvbGUubG9nKFwidGVzdDpyZXN1bHQuZGF0YTpcIiwgcmVzdWx0LmRhdGEpO1xyXG4gICAgICBvYmplY3QuQm9keSA9IFtdO1xyXG4gICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgZXJyID0+IHtcclxuICAgICAgICBvYmplY3QuQm9keSA9IFtdO1xyXG4gICAgICAgIHRoaXMuc2hvd05vdGlmaWNhdGlvbihcImVycm9yXCIsIFwiZXJyb3I6XCIgKyBlcnIubWVzc2FnZSk7XHJcbiAgICAgICAgICAgICAgfSk7XHJcblxyXG5cclxuXHJcbiAgfVxyXG4gIHB1YmxpYyBwZXJmb3JtSHR0cFBvc3Qob2JqZWN0OmFueSwgYm9keVRvU2VuZDphbnksIHBhcmFtZXRlcnNUb1NlbmQ6YW55LCBzZW5kVG86YW55LCBxdWVyeURhdGE6YW55LCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgcnVsZTphbnksIGFjdGlvbjphbnksIFRyaWdnZXI6YW55LCBob3N0RGVmOmFueSwgaG9zdE1hcERlZjphbnksIGhlYWRlclBhcmFtOmFueSwgIHBhdGhFeHRyYTphbnkpIHtcclxuXHJcbiAgICB2YXIgdmFsaWQgPSBmYWxzZTtcclxuICAgIGxldCBlcnJvciA9IDA7XHJcbiAgICBsZXQgbXNnID0gXCJcIjtcclxuXHJcbiAgICBsZXQgb3B0aW9uczphbnkgPSB7XHJcbiAgICAgIGhvc3Q6ICcnLFxyXG4gICAgICBwYXRoOiAnJyxcclxuICAgICAgcG9ydDogODAsXHJcbiAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXHJcbiAgICAgICAvLydDb250ZW50LVR5cGUnOiAndGV4dC94bWw7IGNoYXJzZXQ9dXRmLTgnLFxyXG4gICAgICBcImF1dGhvcml6YXRpb25cIjogXCJcIlxyXG4gICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgLy8gaWYgKHRoaXMucGFyYW1Db25maWcuREVCVUdfRkxBRykgY29uc29sZS5sb2coXCItLS0tLS0tLS0tLS0tLS1yZXEudXJsOlwiLHJlcS51cmwpO1xyXG4gICAvLyBpZiAodGhpcy5wYXJhbUNvbmZpZy5ERUJVR19GTEFHKSBjb25zb2xlLmxvZyhcIi0tLS0tLS0tLS0tLS0tLXBhdGhuYW1lOlwiLHJlcS5fcGFyc2VkVXJsLnBhdGhuYW1lKTtcclxuICAgLy8gaWYgKHRoaXMucGFyYW1Db25maWcuREVCVUdfRkxBRykgY29uc29sZS5sb2coXCItLS0tLS0tLS0tLS0tLS1wYXRoOlwiLHJlcS5fcGFyc2VkVXJsLnBhdGgpO1xyXG4gICAgbGV0IGQgPSBuZXcgRGF0ZSgpO1xyXG4gICAgbGV0IGRhdGVJc28gPSB0aGlzLkZPUk1BVF9JU08oZCk7XHJcbiAgICBpZiAoaG9zdERlZiA9PSBudWxsKVxyXG4gICAgICBob3N0RGVmID0gXCJcIjtcclxuXHJcbiAgICBsZXQgcnVsZUxvZyA9IHtcclxuICAgICAgcnVsZTogcnVsZSxcclxuICAgICAgYWN0aW9uOiBhY3Rpb24sXHJcbiAgICAgIHF1ZXJ5RGF0YTogcXVlcnlEYXRhLFxyXG4gICAgICBib2R5VG9TZW5kOiBib2R5VG9TZW5kLFxyXG4gICAgICBwYXJhbWV0ZXJzVG9TZW5kOiBwYXJhbWV0ZXJzVG9TZW5kLFxyXG4gICAgLy8gIFwiZGJcIjogZGIsXHJcbiAgICAgIHNlbnREYXRlOiBkYXRlSXNvLFxyXG4gICAgICBob3N0RGVmOiBob3N0RGVmXHJcbiAgICB9O1xyXG4gICAgaWYgKHNlbmRUbyA9PSBcIldGXCIpIHtcclxuICAgICAgbGV0IHVybCA9IHRoaXMuQkFTRV9VUkw7XHJcblxyXG4gICAgICBvcHRpb25zLmhlYWRlcnMuYXV0aG9yaXphdGlvbiA9IHRoaXMuU3RyQXV0aDtcclxuXHJcbiAgICAgIHZhbGlkID0gdHJ1ZTtcclxuXHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgaWYgKGhvc3REZWYgIT0gXCJcIikge1xyXG4gICAgICAgIGxldCBwYXRoID0gXCIvXCIgKyBob3N0RGVmLlBBVEg7XHJcbiAgICAgICAgaWYgKHBhcmFtZXRlcnNUb1NlbmQgIT0gXCJcIilcclxuICAgICAgICAgIHBhdGggPSBwYXRoICsgcGFyYW1ldGVyc1RvU2VuZDtcclxuICAgICAgICBwYXRoID0gcGF0aCArIHBhdGhFeHRyYTtcclxuICAgICAgICBsZXQgaG9zdCA9IGhvc3REZWYuSE9TVDtcclxuICAgICAgICBsZXQgcG9ydCA9IHBhcnNlSW50KGhvc3REZWYuUE9SVCk7XHJcbiAgICAgICAgbGV0IG1ldGhvZCA9IGhvc3REZWYuSFRUUF9NRVRIT0Q7XHJcblxyXG4gICAgICAgIG9wdGlvbnMuaG9zdCA9IGhvc3Q7XHJcbiAgICAgICAgb3B0aW9ucy5wb3J0ID0gcG9ydDtcclxuICAgICAgICBvcHRpb25zLnBhdGggPSBwYXRoO1xyXG4gICAgICAgIG9wdGlvbnMubWV0aG9kID0gbWV0aG9kO1xyXG4gICAgICAgLy8gbGV0IHVybCA9IFwiaHR0cDovL1wiICsgaG9zdCArIFwiOlwiICsgcG9ydCAgKyBwYXRoICsgcGFyYW1ldGVyc1RvU2VuZCA7XHJcbiAgICAgICAgbGV0IHVybDogc3RyaW5nID0gaG9zdERlZi5VUkw7XHJcbi8vXHRcdFx0XHRcdG9wdGlvbnMuaGVhZGVycy5hdXRob3JpemF0aW9uID0gcmVxLmhlYWRlcnMuYXV0aG9yaXphdGlvbjtcclxuICAgICAgICAvL2JvZHlUb1NlbmQgPSBcIlwiO1xyXG5cclxuXHJcbiAgICAgICAgdmFsaWQgPSB0cnVlO1xyXG4gICAgICB9XHJcbiAgICAgIGVsc2Uge1xyXG4gICAgICAgIGVycm9yID0gMTAwO1xyXG4gICAgICAgIG1zZyA9IFwidW5kZWZpbmVkIEhvc3QgOlwiICsgc2VuZFRvO1xyXG4gICAgICAgIHRoaXMuTG9nUnVsZShvYmplY3QsIHJ1bGVMb2csIG1zZywgMTAwKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgaWYgKHRoaXMucGFyYW1Db25maWcuREVCVUdfRkxBRykgY29uc29sZS5sb2coXCJoZXJlMjp2YWxpZDpcIiwgdmFsaWQpO1xyXG4gICAgaWYgKHZhbGlkKSB7XHJcbiAgICAgIGlmICh0aGlzLnBhcmFtQ29uZmlnLkRFQlVHX0ZMQUcpIGNvbnNvbGUubG9nKFwib3B0aW9uczpcIiwgb3B0aW9ucyk7XHJcbiAgICAgIGlmICh0aGlzLnBhcmFtQ29uZmlnLkRFQlVHX0ZMQUcpIGNvbnNvbGUubG9nKFwiLS0tLS0tYm9keVRvU2VuZDpcIiArIGJvZHlUb1NlbmQsIFwiICBUcmlnZ2VyOlwiLCBUcmlnZ2VyKTtcclxuXHJcbiAgICAgIGxldCBrZXlzID0gT2JqZWN0LmtleXMoaGVhZGVyUGFyYW0pO1xyXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGtleXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBpZiAodGhpcy5wYXJhbUNvbmZpZy5ERUJVR19GTEFHKSBjb25zb2xlLmxvZyhrZXlzW2ldICsgXCIgXCIgKyBoZWFkZXJQYXJhbVtrZXlzW2ldXSk7XHJcbiAgICAgICAgaWYgKGhlYWRlclBhcmFtW2tleXNbaV1dICE9IG51bGwpIHtcclxuICAgICAgICAgIG9wdGlvbnMuaGVhZGVyc1trZXlzW2ldXSA9IGhlYWRlclBhcmFtW2tleXNbaV1dO1xyXG5cclxuICAgICAgICAgIC8vc2NyZWVuQ29uZmlnWyBrZXlzW2ldIF0gPSBjb21wb25lbnRDb25maWdbIGtleXNbaV0gXTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmICh0aGlzLnBhcmFtQ29uZmlnLkRFQlVHX0ZMQUcpIGNvbnNvbGUubG9nKFwiaGVyZTI6YWN0aW9uLkFDVElPTl9DT0RFOlwiLCBhY3Rpb24uQUNUSU9OX0NPREUpO1xyXG4gICAgICBpZiAoYWN0aW9uLkFDVElPTl9DT0RFID09IFwiU0VORF9XQUlUXCIpIHtcclxuICAgICAgICAvKlxyXG4gICAgICAgIGxldCBzZW5kaW5nTGliID0gXCJyZXF1ZXN0XCI7XHJcbiAgICAgICAgc3RhdHVzID0gMTtcclxuICAgICAgICBsZXQgaGVhZGVycyAgPSAge2hlYWRlcnM6b3B0aW9ucy5oZWFkZXJzfTtcclxuICAgICAgICBpZiAodGhpcy5wYXJhbUNvbmZpZy5ERUJVR19GTEFHKSBjb25zb2xlLmxvZyhcImhlYWRlcnM6XCIsIGhlYWRlcnMpO1xyXG4gICAgICAgIGxldCB1cmwgPSBcImh0dHA6Ly9cIiArIGhvc3QgKyBcIjpcIiArIHBvcnQgICsgcGF0aCArIHBhcmFtZXRlcnNUb1NlbmQgO1xyXG4gICAgICAgIGlmICh0aGlzLnBhcmFtQ29uZmlnLkRFQlVHX0ZMQUcpIGNvbnNvbGUubG9nKFwiLS0tdXJsOlwiLCB1cmwpO1xyXG4gICAgICAgIGlmIChtZXRob2QgPT0gXCJHRVRcIilcclxuICAgICAgICB7XHJcbiAgICAgICAgICBsZXQgcmVzID0gcmVxdWVzdChtZXRob2QsIHVybCwgaGVhZGVycyk7XHJcbiAgICAgICAgICBsZXQgcmVzdWx0ID0gSlNPTi5wYXJzZShyZXMuZ2V0Qm9keSgndXRmOCcpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZVxyXG4gICAgICAgIGlmIChtZXRob2QgPT0gXCJQT1NUXCIpXHJcbiAgICAgICAge1xyXG5cclxuICAgICAgICAgIGxldCBkYXRhRm9yU3luYyA9IHsgYm9keSA6IGJvZHlUb1NlbmQsIGhlYWRlcnM6b3B0aW9ucy5oZWFkZXJzfTtcclxuICAgICAgICAgIGxldCByZXMgPSByZXF1ZXN0KG1ldGhvZCwgdXJsLCBkYXRhRm9yU3luYyk7XHJcbiAgICAgICAgICBpZiAodGhpcy5wYXJhbUNvbmZpZy5ERUJVR19GTEFHKSBjb25zb2xlLmxvZyhcInJlczpcIiwgcmVzKTtcclxuICAgICAgICAgIGxldCBzdGF0dXNDb2RlID0gcmVzLnN0YXR1c0NvZGU7XHJcbiAgICAgICAgICBsZXQgbXNnUmVzcG9uc2UgPVwiXCI7XHJcbiAgICAgICAgICBpZiAoc3RhdHVzQ29kZSA9PSAyMDApXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIGxldCBjb250ZW50VHlwZSA9IHJlcy5oZWFkZXJzWydjb250ZW50LXR5cGUnXTtcclxuXHJcbiAgICAgICAgICAgIGxldCBtc2dSZXNwb25zZSA9IHJlcy5nZXRCb2R5KCd1dGY4Jyk7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnBhcmFtQ29uZmlnLkRFQlVHX0ZMQUcpIGNvbnNvbGUubG9nKFwic3RhdHVzQ29kZTpcIiwgc3RhdHVzQ29kZSxcIiBoZWFkZXJzOlwiLCBoZWFkZXJzLCAgXCIgbXNnUmVzcG9uc2U6XCIsIG1zZ1Jlc3BvbnNlKTtcclxuICAgICAgICAgICAgbGV0IG4gPSBjb250ZW50VHlwZS5zZWFyY2goXCJqc29uXCIpO1xyXG4gICAgICAgICAgICBpZiAobiAhPSAtMSlcclxuICAgICAgICAgICAgICBsZXQgcmVzdWx0ID0gSlNPTi5zdHJpbmdpZnkoSlNPTi5wYXJzZShtc2dSZXNwb25zZSkpO1xyXG4gICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgICAgbGV0IHJlc3VsdCA9IG1zZ1Jlc3BvbnNlO1xyXG4gICAgICAgICAgICBpZiAodGhpcy5wYXJhbUNvbmZpZy5ERUJVR19GTEFHKSBjb25zb2xlLmxvZyhcInJlc3VsdDpcIiArICByZXN1bHQpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgZWxzZVxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBlcnJvciA9IHN0YXR1c0NvZGU7XHJcbiAgICAgICAgICAgIGxldCBtc2dSZXNwb25zZSA9IHJlcy5ib2R5LnRvU3RyaW5nKCk7XHJcbiAgICAgICAgICAgIG1zZyA9IG1zZ1Jlc3BvbnNlO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGVycm9yID09IDApXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgaWYgKCAoaG9zdE1hcERlZiAhPSBudWxsKSAmJiAgKGhvc3RNYXBEZWYuWFNMVF9SRUNFSVZFICE9IG51bGwpICYmIChob3N0TWFwRGVmLlhTTFRfUkVDRUlWRSAhPSBcIlwiKSApXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAvL3Jlc3VsdCA9IHhzbHRtYXAubWFwRGF0YU91dChyZXN1bHQsIGhvc3RNYXBEZWYuWFNMVF9SRUNFSVZFKTtcclxuICAgICAgICAgICAgICAvL2lmICh0aGlzLnBhcmFtQ29uZmlnLkRFQlVHX0ZMQUcpIGNvbnNvbGUubG9nKFwicmVzdWx0OlwiLCByZXN1bHQpO1xyXG5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIGxldCBzdGF0dXMgPSBleHRyYWN0U3RhdHVzIChydWxlTG9nLCByZXN1bHQpO1xyXG4gICAgICAgICAgTG9nUnVsZShydWxlTG9nLCByZXN1bHQsIHN0YXR1cyApO1xyXG4gICAgICAgICAgZXJyb3IgPSBzdGF0dXM7XHJcbiAgICAgICAgICBpZiAoc3RhdHVzICE9IDApXHJcbiAgICAgICAgICAgIG1zZyA9IHJlc3VsdDtcclxuICAgICAgICB9XHJcbiAgICAgICAgKi9cclxuXHJcblxyXG5cclxuICAgICAgfVxyXG4gICAgICBlbHNlIHtcclxuICAgICAgICAvL2FzeW5jXHJcbiAgICAgICAgZnVuY3Rpb24gZXh0cmFjdFN0YXR1cyhydWxlTG9nOmFueSwgbXNnUmVzcG9uc2U6YW55KSB7XHJcbiAgICAgICAgICBsZXQgc3VjY2Vzc01zZyA9IHJ1bGVMb2cuaG9zdERlZi5TVUNDRVNTX01TRztcclxuICAgICAgICAgIFxyXG4gICAgICAgICAgICAvL2NvbnNvbGUubG9nKFwiLS0tLS0tLW1zZ1Jlc3BvbnNlOlwiLCBtc2dSZXNwb25zZSwgc3VjY2Vzc01zZyk7XHJcbiAgICAgICAgICBsZXQgYXJyYXkgPSBzdWNjZXNzTXNnLnNwbGl0KFwiOlwiKTtcclxuICAgICAgICAgIGxldCBmaWVsZCA9IGFycmF5WzBdO1xyXG4gICAgICAgICAgbGV0IHZhbHVlID0gYXJyYXlbMV07XHJcblxyXG4gICAgICAgICAgbGV0IG1zZ1Jlc3BvbnNlQXJyID0gbXNnUmVzcG9uc2U7XHJcbiAgICAgICAgICBtc2dSZXNwb25zZSA9IEpTT04uc3RyaW5naWZ5KG1zZ1Jlc3BvbnNlQXJyKTtcclxuICAgICAgICAgIFxyXG4gICAgICAgICAgLy9jb25zb2xlLmxvZyhcImZpZWxkOlwiLCBmaWVsZCwgXCIgdmFsdWU6XCIsIHZhbHVlLCBcIiBtc2dSZXNwb25zZUFycjpcIiwgbXNnUmVzcG9uc2VBcnIpO1xyXG4gICAgICAgICAgLy9jb25zb2xlLmxvZyhcIi0tLS0tLS1tc2dSZXNwb25zZUFycltmaWVsZF06XCIsIG1zZ1Jlc3BvbnNlQXJyW2ZpZWxkXSwgdmFsdWUpO1xyXG4gICAgICAgICAgbGV0IHN0YXR1cyA9IDE7XHJcbiAgICAgICAgICBpZiAobXNnUmVzcG9uc2VBcnJbZmllbGRdID09IHZhbHVlKVxyXG4gICAgICAgICAgICBzdGF0dXMgPSAwO1xyXG4gICAgICAgICAgcmV0dXJuIHN0YXR1cztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGZ1bmN0aW9uIGV4dHJhY3RSZXNwb25zZURhdGEobXNnUmVzcG9uc2U6YW55LCByZXNwb25zZURhdGFJRDphbnkpIHtcclxuICAgICAgICAgIGZ1bmN0aW9uIGdldEtleShFbG06YW55LCBlbG1WYWw6YW55KSB7XHJcbiAgICAgICAgICAgICAgIGxldCBrZXlzID0gT2JqZWN0LmtleXMoRWxtKTtcclxuICAgICAgICAgICAgbGV0IGsgPSAwO1xyXG4gICAgICAgICAgICAgICBsZXQgZWxtT2JqO1xyXG4gICAgICAgICAgICB3aGlsZSAoayA8IGtleXMubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhcIltrZXlzW2tdOlwiLCBrZXlzW2tdKTtcclxuICAgICAgICAgICAgICBpZiAoa2V5c1trXSA9PSBlbG1WYWwpIHtcclxuICAgICAgICAgICAgICAgICAgbGV0IGVsbU5hbWUgPSBrZXlzW2tdO1xyXG4gICAgICAgICAgICAgICAgICBlbG1PYmogPSBFbG1bZWxtTmFtZV07XHJcbiAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKFwiZWxtT2JqOlwiLCBlbG1PYmopO1xyXG4gICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGsrKztcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgcmV0dXJuIGVsbU9iajtcclxuICAgICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgICAgICBsZXQgYXJyYXkgPSByZXNwb25zZURhdGFJRC5zcGxpdChcIi5cIik7XHJcbiAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFycmF5Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGxldCByZXR1cm5LZXkgPSBnZXRLZXkobXNnUmVzcG9uc2UsIGFycmF5W2ldKVxyXG4gICAgICAgICAgICAvL2NvbnNvbGUubG9nKFwicmV0dXJuS2V5Lmxlbmd0aDpcIiwgcmV0dXJuS2V5Lmxlbmd0aCk7XHJcbiAgICAgICAgICAgIGlmIChyZXR1cm5LZXkubGVuZ3RoID09IDEpXHJcbiAgICAgICAgICAgICAgbXNnUmVzcG9uc2UgPSByZXR1cm5LZXlbMF07XHJcbiAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAgICBtc2dSZXNwb25zZSA9IHJldHVybktleTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIC8vY29uc29sZS5sb2coXCJtc2dSZXNwb25zZTpcIiwgbXNnUmVzcG9uc2UpO1xyXG5cclxuICAgICAgICAgIH1cclxuICAgICAgICAgIHJldHVybiBtc2dSZXNwb25zZTtcclxuXHJcblxyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qXHJcbiAgICAgICAgZnVuY3Rpb24gIGhhbmRsZVJlc3BvbnNlRW5kKHJ1bGVMb2csIG1zZ1Jlc3BvbnNlKXtcclxuICAgICAgICAgIGxldCBzdGF0dXMgPSBleHRyYWN0U3RhdHVzIChydWxlTG9nLCBtc2dSZXNwb25zZSk7XHJcbiAgICAgICAgICB0aGlzLkxvZ1J1bGUocnVsZUxvZywgbXNnUmVzcG9uc2UsIHN0YXR1cyk7XHJcblxyXG5cclxuICAgICAgICAgIC8vXHQuUlVMRV9JRCArIFwiLFwiICsgIGFjdGlvbi5BQ1RJT05fSUQgKyBcIixcIiArIHVzZXJzLmdldFVzZXJOYW1lKCkgKyBcIixcIiAgKyBkYXRlSXNvO1xyXG4gICAgICAgICAgaWYgKHRoaXMucGFyYW1Db25maWcuREVCVUdfRkxBRykgY29uc29sZS5sb2coXCItLS0tLS0taGFuZGxlUmVzcG9uc2U6c3RhdHVzOlwiICwgIHN0YXR1cyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICovXHJcbiAgICAgICAgZnVuY3Rpb24gZ2V0Qm9keShtc2dSZXNwb25zZTphbnkpIHtcclxuICAgICAgICAgIC8vaWYgKHRoaXMucGFyYW1Db25maWcuREVCVUdfRkxBRykgY29uc29sZS5sb2coXCJtc2dSZXNwb25zZTpcIiwgbXNnUmVzcG9uc2UpXHJcbiAgICAgICAgICAvL2lmICh0aGlzLnBhcmFtQ29uZmlnLkRFQlVHX0ZMQUcpIGNvbnNvbGUubG9nKFwibXNnUmVzcG9uc2U6Ym9keVwiLCBtc2dSZXNwb25zZS5ib2R5KVxyXG4gICAgICAgICAgcmV0dXJuIG1zZ1Jlc3BvbnNlLmJvZHlcclxuICAgICAgICB9XHJcbiAgLypcclxuICAgICAgICBsZXQgaGFuZGxlUmVzcG9uc2UgPSBmdW5jdGlvbihyZXNwb25zZSwgIHJ1bGVMb2cpe1xyXG4gICAgICAgICAgbGV0IG1zZ1Jlc3BvbnNlID0gJydcclxuICAgICAgICAgIHJlc3BvbnNlLm9uKCdkYXRhJywgZnVuY3Rpb24gKGNodW5rKSB7XHJcbiAgICAgICAgICBtc2dSZXNwb25zZSArPSBjaHVuaztcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgcmVzcG9uc2Uub24oJ2VuZCcsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICBoYW5kbGVSZXNwb25zZUVuZChydWxlTG9nLCBtc2dSZXNwb25zZSk7XHJcbiAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIH1cclxuICAgICAgICAqL1xyXG5cclxuICAgICAgICBsZXQgaGVhZGVycyA9IHtcclxuICAgICAgICAgIGhlYWRlcnM6IG5ldyBIdHRwSGVhZGVycygpXHJcbiAgICAgICAgICAgIC5zZXQoJ0F1dGhvcml6YXRpb24nLCB0aGlzLlN0ckF1dGgpXHJcbiAgICAgICAgICAgIC5zZXQoJ0NvbnRlbnQtVHlwZScsIFwiYXBwbGljYXRpb24vanNvblwiKVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5wYXJhbUNvbmZpZy5ERUJVR19GTEFHKSBjb25zb2xlLmxvZyhcImhlcmUyOmhlYWRlcnM6XCIsIGhlYWRlcnMpO1xyXG4gICAgICAgIGlmIChib2R5VG9TZW5kID09IFwiXCIpXHJcbiAgICAgICAgICBib2R5VG9TZW5kID0gbnVsbDtcclxuICAgICAgICBsZXQgYm9keVRvU2VuZEtTT04gPSBKU09OLnBhcnNlKGJvZHlUb1NlbmQpO1xyXG4gICAgICAgIGlmICh0aGlzLnBhcmFtQ29uZmlnLkRFQlVHX0ZMQUcpIGNvbnNvbGUubG9nKFwiaGVyZTI6Ym9keVRvU2VuZEtTT046XCIsIGJvZHlUb1NlbmRLU09OKTtcclxuXHJcbiAgICAgICAgbGV0IHVybDogc3RyaW5nID0gaG9zdERlZi5VUkwgKyBwYXJhbWV0ZXJzVG9TZW5kO1xyXG4gICAgICAgIGlmICh0aGlzLnBhcmFtQ29uZmlnLkRFQlVHX0ZMQUcpIGNvbnNvbGUubG9nKFwiLS0tdXJsOlwiLCB1cmwpO1xyXG5cclxuXHJcbiAgICAgICAgY29uc3QgcmVxdWVzdCA9IG5ldyBIdHRwUmVxdWVzdChcclxuICAgICAgICAgIG9wdGlvbnMubWV0aG9kLCB1cmwsIGJvZHlUb1NlbmRLU09OLCBoZWFkZXJzKTtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMucGFyYW1Db25maWcuREVCVUdfRkxBRykgY29uc29sZS5sb2coXCItLS0tLS0tLS0tLS1yZXF1ZXN0OlwiLCByZXF1ZXN0LCBcIiBib2R5VG9TZW5kS1NPTjpcIiwgYm9keVRvU2VuZEtTT04pXHJcbiAgICAgICAgbGV0IG1zZ0JvZHlBbGw6YW55O1xyXG4gICAgICAgIHRoaXMuc3luY0ZsYWcgPSAxO1xyXG4vL2h0dHBzOi8vZGV2ZWxvcHBhcGVyLmNvbS9nZXR0aW5nLXN0YXJ0ZWQtd2l0aC1hbmd1bGFyLWh0dHAtY2xpZW50L1xyXG4gICAgICAgIHRoaXMuaHR0cC5yZXF1ZXN0KHJlcXVlc3QpXHJcbiAgICAgICAgICAgIC5zdWJzY3JpYmUoXHJcbiAgICAgICAgICAgICAgICAocmVzcG9uc2UpID0+IHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5wYXJhbUNvbmZpZy5ERUJVR19GTEFHKSBjb25zb2xlLmxvZyhcIiBjYWxsIHN1Y2Nlc3NmdWwgdmFsdWUgcmV0dXJuZWQgaW4gYm9keVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgcmVzcG9uc2UpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgbGV0IG1zZ0JvZHkgPSBnZXRCb2R5KHJlc3BvbnNlKVxyXG4gICAgICAgICAgICAgIGlmICh0eXBlb2YgbXNnQm9keSAhPT0gXCJ1bmRlZmluZWRcIikge1xyXG4gICAgICAgICAgICAgICAgbXNnQm9keUFsbCA9IG1zZ0JvZHk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLnBhcmFtQ29uZmlnLkRFQlVHX0ZMQUcpIGNvbnNvbGUubG9nKFwibXNnQm9keUFsbDpcIiwgbXNnQm9keUFsbCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICBlcnJvciA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5wYXJhbUNvbmZpZy5ERUJVR19GTEFHKSBjb25zb2xlLmxvZyhcIlBVVCBjYWxsIGluIGVycm9yOlwiLCBlcnJvcik7XHJcbiAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN5bmNGbGFnID0gMDtcclxuICAgICAgICAgICAgICB0aGlzLnNob3dOb3RpZmljYXRpb24oXCJlcnJvclwiLCBcImVycm9yIGNhbGxpbmc6IFwiICsgdXJsICsgXCI6XCIgKyBlcnJvci5lcnJvci5lcnJvcik7XHJcbiAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLnBhcmFtQ29uZmlnLkRFQlVHX0ZMQUcpIGNvbnNvbGUubG9nKFwiVGhlICBvYnNlcnZhYmxlIGlzIG5vdyBjb21wbGV0ZWQ6bXNnQm9keUFsbDpcIiwgbXNnQm9keUFsbCk7XHJcbiAgICAgICAgICAgICAgaWYgKHR5cGVvZiBtc2dCb2R5QWxsICE9PSBcInVuZGVmaW5lZFwiKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgc3RhdHVzID0gZXh0cmFjdFN0YXR1cyhydWxlTG9nLCBtc2dCb2R5QWxsKTtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLnBhcmFtQ29uZmlnLkRFQlVHX0ZMQUcpIGNvbnNvbGUubG9nKFwiLS0tLS0tLXVsZUxvZy5ydWxlOlwiLCBydWxlTG9nLnJ1bGUpO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmIChUcmlnZ2VyID09IFwiUE9TVF9RVUVSWVwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHJlc3BvbnNlRGF0YUlEID0gcnVsZUxvZy5ydWxlLlJFU1BPTlNFX0RBVEFfSUQ7XHJcbiAgICAgICAgICAgICAgICAgIGlmICh0aGlzLnBhcmFtQ29uZmlnLkRFQlVHX0ZMQUcpIGNvbnNvbGUubG9nKFwiVEFCUzpyZXNwb25zZURhdGFJRDpcIiwgcmVzcG9uc2VEYXRhSUQpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgbGV0IHJlc3BvbnNlRGF0YSA9IGV4dHJhY3RSZXNwb25zZURhdGEobXNnQm9keUFsbCwgcmVzcG9uc2VEYXRhSUQpO1xyXG4gICAgICAgICAgICAgICAgICBpZiAodGhpcy5wYXJhbUNvbmZpZy5ERUJVR19GTEFHKSBjb25zb2xlLmxvZyhcIlRBQlM6cmVzcG9uc2VEYXRhOlwiLCByZXNwb25zZURhdGEsIFwicXVlcnlEYXRhOlwiLCBxdWVyeURhdGEpO1xyXG4gICAgICAgICAgICAgICAgICBpZiAodGhpcy5wYXJhbUNvbmZpZy5ERUJVR19GTEFHKSBjb25zb2xlLmxvZyhcIlRBQlM6cnVsZUxvZy5ydWxlLlJFU1BPTlNFX0RBVEFfTkFNRTpcIiwgcnVsZUxvZy5ydWxlLlJFU1BPTlNFX0RBVEFfTkFNRSk7XHJcbiAgICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgcmVzcG9uc2VEYXRhICE9PSBcInVuZGVmaW5lZFwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvYmplY3RbcnVsZUxvZy5ydWxlLlJFU1BPTlNFX0RBVEFfTkFNRV0gPSByZXNwb25zZURhdGE7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5wYXJhbUNvbmZpZy5ERUJVR19GTEFHKSBjb25zb2xlLmxvZyhcIlRBQlM6b2JqZWN0LnRhYnNBUElSZXNwb25zZTpcIiwgb2JqZWN0LnRhYnNBUElSZXNwb25zZSlcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3luY0ZsYWcgPSAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLkxvZ1J1bGUob2JqZWN0LCBydWxlTG9nLCBtc2dCb2R5QWxsLCBzdGF0dXMpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgIC8qXHJcbiAgICAgICAgbGV0IHJlcU5ldyA9IHRoaXMuaHR0cC5yZXF1ZXN0KG9wdGlvbnMsIGZ1bmN0aW9uKHJlc3BvbnNlKXsgaGFuZGxlUmVzcG9uc2UocmVzcG9uc2UsICBydWxlTG9nKTsgfSk7XHJcbiAgICAgICAgcmVxTmV3Lm9uKCdlcnJvcicsIGZ1bmN0aW9uKGVycikge1xyXG4gICAgICAgICAgLy8gSGFuZGxlIGVycm9yXHJcbiAgICAgICAgICBlcnJvciA9IGVycjtcclxuICAgICAgICAgIG1zZyA9IFwiRXJyb3Igc2VuZGluZyB0byBIb3N0IDpcIiArc2VuZFRvIDtcclxuICAgICAgICAgIGlmICh0aGlzLnBhcmFtQ29uZmlnLkRFQlVHX0ZMQUcpIGNvbnNvbGUubG9nKCBtc2cgKyBcIiBFcnJvcjpcIiArIGVyciApO1xyXG4gICAgICAgICAgdGhpcy5Mb2dSdWxlKHJ1bGVMb2csIG1zZyArIFwiIEVycm9yOlwiICsgZXJyLCA0MDAgKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMucGFyYW1Db25maWcuREVCVUdfRkxBRykgY29uc29sZS5sb2coXCJoZXJlMVwiKTtcclxuICAgICAgICByZXFOZXcud3JpdGUoYm9keVRvU2VuZCk7XHJcbiAgICAgICAgaWYgKHRoaXMucGFyYW1Db25maWcuREVCVUdfRkxBRykgY29uc29sZS5sb2coXCJoZXJlMlwiKTtcclxuICAgICAgICByZXFOZXcuZW5kKCk7XHJcbiAgICAgICAgaWYgKHRoaXMucGFyYW1Db25maWcuREVCVUdfRkxBRykgY29uc29sZS5sb2coXCJoZXJlM1wiKTtcclxuICAgICAgICAqL1xyXG4gICAgICB9XHJcblxyXG4gICAgfVxyXG4gICAgbGV0IHN0YXR1c1JlYyA9IHtcclxuICAgICAgc3RhdHVzOiBlcnJvcixcclxuICAgICAgbXNnOiBtc2dcclxuICAgIH07XHJcblxyXG4gICAgLypsZXQgc3RhdHVzID0gMTtcclxuICAgIGlmICghdmFsaWQpe1xyXG4gICAgICBzdGF0dXNSZWMuc3RhdHVzID0gMTtcclxuICAgICAgc3RhdHVzUmVjLm1zZyA9XHJcbiAgICB9Ki9cclxuICAgIGlmICh0aGlzLnBhcmFtQ29uZmlnLkRFQlVHX0ZMQUcpIGNvbnNvbGUubG9nKFwidmFsaWQ6XCIsIHZhbGlkLCBcIiBzdGF0dXM6XCIsIHN0YXR1c1JlYyk7XHJcblxyXG4gICAgcmV0dXJuIChzdGF0dXNSZWMpO1xyXG5cclxuICB9XHJcbiAgcHVibGljIHNlbmRUb1NlcnZlcihvYmplY3Q6YW55LCBhY3Rpb25zQXJyOmFueSwgcXVlcnlEYXRhOmFueSwgcnVsZTphbnksIGFjdGlvbjphbnksIFRyaWdnZXI6YW55LCBob3N0c0FycjphbnksIGhvc3RzTWFwQXJyOmFueSkge1xyXG4gICAgZnVuY3Rpb24gZ2V0RWxtVmFsdWUocGFyYW1EYXRhOmFueSwgcXVlcnlEYXRhOmFueSkge1xyXG4gICAgICBmdW5jdGlvbiBnZXRPUkRFUl9GSUVMRFNEYXRhKHBhcmFtOmFueSwgb3JkZXJGaWVsZHM6YW55KSB7XHJcblx0XHQgICAgICBsZXQgdmFsID0gXCJcIjtcclxuICAgICAgICBpZiAob3JkZXJGaWVsZHMgIT0gXCJcIikge1xyXG5cdFx0ICAgICAgICBsZXQgYXJyYXkgPSBwYXJhbS5zcGxpdChcIi5cIik7XHJcbiAgICAgICAgICB2YXIgYXJyTmFtZSA9IGFycmF5WzBdLnRyaW0oKTtcclxuXHRcdCAgICAgICAgbGV0IGZpZWxkTmFtZSA9IGFycmF5WzFdO1xyXG4gICAgICAgICAgY29uc29sZS5sb2coXCJnZXRFbG1WYWx1ZTpmaWVsZE5hbWU6XCIsIGZpZWxkTmFtZSwgXCIgb3JkZXJGaWVsZHM6XCIsIG9yZGVyRmllbGRzKTtcclxuICAgICAgICAgICAgaWYgKHR5cGVvZiBvcmRlckZpZWxkcyAhPT0gXCJ1bmRlZmluZWRcIil7XHJcbiAgICAgICAgICAgICAgb3JkZXJGaWVsZHMgPSBKU09OLnBhcnNlKG9yZGVyRmllbGRzKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJnZXRFbG1WYWx1ZTpvcmRlckZpZWxkczpcIiwgb3JkZXJGaWVsZHMpO1xyXG4gICAgICAgICAgICB2YXIgZmllbGRzRGF0YSA9IG9yZGVyRmllbGRzW2Fyck5hbWVdO1xyXG4gICAgICAgICAgICAgIHZhbCA9IGZpZWxkc0RhdGFbZmllbGROYW1lXTtcclxuICAgICAgICAgICAgICB9XHJcblx0XHQgICAgICB9XHJcblx0XHRcdHJldHVybiB2YWw7XHJcblx0XHR9XHJcbiAgICAgIGNvbnNvbGUubG9nKFwiZ2V0RWxtVmFsdWU6cGFyYW1EYXRhOlwiLCBwYXJhbURhdGEpO1xyXG5cdFx0XHRsZXQgdmFsID0gcGFyYW1EYXRhO1xyXG4gICAgICB2YXIgbiA9IHBhcmFtRGF0YS5zZWFyY2goXCI6OlwiKTtcclxuXHRcdFx0aWYgKG4gIT0gLTEpXHJcblx0XHRcdHtcclxuICAgICAgICB2YXIgYXJyYXkgPSBwYXJhbURhdGEuc3BsaXQoXCI6OlwiKTtcclxuICAgICAgICBjb25zb2xlLmxvZyggXCJnZXRFbG1WYWx1ZTo6YXJyYXk6XCIgLGFycmF5KTtcclxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGFycmF5Lmxlbmd0aDsgaSsrKVxyXG5cdFx0XHRcdHtcclxuICAgICAgICAgIGlmKCAoaSAhPSAwKSAmJiBhcnJheVtpXSAhPSBcIlwiIClcclxuXHRcdFx0XHRcdHtcclxuICAgICAgICAgICAgdmFyIG4gPSBhcnJheVtpXS5zZWFyY2goXCIgXCIpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyggXCJnZXRFbG1WYWx1ZTo6bjpcIiAsIG4gLCBcImFycmF5W2ldOlwiLCBhcnJheVtpXSk7XHJcblx0XHRcdFx0XHRcdGlmIChuID09IC0xKVxyXG5cdFx0XHRcdFx0XHRcdG4gPSBhcnJheVtpXS5sZW5ndGg7XHJcblx0XHRcdFx0XHRcdGlmIChuICE9IC0xKVxyXG5cdFx0XHRcdFx0XHR7XHJcbiAgICAgICAgICAgICAgdmFyIHBhcmFtID0gYXJyYXlbaV0uc2xpY2UoMCwgbik7XHJcblx0XHRcdFx0XHRcdFx0cGFyYW0gPSBwYXJhbS50cmltKCk7XHJcbiAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJnZXRFbG1WYWx1ZTo6cGFyYW06XCIrcGFyYW0pO1xyXG5cclxuICAgICAgICAgICAgICB2YXIgbiA9IHBhcmFtLmluY2x1ZGVzKFwiLlwiKTtcclxuICAgICAgICAgICAgICBjb25zb2xlLmxvZyggXCJnZXRFbG1WYWx1ZTo6bjpcIiAsIG4pO1xyXG4gICAgICAgICAgICAgIGlmIChuID09IHRydWUpe1xyXG4gICAgICAgICAgICAgICAgdmFsID0gZ2V0T1JERVJfRklFTERTRGF0YShwYXJhbSxxdWVyeURhdGEuT1JERVJfRklFTERTKTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgZWxzZVxyXG5cdFx0XHRcdFx0XHRcdHZhbCA9IHF1ZXJ5RGF0YVtwYXJhbV07XHJcblx0XHRcdFx0XHRcdFx0aWYgKHR5cGVvZiB2YWwgPT0gXCJzdHJpbmdcIilcclxuXHRcdFx0XHRcdFx0XHRcdHZhbCA9IHZhbC50cmltKCk7XHJcbiAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJnZXRFbG1WYWx1ZTo6cGFyYW06XCIgLCBwYXJhbSwgXCIgdmFsOlwiLCB2YWwgKTtcclxuXHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdFx0aWYgKHR5cGVvZiB2YWwgPT0gXCJzdHJpbmdcIilcclxuXHRcdFx0XHR2YWwgPSB2YWwuc3BsaXQoXCInXCIpLmpvaW4oXCJcIik7XHJcblx0XHRcdHJldHVybiB2YWw7XHJcblx0XHR9XHJcbiAgICBmdW5jdGlvbiBnZXRIb3N0KHNlbmRUbzphbnksIGhvc3RzQXJyOmFueSkge1xyXG4gICAgICBsZXQgaSA9IDA7XHJcbiAgICAgIHdoaWxlIChpIDwgaG9zdHNBcnIubGVuZ3RoKSB7XHJcbiAgICAgICAgLy9jb25zb2xlLmxvZyhcIi0tLS0tLS0tLS0taG9zdHNBcnJbaV0uSE9TVF9JRCA6XCIsIGhvc3RzQXJyW2ldLkhPU1RfSUQsIFwiIHNlbmRUbzpcIiwgc2VuZFRvKTtcclxuXHRcdFx0XHRpZiAoaG9zdHNBcnJbaV0uSE9TVF9JRCA9PSBzZW5kVG8pXHJcblx0XHRcdFx0XHRyZXR1cm4gaG9zdHNBcnJbaV07XHJcblx0XHRcdFx0aSsrO1xyXG5cdFx0XHR9XHJcblx0XHRcdHJldHVybiBudWxsO1xyXG5cclxuXHRcdH1cclxuICAgIGZ1bmN0aW9uIGdldEhvc3RNYXAoaG9zdERlZjphbnksIG1hcElEOmFueSwgaG9zdHNNYXBBcnI6YW55KSB7XHJcbiAgICAgIGxldCBpID0gMDtcclxuICAgICAgLy9jb25zb2xlLmxvZyhcIi0tLS0tLS0tLS0tbWFwSUQ6XCIsIG1hcElELCBcIiBob3N0RGVmLk1BUF9JRDpcIiwgaG9zdERlZi5NQVBfSUQpO1xyXG4gICAgICBpZiAoKG1hcElEICE9IG51bGwpICYmIChtYXBJRCAhPSBcIlwiKSkge1xyXG4gICAgICAgIHdoaWxlIChpIDwgaG9zdHNNYXBBcnIubGVuZ3RoKSB7XHJcbiAgICAgICAgICBpZiAoKGhvc3RzTWFwQXJyW2ldLkhPU1RfSUQgPT0gaG9zdERlZi5IT1NUX0lEKSAmJiAobWFwSUQgPT0gaG9zdHNNYXBBcnJbaV0uTUFQX0lEKSlcclxuXHRcdFx0XHRcdFx0cmV0dXJuIGhvc3RzTWFwQXJyW2ldO1xyXG5cdFx0XHRcdFx0aSsrO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0XHRyZXR1cm4gbnVsbDtcclxuXHJcblx0XHR9XHJcbiAgICAgIC8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbiAgICAgIGlmICh0aGlzLnBhcmFtQ29uZmlnLkRFQlVHX0ZMQUcpIGNvbnNvbGUubG9nKFwiKioqKioqKioqKioqKioqKmFjdGlvbnNBcnI6XCIsIGFjdGlvbnNBcnIpO1xyXG4gICAgICBsZXQgc3RhdHVzUmVjO1xyXG4gICAgICBsZXQgc2VuZFRvID0gYWN0aW9uc0Fyci5TRU5EX1RPO1xyXG4gICAgbGV0IHFyeVBhcmFtOmFueSA9IHt9O1xyXG4gICAgbGV0IGhlYWRlclBhcmFtOmFueSA9IHt9O1xyXG4gICAgbGV0IGJvZHlUb1NlbmRBcnI6YW55ID0gW107XHJcbiAgICAgIGxldCBib2R5VG9TZW5kID0gXCJcIjtcclxuICAgICAgbGV0IHBhcmFtZXRlcnNUb1NlbmQgPSBcIlwiO1xyXG4gICAgbGV0IGhvc3REZWYgPSBnZXRIb3N0KHNlbmRUbywgaG9zdHNBcnIpO1xyXG4gICAgbGV0IGhvc3RNYXBEZWYgPSBnZXRIb3N0TWFwKGhvc3REZWYsIGFjdGlvbi5NQVBfSUQsIGhvc3RzTWFwQXJyKTtcclxuICAgICAgaWYgKHRoaXMucGFyYW1Db25maWcuREVCVUdfRkxBRykgY29uc29sZS5sb2coXCJob3N0TWFwRGVmOlwiLCBob3N0TWFwRGVmKTtcclxuXHJcbiAgICAgIGlmICh0aGlzLnBhcmFtQ29uZmlnLkRFQlVHX0ZMQUcpIGNvbnNvbGUubG9nKFwiKioqKmhvc3REZWYuSEVBREVSOlwiLCBob3N0RGVmLkhFQURFUik7XHJcblxyXG4gICAgaWYgKChob3N0RGVmLkhFQURFUiAhPSBudWxsKSAmJiAoaG9zdERlZi5IRUFERVIgIT0gXCJcIikpIHtcclxuICAgICAgICBsZXQgYXJyYXkgPSBob3N0RGVmLkhFQURFUi5zcGxpdChcIlxcblwiKTtcclxuICAgICAgICBpZiAodGhpcy5wYXJhbUNvbmZpZy5ERUJVR19GTEFHKSBjb25zb2xlLmxvZyhcImFycmF5OlwiLCBhcnJheSwgXCIgYXJyYXkubGVuZ3RoOlwiLCBhcnJheS5sZW5ndGgpO1xyXG5cclxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhcnJheS5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgbGV0IGVsZW0gPSBhcnJheVtpXTtcclxuICAgICAgICBpZiAoZWxlbSAhPSBcIlwiKXtcclxuICAgICAgICAgIGxldCBhcnJheVBhcmFtID0gZWxlbS5zcGxpdChcIjpcIik7XHJcbiAgICAgICAgICBsZXQgcGFyYW0gPSBhcnJheVBhcmFtWzBdO1xyXG4gICAgICAgICAgcGFyYW0gPSBwYXJhbS50cmltKCk7XHJcbiAgICAgICAgICBsZXQgcGFyYW1EYXRhID0gYXJyYXlQYXJhbVsxXTtcclxuICAgICAgICAgIHBhcmFtRGF0YSA9IHBhcmFtRGF0YS50cmltKCk7XHJcbiAgICAgICAgICBpZiAodGhpcy5wYXJhbUNvbmZpZy5ERUJVR19GTEFHKSBjb25zb2xlLmxvZyhcInBhcmFtRGF0YTpcIiwgcGFyYW1EYXRhKTtcclxuICAgICAgICAgIHBhcmFtRGF0YSA9IGdldEVsbVZhbHVlKHBhcmFtRGF0YSwgcXVlcnlEYXRhKTtcclxuICAgICAgICAgIGlmICh0aGlzLnBhcmFtQ29uZmlnLkRFQlVHX0ZMQUcpIGNvbnNvbGUubG9nKFwiZ2V0RWxtVmFsdWU6cG9zdCBnZXRFbG1WYWx1ZSBwYXJhbTpcIiwgcGFyYW0sIFwiIHBhcmFtRGF0YTpcIiwgcGFyYW1EYXRhKTtcclxuICAgICAgICAgIGhlYWRlclBhcmFtW3BhcmFtXSA9IHBhcmFtRGF0YTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcblxyXG5cclxuICAgIGlmICgoYWN0aW9uc0Fyci5CT0RZX0RBVEEgIT0gbnVsbCkgJiYgKGFjdGlvbnNBcnIuQk9EWV9EQVRBICE9IFwiXCIpKSB7XHJcbiAgICAgICAgbGV0IGJvZHlEYXRhID0gYWN0aW9uc0Fyci5CT0RZX0RBVEE7XHJcbiAgICAgIGlmICh0aGlzLnBhcmFtQ29uZmlnLkRFQlVHX0ZMQUcpIGNvbnNvbGUubG9nKFwiOnBvc3Q6Ym9keURhdGE6XCIsIGJvZHlEYXRhKTtcclxuICAgICAgbGV0IGFycmF5ID0gYm9keURhdGEuc3BsaXQoXCJcXG5cIik7XHJcbiAgICAgIGlmICh0aGlzLnBhcmFtQ29uZmlnLkRFQlVHX0ZMQUcpIGNvbnNvbGUubG9nKFwiOnBvc3Q6YXJyYXk6XCIsIGFycmF5LCBcIiBhcnJheS5sZW5ndGg6XCIsIGFycmF5Lmxlbmd0aCk7XHJcblxyXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFycmF5Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICBsZXQgZWxlbSA9IGFycmF5W2ldO1xyXG4gICAgICAgIGlmIChlbGVtICE9IFwiXCIpe1xyXG4gICAgICAgICAgbGV0IGFycmF5UGFyYW0gPSBlbGVtLnNwbGl0KFwiPVwiKTtcclxuICAgICAgICAgIGxldCBwYXJhbSA9IGFycmF5UGFyYW1bMF07XHJcbiAgICAgICAgICBwYXJhbSA9IHBhcmFtLnRyaW0oKTtcclxuICAgICAgICAgIGxldCBwYXJhbURhdGEgPSBhcnJheVBhcmFtWzFdO1xyXG4gICAgICAgICAgcGFyYW1EYXRhID0gcGFyYW1EYXRhLnRyaW0oKTtcclxuICAgICAgICAgIGlmICh0aGlzLnBhcmFtQ29uZmlnLkRFQlVHX0ZMQUcpIGNvbnNvbGUubG9nKFwiZ2V0RWxtVmFsdWU6cGFyYW1EYXRhOlwiLCBwYXJhbURhdGEpO1xyXG4gICAgICAgICAgcGFyYW1EYXRhID0gZ2V0RWxtVmFsdWUocGFyYW1EYXRhLCBxdWVyeURhdGEpO1xyXG4gICAgICAgICAgaWYgKHRoaXMucGFyYW1Db25maWcuREVCVUdfRkxBRykgY29uc29sZS5sb2coXCJnZXRFbG1WYWx1ZTpwb3N0MiBwYXJhbTpcIiwgcGFyYW0sIFwiIHBhcmFtRGF0YTpcIiwgcGFyYW1EYXRhKTtcclxuICAgICAgICAgIHFyeVBhcmFtW3BhcmFtXSA9IHBhcmFtRGF0YTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgICAvL2lmICh0aGlzLnBhcmFtQ29uZmlnLkRFQlVHX0ZMQUcpIGNvbnNvbGUubG9nKFwicXJ5UGFyYW06aGVyZVwiKTtcclxuICAgICAgICAvL2lmICh0aGlzLnBhcmFtQ29uZmlnLkRFQlVHX0ZMQUcpIGNvbnNvbGUubG9nKFwicXJ5UGFyYW06XCIsIHFyeVBhcmFtICwgXCIgcXJ5UGFyYW0ubGVuZ3RoIDpcIiwgT2JqZWN0LmtleXMocXJ5UGFyYW0pLmxlbmd0aCk7XHJcbiAgICAgICAgYm9keVRvU2VuZEFyci5wdXNoKHFyeVBhcmFtKTtcclxuICAgICAgICAvL2lmICh0aGlzLnBhcmFtQ29uZmlnLkRFQlVHX0ZMQUcpIGNvbnNvbGUubG9nKFwiLS0taG9zdERlZjpcIiwgaG9zdERlZik7Ly9mdWFkXHJcblxyXG4gICAgICBpZiAoYm9keVRvU2VuZEFyci5sZW5ndGggIT0gMCkge1xyXG4gICAgICAgICAgLyppZiAoIChob3N0TWFwRGVmICE9IG51bGwpICYmICAoaG9zdE1hcERlZi5YU0xUX1NFTkQgIT0gbnVsbCkgJiYgKGhvc3RNYXBEZWYuWFNMVF9TRU5EICE9IFwiXCIpIClcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgIGJvZHlUb1NlbmQgPSB4c2x0bWFwLm1hcERhdGEoYm9keVRvU2VuZEFyciwgaG9zdE1hcERlZi5YU0xUX1NFTkQpO1xyXG5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgeyovXHJcbiAgICAgICAgICAgIGJvZHlUb1NlbmQgPSBKU09OLnN0cmluZ2lmeShib2R5VG9TZW5kQXJyKVxyXG4gICAgICAgICAgLy99XHJcbiAgICAgICAgfVxyXG4gICAgICAvKlxyXG4gICAgICBsZXQgaGV4b3V0ID0gaGV4ZHVtcChib2R5VG9TZW5kLCAxNikgO1xyXG4gICAgICBpZiAodGhpcy5wYXJhbUNvbmZpZy5ERUJVR19GTEFHKSBjb25zb2xlLmxvZyhcImhleG91dDpcIixoZXhvdXQpO1xyXG4gICAgICAqL1xyXG4gICAgICB9XHJcblxyXG4gICAgaWYgKChhY3Rpb25zQXJyLlBBUkFNRVRFUl9EQVRBICE9IG51bGwpICYmIChhY3Rpb25zQXJyLlBBUkFNRVRFUl9EQVRBICE9IFwiXCIpKSB7XHJcbiAgICAgICAgbGV0IHBhcmFtZXRlckRhdGEgPSBhY3Rpb25zQXJyLlBBUkFNRVRFUl9EQVRBO1xyXG4gICAgICAgIGlmICh0aGlzLnBhcmFtQ29uZmlnLkRFQlVHX0ZMQUcpIGNvbnNvbGUubG9nKFwicGFyYW1ldGVyRGF0YTpcIiwgcGFyYW1ldGVyRGF0YSk7XHJcbiAgICAgIGlmICh0aGlzLnBhcmFtQ29uZmlnLkRFQlVHX0ZMQUcpIGNvbnNvbGUubG9nKFwicGFyYW1ldGVyRGF0YS5sZW5ndGg6XCIsIHBhcmFtZXRlckRhdGEubGVuZ3RoKTtcclxuXHJcblxyXG4gICAgICBsZXQgYXJyYXkgPSBwYXJhbWV0ZXJEYXRhLnNwbGl0KFwiXFxuXCIpO1xyXG4gICAgICAgIGlmICh0aGlzLnBhcmFtQ29uZmlnLkRFQlVHX0ZMQUcpIGNvbnNvbGUubG9nKFwiYXJyYXk6XCIsIGFycmF5LCBcIiBhcnJheS5sZW5ndGg6XCIsIGFycmF5Lmxlbmd0aCk7XHJcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYXJyYXkubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgIGxldCBlbGVtID0gYXJyYXlbaV07XHJcbiAgICAgICAgaWYgKGVsZW0gIT0gXCJcIil7XHJcbiAgICAgICAgICBsZXQgYXJyYXlQYXJhbSA9IGVsZW0uc3BsaXQoXCI9XCIpO1xyXG4gICAgICAgICAgbGV0IHBhcmFtID0gYXJyYXlQYXJhbVswXTtcclxuICAgICAgICAgIHBhcmFtID0gcGFyYW0udHJpbSgpO1xyXG4gICAgICAgICAgbGV0IHBhcmFtRGF0YSA9IGFycmF5UGFyYW1bMV07XHJcbiAgICAgICAgICBwYXJhbURhdGEgPSBwYXJhbURhdGEudHJpbSgpO1xyXG4gICAgICAgICAgaWYgKHRoaXMucGFyYW1Db25maWcuREVCVUdfRkxBRykgY29uc29sZS5sb2coXCJnZXRFbG1WYWx1ZTo6cGFyYW1EYXRhOlwiLCBwYXJhbURhdGEpO1xyXG4gICAgICAgICAgcGFyYW1EYXRhID0gZ2V0RWxtVmFsdWUocGFyYW1EYXRhLCBxdWVyeURhdGEpO1xyXG4gICAgICAgICAgaWYgKHRoaXMucGFyYW1Db25maWcuREVCVUdfRkxBRykgY29uc29sZS5sb2coXCJnZXRFbG1WYWx1ZTogcG9zdDM6cGFyYW06XCIsIHBhcmFtLCBcIiBwYXJhbURhdGE6XCIsIHBhcmFtRGF0YSk7XHJcbiAgICAgICAgICBpZiAocGFyYW1ldGVyc1RvU2VuZCA9PSBcIlwiKVxyXG4gICAgICAgICAgICBwYXJhbWV0ZXJzVG9TZW5kID0gXCI/XCIgKyBwYXJhbSArIFwiPVwiICsgcGFyYW1EYXRhO1xyXG4gICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICBwYXJhbWV0ZXJzVG9TZW5kID0gcGFyYW1ldGVyc1RvU2VuZCArIFwiJlwiICsgcGFyYW0gKyBcIj1cIiArIHBhcmFtRGF0YTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgaWYgKHRoaXMucGFyYW1Db25maWcuREVCVUdfRkxBRykgY29uc29sZS5sb2coXCJnZXRFbG1WYWx1ZTogcGFyYW1ldGVyc1RvU2VuZDpcIiwgcGFyYW1ldGVyc1RvU2VuZCk7XHJcbiAgICB9XHJcbiAgICBsZXQgcGF0aEV4dHJhID1cIlwiO1xyXG4gICAgaWYgKCAoYWN0aW9uc0Fyci5FWFRSQV9EQVRBICE9IG51bGwpICYmIChhY3Rpb25zQXJyLkVYVFJBX0RBVEEgIT0gXCJcIikgKVxyXG4gICAgICB7XHJcbiAgICAgICAgbGV0IHBhcmFtZXRlckV4dHJhID0gYWN0aW9uc0Fyci5FWFRSQV9EQVRBO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwicGFyYW1ldGVyRXh0cmE6XCIsIHBhcmFtZXRlckV4dHJhKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhcInBhcmFtZXRlckV4dHJhLmxlbmd0aDpcIixwYXJhbWV0ZXJFeHRyYS5sZW5ndGgpO1xyXG4gICAgICAgIFxyXG5cclxuICAgICAgICBsZXQgYXJyYXkgPSBwYXJhbWV0ZXJFeHRyYS5zcGxpdChcIlxcblwiKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhcImFycmF5OlwiLCBhcnJheSwgXCIgYXJyYXkubGVuZ3RoOlwiLCBhcnJheS5sZW5ndGgpO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYXJyYXkubGVuZ3RoOyBpKyspXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgbGV0IGVsZW0gPSBhcnJheVtpXTtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKFwiZWxlbTpcIiwgZWxlbSk7XHJcbiAgICAgICAgICBsZXQgYXJyYXlQYXJhbSA9IGVsZW0uc3BsaXQoXCI9XCIpO1xyXG4gICAgICAgICAgbGV0IHBhcmFtID0gYXJyYXlQYXJhbVswXTtcclxuICAgICAgICAgIHBhcmFtID0gcGFyYW0udHJpbSgpO1xyXG4gICAgICAgICAgbGV0IHBhcmFtRGF0YSA9IGFycmF5UGFyYW1bMV07XHJcbiAgICAgICAgICBpZiAocGFyYW0gPT0gXCJEQkxPQ1wiKXtcclxuICAgICAgICAgICAgcGF0aEV4dHJhID0gXCImXCIgKyBlbGVtO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcInBhdGhFeHRyYTpcIiwgcGF0aEV4dHJhKVxyXG5cclxuICAgICAgICAgICAgLy9yZXEuX3BhcnNlZFVybC5wYXRoID0gcmVxLl9wYXJzZWRVcmwucGF0aCArIFwiJlwiICsgZWxlbTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgaWYgKHRoaXMucGFyYW1Db25maWcuREVCVUdfRkxBRykgY29uc29sZS5sb2coXCJib2R5VG9TZW5kOlwiLCBib2R5VG9TZW5kKTtcclxuICAgICAgaWYgKHRoaXMucGFyYW1Db25maWcuREVCVUdfRkxBRykgY29uc29sZS5sb2coXCJwYXJhbWV0ZXJzVG9TZW5kOlwiLCBwYXJhbWV0ZXJzVG9TZW5kKTtcclxuXHJcbiAgICBzdGF0dXNSZWMgPSB0aGlzLnBlcmZvcm1IdHRwUG9zdChvYmplY3QsIGJvZHlUb1NlbmQsIHBhcmFtZXRlcnNUb1NlbmQsIHNlbmRUbywgcXVlcnlEYXRhLCBydWxlLCBhY3Rpb24sIFRyaWdnZXIsIGhvc3REZWYsIGhvc3RNYXBEZWYsIGhlYWRlclBhcmFtLCBwYXRoRXh0cmEpO1xyXG4gICAgICBpZiAodGhpcy5wYXJhbUNvbmZpZy5ERUJVR19GTEFHKSBjb25zb2xlLmxvZyhcInBvc3QgcGVyZm9ybUh0dHBQb3N0OiBzdGF0dXM6XCIsIHN0YXR1c1JlYyk7XHJcbiAgICAgIHJldHVybiBzdGF0dXNSZWM7XHJcblxyXG5cclxuXHJcblxyXG5cclxuICB9XHJcbiAgcHVibGljIHBlcmZvcm1BY3Rpb24ob2JqZWN0OmFueSwgcXJ5OmFueSwgcHRyOmFueSwgcXVlcnlEYXRhOmFueSwgcnVsZTphbnksIHJ1bGVzRGVmOmFueSwgVHJpZ2dlcjphbnksIGhvc3RzQXJyOmFueSwgaG9zdHNNYXBBcnI6YW55LCBSVUxFX0lEOmFueSkge1xyXG4gICAgaWYgKHRoaXMucGFyYW1Db25maWcuREVCVUdfRkxBRykgY29uc29sZS5sb2coXCItLS1wZXJmb3JtQWN0aW9uOnJ1bGVzRGVmOlwiLCBydWxlc0RlZik7XHJcbiAgICAgIGxldCBzdGF0dXMgPSAwO1xyXG4gICAgbGV0IHN0YXR1c1JlYyA9IHtcclxuICAgICAgc3RhdHVzOiAwLFxyXG4gICAgICBtc2c6IFwiXCJcclxuICAgICAgfTtcclxuXHJcbiAgICAgIGxldCBhY3Rpb25QdHIgPSBydWxlc0RlZi5hY3Rpb25QdHJzQXJyW3FyeV07XHJcbiAgICBpZiAodHlwZW9mIGFjdGlvblB0ciAhPT0gXCJ1bmRlZmluZWRcIikge1xyXG5cclxuICAgICAgICBpZiAodGhpcy5wYXJhbUNvbmZpZy5ERUJVR19GTEFHKSBjb25zb2xlLmxvZyhcInB0cjpcIiwgcHRyKTtcclxuICAgICAgICBpZiAodGhpcy5wYXJhbUNvbmZpZy5ERUJVR19GTEFHKSBjb25zb2xlLmxvZyhcImFjdGlvblB0cjpcIiwgYWN0aW9uUHRyKTtcclxuICAgICAgbGV0IGkgPSBwdHI7XHJcblxyXG4gICAgICAgIGxldCBwdHIxID0gYWN0aW9uUHRyW2ldO1xyXG4gICAgICBsZXQgcHRyMiA9IGFjdGlvblB0clthY3Rpb25QdHIubGVuZ3RoIC0xXTtcclxuICAgICAgLy8gaWYgKHR5cGVvZiBhY3Rpb25QdHJbaSArIDFdICE9PSBcInVuZGVmaW5lZFwiKVxyXG4gICAgICAvLyAgIHB0cjIgPSBhY3Rpb25QdHJbaSArIDFdO1xyXG4gICAgICAvLyBlbHNlXHJcbiAgICAgIC8vICAgcHRyMiA9IHJ1bGVzRGVmLmFjdGlvbnNBcnIubGVuZ3RoXHJcblxyXG4gICAgICBpZiAodGhpcy5wYXJhbUNvbmZpZy5ERUJVR19GTEFHKSBjb25zb2xlLmxvZyhcInB0cjE6XCIsIHB0cjEsIFwiIHB0cjI6XCIsIHB0cjIpO1xyXG4gICAgICAgIGxldCBqID0gcHRyMTtcclxuICAgICAgLy9sZXQgcnVsZUlEID0gcnVsZXNEZWYuYWN0aW9uc0FycltqXS5SVUxFX0lEO1xyXG4gICAgICBsZXQgcnVsZUlEID0gUlVMRV9JRDtcclxuICAgICAgd2hpbGUgKChqIDw9IHB0cjIpICYmIChzdGF0dXMgPT0gMCkpIHtcclxuICAgICAgICBpZiAocnVsZUlEID09IHJ1bGVzRGVmLmFjdGlvbnNBcnJbal0uUlVMRV9JRClcclxuICAgICAgICAgIHtcclxuICAgICAgICAgIC8vaWYgKHRoaXMucGFyYW1Db25maWcuREVCVUdfRkxBRykgY29uc29sZS5sb2coXCJydWxlc0RlZi5hY3Rpb25zQXJyOlwiLHJ1bGVzRGVmLmFjdGlvbnNBcnJbal0pO1xyXG4gICAgICAgICAgaWYgKChydWxlc0RlZi5hY3Rpb25zQXJyW2pdLkFDVElPTl9DT0RFID09IFwiU0VORFwiKSB8fCAocnVsZXNEZWYuYWN0aW9uc0FycltqXS5BQ1RJT05fQ09ERSA9PSBcIlNFTkRfV0FJVFwiKSkge1xyXG4gICAgICAgICAgICBzdGF0dXNSZWMgPSB0aGlzLnNlbmRUb1NlcnZlcihvYmplY3QsIHJ1bGVzRGVmLmFjdGlvbnNBcnJbal0sIHF1ZXJ5RGF0YSwgcnVsZSwgcnVsZXNEZWYuYWN0aW9uc0FycltqXSwgVHJpZ2dlciwgaG9zdHNBcnIsIGhvc3RzTWFwQXJyKTtcclxuICAgICAgICAgICAgc3RhdHVzID0gc3RhdHVzUmVjLnN0YXR1cztcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGVsc2UgaWYgKCBydWxlc0RlZi5hY3Rpb25zQXJyW2pdLkFDVElPTl9DT0RFID09IFwiRVJST1JcIiApIHtcclxuICAgICAgICAgICAgbGV0IHN0YXR1c1JlYyA9e1xyXG4gICAgICAgICAgICAgIHN0YXR1cyA6IC0xLFxyXG4gICAgICAgICAgICAgIG1zZyA6IHJ1bGVzRGVmLmFjdGlvbnNBcnJbal0uQk9EWV9EQVRBXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIHJldHVybiBzdGF0dXNSZWM7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgICAgaisrO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gc3RhdHVzUmVjO1xyXG5cclxuICB9XHJcblxyXG4gIHB1YmxpYyBjaGVja1J1bGVzQnlUcmlnZ2VyKG9iamVjdDphbnksIHJ1bGVzRGVmOmFueSwgcXVlcnlEYXRhOmFueSwgVHJpZ2dlcjphbnksIHJvdXRpbmVfbmFtZTphbnksIGhvc3RzQXJyOmFueSwgaG9zdHNNYXBBcnI6YW55KSB7XHJcbiAgICBpZiAodGhpcy5wYXJhbUNvbmZpZy5ERUJVR19GTEFHKSBjb25zb2xlLmxvZyhcImNoZWNrUnVsZXNCeVRyaWdnZXI6cnVsZXNEZWY6XCIsIHJ1bGVzRGVmLCBcIiBxdWVyeURhdGE6XCIsIHF1ZXJ5RGF0YSwgXCJUcmlnZ2VyOlwiLCBUcmlnZ2VyKTtcclxuICAgIGZ1bmN0aW9uIGdldEZpZWxkRGF0YShydWxlOmFueSwgcXVlcnlEYXRhOmFueSlcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBsZXQgZmllbGREYXRhID0gXCJcIjtcclxuICAgICAgICAgICAgICAgICAgICAgIGxldCBhcnJheSA9IHJ1bGUuRklFTEQuc3BsaXQgKFwiLlwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiYXJyYXk6XCIsYXJyYXkpXHJcbiAgICAgICAgICAgICAgICAgICAgICBpZiAoYXJyYXkubGVuZ3RoID4gMSl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBvcmRlckZpZWxkcyA9IHF1ZXJ5RGF0YVtcIk9SREVSX0ZJRUxEU1wiXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhcIm9yZGVyRmllbGRzOlwiLG9yZGVyRmllbGRzKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodHlwZW9mIG9yZGVyRmllbGRzICE9PSBcInVuZGVmaW5lZFwiKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAob3JkZXJGaWVsZHMgIT0gXCJcIikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGZpZWxkc0RhdGEgPSBKU09OLnBhcnNlKG9yZGVyRmllbGRzKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2coXCJmaWVsZHNEYXRhOlwiLGZpZWxkc0RhdGEpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQga2V5cyA9IE9iamVjdC5rZXlzKGZpZWxkc0RhdGEpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJrZXlzOlwiLGtleXMpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBqID0wOyBqPCBrZXlzLmxlbmd0aDtqKyspe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImFkZE9yZGVyRmllbGRzIGtleTpcIiwga2V5c1tqXSApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoa2V5c1tqXSA9PSBhcnJheVswXSl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IG9iakRhdGEgPSBmaWVsZHNEYXRhW2tleXNbal1dO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2coXCJvYmpEYXRhOlwiLCBvYmpEYXRhICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiAob2JqRGF0YS5sZW5ndGgpID09IFwidW5kZWZpbmVkXCIpICAvLyBpdCBpcyBhIGZvcm0gKG9iamVjdClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmllbGREYXRhID0gb2JqRGF0YVthcnJheVsxXV07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7IC8vIGl0IGlzIGEgZ3JpZCAoYXJyYXkpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodHlwZW9mIChvYmpEYXRhWzBdKSAhPSBcInVuZGVmaW5lZFwiKSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmllbGREYXRhID0gb2JqRGF0YVswXVthcnJheVsxXV07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmaWVsZERhdGEgPSBxdWVyeURhdGFbcnVsZS5GSUVMRF0gO1xyXG4gICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZpZWxkRGF0YTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgIGZ1bmN0aW9uIGNoZWNrUnVsZShydWxlOmFueSwgcXVlcnlEYXRhOmFueSl7XHJcbiAgICAgIGxldCBydWxlTWF0Y2ggPSBmYWxzZTtcclxuICAgICAgLy9pZiAob2JqZWN0LnBhcmFtQ29uZmlnLkRFQlVHX0ZMQUcpIFxyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiY2hlY2tSdWxlIHJ1bGU6XCIsIHJ1bGUsIFwiIHF1ZXJ5RGF0YTpcIiwgcXVlcnlEYXRhKTtcclxuICAgICAgLy9sZXQgZmllbGREYXRhID0gcXVlcnlEYXRhW3J1bGUuRklFTERdO1xyXG4gICAgICBsZXQgZmllbGREYXRhID0gZ2V0RmllbGREYXRhKHJ1bGUsIHF1ZXJ5RGF0YSk7XHJcblxyXG4gICAgICBzd2l0Y2ggKHJ1bGUuT1BFUkFUSU9OKSB7XHJcbiAgICAgICAgY2FzZSBcIj1cIjpcclxuICAgICAgICAgIGlmIChmaWVsZERhdGEgPT0gcnVsZS5GSUVMRF9WQUxVRSkge1xyXG4gICAgICAgICAgcnVsZU1hdGNoID0gdHJ1ZTtcclxuICAgICAgICAgIH1cclxuICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIFwiPFwiOlxyXG4gICAgICAgICAgaWYgKGZpZWxkRGF0YSA8IHJ1bGUuRklFTERfVkFMVUUpIHtcclxuICAgICAgICAgIHJ1bGVNYXRjaCA9IHRydWU7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSBcIjw9XCI6XHJcbiAgICAgICAgICBpZiAoZmllbGREYXRhIDw9IHJ1bGUuRklFTERfVkFMVUUpIHtcclxuICAgICAgICAgIHJ1bGVNYXRjaCA9IHRydWU7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSBcIj5cIjpcclxuICAgICAgICAgIGlmIChmaWVsZERhdGEgPiBydWxlLkZJRUxEX1ZBTFVFKSB7XHJcbiAgICAgICAgICBydWxlTWF0Y2ggPSB0cnVlO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgXCI+PVwiOlxyXG4gICAgICAgICAgaWYgKGZpZWxkRGF0YSA+PSBydWxlLkZJRUxEX1ZBTFVFKSB7XHJcbiAgICAgICAgICBydWxlTWF0Y2ggPSB0cnVlO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgXCI8PlwiOlxyXG4gICAgICAgICAgaWYgKGZpZWxkRGF0YSAhPSBydWxlLkZJRUxEX1ZBTFVFKSB7XHJcbiAgICAgICAgICBydWxlTWF0Y2ggPSB0cnVlO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgXCJJTlNUUlwiOlxyXG4gICAgICAgICAgaWYgKHJ1bGUuRklFTERfVkFMVUUuc2VhcmNoKGZpZWxkRGF0YSkgIT0gLTEpIHtcclxuICAgICAgICAgIHJ1bGVNYXRjaCA9IHRydWU7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICBydWxlTWF0Y2ggPSBmYWxzZTtcclxuICAgICAgfVxyXG4gICAgICBjb25zb2xlLmxvZyhcInRlc3QzOnJ1bGVNYXRjaDpcIiwgcnVsZU1hdGNoLCBcIiBmaWVsZERhdGE6XCIsIGZpZWxkRGF0YSwgXCIgT1BFUkFUSU9OOlwiLCBydWxlLk9QRVJBVElPTiwgXCIgRklFTERfVkFMVUU6XCIsIHJ1bGUuRklFTERfVkFMVUUpO1xyXG4gICAgICByZXR1cm4gcnVsZU1hdGNoO1xyXG5cclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIGNoZWNrU2FtZVRlbXBsYXRlKHJ1bGVQdHJzQXJyLCBxdWVyeURhdGEpIHtcclxuICAgICAgLy9jb25zb2xlLmxvZyhcImNoZWNraW5nIHRlbXBsYXRlIHJ1bGVQdHJzQXJyOlwiLHJ1bGVQdHJzQXJyLCBcIiBxdWVyeURhdGE6XCIsIHF1ZXJ5RGF0YSk7XHJcbiAgICAgIHZhciBzYW1lVGVtcCA9IGZhbHNlO1xyXG4gICAgICBjb25zb2xlLmxvZyhcInJ1bGVQdHJzQXJyLlRFTVBMQVRFX05BTUU6XCIsIHJ1bGVQdHJzQXJyLlRFTVBMQVRFX05BTUUsIFwicXVlcnlEYXRhLlRFTVBMQVRFX05BTUU6XCIsIHF1ZXJ5RGF0YS5URU1QTEFURV9OQU1FLFwiIHJ1bGVQdHJzQXJyLlNFUVVFTkNFX05BTUU6XCIsIHJ1bGVQdHJzQXJyLlNFUVVFTkNFX05BTUUsXCIgcXVlcnlEYXRhLlNFUVVFTkNFX05BTUU6XCIsIHF1ZXJ5RGF0YS5TRVFVRU5DRV9OQU1FLCBxdWVyeURhdGEpXHJcblxyXG4gICAgICBpZiAoIChydWxlUHRyc0Fyci5URU1QTEFURV9OQU1FICE9IFwiXCIpICl7XHJcbiAgICAgICAgaWYgKHJ1bGVQdHJzQXJyLlRFTVBMQVRFX05BTUUgPT0gcXVlcnlEYXRhLlRFTVBMQVRFX05BTUUpIHtcclxuXHJcbiAgICAgICAgICBpZiAoKHJ1bGVQdHJzQXJyLlNFUVVFTkNFX05BTUUgIT0gXCJcIikpICB7XHJcbiAgICAgICAgICAgIGlmIChydWxlUHRyc0Fyci5TRVFVRU5DRV9OQU1FID09IHF1ZXJ5RGF0YS5TRVFVRU5DRV9OQU1FKSB7XHJcbiAgICAgICAgICAgICAgc2FtZVRlbXAgPSB0cnVlO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHNhbWVUZW1wID0gdHJ1ZTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIGVsc2Uge1xyXG4gICAgICAgIHNhbWVUZW1wID0gdHJ1ZTtcclxuICAgICAgXHJcbiAgICAgIH1cclxuICAgICAgLy9jb25zb2xlLmxvZyhcInNhbWVUZW1wOlwiLCBzYW1lVGVtcCk7XHJcbiAgICAgIHJldHVybiBzYW1lVGVtcDtcclxuICAgIH1cclxuICAgIFxyXG5cclxuICAgIGxldCBzdGF0dXMgPSAwO1xyXG4gICAgbGV0IHN0YXR1c1JlYyA9IHtcclxuICAgICAgc3RhdHVzOiAwLFxyXG4gICAgICBtc2c6IFwiXCJcclxuICAgIH07XHJcblxyXG4gICAgbGV0IHFyeSA9IHF1ZXJ5RGF0YS5fUVVFUlk7XHJcbiAgICBpZiAodGhpcy5wYXJhbUNvbmZpZy5ERUJVR19GTEFHKSBjb25zb2xlLmxvZyhcIl9RVUVSWTpcIiwgcXVlcnlEYXRhLl9RVUVSWSwgXCIgcnVsZXNEZWYucnVsZVB0cnNBcnI6XCIsIHJ1bGVzRGVmLnJ1bGVQdHJzQXJyKTtcclxuICAgIGlmICh0aGlzLnBhcmFtQ29uZmlnLkRFQlVHX0ZMQUcpIGNvbnNvbGUubG9nKFwiY2hlY2tpbmcgcnVsZXNEZWYucnVsZVB0cnNBcnI6XCIsIHJ1bGVzRGVmLnJ1bGVQdHJzQXJyKTtcclxuICAgIGxldCBydWxlUHRyID0gcnVsZXNEZWYucnVsZVB0cnNBcnJbcXJ5XTtcclxuICAgIGlmICh0aGlzLnBhcmFtQ29uZmlnLkRFQlVHX0ZMQUcpIGNvbnNvbGUubG9nKFwicnVsZVB0cjpcIiwgcnVsZVB0cik7XHJcbiAgICBpZiAodGhpcy5wYXJhbUNvbmZpZy5ERUJVR19GTEFHKSBjb25zb2xlLmxvZyhcInFyeTpcIiwgcXJ5LCBcIiBydWxlc0RlZi5ydWxlUHRyc0FycjpcIiwgcnVsZXNEZWYucnVsZVB0cnNBcnIsIFwiIHJ1bGVQdHI6XCIsIHJ1bGVQdHIpO1xyXG5cclxuICAgIGlmICh0eXBlb2YgcnVsZVB0ciAhPT0gXCJ1bmRlZmluZWRcIikge1xyXG4gICAgICAvL2xldCBhY3Rpb25QdHIgPSBydWxlc0RlZi5ydWxlUHRyc0FycltxcnldO1xyXG4gICAgICAvL2lmICh0eXBlb2YgYWN0aW9uUHRyICE9PSBcInVuZGVmaW5lZFwiKVxyXG4gICAgICB7XHJcbiAgICAgICAgbGV0IHJlc3VsdCA9IGZhbHNlO1xyXG4gICAgICAgIGxldCBpID0gMDtcclxuXHJcbiAgICAgICAgLy93aGlsZSAoIChpPHJ1bGVQdHIubGVuZ3RoKSAmJiAoc3RhdHVzID09IDApIClcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgICB2YXIgcHRyMSA9IHJ1bGVQdHJbaV07XHJcbiAgICAgICAgICAgICAgdmFyIHB0cjIgPSBydWxlUHRyW3J1bGVQdHIubGVuZ3RoIC0xXTtcclxuICAgICAgICAgICAgICAvLyBpZiAodHlwZW9mIHJ1bGVQdHJbaSsxXSAhPT0gXCJ1bmRlZmluZWRcIilcclxuICAgICAgICAgICAgICAvLyAgICAgdmFyIHB0cjIgPSBydWxlUHRyW2krMV07XHJcbiAgICAgICAgICAgICAgLy8gZWxzZVxyXG4gICAgICAgICAgICAgIC8vICAgICAvL3ZhciBwdHIyID0gcnVsZXNEZWYucnVsZXNBcnIubGVuZ3RoXHJcbiAgICAgICAgICAgIC8vICAgICB2YXIgcHRyMiA9IHB0cjFcclxuXHJcbiAgICAgICAgICAgIGlmICh0aGlzLnBhcmFtQ29uZmlnLkRFQlVHX0ZMQUcpIGNvbnNvbGUubG9nKFwiSXRlbTpwdHIxOlwiLHB0cjEsIFwiIHB0cjI6XCIsIHB0cjIpO1xyXG4gICAgICAgICAgICAgIHZhciBqID0gcHRyMTtcclxuICAgICAgICAgICAgICB2YXIgcnVsZU1hdGNoID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgdmFyIEZPVU5EX1JVTEVfSUQ9XCJcIjtcclxuICAgICAgICAgICAgICB3aGlsZSAoIGogPD0gcHRyMilcclxuICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5wYXJhbUNvbmZpZy5ERUJVR19GTEFHKSBjb25zb2xlLmxvZyhcInJ1bGVzRGVmLnJ1bGVzQXJyOlwiLCBydWxlc0RlZi5ydWxlc0FycltqXS5SVUxFX0lELCBcIiBpdGVtOlwiLCBydWxlc0RlZi5ydWxlc0FycltqXS5JVEVNKTtcclxuICAgICAgICAgICAgICAgICAgbGV0IHNhbWVUZW1wbGF0ZSA9IGNoZWNrU2FtZVRlbXBsYXRlKHJ1bGVzRGVmLnJ1bGVzQXJyW2pdLHF1ZXJ5RGF0YSApO1xyXG4gICAgICAgICAgICAgICAgICBpZiAodGhpcy5wYXJhbUNvbmZpZy5ERUJVR19GTEFHKSBjb25zb2xlLmxvZyhcInJ1bGVzRGVmLnJ1bGVzQXJyOlwiLCBydWxlc0RlZi5ydWxlc0FycltqXS5SVUxFX0lELCBcIiBpdGVtOlwiLCBydWxlc0RlZi5ydWxlc0FycltqXS5JVEVNLCBcIiBzYW1lVGVtcGxhdGU6XCIsIHNhbWVUZW1wbGF0ZSk7ICBcclxuICAgICAgICAgICAgICAgICAgaWYgKHNhbWVUZW1wbGF0ZSl7XHJcbiAgICAgICAgICAgICAgICAgICBydWxlTWF0Y2ggPSBjaGVja1J1bGUocnVsZXNEZWYucnVsZXNBcnJbal0sIHF1ZXJ5RGF0YSk7XHJcbiAgICAgICAgICAgICAgICAgIGlmIChydWxlTWF0Y2ggPT0gZmFsc2UpXHJcbiAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgICAgICAgICAgICBGT1VORF9SVUxFX0lEID0gcnVsZXNEZWYucnVsZXNBcnJbal0uUlVMRV9JRDtcclxuICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgaisrO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImNoZWNrUnVsZXNCeVRyaWdnZXI6Q29uZGl0aW9ucyBydWxlTWF0Y2g6XCIsIHJ1bGVNYXRjaCwgXCIgZm9yIHJ1bGU6XCIsIEZPVU5EX1JVTEVfSUQpO1xyXG4gICAgICAgICAgICAgIGlmIChydWxlTWF0Y2ggPT0gdHJ1ZSlcclxuICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgIC8vc3RhdHVzUmVjID0gcGVyZm9ybUFjdGlvbihkYixyZXEsIHFyeSwgaSwgcXVlcnlEYXRhLCBydWxlc0RlZi5ydWxlc0FycltwdHIxXSxydWxlc0RlZiwgVHJpZ2dlciApO1xyXG4gICAgICAgICAgICAgICAgICBzdGF0dXNSZWMgPSB0aGlzLnBlcmZvcm1BY3Rpb24oICBvYmplY3QsIHFyeSwgaSwgcXVlcnlEYXRhLCBydWxlc0RlZi5ydWxlc0FycltwdHIxXSxydWxlc0RlZiwgVHJpZ2dlciAsaG9zdHNBcnIsIGhvc3RzTWFwQXJyLCBGT1VORF9SVUxFX0lEKTtcclxuICAgICAgICAgICAgICAgICAgc3RhdHVzID0gc3RhdHVzUmVjLnN0YXR1cztcclxuXHJcbiAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAvL2lmIChydWxlTWF0Y2ggPT0gZmFsc2UpXHJcbiAgICAgICAgICAgICAgLy8gIGJyZWFrO1xyXG4gICAgICAgICAgICAgIGkrKztcclxuICAgICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuXHJcbiAgICB9XHJcbiAgICByZXR1cm4gc3RhdHVzUmVjO1xyXG4gIH1cclxuICBwdWJsaWMgY2hlY2tIYXNSdWxlcyAocnVsZXNEZWY6YW55LCBxcnk6YW55ICxUcmlnZ2VyOmFueSlcclxuICB7XHJcbiAgICBsZXQgZm91bmQgPSBmYWxzZTtcclxuICAgIC8vY29uc29sZS5sb2coXCJjaGVja0hhc1J1bGVzOnFyeTpcIixxcnksICBUcmlnZ2VyKVxyXG4gICAgICB2YXIgYWN0aW9uUHRyID0gcnVsZXNEZWYuYWN0aW9uUHRyc0FycltxcnldO1xyXG4gICAgICBpZiAodHlwZW9mIGFjdGlvblB0ciAhPT0gXCJ1bmRlZmluZWRcIilcclxuICAgICAge1xyXG4gICAgICAgIC8vY29uc29sZS5sb2coXCJjaGVja0hhc1J1bGVzOnFyeTpcIixUcmlnZ2VyLCBxcnksICBhY3Rpb25QdHIpXHJcbiAgICAgICAgZm91bmQgPSB0cnVlO1xyXG4gICAgICB9XHJcbiAgICAgcmV0dXJuIGZvdW5kO1xyXG5cclxuXHJcbiAgfVxyXG5cclxuICBwdWJsaWMgY2hlY2tSdWxlcyhvYmplY3Q6YW55LCBydWxlc0RlZjphbnksIGFjdHVhbFJlc3VsdDphbnksIFRyaWdnZXI6YW55KSB7XHJcbiAgICB2YXIgc3RhdHVzUmVjOmFueSA9IHt9O1xyXG4gICAgaWYodGhpcy5wYXJhbUNvbmZpZy5pc0NoZWNrUnVsZXMgPT0gZmFsc2UpXHJcbiAgICAgIHJldHVybiBzdGF0dXNSZWM7XHJcblxyXG4gICAgLy9yZXR1cm47XHJcblxyXG5cclxuICAgIGlmICh0aGlzLnBhcmFtQ29uZmlnLkRFQlVHX0ZMQUcpIGNvbnNvbGUubG9nKFwiY2hlY2tSdWxlczpcIiwgVHJpZ2dlciwgXCIgcm91dGluZV9uYW1lOlwiLCB0aGlzLnJvdXRpbmVfbmFtZSwgXCIgYWN0dWFsUmVzdWx0OlwiLCBhY3R1YWxSZXN1bHQpXHJcblxyXG4gICAgaWYgKFRyaWdnZXIgPT0gXCJQT1NUX1FVRVJZXCIpIHtcclxuICAgICAgaWYgKHR5cGVvZiBhY3R1YWxSZXN1bHQuZGF0YVswXSAhPT0gXCJ1bmRlZmluZWRcIikge1xyXG4gICAgICAgIGxldCB0cmFuc0RhdGEgPSBhY3R1YWxSZXN1bHQuZGF0YVswXS5kYXRhO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdHJhbnNEYXRhLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICBpZiAodGhpcy5wYXJhbUNvbmZpZy5ERUJVR19GTEFHKSBjb25zb2xlLmxvZyhcImNoZWNrUnVsZXM6dHJhbnNEYXRhW2ldOlwiLCB0cmFuc0RhdGFbaV0sIGkpO1xyXG4gICAgICAgICAgaWYgKHRoaXMucGFyYW1Db25maWcuREVCVUdfRkxBRykgY29uc29sZS5sb2coXCJjaGVja1J1bGVzOmFjdHVhbFJlc3VsdC5kYXRhWzBdLnF1ZXJ5OlwiLCBhY3R1YWxSZXN1bHQuZGF0YVswXS5xdWVyeSlcclxuICAgICAgICAgIGlmICh0aGlzLnBhcmFtQ29uZmlnLkRFQlVHX0ZMQUcpIGNvbnNvbGUubG9nKFwiY2hlY2tSdWxlczphY3R1YWxSZXN1bHQuZGF0YVswXSBIRiBwbGVhc2VcIiwgYWN0dWFsUmVzdWx0LmRhdGFbMF0uZGF0YSk7XHJcbiAgICAgICAgICBsZXQgcXVlcnlEYXRhID0gdHJhbnNEYXRhW2ldO1xyXG4gICAgICAgICAgXHJcbiAgICAgICAgICBxdWVyeURhdGFbXCJfUVVFUllcIl0gPSBhY3R1YWxSZXN1bHQuZGF0YVswXS5xdWVyeTtcclxuICAgICAgICAgIC8vICAgICAgIGlmICh0aGlzLnBhcmFtQ29uZmlnLkRFQlVHX0ZMQUcpIGNvbnNvbGUubG9nKFwicXVlcnlEYXRhOlwiLCBxdWVyeURhdGEpXHJcbiAgICAgICAgICBsZXQgZm91bmRSdWxlID0gdGhpcy5jaGVja0hhc1J1bGVzKHJ1bGVzRGVmLCBxdWVyeURhdGFbJ19RVUVSWSddLCBcIlBPU1RfUVVFUllcIik7XHJcbiAgICAgICAgICBpZiAoZm91bmRSdWxlKXtcclxuICAgICAgICAgICAgICBzdGF0dXNSZWMgPSB0aGlzLmNoZWNrUnVsZXNCeVRyaWdnZXIob2JqZWN0LCBydWxlc0RlZiwgcXVlcnlEYXRhLCBUcmlnZ2VyLCB0aGlzLnJvdXRpbmVfbmFtZSwgdGhpcy5ob3N0c0FyciwgdGhpcy5ob3N0c01hcEFycik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICAgLy9jb25zb2xlLmxvZyhcInN0YXR1c1JlYzpQT1NUX1FVRVJZOlwiLCBzdGF0dXNSZWMpO1xyXG4gICAgICAgICAgaWYgKHN0YXR1c1JlY1snc3RhdHVzJ10gID09IC0xKXtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgZWxzZSBpZiAoVHJpZ2dlciA9PSBcIlBSRV9RVUVSWVwiKSB7XHJcblxyXG4gICAgICBpZiAodHlwZW9mIGFjdHVhbFJlc3VsdCAhPT0gXCJ1bmRlZmluZWRcIikge1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYWN0dWFsUmVzdWx0Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICBpZiAodGhpcy5wYXJhbUNvbmZpZy5ERUJVR19GTEFHKSBjb25zb2xlLmxvZyhcImFjdHVhbFJlc3VsdFtpXTpcIiwgYWN0dWFsUmVzdWx0W2ldKVxyXG4gICAgICAgICAgbGV0IHF1ZXJ5RGF0YSA9IGFjdHVhbFJlc3VsdFtpXTtcclxuICAgICAgICAgIGlmICh0aGlzLnBhcmFtQ29uZmlnLkRFQlVHX0ZMQUcpIGNvbnNvbGUubG9nKFwicXVlcnlEYXRhOlwiLCBxdWVyeURhdGEpXHJcbiAgICAgICAgICAgICBsZXQgZm91bmRSdWxlID0gdGhpcy5jaGVja0hhc1J1bGVzKHJ1bGVzRGVmLCBxdWVyeURhdGFbJ19RVUVSWSddLCBcIlBSRV9RVUVSWVwiKTtcclxuXHRcdFx0ICAgICAgIGlmIChmb3VuZFJ1bGUpe1xyXG4gICAgICAgICAgICAgICAgc3RhdHVzUmVjID0gdGhpcy5jaGVja1J1bGVzQnlUcmlnZ2VyKG9iamVjdCwgcnVsZXNEZWYsIHF1ZXJ5RGF0YSwgVHJpZ2dlciwgdGhpcy5yb3V0aW5lX25hbWUsIHRoaXMuaG9zdHNBcnIsIHRoaXMuaG9zdHNNYXBBcnIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy5wYXJhbUNvbmZpZy5ERUJVR19GTEFHKSBjb25zb2xlLmxvZyhcImNoZWNrUnVsZXM6RG9uZVwiLCBUcmlnZ2VyLCBcIiByb3V0aW5lX25hbWU6XCIsIHRoaXMucm91dGluZV9uYW1lLCBcIiBhY3R1YWxSZXN1bHQ6XCIsIGFjdHVhbFJlc3VsdCk7XHJcbiAgICByZXR1cm4gc3RhdHVzUmVjO1xyXG5cclxuICB9XHJcbiAgLy8vLy8vLy8vLy8vLy9cclxuICBwdWJsaWMgc3RvcmVBY3Rpb25zUHRycyhhY3Rpb25zOmFueSwgcnVsZXNEZWY6YW55KSB7XHJcbiAgbGV0IGN1cnJlbnRRVUVSWV9ERUYgPSBcIlwiO1xyXG4gIGxldCBjdXJyZW50UlVMRV9JRCA9IFwiXCI7XHJcbiAgICBsZXQgYWN0aW9uUHRyczphbnkgPSBbXTtcclxuXHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFjdGlvbnMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgaWYgKChjdXJyZW50UVVFUllfREVGICE9IGFjdGlvbnNbaV0uUVVFUllfREVGKSAmJiAoY3VycmVudFJVTEVfSUQgIT0gYWN0aW9uc1tpXS5SVUxFX0lEKSkge1xyXG4gICAgICAgIGlmIChpID09IDApXHJcbiAgICAgICAgYWN0aW9uUHRycy5wdXNoKGkpO1xyXG4gICAgICAgIGlmIChjdXJyZW50UVVFUllfREVGICE9IFwiXCIpIHtcclxuICAgICAgICBydWxlc0RlZi5hY3Rpb25QdHJzQXJyW2N1cnJlbnRRVUVSWV9ERUZdID0gYWN0aW9uUHRycztcclxuICAgICAgICBhY3Rpb25QdHJzID0gW107XHJcbiAgICAgICAgYWN0aW9uUHRycy5wdXNoKGkpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAgIGN1cnJlbnRRVUVSWV9ERUYgPSBhY3Rpb25zW2ldLlFVRVJZX0RFRjtcclxuICAgICAgICBjdXJyZW50UlVMRV9JRCA9IGFjdGlvbnNbaV0uUlVMRV9JRDtcclxuICAgICAgLy9pZiAodGhpcy5wYXJhbUNvbmZpZy5ERUJVR19GTEFHKSBjb25zb2xlLmxvZyhcInJ1bGVQdHJzMTpcIixydWxlUHRycyk7XHJcblxyXG4gICAgfVxyXG4gICAgICBlbHNlIGlmICgoY3VycmVudFFVRVJZX0RFRiA9PSBhY3Rpb25zW2ldLlFVRVJZX0RFRikgJiYgKGN1cnJlbnRSVUxFX0lEICE9IGFjdGlvbnNbaV0uUlVMRV9JRCkpIHtcclxuICAgICAgICBjdXJyZW50UlVMRV9JRCA9IGFjdGlvbnNbaV0uUlVMRV9JRDtcclxuICAgICAgYWN0aW9uUHRycy5wdXNoKGkpO1xyXG5cclxuICAgIH1cclxuICAgICAgZWxzZSBpZiAoKGN1cnJlbnRRVUVSWV9ERUYgPT0gYWN0aW9uc1tpXS5RVUVSWV9ERUYpICYmIChjdXJyZW50UlVMRV9JRCA9PSBhY3Rpb25zW2ldLlJVTEVfSUQpKSB7XHJcbiAgICAgICAgYWN0aW9uUHRycy5wdXNoKGkpO1xyXG4gICAgICAgIGN1cnJlbnRSVUxFX0lEID0gYWN0aW9uc1tpXS5SVUxFX0lEO1xyXG4gICAgXHJcbiAgICBcclxuICAgICAgfVxyXG4gICAgICBpZiAodGhpcy5wYXJhbUNvbmZpZy5ERUJVR19GTEFHKSBjb25zb2xlLmxvZyhcImFjdGlvblB0cnMyOlwiLCBhY3Rpb25QdHJzKTtcclxuICB9XHJcbiAgLy9hY3Rpb25QdHJzLnB1c2goaSk7XHJcbiAgcnVsZXNEZWYuYWN0aW9uUHRyc0FycltjdXJyZW50UVVFUllfREVGXSA9IGFjdGlvblB0cnM7XHJcbiAgICBpZiAodGhpcy5wYXJhbUNvbmZpZy5ERUJVR19GTEFHKSBjb25zb2xlLmxvZyhcInJ1bGVzRGVmLmFjdGlvblB0cnNBcnI6XCIsIHJ1bGVzRGVmLmFjdGlvblB0cnNBcnIpO1xyXG59XHJcblxyXG5cclxuXHJcbiAgcHVibGljIHN0b3JlUnVsZXNQdHJzKHJ1bGVzOmFueSwgcnVsZXNEZWY6YW55KSB7XHJcbiAgICAgIGxldCBjdXJyZW50UVVFUllfREVGID0gXCJcIjtcclxuICAgICAgbGV0IGN1cnJlbnRSVUxFX0lEID0gXCJcIjtcclxuICAgIGxldCBydWxlUHRyczphbnkgPSBbXTtcclxuXHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHJ1bGVzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgaWYgKHRoaXMucGFyYW1Db25maWcuREVCVUdfRkxBRykgY29uc29sZS5sb2cocnVsZXNbaV0uUVVFUllfREVGICsgXCIgOiBcIiArIHJ1bGVzW2ldLlJVTEVfSUQgKyBcIiAgICAgICAgICBcIiArIGN1cnJlbnRRVUVSWV9ERUYgKyBcIiA6IFwiICsgY3VycmVudFJVTEVfSUQpO1xyXG4gICAgICBpZiAoKGN1cnJlbnRRVUVSWV9ERUYgIT0gcnVsZXNbaV0uUVVFUllfREVGKSAmJiAoY3VycmVudFJVTEVfSUQgIT0gcnVsZXNbaV0uUlVMRV9JRCkpIHtcclxuICAgICAgICAgIGlmICh0aGlzLnBhcmFtQ29uZmlnLkRFQlVHX0ZMQUcpIGNvbnNvbGUubG9nKFwiIG5vdCBlcXVhbFwiKTtcclxuICAgICAgICBpZiAoaSA9PSAwKVxyXG4gICAgICAgICAgICBydWxlUHRycy5wdXNoKGkpO1xyXG4gICAgICAgIGlmIChjdXJyZW50UVVFUllfREVGICE9IFwiXCIpIHtcclxuICAgICAgICAgIGlmICh0aGlzLnBhcmFtQ29uZmlnLkRFQlVHX0ZMQUcpIGNvbnNvbGUubG9nKFwiLS1zdG9yaW5nIHJ1bGVQdHJzMjpcIiwgcnVsZVB0cnMpO1xyXG4gICAgICAgICAgICBydWxlc0RlZi5ydWxlUHRyc0FycltjdXJyZW50UVVFUllfREVGXSA9IHJ1bGVQdHJzO1xyXG4gICAgICAgICAgICBydWxlUHRycyA9IFtdO1xyXG4gICAgICAgICAgICBydWxlUHRycy5wdXNoKGkpO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICBjdXJyZW50UVVFUllfREVGID0gcnVsZXNbaV0uUVVFUllfREVGO1xyXG4gICAgICAgIGN1cnJlbnRSVUxFX0lEID0gcnVsZXNbaV0uUlVMRV9JRDtcclxuICAgICAgICBpZiAodGhpcy5wYXJhbUNvbmZpZy5ERUJVR19GTEFHKSBjb25zb2xlLmxvZyhcInJ1bGVQdHJzMTpcIixydWxlUHRycyk7XHJcblxyXG4gICAgICAgIH1cclxuICAgICAgZWxzZSBpZiAoKGN1cnJlbnRRVUVSWV9ERUYgPT0gcnVsZXNbaV0uUVVFUllfREVGKSAmJiAoY3VycmVudFJVTEVfSUQgIT0gcnVsZXNbaV0uUlVMRV9JRCkpIHtcclxuICAgICAgICAgIGlmICh0aGlzLnBhcmFtQ29uZmlnLkRFQlVHX0ZMQUcpIGNvbnNvbGUubG9nKFwiIG5vdCBlcXVhbDJcIik7XHJcbiAgICAgICAgICBydWxlUHRycy5wdXNoKGkpO1xyXG4gICAgICAgIGN1cnJlbnRSVUxFX0lEID0gcnVsZXNbaV0uUlVMRV9JRDtcclxuICAgICAgICBpZiAodGhpcy5wYXJhbUNvbmZpZy5ERUJVR19GTEFHKSBjb25zb2xlLmxvZyhcInJ1bGVQdHJzMjpcIiwgcnVsZVB0cnMpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmICggKCBjdXJyZW50UVVFUllfREVGID09IHJ1bGVzW2ldLlFVRVJZX0RFRiApICYmICggY3VycmVudFJVTEVfSUQgPT0gcnVsZXNbaV0uUlVMRV9JRCApIClcclxuICAgICAgICAgIHtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKFwiIGVxdWFsM1wiKTtcclxuICAgICAgICAgICAgcnVsZVB0cnMucHVzaChpKTtcclxuICAgICAgICAgICAgY3VycmVudFJVTEVfSUQgPSBydWxlc1tpXS5SVUxFX0lEIDtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKFwicnVsZVB0cnMzOlwiLHJ1bGVQdHJzKTtcclxuICAgICAgICAgIH1cclxuICAgICAgaWYgKHRoaXMucGFyYW1Db25maWcuREVCVUdfRkxBRykgY29uc29sZS5sb2coXCJydWxlUHRyczQ6XCIsIHJ1bGVQdHJzKTtcclxuICAgICAgfVxyXG4gICAgICAvL3J1bGVQdHJzLnB1c2goaSk7XHJcbiAgICBpZiAodGhpcy5wYXJhbUNvbmZpZy5ERUJVR19GTEFHKSBjb25zb2xlLmxvZyhcInJ1bGVQdHJzNTpcIixydWxlUHRycyk7XHJcbiAgICAgIHJ1bGVzRGVmLnJ1bGVQdHJzQXJyW2N1cnJlbnRRVUVSWV9ERUZdID0gcnVsZVB0cnM7XHJcbiAgICBpZiAodGhpcy5wYXJhbUNvbmZpZy5ERUJVR19GTEFHKSBjb25zb2xlLmxvZyhcInRlc3QzOnJ1bGVzRGVmLnJ1bGVQdHJzQXJyOlwiLCBydWxlc0RlZi5ydWxlUHRyc0Fycik7XHJcbiAgICB9XHJcblxyXG4vLy8vLy8vLy8vLy8vL1xyXG4gIHB1YmxpYyBsb2FkUnVsZXMob2JqZWN0OmFueSkge1xyXG5cclxuICAgIG9iamVjdC5Cb2R5ID0gW107XHJcbiAgICBsZXQgUGFnZSA9IFwiXCI7XHJcbiAgICBsZXQgTmV3VmFsOmFueSA9IHt9O1xyXG4gICAgTmV3VmFsW1wiX1FVRVJZXCJdID0gXCJHRVRfQURNX1JVTEVfREVGX1JVTEVfSVRFTVwiO1xyXG4gICAgTmV3VmFsW1wiUlVMRV9UUklHR0VSXCJdID0gXCJQT1NUX1FVRVJZXCI7XHJcbiAgICBpZiAodGhpcy5wYXJhbUNvbmZpZy5ERUJVR19GTEFHKSBjb25zb2xlLmxvZyhcInRlc3Q6TmV3VmFsOlwiLCBOZXdWYWwpXHJcbiAgICBpZiAodGhpcy5wYXJhbUNvbmZpZy5ERUJVR19GTEFHKSBjb25zb2xlLmxvZyhcInRlc3Q6b2JqZWN0LkJvZHk6XCIsIG9iamVjdC5Cb2R5KVxyXG4gICAgb2JqZWN0LmFkZFRvQm9keShOZXdWYWwpO1xyXG5cclxuICAgIGlmICh0aGlzLnBhcmFtQ29uZmlnLkRFQlVHX0ZMQUcpIGNvbnNvbGUubG9nKFwidGVzdDpvYmplY3QuQm9keTpcIiwgb2JqZWN0LkJvZHkpXHJcbiAgICBOZXdWYWwgPSB7fTtcclxuICAgIE5ld1ZhbFtcIl9RVUVSWVwiXSA9IFwiR0VUX0FETV9SVUxFX0RFRl9SVUxFX0FDVElPTlwiO1xyXG4gICAgTmV3VmFsW1wiUlVMRV9UUklHR0VSXCJdID0gXCJQT1NUX1FVRVJZXCI7XHJcbiAgICBvYmplY3QuYWRkVG9Cb2R5KE5ld1ZhbCk7XHJcblxyXG4gICAgTmV3VmFsID0ge307XHJcbiAgICBOZXdWYWxbXCJfUVVFUllcIl0gPSBcIkdFVF9BRE1fUlVMRV9IT1NUXCI7XHJcbiAgICBOZXdWYWxbXCJIT1NUX0lEXCJdID0gXCIlXCI7XHJcbiAgICBvYmplY3QuYWRkVG9Cb2R5KE5ld1ZhbCk7XHJcblxyXG4gICAgTmV3VmFsID0ge307XHJcbiAgICBOZXdWYWxbXCJfUVVFUllcIl0gPSBcIkdFVF9BRE1fUlVMRV9IT1NUX01BUFwiO1xyXG4gICAgTmV3VmFsW1wiSE9TVF9JRFwiXSA9IFwiJVwiO1xyXG4gICAgTmV3VmFsW1wiTUFQX0lEXCJdID0gXCIlXCI7XHJcbiAgICBvYmplY3QuYWRkVG9Cb2R5KE5ld1ZhbCk7XHJcblxyXG4gICAgdGhpcy5wb3N0KG9iamVjdCwgUGFnZSwgb2JqZWN0LkJvZHkpLnN1YnNjcmliZShyZXN1bHQgPT4ge1xyXG4gICAgICBpZiAodGhpcy5wYXJhbUNvbmZpZy5ERUJVR19GTEFHKSBjb25zb2xlLmxvZyhcInRlc3Q6cmVzdWx0LmRhdGE6XCIsIHJlc3VsdC5kYXRhKTtcclxuXHJcblxyXG4gICAgICB0aGlzLnJ1bGVzUG9zdFF1ZXJ5RGVmLnJ1bGVQdHJzQXJyID0ge307XHJcbiAgICAgIHRoaXMucnVsZXNQb3N0UXVlcnlEZWYuYWN0aW9uUHRyc0FyciA9IFtdO1xyXG5cclxuICAgICAgdGhpcy5zdG9yZVJ1bGVzUHRycyhyZXN1bHQuZGF0YVswXS5kYXRhLCB0aGlzLnJ1bGVzUG9zdFF1ZXJ5RGVmKVxyXG4gICAgICB0aGlzLnJ1bGVzUG9zdFF1ZXJ5RGVmLnJ1bGVzQXJyID0gcmVzdWx0LmRhdGFbMF0uZGF0YTtcclxuXHJcbiAgICAgIHRoaXMuc3RvcmVBY3Rpb25zUHRycyhyZXN1bHQuZGF0YVsxXS5kYXRhLCB0aGlzLnJ1bGVzUG9zdFF1ZXJ5RGVmKTtcclxuICAgICAgdGhpcy5ydWxlc1Bvc3RRdWVyeURlZi5hY3Rpb25zQXJyID0gcmVzdWx0LmRhdGFbMV0uZGF0YTtcclxuICAgICAgaWYgKHRoaXMucGFyYW1Db25maWcuREVCVUdfRkxBRykgY29uc29sZS5sb2coXCJ0ZXN0OnRoaXMucnVsZXNQb3N0UXVlcnlEZWZcIiwgdGhpcy5ydWxlc1Bvc3RRdWVyeURlZilcclxuXHJcbiAgICAgIHRoaXMuaG9zdHNBcnIgPSByZXN1bHQuZGF0YVsyXS5kYXRhO1xyXG4gICAgICB0aGlzLmhvc3RzTWFwQXJyID0gcmVzdWx0LmRhdGFbM10uZGF0YTtcclxuXHJcbiAgICAgIC8vLy8vLy8vLy8vLy8vXHJcbiAgICAgIG9iamVjdC5Cb2R5ID0gW107XHJcbiAgICB9LFxyXG4gICAgZXJyID0+IHtcclxuICAgICAgICBvYmplY3QuQm9keSA9IFtdO1xyXG4gICAgICAgIHRoaXMuc2hvd05vdGlmaWNhdGlvbihcImVycm9yXCIsIFwiZXJyb3I6XCIgKyBlcnIubWVzc2FnZSk7XHJcbiAgICB9KTtcclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vLy8vLy8vLy8vLy8vL1xyXG4gICAgb2JqZWN0LkJvZHkgPSBbXTtcclxuICAgIFBhZ2UgPSBcIlwiO1xyXG5OZXdWYWwgPSB7fTtcclxuTmV3VmFsW1wiX1FVRVJZXCJdID0gXCJHRVRfQURNX1JVTEVfREVGX1JVTEVfSVRFTVwiO1xyXG5OZXdWYWxbXCJSVUxFX1RSSUdHRVJcIl0gPSBcIlBSRV9RVUVSWVwiO1xyXG5pZiAodGhpcy5wYXJhbUNvbmZpZy5ERUJVR19GTEFHKSBjb25zb2xlLmxvZyhcInRlc3Q6TmV3VmFsOlwiLCBOZXdWYWwpXHJcbmlmICh0aGlzLnBhcmFtQ29uZmlnLkRFQlVHX0ZMQUcpIGNvbnNvbGUubG9nKFwidGVzdDpvYmplY3QuQm9keTpcIiwgb2JqZWN0LkJvZHkpXHJcbm9iamVjdC5hZGRUb0JvZHkoTmV3VmFsKTtcclxuXHJcbmlmICh0aGlzLnBhcmFtQ29uZmlnLkRFQlVHX0ZMQUcpIGNvbnNvbGUubG9nKFwidGVzdDpvYmplY3QuQm9keTpcIiwgb2JqZWN0LkJvZHkpXHJcbk5ld1ZhbCA9IHt9O1xyXG5OZXdWYWxbXCJfUVVFUllcIl0gPSBcIkdFVF9BRE1fUlVMRV9ERUZfUlVMRV9BQ1RJT05cIjtcclxuTmV3VmFsW1wiUlVMRV9UUklHR0VSXCJdID0gXCJQUkVfUVVFUllcIjtcclxub2JqZWN0LmFkZFRvQm9keShOZXdWYWwpO1xyXG5cclxuXHJcblxyXG4gICAgdGhpcy5wb3N0KG9iamVjdCwgUGFnZSwgb2JqZWN0LkJvZHkpLnN1YnNjcmliZShyZXN1bHQgPT4ge1xyXG4gIGlmICh0aGlzLnBhcmFtQ29uZmlnLkRFQlVHX0ZMQUcpIGNvbnNvbGUubG9nKFwidGVzdDpyZXN1bHQuZGF0YTpcIiwgcmVzdWx0LmRhdGEpO1xyXG5cclxuLy8vLy8vLy8vLy8vLy9cclxuICAgICAgdGhpcy5ydWxlc1ByZVF1ZXJ5RGVmLnJ1bGVQdHJzQXJyID0ge307XHJcbiAgICAgIHRoaXMucnVsZXNQcmVRdWVyeURlZi5hY3Rpb25QdHJzQXJyID0ge307XHJcblxyXG4gIHRoaXMuc3RvcmVSdWxlc1B0cnMocmVzdWx0LmRhdGFbMF0uZGF0YSwgdGhpcy5ydWxlc1ByZVF1ZXJ5RGVmKVxyXG4gIHRoaXMucnVsZXNQcmVRdWVyeURlZi5ydWxlc0FyciA9IHJlc3VsdC5kYXRhWzBdLmRhdGE7XHJcblxyXG4gICAgICB0aGlzLnN0b3JlQWN0aW9uc1B0cnMocmVzdWx0LmRhdGFbMV0uZGF0YSwgdGhpcy5ydWxlc1ByZVF1ZXJ5RGVmKTtcclxuICB0aGlzLnJ1bGVzUHJlUXVlcnlEZWYuYWN0aW9uc0FyciA9IHJlc3VsdC5kYXRhWzFdLmRhdGE7XHJcbiAgaWYgKHRoaXMucGFyYW1Db25maWcuREVCVUdfRkxBRykgY29uc29sZS5sb2coXCJ0ZXN0OnRoaXMucnVsZXNQcmVRdWVyeURlZlwiLCB0aGlzLnJ1bGVzUHJlUXVlcnlEZWYpXHJcblxyXG5cclxuICAvLy8vLy8vLy8vLy8vL1xyXG4gICAgICBvYmplY3QuQm9keSA9IFtdO1xyXG59LFxyXG5lcnIgPT4ge1xyXG4gICAgICAgIG9iamVjdC5Cb2R5ID0gW107XHJcbiAgICAgICAgdGhpcy5zaG93Tm90aWZpY2F0aW9uKFwiZXJyb3JcIiwgXCJlcnJvcjpcIiArIGVyci5tZXNzYWdlKTtcclxufSk7XHJcblxyXG4gIH1cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG4gIHB1YmxpYyBsa3BDYWNoZT1bXTtcclxuICBwdWJsaWMgZmV0Y2hMb29rdXBzICggb2JqZWN0LGxvb2t1cEFyckRlZil7XHJcbiAgICBsZXQgQm9keSA9W107XHJcbiAgICBmb3IgKGxldCBpPTA7IGk8IGxvb2t1cEFyckRlZi5sZW5ndGg7IGkrKyl7XHJcbiAgICAgIGxldCBOZXdWYWwgPSB7fTtcclxuICAgICAgTmV3VmFsW1wiX1FVRVJZXCJdID0gXCJHRVRfU1RNVFwiO1xyXG4gICAgICBOZXdWYWxbXCJfU1RNVFwiXSAgPSAgbG9va3VwQXJyRGVmW2ldLnN0YXRtZW50O1xyXG4gICAgICBpZiAobG9va3VwQXJyRGVmW2ldLnN0YXRtZW50ICE9IFwiW11cIilcclxuICAgICAgICBCb2R5ID0gdGhpcy5hZGRUb0JvZHkoTmV3VmFsLEJvZHkpO1xyXG4gICAgfVxyXG5cclxuICAgIGxldCBQYWdlID0gIFwiXCI7XHJcbiAgICB0aGlzLnBvc3Qob2JqZWN0LFBhZ2UsQm9keSkuc3Vic2NyaWJlKHJlc3VsdCA9PiB7XHJcbiAgICAgIGZvciAobGV0IGk9MDsgaTwgbG9va3VwQXJyRGVmLmxlbmd0aDsgaSsrKXtcclxuICAgICAgICAvL2lmICh0aGlzLnBhcmFtQ29uZmlnLkRFQlVHX0ZMQUcpIGNvbnNvbGUubG9nKFwicmVzdWx0LmRhdGFbaV0uZGF0YTpcIixyZXN1bHQuZGF0YVtpXS5kYXRhWzBdKVxyXG4gICAgICAgIGlmICAodHlwZW9mIHJlc3VsdC5kYXRhW2ldICE9PSBcInVuZGVmaW5lZFwiKXtcclxuICAgICAgICAgIGlmICAodHlwZW9mIHJlc3VsdC5kYXRhW2ldLmRhdGFbMF0gIT09IFwidW5kZWZpbmVkXCIpe1xyXG4gICAgICAgICAgICAvL2FkZCBlbXB0eSByZWNvcmQgYXQgYmVnaW5pbmcgb2YgdGhlIGFycmF5IGZvciB0aGUgTE9WIGZvciBpbnNlcnQgbmV3IHJlY29yZCBpbiBhIGdyaWQgd29yayBwcm9wZXJseVxyXG4gICAgICAgICAgICBsZXQga2V5cyA9IE9iamVjdC5rZXlzKHJlc3VsdC5kYXRhW2ldLmRhdGFbMF0pO1xyXG4gICAgICAgICAgICBsZXQgZW1wdHlSZWMgPXt9O1xyXG5cclxuICAgICAgICAgICAgbGV0IGhhc1NwYWNlPWZhbHNlO1xyXG4gICAgICAgICAgICAvLyBsZXQgY29kZVR4dCA9IGtleXNbMF07XHJcbiAgICAgICAgICAgIC8vIGxldCBkYXRhU2V0ID0gT2JqZWN0LmFzc2lnbihbXSwgcmVzdWx0LmRhdGFbaV0uZGF0YSk7XHJcblxyXG4gICAgICAgICAgICAvLyBkYXRhU2V0LmZpbmQoZWxlbSA9PntcclxuICAgICAgICAgICAgLy8gICAvL2NvbnNvbGUubG9nKFwiZWxtOlwiLGVsZW0pO1xyXG4gICAgICAgICAgICAvLyAgIGlmIChlbGVtW2NvZGVUeHRdLnRyaW0oKSA9PSBcIlwiKXtcclxuICAgICAgICAgICAgLy8gICAgIGhhc1NwYWNlID0gdHJ1ZTtcclxuICAgICAgICAgICAgLy8gICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgICAgICAvLyAgIH1cclxuICAgICAgICAgICAgLy8gfSk7XHJcblxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgaWYgKCAhaGFzU3BhY2Upe1xyXG4gICAgICAgICAgICBmb3IgKGxldCBrID0wOyBrIDwga2V5cy5sZW5ndGg7IGsrKyl7XHJcbiAgICAgICAgICAgICAgICAvL2lmICh0aGlzLnBhcmFtQ29uZmlnLkRFQlVHX0ZMQUcpIGNvbnNvbGUubG9nKFwiW2tleXNba106XCIsIGtleXNba10pO1xyXG4gICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhcIltrZXlzW2tdOlwiLCBrZXlzW2tdKTtcclxuICAgICAgICAgICAgICAgIGVtcHR5UmVjW2tleXNba11dID0gXCJcIjtcclxuICAgICAgICAgICAgICAgIC8vb2JqZWN0LnByaW1hcktleVJlYWRPbmx5QXJyW2tleXNba11dID0gdmFsdWU7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvL2lmICh0aGlzLnBhcmFtQ29uZmlnLkRFQlVHX0ZMQUcpIGNvbnNvbGUubG9nKFwiZW1wdHlSZWM6XCIsZW1wdHlSZWMpXHJcbiAgICAgICAgICAgIC8vY29uc29sZS5sb2coXCJlbXB0eVJlYzpcIixlbXB0eVJlYyk7XHJcbiAgICAgICAgICAgIHJlc3VsdC5kYXRhW2ldLmRhdGEuc3BsaWNlKDAsMCxlbXB0eVJlYyk7IC8vRnVhZDphZGQgZW1wdHkgcmVjb3JkIGF0IGJlZ2luaW5nIG9mIHRoZSBhcnJheSBmb3IgdGhlIExPViBmb3IgaW5zZXJ0IG5ldyByZWNvcmQgaW4gYSBncmlkIHdvcmsgcHJvcGVybHlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgb2JqZWN0W2xvb2t1cEFyckRlZltpXS5sa3BBcnJOYW1lXSA9IHJlc3VsdC5kYXRhW2ldLmRhdGE7XHJcbiAgICAgICAgLy9pZiAodGhpcy5wYXJhbUNvbmZpZy5ERUJVR19GTEFHKSBjb25zb2xlLmxvZyhcImxvb2t1cEFyckRlZltpXS5sa3BBcnJOYW1lOlwiLCBsb29rdXBBcnJEZWZbaV0ubGtwQXJyTmFtZSwgb2JqZWN0W2xvb2t1cEFyckRlZltpXS5sa3BBcnJOYW1lXSlcclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgfVxyXG4gICAgICBpZiAgKHR5cGVvZiBvYmplY3QuZmV0Y2hMb29rdXBzQ2FsbEJhY2sgIT09IFwidW5kZWZpbmVkXCIpXHJcbiAgICAgICAgb2JqZWN0LmZldGNoTG9va3Vwc0NhbGxCYWNrKCk7XHJcblxyXG4gICAgfSxcclxuICAgIGVyciA9PiB7XHJcbiAgICAgIC8vYWxlcnQgKCdlcnJvcjonICsgZXJyLm1lc3NhZ2UpO1xyXG4gICAgICB0aGlzLnNob3dFcnJvck1zZyhvYmplY3QsIGVycik7XHJcbiAgICB9KTtcclxuICB9XHJcbiAgXHJcbiAgICBwdWJsaWMgcGVyZm9ybVBvc3Qob2JqZWN0OmFueSwgZm46YW55KSB7XHJcbiAgICBsZXQgUGFnZSA9IFwiXCI7XHJcbiAgICB0aGlzLnBvc3Qob2JqZWN0LCBQYWdlLCBvYmplY3QuQm9keSkuc3Vic2NyaWJlKHJlc3VsdCA9PiB7XHJcbiAgICAgIGZuKG9iamVjdCwgcmVzdWx0KTtcclxuICAgICAgb2JqZWN0LkJvZHkgPSBbXTtcclxuICAgIH0sXHJcbiAgICBlcnIgPT4ge1xyXG4gICAgICAvL2FsZXJ0ICgnZXJyb3I6JyArIGVyci5tZXNzYWdlKTtcclxuICAgICAgdGhpcy5zaG93RXJyb3JNc2cob2JqZWN0LCBlcnIpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuXHJcbiAgcHVibGljIHNldENvbXBvbmVudENvbmZpZyhjb21wb25lbnRDb25maWc6YW55LCBzY3JlZW5Db25maWc6YW55KSB7XHJcbiAgICBsZXQga2V5cyA9IE9iamVjdC5rZXlzKGNvbXBvbmVudENvbmZpZyk7XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGtleXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAvL2lmICh0aGlzLnBhcmFtQ29uZmlnLkRFQlVHX0ZMQUcpIGNvbnNvbGUubG9nKCBrZXlzW2ldICsgXCIgXCIgKyBjb21wb25lbnRDb25maWdbIGtleXNbaV0gXSApIDtcclxuICAgICAgaWYgKGNvbXBvbmVudENvbmZpZ1trZXlzW2ldXSAhPSBudWxsKSB7XHJcbiAgICAgICAgc2NyZWVuQ29uZmlnW2tleXNbaV1dID0gY29tcG9uZW50Q29uZmlnW2tleXNbaV1dO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgLy9pZiAodGhpcy5wYXJhbUNvbmZpZy5ERUJVR19GTEFHKSBjb25zb2xlLmxvZyhzY3JlZW5Db25maWcpO1xyXG4gICAgcmV0dXJuIHNjcmVlbkNvbmZpZztcclxuICB9XHJcbiAgcHVibGljIGdldFJvdXRpbmVBdXRoKG1lbnU6YW55LCByb3V0aW5lX25hbWU6YW55KSB7XHJcbiAgICBsZXQgaSA9IDA7XHJcbiAgICBsZXQgcm91dGluZUF1dGg7XHJcbiAgICBsZXQgZm91bmQgPSBmYWxzZTtcclxuICAgIGlmICh0eXBlb2YgbWVudSAhPT0gXCJ1bmRlZmluZWRcIikge1xyXG4gICAgICB3aGlsZSAoaSA8IG1lbnUubGVuZ3RoKSB7XHJcbiAgICAgICAgbGV0IGogPSAwO1xyXG4gICAgICAgIHdoaWxlIChqIDwgbWVudVtpXS5pdGVtcy5sZW5ndGgpIHtcclxuICAgICAgICAgIGlmIChtZW51W2ldLml0ZW1zW2pdLmNob2ljZSA9PSByb3V0aW5lX25hbWUpIHtcclxuICAgICAgICAgICAgcm91dGluZUF1dGggPSBtZW51W2ldLml0ZW1zW2pdO1xyXG4gICAgICAgICAgICBmb3VuZCA9IHRydWU7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgaisrO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoZm91bmQpXHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICBpKys7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGlmICh0aGlzLnBhcmFtQ29uZmlnLkRFQlVHX0ZMQUcpIGNvbnNvbGUubG9nKFwicm91dGluZV9uYW1lOlwiLCByb3V0aW5lX25hbWUsIFwicm91dGluZUF1dGg6XCIsIHJvdXRpbmVBdXRoLCBcIiBtZW51OlwiLCBtZW51KTtcclxuXHJcblxyXG4gICAgcmV0dXJuIChyb3V0aW5lQXV0aCk7XHJcbiAgfVxyXG4gIHB1YmxpYyBhY3RPblBhcmFtQ29uZmlnKG9iamVjdDphbnksIHJvdXRpbmVfbmFtZTphbnkpIHtcclxuICAgIGlmICh0aGlzLnBhcmFtQ29uZmlnLkRFQlVHX0ZMQUcpIGNvbnNvbGUubG9nKFwicm91dGluZV9uYW1lOlwiICsgcm91dGluZV9uYW1lKVxyXG4gICAgbGV0IHBhcmFtQ29uZmlnID0gZ2V0UGFyYW1Db25maWcoKTtcclxuICAgIGxldCBtZW51ID0gcGFyYW1Db25maWcubWVudTtcclxuICAgIGxldCByb3V0aW5lQXV0aCA9IHRoaXMuZ2V0Um91dGluZUF1dGgobWVudSwgcm91dGluZV9uYW1lKTtcclxuXHJcbiAgICBpZiAodHlwZW9mIHJvdXRpbmVBdXRoICE9PSBcInVuZGVmaW5lZFwiKSB7XHJcbiAgICAgIG9iamVjdC50aXRsZSA9IHJvdXRpbmVBdXRoLnRleHQgKyBcIiAoXCIgKyByb3V0aW5lQXV0aC5yb3V0aW5lVmVyICsgXCIpXCI7XHJcbiAgICAgIG9iamVjdC5yb3V0aW5lQXV0aCA9IHJvdXRpbmVBdXRoO1xyXG4gICAgICB0aGlzLnJvdXRpbmVfbmFtZSA9IHJvdXRpbmVfbmFtZTtcclxuICAgICAgaWYgKHRoaXMucGFyYW1Db25maWcuREVCVUdfRkxBRykgY29uc29sZS5sb2coXCJvYmplY3QudGl0bGU6XCIgKyBvYmplY3QudGl0bGUpXHJcbiAgICB9XHJcbiAgICBlbHNlXHJcbiAgICAgIGlmIChyb3V0aW5lX25hbWUgPT0gXCJEU1BFS1lDXCIpIHtcclxuICAgICAgICB0aGlzLnJvdXRpbmVfbmFtZSA9IHJvdXRpbmVfbmFtZTtcclxuICAgICAgfVxyXG4gICAgaWYgKHRoaXMucGFyYW1Db25maWcuREVCVUdfRkxBRykgY29uc29sZS5sb2coXCJ0aGlzLnJvdXRpbmVfbmFtZTpcIiArIHRoaXMucm91dGluZV9uYW1lKVxyXG4gIH1cclxuXHJcbiAgcHVibGljIHNob3dFcnJvck1zZyhvYmplY3Q6YW55LCBzZXJ2ZXJFcnJvcjphbnkpIHtcclxuICAgIGxldCBlcnJvck1zZyA9IFwiXCI7XHJcbiAgICBpZiAodHlwZW9mIHNlcnZlckVycm9yLmVycm9yID09IFwidW5kZWZpbmVkXCIpIHtcclxuICAgICAgIGVycm9yTXNnID0gdGhpcy5zdGFuZGFyZEVycm9yTXNnICsgXCIgOiBcIiArIHNlcnZlckVycm9yO1xyXG4gICAgfVxyXG4gICAgZWxzZVxyXG4gICAgICAgZXJyb3JNc2cgPSB0aGlzLnN0YW5kYXJkRXJyb3JNc2cgKyBcIiA6IFwiICsgc2VydmVyRXJyb3IuZXJyb3IuZXJyb3I7XHJcbiAgICBsZXQgZGlhbG9nU3RydWMgPSB7XHJcbiAgICAgIG1zZzogZXJyb3JNc2csXHJcbiAgICAgIHRpdGxlOiBcIkVycm9yXCIsXHJcbiAgICAgIGluZm86IG51bGwsXHJcbiAgICAgIG9iamVjdDogb2JqZWN0LFxyXG4gICAgICBhY3Rpb246IHRoaXMuT2tBY3Rpb25zLFxyXG4gICAgICBjYWxsYmFjazogbnVsbFxyXG4gICAgfTtcclxuICAgICAgdGhpcy5zaG93Q29uZmlybWF0aW9uKGRpYWxvZ1N0cnVjKTtcclxuXHJcbiAgfVxyXG4gIHB1YmxpYyBzZW5kR2V0Q29tbWFuZCh1cmw6YW55LCBwYWdlOiBzdHJpbmcpOiBPYnNlcnZhYmxlPEdyaWREYXRhUmVzdWx0PiB7XHJcbiAgICBpZiAodGhpcy5wYXJhbUNvbmZpZy5ERUJVR19GTEFHKSBjb25zb2xlLmxvZyhcIiBpbnNpZGUgc2VuZEdldENvbW1hbmRcIilcclxuICAgIGxldCB0aGVVUkwgPSB1cmwgKyBwYWdlO1xyXG4gICAgaWYgKHRoaXMucGFyYW1Db25maWcuREVCVUdfRkxBRykgY29uc29sZS5sb2coXCIgaW5zaWRlIHNlbmRHZXRDb21tYW5kOnRoZVVSTDpcIiwgdGhlVVJMKVxyXG4gICAgdGhpcy5odHRwT3B0aW9ucyA9IHtcclxuICAgICAgaGVhZGVyczogbmV3IEh0dHBIZWFkZXJzKHtcclxuICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG4gICAgICAgICdhdXRob3JpemF0aW9uJzogdGhpcy5TdHJBdXRoXHJcblxyXG4gICAgICB9KVxyXG4gICAgfTtcclxuXHJcbiAgICBpZiAodGhpcy5wYXJhbUNvbmZpZy5ERUJVR19GTEFHKSBjb25zb2xlLmxvZyhcInNlbmRHZXRDb21tYW5kIHRoZVVSTDpcIiArIHRoZVVSTClcclxuICAgIHJldHVybiB0aGlzLmh0dHBcclxuICAgICAgLmdldChgJHt0aGVVUkx9YCwgdGhpcy5odHRwT3B0aW9ucylcclxuICAgICAgICAucGlwZShcclxuICAgICAgICAgICAgY2F0Y2hFcnJvcigoZXJyKSA9PiB7XHJcbiAgICAgICAgICAgICAgaWYgKHRoaXMucGFyYW1Db25maWcuREVCVUdfRkxBRykgY29uc29sZS5sb2coXCJzZXJ2ZXIgZXJyb3I6XCIsIGVyci5tZXNzYWdlKVxyXG4gICAgICAgICAgdGhpcy5zaG93Tm90aWZpY2F0aW9uKFwiZXJyb3JcIiwgXCJlcnJvcjpcIiArIGVyci5tZXNzYWdlKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aHJvd0Vycm9yKGVycik7XHJcbiAgICAgICAgICAgICAgfSksXHJcbiAgICAgICAgICAgIG1hcChyZXNwb25zZSA9PiAoXHJcbiAgICAgICAgICAgICAgPGFueT5yZXNwb25zZVxyXG4gICAgICAgICAgICApKSxcclxuICAgICAgICAgICAgdGFwKCgpID0+IHRoaXMubG9hZGluZyA9IGZhbHNlKVxyXG4gICAgICAgKTtcclxuICB9XHJcbiAgcHVibGljIHBvc3RDb21tYW5kT3B0aW9ucyhPcHRpb25zOmFueSxwYWdlOiBzdHJpbmcsIHVybDphbnksIEJvZHk6YW55KTogT2JzZXJ2YWJsZTxHcmlkRGF0YVJlc3VsdD4ge1xyXG4gICAgLy9pZiAodGhpcy5wYXJhbUNvbmZpZy5ERUJVR19GTEFHKSBjb25zb2xlLmxvZyhcIiBpbnNpZGUgcG9zdENvbW1hbmRcIilcclxuICAgIGxldCB0aGVVUkwgPSB1cmw7IC8vdGhpcy5FUE1FTkdfVVJMICsgcGFnZTtcclxuICAgIGxldCBodHRwT3B0aW9ucyA9IHt9O1xyXG4gICAgaWYgKE9wdGlvbnMgPT0gbnVsbCl7XHJcbiAgICAgICBodHRwT3B0aW9ucyA9IHtcclxuICAgICAgICBoZWFkZXJzOiBuZXcgSHR0cEhlYWRlcnMoe1xyXG4gICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuICAgICAgICAgICdhdXRob3JpemF0aW9uJzogdGhpcy5TdHJBdXRoXHJcbiAgICAgIH0pXHJcbiAgICAgIH07XHJcbiAgICB9XHJcbiAgICBlbHNle1xyXG4gICAgICAgaHR0cE9wdGlvbnMgPSB7XHJcbiAgICAgICAgaGVhZGVyczogbmV3IEh0dHBIZWFkZXJzKFxyXG4gICAgICAgICAgT3B0aW9uc1xyXG4gICAgICAgICAgKVxyXG4gICAgICB9O1xyXG4gICAgfVxyXG4gICAgXHJcblxyXG4gICAgaWYgKHRoaXMucGFyYW1Db25maWcuREVCVUdfRkxBRykgY29uc29sZS5sb2coXCJwb3N0Q29tbWFuZE9wdGlvbnMgdGhlVVJMOlwiICwgdGhlVVJMLCBcIkJvZHk6XCIsQm9keSApXHJcbiAgICByZXR1cm4gdGhpcy5odHRwXHJcbiAgICAgICAgLnBvc3QoYCR7dGhlVVJMfWAsQm9keSwgaHR0cE9wdGlvbnMpXHJcbiAgICAgICAgLnBpcGUoXHJcbiAgICAgICAgICAgIGNhdGNoRXJyb3IoKGVycikgPT4ge1xyXG4gICAgICAgICAgICAgIC8vaWYgKHRoaXMucGFyYW1Db25maWcuREVCVUdfRkxBRykgY29uc29sZS5sb2coXCJzZXJ2ZXIgZXJyb3I6XCIsIGVyci5tZXNzYWdlKVxyXG4gICAgICAgICAgICAgIC8vdGhpcy5zaG93Tm90aWZpY2F0aW9uIChcImVycm9yXCIsXCJlcnJvcjpcIiArIGVyci5tZXNzYWdlKTtcclxuICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKFwiZXJyOlwiLGVycik7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhyb3dFcnJvcihlcnIpO1xyXG4gICAgICAgICAgICAgICAgLy8gdGhyb3dFcnJvcihlcnIpO1xyXG4gICAgICAgICAgICAgICAgLy8gcmV0dXJuIEpTT04uc3RyaW5naWZ5IChlcnIpO1xyXG4gICAgICAgICAgICAgIH0pLFxyXG4gICAgICAgICAgICBtYXAocmVzcG9uc2UgPT4gKFxyXG4gICAgICAgICAgICAgIDxhbnk+cmVzcG9uc2VcclxuICAgICAgICAgICAgKSksXHJcbiAgICAgICAgICAgIGNhdGNoRXJyb3IoZXJyID0+IHsvL0Z1YWQ6Y2hlY2sgaWYgdGhvc2UgMyBsaW5lcyBhcmUgbmVlZGVkXHJcbiAgICAgICAgICAgICAgcmV0dXJuIGVyci5tZXNzYWdlOy8vMlxyXG4gICAgICAgICAgfSksICAgICAgICAgICAgICAgICAgICAvLzNcclxuICAgICAgICAgICAgdGFwKChyZXNwb25zZSkgPT4ge3RoaXMubG9hZGluZyA9IGZhbHNlOyBjb25zb2xlLmxvZyhcInJlc3BvbnNlOlwiLHJlc3BvbnNlKX0pXHJcbiAgICAgICApO1xyXG4gIH1cclxuICBwdWJsaWMgcG9zdENvbW1hbmQocGFnZTogc3RyaW5nLCB1cmw6YW55LCBCb2R5OmFueSk6IE9ic2VydmFibGU8R3JpZERhdGFSZXN1bHQ+IHtcclxuLy9pZiAodGhpcy5wYXJhbUNvbmZpZy5ERUJVR19GTEFHKSBjb25zb2xlLmxvZyhcIiBpbnNpZGUgcG9zdENvbW1hbmRcIilcclxuICAgIGxldCB0aGVVUkwgPSB1cmw7IC8vdGhpcy5FUE1FTkdfVVJMICsgcGFnZTtcclxuICAgIHRoZVVSTCA9IHRoaXMuY2hlY2tEQkxvYyh0aGVVUkwpO1xyXG4gICAgdGhpcy5odHRwT3B0aW9ucyA9IHtcclxuICAgICAgaGVhZGVyczogbmV3IEh0dHBIZWFkZXJzKHtcclxuICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG4gICAgICAgICdhdXRob3JpemF0aW9uJzogdGhpcy5TdHJBdXRoXHJcblxyXG4gICAgICB9KVxyXG4gICAgfTtcclxuXHJcbiAgICAvL2lmICh0aGlzLnBhcmFtQ29uZmlnLkRFQlVHX0ZMQUcpIGNvbnNvbGUubG9nKFwicG9zdENvbW1hbmQgdGhlVVJMOlwiICsgdGhlVVJMKVxyXG4gICAgcmV0dXJuIHRoaXMuaHR0cFxyXG4gICAgICAucG9zdChgJHt0aGVVUkx9YCwgQm9keSwgdGhpcy5odHRwT3B0aW9ucylcclxuICAgICAgICAucGlwZShcclxuICAgICAgICAgICAgY2F0Y2hFcnJvcigoZXJyKSA9PiB7XHJcbiAgICAgICAgICAgICAgLy9pZiAodGhpcy5wYXJhbUNvbmZpZy5ERUJVR19GTEFHKSBjb25zb2xlLmxvZyhcInNlcnZlciBlcnJvcjpcIiwgZXJyLm1lc3NhZ2UpXHJcbiAgICAgICAgICB0aGlzLnNob3dOb3RpZmljYXRpb24oXCJlcnJvclwiLCBcImVycm9yOlwiICsgZXJyLm1lc3NhZ2UpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRocm93RXJyb3IoZXJyKTtcclxuICAgICAgICAgICAgICB9KSxcclxuICAgICAgICAgICAgbWFwKHJlc3BvbnNlID0+IChcclxuICAgICAgICAgICAgICA8YW55PnJlc3BvbnNlXHJcbiAgICAgICAgICAgICkpLFxyXG4gICAgICAgICAgICB0YXAoKCkgPT4gdGhpcy5sb2FkaW5nID0gZmFsc2UpXHJcbiAgICAgICApO1xyXG4gIH1cclxuICBwdWJsaWMgQ2FwaXRhbGl6ZUZpcnN0KHN0cjphbnkpIHtcclxuICAgIHN0ciA9IHN0ci50b0xvd2VyQ2FzZSgpO1xyXG5cclxuICAgIHN0ciA9IHN0ci5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIHN0ci5zbGljZSgxKVxyXG4gICAgcmV0dXJuIHN0cjtcclxuICB9XHJcbiAgcHVibGljIENhcGl0YWxpemVUaXRsZShmaWVsZE5hbWU6YW55KSB7XHJcblxyXG4gIGxldCBhcnJheSA9IGZpZWxkTmFtZS5zcGxpdChcIl9cIik7XHJcbiAgICBpZiAodGhpcy5wYXJhbUNvbmZpZy5ERUJVR19GTEFHKSBjb25zb2xlLmxvZyhcImFycmF5OlwiLCBhcnJheSlcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYXJyYXkubGVuZ3RoOyBpKyspXHJcbiAgICAgIGFycmF5W2ldID0gdGhpcy5DYXBpdGFsaXplRmlyc3QoYXJyYXlbaV0pXHJcblxyXG4gICAgZmllbGROYW1lID0gYXJyYXkuam9pbihcIiBcIik7XHJcbiAgICByZXR1cm4gZmllbGROYW1lO1xyXG4gIH1cclxuICBwdWJsaWMgcHJlcGFyZUxvb2t1cChmaWVsZE5hbWU6YW55LCBwYXJhbUNvbmZpZzphbnkpIHtcclxuXHJcbiAgICBsZXQgbGtwQXJyTmFtZSA9IFwibGtwQXJyXCIgKyBmaWVsZE5hbWU7XHJcbiAgICBsZXQgbGtwRGVmO1xyXG4gICAgaWYgKGZpZWxkTmFtZSA9PSBcIkFTU0lHTkVFXCIpIHtcclxuICAgICAgaWYgKHRoaXMucGFyYW1Db25maWcuREVCVUdfRkxBRykgY29uc29sZS5sb2coXCJzdGFyU2VydmljZXMuc2Vzc2lvblBhcmFtcy5VU0VSX0lORk86XCIsIHRoaXMuc2Vzc2lvblBhcmFtcy5VU0VSX0lORk8pO1xyXG5cclxuICAgICAgbGV0IHRlYW0gPSB0aGlzLnNlc3Npb25QYXJhbXMuVVNFUl9JTkZPLlRFQU07XHJcblxyXG4gICAgICBsa3BEZWYgPSB7XHJcbiAgICAgICAgXCJzdGF0bWVudFwiOiBcInNlbGVjdCBVU0VSTkFNRSBDT0RFLCBGVUxMTkFNRSBDT0RFVEVYVF9MQU5HIGZyb20gIEFETV9VU0VSX0lORk9STUFUSU9OIHdoZXJlIFRFQU0gPSAnXCIgKyB0ZWFtICsgXCInIFwiLFxyXG4gICAgICAgIFwibGtwQXJyTmFtZVwiOiBsa3BBcnJOYW1lLCBcImZpZWxkTmFtZVwiOiBmaWVsZE5hbWVcclxuICAgICAgfTtcclxuXHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgbGtwRGVmID0ge1xyXG4gICAgICAgIFwic3RhdG1lbnRcIjogXCJTRUxFQ1QgQ09ERSwgIENPREVURVhUX0xBTkcgRlJPTSBTT01fVEFCU19DT0RFUyBXSEVSRSBDT0RFTkFNRSA9ICdcIiArIGZpZWxkTmFtZSArIFwiJyBhbmQgTEFOR1VBR0VfTkFNRSA9ICdcIiArIHBhcmFtQ29uZmlnLnVzZXJMYW5nICsgXCInIG9yZGVyIGJ5IENPREVURVhUX0xBTkcgIFwiLFxyXG4gICAgICAgIFwibGtwQXJyTmFtZVwiOiBsa3BBcnJOYW1lLCBcImZpZWxkTmFtZVwiOiBmaWVsZE5hbWVcclxuICAgICAgfTtcclxuICAgIH1cclxuICAgIHJldHVybiBsa3BEZWY7XHJcblxyXG4gIH1cclxuICBwdWJsaWMgZ2V0QXNzaWduZWVTZWxlY3Qob2JqZWN0OmFueSwgYXNzaWduZWVUeXBlOmFueSkge1xyXG4gICAgbGV0IHNlbGVjdFN0bXQ7XHJcblxyXG4gICAgaWYgKGFzc2lnbmVlVHlwZSA9PSBcIlRFQU1cIikge1xyXG4gICAgICBzZWxlY3RTdG10ID0gXCJTRUxFQ1QgQ09ERSwgQ09ERVRFWFRfTEFORyBGUk9NIFNPTV9UQUJTX0NPREVTIFdIRVJFIENPREVOQU1FID0nVEVBTScgYW5kIExBTkdVQUdFX05BTUUgPSAnXCIgKyBvYmplY3QucGFyYW1Db25maWcudXNlckxhbmcgKyBcIicgIG9yZGVyIGJ5IENPREVURVhUX0xBTkcgXCJcclxuICAgIH1cclxuICAgIGVsc2UgaWYgKGFzc2lnbmVlVHlwZSA9PSBcIlBFUlNPTlwiKSB7XHJcbiAgICAgIHNlbGVjdFN0bXQgPSBcIlNFTEVDVCBVU0VSTkFNRSAgQ09ERSwgRlVMTE5BTUUgQ09ERVRFWFRfTEFORyBGUk9NIEFETV9VU0VSX0lORk9STUFUSU9OIFdIRVJFIFRFQU0gPSdcIiArIG9iamVjdC5zdGFyU2VydmljZXMuc2Vzc2lvblBhcmFtcy5VU0VSX0lORk8uVEVBTSArIFwiJyBvcmRlciBieSBDT0RFVEVYVF9MQU5HIFwiXHJcbiAgICB9XHJcbiAgICBlbHNlIGlmIChhc3NpZ25lZVR5cGUgPT0gXCJORVRXT1JLXCIpIHtcclxuICAgICAgc2VsZWN0U3RtdCA9IFwiU0VMRUNUIENPREUsIENPREVURVhUX0xBTkcgRlJPTSBTT01fVEFCU19DT0RFUyBXSEVSRSBDT0RFTkFNRSA9J0VYQ0hfU1lTVCcgYW5kIExBTkdVQUdFX05BTUUgPSAnXCIgKyBvYmplY3QucGFyYW1Db25maWcudXNlckxhbmcgKyBcIicgb3JkZXIgYnkgQ09ERVRFWFRfTEFOR1wiXHJcbiAgICB9XHJcbiAgICByZXR1cm4gc2VsZWN0U3RtdDtcclxuICB9XHJcbiAgcHVibGljIGdldEZpcnN0V2Vla0RheShvYmplY3Q6YW55LCB2YWx1ZTphbnkpIHtcclxuICAgIGxldCB2YWx1ZURhdGU6IERhdGVcclxuICAgIGxldCBmaXJzdFdlZWtEYXk6YW55ID0gRGF5Lk1vbmRheTtcclxuICAgIGlmICh0eXBlb2Ygb2JqZWN0LnBhcmFtQ29uZmlnLmZpcnN0V2Vla0RheSAhPT0gXCJ1bmRlZmluZWRcIikge1xyXG4gICAgICBmaXJzdFdlZWtEYXkgPSBvYmplY3QucGFyYW1Db25maWcuZmlyc3RXZWVrRGF5O1xyXG4gICAgfVxyXG4gICAgdmFsdWVEYXRlID0gZmlyc3REYXlJbldlZWsobmV3IERhdGUodmFsdWUpLCBmaXJzdFdlZWtEYXkpO1xyXG4gICAgdmFsdWVEYXRlID0gZ2V0RGF0ZSh2YWx1ZURhdGUpO1xyXG4gICAgaWYgKHRoaXMucGFyYW1Db25maWcuREVCVUdfRkxBRykgY29uc29sZS5sb2coXCJ2YWx1ZURhdGU6XCIsIHZhbHVlRGF0ZSlcclxuICAgIHJldHVybiB2YWx1ZURhdGU7XHJcblxyXG4gIH1cclxuICBwdWJsaWMgc2V0UlRMKCkge1xyXG4gICAgbGV0IHBhcmFtQ29uZmlnID0gZ2V0UGFyYW1Db25maWcoKTtcclxuICAgIGxldCBsYW5ndWFnZV9uYW1lID0gcGFyYW1Db25maWcudXNlckxhbmc7XHJcbiAgICBsYW5ndWFnZV9uYW1lID0gbGFuZ3VhZ2VfbmFtZS50b0xvd2VyQ2FzZSgpO1xyXG5cclxuICAgIGxldCBwYXJnOmFueSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWFpbnBhZ2VcIik7XHJcbiAgICBjb25zdCBzdmMgPSA8TXlNZXNzYWdlU2VydmljZT50aGlzLm1lc3NhZ2VzO1xyXG4gICAgLy9zdmMubGFuZ3VhZ2VfbmFtZSA9IHN2Yy5sYW5ndWFnZV9uYW1lID09PSAnZXMnID8gJ2hlJyA6ICdlcyc7XHJcbiAgICAvL3N2Yy5sYW5ndWFnZV9uYW1lID0gbGFuZ3VhZ2VfbmFtZTtcclxuICAgIC8vaWYgKHRoaXMucGFyYW1Db25maWcuREVCVUdfRkxBRykgY29uc29sZS5sb2coXCJzZXRSVEw6bGFuZ3VhZ2VfbmFtZTpcIiwgbGFuZ3VhZ2VfbmFtZSlcclxuICAgIGlmIChsYW5ndWFnZV9uYW1lID09IFwiYXJcIikge1xyXG4gICAgICBwYXJnLmRpciA9IFwicnRsXCI7XHJcbiAgICAgIHRoaXMubWVzc2FnZXMubm90aWZ5KHRydWUpO1xyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgIHBhcmcuZGlyID0gXCJsdHJcIjtcclxuICAgICAgdGhpcy5tZXNzYWdlcy5ub3RpZnkoZmFsc2UpO1xyXG4gICAgfVxyXG4gIH1cclxuICBwdWJsaWMgbG9hZExhbmd1YWdlT2xkKGxhbmd1YWdlX25hbWU6YW55KSB7XHJcbiAgICBsYW5ndWFnZV9uYW1lID0gIWxhbmd1YWdlX25hbWUgPyBcImVuXCIgOiBsYW5ndWFnZV9uYW1lXHJcbiAgICBsZXQgZmlsZSA9IFwiYXNzZXRzL2xhbmcvXCIgKyBsYW5ndWFnZV9uYW1lLnRvTG93ZXJDYXNlKCkgKyBcIi5qc29uXCJcclxuICAgIGlmICh0aGlzLnBhcmFtQ29uZmlnLkRFQlVHX0ZMQUcpIGNvbnNvbGUubG9nKFwibG9hZExhbmd1YWdlOmZpbGUsXCIsIGZpbGUpXHJcbiAgICB0aGlzLmh0dHAuZ2V0KGZpbGUpLnN1YnNjcmliZShkYXRhID0+IHtcclxuICAgICAgaWYgKHRoaXMucGFyYW1Db25maWcuREVCVUdfRkxBRykgY29uc29sZS5sb2coXCJsb2FkTGFuZ3VhZ2U6ZGF0YSxcIiwgZGF0YSlcclxuICAgICAgbGV0IHBhcmFtQ29uZmlnID0ge1xyXG4gICAgICAgIFwiTmFtZVwiOiBcInRpdGxlc1wiLFxyXG4gICAgICAgIFwiVmFsXCI6IGRhdGFcclxuICAgICAgfTtcclxuICAgICAgc2V0UGFyYW1Db25maWcocGFyYW1Db25maWcpO1xyXG4gICAgICB0aGlzLnBhcmFtQ29uZmlnID0gZ2V0UGFyYW1Db25maWcoKTtcclxuICAgICAgcGFyYW1Db25maWcgPSB7XHJcbiAgICAgICAgXCJOYW1lXCI6IFwidXNlckxhbmdcIixcclxuICAgICAgICBcIlZhbFwiOiBsYW5ndWFnZV9uYW1lLnRvVXBwZXJDYXNlKClcclxuICAgICAgfTtcclxuICAgICAgc2V0UGFyYW1Db25maWcocGFyYW1Db25maWcpO1xyXG4gICAgICB0aGlzLnNldFJUTCgpO1xyXG5cclxuICAgICAgaWYgKHRoaXMucGFyYW1Db25maWcuREVCVUdfRkxBRykgY29uc29sZS5sb2coXCJkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuZGlyOlwiLCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuZGlyID09ICdsdHInKTtcclxuICAgIH0sXHJcbiAgICBlcnIgPT4ge1xyXG4gICAgICAgIGlmICh0aGlzLnBhcmFtQ29uZmlnLkRFQlVHX0ZMQUcpIGNvbnNvbGUubG9nKFwibG9hZExhbmd1YWdlOmVycixcIiwgZXJyKVxyXG4gICAgICAvL2FsZXJ0ICgnZXJyb3I6JyArIGVyci5tZXNzYWdlKTtcclxuICAgICAgLy90aGlzLnNob3dFcnJvck1zZyhvYmplY3QsIGVycik7XHJcbiAgICB9KVxyXG4gIH1cclxuICBwdWJsaWMgbG9hZExhbmd1YWdlKGxhbmd1YWdlOmFueSl7XHJcbiAgICBsYW5ndWFnZSA9ICFsYW5ndWFnZSA/IFwiZW5cIiA6IGxhbmd1YWdlXHJcbiAgICBsZXQgZmlsZSA9IFwibGFuZy9cIiArIGxhbmd1YWdlLnRvTG93ZXJDYXNlKCkgKyBcIi5qc29uXCJcclxuICAgIGlmICh0aGlzLnBhcmFtQ29uZmlnLkRFQlVHX0ZMQUcpIGNvbnNvbGUubG9nKFwibG9hZExhbmd1YWdlOmZpbGUsXCIsZmlsZSlcclxuICAgIGxldCBwYWdlID0gXCI/Z2V0ZmlsZT1cIiArIGZpbGU7XHJcbiAgICBwYWdlID0gdGhpcy5jaGVja0RCTG9jKHBhZ2UpO1xyXG4gICAgcGFnZSA9IGVuY29kZVVSSShwYWdlKTtcclxuICAgIFxyXG4gICAgaWYgKHRoaXMucGFyYW1Db25maWcuREVCVUdfRkxBRykgY29uc29sZS5sb2coXCJsb2FkTGFuZ3VhZ2U6cGFnZSxcIixwYWdlKVxyXG4gICAgICB0aGlzLnBhcmFtQ29uZmlnID0gZ2V0UGFyYW1Db25maWcoKTtcclxuICAgICAgaWYgKHRoaXMucGFyYW1Db25maWcuREVCVUdfRkxBRykgY29uc29sZS5sb2coXCJ0aGlzLnBhcmFtQ29uZmlnLnRpdGxlcyxcIix0aGlzLnBhcmFtQ29uZmlnLnRpdGxlcyk7XHJcbiAgICAgIGxldCBwYXJhbUNvbmZpZyA9IHtcclxuICAgICAgICBcIk5hbWVcIjogXCJ1c2VyTGFuZ1wiLFxyXG4gICAgICAgIFwiVmFsXCI6IGxhbmd1YWdlLnRvVXBwZXJDYXNlKClcclxuICAgICAgfTtcclxuICAgICAgc2V0UGFyYW1Db25maWcocGFyYW1Db25maWcpO1xyXG5cclxuICAgIHRoaXMuc2VuZEdldENvbW1hbmQodGhpcy5TRVJWRVJfVVJMICwgcGFnZSkuc3Vic2NyaWJlKHJlc3VsdCA9PiB7XHJcbiAgICAgIGlmICh0aGlzLnBhcmFtQ29uZmlnLkRFQlVHX0ZMQUcpIGNvbnNvbGUubG9nKFwibG9hZExhbmd1YWdlOnJlc3VsdCxcIixyZXN1bHQpO1xyXG4gICAgICBsZXQgZGF0YSA9IHJlc3VsdC5kYXRhO1xyXG4gICAgICBpZiAodGhpcy5wYXJhbUNvbmZpZy5ERUJVR19GTEFHKSBjb25zb2xlLmxvZyhcImxvYWRMYW5ndWFnZTpkYXRhLFwiLGRhdGEpXHJcbiAgICAgIGxldCBwYXJhbUNvbmZpZyA9IHtcclxuICAgICAgICBcIk5hbWVcIjogXCJ0aXRsZXNcIixcclxuICAgICAgICBcIlZhbFwiOiBkYXRhXHJcbiAgICAgIH07XHJcbiAgICAgIHNldFBhcmFtQ29uZmlnKHBhcmFtQ29uZmlnKTtcclxuICAgICAgdGhpcy5wYXJhbUNvbmZpZyA9IGdldFBhcmFtQ29uZmlnKCk7XHJcbiAgICAgIGlmICh0aGlzLnBhcmFtQ29uZmlnLkRFQlVHX0ZMQUcpIGNvbnNvbGUubG9nKFwidGhpcy5wYXJhbUNvbmZpZy50aXRsZXMsXCIsdGhpcy5wYXJhbUNvbmZpZy50aXRsZXMpO1xyXG4gICAgICBwYXJhbUNvbmZpZyA9IHtcclxuICAgICAgICBcIk5hbWVcIjogXCJ1c2VyTGFuZ1wiLFxyXG4gICAgICAgIFwiVmFsXCI6IGxhbmd1YWdlLnRvVXBwZXJDYXNlKClcclxuICAgICAgfTtcclxuICAgICAgc2V0UGFyYW1Db25maWcocGFyYW1Db25maWcpO1xyXG4gICAgICB0aGlzLnNldFJUTCgpO1xyXG5cclxuICAgICAgaWYgKHRoaXMucGFyYW1Db25maWcuREVCVUdfRkxBRykgY29uc29sZS5sb2coXCJkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuZGlyOlwiLCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuZGlyID09ICdsdHInICApO1xyXG4gICAgfSxcclxuICAgIGVyciA9PiB7XHJcbiAgICAgIGlmICh0aGlzLnBhcmFtQ29uZmlnLkRFQlVHX0ZMQUcpIGNvbnNvbGUubG9nKFwibG9hZExhbmd1YWdlOmVycixcIixlcnIpXHJcbiAgICAgIC8vYWxlcnQgKCdlcnJvcjonICsgZXJyLm1lc3NhZ2UpO1xyXG4gICAgICAvL3RoaXMuc2hvd0Vycm9yTXNnKG9iamVjdCwgZXJyKTtcclxuICAgIH0pXHJcbiAgfVxyXG4gIHB1YmxpYyBnZXROTFMocGFyYW1zOmFueSwgaWQ6YW55LCB0ZXh0OmFueSkge1xyXG4gICAgLy9pZiAodGhpcy5wYXJhbUNvbmZpZy5ERUJVR19GTEFHKSBjb25zb2xlLmxvZyhcImNoZWNreDpnZXROTFM6dGhpcy5wYXJhbUNvbmZpZy50aXRsZXMsXCIsdGhpcy5wYXJhbUNvbmZpZy50aXRsZXMpO1xyXG4gICAgaWYgKHR5cGVvZiB0aGlzLnBhcmFtQ29uZmlnICE9PSBcInVuZGVmaW5lZFwiKSB7XHJcbiAgICAgIGlmICh0eXBlb2YgdGhpcy5wYXJhbUNvbmZpZy50aXRsZXMgIT09IFwidW5kZWZpbmVkXCIpIHtcclxuICAgICAgICAvL2NvbnNvbGUubG9nKFwiY2hlY2t4OmdldE5MUzppZDpcIixpZCk7XHJcbiAgICAgICAgbGV0IGFycmF5ID0gaWQuc3BsaXQoXCIuXCIpO1xyXG4gICAgICAgIGlmIChhcnJheS5sZW5ndGggPT0gMykge1xyXG4gICAgICAgICAgaWYgKHR5cGVvZiB0aGlzLnBhcmFtQ29uZmlnLnRpdGxlcyBbYXJyYXlbMF1dICE9PSBcInVuZGVmaW5lZFwiKXtcclxuICAgICAgICAgICAgaWYgKHR5cGVvZiB0aGlzLnBhcmFtQ29uZmlnLnRpdGxlc1thcnJheVswXV1bYXJyYXlbMV1dICE9PSBcInVuZGVmaW5lZFwiKSB7XHJcbiAgICAgICAgICAgICAgaWYgKHR5cGVvZiB0aGlzLnBhcmFtQ29uZmlnLnRpdGxlc1thcnJheVswXV1bYXJyYXlbMV1dW2FycmF5WzJdXSAhPT0gXCJ1bmRlZmluZWRcIil7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5wYXJhbUNvbmZpZy50aXRsZXNbYXJyYXlbMF1dW2FycmF5WzFdXVthcnJheVsyXV0gIT0gXCJcIil7XHJcbiAgICAgICAgICAgICAgICAgIHRleHQgPSB0aGlzLnBhcmFtQ29uZmlnLnRpdGxlc1thcnJheVswXV1bYXJyYXlbMV1dW2FycmF5WzJdXVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgZWxzZXtcclxuICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhcImNoZWNreDpnZXROTFM6YXJyYXlbMF0gbm90IGZvdW5kIGluIHRoaXMucGFyYW1Db25maWcudGl0bGVzIDowOlwiLGFycmF5WzBdLCB0aGlzLnBhcmFtQ29uZmlnLnRpdGxlcyk7XHJcbiAgICAgICAgICAgIC8vY29uc29sZS5sb2coXCJjaGVja3g6Z2V0TkxTOmFycmF5WzBdIG5vdCBmb3VuZCBpbiB0aGlzLnBhcmFtQ29uZmlnLnRpdGxlcyA6MDpcIixhcnJheVswXSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAvL2NvbnNvbGUubG9nKFwiY2hlY2t4OmdldE5MUzp0ZXh0LFwiLHRleHQsIFwiaW4gYXJyYXlbMF06XCIsIGFycmF5WzBdLCB0aGlzLnBhcmFtQ29uZmlnLnRpdGxlcyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgbGV0IG5sc190aXRsZSA9IHRoaXMucGFyYW1Db25maWcudGl0bGVzW2lkXTtcclxuICAgICAgICAgIGlmICh0eXBlb2YgbmxzX3RpdGxlICE9PSBcInVuZGVmaW5lZFwiKSB7XHJcbiAgICAgICAgICAgIHRleHQgPSBubHNfdGl0bGU7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBpZiAocGFyYW1zLmxlbmd0aCA+IDApIHtcclxuICAgICAgbGV0IHN0ckFycmF5ID0gdGV4dC5zcGxpdChcIiMjXCIpO1xyXG4gICAgICB0ZXh0ID0gXCJcIjtcclxuICBcclxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzdHJBcnJheS5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIGlmICh0eXBlb2YgcGFyYW1zW2ldICE9IFwidW5kZWZpbmVkXCIpXHJcbiAgICAgICAgICB0ZXh0ID0gdGV4dCArIHN0ckFycmF5W2ldICsgcGFyYW1zW2ldO1xyXG4gICAgICAgIGVsc2VcclxuICAgICAgICAgIHRleHQgPSB0ZXh0ICsgc3RyQXJyYXlbaV07XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcblxyXG4gICAgcmV0dXJuIHRleHQ7XHJcbiAgfVxyXG4gIHB1YmxpYyBsb2FkU3RhdGVtZW50cyhzdGF0ZW1lbnRzOmFueSl7XHJcbiAgICBpZiAoc3RhdGVtZW50cyA9PSBcIlwiKVxyXG4gICAgICBzdGF0ZW1lbnRzID0gXCJzdGF0ZW1lbnRzLmpzb25cIjtcclxuICBsZXQgcGFnZSA9IFwiP2dldGZpbGU9XCIgKyBzdGF0ZW1lbnRzO1xyXG4gICAgcGFnZSA9IHRoaXMuY2hlY2tEQkxvYyhwYWdlKTtcclxuICAgIHBhZ2UgPSBlbmNvZGVVUkkocGFnZSk7XHJcbiAgICB0aGlzLnNlbmRHZXRDb21tYW5kKHRoaXMuU0VSVkVSX1VSTCwgcGFnZSkuc3Vic2NyaWJlKHJlc3VsdCA9PiB7XHJcbiAgICAgIGlmICh0aGlzLnBhcmFtQ29uZmlnLkRFQlVHX0ZMQUcpIGNvbnNvbGUubG9nKFwibG9hZFN0YXRlbWVudHM6cmVzdWx0LFwiLCByZXN1bHQpO1xyXG4gICAgICBsZXQgZGF0YSA9IHJlc3VsdC5kYXRhO1xyXG4gICAgICBpZiAodGhpcy5wYXJhbUNvbmZpZy5ERUJVR19GTEFHKSBjb25zb2xlLmxvZyhcImxvYWRTdGF0ZW1lbnRzOmRhdGEsXCIsIGRhdGEpO1xyXG4gICAgICBsZXQgbGtwQXJyUVVFUllfREVGOmFueSA9IFtdO1xyXG4gICAgICBPYmplY3Qua2V5cyhkYXRhKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXk6YW55KSB7XHJcbiAgICAgICAgbGV0IHZhbHVlID0gZGF0YVtrZXldO1xyXG4gICAgICAgIGxldCByZWMgPSB7XHJcbiAgICAgICAgICBDT0RFOiBrZXksXHJcbiAgICAgICAgICBDT0RFVEVYVF9MQU5HOiBrZXksXHJcbiAgICAgICAgICBzdGF0ZW1lbnQ6IHZhbHVlXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxrcEFyclFVRVJZX0RFRi5wdXNoKHJlYyk7XHJcblxyXG4gICAgfSk7XHJcbiAgICAgIGlmICh0aGlzLnBhcmFtQ29uZmlnLkRFQlVHX0ZMQUcpIGNvbnNvbGUubG9nKFwibG9hZFN0YXRlbWVudHM6ZGF0YSxcIiwgZGF0YSk7XHJcbiAgICAgIGlmICh0aGlzLnBhcmFtQ29uZmlnLkRFQlVHX0ZMQUcpIGNvbnNvbGUubG9nKFwibG9hZFN0YXRlbWVudHM6bGtwQXJyUVVFUllfREVGLFwiLCBsa3BBcnJRVUVSWV9ERUYpXHJcbiAgICAgIGxldCBwYXJhbUNvbmZpZyA9IHtcclxuICAgICAgICBcIk5hbWVcIjogXCJzdGF0ZW1lbnRzXCIsXHJcbiAgICAgICAgXCJWYWxcIjogZGF0YVxyXG4gICAgICB9O1xyXG4gICAgICBzZXRQYXJhbUNvbmZpZyhwYXJhbUNvbmZpZyk7XHJcbiAgICAgIHBhcmFtQ29uZmlnID0ge1xyXG4gICAgICAgIFwiTmFtZVwiOiBcImxrcEFyclFVRVJZX0RFRlwiLFxyXG4gICAgICAgIFwiVmFsXCI6IGxrcEFyclFVRVJZX0RFRlxyXG4gICAgICB9O1xyXG4gICAgICBzZXRQYXJhbUNvbmZpZyhwYXJhbUNvbmZpZyk7XHJcblxyXG4gICAgfSxcclxuICAgIGVyciA9PiB7XHJcbiAgICAgICAgaWYgKHRoaXMucGFyYW1Db25maWcuREVCVUdfRkxBRykgY29uc29sZS5sb2coXCJsb2FkTGFuZ3VhZ2U6ZXJyLFwiLCBlcnIpXHJcblxyXG5cclxuXHJcbiAgICB9KVxyXG4gIH1cclxuICAvLyBwdWJsaWMgbG9hZFN0YXRlbWVudHNPbGQoKSB7XHJcblxyXG4gIC8vICAgbGV0IGZpbGUgPSBcImFzc2V0cy9cIiArIFwic3RhdGVtZW50cy5qc29uXCJcclxuICAvLyAgIGlmICh0aGlzLnBhcmFtQ29uZmlnLkRFQlVHX0ZMQUcpIGNvbnNvbGUubG9nKFwibG9hZFN0YXRlbWVudHM6ZmlsZSxcIiwgZmlsZSlcclxuICAvLyAgIHRoaXMuaHR0cC5nZXQoZmlsZSkuc3Vic2NyaWJlKGRhdGEgPT4ge1xyXG4gIC8vICAgICBsZXQgbGtwQXJyUVVFUllfREVGOmFueSA9IFtdO1xyXG4gIC8vICAgICBPYmplY3Qua2V5cyhkYXRhKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXk6YW55KSB7XHJcbiAgLy8gICAgICAgbGV0IHZhbHVlID0gZGF0YVtrZXldO1xyXG4gIC8vICAgICAgIGxldCByZWMgPSB7XHJcbiAgLy8gICAgICAgICBDT0RFOiBrZXksXHJcbiAgLy8gICAgICAgICBDT0RFVEVYVF9MQU5HOiBrZXksXHJcbiAgLy8gICAgICAgICBzdGF0ZW1lbnQ6IHZhbHVlXHJcbiAgLy8gICAgICAgfVxyXG4gIC8vICAgICAgIGxrcEFyclFVRVJZX0RFRi5wdXNoKHJlYyk7XHJcblxyXG4gIC8vICAgICB9KTtcclxuICAvLyAgICAgaWYgKHRoaXMucGFyYW1Db25maWcuREVCVUdfRkxBRykgY29uc29sZS5sb2coXCJsb2FkU3RhdGVtZW50czpkYXRhLFwiLCBkYXRhKTtcclxuICAvLyAgICAgaWYgKHRoaXMucGFyYW1Db25maWcuREVCVUdfRkxBRykgY29uc29sZS5sb2coXCJsb2FkU3RhdGVtZW50czpsa3BBcnJRVUVSWV9ERUYsXCIsIGxrcEFyclFVRVJZX0RFRilcclxuICAvLyAgICAgbGV0IHBhcmFtQ29uZmlnID0ge1xyXG4gIC8vICAgICAgIFwiTmFtZVwiOiBcInN0YXRlbWVudHNcIixcclxuICAvLyAgICAgICBcIlZhbFwiOiBkYXRhXHJcbiAgLy8gICAgIH07XHJcbiAgLy8gICAgIHNldFBhcmFtQ29uZmlnKHBhcmFtQ29uZmlnKTtcclxuICAvLyAgICAgcGFyYW1Db25maWcgPSB7XHJcbiAgLy8gICAgICAgXCJOYW1lXCI6IFwibGtwQXJyUVVFUllfREVGXCIsXHJcbiAgLy8gICAgICAgXCJWYWxcIjogbGtwQXJyUVVFUllfREVGXHJcbiAgLy8gICAgIH07XHJcbiAgLy8gICAgIHNldFBhcmFtQ29uZmlnKHBhcmFtQ29uZmlnKTtcclxuXHJcbiAgLy8gICB9LFxyXG4gIC8vICAgICBlcnIgPT4ge1xyXG4gIC8vICAgICAgIGlmICh0aGlzLnBhcmFtQ29uZmlnLkRFQlVHX0ZMQUcpIGNvbnNvbGUubG9nKFwibG9hZExhbmd1YWdlOmVycixcIiwgZXJyKVxyXG5cclxuXHJcblxyXG4gIC8vICAgICB9KVxyXG4gIC8vIH1cclxuXHJcblxyXG4gIHB1YmxpYyBoYW5kbGVGZXRjaGVkTW9kdWxlcyhvYmplY3Q6YW55LCBkYXRhOmFueSkge1xyXG4gICAgaWYgKG9iamVjdC5wYXJhbUNvbmZpZy5ERUJVR19GTEFHKSBjb25zb2xlLmxvZygnZmV0Y2hlZE1vZHVsZXMgOiAnLCBkYXRhWzBdLmRhdGEpO1xyXG4gICAgLy90aGlzLml0ZW1zWzBdLml0ZW1zID0gIGRhdGE7XHJcbiAgICBvYmplY3QuaXRlbXMgPSBbXHJcbiAgICAgIHtcclxuICAgICAgIHRleHQ6ICdNb2R1bGUnLFxyXG4gICAgICAgaXRlbXM6IGRhdGFbMF0uZGF0YVxyXG4gICAgIH1dO1xyXG4gICAgIG9iamVjdC5zZXRNb2R1bGVOYW1lKG9iamVjdC5jdXJyZW50TWVudSk7XHJcbiAgICBpZiAob2JqZWN0LnBhcmFtQ29uZmlnLkRFQlVHX0ZMQUcpIGNvbnNvbGUubG9nKFwib2JqZWN0Lml0ZW1zOlwiLCBvYmplY3QuaXRlbXMsIFwiZGF0YVswXS5kYXRhLmxlbmd0aDpcIiwgZGF0YVswXS5kYXRhLmxlbmd0aClcclxuICAgIGlmIChkYXRhWzBdLmRhdGEubGVuZ3RoID09IDEpIHtcclxuICAgICAgb2JqZWN0LnNob3dNb2R1bGVTZWxlY3Rpb24gPSBmYWxzZTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHB1YmxpYyBmZXRjaE1lbnUob2JqZWN0OmFueSwgaGFuZGxlRmV0Y2hlZERhdGE6YW55KSB7XHJcbiAgICBpZiAoKHRoaXMuU3RyQXV0aCA9PSBcIlwiKSB8fCAodHlwZW9mIHRoaXMuU3RyQXV0aCA9PT0gXCJ1bmRlZmluZWRcIikpXHJcbiAgICAgIHJldHVybjtcclxuXHJcblxyXG4gICAgbGV0IFBhZ2UgPSBcIlwiO1xyXG4gICAgdGhpcy5wb3N0KHRoaXMsIFBhZ2UsIG9iamVjdC5Cb2R5KS5zdWJzY3JpYmUocmVzdWx0ID0+IHtcclxuXHJcbiAgICAgICAgaGFuZGxlRmV0Y2hlZERhdGEob2JqZWN0LCByZXN1bHQuZGF0YSwgZmFsc2UpO1xyXG5cclxuXHJcbiAgICAgIG9iamVjdC5Cb2R5ID0gW107XHJcbiAgICB9LFxyXG4gICAgZXJyID0+IHtcclxuICAgICAgICAvL2FsZXJ0KCdlcnJvcjonICsgZXJyLm1lc3NhZ2UpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG4gIHB1YmxpYyBzZXRNb2R1bGVJdGVtcyhvYmplY3Q6YW55KSB7XHJcblxyXG5cclxuICAgIGlmICghb2JqZWN0LnN0YXRpY01lbnUpIHtcclxuICAgICAgb2JqZWN0LkJvZHkgPSBbXTtcclxuICAgICAgbGV0IE5ld1ZhbDphbnkgPSB7XHJcbiAgICAgICAgTUVOVTogJ01BSU4nLFxyXG4gICAgICAgIENIT0lDRVMgOiBvYmplY3QucGFyYW1Db25maWcubGljZW5zZWRNb2R1bGVzLnRvVXBwZXJDYXNlKCksXHJcbiAgICAgICAgTEFOR1VBR0VfTkFNRSA6IG9iamVjdC5wYXJhbUNvbmZpZy51c2VyTGFuZy50b1VwcGVyQ2FzZSgpLFxyXG4gICAgICB9O1xyXG5cclxuICAgICAgICBOZXdWYWxbXCJfUVVFUllcIl0gPSBcIkdFVF9BTExPV0VEX01PRFVMRVNcIjtcclxuXHJcbiAgICAgICAgb2JqZWN0LmFkZFRvQm9keShOZXdWYWwpO1xyXG4gICAgICBpZiAodGhpcy5wYXJhbUNvbmZpZy5ERUJVR19GTEFHKSBjb25zb2xlLmxvZyhcIi0tLS0tLS0tb2JqZWN0LkJvZHkgOlwiLCBvYmplY3QuQm9keSlcclxuXHJcblxyXG4gICAgICB0aGlzLmZldGNoTWVudShvYmplY3QsIHRoaXMuaGFuZGxlRmV0Y2hlZE1vZHVsZXMpO1xyXG4gICAgfVxyXG4gIH1cclxuICBwdWJsaWMgc3RhdGVDaGFuZ2Uob2JqZWN0OmFueSwgZGF0YTogUGFuZWxCYXJTdGF0ZUNoYW5nZUV2ZW50KTogYm9vbGVhbiB7XHJcbiAgICAvL3B1YmxpYyBzdGF0ZUNoYW5nZShvYmplY3Q6YW55LCBkYXRhOiBBcnJheTxQYW5lbEJhckl0ZW1Nb2RlbD4pOiBib29sZWFuIHtcclxuICBcclxuICAgICAgaWYgKG9iamVjdC5zdGF0aWNNZW51ID09IHRydWUpIHtcclxuICAgICAgICBjb25zdCBmb2N1c2VkRXZlbnQ6IFBhbmVsQmFySXRlbU1vZGVsID0gZGF0YS5pdGVtcy5maWx0ZXIoaXRlbSA9PiBpdGVtLmZvY3VzZWQgPT09IHRydWUpWzBdO1xyXG4gICAgICAgIGlmICh0aGlzLnBhcmFtQ29uZmlnLkRFQlVHX0ZMQUcpIGNvbnNvbGUubG9nKFwiIGluIHN0YXRlQ2hhbmdlIDogXCIgKyBmb2N1c2VkRXZlbnQuaWQpXHJcbiAgICAgICAgaWYgKHRoaXMucGFyYW1Db25maWcuREVCVUdfRkxBRykgY29uc29sZS5sb2coZm9jdXNlZEV2ZW50KVxyXG4gICAgICAgIGlmIChmb2N1c2VkRXZlbnQudGl0bGUgPT0gXCJGb3JtYXR0aW5nIEZsb3dcIikge1xyXG4gICAgICAgICAgb2JqZWN0LnNob3dQYW5lbGJhciA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zb2xlLmxvZyhcIm9iamVjdC5pc1Bob25lUG9ydHJhaXQ6XCIsIG9iamVjdC5pc1Bob25lUG9ydHJhaXQsIG9iamVjdC5zaG93UGFuZWxiYXIpXHJcbiAgICAgICAgLy90aGlzLnNlbGVjdGVkSWQgPSBmb2N1c2VkRXZlbnQuaWQ7XHJcbiAgICAgICAgLy90aGlzLnJvdXRlci5uYXZpZ2F0ZShbJy8nICsgZm9jdXNlZEV2ZW50LmlkXSk7XHJcbiAgICAgICAgLy90aGlzLnN0YXJTZXJ2aWNlcy5zZXRSVEwoKTtcclxuICAgICAgICByZXR1cm4gdHJ1ZTsgIC8vRnVhZCBjaGVjayBpZiBpdCBzaG91bGQgcmV0dXJuIGZhbHNlIG9yIHRydWVcclxuICBcclxuICAgICAgfVxyXG4gICAgICBjb25zdCBmb2N1c2VkRXZlbnQ6IFBhbmVsQmFySXRlbU1vZGVsID0gZGF0YS5pdGVtcy5maWx0ZXIoaXRlbSA9PiBpdGVtLmZvY3VzZWQgPT09IHRydWUpWzBdO1xyXG4gICAgICBpZiAodGhpcy5wYXJhbUNvbmZpZy5ERUJVR19GTEFHKSBjb25zb2xlLmxvZyhcIiBpbiBzdGF0ZUNoYW5nZSA6IFwiICwgZm9jdXNlZEV2ZW50LCBmb2N1c2VkRXZlbnQuaWQpXHJcbiAgICAgIGxldCByb3V0aW5lQXV0aCA9IHRoaXMuZ2V0Um91dGluZUF1dGgob2JqZWN0Lm1lbnUsIGZvY3VzZWRFdmVudC5pZCk7XHJcbiAgICAgIGlmICh0aGlzLnBhcmFtQ29uZmlnLkRFQlVHX0ZMQUcpIGNvbnNvbGUubG9nKFwiIGluIHN0YXRlQ2hhbmdlIDogXCIgLCBmb2N1c2VkRXZlbnQuaWQgLCBcInJvdXRpbmVBdXRoIDpcIiAsIHJvdXRpbmVBdXRoKVxyXG4gIFxyXG4gICAgICBpZiAoZm9jdXNlZEV2ZW50LmlkID09IFwiUFJWRkxPV1wiKVxyXG4gICAgICAgICBvYmplY3Quc2hvd1BhbmVsYmFyID0gZmFsc2U7XHJcbiAgXHJcbiAgICAgIGlmICh0eXBlb2Ygcm91dGluZUF1dGggIT09IFwidW5kZWZpbmVkXCIpIHtcclxuICAgICAgICBpZiAodGhpcy5wYXJhbUNvbmZpZy5ERUJVR19GTEFHKSBjb25zb2xlLmxvZyhcIiBpbiBzdGF0ZUNoYW5nZSA6IHJvdXRpbmVBdXRoLmF1dGhMZXZlbDpcIiArIHJvdXRpbmVBdXRoLmF1dGhMZXZlbClcclxuICAgICAgICBpZiAocm91dGluZUF1dGguYXV0aExldmVsID09IDApIHtcclxuICAgICAgICAgIGxldCBkaWFsb2dTdHJ1YyA9IHtcclxuICAgICAgICAgICAgbXNnOiB0aGlzLm5vQWNjZXNzTXNnLFxyXG4gICAgICAgICAgICB0aXRsZTogXCJXYXJuaW5nXCIsXHJcbiAgICAgICAgICAgIGluZm86IG51bGwsXHJcbiAgICAgICAgICAgIG9iamVjdDogdGhpcyxcclxuICAgICAgICAgICAgYWN0aW9uOiB0aGlzLk9rQWN0aW9ucyxcclxuICAgICAgICAgICAgY2FsbGJhY2s6IG51bGxcclxuICAgICAgICAgIH07XHJcbiAgICAgICAgICB0aGlzLnNob3dDb25maXJtYXRpb24oZGlhbG9nU3RydWMpO1xyXG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgIG9iamVjdC5zZWxlY3RlZElkID0gZm9jdXNlZEV2ZW50LmlkO1xyXG4gICAgICAgICAgdGhpcy5zZXNzaW9uUGFyYW1zW1wiUHJ2VXNlckZsb3dcIl0gPSBcIlwiO1xyXG4gICAgICAgICAgdGhpcy5zZXNzaW9uUGFyYW1zW1wiUHJ2VXNlckNEUlwiXSA9IFwiXCI7XHJcbiAgIFxyXG4gICAgICAgICAgaWYgKG9iamVjdC5zZWxlY3RlZElkID09IFwiUFJWRkxPV1wiKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2Vzc2lvblBhcmFtc1tcIlBydlVzZXJGbG93XCJdID0gXCJQUlZfQkxEXCI7XHJcbiAgICAgICAgICAgIHRoaXMuc2Vzc2lvblBhcmFtc1tcIlBydlVzZXJDRFJcIl0gPSBcIlBSVl9DRFJcIjtcclxuICAgICAgICAgICAgb2JqZWN0LnNob3dQYW5lbGJhciA9IGZhbHNlO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgaWYgKG9iamVjdC5zZWxlY3RlZElkID09IFwiQ0NNQ0FUXCIpIHtcclxuICAgICAgICAgICAgdGhpcy5zZXNzaW9uUGFyYW1zW1wiUHJ2VXNlckZsb3dcIl0gPSBcIkNSQ19DQVRcIjtcclxuICAgICAgICAgICAgdGhpcy5zZXNzaW9uUGFyYW1zW1wiUHJ2VXNlckNEUlwiXSA9IFwiQ1JDX1VTRVJfSU5GT1wiO1xyXG4gICAgICAgICAgICBvYmplY3Quc2hvd1BhbmVsYmFyID0gZmFsc2U7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBpZiAob2JqZWN0LnNlbGVjdGVkSWQgPT0gXCJDQ01HUlBcIikge1xyXG4gICAgICAgICAgICB0aGlzLnNlc3Npb25QYXJhbXNbXCJQcnZVc2VyRmxvd1wiXSA9IFwiQ1JDX0dST1VQXCI7XHJcbiAgICAgICAgICAgIHRoaXMuc2Vzc2lvblBhcmFtc1tcIlBydlVzZXJDRFJcIl0gPSBcIkNSQ19HUk9VUF9JTkZPXCI7XHJcbiAgICAgICAgICAgIG9iamVjdC5zaG93UGFuZWxiYXIgPSBmYWxzZTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGlmIChvYmplY3Quc2VsZWN0ZWRJZCA9PSBcIkNNR0NBVFwiKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2Vzc2lvblBhcmFtc1tcIlBydlVzZXJGbG93XCJdID0gXCJDQU1fQ0FUXCI7XHJcbiAgICAgICAgICAgIHRoaXMuc2Vzc2lvblBhcmFtc1tcIlBydlVzZXJDRFJcIl0gPSBcIkNBTV9VU0VSX0lORk9cIjtcclxuICAgICAgICAgICAgb2JqZWN0LnNob3dQYW5lbGJhciA9IGZhbHNlO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgaWYgKG9iamVjdC5zZWxlY3RlZElkID09IFwiQ01HR1JQXCIpIHtcclxuICAgICAgICAgICAgdGhpcy5zZXNzaW9uUGFyYW1zW1wiUHJ2VXNlckZsb3dcIl0gPSBcIkNBTV9HUk9VUFwiO1xyXG4gICAgICAgICAgICB0aGlzLnNlc3Npb25QYXJhbXNbXCJQcnZVc2VyQ0RSXCJdID0gXCJDQU1fR1JPVVBfSU5GT1wiO1xyXG4gICAgICAgICAgICBvYmplY3Quc2hvd1BhbmVsYmFyID0gZmFsc2U7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBpZiAob2JqZWN0LnNlbGVjdGVkSWQgPT0gXCJCSUxMSU5HXCIpIHtcclxuICAgICAgICAgICAgdGhpcy5zZXNzaW9uUGFyYW1zW1wiUHJ2VXNlckZsb3dcIl0gPSBcIkJJTExJTkdcIjtcclxuICAgICAgICAgICAgdGhpcy5zZXNzaW9uUGFyYW1zW1wiUHJ2VXNlckNEUlwiXSA9IFwiQklMTElOR19DRFJcIjtcclxuICAgICAgICAgICAgb2JqZWN0LnNob3dQYW5lbGJhciA9IGZhbHNlO1xyXG4gICAgICAgICAgfVxyXG4gIFxyXG4gICAgICAgICAgaWYgKG9iamVjdC5zZWxlY3RlZElkLnN0YXJ0c1dpdGgoXCJQT1JUQUxfXCIpKS8vRnVhZCA6IFJORFxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICB0aGlzLnNlc3Npb25QYXJhbXNbXCJQT1JUQUxfRk9STVwiXSA9IGZvY3VzZWRFdmVudC5pZDtcclxuICAgICAgICAgICAgZm9jdXNlZEV2ZW50LmlkID0gJ0RTUFBPUlRBTCc7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAvL0ZVQUQ6IGNoZWNrIGlmIGJlbG93IGNvZGUgdGlsbCBlbHNlIGlzIG5lZWRlZFxyXG4gICAgICAgIGlmICh0aGlzLnBhcmFtQ29uZmlnLkRFQlVHX0ZMQUcpIGNvbnNvbGUubG9nKFwiIGluIHN0YXRlQ2hhbmdlIDogaGVyZTFcIik7XHJcbiAgICAgICAgICBpZiAob2JqZWN0LnJvdXRlci5yb3V0ZXJTdGF0ZS5zbmFwc2hvdC51cmwgPT0gKCcvJyArIGZvY3VzZWRFdmVudC5pZCkpIHtcclxuICAgICAgICAgIGlmICh0aGlzLnBhcmFtQ29uZmlnLkRFQlVHX0ZMQUcpIGNvbnNvbGUubG9nKFwiIGluIHN0YXRlQ2hhbmdlIDogaGVyZTJcIik7XHJcbiAgICAgICAgICBvYmplY3Qucm91dGVyLm5hdmlnYXRlQnlVcmwoJycsIHsgc2tpcExvY2F0aW9uQ2hhbmdlOiB0cnVlIH0pLnRoZW4oKCkgPT57XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnBhcmFtQ29uZmlnLkRFQlVHX0ZMQUcpIGNvbnNvbGUubG9nKFwiIGluIHN0YXRlQ2hhbmdlIDogaGVyZTNcIik7XHJcbiAgICAgICAgICAgICAgb2JqZWN0LnJvdXRlci5uYXZpZ2F0ZShbJy8nICsgZm9jdXNlZEV2ZW50LmlkXSwgeyBza2lwTG9jYXRpb25DaGFuZ2U6IHRydWUsIHJlcGxhY2VVcmw6IHRydWUsIHByZXNlcnZlRnJhZ21lbnQ6IGZhbHNlIH0pXHJcbiAgICAgICAgICAgIGlmICh0aGlzLnBhcmFtQ29uZmlnLkRFQlVHX0ZMQUcpIGNvbnNvbGUubG9nKFwiIGluIHN0YXRlQ2hhbmdlIDogaGVyZTRcIik7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgIG9iamVjdC5yb3V0ZXIubmF2aWdhdGUoWycvJyArIGZvY3VzZWRFdmVudC5pZF0sIHsgc2tpcExvY2F0aW9uQ2hhbmdlOiB0cnVlLCByZXBsYWNlVXJsOiB0cnVlLCBwcmVzZXJ2ZUZyYWdtZW50OiBmYWxzZSB9KTtcclxuICAgICAgICAgIGlmICh0aGlzLnBhcmFtQ29uZmlnLkRFQlVHX0ZMQUcpIGNvbnNvbGUubG9nKFwiaW4gc3RhdGVDaGFuZ2UgOiBcIixmb2N1c2VkRXZlbnQuaWQpO1xyXG4gICAgICAgIH1cclxuICBcclxuICAgICAgICAgIGlmIChvYmplY3QuaXNQaG9uZVBvcnRyYWl0KXtcclxuICAgICAgICAgICAgb2JqZWN0LnNob3dQYW5lbGJhciA9IGZhbHNlO1xyXG4gICAgICAgICAgfVxyXG4gIFxyXG4gICAgICAgICAgLy90aGlzLnN0YXJTZXJ2aWNlcy5zZXRSVEwoKTtcclxuICBcclxuICAgICAgICAgIC8vdGhpcy5zaG93UGFuZWxiYXIgPSBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICBcclxuICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG4gIHB1YmxpYyBzZXRQYW5lbEJhcihvYmplY3Q6YW55KSB7XHJcblxyXG4gICAgaWYgKCFvYmplY3Quc3RhdGljTWVudSkge1xyXG4gICAgICBvYmplY3QuQm9keSA9IFtdO1xyXG4gICAgICBsZXQgTmV3VmFsOmFueSA9IHtcclxuICAgICAgTUVOVSA6IG9iamVjdC5jdXJyZW50TWVudS50b1VwcGVyQ2FzZSgpLFxyXG4gICAgICBVU0VSTkFNRSA6IG9iamVjdC5zdGFyU2VydmljZXMuc2Vzc2lvblBhcmFtcy5VU0VSTkFNRS50b1VwcGVyQ2FzZSgpLFxyXG4gICAgICBMQU5HVUFHRV9OQU1FIDogb2JqZWN0LnBhcmFtQ29uZmlnLnVzZXJMYW5nLnRvVXBwZXJDYXNlKCksXHJcbiAgICAgIEhJRERFTiA6ICcwJ1xyXG4gICAgfTtcclxuXHJcbiAgICAgIE5ld1ZhbFtcIl9RVUVSWVwiXSA9IFwiR0VUX01FTlVfUk9VVElORVNcIjtcclxuXHJcbiAgICAgIG9iamVjdC5hZGRUb0JvZHkoTmV3VmFsKTtcclxuXHJcbiAgICAgIGxldCBOZXdWYWwxOmFueSA9IHtcclxuICAgICAgICBNRU5VOiBcIlwiLFxyXG4gICAgICAgIFVTRVJOQU1FOiBvYmplY3Quc3RhclNlcnZpY2VzLnNlc3Npb25QYXJhbXMuVVNFUk5BTUUudG9VcHBlckNhc2UoKVxyXG4gICAgfTtcclxuXHJcbiAgICAgIE5ld1ZhbDFbXCJfUVVFUllcIl0gPSBcIkdFVF9ST1VUSU5FU19BVVRIT1JJVFlcIjtcclxuXHJcbiAgICAgIG9iamVjdC5hZGRUb0JvZHkoTmV3VmFsMSk7XHJcblxyXG4gICAgdGhpcy5mZXRjaE1lbnUob2JqZWN0LCB0aGlzLmhhbmRsZUZldGNoZWRQYW5lbEJhcik7XHJcbiAgfVxyXG59XHJcblxyXG5cclxuXHJcbiAgcHVibGljIGhhbmRsZUZldGNoZWRQYW5lbEJhcihvYmplY3Q6YW55LCBkYXRhOmFueSwgc2hvd0VtcHR5OmFueSkge1xyXG4gICAgZnVuY3Rpb24gY2hlY2tBdXRoRGF0YShyb3V0aW5lX25hbWU6YW55LCBhdXRoRGF0YTphbnkpIHtcclxuICAgICAgbGV0IGkgPSAwO1xyXG4gICAgICBsZXQgcm91dGluZUF1dGg7XHJcbiAgICAgIHdoaWxlIChpIDwgYXV0aERhdGEubGVuZ3RoKSB7XHJcbiAgICAgICAgaWYgKGF1dGhEYXRhW2ldLlJPVVRJTkVfTkFNRSA9PSByb3V0aW5lX25hbWUpIHtcclxuICAgICAgICAgIHJvdXRpbmVBdXRoID0gYXV0aERhdGFbaV07XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICAgICAgaSsrO1xyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiByb3V0aW5lQXV0aDtcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIGZvcm1hdERhdGEoYXJyOmFueSwgYXV0aERhdGE6YW55LCBzaG93RW1wdHk6YW55KSB7XHJcbiAgICAgIGxldCBtZW51OmFueSA9IFtdO1xyXG4gICAgICBsZXQgaXRlbXM6YW55ID0gW107XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFyci5sZW5ndGg7IGkrKykge1xyXG4gICAgICBpZiAob2JqZWN0LnBhcmFtQ29uZmlnLkRFQlVHX0ZMQUcpIGNvbnNvbGUubG9nKFwiYXJyW2ldOlwiLCBhcnJbaV0pO1xyXG4gICAgICBsZXQgdHlwZSA9IGFycltpXS5jaG9pY2VfdHlwZS5jaGFyQXQoMCk7XHJcbiAgICAgIGlmICh0eXBlID09IFwiTVwiKSB7XHJcbiAgICAgICAgaWYgKGl0ZW1zLmxlbmd0aCAhPSAwKSB7XHJcbiAgICAgICAgICBsZXQgaXRlbSA9IHtcclxuICAgICAgICAgICAgdGV4dDogbWVudUl0ZW0udGV4dCxcclxuICAgICAgICAgICAgY2hvaWNlOiBtZW51SXRlbS5jaG9pY2UsXHJcbiAgICAgICAgICAgIGl0ZW1zOiBpdGVtc1xyXG4gICAgICAgICAgfTtcclxuICAgICAgICAgIG1lbnUucHVzaChpdGVtKTtcclxuICAgICAgICAgIGl0ZW1zID0gW107XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciBtZW51SXRlbTphbnkgPSB7XHJcbiAgICAgICAgICB0ZXh0OiBhcnJbaV0udGV4dCxcclxuICAgICAgICAgIGNob2ljZTogYXJyW2ldLmNob2ljZVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgLy9tZW51LnB1c2goaXRlbSk7XHJcbiAgICAgIH1cclxuICAgICAgZWxzZSBpZiAodHlwZSA9PSBcIlJcIikge1xyXG4gICAgICAgIGlmIChvYmplY3QucGFyYW1Db25maWcuREVCVUdfRkxBRykgY29uc29sZS5sb2coXCJhdXRoRGF0YTpcIiwgYXV0aERhdGEsIFwiYXJyW2ldOlwiLCBhcnJbaV0pO1xyXG4gICAgICAgIGxldCByb3V0aW5lQXV0aCA9IGNoZWNrQXV0aERhdGEoYXJyW2ldLmNob2ljZSwgYXV0aERhdGEpO1xyXG4gICAgICAgIGlmICh0eXBlb2Ygcm91dGluZUF1dGggIT09IFwidW5kZWZpbmVkXCIpIHtcclxuICAgICAgICAgIGlmIChvYmplY3QucGFyYW1Db25maWcuREVCVUdfRkxBRykgY29uc29sZS5sb2coXCJhcnJbaV0uY2hvaWNlOlwiICsgYXJyW2ldLmNob2ljZSArIFwiICByb3V0aW5lQXV0aC5ESVNQX0ZMQUc6XCIgKyByb3V0aW5lQXV0aC5ESVNQX0ZMQUcgKyBcIiByb3V0aW5lQXV0aC5BVVRITEVWRUwgOlwiICsgcm91dGluZUF1dGguQVVUSExFVkVMKVxyXG4gICAgICAgICAgaWYgKHJvdXRpbmVBdXRoLkRJU1BfRkxBRyAhPSBcIk5cIikgLy8gJiYgKHJvdXRpbmVBdXRoLkFVVEhMRVZFTCAhPSAwKSApXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIGxldCByb3V0aW5lSXRlbSA9IHtcclxuICAgICAgICAgICAgICB0ZXh0OiBhcnJbaV0udGV4dCxcclxuICAgICAgICAgICAgICBjaG9pY2U6IGFycltpXS5jaG9pY2UsXHJcbiAgICAgICAgICAgICAgYXV0aExldmVsOiByb3V0aW5lQXV0aC5BVVRITEVWRUwsXHJcbiAgICAgICAgICAgICAgcm91dGluZURlc2M6IHJvdXRpbmVBdXRoLlJPVVRJTkVfREVTQyxcclxuICAgICAgICAgICAgICByb3V0aW5lVmVyOiByb3V0aW5lQXV0aC5ST1VUX1ZFUixcclxuICAgICAgICAgICAgICByb3V0ZXJMaW5rOiBcIi9cIiArIGFycltpXS5jaG9pY2VcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgaXRlbXMucHVzaChyb3V0aW5lSXRlbSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChvYmplY3QucGFyYW1Db25maWcuREVCVUdfRkxBRykgY29uc29sZS5sb2coXCItLS1pdGVtczpcIiwgaXRlbXMpO1xyXG4gICAgICAgIFxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBpZiAoaXRlbXMubGVuZ3RoICE9IDApIHtcclxuICAgICAgbGV0IGl0ZW0gPSB7XHJcbiAgICAgICAgdGV4dDogbWVudUl0ZW0udGV4dCxcclxuICAgICAgICBjaG9pY2U6IG1lbnVJdGVtLmNob2ljZSxcclxuICAgICAgICBpdGVtczogaXRlbXNcclxuICAgICAgfTtcclxuICAgICAgbWVudS5wdXNoKGl0ZW0pO1xyXG4gICAgICBpdGVtcyA9IFtdO1xyXG4gICAgfVxyXG4gICAgZWxzZSBpZiAoc2hvd0VtcHR5ICYmICh0eXBlb2YgbWVudUl0ZW0gIT09IFwidW5kZWZpbmVkXCIpKXtcclxuICAgICAgbGV0IGl0ZW0gPSB7XHJcbiAgICAgICAgdGV4dDogbWVudUl0ZW0udGV4dCxcclxuICAgICAgICBjaG9pY2U6IG1lbnVJdGVtLmNob2ljZSxcclxuICAgICAgICBpdGVtczogW11cclxuICAgICAgfTtcclxuICAgICAgbWVudS5wdXNoKGl0ZW0pO1xyXG4gICAgXHJcbiAgICB9XHJcblxyXG4gICAgICByZXR1cm4gbWVudTtcclxufVxyXG4gIG9iamVjdC5tZW51ID0gZm9ybWF0RGF0YShkYXRhWzBdLmRhdGEsIGRhdGFbMV0uZGF0YSwgc2hvd0VtcHR5KTtcclxuXHJcbiAgb2JqZWN0LnBhbmVsSXRlbXMgPSBvYmplY3QubWVudTtcclxub2JqZWN0Lm1lbnVJdGVtc0hvcml6ID0gb2JqZWN0Lm1lbnU7XHJcbiAgbGV0IHBhcmFtQ29uZmlnID0ge1xyXG4gICAgXCJOYW1lXCI6IFwibWVudVwiLFxyXG4gICAgXCJWYWxcIjogb2JqZWN0Lm1lbnVcclxuICB9O1xyXG4gIHNldFBhcmFtQ29uZmlnKHBhcmFtQ29uZmlnKTtcclxuXHJcblxyXG59XHJcblxyXG5wdWJsaWMgIHNsZWVwKG1zOmFueSkge1xyXG4gIHJldHVybiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHNldFRpbWVvdXQocmVzb2x2ZSwgbXMpKTtcclxufVxyXG4gIHByaXZhdGUgY29tbWl0Qm9keTphbnkgPSBbXTtcclxucHVibGljIGluVHJhbnMgPSBmYWxzZTtcclxuICBwdWJsaWMgaXNQaG9uZVBvcnRyYWl0ID0gZmFsc2U7XHJcbnByaXZhdGUgQm9keTphbnkgPSBbXTtcclxucHVibGljIGNvbW1pdENvbW1hbmRzID0gWydJTlNFUlQnLCAnVVBEQVRFJywgJ0RFTEVURSddO1xyXG5cclxuICBwdWJsaWMgYmVnaW5UcmFucygpIHtcclxuICAgIHRoaXMuY29tbWl0Qm9keSA9IFtdO1xyXG4gIHRoaXMuaW5UcmFucyA9IHRydWU7XHJcblxyXG59XHJcbiAgcHVibGljIGVuZFRyYW5zKG9iamVjdDphbnksIGNvbW1pdDphbnkpIHtcclxuICBsZXQgUGFnZSA9IFwiJl90cmFucz1ZXCI7XHJcbiAgICBsZXQgdGFibGVJbmZvOmFueTtcclxuICAgIGlmIChjb21taXQgJiYgdGhpcy5jb21taXRCb2R5Lmxlbmd0aCAhPSAwKSB7XHJcbiAgICByZXR1cm4gbmV3IFByb21pc2UocmVzb2x2ZSA9PiB7XHJcbiAgICAgIHRoaXMucG9zdCh0aGlzLCBQYWdlLCB0aGlzLmNvbW1pdEJvZHkpLnN1YnNjcmliZShyZXN1bHQgPT4ge1xyXG4gICAgICAgICAgdGhpcy5jb21taXRCb2R5ID0gW107XHJcbiAgICAgICAgdGhpcy5pblRyYW5zID0gZmFsc2U7XHJcblxyXG4gICAgICAgIHRhYmxlSW5mbyA9IHJlc3VsdC5kYXRhWzBdLmRhdGE7XHJcbiAgICAgICAgcmV0dXJuIHJlc29sdmUodGFibGVJbmZvKTtcclxuICAgICAgfSxcclxuICAgICAgICBlcnIgPT4ge1xyXG4gICAgICAgICAgb2JqZWN0LkZPUk1fVFJJR0dFUl9GQUlMVVJFID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy5jb21taXRCb2R5ID0gW107XHJcbiAgICAgICAgICB0aGlzLmluVHJhbnMgPSBmYWxzZTtcclxuICAgICAgICAgIC8vYWxlcnQoJ2Vycm9yOicgKyBlcnIubWVzc2FnZSk7XHJcbiAgICAgICAgICB0aGlzLnNob3dFcnJvck1zZyhvYmplY3QsIGVycik7XHJcbiAgICAgICAgICByZXR1cm4gcmVzb2x2ZSh0YWJsZUluZm8pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfSk7XHJcbiAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgIHRoaXMuY29tbWl0Qm9keSA9IFtdO1xyXG4gICAgdGhpcy5pblRyYW5zID0gZmFsc2U7XHJcbiAgICAgIHJldHVybiBudWxsO1xyXG4gIH1cclxuXHJcblxyXG59XHJcbi8vIHB1YmxpYyBhZGRUb0JvZHkoTmV3VmFsKSB7XHJcbi8vICAgdGhpcy5Cb2R5LnB1c2goTmV3VmFsKTtcclxuLy8gfVxyXG4gIHB1YmxpYyBleGVjU1FMQm9keShvYmplY3Q6YW55LCBCb2R5OmFueSxEQkxvYzphbnkpIHtcclxuICBmdW5jdGlvbiBnZXRGaXJzdFdvcmQoc3RyOmFueSkge1xyXG4gICAgbGV0IG15QXJyYXkgPSBzdHIuc3BsaXQoXCJfXCIpO1xyXG4gICAgcmV0dXJuIG15QXJyYXlbMF07XHJcbiAgfVxyXG4gIFxyXG4gIG9iamVjdC5GT1JNX1RSSUdHRVJfRkFJTFVSRSA9IGZhbHNlO1xyXG4gIGxldCBQYWdlID0gXCImX3RyYW5zPU5cIjtcclxuICBpZiAoREJMb2MgIT0gXCJcIilcclxuICAgIFBhZ2UgPSBQYWdlICsgXCImREJMb2M9XCIgKyBEQkxvYztcclxuICBsZXQgdGFibGVJbmZvOmFueTtcclxuXHJcbiAgb2JqZWN0Lk5PVEZPVU5EID0gZmFsc2U7XHJcbiAgaWYgKHRoaXMuaW5UcmFucykge1xyXG4gICAgbGV0IGZpcnN0V29yZCA9IGdldEZpcnN0V29yZChCb2R5WzBdLl9RVUVSWSkudG9VcHBlckNhc2UoKTtcclxuICAgIFxyXG4gICAgbGV0IGlzQ29tbWl0Q29tbWFuZCA9IHRoaXMuY29tbWl0Q29tbWFuZHMuaW5jbHVkZXMoZmlyc3RXb3JkKTtcclxuICAgIGlmIChpc0NvbW1pdENvbW1hbmQpIHtcclxuICAgICAgdGhpcy5jb21taXRCb2R5LnB1c2goQm9keVswXSk7XHJcbiAgICAgIHJldHVybiB0YWJsZUluZm87XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZXR1cm4gbmV3IFByb21pc2UocmVzb2x2ZSA9PiB7XHJcbiAgICAvL2NvbnNvbGUubG9nIChcImNoZWNrOmRpcnR5IHRlc3R4IGV4ZWNTUUxCb2R5IDJcIik7XHJcbiAgICB0aGlzLnBvc3QodGhpcywgUGFnZSwgQm9keSkuc3Vic2NyaWJlKHJlc3VsdCA9PiB7XHJcbiAgICAgIC8vY29uc29sZS5sb2cgKFwiY2hlY2s6ZGlydHkgdGVzdHggZXhlY1NRTEJvZHkgM1wiKTtcclxuICAgICAgdGFibGVJbmZvID0gcmVzdWx0LmRhdGE7XHJcbiAgICAgIC8vIGlmIChyZXN1bHQuZGF0YS5sZW5ndGggPT0gMClcclxuICAgICAgLy8gICBvYmplY3QuTk9URk9VTkQgPSB0cnVlO1xyXG4gICAgICByZXR1cm4gcmVzb2x2ZSh0YWJsZUluZm8pO1xyXG4gICAgfSxcclxuICAgICAgZXJyID0+IHtcclxuICAgICAgICBvYmplY3QuRk9STV9UUklHR0VSX0ZBSUxVUkUgPSB0cnVlO1xyXG4gICAgICAgIGFsZXJ0KCdlcnJvcjonICsgZXJyLm1lc3NhZ2UpO1xyXG4gICAgICAgIHJldHVybiByZXNvbHZlKHRhYmxlSW5mbyk7XHJcbiAgICAgIH0pO1xyXG4gIH0pO1xyXG5cclxuXHJcbn1cclxuICBwdWJsaWMgZXhlY1NRTChvYmplY3Q6YW55LCBzcWxTdG10OmFueSkge1xyXG4gICAgZnVuY3Rpb24gZ2V0Rmlyc3RXb3JkKHN0cjphbnkpIHtcclxuICAgICAgbGV0IHNwYWNlSW5kZXggPSBzdHIudHJpbSgpLmluZGV4T2YoJyAnKTtcclxuICAgIHJldHVybiBzcGFjZUluZGV4ID09PSAtMSA/IHN0ciA6IHN0ci5zdWJzdHIoMCwgc3BhY2VJbmRleCk7XHJcbiAgfVxyXG5cclxuICBvYmplY3QuRk9STV9UUklHR0VSX0ZBSUxVUkUgPSBmYWxzZTtcclxuICBsZXQgUGFnZSA9IFwiJl90cmFucz1OXCI7XHJcbiAgdGhpcy5Cb2R5ID0gW107XHJcbiAgICBsZXQgTmV3VmFsOmFueSA9IHt9O1xyXG4gIE5ld1ZhbFtcIl9RVUVSWVwiXSA9IFwiRVhFQ1NRTFwiO1xyXG4gIE5ld1ZhbFtcIl9TVE1UXCJdID0gc3FsU3RtdDtcclxuICAgIGxldCB0YWJsZUluZm86YW55O1xyXG5cclxuICBvYmplY3QuTk9URk9VTkQgPSBmYWxzZTtcclxuICBpZiAodGhpcy5pblRyYW5zKSB7XHJcbiAgICBsZXQgZmlyc3RXb3JkID0gZ2V0Rmlyc3RXb3JkKHNxbFN0bXQpLnRvVXBwZXJDYXNlKCk7XHJcbiAgICBcclxuICAgIGxldCBpc0NvbW1pdENvbW1hbmQgPSB0aGlzLmNvbW1pdENvbW1hbmRzLmluY2x1ZGVzKGZpcnN0V29yZCk7XHJcbiAgICBpZiAoaXNDb21taXRDb21tYW5kKSB7XHJcbiAgICAgIHRoaXMuY29tbWl0Qm9keS5wdXNoKE5ld1ZhbCk7XHJcbiAgICAgIHJldHVybiB0YWJsZUluZm87XHJcbiAgICB9XHJcbiAgfVxyXG4gIHRoaXMuQm9keSA9IHRoaXMuYWRkVG9Cb2R5KE5ld1ZhbCwgdGhpcy5Cb2R5KTtcclxuXHJcbiAgcmV0dXJuIG5ldyBQcm9taXNlKHJlc29sdmUgPT4ge1xyXG4gICAgdGhpcy5wb3N0KHRoaXMsIFBhZ2UsIHRoaXMuQm9keSkuc3Vic2NyaWJlKHJlc3VsdCA9PiB7XHJcbiAgICAgIHRoaXMuQm9keSA9IFtdO1xyXG4gICAgICB0YWJsZUluZm8gPSByZXN1bHQuZGF0YVswXS5kYXRhO1xyXG4gICAgICBpZiAocmVzdWx0LmRhdGFbMF0ucm93Q291bnQgPT0gMClcclxuICAgICAgICBvYmplY3QuTk9URk9VTkQgPSB0cnVlO1xyXG4gICAgICByZXR1cm4gcmVzb2x2ZSh0YWJsZUluZm8pO1xyXG4gICAgfSxcclxuICAgICAgZXJyID0+IHtcclxuICAgICAgICBvYmplY3QuRk9STV9UUklHR0VSX0ZBSUxVUkUgPSB0cnVlO1xyXG4gICAgICAgIGFsZXJ0KCdlcnJvcjonICsgZXJyLm1lc3NhZ2UpO1xyXG4gICAgICAgIHJldHVybiByZXNvbHZlKHRhYmxlSW5mbyk7XHJcbiAgICAgIH0pO1xyXG4gIH0pO1xyXG59XHJcblxyXG5cclxuLy8vLy8vLy9cclxuIFxyXG5wdWJsaWMgYXR0X2ltZ19nZXRGaWxlTGluayhmaWVsZF9kYXRhLG9iamVjdCkge1xyXG4gIGxldCBmaWxlTGluazphbnkgPSBcIlwiO1xyXG4gIGlmIChmaWVsZF9kYXRhID09IG51bGwpXHJcbiAgICByZXR1cm4gZmlsZUxpbms7XHJcbiAgZmllbGRfZGF0YSA9IGZpZWxkX2RhdGEudHJpbSgpO1xyXG4gIHRyeSB7XHJcbiAgICBmaWVsZF9kYXRhID0gSlNPTi5wYXJzZShmaWVsZF9kYXRhKTtcclxuICB9IGNhdGNoIChlKSB7XHJcbiAgICAgIC8vY29uc29sZS5sb2cgKFwiRXJyb3IgcGFyc2luZyA6XCIsZmllbGRfZGF0YSk7XHJcbiAgICAgIHJldHVybiBmaWxlTGluaztcclxuICB9XHJcbiAgICAvL2NvbnNvbGUubG9nKFwiZ2V0RmlsZUxpbms6ZmllbGRfZGF0YTpcIiwgZmllbGRfZGF0YSwgdHlwZW9mIGZpZWxkX2RhdGEpICAgIFxyXG4gICAgLy9jb25zb2xlLmxvZyhcImdldEZpbGVMaW5rOmZpZWxkX2RhdGE6XCIsIGZpZWxkX2RhdGEpXHJcbiAgICBpZiAodHlwZW9mIGZpZWxkX2RhdGEgPT0gXCJvYmplY3RcIilcclxuICAgICAgZmlsZUxpbmsgPSBvYmplY3QuQXR0RHduVXJsICsgZW5jb2RlVVJJKGZpZWxkX2RhdGFbMF0ubmFtZSk7XHJcbiAgICAvL2NvbnNvbGUubG9nKFwiZ2V0RmlsZUxpbms6ZmlsZUxpbms6XCIsIGZpbGVMaW5rKVxyXG4gIHJldHVybiBmaWxlTGluaztcclxufVxyXG5wdWJsaWMgYXR0X2ltZ19nZXRBdHQoZGF0YTphbnksb2JqZWN0OmFueSkge1xyXG4gIGxldCBhdHRzID0gXCJcIjtcclxuIC8vIGNvbnNvbGUubG9nKFwiZ2V0QXR0X2RhdGE6XCIsIGRhdGEpO1xyXG4gICAgbGV0IHZhbHMgPVxyXG4gICAgICBbe25hbWU6XCJcIixcclxuICAgICAgc2l6ZTpcIlwifVxyXG4gICAgICBdO1xyXG4gIHRyeSB7XHJcbiAgICB2YWxzID0gSlNPTi5wYXJzZShkYXRhKTtcclxuICB9IGNhdGNoIChlKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nIChcIkVycm9yIHBhcnNpbmcgOjM6XCIsZGF0YSk7XHJcbiAgICAgIHJldHVybiBhdHRzO1xyXG4gIH1cclxuICAvL2lmICgoZGF0YSAhPSBcIlwiKSAmJiAoZGF0YSAhPSBcIltdXCIpICYmIChkYXRhICE9IG51bGwpKSB7XHJcbiAgICAvL3ZhbHMgPSBKU09OLnBhcnNlKGRhdGEpO1xyXG4gICAgY29uc29sZS5sb2coXCJnZXRBdHRfZGF0YTpcIiwgdmFscywgdHlwZW9mIHZhbHMpO1xyXG4gICAgaWYgKHR5cGVvZiB2YWxzID09IFwib2JqZWN0XCIpe1xyXG4gICAgICB2YWxzLmZvckVhY2godmFsID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcInZhbDpcIiwgdmFsKVxyXG4gICAgICAgIGF0dHMgPSBhdHRzICsgXCI8XCIgKyB2YWwubmFtZSArIFwiIFNpemU6XCIgKyB2YWwuc2l6ZSArIFwiPlwiO1xyXG4gICAgICB9KVxyXG4gICAgfVxyXG4gIC8vfVxyXG4gIGNvbnNvbGUubG9nKFwiYXR0czpcIiwgYXR0cylcclxuICByZXR1cm4gYXR0cztcclxufVxyXG5wdWJsaWMgYXR0X2ltZ19wb3B1bGF0ZUFycnMoZm9ybUdyb3VwOmFueSxvYmplY3Q6YW55KXtcclxuICAvL2NvbnNvbGUubG9nKFwiYXR0X2ltZ19wb3B1bGF0ZUFycnM6Zm9ybUdyb3VwOlwiLCBmb3JtR3JvdXAsIG9iamVjdC5hdHRfYXJyLCBvYmplY3QuaW1nX2FycilcclxuICBmb3IgKGxldCBpID0gMDsgaSA8IG9iamVjdC5hdHRfYXJyLmxlbmd0aDsgaSsrKSB7XHJcbiAgICBpZiAoZm9ybUdyb3VwW29iamVjdC5hdHRfYXJyW2ldXS50cmltKCkgIT0gXCJcIikge1xyXG4gICAgICB0cnkge1xyXG4gICAgICAgIG9iamVjdC5teUZpbGVzW29iamVjdC5hdHRfYXJyW2ldXSA9IEpTT04ucGFyc2UoZm9ybUdyb3VwW29iamVjdC5hdHRfYXJyW2ldXSk7XHJcbiAgICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICAgIC8vY29uc29sZS5sb2cgKFwiRXJyb3IgcGFyc2luZyA6XCIsZmllbGRfZGF0YSk7XHJcbiAgICAgICAgICByZXR1cm4gO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgb2JqZWN0LmltZ19hcnIubGVuZ3RoOyBpKyspIHtcclxuICAgIGlmIChmb3JtR3JvdXBbb2JqZWN0LmltZ19hcnJbaV1dICE9IG51bGwpe1xyXG4gICAgICBpZiAoZm9ybUdyb3VwW29iamVjdC5pbWdfYXJyW2ldXS50cmltKCkgIT0gXCJcIikgb2JqZWN0Lm15RmlsZXNbb2JqZWN0LmltZ19hcnJbaV1dID0gSlNPTi5wYXJzZShmb3JtR3JvdXBbb2JqZWN0LmltZ19hcnJbaV1dKTtcclxuICAgIH1cclxuICB9XHJcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBvYmplY3QuYXR0X2Fyci5sZW5ndGg7IGkrKykge1xyXG4gICAgLy9jb25zb2xlLmxvZyhcIm9iamVjdC5hdHRfYXJyW2ldOlwiLCBvYmplY3QuYXR0X2FycltpXSlcclxuICAgIGlmIChmb3JtR3JvdXBbb2JqZWN0LmF0dF9hcnJbaV1dICE9IFwiXCIpIHtcclxuICAgICAgbGV0IGl0ZW1zMTphbnkgPVtdO1xyXG4gICAgICBsZXQgZmllbGRfZGF0YSA9IGZvcm1Hcm91cFtvYmplY3QuYXR0X2FycltpXV07XHJcblxyXG4gICAgICB0cnkge1xyXG4gICAgICAgIGZpZWxkX2RhdGEgPSBKU09OLnBhcnNlKGZpZWxkX2RhdGEpO1xyXG4gICAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyAoXCJFcnJvciBwYXJzaW5nIDo0OlwiLGZpZWxkX2RhdGEpO1xyXG4gICAgICAgICAgZmllbGRfZGF0YSA9IG51bGw7XHJcbiAgICAgICAgICAvL3JldHVybiBhdHRzO1xyXG4gICAgICB9XHJcbiAgICAgIC8vZmllbGRfZGF0YSA9IEpTT04ucGFyc2UoZmllbGRfZGF0YSk7XHJcbiAgICAgIGlmIChmaWVsZF9kYXRhICE9IG51bGwpe1xyXG4gICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgZmllbGRfZGF0YS5sZW5ndGg7IGorKykge1xyXG4gICAgICAgICAgbGV0IGl0ZW0gPVxyXG4gICAgICAgICAgICB7IHRpdGxlOiBmaWVsZF9kYXRhW2pdLm5hbWUsIHVybDogb2JqZWN0LkF0dER3blVybCArIGVuY29kZVVSSShmaWVsZF9kYXRhW2pdLm5hbWUpIH1cclxuICAgICAgICAgIGl0ZW1zMS5wdXNoKGl0ZW0pO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICBvYmplY3QuaW1nX2dhbGxlcnlbb2JqZWN0LmF0dF9hcnJbaV1dID0gaXRlbXMxO1xyXG4gICAgfVxyXG4gICAgLy9jb25zb2xlLmxvZyhcImltZ19nYWxsZXJ5OlwiLCBvYmplY3QuaW1nX2dhbGxlcnkpXHJcbiAgfVxyXG4gIGlmICh0eXBlb2Ygb2JqZWN0LnN2Z19hcnIgIT0gXCJ1bmRlZmluZWRcIil7XHJcbiAgIGZvciAobGV0IGkgPSAwOyBpIDwgb2JqZWN0LnN2Z19hcnIubGVuZ3RoOyBpKyspe1xyXG4gICAgICBcclxuICAgICAgbGV0IHN2Z1ZhbCA9IGZvcm1Hcm91cFtvYmplY3Quc3ZnX2FycltpXV07XHJcbiAgICAgIGNvbnNvbGUubG9nKFwic3ZnX2FycltpXTpcIiwgb2JqZWN0LnN2Z19hcnJbaV0sIHN2Z1ZhbClcclxuICAgICAgc3ZnVmFsID0gdGhpcy5jb252ZXJ0U3ZnVG9LZW5kb1NWR0ljb24gKHRoaXMsIHN2Z1ZhbCwgbnVsbCxvYmplY3Quc3ZnX2FycltpXSlcclxuICAgICAgY29uc29sZS5sb2coXCJzdmdfYXJyW2ldOm5ldzpcIiwgIHN2Z1ZhbClcclxuICAgICAgZm9ybUdyb3VwW29iamVjdC5zdmdfYXJyW2ldICsgXCJfU1ZHXCJdID0gc3ZnVmFsO1xyXG4gICAgICAgXHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbnB1YmxpYyBjb252VG9TdHJpbmcodmFsKXtcclxuICByZXR1cm4gU3RyaW5nKHZhbClcclxuIH1cclxuXHJcbnB1YmxpYyBhdHRfaW1nX3BvcHVsYXRlQXJyc0xpc3QoZm9ybUdyb3VwQXJyOmFueSxvYmplY3Q6YW55KXtcclxuICAvL2NvbnNvbGUubG9nKFwiYXR0X2ltZ19wb3B1bGF0ZUFycnM6Zm9ybUdyb3VwOlwiLCBmb3JtR3JvdXBBcnIsIG9iamVjdC5hdHRfYXJyLCBvYmplY3QuaW1nX2FycilcclxuICBmb3IgKGxldCBrID0gMDsgayA8IGZvcm1Hcm91cEFyci5sZW5ndGg7IGsrKykge1xyXG4gIGxldCBmb3JtR3JvdXAgPSBmb3JtR3JvdXBBcnJba107XHJcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBvYmplY3QuYXR0X2Fyci5sZW5ndGg7IGkrKykge1xyXG4gICAgLy9jb25zb2xlLmxvZyhcImF0dF9pbWdfcG9wdWxhdGVBcnJzOm9iamVjdC5hdHRfYXJyW2ldOlwiLCBvYmplY3QuYXR0X2FycltpXSxmb3JtR3JvdXAgLCBmb3JtR3JvdXBbb2JqZWN0LmF0dF9hcnJbaV1dKVxyXG4gICAgLy9jb25zb2xlLmxvZyhcImF0dF9pbWdfcG9wdWxhdGVBcnJzOmZvcm1Hcm91cFtvYmplY3QuYXR0X2FycltpXV06XCIrZm9ybUdyb3VwW29iamVjdC5hdHRfYXJyW2ldXS50cmltKCkgK1wiOlwiICApXHJcbiAgICBpZiAoZm9ybUdyb3VwW29iamVjdC5hdHRfYXJyW2ldXS50cmltKCkgIT0gXCJcIikgb2JqZWN0Lm15RmlsZXNbb2JqZWN0LmF0dF9hcnJbaV1dID0gSlNPTi5wYXJzZShmb3JtR3JvdXBbb2JqZWN0LmF0dF9hcnJbaV1dKTtcclxuICB9XHJcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBvYmplY3QuaW1nX2Fyci5sZW5ndGg7IGkrKykge1xyXG4gICAgaWYgKGZvcm1Hcm91cFtvYmplY3QuaW1nX2FycltpXV0gIT0gXCJcIikgb2JqZWN0Lm15RmlsZXNbb2JqZWN0LmltZ19hcnJbaV1dID0gSlNPTi5wYXJzZShmb3JtR3JvdXBbb2JqZWN0LmltZ19hcnJbaV1dKTtcclxuICB9XHJcbiAgLy9jb25zb2xlLmxvZyhcImF0dF9pbWdfcG9wdWxhdGVBcnJzOm9iamVjdC5teUZpbGVzOms6XCIsIGssb2JqZWN0Lm15RmlsZXMsIG9iamVjdC5hdHRfYXJyIClcclxuICBmb3IgKGxldCBpID0gMDsgaSA8IG9iamVjdC5hdHRfYXJyLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAvL2NvbnNvbGUubG9nKFwiYXR0X2ltZ19wb3B1bGF0ZUFycnM6b2JqZWN0LmF0dF9hcnJbaV06XCIsIG9iamVjdC5hdHRfYXJyW2ldLCBmb3JtR3JvdXBbb2JqZWN0LmF0dF9hcnJbaV1dKVxyXG4gICAgLy9jb25zb2xlLmxvZyhcImF0dF9pbWdfcG9wdWxhdGVBcnJzOm9iamVjdC5hdHRfYXJyW2ldOlwiKyBmb3JtR3JvdXBbb2JqZWN0LmF0dF9hcnJbaV1dICsgXCI6XCIpXHJcbiAgICBsZXQgYXJyVmFsID0gZm9ybUdyb3VwW29iamVjdC5hdHRfYXJyW2ldXTtcclxuICAgIGFyclZhbCA9IGFyclZhbC50cmltKCk7XHJcbiAgICBpZiAoICBhcnJWYWwgIT0gXCJcIikge1xyXG4gICAgICBsZXQgaXRlbXMxOmFueSA9W107XHJcbiAgICAgIGxldCBmaWVsZF9kYXRhID0gZm9ybUdyb3VwW29iamVjdC5hdHRfYXJyW2ldXTtcclxuICAgICAgZmllbGRfZGF0YSA9IEpTT04ucGFyc2UoZmllbGRfZGF0YSk7XHJcbiAgICAgIGlmIChmaWVsZF9kYXRhICE9IG51bGwpe1xyXG4gICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgZmllbGRfZGF0YS5sZW5ndGg7IGorKykge1xyXG4gICAgICAgICAgbGV0IGl0ZW0gPVxyXG4gICAgICAgICAgICB7IHRpdGxlOiBmaWVsZF9kYXRhW2pdLm5hbWUsIHVybDogb2JqZWN0LkF0dER3blVybCArIGVuY29kZVVSSShmaWVsZF9kYXRhW2pdLm5hbWUpIH1cclxuICAgICAgICAgIGl0ZW1zMS5wdXNoKGl0ZW0pO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICAvL2NvbnNvbGUubG9nKFwiYXR0X2ltZ19wb3B1bGF0ZUFycnM6aW1nX2dhbGxlcnk6azpcIiwgayxvYmplY3QuYXR0X2FycltpXSwgIGl0ZW1zMSlcclxuICAgICAgbGV0IGltZ19nYWxsZXJ5ID1bXTtcclxuICAgICAgaW1nX2dhbGxlcnlbb2JqZWN0LmF0dF9hcnJbaV1dID0gaXRlbXMxO1xyXG4gICAgICBvYmplY3QuaW1nX2dhbGxlcnlba10gPSBpbWdfZ2FsbGVyeTtcclxuICAgIH1cclxuICAgIGVsc2V7XHJcbiAgICAgIGxldCBpbWdfZ2FsbGVyeSA9W107XHJcbiAgICAgIGltZ19nYWxsZXJ5W29iamVjdC5hdHRfYXJyW2ldXSA9IFtdO1xyXG4gICAgICBvYmplY3QuaW1nX2dhbGxlcnlba10gPSBpbWdfZ2FsbGVyeTtcclxuICAgIH1cclxuICB9XHJcbiAgICAvL2NvbnNvbGUubG9nKFwiYXR0X2ltZ19wb3B1bGF0ZUFycnM6aW1nX2dhbGxlcnk6XCIsIG9iamVjdC5pbWdfZ2FsbGVyeSlcclxuICAgXHJcbiAgfVxyXG4gXHJcbn1cclxucHVibGljIGF0dF93ZWJjYW1fZm9ybV9vcGVuVXBsb2FkaW1hZ2UoZmllbGRfaWQ6YW55LG9iamVjdDphbnkpIHtcclxuICAvL29iamVjdC51cGxvYWRpbWFnZSA9IHRydWU7XHJcbiAgLy9jb25zb2xlLmxvZyhcIm9wZW5VcGxvYWRpbWFnZTpmaWVsZF9pZDpcIiwgZmllbGRfaWQsIG9iamVjdC5teUZpbGVzLCBvYmplY3QubXlGaWxlc1tmaWVsZF9pZF0pXHJcbiAgbGV0IG15RmlsZXMgPSBbXTtcclxuICBpZiAodHlwZW9mIG9iamVjdC5teUZpbGVzW2ZpZWxkX2lkXSAhPSBcInVuZGVmaW5lZFwiKSB7XHJcbiAgICBteUZpbGVzID0gb2JqZWN0Lm15RmlsZXNbZmllbGRfaWRdO1xyXG4gIH1cclxuICBsZXQgZmlsZXNEZWxldGVkID0gW107XHJcbiAgaWYgKHR5cGVvZiBvYmplY3QuZmlsZXNEZWxldGVkW2ZpZWxkX2lkXSAhPSBcInVuZGVmaW5lZFwiKSB7XHJcbiAgICBmaWxlc0RlbGV0ZWQgPSBvYmplY3QuZmlsZXNEZWxldGVkW2ZpZWxkX2lkXTtcclxuICB9XHJcbiAgbGV0IGhpZGVPdGhlcnMgPSBmYWxzZTtcclxuICBpZiAodHlwZW9mIG9iamVjdC5kaXNhYmxlVXBsb2FkICE9IFwidW5kZWZpbmVkXCIpIHtcclxuICAgIGhpZGVPdGhlcnMgPSBvYmplY3QuZGlzYWJsZVVwbG9hZDtcclxuICB9XHJcbiAgbGV0IGltYWdlSUQgPSBmaWVsZF9pZDtcclxuICB2YXIgbWFzdGVyUGFyYW1zID0ge1xyXG4gICAgXCJhY3Rpb25cIjogXCJ1cGxvYWRcIixcclxuICAgIFwiaW1hZ2VJRFwiOiBpbWFnZUlELFxyXG4gICAgXCJteUZpbGVzXCI6IG15RmlsZXMsXHJcbiAgICBcImZpbGVzRGVsZXRlZFwiOiBmaWxlc0RlbGV0ZWQsXHJcbiAgICBcImhpZGVPdGhlcnNcIiA6IGhpZGVPdGhlcnNcclxuICB9XHJcblxyXG5cclxuICBvYmplY3QuRFNQX1dFQkNBTUNvbmZpZyA9IG5ldyBjb21wb25lbnRDb25maWdEZWYoKVxyXG4gIG9iamVjdC5EU1BfV0VCQ0FNQ29uZmlnLm1hc3RlclBhcmFtcyA9IG1hc3RlclBhcmFtc1xyXG4gIC8vY29uc29sZS5sb2coXCJvYmplY3QuRFNQX1dFQkNBTUNvbmZpZy5tYXN0ZXJQYXJhbXM6XCIsIG9iamVjdC5EU1BfV0VCQ0FNQ29uZmlnLm1hc3RlclBhcmFtcylcclxufVxyXG5cclxucHVibGljIGF0dF9pbWdfZm9ybV9vcGVuVXBsb2FkaW1hZ2UoZmllbGRfaWQ6YW55LG9iamVjdDphbnkpIHtcclxuICAvL29iamVjdC51cGxvYWRpbWFnZSA9IHRydWU7XHJcbiAgY29uc29sZS5sb2coXCJvcGVuVXBsb2FkaW1hZ2U6ZmllbGRfaWQ6XCIsIGZpZWxkX2lkLCBvYmplY3QubXlGaWxlcywgb2JqZWN0Lm15RmlsZXNbZmllbGRfaWRdKVxyXG4gIGxldCBteUZpbGVzID0gW107XHJcbiAgaWYgKHR5cGVvZiBvYmplY3QubXlGaWxlc1tmaWVsZF9pZF0gIT0gXCJ1bmRlZmluZWRcIikge1xyXG4gICAgbXlGaWxlcyA9IG9iamVjdC5teUZpbGVzW2ZpZWxkX2lkXTtcclxuICB9XHJcbiAgbGV0IGZpbGVzRGVsZXRlZCA9IFtdO1xyXG4gIGlmICh0eXBlb2Ygb2JqZWN0LmZpbGVzRGVsZXRlZFtmaWVsZF9pZF0gIT0gXCJ1bmRlZmluZWRcIikge1xyXG4gICAgZmlsZXNEZWxldGVkID0gb2JqZWN0LmZpbGVzRGVsZXRlZFtmaWVsZF9pZF07XHJcbiAgfVxyXG4gIGxldCBoaWRlT3RoZXJzID0gZmFsc2U7XHJcbiAgaWYgKHR5cGVvZiBvYmplY3QuZGlzYWJsZVVwbG9hZCAhPSBcInVuZGVmaW5lZFwiKSB7XHJcbiAgICBoaWRlT3RoZXJzID0gb2JqZWN0LmRpc2FibGVVcGxvYWQ7XHJcbiAgfVxyXG4gIGxldCBpbWFnZUlEID0gZmllbGRfaWQ7XHJcbiAgdmFyIG1hc3RlclBhcmFtcyA9IHtcclxuICAgIFwiYWN0aW9uXCI6IFwidXBsb2FkXCIsXHJcbiAgICBcImltYWdlSURcIjogaW1hZ2VJRCxcclxuICAgIFwibXlGaWxlc1wiOiBteUZpbGVzLFxyXG4gICAgXCJmaWxlc0RlbGV0ZWRcIjogZmlsZXNEZWxldGVkLFxyXG4gICAgXCJoaWRlT3RoZXJzXCIgOiBoaWRlT3RoZXJzXHJcbiAgfVxyXG5cclxuXHJcbiAgb2JqZWN0LkRTUF9VUExPQURDb25maWcgPSBuZXcgY29tcG9uZW50Q29uZmlnRGVmKClcclxuICBvYmplY3QuRFNQX1VQTE9BRENvbmZpZy5tYXN0ZXJQYXJhbXMgPSBtYXN0ZXJQYXJhbXNcclxuICBjb25zb2xlLmxvZyhcIm9iamVjdC5EU1BfVVBMT0FEQ29uZmlnLm1hc3RlclBhcmFtczpcIiwgb2JqZWN0LkRTUF9VUExPQURDb25maWcubWFzdGVyUGFyYW1zKVxyXG59XHJcbnB1YmxpYyBjYWxsR2V0U2F2ZUF0dGFjaGVtdHMoYWN0aW9uOmFueSxkYXRhOmFueSxvYmplY3Q6YW55KSB7XHJcbiAgLy9jb25zb2xlLmxvZyhcImNhbGxTYXZlQXR0YWNoZW10czpteUZpbGVzOlwiLCBvYmplY3QubXlGaWxlcylcclxuICBsZXQgY2FuU2VuZCA9IGZhbHNlO1xyXG4gIGlmKCB0eXBlb2Ygb2JqZWN0LmF0dF9hcnIgIT0gXCJ1bmRlZmluZWRcIil7XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IG9iamVjdC5hdHRfYXJyLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIGlmICh0eXBlb2YgZGF0YVtvYmplY3QuYXR0X2FycltpXV0gIT09IFwidW5kZWZpbmVkXCIgJiYgZGF0YVtvYmplY3QuYXR0X2FycltpXV0udHJpbSgpICE9IFwiXCIpIFxyXG4gICAgICAgIGNhblNlbmQgPSB0cnVlO1xyXG4gICAgfVxyXG4gIH1cclxuICBpZiggdHlwZW9mIG9iamVjdC5pbWdfYXJyICE9IFwidW5kZWZpbmVkXCIpe1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBvYmplY3QuaW1nX2Fyci5sZW5ndGg7IGkrKykge1xyXG4gICAgICBpZiAodHlwZW9mIGRhdGFbb2JqZWN0LmltZ19hcnJbaV1dICE9PSBcInVuZGVmaW5lZFwiICYmIGRhdGFbb2JqZWN0LmltZ19hcnJbaV1dLnRyaW0oKSAhPSBcIlwiKSBcclxuICAgICAgICBjYW5TZW5kID0gdHJ1ZTtcclxuICAgIH1cclxuICB9XHJcbiAgdmFyIG1hc3RlclBhcmFtcyA9IHtcclxuICAgIFwiYWN0aW9uXCI6IGFjdGlvbixcclxuICAgIFwiYXR0X2FyclwiOiBvYmplY3QuYXR0X2FycixcclxuICAgIFwiaW1nX2FyclwiOiBvYmplY3QuaW1nX2FycixcclxuICAgIFwibXlGaWxlc1wiOiBvYmplY3QubXlGaWxlcyxcclxuICAgIFwiZmlsZXNEZWxldGVkXCI6IG9iamVjdC5maWxlc0RlbGV0ZWQsXHJcbiAgICBcImRhdGFcIjogZGF0YVxyXG4gIH1cclxuICBpZiAoYWN0aW9uID09IFwic2F2ZVwiKVxyXG4gICAgY2FuU2VuZCA9IHRydWU7XHJcbiAgaWYgKGNhblNlbmQpe1xyXG4gICAgY29uc29sZS5sb2coXCJjYWxsR2V0U2F2ZUF0dGFjaGVtdHM6bWFzdGVyUGFyYW1zOlwiLCBtYXN0ZXJQYXJhbXMpIFxyXG4gICAgb2JqZWN0LkRTUF9VUExPQURDb25maWcgPSBuZXcgY29tcG9uZW50Q29uZmlnRGVmKClcclxuICAgIG9iamVjdC5EU1BfVVBMT0FEQ29uZmlnLm1hc3RlclBhcmFtcyA9IG1hc3RlclBhcmFtc1xyXG4gIH1cclxuXHJcbn1cclxucHVibGljIGNhbGxHZXRTYXZlV2ViQ2FtKGFjdGlvbjphbnksZGF0YTphbnksb2JqZWN0OmFueSkge1xyXG4gIC8vY29uc29sZS5sb2coXCJjYWxsU2F2ZUF0dGFjaGVtdHM6bXlGaWxlczpcIiwgb2JqZWN0Lm15RmlsZXMpXHJcbiAgdmFyIG1hc3RlclBhcmFtcyA9IHtcclxuICAgIFwiYWN0aW9uXCI6IGFjdGlvbixcclxuICAgIFwiYXR0X2FyclwiOiBvYmplY3QuYXR0X2FycixcclxuICAgIFwiaW1nX2FyclwiOiBvYmplY3QuaW1nX2FycixcclxuICAgIFwibXlGaWxlc1wiOiBvYmplY3QubXlGaWxlcyxcclxuICAgIFwiZmlsZXNEZWxldGVkXCI6IG9iamVjdC5maWxlc0RlbGV0ZWQsXHJcbiAgICBcImRhdGFcIjogZGF0YVxyXG4gIH1cclxuXHJcbiAgb2JqZWN0LkRTUF9XRUJDQU1Db25maWcgPSBuZXcgY29tcG9uZW50Q29uZmlnRGVmKClcclxuICBvYmplY3QuRFNQX1dFQkNBTUNvbmZpZy5tYXN0ZXJQYXJhbXMgPSBtYXN0ZXJQYXJhbXNcclxuXHJcbn1cclxuYXN5bmMgYXR0X2ltZ19zYXZlRm9ybUNvbXBsZXRlZEhhbmRsZXIodmFsdWU6YW55LG9iamVjdDphbnkpIHtcclxuICAvL2NvbnNvbGUubG9nKFwiYXR0X2ltZ19zYXZlRm9ybUNvbXBsZXRlZEhhbmRsZXI6dmFsdWVcIiwgdmFsdWUpO1xyXG4gIGxldCBmaWVsZF9pZCA9IHZhbHVlLmZpZWxkX2lkO1xyXG4gIG9iamVjdC5teUZpbGVzW2ZpZWxkX2lkXSA9IHZhbHVlLm15RmlsZXM7XHJcbiAgb2JqZWN0LmZpbGVzRGVsZXRlZFtmaWVsZF9pZF0gPSB2YWx1ZS5maWxlc0RlbGV0ZWQ7XHJcbiAgb2JqZWN0LmNhbUltYWdlID0gdmFsdWUuY2FtSW1hZ2U7XHJcbiAgLy9jb25zb2xlLmxvZyhcIm9iamVjdC5teUZpbGVzW2ZpZWxkX2lkXTpcIiwgb2JqZWN0Lm15RmlsZXNbZmllbGRfaWRdKVxyXG4gIGxldCBKU09OVmFsICA9IEpTT04uc3RyaW5naWZ5KG9iamVjdC5teUZpbGVzW2ZpZWxkX2lkXSk7XHJcbiAgaWYgKEpTT05WYWwgPT0gXCJbXVwiKVxyXG4gICAgSlNPTlZhbCA9IFwiXCI7XHJcbiAgb2JqZWN0LmZvcm0uZ2V0UmF3VmFsdWUoKVtmaWVsZF9pZF0gPSBKU09OVmFsO1xyXG4gIG9iamVjdC5mb3JtLnBhdGNoVmFsdWUoeyBbZmllbGRfaWRdOiBKU09OVmFsIH0pO1xyXG4gIGlmICh0eXBlb2Ygb2JqZWN0LmF0dF9pbWdfc2F2ZUZvcm1Db21wbGV0ZWQgIT0gXCJ1bmRlZmluZWRcIikge1xyXG4gICAgbGV0IE5ld1ZhbDphbnkgPSBbXTtcclxuICAgIE5ld1ZhbC5wdXNoKGZpZWxkX2lkKTtcclxuICAgIG9iamVjdC5hdHRfaW1nX3NhdmVGb3JtQ29tcGxldGVkLmFwcGx5KG9iamVjdCwgTmV3VmFsKTtcclxuICB9XHJcbn1cclxuYXN5bmMgYXR0X2ltZ19zYXZlRm9ybTJDb21wbGV0ZWRIYW5kbGVyKHZhbHVlOmFueSxvYmplY3Q6YW55KSB7XHJcbiAgY29uc29sZS5sb2coXCJhdHRfaW1nX3NhdmVGb3JtQ29tcGxldGVkSGFuZGxlcjp2YWx1ZVwiLCB2YWx1ZSk7XHJcbiAgbGV0IGZpZWxkX2lkID0gdmFsdWUuZmllbGRfaWQ7XHJcbiAgb2JqZWN0Lm15RmlsZXNbZmllbGRfaWRdID0gdmFsdWUubXlGaWxlcztcclxuICBvYmplY3QuZmlsZXNEZWxldGVkW2ZpZWxkX2lkXSA9IHZhbHVlLmZpbGVzRGVsZXRlZDtcclxuICBjb25zb2xlLmxvZyhcIm9iamVjdC5teUZpbGVzW2ZpZWxkX2lkXTpcIiwgb2JqZWN0Lm15RmlsZXNbZmllbGRfaWRdKVxyXG4gIGxldCBKU09OVmFsICA9IEpTT04uc3RyaW5naWZ5KG9iamVjdC5teUZpbGVzW2ZpZWxkX2lkXSk7XHJcbiAgaWYgKEpTT05WYWwgPT0gXCJbXVwiKVxyXG4gICAgSlNPTlZhbCA9IFwiXCI7XHJcbiAgb2JqZWN0LmZvcm0yLnZhbHVlW2ZpZWxkX2lkXSA9IEpTT05WYWw7XHJcbiAgb2JqZWN0LmZvcm0yLnBhdGNoVmFsdWUoeyBbZmllbGRfaWRdOiBKU09OVmFsIH0pO1xyXG4gIGlmICh0eXBlb2Ygb2JqZWN0LmF0dF9pbWdfc2F2ZUZvcm1Db21wbGV0ZWQgIT0gXCJ1bmRlZmluZWRcIikge1xyXG4gICAgbGV0IE5ld1ZhbDphbnkgPSBbXTtcclxuICAgIE5ld1ZhbC5wdXNoKGZpZWxkX2lkKTtcclxuICAgIG9iamVjdC5hdHRfaW1nX3NhdmVGb3JtQ29tcGxldGVkLmFwcGx5KG9iamVjdCwgTmV3VmFsKTtcclxuICB9XHJcbn1cclxucHVibGljIGF0dF9pbWdfc2F2ZUdyaWRDb21wbGV0ZWRIYW5kbGVyKHZhbHVlOmFueSxvYmplY3Q6YW55KSB7XHJcbiAgXHJcbiAgLy9jb25zb2xlLmxvZyhcImF0dF9pbWdfc2F2ZUdyaWRDb21wbGV0ZWRIYW5kbGVyOnZhbHVlXCIsIHZhbHVlKTtcclxuICBsZXQgZmllbGRfaWQgPSB2YWx1ZS5maWVsZF9pZDtcclxuICBvYmplY3QubXlGaWxlc1tmaWVsZF9pZF0gPSB2YWx1ZS5teUZpbGVzO1xyXG4gIG9iamVjdC5maWxlc0RlbGV0ZWRbZmllbGRfaWRdID0gdmFsdWUuZmlsZXNEZWxldGVkO1xyXG4gIC8vY29uc29sZS5sb2coXCJjaGVja2luZzoyOm9iamVjdC5teUZpbGVzW2ZpZWxkX2lkXTpcIiwgSlNPTi5zdHJpbmdpZnkob2JqZWN0Lm15RmlsZXNbZmllbGRfaWRdKSApXHJcbiAgbGV0IEpTT05WYWwgID0gSlNPTi5zdHJpbmdpZnkob2JqZWN0Lm15RmlsZXNbZmllbGRfaWRdKTtcclxuICBpZiAoSlNPTlZhbCA9PSBcIltdXCIpXHJcbiAgICBKU09OVmFsID0gXCJcIjtcclxuICBvYmplY3QuZm9ybUdyb3VwLnBhdGNoVmFsdWUoeyBbZmllbGRfaWRdOiBKU09OVmFsIH0pO1xyXG4gIG9iamVjdC5mb3JtR3JvdXAubWFya0FzRGlydHkoKTtcclxuICAvL2NvbnNvbGUubG9nKFwiYXR0X2ltZ19zYXZlR3JpZENvbXBsZXRlZEhhbmRsZXI6b2JqZWN0LmZvcm1Hcm91cC52YWx1ZVwiLCBvYmplY3QuZm9ybUdyb3VwLnZhbHVlKTtcclxuICBvYmplY3QudXBsb2FkaW1hZ2U9ZmFsc2U7XHJcbn1cclxucHVibGljIGFzeW5jIGF0dF9pbWdfZ3JpZF9vcGVuVXBsb2FkaW1hZ2UoZmllbGRfaWQ6YW55LG9iamVjdDphbnkpIHtcclxuICBpZiAoIW9iamVjdC5jb21wb25lbnRDb25maWcuZW5hYmxlZCkgcmV0dXJuO1xyXG4gIGF3YWl0IG9iamVjdC5zdGFyU2VydmljZXMuc2xlZXAoMzAwKTtcclxuICAvL2NvbnNvbGUubG9nKFwiYXR0X2ltZ19ncmlkX29wZW5VcGxvYWRpbWFnZTpvYmplY3QuZm9ybUdyb3VwOlwiLCBvYmplY3QuZm9ybUdyb3VwKVxyXG4gIG9iamVjdC51cGxvYWRpbWFnZSA9IHRydWU7XHJcbiAgaWYgKHR5cGVvZiBvYmplY3QuZm9ybUdyb3VwICE9IFwidW5kZWZpbmVkXCIpIHtcclxuICAgIG9iamVjdC5teUZpbGVzW2ZpZWxkX2lkXSA9W107XHJcbiAgICBvYmplY3Quc3RhclNlcnZpY2VzLmF0dF9pbWdfcG9wdWxhdGVBcnJzKG9iamVjdC5mb3JtR3JvdXAudmFsdWUsb2JqZWN0KTtcclxuICAgIC8vY29uc29sZS5sb2coXCJvcGVuVXBsb2FkaW1hZ2U6ZmllbGRfaWQ6XCIsIGZpZWxkX2lkLCBvYmplY3QubXlGaWxlcywgb2JqZWN0Lm15RmlsZXNbZmllbGRfaWRdKVxyXG4gICAgbGV0IG15RmlsZXMgPSBbXTtcclxuICAgIGlmICh0eXBlb2Ygb2JqZWN0Lm15RmlsZXNbZmllbGRfaWRdICE9IFwidW5kZWZpbmVkXCIpIHtcclxuICAgICAgbXlGaWxlcyA9IG9iamVjdC5teUZpbGVzW2ZpZWxkX2lkXTtcclxuICAgIH1cclxuICAgIGxldCBmaWxlc0RlbGV0ZWQgPSBbXTtcclxuICAgIGlmICh0eXBlb2Ygb2JqZWN0LmZpbGVzRGVsZXRlZFtmaWVsZF9pZF0gIT0gXCJ1bmRlZmluZWRcIikge1xyXG4gICAgICBmaWxlc0RlbGV0ZWQgPSBvYmplY3QuZmlsZXNEZWxldGVkW2ZpZWxkX2lkXTtcclxuICAgIH1cclxuICBsZXQgaGlkZU90aGVycyA9IGZhbHNlO1xyXG4gIGlmICh0eXBlb2Ygb2JqZWN0LmRpc2FibGVVcGxvYWQgIT0gXCJ1bmRlZmluZWRcIikge1xyXG4gICAgaGlkZU90aGVycyA9IG9iamVjdC5kaXNhYmxlVXBsb2FkO1xyXG4gIH1cclxuICAgIGxldCBpbWFnZUlEID0gZmllbGRfaWQ7XHJcbiAgICB2YXIgbWFzdGVyUGFyYW1zID0ge1xyXG4gICAgICBcImFjdGlvblwiOiBcInVwbG9hZFwiLFxyXG4gICAgICBcImltYWdlSURcIjogaW1hZ2VJRCxcclxuICAgICAgXCJteUZpbGVzXCI6IG15RmlsZXMsXHJcbiAgICAgIFwiZmlsZXNEZWxldGVkXCI6IGZpbGVzRGVsZXRlZCxcclxuICAgICAgIFwiaGlkZU90aGVyc1wiIDogaGlkZU90aGVyc1xyXG4gICAgfVxyXG5cclxuICAgIG9iamVjdC5EU1BfVVBMT0FEQ29uZmlnID0gbmV3IGNvbXBvbmVudENvbmZpZ0RlZigpXHJcbiAgICBvYmplY3QuRFNQX1VQTE9BRENvbmZpZy5tYXN0ZXJQYXJhbXMgPSBtYXN0ZXJQYXJhbXNcclxuICB9XHJcbn1cclxucHVibGljIGFzeW5jIGF0dF93ZWJjYW1fZ3JpZF9vcGVuVXBsb2FkaW1hZ2UoZmllbGRfaWQ6YW55LG9iamVjdDphbnkpIHtcclxuICBpZiAoIW9iamVjdC5jb21wb25lbnRDb25maWcuZW5hYmxlZCkgcmV0dXJuO1xyXG4gIGF3YWl0IG9iamVjdC5zdGFyU2VydmljZXMuc2xlZXAoMzAwKTtcclxuICAvL2NvbnNvbGUubG9nKFwiYXR0X3dlYmNhbV9ncmlkX29wZW5VcGxvYWRpbWFnZTpvYmplY3QuZm9ybUdyb3VwOlwiLCBvYmplY3QuZm9ybUdyb3VwKVxyXG4gIG9iamVjdC51cGxvYWRpbWFnZSA9IHRydWU7XHJcbiAgaWYgKHR5cGVvZiBvYmplY3QuZm9ybUdyb3VwICE9IFwidW5kZWZpbmVkXCIpIHtcclxuICAgIG9iamVjdC5teUZpbGVzW2ZpZWxkX2lkXSA9W107XHJcbiAgICBvYmplY3Quc3RhclNlcnZpY2VzLmF0dF9pbWdfcG9wdWxhdGVBcnJzKG9iamVjdC5mb3JtR3JvdXAudmFsdWUsb2JqZWN0KTtcclxuICAgIC8vY29uc29sZS5sb2coXCJvcGVuVXBsb2FkaW1hZ2U6ZmllbGRfaWQ6XCIsIGZpZWxkX2lkLCBvYmplY3QubXlGaWxlcywgb2JqZWN0Lm15RmlsZXNbZmllbGRfaWRdKVxyXG4gICAgbGV0IG15RmlsZXMgPSBbXTtcclxuICAgIGlmICh0eXBlb2Ygb2JqZWN0Lm15RmlsZXNbZmllbGRfaWRdICE9IFwidW5kZWZpbmVkXCIpIHtcclxuICAgICAgbXlGaWxlcyA9IG9iamVjdC5teUZpbGVzW2ZpZWxkX2lkXTtcclxuICAgIH1cclxuICAgIGxldCBmaWxlc0RlbGV0ZWQgPSBbXTtcclxuICAgIGlmICh0eXBlb2Ygb2JqZWN0LmZpbGVzRGVsZXRlZFtmaWVsZF9pZF0gIT0gXCJ1bmRlZmluZWRcIikge1xyXG4gICAgICBmaWxlc0RlbGV0ZWQgPSBvYmplY3QuZmlsZXNEZWxldGVkW2ZpZWxkX2lkXTtcclxuICAgIH1cclxuXHJcbiAgICBsZXQgaW1hZ2VJRCA9IGZpZWxkX2lkO1xyXG4gICAgdmFyIG1hc3RlclBhcmFtcyA9IHtcclxuICAgICAgXCJhY3Rpb25cIjogXCJ1cGxvYWRcIixcclxuICAgICAgXCJpbWFnZUlEXCI6IGltYWdlSUQsXHJcbiAgICAgIFwibXlGaWxlc1wiOiBteUZpbGVzLFxyXG4gICAgICBcImZpbGVzRGVsZXRlZFwiOiBmaWxlc0RlbGV0ZWRcclxuICAgIH1cclxuXHJcbiAgICBvYmplY3QuRFNQX1dFQkNBTUNvbmZpZyA9IG5ldyBjb21wb25lbnRDb25maWdEZWYoKVxyXG4gICAgb2JqZWN0LkRTUF9XRUJDQU1Db25maWcubWFzdGVyUGFyYW1zID0gbWFzdGVyUGFyYW1zXHJcbiAgfVxyXG59XHJcbnB1YmxpYyBhZGROZXdDb2RlKG9iamVjdDphbnksIENPREVOQU1FOmFueSk6IHZvaWQge1xyXG4gIG9iamVjdC5ncmlkX3NvbV90YWJzX2NvZGVzID0gbmV3IHRhYnNDb2RlcygpO1xyXG4gIG9iamVjdC5ncmlkX3NvbV90YWJzX2NvZGVzWydDT0RFTkFNRSddID0gQ09ERU5BTUU7IC8vIGZvciByZXRyaWV2ZSBkYXRhXHJcbiAgXHJcbiAgXHJcbiAgb2JqZWN0LlNPTV9UQUJTX0NPREVTQ29uZmlnID0gIG5ldyBjb21wb25lbnRDb25maWdEZWYoKTtcclxuICBsZXQgbWFzdGVyUGFyYW1zID0ge1xyXG4gICAgYWN0aW9uOiBcIkFERFwiLFxyXG4gICAgQ09ERU5BTUU6Q09ERU5BTUUsXHJcbiAgICBDT0RFOm9iamVjdC5maWx0ZXJDb2RlLFxyXG4gICAgQ09ERVRFWFRfTEFORyA6IG9iamVjdC5maWx0ZXJDb2RlXHJcbiAgfVxyXG4gIG9iamVjdC5TT01fVEFCU19DT0RFU0NvbmZpZy5tYXN0ZXJQYXJhbXMgPSBtYXN0ZXJQYXJhbXM7IC8vIEZvciBhZGQgbmV3IHJlY29yZFxyXG4gIG9iamVjdC5zaG93Q29kZURldGFpbHM9dHJ1ZTtcclxufVxyXG5cclxucHVibGljIHNldElkT3JkZXIob2JqZWN0LGlkRmllbGQsIG9yZGVyRmllbGQpe1xyXG4gIGxldCBJRCA9IDE7XHJcbiAgbGV0IE9SREVSID0gMTtcclxuXHJcbiAgbGV0IEdyaWREYXRhOmFueSA9IG9iamVjdC5ncmlkLmRhdGE7XHJcbiAgaWYgKHR5cGVvZiBHcmlkRGF0YS5kYXRhICE9PSBcInVuZGVmaW5lZFwiKXtcclxuICAgIGZvciAobGV0IGk9MDsgaSA8IEdyaWREYXRhLmRhdGEubGVuZ3RoIDsgaSsrKXtcclxuICAgICAgaWYgKEdyaWREYXRhLmRhdGFbaV1baWRGaWVsZF0gPj0gSUQpXHJcbiAgICAgICAgSUQgPSBwYXJzZUludCggR3JpZERhdGEuZGF0YVtpXVtpZEZpZWxkXSkgKyAxO1xyXG4gICAgICBpZiAoR3JpZERhdGEuZGF0YVtpXVtvcmRlckZpZWxkXSA+PSBPUkRFUilcclxuICAgICAgICBPUkRFUiA9IHBhcnNlSW50KEdyaWREYXRhLmRhdGFbaV1bb3JkZXJGaWVsZF0gKSArIDE7XHJcbiAgICB9XHJcbiAgfVxyXG4gIGxldCB2YWx1ZXMgPSB7XHJcbiAgICBbaWRGaWVsZF06IElELFxyXG4gICAgW29yZGVyRmllbGRdOiBPUkRFUlxyXG4gIH1cclxuICBjb25zb2xlLmxvZyhcInNldEluaXRpYWxWYWx1ZXM6dmFsdWVzOlwiLHZhbHVlcyApXHJcbiAgb2JqZWN0LmZvcm1Hcm91cC5wYXRjaFZhbHVlKHZhbHVlcylcclxufVxyXG5wdWJsaWMgcm93UmVvcmRlcihvYmplY3QsIG9yZGVyRmllbGQsIGUpe1xyXG4gIGlmIChvYmplY3QucGFyYW1Db25maWcuREVCVUdfRkxBRykgY29uc29sZS5sb2cgKFwicm93UmVvcmRlcjpcIiwgZSk7XHJcbiAgaWYgKG9iamVjdC5wYXJhbUNvbmZpZy5ERUJVR19GTEFHKSBjb25zb2xlLmxvZyAoXCJyb3dSZW9yZGVyOlwiLCBlLmRyYWdnZWRSb3dzWzBdLnJvd0luZGV4KVxyXG4gICAgaWYgKG9iamVjdC5wYXJhbUNvbmZpZy5ERUJVR19GTEFHKSBjb25zb2xlLmxvZyAoXCJyb3dSZW9yZGVyOlwiLCBlLmRyb3BQb3NpdGlvbik7XHJcbiAgaWYgKG9iamVjdC5wYXJhbUNvbmZpZy5ERUJVR19GTEFHKSBjb25zb2xlLmxvZyAoXCJyb3dSZW9yZGVyOlwiLCBlLmRyb3BUYXJnZXRSb3cucm93SW5kZXgpXHJcbiAgbGV0IGRhdGFJdGVtID0gZS5kcmFnZ2VkUm93c1swXS5kYXRhSXRlbTtcclxuICBsZXQgR3JpZERhdGE7XHJcbiAgR3JpZERhdGEgPSAgb2JqZWN0LmdyaWQuZGF0YTtcclxuXHJcbiAgaWYgKGUuZHJvcFBvc2l0aW9uID09IFwiYWZ0ZXJcIil7XHJcbiAgICBHcmlkRGF0YS5kYXRhLnNwbGljZShlLmRyb3BUYXJnZXRSb3cucm93SW5kZXgrMSwgMCwgZGF0YUl0ZW0pO1xyXG4gICAgLy9SZW1vdmUgZHJhZ2dlZFJvd3NcclxuICAgIEdyaWREYXRhLmRhdGEgPSBHcmlkRGF0YS5kYXRhLmZpbHRlcihmdW5jdGlvbiAoZGF0YUl0ZW0sIGluZGV4KSB7XHJcbiAgICAgIHJldHVybiBpbmRleCAhPT0gZS5kcmFnZ2VkUm93c1swXS5yb3dJbmRleDtcclxuICAgIH0pO1xyXG4gIH1cclxuICBlbHNlXHJcbiAgaWYgKGUuZHJvcFBvc2l0aW9uID09IFwiYmVmb3JlXCIpe1xyXG4gICAgIC8vUmVtb3ZlIGRyYWdnZWRSb3dzXHJcbiAgICBHcmlkRGF0YS5kYXRhID0gR3JpZERhdGEuZGF0YS5maWx0ZXIoZnVuY3Rpb24gKGRhdGFJdGVtLCBpbmRleCkge1xyXG4gICAgICByZXR1cm4gaW5kZXggIT09IGUuZHJhZ2dlZFJvd3NbMF0ucm93SW5kZXg7XHJcbiAgICB9KTtcclxuICAgIEdyaWREYXRhLmRhdGEuc3BsaWNlKGUuZHJvcFRhcmdldFJvdy5yb3dJbmRleCwgMCwgZGF0YUl0ZW0pO1xyXG4gIH1cclxuIC8vd3JpdGUgb3JkZXIgZmllbGRcclxuIGlmIChvYmplY3QucGFyYW1Db25maWcuREVCVUdfRkxBRykgY29uc29sZS5sb2coXCJyb3dSZW9yZGVyOkdyaWREYXRhLmRhdGE6XCIsR3JpZERhdGEuZGF0YSk7XHJcbiBmb3IgKGxldCBpPTA7IGkgPCBHcmlkRGF0YS5kYXRhLmxlbmd0aDtpKyspe1xyXG4gICBHcmlkRGF0YS5kYXRhW2ldW29yZGVyRmllbGRdPSBpICsgMTtcclxuICAgR3JpZERhdGEuZGF0YVtpXS5fUVVFUlkgPSBvYmplY3QudXBkYXRlQ01EO1xyXG4gfVxyXG4gb2JqZWN0LnNhdmVDaGFuZ2VzKG9iamVjdC5ncmlkKTtcclxufVxyXG5cclxucHVibGljIGhhbmRsZUZpbHRlckNvZGUob2JqZWN0OmFueSxDT0RFOmFueSkge1xyXG4gIGlmIChvYmplY3Quc3RhclNlcnZpY2VzLnNlc3Npb25QYXJhbXMuVVNFUl9JTkZPLkdST1VQTkFNRSA9PSBcIlNZU0FETVwiKXtcclxuICAgIG9iamVjdC5maWx0ZXJDb2RlID0gQ09ERTtcclxuICB9XHJcbiB9XHJcbiByZW1vdmVOb25WYWxpZENvbHVtbnMoY29tcCxJbml0aWFsVmFsdWVzKXtcclxuICAgICBjb25zb2xlLmxvZyhcInJlbW92ZU5vblZhbGlkR3JpZENvbHVtbnM6XCIsIGNvbXAsIEluaXRpYWxWYWx1ZXMpXHJcbiAgICAgbGV0IEtleXMgPSBPYmplY3Qua2V5cyhjb21wKTtcclxuIFxyXG4gICAgIGZvciAobGV0IGogPTA7IGo8IEtleXMubGVuZ3RoO2orKyl7XHJcbiAgICAgICBsZXQgZmllbGQgPSBLZXlzW2pdO1xyXG4gICAgICAgbGV0IGV4aXN0cyA9IEluaXRpYWxWYWx1ZXNbZmllbGRdXHJcbiAgICAgICBjb25zb2xlLmxvZyhcInJlbW92ZU5vblZhbGlkR3JpZENvbHVtbnM6XCIsIGZpZWxkLCBleGlzdHMpXHJcbiAgICAgICBpZiAodHlwZW9mIGV4aXN0cyA9PSBcInVuZGVmaW5lZFwiKXtcclxuICAgICAgICAgZGVsZXRlIGNvbXBbZmllbGRdO1xyXG4gICAgICAgfVxyXG4gICAgIH1cclxuICAgfVxyXG4gcHVibGljIGZvcm1hdHRoaXNEYXRlKGRhdGUxLCBEYXRlRm9ybWF0LGRhdGVMb2NhbGUpXHJcbntcclxuICBpZiAoKGRhdGUxICE9IFwiXCIpICYmICh0eXBlb2YgZGF0ZTEgIT0gXCJ1bmRlZmluZWRcIikpXHJcbiAgICByZXR1cm4gKGZvcm1hdERhdGUoZGF0ZTEsIERhdGVGb3JtYXQsZGF0ZUxvY2FsZSkpO1xyXG4gIGVsc2VcclxuICAgIHJldHVybiBudWxsO1xyXG59XHJcbiBwdWJsaWMgZW5jcnlwdFNlY3JldEtleT1cIkFwcEdlbkBTdGFyMTIzNFwiO1xyXG4gZW5jcnlwdERhdGEoZGF0YSkge1xyXG5cclxuIHRyeSB7XHJcbiAgIHJldHVybiBDcnlwdG9KUy5BRVMuZW5jcnlwdChKU09OLnN0cmluZ2lmeShkYXRhKSwgdGhpcy5lbmNyeXB0U2VjcmV0S2V5KS50b1N0cmluZygpO1xyXG4gfSBjYXRjaCAoZSkge1xyXG4gICBjb25zb2xlLmxvZyhlKTtcclxuIH1cclxufVxyXG5wdWJsaWMgZGVjcnlwdERhdGEoZGF0YSkge1xyXG5cclxuIHRyeSB7XHJcbiAgIGNvbnN0IGJ5dGVzID0gQ3J5cHRvSlMuQUVTLmRlY3J5cHQoZGF0YSwgdGhpcy5lbmNyeXB0U2VjcmV0S2V5KTtcclxuICAgaWYgKGJ5dGVzLnRvU3RyaW5nKCkpIHtcclxuICAgICByZXR1cm4gSlNPTi5wYXJzZShieXRlcy50b1N0cmluZyhDcnlwdG9KUy5lbmMuVXRmOCkpO1xyXG4gICB9XHJcbiAgIHJldHVybiBkYXRhO1xyXG4gfSBjYXRjaCAoZSkge1xyXG4gICBjb25zb2xlLmxvZyhlKTtcclxuIH1cclxufVxyXG5wdWJsaWMgIHBhcnNlQ29va2llcyA9IChjb29raWVTdHIpID0+XHJcbiAgY29va2llU3RyLnNwbGl0KFwiO1wiKVxyXG4gICAgLm1hcChzdHIgPT4gc3RyLnRyaW0oKS5zcGxpdCgvPSguKykvKSlcclxuICAgIC5yZWR1Y2UoKGFjYywgY3VycikgPT4ge1xyXG4gICAgICAgIGFjY1tjdXJyWzBdXSA9IGN1cnJbMV07XHJcbiAgICAgICAgcmV0dXJuIGFjYztcclxuICAgIH0sIHt9KVxyXG5wdWJsaWMgZGF0YUV4aXRzKG9iamVjdCkge1xyXG4gICAgbGV0IHN0YXR1cyA9IGZhbHNlO1xyXG4gICAgaWYgKHR5cGVvZiAob2JqZWN0LmV4ZWN1dGVRdWVyeXJlc3VsdCkgIT0gXCJ1bmRlZmluZWRcIikge1xyXG4gICAgICBpZiAob2JqZWN0LmV4ZWN1dGVRdWVyeXJlc3VsdC5kYXRhKSB7XHJcbiAgICAgICAgc3RhdHVzID0gdHJ1ZTtcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gc3RhdHVzO1xyXG5cclxuICAgIH1cclxuICB9XHJcbnB1YmxpYyBoaWRlTm9WYWxpZExpY2Vuc2UoKVxyXG4ge1xyXG4gICAgIGNvbnN0IGNvbGxlY3Rpb24gPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcImRpdlwiKTsgXHJcbiAgICAgLy9jb25zb2xlLmxvZyAoXCJjaGVja2luZzpjb2xsZWN0aW9uOlwiLGNvbGxlY3Rpb24pO1xyXG4gICAgIGZvciAobGV0IGk9MDtpPGNvbGxlY3Rpb24ubGVuZ3RoO2krKyl7XHJcbiAgICAgICBsZXQgaW5uZXJIVE1MOmFueSA9IGNvbGxlY3Rpb25baV0uaW5uZXJIVE1MO1xyXG4gICAgICAgLy9jb25zb2xlLmxvZyAoXCJjaGVja2luZzppbm5lckhUTUw6XCIsaW5uZXJIVE1MKTtcclxuICAgICAgIC8vbGV0IHJlc3VsdCA9IGlubmVySFRNTC5pbmNsdWRlcyhcIm5nLXJlZmxlY3Qtbmctc3R5bGVcIik7XHJcbiAgICAgICAvL2xldCByZXN1bHQgPSBpbm5lckhUTUwuaW5jbHVkZXMoXCJkaXNwbGF5OiBmbGV4O1wiKTtcclxuICAgICAgIGxldCByZXN1bHQgPSBpbm5lckhUTUwuaW5jbHVkZXMoXCJBIGxpY2Vuc2Uga2V5IGlzIHJlcXVpcmVkXCIpO1xyXG4gICAgICAgLy9jb25zb2xlLmxvZyAoXCJjaGVja2luZzpyZXN1bHQ6XCIsaSwgcmVzdWx0KTtcclxuICAgICAgIGlmIChyZXN1bHQpe1xyXG4gICAgICAgICByZXN1bHQgPSBpbm5lckhUTUwuaW5jbHVkZXMoXCJMaWNlbnNlIGtleSBtaXNzaW5nXCIpO1xyXG4gICAgICAgICBpZiAocmVzdWx0KXtcclxuICAgICAgICAgICAvL2NvbnNvbGUubG9nIChcImNoZWNraW5nOmlubmVySFRNTDpcIixyZXN1bHQsaW5uZXJIVE1MKTtcclxuICAgICAgICAgICBjb2xsZWN0aW9uW2ldLnN0eWxlLnNldFByb3BlcnR5KCdkaXNwbGF5JywgJ25vbmUnKTtcclxuICAgICAgICAgICB9XHJcbiBcclxuICAgICAgIH1cclxuICAgICAgIFxyXG4gICAgIH1cclxuICAgICAvL2NvbnNvbGUubG9nIChcImNvbGxlY3Rpb246XCIsIGNvbGxlY3Rpb24ubGVuZ3RoLCBjb2xsZWN0aW9uWzM1XSlcclxuIH1cclxuIFxyXG4gIGFzeW5jICBzaG93TXVsdGlTdGVwRm9ybShvYmplY3QsIHRlbXBsYXRlTmFtZSkge1xyXG4gICAgIGxldCBCb2R5ID0gW107XHJcbiAgICAgbGV0IHRlbXBsYXRlSW5mbzphbnk7XHJcbiAgICAgdmFyIG5ld1ZhbDphbnkgPSB7IFwiX1FVRVJZXCI6IFwiR0VUX0RTUF9URU1QTEFURVwiLCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlRFTVBMQVRFX05BTUVcIjogdGVtcGxhdGVOYW1lIH07XHJcbiAgICAgQm9keS5wdXNoKG5ld1ZhbCk7XHJcbiAgICAgbmV3VmFsID0geyBcIl9RVUVSWVwiOiBcIkdFVF9EU1BfVEVNUExBVEVfREVUQUlMXCIsIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiVEVNUExBVEVfTkFNRVwiOiB0ZW1wbGF0ZU5hbWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlNFUVVFTkNFX05BTUVcIjogXCIlXCJ9O1xyXG4gICAgICBCb2R5LnB1c2gobmV3VmFsKTtcclxuICAgICAgbGV0IGRhdGEgPSBhd2FpdCB0aGlzLmV4ZWNTUUxCb2R5KHRoaXMsIEJvZHksIFwiXCIpO1xyXG4gICAgIGlmICh0eXBlb2YgZGF0YSAhPSBcInVuZGVmaW5lZFwiICYmIGRhdGFbMF0uZGF0YS5sZW5ndGggPiAwKSB7XHJcbiAgICAgICB0aGlzLkJvZHkgPSBbXTtcclxuICAgICAgIHRlbXBsYXRlSW5mbyA9IGRhdGFbMF0uZGF0YVswXTtcclxuICAgICAgIGxldCB0ZW1wbGF0ZURldGFpbCA9IGRhdGFbMV0uZGF0YVswXTtcclxuIFxyXG5cclxuICAgICAgIC8vaWYgKCh0aGlzLmFkZEZvcm0udmFsdWUuT1JERVJfRklFTERTID09IFwiXCIpIHx8ICh0aGlzLmFkZEZvcm0udmFsdWUuT1JERVJfRklFTERTID09IG51bGwpKSB7XHJcbiAgICAgICAvLyAgdGhpcy5hZGRGb3JtLnZhbHVlLk9SREVSX0ZJRUxEUyA9IFwie31cIjtcclxuICAgICAgIC8vfVxyXG4gXHJcbiAgICAgICBcclxuICAgICAgIHZhciBmb3JtUGFnZXNObyA9IHRlbXBsYXRlRGV0YWlsLkZPUk1fUEFHRVNfTk87XHJcbiAgICAgICBvYmplY3QuZm9ybU1hc3RlclBhcmFtcyA9IHtcclxuICAgICAgICAgXCJmb3JtTmFtZVwiOiB0ZW1wbGF0ZUluZm8uRk9STV9OQU1FLFxyXG4gICAgICAgICBcImZvcm1QYWdlc05vXCI6IGZvcm1QYWdlc05vLFxyXG4gICAgICAgICAvL1wib3JkZXJGaWVsZHNcIjogdGhpcy5hZGRGb3JtLnZhbHVlLk9SREVSX0ZJRUxEUyxcclxuICAgICAgICAgXCJvcmRlckZpZWxkc1wiOiBcInt9XCIsXHJcbiAgICAgICAgIC8vXCJhZGRGb3JtXCI6IHRoaXMuYWRkRm9ybS52YWx1ZSxcclxuICAgICAgICAgXCJhZGRGb3JtXCI6dGVtcGxhdGVJbmZvLFxyXG4gICAgICAgICBcImNhbGxpbmdGb3JtXCI6IFwiUFJWT1JERVJBRFwiLFxyXG4gICAgICAgfTtcclxuIFxyXG4gICAgICAgY29uc29sZS5sb2coXCJ0ZW1wbGF0ZUluZm86XCIsIHRlbXBsYXRlSW5mbywgXCJgb2JqZXRgLmZvcm1NYXN0ZXJQYXJhbXM6XCIsb2JqZWN0LmZvcm1NYXN0ZXJQYXJhbXMpXHJcblxyXG4gICAgICAgICBvYmplY3Quc2hvd0NhbGxTY3JlZW4gPSB0cnVlO1xyXG4gICAgICAgICBcclxuICAgICB9XHJcbiAgICBvYmplY3QudGVtcGxhdGVJbmZvID0gdGVtcGxhdGVJbmZvO1xyXG4gICAgcmV0dXJuIHRlbXBsYXRlSW5mbztcclxuICAgfVxyXG4gICBhc3luYyAgY2FsbFNjcmVlbihvYmplY3QsIHRlbXBsYXRlSW5mbyl7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJjYWxsU2NyZWVuIC0gdGVtcGxhdGVJbmZvOlwiLCB0ZW1wbGF0ZUluZm8sIFwidGhpcy5mb3JtTWFzdGVyUGFyYW1zOlwiLG9iamVjdC5mb3JtTWFzdGVyUGFyYW1zKVxyXG4gICAgICAgICAgbGV0IEJvZHkgPSBbXTtcclxuICAgICAgICAgIHZhciBuZXdWYWw6YW55ID0geyBcIl9RVUVSWVwiOiBcIkdFVF9NRU5VU19RVUVSWVwiLCBcclxuICAgICAgICAgICAgIFwiX1dIRVJFXCI6IFwiQ0hPSUNFICA9ICdcIiArIHRlbXBsYXRlSW5mby5GT1JNX05BTUUgKyBcIidcIiB9O1xyXG4gICAgICAgICAgQm9keS5wdXNoKG5ld1ZhbCk7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhcImNhbGxTY3JlZW4gLSBCb2R5OlwiLCBCb2R5KVxyXG4gICAgICAgICAgbGV0IGRhdGEgPSBhd2FpdCB0aGlzLmV4ZWNTUUxCb2R5KHRoaXMsIEJvZHksIFwiXCIpO1xyXG4gICAgICAgICAgY29uc29sZS5sb2coXCJjYWxsU2NyZWVuIC0gZGF0YTpcIiwgZGF0YSlcclxuICAgICAgICAgIGlmICh0eXBlb2YgZGF0YSAhPSBcInVuZGVmaW5lZFwiICYmIGRhdGFbMF0uZGF0YS5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgIHZhciBtZW51ID0gZGF0YVswXS5kYXRhWzBdO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcImNhbGxTY3JlZW4gLSBtZW51OlwiLCBtZW51KVxyXG4gICAgICAgICAgICBsZXQgY29tcFNlbGVjdG9yID0gbWVudS5GTEVYX0ZMRDE7XHJcbiAgICAgICAgICAgIG9iamVjdC5jaGlsZHJlbiA9IFtdO1xyXG4gICAgICAgICAgICBvYmplY3QuY2hpbGRyZW4ucHVzaChjb21wU2VsZWN0b3IpO1xyXG4gICAgICAgIG9iamVjdC5jb21tb25DYWxsU3Rhck5vdGlmeShvYmplY3QuZm9ybU1hc3RlclBhcmFtcyk7XHJcbiAgICAgIH1cclxuICAgICAgb2JqZWN0LnJvdXRlci5uYXZpZ2F0ZShbJy8nICt0ZW1wbGF0ZUluZm8uRk9STV9OQU1FXSwgXHJcbiAgICAgICAgeyBza2lwTG9jYXRpb25DaGFuZ2U6IHRydWUsIHJlcGxhY2VVcmw6IGZhbHNlLCBwcmVzZXJ2ZUZyYWdtZW50OiB0cnVlIH0pO1xyXG4gIH1cclxuICAgICBwdWJsaWMgZ2V0SW52YWxpZENvbnRyb2xzKG9iamVjdCkge1xyXG4gICAgLy9jb25zb2xlLmxvZyAoXCJnZXRJbnZhbGlkQ29udHJvbHM6XCIsICAgb2JqZWN0LmZvcm0uaW52YWxpZCwgb2JqZWN0LmZvcm0uY29udHJvbHMpXHJcbiAgICBjb25zdCBpbnZhbGlkID0gW107XHJcbiAgICBjb25zdCBjb250cm9scyA9IG9iamVjdC5mb3JtLmNvbnRyb2xzO1xyXG4gICAgZm9yIChsZXQgbmFtZSBpbiBjb250cm9scykge1xyXG4gICAgICAgIGlmIChjb250cm9sc1tuYW1lXS5pbnZhbGlkKSB7XHJcbiAgICAgICAgICAgaWYgKHR5cGVvZiBvYmplY3QuY29tcFRpdGxlTXNnICE9IFwidW5kZWZpbmVkXCIpe1xyXG4gICAgICAgICAgICAgIG5hbWUgPSB0aGlzLmdldE5MUyhbXSxvYmplY3QuY29tcFRpdGxlTXNnICsgXCIuXCIgKyBuYW1lLG5hbWUpXHJcbiAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpbnZhbGlkLnB1c2gobmFtZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICBcclxuICAgICB0aGlzLnNob3dOb3RpZmljYXRpb24oXCJlcnJvclwiLCB0aGlzLmdldE5MUyhbaW52YWxpZC50b1N0cmluZygpXSxcclxuICAgICdOT19WQUxJRF9EQVRBX0ZPUicsJ05vIHZhbGlkIGRhdGEgZm9yIDogICMjICcpKTtcclxuICAgIGxldCBNc2cgPSB0aGlzLmdldE5MUyhbaW52YWxpZC50b1N0cmluZygpXSwgJ05PX1ZBTElEX0RBVEFfRk9SJywnTm8gdmFsaWQgZGF0YSBmb3IgOiAgIyMgJyk7XHJcbiAgICBcclxuICAgIHZhciBkaWFsb2dTdHJ1YyA9IHtcclxuICAgICAgbXNnOiBNc2csXHJcbiAgICAgIHRpdGxlOiBcIkVycm9yXCIsXHJcbiAgICAgIGluZm86IG51bGwsXHJcbiAgICAgIG9iamVjdDogdGhpcyxcclxuICAgICAgYWN0aW9uOiB0aGlzLk9rQWN0aW9ucyxcclxuICAgICAgY2FsbGJhY2s6IG51bGxcclxuICAgIH07XHJcbiAgICB0aGlzLnNob3dDb25maXJtYXRpb24oZGlhbG9nU3RydWMpO1xyXG4gICAgcmV0dXJuIGludmFsaWQ7XHJcbn1cclxuY29udmVydFN2Z1RvS2VuZG9TVkdJY29uKFxyXG4gIG9iamVjdDogYW55LFxyXG4gIHN2Z0NvbnRlbnQ6IHN0cmluZyxcclxuICBpY29uTmFtZTogc3RyaW5nLFxyXG4gIGNvbHVtbjogc3RyaW5nXHJcbikge1xyXG4gIGlmICggKHR5cGVvZiBpY29uTmFtZSA9PT0gJ3VuZGVmaW5lZCcpIHx8IGljb25OYW1lID09PSBudWxsICkgaWNvbk5hbWUgPSBjb2x1bW47XHJcblxyXG4gIHRyeSB7XHJcbiAgICAvLyAtLS0gMS4gdmlld0JveCAoZmFsbGJhY2sgdG8gd2lkdGgvaGVpZ2h0LCB0aGVuIDAgMCAyNCAyNCkgLS0tXHJcbiAgICBsZXQgdmlld0JveCA9IHN2Z0NvbnRlbnQubWF0Y2goL3ZpZXdCb3hcXHMqPVxccypcIihbXlwiXSspXCIvKT8uWzFdO1xyXG5cclxuICAgIGlmICghdmlld0JveCkge1xyXG4gICAgICBjb25zdCB3TWF0Y2ggPSBzdmdDb250ZW50Lm1hdGNoKC9cXGJ3aWR0aFxccyo9XFxzKlwiKFtcXGQuXSspLyk7XHJcbiAgICAgIGNvbnN0IGhNYXRjaCA9IHN2Z0NvbnRlbnQubWF0Y2goL1xcYmhlaWdodFxccyo9XFxzKlwiKFtcXGQuXSspLyk7XHJcbiAgICAgIGNvbnN0IHcgPSB3TWF0Y2ggPyBwYXJzZUZsb2F0KHdNYXRjaFsxXSkgOiAyNDtcclxuICAgICAgY29uc3QgaCA9IGhNYXRjaCA/IHBhcnNlRmxvYXQoaE1hdGNoWzFdKSA6IDI0O1xyXG4gICAgICB2aWV3Qm94ID0gYDAgMCAke3d9ICR7aH1gO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIC0tLSAyLiBFeHRyYWN0IGlubmVyIGNvbnRlbnQgb2YgPHN2Zz4uLi48L3N2Zz4gLS0tXHJcbiAgICBjb25zdCBpbm5lck1hdGNoID0gc3ZnQ29udGVudC5tYXRjaCgvPHN2Z1tePl0qPihbXFxzXFxTXSo/KTxcXC9zdmc+L2kpO1xyXG4gICAgbGV0IGNvbnRlbnQgPSBpbm5lck1hdGNoID8gaW5uZXJNYXRjaFsxXSA6IHN2Z0NvbnRlbnQ7XHJcblxyXG4gICAgLy8gLS0tIDMuIFJlbW92ZSBYTUwgZGVjbGFyYXRpb24gYW5kIGNvbW1lbnRzIC0tLVxyXG4gICAgY29udGVudCA9IGNvbnRlbnRcclxuICAgICAgLnJlcGxhY2UoLzxcXD94bWxbXFxzXFxTXSo/XFw/Pi9nLCAnJylcclxuICAgICAgLnJlcGxhY2UoLzwhLS1bXFxzXFxTXSo/LS0+L2csICcnKTtcclxuXHJcbiAgICAvLyAtLS0gNC4gQ29sbGFwc2Ugd2hpdGVzcGFjZSBiZXR3ZWVuIHRhZ3MgYnV0IGtlZXAgdGhlIHNoYXBlIG1hcmt1cCBpbnRhY3QgLS0tXHJcbiAgICAvLyAgICBLZWVwcyB0aGUgZXhhY3QgYXR0cmlidXRlcyBidXQgYXZvaWRzIGdpYW50IHJ1bnMgb2Ygc3BhY2VzL25ld2xpbmVzLlxyXG4gICAgY29udGVudCA9IGNvbnRlbnRcclxuICAgICAgLnJlcGxhY2UoL1xccysvZywgJyAnKSAgICAgIC8vIGNvbGxhcHNlIGFsbCB3aGl0ZXNwYWNlIHRvIHNpbmdsZSBzcGFjZXNcclxuICAgICAgLnJlcGxhY2UoLz5cXHMrPC9nLCAnPjwnKSAgIC8vIHJlbW92ZSB3aGl0ZXNwYWNlIGJldHdlZW4gYWRqYWNlbnQgdGFnc1xyXG4gICAgICAudHJpbSgpO1xyXG5cclxuICAgIC8vIC0tLSA1LiBCdWlsZCB0aGUgaWNvbiBkZXNjcmlwdG9yIC0tLVxyXG4gICAgY29uc3QgaWNvbiA9IHtcclxuICAgICAgbmFtZTogaWNvbk5hbWUsXHJcbiAgICAgIGNvbnRlbnQ6IGNvbnRlbnQsXHJcbiAgICAgIHZpZXdCb3g6IHZpZXdCb3gsXHJcbiAgICAgIHZhcmlhbnRzOiB7XHJcbiAgICAgICAgc29saWQ6ICcnLFxyXG4gICAgICAgIG91dGxpbmU6ICcnLFxyXG4gICAgICAgIGR1b3RvbmU6ICcnXHJcbiAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgLy8gLS0tIDYuIFN0b3JlIG9uIHRoZSBjYWxsZXIncyBvYmplY3QgKHNhbWUgcGF0dGVybiBhcyBiZWZvcmUpIC0tLVxyXG4gICAgaWYgKCFvYmplY3Quc3ZnX2RhdGEpIG9iamVjdC5zdmdfZGF0YSA9IHt9O1xyXG4gICAgb2JqZWN0LnN2Z19kYXRhW2NvbHVtbl0gPSBpY29uO1xyXG5cclxuXHJcbiAgICBjb25zb2xlLmxvZygnY29udmVydFN2Z1RvS2VuZG9JY29uOicsIGljb24pO1xyXG4gICAgcmV0dXJuIGljb247XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGlmIChvYmplY3Quc3ZnX2RhdGEpIG9iamVjdC5zdmdfZGF0YVtjb2x1bW5dID0ge307XHJcbiAgICBjb25zb2xlLmVycm9yKGBjb252ZXJ0U3ZnVG9LZW5kb0ljb24gZXJyb3I6ICR7aWNvbk5hbWV9YCwgZXJyb3IpO1xyXG4gICAgcmV0dXJuIG51bGw7XHJcbiAgfVxyXG59XHJcblxyXG5jb252ZXJ0U3ZnVG9LZW5kb0ljb24ob2JqZWN0LCBzdmdDb250ZW50OiBzdHJpbmcsIGljb25OYW1lOiBzdHJpbmcsIGNvbHVtbikge1xyXG4gIGlmICggKHR5cGVvZiBpY29uTmFtZSA9PT0gJ3VuZGVmaW5lZCcpIHx8IGljb25OYW1lID09PSBudWxsICkgaWNvbk5hbWUgPSBjb2x1bW47XHJcbiAgY29uc29sZS5sb2coXCJjb252ZXJ0U3ZnVG9LZW5kb0ljb246c3ZnQ29udGVudDpcIiwgc3ZnQ29udGVudCwgXCJpY29uTmFtZTpcIiwgaWNvbk5hbWUsIFwiY29sdW1uOlwiLCBjb2x1bW4pO1xyXG4gICAgdHJ5IHtcclxuICAgICAgICAvLyBFeHRyYWN0IHZpZXdCb3hcclxuICAgICAgICBjb25zdCB2aWV3Qm94TWF0Y2ggPSBzdmdDb250ZW50Lm1hdGNoKC92aWV3Qm94PVwiKFteXCJdKylcIi8pO1xyXG4gICAgICAgIGNvbnN0IHZpZXdCb3ggPSB2aWV3Qm94TWF0Y2ggPyB2aWV3Qm94TWF0Y2hbMV0gOiAnMCAwIDI0IDI0JztcclxuXHJcbiAgICAgICAgLy8gUGFyc2Ugdmlld0JveCB2YWx1ZXNcclxuICAgICAgICBjb25zdCB2aWV3Qm94VmFsdWVzID0gdmlld0JveC5zcGxpdCgnICcpLm1hcChOdW1iZXIpO1xyXG4gICAgICAgIGNvbnN0IFttaW5YLCBtaW5ZLCB2aWV3Qm94V2lkdGgsIHZpZXdCb3hIZWlnaHRdID0gdmlld0JveFZhbHVlcztcclxuXHJcbiAgICAgICAgLy8gRXh0cmFjdCB3aWR0aCBhbmQgaGVpZ2h0IGlmIHNwZWNpZmllZFxyXG4gICAgICAgIGNvbnN0IHdpZHRoTWF0Y2ggPSBzdmdDb250ZW50Lm1hdGNoKC93aWR0aD1cIihbXlwiXSspXCIvKTtcclxuICAgICAgICBjb25zdCBoZWlnaHRNYXRjaCA9IHN2Z0NvbnRlbnQubWF0Y2goL2hlaWdodD1cIihbXlwiXSspXCIvKTtcclxuICAgICAgICBjb25zdCBzdmdXaWR0aCA9IHdpZHRoTWF0Y2ggPyBwYXJzZUZsb2F0KHdpZHRoTWF0Y2hbMV0pIDogdmlld0JveFdpZHRoO1xyXG4gICAgICAgIGNvbnN0IHN2Z0hlaWdodCA9IGhlaWdodE1hdGNoID8gcGFyc2VGbG9hdChoZWlnaHRNYXRjaFsxXSkgOiB2aWV3Qm94SGVpZ2h0O1xyXG5cclxuICAgICAgICAvLyBUYXJnZXQgc2l6ZSBmb3Igbm9ybWFsaXphdGlvbiAoMjR4MjQgaXMgY29tbW9uIGZvciBpY29ucylcclxuICAgICAgICBjb25zdCBUQVJHRVRfU0laRSA9IDI0O1xyXG5cclxuICAgICAgICAvLyBDYWxjdWxhdGUgc2NhbGUgdG8gZml0IHdpdGhpbiB0YXJnZXQgc2l6ZSB3aGlsZSBtYWludGFpbmluZyBhc3BlY3QgcmF0aW9cclxuICAgICAgICBjb25zdCBzY2FsZVggPSBUQVJHRVRfU0laRSAvIHZpZXdCb3hXaWR0aDtcclxuICAgICAgICBjb25zdCBzY2FsZVkgPSBUQVJHRVRfU0laRSAvIHZpZXdCb3hIZWlnaHQ7XHJcbiAgICAgICAgY29uc3Qgc2NhbGUgPSBNYXRoLm1pbihzY2FsZVgsIHNjYWxlWSk7IC8vIFVzZSBtaW4gdG8gZml0IHdpdGhpbiB0YXJnZXQgYm91bmRzXHJcblxyXG4gICAgICAgIC8vIENhbGN1bGF0ZSBvZmZzZXQgdG8gY2VudGVyIHRoZSBpY29uXHJcbiAgICAgICAgY29uc3Qgc2NhbGVkV2lkdGggPSB2aWV3Qm94V2lkdGggKiBzY2FsZTtcclxuICAgICAgICBjb25zdCBzY2FsZWRIZWlnaHQgPSB2aWV3Qm94SGVpZ2h0ICogc2NhbGU7XHJcbiAgICAgICAgY29uc3Qgb2Zmc2V0WCA9IChUQVJHRVRfU0laRSAtIHNjYWxlZFdpZHRoKSAvIDI7XHJcbiAgICAgICAgY29uc3Qgb2Zmc2V0WSA9IChUQVJHRVRfU0laRSAtIHNjYWxlZEhlaWdodCkgLyAyO1xyXG5cclxuICAgICAgICAvLyBFeHRyYWN0IGFsbCBwYXRocyB3aXRoIHRoZWlyIHN0eWxlcyBhbmQgYXR0cmlidXRlc1xyXG4gICAgICAgIGNvbnN0IHBhdGhSZWdleCA9IC88cGF0aFtePl0qPi9nO1xyXG4gICAgICAgIGxldCBtYXRjaDtcclxuICAgICAgICBsZXQgcGF0aHMgPSBbXTtcclxuICAgICAgICBsZXQgcGF0aENvdW50ID0gMDtcclxuXHJcbiAgICAgICAgd2hpbGUgKChtYXRjaCA9IHBhdGhSZWdleC5leGVjKHN2Z0NvbnRlbnQpKSAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgICBjb25zdCBwYXRoVGFnID0gbWF0Y2hbMF07XHJcbiAgICAgICAgICAgIHBhdGhDb3VudCsrO1xyXG5cclxuICAgICAgICAgICAgLy8gRXh0cmFjdCBkIGF0dHJpYnV0ZSAocmVxdWlyZWQpXHJcbiAgICAgICAgICAgIGNvbnN0IGRNYXRjaCA9IHBhdGhUYWcubWF0Y2goL2Q9XCIoW15cIl0qKVwiLyk7XHJcbiAgICAgICAgICAgIGlmICghZE1hdGNoKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oYFBhdGggJHtwYXRoQ291bnR9IGhhcyBubyAnZCcgYXR0cmlidXRlLCBza2lwcGluZ2ApO1xyXG4gICAgICAgICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8vIFRyYW5zZm9ybSB0aGUgcGF0aCBkYXRhIHRvIHNjYWxlIGFuZCBjZW50ZXIgaXRcclxuICAgICAgICAgICAgY29uc3QgdHJhbnNmb3JtZWREID0gdGhpcy50cmFuc2Zvcm1QYXRoRGF0YShkTWF0Y2hbMV0sIHNjYWxlLCBvZmZzZXRYLCBvZmZzZXRZLCB2aWV3Qm94V2lkdGgsIHZpZXdCb3hIZWlnaHQpO1xyXG5cclxuICAgICAgICAgICAgLy8gSW5pdGlhbGl6ZSBhdHRyaWJ1dGVzXHJcbiAgICAgICAgICAgIGxldCBmaWxsID0gJyc7XHJcbiAgICAgICAgICAgIGxldCBzdHJva2UgPSAnJztcclxuICAgICAgICAgICAgbGV0IHN0cm9rZVdpZHRoID0gJyc7XHJcbiAgICAgICAgICAgIGxldCBmaWxsT3BhY2l0eSA9ICcnO1xyXG4gICAgICAgICAgICBsZXQgc3Ryb2tlT3BhY2l0eSA9ICcnO1xyXG4gICAgICAgICAgICBsZXQgb3BhY2l0eSA9ICcnO1xyXG5cclxuICAgICAgICAgICAgLy8gRXh0cmFjdCBmcm9tIHN0eWxlIGF0dHJpYnV0ZVxyXG4gICAgICAgICAgICBjb25zdCBzdHlsZU1hdGNoID0gcGF0aFRhZy5tYXRjaCgvc3R5bGU9XCIoW15cIl0qKVwiLyk7XHJcbiAgICAgICAgICAgIGlmIChzdHlsZU1hdGNoKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBzdHlsZSA9IHN0eWxlTWF0Y2hbMV07XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gRXh0cmFjdCBhbGwgc3R5bGUgcHJvcGVydGllc1xyXG4gICAgICAgICAgICAgICAgY29uc3QgZmlsbE1hdGNoID0gc3R5bGUubWF0Y2goL2ZpbGw6KFteO1wiXSspLyk7XHJcbiAgICAgICAgICAgICAgICBpZiAoZmlsbE1hdGNoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZmlsbFZhbHVlID0gZmlsbE1hdGNoWzFdLnRyaW0oKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoZmlsbFZhbHVlICYmIGZpbGxWYWx1ZSAhPT0gJycpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZmlsbCA9IGZpbGxWYWx1ZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgY29uc3Qgc3Ryb2tlTWF0Y2ggPSBzdHlsZS5tYXRjaCgvc3Ryb2tlOihbXjtcIl0rKS8pO1xyXG4gICAgICAgICAgICAgICAgaWYgKHN0cm9rZU1hdGNoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgc3Ryb2tlVmFsdWUgPSBzdHJva2VNYXRjaFsxXS50cmltKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHN0cm9rZVZhbHVlICYmIHN0cm9rZVZhbHVlICE9PSAnJykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHJva2UgPSBzdHJva2VWYWx1ZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgY29uc3Qgc3Ryb2tlV2lkdGhNYXRjaCA9IHN0eWxlLm1hdGNoKC9zdHJva2Utd2lkdGg6KFteO1wiXSspLyk7XHJcbiAgICAgICAgICAgICAgICBpZiAoc3Ryb2tlV2lkdGhNYXRjaCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IG9yaWdpbmFsU3Ryb2tlV2lkdGggPSBwYXJzZUZsb2F0KHN0cm9rZVdpZHRoTWF0Y2hbMV0udHJpbSgpKTtcclxuICAgICAgICAgICAgICAgICAgICAvLyBTY2FsZSBzdHJva2Ugd2lkdGggcHJvcG9ydGlvbmFsbHlcclxuICAgICAgICAgICAgICAgICAgICBpZiAoIWlzTmFOKG9yaWdpbmFsU3Ryb2tlV2lkdGgpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0cm9rZVdpZHRoID0gKG9yaWdpbmFsU3Ryb2tlV2lkdGggKiBzY2FsZSkudG9TdHJpbmcoKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgY29uc3QgZmlsbE9wYWNpdHlNYXRjaCA9IHN0eWxlLm1hdGNoKC9maWxsLW9wYWNpdHk6KFteO1wiXSspLyk7XHJcbiAgICAgICAgICAgICAgICBpZiAoZmlsbE9wYWNpdHlNYXRjaCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGZpbGxPcGFjaXR5ID0gZmlsbE9wYWNpdHlNYXRjaFsxXS50cmltKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgY29uc3Qgc3Ryb2tlT3BhY2l0eU1hdGNoID0gc3R5bGUubWF0Y2goL3N0cm9rZS1vcGFjaXR5OihbXjtcIl0rKS8pO1xyXG4gICAgICAgICAgICAgICAgaWYgKHN0cm9rZU9wYWNpdHlNYXRjaCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHN0cm9rZU9wYWNpdHkgPSBzdHJva2VPcGFjaXR5TWF0Y2hbMV0udHJpbSgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGNvbnN0IG9wYWNpdHlNYXRjaCA9IHN0eWxlLm1hdGNoKC9vcGFjaXR5OihbXjtcIl0rKS8pO1xyXG4gICAgICAgICAgICAgICAgaWYgKG9wYWNpdHlNYXRjaCkge1xyXG4gICAgICAgICAgICAgICAgICAgIG9wYWNpdHkgPSBvcGFjaXR5TWF0Y2hbMV0udHJpbSgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvLyBJZiBubyBzdHlsZSwgY2hlY2sgaW5kaXZpZHVhbCBhdHRyaWJ1dGVzXHJcbiAgICAgICAgICAgIGlmICghc3R5bGVNYXRjaCkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgZmlsbEF0dHIgPSBwYXRoVGFnLm1hdGNoKC9maWxsPVwiKFteXCJdKilcIi8pO1xyXG4gICAgICAgICAgICAgICAgaWYgKGZpbGxBdHRyICYmIGZpbGxBdHRyWzFdICE9PSAnJykge1xyXG4gICAgICAgICAgICAgICAgICAgIGZpbGwgPSBmaWxsQXR0clsxXTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBjb25zdCBzdHJva2VBdHRyID0gcGF0aFRhZy5tYXRjaCgvc3Ryb2tlPVwiKFteXCJdKilcIi8pO1xyXG4gICAgICAgICAgICAgICAgaWYgKHN0cm9rZUF0dHIgJiYgc3Ryb2tlQXR0clsxXSAhPT0gJycpIHtcclxuICAgICAgICAgICAgICAgICAgICBzdHJva2UgPSBzdHJva2VBdHRyWzFdO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGNvbnN0IHN0cm9rZVdpZHRoQXR0ciA9IHBhdGhUYWcubWF0Y2goL3N0cm9rZS13aWR0aD1cIihbXlwiXSopXCIvKTtcclxuICAgICAgICAgICAgICAgIGlmIChzdHJva2VXaWR0aEF0dHIpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBvcmlnaW5hbFN0cm9rZVdpZHRoID0gcGFyc2VGbG9hdChzdHJva2VXaWR0aEF0dHJbMV0pO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIFNjYWxlIHN0cm9rZSB3aWR0aCBwcm9wb3J0aW9uYWxseVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICghaXNOYU4ob3JpZ2luYWxTdHJva2VXaWR0aCkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3Ryb2tlV2lkdGggPSAob3JpZ2luYWxTdHJva2VXaWR0aCAqIHNjYWxlKS50b1N0cmluZygpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBjb25zdCBmaWxsT3BhY2l0eUF0dHIgPSBwYXRoVGFnLm1hdGNoKC9maWxsLW9wYWNpdHk9XCIoW15cIl0qKVwiLyk7XHJcbiAgICAgICAgICAgICAgICBpZiAoZmlsbE9wYWNpdHlBdHRyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZmlsbE9wYWNpdHkgPSBmaWxsT3BhY2l0eUF0dHJbMV07XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgY29uc3Qgc3Ryb2tlT3BhY2l0eUF0dHIgPSBwYXRoVGFnLm1hdGNoKC9zdHJva2Utb3BhY2l0eT1cIihbXlwiXSopXCIvKTtcclxuICAgICAgICAgICAgICAgIGlmIChzdHJva2VPcGFjaXR5QXR0cikge1xyXG4gICAgICAgICAgICAgICAgICAgIHN0cm9rZU9wYWNpdHkgPSBzdHJva2VPcGFjaXR5QXR0clsxXTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLy8gQnVpbGQgcGF0aCBlbGVtZW50IHdpdGggdHJhbnNmb3JtZWQgZCBhdHRyaWJ1dGVcclxuICAgICAgICAgICAgbGV0IHBhdGhFbGVtZW50ID0gYDxwYXRoIGQ9XCIke3RyYW5zZm9ybWVkRH1cImA7XHJcblxyXG4gICAgICAgICAgICAvLyBBZGQgZmlsbCBpZiBpdCBleGlzdHMgKGluY2x1ZGluZyAnbm9uZScpXHJcbiAgICAgICAgICAgIGlmIChmaWxsICYmIGZpbGwgIT09ICcnKSB7XHJcbiAgICAgICAgICAgICAgICBwYXRoRWxlbWVudCArPSBgIGZpbGw9XCIke2ZpbGx9XCJgO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvLyBBZGQgc3Ryb2tlIGlmIGl0IGV4aXN0cyAoaW5jbHVkaW5nICdub25lJylcclxuICAgICAgICAgICAgaWYgKHN0cm9rZSAmJiBzdHJva2UgIT09ICcnKSB7XHJcbiAgICAgICAgICAgICAgICBwYXRoRWxlbWVudCArPSBgIHN0cm9rZT1cIiR7c3Ryb2tlfVwiYDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLy8gQWRkIHN0cm9rZS13aWR0aCBpZiBpdCBleGlzdHNcclxuICAgICAgICAgICAgaWYgKHN0cm9rZVdpZHRoICYmIHN0cm9rZVdpZHRoICE9PSAnJykge1xyXG4gICAgICAgICAgICAgICAgcGF0aEVsZW1lbnQgKz0gYCBzdHJva2Utd2lkdGg9XCIke3N0cm9rZVdpZHRofVwiYDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLy8gQWRkIG9wYWNpdHkgaWYgaXQgZXhpc3RzXHJcbiAgICAgICAgICAgIGlmIChvcGFjaXR5ICYmIG9wYWNpdHkgIT09ICcnKSB7XHJcbiAgICAgICAgICAgICAgICBwYXRoRWxlbWVudCArPSBgIG9wYWNpdHk9XCIke29wYWNpdHl9XCJgO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvLyBBZGQgZmlsbC1vcGFjaXR5IGlmIGl0IGV4aXN0c1xyXG4gICAgICAgICAgICBpZiAoZmlsbE9wYWNpdHkgJiYgZmlsbE9wYWNpdHkgIT09ICcnKSB7XHJcbiAgICAgICAgICAgICAgICBwYXRoRWxlbWVudCArPSBgIGZpbGwtb3BhY2l0eT1cIiR7ZmlsbE9wYWNpdHl9XCJgO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvLyBBZGQgc3Ryb2tlLW9wYWNpdHkgaWYgaXQgZXhpc3RzXHJcbiAgICAgICAgICAgIGlmIChzdHJva2VPcGFjaXR5ICYmIHN0cm9rZU9wYWNpdHkgIT09ICcnKSB7XHJcbiAgICAgICAgICAgICAgICBwYXRoRWxlbWVudCArPSBgIHN0cm9rZS1vcGFjaXR5PVwiJHtzdHJva2VPcGFjaXR5fVwiYDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgcGF0aEVsZW1lbnQgKz0gYCAvPmA7XHJcbiAgICAgICAgICAgIHBhdGhzLnB1c2gocGF0aEVsZW1lbnQpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zb2xlLmxvZyhcImNvbnZlcnRTdmdUb0tlbmRvSWNvbjpoZXJlMTpcIik7XHJcblxyXG4gICAgICAgIC8vIElmIG5vIHBhdGhzIGZvdW5kLCB0cnkgdG8gZXh0cmFjdCBmcm9tIFNWRyBjb250ZW50IGRpcmVjdGx5IChmYWxsYmFjaylcclxuICAgICAgICBpZiAocGF0aHMubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUud2FybignTm8gcGF0aHMgZm91bmQgaW4gU1ZHLCB0cnlpbmcgZmFsbGJhY2sgZXh0cmFjdGlvbicpO1xyXG4gICAgICAgICAgICBjb25zdCBjb250ZW50TWF0Y2ggPSBzdmdDb250ZW50Lm1hdGNoKC88c3ZnW14+XSo+KFtcXHNcXFNdKj8pPFxcL3N2Zz4vKTtcclxuICAgICAgICAgICAgaWYgKGNvbnRlbnRNYXRjaCAmJiBjb250ZW50TWF0Y2hbMV0pIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGlubmVyQ29udGVudCA9IGNvbnRlbnRNYXRjaFsxXTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGlubmVyUGF0aFJlZ2V4ID0gLzxwYXRoW14+XSo+L2c7XHJcbiAgICAgICAgICAgICAgICBsZXQgaW5uZXJNYXRjaDtcclxuICAgICAgICAgICAgICAgIHdoaWxlICgoaW5uZXJNYXRjaCA9IGlubmVyUGF0aFJlZ2V4LmV4ZWMoaW5uZXJDb250ZW50KSkgIT09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgICAgICBwYXRocy5wdXNoKGlubmVyTWF0Y2hbMF0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBJZiBzdGlsbCBubyBwYXRocywgcmV0dXJuIG51bGwgb3IgdGhyb3cgZXJyb3JcclxuICAgICAgICBpZiAocGF0aHMubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoYE5vIHBhdGhzIGZvdW5kIGluIFNWRyBmb3IgaWNvbjogJHtpY29uTmFtZX1gKTtcclxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBCdWlsZCB0aGUgY29udGVudCBzdHJpbmcgd2l0aCBwcm9wZXIgZm9ybWF0dGluZ1xyXG4gICAgICAgIGNvbnN0IGNvbnRlbnQgPSBwYXRocy5qb2luKCcnKTtcclxuXHJcbiAgICAgICAgLy8gVXNlIHRoZSB0YXJnZXQgc2l6ZSBhcyB0aGUgbm9ybWFsaXplZCB2aWV3Qm94XHJcbiAgICAgICAgY29uc3Qgbm9ybWFsaXplZFZpZXdCb3ggPSBgMCAwICR7VEFSR0VUX1NJWkV9ICR7VEFSR0VUX1NJWkV9YDtcclxuXHJcbiAgICAgICAgLy8gQ3JlYXRlIHRoZSBLZW5kbyBpY29uIHN0cnVjdHVyZVxyXG4gICAgICAgIG9iamVjdC5zdmdfZGF0YVtjb2x1bW5dID0ge1xyXG4gICAgICAgICAgICBuYW1lOiBpY29uTmFtZSxcclxuICAgICAgICAgICAgY29udGVudDogY29udGVudCxcclxuICAgICAgICAgICAgdmlld0JveDogbm9ybWFsaXplZFZpZXdCb3gsXHJcbiAgICAgICAgICAgIHZhcmlhbnRzOiB7XHJcbiAgICAgICAgICAgICAgICBzb2xpZDogJycsXHJcbiAgICAgICAgICAgICAgICBvdXRsaW5lOiAnJyxcclxuICAgICAgICAgICAgICAgIGR1b3RvbmU6ICcnXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiY29udmVydFN2Z1RvS2VuZG9JY29uOm9iamVjdC5zdmdfZGF0YTpcIiwgb2JqZWN0LnN2Z19kYXRhKTtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBuYW1lOiBpY29uTmFtZSxcclxuICAgICAgICAgICAgY29udGVudDogY29udGVudCxcclxuICAgICAgICAgICAgdmlld0JveDogbm9ybWFsaXplZFZpZXdCb3gsXHJcbiAgICAgICAgICAgIHZhcmlhbnRzOiB7XHJcbiAgICAgICAgICAgICAgICBzb2xpZDogY29udGVudCxcclxuICAgICAgICAgICAgICAgIG91dGxpbmU6ICcnLFxyXG4gICAgICAgICAgICAgICAgZHVvdG9uZTogJydcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgIG9iamVjdC5zdmdfZGF0YVtjb2x1bW5dID0ge307XHJcbiAgICAgICAgY29uc29sZS5lcnJvcihgRXJyb3IgY29udmVydGluZyBTVkcgdG8gS2VuZG8gaWNvbjogJHtpY29uTmFtZX1gLCBlcnJvcik7XHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcbn1cclxuXHJcbi8vIEhlbHBlciBmdW5jdGlvbiB0byB0cmFuc2Zvcm0gcGF0aCBkYXRhXHJcbnRyYW5zZm9ybVBhdGhEYXRhKGQ6IHN0cmluZywgc2NhbGU6IG51bWJlciwgb2Zmc2V0WDogbnVtYmVyLCBvZmZzZXRZOiBudW1iZXIsIHZpZXdCb3hXaWR0aDogbnVtYmVyLCB2aWV3Qm94SGVpZ2h0OiBudW1iZXIpOiBzdHJpbmcge1xyXG4gICAgLy8gVGhpcyBmdW5jdGlvbiB0cmFuc2Zvcm1zIHRoZSBwYXRoIGNvbW1hbmRzXHJcbiAgICAvLyBJdCBoYW5kbGVzIGFic29sdXRlICh1cHBlcmNhc2UpIGFuZCByZWxhdGl2ZSAobG93ZXJjYXNlKSBjb21tYW5kc1xyXG4gICAgXHJcbiAgICBjb25zdCBjb21tYW5kcyA9IGQubWF0Y2goL1thLXpBLVpdW15hLXpBLVpdKi9nKTtcclxuICAgIGlmICghY29tbWFuZHMpIHJldHVybiBkO1xyXG5cclxuICAgIGNvbnN0IHRyYW5zZm9ybWVkQ29tbWFuZHMgPSBjb21tYW5kcy5tYXAoY21kID0+IHtcclxuICAgICAgICBjb25zdCBjb21tYW5kID0gY21kWzBdO1xyXG4gICAgICAgIGNvbnN0IHZhbHVlcyA9IGNtZC5zbGljZSgxKS50cmltKCkuc3BsaXQoL1tcXHMsXSsvKS5maWx0ZXIodiA9PiB2ICE9PSAnJykubWFwKE51bWJlcik7XHJcbiAgICAgICAgXHJcbiAgICAgICAgaWYgKHZhbHVlcy5sZW5ndGggPT09IDApIHJldHVybiBjbWQ7XHJcblxyXG4gICAgICAgIGxldCB0cmFuc2Zvcm1lZFZhbHVlczogbnVtYmVyW10gPSBbXTtcclxuXHJcbiAgICAgICAgc3dpdGNoIChjb21tYW5kKSB7XHJcbiAgICAgICAgICAgIGNhc2UgJ00nOiAvLyBNb3ZlIHRvIChhYnNvbHV0ZSlcclxuICAgICAgICAgICAgY2FzZSAnTCc6IC8vIExpbmUgdG8gKGFic29sdXRlKVxyXG4gICAgICAgICAgICBjYXNlICdDJzogLy8gQ3ViaWMgQmV6aWVyIChhYnNvbHV0ZSlcclxuICAgICAgICAgICAgY2FzZSAnUyc6IC8vIFNtb290aCBCZXppZXIgKGFic29sdXRlKVxyXG4gICAgICAgICAgICBjYXNlICdRJzogLy8gUXVhZHJhdGljIEJlemllciAoYWJzb2x1dGUpXHJcbiAgICAgICAgICAgIGNhc2UgJ1QnOiAvLyBTbW9vdGggUXVhZHJhdGljIChhYnNvbHV0ZSlcclxuICAgICAgICAgICAgY2FzZSAnQSc6IC8vIEFyYyAoYWJzb2x1dGUpXHJcbiAgICAgICAgICAgIGNhc2UgJ1onOlxyXG4gICAgICAgICAgICBjYXNlICd6JzpcclxuICAgICAgICAgICAgICAgIC8vIERvbid0IHRyYW5zZm9ybSBaIGNvbW1hbmRzXHJcbiAgICAgICAgICAgICAgICBpZiAoY29tbWFuZCA9PT0gJ1onIHx8IGNvbW1hbmQgPT09ICd6Jykge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAnWic7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAvLyBUcmFuc2Zvcm0gY29vcmRpbmF0ZXNcclxuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdmFsdWVzLmxlbmd0aDsgaSArPSAyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgeCA9IHZhbHVlc1tpXTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCB5ID0gdmFsdWVzW2kgKyAxXTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoIWlzTmFOKHgpICYmICFpc05hTih5KSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm1lZFZhbHVlcy5wdXNoKHggKiBzY2FsZSArIG9mZnNldFgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm1lZFZhbHVlcy5wdXNoKHkgKiBzY2FsZSArIG9mZnNldFkpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybWVkVmFsdWVzLnB1c2goeCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybWVkVmFsdWVzLnB1c2goeSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICBjYXNlICdtJzogLy8gTW92ZSB0byAocmVsYXRpdmUpXHJcbiAgICAgICAgICAgIGNhc2UgJ2wnOiAvLyBMaW5lIHRvIChyZWxhdGl2ZSlcclxuICAgICAgICAgICAgY2FzZSAnYyc6IC8vIEN1YmljIEJlemllciAocmVsYXRpdmUpXHJcbiAgICAgICAgICAgIGNhc2UgJ3MnOiAvLyBTbW9vdGggQmV6aWVyIChyZWxhdGl2ZSlcclxuICAgICAgICAgICAgY2FzZSAncSc6IC8vIFF1YWRyYXRpYyBCZXppZXIgKHJlbGF0aXZlKVxyXG4gICAgICAgICAgICBjYXNlICd0JzogLy8gU21vb3RoIFF1YWRyYXRpYyAocmVsYXRpdmUpXHJcbiAgICAgICAgICAgIGNhc2UgJ2EnOiAvLyBBcmMgKHJlbGF0aXZlKVxyXG4gICAgICAgICAgICAgICAgLy8gVHJhbnNmb3JtIGNvb3JkaW5hdGVzXHJcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHZhbHVlcy5sZW5ndGg7IGkgKz0gMikge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHggPSB2YWx1ZXNbaV07XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgeSA9IHZhbHVlc1tpICsgMV07XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFpc05hTih4KSAmJiAhaXNOYU4oeSkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtZWRWYWx1ZXMucHVzaCh4ICogc2NhbGUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm1lZFZhbHVlcy5wdXNoKHkgKiBzY2FsZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtZWRWYWx1ZXMucHVzaCh4KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtZWRWYWx1ZXMucHVzaCh5KTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgIGNhc2UgJ0gnOiAvLyBIb3Jpem9udGFsIGxpbmUgKGFic29sdXRlKVxyXG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtZWRWYWx1ZXMucHVzaCh2YWx1ZXNbMF0gKiBzY2FsZSArIG9mZnNldFgpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICBjYXNlICdoJzogLy8gSG9yaXpvbnRhbCBsaW5lIChyZWxhdGl2ZSlcclxuICAgICAgICAgICAgICAgIHRyYW5zZm9ybWVkVmFsdWVzLnB1c2godmFsdWVzWzBdICogc2NhbGUpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICBjYXNlICdWJzogLy8gVmVydGljYWwgbGluZSAoYWJzb2x1dGUpXHJcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm1lZFZhbHVlcy5wdXNoKHZhbHVlc1swXSAqIHNjYWxlICsgb2Zmc2V0WSk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgIGNhc2UgJ3YnOiAvLyBWZXJ0aWNhbCBsaW5lIChyZWxhdGl2ZSlcclxuICAgICAgICAgICAgICAgIHRyYW5zZm9ybWVkVmFsdWVzLnB1c2godmFsdWVzWzBdICogc2NhbGUpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgLy8gVW5rbm93biBjb21tYW5kLCBrZWVwIG9yaWdpbmFsXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gY21kO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gRm9ybWF0IHRoZSB2YWx1ZXMgYXMgYSBzdHJpbmdcclxuICAgICAgICBjb25zdCB2YWx1ZVN0ciA9IHRyYW5zZm9ybWVkVmFsdWVzLm1hcCh2ID0+IHtcclxuICAgICAgICAgICAgLy8gUm91bmQgdG8gcmVhc29uYWJsZSBwcmVjaXNpb25cclxuICAgICAgICAgICAgcmV0dXJuIE51bWJlci5pc0ludGVnZXIodikgPyB2LnRvU3RyaW5nKCkgOiB2LnRvRml4ZWQoNCk7XHJcbiAgICAgICAgfSkuam9pbignICcpO1xyXG5cclxuICAgICAgICByZXR1cm4gY29tbWFuZCArIHZhbHVlU3RyO1xyXG4gICAgfSk7XHJcblxyXG4gICAgcmV0dXJuIHRyYW5zZm9ybWVkQ29tbWFuZHMuam9pbignJyk7XHJcbn1cclxuXHJcbnB1YmxpYyBnZXRJbnZhbGlkQ29udHJvbHNfZ3JpZChvYmplY3QpIHtcclxuICAvL2NvbnNvbGUubG9nIChcInRlc3RpbmcgZ2V0SW52YWxpZENvbnRyb2xzOlwiLCAgIG9iamVjdC5mb3JtR3JvdXAuaW52YWxpZCwgb2JqZWN0LmZvcm1Hcm91cC5jb250cm9scylcclxuICBjb25zdCBpbnZhbGlkID0gW107XHJcbiAgY29uc3QgY29udHJvbHMgPSBvYmplY3QuZm9ybUdyb3VwLmNvbnRyb2xzO1xyXG4gIGZvciAoY29uc3QgbmFtZSBpbiBjb250cm9scykge1xyXG4gICAgICBpZiAoY29udHJvbHNbbmFtZV0uaW52YWxpZCkge1xyXG4gICAgICAgICBsZXQgbmFtZU1TZyA9IHRoaXMuZ2V0TkxTKFtdLCAnb3JtcGdtb2JfZm1iLnVzZXJJbmZvT3JtcGdtb2JGbWJCU3Vic2NyaWJlcltcIm5hbWVcIl0nLG5hbWUpXHJcbiAgICAgICAgICBpbnZhbGlkLnB1c2gobmFtZU1TZyk7XHJcbiAgICAgIH1cclxuICB9XHJcbiAgdGhpcy5zaG93Tm90aWZpY2F0aW9uKFwiZXJyb3JcIiwgdGhpcy5nZXROTFMoW2ludmFsaWQudG9TdHJpbmcoKV0sXHJcbiAgJ05PX1ZBTElEX0RBVEFfRk9SJywnTm8gdmFsaWQgZGF0YSBmb3IgOiAgIyMgJykpO1xyXG4gIHJldHVybiBpbnZhbGlkO1xyXG59XHJcbn1cclxuXHJcbi8qXHJcbkBJbmplY3RhYmxlKHtcclxuICBwcm92aWRlZEluOiAncm9vdCcsXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBzdGFyU2VydmljZXMgZXh0ZW5kcyBzdGFyX1NlcnZpY2VzIHtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihcclxuICAgICAgICBub3RpZmljYXRpb25TZXJ2aWNlOk5vdGlmaWNhdGlvblNlcnZpY2UsXHJcbiAgICAgICAgZGlhbG9nU2VydmljZTogRGlhbG9nU2VydmljZSxcclxuICAgICAgICBodHRwOiBIdHRwQ2xpZW50LCAgIG1lc3NhZ2VzOiBNZXNzYWdlU2VydmljZSkge1xyXG4gICAgICAgIC8vbGV0IFBhZ2UgPSBlbmNvZGVVUkkgKFwiJl9xdWVyeT1HRVRfRUlNX0NPTU1BTkRTJlNQQ19GVU5DVElPTj0nJScmRVhDU1lTVEVNPSdTTU5TXzMnJkVRVUlQSUQ9JyUnXCIpO1xyXG4gICAgICAgIGxldCBQYWdlID0gZW5jb2RlVVJJIChcIlwiKTtcclxuXHJcblxyXG4gICAgICAgIHN1cGVyKFxyXG4gICAgICAgICAgICBub3RpZmljYXRpb25TZXJ2aWNlLFxyXG4gICAgICAgICAgICBkaWFsb2dTZXJ2aWNlLFxyXG4gICAgICAgICAgICBodHRwLCBQYWdlLCBtZXNzYWdlcyk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBxdWVyeUZvckNhdGVnb3J5KHsgQ2F0ZWdvcnlJRCB9OiB7IENhdGVnb3J5SUQ6IG51bWJlciB9LCBzdGF0ZT86IGFueSk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMucXVlcnkoT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUsIHtcclxuICAgICAgICAgICAgZmlsdGVyOiB7XHJcbiAgICAgICAgICAgICAgICBmaWx0ZXJzOiBbe1xyXG4gICAgICAgICAgICAgICAgICAgIGZpZWxkOiAnQ2F0ZWdvcnlJRCcsIG9wZXJhdG9yOiAnZXEnLCB2YWx1ZTogQ2F0ZWdvcnlJRFxyXG4gICAgICAgICAgICAgICAgfV0sXHJcbiAgICAgICAgICAgICAgICBsb2dpYzogJ2FuZCdcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgcXVlcnlGb3JQcm9kdWN0TmFtZShQcm9kdWN0TmFtZTogc3RyaW5nLCBzdGF0ZT86IGFueSk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMucXVlcnkoT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUsIHtcclxuICAgICAgICAgICAgZmlsdGVyOiB7XHJcbiAgICAgICAgICAgICAgICBmaWx0ZXJzOiBbe1xyXG4gICAgICAgICAgICAgICAgICAgIGZpZWxkOiAnUHJvZHVjdE5hbWUnLCBvcGVyYXRvcjogJ2NvbnRhaW5zJywgdmFsdWU6IFByb2R1Y3ROYW1lXHJcbiAgICAgICAgICAgICAgICB9XSxcclxuICAgICAgICAgICAgICAgIGxvZ2ljOiAnYW5kJ1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSkpO1xyXG4gICAgfVxyXG5cclxufVxyXG5cclxuKi9cclxuIl19