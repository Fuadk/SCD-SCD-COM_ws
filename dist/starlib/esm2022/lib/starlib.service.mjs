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
        if (typeof object.multiselect_arr !== "undefined") {
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
            console.log("test41:object.gridInitialValues:", object.gridInitialValues);
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
                    if (typeof exists !== "undefined") {
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
            console.log("object.masterKeyName:" + object.masterKeyName, object.masterKeyArr);
        if (object.paramConfig.DEBUG_FLAG)
            console.log("object.isChild:", object.isChild, " object.isSearch :", object.isSearch);
        if (object.isChild == true) {
            if (object.isSearch != true) {
                grid = object.gridInitialValues;
                if ((typeof object.masterKeyNameArr != "undefined") && (object.masterKeyNameArr.length != 0)) {
                    for (let i = 0; i < object.masterKeyNameArr.length; i++) {
                        let exists = object.gridInitialValues[object.masterKeyNameArr[i]];
                        if (typeof exists !== "undefined") {
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
                            //result.data[i].data.splice(0,0,emptyRec); //add empty record at begining of the array for the LOV for insert new record in a grid work properly
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
    convertSvgToKendoIcon(object, svgContent, iconName, column) {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhcmxpYi5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vcHJvamVjdHMvc3RhcmxpYi9zcmMvbGliL3N0YXJsaWIuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBYyxXQUFXLEVBQUUsV0FBVyxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFJNUUsT0FBTyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUMxQyxtQ0FBbUM7QUFDbkMsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUNsQyxPQUFPLEtBQUssUUFBUSxNQUFNLFdBQVcsQ0FBQztBQUN0QyxPQUFPLEVBQUUsVUFBVSxFQUFTLE1BQU0sZ0JBQWdCLENBQUM7QUFFbkQsT0FBTyxFQUE0QixpQkFBaUIsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBQzdGLE9BQU8sRUFBRSxHQUFHLEVBQUUsY0FBYyxFQUFFLE9BQU8sRUFBZSxNQUFNLDJCQUEyQixDQUFDO0FBRXRGLE9BQU8sRUFBRSxHQUFHLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUN0QyxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFFN0MsT0FBTyxFQUFHLFNBQVMsRUFBRSxrQkFBa0IsRUFBRSxNQUFNLFNBQVMsQ0FBQzs7Ozs7O0FBV3pELHFFQUFxRTtBQUNuRSxNQUFNLE9BQU8sWUFBWTtJQXFEdkIsWUFDWSxtQkFBd0MsRUFDeEMsYUFBNEIsRUFDNUIsSUFBZ0IsRUFDaEIsUUFBd0I7UUFFcEMsY0FBYztRQUNWLGlDQUFpQztRQU56Qix3QkFBbUIsR0FBbkIsbUJBQW1CLENBQXFCO1FBQ3hDLGtCQUFhLEdBQWIsYUFBYSxDQUFlO1FBQzVCLFNBQUksR0FBSixJQUFJLENBQVk7UUFDaEIsYUFBUSxHQUFSLFFBQVEs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QUUsQ0FBQyxFQUMvRCxtQkFBbUIsRUFBQywwQkFBMEIsQ0FBQyxDQUFDLENBQUM7UUFDakQsT0FBTyxPQUFPLENBQUM7SUFDakIsQ0FBQzsrR0Evb0tjLFlBQVk7bUhBQVosWUFBWSxjQUhiLE1BQU07OzRGQUdMLFlBQVk7a0JBSjFCLFVBQVU7bUJBQUM7b0JBQ1YsVUFBVSxFQUFFLE1BQU07aUJBQ25CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBIdHRwQ2xpZW50LCBIdHRwSGVhZGVycywgSHR0cFJlcXVlc3QgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XHJcbmltcG9ydCB7IEdyaWREYXRhUmVzdWx0IH0gZnJvbSAnQHByb2dyZXNzL2tlbmRvLWFuZ3VsYXItZ3JpZCc7XHJcbmltcG9ydCB7IHRvT0RhdGFTdHJpbmcgfSBmcm9tICdAcHJvZ3Jlc3Mva2VuZG8tZGF0YS1xdWVyeSc7XHJcbmltcG9ydCB7IE9ic2VydmFibGUsIEJlaGF2aW9yU3ViamVjdCB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBtYXAsIHRhcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcclxuLy9pbXBvcnQgeyBBbnlBUmVjb3JkIH0gZnJvbSAnZG5zJztcclxuaW1wb3J0IHsgdGhyb3dFcnJvciB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgKiBhcyBDcnlwdG9KUyBmcm9tICdjcnlwdG8tanMnO1xyXG5pbXBvcnQgeyBjYXRjaEVycm9yLCByZXRyeSB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcclxuaW1wb3J0IHsgTm90aWZpY2F0aW9uU2VydmljZSB9IGZyb20gJ0Bwcm9ncmVzcy9rZW5kby1hbmd1bGFyLW5vdGlmaWNhdGlvbic7XHJcbmltcG9ydCB7IERpYWxvZ1NlcnZpY2UsIERpYWxvZ1JlZiwgRGlhbG9nQ2xvc2VSZXN1bHQgfSBmcm9tICdAcHJvZ3Jlc3Mva2VuZG8tYW5ndWxhci1kaWFsb2cnO1xyXG5pbXBvcnQgeyBEYXksIGZpcnN0RGF5SW5XZWVrLCBnZXREYXRlLCB0b0xvY2FsRGF0ZSB9IGZyb20gJ0Bwcm9ncmVzcy9rZW5kby1kYXRlLW1hdGgnO1xyXG5pbXBvcnQgeyBQYW5lbEJhckl0ZW1Nb2RlbCwgUGFuZWxCYXJTdGF0ZUNoYW5nZUV2ZW50IH0gZnJvbSAnQHByb2dyZXNzL2tlbmRvLWFuZ3VsYXItbGF5b3V0JztcclxuaW1wb3J0IHsgTWQ1IH0gZnJvbSAndHMtbWQ1L2Rpc3QvbWQ1JztcclxuaW1wb3J0IHsgZm9ybWF0RGF0ZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7IGtleWZyYW1lcyB9IGZyb20gJ0Bhbmd1bGFyL2FuaW1hdGlvbnMnO1xyXG5pbXBvcnQgeyAgdGFic0NvZGVzLCBjb21wb25lbnRDb25maWdEZWYgfSBmcm9tICcuL21vZGVsJztcclxuXHJcbmltcG9ydCB7IE1lc3NhZ2VTZXJ2aWNlIH0gZnJvbSAnQHByb2dyZXNzL2tlbmRvLWFuZ3VsYXItbDEwbic7XHJcbmltcG9ydCB7IE15TWVzc2FnZVNlcnZpY2UgfSBmcm9tICcuL215LW1lc3NhZ2Uuc2VydmljZSc7XHJcblxyXG5cclxuZGVjbGFyZSBmdW5jdGlvbiBnZXRQYXJhbUNvbmZpZygpOiBhbnk7XHJcbmRlY2xhcmUgZnVuY3Rpb24gc2V0UGFyYW1Db25maWcodmFyMTphbnkpOmFueTtcclxuQEluamVjdGFibGUoe1xyXG4gIHByb3ZpZGVkSW46ICdyb290JyxcclxufSlcclxuLy9leHBvcnQgY2xhc3Mgc3RhclNlcnZpY2VzIGV4dGVuZHMgQmVoYXZpb3JTdWJqZWN0PEdyaWREYXRhUmVzdWx0PiB7XHJcbiAgZXhwb3J0IGNsYXNzIHN0YXJTZXJ2aWNlcyAge1xyXG4gIHB1YmxpYyBwYXJhbUNvbmZpZzphbnk7XHJcbiAgcHJpdmF0ZSBjcmVhdGVkSXRlbXM6IGFueVtdID0gW107XHJcbiAgcHJpdmF0ZSB1cGRhdGVkSXRlbXM6IGFueVtdID0gW107XHJcbiAgcHJpdmF0ZSBkZWxldGVkSXRlbXM6IGFueVtdID0gW107XHJcbiAgcHVibGljIGxvYWRpbmc6IGFueTtcclxuICBwdWJsaWMgcm91dGluZV9uYW1lID0gXCJcIjtcclxuICBwdWJsaWMgc2F2ZUNoYW5nZXNNc2cgPSBcIlNjcmVlbiBjaGFuZ2VkLCBhcmUgeW91IHN1cmUgeW91IHRvIG5hdmlnYXRlP1wiO1xyXG4gIHB1YmxpYyBkZWxldGVEZXRhaWxNc2cgPSBcIkNhbiBub3QgZGVsZXRlIGFzIGRldGFpbCBoYXMgZGF0YS5cIjtcclxuICBwdWJsaWMgcGxlYXNlQ29uZmlybU1zZyA9IFwiUGxlYXNlIGNvbmZpcm1cIjtcclxuICBwdWJsaWMgZGVsZXRlQ29uZmlybU1zZyA9IFwiQXJlIHlvdSBzdXJlIHlvdSB3YW50IHRvIGRlbGV0ZSB0aGlzIHJlY29yZD9cIjtcclxuICBwdWJsaWMgbm90aGluZ1RvRGVsZXRlbE1zZyA9IFwiTm8gcmVjb3JkcyB0byBkZWxldGUuXCI7XHJcbiAgcHVibGljIGZpZWxkc1JlcXVpcmVkTXNnID0gXCJQbGVhc2UgZW50ZXIgcmVxdWlyZWQgZmllbGRzLlwiXHJcbiAgcHVibGljIHJlYWRPbmx5TXNnID0gXCJDYW4gbm90IHNhdmUgLCB5b3VyIGF1dGhvcml0eSBpcyByZWFkb25seS5cIlxyXG4gIHB1YmxpYyBub0FjY2Vzc01zZyA9IFwiWW91IGRvbnQgaGF2ZSBhY2Nlc3MgdG8gdGhpcyByb3V0aW5lLlwiXHJcbiAgcHVibGljIHN0YW5kYXJkRXJyb3JNc2cgPSBcIkVycm9yIHBlcmZvcm1pbmcgdHJhbnNhY3Rpb25cIlxyXG4gIHB1YmxpYyBzYXZlTWFzdGVyTXNnID0gXCJTYXZlIG1hc3RlciByZWNvcmQgZmlyc3QuXCJcclxuICBwdWJsaWMgZW50ZXJRdWVyeU1zZyA9ICBcIkVudGVyIGFueSBmaWVsZCB0byBzZWFyY2ggKGUuZzogbmFtZSUpIGFuZCB0aGVuIHByZXNzIEV4ZWN1dGUgUXVlcnlcIjtcclxuICBwdWJsaWMgaGVscE1zZyA9IFwiXCI7XHJcbiAgcHVibGljIGhlbHBNc2dfZ3JpZCA9IFwiXCI7XHJcbiAgcHVibGljIFVTRVJOQU1FID0gXCJcIjtcclxuICBwdWJsaWMgaGlkZUFmdGVyID0gNTAwO1xyXG4gIHB1YmxpYyBTdHJBdXRoID0gXCJcIjtcclxuICBwdWJsaWMgVVNFUl9JTkZPOmFueTtcclxuICBwdWJsaWMgTUFTVEVSX0RCID0gXCJcIjtcclxuICBwdWJsaWMgVVNFUk5BTUVfREIgPSBcIlwiO1xyXG4gIHByaXZhdGUgaHR0cE9wdGlvbnM6YW55O1xyXG4gIHB1YmxpYyBsaW1pdCA9IDUwMDA7XHJcbiAgcHVibGljIFllc05vQWN0aW9ucyA9IFtcclxuICAgIHsgdGV4dDogJ05vJywgcHJpbWFyeTogZmFsc2UgfSxcclxuICAgIHsgdGV4dDogJ1llcycsIHByaW1hcnk6IHRydWUgfVxyXG4gIF07XHJcbiAgcHVibGljIE9rQWN0aW9ucyA9IFtcclxuICAgIHsgdGV4dDogJ09rJywgcHJpbWFyeTogZmFsc2UgfVxyXG4gIF07XHJcbiAgcHVibGljIHNlc3Npb25QYXJhbXM6YW55ID0ge307XHJcblxyXG5cclxuXHJcbiAgICAvL3ByaXZhdGUgQkFTRV9VUkwgPSAnaHR0cHM6Ly9vZGF0YXNhbXBsZXNlcnZpY2VzLmF6dXJld2Vic2l0ZXMubmV0L1Y0L05vcnRod2luZC9Ob3J0aHdpbmQuc3ZjLyc7XHJcbiAgLy9wcml2YXRlIEJBU0VfVVJMID0gJ2h0dHA6Ly8xOTIuMTY4LjEuMzo4MDkwL2FwaT9fZm9ybWF0PWpzb24mX2xpbWl0PTUwJztcclxuXHJcbiAgcHVibGljIEVQTUVOR19VUkwgPSBcIlwiOyAvLydodHRwOi8vMTkyLjE2OC4xLjU6ODA5Mi9mb3JtYXQnO1xyXG4gICAgLy9wcml2YXRlIEVQTUVOR19VUkwgPSAnaHR0cDovL2dtYXNocm8uY29tOjgwOTIvZm9ybWF0JztcclxuXHJcbiAgcHVibGljIFNFUlZFUl9VUkwgPSBcIlwiOyAvLyAnaHR0cDovL2xvY2FsaG9zdDo4MDkwJztcclxuICAvL3B1YmxpYyBTRVJWRVJfVVJMID0gJ2h0dHA6Ly9nbWFzaHJvLmNvbTo4MDkwJztcclxuXHJcbiAgICBwdWJsaWMgQkFTRV9VUkwgPSB0aGlzLlNFUlZFUl9VUkwgKyAnL2FwaT9fZm9ybWF0PWpzb24mX2xpbWl0PScgKyB0aGlzLmxpbWl0O1xyXG4gIC8vcHJpdmF0ZSBCQVNFX1VSTCA9ICdodHRwOi8vZ21hc2hyby5jb206ODA5MC9hcGk/X2Zvcm1hdD1qc29uJl9saW1pdD0nICsgdGhpcy5saW1pdDtcclxuICAgIHB1YmxpYyBlS3ljU2NyID0gXCJEU1BFS1lDXCI7XHJcbiAgcHVibGljIHBvcnRhbFNjciA9IFwiRFNQUE9SVEFMXCI7XHJcblxyXG4gICAgY29uc3RydWN0b3IoXHJcbiAgICAgICAgcHJpdmF0ZSBub3RpZmljYXRpb25TZXJ2aWNlOiBOb3RpZmljYXRpb25TZXJ2aWNlLFxyXG4gICAgICAgIHByaXZhdGUgZGlhbG9nU2VydmljZTogRGlhbG9nU2VydmljZSxcclxuICAgICAgICBwcml2YXRlIGh0dHA6IEh0dHBDbGllbnQsXHJcbiAgICAgICAgcHJpdmF0ZSBtZXNzYWdlczogTWVzc2FnZVNlcnZpY2VcclxuICAgICkge1xyXG4gICAgLy9zdXBlcihudWxsKTtcclxuICAgICAgICAvL2xvZ2dlci53YXJuKFwiV2FybmluZyBtZXNzYWdlXCIpO1xyXG5cclxuICAgIH1cclxuXHJcbiAgLy8gcHVibGljIHF1ZXJ5KHN0YXRlOiBhbnkpOiB2b2lkIHtcclxuICAvLyAgIGxldCBxdWVyeU5hbWUgPSBcIlwiO1xyXG4gIC8vICAgdGhpcy5mZXRjaCh0aGlzLCBxdWVyeU5hbWUpXHJcbiAgLy8gICAgIC5zdWJzY3JpYmUoKHg6YW55KSA9PiBzdXBlci5uZXh0KHgpKTtcclxuICAvLyB9XHJcbiAgcHVibGljIHJlbW92ZVJlYyhncmlkRGF0YTogYW55LCBlZGl0ZWRSb3dJbmRleDogbnVtYmVyKSB7XHJcblxyXG4gICAgICAgIC8vbGV0IHJlc3VsdDEgPSBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KGdyaWREYXRhKSk7XHJcbiAgICBpZiAodHlwZW9mIGVkaXRlZFJvd0luZGV4ICE9PSBcInVuZGVmaW5lZFwiKSB7XHJcbiAgICAgIGdyaWREYXRhLmRhdGEuc3BsaWNlKGVkaXRlZFJvd0luZGV4LCAxKTtcclxuICAgICAgICAgIGdyaWREYXRhLnRvdGFsID0gZ3JpZERhdGEuZGF0YS5sZW5ndGg7XHJcbiAgICAgICAgICAvKiAgLy9pZiAodGhpcy5wYXJhbUNvbmZpZy5ERUJVR19GTEFHKSBjb25zb2xlLmxvZygncmVtdmluZyBlZGl0ZWRSb3dJbmRleDonICsgZWRpdGVkUm93SW5kZXgpXHJcbiAgICAgICAgICAgIHJlc3VsdDEuZGF0YS5zcGxpY2UoIGVkaXRlZFJvd0luZGV4ICwgMSApO1xyXG4gICAgICAgICAgICByZXN1bHQxLnRvdGFsID0gcmVzdWx0MS5kYXRhLmxlbmd0aDsqL1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIGdyaWREYXRhO1xyXG4gICAgfVxyXG4gIHB1YmxpYyB1cGRhdGVSZWMoZ3JpZERhdGE6IGFueSwgZWRpdGVkUm93SW5kZXg6IG51bWJlciwgTmV3VmFsOiBhbnkpIHtcclxuICAgICAgZ3JpZERhdGEuZGF0YVtlZGl0ZWRSb3dJbmRleF0gPSBOZXdWYWw7XHJcblxyXG4gICAgICAgIHJldHVybiBncmlkRGF0YTtcclxuXHJcbiAgICB9XHJcbiAgcHVibGljIGFkZFJlYyhncmlkRGF0YTogYW55LCBOZXdWYWw6IGFueSkge1xyXG4gICAgICBncmlkRGF0YS5kYXRhLnB1c2goTmV3VmFsKTtcclxuICAgICAgIC8qIGxldCByZXN1bHQgPXtcImRhdGFcIjpbXSwgdG90YWw6MH07XHJcbiAgICAgICAgbGV0IHJlc3VsdDEgPSBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KGdyaWREYXRhKSk7XHJcbiAgICAgICAgTmV3VmFsID0gdGhpcy5wYXJzZVRvRGF0ZShOZXdWYWwpO1xyXG4gICAgICAgIHJlc3VsdDEuZGF0YS5wdXNoKE5ld1ZhbCk7XHJcbiAgICAgICAgcmVzdWx0LmRhdGEgPSByZXN1bHQxLmRhdGE7XHJcbiAgICAgICAgcmVzdWx0LnRvdGFsID0gcmVzdWx0LmRhdGEubGVuZ3RoO1xyXG4gICAgICAgIHJldHVybiByZXN1bHQxOyovXHJcbiAgICAgICAgcmV0dXJuIGdyaWREYXRhO1xyXG4gICAgfVxyXG4gICAgcHVibGljIGZvcm1hdFdoZXJlKE5ld1ZhbDphbnkpe1xyXG4gICAgICBmdW5jdGlvbiBpc0RhdGUgKHZhbHVlOmFueSkge1xyXG4gICAgICAgIHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIERhdGU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZ1bmN0aW9uIEZPUk1BVF9JU09fcGFyc2UoZDphbnkpIHsgLy8gVGhpcyBmdW5jdGlvbiB3YXMgYWRkZWQgZm9yIENSTS4gQ1JNIGRhdGVzIHNob3VsZCBiZSBJU09cclxuICAgICAgICAgIHZhciBkYXRlSXNvID0gZC50b0lTT1N0cmluZygpO1xyXG4gICAgICAgICAgdmFyIGRhdGVJc29BcnIgPSBkYXRlSXNvLnNwbGl0KFwiVFwiKTtcclxuICAgICAgICAgIGRhdGVJc28gPSBkYXRlSXNvQXJyWzBdICsgXCIgXCIgKyBkYXRlSXNvQXJyWzFdO1xyXG4gICAgICAgICAgZGF0ZUlzbyA9IGRhdGVJc28uc3Vic3RyKDAsIDE5KTtcclxuICAgICAgICAgIHJldHVybiBkYXRlSXNvO1xyXG4gICAgICAgIH1cclxuICAgICAgZnVuY3Rpb24gcGFyc2VWYWx1ZShrZXk6YW55LCB2YWx1ZTphbnkpe1xyXG4gICAgICAgIGxldCBwaHJhc2UgPSBcIlwiO1xyXG4gICAgICAgIC8vaWYgKHRoaXMucGFyYW1Db25maWcuREVCVUdfRkxBRykgY29uc29sZS5sb2coXCJpc0RhdGU6XCIgLCBpc0RhdGUgKHZhbHVlKSwgdmFsdWUpO1xyXG5cclxuICAgICAgICBpZiAoaXNEYXRlICh2YWx1ZSkpe1xyXG4gICAgICAgICAgICAvL3ZhbHVlID0gZ2V0RGF0ZSh2YWx1ZSk7XHJcbiAgICAgICAgICAgIC8vdmFsdWUgPSBGT1JNQVRfSVNPX3BhcnNlKHZhbHVlKTtcclxuICAgICAgICAgICAgdmFsdWUgPSB2YWx1ZS50b0lTT1N0cmluZygpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJyApXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgLy8gaXQncyBhIHN0cmluZ1xyXG4gICAgICAgICAgaWYgKHZhbHVlICE9IFwiXCIgJiYgdmFsdWUgIT0gbnVsbCApXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIGxldCBvcGVyYXRvcnMgPSBcIjw+IT1cIlxyXG4gICAgICAgICAgICBsZXQgb3BlcmF0b3JWYWwgPSBcIlwiO1xyXG4gICAgICAgICAgICBsZXQgdHJpbWVlZFZhbCA9IHZhbHVlLnRyaW0oKTtcclxuICAgICAgICAgICAgbGV0IGZpcnN0Q2hhciA9IHRyaW1lZWRWYWwuY2hhckF0KDApO1xyXG4gICAgICAgICAgICBsZXQgbiA9IG9wZXJhdG9ycy5zZWFyY2goZmlyc3RDaGFyKTtcclxuICAgICAgICAgICAgaWYgKCBuICE9IC0xKXtcclxuICAgICAgICAgICAgICBpZiAoZmlyc3RDaGFyID09IFwifFwiKVxyXG4gICAgICAgICAgICAgICAgb3BlcmF0b3JWYWwgPSBcIiA9ICdcIiAgKyB2YWx1ZSArIFwiJyBcIjtcclxuICAgICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgICAgICBvcGVyYXRvclZhbCA9IHZhbHVlO1xyXG5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmICggdmFsdWUudG9VcHBlckNhc2UoKS5zZWFyY2goXCIlXCIpICE9IC0xKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgb3BlcmF0b3JWYWwgPSBcIiBsaWtlICdcIiAgKyB2YWx1ZSArIFwiJyBcIjtcclxuICAgICAgICAgICAgICAvL2lmICh0aGlzLnBhcmFtQ29uZmlnLkRFQlVHX0ZMQUcpIGNvbnNvbGUubG9nKFwib3BlcmF0b3JWYWw6XCIrIG9wZXJhdG9yVmFsKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgIG9wZXJhdG9yVmFsID0gXCIgPSAnXCIgICsgdmFsdWUgKyBcIicgXCI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcGhyYXNlID0ga2V5ICsgZW5jb2RlVVJJQ29tcG9uZW50KG9wZXJhdG9yVmFsKTtcclxuICAgICAgICAgICAgLy9waHJhc2UgPSBrZXkgKyBvcGVyYXRvclZhbDtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZXtcclxuICAgICAgICAvLyBpdCdzIHNvbWV0aGluZyBlbHNlXHJcbiAgICAgICAgICBsZXQgb3BlcmF0b3JWYWwgPSBcIiA9ICdcIiAgKyB2YWx1ZSArIFwiJyBcIjtcclxuICAgICAgICAgIHBocmFzZSA9IGtleSArIGVuY29kZVVSSUNvbXBvbmVudChvcGVyYXRvclZhbCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gcGhyYXNlO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBsZXQgd2hlcmVQaHJhc2UgPSBcIlwiO1xyXG4gICAgICAgIGxldCB3aGVyZUNsYXVzZSA9IFwiXCI7XHJcbiAgICAgICAgaWYgKHRoaXMucGFyYW1Db25maWcuREVCVUdfRkxBRykgY29uc29sZS5sb2coXCJmb3JtYXRXaGVyZTpcIilcclxuICAgICAgICBpZiAodGhpcy5wYXJhbUNvbmZpZy5ERUJVR19GTEFHKSBjb25zb2xlLmxvZyhOZXdWYWwpXHJcbiAgICAgICAgT2JqZWN0LmtleXMoTmV3VmFsKS5mb3JFYWNoKGZ1bmN0aW9uKGtleSkge1xyXG4gICAgICAgICAgICBsZXQgdmFsdWUgPSBOZXdWYWxba2V5XTtcclxuICAgICAgICAgICAgLy9pZiAodGhpcy5wYXJhbUNvbmZpZy5ERUJVR19GTEFHKSBjb25zb2xlLmxvZyhrZXkgKyBcIjpcIiArIHZhbHVlKTtcclxuICAgICAgICAgICAgaWYgKCAodHlwZW9mIHZhbHVlICE9PSBcInVuZGVmaW5lZFwiICkgJiYgKHZhbHVlICE9PSBcIlwiICkgJiYgKHZhbHVlICE9PSBudWxsKSApXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICBsZXQgcGhyYXNlID0gcGFyc2VWYWx1ZShrZXksIHZhbHVlKTtcclxuXHJcbiAgICAgICAgICAgICAgaWYgKHdoZXJlUGhyYXNlID09IFwiXCIpXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgd2hlcmVQaHJhc2UgPSB3aGVyZVBocmFzZSArICAgcGhyYXNlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHdoZXJlUGhyYXNlID0gd2hlcmVQaHJhc2UgKyBcIiBhbmQgXCIgKyBwaHJhc2U7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgaWYgKHdoZXJlUGhyYXNlICE9IFwiXCIpXHJcbiAgICAgICAgICAgIHdoZXJlQ2xhdXNlID0gXCImX1dIRVJFPVwiICsgd2hlcmVQaHJhc2U7XHJcbiAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICB3aGVyZUNsYXVzZSA9IFwiJl9XSEVSRT1cIjtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMucGFyYW1Db25maWcuREVCVUdfRkxBRykgY29uc29sZS5sb2coXCJ3aGVyZUNsYXVzZTpcIiArIHdoZXJlQ2xhdXNlKTtcclxuICAgICAgICByZXR1cm4gd2hlcmVDbGF1c2U7XHJcbiAgICB9XHJcblxyXG4gIHB1YmxpYyBjaGVja0RCTG9jKHRoZVVSTDphbnkpIHtcclxuICAgIFxyXG4gICAgICBsZXQgcGFyYW1Db25maWcgPSBnZXRQYXJhbUNvbmZpZygpO1xyXG4gICAgICBpZiAodGhpcy5wYXJhbUNvbmZpZy5EQkxvYyAhPSBcIlwiKXtcclxuICAgICAgLy9sZXQgdXNlck5hbWUgPSB0aGlzLnNlc3Npb25QYXJhbXMuVVNFUk5BTUU7XHJcbiAgICAgICAgdGhlVVJMID0gdGhlVVJMICsgXCImREJMb2M9XCIgKyB0aGlzLnBhcmFtQ29uZmlnLkRCTG9jO1xyXG4gICAgICBcclxuICAgIH1cclxuICAgIGlmICh0aGlzLnBhcmFtQ29uZmlnLkRFQlVHX0ZMQUcpIGNvbnNvbGUubG9nKFwidGhlVVJMOlwiLCB0aGVVUkwpO1xyXG5cclxuICAgIHJldHVybiB0aGVVUkw7XHJcbiAgfVxyXG4gIFxyXG4gIHB1YmxpYyBmZXRjaChvYmplY3Q6YW55LCBxdWVyeU5hbWU6IHN0cmluZyk6IE9ic2VydmFibGU8R3JpZERhdGFSZXN1bHQ+IHtcclxuICAgICAgICAvL2NvbnN0IHF1ZXJ5U3RyID0gYCR7dG9PRGF0YVN0cmluZyhzdGF0ZSl9JiRjb3VudD10cnVlYDtcclxuICAgICAgICBjb25zdCBxdWVyeVN0ciA9IGBgO1xyXG4gICAgICAgIHRoaXMubG9hZGluZyA9IHRydWU7XHJcbiAgICAgICAgbGV0IHRoZVVSTCA9IGAke3RoaXMuQkFTRV9VUkx9JHtxdWVyeU5hbWV9YDtcclxuICAgICAgICB0aGVVUkwgPSB0aGlzLmNoZWNrREJMb2ModGhlVVJMKTtcclxuXHJcbiAgICAgIFxyXG4gICAgICAgIHRoaXMuaHR0cE9wdGlvbnMgPSB7XHJcbiAgICAgICAgICBoZWFkZXJzOiBuZXcgSHR0cEhlYWRlcnMoe1xyXG4gICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG4gICAgICAgICAgICAnYXV0aG9yaXphdGlvbic6IHRoaXMuU3RyQXV0aFxyXG5cclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgfTtcclxuICAgICAgICByZXR1cm4gdGhpcy5odHRwXHJcbiAgICAgIC5nZXQoYCR7dGhlVVJMfWAsIHRoaXMuaHR0cE9wdGlvbnMpXHJcbiAgICAgICAgICAgIC5waXBlKFxyXG4gICAgICAgICAgICAgICAgY2F0Y2hFcnJvcigoZXJyKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRocm93RXJyb3IoZXJyKTtcclxuICAgICAgICAgICAgICAgICAgfSksXHJcbiAgICAgICAgbWFwKChyZXNwb25zZTphbnkpID0+ICg8R3JpZERhdGFSZXN1bHQ+eyBkYXRhOiByZXNwb25zZVsnZGF0YSddIH1cclxuICAgICAgICAgICAgICAgICAgKSksXHJcbiAgICAgICAgICAgICAgICB0YXAoZGF0YSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgIGlmICh0aGlzLnBhcmFtQ29uZmlnLkRFQlVHX0ZMQUcpIGNvbnNvbGUubG9nKFwic3RhdHVzIGRhdGE6IFwiLCBkYXRhKTtcclxuICAgICAgICAgICAgICAgICAgdGhpcy5sb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgIGlmICh0aGlzLnBhcmFtQ29uZmlnLkRFQlVHX0ZMQUcpIGNvbnNvbGUubG9nKFwidGVzdDp0aGlzLnJ1bGVzUG9zdFF1ZXJ5RGVmXCIsIHRoaXMucnVsZXNQb3N0UXVlcnlEZWYpXHJcbiAgICAgICAgICAgIGxldCBzdGF0dXNSZWM6YW55ID0ge307XHJcbiAgICAgICAgICBzdGF0dXNSZWMgPSB0aGlzLmNoZWNrUnVsZXMob2JqZWN0LCB0aGlzLnJ1bGVzUG9zdFF1ZXJ5RGVmLCBkYXRhLFwiUE9TVF9RVUVSWVwiKTtcclxuICAgICAgICAgIGlmICh0aGlzLnBhcmFtQ29uZmlnLkRFQlVHX0ZMQUcpIGNvbnNvbGUubG9nKFwic3RhdHVzUmVjOnBvc3Q6UE9TVF9RVUVSWTpmZXRjaDpcIiwgc3RhdHVzUmVjLCBzdGF0dXNSZWNbJ3N0YXR1cyddKTtcclxuICAgICAgICAgIGlmIChzdGF0dXNSZWNbJ3N0YXR1cyddICA9PSAtMSl7XHJcbiAgICAgICAgICAgIHRoaXMuc2hvd05vdGlmaWNhdGlvbiAoXCJlcnJvclwiLFwiUnVsZTpcIiArIHN0YXR1c1JlY1snbXNnJ10gKTtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfSlcclxuICAgICAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgIC8qIHB1YmxpYyByZW1vdmUoIHBhZ2U6IGFueSk6T2JzZXJ2YWJsZTxhbnk+IHtcclxuICAgICAgICB0aGlzLmRlbGV0ZShwYWdlKVxyXG4gICAgICAgICAgIC5zdWJzY3JpYmUoKHg6YW55KSA9PiBzdXBlci5uZXh0KHgpKTtcclxuXHJcbiAgICAgICAgICAgIHJldHVybiAwO1xyXG4gICAgfVxyXG4qL1xyXG5wdWJsaWMgZGVsZXRlKFBhZ2U6IHN0cmluZyk6IE9ic2VydmFibGU8R3JpZERhdGFSZXN1bHQ+IHtcclxuICAgICAgICAvL2NvbnN0IHF1ZXJ5U3RyID0gYCR7dG9PRGF0YVN0cmluZyhzdGF0ZSl9JiRjb3VudD10cnVlYDtcclxuICAgICAgICBjb25zdCBxdWVyeVN0ciA9IGBgO1xyXG4gICAgICAgIHRoaXMubG9hZGluZyA9IHRydWU7XHJcbiAgICAgICAgbGV0IHRoZVVSTCA9IGAke3RoaXMuQkFTRV9VUkx9JHtQYWdlfWA7XHJcbiAgICAgICAgdGhlVVJMID0gdGhpcy5jaGVja0RCTG9jKHRoZVVSTCk7XHJcblxyXG4gICAgICAgIHRoaXMuaHR0cE9wdGlvbnMgPSB7XHJcbiAgICAgICAgICBoZWFkZXJzOiBuZXcgSHR0cEhlYWRlcnMoe1xyXG4gICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG4gICAgICAgICAgICAnYXV0aG9yaXphdGlvbic6IHRoaXMuU3RyQXV0aFxyXG5cclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gdGhpcy5odHRwXHJcbiAgICAgICAgICAgIC5kZWxldGU8YW55PihgJHt0aGVVUkx9YCwgdGhpcy5odHRwT3B0aW9ucylcclxuICAgICAgICAgICAgLnBpcGUoXHJcbiAgICAgICAgICAgICAgICBjYXRjaEVycm9yKChlcnIpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhyb3dFcnJvcihlcnIpO1xyXG4gICAgICAgICAgICAgICAgICB9KSxcclxuXHJcbiAgICAgICAgbWFwKChyZXNwb25zZTphbnkpID0+ICg8R3JpZERhdGFSZXN1bHQ+eyBkYXRhOiByZXNwb25zZVsnZGF0YSddIH1cclxuICAgICAgICAgICAgICAgICkpLFxyXG5cclxuICAgICAgICAgICAgICAgIHRhcCgoKSA9PiB0aGlzLmxvYWRpbmcgPSBmYWxzZSlcclxuICAgICAgICAgICAgKTtcclxuICAgIH1cclxuICBwdWJsaWMgcG9zdF9kZWxldGUoUGFnZTogc3RyaW5nLCBCb2R5OiBhbnkpOiBPYnNlcnZhYmxlPEdyaWREYXRhUmVzdWx0PiB7XHJcbiAgICAgICAgLy9jb25zdCBxdWVyeVN0ciA9IGAke3RvT0RhdGFTdHJpbmcoc3RhdGUpfSYkY291bnQ9dHJ1ZWA7XHJcbiAgICAgICAgY29uc3QgcXVlcnlTdHIgPSBgYDtcclxuICAgICAgICB0aGlzLmxvYWRpbmcgPSB0cnVlO1xyXG4gICAgICAgIC8vaWYgKHRoaXMucGFyYW1Db25maWcuREVCVUdfRkxBRykgY29uc29sZS5sb2coXCJwb3N0OlBhZ2U6XCIsUGFnZSxcIiBCb2R5OlwiLEJvZHkpXHJcblxyXG4gICAgICAgIGxldCB0aGVVUkwgPSBgJHt0aGlzLkJBU0VfVVJMfSR7UGFnZX1gO1xyXG4gICAgICAgIHRoaXMuaHR0cE9wdGlvbnMgPSB7XHJcbiAgICAgICAgICBoZWFkZXJzOiBuZXcgSHR0cEhlYWRlcnMoe1xyXG4gICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG4gICAgICAgICAgICAnYXV0aG9yaXphdGlvbic6IHRoaXMuU3RyQXV0aFxyXG5cclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vaWYgKHRoaXMucGFyYW1Db25maWcuREVCVUdfRkxBRykgY29uc29sZS5sb2coXCJ0aGlzLlN0ckF1dGg6XCIgKyB0aGlzLlN0ckF1dGgpO1xyXG4gICAgICAgIHJldHVybiB0aGlzLmh0dHBcclxuICAgICAgICAgICAgLnBvc3Q8YW55PihgJHt0aGVVUkx9YCwgQm9keSwgdGhpcy5odHRwT3B0aW9ucylcclxuICAgICAgICAgICAgLnBpcGUoXHJcbiAgICAgICAgICAgICAgICBjYXRjaEVycm9yKChlcnIpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhyb3dFcnJvcihlcnIpO1xyXG4gICAgICAgICAgICAgICAgICB9KSxcclxuXHJcbiAgICAgICAgbWFwKChyZXNwb25zZTphbnkpID0+ICg8R3JpZERhdGFSZXN1bHQ+eyBkYXRhOiByZXNwb25zZVsnZGF0YSddIH1cclxuICAgICAgICAgICAgICAgICkpLFxyXG4gICAgICAgICAgICAgICAgdGFwKGRhdGEgPT4ge1xyXG4gICAgICAgICAgICAgICAgICBpZiAodGhpcy5wYXJhbUNvbmZpZy5ERUJVR19GTEFHKSBjb25zb2xlLmxvZyhcInN0YXR1cyBkYXRhOlwiLCBkYXRhKTtcclxuICAgICAgICAgICAgICAgICAgdGhpcy5sb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgfSlcclxuXHJcblxyXG4gICAgICAgICAgICApO1xyXG4gICAgfVxyXG4gICAgcHVibGljIHNob3dEYWlsb2dFcnIoZXJyb3Ipe1xyXG4gICAgICBsZXQgTXNnID0gZXJyb3IuZXJyb3I7XHJcbiAgICAgIC8vY29uc29sZS5sb2coXCJNc2c6XCIsIE1zZyk7XHJcbiAgICAgIGxldCBwb3NpdGlvbiA9IE1zZy5zZWFyY2goXCJVTklRVUUgY29uc3RyYWludFwiKTtcclxuICAgICAgaWYgKHBvc2l0aW9uICE9IC0xIClcclxuICAgICAgICBNc2cgPSB0aGlzLmdldE5MUyhbXSwnQUxSRUFEWV9FWElTVFMnLCdSZWNvcmQgYWxyZWFkeSBleGlzdHMnKVxyXG4gICAgICB2YXIgZGlhbG9nU3RydWMgPSB7XHJcbiAgICAgICAgbXNnOiBNc2csXHJcbiAgICAgICAgdGl0bGU6IFwiRXJyb3JcIixcclxuICAgICAgICBpbmZvOiBudWxsLFxyXG4gICAgICAgIG9iamVjdDogdGhpcyxcclxuICAgICAgICBhY3Rpb246IHRoaXMuT2tBY3Rpb25zLFxyXG4gICAgICAgIGNhbGxiYWNrOiBudWxsXHJcbiAgICAgIH07XHJcbiAgICAgIHRoaXMuc2hvd0NvbmZpcm1hdGlvbihkaWFsb2dTdHJ1Yyk7XHJcbiAgXHJcbiAgICB9XHJcbiAgcHVibGljIHN5bmNGbGFnID0gMDtcclxuICBwdWJsaWMgcG9zdChvYmplY3Q6YW55LCBQYWdlOiBzdHJpbmcsIEJvZHk6IGFueSk6IE9ic2VydmFibGU8R3JpZERhdGFSZXN1bHQ+IHtcclxuICAgICAgLy9jb25zdCBxdWVyeVN0ciA9IGAke3RvT0RhdGFTdHJpbmcoc3RhdGUpfSYkY291bnQ9dHJ1ZWA7XHJcbiAgICAgIGNvbnN0IHF1ZXJ5U3RyID0gYGA7XHJcbiAgICAgIHRoaXMubG9hZGluZyA9IHRydWU7XHJcbiAgICAvL2lmICh0aGlzLnBhcmFtQ29uZmlnLkRFQlVHX0ZMQUcpIFxyXG4gICAgLy9jb25zb2xlLmxvZyhcInBvc3QgOlBhZ2U6XCIsUGFnZSxcIiBCb2R5OlwiLEJvZHkpXHJcbiAgICAvLyBpZiAoUGFnZT09XCJcIiAmJiBCb2R5Lmxlbmd0aCA9PSAwKVxyXG4gICAgLy8gICBjb25zb2xlLmxvZyhcInBvc3QgZW1wdHk6UGFnZTpcIixQYWdlWydkdW0nXS5sZW5ndGgsXCIgQm9keTpcIixCb2R5KVxyXG4gICAgbGV0IHN0YXR1c1JlYzphbnkgPSB7fTtcclxuICAgIHN0YXR1c1JlYyA9IHRoaXMuY2hlY2tSdWxlcyhvYmplY3QsIHRoaXMucnVsZXNQcmVRdWVyeURlZiwgQm9keSxcIlBSRV9RVUVSWVwiKTtcclxuICAgIGlmICh0aGlzLnBhcmFtQ29uZmlnLkRFQlVHX0ZMQUcpIGNvbnNvbGUubG9nKFwic3RhdHVzUmVjOnBvc3Q6UFJFX1FVRVJZXCIsIHN0YXR1c1JlYywgc3RhdHVzUmVjWydzdGF0dXMnXSk7XHJcbiAgICBpZiAoc3RhdHVzUmVjWydzdGF0dXMnXSAgPT0gLTEpe1xyXG4gICAgICBpZiAodGhpcy5wYXJhbUNvbmZpZy5ERUJVR19GTEFHKSBjb25zb2xlLmxvZyhcInN0YXR1c1JlYzogZm91bmQgLTFcIik7XHJcbiAgICAgIHRoaXMuc2hvd05vdGlmaWNhdGlvbiAoXCJlcnJvclwiLFwiUnVsZTpcIiArIHN0YXR1c1JlY1snbXNnJ10gKTtcclxuICAgICAgQm9keVswXS5fUVVFUlkgPSBcIlwiO1xyXG4gICAgfVxyXG5cclxuICAgICAgbGV0IHRoZVVSTCA9IGAke3RoaXMuQkFTRV9VUkx9JHtQYWdlfWA7XHJcbiAgICAgIHRoZVVSTCA9IHRoaXMuY2hlY2tEQkxvYyh0aGVVUkwpO1xyXG4gICAgICB0aGlzLmh0dHBPcHRpb25zID0ge1xyXG4gICAgICAgIGhlYWRlcnM6IG5ldyBIdHRwSGVhZGVycyh7XHJcbiAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG4gICAgICAgICAgJ2F1dGhvcml6YXRpb24nOiB0aGlzLlN0ckF1dGhcclxuXHJcbiAgICAgICAgfSlcclxuICAgICAgfVxyXG4gICAgICBjb25zb2xlLmxvZyhcInBvc3Q6dGhlVVJMOlwiLCB0aGVVUkwsIFwiQm9keTpcIiwgQm9keSk7XHJcbiAgICAgIC8vaWYgKHRoaXMucGFyYW1Db25maWcuREVCVUdfRkxBRykgY29uc29sZS5sb2coXCJ0aGlzLlN0ckF1dGg6XCIgLCB0aGlzLlN0ckF1dGggLCB0aGVVUkwpO1xyXG4gICAgICAvL2lmICh0aGlzLnBhcmFtQ29uZmlnLkRFQlVHX0ZMQUcpIGNvbnNvbGUubG9nKFwidGhpcy5TdHJBdXRoOiB3aXRoIFVSTFwiICwgdGhpcy5TdHJBdXRoICwgdGhlVVJMKTtcclxuICAgICAgcmV0dXJuIHRoaXMuaHR0cFxyXG4gICAgICAgICAgLnBvc3Q8YW55PihgJHt0aGVVUkx9YCwgQm9keSwgdGhpcy5odHRwT3B0aW9ucylcclxuICAgICAgICAgIC5waXBlKFxyXG4gICAgICAgICAgICAgIGNhdGNoRXJyb3IoKGVycikgPT4ge1xyXG4gICAgICAgICAgY29uc29sZS5sb2coXCJzdGF0dXNSZWNbJ21zZyddIDpcIiwgc3RhdHVzUmVjWydtc2cnXSwgXCIgZXJyLmVycm9yIDpcIiwgZXJyLmVycm9yICApXHJcbiAgICAgICAgICBpZiAoICh0eXBlb2Ygc3RhdHVzUmVjWydtc2cnXSAhPSBcInVuZGVmaW5lZFwiKSAmJiAoc3RhdHVzUmVjWydtc2cnXSAhPSBcIlwiKSkge1xyXG4gICAgICAgICAgLy9pZiAoIChzdGF0dXNSZWNbJ21zZyddICE9IFwiXCIpKSB7XHJcbiAgICAgICAgICAgIGlmICh0eXBlb2YgZXJyLmVycm9yID09IFwidW5kZWZpbmVkXCIpe1xyXG4gICAgICAgICAgICAgIGVyciA9IHN0YXR1c1JlY1snbXNnJ107XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICAgIGVyci5lcnJvci5lcnJvciA9ICBzdGF0dXNSZWNbJ21zZyddO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgdGhpcy5zaG93RGFpbG9nRXJyKGVyci5lcnJvcik7XHJcbiAgICAgICAgICAgICAgICAgIHJldHVybiB0aHJvd0Vycm9yKGVycik7XHJcbiAgICAgICAgICAgICAgICB9KSxcclxuXHJcbiAgICAgICAgbWFwKChyZXNwb25zZTphbnkpID0+ICg8R3JpZERhdGFSZXN1bHQ+eyBkYXRhOiByZXNwb25zZVsnZGF0YSddIH1cclxuICAgICAgICAgICAgICApKSxcclxuICAgICAgICAgICAgICB0YXAoZGF0YSA9PiB7XHJcbiAgICAgICAgICAgICAgICAvL2lmICh0aGlzLnBhcmFtQ29uZmlnLkRFQlVHX0ZMQUcpIGNvbnNvbGUubG9nKFwic3RhdHVzIGRhdGE6XCIsIGRhdGEpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5sb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICBpZiAodGhpcy5wYXJhbUNvbmZpZy5ERUJVR19GTEFHKSBjb25zb2xlLmxvZyhcInRlc3Q6dGhpcy5ydWxlc1Bvc3RRdWVyeURlZlwiLCB0aGlzLnJ1bGVzUG9zdFF1ZXJ5RGVmKVxyXG4gICAgICAgICAgICAgICAgdGhpcy5zeW5jRmxhZyA9IDA7XHJcbiAgICAgICAgICBsZXQgc3RhdHVzUmVjOmFueSA9IHt9O1xyXG4gICAgICAgICAgICAgICAgc3RhdHVzUmVjID0gdGhpcy5jaGVja1J1bGVzKG9iamVjdCwgdGhpcy5ydWxlc1Bvc3RRdWVyeURlZiwgZGF0YSxcIlBPU1RfUVVFUllcIik7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5wYXJhbUNvbmZpZy5ERUJVR19GTEFHKSBjb25zb2xlLmxvZyhcInN0YXR1c1JlYzpwb3N0OlBPU1RfUVVFUllcIiwgc3RhdHVzUmVjLCBzdGF0dXNSZWNbJ3N0YXR1cyddKVxyXG4gICAgICAgICAgICAgICAgaWYgKHN0YXR1c1JlY1snc3RhdHVzJ10gID09IC0xKXtcclxuICAgICAgICAgICAgICAgICAgdGhpcy5zaG93Tm90aWZpY2F0aW9uIChcImVycm9yXCIsXCJSdWxlOlwiICsgc3RhdHVzUmVjWydtc2cnXSApO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuXHJcblxyXG4gICAgICAgIH0pXHJcblxyXG5cclxuICAgICAgICAgICk7XHJcbiAgfVxyXG4gXHJcbiAgXHJcbiAgICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4gIHB1YmxpYyBwb3N0VXBsb2FkKFBhZ2U6IHN0cmluZywgQm9keTogYW55KTogT2JzZXJ2YWJsZTxHcmlkRGF0YVJlc3VsdD4ge1xyXG4gICAgICAvL2NvbnN0IHF1ZXJ5U3RyID0gYCR7dG9PRGF0YVN0cmluZyhzdGF0ZSl9JiRjb3VudD10cnVlYDtcclxuICAgICAgY29uc3QgcXVlcnlTdHIgPSBgYDtcclxuICAgICAgdGhpcy5sb2FkaW5nID0gdHJ1ZTtcclxuXHJcbiAgICAgIGxldCB0aGVVUkwgPSBQYWdlO1xyXG4gICAgICB0aGlzLmh0dHBPcHRpb25zID0ge1xyXG4gICAgICAgIGhlYWRlcnM6IG5ldyBIdHRwSGVhZGVycyh7XHJcbiAgICAgICAgICAnYXV0aG9yaXphdGlvbic6IHRoaXMuU3RyQXV0aFxyXG5cclxuICAgICAgICB9KVxyXG4gICAgICB9XHJcbiAgICAgIC8vaWYgKHRoaXMucGFyYW1Db25maWcuREVCVUdfRkxBRykgY29uc29sZS5sb2coXCJ0aGlzLlN0ckF1dGg6XCIgKyB0aGlzLlN0ckF1dGgpO1xyXG4gICAgICByZXR1cm4gdGhpcy5odHRwXHJcbiAgICAgICAgICAucG9zdDxhbnk+KGAke3RoZVVSTH1gLCBCb2R5LCB0aGlzLmh0dHBPcHRpb25zKVxyXG4gICAgICAgICAgLnBpcGUoXHJcbiAgICAgICAgICAgICAgY2F0Y2hFcnJvcigoZXJyKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgIHJldHVybiB0aHJvd0Vycm9yKGVycik7XHJcbiAgICAgICAgICAgICAgICB9KSxcclxuXHJcbiAgICAgICAgbWFwKChyZXNwb25zZTphbnkpID0+ICg8R3JpZERhdGFSZXN1bHQ+eyBkYXRhOiByZXNwb25zZVsnZGF0YSddIH1cclxuICAgICAgICAgICAgICApKSxcclxuXHJcbiAgICAgICAgICAgICAgdGFwKCgpID0+IHRoaXMubG9hZGluZyA9IGZhbHNlKVxyXG4gICAgICAgICAgKTtcclxuICB9XHJcbiAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHJcbiAgdXBsb2FkRmlsZShwYWdlOiBhbnksIGZpbGVzU2V0OiBTZXQ8RmlsZT4sIGlkOiBhbnkpOiBhbnkge1xyXG4gICAgZmlsZXNTZXQuZm9yRWFjaChmaWxlID0+IHtcclxuICAgICAgLy8gY3JlYXRlIGEgbmV3IG11bHRpcGFydC1mb3JtIGZvciBldmVyeSBmaWxlXHJcbiAgICAgIGNvbnN0IGZvcm1kYXRhOiBGb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSgpO1xyXG4gICAgICBmb3JtZGF0YS5hcHBlbmQoJ2ZpbGUnLCBmaWxlKTtcclxuICAgICAgZm9ybWRhdGEuYXBwZW5kKCdpZCcsIGlkKTtcclxuICAgICAgaWYgKHRoaXMucGFyYW1Db25maWcuREVCVUdfRkxBRykgY29uc29sZS5sb2coXCJ1cGxvYWRGaWxlIHBhZ2U6XCIgKyBwYWdlKVxyXG4gICAgICBsZXQgYXBpVVJMID0gdGhpcy5TRVJWRVJfVVJMICsgJy9hcGkvYXR0JyArIHBhZ2U7XHJcbiAgICAgIGlmICh0aGlzLnBhcmFtQ29uZmlnLkRFQlVHX0ZMQUcpIGNvbnNvbGUubG9nKFwiYXBpVVJMOlwiICsgYXBpVVJMKTtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMucGFyYW1Db25maWcuREVCVUdfRkxBRykgY29uc29sZS5sb2coZm9ybWRhdGEpO1xyXG4gICAgICAvL2Zvcm1kYXRhLmZvckVhY2goZW50cmllcyA9PiBjb25zb2xlLmxvZyhKU09OLnN0cmluZ2lmeShlbnRyaWVzKSkpO1xyXG5cclxuICAgICAgICB0aGlzLnBvc3RVcGxvYWQoYXBpVVJMLCBmb3JtZGF0YSkuc3Vic2NyaWJlKHJlc3VsdCA9PiB7XHJcbiAgICAgICAgaWYgKHRoaXMucGFyYW1Db25maWcuREVCVUdfRkxBRykgY29uc29sZS5sb2coJ3Jlc3VsdCcsIHJlc3VsdCk7XHJcbiAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG5cclxuXHJcbiB9XHJcblxyXG4gIHVwbG9hZEZpbGVPbGQoZmlsZTogRmlsZSk6IGFueSB7XHJcbiAgICBjb25zdCBmb3JtZGF0YTogRm9ybURhdGEgPSBuZXcgRm9ybURhdGEoKTtcclxuICAgIGZvcm1kYXRhLmFwcGVuZCgnZmlsZScsIGZpbGUpOyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL3RoZSB1cGxvYWRlZCBmaWxlIGNvbnRlbnRcclxuICAgIGZvcm1kYXRhLmFwcGVuZCgnZG9jdW1lbnRWZXJzaW9uSWQnLCAnMTIzJyk7ICAgICAgIC8vSSBuZWVkIHRvIHBhc3Mgc29tZSBhZGRpdGlvbmFsIGluZm8gdG8gdGhlIHNlcnZlciBiZXNpZGVzIHRoZSBGaWxlIGRhdGFcclxuICAgIGxldCBhcGlVUkwgPSB0aGlzLlNFUlZFUl9VUkwgKyAnL2FwaT91cGxvYWQ9eSc7XHJcbiAgICBpZiAodGhpcy5wYXJhbUNvbmZpZy5ERUJVR19GTEFHKSBjb25zb2xlLmxvZyhcImFwaVVSTDpcIiArIGFwaVVSTCk7XHJcblxyXG4gICAgaWYgKHRoaXMucGFyYW1Db25maWcuREVCVUdfRkxBRykgY29uc29sZS5sb2coZm9ybWRhdGEpO1xyXG4gICAgZm9ybWRhdGEuZm9yRWFjaChlbnRyaWVzID0+IGNvbnNvbGUubG9nKEpTT04uc3RyaW5naWZ5KGVudHJpZXMpKSk7XHJcblxyXG5cclxuICAgIC8vY29uc3QgYXBpVVJMID0gdGhpcy5hcGlfcGF0aCArICdVcGxvYWQnOyAgICAgLy9jYWxsaW5nIGh0dHA6Ly9sb2NhbGhvc3Q6NTIzMzMvYXBpL1VwbG9hZENvbnRyb2xsZXJcclxuXHJcbiAgICB0aGlzLnBvc3RVcGxvYWQoYXBpVVJMLCBmb3JtZGF0YSkuc3Vic2NyaWJlKHJlc3VsdCA9PiB7XHJcbiAgICAgIGlmICh0aGlzLnBhcmFtQ29uZmlnLkRFQlVHX0ZMQUcpIGNvbnNvbGUubG9nKCdyZXN1bHQnLCByZXN1bHQpO1xyXG4gICAgfSk7XHJcbiAgICAvKmNvbnN0IHVwbG9hZFJlcSA9IG5ldyBIdHRwUmVxdWVzdCgnUE9TVCcsIGFwaVVSTCwgZm9ybWRhdGEsIHtcclxuICAgICAgIHJlcG9ydFByb2dyZXNzOiB0cnVlXHJcbiAgICB9KTtcclxuICAgIHRoaXMuaHR0cGNsaWVudC5yZXF1ZXN0KHVwbG9hZFJlcSkuc3Vic2NyaWJlKGV2ZW50ID0+IHtcclxuICAgICAgIGlmIChldmVudC50eXBlID09PSBIdHRwRXZlbnRUeXBlLlVwbG9hZFByb2dyZXNzKSB7XHJcbiAgICAgICAgICAgdGhpcy5wcm9ncmVzcyA9IE1hdGgucm91bmQoMTAwICogZXZlbnQubG9hZGVkIC8gZXZlbnQudG90YWwpO1xyXG4gICAgICAgfVxyXG4gICB9KTtcclxuICAgKi9cclxuXHJcbiB9XHJcblxyXG5cclxuICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4gICAgcHVibGljIGhhc0NoYW5nZXMoKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIEJvb2xlYW4odGhpcy5kZWxldGVkSXRlbXMubGVuZ3RoIHx8IHRoaXMudXBkYXRlZEl0ZW1zLmxlbmd0aCB8fCB0aGlzLmNyZWF0ZWRJdGVtcy5sZW5ndGgpO1xyXG4gICAgfVxyXG4gIHByaXZhdGUgYWRkVG9Cb2R5KE5ld1ZhbDphbnksIEJvZHk6YW55KSB7XHJcbiAgICAgICAgQm9keS5wdXNoKE5ld1ZhbCk7XHJcbiAgICAgICAvLyBpZiAodGhpcy5wYXJhbUNvbmZpZy5ERUJVR19GTEFHKSBjb25zb2xlLmxvZygnTmV3VmFsIDogSEYgUGxlYXNlJyAgKyBKU09OLnN0cmluZ2lmeShOZXdWYWwpKTtcclxuICAgICAgICByZXR1cm4gQm9keTtcclxuICAgICAgfVxyXG5cclxuXHJcblxyXG5cclxuXHJcbiAgcHVibGljIHNob3dOb3RpZmljYXRpb24oc3R5bGVOb3RlOiBhbnksIG1zZzogYW55KTogdm9pZCB7XHJcblxyXG4gICAgICBsZXQgaGlkZUFmdGVyID0gdGhpcy5oaWRlQWZ0ZXI7XHJcblxyXG4gICAgICBpZiAoc3R5bGVOb3RlID09IFwiZXJyb3JcIilcclxuICAgICAgICBoaWRlQWZ0ZXIgPSA1MDAwO1xyXG4gICAgICAgIHRoaXMubm90aWZpY2F0aW9uU2VydmljZS5zaG93KHtcclxuICAgICAgICAgICAgY29udGVudDogbXNnLFxyXG4gICAgICAgICAgICBjc3NDbGFzczogJ2J1dHRvbi1ub3RpZmljYXRpb24nLFxyXG4gICAgICAgICAgICBhbmltYXRpb246IHsgdHlwZTogJ2ZhZGUnLCBkdXJhdGlvbjogMjAwIH0sXHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiB7IGhvcml6b250YWw6ICdjZW50ZXInLCB2ZXJ0aWNhbDogJ2JvdHRvbScgfSxcclxuLy8gICAgICAgICAgICBzdGFja2luZzogeyBzdGFja2luZzogJ2Rvd24nIH0sXHJcbiAgICAgIHR5cGU6IHsgc3R5bGU6IHN0eWxlTm90ZSwgaWNvbjogdHJ1ZSB9LFxyXG4gICAgICAgICAgICAvL2Nsb3NhYmxlOiB0cnVlLFxyXG4gICAgICAgICAgICBoaWRlQWZ0ZXI6IGhpZGVBZnRlclxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gIHB1YmxpYyBnb1JlY29yZEFjdCh0YXJnZXQ6IGFueSwgb2JqZWN0OiBhbnkpOiB2b2lkIHtcclxuXHJcbiAgICAgICAgbGV0IHJlYztcclxuXHJcbiAgICBpZiAob2JqZWN0LnBhcmFtQ29uZmlnLkRFQlVHX0ZMQUcpIGNvbnNvbGUubG9nKHRhcmdldCk7XHJcbiAgICBpZiAob2JqZWN0LnBhcmFtQ29uZmlnLkRFQlVHX0ZMQUcpIGNvbnNvbGUubG9nKFwib2JqZWN0LkN1cnJlbnRSZWM6XCIgKyBvYmplY3QuQ3VycmVudFJlYyk7XHJcbiAgICBpZiAob2JqZWN0LnBhcmFtQ29uZmlnLkRFQlVHX0ZMQUcpIGNvbnNvbGUubG9nKG9iamVjdC5leGVjdXRlUXVlcnlyZXN1bHQpO1xyXG5cclxuICAgIGlmICh0YXJnZXQgPT0gXCJmaXJzdFwiKSB7XHJcbiAgICAgICAgICBvYmplY3QuQ3VycmVudFJlYyA9IDA7XHJcbiAgICAgICAgfVxyXG4gICAgZWxzZSBpZiAodGFyZ2V0ID09IFwibGFzdFwiKSB7XHJcbiAgICAgIG9iamVjdC5DdXJyZW50UmVjID0gb2JqZWN0LmV4ZWN1dGVRdWVyeXJlc3VsdC50b3RhbCAtIDE7XHJcbiAgICAgICAgfVxyXG4gICAgZWxzZSBpZiAodGFyZ2V0ID09IFwibmV4dFwiKSB7XHJcbiAgICAgICAgICBpZiAob2JqZWN0LkN1cnJlbnRSZWMgPCBvYmplY3QuZXhlY3V0ZVF1ZXJ5cmVzdWx0LnRvdGFsIC0gMSlcclxuICAgICAgICAgIG9iamVjdC5DdXJyZW50UmVjID0gb2JqZWN0LkN1cnJlbnRSZWMgKyAxO1xyXG4gICAgICAgIH1cclxuICAgIGVsc2UgaWYgKHRhcmdldCA9PSBcInByZXZcIikge1xyXG4gICAgICBpZiAob2JqZWN0LkN1cnJlbnRSZWMgPiAwKVxyXG4gICAgICAgICAgICBvYmplY3QuQ3VycmVudFJlYyA9IG9iamVjdC5DdXJyZW50UmVjIC0gMTtcclxuICAgICAgICB9XHJcbiAgICAgIGVsc2UgaWYgKHR5cGVvZiB0YXJnZXQgPT0gXCJudW1iZXJcIikge1xyXG4gICAgICAgICAgICAgIG9iamVjdC5DdXJyZW50UmVjID0gdGFyZ2V0O1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICByZWMgPSBvYmplY3QuZXhlY3V0ZVF1ZXJ5cmVzdWx0LmRhdGFbb2JqZWN0LkN1cnJlbnRSZWNdO1xyXG4gICAgaWYgKG9iamVjdC5wYXJhbUNvbmZpZy5ERUJVR19GTEFHKSBjb25zb2xlLmxvZyhcIi0tLS0tLXJlYzpcIiwgcmVjKTtcclxuICAgIGlmIChvYmplY3QucGFyYW1Db25maWcuREVCVUdfRkxBRykgY29uc29sZS5sb2cob2JqZWN0LmZvcm0uZ2V0UmF3VmFsdWUoKSk7XHJcbiAgICBpZiAodHlwZW9mIHJlYyAhPT0gXCJ1bmRlZmluZWRcIikge1xyXG4gICAgICAgICAgb2JqZWN0LmZvcm0ucGF0Y2hWYWx1ZShyZWMpO1xyXG4gICAgICAgICAgb2JqZWN0LmZvcm0ubWFya0FzUHJpc3RpbmUoKTtcclxuICAgICAgICAgIG9iamVjdC5mb3JtLm1hcmtBc1VudG91Y2hlZCgpO1xyXG5cclxuICAgICAgICAgIC8vb2JqZWN0LmZvcm0ucmVzZXQocmVjLCB7ZW1pdEV2ZW50OiBvYmplY3QuZW1pdEV2ZW50ICE9IG51bGwgPyBvYmplY3QuZW1pdEV2ZW50IDogdHJ1ZX0pO1xyXG4gICAgICAgICAgaWYgKG9iamVjdC5kaXNhYmxlRW1pdFJlYWRDb21wbGV0ZWQgIT0gdHJ1ZSlcclxuICAgICAgICAgICAgb2JqZWN0LnJlYWRDb21wbGV0ZWRPdXRwdXQuZW1pdChvYmplY3QuZm9ybS5nZXRSYXdWYWx1ZSgpKTtcclxuICAgICAgaWYgKG9iamVjdC5wYXJhbUNvbmZpZy5ERUJVR19GTEFHKSBjb25zb2xlLmxvZyhcIkFUVDpvYmplY3QuY2FsbEJhY2tGdW5jdGlvbjpcIiwgb2JqZWN0LmNhbGxCYWNrRnVuY3Rpb24pXHJcbiAgICAgIGlmICh0eXBlb2Ygb2JqZWN0LmNhbGxCYWNrRnVuY3Rpb24gIT09IFwidW5kZWZpbmVkXCIpXHJcbiAgICAgICAgICAgIG9iamVjdC5jYWxsQmFja0Z1bmN0aW9uKHJlYyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2VcclxuICAgICAgICAgIG9iamVjdC5jbGVhckNvbXBsZXRlZE91dHB1dC5lbWl0KFtdKTtcclxuXHJcbiAgICB9XHJcbiAgcHVibGljIGdvUmVjb3JkKHRhcmdldDogYW55LCBvYmplY3Q6YW55KTogdm9pZCB7XHJcbiAgICBpZiAodHlwZW9mIG9iamVjdC5leGVjdXRlUXVlcnlyZXN1bHQgIT0gXCJ1bmRlZmluZWRcIikge1xyXG4gICAgICAgICAgaWYgKHRoaXMucGFyYW1Db25maWcuREVCVUdfRkxBRykgY29uc29sZS5sb2cob2JqZWN0LmZvcm0uZGlydHkpO1xyXG4gICAgICBpZiAob2JqZWN0LmZvcm0uZGlydHkgPT0gdHJ1ZSkge1xyXG4gICAgICAgICAgICBsZXQgZGlhbG9nU3RydWMgPSB7XHJcbiAgICAgICAgICAgICAgbXNnOiB0aGlzLnNhdmVDaGFuZ2VzTXNnLFxyXG4gICAgICAgICAgdGl0bGU6IHRoaXMucGxlYXNlQ29uZmlybU1zZyxcclxuICAgICAgICAgICAgICBpbmZvOiB0YXJnZXQsXHJcbiAgICAgICAgICBvYmplY3Q6IG9iamVjdCxcclxuICAgICAgICAgIGFjdGlvbjogdGhpcy5ZZXNOb0FjdGlvbnMsXHJcbiAgICAgICAgICBjYWxsYmFjazogdGhpcy5nb1JlY29yZEFjdFxyXG4gICAgICAgIH07XHJcbiAgICAgICAgICAgICAgdGhpcy5zaG93Q29uZmlybWF0aW9uKGRpYWxvZ1N0cnVjKTtcclxuICAgICAgICAgIH1cclxuICAgICAgZWxzZSB7XHJcbiAgICAgICAgdGhpcy5nb1JlY29yZEFjdCh0YXJnZXQsIG9iamVjdCk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgfVxyXG5cclxuICBwdWJsaWMgc2hvd0NvbmZpcm1hdGlvbihkaWFsb2dTdHJ1YzphbnkpIHtcclxuICAgICAgICBsZXQgZGlhbG9nUmVzdWx0O1xyXG4gICAgICAgICAgY29uc3QgZGlhbG9nOiBEaWFsb2dSZWYgPSB0aGlzLmRpYWxvZ1NlcnZpY2Uub3Blbih7XHJcbiAgICAgICAgICAgICAgdGl0bGU6IGRpYWxvZ1N0cnVjLnRpdGxlLFxyXG4gICAgICAgICAgICAgIGNvbnRlbnQ6IGRpYWxvZ1N0cnVjLm1zZyxcclxuICAgICAgICAgICAgICBhY3Rpb25zOiBkaWFsb2dTdHJ1Yy5hY3Rpb24sXHJcbiAgICAgICAgICAgICAgd2lkdGg6IDQ1MCxcclxuICAgICAgICAgICAgICBoZWlnaHQ6IDIwMCxcclxuICAgICAgICAgICAgICBtaW5XaWR0aDogMjUwXHJcbiAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICBkaWFsb2cucmVzdWx0LnN1YnNjcmliZSgocmVzdWx0KSA9PiB7XHJcbiAgICAgICAgICAgICAgaWYgKHJlc3VsdCBpbnN0YW5jZW9mIERpYWxvZ0Nsb3NlUmVzdWx0KSB7XHJcbiAgICAgICAgICAgICAgICAgIGlmICh0aGlzLnBhcmFtQ29uZmlnLkRFQlVHX0ZMQUcpIGNvbnNvbGUubG9nKCdjbG9zZScpO1xyXG4gICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgIGlmICh0aGlzLnBhcmFtQ29uZmlnLkRFQlVHX0ZMQUcpIGNvbnNvbGUubG9nKCdhY3Rpb24nLCByZXN1bHQpO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICBkaWFsb2dSZXN1bHQgPSBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KHJlc3VsdCkpO1xyXG4gICAgICBpZiAoZGlhbG9nUmVzdWx0LnByaW1hcnkgPT0gdHJ1ZSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKGRpYWxvZ1N0cnVjLmhhc093blByb3BlcnR5KCdjYWxsYmFjaycpKSB7XHJcbiAgICAgICAgICAgICAgICAgIGRpYWxvZ1N0cnVjLmNhbGxiYWNrKGRpYWxvZ1N0cnVjLmluZm8sIGRpYWxvZ1N0cnVjLm9iamVjdCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC8qKioqKioqKioqKioqKioqIEZvcm0gZnVuY3Rpb25zICoqKioqKioqKioqKioqL1xyXG4gIHB1YmxpYyBleGVjdXRlUXVlcnlfZm9ybShmb3JtOiBhbnksIG9iamVjdDphbnkpIHtcclxuICAgICAgICBpZiAodGhpcy5wYXJhbUNvbmZpZy5ERUJVR19GTEFHKSBjb25zb2xlLmxvZyhcInN0YXItc2VydmljZXMgZXhlY3V0ZVF1ZXJ5X2Zvcm0gb2JqZWN0LmZvcm06XCIpO1xyXG4gICAgaWYgKHRoaXMucGFyYW1Db25maWcuREVCVUdfRkxBRykgY29uc29sZS5sb2coXCJvYmplY3QuaXNTZWFyY2g6XCIgKyBvYmplY3QuaXNTZWFyY2gpXHJcbiAgICAgICAgLy9pZiAodGhpcy5wYXJhbUNvbmZpZy5ERUJVR19GTEFHKSBjb25zb2xlLmxvZyhvYmplY3QuZm9ybS5nZXRSYXdWYWx1ZSgpKTtcclxuICAgICAgICAvL2lmICh0aGlzLnBhcmFtQ29uZmlnLkRFQlVHX0ZMQUcpIGNvbnNvbGUubG9nKGZvcm0udmFsdWUpO1xyXG4gICAgaWYgKHR5cGVvZiBvYmplY3QuZm9ybSAhPT0gXCJ1bmRlZmluZWRcIikge1xyXG4gICAgICBpZiAoKG9iamVjdC5mb3JtLmRpcnR5ID09IHRydWUpICYmIChvYmplY3QuaXNTZWFyY2ggIT0gdHJ1ZSkpIHtcclxuICAgICAgICAgICAgbGV0IGRpYWxvZ1N0cnVjID0ge1xyXG4gICAgICAgICAgICAgIG1zZzogdGhpcy5zYXZlQ2hhbmdlc01zZyxcclxuICAgICAgICAgIHRpdGxlOiB0aGlzLnBsZWFzZUNvbmZpcm1Nc2csXHJcbiAgICAgICAgICAgICAgaW5mbzogZm9ybSxcclxuICAgICAgICAgIG9iamVjdDogb2JqZWN0LFxyXG4gICAgICAgICAgYWN0aW9uOiB0aGlzLlllc05vQWN0aW9ucyxcclxuICAgICAgICAgIGNhbGxiYWNrOiB0aGlzLmV4ZWN1dGVRdWVyeUFjdF9mb3JtXHJcbiAgICAgICAgfTtcclxuICAgICAgICAgICAgICB0aGlzLnNob3dDb25maXJtYXRpb24oZGlhbG9nU3RydWMpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICBlbHNlIHtcclxuICAgICAgICB0aGlzLmV4ZWN1dGVRdWVyeUFjdF9mb3JtKGZvcm0sIG9iamVjdCk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgIHRoaXMuZXhlY3V0ZVF1ZXJ5QWN0X2Zvcm0oZm9ybSwgb2JqZWN0KTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAvLyByb3V0aW5lX25hbWUgZnJvbSA6IGh0dHBzOi8vd3d3LnRlbGVyaWsuY29tL2tlbmRvLWFuZ3VsYXItdWkvY29tcG9uZW50cy9kYXRlaW5wdXRzL2RhdGVwaWNrZXIvaW50ZWdyYXRpb24td2l0aC1qc29uL1xyXG5cclxuICBwdWJsaWMgcGFyc2VUb0RhdGUoanNvbjogYW55KSB7XHJcbiAgICAvL2lmICh0aGlzLnBhcmFtQ29uZmlnLkRFQlVHX0ZMQUcpIGNvbnNvbGUubG9nKFwianNvbjppbjpcIiwganNvbilcclxuICAgICAgICBPYmplY3Qua2V5cyhqc29uKS5tYXAoa2V5ID0+IHtcclxuICAgICAgICAgIGxldCBWYWwxID0ganNvbltrZXldO1xyXG4gICAgICAvL2lmICh0aGlzLnBhcmFtQ29uZmlnLkRFQlVHX0ZMQUcpIGNvbnNvbGUubG9nKFwia2V5OlwiLCBrZXksIFZhbDEsIHR5cGVvZiBWYWwxKTtcclxuICAgICAgICAgIC8vbGV0IG4gPSBrZXkudG9VcHBlckNhc2UoKS5zZWFyY2goXCJEQVRFXCIpO1xyXG4gICAgICAgICAgLy9pZiAobiAhPSAtMSl7XHJcbiAgICAgIGlmICh0eXBlb2YgVmFsMSAhPSBcIm51bWJlclwiKSB7ICAgLy9pdCBpcyBub3QgYSBudW1iZXIsIGNoZWNrIG1vcmVcclxuICAgICAgICBpZiAoKFZhbDEgIT0gbnVsbCkgJiYgKFZhbDEubGVuZ3RoID4gNykpIHtcclxuICAgICAgICAgICAgICBjb25zdCBkYXRlID0gbmV3IERhdGUoVmFsMSk7XHJcbiAgICAgICAgICAgICAgbGV0IGNoZWNrWVlZWSA9IGlzTmFOKHBhcnNlSW50KFZhbDEuc3Vic3RyaW5nKDAsIDQpKSk7XHJcbiAgICAgICAgICAgICAgbGV0IHRpbWVWYWwgPSBkYXRlLmdldFRpbWUoKTtcclxuICAgICAgICAgIGlmICh0aGlzLnBhcmFtQ29uZmlnLkRFQlVHX0ZMQUcpIGNvbnNvbGUubG9nKFwidGltZVZhbDpcIiwgdGltZVZhbCwgaXNOYU4odGltZVZhbCkpO1xyXG4gICAgICAgICAgICAgIGlmICghaXNOYU4odGltZVZhbCkgJiYgKHRpbWVWYWwgPiAwKSAmJiAhY2hlY2tZWVlZKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5wYXJhbUNvbmZpZy5ERUJVR19GTEFHKSBjb25zb2xlLmxvZyhcIml0IGlzIGEgZGF0ZVwiKTtcclxuICAgICAgICAgICAgICAgIC8vaWYgKHRoaXMucGFyYW1Db25maWcuREVCVUdfRkxBRykgY29uc29sZS5sb2coXCJrZXk6XCIra2V5ICsgXCI6XCIgKyBkYXRlLmdldFRpbWUoKSk7XHJcbiAgICAgICAgICAgICAgICBqc29uW2tleV0gPSBkYXRlO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgLy9pZiAodGhpcy5wYXJhbUNvbmZpZy5ERUJVR19GTEFHKSBjb25zb2xlLmxvZyhcImpzb246b3V0OlwiLCBqc29uKVxyXG4gICAgICAgIHJldHVybiBqc29uO1xyXG4gICAgICB9XHJcbiAgcHVibGljIGRhdGVZWVlZTU1ERChvYmplY3Q6YW55LCBqc29uOiBhbnkpIHtcclxuICAgIGlmICh0aGlzLnBhcmFtQ29uZmlnLkRFQlVHX0ZMQUcpIGNvbnNvbGUubG9nKFwianNvbjpcIiwganNvbilcclxuICAgICAgICAgT2JqZWN0LmtleXMoanNvbikubWFwKGtleSA9PiB7XHJcbiAgICAgICAgICAgbGV0IG4gPSBrZXkudG9VcHBlckNhc2UoKS5zZWFyY2goXCJfREFURVwiKTtcclxuICAgICAgaWYgKG4gIT0gLTEpIHtcclxuICAgICAgICAgICAgbGV0IGRhdGVPcmcgPSBqc29uW2tleV07XHJcbiAgICAgICAgICAgICBsZXQgZGF0ZSA9IG5ldyBEYXRlKGpzb25ba2V5XSk7XHJcbiAgICAgICAgICAgICAvL2RhdGUgPSB0b0xvY2FsRGF0ZShkYXRlKTtcclxuICAgICAgICAgICAgIGxldCB0aW1lVmFsID0gZGF0ZS5nZXRUaW1lKCk7XHJcbiAgICAgICAgICAgICBpZiAoIWlzTmFOKHRpbWVWYWwpICYmICh0aW1lVmFsID4gMCkpIHtcclxuICAgICAgICAgICAgICAgLy9pZiAodGhpcy5wYXJhbUNvbmZpZy5ERUJVR19GTEFHKSBjb25zb2xlLmxvZyhcImtleTpcIitrZXkgKyBcIjpcIiArIGRhdGUuZ2V0VGltZSgpKTtcclxuICAgICAgICAgICAgICAgLy9sZXQgYXJyYXkgPSBkYXRlT3JnLnNwbGl0KFwiVFwiKVxyXG4gICAgICAgICAgZGF0ZU9yZyA9IGZvcm1hdERhdGUoZGF0ZU9yZywgb2JqZWN0LnBhcmFtQ29uZmlnLkRhdGVGb3JtYXQsIG9iamVjdC5wYXJhbUNvbmZpZy5kYXRlTG9jYWxlKVxyXG4gICAgICAgICAgICAgICBqc29uW2tleV0gPSBkYXRlT3JnO1xyXG4gICAgICAgICAgICAgfVxyXG4gICAgICAgICAgIH1cclxuICAgICAgICAgfSk7XHJcbiAgICAgICAgIHJldHVybiBqc29uO1xyXG4gICAgICAgfVxyXG4gcHVibGljIHNtYXJ0U3RyaW5nUHJvY2Vzc29yKGlucHV0U3RyaW5nOnN0cmluZywganNvbkRhdGE6eyBba2V5OiBzdHJpbmddOiBhbnkgfSkge1xyXG4gICAgZnVuY3Rpb24gcmVwbGFjZVZhcmlhYmxlc0luU3RyaW5nKGlucHV0U3RyaW5nOnN0cmluZywganNvbkRhdGE6eyBba2V5OiBzdHJpbmddOiBhbnkgfSkge1xyXG4gICAgICAgIC8vIENoZWNrIGlmIHN0cmluZyBjb250YWlucyBhbnkgdmFyaWFibGVzIChzdGFydHMgd2l0aCA6KVxyXG4gICAgICAgIGxldCB2YXJpYWJsZVBhdHRlcm46IFJlZ0V4cCA9IC86KFthLXpBLVpfXVthLXpBLVowLTlfXSopL2c7XHJcbiAgICAgICAgbGV0IGhhc1ZhcmlhYmxlczpib29sZWFuID0gdmFyaWFibGVQYXR0ZXJuLnRlc3QoaW5wdXRTdHJpbmcpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIC8vIElmIG5vIHZhcmlhYmxlcyBmb3VuZCwgcmV0dXJuIG9yaWdpbmFsIHN0cmluZ1xyXG4gICAgICAgIGlmICghaGFzVmFyaWFibGVzKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICBvcmlnaW5hbDogaW5wdXRTdHJpbmcsXHJcbiAgICAgICAgICAgICAgICByZXN1bHQ6IGlucHV0U3RyaW5nLFxyXG4gICAgICAgICAgICAgICAgcmVwbGFjZWQ6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgbWVzc2FnZTogXCJObyB2YXJpYWJsZXMgZm91bmQgLSByZXR1cm5pbmcgb3JpZ2luYWwgc3RyaW5nXCIsXHJcbiAgICAgICAgICAgICAgICB2YXJpYWJsZXNGb3VuZDogW11cclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8gUmVzZXQgcmVnZXggbGFzdEluZGV4IHNpbmNlIHdlIHVzZWQgdGVzdCgpIGFib3ZlXHJcbiAgICAgICAgdmFyaWFibGVQYXR0ZXJuLmxhc3RJbmRleCA9IDA7XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8gRmluZCBhbGwgdW5pcXVlIHZhcmlhYmxlc1xyXG4gICAgICAgIGxldCB2YXJpYWJsZXMgPSBuZXcgU2V0PHN0cmluZz4oKTtcclxuICAgICAgICBsZXQgbWF0Y2g7XHJcbiAgICAgICAgd2hpbGUgKChtYXRjaCA9IHZhcmlhYmxlUGF0dGVybi5leGVjKGlucHV0U3RyaW5nKSkgIT09IG51bGwpIHtcclxuICAgICAgICAgICAgdmFyaWFibGVzLmFkZChtYXRjaFsxXSk7IC8vIEFkZCB2YXJpYWJsZSBuYW1lIHdpdGhvdXQgY29sb25cclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8gUmVwbGFjZSB2YXJpYWJsZXMgd2l0aCB2YWx1ZXNcclxuICAgICAgICBsZXQgcmVzdWx0U3RyaW5nID0gaW5wdXRTdHJpbmc7XHJcbiAgICAgICAgbGV0IHJlcGxhY2VtZW50cyA9IHt9O1xyXG4gICAgICAgIGxldCBtaXNzaW5nVmFyaWFibGVzID0gW107XHJcbiAgICAgICAgXHJcbiAgICAgICAgdmFyaWFibGVzLmZvckVhY2godmFyaWFibGVOYW1lID0+IHtcclxuICAgICAgICAgICAgLy8gQ29udmVydCB2YXJpYWJsZSBuYW1lIHRvIHVwcGVyY2FzZSB0byBtYXRjaCBKU09OIGtleXMgKGNhc2UtaW5zZW5zaXRpdmUpXHJcbiAgICAgICAgICAgIGxldCBrZXkgPSBPYmplY3Qua2V5cyhqc29uRGF0YSkuZmluZChcclxuICAgICAgICAgICAgICAgIGsgPT4gay50b1VwcGVyQ2FzZSgpID09PSB2YXJpYWJsZU5hbWUudG9VcHBlckNhc2UoKVxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIlByb2Nlc3NpbmcgdmFyaWFibGU6IFwiICwgdmFyaWFibGVOYW1lLCBcIm1hdGNoZWQga2V5OlwiLCBrZXkgLCBcImpzb25EYXRhOlwiLCBqc29uRGF0YSk7XHJcbiAgICAgICAgICAgIGlmIChrZXkgIT09IHVuZGVmaW5lZCAmJiBqc29uRGF0YVtrZXldICE9PSB1bmRlZmluZWQgJiYganNvbkRhdGFba2V5XSAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgbGV0IHZhbHVlID0ganNvbkRhdGFba2V5XTtcclxuICAgICAgICAgICAgICAgIC8vIEZvcm1hdCB0aGUgdmFsdWUgcHJvcGVybHlcclxuICAgICAgICAgICAgICAgIGxldCBmb3JtYXR0ZWRWYWx1ZTtcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycpIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyBFc2NhcGUgc2luZ2xlIHF1b3RlcyBpbiBzdHJpbmdzXHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGVzY2FwZWRWYWx1ZSA9IHZhbHVlLnJlcGxhY2UoLycvZywgXCInJ1wiKTtcclxuICAgICAgICAgICAgICAgICAgICBmb3JtYXR0ZWRWYWx1ZSA9IGAnJHtlc2NhcGVkVmFsdWV9J2A7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ251bWJlcicpIHtcclxuICAgICAgICAgICAgICAgICAgICBmb3JtYXR0ZWRWYWx1ZSA9IHZhbHVlLnRvU3RyaW5nKCk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHZhbHVlIGluc3RhbmNlb2YgRGF0ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIEZvcm1hdCBkYXRlIGFzIFNRTCBkYXRlIHN0cmluZ1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCB5ZWFyID0gdmFsdWUuZ2V0RnVsbFllYXIoKTtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgbW9udGggPSBTdHJpbmcodmFsdWUuZ2V0TW9udGgoKSArIDEpLnBhZFN0YXJ0KDIsICcwJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGRheSA9IFN0cmluZyh2YWx1ZS5nZXREYXRlKCkpLnBhZFN0YXJ0KDIsICcwJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9ybWF0dGVkVmFsdWUgPSBgJyR7eWVhcn0tJHttb250aH0tJHtkYXl9J2A7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ2Jvb2xlYW4nKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9ybWF0dGVkVmFsdWUgPSB2YWx1ZSA/ICcxJyA6ICcwJztcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gRm9yIG90aGVyIHR5cGVzLCBjb252ZXJ0IHRvIHN0cmluZyBhbmQgcXVvdGVcclxuICAgICAgICAgICAgICAgICAgICBmb3JtYXR0ZWRWYWx1ZSA9IGAnJHtTdHJpbmcodmFsdWUpfSdgO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAvLyBSZXBsYWNlIEFMTCBvY2N1cnJlbmNlcyBvZiB0aGlzIHZhcmlhYmxlXHJcbiAgICAgICAgICAgICAgICBsZXQgdmFyaWFibGVSZWdleCA9IG5ldyBSZWdFeHAoYDoke3ZhcmlhYmxlTmFtZX1cXFxcYmAsICdnJyk7XHJcbiAgICAgICAgICAgICAgICByZXN1bHRTdHJpbmcgPSByZXN1bHRTdHJpbmcucmVwbGFjZSh2YXJpYWJsZVJlZ2V4LCBmb3JtYXR0ZWRWYWx1ZSk7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIHJlcGxhY2VtZW50c1t2YXJpYWJsZU5hbWVdID0ge1xyXG4gICAgICAgICAgICAgICAgICAgIG9yaWdpbmFsOiBgOiR7dmFyaWFibGVOYW1lfWAsXHJcbiAgICAgICAgICAgICAgICAgICAgcmVwbGFjZWRXaXRoOiBmb3JtYXR0ZWRWYWx1ZSxcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogdmFsdWUsXHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogdHlwZW9mIHZhbHVlXHJcbiAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgbWlzc2luZ1ZhcmlhYmxlcy5wdXNoKHZhcmlhYmxlTmFtZSk7XHJcbiAgICAgICAgICAgICAgICAvLyBLZWVwIHRoZSB2YXJpYWJsZSBhcyBpcyBpZiBub3QgZm91bmRcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIG9yaWdpbmFsOiBpbnB1dFN0cmluZyxcclxuICAgICAgICAgICAgcmVzdWx0OiByZXN1bHRTdHJpbmcsXHJcbiAgICAgICAgICAgIHJlcGxhY2VkOiB0cnVlLFxyXG4gICAgICAgICAgICByZXBsYWNlbWVudHM6IHJlcGxhY2VtZW50cyxcclxuICAgICAgICAgICAgdmFyaWFibGVzRm91bmQ6IEFycmF5LmZyb20odmFyaWFibGVzKSxcclxuICAgICAgICAgICAgbWlzc2luZ1ZhcmlhYmxlczogbWlzc2luZ1ZhcmlhYmxlcyxcclxuICAgICAgICAgICAgbWVzc2FnZTogbWlzc2luZ1ZhcmlhYmxlcy5sZW5ndGggPiAwIFxyXG4gICAgICAgICAgICAgICAgPyBgU29tZSB2YXJpYWJsZXMgbm90IGZvdW5kOiAke21pc3NpbmdWYXJpYWJsZXMuam9pbignLCAnKX1gXHJcbiAgICAgICAgICAgICAgICA6ICdBbGwgdmFyaWFibGVzIHJlcGxhY2VkIHN1Y2Nlc3NmdWxseSdcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG4gICAgLy8gRmlyc3QgY2hlY2sgaWYgaXQgbG9va3MgbGlrZSBhIFNRTCBXSEVSRSBjbGF1c2Ugd2l0aCB2YXJpYWJsZXNcclxuICAgICAgbGV0IGhhc1doZXJlQ2xhdXNlID0gaW5wdXRTdHJpbmcudG9VcHBlckNhc2UoKS5pbmNsdWRlcygnX1dIRVJFPScpO1xyXG4gICAgICBsZXQgaGFzVmFyaWFibGVzID0gLzpbYS16QS1aX11bYS16QS1aMC05X10qLy50ZXN0KGlucHV0U3RyaW5nKTtcclxuICAgICAgXHJcbiAgICAgIC8vIElmIGl0IGhhcyBXSEVSRSBidXQgbm8gdmFyaWFibGVzLCBpdCBtaWdodCBiZSBjb21wbGV0ZSBhbHJlYWR5XHJcbiAgICAgIGlmIChoYXNXaGVyZUNsYXVzZSAmJiAhaGFzVmFyaWFibGVzKSB7XHJcbiAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgIG9yaWdpbmFsOiBpbnB1dFN0cmluZyxcclxuICAgICAgICAgICAgICByZXN1bHQ6IGlucHV0U3RyaW5nLFxyXG4gICAgICAgICAgICAgIG5lZWRzUmVwbGFjZW1lbnQ6IGZhbHNlLFxyXG4gICAgICAgICAgICAgIHR5cGU6ICdjb21wbGV0ZV93aGVyZV9jbGF1c2UnLFxyXG4gICAgICAgICAgICAgIG1lc3NhZ2U6ICdXSEVSRSBjbGF1c2UgYXBwZWFycyBjb21wbGV0ZSAtIG5vIHZhcmlhYmxlcyB0byByZXBsYWNlJ1xyXG4gICAgICAgICAgfTtcclxuICAgICAgfVxyXG4gICAgICBcclxuICAgICAgLy8gT3RoZXJ3aXNlLCB0cnkgdG8gcmVwbGFjZSB2YXJpYWJsZXNcclxuICAgICAgbGV0IHJlcGxhY2VtZW50UmVzdWx0ID0gcmVwbGFjZVZhcmlhYmxlc0luU3RyaW5nKGlucHV0U3RyaW5nLCBqc29uRGF0YSk7XHJcbiAgICAgIFxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgLi4ucmVwbGFjZW1lbnRSZXN1bHQsXHJcbiAgICAgICAgICBuZWVkc1JlcGxhY2VtZW50OiByZXBsYWNlbWVudFJlc3VsdC5yZXBsYWNlZCxcclxuICAgICAgICAgIHR5cGU6IHJlcGxhY2VtZW50UmVzdWx0LnJlcGxhY2VkID8gJ3dpdGhfdmFyaWFibGVzJyA6ICdub192YXJpYWJsZXMnXHJcbiAgICAgIH07XHJcbiAgfVxyXG4gIHB1YmxpYyBwcm9jZXNzZm9ybWF0dGVkV2hlcmUob2JqZWN0LCBmb3JtYXR0ZWRXaGVyZSl7XHJcbiAgICBpZiAodGhpcy5zZXNzaW9uUGFyYW1zWydOQVZJR0FURV9EQVRBJ10gIT0gXCJ1bmRlZmluZWRcIil7XHJcbiAgICAgIHRoaXMuc2Vzc2lvblBhcmFtc1snTkFWSUdBVEVfREFUQSddID0ge307XHJcbiAgICAgIGxldCBuYXZEYXRhID0ge31cclxuICAgICAgZm9yIChsZXQgaSA9MCA7IGk8IG9iamVjdC5tYXN0ZXJLZXlOYW1lQXJyLmxlbmd0aDtpKyspe1xyXG4gICAgICAgICAgbmF2RGF0YVtvYmplY3QubWFzdGVyS2V5TmFtZUFycltpXV0gPSBvYmplY3QubWFzdGVyS2V5QXJyW2ldXHJcbiAgICAgIH1cclxuICAgICAgdGhpcy5zZXNzaW9uUGFyYW1zWydOQVZJR0FURV9EQVRBJ10gPSBuYXZEYXRhO1xyXG4gICAgfVxyXG4gICAgbGV0IHJlc3VsdCA9IHRoaXMuc21hcnRTdHJpbmdQcm9jZXNzb3IoZm9ybWF0dGVkV2hlcmUsIHRoaXMuc2Vzc2lvblBhcmFtc1snTkFWSUdBVEVfREFUQSddICk7XHJcbiAgICAgIGlmIChyZXN1bHQubmVlZHNSZXBsYWNlbWVudCA9PSB0cnVlICl7XHJcbiAgICAgICAgaWYgKHJlc3VsdC5tZXNzYWdlLnN0YXJ0c1dpdGggKFwiU29tZSB2YXJpYWJsZXMgbm90IGZvdW5kXCIpIClcclxuICAgICAgICAgIGZvcm1hdHRlZFdoZXJlID0gXCJcIjtcclxuICAgICAgICBlbHNlXHJcbiAgICAgICAgICBmb3JtYXR0ZWRXaGVyZSA9IHJlc3VsdC5yZXN1bHQ7XHJcbiAgICAgIH1cclxuICAgICAgY29uc29sZS5sb2cgKFwicHJvY2Vzc2Zvcm1hdHRlZFdoZXJlOnRoaXMuV2hlcmVDbGF1c2VcIiwgcmVzdWx0LCBmb3JtYXR0ZWRXaGVyZSApO1xyXG4gICAgdGhpcy5zZXNzaW9uUGFyYW1zWydOQVZJR0FURV9EQVRBJ10gPSB7fTtcclxuICAgIHJldHVybiBmb3JtYXR0ZWRXaGVyZTtcclxuICB9XHJcbiAgcHVibGljIHN0cmluZ2lmeU11bHRpU2VsZWN0RmllbGRzKG9iamVjdCxmb3JtKXtcclxuICAgIGxldCBmb3JtR3JvdXAgPSBmb3JtLnZhbHVlO1xyXG4gICAgaWYgKHR5cGVvZiBvYmplY3QubXVsdGlzZWxlY3RfYXJyICE9PSBcInVuZGVmaW5lZFwiKXtcclxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBvYmplY3QubXVsdGlzZWxlY3RfYXJyLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICBmb3JtR3JvdXBbb2JqZWN0Lm11bHRpc2VsZWN0X2FycltpXV0gPSBKU09OLnN0cmluZ2lmeShmb3JtR3JvdXBbb2JqZWN0Lm11bHRpc2VsZWN0X2FycltpXV0pO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBpZiAodHlwZW9mIG9iamVjdC5tdWx0aXNlbGVjdF90cmVlX2FyciAhPT0gXCJ1bmRlZmluZWRcIil7XHJcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgb2JqZWN0Lm11bHRpc2VsZWN0X3RyZWVfYXJyLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICBmb3JtR3JvdXBbb2JqZWN0Lm11bHRpc2VsZWN0X3RyZWVfYXJyW2ldXSA9IEpTT04uc3RyaW5naWZ5KGZvcm1Hcm91cFtvYmplY3QubXVsdGlzZWxlY3RfdHJlZV9hcnJbaV1dKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIGZvcm07XHJcbiAgIH1cclxuICBwdWJsaWMgZml4TXVsdGlTZWxlY3RGaWVsZHNfcmVzdWx0KG9iamVjdCwgcmVzdWx0KXtcclxuICAgIGlmICh0eXBlb2Ygb2JqZWN0Lm11bHRpc2VsZWN0X2FyciAhPT0gXCJ1bmRlZmluZWRcIil7XHJcbiAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG9iamVjdC5tdWx0aXNlbGVjdF9hcnIubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IHJlc3VsdC5kYXRhLmxlbmd0aDsgaisrKSB7XHJcbiAgICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgIHJlc3VsdC5kYXRhW2pdW29iamVjdC5tdWx0aXNlbGVjdF9hcnJbaV1dID0gSlNPTi5wYXJzZShyZXN1bHQuZGF0YVtqXVtvYmplY3QubXVsdGlzZWxlY3RfYXJyW2ldXSk7XHJcbiAgICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgaWYgKHR5cGVvZiBvYmplY3QubXVsdGlzZWxlY3RfdHJlZV9hcnIgIT09IFwidW5kZWZpbmVkXCIpe1xyXG4gICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBvYmplY3QubXVsdGlzZWxlY3RfdHJlZV9hcnIubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IHJlc3VsdC5kYXRhLmxlbmd0aDsgaisrKSB7XHJcbiAgICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgIHJlc3VsdC5kYXRhW2pdW29iamVjdC5tdWx0aXNlbGVjdF90cmVlX2FycltpXV0gPSBKU09OLnBhcnNlKHJlc3VsdC5kYXRhW2pdW29iamVjdC5tdWx0aXNlbGVjdF90cmVlX2FycltpXV0pO1xyXG4gICAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgfVxyXG4gICBwdWJsaWMgZml4TXVsdGlTZWxlY3RGaWVsZHNfTmV3VmFsKG9iamVjdCwgTmV3VmFsKXtcclxuICAgICBpZiAodHlwZW9mIG9iamVjdC5tdWx0aXNlbGVjdF9hcnIgIT09IFwidW5kZWZpbmVkXCIpe1xyXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG9iamVjdC5tdWx0aXNlbGVjdF9hcnIubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBpZiAoTmV3VmFsW29iamVjdC5tdWx0aXNlbGVjdF9hcnJbaV1dICE9IG51bGwgJiYgTmV3VmFsW29iamVjdC5tdWx0aXNlbGVjdF9hcnJbaV1dLmxlbmd0aCA+IDApe1xyXG4gICAgICAgICAgTmV3VmFsW29iamVjdC5tdWx0aXNlbGVjdF9hcnJbaV1dID0gSlNPTi5wYXJzZShOZXdWYWxbb2JqZWN0Lm11bHRpc2VsZWN0X2FycltpXV0pO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgaWYgKHR5cGVvZiBvYmplY3QubXVsdGlzZWxlY3RfYXJyICE9PSBcInVuZGVmaW5lZFwiKXtcclxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBvYmplY3QubXVsdGlzZWxlY3RfdHJlZV9hcnIubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBpZiAoTmV3VmFsW29iamVjdC5tdWx0aXNlbGVjdF90cmVlX2FycltpXV0gIT0gbnVsbCAmJiBOZXdWYWxbb2JqZWN0Lm11bHRpc2VsZWN0X3RyZWVfYXJyW2ldXS5sZW5ndGggPiAwKXtcclxuICAgICAgICAgIE5ld1ZhbFtvYmplY3QubXVsdGlzZWxlY3RfdHJlZV9hcnJbaV1dID0gSlNPTi5wYXJzZShOZXdWYWxbb2JqZWN0Lm11bHRpc2VsZWN0X3RyZWVfYXJyW2ldXSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgIH1cclxuICAgIHB1YmxpYyB0cmFuc2Zvcm1Gb3JUcmVlVmlldyhkYXRhKTogYW55W10ge1xyXG4gICAgY29uc3QgZ3JvdXBNYXAgPSBuZXcgTWFwPHN0cmluZywgYW55PigpO1xyXG5cclxuICAgIGRhdGEuZm9yRWFjaChpdGVtID0+IHtcclxuICAgICAgY29uc3QgZ3JvdXBLZXkgPSBpdGVtLkNPREVURVhUX0xBTkc7XHJcblxyXG4gICAgICBpZiAoIWdyb3VwTWFwLmhhcyhncm91cEtleSkpIHtcclxuICAgICAgICBncm91cE1hcC5zZXQoZ3JvdXBLZXksIHtcclxuICAgICAgICAgIHRleHQ6IGdyb3VwS2V5LFxyXG4gICAgICAgICAgaWQ6IGdyb3VwS2V5LCAgLy8gQWRkZWQgaWQgZmllbGRcclxuICAgICAgICAgIGl0ZW1zOiBbXVxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBjb25zdCBncm91cCA9IGdyb3VwTWFwLmdldChncm91cEtleSk7XHJcbiAgICAgIGdyb3VwLml0ZW1zLnB1c2goe1xyXG4gICAgICAgIHRleHQ6IGl0ZW0uQ09ERSxcclxuICAgICAgICBpZDogaXRlbS5DT0RFICAvLyBDaGFuZ2VkIGZyb20gJ2NvZGUnIHRvICdpZCdcclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxuXHJcbiAgICByZXR1cm4gQXJyYXkuZnJvbShncm91cE1hcC52YWx1ZXMoKSk7XHJcbiAgfVxyXG4gICBwdWJsaWMgY2FsbGx0cmFuc2Zvcm1Gb3JUcmVlVmlldyhvYmplY3Qpe1xyXG4gICAgLy9jb25zb2xlLmxvZyAoXCJ0aGlzLmxvb2t1cEFyckRlZjpvYmplY3QubXVsdGlzZWxlY3RfdHJlZV9hcnI6XCIsIG9iamVjdC5tdWx0aXNlbGVjdF90cmVlX2FycilcclxuICAgIGlmICggdHlwZW9mIG9iamVjdC5tdWx0aXNlbGVjdF90cmVlX2FyciAhPSBcInVuZGVmaW5lZFwiKVxyXG4gICAge1xyXG4gICAgICBmb3IgKGxldCBpID0wOyBpIDwgb2JqZWN0Lm11bHRpc2VsZWN0X3RyZWVfYXJyLmxlbmd0aDsgaSsrKXtcclxuICAgICAgICBsZXQgY29sTmFtZSA9IG9iamVjdC5tdWx0aXNlbGVjdF90cmVlX2FycltpXTtcclxuICAgICAgICBsZXQga3BOYW1lID0gXCJsa3BBcnJcIiArIGNvbE5hbWU7XHJcbiAgICAgICAgXHJcbiAgICAgICAgbGV0IGxrcFZhbCA9IG9iamVjdFtrcE5hbWVdO1xyXG4gICAgICAgIC8vY29uc29sZS5sb2cgKFwidGhpcy5sb29rdXBBcnJEZWY6a3BOYW1lOlwiLCBrcE5hbWUsIGxrcFZhbClcclxuICAgICAgICBsa3BWYWwgPSB0aGlzLnRyYW5zZm9ybUZvclRyZWVWaWV3KGxrcFZhbCk7XHJcbiAgICAgICAgLy9jb25zb2xlLmxvZyAoXCJ0aGlzLmxvb2t1cEFyckRlZjprcE5hbWU6XCIsIGtwTmFtZSwgbGtwVmFsKVxyXG4gICAgICAgIG9iamVjdFtrcE5hbWVdID0gbGtwVmFsO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZXhlY3V0ZVF1ZXJ5QWN0X2Zvcm0oZm9ybTogYW55LCBvYmplY3Q6YW55KSB7XHJcbiAgICBjb25zb2xlLmxvZyhcImV4ZWN1dGVRdWVyeUFjdF9mb3JtOmZvcm06XCIsZm9ybSwgXCJvYmplY3QuaXNDaGlsZCA6XCIsb2JqZWN0LmlzQ2hpbGQsIFwib2JqZWN0LmlzU2VhcmNoOlwiLG9iamVjdC5pc1NlYXJjaCApXHJcbiAgICBpZiAodHlwZW9mIGZvcm0gPT09IFwidW5kZWZpbmVkXCIpXHJcbiAgICAgICAgICByZXR1cm47XHJcblxyXG4gICAgICAgIGxldCBwYXJhbUNvbmZpZyA9IHtcclxuICAgICAgICAgIFwiTmFtZVwiOiBcImNoaWxkUmVjb3Jkc1wiLFxyXG4gICAgICAgICAgXCJWYWxcIjogMFxyXG4gICAgICAgIH07XHJcbiAgICAgICAgc2V0UGFyYW1Db25maWcocGFyYW1Db25maWcpO1xyXG4gICAgaWYgKG9iamVjdC5pc0NoaWxkID09IHRydWUpIHtcclxuICAgICAgaWYgKG9iamVjdC5pc1NlYXJjaCAhPSB0cnVlKSB7XHJcbiAgICAgICAgLy9vYmplY3QuZm9ybS5yZXNldCgpO1xyXG4gICAgICAgIG9iamVjdC5mb3JtLnJlc2V0KG9iamVjdC5mb3JtSW5pdGlhbFZhbHVlcyk7XHJcblxyXG4gICAgICAgIGlmICgodHlwZW9mIG9iamVjdC5tYXN0ZXJLZXlOYW1lQXJyICE9IFwidW5kZWZpbmVkXCIpICYmIChvYmplY3QubWFzdGVyS2V5TmFtZUFyci5sZW5ndGggIT0gMCkpIHtcclxuICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgb2JqZWN0Lm1hc3RlcktleU5hbWVBcnIubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIG9iamVjdC5mb3JtSW5pdGlhbFZhbHVlc1tvYmplY3QubWFzdGVyS2V5TmFtZUFycltpXV0gPSBvYmplY3QubWFzdGVyS2V5QXJyW2ldO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgIG9iamVjdC5mb3JtSW5pdGlhbFZhbHVlc1tvYmplY3QubWFzdGVyS2V5TmFtZV0gPSBvYmplY3QubWFzdGVyS2V5O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAvL29iamVjdC5mb3JtSW5pdGlhbFZhbHVlc1tvYmplY3QubWFzdGVyS2V5TmFtZV0gPSBvYmplY3QubWFzdGVyS2V5O1xyXG4gICAgICAgIG9iamVjdC5mb3JtLnJlc2V0KG9iamVjdC5mb3JtSW5pdGlhbFZhbHVlcywgeyBlbWl0RXZlbnQ6IG9iamVjdC5lbWl0RXZlbnQgIT0gbnVsbCA/IG9iamVjdC5lbWl0RXZlbnQgOiB0cnVlIH0pO1xyXG4gICAgICAgIGlmIChvYmplY3QucGFyYW1Db25maWcuREVCVUdfRkxBRykgY29uc29sZS5sb2coXCJvYmplY3QubWFzdGVyS2V5TmFtZTpcIiArIG9iamVjdC5tYXN0ZXJLZXlOYW1lKTtcclxuICAgICAgICAgICAgb2JqZWN0LmlzU2VhcmNoID0gdHJ1ZTtcclxuICAgICAgICAgICAgZm9ybSA9IG9iamVjdC5mb3JtLmdldFJhd1ZhbHVlKCk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsZXQgUGFnZSA9IFwiJl9xdWVyeT1cIiArIG9iamVjdC5nZXRDTUQ7XHJcbiAgICBpZiAob2JqZWN0LnBhcmFtQ29uZmlnLkRFQlVHX0ZMQUcpIGNvbnNvbGUubG9nKFwib2JqZWN0LmlzU2VhcmNoOlwiICsgb2JqZWN0LmlzU2VhcmNoKVxyXG4gICAgaWYgKG9iamVjdC5pc1NlYXJjaCA9PSB0cnVlKSB7XHJcbiAgICAgICAgICBpZiAob2JqZWN0LnBhcmFtQ29uZmlnLkRFQlVHX0ZMQUcpIGNvbnNvbGUubG9nKGZvcm0udmFsdWUpO1xyXG4gICAgbGV0IE5ld1ZhbCA9IGZvcm07XHJcbiAgICAgICAgICAgIG9iamVjdC5pc1NlYXJjaCA9IGZhbHNlO1xyXG4gICAgaWYgKCh0eXBlb2Ygb2JqZWN0LmZvcm1hdHRlZFdoZXJlID09PSBcInVuZGVmaW5lZFwiKSB8fCAob2JqZWN0LmZvcm1hdHRlZFdoZXJlID09IG51bGwpKSB7XHJcbiAgICAgICAgICAgICAgUGFnZSA9IFBhZ2UgKyBvYmplY3Quc3RhclNlcnZpY2VzLmZvcm1hdFdoZXJlKE5ld1ZhbCk7XHJcblxyXG4gICAgICAgICAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgICAgICAgICBvYmplY3QuZm9ybWF0dGVkV2hlcmUgPSB0aGlzLnByb2Nlc3Nmb3JtYXR0ZWRXaGVyZShvYmplY3QsIG9iamVjdC5mb3JtYXR0ZWRXaGVyZSk7XHJcbiAgICAgICAgICAgICAgUGFnZSA9IFBhZ2UgKyBvYmplY3QuZm9ybWF0dGVkV2hlcmU7XHJcbiAgICAgICAgICAgICAgb2JqZWN0LmZvcm1hdHRlZFdoZXJlID0gbnVsbDtcclxuICAgICAgICAgICAgfVxyXG4gICAgaWYgKCh0eXBlb2Ygb2JqZWN0Lk9yZGVyQnlDbGF1c2UgIT09IFwidW5kZWZpbmVkXCIpICYmIChvYmplY3QuT3JkZXJCeUNsYXVzZSAhPSBcIlwiKSlcclxuICAgICAgICAgICAgICBQYWdlID0gUGFnZSArIFwiJl9PUkRFUkJZPVwiICsgb2JqZWN0Lk9yZGVyQnlDbGF1c2U7XHJcbiAgICB9XHJcblxyXG4gICAgb2JqZWN0LmV4ZWN1dGVRdWVyeXJlc3VsdCA9IFtdO1xyXG4gICAgb2JqZWN0LmV4ZWN1dGVRdWVyeXJlc3VsdC5yZXN1bHQgPSAwO1xyXG4gICAgICAgIG9iamVjdC5DdXJyZW50UmVjID0gMDtcclxuXHJcbiAgICAgICAgUGFnZSA9IGVuY29kZVVSSShQYWdlKTtcclxuICAgIG9iamVjdC5zdGFyU2VydmljZXMuZmV0Y2gob2JqZWN0LCBQYWdlKS5zdWJzY3JpYmUoKHJlc3VsdDphbnkpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChyZXN1bHQgIT0gbnVsbCkge1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcmVzdWx0LmRhdGFbMF0uZGF0YS5sZW5ndGg7IGkrKylcclxuICAgICAgICAgICAgICAgICAgICByZXN1bHQuZGF0YVswXS5kYXRhW2ldID0gb2JqZWN0LnN0YXJTZXJ2aWNlcy5wYXJzZVRvRGF0ZShyZXN1bHQuZGF0YVswXS5kYXRhW2ldKTtcclxuXHJcblxyXG4gICAgICAgIHJlc3VsdCA9IHtcclxuICAgICAgICAgIGRhdGE6IHJlc3VsdC5kYXRhWzBdLmRhdGEsXHJcbiAgICAgICAgICB0b3RhbDogcGFyc2VJbnQocmVzdWx0LmRhdGFbMF0uZGF0YS5sZW5ndGgsIDEwKVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAob2JqZWN0LmlzTWFzdGVyKVxyXG4gICAgICAgICAgb2JqZWN0LnN0YXJTZXJ2aWNlcy5zaG93Tm90aWZpY2F0aW9uKCdzdWNjZXNzJywgXCJSZWNvcmRzIHJldHJpZXZlZCA6IFwiICsgcmVzdWx0LnRvdGFsKTtcclxuICAgICAgICBvYmplY3Quc3RhclNlcnZpY2VzLmZpeE11bHRpU2VsZWN0RmllbGRzX3Jlc3VsdChvYmplY3QsIHJlc3VsdClcclxuICAgICAgICBvYmplY3QuZXhlY3V0ZVF1ZXJ5cmVzdWx0ID0gcmVzdWx0O1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaGVscE1zZyA9IFwiXCI7XHJcbiAgICAgICAgaWYgKG9iamVjdC5wYXJhbUNvbmZpZy5ERUJVR19GTEFHKSBjb25zb2xlLmxvZyhcIm9iamVjdC5leGVjdXRlUXVlcnlyZXN1bHQ6XCIsIG9iamVjdC5leGVjdXRlUXVlcnlyZXN1bHQpO1xyXG4gICAgICAgIGlmICh0eXBlb2YgcmVzdWx0LmRhdGFbb2JqZWN0LkN1cnJlbnRSZWNdICE9PSBcInVuZGVmaW5lZFwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBvYmplY3QuZm9ybS5wYXRjaFZhbHVlKHJlc3VsdC5kYXRhW29iamVjdC5DdXJyZW50UmVjXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICBvYmplY3QuZm9ybS5tYXJrQXNQcmlzdGluZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgb2JqZWN0LmZvcm0ubWFya0FzVW50b3VjaGVkKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICBvYmplY3QuZm9ybS5yZXNldChyZXN1bHQuZGF0YVtvYmplY3QuQ3VycmVudFJlY10sIHsgZW1pdEV2ZW50OiBvYmplY3QuZW1pdEV2ZW50ICE9IG51bGwgPyBvYmplY3QuZW1pdEV2ZW50IDogdHJ1ZSB9KTtcclxuXHJcbiAgICAgICAgaWYgKG9iamVjdC5wYXJhbUNvbmZpZy5ERUJVR19GTEFHKSBjb25zb2xlLmxvZyhcImZvcm0gc2VydmljZXJlYWRDb21wbGV0ZWRPdXRwdXRcIik7XHJcbiAgICAgICAgaWYgKG9iamVjdC5wYXJhbUNvbmZpZy5ERUJVR19GTEFHKSBjb25zb2xlLmxvZyhvYmplY3QucmVhZENvbXBsZXRlZE91dHB1dCk7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHBhcmFtQ29uZmlnID0ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgXCJOYW1lXCI6IFwiY2hpbGRSZWNvcmRzXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICBcIlZhbFwiOiByZXN1bHQudG90YWxcclxuICAgICAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgICAgIHNldFBhcmFtQ29uZmlnKHBhcmFtQ29uZmlnKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAocmVzdWx0LnRvdGFsICE9IDApXHJcbiAgICAgICAgICAgICAgICAgICAgICBvYmplY3QuaXNOZXcgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgaWYgKG9iamVjdC5kaXNhYmxlRW1pdFJlYWRDb21wbGV0ZWQgIT0gdHJ1ZSkge1xyXG4gICAgICAgICAgaWYgKHJlc3VsdC50b3RhbCAhPSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9iamVjdC5yZWFkQ29tcGxldGVkT3V0cHV0LmVtaXQob2JqZWN0LmZvcm0uZ2V0UmF3VmFsdWUoKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9iamVjdC5jbGVhckNvbXBsZXRlZE91dHB1dC5lbWl0KFtdKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgaWYgKHR5cGVvZiBvYmplY3QuY2FsbEJhY2tGdW5jdGlvbiAhPT0gXCJ1bmRlZmluZWRcIilcclxuICAgICAgICAgICAgICAgICAgICAgIG9iamVjdC5jYWxsQmFja0Z1bmN0aW9uKHJlc3VsdC5kYXRhWzBdKTtcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRQcmltYXJLZXlOYW1lQXJyKG9iamVjdCwgdHJ1ZSk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgIChlcnI6YW55KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAvL2FsZXJ0KCdlcnJvcjonICsgZXJyLm1lc3NhZ2UpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zaG93RXJyb3JNc2cob2JqZWN0LCBlcnIpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgIH1cclxuICBwdWJsaWMgZXhlY3N0YXJTZXJ2aWNlc19mb3JtX2luVHJhbnMoTmV3VmFsOmFueSwgb2JqZWN0OmFueSkge1xyXG4gICAgICB0aGlzLmNvbW1pdEJvZHkucHVzaChOZXdWYWwpO1xyXG4gICAgaWYgKG9iamVjdC5hY3Rpb24gIT0gXCJSRU1PVkVcIikge1xyXG4gICAgICBpZiAodHlwZW9mIG9iamVjdC5leGVjdXRlUXVlcnlyZXN1bHQgIT09IFwidW5kZWZpbmVkXCIpIHtcclxuICAgICAgICBpZiAob2JqZWN0LmlzTmV3ID09IHRydWUpIHtcclxuICAgICAgICAgICAgb2JqZWN0LmV4ZWN1dGVRdWVyeXJlc3VsdC5kYXRhLnB1c2goTmV3VmFsKTtcclxuICAgICAgICAgICAgb2JqZWN0LmV4ZWN1dGVRdWVyeXJlc3VsdC50b3RhbCA9IG9iamVjdC5leGVjdXRlUXVlcnlyZXN1bHQudG90YWwgKyAxO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBvYmplY3QuZXhlY3V0ZVF1ZXJ5cmVzdWx0LmRhdGFbb2JqZWN0LkN1cnJlbnRSZWNdID0gTmV3VmFsO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgZWxzZSB7XHJcbiAgICAgICAgbGV0IE5ld1ZhbEFycjphbnkgPSBbXTtcclxuICAgICAgICAgIE5ld1ZhbEFyci5wdXNoKE5ld1ZhbCk7XHJcbiAgICAgICAgbGV0IHJlc3VsdCA9IHtcclxuICAgICAgICAgIGRhdGE6IE5ld1ZhbEFycixcclxuICAgICAgICAgIHRvdGFsOiAxXHJcbiAgICAgICAgfVxyXG4gICAgICAgIG9iamVjdC5leGVjdXRlUXVlcnlyZXN1bHQgPSByZXN1bHQ7XHJcbiAgICAgICAgICAgIG9iamVjdC5DdXJyZW50UmVjID0gMDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICB2YXIgZGF0YTphbnkgPSBbXTtcclxuICAgICAgICBkYXRhLnB1c2goTmV3VmFsKVxyXG4gICAgICBpZiAob2JqZWN0LmlzTmV3ID09IHRydWUpIHtcclxuICAgICAgICAgIG9iamVjdC5pc05ldyA9IGZhbHNlO1xyXG4gICAgICAgIGlmICh0eXBlb2Ygb2JqZWN0LmNhbGxCYWNrUG9zdF9JbnNlcnQgIT09IFwidW5kZWZpbmVkXCIpIHtcclxuICAgICAgICAgICAgICBvYmplY3QuY2FsbEJhY2tQb3N0X0luc2VydC5hcHBseShvYmplY3QsIGRhdGEpO1xyXG4gICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIGVsc2Uge1xyXG4gICAgICAgIGlmICh0eXBlb2Ygb2JqZWN0LmNhbGxCYWNrUG9zdF91cGRhdGUgIT09IFwidW5kZWZpbmVkXCIpIHtcclxuICAgICAgICAgIG9iamVjdC5jYWxsQmFja1Bvc3RfdXBkYXRlLmFwcGx5KG9iamVjdCwgZGF0YSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgICAgLy9SRU1PVkVcclxuICAgICAgICBvYmplY3QuZXhlY3V0ZVF1ZXJ5cmVzdWx0LmRhdGEuc3BsaWNlKG9iamVjdC5DdXJyZW50UmVjLCAxKTtcclxuICAgICAgICBvYmplY3QuZXhlY3V0ZVF1ZXJ5cmVzdWx0LnRvdGFsLS07XHJcbiAgICAgIGlmIChvYmplY3QuQ3VycmVudFJlYyA+IDApIHtcclxuICAgICAgICAgIG9iamVjdC5DdXJyZW50UmVjLS07XHJcbiAgICAgICAgb2JqZWN0LmZvcm0ucmVzZXQob2JqZWN0LmV4ZWN1dGVRdWVyeXJlc3VsdC5kYXRhW29iamVjdC5DdXJyZW50UmVjXSwgeyBlbWl0RXZlbnQ6IG9iamVjdC5lbWl0RXZlbnQgIT0gbnVsbCA/IG9iamVjdC5lbWl0RXZlbnQgOiB0cnVlIH0pO1xyXG4gICAgICAgICAgaWYgKG9iamVjdC5pc05ldyA9PSB0cnVlKVxyXG4gICAgICAgICAgICBvYmplY3QuaXNOZXcgPSBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgIGVsc2Uge1xyXG4gICAgICAgIG9iamVjdC5mb3JtLnJlc2V0KG9iamVjdC5mb3JtSW5pdGlhbFZhbHVlcywgeyBlbWl0RXZlbnQ6IG9iamVjdC5lbWl0RXZlbnQgIT0gbnVsbCA/IG9iamVjdC5lbWl0RXZlbnQgOiB0cnVlIH0pO1xyXG4gICAgICAgICAgb2JqZWN0LmlzTmV3ID0gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgIGxldCBOZXdWYWwxOmFueSA9IFtdO1xyXG4gICAgICAgICAgICAgICAgTmV3VmFsMS5wdXNoKE5ld1ZhbCk7XHJcbiAgICAgIGlmICh0eXBlb2Ygb2JqZWN0LmNhbGxCYWNrUmVtb3ZlQXR0ICE9PSBcInVuZGVmaW5lZFwiKVxyXG4gICAgICAgIG9iamVjdC5jYWxsQmFja1JlbW92ZUF0dChvYmplY3QsIE5ld1ZhbCk7XHJcbiAgICAgIGlmICh0eXBlb2Ygb2JqZWN0LmNhbGxCYWNrUG9zdF9SZW1vdmUgIT09IFwidW5kZWZpbmVkXCIpIHtcclxuICAgICAgICAvLyBsZXQgTmV3VmFsMSA9IFtdO1xyXG4gICAgICAgIC8vIE5ld1ZhbDEucHVzaChOZXdWYWwpO1xyXG4gICAgICAgICAgICAgIG9iamVjdC5jYWxsQmFja1Bvc3RfUmVtb3ZlLmFwcGx5KG9iamVjdCwgTmV3VmFsMSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICAgXHJcbiAgICAgIH1cclxuICAgIFxyXG4gICAgaWYgKG9iamVjdC5hY3Rpb24gIT0gXCJSRU1PVkVcIikge1xyXG4gICAgICBvYmplY3QuZm9ybS5yZXNldChOZXdWYWwsIHsgZW1pdEV2ZW50OiBvYmplY3QuZW1pdEV2ZW50ICE9IG51bGwgPyBvYmplY3QuZW1pdEV2ZW50IDogdHJ1ZSB9KTtcclxuICAgIH1cclxuICAgIGlmIChvYmplY3QuZGlhYmxlRW1pdFNhdmUgPT0gdHJ1ZSkgeyB9XHJcbiAgICBlbHNlXHJcbiAgICAgIG9iamVjdC5zYXZlQ29tcGxldGVkT3V0cHV0LmVtaXQoTmV3VmFsKTtcclxuICAgIGlmIChvYmplY3QuaXNDaGlsZCA9PSB0cnVlKSB7XHJcbiAgICAgIGxldCBwYXJhbUNvbmZpZyA9IHtcclxuICAgICAgICBcIk5hbWVcIjogXCJjaGlsZFJlY29yZHNcIixcclxuICAgICAgICBcIlZhbFwiOiBvYmplY3QuZXhlY3V0ZVF1ZXJ5cmVzdWx0LnRvdGFsXHJcbiAgICAgIH07XHJcbiAgICAgIHNldFBhcmFtQ29uZmlnKHBhcmFtQ29uZmlnKTtcclxuICAgIH1cclxuICAgIG9iamVjdC5hY3Rpb24gPSBcIlwiO1xyXG4gICAgdGhpcy5zZXRQcmltYXJLZXlOYW1lQXJyKG9iamVjdCwgdHJ1ZSk7XHJcblxyXG4gICAgfVxyXG4gIHB1YmxpYyBleGVjc3RhclNlcnZpY2VzX2Zvcm0oTmV3VmFsOmFueSwgb2JqZWN0OmFueSkge1xyXG4gICAgaWYgKHRoaXMucGFyYW1Db25maWcuREVCVUdfRkxBRykgY29uc29sZS5sb2coXCJOZXdWYWw6XCIsIE5ld1ZhbCk7XHJcbiAgICAgICAgb2JqZWN0LmFkZFRvQm9keShOZXdWYWwpO1xyXG4gICAgaWYgKG9iamVjdC5pc05ldyA9PSB0cnVlKXtcclxuICAgICAgbGV0IHN1ZmZpeF9zcWwgPSB7XCJfUVVFUllcIjogXCJHRVRfTEFTVF9JRFwifTtcclxuICAgICAgb2JqZWN0LmFkZFRvQm9keShzdWZmaXhfc3FsKTtcclxuICAgICAgLy9vYmplY3Quc3VmZml4X3NxbD0gdW5kZWZpbmVkO1xyXG4gICAgfVxyXG4gICAgbGV0IFBhZ2UgPSBcIiZfdHJhbnM9WVwiO1xyXG4gICAgICAgICAgaWYgKHRoaXMuaW5UcmFucykge1xyXG4gICAgICB0aGlzLmV4ZWNzdGFyU2VydmljZXNfZm9ybV9pblRyYW5zKE5ld1ZhbCwgb2JqZWN0KTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgIHRoaXMucG9zdChvYmplY3QsIFBhZ2UsIG9iamVjdC5Cb2R5KS5zdWJzY3JpYmUoUGFnZSA9PiB7XHJcbiAgICAgIG9iamVjdC5Cb2R5ID0gW107XHJcbiAgICAgIGlmICh0aGlzLnBhcmFtQ29uZmlnLkRFQlVHX0ZMQUcpIGNvbnNvbGUubG9nKFwib2JqZWN0LmV4ZWN1dGVRdWVyeXJlc3VsdC5kYXRhOm9iamVjdC5DdXJyZW50UmVjOlwiICwgb2JqZWN0LkN1cnJlbnRSZWMgLCBcIiBvYmplY3QuYWN0aW9uOlwiICwgb2JqZWN0LmFjdGlvbiwgb2JqZWN0LmV4ZWN1dGVRdWVyeXJlc3VsdCwgXCJQYWdlOlwiLCBQYWdlKTtcclxuICAgICAgICAgICAgLy9pZiAodHlwZW9mIG9iamVjdC5leGVjdXRlUXVlcnlyZXN1bHQgIT09IFwidW5kZWZpbmVkXCIpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICBpZiAodGhpcy5wYXJhbUNvbmZpZy5ERUJVR19GTEFHKSBjb25zb2xlLmxvZyhcImhlcmUxXCIpO1xyXG4gICAgICAgIGlmIChvYmplY3QuYWN0aW9uICE9IFwiUkVNT1ZFXCIpIHtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLnBhcmFtQ29uZmlnLkRFQlVHX0ZMQUcpIGNvbnNvbGUubG9nKG9iamVjdC5leGVjdXRlUXVlcnlyZXN1bHQpO1xyXG4gICAgICAgICAgaWYgKHR5cGVvZiBvYmplY3QuZXhlY3V0ZVF1ZXJ5cmVzdWx0ICE9PSBcInVuZGVmaW5lZFwiKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnBhcmFtQ29uZmlnLkRFQlVHX0ZMQUcpIGNvbnNvbGUubG9nKFwib2JqZWN0LmlzTmV3OlwiICsgb2JqZWN0LmlzTmV3LCBcIm9iamVjdC5leGVjdXRlUXVlcnlyZXN1bHQ6XCIsIG9iamVjdC5leGVjdXRlUXVlcnlyZXN1bHRcclxuICAgICAgICAgICAgICAsIFwib2JqZWN0LmV4ZWN1dGVRdWVyeXJlc3VsdC5kYXRhOlwiLCBvYmplY3QuZXhlY3V0ZVF1ZXJ5cmVzdWx0LmRhdGEpXHJcbiAgICAgICAgICAgIGlmICh0eXBlb2Ygb2JqZWN0LmV4ZWN1dGVRdWVyeXJlc3VsdC5kYXRhICE9PSBcInVuZGVmaW5lZFwiKSB7XHJcbiAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgaWYgKG9iamVjdC5pc05ldyA9PSB0cnVlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgb2JqZWN0LmV4ZWN1dGVRdWVyeXJlc3VsdC5kYXRhLnB1c2goTmV3VmFsKTtcclxuICAgICAgICAgICAgICAgICAgICBvYmplY3QuZXhlY3V0ZVF1ZXJ5cmVzdWx0LnRvdGFsID0gb2JqZWN0LmV4ZWN1dGVRdWVyeXJlc3VsdC50b3RhbCArIDE7XHJcbiAgICAgICAgICAgICAgICAgICAgLy9vYmplY3QuQ3VycmVudFJlYysrO1xyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgb2JqZWN0LmV4ZWN1dGVRdWVyeXJlc3VsdC5kYXRhW29iamVjdC5DdXJyZW50UmVjXSA9IE5ld1ZhbDtcclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnBhcmFtQ29uZmlnLkRFQlVHX0ZMQUcpIGNvbnNvbGUubG9nKFwib2JqZWN0LmV4ZWN1dGVRdWVyeXJlc3VsdCBwb3N0XCIpO1xyXG4gICAgICAgICAgICBpZiAodGhpcy5wYXJhbUNvbmZpZy5ERUJVR19GTEFHKSBjb25zb2xlLmxvZyhvYmplY3QuZXhlY3V0ZVF1ZXJ5cmVzdWx0KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBsZXQgTmV3VmFsQXJyOmFueSA9IFtdO1xyXG4gICAgICAgICAgICAgICAgICBOZXdWYWxBcnIucHVzaChOZXdWYWwpO1xyXG4gICAgICAgICAgICBsZXQgcmVzdWx0ID0ge1xyXG4gICAgICAgICAgICAgIGRhdGE6IE5ld1ZhbEFycixcclxuICAgICAgICAgICAgICB0b3RhbDogMVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIG9iamVjdC5leGVjdXRlUXVlcnlyZXN1bHQgPSByZXN1bHQ7XHJcbiAgICAgICAgICAgICAgICAgICAgb2JqZWN0LkN1cnJlbnRSZWMgPSAwO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIHRoaXMuc2hvd05vdGlmaWNhdGlvbignc3VjY2VzcycsIFwiRGF0YSBzYXZlZCBzdWNjZXNzZnVsbHlcIik7XHJcbiAgICAgICAgICB2YXIgZGF0YTphbnkgPSBbXTtcclxuICAgICAgICAgICAgICAgIGRhdGEucHVzaChOZXdWYWwpXHJcbiAgICAgICAgICBpZiAob2JqZWN0LmlzTmV3ID09IHRydWUpIHtcclxuICAgICAgICAgICAgICAgICAgb2JqZWN0LmlzTmV3ID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGlmICh0eXBlb2Ygb2JqZWN0LmNhbGxCYWNrUG9zdF9JbnNlcnQgIT09IFwidW5kZWZpbmVkXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgIC8vb2JqZWN0LmNhbGxCYWNrUG9zdF9JbnNlcnQob2JqZWN0LCBOZXdWYWwpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgdGhpcy5jaGVja0xhc3RJZChvYmplY3QsIE5ld1ZhbCxQYWdlKVxyXG4gICAgICAgICAgICAgICAgICAgICAgb2JqZWN0LmNhbGxCYWNrUG9zdF9JbnNlcnQuYXBwbHkob2JqZWN0LCBkYXRhKTtcclxuICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBpZiAodHlwZW9mIG9iamVjdC5jYWxsQmFja1Bvc3RfVXBkYXRlICE9PSBcInVuZGVmaW5lZFwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgb2JqZWN0LmNhbGxCYWNrUG9zdF9VcGRhdGUuYXBwbHkob2JqZWN0LCBkYXRhKTtcclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAvL1JFTU9WRVxyXG4gICAgICAgICAgICAgICAgb2JqZWN0LmV4ZWN1dGVRdWVyeXJlc3VsdC5kYXRhLnNwbGljZShvYmplY3QuQ3VycmVudFJlYywgMSk7XHJcbiAgICAgICAgICAgICAgICBvYmplY3QuZXhlY3V0ZVF1ZXJ5cmVzdWx0LnRvdGFsLS07XHJcbiAgICAgICAgICBpZiAodGhpcy5wYXJhbUNvbmZpZy5ERUJVR19GTEFHKSBjb25zb2xlLmxvZyhcIm9iamVjdC5DdXJyZW50UmVjOlwiICsgb2JqZWN0LkN1cnJlbnRSZWMpXHJcbiAgICAgICAgICBpZiAob2JqZWN0LkN1cnJlbnRSZWMgPiAwKSB7XHJcbiAgICAgICAgICAgICAgICAgIG9iamVjdC5DdXJyZW50UmVjLS07XHJcbiAgICAgICAgICAgIG9iamVjdC5mb3JtLnJlc2V0KG9iamVjdC5leGVjdXRlUXVlcnlyZXN1bHQuZGF0YVtvYmplY3QuQ3VycmVudFJlY10sIHsgZW1pdEV2ZW50OiBvYmplY3QuZW1pdEV2ZW50ICE9IG51bGwgPyBvYmplY3QuZW1pdEV2ZW50IDogdHJ1ZSB9KTtcclxuICAgICAgICAgICAgICAgICAgaWYgKG9iamVjdC5pc05ldyA9PSB0cnVlKVxyXG4gICAgICAgICAgICAgICAgICAgIG9iamVjdC5pc05ldyA9IGZhbHNlO1xyXG5cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBvYmplY3QuZm9ybS5yZXNldChvYmplY3QuZm9ybUluaXRpYWxWYWx1ZXMsIHsgZW1pdEV2ZW50OiBvYmplY3QuZW1pdEV2ZW50ICE9IG51bGwgPyBvYmplY3QuZW1pdEV2ZW50IDogdHJ1ZSB9KTtcclxuICAgICAgICAgICAgICAgICAgb2JqZWN0LmlzTmV3ID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgaWYgKHRoaXMucGFyYW1Db25maWcuREVCVUdfRkxBRykgY29uc29sZS5sb2coXCJvYmplY3QuaXNOZXc6XCIgKyBvYmplY3QuaXNOZXcpXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICBsZXQgTmV3VmFsMTphbnkgPSBbXTtcclxuICAgICAgICAgICAgICAgIE5ld1ZhbDEucHVzaChOZXdWYWwpO1xyXG4gICAgICAgICAgaWYgKHR5cGVvZiBvYmplY3QuY2FsbEJhY2tSZW1vdmVBdHQgIT09IFwidW5kZWZpbmVkXCIpXHJcbiAgICAgICAgICAgIG9iamVjdC5jYWxsQmFja1JlbW92ZUF0dChvYmplY3QsIE5ld1ZhbDEpO1xyXG4gICAgICAgICAgaWYgKHR5cGVvZiBvYmplY3QuY2FsbEJhY2tQb3N0X1JlbW92ZSAhPT0gXCJ1bmRlZmluZWRcIikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgb2JqZWN0LmNhbGxCYWNrUG9zdF9SZW1vdmUuYXBwbHkob2JqZWN0LCBOZXdWYWwxKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnBhcmFtQ29uZmlnLkRFQlVHX0ZMQUcpIGNvbnNvbGUubG9nKFwiaGVyZTJcIik7XHJcbiAgICAgIGlmIChvYmplY3QuYWN0aW9uICE9IFwiUkVNT1ZFXCIpIHtcclxuICAgICAgICBvYmplY3Quc3RhclNlcnZpY2VzLmZpeE11bHRpU2VsZWN0RmllbGRzX05ld1ZhbChvYmplY3QsIE5ld1ZhbClcclxuICAgICAgICBvYmplY3QuZm9ybS5yZXNldChOZXdWYWwsIHsgZW1pdEV2ZW50OiBvYmplY3QuZW1pdEV2ZW50ICE9IG51bGwgPyBvYmplY3QuZW1pdEV2ZW50IDogdHJ1ZSB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICBpZiAob2JqZWN0LmRpYWJsZUVtaXRTYXZlID09IHRydWUpIHsgfVxyXG4gICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgICAgb2JqZWN0LnNhdmVDb21wbGV0ZWRPdXRwdXQuZW1pdChOZXdWYWwpO1xyXG4gICAgICBpZiAob2JqZWN0LmlzQ2hpbGQgPT0gdHJ1ZSkge1xyXG4gICAgICAgICAgICAgIGxldCBwYXJhbUNvbmZpZyA9IHtcclxuICAgICAgICAgICAgICAgIFwiTmFtZVwiOiBcImNoaWxkUmVjb3Jkc1wiLFxyXG4gICAgICAgICAgICAgICAgXCJWYWxcIjogb2JqZWN0LmV4ZWN1dGVRdWVyeXJlc3VsdC50b3RhbFxyXG4gICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgc2V0UGFyYW1Db25maWcocGFyYW1Db25maWcpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIG9iamVjdC5hY3Rpb24gPSBcIlwiO1xyXG4gICAgICAgICAgICB0aGlzLnNldFByaW1hcktleU5hbWVBcnIob2JqZWN0LCB0cnVlKTtcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICBlcnIgPT4ge1xyXG4gICAgICAgICAgICAvL2FsZXJ0ICgnZXJyb3I6JyArIGVyci5tZXNzYWdlKTtcclxuICAgICAgICAgICAgdGhpcy5zaG93RXJyb3JNc2cob2JqZWN0LCBlcnIpO1xyXG4gICAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICBwdWJsaWMgY2hlY2tMYXN0SWQgKG9iamVjdCwgTmV3VmFsLFBhZ2Upe1xyXG4gICAgY29uc29sZS5sb2coXCJjaGVja0xhc3RJZDpOZXdWYWw6XCIsTmV3VmFsLCBcIlBhZ2U6XCIsUGFnZSwgXCJQS19BVVRPOlwiLCBvYmplY3QuUEtfQVVUTyApXHJcbiAgICBpZiAodHlwZW9mIG9iamVjdC5QS19BVVRPICE9IFwidW5kZWZpbmVkXCIgJiYgb2JqZWN0LlBLX0FVVE8gIT0gXCJcIil7XHJcbiAgICAgIGxldCBkYXRhID0gUGFnZS5kYXRhO1xyXG4gICAgICBmb3IgKGxldCBpID0gMDsgaTwgZGF0YS5sZW5ndGg7IGkrKyl7XHJcbiAgICAgICAgbGV0IHJlYyA9IGRhdGFbaV07XHJcbiAgICAgICAgbGV0IHF1ZXJ5ID0gcmVjLnF1ZXJ5O1xyXG4gICAgICAgIGlmIChxdWVyeS5zdGFydHNXaXRoKFwiR0VUX0xBU1RfSURcIikpe1xyXG4gICAgICAgICAgbGV0IGRhdGFBcnIgPSByZWMuZGF0YTtcclxuICAgICAgICAgIGxldCBkYXRhUmVjID0gZGF0YUFyclswXTtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKFwiY2hlY2tMYXN0SWQ6ZGF0YVJlYzpcIixkYXRhUmVjKTtcclxuICAgICAgICAgIGxldCBrZXlzID0gT2JqZWN0LmtleXMoZGF0YVJlYyk7XHJcbiAgICAgICAgICBsZXQgdmFsID0gZGF0YVJlY1trZXlzWzBdXTtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKFwiY2hlY2tMYXN0SWQ6dmFsOlwiLHZhbCk7XHJcbiAgICAgICAgICBOZXdWYWxbb2JqZWN0LlBLX0FVVE9dID0gdmFsO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICBwdWJsaWMgc2F2ZUNoYW5nZXNfZm9ybShmb3JtOiBhbnksIG9iamVjdDphbnkpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLnBhcmFtQ29uZmlnLkRFQlVHX0ZMQUcpIGNvbnNvbGUubG9nKFwidGhpcy5mb3JtOmludmFsaWRcIixvYmplY3QuZm9ybS5pbnZhbGlkKTtcclxuICAgIGlmICh0aGlzLnBhcmFtQ29uZmlnLkRFQlVHX0ZMQUcpIGNvbnNvbGUubG9nKCdzYXZlQ2hhbmdlc19mb3JtIDogb2JqZWN0LmlzTmV3IDonICsgb2JqZWN0LmlzTmV3KTtcclxuICAgIGlmICh0aGlzLnBhcmFtQ29uZmlnLkRFQlVHX0ZMQUcpIGNvbnNvbGUubG9nKG9iamVjdC5jb21wb25lbnRDb25maWcucm91dGluZUF1dGgpO1xyXG4gICAgaWYgKG9iamVjdC5jb21wb25lbnRDb25maWcucm91dGluZUF1dGggIT0gbnVsbCkge1xyXG4gICAgICBpZiAodGhpcy5wYXJhbUNvbmZpZy5ERUJVR19GTEFHKSBjb25zb2xlLmxvZyhcImF1dGhMZXZlbDpcIiArIG9iamVjdC5jb21wb25lbnRDb25maWcucm91dGluZUF1dGguYXV0aExldmVsKTtcclxuICAgICAgaWYgKG9iamVjdC5jb21wb25lbnRDb25maWcucm91dGluZUF1dGguYXV0aExldmVsICE9IDIpIHtcclxuICAgICAgICAgICAgbGV0IGRpYWxvZ1N0cnVjID0ge1xyXG4gICAgICAgICAgICAgIG1zZzogdGhpcy5yZWFkT25seU1zZyxcclxuICAgICAgICAgIHRpdGxlOiBcIldhcm5pbmdcIixcclxuICAgICAgICAgICAgICBpbmZvOiBudWxsLFxyXG4gICAgICAgICAgb2JqZWN0OiBvYmplY3QsXHJcbiAgICAgICAgICBhY3Rpb246IHRoaXMuT2tBY3Rpb25zLFxyXG4gICAgICAgICAgY2FsbGJhY2s6IG51bGxcclxuICAgICAgICB9O1xyXG4gICAgICAgICAgICAgIHRoaXMuc2hvd0NvbmZpcm1hdGlvbihkaWFsb2dTdHJ1Yyk7XHJcbiAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICBpZiAodGhpcy5wYXJhbUNvbmZpZy5ERUJVR19GTEFHKSBjb25zb2xlLmxvZygnc2F2ZUNoYW5nZXNfZm9ybSA6IG9iamVjdC5mb3JtLmRpcnR5OicgLCBvYmplY3QuZm9ybS5kaXJ0eSAsIFwiIG9iamVjdC5pc0NoaWxkOlwiLCBvYmplY3QuaXNDaGlsZCwgXCIgb2JqZWN0LmZvcm0uaW52YWxpZDpcIiwgb2JqZWN0LmZvcm0uaW52YWxpZCwgXCIgb2JqZWN0LmZvcm06XCIsIG9iamVjdC5mb3JtKTtcclxuICAgIGlmICgoIW9iamVjdC5mb3JtLmRpcnR5KSAmJiBvYmplY3QuaXNDaGlsZClcclxuICAgICAgICByZXR1cm47XHJcbiAgICBpZiAob2JqZWN0LmZvcm0uaW52YWxpZCkge1xyXG4gICAgICBvYmplY3Quc3VibWl0dGVkID0gdHJ1ZTtcclxuICAgICAgaWYgKHRoaXMucGFyYW1Db25maWcuREVCVUdfRkxBRykgY29uc29sZS5sb2coXCJvYmplY3QuZm9ybTpcIixvYmplY3QuZm9ybSk7XHJcbiAgICAgIC8vdGhpcy5zaG93T2tNc2cob2JqZWN0LCB0aGlzLmZpZWxkc1JlcXVpcmVkTXNnLCBcIkVycm9yXCIpOyAvLyBUaGlzIHdhcyBjb21tZW50ZWQgZm9yIEZvcm0gRHJhZy4gQ2FzZSBjaGFuZ2UgcGFnZSBhbmQgc2VsZWN0IGEgZmllbGQgXHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9XHJcbiAgICBsZXQgTmV3VmFsOmFueT17fTtcclxuICAgICAgICAvL29iamVjdC5Cb2R5ID0gW107ICAgLy8gb25seSBvbmUgdHJhbnNhY3Rpb24gYWxsb3dlZCBpbiAgZm9ybS4gTW92ZWQgdG8gZm9ybVxyXG4gICAgICAgIC8vTmV3VmFsID0gIGZvcm0udmFsdWU7XHJcbiAgICAgICAgLy9OZXdWYWwgPSBPYmplY3QuYXNzaWduKHt9LCBmb3JtLnZhbHVlLCB7fSlcclxuICAgICAgICBOZXdWYWwgPSB7Li4uZm9ybS52YWx1ZX07XHJcbiAgICBpZiAodGhpcy5wYXJhbUNvbmZpZy5ERUJVR19GTEFHKSBjb25zb2xlLmxvZyhcIi0tLS0tIE5ld1ZhbDpcIilcclxuICAgICAgICBpZiAodGhpcy5wYXJhbUNvbmZpZy5ERUJVR19GTEFHKSBjb25zb2xlLmxvZyhOZXdWYWwpO1xyXG5cclxuICAgICAgICBpZiAob2JqZWN0LmlzTmV3ID09IHRydWUpXHJcbiAgICAgICAgICBOZXdWYWxbXCJfUVVFUllcIl0gPSBvYmplY3QuaW5zZXJ0Q01EO1xyXG4gICAgICAgIGVsc2VcclxuICAgICAgICAgIE5ld1ZhbFtcIl9RVUVSWVwiXSA9IG9iamVjdC51cGRhdGVDTUQ7XHJcbiAgICAgICAgLy9vYmplY3QuaXNOZXcgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLmV4ZWNzdGFyU2VydmljZXNfZm9ybShOZXdWYWwsIG9iamVjdCk7XHJcbiAgICB9XHJcbiAgcHVibGljIGVudGVyUXVlcnlBY3RfZm9ybShmb3JtOiBhbnksIG9iamVjdDphbnkpOiB2b2lkIHtcclxuICAgICAgICBvYmplY3QuQ3VycmVudFJlYyA9IDA7XHJcbiAgICBvYmplY3QuZXhlY3V0ZVF1ZXJ5cmVzdWx0ID0gW107XHJcbiAgICBvYmplY3QuZXhlY3V0ZVF1ZXJ5cmVzdWx0LnJlc3VsdCA9IDA7XHJcbiAgICAgICAgXHJcbiAgICAgICAgb2JqZWN0LmlzU2VhcmNoID0gdHJ1ZTtcclxuICAgICAgICBvYmplY3QuaXNOZXcgPSBmYWxzZTtcclxuICAgIGlmIChvYmplY3QucGFyYW1Db25maWcuREVCVUdfRkxBRykgY29uc29sZS5sb2coJ2VudGVyUXVlcnkgOiBvYmplY3QuaXNTZWFyY2g6JyArIG9iamVjdC5pc1NlYXJjaCk7XHJcbiAgICAgICAgb2JqZWN0LmNsZWFyQ29tcGxldGVkT3V0cHV0LmVtaXQob2JqZWN0LmZvcm1Jbml0aWFsVmFsdWVzKTtcclxuICAgICAgICBcclxuICAgIC8vIG9iamVjdC5pbWdfZ2FsbGVyeSA9IFtdO1xyXG4gICAgLy8gb2JqZWN0LmltZ19hcnIgPSBbXTtcclxuICAgIG9iamVjdC5mb3JtLnJlc2V0KG9iamVjdC5mb3JtSW5pdGlhbFZhbHVlcywgeyBlbWl0RXZlbnQ6IG9iamVjdC5lbWl0RXZlbnQgIT0gbnVsbCA/IG9iamVjdC5lbWl0RXZlbnQgOiB0cnVlIH0pO1xyXG4gICAgICAgIG9iamVjdC5zdGFyU2VydmljZXMuc2V0UHJpbWFyS2V5TmFtZUFycihvYmplY3QsIGZhbHNlKTtcclxuICAgICAgICB0aGlzLmhlbHBNc2cgPSAgb2JqZWN0LnN0YXJTZXJ2aWNlcy5nZXROTFMoW10sXCJIRUxQX0VOVEVSX1FVRVJZXCIsdGhpcy5lbnRlclF1ZXJ5TXNnKTtcclxuXHJcbiAgICAgIH1cclxuXHJcbiAgcHVibGljIHNldFByaW1hcktleU5hbWVBcnIob2JqZWN0OmFueSwgdmFsdWU6YW55KSB7XHJcbiAgICAgICAgaWYgKHR5cGVvZiBvYmplY3QucHJpbWFyS2V5UmVhZE9ubHlBcnIgIT09IFwidW5kZWZpbmVkXCIpIHtcclxuICAgICAgICAgIGxldCBrZXlzID0gT2JqZWN0LmtleXMob2JqZWN0LnByaW1hcktleVJlYWRPbmx5QXJyKTtcclxuICAgICAgZm9yIChsZXQgayA9IDA7IGsgPCBrZXlzLmxlbmd0aDsgaysrKSB7XHJcbiAgICAgICAgICAgICAgaWYgKG9iamVjdC5wYXJhbUNvbmZpZy5ERUJVR19GTEFHKSBjb25zb2xlLmxvZyhcIltrZXlzW2tdOlwiLCBrZXlzW2tdLCBcIiB2YWx1ZTpcIiwgdmFsdWUpO1xyXG4gICAgICAgICAgICAgIG9iamVjdC5wcmltYXJLZXlSZWFkT25seUFycltrZXlzW2tdXSA9IHZhbHVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG5cclxuICBwdWJsaWMgZW50ZXJRdWVyeV9mb3JtKGZvcm06IGFueSwgb2JqZWN0OmFueSk6IHZvaWQge1xyXG4gICAgICAgIGlmICh0aGlzLnBhcmFtQ29uZmlnLkRFQlVHX0ZMQUcpIGNvbnNvbGUubG9nKFwidGVzdDpkaXJ0eTpcIiwgb2JqZWN0LmZvcm0uZGlydHkpO1xyXG4gICAgaWYgKG9iamVjdC5mb3JtLmRpcnR5ID09IHRydWUpIHtcclxuICAgICAgICAgIGxldCBkaWFsb2dTdHJ1YyA9IHtcclxuICAgICAgICAgICAgbXNnOiB0aGlzLnNhdmVDaGFuZ2VzTXNnLFxyXG4gICAgICAgIHRpdGxlOiB0aGlzLnBsZWFzZUNvbmZpcm1Nc2csXHJcbiAgICAgICAgICAgIGluZm86IGZvcm0sXHJcbiAgICAgICAgb2JqZWN0OiBvYmplY3QsXHJcbiAgICAgICAgYWN0aW9uOiB0aGlzLlllc05vQWN0aW9ucyxcclxuICAgICAgICBjYWxsYmFjazogdGhpcy5lbnRlclF1ZXJ5QWN0X2Zvcm1cclxuICAgICAgfTtcclxuICAgICAgICAgICAgdGhpcy5zaG93Q29uZmlybWF0aW9uKGRpYWxvZ1N0cnVjKTtcclxuICAgICAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgdGhpcy5lbnRlclF1ZXJ5QWN0X2Zvcm0oZm9ybSwgb2JqZWN0KTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcblxyXG4gIHB1YmxpYyBvbkNhbmNlbF9mb3JtKGU6YW55LCBvYmplY3Q6YW55KTogdm9pZCB7XHJcbiAgICAvL29iamVjdC5pbWdfZ2FsbGVyeSA9IFtdO1xyXG4gICAvLyBvYmplY3QuaW1nX2FyciA9IFtdO1xyXG4gICAgb2JqZWN0LmZvcm0ucmVzZXQob2JqZWN0LmZvcm1Jbml0aWFsVmFsdWVzLCB7IGVtaXRFdmVudDogb2JqZWN0LmVtaXRFdmVudCAhPSBudWxsID8gb2JqZWN0LmVtaXRFdmVudCA6IHRydWUgfSk7XHJcbiAgICAgICAgb2JqZWN0LmlzU2VhcmNoID0gZmFsc2U7XHJcbiAgICAgICAgb2JqZWN0LmlzTmV3ID0gdHJ1ZTtcclxuICAgICAgICBvYmplY3QuY2xlYXJDb21wbGV0ZWRPdXRwdXQuZW1pdChvYmplY3QuZm9ybUluaXRpYWxWYWx1ZXMpO1xyXG4gICAgb2JqZWN0LmV4ZWN1dGVRdWVyeXJlc3VsdCA9IFtdO1xyXG4gICAgb2JqZWN0LmV4ZWN1dGVRdWVyeXJlc3VsdC5yZXN1bHQgPSAwO1xyXG4gICAgICAgIG9iamVjdC5teUZpbGVzPVtdO1xyXG4gICAgICAgIG9iamVjdC5DdXJyZW50UmVjID0gMDtcclxuICAgICAgICBvYmplY3QuRk9STV9UUklHR0VSX0ZBSUxVUkUgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLmhlbHBNc2cgPSBcIlwiO1xyXG4gICAgICAgIFxyXG4gICAgfVxyXG4gIHB1YmxpYyBzaG93T2tNc2cob2JqZWN0OmFueSwgbXNnOmFueSwgc2V2ZXJpdHk6YW55KSB7XHJcbiAgICAgIGxldCBkaWFsb2dTdHJ1YyA9IHtcclxuICAgICAgICBtc2c6IG1zZyxcclxuICAgICAgdGl0bGU6IHNldmVyaXR5LFxyXG4gICAgICAgIGluZm86IG51bGwsXHJcbiAgICAgIG9iamVjdDogb2JqZWN0LFxyXG4gICAgICBhY3Rpb246IHRoaXMuT2tBY3Rpb25zLFxyXG4gICAgICBjYWxsYmFjazogbnVsbFxyXG4gICAgfTtcclxuICAgICAgICB0aGlzLnNob3dDb25maXJtYXRpb24oZGlhbG9nU3RydWMpO1xyXG4gICAgfVxyXG4gIHB1YmxpYyBvblJlbW92ZV9mb3JtKGZvcm06YW55LCBvYmplY3Q6YW55KTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5wYXJhbUNvbmZpZy5ERUJVR19GTEFHKSBjb25zb2xlLmxvZyhcIm9iamVjdC5pc05ldzpcIiwgb2JqZWN0LmlzTmV3KVxyXG4gICAgaWYgKG9iamVjdC5pc05ldyA9PSB0cnVlKSB7XHJcbiAgICAgICAgICB0aGlzLm9uQ2FuY2VsX2Zvcm0obnVsbCwgb2JqZWN0KVxyXG4gICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHRoaXMucGFyYW1Db25maWcuREVCVUdfRkxBRykgY29uc29sZS5sb2coXCJvYmplY3QuZXhlY3V0ZVF1ZXJ5cmVzdWx0OlwiKTtcclxuICAgICAgICBpZiAodGhpcy5wYXJhbUNvbmZpZy5ERUJVR19GTEFHKSBjb25zb2xlLmxvZyhvYmplY3QuZXhlY3V0ZVF1ZXJ5cmVzdWx0KTtcclxuICAgIGlmICgodHlwZW9mIG9iamVjdC5leGVjdXRlUXVlcnlyZXN1bHQgIT09IFwidW5kZWZpbmVkXCIpICYmIChvYmplY3QuZXhlY3V0ZVF1ZXJ5cmVzdWx0LnRvdGFsID09IDApKSB7XHJcbiAgICAgIHRoaXMuc2hvd09rTXNnKG9iamVjdCwgdGhpcy5ub3RoaW5nVG9EZWxldGVsTXNnLCBcIldhcm5pbmdcIik7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICBpZiAodGhpcy5wYXJhbUNvbmZpZy5ERUJVR19GTEFHKSBjb25zb2xlLmxvZygnb25SZW1vdmUgOiBpc0NoaWxkICcgKyBvYmplY3QuaXNDaGlsZCArIFwiIG9iamVjdC5pc01hc3RlcjpcIiArIG9iamVjdC5pc01hc3Rlcik7XHJcbiAgICBsZXQgTmV3VmFsID0gZm9ybS5nZXRSYXdWYWx1ZSgpO1xyXG4gICAgICAgIGlmICh0aGlzLnBhcmFtQ29uZmlnLkRFQlVHX0ZMQUcpIGNvbnNvbGUubG9nKE5ld1ZhbCk7XHJcbiAgICAgICAgaWYgKHRoaXMucGFyYW1Db25maWcuREVCVUdfRkxBRykgY29uc29sZS5sb2coXCJvYmplY3QuZXhlY3V0ZVF1ZXJ5cmVzdWx0OlwiICsgb2JqZWN0LmV4ZWN1dGVRdWVyeXJlc3VsdClcclxuICAgIGlmIChvYmplY3QuaXNDaGlsZCA9PSBmYWxzZSkge1xyXG4gICAgICAgICAgdmFyIHBhcmFtQ29uZmlnID0gZ2V0UGFyYW1Db25maWcoKTtcclxuICAgICAgICAgIGlmICh0aGlzLnBhcmFtQ29uZmlnLkRFQlVHX0ZMQUcpIGNvbnNvbGUubG9nKHBhcmFtQ29uZmlnKTtcclxuICAgICAgICAgIGlmICh0aGlzLnBhcmFtQ29uZmlnLkRFQlVHX0ZMQUcpIGNvbnNvbGUubG9nKFwicGFyYW1Db25maWcuY2hpbGRSZWNvcmRzOlwiICsgcGFyYW1Db25maWcuY2hpbGRSZWNvcmRzKVxyXG4gICAgICBpZiAodHlwZW9mIHBhcmFtQ29uZmlnLmNoaWxkUmVjb3JkcyA9PT0gXCJ1bmRlZmluZWRcIikge1xyXG4gICAgICAgICAgICBwYXJhbUNvbmZpZy5jaGlsZFJlY29yZHMgPSAwO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgaWYgKChwYXJhbUNvbmZpZy5jaGlsZFJlY29yZHMgIT0gMCkgJiYgKG9iamVjdC5pc01hc3RlciA9PSB0cnVlKSkge1xyXG4gICAgICAgICAgICBsZXQgZGlhbG9nU3RydWMgPSB7XHJcbiAgICAgICAgICAgICAgbXNnOiB0aGlzLmRlbGV0ZURldGFpbE1zZyxcclxuICAgICAgICAgIHRpdGxlOiBcIldhcm5pbmdcIixcclxuICAgICAgICAgICAgICBpbmZvOiBudWxsLFxyXG4gICAgICAgICAgb2JqZWN0OiBvYmplY3QsXHJcbiAgICAgICAgICBhY3Rpb246IHRoaXMuT2tBY3Rpb25zLFxyXG4gICAgICAgICAgY2FsbGJhY2s6IG51bGxcclxuICAgICAgICB9O1xyXG4gICAgICAgICAgICAgIHRoaXMuc2hvd0NvbmZpcm1hdGlvbihkaWFsb2dTdHJ1Yyk7XHJcbiAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLnBhcmFtQ29uZmlnLkRFQlVHX0ZMQUcpIGNvbnNvbGUubG9nKHBhcmFtQ29uZmlnKTtcclxuXHJcbiAgICAgICAgbGV0IGRpYWxvZ1N0cnVjID0ge1xyXG4gICAgICAgICAgbXNnOiB0aGlzLmRlbGV0ZUNvbmZpcm1Nc2csXHJcbiAgICAgIHRpdGxlOiB0aGlzLnBsZWFzZUNvbmZpcm1Nc2csXHJcbiAgICAgICAgICBpbmZvOiBmb3JtLFxyXG4gICAgICBvYmplY3Q6IG9iamVjdCxcclxuICAgICAgYWN0aW9uOiB0aGlzLlllc05vQWN0aW9ucyxcclxuICAgICAgY2FsbGJhY2s6IHRoaXMuUmVtb3ZlX2Zvcm1BY3RcclxuICAgIH07XHJcbiAgICAgICAgICB0aGlzLnNob3dDb25maXJtYXRpb24oZGlhbG9nU3RydWMpO1xyXG5cclxuXHJcbiAgICB9XHJcbiAgcHVibGljIFJlbW92ZV9mb3JtQWN0KGZvcm06YW55LCBvYmplY3Q6YW55KSB7XHJcbiAgICAgIGlmIChvYmplY3QucGFyYW1Db25maWcuREVCVUdfRkxBRykgY29uc29sZS5sb2coXCJpbiBSZW1vdmVfZm9ybUFjdFwiKTtcclxuICAgIGxldCBOZXdWYWw6YW55ID17fTtcclxuICAgIE5ld1ZhbCA9IGZvcm0uZ2V0UmF3VmFsdWUoKTtcclxuICAgICAgaWYgKG9iamVjdC5wYXJhbUNvbmZpZy5ERUJVR19GTEFHKSBjb25zb2xlLmxvZyhOZXdWYWwpO1xyXG4gICAgICAvL29iamVjdC5mb3JtLnJlc2V0KG9iamVjdC5mb3JtSW5pdGlhbFZhbHVlcyk7XHJcbiAgICAgIG9iamVjdC5hY3Rpb24gPSBcIlJFTU9WRVwiO1xyXG5cclxuICAgICAgTmV3VmFsW1wiX1FVRVJZXCJdID0gb2JqZWN0LmRlbGV0ZUNNRDtcclxuICAgICAgb2JqZWN0LnN0YXJTZXJ2aWNlcy5leGVjc3RhclNlcnZpY2VzX2Zvcm0oTmV3VmFsLCBvYmplY3QpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgcHVibGljIG9uTmV3X2Zvcm0oZTphbnksIG9iamVjdDphbnkpOiB2b2lkIHtcclxuICAgIGlmIChvYmplY3QucGFyYW1Db25maWcuREVCVUdfRkxBRykgY29uc29sZS5sb2coXCJvbk5ldzogb2JqZWN0Lm1hc3RlcktleTpcIiAsIG9iamVjdC5tYXN0ZXJLZXksey4uLm9iamVjdC5mb3JtLnZhbHVlfSk7XHJcbiAgICAgICAgb2JqZWN0Lm15RmlsZXM9W107XHJcbiAgICAvLyBvYmplY3QuaW1nX2dhbGxlcnkgPSBbXTtcclxuICAgIC8vIG9iamVjdC5pbWdfYXJyID0gW107XHJcbiAgICBvYmplY3QuZm9ybS5yZXNldChvYmplY3QuZm9ybUluaXRpYWxWYWx1ZXMsIHsgZW1pdEV2ZW50OiBvYmplY3QuZW1pdEV2ZW50ICE9IG51bGwgPyBvYmplY3QuZW1pdEV2ZW50IDogdHJ1ZSB9KTtcclxuICAgIGNvbnNvbGUubG9nKFwiY2hlY2tpbmc6XCIsIG9iamVjdC5mb3JtSW5pdGlhbFZhbHVlcyxvYmplY3QuZm9ybS52YWx1ZSApXHJcbiAgICAgICAgb2JqZWN0LmNsZWFyQ29tcGxldGVkT3V0cHV0LmVtaXQob2JqZWN0LmZvcm1Jbml0aWFsVmFsdWVzKTtcclxuICAgICAgICBvYmplY3QuaXNTZWFyY2ggPSBmYWxzZTtcclxuICAgICAgICBvYmplY3QuaXNOZXcgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuc2V0UHJpbWFyS2V5TmFtZUFycihvYmplY3QsIGZhbHNlKTtcclxuICAgIH1cclxuICAgIC8qKioqKioqKioqKioqKioqKioqIEdyaWQgZnVuY3Rpb25zICAqKioqKioqKi9cclxuICBwdWJsaWMgYWRkSGFuZGxlcl9ncmlkKG9iamVjdDphbnkpOiB2b2lkIHtcclxuICAgICAgaWYgKHR5cGVvZiBvYmplY3QubWFzdGVyS2V5TmFtZUFyciAhPSBcInVuZGVmaW5lZFwiKSB7XHJcbiAgICAgICAgaWYgKG9iamVjdC5pc0NoaWxkID09IHRydWUpIHtcclxuICAgICAgICAgIGlmIChvYmplY3QubWFzdGVyS2V5QXJyWzBdID09IFwiXCIpIHtcclxuICAgICAgICAgICAgdGhpcy5zaG93T2tNc2codGhpcywgdGhpcy5zYXZlTWFzdGVyTXNnLCBcIkVycm9yXCIpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgaWYgKG9iamVjdC5pc0NoaWxkID09IHRydWUpIHtcclxuICAgICAgICAgICAgaWYgKG9iamVjdC5tYXN0ZXJLZXkgPT0gXCJcIikge1xyXG4gICAgICAgICAgICAgIHRoaXMuc2hvd09rTXNnKHRoaXMsIHRoaXMuc2F2ZU1hc3Rlck1zZywgXCJFcnJvclwiKTtcclxuICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICBcclxuICAgICAgaWYgKG9iamVjdC5wYXJhbUNvbmZpZy5ERUJVR19GTEFHKSBjb25zb2xlLmxvZyhcInRlc3Q0MTpvYmplY3QuZ3JpZEluaXRpYWxWYWx1ZXM6XCIsIG9iamVjdC5ncmlkSW5pdGlhbFZhbHVlcyk7XHJcbiAgICAgIG9iamVjdC5zYXZlQ3VycmVudCgpO1xyXG4gICAgICB0aGlzLnNldFByaW1hcktleU5hbWVBcnIob2JqZWN0LCBmYWxzZSk7XHJcbiAgICAgIC8qIG9iamVjdC5ncmlkSW5pdGlhbFZhbHVlcy5NT0RVTEUgPSBvYmplY3QubWFzdGVyS2V5OyovXHJcbiAgICAgIGlmICggKHR5cGVvZiBvYmplY3QubWFzdGVyS2V5TmFtZUFyciAhPSBcInVuZGVmaW5lZFwiKSAmJiAob2JqZWN0Lm1hc3RlcktleU5hbWVBcnIubGVuZ3RoICE9IDApIClcclxuICAgICAge1xyXG4gICAgICAgIHRoaXMuc2V0UHJpbWFyS2V5TmFtZUFycihvYmplY3QsIGZhbHNlKTtcclxuICAgICAgICBpZihvYmplY3QuaXNDaGlsZCA9PSB0cnVlKXtcclxuICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpPCBvYmplY3QubWFzdGVyS2V5TmFtZUFyci5sZW5ndGg7IGkrKyl7XHJcbiAgICAgICAgICAgIGxldCByZWFkT25seSA9IFwiaXNcIitvYmplY3QubWFzdGVyS2V5TmFtZUFycltpXSArIFwicmVhZE9ubHlcIjtcclxuICAgICAgICAgICAgaWYgKG9iamVjdC5wcmltYXJLZXlSZWFkT25seUFycil7XHJcbiAgICAgICAgICAgICAgb2JqZWN0LnByaW1hcktleVJlYWRPbmx5QXJyW3JlYWRPbmx5XSA9IHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgbGV0IGV4aXN0cyA9IG9iamVjdC5ncmlkSW5pdGlhbFZhbHVlc1tvYmplY3QubWFzdGVyS2V5TmFtZUFycltpXV1cclxuICAgICAgICAgICAgICBpZiAodHlwZW9mIGV4aXN0cyAhPT0gXCJ1bmRlZmluZWRcIil7XHJcbiAgICAgICAgICAgICAgb2JqZWN0LmdyaWRJbml0aWFsVmFsdWVzW29iamVjdC5tYXN0ZXJLZXlOYW1lQXJyW2ldXSA9IG9iamVjdC5tYXN0ZXJLZXlBcnJbaV07XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAob2JqZWN0LnBhcmFtQ29uZmlnLkRFQlVHX0ZMQUcpIGNvbnNvbGUubG9nKFwidGVzdDQyOm9iamVjdC5ncmlkSW5pdGlhbFZhbHVlczoxOlwiLCBvYmplY3QuZ3JpZEluaXRpYWxWYWx1ZXMpO1xyXG4gICAgICB9XHJcbiAgICAgIGVsc2VcclxuICAgICAge1xyXG4gICAgICAgIGlmIChvYmplY3QucGFyYW1Db25maWcuREVCVUdfRkxBRykgY29uc29sZS5sb2coXCJ0ZXN0NDpvYmplY3QubWFzdGVyS2V5TmFtZTpcIiwgb2JqZWN0Lm1hc3RlcktleU5hbWUsIG9iamVjdC5tYXN0ZXJLZXkpO1xyXG4gICAgICAgIGlmIChvYmplY3QubWFzdGVyS2V5TmFtZSAhPSBcIlwiICYmICBvYmplY3QubWFzdGVyS2V5ICE9IFwiXCIpe1xyXG4gICAgICAgICAgb2JqZWN0LmdyaWRJbml0aWFsVmFsdWVzW29iamVjdC5tYXN0ZXJLZXlOYW1lXSA9IG9iamVjdC5tYXN0ZXJLZXk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChvYmplY3QucGFyYW1Db25maWcuREVCVUdfRkxBRykgY29uc29sZS5sb2coXCJ0ZXN0NDI6b2JqZWN0LmdyaWRJbml0aWFsVmFsdWVzOjI6XCIsIG9iamVjdC5ncmlkSW5pdGlhbFZhbHVlcyk7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKG9iamVjdC5wYXJhbUNvbmZpZy5ERUJVR19GTEFHKSBjb25zb2xlLmxvZyhcInRlc3Q0MjpvYmplY3QuZ3JpZEluaXRpYWxWYWx1ZXM6XCIsIG9iamVjdC5ncmlkSW5pdGlhbFZhbHVlcyk7XHJcbiAgICAgIG9iamVjdC5jbG9zZUVkaXRvcigpO1xyXG4gICAgICBvYmplY3QuZm9ybUdyb3VwID0gb2JqZWN0LmNyZWF0ZUZvcm1Hcm91cEdyaWQoXHJcbiAgICAgICAgb2JqZWN0LmdyaWRJbml0aWFsVmFsdWVzXHJcbiAgICAgICk7XHJcbiAgICAgIG9iamVjdC5mb3JtR3JvdXAuc2V0RXJyb3JzKHtcclxuICAgICAgICBub3RVbmlxdWU6IHRydWVcclxuICAgICAgfSk7XHJcbiAgICAgIGlmIChvYmplY3QucGFyYW1Db25maWcuREVCVUdfRkxBRykgY29uc29sZS5sb2coXCJvYmplY3QuZm9ybUdyb3VwOlwiLCBvYmplY3QuZm9ybUdyb3VwKVxyXG4gICAgICBvYmplY3QuaXNOZXcgPSB0cnVlO1xyXG4gICAgICBvYmplY3QuZ3JpZC5hZGRSb3cob2JqZWN0LmZvcm1Hcm91cCk7XHJcbiAgICAgIC8vdGhpcy5zZXRQcmltYXJLZXlOYW1lQXJyKG9iamVjdCwgZmFsc2UpO1xyXG4gICAgICB9XHJcbiAgXHJcbiAgICBwdWJsaWMgcmVtb3ZlSGFuZGxlcl9ncmlkKHNlbmRlcjphbnksIG9iamVjdDphbnkpIHtcclxuICAgICAgLy9zZW5kZXIuY2FuY2VsQ2VsbCgpO1xyXG4gICAgICBsZXQgcGFyYW1Db25maWcgPSBnZXRQYXJhbUNvbmZpZygpO1xyXG4gICAgaWYgKG9iamVjdC5wYXJhbUNvbmZpZy5ERUJVR19GTEFHKSBjb25zb2xlLmxvZyhcInJlbW92ZUhhbmRsZXJfZ3JpZCBwYXJhbUNvbmZpZzpvYmplY3QuaXNNYXN0ZXIgXCIgKyBvYmplY3QuaXNNYXN0ZXIpO1xyXG4gICAgICBpZiAob2JqZWN0LnBhcmFtQ29uZmlnLkRFQlVHX0ZMQUcpIGNvbnNvbGUubG9nKHBhcmFtQ29uZmlnKTtcclxuICAgIGlmICgocGFyYW1Db25maWcuY2hpbGRSZWNvcmRzICE9IDApICYmIChvYmplY3QuaXNNYXN0ZXIgPT0gdHJ1ZSkpIHtcclxuICAgICAgICBsZXQgZGlhbG9nU3RydWMgPSB7XHJcbiAgICAgICAgICBtc2c6IHRoaXMuZGVsZXRlRGV0YWlsTXNnLFxyXG4gICAgICAgIHRpdGxlOiBcIldhcm5pbmdcIixcclxuICAgICAgICAgIGluZm86IG51bGwsXHJcbiAgICAgICAgb2JqZWN0OiBvYmplY3QsXHJcbiAgICAgICAgYWN0aW9uOiB0aGlzLk9rQWN0aW9ucyxcclxuICAgICAgICBjYWxsYmFjazogbnVsbFxyXG4gICAgICB9O1xyXG4gICAgICAgICAgdGhpcy5zaG93Q29uZmlybWF0aW9uKGRpYWxvZ1N0cnVjKTtcclxuICAgICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG4gICAgaWYgKG9iamVjdC5wYXJhbUNvbmZpZy5ERUJVR19GTEFHKSBjb25zb2xlLmxvZyhcIm9iamVjdC5lZGl0ZWRSb3dJbmRleCA6XCIsIG9iamVjdC5lZGl0ZWRSb3dJbmRleCwgb2JqZWN0LmdyaWQuZGF0YS5kYXRhKVxyXG4gICAgaWYgKHR5cGVvZiBvYmplY3QuZWRpdGVkUm93SW5kZXggIT09IFwidW5kZWZpbmVkXCIpIHtcclxuICAgICAgbGV0IE5ld1ZhbDphbnkgPSB7fTtcclxuICAgICAgICAvL2xldCBncmlkX2RhdGEgPSBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KG9iamVjdC5ncmlkLmRhdGEpKTtcclxuICAgICAgICBsZXQgZ3JpZF9kYXRhID0gb2JqZWN0LmdyaWQuZGF0YTtcclxuICAgICAgICBpZiAob2JqZWN0LnBhcmFtQ29uZmlnLkRFQlVHX0ZMQUcpIGNvbnNvbGUubG9nKFwib2JqZWN0LmVkaXRlZFJvd0luZGV4IDpcIiwgZ3JpZF9kYXRhKVxyXG5cclxuICAgICAgTmV3VmFsID0gZ3JpZF9kYXRhLmRhdGFbb2JqZWN0LmVkaXRlZFJvd0luZGV4XTtcclxuICAgICAgICBsZXQgY3VyQ01EID0gTmV3VmFsW1wiX1FVRVJZXCJdO1xyXG4gICAgICAgIGlmIChvYmplY3QucGFyYW1Db25maWcuREVCVUdfRkxBRykgY29uc29sZS5sb2coXCJjaGVjazpOZXdWYWw6X1FVRVJZXCIsIE5ld1ZhbFtcIl9RVUVSWVwiXSlcclxuICAgICAgbGV0IHJlc3VsdDEgPSBvYmplY3Quc3RhclNlcnZpY2VzLnJlbW92ZVJlYyhvYmplY3QuZ3JpZC5kYXRhLCBvYmplY3QuZWRpdGVkUm93SW5kZXgpO1xyXG4gICAgICAgIG9iamVjdC5ncmlkLmRhdGEgPSByZXN1bHQxO1xyXG4gICAgICAgIGlmIChvYmplY3QucGFyYW1Db25maWcuREVCVUdfRkxBRykgY29uc29sZS5sb2coXCJjaGVjazpOZXdWYWw6XCIsIE5ld1ZhbClcclxuXHJcbiAgICAgICAgTmV3VmFsW1wiX1FVRVJZXCJdID0gb2JqZWN0LmRlbGV0ZUNNRDtcclxuICAgICAgaWYgKGN1ckNNRCAhPSBvYmplY3QuaW5zZXJ0Q01EKSB7XHJcbiAgICAgICAgICBvYmplY3QuYWRkVG9Cb2R5KE5ld1ZhbCk7XHJcbiAgICAgICAgICBvYmplY3QucmVtb3ZlZFJlYy5wdXNoKE5ld1ZhbCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgfVxyXG4gICAgICBlbHNlXHJcbiAgICAgICAgb2JqZWN0LmNhbmNlbEhhbmRsZXIoKTtcclxuXHJcblxyXG4gICAgfVxyXG4gICAgcHVibGljIHNhdmVDdXJyZW50X2dyaWQob2JqZWN0OmFueSk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMucGFyYW1Db25maWcuREVCVUdfRkxBRykgY29uc29sZS5sb2coXCJzYXZlQ3VycmVudF9ncmlkOm9iamVjdC5mb3JtR3JvdXA6XCIsIG9iamVjdC5mb3JtR3JvdXApO1xyXG5cclxuXHJcbiAgICBpZiAob2JqZWN0LmZvcm1Hcm91cCkge1xyXG4gICAgICBpZiAodGhpcy5wYXJhbUNvbmZpZy5ERUJVR19GTEFHKSBjb25zb2xlLmxvZyhcInNhdmVDdXJyZW50X2dyaWQ6b2JqZWN0LmZvcm1Hcm91cDpcIiwgb2JqZWN0LmZvcm1Hcm91cCk7XHJcbiAgICAgIGxldCBOZXdWYWw6YW55ID0ge307XHJcbiAgICAgICAgICBOZXdWYWwgPSBPYmplY3QuYXNzaWduKHt9LCBvYmplY3QuZm9ybUdyb3VwLnZhbHVlKTtcclxuICAgICAgaWYgKHRoaXMucGFyYW1Db25maWcuREVCVUdfRkxBRykgY29uc29sZS5sb2coJ2NoZWNrOmRpcnR5IDonLCBvYmplY3QuZm9ybUdyb3VwLmRpcnR5LCBcIiBpc05ldzpcIiwgb2JqZWN0LmlzTmV3LCBcIiBOZXdWYWw6IFwiLCBOZXdWYWwpO1xyXG4gICAgICBpZiAob2JqZWN0LmZvcm1Hcm91cC5kaXJ0eSA9PT0gdHJ1ZSkge1xyXG4gICAgICAgIGlmIChvYmplY3QuaXNOZXcgPT0gdHJ1ZSkge1xyXG4gICAgICAgICAgaWYgKHRoaXMucGFyYW1Db25maWcuREVCVUdfRkxBRykgY29uc29sZS5sb2coXCJoZXJlMSBOZXdWYWxcIiwgTmV3VmFsKTtcclxuICAgICAgICAgICAgICAgLy9sZXQgcmVzdWx0ID0gb2JqZWN0LnN0YXJTZXJ2aWNlcy5hZGRSZWMob2JqZWN0LmdyaWQuZGF0YSwgTmV3VmFsKSA7XHJcbiAgICAgICAgICAgICAvLyBvYmplY3QuZ3JpZC5kYXRhID0gcmVzdWx0O1xyXG4gICAgICAgICAgICAgIGlmICh0aGlzLnBhcmFtQ29uZmlnLkRFQlVHX0ZMQUcpIGNvbnNvbGUubG9nKG9iamVjdC5ncmlkLmRhdGEpO1xyXG5cclxuICAgICAgICAgICAgICBpZiAob2JqZWN0LmdyaWQuZGF0YSA9PSBudWxsIHx8IHR5cGVvZiBvYmplY3QuZ3JpZC5kYXRhLmRhdGEgPT0gXCJ1bmRlZmluZWRcIilcclxuICAgICAgICAgICAgb2JqZWN0LmdyaWQuZGF0YSA9IHsgZGF0YTogW10sIHRvdGFsOiAwIH07XHJcbiAgICAgICAgICAgICAgLy9vYmplY3QuZ3JpZC5kYXRhLmRhdGEucHVzaChOZXdWYWwpO1xyXG4gICAgICAgICAgb2JqZWN0LmdyaWQuZGF0YS5kYXRhLnNwbGljZSgwLCAwLCBOZXdWYWwpO1xyXG4gICAgICAgICAgICAgIE5ld1ZhbFtcIl9RVUVSWVwiXSA9IG9iamVjdC5pbnNlcnRDTUQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuXHJcbiAgICAgICAgICBpZiAodGhpcy5wYXJhbUNvbmZpZy5ERUJVR19GTEFHKSBjb25zb2xlLmxvZygnY2hlY2s6b2JqZWN0LmdyaWQuZGF0YTonLCBvYmplY3QuZ3JpZC5kYXRhLCBcIiBOZXdWYWw6XCIsIE5ld1ZhbCk7XHJcbiAgICAgICAgICAgICAgLy9OZXdWYWwgPSB0aGlzLnBhcnNlVG9EYXRlKE5ld1ZhbCk7XHJcbiAgICAgICAgICBpZiAob2JqZWN0LmdyaWQuZGF0YS5kYXRhW29iamVjdC5lZGl0ZWRSb3dJbmRleF0uX1FVRVJZID09IG9iamVjdC5pbnNlcnRDTUQpIHtcclxuICAgICAgICAgICAgICAgIE5ld1ZhbFtcIl9RVUVSWVwiXSA9IG9iamVjdC5pbnNlcnRDTUQ7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBOZXdWYWxbXCJfUVVFUllcIl0gPSBvYmplY3QudXBkYXRlQ01EO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICBvYmplY3QuZ3JpZC5kYXRhLmRhdGFbb2JqZWN0LmVkaXRlZFJvd0luZGV4XSA9IE5ld1ZhbDtcclxuICAgICAgICAgICAgICAvL2xldCByZXN1bHQxID0gb2JqZWN0LnN0YXJTZXJ2aWNlcy51cGRhdGVSZWMob2JqZWN0LmdyaWQuZGF0YSAsIG9iamVjdC5lZGl0ZWRSb3dJbmRleCwgTmV3VmFsICk7XHJcbiAgICAgICAgICAgICAgLy9vYmplY3QuZ3JpZC5kYXRhID0gcmVzdWx0MTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvL29iamVjdC5hZGRUb0JvZHkoTmV3VmFsKTsgLy8gYWRkVG9Cb2R5IHdpbGwgYmUgZG9uZSBhdCBzYXZlQ2hhbmdlc19ncmlkIHRvIGF2b2lkIGR1cGxpY3RlIHVwZGF0ZSBzaW5jZSBvYmplY3QuZ3JpZC5kYXRhLmRhdGEgaXMgZ2V0dGluZyB1cGRhdGVkXHJcbiAgICAgICAgaWYgKHRoaXMucGFyYW1Db25maWcuREVCVUdfRkxBRykgY29uc29sZS5sb2cob2JqZWN0LmdyaWQuZGF0YSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBpZiAodGhpcy5wYXJhbUNvbmZpZy5ERUJVR19GTEFHKSBjb25zb2xlLmxvZyhcInByZSBjbG9zZVwiKVxyXG4gICAgICAgICAgb2JqZWN0LmNsb3NlRWRpdG9yKCk7XHJcbiAgICAgICAgICBpZiAodGhpcy5wYXJhbUNvbmZpZy5ERUJVR19GTEFHKSBjb25zb2xlLmxvZyhcInBvc3QgY2xvc2VcIilcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgcHVibGljIGNsb3NlRWRpdG9yX2dyaWQob2JqZWN0KTogdm9pZCB7XHJcbiAgICAvL2NvbnNvbGUubG9nKFwib2JqZWN0LmZvcm1Hcm91cDpjbG9zZUVkaXRvcl9ncmlkXCIpXHJcbiAgICAgIG9iamVjdC5ncmlkLmNsb3NlUm93KG9iamVjdC5lZGl0ZWRSb3dJbmRleCk7XHJcbiAgICAgIG9iamVjdC5pc05ldyA9IGZhbHNlO1xyXG4gICAgICBvYmplY3QuZWRpdGVkUm93SW5kZXggPSB1bmRlZmluZWQ7XHJcbiAgICAgIG9iamVjdC5mb3JtR3JvdXAgPSB1bmRlZmluZWQ7XHJcblxyXG4gICAgLy8gZ3JpZC5jYW5jZWw7XHJcbiAgICAvLyBvYmplY3QuZ3JpZC5kYXRhID0gbnVsbDtcclxuICAgIC8vIG9iamVjdC5jbGVhckNvbXBsZXRlZE91dHB1dC5lbWl0KG9iamVjdC5mb3JtSW5pdGlhbFZhbHVlcyk7XHJcbiAgICB9XHJcbiAgcHVibGljIGNhbmNlbEhhbmRsZXJfZ3JpZChvYmplY3Q6YW55KTogdm9pZCB7XHJcbiAgICAgIG9iamVjdC5jbG9zZUVkaXRvcigpO1xyXG4gICAgICBvYmplY3QuaXNTZWFyY2ggPSBmYWxzZTtcclxuICAgICAgdGhpcy5oZWxwTXNnX2dyaWQgPSBcIlwiO1xyXG4gICAgfVxyXG4gIHB1YmxpYyBzYXZlQ2hhbmdlc19ncmlkX2luVHJhbnMoZ3JpZDphbnksIG9iamVjdDphbnksIE5ld1ZhbDphbnkpIHtcclxuICAgICAgdGhpcy5jb21taXRCb2R5LnB1c2goTmV3VmFsKTtcclxuICAgIGlmIChvYmplY3QuaXNDaGlsZCA9PSB0cnVlKSB7XHJcbiAgICAgICAgbGV0IGdyaWRSZWNvcmRzID0gb2JqZWN0LmdyaWQuZGF0YS5kYXRhLmxlbmd0aDtcclxuICAgICAgICBsZXQgcGFyYW1Db25maWcgPSB7XHJcbiAgICAgICAgICBcIk5hbWVcIjogXCJjaGlsZFJlY29yZHNcIixcclxuICAgICAgICAgIFwiVmFsXCI6IGdyaWRSZWNvcmRzXHJcbiAgICAgICAgfTtcclxuICAgICAgICBzZXRQYXJhbUNvbmZpZyhwYXJhbUNvbmZpZyk7XHJcbiAgICAgIH1cclxuICAgICAgXHJcbiAgICBpZiAodHlwZW9mIG9iamVjdC5jYWxsQmFja1Bvc3RfU2F2ZSAhPT0gXCJ1bmRlZmluZWRcIikge1xyXG4gICAgICBsZXQgTmV3VmFsMTphbnkgPSBbXTtcclxuICAgICAgICAgICAgTmV3VmFsMS5wdXNoKE5ld1ZhbCk7XHJcbiAgICAgICAgb2JqZWN0LmNhbGxCYWNrUG9zdF9TYXZlLmFwcGx5KG9iamVjdCwgTmV3VmFsMSk7XHJcbiAgICAgIH1cclxuICAgICAgdGhpcy5zZXRQcmltYXJLZXlOYW1lQXJyKG9iamVjdCwgdHJ1ZSk7XHJcbiAgICAgIG9iamVjdC5zYXZlQ29tcGxldGVkT3V0cHV0LmVtaXQoTmV3VmFsKTtcclxuICAgIC8vb2JqZWN0LnNhdmVDb21wbGV0ZWRPdXRwdXQuZW1pdChvYmplY3QuZ3JpZC5kYXRhKTtcclxuICAgIH1cclxuICBwdWJsaWMgc2F2ZUNoYW5nZXNfZ3JpZChncmlkOiBhbnksIG9iamVjdDphbnkpOiB2b2lkIHtcclxuICAgIGlmICgob2JqZWN0LmdyaWQuZGF0YSA9PSBudWxsKSB8fCAodHlwZW9mIG9iamVjdC5ncmlkLmRhdGEuZGF0YSA9PSBcInVuZGVmaW5lZFwiKSkge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG4gICAgICBsZXQgRXJyb3IgPSBmYWxzZTtcclxuICAgIGlmICh0aGlzLnBhcmFtQ29uZmlnLkRFQlVHX0ZMQUcpIGNvbnNvbGUubG9nKFwicHJlIG9iamVjdC5zYXZlQ3VycmVudFwiKTtcclxuICAgICAgb2JqZWN0LnNhdmVDdXJyZW50KCk7XHJcblxyXG4gICAgaWYgKG9iamVjdC5jb21wb25lbnRDb25maWcucm91dGluZUF1dGggIT0gbnVsbCkge1xyXG4gICAgICBpZiAodGhpcy5wYXJhbUNvbmZpZy5ERUJVR19GTEFHKSBjb25zb2xlLmxvZyhcImF1dGhMZXZlbDpcIiArIG9iamVjdC5jb21wb25lbnRDb25maWcucm91dGluZUF1dGguYXV0aExldmVsKTtcclxuICAgICAgaWYgKG9iamVjdC5jb21wb25lbnRDb25maWcucm91dGluZUF1dGguYXV0aExldmVsICE9IDIpIHtcclxuICAgICAgICAgIGxldCBkaWFsb2dTdHJ1YyA9IHtcclxuICAgICAgICAgICAgbXNnOiB0aGlzLnJlYWRPbmx5TXNnLFxyXG4gICAgICAgICAgdGl0bGU6IFwiV2FybmluZ1wiLFxyXG4gICAgICAgICAgICBpbmZvOiBudWxsLFxyXG4gICAgICAgICAgb2JqZWN0OiBvYmplY3QsXHJcbiAgICAgICAgICBhY3Rpb246IHRoaXMuT2tBY3Rpb25zLFxyXG4gICAgICAgICAgY2FsbGJhY2s6IG51bGxcclxuICAgICAgICB9O1xyXG4gICAgICAgICAgICB0aGlzLnNob3dDb25maXJtYXRpb24oZGlhbG9nU3RydWMpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICBsZXQgTmV3VmFsID0gW107XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IG9iamVjdC5ncmlkLmRhdGEuZGF0YS5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIGlmICh0aGlzLnBhcmFtQ29uZmlnLkRFQlVHX0ZMQUcpIGNvbnNvbGUubG9nKFwiY2hlY2s6IG9iamVjdC5ncmlkLmRhdGEuZGF0YVtpXS5fUVVFUlk6XCIsIG9iamVjdC5ncmlkLmRhdGEuZGF0YVtpXS5fUVVFUlkpXHJcbiAgICAgIGlmICh0eXBlb2Ygb2JqZWN0LmdyaWQuZGF0YS5kYXRhW2ldLl9RVUVSWSAhPSBcInVuZGVmaW5lZFwiKSB7XHJcbiAgICAgICAgICAgIE5ld1ZhbCA9IG9iamVjdC5ncmlkLmRhdGEuZGF0YVtpXTtcclxuICAgICAgICAgIG9iamVjdC5hZGRUb0JvZHkoTmV3VmFsKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgaWYgKHRoaXMuaW5UcmFucykge1xyXG4gICAgICAgIHRoaXMuc2F2ZUNoYW5nZXNfZ3JpZF9pblRyYW5zKGdyaWQsIG9iamVjdCwgTmV3VmFsKTtcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH1cclxuICAgICAgaWYgKHRoaXMucGFyYW1Db25maWcuREVCVUdfRkxBRykgY29uc29sZS5sb2coXCJjaGVjazogb2JqZWN0LkJvZHk6XCIsIG9iamVjdC5Cb2R5KTtcclxuICAgIGlmIChvYmplY3QuQm9keS5sZW5ndGggIT0gMCkge1xyXG4gICAgICBsZXQgUGFnZSA9IFwiJl90cmFucz1ZXCI7XHJcbiAgICAgIHRoaXMucG9zdChvYmplY3QsIFBhZ2UsIG9iamVjdC5Cb2R5KS5zdWJzY3JpYmUoUGFnZSA9PiB7XHJcbiAgICAgICAgb2JqZWN0LkJvZHkgPSBbXTtcclxuICAgICAgICAvL29iamVjdC5zYXZlQ29tcGxldGVkT3V0cHV0LmVtaXQob2JqZWN0LmdyaWQuZGF0YSk7XHJcbiAgICAgICAgb2JqZWN0LnNhdmVDb21wbGV0ZWRPdXRwdXQuZW1pdChOZXdWYWwpO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSBvYmplY3QuZ3JpZC5kYXRhLmRhdGEubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcclxuICAgICAgICAgIGlmICh0eXBlb2Ygb2JqZWN0LmdyaWQuZGF0YS5kYXRhW2ldLl9RVUVSWSAhPSBcInVuZGVmaW5lZFwiKSB7XHJcbiAgICAgICAgICAgICAgb2JqZWN0LmdyaWQuZGF0YS5kYXRhW2ldLl9RVUVSWV9ET05FID0gb2JqZWN0LmdyaWQuZGF0YS5kYXRhW2ldLl9RVUVSWTtcclxuICAgICAgICAgICAgICBkZWxldGUgb2JqZWN0LmdyaWQuZGF0YS5kYXRhW2ldLl9RVUVSWTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgaWYgKHRoaXMucGFyYW1Db25maWcuREVCVUdfRkxBRykgY29uc29sZS5sb2coXCJjaGVjazogb2JqZWN0LmdyaWQuZGF0YS5kYXRhW2ldLl9RVUVSWTpcIiwgb2JqZWN0LmdyaWQuZGF0YS5kYXRhW2ldLl9RVUVSWSlcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICBpZiAodGhpcy5wYXJhbUNvbmZpZy5ERUJVR19GTEFHKSBjb25zb2xlLmxvZyhcIm9iamVjdC5ncmlkLmRhdGEuZGF0YTpcIiwgb2JqZWN0LmdyaWQuZGF0YS5kYXRhKVxyXG4gICAgICAgICAgaWYgKHRoaXMucGFyYW1Db25maWcuREVCVUdfRkxBRykgY29uc29sZS5sb2coXCJvYmplY3QuZ3JpZC5kYXRhLmRhdGE6Lmxlbmd0aFwiLCBvYmplY3QuZ3JpZC5kYXRhLmRhdGEubGVuZ3RoKVxyXG4gICAgICAgIGlmIChvYmplY3QuaXNDaGlsZCA9PSB0cnVlKSB7XHJcbiAgICAgICAgICAgIGxldCBncmlkUmVjb3JkcyA9IG9iamVjdC5ncmlkLmRhdGEuZGF0YS5sZW5ndGg7XHJcbiAgICAgICAgICAgIGxldCBwYXJhbUNvbmZpZyA9IHtcclxuICAgICAgICAgICAgICBcIk5hbWVcIjogXCJjaGlsZFJlY29yZHNcIixcclxuICAgICAgICAgICAgICBcIlZhbFwiOiBncmlkUmVjb3Jkc1xyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICBzZXRQYXJhbUNvbmZpZyhwYXJhbUNvbmZpZyk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5zaG93Tm90aWZpY2F0aW9uKCdzdWNjZXNzJywgXCJEYXRhIHNhdmVkIHN1Y2Nlc3NmdWxseVwiKTtcclxuICAgICAgICBpZiAodHlwZW9mIG9iamVjdC5jYWxsQmFja1Bvc3RfU2F2ZSAhPT0gXCJ1bmRlZmluZWRcIikge1xyXG4gICAgICAgICAgbGV0IE5ld1ZhbDE6YW55ID0gW107XHJcbiAgICAgICAgICAgICAgICBOZXdWYWwxLnB1c2goTmV3VmFsKTtcclxuICAgICAgICAgICAgb2JqZWN0LmNhbGxCYWNrUG9zdF9TYXZlLmFwcGx5KG9iamVjdCwgTmV3VmFsMSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICB0aGlzLnNldFByaW1hcktleU5hbWVBcnIob2JqZWN0LCB0cnVlKTtcclxuICAgICAgICAvLyBpZiAob2JqZWN0LmRpYWJsZUVtaXRTYXZlID09IHRydWUpIFxyXG4gICAgICAgIC8vICAgICB7fVxyXG4gICAgICAgIC8vICAgZWxzZVxyXG4gICAgICAgIC8vb2JqZWN0LnNhdmVDb21wbGV0ZWRPdXRwdXQuZW1pdChvYmplY3QuZ3JpZC5kYXRhKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGVyciA9PiB7XHJcbiAgICAgICAgICBmb3IgKGxldCBpID0gb2JqZWN0LkJvZHkubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcclxuICAgICAgICAgICAgaWYgKG9iamVjdC5Cb2R5W2ldLl9RVUVSWSAhPSBvYmplY3QuZGVsZXRlQ01EKSB7XHJcbiAgICAgICAgICAgICAgb2JqZWN0LkJvZHkuc3BsaWNlKGksIDEpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBpZiAodGhpcy5wYXJhbUNvbmZpZy5ERUJVR19GTEFHKSBjb25zb2xlLmxvZyhcImVycjpcIiwgZXJyKVxyXG4gICAgICAgICAgbGV0IGVyck1zZyA9IHRoaXMuZ2V0RXJyb3JNc2coZXJyKTtcclxuICAgICAgICAgIHRoaXMuc2hvd05vdGlmaWNhdGlvbihcImVycm9yXCIsIFwiZXJyb3I6XCIgKyBlcnJNc2cpO1xyXG4gICAgICAgICAgRXJyb3IgPSB0cnVlO1xyXG4gICAgICAgIH0pO1xyXG4gICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICAgIGlmICh0aGlzLnBhcmFtQ29uZmlnLkRFQlVHX0ZMQUcpIGNvbnNvbGUubG9nKFwib2JqZWN0LmlzTWFzdGVyOlwiICsgb2JqZWN0LmlzTWFzdGVyKTtcclxuICAgICAgICBpZiAoIW9iamVjdC5pc01hc3RlcilcclxuICAgICAgICB0aGlzLnNob3dOb3RpZmljYXRpb24oJ3dhcm5pbmcnLCBcIk5vIGNoYW5nZXMgdG8gc2F2ZVwiKTtcclxuICAgICAgfVxyXG4gICAgICAgIGlmICghRXJyb3Ipe1xyXG4gICAgICAgICAgb2JqZWN0LnNhdmVDb21wbGV0ZWRPdXRwdXQuZW1pdChOZXdWYWwpO1xyXG4gICAgICAgICAgLy9vYmplY3Quc2F2ZUNvbXBsZXRlZE91dHB1dC5lbWl0KG9iamVjdC5ncmlkLmRhdGEpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICBwdWJsaWMgZ2V0RXJyb3JNc2coZXJyOmFueSlcclxuICAgIHtcclxuICAgICAgbGV0IGVyck1zZyA9IFwiXCI7XHJcbiAgICAgIFxyXG4gICAgICBpZiAodHlwZW9mIGVyci5lcnJvci5lcnJvciAhPSBcInVuZGVmaW5lZFwiKXtcclxuICAgICAgICBlcnJNc2cgPSBlcnIuZXJyb3IuZXJyb3I7XHJcbiAgICAgIH1cclxuICAgICAgZWxzZVxyXG4gICAgICAgIGVyck1zZyA9IGVyci5lcnJvcjtcclxuXHJcbiAgICAgICAgcmV0dXJuIGVyck1zZztcclxuXHJcbiAgICB9XHJcblxyXG5cclxuXHJcbiAgcHVibGljIGV4ZWN1dGVRdWVyeV9ncmlkKGdyaWQ6IGFueSwgb2JqZWN0OmFueSk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMucGFyYW1Db25maWcuREVCVUdfRkxBRykgY29uc29sZS5sb2coXCJvYmplY3QuZ3JpZDpcIiwgb2JqZWN0LmdyaWQpXHJcbiAgICAgICAgaWYgKHR5cGVvZiBncmlkID09IFwidW5kZWZpbmVkXCIgfHwgdHlwZW9mIG9iamVjdC5ncmlkID09IFwidW5kZWZpbmVkXCIpXHJcbiAgICAgICAgcmV0dXJuO1xyXG5cclxuICAgICAgbGV0IGRpcnR5ID0gZmFsc2U7XHJcbiAgICAgIC8vaWYgKHRoaXMucGFyYW1Db25maWcuREVCVUdfRkxBRykgY29uc29sZS5sb2cgKFwiZXhlY3V0ZVF1ZXJ5X2dyaWQ6XCIgKyBvYmplY3QuQm9keS5sZW5ndGggKyBcIiBcIiArIG9iamVjdC5ncmlkLmlzRWRpdGluZygpLCBcIm9iamVjdC5Cb2R5OlwiLG9iamVjdC5Cb2R5KTtcclxuICAgICAgLy9pZiAodGhpcy5wYXJhbUNvbmZpZy5ERUJVR19GTEFHKSBjb25zb2xlLmxvZyhcIm9iamVjdC5Cb2R5OlwiLG9iamVjdC5Cb2R5KVxyXG4gICAgICBpZiAoKG9iamVjdC5Cb2R5Lmxlbmd0aCAhPSAwKSB8fCBvYmplY3QuZ3JpZC5pc0VkaXRpbmcoKSA9PSB0cnVlKVxyXG4gICAgICB7XHJcbiAgICAgICAgZGlydHkgPSB0cnVlO1xyXG4gICAgICB9XHJcbiAgICBpZiAoZGlydHkgPT0gdHJ1ZSkge1xyXG4gICAgICAgIGxldCBkaWFsb2dTdHJ1YyA9IHtcclxuICAgICAgICAgIG1zZzogdGhpcy5zYXZlQ2hhbmdlc01zZyxcclxuICAgICAgICB0aXRsZTogdGhpcy5wbGVhc2VDb25maXJtTXNnLFxyXG4gICAgICAgICAgaW5mbzogZ3JpZCxcclxuICAgICAgICBvYmplY3Q6IG9iamVjdCxcclxuICAgICAgICBhY3Rpb246IHRoaXMuWWVzTm9BY3Rpb25zLFxyXG4gICAgICAgIGNhbGxiYWNrOiB0aGlzLmV4ZWN1dGVRdWVyeUFjdF9ncmlkXHJcbiAgICAgIH07XHJcbiAgICAgICAgICB0aGlzLnNob3dDb25maXJtYXRpb24oZGlhbG9nU3RydWMpO1xyXG4gICAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgdGhpcy5leGVjdXRlUXVlcnlBY3RfZ3JpZChncmlkLCBvYmplY3QpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgcHVibGljIGV4ZWN1dGVRdWVyeUFjdF9ncmlkKGdyaWQ6IGFueSwgb2JqZWN0OmFueSk6IHZvaWQge1xyXG4gICAgICBsZXQgcGFyYW1Db25maWcgPSB7XHJcbiAgICAgICAgXCJOYW1lXCI6IFwiY2hpbGRSZWNvcmRzXCIsXHJcbiAgICAgICAgXCJWYWxcIjogMFxyXG4gICAgICB9O1xyXG4gICAgICBzZXRQYXJhbUNvbmZpZyhwYXJhbUNvbmZpZyk7XHJcbiAgICAgIGlmIChvYmplY3QucGFyYW1Db25maWcuREVCVUdfRkxBRykgY29uc29sZS5sb2coXCJvYmplY3QubWFzdGVyS2V5TmFtZTpcIiArIG9iamVjdC5tYXN0ZXJLZXlOYW1lLCBvYmplY3QubWFzdGVyS2V5QXJyKTtcclxuICAgIGlmIChvYmplY3QucGFyYW1Db25maWcuREVCVUdfRkxBRykgY29uc29sZS5sb2coXCJvYmplY3QuaXNDaGlsZDpcIiwgb2JqZWN0LmlzQ2hpbGQsIFwiIG9iamVjdC5pc1NlYXJjaCA6XCIsIG9iamVjdC5pc1NlYXJjaClcclxuICAgIGlmIChvYmplY3QuaXNDaGlsZCA9PSB0cnVlKSB7XHJcbiAgICAgIGlmIChvYmplY3QuaXNTZWFyY2ggIT0gdHJ1ZSkge1xyXG4gICAgICAgICAgZ3JpZCA9IG9iamVjdC5ncmlkSW5pdGlhbFZhbHVlcztcclxuXHJcbiAgICAgICAgaWYgKCh0eXBlb2Ygb2JqZWN0Lm1hc3RlcktleU5hbWVBcnIgIT0gXCJ1bmRlZmluZWRcIikgJiYgKG9iamVjdC5tYXN0ZXJLZXlOYW1lQXJyLmxlbmd0aCAhPSAwKSkge1xyXG4gICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBvYmplY3QubWFzdGVyS2V5TmFtZUFyci5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgIGxldCBleGlzdHMgPSBvYmplY3QuZ3JpZEluaXRpYWxWYWx1ZXNbb2JqZWN0Lm1hc3RlcktleU5hbWVBcnJbaV1dXHJcbiAgICAgICAgICAgICAgaWYgKHR5cGVvZiBleGlzdHMgIT09IFwidW5kZWZpbmVkXCIpe1xyXG4gICAgICAgICAgICAgIG9iamVjdC5ncmlkSW5pdGlhbFZhbHVlc1tvYmplY3QubWFzdGVyS2V5TmFtZUFycltpXV0gPSBvYmplY3QubWFzdGVyS2V5QXJyW2ldO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBvYmplY3QuZ3JpZEluaXRpYWxWYWx1ZXNbb2JqZWN0Lm1hc3RlcktleU5hbWVdID0gb2JqZWN0Lm1hc3RlcktleTtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAvL2dyaWRbb2JqZWN0Lm1hc3RlcktleU5hbWVdID0gb2JqZWN0Lm1hc3RlcktleTtcclxuICAgICAgICBpZiAob2JqZWN0LnBhcmFtQ29uZmlnLkRFQlVHX0ZMQUcpIGNvbnNvbGUubG9nKFwib2JqZWN0Lm1hc3RlcktleU5hbWU6XCIgKyBvYmplY3QubWFzdGVyS2V5TmFtZSk7XHJcbiAgICAgICAgICBpZiAob2JqZWN0LnBhcmFtQ29uZmlnLkRFQlVHX0ZMQUcpIGNvbnNvbGUubG9nKGdyaWQpO1xyXG4gICAgICAgICAgb2JqZWN0LmlzU2VhcmNoID0gdHJ1ZTtcclxuICAgICAgICAgIGlmIChvYmplY3QucGFyYW1Db25maWcuREVCVUdfRkxBRykgY29uc29sZS5sb2coXCItLS1TZWFyY2hpbmc6XCIpO1xyXG4gICAgICAgICAgaWYgKG9iamVjdC5wYXJhbUNvbmZpZy5ERUJVR19GTEFHKSBjb25zb2xlLmxvZyhncmlkKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICBpZiAob2JqZWN0LnBhcmFtQ29uZmlnLkRFQlVHX0ZMQUcpIGNvbnNvbGUubG9nKCctLS0tLS0tLS0tLS1leGVjdXRlUXVlcnkgb2JqZWN0LmlzU2VhcmNoIDonICsgb2JqZWN0LmlzU2VhcmNoICsgXCIgIG9iamVjdC5pc0NoaWxkOlwiICsgb2JqZWN0LmlzQ2hpbGQpO1xyXG4gICAgICAvLyBpZiAob2JqZWN0LnBhcmFtQ29uZmlnLkRFQlVHX0ZMQUcpIGNvbnNvbGUubG9nKG9iamVjdC5ncmlkKTtcclxuXHJcbiAgICBsZXQgUGFnZSA9IFwiJl9xdWVyeT1cIiArIG9iamVjdC5nZXRDTUQ7XHJcbiAgICBpZiAob2JqZWN0LmlzU2VhcmNoID09IHRydWUpIHtcclxuICAgICAgaWYgKG9iamVjdC5wYXJhbUNvbmZpZy5ERUJVR19GTEFHKSBjb25zb2xlLmxvZygnb2JqZWN0LmZvcm1Hcm91cDonLCBvYmplY3QuZm9ybUdyb3VwLCAndHlwZW9mKGdyaWQpOicsIHR5cGVvZiAoZ3JpZC5kYXRhKSwgJyBncmlkOicsIGdyaWQpXHJcbiAgICAgICAgICBsZXQgTmV3VmFsID0gXCJcIjtcclxuICAgICAgaWYgKHR5cGVvZiBvYmplY3QuZm9ybUdyb3VwID09IFwidW5kZWZpbmVkXCIpIHtcclxuICAgICAgICAgICAgLy8gYSBjaGlsZCBjb21wb25lbnRcclxuICAgICAgICBpZiAob2JqZWN0LnBhcmFtQ29uZmlnLkRFQlVHX0ZMQUcpIGNvbnNvbGUubG9nKCdncmlkOicsIHR5cGVvZiAoZ3JpZC5kYXRhKSk7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBpZiAodHlwZW9mIGdyaWQuZGF0YSA9PSBcIm9iamVjdFwiKVxyXG4gICAgICAgICAgICAgIE5ld1ZhbCA9IGdyaWQuZGF0YTsgLy8gcGFzc2VkIGVtcHR5IGdyaWRcclxuICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgTmV3VmFsID0gZ3JpZDsgLy8gdXNlZCB0aGUgcGFzc2VkIGdyaWQgcGFyYW1cclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAgIE5ld1ZhbCA9IG9iamVjdC5mb3JtR3JvdXAudmFsdWU7XHJcblxyXG4gICAgICAgICAgICBvYmplY3QuaXNTZWFyY2ggPSBmYWxzZTtcclxuICAgICAgaWYgKCh0eXBlb2Ygb2JqZWN0LmZvcm1hdHRlZFdoZXJlID09PSBcInVuZGVmaW5lZFwiKSB8fCAob2JqZWN0LmZvcm1hdHRlZFdoZXJlID09IG51bGwpKSB7XHJcbiAgICAgICAgICAgICAgUGFnZSA9IFBhZ2UgKyBvYmplY3Quc3RhclNlcnZpY2VzLmZvcm1hdFdoZXJlKE5ld1ZhbCk7XHJcblxyXG4gICAgICAgICAgICB9XHJcbiAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgIGlmIChvYmplY3QucGFyYW1Db25maWcuREVCVUdfRkxBRykgY29uc29sZS5sb2coXCJvYmplY3QuZm9ybWF0dGVkV2hlcmVcIiwgb2JqZWN0LmZvcm1hdHRlZFdoZXJlKVxyXG4gICAgICAgICAgICAgIG9iamVjdC5mb3JtYXR0ZWRXaGVyZSA9IHRoaXMucHJvY2Vzc2Zvcm1hdHRlZFdoZXJlKG9iamVjdCwgb2JqZWN0LmZvcm1hdHRlZFdoZXJlKTtcclxuICAgICAgICAgICAgICBQYWdlID0gUGFnZSArIG9iamVjdC5mb3JtYXR0ZWRXaGVyZTtcclxuICAgICAgICAgICAgICBvYmplY3QuZm9ybWF0dGVkV2hlcmUgPSBudWxsO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgIGlmICgodHlwZW9mIG9iamVjdC5PcmRlckJ5Q2xhdXNlICE9PSBcInVuZGVmaW5lZFwiKSAmJiAob2JqZWN0Lk9yZGVyQnlDbGF1c2UgIT0gXCJcIikpXHJcbiAgICAgICAgICAgICAgUGFnZSA9IFBhZ2UgKyBcIiZfT1JERVJCWT1cIiArIG9iamVjdC5PcmRlckJ5Q2xhdXNlO1xyXG5cclxuXHJcbiAgICAgICAgfVxyXG4gICAgICAgIFBhZ2UgPSBlbmNvZGVVUkkoUGFnZSk7XHJcbiAgICAgICAgLy9pZiAob2JqZWN0LnBhcmFtQ29uZmlnLkRFQlVHX0ZMQUcpIGNvbnNvbGUubG9nKCdQYWdlOicgKyBQYWdlKTtcclxuICAgICAgICBvYmplY3QuZ3JpZC5sb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgICBvYmplY3QuY2xvc2VFZGl0b3IoKTtcclxuICAgIG9iamVjdC5leGVjdXRlUXVlcnlyZXN1bHQgPSBbXTtcclxuICAgIG9iamVjdC5leGVjdXRlUXVlcnlyZXN1bHQucmVzdWx0ID0gMDtcclxuICAgICAgICBvYmplY3QuQ3VycmVudFJlYyA9IDA7XHJcbiAgICAgICAgb2JqZWN0LmdyaWQuZGF0YSA9IG51bGw7XHJcbiAgICAgICAgXHJcblxyXG4gICAgb2JqZWN0LnN0YXJTZXJ2aWNlcy5mZXRjaChvYmplY3QsIFBhZ2UpLnN1YnNjcmliZSgocmVzdWx0OmFueSkgPT4ge1xyXG4gICAgICBpZiAocmVzdWx0ICE9IG51bGwpIHtcclxuICAgICAgICAgICAgICBsZXQgYWN0dWFsUmVzdWx0ID0gT2JqZWN0LmFzc2lnbih7fSwgcmVzdWx0LCB7fSlcclxuICAgICAgICAgICAgICBpZiAob2JqZWN0LnBhcmFtQ29uZmlnLkRFQlVHX0ZMQUcpIGNvbnNvbGUubG9nKFwiLS0tLS0tcmVzdWx0LmRhdGFbMF0uZGF0YSA6XCIpO1xyXG4gICAgICAgICAgICAgIC8vaWYgKG9iamVjdC5wYXJhbUNvbmZpZy5ERUJVR19GTEFHKSBjb25zb2xlLmxvZyhyZXN1bHQuZGF0YVswXS5kYXRhKTtcclxuICAgICAgICAgICAgICB0aGlzLmhlbHBNc2dfZ3JpZCA9IFwiXCI7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCByZXN1bHQuZGF0YVswXS5kYXRhLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICByZXN1bHQuZGF0YVswXS5kYXRhW2ldID0gb2JqZWN0LnN0YXJTZXJ2aWNlcy5wYXJzZVRvRGF0ZShyZXN1bHQuZGF0YVswXS5kYXRhW2ldKTtcclxuICAgICAgICAgIGlmIChyZXN1bHQuZGF0YVswXS5kYXRhW2ldLl9RVUVSWSAhPSBcInVuZGVmaW5lZFwiKSB7XHJcbiAgICAgICAgICAgICAgICAgIGRlbGV0ZSByZXN1bHQuZGF0YVswXS5kYXRhW2ldLl9RVUVSWTtcclxuICAgICAgICAgICAgICAgICAgZGVsZXRlIHJlc3VsdC5kYXRhWzBdLmRhdGFbaV0uX1FVRVJZX0RPTkU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIGlmIChvYmplY3QucGFyYW1Db25maWcuREVCVUdfRkxBRykgY29uc29sZS5sb2cocmVzdWx0LmRhdGFbMF0uZGF0YVswXSk7XHJcblxyXG4gICAgICAgIG9iamVjdC5Cb2R5ID0gW107XHJcbiAgICAgICAgcmVzdWx0ID0ge1xyXG4gICAgICAgICAgZGF0YTogcmVzdWx0LmRhdGFbMF0uZGF0YSxcclxuICAgICAgICAgIHRvdGFsOiBwYXJzZUludChyZXN1bHQuZGF0YVswXS5kYXRhLmxlbmd0aCwgMTApXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChvYmplY3QuaXNNYXN0ZXIpXHJcbiAgICAgICAgICBvYmplY3Quc3RhclNlcnZpY2VzLnNob3dOb3RpZmljYXRpb24oJ3N1Y2Nlc3MnLCBcIlJlY29yZHMgcmV0cmlldmVkIDogXCIgKyByZXN1bHQudG90YWwpO1xyXG4gICAgICAgIG9iamVjdC5leGVjdXRlUXVlcnlyZXN1bHQgPSByZXN1bHQ7XHJcbiAgICAgICAgaWYgKG9iamVjdC5pc0NoaWxkID09IHRydWUpIHtcclxuICAgICAgICAgICAgICAgICAgbGV0IHBhcmFtQ29uZmlnID0ge1xyXG4gICAgICAgICAgICAgICAgICAgIFwiTmFtZVwiOiBcImNoaWxkUmVjb3Jkc1wiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiVmFsXCI6IHJlc3VsdC50b3RhbFxyXG4gICAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgICBzZXRQYXJhbUNvbmZpZyhwYXJhbUNvbmZpZyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgb2JqZWN0LmdyaWQubG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICBvYmplY3QuZ3JpZC5kYXRhID0gcmVzdWx0O1xyXG5cclxuICAgICAgaWYgKHR5cGVvZiBvYmplY3QuY2FsbEJhY2tGdW5jdGlvbiAhPT0gXCJ1bmRlZmluZWRcIilcclxuICAgICAgICAgICAgICAgIG9iamVjdC5jYWxsQmFja0Z1bmN0aW9uKHJlc3VsdCk7XHJcblxyXG4gICAgICBpZiAob2JqZWN0LnBhcmFtQ29uZmlnLkRFQlVHX0ZMQUcpIGNvbnNvbGUubG9nKFwiZ3JpZCBzZXJ2aWNlcmVhZENvbXBsZXRlZE91dHB1dFwiKTtcclxuICAgICAgaWYgKG9iamVjdC5wYXJhbUNvbmZpZy5ERUJVR19GTEFHKSBjb25zb2xlLmxvZyhvYmplY3QuZ3JpZC5kYXRhLmRhdGEpO1xyXG4gICAgICAgICAgICBpZiAob2JqZWN0LnBhcmFtQ29uZmlnLkRFQlVHX0ZMQUcpIGNvbnNvbGUubG9nKFwicmVzdWx0IGxlbmd0aDpcIiArIHJlc3VsdC5sZW5ndGgpO1xyXG4gICAgICAgICAgICBpZiAob2JqZWN0LnBhcmFtQ29uZmlnLkRFQlVHX0ZMQUcpIGNvbnNvbGUubG9nKFwicmVzdWx0IHRvdGFsOlwiICsgcmVzdWx0LnRvdGFsKTtcclxuICAgICAgaWYgKG9iamVjdC5wYXJhbUNvbmZpZy5ERUJVR19GTEFHKSBjb25zb2xlLmxvZyhcIm9iamVjdC5wZXJmb3JtUmVhZENvbXBsZXRlZE91dHB1dDpcIiArIG9iamVjdC5wZXJmb3JtUmVhZENvbXBsZXRlZE91dHB1dClcclxuICAgICAgaWYgKCh0eXBlb2Ygb2JqZWN0LnBlcmZvcm1SZWFkQ29tcGxldGVkT3V0cHV0ICE9PSBcInVuZGVmaW5lZFwiKSB8fCAob2JqZWN0LnBlcmZvcm1SZWFkQ29tcGxldGVkT3V0cHV0ID09IGZhbHNlKSkge1xyXG4gICAgICAgICAgICAgIGlmIChvYmplY3QucGFyYW1Db25maWcuREVCVUdfRkxBRykgY29uc29sZS5sb2coXCJoZXJlMVwiKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgIGlmIChvYmplY3QucGFyYW1Db25maWcuREVCVUdfRkxBRykgY29uc29sZS5sb2coXCJoZXJlMlwiKVxyXG4gICAgICAgIGlmIChvYmplY3QuZGlzYWJsZUVtaXRSZWFkQ29tcGxldGVkICE9IHRydWUpIHtcclxuICAgICAgICAgICAgICAgIGlmIChyZXN1bHQudG90YWwgIT0gMClcclxuICAgICAgICAgICAgICAgICAgb2JqZWN0LnJlYWRDb21wbGV0ZWRPdXRwdXQuZW1pdChvYmplY3QuZ3JpZC5kYXRhLmRhdGFbMF0pO1xyXG4gICAgICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICAgICAgICBvYmplY3QucmVhZENvbXBsZXRlZE91dHB1dC5lbWl0KFtdKTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAgIG9iamVjdC5zdGFyU2VydmljZXMuc2V0UHJpbWFyS2V5TmFtZUFycihvYmplY3QsIHRydWUpO1xyXG4gICAgICAgICAgfSxcclxuICAgICAgKGVycjphbnkpID0+IHtcclxuICAgICAgICBvYmplY3QuQm9keSA9IFtdO1xyXG4gICAgICAgICAgICAgICAgb2JqZWN0LmdyaWQubG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgb2JqZWN0LmdyaWQuZGF0YSA9IG51bGw7XHJcbiAgICAgICAgaWYgKG9iamVjdC5wYXJhbUNvbmZpZy5ERUJVR19GTEFHKSBjb25zb2xlLmxvZyhcImVycjpcIiwgZXJyKVxyXG4gICAgICAgIG9iamVjdC5zdGFyU2VydmljZXMuc2hvd05vdGlmaWNhdGlvbihcImVycm9yXCIsIFwiZXJyb3I6XCIgKyBlcnIuZXJyb3IuZXJyb3IuY29kZSk7XHJcbiAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICBvYmplY3QuZG9jQ2xpY2tTdWJzY3JpcHRpb24gPSBvYmplY3QucmVuZGVyZXIubGlzdGVuKCdkb2N1bWVudCcsICdjbGljaycsIG9iamVjdC5vbkRvY3VtZW50Q2xpY2suYmluZChvYmplY3QpKTtcclxuICAgIH1cclxuXHJcblxyXG4gIHB1YmxpYyBlbnRlclF1ZXJ5QWN0X2dyaWQoZ3JpZDogYW55LCBvYmplY3Q6YW55KTogdm9pZCB7XHJcbiAgb2JqZWN0LmdyaWQuY2FuY2VsO1xyXG4gIG9iamVjdC5ncmlkLmRhdGEgPSBudWxsO1xyXG4gICAgb2JqZWN0LkJvZHkgPSBbXTtcclxuXHJcbiAgb2JqZWN0LmlzU2VhcmNoID0gdHJ1ZTtcclxuICBpZiAob2JqZWN0LnBhcmFtQ29uZmlnLkRFQlVHX0ZMQUcpIGNvbnNvbGUubG9nKFwib2JqZWN0LmlzU2VhcmNoOlwiICsgb2JqZWN0LmlzU2VhcmNoKTtcclxuICBvYmplY3QuYWRkSGFuZGxlcigpO1xyXG4gIG9iamVjdC5jbGVhckNvbXBsZXRlZE91dHB1dC5lbWl0KG9iamVjdC5mb3JtSW5pdGlhbFZhbHVlcyk7XHJcbiAgb2JqZWN0LnN0YXJTZXJ2aWNlcy5zZXRQcmltYXJLZXlOYW1lQXJyKG9iamVjdCwgZmFsc2UpO1xyXG4gIG9iamVjdC5zdGFyU2VydmljZXMuaGVscE1zZ19ncmlkID0gIHRoaXMuZ2V0TkxTKFtdLFwiSEVMUF9FTlRFUl9RVUVSWVwiLHRoaXMuZW50ZXJRdWVyeU1zZyk7XHJcblxyXG59XHJcblxyXG4gIHB1YmxpYyBlbnRlclF1ZXJ5X2dyaWQoZ3JpZDogYW55LCBvYmplY3Q6YW55KTogdm9pZCB7XHJcbiAgICBsZXQgZGlydHkgPSBmYWxzZTtcclxuICAgIGlmICh0aGlzLnBhcmFtQ29uZmlnLkRFQlVHX0ZMQUcpIGNvbnNvbGUubG9nKFwicHJlIG9iamVjdC5zYXZlQ3VycmVudFwiKTtcclxuICAgIG9iamVjdC5zYXZlQ3VycmVudCgpO1xyXG4gICAgbGV0IG1vZGlmaWVkID0gZmFsc2U7XHJcbiAgICBpZiAodGhpcy5wYXJhbUNvbmZpZy5ERUJVR19GTEFHKSBjb25zb2xlLmxvZyhcIm9iamVjdC5ncmlkLmRhdGFcIik7XHJcbiAgICBpZiAob2JqZWN0LmdyaWQuZGF0YSAhPSBudWxsKSB7XHJcbiAgICAgIGlmICh0eXBlb2Ygb2JqZWN0LmdyaWQuZGF0YS5kYXRhICE9PSBcInVuZGVmaW5lZFwiKSB7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBvYmplY3QuZ3JpZC5kYXRhLmRhdGEubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgIGlmICh0aGlzLnBhcmFtQ29uZmlnLkRFQlVHX0ZMQUcpIGNvbnNvbGUubG9nKFwiY2hlY2s6IGk6XCIsIGksIFwiIG9iamVjdC5ncmlkLmRhdGEuZGF0YVtpXS5fUVVFUlk6XCIsIG9iamVjdC5ncmlkLmRhdGEuZGF0YVtpXS5fUVVFUlkpXHJcbiAgICAgICAgICBpZiAodHlwZW9mIG9iamVjdC5ncmlkLmRhdGEuZGF0YVtpXS5fUVVFUlkgIT09IFwidW5kZWZpbmVkXCIpIHtcclxuICAgICAgICAgICAgbW9kaWZpZWQgPSB0cnVlO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgaWYgKHRoaXMucGFyYW1Db25maWcuREVCVUdfRkxBRykgY29uc29sZS5sb2coXCJvYmplY3Quc2F2ZUN1cnJlbnQgOlwiICsgb2JqZWN0LkJvZHkubGVuZ3RoICsgXCIgXCIgKyBvYmplY3QuZ3JpZC5pc0VkaXRpbmcoKSk7XHJcbiAgICBpZiAob2JqZWN0LkJvZHkubGVuZ3RoICE9IDApIHtcclxuICAgICAgbW9kaWZpZWQgPSB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICgobW9kaWZpZWQgPT0gdHJ1ZSkgfHwgb2JqZWN0LmdyaWQuaXNFZGl0aW5nKCkgPT0gdHJ1ZSkge1xyXG4gICAgICBkaXJ0eSA9IHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGRpcnR5ID09IHRydWUpIHtcclxuICAgICAgbGV0IGRpYWxvZ1N0cnVjID0ge1xyXG4gICAgICAgIG1zZzogdGhpcy5zYXZlQ2hhbmdlc01zZyxcclxuICAgICAgICB0aXRsZTogdGhpcy5wbGVhc2VDb25maXJtTXNnLFxyXG4gICAgICAgIGluZm86IGdyaWQsXHJcbiAgICAgICAgb2JqZWN0OiBvYmplY3QsXHJcbiAgICAgICAgYWN0aW9uOiB0aGlzLlllc05vQWN0aW9ucyxcclxuICAgICAgICBjYWxsYmFjazogdGhpcy5lbnRlclF1ZXJ5QWN0X2dyaWRcclxuICAgICAgfTtcclxuICAgICAgICB0aGlzLnNob3dDb25maXJtYXRpb24oZGlhbG9nU3RydWMpO1xyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgIHRoaXMuZW50ZXJRdWVyeUFjdF9ncmlkKGdyaWQsIG9iamVjdCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc2V0U3RyQXV0aCh1c2VyOmFueSwgcGFzc3dvcmQ6YW55KSB7XHJcbiAgICB0aGlzLlN0ckF1dGggPSB1c2VyICsgXCI6XCIgKyBwYXNzd29yZDtcclxuICAgIHRoaXMuU3RyQXV0aCA9IGJ0b2EodGhpcy5TdHJBdXRoKTtcclxuICAgIHRoaXMuU3RyQXV0aCA9IFwiQmFzaWMgXCIgKyB0aGlzLlN0ckF1dGg7XHJcbiAgfVxyXG4gIHB1YmxpYyBpc0FTQ0lJKHN0cikge1xyXG4gICAgcmV0dXJuIC9eW1xceDAwLVxceDdGXSokLy50ZXN0KHN0cik7XHJcbiAgfVxyXG4gIHB1YmxpYyBsb2dpbihvYmplY3Q6YW55LCB1c2VyOmFueSwgcGFzc3dvcmQ6YW55KSB7XHJcbiAgICBpZiAoIXRoaXMuaXNBU0NJSSh1c2VyKSl7XHJcbiAgICAgIHRoaXMuc2hvd05vdGlmaWNhdGlvbihcImVycm9yXCIsIFwi2ZBycm9yOiBcIiArIFwiTm90IGEgdmFsaWQgVXNlciBOYW1lXCIpO1xyXG59XHJcbiAgICB0aGlzLnBhcmFtQ29uZmlnID0gZ2V0UGFyYW1Db25maWcoKTtcclxuICAgIC8vY29uc29sZS5sb2coXCJ0aGlzLnBhcmFtQ29uZmlnOlwiLCB0aGlzLnBhcmFtQ29uZmlnKVxyXG4gICAgdGhpcy5zZXRTdHJBdXRoKHVzZXIsIHBhc3N3b3JkKTtcclxuICAgIC8vaWYgKHRoaXMucGFyYW1Db25maWcuREVCVUdfRkxBRykgY29uc29sZS5sb2coXCJ0aGlzLlN0ckF1dGg6XCIgKyB0aGlzLlN0ckF1dGgpO1xyXG5cclxuXHJcbiAgICBsZXQgUGFnZSA9IFwiXCI7XHJcbiAgICBsZXQgc3VjY2VzcyA9IGZhbHNlO1xyXG4gICAgY29uc3QgbWQ1ID0gbmV3IE1kNSgpO1xyXG4gICAgbGV0IHBhc3MgPSBtZDUuYXBwZW5kU3RyKHBhc3N3b3JkKS5lbmQoKTtcclxuICAgIHVzZXIgPSB1c2VyLnRvVXBwZXJDYXNlKCkudHJpbSgpO1xyXG4gICAgdXNlciA9IHVzZXIudHJpbSgpO1xyXG4gICAgbGV0IE5ld1ZhbDphbnkgPSB7XHJcbiAgICAgIFwiVVNFUk5BTUVcIjogdXNlcixcclxuICAgICAgXCJQQVNTV09SRFwiOiBwYXNzXHJcbiAgICB9O1xyXG5cclxuXHJcbiAgICBOZXdWYWxbXCJfUVVFUllcIl0gPSBcIlZFUklGWV9BRE1fVVNFUlwiO1xyXG4gICAgb2JqZWN0LkJvZHk9W107XHJcbiAgICBvYmplY3QuYWRkVG9Cb2R5KE5ld1ZhbCk7XHJcbiAgICBcclxuICAgIGxldCBwYXJhbUNvbmZpZyA9IHtcclxuICAgICAgXCJOYW1lXCI6IFwiVVNFUk5BTUVcIixcclxuICAgICAgXCJWYWxcIjogdXNlclxyXG4gICAgfTtcclxuICAgIHNldFBhcmFtQ29uZmlnKHBhcmFtQ29uZmlnKTtcclxuICAgIHRoaXMuc2Vzc2lvblBhcmFtc1tcIlVTRVJOQU1FXCJdID0gdXNlcjtcclxuXHJcbiAgICB0aGlzLnBvc3Qob2JqZWN0LCBQYWdlLCBvYmplY3QuQm9keSkuc3Vic2NyaWJlKHJlc3VsdCA9PiB7XHJcbiAgICAgIGlmICh0eXBlb2YgcmVzdWx0LmRhdGFbMF0uZGF0YVswXSAhPT0gXCJ1bmRlZmluZWRcIikge1xyXG4gICAgICAgIGlmICh0aGlzLnBhcmFtQ29uZmlnLkRFQlVHX0ZMQUcpIGNvbnNvbGUubG9nKFwiT2JqZWN0IGluIGxvZ2luIEhGXCIsIG9iamVjdC5Cb2R5LCB1c2VyKTtcclxuICAgICAgICBpZiAocmVzdWx0LmRhdGFbMF0uZGF0YVswXS5VU0VSTkFNRSA9PSB1c2VyKSB7XHJcbiAgICAgICAgICB0aGlzLlVTRVJOQU1FID0gdXNlcjtcclxuICAgICAgICAgIG9iamVjdC5Cb2R5ID0gW107XHJcblxyXG4gICAgICAgICAgbGV0IHBhcmFtQ29uZmlnID0ge1xyXG4gICAgICAgICAgICBcIk5hbWVcIjogXCJVU0VSX0lORk9cIixcclxuICAgICAgICAgICAgXCJWYWxcIjogcmVzdWx0LmRhdGFbMF0uZGF0YVswXVxyXG4gICAgICAgICAgfTtcclxuICAgICAgICAgIHNldFBhcmFtQ29uZmlnKHBhcmFtQ29uZmlnKTtcclxuICAgICAgICAgIHRoaXMuc2Vzc2lvblBhcmFtc1tcIlVTRVJfSU5GT1wiXSA9IHJlc3VsdC5kYXRhWzBdLmRhdGFbMF07XHJcbiAgICAgICAgICBsZXQgYWRhcHRlciA9IHJlc3VsdC5kYXRhWzBdWydfREJfQWRBcFRvciddO1xyXG4gICAgICAgICAgaWYgKHR5cGVvZiBhZGFwdGVyICE9PSBcInVuZGVmaW5lZFwiKXtcclxuICAgICAgICAgICAgdGhpcy5zZXNzaW9uUGFyYW1zW1wiREJfQURBUFRPUlwiXSA9IGFkYXB0ZXIudG9VcHBlckNhc2UoKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIHRoaXMuVVNFUl9JTkZPID0gcmVzdWx0LmRhdGFbMF0uZGF0YVswXTtcclxuICAgICAgICAgIGlmICgodGhpcy5zZXNzaW9uUGFyYW1zLlVTRVJfSU5GTy5NQVNURVJfREIgIT0gXCJcIikgJiYgKHR5cGVvZiB0aGlzLnNlc3Npb25QYXJhbXMuVVNFUl9JTkZPLk1BU1RFUl9EQiAhPT0gXCJ1bmRlZmluZWRcIikpe1xyXG4gICAgICAgICAgICB0aGlzLk1BU1RFUl9EQiA9IHRoaXMuc2Vzc2lvblBhcmFtcy5VU0VSX0lORk8uTUFTVEVSX0RCO1xyXG4gICAgICAgICAgICB0aGlzLlVTRVJOQU1FX0RCID0gdGhpcy5zZXNzaW9uUGFyYW1zLlVTRVJfSU5GTy5NQVNURVJfREI7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgXHJcblxyXG5cclxuICAgICAgICAgIHN1Y2Nlc3MgPSB0cnVlO1xyXG4gICAgICAgICAgdGhpcy5sb2FkUnVsZXMob2JqZWN0KTtcclxuICAgICAgICAgIGlmICgob2JqZWN0LnRlc3RFS1lDKSB8fChvYmplY3QubmF2VG8ubGVuZ3RoIT0wKXx8KG9iamVjdC5zaGFyZVRvLmxlbmd0aCE9MCkpIHtcclxuICAgICAgICAgICAgb2JqZWN0LmxvZ2luQ29tcGxldGVkSGFuZGxlcihudWxsKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAgb2JqZWN0LmxvZ2luQ29tcGxldGVkLmVtaXQodGhpcyk7XHJcblxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICBpZiAoIXN1Y2Nlc3MpXHJcbiAgICAgICAgdGhpcy5zaG93Tm90aWZpY2F0aW9uKFwiZXJyb3JcIiwgXCJlcnJvcjpcIiArIFwiV3JvbmcgdXNlciBvciBwYXNzd29yZFwiKTtcclxuXHJcblxyXG5cclxuICAgIH0sXHJcbiAgICBlcnIgPT4ge1xyXG4gICAgICAgIG9iamVjdC5Cb2R5ID0gW107XHJcbiAgICAgICAgdGhpcy5zaG93Tm90aWZpY2F0aW9uKFwiZXJyb3JcIiwgXCJlcnJvcjpcIiArIFwiV3JvbmcgdXNlciBvciBwYXNzd29yZFwiKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHVzZXJBZGRlZCA9IGZhbHNlO1xyXG4gIHB1YmxpYyBhZGRVc2VySW5mbyhvYmplY3Q6YW55LCB1c2VybmFtZTphbnksIHZhbHVlOmFueSkge1xyXG4gICAgdGhpcy5wYXJhbUNvbmZpZyA9IGdldFBhcmFtQ29uZmlnKCk7XHJcbiAgICBsZXQgUGFnZSA9IFwiXCI7XHJcbiAgICBsZXQgc3VjY2VzcyA9IGZhbHNlO1xyXG4gICAgdXNlcm5hbWUgPSB1c2VybmFtZS50b1VwcGVyQ2FzZSgpLnRyaW0oKTtcclxuICAgIHVzZXJuYW1lID0gdXNlcm5hbWUudHJpbSgpO1xyXG4gICAgbGV0IGQgPSBuZXcgRGF0ZSgpO1xyXG4gICAgbGV0IGRhdGVJc28gPSB0aGlzLkZPUk1BVF9JU08oZCk7XHJcbiAgICBsZXQgYm9keSA9W1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBcIl9RVUVSWVwiOlwiSU5TRVJUX0FETV9VU0VSX0lORk9STUFUSU9OXCIsXHJcbiAgICAgICAgICAgICAgICBcIlVTRVJOQU1FXCI6dXNlcm5hbWUsXHJcbiAgICAgICAgICAgICAgICBcIkVNQUlMXCI6dmFsdWUuZW1haWwsXHJcbiAgICAgICAgICAgICAgICBcIkZVTExOQU1FXCIgOiB2YWx1ZS5maXJzdE5hbWUgKyBcIiBcIiArIHZhbHVlLmxhc3ROYW1lICxcclxuICAgICAgICAgICAgICAgIFwiRkxFWF9GTEQxXCIgOiB2YWx1ZS5pZCxcclxuICAgICAgICAgICAgICAgIFwiR1JPVVBOQU1FXCI6IG9iamVjdC5rZXljTG9hay5LRVlDTE9BS19VU0VSX0dST1VQLFxyXG4gICAgICAgICAgICAgICAgXCJMT0dEQVRFXCI6IG5ldyBEYXRlKCksXHJcbiAgICAgICAgICAgICAgICBcIkxPR05BTUVcIjogdXNlcm5hbWVcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgXVxyXG5cclxuICAgIHRoaXMucG9zdChvYmplY3QsIFBhZ2UsIGJvZHkpLnN1YnNjcmliZShyZXN1bHQgPT4ge1xyXG4gICAgICAgc3VjY2VzcyA9IHRydWU7XHJcbiAgICAgICBjb25zb2xlLmxvZyhcInJlc3VsdDppbnNlcnQ6XCIsIHJlc3VsdC5kYXRhWzBdKVxyXG4gICAgICBpZiAodHlwZW9mIHJlc3VsdC5kYXRhWzBdICE9PSBcInVuZGVmaW5lZFwiKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJyZXN1bHQ6XCIsIHJlc3VsdC5kYXRhWzBdKVxyXG4gICAgICAgICAgc3VjY2VzcyA9IHRydWU7XHJcbiAgICAgICAgICB0aGlzLnVzZXJBZGRlZCA9IHRydWU7XHJcbiAgICAgICAgICB0aGlzLmdldFVzZXJJbmZvKG9iamVjdCwgdXNlcm5hbWUsIHZhbHVlKTtcclxuICAgICAgICAgIFxyXG4gICAgICB9XHJcbiAgICAgIGlmICghc3VjY2Vzcyl7XHJcbiAgICAgICAgXHJcbiAgICAgICAgbGV0IGVycm9yTXNnID0gXCJOb3QgYWJsZSB0byBhZGQgXCIgKyB1c2VybmFtZSArIFwiIHRwICBEQlwiO1xyXG4gICAgICAgIGxldCBkaWFsb2dTdHJ1YyA9IHtcclxuICAgICAgICAgIG1zZzogZXJyb3JNc2csXHJcbiAgICAgICAgICB0aXRsZTogXCJFcnJvclwiLFxyXG4gICAgICAgICAgaW5mbzogbnVsbCxcclxuICAgICAgICAgIG9iamVjdDogb2JqZWN0LFxyXG4gICAgICAgICAgYWN0aW9uOiBudWxsLFxyXG4gICAgICAgICAgY2FsbGJhY2s6IG51bGxcclxuICAgICAgICB9O1xyXG4gICAgICAgIHRoaXMuc2hvd0NvbmZpcm1hdGlvbihkaWFsb2dTdHJ1Yyk7XHJcbiAgICAgICBcclxuICAgICAgIC8vIG9iamVjdC5sb2dvZmYoMzAwMCk7XHJcbiAgICAgIH1cclxuXHJcblxyXG5cclxuICAgIH0sXHJcbiAgICAgIGVyciA9PiB7XHJcbiAgICAgICAgb2JqZWN0LkJvZHkgPSBbXTtcclxuICAgICAgICBsZXQgZXJyb3JNc2cgPSBcIiBFcnJvciBjb25uZWN0aW5nIHRvICBEQlwiO1xyXG4gICAgICAgIGxldCBkaWFsb2dTdHJ1YyA9IHtcclxuICAgICAgICAgIG1zZzogZXJyb3JNc2csXHJcbiAgICAgICAgICB0aXRsZTogXCJFcnJvclwiLFxyXG4gICAgICAgICAgaW5mbzogbnVsbCxcclxuICAgICAgICAgIG9iamVjdDogb2JqZWN0LFxyXG4gICAgICAgICAgYWN0aW9uOiBudWxsLFxyXG4gICAgICAgICAgY2FsbGJhY2s6IG51bGxcclxuICAgICAgICB9O1xyXG4gICAgICAgIHRoaXMuc2hvd0NvbmZpcm1hdGlvbihkaWFsb2dTdHJ1Yyk7XHJcbiAgICAgICAvLyBvYmplY3QubG9nb2ZmKDMwMDApO1xyXG4gICAgICB9KTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBnZXRVc2VySW5mbyhvYmplY3Q6YW55LCB1c2VyOmFueSwgdmFsdWU6YW55KSB7XHJcbiAgICB0aGlzLnBhcmFtQ29uZmlnID0gZ2V0UGFyYW1Db25maWcoKTtcclxuICAgIGxldCBQYWdlID0gXCJcIjtcclxuICAgIGxldCBzdWNjZXNzID0gZmFsc2U7XHJcbiAgICB1c2VyID0gdXNlci50b1VwcGVyQ2FzZSgpLnRyaW0oKTtcclxuICAgIHVzZXIgPSB1c2VyLnRyaW0oKTtcclxuICAgIGxldCBOZXdWYWw6YW55ID0ge1xyXG4gICAgICBcIlVTRVJOQU1FXCI6IHVzZXJcclxuICAgIH07XHJcblxyXG5cclxuICAgIE5ld1ZhbFtcIl9RVUVSWVwiXSA9IFwiR0VUX0FETV9VU0VSX0lORk9STUFUSU9OXCI7XHJcbiAgICBvYmplY3QuQm9keT1bXTtcclxuICAgIG9iamVjdC5hZGRUb0JvZHkoTmV3VmFsKTtcclxuXHJcbiAgICBsZXQgcGFyYW1Db25maWcgPSB7XHJcbiAgICAgIFwiTmFtZVwiOiBcIlVTRVJOQU1FXCIsXHJcbiAgICAgIFwiVmFsXCI6IHVzZXJcclxuICAgIH07XHJcbiAgICBzZXRQYXJhbUNvbmZpZyhwYXJhbUNvbmZpZyk7XHJcbiAgICB0aGlzLnNlc3Npb25QYXJhbXNbXCJVU0VSTkFNRVwiXSA9IHVzZXI7XHJcblxyXG4gICAgdGhpcy5wb3N0KG9iamVjdCwgUGFnZSwgb2JqZWN0LkJvZHkpLnN1YnNjcmliZShyZXN1bHQgPT4ge1xyXG4gICAgICBpZiAodHlwZW9mIHJlc3VsdC5kYXRhWzBdLmRhdGFbMF0gIT09IFwidW5kZWZpbmVkXCIpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcInJlc3VsdDpnZXQ6XCIsIHJlc3VsdC5kYXRhWzBdLmRhdGFbMF0pXHJcbiAgICAgICAgaWYgKHJlc3VsdC5kYXRhWzBdLmRhdGFbMF0uVVNFUk5BTUUgPT0gdXNlcikge1xyXG4gICAgICAgICAgdGhpcy5VU0VSTkFNRSA9IHVzZXI7XHJcbiAgICAgICAgICBvYmplY3QuQm9keSA9IFtdO1xyXG5cclxuICAgICAgICAgIGxldCBwYXJhbUNvbmZpZyA9IHtcclxuICAgICAgICAgICAgXCJOYW1lXCI6IFwiVVNFUl9JTkZPXCIsXHJcbiAgICAgICAgICAgIFwiVmFsXCI6IHJlc3VsdC5kYXRhWzBdLmRhdGFbMF1cclxuICAgICAgICAgIH07XHJcbiAgICAgICAgICBzZXRQYXJhbUNvbmZpZyhwYXJhbUNvbmZpZyk7XHJcbiAgICAgICAgICB0aGlzLnNlc3Npb25QYXJhbXNbXCJVU0VSX0lORk9cIl0gPSByZXN1bHQuZGF0YVswXS5kYXRhWzBdO1xyXG4gICAgICAgICAgbGV0IGFkYXB0ZXIgPSByZXN1bHQuZGF0YVswXVsnX0RCX0FkQXBUb3InXTtcclxuICAgICAgICAgIGlmICh0eXBlb2YgYWRhcHRlciAhPT0gXCJ1bmRlZmluZWRcIil7XHJcbiAgICAgICAgICAgIHRoaXMuc2Vzc2lvblBhcmFtc1tcIkRCX0FEQVBUT1JcIl0gPSBhZGFwdGVyLnRvVXBwZXJDYXNlKCk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICB0aGlzLlVTRVJfSU5GTyA9IHJlc3VsdC5kYXRhWzBdLmRhdGFbMF07XHJcbiAgICAgICAgICBpZiAoKHRoaXMuc2Vzc2lvblBhcmFtcy5VU0VSX0lORk8uTUFTVEVSX0RCICE9IFwiXCIpICYmICh0eXBlb2YgdGhpcy5zZXNzaW9uUGFyYW1zLlVTRVJfSU5GTy5NQVNURVJfREIgIT09IFwidW5kZWZpbmVkXCIpKXtcclxuICAgICAgICAgICAgdGhpcy5NQVNURVJfREIgPSB0aGlzLnNlc3Npb25QYXJhbXMuVVNFUl9JTkZPLk1BU1RFUl9EQjtcclxuICAgICAgICAgIH1cclxuICAgICAgICBcclxuXHJcblxyXG5cclxuICAgICAgICAgIHN1Y2Nlc3MgPSB0cnVlO1xyXG4gICAgICAgICAgdGhpcy5sb2FkUnVsZXMob2JqZWN0KTtcclxuICAgICAgICAgIGlmICgob2JqZWN0LnRlc3RFS1lDKSB8fChvYmplY3QubmF2VG8ubGVuZ3RoIT0wKSkge1xyXG4gICAgICAgICAgICBvYmplY3QubG9naW5Db21wbGV0ZWRIYW5kbGVyKG51bGwpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICBvYmplY3QubG9naW5Db21wbGV0ZWRIYW5kbGVyKHRoaXMpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICBjb25zb2xlLmxvZyhcInJlc3VsdDpzdWNjZXNzOlwiLHN1Y2Nlc3MpXHJcbiAgICAgIGlmICghc3VjY2Vzcyl7XHJcbiAgICAgICAgaWYgKCF0aGlzLnVzZXJBZGRlZClcclxuICAgICAgICAgIHRoaXMuYWRkVXNlckluZm8ob2JqZWN0LCB1c2VyLCB2YWx1ZSk7XHJcbiAgICAgICAgZWxzZXtcclxuICAgICAgICAgIC8vIGxldCBlcnJvck1zZyA9IHVzZXIgKyBcImlzIG5vdCBkZWZpbmVkIGluIFNUQVIgREJcIjtcclxuICAgICAgICAgIC8vIGxldCBkaWFsb2dTdHJ1YyA9IHtcclxuICAgICAgICAgIC8vICAgbXNnOiBlcnJvck1zZyxcclxuICAgICAgICAgIC8vICAgdGl0bGU6IFwiRXJyb3JcIixcclxuICAgICAgICAgIC8vICAgaW5mbzogbnVsbCxcclxuICAgICAgICAgIC8vICAgb2JqZWN0OiBvYmplY3QsXHJcbiAgICAgICAgICAvLyAgIGFjdGlvbjogbnVsbCxcclxuICAgICAgICAgIC8vICAgY2FsbGJhY2s6IG51bGxcclxuICAgICAgICAgIC8vIH07XHJcbiAgICAgICAgICAvLyB0aGlzLnNob3dDb25maXJtYXRpb24oZGlhbG9nU3RydWMpO1xyXG4gICAgICAgIFxyXG4gICAgICAgICAgLy8gb2JqZWN0LmxvZ29mZigzMDAwKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcblxyXG5cclxuICAgIH0sXHJcbiAgICAgIGVyciA9PiB7XHJcbiAgICAgICAgb2JqZWN0LkJvZHkgPSBbXTtcclxuICAgICAgICBsZXQgZXJyb3JNc2cgPSBcIiBFcnJvciBjb250YWN0aW5nIERCIHRvIHZlcmlmeSB1c2VyIFwiICsgdXNlcjtcclxuICAgICAgICBsZXQgZGlhbG9nU3RydWMgPSB7XHJcbiAgICAgICAgICBtc2c6IGVycm9yTXNnLFxyXG4gICAgICAgICAgdGl0bGU6IFwiRXJyb3JcIixcclxuICAgICAgICAgIGluZm86IG51bGwsXHJcbiAgICAgICAgICBvYmplY3Q6IG9iamVjdCxcclxuICAgICAgICAgIGFjdGlvbjogbnVsbCxcclxuICAgICAgICAgIGNhbGxiYWNrOiBudWxsXHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLnNob3dDb25maXJtYXRpb24oZGlhbG9nU3RydWMpO1xyXG4gICAgICAgLy9vYmplY3QubG9nb2ZmKDMwMDApO1xyXG4gICAgICB9KTtcclxuICB9XHJcbiAgcHVibGljIHJ1bGVzUG9zdFF1ZXJ5RGVmID0ge1xyXG4gICAgcnVsZVB0cnNBcnI6IHt9LFxyXG4gICAgcnVsZXNBcnI6IFtdLFxyXG4gICAgYWN0aW9uUHRyc0Fycjoge30sXHJcbiAgICBhY3Rpb25zQXJyOiBbXVxyXG4gIH07XHJcbiAgcHVibGljIHJ1bGVzUHJlUXVlcnlEZWYgPSB7XHJcbiAgICBydWxlUHRyc0Fycjoge30sXHJcbiAgICBydWxlc0FycjogW10sXHJcbiAgICBhY3Rpb25QdHJzQXJyOiB7fSxcclxuICAgIGFjdGlvbnNBcnI6IFtdXHJcbiAgfTtcclxuICBwdWJsaWMgaG9zdHNBcnIgPSBbXTtcclxuICBwdWJsaWMgaG9zdHNNYXBBcnIgPSBbXTtcclxuICAvLy8vLy8vLy8vLy8vLy8vL1xyXG4gICAgcHVibGljIE1BS0VfREFURSAgKHZhbClcclxuXHR7XHJcblx0XHR0cnkge1xyXG5cdFx0XHR2YXIgZCA9IG5ldyBEYXRlKHZhbCk7XHJcblx0XHRcdH0gY2F0Y2ggKGUpIHtcclxuXHRcdFx0XHRjb25zb2xlLmxvZyAoXCJFcnJvciBwYXJzaW5nIDoyOlwiLHZhbCk7XHJcblx0XHRcdFx0cmV0dXJuIDA7XHJcblx0XHRcdH1cclxuXHRcdGNvbnNvbGUubG9nIChcImNvcnJlY3QgcGFyc2luZyA6XCIsdmFsLCBkKTtcclxuXHRcdHZhciBkYXRlSXNvID0gZC50b0lTT1N0cmluZygpO1xyXG5cdFx0IHZhciBkYXRlSXNvQXJyID0gZGF0ZUlzby5zcGxpdChcIi5cIik7XHJcblx0XHQgZGF0ZUlzbyA9IGRhdGVJc29BcnJbMF0gKyBcIi4wMDBaXCI7XHJcbiAgICAgY29uc29sZS5sb2cgKFwiY29ycmVjdCBwYXJzaW5nIDpcIix2YWwsIGQsZGF0ZUlzbyk7XHJcblx0XHRyZXR1cm4gZGF0ZUlzbztcclxuXHR9XHJcbiAgcHVibGljIEZPUk1BVF9JU08oZDphbnkpIHtcclxuICAgIHZhciBkYXRlSXNvID0gZC50b0lTT1N0cmluZygpO1xyXG4gICAgdmFyIGRhdGVJc29BcnIgPSBkYXRlSXNvLnNwbGl0KFwiVFwiKTtcclxuICAgIGRhdGVJc28gPSBkYXRlSXNvQXJyWzBdICsgXCIgXCIgKyBkYXRlSXNvQXJyWzFdO1xyXG4gICAgZGF0ZUlzbyA9IGRhdGVJc28uc3Vic3RyKDAsIDE5KTtcclxuICAgIHJldHVybiBkYXRlSXNvO1xyXG4gIH1cclxuICBwdWJsaWMgTG9nUnVsZShvYmplY3Q6YW55LCBydWxlTG9nOmFueSwgbXNnUmVzcG9uc2U6YW55LCBzdGF0dXM6YW55KSB7XHJcbiAgICBmdW5jdGlvbiBwcmVwYXJlRGF0YUZvckRCKGRhdGFJbjphbnkpIHtcclxuXHJcblx0XHRcdGxldCBkYXRhT3V0ID0gSlNPTi5zdHJpbmdpZnkoZGF0YUluKTtcclxuICAgICAgLy9jb25zb2xlLmxvZyhcImRhdGFJbjpcIiwgZGF0YUluLCBcIiBkYXRhT3V0OlwiLCBkYXRhT3V0KTtcclxuXHRcdFx0ZGF0YU91dCA9IGRhdGFPdXQuc3BsaXQoXCInXCIpLmpvaW4oJ1wiJyk7XHJcblx0XHRcdHJldHVybiBkYXRhT3V0O1xyXG5cclxuXHRcdH1cclxuICAgIGlmICh0eXBlb2YgbXNnUmVzcG9uc2UgPT0gXCJvYmplY3RcIilcclxuXHRcdFx0bXNnUmVzcG9uc2UgPSBKU09OLnN0cmluZ2lmeShtc2dSZXNwb25zZSk7XHJcbiAgICBpZiAodGhpcy5wYXJhbUNvbmZpZy5ERUJVR19GTEFHKSBjb25zb2xlLmxvZyhcIi0tLS0tbXNnUmVzcG9uc2U6XCIsIG1zZ1Jlc3BvbnNlLCBcInJ1bGVMb2c6XCIsIHJ1bGVMb2cpO1xyXG4gICAgbGV0IGRiID0gcnVsZUxvZy5kYjtcclxuICAgIGxldCBkID0gbmV3IERhdGUoKTtcclxuICAgIGxldCBkYXRlSXNvID0gdGhpcy5GT1JNQVRfSVNPKGQpO1xyXG5cclxuICAgIGxldCBSVUxFX0tFWSA9IHJ1bGVMb2cucnVsZS5SVUxFX0tFWTtcclxuXHJcbiAgICBsZXQgYXJyYXkgPSBSVUxFX0tFWS5zcGxpdChcIixcIik7XHJcbiAgICAvL2xldCBydWxlS2V5ID0ge307XHJcbiAgICBsZXQgcnVsZUtleSA9IFwiXCI7XHJcbiAgICBsZXQgcnVsZUtleU5hbWUgPSBcIlwiO1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhcnJheS5sZW5ndGg7IGkrKykge1xyXG4gICAgICBsZXQgZWxlbSA9IGFycmF5W2ldO1xyXG4gICAgICBsZXQgZWxlbV92YWx1ZSA9IHJ1bGVMb2cucXVlcnlEYXRhW2VsZW1dO1xyXG4gICAgICBpZiAodHlwZW9mIGVsZW1fdmFsdWUgIT09IFwidW5kZWZpbmVkXCIpIHtcclxuXHRcdFx0XHQvL3J1bGVLZXlbZWxlbV0gPSBlbGVtX3ZhbHVlO1xyXG4gICAgICAgIGlmIChydWxlS2V5ICE9IFwiXCIpIHtcclxuXHRcdFx0XHRcdHJ1bGVLZXkgPSBydWxlS2V5ICsgXCJfXCI7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdHJ1bGVLZXkgPSBydWxlS2V5ICsgZWxlbV92YWx1ZTtcclxuXHJcbiAgICAgICAgaWYgKHJ1bGVLZXlOYW1lICE9IFwiXCIpIHtcclxuXHRcdFx0XHRcdHJ1bGVLZXlOYW1lID0gcnVsZUtleU5hbWUgKyBcIl9cIjtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0cnVsZUtleU5hbWUgPSBydWxlS2V5TmFtZSArIGVsZW07XHJcbiAgICAgIH1cclxuXHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy5wYXJhbUNvbmZpZy5ERUJVR19GTEFHKSBjb25zb2xlLmxvZyhcInJ1bGVLZXk6XCIsIHJ1bGVLZXksIFwiIHJ1bGVLZXlOYW1lOlwiLCBydWxlS2V5TmFtZSk7XHJcblxyXG5cclxuXHJcbiAgICBpZiAodGhpcy5wYXJhbUNvbmZpZy5ERUJVR19GTEFHKSBjb25zb2xlLmxvZyhcIlJVTEVfS0VZOlwiLCBSVUxFX0tFWSk7XHJcblxyXG5cclxuICAgIHZhciB0ZW1wbGF0ZU5hbWUgPSBydWxlTG9nLnF1ZXJ5RGF0YS5URU1QTEFURV9OQU1FO1xyXG4gICAgbGV0IHF1ZXJ5RGF0YSA9IHByZXBhcmVEYXRhRm9yREIocnVsZUxvZy5xdWVyeURhdGEpO1xyXG4gICAgLy9sZXQgYm9keVRvU2VuZCA9IHByZXBhcmVEYXRhRm9yREIocnVsZUxvZy5ib2R5VG9TZW5kKTtcclxuICAgIGxldCBib2R5VG9TZW5kID0gcnVsZUxvZy5ib2R5VG9TZW5kO1xyXG4gICAgbGV0IHBhcmFtZXRlcnNUb1NlbmQgPSBwcmVwYXJlRGF0YUZvckRCKHJ1bGVMb2cucGFyYW1ldGVyc1RvU2VuZCk7XHJcbiAgIC8vIGxldCBydWxlS2V5U3RyID0gcHJlcGFyZURhdGFGb3JEQihydWxlS2V5KTtcclxuICAgIGxldCBtc2dSZXNwb25zZVN0ciA9IHByZXBhcmVEYXRhRm9yREIobXNnUmVzcG9uc2UpO1xyXG5cclxuICAgIGlmICh0aGlzLnBhcmFtQ29uZmlnLkRFQlVHX0ZMQUcpIGNvbnNvbGUubG9nKFwicXVlcnlEYXRhOlwiICsgcXVlcnlEYXRhKTtcclxuXHJcbi8vXHJcbiAgICAgICAgICAgICAgbGV0IHVzZXJOYW1lID0gb2JqZWN0LnN0YXJTZXJ2aWNlcy5zZXNzaW9uUGFyYW1zLlVTRVJfSU5GTy5OYW1lO1xyXG4gICAgb2JqZWN0LkJvZHkgPSBbXTtcclxuICAgIGxldCBQYWdlID0gXCJcIjtcclxuICAgIGxldCBOZXdWYWw6YW55ID0ge1xyXG4gICAgICBcIlJVTEVfS0VZXCI6IHJ1bGVLZXksXHJcbiAgICAgIFwiUlVMRV9LRVlfTkFNRVwiOiBydWxlS2V5TmFtZSxcclxuICAgICAgXCJTVEFUVVNcIjogc3RhdHVzLFxyXG4gICAgICBcIk1PRFVMRVwiOiBydWxlTG9nLnJ1bGUuTU9EVUxFLFxyXG4gICAgICBcIlJVTEVfSURcIjogcnVsZUxvZy5ydWxlLlJVTEVfSUQsXHJcbiAgICAgIFwiQUNUSU9OX0lEXCI6IHJ1bGVMb2cuYWN0aW9uLkFDVElPTl9JRCxcclxuICAgICAgXCJTRU5UX0RBVEVcIjogcnVsZUxvZy5zZW50RGF0ZSxcclxuICAgICAgXCJNU0dfUkVDRUlWRURcIjogcXVlcnlEYXRhLFxyXG4gICAgICAgICAgICAgICAgXCJQQVJBTUVURVJfU0VOVFwiOiBwYXJhbWV0ZXJzVG9TZW5kLFxyXG4gICAgICBcIkJPRFlfU0VOVFwiOiBib2R5VG9TZW5kLFxyXG4gICAgICBcIk1TR19SRVNQT05TRVwiOiBtc2dSZXNwb25zZVN0cixcclxuICAgICAgXCJMT0dEQVRFXCI6IGRhdGVJc28sXHJcbiAgICAgIFwiTE9HTkFNRVwiOiB1c2VyTmFtZSxcclxuICAgICAgXCJURU1QTEFURV9OQU1FXCIgOiB0ZW1wbGF0ZU5hbWVcclxuXHJcbiAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICBOZXdWYWxbXCJfUVVFUllcIl0gPSBcIklOU0VSVF9BRE1fUlVMRV9MT0dcIjtcclxuXHJcbiAgICAgICAgICAgICAgLy9pZiAodGhpcy5wYXJhbUNvbmZpZy5ERUJVR19GTEFHKSBjb25zb2xlLmxvZyhcInRlc3Q6TmV3VmFsOlwiLCBOZXdWYWwpXHJcbiAgICAgICAgICAgICAgLy9pZiAodGhpcy5wYXJhbUNvbmZpZy5ERUJVR19GTEFHKSBjb25zb2xlLmxvZyhcInRlc3Q6b2JqZWN0LkJvZHk6XCIsIG9iamVjdC5Cb2R5KVxyXG4gICAgICAgICAgICAgIG9iamVjdC5hZGRUb0JvZHkoTmV3VmFsKTtcclxuXHJcblxyXG4gICAgdGhpcy5wb3N0KG9iamVjdCwgUGFnZSwgb2JqZWN0LkJvZHkpLnN1YnNjcmliZShyZXN1bHQgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMucGFyYW1Db25maWcuREVCVUdfRkxBRykgY29uc29sZS5sb2coXCJ0ZXN0OnJlc3VsdC5kYXRhOlwiLCByZXN1bHQuZGF0YSk7XHJcbiAgICAgIG9iamVjdC5Cb2R5ID0gW107XHJcbiAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICBlcnIgPT4ge1xyXG4gICAgICAgIG9iamVjdC5Cb2R5ID0gW107XHJcbiAgICAgICAgdGhpcy5zaG93Tm90aWZpY2F0aW9uKFwiZXJyb3JcIiwgXCJlcnJvcjpcIiArIGVyci5tZXNzYWdlKTtcclxuICAgICAgICAgICAgICB9KTtcclxuXHJcblxyXG5cclxuICB9XHJcbiAgcHVibGljIHBlcmZvcm1IdHRwUG9zdChvYmplY3Q6YW55LCBib2R5VG9TZW5kOmFueSwgcGFyYW1ldGVyc1RvU2VuZDphbnksIHNlbmRUbzphbnksIHF1ZXJ5RGF0YTphbnksIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBydWxlOmFueSwgYWN0aW9uOmFueSwgVHJpZ2dlcjphbnksIGhvc3REZWY6YW55LCBob3N0TWFwRGVmOmFueSwgaGVhZGVyUGFyYW06YW55LCAgcGF0aEV4dHJhOmFueSkge1xyXG5cclxuICAgIHZhciB2YWxpZCA9IGZhbHNlO1xyXG4gICAgbGV0IGVycm9yID0gMDtcclxuICAgIGxldCBtc2cgPSBcIlwiO1xyXG5cclxuICAgIGxldCBvcHRpb25zOmFueSA9IHtcclxuICAgICAgaG9zdDogJycsXHJcbiAgICAgIHBhdGg6ICcnLFxyXG4gICAgICBwb3J0OiA4MCxcclxuICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuICAgICAgIC8vJ0NvbnRlbnQtVHlwZSc6ICd0ZXh0L3htbDsgY2hhcnNldD11dGYtOCcsXHJcbiAgICAgIFwiYXV0aG9yaXphdGlvblwiOiBcIlwiXHJcbiAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAvLyBpZiAodGhpcy5wYXJhbUNvbmZpZy5ERUJVR19GTEFHKSBjb25zb2xlLmxvZyhcIi0tLS0tLS0tLS0tLS0tLXJlcS51cmw6XCIscmVxLnVybCk7XHJcbiAgIC8vIGlmICh0aGlzLnBhcmFtQ29uZmlnLkRFQlVHX0ZMQUcpIGNvbnNvbGUubG9nKFwiLS0tLS0tLS0tLS0tLS0tcGF0aG5hbWU6XCIscmVxLl9wYXJzZWRVcmwucGF0aG5hbWUpO1xyXG4gICAvLyBpZiAodGhpcy5wYXJhbUNvbmZpZy5ERUJVR19GTEFHKSBjb25zb2xlLmxvZyhcIi0tLS0tLS0tLS0tLS0tLXBhdGg6XCIscmVxLl9wYXJzZWRVcmwucGF0aCk7XHJcbiAgICBsZXQgZCA9IG5ldyBEYXRlKCk7XHJcbiAgICBsZXQgZGF0ZUlzbyA9IHRoaXMuRk9STUFUX0lTTyhkKTtcclxuICAgIGlmIChob3N0RGVmID09IG51bGwpXHJcbiAgICAgIGhvc3REZWYgPSBcIlwiO1xyXG5cclxuICAgIGxldCBydWxlTG9nID0ge1xyXG4gICAgICBydWxlOiBydWxlLFxyXG4gICAgICBhY3Rpb246IGFjdGlvbixcclxuICAgICAgcXVlcnlEYXRhOiBxdWVyeURhdGEsXHJcbiAgICAgIGJvZHlUb1NlbmQ6IGJvZHlUb1NlbmQsXHJcbiAgICAgIHBhcmFtZXRlcnNUb1NlbmQ6IHBhcmFtZXRlcnNUb1NlbmQsXHJcbiAgICAvLyAgXCJkYlwiOiBkYixcclxuICAgICAgc2VudERhdGU6IGRhdGVJc28sXHJcbiAgICAgIGhvc3REZWY6IGhvc3REZWZcclxuICAgIH07XHJcbiAgICBpZiAoc2VuZFRvID09IFwiV0ZcIikge1xyXG4gICAgICBsZXQgdXJsID0gdGhpcy5CQVNFX1VSTDtcclxuXHJcbiAgICAgIG9wdGlvbnMuaGVhZGVycy5hdXRob3JpemF0aW9uID0gdGhpcy5TdHJBdXRoO1xyXG5cclxuICAgICAgdmFsaWQgPSB0cnVlO1xyXG5cclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICBpZiAoaG9zdERlZiAhPSBcIlwiKSB7XHJcbiAgICAgICAgbGV0IHBhdGggPSBcIi9cIiArIGhvc3REZWYuUEFUSDtcclxuICAgICAgICBpZiAocGFyYW1ldGVyc1RvU2VuZCAhPSBcIlwiKVxyXG4gICAgICAgICAgcGF0aCA9IHBhdGggKyBwYXJhbWV0ZXJzVG9TZW5kO1xyXG4gICAgICAgIHBhdGggPSBwYXRoICsgcGF0aEV4dHJhO1xyXG4gICAgICAgIGxldCBob3N0ID0gaG9zdERlZi5IT1NUO1xyXG4gICAgICAgIGxldCBwb3J0ID0gcGFyc2VJbnQoaG9zdERlZi5QT1JUKTtcclxuICAgICAgICBsZXQgbWV0aG9kID0gaG9zdERlZi5IVFRQX01FVEhPRDtcclxuXHJcbiAgICAgICAgb3B0aW9ucy5ob3N0ID0gaG9zdDtcclxuICAgICAgICBvcHRpb25zLnBvcnQgPSBwb3J0O1xyXG4gICAgICAgIG9wdGlvbnMucGF0aCA9IHBhdGg7XHJcbiAgICAgICAgb3B0aW9ucy5tZXRob2QgPSBtZXRob2Q7XHJcbiAgICAgICAvLyBsZXQgdXJsID0gXCJodHRwOi8vXCIgKyBob3N0ICsgXCI6XCIgKyBwb3J0ICArIHBhdGggKyBwYXJhbWV0ZXJzVG9TZW5kIDtcclxuICAgICAgICBsZXQgdXJsOiBzdHJpbmcgPSBob3N0RGVmLlVSTDtcclxuLy9cdFx0XHRcdFx0b3B0aW9ucy5oZWFkZXJzLmF1dGhvcml6YXRpb24gPSByZXEuaGVhZGVycy5hdXRob3JpemF0aW9uO1xyXG4gICAgICAgIC8vYm9keVRvU2VuZCA9IFwiXCI7XHJcblxyXG5cclxuICAgICAgICB2YWxpZCA9IHRydWU7XHJcbiAgICAgIH1cclxuICAgICAgZWxzZSB7XHJcbiAgICAgICAgZXJyb3IgPSAxMDA7XHJcbiAgICAgICAgbXNnID0gXCJ1bmRlZmluZWQgSG9zdCA6XCIgKyBzZW5kVG87XHJcbiAgICAgICAgdGhpcy5Mb2dSdWxlKG9iamVjdCwgcnVsZUxvZywgbXNnLCAxMDApO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy5wYXJhbUNvbmZpZy5ERUJVR19GTEFHKSBjb25zb2xlLmxvZyhcImhlcmUyOnZhbGlkOlwiLCB2YWxpZCk7XHJcbiAgICBpZiAodmFsaWQpIHtcclxuICAgICAgaWYgKHRoaXMucGFyYW1Db25maWcuREVCVUdfRkxBRykgY29uc29sZS5sb2coXCJvcHRpb25zOlwiLCBvcHRpb25zKTtcclxuICAgICAgaWYgKHRoaXMucGFyYW1Db25maWcuREVCVUdfRkxBRykgY29uc29sZS5sb2coXCItLS0tLS1ib2R5VG9TZW5kOlwiICsgYm9keVRvU2VuZCwgXCIgIFRyaWdnZXI6XCIsIFRyaWdnZXIpO1xyXG5cclxuICAgICAgbGV0IGtleXMgPSBPYmplY3Qua2V5cyhoZWFkZXJQYXJhbSk7XHJcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwga2V5cy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIGlmICh0aGlzLnBhcmFtQ29uZmlnLkRFQlVHX0ZMQUcpIGNvbnNvbGUubG9nKGtleXNbaV0gKyBcIiBcIiArIGhlYWRlclBhcmFtW2tleXNbaV1dKTtcclxuICAgICAgICBpZiAoaGVhZGVyUGFyYW1ba2V5c1tpXV0gIT0gbnVsbCkge1xyXG4gICAgICAgICAgb3B0aW9ucy5oZWFkZXJzW2tleXNbaV1dID0gaGVhZGVyUGFyYW1ba2V5c1tpXV07XHJcblxyXG4gICAgICAgICAgLy9zY3JlZW5Db25maWdbIGtleXNbaV0gXSA9IGNvbXBvbmVudENvbmZpZ1sga2V5c1tpXSBdO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgaWYgKHRoaXMucGFyYW1Db25maWcuREVCVUdfRkxBRykgY29uc29sZS5sb2coXCJoZXJlMjphY3Rpb24uQUNUSU9OX0NPREU6XCIsIGFjdGlvbi5BQ1RJT05fQ09ERSk7XHJcbiAgICAgIGlmIChhY3Rpb24uQUNUSU9OX0NPREUgPT0gXCJTRU5EX1dBSVRcIikge1xyXG4gICAgICAgIC8qXHJcbiAgICAgICAgbGV0IHNlbmRpbmdMaWIgPSBcInJlcXVlc3RcIjtcclxuICAgICAgICBzdGF0dXMgPSAxO1xyXG4gICAgICAgIGxldCBoZWFkZXJzICA9ICB7aGVhZGVyczpvcHRpb25zLmhlYWRlcnN9O1xyXG4gICAgICAgIGlmICh0aGlzLnBhcmFtQ29uZmlnLkRFQlVHX0ZMQUcpIGNvbnNvbGUubG9nKFwiaGVhZGVyczpcIiwgaGVhZGVycyk7XHJcbiAgICAgICAgbGV0IHVybCA9IFwiaHR0cDovL1wiICsgaG9zdCArIFwiOlwiICsgcG9ydCAgKyBwYXRoICsgcGFyYW1ldGVyc1RvU2VuZCA7XHJcbiAgICAgICAgaWYgKHRoaXMucGFyYW1Db25maWcuREVCVUdfRkxBRykgY29uc29sZS5sb2coXCItLS11cmw6XCIsIHVybCk7XHJcbiAgICAgICAgaWYgKG1ldGhvZCA9PSBcIkdFVFwiKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgIGxldCByZXMgPSByZXF1ZXN0KG1ldGhvZCwgdXJsLCBoZWFkZXJzKTtcclxuICAgICAgICAgIGxldCByZXN1bHQgPSBKU09OLnBhcnNlKHJlcy5nZXRCb2R5KCd1dGY4JykpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlXHJcbiAgICAgICAgaWYgKG1ldGhvZCA9PSBcIlBPU1RcIilcclxuICAgICAgICB7XHJcblxyXG4gICAgICAgICAgbGV0IGRhdGFGb3JTeW5jID0geyBib2R5IDogYm9keVRvU2VuZCwgaGVhZGVyczpvcHRpb25zLmhlYWRlcnN9O1xyXG4gICAgICAgICAgbGV0IHJlcyA9IHJlcXVlc3QobWV0aG9kLCB1cmwsIGRhdGFGb3JTeW5jKTtcclxuICAgICAgICAgIGlmICh0aGlzLnBhcmFtQ29uZmlnLkRFQlVHX0ZMQUcpIGNvbnNvbGUubG9nKFwicmVzOlwiLCByZXMpO1xyXG4gICAgICAgICAgbGV0IHN0YXR1c0NvZGUgPSByZXMuc3RhdHVzQ29kZTtcclxuICAgICAgICAgIGxldCBtc2dSZXNwb25zZSA9XCJcIjtcclxuICAgICAgICAgIGlmIChzdGF0dXNDb2RlID09IDIwMClcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgbGV0IGNvbnRlbnRUeXBlID0gcmVzLmhlYWRlcnNbJ2NvbnRlbnQtdHlwZSddO1xyXG5cclxuICAgICAgICAgICAgbGV0IG1zZ1Jlc3BvbnNlID0gcmVzLmdldEJvZHkoJ3V0ZjgnKTtcclxuICAgICAgICAgICAgaWYgKHRoaXMucGFyYW1Db25maWcuREVCVUdfRkxBRykgY29uc29sZS5sb2coXCJzdGF0dXNDb2RlOlwiLCBzdGF0dXNDb2RlLFwiIGhlYWRlcnM6XCIsIGhlYWRlcnMsICBcIiBtc2dSZXNwb25zZTpcIiwgbXNnUmVzcG9uc2UpO1xyXG4gICAgICAgICAgICBsZXQgbiA9IGNvbnRlbnRUeXBlLnNlYXJjaChcImpzb25cIik7XHJcbiAgICAgICAgICAgIGlmIChuICE9IC0xKVxyXG4gICAgICAgICAgICAgIGxldCByZXN1bHQgPSBKU09OLnN0cmluZ2lmeShKU09OLnBhcnNlKG1zZ1Jlc3BvbnNlKSk7XHJcbiAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAgICBsZXQgcmVzdWx0ID0gbXNnUmVzcG9uc2U7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnBhcmFtQ29uZmlnLkRFQlVHX0ZMQUcpIGNvbnNvbGUubG9nKFwicmVzdWx0OlwiICsgIHJlc3VsdCk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIGVycm9yID0gc3RhdHVzQ29kZTtcclxuICAgICAgICAgICAgbGV0IG1zZ1Jlc3BvbnNlID0gcmVzLmJvZHkudG9TdHJpbmcoKTtcclxuICAgICAgICAgICAgbXNnID0gbXNnUmVzcG9uc2U7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoZXJyb3IgPT0gMClcclxuICAgICAgICB7XHJcbiAgICAgICAgICBpZiAoIChob3N0TWFwRGVmICE9IG51bGwpICYmICAoaG9zdE1hcERlZi5YU0xUX1JFQ0VJVkUgIT0gbnVsbCkgJiYgKGhvc3RNYXBEZWYuWFNMVF9SRUNFSVZFICE9IFwiXCIpIClcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgIC8vcmVzdWx0ID0geHNsdG1hcC5tYXBEYXRhT3V0KHJlc3VsdCwgaG9zdE1hcERlZi5YU0xUX1JFQ0VJVkUpO1xyXG4gICAgICAgICAgICAgIC8vaWYgKHRoaXMucGFyYW1Db25maWcuREVCVUdfRkxBRykgY29uc29sZS5sb2coXCJyZXN1bHQ6XCIsIHJlc3VsdCk7XHJcblxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgbGV0IHN0YXR1cyA9IGV4dHJhY3RTdGF0dXMgKHJ1bGVMb2csIHJlc3VsdCk7XHJcbiAgICAgICAgICBMb2dSdWxlKHJ1bGVMb2csIHJlc3VsdCwgc3RhdHVzICk7XHJcbiAgICAgICAgICBlcnJvciA9IHN0YXR1cztcclxuICAgICAgICAgIGlmIChzdGF0dXMgIT0gMClcclxuICAgICAgICAgICAgbXNnID0gcmVzdWx0O1xyXG4gICAgICAgIH1cclxuICAgICAgICAqL1xyXG5cclxuXHJcblxyXG4gICAgICB9XHJcbiAgICAgIGVsc2Uge1xyXG4gICAgICAgIC8vYXN5bmNcclxuICAgICAgICBmdW5jdGlvbiBleHRyYWN0U3RhdHVzKHJ1bGVMb2c6YW55LCBtc2dSZXNwb25zZTphbnkpIHtcclxuICAgICAgICAgIGxldCBzdWNjZXNzTXNnID0gcnVsZUxvZy5ob3N0RGVmLlNVQ0NFU1NfTVNHO1xyXG4gICAgICAgICAgXHJcbiAgICAgICAgICAgIC8vY29uc29sZS5sb2coXCItLS0tLS0tbXNnUmVzcG9uc2U6XCIsIG1zZ1Jlc3BvbnNlLCBzdWNjZXNzTXNnKTtcclxuICAgICAgICAgIGxldCBhcnJheSA9IHN1Y2Nlc3NNc2cuc3BsaXQoXCI6XCIpO1xyXG4gICAgICAgICAgbGV0IGZpZWxkID0gYXJyYXlbMF07XHJcbiAgICAgICAgICBsZXQgdmFsdWUgPSBhcnJheVsxXTtcclxuXHJcbiAgICAgICAgICBsZXQgbXNnUmVzcG9uc2VBcnIgPSBtc2dSZXNwb25zZTtcclxuICAgICAgICAgIG1zZ1Jlc3BvbnNlID0gSlNPTi5zdHJpbmdpZnkobXNnUmVzcG9uc2VBcnIpO1xyXG4gICAgICAgICAgXHJcbiAgICAgICAgICAvL2NvbnNvbGUubG9nKFwiZmllbGQ6XCIsIGZpZWxkLCBcIiB2YWx1ZTpcIiwgdmFsdWUsIFwiIG1zZ1Jlc3BvbnNlQXJyOlwiLCBtc2dSZXNwb25zZUFycik7XHJcbiAgICAgICAgICAvL2NvbnNvbGUubG9nKFwiLS0tLS0tLW1zZ1Jlc3BvbnNlQXJyW2ZpZWxkXTpcIiwgbXNnUmVzcG9uc2VBcnJbZmllbGRdLCB2YWx1ZSk7XHJcbiAgICAgICAgICBsZXQgc3RhdHVzID0gMTtcclxuICAgICAgICAgIGlmIChtc2dSZXNwb25zZUFycltmaWVsZF0gPT0gdmFsdWUpXHJcbiAgICAgICAgICAgIHN0YXR1cyA9IDA7XHJcbiAgICAgICAgICByZXR1cm4gc3RhdHVzO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZnVuY3Rpb24gZXh0cmFjdFJlc3BvbnNlRGF0YShtc2dSZXNwb25zZTphbnksIHJlc3BvbnNlRGF0YUlEOmFueSkge1xyXG4gICAgICAgICAgZnVuY3Rpb24gZ2V0S2V5KEVsbTphbnksIGVsbVZhbDphbnkpIHtcclxuICAgICAgICAgICAgICAgbGV0IGtleXMgPSBPYmplY3Qua2V5cyhFbG0pO1xyXG4gICAgICAgICAgICBsZXQgayA9IDA7XHJcbiAgICAgICAgICAgICAgIGxldCBlbG1PYmo7XHJcbiAgICAgICAgICAgIHdoaWxlIChrIDwga2V5cy5sZW5ndGgpIHtcclxuICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKFwiW2tleXNba106XCIsIGtleXNba10pO1xyXG4gICAgICAgICAgICAgIGlmIChrZXlzW2tdID09IGVsbVZhbCkge1xyXG4gICAgICAgICAgICAgICAgICBsZXQgZWxtTmFtZSA9IGtleXNba107XHJcbiAgICAgICAgICAgICAgICAgIGVsbU9iaiA9IEVsbVtlbG1OYW1lXTtcclxuICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2coXCJlbG1PYmo6XCIsIGVsbU9iaik7XHJcbiAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaysrO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICByZXR1cm4gZWxtT2JqO1xyXG4gICAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgICAgIGxldCBhcnJheSA9IHJlc3BvbnNlRGF0YUlELnNwbGl0KFwiLlwiKTtcclxuICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYXJyYXkubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgbGV0IHJldHVybktleSA9IGdldEtleShtc2dSZXNwb25zZSwgYXJyYXlbaV0pXHJcbiAgICAgICAgICAgIC8vY29uc29sZS5sb2coXCJyZXR1cm5LZXkubGVuZ3RoOlwiLCByZXR1cm5LZXkubGVuZ3RoKTtcclxuICAgICAgICAgICAgaWYgKHJldHVybktleS5sZW5ndGggPT0gMSlcclxuICAgICAgICAgICAgICBtc2dSZXNwb25zZSA9IHJldHVybktleVswXTtcclxuICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICAgIG1zZ1Jlc3BvbnNlID0gcmV0dXJuS2V5O1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhcIm1zZ1Jlc3BvbnNlOlwiLCBtc2dSZXNwb25zZSk7XHJcblxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgcmV0dXJuIG1zZ1Jlc3BvbnNlO1xyXG5cclxuXHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLypcclxuICAgICAgICBmdW5jdGlvbiAgaGFuZGxlUmVzcG9uc2VFbmQocnVsZUxvZywgbXNnUmVzcG9uc2Upe1xyXG4gICAgICAgICAgbGV0IHN0YXR1cyA9IGV4dHJhY3RTdGF0dXMgKHJ1bGVMb2csIG1zZ1Jlc3BvbnNlKTtcclxuICAgICAgICAgIHRoaXMuTG9nUnVsZShydWxlTG9nLCBtc2dSZXNwb25zZSwgc3RhdHVzKTtcclxuXHJcblxyXG4gICAgICAgICAgLy9cdC5SVUxFX0lEICsgXCIsXCIgKyAgYWN0aW9uLkFDVElPTl9JRCArIFwiLFwiICsgdXNlcnMuZ2V0VXNlck5hbWUoKSArIFwiLFwiICArIGRhdGVJc287XHJcbiAgICAgICAgICBpZiAodGhpcy5wYXJhbUNvbmZpZy5ERUJVR19GTEFHKSBjb25zb2xlLmxvZyhcIi0tLS0tLS1oYW5kbGVSZXNwb25zZTpzdGF0dXM6XCIgLCAgc3RhdHVzKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgKi9cclxuICAgICAgICBmdW5jdGlvbiBnZXRCb2R5KG1zZ1Jlc3BvbnNlOmFueSkge1xyXG4gICAgICAgICAgLy9pZiAodGhpcy5wYXJhbUNvbmZpZy5ERUJVR19GTEFHKSBjb25zb2xlLmxvZyhcIm1zZ1Jlc3BvbnNlOlwiLCBtc2dSZXNwb25zZSlcclxuICAgICAgICAgIC8vaWYgKHRoaXMucGFyYW1Db25maWcuREVCVUdfRkxBRykgY29uc29sZS5sb2coXCJtc2dSZXNwb25zZTpib2R5XCIsIG1zZ1Jlc3BvbnNlLmJvZHkpXHJcbiAgICAgICAgICByZXR1cm4gbXNnUmVzcG9uc2UuYm9keVxyXG4gICAgICAgIH1cclxuICAvKlxyXG4gICAgICAgIGxldCBoYW5kbGVSZXNwb25zZSA9IGZ1bmN0aW9uKHJlc3BvbnNlLCAgcnVsZUxvZyl7XHJcbiAgICAgICAgICBsZXQgbXNnUmVzcG9uc2UgPSAnJ1xyXG4gICAgICAgICAgcmVzcG9uc2Uub24oJ2RhdGEnLCBmdW5jdGlvbiAoY2h1bmspIHtcclxuICAgICAgICAgIG1zZ1Jlc3BvbnNlICs9IGNodW5rO1xyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgICByZXNwb25zZS5vbignZW5kJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgIGhhbmRsZVJlc3BvbnNlRW5kKHJ1bGVMb2csIG1zZ1Jlc3BvbnNlKTtcclxuICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgfVxyXG4gICAgICAgICovXHJcblxyXG4gICAgICAgIGxldCBoZWFkZXJzID0ge1xyXG4gICAgICAgICAgaGVhZGVyczogbmV3IEh0dHBIZWFkZXJzKClcclxuICAgICAgICAgICAgLnNldCgnQXV0aG9yaXphdGlvbicsIHRoaXMuU3RyQXV0aClcclxuICAgICAgICAgICAgLnNldCgnQ29udGVudC1UeXBlJywgXCJhcHBsaWNhdGlvbi9qc29uXCIpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLnBhcmFtQ29uZmlnLkRFQlVHX0ZMQUcpIGNvbnNvbGUubG9nKFwiaGVyZTI6aGVhZGVyczpcIiwgaGVhZGVycyk7XHJcbiAgICAgICAgaWYgKGJvZHlUb1NlbmQgPT0gXCJcIilcclxuICAgICAgICAgIGJvZHlUb1NlbmQgPSBudWxsO1xyXG4gICAgICAgIGxldCBib2R5VG9TZW5kS1NPTiA9IEpTT04ucGFyc2UoYm9keVRvU2VuZCk7XHJcbiAgICAgICAgaWYgKHRoaXMucGFyYW1Db25maWcuREVCVUdfRkxBRykgY29uc29sZS5sb2coXCJoZXJlMjpib2R5VG9TZW5kS1NPTjpcIiwgYm9keVRvU2VuZEtTT04pO1xyXG5cclxuICAgICAgICBsZXQgdXJsOiBzdHJpbmcgPSBob3N0RGVmLlVSTCArIHBhcmFtZXRlcnNUb1NlbmQ7XHJcbiAgICAgICAgaWYgKHRoaXMucGFyYW1Db25maWcuREVCVUdfRkxBRykgY29uc29sZS5sb2coXCItLS11cmw6XCIsIHVybCk7XHJcblxyXG5cclxuICAgICAgICBjb25zdCByZXF1ZXN0ID0gbmV3IEh0dHBSZXF1ZXN0KFxyXG4gICAgICAgICAgb3B0aW9ucy5tZXRob2QsIHVybCwgYm9keVRvU2VuZEtTT04sIGhlYWRlcnMpO1xyXG5cclxuICAgICAgICBpZiAodGhpcy5wYXJhbUNvbmZpZy5ERUJVR19GTEFHKSBjb25zb2xlLmxvZyhcIi0tLS0tLS0tLS0tLXJlcXVlc3Q6XCIsIHJlcXVlc3QsIFwiIGJvZHlUb1NlbmRLU09OOlwiLCBib2R5VG9TZW5kS1NPTilcclxuICAgICAgICBsZXQgbXNnQm9keUFsbDphbnk7XHJcbiAgICAgICAgdGhpcy5zeW5jRmxhZyA9IDE7XHJcbi8vaHR0cHM6Ly9kZXZlbG9wcGFwZXIuY29tL2dldHRpbmctc3RhcnRlZC13aXRoLWFuZ3VsYXItaHR0cC1jbGllbnQvXHJcbiAgICAgICAgdGhpcy5odHRwLnJlcXVlc3QocmVxdWVzdClcclxuICAgICAgICAgICAgLnN1YnNjcmliZShcclxuICAgICAgICAgICAgICAgIChyZXNwb25zZSkgPT4ge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLnBhcmFtQ29uZmlnLkRFQlVHX0ZMQUcpIGNvbnNvbGUubG9nKFwiIGNhbGwgc3VjY2Vzc2Z1bCB2YWx1ZSByZXR1cm5lZCBpbiBib2R5XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICByZXNwb25zZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICBsZXQgbXNnQm9keSA9IGdldEJvZHkocmVzcG9uc2UpXHJcbiAgICAgICAgICAgICAgaWYgKHR5cGVvZiBtc2dCb2R5ICE9PSBcInVuZGVmaW5lZFwiKSB7XHJcbiAgICAgICAgICAgICAgICBtc2dCb2R5QWxsID0gbXNnQm9keTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMucGFyYW1Db25maWcuREVCVUdfRkxBRykgY29uc29sZS5sb2coXCJtc2dCb2R5QWxsOlwiLCBtc2dCb2R5QWxsKTtcclxuICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgIGVycm9yID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLnBhcmFtQ29uZmlnLkRFQlVHX0ZMQUcpIGNvbnNvbGUubG9nKFwiUFVUIGNhbGwgaW4gZXJyb3I6XCIsIGVycm9yKTtcclxuICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3luY0ZsYWcgPSAwO1xyXG4gICAgICAgICAgICAgIHRoaXMuc2hvd05vdGlmaWNhdGlvbihcImVycm9yXCIsIFwiZXJyb3IgY2FsbGluZzogXCIgKyB1cmwgKyBcIjpcIiArIGVycm9yLmVycm9yLmVycm9yKTtcclxuICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMucGFyYW1Db25maWcuREVCVUdfRkxBRykgY29uc29sZS5sb2coXCJUaGUgIG9ic2VydmFibGUgaXMgbm93IGNvbXBsZXRlZDptc2dCb2R5QWxsOlwiLCBtc2dCb2R5QWxsKTtcclxuICAgICAgICAgICAgICBpZiAodHlwZW9mIG1zZ0JvZHlBbGwgIT09IFwidW5kZWZpbmVkXCIpIHtcclxuICAgICAgICAgICAgICAgIGxldCBzdGF0dXMgPSBleHRyYWN0U3RhdHVzKHJ1bGVMb2csIG1zZ0JvZHlBbGwpO1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMucGFyYW1Db25maWcuREVCVUdfRkxBRykgY29uc29sZS5sb2coXCItLS0tLS0tdWxlTG9nLnJ1bGU6XCIsIHJ1bGVMb2cucnVsZSk7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKFRyaWdnZXIgPT0gXCJQT1NUX1FVRVJZXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgcmVzcG9uc2VEYXRhSUQgPSBydWxlTG9nLnJ1bGUuUkVTUE9OU0VfREFUQV9JRDtcclxuICAgICAgICAgICAgICAgICAgaWYgKHRoaXMucGFyYW1Db25maWcuREVCVUdfRkxBRykgY29uc29sZS5sb2coXCJUQUJTOnJlc3BvbnNlRGF0YUlEOlwiLCByZXNwb25zZURhdGFJRCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICBsZXQgcmVzcG9uc2VEYXRhID0gZXh0cmFjdFJlc3BvbnNlRGF0YShtc2dCb2R5QWxsLCByZXNwb25zZURhdGFJRCk7XHJcbiAgICAgICAgICAgICAgICAgIGlmICh0aGlzLnBhcmFtQ29uZmlnLkRFQlVHX0ZMQUcpIGNvbnNvbGUubG9nKFwiVEFCUzpyZXNwb25zZURhdGE6XCIsIHJlc3BvbnNlRGF0YSwgXCJxdWVyeURhdGE6XCIsIHF1ZXJ5RGF0YSk7XHJcbiAgICAgICAgICAgICAgICAgIGlmICh0aGlzLnBhcmFtQ29uZmlnLkRFQlVHX0ZMQUcpIGNvbnNvbGUubG9nKFwiVEFCUzpydWxlTG9nLnJ1bGUuUkVTUE9OU0VfREFUQV9OQU1FOlwiLCBydWxlTG9nLnJ1bGUuUkVTUE9OU0VfREFUQV9OQU1FKTtcclxuICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiByZXNwb25zZURhdGEgIT09IFwidW5kZWZpbmVkXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9iamVjdFtydWxlTG9nLnJ1bGUuUkVTUE9OU0VfREFUQV9OQU1FXSA9IHJlc3BvbnNlRGF0YTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLnBhcmFtQ29uZmlnLkRFQlVHX0ZMQUcpIGNvbnNvbGUubG9nKFwiVEFCUzpvYmplY3QudGFic0FQSVJlc3BvbnNlOlwiLCBvYmplY3QudGFic0FQSVJlc3BvbnNlKVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zeW5jRmxhZyA9IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuTG9nUnVsZShvYmplY3QsIHJ1bGVMb2csIG1zZ0JvZHlBbGwsIHN0YXR1cyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgLypcclxuICAgICAgICBsZXQgcmVxTmV3ID0gdGhpcy5odHRwLnJlcXVlc3Qob3B0aW9ucywgZnVuY3Rpb24ocmVzcG9uc2UpeyBoYW5kbGVSZXNwb25zZShyZXNwb25zZSwgIHJ1bGVMb2cpOyB9KTtcclxuICAgICAgICByZXFOZXcub24oJ2Vycm9yJywgZnVuY3Rpb24oZXJyKSB7XHJcbiAgICAgICAgICAvLyBIYW5kbGUgZXJyb3JcclxuICAgICAgICAgIGVycm9yID0gZXJyO1xyXG4gICAgICAgICAgbXNnID0gXCJFcnJvciBzZW5kaW5nIHRvIEhvc3QgOlwiICtzZW5kVG8gO1xyXG4gICAgICAgICAgaWYgKHRoaXMucGFyYW1Db25maWcuREVCVUdfRkxBRykgY29uc29sZS5sb2coIG1zZyArIFwiIEVycm9yOlwiICsgZXJyICk7XHJcbiAgICAgICAgICB0aGlzLkxvZ1J1bGUocnVsZUxvZywgbXNnICsgXCIgRXJyb3I6XCIgKyBlcnIsIDQwMCApO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBpZiAodGhpcy5wYXJhbUNvbmZpZy5ERUJVR19GTEFHKSBjb25zb2xlLmxvZyhcImhlcmUxXCIpO1xyXG4gICAgICAgIHJlcU5ldy53cml0ZShib2R5VG9TZW5kKTtcclxuICAgICAgICBpZiAodGhpcy5wYXJhbUNvbmZpZy5ERUJVR19GTEFHKSBjb25zb2xlLmxvZyhcImhlcmUyXCIpO1xyXG4gICAgICAgIHJlcU5ldy5lbmQoKTtcclxuICAgICAgICBpZiAodGhpcy5wYXJhbUNvbmZpZy5ERUJVR19GTEFHKSBjb25zb2xlLmxvZyhcImhlcmUzXCIpO1xyXG4gICAgICAgICovXHJcbiAgICAgIH1cclxuXHJcbiAgICB9XHJcbiAgICBsZXQgc3RhdHVzUmVjID0ge1xyXG4gICAgICBzdGF0dXM6IGVycm9yLFxyXG4gICAgICBtc2c6IG1zZ1xyXG4gICAgfTtcclxuXHJcbiAgICAvKmxldCBzdGF0dXMgPSAxO1xyXG4gICAgaWYgKCF2YWxpZCl7XHJcbiAgICAgIHN0YXR1c1JlYy5zdGF0dXMgPSAxO1xyXG4gICAgICBzdGF0dXNSZWMubXNnID1cclxuICAgIH0qL1xyXG4gICAgaWYgKHRoaXMucGFyYW1Db25maWcuREVCVUdfRkxBRykgY29uc29sZS5sb2coXCJ2YWxpZDpcIiwgdmFsaWQsIFwiIHN0YXR1czpcIiwgc3RhdHVzUmVjKTtcclxuXHJcbiAgICByZXR1cm4gKHN0YXR1c1JlYyk7XHJcblxyXG4gIH1cclxuICBwdWJsaWMgc2VuZFRvU2VydmVyKG9iamVjdDphbnksIGFjdGlvbnNBcnI6YW55LCBxdWVyeURhdGE6YW55LCBydWxlOmFueSwgYWN0aW9uOmFueSwgVHJpZ2dlcjphbnksIGhvc3RzQXJyOmFueSwgaG9zdHNNYXBBcnI6YW55KSB7XHJcbiAgICBmdW5jdGlvbiBnZXRFbG1WYWx1ZShwYXJhbURhdGE6YW55LCBxdWVyeURhdGE6YW55KSB7XHJcbiAgICAgIGZ1bmN0aW9uIGdldE9SREVSX0ZJRUxEU0RhdGEocGFyYW06YW55LCBvcmRlckZpZWxkczphbnkpIHtcclxuXHRcdCAgICAgIGxldCB2YWwgPSBcIlwiO1xyXG4gICAgICAgIGlmIChvcmRlckZpZWxkcyAhPSBcIlwiKSB7XHJcblx0XHQgICAgICAgIGxldCBhcnJheSA9IHBhcmFtLnNwbGl0KFwiLlwiKTtcclxuICAgICAgICAgIHZhciBhcnJOYW1lID0gYXJyYXlbMF0udHJpbSgpO1xyXG5cdFx0ICAgICAgICBsZXQgZmllbGROYW1lID0gYXJyYXlbMV07XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhcImdldEVsbVZhbHVlOmZpZWxkTmFtZTpcIiwgZmllbGROYW1lLCBcIiBvcmRlckZpZWxkczpcIiwgb3JkZXJGaWVsZHMpO1xyXG4gICAgICAgICAgICBpZiAodHlwZW9mIG9yZGVyRmllbGRzICE9PSBcInVuZGVmaW5lZFwiKXtcclxuICAgICAgICAgICAgICBvcmRlckZpZWxkcyA9IEpTT04ucGFyc2Uob3JkZXJGaWVsZHMpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcImdldEVsbVZhbHVlOm9yZGVyRmllbGRzOlwiLCBvcmRlckZpZWxkcyk7XHJcbiAgICAgICAgICAgIHZhciBmaWVsZHNEYXRhID0gb3JkZXJGaWVsZHNbYXJyTmFtZV07XHJcbiAgICAgICAgICAgICAgdmFsID0gZmllbGRzRGF0YVtmaWVsZE5hbWVdO1xyXG4gICAgICAgICAgICAgIH1cclxuXHRcdCAgICAgIH1cclxuXHRcdFx0cmV0dXJuIHZhbDtcclxuXHRcdH1cclxuICAgICAgY29uc29sZS5sb2coXCJnZXRFbG1WYWx1ZTpwYXJhbURhdGE6XCIsIHBhcmFtRGF0YSk7XHJcblx0XHRcdGxldCB2YWwgPSBwYXJhbURhdGE7XHJcbiAgICAgIHZhciBuID0gcGFyYW1EYXRhLnNlYXJjaChcIjo6XCIpO1xyXG5cdFx0XHRpZiAobiAhPSAtMSlcclxuXHRcdFx0e1xyXG4gICAgICAgIHZhciBhcnJheSA9IHBhcmFtRGF0YS5zcGxpdChcIjo6XCIpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCBcImdldEVsbVZhbHVlOjphcnJheTpcIiAsYXJyYXkpO1xyXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYXJyYXkubGVuZ3RoOyBpKyspXHJcblx0XHRcdFx0e1xyXG4gICAgICAgICAgaWYoIChpICE9IDApICYmIGFycmF5W2ldICE9IFwiXCIgKVxyXG5cdFx0XHRcdFx0e1xyXG4gICAgICAgICAgICB2YXIgbiA9IGFycmF5W2ldLnNlYXJjaChcIiBcIik7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCBcImdldEVsbVZhbHVlOjpuOlwiICwgbiAsIFwiYXJyYXlbaV06XCIsIGFycmF5W2ldKTtcclxuXHRcdFx0XHRcdFx0aWYgKG4gPT0gLTEpXHJcblx0XHRcdFx0XHRcdFx0biA9IGFycmF5W2ldLmxlbmd0aDtcclxuXHRcdFx0XHRcdFx0aWYgKG4gIT0gLTEpXHJcblx0XHRcdFx0XHRcdHtcclxuICAgICAgICAgICAgICB2YXIgcGFyYW0gPSBhcnJheVtpXS5zbGljZSgwLCBuKTtcclxuXHRcdFx0XHRcdFx0XHRwYXJhbSA9IHBhcmFtLnRyaW0oKTtcclxuICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImdldEVsbVZhbHVlOjpwYXJhbTpcIitwYXJhbSk7XHJcblxyXG4gICAgICAgICAgICAgIHZhciBuID0gcGFyYW0uaW5jbHVkZXMoXCIuXCIpO1xyXG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKCBcImdldEVsbVZhbHVlOjpuOlwiICwgbik7XHJcbiAgICAgICAgICAgICAgaWYgKG4gPT0gdHJ1ZSl7XHJcbiAgICAgICAgICAgICAgICB2YWwgPSBnZXRPUkRFUl9GSUVMRFNEYXRhKHBhcmFtLHF1ZXJ5RGF0YS5PUkRFUl9GSUVMRFMpO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICBlbHNlXHJcblx0XHRcdFx0XHRcdFx0dmFsID0gcXVlcnlEYXRhW3BhcmFtXTtcclxuXHRcdFx0XHRcdFx0XHRpZiAodHlwZW9mIHZhbCA9PSBcInN0cmluZ1wiKVxyXG5cdFx0XHRcdFx0XHRcdFx0dmFsID0gdmFsLnRyaW0oKTtcclxuICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImdldEVsbVZhbHVlOjpwYXJhbTpcIiAsIHBhcmFtLCBcIiB2YWw6XCIsIHZhbCApO1xyXG5cclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0XHRpZiAodHlwZW9mIHZhbCA9PSBcInN0cmluZ1wiKVxyXG5cdFx0XHRcdHZhbCA9IHZhbC5zcGxpdChcIidcIikuam9pbihcIlwiKTtcclxuXHRcdFx0cmV0dXJuIHZhbDtcclxuXHRcdH1cclxuICAgIGZ1bmN0aW9uIGdldEhvc3Qoc2VuZFRvOmFueSwgaG9zdHNBcnI6YW55KSB7XHJcbiAgICAgIGxldCBpID0gMDtcclxuICAgICAgd2hpbGUgKGkgPCBob3N0c0Fyci5sZW5ndGgpIHtcclxuICAgICAgICAvL2NvbnNvbGUubG9nKFwiLS0tLS0tLS0tLS1ob3N0c0FycltpXS5IT1NUX0lEIDpcIiwgaG9zdHNBcnJbaV0uSE9TVF9JRCwgXCIgc2VuZFRvOlwiLCBzZW5kVG8pO1xyXG5cdFx0XHRcdGlmIChob3N0c0FycltpXS5IT1NUX0lEID09IHNlbmRUbylcclxuXHRcdFx0XHRcdHJldHVybiBob3N0c0FycltpXTtcclxuXHRcdFx0XHRpKys7XHJcblx0XHRcdH1cclxuXHRcdFx0cmV0dXJuIG51bGw7XHJcblxyXG5cdFx0fVxyXG4gICAgZnVuY3Rpb24gZ2V0SG9zdE1hcChob3N0RGVmOmFueSwgbWFwSUQ6YW55LCBob3N0c01hcEFycjphbnkpIHtcclxuICAgICAgbGV0IGkgPSAwO1xyXG4gICAgICAvL2NvbnNvbGUubG9nKFwiLS0tLS0tLS0tLS1tYXBJRDpcIiwgbWFwSUQsIFwiIGhvc3REZWYuTUFQX0lEOlwiLCBob3N0RGVmLk1BUF9JRCk7XHJcbiAgICAgIGlmICgobWFwSUQgIT0gbnVsbCkgJiYgKG1hcElEICE9IFwiXCIpKSB7XHJcbiAgICAgICAgd2hpbGUgKGkgPCBob3N0c01hcEFyci5sZW5ndGgpIHtcclxuICAgICAgICAgIGlmICgoaG9zdHNNYXBBcnJbaV0uSE9TVF9JRCA9PSBob3N0RGVmLkhPU1RfSUQpICYmIChtYXBJRCA9PSBob3N0c01hcEFycltpXS5NQVBfSUQpKVxyXG5cdFx0XHRcdFx0XHRyZXR1cm4gaG9zdHNNYXBBcnJbaV07XHJcblx0XHRcdFx0XHRpKys7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHRcdHJldHVybiBudWxsO1xyXG5cclxuXHRcdH1cclxuICAgICAgLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuICAgICAgaWYgKHRoaXMucGFyYW1Db25maWcuREVCVUdfRkxBRykgY29uc29sZS5sb2coXCIqKioqKioqKioqKioqKioqYWN0aW9uc0FycjpcIiwgYWN0aW9uc0Fycik7XHJcbiAgICAgIGxldCBzdGF0dXNSZWM7XHJcbiAgICAgIGxldCBzZW5kVG8gPSBhY3Rpb25zQXJyLlNFTkRfVE87XHJcbiAgICBsZXQgcXJ5UGFyYW06YW55ID0ge307XHJcbiAgICBsZXQgaGVhZGVyUGFyYW06YW55ID0ge307XHJcbiAgICBsZXQgYm9keVRvU2VuZEFycjphbnkgPSBbXTtcclxuICAgICAgbGV0IGJvZHlUb1NlbmQgPSBcIlwiO1xyXG4gICAgICBsZXQgcGFyYW1ldGVyc1RvU2VuZCA9IFwiXCI7XHJcbiAgICBsZXQgaG9zdERlZiA9IGdldEhvc3Qoc2VuZFRvLCBob3N0c0Fycik7XHJcbiAgICBsZXQgaG9zdE1hcERlZiA9IGdldEhvc3RNYXAoaG9zdERlZiwgYWN0aW9uLk1BUF9JRCwgaG9zdHNNYXBBcnIpO1xyXG4gICAgICBpZiAodGhpcy5wYXJhbUNvbmZpZy5ERUJVR19GTEFHKSBjb25zb2xlLmxvZyhcImhvc3RNYXBEZWY6XCIsIGhvc3RNYXBEZWYpO1xyXG5cclxuICAgICAgaWYgKHRoaXMucGFyYW1Db25maWcuREVCVUdfRkxBRykgY29uc29sZS5sb2coXCIqKioqaG9zdERlZi5IRUFERVI6XCIsIGhvc3REZWYuSEVBREVSKTtcclxuXHJcbiAgICBpZiAoKGhvc3REZWYuSEVBREVSICE9IG51bGwpICYmIChob3N0RGVmLkhFQURFUiAhPSBcIlwiKSkge1xyXG4gICAgICAgIGxldCBhcnJheSA9IGhvc3REZWYuSEVBREVSLnNwbGl0KFwiXFxuXCIpO1xyXG4gICAgICAgIGlmICh0aGlzLnBhcmFtQ29uZmlnLkRFQlVHX0ZMQUcpIGNvbnNvbGUubG9nKFwiYXJyYXk6XCIsIGFycmF5LCBcIiBhcnJheS5sZW5ndGg6XCIsIGFycmF5Lmxlbmd0aCk7XHJcblxyXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFycmF5Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICBsZXQgZWxlbSA9IGFycmF5W2ldO1xyXG4gICAgICAgIGlmIChlbGVtICE9IFwiXCIpe1xyXG4gICAgICAgICAgbGV0IGFycmF5UGFyYW0gPSBlbGVtLnNwbGl0KFwiOlwiKTtcclxuICAgICAgICAgIGxldCBwYXJhbSA9IGFycmF5UGFyYW1bMF07XHJcbiAgICAgICAgICBwYXJhbSA9IHBhcmFtLnRyaW0oKTtcclxuICAgICAgICAgIGxldCBwYXJhbURhdGEgPSBhcnJheVBhcmFtWzFdO1xyXG4gICAgICAgICAgcGFyYW1EYXRhID0gcGFyYW1EYXRhLnRyaW0oKTtcclxuICAgICAgICAgIGlmICh0aGlzLnBhcmFtQ29uZmlnLkRFQlVHX0ZMQUcpIGNvbnNvbGUubG9nKFwicGFyYW1EYXRhOlwiLCBwYXJhbURhdGEpO1xyXG4gICAgICAgICAgcGFyYW1EYXRhID0gZ2V0RWxtVmFsdWUocGFyYW1EYXRhLCBxdWVyeURhdGEpO1xyXG4gICAgICAgICAgaWYgKHRoaXMucGFyYW1Db25maWcuREVCVUdfRkxBRykgY29uc29sZS5sb2coXCJnZXRFbG1WYWx1ZTpwb3N0IGdldEVsbVZhbHVlIHBhcmFtOlwiLCBwYXJhbSwgXCIgcGFyYW1EYXRhOlwiLCBwYXJhbURhdGEpO1xyXG4gICAgICAgICAgaGVhZGVyUGFyYW1bcGFyYW1dID0gcGFyYW1EYXRhO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuXHJcblxyXG4gICAgaWYgKChhY3Rpb25zQXJyLkJPRFlfREFUQSAhPSBudWxsKSAmJiAoYWN0aW9uc0Fyci5CT0RZX0RBVEEgIT0gXCJcIikpIHtcclxuICAgICAgICBsZXQgYm9keURhdGEgPSBhY3Rpb25zQXJyLkJPRFlfREFUQTtcclxuICAgICAgaWYgKHRoaXMucGFyYW1Db25maWcuREVCVUdfRkxBRykgY29uc29sZS5sb2coXCI6cG9zdDpib2R5RGF0YTpcIiwgYm9keURhdGEpO1xyXG4gICAgICBsZXQgYXJyYXkgPSBib2R5RGF0YS5zcGxpdChcIlxcblwiKTtcclxuICAgICAgaWYgKHRoaXMucGFyYW1Db25maWcuREVCVUdfRkxBRykgY29uc29sZS5sb2coXCI6cG9zdDphcnJheTpcIiwgYXJyYXksIFwiIGFycmF5Lmxlbmd0aDpcIiwgYXJyYXkubGVuZ3RoKTtcclxuXHJcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYXJyYXkubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgIGxldCBlbGVtID0gYXJyYXlbaV07XHJcbiAgICAgICAgaWYgKGVsZW0gIT0gXCJcIil7XHJcbiAgICAgICAgICBsZXQgYXJyYXlQYXJhbSA9IGVsZW0uc3BsaXQoXCI9XCIpO1xyXG4gICAgICAgICAgbGV0IHBhcmFtID0gYXJyYXlQYXJhbVswXTtcclxuICAgICAgICAgIHBhcmFtID0gcGFyYW0udHJpbSgpO1xyXG4gICAgICAgICAgbGV0IHBhcmFtRGF0YSA9IGFycmF5UGFyYW1bMV07XHJcbiAgICAgICAgICBwYXJhbURhdGEgPSBwYXJhbURhdGEudHJpbSgpO1xyXG4gICAgICAgICAgaWYgKHRoaXMucGFyYW1Db25maWcuREVCVUdfRkxBRykgY29uc29sZS5sb2coXCJnZXRFbG1WYWx1ZTpwYXJhbURhdGE6XCIsIHBhcmFtRGF0YSk7XHJcbiAgICAgICAgICBwYXJhbURhdGEgPSBnZXRFbG1WYWx1ZShwYXJhbURhdGEsIHF1ZXJ5RGF0YSk7XHJcbiAgICAgICAgICBpZiAodGhpcy5wYXJhbUNvbmZpZy5ERUJVR19GTEFHKSBjb25zb2xlLmxvZyhcImdldEVsbVZhbHVlOnBvc3QyIHBhcmFtOlwiLCBwYXJhbSwgXCIgcGFyYW1EYXRhOlwiLCBwYXJhbURhdGEpO1xyXG4gICAgICAgICAgcXJ5UGFyYW1bcGFyYW1dID0gcGFyYW1EYXRhO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICAgIC8vaWYgKHRoaXMucGFyYW1Db25maWcuREVCVUdfRkxBRykgY29uc29sZS5sb2coXCJxcnlQYXJhbTpoZXJlXCIpO1xyXG4gICAgICAgIC8vaWYgKHRoaXMucGFyYW1Db25maWcuREVCVUdfRkxBRykgY29uc29sZS5sb2coXCJxcnlQYXJhbTpcIiwgcXJ5UGFyYW0gLCBcIiBxcnlQYXJhbS5sZW5ndGggOlwiLCBPYmplY3Qua2V5cyhxcnlQYXJhbSkubGVuZ3RoKTtcclxuICAgICAgICBib2R5VG9TZW5kQXJyLnB1c2gocXJ5UGFyYW0pO1xyXG4gICAgICAgIC8vaWYgKHRoaXMucGFyYW1Db25maWcuREVCVUdfRkxBRykgY29uc29sZS5sb2coXCItLS1ob3N0RGVmOlwiLCBob3N0RGVmKTsvL2Z1YWRcclxuXHJcbiAgICAgIGlmIChib2R5VG9TZW5kQXJyLmxlbmd0aCAhPSAwKSB7XHJcbiAgICAgICAgICAvKmlmICggKGhvc3RNYXBEZWYgIT0gbnVsbCkgJiYgIChob3N0TWFwRGVmLlhTTFRfU0VORCAhPSBudWxsKSAmJiAoaG9zdE1hcERlZi5YU0xUX1NFTkQgIT0gXCJcIikgKVxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgYm9keVRvU2VuZCA9IHhzbHRtYXAubWFwRGF0YShib2R5VG9TZW5kQXJyLCBob3N0TWFwRGVmLlhTTFRfU0VORCk7XHJcblxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICB7Ki9cclxuICAgICAgICAgICAgYm9keVRvU2VuZCA9IEpTT04uc3RyaW5naWZ5KGJvZHlUb1NlbmRBcnIpXHJcbiAgICAgICAgICAvL31cclxuICAgICAgICB9XHJcbiAgICAgIC8qXHJcbiAgICAgIGxldCBoZXhvdXQgPSBoZXhkdW1wKGJvZHlUb1NlbmQsIDE2KSA7XHJcbiAgICAgIGlmICh0aGlzLnBhcmFtQ29uZmlnLkRFQlVHX0ZMQUcpIGNvbnNvbGUubG9nKFwiaGV4b3V0OlwiLGhleG91dCk7XHJcbiAgICAgICovXHJcbiAgICAgIH1cclxuXHJcbiAgICBpZiAoKGFjdGlvbnNBcnIuUEFSQU1FVEVSX0RBVEEgIT0gbnVsbCkgJiYgKGFjdGlvbnNBcnIuUEFSQU1FVEVSX0RBVEEgIT0gXCJcIikpIHtcclxuICAgICAgICBsZXQgcGFyYW1ldGVyRGF0YSA9IGFjdGlvbnNBcnIuUEFSQU1FVEVSX0RBVEE7XHJcbiAgICAgICAgaWYgKHRoaXMucGFyYW1Db25maWcuREVCVUdfRkxBRykgY29uc29sZS5sb2coXCJwYXJhbWV0ZXJEYXRhOlwiLCBwYXJhbWV0ZXJEYXRhKTtcclxuICAgICAgaWYgKHRoaXMucGFyYW1Db25maWcuREVCVUdfRkxBRykgY29uc29sZS5sb2coXCJwYXJhbWV0ZXJEYXRhLmxlbmd0aDpcIiwgcGFyYW1ldGVyRGF0YS5sZW5ndGgpO1xyXG5cclxuXHJcbiAgICAgIGxldCBhcnJheSA9IHBhcmFtZXRlckRhdGEuc3BsaXQoXCJcXG5cIik7XHJcbiAgICAgICAgaWYgKHRoaXMucGFyYW1Db25maWcuREVCVUdfRkxBRykgY29uc29sZS5sb2coXCJhcnJheTpcIiwgYXJyYXksIFwiIGFycmF5Lmxlbmd0aDpcIiwgYXJyYXkubGVuZ3RoKTtcclxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhcnJheS5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgbGV0IGVsZW0gPSBhcnJheVtpXTtcclxuICAgICAgICBpZiAoZWxlbSAhPSBcIlwiKXtcclxuICAgICAgICAgIGxldCBhcnJheVBhcmFtID0gZWxlbS5zcGxpdChcIj1cIik7XHJcbiAgICAgICAgICBsZXQgcGFyYW0gPSBhcnJheVBhcmFtWzBdO1xyXG4gICAgICAgICAgcGFyYW0gPSBwYXJhbS50cmltKCk7XHJcbiAgICAgICAgICBsZXQgcGFyYW1EYXRhID0gYXJyYXlQYXJhbVsxXTtcclxuICAgICAgICAgIHBhcmFtRGF0YSA9IHBhcmFtRGF0YS50cmltKCk7XHJcbiAgICAgICAgICBpZiAodGhpcy5wYXJhbUNvbmZpZy5ERUJVR19GTEFHKSBjb25zb2xlLmxvZyhcImdldEVsbVZhbHVlOjpwYXJhbURhdGE6XCIsIHBhcmFtRGF0YSk7XHJcbiAgICAgICAgICBwYXJhbURhdGEgPSBnZXRFbG1WYWx1ZShwYXJhbURhdGEsIHF1ZXJ5RGF0YSk7XHJcbiAgICAgICAgICBpZiAodGhpcy5wYXJhbUNvbmZpZy5ERUJVR19GTEFHKSBjb25zb2xlLmxvZyhcImdldEVsbVZhbHVlOiBwb3N0MzpwYXJhbTpcIiwgcGFyYW0sIFwiIHBhcmFtRGF0YTpcIiwgcGFyYW1EYXRhKTtcclxuICAgICAgICAgIGlmIChwYXJhbWV0ZXJzVG9TZW5kID09IFwiXCIpXHJcbiAgICAgICAgICAgIHBhcmFtZXRlcnNUb1NlbmQgPSBcIj9cIiArIHBhcmFtICsgXCI9XCIgKyBwYXJhbURhdGE7XHJcbiAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgIHBhcmFtZXRlcnNUb1NlbmQgPSBwYXJhbWV0ZXJzVG9TZW5kICsgXCImXCIgKyBwYXJhbSArIFwiPVwiICsgcGFyYW1EYXRhO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICBpZiAodGhpcy5wYXJhbUNvbmZpZy5ERUJVR19GTEFHKSBjb25zb2xlLmxvZyhcImdldEVsbVZhbHVlOiBwYXJhbWV0ZXJzVG9TZW5kOlwiLCBwYXJhbWV0ZXJzVG9TZW5kKTtcclxuICAgIH1cclxuICAgIGxldCBwYXRoRXh0cmEgPVwiXCI7XHJcbiAgICBpZiAoIChhY3Rpb25zQXJyLkVYVFJBX0RBVEEgIT0gbnVsbCkgJiYgKGFjdGlvbnNBcnIuRVhUUkFfREFUQSAhPSBcIlwiKSApXHJcbiAgICAgIHtcclxuICAgICAgICBsZXQgcGFyYW1ldGVyRXh0cmEgPSBhY3Rpb25zQXJyLkVYVFJBX0RBVEE7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJwYXJhbWV0ZXJFeHRyYTpcIiwgcGFyYW1ldGVyRXh0cmEpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwicGFyYW1ldGVyRXh0cmEubGVuZ3RoOlwiLHBhcmFtZXRlckV4dHJhLmxlbmd0aCk7XHJcbiAgICAgICAgXHJcblxyXG4gICAgICAgIGxldCBhcnJheSA9IHBhcmFtZXRlckV4dHJhLnNwbGl0KFwiXFxuXCIpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiYXJyYXk6XCIsIGFycmF5LCBcIiBhcnJheS5sZW5ndGg6XCIsIGFycmF5Lmxlbmd0aCk7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhcnJheS5sZW5ndGg7IGkrKylcclxuICAgICAgICB7XHJcbiAgICAgICAgICBsZXQgZWxlbSA9IGFycmF5W2ldO1xyXG4gICAgICAgICAgY29uc29sZS5sb2coXCJlbGVtOlwiLCBlbGVtKTtcclxuICAgICAgICAgIGxldCBhcnJheVBhcmFtID0gZWxlbS5zcGxpdChcIj1cIik7XHJcbiAgICAgICAgICBsZXQgcGFyYW0gPSBhcnJheVBhcmFtWzBdO1xyXG4gICAgICAgICAgcGFyYW0gPSBwYXJhbS50cmltKCk7XHJcbiAgICAgICAgICBsZXQgcGFyYW1EYXRhID0gYXJyYXlQYXJhbVsxXTtcclxuICAgICAgICAgIGlmIChwYXJhbSA9PSBcIkRCTE9DXCIpe1xyXG4gICAgICAgICAgICBwYXRoRXh0cmEgPSBcIiZcIiArIGVsZW07XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwicGF0aEV4dHJhOlwiLCBwYXRoRXh0cmEpXHJcblxyXG4gICAgICAgICAgICAvL3JlcS5fcGFyc2VkVXJsLnBhdGggPSByZXEuX3BhcnNlZFVybC5wYXRoICsgXCImXCIgKyBlbGVtO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICBpZiAodGhpcy5wYXJhbUNvbmZpZy5ERUJVR19GTEFHKSBjb25zb2xlLmxvZyhcImJvZHlUb1NlbmQ6XCIsIGJvZHlUb1NlbmQpO1xyXG4gICAgICBpZiAodGhpcy5wYXJhbUNvbmZpZy5ERUJVR19GTEFHKSBjb25zb2xlLmxvZyhcInBhcmFtZXRlcnNUb1NlbmQ6XCIsIHBhcmFtZXRlcnNUb1NlbmQpO1xyXG5cclxuICAgIHN0YXR1c1JlYyA9IHRoaXMucGVyZm9ybUh0dHBQb3N0KG9iamVjdCwgYm9keVRvU2VuZCwgcGFyYW1ldGVyc1RvU2VuZCwgc2VuZFRvLCBxdWVyeURhdGEsIHJ1bGUsIGFjdGlvbiwgVHJpZ2dlciwgaG9zdERlZiwgaG9zdE1hcERlZiwgaGVhZGVyUGFyYW0sIHBhdGhFeHRyYSk7XHJcbiAgICAgIGlmICh0aGlzLnBhcmFtQ29uZmlnLkRFQlVHX0ZMQUcpIGNvbnNvbGUubG9nKFwicG9zdCBwZXJmb3JtSHR0cFBvc3Q6IHN0YXR1czpcIiwgc3RhdHVzUmVjKTtcclxuICAgICAgcmV0dXJuIHN0YXR1c1JlYztcclxuXHJcblxyXG5cclxuXHJcblxyXG4gIH1cclxuICBwdWJsaWMgcGVyZm9ybUFjdGlvbihvYmplY3Q6YW55LCBxcnk6YW55LCBwdHI6YW55LCBxdWVyeURhdGE6YW55LCBydWxlOmFueSwgcnVsZXNEZWY6YW55LCBUcmlnZ2VyOmFueSwgaG9zdHNBcnI6YW55LCBob3N0c01hcEFycjphbnksIFJVTEVfSUQ6YW55KSB7XHJcbiAgICBpZiAodGhpcy5wYXJhbUNvbmZpZy5ERUJVR19GTEFHKSBjb25zb2xlLmxvZyhcIi0tLXBlcmZvcm1BY3Rpb246cnVsZXNEZWY6XCIsIHJ1bGVzRGVmKTtcclxuICAgICAgbGV0IHN0YXR1cyA9IDA7XHJcbiAgICBsZXQgc3RhdHVzUmVjID0ge1xyXG4gICAgICBzdGF0dXM6IDAsXHJcbiAgICAgIG1zZzogXCJcIlxyXG4gICAgICB9O1xyXG5cclxuICAgICAgbGV0IGFjdGlvblB0ciA9IHJ1bGVzRGVmLmFjdGlvblB0cnNBcnJbcXJ5XTtcclxuICAgIGlmICh0eXBlb2YgYWN0aW9uUHRyICE9PSBcInVuZGVmaW5lZFwiKSB7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLnBhcmFtQ29uZmlnLkRFQlVHX0ZMQUcpIGNvbnNvbGUubG9nKFwicHRyOlwiLCBwdHIpO1xyXG4gICAgICAgIGlmICh0aGlzLnBhcmFtQ29uZmlnLkRFQlVHX0ZMQUcpIGNvbnNvbGUubG9nKFwiYWN0aW9uUHRyOlwiLCBhY3Rpb25QdHIpO1xyXG4gICAgICBsZXQgaSA9IHB0cjtcclxuXHJcbiAgICAgICAgbGV0IHB0cjEgPSBhY3Rpb25QdHJbaV07XHJcbiAgICAgIGxldCBwdHIyID0gYWN0aW9uUHRyW2FjdGlvblB0ci5sZW5ndGggLTFdO1xyXG4gICAgICAvLyBpZiAodHlwZW9mIGFjdGlvblB0cltpICsgMV0gIT09IFwidW5kZWZpbmVkXCIpXHJcbiAgICAgIC8vICAgcHRyMiA9IGFjdGlvblB0cltpICsgMV07XHJcbiAgICAgIC8vIGVsc2VcclxuICAgICAgLy8gICBwdHIyID0gcnVsZXNEZWYuYWN0aW9uc0Fyci5sZW5ndGhcclxuXHJcbiAgICAgIGlmICh0aGlzLnBhcmFtQ29uZmlnLkRFQlVHX0ZMQUcpIGNvbnNvbGUubG9nKFwicHRyMTpcIiwgcHRyMSwgXCIgcHRyMjpcIiwgcHRyMik7XHJcbiAgICAgICAgbGV0IGogPSBwdHIxO1xyXG4gICAgICAvL2xldCBydWxlSUQgPSBydWxlc0RlZi5hY3Rpb25zQXJyW2pdLlJVTEVfSUQ7XHJcbiAgICAgIGxldCBydWxlSUQgPSBSVUxFX0lEO1xyXG4gICAgICB3aGlsZSAoKGogPD0gcHRyMikgJiYgKHN0YXR1cyA9PSAwKSkge1xyXG4gICAgICAgIGlmIChydWxlSUQgPT0gcnVsZXNEZWYuYWN0aW9uc0FycltqXS5SVUxFX0lEKVxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgLy9pZiAodGhpcy5wYXJhbUNvbmZpZy5ERUJVR19GTEFHKSBjb25zb2xlLmxvZyhcInJ1bGVzRGVmLmFjdGlvbnNBcnI6XCIscnVsZXNEZWYuYWN0aW9uc0FycltqXSk7XHJcbiAgICAgICAgICBpZiAoKHJ1bGVzRGVmLmFjdGlvbnNBcnJbal0uQUNUSU9OX0NPREUgPT0gXCJTRU5EXCIpIHx8IChydWxlc0RlZi5hY3Rpb25zQXJyW2pdLkFDVElPTl9DT0RFID09IFwiU0VORF9XQUlUXCIpKSB7XHJcbiAgICAgICAgICAgIHN0YXR1c1JlYyA9IHRoaXMuc2VuZFRvU2VydmVyKG9iamVjdCwgcnVsZXNEZWYuYWN0aW9uc0FycltqXSwgcXVlcnlEYXRhLCBydWxlLCBydWxlc0RlZi5hY3Rpb25zQXJyW2pdLCBUcmlnZ2VyLCBob3N0c0FyciwgaG9zdHNNYXBBcnIpO1xyXG4gICAgICAgICAgICBzdGF0dXMgPSBzdGF0dXNSZWMuc3RhdHVzO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgZWxzZSBpZiAoIHJ1bGVzRGVmLmFjdGlvbnNBcnJbal0uQUNUSU9OX0NPREUgPT0gXCJFUlJPUlwiICkge1xyXG4gICAgICAgICAgICBsZXQgc3RhdHVzUmVjID17XHJcbiAgICAgICAgICAgICAgc3RhdHVzIDogLTEsXHJcbiAgICAgICAgICAgICAgbXNnIDogcnVsZXNEZWYuYWN0aW9uc0FycltqXS5CT0RZX0RBVEFcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgcmV0dXJuIHN0YXR1c1JlYztcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgICBqKys7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiBzdGF0dXNSZWM7XHJcblxyXG4gIH1cclxuXHJcbiAgcHVibGljIGNoZWNrUnVsZXNCeVRyaWdnZXIob2JqZWN0OmFueSwgcnVsZXNEZWY6YW55LCBxdWVyeURhdGE6YW55LCBUcmlnZ2VyOmFueSwgcm91dGluZV9uYW1lOmFueSwgaG9zdHNBcnI6YW55LCBob3N0c01hcEFycjphbnkpIHtcclxuICAgIGlmICh0aGlzLnBhcmFtQ29uZmlnLkRFQlVHX0ZMQUcpIGNvbnNvbGUubG9nKFwiY2hlY2tSdWxlc0J5VHJpZ2dlcjpydWxlc0RlZjpcIiwgcnVsZXNEZWYsIFwiIHF1ZXJ5RGF0YTpcIiwgcXVlcnlEYXRhLCBcIlRyaWdnZXI6XCIsIFRyaWdnZXIpO1xyXG4gICAgZnVuY3Rpb24gZ2V0RmllbGREYXRhKHJ1bGU6YW55LCBxdWVyeURhdGE6YW55KVxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgIGxldCBmaWVsZERhdGEgPSBcIlwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgbGV0IGFycmF5ID0gcnVsZS5GSUVMRC5zcGxpdCAoXCIuXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJhcnJheTpcIixhcnJheSlcclxuICAgICAgICAgICAgICAgICAgICAgIGlmIChhcnJheS5sZW5ndGggPiAxKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IG9yZGVyRmllbGRzID0gcXVlcnlEYXRhW1wiT1JERVJfRklFTERTXCJdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKFwib3JkZXJGaWVsZHM6XCIsb3JkZXJGaWVsZHMpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0eXBlb2Ygb3JkZXJGaWVsZHMgIT09IFwidW5kZWZpbmVkXCIpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChvcmRlckZpZWxkcyAhPSBcIlwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgZmllbGRzRGF0YSA9IEpTT04ucGFyc2Uob3JkZXJGaWVsZHMpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhcImZpZWxkc0RhdGE6XCIsZmllbGRzRGF0YSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBrZXlzID0gT2JqZWN0LmtleXMoZmllbGRzRGF0YSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImtleXM6XCIsa2V5cylcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGogPTA7IGo8IGtleXMubGVuZ3RoO2orKyl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiYWRkT3JkZXJGaWVsZHMga2V5OlwiLCBrZXlzW2pdICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChrZXlzW2pdID09IGFycmF5WzBdKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgb2JqRGF0YSA9IGZpZWxkc0RhdGFba2V5c1tqXV07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhcIm9iakRhdGE6XCIsIG9iakRhdGEgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodHlwZW9mIChvYmpEYXRhLmxlbmd0aCkgPT0gXCJ1bmRlZmluZWRcIikgIC8vIGl0IGlzIGEgZm9ybSAob2JqZWN0KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWVsZERhdGEgPSBvYmpEYXRhW2FycmF5WzFdXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHsgLy8gaXQgaXMgYSBncmlkIChhcnJheSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgKG9iakRhdGFbMF0pICE9IFwidW5kZWZpbmVkXCIpIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWVsZERhdGEgPSBvYmpEYXRhWzBdW2FycmF5WzFdXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpZWxkRGF0YSA9IHF1ZXJ5RGF0YVtydWxlLkZJRUxEXSA7XHJcbiAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmllbGREYXRhO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgZnVuY3Rpb24gY2hlY2tSdWxlKHJ1bGU6YW55LCBxdWVyeURhdGE6YW55KXtcclxuICAgICAgbGV0IHJ1bGVNYXRjaCA9IGZhbHNlO1xyXG4gICAgICAvL2lmIChvYmplY3QucGFyYW1Db25maWcuREVCVUdfRkxBRykgXHJcbiAgICAgICAgY29uc29sZS5sb2coXCJjaGVja1J1bGUgcnVsZTpcIiwgcnVsZSwgXCIgcXVlcnlEYXRhOlwiLCBxdWVyeURhdGEpO1xyXG4gICAgICAvL2xldCBmaWVsZERhdGEgPSBxdWVyeURhdGFbcnVsZS5GSUVMRF07XHJcbiAgICAgIGxldCBmaWVsZERhdGEgPSBnZXRGaWVsZERhdGEocnVsZSwgcXVlcnlEYXRhKTtcclxuXHJcbiAgICAgIHN3aXRjaCAocnVsZS5PUEVSQVRJT04pIHtcclxuICAgICAgICBjYXNlIFwiPVwiOlxyXG4gICAgICAgICAgaWYgKGZpZWxkRGF0YSA9PSBydWxlLkZJRUxEX1ZBTFVFKSB7XHJcbiAgICAgICAgICBydWxlTWF0Y2ggPSB0cnVlO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgXCI8XCI6XHJcbiAgICAgICAgICBpZiAoZmllbGREYXRhIDwgcnVsZS5GSUVMRF9WQUxVRSkge1xyXG4gICAgICAgICAgcnVsZU1hdGNoID0gdHJ1ZTtcclxuICAgICAgICAgIH1cclxuICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIFwiPD1cIjpcclxuICAgICAgICAgIGlmIChmaWVsZERhdGEgPD0gcnVsZS5GSUVMRF9WQUxVRSkge1xyXG4gICAgICAgICAgcnVsZU1hdGNoID0gdHJ1ZTtcclxuICAgICAgICAgIH1cclxuICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIFwiPlwiOlxyXG4gICAgICAgICAgaWYgKGZpZWxkRGF0YSA+IHJ1bGUuRklFTERfVkFMVUUpIHtcclxuICAgICAgICAgIHJ1bGVNYXRjaCA9IHRydWU7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSBcIj49XCI6XHJcbiAgICAgICAgICBpZiAoZmllbGREYXRhID49IHJ1bGUuRklFTERfVkFMVUUpIHtcclxuICAgICAgICAgIHJ1bGVNYXRjaCA9IHRydWU7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSBcIjw+XCI6XHJcbiAgICAgICAgICBpZiAoZmllbGREYXRhICE9IHJ1bGUuRklFTERfVkFMVUUpIHtcclxuICAgICAgICAgIHJ1bGVNYXRjaCA9IHRydWU7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSBcIklOU1RSXCI6XHJcbiAgICAgICAgICBpZiAocnVsZS5GSUVMRF9WQUxVRS5zZWFyY2goZmllbGREYXRhKSAhPSAtMSkge1xyXG4gICAgICAgICAgcnVsZU1hdGNoID0gdHJ1ZTtcclxuICAgICAgICAgIH1cclxuICAgICAgICBicmVhaztcclxuICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgIHJ1bGVNYXRjaCA9IGZhbHNlO1xyXG4gICAgICB9XHJcbiAgICAgIGNvbnNvbGUubG9nKFwidGVzdDM6cnVsZU1hdGNoOlwiLCBydWxlTWF0Y2gsIFwiIGZpZWxkRGF0YTpcIiwgZmllbGREYXRhLCBcIiBPUEVSQVRJT046XCIsIHJ1bGUuT1BFUkFUSU9OLCBcIiBGSUVMRF9WQUxVRTpcIiwgcnVsZS5GSUVMRF9WQUxVRSk7XHJcbiAgICAgIHJldHVybiBydWxlTWF0Y2g7XHJcblxyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gY2hlY2tTYW1lVGVtcGxhdGUocnVsZVB0cnNBcnIsIHF1ZXJ5RGF0YSkge1xyXG4gICAgICAvL2NvbnNvbGUubG9nKFwiY2hlY2tpbmcgdGVtcGxhdGUgcnVsZVB0cnNBcnI6XCIscnVsZVB0cnNBcnIsIFwiIHF1ZXJ5RGF0YTpcIiwgcXVlcnlEYXRhKTtcclxuICAgICAgdmFyIHNhbWVUZW1wID0gZmFsc2U7XHJcbiAgICAgIGNvbnNvbGUubG9nKFwicnVsZVB0cnNBcnIuVEVNUExBVEVfTkFNRTpcIiwgcnVsZVB0cnNBcnIuVEVNUExBVEVfTkFNRSwgXCJxdWVyeURhdGEuVEVNUExBVEVfTkFNRTpcIiwgcXVlcnlEYXRhLlRFTVBMQVRFX05BTUUsXCIgcnVsZVB0cnNBcnIuU0VRVUVOQ0VfTkFNRTpcIiwgcnVsZVB0cnNBcnIuU0VRVUVOQ0VfTkFNRSxcIiBxdWVyeURhdGEuU0VRVUVOQ0VfTkFNRTpcIiwgcXVlcnlEYXRhLlNFUVVFTkNFX05BTUUsIHF1ZXJ5RGF0YSlcclxuXHJcbiAgICAgIGlmICggKHJ1bGVQdHJzQXJyLlRFTVBMQVRFX05BTUUgIT0gXCJcIikgKXtcclxuICAgICAgICBpZiAocnVsZVB0cnNBcnIuVEVNUExBVEVfTkFNRSA9PSBxdWVyeURhdGEuVEVNUExBVEVfTkFNRSkge1xyXG5cclxuICAgICAgICAgIGlmICgocnVsZVB0cnNBcnIuU0VRVUVOQ0VfTkFNRSAhPSBcIlwiKSkgIHtcclxuICAgICAgICAgICAgaWYgKHJ1bGVQdHJzQXJyLlNFUVVFTkNFX05BTUUgPT0gcXVlcnlEYXRhLlNFUVVFTkNFX05BTUUpIHtcclxuICAgICAgICAgICAgICBzYW1lVGVtcCA9IHRydWU7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgc2FtZVRlbXAgPSB0cnVlO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgZWxzZSB7XHJcbiAgICAgICAgc2FtZVRlbXAgPSB0cnVlO1xyXG4gICAgICBcclxuICAgICAgfVxyXG4gICAgICAvL2NvbnNvbGUubG9nKFwic2FtZVRlbXA6XCIsIHNhbWVUZW1wKTtcclxuICAgICAgcmV0dXJuIHNhbWVUZW1wO1xyXG4gICAgfVxyXG4gICAgXHJcblxyXG4gICAgbGV0IHN0YXR1cyA9IDA7XHJcbiAgICBsZXQgc3RhdHVzUmVjID0ge1xyXG4gICAgICBzdGF0dXM6IDAsXHJcbiAgICAgIG1zZzogXCJcIlxyXG4gICAgfTtcclxuXHJcbiAgICBsZXQgcXJ5ID0gcXVlcnlEYXRhLl9RVUVSWTtcclxuICAgIGlmICh0aGlzLnBhcmFtQ29uZmlnLkRFQlVHX0ZMQUcpIGNvbnNvbGUubG9nKFwiX1FVRVJZOlwiLCBxdWVyeURhdGEuX1FVRVJZLCBcIiBydWxlc0RlZi5ydWxlUHRyc0FycjpcIiwgcnVsZXNEZWYucnVsZVB0cnNBcnIpO1xyXG4gICAgaWYgKHRoaXMucGFyYW1Db25maWcuREVCVUdfRkxBRykgY29uc29sZS5sb2coXCJjaGVja2luZyBydWxlc0RlZi5ydWxlUHRyc0FycjpcIiwgcnVsZXNEZWYucnVsZVB0cnNBcnIpO1xyXG4gICAgbGV0IHJ1bGVQdHIgPSBydWxlc0RlZi5ydWxlUHRyc0FycltxcnldO1xyXG4gICAgaWYgKHRoaXMucGFyYW1Db25maWcuREVCVUdfRkxBRykgY29uc29sZS5sb2coXCJydWxlUHRyOlwiLCBydWxlUHRyKTtcclxuICAgIGlmICh0aGlzLnBhcmFtQ29uZmlnLkRFQlVHX0ZMQUcpIGNvbnNvbGUubG9nKFwicXJ5OlwiLCBxcnksIFwiIHJ1bGVzRGVmLnJ1bGVQdHJzQXJyOlwiLCBydWxlc0RlZi5ydWxlUHRyc0FyciwgXCIgcnVsZVB0cjpcIiwgcnVsZVB0cik7XHJcblxyXG4gICAgaWYgKHR5cGVvZiBydWxlUHRyICE9PSBcInVuZGVmaW5lZFwiKSB7XHJcbiAgICAgIC8vbGV0IGFjdGlvblB0ciA9IHJ1bGVzRGVmLnJ1bGVQdHJzQXJyW3FyeV07XHJcbiAgICAgIC8vaWYgKHR5cGVvZiBhY3Rpb25QdHIgIT09IFwidW5kZWZpbmVkXCIpXHJcbiAgICAgIHtcclxuICAgICAgICBsZXQgcmVzdWx0ID0gZmFsc2U7XHJcbiAgICAgICAgbGV0IGkgPSAwO1xyXG5cclxuICAgICAgICAvL3doaWxlICggKGk8cnVsZVB0ci5sZW5ndGgpICYmIChzdGF0dXMgPT0gMCkgKVxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICAgIHZhciBwdHIxID0gcnVsZVB0cltpXTtcclxuICAgICAgICAgICAgICB2YXIgcHRyMiA9IHJ1bGVQdHJbcnVsZVB0ci5sZW5ndGggLTFdO1xyXG4gICAgICAgICAgICAgIC8vIGlmICh0eXBlb2YgcnVsZVB0cltpKzFdICE9PSBcInVuZGVmaW5lZFwiKVxyXG4gICAgICAgICAgICAgIC8vICAgICB2YXIgcHRyMiA9IHJ1bGVQdHJbaSsxXTtcclxuICAgICAgICAgICAgICAvLyBlbHNlXHJcbiAgICAgICAgICAgICAgLy8gICAgIC8vdmFyIHB0cjIgPSBydWxlc0RlZi5ydWxlc0Fyci5sZW5ndGhcclxuICAgICAgICAgICAgLy8gICAgIHZhciBwdHIyID0gcHRyMVxyXG5cclxuICAgICAgICAgICAgaWYgKHRoaXMucGFyYW1Db25maWcuREVCVUdfRkxBRykgY29uc29sZS5sb2coXCJJdGVtOnB0cjE6XCIscHRyMSwgXCIgcHRyMjpcIiwgcHRyMik7XHJcbiAgICAgICAgICAgICAgdmFyIGogPSBwdHIxO1xyXG4gICAgICAgICAgICAgIHZhciBydWxlTWF0Y2ggPSBmYWxzZTtcclxuICAgICAgICAgICAgICB2YXIgRk9VTkRfUlVMRV9JRD1cIlwiO1xyXG4gICAgICAgICAgICAgIHdoaWxlICggaiA8PSBwdHIyKVxyXG4gICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLnBhcmFtQ29uZmlnLkRFQlVHX0ZMQUcpIGNvbnNvbGUubG9nKFwicnVsZXNEZWYucnVsZXNBcnI6XCIsIHJ1bGVzRGVmLnJ1bGVzQXJyW2pdLlJVTEVfSUQsIFwiIGl0ZW06XCIsIHJ1bGVzRGVmLnJ1bGVzQXJyW2pdLklURU0pO1xyXG4gICAgICAgICAgICAgICAgICBsZXQgc2FtZVRlbXBsYXRlID0gY2hlY2tTYW1lVGVtcGxhdGUocnVsZXNEZWYucnVsZXNBcnJbal0scXVlcnlEYXRhICk7XHJcbiAgICAgICAgICAgICAgICAgIGlmICh0aGlzLnBhcmFtQ29uZmlnLkRFQlVHX0ZMQUcpIGNvbnNvbGUubG9nKFwicnVsZXNEZWYucnVsZXNBcnI6XCIsIHJ1bGVzRGVmLnJ1bGVzQXJyW2pdLlJVTEVfSUQsIFwiIGl0ZW06XCIsIHJ1bGVzRGVmLnJ1bGVzQXJyW2pdLklURU0sIFwiIHNhbWVUZW1wbGF0ZTpcIiwgc2FtZVRlbXBsYXRlKTsgIFxyXG4gICAgICAgICAgICAgICAgICBpZiAoc2FtZVRlbXBsYXRlKXtcclxuICAgICAgICAgICAgICAgICAgIHJ1bGVNYXRjaCA9IGNoZWNrUnVsZShydWxlc0RlZi5ydWxlc0FycltqXSwgcXVlcnlEYXRhKTtcclxuICAgICAgICAgICAgICAgICAgaWYgKHJ1bGVNYXRjaCA9PSBmYWxzZSlcclxuICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAgICAgICAgICAgIEZPVU5EX1JVTEVfSUQgPSBydWxlc0RlZi5ydWxlc0FycltqXS5SVUxFX0lEO1xyXG4gICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICBqKys7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiY2hlY2tSdWxlc0J5VHJpZ2dlcjpDb25kaXRpb25zIHJ1bGVNYXRjaDpcIiwgcnVsZU1hdGNoLCBcIiBmb3IgcnVsZTpcIiwgRk9VTkRfUlVMRV9JRCk7XHJcbiAgICAgICAgICAgICAgaWYgKHJ1bGVNYXRjaCA9PSB0cnVlKVxyXG4gICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgLy9zdGF0dXNSZWMgPSBwZXJmb3JtQWN0aW9uKGRiLHJlcSwgcXJ5LCBpLCBxdWVyeURhdGEsIHJ1bGVzRGVmLnJ1bGVzQXJyW3B0cjFdLHJ1bGVzRGVmLCBUcmlnZ2VyICk7XHJcbiAgICAgICAgICAgICAgICAgIHN0YXR1c1JlYyA9IHRoaXMucGVyZm9ybUFjdGlvbiggIG9iamVjdCwgcXJ5LCBpLCBxdWVyeURhdGEsIHJ1bGVzRGVmLnJ1bGVzQXJyW3B0cjFdLHJ1bGVzRGVmLCBUcmlnZ2VyICxob3N0c0FyciwgaG9zdHNNYXBBcnIsIEZPVU5EX1JVTEVfSUQpO1xyXG4gICAgICAgICAgICAgICAgICBzdGF0dXMgPSBzdGF0dXNSZWMuc3RhdHVzO1xyXG5cclxuICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgIC8vaWYgKHJ1bGVNYXRjaCA9PSBmYWxzZSlcclxuICAgICAgICAgICAgICAvLyAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgaSsrO1xyXG4gICAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG5cclxuICAgIH1cclxuICAgIHJldHVybiBzdGF0dXNSZWM7XHJcbiAgfVxyXG4gIHB1YmxpYyBjaGVja0hhc1J1bGVzIChydWxlc0RlZjphbnksIHFyeTphbnkgLFRyaWdnZXI6YW55KVxyXG4gIHtcclxuICAgIGxldCBmb3VuZCA9IGZhbHNlO1xyXG4gICAgLy9jb25zb2xlLmxvZyhcImNoZWNrSGFzUnVsZXM6cXJ5OlwiLHFyeSwgIFRyaWdnZXIpXHJcbiAgICAgIHZhciBhY3Rpb25QdHIgPSBydWxlc0RlZi5hY3Rpb25QdHJzQXJyW3FyeV07XHJcbiAgICAgIGlmICh0eXBlb2YgYWN0aW9uUHRyICE9PSBcInVuZGVmaW5lZFwiKVxyXG4gICAgICB7XHJcbiAgICAgICAgLy9jb25zb2xlLmxvZyhcImNoZWNrSGFzUnVsZXM6cXJ5OlwiLFRyaWdnZXIsIHFyeSwgIGFjdGlvblB0cilcclxuICAgICAgICBmb3VuZCA9IHRydWU7XHJcbiAgICAgIH1cclxuICAgICByZXR1cm4gZm91bmQ7XHJcblxyXG5cclxuICB9XHJcblxyXG4gIHB1YmxpYyBjaGVja1J1bGVzKG9iamVjdDphbnksIHJ1bGVzRGVmOmFueSwgYWN0dWFsUmVzdWx0OmFueSwgVHJpZ2dlcjphbnkpIHtcclxuICAgIHZhciBzdGF0dXNSZWM6YW55ID0ge307XHJcbiAgICBpZih0aGlzLnBhcmFtQ29uZmlnLmlzQ2hlY2tSdWxlcyA9PSBmYWxzZSlcclxuICAgICAgcmV0dXJuIHN0YXR1c1JlYztcclxuXHJcbiAgICAvL3JldHVybjtcclxuXHJcblxyXG4gICAgaWYgKHRoaXMucGFyYW1Db25maWcuREVCVUdfRkxBRykgY29uc29sZS5sb2coXCJjaGVja1J1bGVzOlwiLCBUcmlnZ2VyLCBcIiByb3V0aW5lX25hbWU6XCIsIHRoaXMucm91dGluZV9uYW1lLCBcIiBhY3R1YWxSZXN1bHQ6XCIsIGFjdHVhbFJlc3VsdClcclxuXHJcbiAgICBpZiAoVHJpZ2dlciA9PSBcIlBPU1RfUVVFUllcIikge1xyXG4gICAgICBpZiAodHlwZW9mIGFjdHVhbFJlc3VsdC5kYXRhWzBdICE9PSBcInVuZGVmaW5lZFwiKSB7XHJcbiAgICAgICAgbGV0IHRyYW5zRGF0YSA9IGFjdHVhbFJlc3VsdC5kYXRhWzBdLmRhdGE7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0cmFuc0RhdGEubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgIGlmICh0aGlzLnBhcmFtQ29uZmlnLkRFQlVHX0ZMQUcpIGNvbnNvbGUubG9nKFwiY2hlY2tSdWxlczp0cmFuc0RhdGFbaV06XCIsIHRyYW5zRGF0YVtpXSwgaSk7XHJcbiAgICAgICAgICBpZiAodGhpcy5wYXJhbUNvbmZpZy5ERUJVR19GTEFHKSBjb25zb2xlLmxvZyhcImNoZWNrUnVsZXM6YWN0dWFsUmVzdWx0LmRhdGFbMF0ucXVlcnk6XCIsIGFjdHVhbFJlc3VsdC5kYXRhWzBdLnF1ZXJ5KVxyXG4gICAgICAgICAgaWYgKHRoaXMucGFyYW1Db25maWcuREVCVUdfRkxBRykgY29uc29sZS5sb2coXCJjaGVja1J1bGVzOmFjdHVhbFJlc3VsdC5kYXRhWzBdIEhGIHBsZWFzZVwiLCBhY3R1YWxSZXN1bHQuZGF0YVswXS5kYXRhKTtcclxuICAgICAgICAgIGxldCBxdWVyeURhdGEgPSB0cmFuc0RhdGFbaV07XHJcbiAgICAgICAgICBcclxuICAgICAgICAgIHF1ZXJ5RGF0YVtcIl9RVUVSWVwiXSA9IGFjdHVhbFJlc3VsdC5kYXRhWzBdLnF1ZXJ5O1xyXG4gICAgICAgICAgLy8gICAgICAgaWYgKHRoaXMucGFyYW1Db25maWcuREVCVUdfRkxBRykgY29uc29sZS5sb2coXCJxdWVyeURhdGE6XCIsIHF1ZXJ5RGF0YSlcclxuICAgICAgICAgIGxldCBmb3VuZFJ1bGUgPSB0aGlzLmNoZWNrSGFzUnVsZXMocnVsZXNEZWYsIHF1ZXJ5RGF0YVsnX1FVRVJZJ10sIFwiUE9TVF9RVUVSWVwiKTtcclxuICAgICAgICAgIGlmIChmb3VuZFJ1bGUpe1xyXG4gICAgICAgICAgICAgIHN0YXR1c1JlYyA9IHRoaXMuY2hlY2tSdWxlc0J5VHJpZ2dlcihvYmplY3QsIHJ1bGVzRGVmLCBxdWVyeURhdGEsIFRyaWdnZXIsIHRoaXMucm91dGluZV9uYW1lLCB0aGlzLmhvc3RzQXJyLCB0aGlzLmhvc3RzTWFwQXJyKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgICAvL2NvbnNvbGUubG9nKFwic3RhdHVzUmVjOlBPU1RfUVVFUlk6XCIsIHN0YXR1c1JlYyk7XHJcbiAgICAgICAgICBpZiAoc3RhdHVzUmVjWydzdGF0dXMnXSAgPT0gLTEpe1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBlbHNlIGlmIChUcmlnZ2VyID09IFwiUFJFX1FVRVJZXCIpIHtcclxuXHJcbiAgICAgIGlmICh0eXBlb2YgYWN0dWFsUmVzdWx0ICE9PSBcInVuZGVmaW5lZFwiKSB7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhY3R1YWxSZXN1bHQubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgIGlmICh0aGlzLnBhcmFtQ29uZmlnLkRFQlVHX0ZMQUcpIGNvbnNvbGUubG9nKFwiYWN0dWFsUmVzdWx0W2ldOlwiLCBhY3R1YWxSZXN1bHRbaV0pXHJcbiAgICAgICAgICBsZXQgcXVlcnlEYXRhID0gYWN0dWFsUmVzdWx0W2ldO1xyXG4gICAgICAgICAgaWYgKHRoaXMucGFyYW1Db25maWcuREVCVUdfRkxBRykgY29uc29sZS5sb2coXCJxdWVyeURhdGE6XCIsIHF1ZXJ5RGF0YSlcclxuICAgICAgICAgICAgIGxldCBmb3VuZFJ1bGUgPSB0aGlzLmNoZWNrSGFzUnVsZXMocnVsZXNEZWYsIHF1ZXJ5RGF0YVsnX1FVRVJZJ10sIFwiUFJFX1FVRVJZXCIpO1xyXG5cdFx0XHQgICAgICAgaWYgKGZvdW5kUnVsZSl7XHJcbiAgICAgICAgICAgICAgICBzdGF0dXNSZWMgPSB0aGlzLmNoZWNrUnVsZXNCeVRyaWdnZXIob2JqZWN0LCBydWxlc0RlZiwgcXVlcnlEYXRhLCBUcmlnZ2VyLCB0aGlzLnJvdXRpbmVfbmFtZSwgdGhpcy5ob3N0c0FyciwgdGhpcy5ob3N0c01hcEFycik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGlmICh0aGlzLnBhcmFtQ29uZmlnLkRFQlVHX0ZMQUcpIGNvbnNvbGUubG9nKFwiY2hlY2tSdWxlczpEb25lXCIsIFRyaWdnZXIsIFwiIHJvdXRpbmVfbmFtZTpcIiwgdGhpcy5yb3V0aW5lX25hbWUsIFwiIGFjdHVhbFJlc3VsdDpcIiwgYWN0dWFsUmVzdWx0KTtcclxuICAgIHJldHVybiBzdGF0dXNSZWM7XHJcblxyXG4gIH1cclxuICAvLy8vLy8vLy8vLy8vL1xyXG4gIHB1YmxpYyBzdG9yZUFjdGlvbnNQdHJzKGFjdGlvbnM6YW55LCBydWxlc0RlZjphbnkpIHtcclxuICBsZXQgY3VycmVudFFVRVJZX0RFRiA9IFwiXCI7XHJcbiAgbGV0IGN1cnJlbnRSVUxFX0lEID0gXCJcIjtcclxuICAgIGxldCBhY3Rpb25QdHJzOmFueSA9IFtdO1xyXG5cclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYWN0aW9ucy5sZW5ndGg7IGkrKykge1xyXG4gICAgICBpZiAoKGN1cnJlbnRRVUVSWV9ERUYgIT0gYWN0aW9uc1tpXS5RVUVSWV9ERUYpICYmIChjdXJyZW50UlVMRV9JRCAhPSBhY3Rpb25zW2ldLlJVTEVfSUQpKSB7XHJcbiAgICAgICAgaWYgKGkgPT0gMClcclxuICAgICAgICBhY3Rpb25QdHJzLnB1c2goaSk7XHJcbiAgICAgICAgaWYgKGN1cnJlbnRRVUVSWV9ERUYgIT0gXCJcIikge1xyXG4gICAgICAgIHJ1bGVzRGVmLmFjdGlvblB0cnNBcnJbY3VycmVudFFVRVJZX0RFRl0gPSBhY3Rpb25QdHJzO1xyXG4gICAgICAgIGFjdGlvblB0cnMgPSBbXTtcclxuICAgICAgICBhY3Rpb25QdHJzLnB1c2goaSk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgICAgY3VycmVudFFVRVJZX0RFRiA9IGFjdGlvbnNbaV0uUVVFUllfREVGO1xyXG4gICAgICAgIGN1cnJlbnRSVUxFX0lEID0gYWN0aW9uc1tpXS5SVUxFX0lEO1xyXG4gICAgICAvL2lmICh0aGlzLnBhcmFtQ29uZmlnLkRFQlVHX0ZMQUcpIGNvbnNvbGUubG9nKFwicnVsZVB0cnMxOlwiLHJ1bGVQdHJzKTtcclxuXHJcbiAgICB9XHJcbiAgICAgIGVsc2UgaWYgKChjdXJyZW50UVVFUllfREVGID09IGFjdGlvbnNbaV0uUVVFUllfREVGKSAmJiAoY3VycmVudFJVTEVfSUQgIT0gYWN0aW9uc1tpXS5SVUxFX0lEKSkge1xyXG4gICAgICAgIGN1cnJlbnRSVUxFX0lEID0gYWN0aW9uc1tpXS5SVUxFX0lEO1xyXG4gICAgICBhY3Rpb25QdHJzLnB1c2goaSk7XHJcblxyXG4gICAgfVxyXG4gICAgICBlbHNlIGlmICgoY3VycmVudFFVRVJZX0RFRiA9PSBhY3Rpb25zW2ldLlFVRVJZX0RFRikgJiYgKGN1cnJlbnRSVUxFX0lEID09IGFjdGlvbnNbaV0uUlVMRV9JRCkpIHtcclxuICAgICAgICBhY3Rpb25QdHJzLnB1c2goaSk7XHJcbiAgICAgICAgY3VycmVudFJVTEVfSUQgPSBhY3Rpb25zW2ldLlJVTEVfSUQ7XHJcbiAgICBcclxuICAgIFxyXG4gICAgICB9XHJcbiAgICAgIGlmICh0aGlzLnBhcmFtQ29uZmlnLkRFQlVHX0ZMQUcpIGNvbnNvbGUubG9nKFwiYWN0aW9uUHRyczI6XCIsIGFjdGlvblB0cnMpO1xyXG4gIH1cclxuICAvL2FjdGlvblB0cnMucHVzaChpKTtcclxuICBydWxlc0RlZi5hY3Rpb25QdHJzQXJyW2N1cnJlbnRRVUVSWV9ERUZdID0gYWN0aW9uUHRycztcclxuICAgIGlmICh0aGlzLnBhcmFtQ29uZmlnLkRFQlVHX0ZMQUcpIGNvbnNvbGUubG9nKFwicnVsZXNEZWYuYWN0aW9uUHRyc0FycjpcIiwgcnVsZXNEZWYuYWN0aW9uUHRyc0Fycik7XHJcbn1cclxuXHJcblxyXG5cclxuICBwdWJsaWMgc3RvcmVSdWxlc1B0cnMocnVsZXM6YW55LCBydWxlc0RlZjphbnkpIHtcclxuICAgICAgbGV0IGN1cnJlbnRRVUVSWV9ERUYgPSBcIlwiO1xyXG4gICAgICBsZXQgY3VycmVudFJVTEVfSUQgPSBcIlwiO1xyXG4gICAgbGV0IHJ1bGVQdHJzOmFueSA9IFtdO1xyXG5cclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcnVsZXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBpZiAodGhpcy5wYXJhbUNvbmZpZy5ERUJVR19GTEFHKSBjb25zb2xlLmxvZyhydWxlc1tpXS5RVUVSWV9ERUYgKyBcIiA6IFwiICsgcnVsZXNbaV0uUlVMRV9JRCArIFwiICAgICAgICAgIFwiICsgY3VycmVudFFVRVJZX0RFRiArIFwiIDogXCIgKyBjdXJyZW50UlVMRV9JRCk7XHJcbiAgICAgIGlmICgoY3VycmVudFFVRVJZX0RFRiAhPSBydWxlc1tpXS5RVUVSWV9ERUYpICYmIChjdXJyZW50UlVMRV9JRCAhPSBydWxlc1tpXS5SVUxFX0lEKSkge1xyXG4gICAgICAgICAgaWYgKHRoaXMucGFyYW1Db25maWcuREVCVUdfRkxBRykgY29uc29sZS5sb2coXCIgbm90IGVxdWFsXCIpO1xyXG4gICAgICAgIGlmIChpID09IDApXHJcbiAgICAgICAgICAgIHJ1bGVQdHJzLnB1c2goaSk7XHJcbiAgICAgICAgaWYgKGN1cnJlbnRRVUVSWV9ERUYgIT0gXCJcIikge1xyXG4gICAgICAgICAgaWYgKHRoaXMucGFyYW1Db25maWcuREVCVUdfRkxBRykgY29uc29sZS5sb2coXCItLXN0b3JpbmcgcnVsZVB0cnMyOlwiLCBydWxlUHRycyk7XHJcbiAgICAgICAgICAgIHJ1bGVzRGVmLnJ1bGVQdHJzQXJyW2N1cnJlbnRRVUVSWV9ERUZdID0gcnVsZVB0cnM7XHJcbiAgICAgICAgICAgIHJ1bGVQdHJzID0gW107XHJcbiAgICAgICAgICAgIHJ1bGVQdHJzLnB1c2goaSk7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgIGN1cnJlbnRRVUVSWV9ERUYgPSBydWxlc1tpXS5RVUVSWV9ERUY7XHJcbiAgICAgICAgY3VycmVudFJVTEVfSUQgPSBydWxlc1tpXS5SVUxFX0lEO1xyXG4gICAgICAgIGlmICh0aGlzLnBhcmFtQ29uZmlnLkRFQlVHX0ZMQUcpIGNvbnNvbGUubG9nKFwicnVsZVB0cnMxOlwiLHJ1bGVQdHJzKTtcclxuXHJcbiAgICAgICAgfVxyXG4gICAgICBlbHNlIGlmICgoY3VycmVudFFVRVJZX0RFRiA9PSBydWxlc1tpXS5RVUVSWV9ERUYpICYmIChjdXJyZW50UlVMRV9JRCAhPSBydWxlc1tpXS5SVUxFX0lEKSkge1xyXG4gICAgICAgICAgaWYgKHRoaXMucGFyYW1Db25maWcuREVCVUdfRkxBRykgY29uc29sZS5sb2coXCIgbm90IGVxdWFsMlwiKTtcclxuICAgICAgICAgIHJ1bGVQdHJzLnB1c2goaSk7XHJcbiAgICAgICAgY3VycmVudFJVTEVfSUQgPSBydWxlc1tpXS5SVUxFX0lEO1xyXG4gICAgICAgIGlmICh0aGlzLnBhcmFtQ29uZmlnLkRFQlVHX0ZMQUcpIGNvbnNvbGUubG9nKFwicnVsZVB0cnMyOlwiLCBydWxlUHRycyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKCAoIGN1cnJlbnRRVUVSWV9ERUYgPT0gcnVsZXNbaV0uUVVFUllfREVGICkgJiYgKCBjdXJyZW50UlVMRV9JRCA9PSBydWxlc1tpXS5SVUxFX0lEICkgKVxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgY29uc29sZS5sb2coXCIgZXF1YWwzXCIpO1xyXG4gICAgICAgICAgICBydWxlUHRycy5wdXNoKGkpO1xyXG4gICAgICAgICAgICBjdXJyZW50UlVMRV9JRCA9IHJ1bGVzW2ldLlJVTEVfSUQgO1xyXG4gICAgICAgICAgY29uc29sZS5sb2coXCJydWxlUHRyczM6XCIscnVsZVB0cnMpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICBpZiAodGhpcy5wYXJhbUNvbmZpZy5ERUJVR19GTEFHKSBjb25zb2xlLmxvZyhcInJ1bGVQdHJzNDpcIiwgcnVsZVB0cnMpO1xyXG4gICAgICB9XHJcbiAgICAgIC8vcnVsZVB0cnMucHVzaChpKTtcclxuICAgIGlmICh0aGlzLnBhcmFtQ29uZmlnLkRFQlVHX0ZMQUcpIGNvbnNvbGUubG9nKFwicnVsZVB0cnM1OlwiLHJ1bGVQdHJzKTtcclxuICAgICAgcnVsZXNEZWYucnVsZVB0cnNBcnJbY3VycmVudFFVRVJZX0RFRl0gPSBydWxlUHRycztcclxuICAgIGlmICh0aGlzLnBhcmFtQ29uZmlnLkRFQlVHX0ZMQUcpIGNvbnNvbGUubG9nKFwidGVzdDM6cnVsZXNEZWYucnVsZVB0cnNBcnI6XCIsIHJ1bGVzRGVmLnJ1bGVQdHJzQXJyKTtcclxuICAgIH1cclxuXHJcbi8vLy8vLy8vLy8vLy8vXHJcbiAgcHVibGljIGxvYWRSdWxlcyhvYmplY3Q6YW55KSB7XHJcblxyXG4gICAgb2JqZWN0LkJvZHkgPSBbXTtcclxuICAgIGxldCBQYWdlID0gXCJcIjtcclxuICAgIGxldCBOZXdWYWw6YW55ID0ge307XHJcbiAgICBOZXdWYWxbXCJfUVVFUllcIl0gPSBcIkdFVF9BRE1fUlVMRV9ERUZfUlVMRV9JVEVNXCI7XHJcbiAgICBOZXdWYWxbXCJSVUxFX1RSSUdHRVJcIl0gPSBcIlBPU1RfUVVFUllcIjtcclxuICAgIGlmICh0aGlzLnBhcmFtQ29uZmlnLkRFQlVHX0ZMQUcpIGNvbnNvbGUubG9nKFwidGVzdDpOZXdWYWw6XCIsIE5ld1ZhbClcclxuICAgIGlmICh0aGlzLnBhcmFtQ29uZmlnLkRFQlVHX0ZMQUcpIGNvbnNvbGUubG9nKFwidGVzdDpvYmplY3QuQm9keTpcIiwgb2JqZWN0LkJvZHkpXHJcbiAgICBvYmplY3QuYWRkVG9Cb2R5KE5ld1ZhbCk7XHJcblxyXG4gICAgaWYgKHRoaXMucGFyYW1Db25maWcuREVCVUdfRkxBRykgY29uc29sZS5sb2coXCJ0ZXN0Om9iamVjdC5Cb2R5OlwiLCBvYmplY3QuQm9keSlcclxuICAgIE5ld1ZhbCA9IHt9O1xyXG4gICAgTmV3VmFsW1wiX1FVRVJZXCJdID0gXCJHRVRfQURNX1JVTEVfREVGX1JVTEVfQUNUSU9OXCI7XHJcbiAgICBOZXdWYWxbXCJSVUxFX1RSSUdHRVJcIl0gPSBcIlBPU1RfUVVFUllcIjtcclxuICAgIG9iamVjdC5hZGRUb0JvZHkoTmV3VmFsKTtcclxuXHJcbiAgICBOZXdWYWwgPSB7fTtcclxuICAgIE5ld1ZhbFtcIl9RVUVSWVwiXSA9IFwiR0VUX0FETV9SVUxFX0hPU1RcIjtcclxuICAgIE5ld1ZhbFtcIkhPU1RfSURcIl0gPSBcIiVcIjtcclxuICAgIG9iamVjdC5hZGRUb0JvZHkoTmV3VmFsKTtcclxuXHJcbiAgICBOZXdWYWwgPSB7fTtcclxuICAgIE5ld1ZhbFtcIl9RVUVSWVwiXSA9IFwiR0VUX0FETV9SVUxFX0hPU1RfTUFQXCI7XHJcbiAgICBOZXdWYWxbXCJIT1NUX0lEXCJdID0gXCIlXCI7XHJcbiAgICBOZXdWYWxbXCJNQVBfSURcIl0gPSBcIiVcIjtcclxuICAgIG9iamVjdC5hZGRUb0JvZHkoTmV3VmFsKTtcclxuXHJcbiAgICB0aGlzLnBvc3Qob2JqZWN0LCBQYWdlLCBvYmplY3QuQm9keSkuc3Vic2NyaWJlKHJlc3VsdCA9PiB7XHJcbiAgICAgIGlmICh0aGlzLnBhcmFtQ29uZmlnLkRFQlVHX0ZMQUcpIGNvbnNvbGUubG9nKFwidGVzdDpyZXN1bHQuZGF0YTpcIiwgcmVzdWx0LmRhdGEpO1xyXG5cclxuXHJcbiAgICAgIHRoaXMucnVsZXNQb3N0UXVlcnlEZWYucnVsZVB0cnNBcnIgPSB7fTtcclxuICAgICAgdGhpcy5ydWxlc1Bvc3RRdWVyeURlZi5hY3Rpb25QdHJzQXJyID0gW107XHJcblxyXG4gICAgICB0aGlzLnN0b3JlUnVsZXNQdHJzKHJlc3VsdC5kYXRhWzBdLmRhdGEsIHRoaXMucnVsZXNQb3N0UXVlcnlEZWYpXHJcbiAgICAgIHRoaXMucnVsZXNQb3N0UXVlcnlEZWYucnVsZXNBcnIgPSByZXN1bHQuZGF0YVswXS5kYXRhO1xyXG5cclxuICAgICAgdGhpcy5zdG9yZUFjdGlvbnNQdHJzKHJlc3VsdC5kYXRhWzFdLmRhdGEsIHRoaXMucnVsZXNQb3N0UXVlcnlEZWYpO1xyXG4gICAgICB0aGlzLnJ1bGVzUG9zdFF1ZXJ5RGVmLmFjdGlvbnNBcnIgPSByZXN1bHQuZGF0YVsxXS5kYXRhO1xyXG4gICAgICBpZiAodGhpcy5wYXJhbUNvbmZpZy5ERUJVR19GTEFHKSBjb25zb2xlLmxvZyhcInRlc3Q6dGhpcy5ydWxlc1Bvc3RRdWVyeURlZlwiLCB0aGlzLnJ1bGVzUG9zdFF1ZXJ5RGVmKVxyXG5cclxuICAgICAgdGhpcy5ob3N0c0FyciA9IHJlc3VsdC5kYXRhWzJdLmRhdGE7XHJcbiAgICAgIHRoaXMuaG9zdHNNYXBBcnIgPSByZXN1bHQuZGF0YVszXS5kYXRhO1xyXG5cclxuICAgICAgLy8vLy8vLy8vLy8vLy9cclxuICAgICAgb2JqZWN0LkJvZHkgPSBbXTtcclxuICAgIH0sXHJcbiAgICBlcnIgPT4ge1xyXG4gICAgICAgIG9iamVjdC5Cb2R5ID0gW107XHJcbiAgICAgICAgdGhpcy5zaG93Tm90aWZpY2F0aW9uKFwiZXJyb3JcIiwgXCJlcnJvcjpcIiArIGVyci5tZXNzYWdlKTtcclxuICAgIH0pO1xyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vLy8vLy8vLy8vLy8vXHJcbiAgICBvYmplY3QuQm9keSA9IFtdO1xyXG4gICAgUGFnZSA9IFwiXCI7XHJcbk5ld1ZhbCA9IHt9O1xyXG5OZXdWYWxbXCJfUVVFUllcIl0gPSBcIkdFVF9BRE1fUlVMRV9ERUZfUlVMRV9JVEVNXCI7XHJcbk5ld1ZhbFtcIlJVTEVfVFJJR0dFUlwiXSA9IFwiUFJFX1FVRVJZXCI7XHJcbmlmICh0aGlzLnBhcmFtQ29uZmlnLkRFQlVHX0ZMQUcpIGNvbnNvbGUubG9nKFwidGVzdDpOZXdWYWw6XCIsIE5ld1ZhbClcclxuaWYgKHRoaXMucGFyYW1Db25maWcuREVCVUdfRkxBRykgY29uc29sZS5sb2coXCJ0ZXN0Om9iamVjdC5Cb2R5OlwiLCBvYmplY3QuQm9keSlcclxub2JqZWN0LmFkZFRvQm9keShOZXdWYWwpO1xyXG5cclxuaWYgKHRoaXMucGFyYW1Db25maWcuREVCVUdfRkxBRykgY29uc29sZS5sb2coXCJ0ZXN0Om9iamVjdC5Cb2R5OlwiLCBvYmplY3QuQm9keSlcclxuTmV3VmFsID0ge307XHJcbk5ld1ZhbFtcIl9RVUVSWVwiXSA9IFwiR0VUX0FETV9SVUxFX0RFRl9SVUxFX0FDVElPTlwiO1xyXG5OZXdWYWxbXCJSVUxFX1RSSUdHRVJcIl0gPSBcIlBSRV9RVUVSWVwiO1xyXG5vYmplY3QuYWRkVG9Cb2R5KE5ld1ZhbCk7XHJcblxyXG5cclxuXHJcbiAgICB0aGlzLnBvc3Qob2JqZWN0LCBQYWdlLCBvYmplY3QuQm9keSkuc3Vic2NyaWJlKHJlc3VsdCA9PiB7XHJcbiAgaWYgKHRoaXMucGFyYW1Db25maWcuREVCVUdfRkxBRykgY29uc29sZS5sb2coXCJ0ZXN0OnJlc3VsdC5kYXRhOlwiLCByZXN1bHQuZGF0YSk7XHJcblxyXG4vLy8vLy8vLy8vLy8vL1xyXG4gICAgICB0aGlzLnJ1bGVzUHJlUXVlcnlEZWYucnVsZVB0cnNBcnIgPSB7fTtcclxuICAgICAgdGhpcy5ydWxlc1ByZVF1ZXJ5RGVmLmFjdGlvblB0cnNBcnIgPSB7fTtcclxuXHJcbiAgdGhpcy5zdG9yZVJ1bGVzUHRycyhyZXN1bHQuZGF0YVswXS5kYXRhLCB0aGlzLnJ1bGVzUHJlUXVlcnlEZWYpXHJcbiAgdGhpcy5ydWxlc1ByZVF1ZXJ5RGVmLnJ1bGVzQXJyID0gcmVzdWx0LmRhdGFbMF0uZGF0YTtcclxuXHJcbiAgICAgIHRoaXMuc3RvcmVBY3Rpb25zUHRycyhyZXN1bHQuZGF0YVsxXS5kYXRhLCB0aGlzLnJ1bGVzUHJlUXVlcnlEZWYpO1xyXG4gIHRoaXMucnVsZXNQcmVRdWVyeURlZi5hY3Rpb25zQXJyID0gcmVzdWx0LmRhdGFbMV0uZGF0YTtcclxuICBpZiAodGhpcy5wYXJhbUNvbmZpZy5ERUJVR19GTEFHKSBjb25zb2xlLmxvZyhcInRlc3Q6dGhpcy5ydWxlc1ByZVF1ZXJ5RGVmXCIsIHRoaXMucnVsZXNQcmVRdWVyeURlZilcclxuXHJcblxyXG4gIC8vLy8vLy8vLy8vLy8vXHJcbiAgICAgIG9iamVjdC5Cb2R5ID0gW107XHJcbn0sXHJcbmVyciA9PiB7XHJcbiAgICAgICAgb2JqZWN0LkJvZHkgPSBbXTtcclxuICAgICAgICB0aGlzLnNob3dOb3RpZmljYXRpb24oXCJlcnJvclwiLCBcImVycm9yOlwiICsgZXJyLm1lc3NhZ2UpO1xyXG59KTtcclxuXHJcbiAgfVxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbiAgcHVibGljIGxrcENhY2hlPVtdO1xyXG4gIHB1YmxpYyBmZXRjaExvb2t1cHMgKCBvYmplY3QsbG9va3VwQXJyRGVmKXtcclxuICAgIGxldCBCb2R5ID1bXTtcclxuICAgIGZvciAobGV0IGk9MDsgaTwgbG9va3VwQXJyRGVmLmxlbmd0aDsgaSsrKXtcclxuICAgICAgbGV0IE5ld1ZhbCA9IHt9O1xyXG4gICAgICBOZXdWYWxbXCJfUVVFUllcIl0gPSBcIkdFVF9TVE1UXCI7XHJcbiAgICAgIE5ld1ZhbFtcIl9TVE1UXCJdICA9ICBsb29rdXBBcnJEZWZbaV0uc3RhdG1lbnQ7XHJcbiAgICAgIGlmIChsb29rdXBBcnJEZWZbaV0uc3RhdG1lbnQgIT0gXCJbXVwiKVxyXG4gICAgICAgIEJvZHkgPSB0aGlzLmFkZFRvQm9keShOZXdWYWwsQm9keSk7XHJcbiAgICB9XHJcblxyXG4gICAgbGV0IFBhZ2UgPSAgXCJcIjtcclxuICAgIHRoaXMucG9zdChvYmplY3QsUGFnZSxCb2R5KS5zdWJzY3JpYmUocmVzdWx0ID0+IHtcclxuICAgICAgZm9yIChsZXQgaT0wOyBpPCBsb29rdXBBcnJEZWYubGVuZ3RoOyBpKyspe1xyXG4gICAgICAgIC8vaWYgKHRoaXMucGFyYW1Db25maWcuREVCVUdfRkxBRykgY29uc29sZS5sb2coXCJyZXN1bHQuZGF0YVtpXS5kYXRhOlwiLHJlc3VsdC5kYXRhW2ldLmRhdGFbMF0pXHJcbiAgICAgICAgaWYgICh0eXBlb2YgcmVzdWx0LmRhdGFbaV0gIT09IFwidW5kZWZpbmVkXCIpe1xyXG4gICAgICAgICAgaWYgICh0eXBlb2YgcmVzdWx0LmRhdGFbaV0uZGF0YVswXSAhPT0gXCJ1bmRlZmluZWRcIil7XHJcbiAgICAgICAgICAgIC8vYWRkIGVtcHR5IHJlY29yZCBhdCBiZWdpbmluZyBvZiB0aGUgYXJyYXkgZm9yIHRoZSBMT1YgZm9yIGluc2VydCBuZXcgcmVjb3JkIGluIGEgZ3JpZCB3b3JrIHByb3Blcmx5XHJcbiAgICAgICAgICAgIGxldCBrZXlzID0gT2JqZWN0LmtleXMocmVzdWx0LmRhdGFbaV0uZGF0YVswXSk7XHJcbiAgICAgICAgICAgIGxldCBlbXB0eVJlYyA9e307XHJcblxyXG4gICAgICAgICAgICBsZXQgaGFzU3BhY2U9ZmFsc2U7XHJcbiAgICAgICAgICAgIC8vIGxldCBjb2RlVHh0ID0ga2V5c1swXTtcclxuICAgICAgICAgICAgLy8gbGV0IGRhdGFTZXQgPSBPYmplY3QuYXNzaWduKFtdLCByZXN1bHQuZGF0YVtpXS5kYXRhKTtcclxuXHJcbiAgICAgICAgICAgIC8vIGRhdGFTZXQuZmluZChlbGVtID0+e1xyXG4gICAgICAgICAgICAvLyAgIC8vY29uc29sZS5sb2coXCJlbG06XCIsZWxlbSk7XHJcbiAgICAgICAgICAgIC8vICAgaWYgKGVsZW1bY29kZVR4dF0udHJpbSgpID09IFwiXCIpe1xyXG4gICAgICAgICAgICAvLyAgICAgaGFzU3BhY2UgPSB0cnVlO1xyXG4gICAgICAgICAgICAvLyAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICAgIC8vICAgfVxyXG4gICAgICAgICAgICAvLyB9KTtcclxuXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBpZiAoICFoYXNTcGFjZSl7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGsgPTA7IGsgPCBrZXlzLmxlbmd0aDsgaysrKXtcclxuICAgICAgICAgICAgICAgIC8vaWYgKHRoaXMucGFyYW1Db25maWcuREVCVUdfRkxBRykgY29uc29sZS5sb2coXCJba2V5c1trXTpcIiwga2V5c1trXSk7XHJcbiAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKFwiW2tleXNba106XCIsIGtleXNba10pO1xyXG4gICAgICAgICAgICAgICAgZW1wdHlSZWNba2V5c1trXV0gPSBcIlwiO1xyXG4gICAgICAgICAgICAgICAgLy9vYmplY3QucHJpbWFyS2V5UmVhZE9ubHlBcnJba2V5c1trXV0gPSB2YWx1ZTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8vaWYgKHRoaXMucGFyYW1Db25maWcuREVCVUdfRkxBRykgY29uc29sZS5sb2coXCJlbXB0eVJlYzpcIixlbXB0eVJlYylcclxuICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhcImVtcHR5UmVjOlwiLGVtcHR5UmVjKTtcclxuICAgICAgICAgICAgLy9yZXN1bHQuZGF0YVtpXS5kYXRhLnNwbGljZSgwLDAsZW1wdHlSZWMpOyAvL2FkZCBlbXB0eSByZWNvcmQgYXQgYmVnaW5pbmcgb2YgdGhlIGFycmF5IGZvciB0aGUgTE9WIGZvciBpbnNlcnQgbmV3IHJlY29yZCBpbiBhIGdyaWQgd29yayBwcm9wZXJseVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBvYmplY3RbbG9va3VwQXJyRGVmW2ldLmxrcEFyck5hbWVdID0gcmVzdWx0LmRhdGFbaV0uZGF0YTtcclxuICAgICAgICAvL2lmICh0aGlzLnBhcmFtQ29uZmlnLkRFQlVHX0ZMQUcpIGNvbnNvbGUubG9nKFwibG9va3VwQXJyRGVmW2ldLmxrcEFyck5hbWU6XCIsIGxvb2t1cEFyckRlZltpXS5sa3BBcnJOYW1lLCBvYmplY3RbbG9va3VwQXJyRGVmW2ldLmxrcEFyck5hbWVdKVxyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgICB9XHJcbiAgICAgIGlmICAodHlwZW9mIG9iamVjdC5mZXRjaExvb2t1cHNDYWxsQmFjayAhPT0gXCJ1bmRlZmluZWRcIilcclxuICAgICAgICBvYmplY3QuZmV0Y2hMb29rdXBzQ2FsbEJhY2soKTtcclxuXHJcbiAgICB9LFxyXG4gICAgZXJyID0+IHtcclxuICAgICAgLy9hbGVydCAoJ2Vycm9yOicgKyBlcnIubWVzc2FnZSk7XHJcbiAgICAgIHRoaXMuc2hvd0Vycm9yTXNnKG9iamVjdCwgZXJyKTtcclxuICAgIH0pO1xyXG4gIH1cclxuICBcclxuICAgIHB1YmxpYyBwZXJmb3JtUG9zdChvYmplY3Q6YW55LCBmbjphbnkpIHtcclxuICAgIGxldCBQYWdlID0gXCJcIjtcclxuICAgIHRoaXMucG9zdChvYmplY3QsIFBhZ2UsIG9iamVjdC5Cb2R5KS5zdWJzY3JpYmUocmVzdWx0ID0+IHtcclxuICAgICAgZm4ob2JqZWN0LCByZXN1bHQpO1xyXG4gICAgICBvYmplY3QuQm9keSA9IFtdO1xyXG4gICAgfSxcclxuICAgIGVyciA9PiB7XHJcbiAgICAgIC8vYWxlcnQgKCdlcnJvcjonICsgZXJyLm1lc3NhZ2UpO1xyXG4gICAgICB0aGlzLnNob3dFcnJvck1zZyhvYmplY3QsIGVycik7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG5cclxuICBwdWJsaWMgc2V0Q29tcG9uZW50Q29uZmlnKGNvbXBvbmVudENvbmZpZzphbnksIHNjcmVlbkNvbmZpZzphbnkpIHtcclxuICAgIGxldCBrZXlzID0gT2JqZWN0LmtleXMoY29tcG9uZW50Q29uZmlnKTtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwga2V5cy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIC8vaWYgKHRoaXMucGFyYW1Db25maWcuREVCVUdfRkxBRykgY29uc29sZS5sb2coIGtleXNbaV0gKyBcIiBcIiArIGNvbXBvbmVudENvbmZpZ1sga2V5c1tpXSBdICkgO1xyXG4gICAgICBpZiAoY29tcG9uZW50Q29uZmlnW2tleXNbaV1dICE9IG51bGwpIHtcclxuICAgICAgICBzY3JlZW5Db25maWdba2V5c1tpXV0gPSBjb21wb25lbnRDb25maWdba2V5c1tpXV07XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAvL2lmICh0aGlzLnBhcmFtQ29uZmlnLkRFQlVHX0ZMQUcpIGNvbnNvbGUubG9nKHNjcmVlbkNvbmZpZyk7XHJcbiAgICByZXR1cm4gc2NyZWVuQ29uZmlnO1xyXG4gIH1cclxuICBwdWJsaWMgZ2V0Um91dGluZUF1dGgobWVudTphbnksIHJvdXRpbmVfbmFtZTphbnkpIHtcclxuICAgIGxldCBpID0gMDtcclxuICAgIGxldCByb3V0aW5lQXV0aDtcclxuICAgIGxldCBmb3VuZCA9IGZhbHNlO1xyXG4gICAgaWYgKHR5cGVvZiBtZW51ICE9PSBcInVuZGVmaW5lZFwiKSB7XHJcbiAgICAgIHdoaWxlIChpIDwgbWVudS5sZW5ndGgpIHtcclxuICAgICAgICBsZXQgaiA9IDA7XHJcbiAgICAgICAgd2hpbGUgKGogPCBtZW51W2ldLml0ZW1zLmxlbmd0aCkge1xyXG4gICAgICAgICAgaWYgKG1lbnVbaV0uaXRlbXNbal0uY2hvaWNlID09IHJvdXRpbmVfbmFtZSkge1xyXG4gICAgICAgICAgICByb3V0aW5lQXV0aCA9IG1lbnVbaV0uaXRlbXNbal07XHJcbiAgICAgICAgICAgIGZvdW5kID0gdHJ1ZTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBqKys7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChmb3VuZClcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGkrKztcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgaWYgKHRoaXMucGFyYW1Db25maWcuREVCVUdfRkxBRykgY29uc29sZS5sb2coXCJyb3V0aW5lX25hbWU6XCIsIHJvdXRpbmVfbmFtZSwgXCJyb3V0aW5lQXV0aDpcIiwgcm91dGluZUF1dGgsIFwiIG1lbnU6XCIsIG1lbnUpO1xyXG5cclxuXHJcbiAgICByZXR1cm4gKHJvdXRpbmVBdXRoKTtcclxuICB9XHJcbiAgcHVibGljIGFjdE9uUGFyYW1Db25maWcob2JqZWN0OmFueSwgcm91dGluZV9uYW1lOmFueSkge1xyXG4gICAgaWYgKHRoaXMucGFyYW1Db25maWcuREVCVUdfRkxBRykgY29uc29sZS5sb2coXCJyb3V0aW5lX25hbWU6XCIgKyByb3V0aW5lX25hbWUpXHJcbiAgICBsZXQgcGFyYW1Db25maWcgPSBnZXRQYXJhbUNvbmZpZygpO1xyXG4gICAgbGV0IG1lbnUgPSBwYXJhbUNvbmZpZy5tZW51O1xyXG4gICAgbGV0IHJvdXRpbmVBdXRoID0gdGhpcy5nZXRSb3V0aW5lQXV0aChtZW51LCByb3V0aW5lX25hbWUpO1xyXG5cclxuICAgIGlmICh0eXBlb2Ygcm91dGluZUF1dGggIT09IFwidW5kZWZpbmVkXCIpIHtcclxuICAgICAgb2JqZWN0LnRpdGxlID0gcm91dGluZUF1dGgudGV4dCArIFwiIChcIiArIHJvdXRpbmVBdXRoLnJvdXRpbmVWZXIgKyBcIilcIjtcclxuICAgICAgb2JqZWN0LnJvdXRpbmVBdXRoID0gcm91dGluZUF1dGg7XHJcbiAgICAgIHRoaXMucm91dGluZV9uYW1lID0gcm91dGluZV9uYW1lO1xyXG4gICAgICBpZiAodGhpcy5wYXJhbUNvbmZpZy5ERUJVR19GTEFHKSBjb25zb2xlLmxvZyhcIm9iamVjdC50aXRsZTpcIiArIG9iamVjdC50aXRsZSlcclxuICAgIH1cclxuICAgIGVsc2VcclxuICAgICAgaWYgKHJvdXRpbmVfbmFtZSA9PSBcIkRTUEVLWUNcIikge1xyXG4gICAgICAgIHRoaXMucm91dGluZV9uYW1lID0gcm91dGluZV9uYW1lO1xyXG4gICAgICB9XHJcbiAgICBpZiAodGhpcy5wYXJhbUNvbmZpZy5ERUJVR19GTEFHKSBjb25zb2xlLmxvZyhcInRoaXMucm91dGluZV9uYW1lOlwiICsgdGhpcy5yb3V0aW5lX25hbWUpXHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc2hvd0Vycm9yTXNnKG9iamVjdDphbnksIHNlcnZlckVycm9yOmFueSkge1xyXG4gICAgbGV0IGVycm9yTXNnID0gXCJcIjtcclxuICAgIGlmICh0eXBlb2Ygc2VydmVyRXJyb3IuZXJyb3IgPT0gXCJ1bmRlZmluZWRcIikge1xyXG4gICAgICAgZXJyb3JNc2cgPSB0aGlzLnN0YW5kYXJkRXJyb3JNc2cgKyBcIiA6IFwiICsgc2VydmVyRXJyb3I7XHJcbiAgICB9XHJcbiAgICBlbHNlXHJcbiAgICAgICBlcnJvck1zZyA9IHRoaXMuc3RhbmRhcmRFcnJvck1zZyArIFwiIDogXCIgKyBzZXJ2ZXJFcnJvci5lcnJvci5lcnJvcjtcclxuICAgIGxldCBkaWFsb2dTdHJ1YyA9IHtcclxuICAgICAgbXNnOiBlcnJvck1zZyxcclxuICAgICAgdGl0bGU6IFwiRXJyb3JcIixcclxuICAgICAgaW5mbzogbnVsbCxcclxuICAgICAgb2JqZWN0OiBvYmplY3QsXHJcbiAgICAgIGFjdGlvbjogdGhpcy5Pa0FjdGlvbnMsXHJcbiAgICAgIGNhbGxiYWNrOiBudWxsXHJcbiAgICB9O1xyXG4gICAgICB0aGlzLnNob3dDb25maXJtYXRpb24oZGlhbG9nU3RydWMpO1xyXG5cclxuICB9XHJcbiAgcHVibGljIHNlbmRHZXRDb21tYW5kKHVybDphbnksIHBhZ2U6IHN0cmluZyk6IE9ic2VydmFibGU8R3JpZERhdGFSZXN1bHQ+IHtcclxuICAgIGlmICh0aGlzLnBhcmFtQ29uZmlnLkRFQlVHX0ZMQUcpIGNvbnNvbGUubG9nKFwiIGluc2lkZSBzZW5kR2V0Q29tbWFuZFwiKVxyXG4gICAgbGV0IHRoZVVSTCA9IHVybCArIHBhZ2U7XHJcbiAgICBpZiAodGhpcy5wYXJhbUNvbmZpZy5ERUJVR19GTEFHKSBjb25zb2xlLmxvZyhcIiBpbnNpZGUgc2VuZEdldENvbW1hbmQ6dGhlVVJMOlwiLCB0aGVVUkwpXHJcbiAgICB0aGlzLmh0dHBPcHRpb25zID0ge1xyXG4gICAgICBoZWFkZXJzOiBuZXcgSHR0cEhlYWRlcnMoe1xyXG4gICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXHJcbiAgICAgICAgJ2F1dGhvcml6YXRpb24nOiB0aGlzLlN0ckF1dGhcclxuXHJcbiAgICAgIH0pXHJcbiAgICB9O1xyXG5cclxuICAgIGlmICh0aGlzLnBhcmFtQ29uZmlnLkRFQlVHX0ZMQUcpIGNvbnNvbGUubG9nKFwic2VuZEdldENvbW1hbmQgdGhlVVJMOlwiICsgdGhlVVJMKVxyXG4gICAgcmV0dXJuIHRoaXMuaHR0cFxyXG4gICAgICAuZ2V0KGAke3RoZVVSTH1gLCB0aGlzLmh0dHBPcHRpb25zKVxyXG4gICAgICAgIC5waXBlKFxyXG4gICAgICAgICAgICBjYXRjaEVycm9yKChlcnIpID0+IHtcclxuICAgICAgICAgICAgICBpZiAodGhpcy5wYXJhbUNvbmZpZy5ERUJVR19GTEFHKSBjb25zb2xlLmxvZyhcInNlcnZlciBlcnJvcjpcIiwgZXJyLm1lc3NhZ2UpXHJcbiAgICAgICAgICB0aGlzLnNob3dOb3RpZmljYXRpb24oXCJlcnJvclwiLCBcImVycm9yOlwiICsgZXJyLm1lc3NhZ2UpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRocm93RXJyb3IoZXJyKTtcclxuICAgICAgICAgICAgICB9KSxcclxuICAgICAgICAgICAgbWFwKHJlc3BvbnNlID0+IChcclxuICAgICAgICAgICAgICA8YW55PnJlc3BvbnNlXHJcbiAgICAgICAgICAgICkpLFxyXG4gICAgICAgICAgICB0YXAoKCkgPT4gdGhpcy5sb2FkaW5nID0gZmFsc2UpXHJcbiAgICAgICApO1xyXG4gIH1cclxuICBwdWJsaWMgcG9zdENvbW1hbmRPcHRpb25zKE9wdGlvbnM6YW55LHBhZ2U6IHN0cmluZywgdXJsOmFueSwgQm9keTphbnkpOiBPYnNlcnZhYmxlPEdyaWREYXRhUmVzdWx0PiB7XHJcbiAgICAvL2lmICh0aGlzLnBhcmFtQ29uZmlnLkRFQlVHX0ZMQUcpIGNvbnNvbGUubG9nKFwiIGluc2lkZSBwb3N0Q29tbWFuZFwiKVxyXG4gICAgbGV0IHRoZVVSTCA9IHVybDsgLy90aGlzLkVQTUVOR19VUkwgKyBwYWdlO1xyXG4gICAgbGV0IGh0dHBPcHRpb25zID0ge307XHJcbiAgICBpZiAoT3B0aW9ucyA9PSBudWxsKXtcclxuICAgICAgIGh0dHBPcHRpb25zID0ge1xyXG4gICAgICAgIGhlYWRlcnM6IG5ldyBIdHRwSGVhZGVycyh7XHJcbiAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG4gICAgICAgICAgJ2F1dGhvcml6YXRpb24nOiB0aGlzLlN0ckF1dGhcclxuICAgICAgfSlcclxuICAgICAgfTtcclxuICAgIH1cclxuICAgIGVsc2V7XHJcbiAgICAgICBodHRwT3B0aW9ucyA9IHtcclxuICAgICAgICBoZWFkZXJzOiBuZXcgSHR0cEhlYWRlcnMoXHJcbiAgICAgICAgICBPcHRpb25zXHJcbiAgICAgICAgICApXHJcbiAgICAgIH07XHJcbiAgICB9XHJcbiAgICBcclxuXHJcbiAgICBpZiAodGhpcy5wYXJhbUNvbmZpZy5ERUJVR19GTEFHKSBjb25zb2xlLmxvZyhcInBvc3RDb21tYW5kT3B0aW9ucyB0aGVVUkw6XCIgLCB0aGVVUkwsIFwiQm9keTpcIixCb2R5IClcclxuICAgIHJldHVybiB0aGlzLmh0dHBcclxuICAgICAgICAucG9zdChgJHt0aGVVUkx9YCxCb2R5LCBodHRwT3B0aW9ucylcclxuICAgICAgICAucGlwZShcclxuICAgICAgICAgICAgY2F0Y2hFcnJvcigoZXJyKSA9PiB7XHJcbiAgICAgICAgICAgICAgLy9pZiAodGhpcy5wYXJhbUNvbmZpZy5ERUJVR19GTEFHKSBjb25zb2xlLmxvZyhcInNlcnZlciBlcnJvcjpcIiwgZXJyLm1lc3NhZ2UpXHJcbiAgICAgICAgICAgICAgLy90aGlzLnNob3dOb3RpZmljYXRpb24gKFwiZXJyb3JcIixcImVycm9yOlwiICsgZXJyLm1lc3NhZ2UpO1xyXG4gICAgICAgICAgICAgIC8vY29uc29sZS5sb2coXCJlcnI6XCIsZXJyKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aHJvd0Vycm9yKGVycik7XHJcbiAgICAgICAgICAgICAgICAvLyB0aHJvd0Vycm9yKGVycik7XHJcbiAgICAgICAgICAgICAgICAvLyByZXR1cm4gSlNPTi5zdHJpbmdpZnkgKGVycik7XHJcbiAgICAgICAgICAgICAgfSksXHJcbiAgICAgICAgICAgIG1hcChyZXNwb25zZSA9PiAoXHJcbiAgICAgICAgICAgICAgPGFueT5yZXNwb25zZVxyXG4gICAgICAgICAgICApKSxcclxuICAgICAgICAgICAgY2F0Y2hFcnJvcihlcnIgPT4gey8vRnVhZDpjaGVjayBpZiB0aG9zZSAzIGxpbmVzIGFyZSBuZWVkZWRcclxuICAgICAgICAgICAgICByZXR1cm4gZXJyLm1lc3NhZ2U7Ly8yXHJcbiAgICAgICAgICB9KSwgICAgICAgICAgICAgICAgICAgIC8vM1xyXG4gICAgICAgICAgICB0YXAoKHJlc3BvbnNlKSA9PiB7dGhpcy5sb2FkaW5nID0gZmFsc2U7IGNvbnNvbGUubG9nKFwicmVzcG9uc2U6XCIscmVzcG9uc2UpfSlcclxuICAgICAgICk7XHJcbiAgfVxyXG4gIHB1YmxpYyBwb3N0Q29tbWFuZChwYWdlOiBzdHJpbmcsIHVybDphbnksIEJvZHk6YW55KTogT2JzZXJ2YWJsZTxHcmlkRGF0YVJlc3VsdD4ge1xyXG4vL2lmICh0aGlzLnBhcmFtQ29uZmlnLkRFQlVHX0ZMQUcpIGNvbnNvbGUubG9nKFwiIGluc2lkZSBwb3N0Q29tbWFuZFwiKVxyXG4gICAgbGV0IHRoZVVSTCA9IHVybDsgLy90aGlzLkVQTUVOR19VUkwgKyBwYWdlO1xyXG4gICAgdGhlVVJMID0gdGhpcy5jaGVja0RCTG9jKHRoZVVSTCk7XHJcbiAgICB0aGlzLmh0dHBPcHRpb25zID0ge1xyXG4gICAgICBoZWFkZXJzOiBuZXcgSHR0cEhlYWRlcnMoe1xyXG4gICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXHJcbiAgICAgICAgJ2F1dGhvcml6YXRpb24nOiB0aGlzLlN0ckF1dGhcclxuXHJcbiAgICAgIH0pXHJcbiAgICB9O1xyXG5cclxuICAgIC8vaWYgKHRoaXMucGFyYW1Db25maWcuREVCVUdfRkxBRykgY29uc29sZS5sb2coXCJwb3N0Q29tbWFuZCB0aGVVUkw6XCIgKyB0aGVVUkwpXHJcbiAgICByZXR1cm4gdGhpcy5odHRwXHJcbiAgICAgIC5wb3N0KGAke3RoZVVSTH1gLCBCb2R5LCB0aGlzLmh0dHBPcHRpb25zKVxyXG4gICAgICAgIC5waXBlKFxyXG4gICAgICAgICAgICBjYXRjaEVycm9yKChlcnIpID0+IHtcclxuICAgICAgICAgICAgICAvL2lmICh0aGlzLnBhcmFtQ29uZmlnLkRFQlVHX0ZMQUcpIGNvbnNvbGUubG9nKFwic2VydmVyIGVycm9yOlwiLCBlcnIubWVzc2FnZSlcclxuICAgICAgICAgIHRoaXMuc2hvd05vdGlmaWNhdGlvbihcImVycm9yXCIsIFwiZXJyb3I6XCIgKyBlcnIubWVzc2FnZSk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhyb3dFcnJvcihlcnIpO1xyXG4gICAgICAgICAgICAgIH0pLFxyXG4gICAgICAgICAgICBtYXAocmVzcG9uc2UgPT4gKFxyXG4gICAgICAgICAgICAgIDxhbnk+cmVzcG9uc2VcclxuICAgICAgICAgICAgKSksXHJcbiAgICAgICAgICAgIHRhcCgoKSA9PiB0aGlzLmxvYWRpbmcgPSBmYWxzZSlcclxuICAgICAgICk7XHJcbiAgfVxyXG4gIHB1YmxpYyBDYXBpdGFsaXplRmlyc3Qoc3RyOmFueSkge1xyXG4gICAgc3RyID0gc3RyLnRvTG93ZXJDYXNlKCk7XHJcblxyXG4gICAgc3RyID0gc3RyLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgc3RyLnNsaWNlKDEpXHJcbiAgICByZXR1cm4gc3RyO1xyXG4gIH1cclxuICBwdWJsaWMgQ2FwaXRhbGl6ZVRpdGxlKGZpZWxkTmFtZTphbnkpIHtcclxuXHJcbiAgbGV0IGFycmF5ID0gZmllbGROYW1lLnNwbGl0KFwiX1wiKTtcclxuICAgIGlmICh0aGlzLnBhcmFtQ29uZmlnLkRFQlVHX0ZMQUcpIGNvbnNvbGUubG9nKFwiYXJyYXk6XCIsIGFycmF5KVxyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhcnJheS5sZW5ndGg7IGkrKylcclxuICAgICAgYXJyYXlbaV0gPSB0aGlzLkNhcGl0YWxpemVGaXJzdChhcnJheVtpXSlcclxuXHJcbiAgICBmaWVsZE5hbWUgPSBhcnJheS5qb2luKFwiIFwiKTtcclxuICAgIHJldHVybiBmaWVsZE5hbWU7XHJcbiAgfVxyXG4gIHB1YmxpYyBwcmVwYXJlTG9va3VwKGZpZWxkTmFtZTphbnksIHBhcmFtQ29uZmlnOmFueSkge1xyXG5cclxuICAgIGxldCBsa3BBcnJOYW1lID0gXCJsa3BBcnJcIiArIGZpZWxkTmFtZTtcclxuICAgIGxldCBsa3BEZWY7XHJcbiAgICBpZiAoZmllbGROYW1lID09IFwiQVNTSUdORUVcIikge1xyXG4gICAgICBpZiAodGhpcy5wYXJhbUNvbmZpZy5ERUJVR19GTEFHKSBjb25zb2xlLmxvZyhcInN0YXJTZXJ2aWNlcy5zZXNzaW9uUGFyYW1zLlVTRVJfSU5GTzpcIiwgdGhpcy5zZXNzaW9uUGFyYW1zLlVTRVJfSU5GTyk7XHJcblxyXG4gICAgICBsZXQgdGVhbSA9IHRoaXMuc2Vzc2lvblBhcmFtcy5VU0VSX0lORk8uVEVBTTtcclxuXHJcbiAgICAgIGxrcERlZiA9IHtcclxuICAgICAgICBcInN0YXRtZW50XCI6IFwic2VsZWN0IFVTRVJOQU1FIENPREUsIEZVTExOQU1FIENPREVURVhUX0xBTkcgZnJvbSAgQURNX1VTRVJfSU5GT1JNQVRJT04gd2hlcmUgVEVBTSA9ICdcIiArIHRlYW0gKyBcIicgXCIsXHJcbiAgICAgICAgXCJsa3BBcnJOYW1lXCI6IGxrcEFyck5hbWUsIFwiZmllbGROYW1lXCI6IGZpZWxkTmFtZVxyXG4gICAgICB9O1xyXG5cclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICBsa3BEZWYgPSB7XHJcbiAgICAgICAgXCJzdGF0bWVudFwiOiBcIlNFTEVDVCBDT0RFLCAgQ09ERVRFWFRfTEFORyBGUk9NIFNPTV9UQUJTX0NPREVTIFdIRVJFIENPREVOQU1FID0gJ1wiICsgZmllbGROYW1lICsgXCInIGFuZCBMQU5HVUFHRV9OQU1FID0gJ1wiICsgcGFyYW1Db25maWcudXNlckxhbmcgKyBcIicgb3JkZXIgYnkgQ09ERVRFWFRfTEFORyAgXCIsXHJcbiAgICAgICAgXCJsa3BBcnJOYW1lXCI6IGxrcEFyck5hbWUsIFwiZmllbGROYW1lXCI6IGZpZWxkTmFtZVxyXG4gICAgICB9O1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGxrcERlZjtcclxuXHJcbiAgfVxyXG4gIHB1YmxpYyBnZXRBc3NpZ25lZVNlbGVjdChvYmplY3Q6YW55LCBhc3NpZ25lZVR5cGU6YW55KSB7XHJcbiAgICBsZXQgc2VsZWN0U3RtdDtcclxuXHJcbiAgICBpZiAoYXNzaWduZWVUeXBlID09IFwiVEVBTVwiKSB7XHJcbiAgICAgIHNlbGVjdFN0bXQgPSBcIlNFTEVDVCBDT0RFLCBDT0RFVEVYVF9MQU5HIEZST00gU09NX1RBQlNfQ09ERVMgV0hFUkUgQ09ERU5BTUUgPSdURUFNJyBhbmQgTEFOR1VBR0VfTkFNRSA9ICdcIiArIG9iamVjdC5wYXJhbUNvbmZpZy51c2VyTGFuZyArIFwiJyAgb3JkZXIgYnkgQ09ERVRFWFRfTEFORyBcIlxyXG4gICAgfVxyXG4gICAgZWxzZSBpZiAoYXNzaWduZWVUeXBlID09IFwiUEVSU09OXCIpIHtcclxuICAgICAgc2VsZWN0U3RtdCA9IFwiU0VMRUNUIFVTRVJOQU1FICBDT0RFLCBGVUxMTkFNRSBDT0RFVEVYVF9MQU5HIEZST00gQURNX1VTRVJfSU5GT1JNQVRJT04gV0hFUkUgVEVBTSA9J1wiICsgb2JqZWN0LnN0YXJTZXJ2aWNlcy5zZXNzaW9uUGFyYW1zLlVTRVJfSU5GTy5URUFNICsgXCInIG9yZGVyIGJ5IENPREVURVhUX0xBTkcgXCJcclxuICAgIH1cclxuICAgIGVsc2UgaWYgKGFzc2lnbmVlVHlwZSA9PSBcIk5FVFdPUktcIikge1xyXG4gICAgICBzZWxlY3RTdG10ID0gXCJTRUxFQ1QgQ09ERSwgQ09ERVRFWFRfTEFORyBGUk9NIFNPTV9UQUJTX0NPREVTIFdIRVJFIENPREVOQU1FID0nRVhDSF9TWVNUJyBhbmQgTEFOR1VBR0VfTkFNRSA9ICdcIiArIG9iamVjdC5wYXJhbUNvbmZpZy51c2VyTGFuZyArIFwiJyBvcmRlciBieSBDT0RFVEVYVF9MQU5HXCJcclxuICAgIH1cclxuICAgIHJldHVybiBzZWxlY3RTdG10O1xyXG4gIH1cclxuICBwdWJsaWMgZ2V0Rmlyc3RXZWVrRGF5KG9iamVjdDphbnksIHZhbHVlOmFueSkge1xyXG4gICAgbGV0IHZhbHVlRGF0ZTogRGF0ZVxyXG4gICAgbGV0IGZpcnN0V2Vla0RheTphbnkgPSBEYXkuTW9uZGF5O1xyXG4gICAgaWYgKHR5cGVvZiBvYmplY3QucGFyYW1Db25maWcuZmlyc3RXZWVrRGF5ICE9PSBcInVuZGVmaW5lZFwiKSB7XHJcbiAgICAgIGZpcnN0V2Vla0RheSA9IG9iamVjdC5wYXJhbUNvbmZpZy5maXJzdFdlZWtEYXk7XHJcbiAgICB9XHJcbiAgICB2YWx1ZURhdGUgPSBmaXJzdERheUluV2VlayhuZXcgRGF0ZSh2YWx1ZSksIGZpcnN0V2Vla0RheSk7XHJcbiAgICB2YWx1ZURhdGUgPSBnZXREYXRlKHZhbHVlRGF0ZSk7XHJcbiAgICBpZiAodGhpcy5wYXJhbUNvbmZpZy5ERUJVR19GTEFHKSBjb25zb2xlLmxvZyhcInZhbHVlRGF0ZTpcIiwgdmFsdWVEYXRlKVxyXG4gICAgcmV0dXJuIHZhbHVlRGF0ZTtcclxuXHJcbiAgfVxyXG4gIHB1YmxpYyBzZXRSVEwoKSB7XHJcbiAgICBsZXQgcGFyYW1Db25maWcgPSBnZXRQYXJhbUNvbmZpZygpO1xyXG4gICAgbGV0IGxhbmd1YWdlX25hbWUgPSBwYXJhbUNvbmZpZy51c2VyTGFuZztcclxuICAgIGxhbmd1YWdlX25hbWUgPSBsYW5ndWFnZV9uYW1lLnRvTG93ZXJDYXNlKCk7XHJcblxyXG4gICAgbGV0IHBhcmc6YW55ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtYWlucGFnZVwiKTtcclxuICAgIGNvbnN0IHN2YyA9IDxNeU1lc3NhZ2VTZXJ2aWNlPnRoaXMubWVzc2FnZXM7XHJcbiAgICAvL3N2Yy5sYW5ndWFnZV9uYW1lID0gc3ZjLmxhbmd1YWdlX25hbWUgPT09ICdlcycgPyAnaGUnIDogJ2VzJztcclxuICAgIC8vc3ZjLmxhbmd1YWdlX25hbWUgPSBsYW5ndWFnZV9uYW1lO1xyXG4gICAgLy9pZiAodGhpcy5wYXJhbUNvbmZpZy5ERUJVR19GTEFHKSBjb25zb2xlLmxvZyhcInNldFJUTDpsYW5ndWFnZV9uYW1lOlwiLCBsYW5ndWFnZV9uYW1lKVxyXG4gICAgaWYgKGxhbmd1YWdlX25hbWUgPT0gXCJhclwiKSB7XHJcbiAgICAgIHBhcmcuZGlyID0gXCJydGxcIjtcclxuICAgICAgdGhpcy5tZXNzYWdlcy5ub3RpZnkodHJ1ZSk7XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgcGFyZy5kaXIgPSBcImx0clwiO1xyXG4gICAgICB0aGlzLm1lc3NhZ2VzLm5vdGlmeShmYWxzZSk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIHB1YmxpYyBsb2FkTGFuZ3VhZ2VPbGQobGFuZ3VhZ2VfbmFtZTphbnkpIHtcclxuICAgIGxhbmd1YWdlX25hbWUgPSAhbGFuZ3VhZ2VfbmFtZSA/IFwiZW5cIiA6IGxhbmd1YWdlX25hbWVcclxuICAgIGxldCBmaWxlID0gXCJhc3NldHMvbGFuZy9cIiArIGxhbmd1YWdlX25hbWUudG9Mb3dlckNhc2UoKSArIFwiLmpzb25cIlxyXG4gICAgaWYgKHRoaXMucGFyYW1Db25maWcuREVCVUdfRkxBRykgY29uc29sZS5sb2coXCJsb2FkTGFuZ3VhZ2U6ZmlsZSxcIiwgZmlsZSlcclxuICAgIHRoaXMuaHR0cC5nZXQoZmlsZSkuc3Vic2NyaWJlKGRhdGEgPT4ge1xyXG4gICAgICBpZiAodGhpcy5wYXJhbUNvbmZpZy5ERUJVR19GTEFHKSBjb25zb2xlLmxvZyhcImxvYWRMYW5ndWFnZTpkYXRhLFwiLCBkYXRhKVxyXG4gICAgICBsZXQgcGFyYW1Db25maWcgPSB7XHJcbiAgICAgICAgXCJOYW1lXCI6IFwidGl0bGVzXCIsXHJcbiAgICAgICAgXCJWYWxcIjogZGF0YVxyXG4gICAgICB9O1xyXG4gICAgICBzZXRQYXJhbUNvbmZpZyhwYXJhbUNvbmZpZyk7XHJcbiAgICAgIHRoaXMucGFyYW1Db25maWcgPSBnZXRQYXJhbUNvbmZpZygpO1xyXG4gICAgICBwYXJhbUNvbmZpZyA9IHtcclxuICAgICAgICBcIk5hbWVcIjogXCJ1c2VyTGFuZ1wiLFxyXG4gICAgICAgIFwiVmFsXCI6IGxhbmd1YWdlX25hbWUudG9VcHBlckNhc2UoKVxyXG4gICAgICB9O1xyXG4gICAgICBzZXRQYXJhbUNvbmZpZyhwYXJhbUNvbmZpZyk7XHJcbiAgICAgIHRoaXMuc2V0UlRMKCk7XHJcblxyXG4gICAgICBpZiAodGhpcy5wYXJhbUNvbmZpZy5ERUJVR19GTEFHKSBjb25zb2xlLmxvZyhcImRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5kaXI6XCIsIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5kaXIgPT0gJ2x0cicpO1xyXG4gICAgfSxcclxuICAgIGVyciA9PiB7XHJcbiAgICAgICAgaWYgKHRoaXMucGFyYW1Db25maWcuREVCVUdfRkxBRykgY29uc29sZS5sb2coXCJsb2FkTGFuZ3VhZ2U6ZXJyLFwiLCBlcnIpXHJcbiAgICAgIC8vYWxlcnQgKCdlcnJvcjonICsgZXJyLm1lc3NhZ2UpO1xyXG4gICAgICAvL3RoaXMuc2hvd0Vycm9yTXNnKG9iamVjdCwgZXJyKTtcclxuICAgIH0pXHJcbiAgfVxyXG4gIHB1YmxpYyBsb2FkTGFuZ3VhZ2UobGFuZ3VhZ2U6YW55KXtcclxuICAgIGxhbmd1YWdlID0gIWxhbmd1YWdlID8gXCJlblwiIDogbGFuZ3VhZ2VcclxuICAgIGxldCBmaWxlID0gXCJsYW5nL1wiICsgbGFuZ3VhZ2UudG9Mb3dlckNhc2UoKSArIFwiLmpzb25cIlxyXG4gICAgaWYgKHRoaXMucGFyYW1Db25maWcuREVCVUdfRkxBRykgY29uc29sZS5sb2coXCJsb2FkTGFuZ3VhZ2U6ZmlsZSxcIixmaWxlKVxyXG4gICAgbGV0IHBhZ2UgPSBcIj9nZXRmaWxlPVwiICsgZmlsZTtcclxuICAgIHBhZ2UgPSB0aGlzLmNoZWNrREJMb2MocGFnZSk7XHJcbiAgICBwYWdlID0gZW5jb2RlVVJJKHBhZ2UpO1xyXG4gICAgXHJcbiAgICBpZiAodGhpcy5wYXJhbUNvbmZpZy5ERUJVR19GTEFHKSBjb25zb2xlLmxvZyhcImxvYWRMYW5ndWFnZTpwYWdlLFwiLHBhZ2UpXHJcbiAgICAgIHRoaXMucGFyYW1Db25maWcgPSBnZXRQYXJhbUNvbmZpZygpO1xyXG4gICAgICBpZiAodGhpcy5wYXJhbUNvbmZpZy5ERUJVR19GTEFHKSBjb25zb2xlLmxvZyhcInRoaXMucGFyYW1Db25maWcudGl0bGVzLFwiLHRoaXMucGFyYW1Db25maWcudGl0bGVzKTtcclxuICAgICAgbGV0IHBhcmFtQ29uZmlnID0ge1xyXG4gICAgICAgIFwiTmFtZVwiOiBcInVzZXJMYW5nXCIsXHJcbiAgICAgICAgXCJWYWxcIjogbGFuZ3VhZ2UudG9VcHBlckNhc2UoKVxyXG4gICAgICB9O1xyXG4gICAgICBzZXRQYXJhbUNvbmZpZyhwYXJhbUNvbmZpZyk7XHJcblxyXG4gICAgdGhpcy5zZW5kR2V0Q29tbWFuZCh0aGlzLlNFUlZFUl9VUkwgLCBwYWdlKS5zdWJzY3JpYmUocmVzdWx0ID0+IHtcclxuICAgICAgaWYgKHRoaXMucGFyYW1Db25maWcuREVCVUdfRkxBRykgY29uc29sZS5sb2coXCJsb2FkTGFuZ3VhZ2U6cmVzdWx0LFwiLHJlc3VsdCk7XHJcbiAgICAgIGxldCBkYXRhID0gcmVzdWx0LmRhdGE7XHJcbiAgICAgIGlmICh0aGlzLnBhcmFtQ29uZmlnLkRFQlVHX0ZMQUcpIGNvbnNvbGUubG9nKFwibG9hZExhbmd1YWdlOmRhdGEsXCIsZGF0YSlcclxuICAgICAgbGV0IHBhcmFtQ29uZmlnID0ge1xyXG4gICAgICAgIFwiTmFtZVwiOiBcInRpdGxlc1wiLFxyXG4gICAgICAgIFwiVmFsXCI6IGRhdGFcclxuICAgICAgfTtcclxuICAgICAgc2V0UGFyYW1Db25maWcocGFyYW1Db25maWcpO1xyXG4gICAgICB0aGlzLnBhcmFtQ29uZmlnID0gZ2V0UGFyYW1Db25maWcoKTtcclxuICAgICAgaWYgKHRoaXMucGFyYW1Db25maWcuREVCVUdfRkxBRykgY29uc29sZS5sb2coXCJ0aGlzLnBhcmFtQ29uZmlnLnRpdGxlcyxcIix0aGlzLnBhcmFtQ29uZmlnLnRpdGxlcyk7XHJcbiAgICAgIHBhcmFtQ29uZmlnID0ge1xyXG4gICAgICAgIFwiTmFtZVwiOiBcInVzZXJMYW5nXCIsXHJcbiAgICAgICAgXCJWYWxcIjogbGFuZ3VhZ2UudG9VcHBlckNhc2UoKVxyXG4gICAgICB9O1xyXG4gICAgICBzZXRQYXJhbUNvbmZpZyhwYXJhbUNvbmZpZyk7XHJcbiAgICAgIHRoaXMuc2V0UlRMKCk7XHJcblxyXG4gICAgICBpZiAodGhpcy5wYXJhbUNvbmZpZy5ERUJVR19GTEFHKSBjb25zb2xlLmxvZyhcImRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5kaXI6XCIsIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5kaXIgPT0gJ2x0cicgICk7XHJcbiAgICB9LFxyXG4gICAgZXJyID0+IHtcclxuICAgICAgaWYgKHRoaXMucGFyYW1Db25maWcuREVCVUdfRkxBRykgY29uc29sZS5sb2coXCJsb2FkTGFuZ3VhZ2U6ZXJyLFwiLGVycilcclxuICAgICAgLy9hbGVydCAoJ2Vycm9yOicgKyBlcnIubWVzc2FnZSk7XHJcbiAgICAgIC8vdGhpcy5zaG93RXJyb3JNc2cob2JqZWN0LCBlcnIpO1xyXG4gICAgfSlcclxuICB9XHJcbiAgcHVibGljIGdldE5MUyhwYXJhbXM6YW55LCBpZDphbnksIHRleHQ6YW55KSB7XHJcbiAgICAvL2lmICh0aGlzLnBhcmFtQ29uZmlnLkRFQlVHX0ZMQUcpIGNvbnNvbGUubG9nKFwiY2hlY2t4OmdldE5MUzp0aGlzLnBhcmFtQ29uZmlnLnRpdGxlcyxcIix0aGlzLnBhcmFtQ29uZmlnLnRpdGxlcyk7XHJcbiAgICBpZiAodHlwZW9mIHRoaXMucGFyYW1Db25maWcgIT09IFwidW5kZWZpbmVkXCIpIHtcclxuICAgICAgaWYgKHR5cGVvZiB0aGlzLnBhcmFtQ29uZmlnLnRpdGxlcyAhPT0gXCJ1bmRlZmluZWRcIikge1xyXG4gICAgICAgIC8vY29uc29sZS5sb2coXCJjaGVja3g6Z2V0TkxTOmlkOlwiLGlkKTtcclxuICAgICAgICBsZXQgYXJyYXkgPSBpZC5zcGxpdChcIi5cIik7XHJcbiAgICAgICAgaWYgKGFycmF5Lmxlbmd0aCA9PSAzKSB7XHJcbiAgICAgICAgICBpZiAodHlwZW9mIHRoaXMucGFyYW1Db25maWcudGl0bGVzIFthcnJheVswXV0gIT09IFwidW5kZWZpbmVkXCIpe1xyXG4gICAgICAgICAgICBpZiAodHlwZW9mIHRoaXMucGFyYW1Db25maWcudGl0bGVzW2FycmF5WzBdXVthcnJheVsxXV0gIT09IFwidW5kZWZpbmVkXCIpIHtcclxuICAgICAgICAgICAgICBpZiAodHlwZW9mIHRoaXMucGFyYW1Db25maWcudGl0bGVzW2FycmF5WzBdXVthcnJheVsxXV1bYXJyYXlbMl1dICE9PSBcInVuZGVmaW5lZFwiKXtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLnBhcmFtQ29uZmlnLnRpdGxlc1thcnJheVswXV1bYXJyYXlbMV1dW2FycmF5WzJdXSAhPSBcIlwiKXtcclxuICAgICAgICAgICAgICAgICAgdGV4dCA9IHRoaXMucGFyYW1Db25maWcudGl0bGVzW2FycmF5WzBdXVthcnJheVsxXV1bYXJyYXlbMl1dXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBlbHNle1xyXG4gICAgICAgICAgICAvL2NvbnNvbGUubG9nKFwiY2hlY2t4OmdldE5MUzphcnJheVswXSBub3QgZm91bmQgaW4gdGhpcy5wYXJhbUNvbmZpZy50aXRsZXMgOjA6XCIsYXJyYXlbMF0sIHRoaXMucGFyYW1Db25maWcudGl0bGVzKTtcclxuICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhcImNoZWNreDpnZXROTFM6YXJyYXlbMF0gbm90IGZvdW5kIGluIHRoaXMucGFyYW1Db25maWcudGl0bGVzIDowOlwiLGFycmF5WzBdKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC8vY29uc29sZS5sb2coXCJjaGVja3g6Z2V0TkxTOnRleHQsXCIsdGV4dCwgXCJpbiBhcnJheVswXTpcIiwgYXJyYXlbMF0sIHRoaXMucGFyYW1Db25maWcudGl0bGVzKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICBsZXQgbmxzX3RpdGxlID0gdGhpcy5wYXJhbUNvbmZpZy50aXRsZXNbaWRdO1xyXG4gICAgICAgICAgaWYgKHR5cGVvZiBubHNfdGl0bGUgIT09IFwidW5kZWZpbmVkXCIpIHtcclxuICAgICAgICAgICAgdGV4dCA9IG5sc190aXRsZTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGlmIChwYXJhbXMubGVuZ3RoID4gMCkge1xyXG4gICAgICBsZXQgc3RyQXJyYXkgPSB0ZXh0LnNwbGl0KFwiIyNcIik7XHJcbiAgICAgIHRleHQgPSBcIlwiO1xyXG4gIFxyXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHN0ckFycmF5Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgaWYgKHR5cGVvZiBwYXJhbXNbaV0gIT0gXCJ1bmRlZmluZWRcIilcclxuICAgICAgICAgIHRleHQgPSB0ZXh0ICsgc3RyQXJyYXlbaV0gKyBwYXJhbXNbaV07XHJcbiAgICAgICAgZWxzZVxyXG4gICAgICAgICAgdGV4dCA9IHRleHQgKyBzdHJBcnJheVtpXTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuXHJcbiAgICByZXR1cm4gdGV4dDtcclxuICB9XHJcbiAgcHVibGljIGxvYWRTdGF0ZW1lbnRzKHN0YXRlbWVudHM6YW55KXtcclxuICAgIGlmIChzdGF0ZW1lbnRzID09IFwiXCIpXHJcbiAgICAgIHN0YXRlbWVudHMgPSBcInN0YXRlbWVudHMuanNvblwiO1xyXG4gIGxldCBwYWdlID0gXCI/Z2V0ZmlsZT1cIiArIHN0YXRlbWVudHM7XHJcbiAgICBwYWdlID0gdGhpcy5jaGVja0RCTG9jKHBhZ2UpO1xyXG4gICAgcGFnZSA9IGVuY29kZVVSSShwYWdlKTtcclxuICAgIHRoaXMuc2VuZEdldENvbW1hbmQodGhpcy5TRVJWRVJfVVJMLCBwYWdlKS5zdWJzY3JpYmUocmVzdWx0ID0+IHtcclxuICAgICAgaWYgKHRoaXMucGFyYW1Db25maWcuREVCVUdfRkxBRykgY29uc29sZS5sb2coXCJsb2FkU3RhdGVtZW50czpyZXN1bHQsXCIsIHJlc3VsdCk7XHJcbiAgICAgIGxldCBkYXRhID0gcmVzdWx0LmRhdGE7XHJcbiAgICAgIGlmICh0aGlzLnBhcmFtQ29uZmlnLkRFQlVHX0ZMQUcpIGNvbnNvbGUubG9nKFwibG9hZFN0YXRlbWVudHM6ZGF0YSxcIiwgZGF0YSk7XHJcbiAgICAgIGxldCBsa3BBcnJRVUVSWV9ERUY6YW55ID0gW107XHJcbiAgICAgIE9iamVjdC5rZXlzKGRhdGEpLmZvckVhY2goZnVuY3Rpb24gKGtleTphbnkpIHtcclxuICAgICAgICBsZXQgdmFsdWUgPSBkYXRhW2tleV07XHJcbiAgICAgICAgbGV0IHJlYyA9IHtcclxuICAgICAgICAgIENPREU6IGtleSxcclxuICAgICAgICAgIENPREVURVhUX0xBTkc6IGtleSxcclxuICAgICAgICAgIHN0YXRlbWVudDogdmFsdWVcclxuICAgICAgICB9XHJcbiAgICAgICAgbGtwQXJyUVVFUllfREVGLnB1c2gocmVjKTtcclxuXHJcbiAgICB9KTtcclxuICAgICAgaWYgKHRoaXMucGFyYW1Db25maWcuREVCVUdfRkxBRykgY29uc29sZS5sb2coXCJsb2FkU3RhdGVtZW50czpkYXRhLFwiLCBkYXRhKTtcclxuICAgICAgaWYgKHRoaXMucGFyYW1Db25maWcuREVCVUdfRkxBRykgY29uc29sZS5sb2coXCJsb2FkU3RhdGVtZW50czpsa3BBcnJRVUVSWV9ERUYsXCIsIGxrcEFyclFVRVJZX0RFRilcclxuICAgICAgbGV0IHBhcmFtQ29uZmlnID0ge1xyXG4gICAgICAgIFwiTmFtZVwiOiBcInN0YXRlbWVudHNcIixcclxuICAgICAgICBcIlZhbFwiOiBkYXRhXHJcbiAgICAgIH07XHJcbiAgICAgIHNldFBhcmFtQ29uZmlnKHBhcmFtQ29uZmlnKTtcclxuICAgICAgcGFyYW1Db25maWcgPSB7XHJcbiAgICAgICAgXCJOYW1lXCI6IFwibGtwQXJyUVVFUllfREVGXCIsXHJcbiAgICAgICAgXCJWYWxcIjogbGtwQXJyUVVFUllfREVGXHJcbiAgICAgIH07XHJcbiAgICAgIHNldFBhcmFtQ29uZmlnKHBhcmFtQ29uZmlnKTtcclxuXHJcbiAgICB9LFxyXG4gICAgZXJyID0+IHtcclxuICAgICAgICBpZiAodGhpcy5wYXJhbUNvbmZpZy5ERUJVR19GTEFHKSBjb25zb2xlLmxvZyhcImxvYWRMYW5ndWFnZTplcnIsXCIsIGVycilcclxuXHJcblxyXG5cclxuICAgIH0pXHJcbiAgfVxyXG4gIC8vIHB1YmxpYyBsb2FkU3RhdGVtZW50c09sZCgpIHtcclxuXHJcbiAgLy8gICBsZXQgZmlsZSA9IFwiYXNzZXRzL1wiICsgXCJzdGF0ZW1lbnRzLmpzb25cIlxyXG4gIC8vICAgaWYgKHRoaXMucGFyYW1Db25maWcuREVCVUdfRkxBRykgY29uc29sZS5sb2coXCJsb2FkU3RhdGVtZW50czpmaWxlLFwiLCBmaWxlKVxyXG4gIC8vICAgdGhpcy5odHRwLmdldChmaWxlKS5zdWJzY3JpYmUoZGF0YSA9PiB7XHJcbiAgLy8gICAgIGxldCBsa3BBcnJRVUVSWV9ERUY6YW55ID0gW107XHJcbiAgLy8gICAgIE9iamVjdC5rZXlzKGRhdGEpLmZvckVhY2goZnVuY3Rpb24gKGtleTphbnkpIHtcclxuICAvLyAgICAgICBsZXQgdmFsdWUgPSBkYXRhW2tleV07XHJcbiAgLy8gICAgICAgbGV0IHJlYyA9IHtcclxuICAvLyAgICAgICAgIENPREU6IGtleSxcclxuICAvLyAgICAgICAgIENPREVURVhUX0xBTkc6IGtleSxcclxuICAvLyAgICAgICAgIHN0YXRlbWVudDogdmFsdWVcclxuICAvLyAgICAgICB9XHJcbiAgLy8gICAgICAgbGtwQXJyUVVFUllfREVGLnB1c2gocmVjKTtcclxuXHJcbiAgLy8gICAgIH0pO1xyXG4gIC8vICAgICBpZiAodGhpcy5wYXJhbUNvbmZpZy5ERUJVR19GTEFHKSBjb25zb2xlLmxvZyhcImxvYWRTdGF0ZW1lbnRzOmRhdGEsXCIsIGRhdGEpO1xyXG4gIC8vICAgICBpZiAodGhpcy5wYXJhbUNvbmZpZy5ERUJVR19GTEFHKSBjb25zb2xlLmxvZyhcImxvYWRTdGF0ZW1lbnRzOmxrcEFyclFVRVJZX0RFRixcIiwgbGtwQXJyUVVFUllfREVGKVxyXG4gIC8vICAgICBsZXQgcGFyYW1Db25maWcgPSB7XHJcbiAgLy8gICAgICAgXCJOYW1lXCI6IFwic3RhdGVtZW50c1wiLFxyXG4gIC8vICAgICAgIFwiVmFsXCI6IGRhdGFcclxuICAvLyAgICAgfTtcclxuICAvLyAgICAgc2V0UGFyYW1Db25maWcocGFyYW1Db25maWcpO1xyXG4gIC8vICAgICBwYXJhbUNvbmZpZyA9IHtcclxuICAvLyAgICAgICBcIk5hbWVcIjogXCJsa3BBcnJRVUVSWV9ERUZcIixcclxuICAvLyAgICAgICBcIlZhbFwiOiBsa3BBcnJRVUVSWV9ERUZcclxuICAvLyAgICAgfTtcclxuICAvLyAgICAgc2V0UGFyYW1Db25maWcocGFyYW1Db25maWcpO1xyXG5cclxuICAvLyAgIH0sXHJcbiAgLy8gICAgIGVyciA9PiB7XHJcbiAgLy8gICAgICAgaWYgKHRoaXMucGFyYW1Db25maWcuREVCVUdfRkxBRykgY29uc29sZS5sb2coXCJsb2FkTGFuZ3VhZ2U6ZXJyLFwiLCBlcnIpXHJcblxyXG5cclxuXHJcbiAgLy8gICAgIH0pXHJcbiAgLy8gfVxyXG5cclxuXHJcbiAgcHVibGljIGhhbmRsZUZldGNoZWRNb2R1bGVzKG9iamVjdDphbnksIGRhdGE6YW55KSB7XHJcbiAgICBpZiAob2JqZWN0LnBhcmFtQ29uZmlnLkRFQlVHX0ZMQUcpIGNvbnNvbGUubG9nKCdmZXRjaGVkTW9kdWxlcyA6ICcsIGRhdGFbMF0uZGF0YSk7XHJcbiAgICAvL3RoaXMuaXRlbXNbMF0uaXRlbXMgPSAgZGF0YTtcclxuICAgIG9iamVjdC5pdGVtcyA9IFtcclxuICAgICAge1xyXG4gICAgICAgdGV4dDogJ01vZHVsZScsXHJcbiAgICAgICBpdGVtczogZGF0YVswXS5kYXRhXHJcbiAgICAgfV07XHJcbiAgICAgb2JqZWN0LnNldE1vZHVsZU5hbWUob2JqZWN0LmN1cnJlbnRNZW51KTtcclxuICAgIGlmIChvYmplY3QucGFyYW1Db25maWcuREVCVUdfRkxBRykgY29uc29sZS5sb2coXCJvYmplY3QuaXRlbXM6XCIsIG9iamVjdC5pdGVtcywgXCJkYXRhWzBdLmRhdGEubGVuZ3RoOlwiLCBkYXRhWzBdLmRhdGEubGVuZ3RoKVxyXG4gICAgaWYgKGRhdGFbMF0uZGF0YS5sZW5ndGggPT0gMSkge1xyXG4gICAgICBvYmplY3Quc2hvd01vZHVsZVNlbGVjdGlvbiA9IGZhbHNlO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHVibGljIGZldGNoTWVudShvYmplY3Q6YW55LCBoYW5kbGVGZXRjaGVkRGF0YTphbnkpIHtcclxuICAgIGlmICgodGhpcy5TdHJBdXRoID09IFwiXCIpIHx8ICh0eXBlb2YgdGhpcy5TdHJBdXRoID09PSBcInVuZGVmaW5lZFwiKSlcclxuICAgICAgcmV0dXJuO1xyXG5cclxuXHJcbiAgICBsZXQgUGFnZSA9IFwiXCI7XHJcbiAgICB0aGlzLnBvc3QodGhpcywgUGFnZSwgb2JqZWN0LkJvZHkpLnN1YnNjcmliZShyZXN1bHQgPT4ge1xyXG5cclxuICAgICAgICBoYW5kbGVGZXRjaGVkRGF0YShvYmplY3QsIHJlc3VsdC5kYXRhLCBmYWxzZSk7XHJcblxyXG5cclxuICAgICAgb2JqZWN0LkJvZHkgPSBbXTtcclxuICAgIH0sXHJcbiAgICBlcnIgPT4ge1xyXG4gICAgICAgIC8vYWxlcnQoJ2Vycm9yOicgKyBlcnIubWVzc2FnZSk7XHJcbiAgICB9KTtcclxuICB9XHJcbiAgcHVibGljIHNldE1vZHVsZUl0ZW1zKG9iamVjdDphbnkpIHtcclxuXHJcblxyXG4gICAgaWYgKCFvYmplY3Quc3RhdGljTWVudSkge1xyXG4gICAgICBvYmplY3QuQm9keSA9IFtdO1xyXG4gICAgICBsZXQgTmV3VmFsOmFueSA9IHtcclxuICAgICAgICBNRU5VOiAnTUFJTicsXHJcbiAgICAgICAgQ0hPSUNFUyA6IG9iamVjdC5wYXJhbUNvbmZpZy5saWNlbnNlZE1vZHVsZXMudG9VcHBlckNhc2UoKSxcclxuICAgICAgICBMQU5HVUFHRV9OQU1FIDogb2JqZWN0LnBhcmFtQ29uZmlnLnVzZXJMYW5nLnRvVXBwZXJDYXNlKCksXHJcbiAgICAgIH07XHJcblxyXG4gICAgICAgIE5ld1ZhbFtcIl9RVUVSWVwiXSA9IFwiR0VUX0FMTE9XRURfTU9EVUxFU1wiO1xyXG5cclxuICAgICAgICBvYmplY3QuYWRkVG9Cb2R5KE5ld1ZhbCk7XHJcbiAgICAgIGlmICh0aGlzLnBhcmFtQ29uZmlnLkRFQlVHX0ZMQUcpIGNvbnNvbGUubG9nKFwiLS0tLS0tLS1vYmplY3QuQm9keSA6XCIsIG9iamVjdC5Cb2R5KVxyXG5cclxuXHJcbiAgICAgIHRoaXMuZmV0Y2hNZW51KG9iamVjdCwgdGhpcy5oYW5kbGVGZXRjaGVkTW9kdWxlcyk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIHB1YmxpYyBzdGF0ZUNoYW5nZShvYmplY3Q6YW55LCBkYXRhOiBQYW5lbEJhclN0YXRlQ2hhbmdlRXZlbnQpOiBib29sZWFuIHtcclxuICAgIC8vcHVibGljIHN0YXRlQ2hhbmdlKG9iamVjdDphbnksIGRhdGE6IEFycmF5PFBhbmVsQmFySXRlbU1vZGVsPik6IGJvb2xlYW4ge1xyXG4gIFxyXG4gICAgICBpZiAob2JqZWN0LnN0YXRpY01lbnUgPT0gdHJ1ZSkge1xyXG4gICAgICAgIGNvbnN0IGZvY3VzZWRFdmVudDogUGFuZWxCYXJJdGVtTW9kZWwgPSBkYXRhLml0ZW1zLmZpbHRlcihpdGVtID0+IGl0ZW0uZm9jdXNlZCA9PT0gdHJ1ZSlbMF07XHJcbiAgICAgICAgaWYgKHRoaXMucGFyYW1Db25maWcuREVCVUdfRkxBRykgY29uc29sZS5sb2coXCIgaW4gc3RhdGVDaGFuZ2UgOiBcIiArIGZvY3VzZWRFdmVudC5pZClcclxuICAgICAgICBpZiAodGhpcy5wYXJhbUNvbmZpZy5ERUJVR19GTEFHKSBjb25zb2xlLmxvZyhmb2N1c2VkRXZlbnQpXHJcbiAgICAgICAgaWYgKGZvY3VzZWRFdmVudC50aXRsZSA9PSBcIkZvcm1hdHRpbmcgRmxvd1wiKSB7XHJcbiAgICAgICAgICBvYmplY3Quc2hvd1BhbmVsYmFyID0gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnNvbGUubG9nKFwib2JqZWN0LmlzUGhvbmVQb3J0cmFpdDpcIiwgb2JqZWN0LmlzUGhvbmVQb3J0cmFpdCwgb2JqZWN0LnNob3dQYW5lbGJhcilcclxuICAgICAgICAvL3RoaXMuc2VsZWN0ZWRJZCA9IGZvY3VzZWRFdmVudC5pZDtcclxuICAgICAgICAvL3RoaXMucm91dGVyLm5hdmlnYXRlKFsnLycgKyBmb2N1c2VkRXZlbnQuaWRdKTtcclxuICAgICAgICAvL3RoaXMuc3RhclNlcnZpY2VzLnNldFJUTCgpO1xyXG4gICAgICAgIHJldHVybiB0cnVlOyAgLy9GdWFkIGNoZWNrIGlmIGl0IHNob3VsZCByZXR1cm4gZmFsc2Ugb3IgdHJ1ZVxyXG4gIFxyXG4gICAgICB9XHJcbiAgICAgIGNvbnN0IGZvY3VzZWRFdmVudDogUGFuZWxCYXJJdGVtTW9kZWwgPSBkYXRhLml0ZW1zLmZpbHRlcihpdGVtID0+IGl0ZW0uZm9jdXNlZCA9PT0gdHJ1ZSlbMF07XHJcbiAgICAgIGlmICh0aGlzLnBhcmFtQ29uZmlnLkRFQlVHX0ZMQUcpIGNvbnNvbGUubG9nKFwiIGluIHN0YXRlQ2hhbmdlIDogXCIgLCBmb2N1c2VkRXZlbnQsIGZvY3VzZWRFdmVudC5pZClcclxuICAgICAgbGV0IHJvdXRpbmVBdXRoID0gdGhpcy5nZXRSb3V0aW5lQXV0aChvYmplY3QubWVudSwgZm9jdXNlZEV2ZW50LmlkKTtcclxuICAgICAgaWYgKHRoaXMucGFyYW1Db25maWcuREVCVUdfRkxBRykgY29uc29sZS5sb2coXCIgaW4gc3RhdGVDaGFuZ2UgOiBcIiAsIGZvY3VzZWRFdmVudC5pZCAsIFwicm91dGluZUF1dGggOlwiICwgcm91dGluZUF1dGgpXHJcbiAgXHJcbiAgICAgIGlmIChmb2N1c2VkRXZlbnQuaWQgPT0gXCJQUlZGTE9XXCIpXHJcbiAgICAgICAgIG9iamVjdC5zaG93UGFuZWxiYXIgPSBmYWxzZTtcclxuICBcclxuICAgICAgaWYgKHR5cGVvZiByb3V0aW5lQXV0aCAhPT0gXCJ1bmRlZmluZWRcIikge1xyXG4gICAgICAgIGlmICh0aGlzLnBhcmFtQ29uZmlnLkRFQlVHX0ZMQUcpIGNvbnNvbGUubG9nKFwiIGluIHN0YXRlQ2hhbmdlIDogcm91dGluZUF1dGguYXV0aExldmVsOlwiICsgcm91dGluZUF1dGguYXV0aExldmVsKVxyXG4gICAgICAgIGlmIChyb3V0aW5lQXV0aC5hdXRoTGV2ZWwgPT0gMCkge1xyXG4gICAgICAgICAgbGV0IGRpYWxvZ1N0cnVjID0ge1xyXG4gICAgICAgICAgICBtc2c6IHRoaXMubm9BY2Nlc3NNc2csXHJcbiAgICAgICAgICAgIHRpdGxlOiBcIldhcm5pbmdcIixcclxuICAgICAgICAgICAgaW5mbzogbnVsbCxcclxuICAgICAgICAgICAgb2JqZWN0OiB0aGlzLFxyXG4gICAgICAgICAgICBhY3Rpb246IHRoaXMuT2tBY3Rpb25zLFxyXG4gICAgICAgICAgICBjYWxsYmFjazogbnVsbFxyXG4gICAgICAgICAgfTtcclxuICAgICAgICAgIHRoaXMuc2hvd0NvbmZpcm1hdGlvbihkaWFsb2dTdHJ1Yyk7XHJcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgb2JqZWN0LnNlbGVjdGVkSWQgPSBmb2N1c2VkRXZlbnQuaWQ7XHJcbiAgICAgICAgICB0aGlzLnNlc3Npb25QYXJhbXNbXCJQcnZVc2VyRmxvd1wiXSA9IFwiXCI7XHJcbiAgICAgICAgICB0aGlzLnNlc3Npb25QYXJhbXNbXCJQcnZVc2VyQ0RSXCJdID0gXCJcIjtcclxuICAgXHJcbiAgICAgICAgICBpZiAob2JqZWN0LnNlbGVjdGVkSWQgPT0gXCJQUlZGTE9XXCIpIHtcclxuICAgICAgICAgICAgdGhpcy5zZXNzaW9uUGFyYW1zW1wiUHJ2VXNlckZsb3dcIl0gPSBcIlBSVl9CTERcIjtcclxuICAgICAgICAgICAgdGhpcy5zZXNzaW9uUGFyYW1zW1wiUHJ2VXNlckNEUlwiXSA9IFwiUFJWX0NEUlwiO1xyXG4gICAgICAgICAgICBvYmplY3Quc2hvd1BhbmVsYmFyID0gZmFsc2U7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBpZiAob2JqZWN0LnNlbGVjdGVkSWQgPT0gXCJDQ01DQVRcIikge1xyXG4gICAgICAgICAgICB0aGlzLnNlc3Npb25QYXJhbXNbXCJQcnZVc2VyRmxvd1wiXSA9IFwiQ1JDX0NBVFwiO1xyXG4gICAgICAgICAgICB0aGlzLnNlc3Npb25QYXJhbXNbXCJQcnZVc2VyQ0RSXCJdID0gXCJDUkNfVVNFUl9JTkZPXCI7XHJcbiAgICAgICAgICAgIG9iamVjdC5zaG93UGFuZWxiYXIgPSBmYWxzZTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGlmIChvYmplY3Quc2VsZWN0ZWRJZCA9PSBcIkNDTUdSUFwiKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2Vzc2lvblBhcmFtc1tcIlBydlVzZXJGbG93XCJdID0gXCJDUkNfR1JPVVBcIjtcclxuICAgICAgICAgICAgdGhpcy5zZXNzaW9uUGFyYW1zW1wiUHJ2VXNlckNEUlwiXSA9IFwiQ1JDX0dST1VQX0lORk9cIjtcclxuICAgICAgICAgICAgb2JqZWN0LnNob3dQYW5lbGJhciA9IGZhbHNlO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgaWYgKG9iamVjdC5zZWxlY3RlZElkID09IFwiQ01HQ0FUXCIpIHtcclxuICAgICAgICAgICAgdGhpcy5zZXNzaW9uUGFyYW1zW1wiUHJ2VXNlckZsb3dcIl0gPSBcIkNBTV9DQVRcIjtcclxuICAgICAgICAgICAgdGhpcy5zZXNzaW9uUGFyYW1zW1wiUHJ2VXNlckNEUlwiXSA9IFwiQ0FNX1VTRVJfSU5GT1wiO1xyXG4gICAgICAgICAgICBvYmplY3Quc2hvd1BhbmVsYmFyID0gZmFsc2U7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBpZiAob2JqZWN0LnNlbGVjdGVkSWQgPT0gXCJDTUdHUlBcIikge1xyXG4gICAgICAgICAgICB0aGlzLnNlc3Npb25QYXJhbXNbXCJQcnZVc2VyRmxvd1wiXSA9IFwiQ0FNX0dST1VQXCI7XHJcbiAgICAgICAgICAgIHRoaXMuc2Vzc2lvblBhcmFtc1tcIlBydlVzZXJDRFJcIl0gPSBcIkNBTV9HUk9VUF9JTkZPXCI7XHJcbiAgICAgICAgICAgIG9iamVjdC5zaG93UGFuZWxiYXIgPSBmYWxzZTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGlmIChvYmplY3Quc2VsZWN0ZWRJZCA9PSBcIkJJTExJTkdcIikge1xyXG4gICAgICAgICAgICB0aGlzLnNlc3Npb25QYXJhbXNbXCJQcnZVc2VyRmxvd1wiXSA9IFwiQklMTElOR1wiO1xyXG4gICAgICAgICAgICB0aGlzLnNlc3Npb25QYXJhbXNbXCJQcnZVc2VyQ0RSXCJdID0gXCJCSUxMSU5HX0NEUlwiO1xyXG4gICAgICAgICAgICBvYmplY3Quc2hvd1BhbmVsYmFyID0gZmFsc2U7XHJcbiAgICAgICAgICB9XHJcbiAgXHJcbiAgICAgICAgICBpZiAob2JqZWN0LnNlbGVjdGVkSWQuc3RhcnRzV2l0aChcIlBPUlRBTF9cIikpLy9GdWFkIDogUk5EXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIHRoaXMuc2Vzc2lvblBhcmFtc1tcIlBPUlRBTF9GT1JNXCJdID0gZm9jdXNlZEV2ZW50LmlkO1xyXG4gICAgICAgICAgICBmb2N1c2VkRXZlbnQuaWQgPSAnRFNQUE9SVEFMJztcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC8vRlVBRDogY2hlY2sgaWYgYmVsb3cgY29kZSB0aWxsIGVsc2UgaXMgbmVlZGVkXHJcbiAgICAgICAgaWYgKHRoaXMucGFyYW1Db25maWcuREVCVUdfRkxBRykgY29uc29sZS5sb2coXCIgaW4gc3RhdGVDaGFuZ2UgOiBoZXJlMVwiKTtcclxuICAgICAgICAgIGlmIChvYmplY3Qucm91dGVyLnJvdXRlclN0YXRlLnNuYXBzaG90LnVybCA9PSAoJy8nICsgZm9jdXNlZEV2ZW50LmlkKSkge1xyXG4gICAgICAgICAgaWYgKHRoaXMucGFyYW1Db25maWcuREVCVUdfRkxBRykgY29uc29sZS5sb2coXCIgaW4gc3RhdGVDaGFuZ2UgOiBoZXJlMlwiKTtcclxuICAgICAgICAgIG9iamVjdC5yb3V0ZXIubmF2aWdhdGVCeVVybCgnJywgeyBza2lwTG9jYXRpb25DaGFuZ2U6IHRydWUgfSkudGhlbigoKSA9PntcclxuICAgICAgICAgICAgaWYgKHRoaXMucGFyYW1Db25maWcuREVCVUdfRkxBRykgY29uc29sZS5sb2coXCIgaW4gc3RhdGVDaGFuZ2UgOiBoZXJlM1wiKTtcclxuICAgICAgICAgICAgICBvYmplY3Qucm91dGVyLm5hdmlnYXRlKFsnLycgKyBmb2N1c2VkRXZlbnQuaWRdLCB7IHNraXBMb2NhdGlvbkNoYW5nZTogdHJ1ZSwgcmVwbGFjZVVybDogdHJ1ZSwgcHJlc2VydmVGcmFnbWVudDogZmFsc2UgfSlcclxuICAgICAgICAgICAgaWYgKHRoaXMucGFyYW1Db25maWcuREVCVUdfRkxBRykgY29uc29sZS5sb2coXCIgaW4gc3RhdGVDaGFuZ2UgOiBoZXJlNFwiKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgb2JqZWN0LnJvdXRlci5uYXZpZ2F0ZShbJy8nICsgZm9jdXNlZEV2ZW50LmlkXSwgeyBza2lwTG9jYXRpb25DaGFuZ2U6IHRydWUsIHJlcGxhY2VVcmw6IHRydWUsIHByZXNlcnZlRnJhZ21lbnQ6IGZhbHNlIH0pO1xyXG4gICAgICAgICAgaWYgKHRoaXMucGFyYW1Db25maWcuREVCVUdfRkxBRykgY29uc29sZS5sb2coXCJpbiBzdGF0ZUNoYW5nZSA6IFwiLGZvY3VzZWRFdmVudC5pZCk7XHJcbiAgICAgICAgfVxyXG4gIFxyXG4gICAgICAgICAgaWYgKG9iamVjdC5pc1Bob25lUG9ydHJhaXQpe1xyXG4gICAgICAgICAgICBvYmplY3Quc2hvd1BhbmVsYmFyID0gZmFsc2U7XHJcbiAgICAgICAgICB9XHJcbiAgXHJcbiAgICAgICAgICAvL3RoaXMuc3RhclNlcnZpY2VzLnNldFJUTCgpO1xyXG4gIFxyXG4gICAgICAgICAgLy90aGlzLnNob3dQYW5lbGJhciA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gIFxyXG4gICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbiAgcHVibGljIHNldFBhbmVsQmFyKG9iamVjdDphbnkpIHtcclxuXHJcbiAgICBpZiAoIW9iamVjdC5zdGF0aWNNZW51KSB7XHJcbiAgICAgIG9iamVjdC5Cb2R5ID0gW107XHJcbiAgICAgIGxldCBOZXdWYWw6YW55ID0ge1xyXG4gICAgICBNRU5VIDogb2JqZWN0LmN1cnJlbnRNZW51LnRvVXBwZXJDYXNlKCksXHJcbiAgICAgIFVTRVJOQU1FIDogb2JqZWN0LnN0YXJTZXJ2aWNlcy5zZXNzaW9uUGFyYW1zLlVTRVJOQU1FLnRvVXBwZXJDYXNlKCksXHJcbiAgICAgIExBTkdVQUdFX05BTUUgOiBvYmplY3QucGFyYW1Db25maWcudXNlckxhbmcudG9VcHBlckNhc2UoKSxcclxuICAgICAgSElEREVOIDogJzAnXHJcbiAgICB9O1xyXG5cclxuICAgICAgTmV3VmFsW1wiX1FVRVJZXCJdID0gXCJHRVRfTUVOVV9ST1VUSU5FU1wiO1xyXG5cclxuICAgICAgb2JqZWN0LmFkZFRvQm9keShOZXdWYWwpO1xyXG5cclxuICAgICAgbGV0IE5ld1ZhbDE6YW55ID0ge1xyXG4gICAgICAgIE1FTlU6IFwiXCIsXHJcbiAgICAgICAgVVNFUk5BTUU6IG9iamVjdC5zdGFyU2VydmljZXMuc2Vzc2lvblBhcmFtcy5VU0VSTkFNRS50b1VwcGVyQ2FzZSgpXHJcbiAgICB9O1xyXG5cclxuICAgICAgTmV3VmFsMVtcIl9RVUVSWVwiXSA9IFwiR0VUX1JPVVRJTkVTX0FVVEhPUklUWVwiO1xyXG5cclxuICAgICAgb2JqZWN0LmFkZFRvQm9keShOZXdWYWwxKTtcclxuXHJcbiAgICB0aGlzLmZldGNoTWVudShvYmplY3QsIHRoaXMuaGFuZGxlRmV0Y2hlZFBhbmVsQmFyKTtcclxuICB9XHJcbn1cclxuXHJcblxyXG5cclxuICBwdWJsaWMgaGFuZGxlRmV0Y2hlZFBhbmVsQmFyKG9iamVjdDphbnksIGRhdGE6YW55LCBzaG93RW1wdHk6YW55KSB7XHJcbiAgICBmdW5jdGlvbiBjaGVja0F1dGhEYXRhKHJvdXRpbmVfbmFtZTphbnksIGF1dGhEYXRhOmFueSkge1xyXG4gICAgICBsZXQgaSA9IDA7XHJcbiAgICAgIGxldCByb3V0aW5lQXV0aDtcclxuICAgICAgd2hpbGUgKGkgPCBhdXRoRGF0YS5sZW5ndGgpIHtcclxuICAgICAgICBpZiAoYXV0aERhdGFbaV0uUk9VVElORV9OQU1FID09IHJvdXRpbmVfbmFtZSkge1xyXG4gICAgICAgICAgcm91dGluZUF1dGggPSBhdXRoRGF0YVtpXTtcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpKys7XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIHJvdXRpbmVBdXRoO1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gZm9ybWF0RGF0YShhcnI6YW55LCBhdXRoRGF0YTphbnksIHNob3dFbXB0eTphbnkpIHtcclxuICAgICAgbGV0IG1lbnU6YW55ID0gW107XHJcbiAgICAgIGxldCBpdGVtczphbnkgPSBbXTtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYXJyLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIGlmIChvYmplY3QucGFyYW1Db25maWcuREVCVUdfRkxBRykgY29uc29sZS5sb2coXCJhcnJbaV06XCIsIGFycltpXSk7XHJcbiAgICAgIGxldCB0eXBlID0gYXJyW2ldLmNob2ljZV90eXBlLmNoYXJBdCgwKTtcclxuICAgICAgaWYgKHR5cGUgPT0gXCJNXCIpIHtcclxuICAgICAgICBpZiAoaXRlbXMubGVuZ3RoICE9IDApIHtcclxuICAgICAgICAgIGxldCBpdGVtID0ge1xyXG4gICAgICAgICAgICB0ZXh0OiBtZW51SXRlbS50ZXh0LFxyXG4gICAgICAgICAgICBjaG9pY2U6IG1lbnVJdGVtLmNob2ljZSxcclxuICAgICAgICAgICAgaXRlbXM6IGl0ZW1zXHJcbiAgICAgICAgICB9O1xyXG4gICAgICAgICAgbWVudS5wdXNoKGl0ZW0pO1xyXG4gICAgICAgICAgaXRlbXMgPSBbXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIG1lbnVJdGVtOmFueSA9IHtcclxuICAgICAgICAgIHRleHQ6IGFycltpXS50ZXh0LFxyXG4gICAgICAgICAgY2hvaWNlOiBhcnJbaV0uY2hvaWNlXHJcbiAgICAgICAgfTtcclxuICAgICAgICAvL21lbnUucHVzaChpdGVtKTtcclxuICAgICAgfVxyXG4gICAgICBlbHNlIGlmICh0eXBlID09IFwiUlwiKSB7XHJcbiAgICAgICAgaWYgKG9iamVjdC5wYXJhbUNvbmZpZy5ERUJVR19GTEFHKSBjb25zb2xlLmxvZyhcImF1dGhEYXRhOlwiLCBhdXRoRGF0YSwgXCJhcnJbaV06XCIsIGFycltpXSk7XHJcbiAgICAgICAgbGV0IHJvdXRpbmVBdXRoID0gY2hlY2tBdXRoRGF0YShhcnJbaV0uY2hvaWNlLCBhdXRoRGF0YSk7XHJcbiAgICAgICAgaWYgKHR5cGVvZiByb3V0aW5lQXV0aCAhPT0gXCJ1bmRlZmluZWRcIikge1xyXG4gICAgICAgICAgaWYgKG9iamVjdC5wYXJhbUNvbmZpZy5ERUJVR19GTEFHKSBjb25zb2xlLmxvZyhcImFycltpXS5jaG9pY2U6XCIgKyBhcnJbaV0uY2hvaWNlICsgXCIgIHJvdXRpbmVBdXRoLkRJU1BfRkxBRzpcIiArIHJvdXRpbmVBdXRoLkRJU1BfRkxBRyArIFwiIHJvdXRpbmVBdXRoLkFVVEhMRVZFTCA6XCIgKyByb3V0aW5lQXV0aC5BVVRITEVWRUwpXHJcbiAgICAgICAgICBpZiAocm91dGluZUF1dGguRElTUF9GTEFHICE9IFwiTlwiKSAvLyAmJiAocm91dGluZUF1dGguQVVUSExFVkVMICE9IDApIClcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgbGV0IHJvdXRpbmVJdGVtID0ge1xyXG4gICAgICAgICAgICAgIHRleHQ6IGFycltpXS50ZXh0LFxyXG4gICAgICAgICAgICAgIGNob2ljZTogYXJyW2ldLmNob2ljZSxcclxuICAgICAgICAgICAgICBhdXRoTGV2ZWw6IHJvdXRpbmVBdXRoLkFVVEhMRVZFTCxcclxuICAgICAgICAgICAgICByb3V0aW5lRGVzYzogcm91dGluZUF1dGguUk9VVElORV9ERVNDLFxyXG4gICAgICAgICAgICAgIHJvdXRpbmVWZXI6IHJvdXRpbmVBdXRoLlJPVVRfVkVSLFxyXG4gICAgICAgICAgICAgIHJvdXRlckxpbms6IFwiL1wiICsgYXJyW2ldLmNob2ljZVxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICBpdGVtcy5wdXNoKHJvdXRpbmVJdGVtKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKG9iamVjdC5wYXJhbUNvbmZpZy5ERUJVR19GTEFHKSBjb25zb2xlLmxvZyhcIi0tLWl0ZW1zOlwiLCBpdGVtcyk7XHJcbiAgICAgICAgXHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGlmIChpdGVtcy5sZW5ndGggIT0gMCkge1xyXG4gICAgICBsZXQgaXRlbSA9IHtcclxuICAgICAgICB0ZXh0OiBtZW51SXRlbS50ZXh0LFxyXG4gICAgICAgIGNob2ljZTogbWVudUl0ZW0uY2hvaWNlLFxyXG4gICAgICAgIGl0ZW1zOiBpdGVtc1xyXG4gICAgICB9O1xyXG4gICAgICBtZW51LnB1c2goaXRlbSk7XHJcbiAgICAgIGl0ZW1zID0gW107XHJcbiAgICB9XHJcbiAgICBlbHNlIGlmIChzaG93RW1wdHkgJiYgKHR5cGVvZiBtZW51SXRlbSAhPT0gXCJ1bmRlZmluZWRcIikpe1xyXG4gICAgICBsZXQgaXRlbSA9IHtcclxuICAgICAgICB0ZXh0OiBtZW51SXRlbS50ZXh0LFxyXG4gICAgICAgIGNob2ljZTogbWVudUl0ZW0uY2hvaWNlLFxyXG4gICAgICAgIGl0ZW1zOiBbXVxyXG4gICAgICB9O1xyXG4gICAgICBtZW51LnB1c2goaXRlbSk7XHJcbiAgICBcclxuICAgIH1cclxuXHJcbiAgICAgIHJldHVybiBtZW51O1xyXG59XHJcbiAgb2JqZWN0Lm1lbnUgPSBmb3JtYXREYXRhKGRhdGFbMF0uZGF0YSwgZGF0YVsxXS5kYXRhLCBzaG93RW1wdHkpO1xyXG5cclxuICBvYmplY3QucGFuZWxJdGVtcyA9IG9iamVjdC5tZW51O1xyXG5vYmplY3QubWVudUl0ZW1zSG9yaXogPSBvYmplY3QubWVudTtcclxuICBsZXQgcGFyYW1Db25maWcgPSB7XHJcbiAgICBcIk5hbWVcIjogXCJtZW51XCIsXHJcbiAgICBcIlZhbFwiOiBvYmplY3QubWVudVxyXG4gIH07XHJcbiAgc2V0UGFyYW1Db25maWcocGFyYW1Db25maWcpO1xyXG5cclxuXHJcbn1cclxuXHJcbnB1YmxpYyAgc2xlZXAobXM6YW55KSB7XHJcbiAgcmV0dXJuIG5ldyBQcm9taXNlKHJlc29sdmUgPT4gc2V0VGltZW91dChyZXNvbHZlLCBtcykpO1xyXG59XHJcbiAgcHJpdmF0ZSBjb21taXRCb2R5OmFueSA9IFtdO1xyXG5wdWJsaWMgaW5UcmFucyA9IGZhbHNlO1xyXG4gIHB1YmxpYyBpc1Bob25lUG9ydHJhaXQgPSBmYWxzZTtcclxucHJpdmF0ZSBCb2R5OmFueSA9IFtdO1xyXG5wdWJsaWMgY29tbWl0Q29tbWFuZHMgPSBbJ0lOU0VSVCcsICdVUERBVEUnLCAnREVMRVRFJ107XHJcblxyXG4gIHB1YmxpYyBiZWdpblRyYW5zKCkge1xyXG4gICAgdGhpcy5jb21taXRCb2R5ID0gW107XHJcbiAgdGhpcy5pblRyYW5zID0gdHJ1ZTtcclxuXHJcbn1cclxuICBwdWJsaWMgZW5kVHJhbnMob2JqZWN0OmFueSwgY29tbWl0OmFueSkge1xyXG4gIGxldCBQYWdlID0gXCImX3RyYW5zPVlcIjtcclxuICAgIGxldCB0YWJsZUluZm86YW55O1xyXG4gICAgaWYgKGNvbW1pdCAmJiB0aGlzLmNvbW1pdEJvZHkubGVuZ3RoICE9IDApIHtcclxuICAgIHJldHVybiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHtcclxuICAgICAgdGhpcy5wb3N0KHRoaXMsIFBhZ2UsIHRoaXMuY29tbWl0Qm9keSkuc3Vic2NyaWJlKHJlc3VsdCA9PiB7XHJcbiAgICAgICAgICB0aGlzLmNvbW1pdEJvZHkgPSBbXTtcclxuICAgICAgICB0aGlzLmluVHJhbnMgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgdGFibGVJbmZvID0gcmVzdWx0LmRhdGFbMF0uZGF0YTtcclxuICAgICAgICByZXR1cm4gcmVzb2x2ZSh0YWJsZUluZm8pO1xyXG4gICAgICB9LFxyXG4gICAgICAgIGVyciA9PiB7XHJcbiAgICAgICAgICBvYmplY3QuRk9STV9UUklHR0VSX0ZBSUxVUkUgPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLmNvbW1pdEJvZHkgPSBbXTtcclxuICAgICAgICAgIHRoaXMuaW5UcmFucyA9IGZhbHNlO1xyXG4gICAgICAgICAgLy9hbGVydCgnZXJyb3I6JyArIGVyci5tZXNzYWdlKTtcclxuICAgICAgICAgIHRoaXMuc2hvd0Vycm9yTXNnKG9iamVjdCwgZXJyKTtcclxuICAgICAgICAgIHJldHVybiByZXNvbHZlKHRhYmxlSW5mbyk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9KTtcclxuICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgdGhpcy5jb21taXRCb2R5ID0gW107XHJcbiAgICB0aGlzLmluVHJhbnMgPSBmYWxzZTtcclxuICAgICAgcmV0dXJuIG51bGw7XHJcbiAgfVxyXG5cclxuXHJcbn1cclxuLy8gcHVibGljIGFkZFRvQm9keShOZXdWYWwpIHtcclxuLy8gICB0aGlzLkJvZHkucHVzaChOZXdWYWwpO1xyXG4vLyB9XHJcbiAgcHVibGljIGV4ZWNTUUxCb2R5KG9iamVjdDphbnksIEJvZHk6YW55LERCTG9jOmFueSkge1xyXG4gIGZ1bmN0aW9uIGdldEZpcnN0V29yZChzdHI6YW55KSB7XHJcbiAgICBsZXQgbXlBcnJheSA9IHN0ci5zcGxpdChcIl9cIik7XHJcbiAgICByZXR1cm4gbXlBcnJheVswXTtcclxuICB9XHJcbiAgXHJcbiAgb2JqZWN0LkZPUk1fVFJJR0dFUl9GQUlMVVJFID0gZmFsc2U7XHJcbiAgbGV0IFBhZ2UgPSBcIiZfdHJhbnM9TlwiO1xyXG4gIGlmIChEQkxvYyAhPSBcIlwiKVxyXG4gICAgUGFnZSA9IFBhZ2UgKyBcIiZEQkxvYz1cIiArIERCTG9jO1xyXG4gIGxldCB0YWJsZUluZm86YW55O1xyXG5cclxuICBvYmplY3QuTk9URk9VTkQgPSBmYWxzZTtcclxuICBpZiAodGhpcy5pblRyYW5zKSB7XHJcbiAgICBsZXQgZmlyc3RXb3JkID0gZ2V0Rmlyc3RXb3JkKEJvZHlbMF0uX1FVRVJZKS50b1VwcGVyQ2FzZSgpO1xyXG4gICAgXHJcbiAgICBsZXQgaXNDb21taXRDb21tYW5kID0gdGhpcy5jb21taXRDb21tYW5kcy5pbmNsdWRlcyhmaXJzdFdvcmQpO1xyXG4gICAgaWYgKGlzQ29tbWl0Q29tbWFuZCkge1xyXG4gICAgICB0aGlzLmNvbW1pdEJvZHkucHVzaChCb2R5WzBdKTtcclxuICAgICAgcmV0dXJuIHRhYmxlSW5mbztcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJldHVybiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHtcclxuICAgIC8vY29uc29sZS5sb2cgKFwiY2hlY2s6ZGlydHkgdGVzdHggZXhlY1NRTEJvZHkgMlwiKTtcclxuICAgIHRoaXMucG9zdCh0aGlzLCBQYWdlLCBCb2R5KS5zdWJzY3JpYmUocmVzdWx0ID0+IHtcclxuICAgICAgLy9jb25zb2xlLmxvZyAoXCJjaGVjazpkaXJ0eSB0ZXN0eCBleGVjU1FMQm9keSAzXCIpO1xyXG4gICAgICB0YWJsZUluZm8gPSByZXN1bHQuZGF0YTtcclxuICAgICAgLy8gaWYgKHJlc3VsdC5kYXRhLmxlbmd0aCA9PSAwKVxyXG4gICAgICAvLyAgIG9iamVjdC5OT1RGT1VORCA9IHRydWU7XHJcbiAgICAgIHJldHVybiByZXNvbHZlKHRhYmxlSW5mbyk7XHJcbiAgICB9LFxyXG4gICAgICBlcnIgPT4ge1xyXG4gICAgICAgIG9iamVjdC5GT1JNX1RSSUdHRVJfRkFJTFVSRSA9IHRydWU7XHJcbiAgICAgICAgYWxlcnQoJ2Vycm9yOicgKyBlcnIubWVzc2FnZSk7XHJcbiAgICAgICAgcmV0dXJuIHJlc29sdmUodGFibGVJbmZvKTtcclxuICAgICAgfSk7XHJcbiAgfSk7XHJcblxyXG5cclxufVxyXG4gIHB1YmxpYyBleGVjU1FMKG9iamVjdDphbnksIHNxbFN0bXQ6YW55KSB7XHJcbiAgICBmdW5jdGlvbiBnZXRGaXJzdFdvcmQoc3RyOmFueSkge1xyXG4gICAgICBsZXQgc3BhY2VJbmRleCA9IHN0ci50cmltKCkuaW5kZXhPZignICcpO1xyXG4gICAgcmV0dXJuIHNwYWNlSW5kZXggPT09IC0xID8gc3RyIDogc3RyLnN1YnN0cigwLCBzcGFjZUluZGV4KTtcclxuICB9XHJcblxyXG4gIG9iamVjdC5GT1JNX1RSSUdHRVJfRkFJTFVSRSA9IGZhbHNlO1xyXG4gIGxldCBQYWdlID0gXCImX3RyYW5zPU5cIjtcclxuICB0aGlzLkJvZHkgPSBbXTtcclxuICAgIGxldCBOZXdWYWw6YW55ID0ge307XHJcbiAgTmV3VmFsW1wiX1FVRVJZXCJdID0gXCJFWEVDU1FMXCI7XHJcbiAgTmV3VmFsW1wiX1NUTVRcIl0gPSBzcWxTdG10O1xyXG4gICAgbGV0IHRhYmxlSW5mbzphbnk7XHJcblxyXG4gIG9iamVjdC5OT1RGT1VORCA9IGZhbHNlO1xyXG4gIGlmICh0aGlzLmluVHJhbnMpIHtcclxuICAgIGxldCBmaXJzdFdvcmQgPSBnZXRGaXJzdFdvcmQoc3FsU3RtdCkudG9VcHBlckNhc2UoKTtcclxuICAgIFxyXG4gICAgbGV0IGlzQ29tbWl0Q29tbWFuZCA9IHRoaXMuY29tbWl0Q29tbWFuZHMuaW5jbHVkZXMoZmlyc3RXb3JkKTtcclxuICAgIGlmIChpc0NvbW1pdENvbW1hbmQpIHtcclxuICAgICAgdGhpcy5jb21taXRCb2R5LnB1c2goTmV3VmFsKTtcclxuICAgICAgcmV0dXJuIHRhYmxlSW5mbztcclxuICAgIH1cclxuICB9XHJcbiAgdGhpcy5Cb2R5ID0gdGhpcy5hZGRUb0JvZHkoTmV3VmFsLCB0aGlzLkJvZHkpO1xyXG5cclxuICByZXR1cm4gbmV3IFByb21pc2UocmVzb2x2ZSA9PiB7XHJcbiAgICB0aGlzLnBvc3QodGhpcywgUGFnZSwgdGhpcy5Cb2R5KS5zdWJzY3JpYmUocmVzdWx0ID0+IHtcclxuICAgICAgdGhpcy5Cb2R5ID0gW107XHJcbiAgICAgIHRhYmxlSW5mbyA9IHJlc3VsdC5kYXRhWzBdLmRhdGE7XHJcbiAgICAgIGlmIChyZXN1bHQuZGF0YVswXS5yb3dDb3VudCA9PSAwKVxyXG4gICAgICAgIG9iamVjdC5OT1RGT1VORCA9IHRydWU7XHJcbiAgICAgIHJldHVybiByZXNvbHZlKHRhYmxlSW5mbyk7XHJcbiAgICB9LFxyXG4gICAgICBlcnIgPT4ge1xyXG4gICAgICAgIG9iamVjdC5GT1JNX1RSSUdHRVJfRkFJTFVSRSA9IHRydWU7XHJcbiAgICAgICAgYWxlcnQoJ2Vycm9yOicgKyBlcnIubWVzc2FnZSk7XHJcbiAgICAgICAgcmV0dXJuIHJlc29sdmUodGFibGVJbmZvKTtcclxuICAgICAgfSk7XHJcbiAgfSk7XHJcbn1cclxuXHJcblxyXG4vLy8vLy8vL1xyXG4gXHJcbnB1YmxpYyBhdHRfaW1nX2dldEZpbGVMaW5rKGZpZWxkX2RhdGEsb2JqZWN0KSB7XHJcbiAgbGV0IGZpbGVMaW5rOmFueSA9IFwiXCI7XHJcbiAgaWYgKGZpZWxkX2RhdGEgPT0gbnVsbClcclxuICAgIHJldHVybiBmaWxlTGluaztcclxuICBmaWVsZF9kYXRhID0gZmllbGRfZGF0YS50cmltKCk7XHJcbiAgdHJ5IHtcclxuICAgIGZpZWxkX2RhdGEgPSBKU09OLnBhcnNlKGZpZWxkX2RhdGEpO1xyXG4gIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgLy9jb25zb2xlLmxvZyAoXCJFcnJvciBwYXJzaW5nIDpcIixmaWVsZF9kYXRhKTtcclxuICAgICAgcmV0dXJuIGZpbGVMaW5rO1xyXG4gIH1cclxuICAgIC8vY29uc29sZS5sb2coXCJnZXRGaWxlTGluazpmaWVsZF9kYXRhOlwiLCBmaWVsZF9kYXRhLCB0eXBlb2YgZmllbGRfZGF0YSkgICAgXHJcbiAgICAvL2NvbnNvbGUubG9nKFwiZ2V0RmlsZUxpbms6ZmllbGRfZGF0YTpcIiwgZmllbGRfZGF0YSlcclxuICAgIGlmICh0eXBlb2YgZmllbGRfZGF0YSA9PSBcIm9iamVjdFwiKVxyXG4gICAgICBmaWxlTGluayA9IG9iamVjdC5BdHREd25VcmwgKyBlbmNvZGVVUkkoZmllbGRfZGF0YVswXS5uYW1lKTtcclxuICAgIC8vY29uc29sZS5sb2coXCJnZXRGaWxlTGluazpmaWxlTGluazpcIiwgZmlsZUxpbmspXHJcbiAgcmV0dXJuIGZpbGVMaW5rO1xyXG59XHJcbnB1YmxpYyBhdHRfaW1nX2dldEF0dChkYXRhOmFueSxvYmplY3Q6YW55KSB7XHJcbiAgbGV0IGF0dHMgPSBcIlwiO1xyXG4gLy8gY29uc29sZS5sb2coXCJnZXRBdHRfZGF0YTpcIiwgZGF0YSk7XHJcbiAgICBsZXQgdmFscyA9XHJcbiAgICAgIFt7bmFtZTpcIlwiLFxyXG4gICAgICBzaXplOlwiXCJ9XHJcbiAgICAgIF07XHJcbiAgdHJ5IHtcclxuICAgIHZhbHMgPSBKU09OLnBhcnNlKGRhdGEpO1xyXG4gIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgY29uc29sZS5sb2cgKFwiRXJyb3IgcGFyc2luZyA6MzpcIixkYXRhKTtcclxuICAgICAgcmV0dXJuIGF0dHM7XHJcbiAgfVxyXG4gIC8vaWYgKChkYXRhICE9IFwiXCIpICYmIChkYXRhICE9IFwiW11cIikgJiYgKGRhdGEgIT0gbnVsbCkpIHtcclxuICAgIC8vdmFscyA9IEpTT04ucGFyc2UoZGF0YSk7XHJcbiAgICBjb25zb2xlLmxvZyhcImdldEF0dF9kYXRhOlwiLCB2YWxzLCB0eXBlb2YgdmFscyk7XHJcbiAgICBpZiAodHlwZW9mIHZhbHMgPT0gXCJvYmplY3RcIil7XHJcbiAgICAgIHZhbHMuZm9yRWFjaCh2YWwgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwidmFsOlwiLCB2YWwpXHJcbiAgICAgICAgYXR0cyA9IGF0dHMgKyBcIjxcIiArIHZhbC5uYW1lICsgXCIgU2l6ZTpcIiArIHZhbC5zaXplICsgXCI+XCI7XHJcbiAgICAgIH0pXHJcbiAgICB9XHJcbiAgLy99XHJcbiAgY29uc29sZS5sb2coXCJhdHRzOlwiLCBhdHRzKVxyXG4gIHJldHVybiBhdHRzO1xyXG59XHJcbnB1YmxpYyBhdHRfaW1nX3BvcHVsYXRlQXJycyhmb3JtR3JvdXA6YW55LG9iamVjdDphbnkpe1xyXG4gIC8vY29uc29sZS5sb2coXCJhdHRfaW1nX3BvcHVsYXRlQXJyczpmb3JtR3JvdXA6XCIsIGZvcm1Hcm91cCwgb2JqZWN0LmF0dF9hcnIsIG9iamVjdC5pbWdfYXJyKVxyXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgb2JqZWN0LmF0dF9hcnIubGVuZ3RoOyBpKyspIHtcclxuICAgIGlmIChmb3JtR3JvdXBbb2JqZWN0LmF0dF9hcnJbaV1dLnRyaW0oKSAhPSBcIlwiKSB7XHJcbiAgICAgIHRyeSB7XHJcbiAgICAgICAgb2JqZWN0Lm15RmlsZXNbb2JqZWN0LmF0dF9hcnJbaV1dID0gSlNPTi5wYXJzZShmb3JtR3JvdXBbb2JqZWN0LmF0dF9hcnJbaV1dKTtcclxuICAgICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgICAgLy9jb25zb2xlLmxvZyAoXCJFcnJvciBwYXJzaW5nIDpcIixmaWVsZF9kYXRhKTtcclxuICAgICAgICAgIHJldHVybiA7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBvYmplY3QuaW1nX2Fyci5sZW5ndGg7IGkrKykge1xyXG4gICAgaWYgKGZvcm1Hcm91cFtvYmplY3QuaW1nX2FycltpXV0gIT0gbnVsbCl7XHJcbiAgICAgIGlmIChmb3JtR3JvdXBbb2JqZWN0LmltZ19hcnJbaV1dLnRyaW0oKSAhPSBcIlwiKSBvYmplY3QubXlGaWxlc1tvYmplY3QuaW1nX2FycltpXV0gPSBKU09OLnBhcnNlKGZvcm1Hcm91cFtvYmplY3QuaW1nX2FycltpXV0pO1xyXG4gICAgfVxyXG4gIH1cclxuICBmb3IgKGxldCBpID0gMDsgaSA8IG9iamVjdC5hdHRfYXJyLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAvL2NvbnNvbGUubG9nKFwib2JqZWN0LmF0dF9hcnJbaV06XCIsIG9iamVjdC5hdHRfYXJyW2ldKVxyXG4gICAgaWYgKGZvcm1Hcm91cFtvYmplY3QuYXR0X2FycltpXV0gIT0gXCJcIikge1xyXG4gICAgICBsZXQgaXRlbXMxOmFueSA9W107XHJcbiAgICAgIGxldCBmaWVsZF9kYXRhID0gZm9ybUdyb3VwW29iamVjdC5hdHRfYXJyW2ldXTtcclxuXHJcbiAgICAgIHRyeSB7XHJcbiAgICAgICAgZmllbGRfZGF0YSA9IEpTT04ucGFyc2UoZmllbGRfZGF0YSk7XHJcbiAgICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICAgIGNvbnNvbGUubG9nIChcIkVycm9yIHBhcnNpbmcgOjQ6XCIsZmllbGRfZGF0YSk7XHJcbiAgICAgICAgICBmaWVsZF9kYXRhID0gbnVsbDtcclxuICAgICAgICAgIC8vcmV0dXJuIGF0dHM7XHJcbiAgICAgIH1cclxuICAgICAgLy9maWVsZF9kYXRhID0gSlNPTi5wYXJzZShmaWVsZF9kYXRhKTtcclxuICAgICAgaWYgKGZpZWxkX2RhdGEgIT0gbnVsbCl7XHJcbiAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBmaWVsZF9kYXRhLmxlbmd0aDsgaisrKSB7XHJcbiAgICAgICAgICBsZXQgaXRlbSA9XHJcbiAgICAgICAgICAgIHsgdGl0bGU6IGZpZWxkX2RhdGFbal0ubmFtZSwgdXJsOiBvYmplY3QuQXR0RHduVXJsICsgZW5jb2RlVVJJKGZpZWxkX2RhdGFbal0ubmFtZSkgfVxyXG4gICAgICAgICAgaXRlbXMxLnB1c2goaXRlbSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIG9iamVjdC5pbWdfZ2FsbGVyeVtvYmplY3QuYXR0X2FycltpXV0gPSBpdGVtczE7XHJcbiAgICB9XHJcbiAgICAvL2NvbnNvbGUubG9nKFwiaW1nX2dhbGxlcnk6XCIsIG9iamVjdC5pbWdfZ2FsbGVyeSlcclxuICB9XHJcbn1cclxucHVibGljIGNvbnZUb1N0cmluZyh2YWwpe1xyXG4gIHJldHVybiBTdHJpbmcodmFsKVxyXG4gfVxyXG5cclxucHVibGljIGF0dF9pbWdfcG9wdWxhdGVBcnJzTGlzdChmb3JtR3JvdXBBcnI6YW55LG9iamVjdDphbnkpe1xyXG4gIC8vY29uc29sZS5sb2coXCJhdHRfaW1nX3BvcHVsYXRlQXJyczpmb3JtR3JvdXA6XCIsIGZvcm1Hcm91cEFyciwgb2JqZWN0LmF0dF9hcnIsIG9iamVjdC5pbWdfYXJyKVxyXG4gIGZvciAobGV0IGsgPSAwOyBrIDwgZm9ybUdyb3VwQXJyLmxlbmd0aDsgaysrKSB7XHJcbiAgbGV0IGZvcm1Hcm91cCA9IGZvcm1Hcm91cEFycltrXTtcclxuICBmb3IgKGxldCBpID0gMDsgaSA8IG9iamVjdC5hdHRfYXJyLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAvL2NvbnNvbGUubG9nKFwiYXR0X2ltZ19wb3B1bGF0ZUFycnM6b2JqZWN0LmF0dF9hcnJbaV06XCIsIG9iamVjdC5hdHRfYXJyW2ldLGZvcm1Hcm91cCAsIGZvcm1Hcm91cFtvYmplY3QuYXR0X2FycltpXV0pXHJcbiAgICAvL2NvbnNvbGUubG9nKFwiYXR0X2ltZ19wb3B1bGF0ZUFycnM6Zm9ybUdyb3VwW29iamVjdC5hdHRfYXJyW2ldXTpcIitmb3JtR3JvdXBbb2JqZWN0LmF0dF9hcnJbaV1dLnRyaW0oKSArXCI6XCIgIClcclxuICAgIGlmIChmb3JtR3JvdXBbb2JqZWN0LmF0dF9hcnJbaV1dLnRyaW0oKSAhPSBcIlwiKSBvYmplY3QubXlGaWxlc1tvYmplY3QuYXR0X2FycltpXV0gPSBKU09OLnBhcnNlKGZvcm1Hcm91cFtvYmplY3QuYXR0X2FycltpXV0pO1xyXG4gIH1cclxuICBmb3IgKGxldCBpID0gMDsgaSA8IG9iamVjdC5pbWdfYXJyLmxlbmd0aDsgaSsrKSB7XHJcbiAgICBpZiAoZm9ybUdyb3VwW29iamVjdC5pbWdfYXJyW2ldXSAhPSBcIlwiKSBvYmplY3QubXlGaWxlc1tvYmplY3QuaW1nX2FycltpXV0gPSBKU09OLnBhcnNlKGZvcm1Hcm91cFtvYmplY3QuaW1nX2FycltpXV0pO1xyXG4gIH1cclxuICAvL2NvbnNvbGUubG9nKFwiYXR0X2ltZ19wb3B1bGF0ZUFycnM6b2JqZWN0Lm15RmlsZXM6azpcIiwgayxvYmplY3QubXlGaWxlcywgb2JqZWN0LmF0dF9hcnIgKVxyXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgb2JqZWN0LmF0dF9hcnIubGVuZ3RoOyBpKyspIHtcclxuICAgIC8vY29uc29sZS5sb2coXCJhdHRfaW1nX3BvcHVsYXRlQXJyczpvYmplY3QuYXR0X2FycltpXTpcIiwgb2JqZWN0LmF0dF9hcnJbaV0sIGZvcm1Hcm91cFtvYmplY3QuYXR0X2FycltpXV0pXHJcbiAgICAvL2NvbnNvbGUubG9nKFwiYXR0X2ltZ19wb3B1bGF0ZUFycnM6b2JqZWN0LmF0dF9hcnJbaV06XCIrIGZvcm1Hcm91cFtvYmplY3QuYXR0X2FycltpXV0gKyBcIjpcIilcclxuICAgIGxldCBhcnJWYWwgPSBmb3JtR3JvdXBbb2JqZWN0LmF0dF9hcnJbaV1dO1xyXG4gICAgYXJyVmFsID0gYXJyVmFsLnRyaW0oKTtcclxuICAgIGlmICggIGFyclZhbCAhPSBcIlwiKSB7XHJcbiAgICAgIGxldCBpdGVtczE6YW55ID1bXTtcclxuICAgICAgbGV0IGZpZWxkX2RhdGEgPSBmb3JtR3JvdXBbb2JqZWN0LmF0dF9hcnJbaV1dO1xyXG4gICAgICBmaWVsZF9kYXRhID0gSlNPTi5wYXJzZShmaWVsZF9kYXRhKTtcclxuICAgICAgaWYgKGZpZWxkX2RhdGEgIT0gbnVsbCl7XHJcbiAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBmaWVsZF9kYXRhLmxlbmd0aDsgaisrKSB7XHJcbiAgICAgICAgICBsZXQgaXRlbSA9XHJcbiAgICAgICAgICAgIHsgdGl0bGU6IGZpZWxkX2RhdGFbal0ubmFtZSwgdXJsOiBvYmplY3QuQXR0RHduVXJsICsgZW5jb2RlVVJJKGZpZWxkX2RhdGFbal0ubmFtZSkgfVxyXG4gICAgICAgICAgaXRlbXMxLnB1c2goaXRlbSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIC8vY29uc29sZS5sb2coXCJhdHRfaW1nX3BvcHVsYXRlQXJyczppbWdfZ2FsbGVyeTprOlwiLCBrLG9iamVjdC5hdHRfYXJyW2ldLCAgaXRlbXMxKVxyXG4gICAgICBsZXQgaW1nX2dhbGxlcnkgPVtdO1xyXG4gICAgICBpbWdfZ2FsbGVyeVtvYmplY3QuYXR0X2FycltpXV0gPSBpdGVtczE7XHJcbiAgICAgIG9iamVjdC5pbWdfZ2FsbGVyeVtrXSA9IGltZ19nYWxsZXJ5O1xyXG4gICAgfVxyXG4gICAgZWxzZXtcclxuICAgICAgbGV0IGltZ19nYWxsZXJ5ID1bXTtcclxuICAgICAgaW1nX2dhbGxlcnlbb2JqZWN0LmF0dF9hcnJbaV1dID0gW107XHJcbiAgICAgIG9iamVjdC5pbWdfZ2FsbGVyeVtrXSA9IGltZ19nYWxsZXJ5O1xyXG4gICAgfVxyXG4gIH1cclxuICAgIC8vY29uc29sZS5sb2coXCJhdHRfaW1nX3BvcHVsYXRlQXJyczppbWdfZ2FsbGVyeTpcIiwgb2JqZWN0LmltZ19nYWxsZXJ5KVxyXG4gIH1cclxufVxyXG5wdWJsaWMgYXR0X3dlYmNhbV9mb3JtX29wZW5VcGxvYWRpbWFnZShmaWVsZF9pZDphbnksb2JqZWN0OmFueSkge1xyXG4gIC8vb2JqZWN0LnVwbG9hZGltYWdlID0gdHJ1ZTtcclxuICAvL2NvbnNvbGUubG9nKFwib3BlblVwbG9hZGltYWdlOmZpZWxkX2lkOlwiLCBmaWVsZF9pZCwgb2JqZWN0Lm15RmlsZXMsIG9iamVjdC5teUZpbGVzW2ZpZWxkX2lkXSlcclxuICBsZXQgbXlGaWxlcyA9IFtdO1xyXG4gIGlmICh0eXBlb2Ygb2JqZWN0Lm15RmlsZXNbZmllbGRfaWRdICE9IFwidW5kZWZpbmVkXCIpIHtcclxuICAgIG15RmlsZXMgPSBvYmplY3QubXlGaWxlc1tmaWVsZF9pZF07XHJcbiAgfVxyXG4gIGxldCBmaWxlc0RlbGV0ZWQgPSBbXTtcclxuICBpZiAodHlwZW9mIG9iamVjdC5maWxlc0RlbGV0ZWRbZmllbGRfaWRdICE9IFwidW5kZWZpbmVkXCIpIHtcclxuICAgIGZpbGVzRGVsZXRlZCA9IG9iamVjdC5maWxlc0RlbGV0ZWRbZmllbGRfaWRdO1xyXG4gIH1cclxuICBsZXQgaGlkZU90aGVycyA9IGZhbHNlO1xyXG4gIGlmICh0eXBlb2Ygb2JqZWN0LmRpc2FibGVVcGxvYWQgIT0gXCJ1bmRlZmluZWRcIikge1xyXG4gICAgaGlkZU90aGVycyA9IG9iamVjdC5kaXNhYmxlVXBsb2FkO1xyXG4gIH1cclxuICBsZXQgaW1hZ2VJRCA9IGZpZWxkX2lkO1xyXG4gIHZhciBtYXN0ZXJQYXJhbXMgPSB7XHJcbiAgICBcImFjdGlvblwiOiBcInVwbG9hZFwiLFxyXG4gICAgXCJpbWFnZUlEXCI6IGltYWdlSUQsXHJcbiAgICBcIm15RmlsZXNcIjogbXlGaWxlcyxcclxuICAgIFwiZmlsZXNEZWxldGVkXCI6IGZpbGVzRGVsZXRlZCxcclxuICAgIFwiaGlkZU90aGVyc1wiIDogaGlkZU90aGVyc1xyXG4gIH1cclxuXHJcblxyXG4gIG9iamVjdC5EU1BfV0VCQ0FNQ29uZmlnID0gbmV3IGNvbXBvbmVudENvbmZpZ0RlZigpXHJcbiAgb2JqZWN0LkRTUF9XRUJDQU1Db25maWcubWFzdGVyUGFyYW1zID0gbWFzdGVyUGFyYW1zXHJcbiAgLy9jb25zb2xlLmxvZyhcIm9iamVjdC5EU1BfV0VCQ0FNQ29uZmlnLm1hc3RlclBhcmFtczpcIiwgb2JqZWN0LkRTUF9XRUJDQU1Db25maWcubWFzdGVyUGFyYW1zKVxyXG59XHJcblxyXG5wdWJsaWMgYXR0X2ltZ19mb3JtX29wZW5VcGxvYWRpbWFnZShmaWVsZF9pZDphbnksb2JqZWN0OmFueSkge1xyXG4gIC8vb2JqZWN0LnVwbG9hZGltYWdlID0gdHJ1ZTtcclxuICBjb25zb2xlLmxvZyhcIm9wZW5VcGxvYWRpbWFnZTpmaWVsZF9pZDpcIiwgZmllbGRfaWQsIG9iamVjdC5teUZpbGVzLCBvYmplY3QubXlGaWxlc1tmaWVsZF9pZF0pXHJcbiAgbGV0IG15RmlsZXMgPSBbXTtcclxuICBpZiAodHlwZW9mIG9iamVjdC5teUZpbGVzW2ZpZWxkX2lkXSAhPSBcInVuZGVmaW5lZFwiKSB7XHJcbiAgICBteUZpbGVzID0gb2JqZWN0Lm15RmlsZXNbZmllbGRfaWRdO1xyXG4gIH1cclxuICBsZXQgZmlsZXNEZWxldGVkID0gW107XHJcbiAgaWYgKHR5cGVvZiBvYmplY3QuZmlsZXNEZWxldGVkW2ZpZWxkX2lkXSAhPSBcInVuZGVmaW5lZFwiKSB7XHJcbiAgICBmaWxlc0RlbGV0ZWQgPSBvYmplY3QuZmlsZXNEZWxldGVkW2ZpZWxkX2lkXTtcclxuICB9XHJcbiAgbGV0IGhpZGVPdGhlcnMgPSBmYWxzZTtcclxuICBpZiAodHlwZW9mIG9iamVjdC5kaXNhYmxlVXBsb2FkICE9IFwidW5kZWZpbmVkXCIpIHtcclxuICAgIGhpZGVPdGhlcnMgPSBvYmplY3QuZGlzYWJsZVVwbG9hZDtcclxuICB9XHJcbiAgbGV0IGltYWdlSUQgPSBmaWVsZF9pZDtcclxuICB2YXIgbWFzdGVyUGFyYW1zID0ge1xyXG4gICAgXCJhY3Rpb25cIjogXCJ1cGxvYWRcIixcclxuICAgIFwiaW1hZ2VJRFwiOiBpbWFnZUlELFxyXG4gICAgXCJteUZpbGVzXCI6IG15RmlsZXMsXHJcbiAgICBcImZpbGVzRGVsZXRlZFwiOiBmaWxlc0RlbGV0ZWQsXHJcbiAgICBcImhpZGVPdGhlcnNcIiA6IGhpZGVPdGhlcnNcclxuICB9XHJcblxyXG5cclxuICBvYmplY3QuRFNQX1VQTE9BRENvbmZpZyA9IG5ldyBjb21wb25lbnRDb25maWdEZWYoKVxyXG4gIG9iamVjdC5EU1BfVVBMT0FEQ29uZmlnLm1hc3RlclBhcmFtcyA9IG1hc3RlclBhcmFtc1xyXG4gIGNvbnNvbGUubG9nKFwib2JqZWN0LkRTUF9VUExPQURDb25maWcubWFzdGVyUGFyYW1zOlwiLCBvYmplY3QuRFNQX1VQTE9BRENvbmZpZy5tYXN0ZXJQYXJhbXMpXHJcbn1cclxucHVibGljIGNhbGxHZXRTYXZlQXR0YWNoZW10cyhhY3Rpb246YW55LGRhdGE6YW55LG9iamVjdDphbnkpIHtcclxuICAvL2NvbnNvbGUubG9nKFwiY2FsbFNhdmVBdHRhY2hlbXRzOm15RmlsZXM6XCIsIG9iamVjdC5teUZpbGVzKVxyXG4gIGxldCBjYW5TZW5kID0gZmFsc2U7XHJcbiAgaWYoIHR5cGVvZiBvYmplY3QuYXR0X2FyciAhPSBcInVuZGVmaW5lZFwiKXtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgb2JqZWN0LmF0dF9hcnIubGVuZ3RoOyBpKyspIHtcclxuICAgICAgaWYgKHR5cGVvZiBkYXRhW29iamVjdC5hdHRfYXJyW2ldXSAhPT0gXCJ1bmRlZmluZWRcIiAmJiBkYXRhW29iamVjdC5hdHRfYXJyW2ldXS50cmltKCkgIT0gXCJcIikgXHJcbiAgICAgICAgY2FuU2VuZCA9IHRydWU7XHJcbiAgICB9XHJcbiAgfVxyXG4gIGlmKCB0eXBlb2Ygb2JqZWN0LmltZ19hcnIgIT0gXCJ1bmRlZmluZWRcIil7XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IG9iamVjdC5pbWdfYXJyLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIGlmICh0eXBlb2YgZGF0YVtvYmplY3QuaW1nX2FycltpXV0gIT09IFwidW5kZWZpbmVkXCIgJiYgZGF0YVtvYmplY3QuaW1nX2FycltpXV0udHJpbSgpICE9IFwiXCIpIFxyXG4gICAgICAgIGNhblNlbmQgPSB0cnVlO1xyXG4gICAgfVxyXG4gIH1cclxuICB2YXIgbWFzdGVyUGFyYW1zID0ge1xyXG4gICAgXCJhY3Rpb25cIjogYWN0aW9uLFxyXG4gICAgXCJhdHRfYXJyXCI6IG9iamVjdC5hdHRfYXJyLFxyXG4gICAgXCJpbWdfYXJyXCI6IG9iamVjdC5pbWdfYXJyLFxyXG4gICAgXCJteUZpbGVzXCI6IG9iamVjdC5teUZpbGVzLFxyXG4gICAgXCJmaWxlc0RlbGV0ZWRcIjogb2JqZWN0LmZpbGVzRGVsZXRlZCxcclxuICAgIFwiZGF0YVwiOiBkYXRhXHJcbiAgfVxyXG4gIGlmIChhY3Rpb24gPT0gXCJzYXZlXCIpXHJcbiAgICBjYW5TZW5kID0gdHJ1ZTtcclxuICBpZiAoY2FuU2VuZCl7XHJcbiAgICBjb25zb2xlLmxvZyhcImNhbGxHZXRTYXZlQXR0YWNoZW10czptYXN0ZXJQYXJhbXM6XCIsIG1hc3RlclBhcmFtcykgXHJcbiAgICBvYmplY3QuRFNQX1VQTE9BRENvbmZpZyA9IG5ldyBjb21wb25lbnRDb25maWdEZWYoKVxyXG4gICAgb2JqZWN0LkRTUF9VUExPQURDb25maWcubWFzdGVyUGFyYW1zID0gbWFzdGVyUGFyYW1zXHJcbiAgfVxyXG5cclxufVxyXG5wdWJsaWMgY2FsbEdldFNhdmVXZWJDYW0oYWN0aW9uOmFueSxkYXRhOmFueSxvYmplY3Q6YW55KSB7XHJcbiAgLy9jb25zb2xlLmxvZyhcImNhbGxTYXZlQXR0YWNoZW10czpteUZpbGVzOlwiLCBvYmplY3QubXlGaWxlcylcclxuICB2YXIgbWFzdGVyUGFyYW1zID0ge1xyXG4gICAgXCJhY3Rpb25cIjogYWN0aW9uLFxyXG4gICAgXCJhdHRfYXJyXCI6IG9iamVjdC5hdHRfYXJyLFxyXG4gICAgXCJpbWdfYXJyXCI6IG9iamVjdC5pbWdfYXJyLFxyXG4gICAgXCJteUZpbGVzXCI6IG9iamVjdC5teUZpbGVzLFxyXG4gICAgXCJmaWxlc0RlbGV0ZWRcIjogb2JqZWN0LmZpbGVzRGVsZXRlZCxcclxuICAgIFwiZGF0YVwiOiBkYXRhXHJcbiAgfVxyXG5cclxuICBvYmplY3QuRFNQX1dFQkNBTUNvbmZpZyA9IG5ldyBjb21wb25lbnRDb25maWdEZWYoKVxyXG4gIG9iamVjdC5EU1BfV0VCQ0FNQ29uZmlnLm1hc3RlclBhcmFtcyA9IG1hc3RlclBhcmFtc1xyXG5cclxufVxyXG5hc3luYyBhdHRfaW1nX3NhdmVGb3JtQ29tcGxldGVkSGFuZGxlcih2YWx1ZTphbnksb2JqZWN0OmFueSkge1xyXG4gIC8vY29uc29sZS5sb2coXCJhdHRfaW1nX3NhdmVGb3JtQ29tcGxldGVkSGFuZGxlcjp2YWx1ZVwiLCB2YWx1ZSk7XHJcbiAgbGV0IGZpZWxkX2lkID0gdmFsdWUuZmllbGRfaWQ7XHJcbiAgb2JqZWN0Lm15RmlsZXNbZmllbGRfaWRdID0gdmFsdWUubXlGaWxlcztcclxuICBvYmplY3QuZmlsZXNEZWxldGVkW2ZpZWxkX2lkXSA9IHZhbHVlLmZpbGVzRGVsZXRlZDtcclxuICBvYmplY3QuY2FtSW1hZ2UgPSB2YWx1ZS5jYW1JbWFnZTtcclxuICAvL2NvbnNvbGUubG9nKFwib2JqZWN0Lm15RmlsZXNbZmllbGRfaWRdOlwiLCBvYmplY3QubXlGaWxlc1tmaWVsZF9pZF0pXHJcbiAgbGV0IEpTT05WYWwgID0gSlNPTi5zdHJpbmdpZnkob2JqZWN0Lm15RmlsZXNbZmllbGRfaWRdKTtcclxuICBpZiAoSlNPTlZhbCA9PSBcIltdXCIpXHJcbiAgICBKU09OVmFsID0gXCJcIjtcclxuICBvYmplY3QuZm9ybS5nZXRSYXdWYWx1ZSgpW2ZpZWxkX2lkXSA9IEpTT05WYWw7XHJcbiAgb2JqZWN0LmZvcm0ucGF0Y2hWYWx1ZSh7IFtmaWVsZF9pZF06IEpTT05WYWwgfSk7XHJcbiAgaWYgKHR5cGVvZiBvYmplY3QuYXR0X2ltZ19zYXZlRm9ybUNvbXBsZXRlZCAhPSBcInVuZGVmaW5lZFwiKSB7XHJcbiAgICBsZXQgTmV3VmFsOmFueSA9IFtdO1xyXG4gICAgTmV3VmFsLnB1c2goZmllbGRfaWQpO1xyXG4gICAgb2JqZWN0LmF0dF9pbWdfc2F2ZUZvcm1Db21wbGV0ZWQuYXBwbHkob2JqZWN0LCBOZXdWYWwpO1xyXG4gIH1cclxufVxyXG5hc3luYyBhdHRfaW1nX3NhdmVGb3JtMkNvbXBsZXRlZEhhbmRsZXIodmFsdWU6YW55LG9iamVjdDphbnkpIHtcclxuICBjb25zb2xlLmxvZyhcImF0dF9pbWdfc2F2ZUZvcm1Db21wbGV0ZWRIYW5kbGVyOnZhbHVlXCIsIHZhbHVlKTtcclxuICBsZXQgZmllbGRfaWQgPSB2YWx1ZS5maWVsZF9pZDtcclxuICBvYmplY3QubXlGaWxlc1tmaWVsZF9pZF0gPSB2YWx1ZS5teUZpbGVzO1xyXG4gIG9iamVjdC5maWxlc0RlbGV0ZWRbZmllbGRfaWRdID0gdmFsdWUuZmlsZXNEZWxldGVkO1xyXG4gIGNvbnNvbGUubG9nKFwib2JqZWN0Lm15RmlsZXNbZmllbGRfaWRdOlwiLCBvYmplY3QubXlGaWxlc1tmaWVsZF9pZF0pXHJcbiAgbGV0IEpTT05WYWwgID0gSlNPTi5zdHJpbmdpZnkob2JqZWN0Lm15RmlsZXNbZmllbGRfaWRdKTtcclxuICBpZiAoSlNPTlZhbCA9PSBcIltdXCIpXHJcbiAgICBKU09OVmFsID0gXCJcIjtcclxuICBvYmplY3QuZm9ybTIudmFsdWVbZmllbGRfaWRdID0gSlNPTlZhbDtcclxuICBvYmplY3QuZm9ybTIucGF0Y2hWYWx1ZSh7IFtmaWVsZF9pZF06IEpTT05WYWwgfSk7XHJcbiAgaWYgKHR5cGVvZiBvYmplY3QuYXR0X2ltZ19zYXZlRm9ybUNvbXBsZXRlZCAhPSBcInVuZGVmaW5lZFwiKSB7XHJcbiAgICBsZXQgTmV3VmFsOmFueSA9IFtdO1xyXG4gICAgTmV3VmFsLnB1c2goZmllbGRfaWQpO1xyXG4gICAgb2JqZWN0LmF0dF9pbWdfc2F2ZUZvcm1Db21wbGV0ZWQuYXBwbHkob2JqZWN0LCBOZXdWYWwpO1xyXG4gIH1cclxufVxyXG5wdWJsaWMgYXR0X2ltZ19zYXZlR3JpZENvbXBsZXRlZEhhbmRsZXIodmFsdWU6YW55LG9iamVjdDphbnkpIHtcclxuICBcclxuICAvL2NvbnNvbGUubG9nKFwiYXR0X2ltZ19zYXZlR3JpZENvbXBsZXRlZEhhbmRsZXI6dmFsdWVcIiwgdmFsdWUpO1xyXG4gIGxldCBmaWVsZF9pZCA9IHZhbHVlLmZpZWxkX2lkO1xyXG4gIG9iamVjdC5teUZpbGVzW2ZpZWxkX2lkXSA9IHZhbHVlLm15RmlsZXM7XHJcbiAgb2JqZWN0LmZpbGVzRGVsZXRlZFtmaWVsZF9pZF0gPSB2YWx1ZS5maWxlc0RlbGV0ZWQ7XHJcbiAgLy9jb25zb2xlLmxvZyhcImNoZWNraW5nOjI6b2JqZWN0Lm15RmlsZXNbZmllbGRfaWRdOlwiLCBKU09OLnN0cmluZ2lmeShvYmplY3QubXlGaWxlc1tmaWVsZF9pZF0pIClcclxuICBsZXQgSlNPTlZhbCAgPSBKU09OLnN0cmluZ2lmeShvYmplY3QubXlGaWxlc1tmaWVsZF9pZF0pO1xyXG4gIGlmIChKU09OVmFsID09IFwiW11cIilcclxuICAgIEpTT05WYWwgPSBcIlwiO1xyXG4gIG9iamVjdC5mb3JtR3JvdXAucGF0Y2hWYWx1ZSh7IFtmaWVsZF9pZF06IEpTT05WYWwgfSk7XHJcbiAgb2JqZWN0LmZvcm1Hcm91cC5tYXJrQXNEaXJ0eSgpO1xyXG4gIC8vY29uc29sZS5sb2coXCJhdHRfaW1nX3NhdmVHcmlkQ29tcGxldGVkSGFuZGxlcjpvYmplY3QuZm9ybUdyb3VwLnZhbHVlXCIsIG9iamVjdC5mb3JtR3JvdXAudmFsdWUpO1xyXG4gIG9iamVjdC51cGxvYWRpbWFnZT1mYWxzZTtcclxufVxyXG5wdWJsaWMgYXN5bmMgYXR0X2ltZ19ncmlkX29wZW5VcGxvYWRpbWFnZShmaWVsZF9pZDphbnksb2JqZWN0OmFueSkge1xyXG4gIGlmICghb2JqZWN0LmNvbXBvbmVudENvbmZpZy5lbmFibGVkKSByZXR1cm47XHJcbiAgYXdhaXQgb2JqZWN0LnN0YXJTZXJ2aWNlcy5zbGVlcCgzMDApO1xyXG4gIC8vY29uc29sZS5sb2coXCJhdHRfaW1nX2dyaWRfb3BlblVwbG9hZGltYWdlOm9iamVjdC5mb3JtR3JvdXA6XCIsIG9iamVjdC5mb3JtR3JvdXApXHJcbiAgb2JqZWN0LnVwbG9hZGltYWdlID0gdHJ1ZTtcclxuICBpZiAodHlwZW9mIG9iamVjdC5mb3JtR3JvdXAgIT0gXCJ1bmRlZmluZWRcIikge1xyXG4gICAgb2JqZWN0Lm15RmlsZXNbZmllbGRfaWRdID1bXTtcclxuICAgIG9iamVjdC5zdGFyU2VydmljZXMuYXR0X2ltZ19wb3B1bGF0ZUFycnMob2JqZWN0LmZvcm1Hcm91cC52YWx1ZSxvYmplY3QpO1xyXG4gICAgLy9jb25zb2xlLmxvZyhcIm9wZW5VcGxvYWRpbWFnZTpmaWVsZF9pZDpcIiwgZmllbGRfaWQsIG9iamVjdC5teUZpbGVzLCBvYmplY3QubXlGaWxlc1tmaWVsZF9pZF0pXHJcbiAgICBsZXQgbXlGaWxlcyA9IFtdO1xyXG4gICAgaWYgKHR5cGVvZiBvYmplY3QubXlGaWxlc1tmaWVsZF9pZF0gIT0gXCJ1bmRlZmluZWRcIikge1xyXG4gICAgICBteUZpbGVzID0gb2JqZWN0Lm15RmlsZXNbZmllbGRfaWRdO1xyXG4gICAgfVxyXG4gICAgbGV0IGZpbGVzRGVsZXRlZCA9IFtdO1xyXG4gICAgaWYgKHR5cGVvZiBvYmplY3QuZmlsZXNEZWxldGVkW2ZpZWxkX2lkXSAhPSBcInVuZGVmaW5lZFwiKSB7XHJcbiAgICAgIGZpbGVzRGVsZXRlZCA9IG9iamVjdC5maWxlc0RlbGV0ZWRbZmllbGRfaWRdO1xyXG4gICAgfVxyXG4gIGxldCBoaWRlT3RoZXJzID0gZmFsc2U7XHJcbiAgaWYgKHR5cGVvZiBvYmplY3QuZGlzYWJsZVVwbG9hZCAhPSBcInVuZGVmaW5lZFwiKSB7XHJcbiAgICBoaWRlT3RoZXJzID0gb2JqZWN0LmRpc2FibGVVcGxvYWQ7XHJcbiAgfVxyXG4gICAgbGV0IGltYWdlSUQgPSBmaWVsZF9pZDtcclxuICAgIHZhciBtYXN0ZXJQYXJhbXMgPSB7XHJcbiAgICAgIFwiYWN0aW9uXCI6IFwidXBsb2FkXCIsXHJcbiAgICAgIFwiaW1hZ2VJRFwiOiBpbWFnZUlELFxyXG4gICAgICBcIm15RmlsZXNcIjogbXlGaWxlcyxcclxuICAgICAgXCJmaWxlc0RlbGV0ZWRcIjogZmlsZXNEZWxldGVkLFxyXG4gICAgICAgXCJoaWRlT3RoZXJzXCIgOiBoaWRlT3RoZXJzXHJcbiAgICB9XHJcblxyXG4gICAgb2JqZWN0LkRTUF9VUExPQURDb25maWcgPSBuZXcgY29tcG9uZW50Q29uZmlnRGVmKClcclxuICAgIG9iamVjdC5EU1BfVVBMT0FEQ29uZmlnLm1hc3RlclBhcmFtcyA9IG1hc3RlclBhcmFtc1xyXG4gIH1cclxufVxyXG5wdWJsaWMgYXN5bmMgYXR0X3dlYmNhbV9ncmlkX29wZW5VcGxvYWRpbWFnZShmaWVsZF9pZDphbnksb2JqZWN0OmFueSkge1xyXG4gIGlmICghb2JqZWN0LmNvbXBvbmVudENvbmZpZy5lbmFibGVkKSByZXR1cm47XHJcbiAgYXdhaXQgb2JqZWN0LnN0YXJTZXJ2aWNlcy5zbGVlcCgzMDApO1xyXG4gIC8vY29uc29sZS5sb2coXCJhdHRfd2ViY2FtX2dyaWRfb3BlblVwbG9hZGltYWdlOm9iamVjdC5mb3JtR3JvdXA6XCIsIG9iamVjdC5mb3JtR3JvdXApXHJcbiAgb2JqZWN0LnVwbG9hZGltYWdlID0gdHJ1ZTtcclxuICBpZiAodHlwZW9mIG9iamVjdC5mb3JtR3JvdXAgIT0gXCJ1bmRlZmluZWRcIikge1xyXG4gICAgb2JqZWN0Lm15RmlsZXNbZmllbGRfaWRdID1bXTtcclxuICAgIG9iamVjdC5zdGFyU2VydmljZXMuYXR0X2ltZ19wb3B1bGF0ZUFycnMob2JqZWN0LmZvcm1Hcm91cC52YWx1ZSxvYmplY3QpO1xyXG4gICAgLy9jb25zb2xlLmxvZyhcIm9wZW5VcGxvYWRpbWFnZTpmaWVsZF9pZDpcIiwgZmllbGRfaWQsIG9iamVjdC5teUZpbGVzLCBvYmplY3QubXlGaWxlc1tmaWVsZF9pZF0pXHJcbiAgICBsZXQgbXlGaWxlcyA9IFtdO1xyXG4gICAgaWYgKHR5cGVvZiBvYmplY3QubXlGaWxlc1tmaWVsZF9pZF0gIT0gXCJ1bmRlZmluZWRcIikge1xyXG4gICAgICBteUZpbGVzID0gb2JqZWN0Lm15RmlsZXNbZmllbGRfaWRdO1xyXG4gICAgfVxyXG4gICAgbGV0IGZpbGVzRGVsZXRlZCA9IFtdO1xyXG4gICAgaWYgKHR5cGVvZiBvYmplY3QuZmlsZXNEZWxldGVkW2ZpZWxkX2lkXSAhPSBcInVuZGVmaW5lZFwiKSB7XHJcbiAgICAgIGZpbGVzRGVsZXRlZCA9IG9iamVjdC5maWxlc0RlbGV0ZWRbZmllbGRfaWRdO1xyXG4gICAgfVxyXG5cclxuICAgIGxldCBpbWFnZUlEID0gZmllbGRfaWQ7XHJcbiAgICB2YXIgbWFzdGVyUGFyYW1zID0ge1xyXG4gICAgICBcImFjdGlvblwiOiBcInVwbG9hZFwiLFxyXG4gICAgICBcImltYWdlSURcIjogaW1hZ2VJRCxcclxuICAgICAgXCJteUZpbGVzXCI6IG15RmlsZXMsXHJcbiAgICAgIFwiZmlsZXNEZWxldGVkXCI6IGZpbGVzRGVsZXRlZFxyXG4gICAgfVxyXG5cclxuICAgIG9iamVjdC5EU1BfV0VCQ0FNQ29uZmlnID0gbmV3IGNvbXBvbmVudENvbmZpZ0RlZigpXHJcbiAgICBvYmplY3QuRFNQX1dFQkNBTUNvbmZpZy5tYXN0ZXJQYXJhbXMgPSBtYXN0ZXJQYXJhbXNcclxuICB9XHJcbn1cclxucHVibGljIGFkZE5ld0NvZGUob2JqZWN0OmFueSwgQ09ERU5BTUU6YW55KTogdm9pZCB7XHJcbiAgb2JqZWN0LmdyaWRfc29tX3RhYnNfY29kZXMgPSBuZXcgdGFic0NvZGVzKCk7XHJcbiAgb2JqZWN0LmdyaWRfc29tX3RhYnNfY29kZXNbJ0NPREVOQU1FJ10gPSBDT0RFTkFNRTsgLy8gZm9yIHJldHJpZXZlIGRhdGFcclxuICBcclxuICBcclxuICBvYmplY3QuU09NX1RBQlNfQ09ERVNDb25maWcgPSAgbmV3IGNvbXBvbmVudENvbmZpZ0RlZigpO1xyXG4gIGxldCBtYXN0ZXJQYXJhbXMgPSB7XHJcbiAgICBhY3Rpb246IFwiQUREXCIsXHJcbiAgICBDT0RFTkFNRTpDT0RFTkFNRSxcclxuICAgIENPREU6b2JqZWN0LmZpbHRlckNvZGUsXHJcbiAgICBDT0RFVEVYVF9MQU5HIDogb2JqZWN0LmZpbHRlckNvZGVcclxuICB9XHJcbiAgb2JqZWN0LlNPTV9UQUJTX0NPREVTQ29uZmlnLm1hc3RlclBhcmFtcyA9IG1hc3RlclBhcmFtczsgLy8gRm9yIGFkZCBuZXcgcmVjb3JkXHJcbiAgb2JqZWN0LnNob3dDb2RlRGV0YWlscz10cnVlO1xyXG59XHJcblxyXG5wdWJsaWMgc2V0SWRPcmRlcihvYmplY3QsaWRGaWVsZCwgb3JkZXJGaWVsZCl7XHJcbiAgbGV0IElEID0gMTtcclxuICBsZXQgT1JERVIgPSAxO1xyXG5cclxuICBsZXQgR3JpZERhdGE6YW55ID0gb2JqZWN0LmdyaWQuZGF0YTtcclxuICBpZiAodHlwZW9mIEdyaWREYXRhLmRhdGEgIT09IFwidW5kZWZpbmVkXCIpe1xyXG4gICAgZm9yIChsZXQgaT0wOyBpIDwgR3JpZERhdGEuZGF0YS5sZW5ndGggOyBpKyspe1xyXG4gICAgICBpZiAoR3JpZERhdGEuZGF0YVtpXVtpZEZpZWxkXSA+PSBJRClcclxuICAgICAgICBJRCA9IHBhcnNlSW50KCBHcmlkRGF0YS5kYXRhW2ldW2lkRmllbGRdKSArIDE7XHJcbiAgICAgIGlmIChHcmlkRGF0YS5kYXRhW2ldW29yZGVyRmllbGRdID49IE9SREVSKVxyXG4gICAgICAgIE9SREVSID0gcGFyc2VJbnQoR3JpZERhdGEuZGF0YVtpXVtvcmRlckZpZWxkXSApICsgMTtcclxuICAgIH1cclxuICB9XHJcbiAgbGV0IHZhbHVlcyA9IHtcclxuICAgIFtpZEZpZWxkXTogSUQsXHJcbiAgICBbb3JkZXJGaWVsZF06IE9SREVSXHJcbiAgfVxyXG4gIGNvbnNvbGUubG9nKFwic2V0SW5pdGlhbFZhbHVlczp2YWx1ZXM6XCIsdmFsdWVzIClcclxuICBvYmplY3QuZm9ybUdyb3VwLnBhdGNoVmFsdWUodmFsdWVzKVxyXG59XHJcbnB1YmxpYyByb3dSZW9yZGVyKG9iamVjdCwgb3JkZXJGaWVsZCwgZSl7XHJcbiAgaWYgKG9iamVjdC5wYXJhbUNvbmZpZy5ERUJVR19GTEFHKSBjb25zb2xlLmxvZyAoXCJyb3dSZW9yZGVyOlwiLCBlKTtcclxuICBpZiAob2JqZWN0LnBhcmFtQ29uZmlnLkRFQlVHX0ZMQUcpIGNvbnNvbGUubG9nIChcInJvd1Jlb3JkZXI6XCIsIGUuZHJhZ2dlZFJvd3NbMF0ucm93SW5kZXgpXHJcbiAgICBpZiAob2JqZWN0LnBhcmFtQ29uZmlnLkRFQlVHX0ZMQUcpIGNvbnNvbGUubG9nIChcInJvd1Jlb3JkZXI6XCIsIGUuZHJvcFBvc2l0aW9uKTtcclxuICBpZiAob2JqZWN0LnBhcmFtQ29uZmlnLkRFQlVHX0ZMQUcpIGNvbnNvbGUubG9nIChcInJvd1Jlb3JkZXI6XCIsIGUuZHJvcFRhcmdldFJvdy5yb3dJbmRleClcclxuICBsZXQgZGF0YUl0ZW0gPSBlLmRyYWdnZWRSb3dzWzBdLmRhdGFJdGVtO1xyXG4gIGxldCBHcmlkRGF0YTtcclxuICBHcmlkRGF0YSA9ICBvYmplY3QuZ3JpZC5kYXRhO1xyXG5cclxuICBpZiAoZS5kcm9wUG9zaXRpb24gPT0gXCJhZnRlclwiKXtcclxuICAgIEdyaWREYXRhLmRhdGEuc3BsaWNlKGUuZHJvcFRhcmdldFJvdy5yb3dJbmRleCsxLCAwLCBkYXRhSXRlbSk7XHJcbiAgICAvL1JlbW92ZSBkcmFnZ2VkUm93c1xyXG4gICAgR3JpZERhdGEuZGF0YSA9IEdyaWREYXRhLmRhdGEuZmlsdGVyKGZ1bmN0aW9uIChkYXRhSXRlbSwgaW5kZXgpIHtcclxuICAgICAgcmV0dXJuIGluZGV4ICE9PSBlLmRyYWdnZWRSb3dzWzBdLnJvd0luZGV4O1xyXG4gICAgfSk7XHJcbiAgfVxyXG4gIGVsc2VcclxuICBpZiAoZS5kcm9wUG9zaXRpb24gPT0gXCJiZWZvcmVcIil7XHJcbiAgICAgLy9SZW1vdmUgZHJhZ2dlZFJvd3NcclxuICAgIEdyaWREYXRhLmRhdGEgPSBHcmlkRGF0YS5kYXRhLmZpbHRlcihmdW5jdGlvbiAoZGF0YUl0ZW0sIGluZGV4KSB7XHJcbiAgICAgIHJldHVybiBpbmRleCAhPT0gZS5kcmFnZ2VkUm93c1swXS5yb3dJbmRleDtcclxuICAgIH0pO1xyXG4gICAgR3JpZERhdGEuZGF0YS5zcGxpY2UoZS5kcm9wVGFyZ2V0Um93LnJvd0luZGV4LCAwLCBkYXRhSXRlbSk7XHJcbiAgfVxyXG4gLy93cml0ZSBvcmRlciBmaWVsZFxyXG4gaWYgKG9iamVjdC5wYXJhbUNvbmZpZy5ERUJVR19GTEFHKSBjb25zb2xlLmxvZyhcInJvd1Jlb3JkZXI6R3JpZERhdGEuZGF0YTpcIixHcmlkRGF0YS5kYXRhKTtcclxuIGZvciAobGV0IGk9MDsgaSA8IEdyaWREYXRhLmRhdGEubGVuZ3RoO2krKyl7XHJcbiAgIEdyaWREYXRhLmRhdGFbaV1bb3JkZXJGaWVsZF09IGkgKyAxO1xyXG4gICBHcmlkRGF0YS5kYXRhW2ldLl9RVUVSWSA9IG9iamVjdC51cGRhdGVDTUQ7XHJcbiB9XHJcbiBvYmplY3Quc2F2ZUNoYW5nZXMob2JqZWN0LmdyaWQpO1xyXG59XHJcblxyXG5wdWJsaWMgaGFuZGxlRmlsdGVyQ29kZShvYmplY3Q6YW55LENPREU6YW55KSB7XHJcbiAgaWYgKG9iamVjdC5zdGFyU2VydmljZXMuc2Vzc2lvblBhcmFtcy5VU0VSX0lORk8uR1JPVVBOQU1FID09IFwiU1lTQURNXCIpe1xyXG4gICAgb2JqZWN0LmZpbHRlckNvZGUgPSBDT0RFO1xyXG4gIH1cclxuIH1cclxuIHJlbW92ZU5vblZhbGlkQ29sdW1ucyhjb21wLEluaXRpYWxWYWx1ZXMpe1xyXG4gICAgIGNvbnNvbGUubG9nKFwicmVtb3ZlTm9uVmFsaWRHcmlkQ29sdW1uczpcIiwgY29tcCwgSW5pdGlhbFZhbHVlcylcclxuICAgICBsZXQgS2V5cyA9IE9iamVjdC5rZXlzKGNvbXApO1xyXG4gXHJcbiAgICAgZm9yIChsZXQgaiA9MDsgajwgS2V5cy5sZW5ndGg7aisrKXtcclxuICAgICAgIGxldCBmaWVsZCA9IEtleXNbal07XHJcbiAgICAgICBsZXQgZXhpc3RzID0gSW5pdGlhbFZhbHVlc1tmaWVsZF1cclxuICAgICAgIGNvbnNvbGUubG9nKFwicmVtb3ZlTm9uVmFsaWRHcmlkQ29sdW1uczpcIiwgZmllbGQsIGV4aXN0cylcclxuICAgICAgIGlmICh0eXBlb2YgZXhpc3RzID09IFwidW5kZWZpbmVkXCIpe1xyXG4gICAgICAgICBkZWxldGUgY29tcFtmaWVsZF07XHJcbiAgICAgICB9XHJcbiAgICAgfVxyXG4gICB9XHJcbiBwdWJsaWMgZm9ybWF0dGhpc0RhdGUoZGF0ZTEsIERhdGVGb3JtYXQsZGF0ZUxvY2FsZSlcclxue1xyXG4gIGlmICgoZGF0ZTEgIT0gXCJcIikgJiYgKHR5cGVvZiBkYXRlMSAhPSBcInVuZGVmaW5lZFwiKSlcclxuICAgIHJldHVybiAoZm9ybWF0RGF0ZShkYXRlMSwgRGF0ZUZvcm1hdCxkYXRlTG9jYWxlKSk7XHJcbiAgZWxzZVxyXG4gICAgcmV0dXJuIG51bGw7XHJcbn1cclxuIHB1YmxpYyBlbmNyeXB0U2VjcmV0S2V5PVwiQXBwR2VuQFN0YXIxMjM0XCI7XHJcbiBlbmNyeXB0RGF0YShkYXRhKSB7XHJcblxyXG4gdHJ5IHtcclxuICAgcmV0dXJuIENyeXB0b0pTLkFFUy5lbmNyeXB0KEpTT04uc3RyaW5naWZ5KGRhdGEpLCB0aGlzLmVuY3J5cHRTZWNyZXRLZXkpLnRvU3RyaW5nKCk7XHJcbiB9IGNhdGNoIChlKSB7XHJcbiAgIGNvbnNvbGUubG9nKGUpO1xyXG4gfVxyXG59XHJcbnB1YmxpYyBkZWNyeXB0RGF0YShkYXRhKSB7XHJcblxyXG4gdHJ5IHtcclxuICAgY29uc3QgYnl0ZXMgPSBDcnlwdG9KUy5BRVMuZGVjcnlwdChkYXRhLCB0aGlzLmVuY3J5cHRTZWNyZXRLZXkpO1xyXG4gICBpZiAoYnl0ZXMudG9TdHJpbmcoKSkge1xyXG4gICAgIHJldHVybiBKU09OLnBhcnNlKGJ5dGVzLnRvU3RyaW5nKENyeXB0b0pTLmVuYy5VdGY4KSk7XHJcbiAgIH1cclxuICAgcmV0dXJuIGRhdGE7XHJcbiB9IGNhdGNoIChlKSB7XHJcbiAgIGNvbnNvbGUubG9nKGUpO1xyXG4gfVxyXG59XHJcbnB1YmxpYyAgcGFyc2VDb29raWVzID0gKGNvb2tpZVN0cikgPT5cclxuICBjb29raWVTdHIuc3BsaXQoXCI7XCIpXHJcbiAgICAubWFwKHN0ciA9PiBzdHIudHJpbSgpLnNwbGl0KC89KC4rKS8pKVxyXG4gICAgLnJlZHVjZSgoYWNjLCBjdXJyKSA9PiB7XHJcbiAgICAgICAgYWNjW2N1cnJbMF1dID0gY3VyclsxXTtcclxuICAgICAgICByZXR1cm4gYWNjO1xyXG4gICAgfSwge30pXHJcbnB1YmxpYyBkYXRhRXhpdHMob2JqZWN0KSB7XHJcbiAgICBsZXQgc3RhdHVzID0gZmFsc2U7XHJcbiAgICBpZiAodHlwZW9mIChvYmplY3QuZXhlY3V0ZVF1ZXJ5cmVzdWx0KSAhPSBcInVuZGVmaW5lZFwiKSB7XHJcbiAgICAgIGlmIChvYmplY3QuZXhlY3V0ZVF1ZXJ5cmVzdWx0LmRhdGEpIHtcclxuICAgICAgICBzdGF0dXMgPSB0cnVlO1xyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiBzdGF0dXM7XHJcblxyXG4gICAgfVxyXG4gIH1cclxucHVibGljIGhpZGVOb1ZhbGlkTGljZW5zZSgpXHJcbiB7XHJcbiAgICAgY29uc3QgY29sbGVjdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiZGl2XCIpOyBcclxuICAgICAvL2NvbnNvbGUubG9nIChcImNoZWNraW5nOmNvbGxlY3Rpb246XCIsY29sbGVjdGlvbik7XHJcbiAgICAgZm9yIChsZXQgaT0wO2k8Y29sbGVjdGlvbi5sZW5ndGg7aSsrKXtcclxuICAgICAgIGxldCBpbm5lckhUTUw6YW55ID0gY29sbGVjdGlvbltpXS5pbm5lckhUTUw7XHJcbiAgICAgICAvL2NvbnNvbGUubG9nIChcImNoZWNraW5nOmlubmVySFRNTDpcIixpbm5lckhUTUwpO1xyXG4gICAgICAgLy9sZXQgcmVzdWx0ID0gaW5uZXJIVE1MLmluY2x1ZGVzKFwibmctcmVmbGVjdC1uZy1zdHlsZVwiKTtcclxuICAgICAgIC8vbGV0IHJlc3VsdCA9IGlubmVySFRNTC5pbmNsdWRlcyhcImRpc3BsYXk6IGZsZXg7XCIpO1xyXG4gICAgICAgbGV0IHJlc3VsdCA9IGlubmVySFRNTC5pbmNsdWRlcyhcIkEgbGljZW5zZSBrZXkgaXMgcmVxdWlyZWRcIik7XHJcbiAgICAgICAvL2NvbnNvbGUubG9nIChcImNoZWNraW5nOnJlc3VsdDpcIixpLCByZXN1bHQpO1xyXG4gICAgICAgaWYgKHJlc3VsdCl7XHJcbiAgICAgICAgIHJlc3VsdCA9IGlubmVySFRNTC5pbmNsdWRlcyhcIkxpY2Vuc2Uga2V5IG1pc3NpbmdcIik7XHJcbiAgICAgICAgIGlmIChyZXN1bHQpe1xyXG4gICAgICAgICAgIC8vY29uc29sZS5sb2cgKFwiY2hlY2tpbmc6aW5uZXJIVE1MOlwiLHJlc3VsdCxpbm5lckhUTUwpO1xyXG4gICAgICAgICAgIGNvbGxlY3Rpb25baV0uc3R5bGUuc2V0UHJvcGVydHkoJ2Rpc3BsYXknLCAnbm9uZScpO1xyXG4gICAgICAgICAgIH1cclxuIFxyXG4gICAgICAgfVxyXG4gICAgICAgXHJcbiAgICAgfVxyXG4gICAgIC8vY29uc29sZS5sb2cgKFwiY29sbGVjdGlvbjpcIiwgY29sbGVjdGlvbi5sZW5ndGgsIGNvbGxlY3Rpb25bMzVdKVxyXG4gfVxyXG4gXHJcbiAgYXN5bmMgIHNob3dNdWx0aVN0ZXBGb3JtKG9iamVjdCwgdGVtcGxhdGVOYW1lKSB7XHJcbiAgICAgbGV0IEJvZHkgPSBbXTtcclxuICAgICBsZXQgdGVtcGxhdGVJbmZvOmFueTtcclxuICAgICB2YXIgbmV3VmFsOmFueSA9IHsgXCJfUVVFUllcIjogXCJHRVRfRFNQX1RFTVBMQVRFXCIsIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiVEVNUExBVEVfTkFNRVwiOiB0ZW1wbGF0ZU5hbWUgfTtcclxuICAgICBCb2R5LnB1c2gobmV3VmFsKTtcclxuICAgICBuZXdWYWwgPSB7IFwiX1FVRVJZXCI6IFwiR0VUX0RTUF9URU1QTEFURV9ERVRBSUxcIiwgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJURU1QTEFURV9OQU1FXCI6IHRlbXBsYXRlTmFtZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiU0VRVUVOQ0VfTkFNRVwiOiBcIiVcIn07XHJcbiAgICAgIEJvZHkucHVzaChuZXdWYWwpO1xyXG4gICAgICBsZXQgZGF0YSA9IGF3YWl0IHRoaXMuZXhlY1NRTEJvZHkodGhpcywgQm9keSwgXCJcIik7XHJcbiAgICAgaWYgKHR5cGVvZiBkYXRhICE9IFwidW5kZWZpbmVkXCIgJiYgZGF0YVswXS5kYXRhLmxlbmd0aCA+IDApIHtcclxuICAgICAgIHRoaXMuQm9keSA9IFtdO1xyXG4gICAgICAgdGVtcGxhdGVJbmZvID0gZGF0YVswXS5kYXRhWzBdO1xyXG4gICAgICAgbGV0IHRlbXBsYXRlRGV0YWlsID0gZGF0YVsxXS5kYXRhWzBdO1xyXG4gXHJcblxyXG4gICAgICAgLy9pZiAoKHRoaXMuYWRkRm9ybS52YWx1ZS5PUkRFUl9GSUVMRFMgPT0gXCJcIikgfHwgKHRoaXMuYWRkRm9ybS52YWx1ZS5PUkRFUl9GSUVMRFMgPT0gbnVsbCkpIHtcclxuICAgICAgIC8vICB0aGlzLmFkZEZvcm0udmFsdWUuT1JERVJfRklFTERTID0gXCJ7fVwiO1xyXG4gICAgICAgLy99XHJcbiBcclxuICAgICAgIFxyXG4gICAgICAgdmFyIGZvcm1QYWdlc05vID0gdGVtcGxhdGVEZXRhaWwuRk9STV9QQUdFU19OTztcclxuICAgICAgIG9iamVjdC5mb3JtTWFzdGVyUGFyYW1zID0ge1xyXG4gICAgICAgICBcImZvcm1OYW1lXCI6IHRlbXBsYXRlSW5mby5GT1JNX05BTUUsXHJcbiAgICAgICAgIFwiZm9ybVBhZ2VzTm9cIjogZm9ybVBhZ2VzTm8sXHJcbiAgICAgICAgIC8vXCJvcmRlckZpZWxkc1wiOiB0aGlzLmFkZEZvcm0udmFsdWUuT1JERVJfRklFTERTLFxyXG4gICAgICAgICBcIm9yZGVyRmllbGRzXCI6IFwie31cIixcclxuICAgICAgICAgLy9cImFkZEZvcm1cIjogdGhpcy5hZGRGb3JtLnZhbHVlLFxyXG4gICAgICAgICBcImFkZEZvcm1cIjp0ZW1wbGF0ZUluZm8sXHJcbiAgICAgICAgIFwiY2FsbGluZ0Zvcm1cIjogXCJQUlZPUkRFUkFEXCIsXHJcbiAgICAgICB9O1xyXG4gXHJcbiAgICAgICBjb25zb2xlLmxvZyhcInRlbXBsYXRlSW5mbzpcIiwgdGVtcGxhdGVJbmZvLCBcImBvYmpldGAuZm9ybU1hc3RlclBhcmFtczpcIixvYmplY3QuZm9ybU1hc3RlclBhcmFtcylcclxuXHJcbiAgICAgICAgIG9iamVjdC5zaG93Q2FsbFNjcmVlbiA9IHRydWU7XHJcbiAgICAgICAgIFxyXG4gICAgIH1cclxuICAgIG9iamVjdC50ZW1wbGF0ZUluZm8gPSB0ZW1wbGF0ZUluZm87XHJcbiAgICByZXR1cm4gdGVtcGxhdGVJbmZvO1xyXG4gICB9XHJcbiAgIGFzeW5jICBjYWxsU2NyZWVuKG9iamVjdCwgdGVtcGxhdGVJbmZvKXtcclxuICAgICAgICBjb25zb2xlLmxvZyhcImNhbGxTY3JlZW4gLSB0ZW1wbGF0ZUluZm86XCIsIHRlbXBsYXRlSW5mbywgXCJ0aGlzLmZvcm1NYXN0ZXJQYXJhbXM6XCIsb2JqZWN0LmZvcm1NYXN0ZXJQYXJhbXMpXHJcbiAgICAgICAgICBsZXQgQm9keSA9IFtdO1xyXG4gICAgICAgICAgdmFyIG5ld1ZhbDphbnkgPSB7IFwiX1FVRVJZXCI6IFwiR0VUX01FTlVTX1FVRVJZXCIsIFxyXG4gICAgICAgICAgICAgXCJfV0hFUkVcIjogXCJDSE9JQ0UgID0gJ1wiICsgdGVtcGxhdGVJbmZvLkZPUk1fTkFNRSArIFwiJ1wiIH07XHJcbiAgICAgICAgICBCb2R5LnB1c2gobmV3VmFsKTtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKFwiY2FsbFNjcmVlbiAtIEJvZHk6XCIsIEJvZHkpXHJcbiAgICAgICAgICBsZXQgZGF0YSA9IGF3YWl0IHRoaXMuZXhlY1NRTEJvZHkodGhpcywgQm9keSwgXCJcIik7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhcImNhbGxTY3JlZW4gLSBkYXRhOlwiLCBkYXRhKVxyXG4gICAgICAgICAgaWYgKHR5cGVvZiBkYXRhICE9IFwidW5kZWZpbmVkXCIgJiYgZGF0YVswXS5kYXRhLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgdmFyIG1lbnUgPSBkYXRhWzBdLmRhdGFbMF07XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiY2FsbFNjcmVlbiAtIG1lbnU6XCIsIG1lbnUpXHJcbiAgICAgICAgICAgIGxldCBjb21wU2VsZWN0b3IgPSBtZW51LkZMRVhfRkxEMTtcclxuICAgICAgICAgICAgb2JqZWN0LmNoaWxkcmVuID0gW107XHJcbiAgICAgICAgICAgIG9iamVjdC5jaGlsZHJlbi5wdXNoKGNvbXBTZWxlY3Rvcik7XHJcbiAgICAgICAgb2JqZWN0LmNvbW1vbkNhbGxTdGFyTm90aWZ5KG9iamVjdC5mb3JtTWFzdGVyUGFyYW1zKTtcclxuICAgICAgfVxyXG4gICAgICBvYmplY3Qucm91dGVyLm5hdmlnYXRlKFsnLycgK3RlbXBsYXRlSW5mby5GT1JNX05BTUVdLCBcclxuICAgICAgICB7IHNraXBMb2NhdGlvbkNoYW5nZTogdHJ1ZSwgcmVwbGFjZVVybDogZmFsc2UsIHByZXNlcnZlRnJhZ21lbnQ6IHRydWUgfSk7XHJcbiAgfVxyXG4gICAgIHB1YmxpYyBnZXRJbnZhbGlkQ29udHJvbHMob2JqZWN0KSB7XHJcbiAgICAvL2NvbnNvbGUubG9nIChcImdldEludmFsaWRDb250cm9sczpcIiwgICBvYmplY3QuZm9ybS5pbnZhbGlkLCBvYmplY3QuZm9ybS5jb250cm9scylcclxuICAgIGNvbnN0IGludmFsaWQgPSBbXTtcclxuICAgIGNvbnN0IGNvbnRyb2xzID0gb2JqZWN0LmZvcm0uY29udHJvbHM7XHJcbiAgICBmb3IgKGxldCBuYW1lIGluIGNvbnRyb2xzKSB7XHJcbiAgICAgICAgaWYgKGNvbnRyb2xzW25hbWVdLmludmFsaWQpIHtcclxuICAgICAgICAgICBpZiAodHlwZW9mIG9iamVjdC5jb21wVGl0bGVNc2cgIT0gXCJ1bmRlZmluZWRcIil7XHJcbiAgICAgICAgICAgICAgbmFtZSA9IHRoaXMuZ2V0TkxTKFtdLG9iamVjdC5jb21wVGl0bGVNc2cgKyBcIi5cIiArIG5hbWUsbmFtZSlcclxuICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGludmFsaWQucHVzaChuYW1lKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgIFxyXG4gICAgIHRoaXMuc2hvd05vdGlmaWNhdGlvbihcImVycm9yXCIsIHRoaXMuZ2V0TkxTKFtpbnZhbGlkLnRvU3RyaW5nKCldLFxyXG4gICAgJ05PX1ZBTElEX0RBVEFfRk9SJywnTm8gdmFsaWQgZGF0YSBmb3IgOiAgIyMgJykpO1xyXG4gICAgbGV0IE1zZyA9IHRoaXMuZ2V0TkxTKFtpbnZhbGlkLnRvU3RyaW5nKCldLCAnTk9fVkFMSURfREFUQV9GT1InLCdObyB2YWxpZCBkYXRhIGZvciA6ICAjIyAnKTtcclxuICAgIFxyXG4gICAgdmFyIGRpYWxvZ1N0cnVjID0ge1xyXG4gICAgICBtc2c6IE1zZyxcclxuICAgICAgdGl0bGU6IFwiRXJyb3JcIixcclxuICAgICAgaW5mbzogbnVsbCxcclxuICAgICAgb2JqZWN0OiB0aGlzLFxyXG4gICAgICBhY3Rpb246IHRoaXMuT2tBY3Rpb25zLFxyXG4gICAgICBjYWxsYmFjazogbnVsbFxyXG4gICAgfTtcclxuICAgIHRoaXMuc2hvd0NvbmZpcm1hdGlvbihkaWFsb2dTdHJ1Yyk7XHJcbiAgICByZXR1cm4gaW52YWxpZDtcclxufVxyXG5jb252ZXJ0U3ZnVG9LZW5kb0ljb24ob2JqZWN0LCBzdmdDb250ZW50OiBzdHJpbmcsIGljb25OYW1lOiBzdHJpbmcsIGNvbHVtbikge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICAvLyBFeHRyYWN0IHZpZXdCb3hcclxuICAgICAgICBjb25zdCB2aWV3Qm94TWF0Y2ggPSBzdmdDb250ZW50Lm1hdGNoKC92aWV3Qm94PVwiKFteXCJdKylcIi8pO1xyXG4gICAgICAgIGNvbnN0IHZpZXdCb3ggPSB2aWV3Qm94TWF0Y2ggPyB2aWV3Qm94TWF0Y2hbMV0gOiAnMCAwIDI0IDI0JztcclxuXHJcbiAgICAgICAgLy8gUGFyc2Ugdmlld0JveCB2YWx1ZXNcclxuICAgICAgICBjb25zdCB2aWV3Qm94VmFsdWVzID0gdmlld0JveC5zcGxpdCgnICcpLm1hcChOdW1iZXIpO1xyXG4gICAgICAgIGNvbnN0IFttaW5YLCBtaW5ZLCB2aWV3Qm94V2lkdGgsIHZpZXdCb3hIZWlnaHRdID0gdmlld0JveFZhbHVlcztcclxuXHJcbiAgICAgICAgLy8gRXh0cmFjdCB3aWR0aCBhbmQgaGVpZ2h0IGlmIHNwZWNpZmllZFxyXG4gICAgICAgIGNvbnN0IHdpZHRoTWF0Y2ggPSBzdmdDb250ZW50Lm1hdGNoKC93aWR0aD1cIihbXlwiXSspXCIvKTtcclxuICAgICAgICBjb25zdCBoZWlnaHRNYXRjaCA9IHN2Z0NvbnRlbnQubWF0Y2goL2hlaWdodD1cIihbXlwiXSspXCIvKTtcclxuICAgICAgICBjb25zdCBzdmdXaWR0aCA9IHdpZHRoTWF0Y2ggPyBwYXJzZUZsb2F0KHdpZHRoTWF0Y2hbMV0pIDogdmlld0JveFdpZHRoO1xyXG4gICAgICAgIGNvbnN0IHN2Z0hlaWdodCA9IGhlaWdodE1hdGNoID8gcGFyc2VGbG9hdChoZWlnaHRNYXRjaFsxXSkgOiB2aWV3Qm94SGVpZ2h0O1xyXG5cclxuICAgICAgICAvLyBUYXJnZXQgc2l6ZSBmb3Igbm9ybWFsaXphdGlvbiAoMjR4MjQgaXMgY29tbW9uIGZvciBpY29ucylcclxuICAgICAgICBjb25zdCBUQVJHRVRfU0laRSA9IDI0O1xyXG5cclxuICAgICAgICAvLyBDYWxjdWxhdGUgc2NhbGUgdG8gZml0IHdpdGhpbiB0YXJnZXQgc2l6ZSB3aGlsZSBtYWludGFpbmluZyBhc3BlY3QgcmF0aW9cclxuICAgICAgICBjb25zdCBzY2FsZVggPSBUQVJHRVRfU0laRSAvIHZpZXdCb3hXaWR0aDtcclxuICAgICAgICBjb25zdCBzY2FsZVkgPSBUQVJHRVRfU0laRSAvIHZpZXdCb3hIZWlnaHQ7XHJcbiAgICAgICAgY29uc3Qgc2NhbGUgPSBNYXRoLm1pbihzY2FsZVgsIHNjYWxlWSk7IC8vIFVzZSBtaW4gdG8gZml0IHdpdGhpbiB0YXJnZXQgYm91bmRzXHJcblxyXG4gICAgICAgIC8vIENhbGN1bGF0ZSBvZmZzZXQgdG8gY2VudGVyIHRoZSBpY29uXHJcbiAgICAgICAgY29uc3Qgc2NhbGVkV2lkdGggPSB2aWV3Qm94V2lkdGggKiBzY2FsZTtcclxuICAgICAgICBjb25zdCBzY2FsZWRIZWlnaHQgPSB2aWV3Qm94SGVpZ2h0ICogc2NhbGU7XHJcbiAgICAgICAgY29uc3Qgb2Zmc2V0WCA9IChUQVJHRVRfU0laRSAtIHNjYWxlZFdpZHRoKSAvIDI7XHJcbiAgICAgICAgY29uc3Qgb2Zmc2V0WSA9IChUQVJHRVRfU0laRSAtIHNjYWxlZEhlaWdodCkgLyAyO1xyXG5cclxuICAgICAgICAvLyBFeHRyYWN0IGFsbCBwYXRocyB3aXRoIHRoZWlyIHN0eWxlcyBhbmQgYXR0cmlidXRlc1xyXG4gICAgICAgIGNvbnN0IHBhdGhSZWdleCA9IC88cGF0aFtePl0qPi9nO1xyXG4gICAgICAgIGxldCBtYXRjaDtcclxuICAgICAgICBsZXQgcGF0aHMgPSBbXTtcclxuICAgICAgICBsZXQgcGF0aENvdW50ID0gMDtcclxuXHJcbiAgICAgICAgd2hpbGUgKChtYXRjaCA9IHBhdGhSZWdleC5leGVjKHN2Z0NvbnRlbnQpKSAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgICBjb25zdCBwYXRoVGFnID0gbWF0Y2hbMF07XHJcbiAgICAgICAgICAgIHBhdGhDb3VudCsrO1xyXG5cclxuICAgICAgICAgICAgLy8gRXh0cmFjdCBkIGF0dHJpYnV0ZSAocmVxdWlyZWQpXHJcbiAgICAgICAgICAgIGNvbnN0IGRNYXRjaCA9IHBhdGhUYWcubWF0Y2goL2Q9XCIoW15cIl0qKVwiLyk7XHJcbiAgICAgICAgICAgIGlmICghZE1hdGNoKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oYFBhdGggJHtwYXRoQ291bnR9IGhhcyBubyAnZCcgYXR0cmlidXRlLCBza2lwcGluZ2ApO1xyXG4gICAgICAgICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8vIFRyYW5zZm9ybSB0aGUgcGF0aCBkYXRhIHRvIHNjYWxlIGFuZCBjZW50ZXIgaXRcclxuICAgICAgICAgICAgY29uc3QgdHJhbnNmb3JtZWREID0gdGhpcy50cmFuc2Zvcm1QYXRoRGF0YShkTWF0Y2hbMV0sIHNjYWxlLCBvZmZzZXRYLCBvZmZzZXRZLCB2aWV3Qm94V2lkdGgsIHZpZXdCb3hIZWlnaHQpO1xyXG5cclxuICAgICAgICAgICAgLy8gSW5pdGlhbGl6ZSBhdHRyaWJ1dGVzXHJcbiAgICAgICAgICAgIGxldCBmaWxsID0gJyc7XHJcbiAgICAgICAgICAgIGxldCBzdHJva2UgPSAnJztcclxuICAgICAgICAgICAgbGV0IHN0cm9rZVdpZHRoID0gJyc7XHJcbiAgICAgICAgICAgIGxldCBmaWxsT3BhY2l0eSA9ICcnO1xyXG4gICAgICAgICAgICBsZXQgc3Ryb2tlT3BhY2l0eSA9ICcnO1xyXG4gICAgICAgICAgICBsZXQgb3BhY2l0eSA9ICcnO1xyXG5cclxuICAgICAgICAgICAgLy8gRXh0cmFjdCBmcm9tIHN0eWxlIGF0dHJpYnV0ZVxyXG4gICAgICAgICAgICBjb25zdCBzdHlsZU1hdGNoID0gcGF0aFRhZy5tYXRjaCgvc3R5bGU9XCIoW15cIl0qKVwiLyk7XHJcbiAgICAgICAgICAgIGlmIChzdHlsZU1hdGNoKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBzdHlsZSA9IHN0eWxlTWF0Y2hbMV07XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gRXh0cmFjdCBhbGwgc3R5bGUgcHJvcGVydGllc1xyXG4gICAgICAgICAgICAgICAgY29uc3QgZmlsbE1hdGNoID0gc3R5bGUubWF0Y2goL2ZpbGw6KFteO1wiXSspLyk7XHJcbiAgICAgICAgICAgICAgICBpZiAoZmlsbE1hdGNoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZmlsbFZhbHVlID0gZmlsbE1hdGNoWzFdLnRyaW0oKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoZmlsbFZhbHVlICYmIGZpbGxWYWx1ZSAhPT0gJycpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZmlsbCA9IGZpbGxWYWx1ZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgY29uc3Qgc3Ryb2tlTWF0Y2ggPSBzdHlsZS5tYXRjaCgvc3Ryb2tlOihbXjtcIl0rKS8pO1xyXG4gICAgICAgICAgICAgICAgaWYgKHN0cm9rZU1hdGNoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgc3Ryb2tlVmFsdWUgPSBzdHJva2VNYXRjaFsxXS50cmltKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHN0cm9rZVZhbHVlICYmIHN0cm9rZVZhbHVlICE9PSAnJykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHJva2UgPSBzdHJva2VWYWx1ZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgY29uc3Qgc3Ryb2tlV2lkdGhNYXRjaCA9IHN0eWxlLm1hdGNoKC9zdHJva2Utd2lkdGg6KFteO1wiXSspLyk7XHJcbiAgICAgICAgICAgICAgICBpZiAoc3Ryb2tlV2lkdGhNYXRjaCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IG9yaWdpbmFsU3Ryb2tlV2lkdGggPSBwYXJzZUZsb2F0KHN0cm9rZVdpZHRoTWF0Y2hbMV0udHJpbSgpKTtcclxuICAgICAgICAgICAgICAgICAgICAvLyBTY2FsZSBzdHJva2Ugd2lkdGggcHJvcG9ydGlvbmFsbHlcclxuICAgICAgICAgICAgICAgICAgICBpZiAoIWlzTmFOKG9yaWdpbmFsU3Ryb2tlV2lkdGgpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0cm9rZVdpZHRoID0gKG9yaWdpbmFsU3Ryb2tlV2lkdGggKiBzY2FsZSkudG9TdHJpbmcoKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgY29uc3QgZmlsbE9wYWNpdHlNYXRjaCA9IHN0eWxlLm1hdGNoKC9maWxsLW9wYWNpdHk6KFteO1wiXSspLyk7XHJcbiAgICAgICAgICAgICAgICBpZiAoZmlsbE9wYWNpdHlNYXRjaCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGZpbGxPcGFjaXR5ID0gZmlsbE9wYWNpdHlNYXRjaFsxXS50cmltKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgY29uc3Qgc3Ryb2tlT3BhY2l0eU1hdGNoID0gc3R5bGUubWF0Y2goL3N0cm9rZS1vcGFjaXR5OihbXjtcIl0rKS8pO1xyXG4gICAgICAgICAgICAgICAgaWYgKHN0cm9rZU9wYWNpdHlNYXRjaCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHN0cm9rZU9wYWNpdHkgPSBzdHJva2VPcGFjaXR5TWF0Y2hbMV0udHJpbSgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGNvbnN0IG9wYWNpdHlNYXRjaCA9IHN0eWxlLm1hdGNoKC9vcGFjaXR5OihbXjtcIl0rKS8pO1xyXG4gICAgICAgICAgICAgICAgaWYgKG9wYWNpdHlNYXRjaCkge1xyXG4gICAgICAgICAgICAgICAgICAgIG9wYWNpdHkgPSBvcGFjaXR5TWF0Y2hbMV0udHJpbSgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvLyBJZiBubyBzdHlsZSwgY2hlY2sgaW5kaXZpZHVhbCBhdHRyaWJ1dGVzXHJcbiAgICAgICAgICAgIGlmICghc3R5bGVNYXRjaCkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgZmlsbEF0dHIgPSBwYXRoVGFnLm1hdGNoKC9maWxsPVwiKFteXCJdKilcIi8pO1xyXG4gICAgICAgICAgICAgICAgaWYgKGZpbGxBdHRyICYmIGZpbGxBdHRyWzFdICE9PSAnJykge1xyXG4gICAgICAgICAgICAgICAgICAgIGZpbGwgPSBmaWxsQXR0clsxXTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBjb25zdCBzdHJva2VBdHRyID0gcGF0aFRhZy5tYXRjaCgvc3Ryb2tlPVwiKFteXCJdKilcIi8pO1xyXG4gICAgICAgICAgICAgICAgaWYgKHN0cm9rZUF0dHIgJiYgc3Ryb2tlQXR0clsxXSAhPT0gJycpIHtcclxuICAgICAgICAgICAgICAgICAgICBzdHJva2UgPSBzdHJva2VBdHRyWzFdO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGNvbnN0IHN0cm9rZVdpZHRoQXR0ciA9IHBhdGhUYWcubWF0Y2goL3N0cm9rZS13aWR0aD1cIihbXlwiXSopXCIvKTtcclxuICAgICAgICAgICAgICAgIGlmIChzdHJva2VXaWR0aEF0dHIpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBvcmlnaW5hbFN0cm9rZVdpZHRoID0gcGFyc2VGbG9hdChzdHJva2VXaWR0aEF0dHJbMV0pO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIFNjYWxlIHN0cm9rZSB3aWR0aCBwcm9wb3J0aW9uYWxseVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICghaXNOYU4ob3JpZ2luYWxTdHJva2VXaWR0aCkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3Ryb2tlV2lkdGggPSAob3JpZ2luYWxTdHJva2VXaWR0aCAqIHNjYWxlKS50b1N0cmluZygpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBjb25zdCBmaWxsT3BhY2l0eUF0dHIgPSBwYXRoVGFnLm1hdGNoKC9maWxsLW9wYWNpdHk9XCIoW15cIl0qKVwiLyk7XHJcbiAgICAgICAgICAgICAgICBpZiAoZmlsbE9wYWNpdHlBdHRyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZmlsbE9wYWNpdHkgPSBmaWxsT3BhY2l0eUF0dHJbMV07XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgY29uc3Qgc3Ryb2tlT3BhY2l0eUF0dHIgPSBwYXRoVGFnLm1hdGNoKC9zdHJva2Utb3BhY2l0eT1cIihbXlwiXSopXCIvKTtcclxuICAgICAgICAgICAgICAgIGlmIChzdHJva2VPcGFjaXR5QXR0cikge1xyXG4gICAgICAgICAgICAgICAgICAgIHN0cm9rZU9wYWNpdHkgPSBzdHJva2VPcGFjaXR5QXR0clsxXTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLy8gQnVpbGQgcGF0aCBlbGVtZW50IHdpdGggdHJhbnNmb3JtZWQgZCBhdHRyaWJ1dGVcclxuICAgICAgICAgICAgbGV0IHBhdGhFbGVtZW50ID0gYDxwYXRoIGQ9XCIke3RyYW5zZm9ybWVkRH1cImA7XHJcblxyXG4gICAgICAgICAgICAvLyBBZGQgZmlsbCBpZiBpdCBleGlzdHMgKGluY2x1ZGluZyAnbm9uZScpXHJcbiAgICAgICAgICAgIGlmIChmaWxsICYmIGZpbGwgIT09ICcnKSB7XHJcbiAgICAgICAgICAgICAgICBwYXRoRWxlbWVudCArPSBgIGZpbGw9XCIke2ZpbGx9XCJgO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvLyBBZGQgc3Ryb2tlIGlmIGl0IGV4aXN0cyAoaW5jbHVkaW5nICdub25lJylcclxuICAgICAgICAgICAgaWYgKHN0cm9rZSAmJiBzdHJva2UgIT09ICcnKSB7XHJcbiAgICAgICAgICAgICAgICBwYXRoRWxlbWVudCArPSBgIHN0cm9rZT1cIiR7c3Ryb2tlfVwiYDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLy8gQWRkIHN0cm9rZS13aWR0aCBpZiBpdCBleGlzdHNcclxuICAgICAgICAgICAgaWYgKHN0cm9rZVdpZHRoICYmIHN0cm9rZVdpZHRoICE9PSAnJykge1xyXG4gICAgICAgICAgICAgICAgcGF0aEVsZW1lbnQgKz0gYCBzdHJva2Utd2lkdGg9XCIke3N0cm9rZVdpZHRofVwiYDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLy8gQWRkIG9wYWNpdHkgaWYgaXQgZXhpc3RzXHJcbiAgICAgICAgICAgIGlmIChvcGFjaXR5ICYmIG9wYWNpdHkgIT09ICcnKSB7XHJcbiAgICAgICAgICAgICAgICBwYXRoRWxlbWVudCArPSBgIG9wYWNpdHk9XCIke29wYWNpdHl9XCJgO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvLyBBZGQgZmlsbC1vcGFjaXR5IGlmIGl0IGV4aXN0c1xyXG4gICAgICAgICAgICBpZiAoZmlsbE9wYWNpdHkgJiYgZmlsbE9wYWNpdHkgIT09ICcnKSB7XHJcbiAgICAgICAgICAgICAgICBwYXRoRWxlbWVudCArPSBgIGZpbGwtb3BhY2l0eT1cIiR7ZmlsbE9wYWNpdHl9XCJgO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvLyBBZGQgc3Ryb2tlLW9wYWNpdHkgaWYgaXQgZXhpc3RzXHJcbiAgICAgICAgICAgIGlmIChzdHJva2VPcGFjaXR5ICYmIHN0cm9rZU9wYWNpdHkgIT09ICcnKSB7XHJcbiAgICAgICAgICAgICAgICBwYXRoRWxlbWVudCArPSBgIHN0cm9rZS1vcGFjaXR5PVwiJHtzdHJva2VPcGFjaXR5fVwiYDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgcGF0aEVsZW1lbnQgKz0gYCAvPmA7XHJcbiAgICAgICAgICAgIHBhdGhzLnB1c2gocGF0aEVsZW1lbnQpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gSWYgbm8gcGF0aHMgZm91bmQsIHRyeSB0byBleHRyYWN0IGZyb20gU1ZHIGNvbnRlbnQgZGlyZWN0bHkgKGZhbGxiYWNrKVxyXG4gICAgICAgIGlmIChwYXRocy5sZW5ndGggPT09IDApIHtcclxuICAgICAgICAgICAgY29uc29sZS53YXJuKCdObyBwYXRocyBmb3VuZCBpbiBTVkcsIHRyeWluZyBmYWxsYmFjayBleHRyYWN0aW9uJyk7XHJcbiAgICAgICAgICAgIGNvbnN0IGNvbnRlbnRNYXRjaCA9IHN2Z0NvbnRlbnQubWF0Y2goLzxzdmdbXj5dKj4oW1xcc1xcU10qPyk8XFwvc3ZnPi8pO1xyXG4gICAgICAgICAgICBpZiAoY29udGVudE1hdGNoICYmIGNvbnRlbnRNYXRjaFsxXSkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgaW5uZXJDb250ZW50ID0gY29udGVudE1hdGNoWzFdO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgaW5uZXJQYXRoUmVnZXggPSAvPHBhdGhbXj5dKj4vZztcclxuICAgICAgICAgICAgICAgIGxldCBpbm5lck1hdGNoO1xyXG4gICAgICAgICAgICAgICAgd2hpbGUgKChpbm5lck1hdGNoID0gaW5uZXJQYXRoUmVnZXguZXhlYyhpbm5lckNvbnRlbnQpKSAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHBhdGhzLnB1c2goaW5uZXJNYXRjaFswXSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIElmIHN0aWxsIG5vIHBhdGhzLCByZXR1cm4gbnVsbCBvciB0aHJvdyBlcnJvclxyXG4gICAgICAgIGlmIChwYXRocy5sZW5ndGggPT09IDApIHtcclxuICAgICAgICAgICAgY29uc29sZS5lcnJvcihgTm8gcGF0aHMgZm91bmQgaW4gU1ZHIGZvciBpY29uOiAke2ljb25OYW1lfWApO1xyXG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIEJ1aWxkIHRoZSBjb250ZW50IHN0cmluZyB3aXRoIHByb3BlciBmb3JtYXR0aW5nXHJcbiAgICAgICAgY29uc3QgY29udGVudCA9IHBhdGhzLmpvaW4oJycpO1xyXG5cclxuICAgICAgICAvLyBVc2UgdGhlIHRhcmdldCBzaXplIGFzIHRoZSBub3JtYWxpemVkIHZpZXdCb3hcclxuICAgICAgICBjb25zdCBub3JtYWxpemVkVmlld0JveCA9IGAwIDAgJHtUQVJHRVRfU0laRX0gJHtUQVJHRVRfU0laRX1gO1xyXG5cclxuICAgICAgICAvLyBDcmVhdGUgdGhlIEtlbmRvIGljb24gc3RydWN0dXJlXHJcbiAgICAgICAgb2JqZWN0LnN2Z19kYXRhW2NvbHVtbl0gPSB7XHJcbiAgICAgICAgICAgIG5hbWU6IGljb25OYW1lLFxyXG4gICAgICAgICAgICBjb250ZW50OiBjb250ZW50LFxyXG4gICAgICAgICAgICB2aWV3Qm94OiBub3JtYWxpemVkVmlld0JveCxcclxuICAgICAgICAgICAgdmFyaWFudHM6IHtcclxuICAgICAgICAgICAgICAgIHNvbGlkOiAnJyxcclxuICAgICAgICAgICAgICAgIG91dGxpbmU6ICcnLFxyXG4gICAgICAgICAgICAgICAgZHVvdG9uZTogJydcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIG5hbWU6IGljb25OYW1lLFxyXG4gICAgICAgICAgICBjb250ZW50OiBjb250ZW50LFxyXG4gICAgICAgICAgICB2aWV3Qm94OiBub3JtYWxpemVkVmlld0JveCxcclxuICAgICAgICAgICAgdmFyaWFudHM6IHtcclxuICAgICAgICAgICAgICAgIHNvbGlkOiBjb250ZW50LFxyXG4gICAgICAgICAgICAgICAgb3V0bGluZTogJycsXHJcbiAgICAgICAgICAgICAgICBkdW90b25lOiAnJ1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgb2JqZWN0LnN2Z19kYXRhW2NvbHVtbl0gPSB7fTtcclxuICAgICAgICBjb25zb2xlLmVycm9yKGBFcnJvciBjb252ZXJ0aW5nIFNWRyB0byBLZW5kbyBpY29uOiAke2ljb25OYW1lfWAsIGVycm9yKTtcclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxufVxyXG5cclxuLy8gSGVscGVyIGZ1bmN0aW9uIHRvIHRyYW5zZm9ybSBwYXRoIGRhdGFcclxudHJhbnNmb3JtUGF0aERhdGEoZDogc3RyaW5nLCBzY2FsZTogbnVtYmVyLCBvZmZzZXRYOiBudW1iZXIsIG9mZnNldFk6IG51bWJlciwgdmlld0JveFdpZHRoOiBudW1iZXIsIHZpZXdCb3hIZWlnaHQ6IG51bWJlcik6IHN0cmluZyB7XHJcbiAgICAvLyBUaGlzIGZ1bmN0aW9uIHRyYW5zZm9ybXMgdGhlIHBhdGggY29tbWFuZHNcclxuICAgIC8vIEl0IGhhbmRsZXMgYWJzb2x1dGUgKHVwcGVyY2FzZSkgYW5kIHJlbGF0aXZlIChsb3dlcmNhc2UpIGNvbW1hbmRzXHJcbiAgICBcclxuICAgIGNvbnN0IGNvbW1hbmRzID0gZC5tYXRjaCgvW2EtekEtWl1bXmEtekEtWl0qL2cpO1xyXG4gICAgaWYgKCFjb21tYW5kcykgcmV0dXJuIGQ7XHJcblxyXG4gICAgY29uc3QgdHJhbnNmb3JtZWRDb21tYW5kcyA9IGNvbW1hbmRzLm1hcChjbWQgPT4ge1xyXG4gICAgICAgIGNvbnN0IGNvbW1hbmQgPSBjbWRbMF07XHJcbiAgICAgICAgY29uc3QgdmFsdWVzID0gY21kLnNsaWNlKDEpLnRyaW0oKS5zcGxpdCgvW1xccyxdKy8pLmZpbHRlcih2ID0+IHYgIT09ICcnKS5tYXAoTnVtYmVyKTtcclxuICAgICAgICBcclxuICAgICAgICBpZiAodmFsdWVzLmxlbmd0aCA9PT0gMCkgcmV0dXJuIGNtZDtcclxuXHJcbiAgICAgICAgbGV0IHRyYW5zZm9ybWVkVmFsdWVzOiBudW1iZXJbXSA9IFtdO1xyXG5cclxuICAgICAgICBzd2l0Y2ggKGNvbW1hbmQpIHtcclxuICAgICAgICAgICAgY2FzZSAnTSc6IC8vIE1vdmUgdG8gKGFic29sdXRlKVxyXG4gICAgICAgICAgICBjYXNlICdMJzogLy8gTGluZSB0byAoYWJzb2x1dGUpXHJcbiAgICAgICAgICAgIGNhc2UgJ0MnOiAvLyBDdWJpYyBCZXppZXIgKGFic29sdXRlKVxyXG4gICAgICAgICAgICBjYXNlICdTJzogLy8gU21vb3RoIEJlemllciAoYWJzb2x1dGUpXHJcbiAgICAgICAgICAgIGNhc2UgJ1EnOiAvLyBRdWFkcmF0aWMgQmV6aWVyIChhYnNvbHV0ZSlcclxuICAgICAgICAgICAgY2FzZSAnVCc6IC8vIFNtb290aCBRdWFkcmF0aWMgKGFic29sdXRlKVxyXG4gICAgICAgICAgICBjYXNlICdBJzogLy8gQXJjIChhYnNvbHV0ZSlcclxuICAgICAgICAgICAgY2FzZSAnWic6XHJcbiAgICAgICAgICAgIGNhc2UgJ3onOlxyXG4gICAgICAgICAgICAgICAgLy8gRG9uJ3QgdHJhbnNmb3JtIFogY29tbWFuZHNcclxuICAgICAgICAgICAgICAgIGlmIChjb21tYW5kID09PSAnWicgfHwgY29tbWFuZCA9PT0gJ3onKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuICdaJztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC8vIFRyYW5zZm9ybSBjb29yZGluYXRlc1xyXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB2YWx1ZXMubGVuZ3RoOyBpICs9IDIpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCB4ID0gdmFsdWVzW2ldO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHkgPSB2YWx1ZXNbaSArIDFdO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICghaXNOYU4oeCkgJiYgIWlzTmFOKHkpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybWVkVmFsdWVzLnB1c2goeCAqIHNjYWxlICsgb2Zmc2V0WCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybWVkVmFsdWVzLnB1c2goeSAqIHNjYWxlICsgb2Zmc2V0WSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtZWRWYWx1ZXMucHVzaCh4KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtZWRWYWx1ZXMucHVzaCh5KTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgIGNhc2UgJ20nOiAvLyBNb3ZlIHRvIChyZWxhdGl2ZSlcclxuICAgICAgICAgICAgY2FzZSAnbCc6IC8vIExpbmUgdG8gKHJlbGF0aXZlKVxyXG4gICAgICAgICAgICBjYXNlICdjJzogLy8gQ3ViaWMgQmV6aWVyIChyZWxhdGl2ZSlcclxuICAgICAgICAgICAgY2FzZSAncyc6IC8vIFNtb290aCBCZXppZXIgKHJlbGF0aXZlKVxyXG4gICAgICAgICAgICBjYXNlICdxJzogLy8gUXVhZHJhdGljIEJlemllciAocmVsYXRpdmUpXHJcbiAgICAgICAgICAgIGNhc2UgJ3QnOiAvLyBTbW9vdGggUXVhZHJhdGljIChyZWxhdGl2ZSlcclxuICAgICAgICAgICAgY2FzZSAnYSc6IC8vIEFyYyAocmVsYXRpdmUpXHJcbiAgICAgICAgICAgICAgICAvLyBUcmFuc2Zvcm0gY29vcmRpbmF0ZXNcclxuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdmFsdWVzLmxlbmd0aDsgaSArPSAyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgeCA9IHZhbHVlc1tpXTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCB5ID0gdmFsdWVzW2kgKyAxXTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoIWlzTmFOKHgpICYmICFpc05hTih5KSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm1lZFZhbHVlcy5wdXNoKHggKiBzY2FsZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybWVkVmFsdWVzLnB1c2goeSAqIHNjYWxlKTtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm1lZFZhbHVlcy5wdXNoKHgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm1lZFZhbHVlcy5wdXNoKHkpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgY2FzZSAnSCc6IC8vIEhvcml6b250YWwgbGluZSAoYWJzb2x1dGUpXHJcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm1lZFZhbHVlcy5wdXNoKHZhbHVlc1swXSAqIHNjYWxlICsgb2Zmc2V0WCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgIGNhc2UgJ2gnOiAvLyBIb3Jpem9udGFsIGxpbmUgKHJlbGF0aXZlKVxyXG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtZWRWYWx1ZXMucHVzaCh2YWx1ZXNbMF0gKiBzY2FsZSk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgIGNhc2UgJ1YnOiAvLyBWZXJ0aWNhbCBsaW5lIChhYnNvbHV0ZSlcclxuICAgICAgICAgICAgICAgIHRyYW5zZm9ybWVkVmFsdWVzLnB1c2godmFsdWVzWzBdICogc2NhbGUgKyBvZmZzZXRZKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgY2FzZSAndic6IC8vIFZlcnRpY2FsIGxpbmUgKHJlbGF0aXZlKVxyXG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtZWRWYWx1ZXMucHVzaCh2YWx1ZXNbMF0gKiBzY2FsZSk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAvLyBVbmtub3duIGNvbW1hbmQsIGtlZXAgb3JpZ2luYWxcclxuICAgICAgICAgICAgICAgIHJldHVybiBjbWQ7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBGb3JtYXQgdGhlIHZhbHVlcyBhcyBhIHN0cmluZ1xyXG4gICAgICAgIGNvbnN0IHZhbHVlU3RyID0gdHJhbnNmb3JtZWRWYWx1ZXMubWFwKHYgPT4ge1xyXG4gICAgICAgICAgICAvLyBSb3VuZCB0byByZWFzb25hYmxlIHByZWNpc2lvblxyXG4gICAgICAgICAgICByZXR1cm4gTnVtYmVyLmlzSW50ZWdlcih2KSA/IHYudG9TdHJpbmcoKSA6IHYudG9GaXhlZCg0KTtcclxuICAgICAgICB9KS5qb2luKCcgJyk7XHJcblxyXG4gICAgICAgIHJldHVybiBjb21tYW5kICsgdmFsdWVTdHI7XHJcbiAgICB9KTtcclxuXHJcbiAgICByZXR1cm4gdHJhbnNmb3JtZWRDb21tYW5kcy5qb2luKCcnKTtcclxufVxyXG5cclxucHVibGljIGdldEludmFsaWRDb250cm9sc19ncmlkKG9iamVjdCkge1xyXG4gIC8vY29uc29sZS5sb2cgKFwidGVzdGluZyBnZXRJbnZhbGlkQ29udHJvbHM6XCIsICAgb2JqZWN0LmZvcm1Hcm91cC5pbnZhbGlkLCBvYmplY3QuZm9ybUdyb3VwLmNvbnRyb2xzKVxyXG4gIGNvbnN0IGludmFsaWQgPSBbXTtcclxuICBjb25zdCBjb250cm9scyA9IG9iamVjdC5mb3JtR3JvdXAuY29udHJvbHM7XHJcbiAgZm9yIChjb25zdCBuYW1lIGluIGNvbnRyb2xzKSB7XHJcbiAgICAgIGlmIChjb250cm9sc1tuYW1lXS5pbnZhbGlkKSB7XHJcbiAgICAgICAgIGxldCBuYW1lTVNnID0gdGhpcy5nZXROTFMoW10sICdvcm1wZ21vYl9mbWIudXNlckluZm9Pcm1wZ21vYkZtYkJTdWJzY3JpYmVyW1wibmFtZVwiXScsbmFtZSlcclxuICAgICAgICAgIGludmFsaWQucHVzaChuYW1lTVNnKTtcclxuICAgICAgfVxyXG4gIH1cclxuICB0aGlzLnNob3dOb3RpZmljYXRpb24oXCJlcnJvclwiLCB0aGlzLmdldE5MUyhbaW52YWxpZC50b1N0cmluZygpXSxcclxuICAnTk9fVkFMSURfREFUQV9GT1InLCdObyB2YWxpZCBkYXRhIGZvciA6ICAjIyAnKSk7XHJcbiAgcmV0dXJuIGludmFsaWQ7XHJcbn1cclxufVxyXG5cclxuLypcclxuQEluamVjdGFibGUoe1xyXG4gIHByb3ZpZGVkSW46ICdyb290JyxcclxufSlcclxuZXhwb3J0IGNsYXNzIHN0YXJTZXJ2aWNlcyBleHRlbmRzIHN0YXJfU2VydmljZXMge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKFxyXG4gICAgICAgIG5vdGlmaWNhdGlvblNlcnZpY2U6Tm90aWZpY2F0aW9uU2VydmljZSxcclxuICAgICAgICBkaWFsb2dTZXJ2aWNlOiBEaWFsb2dTZXJ2aWNlLFxyXG4gICAgICAgIGh0dHA6IEh0dHBDbGllbnQsICAgbWVzc2FnZXM6IE1lc3NhZ2VTZXJ2aWNlKSB7XHJcbiAgICAgICAgLy9sZXQgUGFnZSA9IGVuY29kZVVSSSAoXCImX3F1ZXJ5PUdFVF9FSU1fQ09NTUFORFMmU1BDX0ZVTkNUSU9OPSclJyZFWENTWVNURU09J1NNTlNfMycmRVFVSVBJRD0nJSdcIik7XHJcbiAgICAgICAgbGV0IFBhZ2UgPSBlbmNvZGVVUkkgKFwiXCIpO1xyXG5cclxuXHJcbiAgICAgICAgc3VwZXIoXHJcbiAgICAgICAgICAgIG5vdGlmaWNhdGlvblNlcnZpY2UsXHJcbiAgICAgICAgICAgIGRpYWxvZ1NlcnZpY2UsXHJcbiAgICAgICAgICAgIGh0dHAsIFBhZ2UsIG1lc3NhZ2VzKTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHF1ZXJ5Rm9yQ2F0ZWdvcnkoeyBDYXRlZ29yeUlEIH06IHsgQ2F0ZWdvcnlJRDogbnVtYmVyIH0sIHN0YXRlPzogYW55KTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5xdWVyeShPYmplY3QuYXNzaWduKHt9LCBzdGF0ZSwge1xyXG4gICAgICAgICAgICBmaWx0ZXI6IHtcclxuICAgICAgICAgICAgICAgIGZpbHRlcnM6IFt7XHJcbiAgICAgICAgICAgICAgICAgICAgZmllbGQ6ICdDYXRlZ29yeUlEJywgb3BlcmF0b3I6ICdlcScsIHZhbHVlOiBDYXRlZ29yeUlEXHJcbiAgICAgICAgICAgICAgICB9XSxcclxuICAgICAgICAgICAgICAgIGxvZ2ljOiAnYW5kJ1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSkpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBxdWVyeUZvclByb2R1Y3ROYW1lKFByb2R1Y3ROYW1lOiBzdHJpbmcsIHN0YXRlPzogYW55KTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5xdWVyeShPYmplY3QuYXNzaWduKHt9LCBzdGF0ZSwge1xyXG4gICAgICAgICAgICBmaWx0ZXI6IHtcclxuICAgICAgICAgICAgICAgIGZpbHRlcnM6IFt7XHJcbiAgICAgICAgICAgICAgICAgICAgZmllbGQ6ICdQcm9kdWN0TmFtZScsIG9wZXJhdG9yOiAnY29udGFpbnMnLCB2YWx1ZTogUHJvZHVjdE5hbWVcclxuICAgICAgICAgICAgICAgIH1dLFxyXG4gICAgICAgICAgICAgICAgbG9naWM6ICdhbmQnXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KSk7XHJcbiAgICB9XHJcblxyXG59XHJcblxyXG4qL1xyXG4iXX0=