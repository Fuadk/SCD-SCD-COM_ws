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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhcmxpYi5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vcHJvamVjdHMvc3RhcmxpYi9zcmMvbGliL3N0YXJsaWIuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBYyxXQUFXLEVBQUUsV0FBVyxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFJNUUsT0FBTyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUMxQyxtQ0FBbUM7QUFDbkMsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUNsQyxPQUFPLEtBQUssUUFBUSxNQUFNLFdBQVcsQ0FBQztBQUN0QyxPQUFPLEVBQUUsVUFBVSxFQUFTLE1BQU0sZ0JBQWdCLENBQUM7QUFFbkQsT0FBTyxFQUE0QixpQkFBaUIsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBQzdGLE9BQU8sRUFBRSxHQUFHLEVBQUUsY0FBYyxFQUFFLE9BQU8sRUFBZSxNQUFNLDJCQUEyQixDQUFDO0FBRXRGLE9BQU8sRUFBRSxHQUFHLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUN0QyxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFFN0MsT0FBTyxFQUFHLFNBQVMsRUFBRSxrQkFBa0IsRUFBRSxNQUFNLFNBQVMsQ0FBQzs7Ozs7O0FBV3pELHFFQUFxRTtBQUNuRSxNQUFNLE9BQU8sWUFBWTtJQXFEdkIsWUFDWSxtQkFBd0MsRUFDeEMsYUFBNEIsRUFDNUIsSUFBZ0IsRUFDaEIsUUFBd0I7UUFFcEMsY0FBYztRQUNWLGlDQUFpQztRQU56Qix3QkFBbUIsR0FBbkIsbUJBQW1CLENBQXFCO1FBQ3hDLGtCQUFhLEdBQWIsYUFBYSxDQUFlO1FBQzVCLFNBQUksR0FBSixJQUFJLENBQVk7UUFDaEIsYUFBUSxHQUFSLFFBQVEs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QUM3RCxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7WUFFYixPQUFPLE9BQU8sR0FBRyxRQUFRLENBQUM7UUFDOUIsQ0FBQyxDQUFDLENBQUM7UUFFSCxPQUFPLG1CQUFtQixDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUN4QyxDQUFDO0lBRU0sdUJBQXVCLENBQUMsTUFBTTtRQUNuQyxvR0FBb0c7UUFDcEcsTUFBTSxPQUFPLEdBQUcsRUFBRSxDQUFDO1FBQ25CLE1BQU0sUUFBUSxHQUFHLE1BQU0sQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDO1FBQzNDLEtBQUssTUFBTSxJQUFJLElBQUksUUFBUSxFQUFFLENBQUM7WUFDMUIsSUFBSSxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUMsT0FBTyxFQUFFLENBQUM7Z0JBQzFCLElBQUksT0FBTyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsRUFBRSxFQUFFLHFEQUFxRCxFQUFDLElBQUksQ0FBQyxDQUFBO2dCQUN4RixPQUFPLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBQzFCLENBQUM7UUFDTCxDQUFDO1FBQ0QsSUFBSSxDQUFDLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsT0FBTyxDQUFDLFFBQVEsRUFBRSxDQUFDLEVBQy9ELG1CQUFtQixFQUFDLDBCQUEwQixDQUFDLENBQUMsQ0FBQztRQUNqRCxPQUFPLE9BQU8sQ0FBQztJQUNqQixDQUFDOytHQXJ1S2MsWUFBWTttSEFBWixZQUFZLGNBSGIsTUFBTTs7NEZBR0wsWUFBWTtrQkFKMUIsVUFBVTttQkFBQztvQkFDVixVQUFVLEVBQUUsTUFBTTtpQkFDbkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEh0dHBDbGllbnQsIEh0dHBIZWFkZXJzLCBIdHRwUmVxdWVzdCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcclxuaW1wb3J0IHsgR3JpZERhdGFSZXN1bHQgfSBmcm9tICdAcHJvZ3Jlc3Mva2VuZG8tYW5ndWxhci1ncmlkJztcclxuaW1wb3J0IHsgdG9PRGF0YVN0cmluZyB9IGZyb20gJ0Bwcm9ncmVzcy9rZW5kby1kYXRhLXF1ZXJ5JztcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgQmVoYXZpb3JTdWJqZWN0IH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IG1hcCwgdGFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xyXG4vL2ltcG9ydCB7IEFueUFSZWNvcmQgfSBmcm9tICdkbnMnO1xyXG5pbXBvcnQgeyB0aHJvd0Vycm9yIH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCAqIGFzIENyeXB0b0pTIGZyb20gJ2NyeXB0by1qcyc7XHJcbmltcG9ydCB7IGNhdGNoRXJyb3IsIHJldHJ5IH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xyXG5pbXBvcnQgeyBOb3RpZmljYXRpb25TZXJ2aWNlIH0gZnJvbSAnQHByb2dyZXNzL2tlbmRvLWFuZ3VsYXItbm90aWZpY2F0aW9uJztcclxuaW1wb3J0IHsgRGlhbG9nU2VydmljZSwgRGlhbG9nUmVmLCBEaWFsb2dDbG9zZVJlc3VsdCB9IGZyb20gJ0Bwcm9ncmVzcy9rZW5kby1hbmd1bGFyLWRpYWxvZyc7XHJcbmltcG9ydCB7IERheSwgZmlyc3REYXlJbldlZWssIGdldERhdGUsIHRvTG9jYWxEYXRlIH0gZnJvbSAnQHByb2dyZXNzL2tlbmRvLWRhdGUtbWF0aCc7XHJcbmltcG9ydCB7IFBhbmVsQmFySXRlbU1vZGVsLCBQYW5lbEJhclN0YXRlQ2hhbmdlRXZlbnQgfSBmcm9tICdAcHJvZ3Jlc3Mva2VuZG8tYW5ndWxhci1sYXlvdXQnO1xyXG5pbXBvcnQgeyBNZDUgfSBmcm9tICd0cy1tZDUvZGlzdC9tZDUnO1xyXG5pbXBvcnQgeyBmb3JtYXREYXRlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuaW1wb3J0IHsga2V5ZnJhbWVzIH0gZnJvbSAnQGFuZ3VsYXIvYW5pbWF0aW9ucyc7XHJcbmltcG9ydCB7ICB0YWJzQ29kZXMsIGNvbXBvbmVudENvbmZpZ0RlZiB9IGZyb20gJy4vbW9kZWwnO1xyXG5cclxuaW1wb3J0IHsgTWVzc2FnZVNlcnZpY2UgfSBmcm9tICdAcHJvZ3Jlc3Mva2VuZG8tYW5ndWxhci1sMTBuJztcclxuaW1wb3J0IHsgTXlNZXNzYWdlU2VydmljZSB9IGZyb20gJy4vbXktbWVzc2FnZS5zZXJ2aWNlJztcclxuXHJcblxyXG5kZWNsYXJlIGZ1bmN0aW9uIGdldFBhcmFtQ29uZmlnKCk6IGFueTtcclxuZGVjbGFyZSBmdW5jdGlvbiBzZXRQYXJhbUNvbmZpZyh2YXIxOmFueSk6YW55O1xyXG5ASW5qZWN0YWJsZSh7XHJcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnLFxyXG59KVxyXG4vL2V4cG9ydCBjbGFzcyBzdGFyU2VydmljZXMgZXh0ZW5kcyBCZWhhdmlvclN1YmplY3Q8R3JpZERhdGFSZXN1bHQ+IHtcclxuICBleHBvcnQgY2xhc3Mgc3RhclNlcnZpY2VzICB7XHJcbiAgcHVibGljIHBhcmFtQ29uZmlnOmFueTtcclxuICBwcml2YXRlIGNyZWF0ZWRJdGVtczogYW55W10gPSBbXTtcclxuICBwcml2YXRlIHVwZGF0ZWRJdGVtczogYW55W10gPSBbXTtcclxuICBwcml2YXRlIGRlbGV0ZWRJdGVtczogYW55W10gPSBbXTtcclxuICBwdWJsaWMgbG9hZGluZzogYW55O1xyXG4gIHB1YmxpYyByb3V0aW5lX25hbWUgPSBcIlwiO1xyXG4gIHB1YmxpYyBzYXZlQ2hhbmdlc01zZyA9IFwiU2NyZWVuIGNoYW5nZWQsIGFyZSB5b3Ugc3VyZSB5b3UgdG8gbmF2aWdhdGU/XCI7XHJcbiAgcHVibGljIGRlbGV0ZURldGFpbE1zZyA9IFwiQ2FuIG5vdCBkZWxldGUgYXMgZGV0YWlsIGhhcyBkYXRhLlwiO1xyXG4gIHB1YmxpYyBwbGVhc2VDb25maXJtTXNnID0gXCJQbGVhc2UgY29uZmlybVwiO1xyXG4gIHB1YmxpYyBkZWxldGVDb25maXJtTXNnID0gXCJBcmUgeW91IHN1cmUgeW91IHdhbnQgdG8gZGVsZXRlIHRoaXMgcmVjb3JkP1wiO1xyXG4gIHB1YmxpYyBub3RoaW5nVG9EZWxldGVsTXNnID0gXCJObyByZWNvcmRzIHRvIGRlbGV0ZS5cIjtcclxuICBwdWJsaWMgZmllbGRzUmVxdWlyZWRNc2cgPSBcIlBsZWFzZSBlbnRlciByZXF1aXJlZCBmaWVsZHMuXCJcclxuICBwdWJsaWMgcmVhZE9ubHlNc2cgPSBcIkNhbiBub3Qgc2F2ZSAsIHlvdXIgYXV0aG9yaXR5IGlzIHJlYWRvbmx5LlwiXHJcbiAgcHVibGljIG5vQWNjZXNzTXNnID0gXCJZb3UgZG9udCBoYXZlIGFjY2VzcyB0byB0aGlzIHJvdXRpbmUuXCJcclxuICBwdWJsaWMgc3RhbmRhcmRFcnJvck1zZyA9IFwiRXJyb3IgcGVyZm9ybWluZyB0cmFuc2FjdGlvblwiXHJcbiAgcHVibGljIHNhdmVNYXN0ZXJNc2cgPSBcIlNhdmUgbWFzdGVyIHJlY29yZCBmaXJzdC5cIlxyXG4gIHB1YmxpYyBlbnRlclF1ZXJ5TXNnID0gIFwiRW50ZXIgYW55IGZpZWxkIHRvIHNlYXJjaCAoZS5nOiBuYW1lJSkgYW5kIHRoZW4gcHJlc3MgRXhlY3V0ZSBRdWVyeVwiO1xyXG4gIHB1YmxpYyBoZWxwTXNnID0gXCJcIjtcclxuICBwdWJsaWMgaGVscE1zZ19ncmlkID0gXCJcIjtcclxuICBwdWJsaWMgVVNFUk5BTUUgPSBcIlwiO1xyXG4gIHB1YmxpYyBoaWRlQWZ0ZXIgPSA1MDA7XHJcbiAgcHVibGljIFN0ckF1dGggPSBcIlwiO1xyXG4gIHB1YmxpYyBVU0VSX0lORk86YW55O1xyXG4gIHB1YmxpYyBNQVNURVJfREIgPSBcIlwiO1xyXG4gIHB1YmxpYyBVU0VSTkFNRV9EQiA9IFwiXCI7XHJcbiAgcHJpdmF0ZSBodHRwT3B0aW9uczphbnk7XHJcbiAgcHVibGljIGxpbWl0ID0gNTAwMDtcclxuICBwdWJsaWMgWWVzTm9BY3Rpb25zID0gW1xyXG4gICAgeyB0ZXh0OiAnTm8nLCBwcmltYXJ5OiBmYWxzZSB9LFxyXG4gICAgeyB0ZXh0OiAnWWVzJywgcHJpbWFyeTogdHJ1ZSB9XHJcbiAgXTtcclxuICBwdWJsaWMgT2tBY3Rpb25zID0gW1xyXG4gICAgeyB0ZXh0OiAnT2snLCBwcmltYXJ5OiBmYWxzZSB9XHJcbiAgXTtcclxuICBwdWJsaWMgc2Vzc2lvblBhcmFtczphbnkgPSB7fTtcclxuXHJcblxyXG5cclxuICAgIC8vcHJpdmF0ZSBCQVNFX1VSTCA9ICdodHRwczovL29kYXRhc2FtcGxlc2VydmljZXMuYXp1cmV3ZWJzaXRlcy5uZXQvVjQvTm9ydGh3aW5kL05vcnRod2luZC5zdmMvJztcclxuICAvL3ByaXZhdGUgQkFTRV9VUkwgPSAnaHR0cDovLzE5Mi4xNjguMS4zOjgwOTAvYXBpP19mb3JtYXQ9anNvbiZfbGltaXQ9NTAnO1xyXG5cclxuICBwdWJsaWMgRVBNRU5HX1VSTCA9IFwiXCI7IC8vJ2h0dHA6Ly8xOTIuMTY4LjEuNTo4MDkyL2Zvcm1hdCc7XHJcbiAgICAvL3ByaXZhdGUgRVBNRU5HX1VSTCA9ICdodHRwOi8vZ21hc2hyby5jb206ODA5Mi9mb3JtYXQnO1xyXG5cclxuICBwdWJsaWMgU0VSVkVSX1VSTCA9IFwiXCI7IC8vICdodHRwOi8vbG9jYWxob3N0OjgwOTAnO1xyXG4gIC8vcHVibGljIFNFUlZFUl9VUkwgPSAnaHR0cDovL2dtYXNocm8uY29tOjgwOTAnO1xyXG5cclxuICAgIHB1YmxpYyBCQVNFX1VSTCA9IHRoaXMuU0VSVkVSX1VSTCArICcvYXBpP19mb3JtYXQ9anNvbiZfbGltaXQ9JyArIHRoaXMubGltaXQ7XHJcbiAgLy9wcml2YXRlIEJBU0VfVVJMID0gJ2h0dHA6Ly9nbWFzaHJvLmNvbTo4MDkwL2FwaT9fZm9ybWF0PWpzb24mX2xpbWl0PScgKyB0aGlzLmxpbWl0O1xyXG4gICAgcHVibGljIGVLeWNTY3IgPSBcIkRTUEVLWUNcIjtcclxuICBwdWJsaWMgcG9ydGFsU2NyID0gXCJEU1BQT1JUQUxcIjtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihcclxuICAgICAgICBwcml2YXRlIG5vdGlmaWNhdGlvblNlcnZpY2U6IE5vdGlmaWNhdGlvblNlcnZpY2UsXHJcbiAgICAgICAgcHJpdmF0ZSBkaWFsb2dTZXJ2aWNlOiBEaWFsb2dTZXJ2aWNlLFxyXG4gICAgICAgIHByaXZhdGUgaHR0cDogSHR0cENsaWVudCxcclxuICAgICAgICBwcml2YXRlIG1lc3NhZ2VzOiBNZXNzYWdlU2VydmljZVxyXG4gICAgKSB7XHJcbiAgICAvL3N1cGVyKG51bGwpO1xyXG4gICAgICAgIC8vbG9nZ2VyLndhcm4oXCJXYXJuaW5nIG1lc3NhZ2VcIik7XHJcblxyXG4gICAgfVxyXG5cclxuICAvLyBwdWJsaWMgcXVlcnkoc3RhdGU6IGFueSk6IHZvaWQge1xyXG4gIC8vICAgbGV0IHF1ZXJ5TmFtZSA9IFwiXCI7XHJcbiAgLy8gICB0aGlzLmZldGNoKHRoaXMsIHF1ZXJ5TmFtZSlcclxuICAvLyAgICAgLnN1YnNjcmliZSgoeDphbnkpID0+IHN1cGVyLm5leHQoeCkpO1xyXG4gIC8vIH1cclxuICBwdWJsaWMgcmVtb3ZlUmVjKGdyaWREYXRhOiBhbnksIGVkaXRlZFJvd0luZGV4OiBudW1iZXIpIHtcclxuXHJcbiAgICAgICAgLy9sZXQgcmVzdWx0MSA9IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkoZ3JpZERhdGEpKTtcclxuICAgIGlmICh0eXBlb2YgZWRpdGVkUm93SW5kZXggIT09IFwidW5kZWZpbmVkXCIpIHtcclxuICAgICAgZ3JpZERhdGEuZGF0YS5zcGxpY2UoZWRpdGVkUm93SW5kZXgsIDEpO1xyXG4gICAgICAgICAgZ3JpZERhdGEudG90YWwgPSBncmlkRGF0YS5kYXRhLmxlbmd0aDtcclxuICAgICAgICAgIC8qICAvL2lmICh0aGlzLnBhcmFtQ29uZmlnLkRFQlVHX0ZMQUcpIGNvbnNvbGUubG9nKCdyZW12aW5nIGVkaXRlZFJvd0luZGV4OicgKyBlZGl0ZWRSb3dJbmRleClcclxuICAgICAgICAgICAgcmVzdWx0MS5kYXRhLnNwbGljZSggZWRpdGVkUm93SW5kZXggLCAxICk7XHJcbiAgICAgICAgICAgIHJlc3VsdDEudG90YWwgPSByZXN1bHQxLmRhdGEubGVuZ3RoOyovXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gZ3JpZERhdGE7XHJcbiAgICB9XHJcbiAgcHVibGljIHVwZGF0ZVJlYyhncmlkRGF0YTogYW55LCBlZGl0ZWRSb3dJbmRleDogbnVtYmVyLCBOZXdWYWw6IGFueSkge1xyXG4gICAgICBncmlkRGF0YS5kYXRhW2VkaXRlZFJvd0luZGV4XSA9IE5ld1ZhbDtcclxuXHJcbiAgICAgICAgcmV0dXJuIGdyaWREYXRhO1xyXG5cclxuICAgIH1cclxuICBwdWJsaWMgYWRkUmVjKGdyaWREYXRhOiBhbnksIE5ld1ZhbDogYW55KSB7XHJcbiAgICAgIGdyaWREYXRhLmRhdGEucHVzaChOZXdWYWwpO1xyXG4gICAgICAgLyogbGV0IHJlc3VsdCA9e1wiZGF0YVwiOltdLCB0b3RhbDowfTtcclxuICAgICAgICBsZXQgcmVzdWx0MSA9IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkoZ3JpZERhdGEpKTtcclxuICAgICAgICBOZXdWYWwgPSB0aGlzLnBhcnNlVG9EYXRlKE5ld1ZhbCk7XHJcbiAgICAgICAgcmVzdWx0MS5kYXRhLnB1c2goTmV3VmFsKTtcclxuICAgICAgICByZXN1bHQuZGF0YSA9IHJlc3VsdDEuZGF0YTtcclxuICAgICAgICByZXN1bHQudG90YWwgPSByZXN1bHQuZGF0YS5sZW5ndGg7XHJcbiAgICAgICAgcmV0dXJuIHJlc3VsdDE7Ki9cclxuICAgICAgICByZXR1cm4gZ3JpZERhdGE7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgZm9ybWF0V2hlcmUoTmV3VmFsOmFueSl7XHJcbiAgICAgIGZ1bmN0aW9uIGlzRGF0ZSAodmFsdWU6YW55KSB7XHJcbiAgICAgICAgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgRGF0ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZnVuY3Rpb24gRk9STUFUX0lTT19wYXJzZShkOmFueSkgeyAvLyBUaGlzIGZ1bmN0aW9uIHdhcyBhZGRlZCBmb3IgQ1JNLiBDUk0gZGF0ZXMgc2hvdWxkIGJlIElTT1xyXG4gICAgICAgICAgdmFyIGRhdGVJc28gPSBkLnRvSVNPU3RyaW5nKCk7XHJcbiAgICAgICAgICB2YXIgZGF0ZUlzb0FyciA9IGRhdGVJc28uc3BsaXQoXCJUXCIpO1xyXG4gICAgICAgICAgZGF0ZUlzbyA9IGRhdGVJc29BcnJbMF0gKyBcIiBcIiArIGRhdGVJc29BcnJbMV07XHJcbiAgICAgICAgICBkYXRlSXNvID0gZGF0ZUlzby5zdWJzdHIoMCwgMTkpO1xyXG4gICAgICAgICAgcmV0dXJuIGRhdGVJc287XHJcbiAgICAgICAgfVxyXG4gICAgICBmdW5jdGlvbiBwYXJzZVZhbHVlKGtleTphbnksIHZhbHVlOmFueSl7XHJcbiAgICAgICAgbGV0IHBocmFzZSA9IFwiXCI7XHJcbiAgICAgICAgLy9pZiAodGhpcy5wYXJhbUNvbmZpZy5ERUJVR19GTEFHKSBjb25zb2xlLmxvZyhcImlzRGF0ZTpcIiAsIGlzRGF0ZSAodmFsdWUpLCB2YWx1ZSk7XHJcblxyXG4gICAgICAgIGlmIChpc0RhdGUgKHZhbHVlKSl7XHJcbiAgICAgICAgICAgIC8vdmFsdWUgPSBnZXREYXRlKHZhbHVlKTtcclxuICAgICAgICAgICAgLy92YWx1ZSA9IEZPUk1BVF9JU09fcGFyc2UodmFsdWUpO1xyXG4gICAgICAgICAgICB2YWx1ZSA9IHZhbHVlLnRvSVNPU3RyaW5nKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnIClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAvLyBpdCdzIGEgc3RyaW5nXHJcbiAgICAgICAgICBpZiAodmFsdWUgIT0gXCJcIiAmJiB2YWx1ZSAhPSBudWxsIClcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgbGV0IG9wZXJhdG9ycyA9IFwiPD4hPVwiXHJcbiAgICAgICAgICAgIGxldCBvcGVyYXRvclZhbCA9IFwiXCI7XHJcbiAgICAgICAgICAgIGxldCB0cmltZWVkVmFsID0gdmFsdWUudHJpbSgpO1xyXG4gICAgICAgICAgICBsZXQgZmlyc3RDaGFyID0gdHJpbWVlZFZhbC5jaGFyQXQoMCk7XHJcbiAgICAgICAgICAgIGxldCBuID0gb3BlcmF0b3JzLnNlYXJjaChmaXJzdENoYXIpO1xyXG4gICAgICAgICAgICBpZiAoIG4gIT0gLTEpe1xyXG4gICAgICAgICAgICAgIGlmIChmaXJzdENoYXIgPT0gXCJ8XCIpXHJcbiAgICAgICAgICAgICAgICBvcGVyYXRvclZhbCA9IFwiID0gJ1wiICArIHZhbHVlICsgXCInIFwiO1xyXG4gICAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAgICAgIG9wZXJhdG9yVmFsID0gdmFsdWU7XHJcblxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYgKCB2YWx1ZS50b1VwcGVyQ2FzZSgpLnNlYXJjaChcIiVcIikgIT0gLTEpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICBvcGVyYXRvclZhbCA9IFwiIGxpa2UgJ1wiICArIHZhbHVlICsgXCInIFwiO1xyXG4gICAgICAgICAgICAgIC8vaWYgKHRoaXMucGFyYW1Db25maWcuREVCVUdfRkxBRykgY29uc29sZS5sb2coXCJvcGVyYXRvclZhbDpcIisgb3BlcmF0b3JWYWwpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgb3BlcmF0b3JWYWwgPSBcIiA9ICdcIiAgKyB2YWx1ZSArIFwiJyBcIjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBwaHJhc2UgPSBrZXkgKyBlbmNvZGVVUklDb21wb25lbnQob3BlcmF0b3JWYWwpO1xyXG4gICAgICAgICAgICAvL3BocmFzZSA9IGtleSArIG9wZXJhdG9yVmFsO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNle1xyXG4gICAgICAgIC8vIGl0J3Mgc29tZXRoaW5nIGVsc2VcclxuICAgICAgICAgIGxldCBvcGVyYXRvclZhbCA9IFwiID0gJ1wiICArIHZhbHVlICsgXCInIFwiO1xyXG4gICAgICAgICAgcGhyYXNlID0ga2V5ICsgZW5jb2RlVVJJQ29tcG9uZW50KG9wZXJhdG9yVmFsKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBwaHJhc2U7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGxldCB3aGVyZVBocmFzZSA9IFwiXCI7XHJcbiAgICAgICAgbGV0IHdoZXJlQ2xhdXNlID0gXCJcIjtcclxuICAgICAgICBpZiAodGhpcy5wYXJhbUNvbmZpZy5ERUJVR19GTEFHKSBjb25zb2xlLmxvZyhcImZvcm1hdFdoZXJlOlwiKVxyXG4gICAgICAgIGlmICh0aGlzLnBhcmFtQ29uZmlnLkRFQlVHX0ZMQUcpIGNvbnNvbGUubG9nKE5ld1ZhbClcclxuICAgICAgICBPYmplY3Qua2V5cyhOZXdWYWwpLmZvckVhY2goZnVuY3Rpb24oa2V5KSB7XHJcbiAgICAgICAgICAgIGxldCB2YWx1ZSA9IE5ld1ZhbFtrZXldO1xyXG4gICAgICAgICAgICAvL2lmICh0aGlzLnBhcmFtQ29uZmlnLkRFQlVHX0ZMQUcpIGNvbnNvbGUubG9nKGtleSArIFwiOlwiICsgdmFsdWUpO1xyXG4gICAgICAgICAgICBpZiAoICh0eXBlb2YgdmFsdWUgIT09IFwidW5kZWZpbmVkXCIgKSAmJiAodmFsdWUgIT09IFwiXCIgKSAmJiAodmFsdWUgIT09IG51bGwpIClcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgIGxldCBwaHJhc2UgPSBwYXJzZVZhbHVlKGtleSwgdmFsdWUpO1xyXG5cclxuICAgICAgICAgICAgICBpZiAod2hlcmVQaHJhc2UgPT0gXCJcIilcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB3aGVyZVBocmFzZSA9IHdoZXJlUGhyYXNlICsgICBwaHJhc2U7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgd2hlcmVQaHJhc2UgPSB3aGVyZVBocmFzZSArIFwiIGFuZCBcIiArIHBocmFzZTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICBpZiAod2hlcmVQaHJhc2UgIT0gXCJcIilcclxuICAgICAgICAgICAgd2hlcmVDbGF1c2UgPSBcIiZfV0hFUkU9XCIgKyB3aGVyZVBocmFzZTtcclxuICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgIHdoZXJlQ2xhdXNlID0gXCImX1dIRVJFPVwiO1xyXG5cclxuICAgICAgICBpZiAodGhpcy5wYXJhbUNvbmZpZy5ERUJVR19GTEFHKSBjb25zb2xlLmxvZyhcIndoZXJlQ2xhdXNlOlwiICsgd2hlcmVDbGF1c2UpO1xyXG4gICAgICAgIHJldHVybiB3aGVyZUNsYXVzZTtcclxuICAgIH1cclxuXHJcbiAgcHVibGljIGNoZWNrREJMb2ModGhlVVJMOmFueSkge1xyXG4gICAgXHJcbiAgICAgIGxldCBwYXJhbUNvbmZpZyA9IGdldFBhcmFtQ29uZmlnKCk7XHJcbiAgICAgIGlmICh0aGlzLnBhcmFtQ29uZmlnLkRCTG9jICE9IFwiXCIpe1xyXG4gICAgICAvL2xldCB1c2VyTmFtZSA9IHRoaXMuc2Vzc2lvblBhcmFtcy5VU0VSTkFNRTtcclxuICAgICAgICB0aGVVUkwgPSB0aGVVUkwgKyBcIiZEQkxvYz1cIiArIHRoaXMucGFyYW1Db25maWcuREJMb2M7XHJcbiAgICAgIFxyXG4gICAgfVxyXG4gICAgaWYgKHRoaXMucGFyYW1Db25maWcuREVCVUdfRkxBRykgY29uc29sZS5sb2coXCJ0aGVVUkw6XCIsIHRoZVVSTCk7XHJcblxyXG4gICAgcmV0dXJuIHRoZVVSTDtcclxuICB9XHJcbiAgXHJcbiAgcHVibGljIGZldGNoKG9iamVjdDphbnksIHF1ZXJ5TmFtZTogc3RyaW5nKTogT2JzZXJ2YWJsZTxHcmlkRGF0YVJlc3VsdD4ge1xyXG4gICAgICAgIC8vY29uc3QgcXVlcnlTdHIgPSBgJHt0b09EYXRhU3RyaW5nKHN0YXRlKX0mJGNvdW50PXRydWVgO1xyXG4gICAgICAgIGNvbnN0IHF1ZXJ5U3RyID0gYGA7XHJcbiAgICAgICAgdGhpcy5sb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgICBsZXQgdGhlVVJMID0gYCR7dGhpcy5CQVNFX1VSTH0ke3F1ZXJ5TmFtZX1gO1xyXG4gICAgICAgIHRoZVVSTCA9IHRoaXMuY2hlY2tEQkxvYyh0aGVVUkwpO1xyXG5cclxuICAgICAgXHJcbiAgICAgICAgdGhpcy5odHRwT3B0aW9ucyA9IHtcclxuICAgICAgICAgIGhlYWRlcnM6IG5ldyBIdHRwSGVhZGVycyh7XHJcbiAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXHJcbiAgICAgICAgICAgICdhdXRob3JpemF0aW9uJzogdGhpcy5TdHJBdXRoXHJcblxyXG4gICAgICAgICAgfSlcclxuICAgICAgICB9O1xyXG4gICAgICAgIHJldHVybiB0aGlzLmh0dHBcclxuICAgICAgLmdldChgJHt0aGVVUkx9YCwgdGhpcy5odHRwT3B0aW9ucylcclxuICAgICAgICAgICAgLnBpcGUoXHJcbiAgICAgICAgICAgICAgICBjYXRjaEVycm9yKChlcnIpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhyb3dFcnJvcihlcnIpO1xyXG4gICAgICAgICAgICAgICAgICB9KSxcclxuICAgICAgICBtYXAoKHJlc3BvbnNlOmFueSkgPT4gKDxHcmlkRGF0YVJlc3VsdD57IGRhdGE6IHJlc3BvbnNlWydkYXRhJ10gfVxyXG4gICAgICAgICAgICAgICAgICApKSxcclxuICAgICAgICAgICAgICAgIHRhcChkYXRhID0+IHtcclxuICAgICAgICAgICAgICAgICAgaWYgKHRoaXMucGFyYW1Db25maWcuREVCVUdfRkxBRykgY29uc29sZS5sb2coXCJzdGF0dXMgZGF0YTogXCIsIGRhdGEpO1xyXG4gICAgICAgICAgICAgICAgICB0aGlzLmxvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgaWYgKHRoaXMucGFyYW1Db25maWcuREVCVUdfRkxBRykgY29uc29sZS5sb2coXCJ0ZXN0OnRoaXMucnVsZXNQb3N0UXVlcnlEZWZcIiwgdGhpcy5ydWxlc1Bvc3RRdWVyeURlZilcclxuICAgICAgICAgICAgbGV0IHN0YXR1c1JlYzphbnkgPSB7fTtcclxuICAgICAgICAgIHN0YXR1c1JlYyA9IHRoaXMuY2hlY2tSdWxlcyhvYmplY3QsIHRoaXMucnVsZXNQb3N0UXVlcnlEZWYsIGRhdGEsXCJQT1NUX1FVRVJZXCIpO1xyXG4gICAgICAgICAgaWYgKHRoaXMucGFyYW1Db25maWcuREVCVUdfRkxBRykgY29uc29sZS5sb2coXCJzdGF0dXNSZWM6cG9zdDpQT1NUX1FVRVJZOmZldGNoOlwiLCBzdGF0dXNSZWMsIHN0YXR1c1JlY1snc3RhdHVzJ10pO1xyXG4gICAgICAgICAgaWYgKHN0YXR1c1JlY1snc3RhdHVzJ10gID09IC0xKXtcclxuICAgICAgICAgICAgdGhpcy5zaG93Tm90aWZpY2F0aW9uIChcImVycm9yXCIsXCJSdWxlOlwiICsgc3RhdHVzUmVjWydtc2cnXSApO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICB9KVxyXG4gICAgICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgLyogcHVibGljIHJlbW92ZSggcGFnZTogYW55KTpPYnNlcnZhYmxlPGFueT4ge1xyXG4gICAgICAgIHRoaXMuZGVsZXRlKHBhZ2UpXHJcbiAgICAgICAgICAgLnN1YnNjcmliZSgoeDphbnkpID0+IHN1cGVyLm5leHQoeCkpO1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuIDA7XHJcbiAgICB9XHJcbiovXHJcbnB1YmxpYyBkZWxldGUoUGFnZTogc3RyaW5nKTogT2JzZXJ2YWJsZTxHcmlkRGF0YVJlc3VsdD4ge1xyXG4gICAgICAgIC8vY29uc3QgcXVlcnlTdHIgPSBgJHt0b09EYXRhU3RyaW5nKHN0YXRlKX0mJGNvdW50PXRydWVgO1xyXG4gICAgICAgIGNvbnN0IHF1ZXJ5U3RyID0gYGA7XHJcbiAgICAgICAgdGhpcy5sb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgICBsZXQgdGhlVVJMID0gYCR7dGhpcy5CQVNFX1VSTH0ke1BhZ2V9YDtcclxuICAgICAgICB0aGVVUkwgPSB0aGlzLmNoZWNrREJMb2ModGhlVVJMKTtcclxuXHJcbiAgICAgICAgdGhpcy5odHRwT3B0aW9ucyA9IHtcclxuICAgICAgICAgIGhlYWRlcnM6IG5ldyBIdHRwSGVhZGVycyh7XHJcbiAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXHJcbiAgICAgICAgICAgICdhdXRob3JpemF0aW9uJzogdGhpcy5TdHJBdXRoXHJcblxyXG4gICAgICAgICAgfSlcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzLmh0dHBcclxuICAgICAgICAgICAgLmRlbGV0ZTxhbnk+KGAke3RoZVVSTH1gLCB0aGlzLmh0dHBPcHRpb25zKVxyXG4gICAgICAgICAgICAucGlwZShcclxuICAgICAgICAgICAgICAgIGNhdGNoRXJyb3IoKGVycikgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0aHJvd0Vycm9yKGVycik7XHJcbiAgICAgICAgICAgICAgICAgIH0pLFxyXG5cclxuICAgICAgICBtYXAoKHJlc3BvbnNlOmFueSkgPT4gKDxHcmlkRGF0YVJlc3VsdD57IGRhdGE6IHJlc3BvbnNlWydkYXRhJ10gfVxyXG4gICAgICAgICAgICAgICAgKSksXHJcblxyXG4gICAgICAgICAgICAgICAgdGFwKCgpID0+IHRoaXMubG9hZGluZyA9IGZhbHNlKVxyXG4gICAgICAgICAgICApO1xyXG4gICAgfVxyXG4gIHB1YmxpYyBwb3N0X2RlbGV0ZShQYWdlOiBzdHJpbmcsIEJvZHk6IGFueSk6IE9ic2VydmFibGU8R3JpZERhdGFSZXN1bHQ+IHtcclxuICAgICAgICAvL2NvbnN0IHF1ZXJ5U3RyID0gYCR7dG9PRGF0YVN0cmluZyhzdGF0ZSl9JiRjb3VudD10cnVlYDtcclxuICAgICAgICBjb25zdCBxdWVyeVN0ciA9IGBgO1xyXG4gICAgICAgIHRoaXMubG9hZGluZyA9IHRydWU7XHJcbiAgICAgICAgLy9pZiAodGhpcy5wYXJhbUNvbmZpZy5ERUJVR19GTEFHKSBjb25zb2xlLmxvZyhcInBvc3Q6UGFnZTpcIixQYWdlLFwiIEJvZHk6XCIsQm9keSlcclxuXHJcbiAgICAgICAgbGV0IHRoZVVSTCA9IGAke3RoaXMuQkFTRV9VUkx9JHtQYWdlfWA7XHJcbiAgICAgICAgdGhpcy5odHRwT3B0aW9ucyA9IHtcclxuICAgICAgICAgIGhlYWRlcnM6IG5ldyBIdHRwSGVhZGVycyh7XHJcbiAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXHJcbiAgICAgICAgICAgICdhdXRob3JpemF0aW9uJzogdGhpcy5TdHJBdXRoXHJcblxyXG4gICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICAgICAgLy9pZiAodGhpcy5wYXJhbUNvbmZpZy5ERUJVR19GTEFHKSBjb25zb2xlLmxvZyhcInRoaXMuU3RyQXV0aDpcIiArIHRoaXMuU3RyQXV0aCk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cFxyXG4gICAgICAgICAgICAucG9zdDxhbnk+KGAke3RoZVVSTH1gLCBCb2R5LCB0aGlzLmh0dHBPcHRpb25zKVxyXG4gICAgICAgICAgICAucGlwZShcclxuICAgICAgICAgICAgICAgIGNhdGNoRXJyb3IoKGVycikgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0aHJvd0Vycm9yKGVycik7XHJcbiAgICAgICAgICAgICAgICAgIH0pLFxyXG5cclxuICAgICAgICBtYXAoKHJlc3BvbnNlOmFueSkgPT4gKDxHcmlkRGF0YVJlc3VsdD57IGRhdGE6IHJlc3BvbnNlWydkYXRhJ10gfVxyXG4gICAgICAgICAgICAgICAgKSksXHJcbiAgICAgICAgICAgICAgICB0YXAoZGF0YSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgIGlmICh0aGlzLnBhcmFtQ29uZmlnLkRFQlVHX0ZMQUcpIGNvbnNvbGUubG9nKFwic3RhdHVzIGRhdGE6XCIsIGRhdGEpO1xyXG4gICAgICAgICAgICAgICAgICB0aGlzLmxvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICB9KVxyXG5cclxuXHJcbiAgICAgICAgICAgICk7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgc2hvd0RhaWxvZ0VycihlcnJvcil7XHJcbiAgICAgIGxldCBNc2cgPSBlcnJvci5lcnJvcjtcclxuICAgICAgLy9jb25zb2xlLmxvZyhcIk1zZzpcIiwgTXNnKTtcclxuICAgICAgbGV0IHBvc2l0aW9uID0gTXNnLnNlYXJjaChcIlVOSVFVRSBjb25zdHJhaW50XCIpO1xyXG4gICAgICBpZiAocG9zaXRpb24gIT0gLTEgKVxyXG4gICAgICAgIE1zZyA9IHRoaXMuZ2V0TkxTKFtdLCdBTFJFQURZX0VYSVNUUycsJ1JlY29yZCBhbHJlYWR5IGV4aXN0cycpXHJcbiAgICAgIHZhciBkaWFsb2dTdHJ1YyA9IHtcclxuICAgICAgICBtc2c6IE1zZyxcclxuICAgICAgICB0aXRsZTogXCJFcnJvclwiLFxyXG4gICAgICAgIGluZm86IG51bGwsXHJcbiAgICAgICAgb2JqZWN0OiB0aGlzLFxyXG4gICAgICAgIGFjdGlvbjogdGhpcy5Pa0FjdGlvbnMsXHJcbiAgICAgICAgY2FsbGJhY2s6IG51bGxcclxuICAgICAgfTtcclxuICAgICAgdGhpcy5zaG93Q29uZmlybWF0aW9uKGRpYWxvZ1N0cnVjKTtcclxuICBcclxuICAgIH1cclxuICBwdWJsaWMgc3luY0ZsYWcgPSAwO1xyXG4gIHB1YmxpYyBwb3N0KG9iamVjdDphbnksIFBhZ2U6IHN0cmluZywgQm9keTogYW55KTogT2JzZXJ2YWJsZTxHcmlkRGF0YVJlc3VsdD4ge1xyXG4gICAgICAvL2NvbnN0IHF1ZXJ5U3RyID0gYCR7dG9PRGF0YVN0cmluZyhzdGF0ZSl9JiRjb3VudD10cnVlYDtcclxuICAgICAgY29uc3QgcXVlcnlTdHIgPSBgYDtcclxuICAgICAgdGhpcy5sb2FkaW5nID0gdHJ1ZTtcclxuICAgIC8vaWYgKHRoaXMucGFyYW1Db25maWcuREVCVUdfRkxBRykgXHJcbiAgICAvL2NvbnNvbGUubG9nKFwicG9zdCA6UGFnZTpcIixQYWdlLFwiIEJvZHk6XCIsQm9keSlcclxuICAgIC8vIGlmIChQYWdlPT1cIlwiICYmIEJvZHkubGVuZ3RoID09IDApXHJcbiAgICAvLyAgIGNvbnNvbGUubG9nKFwicG9zdCBlbXB0eTpQYWdlOlwiLFBhZ2VbJ2R1bSddLmxlbmd0aCxcIiBCb2R5OlwiLEJvZHkpXHJcbiAgICBsZXQgc3RhdHVzUmVjOmFueSA9IHt9O1xyXG4gICAgc3RhdHVzUmVjID0gdGhpcy5jaGVja1J1bGVzKG9iamVjdCwgdGhpcy5ydWxlc1ByZVF1ZXJ5RGVmLCBCb2R5LFwiUFJFX1FVRVJZXCIpO1xyXG4gICAgaWYgKHRoaXMucGFyYW1Db25maWcuREVCVUdfRkxBRykgY29uc29sZS5sb2coXCJzdGF0dXNSZWM6cG9zdDpQUkVfUVVFUllcIiwgc3RhdHVzUmVjLCBzdGF0dXNSZWNbJ3N0YXR1cyddKTtcclxuICAgIGlmIChzdGF0dXNSZWNbJ3N0YXR1cyddICA9PSAtMSl7XHJcbiAgICAgIGlmICh0aGlzLnBhcmFtQ29uZmlnLkRFQlVHX0ZMQUcpIGNvbnNvbGUubG9nKFwic3RhdHVzUmVjOiBmb3VuZCAtMVwiKTtcclxuICAgICAgdGhpcy5zaG93Tm90aWZpY2F0aW9uIChcImVycm9yXCIsXCJSdWxlOlwiICsgc3RhdHVzUmVjWydtc2cnXSApO1xyXG4gICAgICBCb2R5WzBdLl9RVUVSWSA9IFwiXCI7XHJcbiAgICB9XHJcblxyXG4gICAgICBsZXQgdGhlVVJMID0gYCR7dGhpcy5CQVNFX1VSTH0ke1BhZ2V9YDtcclxuICAgICAgdGhlVVJMID0gdGhpcy5jaGVja0RCTG9jKHRoZVVSTCk7XHJcbiAgICAgIHRoaXMuaHR0cE9wdGlvbnMgPSB7XHJcbiAgICAgICAgaGVhZGVyczogbmV3IEh0dHBIZWFkZXJzKHtcclxuICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXHJcbiAgICAgICAgICAnYXV0aG9yaXphdGlvbic6IHRoaXMuU3RyQXV0aFxyXG5cclxuICAgICAgICB9KVxyXG4gICAgICB9XHJcbiAgICAgIGNvbnNvbGUubG9nKFwicG9zdDp0aGVVUkw6XCIsIHRoZVVSTCwgXCJCb2R5OlwiLCBCb2R5KTtcclxuICAgICAgLy9pZiAodGhpcy5wYXJhbUNvbmZpZy5ERUJVR19GTEFHKSBjb25zb2xlLmxvZyhcInRoaXMuU3RyQXV0aDpcIiAsIHRoaXMuU3RyQXV0aCAsIHRoZVVSTCk7XHJcbiAgICAgIC8vaWYgKHRoaXMucGFyYW1Db25maWcuREVCVUdfRkxBRykgY29uc29sZS5sb2coXCJ0aGlzLlN0ckF1dGg6IHdpdGggVVJMXCIgLCB0aGlzLlN0ckF1dGggLCB0aGVVUkwpO1xyXG4gICAgICByZXR1cm4gdGhpcy5odHRwXHJcbiAgICAgICAgICAucG9zdDxhbnk+KGAke3RoZVVSTH1gLCBCb2R5LCB0aGlzLmh0dHBPcHRpb25zKVxyXG4gICAgICAgICAgLnBpcGUoXHJcbiAgICAgICAgICAgICAgY2F0Y2hFcnJvcigoZXJyKSA9PiB7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhcInN0YXR1c1JlY1snbXNnJ10gOlwiLCBzdGF0dXNSZWNbJ21zZyddLCBcIiBlcnIuZXJyb3IgOlwiLCBlcnIuZXJyb3IgIClcclxuICAgICAgICAgIGlmICggKHR5cGVvZiBzdGF0dXNSZWNbJ21zZyddICE9IFwidW5kZWZpbmVkXCIpICYmIChzdGF0dXNSZWNbJ21zZyddICE9IFwiXCIpKSB7XHJcbiAgICAgICAgICAvL2lmICggKHN0YXR1c1JlY1snbXNnJ10gIT0gXCJcIikpIHtcclxuICAgICAgICAgICAgaWYgKHR5cGVvZiBlcnIuZXJyb3IgPT0gXCJ1bmRlZmluZWRcIil7XHJcbiAgICAgICAgICAgICAgZXJyID0gc3RhdHVzUmVjWydtc2cnXTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgICAgZXJyLmVycm9yLmVycm9yID0gIHN0YXR1c1JlY1snbXNnJ107XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNob3dEYWlsb2dFcnIoZXJyLmVycm9yKTtcclxuICAgICAgICAgICAgICAgICAgcmV0dXJuIHRocm93RXJyb3IoZXJyKTtcclxuICAgICAgICAgICAgICAgIH0pLFxyXG5cclxuICAgICAgICBtYXAoKHJlc3BvbnNlOmFueSkgPT4gKDxHcmlkRGF0YVJlc3VsdD57IGRhdGE6IHJlc3BvbnNlWydkYXRhJ10gfVxyXG4gICAgICAgICAgICAgICkpLFxyXG4gICAgICAgICAgICAgIHRhcChkYXRhID0+IHtcclxuICAgICAgICAgICAgICAgIC8vaWYgKHRoaXMucGFyYW1Db25maWcuREVCVUdfRkxBRykgY29uc29sZS5sb2coXCJzdGF0dXMgZGF0YTpcIiwgZGF0YSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmxvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgIGlmICh0aGlzLnBhcmFtQ29uZmlnLkRFQlVHX0ZMQUcpIGNvbnNvbGUubG9nKFwidGVzdDp0aGlzLnJ1bGVzUG9zdFF1ZXJ5RGVmXCIsIHRoaXMucnVsZXNQb3N0UXVlcnlEZWYpXHJcbiAgICAgICAgICAgICAgICB0aGlzLnN5bmNGbGFnID0gMDtcclxuICAgICAgICAgIGxldCBzdGF0dXNSZWM6YW55ID0ge307XHJcbiAgICAgICAgICAgICAgICBzdGF0dXNSZWMgPSB0aGlzLmNoZWNrUnVsZXMob2JqZWN0LCB0aGlzLnJ1bGVzUG9zdFF1ZXJ5RGVmLCBkYXRhLFwiUE9TVF9RVUVSWVwiKTtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLnBhcmFtQ29uZmlnLkRFQlVHX0ZMQUcpIGNvbnNvbGUubG9nKFwic3RhdHVzUmVjOnBvc3Q6UE9TVF9RVUVSWVwiLCBzdGF0dXNSZWMsIHN0YXR1c1JlY1snc3RhdHVzJ10pXHJcbiAgICAgICAgICAgICAgICBpZiAoc3RhdHVzUmVjWydzdGF0dXMnXSAgPT0gLTEpe1xyXG4gICAgICAgICAgICAgICAgICB0aGlzLnNob3dOb3RpZmljYXRpb24gKFwiZXJyb3JcIixcIlJ1bGU6XCIgKyBzdGF0dXNSZWNbJ21zZyddICk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG5cclxuXHJcbiAgICAgICAgfSlcclxuXHJcblxyXG4gICAgICAgICAgKTtcclxuICB9XHJcbiBcclxuICBcclxuICAgIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbiAgcHVibGljIHBvc3RVcGxvYWQoUGFnZTogc3RyaW5nLCBCb2R5OiBhbnkpOiBPYnNlcnZhYmxlPEdyaWREYXRhUmVzdWx0PiB7XHJcbiAgICAgIC8vY29uc3QgcXVlcnlTdHIgPSBgJHt0b09EYXRhU3RyaW5nKHN0YXRlKX0mJGNvdW50PXRydWVgO1xyXG4gICAgICBjb25zdCBxdWVyeVN0ciA9IGBgO1xyXG4gICAgICB0aGlzLmxvYWRpbmcgPSB0cnVlO1xyXG5cclxuICAgICAgbGV0IHRoZVVSTCA9IFBhZ2U7XHJcbiAgICAgIHRoaXMuaHR0cE9wdGlvbnMgPSB7XHJcbiAgICAgICAgaGVhZGVyczogbmV3IEh0dHBIZWFkZXJzKHtcclxuICAgICAgICAgICdhdXRob3JpemF0aW9uJzogdGhpcy5TdHJBdXRoXHJcblxyXG4gICAgICAgIH0pXHJcbiAgICAgIH1cclxuICAgICAgLy9pZiAodGhpcy5wYXJhbUNvbmZpZy5ERUJVR19GTEFHKSBjb25zb2xlLmxvZyhcInRoaXMuU3RyQXV0aDpcIiArIHRoaXMuU3RyQXV0aCk7XHJcbiAgICAgIHJldHVybiB0aGlzLmh0dHBcclxuICAgICAgICAgIC5wb3N0PGFueT4oYCR7dGhlVVJMfWAsIEJvZHksIHRoaXMuaHR0cE9wdGlvbnMpXHJcbiAgICAgICAgICAucGlwZShcclxuICAgICAgICAgICAgICBjYXRjaEVycm9yKChlcnIpID0+IHtcclxuICAgICAgICAgICAgICAgICAgcmV0dXJuIHRocm93RXJyb3IoZXJyKTtcclxuICAgICAgICAgICAgICAgIH0pLFxyXG5cclxuICAgICAgICBtYXAoKHJlc3BvbnNlOmFueSkgPT4gKDxHcmlkRGF0YVJlc3VsdD57IGRhdGE6IHJlc3BvbnNlWydkYXRhJ10gfVxyXG4gICAgICAgICAgICAgICkpLFxyXG5cclxuICAgICAgICAgICAgICB0YXAoKCkgPT4gdGhpcy5sb2FkaW5nID0gZmFsc2UpXHJcbiAgICAgICAgICApO1xyXG4gIH1cclxuICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5cclxuICB1cGxvYWRGaWxlKHBhZ2U6IGFueSwgZmlsZXNTZXQ6IFNldDxGaWxlPiwgaWQ6IGFueSk6IGFueSB7XHJcbiAgICBmaWxlc1NldC5mb3JFYWNoKGZpbGUgPT4ge1xyXG4gICAgICAvLyBjcmVhdGUgYSBuZXcgbXVsdGlwYXJ0LWZvcm0gZm9yIGV2ZXJ5IGZpbGVcclxuICAgICAgY29uc3QgZm9ybWRhdGE6IEZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKCk7XHJcbiAgICAgIGZvcm1kYXRhLmFwcGVuZCgnZmlsZScsIGZpbGUpO1xyXG4gICAgICBmb3JtZGF0YS5hcHBlbmQoJ2lkJywgaWQpO1xyXG4gICAgICBpZiAodGhpcy5wYXJhbUNvbmZpZy5ERUJVR19GTEFHKSBjb25zb2xlLmxvZyhcInVwbG9hZEZpbGUgcGFnZTpcIiArIHBhZ2UpXHJcbiAgICAgIGxldCBhcGlVUkwgPSB0aGlzLlNFUlZFUl9VUkwgKyAnL2FwaS9hdHQnICsgcGFnZTtcclxuICAgICAgaWYgKHRoaXMucGFyYW1Db25maWcuREVCVUdfRkxBRykgY29uc29sZS5sb2coXCJhcGlVUkw6XCIgKyBhcGlVUkwpO1xyXG5cclxuICAgICAgICBpZiAodGhpcy5wYXJhbUNvbmZpZy5ERUJVR19GTEFHKSBjb25zb2xlLmxvZyhmb3JtZGF0YSk7XHJcbiAgICAgIC8vZm9ybWRhdGEuZm9yRWFjaChlbnRyaWVzID0+IGNvbnNvbGUubG9nKEpTT04uc3RyaW5naWZ5KGVudHJpZXMpKSk7XHJcblxyXG4gICAgICAgIHRoaXMucG9zdFVwbG9hZChhcGlVUkwsIGZvcm1kYXRhKS5zdWJzY3JpYmUocmVzdWx0ID0+IHtcclxuICAgICAgICBpZiAodGhpcy5wYXJhbUNvbmZpZy5ERUJVR19GTEFHKSBjb25zb2xlLmxvZygncmVzdWx0JywgcmVzdWx0KTtcclxuICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcblxyXG5cclxuIH1cclxuXHJcbiAgdXBsb2FkRmlsZU9sZChmaWxlOiBGaWxlKTogYW55IHtcclxuICAgIGNvbnN0IGZvcm1kYXRhOiBGb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSgpO1xyXG4gICAgZm9ybWRhdGEuYXBwZW5kKCdmaWxlJywgZmlsZSk7ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vdGhlIHVwbG9hZGVkIGZpbGUgY29udGVudFxyXG4gICAgZm9ybWRhdGEuYXBwZW5kKCdkb2N1bWVudFZlcnNpb25JZCcsICcxMjMnKTsgICAgICAgLy9JIG5lZWQgdG8gcGFzcyBzb21lIGFkZGl0aW9uYWwgaW5mbyB0byB0aGUgc2VydmVyIGJlc2lkZXMgdGhlIEZpbGUgZGF0YVxyXG4gICAgbGV0IGFwaVVSTCA9IHRoaXMuU0VSVkVSX1VSTCArICcvYXBpP3VwbG9hZD15JztcclxuICAgIGlmICh0aGlzLnBhcmFtQ29uZmlnLkRFQlVHX0ZMQUcpIGNvbnNvbGUubG9nKFwiYXBpVVJMOlwiICsgYXBpVVJMKTtcclxuXHJcbiAgICBpZiAodGhpcy5wYXJhbUNvbmZpZy5ERUJVR19GTEFHKSBjb25zb2xlLmxvZyhmb3JtZGF0YSk7XHJcbiAgICBmb3JtZGF0YS5mb3JFYWNoKGVudHJpZXMgPT4gY29uc29sZS5sb2coSlNPTi5zdHJpbmdpZnkoZW50cmllcykpKTtcclxuXHJcblxyXG4gICAgLy9jb25zdCBhcGlVUkwgPSB0aGlzLmFwaV9wYXRoICsgJ1VwbG9hZCc7ICAgICAvL2NhbGxpbmcgaHR0cDovL2xvY2FsaG9zdDo1MjMzMy9hcGkvVXBsb2FkQ29udHJvbGxlclxyXG5cclxuICAgIHRoaXMucG9zdFVwbG9hZChhcGlVUkwsIGZvcm1kYXRhKS5zdWJzY3JpYmUocmVzdWx0ID0+IHtcclxuICAgICAgaWYgKHRoaXMucGFyYW1Db25maWcuREVCVUdfRkxBRykgY29uc29sZS5sb2coJ3Jlc3VsdCcsIHJlc3VsdCk7XHJcbiAgICB9KTtcclxuICAgIC8qY29uc3QgdXBsb2FkUmVxID0gbmV3IEh0dHBSZXF1ZXN0KCdQT1NUJywgYXBpVVJMLCBmb3JtZGF0YSwge1xyXG4gICAgICAgcmVwb3J0UHJvZ3Jlc3M6IHRydWVcclxuICAgIH0pO1xyXG4gICAgdGhpcy5odHRwY2xpZW50LnJlcXVlc3QodXBsb2FkUmVxKS5zdWJzY3JpYmUoZXZlbnQgPT4ge1xyXG4gICAgICAgaWYgKGV2ZW50LnR5cGUgPT09IEh0dHBFdmVudFR5cGUuVXBsb2FkUHJvZ3Jlc3MpIHtcclxuICAgICAgICAgICB0aGlzLnByb2dyZXNzID0gTWF0aC5yb3VuZCgxMDAgKiBldmVudC5sb2FkZWQgLyBldmVudC50b3RhbCk7XHJcbiAgICAgICB9XHJcbiAgIH0pO1xyXG4gICAqL1xyXG5cclxuIH1cclxuXHJcblxyXG4gIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbiAgICBwdWJsaWMgaGFzQ2hhbmdlcygpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gQm9vbGVhbih0aGlzLmRlbGV0ZWRJdGVtcy5sZW5ndGggfHwgdGhpcy51cGRhdGVkSXRlbXMubGVuZ3RoIHx8IHRoaXMuY3JlYXRlZEl0ZW1zLmxlbmd0aCk7XHJcbiAgICB9XHJcbiAgcHJpdmF0ZSBhZGRUb0JvZHkoTmV3VmFsOmFueSwgQm9keTphbnkpIHtcclxuICAgICAgICBCb2R5LnB1c2goTmV3VmFsKTtcclxuICAgICAgIC8vIGlmICh0aGlzLnBhcmFtQ29uZmlnLkRFQlVHX0ZMQUcpIGNvbnNvbGUubG9nKCdOZXdWYWwgOiBIRiBQbGVhc2UnICArIEpTT04uc3RyaW5naWZ5KE5ld1ZhbCkpO1xyXG4gICAgICAgIHJldHVybiBCb2R5O1xyXG4gICAgICB9XHJcblxyXG5cclxuXHJcblxyXG5cclxuICBwdWJsaWMgc2hvd05vdGlmaWNhdGlvbihzdHlsZU5vdGU6IGFueSwgbXNnOiBhbnkpOiB2b2lkIHtcclxuXHJcbiAgICAgIGxldCBoaWRlQWZ0ZXIgPSB0aGlzLmhpZGVBZnRlcjtcclxuXHJcbiAgICAgIGlmIChzdHlsZU5vdGUgPT0gXCJlcnJvclwiKVxyXG4gICAgICAgIGhpZGVBZnRlciA9IDUwMDA7XHJcbiAgICAgICAgdGhpcy5ub3RpZmljYXRpb25TZXJ2aWNlLnNob3coe1xyXG4gICAgICAgICAgICBjb250ZW50OiBtc2csXHJcbiAgICAgICAgICAgIGNzc0NsYXNzOiAnYnV0dG9uLW5vdGlmaWNhdGlvbicsXHJcbiAgICAgICAgICAgIGFuaW1hdGlvbjogeyB0eXBlOiAnZmFkZScsIGR1cmF0aW9uOiAyMDAgfSxcclxuICAgICAgICAgICAgcG9zaXRpb246IHsgaG9yaXpvbnRhbDogJ2NlbnRlcicsIHZlcnRpY2FsOiAnYm90dG9tJyB9LFxyXG4vLyAgICAgICAgICAgIHN0YWNraW5nOiB7IHN0YWNraW5nOiAnZG93bicgfSxcclxuICAgICAgdHlwZTogeyBzdHlsZTogc3R5bGVOb3RlLCBpY29uOiB0cnVlIH0sXHJcbiAgICAgICAgICAgIC8vY2xvc2FibGU6IHRydWUsXHJcbiAgICAgICAgICAgIGhpZGVBZnRlcjogaGlkZUFmdGVyXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgcHVibGljIGdvUmVjb3JkQWN0KHRhcmdldDogYW55LCBvYmplY3Q6IGFueSk6IHZvaWQge1xyXG5cclxuICAgICAgICBsZXQgcmVjO1xyXG5cclxuICAgIGlmIChvYmplY3QucGFyYW1Db25maWcuREVCVUdfRkxBRykgY29uc29sZS5sb2codGFyZ2V0KTtcclxuICAgIGlmIChvYmplY3QucGFyYW1Db25maWcuREVCVUdfRkxBRykgY29uc29sZS5sb2coXCJvYmplY3QuQ3VycmVudFJlYzpcIiArIG9iamVjdC5DdXJyZW50UmVjKTtcclxuICAgIGlmIChvYmplY3QucGFyYW1Db25maWcuREVCVUdfRkxBRykgY29uc29sZS5sb2cob2JqZWN0LmV4ZWN1dGVRdWVyeXJlc3VsdCk7XHJcblxyXG4gICAgaWYgKHRhcmdldCA9PSBcImZpcnN0XCIpIHtcclxuICAgICAgICAgIG9iamVjdC5DdXJyZW50UmVjID0gMDtcclxuICAgICAgICB9XHJcbiAgICBlbHNlIGlmICh0YXJnZXQgPT0gXCJsYXN0XCIpIHtcclxuICAgICAgb2JqZWN0LkN1cnJlbnRSZWMgPSBvYmplY3QuZXhlY3V0ZVF1ZXJ5cmVzdWx0LnRvdGFsIC0gMTtcclxuICAgICAgICB9XHJcbiAgICBlbHNlIGlmICh0YXJnZXQgPT0gXCJuZXh0XCIpIHtcclxuICAgICAgICAgIGlmIChvYmplY3QuQ3VycmVudFJlYyA8IG9iamVjdC5leGVjdXRlUXVlcnlyZXN1bHQudG90YWwgLSAxKVxyXG4gICAgICAgICAgb2JqZWN0LkN1cnJlbnRSZWMgPSBvYmplY3QuQ3VycmVudFJlYyArIDE7XHJcbiAgICAgICAgfVxyXG4gICAgZWxzZSBpZiAodGFyZ2V0ID09IFwicHJldlwiKSB7XHJcbiAgICAgIGlmIChvYmplY3QuQ3VycmVudFJlYyA+IDApXHJcbiAgICAgICAgICAgIG9iamVjdC5DdXJyZW50UmVjID0gb2JqZWN0LkN1cnJlbnRSZWMgLSAxO1xyXG4gICAgICAgIH1cclxuICAgICAgZWxzZSBpZiAodHlwZW9mIHRhcmdldCA9PSBcIm51bWJlclwiKSB7XHJcbiAgICAgICAgICAgICAgb2JqZWN0LkN1cnJlbnRSZWMgPSB0YXJnZXQ7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgIHJlYyA9IG9iamVjdC5leGVjdXRlUXVlcnlyZXN1bHQuZGF0YVtvYmplY3QuQ3VycmVudFJlY107XHJcbiAgICBpZiAob2JqZWN0LnBhcmFtQ29uZmlnLkRFQlVHX0ZMQUcpIGNvbnNvbGUubG9nKFwiLS0tLS0tcmVjOlwiLCByZWMpO1xyXG4gICAgaWYgKG9iamVjdC5wYXJhbUNvbmZpZy5ERUJVR19GTEFHKSBjb25zb2xlLmxvZyhvYmplY3QuZm9ybS5nZXRSYXdWYWx1ZSgpKTtcclxuICAgIGlmICh0eXBlb2YgcmVjICE9PSBcInVuZGVmaW5lZFwiKSB7XHJcbiAgICAgICAgICBvYmplY3QuZm9ybS5wYXRjaFZhbHVlKHJlYyk7XHJcbiAgICAgICAgICBvYmplY3QuZm9ybS5tYXJrQXNQcmlzdGluZSgpO1xyXG4gICAgICAgICAgb2JqZWN0LmZvcm0ubWFya0FzVW50b3VjaGVkKCk7XHJcblxyXG4gICAgICAgICAgLy9vYmplY3QuZm9ybS5yZXNldChyZWMsIHtlbWl0RXZlbnQ6IG9iamVjdC5lbWl0RXZlbnQgIT0gbnVsbCA/IG9iamVjdC5lbWl0RXZlbnQgOiB0cnVlfSk7XHJcbiAgICAgICAgICBpZiAob2JqZWN0LmRpc2FibGVFbWl0UmVhZENvbXBsZXRlZCAhPSB0cnVlKVxyXG4gICAgICAgICAgICBvYmplY3QucmVhZENvbXBsZXRlZE91dHB1dC5lbWl0KG9iamVjdC5mb3JtLmdldFJhd1ZhbHVlKCkpO1xyXG4gICAgICBpZiAob2JqZWN0LnBhcmFtQ29uZmlnLkRFQlVHX0ZMQUcpIGNvbnNvbGUubG9nKFwiQVRUOm9iamVjdC5jYWxsQmFja0Z1bmN0aW9uOlwiLCBvYmplY3QuY2FsbEJhY2tGdW5jdGlvbilcclxuICAgICAgaWYgKHR5cGVvZiBvYmplY3QuY2FsbEJhY2tGdW5jdGlvbiAhPT0gXCJ1bmRlZmluZWRcIilcclxuICAgICAgICAgICAgb2JqZWN0LmNhbGxCYWNrRnVuY3Rpb24ocmVjKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZVxyXG4gICAgICAgICAgb2JqZWN0LmNsZWFyQ29tcGxldGVkT3V0cHV0LmVtaXQoW10pO1xyXG5cclxuICAgIH1cclxuICBwdWJsaWMgZ29SZWNvcmQodGFyZ2V0OiBhbnksIG9iamVjdDphbnkpOiB2b2lkIHtcclxuICAgIGlmICh0eXBlb2Ygb2JqZWN0LmV4ZWN1dGVRdWVyeXJlc3VsdCAhPSBcInVuZGVmaW5lZFwiKSB7XHJcbiAgICAgICAgICBpZiAodGhpcy5wYXJhbUNvbmZpZy5ERUJVR19GTEFHKSBjb25zb2xlLmxvZyhvYmplY3QuZm9ybS5kaXJ0eSk7XHJcbiAgICAgIGlmIChvYmplY3QuZm9ybS5kaXJ0eSA9PSB0cnVlKSB7XHJcbiAgICAgICAgICAgIGxldCBkaWFsb2dTdHJ1YyA9IHtcclxuICAgICAgICAgICAgICBtc2c6IHRoaXMuc2F2ZUNoYW5nZXNNc2csXHJcbiAgICAgICAgICB0aXRsZTogdGhpcy5wbGVhc2VDb25maXJtTXNnLFxyXG4gICAgICAgICAgICAgIGluZm86IHRhcmdldCxcclxuICAgICAgICAgIG9iamVjdDogb2JqZWN0LFxyXG4gICAgICAgICAgYWN0aW9uOiB0aGlzLlllc05vQWN0aW9ucyxcclxuICAgICAgICAgIGNhbGxiYWNrOiB0aGlzLmdvUmVjb3JkQWN0XHJcbiAgICAgICAgfTtcclxuICAgICAgICAgICAgICB0aGlzLnNob3dDb25maXJtYXRpb24oZGlhbG9nU3RydWMpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICBlbHNlIHtcclxuICAgICAgICB0aGlzLmdvUmVjb3JkQWN0KHRhcmdldCwgb2JqZWN0KTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICB9XHJcblxyXG4gIHB1YmxpYyBzaG93Q29uZmlybWF0aW9uKGRpYWxvZ1N0cnVjOmFueSkge1xyXG4gICAgICAgIGxldCBkaWFsb2dSZXN1bHQ7XHJcbiAgICAgICAgICBjb25zdCBkaWFsb2c6IERpYWxvZ1JlZiA9IHRoaXMuZGlhbG9nU2VydmljZS5vcGVuKHtcclxuICAgICAgICAgICAgICB0aXRsZTogZGlhbG9nU3RydWMudGl0bGUsXHJcbiAgICAgICAgICAgICAgY29udGVudDogZGlhbG9nU3RydWMubXNnLFxyXG4gICAgICAgICAgICAgIGFjdGlvbnM6IGRpYWxvZ1N0cnVjLmFjdGlvbixcclxuICAgICAgICAgICAgICB3aWR0aDogNDUwLFxyXG4gICAgICAgICAgICAgIGhlaWdodDogMjAwLFxyXG4gICAgICAgICAgICAgIG1pbldpZHRoOiAyNTBcclxuICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgIGRpYWxvZy5yZXN1bHQuc3Vic2NyaWJlKChyZXN1bHQpID0+IHtcclxuICAgICAgICAgICAgICBpZiAocmVzdWx0IGluc3RhbmNlb2YgRGlhbG9nQ2xvc2VSZXN1bHQpIHtcclxuICAgICAgICAgICAgICAgICAgaWYgKHRoaXMucGFyYW1Db25maWcuREVCVUdfRkxBRykgY29uc29sZS5sb2coJ2Nsb3NlJyk7XHJcbiAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgaWYgKHRoaXMucGFyYW1Db25maWcuREVCVUdfRkxBRykgY29uc29sZS5sb2coJ2FjdGlvbicsIHJlc3VsdCk7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIGRpYWxvZ1Jlc3VsdCA9IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkocmVzdWx0KSk7XHJcbiAgICAgIGlmIChkaWFsb2dSZXN1bHQucHJpbWFyeSA9PSB0cnVlKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoZGlhbG9nU3RydWMuaGFzT3duUHJvcGVydHkoJ2NhbGxiYWNrJykpIHtcclxuICAgICAgICAgICAgICAgICAgZGlhbG9nU3RydWMuY2FsbGJhY2soZGlhbG9nU3RydWMuaW5mbywgZGlhbG9nU3RydWMub2JqZWN0KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgfVxyXG5cclxuICAgICAgLyoqKioqKioqKioqKioqKiogRm9ybSBmdW5jdGlvbnMgKioqKioqKioqKioqKiovXHJcbiAgcHVibGljIGV4ZWN1dGVRdWVyeV9mb3JtKGZvcm06IGFueSwgb2JqZWN0OmFueSkge1xyXG4gICAgICAgIGlmICh0aGlzLnBhcmFtQ29uZmlnLkRFQlVHX0ZMQUcpIGNvbnNvbGUubG9nKFwic3Rhci1zZXJ2aWNlcyBleGVjdXRlUXVlcnlfZm9ybSBvYmplY3QuZm9ybTpcIik7XHJcbiAgICBpZiAodGhpcy5wYXJhbUNvbmZpZy5ERUJVR19GTEFHKSBjb25zb2xlLmxvZyhcIm9iamVjdC5pc1NlYXJjaDpcIiArIG9iamVjdC5pc1NlYXJjaClcclxuICAgICAgICAvL2lmICh0aGlzLnBhcmFtQ29uZmlnLkRFQlVHX0ZMQUcpIGNvbnNvbGUubG9nKG9iamVjdC5mb3JtLmdldFJhd1ZhbHVlKCkpO1xyXG4gICAgICAgIC8vaWYgKHRoaXMucGFyYW1Db25maWcuREVCVUdfRkxBRykgY29uc29sZS5sb2coZm9ybS52YWx1ZSk7XHJcbiAgICBpZiAodHlwZW9mIG9iamVjdC5mb3JtICE9PSBcInVuZGVmaW5lZFwiKSB7XHJcbiAgICAgIGlmICgob2JqZWN0LmZvcm0uZGlydHkgPT0gdHJ1ZSkgJiYgKG9iamVjdC5pc1NlYXJjaCAhPSB0cnVlKSkge1xyXG4gICAgICAgICAgICBsZXQgZGlhbG9nU3RydWMgPSB7XHJcbiAgICAgICAgICAgICAgbXNnOiB0aGlzLnNhdmVDaGFuZ2VzTXNnLFxyXG4gICAgICAgICAgdGl0bGU6IHRoaXMucGxlYXNlQ29uZmlybU1zZyxcclxuICAgICAgICAgICAgICBpbmZvOiBmb3JtLFxyXG4gICAgICAgICAgb2JqZWN0OiBvYmplY3QsXHJcbiAgICAgICAgICBhY3Rpb246IHRoaXMuWWVzTm9BY3Rpb25zLFxyXG4gICAgICAgICAgY2FsbGJhY2s6IHRoaXMuZXhlY3V0ZVF1ZXJ5QWN0X2Zvcm1cclxuICAgICAgICB9O1xyXG4gICAgICAgICAgICAgIHRoaXMuc2hvd0NvbmZpcm1hdGlvbihkaWFsb2dTdHJ1Yyk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgIGVsc2Uge1xyXG4gICAgICAgIHRoaXMuZXhlY3V0ZVF1ZXJ5QWN0X2Zvcm0oZm9ybSwgb2JqZWN0KTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgdGhpcy5leGVjdXRlUXVlcnlBY3RfZm9ybShmb3JtLCBvYmplY3QpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gIC8vIHJvdXRpbmVfbmFtZSBmcm9tIDogaHR0cHM6Ly93d3cudGVsZXJpay5jb20va2VuZG8tYW5ndWxhci11aS9jb21wb25lbnRzL2RhdGVpbnB1dHMvZGF0ZXBpY2tlci9pbnRlZ3JhdGlvbi13aXRoLWpzb24vXHJcblxyXG4gIHB1YmxpYyBwYXJzZVRvRGF0ZShqc29uOiBhbnkpIHtcclxuICAgIC8vaWYgKHRoaXMucGFyYW1Db25maWcuREVCVUdfRkxBRykgY29uc29sZS5sb2coXCJqc29uOmluOlwiLCBqc29uKVxyXG4gICAgICAgIE9iamVjdC5rZXlzKGpzb24pLm1hcChrZXkgPT4ge1xyXG4gICAgICAgICAgbGV0IFZhbDEgPSBqc29uW2tleV07XHJcbiAgICAgIC8vaWYgKHRoaXMucGFyYW1Db25maWcuREVCVUdfRkxBRykgY29uc29sZS5sb2coXCJrZXk6XCIsIGtleSwgVmFsMSwgdHlwZW9mIFZhbDEpO1xyXG4gICAgICAgICAgLy9sZXQgbiA9IGtleS50b1VwcGVyQ2FzZSgpLnNlYXJjaChcIkRBVEVcIik7XHJcbiAgICAgICAgICAvL2lmIChuICE9IC0xKXtcclxuICAgICAgaWYgKHR5cGVvZiBWYWwxICE9IFwibnVtYmVyXCIpIHsgICAvL2l0IGlzIG5vdCBhIG51bWJlciwgY2hlY2sgbW9yZVxyXG4gICAgICAgIGlmICgoVmFsMSAhPSBudWxsKSAmJiAoVmFsMS5sZW5ndGggPiA3KSkge1xyXG4gICAgICAgICAgICAgIGNvbnN0IGRhdGUgPSBuZXcgRGF0ZShWYWwxKTtcclxuICAgICAgICAgICAgICBsZXQgY2hlY2tZWVlZID0gaXNOYU4ocGFyc2VJbnQoVmFsMS5zdWJzdHJpbmcoMCwgNCkpKTtcclxuICAgICAgICAgICAgICBsZXQgdGltZVZhbCA9IGRhdGUuZ2V0VGltZSgpO1xyXG4gICAgICAgICAgaWYgKHRoaXMucGFyYW1Db25maWcuREVCVUdfRkxBRykgY29uc29sZS5sb2coXCJ0aW1lVmFsOlwiLCB0aW1lVmFsLCBpc05hTih0aW1lVmFsKSk7XHJcbiAgICAgICAgICAgICAgaWYgKCFpc05hTih0aW1lVmFsKSAmJiAodGltZVZhbCA+IDApICYmICFjaGVja1lZWVkpIHtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLnBhcmFtQ29uZmlnLkRFQlVHX0ZMQUcpIGNvbnNvbGUubG9nKFwiaXQgaXMgYSBkYXRlXCIpO1xyXG4gICAgICAgICAgICAgICAgLy9pZiAodGhpcy5wYXJhbUNvbmZpZy5ERUJVR19GTEFHKSBjb25zb2xlLmxvZyhcImtleTpcIitrZXkgKyBcIjpcIiArIGRhdGUuZ2V0VGltZSgpKTtcclxuICAgICAgICAgICAgICAgIGpzb25ba2V5XSA9IGRhdGU7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAvL2lmICh0aGlzLnBhcmFtQ29uZmlnLkRFQlVHX0ZMQUcpIGNvbnNvbGUubG9nKFwianNvbjpvdXQ6XCIsIGpzb24pXHJcbiAgICAgICAgcmV0dXJuIGpzb247XHJcbiAgICAgIH1cclxuICBwdWJsaWMgZGF0ZVlZWVlNTUREKG9iamVjdDphbnksIGpzb246IGFueSkge1xyXG4gICAgaWYgKHRoaXMucGFyYW1Db25maWcuREVCVUdfRkxBRykgY29uc29sZS5sb2coXCJqc29uOlwiLCBqc29uKVxyXG4gICAgICAgICBPYmplY3Qua2V5cyhqc29uKS5tYXAoa2V5ID0+IHtcclxuICAgICAgICAgICBsZXQgbiA9IGtleS50b1VwcGVyQ2FzZSgpLnNlYXJjaChcIl9EQVRFXCIpO1xyXG4gICAgICBpZiAobiAhPSAtMSkge1xyXG4gICAgICAgICAgICBsZXQgZGF0ZU9yZyA9IGpzb25ba2V5XTtcclxuICAgICAgICAgICAgIGxldCBkYXRlID0gbmV3IERhdGUoanNvbltrZXldKTtcclxuICAgICAgICAgICAgIC8vZGF0ZSA9IHRvTG9jYWxEYXRlKGRhdGUpO1xyXG4gICAgICAgICAgICAgbGV0IHRpbWVWYWwgPSBkYXRlLmdldFRpbWUoKTtcclxuICAgICAgICAgICAgIGlmICghaXNOYU4odGltZVZhbCkgJiYgKHRpbWVWYWwgPiAwKSkge1xyXG4gICAgICAgICAgICAgICAvL2lmICh0aGlzLnBhcmFtQ29uZmlnLkRFQlVHX0ZMQUcpIGNvbnNvbGUubG9nKFwia2V5OlwiK2tleSArIFwiOlwiICsgZGF0ZS5nZXRUaW1lKCkpO1xyXG4gICAgICAgICAgICAgICAvL2xldCBhcnJheSA9IGRhdGVPcmcuc3BsaXQoXCJUXCIpXHJcbiAgICAgICAgICBkYXRlT3JnID0gZm9ybWF0RGF0ZShkYXRlT3JnLCBvYmplY3QucGFyYW1Db25maWcuRGF0ZUZvcm1hdCwgb2JqZWN0LnBhcmFtQ29uZmlnLmRhdGVMb2NhbGUpXHJcbiAgICAgICAgICAgICAgIGpzb25ba2V5XSA9IGRhdGVPcmc7XHJcbiAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgfVxyXG4gICAgICAgICB9KTtcclxuICAgICAgICAgcmV0dXJuIGpzb247XHJcbiAgICAgICB9XHJcbiBwdWJsaWMgc21hcnRTdHJpbmdQcm9jZXNzb3IoaW5wdXRTdHJpbmc6c3RyaW5nLCBqc29uRGF0YTp7IFtrZXk6IHN0cmluZ106IGFueSB9KSB7XHJcbiAgICBmdW5jdGlvbiByZXBsYWNlVmFyaWFibGVzSW5TdHJpbmcoaW5wdXRTdHJpbmc6c3RyaW5nLCBqc29uRGF0YTp7IFtrZXk6IHN0cmluZ106IGFueSB9KSB7XHJcbiAgICAgICAgLy8gQ2hlY2sgaWYgc3RyaW5nIGNvbnRhaW5zIGFueSB2YXJpYWJsZXMgKHN0YXJ0cyB3aXRoIDopXHJcbiAgICAgICAgbGV0IHZhcmlhYmxlUGF0dGVybjogUmVnRXhwID0gLzooW2EtekEtWl9dW2EtekEtWjAtOV9dKikvZztcclxuICAgICAgICBsZXQgaGFzVmFyaWFibGVzOmJvb2xlYW4gPSB2YXJpYWJsZVBhdHRlcm4udGVzdChpbnB1dFN0cmluZyk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8gSWYgbm8gdmFyaWFibGVzIGZvdW5kLCByZXR1cm4gb3JpZ2luYWwgc3RyaW5nXHJcbiAgICAgICAgaWYgKCFoYXNWYXJpYWJsZXMpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIG9yaWdpbmFsOiBpbnB1dFN0cmluZyxcclxuICAgICAgICAgICAgICAgIHJlc3VsdDogaW5wdXRTdHJpbmcsXHJcbiAgICAgICAgICAgICAgICByZXBsYWNlZDogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBtZXNzYWdlOiBcIk5vIHZhcmlhYmxlcyBmb3VuZCAtIHJldHVybmluZyBvcmlnaW5hbCBzdHJpbmdcIixcclxuICAgICAgICAgICAgICAgIHZhcmlhYmxlc0ZvdW5kOiBbXVxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAvLyBSZXNldCByZWdleCBsYXN0SW5kZXggc2luY2Ugd2UgdXNlZCB0ZXN0KCkgYWJvdmVcclxuICAgICAgICB2YXJpYWJsZVBhdHRlcm4ubGFzdEluZGV4ID0gMDtcclxuICAgICAgICBcclxuICAgICAgICAvLyBGaW5kIGFsbCB1bmlxdWUgdmFyaWFibGVzXHJcbiAgICAgICAgbGV0IHZhcmlhYmxlcyA9IG5ldyBTZXQ8c3RyaW5nPigpO1xyXG4gICAgICAgIGxldCBtYXRjaDtcclxuICAgICAgICB3aGlsZSAoKG1hdGNoID0gdmFyaWFibGVQYXR0ZXJuLmV4ZWMoaW5wdXRTdHJpbmcpKSAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgICB2YXJpYWJsZXMuYWRkKG1hdGNoWzFdKTsgLy8gQWRkIHZhcmlhYmxlIG5hbWUgd2l0aG91dCBjb2xvblxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAvLyBSZXBsYWNlIHZhcmlhYmxlcyB3aXRoIHZhbHVlc1xyXG4gICAgICAgIGxldCByZXN1bHRTdHJpbmcgPSBpbnB1dFN0cmluZztcclxuICAgICAgICBsZXQgcmVwbGFjZW1lbnRzID0ge307XHJcbiAgICAgICAgbGV0IG1pc3NpbmdWYXJpYWJsZXMgPSBbXTtcclxuICAgICAgICBcclxuICAgICAgICB2YXJpYWJsZXMuZm9yRWFjaCh2YXJpYWJsZU5hbWUgPT4ge1xyXG4gICAgICAgICAgICAvLyBDb252ZXJ0IHZhcmlhYmxlIG5hbWUgdG8gdXBwZXJjYXNlIHRvIG1hdGNoIEpTT04ga2V5cyAoY2FzZS1pbnNlbnNpdGl2ZSlcclxuICAgICAgICAgICAgbGV0IGtleSA9IE9iamVjdC5rZXlzKGpzb25EYXRhKS5maW5kKFxyXG4gICAgICAgICAgICAgICAgayA9PiBrLnRvVXBwZXJDYXNlKCkgPT09IHZhcmlhYmxlTmFtZS50b1VwcGVyQ2FzZSgpXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiUHJvY2Vzc2luZyB2YXJpYWJsZTogXCIgLCB2YXJpYWJsZU5hbWUsIFwibWF0Y2hlZCBrZXk6XCIsIGtleSAsIFwianNvbkRhdGE6XCIsIGpzb25EYXRhKTtcclxuICAgICAgICAgICAgaWYgKGtleSAhPT0gdW5kZWZpbmVkICYmIGpzb25EYXRhW2tleV0gIT09IHVuZGVmaW5lZCAmJiBqc29uRGF0YVtrZXldICE9PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgdmFsdWUgPSBqc29uRGF0YVtrZXldO1xyXG4gICAgICAgICAgICAgICAgLy8gRm9ybWF0IHRoZSB2YWx1ZSBwcm9wZXJseVxyXG4gICAgICAgICAgICAgICAgbGV0IGZvcm1hdHRlZFZhbHVlO1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJykge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIEVzY2FwZSBzaW5nbGUgcXVvdGVzIGluIHN0cmluZ3NcclxuICAgICAgICAgICAgICAgICAgICBsZXQgZXNjYXBlZFZhbHVlID0gdmFsdWUucmVwbGFjZSgvJy9nLCBcIicnXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvcm1hdHRlZFZhbHVlID0gYCcke2VzY2FwZWRWYWx1ZX0nYDtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAodHlwZW9mIHZhbHVlID09PSAnbnVtYmVyJykge1xyXG4gICAgICAgICAgICAgICAgICAgIGZvcm1hdHRlZFZhbHVlID0gdmFsdWUudG9TdHJpbmcoKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAodmFsdWUgaW5zdGFuY2VvZiBEYXRlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gRm9ybWF0IGRhdGUgYXMgU1FMIGRhdGUgc3RyaW5nXHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHllYXIgPSB2YWx1ZS5nZXRGdWxsWWVhcigpO1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBtb250aCA9IFN0cmluZyh2YWx1ZS5nZXRNb250aCgpICsgMSkucGFkU3RhcnQoMiwgJzAnKTtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgZGF5ID0gU3RyaW5nKHZhbHVlLmdldERhdGUoKSkucGFkU3RhcnQoMiwgJzAnKTtcclxuICAgICAgICAgICAgICAgICAgICBmb3JtYXR0ZWRWYWx1ZSA9IGAnJHt5ZWFyfS0ke21vbnRofS0ke2RheX0nYDtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAodHlwZW9mIHZhbHVlID09PSAnYm9vbGVhbicpIHtcclxuICAgICAgICAgICAgICAgICAgICBmb3JtYXR0ZWRWYWx1ZSA9IHZhbHVlID8gJzEnIDogJzAnO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyBGb3Igb3RoZXIgdHlwZXMsIGNvbnZlcnQgdG8gc3RyaW5nIGFuZCBxdW90ZVxyXG4gICAgICAgICAgICAgICAgICAgIGZvcm1hdHRlZFZhbHVlID0gYCcke1N0cmluZyh2YWx1ZSl9J2A7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIC8vIFJlcGxhY2UgQUxMIG9jY3VycmVuY2VzIG9mIHRoaXMgdmFyaWFibGVcclxuICAgICAgICAgICAgICAgIGxldCB2YXJpYWJsZVJlZ2V4ID0gbmV3IFJlZ0V4cChgOiR7dmFyaWFibGVOYW1lfVxcXFxiYCwgJ2cnKTtcclxuICAgICAgICAgICAgICAgIHJlc3VsdFN0cmluZyA9IHJlc3VsdFN0cmluZy5yZXBsYWNlKHZhcmlhYmxlUmVnZXgsIGZvcm1hdHRlZFZhbHVlKTtcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgcmVwbGFjZW1lbnRzW3ZhcmlhYmxlTmFtZV0gPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgb3JpZ2luYWw6IGA6JHt2YXJpYWJsZU5hbWV9YCxcclxuICAgICAgICAgICAgICAgICAgICByZXBsYWNlZFdpdGg6IGZvcm1hdHRlZFZhbHVlLFxyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlOiB2YWx1ZSxcclxuICAgICAgICAgICAgICAgICAgICB0eXBlOiB0eXBlb2YgdmFsdWVcclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBtaXNzaW5nVmFyaWFibGVzLnB1c2godmFyaWFibGVOYW1lKTtcclxuICAgICAgICAgICAgICAgIC8vIEtlZXAgdGhlIHZhcmlhYmxlIGFzIGlzIGlmIG5vdCBmb3VuZFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgb3JpZ2luYWw6IGlucHV0U3RyaW5nLFxyXG4gICAgICAgICAgICByZXN1bHQ6IHJlc3VsdFN0cmluZyxcclxuICAgICAgICAgICAgcmVwbGFjZWQ6IHRydWUsXHJcbiAgICAgICAgICAgIHJlcGxhY2VtZW50czogcmVwbGFjZW1lbnRzLFxyXG4gICAgICAgICAgICB2YXJpYWJsZXNGb3VuZDogQXJyYXkuZnJvbSh2YXJpYWJsZXMpLFxyXG4gICAgICAgICAgICBtaXNzaW5nVmFyaWFibGVzOiBtaXNzaW5nVmFyaWFibGVzLFxyXG4gICAgICAgICAgICBtZXNzYWdlOiBtaXNzaW5nVmFyaWFibGVzLmxlbmd0aCA+IDAgXHJcbiAgICAgICAgICAgICAgICA/IGBTb21lIHZhcmlhYmxlcyBub3QgZm91bmQ6ICR7bWlzc2luZ1ZhcmlhYmxlcy5qb2luKCcsICcpfWBcclxuICAgICAgICAgICAgICAgIDogJ0FsbCB2YXJpYWJsZXMgcmVwbGFjZWQgc3VjY2Vzc2Z1bGx5J1xyXG4gICAgICAgIH07XHJcbiAgICB9XHJcbiAgICAvLyBGaXJzdCBjaGVjayBpZiBpdCBsb29rcyBsaWtlIGEgU1FMIFdIRVJFIGNsYXVzZSB3aXRoIHZhcmlhYmxlc1xyXG4gICAgICBsZXQgaGFzV2hlcmVDbGF1c2UgPSBpbnB1dFN0cmluZy50b1VwcGVyQ2FzZSgpLmluY2x1ZGVzKCdfV0hFUkU9Jyk7XHJcbiAgICAgIGxldCBoYXNWYXJpYWJsZXMgPSAvOlthLXpBLVpfXVthLXpBLVowLTlfXSovLnRlc3QoaW5wdXRTdHJpbmcpO1xyXG4gICAgICBcclxuICAgICAgLy8gSWYgaXQgaGFzIFdIRVJFIGJ1dCBubyB2YXJpYWJsZXMsIGl0IG1pZ2h0IGJlIGNvbXBsZXRlIGFscmVhZHlcclxuICAgICAgaWYgKGhhc1doZXJlQ2xhdXNlICYmICFoYXNWYXJpYWJsZXMpIHtcclxuICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgb3JpZ2luYWw6IGlucHV0U3RyaW5nLFxyXG4gICAgICAgICAgICAgIHJlc3VsdDogaW5wdXRTdHJpbmcsXHJcbiAgICAgICAgICAgICAgbmVlZHNSZXBsYWNlbWVudDogZmFsc2UsXHJcbiAgICAgICAgICAgICAgdHlwZTogJ2NvbXBsZXRlX3doZXJlX2NsYXVzZScsXHJcbiAgICAgICAgICAgICAgbWVzc2FnZTogJ1dIRVJFIGNsYXVzZSBhcHBlYXJzIGNvbXBsZXRlIC0gbm8gdmFyaWFibGVzIHRvIHJlcGxhY2UnXHJcbiAgICAgICAgICB9O1xyXG4gICAgICB9XHJcbiAgICAgIFxyXG4gICAgICAvLyBPdGhlcndpc2UsIHRyeSB0byByZXBsYWNlIHZhcmlhYmxlc1xyXG4gICAgICBsZXQgcmVwbGFjZW1lbnRSZXN1bHQgPSByZXBsYWNlVmFyaWFibGVzSW5TdHJpbmcoaW5wdXRTdHJpbmcsIGpzb25EYXRhKTtcclxuICAgICAgXHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAuLi5yZXBsYWNlbWVudFJlc3VsdCxcclxuICAgICAgICAgIG5lZWRzUmVwbGFjZW1lbnQ6IHJlcGxhY2VtZW50UmVzdWx0LnJlcGxhY2VkLFxyXG4gICAgICAgICAgdHlwZTogcmVwbGFjZW1lbnRSZXN1bHQucmVwbGFjZWQgPyAnd2l0aF92YXJpYWJsZXMnIDogJ25vX3ZhcmlhYmxlcydcclxuICAgICAgfTtcclxuICB9XHJcbiAgcHVibGljIHByb2Nlc3Nmb3JtYXR0ZWRXaGVyZShvYmplY3QsIGZvcm1hdHRlZFdoZXJlKXtcclxuICAgIGlmICh0aGlzLnNlc3Npb25QYXJhbXNbJ05BVklHQVRFX0RBVEEnXSAhPSBcInVuZGVmaW5lZFwiKXtcclxuICAgICAgdGhpcy5zZXNzaW9uUGFyYW1zWydOQVZJR0FURV9EQVRBJ10gPSB7fTtcclxuICAgICAgbGV0IG5hdkRhdGEgPSB7fVxyXG4gICAgICBmb3IgKGxldCBpID0wIDsgaTwgb2JqZWN0Lm1hc3RlcktleU5hbWVBcnIubGVuZ3RoO2krKyl7XHJcbiAgICAgICAgICBuYXZEYXRhW29iamVjdC5tYXN0ZXJLZXlOYW1lQXJyW2ldXSA9IG9iamVjdC5tYXN0ZXJLZXlBcnJbaV1cclxuICAgICAgfVxyXG4gICAgICB0aGlzLnNlc3Npb25QYXJhbXNbJ05BVklHQVRFX0RBVEEnXSA9IG5hdkRhdGE7XHJcbiAgICB9XHJcbiAgICBsZXQgcmVzdWx0ID0gdGhpcy5zbWFydFN0cmluZ1Byb2Nlc3Nvcihmb3JtYXR0ZWRXaGVyZSwgdGhpcy5zZXNzaW9uUGFyYW1zWydOQVZJR0FURV9EQVRBJ10gKTtcclxuICAgICAgaWYgKHJlc3VsdC5uZWVkc1JlcGxhY2VtZW50ID09IHRydWUgKXtcclxuICAgICAgICBpZiAocmVzdWx0Lm1lc3NhZ2Uuc3RhcnRzV2l0aCAoXCJTb21lIHZhcmlhYmxlcyBub3QgZm91bmRcIikgKVxyXG4gICAgICAgICAgZm9ybWF0dGVkV2hlcmUgPSBcIlwiO1xyXG4gICAgICAgIGVsc2VcclxuICAgICAgICAgIGZvcm1hdHRlZFdoZXJlID0gcmVzdWx0LnJlc3VsdDtcclxuICAgICAgfVxyXG4gICAgICBjb25zb2xlLmxvZyAoXCJwcm9jZXNzZm9ybWF0dGVkV2hlcmU6dGhpcy5XaGVyZUNsYXVzZVwiLCByZXN1bHQsIGZvcm1hdHRlZFdoZXJlICk7XHJcbiAgICB0aGlzLnNlc3Npb25QYXJhbXNbJ05BVklHQVRFX0RBVEEnXSA9IHt9O1xyXG4gICAgcmV0dXJuIGZvcm1hdHRlZFdoZXJlO1xyXG4gIH1cclxuICBwdWJsaWMgc3RyaW5naWZ5TXVsdGlTZWxlY3RGaWVsZHMob2JqZWN0LGZvcm0pe1xyXG4gICAgbGV0IGZvcm1Hcm91cCA9IGZvcm0udmFsdWU7XHJcbiAgICBpZiAodHlwZW9mIG9iamVjdC5tdWx0aXNlbGVjdF9hcnIgIT09IFwidW5kZWZpbmVkXCIpe1xyXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG9iamVjdC5tdWx0aXNlbGVjdF9hcnIubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgIGZvcm1Hcm91cFtvYmplY3QubXVsdGlzZWxlY3RfYXJyW2ldXSA9IEpTT04uc3RyaW5naWZ5KGZvcm1Hcm91cFtvYmplY3QubXVsdGlzZWxlY3RfYXJyW2ldXSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGlmICh0eXBlb2Ygb2JqZWN0Lm11bHRpc2VsZWN0X3RyZWVfYXJyICE9PSBcInVuZGVmaW5lZFwiKXtcclxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBvYmplY3QubXVsdGlzZWxlY3RfdHJlZV9hcnIubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgIGZvcm1Hcm91cFtvYmplY3QubXVsdGlzZWxlY3RfdHJlZV9hcnJbaV1dID0gSlNPTi5zdHJpbmdpZnkoZm9ybUdyb3VwW29iamVjdC5tdWx0aXNlbGVjdF90cmVlX2FycltpXV0pO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gZm9ybTtcclxuICAgfVxyXG4gIHB1YmxpYyBmaXhNdWx0aVNlbGVjdEZpZWxkc19yZXN1bHQob2JqZWN0LCByZXN1bHQpe1xyXG4gICAgaWYgKHR5cGVvZiBvYmplY3QubXVsdGlzZWxlY3RfYXJyICE9PSBcInVuZGVmaW5lZFwiKXtcclxuICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgb2JqZWN0Lm11bHRpc2VsZWN0X2Fyci5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgcmVzdWx0LmRhdGEubGVuZ3RoOyBqKyspIHtcclxuICAgICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgcmVzdWx0LmRhdGFbal1bb2JqZWN0Lm11bHRpc2VsZWN0X2FycltpXV0gPSBKU09OLnBhcnNlKHJlc3VsdC5kYXRhW2pdW29iamVjdC5tdWx0aXNlbGVjdF9hcnJbaV1dKTtcclxuICAgICAgICAgICAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBpZiAodHlwZW9mIG9iamVjdC5tdWx0aXNlbGVjdF90cmVlX2FyciAhPT0gXCJ1bmRlZmluZWRcIil7XHJcbiAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG9iamVjdC5tdWx0aXNlbGVjdF90cmVlX2Fyci5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgcmVzdWx0LmRhdGEubGVuZ3RoOyBqKyspIHtcclxuICAgICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgcmVzdWx0LmRhdGFbal1bb2JqZWN0Lm11bHRpc2VsZWN0X3RyZWVfYXJyW2ldXSA9IEpTT04ucGFyc2UocmVzdWx0LmRhdGFbal1bb2JqZWN0Lm11bHRpc2VsZWN0X3RyZWVfYXJyW2ldXSk7XHJcbiAgICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gICB9XHJcbiAgIHB1YmxpYyBmaXhNdWx0aVNlbGVjdEZpZWxkc19OZXdWYWwob2JqZWN0LCBOZXdWYWwpe1xyXG4gICAgIGlmICh0eXBlb2Ygb2JqZWN0Lm11bHRpc2VsZWN0X2FyciAhPT0gXCJ1bmRlZmluZWRcIil7XHJcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgb2JqZWN0Lm11bHRpc2VsZWN0X2Fyci5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIGlmIChOZXdWYWxbb2JqZWN0Lm11bHRpc2VsZWN0X2FycltpXV0gIT0gbnVsbCAmJiBOZXdWYWxbb2JqZWN0Lm11bHRpc2VsZWN0X2FycltpXV0ubGVuZ3RoID4gMCl7XHJcbiAgICAgICAgICBOZXdWYWxbb2JqZWN0Lm11bHRpc2VsZWN0X2FycltpXV0gPSBKU09OLnBhcnNlKE5ld1ZhbFtvYmplY3QubXVsdGlzZWxlY3RfYXJyW2ldXSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBpZiAodHlwZW9mIG9iamVjdC5tdWx0aXNlbGVjdF9hcnIgIT09IFwidW5kZWZpbmVkXCIpe1xyXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG9iamVjdC5tdWx0aXNlbGVjdF90cmVlX2Fyci5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIGlmIChOZXdWYWxbb2JqZWN0Lm11bHRpc2VsZWN0X3RyZWVfYXJyW2ldXSAhPSBudWxsICYmIE5ld1ZhbFtvYmplY3QubXVsdGlzZWxlY3RfdHJlZV9hcnJbaV1dLmxlbmd0aCA+IDApe1xyXG4gICAgICAgICAgTmV3VmFsW29iamVjdC5tdWx0aXNlbGVjdF90cmVlX2FycltpXV0gPSBKU09OLnBhcnNlKE5ld1ZhbFtvYmplY3QubXVsdGlzZWxlY3RfdHJlZV9hcnJbaV1dKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgfVxyXG4gICAgcHVibGljIHRyYW5zZm9ybUZvclRyZWVWaWV3KGRhdGEpOiBhbnlbXSB7XHJcbiAgICBjb25zdCBncm91cE1hcCA9IG5ldyBNYXA8c3RyaW5nLCBhbnk+KCk7XHJcblxyXG4gICAgZGF0YS5mb3JFYWNoKGl0ZW0gPT4ge1xyXG4gICAgICBjb25zdCBncm91cEtleSA9IGl0ZW0uQ09ERVRFWFRfTEFORztcclxuXHJcbiAgICAgIGlmICghZ3JvdXBNYXAuaGFzKGdyb3VwS2V5KSkge1xyXG4gICAgICAgIGdyb3VwTWFwLnNldChncm91cEtleSwge1xyXG4gICAgICAgICAgdGV4dDogZ3JvdXBLZXksXHJcbiAgICAgICAgICBpZDogZ3JvdXBLZXksICAvLyBBZGRlZCBpZCBmaWVsZFxyXG4gICAgICAgICAgaXRlbXM6IFtdXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGNvbnN0IGdyb3VwID0gZ3JvdXBNYXAuZ2V0KGdyb3VwS2V5KTtcclxuICAgICAgZ3JvdXAuaXRlbXMucHVzaCh7XHJcbiAgICAgICAgdGV4dDogaXRlbS5DT0RFLFxyXG4gICAgICAgIGlkOiBpdGVtLkNPREUgIC8vIENoYW5nZWQgZnJvbSAnY29kZScgdG8gJ2lkJ1xyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG5cclxuICAgIHJldHVybiBBcnJheS5mcm9tKGdyb3VwTWFwLnZhbHVlcygpKTtcclxuICB9XHJcbiAgIHB1YmxpYyBjYWxsbHRyYW5zZm9ybUZvclRyZWVWaWV3KG9iamVjdCl7XHJcbiAgICAvL2NvbnNvbGUubG9nIChcInRoaXMubG9va3VwQXJyRGVmOm9iamVjdC5tdWx0aXNlbGVjdF90cmVlX2FycjpcIiwgb2JqZWN0Lm11bHRpc2VsZWN0X3RyZWVfYXJyKVxyXG4gICAgaWYgKCB0eXBlb2Ygb2JqZWN0Lm11bHRpc2VsZWN0X3RyZWVfYXJyICE9IFwidW5kZWZpbmVkXCIpXHJcbiAgICB7XHJcbiAgICAgIGZvciAobGV0IGkgPTA7IGkgPCBvYmplY3QubXVsdGlzZWxlY3RfdHJlZV9hcnIubGVuZ3RoOyBpKyspe1xyXG4gICAgICAgIGxldCBjb2xOYW1lID0gb2JqZWN0Lm11bHRpc2VsZWN0X3RyZWVfYXJyW2ldO1xyXG4gICAgICAgIGxldCBrcE5hbWUgPSBcImxrcEFyclwiICsgY29sTmFtZTtcclxuICAgICAgICBcclxuICAgICAgICBsZXQgbGtwVmFsID0gb2JqZWN0W2twTmFtZV07XHJcbiAgICAgICAgLy9jb25zb2xlLmxvZyAoXCJ0aGlzLmxvb2t1cEFyckRlZjprcE5hbWU6XCIsIGtwTmFtZSwgbGtwVmFsKVxyXG4gICAgICAgIGxrcFZhbCA9IHRoaXMudHJhbnNmb3JtRm9yVHJlZVZpZXcobGtwVmFsKTtcclxuICAgICAgICAvL2NvbnNvbGUubG9nIChcInRoaXMubG9va3VwQXJyRGVmOmtwTmFtZTpcIiwga3BOYW1lLCBsa3BWYWwpXHJcbiAgICAgICAgb2JqZWN0W2twTmFtZV0gPSBsa3BWYWw7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIHB1YmxpYyBleGVjdXRlUXVlcnlBY3RfZm9ybShmb3JtOiBhbnksIG9iamVjdDphbnkpIHtcclxuICAgIGNvbnNvbGUubG9nKFwiZXhlY3V0ZVF1ZXJ5QWN0X2Zvcm06Zm9ybTpcIixmb3JtLCBcIm9iamVjdC5pc0NoaWxkIDpcIixvYmplY3QuaXNDaGlsZCwgXCJvYmplY3QuaXNTZWFyY2g6XCIsb2JqZWN0LmlzU2VhcmNoIClcclxuICAgIGlmICh0eXBlb2YgZm9ybSA9PT0gXCJ1bmRlZmluZWRcIilcclxuICAgICAgICAgIHJldHVybjtcclxuXHJcbiAgICAgICAgbGV0IHBhcmFtQ29uZmlnID0ge1xyXG4gICAgICAgICAgXCJOYW1lXCI6IFwiY2hpbGRSZWNvcmRzXCIsXHJcbiAgICAgICAgICBcIlZhbFwiOiAwXHJcbiAgICAgICAgfTtcclxuICAgICAgICBzZXRQYXJhbUNvbmZpZyhwYXJhbUNvbmZpZyk7XHJcbiAgICBpZiAob2JqZWN0LmlzQ2hpbGQgPT0gdHJ1ZSkge1xyXG4gICAgICBpZiAob2JqZWN0LmlzU2VhcmNoICE9IHRydWUpIHtcclxuICAgICAgICAvL29iamVjdC5mb3JtLnJlc2V0KCk7XHJcbiAgICAgICAgb2JqZWN0LmZvcm0ucmVzZXQob2JqZWN0LmZvcm1Jbml0aWFsVmFsdWVzKTtcclxuXHJcbiAgICAgICAgaWYgKCh0eXBlb2Ygb2JqZWN0Lm1hc3RlcktleU5hbWVBcnIgIT0gXCJ1bmRlZmluZWRcIikgJiYgKG9iamVjdC5tYXN0ZXJLZXlOYW1lQXJyLmxlbmd0aCAhPSAwKSkge1xyXG4gICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBvYmplY3QubWFzdGVyS2V5TmFtZUFyci5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgb2JqZWN0LmZvcm1Jbml0aWFsVmFsdWVzW29iamVjdC5tYXN0ZXJLZXlOYW1lQXJyW2ldXSA9IG9iamVjdC5tYXN0ZXJLZXlBcnJbaV07XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgb2JqZWN0LmZvcm1Jbml0aWFsVmFsdWVzW29iamVjdC5tYXN0ZXJLZXlOYW1lXSA9IG9iamVjdC5tYXN0ZXJLZXk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIC8vb2JqZWN0LmZvcm1Jbml0aWFsVmFsdWVzW29iamVjdC5tYXN0ZXJLZXlOYW1lXSA9IG9iamVjdC5tYXN0ZXJLZXk7XHJcbiAgICAgICAgb2JqZWN0LmZvcm0ucmVzZXQob2JqZWN0LmZvcm1Jbml0aWFsVmFsdWVzLCB7IGVtaXRFdmVudDogb2JqZWN0LmVtaXRFdmVudCAhPSBudWxsID8gb2JqZWN0LmVtaXRFdmVudCA6IHRydWUgfSk7XHJcbiAgICAgICAgaWYgKG9iamVjdC5wYXJhbUNvbmZpZy5ERUJVR19GTEFHKSBjb25zb2xlLmxvZyhcIm9iamVjdC5tYXN0ZXJLZXlOYW1lOlwiICsgb2JqZWN0Lm1hc3RlcktleU5hbWUpO1xyXG4gICAgICAgICAgICBvYmplY3QuaXNTZWFyY2ggPSB0cnVlO1xyXG4gICAgICAgICAgICBmb3JtID0gb2JqZWN0LmZvcm0uZ2V0UmF3VmFsdWUoKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxldCBQYWdlID0gXCImX3F1ZXJ5PVwiICsgb2JqZWN0LmdldENNRDtcclxuICAgIGlmIChvYmplY3QucGFyYW1Db25maWcuREVCVUdfRkxBRykgY29uc29sZS5sb2coXCJvYmplY3QuaXNTZWFyY2g6XCIgKyBvYmplY3QuaXNTZWFyY2gpXHJcbiAgICBpZiAob2JqZWN0LmlzU2VhcmNoID09IHRydWUpIHtcclxuICAgICAgICAgIGlmIChvYmplY3QucGFyYW1Db25maWcuREVCVUdfRkxBRykgY29uc29sZS5sb2coZm9ybS52YWx1ZSk7XHJcbiAgICBsZXQgTmV3VmFsID0gZm9ybTtcclxuICAgICAgICAgICAgb2JqZWN0LmlzU2VhcmNoID0gZmFsc2U7XHJcbiAgICBpZiAoKHR5cGVvZiBvYmplY3QuZm9ybWF0dGVkV2hlcmUgPT09IFwidW5kZWZpbmVkXCIpIHx8IChvYmplY3QuZm9ybWF0dGVkV2hlcmUgPT0gbnVsbCkpIHtcclxuICAgICAgICAgICAgICBQYWdlID0gUGFnZSArIG9iamVjdC5zdGFyU2VydmljZXMuZm9ybWF0V2hlcmUoTmV3VmFsKTtcclxuXHJcbiAgICAgICAgICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgIG9iamVjdC5mb3JtYXR0ZWRXaGVyZSA9IHRoaXMucHJvY2Vzc2Zvcm1hdHRlZFdoZXJlKG9iamVjdCwgb2JqZWN0LmZvcm1hdHRlZFdoZXJlKTtcclxuICAgICAgICAgICAgICBQYWdlID0gUGFnZSArIG9iamVjdC5mb3JtYXR0ZWRXaGVyZTtcclxuICAgICAgICAgICAgICBvYmplY3QuZm9ybWF0dGVkV2hlcmUgPSBudWxsO1xyXG4gICAgICAgICAgICB9XHJcbiAgICBpZiAoKHR5cGVvZiBvYmplY3QuT3JkZXJCeUNsYXVzZSAhPT0gXCJ1bmRlZmluZWRcIikgJiYgKG9iamVjdC5PcmRlckJ5Q2xhdXNlICE9IFwiXCIpKVxyXG4gICAgICAgICAgICAgIFBhZ2UgPSBQYWdlICsgXCImX09SREVSQlk9XCIgKyBvYmplY3QuT3JkZXJCeUNsYXVzZTtcclxuICAgIH1cclxuXHJcbiAgICBvYmplY3QuZXhlY3V0ZVF1ZXJ5cmVzdWx0ID0gW107XHJcbiAgICBvYmplY3QuZXhlY3V0ZVF1ZXJ5cmVzdWx0LnJlc3VsdCA9IDA7XHJcbiAgICAgICAgb2JqZWN0LkN1cnJlbnRSZWMgPSAwO1xyXG5cclxuICAgICAgICBQYWdlID0gZW5jb2RlVVJJKFBhZ2UpO1xyXG4gICAgb2JqZWN0LnN0YXJTZXJ2aWNlcy5mZXRjaChvYmplY3QsIFBhZ2UpLnN1YnNjcmliZSgocmVzdWx0OmFueSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKHJlc3VsdCAhPSBudWxsKSB7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCByZXN1bHQuZGF0YVswXS5kYXRhLmxlbmd0aDsgaSsrKVxyXG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdC5kYXRhWzBdLmRhdGFbaV0gPSBvYmplY3Quc3RhclNlcnZpY2VzLnBhcnNlVG9EYXRlKHJlc3VsdC5kYXRhWzBdLmRhdGFbaV0pO1xyXG5cclxuXHJcbiAgICAgICAgcmVzdWx0ID0ge1xyXG4gICAgICAgICAgZGF0YTogcmVzdWx0LmRhdGFbMF0uZGF0YSxcclxuICAgICAgICAgIHRvdGFsOiBwYXJzZUludChyZXN1bHQuZGF0YVswXS5kYXRhLmxlbmd0aCwgMTApXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChvYmplY3QuaXNNYXN0ZXIpXHJcbiAgICAgICAgICBvYmplY3Quc3RhclNlcnZpY2VzLnNob3dOb3RpZmljYXRpb24oJ3N1Y2Nlc3MnLCBcIlJlY29yZHMgcmV0cmlldmVkIDogXCIgKyByZXN1bHQudG90YWwpO1xyXG4gICAgICAgIG9iamVjdC5zdGFyU2VydmljZXMuZml4TXVsdGlTZWxlY3RGaWVsZHNfcmVzdWx0KG9iamVjdCwgcmVzdWx0KVxyXG4gICAgICAgIG9iamVjdC5leGVjdXRlUXVlcnlyZXN1bHQgPSByZXN1bHQ7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5oZWxwTXNnID0gXCJcIjtcclxuICAgICAgICBpZiAob2JqZWN0LnBhcmFtQ29uZmlnLkRFQlVHX0ZMQUcpIGNvbnNvbGUubG9nKFwib2JqZWN0LmV4ZWN1dGVRdWVyeXJlc3VsdDpcIiwgb2JqZWN0LmV4ZWN1dGVRdWVyeXJlc3VsdCk7XHJcbiAgICAgICAgaWYgKHR5cGVvZiByZXN1bHQuZGF0YVtvYmplY3QuQ3VycmVudFJlY10gIT09IFwidW5kZWZpbmVkXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgIG9iamVjdC5mb3JtLnBhdGNoVmFsdWUocmVzdWx0LmRhdGFbb2JqZWN0LkN1cnJlbnRSZWNdKTtcclxuICAgICAgICAgICAgICAgICAgICAgIG9iamVjdC5mb3JtLm1hcmtBc1ByaXN0aW5lKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICBvYmplY3QuZm9ybS5tYXJrQXNVbnRvdWNoZWQoKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIG9iamVjdC5mb3JtLnJlc2V0KHJlc3VsdC5kYXRhW29iamVjdC5DdXJyZW50UmVjXSwgeyBlbWl0RXZlbnQ6IG9iamVjdC5lbWl0RXZlbnQgIT0gbnVsbCA/IG9iamVjdC5lbWl0RXZlbnQgOiB0cnVlIH0pO1xyXG5cclxuICAgICAgICBpZiAob2JqZWN0LnBhcmFtQ29uZmlnLkRFQlVHX0ZMQUcpIGNvbnNvbGUubG9nKFwiZm9ybSBzZXJ2aWNlcmVhZENvbXBsZXRlZE91dHB1dFwiKTtcclxuICAgICAgICBpZiAob2JqZWN0LnBhcmFtQ29uZmlnLkRFQlVHX0ZMQUcpIGNvbnNvbGUubG9nKG9iamVjdC5yZWFkQ29tcGxldGVkT3V0cHV0KTtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgcGFyYW1Db25maWcgPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBcIk5hbWVcIjogXCJjaGlsZFJlY29yZHNcIixcclxuICAgICAgICAgICAgICAgICAgICAgIFwiVmFsXCI6IHJlc3VsdC50b3RhbFxyXG4gICAgICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0UGFyYW1Db25maWcocGFyYW1Db25maWcpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChyZXN1bHQudG90YWwgIT0gMClcclxuICAgICAgICAgICAgICAgICAgICAgIG9iamVjdC5pc05ldyA9IGZhbHNlO1xyXG5cclxuICAgICAgICBpZiAob2JqZWN0LmRpc2FibGVFbWl0UmVhZENvbXBsZXRlZCAhPSB0cnVlKSB7XHJcbiAgICAgICAgICBpZiAocmVzdWx0LnRvdGFsICE9IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgb2JqZWN0LnJlYWRDb21wbGV0ZWRPdXRwdXQuZW1pdChvYmplY3QuZm9ybS5nZXRSYXdWYWx1ZSgpKTtcclxuICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgb2JqZWN0LmNsZWFyQ29tcGxldGVkT3V0cHV0LmVtaXQoW10pO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICBpZiAodHlwZW9mIG9iamVjdC5jYWxsQmFja0Z1bmN0aW9uICE9PSBcInVuZGVmaW5lZFwiKVxyXG4gICAgICAgICAgICAgICAgICAgICAgb2JqZWN0LmNhbGxCYWNrRnVuY3Rpb24ocmVzdWx0LmRhdGFbMF0pO1xyXG5cclxuXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldFByaW1hcktleU5hbWVBcnIob2JqZWN0LCB0cnVlKTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgKGVycjphbnkpID0+IHtcclxuICAgICAgICAgICAgICAgIC8vYWxlcnQoJ2Vycm9yOicgKyBlcnIubWVzc2FnZSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNob3dFcnJvck1zZyhvYmplY3QsIGVycik7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgfVxyXG4gIHB1YmxpYyBleGVjc3RhclNlcnZpY2VzX2Zvcm1faW5UcmFucyhOZXdWYWw6YW55LCBvYmplY3Q6YW55KSB7XHJcbiAgICAgIHRoaXMuY29tbWl0Qm9keS5wdXNoKE5ld1ZhbCk7XHJcbiAgICBpZiAob2JqZWN0LmFjdGlvbiAhPSBcIlJFTU9WRVwiKSB7XHJcbiAgICAgIGlmICh0eXBlb2Ygb2JqZWN0LmV4ZWN1dGVRdWVyeXJlc3VsdCAhPT0gXCJ1bmRlZmluZWRcIikge1xyXG4gICAgICAgIGlmIChvYmplY3QuaXNOZXcgPT0gdHJ1ZSkge1xyXG4gICAgICAgICAgICBvYmplY3QuZXhlY3V0ZVF1ZXJ5cmVzdWx0LmRhdGEucHVzaChOZXdWYWwpO1xyXG4gICAgICAgICAgICBvYmplY3QuZXhlY3V0ZVF1ZXJ5cmVzdWx0LnRvdGFsID0gb2JqZWN0LmV4ZWN1dGVRdWVyeXJlc3VsdC50b3RhbCArIDE7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIG9iamVjdC5leGVjdXRlUXVlcnlyZXN1bHQuZGF0YVtvYmplY3QuQ3VycmVudFJlY10gPSBOZXdWYWw7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICBlbHNlIHtcclxuICAgICAgICBsZXQgTmV3VmFsQXJyOmFueSA9IFtdO1xyXG4gICAgICAgICAgTmV3VmFsQXJyLnB1c2goTmV3VmFsKTtcclxuICAgICAgICBsZXQgcmVzdWx0ID0ge1xyXG4gICAgICAgICAgZGF0YTogTmV3VmFsQXJyLFxyXG4gICAgICAgICAgdG90YWw6IDFcclxuICAgICAgICB9XHJcbiAgICAgICAgb2JqZWN0LmV4ZWN1dGVRdWVyeXJlc3VsdCA9IHJlc3VsdDtcclxuICAgICAgICAgICAgb2JqZWN0LkN1cnJlbnRSZWMgPSAwO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgIHZhciBkYXRhOmFueSA9IFtdO1xyXG4gICAgICAgIGRhdGEucHVzaChOZXdWYWwpXHJcbiAgICAgIGlmIChvYmplY3QuaXNOZXcgPT0gdHJ1ZSkge1xyXG4gICAgICAgICAgb2JqZWN0LmlzTmV3ID0gZmFsc2U7XHJcbiAgICAgICAgaWYgKHR5cGVvZiBvYmplY3QuY2FsbEJhY2tQb3N0X0luc2VydCAhPT0gXCJ1bmRlZmluZWRcIikge1xyXG4gICAgICAgICAgICAgIG9iamVjdC5jYWxsQmFja1Bvc3RfSW5zZXJ0LmFwcGx5KG9iamVjdCwgZGF0YSk7XHJcbiAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgZWxzZSB7XHJcbiAgICAgICAgaWYgKHR5cGVvZiBvYmplY3QuY2FsbEJhY2tQb3N0X3VwZGF0ZSAhPT0gXCJ1bmRlZmluZWRcIikge1xyXG4gICAgICAgICAgb2JqZWN0LmNhbGxCYWNrUG9zdF91cGRhdGUuYXBwbHkob2JqZWN0LCBkYXRhKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgICAvL1JFTU9WRVxyXG4gICAgICAgIG9iamVjdC5leGVjdXRlUXVlcnlyZXN1bHQuZGF0YS5zcGxpY2Uob2JqZWN0LkN1cnJlbnRSZWMsIDEpO1xyXG4gICAgICAgIG9iamVjdC5leGVjdXRlUXVlcnlyZXN1bHQudG90YWwtLTtcclxuICAgICAgaWYgKG9iamVjdC5DdXJyZW50UmVjID4gMCkge1xyXG4gICAgICAgICAgb2JqZWN0LkN1cnJlbnRSZWMtLTtcclxuICAgICAgICBvYmplY3QuZm9ybS5yZXNldChvYmplY3QuZXhlY3V0ZVF1ZXJ5cmVzdWx0LmRhdGFbb2JqZWN0LkN1cnJlbnRSZWNdLCB7IGVtaXRFdmVudDogb2JqZWN0LmVtaXRFdmVudCAhPSBudWxsID8gb2JqZWN0LmVtaXRFdmVudCA6IHRydWUgfSk7XHJcbiAgICAgICAgICBpZiAob2JqZWN0LmlzTmV3ID09IHRydWUpXHJcbiAgICAgICAgICAgIG9iamVjdC5pc05ldyA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgZWxzZSB7XHJcbiAgICAgICAgb2JqZWN0LmZvcm0ucmVzZXQob2JqZWN0LmZvcm1Jbml0aWFsVmFsdWVzLCB7IGVtaXRFdmVudDogb2JqZWN0LmVtaXRFdmVudCAhPSBudWxsID8gb2JqZWN0LmVtaXRFdmVudCA6IHRydWUgfSk7XHJcbiAgICAgICAgICBvYmplY3QuaXNOZXcgPSB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgbGV0IE5ld1ZhbDE6YW55ID0gW107XHJcbiAgICAgICAgICAgICAgICBOZXdWYWwxLnB1c2goTmV3VmFsKTtcclxuICAgICAgaWYgKHR5cGVvZiBvYmplY3QuY2FsbEJhY2tSZW1vdmVBdHQgIT09IFwidW5kZWZpbmVkXCIpXHJcbiAgICAgICAgb2JqZWN0LmNhbGxCYWNrUmVtb3ZlQXR0KG9iamVjdCwgTmV3VmFsKTtcclxuICAgICAgaWYgKHR5cGVvZiBvYmplY3QuY2FsbEJhY2tQb3N0X1JlbW92ZSAhPT0gXCJ1bmRlZmluZWRcIikge1xyXG4gICAgICAgIC8vIGxldCBOZXdWYWwxID0gW107XHJcbiAgICAgICAgLy8gTmV3VmFsMS5wdXNoKE5ld1ZhbCk7XHJcbiAgICAgICAgICAgICAgb2JqZWN0LmNhbGxCYWNrUG9zdF9SZW1vdmUuYXBwbHkob2JqZWN0LCBOZXdWYWwxKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgICBcclxuICAgICAgfVxyXG4gICAgXHJcbiAgICBpZiAob2JqZWN0LmFjdGlvbiAhPSBcIlJFTU9WRVwiKSB7XHJcbiAgICAgIG9iamVjdC5mb3JtLnJlc2V0KE5ld1ZhbCwgeyBlbWl0RXZlbnQ6IG9iamVjdC5lbWl0RXZlbnQgIT0gbnVsbCA/IG9iamVjdC5lbWl0RXZlbnQgOiB0cnVlIH0pO1xyXG4gICAgfVxyXG4gICAgaWYgKG9iamVjdC5kaWFibGVFbWl0U2F2ZSA9PSB0cnVlKSB7IH1cclxuICAgIGVsc2VcclxuICAgICAgb2JqZWN0LnNhdmVDb21wbGV0ZWRPdXRwdXQuZW1pdChOZXdWYWwpO1xyXG4gICAgaWYgKG9iamVjdC5pc0NoaWxkID09IHRydWUpIHtcclxuICAgICAgbGV0IHBhcmFtQ29uZmlnID0ge1xyXG4gICAgICAgIFwiTmFtZVwiOiBcImNoaWxkUmVjb3Jkc1wiLFxyXG4gICAgICAgIFwiVmFsXCI6IG9iamVjdC5leGVjdXRlUXVlcnlyZXN1bHQudG90YWxcclxuICAgICAgfTtcclxuICAgICAgc2V0UGFyYW1Db25maWcocGFyYW1Db25maWcpO1xyXG4gICAgfVxyXG4gICAgb2JqZWN0LmFjdGlvbiA9IFwiXCI7XHJcbiAgICB0aGlzLnNldFByaW1hcktleU5hbWVBcnIob2JqZWN0LCB0cnVlKTtcclxuXHJcbiAgICB9XHJcbiAgcHVibGljIGV4ZWNzdGFyU2VydmljZXNfZm9ybShOZXdWYWw6YW55LCBvYmplY3Q6YW55KSB7XHJcbiAgICBpZiAodGhpcy5wYXJhbUNvbmZpZy5ERUJVR19GTEFHKSBjb25zb2xlLmxvZyhcIk5ld1ZhbDpcIiwgTmV3VmFsKTtcclxuICAgICAgICBvYmplY3QuYWRkVG9Cb2R5KE5ld1ZhbCk7XHJcbiAgICBpZiAob2JqZWN0LmlzTmV3ID09IHRydWUpe1xyXG4gICAgICBsZXQgc3VmZml4X3NxbCA9IHtcIl9RVUVSWVwiOiBcIkdFVF9MQVNUX0lEXCJ9O1xyXG4gICAgICBvYmplY3QuYWRkVG9Cb2R5KHN1ZmZpeF9zcWwpO1xyXG4gICAgICAvL29iamVjdC5zdWZmaXhfc3FsPSB1bmRlZmluZWQ7XHJcbiAgICB9XHJcbiAgICBsZXQgUGFnZSA9IFwiJl90cmFucz1ZXCI7XHJcbiAgICAgICAgICBpZiAodGhpcy5pblRyYW5zKSB7XHJcbiAgICAgIHRoaXMuZXhlY3N0YXJTZXJ2aWNlc19mb3JtX2luVHJhbnMoTmV3VmFsLCBvYmplY3QpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgdGhpcy5wb3N0KG9iamVjdCwgUGFnZSwgb2JqZWN0LkJvZHkpLnN1YnNjcmliZShQYWdlID0+IHtcclxuICAgICAgb2JqZWN0LkJvZHkgPSBbXTtcclxuICAgICAgaWYgKHRoaXMucGFyYW1Db25maWcuREVCVUdfRkxBRykgY29uc29sZS5sb2coXCJvYmplY3QuZXhlY3V0ZVF1ZXJ5cmVzdWx0LmRhdGE6b2JqZWN0LkN1cnJlbnRSZWM6XCIgLCBvYmplY3QuQ3VycmVudFJlYyAsIFwiIG9iamVjdC5hY3Rpb246XCIgLCBvYmplY3QuYWN0aW9uLCBvYmplY3QuZXhlY3V0ZVF1ZXJ5cmVzdWx0LCBcIlBhZ2U6XCIsIFBhZ2UpO1xyXG4gICAgICAgICAgICAvL2lmICh0eXBlb2Ygb2JqZWN0LmV4ZWN1dGVRdWVyeXJlc3VsdCAhPT0gXCJ1bmRlZmluZWRcIilcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgIGlmICh0aGlzLnBhcmFtQ29uZmlnLkRFQlVHX0ZMQUcpIGNvbnNvbGUubG9nKFwiaGVyZTFcIik7XHJcbiAgICAgICAgaWYgKG9iamVjdC5hY3Rpb24gIT0gXCJSRU1PVkVcIikge1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMucGFyYW1Db25maWcuREVCVUdfRkxBRykgY29uc29sZS5sb2cob2JqZWN0LmV4ZWN1dGVRdWVyeXJlc3VsdCk7XHJcbiAgICAgICAgICBpZiAodHlwZW9mIG9iamVjdC5leGVjdXRlUXVlcnlyZXN1bHQgIT09IFwidW5kZWZpbmVkXCIpIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMucGFyYW1Db25maWcuREVCVUdfRkxBRykgY29uc29sZS5sb2coXCJvYmplY3QuaXNOZXc6XCIgKyBvYmplY3QuaXNOZXcsIFwib2JqZWN0LmV4ZWN1dGVRdWVyeXJlc3VsdDpcIiwgb2JqZWN0LmV4ZWN1dGVRdWVyeXJlc3VsdFxyXG4gICAgICAgICAgICAgICwgXCJvYmplY3QuZXhlY3V0ZVF1ZXJ5cmVzdWx0LmRhdGE6XCIsIG9iamVjdC5leGVjdXRlUXVlcnlyZXN1bHQuZGF0YSlcclxuICAgICAgICAgICAgaWYgKHR5cGVvZiBvYmplY3QuZXhlY3V0ZVF1ZXJ5cmVzdWx0LmRhdGEgIT09IFwidW5kZWZpbmVkXCIpIHtcclxuICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICBpZiAob2JqZWN0LmlzTmV3ID09IHRydWUpIHtcclxuICAgICAgICAgICAgICAgICAgICBvYmplY3QuZXhlY3V0ZVF1ZXJ5cmVzdWx0LmRhdGEucHVzaChOZXdWYWwpO1xyXG4gICAgICAgICAgICAgICAgICAgIG9iamVjdC5leGVjdXRlUXVlcnlyZXN1bHQudG90YWwgPSBvYmplY3QuZXhlY3V0ZVF1ZXJ5cmVzdWx0LnRvdGFsICsgMTtcclxuICAgICAgICAgICAgICAgICAgICAvL29iamVjdC5DdXJyZW50UmVjKys7XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBvYmplY3QuZXhlY3V0ZVF1ZXJ5cmVzdWx0LmRhdGFbb2JqZWN0LkN1cnJlbnRSZWNdID0gTmV3VmFsO1xyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKHRoaXMucGFyYW1Db25maWcuREVCVUdfRkxBRykgY29uc29sZS5sb2coXCJvYmplY3QuZXhlY3V0ZVF1ZXJ5cmVzdWx0IHBvc3RcIik7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnBhcmFtQ29uZmlnLkRFQlVHX0ZMQUcpIGNvbnNvbGUubG9nKG9iamVjdC5leGVjdXRlUXVlcnlyZXN1bHQpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIGxldCBOZXdWYWxBcnI6YW55ID0gW107XHJcbiAgICAgICAgICAgICAgICAgIE5ld1ZhbEFyci5wdXNoKE5ld1ZhbCk7XHJcbiAgICAgICAgICAgIGxldCByZXN1bHQgPSB7XHJcbiAgICAgICAgICAgICAgZGF0YTogTmV3VmFsQXJyLFxyXG4gICAgICAgICAgICAgIHRvdGFsOiAxXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgb2JqZWN0LmV4ZWN1dGVRdWVyeXJlc3VsdCA9IHJlc3VsdDtcclxuICAgICAgICAgICAgICAgICAgICBvYmplY3QuQ3VycmVudFJlYyA9IDA7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgdGhpcy5zaG93Tm90aWZpY2F0aW9uKCdzdWNjZXNzJywgXCJEYXRhIHNhdmVkIHN1Y2Nlc3NmdWxseVwiKTtcclxuICAgICAgICAgIHZhciBkYXRhOmFueSA9IFtdO1xyXG4gICAgICAgICAgICAgICAgZGF0YS5wdXNoKE5ld1ZhbClcclxuICAgICAgICAgIGlmIChvYmplY3QuaXNOZXcgPT0gdHJ1ZSkge1xyXG4gICAgICAgICAgICAgICAgICBvYmplY3QuaXNOZXcgPSBmYWxzZTtcclxuICAgICAgICAgICAgaWYgKHR5cGVvZiBvYmplY3QuY2FsbEJhY2tQb3N0X0luc2VydCAhPT0gXCJ1bmRlZmluZWRcIikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgLy9vYmplY3QuY2FsbEJhY2tQb3N0X0luc2VydChvYmplY3QsIE5ld1ZhbCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNoZWNrTGFzdElkKG9iamVjdCwgTmV3VmFsLFBhZ2UpXHJcbiAgICAgICAgICAgICAgICAgICAgICBvYmplY3QuY2FsbEJhY2tQb3N0X0luc2VydC5hcHBseShvYmplY3QsIGRhdGEpO1xyXG4gICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIGlmICh0eXBlb2Ygb2JqZWN0LmNhbGxCYWNrUG9zdF9VcGRhdGUgIT09IFwidW5kZWZpbmVkXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICBvYmplY3QuY2FsbEJhY2tQb3N0X1VwZGF0ZS5hcHBseShvYmplY3QsIGRhdGEpO1xyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIC8vUkVNT1ZFXHJcbiAgICAgICAgICAgICAgICBvYmplY3QuZXhlY3V0ZVF1ZXJ5cmVzdWx0LmRhdGEuc3BsaWNlKG9iamVjdC5DdXJyZW50UmVjLCAxKTtcclxuICAgICAgICAgICAgICAgIG9iamVjdC5leGVjdXRlUXVlcnlyZXN1bHQudG90YWwtLTtcclxuICAgICAgICAgIGlmICh0aGlzLnBhcmFtQ29uZmlnLkRFQlVHX0ZMQUcpIGNvbnNvbGUubG9nKFwib2JqZWN0LkN1cnJlbnRSZWM6XCIgKyBvYmplY3QuQ3VycmVudFJlYylcclxuICAgICAgICAgIGlmIChvYmplY3QuQ3VycmVudFJlYyA+IDApIHtcclxuICAgICAgICAgICAgICAgICAgb2JqZWN0LkN1cnJlbnRSZWMtLTtcclxuICAgICAgICAgICAgb2JqZWN0LmZvcm0ucmVzZXQob2JqZWN0LmV4ZWN1dGVRdWVyeXJlc3VsdC5kYXRhW29iamVjdC5DdXJyZW50UmVjXSwgeyBlbWl0RXZlbnQ6IG9iamVjdC5lbWl0RXZlbnQgIT0gbnVsbCA/IG9iamVjdC5lbWl0RXZlbnQgOiB0cnVlIH0pO1xyXG4gICAgICAgICAgICAgICAgICBpZiAob2JqZWN0LmlzTmV3ID09IHRydWUpXHJcbiAgICAgICAgICAgICAgICAgICAgb2JqZWN0LmlzTmV3ID0gZmFsc2U7XHJcblxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIG9iamVjdC5mb3JtLnJlc2V0KG9iamVjdC5mb3JtSW5pdGlhbFZhbHVlcywgeyBlbWl0RXZlbnQ6IG9iamVjdC5lbWl0RXZlbnQgIT0gbnVsbCA/IG9iamVjdC5lbWl0RXZlbnQgOiB0cnVlIH0pO1xyXG4gICAgICAgICAgICAgICAgICBvYmplY3QuaXNOZXcgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICBpZiAodGhpcy5wYXJhbUNvbmZpZy5ERUJVR19GTEFHKSBjb25zb2xlLmxvZyhcIm9iamVjdC5pc05ldzpcIiArIG9iamVjdC5pc05ldylcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgIGxldCBOZXdWYWwxOmFueSA9IFtdO1xyXG4gICAgICAgICAgICAgICAgTmV3VmFsMS5wdXNoKE5ld1ZhbCk7XHJcbiAgICAgICAgICBpZiAodHlwZW9mIG9iamVjdC5jYWxsQmFja1JlbW92ZUF0dCAhPT0gXCJ1bmRlZmluZWRcIilcclxuICAgICAgICAgICAgb2JqZWN0LmNhbGxCYWNrUmVtb3ZlQXR0KG9iamVjdCwgTmV3VmFsMSk7XHJcbiAgICAgICAgICBpZiAodHlwZW9mIG9iamVjdC5jYWxsQmFja1Bvc3RfUmVtb3ZlICE9PSBcInVuZGVmaW5lZFwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBvYmplY3QuY2FsbEJhY2tQb3N0X1JlbW92ZS5hcHBseShvYmplY3QsIE5ld1ZhbDEpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKHRoaXMucGFyYW1Db25maWcuREVCVUdfRkxBRykgY29uc29sZS5sb2coXCJoZXJlMlwiKTtcclxuICAgICAgaWYgKG9iamVjdC5hY3Rpb24gIT0gXCJSRU1PVkVcIikge1xyXG4gICAgICAgIG9iamVjdC5zdGFyU2VydmljZXMuZml4TXVsdGlTZWxlY3RGaWVsZHNfTmV3VmFsKG9iamVjdCwgTmV3VmFsKVxyXG4gICAgICAgIG9iamVjdC5mb3JtLnJlc2V0KE5ld1ZhbCwgeyBlbWl0RXZlbnQ6IG9iamVjdC5lbWl0RXZlbnQgIT0gbnVsbCA/IG9iamVjdC5lbWl0RXZlbnQgOiB0cnVlIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgIGlmIChvYmplY3QuZGlhYmxlRW1pdFNhdmUgPT0gdHJ1ZSkgeyB9XHJcbiAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAgICBvYmplY3Quc2F2ZUNvbXBsZXRlZE91dHB1dC5lbWl0KE5ld1ZhbCk7XHJcbiAgICAgIGlmIChvYmplY3QuaXNDaGlsZCA9PSB0cnVlKSB7XHJcbiAgICAgICAgICAgICAgbGV0IHBhcmFtQ29uZmlnID0ge1xyXG4gICAgICAgICAgICAgICAgXCJOYW1lXCI6IFwiY2hpbGRSZWNvcmRzXCIsXHJcbiAgICAgICAgICAgICAgICBcIlZhbFwiOiBvYmplY3QuZXhlY3V0ZVF1ZXJ5cmVzdWx0LnRvdGFsXHJcbiAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICBzZXRQYXJhbUNvbmZpZyhwYXJhbUNvbmZpZyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgb2JqZWN0LmFjdGlvbiA9IFwiXCI7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0UHJpbWFyS2V5TmFtZUFycihvYmplY3QsIHRydWUpO1xyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIGVyciA9PiB7XHJcbiAgICAgICAgICAgIC8vYWxlcnQgKCdlcnJvcjonICsgZXJyLm1lc3NhZ2UpO1xyXG4gICAgICAgICAgICB0aGlzLnNob3dFcnJvck1zZyhvYmplY3QsIGVycik7XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgfVxyXG4gIHB1YmxpYyBjaGVja0xhc3RJZCAob2JqZWN0LCBOZXdWYWwsUGFnZSl7XHJcbiAgICBjb25zb2xlLmxvZyhcImNoZWNrTGFzdElkOk5ld1ZhbDpcIixOZXdWYWwsIFwiUGFnZTpcIixQYWdlLCBcIlBLX0FVVE86XCIsIG9iamVjdC5QS19BVVRPIClcclxuICAgIGlmICh0eXBlb2Ygb2JqZWN0LlBLX0FVVE8gIT0gXCJ1bmRlZmluZWRcIiAmJiBvYmplY3QuUEtfQVVUTyAhPSBcIlwiKXtcclxuICAgICAgbGV0IGRhdGEgPSBQYWdlLmRhdGE7XHJcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpPCBkYXRhLmxlbmd0aDsgaSsrKXtcclxuICAgICAgICBsZXQgcmVjID0gZGF0YVtpXTtcclxuICAgICAgICBsZXQgcXVlcnkgPSByZWMucXVlcnk7XHJcbiAgICAgICAgaWYgKHF1ZXJ5LnN0YXJ0c1dpdGgoXCJHRVRfTEFTVF9JRFwiKSl7XHJcbiAgICAgICAgICBsZXQgZGF0YUFyciA9IHJlYy5kYXRhO1xyXG4gICAgICAgICAgbGV0IGRhdGFSZWMgPSBkYXRhQXJyWzBdO1xyXG4gICAgICAgICAgY29uc29sZS5sb2coXCJjaGVja0xhc3RJZDpkYXRhUmVjOlwiLGRhdGFSZWMpO1xyXG4gICAgICAgICAgbGV0IGtleXMgPSBPYmplY3Qua2V5cyhkYXRhUmVjKTtcclxuICAgICAgICAgIGxldCB2YWwgPSBkYXRhUmVjW2tleXNbMF1dO1xyXG4gICAgICAgICAgY29uc29sZS5sb2coXCJjaGVja0xhc3RJZDp2YWw6XCIsdmFsKTtcclxuICAgICAgICAgIE5ld1ZhbFtvYmplY3QuUEtfQVVUT10gPSB2YWw7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4gIHB1YmxpYyBzYXZlQ2hhbmdlc19mb3JtKGZvcm06IGFueSwgb2JqZWN0OmFueSk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMucGFyYW1Db25maWcuREVCVUdfRkxBRykgY29uc29sZS5sb2coXCJ0aGlzLmZvcm06aW52YWxpZFwiLG9iamVjdC5mb3JtLmludmFsaWQpO1xyXG4gICAgaWYgKHRoaXMucGFyYW1Db25maWcuREVCVUdfRkxBRykgY29uc29sZS5sb2coJ3NhdmVDaGFuZ2VzX2Zvcm0gOiBvYmplY3QuaXNOZXcgOicgKyBvYmplY3QuaXNOZXcpO1xyXG4gICAgaWYgKHRoaXMucGFyYW1Db25maWcuREVCVUdfRkxBRykgY29uc29sZS5sb2cob2JqZWN0LmNvbXBvbmVudENvbmZpZy5yb3V0aW5lQXV0aCk7XHJcbiAgICBpZiAob2JqZWN0LmNvbXBvbmVudENvbmZpZy5yb3V0aW5lQXV0aCAhPSBudWxsKSB7XHJcbiAgICAgIGlmICh0aGlzLnBhcmFtQ29uZmlnLkRFQlVHX0ZMQUcpIGNvbnNvbGUubG9nKFwiYXV0aExldmVsOlwiICsgb2JqZWN0LmNvbXBvbmVudENvbmZpZy5yb3V0aW5lQXV0aC5hdXRoTGV2ZWwpO1xyXG4gICAgICBpZiAob2JqZWN0LmNvbXBvbmVudENvbmZpZy5yb3V0aW5lQXV0aC5hdXRoTGV2ZWwgIT0gMikge1xyXG4gICAgICAgICAgICBsZXQgZGlhbG9nU3RydWMgPSB7XHJcbiAgICAgICAgICAgICAgbXNnOiB0aGlzLnJlYWRPbmx5TXNnLFxyXG4gICAgICAgICAgdGl0bGU6IFwiV2FybmluZ1wiLFxyXG4gICAgICAgICAgICAgIGluZm86IG51bGwsXHJcbiAgICAgICAgICBvYmplY3Q6IG9iamVjdCxcclxuICAgICAgICAgIGFjdGlvbjogdGhpcy5Pa0FjdGlvbnMsXHJcbiAgICAgICAgICBjYWxsYmFjazogbnVsbFxyXG4gICAgICAgIH07XHJcbiAgICAgICAgICAgICAgdGhpcy5zaG93Q29uZmlybWF0aW9uKGRpYWxvZ1N0cnVjKTtcclxuICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgIGlmICh0aGlzLnBhcmFtQ29uZmlnLkRFQlVHX0ZMQUcpIGNvbnNvbGUubG9nKCdzYXZlQ2hhbmdlc19mb3JtIDogb2JqZWN0LmZvcm0uZGlydHk6JyAsIG9iamVjdC5mb3JtLmRpcnR5ICwgXCIgb2JqZWN0LmlzQ2hpbGQ6XCIsIG9iamVjdC5pc0NoaWxkLCBcIiBvYmplY3QuZm9ybS5pbnZhbGlkOlwiLCBvYmplY3QuZm9ybS5pbnZhbGlkLCBcIiBvYmplY3QuZm9ybTpcIiwgb2JqZWN0LmZvcm0pO1xyXG4gICAgaWYgKCghb2JqZWN0LmZvcm0uZGlydHkpICYmIG9iamVjdC5pc0NoaWxkKVxyXG4gICAgICAgIHJldHVybjtcclxuICAgIGlmIChvYmplY3QuZm9ybS5pbnZhbGlkKSB7XHJcbiAgICAgIG9iamVjdC5zdWJtaXR0ZWQgPSB0cnVlO1xyXG4gICAgICBpZiAodGhpcy5wYXJhbUNvbmZpZy5ERUJVR19GTEFHKSBjb25zb2xlLmxvZyhcIm9iamVjdC5mb3JtOlwiLG9iamVjdC5mb3JtKTtcclxuICAgICAgLy90aGlzLnNob3dPa01zZyhvYmplY3QsIHRoaXMuZmllbGRzUmVxdWlyZWRNc2csIFwiRXJyb3JcIik7IC8vIFRoaXMgd2FzIGNvbW1lbnRlZCBmb3IgRm9ybSBEcmFnLiBDYXNlIGNoYW5nZSBwYWdlIGFuZCBzZWxlY3QgYSBmaWVsZCBcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH1cclxuICAgIGxldCBOZXdWYWw6YW55PXt9O1xyXG4gICAgICAgIC8vb2JqZWN0LkJvZHkgPSBbXTsgICAvLyBvbmx5IG9uZSB0cmFuc2FjdGlvbiBhbGxvd2VkIGluICBmb3JtLiBNb3ZlZCB0byBmb3JtXHJcbiAgICAgICAgLy9OZXdWYWwgPSAgZm9ybS52YWx1ZTtcclxuICAgICAgICAvL05ld1ZhbCA9IE9iamVjdC5hc3NpZ24oe30sIGZvcm0udmFsdWUsIHt9KVxyXG4gICAgICAgIE5ld1ZhbCA9IHsuLi5mb3JtLnZhbHVlfTtcclxuICAgIGlmICh0aGlzLnBhcmFtQ29uZmlnLkRFQlVHX0ZMQUcpIGNvbnNvbGUubG9nKFwiLS0tLS0gTmV3VmFsOlwiKVxyXG4gICAgICAgIGlmICh0aGlzLnBhcmFtQ29uZmlnLkRFQlVHX0ZMQUcpIGNvbnNvbGUubG9nKE5ld1ZhbCk7XHJcblxyXG4gICAgICAgIGlmIChvYmplY3QuaXNOZXcgPT0gdHJ1ZSlcclxuICAgICAgICAgIE5ld1ZhbFtcIl9RVUVSWVwiXSA9IG9iamVjdC5pbnNlcnRDTUQ7XHJcbiAgICAgICAgZWxzZVxyXG4gICAgICAgICAgTmV3VmFsW1wiX1FVRVJZXCJdID0gb2JqZWN0LnVwZGF0ZUNNRDtcclxuICAgICAgICAvL29iamVjdC5pc05ldyA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuZXhlY3N0YXJTZXJ2aWNlc19mb3JtKE5ld1ZhbCwgb2JqZWN0KTtcclxuICAgIH1cclxuICBwdWJsaWMgZW50ZXJRdWVyeUFjdF9mb3JtKGZvcm06IGFueSwgb2JqZWN0OmFueSk6IHZvaWQge1xyXG4gICAgICAgIG9iamVjdC5DdXJyZW50UmVjID0gMDtcclxuICAgIG9iamVjdC5leGVjdXRlUXVlcnlyZXN1bHQgPSBbXTtcclxuICAgIG9iamVjdC5leGVjdXRlUXVlcnlyZXN1bHQucmVzdWx0ID0gMDtcclxuICAgICAgICBcclxuICAgICAgICBvYmplY3QuaXNTZWFyY2ggPSB0cnVlO1xyXG4gICAgICAgIG9iamVjdC5pc05ldyA9IGZhbHNlO1xyXG4gICAgaWYgKG9iamVjdC5wYXJhbUNvbmZpZy5ERUJVR19GTEFHKSBjb25zb2xlLmxvZygnZW50ZXJRdWVyeSA6IG9iamVjdC5pc1NlYXJjaDonICsgb2JqZWN0LmlzU2VhcmNoKTtcclxuICAgICAgICBvYmplY3QuY2xlYXJDb21wbGV0ZWRPdXRwdXQuZW1pdChvYmplY3QuZm9ybUluaXRpYWxWYWx1ZXMpO1xyXG4gICAgICAgIFxyXG4gICAgLy8gb2JqZWN0LmltZ19nYWxsZXJ5ID0gW107XHJcbiAgICAvLyBvYmplY3QuaW1nX2FyciA9IFtdO1xyXG4gICAgb2JqZWN0LmZvcm0ucmVzZXQob2JqZWN0LmZvcm1Jbml0aWFsVmFsdWVzLCB7IGVtaXRFdmVudDogb2JqZWN0LmVtaXRFdmVudCAhPSBudWxsID8gb2JqZWN0LmVtaXRFdmVudCA6IHRydWUgfSk7XHJcbiAgICAgICAgb2JqZWN0LnN0YXJTZXJ2aWNlcy5zZXRQcmltYXJLZXlOYW1lQXJyKG9iamVjdCwgZmFsc2UpO1xyXG4gICAgICAgIHRoaXMuaGVscE1zZyA9ICBvYmplY3Quc3RhclNlcnZpY2VzLmdldE5MUyhbXSxcIkhFTFBfRU5URVJfUVVFUllcIix0aGlzLmVudGVyUXVlcnlNc2cpO1xyXG5cclxuICAgICAgfVxyXG5cclxuICBwdWJsaWMgc2V0UHJpbWFyS2V5TmFtZUFycihvYmplY3Q6YW55LCB2YWx1ZTphbnkpIHtcclxuICAgICAgICBpZiAodHlwZW9mIG9iamVjdC5wcmltYXJLZXlSZWFkT25seUFyciAhPT0gXCJ1bmRlZmluZWRcIikge1xyXG4gICAgICAgICAgbGV0IGtleXMgPSBPYmplY3Qua2V5cyhvYmplY3QucHJpbWFyS2V5UmVhZE9ubHlBcnIpO1xyXG4gICAgICBmb3IgKGxldCBrID0gMDsgayA8IGtleXMubGVuZ3RoOyBrKyspIHtcclxuICAgICAgICAgICAgICBpZiAob2JqZWN0LnBhcmFtQ29uZmlnLkRFQlVHX0ZMQUcpIGNvbnNvbGUubG9nKFwiW2tleXNba106XCIsIGtleXNba10sIFwiIHZhbHVlOlwiLCB2YWx1ZSk7XHJcbiAgICAgICAgICAgICAgb2JqZWN0LnByaW1hcktleVJlYWRPbmx5QXJyW2tleXNba11dID0gdmFsdWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcblxyXG4gIHB1YmxpYyBlbnRlclF1ZXJ5X2Zvcm0oZm9ybTogYW55LCBvYmplY3Q6YW55KTogdm9pZCB7XHJcbiAgICAgICAgaWYgKHRoaXMucGFyYW1Db25maWcuREVCVUdfRkxBRykgY29uc29sZS5sb2coXCJ0ZXN0OmRpcnR5OlwiLCBvYmplY3QuZm9ybS5kaXJ0eSk7XHJcbiAgICBpZiAob2JqZWN0LmZvcm0uZGlydHkgPT0gdHJ1ZSkge1xyXG4gICAgICAgICAgbGV0IGRpYWxvZ1N0cnVjID0ge1xyXG4gICAgICAgICAgICBtc2c6IHRoaXMuc2F2ZUNoYW5nZXNNc2csXHJcbiAgICAgICAgdGl0bGU6IHRoaXMucGxlYXNlQ29uZmlybU1zZyxcclxuICAgICAgICAgICAgaW5mbzogZm9ybSxcclxuICAgICAgICBvYmplY3Q6IG9iamVjdCxcclxuICAgICAgICBhY3Rpb246IHRoaXMuWWVzTm9BY3Rpb25zLFxyXG4gICAgICAgIGNhbGxiYWNrOiB0aGlzLmVudGVyUXVlcnlBY3RfZm9ybVxyXG4gICAgICB9O1xyXG4gICAgICAgICAgICB0aGlzLnNob3dDb25maXJtYXRpb24oZGlhbG9nU3RydWMpO1xyXG4gICAgICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICB0aGlzLmVudGVyUXVlcnlBY3RfZm9ybShmb3JtLCBvYmplY3QpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuXHJcbiAgcHVibGljIG9uQ2FuY2VsX2Zvcm0oZTphbnksIG9iamVjdDphbnkpOiB2b2lkIHtcclxuICAgIC8vb2JqZWN0LmltZ19nYWxsZXJ5ID0gW107XHJcbiAgIC8vIG9iamVjdC5pbWdfYXJyID0gW107XHJcbiAgICBvYmplY3QuZm9ybS5yZXNldChvYmplY3QuZm9ybUluaXRpYWxWYWx1ZXMsIHsgZW1pdEV2ZW50OiBvYmplY3QuZW1pdEV2ZW50ICE9IG51bGwgPyBvYmplY3QuZW1pdEV2ZW50IDogdHJ1ZSB9KTtcclxuICAgICAgICBvYmplY3QuaXNTZWFyY2ggPSBmYWxzZTtcclxuICAgICAgICBvYmplY3QuaXNOZXcgPSB0cnVlO1xyXG4gICAgICAgIG9iamVjdC5jbGVhckNvbXBsZXRlZE91dHB1dC5lbWl0KG9iamVjdC5mb3JtSW5pdGlhbFZhbHVlcyk7XHJcbiAgICBvYmplY3QuZXhlY3V0ZVF1ZXJ5cmVzdWx0ID0gW107XHJcbiAgICBvYmplY3QuZXhlY3V0ZVF1ZXJ5cmVzdWx0LnJlc3VsdCA9IDA7XHJcbiAgICAgICAgb2JqZWN0Lm15RmlsZXM9W107XHJcbiAgICAgICAgb2JqZWN0LkN1cnJlbnRSZWMgPSAwO1xyXG4gICAgICAgIG9iamVjdC5GT1JNX1RSSUdHRVJfRkFJTFVSRSA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuaGVscE1zZyA9IFwiXCI7XHJcbiAgICAgICAgXHJcbiAgICB9XHJcbiAgcHVibGljIHNob3dPa01zZyhvYmplY3Q6YW55LCBtc2c6YW55LCBzZXZlcml0eTphbnkpIHtcclxuICAgICAgbGV0IGRpYWxvZ1N0cnVjID0ge1xyXG4gICAgICAgIG1zZzogbXNnLFxyXG4gICAgICB0aXRsZTogc2V2ZXJpdHksXHJcbiAgICAgICAgaW5mbzogbnVsbCxcclxuICAgICAgb2JqZWN0OiBvYmplY3QsXHJcbiAgICAgIGFjdGlvbjogdGhpcy5Pa0FjdGlvbnMsXHJcbiAgICAgIGNhbGxiYWNrOiBudWxsXHJcbiAgICB9O1xyXG4gICAgICAgIHRoaXMuc2hvd0NvbmZpcm1hdGlvbihkaWFsb2dTdHJ1Yyk7XHJcbiAgICB9XHJcbiAgcHVibGljIG9uUmVtb3ZlX2Zvcm0oZm9ybTphbnksIG9iamVjdDphbnkpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLnBhcmFtQ29uZmlnLkRFQlVHX0ZMQUcpIGNvbnNvbGUubG9nKFwib2JqZWN0LmlzTmV3OlwiLCBvYmplY3QuaXNOZXcpXHJcbiAgICBpZiAob2JqZWN0LmlzTmV3ID09IHRydWUpIHtcclxuICAgICAgICAgIHRoaXMub25DYW5jZWxfZm9ybShudWxsLCBvYmplY3QpXHJcbiAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAodGhpcy5wYXJhbUNvbmZpZy5ERUJVR19GTEFHKSBjb25zb2xlLmxvZyhcIm9iamVjdC5leGVjdXRlUXVlcnlyZXN1bHQ6XCIpO1xyXG4gICAgICAgIGlmICh0aGlzLnBhcmFtQ29uZmlnLkRFQlVHX0ZMQUcpIGNvbnNvbGUubG9nKG9iamVjdC5leGVjdXRlUXVlcnlyZXN1bHQpO1xyXG4gICAgaWYgKCh0eXBlb2Ygb2JqZWN0LmV4ZWN1dGVRdWVyeXJlc3VsdCAhPT0gXCJ1bmRlZmluZWRcIikgJiYgKG9iamVjdC5leGVjdXRlUXVlcnlyZXN1bHQudG90YWwgPT0gMCkpIHtcclxuICAgICAgdGhpcy5zaG93T2tNc2cob2JqZWN0LCB0aGlzLm5vdGhpbmdUb0RlbGV0ZWxNc2csIFwiV2FybmluZ1wiKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgIGlmICh0aGlzLnBhcmFtQ29uZmlnLkRFQlVHX0ZMQUcpIGNvbnNvbGUubG9nKCdvblJlbW92ZSA6IGlzQ2hpbGQgJyArIG9iamVjdC5pc0NoaWxkICsgXCIgb2JqZWN0LmlzTWFzdGVyOlwiICsgb2JqZWN0LmlzTWFzdGVyKTtcclxuICAgIGxldCBOZXdWYWwgPSBmb3JtLmdldFJhd1ZhbHVlKCk7XHJcbiAgICAgICAgaWYgKHRoaXMucGFyYW1Db25maWcuREVCVUdfRkxBRykgY29uc29sZS5sb2coTmV3VmFsKTtcclxuICAgICAgICBpZiAodGhpcy5wYXJhbUNvbmZpZy5ERUJVR19GTEFHKSBjb25zb2xlLmxvZyhcIm9iamVjdC5leGVjdXRlUXVlcnlyZXN1bHQ6XCIgKyBvYmplY3QuZXhlY3V0ZVF1ZXJ5cmVzdWx0KVxyXG4gICAgaWYgKG9iamVjdC5pc0NoaWxkID09IGZhbHNlKSB7XHJcbiAgICAgICAgICB2YXIgcGFyYW1Db25maWcgPSBnZXRQYXJhbUNvbmZpZygpO1xyXG4gICAgICAgICAgaWYgKHRoaXMucGFyYW1Db25maWcuREVCVUdfRkxBRykgY29uc29sZS5sb2cocGFyYW1Db25maWcpO1xyXG4gICAgICAgICAgaWYgKHRoaXMucGFyYW1Db25maWcuREVCVUdfRkxBRykgY29uc29sZS5sb2coXCJwYXJhbUNvbmZpZy5jaGlsZFJlY29yZHM6XCIgKyBwYXJhbUNvbmZpZy5jaGlsZFJlY29yZHMpXHJcbiAgICAgIGlmICh0eXBlb2YgcGFyYW1Db25maWcuY2hpbGRSZWNvcmRzID09PSBcInVuZGVmaW5lZFwiKSB7XHJcbiAgICAgICAgICAgIHBhcmFtQ29uZmlnLmNoaWxkUmVjb3JkcyA9IDA7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICBpZiAoKHBhcmFtQ29uZmlnLmNoaWxkUmVjb3JkcyAhPSAwKSAmJiAob2JqZWN0LmlzTWFzdGVyID09IHRydWUpKSB7XHJcbiAgICAgICAgICAgIGxldCBkaWFsb2dTdHJ1YyA9IHtcclxuICAgICAgICAgICAgICBtc2c6IHRoaXMuZGVsZXRlRGV0YWlsTXNnLFxyXG4gICAgICAgICAgdGl0bGU6IFwiV2FybmluZ1wiLFxyXG4gICAgICAgICAgICAgIGluZm86IG51bGwsXHJcbiAgICAgICAgICBvYmplY3Q6IG9iamVjdCxcclxuICAgICAgICAgIGFjdGlvbjogdGhpcy5Pa0FjdGlvbnMsXHJcbiAgICAgICAgICBjYWxsYmFjazogbnVsbFxyXG4gICAgICAgIH07XHJcbiAgICAgICAgICAgICAgdGhpcy5zaG93Q29uZmlybWF0aW9uKGRpYWxvZ1N0cnVjKTtcclxuICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMucGFyYW1Db25maWcuREVCVUdfRkxBRykgY29uc29sZS5sb2cocGFyYW1Db25maWcpO1xyXG5cclxuICAgICAgICBsZXQgZGlhbG9nU3RydWMgPSB7XHJcbiAgICAgICAgICBtc2c6IHRoaXMuZGVsZXRlQ29uZmlybU1zZyxcclxuICAgICAgdGl0bGU6IHRoaXMucGxlYXNlQ29uZmlybU1zZyxcclxuICAgICAgICAgIGluZm86IGZvcm0sXHJcbiAgICAgIG9iamVjdDogb2JqZWN0LFxyXG4gICAgICBhY3Rpb246IHRoaXMuWWVzTm9BY3Rpb25zLFxyXG4gICAgICBjYWxsYmFjazogdGhpcy5SZW1vdmVfZm9ybUFjdFxyXG4gICAgfTtcclxuICAgICAgICAgIHRoaXMuc2hvd0NvbmZpcm1hdGlvbihkaWFsb2dTdHJ1Yyk7XHJcblxyXG5cclxuICAgIH1cclxuICBwdWJsaWMgUmVtb3ZlX2Zvcm1BY3QoZm9ybTphbnksIG9iamVjdDphbnkpIHtcclxuICAgICAgaWYgKG9iamVjdC5wYXJhbUNvbmZpZy5ERUJVR19GTEFHKSBjb25zb2xlLmxvZyhcImluIFJlbW92ZV9mb3JtQWN0XCIpO1xyXG4gICAgbGV0IE5ld1ZhbDphbnkgPXt9O1xyXG4gICAgTmV3VmFsID0gZm9ybS5nZXRSYXdWYWx1ZSgpO1xyXG4gICAgICBpZiAob2JqZWN0LnBhcmFtQ29uZmlnLkRFQlVHX0ZMQUcpIGNvbnNvbGUubG9nKE5ld1ZhbCk7XHJcbiAgICAgIC8vb2JqZWN0LmZvcm0ucmVzZXQob2JqZWN0LmZvcm1Jbml0aWFsVmFsdWVzKTtcclxuICAgICAgb2JqZWN0LmFjdGlvbiA9IFwiUkVNT1ZFXCI7XHJcblxyXG4gICAgICBOZXdWYWxbXCJfUVVFUllcIl0gPSBvYmplY3QuZGVsZXRlQ01EO1xyXG4gICAgICBvYmplY3Quc3RhclNlcnZpY2VzLmV4ZWNzdGFyU2VydmljZXNfZm9ybShOZXdWYWwsIG9iamVjdCk7XHJcbiAgICB9XHJcblxyXG5cclxuICBwdWJsaWMgb25OZXdfZm9ybShlOmFueSwgb2JqZWN0OmFueSk6IHZvaWQge1xyXG4gICAgaWYgKG9iamVjdC5wYXJhbUNvbmZpZy5ERUJVR19GTEFHKSBjb25zb2xlLmxvZyhcIm9uTmV3OiBvYmplY3QubWFzdGVyS2V5OlwiICwgb2JqZWN0Lm1hc3RlcktleSx7Li4ub2JqZWN0LmZvcm0udmFsdWV9KTtcclxuICAgICAgICBvYmplY3QubXlGaWxlcz1bXTtcclxuICAgIC8vIG9iamVjdC5pbWdfZ2FsbGVyeSA9IFtdO1xyXG4gICAgLy8gb2JqZWN0LmltZ19hcnIgPSBbXTtcclxuICAgIG9iamVjdC5mb3JtLnJlc2V0KG9iamVjdC5mb3JtSW5pdGlhbFZhbHVlcywgeyBlbWl0RXZlbnQ6IG9iamVjdC5lbWl0RXZlbnQgIT0gbnVsbCA/IG9iamVjdC5lbWl0RXZlbnQgOiB0cnVlIH0pO1xyXG4gICAgY29uc29sZS5sb2coXCJjaGVja2luZzpcIiwgb2JqZWN0LmZvcm1Jbml0aWFsVmFsdWVzLG9iamVjdC5mb3JtLnZhbHVlIClcclxuICAgICAgICBvYmplY3QuY2xlYXJDb21wbGV0ZWRPdXRwdXQuZW1pdChvYmplY3QuZm9ybUluaXRpYWxWYWx1ZXMpO1xyXG4gICAgICAgIG9iamVjdC5pc1NlYXJjaCA9IGZhbHNlO1xyXG4gICAgICAgIG9iamVjdC5pc05ldyA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5zZXRQcmltYXJLZXlOYW1lQXJyKG9iamVjdCwgZmFsc2UpO1xyXG4gICAgfVxyXG4gICAgLyoqKioqKioqKioqKioqKioqKiogR3JpZCBmdW5jdGlvbnMgICoqKioqKioqL1xyXG4gIHB1YmxpYyBhZGRIYW5kbGVyX2dyaWQob2JqZWN0OmFueSk6IHZvaWQge1xyXG4gICAgICBpZiAodHlwZW9mIG9iamVjdC5tYXN0ZXJLZXlOYW1lQXJyICE9IFwidW5kZWZpbmVkXCIpIHtcclxuICAgICAgICBpZiAob2JqZWN0LmlzQ2hpbGQgPT0gdHJ1ZSkge1xyXG4gICAgICAgICAgaWYgKG9iamVjdC5tYXN0ZXJLZXlBcnJbMF0gPT0gXCJcIikge1xyXG4gICAgICAgICAgICB0aGlzLnNob3dPa01zZyh0aGlzLCB0aGlzLnNhdmVNYXN0ZXJNc2csIFwiRXJyb3JcIik7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICBpZiAob2JqZWN0LmlzQ2hpbGQgPT0gdHJ1ZSkge1xyXG4gICAgICAgICAgICBpZiAob2JqZWN0Lm1hc3RlcktleSA9PSBcIlwiKSB7XHJcbiAgICAgICAgICAgICAgdGhpcy5zaG93T2tNc2codGhpcywgdGhpcy5zYXZlTWFzdGVyTXNnLCBcIkVycm9yXCIpO1xyXG4gICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gIFxyXG4gICAgICBpZiAob2JqZWN0LnBhcmFtQ29uZmlnLkRFQlVHX0ZMQUcpIGNvbnNvbGUubG9nKFwidGVzdDQxOm9iamVjdC5ncmlkSW5pdGlhbFZhbHVlczpcIiwgXHJcbiAgICAgICAgb2JqZWN0LmdyaWRJbml0aWFsVmFsdWVzLCBvYmplY3QubWFzdGVyS2V5TmFtZUFyciwgb2JqZWN0Lm1hc3RlcktleUFyciwgXCJlZGl0ZWRSb3dJbmRleDpcIiwgb2JqZWN0LmVkaXRlZFJvd0luZGV4LCBcImlzQ2hpbGQ6XCIsIG9iamVjdC5pc0NoaWxkKTtcclxuICAgICAgb2JqZWN0LnNhdmVDdXJyZW50KCk7XHJcbiAgICAgIHRoaXMuc2V0UHJpbWFyS2V5TmFtZUFycihvYmplY3QsIGZhbHNlKTtcclxuICAgICAgLyogb2JqZWN0LmdyaWRJbml0aWFsVmFsdWVzLk1PRFVMRSA9IG9iamVjdC5tYXN0ZXJLZXk7Ki9cclxuICAgICAgaWYgKCAodHlwZW9mIG9iamVjdC5tYXN0ZXJLZXlOYW1lQXJyICE9IFwidW5kZWZpbmVkXCIpICYmIChvYmplY3QubWFzdGVyS2V5TmFtZUFyci5sZW5ndGggIT0gMCkgKVxyXG4gICAgICB7XHJcbiAgICAgICAgdGhpcy5zZXRQcmltYXJLZXlOYW1lQXJyKG9iamVjdCwgZmFsc2UpO1xyXG4gICAgICAgIGlmKG9iamVjdC5pc0NoaWxkID09IHRydWUpe1xyXG4gICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGk8IG9iamVjdC5tYXN0ZXJLZXlOYW1lQXJyLmxlbmd0aDsgaSsrKXtcclxuICAgICAgICAgICAgbGV0IHJlYWRPbmx5ID0gXCJpc1wiK29iamVjdC5tYXN0ZXJLZXlOYW1lQXJyW2ldICsgXCJyZWFkT25seVwiO1xyXG4gICAgICAgICAgICBpZiAob2JqZWN0LnByaW1hcktleVJlYWRPbmx5QXJyKXtcclxuICAgICAgICAgICAgICBvYmplY3QucHJpbWFyS2V5UmVhZE9ubHlBcnJbcmVhZE9ubHldID0gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBsZXQgZXhpc3RzID0gb2JqZWN0LmdyaWRJbml0aWFsVmFsdWVzW29iamVjdC5tYXN0ZXJLZXlOYW1lQXJyW2ldXVxyXG4gICAgICAgICAgICBpZiAob2JqZWN0LnBhcmFtQ29uZmlnLkRFQlVHX0ZMQUcpIGNvbnNvbGUubG9nKFwidGVzdDQyOm9iamVjdC5ncmlkSW5pdGlhbFZhbHVlczpleGlzdHM6XCIsZXhpc3RzLCBvYmplY3QuZ3JpZEluaXRpYWxWYWx1ZXMpO1xyXG4gICAgICAgICAgICAgIGlmICggZXhpc3RzICE9IGZhbHNlKXtcclxuICAgICAgICAgICAgICBvYmplY3QuZ3JpZEluaXRpYWxWYWx1ZXNbb2JqZWN0Lm1hc3RlcktleU5hbWVBcnJbaV1dID0gb2JqZWN0Lm1hc3RlcktleUFycltpXTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChvYmplY3QucGFyYW1Db25maWcuREVCVUdfRkxBRykgY29uc29sZS5sb2coXCJ0ZXN0NDI6b2JqZWN0LmdyaWRJbml0aWFsVmFsdWVzOjE6XCIsIG9iamVjdC5ncmlkSW5pdGlhbFZhbHVlcyk7XHJcbiAgICAgIH1cclxuICAgICAgZWxzZVxyXG4gICAgICB7XHJcbiAgICAgICAgaWYgKG9iamVjdC5wYXJhbUNvbmZpZy5ERUJVR19GTEFHKSBjb25zb2xlLmxvZyhcInRlc3Q0Om9iamVjdC5tYXN0ZXJLZXlOYW1lOlwiLCBvYmplY3QubWFzdGVyS2V5TmFtZSwgb2JqZWN0Lm1hc3RlcktleSk7XHJcbiAgICAgICAgaWYgKG9iamVjdC5tYXN0ZXJLZXlOYW1lICE9IFwiXCIgJiYgIG9iamVjdC5tYXN0ZXJLZXkgIT0gXCJcIil7XHJcbiAgICAgICAgICBvYmplY3QuZ3JpZEluaXRpYWxWYWx1ZXNbb2JqZWN0Lm1hc3RlcktleU5hbWVdID0gb2JqZWN0Lm1hc3RlcktleTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKG9iamVjdC5wYXJhbUNvbmZpZy5ERUJVR19GTEFHKSBjb25zb2xlLmxvZyhcInRlc3Q0MjpvYmplY3QuZ3JpZEluaXRpYWxWYWx1ZXM6MjpcIiwgb2JqZWN0LmdyaWRJbml0aWFsVmFsdWVzKTtcclxuICAgICAgfVxyXG4gICAgICBpZiAob2JqZWN0LnBhcmFtQ29uZmlnLkRFQlVHX0ZMQUcpIGNvbnNvbGUubG9nKFwidGVzdDQyOm9iamVjdC5ncmlkSW5pdGlhbFZhbHVlczpcIiwgb2JqZWN0LmdyaWRJbml0aWFsVmFsdWVzKTtcclxuICAgICAgb2JqZWN0LmNsb3NlRWRpdG9yKCk7XHJcbiAgICAgIG9iamVjdC5mb3JtR3JvdXAgPSBvYmplY3QuY3JlYXRlRm9ybUdyb3VwR3JpZChcclxuICAgICAgICBvYmplY3QuZ3JpZEluaXRpYWxWYWx1ZXNcclxuICAgICAgKTtcclxuICAgICAgb2JqZWN0LmZvcm1Hcm91cC5zZXRFcnJvcnMoe1xyXG4gICAgICAgIG5vdFVuaXF1ZTogdHJ1ZVxyXG4gICAgICB9KTtcclxuICAgICAgaWYgKG9iamVjdC5wYXJhbUNvbmZpZy5ERUJVR19GTEFHKSBjb25zb2xlLmxvZyhcIm9iamVjdC5mb3JtR3JvdXA6XCIsIG9iamVjdC5mb3JtR3JvdXApXHJcbiAgICAgIG9iamVjdC5pc05ldyA9IHRydWU7XHJcbiAgICAgIG9iamVjdC5ncmlkLmFkZFJvdyhvYmplY3QuZm9ybUdyb3VwKTtcclxuICAgICAgLy90aGlzLnNldFByaW1hcktleU5hbWVBcnIob2JqZWN0LCBmYWxzZSk7XHJcbiAgICAgIH1cclxuICBcclxuICAgIHB1YmxpYyByZW1vdmVIYW5kbGVyX2dyaWQoc2VuZGVyOmFueSwgb2JqZWN0OmFueSkge1xyXG4gICAgICAvL3NlbmRlci5jYW5jZWxDZWxsKCk7XHJcbiAgICAgIGxldCBwYXJhbUNvbmZpZyA9IGdldFBhcmFtQ29uZmlnKCk7XHJcbiAgICBpZiAob2JqZWN0LnBhcmFtQ29uZmlnLkRFQlVHX0ZMQUcpIGNvbnNvbGUubG9nKFwicmVtb3ZlSGFuZGxlcl9ncmlkIHBhcmFtQ29uZmlnOm9iamVjdC5pc01hc3RlciBcIiArIG9iamVjdC5pc01hc3Rlcik7XHJcbiAgICAgIGlmIChvYmplY3QucGFyYW1Db25maWcuREVCVUdfRkxBRykgY29uc29sZS5sb2cocGFyYW1Db25maWcpO1xyXG4gICAgaWYgKChwYXJhbUNvbmZpZy5jaGlsZFJlY29yZHMgIT0gMCkgJiYgKG9iamVjdC5pc01hc3RlciA9PSB0cnVlKSkge1xyXG4gICAgICAgIGxldCBkaWFsb2dTdHJ1YyA9IHtcclxuICAgICAgICAgIG1zZzogdGhpcy5kZWxldGVEZXRhaWxNc2csXHJcbiAgICAgICAgdGl0bGU6IFwiV2FybmluZ1wiLFxyXG4gICAgICAgICAgaW5mbzogbnVsbCxcclxuICAgICAgICBvYmplY3Q6IG9iamVjdCxcclxuICAgICAgICBhY3Rpb246IHRoaXMuT2tBY3Rpb25zLFxyXG4gICAgICAgIGNhbGxiYWNrOiBudWxsXHJcbiAgICAgIH07XHJcbiAgICAgICAgICB0aGlzLnNob3dDb25maXJtYXRpb24oZGlhbG9nU3RydWMpO1xyXG4gICAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9XHJcbiAgICBpZiAob2JqZWN0LnBhcmFtQ29uZmlnLkRFQlVHX0ZMQUcpIGNvbnNvbGUubG9nKFwib2JqZWN0LmVkaXRlZFJvd0luZGV4IDpcIiwgb2JqZWN0LmVkaXRlZFJvd0luZGV4LCBvYmplY3QuZ3JpZC5kYXRhLmRhdGEpXHJcbiAgICBpZiAodHlwZW9mIG9iamVjdC5lZGl0ZWRSb3dJbmRleCAhPT0gXCJ1bmRlZmluZWRcIikge1xyXG4gICAgICBsZXQgTmV3VmFsOmFueSA9IHt9O1xyXG4gICAgICAgIC8vbGV0IGdyaWRfZGF0YSA9IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkob2JqZWN0LmdyaWQuZGF0YSkpO1xyXG4gICAgICAgIGxldCBncmlkX2RhdGEgPSBvYmplY3QuZ3JpZC5kYXRhO1xyXG4gICAgICAgIGlmIChvYmplY3QucGFyYW1Db25maWcuREVCVUdfRkxBRykgY29uc29sZS5sb2coXCJvYmplY3QuZWRpdGVkUm93SW5kZXggOlwiLCBncmlkX2RhdGEpXHJcblxyXG4gICAgICBOZXdWYWwgPSBncmlkX2RhdGEuZGF0YVtvYmplY3QuZWRpdGVkUm93SW5kZXhdO1xyXG4gICAgICAgIGxldCBjdXJDTUQgPSBOZXdWYWxbXCJfUVVFUllcIl07XHJcbiAgICAgICAgaWYgKG9iamVjdC5wYXJhbUNvbmZpZy5ERUJVR19GTEFHKSBjb25zb2xlLmxvZyhcImNoZWNrOk5ld1ZhbDpfUVVFUllcIiwgTmV3VmFsW1wiX1FVRVJZXCJdKVxyXG4gICAgICBsZXQgcmVzdWx0MSA9IG9iamVjdC5zdGFyU2VydmljZXMucmVtb3ZlUmVjKG9iamVjdC5ncmlkLmRhdGEsIG9iamVjdC5lZGl0ZWRSb3dJbmRleCk7XHJcbiAgICAgICAgb2JqZWN0LmdyaWQuZGF0YSA9IHJlc3VsdDE7XHJcbiAgICAgICAgaWYgKG9iamVjdC5wYXJhbUNvbmZpZy5ERUJVR19GTEFHKSBjb25zb2xlLmxvZyhcImNoZWNrOk5ld1ZhbDpcIiwgTmV3VmFsKVxyXG5cclxuICAgICAgICBOZXdWYWxbXCJfUVVFUllcIl0gPSBvYmplY3QuZGVsZXRlQ01EO1xyXG4gICAgICBpZiAoY3VyQ01EICE9IG9iamVjdC5pbnNlcnRDTUQpIHtcclxuICAgICAgICAgIG9iamVjdC5hZGRUb0JvZHkoTmV3VmFsKTtcclxuICAgICAgICAgIG9iamVjdC5yZW1vdmVkUmVjLnB1c2goTmV3VmFsKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICB9XHJcbiAgICAgIGVsc2VcclxuICAgICAgICBvYmplY3QuY2FuY2VsSGFuZGxlcigpO1xyXG5cclxuXHJcbiAgICB9XHJcbiAgICBwdWJsaWMgc2F2ZUN1cnJlbnRfZ3JpZChvYmplY3Q6YW55KTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5wYXJhbUNvbmZpZy5ERUJVR19GTEFHKSBjb25zb2xlLmxvZyhcInNhdmVDdXJyZW50X2dyaWQ6b2JqZWN0LmZvcm1Hcm91cDpcIiwgb2JqZWN0LmZvcm1Hcm91cCk7XHJcblxyXG5cclxuICAgIGlmIChvYmplY3QuZm9ybUdyb3VwKSB7XHJcbiAgICAgIGlmICh0aGlzLnBhcmFtQ29uZmlnLkRFQlVHX0ZMQUcpIGNvbnNvbGUubG9nKFwic2F2ZUN1cnJlbnRfZ3JpZDpvYmplY3QuZm9ybUdyb3VwOlwiLCBvYmplY3QuZm9ybUdyb3VwKTtcclxuICAgICAgbGV0IE5ld1ZhbDphbnkgPSB7fTtcclxuICAgICAgICAgIE5ld1ZhbCA9IE9iamVjdC5hc3NpZ24oe30sIG9iamVjdC5mb3JtR3JvdXAudmFsdWUpO1xyXG4gICAgICBpZiAodGhpcy5wYXJhbUNvbmZpZy5ERUJVR19GTEFHKSBjb25zb2xlLmxvZygnY2hlY2s6ZGlydHkgOicsIG9iamVjdC5mb3JtR3JvdXAuZGlydHksIFwiIGlzTmV3OlwiLCBvYmplY3QuaXNOZXcsIFwiIE5ld1ZhbDogXCIsIE5ld1ZhbCk7XHJcbiAgICAgIGlmIChvYmplY3QuZm9ybUdyb3VwLmRpcnR5ID09PSB0cnVlKSB7XHJcbiAgICAgICAgaWYgKG9iamVjdC5pc05ldyA9PSB0cnVlKSB7XHJcbiAgICAgICAgICBpZiAodGhpcy5wYXJhbUNvbmZpZy5ERUJVR19GTEFHKSBjb25zb2xlLmxvZyhcImhlcmUxIE5ld1ZhbFwiLCBOZXdWYWwpO1xyXG4gICAgICAgICAgICAgICAvL2xldCByZXN1bHQgPSBvYmplY3Quc3RhclNlcnZpY2VzLmFkZFJlYyhvYmplY3QuZ3JpZC5kYXRhLCBOZXdWYWwpIDtcclxuICAgICAgICAgICAgIC8vIG9iamVjdC5ncmlkLmRhdGEgPSByZXN1bHQ7XHJcbiAgICAgICAgICAgICAgaWYgKHRoaXMucGFyYW1Db25maWcuREVCVUdfRkxBRykgY29uc29sZS5sb2cob2JqZWN0LmdyaWQuZGF0YSk7XHJcblxyXG4gICAgICAgICAgICAgIGlmIChvYmplY3QuZ3JpZC5kYXRhID09IG51bGwgfHwgdHlwZW9mIG9iamVjdC5ncmlkLmRhdGEuZGF0YSA9PSBcInVuZGVmaW5lZFwiKVxyXG4gICAgICAgICAgICBvYmplY3QuZ3JpZC5kYXRhID0geyBkYXRhOiBbXSwgdG90YWw6IDAgfTtcclxuICAgICAgICAgICAgICAvL29iamVjdC5ncmlkLmRhdGEuZGF0YS5wdXNoKE5ld1ZhbCk7XHJcbiAgICAgICAgICBvYmplY3QuZ3JpZC5kYXRhLmRhdGEuc3BsaWNlKDAsIDAsIE5ld1ZhbCk7XHJcbiAgICAgICAgICAgICAgTmV3VmFsW1wiX1FVRVJZXCJdID0gb2JqZWN0Lmluc2VydENNRDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG5cclxuICAgICAgICAgIGlmICh0aGlzLnBhcmFtQ29uZmlnLkRFQlVHX0ZMQUcpIGNvbnNvbGUubG9nKCdjaGVjazpvYmplY3QuZ3JpZC5kYXRhOicsIG9iamVjdC5ncmlkLmRhdGEsIFwiIE5ld1ZhbDpcIiwgTmV3VmFsKTtcclxuICAgICAgICAgICAgICAvL05ld1ZhbCA9IHRoaXMucGFyc2VUb0RhdGUoTmV3VmFsKTtcclxuICAgICAgICAgIGlmIChvYmplY3QuZ3JpZC5kYXRhLmRhdGFbb2JqZWN0LmVkaXRlZFJvd0luZGV4XS5fUVVFUlkgPT0gb2JqZWN0Lmluc2VydENNRCkge1xyXG4gICAgICAgICAgICAgICAgTmV3VmFsW1wiX1FVRVJZXCJdID0gb2JqZWN0Lmluc2VydENNRDtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIE5ld1ZhbFtcIl9RVUVSWVwiXSA9IG9iamVjdC51cGRhdGVDTUQ7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIG9iamVjdC5ncmlkLmRhdGEuZGF0YVtvYmplY3QuZWRpdGVkUm93SW5kZXhdID0gTmV3VmFsO1xyXG4gICAgICAgICAgICAgIC8vbGV0IHJlc3VsdDEgPSBvYmplY3Quc3RhclNlcnZpY2VzLnVwZGF0ZVJlYyhvYmplY3QuZ3JpZC5kYXRhICwgb2JqZWN0LmVkaXRlZFJvd0luZGV4LCBOZXdWYWwgKTtcclxuICAgICAgICAgICAgICAvL29iamVjdC5ncmlkLmRhdGEgPSByZXN1bHQxO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8vb2JqZWN0LmFkZFRvQm9keShOZXdWYWwpOyAvLyBhZGRUb0JvZHkgd2lsbCBiZSBkb25lIGF0IHNhdmVDaGFuZ2VzX2dyaWQgdG8gYXZvaWQgZHVwbGljdGUgdXBkYXRlIHNpbmNlIG9iamVjdC5ncmlkLmRhdGEuZGF0YSBpcyBnZXR0aW5nIHVwZGF0ZWRcclxuICAgICAgICBpZiAodGhpcy5wYXJhbUNvbmZpZy5ERUJVR19GTEFHKSBjb25zb2xlLmxvZyhvYmplY3QuZ3JpZC5kYXRhKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGlmICh0aGlzLnBhcmFtQ29uZmlnLkRFQlVHX0ZMQUcpIGNvbnNvbGUubG9nKFwicHJlIGNsb3NlXCIpXHJcbiAgICAgICAgICBvYmplY3QuY2xvc2VFZGl0b3IoKTtcclxuICAgICAgICAgIGlmICh0aGlzLnBhcmFtQ29uZmlnLkRFQlVHX0ZMQUcpIGNvbnNvbGUubG9nKFwicG9zdCBjbG9zZVwiKVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgY2xvc2VFZGl0b3JfZ3JpZChvYmplY3QpOiB2b2lkIHtcclxuICAgIC8vY29uc29sZS5sb2coXCJvYmplY3QuZm9ybUdyb3VwOmNsb3NlRWRpdG9yX2dyaWRcIilcclxuICAgICAgb2JqZWN0LmdyaWQuY2xvc2VSb3cob2JqZWN0LmVkaXRlZFJvd0luZGV4KTtcclxuICAgICAgb2JqZWN0LmlzTmV3ID0gZmFsc2U7XHJcbiAgICAgIG9iamVjdC5lZGl0ZWRSb3dJbmRleCA9IHVuZGVmaW5lZDtcclxuICAgICAgb2JqZWN0LmZvcm1Hcm91cCA9IHVuZGVmaW5lZDtcclxuXHJcbiAgICAvLyBncmlkLmNhbmNlbDtcclxuICAgIC8vIG9iamVjdC5ncmlkLmRhdGEgPSBudWxsO1xyXG4gICAgLy8gb2JqZWN0LmNsZWFyQ29tcGxldGVkT3V0cHV0LmVtaXQob2JqZWN0LmZvcm1Jbml0aWFsVmFsdWVzKTtcclxuICAgIH1cclxuICBwdWJsaWMgY2FuY2VsSGFuZGxlcl9ncmlkKG9iamVjdDphbnkpOiB2b2lkIHtcclxuICAgICAgb2JqZWN0LmNsb3NlRWRpdG9yKCk7XHJcbiAgICAgIG9iamVjdC5pc1NlYXJjaCA9IGZhbHNlO1xyXG4gICAgICB0aGlzLmhlbHBNc2dfZ3JpZCA9IFwiXCI7XHJcbiAgICB9XHJcbiAgcHVibGljIHNhdmVDaGFuZ2VzX2dyaWRfaW5UcmFucyhncmlkOmFueSwgb2JqZWN0OmFueSwgTmV3VmFsOmFueSkge1xyXG4gICAgICB0aGlzLmNvbW1pdEJvZHkucHVzaChOZXdWYWwpO1xyXG4gICAgaWYgKG9iamVjdC5pc0NoaWxkID09IHRydWUpIHtcclxuICAgICAgICBsZXQgZ3JpZFJlY29yZHMgPSBvYmplY3QuZ3JpZC5kYXRhLmRhdGEubGVuZ3RoO1xyXG4gICAgICAgIGxldCBwYXJhbUNvbmZpZyA9IHtcclxuICAgICAgICAgIFwiTmFtZVwiOiBcImNoaWxkUmVjb3Jkc1wiLFxyXG4gICAgICAgICAgXCJWYWxcIjogZ3JpZFJlY29yZHNcclxuICAgICAgICB9O1xyXG4gICAgICAgIHNldFBhcmFtQ29uZmlnKHBhcmFtQ29uZmlnKTtcclxuICAgICAgfVxyXG4gICAgICBcclxuICAgIGlmICh0eXBlb2Ygb2JqZWN0LmNhbGxCYWNrUG9zdF9TYXZlICE9PSBcInVuZGVmaW5lZFwiKSB7XHJcbiAgICAgIGxldCBOZXdWYWwxOmFueSA9IFtdO1xyXG4gICAgICAgICAgICBOZXdWYWwxLnB1c2goTmV3VmFsKTtcclxuICAgICAgICBvYmplY3QuY2FsbEJhY2tQb3N0X1NhdmUuYXBwbHkob2JqZWN0LCBOZXdWYWwxKTtcclxuICAgICAgfVxyXG4gICAgICB0aGlzLnNldFByaW1hcktleU5hbWVBcnIob2JqZWN0LCB0cnVlKTtcclxuICAgICAgb2JqZWN0LnNhdmVDb21wbGV0ZWRPdXRwdXQuZW1pdChOZXdWYWwpO1xyXG4gICAgLy9vYmplY3Quc2F2ZUNvbXBsZXRlZE91dHB1dC5lbWl0KG9iamVjdC5ncmlkLmRhdGEpO1xyXG4gICAgfVxyXG4gIHB1YmxpYyBzYXZlQ2hhbmdlc19ncmlkKGdyaWQ6IGFueSwgb2JqZWN0OmFueSk6IHZvaWQge1xyXG4gICAgaWYgKChvYmplY3QuZ3JpZC5kYXRhID09IG51bGwpIHx8ICh0eXBlb2Ygb2JqZWN0LmdyaWQuZGF0YS5kYXRhID09IFwidW5kZWZpbmVkXCIpKSB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9XHJcbiAgICAgIGxldCBFcnJvciA9IGZhbHNlO1xyXG4gICAgaWYgKHRoaXMucGFyYW1Db25maWcuREVCVUdfRkxBRykgY29uc29sZS5sb2coXCJwcmUgb2JqZWN0LnNhdmVDdXJyZW50XCIpO1xyXG4gICAgICBvYmplY3Quc2F2ZUN1cnJlbnQoKTtcclxuXHJcbiAgICBpZiAob2JqZWN0LmNvbXBvbmVudENvbmZpZy5yb3V0aW5lQXV0aCAhPSBudWxsKSB7XHJcbiAgICAgIGlmICh0aGlzLnBhcmFtQ29uZmlnLkRFQlVHX0ZMQUcpIGNvbnNvbGUubG9nKFwiYXV0aExldmVsOlwiICsgb2JqZWN0LmNvbXBvbmVudENvbmZpZy5yb3V0aW5lQXV0aC5hdXRoTGV2ZWwpO1xyXG4gICAgICBpZiAob2JqZWN0LmNvbXBvbmVudENvbmZpZy5yb3V0aW5lQXV0aC5hdXRoTGV2ZWwgIT0gMikge1xyXG4gICAgICAgICAgbGV0IGRpYWxvZ1N0cnVjID0ge1xyXG4gICAgICAgICAgICBtc2c6IHRoaXMucmVhZE9ubHlNc2csXHJcbiAgICAgICAgICB0aXRsZTogXCJXYXJuaW5nXCIsXHJcbiAgICAgICAgICAgIGluZm86IG51bGwsXHJcbiAgICAgICAgICBvYmplY3Q6IG9iamVjdCxcclxuICAgICAgICAgIGFjdGlvbjogdGhpcy5Pa0FjdGlvbnMsXHJcbiAgICAgICAgICBjYWxsYmFjazogbnVsbFxyXG4gICAgICAgIH07XHJcbiAgICAgICAgICAgIHRoaXMuc2hvd0NvbmZpcm1hdGlvbihkaWFsb2dTdHJ1Yyk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIGxldCBOZXdWYWwgPSBbXTtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgb2JqZWN0LmdyaWQuZGF0YS5kYXRhLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgaWYgKHRoaXMucGFyYW1Db25maWcuREVCVUdfRkxBRykgY29uc29sZS5sb2coXCJjaGVjazogb2JqZWN0LmdyaWQuZGF0YS5kYXRhW2ldLl9RVUVSWTpcIiwgb2JqZWN0LmdyaWQuZGF0YS5kYXRhW2ldLl9RVUVSWSlcclxuICAgICAgaWYgKHR5cGVvZiBvYmplY3QuZ3JpZC5kYXRhLmRhdGFbaV0uX1FVRVJZICE9IFwidW5kZWZpbmVkXCIpIHtcclxuICAgICAgICAgICAgTmV3VmFsID0gb2JqZWN0LmdyaWQuZGF0YS5kYXRhW2ldO1xyXG4gICAgICAgICAgb2JqZWN0LmFkZFRvQm9keShOZXdWYWwpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICBpZiAodGhpcy5pblRyYW5zKSB7XHJcbiAgICAgICAgdGhpcy5zYXZlQ2hhbmdlc19ncmlkX2luVHJhbnMoZ3JpZCwgb2JqZWN0LCBOZXdWYWwpO1xyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG4gICAgICBpZiAodGhpcy5wYXJhbUNvbmZpZy5ERUJVR19GTEFHKSBjb25zb2xlLmxvZyhcImNoZWNrOiBvYmplY3QuQm9keTpcIiwgb2JqZWN0LkJvZHkpO1xyXG4gICAgaWYgKG9iamVjdC5Cb2R5Lmxlbmd0aCAhPSAwKSB7XHJcbiAgICAgIGxldCBQYWdlID0gXCImX3RyYW5zPVlcIjtcclxuICAgICAgdGhpcy5wb3N0KG9iamVjdCwgUGFnZSwgb2JqZWN0LkJvZHkpLnN1YnNjcmliZShQYWdlID0+IHtcclxuICAgICAgICBvYmplY3QuQm9keSA9IFtdO1xyXG4gICAgICAgIC8vb2JqZWN0LnNhdmVDb21wbGV0ZWRPdXRwdXQuZW1pdChvYmplY3QuZ3JpZC5kYXRhKTtcclxuICAgICAgICBvYmplY3Quc2F2ZUNvbXBsZXRlZE91dHB1dC5lbWl0KE5ld1ZhbCk7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IG9iamVjdC5ncmlkLmRhdGEuZGF0YS5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xyXG4gICAgICAgICAgaWYgKHR5cGVvZiBvYmplY3QuZ3JpZC5kYXRhLmRhdGFbaV0uX1FVRVJZICE9IFwidW5kZWZpbmVkXCIpIHtcclxuICAgICAgICAgICAgICBvYmplY3QuZ3JpZC5kYXRhLmRhdGFbaV0uX1FVRVJZX0RPTkUgPSBvYmplY3QuZ3JpZC5kYXRhLmRhdGFbaV0uX1FVRVJZO1xyXG4gICAgICAgICAgICAgIGRlbGV0ZSBvYmplY3QuZ3JpZC5kYXRhLmRhdGFbaV0uX1FVRVJZO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICBpZiAodGhpcy5wYXJhbUNvbmZpZy5ERUJVR19GTEFHKSBjb25zb2xlLmxvZyhcImNoZWNrOiBvYmplY3QuZ3JpZC5kYXRhLmRhdGFbaV0uX1FVRVJZOlwiLCBvYmplY3QuZ3JpZC5kYXRhLmRhdGFbaV0uX1FVRVJZKVxyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIGlmICh0aGlzLnBhcmFtQ29uZmlnLkRFQlVHX0ZMQUcpIGNvbnNvbGUubG9nKFwib2JqZWN0LmdyaWQuZGF0YS5kYXRhOlwiLCBvYmplY3QuZ3JpZC5kYXRhLmRhdGEpXHJcbiAgICAgICAgICBpZiAodGhpcy5wYXJhbUNvbmZpZy5ERUJVR19GTEFHKSBjb25zb2xlLmxvZyhcIm9iamVjdC5ncmlkLmRhdGEuZGF0YToubGVuZ3RoXCIsIG9iamVjdC5ncmlkLmRhdGEuZGF0YS5sZW5ndGgpXHJcbiAgICAgICAgaWYgKG9iamVjdC5pc0NoaWxkID09IHRydWUpIHtcclxuICAgICAgICAgICAgbGV0IGdyaWRSZWNvcmRzID0gb2JqZWN0LmdyaWQuZGF0YS5kYXRhLmxlbmd0aDtcclxuICAgICAgICAgICAgbGV0IHBhcmFtQ29uZmlnID0ge1xyXG4gICAgICAgICAgICAgIFwiTmFtZVwiOiBcImNoaWxkUmVjb3Jkc1wiLFxyXG4gICAgICAgICAgICAgIFwiVmFsXCI6IGdyaWRSZWNvcmRzXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIHNldFBhcmFtQ29uZmlnKHBhcmFtQ29uZmlnKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB0aGlzLnNob3dOb3RpZmljYXRpb24oJ3N1Y2Nlc3MnLCBcIkRhdGEgc2F2ZWQgc3VjY2Vzc2Z1bGx5XCIpO1xyXG4gICAgICAgIGlmICh0eXBlb2Ygb2JqZWN0LmNhbGxCYWNrUG9zdF9TYXZlICE9PSBcInVuZGVmaW5lZFwiKSB7XHJcbiAgICAgICAgICBsZXQgTmV3VmFsMTphbnkgPSBbXTtcclxuICAgICAgICAgICAgICAgIE5ld1ZhbDEucHVzaChOZXdWYWwpO1xyXG4gICAgICAgICAgICBvYmplY3QuY2FsbEJhY2tQb3N0X1NhdmUuYXBwbHkob2JqZWN0LCBOZXdWYWwxKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIHRoaXMuc2V0UHJpbWFyS2V5TmFtZUFycihvYmplY3QsIHRydWUpO1xyXG4gICAgICAgIC8vIGlmIChvYmplY3QuZGlhYmxlRW1pdFNhdmUgPT0gdHJ1ZSkgXHJcbiAgICAgICAgLy8gICAgIHt9XHJcbiAgICAgICAgLy8gICBlbHNlXHJcbiAgICAgICAgLy9vYmplY3Quc2F2ZUNvbXBsZXRlZE91dHB1dC5lbWl0KG9iamVjdC5ncmlkLmRhdGEpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZXJyID0+IHtcclxuICAgICAgICAgIGZvciAobGV0IGkgPSBvYmplY3QuQm9keS5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xyXG4gICAgICAgICAgICBpZiAob2JqZWN0LkJvZHlbaV0uX1FVRVJZICE9IG9iamVjdC5kZWxldGVDTUQpIHtcclxuICAgICAgICAgICAgICBvYmplY3QuQm9keS5zcGxpY2UoaSwgMSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGlmICh0aGlzLnBhcmFtQ29uZmlnLkRFQlVHX0ZMQUcpIGNvbnNvbGUubG9nKFwiZXJyOlwiLCBlcnIpXHJcbiAgICAgICAgICBsZXQgZXJyTXNnID0gdGhpcy5nZXRFcnJvck1zZyhlcnIpO1xyXG4gICAgICAgICAgdGhpcy5zaG93Tm90aWZpY2F0aW9uKFwiZXJyb3JcIiwgXCJlcnJvcjpcIiArIGVyck1zZyk7XHJcbiAgICAgICAgICBFcnJvciA9IHRydWU7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgICAgaWYgKHRoaXMucGFyYW1Db25maWcuREVCVUdfRkxBRykgY29uc29sZS5sb2coXCJvYmplY3QuaXNNYXN0ZXI6XCIgKyBvYmplY3QuaXNNYXN0ZXIpO1xyXG4gICAgICAgIGlmICghb2JqZWN0LmlzTWFzdGVyKVxyXG4gICAgICAgIHRoaXMuc2hvd05vdGlmaWNhdGlvbignd2FybmluZycsIFwiTm8gY2hhbmdlcyB0byBzYXZlXCIpO1xyXG4gICAgICB9XHJcbiAgICAgICAgaWYgKCFFcnJvcil7XHJcbiAgICAgICAgICBvYmplY3Quc2F2ZUNvbXBsZXRlZE91dHB1dC5lbWl0KE5ld1ZhbCk7XHJcbiAgICAgICAgICAvL29iamVjdC5zYXZlQ29tcGxldGVkT3V0cHV0LmVtaXQob2JqZWN0LmdyaWQuZGF0YSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gIHB1YmxpYyBnZXRFcnJvck1zZyhlcnI6YW55KVxyXG4gICAge1xyXG4gICAgICBsZXQgZXJyTXNnID0gXCJcIjtcclxuICAgICAgXHJcbiAgICAgIGlmICh0eXBlb2YgZXJyLmVycm9yLmVycm9yICE9IFwidW5kZWZpbmVkXCIpe1xyXG4gICAgICAgIGVyck1zZyA9IGVyci5lcnJvci5lcnJvcjtcclxuICAgICAgfVxyXG4gICAgICBlbHNlXHJcbiAgICAgICAgZXJyTXNnID0gZXJyLmVycm9yO1xyXG5cclxuICAgICAgICByZXR1cm4gZXJyTXNnO1xyXG5cclxuICAgIH1cclxuXHJcblxyXG5cclxuICBwdWJsaWMgZXhlY3V0ZVF1ZXJ5X2dyaWQoZ3JpZDogYW55LCBvYmplY3Q6YW55KTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5wYXJhbUNvbmZpZy5ERUJVR19GTEFHKSBjb25zb2xlLmxvZyhcIm9iamVjdC5ncmlkOlwiLCBvYmplY3QuZ3JpZClcclxuICAgICAgICBpZiAodHlwZW9mIGdyaWQgPT0gXCJ1bmRlZmluZWRcIiB8fCB0eXBlb2Ygb2JqZWN0LmdyaWQgPT0gXCJ1bmRlZmluZWRcIilcclxuICAgICAgICByZXR1cm47XHJcblxyXG4gICAgICBsZXQgZGlydHkgPSBmYWxzZTtcclxuICAgICAgLy9pZiAodGhpcy5wYXJhbUNvbmZpZy5ERUJVR19GTEFHKSBjb25zb2xlLmxvZyAoXCJleGVjdXRlUXVlcnlfZ3JpZDpcIiArIG9iamVjdC5Cb2R5Lmxlbmd0aCArIFwiIFwiICsgb2JqZWN0LmdyaWQuaXNFZGl0aW5nKCksIFwib2JqZWN0LkJvZHk6XCIsb2JqZWN0LkJvZHkpO1xyXG4gICAgICAvL2lmICh0aGlzLnBhcmFtQ29uZmlnLkRFQlVHX0ZMQUcpIGNvbnNvbGUubG9nKFwib2JqZWN0LkJvZHk6XCIsb2JqZWN0LkJvZHkpXHJcbiAgICAgIGlmICgob2JqZWN0LkJvZHkubGVuZ3RoICE9IDApIHx8IG9iamVjdC5ncmlkLmlzRWRpdGluZygpID09IHRydWUpXHJcbiAgICAgIHtcclxuICAgICAgICBkaXJ0eSA9IHRydWU7XHJcbiAgICAgIH1cclxuICAgIGlmIChkaXJ0eSA9PSB0cnVlKSB7XHJcbiAgICAgICAgbGV0IGRpYWxvZ1N0cnVjID0ge1xyXG4gICAgICAgICAgbXNnOiB0aGlzLnNhdmVDaGFuZ2VzTXNnLFxyXG4gICAgICAgIHRpdGxlOiB0aGlzLnBsZWFzZUNvbmZpcm1Nc2csXHJcbiAgICAgICAgICBpbmZvOiBncmlkLFxyXG4gICAgICAgIG9iamVjdDogb2JqZWN0LFxyXG4gICAgICAgIGFjdGlvbjogdGhpcy5ZZXNOb0FjdGlvbnMsXHJcbiAgICAgICAgY2FsbGJhY2s6IHRoaXMuZXhlY3V0ZVF1ZXJ5QWN0X2dyaWRcclxuICAgICAgfTtcclxuICAgICAgICAgIHRoaXMuc2hvd0NvbmZpcm1hdGlvbihkaWFsb2dTdHJ1Yyk7XHJcbiAgICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICB0aGlzLmV4ZWN1dGVRdWVyeUFjdF9ncmlkKGdyaWQsIG9iamVjdCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICBwdWJsaWMgZXhlY3V0ZVF1ZXJ5QWN0X2dyaWQoZ3JpZDogYW55LCBvYmplY3Q6YW55KTogdm9pZCB7XHJcbiAgICAgIGxldCBwYXJhbUNvbmZpZyA9IHtcclxuICAgICAgICBcIk5hbWVcIjogXCJjaGlsZFJlY29yZHNcIixcclxuICAgICAgICBcIlZhbFwiOiAwXHJcbiAgICAgIH07XHJcbiAgICAgIHNldFBhcmFtQ29uZmlnKHBhcmFtQ29uZmlnKTtcclxuICAgICAgaWYgKG9iamVjdC5wYXJhbUNvbmZpZy5ERUJVR19GTEFHKSBjb25zb2xlLmxvZyhcIiAgXCIgKyBvYmplY3QubWFzdGVyS2V5TmFtZSwgb2JqZWN0Lm1hc3RlcktleUFycik7XHJcbiAgICBpZiAob2JqZWN0LnBhcmFtQ29uZmlnLkRFQlVHX0ZMQUcpIGNvbnNvbGUubG9nKFwib2JqZWN0LmlzQ2hpbGQ6XCIsIG9iamVjdC5pc0NoaWxkLCBcIiBvYmplY3QuaXNTZWFyY2ggOlwiLCBvYmplY3QuaXNTZWFyY2gpXHJcbiAgICBpZiAob2JqZWN0LmlzQ2hpbGQgPT0gdHJ1ZSkge1xyXG4gICAgICBpZiAob2JqZWN0LmlzU2VhcmNoICE9IHRydWUpIHtcclxuICAgICAgICAgIGdyaWQgPSBvYmplY3QuZ3JpZEluaXRpYWxWYWx1ZXM7XHJcbiAgICAgICAgaWYgKG9iamVjdC5wYXJhbUNvbmZpZy5ERUJVR19GTEFHKSBjb25zb2xlLmxvZyhcImhlcmUxXCIpO1xyXG4gICAgICAgIGlmICgodHlwZW9mIG9iamVjdC5tYXN0ZXJLZXlOYW1lQXJyICE9IFwidW5kZWZpbmVkXCIpICYmIChvYmplY3QubWFzdGVyS2V5TmFtZUFyci5sZW5ndGggIT0gMCkpIHtcclxuICAgICAgICAgIGlmIChvYmplY3QucGFyYW1Db25maWcuREVCVUdfRkxBRykgY29uc29sZS5sb2coXCJoZXJlMlwiKTtcclxuICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgb2JqZWN0Lm1hc3RlcktleU5hbWVBcnIubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGxldCBleGlzdHMgPSBvYmplY3QubWFzdGVyS2V5TmFtZUFycltpXSBpbiBvYmplY3QuZ3JpZEluaXRpYWxWYWx1ZXM7XHJcbiAgICAgICAgICAgIC8vbGV0IGV4aXN0cyA9IG9iamVjdC5ncmlkSW5pdGlhbFZhbHVlc1tvYmplY3QubWFzdGVyS2V5TmFtZUFycltpXV1cclxuICAgICAgICAgICAgaWYgKG9iamVjdC5wYXJhbUNvbmZpZy5ERUJVR19GTEFHKSBjb25zb2xlLmxvZyhcImhlcmUzXCIsIGV4aXN0cyxvYmplY3QuZ3JpZEluaXRpYWxWYWx1ZXMsIG9iamVjdC5tYXN0ZXJLZXlOYW1lQXJyW2ldLCBvYmplY3QubWFzdGVyS2V5QXJyW2ldKTtcclxuICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICBpZiAoIGV4aXN0cyAhPSBmYWxzZSl7XHJcbiAgICAgICAgICAgICAgICBpZiAob2JqZWN0LnBhcmFtQ29uZmlnLkRFQlVHX0ZMQUcpIGNvbnNvbGUubG9nKFwiaGVyZTRcIik7XHJcbiAgICAgICAgICAgICAgb2JqZWN0LmdyaWRJbml0aWFsVmFsdWVzW29iamVjdC5tYXN0ZXJLZXlOYW1lQXJyW2ldXSA9IG9iamVjdC5tYXN0ZXJLZXlBcnJbaV07XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIG9iamVjdC5ncmlkSW5pdGlhbFZhbHVlc1tvYmplY3QubWFzdGVyS2V5TmFtZV0gPSBvYmplY3QubWFzdGVyS2V5O1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIC8vZ3JpZFtvYmplY3QubWFzdGVyS2V5TmFtZV0gPSBvYmplY3QubWFzdGVyS2V5O1xyXG4gICAgICAgIGlmIChvYmplY3QucGFyYW1Db25maWcuREVCVUdfRkxBRykgY29uc29sZS5sb2coXCJvYmplY3QubWFzdGVyS2V5TmFtZTpcIiArIG9iamVjdC5tYXN0ZXJLZXlOYW1lKTtcclxuICAgICAgICAgIGlmIChvYmplY3QucGFyYW1Db25maWcuREVCVUdfRkxBRykgY29uc29sZS5sb2coZ3JpZCk7XHJcbiAgICAgICAgICBvYmplY3QuaXNTZWFyY2ggPSB0cnVlO1xyXG4gICAgICAgICAgaWYgKG9iamVjdC5wYXJhbUNvbmZpZy5ERUJVR19GTEFHKSBjb25zb2xlLmxvZyhcIi0tLVNlYXJjaGluZzpcIik7XHJcbiAgICAgICAgICBpZiAob2JqZWN0LnBhcmFtQ29uZmlnLkRFQlVHX0ZMQUcpIGNvbnNvbGUubG9nKGdyaWQpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgIGlmIChvYmplY3QucGFyYW1Db25maWcuREVCVUdfRkxBRykgY29uc29sZS5sb2coJy0tLS0tLS0tLS0tLWV4ZWN1dGVRdWVyeSBvYmplY3QuaXNTZWFyY2ggOicgKyBvYmplY3QuaXNTZWFyY2ggKyBcIiAgb2JqZWN0LmlzQ2hpbGQ6XCIgKyBvYmplY3QuaXNDaGlsZCk7XHJcbiAgICAgIC8vIGlmIChvYmplY3QucGFyYW1Db25maWcuREVCVUdfRkxBRykgY29uc29sZS5sb2cob2JqZWN0LmdyaWQpO1xyXG5cclxuICAgIGxldCBQYWdlID0gXCImX3F1ZXJ5PVwiICsgb2JqZWN0LmdldENNRDtcclxuICAgIGlmIChvYmplY3QuaXNTZWFyY2ggPT0gdHJ1ZSkge1xyXG4gICAgICBpZiAob2JqZWN0LnBhcmFtQ29uZmlnLkRFQlVHX0ZMQUcpIGNvbnNvbGUubG9nKCdvYmplY3QuZm9ybUdyb3VwOicsIG9iamVjdC5mb3JtR3JvdXAsICd0eXBlb2YoZ3JpZCk6JywgdHlwZW9mIChncmlkLmRhdGEpLCAnIGdyaWQ6JywgZ3JpZClcclxuICAgICAgICAgIGxldCBOZXdWYWwgPSBcIlwiO1xyXG4gICAgICBpZiAodHlwZW9mIG9iamVjdC5mb3JtR3JvdXAgPT0gXCJ1bmRlZmluZWRcIikge1xyXG4gICAgICAgICAgICAvLyBhIGNoaWxkIGNvbXBvbmVudFxyXG4gICAgICAgIGlmIChvYmplY3QucGFyYW1Db25maWcuREVCVUdfRkxBRykgY29uc29sZS5sb2coJ2dyaWQ6JywgdHlwZW9mIChncmlkLmRhdGEpKTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGlmICh0eXBlb2YgZ3JpZC5kYXRhID09IFwib2JqZWN0XCIpXHJcbiAgICAgICAgICAgICAgTmV3VmFsID0gZ3JpZC5kYXRhOyAvLyBwYXNzZWQgZW1wdHkgZ3JpZFxyXG4gICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICBOZXdWYWwgPSBncmlkOyAvLyB1c2VkIHRoZSBwYXNzZWQgZ3JpZCBwYXJhbVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICAgTmV3VmFsID0gb2JqZWN0LmZvcm1Hcm91cC52YWx1ZTtcclxuXHJcbiAgICAgICAgICAgIG9iamVjdC5pc1NlYXJjaCA9IGZhbHNlO1xyXG4gICAgICBpZiAoKHR5cGVvZiBvYmplY3QuZm9ybWF0dGVkV2hlcmUgPT09IFwidW5kZWZpbmVkXCIpIHx8IChvYmplY3QuZm9ybWF0dGVkV2hlcmUgPT0gbnVsbCkpIHtcclxuICAgICAgICAgICAgICBQYWdlID0gUGFnZSArIG9iamVjdC5zdGFyU2VydmljZXMuZm9ybWF0V2hlcmUoTmV3VmFsKTtcclxuXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgaWYgKG9iamVjdC5wYXJhbUNvbmZpZy5ERUJVR19GTEFHKSBjb25zb2xlLmxvZyhcIm9iamVjdC5mb3JtYXR0ZWRXaGVyZVwiLCBvYmplY3QuZm9ybWF0dGVkV2hlcmUpXHJcbiAgICAgICAgICAgICAgb2JqZWN0LmZvcm1hdHRlZFdoZXJlID0gdGhpcy5wcm9jZXNzZm9ybWF0dGVkV2hlcmUob2JqZWN0LCBvYmplY3QuZm9ybWF0dGVkV2hlcmUpO1xyXG4gICAgICAgICAgICAgIFBhZ2UgPSBQYWdlICsgb2JqZWN0LmZvcm1hdHRlZFdoZXJlO1xyXG4gICAgICAgICAgICAgIG9iamVjdC5mb3JtYXR0ZWRXaGVyZSA9IG51bGw7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgaWYgKCh0eXBlb2Ygb2JqZWN0Lk9yZGVyQnlDbGF1c2UgIT09IFwidW5kZWZpbmVkXCIpICYmIChvYmplY3QuT3JkZXJCeUNsYXVzZSAhPSBcIlwiKSlcclxuICAgICAgICAgICAgICBQYWdlID0gUGFnZSArIFwiJl9PUkRFUkJZPVwiICsgb2JqZWN0Lk9yZGVyQnlDbGF1c2U7XHJcblxyXG5cclxuICAgICAgICB9XHJcbiAgICAgICAgUGFnZSA9IGVuY29kZVVSSShQYWdlKTtcclxuICAgICAgICAvL2lmIChvYmplY3QucGFyYW1Db25maWcuREVCVUdfRkxBRykgY29uc29sZS5sb2coJ1BhZ2U6JyArIFBhZ2UpO1xyXG4gICAgICAgIG9iamVjdC5ncmlkLmxvYWRpbmcgPSB0cnVlO1xyXG4gICAgICAgIG9iamVjdC5jbG9zZUVkaXRvcigpO1xyXG4gICAgb2JqZWN0LmV4ZWN1dGVRdWVyeXJlc3VsdCA9IFtdO1xyXG4gICAgb2JqZWN0LmV4ZWN1dGVRdWVyeXJlc3VsdC5yZXN1bHQgPSAwO1xyXG4gICAgICAgIG9iamVjdC5DdXJyZW50UmVjID0gMDtcclxuICAgICAgICBvYmplY3QuZ3JpZC5kYXRhID0gbnVsbDtcclxuICAgICAgICBcclxuXHJcbiAgICBvYmplY3Quc3RhclNlcnZpY2VzLmZldGNoKG9iamVjdCwgUGFnZSkuc3Vic2NyaWJlKChyZXN1bHQ6YW55KSA9PiB7XHJcbiAgICAgIGlmIChyZXN1bHQgIT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgIGxldCBhY3R1YWxSZXN1bHQgPSBPYmplY3QuYXNzaWduKHt9LCByZXN1bHQsIHt9KVxyXG4gICAgICAgICAgICAgIGlmIChvYmplY3QucGFyYW1Db25maWcuREVCVUdfRkxBRykgY29uc29sZS5sb2coXCItLS0tLS1yZXN1bHQuZGF0YVswXS5kYXRhIDpcIik7XHJcbiAgICAgICAgICAgICAgLy9pZiAob2JqZWN0LnBhcmFtQ29uZmlnLkRFQlVHX0ZMQUcpIGNvbnNvbGUubG9nKHJlc3VsdC5kYXRhWzBdLmRhdGEpO1xyXG4gICAgICAgICAgICAgIHRoaXMuaGVscE1zZ19ncmlkID0gXCJcIjtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHJlc3VsdC5kYXRhWzBdLmRhdGEubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIHJlc3VsdC5kYXRhWzBdLmRhdGFbaV0gPSBvYmplY3Quc3RhclNlcnZpY2VzLnBhcnNlVG9EYXRlKHJlc3VsdC5kYXRhWzBdLmRhdGFbaV0pO1xyXG4gICAgICAgICAgaWYgKHJlc3VsdC5kYXRhWzBdLmRhdGFbaV0uX1FVRVJZICE9IFwidW5kZWZpbmVkXCIpIHtcclxuICAgICAgICAgICAgICAgICAgZGVsZXRlIHJlc3VsdC5kYXRhWzBdLmRhdGFbaV0uX1FVRVJZO1xyXG4gICAgICAgICAgICAgICAgICBkZWxldGUgcmVzdWx0LmRhdGFbMF0uZGF0YVtpXS5fUVVFUllfRE9ORTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgaWYgKG9iamVjdC5wYXJhbUNvbmZpZy5ERUJVR19GTEFHKSBjb25zb2xlLmxvZyhyZXN1bHQuZGF0YVswXS5kYXRhWzBdKTtcclxuXHJcbiAgICAgICAgb2JqZWN0LkJvZHkgPSBbXTtcclxuICAgICAgICByZXN1bHQgPSB7XHJcbiAgICAgICAgICBkYXRhOiByZXN1bHQuZGF0YVswXS5kYXRhLFxyXG4gICAgICAgICAgdG90YWw6IHBhcnNlSW50KHJlc3VsdC5kYXRhWzBdLmRhdGEubGVuZ3RoLCAxMClcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKG9iamVjdC5pc01hc3RlcilcclxuICAgICAgICAgIG9iamVjdC5zdGFyU2VydmljZXMuc2hvd05vdGlmaWNhdGlvbignc3VjY2VzcycsIFwiUmVjb3JkcyByZXRyaWV2ZWQgOiBcIiArIHJlc3VsdC50b3RhbCk7XHJcbiAgICAgICAgb2JqZWN0LmV4ZWN1dGVRdWVyeXJlc3VsdCA9IHJlc3VsdDtcclxuICAgICAgICBpZiAob2JqZWN0LmlzQ2hpbGQgPT0gdHJ1ZSkge1xyXG4gICAgICAgICAgICAgICAgICBsZXQgcGFyYW1Db25maWcgPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgXCJOYW1lXCI6IFwiY2hpbGRSZWNvcmRzXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJWYWxcIjogcmVzdWx0LnRvdGFsXHJcbiAgICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICAgIHNldFBhcmFtQ29uZmlnKHBhcmFtQ29uZmlnKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcblxyXG5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBvYmplY3QuZ3JpZC5sb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgIG9iamVjdC5ncmlkLmRhdGEgPSByZXN1bHQ7XHJcblxyXG4gICAgICBpZiAodHlwZW9mIG9iamVjdC5jYWxsQmFja0Z1bmN0aW9uICE9PSBcInVuZGVmaW5lZFwiKVxyXG4gICAgICAgICAgICAgICAgb2JqZWN0LmNhbGxCYWNrRnVuY3Rpb24ocmVzdWx0KTtcclxuXHJcbiAgICAgIGlmIChvYmplY3QucGFyYW1Db25maWcuREVCVUdfRkxBRykgY29uc29sZS5sb2coXCJncmlkIHNlcnZpY2VyZWFkQ29tcGxldGVkT3V0cHV0XCIpO1xyXG4gICAgICBpZiAob2JqZWN0LnBhcmFtQ29uZmlnLkRFQlVHX0ZMQUcpIGNvbnNvbGUubG9nKG9iamVjdC5ncmlkLmRhdGEuZGF0YSk7XHJcbiAgICAgICAgICAgIGlmIChvYmplY3QucGFyYW1Db25maWcuREVCVUdfRkxBRykgY29uc29sZS5sb2coXCJyZXN1bHQgbGVuZ3RoOlwiICsgcmVzdWx0Lmxlbmd0aCk7XHJcbiAgICAgICAgICAgIGlmIChvYmplY3QucGFyYW1Db25maWcuREVCVUdfRkxBRykgY29uc29sZS5sb2coXCJyZXN1bHQgdG90YWw6XCIgKyByZXN1bHQudG90YWwpO1xyXG4gICAgICBpZiAob2JqZWN0LnBhcmFtQ29uZmlnLkRFQlVHX0ZMQUcpIGNvbnNvbGUubG9nKFwib2JqZWN0LnBlcmZvcm1SZWFkQ29tcGxldGVkT3V0cHV0OlwiICsgb2JqZWN0LnBlcmZvcm1SZWFkQ29tcGxldGVkT3V0cHV0KVxyXG4gICAgICBpZiAoKHR5cGVvZiBvYmplY3QucGVyZm9ybVJlYWRDb21wbGV0ZWRPdXRwdXQgIT09IFwidW5kZWZpbmVkXCIpIHx8IChvYmplY3QucGVyZm9ybVJlYWRDb21wbGV0ZWRPdXRwdXQgPT0gZmFsc2UpKSB7XHJcbiAgICAgICAgICAgICAgaWYgKG9iamVjdC5wYXJhbUNvbmZpZy5ERUJVR19GTEFHKSBjb25zb2xlLmxvZyhcImhlcmUxXCIpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgaWYgKG9iamVjdC5wYXJhbUNvbmZpZy5ERUJVR19GTEFHKSBjb25zb2xlLmxvZyhcImhlcmUyXCIpXHJcbiAgICAgICAgaWYgKG9iamVjdC5kaXNhYmxlRW1pdFJlYWRDb21wbGV0ZWQgIT0gdHJ1ZSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKHJlc3VsdC50b3RhbCAhPSAwKVxyXG4gICAgICAgICAgICAgICAgICBvYmplY3QucmVhZENvbXBsZXRlZE91dHB1dC5lbWl0KG9iamVjdC5ncmlkLmRhdGEuZGF0YVswXSk7XHJcbiAgICAgICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgICAgICAgIG9iamVjdC5yZWFkQ29tcGxldGVkT3V0cHV0LmVtaXQoW10pO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICAgICAgb2JqZWN0LnN0YXJTZXJ2aWNlcy5zZXRQcmltYXJLZXlOYW1lQXJyKG9iamVjdCwgdHJ1ZSk7XHJcbiAgICAgICAgICB9LFxyXG4gICAgICAoZXJyOmFueSkgPT4ge1xyXG4gICAgICAgIG9iamVjdC5Cb2R5ID0gW107XHJcbiAgICAgICAgICAgICAgICBvYmplY3QuZ3JpZC5sb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBvYmplY3QuZ3JpZC5kYXRhID0gbnVsbDtcclxuICAgICAgICBpZiAob2JqZWN0LnBhcmFtQ29uZmlnLkRFQlVHX0ZMQUcpIGNvbnNvbGUubG9nKFwiZXJyOlwiLCBlcnIpXHJcbiAgICAgICAgb2JqZWN0LnN0YXJTZXJ2aWNlcy5zaG93Tm90aWZpY2F0aW9uKFwiZXJyb3JcIiwgXCJlcnJvcjpcIiArIGVyci5lcnJvci5lcnJvci5jb2RlKTtcclxuICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgIG9iamVjdC5kb2NDbGlja1N1YnNjcmlwdGlvbiA9IG9iamVjdC5yZW5kZXJlci5saXN0ZW4oJ2RvY3VtZW50JywgJ2NsaWNrJywgb2JqZWN0Lm9uRG9jdW1lbnRDbGljay5iaW5kKG9iamVjdCkpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgcHVibGljIGVudGVyUXVlcnlBY3RfZ3JpZChncmlkOiBhbnksIG9iamVjdDphbnkpOiB2b2lkIHtcclxuICBvYmplY3QuZ3JpZC5jYW5jZWw7XHJcbiAgb2JqZWN0LmdyaWQuZGF0YSA9IG51bGw7XHJcbiAgICBvYmplY3QuQm9keSA9IFtdO1xyXG5cclxuICBvYmplY3QuaXNTZWFyY2ggPSB0cnVlO1xyXG4gIGlmIChvYmplY3QucGFyYW1Db25maWcuREVCVUdfRkxBRykgY29uc29sZS5sb2coXCJvYmplY3QuaXNTZWFyY2g6XCIgKyBvYmplY3QuaXNTZWFyY2gpO1xyXG4gIG9iamVjdC5hZGRIYW5kbGVyKCk7XHJcbiAgb2JqZWN0LmNsZWFyQ29tcGxldGVkT3V0cHV0LmVtaXQob2JqZWN0LmZvcm1Jbml0aWFsVmFsdWVzKTtcclxuICBvYmplY3Quc3RhclNlcnZpY2VzLnNldFByaW1hcktleU5hbWVBcnIob2JqZWN0LCBmYWxzZSk7XHJcbiAgb2JqZWN0LnN0YXJTZXJ2aWNlcy5oZWxwTXNnX2dyaWQgPSAgdGhpcy5nZXROTFMoW10sXCJIRUxQX0VOVEVSX1FVRVJZXCIsdGhpcy5lbnRlclF1ZXJ5TXNnKTtcclxuXHJcbn1cclxuXHJcbiAgcHVibGljIGVudGVyUXVlcnlfZ3JpZChncmlkOiBhbnksIG9iamVjdDphbnkpOiB2b2lkIHtcclxuICAgIGxldCBkaXJ0eSA9IGZhbHNlO1xyXG4gICAgaWYgKHRoaXMucGFyYW1Db25maWcuREVCVUdfRkxBRykgY29uc29sZS5sb2coXCJwcmUgb2JqZWN0LnNhdmVDdXJyZW50XCIpO1xyXG4gICAgb2JqZWN0LnNhdmVDdXJyZW50KCk7XHJcbiAgICBsZXQgbW9kaWZpZWQgPSBmYWxzZTtcclxuICAgIGlmICh0aGlzLnBhcmFtQ29uZmlnLkRFQlVHX0ZMQUcpIGNvbnNvbGUubG9nKFwib2JqZWN0LmdyaWQuZGF0YVwiKTtcclxuICAgIGlmIChvYmplY3QuZ3JpZC5kYXRhICE9IG51bGwpIHtcclxuICAgICAgaWYgKHR5cGVvZiBvYmplY3QuZ3JpZC5kYXRhLmRhdGEgIT09IFwidW5kZWZpbmVkXCIpIHtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG9iamVjdC5ncmlkLmRhdGEuZGF0YS5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgaWYgKHRoaXMucGFyYW1Db25maWcuREVCVUdfRkxBRykgY29uc29sZS5sb2coXCJjaGVjazogaTpcIiwgaSwgXCIgb2JqZWN0LmdyaWQuZGF0YS5kYXRhW2ldLl9RVUVSWTpcIiwgb2JqZWN0LmdyaWQuZGF0YS5kYXRhW2ldLl9RVUVSWSlcclxuICAgICAgICAgIGlmICh0eXBlb2Ygb2JqZWN0LmdyaWQuZGF0YS5kYXRhW2ldLl9RVUVSWSAhPT0gXCJ1bmRlZmluZWRcIikge1xyXG4gICAgICAgICAgICBtb2RpZmllZCA9IHRydWU7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy5wYXJhbUNvbmZpZy5ERUJVR19GTEFHKSBjb25zb2xlLmxvZyhcIm9iamVjdC5zYXZlQ3VycmVudCA6XCIgKyBvYmplY3QuQm9keS5sZW5ndGggKyBcIiBcIiArIG9iamVjdC5ncmlkLmlzRWRpdGluZygpKTtcclxuICAgIGlmIChvYmplY3QuQm9keS5sZW5ndGggIT0gMCkge1xyXG4gICAgICBtb2RpZmllZCA9IHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKChtb2RpZmllZCA9PSB0cnVlKSB8fCBvYmplY3QuZ3JpZC5pc0VkaXRpbmcoKSA9PSB0cnVlKSB7XHJcbiAgICAgIGRpcnR5ID0gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoZGlydHkgPT0gdHJ1ZSkge1xyXG4gICAgICBsZXQgZGlhbG9nU3RydWMgPSB7XHJcbiAgICAgICAgbXNnOiB0aGlzLnNhdmVDaGFuZ2VzTXNnLFxyXG4gICAgICAgIHRpdGxlOiB0aGlzLnBsZWFzZUNvbmZpcm1Nc2csXHJcbiAgICAgICAgaW5mbzogZ3JpZCxcclxuICAgICAgICBvYmplY3Q6IG9iamVjdCxcclxuICAgICAgICBhY3Rpb246IHRoaXMuWWVzTm9BY3Rpb25zLFxyXG4gICAgICAgIGNhbGxiYWNrOiB0aGlzLmVudGVyUXVlcnlBY3RfZ3JpZFxyXG4gICAgICB9O1xyXG4gICAgICAgIHRoaXMuc2hvd0NvbmZpcm1hdGlvbihkaWFsb2dTdHJ1Yyk7XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgdGhpcy5lbnRlclF1ZXJ5QWN0X2dyaWQoZ3JpZCwgb2JqZWN0KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHB1YmxpYyBzZXRTdHJBdXRoKHVzZXI6YW55LCBwYXNzd29yZDphbnkpIHtcclxuICAgIHRoaXMuU3RyQXV0aCA9IHVzZXIgKyBcIjpcIiArIHBhc3N3b3JkO1xyXG4gICAgdGhpcy5TdHJBdXRoID0gYnRvYSh0aGlzLlN0ckF1dGgpO1xyXG4gICAgdGhpcy5TdHJBdXRoID0gXCJCYXNpYyBcIiArIHRoaXMuU3RyQXV0aDtcclxuICB9XHJcbiAgcHVibGljIGlzQVNDSUkoc3RyKSB7XHJcbiAgICByZXR1cm4gL15bXFx4MDAtXFx4N0ZdKiQvLnRlc3Qoc3RyKTtcclxuICB9XHJcbiAgcHVibGljIGxvZ2luKG9iamVjdDphbnksIHVzZXI6YW55LCBwYXNzd29yZDphbnkpIHtcclxuICAgIGlmICghdGhpcy5pc0FTQ0lJKHVzZXIpKXtcclxuICAgICAgdGhpcy5zaG93Tm90aWZpY2F0aW9uKFwiZXJyb3JcIiwgXCLZkHJyb3I6IFwiICsgXCJOb3QgYSB2YWxpZCBVc2VyIE5hbWVcIik7XHJcbn1cclxuICAgIHRoaXMucGFyYW1Db25maWcgPSBnZXRQYXJhbUNvbmZpZygpO1xyXG4gICAgLy9jb25zb2xlLmxvZyhcInRoaXMucGFyYW1Db25maWc6XCIsIHRoaXMucGFyYW1Db25maWcpXHJcbiAgICB0aGlzLnNldFN0ckF1dGgodXNlciwgcGFzc3dvcmQpO1xyXG4gICAgLy9pZiAodGhpcy5wYXJhbUNvbmZpZy5ERUJVR19GTEFHKSBjb25zb2xlLmxvZyhcInRoaXMuU3RyQXV0aDpcIiArIHRoaXMuU3RyQXV0aCk7XHJcblxyXG5cclxuICAgIGxldCBQYWdlID0gXCJcIjtcclxuICAgIGxldCBzdWNjZXNzID0gZmFsc2U7XHJcbiAgICBjb25zdCBtZDUgPSBuZXcgTWQ1KCk7XHJcbiAgICBsZXQgcGFzcyA9IG1kNS5hcHBlbmRTdHIocGFzc3dvcmQpLmVuZCgpO1xyXG4gICAgdXNlciA9IHVzZXIudG9VcHBlckNhc2UoKS50cmltKCk7XHJcbiAgICB1c2VyID0gdXNlci50cmltKCk7XHJcbiAgICBsZXQgTmV3VmFsOmFueSA9IHtcclxuICAgICAgXCJVU0VSTkFNRVwiOiB1c2VyLFxyXG4gICAgICBcIlBBU1NXT1JEXCI6IHBhc3NcclxuICAgIH07XHJcblxyXG5cclxuICAgIE5ld1ZhbFtcIl9RVUVSWVwiXSA9IFwiVkVSSUZZX0FETV9VU0VSXCI7XHJcbiAgICBvYmplY3QuQm9keT1bXTtcclxuICAgIG9iamVjdC5hZGRUb0JvZHkoTmV3VmFsKTtcclxuICAgIFxyXG4gICAgbGV0IHBhcmFtQ29uZmlnID0ge1xyXG4gICAgICBcIk5hbWVcIjogXCJVU0VSTkFNRVwiLFxyXG4gICAgICBcIlZhbFwiOiB1c2VyXHJcbiAgICB9O1xyXG4gICAgc2V0UGFyYW1Db25maWcocGFyYW1Db25maWcpO1xyXG4gICAgdGhpcy5zZXNzaW9uUGFyYW1zW1wiVVNFUk5BTUVcIl0gPSB1c2VyO1xyXG5cclxuICAgIHRoaXMucG9zdChvYmplY3QsIFBhZ2UsIG9iamVjdC5Cb2R5KS5zdWJzY3JpYmUocmVzdWx0ID0+IHtcclxuICAgICAgaWYgKHR5cGVvZiByZXN1bHQuZGF0YVswXS5kYXRhWzBdICE9PSBcInVuZGVmaW5lZFwiKSB7XHJcbiAgICAgICAgaWYgKHRoaXMucGFyYW1Db25maWcuREVCVUdfRkxBRykgY29uc29sZS5sb2coXCJPYmplY3QgaW4gbG9naW4gSEZcIiwgb2JqZWN0LkJvZHksIHVzZXIpO1xyXG4gICAgICAgIGlmIChyZXN1bHQuZGF0YVswXS5kYXRhWzBdLlVTRVJOQU1FID09IHVzZXIpIHtcclxuICAgICAgICAgIHRoaXMuVVNFUk5BTUUgPSB1c2VyO1xyXG4gICAgICAgICAgb2JqZWN0LkJvZHkgPSBbXTtcclxuXHJcbiAgICAgICAgICBsZXQgcGFyYW1Db25maWcgPSB7XHJcbiAgICAgICAgICAgIFwiTmFtZVwiOiBcIlVTRVJfSU5GT1wiLFxyXG4gICAgICAgICAgICBcIlZhbFwiOiByZXN1bHQuZGF0YVswXS5kYXRhWzBdXHJcbiAgICAgICAgICB9O1xyXG4gICAgICAgICAgc2V0UGFyYW1Db25maWcocGFyYW1Db25maWcpO1xyXG4gICAgICAgICAgdGhpcy5zZXNzaW9uUGFyYW1zW1wiVVNFUl9JTkZPXCJdID0gcmVzdWx0LmRhdGFbMF0uZGF0YVswXTtcclxuICAgICAgICAgIGxldCBhZGFwdGVyID0gcmVzdWx0LmRhdGFbMF1bJ19EQl9BZEFwVG9yJ107XHJcbiAgICAgICAgICBpZiAodHlwZW9mIGFkYXB0ZXIgIT09IFwidW5kZWZpbmVkXCIpe1xyXG4gICAgICAgICAgICB0aGlzLnNlc3Npb25QYXJhbXNbXCJEQl9BREFQVE9SXCJdID0gYWRhcHRlci50b1VwcGVyQ2FzZSgpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgdGhpcy5VU0VSX0lORk8gPSByZXN1bHQuZGF0YVswXS5kYXRhWzBdO1xyXG4gICAgICAgICAgaWYgKCh0aGlzLnNlc3Npb25QYXJhbXMuVVNFUl9JTkZPLk1BU1RFUl9EQiAhPSBcIlwiKSAmJiAodHlwZW9mIHRoaXMuc2Vzc2lvblBhcmFtcy5VU0VSX0lORk8uTUFTVEVSX0RCICE9PSBcInVuZGVmaW5lZFwiKSl7XHJcbiAgICAgICAgICAgIHRoaXMuTUFTVEVSX0RCID0gdGhpcy5zZXNzaW9uUGFyYW1zLlVTRVJfSU5GTy5NQVNURVJfREI7XHJcbiAgICAgICAgICAgIHRoaXMuVVNFUk5BTUVfREIgPSB0aGlzLnNlc3Npb25QYXJhbXMuVVNFUl9JTkZPLk1BU1RFUl9EQjtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgICAgICBcclxuXHJcblxyXG4gICAgICAgICAgc3VjY2VzcyA9IHRydWU7XHJcbiAgICAgICAgICB0aGlzLmxvYWRSdWxlcyhvYmplY3QpO1xyXG4gICAgICAgICAgaWYgKChvYmplY3QudGVzdEVLWUMpIHx8KG9iamVjdC5uYXZUby5sZW5ndGghPTApfHwob2JqZWN0LnNoYXJlVG8ubGVuZ3RoIT0wKSkge1xyXG4gICAgICAgICAgICBvYmplY3QubG9naW5Db21wbGV0ZWRIYW5kbGVyKG51bGwpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICBvYmplY3QubG9naW5Db21wbGV0ZWQuZW1pdCh0aGlzKTtcclxuXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIGlmICghc3VjY2VzcylcclxuICAgICAgICB0aGlzLnNob3dOb3RpZmljYXRpb24oXCJlcnJvclwiLCBcImVycm9yOlwiICsgXCJXcm9uZyB1c2VyIG9yIHBhc3N3b3JkXCIpO1xyXG5cclxuXHJcblxyXG4gICAgfSxcclxuICAgIGVyciA9PiB7XHJcbiAgICAgICAgb2JqZWN0LkJvZHkgPSBbXTtcclxuICAgICAgICB0aGlzLnNob3dOb3RpZmljYXRpb24oXCJlcnJvclwiLCBcImVycm9yOlwiICsgXCJXcm9uZyB1c2VyIG9yIHBhc3N3b3JkXCIpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgdXNlckFkZGVkID0gZmFsc2U7XHJcbiAgcHVibGljIGFkZFVzZXJJbmZvKG9iamVjdDphbnksIHVzZXJuYW1lOmFueSwgdmFsdWU6YW55KSB7XHJcbiAgICB0aGlzLnBhcmFtQ29uZmlnID0gZ2V0UGFyYW1Db25maWcoKTtcclxuICAgIGxldCBQYWdlID0gXCJcIjtcclxuICAgIGxldCBzdWNjZXNzID0gZmFsc2U7XHJcbiAgICB1c2VybmFtZSA9IHVzZXJuYW1lLnRvVXBwZXJDYXNlKCkudHJpbSgpO1xyXG4gICAgdXNlcm5hbWUgPSB1c2VybmFtZS50cmltKCk7XHJcbiAgICBsZXQgZCA9IG5ldyBEYXRlKCk7XHJcbiAgICBsZXQgZGF0ZUlzbyA9IHRoaXMuRk9STUFUX0lTTyhkKTtcclxuICAgIGxldCBib2R5ID1bXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIFwiX1FVRVJZXCI6XCJJTlNFUlRfQURNX1VTRVJfSU5GT1JNQVRJT05cIixcclxuICAgICAgICAgICAgICAgIFwiVVNFUk5BTUVcIjp1c2VybmFtZSxcclxuICAgICAgICAgICAgICAgIFwiRU1BSUxcIjp2YWx1ZS5lbWFpbCxcclxuICAgICAgICAgICAgICAgIFwiRlVMTE5BTUVcIiA6IHZhbHVlLmZpcnN0TmFtZSArIFwiIFwiICsgdmFsdWUubGFzdE5hbWUgLFxyXG4gICAgICAgICAgICAgICAgXCJGTEVYX0ZMRDFcIiA6IHZhbHVlLmlkLFxyXG4gICAgICAgICAgICAgICAgXCJHUk9VUE5BTUVcIjogb2JqZWN0LmtleWNMb2FrLktFWUNMT0FLX1VTRVJfR1JPVVAsXHJcbiAgICAgICAgICAgICAgICBcIkxPR0RBVEVcIjogbmV3IERhdGUoKSxcclxuICAgICAgICAgICAgICAgIFwiTE9HTkFNRVwiOiB1c2VybmFtZVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICBdXHJcblxyXG4gICAgdGhpcy5wb3N0KG9iamVjdCwgUGFnZSwgYm9keSkuc3Vic2NyaWJlKHJlc3VsdCA9PiB7XHJcbiAgICAgICBzdWNjZXNzID0gdHJ1ZTtcclxuICAgICAgIGNvbnNvbGUubG9nKFwicmVzdWx0Omluc2VydDpcIiwgcmVzdWx0LmRhdGFbMF0pXHJcbiAgICAgIGlmICh0eXBlb2YgcmVzdWx0LmRhdGFbMF0gIT09IFwidW5kZWZpbmVkXCIpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcInJlc3VsdDpcIiwgcmVzdWx0LmRhdGFbMF0pXHJcbiAgICAgICAgICBzdWNjZXNzID0gdHJ1ZTtcclxuICAgICAgICAgIHRoaXMudXNlckFkZGVkID0gdHJ1ZTtcclxuICAgICAgICAgIHRoaXMuZ2V0VXNlckluZm8ob2JqZWN0LCB1c2VybmFtZSwgdmFsdWUpO1xyXG4gICAgICAgICAgXHJcbiAgICAgIH1cclxuICAgICAgaWYgKCFzdWNjZXNzKXtcclxuICAgICAgICBcclxuICAgICAgICBsZXQgZXJyb3JNc2cgPSBcIk5vdCBhYmxlIHRvIGFkZCBcIiArIHVzZXJuYW1lICsgXCIgdHAgIERCXCI7XHJcbiAgICAgICAgbGV0IGRpYWxvZ1N0cnVjID0ge1xyXG4gICAgICAgICAgbXNnOiBlcnJvck1zZyxcclxuICAgICAgICAgIHRpdGxlOiBcIkVycm9yXCIsXHJcbiAgICAgICAgICBpbmZvOiBudWxsLFxyXG4gICAgICAgICAgb2JqZWN0OiBvYmplY3QsXHJcbiAgICAgICAgICBhY3Rpb246IG51bGwsXHJcbiAgICAgICAgICBjYWxsYmFjazogbnVsbFxyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy5zaG93Q29uZmlybWF0aW9uKGRpYWxvZ1N0cnVjKTtcclxuICAgICAgIFxyXG4gICAgICAgLy8gb2JqZWN0LmxvZ29mZigzMDAwKTtcclxuICAgICAgfVxyXG5cclxuXHJcblxyXG4gICAgfSxcclxuICAgICAgZXJyID0+IHtcclxuICAgICAgICBvYmplY3QuQm9keSA9IFtdO1xyXG4gICAgICAgIGxldCBlcnJvck1zZyA9IFwiIEVycm9yIGNvbm5lY3RpbmcgdG8gIERCXCI7XHJcbiAgICAgICAgbGV0IGRpYWxvZ1N0cnVjID0ge1xyXG4gICAgICAgICAgbXNnOiBlcnJvck1zZyxcclxuICAgICAgICAgIHRpdGxlOiBcIkVycm9yXCIsXHJcbiAgICAgICAgICBpbmZvOiBudWxsLFxyXG4gICAgICAgICAgb2JqZWN0OiBvYmplY3QsXHJcbiAgICAgICAgICBhY3Rpb246IG51bGwsXHJcbiAgICAgICAgICBjYWxsYmFjazogbnVsbFxyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy5zaG93Q29uZmlybWF0aW9uKGRpYWxvZ1N0cnVjKTtcclxuICAgICAgIC8vIG9iamVjdC5sb2dvZmYoMzAwMCk7XHJcbiAgICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGdldFVzZXJJbmZvKG9iamVjdDphbnksIHVzZXI6YW55LCB2YWx1ZTphbnkpIHtcclxuICAgIHRoaXMucGFyYW1Db25maWcgPSBnZXRQYXJhbUNvbmZpZygpO1xyXG4gICAgbGV0IFBhZ2UgPSBcIlwiO1xyXG4gICAgbGV0IHN1Y2Nlc3MgPSBmYWxzZTtcclxuICAgIHVzZXIgPSB1c2VyLnRvVXBwZXJDYXNlKCkudHJpbSgpO1xyXG4gICAgdXNlciA9IHVzZXIudHJpbSgpO1xyXG4gICAgbGV0IE5ld1ZhbDphbnkgPSB7XHJcbiAgICAgIFwiVVNFUk5BTUVcIjogdXNlclxyXG4gICAgfTtcclxuXHJcblxyXG4gICAgTmV3VmFsW1wiX1FVRVJZXCJdID0gXCJHRVRfQURNX1VTRVJfSU5GT1JNQVRJT05cIjtcclxuICAgIG9iamVjdC5Cb2R5PVtdO1xyXG4gICAgb2JqZWN0LmFkZFRvQm9keShOZXdWYWwpO1xyXG5cclxuICAgIGxldCBwYXJhbUNvbmZpZyA9IHtcclxuICAgICAgXCJOYW1lXCI6IFwiVVNFUk5BTUVcIixcclxuICAgICAgXCJWYWxcIjogdXNlclxyXG4gICAgfTtcclxuICAgIHNldFBhcmFtQ29uZmlnKHBhcmFtQ29uZmlnKTtcclxuICAgIHRoaXMuc2Vzc2lvblBhcmFtc1tcIlVTRVJOQU1FXCJdID0gdXNlcjtcclxuXHJcbiAgICB0aGlzLnBvc3Qob2JqZWN0LCBQYWdlLCBvYmplY3QuQm9keSkuc3Vic2NyaWJlKHJlc3VsdCA9PiB7XHJcbiAgICAgIGlmICh0eXBlb2YgcmVzdWx0LmRhdGFbMF0uZGF0YVswXSAhPT0gXCJ1bmRlZmluZWRcIikge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwicmVzdWx0OmdldDpcIiwgcmVzdWx0LmRhdGFbMF0uZGF0YVswXSlcclxuICAgICAgICBpZiAocmVzdWx0LmRhdGFbMF0uZGF0YVswXS5VU0VSTkFNRSA9PSB1c2VyKSB7XHJcbiAgICAgICAgICB0aGlzLlVTRVJOQU1FID0gdXNlcjtcclxuICAgICAgICAgIG9iamVjdC5Cb2R5ID0gW107XHJcblxyXG4gICAgICAgICAgbGV0IHBhcmFtQ29uZmlnID0ge1xyXG4gICAgICAgICAgICBcIk5hbWVcIjogXCJVU0VSX0lORk9cIixcclxuICAgICAgICAgICAgXCJWYWxcIjogcmVzdWx0LmRhdGFbMF0uZGF0YVswXVxyXG4gICAgICAgICAgfTtcclxuICAgICAgICAgIHNldFBhcmFtQ29uZmlnKHBhcmFtQ29uZmlnKTtcclxuICAgICAgICAgIHRoaXMuc2Vzc2lvblBhcmFtc1tcIlVTRVJfSU5GT1wiXSA9IHJlc3VsdC5kYXRhWzBdLmRhdGFbMF07XHJcbiAgICAgICAgICBsZXQgYWRhcHRlciA9IHJlc3VsdC5kYXRhWzBdWydfREJfQWRBcFRvciddO1xyXG4gICAgICAgICAgaWYgKHR5cGVvZiBhZGFwdGVyICE9PSBcInVuZGVmaW5lZFwiKXtcclxuICAgICAgICAgICAgdGhpcy5zZXNzaW9uUGFyYW1zW1wiREJfQURBUFRPUlwiXSA9IGFkYXB0ZXIudG9VcHBlckNhc2UoKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIHRoaXMuVVNFUl9JTkZPID0gcmVzdWx0LmRhdGFbMF0uZGF0YVswXTtcclxuICAgICAgICAgIGlmICgodGhpcy5zZXNzaW9uUGFyYW1zLlVTRVJfSU5GTy5NQVNURVJfREIgIT0gXCJcIikgJiYgKHR5cGVvZiB0aGlzLnNlc3Npb25QYXJhbXMuVVNFUl9JTkZPLk1BU1RFUl9EQiAhPT0gXCJ1bmRlZmluZWRcIikpe1xyXG4gICAgICAgICAgICB0aGlzLk1BU1RFUl9EQiA9IHRoaXMuc2Vzc2lvblBhcmFtcy5VU0VSX0lORk8uTUFTVEVSX0RCO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIFxyXG5cclxuXHJcblxyXG4gICAgICAgICAgc3VjY2VzcyA9IHRydWU7XHJcbiAgICAgICAgICB0aGlzLmxvYWRSdWxlcyhvYmplY3QpO1xyXG4gICAgICAgICAgaWYgKChvYmplY3QudGVzdEVLWUMpIHx8KG9iamVjdC5uYXZUby5sZW5ndGghPTApKSB7XHJcbiAgICAgICAgICAgIG9iamVjdC5sb2dpbkNvbXBsZXRlZEhhbmRsZXIobnVsbCk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgIG9iamVjdC5sb2dpbkNvbXBsZXRlZEhhbmRsZXIodGhpcyk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIGNvbnNvbGUubG9nKFwicmVzdWx0OnN1Y2Nlc3M6XCIsc3VjY2VzcylcclxuICAgICAgaWYgKCFzdWNjZXNzKXtcclxuICAgICAgICBpZiAoIXRoaXMudXNlckFkZGVkKVxyXG4gICAgICAgICAgdGhpcy5hZGRVc2VySW5mbyhvYmplY3QsIHVzZXIsIHZhbHVlKTtcclxuICAgICAgICBlbHNle1xyXG4gICAgICAgICAgLy8gbGV0IGVycm9yTXNnID0gdXNlciArIFwiaXMgbm90IGRlZmluZWQgaW4gU1RBUiBEQlwiO1xyXG4gICAgICAgICAgLy8gbGV0IGRpYWxvZ1N0cnVjID0ge1xyXG4gICAgICAgICAgLy8gICBtc2c6IGVycm9yTXNnLFxyXG4gICAgICAgICAgLy8gICB0aXRsZTogXCJFcnJvclwiLFxyXG4gICAgICAgICAgLy8gICBpbmZvOiBudWxsLFxyXG4gICAgICAgICAgLy8gICBvYmplY3Q6IG9iamVjdCxcclxuICAgICAgICAgIC8vICAgYWN0aW9uOiBudWxsLFxyXG4gICAgICAgICAgLy8gICBjYWxsYmFjazogbnVsbFxyXG4gICAgICAgICAgLy8gfTtcclxuICAgICAgICAgIC8vIHRoaXMuc2hvd0NvbmZpcm1hdGlvbihkaWFsb2dTdHJ1Yyk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgICAvLyBvYmplY3QubG9nb2ZmKDMwMDApO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuXHJcblxyXG4gICAgfSxcclxuICAgICAgZXJyID0+IHtcclxuICAgICAgICBvYmplY3QuQm9keSA9IFtdO1xyXG4gICAgICAgIGxldCBlcnJvck1zZyA9IFwiIEVycm9yIGNvbnRhY3RpbmcgREIgdG8gdmVyaWZ5IHVzZXIgXCIgKyB1c2VyO1xyXG4gICAgICAgIGxldCBkaWFsb2dTdHJ1YyA9IHtcclxuICAgICAgICAgIG1zZzogZXJyb3JNc2csXHJcbiAgICAgICAgICB0aXRsZTogXCJFcnJvclwiLFxyXG4gICAgICAgICAgaW5mbzogbnVsbCxcclxuICAgICAgICAgIG9iamVjdDogb2JqZWN0LFxyXG4gICAgICAgICAgYWN0aW9uOiBudWxsLFxyXG4gICAgICAgICAgY2FsbGJhY2s6IG51bGxcclxuICAgICAgICB9O1xyXG4gICAgICAgIHRoaXMuc2hvd0NvbmZpcm1hdGlvbihkaWFsb2dTdHJ1Yyk7XHJcbiAgICAgICAvL29iamVjdC5sb2dvZmYoMzAwMCk7XHJcbiAgICAgIH0pO1xyXG4gIH1cclxuICBwdWJsaWMgcnVsZXNQb3N0UXVlcnlEZWYgPSB7XHJcbiAgICBydWxlUHRyc0Fycjoge30sXHJcbiAgICBydWxlc0FycjogW10sXHJcbiAgICBhY3Rpb25QdHJzQXJyOiB7fSxcclxuICAgIGFjdGlvbnNBcnI6IFtdXHJcbiAgfTtcclxuICBwdWJsaWMgcnVsZXNQcmVRdWVyeURlZiA9IHtcclxuICAgIHJ1bGVQdHJzQXJyOiB7fSxcclxuICAgIHJ1bGVzQXJyOiBbXSxcclxuICAgIGFjdGlvblB0cnNBcnI6IHt9LFxyXG4gICAgYWN0aW9uc0FycjogW11cclxuICB9O1xyXG4gIHB1YmxpYyBob3N0c0FyciA9IFtdO1xyXG4gIHB1YmxpYyBob3N0c01hcEFyciA9IFtdO1xyXG4gIC8vLy8vLy8vLy8vLy8vLy8vXHJcbiAgICBwdWJsaWMgTUFLRV9EQVRFICAodmFsKVxyXG5cdHtcclxuXHRcdHRyeSB7XHJcblx0XHRcdHZhciBkID0gbmV3IERhdGUodmFsKTtcclxuXHRcdFx0fSBjYXRjaCAoZSkge1xyXG5cdFx0XHRcdGNvbnNvbGUubG9nIChcIkVycm9yIHBhcnNpbmcgOjI6XCIsdmFsKTtcclxuXHRcdFx0XHRyZXR1cm4gMDtcclxuXHRcdFx0fVxyXG5cdFx0Y29uc29sZS5sb2cgKFwiY29ycmVjdCBwYXJzaW5nIDpcIix2YWwsIGQpO1xyXG5cdFx0dmFyIGRhdGVJc28gPSBkLnRvSVNPU3RyaW5nKCk7XHJcblx0XHQgdmFyIGRhdGVJc29BcnIgPSBkYXRlSXNvLnNwbGl0KFwiLlwiKTtcclxuXHRcdCBkYXRlSXNvID0gZGF0ZUlzb0FyclswXSArIFwiLjAwMFpcIjtcclxuICAgICBjb25zb2xlLmxvZyAoXCJjb3JyZWN0IHBhcnNpbmcgOlwiLHZhbCwgZCxkYXRlSXNvKTtcclxuXHRcdHJldHVybiBkYXRlSXNvO1xyXG5cdH1cclxuICBwdWJsaWMgRk9STUFUX0lTTyhkOmFueSkge1xyXG4gICAgdmFyIGRhdGVJc28gPSBkLnRvSVNPU3RyaW5nKCk7XHJcbiAgICB2YXIgZGF0ZUlzb0FyciA9IGRhdGVJc28uc3BsaXQoXCJUXCIpO1xyXG4gICAgZGF0ZUlzbyA9IGRhdGVJc29BcnJbMF0gKyBcIiBcIiArIGRhdGVJc29BcnJbMV07XHJcbiAgICBkYXRlSXNvID0gZGF0ZUlzby5zdWJzdHIoMCwgMTkpO1xyXG4gICAgcmV0dXJuIGRhdGVJc287XHJcbiAgfVxyXG4gIHB1YmxpYyBMb2dSdWxlKG9iamVjdDphbnksIHJ1bGVMb2c6YW55LCBtc2dSZXNwb25zZTphbnksIHN0YXR1czphbnkpIHtcclxuICAgIGZ1bmN0aW9uIHByZXBhcmVEYXRhRm9yREIoZGF0YUluOmFueSkge1xyXG5cclxuXHRcdFx0bGV0IGRhdGFPdXQgPSBKU09OLnN0cmluZ2lmeShkYXRhSW4pO1xyXG4gICAgICAvL2NvbnNvbGUubG9nKFwiZGF0YUluOlwiLCBkYXRhSW4sIFwiIGRhdGFPdXQ6XCIsIGRhdGFPdXQpO1xyXG5cdFx0XHRkYXRhT3V0ID0gZGF0YU91dC5zcGxpdChcIidcIikuam9pbignXCInKTtcclxuXHRcdFx0cmV0dXJuIGRhdGFPdXQ7XHJcblxyXG5cdFx0fVxyXG4gICAgaWYgKHR5cGVvZiBtc2dSZXNwb25zZSA9PSBcIm9iamVjdFwiKVxyXG5cdFx0XHRtc2dSZXNwb25zZSA9IEpTT04uc3RyaW5naWZ5KG1zZ1Jlc3BvbnNlKTtcclxuICAgIGlmICh0aGlzLnBhcmFtQ29uZmlnLkRFQlVHX0ZMQUcpIGNvbnNvbGUubG9nKFwiLS0tLS1tc2dSZXNwb25zZTpcIiwgbXNnUmVzcG9uc2UsIFwicnVsZUxvZzpcIiwgcnVsZUxvZyk7XHJcbiAgICBsZXQgZGIgPSBydWxlTG9nLmRiO1xyXG4gICAgbGV0IGQgPSBuZXcgRGF0ZSgpO1xyXG4gICAgbGV0IGRhdGVJc28gPSB0aGlzLkZPUk1BVF9JU08oZCk7XHJcblxyXG4gICAgbGV0IFJVTEVfS0VZID0gcnVsZUxvZy5ydWxlLlJVTEVfS0VZO1xyXG5cclxuICAgIGxldCBhcnJheSA9IFJVTEVfS0VZLnNwbGl0KFwiLFwiKTtcclxuICAgIC8vbGV0IHJ1bGVLZXkgPSB7fTtcclxuICAgIGxldCBydWxlS2V5ID0gXCJcIjtcclxuICAgIGxldCBydWxlS2V5TmFtZSA9IFwiXCI7XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFycmF5Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIGxldCBlbGVtID0gYXJyYXlbaV07XHJcbiAgICAgIGxldCBlbGVtX3ZhbHVlID0gcnVsZUxvZy5xdWVyeURhdGFbZWxlbV07XHJcbiAgICAgIGlmICh0eXBlb2YgZWxlbV92YWx1ZSAhPT0gXCJ1bmRlZmluZWRcIikge1xyXG5cdFx0XHRcdC8vcnVsZUtleVtlbGVtXSA9IGVsZW1fdmFsdWU7XHJcbiAgICAgICAgaWYgKHJ1bGVLZXkgIT0gXCJcIikge1xyXG5cdFx0XHRcdFx0cnVsZUtleSA9IHJ1bGVLZXkgKyBcIl9cIjtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0cnVsZUtleSA9IHJ1bGVLZXkgKyBlbGVtX3ZhbHVlO1xyXG5cclxuICAgICAgICBpZiAocnVsZUtleU5hbWUgIT0gXCJcIikge1xyXG5cdFx0XHRcdFx0cnVsZUtleU5hbWUgPSBydWxlS2V5TmFtZSArIFwiX1wiO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRydWxlS2V5TmFtZSA9IHJ1bGVLZXlOYW1lICsgZWxlbTtcclxuICAgICAgfVxyXG5cclxuICAgIH1cclxuICAgIGlmICh0aGlzLnBhcmFtQ29uZmlnLkRFQlVHX0ZMQUcpIGNvbnNvbGUubG9nKFwicnVsZUtleTpcIiwgcnVsZUtleSwgXCIgcnVsZUtleU5hbWU6XCIsIHJ1bGVLZXlOYW1lKTtcclxuXHJcblxyXG5cclxuICAgIGlmICh0aGlzLnBhcmFtQ29uZmlnLkRFQlVHX0ZMQUcpIGNvbnNvbGUubG9nKFwiUlVMRV9LRVk6XCIsIFJVTEVfS0VZKTtcclxuXHJcblxyXG4gICAgdmFyIHRlbXBsYXRlTmFtZSA9IHJ1bGVMb2cucXVlcnlEYXRhLlRFTVBMQVRFX05BTUU7XHJcbiAgICBsZXQgcXVlcnlEYXRhID0gcHJlcGFyZURhdGFGb3JEQihydWxlTG9nLnF1ZXJ5RGF0YSk7XHJcbiAgICAvL2xldCBib2R5VG9TZW5kID0gcHJlcGFyZURhdGFGb3JEQihydWxlTG9nLmJvZHlUb1NlbmQpO1xyXG4gICAgbGV0IGJvZHlUb1NlbmQgPSBydWxlTG9nLmJvZHlUb1NlbmQ7XHJcbiAgICBsZXQgcGFyYW1ldGVyc1RvU2VuZCA9IHByZXBhcmVEYXRhRm9yREIocnVsZUxvZy5wYXJhbWV0ZXJzVG9TZW5kKTtcclxuICAgLy8gbGV0IHJ1bGVLZXlTdHIgPSBwcmVwYXJlRGF0YUZvckRCKHJ1bGVLZXkpO1xyXG4gICAgbGV0IG1zZ1Jlc3BvbnNlU3RyID0gcHJlcGFyZURhdGFGb3JEQihtc2dSZXNwb25zZSk7XHJcblxyXG4gICAgaWYgKHRoaXMucGFyYW1Db25maWcuREVCVUdfRkxBRykgY29uc29sZS5sb2coXCJxdWVyeURhdGE6XCIgKyBxdWVyeURhdGEpO1xyXG5cclxuLy9cclxuICAgICAgICAgICAgICBsZXQgdXNlck5hbWUgPSBvYmplY3Quc3RhclNlcnZpY2VzLnNlc3Npb25QYXJhbXMuVVNFUl9JTkZPLk5hbWU7XHJcbiAgICBvYmplY3QuQm9keSA9IFtdO1xyXG4gICAgbGV0IFBhZ2UgPSBcIlwiO1xyXG4gICAgbGV0IE5ld1ZhbDphbnkgPSB7XHJcbiAgICAgIFwiUlVMRV9LRVlcIjogcnVsZUtleSxcclxuICAgICAgXCJSVUxFX0tFWV9OQU1FXCI6IHJ1bGVLZXlOYW1lLFxyXG4gICAgICBcIlNUQVRVU1wiOiBzdGF0dXMsXHJcbiAgICAgIFwiTU9EVUxFXCI6IHJ1bGVMb2cucnVsZS5NT0RVTEUsXHJcbiAgICAgIFwiUlVMRV9JRFwiOiBydWxlTG9nLnJ1bGUuUlVMRV9JRCxcclxuICAgICAgXCJBQ1RJT05fSURcIjogcnVsZUxvZy5hY3Rpb24uQUNUSU9OX0lELFxyXG4gICAgICBcIlNFTlRfREFURVwiOiBydWxlTG9nLnNlbnREYXRlLFxyXG4gICAgICBcIk1TR19SRUNFSVZFRFwiOiBxdWVyeURhdGEsXHJcbiAgICAgICAgICAgICAgICBcIlBBUkFNRVRFUl9TRU5UXCI6IHBhcmFtZXRlcnNUb1NlbmQsXHJcbiAgICAgIFwiQk9EWV9TRU5UXCI6IGJvZHlUb1NlbmQsXHJcbiAgICAgIFwiTVNHX1JFU1BPTlNFXCI6IG1zZ1Jlc3BvbnNlU3RyLFxyXG4gICAgICBcIkxPR0RBVEVcIjogZGF0ZUlzbyxcclxuICAgICAgXCJMT0dOQU1FXCI6IHVzZXJOYW1lLFxyXG4gICAgICBcIlRFTVBMQVRFX05BTUVcIiA6IHRlbXBsYXRlTmFtZVxyXG5cclxuICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgIE5ld1ZhbFtcIl9RVUVSWVwiXSA9IFwiSU5TRVJUX0FETV9SVUxFX0xPR1wiO1xyXG5cclxuICAgICAgICAgICAgICAvL2lmICh0aGlzLnBhcmFtQ29uZmlnLkRFQlVHX0ZMQUcpIGNvbnNvbGUubG9nKFwidGVzdDpOZXdWYWw6XCIsIE5ld1ZhbClcclxuICAgICAgICAgICAgICAvL2lmICh0aGlzLnBhcmFtQ29uZmlnLkRFQlVHX0ZMQUcpIGNvbnNvbGUubG9nKFwidGVzdDpvYmplY3QuQm9keTpcIiwgb2JqZWN0LkJvZHkpXHJcbiAgICAgICAgICAgICAgb2JqZWN0LmFkZFRvQm9keShOZXdWYWwpO1xyXG5cclxuXHJcbiAgICB0aGlzLnBvc3Qob2JqZWN0LCBQYWdlLCBvYmplY3QuQm9keSkuc3Vic2NyaWJlKHJlc3VsdCA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5wYXJhbUNvbmZpZy5ERUJVR19GTEFHKSBjb25zb2xlLmxvZyhcInRlc3Q6cmVzdWx0LmRhdGE6XCIsIHJlc3VsdC5kYXRhKTtcclxuICAgICAgb2JqZWN0LkJvZHkgPSBbXTtcclxuICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgIGVyciA9PiB7XHJcbiAgICAgICAgb2JqZWN0LkJvZHkgPSBbXTtcclxuICAgICAgICB0aGlzLnNob3dOb3RpZmljYXRpb24oXCJlcnJvclwiLCBcImVycm9yOlwiICsgZXJyLm1lc3NhZ2UpO1xyXG4gICAgICAgICAgICAgIH0pO1xyXG5cclxuXHJcblxyXG4gIH1cclxuICBwdWJsaWMgcGVyZm9ybUh0dHBQb3N0KG9iamVjdDphbnksIGJvZHlUb1NlbmQ6YW55LCBwYXJhbWV0ZXJzVG9TZW5kOmFueSwgc2VuZFRvOmFueSwgcXVlcnlEYXRhOmFueSwgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJ1bGU6YW55LCBhY3Rpb246YW55LCBUcmlnZ2VyOmFueSwgaG9zdERlZjphbnksIGhvc3RNYXBEZWY6YW55LCBoZWFkZXJQYXJhbTphbnksICBwYXRoRXh0cmE6YW55KSB7XHJcblxyXG4gICAgdmFyIHZhbGlkID0gZmFsc2U7XHJcbiAgICBsZXQgZXJyb3IgPSAwO1xyXG4gICAgbGV0IG1zZyA9IFwiXCI7XHJcblxyXG4gICAgbGV0IG9wdGlvbnM6YW55ID0ge1xyXG4gICAgICBob3N0OiAnJyxcclxuICAgICAgcGF0aDogJycsXHJcbiAgICAgIHBvcnQ6IDgwLFxyXG4gICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgaGVhZGVyczoge1xyXG4gICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG4gICAgICAgLy8nQ29udGVudC1UeXBlJzogJ3RleHQveG1sOyBjaGFyc2V0PXV0Zi04JyxcclxuICAgICAgXCJhdXRob3JpemF0aW9uXCI6IFwiXCJcclxuICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgIC8vIGlmICh0aGlzLnBhcmFtQ29uZmlnLkRFQlVHX0ZMQUcpIGNvbnNvbGUubG9nKFwiLS0tLS0tLS0tLS0tLS0tcmVxLnVybDpcIixyZXEudXJsKTtcclxuICAgLy8gaWYgKHRoaXMucGFyYW1Db25maWcuREVCVUdfRkxBRykgY29uc29sZS5sb2coXCItLS0tLS0tLS0tLS0tLS1wYXRobmFtZTpcIixyZXEuX3BhcnNlZFVybC5wYXRobmFtZSk7XHJcbiAgIC8vIGlmICh0aGlzLnBhcmFtQ29uZmlnLkRFQlVHX0ZMQUcpIGNvbnNvbGUubG9nKFwiLS0tLS0tLS0tLS0tLS0tcGF0aDpcIixyZXEuX3BhcnNlZFVybC5wYXRoKTtcclxuICAgIGxldCBkID0gbmV3IERhdGUoKTtcclxuICAgIGxldCBkYXRlSXNvID0gdGhpcy5GT1JNQVRfSVNPKGQpO1xyXG4gICAgaWYgKGhvc3REZWYgPT0gbnVsbClcclxuICAgICAgaG9zdERlZiA9IFwiXCI7XHJcblxyXG4gICAgbGV0IHJ1bGVMb2cgPSB7XHJcbiAgICAgIHJ1bGU6IHJ1bGUsXHJcbiAgICAgIGFjdGlvbjogYWN0aW9uLFxyXG4gICAgICBxdWVyeURhdGE6IHF1ZXJ5RGF0YSxcclxuICAgICAgYm9keVRvU2VuZDogYm9keVRvU2VuZCxcclxuICAgICAgcGFyYW1ldGVyc1RvU2VuZDogcGFyYW1ldGVyc1RvU2VuZCxcclxuICAgIC8vICBcImRiXCI6IGRiLFxyXG4gICAgICBzZW50RGF0ZTogZGF0ZUlzbyxcclxuICAgICAgaG9zdERlZjogaG9zdERlZlxyXG4gICAgfTtcclxuICAgIGlmIChzZW5kVG8gPT0gXCJXRlwiKSB7XHJcbiAgICAgIGxldCB1cmwgPSB0aGlzLkJBU0VfVVJMO1xyXG5cclxuICAgICAgb3B0aW9ucy5oZWFkZXJzLmF1dGhvcml6YXRpb24gPSB0aGlzLlN0ckF1dGg7XHJcblxyXG4gICAgICB2YWxpZCA9IHRydWU7XHJcblxyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgIGlmIChob3N0RGVmICE9IFwiXCIpIHtcclxuICAgICAgICBsZXQgcGF0aCA9IFwiL1wiICsgaG9zdERlZi5QQVRIO1xyXG4gICAgICAgIGlmIChwYXJhbWV0ZXJzVG9TZW5kICE9IFwiXCIpXHJcbiAgICAgICAgICBwYXRoID0gcGF0aCArIHBhcmFtZXRlcnNUb1NlbmQ7XHJcbiAgICAgICAgcGF0aCA9IHBhdGggKyBwYXRoRXh0cmE7XHJcbiAgICAgICAgbGV0IGhvc3QgPSBob3N0RGVmLkhPU1Q7XHJcbiAgICAgICAgbGV0IHBvcnQgPSBwYXJzZUludChob3N0RGVmLlBPUlQpO1xyXG4gICAgICAgIGxldCBtZXRob2QgPSBob3N0RGVmLkhUVFBfTUVUSE9EO1xyXG5cclxuICAgICAgICBvcHRpb25zLmhvc3QgPSBob3N0O1xyXG4gICAgICAgIG9wdGlvbnMucG9ydCA9IHBvcnQ7XHJcbiAgICAgICAgb3B0aW9ucy5wYXRoID0gcGF0aDtcclxuICAgICAgICBvcHRpb25zLm1ldGhvZCA9IG1ldGhvZDtcclxuICAgICAgIC8vIGxldCB1cmwgPSBcImh0dHA6Ly9cIiArIGhvc3QgKyBcIjpcIiArIHBvcnQgICsgcGF0aCArIHBhcmFtZXRlcnNUb1NlbmQgO1xyXG4gICAgICAgIGxldCB1cmw6IHN0cmluZyA9IGhvc3REZWYuVVJMO1xyXG4vL1x0XHRcdFx0XHRvcHRpb25zLmhlYWRlcnMuYXV0aG9yaXphdGlvbiA9IHJlcS5oZWFkZXJzLmF1dGhvcml6YXRpb247XHJcbiAgICAgICAgLy9ib2R5VG9TZW5kID0gXCJcIjtcclxuXHJcblxyXG4gICAgICAgIHZhbGlkID0gdHJ1ZTtcclxuICAgICAgfVxyXG4gICAgICBlbHNlIHtcclxuICAgICAgICBlcnJvciA9IDEwMDtcclxuICAgICAgICBtc2cgPSBcInVuZGVmaW5lZCBIb3N0IDpcIiArIHNlbmRUbztcclxuICAgICAgICB0aGlzLkxvZ1J1bGUob2JqZWN0LCBydWxlTG9nLCBtc2csIDEwMCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGlmICh0aGlzLnBhcmFtQ29uZmlnLkRFQlVHX0ZMQUcpIGNvbnNvbGUubG9nKFwiaGVyZTI6dmFsaWQ6XCIsIHZhbGlkKTtcclxuICAgIGlmICh2YWxpZCkge1xyXG4gICAgICBpZiAodGhpcy5wYXJhbUNvbmZpZy5ERUJVR19GTEFHKSBjb25zb2xlLmxvZyhcIm9wdGlvbnM6XCIsIG9wdGlvbnMpO1xyXG4gICAgICBpZiAodGhpcy5wYXJhbUNvbmZpZy5ERUJVR19GTEFHKSBjb25zb2xlLmxvZyhcIi0tLS0tLWJvZHlUb1NlbmQ6XCIgKyBib2R5VG9TZW5kLCBcIiAgVHJpZ2dlcjpcIiwgVHJpZ2dlcik7XHJcblxyXG4gICAgICBsZXQga2V5cyA9IE9iamVjdC5rZXlzKGhlYWRlclBhcmFtKTtcclxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBrZXlzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgaWYgKHRoaXMucGFyYW1Db25maWcuREVCVUdfRkxBRykgY29uc29sZS5sb2coa2V5c1tpXSArIFwiIFwiICsgaGVhZGVyUGFyYW1ba2V5c1tpXV0pO1xyXG4gICAgICAgIGlmIChoZWFkZXJQYXJhbVtrZXlzW2ldXSAhPSBudWxsKSB7XHJcbiAgICAgICAgICBvcHRpb25zLmhlYWRlcnNba2V5c1tpXV0gPSBoZWFkZXJQYXJhbVtrZXlzW2ldXTtcclxuXHJcbiAgICAgICAgICAvL3NjcmVlbkNvbmZpZ1sga2V5c1tpXSBdID0gY29tcG9uZW50Q29uZmlnWyBrZXlzW2ldIF07XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICBpZiAodGhpcy5wYXJhbUNvbmZpZy5ERUJVR19GTEFHKSBjb25zb2xlLmxvZyhcImhlcmUyOmFjdGlvbi5BQ1RJT05fQ09ERTpcIiwgYWN0aW9uLkFDVElPTl9DT0RFKTtcclxuICAgICAgaWYgKGFjdGlvbi5BQ1RJT05fQ09ERSA9PSBcIlNFTkRfV0FJVFwiKSB7XHJcbiAgICAgICAgLypcclxuICAgICAgICBsZXQgc2VuZGluZ0xpYiA9IFwicmVxdWVzdFwiO1xyXG4gICAgICAgIHN0YXR1cyA9IDE7XHJcbiAgICAgICAgbGV0IGhlYWRlcnMgID0gIHtoZWFkZXJzOm9wdGlvbnMuaGVhZGVyc307XHJcbiAgICAgICAgaWYgKHRoaXMucGFyYW1Db25maWcuREVCVUdfRkxBRykgY29uc29sZS5sb2coXCJoZWFkZXJzOlwiLCBoZWFkZXJzKTtcclxuICAgICAgICBsZXQgdXJsID0gXCJodHRwOi8vXCIgKyBob3N0ICsgXCI6XCIgKyBwb3J0ICArIHBhdGggKyBwYXJhbWV0ZXJzVG9TZW5kIDtcclxuICAgICAgICBpZiAodGhpcy5wYXJhbUNvbmZpZy5ERUJVR19GTEFHKSBjb25zb2xlLmxvZyhcIi0tLXVybDpcIiwgdXJsKTtcclxuICAgICAgICBpZiAobWV0aG9kID09IFwiR0VUXCIpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgbGV0IHJlcyA9IHJlcXVlc3QobWV0aG9kLCB1cmwsIGhlYWRlcnMpO1xyXG4gICAgICAgICAgbGV0IHJlc3VsdCA9IEpTT04ucGFyc2UocmVzLmdldEJvZHkoJ3V0ZjgnKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2VcclxuICAgICAgICBpZiAobWV0aG9kID09IFwiUE9TVFwiKVxyXG4gICAgICAgIHtcclxuXHJcbiAgICAgICAgICBsZXQgZGF0YUZvclN5bmMgPSB7IGJvZHkgOiBib2R5VG9TZW5kLCBoZWFkZXJzOm9wdGlvbnMuaGVhZGVyc307XHJcbiAgICAgICAgICBsZXQgcmVzID0gcmVxdWVzdChtZXRob2QsIHVybCwgZGF0YUZvclN5bmMpO1xyXG4gICAgICAgICAgaWYgKHRoaXMucGFyYW1Db25maWcuREVCVUdfRkxBRykgY29uc29sZS5sb2coXCJyZXM6XCIsIHJlcyk7XHJcbiAgICAgICAgICBsZXQgc3RhdHVzQ29kZSA9IHJlcy5zdGF0dXNDb2RlO1xyXG4gICAgICAgICAgbGV0IG1zZ1Jlc3BvbnNlID1cIlwiO1xyXG4gICAgICAgICAgaWYgKHN0YXR1c0NvZGUgPT0gMjAwKVxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBsZXQgY29udGVudFR5cGUgPSByZXMuaGVhZGVyc1snY29udGVudC10eXBlJ107XHJcblxyXG4gICAgICAgICAgICBsZXQgbXNnUmVzcG9uc2UgPSByZXMuZ2V0Qm9keSgndXRmOCcpO1xyXG4gICAgICAgICAgICBpZiAodGhpcy5wYXJhbUNvbmZpZy5ERUJVR19GTEFHKSBjb25zb2xlLmxvZyhcInN0YXR1c0NvZGU6XCIsIHN0YXR1c0NvZGUsXCIgaGVhZGVyczpcIiwgaGVhZGVycywgIFwiIG1zZ1Jlc3BvbnNlOlwiLCBtc2dSZXNwb25zZSk7XHJcbiAgICAgICAgICAgIGxldCBuID0gY29udGVudFR5cGUuc2VhcmNoKFwianNvblwiKTtcclxuICAgICAgICAgICAgaWYgKG4gIT0gLTEpXHJcbiAgICAgICAgICAgICAgbGV0IHJlc3VsdCA9IEpTT04uc3RyaW5naWZ5KEpTT04ucGFyc2UobXNnUmVzcG9uc2UpKTtcclxuICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICAgIGxldCByZXN1bHQgPSBtc2dSZXNwb25zZTtcclxuICAgICAgICAgICAgaWYgKHRoaXMucGFyYW1Db25maWcuREVCVUdfRkxBRykgY29uc29sZS5sb2coXCJyZXN1bHQ6XCIgKyAgcmVzdWx0KTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGVsc2VcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgZXJyb3IgPSBzdGF0dXNDb2RlO1xyXG4gICAgICAgICAgICBsZXQgbXNnUmVzcG9uc2UgPSByZXMuYm9keS50b1N0cmluZygpO1xyXG4gICAgICAgICAgICBtc2cgPSBtc2dSZXNwb25zZTtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChlcnJvciA9PSAwKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgIGlmICggKGhvc3RNYXBEZWYgIT0gbnVsbCkgJiYgIChob3N0TWFwRGVmLlhTTFRfUkVDRUlWRSAhPSBudWxsKSAmJiAoaG9zdE1hcERlZi5YU0xUX1JFQ0VJVkUgIT0gXCJcIikgKVxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgLy9yZXN1bHQgPSB4c2x0bWFwLm1hcERhdGFPdXQocmVzdWx0LCBob3N0TWFwRGVmLlhTTFRfUkVDRUlWRSk7XHJcbiAgICAgICAgICAgICAgLy9pZiAodGhpcy5wYXJhbUNvbmZpZy5ERUJVR19GTEFHKSBjb25zb2xlLmxvZyhcInJlc3VsdDpcIiwgcmVzdWx0KTtcclxuXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICBsZXQgc3RhdHVzID0gZXh0cmFjdFN0YXR1cyAocnVsZUxvZywgcmVzdWx0KTtcclxuICAgICAgICAgIExvZ1J1bGUocnVsZUxvZywgcmVzdWx0LCBzdGF0dXMgKTtcclxuICAgICAgICAgIGVycm9yID0gc3RhdHVzO1xyXG4gICAgICAgICAgaWYgKHN0YXR1cyAhPSAwKVxyXG4gICAgICAgICAgICBtc2cgPSByZXN1bHQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICovXHJcblxyXG5cclxuXHJcbiAgICAgIH1cclxuICAgICAgZWxzZSB7XHJcbiAgICAgICAgLy9hc3luY1xyXG4gICAgICAgIGZ1bmN0aW9uIGV4dHJhY3RTdGF0dXMocnVsZUxvZzphbnksIG1zZ1Jlc3BvbnNlOmFueSkge1xyXG4gICAgICAgICAgbGV0IHN1Y2Nlc3NNc2cgPSBydWxlTG9nLmhvc3REZWYuU1VDQ0VTU19NU0c7XHJcbiAgICAgICAgICBcclxuICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhcIi0tLS0tLS1tc2dSZXNwb25zZTpcIiwgbXNnUmVzcG9uc2UsIHN1Y2Nlc3NNc2cpO1xyXG4gICAgICAgICAgbGV0IGFycmF5ID0gc3VjY2Vzc01zZy5zcGxpdChcIjpcIik7XHJcbiAgICAgICAgICBsZXQgZmllbGQgPSBhcnJheVswXTtcclxuICAgICAgICAgIGxldCB2YWx1ZSA9IGFycmF5WzFdO1xyXG5cclxuICAgICAgICAgIGxldCBtc2dSZXNwb25zZUFyciA9IG1zZ1Jlc3BvbnNlO1xyXG4gICAgICAgICAgbXNnUmVzcG9uc2UgPSBKU09OLnN0cmluZ2lmeShtc2dSZXNwb25zZUFycik7XHJcbiAgICAgICAgICBcclxuICAgICAgICAgIC8vY29uc29sZS5sb2coXCJmaWVsZDpcIiwgZmllbGQsIFwiIHZhbHVlOlwiLCB2YWx1ZSwgXCIgbXNnUmVzcG9uc2VBcnI6XCIsIG1zZ1Jlc3BvbnNlQXJyKTtcclxuICAgICAgICAgIC8vY29uc29sZS5sb2coXCItLS0tLS0tbXNnUmVzcG9uc2VBcnJbZmllbGRdOlwiLCBtc2dSZXNwb25zZUFycltmaWVsZF0sIHZhbHVlKTtcclxuICAgICAgICAgIGxldCBzdGF0dXMgPSAxO1xyXG4gICAgICAgICAgaWYgKG1zZ1Jlc3BvbnNlQXJyW2ZpZWxkXSA9PSB2YWx1ZSlcclxuICAgICAgICAgICAgc3RhdHVzID0gMDtcclxuICAgICAgICAgIHJldHVybiBzdGF0dXM7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmdW5jdGlvbiBleHRyYWN0UmVzcG9uc2VEYXRhKG1zZ1Jlc3BvbnNlOmFueSwgcmVzcG9uc2VEYXRhSUQ6YW55KSB7XHJcbiAgICAgICAgICBmdW5jdGlvbiBnZXRLZXkoRWxtOmFueSwgZWxtVmFsOmFueSkge1xyXG4gICAgICAgICAgICAgICBsZXQga2V5cyA9IE9iamVjdC5rZXlzKEVsbSk7XHJcbiAgICAgICAgICAgIGxldCBrID0gMDtcclxuICAgICAgICAgICAgICAgbGV0IGVsbU9iajtcclxuICAgICAgICAgICAgd2hpbGUgKGsgPCBrZXlzLmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgIC8vY29uc29sZS5sb2coXCJba2V5c1trXTpcIiwga2V5c1trXSk7XHJcbiAgICAgICAgICAgICAgaWYgKGtleXNba10gPT0gZWxtVmFsKSB7XHJcbiAgICAgICAgICAgICAgICAgIGxldCBlbG1OYW1lID0ga2V5c1trXTtcclxuICAgICAgICAgICAgICAgICAgZWxtT2JqID0gRWxtW2VsbU5hbWVdO1xyXG4gICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhcImVsbU9iajpcIiwgZWxtT2JqKTtcclxuICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBrKys7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIHJldHVybiBlbG1PYmo7XHJcbiAgICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICAgICAgbGV0IGFycmF5ID0gcmVzcG9uc2VEYXRhSUQuc3BsaXQoXCIuXCIpO1xyXG4gICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhcnJheS5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBsZXQgcmV0dXJuS2V5ID0gZ2V0S2V5KG1zZ1Jlc3BvbnNlLCBhcnJheVtpXSlcclxuICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhcInJldHVybktleS5sZW5ndGg6XCIsIHJldHVybktleS5sZW5ndGgpO1xyXG4gICAgICAgICAgICBpZiAocmV0dXJuS2V5Lmxlbmd0aCA9PSAxKVxyXG4gICAgICAgICAgICAgIG1zZ1Jlc3BvbnNlID0gcmV0dXJuS2V5WzBdO1xyXG4gICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgICAgbXNnUmVzcG9uc2UgPSByZXR1cm5LZXk7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAvL2NvbnNvbGUubG9nKFwibXNnUmVzcG9uc2U6XCIsIG1zZ1Jlc3BvbnNlKTtcclxuXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICByZXR1cm4gbXNnUmVzcG9uc2U7XHJcblxyXG5cclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKlxyXG4gICAgICAgIGZ1bmN0aW9uICBoYW5kbGVSZXNwb25zZUVuZChydWxlTG9nLCBtc2dSZXNwb25zZSl7XHJcbiAgICAgICAgICBsZXQgc3RhdHVzID0gZXh0cmFjdFN0YXR1cyAocnVsZUxvZywgbXNnUmVzcG9uc2UpO1xyXG4gICAgICAgICAgdGhpcy5Mb2dSdWxlKHJ1bGVMb2csIG1zZ1Jlc3BvbnNlLCBzdGF0dXMpO1xyXG5cclxuXHJcbiAgICAgICAgICAvL1x0LlJVTEVfSUQgKyBcIixcIiArICBhY3Rpb24uQUNUSU9OX0lEICsgXCIsXCIgKyB1c2Vycy5nZXRVc2VyTmFtZSgpICsgXCIsXCIgICsgZGF0ZUlzbztcclxuICAgICAgICAgIGlmICh0aGlzLnBhcmFtQ29uZmlnLkRFQlVHX0ZMQUcpIGNvbnNvbGUubG9nKFwiLS0tLS0tLWhhbmRsZVJlc3BvbnNlOnN0YXR1czpcIiAsICBzdGF0dXMpO1xyXG4gICAgICAgIH1cclxuICAgICAgICAqL1xyXG4gICAgICAgIGZ1bmN0aW9uIGdldEJvZHkobXNnUmVzcG9uc2U6YW55KSB7XHJcbiAgICAgICAgICAvL2lmICh0aGlzLnBhcmFtQ29uZmlnLkRFQlVHX0ZMQUcpIGNvbnNvbGUubG9nKFwibXNnUmVzcG9uc2U6XCIsIG1zZ1Jlc3BvbnNlKVxyXG4gICAgICAgICAgLy9pZiAodGhpcy5wYXJhbUNvbmZpZy5ERUJVR19GTEFHKSBjb25zb2xlLmxvZyhcIm1zZ1Jlc3BvbnNlOmJvZHlcIiwgbXNnUmVzcG9uc2UuYm9keSlcclxuICAgICAgICAgIHJldHVybiBtc2dSZXNwb25zZS5ib2R5XHJcbiAgICAgICAgfVxyXG4gIC8qXHJcbiAgICAgICAgbGV0IGhhbmRsZVJlc3BvbnNlID0gZnVuY3Rpb24ocmVzcG9uc2UsICBydWxlTG9nKXtcclxuICAgICAgICAgIGxldCBtc2dSZXNwb25zZSA9ICcnXHJcbiAgICAgICAgICByZXNwb25zZS5vbignZGF0YScsIGZ1bmN0aW9uIChjaHVuaykge1xyXG4gICAgICAgICAgbXNnUmVzcG9uc2UgKz0gY2h1bms7XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICAgIHJlc3BvbnNlLm9uKCdlbmQnLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgaGFuZGxlUmVzcG9uc2VFbmQocnVsZUxvZywgbXNnUmVzcG9uc2UpO1xyXG4gICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICB9XHJcbiAgICAgICAgKi9cclxuXHJcbiAgICAgICAgbGV0IGhlYWRlcnMgPSB7XHJcbiAgICAgICAgICBoZWFkZXJzOiBuZXcgSHR0cEhlYWRlcnMoKVxyXG4gICAgICAgICAgICAuc2V0KCdBdXRob3JpemF0aW9uJywgdGhpcy5TdHJBdXRoKVxyXG4gICAgICAgICAgICAuc2V0KCdDb250ZW50LVR5cGUnLCBcImFwcGxpY2F0aW9uL2pzb25cIilcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMucGFyYW1Db25maWcuREVCVUdfRkxBRykgY29uc29sZS5sb2coXCJoZXJlMjpoZWFkZXJzOlwiLCBoZWFkZXJzKTtcclxuICAgICAgICBpZiAoYm9keVRvU2VuZCA9PSBcIlwiKVxyXG4gICAgICAgICAgYm9keVRvU2VuZCA9IG51bGw7XHJcbiAgICAgICAgbGV0IGJvZHlUb1NlbmRLU09OID0gSlNPTi5wYXJzZShib2R5VG9TZW5kKTtcclxuICAgICAgICBpZiAodGhpcy5wYXJhbUNvbmZpZy5ERUJVR19GTEFHKSBjb25zb2xlLmxvZyhcImhlcmUyOmJvZHlUb1NlbmRLU09OOlwiLCBib2R5VG9TZW5kS1NPTik7XHJcblxyXG4gICAgICAgIGxldCB1cmw6IHN0cmluZyA9IGhvc3REZWYuVVJMICsgcGFyYW1ldGVyc1RvU2VuZDtcclxuICAgICAgICBpZiAodGhpcy5wYXJhbUNvbmZpZy5ERUJVR19GTEFHKSBjb25zb2xlLmxvZyhcIi0tLXVybDpcIiwgdXJsKTtcclxuXHJcblxyXG4gICAgICAgIGNvbnN0IHJlcXVlc3QgPSBuZXcgSHR0cFJlcXVlc3QoXHJcbiAgICAgICAgICBvcHRpb25zLm1ldGhvZCwgdXJsLCBib2R5VG9TZW5kS1NPTiwgaGVhZGVycyk7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLnBhcmFtQ29uZmlnLkRFQlVHX0ZMQUcpIGNvbnNvbGUubG9nKFwiLS0tLS0tLS0tLS0tcmVxdWVzdDpcIiwgcmVxdWVzdCwgXCIgYm9keVRvU2VuZEtTT046XCIsIGJvZHlUb1NlbmRLU09OKVxyXG4gICAgICAgIGxldCBtc2dCb2R5QWxsOmFueTtcclxuICAgICAgICB0aGlzLnN5bmNGbGFnID0gMTtcclxuLy9odHRwczovL2RldmVsb3BwYXBlci5jb20vZ2V0dGluZy1zdGFydGVkLXdpdGgtYW5ndWxhci1odHRwLWNsaWVudC9cclxuICAgICAgICB0aGlzLmh0dHAucmVxdWVzdChyZXF1ZXN0KVxyXG4gICAgICAgICAgICAuc3Vic2NyaWJlKFxyXG4gICAgICAgICAgICAgICAgKHJlc3BvbnNlKSA9PiB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMucGFyYW1Db25maWcuREVCVUdfRkxBRykgY29uc29sZS5sb2coXCIgY2FsbCBzdWNjZXNzZnVsIHZhbHVlIHJldHVybmVkIGluIGJvZHlcIixcclxuICAgICAgICAgICAgICAgICAgICAgIHJlc3BvbnNlKTtcclxuICAgICAgICAgICAgICAgICAgICAgIGxldCBtc2dCb2R5ID0gZ2V0Qm9keShyZXNwb25zZSlcclxuICAgICAgICAgICAgICBpZiAodHlwZW9mIG1zZ0JvZHkgIT09IFwidW5kZWZpbmVkXCIpIHtcclxuICAgICAgICAgICAgICAgIG1zZ0JvZHlBbGwgPSBtc2dCb2R5O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5wYXJhbUNvbmZpZy5ERUJVR19GTEFHKSBjb25zb2xlLmxvZyhcIm1zZ0JvZHlBbGw6XCIsIG1zZ0JvZHlBbGwpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgZXJyb3IgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMucGFyYW1Db25maWcuREVCVUdfRkxBRykgY29uc29sZS5sb2coXCJQVVQgY2FsbCBpbiBlcnJvcjpcIiwgZXJyb3IpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgdGhpcy5zeW5jRmxhZyA9IDA7XHJcbiAgICAgICAgICAgICAgdGhpcy5zaG93Tm90aWZpY2F0aW9uKFwiZXJyb3JcIiwgXCJlcnJvciBjYWxsaW5nOiBcIiArIHVybCArIFwiOlwiICsgZXJyb3IuZXJyb3IuZXJyb3IpO1xyXG4gICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5wYXJhbUNvbmZpZy5ERUJVR19GTEFHKSBjb25zb2xlLmxvZyhcIlRoZSAgb2JzZXJ2YWJsZSBpcyBub3cgY29tcGxldGVkOm1zZ0JvZHlBbGw6XCIsIG1zZ0JvZHlBbGwpO1xyXG4gICAgICAgICAgICAgIGlmICh0eXBlb2YgbXNnQm9keUFsbCAhPT0gXCJ1bmRlZmluZWRcIikge1xyXG4gICAgICAgICAgICAgICAgbGV0IHN0YXR1cyA9IGV4dHJhY3RTdGF0dXMocnVsZUxvZywgbXNnQm9keUFsbCk7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5wYXJhbUNvbmZpZy5ERUJVR19GTEFHKSBjb25zb2xlLmxvZyhcIi0tLS0tLS11bGVMb2cucnVsZTpcIiwgcnVsZUxvZy5ydWxlKTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoVHJpZ2dlciA9PSBcIlBPU1RfUVVFUllcIikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGxldCByZXNwb25zZURhdGFJRCA9IHJ1bGVMb2cucnVsZS5SRVNQT05TRV9EQVRBX0lEO1xyXG4gICAgICAgICAgICAgICAgICBpZiAodGhpcy5wYXJhbUNvbmZpZy5ERUJVR19GTEFHKSBjb25zb2xlLmxvZyhcIlRBQlM6cmVzcG9uc2VEYXRhSUQ6XCIsIHJlc3BvbnNlRGF0YUlEKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgIGxldCByZXNwb25zZURhdGEgPSBleHRyYWN0UmVzcG9uc2VEYXRhKG1zZ0JvZHlBbGwsIHJlc3BvbnNlRGF0YUlEKTtcclxuICAgICAgICAgICAgICAgICAgaWYgKHRoaXMucGFyYW1Db25maWcuREVCVUdfRkxBRykgY29uc29sZS5sb2coXCJUQUJTOnJlc3BvbnNlRGF0YTpcIiwgcmVzcG9uc2VEYXRhLCBcInF1ZXJ5RGF0YTpcIiwgcXVlcnlEYXRhKTtcclxuICAgICAgICAgICAgICAgICAgaWYgKHRoaXMucGFyYW1Db25maWcuREVCVUdfRkxBRykgY29uc29sZS5sb2coXCJUQUJTOnJ1bGVMb2cucnVsZS5SRVNQT05TRV9EQVRBX05BTUU6XCIsIHJ1bGVMb2cucnVsZS5SRVNQT05TRV9EQVRBX05BTUUpO1xyXG4gICAgICAgICAgICAgICAgICBpZiAodHlwZW9mIHJlc3BvbnNlRGF0YSAhPT0gXCJ1bmRlZmluZWRcIikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb2JqZWN0W3J1bGVMb2cucnVsZS5SRVNQT05TRV9EQVRBX05BTUVdID0gcmVzcG9uc2VEYXRhO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMucGFyYW1Db25maWcuREVCVUdfRkxBRykgY29uc29sZS5sb2coXCJUQUJTOm9iamVjdC50YWJzQVBJUmVzcG9uc2U6XCIsIG9iamVjdC50YWJzQVBJUmVzcG9uc2UpXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN5bmNGbGFnID0gMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5Mb2dSdWxlKG9iamVjdCwgcnVsZUxvZywgbXNnQm9keUFsbCwgc3RhdHVzKTtcclxuICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAvKlxyXG4gICAgICAgIGxldCByZXFOZXcgPSB0aGlzLmh0dHAucmVxdWVzdChvcHRpb25zLCBmdW5jdGlvbihyZXNwb25zZSl7IGhhbmRsZVJlc3BvbnNlKHJlc3BvbnNlLCAgcnVsZUxvZyk7IH0pO1xyXG4gICAgICAgIHJlcU5ldy5vbignZXJyb3InLCBmdW5jdGlvbihlcnIpIHtcclxuICAgICAgICAgIC8vIEhhbmRsZSBlcnJvclxyXG4gICAgICAgICAgZXJyb3IgPSBlcnI7XHJcbiAgICAgICAgICBtc2cgPSBcIkVycm9yIHNlbmRpbmcgdG8gSG9zdCA6XCIgK3NlbmRUbyA7XHJcbiAgICAgICAgICBpZiAodGhpcy5wYXJhbUNvbmZpZy5ERUJVR19GTEFHKSBjb25zb2xlLmxvZyggbXNnICsgXCIgRXJyb3I6XCIgKyBlcnIgKTtcclxuICAgICAgICAgIHRoaXMuTG9nUnVsZShydWxlTG9nLCBtc2cgKyBcIiBFcnJvcjpcIiArIGVyciwgNDAwICk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLnBhcmFtQ29uZmlnLkRFQlVHX0ZMQUcpIGNvbnNvbGUubG9nKFwiaGVyZTFcIik7XHJcbiAgICAgICAgcmVxTmV3LndyaXRlKGJvZHlUb1NlbmQpO1xyXG4gICAgICAgIGlmICh0aGlzLnBhcmFtQ29uZmlnLkRFQlVHX0ZMQUcpIGNvbnNvbGUubG9nKFwiaGVyZTJcIik7XHJcbiAgICAgICAgcmVxTmV3LmVuZCgpO1xyXG4gICAgICAgIGlmICh0aGlzLnBhcmFtQ29uZmlnLkRFQlVHX0ZMQUcpIGNvbnNvbGUubG9nKFwiaGVyZTNcIik7XHJcbiAgICAgICAgKi9cclxuICAgICAgfVxyXG5cclxuICAgIH1cclxuICAgIGxldCBzdGF0dXNSZWMgPSB7XHJcbiAgICAgIHN0YXR1czogZXJyb3IsXHJcbiAgICAgIG1zZzogbXNnXHJcbiAgICB9O1xyXG5cclxuICAgIC8qbGV0IHN0YXR1cyA9IDE7XHJcbiAgICBpZiAoIXZhbGlkKXtcclxuICAgICAgc3RhdHVzUmVjLnN0YXR1cyA9IDE7XHJcbiAgICAgIHN0YXR1c1JlYy5tc2cgPVxyXG4gICAgfSovXHJcbiAgICBpZiAodGhpcy5wYXJhbUNvbmZpZy5ERUJVR19GTEFHKSBjb25zb2xlLmxvZyhcInZhbGlkOlwiLCB2YWxpZCwgXCIgc3RhdHVzOlwiLCBzdGF0dXNSZWMpO1xyXG5cclxuICAgIHJldHVybiAoc3RhdHVzUmVjKTtcclxuXHJcbiAgfVxyXG4gIHB1YmxpYyBzZW5kVG9TZXJ2ZXIob2JqZWN0OmFueSwgYWN0aW9uc0FycjphbnksIHF1ZXJ5RGF0YTphbnksIHJ1bGU6YW55LCBhY3Rpb246YW55LCBUcmlnZ2VyOmFueSwgaG9zdHNBcnI6YW55LCBob3N0c01hcEFycjphbnkpIHtcclxuICAgIGZ1bmN0aW9uIGdldEVsbVZhbHVlKHBhcmFtRGF0YTphbnksIHF1ZXJ5RGF0YTphbnkpIHtcclxuICAgICAgZnVuY3Rpb24gZ2V0T1JERVJfRklFTERTRGF0YShwYXJhbTphbnksIG9yZGVyRmllbGRzOmFueSkge1xyXG5cdFx0ICAgICAgbGV0IHZhbCA9IFwiXCI7XHJcbiAgICAgICAgaWYgKG9yZGVyRmllbGRzICE9IFwiXCIpIHtcclxuXHRcdCAgICAgICAgbGV0IGFycmF5ID0gcGFyYW0uc3BsaXQoXCIuXCIpO1xyXG4gICAgICAgICAgdmFyIGFyck5hbWUgPSBhcnJheVswXS50cmltKCk7XHJcblx0XHQgICAgICAgIGxldCBmaWVsZE5hbWUgPSBhcnJheVsxXTtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKFwiZ2V0RWxtVmFsdWU6ZmllbGROYW1lOlwiLCBmaWVsZE5hbWUsIFwiIG9yZGVyRmllbGRzOlwiLCBvcmRlckZpZWxkcyk7XHJcbiAgICAgICAgICAgIGlmICh0eXBlb2Ygb3JkZXJGaWVsZHMgIT09IFwidW5kZWZpbmVkXCIpe1xyXG4gICAgICAgICAgICAgIG9yZGVyRmllbGRzID0gSlNPTi5wYXJzZShvcmRlckZpZWxkcyk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiZ2V0RWxtVmFsdWU6b3JkZXJGaWVsZHM6XCIsIG9yZGVyRmllbGRzKTtcclxuICAgICAgICAgICAgdmFyIGZpZWxkc0RhdGEgPSBvcmRlckZpZWxkc1thcnJOYW1lXTtcclxuICAgICAgICAgICAgICB2YWwgPSBmaWVsZHNEYXRhW2ZpZWxkTmFtZV07XHJcbiAgICAgICAgICAgICAgfVxyXG5cdFx0ICAgICAgfVxyXG5cdFx0XHRyZXR1cm4gdmFsO1xyXG5cdFx0fVxyXG4gICAgICBjb25zb2xlLmxvZyhcImdldEVsbVZhbHVlOnBhcmFtRGF0YTpcIiwgcGFyYW1EYXRhKTtcclxuXHRcdFx0bGV0IHZhbCA9IHBhcmFtRGF0YTtcclxuICAgICAgdmFyIG4gPSBwYXJhbURhdGEuc2VhcmNoKFwiOjpcIik7XHJcblx0XHRcdGlmIChuICE9IC0xKVxyXG5cdFx0XHR7XHJcbiAgICAgICAgdmFyIGFycmF5ID0gcGFyYW1EYXRhLnNwbGl0KFwiOjpcIik7XHJcbiAgICAgICAgY29uc29sZS5sb2coIFwiZ2V0RWxtVmFsdWU6OmFycmF5OlwiICxhcnJheSk7XHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhcnJheS5sZW5ndGg7IGkrKylcclxuXHRcdFx0XHR7XHJcbiAgICAgICAgICBpZiggKGkgIT0gMCkgJiYgYXJyYXlbaV0gIT0gXCJcIiApXHJcblx0XHRcdFx0XHR7XHJcbiAgICAgICAgICAgIHZhciBuID0gYXJyYXlbaV0uc2VhcmNoKFwiIFwiKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coIFwiZ2V0RWxtVmFsdWU6Om46XCIgLCBuICwgXCJhcnJheVtpXTpcIiwgYXJyYXlbaV0pO1xyXG5cdFx0XHRcdFx0XHRpZiAobiA9PSAtMSlcclxuXHRcdFx0XHRcdFx0XHRuID0gYXJyYXlbaV0ubGVuZ3RoO1xyXG5cdFx0XHRcdFx0XHRpZiAobiAhPSAtMSlcclxuXHRcdFx0XHRcdFx0e1xyXG4gICAgICAgICAgICAgIHZhciBwYXJhbSA9IGFycmF5W2ldLnNsaWNlKDAsIG4pO1xyXG5cdFx0XHRcdFx0XHRcdHBhcmFtID0gcGFyYW0udHJpbSgpO1xyXG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiZ2V0RWxtVmFsdWU6OnBhcmFtOlwiK3BhcmFtKTtcclxuXHJcbiAgICAgICAgICAgICAgdmFyIG4gPSBwYXJhbS5pbmNsdWRlcyhcIi5cIik7XHJcbiAgICAgICAgICAgICAgY29uc29sZS5sb2coIFwiZ2V0RWxtVmFsdWU6Om46XCIgLCBuKTtcclxuICAgICAgICAgICAgICBpZiAobiA9PSB0cnVlKXtcclxuICAgICAgICAgICAgICAgIHZhbCA9IGdldE9SREVSX0ZJRUxEU0RhdGEocGFyYW0scXVlcnlEYXRhLk9SREVSX0ZJRUxEUyk7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIGVsc2VcclxuXHRcdFx0XHRcdFx0XHR2YWwgPSBxdWVyeURhdGFbcGFyYW1dO1xyXG5cdFx0XHRcdFx0XHRcdGlmICh0eXBlb2YgdmFsID09IFwic3RyaW5nXCIpXHJcblx0XHRcdFx0XHRcdFx0XHR2YWwgPSB2YWwudHJpbSgpO1xyXG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiZ2V0RWxtVmFsdWU6OnBhcmFtOlwiICwgcGFyYW0sIFwiIHZhbDpcIiwgdmFsICk7XHJcblxyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHRcdGlmICh0eXBlb2YgdmFsID09IFwic3RyaW5nXCIpXHJcblx0XHRcdFx0dmFsID0gdmFsLnNwbGl0KFwiJ1wiKS5qb2luKFwiXCIpO1xyXG5cdFx0XHRyZXR1cm4gdmFsO1xyXG5cdFx0fVxyXG4gICAgZnVuY3Rpb24gZ2V0SG9zdChzZW5kVG86YW55LCBob3N0c0FycjphbnkpIHtcclxuICAgICAgbGV0IGkgPSAwO1xyXG4gICAgICB3aGlsZSAoaSA8IGhvc3RzQXJyLmxlbmd0aCkge1xyXG4gICAgICAgIC8vY29uc29sZS5sb2coXCItLS0tLS0tLS0tLWhvc3RzQXJyW2ldLkhPU1RfSUQgOlwiLCBob3N0c0FycltpXS5IT1NUX0lELCBcIiBzZW5kVG86XCIsIHNlbmRUbyk7XHJcblx0XHRcdFx0aWYgKGhvc3RzQXJyW2ldLkhPU1RfSUQgPT0gc2VuZFRvKVxyXG5cdFx0XHRcdFx0cmV0dXJuIGhvc3RzQXJyW2ldO1xyXG5cdFx0XHRcdGkrKztcclxuXHRcdFx0fVxyXG5cdFx0XHRyZXR1cm4gbnVsbDtcclxuXHJcblx0XHR9XHJcbiAgICBmdW5jdGlvbiBnZXRIb3N0TWFwKGhvc3REZWY6YW55LCBtYXBJRDphbnksIGhvc3RzTWFwQXJyOmFueSkge1xyXG4gICAgICBsZXQgaSA9IDA7XHJcbiAgICAgIC8vY29uc29sZS5sb2coXCItLS0tLS0tLS0tLW1hcElEOlwiLCBtYXBJRCwgXCIgaG9zdERlZi5NQVBfSUQ6XCIsIGhvc3REZWYuTUFQX0lEKTtcclxuICAgICAgaWYgKChtYXBJRCAhPSBudWxsKSAmJiAobWFwSUQgIT0gXCJcIikpIHtcclxuICAgICAgICB3aGlsZSAoaSA8IGhvc3RzTWFwQXJyLmxlbmd0aCkge1xyXG4gICAgICAgICAgaWYgKChob3N0c01hcEFycltpXS5IT1NUX0lEID09IGhvc3REZWYuSE9TVF9JRCkgJiYgKG1hcElEID09IGhvc3RzTWFwQXJyW2ldLk1BUF9JRCkpXHJcblx0XHRcdFx0XHRcdHJldHVybiBob3N0c01hcEFycltpXTtcclxuXHRcdFx0XHRcdGkrKztcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdFx0cmV0dXJuIG51bGw7XHJcblxyXG5cdFx0fVxyXG4gICAgICAvLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4gICAgICBpZiAodGhpcy5wYXJhbUNvbmZpZy5ERUJVR19GTEFHKSBjb25zb2xlLmxvZyhcIioqKioqKioqKioqKioqKiphY3Rpb25zQXJyOlwiLCBhY3Rpb25zQXJyKTtcclxuICAgICAgbGV0IHN0YXR1c1JlYztcclxuICAgICAgbGV0IHNlbmRUbyA9IGFjdGlvbnNBcnIuU0VORF9UTztcclxuICAgIGxldCBxcnlQYXJhbTphbnkgPSB7fTtcclxuICAgIGxldCBoZWFkZXJQYXJhbTphbnkgPSB7fTtcclxuICAgIGxldCBib2R5VG9TZW5kQXJyOmFueSA9IFtdO1xyXG4gICAgICBsZXQgYm9keVRvU2VuZCA9IFwiXCI7XHJcbiAgICAgIGxldCBwYXJhbWV0ZXJzVG9TZW5kID0gXCJcIjtcclxuICAgIGxldCBob3N0RGVmID0gZ2V0SG9zdChzZW5kVG8sIGhvc3RzQXJyKTtcclxuICAgIGxldCBob3N0TWFwRGVmID0gZ2V0SG9zdE1hcChob3N0RGVmLCBhY3Rpb24uTUFQX0lELCBob3N0c01hcEFycik7XHJcbiAgICAgIGlmICh0aGlzLnBhcmFtQ29uZmlnLkRFQlVHX0ZMQUcpIGNvbnNvbGUubG9nKFwiaG9zdE1hcERlZjpcIiwgaG9zdE1hcERlZik7XHJcblxyXG4gICAgICBpZiAodGhpcy5wYXJhbUNvbmZpZy5ERUJVR19GTEFHKSBjb25zb2xlLmxvZyhcIioqKipob3N0RGVmLkhFQURFUjpcIiwgaG9zdERlZi5IRUFERVIpO1xyXG5cclxuICAgIGlmICgoaG9zdERlZi5IRUFERVIgIT0gbnVsbCkgJiYgKGhvc3REZWYuSEVBREVSICE9IFwiXCIpKSB7XHJcbiAgICAgICAgbGV0IGFycmF5ID0gaG9zdERlZi5IRUFERVIuc3BsaXQoXCJcXG5cIik7XHJcbiAgICAgICAgaWYgKHRoaXMucGFyYW1Db25maWcuREVCVUdfRkxBRykgY29uc29sZS5sb2coXCJhcnJheTpcIiwgYXJyYXksIFwiIGFycmF5Lmxlbmd0aDpcIiwgYXJyYXkubGVuZ3RoKTtcclxuXHJcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYXJyYXkubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgIGxldCBlbGVtID0gYXJyYXlbaV07XHJcbiAgICAgICAgaWYgKGVsZW0gIT0gXCJcIil7XHJcbiAgICAgICAgICBsZXQgYXJyYXlQYXJhbSA9IGVsZW0uc3BsaXQoXCI6XCIpO1xyXG4gICAgICAgICAgbGV0IHBhcmFtID0gYXJyYXlQYXJhbVswXTtcclxuICAgICAgICAgIHBhcmFtID0gcGFyYW0udHJpbSgpO1xyXG4gICAgICAgICAgbGV0IHBhcmFtRGF0YSA9IGFycmF5UGFyYW1bMV07XHJcbiAgICAgICAgICBwYXJhbURhdGEgPSBwYXJhbURhdGEudHJpbSgpO1xyXG4gICAgICAgICAgaWYgKHRoaXMucGFyYW1Db25maWcuREVCVUdfRkxBRykgY29uc29sZS5sb2coXCJwYXJhbURhdGE6XCIsIHBhcmFtRGF0YSk7XHJcbiAgICAgICAgICBwYXJhbURhdGEgPSBnZXRFbG1WYWx1ZShwYXJhbURhdGEsIHF1ZXJ5RGF0YSk7XHJcbiAgICAgICAgICBpZiAodGhpcy5wYXJhbUNvbmZpZy5ERUJVR19GTEFHKSBjb25zb2xlLmxvZyhcImdldEVsbVZhbHVlOnBvc3QgZ2V0RWxtVmFsdWUgcGFyYW06XCIsIHBhcmFtLCBcIiBwYXJhbURhdGE6XCIsIHBhcmFtRGF0YSk7XHJcbiAgICAgICAgICBoZWFkZXJQYXJhbVtwYXJhbV0gPSBwYXJhbURhdGE7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG5cclxuXHJcbiAgICBpZiAoKGFjdGlvbnNBcnIuQk9EWV9EQVRBICE9IG51bGwpICYmIChhY3Rpb25zQXJyLkJPRFlfREFUQSAhPSBcIlwiKSkge1xyXG4gICAgICAgIGxldCBib2R5RGF0YSA9IGFjdGlvbnNBcnIuQk9EWV9EQVRBO1xyXG4gICAgICBpZiAodGhpcy5wYXJhbUNvbmZpZy5ERUJVR19GTEFHKSBjb25zb2xlLmxvZyhcIjpwb3N0OmJvZHlEYXRhOlwiLCBib2R5RGF0YSk7XHJcbiAgICAgIGxldCBhcnJheSA9IGJvZHlEYXRhLnNwbGl0KFwiXFxuXCIpO1xyXG4gICAgICBpZiAodGhpcy5wYXJhbUNvbmZpZy5ERUJVR19GTEFHKSBjb25zb2xlLmxvZyhcIjpwb3N0OmFycmF5OlwiLCBhcnJheSwgXCIgYXJyYXkubGVuZ3RoOlwiLCBhcnJheS5sZW5ndGgpO1xyXG5cclxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhcnJheS5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgbGV0IGVsZW0gPSBhcnJheVtpXTtcclxuICAgICAgICBpZiAoZWxlbSAhPSBcIlwiKXtcclxuICAgICAgICAgIGxldCBhcnJheVBhcmFtID0gZWxlbS5zcGxpdChcIj1cIik7XHJcbiAgICAgICAgICBsZXQgcGFyYW0gPSBhcnJheVBhcmFtWzBdO1xyXG4gICAgICAgICAgcGFyYW0gPSBwYXJhbS50cmltKCk7XHJcbiAgICAgICAgICBsZXQgcGFyYW1EYXRhID0gYXJyYXlQYXJhbVsxXTtcclxuICAgICAgICAgIHBhcmFtRGF0YSA9IHBhcmFtRGF0YS50cmltKCk7XHJcbiAgICAgICAgICBpZiAodGhpcy5wYXJhbUNvbmZpZy5ERUJVR19GTEFHKSBjb25zb2xlLmxvZyhcImdldEVsbVZhbHVlOnBhcmFtRGF0YTpcIiwgcGFyYW1EYXRhKTtcclxuICAgICAgICAgIHBhcmFtRGF0YSA9IGdldEVsbVZhbHVlKHBhcmFtRGF0YSwgcXVlcnlEYXRhKTtcclxuICAgICAgICAgIGlmICh0aGlzLnBhcmFtQ29uZmlnLkRFQlVHX0ZMQUcpIGNvbnNvbGUubG9nKFwiZ2V0RWxtVmFsdWU6cG9zdDIgcGFyYW06XCIsIHBhcmFtLCBcIiBwYXJhbURhdGE6XCIsIHBhcmFtRGF0YSk7XHJcbiAgICAgICAgICBxcnlQYXJhbVtwYXJhbV0gPSBwYXJhbURhdGE7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgICAgLy9pZiAodGhpcy5wYXJhbUNvbmZpZy5ERUJVR19GTEFHKSBjb25zb2xlLmxvZyhcInFyeVBhcmFtOmhlcmVcIik7XHJcbiAgICAgICAgLy9pZiAodGhpcy5wYXJhbUNvbmZpZy5ERUJVR19GTEFHKSBjb25zb2xlLmxvZyhcInFyeVBhcmFtOlwiLCBxcnlQYXJhbSAsIFwiIHFyeVBhcmFtLmxlbmd0aCA6XCIsIE9iamVjdC5rZXlzKHFyeVBhcmFtKS5sZW5ndGgpO1xyXG4gICAgICAgIGJvZHlUb1NlbmRBcnIucHVzaChxcnlQYXJhbSk7XHJcbiAgICAgICAgLy9pZiAodGhpcy5wYXJhbUNvbmZpZy5ERUJVR19GTEFHKSBjb25zb2xlLmxvZyhcIi0tLWhvc3REZWY6XCIsIGhvc3REZWYpOy8vZnVhZFxyXG5cclxuICAgICAgaWYgKGJvZHlUb1NlbmRBcnIubGVuZ3RoICE9IDApIHtcclxuICAgICAgICAgIC8qaWYgKCAoaG9zdE1hcERlZiAhPSBudWxsKSAmJiAgKGhvc3RNYXBEZWYuWFNMVF9TRU5EICE9IG51bGwpICYmIChob3N0TWFwRGVmLlhTTFRfU0VORCAhPSBcIlwiKSApXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICBib2R5VG9TZW5kID0geHNsdG1hcC5tYXBEYXRhKGJvZHlUb1NlbmRBcnIsIGhvc3RNYXBEZWYuWFNMVF9TRU5EKTtcclxuXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGVsc2VcclxuICAgICAgICAgIHsqL1xyXG4gICAgICAgICAgICBib2R5VG9TZW5kID0gSlNPTi5zdHJpbmdpZnkoYm9keVRvU2VuZEFycilcclxuICAgICAgICAgIC8vfVxyXG4gICAgICAgIH1cclxuICAgICAgLypcclxuICAgICAgbGV0IGhleG91dCA9IGhleGR1bXAoYm9keVRvU2VuZCwgMTYpIDtcclxuICAgICAgaWYgKHRoaXMucGFyYW1Db25maWcuREVCVUdfRkxBRykgY29uc29sZS5sb2coXCJoZXhvdXQ6XCIsaGV4b3V0KTtcclxuICAgICAgKi9cclxuICAgICAgfVxyXG5cclxuICAgIGlmICgoYWN0aW9uc0Fyci5QQVJBTUVURVJfREFUQSAhPSBudWxsKSAmJiAoYWN0aW9uc0Fyci5QQVJBTUVURVJfREFUQSAhPSBcIlwiKSkge1xyXG4gICAgICAgIGxldCBwYXJhbWV0ZXJEYXRhID0gYWN0aW9uc0Fyci5QQVJBTUVURVJfREFUQTtcclxuICAgICAgICBpZiAodGhpcy5wYXJhbUNvbmZpZy5ERUJVR19GTEFHKSBjb25zb2xlLmxvZyhcInBhcmFtZXRlckRhdGE6XCIsIHBhcmFtZXRlckRhdGEpO1xyXG4gICAgICBpZiAodGhpcy5wYXJhbUNvbmZpZy5ERUJVR19GTEFHKSBjb25zb2xlLmxvZyhcInBhcmFtZXRlckRhdGEubGVuZ3RoOlwiLCBwYXJhbWV0ZXJEYXRhLmxlbmd0aCk7XHJcblxyXG5cclxuICAgICAgbGV0IGFycmF5ID0gcGFyYW1ldGVyRGF0YS5zcGxpdChcIlxcblwiKTtcclxuICAgICAgICBpZiAodGhpcy5wYXJhbUNvbmZpZy5ERUJVR19GTEFHKSBjb25zb2xlLmxvZyhcImFycmF5OlwiLCBhcnJheSwgXCIgYXJyYXkubGVuZ3RoOlwiLCBhcnJheS5sZW5ndGgpO1xyXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFycmF5Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICBsZXQgZWxlbSA9IGFycmF5W2ldO1xyXG4gICAgICAgIGlmIChlbGVtICE9IFwiXCIpe1xyXG4gICAgICAgICAgbGV0IGFycmF5UGFyYW0gPSBlbGVtLnNwbGl0KFwiPVwiKTtcclxuICAgICAgICAgIGxldCBwYXJhbSA9IGFycmF5UGFyYW1bMF07XHJcbiAgICAgICAgICBwYXJhbSA9IHBhcmFtLnRyaW0oKTtcclxuICAgICAgICAgIGxldCBwYXJhbURhdGEgPSBhcnJheVBhcmFtWzFdO1xyXG4gICAgICAgICAgcGFyYW1EYXRhID0gcGFyYW1EYXRhLnRyaW0oKTtcclxuICAgICAgICAgIGlmICh0aGlzLnBhcmFtQ29uZmlnLkRFQlVHX0ZMQUcpIGNvbnNvbGUubG9nKFwiZ2V0RWxtVmFsdWU6OnBhcmFtRGF0YTpcIiwgcGFyYW1EYXRhKTtcclxuICAgICAgICAgIHBhcmFtRGF0YSA9IGdldEVsbVZhbHVlKHBhcmFtRGF0YSwgcXVlcnlEYXRhKTtcclxuICAgICAgICAgIGlmICh0aGlzLnBhcmFtQ29uZmlnLkRFQlVHX0ZMQUcpIGNvbnNvbGUubG9nKFwiZ2V0RWxtVmFsdWU6IHBvc3QzOnBhcmFtOlwiLCBwYXJhbSwgXCIgcGFyYW1EYXRhOlwiLCBwYXJhbURhdGEpO1xyXG4gICAgICAgICAgaWYgKHBhcmFtZXRlcnNUb1NlbmQgPT0gXCJcIilcclxuICAgICAgICAgICAgcGFyYW1ldGVyc1RvU2VuZCA9IFwiP1wiICsgcGFyYW0gKyBcIj1cIiArIHBhcmFtRGF0YTtcclxuICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAgcGFyYW1ldGVyc1RvU2VuZCA9IHBhcmFtZXRlcnNUb1NlbmQgKyBcIiZcIiArIHBhcmFtICsgXCI9XCIgKyBwYXJhbURhdGE7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIGlmICh0aGlzLnBhcmFtQ29uZmlnLkRFQlVHX0ZMQUcpIGNvbnNvbGUubG9nKFwiZ2V0RWxtVmFsdWU6IHBhcmFtZXRlcnNUb1NlbmQ6XCIsIHBhcmFtZXRlcnNUb1NlbmQpO1xyXG4gICAgfVxyXG4gICAgbGV0IHBhdGhFeHRyYSA9XCJcIjtcclxuICAgIGlmICggKGFjdGlvbnNBcnIuRVhUUkFfREFUQSAhPSBudWxsKSAmJiAoYWN0aW9uc0Fyci5FWFRSQV9EQVRBICE9IFwiXCIpIClcclxuICAgICAge1xyXG4gICAgICAgIGxldCBwYXJhbWV0ZXJFeHRyYSA9IGFjdGlvbnNBcnIuRVhUUkFfREFUQTtcclxuICAgICAgICBjb25zb2xlLmxvZyhcInBhcmFtZXRlckV4dHJhOlwiLCBwYXJhbWV0ZXJFeHRyYSk7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJwYXJhbWV0ZXJFeHRyYS5sZW5ndGg6XCIscGFyYW1ldGVyRXh0cmEubGVuZ3RoKTtcclxuICAgICAgICBcclxuXHJcbiAgICAgICAgbGV0IGFycmF5ID0gcGFyYW1ldGVyRXh0cmEuc3BsaXQoXCJcXG5cIik7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJhcnJheTpcIiwgYXJyYXksIFwiIGFycmF5Lmxlbmd0aDpcIiwgYXJyYXkubGVuZ3RoKTtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFycmF5Lmxlbmd0aDsgaSsrKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgIGxldCBlbGVtID0gYXJyYXlbaV07XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhcImVsZW06XCIsIGVsZW0pO1xyXG4gICAgICAgICAgbGV0IGFycmF5UGFyYW0gPSBlbGVtLnNwbGl0KFwiPVwiKTtcclxuICAgICAgICAgIGxldCBwYXJhbSA9IGFycmF5UGFyYW1bMF07XHJcbiAgICAgICAgICBwYXJhbSA9IHBhcmFtLnRyaW0oKTtcclxuICAgICAgICAgIGxldCBwYXJhbURhdGEgPSBhcnJheVBhcmFtWzFdO1xyXG4gICAgICAgICAgaWYgKHBhcmFtID09IFwiREJMT0NcIil7XHJcbiAgICAgICAgICAgIHBhdGhFeHRyYSA9IFwiJlwiICsgZWxlbTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJwYXRoRXh0cmE6XCIsIHBhdGhFeHRyYSlcclxuXHJcbiAgICAgICAgICAgIC8vcmVxLl9wYXJzZWRVcmwucGF0aCA9IHJlcS5fcGFyc2VkVXJsLnBhdGggKyBcIiZcIiArIGVsZW07XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIGlmICh0aGlzLnBhcmFtQ29uZmlnLkRFQlVHX0ZMQUcpIGNvbnNvbGUubG9nKFwiYm9keVRvU2VuZDpcIiwgYm9keVRvU2VuZCk7XHJcbiAgICAgIGlmICh0aGlzLnBhcmFtQ29uZmlnLkRFQlVHX0ZMQUcpIGNvbnNvbGUubG9nKFwicGFyYW1ldGVyc1RvU2VuZDpcIiwgcGFyYW1ldGVyc1RvU2VuZCk7XHJcblxyXG4gICAgc3RhdHVzUmVjID0gdGhpcy5wZXJmb3JtSHR0cFBvc3Qob2JqZWN0LCBib2R5VG9TZW5kLCBwYXJhbWV0ZXJzVG9TZW5kLCBzZW5kVG8sIHF1ZXJ5RGF0YSwgcnVsZSwgYWN0aW9uLCBUcmlnZ2VyLCBob3N0RGVmLCBob3N0TWFwRGVmLCBoZWFkZXJQYXJhbSwgcGF0aEV4dHJhKTtcclxuICAgICAgaWYgKHRoaXMucGFyYW1Db25maWcuREVCVUdfRkxBRykgY29uc29sZS5sb2coXCJwb3N0IHBlcmZvcm1IdHRwUG9zdDogc3RhdHVzOlwiLCBzdGF0dXNSZWMpO1xyXG4gICAgICByZXR1cm4gc3RhdHVzUmVjO1xyXG5cclxuXHJcblxyXG5cclxuXHJcbiAgfVxyXG4gIHB1YmxpYyBwZXJmb3JtQWN0aW9uKG9iamVjdDphbnksIHFyeTphbnksIHB0cjphbnksIHF1ZXJ5RGF0YTphbnksIHJ1bGU6YW55LCBydWxlc0RlZjphbnksIFRyaWdnZXI6YW55LCBob3N0c0FycjphbnksIGhvc3RzTWFwQXJyOmFueSwgUlVMRV9JRDphbnkpIHtcclxuICAgIGlmICh0aGlzLnBhcmFtQ29uZmlnLkRFQlVHX0ZMQUcpIGNvbnNvbGUubG9nKFwiLS0tcGVyZm9ybUFjdGlvbjpydWxlc0RlZjpcIiwgcnVsZXNEZWYpO1xyXG4gICAgICBsZXQgc3RhdHVzID0gMDtcclxuICAgIGxldCBzdGF0dXNSZWMgPSB7XHJcbiAgICAgIHN0YXR1czogMCxcclxuICAgICAgbXNnOiBcIlwiXHJcbiAgICAgIH07XHJcblxyXG4gICAgICBsZXQgYWN0aW9uUHRyID0gcnVsZXNEZWYuYWN0aW9uUHRyc0FycltxcnldO1xyXG4gICAgaWYgKHR5cGVvZiBhY3Rpb25QdHIgIT09IFwidW5kZWZpbmVkXCIpIHtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMucGFyYW1Db25maWcuREVCVUdfRkxBRykgY29uc29sZS5sb2coXCJwdHI6XCIsIHB0cik7XHJcbiAgICAgICAgaWYgKHRoaXMucGFyYW1Db25maWcuREVCVUdfRkxBRykgY29uc29sZS5sb2coXCJhY3Rpb25QdHI6XCIsIGFjdGlvblB0cik7XHJcbiAgICAgIGxldCBpID0gcHRyO1xyXG5cclxuICAgICAgICBsZXQgcHRyMSA9IGFjdGlvblB0cltpXTtcclxuICAgICAgbGV0IHB0cjIgPSBhY3Rpb25QdHJbYWN0aW9uUHRyLmxlbmd0aCAtMV07XHJcbiAgICAgIC8vIGlmICh0eXBlb2YgYWN0aW9uUHRyW2kgKyAxXSAhPT0gXCJ1bmRlZmluZWRcIilcclxuICAgICAgLy8gICBwdHIyID0gYWN0aW9uUHRyW2kgKyAxXTtcclxuICAgICAgLy8gZWxzZVxyXG4gICAgICAvLyAgIHB0cjIgPSBydWxlc0RlZi5hY3Rpb25zQXJyLmxlbmd0aFxyXG5cclxuICAgICAgaWYgKHRoaXMucGFyYW1Db25maWcuREVCVUdfRkxBRykgY29uc29sZS5sb2coXCJwdHIxOlwiLCBwdHIxLCBcIiBwdHIyOlwiLCBwdHIyKTtcclxuICAgICAgICBsZXQgaiA9IHB0cjE7XHJcbiAgICAgIC8vbGV0IHJ1bGVJRCA9IHJ1bGVzRGVmLmFjdGlvbnNBcnJbal0uUlVMRV9JRDtcclxuICAgICAgbGV0IHJ1bGVJRCA9IFJVTEVfSUQ7XHJcbiAgICAgIHdoaWxlICgoaiA8PSBwdHIyKSAmJiAoc3RhdHVzID09IDApKSB7XHJcbiAgICAgICAgaWYgKHJ1bGVJRCA9PSBydWxlc0RlZi5hY3Rpb25zQXJyW2pdLlJVTEVfSUQpXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAvL2lmICh0aGlzLnBhcmFtQ29uZmlnLkRFQlVHX0ZMQUcpIGNvbnNvbGUubG9nKFwicnVsZXNEZWYuYWN0aW9uc0FycjpcIixydWxlc0RlZi5hY3Rpb25zQXJyW2pdKTtcclxuICAgICAgICAgIGlmICgocnVsZXNEZWYuYWN0aW9uc0FycltqXS5BQ1RJT05fQ09ERSA9PSBcIlNFTkRcIikgfHwgKHJ1bGVzRGVmLmFjdGlvbnNBcnJbal0uQUNUSU9OX0NPREUgPT0gXCJTRU5EX1dBSVRcIikpIHtcclxuICAgICAgICAgICAgc3RhdHVzUmVjID0gdGhpcy5zZW5kVG9TZXJ2ZXIob2JqZWN0LCBydWxlc0RlZi5hY3Rpb25zQXJyW2pdLCBxdWVyeURhdGEsIHJ1bGUsIHJ1bGVzRGVmLmFjdGlvbnNBcnJbal0sIFRyaWdnZXIsIGhvc3RzQXJyLCBob3N0c01hcEFycik7XHJcbiAgICAgICAgICAgIHN0YXR1cyA9IHN0YXR1c1JlYy5zdGF0dXM7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBlbHNlIGlmICggcnVsZXNEZWYuYWN0aW9uc0FycltqXS5BQ1RJT05fQ09ERSA9PSBcIkVSUk9SXCIgKSB7XHJcbiAgICAgICAgICAgIGxldCBzdGF0dXNSZWMgPXtcclxuICAgICAgICAgICAgICBzdGF0dXMgOiAtMSxcclxuICAgICAgICAgICAgICBtc2cgOiBydWxlc0RlZi5hY3Rpb25zQXJyW2pdLkJPRFlfREFUQVxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICByZXR1cm4gc3RhdHVzUmVjO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAgIGorKztcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIHN0YXR1c1JlYztcclxuXHJcbiAgfVxyXG5cclxuICBwdWJsaWMgY2hlY2tSdWxlc0J5VHJpZ2dlcihvYmplY3Q6YW55LCBydWxlc0RlZjphbnksIHF1ZXJ5RGF0YTphbnksIFRyaWdnZXI6YW55LCByb3V0aW5lX25hbWU6YW55LCBob3N0c0FycjphbnksIGhvc3RzTWFwQXJyOmFueSkge1xyXG4gICAgaWYgKHRoaXMucGFyYW1Db25maWcuREVCVUdfRkxBRykgY29uc29sZS5sb2coXCJjaGVja1J1bGVzQnlUcmlnZ2VyOnJ1bGVzRGVmOlwiLCBydWxlc0RlZiwgXCIgcXVlcnlEYXRhOlwiLCBxdWVyeURhdGEsIFwiVHJpZ2dlcjpcIiwgVHJpZ2dlcik7XHJcbiAgICBmdW5jdGlvbiBnZXRGaWVsZERhdGEocnVsZTphbnksIHF1ZXJ5RGF0YTphbnkpXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgbGV0IGZpZWxkRGF0YSA9IFwiXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICBsZXQgYXJyYXkgPSBydWxlLkZJRUxELnNwbGl0IChcIi5cIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImFycmF5OlwiLGFycmF5KVxyXG4gICAgICAgICAgICAgICAgICAgICAgaWYgKGFycmF5Lmxlbmd0aCA+IDEpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgb3JkZXJGaWVsZHMgPSBxdWVyeURhdGFbXCJPUkRFUl9GSUVMRFNcIl07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2coXCJvcmRlckZpZWxkczpcIixvcmRlckZpZWxkcylcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBvcmRlckZpZWxkcyAhPT0gXCJ1bmRlZmluZWRcIil7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG9yZGVyRmllbGRzICE9IFwiXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBmaWVsZHNEYXRhID0gSlNPTi5wYXJzZShvcmRlckZpZWxkcyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKFwiZmllbGRzRGF0YTpcIixmaWVsZHNEYXRhKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGtleXMgPSBPYmplY3Qua2V5cyhmaWVsZHNEYXRhKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwia2V5czpcIixrZXlzKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgaiA9MDsgajwga2V5cy5sZW5ndGg7aisrKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJhZGRPcmRlckZpZWxkcyBrZXk6XCIsIGtleXNbal0gKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGtleXNbal0gPT0gYXJyYXlbMF0pe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBvYmpEYXRhID0gZmllbGRzRGF0YVtrZXlzW2pdXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKFwib2JqRGF0YTpcIiwgb2JqRGF0YSApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgKG9iakRhdGEubGVuZ3RoKSA9PSBcInVuZGVmaW5lZFwiKSAgLy8gaXQgaXMgYSBmb3JtIChvYmplY3QpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpZWxkRGF0YSA9IG9iakRhdGFbYXJyYXlbMV1dO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2UgeyAvLyBpdCBpcyBhIGdyaWQgKGFycmF5KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiAob2JqRGF0YVswXSkgIT0gXCJ1bmRlZmluZWRcIikgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpZWxkRGF0YSA9IG9iakRhdGFbMF1bYXJyYXlbMV1dO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZmllbGREYXRhID0gcXVlcnlEYXRhW3J1bGUuRklFTERdIDtcclxuICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBmaWVsZERhdGE7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICBmdW5jdGlvbiBjaGVja1J1bGUocnVsZTphbnksIHF1ZXJ5RGF0YTphbnkpe1xyXG4gICAgICBsZXQgcnVsZU1hdGNoID0gZmFsc2U7XHJcbiAgICAgIC8vaWYgKG9iamVjdC5wYXJhbUNvbmZpZy5ERUJVR19GTEFHKSBcclxuICAgICAgICBjb25zb2xlLmxvZyhcImNoZWNrUnVsZSBydWxlOlwiLCBydWxlLCBcIiBxdWVyeURhdGE6XCIsIHF1ZXJ5RGF0YSk7XHJcbiAgICAgIC8vbGV0IGZpZWxkRGF0YSA9IHF1ZXJ5RGF0YVtydWxlLkZJRUxEXTtcclxuICAgICAgbGV0IGZpZWxkRGF0YSA9IGdldEZpZWxkRGF0YShydWxlLCBxdWVyeURhdGEpO1xyXG5cclxuICAgICAgc3dpdGNoIChydWxlLk9QRVJBVElPTikge1xyXG4gICAgICAgIGNhc2UgXCI9XCI6XHJcbiAgICAgICAgICBpZiAoZmllbGREYXRhID09IHJ1bGUuRklFTERfVkFMVUUpIHtcclxuICAgICAgICAgIHJ1bGVNYXRjaCA9IHRydWU7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSBcIjxcIjpcclxuICAgICAgICAgIGlmIChmaWVsZERhdGEgPCBydWxlLkZJRUxEX1ZBTFVFKSB7XHJcbiAgICAgICAgICBydWxlTWF0Y2ggPSB0cnVlO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgXCI8PVwiOlxyXG4gICAgICAgICAgaWYgKGZpZWxkRGF0YSA8PSBydWxlLkZJRUxEX1ZBTFVFKSB7XHJcbiAgICAgICAgICBydWxlTWF0Y2ggPSB0cnVlO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgXCI+XCI6XHJcbiAgICAgICAgICBpZiAoZmllbGREYXRhID4gcnVsZS5GSUVMRF9WQUxVRSkge1xyXG4gICAgICAgICAgcnVsZU1hdGNoID0gdHJ1ZTtcclxuICAgICAgICAgIH1cclxuICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIFwiPj1cIjpcclxuICAgICAgICAgIGlmIChmaWVsZERhdGEgPj0gcnVsZS5GSUVMRF9WQUxVRSkge1xyXG4gICAgICAgICAgcnVsZU1hdGNoID0gdHJ1ZTtcclxuICAgICAgICAgIH1cclxuICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIFwiPD5cIjpcclxuICAgICAgICAgIGlmIChmaWVsZERhdGEgIT0gcnVsZS5GSUVMRF9WQUxVRSkge1xyXG4gICAgICAgICAgcnVsZU1hdGNoID0gdHJ1ZTtcclxuICAgICAgICAgIH1cclxuICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIFwiSU5TVFJcIjpcclxuICAgICAgICAgIGlmIChydWxlLkZJRUxEX1ZBTFVFLnNlYXJjaChmaWVsZERhdGEpICE9IC0xKSB7XHJcbiAgICAgICAgICBydWxlTWF0Y2ggPSB0cnVlO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgcnVsZU1hdGNoID0gZmFsc2U7XHJcbiAgICAgIH1cclxuICAgICAgY29uc29sZS5sb2coXCJ0ZXN0MzpydWxlTWF0Y2g6XCIsIHJ1bGVNYXRjaCwgXCIgZmllbGREYXRhOlwiLCBmaWVsZERhdGEsIFwiIE9QRVJBVElPTjpcIiwgcnVsZS5PUEVSQVRJT04sIFwiIEZJRUxEX1ZBTFVFOlwiLCBydWxlLkZJRUxEX1ZBTFVFKTtcclxuICAgICAgcmV0dXJuIHJ1bGVNYXRjaDtcclxuXHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBjaGVja1NhbWVUZW1wbGF0ZShydWxlUHRyc0FyciwgcXVlcnlEYXRhKSB7XHJcbiAgICAgIC8vY29uc29sZS5sb2coXCJjaGVja2luZyB0ZW1wbGF0ZSBydWxlUHRyc0FycjpcIixydWxlUHRyc0FyciwgXCIgcXVlcnlEYXRhOlwiLCBxdWVyeURhdGEpO1xyXG4gICAgICB2YXIgc2FtZVRlbXAgPSBmYWxzZTtcclxuICAgICAgY29uc29sZS5sb2coXCJydWxlUHRyc0Fyci5URU1QTEFURV9OQU1FOlwiLCBydWxlUHRyc0Fyci5URU1QTEFURV9OQU1FLCBcInF1ZXJ5RGF0YS5URU1QTEFURV9OQU1FOlwiLCBxdWVyeURhdGEuVEVNUExBVEVfTkFNRSxcIiBydWxlUHRyc0Fyci5TRVFVRU5DRV9OQU1FOlwiLCBydWxlUHRyc0Fyci5TRVFVRU5DRV9OQU1FLFwiIHF1ZXJ5RGF0YS5TRVFVRU5DRV9OQU1FOlwiLCBxdWVyeURhdGEuU0VRVUVOQ0VfTkFNRSwgcXVlcnlEYXRhKVxyXG5cclxuICAgICAgaWYgKCAocnVsZVB0cnNBcnIuVEVNUExBVEVfTkFNRSAhPSBcIlwiKSApe1xyXG4gICAgICAgIGlmIChydWxlUHRyc0Fyci5URU1QTEFURV9OQU1FID09IHF1ZXJ5RGF0YS5URU1QTEFURV9OQU1FKSB7XHJcblxyXG4gICAgICAgICAgaWYgKChydWxlUHRyc0Fyci5TRVFVRU5DRV9OQU1FICE9IFwiXCIpKSAge1xyXG4gICAgICAgICAgICBpZiAocnVsZVB0cnNBcnIuU0VRVUVOQ0VfTkFNRSA9PSBxdWVyeURhdGEuU0VRVUVOQ0VfTkFNRSkge1xyXG4gICAgICAgICAgICAgIHNhbWVUZW1wID0gdHJ1ZTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBzYW1lVGVtcCA9IHRydWU7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICBlbHNlIHtcclxuICAgICAgICBzYW1lVGVtcCA9IHRydWU7XHJcbiAgICAgIFxyXG4gICAgICB9XHJcbiAgICAgIC8vY29uc29sZS5sb2coXCJzYW1lVGVtcDpcIiwgc2FtZVRlbXApO1xyXG4gICAgICByZXR1cm4gc2FtZVRlbXA7XHJcbiAgICB9XHJcbiAgICBcclxuXHJcbiAgICBsZXQgc3RhdHVzID0gMDtcclxuICAgIGxldCBzdGF0dXNSZWMgPSB7XHJcbiAgICAgIHN0YXR1czogMCxcclxuICAgICAgbXNnOiBcIlwiXHJcbiAgICB9O1xyXG5cclxuICAgIGxldCBxcnkgPSBxdWVyeURhdGEuX1FVRVJZO1xyXG4gICAgaWYgKHRoaXMucGFyYW1Db25maWcuREVCVUdfRkxBRykgY29uc29sZS5sb2coXCJfUVVFUlk6XCIsIHF1ZXJ5RGF0YS5fUVVFUlksIFwiIHJ1bGVzRGVmLnJ1bGVQdHJzQXJyOlwiLCBydWxlc0RlZi5ydWxlUHRyc0Fycik7XHJcbiAgICBpZiAodGhpcy5wYXJhbUNvbmZpZy5ERUJVR19GTEFHKSBjb25zb2xlLmxvZyhcImNoZWNraW5nIHJ1bGVzRGVmLnJ1bGVQdHJzQXJyOlwiLCBydWxlc0RlZi5ydWxlUHRyc0Fycik7XHJcbiAgICBsZXQgcnVsZVB0ciA9IHJ1bGVzRGVmLnJ1bGVQdHJzQXJyW3FyeV07XHJcbiAgICBpZiAodGhpcy5wYXJhbUNvbmZpZy5ERUJVR19GTEFHKSBjb25zb2xlLmxvZyhcInJ1bGVQdHI6XCIsIHJ1bGVQdHIpO1xyXG4gICAgaWYgKHRoaXMucGFyYW1Db25maWcuREVCVUdfRkxBRykgY29uc29sZS5sb2coXCJxcnk6XCIsIHFyeSwgXCIgcnVsZXNEZWYucnVsZVB0cnNBcnI6XCIsIHJ1bGVzRGVmLnJ1bGVQdHJzQXJyLCBcIiBydWxlUHRyOlwiLCBydWxlUHRyKTtcclxuXHJcbiAgICBpZiAodHlwZW9mIHJ1bGVQdHIgIT09IFwidW5kZWZpbmVkXCIpIHtcclxuICAgICAgLy9sZXQgYWN0aW9uUHRyID0gcnVsZXNEZWYucnVsZVB0cnNBcnJbcXJ5XTtcclxuICAgICAgLy9pZiAodHlwZW9mIGFjdGlvblB0ciAhPT0gXCJ1bmRlZmluZWRcIilcclxuICAgICAge1xyXG4gICAgICAgIGxldCByZXN1bHQgPSBmYWxzZTtcclxuICAgICAgICBsZXQgaSA9IDA7XHJcblxyXG4gICAgICAgIC8vd2hpbGUgKCAoaTxydWxlUHRyLmxlbmd0aCkgJiYgKHN0YXR1cyA9PSAwKSApXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgdmFyIHB0cjEgPSBydWxlUHRyW2ldO1xyXG4gICAgICAgICAgICAgIHZhciBwdHIyID0gcnVsZVB0cltydWxlUHRyLmxlbmd0aCAtMV07XHJcbiAgICAgICAgICAgICAgLy8gaWYgKHR5cGVvZiBydWxlUHRyW2krMV0gIT09IFwidW5kZWZpbmVkXCIpXHJcbiAgICAgICAgICAgICAgLy8gICAgIHZhciBwdHIyID0gcnVsZVB0cltpKzFdO1xyXG4gICAgICAgICAgICAgIC8vIGVsc2VcclxuICAgICAgICAgICAgICAvLyAgICAgLy92YXIgcHRyMiA9IHJ1bGVzRGVmLnJ1bGVzQXJyLmxlbmd0aFxyXG4gICAgICAgICAgICAvLyAgICAgdmFyIHB0cjIgPSBwdHIxXHJcblxyXG4gICAgICAgICAgICBpZiAodGhpcy5wYXJhbUNvbmZpZy5ERUJVR19GTEFHKSBjb25zb2xlLmxvZyhcIkl0ZW06cHRyMTpcIixwdHIxLCBcIiBwdHIyOlwiLCBwdHIyKTtcclxuICAgICAgICAgICAgICB2YXIgaiA9IHB0cjE7XHJcbiAgICAgICAgICAgICAgdmFyIHJ1bGVNYXRjaCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgIHZhciBGT1VORF9SVUxFX0lEPVwiXCI7XHJcbiAgICAgICAgICAgICAgd2hpbGUgKCBqIDw9IHB0cjIpXHJcbiAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMucGFyYW1Db25maWcuREVCVUdfRkxBRykgY29uc29sZS5sb2coXCJydWxlc0RlZi5ydWxlc0FycjpcIiwgcnVsZXNEZWYucnVsZXNBcnJbal0uUlVMRV9JRCwgXCIgaXRlbTpcIiwgcnVsZXNEZWYucnVsZXNBcnJbal0uSVRFTSk7XHJcbiAgICAgICAgICAgICAgICAgIGxldCBzYW1lVGVtcGxhdGUgPSBjaGVja1NhbWVUZW1wbGF0ZShydWxlc0RlZi5ydWxlc0FycltqXSxxdWVyeURhdGEgKTtcclxuICAgICAgICAgICAgICAgICAgaWYgKHRoaXMucGFyYW1Db25maWcuREVCVUdfRkxBRykgY29uc29sZS5sb2coXCJydWxlc0RlZi5ydWxlc0FycjpcIiwgcnVsZXNEZWYucnVsZXNBcnJbal0uUlVMRV9JRCwgXCIgaXRlbTpcIiwgcnVsZXNEZWYucnVsZXNBcnJbal0uSVRFTSwgXCIgc2FtZVRlbXBsYXRlOlwiLCBzYW1lVGVtcGxhdGUpOyAgXHJcbiAgICAgICAgICAgICAgICAgIGlmIChzYW1lVGVtcGxhdGUpe1xyXG4gICAgICAgICAgICAgICAgICAgcnVsZU1hdGNoID0gY2hlY2tSdWxlKHJ1bGVzRGVmLnJ1bGVzQXJyW2pdLCBxdWVyeURhdGEpO1xyXG4gICAgICAgICAgICAgICAgICBpZiAocnVsZU1hdGNoID09IGZhbHNlKVxyXG4gICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICAgICAgICAgICAgRk9VTkRfUlVMRV9JRCA9IHJ1bGVzRGVmLnJ1bGVzQXJyW2pdLlJVTEVfSUQ7XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgIGorKztcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJjaGVja1J1bGVzQnlUcmlnZ2VyOkNvbmRpdGlvbnMgcnVsZU1hdGNoOlwiLCBydWxlTWF0Y2gsIFwiIGZvciBydWxlOlwiLCBGT1VORF9SVUxFX0lEKTtcclxuICAgICAgICAgICAgICBpZiAocnVsZU1hdGNoID09IHRydWUpXHJcbiAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAvL3N0YXR1c1JlYyA9IHBlcmZvcm1BY3Rpb24oZGIscmVxLCBxcnksIGksIHF1ZXJ5RGF0YSwgcnVsZXNEZWYucnVsZXNBcnJbcHRyMV0scnVsZXNEZWYsIFRyaWdnZXIgKTtcclxuICAgICAgICAgICAgICAgICAgc3RhdHVzUmVjID0gdGhpcy5wZXJmb3JtQWN0aW9uKCAgb2JqZWN0LCBxcnksIGksIHF1ZXJ5RGF0YSwgcnVsZXNEZWYucnVsZXNBcnJbcHRyMV0scnVsZXNEZWYsIFRyaWdnZXIgLGhvc3RzQXJyLCBob3N0c01hcEFyciwgRk9VTkRfUlVMRV9JRCk7XHJcbiAgICAgICAgICAgICAgICAgIHN0YXR1cyA9IHN0YXR1c1JlYy5zdGF0dXM7XHJcblxyXG4gICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgLy9pZiAocnVsZU1hdGNoID09IGZhbHNlKVxyXG4gICAgICAgICAgICAgIC8vICBicmVhaztcclxuICAgICAgICAgICAgICBpKys7XHJcbiAgICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcblxyXG4gICAgfVxyXG4gICAgcmV0dXJuIHN0YXR1c1JlYztcclxuICB9XHJcbiAgcHVibGljIGNoZWNrSGFzUnVsZXMgKHJ1bGVzRGVmOmFueSwgcXJ5OmFueSAsVHJpZ2dlcjphbnkpXHJcbiAge1xyXG4gICAgbGV0IGZvdW5kID0gZmFsc2U7XHJcbiAgICAvL2NvbnNvbGUubG9nKFwiY2hlY2tIYXNSdWxlczpxcnk6XCIscXJ5LCAgVHJpZ2dlcilcclxuICAgICAgdmFyIGFjdGlvblB0ciA9IHJ1bGVzRGVmLmFjdGlvblB0cnNBcnJbcXJ5XTtcclxuICAgICAgaWYgKHR5cGVvZiBhY3Rpb25QdHIgIT09IFwidW5kZWZpbmVkXCIpXHJcbiAgICAgIHtcclxuICAgICAgICAvL2NvbnNvbGUubG9nKFwiY2hlY2tIYXNSdWxlczpxcnk6XCIsVHJpZ2dlciwgcXJ5LCAgYWN0aW9uUHRyKVxyXG4gICAgICAgIGZvdW5kID0gdHJ1ZTtcclxuICAgICAgfVxyXG4gICAgIHJldHVybiBmb3VuZDtcclxuXHJcblxyXG4gIH1cclxuXHJcbiAgcHVibGljIGNoZWNrUnVsZXMob2JqZWN0OmFueSwgcnVsZXNEZWY6YW55LCBhY3R1YWxSZXN1bHQ6YW55LCBUcmlnZ2VyOmFueSkge1xyXG4gICAgdmFyIHN0YXR1c1JlYzphbnkgPSB7fTtcclxuICAgIGlmKHRoaXMucGFyYW1Db25maWcuaXNDaGVja1J1bGVzID09IGZhbHNlKVxyXG4gICAgICByZXR1cm4gc3RhdHVzUmVjO1xyXG5cclxuICAgIC8vcmV0dXJuO1xyXG5cclxuXHJcbiAgICBpZiAodGhpcy5wYXJhbUNvbmZpZy5ERUJVR19GTEFHKSBjb25zb2xlLmxvZyhcImNoZWNrUnVsZXM6XCIsIFRyaWdnZXIsIFwiIHJvdXRpbmVfbmFtZTpcIiwgdGhpcy5yb3V0aW5lX25hbWUsIFwiIGFjdHVhbFJlc3VsdDpcIiwgYWN0dWFsUmVzdWx0KVxyXG5cclxuICAgIGlmIChUcmlnZ2VyID09IFwiUE9TVF9RVUVSWVwiKSB7XHJcbiAgICAgIGlmICh0eXBlb2YgYWN0dWFsUmVzdWx0LmRhdGFbMF0gIT09IFwidW5kZWZpbmVkXCIpIHtcclxuICAgICAgICBsZXQgdHJhbnNEYXRhID0gYWN0dWFsUmVzdWx0LmRhdGFbMF0uZGF0YTtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRyYW5zRGF0YS5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgaWYgKHRoaXMucGFyYW1Db25maWcuREVCVUdfRkxBRykgY29uc29sZS5sb2coXCJjaGVja1J1bGVzOnRyYW5zRGF0YVtpXTpcIiwgdHJhbnNEYXRhW2ldLCBpKTtcclxuICAgICAgICAgIGlmICh0aGlzLnBhcmFtQ29uZmlnLkRFQlVHX0ZMQUcpIGNvbnNvbGUubG9nKFwiY2hlY2tSdWxlczphY3R1YWxSZXN1bHQuZGF0YVswXS5xdWVyeTpcIiwgYWN0dWFsUmVzdWx0LmRhdGFbMF0ucXVlcnkpXHJcbiAgICAgICAgICBpZiAodGhpcy5wYXJhbUNvbmZpZy5ERUJVR19GTEFHKSBjb25zb2xlLmxvZyhcImNoZWNrUnVsZXM6YWN0dWFsUmVzdWx0LmRhdGFbMF0gSEYgcGxlYXNlXCIsIGFjdHVhbFJlc3VsdC5kYXRhWzBdLmRhdGEpO1xyXG4gICAgICAgICAgbGV0IHF1ZXJ5RGF0YSA9IHRyYW5zRGF0YVtpXTtcclxuICAgICAgICAgIFxyXG4gICAgICAgICAgcXVlcnlEYXRhW1wiX1FVRVJZXCJdID0gYWN0dWFsUmVzdWx0LmRhdGFbMF0ucXVlcnk7XHJcbiAgICAgICAgICAvLyAgICAgICBpZiAodGhpcy5wYXJhbUNvbmZpZy5ERUJVR19GTEFHKSBjb25zb2xlLmxvZyhcInF1ZXJ5RGF0YTpcIiwgcXVlcnlEYXRhKVxyXG4gICAgICAgICAgbGV0IGZvdW5kUnVsZSA9IHRoaXMuY2hlY2tIYXNSdWxlcyhydWxlc0RlZiwgcXVlcnlEYXRhWydfUVVFUlknXSwgXCJQT1NUX1FVRVJZXCIpO1xyXG4gICAgICAgICAgaWYgKGZvdW5kUnVsZSl7XHJcbiAgICAgICAgICAgICAgc3RhdHVzUmVjID0gdGhpcy5jaGVja1J1bGVzQnlUcmlnZ2VyKG9iamVjdCwgcnVsZXNEZWYsIHF1ZXJ5RGF0YSwgVHJpZ2dlciwgdGhpcy5yb3V0aW5lX25hbWUsIHRoaXMuaG9zdHNBcnIsIHRoaXMuaG9zdHNNYXBBcnIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICAgIC8vY29uc29sZS5sb2coXCJzdGF0dXNSZWM6UE9TVF9RVUVSWTpcIiwgc3RhdHVzUmVjKTtcclxuICAgICAgICAgIGlmIChzdGF0dXNSZWNbJ3N0YXR1cyddICA9PSAtMSl7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGVsc2UgaWYgKFRyaWdnZXIgPT0gXCJQUkVfUVVFUllcIikge1xyXG5cclxuICAgICAgaWYgKHR5cGVvZiBhY3R1YWxSZXN1bHQgIT09IFwidW5kZWZpbmVkXCIpIHtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFjdHVhbFJlc3VsdC5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgaWYgKHRoaXMucGFyYW1Db25maWcuREVCVUdfRkxBRykgY29uc29sZS5sb2coXCJhY3R1YWxSZXN1bHRbaV06XCIsIGFjdHVhbFJlc3VsdFtpXSlcclxuICAgICAgICAgIGxldCBxdWVyeURhdGEgPSBhY3R1YWxSZXN1bHRbaV07XHJcbiAgICAgICAgICBpZiAodGhpcy5wYXJhbUNvbmZpZy5ERUJVR19GTEFHKSBjb25zb2xlLmxvZyhcInF1ZXJ5RGF0YTpcIiwgcXVlcnlEYXRhKVxyXG4gICAgICAgICAgICAgbGV0IGZvdW5kUnVsZSA9IHRoaXMuY2hlY2tIYXNSdWxlcyhydWxlc0RlZiwgcXVlcnlEYXRhWydfUVVFUlknXSwgXCJQUkVfUVVFUllcIik7XHJcblx0XHRcdCAgICAgICBpZiAoZm91bmRSdWxlKXtcclxuICAgICAgICAgICAgICAgIHN0YXR1c1JlYyA9IHRoaXMuY2hlY2tSdWxlc0J5VHJpZ2dlcihvYmplY3QsIHJ1bGVzRGVmLCBxdWVyeURhdGEsIFRyaWdnZXIsIHRoaXMucm91dGluZV9uYW1lLCB0aGlzLmhvc3RzQXJyLCB0aGlzLmhvc3RzTWFwQXJyKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgaWYgKHRoaXMucGFyYW1Db25maWcuREVCVUdfRkxBRykgY29uc29sZS5sb2coXCJjaGVja1J1bGVzOkRvbmVcIiwgVHJpZ2dlciwgXCIgcm91dGluZV9uYW1lOlwiLCB0aGlzLnJvdXRpbmVfbmFtZSwgXCIgYWN0dWFsUmVzdWx0OlwiLCBhY3R1YWxSZXN1bHQpO1xyXG4gICAgcmV0dXJuIHN0YXR1c1JlYztcclxuXHJcbiAgfVxyXG4gIC8vLy8vLy8vLy8vLy8vXHJcbiAgcHVibGljIHN0b3JlQWN0aW9uc1B0cnMoYWN0aW9uczphbnksIHJ1bGVzRGVmOmFueSkge1xyXG4gIGxldCBjdXJyZW50UVVFUllfREVGID0gXCJcIjtcclxuICBsZXQgY3VycmVudFJVTEVfSUQgPSBcIlwiO1xyXG4gICAgbGV0IGFjdGlvblB0cnM6YW55ID0gW107XHJcblxyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhY3Rpb25zLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIGlmICgoY3VycmVudFFVRVJZX0RFRiAhPSBhY3Rpb25zW2ldLlFVRVJZX0RFRikgJiYgKGN1cnJlbnRSVUxFX0lEICE9IGFjdGlvbnNbaV0uUlVMRV9JRCkpIHtcclxuICAgICAgICBpZiAoaSA9PSAwKVxyXG4gICAgICAgIGFjdGlvblB0cnMucHVzaChpKTtcclxuICAgICAgICBpZiAoY3VycmVudFFVRVJZX0RFRiAhPSBcIlwiKSB7XHJcbiAgICAgICAgcnVsZXNEZWYuYWN0aW9uUHRyc0FycltjdXJyZW50UVVFUllfREVGXSA9IGFjdGlvblB0cnM7XHJcbiAgICAgICAgYWN0aW9uUHRycyA9IFtdO1xyXG4gICAgICAgIGFjdGlvblB0cnMucHVzaChpKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgICBjdXJyZW50UVVFUllfREVGID0gYWN0aW9uc1tpXS5RVUVSWV9ERUY7XHJcbiAgICAgICAgY3VycmVudFJVTEVfSUQgPSBhY3Rpb25zW2ldLlJVTEVfSUQ7XHJcbiAgICAgIC8vaWYgKHRoaXMucGFyYW1Db25maWcuREVCVUdfRkxBRykgY29uc29sZS5sb2coXCJydWxlUHRyczE6XCIscnVsZVB0cnMpO1xyXG5cclxuICAgIH1cclxuICAgICAgZWxzZSBpZiAoKGN1cnJlbnRRVUVSWV9ERUYgPT0gYWN0aW9uc1tpXS5RVUVSWV9ERUYpICYmIChjdXJyZW50UlVMRV9JRCAhPSBhY3Rpb25zW2ldLlJVTEVfSUQpKSB7XHJcbiAgICAgICAgY3VycmVudFJVTEVfSUQgPSBhY3Rpb25zW2ldLlJVTEVfSUQ7XHJcbiAgICAgIGFjdGlvblB0cnMucHVzaChpKTtcclxuXHJcbiAgICB9XHJcbiAgICAgIGVsc2UgaWYgKChjdXJyZW50UVVFUllfREVGID09IGFjdGlvbnNbaV0uUVVFUllfREVGKSAmJiAoY3VycmVudFJVTEVfSUQgPT0gYWN0aW9uc1tpXS5SVUxFX0lEKSkge1xyXG4gICAgICAgIGFjdGlvblB0cnMucHVzaChpKTtcclxuICAgICAgICBjdXJyZW50UlVMRV9JRCA9IGFjdGlvbnNbaV0uUlVMRV9JRDtcclxuICAgIFxyXG4gICAgXHJcbiAgICAgIH1cclxuICAgICAgaWYgKHRoaXMucGFyYW1Db25maWcuREVCVUdfRkxBRykgY29uc29sZS5sb2coXCJhY3Rpb25QdHJzMjpcIiwgYWN0aW9uUHRycyk7XHJcbiAgfVxyXG4gIC8vYWN0aW9uUHRycy5wdXNoKGkpO1xyXG4gIHJ1bGVzRGVmLmFjdGlvblB0cnNBcnJbY3VycmVudFFVRVJZX0RFRl0gPSBhY3Rpb25QdHJzO1xyXG4gICAgaWYgKHRoaXMucGFyYW1Db25maWcuREVCVUdfRkxBRykgY29uc29sZS5sb2coXCJydWxlc0RlZi5hY3Rpb25QdHJzQXJyOlwiLCBydWxlc0RlZi5hY3Rpb25QdHJzQXJyKTtcclxufVxyXG5cclxuXHJcblxyXG4gIHB1YmxpYyBzdG9yZVJ1bGVzUHRycyhydWxlczphbnksIHJ1bGVzRGVmOmFueSkge1xyXG4gICAgICBsZXQgY3VycmVudFFVRVJZX0RFRiA9IFwiXCI7XHJcbiAgICAgIGxldCBjdXJyZW50UlVMRV9JRCA9IFwiXCI7XHJcbiAgICBsZXQgcnVsZVB0cnM6YW55ID0gW107XHJcblxyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBydWxlcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIGlmICh0aGlzLnBhcmFtQ29uZmlnLkRFQlVHX0ZMQUcpIGNvbnNvbGUubG9nKHJ1bGVzW2ldLlFVRVJZX0RFRiArIFwiIDogXCIgKyBydWxlc1tpXS5SVUxFX0lEICsgXCIgICAgICAgICAgXCIgKyBjdXJyZW50UVVFUllfREVGICsgXCIgOiBcIiArIGN1cnJlbnRSVUxFX0lEKTtcclxuICAgICAgaWYgKChjdXJyZW50UVVFUllfREVGICE9IHJ1bGVzW2ldLlFVRVJZX0RFRikgJiYgKGN1cnJlbnRSVUxFX0lEICE9IHJ1bGVzW2ldLlJVTEVfSUQpKSB7XHJcbiAgICAgICAgICBpZiAodGhpcy5wYXJhbUNvbmZpZy5ERUJVR19GTEFHKSBjb25zb2xlLmxvZyhcIiBub3QgZXF1YWxcIik7XHJcbiAgICAgICAgaWYgKGkgPT0gMClcclxuICAgICAgICAgICAgcnVsZVB0cnMucHVzaChpKTtcclxuICAgICAgICBpZiAoY3VycmVudFFVRVJZX0RFRiAhPSBcIlwiKSB7XHJcbiAgICAgICAgICBpZiAodGhpcy5wYXJhbUNvbmZpZy5ERUJVR19GTEFHKSBjb25zb2xlLmxvZyhcIi0tc3RvcmluZyBydWxlUHRyczI6XCIsIHJ1bGVQdHJzKTtcclxuICAgICAgICAgICAgcnVsZXNEZWYucnVsZVB0cnNBcnJbY3VycmVudFFVRVJZX0RFRl0gPSBydWxlUHRycztcclxuICAgICAgICAgICAgcnVsZVB0cnMgPSBbXTtcclxuICAgICAgICAgICAgcnVsZVB0cnMucHVzaChpKTtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgY3VycmVudFFVRVJZX0RFRiA9IHJ1bGVzW2ldLlFVRVJZX0RFRjtcclxuICAgICAgICBjdXJyZW50UlVMRV9JRCA9IHJ1bGVzW2ldLlJVTEVfSUQ7XHJcbiAgICAgICAgaWYgKHRoaXMucGFyYW1Db25maWcuREVCVUdfRkxBRykgY29uc29sZS5sb2coXCJydWxlUHRyczE6XCIscnVsZVB0cnMpO1xyXG5cclxuICAgICAgICB9XHJcbiAgICAgIGVsc2UgaWYgKChjdXJyZW50UVVFUllfREVGID09IHJ1bGVzW2ldLlFVRVJZX0RFRikgJiYgKGN1cnJlbnRSVUxFX0lEICE9IHJ1bGVzW2ldLlJVTEVfSUQpKSB7XHJcbiAgICAgICAgICBpZiAodGhpcy5wYXJhbUNvbmZpZy5ERUJVR19GTEFHKSBjb25zb2xlLmxvZyhcIiBub3QgZXF1YWwyXCIpO1xyXG4gICAgICAgICAgcnVsZVB0cnMucHVzaChpKTtcclxuICAgICAgICBjdXJyZW50UlVMRV9JRCA9IHJ1bGVzW2ldLlJVTEVfSUQ7XHJcbiAgICAgICAgaWYgKHRoaXMucGFyYW1Db25maWcuREVCVUdfRkxBRykgY29uc29sZS5sb2coXCJydWxlUHRyczI6XCIsIHJ1bGVQdHJzKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAoICggY3VycmVudFFVRVJZX0RFRiA9PSBydWxlc1tpXS5RVUVSWV9ERUYgKSAmJiAoIGN1cnJlbnRSVUxFX0lEID09IHJ1bGVzW2ldLlJVTEVfSUQgKSApXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhcIiBlcXVhbDNcIik7XHJcbiAgICAgICAgICAgIHJ1bGVQdHJzLnB1c2goaSk7XHJcbiAgICAgICAgICAgIGN1cnJlbnRSVUxFX0lEID0gcnVsZXNbaV0uUlVMRV9JRCA7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhcInJ1bGVQdHJzMzpcIixydWxlUHRycyk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgIGlmICh0aGlzLnBhcmFtQ29uZmlnLkRFQlVHX0ZMQUcpIGNvbnNvbGUubG9nKFwicnVsZVB0cnM0OlwiLCBydWxlUHRycyk7XHJcbiAgICAgIH1cclxuICAgICAgLy9ydWxlUHRycy5wdXNoKGkpO1xyXG4gICAgaWYgKHRoaXMucGFyYW1Db25maWcuREVCVUdfRkxBRykgY29uc29sZS5sb2coXCJydWxlUHRyczU6XCIscnVsZVB0cnMpO1xyXG4gICAgICBydWxlc0RlZi5ydWxlUHRyc0FycltjdXJyZW50UVVFUllfREVGXSA9IHJ1bGVQdHJzO1xyXG4gICAgaWYgKHRoaXMucGFyYW1Db25maWcuREVCVUdfRkxBRykgY29uc29sZS5sb2coXCJ0ZXN0MzpydWxlc0RlZi5ydWxlUHRyc0FycjpcIiwgcnVsZXNEZWYucnVsZVB0cnNBcnIpO1xyXG4gICAgfVxyXG5cclxuLy8vLy8vLy8vLy8vLy9cclxuICBwdWJsaWMgbG9hZFJ1bGVzKG9iamVjdDphbnkpIHtcclxuXHJcbiAgICBvYmplY3QuQm9keSA9IFtdO1xyXG4gICAgbGV0IFBhZ2UgPSBcIlwiO1xyXG4gICAgbGV0IE5ld1ZhbDphbnkgPSB7fTtcclxuICAgIE5ld1ZhbFtcIl9RVUVSWVwiXSA9IFwiR0VUX0FETV9SVUxFX0RFRl9SVUxFX0lURU1cIjtcclxuICAgIE5ld1ZhbFtcIlJVTEVfVFJJR0dFUlwiXSA9IFwiUE9TVF9RVUVSWVwiO1xyXG4gICAgaWYgKHRoaXMucGFyYW1Db25maWcuREVCVUdfRkxBRykgY29uc29sZS5sb2coXCJ0ZXN0Ok5ld1ZhbDpcIiwgTmV3VmFsKVxyXG4gICAgaWYgKHRoaXMucGFyYW1Db25maWcuREVCVUdfRkxBRykgY29uc29sZS5sb2coXCJ0ZXN0Om9iamVjdC5Cb2R5OlwiLCBvYmplY3QuQm9keSlcclxuICAgIG9iamVjdC5hZGRUb0JvZHkoTmV3VmFsKTtcclxuXHJcbiAgICBpZiAodGhpcy5wYXJhbUNvbmZpZy5ERUJVR19GTEFHKSBjb25zb2xlLmxvZyhcInRlc3Q6b2JqZWN0LkJvZHk6XCIsIG9iamVjdC5Cb2R5KVxyXG4gICAgTmV3VmFsID0ge307XHJcbiAgICBOZXdWYWxbXCJfUVVFUllcIl0gPSBcIkdFVF9BRE1fUlVMRV9ERUZfUlVMRV9BQ1RJT05cIjtcclxuICAgIE5ld1ZhbFtcIlJVTEVfVFJJR0dFUlwiXSA9IFwiUE9TVF9RVUVSWVwiO1xyXG4gICAgb2JqZWN0LmFkZFRvQm9keShOZXdWYWwpO1xyXG5cclxuICAgIE5ld1ZhbCA9IHt9O1xyXG4gICAgTmV3VmFsW1wiX1FVRVJZXCJdID0gXCJHRVRfQURNX1JVTEVfSE9TVFwiO1xyXG4gICAgTmV3VmFsW1wiSE9TVF9JRFwiXSA9IFwiJVwiO1xyXG4gICAgb2JqZWN0LmFkZFRvQm9keShOZXdWYWwpO1xyXG5cclxuICAgIE5ld1ZhbCA9IHt9O1xyXG4gICAgTmV3VmFsW1wiX1FVRVJZXCJdID0gXCJHRVRfQURNX1JVTEVfSE9TVF9NQVBcIjtcclxuICAgIE5ld1ZhbFtcIkhPU1RfSURcIl0gPSBcIiVcIjtcclxuICAgIE5ld1ZhbFtcIk1BUF9JRFwiXSA9IFwiJVwiO1xyXG4gICAgb2JqZWN0LmFkZFRvQm9keShOZXdWYWwpO1xyXG5cclxuICAgIHRoaXMucG9zdChvYmplY3QsIFBhZ2UsIG9iamVjdC5Cb2R5KS5zdWJzY3JpYmUocmVzdWx0ID0+IHtcclxuICAgICAgaWYgKHRoaXMucGFyYW1Db25maWcuREVCVUdfRkxBRykgY29uc29sZS5sb2coXCJ0ZXN0OnJlc3VsdC5kYXRhOlwiLCByZXN1bHQuZGF0YSk7XHJcblxyXG5cclxuICAgICAgdGhpcy5ydWxlc1Bvc3RRdWVyeURlZi5ydWxlUHRyc0FyciA9IHt9O1xyXG4gICAgICB0aGlzLnJ1bGVzUG9zdFF1ZXJ5RGVmLmFjdGlvblB0cnNBcnIgPSBbXTtcclxuXHJcbiAgICAgIHRoaXMuc3RvcmVSdWxlc1B0cnMocmVzdWx0LmRhdGFbMF0uZGF0YSwgdGhpcy5ydWxlc1Bvc3RRdWVyeURlZilcclxuICAgICAgdGhpcy5ydWxlc1Bvc3RRdWVyeURlZi5ydWxlc0FyciA9IHJlc3VsdC5kYXRhWzBdLmRhdGE7XHJcblxyXG4gICAgICB0aGlzLnN0b3JlQWN0aW9uc1B0cnMocmVzdWx0LmRhdGFbMV0uZGF0YSwgdGhpcy5ydWxlc1Bvc3RRdWVyeURlZik7XHJcbiAgICAgIHRoaXMucnVsZXNQb3N0UXVlcnlEZWYuYWN0aW9uc0FyciA9IHJlc3VsdC5kYXRhWzFdLmRhdGE7XHJcbiAgICAgIGlmICh0aGlzLnBhcmFtQ29uZmlnLkRFQlVHX0ZMQUcpIGNvbnNvbGUubG9nKFwidGVzdDp0aGlzLnJ1bGVzUG9zdFF1ZXJ5RGVmXCIsIHRoaXMucnVsZXNQb3N0UXVlcnlEZWYpXHJcblxyXG4gICAgICB0aGlzLmhvc3RzQXJyID0gcmVzdWx0LmRhdGFbMl0uZGF0YTtcclxuICAgICAgdGhpcy5ob3N0c01hcEFyciA9IHJlc3VsdC5kYXRhWzNdLmRhdGE7XHJcblxyXG4gICAgICAvLy8vLy8vLy8vLy8vL1xyXG4gICAgICBvYmplY3QuQm9keSA9IFtdO1xyXG4gICAgfSxcclxuICAgIGVyciA9PiB7XHJcbiAgICAgICAgb2JqZWN0LkJvZHkgPSBbXTtcclxuICAgICAgICB0aGlzLnNob3dOb3RpZmljYXRpb24oXCJlcnJvclwiLCBcImVycm9yOlwiICsgZXJyLm1lc3NhZ2UpO1xyXG4gICAgfSk7XHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy8vLy8vLy8vLy8vLy9cclxuICAgIG9iamVjdC5Cb2R5ID0gW107XHJcbiAgICBQYWdlID0gXCJcIjtcclxuTmV3VmFsID0ge307XHJcbk5ld1ZhbFtcIl9RVUVSWVwiXSA9IFwiR0VUX0FETV9SVUxFX0RFRl9SVUxFX0lURU1cIjtcclxuTmV3VmFsW1wiUlVMRV9UUklHR0VSXCJdID0gXCJQUkVfUVVFUllcIjtcclxuaWYgKHRoaXMucGFyYW1Db25maWcuREVCVUdfRkxBRykgY29uc29sZS5sb2coXCJ0ZXN0Ok5ld1ZhbDpcIiwgTmV3VmFsKVxyXG5pZiAodGhpcy5wYXJhbUNvbmZpZy5ERUJVR19GTEFHKSBjb25zb2xlLmxvZyhcInRlc3Q6b2JqZWN0LkJvZHk6XCIsIG9iamVjdC5Cb2R5KVxyXG5vYmplY3QuYWRkVG9Cb2R5KE5ld1ZhbCk7XHJcblxyXG5pZiAodGhpcy5wYXJhbUNvbmZpZy5ERUJVR19GTEFHKSBjb25zb2xlLmxvZyhcInRlc3Q6b2JqZWN0LkJvZHk6XCIsIG9iamVjdC5Cb2R5KVxyXG5OZXdWYWwgPSB7fTtcclxuTmV3VmFsW1wiX1FVRVJZXCJdID0gXCJHRVRfQURNX1JVTEVfREVGX1JVTEVfQUNUSU9OXCI7XHJcbk5ld1ZhbFtcIlJVTEVfVFJJR0dFUlwiXSA9IFwiUFJFX1FVRVJZXCI7XHJcbm9iamVjdC5hZGRUb0JvZHkoTmV3VmFsKTtcclxuXHJcblxyXG5cclxuICAgIHRoaXMucG9zdChvYmplY3QsIFBhZ2UsIG9iamVjdC5Cb2R5KS5zdWJzY3JpYmUocmVzdWx0ID0+IHtcclxuICBpZiAodGhpcy5wYXJhbUNvbmZpZy5ERUJVR19GTEFHKSBjb25zb2xlLmxvZyhcInRlc3Q6cmVzdWx0LmRhdGE6XCIsIHJlc3VsdC5kYXRhKTtcclxuXHJcbi8vLy8vLy8vLy8vLy8vXHJcbiAgICAgIHRoaXMucnVsZXNQcmVRdWVyeURlZi5ydWxlUHRyc0FyciA9IHt9O1xyXG4gICAgICB0aGlzLnJ1bGVzUHJlUXVlcnlEZWYuYWN0aW9uUHRyc0FyciA9IHt9O1xyXG5cclxuICB0aGlzLnN0b3JlUnVsZXNQdHJzKHJlc3VsdC5kYXRhWzBdLmRhdGEsIHRoaXMucnVsZXNQcmVRdWVyeURlZilcclxuICB0aGlzLnJ1bGVzUHJlUXVlcnlEZWYucnVsZXNBcnIgPSByZXN1bHQuZGF0YVswXS5kYXRhO1xyXG5cclxuICAgICAgdGhpcy5zdG9yZUFjdGlvbnNQdHJzKHJlc3VsdC5kYXRhWzFdLmRhdGEsIHRoaXMucnVsZXNQcmVRdWVyeURlZik7XHJcbiAgdGhpcy5ydWxlc1ByZVF1ZXJ5RGVmLmFjdGlvbnNBcnIgPSByZXN1bHQuZGF0YVsxXS5kYXRhO1xyXG4gIGlmICh0aGlzLnBhcmFtQ29uZmlnLkRFQlVHX0ZMQUcpIGNvbnNvbGUubG9nKFwidGVzdDp0aGlzLnJ1bGVzUHJlUXVlcnlEZWZcIiwgdGhpcy5ydWxlc1ByZVF1ZXJ5RGVmKVxyXG5cclxuXHJcbiAgLy8vLy8vLy8vLy8vLy9cclxuICAgICAgb2JqZWN0LkJvZHkgPSBbXTtcclxufSxcclxuZXJyID0+IHtcclxuICAgICAgICBvYmplY3QuQm9keSA9IFtdO1xyXG4gICAgICAgIHRoaXMuc2hvd05vdGlmaWNhdGlvbihcImVycm9yXCIsIFwiZXJyb3I6XCIgKyBlcnIubWVzc2FnZSk7XHJcbn0pO1xyXG5cclxuICB9XHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuICBwdWJsaWMgbGtwQ2FjaGU9W107XHJcbiAgcHVibGljIGZldGNoTG9va3VwcyAoIG9iamVjdCxsb29rdXBBcnJEZWYpe1xyXG4gICAgbGV0IEJvZHkgPVtdO1xyXG4gICAgZm9yIChsZXQgaT0wOyBpPCBsb29rdXBBcnJEZWYubGVuZ3RoOyBpKyspe1xyXG4gICAgICBsZXQgTmV3VmFsID0ge307XHJcbiAgICAgIE5ld1ZhbFtcIl9RVUVSWVwiXSA9IFwiR0VUX1NUTVRcIjtcclxuICAgICAgTmV3VmFsW1wiX1NUTVRcIl0gID0gIGxvb2t1cEFyckRlZltpXS5zdGF0bWVudDtcclxuICAgICAgaWYgKGxvb2t1cEFyckRlZltpXS5zdGF0bWVudCAhPSBcIltdXCIpXHJcbiAgICAgICAgQm9keSA9IHRoaXMuYWRkVG9Cb2R5KE5ld1ZhbCxCb2R5KTtcclxuICAgIH1cclxuXHJcbiAgICBsZXQgUGFnZSA9ICBcIlwiO1xyXG4gICAgdGhpcy5wb3N0KG9iamVjdCxQYWdlLEJvZHkpLnN1YnNjcmliZShyZXN1bHQgPT4ge1xyXG4gICAgICBmb3IgKGxldCBpPTA7IGk8IGxvb2t1cEFyckRlZi5sZW5ndGg7IGkrKyl7XHJcbiAgICAgICAgLy9pZiAodGhpcy5wYXJhbUNvbmZpZy5ERUJVR19GTEFHKSBjb25zb2xlLmxvZyhcInJlc3VsdC5kYXRhW2ldLmRhdGE6XCIscmVzdWx0LmRhdGFbaV0uZGF0YVswXSlcclxuICAgICAgICBpZiAgKHR5cGVvZiByZXN1bHQuZGF0YVtpXSAhPT0gXCJ1bmRlZmluZWRcIil7XHJcbiAgICAgICAgICBpZiAgKHR5cGVvZiByZXN1bHQuZGF0YVtpXS5kYXRhWzBdICE9PSBcInVuZGVmaW5lZFwiKXtcclxuICAgICAgICAgICAgLy9hZGQgZW1wdHkgcmVjb3JkIGF0IGJlZ2luaW5nIG9mIHRoZSBhcnJheSBmb3IgdGhlIExPViBmb3IgaW5zZXJ0IG5ldyByZWNvcmQgaW4gYSBncmlkIHdvcmsgcHJvcGVybHlcclxuICAgICAgICAgICAgbGV0IGtleXMgPSBPYmplY3Qua2V5cyhyZXN1bHQuZGF0YVtpXS5kYXRhWzBdKTtcclxuICAgICAgICAgICAgbGV0IGVtcHR5UmVjID17fTtcclxuXHJcbiAgICAgICAgICAgIGxldCBoYXNTcGFjZT1mYWxzZTtcclxuICAgICAgICAgICAgLy8gbGV0IGNvZGVUeHQgPSBrZXlzWzBdO1xyXG4gICAgICAgICAgICAvLyBsZXQgZGF0YVNldCA9IE9iamVjdC5hc3NpZ24oW10sIHJlc3VsdC5kYXRhW2ldLmRhdGEpO1xyXG5cclxuICAgICAgICAgICAgLy8gZGF0YVNldC5maW5kKGVsZW0gPT57XHJcbiAgICAgICAgICAgIC8vICAgLy9jb25zb2xlLmxvZyhcImVsbTpcIixlbGVtKTtcclxuICAgICAgICAgICAgLy8gICBpZiAoZWxlbVtjb2RlVHh0XS50cmltKCkgPT0gXCJcIil7XHJcbiAgICAgICAgICAgIC8vICAgICBoYXNTcGFjZSA9IHRydWU7XHJcbiAgICAgICAgICAgIC8vICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgLy8gICB9XHJcbiAgICAgICAgICAgIC8vIH0pO1xyXG5cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGlmICggIWhhc1NwYWNlKXtcclxuICAgICAgICAgICAgZm9yIChsZXQgayA9MDsgayA8IGtleXMubGVuZ3RoOyBrKyspe1xyXG4gICAgICAgICAgICAgICAgLy9pZiAodGhpcy5wYXJhbUNvbmZpZy5ERUJVR19GTEFHKSBjb25zb2xlLmxvZyhcIltrZXlzW2tdOlwiLCBrZXlzW2tdKTtcclxuICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2coXCJba2V5c1trXTpcIiwga2V5c1trXSk7XHJcbiAgICAgICAgICAgICAgICBlbXB0eVJlY1trZXlzW2tdXSA9IFwiXCI7XHJcbiAgICAgICAgICAgICAgICAvL29iamVjdC5wcmltYXJLZXlSZWFkT25seUFycltrZXlzW2tdXSA9IHZhbHVlO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLy9pZiAodGhpcy5wYXJhbUNvbmZpZy5ERUJVR19GTEFHKSBjb25zb2xlLmxvZyhcImVtcHR5UmVjOlwiLGVtcHR5UmVjKVxyXG4gICAgICAgICAgICAvL2NvbnNvbGUubG9nKFwiZW1wdHlSZWM6XCIsZW1wdHlSZWMpO1xyXG4gICAgICAgICAgICByZXN1bHQuZGF0YVtpXS5kYXRhLnNwbGljZSgwLDAsZW1wdHlSZWMpOyAvL0Z1YWQ6YWRkIGVtcHR5IHJlY29yZCBhdCBiZWdpbmluZyBvZiB0aGUgYXJyYXkgZm9yIHRoZSBMT1YgZm9yIGluc2VydCBuZXcgcmVjb3JkIGluIGEgZ3JpZCB3b3JrIHByb3Blcmx5XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICAgIG9iamVjdFtsb29rdXBBcnJEZWZbaV0ubGtwQXJyTmFtZV0gPSByZXN1bHQuZGF0YVtpXS5kYXRhO1xyXG4gICAgICAgIC8vaWYgKHRoaXMucGFyYW1Db25maWcuREVCVUdfRkxBRykgY29uc29sZS5sb2coXCJsb29rdXBBcnJEZWZbaV0ubGtwQXJyTmFtZTpcIiwgbG9va3VwQXJyRGVmW2ldLmxrcEFyck5hbWUsIG9iamVjdFtsb29rdXBBcnJEZWZbaV0ubGtwQXJyTmFtZV0pXHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgIH1cclxuICAgICAgaWYgICh0eXBlb2Ygb2JqZWN0LmZldGNoTG9va3Vwc0NhbGxCYWNrICE9PSBcInVuZGVmaW5lZFwiKVxyXG4gICAgICAgIG9iamVjdC5mZXRjaExvb2t1cHNDYWxsQmFjaygpO1xyXG5cclxuICAgIH0sXHJcbiAgICBlcnIgPT4ge1xyXG4gICAgICAvL2FsZXJ0ICgnZXJyb3I6JyArIGVyci5tZXNzYWdlKTtcclxuICAgICAgdGhpcy5zaG93RXJyb3JNc2cob2JqZWN0LCBlcnIpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG4gIFxyXG4gICAgcHVibGljIHBlcmZvcm1Qb3N0KG9iamVjdDphbnksIGZuOmFueSkge1xyXG4gICAgbGV0IFBhZ2UgPSBcIlwiO1xyXG4gICAgdGhpcy5wb3N0KG9iamVjdCwgUGFnZSwgb2JqZWN0LkJvZHkpLnN1YnNjcmliZShyZXN1bHQgPT4ge1xyXG4gICAgICBmbihvYmplY3QsIHJlc3VsdCk7XHJcbiAgICAgIG9iamVjdC5Cb2R5ID0gW107XHJcbiAgICB9LFxyXG4gICAgZXJyID0+IHtcclxuICAgICAgLy9hbGVydCAoJ2Vycm9yOicgKyBlcnIubWVzc2FnZSk7XHJcbiAgICAgIHRoaXMuc2hvd0Vycm9yTXNnKG9iamVjdCwgZXJyKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcblxyXG4gIHB1YmxpYyBzZXRDb21wb25lbnRDb25maWcoY29tcG9uZW50Q29uZmlnOmFueSwgc2NyZWVuQ29uZmlnOmFueSkge1xyXG4gICAgbGV0IGtleXMgPSBPYmplY3Qua2V5cyhjb21wb25lbnRDb25maWcpO1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBrZXlzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgLy9pZiAodGhpcy5wYXJhbUNvbmZpZy5ERUJVR19GTEFHKSBjb25zb2xlLmxvZygga2V5c1tpXSArIFwiIFwiICsgY29tcG9uZW50Q29uZmlnWyBrZXlzW2ldIF0gKSA7XHJcbiAgICAgIGlmIChjb21wb25lbnRDb25maWdba2V5c1tpXV0gIT0gbnVsbCkge1xyXG4gICAgICAgIHNjcmVlbkNvbmZpZ1trZXlzW2ldXSA9IGNvbXBvbmVudENvbmZpZ1trZXlzW2ldXTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIC8vaWYgKHRoaXMucGFyYW1Db25maWcuREVCVUdfRkxBRykgY29uc29sZS5sb2coc2NyZWVuQ29uZmlnKTtcclxuICAgIHJldHVybiBzY3JlZW5Db25maWc7XHJcbiAgfVxyXG4gIHB1YmxpYyBnZXRSb3V0aW5lQXV0aChtZW51OmFueSwgcm91dGluZV9uYW1lOmFueSkge1xyXG4gICAgbGV0IGkgPSAwO1xyXG4gICAgbGV0IHJvdXRpbmVBdXRoO1xyXG4gICAgbGV0IGZvdW5kID0gZmFsc2U7XHJcbiAgICBpZiAodHlwZW9mIG1lbnUgIT09IFwidW5kZWZpbmVkXCIpIHtcclxuICAgICAgd2hpbGUgKGkgPCBtZW51Lmxlbmd0aCkge1xyXG4gICAgICAgIGxldCBqID0gMDtcclxuICAgICAgICB3aGlsZSAoaiA8IG1lbnVbaV0uaXRlbXMubGVuZ3RoKSB7XHJcbiAgICAgICAgICBpZiAobWVudVtpXS5pdGVtc1tqXS5jaG9pY2UgPT0gcm91dGluZV9uYW1lKSB7XHJcbiAgICAgICAgICAgIHJvdXRpbmVBdXRoID0gbWVudVtpXS5pdGVtc1tqXTtcclxuICAgICAgICAgICAgZm91bmQgPSB0cnVlO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGorKztcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGZvdW5kKVxyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgaSsrO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy5wYXJhbUNvbmZpZy5ERUJVR19GTEFHKSBjb25zb2xlLmxvZyhcInJvdXRpbmVfbmFtZTpcIiwgcm91dGluZV9uYW1lLCBcInJvdXRpbmVBdXRoOlwiLCByb3V0aW5lQXV0aCwgXCIgbWVudTpcIiwgbWVudSk7XHJcblxyXG5cclxuICAgIHJldHVybiAocm91dGluZUF1dGgpO1xyXG4gIH1cclxuICBwdWJsaWMgYWN0T25QYXJhbUNvbmZpZyhvYmplY3Q6YW55LCByb3V0aW5lX25hbWU6YW55KSB7XHJcbiAgICBpZiAodGhpcy5wYXJhbUNvbmZpZy5ERUJVR19GTEFHKSBjb25zb2xlLmxvZyhcInJvdXRpbmVfbmFtZTpcIiArIHJvdXRpbmVfbmFtZSlcclxuICAgIGxldCBwYXJhbUNvbmZpZyA9IGdldFBhcmFtQ29uZmlnKCk7XHJcbiAgICBsZXQgbWVudSA9IHBhcmFtQ29uZmlnLm1lbnU7XHJcbiAgICBsZXQgcm91dGluZUF1dGggPSB0aGlzLmdldFJvdXRpbmVBdXRoKG1lbnUsIHJvdXRpbmVfbmFtZSk7XHJcblxyXG4gICAgaWYgKHR5cGVvZiByb3V0aW5lQXV0aCAhPT0gXCJ1bmRlZmluZWRcIikge1xyXG4gICAgICBvYmplY3QudGl0bGUgPSByb3V0aW5lQXV0aC50ZXh0ICsgXCIgKFwiICsgcm91dGluZUF1dGgucm91dGluZVZlciArIFwiKVwiO1xyXG4gICAgICBvYmplY3Qucm91dGluZUF1dGggPSByb3V0aW5lQXV0aDtcclxuICAgICAgdGhpcy5yb3V0aW5lX25hbWUgPSByb3V0aW5lX25hbWU7XHJcbiAgICAgIGlmICh0aGlzLnBhcmFtQ29uZmlnLkRFQlVHX0ZMQUcpIGNvbnNvbGUubG9nKFwib2JqZWN0LnRpdGxlOlwiICsgb2JqZWN0LnRpdGxlKVxyXG4gICAgfVxyXG4gICAgZWxzZVxyXG4gICAgICBpZiAocm91dGluZV9uYW1lID09IFwiRFNQRUtZQ1wiKSB7XHJcbiAgICAgICAgdGhpcy5yb3V0aW5lX25hbWUgPSByb3V0aW5lX25hbWU7XHJcbiAgICAgIH1cclxuICAgIGlmICh0aGlzLnBhcmFtQ29uZmlnLkRFQlVHX0ZMQUcpIGNvbnNvbGUubG9nKFwidGhpcy5yb3V0aW5lX25hbWU6XCIgKyB0aGlzLnJvdXRpbmVfbmFtZSlcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzaG93RXJyb3JNc2cob2JqZWN0OmFueSwgc2VydmVyRXJyb3I6YW55KSB7XHJcbiAgICBsZXQgZXJyb3JNc2cgPSBcIlwiO1xyXG4gICAgaWYgKHR5cGVvZiBzZXJ2ZXJFcnJvci5lcnJvciA9PSBcInVuZGVmaW5lZFwiKSB7XHJcbiAgICAgICBlcnJvck1zZyA9IHRoaXMuc3RhbmRhcmRFcnJvck1zZyArIFwiIDogXCIgKyBzZXJ2ZXJFcnJvcjtcclxuICAgIH1cclxuICAgIGVsc2VcclxuICAgICAgIGVycm9yTXNnID0gdGhpcy5zdGFuZGFyZEVycm9yTXNnICsgXCIgOiBcIiArIHNlcnZlckVycm9yLmVycm9yLmVycm9yO1xyXG4gICAgbGV0IGRpYWxvZ1N0cnVjID0ge1xyXG4gICAgICBtc2c6IGVycm9yTXNnLFxyXG4gICAgICB0aXRsZTogXCJFcnJvclwiLFxyXG4gICAgICBpbmZvOiBudWxsLFxyXG4gICAgICBvYmplY3Q6IG9iamVjdCxcclxuICAgICAgYWN0aW9uOiB0aGlzLk9rQWN0aW9ucyxcclxuICAgICAgY2FsbGJhY2s6IG51bGxcclxuICAgIH07XHJcbiAgICAgIHRoaXMuc2hvd0NvbmZpcm1hdGlvbihkaWFsb2dTdHJ1Yyk7XHJcblxyXG4gIH1cclxuICBwdWJsaWMgc2VuZEdldENvbW1hbmQodXJsOmFueSwgcGFnZTogc3RyaW5nKTogT2JzZXJ2YWJsZTxHcmlkRGF0YVJlc3VsdD4ge1xyXG4gICAgaWYgKHRoaXMucGFyYW1Db25maWcuREVCVUdfRkxBRykgY29uc29sZS5sb2coXCIgaW5zaWRlIHNlbmRHZXRDb21tYW5kXCIpXHJcbiAgICBsZXQgdGhlVVJMID0gdXJsICsgcGFnZTtcclxuICAgIGlmICh0aGlzLnBhcmFtQ29uZmlnLkRFQlVHX0ZMQUcpIGNvbnNvbGUubG9nKFwiIGluc2lkZSBzZW5kR2V0Q29tbWFuZDp0aGVVUkw6XCIsIHRoZVVSTClcclxuICAgIHRoaXMuaHR0cE9wdGlvbnMgPSB7XHJcbiAgICAgIGhlYWRlcnM6IG5ldyBIdHRwSGVhZGVycyh7XHJcbiAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuICAgICAgICAnYXV0aG9yaXphdGlvbic6IHRoaXMuU3RyQXV0aFxyXG5cclxuICAgICAgfSlcclxuICAgIH07XHJcblxyXG4gICAgaWYgKHRoaXMucGFyYW1Db25maWcuREVCVUdfRkxBRykgY29uc29sZS5sb2coXCJzZW5kR2V0Q29tbWFuZCB0aGVVUkw6XCIgKyB0aGVVUkwpXHJcbiAgICByZXR1cm4gdGhpcy5odHRwXHJcbiAgICAgIC5nZXQoYCR7dGhlVVJMfWAsIHRoaXMuaHR0cE9wdGlvbnMpXHJcbiAgICAgICAgLnBpcGUoXHJcbiAgICAgICAgICAgIGNhdGNoRXJyb3IoKGVycikgPT4ge1xyXG4gICAgICAgICAgICAgIGlmICh0aGlzLnBhcmFtQ29uZmlnLkRFQlVHX0ZMQUcpIGNvbnNvbGUubG9nKFwic2VydmVyIGVycm9yOlwiLCBlcnIubWVzc2FnZSlcclxuICAgICAgICAgIHRoaXMuc2hvd05vdGlmaWNhdGlvbihcImVycm9yXCIsIFwiZXJyb3I6XCIgKyBlcnIubWVzc2FnZSk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhyb3dFcnJvcihlcnIpO1xyXG4gICAgICAgICAgICAgIH0pLFxyXG4gICAgICAgICAgICBtYXAocmVzcG9uc2UgPT4gKFxyXG4gICAgICAgICAgICAgIDxhbnk+cmVzcG9uc2VcclxuICAgICAgICAgICAgKSksXHJcbiAgICAgICAgICAgIHRhcCgoKSA9PiB0aGlzLmxvYWRpbmcgPSBmYWxzZSlcclxuICAgICAgICk7XHJcbiAgfVxyXG4gIHB1YmxpYyBwb3N0Q29tbWFuZE9wdGlvbnMoT3B0aW9uczphbnkscGFnZTogc3RyaW5nLCB1cmw6YW55LCBCb2R5OmFueSk6IE9ic2VydmFibGU8R3JpZERhdGFSZXN1bHQ+IHtcclxuICAgIC8vaWYgKHRoaXMucGFyYW1Db25maWcuREVCVUdfRkxBRykgY29uc29sZS5sb2coXCIgaW5zaWRlIHBvc3RDb21tYW5kXCIpXHJcbiAgICBsZXQgdGhlVVJMID0gdXJsOyAvL3RoaXMuRVBNRU5HX1VSTCArIHBhZ2U7XHJcbiAgICBsZXQgaHR0cE9wdGlvbnMgPSB7fTtcclxuICAgIGlmIChPcHRpb25zID09IG51bGwpe1xyXG4gICAgICAgaHR0cE9wdGlvbnMgPSB7XHJcbiAgICAgICAgaGVhZGVyczogbmV3IEh0dHBIZWFkZXJzKHtcclxuICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXHJcbiAgICAgICAgICAnYXV0aG9yaXphdGlvbic6IHRoaXMuU3RyQXV0aFxyXG4gICAgICB9KVxyXG4gICAgICB9O1xyXG4gICAgfVxyXG4gICAgZWxzZXtcclxuICAgICAgIGh0dHBPcHRpb25zID0ge1xyXG4gICAgICAgIGhlYWRlcnM6IG5ldyBIdHRwSGVhZGVycyhcclxuICAgICAgICAgIE9wdGlvbnNcclxuICAgICAgICAgIClcclxuICAgICAgfTtcclxuICAgIH1cclxuICAgIFxyXG5cclxuICAgIGlmICh0aGlzLnBhcmFtQ29uZmlnLkRFQlVHX0ZMQUcpIGNvbnNvbGUubG9nKFwicG9zdENvbW1hbmRPcHRpb25zIHRoZVVSTDpcIiAsIHRoZVVSTCwgXCJCb2R5OlwiLEJvZHkgKVxyXG4gICAgcmV0dXJuIHRoaXMuaHR0cFxyXG4gICAgICAgIC5wb3N0KGAke3RoZVVSTH1gLEJvZHksIGh0dHBPcHRpb25zKVxyXG4gICAgICAgIC5waXBlKFxyXG4gICAgICAgICAgICBjYXRjaEVycm9yKChlcnIpID0+IHtcclxuICAgICAgICAgICAgICAvL2lmICh0aGlzLnBhcmFtQ29uZmlnLkRFQlVHX0ZMQUcpIGNvbnNvbGUubG9nKFwic2VydmVyIGVycm9yOlwiLCBlcnIubWVzc2FnZSlcclxuICAgICAgICAgICAgICAvL3RoaXMuc2hvd05vdGlmaWNhdGlvbiAoXCJlcnJvclwiLFwiZXJyb3I6XCIgKyBlcnIubWVzc2FnZSk7XHJcbiAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhcImVycjpcIixlcnIpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRocm93RXJyb3IoZXJyKTtcclxuICAgICAgICAgICAgICAgIC8vIHRocm93RXJyb3IoZXJyKTtcclxuICAgICAgICAgICAgICAgIC8vIHJldHVybiBKU09OLnN0cmluZ2lmeSAoZXJyKTtcclxuICAgICAgICAgICAgICB9KSxcclxuICAgICAgICAgICAgbWFwKHJlc3BvbnNlID0+IChcclxuICAgICAgICAgICAgICA8YW55PnJlc3BvbnNlXHJcbiAgICAgICAgICAgICkpLFxyXG4gICAgICAgICAgICBjYXRjaEVycm9yKGVyciA9PiB7Ly9GdWFkOmNoZWNrIGlmIHRob3NlIDMgbGluZXMgYXJlIG5lZWRlZFxyXG4gICAgICAgICAgICAgIHJldHVybiBlcnIubWVzc2FnZTsvLzJcclxuICAgICAgICAgIH0pLCAgICAgICAgICAgICAgICAgICAgLy8zXHJcbiAgICAgICAgICAgIHRhcCgocmVzcG9uc2UpID0+IHt0aGlzLmxvYWRpbmcgPSBmYWxzZTsgY29uc29sZS5sb2coXCJyZXNwb25zZTpcIixyZXNwb25zZSl9KVxyXG4gICAgICAgKTtcclxuICB9XHJcbiAgcHVibGljIHBvc3RDb21tYW5kKHBhZ2U6IHN0cmluZywgdXJsOmFueSwgQm9keTphbnkpOiBPYnNlcnZhYmxlPEdyaWREYXRhUmVzdWx0PiB7XHJcbi8vaWYgKHRoaXMucGFyYW1Db25maWcuREVCVUdfRkxBRykgY29uc29sZS5sb2coXCIgaW5zaWRlIHBvc3RDb21tYW5kXCIpXHJcbiAgICBsZXQgdGhlVVJMID0gdXJsOyAvL3RoaXMuRVBNRU5HX1VSTCArIHBhZ2U7XHJcbiAgICB0aGVVUkwgPSB0aGlzLmNoZWNrREJMb2ModGhlVVJMKTtcclxuICAgIHRoaXMuaHR0cE9wdGlvbnMgPSB7XHJcbiAgICAgIGhlYWRlcnM6IG5ldyBIdHRwSGVhZGVycyh7XHJcbiAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuICAgICAgICAnYXV0aG9yaXphdGlvbic6IHRoaXMuU3RyQXV0aFxyXG5cclxuICAgICAgfSlcclxuICAgIH07XHJcblxyXG4gICAgLy9pZiAodGhpcy5wYXJhbUNvbmZpZy5ERUJVR19GTEFHKSBjb25zb2xlLmxvZyhcInBvc3RDb21tYW5kIHRoZVVSTDpcIiArIHRoZVVSTClcclxuICAgIHJldHVybiB0aGlzLmh0dHBcclxuICAgICAgLnBvc3QoYCR7dGhlVVJMfWAsIEJvZHksIHRoaXMuaHR0cE9wdGlvbnMpXHJcbiAgICAgICAgLnBpcGUoXHJcbiAgICAgICAgICAgIGNhdGNoRXJyb3IoKGVycikgPT4ge1xyXG4gICAgICAgICAgICAgIC8vaWYgKHRoaXMucGFyYW1Db25maWcuREVCVUdfRkxBRykgY29uc29sZS5sb2coXCJzZXJ2ZXIgZXJyb3I6XCIsIGVyci5tZXNzYWdlKVxyXG4gICAgICAgICAgdGhpcy5zaG93Tm90aWZpY2F0aW9uKFwiZXJyb3JcIiwgXCJlcnJvcjpcIiArIGVyci5tZXNzYWdlKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aHJvd0Vycm9yKGVycik7XHJcbiAgICAgICAgICAgICAgfSksXHJcbiAgICAgICAgICAgIG1hcChyZXNwb25zZSA9PiAoXHJcbiAgICAgICAgICAgICAgPGFueT5yZXNwb25zZVxyXG4gICAgICAgICAgICApKSxcclxuICAgICAgICAgICAgdGFwKCgpID0+IHRoaXMubG9hZGluZyA9IGZhbHNlKVxyXG4gICAgICAgKTtcclxuICB9XHJcbiAgcHVibGljIENhcGl0YWxpemVGaXJzdChzdHI6YW55KSB7XHJcbiAgICBzdHIgPSBzdHIudG9Mb3dlckNhc2UoKTtcclxuXHJcbiAgICBzdHIgPSBzdHIuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyBzdHIuc2xpY2UoMSlcclxuICAgIHJldHVybiBzdHI7XHJcbiAgfVxyXG4gIHB1YmxpYyBDYXBpdGFsaXplVGl0bGUoZmllbGROYW1lOmFueSkge1xyXG5cclxuICBsZXQgYXJyYXkgPSBmaWVsZE5hbWUuc3BsaXQoXCJfXCIpO1xyXG4gICAgaWYgKHRoaXMucGFyYW1Db25maWcuREVCVUdfRkxBRykgY29uc29sZS5sb2coXCJhcnJheTpcIiwgYXJyYXkpXHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFycmF5Lmxlbmd0aDsgaSsrKVxyXG4gICAgICBhcnJheVtpXSA9IHRoaXMuQ2FwaXRhbGl6ZUZpcnN0KGFycmF5W2ldKVxyXG5cclxuICAgIGZpZWxkTmFtZSA9IGFycmF5LmpvaW4oXCIgXCIpO1xyXG4gICAgcmV0dXJuIGZpZWxkTmFtZTtcclxuICB9XHJcbiAgcHVibGljIHByZXBhcmVMb29rdXAoZmllbGROYW1lOmFueSwgcGFyYW1Db25maWc6YW55KSB7XHJcblxyXG4gICAgbGV0IGxrcEFyck5hbWUgPSBcImxrcEFyclwiICsgZmllbGROYW1lO1xyXG4gICAgbGV0IGxrcERlZjtcclxuICAgIGlmIChmaWVsZE5hbWUgPT0gXCJBU1NJR05FRVwiKSB7XHJcbiAgICAgIGlmICh0aGlzLnBhcmFtQ29uZmlnLkRFQlVHX0ZMQUcpIGNvbnNvbGUubG9nKFwic3RhclNlcnZpY2VzLnNlc3Npb25QYXJhbXMuVVNFUl9JTkZPOlwiLCB0aGlzLnNlc3Npb25QYXJhbXMuVVNFUl9JTkZPKTtcclxuXHJcbiAgICAgIGxldCB0ZWFtID0gdGhpcy5zZXNzaW9uUGFyYW1zLlVTRVJfSU5GTy5URUFNO1xyXG5cclxuICAgICAgbGtwRGVmID0ge1xyXG4gICAgICAgIFwic3RhdG1lbnRcIjogXCJzZWxlY3QgVVNFUk5BTUUgQ09ERSwgRlVMTE5BTUUgQ09ERVRFWFRfTEFORyBmcm9tICBBRE1fVVNFUl9JTkZPUk1BVElPTiB3aGVyZSBURUFNID0gJ1wiICsgdGVhbSArIFwiJyBcIixcclxuICAgICAgICBcImxrcEFyck5hbWVcIjogbGtwQXJyTmFtZSwgXCJmaWVsZE5hbWVcIjogZmllbGROYW1lXHJcbiAgICAgIH07XHJcblxyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgIGxrcERlZiA9IHtcclxuICAgICAgICBcInN0YXRtZW50XCI6IFwiU0VMRUNUIENPREUsICBDT0RFVEVYVF9MQU5HIEZST00gU09NX1RBQlNfQ09ERVMgV0hFUkUgQ09ERU5BTUUgPSAnXCIgKyBmaWVsZE5hbWUgKyBcIicgYW5kIExBTkdVQUdFX05BTUUgPSAnXCIgKyBwYXJhbUNvbmZpZy51c2VyTGFuZyArIFwiJyBvcmRlciBieSBDT0RFVEVYVF9MQU5HICBcIixcclxuICAgICAgICBcImxrcEFyck5hbWVcIjogbGtwQXJyTmFtZSwgXCJmaWVsZE5hbWVcIjogZmllbGROYW1lXHJcbiAgICAgIH07XHJcbiAgICB9XHJcbiAgICByZXR1cm4gbGtwRGVmO1xyXG5cclxuICB9XHJcbiAgcHVibGljIGdldEFzc2lnbmVlU2VsZWN0KG9iamVjdDphbnksIGFzc2lnbmVlVHlwZTphbnkpIHtcclxuICAgIGxldCBzZWxlY3RTdG10O1xyXG5cclxuICAgIGlmIChhc3NpZ25lZVR5cGUgPT0gXCJURUFNXCIpIHtcclxuICAgICAgc2VsZWN0U3RtdCA9IFwiU0VMRUNUIENPREUsIENPREVURVhUX0xBTkcgRlJPTSBTT01fVEFCU19DT0RFUyBXSEVSRSBDT0RFTkFNRSA9J1RFQU0nIGFuZCBMQU5HVUFHRV9OQU1FID0gJ1wiICsgb2JqZWN0LnBhcmFtQ29uZmlnLnVzZXJMYW5nICsgXCInICBvcmRlciBieSBDT0RFVEVYVF9MQU5HIFwiXHJcbiAgICB9XHJcbiAgICBlbHNlIGlmIChhc3NpZ25lZVR5cGUgPT0gXCJQRVJTT05cIikge1xyXG4gICAgICBzZWxlY3RTdG10ID0gXCJTRUxFQ1QgVVNFUk5BTUUgIENPREUsIEZVTExOQU1FIENPREVURVhUX0xBTkcgRlJPTSBBRE1fVVNFUl9JTkZPUk1BVElPTiBXSEVSRSBURUFNID0nXCIgKyBvYmplY3Quc3RhclNlcnZpY2VzLnNlc3Npb25QYXJhbXMuVVNFUl9JTkZPLlRFQU0gKyBcIicgb3JkZXIgYnkgQ09ERVRFWFRfTEFORyBcIlxyXG4gICAgfVxyXG4gICAgZWxzZSBpZiAoYXNzaWduZWVUeXBlID09IFwiTkVUV09SS1wiKSB7XHJcbiAgICAgIHNlbGVjdFN0bXQgPSBcIlNFTEVDVCBDT0RFLCBDT0RFVEVYVF9MQU5HIEZST00gU09NX1RBQlNfQ09ERVMgV0hFUkUgQ09ERU5BTUUgPSdFWENIX1NZU1QnIGFuZCBMQU5HVUFHRV9OQU1FID0gJ1wiICsgb2JqZWN0LnBhcmFtQ29uZmlnLnVzZXJMYW5nICsgXCInIG9yZGVyIGJ5IENPREVURVhUX0xBTkdcIlxyXG4gICAgfVxyXG4gICAgcmV0dXJuIHNlbGVjdFN0bXQ7XHJcbiAgfVxyXG4gIHB1YmxpYyBnZXRGaXJzdFdlZWtEYXkob2JqZWN0OmFueSwgdmFsdWU6YW55KSB7XHJcbiAgICBsZXQgdmFsdWVEYXRlOiBEYXRlXHJcbiAgICBsZXQgZmlyc3RXZWVrRGF5OmFueSA9IERheS5Nb25kYXk7XHJcbiAgICBpZiAodHlwZW9mIG9iamVjdC5wYXJhbUNvbmZpZy5maXJzdFdlZWtEYXkgIT09IFwidW5kZWZpbmVkXCIpIHtcclxuICAgICAgZmlyc3RXZWVrRGF5ID0gb2JqZWN0LnBhcmFtQ29uZmlnLmZpcnN0V2Vla0RheTtcclxuICAgIH1cclxuICAgIHZhbHVlRGF0ZSA9IGZpcnN0RGF5SW5XZWVrKG5ldyBEYXRlKHZhbHVlKSwgZmlyc3RXZWVrRGF5KTtcclxuICAgIHZhbHVlRGF0ZSA9IGdldERhdGUodmFsdWVEYXRlKTtcclxuICAgIGlmICh0aGlzLnBhcmFtQ29uZmlnLkRFQlVHX0ZMQUcpIGNvbnNvbGUubG9nKFwidmFsdWVEYXRlOlwiLCB2YWx1ZURhdGUpXHJcbiAgICByZXR1cm4gdmFsdWVEYXRlO1xyXG5cclxuICB9XHJcbiAgcHVibGljIHNldFJUTCgpIHtcclxuICAgIGxldCBwYXJhbUNvbmZpZyA9IGdldFBhcmFtQ29uZmlnKCk7XHJcbiAgICBsZXQgbGFuZ3VhZ2VfbmFtZSA9IHBhcmFtQ29uZmlnLnVzZXJMYW5nO1xyXG4gICAgbGFuZ3VhZ2VfbmFtZSA9IGxhbmd1YWdlX25hbWUudG9Mb3dlckNhc2UoKTtcclxuXHJcbiAgICBsZXQgcGFyZzphbnkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1haW5wYWdlXCIpO1xyXG4gICAgY29uc3Qgc3ZjID0gPE15TWVzc2FnZVNlcnZpY2U+dGhpcy5tZXNzYWdlcztcclxuICAgIC8vc3ZjLmxhbmd1YWdlX25hbWUgPSBzdmMubGFuZ3VhZ2VfbmFtZSA9PT0gJ2VzJyA/ICdoZScgOiAnZXMnO1xyXG4gICAgLy9zdmMubGFuZ3VhZ2VfbmFtZSA9IGxhbmd1YWdlX25hbWU7XHJcbiAgICAvL2lmICh0aGlzLnBhcmFtQ29uZmlnLkRFQlVHX0ZMQUcpIGNvbnNvbGUubG9nKFwic2V0UlRMOmxhbmd1YWdlX25hbWU6XCIsIGxhbmd1YWdlX25hbWUpXHJcbiAgICBpZiAobGFuZ3VhZ2VfbmFtZSA9PSBcImFyXCIpIHtcclxuICAgICAgcGFyZy5kaXIgPSBcInJ0bFwiO1xyXG4gICAgICB0aGlzLm1lc3NhZ2VzLm5vdGlmeSh0cnVlKTtcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICBwYXJnLmRpciA9IFwibHRyXCI7XHJcbiAgICAgIHRoaXMubWVzc2FnZXMubm90aWZ5KGZhbHNlKTtcclxuICAgIH1cclxuICB9XHJcbiAgcHVibGljIGxvYWRMYW5ndWFnZU9sZChsYW5ndWFnZV9uYW1lOmFueSkge1xyXG4gICAgbGFuZ3VhZ2VfbmFtZSA9ICFsYW5ndWFnZV9uYW1lID8gXCJlblwiIDogbGFuZ3VhZ2VfbmFtZVxyXG4gICAgbGV0IGZpbGUgPSBcImFzc2V0cy9sYW5nL1wiICsgbGFuZ3VhZ2VfbmFtZS50b0xvd2VyQ2FzZSgpICsgXCIuanNvblwiXHJcbiAgICBpZiAodGhpcy5wYXJhbUNvbmZpZy5ERUJVR19GTEFHKSBjb25zb2xlLmxvZyhcImxvYWRMYW5ndWFnZTpmaWxlLFwiLCBmaWxlKVxyXG4gICAgdGhpcy5odHRwLmdldChmaWxlKS5zdWJzY3JpYmUoZGF0YSA9PiB7XHJcbiAgICAgIGlmICh0aGlzLnBhcmFtQ29uZmlnLkRFQlVHX0ZMQUcpIGNvbnNvbGUubG9nKFwibG9hZExhbmd1YWdlOmRhdGEsXCIsIGRhdGEpXHJcbiAgICAgIGxldCBwYXJhbUNvbmZpZyA9IHtcclxuICAgICAgICBcIk5hbWVcIjogXCJ0aXRsZXNcIixcclxuICAgICAgICBcIlZhbFwiOiBkYXRhXHJcbiAgICAgIH07XHJcbiAgICAgIHNldFBhcmFtQ29uZmlnKHBhcmFtQ29uZmlnKTtcclxuICAgICAgdGhpcy5wYXJhbUNvbmZpZyA9IGdldFBhcmFtQ29uZmlnKCk7XHJcbiAgICAgIHBhcmFtQ29uZmlnID0ge1xyXG4gICAgICAgIFwiTmFtZVwiOiBcInVzZXJMYW5nXCIsXHJcbiAgICAgICAgXCJWYWxcIjogbGFuZ3VhZ2VfbmFtZS50b1VwcGVyQ2FzZSgpXHJcbiAgICAgIH07XHJcbiAgICAgIHNldFBhcmFtQ29uZmlnKHBhcmFtQ29uZmlnKTtcclxuICAgICAgdGhpcy5zZXRSVEwoKTtcclxuXHJcbiAgICAgIGlmICh0aGlzLnBhcmFtQ29uZmlnLkRFQlVHX0ZMQUcpIGNvbnNvbGUubG9nKFwiZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmRpcjpcIiwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmRpciA9PSAnbHRyJyk7XHJcbiAgICB9LFxyXG4gICAgZXJyID0+IHtcclxuICAgICAgICBpZiAodGhpcy5wYXJhbUNvbmZpZy5ERUJVR19GTEFHKSBjb25zb2xlLmxvZyhcImxvYWRMYW5ndWFnZTplcnIsXCIsIGVycilcclxuICAgICAgLy9hbGVydCAoJ2Vycm9yOicgKyBlcnIubWVzc2FnZSk7XHJcbiAgICAgIC8vdGhpcy5zaG93RXJyb3JNc2cob2JqZWN0LCBlcnIpO1xyXG4gICAgfSlcclxuICB9XHJcbiAgcHVibGljIGxvYWRMYW5ndWFnZShsYW5ndWFnZTphbnkpe1xyXG4gICAgbGFuZ3VhZ2UgPSAhbGFuZ3VhZ2UgPyBcImVuXCIgOiBsYW5ndWFnZVxyXG4gICAgbGV0IGZpbGUgPSBcImxhbmcvXCIgKyBsYW5ndWFnZS50b0xvd2VyQ2FzZSgpICsgXCIuanNvblwiXHJcbiAgICBpZiAodGhpcy5wYXJhbUNvbmZpZy5ERUJVR19GTEFHKSBjb25zb2xlLmxvZyhcImxvYWRMYW5ndWFnZTpmaWxlLFwiLGZpbGUpXHJcbiAgICBsZXQgcGFnZSA9IFwiP2dldGZpbGU9XCIgKyBmaWxlO1xyXG4gICAgcGFnZSA9IHRoaXMuY2hlY2tEQkxvYyhwYWdlKTtcclxuICAgIHBhZ2UgPSBlbmNvZGVVUkkocGFnZSk7XHJcbiAgICBcclxuICAgIGlmICh0aGlzLnBhcmFtQ29uZmlnLkRFQlVHX0ZMQUcpIGNvbnNvbGUubG9nKFwibG9hZExhbmd1YWdlOnBhZ2UsXCIscGFnZSlcclxuICAgICAgdGhpcy5wYXJhbUNvbmZpZyA9IGdldFBhcmFtQ29uZmlnKCk7XHJcbiAgICAgIGlmICh0aGlzLnBhcmFtQ29uZmlnLkRFQlVHX0ZMQUcpIGNvbnNvbGUubG9nKFwidGhpcy5wYXJhbUNvbmZpZy50aXRsZXMsXCIsdGhpcy5wYXJhbUNvbmZpZy50aXRsZXMpO1xyXG4gICAgICBsZXQgcGFyYW1Db25maWcgPSB7XHJcbiAgICAgICAgXCJOYW1lXCI6IFwidXNlckxhbmdcIixcclxuICAgICAgICBcIlZhbFwiOiBsYW5ndWFnZS50b1VwcGVyQ2FzZSgpXHJcbiAgICAgIH07XHJcbiAgICAgIHNldFBhcmFtQ29uZmlnKHBhcmFtQ29uZmlnKTtcclxuXHJcbiAgICB0aGlzLnNlbmRHZXRDb21tYW5kKHRoaXMuU0VSVkVSX1VSTCAsIHBhZ2UpLnN1YnNjcmliZShyZXN1bHQgPT4ge1xyXG4gICAgICBpZiAodGhpcy5wYXJhbUNvbmZpZy5ERUJVR19GTEFHKSBjb25zb2xlLmxvZyhcImxvYWRMYW5ndWFnZTpyZXN1bHQsXCIscmVzdWx0KTtcclxuICAgICAgbGV0IGRhdGEgPSByZXN1bHQuZGF0YTtcclxuICAgICAgaWYgKHRoaXMucGFyYW1Db25maWcuREVCVUdfRkxBRykgY29uc29sZS5sb2coXCJsb2FkTGFuZ3VhZ2U6ZGF0YSxcIixkYXRhKVxyXG4gICAgICBsZXQgcGFyYW1Db25maWcgPSB7XHJcbiAgICAgICAgXCJOYW1lXCI6IFwidGl0bGVzXCIsXHJcbiAgICAgICAgXCJWYWxcIjogZGF0YVxyXG4gICAgICB9O1xyXG4gICAgICBzZXRQYXJhbUNvbmZpZyhwYXJhbUNvbmZpZyk7XHJcbiAgICAgIHRoaXMucGFyYW1Db25maWcgPSBnZXRQYXJhbUNvbmZpZygpO1xyXG4gICAgICBpZiAodGhpcy5wYXJhbUNvbmZpZy5ERUJVR19GTEFHKSBjb25zb2xlLmxvZyhcInRoaXMucGFyYW1Db25maWcudGl0bGVzLFwiLHRoaXMucGFyYW1Db25maWcudGl0bGVzKTtcclxuICAgICAgcGFyYW1Db25maWcgPSB7XHJcbiAgICAgICAgXCJOYW1lXCI6IFwidXNlckxhbmdcIixcclxuICAgICAgICBcIlZhbFwiOiBsYW5ndWFnZS50b1VwcGVyQ2FzZSgpXHJcbiAgICAgIH07XHJcbiAgICAgIHNldFBhcmFtQ29uZmlnKHBhcmFtQ29uZmlnKTtcclxuICAgICAgdGhpcy5zZXRSVEwoKTtcclxuXHJcbiAgICAgIGlmICh0aGlzLnBhcmFtQ29uZmlnLkRFQlVHX0ZMQUcpIGNvbnNvbGUubG9nKFwiZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmRpcjpcIiwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmRpciA9PSAnbHRyJyAgKTtcclxuICAgIH0sXHJcbiAgICBlcnIgPT4ge1xyXG4gICAgICBpZiAodGhpcy5wYXJhbUNvbmZpZy5ERUJVR19GTEFHKSBjb25zb2xlLmxvZyhcImxvYWRMYW5ndWFnZTplcnIsXCIsZXJyKVxyXG4gICAgICAvL2FsZXJ0ICgnZXJyb3I6JyArIGVyci5tZXNzYWdlKTtcclxuICAgICAgLy90aGlzLnNob3dFcnJvck1zZyhvYmplY3QsIGVycik7XHJcbiAgICB9KVxyXG4gIH1cclxuICBwdWJsaWMgZ2V0TkxTKHBhcmFtczphbnksIGlkOmFueSwgdGV4dDphbnkpIHtcclxuICAgIC8vaWYgKHRoaXMucGFyYW1Db25maWcuREVCVUdfRkxBRykgY29uc29sZS5sb2coXCJjaGVja3g6Z2V0TkxTOnRoaXMucGFyYW1Db25maWcudGl0bGVzLFwiLHRoaXMucGFyYW1Db25maWcudGl0bGVzKTtcclxuICAgIGlmICh0eXBlb2YgdGhpcy5wYXJhbUNvbmZpZyAhPT0gXCJ1bmRlZmluZWRcIikge1xyXG4gICAgICBpZiAodHlwZW9mIHRoaXMucGFyYW1Db25maWcudGl0bGVzICE9PSBcInVuZGVmaW5lZFwiKSB7XHJcbiAgICAgICAgLy9jb25zb2xlLmxvZyhcImNoZWNreDpnZXROTFM6aWQ6XCIsaWQpO1xyXG4gICAgICAgIGxldCBhcnJheSA9IGlkLnNwbGl0KFwiLlwiKTtcclxuICAgICAgICBpZiAoYXJyYXkubGVuZ3RoID09IDMpIHtcclxuICAgICAgICAgIGlmICh0eXBlb2YgdGhpcy5wYXJhbUNvbmZpZy50aXRsZXMgW2FycmF5WzBdXSAhPT0gXCJ1bmRlZmluZWRcIil7XHJcbiAgICAgICAgICAgIGlmICh0eXBlb2YgdGhpcy5wYXJhbUNvbmZpZy50aXRsZXNbYXJyYXlbMF1dW2FycmF5WzFdXSAhPT0gXCJ1bmRlZmluZWRcIikge1xyXG4gICAgICAgICAgICAgIGlmICh0eXBlb2YgdGhpcy5wYXJhbUNvbmZpZy50aXRsZXNbYXJyYXlbMF1dW2FycmF5WzFdXVthcnJheVsyXV0gIT09IFwidW5kZWZpbmVkXCIpe1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMucGFyYW1Db25maWcudGl0bGVzW2FycmF5WzBdXVthcnJheVsxXV1bYXJyYXlbMl1dICE9IFwiXCIpe1xyXG4gICAgICAgICAgICAgICAgICB0ZXh0ID0gdGhpcy5wYXJhbUNvbmZpZy50aXRsZXNbYXJyYXlbMF1dW2FycmF5WzFdXVthcnJheVsyXV1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGVsc2V7XHJcbiAgICAgICAgICAgIC8vY29uc29sZS5sb2coXCJjaGVja3g6Z2V0TkxTOmFycmF5WzBdIG5vdCBmb3VuZCBpbiB0aGlzLnBhcmFtQ29uZmlnLnRpdGxlcyA6MDpcIixhcnJheVswXSwgdGhpcy5wYXJhbUNvbmZpZy50aXRsZXMpO1xyXG4gICAgICAgICAgICAvL2NvbnNvbGUubG9nKFwiY2hlY2t4OmdldE5MUzphcnJheVswXSBub3QgZm91bmQgaW4gdGhpcy5wYXJhbUNvbmZpZy50aXRsZXMgOjA6XCIsYXJyYXlbMF0pO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLy9jb25zb2xlLmxvZyhcImNoZWNreDpnZXROTFM6dGV4dCxcIix0ZXh0LCBcImluIGFycmF5WzBdOlwiLCBhcnJheVswXSwgdGhpcy5wYXJhbUNvbmZpZy50aXRsZXMpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgIGxldCBubHNfdGl0bGUgPSB0aGlzLnBhcmFtQ29uZmlnLnRpdGxlc1tpZF07XHJcbiAgICAgICAgICBpZiAodHlwZW9mIG5sc190aXRsZSAhPT0gXCJ1bmRlZmluZWRcIikge1xyXG4gICAgICAgICAgICB0ZXh0ID0gbmxzX3RpdGxlO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgaWYgKHBhcmFtcy5sZW5ndGggPiAwKSB7XHJcbiAgICAgIGxldCBzdHJBcnJheSA9IHRleHQuc3BsaXQoXCIjI1wiKTtcclxuICAgICAgdGV4dCA9IFwiXCI7XHJcbiAgXHJcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc3RyQXJyYXkubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBpZiAodHlwZW9mIHBhcmFtc1tpXSAhPSBcInVuZGVmaW5lZFwiKVxyXG4gICAgICAgICAgdGV4dCA9IHRleHQgKyBzdHJBcnJheVtpXSArIHBhcmFtc1tpXTtcclxuICAgICAgICBlbHNlXHJcbiAgICAgICAgICB0ZXh0ID0gdGV4dCArIHN0ckFycmF5W2ldO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG5cclxuICAgIHJldHVybiB0ZXh0O1xyXG4gIH1cclxuICBwdWJsaWMgbG9hZFN0YXRlbWVudHMoc3RhdGVtZW50czphbnkpe1xyXG4gICAgaWYgKHN0YXRlbWVudHMgPT0gXCJcIilcclxuICAgICAgc3RhdGVtZW50cyA9IFwic3RhdGVtZW50cy5qc29uXCI7XHJcbiAgbGV0IHBhZ2UgPSBcIj9nZXRmaWxlPVwiICsgc3RhdGVtZW50cztcclxuICAgIHBhZ2UgPSB0aGlzLmNoZWNrREJMb2MocGFnZSk7XHJcbiAgICBwYWdlID0gZW5jb2RlVVJJKHBhZ2UpO1xyXG4gICAgdGhpcy5zZW5kR2V0Q29tbWFuZCh0aGlzLlNFUlZFUl9VUkwsIHBhZ2UpLnN1YnNjcmliZShyZXN1bHQgPT4ge1xyXG4gICAgICBpZiAodGhpcy5wYXJhbUNvbmZpZy5ERUJVR19GTEFHKSBjb25zb2xlLmxvZyhcImxvYWRTdGF0ZW1lbnRzOnJlc3VsdCxcIiwgcmVzdWx0KTtcclxuICAgICAgbGV0IGRhdGEgPSByZXN1bHQuZGF0YTtcclxuICAgICAgaWYgKHRoaXMucGFyYW1Db25maWcuREVCVUdfRkxBRykgY29uc29sZS5sb2coXCJsb2FkU3RhdGVtZW50czpkYXRhLFwiLCBkYXRhKTtcclxuICAgICAgbGV0IGxrcEFyclFVRVJZX0RFRjphbnkgPSBbXTtcclxuICAgICAgT2JqZWN0LmtleXMoZGF0YSkuZm9yRWFjaChmdW5jdGlvbiAoa2V5OmFueSkge1xyXG4gICAgICAgIGxldCB2YWx1ZSA9IGRhdGFba2V5XTtcclxuICAgICAgICBsZXQgcmVjID0ge1xyXG4gICAgICAgICAgQ09ERToga2V5LFxyXG4gICAgICAgICAgQ09ERVRFWFRfTEFORzoga2V5LFxyXG4gICAgICAgICAgc3RhdGVtZW50OiB2YWx1ZVxyXG4gICAgICAgIH1cclxuICAgICAgICBsa3BBcnJRVUVSWV9ERUYucHVzaChyZWMpO1xyXG5cclxuICAgIH0pO1xyXG4gICAgICBpZiAodGhpcy5wYXJhbUNvbmZpZy5ERUJVR19GTEFHKSBjb25zb2xlLmxvZyhcImxvYWRTdGF0ZW1lbnRzOmRhdGEsXCIsIGRhdGEpO1xyXG4gICAgICBpZiAodGhpcy5wYXJhbUNvbmZpZy5ERUJVR19GTEFHKSBjb25zb2xlLmxvZyhcImxvYWRTdGF0ZW1lbnRzOmxrcEFyclFVRVJZX0RFRixcIiwgbGtwQXJyUVVFUllfREVGKVxyXG4gICAgICBsZXQgcGFyYW1Db25maWcgPSB7XHJcbiAgICAgICAgXCJOYW1lXCI6IFwic3RhdGVtZW50c1wiLFxyXG4gICAgICAgIFwiVmFsXCI6IGRhdGFcclxuICAgICAgfTtcclxuICAgICAgc2V0UGFyYW1Db25maWcocGFyYW1Db25maWcpO1xyXG4gICAgICBwYXJhbUNvbmZpZyA9IHtcclxuICAgICAgICBcIk5hbWVcIjogXCJsa3BBcnJRVUVSWV9ERUZcIixcclxuICAgICAgICBcIlZhbFwiOiBsa3BBcnJRVUVSWV9ERUZcclxuICAgICAgfTtcclxuICAgICAgc2V0UGFyYW1Db25maWcocGFyYW1Db25maWcpO1xyXG5cclxuICAgIH0sXHJcbiAgICBlcnIgPT4ge1xyXG4gICAgICAgIGlmICh0aGlzLnBhcmFtQ29uZmlnLkRFQlVHX0ZMQUcpIGNvbnNvbGUubG9nKFwibG9hZExhbmd1YWdlOmVycixcIiwgZXJyKVxyXG5cclxuXHJcblxyXG4gICAgfSlcclxuICB9XHJcbiAgLy8gcHVibGljIGxvYWRTdGF0ZW1lbnRzT2xkKCkge1xyXG5cclxuICAvLyAgIGxldCBmaWxlID0gXCJhc3NldHMvXCIgKyBcInN0YXRlbWVudHMuanNvblwiXHJcbiAgLy8gICBpZiAodGhpcy5wYXJhbUNvbmZpZy5ERUJVR19GTEFHKSBjb25zb2xlLmxvZyhcImxvYWRTdGF0ZW1lbnRzOmZpbGUsXCIsIGZpbGUpXHJcbiAgLy8gICB0aGlzLmh0dHAuZ2V0KGZpbGUpLnN1YnNjcmliZShkYXRhID0+IHtcclxuICAvLyAgICAgbGV0IGxrcEFyclFVRVJZX0RFRjphbnkgPSBbXTtcclxuICAvLyAgICAgT2JqZWN0LmtleXMoZGF0YSkuZm9yRWFjaChmdW5jdGlvbiAoa2V5OmFueSkge1xyXG4gIC8vICAgICAgIGxldCB2YWx1ZSA9IGRhdGFba2V5XTtcclxuICAvLyAgICAgICBsZXQgcmVjID0ge1xyXG4gIC8vICAgICAgICAgQ09ERToga2V5LFxyXG4gIC8vICAgICAgICAgQ09ERVRFWFRfTEFORzoga2V5LFxyXG4gIC8vICAgICAgICAgc3RhdGVtZW50OiB2YWx1ZVxyXG4gIC8vICAgICAgIH1cclxuICAvLyAgICAgICBsa3BBcnJRVUVSWV9ERUYucHVzaChyZWMpO1xyXG5cclxuICAvLyAgICAgfSk7XHJcbiAgLy8gICAgIGlmICh0aGlzLnBhcmFtQ29uZmlnLkRFQlVHX0ZMQUcpIGNvbnNvbGUubG9nKFwibG9hZFN0YXRlbWVudHM6ZGF0YSxcIiwgZGF0YSk7XHJcbiAgLy8gICAgIGlmICh0aGlzLnBhcmFtQ29uZmlnLkRFQlVHX0ZMQUcpIGNvbnNvbGUubG9nKFwibG9hZFN0YXRlbWVudHM6bGtwQXJyUVVFUllfREVGLFwiLCBsa3BBcnJRVUVSWV9ERUYpXHJcbiAgLy8gICAgIGxldCBwYXJhbUNvbmZpZyA9IHtcclxuICAvLyAgICAgICBcIk5hbWVcIjogXCJzdGF0ZW1lbnRzXCIsXHJcbiAgLy8gICAgICAgXCJWYWxcIjogZGF0YVxyXG4gIC8vICAgICB9O1xyXG4gIC8vICAgICBzZXRQYXJhbUNvbmZpZyhwYXJhbUNvbmZpZyk7XHJcbiAgLy8gICAgIHBhcmFtQ29uZmlnID0ge1xyXG4gIC8vICAgICAgIFwiTmFtZVwiOiBcImxrcEFyclFVRVJZX0RFRlwiLFxyXG4gIC8vICAgICAgIFwiVmFsXCI6IGxrcEFyclFVRVJZX0RFRlxyXG4gIC8vICAgICB9O1xyXG4gIC8vICAgICBzZXRQYXJhbUNvbmZpZyhwYXJhbUNvbmZpZyk7XHJcblxyXG4gIC8vICAgfSxcclxuICAvLyAgICAgZXJyID0+IHtcclxuICAvLyAgICAgICBpZiAodGhpcy5wYXJhbUNvbmZpZy5ERUJVR19GTEFHKSBjb25zb2xlLmxvZyhcImxvYWRMYW5ndWFnZTplcnIsXCIsIGVycilcclxuXHJcblxyXG5cclxuICAvLyAgICAgfSlcclxuICAvLyB9XHJcblxyXG5cclxuICBwdWJsaWMgaGFuZGxlRmV0Y2hlZE1vZHVsZXMob2JqZWN0OmFueSwgZGF0YTphbnkpIHtcclxuICAgIGlmIChvYmplY3QucGFyYW1Db25maWcuREVCVUdfRkxBRykgY29uc29sZS5sb2coJ2ZldGNoZWRNb2R1bGVzIDogJywgZGF0YVswXS5kYXRhKTtcclxuICAgIC8vdGhpcy5pdGVtc1swXS5pdGVtcyA9ICBkYXRhO1xyXG4gICAgb2JqZWN0Lml0ZW1zID0gW1xyXG4gICAgICB7XHJcbiAgICAgICB0ZXh0OiAnTW9kdWxlJyxcclxuICAgICAgIGl0ZW1zOiBkYXRhWzBdLmRhdGFcclxuICAgICB9XTtcclxuICAgICBvYmplY3Quc2V0TW9kdWxlTmFtZShvYmplY3QuY3VycmVudE1lbnUpO1xyXG4gICAgaWYgKG9iamVjdC5wYXJhbUNvbmZpZy5ERUJVR19GTEFHKSBjb25zb2xlLmxvZyhcIm9iamVjdC5pdGVtczpcIiwgb2JqZWN0Lml0ZW1zLCBcImRhdGFbMF0uZGF0YS5sZW5ndGg6XCIsIGRhdGFbMF0uZGF0YS5sZW5ndGgpXHJcbiAgICBpZiAoZGF0YVswXS5kYXRhLmxlbmd0aCA9PSAxKSB7XHJcbiAgICAgIG9iamVjdC5zaG93TW9kdWxlU2VsZWN0aW9uID0gZmFsc2U7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZmV0Y2hNZW51KG9iamVjdDphbnksIGhhbmRsZUZldGNoZWREYXRhOmFueSkge1xyXG4gICAgaWYgKCh0aGlzLlN0ckF1dGggPT0gXCJcIikgfHwgKHR5cGVvZiB0aGlzLlN0ckF1dGggPT09IFwidW5kZWZpbmVkXCIpKVxyXG4gICAgICByZXR1cm47XHJcblxyXG5cclxuICAgIGxldCBQYWdlID0gXCJcIjtcclxuICAgIHRoaXMucG9zdCh0aGlzLCBQYWdlLCBvYmplY3QuQm9keSkuc3Vic2NyaWJlKHJlc3VsdCA9PiB7XHJcblxyXG4gICAgICAgIGhhbmRsZUZldGNoZWREYXRhKG9iamVjdCwgcmVzdWx0LmRhdGEsIGZhbHNlKTtcclxuXHJcblxyXG4gICAgICBvYmplY3QuQm9keSA9IFtdO1xyXG4gICAgfSxcclxuICAgIGVyciA9PiB7XHJcbiAgICAgICAgLy9hbGVydCgnZXJyb3I6JyArIGVyci5tZXNzYWdlKTtcclxuICAgIH0pO1xyXG4gIH1cclxuICBwdWJsaWMgc2V0TW9kdWxlSXRlbXMob2JqZWN0OmFueSkge1xyXG5cclxuXHJcbiAgICBpZiAoIW9iamVjdC5zdGF0aWNNZW51KSB7XHJcbiAgICAgIG9iamVjdC5Cb2R5ID0gW107XHJcbiAgICAgIGxldCBOZXdWYWw6YW55ID0ge1xyXG4gICAgICAgIE1FTlU6ICdNQUlOJyxcclxuICAgICAgICBDSE9JQ0VTIDogb2JqZWN0LnBhcmFtQ29uZmlnLmxpY2Vuc2VkTW9kdWxlcy50b1VwcGVyQ2FzZSgpLFxyXG4gICAgICAgIExBTkdVQUdFX05BTUUgOiBvYmplY3QucGFyYW1Db25maWcudXNlckxhbmcudG9VcHBlckNhc2UoKSxcclxuICAgICAgfTtcclxuXHJcbiAgICAgICAgTmV3VmFsW1wiX1FVRVJZXCJdID0gXCJHRVRfQUxMT1dFRF9NT0RVTEVTXCI7XHJcblxyXG4gICAgICAgIG9iamVjdC5hZGRUb0JvZHkoTmV3VmFsKTtcclxuICAgICAgaWYgKHRoaXMucGFyYW1Db25maWcuREVCVUdfRkxBRykgY29uc29sZS5sb2coXCItLS0tLS0tLW9iamVjdC5Cb2R5IDpcIiwgb2JqZWN0LkJvZHkpXHJcblxyXG5cclxuICAgICAgdGhpcy5mZXRjaE1lbnUob2JqZWN0LCB0aGlzLmhhbmRsZUZldGNoZWRNb2R1bGVzKTtcclxuICAgIH1cclxuICB9XHJcbiAgcHVibGljIHN0YXRlQ2hhbmdlKG9iamVjdDphbnksIGRhdGE6IFBhbmVsQmFyU3RhdGVDaGFuZ2VFdmVudCk6IGJvb2xlYW4ge1xyXG4gICAgLy9wdWJsaWMgc3RhdGVDaGFuZ2Uob2JqZWN0OmFueSwgZGF0YTogQXJyYXk8UGFuZWxCYXJJdGVtTW9kZWw+KTogYm9vbGVhbiB7XHJcbiAgXHJcbiAgICAgIGlmIChvYmplY3Quc3RhdGljTWVudSA9PSB0cnVlKSB7XHJcbiAgICAgICAgY29uc3QgZm9jdXNlZEV2ZW50OiBQYW5lbEJhckl0ZW1Nb2RlbCA9IGRhdGEuaXRlbXMuZmlsdGVyKGl0ZW0gPT4gaXRlbS5mb2N1c2VkID09PSB0cnVlKVswXTtcclxuICAgICAgICBpZiAodGhpcy5wYXJhbUNvbmZpZy5ERUJVR19GTEFHKSBjb25zb2xlLmxvZyhcIiBpbiBzdGF0ZUNoYW5nZSA6IFwiICsgZm9jdXNlZEV2ZW50LmlkKVxyXG4gICAgICAgIGlmICh0aGlzLnBhcmFtQ29uZmlnLkRFQlVHX0ZMQUcpIGNvbnNvbGUubG9nKGZvY3VzZWRFdmVudClcclxuICAgICAgICBpZiAoZm9jdXNlZEV2ZW50LnRpdGxlID09IFwiRm9ybWF0dGluZyBGbG93XCIpIHtcclxuICAgICAgICAgIG9iamVjdC5zaG93UGFuZWxiYXIgPSBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJvYmplY3QuaXNQaG9uZVBvcnRyYWl0OlwiLCBvYmplY3QuaXNQaG9uZVBvcnRyYWl0LCBvYmplY3Quc2hvd1BhbmVsYmFyKVxyXG4gICAgICAgIC8vdGhpcy5zZWxlY3RlZElkID0gZm9jdXNlZEV2ZW50LmlkO1xyXG4gICAgICAgIC8vdGhpcy5yb3V0ZXIubmF2aWdhdGUoWycvJyArIGZvY3VzZWRFdmVudC5pZF0pO1xyXG4gICAgICAgIC8vdGhpcy5zdGFyU2VydmljZXMuc2V0UlRMKCk7XHJcbiAgICAgICAgcmV0dXJuIHRydWU7ICAvL0Z1YWQgY2hlY2sgaWYgaXQgc2hvdWxkIHJldHVybiBmYWxzZSBvciB0cnVlXHJcbiAgXHJcbiAgICAgIH1cclxuICAgICAgY29uc3QgZm9jdXNlZEV2ZW50OiBQYW5lbEJhckl0ZW1Nb2RlbCA9IGRhdGEuaXRlbXMuZmlsdGVyKGl0ZW0gPT4gaXRlbS5mb2N1c2VkID09PSB0cnVlKVswXTtcclxuICAgICAgaWYgKHRoaXMucGFyYW1Db25maWcuREVCVUdfRkxBRykgY29uc29sZS5sb2coXCIgaW4gc3RhdGVDaGFuZ2UgOiBcIiAsIGZvY3VzZWRFdmVudCwgZm9jdXNlZEV2ZW50LmlkKVxyXG4gICAgICBsZXQgcm91dGluZUF1dGggPSB0aGlzLmdldFJvdXRpbmVBdXRoKG9iamVjdC5tZW51LCBmb2N1c2VkRXZlbnQuaWQpO1xyXG4gICAgICBpZiAodGhpcy5wYXJhbUNvbmZpZy5ERUJVR19GTEFHKSBjb25zb2xlLmxvZyhcIiBpbiBzdGF0ZUNoYW5nZSA6IFwiICwgZm9jdXNlZEV2ZW50LmlkICwgXCJyb3V0aW5lQXV0aCA6XCIgLCByb3V0aW5lQXV0aClcclxuICBcclxuICAgICAgaWYgKGZvY3VzZWRFdmVudC5pZCA9PSBcIlBSVkZMT1dcIilcclxuICAgICAgICAgb2JqZWN0LnNob3dQYW5lbGJhciA9IGZhbHNlO1xyXG4gIFxyXG4gICAgICBpZiAodHlwZW9mIHJvdXRpbmVBdXRoICE9PSBcInVuZGVmaW5lZFwiKSB7XHJcbiAgICAgICAgaWYgKHRoaXMucGFyYW1Db25maWcuREVCVUdfRkxBRykgY29uc29sZS5sb2coXCIgaW4gc3RhdGVDaGFuZ2UgOiByb3V0aW5lQXV0aC5hdXRoTGV2ZWw6XCIgKyByb3V0aW5lQXV0aC5hdXRoTGV2ZWwpXHJcbiAgICAgICAgaWYgKHJvdXRpbmVBdXRoLmF1dGhMZXZlbCA9PSAwKSB7XHJcbiAgICAgICAgICBsZXQgZGlhbG9nU3RydWMgPSB7XHJcbiAgICAgICAgICAgIG1zZzogdGhpcy5ub0FjY2Vzc01zZyxcclxuICAgICAgICAgICAgdGl0bGU6IFwiV2FybmluZ1wiLFxyXG4gICAgICAgICAgICBpbmZvOiBudWxsLFxyXG4gICAgICAgICAgICBvYmplY3Q6IHRoaXMsXHJcbiAgICAgICAgICAgIGFjdGlvbjogdGhpcy5Pa0FjdGlvbnMsXHJcbiAgICAgICAgICAgIGNhbGxiYWNrOiBudWxsXHJcbiAgICAgICAgICB9O1xyXG4gICAgICAgICAgdGhpcy5zaG93Q29uZmlybWF0aW9uKGRpYWxvZ1N0cnVjKTtcclxuICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICBvYmplY3Quc2VsZWN0ZWRJZCA9IGZvY3VzZWRFdmVudC5pZDtcclxuICAgICAgICAgIHRoaXMuc2Vzc2lvblBhcmFtc1tcIlBydlVzZXJGbG93XCJdID0gXCJcIjtcclxuICAgICAgICAgIHRoaXMuc2Vzc2lvblBhcmFtc1tcIlBydlVzZXJDRFJcIl0gPSBcIlwiO1xyXG4gICBcclxuICAgICAgICAgIGlmIChvYmplY3Quc2VsZWN0ZWRJZCA9PSBcIlBSVkZMT1dcIikge1xyXG4gICAgICAgICAgICB0aGlzLnNlc3Npb25QYXJhbXNbXCJQcnZVc2VyRmxvd1wiXSA9IFwiUFJWX0JMRFwiO1xyXG4gICAgICAgICAgICB0aGlzLnNlc3Npb25QYXJhbXNbXCJQcnZVc2VyQ0RSXCJdID0gXCJQUlZfQ0RSXCI7XHJcbiAgICAgICAgICAgIG9iamVjdC5zaG93UGFuZWxiYXIgPSBmYWxzZTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGlmIChvYmplY3Quc2VsZWN0ZWRJZCA9PSBcIkNDTUNBVFwiKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2Vzc2lvblBhcmFtc1tcIlBydlVzZXJGbG93XCJdID0gXCJDUkNfQ0FUXCI7XHJcbiAgICAgICAgICAgIHRoaXMuc2Vzc2lvblBhcmFtc1tcIlBydlVzZXJDRFJcIl0gPSBcIkNSQ19VU0VSX0lORk9cIjtcclxuICAgICAgICAgICAgb2JqZWN0LnNob3dQYW5lbGJhciA9IGZhbHNlO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgaWYgKG9iamVjdC5zZWxlY3RlZElkID09IFwiQ0NNR1JQXCIpIHtcclxuICAgICAgICAgICAgdGhpcy5zZXNzaW9uUGFyYW1zW1wiUHJ2VXNlckZsb3dcIl0gPSBcIkNSQ19HUk9VUFwiO1xyXG4gICAgICAgICAgICB0aGlzLnNlc3Npb25QYXJhbXNbXCJQcnZVc2VyQ0RSXCJdID0gXCJDUkNfR1JPVVBfSU5GT1wiO1xyXG4gICAgICAgICAgICBvYmplY3Quc2hvd1BhbmVsYmFyID0gZmFsc2U7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBpZiAob2JqZWN0LnNlbGVjdGVkSWQgPT0gXCJDTUdDQVRcIikge1xyXG4gICAgICAgICAgICB0aGlzLnNlc3Npb25QYXJhbXNbXCJQcnZVc2VyRmxvd1wiXSA9IFwiQ0FNX0NBVFwiO1xyXG4gICAgICAgICAgICB0aGlzLnNlc3Npb25QYXJhbXNbXCJQcnZVc2VyQ0RSXCJdID0gXCJDQU1fVVNFUl9JTkZPXCI7XHJcbiAgICAgICAgICAgIG9iamVjdC5zaG93UGFuZWxiYXIgPSBmYWxzZTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGlmIChvYmplY3Quc2VsZWN0ZWRJZCA9PSBcIkNNR0dSUFwiKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2Vzc2lvblBhcmFtc1tcIlBydlVzZXJGbG93XCJdID0gXCJDQU1fR1JPVVBcIjtcclxuICAgICAgICAgICAgdGhpcy5zZXNzaW9uUGFyYW1zW1wiUHJ2VXNlckNEUlwiXSA9IFwiQ0FNX0dST1VQX0lORk9cIjtcclxuICAgICAgICAgICAgb2JqZWN0LnNob3dQYW5lbGJhciA9IGZhbHNlO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgaWYgKG9iamVjdC5zZWxlY3RlZElkID09IFwiQklMTElOR1wiKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2Vzc2lvblBhcmFtc1tcIlBydlVzZXJGbG93XCJdID0gXCJCSUxMSU5HXCI7XHJcbiAgICAgICAgICAgIHRoaXMuc2Vzc2lvblBhcmFtc1tcIlBydlVzZXJDRFJcIl0gPSBcIkJJTExJTkdfQ0RSXCI7XHJcbiAgICAgICAgICAgIG9iamVjdC5zaG93UGFuZWxiYXIgPSBmYWxzZTtcclxuICAgICAgICAgIH1cclxuICBcclxuICAgICAgICAgIGlmIChvYmplY3Quc2VsZWN0ZWRJZC5zdGFydHNXaXRoKFwiUE9SVEFMX1wiKSkvL0Z1YWQgOiBSTkRcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy5zZXNzaW9uUGFyYW1zW1wiUE9SVEFMX0ZPUk1cIl0gPSBmb2N1c2VkRXZlbnQuaWQ7XHJcbiAgICAgICAgICAgIGZvY3VzZWRFdmVudC5pZCA9ICdEU1BQT1JUQUwnO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLy9GVUFEOiBjaGVjayBpZiBiZWxvdyBjb2RlIHRpbGwgZWxzZSBpcyBuZWVkZWRcclxuICAgICAgICBpZiAodGhpcy5wYXJhbUNvbmZpZy5ERUJVR19GTEFHKSBjb25zb2xlLmxvZyhcIiBpbiBzdGF0ZUNoYW5nZSA6IGhlcmUxXCIpO1xyXG4gICAgICAgICAgaWYgKG9iamVjdC5yb3V0ZXIucm91dGVyU3RhdGUuc25hcHNob3QudXJsID09ICgnLycgKyBmb2N1c2VkRXZlbnQuaWQpKSB7XHJcbiAgICAgICAgICBpZiAodGhpcy5wYXJhbUNvbmZpZy5ERUJVR19GTEFHKSBjb25zb2xlLmxvZyhcIiBpbiBzdGF0ZUNoYW5nZSA6IGhlcmUyXCIpO1xyXG4gICAgICAgICAgb2JqZWN0LnJvdXRlci5uYXZpZ2F0ZUJ5VXJsKCcnLCB7IHNraXBMb2NhdGlvbkNoYW5nZTogdHJ1ZSB9KS50aGVuKCgpID0+e1xyXG4gICAgICAgICAgICBpZiAodGhpcy5wYXJhbUNvbmZpZy5ERUJVR19GTEFHKSBjb25zb2xlLmxvZyhcIiBpbiBzdGF0ZUNoYW5nZSA6IGhlcmUzXCIpO1xyXG4gICAgICAgICAgICAgIG9iamVjdC5yb3V0ZXIubmF2aWdhdGUoWycvJyArIGZvY3VzZWRFdmVudC5pZF0sIHsgc2tpcExvY2F0aW9uQ2hhbmdlOiB0cnVlLCByZXBsYWNlVXJsOiB0cnVlLCBwcmVzZXJ2ZUZyYWdtZW50OiBmYWxzZSB9KVxyXG4gICAgICAgICAgICBpZiAodGhpcy5wYXJhbUNvbmZpZy5ERUJVR19GTEFHKSBjb25zb2xlLmxvZyhcIiBpbiBzdGF0ZUNoYW5nZSA6IGhlcmU0XCIpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICBvYmplY3Qucm91dGVyLm5hdmlnYXRlKFsnLycgKyBmb2N1c2VkRXZlbnQuaWRdLCB7IHNraXBMb2NhdGlvbkNoYW5nZTogdHJ1ZSwgcmVwbGFjZVVybDogdHJ1ZSwgcHJlc2VydmVGcmFnbWVudDogZmFsc2UgfSk7XHJcbiAgICAgICAgICBpZiAodGhpcy5wYXJhbUNvbmZpZy5ERUJVR19GTEFHKSBjb25zb2xlLmxvZyhcImluIHN0YXRlQ2hhbmdlIDogXCIsZm9jdXNlZEV2ZW50LmlkKTtcclxuICAgICAgICB9XHJcbiAgXHJcbiAgICAgICAgICBpZiAob2JqZWN0LmlzUGhvbmVQb3J0cmFpdCl7XHJcbiAgICAgICAgICAgIG9iamVjdC5zaG93UGFuZWxiYXIgPSBmYWxzZTtcclxuICAgICAgICAgIH1cclxuICBcclxuICAgICAgICAgIC8vdGhpcy5zdGFyU2VydmljZXMuc2V0UlRMKCk7XHJcbiAgXHJcbiAgICAgICAgICAvL3RoaXMuc2hvd1BhbmVsYmFyID0gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgXHJcbiAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuICBwdWJsaWMgc2V0UGFuZWxCYXIob2JqZWN0OmFueSkge1xyXG5cclxuICAgIGlmICghb2JqZWN0LnN0YXRpY01lbnUpIHtcclxuICAgICAgb2JqZWN0LkJvZHkgPSBbXTtcclxuICAgICAgbGV0IE5ld1ZhbDphbnkgPSB7XHJcbiAgICAgIE1FTlUgOiBvYmplY3QuY3VycmVudE1lbnUudG9VcHBlckNhc2UoKSxcclxuICAgICAgVVNFUk5BTUUgOiBvYmplY3Quc3RhclNlcnZpY2VzLnNlc3Npb25QYXJhbXMuVVNFUk5BTUUudG9VcHBlckNhc2UoKSxcclxuICAgICAgTEFOR1VBR0VfTkFNRSA6IG9iamVjdC5wYXJhbUNvbmZpZy51c2VyTGFuZy50b1VwcGVyQ2FzZSgpLFxyXG4gICAgICBISURERU4gOiAnMCdcclxuICAgIH07XHJcblxyXG4gICAgICBOZXdWYWxbXCJfUVVFUllcIl0gPSBcIkdFVF9NRU5VX1JPVVRJTkVTXCI7XHJcblxyXG4gICAgICBvYmplY3QuYWRkVG9Cb2R5KE5ld1ZhbCk7XHJcblxyXG4gICAgICBsZXQgTmV3VmFsMTphbnkgPSB7XHJcbiAgICAgICAgTUVOVTogXCJcIixcclxuICAgICAgICBVU0VSTkFNRTogb2JqZWN0LnN0YXJTZXJ2aWNlcy5zZXNzaW9uUGFyYW1zLlVTRVJOQU1FLnRvVXBwZXJDYXNlKClcclxuICAgIH07XHJcblxyXG4gICAgICBOZXdWYWwxW1wiX1FVRVJZXCJdID0gXCJHRVRfUk9VVElORVNfQVVUSE9SSVRZXCI7XHJcblxyXG4gICAgICBvYmplY3QuYWRkVG9Cb2R5KE5ld1ZhbDEpO1xyXG5cclxuICAgIHRoaXMuZmV0Y2hNZW51KG9iamVjdCwgdGhpcy5oYW5kbGVGZXRjaGVkUGFuZWxCYXIpO1xyXG4gIH1cclxufVxyXG5cclxuXHJcblxyXG4gIHB1YmxpYyBoYW5kbGVGZXRjaGVkUGFuZWxCYXIob2JqZWN0OmFueSwgZGF0YTphbnksIHNob3dFbXB0eTphbnkpIHtcclxuICAgIGZ1bmN0aW9uIGNoZWNrQXV0aERhdGEocm91dGluZV9uYW1lOmFueSwgYXV0aERhdGE6YW55KSB7XHJcbiAgICAgIGxldCBpID0gMDtcclxuICAgICAgbGV0IHJvdXRpbmVBdXRoO1xyXG4gICAgICB3aGlsZSAoaSA8IGF1dGhEYXRhLmxlbmd0aCkge1xyXG4gICAgICAgIGlmIChhdXRoRGF0YVtpXS5ST1VUSU5FX05BTUUgPT0gcm91dGluZV9uYW1lKSB7XHJcbiAgICAgICAgICByb3V0aW5lQXV0aCA9IGF1dGhEYXRhW2ldO1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGkrKztcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gcm91dGluZUF1dGg7XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBmb3JtYXREYXRhKGFycjphbnksIGF1dGhEYXRhOmFueSwgc2hvd0VtcHR5OmFueSkge1xyXG4gICAgICBsZXQgbWVudTphbnkgPSBbXTtcclxuICAgICAgbGV0IGl0ZW1zOmFueSA9IFtdO1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhcnIubGVuZ3RoOyBpKyspIHtcclxuICAgICAgaWYgKG9iamVjdC5wYXJhbUNvbmZpZy5ERUJVR19GTEFHKSBjb25zb2xlLmxvZyhcImFycltpXTpcIiwgYXJyW2ldKTtcclxuICAgICAgbGV0IHR5cGUgPSBhcnJbaV0uY2hvaWNlX3R5cGUuY2hhckF0KDApO1xyXG4gICAgICBpZiAodHlwZSA9PSBcIk1cIikge1xyXG4gICAgICAgIGlmIChpdGVtcy5sZW5ndGggIT0gMCkge1xyXG4gICAgICAgICAgbGV0IGl0ZW0gPSB7XHJcbiAgICAgICAgICAgIHRleHQ6IG1lbnVJdGVtLnRleHQsXHJcbiAgICAgICAgICAgIGNob2ljZTogbWVudUl0ZW0uY2hvaWNlLFxyXG4gICAgICAgICAgICBpdGVtczogaXRlbXNcclxuICAgICAgICAgIH07XHJcbiAgICAgICAgICBtZW51LnB1c2goaXRlbSk7XHJcbiAgICAgICAgICBpdGVtcyA9IFtdO1xyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgbWVudUl0ZW06YW55ID0ge1xyXG4gICAgICAgICAgdGV4dDogYXJyW2ldLnRleHQsXHJcbiAgICAgICAgICBjaG9pY2U6IGFycltpXS5jaG9pY2VcclxuICAgICAgICB9O1xyXG4gICAgICAgIC8vbWVudS5wdXNoKGl0ZW0pO1xyXG4gICAgICB9XHJcbiAgICAgIGVsc2UgaWYgKHR5cGUgPT0gXCJSXCIpIHtcclxuICAgICAgICBpZiAob2JqZWN0LnBhcmFtQ29uZmlnLkRFQlVHX0ZMQUcpIGNvbnNvbGUubG9nKFwiYXV0aERhdGE6XCIsIGF1dGhEYXRhLCBcImFycltpXTpcIiwgYXJyW2ldKTtcclxuICAgICAgICBsZXQgcm91dGluZUF1dGggPSBjaGVja0F1dGhEYXRhKGFycltpXS5jaG9pY2UsIGF1dGhEYXRhKTtcclxuICAgICAgICBpZiAodHlwZW9mIHJvdXRpbmVBdXRoICE9PSBcInVuZGVmaW5lZFwiKSB7XHJcbiAgICAgICAgICBpZiAob2JqZWN0LnBhcmFtQ29uZmlnLkRFQlVHX0ZMQUcpIGNvbnNvbGUubG9nKFwiYXJyW2ldLmNob2ljZTpcIiArIGFycltpXS5jaG9pY2UgKyBcIiAgcm91dGluZUF1dGguRElTUF9GTEFHOlwiICsgcm91dGluZUF1dGguRElTUF9GTEFHICsgXCIgcm91dGluZUF1dGguQVVUSExFVkVMIDpcIiArIHJvdXRpbmVBdXRoLkFVVEhMRVZFTClcclxuICAgICAgICAgIGlmIChyb3V0aW5lQXV0aC5ESVNQX0ZMQUcgIT0gXCJOXCIpIC8vICYmIChyb3V0aW5lQXV0aC5BVVRITEVWRUwgIT0gMCkgKVxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBsZXQgcm91dGluZUl0ZW0gPSB7XHJcbiAgICAgICAgICAgICAgdGV4dDogYXJyW2ldLnRleHQsXHJcbiAgICAgICAgICAgICAgY2hvaWNlOiBhcnJbaV0uY2hvaWNlLFxyXG4gICAgICAgICAgICAgIGF1dGhMZXZlbDogcm91dGluZUF1dGguQVVUSExFVkVMLFxyXG4gICAgICAgICAgICAgIHJvdXRpbmVEZXNjOiByb3V0aW5lQXV0aC5ST1VUSU5FX0RFU0MsXHJcbiAgICAgICAgICAgICAgcm91dGluZVZlcjogcm91dGluZUF1dGguUk9VVF9WRVIsXHJcbiAgICAgICAgICAgICAgcm91dGVyTGluazogXCIvXCIgKyBhcnJbaV0uY2hvaWNlXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIGl0ZW1zLnB1c2gocm91dGluZUl0ZW0pO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAob2JqZWN0LnBhcmFtQ29uZmlnLkRFQlVHX0ZMQUcpIGNvbnNvbGUubG9nKFwiLS0taXRlbXM6XCIsIGl0ZW1zKTtcclxuICAgICAgICBcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgaWYgKGl0ZW1zLmxlbmd0aCAhPSAwKSB7XHJcbiAgICAgIGxldCBpdGVtID0ge1xyXG4gICAgICAgIHRleHQ6IG1lbnVJdGVtLnRleHQsXHJcbiAgICAgICAgY2hvaWNlOiBtZW51SXRlbS5jaG9pY2UsXHJcbiAgICAgICAgaXRlbXM6IGl0ZW1zXHJcbiAgICAgIH07XHJcbiAgICAgIG1lbnUucHVzaChpdGVtKTtcclxuICAgICAgaXRlbXMgPSBbXTtcclxuICAgIH1cclxuICAgIGVsc2UgaWYgKHNob3dFbXB0eSAmJiAodHlwZW9mIG1lbnVJdGVtICE9PSBcInVuZGVmaW5lZFwiKSl7XHJcbiAgICAgIGxldCBpdGVtID0ge1xyXG4gICAgICAgIHRleHQ6IG1lbnVJdGVtLnRleHQsXHJcbiAgICAgICAgY2hvaWNlOiBtZW51SXRlbS5jaG9pY2UsXHJcbiAgICAgICAgaXRlbXM6IFtdXHJcbiAgICAgIH07XHJcbiAgICAgIG1lbnUucHVzaChpdGVtKTtcclxuICAgIFxyXG4gICAgfVxyXG5cclxuICAgICAgcmV0dXJuIG1lbnU7XHJcbn1cclxuICBvYmplY3QubWVudSA9IGZvcm1hdERhdGEoZGF0YVswXS5kYXRhLCBkYXRhWzFdLmRhdGEsIHNob3dFbXB0eSk7XHJcblxyXG4gIG9iamVjdC5wYW5lbEl0ZW1zID0gb2JqZWN0Lm1lbnU7XHJcbm9iamVjdC5tZW51SXRlbXNIb3JpeiA9IG9iamVjdC5tZW51O1xyXG4gIGxldCBwYXJhbUNvbmZpZyA9IHtcclxuICAgIFwiTmFtZVwiOiBcIm1lbnVcIixcclxuICAgIFwiVmFsXCI6IG9iamVjdC5tZW51XHJcbiAgfTtcclxuICBzZXRQYXJhbUNvbmZpZyhwYXJhbUNvbmZpZyk7XHJcblxyXG5cclxufVxyXG5cclxucHVibGljICBzbGVlcChtczphbnkpIHtcclxuICByZXR1cm4gbmV3IFByb21pc2UocmVzb2x2ZSA9PiBzZXRUaW1lb3V0KHJlc29sdmUsIG1zKSk7XHJcbn1cclxuICBwcml2YXRlIGNvbW1pdEJvZHk6YW55ID0gW107XHJcbnB1YmxpYyBpblRyYW5zID0gZmFsc2U7XHJcbiAgcHVibGljIGlzUGhvbmVQb3J0cmFpdCA9IGZhbHNlO1xyXG5wcml2YXRlIEJvZHk6YW55ID0gW107XHJcbnB1YmxpYyBjb21taXRDb21tYW5kcyA9IFsnSU5TRVJUJywgJ1VQREFURScsICdERUxFVEUnXTtcclxuXHJcbiAgcHVibGljIGJlZ2luVHJhbnMoKSB7XHJcbiAgICB0aGlzLmNvbW1pdEJvZHkgPSBbXTtcclxuICB0aGlzLmluVHJhbnMgPSB0cnVlO1xyXG5cclxufVxyXG4gIHB1YmxpYyBlbmRUcmFucyhvYmplY3Q6YW55LCBjb21taXQ6YW55KSB7XHJcbiAgbGV0IFBhZ2UgPSBcIiZfdHJhbnM9WVwiO1xyXG4gICAgbGV0IHRhYmxlSW5mbzphbnk7XHJcbiAgICBpZiAoY29tbWl0ICYmIHRoaXMuY29tbWl0Qm9keS5sZW5ndGggIT0gMCkge1xyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKHJlc29sdmUgPT4ge1xyXG4gICAgICB0aGlzLnBvc3QodGhpcywgUGFnZSwgdGhpcy5jb21taXRCb2R5KS5zdWJzY3JpYmUocmVzdWx0ID0+IHtcclxuICAgICAgICAgIHRoaXMuY29tbWl0Qm9keSA9IFtdO1xyXG4gICAgICAgIHRoaXMuaW5UcmFucyA9IGZhbHNlO1xyXG5cclxuICAgICAgICB0YWJsZUluZm8gPSByZXN1bHQuZGF0YVswXS5kYXRhO1xyXG4gICAgICAgIHJldHVybiByZXNvbHZlKHRhYmxlSW5mbyk7XHJcbiAgICAgIH0sXHJcbiAgICAgICAgZXJyID0+IHtcclxuICAgICAgICAgIG9iamVjdC5GT1JNX1RSSUdHRVJfRkFJTFVSRSA9IHRydWU7XHJcbiAgICAgICAgICAgIHRoaXMuY29tbWl0Qm9keSA9IFtdO1xyXG4gICAgICAgICAgdGhpcy5pblRyYW5zID0gZmFsc2U7XHJcbiAgICAgICAgICAvL2FsZXJ0KCdlcnJvcjonICsgZXJyLm1lc3NhZ2UpO1xyXG4gICAgICAgICAgdGhpcy5zaG93RXJyb3JNc2cob2JqZWN0LCBlcnIpO1xyXG4gICAgICAgICAgcmV0dXJuIHJlc29sdmUodGFibGVJbmZvKTtcclxuICAgICAgICB9KTtcclxuICAgIH0pO1xyXG4gIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICB0aGlzLmNvbW1pdEJvZHkgPSBbXTtcclxuICAgIHRoaXMuaW5UcmFucyA9IGZhbHNlO1xyXG4gICAgICByZXR1cm4gbnVsbDtcclxuICB9XHJcblxyXG5cclxufVxyXG4vLyBwdWJsaWMgYWRkVG9Cb2R5KE5ld1ZhbCkge1xyXG4vLyAgIHRoaXMuQm9keS5wdXNoKE5ld1ZhbCk7XHJcbi8vIH1cclxuICBwdWJsaWMgZXhlY1NRTEJvZHkob2JqZWN0OmFueSwgQm9keTphbnksREJMb2M6YW55KSB7XHJcbiAgZnVuY3Rpb24gZ2V0Rmlyc3RXb3JkKHN0cjphbnkpIHtcclxuICAgIGxldCBteUFycmF5ID0gc3RyLnNwbGl0KFwiX1wiKTtcclxuICAgIHJldHVybiBteUFycmF5WzBdO1xyXG4gIH1cclxuICBcclxuICBvYmplY3QuRk9STV9UUklHR0VSX0ZBSUxVUkUgPSBmYWxzZTtcclxuICBsZXQgUGFnZSA9IFwiJl90cmFucz1OXCI7XHJcbiAgaWYgKERCTG9jICE9IFwiXCIpXHJcbiAgICBQYWdlID0gUGFnZSArIFwiJkRCTG9jPVwiICsgREJMb2M7XHJcbiAgbGV0IHRhYmxlSW5mbzphbnk7XHJcblxyXG4gIG9iamVjdC5OT1RGT1VORCA9IGZhbHNlO1xyXG4gIGlmICh0aGlzLmluVHJhbnMpIHtcclxuICAgIGxldCBmaXJzdFdvcmQgPSBnZXRGaXJzdFdvcmQoQm9keVswXS5fUVVFUlkpLnRvVXBwZXJDYXNlKCk7XHJcbiAgICBcclxuICAgIGxldCBpc0NvbW1pdENvbW1hbmQgPSB0aGlzLmNvbW1pdENvbW1hbmRzLmluY2x1ZGVzKGZpcnN0V29yZCk7XHJcbiAgICBpZiAoaXNDb21taXRDb21tYW5kKSB7XHJcbiAgICAgIHRoaXMuY29tbWl0Qm9keS5wdXNoKEJvZHlbMF0pO1xyXG4gICAgICByZXR1cm4gdGFibGVJbmZvO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIG5ldyBQcm9taXNlKHJlc29sdmUgPT4ge1xyXG4gICAgLy9jb25zb2xlLmxvZyAoXCJjaGVjazpkaXJ0eSB0ZXN0eCBleGVjU1FMQm9keSAyXCIpO1xyXG4gICAgdGhpcy5wb3N0KHRoaXMsIFBhZ2UsIEJvZHkpLnN1YnNjcmliZShyZXN1bHQgPT4ge1xyXG4gICAgICAvL2NvbnNvbGUubG9nIChcImNoZWNrOmRpcnR5IHRlc3R4IGV4ZWNTUUxCb2R5IDNcIik7XHJcbiAgICAgIHRhYmxlSW5mbyA9IHJlc3VsdC5kYXRhO1xyXG4gICAgICAvLyBpZiAocmVzdWx0LmRhdGEubGVuZ3RoID09IDApXHJcbiAgICAgIC8vICAgb2JqZWN0Lk5PVEZPVU5EID0gdHJ1ZTtcclxuICAgICAgcmV0dXJuIHJlc29sdmUodGFibGVJbmZvKTtcclxuICAgIH0sXHJcbiAgICAgIGVyciA9PiB7XHJcbiAgICAgICAgb2JqZWN0LkZPUk1fVFJJR0dFUl9GQUlMVVJFID0gdHJ1ZTtcclxuICAgICAgICBhbGVydCgnZXJyb3I6JyArIGVyci5tZXNzYWdlKTtcclxuICAgICAgICByZXR1cm4gcmVzb2x2ZSh0YWJsZUluZm8pO1xyXG4gICAgICB9KTtcclxuICB9KTtcclxuXHJcblxyXG59XHJcbiAgcHVibGljIGV4ZWNTUUwob2JqZWN0OmFueSwgc3FsU3RtdDphbnkpIHtcclxuICAgIGZ1bmN0aW9uIGdldEZpcnN0V29yZChzdHI6YW55KSB7XHJcbiAgICAgIGxldCBzcGFjZUluZGV4ID0gc3RyLnRyaW0oKS5pbmRleE9mKCcgJyk7XHJcbiAgICByZXR1cm4gc3BhY2VJbmRleCA9PT0gLTEgPyBzdHIgOiBzdHIuc3Vic3RyKDAsIHNwYWNlSW5kZXgpO1xyXG4gIH1cclxuXHJcbiAgb2JqZWN0LkZPUk1fVFJJR0dFUl9GQUlMVVJFID0gZmFsc2U7XHJcbiAgbGV0IFBhZ2UgPSBcIiZfdHJhbnM9TlwiO1xyXG4gIHRoaXMuQm9keSA9IFtdO1xyXG4gICAgbGV0IE5ld1ZhbDphbnkgPSB7fTtcclxuICBOZXdWYWxbXCJfUVVFUllcIl0gPSBcIkVYRUNTUUxcIjtcclxuICBOZXdWYWxbXCJfU1RNVFwiXSA9IHNxbFN0bXQ7XHJcbiAgICBsZXQgdGFibGVJbmZvOmFueTtcclxuXHJcbiAgb2JqZWN0Lk5PVEZPVU5EID0gZmFsc2U7XHJcbiAgaWYgKHRoaXMuaW5UcmFucykge1xyXG4gICAgbGV0IGZpcnN0V29yZCA9IGdldEZpcnN0V29yZChzcWxTdG10KS50b1VwcGVyQ2FzZSgpO1xyXG4gICAgXHJcbiAgICBsZXQgaXNDb21taXRDb21tYW5kID0gdGhpcy5jb21taXRDb21tYW5kcy5pbmNsdWRlcyhmaXJzdFdvcmQpO1xyXG4gICAgaWYgKGlzQ29tbWl0Q29tbWFuZCkge1xyXG4gICAgICB0aGlzLmNvbW1pdEJvZHkucHVzaChOZXdWYWwpO1xyXG4gICAgICByZXR1cm4gdGFibGVJbmZvO1xyXG4gICAgfVxyXG4gIH1cclxuICB0aGlzLkJvZHkgPSB0aGlzLmFkZFRvQm9keShOZXdWYWwsIHRoaXMuQm9keSk7XHJcblxyXG4gIHJldHVybiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHtcclxuICAgIHRoaXMucG9zdCh0aGlzLCBQYWdlLCB0aGlzLkJvZHkpLnN1YnNjcmliZShyZXN1bHQgPT4ge1xyXG4gICAgICB0aGlzLkJvZHkgPSBbXTtcclxuICAgICAgdGFibGVJbmZvID0gcmVzdWx0LmRhdGFbMF0uZGF0YTtcclxuICAgICAgaWYgKHJlc3VsdC5kYXRhWzBdLnJvd0NvdW50ID09IDApXHJcbiAgICAgICAgb2JqZWN0Lk5PVEZPVU5EID0gdHJ1ZTtcclxuICAgICAgcmV0dXJuIHJlc29sdmUodGFibGVJbmZvKTtcclxuICAgIH0sXHJcbiAgICAgIGVyciA9PiB7XHJcbiAgICAgICAgb2JqZWN0LkZPUk1fVFJJR0dFUl9GQUlMVVJFID0gdHJ1ZTtcclxuICAgICAgICBhbGVydCgnZXJyb3I6JyArIGVyci5tZXNzYWdlKTtcclxuICAgICAgICByZXR1cm4gcmVzb2x2ZSh0YWJsZUluZm8pO1xyXG4gICAgICB9KTtcclxuICB9KTtcclxufVxyXG5cclxuXHJcbi8vLy8vLy8vXHJcbiBcclxucHVibGljIGF0dF9pbWdfZ2V0RmlsZUxpbmsoZmllbGRfZGF0YSxvYmplY3QpIHtcclxuICBsZXQgZmlsZUxpbms6YW55ID0gXCJcIjtcclxuICBpZiAoZmllbGRfZGF0YSA9PSBudWxsKVxyXG4gICAgcmV0dXJuIGZpbGVMaW5rO1xyXG4gIGZpZWxkX2RhdGEgPSBmaWVsZF9kYXRhLnRyaW0oKTtcclxuICB0cnkge1xyXG4gICAgZmllbGRfZGF0YSA9IEpTT04ucGFyc2UoZmllbGRfZGF0YSk7XHJcbiAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAvL2NvbnNvbGUubG9nIChcIkVycm9yIHBhcnNpbmcgOlwiLGZpZWxkX2RhdGEpO1xyXG4gICAgICByZXR1cm4gZmlsZUxpbms7XHJcbiAgfVxyXG4gICAgLy9jb25zb2xlLmxvZyhcImdldEZpbGVMaW5rOmZpZWxkX2RhdGE6XCIsIGZpZWxkX2RhdGEsIHR5cGVvZiBmaWVsZF9kYXRhKSAgICBcclxuICAgIC8vY29uc29sZS5sb2coXCJnZXRGaWxlTGluazpmaWVsZF9kYXRhOlwiLCBmaWVsZF9kYXRhKVxyXG4gICAgaWYgKHR5cGVvZiBmaWVsZF9kYXRhID09IFwib2JqZWN0XCIpXHJcbiAgICAgIGZpbGVMaW5rID0gb2JqZWN0LkF0dER3blVybCArIGVuY29kZVVSSShmaWVsZF9kYXRhWzBdLm5hbWUpO1xyXG4gICAgLy9jb25zb2xlLmxvZyhcImdldEZpbGVMaW5rOmZpbGVMaW5rOlwiLCBmaWxlTGluaylcclxuICByZXR1cm4gZmlsZUxpbms7XHJcbn1cclxucHVibGljIGF0dF9pbWdfZ2V0QXR0KGRhdGE6YW55LG9iamVjdDphbnkpIHtcclxuICBsZXQgYXR0cyA9IFwiXCI7XHJcbiAvLyBjb25zb2xlLmxvZyhcImdldEF0dF9kYXRhOlwiLCBkYXRhKTtcclxuICAgIGxldCB2YWxzID1cclxuICAgICAgW3tuYW1lOlwiXCIsXHJcbiAgICAgIHNpemU6XCJcIn1cclxuICAgICAgXTtcclxuICB0cnkge1xyXG4gICAgdmFscyA9IEpTT04ucGFyc2UoZGF0YSk7XHJcbiAgfSBjYXRjaCAoZSkge1xyXG4gICAgICBjb25zb2xlLmxvZyAoXCJFcnJvciBwYXJzaW5nIDozOlwiLGRhdGEpO1xyXG4gICAgICByZXR1cm4gYXR0cztcclxuICB9XHJcbiAgLy9pZiAoKGRhdGEgIT0gXCJcIikgJiYgKGRhdGEgIT0gXCJbXVwiKSAmJiAoZGF0YSAhPSBudWxsKSkge1xyXG4gICAgLy92YWxzID0gSlNPTi5wYXJzZShkYXRhKTtcclxuICAgIGNvbnNvbGUubG9nKFwiZ2V0QXR0X2RhdGE6XCIsIHZhbHMsIHR5cGVvZiB2YWxzKTtcclxuICAgIGlmICh0eXBlb2YgdmFscyA9PSBcIm9iamVjdFwiKXtcclxuICAgICAgdmFscy5mb3JFYWNoKHZhbCA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJ2YWw6XCIsIHZhbClcclxuICAgICAgICBhdHRzID0gYXR0cyArIFwiPFwiICsgdmFsLm5hbWUgKyBcIiBTaXplOlwiICsgdmFsLnNpemUgKyBcIj5cIjtcclxuICAgICAgfSlcclxuICAgIH1cclxuICAvL31cclxuICBjb25zb2xlLmxvZyhcImF0dHM6XCIsIGF0dHMpXHJcbiAgcmV0dXJuIGF0dHM7XHJcbn1cclxucHVibGljIGF0dF9pbWdfcG9wdWxhdGVBcnJzKGZvcm1Hcm91cDphbnksb2JqZWN0OmFueSl7XHJcbiAgLy9jb25zb2xlLmxvZyhcImF0dF9pbWdfcG9wdWxhdGVBcnJzOmZvcm1Hcm91cDpcIiwgZm9ybUdyb3VwLCBvYmplY3QuYXR0X2Fyciwgb2JqZWN0LmltZ19hcnIpXHJcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBvYmplY3QuYXR0X2Fyci5sZW5ndGg7IGkrKykge1xyXG4gICAgaWYgKGZvcm1Hcm91cFtvYmplY3QuYXR0X2FycltpXV0udHJpbSgpICE9IFwiXCIpIHtcclxuICAgICAgdHJ5IHtcclxuICAgICAgICBvYmplY3QubXlGaWxlc1tvYmplY3QuYXR0X2FycltpXV0gPSBKU09OLnBhcnNlKGZvcm1Hcm91cFtvYmplY3QuYXR0X2FycltpXV0pO1xyXG4gICAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgICAgICAvL2NvbnNvbGUubG9nIChcIkVycm9yIHBhcnNpbmcgOlwiLGZpZWxkX2RhdGEpO1xyXG4gICAgICAgICAgcmV0dXJuIDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICBmb3IgKGxldCBpID0gMDsgaSA8IG9iamVjdC5pbWdfYXJyLmxlbmd0aDsgaSsrKSB7XHJcbiAgICBpZiAoZm9ybUdyb3VwW29iamVjdC5pbWdfYXJyW2ldXSAhPSBudWxsKXtcclxuICAgICAgaWYgKGZvcm1Hcm91cFtvYmplY3QuaW1nX2FycltpXV0udHJpbSgpICE9IFwiXCIpIG9iamVjdC5teUZpbGVzW29iamVjdC5pbWdfYXJyW2ldXSA9IEpTT04ucGFyc2UoZm9ybUdyb3VwW29iamVjdC5pbWdfYXJyW2ldXSk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgb2JqZWN0LmF0dF9hcnIubGVuZ3RoOyBpKyspIHtcclxuICAgIC8vY29uc29sZS5sb2coXCJvYmplY3QuYXR0X2FycltpXTpcIiwgb2JqZWN0LmF0dF9hcnJbaV0pXHJcbiAgICBpZiAoZm9ybUdyb3VwW29iamVjdC5hdHRfYXJyW2ldXSAhPSBcIlwiKSB7XHJcbiAgICAgIGxldCBpdGVtczE6YW55ID1bXTtcclxuICAgICAgbGV0IGZpZWxkX2RhdGEgPSBmb3JtR3JvdXBbb2JqZWN0LmF0dF9hcnJbaV1dO1xyXG5cclxuICAgICAgdHJ5IHtcclxuICAgICAgICBmaWVsZF9kYXRhID0gSlNPTi5wYXJzZShmaWVsZF9kYXRhKTtcclxuICAgICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgICAgY29uc29sZS5sb2cgKFwiRXJyb3IgcGFyc2luZyA6NDpcIixmaWVsZF9kYXRhKTtcclxuICAgICAgICAgIGZpZWxkX2RhdGEgPSBudWxsO1xyXG4gICAgICAgICAgLy9yZXR1cm4gYXR0cztcclxuICAgICAgfVxyXG4gICAgICAvL2ZpZWxkX2RhdGEgPSBKU09OLnBhcnNlKGZpZWxkX2RhdGEpO1xyXG4gICAgICBpZiAoZmllbGRfZGF0YSAhPSBudWxsKXtcclxuICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IGZpZWxkX2RhdGEubGVuZ3RoOyBqKyspIHtcclxuICAgICAgICAgIGxldCBpdGVtID1cclxuICAgICAgICAgICAgeyB0aXRsZTogZmllbGRfZGF0YVtqXS5uYW1lLCB1cmw6IG9iamVjdC5BdHREd25VcmwgKyBlbmNvZGVVUkkoZmllbGRfZGF0YVtqXS5uYW1lKSB9XHJcbiAgICAgICAgICBpdGVtczEucHVzaChpdGVtKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgb2JqZWN0LmltZ19nYWxsZXJ5W29iamVjdC5hdHRfYXJyW2ldXSA9IGl0ZW1zMTtcclxuICAgIH1cclxuICAgIC8vY29uc29sZS5sb2coXCJpbWdfZ2FsbGVyeTpcIiwgb2JqZWN0LmltZ19nYWxsZXJ5KVxyXG4gIH1cclxuICBpZiAodHlwZW9mIG9iamVjdC5zdmdfYXJyICE9IFwidW5kZWZpbmVkXCIpe1xyXG4gICBmb3IgKGxldCBpID0gMDsgaSA8IG9iamVjdC5zdmdfYXJyLmxlbmd0aDsgaSsrKXtcclxuICAgICAgXHJcbiAgICAgIGxldCBzdmdWYWwgPSBmb3JtR3JvdXBbb2JqZWN0LnN2Z19hcnJbaV1dO1xyXG4gICAgICBjb25zb2xlLmxvZyhcInN2Z19hcnJbaV06XCIsIG9iamVjdC5zdmdfYXJyW2ldLCBzdmdWYWwpXHJcbiAgICAgIHN2Z1ZhbCA9IHRoaXMuY29udmVydFN2Z1RvS2VuZG9TVkdJY29uICh0aGlzLCBzdmdWYWwsIG51bGwsb2JqZWN0LnN2Z19hcnJbaV0pXHJcbiAgICAgIGNvbnNvbGUubG9nKFwic3ZnX2FycltpXTpuZXc6XCIsICBzdmdWYWwpXHJcbiAgICAgIGZvcm1Hcm91cFtvYmplY3Quc3ZnX2FycltpXSArIFwiX1NWR1wiXSA9IHN2Z1ZhbDtcclxuICAgICAgIFxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5wdWJsaWMgY29udlRvU3RyaW5nKHZhbCl7XHJcbiAgcmV0dXJuIFN0cmluZyh2YWwpXHJcbiB9XHJcblxyXG5wdWJsaWMgYXR0X2ltZ19wb3B1bGF0ZUFycnNMaXN0KGZvcm1Hcm91cEFycjphbnksb2JqZWN0OmFueSl7XHJcbiAgLy9jb25zb2xlLmxvZyhcImF0dF9pbWdfcG9wdWxhdGVBcnJzOmZvcm1Hcm91cDpcIiwgZm9ybUdyb3VwQXJyLCBvYmplY3QuYXR0X2Fyciwgb2JqZWN0LmltZ19hcnIpXHJcbiAgZm9yIChsZXQgayA9IDA7IGsgPCBmb3JtR3JvdXBBcnIubGVuZ3RoOyBrKyspIHtcclxuICBsZXQgZm9ybUdyb3VwID0gZm9ybUdyb3VwQXJyW2tdO1xyXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgb2JqZWN0LmF0dF9hcnIubGVuZ3RoOyBpKyspIHtcclxuICAgIC8vY29uc29sZS5sb2coXCJhdHRfaW1nX3BvcHVsYXRlQXJyczpvYmplY3QuYXR0X2FycltpXTpcIiwgb2JqZWN0LmF0dF9hcnJbaV0sZm9ybUdyb3VwICwgZm9ybUdyb3VwW29iamVjdC5hdHRfYXJyW2ldXSlcclxuICAgIC8vY29uc29sZS5sb2coXCJhdHRfaW1nX3BvcHVsYXRlQXJyczpmb3JtR3JvdXBbb2JqZWN0LmF0dF9hcnJbaV1dOlwiK2Zvcm1Hcm91cFtvYmplY3QuYXR0X2FycltpXV0udHJpbSgpICtcIjpcIiAgKVxyXG4gICAgaWYgKGZvcm1Hcm91cFtvYmplY3QuYXR0X2FycltpXV0udHJpbSgpICE9IFwiXCIpIG9iamVjdC5teUZpbGVzW29iamVjdC5hdHRfYXJyW2ldXSA9IEpTT04ucGFyc2UoZm9ybUdyb3VwW29iamVjdC5hdHRfYXJyW2ldXSk7XHJcbiAgfVxyXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgb2JqZWN0LmltZ19hcnIubGVuZ3RoOyBpKyspIHtcclxuICAgIGlmIChmb3JtR3JvdXBbb2JqZWN0LmltZ19hcnJbaV1dICE9IFwiXCIpIG9iamVjdC5teUZpbGVzW29iamVjdC5pbWdfYXJyW2ldXSA9IEpTT04ucGFyc2UoZm9ybUdyb3VwW29iamVjdC5pbWdfYXJyW2ldXSk7XHJcbiAgfVxyXG4gIC8vY29uc29sZS5sb2coXCJhdHRfaW1nX3BvcHVsYXRlQXJyczpvYmplY3QubXlGaWxlczprOlwiLCBrLG9iamVjdC5teUZpbGVzLCBvYmplY3QuYXR0X2FyciApXHJcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBvYmplY3QuYXR0X2Fyci5sZW5ndGg7IGkrKykge1xyXG4gICAgLy9jb25zb2xlLmxvZyhcImF0dF9pbWdfcG9wdWxhdGVBcnJzOm9iamVjdC5hdHRfYXJyW2ldOlwiLCBvYmplY3QuYXR0X2FycltpXSwgZm9ybUdyb3VwW29iamVjdC5hdHRfYXJyW2ldXSlcclxuICAgIC8vY29uc29sZS5sb2coXCJhdHRfaW1nX3BvcHVsYXRlQXJyczpvYmplY3QuYXR0X2FycltpXTpcIisgZm9ybUdyb3VwW29iamVjdC5hdHRfYXJyW2ldXSArIFwiOlwiKVxyXG4gICAgbGV0IGFyclZhbCA9IGZvcm1Hcm91cFtvYmplY3QuYXR0X2FycltpXV07XHJcbiAgICBhcnJWYWwgPSBhcnJWYWwudHJpbSgpO1xyXG4gICAgaWYgKCAgYXJyVmFsICE9IFwiXCIpIHtcclxuICAgICAgbGV0IGl0ZW1zMTphbnkgPVtdO1xyXG4gICAgICBsZXQgZmllbGRfZGF0YSA9IGZvcm1Hcm91cFtvYmplY3QuYXR0X2FycltpXV07XHJcbiAgICAgIGZpZWxkX2RhdGEgPSBKU09OLnBhcnNlKGZpZWxkX2RhdGEpO1xyXG4gICAgICBpZiAoZmllbGRfZGF0YSAhPSBudWxsKXtcclxuICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IGZpZWxkX2RhdGEubGVuZ3RoOyBqKyspIHtcclxuICAgICAgICAgIGxldCBpdGVtID1cclxuICAgICAgICAgICAgeyB0aXRsZTogZmllbGRfZGF0YVtqXS5uYW1lLCB1cmw6IG9iamVjdC5BdHREd25VcmwgKyBlbmNvZGVVUkkoZmllbGRfZGF0YVtqXS5uYW1lKSB9XHJcbiAgICAgICAgICBpdGVtczEucHVzaChpdGVtKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgLy9jb25zb2xlLmxvZyhcImF0dF9pbWdfcG9wdWxhdGVBcnJzOmltZ19nYWxsZXJ5Oms6XCIsIGssb2JqZWN0LmF0dF9hcnJbaV0sICBpdGVtczEpXHJcbiAgICAgIGxldCBpbWdfZ2FsbGVyeSA9W107XHJcbiAgICAgIGltZ19nYWxsZXJ5W29iamVjdC5hdHRfYXJyW2ldXSA9IGl0ZW1zMTtcclxuICAgICAgb2JqZWN0LmltZ19nYWxsZXJ5W2tdID0gaW1nX2dhbGxlcnk7XHJcbiAgICB9XHJcbiAgICBlbHNle1xyXG4gICAgICBsZXQgaW1nX2dhbGxlcnkgPVtdO1xyXG4gICAgICBpbWdfZ2FsbGVyeVtvYmplY3QuYXR0X2FycltpXV0gPSBbXTtcclxuICAgICAgb2JqZWN0LmltZ19nYWxsZXJ5W2tdID0gaW1nX2dhbGxlcnk7XHJcbiAgICB9XHJcbiAgfVxyXG4gICAgLy9jb25zb2xlLmxvZyhcImF0dF9pbWdfcG9wdWxhdGVBcnJzOmltZ19nYWxsZXJ5OlwiLCBvYmplY3QuaW1nX2dhbGxlcnkpXHJcbiAgIFxyXG4gIH1cclxuIFxyXG59XHJcbnB1YmxpYyBhdHRfd2ViY2FtX2Zvcm1fb3BlblVwbG9hZGltYWdlKGZpZWxkX2lkOmFueSxvYmplY3Q6YW55KSB7XHJcbiAgLy9vYmplY3QudXBsb2FkaW1hZ2UgPSB0cnVlO1xyXG4gIC8vY29uc29sZS5sb2coXCJvcGVuVXBsb2FkaW1hZ2U6ZmllbGRfaWQ6XCIsIGZpZWxkX2lkLCBvYmplY3QubXlGaWxlcywgb2JqZWN0Lm15RmlsZXNbZmllbGRfaWRdKVxyXG4gIGxldCBteUZpbGVzID0gW107XHJcbiAgaWYgKHR5cGVvZiBvYmplY3QubXlGaWxlc1tmaWVsZF9pZF0gIT0gXCJ1bmRlZmluZWRcIikge1xyXG4gICAgbXlGaWxlcyA9IG9iamVjdC5teUZpbGVzW2ZpZWxkX2lkXTtcclxuICB9XHJcbiAgbGV0IGZpbGVzRGVsZXRlZCA9IFtdO1xyXG4gIGlmICh0eXBlb2Ygb2JqZWN0LmZpbGVzRGVsZXRlZFtmaWVsZF9pZF0gIT0gXCJ1bmRlZmluZWRcIikge1xyXG4gICAgZmlsZXNEZWxldGVkID0gb2JqZWN0LmZpbGVzRGVsZXRlZFtmaWVsZF9pZF07XHJcbiAgfVxyXG4gIGxldCBoaWRlT3RoZXJzID0gZmFsc2U7XHJcbiAgaWYgKHR5cGVvZiBvYmplY3QuZGlzYWJsZVVwbG9hZCAhPSBcInVuZGVmaW5lZFwiKSB7XHJcbiAgICBoaWRlT3RoZXJzID0gb2JqZWN0LmRpc2FibGVVcGxvYWQ7XHJcbiAgfVxyXG4gIGxldCBpbWFnZUlEID0gZmllbGRfaWQ7XHJcbiAgdmFyIG1hc3RlclBhcmFtcyA9IHtcclxuICAgIFwiYWN0aW9uXCI6IFwidXBsb2FkXCIsXHJcbiAgICBcImltYWdlSURcIjogaW1hZ2VJRCxcclxuICAgIFwibXlGaWxlc1wiOiBteUZpbGVzLFxyXG4gICAgXCJmaWxlc0RlbGV0ZWRcIjogZmlsZXNEZWxldGVkLFxyXG4gICAgXCJoaWRlT3RoZXJzXCIgOiBoaWRlT3RoZXJzXHJcbiAgfVxyXG5cclxuXHJcbiAgb2JqZWN0LkRTUF9XRUJDQU1Db25maWcgPSBuZXcgY29tcG9uZW50Q29uZmlnRGVmKClcclxuICBvYmplY3QuRFNQX1dFQkNBTUNvbmZpZy5tYXN0ZXJQYXJhbXMgPSBtYXN0ZXJQYXJhbXNcclxuICAvL2NvbnNvbGUubG9nKFwib2JqZWN0LkRTUF9XRUJDQU1Db25maWcubWFzdGVyUGFyYW1zOlwiLCBvYmplY3QuRFNQX1dFQkNBTUNvbmZpZy5tYXN0ZXJQYXJhbXMpXHJcbn1cclxuXHJcbnB1YmxpYyBhdHRfaW1nX2Zvcm1fb3BlblVwbG9hZGltYWdlKGZpZWxkX2lkOmFueSxvYmplY3Q6YW55KSB7XHJcbiAgLy9vYmplY3QudXBsb2FkaW1hZ2UgPSB0cnVlO1xyXG4gIGNvbnNvbGUubG9nKFwib3BlblVwbG9hZGltYWdlOmZpZWxkX2lkOlwiLCBmaWVsZF9pZCwgb2JqZWN0Lm15RmlsZXMsIG9iamVjdC5teUZpbGVzW2ZpZWxkX2lkXSlcclxuICBsZXQgbXlGaWxlcyA9IFtdO1xyXG4gIGlmICh0eXBlb2Ygb2JqZWN0Lm15RmlsZXNbZmllbGRfaWRdICE9IFwidW5kZWZpbmVkXCIpIHtcclxuICAgIG15RmlsZXMgPSBvYmplY3QubXlGaWxlc1tmaWVsZF9pZF07XHJcbiAgfVxyXG4gIGxldCBmaWxlc0RlbGV0ZWQgPSBbXTtcclxuICBpZiAodHlwZW9mIG9iamVjdC5maWxlc0RlbGV0ZWRbZmllbGRfaWRdICE9IFwidW5kZWZpbmVkXCIpIHtcclxuICAgIGZpbGVzRGVsZXRlZCA9IG9iamVjdC5maWxlc0RlbGV0ZWRbZmllbGRfaWRdO1xyXG4gIH1cclxuICBsZXQgaGlkZU90aGVycyA9IGZhbHNlO1xyXG4gIGlmICh0eXBlb2Ygb2JqZWN0LmRpc2FibGVVcGxvYWQgIT0gXCJ1bmRlZmluZWRcIikge1xyXG4gICAgaGlkZU90aGVycyA9IG9iamVjdC5kaXNhYmxlVXBsb2FkO1xyXG4gIH1cclxuICBsZXQgaW1hZ2VJRCA9IGZpZWxkX2lkO1xyXG4gIHZhciBtYXN0ZXJQYXJhbXMgPSB7XHJcbiAgICBcImFjdGlvblwiOiBcInVwbG9hZFwiLFxyXG4gICAgXCJpbWFnZUlEXCI6IGltYWdlSUQsXHJcbiAgICBcIm15RmlsZXNcIjogbXlGaWxlcyxcclxuICAgIFwiZmlsZXNEZWxldGVkXCI6IGZpbGVzRGVsZXRlZCxcclxuICAgIFwiaGlkZU90aGVyc1wiIDogaGlkZU90aGVyc1xyXG4gIH1cclxuXHJcblxyXG4gIG9iamVjdC5EU1BfVVBMT0FEQ29uZmlnID0gbmV3IGNvbXBvbmVudENvbmZpZ0RlZigpXHJcbiAgb2JqZWN0LkRTUF9VUExPQURDb25maWcubWFzdGVyUGFyYW1zID0gbWFzdGVyUGFyYW1zXHJcbiAgY29uc29sZS5sb2coXCJvYmplY3QuRFNQX1VQTE9BRENvbmZpZy5tYXN0ZXJQYXJhbXM6XCIsIG9iamVjdC5EU1BfVVBMT0FEQ29uZmlnLm1hc3RlclBhcmFtcylcclxufVxyXG5wdWJsaWMgY2FsbEdldFNhdmVBdHRhY2hlbXRzKGFjdGlvbjphbnksZGF0YTphbnksb2JqZWN0OmFueSkge1xyXG4gIC8vY29uc29sZS5sb2coXCJjYWxsU2F2ZUF0dGFjaGVtdHM6bXlGaWxlczpcIiwgb2JqZWN0Lm15RmlsZXMpXHJcbiAgbGV0IGNhblNlbmQgPSBmYWxzZTtcclxuICBpZiggdHlwZW9mIG9iamVjdC5hdHRfYXJyICE9IFwidW5kZWZpbmVkXCIpe1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBvYmplY3QuYXR0X2Fyci5sZW5ndGg7IGkrKykge1xyXG4gICAgICBpZiAodHlwZW9mIGRhdGFbb2JqZWN0LmF0dF9hcnJbaV1dICE9PSBcInVuZGVmaW5lZFwiICYmIGRhdGFbb2JqZWN0LmF0dF9hcnJbaV1dLnRyaW0oKSAhPSBcIlwiKSBcclxuICAgICAgICBjYW5TZW5kID0gdHJ1ZTtcclxuICAgIH1cclxuICB9XHJcbiAgaWYoIHR5cGVvZiBvYmplY3QuaW1nX2FyciAhPSBcInVuZGVmaW5lZFwiKXtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgb2JqZWN0LmltZ19hcnIubGVuZ3RoOyBpKyspIHtcclxuICAgICAgaWYgKHR5cGVvZiBkYXRhW29iamVjdC5pbWdfYXJyW2ldXSAhPT0gXCJ1bmRlZmluZWRcIiAmJiBkYXRhW29iamVjdC5pbWdfYXJyW2ldXS50cmltKCkgIT0gXCJcIikgXHJcbiAgICAgICAgY2FuU2VuZCA9IHRydWU7XHJcbiAgICB9XHJcbiAgfVxyXG4gIHZhciBtYXN0ZXJQYXJhbXMgPSB7XHJcbiAgICBcImFjdGlvblwiOiBhY3Rpb24sXHJcbiAgICBcImF0dF9hcnJcIjogb2JqZWN0LmF0dF9hcnIsXHJcbiAgICBcImltZ19hcnJcIjogb2JqZWN0LmltZ19hcnIsXHJcbiAgICBcIm15RmlsZXNcIjogb2JqZWN0Lm15RmlsZXMsXHJcbiAgICBcImZpbGVzRGVsZXRlZFwiOiBvYmplY3QuZmlsZXNEZWxldGVkLFxyXG4gICAgXCJkYXRhXCI6IGRhdGFcclxuICB9XHJcbiAgaWYgKGFjdGlvbiA9PSBcInNhdmVcIilcclxuICAgIGNhblNlbmQgPSB0cnVlO1xyXG4gIGlmIChjYW5TZW5kKXtcclxuICAgIGNvbnNvbGUubG9nKFwiY2FsbEdldFNhdmVBdHRhY2hlbXRzOm1hc3RlclBhcmFtczpcIiwgbWFzdGVyUGFyYW1zKSBcclxuICAgIG9iamVjdC5EU1BfVVBMT0FEQ29uZmlnID0gbmV3IGNvbXBvbmVudENvbmZpZ0RlZigpXHJcbiAgICBvYmplY3QuRFNQX1VQTE9BRENvbmZpZy5tYXN0ZXJQYXJhbXMgPSBtYXN0ZXJQYXJhbXNcclxuICB9XHJcblxyXG59XHJcbnB1YmxpYyBjYWxsR2V0U2F2ZVdlYkNhbShhY3Rpb246YW55LGRhdGE6YW55LG9iamVjdDphbnkpIHtcclxuICAvL2NvbnNvbGUubG9nKFwiY2FsbFNhdmVBdHRhY2hlbXRzOm15RmlsZXM6XCIsIG9iamVjdC5teUZpbGVzKVxyXG4gIHZhciBtYXN0ZXJQYXJhbXMgPSB7XHJcbiAgICBcImFjdGlvblwiOiBhY3Rpb24sXHJcbiAgICBcImF0dF9hcnJcIjogb2JqZWN0LmF0dF9hcnIsXHJcbiAgICBcImltZ19hcnJcIjogb2JqZWN0LmltZ19hcnIsXHJcbiAgICBcIm15RmlsZXNcIjogb2JqZWN0Lm15RmlsZXMsXHJcbiAgICBcImZpbGVzRGVsZXRlZFwiOiBvYmplY3QuZmlsZXNEZWxldGVkLFxyXG4gICAgXCJkYXRhXCI6IGRhdGFcclxuICB9XHJcblxyXG4gIG9iamVjdC5EU1BfV0VCQ0FNQ29uZmlnID0gbmV3IGNvbXBvbmVudENvbmZpZ0RlZigpXHJcbiAgb2JqZWN0LkRTUF9XRUJDQU1Db25maWcubWFzdGVyUGFyYW1zID0gbWFzdGVyUGFyYW1zXHJcblxyXG59XHJcbmFzeW5jIGF0dF9pbWdfc2F2ZUZvcm1Db21wbGV0ZWRIYW5kbGVyKHZhbHVlOmFueSxvYmplY3Q6YW55KSB7XHJcbiAgLy9jb25zb2xlLmxvZyhcImF0dF9pbWdfc2F2ZUZvcm1Db21wbGV0ZWRIYW5kbGVyOnZhbHVlXCIsIHZhbHVlKTtcclxuICBsZXQgZmllbGRfaWQgPSB2YWx1ZS5maWVsZF9pZDtcclxuICBvYmplY3QubXlGaWxlc1tmaWVsZF9pZF0gPSB2YWx1ZS5teUZpbGVzO1xyXG4gIG9iamVjdC5maWxlc0RlbGV0ZWRbZmllbGRfaWRdID0gdmFsdWUuZmlsZXNEZWxldGVkO1xyXG4gIG9iamVjdC5jYW1JbWFnZSA9IHZhbHVlLmNhbUltYWdlO1xyXG4gIC8vY29uc29sZS5sb2coXCJvYmplY3QubXlGaWxlc1tmaWVsZF9pZF06XCIsIG9iamVjdC5teUZpbGVzW2ZpZWxkX2lkXSlcclxuICBsZXQgSlNPTlZhbCAgPSBKU09OLnN0cmluZ2lmeShvYmplY3QubXlGaWxlc1tmaWVsZF9pZF0pO1xyXG4gIGlmIChKU09OVmFsID09IFwiW11cIilcclxuICAgIEpTT05WYWwgPSBcIlwiO1xyXG4gIG9iamVjdC5mb3JtLmdldFJhd1ZhbHVlKClbZmllbGRfaWRdID0gSlNPTlZhbDtcclxuICBvYmplY3QuZm9ybS5wYXRjaFZhbHVlKHsgW2ZpZWxkX2lkXTogSlNPTlZhbCB9KTtcclxuICBpZiAodHlwZW9mIG9iamVjdC5hdHRfaW1nX3NhdmVGb3JtQ29tcGxldGVkICE9IFwidW5kZWZpbmVkXCIpIHtcclxuICAgIGxldCBOZXdWYWw6YW55ID0gW107XHJcbiAgICBOZXdWYWwucHVzaChmaWVsZF9pZCk7XHJcbiAgICBvYmplY3QuYXR0X2ltZ19zYXZlRm9ybUNvbXBsZXRlZC5hcHBseShvYmplY3QsIE5ld1ZhbCk7XHJcbiAgfVxyXG59XHJcbmFzeW5jIGF0dF9pbWdfc2F2ZUZvcm0yQ29tcGxldGVkSGFuZGxlcih2YWx1ZTphbnksb2JqZWN0OmFueSkge1xyXG4gIGNvbnNvbGUubG9nKFwiYXR0X2ltZ19zYXZlRm9ybUNvbXBsZXRlZEhhbmRsZXI6dmFsdWVcIiwgdmFsdWUpO1xyXG4gIGxldCBmaWVsZF9pZCA9IHZhbHVlLmZpZWxkX2lkO1xyXG4gIG9iamVjdC5teUZpbGVzW2ZpZWxkX2lkXSA9IHZhbHVlLm15RmlsZXM7XHJcbiAgb2JqZWN0LmZpbGVzRGVsZXRlZFtmaWVsZF9pZF0gPSB2YWx1ZS5maWxlc0RlbGV0ZWQ7XHJcbiAgY29uc29sZS5sb2coXCJvYmplY3QubXlGaWxlc1tmaWVsZF9pZF06XCIsIG9iamVjdC5teUZpbGVzW2ZpZWxkX2lkXSlcclxuICBsZXQgSlNPTlZhbCAgPSBKU09OLnN0cmluZ2lmeShvYmplY3QubXlGaWxlc1tmaWVsZF9pZF0pO1xyXG4gIGlmIChKU09OVmFsID09IFwiW11cIilcclxuICAgIEpTT05WYWwgPSBcIlwiO1xyXG4gIG9iamVjdC5mb3JtMi52YWx1ZVtmaWVsZF9pZF0gPSBKU09OVmFsO1xyXG4gIG9iamVjdC5mb3JtMi5wYXRjaFZhbHVlKHsgW2ZpZWxkX2lkXTogSlNPTlZhbCB9KTtcclxuICBpZiAodHlwZW9mIG9iamVjdC5hdHRfaW1nX3NhdmVGb3JtQ29tcGxldGVkICE9IFwidW5kZWZpbmVkXCIpIHtcclxuICAgIGxldCBOZXdWYWw6YW55ID0gW107XHJcbiAgICBOZXdWYWwucHVzaChmaWVsZF9pZCk7XHJcbiAgICBvYmplY3QuYXR0X2ltZ19zYXZlRm9ybUNvbXBsZXRlZC5hcHBseShvYmplY3QsIE5ld1ZhbCk7XHJcbiAgfVxyXG59XHJcbnB1YmxpYyBhdHRfaW1nX3NhdmVHcmlkQ29tcGxldGVkSGFuZGxlcih2YWx1ZTphbnksb2JqZWN0OmFueSkge1xyXG4gIFxyXG4gIC8vY29uc29sZS5sb2coXCJhdHRfaW1nX3NhdmVHcmlkQ29tcGxldGVkSGFuZGxlcjp2YWx1ZVwiLCB2YWx1ZSk7XHJcbiAgbGV0IGZpZWxkX2lkID0gdmFsdWUuZmllbGRfaWQ7XHJcbiAgb2JqZWN0Lm15RmlsZXNbZmllbGRfaWRdID0gdmFsdWUubXlGaWxlcztcclxuICBvYmplY3QuZmlsZXNEZWxldGVkW2ZpZWxkX2lkXSA9IHZhbHVlLmZpbGVzRGVsZXRlZDtcclxuICAvL2NvbnNvbGUubG9nKFwiY2hlY2tpbmc6MjpvYmplY3QubXlGaWxlc1tmaWVsZF9pZF06XCIsIEpTT04uc3RyaW5naWZ5KG9iamVjdC5teUZpbGVzW2ZpZWxkX2lkXSkgKVxyXG4gIGxldCBKU09OVmFsICA9IEpTT04uc3RyaW5naWZ5KG9iamVjdC5teUZpbGVzW2ZpZWxkX2lkXSk7XHJcbiAgaWYgKEpTT05WYWwgPT0gXCJbXVwiKVxyXG4gICAgSlNPTlZhbCA9IFwiXCI7XHJcbiAgb2JqZWN0LmZvcm1Hcm91cC5wYXRjaFZhbHVlKHsgW2ZpZWxkX2lkXTogSlNPTlZhbCB9KTtcclxuICBvYmplY3QuZm9ybUdyb3VwLm1hcmtBc0RpcnR5KCk7XHJcbiAgLy9jb25zb2xlLmxvZyhcImF0dF9pbWdfc2F2ZUdyaWRDb21wbGV0ZWRIYW5kbGVyOm9iamVjdC5mb3JtR3JvdXAudmFsdWVcIiwgb2JqZWN0LmZvcm1Hcm91cC52YWx1ZSk7XHJcbiAgb2JqZWN0LnVwbG9hZGltYWdlPWZhbHNlO1xyXG59XHJcbnB1YmxpYyBhc3luYyBhdHRfaW1nX2dyaWRfb3BlblVwbG9hZGltYWdlKGZpZWxkX2lkOmFueSxvYmplY3Q6YW55KSB7XHJcbiAgaWYgKCFvYmplY3QuY29tcG9uZW50Q29uZmlnLmVuYWJsZWQpIHJldHVybjtcclxuICBhd2FpdCBvYmplY3Quc3RhclNlcnZpY2VzLnNsZWVwKDMwMCk7XHJcbiAgLy9jb25zb2xlLmxvZyhcImF0dF9pbWdfZ3JpZF9vcGVuVXBsb2FkaW1hZ2U6b2JqZWN0LmZvcm1Hcm91cDpcIiwgb2JqZWN0LmZvcm1Hcm91cClcclxuICBvYmplY3QudXBsb2FkaW1hZ2UgPSB0cnVlO1xyXG4gIGlmICh0eXBlb2Ygb2JqZWN0LmZvcm1Hcm91cCAhPSBcInVuZGVmaW5lZFwiKSB7XHJcbiAgICBvYmplY3QubXlGaWxlc1tmaWVsZF9pZF0gPVtdO1xyXG4gICAgb2JqZWN0LnN0YXJTZXJ2aWNlcy5hdHRfaW1nX3BvcHVsYXRlQXJycyhvYmplY3QuZm9ybUdyb3VwLnZhbHVlLG9iamVjdCk7XHJcbiAgICAvL2NvbnNvbGUubG9nKFwib3BlblVwbG9hZGltYWdlOmZpZWxkX2lkOlwiLCBmaWVsZF9pZCwgb2JqZWN0Lm15RmlsZXMsIG9iamVjdC5teUZpbGVzW2ZpZWxkX2lkXSlcclxuICAgIGxldCBteUZpbGVzID0gW107XHJcbiAgICBpZiAodHlwZW9mIG9iamVjdC5teUZpbGVzW2ZpZWxkX2lkXSAhPSBcInVuZGVmaW5lZFwiKSB7XHJcbiAgICAgIG15RmlsZXMgPSBvYmplY3QubXlGaWxlc1tmaWVsZF9pZF07XHJcbiAgICB9XHJcbiAgICBsZXQgZmlsZXNEZWxldGVkID0gW107XHJcbiAgICBpZiAodHlwZW9mIG9iamVjdC5maWxlc0RlbGV0ZWRbZmllbGRfaWRdICE9IFwidW5kZWZpbmVkXCIpIHtcclxuICAgICAgZmlsZXNEZWxldGVkID0gb2JqZWN0LmZpbGVzRGVsZXRlZFtmaWVsZF9pZF07XHJcbiAgICB9XHJcbiAgbGV0IGhpZGVPdGhlcnMgPSBmYWxzZTtcclxuICBpZiAodHlwZW9mIG9iamVjdC5kaXNhYmxlVXBsb2FkICE9IFwidW5kZWZpbmVkXCIpIHtcclxuICAgIGhpZGVPdGhlcnMgPSBvYmplY3QuZGlzYWJsZVVwbG9hZDtcclxuICB9XHJcbiAgICBsZXQgaW1hZ2VJRCA9IGZpZWxkX2lkO1xyXG4gICAgdmFyIG1hc3RlclBhcmFtcyA9IHtcclxuICAgICAgXCJhY3Rpb25cIjogXCJ1cGxvYWRcIixcclxuICAgICAgXCJpbWFnZUlEXCI6IGltYWdlSUQsXHJcbiAgICAgIFwibXlGaWxlc1wiOiBteUZpbGVzLFxyXG4gICAgICBcImZpbGVzRGVsZXRlZFwiOiBmaWxlc0RlbGV0ZWQsXHJcbiAgICAgICBcImhpZGVPdGhlcnNcIiA6IGhpZGVPdGhlcnNcclxuICAgIH1cclxuXHJcbiAgICBvYmplY3QuRFNQX1VQTE9BRENvbmZpZyA9IG5ldyBjb21wb25lbnRDb25maWdEZWYoKVxyXG4gICAgb2JqZWN0LkRTUF9VUExPQURDb25maWcubWFzdGVyUGFyYW1zID0gbWFzdGVyUGFyYW1zXHJcbiAgfVxyXG59XHJcbnB1YmxpYyBhc3luYyBhdHRfd2ViY2FtX2dyaWRfb3BlblVwbG9hZGltYWdlKGZpZWxkX2lkOmFueSxvYmplY3Q6YW55KSB7XHJcbiAgaWYgKCFvYmplY3QuY29tcG9uZW50Q29uZmlnLmVuYWJsZWQpIHJldHVybjtcclxuICBhd2FpdCBvYmplY3Quc3RhclNlcnZpY2VzLnNsZWVwKDMwMCk7XHJcbiAgLy9jb25zb2xlLmxvZyhcImF0dF93ZWJjYW1fZ3JpZF9vcGVuVXBsb2FkaW1hZ2U6b2JqZWN0LmZvcm1Hcm91cDpcIiwgb2JqZWN0LmZvcm1Hcm91cClcclxuICBvYmplY3QudXBsb2FkaW1hZ2UgPSB0cnVlO1xyXG4gIGlmICh0eXBlb2Ygb2JqZWN0LmZvcm1Hcm91cCAhPSBcInVuZGVmaW5lZFwiKSB7XHJcbiAgICBvYmplY3QubXlGaWxlc1tmaWVsZF9pZF0gPVtdO1xyXG4gICAgb2JqZWN0LnN0YXJTZXJ2aWNlcy5hdHRfaW1nX3BvcHVsYXRlQXJycyhvYmplY3QuZm9ybUdyb3VwLnZhbHVlLG9iamVjdCk7XHJcbiAgICAvL2NvbnNvbGUubG9nKFwib3BlblVwbG9hZGltYWdlOmZpZWxkX2lkOlwiLCBmaWVsZF9pZCwgb2JqZWN0Lm15RmlsZXMsIG9iamVjdC5teUZpbGVzW2ZpZWxkX2lkXSlcclxuICAgIGxldCBteUZpbGVzID0gW107XHJcbiAgICBpZiAodHlwZW9mIG9iamVjdC5teUZpbGVzW2ZpZWxkX2lkXSAhPSBcInVuZGVmaW5lZFwiKSB7XHJcbiAgICAgIG15RmlsZXMgPSBvYmplY3QubXlGaWxlc1tmaWVsZF9pZF07XHJcbiAgICB9XHJcbiAgICBsZXQgZmlsZXNEZWxldGVkID0gW107XHJcbiAgICBpZiAodHlwZW9mIG9iamVjdC5maWxlc0RlbGV0ZWRbZmllbGRfaWRdICE9IFwidW5kZWZpbmVkXCIpIHtcclxuICAgICAgZmlsZXNEZWxldGVkID0gb2JqZWN0LmZpbGVzRGVsZXRlZFtmaWVsZF9pZF07XHJcbiAgICB9XHJcblxyXG4gICAgbGV0IGltYWdlSUQgPSBmaWVsZF9pZDtcclxuICAgIHZhciBtYXN0ZXJQYXJhbXMgPSB7XHJcbiAgICAgIFwiYWN0aW9uXCI6IFwidXBsb2FkXCIsXHJcbiAgICAgIFwiaW1hZ2VJRFwiOiBpbWFnZUlELFxyXG4gICAgICBcIm15RmlsZXNcIjogbXlGaWxlcyxcclxuICAgICAgXCJmaWxlc0RlbGV0ZWRcIjogZmlsZXNEZWxldGVkXHJcbiAgICB9XHJcblxyXG4gICAgb2JqZWN0LkRTUF9XRUJDQU1Db25maWcgPSBuZXcgY29tcG9uZW50Q29uZmlnRGVmKClcclxuICAgIG9iamVjdC5EU1BfV0VCQ0FNQ29uZmlnLm1hc3RlclBhcmFtcyA9IG1hc3RlclBhcmFtc1xyXG4gIH1cclxufVxyXG5wdWJsaWMgYWRkTmV3Q29kZShvYmplY3Q6YW55LCBDT0RFTkFNRTphbnkpOiB2b2lkIHtcclxuICBvYmplY3QuZ3JpZF9zb21fdGFic19jb2RlcyA9IG5ldyB0YWJzQ29kZXMoKTtcclxuICBvYmplY3QuZ3JpZF9zb21fdGFic19jb2Rlc1snQ09ERU5BTUUnXSA9IENPREVOQU1FOyAvLyBmb3IgcmV0cmlldmUgZGF0YVxyXG4gIFxyXG4gIFxyXG4gIG9iamVjdC5TT01fVEFCU19DT0RFU0NvbmZpZyA9ICBuZXcgY29tcG9uZW50Q29uZmlnRGVmKCk7XHJcbiAgbGV0IG1hc3RlclBhcmFtcyA9IHtcclxuICAgIGFjdGlvbjogXCJBRERcIixcclxuICAgIENPREVOQU1FOkNPREVOQU1FLFxyXG4gICAgQ09ERTpvYmplY3QuZmlsdGVyQ29kZSxcclxuICAgIENPREVURVhUX0xBTkcgOiBvYmplY3QuZmlsdGVyQ29kZVxyXG4gIH1cclxuICBvYmplY3QuU09NX1RBQlNfQ09ERVNDb25maWcubWFzdGVyUGFyYW1zID0gbWFzdGVyUGFyYW1zOyAvLyBGb3IgYWRkIG5ldyByZWNvcmRcclxuICBvYmplY3Quc2hvd0NvZGVEZXRhaWxzPXRydWU7XHJcbn1cclxuXHJcbnB1YmxpYyBzZXRJZE9yZGVyKG9iamVjdCxpZEZpZWxkLCBvcmRlckZpZWxkKXtcclxuICBsZXQgSUQgPSAxO1xyXG4gIGxldCBPUkRFUiA9IDE7XHJcblxyXG4gIGxldCBHcmlkRGF0YTphbnkgPSBvYmplY3QuZ3JpZC5kYXRhO1xyXG4gIGlmICh0eXBlb2YgR3JpZERhdGEuZGF0YSAhPT0gXCJ1bmRlZmluZWRcIil7XHJcbiAgICBmb3IgKGxldCBpPTA7IGkgPCBHcmlkRGF0YS5kYXRhLmxlbmd0aCA7IGkrKyl7XHJcbiAgICAgIGlmIChHcmlkRGF0YS5kYXRhW2ldW2lkRmllbGRdID49IElEKVxyXG4gICAgICAgIElEID0gcGFyc2VJbnQoIEdyaWREYXRhLmRhdGFbaV1baWRGaWVsZF0pICsgMTtcclxuICAgICAgaWYgKEdyaWREYXRhLmRhdGFbaV1bb3JkZXJGaWVsZF0gPj0gT1JERVIpXHJcbiAgICAgICAgT1JERVIgPSBwYXJzZUludChHcmlkRGF0YS5kYXRhW2ldW29yZGVyRmllbGRdICkgKyAxO1xyXG4gICAgfVxyXG4gIH1cclxuICBsZXQgdmFsdWVzID0ge1xyXG4gICAgW2lkRmllbGRdOiBJRCxcclxuICAgIFtvcmRlckZpZWxkXTogT1JERVJcclxuICB9XHJcbiAgY29uc29sZS5sb2coXCJzZXRJbml0aWFsVmFsdWVzOnZhbHVlczpcIix2YWx1ZXMgKVxyXG4gIG9iamVjdC5mb3JtR3JvdXAucGF0Y2hWYWx1ZSh2YWx1ZXMpXHJcbn1cclxucHVibGljIHJvd1Jlb3JkZXIob2JqZWN0LCBvcmRlckZpZWxkLCBlKXtcclxuICBpZiAob2JqZWN0LnBhcmFtQ29uZmlnLkRFQlVHX0ZMQUcpIGNvbnNvbGUubG9nIChcInJvd1Jlb3JkZXI6XCIsIGUpO1xyXG4gIGlmIChvYmplY3QucGFyYW1Db25maWcuREVCVUdfRkxBRykgY29uc29sZS5sb2cgKFwicm93UmVvcmRlcjpcIiwgZS5kcmFnZ2VkUm93c1swXS5yb3dJbmRleClcclxuICAgIGlmIChvYmplY3QucGFyYW1Db25maWcuREVCVUdfRkxBRykgY29uc29sZS5sb2cgKFwicm93UmVvcmRlcjpcIiwgZS5kcm9wUG9zaXRpb24pO1xyXG4gIGlmIChvYmplY3QucGFyYW1Db25maWcuREVCVUdfRkxBRykgY29uc29sZS5sb2cgKFwicm93UmVvcmRlcjpcIiwgZS5kcm9wVGFyZ2V0Um93LnJvd0luZGV4KVxyXG4gIGxldCBkYXRhSXRlbSA9IGUuZHJhZ2dlZFJvd3NbMF0uZGF0YUl0ZW07XHJcbiAgbGV0IEdyaWREYXRhO1xyXG4gIEdyaWREYXRhID0gIG9iamVjdC5ncmlkLmRhdGE7XHJcblxyXG4gIGlmIChlLmRyb3BQb3NpdGlvbiA9PSBcImFmdGVyXCIpe1xyXG4gICAgR3JpZERhdGEuZGF0YS5zcGxpY2UoZS5kcm9wVGFyZ2V0Um93LnJvd0luZGV4KzEsIDAsIGRhdGFJdGVtKTtcclxuICAgIC8vUmVtb3ZlIGRyYWdnZWRSb3dzXHJcbiAgICBHcmlkRGF0YS5kYXRhID0gR3JpZERhdGEuZGF0YS5maWx0ZXIoZnVuY3Rpb24gKGRhdGFJdGVtLCBpbmRleCkge1xyXG4gICAgICByZXR1cm4gaW5kZXggIT09IGUuZHJhZ2dlZFJvd3NbMF0ucm93SW5kZXg7XHJcbiAgICB9KTtcclxuICB9XHJcbiAgZWxzZVxyXG4gIGlmIChlLmRyb3BQb3NpdGlvbiA9PSBcImJlZm9yZVwiKXtcclxuICAgICAvL1JlbW92ZSBkcmFnZ2VkUm93c1xyXG4gICAgR3JpZERhdGEuZGF0YSA9IEdyaWREYXRhLmRhdGEuZmlsdGVyKGZ1bmN0aW9uIChkYXRhSXRlbSwgaW5kZXgpIHtcclxuICAgICAgcmV0dXJuIGluZGV4ICE9PSBlLmRyYWdnZWRSb3dzWzBdLnJvd0luZGV4O1xyXG4gICAgfSk7XHJcbiAgICBHcmlkRGF0YS5kYXRhLnNwbGljZShlLmRyb3BUYXJnZXRSb3cucm93SW5kZXgsIDAsIGRhdGFJdGVtKTtcclxuICB9XHJcbiAvL3dyaXRlIG9yZGVyIGZpZWxkXHJcbiBpZiAob2JqZWN0LnBhcmFtQ29uZmlnLkRFQlVHX0ZMQUcpIGNvbnNvbGUubG9nKFwicm93UmVvcmRlcjpHcmlkRGF0YS5kYXRhOlwiLEdyaWREYXRhLmRhdGEpO1xyXG4gZm9yIChsZXQgaT0wOyBpIDwgR3JpZERhdGEuZGF0YS5sZW5ndGg7aSsrKXtcclxuICAgR3JpZERhdGEuZGF0YVtpXVtvcmRlckZpZWxkXT0gaSArIDE7XHJcbiAgIEdyaWREYXRhLmRhdGFbaV0uX1FVRVJZID0gb2JqZWN0LnVwZGF0ZUNNRDtcclxuIH1cclxuIG9iamVjdC5zYXZlQ2hhbmdlcyhvYmplY3QuZ3JpZCk7XHJcbn1cclxuXHJcbnB1YmxpYyBoYW5kbGVGaWx0ZXJDb2RlKG9iamVjdDphbnksQ09ERTphbnkpIHtcclxuICBpZiAob2JqZWN0LnN0YXJTZXJ2aWNlcy5zZXNzaW9uUGFyYW1zLlVTRVJfSU5GTy5HUk9VUE5BTUUgPT0gXCJTWVNBRE1cIil7XHJcbiAgICBvYmplY3QuZmlsdGVyQ29kZSA9IENPREU7XHJcbiAgfVxyXG4gfVxyXG4gcmVtb3ZlTm9uVmFsaWRDb2x1bW5zKGNvbXAsSW5pdGlhbFZhbHVlcyl7XHJcbiAgICAgY29uc29sZS5sb2coXCJyZW1vdmVOb25WYWxpZEdyaWRDb2x1bW5zOlwiLCBjb21wLCBJbml0aWFsVmFsdWVzKVxyXG4gICAgIGxldCBLZXlzID0gT2JqZWN0LmtleXMoY29tcCk7XHJcbiBcclxuICAgICBmb3IgKGxldCBqID0wOyBqPCBLZXlzLmxlbmd0aDtqKyspe1xyXG4gICAgICAgbGV0IGZpZWxkID0gS2V5c1tqXTtcclxuICAgICAgIGxldCBleGlzdHMgPSBJbml0aWFsVmFsdWVzW2ZpZWxkXVxyXG4gICAgICAgY29uc29sZS5sb2coXCJyZW1vdmVOb25WYWxpZEdyaWRDb2x1bW5zOlwiLCBmaWVsZCwgZXhpc3RzKVxyXG4gICAgICAgaWYgKHR5cGVvZiBleGlzdHMgPT0gXCJ1bmRlZmluZWRcIil7XHJcbiAgICAgICAgIGRlbGV0ZSBjb21wW2ZpZWxkXTtcclxuICAgICAgIH1cclxuICAgICB9XHJcbiAgIH1cclxuIHB1YmxpYyBmb3JtYXR0aGlzRGF0ZShkYXRlMSwgRGF0ZUZvcm1hdCxkYXRlTG9jYWxlKVxyXG57XHJcbiAgaWYgKChkYXRlMSAhPSBcIlwiKSAmJiAodHlwZW9mIGRhdGUxICE9IFwidW5kZWZpbmVkXCIpKVxyXG4gICAgcmV0dXJuIChmb3JtYXREYXRlKGRhdGUxLCBEYXRlRm9ybWF0LGRhdGVMb2NhbGUpKTtcclxuICBlbHNlXHJcbiAgICByZXR1cm4gbnVsbDtcclxufVxyXG4gcHVibGljIGVuY3J5cHRTZWNyZXRLZXk9XCJBcHBHZW5AU3RhcjEyMzRcIjtcclxuIGVuY3J5cHREYXRhKGRhdGEpIHtcclxuXHJcbiB0cnkge1xyXG4gICByZXR1cm4gQ3J5cHRvSlMuQUVTLmVuY3J5cHQoSlNPTi5zdHJpbmdpZnkoZGF0YSksIHRoaXMuZW5jcnlwdFNlY3JldEtleSkudG9TdHJpbmcoKTtcclxuIH0gY2F0Y2ggKGUpIHtcclxuICAgY29uc29sZS5sb2coZSk7XHJcbiB9XHJcbn1cclxucHVibGljIGRlY3J5cHREYXRhKGRhdGEpIHtcclxuXHJcbiB0cnkge1xyXG4gICBjb25zdCBieXRlcyA9IENyeXB0b0pTLkFFUy5kZWNyeXB0KGRhdGEsIHRoaXMuZW5jcnlwdFNlY3JldEtleSk7XHJcbiAgIGlmIChieXRlcy50b1N0cmluZygpKSB7XHJcbiAgICAgcmV0dXJuIEpTT04ucGFyc2UoYnl0ZXMudG9TdHJpbmcoQ3J5cHRvSlMuZW5jLlV0ZjgpKTtcclxuICAgfVxyXG4gICByZXR1cm4gZGF0YTtcclxuIH0gY2F0Y2ggKGUpIHtcclxuICAgY29uc29sZS5sb2coZSk7XHJcbiB9XHJcbn1cclxucHVibGljICBwYXJzZUNvb2tpZXMgPSAoY29va2llU3RyKSA9PlxyXG4gIGNvb2tpZVN0ci5zcGxpdChcIjtcIilcclxuICAgIC5tYXAoc3RyID0+IHN0ci50cmltKCkuc3BsaXQoLz0oLispLykpXHJcbiAgICAucmVkdWNlKChhY2MsIGN1cnIpID0+IHtcclxuICAgICAgICBhY2NbY3VyclswXV0gPSBjdXJyWzFdO1xyXG4gICAgICAgIHJldHVybiBhY2M7XHJcbiAgICB9LCB7fSlcclxucHVibGljIGRhdGFFeGl0cyhvYmplY3QpIHtcclxuICAgIGxldCBzdGF0dXMgPSBmYWxzZTtcclxuICAgIGlmICh0eXBlb2YgKG9iamVjdC5leGVjdXRlUXVlcnlyZXN1bHQpICE9IFwidW5kZWZpbmVkXCIpIHtcclxuICAgICAgaWYgKG9iamVjdC5leGVjdXRlUXVlcnlyZXN1bHQuZGF0YSkge1xyXG4gICAgICAgIHN0YXR1cyA9IHRydWU7XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIHN0YXR1cztcclxuXHJcbiAgICB9XHJcbiAgfVxyXG5wdWJsaWMgaGlkZU5vVmFsaWRMaWNlbnNlKClcclxuIHtcclxuICAgICBjb25zdCBjb2xsZWN0aW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJkaXZcIik7IFxyXG4gICAgIC8vY29uc29sZS5sb2cgKFwiY2hlY2tpbmc6Y29sbGVjdGlvbjpcIixjb2xsZWN0aW9uKTtcclxuICAgICBmb3IgKGxldCBpPTA7aTxjb2xsZWN0aW9uLmxlbmd0aDtpKyspe1xyXG4gICAgICAgbGV0IGlubmVySFRNTDphbnkgPSBjb2xsZWN0aW9uW2ldLmlubmVySFRNTDtcclxuICAgICAgIC8vY29uc29sZS5sb2cgKFwiY2hlY2tpbmc6aW5uZXJIVE1MOlwiLGlubmVySFRNTCk7XHJcbiAgICAgICAvL2xldCByZXN1bHQgPSBpbm5lckhUTUwuaW5jbHVkZXMoXCJuZy1yZWZsZWN0LW5nLXN0eWxlXCIpO1xyXG4gICAgICAgLy9sZXQgcmVzdWx0ID0gaW5uZXJIVE1MLmluY2x1ZGVzKFwiZGlzcGxheTogZmxleDtcIik7XHJcbiAgICAgICBsZXQgcmVzdWx0ID0gaW5uZXJIVE1MLmluY2x1ZGVzKFwiQSBsaWNlbnNlIGtleSBpcyByZXF1aXJlZFwiKTtcclxuICAgICAgIC8vY29uc29sZS5sb2cgKFwiY2hlY2tpbmc6cmVzdWx0OlwiLGksIHJlc3VsdCk7XHJcbiAgICAgICBpZiAocmVzdWx0KXtcclxuICAgICAgICAgcmVzdWx0ID0gaW5uZXJIVE1MLmluY2x1ZGVzKFwiTGljZW5zZSBrZXkgbWlzc2luZ1wiKTtcclxuICAgICAgICAgaWYgKHJlc3VsdCl7XHJcbiAgICAgICAgICAgLy9jb25zb2xlLmxvZyAoXCJjaGVja2luZzppbm5lckhUTUw6XCIscmVzdWx0LGlubmVySFRNTCk7XHJcbiAgICAgICAgICAgY29sbGVjdGlvbltpXS5zdHlsZS5zZXRQcm9wZXJ0eSgnZGlzcGxheScsICdub25lJyk7XHJcbiAgICAgICAgICAgfVxyXG4gXHJcbiAgICAgICB9XHJcbiAgICAgICBcclxuICAgICB9XHJcbiAgICAgLy9jb25zb2xlLmxvZyAoXCJjb2xsZWN0aW9uOlwiLCBjb2xsZWN0aW9uLmxlbmd0aCwgY29sbGVjdGlvblszNV0pXHJcbiB9XHJcbiBcclxuICBhc3luYyAgc2hvd011bHRpU3RlcEZvcm0ob2JqZWN0LCB0ZW1wbGF0ZU5hbWUpIHtcclxuICAgICBsZXQgQm9keSA9IFtdO1xyXG4gICAgIGxldCB0ZW1wbGF0ZUluZm86YW55O1xyXG4gICAgIHZhciBuZXdWYWw6YW55ID0geyBcIl9RVUVSWVwiOiBcIkdFVF9EU1BfVEVNUExBVEVcIiwgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJURU1QTEFURV9OQU1FXCI6IHRlbXBsYXRlTmFtZSB9O1xyXG4gICAgIEJvZHkucHVzaChuZXdWYWwpO1xyXG4gICAgIG5ld1ZhbCA9IHsgXCJfUVVFUllcIjogXCJHRVRfRFNQX1RFTVBMQVRFX0RFVEFJTFwiLCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlRFTVBMQVRFX05BTUVcIjogdGVtcGxhdGVOYW1lLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJTRVFVRU5DRV9OQU1FXCI6IFwiJVwifTtcclxuICAgICAgQm9keS5wdXNoKG5ld1ZhbCk7XHJcbiAgICAgIGxldCBkYXRhID0gYXdhaXQgdGhpcy5leGVjU1FMQm9keSh0aGlzLCBCb2R5LCBcIlwiKTtcclxuICAgICBpZiAodHlwZW9mIGRhdGEgIT0gXCJ1bmRlZmluZWRcIiAmJiBkYXRhWzBdLmRhdGEubGVuZ3RoID4gMCkge1xyXG4gICAgICAgdGhpcy5Cb2R5ID0gW107XHJcbiAgICAgICB0ZW1wbGF0ZUluZm8gPSBkYXRhWzBdLmRhdGFbMF07XHJcbiAgICAgICBsZXQgdGVtcGxhdGVEZXRhaWwgPSBkYXRhWzFdLmRhdGFbMF07XHJcbiBcclxuXHJcbiAgICAgICAvL2lmICgodGhpcy5hZGRGb3JtLnZhbHVlLk9SREVSX0ZJRUxEUyA9PSBcIlwiKSB8fCAodGhpcy5hZGRGb3JtLnZhbHVlLk9SREVSX0ZJRUxEUyA9PSBudWxsKSkge1xyXG4gICAgICAgLy8gIHRoaXMuYWRkRm9ybS52YWx1ZS5PUkRFUl9GSUVMRFMgPSBcInt9XCI7XHJcbiAgICAgICAvL31cclxuIFxyXG4gICAgICAgXHJcbiAgICAgICB2YXIgZm9ybVBhZ2VzTm8gPSB0ZW1wbGF0ZURldGFpbC5GT1JNX1BBR0VTX05PO1xyXG4gICAgICAgb2JqZWN0LmZvcm1NYXN0ZXJQYXJhbXMgPSB7XHJcbiAgICAgICAgIFwiZm9ybU5hbWVcIjogdGVtcGxhdGVJbmZvLkZPUk1fTkFNRSxcclxuICAgICAgICAgXCJmb3JtUGFnZXNOb1wiOiBmb3JtUGFnZXNObyxcclxuICAgICAgICAgLy9cIm9yZGVyRmllbGRzXCI6IHRoaXMuYWRkRm9ybS52YWx1ZS5PUkRFUl9GSUVMRFMsXHJcbiAgICAgICAgIFwib3JkZXJGaWVsZHNcIjogXCJ7fVwiLFxyXG4gICAgICAgICAvL1wiYWRkRm9ybVwiOiB0aGlzLmFkZEZvcm0udmFsdWUsXHJcbiAgICAgICAgIFwiYWRkRm9ybVwiOnRlbXBsYXRlSW5mbyxcclxuICAgICAgICAgXCJjYWxsaW5nRm9ybVwiOiBcIlBSVk9SREVSQURcIixcclxuICAgICAgIH07XHJcbiBcclxuICAgICAgIGNvbnNvbGUubG9nKFwidGVtcGxhdGVJbmZvOlwiLCB0ZW1wbGF0ZUluZm8sIFwiYG9iamV0YC5mb3JtTWFzdGVyUGFyYW1zOlwiLG9iamVjdC5mb3JtTWFzdGVyUGFyYW1zKVxyXG5cclxuICAgICAgICAgb2JqZWN0LnNob3dDYWxsU2NyZWVuID0gdHJ1ZTtcclxuICAgICAgICAgXHJcbiAgICAgfVxyXG4gICAgb2JqZWN0LnRlbXBsYXRlSW5mbyA9IHRlbXBsYXRlSW5mbztcclxuICAgIHJldHVybiB0ZW1wbGF0ZUluZm87XHJcbiAgIH1cclxuICAgYXN5bmMgIGNhbGxTY3JlZW4ob2JqZWN0LCB0ZW1wbGF0ZUluZm8pe1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiY2FsbFNjcmVlbiAtIHRlbXBsYXRlSW5mbzpcIiwgdGVtcGxhdGVJbmZvLCBcInRoaXMuZm9ybU1hc3RlclBhcmFtczpcIixvYmplY3QuZm9ybU1hc3RlclBhcmFtcylcclxuICAgICAgICAgIGxldCBCb2R5ID0gW107XHJcbiAgICAgICAgICB2YXIgbmV3VmFsOmFueSA9IHsgXCJfUVVFUllcIjogXCJHRVRfTUVOVVNfUVVFUllcIiwgXHJcbiAgICAgICAgICAgICBcIl9XSEVSRVwiOiBcIkNIT0lDRSAgPSAnXCIgKyB0ZW1wbGF0ZUluZm8uRk9STV9OQU1FICsgXCInXCIgfTtcclxuICAgICAgICAgIEJvZHkucHVzaChuZXdWYWwpO1xyXG4gICAgICAgICAgY29uc29sZS5sb2coXCJjYWxsU2NyZWVuIC0gQm9keTpcIiwgQm9keSlcclxuICAgICAgICAgIGxldCBkYXRhID0gYXdhaXQgdGhpcy5leGVjU1FMQm9keSh0aGlzLCBCb2R5LCBcIlwiKTtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKFwiY2FsbFNjcmVlbiAtIGRhdGE6XCIsIGRhdGEpXHJcbiAgICAgICAgICBpZiAodHlwZW9mIGRhdGEgIT0gXCJ1bmRlZmluZWRcIiAmJiBkYXRhWzBdLmRhdGEubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICB2YXIgbWVudSA9IGRhdGFbMF0uZGF0YVswXTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJjYWxsU2NyZWVuIC0gbWVudTpcIiwgbWVudSlcclxuICAgICAgICAgICAgbGV0IGNvbXBTZWxlY3RvciA9IG1lbnUuRkxFWF9GTEQxO1xyXG4gICAgICAgICAgICBvYmplY3QuY2hpbGRyZW4gPSBbXTtcclxuICAgICAgICAgICAgb2JqZWN0LmNoaWxkcmVuLnB1c2goY29tcFNlbGVjdG9yKTtcclxuICAgICAgICBvYmplY3QuY29tbW9uQ2FsbFN0YXJOb3RpZnkob2JqZWN0LmZvcm1NYXN0ZXJQYXJhbXMpO1xyXG4gICAgICB9XHJcbiAgICAgIG9iamVjdC5yb3V0ZXIubmF2aWdhdGUoWycvJyArdGVtcGxhdGVJbmZvLkZPUk1fTkFNRV0sIFxyXG4gICAgICAgIHsgc2tpcExvY2F0aW9uQ2hhbmdlOiB0cnVlLCByZXBsYWNlVXJsOiBmYWxzZSwgcHJlc2VydmVGcmFnbWVudDogdHJ1ZSB9KTtcclxuICB9XHJcbiAgICAgcHVibGljIGdldEludmFsaWRDb250cm9scyhvYmplY3QpIHtcclxuICAgIC8vY29uc29sZS5sb2cgKFwiZ2V0SW52YWxpZENvbnRyb2xzOlwiLCAgIG9iamVjdC5mb3JtLmludmFsaWQsIG9iamVjdC5mb3JtLmNvbnRyb2xzKVxyXG4gICAgY29uc3QgaW52YWxpZCA9IFtdO1xyXG4gICAgY29uc3QgY29udHJvbHMgPSBvYmplY3QuZm9ybS5jb250cm9scztcclxuICAgIGZvciAobGV0IG5hbWUgaW4gY29udHJvbHMpIHtcclxuICAgICAgICBpZiAoY29udHJvbHNbbmFtZV0uaW52YWxpZCkge1xyXG4gICAgICAgICAgIGlmICh0eXBlb2Ygb2JqZWN0LmNvbXBUaXRsZU1zZyAhPSBcInVuZGVmaW5lZFwiKXtcclxuICAgICAgICAgICAgICBuYW1lID0gdGhpcy5nZXROTFMoW10sb2JqZWN0LmNvbXBUaXRsZU1zZyArIFwiLlwiICsgbmFtZSxuYW1lKVxyXG4gICAgICAgICAgIH1cclxuICAgICAgICAgICAgaW52YWxpZC5wdXNoKG5hbWUpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgXHJcbiAgICAgdGhpcy5zaG93Tm90aWZpY2F0aW9uKFwiZXJyb3JcIiwgdGhpcy5nZXROTFMoW2ludmFsaWQudG9TdHJpbmcoKV0sXHJcbiAgICAnTk9fVkFMSURfREFUQV9GT1InLCdObyB2YWxpZCBkYXRhIGZvciA6ICAjIyAnKSk7XHJcbiAgICBsZXQgTXNnID0gdGhpcy5nZXROTFMoW2ludmFsaWQudG9TdHJpbmcoKV0sICdOT19WQUxJRF9EQVRBX0ZPUicsJ05vIHZhbGlkIGRhdGEgZm9yIDogICMjICcpO1xyXG4gICAgXHJcbiAgICB2YXIgZGlhbG9nU3RydWMgPSB7XHJcbiAgICAgIG1zZzogTXNnLFxyXG4gICAgICB0aXRsZTogXCJFcnJvclwiLFxyXG4gICAgICBpbmZvOiBudWxsLFxyXG4gICAgICBvYmplY3Q6IHRoaXMsXHJcbiAgICAgIGFjdGlvbjogdGhpcy5Pa0FjdGlvbnMsXHJcbiAgICAgIGNhbGxiYWNrOiBudWxsXHJcbiAgICB9O1xyXG4gICAgdGhpcy5zaG93Q29uZmlybWF0aW9uKGRpYWxvZ1N0cnVjKTtcclxuICAgIHJldHVybiBpbnZhbGlkO1xyXG59XHJcbmNvbnZlcnRTdmdUb0tlbmRvU1ZHSWNvbihcclxuICBvYmplY3Q6IGFueSxcclxuICBzdmdDb250ZW50OiBzdHJpbmcsXHJcbiAgaWNvbk5hbWU6IHN0cmluZyxcclxuICBjb2x1bW46IHN0cmluZ1xyXG4pIHtcclxuICBpZiAoICh0eXBlb2YgaWNvbk5hbWUgPT09ICd1bmRlZmluZWQnKSB8fCBpY29uTmFtZSA9PT0gbnVsbCApIGljb25OYW1lID0gY29sdW1uO1xyXG5cclxuICB0cnkge1xyXG4gICAgLy8gLS0tIDEuIHZpZXdCb3ggKGZhbGxiYWNrIHRvIHdpZHRoL2hlaWdodCwgdGhlbiAwIDAgMjQgMjQpIC0tLVxyXG4gICAgbGV0IHZpZXdCb3ggPSBzdmdDb250ZW50Lm1hdGNoKC92aWV3Qm94XFxzKj1cXHMqXCIoW15cIl0rKVwiLyk/LlsxXTtcclxuXHJcbiAgICBpZiAoIXZpZXdCb3gpIHtcclxuICAgICAgY29uc3Qgd01hdGNoID0gc3ZnQ29udGVudC5tYXRjaCgvXFxid2lkdGhcXHMqPVxccypcIihbXFxkLl0rKS8pO1xyXG4gICAgICBjb25zdCBoTWF0Y2ggPSBzdmdDb250ZW50Lm1hdGNoKC9cXGJoZWlnaHRcXHMqPVxccypcIihbXFxkLl0rKS8pO1xyXG4gICAgICBjb25zdCB3ID0gd01hdGNoID8gcGFyc2VGbG9hdCh3TWF0Y2hbMV0pIDogMjQ7XHJcbiAgICAgIGNvbnN0IGggPSBoTWF0Y2ggPyBwYXJzZUZsb2F0KGhNYXRjaFsxXSkgOiAyNDtcclxuICAgICAgdmlld0JveCA9IGAwIDAgJHt3fSAke2h9YDtcclxuICAgIH1cclxuXHJcbiAgICAvLyAtLS0gMi4gRXh0cmFjdCBpbm5lciBjb250ZW50IG9mIDxzdmc+Li4uPC9zdmc+IC0tLVxyXG4gICAgY29uc3QgaW5uZXJNYXRjaCA9IHN2Z0NvbnRlbnQubWF0Y2goLzxzdmdbXj5dKj4oW1xcc1xcU10qPyk8XFwvc3ZnPi9pKTtcclxuICAgIGxldCBjb250ZW50ID0gaW5uZXJNYXRjaCA/IGlubmVyTWF0Y2hbMV0gOiBzdmdDb250ZW50O1xyXG5cclxuICAgIC8vIC0tLSAzLiBSZW1vdmUgWE1MIGRlY2xhcmF0aW9uIGFuZCBjb21tZW50cyAtLS1cclxuICAgIGNvbnRlbnQgPSBjb250ZW50XHJcbiAgICAgIC5yZXBsYWNlKC88XFw/eG1sW1xcc1xcU10qP1xcPz4vZywgJycpXHJcbiAgICAgIC5yZXBsYWNlKC88IS0tW1xcc1xcU10qPy0tPi9nLCAnJyk7XHJcblxyXG4gICAgLy8gLS0tIDQuIENvbGxhcHNlIHdoaXRlc3BhY2UgYmV0d2VlbiB0YWdzIGJ1dCBrZWVwIHRoZSBzaGFwZSBtYXJrdXAgaW50YWN0IC0tLVxyXG4gICAgLy8gICAgS2VlcHMgdGhlIGV4YWN0IGF0dHJpYnV0ZXMgYnV0IGF2b2lkcyBnaWFudCBydW5zIG9mIHNwYWNlcy9uZXdsaW5lcy5cclxuICAgIGNvbnRlbnQgPSBjb250ZW50XHJcbiAgICAgIC5yZXBsYWNlKC9cXHMrL2csICcgJykgICAgICAvLyBjb2xsYXBzZSBhbGwgd2hpdGVzcGFjZSB0byBzaW5nbGUgc3BhY2VzXHJcbiAgICAgIC5yZXBsYWNlKC8+XFxzKzwvZywgJz48JykgICAvLyByZW1vdmUgd2hpdGVzcGFjZSBiZXR3ZWVuIGFkamFjZW50IHRhZ3NcclxuICAgICAgLnRyaW0oKTtcclxuXHJcbiAgICAvLyAtLS0gNS4gQnVpbGQgdGhlIGljb24gZGVzY3JpcHRvciAtLS1cclxuICAgIGNvbnN0IGljb24gPSB7XHJcbiAgICAgIG5hbWU6IGljb25OYW1lLFxyXG4gICAgICBjb250ZW50OiBjb250ZW50LFxyXG4gICAgICB2aWV3Qm94OiB2aWV3Qm94LFxyXG4gICAgICB2YXJpYW50czoge1xyXG4gICAgICAgIHNvbGlkOiAnJyxcclxuICAgICAgICBvdXRsaW5lOiAnJyxcclxuICAgICAgICBkdW90b25lOiAnJ1xyXG4gICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIC8vIC0tLSA2LiBTdG9yZSBvbiB0aGUgY2FsbGVyJ3Mgb2JqZWN0IChzYW1lIHBhdHRlcm4gYXMgYmVmb3JlKSAtLS1cclxuICAgIGlmICghb2JqZWN0LnN2Z19kYXRhKSBvYmplY3Quc3ZnX2RhdGEgPSB7fTtcclxuICAgIG9iamVjdC5zdmdfZGF0YVtjb2x1bW5dID0gaWNvbjtcclxuXHJcblxyXG4gICAgY29uc29sZS5sb2coJ2NvbnZlcnRTdmdUb0tlbmRvSWNvbjonLCBpY29uKTtcclxuICAgIHJldHVybiBpY29uO1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBpZiAob2JqZWN0LnN2Z19kYXRhKSBvYmplY3Quc3ZnX2RhdGFbY29sdW1uXSA9IHt9O1xyXG4gICAgY29uc29sZS5lcnJvcihgY29udmVydFN2Z1RvS2VuZG9JY29uIGVycm9yOiAke2ljb25OYW1lfWAsIGVycm9yKTtcclxuICAgIHJldHVybiBudWxsO1xyXG4gIH1cclxufVxyXG5cclxuY29udmVydFN2Z1RvS2VuZG9JY29uKG9iamVjdCwgc3ZnQ29udGVudDogc3RyaW5nLCBpY29uTmFtZTogc3RyaW5nLCBjb2x1bW4pIHtcclxuICBpZiAoICh0eXBlb2YgaWNvbk5hbWUgPT09ICd1bmRlZmluZWQnKSB8fCBpY29uTmFtZSA9PT0gbnVsbCApIGljb25OYW1lID0gY29sdW1uO1xyXG4gIGNvbnNvbGUubG9nKFwiY29udmVydFN2Z1RvS2VuZG9JY29uOnN2Z0NvbnRlbnQ6XCIsIHN2Z0NvbnRlbnQsIFwiaWNvbk5hbWU6XCIsIGljb25OYW1lLCBcImNvbHVtbjpcIiwgY29sdW1uKTtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgLy8gRXh0cmFjdCB2aWV3Qm94XHJcbiAgICAgICAgY29uc3Qgdmlld0JveE1hdGNoID0gc3ZnQ29udGVudC5tYXRjaCgvdmlld0JveD1cIihbXlwiXSspXCIvKTtcclxuICAgICAgICBjb25zdCB2aWV3Qm94ID0gdmlld0JveE1hdGNoID8gdmlld0JveE1hdGNoWzFdIDogJzAgMCAyNCAyNCc7XHJcblxyXG4gICAgICAgIC8vIFBhcnNlIHZpZXdCb3ggdmFsdWVzXHJcbiAgICAgICAgY29uc3Qgdmlld0JveFZhbHVlcyA9IHZpZXdCb3guc3BsaXQoJyAnKS5tYXAoTnVtYmVyKTtcclxuICAgICAgICBjb25zdCBbbWluWCwgbWluWSwgdmlld0JveFdpZHRoLCB2aWV3Qm94SGVpZ2h0XSA9IHZpZXdCb3hWYWx1ZXM7XHJcblxyXG4gICAgICAgIC8vIEV4dHJhY3Qgd2lkdGggYW5kIGhlaWdodCBpZiBzcGVjaWZpZWRcclxuICAgICAgICBjb25zdCB3aWR0aE1hdGNoID0gc3ZnQ29udGVudC5tYXRjaCgvd2lkdGg9XCIoW15cIl0rKVwiLyk7XHJcbiAgICAgICAgY29uc3QgaGVpZ2h0TWF0Y2ggPSBzdmdDb250ZW50Lm1hdGNoKC9oZWlnaHQ9XCIoW15cIl0rKVwiLyk7XHJcbiAgICAgICAgY29uc3Qgc3ZnV2lkdGggPSB3aWR0aE1hdGNoID8gcGFyc2VGbG9hdCh3aWR0aE1hdGNoWzFdKSA6IHZpZXdCb3hXaWR0aDtcclxuICAgICAgICBjb25zdCBzdmdIZWlnaHQgPSBoZWlnaHRNYXRjaCA/IHBhcnNlRmxvYXQoaGVpZ2h0TWF0Y2hbMV0pIDogdmlld0JveEhlaWdodDtcclxuXHJcbiAgICAgICAgLy8gVGFyZ2V0IHNpemUgZm9yIG5vcm1hbGl6YXRpb24gKDI0eDI0IGlzIGNvbW1vbiBmb3IgaWNvbnMpXHJcbiAgICAgICAgY29uc3QgVEFSR0VUX1NJWkUgPSAyNDtcclxuXHJcbiAgICAgICAgLy8gQ2FsY3VsYXRlIHNjYWxlIHRvIGZpdCB3aXRoaW4gdGFyZ2V0IHNpemUgd2hpbGUgbWFpbnRhaW5pbmcgYXNwZWN0IHJhdGlvXHJcbiAgICAgICAgY29uc3Qgc2NhbGVYID0gVEFSR0VUX1NJWkUgLyB2aWV3Qm94V2lkdGg7XHJcbiAgICAgICAgY29uc3Qgc2NhbGVZID0gVEFSR0VUX1NJWkUgLyB2aWV3Qm94SGVpZ2h0O1xyXG4gICAgICAgIGNvbnN0IHNjYWxlID0gTWF0aC5taW4oc2NhbGVYLCBzY2FsZVkpOyAvLyBVc2UgbWluIHRvIGZpdCB3aXRoaW4gdGFyZ2V0IGJvdW5kc1xyXG5cclxuICAgICAgICAvLyBDYWxjdWxhdGUgb2Zmc2V0IHRvIGNlbnRlciB0aGUgaWNvblxyXG4gICAgICAgIGNvbnN0IHNjYWxlZFdpZHRoID0gdmlld0JveFdpZHRoICogc2NhbGU7XHJcbiAgICAgICAgY29uc3Qgc2NhbGVkSGVpZ2h0ID0gdmlld0JveEhlaWdodCAqIHNjYWxlO1xyXG4gICAgICAgIGNvbnN0IG9mZnNldFggPSAoVEFSR0VUX1NJWkUgLSBzY2FsZWRXaWR0aCkgLyAyO1xyXG4gICAgICAgIGNvbnN0IG9mZnNldFkgPSAoVEFSR0VUX1NJWkUgLSBzY2FsZWRIZWlnaHQpIC8gMjtcclxuXHJcbiAgICAgICAgLy8gRXh0cmFjdCBhbGwgcGF0aHMgd2l0aCB0aGVpciBzdHlsZXMgYW5kIGF0dHJpYnV0ZXNcclxuICAgICAgICBjb25zdCBwYXRoUmVnZXggPSAvPHBhdGhbXj5dKj4vZztcclxuICAgICAgICBsZXQgbWF0Y2g7XHJcbiAgICAgICAgbGV0IHBhdGhzID0gW107XHJcbiAgICAgICAgbGV0IHBhdGhDb3VudCA9IDA7XHJcblxyXG4gICAgICAgIHdoaWxlICgobWF0Y2ggPSBwYXRoUmVnZXguZXhlYyhzdmdDb250ZW50KSkgIT09IG51bGwpIHtcclxuICAgICAgICAgICAgY29uc3QgcGF0aFRhZyA9IG1hdGNoWzBdO1xyXG4gICAgICAgICAgICBwYXRoQ291bnQrKztcclxuXHJcbiAgICAgICAgICAgIC8vIEV4dHJhY3QgZCBhdHRyaWJ1dGUgKHJlcXVpcmVkKVxyXG4gICAgICAgICAgICBjb25zdCBkTWF0Y2ggPSBwYXRoVGFnLm1hdGNoKC9kPVwiKFteXCJdKilcIi8pO1xyXG4gICAgICAgICAgICBpZiAoIWRNYXRjaCkge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS53YXJuKGBQYXRoICR7cGF0aENvdW50fSBoYXMgbm8gJ2QnIGF0dHJpYnV0ZSwgc2tpcHBpbmdgKTtcclxuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvLyBUcmFuc2Zvcm0gdGhlIHBhdGggZGF0YSB0byBzY2FsZSBhbmQgY2VudGVyIGl0XHJcbiAgICAgICAgICAgIGNvbnN0IHRyYW5zZm9ybWVkRCA9IHRoaXMudHJhbnNmb3JtUGF0aERhdGEoZE1hdGNoWzFdLCBzY2FsZSwgb2Zmc2V0WCwgb2Zmc2V0WSwgdmlld0JveFdpZHRoLCB2aWV3Qm94SGVpZ2h0KTtcclxuXHJcbiAgICAgICAgICAgIC8vIEluaXRpYWxpemUgYXR0cmlidXRlc1xyXG4gICAgICAgICAgICBsZXQgZmlsbCA9ICcnO1xyXG4gICAgICAgICAgICBsZXQgc3Ryb2tlID0gJyc7XHJcbiAgICAgICAgICAgIGxldCBzdHJva2VXaWR0aCA9ICcnO1xyXG4gICAgICAgICAgICBsZXQgZmlsbE9wYWNpdHkgPSAnJztcclxuICAgICAgICAgICAgbGV0IHN0cm9rZU9wYWNpdHkgPSAnJztcclxuICAgICAgICAgICAgbGV0IG9wYWNpdHkgPSAnJztcclxuXHJcbiAgICAgICAgICAgIC8vIEV4dHJhY3QgZnJvbSBzdHlsZSBhdHRyaWJ1dGVcclxuICAgICAgICAgICAgY29uc3Qgc3R5bGVNYXRjaCA9IHBhdGhUYWcubWF0Y2goL3N0eWxlPVwiKFteXCJdKilcIi8pO1xyXG4gICAgICAgICAgICBpZiAoc3R5bGVNYXRjaCkge1xyXG4gICAgICAgICAgICAgICAgY29uc3Qgc3R5bGUgPSBzdHlsZU1hdGNoWzFdO1xyXG5cclxuICAgICAgICAgICAgICAgIC8vIEV4dHJhY3QgYWxsIHN0eWxlIHByb3BlcnRpZXNcclxuICAgICAgICAgICAgICAgIGNvbnN0IGZpbGxNYXRjaCA9IHN0eWxlLm1hdGNoKC9maWxsOihbXjtcIl0rKS8pO1xyXG4gICAgICAgICAgICAgICAgaWYgKGZpbGxNYXRjaCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGZpbGxWYWx1ZSA9IGZpbGxNYXRjaFsxXS50cmltKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGZpbGxWYWx1ZSAmJiBmaWxsVmFsdWUgIT09ICcnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpbGwgPSBmaWxsVmFsdWU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGNvbnN0IHN0cm9rZU1hdGNoID0gc3R5bGUubWF0Y2goL3N0cm9rZTooW147XCJdKykvKTtcclxuICAgICAgICAgICAgICAgIGlmIChzdHJva2VNYXRjaCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHN0cm9rZVZhbHVlID0gc3Ryb2tlTWF0Y2hbMV0udHJpbSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChzdHJva2VWYWx1ZSAmJiBzdHJva2VWYWx1ZSAhPT0gJycpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3Ryb2tlID0gc3Ryb2tlVmFsdWU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGNvbnN0IHN0cm9rZVdpZHRoTWF0Y2ggPSBzdHlsZS5tYXRjaCgvc3Ryb2tlLXdpZHRoOihbXjtcIl0rKS8pO1xyXG4gICAgICAgICAgICAgICAgaWYgKHN0cm9rZVdpZHRoTWF0Y2gpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBvcmlnaW5hbFN0cm9rZVdpZHRoID0gcGFyc2VGbG9hdChzdHJva2VXaWR0aE1hdGNoWzFdLnRyaW0oKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gU2NhbGUgc3Ryb2tlIHdpZHRoIHByb3BvcnRpb25hbGx5XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFpc05hTihvcmlnaW5hbFN0cm9rZVdpZHRoKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHJva2VXaWR0aCA9IChvcmlnaW5hbFN0cm9rZVdpZHRoICogc2NhbGUpLnRvU3RyaW5nKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGNvbnN0IGZpbGxPcGFjaXR5TWF0Y2ggPSBzdHlsZS5tYXRjaCgvZmlsbC1vcGFjaXR5OihbXjtcIl0rKS8pO1xyXG4gICAgICAgICAgICAgICAgaWYgKGZpbGxPcGFjaXR5TWF0Y2gpIHtcclxuICAgICAgICAgICAgICAgICAgICBmaWxsT3BhY2l0eSA9IGZpbGxPcGFjaXR5TWF0Y2hbMV0udHJpbSgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGNvbnN0IHN0cm9rZU9wYWNpdHlNYXRjaCA9IHN0eWxlLm1hdGNoKC9zdHJva2Utb3BhY2l0eTooW147XCJdKykvKTtcclxuICAgICAgICAgICAgICAgIGlmIChzdHJva2VPcGFjaXR5TWF0Y2gpIHtcclxuICAgICAgICAgICAgICAgICAgICBzdHJva2VPcGFjaXR5ID0gc3Ryb2tlT3BhY2l0eU1hdGNoWzFdLnRyaW0oKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBjb25zdCBvcGFjaXR5TWF0Y2ggPSBzdHlsZS5tYXRjaCgvb3BhY2l0eTooW147XCJdKykvKTtcclxuICAgICAgICAgICAgICAgIGlmIChvcGFjaXR5TWF0Y2gpIHtcclxuICAgICAgICAgICAgICAgICAgICBvcGFjaXR5ID0gb3BhY2l0eU1hdGNoWzFdLnRyaW0oKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLy8gSWYgbm8gc3R5bGUsIGNoZWNrIGluZGl2aWR1YWwgYXR0cmlidXRlc1xyXG4gICAgICAgICAgICBpZiAoIXN0eWxlTWF0Y2gpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGZpbGxBdHRyID0gcGF0aFRhZy5tYXRjaCgvZmlsbD1cIihbXlwiXSopXCIvKTtcclxuICAgICAgICAgICAgICAgIGlmIChmaWxsQXR0ciAmJiBmaWxsQXR0clsxXSAhPT0gJycpIHtcclxuICAgICAgICAgICAgICAgICAgICBmaWxsID0gZmlsbEF0dHJbMV07XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgY29uc3Qgc3Ryb2tlQXR0ciA9IHBhdGhUYWcubWF0Y2goL3N0cm9rZT1cIihbXlwiXSopXCIvKTtcclxuICAgICAgICAgICAgICAgIGlmIChzdHJva2VBdHRyICYmIHN0cm9rZUF0dHJbMV0gIT09ICcnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc3Ryb2tlID0gc3Ryb2tlQXR0clsxXTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBjb25zdCBzdHJva2VXaWR0aEF0dHIgPSBwYXRoVGFnLm1hdGNoKC9zdHJva2Utd2lkdGg9XCIoW15cIl0qKVwiLyk7XHJcbiAgICAgICAgICAgICAgICBpZiAoc3Ryb2tlV2lkdGhBdHRyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgb3JpZ2luYWxTdHJva2VXaWR0aCA9IHBhcnNlRmxvYXQoc3Ryb2tlV2lkdGhBdHRyWzFdKTtcclxuICAgICAgICAgICAgICAgICAgICAvLyBTY2FsZSBzdHJva2Ugd2lkdGggcHJvcG9ydGlvbmFsbHlcclxuICAgICAgICAgICAgICAgICAgICBpZiAoIWlzTmFOKG9yaWdpbmFsU3Ryb2tlV2lkdGgpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0cm9rZVdpZHRoID0gKG9yaWdpbmFsU3Ryb2tlV2lkdGggKiBzY2FsZSkudG9TdHJpbmcoKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgY29uc3QgZmlsbE9wYWNpdHlBdHRyID0gcGF0aFRhZy5tYXRjaCgvZmlsbC1vcGFjaXR5PVwiKFteXCJdKilcIi8pO1xyXG4gICAgICAgICAgICAgICAgaWYgKGZpbGxPcGFjaXR5QXR0cikge1xyXG4gICAgICAgICAgICAgICAgICAgIGZpbGxPcGFjaXR5ID0gZmlsbE9wYWNpdHlBdHRyWzFdO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGNvbnN0IHN0cm9rZU9wYWNpdHlBdHRyID0gcGF0aFRhZy5tYXRjaCgvc3Ryb2tlLW9wYWNpdHk9XCIoW15cIl0qKVwiLyk7XHJcbiAgICAgICAgICAgICAgICBpZiAoc3Ryb2tlT3BhY2l0eUF0dHIpIHtcclxuICAgICAgICAgICAgICAgICAgICBzdHJva2VPcGFjaXR5ID0gc3Ryb2tlT3BhY2l0eUF0dHJbMV07XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8vIEJ1aWxkIHBhdGggZWxlbWVudCB3aXRoIHRyYW5zZm9ybWVkIGQgYXR0cmlidXRlXHJcbiAgICAgICAgICAgIGxldCBwYXRoRWxlbWVudCA9IGA8cGF0aCBkPVwiJHt0cmFuc2Zvcm1lZER9XCJgO1xyXG5cclxuICAgICAgICAgICAgLy8gQWRkIGZpbGwgaWYgaXQgZXhpc3RzIChpbmNsdWRpbmcgJ25vbmUnKVxyXG4gICAgICAgICAgICBpZiAoZmlsbCAmJiBmaWxsICE9PSAnJykge1xyXG4gICAgICAgICAgICAgICAgcGF0aEVsZW1lbnQgKz0gYCBmaWxsPVwiJHtmaWxsfVwiYDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLy8gQWRkIHN0cm9rZSBpZiBpdCBleGlzdHMgKGluY2x1ZGluZyAnbm9uZScpXHJcbiAgICAgICAgICAgIGlmIChzdHJva2UgJiYgc3Ryb2tlICE9PSAnJykge1xyXG4gICAgICAgICAgICAgICAgcGF0aEVsZW1lbnQgKz0gYCBzdHJva2U9XCIke3N0cm9rZX1cImA7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8vIEFkZCBzdHJva2Utd2lkdGggaWYgaXQgZXhpc3RzXHJcbiAgICAgICAgICAgIGlmIChzdHJva2VXaWR0aCAmJiBzdHJva2VXaWR0aCAhPT0gJycpIHtcclxuICAgICAgICAgICAgICAgIHBhdGhFbGVtZW50ICs9IGAgc3Ryb2tlLXdpZHRoPVwiJHtzdHJva2VXaWR0aH1cImA7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8vIEFkZCBvcGFjaXR5IGlmIGl0IGV4aXN0c1xyXG4gICAgICAgICAgICBpZiAob3BhY2l0eSAmJiBvcGFjaXR5ICE9PSAnJykge1xyXG4gICAgICAgICAgICAgICAgcGF0aEVsZW1lbnQgKz0gYCBvcGFjaXR5PVwiJHtvcGFjaXR5fVwiYDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLy8gQWRkIGZpbGwtb3BhY2l0eSBpZiBpdCBleGlzdHNcclxuICAgICAgICAgICAgaWYgKGZpbGxPcGFjaXR5ICYmIGZpbGxPcGFjaXR5ICE9PSAnJykge1xyXG4gICAgICAgICAgICAgICAgcGF0aEVsZW1lbnQgKz0gYCBmaWxsLW9wYWNpdHk9XCIke2ZpbGxPcGFjaXR5fVwiYDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLy8gQWRkIHN0cm9rZS1vcGFjaXR5IGlmIGl0IGV4aXN0c1xyXG4gICAgICAgICAgICBpZiAoc3Ryb2tlT3BhY2l0eSAmJiBzdHJva2VPcGFjaXR5ICE9PSAnJykge1xyXG4gICAgICAgICAgICAgICAgcGF0aEVsZW1lbnQgKz0gYCBzdHJva2Utb3BhY2l0eT1cIiR7c3Ryb2tlT3BhY2l0eX1cImA7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHBhdGhFbGVtZW50ICs9IGAgLz5gO1xyXG4gICAgICAgICAgICBwYXRocy5wdXNoKHBhdGhFbGVtZW50KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJjb252ZXJ0U3ZnVG9LZW5kb0ljb246aGVyZTE6XCIpO1xyXG5cclxuICAgICAgICAvLyBJZiBubyBwYXRocyBmb3VuZCwgdHJ5IHRvIGV4dHJhY3QgZnJvbSBTVkcgY29udGVudCBkaXJlY3RseSAoZmFsbGJhY2spXHJcbiAgICAgICAgaWYgKHBhdGhzLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgICAgICBjb25zb2xlLndhcm4oJ05vIHBhdGhzIGZvdW5kIGluIFNWRywgdHJ5aW5nIGZhbGxiYWNrIGV4dHJhY3Rpb24nKTtcclxuICAgICAgICAgICAgY29uc3QgY29udGVudE1hdGNoID0gc3ZnQ29udGVudC5tYXRjaCgvPHN2Z1tePl0qPihbXFxzXFxTXSo/KTxcXC9zdmc+Lyk7XHJcbiAgICAgICAgICAgIGlmIChjb250ZW50TWF0Y2ggJiYgY29udGVudE1hdGNoWzFdKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBpbm5lckNvbnRlbnQgPSBjb250ZW50TWF0Y2hbMV07XHJcbiAgICAgICAgICAgICAgICBjb25zdCBpbm5lclBhdGhSZWdleCA9IC88cGF0aFtePl0qPi9nO1xyXG4gICAgICAgICAgICAgICAgbGV0IGlubmVyTWF0Y2g7XHJcbiAgICAgICAgICAgICAgICB3aGlsZSAoKGlubmVyTWF0Y2ggPSBpbm5lclBhdGhSZWdleC5leGVjKGlubmVyQ29udGVudCkpICE9PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcGF0aHMucHVzaChpbm5lck1hdGNoWzBdKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gSWYgc3RpbGwgbm8gcGF0aHMsIHJldHVybiBudWxsIG9yIHRocm93IGVycm9yXHJcbiAgICAgICAgaWYgKHBhdGhzLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKGBObyBwYXRocyBmb3VuZCBpbiBTVkcgZm9yIGljb246ICR7aWNvbk5hbWV9YCk7XHJcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gQnVpbGQgdGhlIGNvbnRlbnQgc3RyaW5nIHdpdGggcHJvcGVyIGZvcm1hdHRpbmdcclxuICAgICAgICBjb25zdCBjb250ZW50ID0gcGF0aHMuam9pbignJyk7XHJcblxyXG4gICAgICAgIC8vIFVzZSB0aGUgdGFyZ2V0IHNpemUgYXMgdGhlIG5vcm1hbGl6ZWQgdmlld0JveFxyXG4gICAgICAgIGNvbnN0IG5vcm1hbGl6ZWRWaWV3Qm94ID0gYDAgMCAke1RBUkdFVF9TSVpFfSAke1RBUkdFVF9TSVpFfWA7XHJcblxyXG4gICAgICAgIC8vIENyZWF0ZSB0aGUgS2VuZG8gaWNvbiBzdHJ1Y3R1cmVcclxuICAgICAgICBvYmplY3Quc3ZnX2RhdGFbY29sdW1uXSA9IHtcclxuICAgICAgICAgICAgbmFtZTogaWNvbk5hbWUsXHJcbiAgICAgICAgICAgIGNvbnRlbnQ6IGNvbnRlbnQsXHJcbiAgICAgICAgICAgIHZpZXdCb3g6IG5vcm1hbGl6ZWRWaWV3Qm94LFxyXG4gICAgICAgICAgICB2YXJpYW50czoge1xyXG4gICAgICAgICAgICAgICAgc29saWQ6ICcnLFxyXG4gICAgICAgICAgICAgICAgb3V0bGluZTogJycsXHJcbiAgICAgICAgICAgICAgICBkdW90b25lOiAnJ1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgICAgICBjb25zb2xlLmxvZyhcImNvbnZlcnRTdmdUb0tlbmRvSWNvbjpvYmplY3Quc3ZnX2RhdGE6XCIsIG9iamVjdC5zdmdfZGF0YSk7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgbmFtZTogaWNvbk5hbWUsXHJcbiAgICAgICAgICAgIGNvbnRlbnQ6IGNvbnRlbnQsXHJcbiAgICAgICAgICAgIHZpZXdCb3g6IG5vcm1hbGl6ZWRWaWV3Qm94LFxyXG4gICAgICAgICAgICB2YXJpYW50czoge1xyXG4gICAgICAgICAgICAgICAgc29saWQ6IGNvbnRlbnQsXHJcbiAgICAgICAgICAgICAgICBvdXRsaW5lOiAnJyxcclxuICAgICAgICAgICAgICAgIGR1b3RvbmU6ICcnXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICBvYmplY3Quc3ZnX2RhdGFbY29sdW1uXSA9IHt9O1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoYEVycm9yIGNvbnZlcnRpbmcgU1ZHIHRvIEtlbmRvIGljb246ICR7aWNvbk5hbWV9YCwgZXJyb3IpO1xyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG59XHJcblxyXG4vLyBIZWxwZXIgZnVuY3Rpb24gdG8gdHJhbnNmb3JtIHBhdGggZGF0YVxyXG50cmFuc2Zvcm1QYXRoRGF0YShkOiBzdHJpbmcsIHNjYWxlOiBudW1iZXIsIG9mZnNldFg6IG51bWJlciwgb2Zmc2V0WTogbnVtYmVyLCB2aWV3Qm94V2lkdGg6IG51bWJlciwgdmlld0JveEhlaWdodDogbnVtYmVyKTogc3RyaW5nIHtcclxuICAgIC8vIFRoaXMgZnVuY3Rpb24gdHJhbnNmb3JtcyB0aGUgcGF0aCBjb21tYW5kc1xyXG4gICAgLy8gSXQgaGFuZGxlcyBhYnNvbHV0ZSAodXBwZXJjYXNlKSBhbmQgcmVsYXRpdmUgKGxvd2VyY2FzZSkgY29tbWFuZHNcclxuICAgIFxyXG4gICAgY29uc3QgY29tbWFuZHMgPSBkLm1hdGNoKC9bYS16QS1aXVteYS16QS1aXSovZyk7XHJcbiAgICBpZiAoIWNvbW1hbmRzKSByZXR1cm4gZDtcclxuXHJcbiAgICBjb25zdCB0cmFuc2Zvcm1lZENvbW1hbmRzID0gY29tbWFuZHMubWFwKGNtZCA9PiB7XHJcbiAgICAgICAgY29uc3QgY29tbWFuZCA9IGNtZFswXTtcclxuICAgICAgICBjb25zdCB2YWx1ZXMgPSBjbWQuc2xpY2UoMSkudHJpbSgpLnNwbGl0KC9bXFxzLF0rLykuZmlsdGVyKHYgPT4gdiAhPT0gJycpLm1hcChOdW1iZXIpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGlmICh2YWx1ZXMubGVuZ3RoID09PSAwKSByZXR1cm4gY21kO1xyXG5cclxuICAgICAgICBsZXQgdHJhbnNmb3JtZWRWYWx1ZXM6IG51bWJlcltdID0gW107XHJcblxyXG4gICAgICAgIHN3aXRjaCAoY29tbWFuZCkge1xyXG4gICAgICAgICAgICBjYXNlICdNJzogLy8gTW92ZSB0byAoYWJzb2x1dGUpXHJcbiAgICAgICAgICAgIGNhc2UgJ0wnOiAvLyBMaW5lIHRvIChhYnNvbHV0ZSlcclxuICAgICAgICAgICAgY2FzZSAnQyc6IC8vIEN1YmljIEJlemllciAoYWJzb2x1dGUpXHJcbiAgICAgICAgICAgIGNhc2UgJ1MnOiAvLyBTbW9vdGggQmV6aWVyIChhYnNvbHV0ZSlcclxuICAgICAgICAgICAgY2FzZSAnUSc6IC8vIFF1YWRyYXRpYyBCZXppZXIgKGFic29sdXRlKVxyXG4gICAgICAgICAgICBjYXNlICdUJzogLy8gU21vb3RoIFF1YWRyYXRpYyAoYWJzb2x1dGUpXHJcbiAgICAgICAgICAgIGNhc2UgJ0EnOiAvLyBBcmMgKGFic29sdXRlKVxyXG4gICAgICAgICAgICBjYXNlICdaJzpcclxuICAgICAgICAgICAgY2FzZSAneic6XHJcbiAgICAgICAgICAgICAgICAvLyBEb24ndCB0cmFuc2Zvcm0gWiBjb21tYW5kc1xyXG4gICAgICAgICAgICAgICAgaWYgKGNvbW1hbmQgPT09ICdaJyB8fCBjb21tYW5kID09PSAneicpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gJ1onO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLy8gVHJhbnNmb3JtIGNvb3JkaW5hdGVzXHJcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHZhbHVlcy5sZW5ndGg7IGkgKz0gMikge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHggPSB2YWx1ZXNbaV07XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgeSA9IHZhbHVlc1tpICsgMV07XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFpc05hTih4KSAmJiAhaXNOYU4oeSkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtZWRWYWx1ZXMucHVzaCh4ICogc2NhbGUgKyBvZmZzZXRYKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtZWRWYWx1ZXMucHVzaCh5ICogc2NhbGUgKyBvZmZzZXRZKTtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm1lZFZhbHVlcy5wdXNoKHgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm1lZFZhbHVlcy5wdXNoKHkpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgY2FzZSAnbSc6IC8vIE1vdmUgdG8gKHJlbGF0aXZlKVxyXG4gICAgICAgICAgICBjYXNlICdsJzogLy8gTGluZSB0byAocmVsYXRpdmUpXHJcbiAgICAgICAgICAgIGNhc2UgJ2MnOiAvLyBDdWJpYyBCZXppZXIgKHJlbGF0aXZlKVxyXG4gICAgICAgICAgICBjYXNlICdzJzogLy8gU21vb3RoIEJlemllciAocmVsYXRpdmUpXHJcbiAgICAgICAgICAgIGNhc2UgJ3EnOiAvLyBRdWFkcmF0aWMgQmV6aWVyIChyZWxhdGl2ZSlcclxuICAgICAgICAgICAgY2FzZSAndCc6IC8vIFNtb290aCBRdWFkcmF0aWMgKHJlbGF0aXZlKVxyXG4gICAgICAgICAgICBjYXNlICdhJzogLy8gQXJjIChyZWxhdGl2ZSlcclxuICAgICAgICAgICAgICAgIC8vIFRyYW5zZm9ybSBjb29yZGluYXRlc1xyXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB2YWx1ZXMubGVuZ3RoOyBpICs9IDIpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCB4ID0gdmFsdWVzW2ldO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHkgPSB2YWx1ZXNbaSArIDFdO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICghaXNOYU4oeCkgJiYgIWlzTmFOKHkpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybWVkVmFsdWVzLnB1c2goeCAqIHNjYWxlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtZWRWYWx1ZXMucHVzaCh5ICogc2NhbGUpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybWVkVmFsdWVzLnB1c2goeCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybWVkVmFsdWVzLnB1c2goeSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICBjYXNlICdIJzogLy8gSG9yaXpvbnRhbCBsaW5lIChhYnNvbHV0ZSlcclxuICAgICAgICAgICAgICAgIHRyYW5zZm9ybWVkVmFsdWVzLnB1c2godmFsdWVzWzBdICogc2NhbGUgKyBvZmZzZXRYKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgY2FzZSAnaCc6IC8vIEhvcml6b250YWwgbGluZSAocmVsYXRpdmUpXHJcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm1lZFZhbHVlcy5wdXNoKHZhbHVlc1swXSAqIHNjYWxlKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgY2FzZSAnVic6IC8vIFZlcnRpY2FsIGxpbmUgKGFic29sdXRlKVxyXG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtZWRWYWx1ZXMucHVzaCh2YWx1ZXNbMF0gKiBzY2FsZSArIG9mZnNldFkpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICBjYXNlICd2JzogLy8gVmVydGljYWwgbGluZSAocmVsYXRpdmUpXHJcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm1lZFZhbHVlcy5wdXNoKHZhbHVlc1swXSAqIHNjYWxlKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgIC8vIFVua25vd24gY29tbWFuZCwga2VlcCBvcmlnaW5hbFxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGNtZDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIEZvcm1hdCB0aGUgdmFsdWVzIGFzIGEgc3RyaW5nXHJcbiAgICAgICAgY29uc3QgdmFsdWVTdHIgPSB0cmFuc2Zvcm1lZFZhbHVlcy5tYXAodiA9PiB7XHJcbiAgICAgICAgICAgIC8vIFJvdW5kIHRvIHJlYXNvbmFibGUgcHJlY2lzaW9uXHJcbiAgICAgICAgICAgIHJldHVybiBOdW1iZXIuaXNJbnRlZ2VyKHYpID8gdi50b1N0cmluZygpIDogdi50b0ZpeGVkKDQpO1xyXG4gICAgICAgIH0pLmpvaW4oJyAnKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIGNvbW1hbmQgKyB2YWx1ZVN0cjtcclxuICAgIH0pO1xyXG5cclxuICAgIHJldHVybiB0cmFuc2Zvcm1lZENvbW1hbmRzLmpvaW4oJycpO1xyXG59XHJcblxyXG5wdWJsaWMgZ2V0SW52YWxpZENvbnRyb2xzX2dyaWQob2JqZWN0KSB7XHJcbiAgLy9jb25zb2xlLmxvZyAoXCJ0ZXN0aW5nIGdldEludmFsaWRDb250cm9sczpcIiwgICBvYmplY3QuZm9ybUdyb3VwLmludmFsaWQsIG9iamVjdC5mb3JtR3JvdXAuY29udHJvbHMpXHJcbiAgY29uc3QgaW52YWxpZCA9IFtdO1xyXG4gIGNvbnN0IGNvbnRyb2xzID0gb2JqZWN0LmZvcm1Hcm91cC5jb250cm9scztcclxuICBmb3IgKGNvbnN0IG5hbWUgaW4gY29udHJvbHMpIHtcclxuICAgICAgaWYgKGNvbnRyb2xzW25hbWVdLmludmFsaWQpIHtcclxuICAgICAgICAgbGV0IG5hbWVNU2cgPSB0aGlzLmdldE5MUyhbXSwgJ29ybXBnbW9iX2ZtYi51c2VySW5mb09ybXBnbW9iRm1iQlN1YnNjcmliZXJbXCJuYW1lXCJdJyxuYW1lKVxyXG4gICAgICAgICAgaW52YWxpZC5wdXNoKG5hbWVNU2cpO1xyXG4gICAgICB9XHJcbiAgfVxyXG4gIHRoaXMuc2hvd05vdGlmaWNhdGlvbihcImVycm9yXCIsIHRoaXMuZ2V0TkxTKFtpbnZhbGlkLnRvU3RyaW5nKCldLFxyXG4gICdOT19WQUxJRF9EQVRBX0ZPUicsJ05vIHZhbGlkIGRhdGEgZm9yIDogICMjICcpKTtcclxuICByZXR1cm4gaW52YWxpZDtcclxufVxyXG59XHJcblxyXG4vKlxyXG5ASW5qZWN0YWJsZSh7XHJcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnLFxyXG59KVxyXG5leHBvcnQgY2xhc3Mgc3RhclNlcnZpY2VzIGV4dGVuZHMgc3Rhcl9TZXJ2aWNlcyB7XHJcblxyXG4gICAgY29uc3RydWN0b3IoXHJcbiAgICAgICAgbm90aWZpY2F0aW9uU2VydmljZTpOb3RpZmljYXRpb25TZXJ2aWNlLFxyXG4gICAgICAgIGRpYWxvZ1NlcnZpY2U6IERpYWxvZ1NlcnZpY2UsXHJcbiAgICAgICAgaHR0cDogSHR0cENsaWVudCwgICBtZXNzYWdlczogTWVzc2FnZVNlcnZpY2UpIHtcclxuICAgICAgICAvL2xldCBQYWdlID0gZW5jb2RlVVJJIChcIiZfcXVlcnk9R0VUX0VJTV9DT01NQU5EUyZTUENfRlVOQ1RJT049JyUnJkVYQ1NZU1RFTT0nU01OU18zJyZFUVVJUElEPSclJ1wiKTtcclxuICAgICAgICBsZXQgUGFnZSA9IGVuY29kZVVSSSAoXCJcIik7XHJcblxyXG5cclxuICAgICAgICBzdXBlcihcclxuICAgICAgICAgICAgbm90aWZpY2F0aW9uU2VydmljZSxcclxuICAgICAgICAgICAgZGlhbG9nU2VydmljZSxcclxuICAgICAgICAgICAgaHR0cCwgUGFnZSwgbWVzc2FnZXMpO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgcXVlcnlGb3JDYXRlZ29yeSh7IENhdGVnb3J5SUQgfTogeyBDYXRlZ29yeUlEOiBudW1iZXIgfSwgc3RhdGU/OiBhbnkpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLnF1ZXJ5KE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLCB7XHJcbiAgICAgICAgICAgIGZpbHRlcjoge1xyXG4gICAgICAgICAgICAgICAgZmlsdGVyczogW3tcclxuICAgICAgICAgICAgICAgICAgICBmaWVsZDogJ0NhdGVnb3J5SUQnLCBvcGVyYXRvcjogJ2VxJywgdmFsdWU6IENhdGVnb3J5SURcclxuICAgICAgICAgICAgICAgIH1dLFxyXG4gICAgICAgICAgICAgICAgbG9naWM6ICdhbmQnXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHF1ZXJ5Rm9yUHJvZHVjdE5hbWUoUHJvZHVjdE5hbWU6IHN0cmluZywgc3RhdGU/OiBhbnkpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLnF1ZXJ5KE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLCB7XHJcbiAgICAgICAgICAgIGZpbHRlcjoge1xyXG4gICAgICAgICAgICAgICAgZmlsdGVyczogW3tcclxuICAgICAgICAgICAgICAgICAgICBmaWVsZDogJ1Byb2R1Y3ROYW1lJywgb3BlcmF0b3I6ICdjb250YWlucycsIHZhbHVlOiBQcm9kdWN0TmFtZVxyXG4gICAgICAgICAgICAgICAgfV0sXHJcbiAgICAgICAgICAgICAgICBsb2dpYzogJ2FuZCdcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pKTtcclxuICAgIH1cclxuXHJcbn1cclxuXHJcbiovXHJcbiJdfQ==