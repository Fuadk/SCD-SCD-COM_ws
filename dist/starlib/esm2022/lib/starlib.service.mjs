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
            console.log("onNew: object.masterKey:" + object.masterKey);
        object.myFiles = [];
        // object.img_gallery = [];
        // object.img_arr = [];
        object.form.reset(object.formInitialValues, { emitEvent: object.emitEvent != null ? object.emitEvent : true });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhcmxpYi5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vcHJvamVjdHMvc3RhcmxpYi9zcmMvbGliL3N0YXJsaWIuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBYyxXQUFXLEVBQUUsV0FBVyxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFJNUUsT0FBTyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUMxQyxtQ0FBbUM7QUFDbkMsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUNsQyxPQUFPLEtBQUssUUFBUSxNQUFNLFdBQVcsQ0FBQztBQUN0QyxPQUFPLEVBQUUsVUFBVSxFQUFTLE1BQU0sZ0JBQWdCLENBQUM7QUFFbkQsT0FBTyxFQUE0QixpQkFBaUIsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBQzdGLE9BQU8sRUFBRSxHQUFHLEVBQUUsY0FBYyxFQUFFLE9BQU8sRUFBZSxNQUFNLDJCQUEyQixDQUFDO0FBRXRGLE9BQU8sRUFBRSxHQUFHLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUN0QyxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFFN0MsT0FBTyxFQUFHLFNBQVMsRUFBRSxrQkFBa0IsRUFBRSxNQUFNLFNBQVMsQ0FBQzs7Ozs7O0FBV3pELHFFQUFxRTtBQUNuRSxNQUFNLE9BQU8sWUFBWTtJQXFEdkIsWUFDWSxtQkFBd0MsRUFDeEMsYUFBNEIsRUFDNUIsSUFBZ0IsRUFDaEIsUUFBd0I7UUFFcEMsY0FBYztRQUNWLGlDQUFpQztRQU56Qix3QkFBbUIsR0FBbkIsbUJBQW1CLENBQXFCO1FBQ3hDLGtCQUFhLEdBQWIsYUFBYSxDQUFlO1FBQzVCLFNBQUksR0FBSixJQUFJLENBQVk7UUFDaEIsYUFBUSxHQUFSLFFBQVEs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bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgSHR0cENsaWVudCwgSHR0cEhlYWRlcnMsIEh0dHBSZXF1ZXN0IH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xyXG5pbXBvcnQgeyBHcmlkRGF0YVJlc3VsdCB9IGZyb20gJ0Bwcm9ncmVzcy9rZW5kby1hbmd1bGFyLWdyaWQnO1xyXG5pbXBvcnQgeyB0b09EYXRhU3RyaW5nIH0gZnJvbSAnQHByb2dyZXNzL2tlbmRvLWRhdGEtcXVlcnknO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBCZWhhdmlvclN1YmplY3QgfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgbWFwLCB0YXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XHJcbi8vaW1wb3J0IHsgQW55QVJlY29yZCB9IGZyb20gJ2Rucyc7XHJcbmltcG9ydCB7IHRocm93RXJyb3IgfSBmcm9tICdyeGpzJztcclxuaW1wb3J0ICogYXMgQ3J5cHRvSlMgZnJvbSAnY3J5cHRvLWpzJztcclxuaW1wb3J0IHsgY2F0Y2hFcnJvciwgcmV0cnkgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XHJcbmltcG9ydCB7IE5vdGlmaWNhdGlvblNlcnZpY2UgfSBmcm9tICdAcHJvZ3Jlc3Mva2VuZG8tYW5ndWxhci1ub3RpZmljYXRpb24nO1xyXG5pbXBvcnQgeyBEaWFsb2dTZXJ2aWNlLCBEaWFsb2dSZWYsIERpYWxvZ0Nsb3NlUmVzdWx0IH0gZnJvbSAnQHByb2dyZXNzL2tlbmRvLWFuZ3VsYXItZGlhbG9nJztcclxuaW1wb3J0IHsgRGF5LCBmaXJzdERheUluV2VlaywgZ2V0RGF0ZSwgdG9Mb2NhbERhdGUgfSBmcm9tICdAcHJvZ3Jlc3Mva2VuZG8tZGF0ZS1tYXRoJztcclxuaW1wb3J0IHsgUGFuZWxCYXJJdGVtTW9kZWwsIFBhbmVsQmFyU3RhdGVDaGFuZ2VFdmVudCB9IGZyb20gJ0Bwcm9ncmVzcy9rZW5kby1hbmd1bGFyLWxheW91dCc7XHJcbmltcG9ydCB7IE1kNSB9IGZyb20gJ3RzLW1kNS9kaXN0L21kNSc7XHJcbmltcG9ydCB7IGZvcm1hdERhdGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQgeyBrZXlmcmFtZXMgfSBmcm9tICdAYW5ndWxhci9hbmltYXRpb25zJztcclxuaW1wb3J0IHsgIHRhYnNDb2RlcywgY29tcG9uZW50Q29uZmlnRGVmIH0gZnJvbSAnLi9tb2RlbCc7XHJcblxyXG5pbXBvcnQgeyBNZXNzYWdlU2VydmljZSB9IGZyb20gJ0Bwcm9ncmVzcy9rZW5kby1hbmd1bGFyLWwxMG4nO1xyXG5pbXBvcnQgeyBNeU1lc3NhZ2VTZXJ2aWNlIH0gZnJvbSAnLi9teS1tZXNzYWdlLnNlcnZpY2UnO1xyXG5cclxuXHJcbmRlY2xhcmUgZnVuY3Rpb24gZ2V0UGFyYW1Db25maWcoKTogYW55O1xyXG5kZWNsYXJlIGZ1bmN0aW9uIHNldFBhcmFtQ29uZmlnKHZhcjE6YW55KTphbnk7XHJcbkBJbmplY3RhYmxlKHtcclxuICBwcm92aWRlZEluOiAncm9vdCcsXHJcbn0pXHJcbi8vZXhwb3J0IGNsYXNzIHN0YXJTZXJ2aWNlcyBleHRlbmRzIEJlaGF2aW9yU3ViamVjdDxHcmlkRGF0YVJlc3VsdD4ge1xyXG4gIGV4cG9ydCBjbGFzcyBzdGFyU2VydmljZXMgIHtcclxuICBwdWJsaWMgcGFyYW1Db25maWc6YW55O1xyXG4gIHByaXZhdGUgY3JlYXRlZEl0ZW1zOiBhbnlbXSA9IFtdO1xyXG4gIHByaXZhdGUgdXBkYXRlZEl0ZW1zOiBhbnlbXSA9IFtdO1xyXG4gIHByaXZhdGUgZGVsZXRlZEl0ZW1zOiBhbnlbXSA9IFtdO1xyXG4gIHB1YmxpYyBsb2FkaW5nOiBhbnk7XHJcbiAgcHVibGljIHJvdXRpbmVfbmFtZSA9IFwiXCI7XHJcbiAgcHVibGljIHNhdmVDaGFuZ2VzTXNnID0gXCJTY3JlZW4gY2hhbmdlZCwgYXJlIHlvdSBzdXJlIHlvdSB0byBuYXZpZ2F0ZT9cIjtcclxuICBwdWJsaWMgZGVsZXRlRGV0YWlsTXNnID0gXCJDYW4gbm90IGRlbGV0ZSBhcyBkZXRhaWwgaGFzIGRhdGEuXCI7XHJcbiAgcHVibGljIHBsZWFzZUNvbmZpcm1Nc2cgPSBcIlBsZWFzZSBjb25maXJtXCI7XHJcbiAgcHVibGljIGRlbGV0ZUNvbmZpcm1Nc2cgPSBcIkFyZSB5b3Ugc3VyZSB5b3Ugd2FudCB0byBkZWxldGUgdGhpcyByZWNvcmQ/XCI7XHJcbiAgcHVibGljIG5vdGhpbmdUb0RlbGV0ZWxNc2cgPSBcIk5vIHJlY29yZHMgdG8gZGVsZXRlLlwiO1xyXG4gIHB1YmxpYyBmaWVsZHNSZXF1aXJlZE1zZyA9IFwiUGxlYXNlIGVudGVyIHJlcXVpcmVkIGZpZWxkcy5cIlxyXG4gIHB1YmxpYyByZWFkT25seU1zZyA9IFwiQ2FuIG5vdCBzYXZlICwgeW91ciBhdXRob3JpdHkgaXMgcmVhZG9ubHkuXCJcclxuICBwdWJsaWMgbm9BY2Nlc3NNc2cgPSBcIllvdSBkb250IGhhdmUgYWNjZXNzIHRvIHRoaXMgcm91dGluZS5cIlxyXG4gIHB1YmxpYyBzdGFuZGFyZEVycm9yTXNnID0gXCJFcnJvciBwZXJmb3JtaW5nIHRyYW5zYWN0aW9uXCJcclxuICBwdWJsaWMgc2F2ZU1hc3Rlck1zZyA9IFwiU2F2ZSBtYXN0ZXIgcmVjb3JkIGZpcnN0LlwiXHJcbiAgcHVibGljIGVudGVyUXVlcnlNc2cgPSAgXCJFbnRlciBhbnkgZmllbGQgdG8gc2VhcmNoIChlLmc6IG5hbWUlKSBhbmQgdGhlbiBwcmVzcyBFeGVjdXRlIFF1ZXJ5XCI7XHJcbiAgcHVibGljIGhlbHBNc2cgPSBcIlwiO1xyXG4gIHB1YmxpYyBoZWxwTXNnX2dyaWQgPSBcIlwiO1xyXG4gIHB1YmxpYyBVU0VSTkFNRSA9IFwiXCI7XHJcbiAgcHVibGljIGhpZGVBZnRlciA9IDUwMDtcclxuICBwdWJsaWMgU3RyQXV0aCA9IFwiXCI7XHJcbiAgcHVibGljIFVTRVJfSU5GTzphbnk7XHJcbiAgcHVibGljIE1BU1RFUl9EQiA9IFwiXCI7XHJcbiAgcHVibGljIFVTRVJOQU1FX0RCID0gXCJcIjtcclxuICBwcml2YXRlIGh0dHBPcHRpb25zOmFueTtcclxuICBwdWJsaWMgbGltaXQgPSA1MDAwO1xyXG4gIHB1YmxpYyBZZXNOb0FjdGlvbnMgPSBbXHJcbiAgICB7IHRleHQ6ICdObycsIHByaW1hcnk6IGZhbHNlIH0sXHJcbiAgICB7IHRleHQ6ICdZZXMnLCBwcmltYXJ5OiB0cnVlIH1cclxuICBdO1xyXG4gIHB1YmxpYyBPa0FjdGlvbnMgPSBbXHJcbiAgICB7IHRleHQ6ICdPaycsIHByaW1hcnk6IGZhbHNlIH1cclxuICBdO1xyXG4gIHB1YmxpYyBzZXNzaW9uUGFyYW1zOmFueSA9IHt9O1xyXG5cclxuXHJcblxyXG4gICAgLy9wcml2YXRlIEJBU0VfVVJMID0gJ2h0dHBzOi8vb2RhdGFzYW1wbGVzZXJ2aWNlcy5henVyZXdlYnNpdGVzLm5ldC9WNC9Ob3J0aHdpbmQvTm9ydGh3aW5kLnN2Yy8nO1xyXG4gIC8vcHJpdmF0ZSBCQVNFX1VSTCA9ICdodHRwOi8vMTkyLjE2OC4xLjM6ODA5MC9hcGk/X2Zvcm1hdD1qc29uJl9saW1pdD01MCc7XHJcblxyXG4gIHB1YmxpYyBFUE1FTkdfVVJMID0gXCJcIjsgLy8naHR0cDovLzE5Mi4xNjguMS41OjgwOTIvZm9ybWF0JztcclxuICAgIC8vcHJpdmF0ZSBFUE1FTkdfVVJMID0gJ2h0dHA6Ly9nbWFzaHJvLmNvbTo4MDkyL2Zvcm1hdCc7XHJcblxyXG4gIHB1YmxpYyBTRVJWRVJfVVJMID0gXCJcIjsgLy8gJ2h0dHA6Ly9sb2NhbGhvc3Q6ODA5MCc7XHJcbiAgLy9wdWJsaWMgU0VSVkVSX1VSTCA9ICdodHRwOi8vZ21hc2hyby5jb206ODA5MCc7XHJcblxyXG4gICAgcHVibGljIEJBU0VfVVJMID0gdGhpcy5TRVJWRVJfVVJMICsgJy9hcGk/X2Zvcm1hdD1qc29uJl9saW1pdD0nICsgdGhpcy5saW1pdDtcclxuICAvL3ByaXZhdGUgQkFTRV9VUkwgPSAnaHR0cDovL2dtYXNocm8uY29tOjgwOTAvYXBpP19mb3JtYXQ9anNvbiZfbGltaXQ9JyArIHRoaXMubGltaXQ7XHJcbiAgICBwdWJsaWMgZUt5Y1NjciA9IFwiRFNQRUtZQ1wiO1xyXG4gIHB1YmxpYyBwb3J0YWxTY3IgPSBcIkRTUFBPUlRBTFwiO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKFxyXG4gICAgICAgIHByaXZhdGUgbm90aWZpY2F0aW9uU2VydmljZTogTm90aWZpY2F0aW9uU2VydmljZSxcclxuICAgICAgICBwcml2YXRlIGRpYWxvZ1NlcnZpY2U6IERpYWxvZ1NlcnZpY2UsXHJcbiAgICAgICAgcHJpdmF0ZSBodHRwOiBIdHRwQ2xpZW50LFxyXG4gICAgICAgIHByaXZhdGUgbWVzc2FnZXM6IE1lc3NhZ2VTZXJ2aWNlXHJcbiAgICApIHtcclxuICAgIC8vc3VwZXIobnVsbCk7XHJcbiAgICAgICAgLy9sb2dnZXIud2FybihcIldhcm5pbmcgbWVzc2FnZVwiKTtcclxuXHJcbiAgICB9XHJcblxyXG4gIC8vIHB1YmxpYyBxdWVyeShzdGF0ZTogYW55KTogdm9pZCB7XHJcbiAgLy8gICBsZXQgcXVlcnlOYW1lID0gXCJcIjtcclxuICAvLyAgIHRoaXMuZmV0Y2godGhpcywgcXVlcnlOYW1lKVxyXG4gIC8vICAgICAuc3Vic2NyaWJlKCh4OmFueSkgPT4gc3VwZXIubmV4dCh4KSk7XHJcbiAgLy8gfVxyXG4gIHB1YmxpYyByZW1vdmVSZWMoZ3JpZERhdGE6IGFueSwgZWRpdGVkUm93SW5kZXg6IG51bWJlcikge1xyXG5cclxuICAgICAgICAvL2xldCByZXN1bHQxID0gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShncmlkRGF0YSkpO1xyXG4gICAgaWYgKHR5cGVvZiBlZGl0ZWRSb3dJbmRleCAhPT0gXCJ1bmRlZmluZWRcIikge1xyXG4gICAgICBncmlkRGF0YS5kYXRhLnNwbGljZShlZGl0ZWRSb3dJbmRleCwgMSk7XHJcbiAgICAgICAgICBncmlkRGF0YS50b3RhbCA9IGdyaWREYXRhLmRhdGEubGVuZ3RoO1xyXG4gICAgICAgICAgLyogIC8vaWYgKHRoaXMucGFyYW1Db25maWcuREVCVUdfRkxBRykgY29uc29sZS5sb2coJ3JlbXZpbmcgZWRpdGVkUm93SW5kZXg6JyArIGVkaXRlZFJvd0luZGV4KVxyXG4gICAgICAgICAgICByZXN1bHQxLmRhdGEuc3BsaWNlKCBlZGl0ZWRSb3dJbmRleCAsIDEgKTtcclxuICAgICAgICAgICAgcmVzdWx0MS50b3RhbCA9IHJlc3VsdDEuZGF0YS5sZW5ndGg7Ki9cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBncmlkRGF0YTtcclxuICAgIH1cclxuICBwdWJsaWMgdXBkYXRlUmVjKGdyaWREYXRhOiBhbnksIGVkaXRlZFJvd0luZGV4OiBudW1iZXIsIE5ld1ZhbDogYW55KSB7XHJcbiAgICAgIGdyaWREYXRhLmRhdGFbZWRpdGVkUm93SW5kZXhdID0gTmV3VmFsO1xyXG5cclxuICAgICAgICByZXR1cm4gZ3JpZERhdGE7XHJcblxyXG4gICAgfVxyXG4gIHB1YmxpYyBhZGRSZWMoZ3JpZERhdGE6IGFueSwgTmV3VmFsOiBhbnkpIHtcclxuICAgICAgZ3JpZERhdGEuZGF0YS5wdXNoKE5ld1ZhbCk7XHJcbiAgICAgICAvKiBsZXQgcmVzdWx0ID17XCJkYXRhXCI6W10sIHRvdGFsOjB9O1xyXG4gICAgICAgIGxldCByZXN1bHQxID0gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShncmlkRGF0YSkpO1xyXG4gICAgICAgIE5ld1ZhbCA9IHRoaXMucGFyc2VUb0RhdGUoTmV3VmFsKTtcclxuICAgICAgICByZXN1bHQxLmRhdGEucHVzaChOZXdWYWwpO1xyXG4gICAgICAgIHJlc3VsdC5kYXRhID0gcmVzdWx0MS5kYXRhO1xyXG4gICAgICAgIHJlc3VsdC50b3RhbCA9IHJlc3VsdC5kYXRhLmxlbmd0aDtcclxuICAgICAgICByZXR1cm4gcmVzdWx0MTsqL1xyXG4gICAgICAgIHJldHVybiBncmlkRGF0YTtcclxuICAgIH1cclxuICAgIHB1YmxpYyBmb3JtYXRXaGVyZShOZXdWYWw6YW55KXtcclxuICAgICAgZnVuY3Rpb24gaXNEYXRlICh2YWx1ZTphbnkpIHtcclxuICAgICAgICByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBEYXRlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmdW5jdGlvbiBGT1JNQVRfSVNPX3BhcnNlKGQ6YW55KSB7IC8vIFRoaXMgZnVuY3Rpb24gd2FzIGFkZGVkIGZvciBDUk0uIENSTSBkYXRlcyBzaG91bGQgYmUgSVNPXHJcbiAgICAgICAgICB2YXIgZGF0ZUlzbyA9IGQudG9JU09TdHJpbmcoKTtcclxuICAgICAgICAgIHZhciBkYXRlSXNvQXJyID0gZGF0ZUlzby5zcGxpdChcIlRcIik7XHJcbiAgICAgICAgICBkYXRlSXNvID0gZGF0ZUlzb0FyclswXSArIFwiIFwiICsgZGF0ZUlzb0FyclsxXTtcclxuICAgICAgICAgIGRhdGVJc28gPSBkYXRlSXNvLnN1YnN0cigwLCAxOSk7XHJcbiAgICAgICAgICByZXR1cm4gZGF0ZUlzbztcclxuICAgICAgICB9XHJcbiAgICAgIGZ1bmN0aW9uIHBhcnNlVmFsdWUoa2V5OmFueSwgdmFsdWU6YW55KXtcclxuICAgICAgICBsZXQgcGhyYXNlID0gXCJcIjtcclxuICAgICAgICAvL2lmICh0aGlzLnBhcmFtQ29uZmlnLkRFQlVHX0ZMQUcpIGNvbnNvbGUubG9nKFwiaXNEYXRlOlwiICwgaXNEYXRlICh2YWx1ZSksIHZhbHVlKTtcclxuXHJcbiAgICAgICAgaWYgKGlzRGF0ZSAodmFsdWUpKXtcclxuICAgICAgICAgICAgLy92YWx1ZSA9IGdldERhdGUodmFsdWUpO1xyXG4gICAgICAgICAgICAvL3ZhbHVlID0gRk9STUFUX0lTT19wYXJzZSh2YWx1ZSk7XHJcbiAgICAgICAgICAgIHZhbHVlID0gdmFsdWUudG9JU09TdHJpbmcoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycgKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgIC8vIGl0J3MgYSBzdHJpbmdcclxuICAgICAgICAgIGlmICh2YWx1ZSAhPSBcIlwiICYmIHZhbHVlICE9IG51bGwgKVxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBsZXQgb3BlcmF0b3JzID0gXCI8PiE9XCJcclxuICAgICAgICAgICAgbGV0IG9wZXJhdG9yVmFsID0gXCJcIjtcclxuICAgICAgICAgICAgbGV0IHRyaW1lZWRWYWwgPSB2YWx1ZS50cmltKCk7XHJcbiAgICAgICAgICAgIGxldCBmaXJzdENoYXIgPSB0cmltZWVkVmFsLmNoYXJBdCgwKTtcclxuICAgICAgICAgICAgbGV0IG4gPSBvcGVyYXRvcnMuc2VhcmNoKGZpcnN0Q2hhcik7XHJcbiAgICAgICAgICAgIGlmICggbiAhPSAtMSl7XHJcbiAgICAgICAgICAgICAgaWYgKGZpcnN0Q2hhciA9PSBcInxcIilcclxuICAgICAgICAgICAgICAgIG9wZXJhdG9yVmFsID0gXCIgPSAnXCIgICsgdmFsdWUgKyBcIicgXCI7XHJcbiAgICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICAgICAgb3BlcmF0b3JWYWwgPSB2YWx1ZTtcclxuXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSBpZiAoIHZhbHVlLnRvVXBwZXJDYXNlKCkuc2VhcmNoKFwiJVwiKSAhPSAtMSlcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgIG9wZXJhdG9yVmFsID0gXCIgbGlrZSAnXCIgICsgdmFsdWUgKyBcIicgXCI7XHJcbiAgICAgICAgICAgICAgLy9pZiAodGhpcy5wYXJhbUNvbmZpZy5ERUJVR19GTEFHKSBjb25zb2xlLmxvZyhcIm9wZXJhdG9yVmFsOlwiKyBvcGVyYXRvclZhbClcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICBvcGVyYXRvclZhbCA9IFwiID0gJ1wiICArIHZhbHVlICsgXCInIFwiO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHBocmFzZSA9IGtleSArIGVuY29kZVVSSUNvbXBvbmVudChvcGVyYXRvclZhbCk7XHJcbiAgICAgICAgICAgIC8vcGhyYXNlID0ga2V5ICsgb3BlcmF0b3JWYWw7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2V7XHJcbiAgICAgICAgLy8gaXQncyBzb21ldGhpbmcgZWxzZVxyXG4gICAgICAgICAgbGV0IG9wZXJhdG9yVmFsID0gXCIgPSAnXCIgICsgdmFsdWUgKyBcIicgXCI7XHJcbiAgICAgICAgICBwaHJhc2UgPSBrZXkgKyBlbmNvZGVVUklDb21wb25lbnQob3BlcmF0b3JWYWwpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHBocmFzZTtcclxuICAgICAgfVxyXG5cclxuICAgICAgbGV0IHdoZXJlUGhyYXNlID0gXCJcIjtcclxuICAgICAgICBsZXQgd2hlcmVDbGF1c2UgPSBcIlwiO1xyXG4gICAgICAgIGlmICh0aGlzLnBhcmFtQ29uZmlnLkRFQlVHX0ZMQUcpIGNvbnNvbGUubG9nKFwiZm9ybWF0V2hlcmU6XCIpXHJcbiAgICAgICAgaWYgKHRoaXMucGFyYW1Db25maWcuREVCVUdfRkxBRykgY29uc29sZS5sb2coTmV3VmFsKVxyXG4gICAgICAgIE9iamVjdC5rZXlzKE5ld1ZhbCkuZm9yRWFjaChmdW5jdGlvbihrZXkpIHtcclxuICAgICAgICAgICAgbGV0IHZhbHVlID0gTmV3VmFsW2tleV07XHJcbiAgICAgICAgICAgIC8vaWYgKHRoaXMucGFyYW1Db25maWcuREVCVUdfRkxBRykgY29uc29sZS5sb2coa2V5ICsgXCI6XCIgKyB2YWx1ZSk7XHJcbiAgICAgICAgICAgIGlmICggKHR5cGVvZiB2YWx1ZSAhPT0gXCJ1bmRlZmluZWRcIiApICYmICh2YWx1ZSAhPT0gXCJcIiApICYmICh2YWx1ZSAhPT0gbnVsbCkgKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgbGV0IHBocmFzZSA9IHBhcnNlVmFsdWUoa2V5LCB2YWx1ZSk7XHJcblxyXG4gICAgICAgICAgICAgIGlmICh3aGVyZVBocmFzZSA9PSBcIlwiKVxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHdoZXJlUGhyYXNlID0gd2hlcmVQaHJhc2UgKyAgIHBocmFzZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB3aGVyZVBocmFzZSA9IHdoZXJlUGhyYXNlICsgXCIgYW5kIFwiICsgcGhyYXNlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGlmICh3aGVyZVBocmFzZSAhPSBcIlwiKVxyXG4gICAgICAgICAgICB3aGVyZUNsYXVzZSA9IFwiJl9XSEVSRT1cIiArIHdoZXJlUGhyYXNlO1xyXG4gICAgICAgIGVsc2VcclxuICAgICAgICAgICAgd2hlcmVDbGF1c2UgPSBcIiZfV0hFUkU9XCI7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLnBhcmFtQ29uZmlnLkRFQlVHX0ZMQUcpIGNvbnNvbGUubG9nKFwid2hlcmVDbGF1c2U6XCIgKyB3aGVyZUNsYXVzZSk7XHJcbiAgICAgICAgcmV0dXJuIHdoZXJlQ2xhdXNlO1xyXG4gICAgfVxyXG5cclxuICBwdWJsaWMgY2hlY2tEQkxvYyh0aGVVUkw6YW55KSB7XHJcbiAgICBcclxuICAgICAgbGV0IHBhcmFtQ29uZmlnID0gZ2V0UGFyYW1Db25maWcoKTtcclxuICAgICAgaWYgKHRoaXMucGFyYW1Db25maWcuREJMb2MgIT0gXCJcIil7XHJcbiAgICAgIC8vbGV0IHVzZXJOYW1lID0gdGhpcy5zZXNzaW9uUGFyYW1zLlVTRVJOQU1FO1xyXG4gICAgICAgIHRoZVVSTCA9IHRoZVVSTCArIFwiJkRCTG9jPVwiICsgdGhpcy5wYXJhbUNvbmZpZy5EQkxvYztcclxuICAgICAgXHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy5wYXJhbUNvbmZpZy5ERUJVR19GTEFHKSBjb25zb2xlLmxvZyhcInRoZVVSTDpcIiwgdGhlVVJMKTtcclxuXHJcbiAgICByZXR1cm4gdGhlVVJMO1xyXG4gIH1cclxuICBcclxuICBwdWJsaWMgZmV0Y2gob2JqZWN0OmFueSwgcXVlcnlOYW1lOiBzdHJpbmcpOiBPYnNlcnZhYmxlPEdyaWREYXRhUmVzdWx0PiB7XHJcbiAgICAgICAgLy9jb25zdCBxdWVyeVN0ciA9IGAke3RvT0RhdGFTdHJpbmcoc3RhdGUpfSYkY291bnQ9dHJ1ZWA7XHJcbiAgICAgICAgY29uc3QgcXVlcnlTdHIgPSBgYDtcclxuICAgICAgICB0aGlzLmxvYWRpbmcgPSB0cnVlO1xyXG4gICAgICAgIGxldCB0aGVVUkwgPSBgJHt0aGlzLkJBU0VfVVJMfSR7cXVlcnlOYW1lfWA7XHJcbiAgICAgICAgdGhlVVJMID0gdGhpcy5jaGVja0RCTG9jKHRoZVVSTCk7XHJcblxyXG4gICAgICBcclxuICAgICAgICB0aGlzLmh0dHBPcHRpb25zID0ge1xyXG4gICAgICAgICAgaGVhZGVyczogbmV3IEh0dHBIZWFkZXJzKHtcclxuICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuICAgICAgICAgICAgJ2F1dGhvcml6YXRpb24nOiB0aGlzLlN0ckF1dGhcclxuXHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cFxyXG4gICAgICAuZ2V0KGAke3RoZVVSTH1gLCB0aGlzLmh0dHBPcHRpb25zKVxyXG4gICAgICAgICAgICAucGlwZShcclxuICAgICAgICAgICAgICAgIGNhdGNoRXJyb3IoKGVycikgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0aHJvd0Vycm9yKGVycik7XHJcbiAgICAgICAgICAgICAgICAgIH0pLFxyXG4gICAgICAgIG1hcCgocmVzcG9uc2U6YW55KSA9PiAoPEdyaWREYXRhUmVzdWx0PnsgZGF0YTogcmVzcG9uc2VbJ2RhdGEnXSB9XHJcbiAgICAgICAgICAgICAgICAgICkpLFxyXG4gICAgICAgICAgICAgICAgdGFwKGRhdGEgPT4ge1xyXG4gICAgICAgICAgICAgICAgICBpZiAodGhpcy5wYXJhbUNvbmZpZy5ERUJVR19GTEFHKSBjb25zb2xlLmxvZyhcInN0YXR1cyBkYXRhOiBcIiwgZGF0YSk7XHJcbiAgICAgICAgICAgICAgICAgIHRoaXMubG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICBpZiAodGhpcy5wYXJhbUNvbmZpZy5ERUJVR19GTEFHKSBjb25zb2xlLmxvZyhcInRlc3Q6dGhpcy5ydWxlc1Bvc3RRdWVyeURlZlwiLCB0aGlzLnJ1bGVzUG9zdFF1ZXJ5RGVmKVxyXG4gICAgICAgICAgICBsZXQgc3RhdHVzUmVjOmFueSA9IHt9O1xyXG4gICAgICAgICAgc3RhdHVzUmVjID0gdGhpcy5jaGVja1J1bGVzKG9iamVjdCwgdGhpcy5ydWxlc1Bvc3RRdWVyeURlZiwgZGF0YSxcIlBPU1RfUVVFUllcIik7XHJcbiAgICAgICAgICBpZiAodGhpcy5wYXJhbUNvbmZpZy5ERUJVR19GTEFHKSBjb25zb2xlLmxvZyhcInN0YXR1c1JlYzpwb3N0OlBPU1RfUVVFUlk6ZmV0Y2g6XCIsIHN0YXR1c1JlYywgc3RhdHVzUmVjWydzdGF0dXMnXSk7XHJcbiAgICAgICAgICBpZiAoc3RhdHVzUmVjWydzdGF0dXMnXSAgPT0gLTEpe1xyXG4gICAgICAgICAgICB0aGlzLnNob3dOb3RpZmljYXRpb24gKFwiZXJyb3JcIixcIlJ1bGU6XCIgKyBzdGF0dXNSZWNbJ21zZyddICk7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAvKiBwdWJsaWMgcmVtb3ZlKCBwYWdlOiBhbnkpOk9ic2VydmFibGU8YW55PiB7XHJcbiAgICAgICAgdGhpcy5kZWxldGUocGFnZSlcclxuICAgICAgICAgICAuc3Vic2NyaWJlKCh4OmFueSkgPT4gc3VwZXIubmV4dCh4KSk7XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gMDtcclxuICAgIH1cclxuKi9cclxucHVibGljIGRlbGV0ZShQYWdlOiBzdHJpbmcpOiBPYnNlcnZhYmxlPEdyaWREYXRhUmVzdWx0PiB7XHJcbiAgICAgICAgLy9jb25zdCBxdWVyeVN0ciA9IGAke3RvT0RhdGFTdHJpbmcoc3RhdGUpfSYkY291bnQ9dHJ1ZWA7XHJcbiAgICAgICAgY29uc3QgcXVlcnlTdHIgPSBgYDtcclxuICAgICAgICB0aGlzLmxvYWRpbmcgPSB0cnVlO1xyXG4gICAgICAgIGxldCB0aGVVUkwgPSBgJHt0aGlzLkJBU0VfVVJMfSR7UGFnZX1gO1xyXG4gICAgICAgIHRoZVVSTCA9IHRoaXMuY2hlY2tEQkxvYyh0aGVVUkwpO1xyXG5cclxuICAgICAgICB0aGlzLmh0dHBPcHRpb25zID0ge1xyXG4gICAgICAgICAgaGVhZGVyczogbmV3IEh0dHBIZWFkZXJzKHtcclxuICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuICAgICAgICAgICAgJ2F1dGhvcml6YXRpb24nOiB0aGlzLlN0ckF1dGhcclxuXHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cFxyXG4gICAgICAgICAgICAuZGVsZXRlPGFueT4oYCR7dGhlVVJMfWAsIHRoaXMuaHR0cE9wdGlvbnMpXHJcbiAgICAgICAgICAgIC5waXBlKFxyXG4gICAgICAgICAgICAgICAgY2F0Y2hFcnJvcigoZXJyKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRocm93RXJyb3IoZXJyKTtcclxuICAgICAgICAgICAgICAgICAgfSksXHJcblxyXG4gICAgICAgIG1hcCgocmVzcG9uc2U6YW55KSA9PiAoPEdyaWREYXRhUmVzdWx0PnsgZGF0YTogcmVzcG9uc2VbJ2RhdGEnXSB9XHJcbiAgICAgICAgICAgICAgICApKSxcclxuXHJcbiAgICAgICAgICAgICAgICB0YXAoKCkgPT4gdGhpcy5sb2FkaW5nID0gZmFsc2UpXHJcbiAgICAgICAgICAgICk7XHJcbiAgICB9XHJcbiAgcHVibGljIHBvc3RfZGVsZXRlKFBhZ2U6IHN0cmluZywgQm9keTogYW55KTogT2JzZXJ2YWJsZTxHcmlkRGF0YVJlc3VsdD4ge1xyXG4gICAgICAgIC8vY29uc3QgcXVlcnlTdHIgPSBgJHt0b09EYXRhU3RyaW5nKHN0YXRlKX0mJGNvdW50PXRydWVgO1xyXG4gICAgICAgIGNvbnN0IHF1ZXJ5U3RyID0gYGA7XHJcbiAgICAgICAgdGhpcy5sb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgICAvL2lmICh0aGlzLnBhcmFtQ29uZmlnLkRFQlVHX0ZMQUcpIGNvbnNvbGUubG9nKFwicG9zdDpQYWdlOlwiLFBhZ2UsXCIgQm9keTpcIixCb2R5KVxyXG5cclxuICAgICAgICBsZXQgdGhlVVJMID0gYCR7dGhpcy5CQVNFX1VSTH0ke1BhZ2V9YDtcclxuICAgICAgICB0aGlzLmh0dHBPcHRpb25zID0ge1xyXG4gICAgICAgICAgaGVhZGVyczogbmV3IEh0dHBIZWFkZXJzKHtcclxuICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuICAgICAgICAgICAgJ2F1dGhvcml6YXRpb24nOiB0aGlzLlN0ckF1dGhcclxuXHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgICAgICAvL2lmICh0aGlzLnBhcmFtQ29uZmlnLkRFQlVHX0ZMQUcpIGNvbnNvbGUubG9nKFwidGhpcy5TdHJBdXRoOlwiICsgdGhpcy5TdHJBdXRoKTtcclxuICAgICAgICByZXR1cm4gdGhpcy5odHRwXHJcbiAgICAgICAgICAgIC5wb3N0PGFueT4oYCR7dGhlVVJMfWAsIEJvZHksIHRoaXMuaHR0cE9wdGlvbnMpXHJcbiAgICAgICAgICAgIC5waXBlKFxyXG4gICAgICAgICAgICAgICAgY2F0Y2hFcnJvcigoZXJyKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRocm93RXJyb3IoZXJyKTtcclxuICAgICAgICAgICAgICAgICAgfSksXHJcblxyXG4gICAgICAgIG1hcCgocmVzcG9uc2U6YW55KSA9PiAoPEdyaWREYXRhUmVzdWx0PnsgZGF0YTogcmVzcG9uc2VbJ2RhdGEnXSB9XHJcbiAgICAgICAgICAgICAgICApKSxcclxuICAgICAgICAgICAgICAgIHRhcChkYXRhID0+IHtcclxuICAgICAgICAgICAgICAgICAgaWYgKHRoaXMucGFyYW1Db25maWcuREVCVUdfRkxBRykgY29uc29sZS5sb2coXCJzdGF0dXMgZGF0YTpcIiwgZGF0YSk7XHJcbiAgICAgICAgICAgICAgICAgIHRoaXMubG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgIH0pXHJcblxyXG5cclxuICAgICAgICAgICAgKTtcclxuICAgIH1cclxuICAgIHB1YmxpYyBzaG93RGFpbG9nRXJyKGVycm9yKXtcclxuICAgICAgbGV0IE1zZyA9IGVycm9yLmVycm9yO1xyXG4gICAgICAvL2NvbnNvbGUubG9nKFwiTXNnOlwiLCBNc2cpO1xyXG4gICAgICBsZXQgcG9zaXRpb24gPSBNc2cuc2VhcmNoKFwiVU5JUVVFIGNvbnN0cmFpbnRcIik7XHJcbiAgICAgIGlmIChwb3NpdGlvbiAhPSAtMSApXHJcbiAgICAgICAgTXNnID0gdGhpcy5nZXROTFMoW10sJ0FMUkVBRFlfRVhJU1RTJywnUmVjb3JkIGFscmVhZHkgZXhpc3RzJylcclxuICAgICAgdmFyIGRpYWxvZ1N0cnVjID0ge1xyXG4gICAgICAgIG1zZzogTXNnLFxyXG4gICAgICAgIHRpdGxlOiBcIkVycm9yXCIsXHJcbiAgICAgICAgaW5mbzogbnVsbCxcclxuICAgICAgICBvYmplY3Q6IHRoaXMsXHJcbiAgICAgICAgYWN0aW9uOiB0aGlzLk9rQWN0aW9ucyxcclxuICAgICAgICBjYWxsYmFjazogbnVsbFxyXG4gICAgICB9O1xyXG4gICAgICB0aGlzLnNob3dDb25maXJtYXRpb24oZGlhbG9nU3RydWMpO1xyXG4gIFxyXG4gICAgfVxyXG4gIHB1YmxpYyBzeW5jRmxhZyA9IDA7XHJcbiAgcHVibGljIHBvc3Qob2JqZWN0OmFueSwgUGFnZTogc3RyaW5nLCBCb2R5OiBhbnkpOiBPYnNlcnZhYmxlPEdyaWREYXRhUmVzdWx0PiB7XHJcbiAgICAgIC8vY29uc3QgcXVlcnlTdHIgPSBgJHt0b09EYXRhU3RyaW5nKHN0YXRlKX0mJGNvdW50PXRydWVgO1xyXG4gICAgICBjb25zdCBxdWVyeVN0ciA9IGBgO1xyXG4gICAgICB0aGlzLmxvYWRpbmcgPSB0cnVlO1xyXG4gICAgLy9pZiAodGhpcy5wYXJhbUNvbmZpZy5ERUJVR19GTEFHKSBcclxuICAgIC8vY29uc29sZS5sb2coXCJwb3N0IDpQYWdlOlwiLFBhZ2UsXCIgQm9keTpcIixCb2R5KVxyXG4gICAgLy8gaWYgKFBhZ2U9PVwiXCIgJiYgQm9keS5sZW5ndGggPT0gMClcclxuICAgIC8vICAgY29uc29sZS5sb2coXCJwb3N0IGVtcHR5OlBhZ2U6XCIsUGFnZVsnZHVtJ10ubGVuZ3RoLFwiIEJvZHk6XCIsQm9keSlcclxuICAgIGxldCBzdGF0dXNSZWM6YW55ID0ge307XHJcbiAgICBzdGF0dXNSZWMgPSB0aGlzLmNoZWNrUnVsZXMob2JqZWN0LCB0aGlzLnJ1bGVzUHJlUXVlcnlEZWYsIEJvZHksXCJQUkVfUVVFUllcIik7XHJcbiAgICBpZiAodGhpcy5wYXJhbUNvbmZpZy5ERUJVR19GTEFHKSBjb25zb2xlLmxvZyhcInN0YXR1c1JlYzpwb3N0OlBSRV9RVUVSWVwiLCBzdGF0dXNSZWMsIHN0YXR1c1JlY1snc3RhdHVzJ10pO1xyXG4gICAgaWYgKHN0YXR1c1JlY1snc3RhdHVzJ10gID09IC0xKXtcclxuICAgICAgaWYgKHRoaXMucGFyYW1Db25maWcuREVCVUdfRkxBRykgY29uc29sZS5sb2coXCJzdGF0dXNSZWM6IGZvdW5kIC0xXCIpO1xyXG4gICAgICB0aGlzLnNob3dOb3RpZmljYXRpb24gKFwiZXJyb3JcIixcIlJ1bGU6XCIgKyBzdGF0dXNSZWNbJ21zZyddICk7XHJcbiAgICAgIEJvZHlbMF0uX1FVRVJZID0gXCJcIjtcclxuICAgIH1cclxuXHJcbiAgICAgIGxldCB0aGVVUkwgPSBgJHt0aGlzLkJBU0VfVVJMfSR7UGFnZX1gO1xyXG4gICAgICB0aGVVUkwgPSB0aGlzLmNoZWNrREJMb2ModGhlVVJMKTtcclxuICAgICAgdGhpcy5odHRwT3B0aW9ucyA9IHtcclxuICAgICAgICBoZWFkZXJzOiBuZXcgSHR0cEhlYWRlcnMoe1xyXG4gICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuICAgICAgICAgICdhdXRob3JpemF0aW9uJzogdGhpcy5TdHJBdXRoXHJcblxyXG4gICAgICAgIH0pXHJcbiAgICAgIH1cclxuICAgICAgLy9pZiAodGhpcy5wYXJhbUNvbmZpZy5ERUJVR19GTEFHKSBjb25zb2xlLmxvZyhcInRoaXMuU3RyQXV0aDpcIiAsIHRoaXMuU3RyQXV0aCAsIHRoZVVSTCk7XHJcbiAgICAgIC8vaWYgKHRoaXMucGFyYW1Db25maWcuREVCVUdfRkxBRykgY29uc29sZS5sb2coXCJ0aGlzLlN0ckF1dGg6IHdpdGggVVJMXCIgLCB0aGlzLlN0ckF1dGggLCB0aGVVUkwpO1xyXG4gICAgICByZXR1cm4gdGhpcy5odHRwXHJcbiAgICAgICAgICAucG9zdDxhbnk+KGAke3RoZVVSTH1gLCBCb2R5LCB0aGlzLmh0dHBPcHRpb25zKVxyXG4gICAgICAgICAgLnBpcGUoXHJcbiAgICAgICAgICAgICAgY2F0Y2hFcnJvcigoZXJyKSA9PiB7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhcInN0YXR1c1JlY1snbXNnJ10gOlwiLCBzdGF0dXNSZWNbJ21zZyddLCBcIiBlcnIuZXJyb3IgOlwiLCBlcnIuZXJyb3IgIClcclxuICAgICAgICAgIGlmICggKHR5cGVvZiBzdGF0dXNSZWNbJ21zZyddICE9IFwidW5kZWZpbmVkXCIpICYmIChzdGF0dXNSZWNbJ21zZyddICE9IFwiXCIpKSB7XHJcbiAgICAgICAgICAvL2lmICggKHN0YXR1c1JlY1snbXNnJ10gIT0gXCJcIikpIHtcclxuICAgICAgICAgICAgaWYgKHR5cGVvZiBlcnIuZXJyb3IgPT0gXCJ1bmRlZmluZWRcIil7XHJcbiAgICAgICAgICAgICAgZXJyID0gc3RhdHVzUmVjWydtc2cnXTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgICAgZXJyLmVycm9yLmVycm9yID0gIHN0YXR1c1JlY1snbXNnJ107XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNob3dEYWlsb2dFcnIoZXJyLmVycm9yKTtcclxuICAgICAgICAgICAgICAgICAgcmV0dXJuIHRocm93RXJyb3IoZXJyKTtcclxuICAgICAgICAgICAgICAgIH0pLFxyXG5cclxuICAgICAgICBtYXAoKHJlc3BvbnNlOmFueSkgPT4gKDxHcmlkRGF0YVJlc3VsdD57IGRhdGE6IHJlc3BvbnNlWydkYXRhJ10gfVxyXG4gICAgICAgICAgICAgICkpLFxyXG4gICAgICAgICAgICAgIHRhcChkYXRhID0+IHtcclxuICAgICAgICAgICAgICAgIC8vaWYgKHRoaXMucGFyYW1Db25maWcuREVCVUdfRkxBRykgY29uc29sZS5sb2coXCJzdGF0dXMgZGF0YTpcIiwgZGF0YSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmxvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgIGlmICh0aGlzLnBhcmFtQ29uZmlnLkRFQlVHX0ZMQUcpIGNvbnNvbGUubG9nKFwidGVzdDp0aGlzLnJ1bGVzUG9zdFF1ZXJ5RGVmXCIsIHRoaXMucnVsZXNQb3N0UXVlcnlEZWYpXHJcbiAgICAgICAgICAgICAgICB0aGlzLnN5bmNGbGFnID0gMDtcclxuICAgICAgICAgIGxldCBzdGF0dXNSZWM6YW55ID0ge307XHJcbiAgICAgICAgICAgICAgICBzdGF0dXNSZWMgPSB0aGlzLmNoZWNrUnVsZXMob2JqZWN0LCB0aGlzLnJ1bGVzUG9zdFF1ZXJ5RGVmLCBkYXRhLFwiUE9TVF9RVUVSWVwiKTtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLnBhcmFtQ29uZmlnLkRFQlVHX0ZMQUcpIGNvbnNvbGUubG9nKFwic3RhdHVzUmVjOnBvc3Q6UE9TVF9RVUVSWVwiLCBzdGF0dXNSZWMsIHN0YXR1c1JlY1snc3RhdHVzJ10pXHJcbiAgICAgICAgICAgICAgICBpZiAoc3RhdHVzUmVjWydzdGF0dXMnXSAgPT0gLTEpe1xyXG4gICAgICAgICAgICAgICAgICB0aGlzLnNob3dOb3RpZmljYXRpb24gKFwiZXJyb3JcIixcIlJ1bGU6XCIgKyBzdGF0dXNSZWNbJ21zZyddICk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG5cclxuXHJcbiAgICAgICAgfSlcclxuXHJcblxyXG4gICAgICAgICAgKTtcclxuICB9XHJcbiBcclxuICBcclxuICAgIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbiAgcHVibGljIHBvc3RVcGxvYWQoUGFnZTogc3RyaW5nLCBCb2R5OiBhbnkpOiBPYnNlcnZhYmxlPEdyaWREYXRhUmVzdWx0PiB7XHJcbiAgICAgIC8vY29uc3QgcXVlcnlTdHIgPSBgJHt0b09EYXRhU3RyaW5nKHN0YXRlKX0mJGNvdW50PXRydWVgO1xyXG4gICAgICBjb25zdCBxdWVyeVN0ciA9IGBgO1xyXG4gICAgICB0aGlzLmxvYWRpbmcgPSB0cnVlO1xyXG5cclxuICAgICAgbGV0IHRoZVVSTCA9IFBhZ2U7XHJcbiAgICAgIHRoaXMuaHR0cE9wdGlvbnMgPSB7XHJcbiAgICAgICAgaGVhZGVyczogbmV3IEh0dHBIZWFkZXJzKHtcclxuICAgICAgICAgICdhdXRob3JpemF0aW9uJzogdGhpcy5TdHJBdXRoXHJcblxyXG4gICAgICAgIH0pXHJcbiAgICAgIH1cclxuICAgICAgLy9pZiAodGhpcy5wYXJhbUNvbmZpZy5ERUJVR19GTEFHKSBjb25zb2xlLmxvZyhcInRoaXMuU3RyQXV0aDpcIiArIHRoaXMuU3RyQXV0aCk7XHJcbiAgICAgIHJldHVybiB0aGlzLmh0dHBcclxuICAgICAgICAgIC5wb3N0PGFueT4oYCR7dGhlVVJMfWAsIEJvZHksIHRoaXMuaHR0cE9wdGlvbnMpXHJcbiAgICAgICAgICAucGlwZShcclxuICAgICAgICAgICAgICBjYXRjaEVycm9yKChlcnIpID0+IHtcclxuICAgICAgICAgICAgICAgICAgcmV0dXJuIHRocm93RXJyb3IoZXJyKTtcclxuICAgICAgICAgICAgICAgIH0pLFxyXG5cclxuICAgICAgICBtYXAoKHJlc3BvbnNlOmFueSkgPT4gKDxHcmlkRGF0YVJlc3VsdD57IGRhdGE6IHJlc3BvbnNlWydkYXRhJ10gfVxyXG4gICAgICAgICAgICAgICkpLFxyXG5cclxuICAgICAgICAgICAgICB0YXAoKCkgPT4gdGhpcy5sb2FkaW5nID0gZmFsc2UpXHJcbiAgICAgICAgICApO1xyXG4gIH1cclxuICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5cclxuICB1cGxvYWRGaWxlKHBhZ2U6IGFueSwgZmlsZXNTZXQ6IFNldDxGaWxlPiwgaWQ6IGFueSk6IGFueSB7XHJcbiAgICBmaWxlc1NldC5mb3JFYWNoKGZpbGUgPT4ge1xyXG4gICAgICAvLyBjcmVhdGUgYSBuZXcgbXVsdGlwYXJ0LWZvcm0gZm9yIGV2ZXJ5IGZpbGVcclxuICAgICAgY29uc3QgZm9ybWRhdGE6IEZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKCk7XHJcbiAgICAgIGZvcm1kYXRhLmFwcGVuZCgnZmlsZScsIGZpbGUpO1xyXG4gICAgICBmb3JtZGF0YS5hcHBlbmQoJ2lkJywgaWQpO1xyXG4gICAgICBpZiAodGhpcy5wYXJhbUNvbmZpZy5ERUJVR19GTEFHKSBjb25zb2xlLmxvZyhcInVwbG9hZEZpbGUgcGFnZTpcIiArIHBhZ2UpXHJcbiAgICAgIGxldCBhcGlVUkwgPSB0aGlzLlNFUlZFUl9VUkwgKyAnL2FwaS9hdHQnICsgcGFnZTtcclxuICAgICAgaWYgKHRoaXMucGFyYW1Db25maWcuREVCVUdfRkxBRykgY29uc29sZS5sb2coXCJhcGlVUkw6XCIgKyBhcGlVUkwpO1xyXG5cclxuICAgICAgICBpZiAodGhpcy5wYXJhbUNvbmZpZy5ERUJVR19GTEFHKSBjb25zb2xlLmxvZyhmb3JtZGF0YSk7XHJcbiAgICAgIC8vZm9ybWRhdGEuZm9yRWFjaChlbnRyaWVzID0+IGNvbnNvbGUubG9nKEpTT04uc3RyaW5naWZ5KGVudHJpZXMpKSk7XHJcblxyXG4gICAgICAgIHRoaXMucG9zdFVwbG9hZChhcGlVUkwsIGZvcm1kYXRhKS5zdWJzY3JpYmUocmVzdWx0ID0+IHtcclxuICAgICAgICBpZiAodGhpcy5wYXJhbUNvbmZpZy5ERUJVR19GTEFHKSBjb25zb2xlLmxvZygncmVzdWx0JywgcmVzdWx0KTtcclxuICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcblxyXG5cclxuIH1cclxuXHJcbiAgdXBsb2FkRmlsZU9sZChmaWxlOiBGaWxlKTogYW55IHtcclxuICAgIGNvbnN0IGZvcm1kYXRhOiBGb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSgpO1xyXG4gICAgZm9ybWRhdGEuYXBwZW5kKCdmaWxlJywgZmlsZSk7ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vdGhlIHVwbG9hZGVkIGZpbGUgY29udGVudFxyXG4gICAgZm9ybWRhdGEuYXBwZW5kKCdkb2N1bWVudFZlcnNpb25JZCcsICcxMjMnKTsgICAgICAgLy9JIG5lZWQgdG8gcGFzcyBzb21lIGFkZGl0aW9uYWwgaW5mbyB0byB0aGUgc2VydmVyIGJlc2lkZXMgdGhlIEZpbGUgZGF0YVxyXG4gICAgbGV0IGFwaVVSTCA9IHRoaXMuU0VSVkVSX1VSTCArICcvYXBpP3VwbG9hZD15JztcclxuICAgIGlmICh0aGlzLnBhcmFtQ29uZmlnLkRFQlVHX0ZMQUcpIGNvbnNvbGUubG9nKFwiYXBpVVJMOlwiICsgYXBpVVJMKTtcclxuXHJcbiAgICBpZiAodGhpcy5wYXJhbUNvbmZpZy5ERUJVR19GTEFHKSBjb25zb2xlLmxvZyhmb3JtZGF0YSk7XHJcbiAgICBmb3JtZGF0YS5mb3JFYWNoKGVudHJpZXMgPT4gY29uc29sZS5sb2coSlNPTi5zdHJpbmdpZnkoZW50cmllcykpKTtcclxuXHJcblxyXG4gICAgLy9jb25zdCBhcGlVUkwgPSB0aGlzLmFwaV9wYXRoICsgJ1VwbG9hZCc7ICAgICAvL2NhbGxpbmcgaHR0cDovL2xvY2FsaG9zdDo1MjMzMy9hcGkvVXBsb2FkQ29udHJvbGxlclxyXG5cclxuICAgIHRoaXMucG9zdFVwbG9hZChhcGlVUkwsIGZvcm1kYXRhKS5zdWJzY3JpYmUocmVzdWx0ID0+IHtcclxuICAgICAgaWYgKHRoaXMucGFyYW1Db25maWcuREVCVUdfRkxBRykgY29uc29sZS5sb2coJ3Jlc3VsdCcsIHJlc3VsdCk7XHJcbiAgICB9KTtcclxuICAgIC8qY29uc3QgdXBsb2FkUmVxID0gbmV3IEh0dHBSZXF1ZXN0KCdQT1NUJywgYXBpVVJMLCBmb3JtZGF0YSwge1xyXG4gICAgICAgcmVwb3J0UHJvZ3Jlc3M6IHRydWVcclxuICAgIH0pO1xyXG4gICAgdGhpcy5odHRwY2xpZW50LnJlcXVlc3QodXBsb2FkUmVxKS5zdWJzY3JpYmUoZXZlbnQgPT4ge1xyXG4gICAgICAgaWYgKGV2ZW50LnR5cGUgPT09IEh0dHBFdmVudFR5cGUuVXBsb2FkUHJvZ3Jlc3MpIHtcclxuICAgICAgICAgICB0aGlzLnByb2dyZXNzID0gTWF0aC5yb3VuZCgxMDAgKiBldmVudC5sb2FkZWQgLyBldmVudC50b3RhbCk7XHJcbiAgICAgICB9XHJcbiAgIH0pO1xyXG4gICAqL1xyXG5cclxuIH1cclxuXHJcblxyXG4gIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbiAgICBwdWJsaWMgaGFzQ2hhbmdlcygpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gQm9vbGVhbih0aGlzLmRlbGV0ZWRJdGVtcy5sZW5ndGggfHwgdGhpcy51cGRhdGVkSXRlbXMubGVuZ3RoIHx8IHRoaXMuY3JlYXRlZEl0ZW1zLmxlbmd0aCk7XHJcbiAgICB9XHJcbiAgcHJpdmF0ZSBhZGRUb0JvZHkoTmV3VmFsOmFueSwgQm9keTphbnkpIHtcclxuICAgICAgICBCb2R5LnB1c2goTmV3VmFsKTtcclxuICAgICAgIC8vIGlmICh0aGlzLnBhcmFtQ29uZmlnLkRFQlVHX0ZMQUcpIGNvbnNvbGUubG9nKCdOZXdWYWwgOiBIRiBQbGVhc2UnICArIEpTT04uc3RyaW5naWZ5KE5ld1ZhbCkpO1xyXG4gICAgICAgIHJldHVybiBCb2R5O1xyXG4gICAgICB9XHJcblxyXG5cclxuXHJcblxyXG5cclxuICBwdWJsaWMgc2hvd05vdGlmaWNhdGlvbihzdHlsZU5vdGU6IGFueSwgbXNnOiBhbnkpOiB2b2lkIHtcclxuXHJcbiAgICAgIGxldCBoaWRlQWZ0ZXIgPSB0aGlzLmhpZGVBZnRlcjtcclxuXHJcbiAgICAgIGlmIChzdHlsZU5vdGUgPT0gXCJlcnJvclwiKVxyXG4gICAgICAgIGhpZGVBZnRlciA9IDUwMDA7XHJcbiAgICAgICAgdGhpcy5ub3RpZmljYXRpb25TZXJ2aWNlLnNob3coe1xyXG4gICAgICAgICAgICBjb250ZW50OiBtc2csXHJcbiAgICAgICAgICAgIGNzc0NsYXNzOiAnYnV0dG9uLW5vdGlmaWNhdGlvbicsXHJcbiAgICAgICAgICAgIGFuaW1hdGlvbjogeyB0eXBlOiAnZmFkZScsIGR1cmF0aW9uOiAyMDAgfSxcclxuICAgICAgICAgICAgcG9zaXRpb246IHsgaG9yaXpvbnRhbDogJ2NlbnRlcicsIHZlcnRpY2FsOiAnYm90dG9tJyB9LFxyXG4vLyAgICAgICAgICAgIHN0YWNraW5nOiB7IHN0YWNraW5nOiAnZG93bicgfSxcclxuICAgICAgdHlwZTogeyBzdHlsZTogc3R5bGVOb3RlLCBpY29uOiB0cnVlIH0sXHJcbiAgICAgICAgICAgIC8vY2xvc2FibGU6IHRydWUsXHJcbiAgICAgICAgICAgIGhpZGVBZnRlcjogaGlkZUFmdGVyXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgcHVibGljIGdvUmVjb3JkQWN0KHRhcmdldDogYW55LCBvYmplY3Q6IGFueSk6IHZvaWQge1xyXG5cclxuICAgICAgICBsZXQgcmVjO1xyXG5cclxuICAgIGlmIChvYmplY3QucGFyYW1Db25maWcuREVCVUdfRkxBRykgY29uc29sZS5sb2codGFyZ2V0KTtcclxuICAgIGlmIChvYmplY3QucGFyYW1Db25maWcuREVCVUdfRkxBRykgY29uc29sZS5sb2coXCJvYmplY3QuQ3VycmVudFJlYzpcIiArIG9iamVjdC5DdXJyZW50UmVjKTtcclxuICAgIGlmIChvYmplY3QucGFyYW1Db25maWcuREVCVUdfRkxBRykgY29uc29sZS5sb2cob2JqZWN0LmV4ZWN1dGVRdWVyeXJlc3VsdCk7XHJcblxyXG4gICAgaWYgKHRhcmdldCA9PSBcImZpcnN0XCIpIHtcclxuICAgICAgICAgIG9iamVjdC5DdXJyZW50UmVjID0gMDtcclxuICAgICAgICB9XHJcbiAgICBlbHNlIGlmICh0YXJnZXQgPT0gXCJsYXN0XCIpIHtcclxuICAgICAgb2JqZWN0LkN1cnJlbnRSZWMgPSBvYmplY3QuZXhlY3V0ZVF1ZXJ5cmVzdWx0LnRvdGFsIC0gMTtcclxuICAgICAgICB9XHJcbiAgICBlbHNlIGlmICh0YXJnZXQgPT0gXCJuZXh0XCIpIHtcclxuICAgICAgICAgIGlmIChvYmplY3QuQ3VycmVudFJlYyA8IG9iamVjdC5leGVjdXRlUXVlcnlyZXN1bHQudG90YWwgLSAxKVxyXG4gICAgICAgICAgb2JqZWN0LkN1cnJlbnRSZWMgPSBvYmplY3QuQ3VycmVudFJlYyArIDE7XHJcbiAgICAgICAgfVxyXG4gICAgZWxzZSBpZiAodGFyZ2V0ID09IFwicHJldlwiKSB7XHJcbiAgICAgIGlmIChvYmplY3QuQ3VycmVudFJlYyA+IDApXHJcbiAgICAgICAgICAgIG9iamVjdC5DdXJyZW50UmVjID0gb2JqZWN0LkN1cnJlbnRSZWMgLSAxO1xyXG4gICAgICAgIH1cclxuICAgICAgZWxzZSBpZiAodHlwZW9mIHRhcmdldCA9PSBcIm51bWJlclwiKSB7XHJcbiAgICAgICAgICAgICAgb2JqZWN0LkN1cnJlbnRSZWMgPSB0YXJnZXQ7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgIHJlYyA9IG9iamVjdC5leGVjdXRlUXVlcnlyZXN1bHQuZGF0YVtvYmplY3QuQ3VycmVudFJlY107XHJcbiAgICBpZiAob2JqZWN0LnBhcmFtQ29uZmlnLkRFQlVHX0ZMQUcpIGNvbnNvbGUubG9nKFwiLS0tLS0tcmVjOlwiLCByZWMpO1xyXG4gICAgaWYgKG9iamVjdC5wYXJhbUNvbmZpZy5ERUJVR19GTEFHKSBjb25zb2xlLmxvZyhvYmplY3QuZm9ybS5nZXRSYXdWYWx1ZSgpKTtcclxuICAgIGlmICh0eXBlb2YgcmVjICE9PSBcInVuZGVmaW5lZFwiKSB7XHJcbiAgICAgICAgICBvYmplY3QuZm9ybS5wYXRjaFZhbHVlKHJlYyk7XHJcbiAgICAgICAgICBvYmplY3QuZm9ybS5tYXJrQXNQcmlzdGluZSgpO1xyXG4gICAgICAgICAgb2JqZWN0LmZvcm0ubWFya0FzVW50b3VjaGVkKCk7XHJcblxyXG4gICAgICAgICAgLy9vYmplY3QuZm9ybS5yZXNldChyZWMsIHtlbWl0RXZlbnQ6IG9iamVjdC5lbWl0RXZlbnQgIT0gbnVsbCA/IG9iamVjdC5lbWl0RXZlbnQgOiB0cnVlfSk7XHJcbiAgICAgICAgICBpZiAob2JqZWN0LmRpc2FibGVFbWl0UmVhZENvbXBsZXRlZCAhPSB0cnVlKVxyXG4gICAgICAgICAgICBvYmplY3QucmVhZENvbXBsZXRlZE91dHB1dC5lbWl0KG9iamVjdC5mb3JtLmdldFJhd1ZhbHVlKCkpO1xyXG4gICAgICBpZiAob2JqZWN0LnBhcmFtQ29uZmlnLkRFQlVHX0ZMQUcpIGNvbnNvbGUubG9nKFwiQVRUOm9iamVjdC5jYWxsQmFja0Z1bmN0aW9uOlwiLCBvYmplY3QuY2FsbEJhY2tGdW5jdGlvbilcclxuICAgICAgaWYgKHR5cGVvZiBvYmplY3QuY2FsbEJhY2tGdW5jdGlvbiAhPT0gXCJ1bmRlZmluZWRcIilcclxuICAgICAgICAgICAgb2JqZWN0LmNhbGxCYWNrRnVuY3Rpb24ocmVjKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZVxyXG4gICAgICAgICAgb2JqZWN0LmNsZWFyQ29tcGxldGVkT3V0cHV0LmVtaXQoW10pO1xyXG5cclxuICAgIH1cclxuICBwdWJsaWMgZ29SZWNvcmQodGFyZ2V0OiBhbnksIG9iamVjdDphbnkpOiB2b2lkIHtcclxuICAgIGlmICh0eXBlb2Ygb2JqZWN0LmV4ZWN1dGVRdWVyeXJlc3VsdCAhPSBcInVuZGVmaW5lZFwiKSB7XHJcbiAgICAgICAgICBpZiAodGhpcy5wYXJhbUNvbmZpZy5ERUJVR19GTEFHKSBjb25zb2xlLmxvZyhvYmplY3QuZm9ybS5kaXJ0eSk7XHJcbiAgICAgIGlmIChvYmplY3QuZm9ybS5kaXJ0eSA9PSB0cnVlKSB7XHJcbiAgICAgICAgICAgIGxldCBkaWFsb2dTdHJ1YyA9IHtcclxuICAgICAgICAgICAgICBtc2c6IHRoaXMuc2F2ZUNoYW5nZXNNc2csXHJcbiAgICAgICAgICB0aXRsZTogdGhpcy5wbGVhc2VDb25maXJtTXNnLFxyXG4gICAgICAgICAgICAgIGluZm86IHRhcmdldCxcclxuICAgICAgICAgIG9iamVjdDogb2JqZWN0LFxyXG4gICAgICAgICAgYWN0aW9uOiB0aGlzLlllc05vQWN0aW9ucyxcclxuICAgICAgICAgIGNhbGxiYWNrOiB0aGlzLmdvUmVjb3JkQWN0XHJcbiAgICAgICAgfTtcclxuICAgICAgICAgICAgICB0aGlzLnNob3dDb25maXJtYXRpb24oZGlhbG9nU3RydWMpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICBlbHNlIHtcclxuICAgICAgICB0aGlzLmdvUmVjb3JkQWN0KHRhcmdldCwgb2JqZWN0KTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICB9XHJcblxyXG4gIHB1YmxpYyBzaG93Q29uZmlybWF0aW9uKGRpYWxvZ1N0cnVjOmFueSkge1xyXG4gICAgICAgIGxldCBkaWFsb2dSZXN1bHQ7XHJcbiAgICAgICAgICBjb25zdCBkaWFsb2c6IERpYWxvZ1JlZiA9IHRoaXMuZGlhbG9nU2VydmljZS5vcGVuKHtcclxuICAgICAgICAgICAgICB0aXRsZTogZGlhbG9nU3RydWMudGl0bGUsXHJcbiAgICAgICAgICAgICAgY29udGVudDogZGlhbG9nU3RydWMubXNnLFxyXG4gICAgICAgICAgICAgIGFjdGlvbnM6IGRpYWxvZ1N0cnVjLmFjdGlvbixcclxuICAgICAgICAgICAgICB3aWR0aDogNDUwLFxyXG4gICAgICAgICAgICAgIGhlaWdodDogMjAwLFxyXG4gICAgICAgICAgICAgIG1pbldpZHRoOiAyNTBcclxuICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgIGRpYWxvZy5yZXN1bHQuc3Vic2NyaWJlKChyZXN1bHQpID0+IHtcclxuICAgICAgICAgICAgICBpZiAocmVzdWx0IGluc3RhbmNlb2YgRGlhbG9nQ2xvc2VSZXN1bHQpIHtcclxuICAgICAgICAgICAgICAgICAgaWYgKHRoaXMucGFyYW1Db25maWcuREVCVUdfRkxBRykgY29uc29sZS5sb2coJ2Nsb3NlJyk7XHJcbiAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgaWYgKHRoaXMucGFyYW1Db25maWcuREVCVUdfRkxBRykgY29uc29sZS5sb2coJ2FjdGlvbicsIHJlc3VsdCk7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIGRpYWxvZ1Jlc3VsdCA9IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkocmVzdWx0KSk7XHJcbiAgICAgIGlmIChkaWFsb2dSZXN1bHQucHJpbWFyeSA9PSB0cnVlKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoZGlhbG9nU3RydWMuaGFzT3duUHJvcGVydHkoJ2NhbGxiYWNrJykpIHtcclxuICAgICAgICAgICAgICAgICAgZGlhbG9nU3RydWMuY2FsbGJhY2soZGlhbG9nU3RydWMuaW5mbywgZGlhbG9nU3RydWMub2JqZWN0KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgfVxyXG5cclxuICAgICAgLyoqKioqKioqKioqKioqKiogRm9ybSBmdW5jdGlvbnMgKioqKioqKioqKioqKiovXHJcbiAgcHVibGljIGV4ZWN1dGVRdWVyeV9mb3JtKGZvcm06IGFueSwgb2JqZWN0OmFueSkge1xyXG4gICAgICAgIGlmICh0aGlzLnBhcmFtQ29uZmlnLkRFQlVHX0ZMQUcpIGNvbnNvbGUubG9nKFwic3Rhci1zZXJ2aWNlcyBleGVjdXRlUXVlcnlfZm9ybSBvYmplY3QuZm9ybTpcIik7XHJcbiAgICBpZiAodGhpcy5wYXJhbUNvbmZpZy5ERUJVR19GTEFHKSBjb25zb2xlLmxvZyhcIm9iamVjdC5pc1NlYXJjaDpcIiArIG9iamVjdC5pc1NlYXJjaClcclxuICAgICAgICAvL2lmICh0aGlzLnBhcmFtQ29uZmlnLkRFQlVHX0ZMQUcpIGNvbnNvbGUubG9nKG9iamVjdC5mb3JtLmdldFJhd1ZhbHVlKCkpO1xyXG4gICAgICAgIC8vaWYgKHRoaXMucGFyYW1Db25maWcuREVCVUdfRkxBRykgY29uc29sZS5sb2coZm9ybS52YWx1ZSk7XHJcbiAgICBpZiAodHlwZW9mIG9iamVjdC5mb3JtICE9PSBcInVuZGVmaW5lZFwiKSB7XHJcbiAgICAgIGlmICgob2JqZWN0LmZvcm0uZGlydHkgPT0gdHJ1ZSkgJiYgKG9iamVjdC5pc1NlYXJjaCAhPSB0cnVlKSkge1xyXG4gICAgICAgICAgICBsZXQgZGlhbG9nU3RydWMgPSB7XHJcbiAgICAgICAgICAgICAgbXNnOiB0aGlzLnNhdmVDaGFuZ2VzTXNnLFxyXG4gICAgICAgICAgdGl0bGU6IHRoaXMucGxlYXNlQ29uZmlybU1zZyxcclxuICAgICAgICAgICAgICBpbmZvOiBmb3JtLFxyXG4gICAgICAgICAgb2JqZWN0OiBvYmplY3QsXHJcbiAgICAgICAgICBhY3Rpb246IHRoaXMuWWVzTm9BY3Rpb25zLFxyXG4gICAgICAgICAgY2FsbGJhY2s6IHRoaXMuZXhlY3V0ZVF1ZXJ5QWN0X2Zvcm1cclxuICAgICAgICB9O1xyXG4gICAgICAgICAgICAgIHRoaXMuc2hvd0NvbmZpcm1hdGlvbihkaWFsb2dTdHJ1Yyk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgIGVsc2Uge1xyXG4gICAgICAgIHRoaXMuZXhlY3V0ZVF1ZXJ5QWN0X2Zvcm0oZm9ybSwgb2JqZWN0KTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgdGhpcy5leGVjdXRlUXVlcnlBY3RfZm9ybShmb3JtLCBvYmplY3QpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gIC8vIHJvdXRpbmVfbmFtZSBmcm9tIDogaHR0cHM6Ly93d3cudGVsZXJpay5jb20va2VuZG8tYW5ndWxhci11aS9jb21wb25lbnRzL2RhdGVpbnB1dHMvZGF0ZXBpY2tlci9pbnRlZ3JhdGlvbi13aXRoLWpzb24vXHJcblxyXG4gIHB1YmxpYyBwYXJzZVRvRGF0ZShqc29uOiBhbnkpIHtcclxuICAgIC8vaWYgKHRoaXMucGFyYW1Db25maWcuREVCVUdfRkxBRykgY29uc29sZS5sb2coXCJqc29uOmluOlwiLCBqc29uKVxyXG4gICAgICAgIE9iamVjdC5rZXlzKGpzb24pLm1hcChrZXkgPT4ge1xyXG4gICAgICAgICAgbGV0IFZhbDEgPSBqc29uW2tleV07XHJcbiAgICAgIC8vaWYgKHRoaXMucGFyYW1Db25maWcuREVCVUdfRkxBRykgY29uc29sZS5sb2coXCJrZXk6XCIsIGtleSwgVmFsMSwgdHlwZW9mIFZhbDEpO1xyXG4gICAgICAgICAgLy9sZXQgbiA9IGtleS50b1VwcGVyQ2FzZSgpLnNlYXJjaChcIkRBVEVcIik7XHJcbiAgICAgICAgICAvL2lmIChuICE9IC0xKXtcclxuICAgICAgaWYgKHR5cGVvZiBWYWwxICE9IFwibnVtYmVyXCIpIHsgICAvL2l0IGlzIG5vdCBhIG51bWJlciwgY2hlY2sgbW9yZVxyXG4gICAgICAgIGlmICgoVmFsMSAhPSBudWxsKSAmJiAoVmFsMS5sZW5ndGggPiA3KSkge1xyXG4gICAgICAgICAgICAgIGNvbnN0IGRhdGUgPSBuZXcgRGF0ZShWYWwxKTtcclxuICAgICAgICAgICAgICBsZXQgY2hlY2tZWVlZID0gaXNOYU4ocGFyc2VJbnQoVmFsMS5zdWJzdHJpbmcoMCwgNCkpKTtcclxuICAgICAgICAgICAgICBsZXQgdGltZVZhbCA9IGRhdGUuZ2V0VGltZSgpO1xyXG4gICAgICAgICAgaWYgKHRoaXMucGFyYW1Db25maWcuREVCVUdfRkxBRykgY29uc29sZS5sb2coXCJ0aW1lVmFsOlwiLCB0aW1lVmFsLCBpc05hTih0aW1lVmFsKSk7XHJcbiAgICAgICAgICAgICAgaWYgKCFpc05hTih0aW1lVmFsKSAmJiAodGltZVZhbCA+IDApICYmICFjaGVja1lZWVkpIHtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLnBhcmFtQ29uZmlnLkRFQlVHX0ZMQUcpIGNvbnNvbGUubG9nKFwiaXQgaXMgYSBkYXRlXCIpO1xyXG4gICAgICAgICAgICAgICAgLy9pZiAodGhpcy5wYXJhbUNvbmZpZy5ERUJVR19GTEFHKSBjb25zb2xlLmxvZyhcImtleTpcIitrZXkgKyBcIjpcIiArIGRhdGUuZ2V0VGltZSgpKTtcclxuICAgICAgICAgICAgICAgIGpzb25ba2V5XSA9IGRhdGU7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAvL2lmICh0aGlzLnBhcmFtQ29uZmlnLkRFQlVHX0ZMQUcpIGNvbnNvbGUubG9nKFwianNvbjpvdXQ6XCIsIGpzb24pXHJcbiAgICAgICAgcmV0dXJuIGpzb247XHJcbiAgICAgIH1cclxuICBwdWJsaWMgZGF0ZVlZWVlNTUREKG9iamVjdDphbnksIGpzb246IGFueSkge1xyXG4gICAgaWYgKHRoaXMucGFyYW1Db25maWcuREVCVUdfRkxBRykgY29uc29sZS5sb2coXCJqc29uOlwiLCBqc29uKVxyXG4gICAgICAgICBPYmplY3Qua2V5cyhqc29uKS5tYXAoa2V5ID0+IHtcclxuICAgICAgICAgICBsZXQgbiA9IGtleS50b1VwcGVyQ2FzZSgpLnNlYXJjaChcIl9EQVRFXCIpO1xyXG4gICAgICBpZiAobiAhPSAtMSkge1xyXG4gICAgICAgICAgICBsZXQgZGF0ZU9yZyA9IGpzb25ba2V5XTtcclxuICAgICAgICAgICAgIGxldCBkYXRlID0gbmV3IERhdGUoanNvbltrZXldKTtcclxuICAgICAgICAgICAgIC8vZGF0ZSA9IHRvTG9jYWxEYXRlKGRhdGUpO1xyXG4gICAgICAgICAgICAgbGV0IHRpbWVWYWwgPSBkYXRlLmdldFRpbWUoKTtcclxuICAgICAgICAgICAgIGlmICghaXNOYU4odGltZVZhbCkgJiYgKHRpbWVWYWwgPiAwKSkge1xyXG4gICAgICAgICAgICAgICAvL2lmICh0aGlzLnBhcmFtQ29uZmlnLkRFQlVHX0ZMQUcpIGNvbnNvbGUubG9nKFwia2V5OlwiK2tleSArIFwiOlwiICsgZGF0ZS5nZXRUaW1lKCkpO1xyXG4gICAgICAgICAgICAgICAvL2xldCBhcnJheSA9IGRhdGVPcmcuc3BsaXQoXCJUXCIpXHJcbiAgICAgICAgICBkYXRlT3JnID0gZm9ybWF0RGF0ZShkYXRlT3JnLCBvYmplY3QucGFyYW1Db25maWcuRGF0ZUZvcm1hdCwgb2JqZWN0LnBhcmFtQ29uZmlnLmRhdGVMb2NhbGUpXHJcbiAgICAgICAgICAgICAgIGpzb25ba2V5XSA9IGRhdGVPcmc7XHJcbiAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgfVxyXG4gICAgICAgICB9KTtcclxuICAgICAgICAgcmV0dXJuIGpzb247XHJcbiAgICAgICB9XHJcbiBwdWJsaWMgc21hcnRTdHJpbmdQcm9jZXNzb3IoaW5wdXRTdHJpbmc6c3RyaW5nLCBqc29uRGF0YTp7IFtrZXk6IHN0cmluZ106IGFueSB9KSB7XHJcbiAgICBmdW5jdGlvbiByZXBsYWNlVmFyaWFibGVzSW5TdHJpbmcoaW5wdXRTdHJpbmc6c3RyaW5nLCBqc29uRGF0YTp7IFtrZXk6IHN0cmluZ106IGFueSB9KSB7XHJcbiAgICAgICAgLy8gQ2hlY2sgaWYgc3RyaW5nIGNvbnRhaW5zIGFueSB2YXJpYWJsZXMgKHN0YXJ0cyB3aXRoIDopXHJcbiAgICAgICAgbGV0IHZhcmlhYmxlUGF0dGVybjogUmVnRXhwID0gLzooW2EtekEtWl9dW2EtekEtWjAtOV9dKikvZztcclxuICAgICAgICBsZXQgaGFzVmFyaWFibGVzOmJvb2xlYW4gPSB2YXJpYWJsZVBhdHRlcm4udGVzdChpbnB1dFN0cmluZyk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8gSWYgbm8gdmFyaWFibGVzIGZvdW5kLCByZXR1cm4gb3JpZ2luYWwgc3RyaW5nXHJcbiAgICAgICAgaWYgKCFoYXNWYXJpYWJsZXMpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIG9yaWdpbmFsOiBpbnB1dFN0cmluZyxcclxuICAgICAgICAgICAgICAgIHJlc3VsdDogaW5wdXRTdHJpbmcsXHJcbiAgICAgICAgICAgICAgICByZXBsYWNlZDogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBtZXNzYWdlOiBcIk5vIHZhcmlhYmxlcyBmb3VuZCAtIHJldHVybmluZyBvcmlnaW5hbCBzdHJpbmdcIixcclxuICAgICAgICAgICAgICAgIHZhcmlhYmxlc0ZvdW5kOiBbXVxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAvLyBSZXNldCByZWdleCBsYXN0SW5kZXggc2luY2Ugd2UgdXNlZCB0ZXN0KCkgYWJvdmVcclxuICAgICAgICB2YXJpYWJsZVBhdHRlcm4ubGFzdEluZGV4ID0gMDtcclxuICAgICAgICBcclxuICAgICAgICAvLyBGaW5kIGFsbCB1bmlxdWUgdmFyaWFibGVzXHJcbiAgICAgICAgbGV0IHZhcmlhYmxlcyA9IG5ldyBTZXQ8c3RyaW5nPigpO1xyXG4gICAgICAgIGxldCBtYXRjaDtcclxuICAgICAgICB3aGlsZSAoKG1hdGNoID0gdmFyaWFibGVQYXR0ZXJuLmV4ZWMoaW5wdXRTdHJpbmcpKSAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgICB2YXJpYWJsZXMuYWRkKG1hdGNoWzFdKTsgLy8gQWRkIHZhcmlhYmxlIG5hbWUgd2l0aG91dCBjb2xvblxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAvLyBSZXBsYWNlIHZhcmlhYmxlcyB3aXRoIHZhbHVlc1xyXG4gICAgICAgIGxldCByZXN1bHRTdHJpbmcgPSBpbnB1dFN0cmluZztcclxuICAgICAgICBsZXQgcmVwbGFjZW1lbnRzID0ge307XHJcbiAgICAgICAgbGV0IG1pc3NpbmdWYXJpYWJsZXMgPSBbXTtcclxuICAgICAgICBcclxuICAgICAgICB2YXJpYWJsZXMuZm9yRWFjaCh2YXJpYWJsZU5hbWUgPT4ge1xyXG4gICAgICAgICAgICAvLyBDb252ZXJ0IHZhcmlhYmxlIG5hbWUgdG8gdXBwZXJjYXNlIHRvIG1hdGNoIEpTT04ga2V5cyAoY2FzZS1pbnNlbnNpdGl2ZSlcclxuICAgICAgICAgICAgbGV0IGtleSA9IE9iamVjdC5rZXlzKGpzb25EYXRhKS5maW5kKFxyXG4gICAgICAgICAgICAgICAgayA9PiBrLnRvVXBwZXJDYXNlKCkgPT09IHZhcmlhYmxlTmFtZS50b1VwcGVyQ2FzZSgpXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiUHJvY2Vzc2luZyB2YXJpYWJsZTogXCIgLCB2YXJpYWJsZU5hbWUsIFwibWF0Y2hlZCBrZXk6XCIsIGtleSAsIFwianNvbkRhdGE6XCIsIGpzb25EYXRhKTtcclxuICAgICAgICAgICAgaWYgKGtleSAhPT0gdW5kZWZpbmVkICYmIGpzb25EYXRhW2tleV0gIT09IHVuZGVmaW5lZCAmJiBqc29uRGF0YVtrZXldICE9PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgdmFsdWUgPSBqc29uRGF0YVtrZXldO1xyXG4gICAgICAgICAgICAgICAgLy8gRm9ybWF0IHRoZSB2YWx1ZSBwcm9wZXJseVxyXG4gICAgICAgICAgICAgICAgbGV0IGZvcm1hdHRlZFZhbHVlO1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJykge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIEVzY2FwZSBzaW5nbGUgcXVvdGVzIGluIHN0cmluZ3NcclxuICAgICAgICAgICAgICAgICAgICBsZXQgZXNjYXBlZFZhbHVlID0gdmFsdWUucmVwbGFjZSgvJy9nLCBcIicnXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvcm1hdHRlZFZhbHVlID0gYCcke2VzY2FwZWRWYWx1ZX0nYDtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAodHlwZW9mIHZhbHVlID09PSAnbnVtYmVyJykge1xyXG4gICAgICAgICAgICAgICAgICAgIGZvcm1hdHRlZFZhbHVlID0gdmFsdWUudG9TdHJpbmcoKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAodmFsdWUgaW5zdGFuY2VvZiBEYXRlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gRm9ybWF0IGRhdGUgYXMgU1FMIGRhdGUgc3RyaW5nXHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHllYXIgPSB2YWx1ZS5nZXRGdWxsWWVhcigpO1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBtb250aCA9IFN0cmluZyh2YWx1ZS5nZXRNb250aCgpICsgMSkucGFkU3RhcnQoMiwgJzAnKTtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgZGF5ID0gU3RyaW5nKHZhbHVlLmdldERhdGUoKSkucGFkU3RhcnQoMiwgJzAnKTtcclxuICAgICAgICAgICAgICAgICAgICBmb3JtYXR0ZWRWYWx1ZSA9IGAnJHt5ZWFyfS0ke21vbnRofS0ke2RheX0nYDtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAodHlwZW9mIHZhbHVlID09PSAnYm9vbGVhbicpIHtcclxuICAgICAgICAgICAgICAgICAgICBmb3JtYXR0ZWRWYWx1ZSA9IHZhbHVlID8gJzEnIDogJzAnO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyBGb3Igb3RoZXIgdHlwZXMsIGNvbnZlcnQgdG8gc3RyaW5nIGFuZCBxdW90ZVxyXG4gICAgICAgICAgICAgICAgICAgIGZvcm1hdHRlZFZhbHVlID0gYCcke1N0cmluZyh2YWx1ZSl9J2A7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIC8vIFJlcGxhY2UgQUxMIG9jY3VycmVuY2VzIG9mIHRoaXMgdmFyaWFibGVcclxuICAgICAgICAgICAgICAgIGxldCB2YXJpYWJsZVJlZ2V4ID0gbmV3IFJlZ0V4cChgOiR7dmFyaWFibGVOYW1lfVxcXFxiYCwgJ2cnKTtcclxuICAgICAgICAgICAgICAgIHJlc3VsdFN0cmluZyA9IHJlc3VsdFN0cmluZy5yZXBsYWNlKHZhcmlhYmxlUmVnZXgsIGZvcm1hdHRlZFZhbHVlKTtcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgcmVwbGFjZW1lbnRzW3ZhcmlhYmxlTmFtZV0gPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgb3JpZ2luYWw6IGA6JHt2YXJpYWJsZU5hbWV9YCxcclxuICAgICAgICAgICAgICAgICAgICByZXBsYWNlZFdpdGg6IGZvcm1hdHRlZFZhbHVlLFxyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlOiB2YWx1ZSxcclxuICAgICAgICAgICAgICAgICAgICB0eXBlOiB0eXBlb2YgdmFsdWVcclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBtaXNzaW5nVmFyaWFibGVzLnB1c2godmFyaWFibGVOYW1lKTtcclxuICAgICAgICAgICAgICAgIC8vIEtlZXAgdGhlIHZhcmlhYmxlIGFzIGlzIGlmIG5vdCBmb3VuZFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgb3JpZ2luYWw6IGlucHV0U3RyaW5nLFxyXG4gICAgICAgICAgICByZXN1bHQ6IHJlc3VsdFN0cmluZyxcclxuICAgICAgICAgICAgcmVwbGFjZWQ6IHRydWUsXHJcbiAgICAgICAgICAgIHJlcGxhY2VtZW50czogcmVwbGFjZW1lbnRzLFxyXG4gICAgICAgICAgICB2YXJpYWJsZXNGb3VuZDogQXJyYXkuZnJvbSh2YXJpYWJsZXMpLFxyXG4gICAgICAgICAgICBtaXNzaW5nVmFyaWFibGVzOiBtaXNzaW5nVmFyaWFibGVzLFxyXG4gICAgICAgICAgICBtZXNzYWdlOiBtaXNzaW5nVmFyaWFibGVzLmxlbmd0aCA+IDAgXHJcbiAgICAgICAgICAgICAgICA/IGBTb21lIHZhcmlhYmxlcyBub3QgZm91bmQ6ICR7bWlzc2luZ1ZhcmlhYmxlcy5qb2luKCcsICcpfWBcclxuICAgICAgICAgICAgICAgIDogJ0FsbCB2YXJpYWJsZXMgcmVwbGFjZWQgc3VjY2Vzc2Z1bGx5J1xyXG4gICAgICAgIH07XHJcbiAgICB9XHJcbiAgICAvLyBGaXJzdCBjaGVjayBpZiBpdCBsb29rcyBsaWtlIGEgU1FMIFdIRVJFIGNsYXVzZSB3aXRoIHZhcmlhYmxlc1xyXG4gICAgICBsZXQgaGFzV2hlcmVDbGF1c2UgPSBpbnB1dFN0cmluZy50b1VwcGVyQ2FzZSgpLmluY2x1ZGVzKCdfV0hFUkU9Jyk7XHJcbiAgICAgIGxldCBoYXNWYXJpYWJsZXMgPSAvOlthLXpBLVpfXVthLXpBLVowLTlfXSovLnRlc3QoaW5wdXRTdHJpbmcpO1xyXG4gICAgICBcclxuICAgICAgLy8gSWYgaXQgaGFzIFdIRVJFIGJ1dCBubyB2YXJpYWJsZXMsIGl0IG1pZ2h0IGJlIGNvbXBsZXRlIGFscmVhZHlcclxuICAgICAgaWYgKGhhc1doZXJlQ2xhdXNlICYmICFoYXNWYXJpYWJsZXMpIHtcclxuICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgb3JpZ2luYWw6IGlucHV0U3RyaW5nLFxyXG4gICAgICAgICAgICAgIHJlc3VsdDogaW5wdXRTdHJpbmcsXHJcbiAgICAgICAgICAgICAgbmVlZHNSZXBsYWNlbWVudDogZmFsc2UsXHJcbiAgICAgICAgICAgICAgdHlwZTogJ2NvbXBsZXRlX3doZXJlX2NsYXVzZScsXHJcbiAgICAgICAgICAgICAgbWVzc2FnZTogJ1dIRVJFIGNsYXVzZSBhcHBlYXJzIGNvbXBsZXRlIC0gbm8gdmFyaWFibGVzIHRvIHJlcGxhY2UnXHJcbiAgICAgICAgICB9O1xyXG4gICAgICB9XHJcbiAgICAgIFxyXG4gICAgICAvLyBPdGhlcndpc2UsIHRyeSB0byByZXBsYWNlIHZhcmlhYmxlc1xyXG4gICAgICBsZXQgcmVwbGFjZW1lbnRSZXN1bHQgPSByZXBsYWNlVmFyaWFibGVzSW5TdHJpbmcoaW5wdXRTdHJpbmcsIGpzb25EYXRhKTtcclxuICAgICAgXHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAuLi5yZXBsYWNlbWVudFJlc3VsdCxcclxuICAgICAgICAgIG5lZWRzUmVwbGFjZW1lbnQ6IHJlcGxhY2VtZW50UmVzdWx0LnJlcGxhY2VkLFxyXG4gICAgICAgICAgdHlwZTogcmVwbGFjZW1lbnRSZXN1bHQucmVwbGFjZWQgPyAnd2l0aF92YXJpYWJsZXMnIDogJ25vX3ZhcmlhYmxlcydcclxuICAgICAgfTtcclxuICB9XHJcbiAgcHVibGljIHByb2Nlc3Nmb3JtYXR0ZWRXaGVyZShvYmplY3QsIGZvcm1hdHRlZFdoZXJlKXtcclxuICAgIGlmICh0aGlzLnNlc3Npb25QYXJhbXNbJ05BVklHQVRFX0RBVEEnXSAhPSBcInVuZGVmaW5lZFwiKXtcclxuICAgICAgdGhpcy5zZXNzaW9uUGFyYW1zWydOQVZJR0FURV9EQVRBJ10gPSB7fTtcclxuICAgICAgbGV0IG5hdkRhdGEgPSB7fVxyXG4gICAgICBmb3IgKGxldCBpID0wIDsgaTwgb2JqZWN0Lm1hc3RlcktleU5hbWVBcnIubGVuZ3RoO2krKyl7XHJcbiAgICAgICAgICBuYXZEYXRhW29iamVjdC5tYXN0ZXJLZXlOYW1lQXJyW2ldXSA9IG9iamVjdC5tYXN0ZXJLZXlBcnJbaV1cclxuICAgICAgfVxyXG4gICAgICB0aGlzLnNlc3Npb25QYXJhbXNbJ05BVklHQVRFX0RBVEEnXSA9IG5hdkRhdGE7XHJcbiAgICB9XHJcbiAgICBsZXQgcmVzdWx0ID0gdGhpcy5zbWFydFN0cmluZ1Byb2Nlc3Nvcihmb3JtYXR0ZWRXaGVyZSwgdGhpcy5zZXNzaW9uUGFyYW1zWydOQVZJR0FURV9EQVRBJ10gKTtcclxuICAgICAgaWYgKHJlc3VsdC5uZWVkc1JlcGxhY2VtZW50ID09IHRydWUgKXtcclxuICAgICAgICBpZiAocmVzdWx0Lm1lc3NhZ2Uuc3RhcnRzV2l0aCAoXCJTb21lIHZhcmlhYmxlcyBub3QgZm91bmRcIikgKVxyXG4gICAgICAgICAgZm9ybWF0dGVkV2hlcmUgPSBcIlwiO1xyXG4gICAgICAgIGVsc2VcclxuICAgICAgICAgIGZvcm1hdHRlZFdoZXJlID0gcmVzdWx0LnJlc3VsdDtcclxuICAgICAgfVxyXG4gICAgICBjb25zb2xlLmxvZyAoXCJwcm9jZXNzZm9ybWF0dGVkV2hlcmU6dGhpcy5XaGVyZUNsYXVzZVwiLCByZXN1bHQsIGZvcm1hdHRlZFdoZXJlICk7XHJcbiAgICB0aGlzLnNlc3Npb25QYXJhbXNbJ05BVklHQVRFX0RBVEEnXSA9IHt9O1xyXG4gICAgcmV0dXJuIGZvcm1hdHRlZFdoZXJlO1xyXG4gIH1cclxuICBwdWJsaWMgc3RyaW5naWZ5TXVsdGlTZWxlY3RGaWVsZHMob2JqZWN0LGZvcm0pe1xyXG4gICAgbGV0IGZvcm1Hcm91cCA9IGZvcm0udmFsdWU7XHJcbiAgICBpZiAodHlwZW9mIG9iamVjdC5tdWx0aXNlbGVjdF9hcnIgIT09IFwidW5kZWZpbmVkXCIpe1xyXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG9iamVjdC5tdWx0aXNlbGVjdF9hcnIubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgIGZvcm1Hcm91cFtvYmplY3QubXVsdGlzZWxlY3RfYXJyW2ldXSA9IEpTT04uc3RyaW5naWZ5KGZvcm1Hcm91cFtvYmplY3QubXVsdGlzZWxlY3RfYXJyW2ldXSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGlmICh0eXBlb2Ygb2JqZWN0Lm11bHRpc2VsZWN0X3RyZWVfYXJyICE9PSBcInVuZGVmaW5lZFwiKXtcclxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBvYmplY3QubXVsdGlzZWxlY3RfdHJlZV9hcnIubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgIGZvcm1Hcm91cFtvYmplY3QubXVsdGlzZWxlY3RfdHJlZV9hcnJbaV1dID0gSlNPTi5zdHJpbmdpZnkoZm9ybUdyb3VwW29iamVjdC5tdWx0aXNlbGVjdF90cmVlX2FycltpXV0pO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gZm9ybTtcclxuICAgfVxyXG4gIHB1YmxpYyBmaXhNdWx0aVNlbGVjdEZpZWxkc19yZXN1bHQob2JqZWN0LCByZXN1bHQpe1xyXG4gICAgaWYgKHR5cGVvZiBvYmplY3QubXVsdGlzZWxlY3RfYXJyICE9PSBcInVuZGVmaW5lZFwiKXtcclxuICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgb2JqZWN0Lm11bHRpc2VsZWN0X2Fyci5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgcmVzdWx0LmRhdGEubGVuZ3RoOyBqKyspIHtcclxuICAgICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgcmVzdWx0LmRhdGFbal1bb2JqZWN0Lm11bHRpc2VsZWN0X2FycltpXV0gPSBKU09OLnBhcnNlKHJlc3VsdC5kYXRhW2pdW29iamVjdC5tdWx0aXNlbGVjdF9hcnJbaV1dKTtcclxuICAgICAgICAgICAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBpZiAodHlwZW9mIG9iamVjdC5tdWx0aXNlbGVjdF90cmVlX2FyciAhPT0gXCJ1bmRlZmluZWRcIil7XHJcbiAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG9iamVjdC5tdWx0aXNlbGVjdF90cmVlX2Fyci5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgcmVzdWx0LmRhdGEubGVuZ3RoOyBqKyspIHtcclxuICAgICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgcmVzdWx0LmRhdGFbal1bb2JqZWN0Lm11bHRpc2VsZWN0X3RyZWVfYXJyW2ldXSA9IEpTT04ucGFyc2UocmVzdWx0LmRhdGFbal1bb2JqZWN0Lm11bHRpc2VsZWN0X3RyZWVfYXJyW2ldXSk7XHJcbiAgICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gICB9XHJcbiAgIHB1YmxpYyBmaXhNdWx0aVNlbGVjdEZpZWxkc19OZXdWYWwob2JqZWN0LCBOZXdWYWwpe1xyXG4gICAgIGlmICh0eXBlb2Ygb2JqZWN0Lm11bHRpc2VsZWN0X2FyciAhPT0gXCJ1bmRlZmluZWRcIil7XHJcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgb2JqZWN0Lm11bHRpc2VsZWN0X2Fyci5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIGlmIChOZXdWYWxbb2JqZWN0Lm11bHRpc2VsZWN0X2FycltpXV0gIT0gbnVsbCAmJiBOZXdWYWxbb2JqZWN0Lm11bHRpc2VsZWN0X2FycltpXV0ubGVuZ3RoID4gMCl7XHJcbiAgICAgICAgICBOZXdWYWxbb2JqZWN0Lm11bHRpc2VsZWN0X2FycltpXV0gPSBKU09OLnBhcnNlKE5ld1ZhbFtvYmplY3QubXVsdGlzZWxlY3RfYXJyW2ldXSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBpZiAodHlwZW9mIG9iamVjdC5tdWx0aXNlbGVjdF9hcnIgIT09IFwidW5kZWZpbmVkXCIpe1xyXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG9iamVjdC5tdWx0aXNlbGVjdF90cmVlX2Fyci5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIGlmIChOZXdWYWxbb2JqZWN0Lm11bHRpc2VsZWN0X3RyZWVfYXJyW2ldXSAhPSBudWxsICYmIE5ld1ZhbFtvYmplY3QubXVsdGlzZWxlY3RfdHJlZV9hcnJbaV1dLmxlbmd0aCA+IDApe1xyXG4gICAgICAgICAgTmV3VmFsW29iamVjdC5tdWx0aXNlbGVjdF90cmVlX2FycltpXV0gPSBKU09OLnBhcnNlKE5ld1ZhbFtvYmplY3QubXVsdGlzZWxlY3RfdHJlZV9hcnJbaV1dKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgfVxyXG4gICAgcHVibGljIHRyYW5zZm9ybUZvclRyZWVWaWV3KGRhdGEpOiBhbnlbXSB7XHJcbiAgICBjb25zdCBncm91cE1hcCA9IG5ldyBNYXA8c3RyaW5nLCBhbnk+KCk7XHJcblxyXG4gICAgZGF0YS5mb3JFYWNoKGl0ZW0gPT4ge1xyXG4gICAgICBjb25zdCBncm91cEtleSA9IGl0ZW0uQ09ERVRFWFRfTEFORztcclxuXHJcbiAgICAgIGlmICghZ3JvdXBNYXAuaGFzKGdyb3VwS2V5KSkge1xyXG4gICAgICAgIGdyb3VwTWFwLnNldChncm91cEtleSwge1xyXG4gICAgICAgICAgdGV4dDogZ3JvdXBLZXksXHJcbiAgICAgICAgICBpZDogZ3JvdXBLZXksICAvLyBBZGRlZCBpZCBmaWVsZFxyXG4gICAgICAgICAgaXRlbXM6IFtdXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGNvbnN0IGdyb3VwID0gZ3JvdXBNYXAuZ2V0KGdyb3VwS2V5KTtcclxuICAgICAgZ3JvdXAuaXRlbXMucHVzaCh7XHJcbiAgICAgICAgdGV4dDogaXRlbS5DT0RFLFxyXG4gICAgICAgIGlkOiBpdGVtLkNPREUgIC8vIENoYW5nZWQgZnJvbSAnY29kZScgdG8gJ2lkJ1xyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG5cclxuICAgIHJldHVybiBBcnJheS5mcm9tKGdyb3VwTWFwLnZhbHVlcygpKTtcclxuICB9XHJcbiAgIHB1YmxpYyBjYWxsbHRyYW5zZm9ybUZvclRyZWVWaWV3KG9iamVjdCl7XHJcbiAgICAvL2NvbnNvbGUubG9nIChcInRoaXMubG9va3VwQXJyRGVmOm9iamVjdC5tdWx0aXNlbGVjdF90cmVlX2FycjpcIiwgb2JqZWN0Lm11bHRpc2VsZWN0X3RyZWVfYXJyKVxyXG4gICAgaWYgKCB0eXBlb2Ygb2JqZWN0Lm11bHRpc2VsZWN0X3RyZWVfYXJyICE9IFwidW5kZWZpbmVkXCIpXHJcbiAgICB7XHJcbiAgICAgIGZvciAobGV0IGkgPTA7IGkgPCBvYmplY3QubXVsdGlzZWxlY3RfdHJlZV9hcnIubGVuZ3RoOyBpKyspe1xyXG4gICAgICAgIGxldCBjb2xOYW1lID0gb2JqZWN0Lm11bHRpc2VsZWN0X3RyZWVfYXJyW2ldO1xyXG4gICAgICAgIGxldCBrcE5hbWUgPSBcImxrcEFyclwiICsgY29sTmFtZTtcclxuICAgICAgICBcclxuICAgICAgICBsZXQgbGtwVmFsID0gb2JqZWN0W2twTmFtZV07XHJcbiAgICAgICAgLy9jb25zb2xlLmxvZyAoXCJ0aGlzLmxvb2t1cEFyckRlZjprcE5hbWU6XCIsIGtwTmFtZSwgbGtwVmFsKVxyXG4gICAgICAgIGxrcFZhbCA9IHRoaXMudHJhbnNmb3JtRm9yVHJlZVZpZXcobGtwVmFsKTtcclxuICAgICAgICAvL2NvbnNvbGUubG9nIChcInRoaXMubG9va3VwQXJyRGVmOmtwTmFtZTpcIiwga3BOYW1lLCBsa3BWYWwpXHJcbiAgICAgICAgb2JqZWN0W2twTmFtZV0gPSBsa3BWYWw7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIHB1YmxpYyBleGVjdXRlUXVlcnlBY3RfZm9ybShmb3JtOiBhbnksIG9iamVjdDphbnkpIHtcclxuICAgIGNvbnNvbGUubG9nKFwiZXhlY3V0ZVF1ZXJ5QWN0X2Zvcm06Zm9ybTpcIixmb3JtLCBcIm9iamVjdC5pc0NoaWxkIDpcIixvYmplY3QuaXNDaGlsZCwgXCJvYmplY3QuaXNTZWFyY2g6XCIsb2JqZWN0LmlzU2VhcmNoIClcclxuICAgIGlmICh0eXBlb2YgZm9ybSA9PT0gXCJ1bmRlZmluZWRcIilcclxuICAgICAgICAgIHJldHVybjtcclxuXHJcbiAgICAgICAgbGV0IHBhcmFtQ29uZmlnID0ge1xyXG4gICAgICAgICAgXCJOYW1lXCI6IFwiY2hpbGRSZWNvcmRzXCIsXHJcbiAgICAgICAgICBcIlZhbFwiOiAwXHJcbiAgICAgICAgfTtcclxuICAgICAgICBzZXRQYXJhbUNvbmZpZyhwYXJhbUNvbmZpZyk7XHJcbiAgICBpZiAob2JqZWN0LmlzQ2hpbGQgPT0gdHJ1ZSkge1xyXG4gICAgICBpZiAob2JqZWN0LmlzU2VhcmNoICE9IHRydWUpIHtcclxuICAgICAgICAvL29iamVjdC5mb3JtLnJlc2V0KCk7XHJcbiAgICAgICAgb2JqZWN0LmZvcm0ucmVzZXQob2JqZWN0LmZvcm1Jbml0aWFsVmFsdWVzKTtcclxuXHJcbiAgICAgICAgaWYgKCh0eXBlb2Ygb2JqZWN0Lm1hc3RlcktleU5hbWVBcnIgIT0gXCJ1bmRlZmluZWRcIikgJiYgKG9iamVjdC5tYXN0ZXJLZXlOYW1lQXJyLmxlbmd0aCAhPSAwKSkge1xyXG4gICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBvYmplY3QubWFzdGVyS2V5TmFtZUFyci5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgb2JqZWN0LmZvcm1Jbml0aWFsVmFsdWVzW29iamVjdC5tYXN0ZXJLZXlOYW1lQXJyW2ldXSA9IG9iamVjdC5tYXN0ZXJLZXlBcnJbaV07XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgb2JqZWN0LmZvcm1Jbml0aWFsVmFsdWVzW29iamVjdC5tYXN0ZXJLZXlOYW1lXSA9IG9iamVjdC5tYXN0ZXJLZXk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIC8vb2JqZWN0LmZvcm1Jbml0aWFsVmFsdWVzW29iamVjdC5tYXN0ZXJLZXlOYW1lXSA9IG9iamVjdC5tYXN0ZXJLZXk7XHJcbiAgICAgICAgb2JqZWN0LmZvcm0ucmVzZXQob2JqZWN0LmZvcm1Jbml0aWFsVmFsdWVzLCB7IGVtaXRFdmVudDogb2JqZWN0LmVtaXRFdmVudCAhPSBudWxsID8gb2JqZWN0LmVtaXRFdmVudCA6IHRydWUgfSk7XHJcbiAgICAgICAgaWYgKG9iamVjdC5wYXJhbUNvbmZpZy5ERUJVR19GTEFHKSBjb25zb2xlLmxvZyhcIm9iamVjdC5tYXN0ZXJLZXlOYW1lOlwiICsgb2JqZWN0Lm1hc3RlcktleU5hbWUpO1xyXG4gICAgICAgICAgICBvYmplY3QuaXNTZWFyY2ggPSB0cnVlO1xyXG4gICAgICAgICAgICBmb3JtID0gb2JqZWN0LmZvcm0uZ2V0UmF3VmFsdWUoKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxldCBQYWdlID0gXCImX3F1ZXJ5PVwiICsgb2JqZWN0LmdldENNRDtcclxuICAgIGlmIChvYmplY3QucGFyYW1Db25maWcuREVCVUdfRkxBRykgY29uc29sZS5sb2coXCJvYmplY3QuaXNTZWFyY2g6XCIgKyBvYmplY3QuaXNTZWFyY2gpXHJcbiAgICBpZiAob2JqZWN0LmlzU2VhcmNoID09IHRydWUpIHtcclxuICAgICAgICAgIGlmIChvYmplY3QucGFyYW1Db25maWcuREVCVUdfRkxBRykgY29uc29sZS5sb2coZm9ybS52YWx1ZSk7XHJcbiAgICBsZXQgTmV3VmFsID0gZm9ybTtcclxuICAgICAgICAgICAgb2JqZWN0LmlzU2VhcmNoID0gZmFsc2U7XHJcbiAgICBpZiAoKHR5cGVvZiBvYmplY3QuZm9ybWF0dGVkV2hlcmUgPT09IFwidW5kZWZpbmVkXCIpIHx8IChvYmplY3QuZm9ybWF0dGVkV2hlcmUgPT0gbnVsbCkpIHtcclxuICAgICAgICAgICAgICBQYWdlID0gUGFnZSArIG9iamVjdC5zdGFyU2VydmljZXMuZm9ybWF0V2hlcmUoTmV3VmFsKTtcclxuXHJcbiAgICAgICAgICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgIG9iamVjdC5mb3JtYXR0ZWRXaGVyZSA9IHRoaXMucHJvY2Vzc2Zvcm1hdHRlZFdoZXJlKG9iamVjdCwgb2JqZWN0LmZvcm1hdHRlZFdoZXJlKTtcclxuICAgICAgICAgICAgICBQYWdlID0gUGFnZSArIG9iamVjdC5mb3JtYXR0ZWRXaGVyZTtcclxuICAgICAgICAgICAgICBvYmplY3QuZm9ybWF0dGVkV2hlcmUgPSBudWxsO1xyXG4gICAgICAgICAgICB9XHJcbiAgICBpZiAoKHR5cGVvZiBvYmplY3QuT3JkZXJCeUNsYXVzZSAhPT0gXCJ1bmRlZmluZWRcIikgJiYgKG9iamVjdC5PcmRlckJ5Q2xhdXNlICE9IFwiXCIpKVxyXG4gICAgICAgICAgICAgIFBhZ2UgPSBQYWdlICsgXCImX09SREVSQlk9XCIgKyBvYmplY3QuT3JkZXJCeUNsYXVzZTtcclxuICAgIH1cclxuXHJcbiAgICBvYmplY3QuZXhlY3V0ZVF1ZXJ5cmVzdWx0ID0gW107XHJcbiAgICBvYmplY3QuZXhlY3V0ZVF1ZXJ5cmVzdWx0LnJlc3VsdCA9IDA7XHJcbiAgICAgICAgb2JqZWN0LkN1cnJlbnRSZWMgPSAwO1xyXG5cclxuICAgICAgICBQYWdlID0gZW5jb2RlVVJJKFBhZ2UpO1xyXG4gICAgb2JqZWN0LnN0YXJTZXJ2aWNlcy5mZXRjaChvYmplY3QsIFBhZ2UpLnN1YnNjcmliZSgocmVzdWx0OmFueSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKHJlc3VsdCAhPSBudWxsKSB7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCByZXN1bHQuZGF0YVswXS5kYXRhLmxlbmd0aDsgaSsrKVxyXG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdC5kYXRhWzBdLmRhdGFbaV0gPSBvYmplY3Quc3RhclNlcnZpY2VzLnBhcnNlVG9EYXRlKHJlc3VsdC5kYXRhWzBdLmRhdGFbaV0pO1xyXG5cclxuXHJcbiAgICAgICAgcmVzdWx0ID0ge1xyXG4gICAgICAgICAgZGF0YTogcmVzdWx0LmRhdGFbMF0uZGF0YSxcclxuICAgICAgICAgIHRvdGFsOiBwYXJzZUludChyZXN1bHQuZGF0YVswXS5kYXRhLmxlbmd0aCwgMTApXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChvYmplY3QuaXNNYXN0ZXIpXHJcbiAgICAgICAgICBvYmplY3Quc3RhclNlcnZpY2VzLnNob3dOb3RpZmljYXRpb24oJ3N1Y2Nlc3MnLCBcIlJlY29yZHMgcmV0cmlldmVkIDogXCIgKyByZXN1bHQudG90YWwpO1xyXG4gICAgICAgIG9iamVjdC5zdGFyU2VydmljZXMuZml4TXVsdGlTZWxlY3RGaWVsZHNfcmVzdWx0KG9iamVjdCwgcmVzdWx0KVxyXG4gICAgICAgIG9iamVjdC5leGVjdXRlUXVlcnlyZXN1bHQgPSByZXN1bHQ7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5oZWxwTXNnID0gXCJcIjtcclxuICAgICAgICBpZiAob2JqZWN0LnBhcmFtQ29uZmlnLkRFQlVHX0ZMQUcpIGNvbnNvbGUubG9nKFwib2JqZWN0LmV4ZWN1dGVRdWVyeXJlc3VsdDpcIiwgb2JqZWN0LmV4ZWN1dGVRdWVyeXJlc3VsdCk7XHJcbiAgICAgICAgaWYgKHR5cGVvZiByZXN1bHQuZGF0YVtvYmplY3QuQ3VycmVudFJlY10gIT09IFwidW5kZWZpbmVkXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgIG9iamVjdC5mb3JtLnBhdGNoVmFsdWUocmVzdWx0LmRhdGFbb2JqZWN0LkN1cnJlbnRSZWNdKTtcclxuICAgICAgICAgICAgICAgICAgICAgIG9iamVjdC5mb3JtLm1hcmtBc1ByaXN0aW5lKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICBvYmplY3QuZm9ybS5tYXJrQXNVbnRvdWNoZWQoKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIG9iamVjdC5mb3JtLnJlc2V0KHJlc3VsdC5kYXRhW29iamVjdC5DdXJyZW50UmVjXSwgeyBlbWl0RXZlbnQ6IG9iamVjdC5lbWl0RXZlbnQgIT0gbnVsbCA/IG9iamVjdC5lbWl0RXZlbnQgOiB0cnVlIH0pO1xyXG5cclxuICAgICAgICBpZiAob2JqZWN0LnBhcmFtQ29uZmlnLkRFQlVHX0ZMQUcpIGNvbnNvbGUubG9nKFwiZm9ybSBzZXJ2aWNlcmVhZENvbXBsZXRlZE91dHB1dFwiKTtcclxuICAgICAgICBpZiAob2JqZWN0LnBhcmFtQ29uZmlnLkRFQlVHX0ZMQUcpIGNvbnNvbGUubG9nKG9iamVjdC5yZWFkQ29tcGxldGVkT3V0cHV0KTtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgcGFyYW1Db25maWcgPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBcIk5hbWVcIjogXCJjaGlsZFJlY29yZHNcIixcclxuICAgICAgICAgICAgICAgICAgICAgIFwiVmFsXCI6IHJlc3VsdC50b3RhbFxyXG4gICAgICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0UGFyYW1Db25maWcocGFyYW1Db25maWcpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChyZXN1bHQudG90YWwgIT0gMClcclxuICAgICAgICAgICAgICAgICAgICAgIG9iamVjdC5pc05ldyA9IGZhbHNlO1xyXG5cclxuICAgICAgICBpZiAob2JqZWN0LmRpc2FibGVFbWl0UmVhZENvbXBsZXRlZCAhPSB0cnVlKSB7XHJcbiAgICAgICAgICBpZiAocmVzdWx0LnRvdGFsICE9IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgb2JqZWN0LnJlYWRDb21wbGV0ZWRPdXRwdXQuZW1pdChvYmplY3QuZm9ybS5nZXRSYXdWYWx1ZSgpKTtcclxuICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgb2JqZWN0LmNsZWFyQ29tcGxldGVkT3V0cHV0LmVtaXQoW10pO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICBpZiAodHlwZW9mIG9iamVjdC5jYWxsQmFja0Z1bmN0aW9uICE9PSBcInVuZGVmaW5lZFwiKVxyXG4gICAgICAgICAgICAgICAgICAgICAgb2JqZWN0LmNhbGxCYWNrRnVuY3Rpb24ocmVzdWx0LmRhdGFbMF0pO1xyXG5cclxuXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldFByaW1hcktleU5hbWVBcnIob2JqZWN0LCB0cnVlKTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgKGVycjphbnkpID0+IHtcclxuICAgICAgICAgICAgICAgIC8vYWxlcnQoJ2Vycm9yOicgKyBlcnIubWVzc2FnZSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNob3dFcnJvck1zZyhvYmplY3QsIGVycik7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgfVxyXG4gIHB1YmxpYyBleGVjc3RhclNlcnZpY2VzX2Zvcm1faW5UcmFucyhOZXdWYWw6YW55LCBvYmplY3Q6YW55KSB7XHJcbiAgICAgIHRoaXMuY29tbWl0Qm9keS5wdXNoKE5ld1ZhbCk7XHJcbiAgICBpZiAob2JqZWN0LmFjdGlvbiAhPSBcIlJFTU9WRVwiKSB7XHJcbiAgICAgIGlmICh0eXBlb2Ygb2JqZWN0LmV4ZWN1dGVRdWVyeXJlc3VsdCAhPT0gXCJ1bmRlZmluZWRcIikge1xyXG4gICAgICAgIGlmIChvYmplY3QuaXNOZXcgPT0gdHJ1ZSkge1xyXG4gICAgICAgICAgICBvYmplY3QuZXhlY3V0ZVF1ZXJ5cmVzdWx0LmRhdGEucHVzaChOZXdWYWwpO1xyXG4gICAgICAgICAgICBvYmplY3QuZXhlY3V0ZVF1ZXJ5cmVzdWx0LnRvdGFsID0gb2JqZWN0LmV4ZWN1dGVRdWVyeXJlc3VsdC50b3RhbCArIDE7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIG9iamVjdC5leGVjdXRlUXVlcnlyZXN1bHQuZGF0YVtvYmplY3QuQ3VycmVudFJlY10gPSBOZXdWYWw7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICBlbHNlIHtcclxuICAgICAgICBsZXQgTmV3VmFsQXJyOmFueSA9IFtdO1xyXG4gICAgICAgICAgTmV3VmFsQXJyLnB1c2goTmV3VmFsKTtcclxuICAgICAgICBsZXQgcmVzdWx0ID0ge1xyXG4gICAgICAgICAgZGF0YTogTmV3VmFsQXJyLFxyXG4gICAgICAgICAgdG90YWw6IDFcclxuICAgICAgICB9XHJcbiAgICAgICAgb2JqZWN0LmV4ZWN1dGVRdWVyeXJlc3VsdCA9IHJlc3VsdDtcclxuICAgICAgICAgICAgb2JqZWN0LkN1cnJlbnRSZWMgPSAwO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgIHZhciBkYXRhOmFueSA9IFtdO1xyXG4gICAgICAgIGRhdGEucHVzaChOZXdWYWwpXHJcbiAgICAgIGlmIChvYmplY3QuaXNOZXcgPT0gdHJ1ZSkge1xyXG4gICAgICAgICAgb2JqZWN0LmlzTmV3ID0gZmFsc2U7XHJcbiAgICAgICAgaWYgKHR5cGVvZiBvYmplY3QuY2FsbEJhY2tQb3N0X0luc2VydCAhPT0gXCJ1bmRlZmluZWRcIikge1xyXG4gICAgICAgICAgICAgIG9iamVjdC5jYWxsQmFja1Bvc3RfSW5zZXJ0LmFwcGx5KG9iamVjdCwgZGF0YSk7XHJcbiAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgZWxzZSB7XHJcbiAgICAgICAgaWYgKHR5cGVvZiBvYmplY3QuY2FsbEJhY2tQb3N0X3VwZGF0ZSAhPT0gXCJ1bmRlZmluZWRcIikge1xyXG4gICAgICAgICAgb2JqZWN0LmNhbGxCYWNrUG9zdF91cGRhdGUuYXBwbHkob2JqZWN0LCBkYXRhKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgICAvL1JFTU9WRVxyXG4gICAgICAgIG9iamVjdC5leGVjdXRlUXVlcnlyZXN1bHQuZGF0YS5zcGxpY2Uob2JqZWN0LkN1cnJlbnRSZWMsIDEpO1xyXG4gICAgICAgIG9iamVjdC5leGVjdXRlUXVlcnlyZXN1bHQudG90YWwtLTtcclxuICAgICAgaWYgKG9iamVjdC5DdXJyZW50UmVjID4gMCkge1xyXG4gICAgICAgICAgb2JqZWN0LkN1cnJlbnRSZWMtLTtcclxuICAgICAgICBvYmplY3QuZm9ybS5yZXNldChvYmplY3QuZXhlY3V0ZVF1ZXJ5cmVzdWx0LmRhdGFbb2JqZWN0LkN1cnJlbnRSZWNdLCB7IGVtaXRFdmVudDogb2JqZWN0LmVtaXRFdmVudCAhPSBudWxsID8gb2JqZWN0LmVtaXRFdmVudCA6IHRydWUgfSk7XHJcbiAgICAgICAgICBpZiAob2JqZWN0LmlzTmV3ID09IHRydWUpXHJcbiAgICAgICAgICAgIG9iamVjdC5pc05ldyA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgZWxzZSB7XHJcbiAgICAgICAgb2JqZWN0LmZvcm0ucmVzZXQob2JqZWN0LmZvcm1Jbml0aWFsVmFsdWVzLCB7IGVtaXRFdmVudDogb2JqZWN0LmVtaXRFdmVudCAhPSBudWxsID8gb2JqZWN0LmVtaXRFdmVudCA6IHRydWUgfSk7XHJcbiAgICAgICAgICBvYmplY3QuaXNOZXcgPSB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgbGV0IE5ld1ZhbDE6YW55ID0gW107XHJcbiAgICAgICAgICAgICAgICBOZXdWYWwxLnB1c2goTmV3VmFsKTtcclxuICAgICAgaWYgKHR5cGVvZiBvYmplY3QuY2FsbEJhY2tSZW1vdmVBdHQgIT09IFwidW5kZWZpbmVkXCIpXHJcbiAgICAgICAgb2JqZWN0LmNhbGxCYWNrUmVtb3ZlQXR0KG9iamVjdCwgTmV3VmFsKTtcclxuICAgICAgaWYgKHR5cGVvZiBvYmplY3QuY2FsbEJhY2tQb3N0X1JlbW92ZSAhPT0gXCJ1bmRlZmluZWRcIikge1xyXG4gICAgICAgIC8vIGxldCBOZXdWYWwxID0gW107XHJcbiAgICAgICAgLy8gTmV3VmFsMS5wdXNoKE5ld1ZhbCk7XHJcbiAgICAgICAgICAgICAgb2JqZWN0LmNhbGxCYWNrUG9zdF9SZW1vdmUuYXBwbHkob2JqZWN0LCBOZXdWYWwxKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgICBcclxuICAgICAgfVxyXG4gICAgXHJcbiAgICBpZiAob2JqZWN0LmFjdGlvbiAhPSBcIlJFTU9WRVwiKSB7XHJcbiAgICAgIG9iamVjdC5mb3JtLnJlc2V0KE5ld1ZhbCwgeyBlbWl0RXZlbnQ6IG9iamVjdC5lbWl0RXZlbnQgIT0gbnVsbCA/IG9iamVjdC5lbWl0RXZlbnQgOiB0cnVlIH0pO1xyXG4gICAgfVxyXG4gICAgaWYgKG9iamVjdC5kaWFibGVFbWl0U2F2ZSA9PSB0cnVlKSB7IH1cclxuICAgIGVsc2VcclxuICAgICAgb2JqZWN0LnNhdmVDb21wbGV0ZWRPdXRwdXQuZW1pdChOZXdWYWwpO1xyXG4gICAgaWYgKG9iamVjdC5pc0NoaWxkID09IHRydWUpIHtcclxuICAgICAgbGV0IHBhcmFtQ29uZmlnID0ge1xyXG4gICAgICAgIFwiTmFtZVwiOiBcImNoaWxkUmVjb3Jkc1wiLFxyXG4gICAgICAgIFwiVmFsXCI6IG9iamVjdC5leGVjdXRlUXVlcnlyZXN1bHQudG90YWxcclxuICAgICAgfTtcclxuICAgICAgc2V0UGFyYW1Db25maWcocGFyYW1Db25maWcpO1xyXG4gICAgfVxyXG4gICAgb2JqZWN0LmFjdGlvbiA9IFwiXCI7XHJcbiAgICB0aGlzLnNldFByaW1hcktleU5hbWVBcnIob2JqZWN0LCB0cnVlKTtcclxuXHJcbiAgICB9XHJcbiAgcHVibGljIGV4ZWNzdGFyU2VydmljZXNfZm9ybShOZXdWYWw6YW55LCBvYmplY3Q6YW55KSB7XHJcbiAgICBpZiAodGhpcy5wYXJhbUNvbmZpZy5ERUJVR19GTEFHKSBjb25zb2xlLmxvZyhcIk5ld1ZhbDpcIiwgTmV3VmFsKTtcclxuICAgICAgICBvYmplY3QuYWRkVG9Cb2R5KE5ld1ZhbCk7XHJcbiAgICBpZiAob2JqZWN0LmlzTmV3ID09IHRydWUpe1xyXG4gICAgICBsZXQgc3VmZml4X3NxbCA9IHtcIl9RVUVSWVwiOiBcIkdFVF9MQVNUX0lEXCJ9O1xyXG4gICAgICBvYmplY3QuYWRkVG9Cb2R5KHN1ZmZpeF9zcWwpO1xyXG4gICAgICAvL29iamVjdC5zdWZmaXhfc3FsPSB1bmRlZmluZWQ7XHJcbiAgICB9XHJcbiAgICBsZXQgUGFnZSA9IFwiJl90cmFucz1ZXCI7XHJcbiAgICAgICAgICBpZiAodGhpcy5pblRyYW5zKSB7XHJcbiAgICAgIHRoaXMuZXhlY3N0YXJTZXJ2aWNlc19mb3JtX2luVHJhbnMoTmV3VmFsLCBvYmplY3QpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgdGhpcy5wb3N0KG9iamVjdCwgUGFnZSwgb2JqZWN0LkJvZHkpLnN1YnNjcmliZShQYWdlID0+IHtcclxuICAgICAgb2JqZWN0LkJvZHkgPSBbXTtcclxuICAgICAgaWYgKHRoaXMucGFyYW1Db25maWcuREVCVUdfRkxBRykgY29uc29sZS5sb2coXCJvYmplY3QuZXhlY3V0ZVF1ZXJ5cmVzdWx0LmRhdGE6b2JqZWN0LkN1cnJlbnRSZWM6XCIgLCBvYmplY3QuQ3VycmVudFJlYyAsIFwiIG9iamVjdC5hY3Rpb246XCIgLCBvYmplY3QuYWN0aW9uLCBvYmplY3QuZXhlY3V0ZVF1ZXJ5cmVzdWx0LCBcIlBhZ2U6XCIsIFBhZ2UpO1xyXG4gICAgICAgICAgICAvL2lmICh0eXBlb2Ygb2JqZWN0LmV4ZWN1dGVRdWVyeXJlc3VsdCAhPT0gXCJ1bmRlZmluZWRcIilcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgIGlmICh0aGlzLnBhcmFtQ29uZmlnLkRFQlVHX0ZMQUcpIGNvbnNvbGUubG9nKFwiaGVyZTFcIik7XHJcbiAgICAgICAgaWYgKG9iamVjdC5hY3Rpb24gIT0gXCJSRU1PVkVcIikge1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMucGFyYW1Db25maWcuREVCVUdfRkxBRykgY29uc29sZS5sb2cob2JqZWN0LmV4ZWN1dGVRdWVyeXJlc3VsdCk7XHJcbiAgICAgICAgICBpZiAodHlwZW9mIG9iamVjdC5leGVjdXRlUXVlcnlyZXN1bHQgIT09IFwidW5kZWZpbmVkXCIpIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMucGFyYW1Db25maWcuREVCVUdfRkxBRykgY29uc29sZS5sb2coXCJvYmplY3QuaXNOZXc6XCIgKyBvYmplY3QuaXNOZXcsIFwib2JqZWN0LmV4ZWN1dGVRdWVyeXJlc3VsdDpcIiwgb2JqZWN0LmV4ZWN1dGVRdWVyeXJlc3VsdFxyXG4gICAgICAgICAgICAgICwgXCJvYmplY3QuZXhlY3V0ZVF1ZXJ5cmVzdWx0LmRhdGE6XCIsIG9iamVjdC5leGVjdXRlUXVlcnlyZXN1bHQuZGF0YSlcclxuICAgICAgICAgICAgaWYgKHR5cGVvZiBvYmplY3QuZXhlY3V0ZVF1ZXJ5cmVzdWx0LmRhdGEgIT09IFwidW5kZWZpbmVkXCIpIHtcclxuICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICBpZiAob2JqZWN0LmlzTmV3ID09IHRydWUpIHtcclxuICAgICAgICAgICAgICAgICAgICBvYmplY3QuZXhlY3V0ZVF1ZXJ5cmVzdWx0LmRhdGEucHVzaChOZXdWYWwpO1xyXG4gICAgICAgICAgICAgICAgICAgIG9iamVjdC5leGVjdXRlUXVlcnlyZXN1bHQudG90YWwgPSBvYmplY3QuZXhlY3V0ZVF1ZXJ5cmVzdWx0LnRvdGFsICsgMTtcclxuICAgICAgICAgICAgICAgICAgICAvL29iamVjdC5DdXJyZW50UmVjKys7XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBvYmplY3QuZXhlY3V0ZVF1ZXJ5cmVzdWx0LmRhdGFbb2JqZWN0LkN1cnJlbnRSZWNdID0gTmV3VmFsO1xyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKHRoaXMucGFyYW1Db25maWcuREVCVUdfRkxBRykgY29uc29sZS5sb2coXCJvYmplY3QuZXhlY3V0ZVF1ZXJ5cmVzdWx0IHBvc3RcIik7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnBhcmFtQ29uZmlnLkRFQlVHX0ZMQUcpIGNvbnNvbGUubG9nKG9iamVjdC5leGVjdXRlUXVlcnlyZXN1bHQpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIGxldCBOZXdWYWxBcnI6YW55ID0gW107XHJcbiAgICAgICAgICAgICAgICAgIE5ld1ZhbEFyci5wdXNoKE5ld1ZhbCk7XHJcbiAgICAgICAgICAgIGxldCByZXN1bHQgPSB7XHJcbiAgICAgICAgICAgICAgZGF0YTogTmV3VmFsQXJyLFxyXG4gICAgICAgICAgICAgIHRvdGFsOiAxXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgb2JqZWN0LmV4ZWN1dGVRdWVyeXJlc3VsdCA9IHJlc3VsdDtcclxuICAgICAgICAgICAgICAgICAgICBvYmplY3QuQ3VycmVudFJlYyA9IDA7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgdGhpcy5zaG93Tm90aWZpY2F0aW9uKCdzdWNjZXNzJywgXCJEYXRhIHNhdmVkIHN1Y2Nlc3NmdWxseVwiKTtcclxuICAgICAgICAgIHZhciBkYXRhOmFueSA9IFtdO1xyXG4gICAgICAgICAgICAgICAgZGF0YS5wdXNoKE5ld1ZhbClcclxuICAgICAgICAgIGlmIChvYmplY3QuaXNOZXcgPT0gdHJ1ZSkge1xyXG4gICAgICAgICAgICAgICAgICBvYmplY3QuaXNOZXcgPSBmYWxzZTtcclxuICAgICAgICAgICAgaWYgKHR5cGVvZiBvYmplY3QuY2FsbEJhY2tQb3N0X0luc2VydCAhPT0gXCJ1bmRlZmluZWRcIikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgLy9vYmplY3QuY2FsbEJhY2tQb3N0X0luc2VydChvYmplY3QsIE5ld1ZhbCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNoZWNrTGFzdElkKG9iamVjdCwgTmV3VmFsLFBhZ2UpXHJcbiAgICAgICAgICAgICAgICAgICAgICBvYmplY3QuY2FsbEJhY2tQb3N0X0luc2VydC5hcHBseShvYmplY3QsIGRhdGEpO1xyXG4gICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIGlmICh0eXBlb2Ygb2JqZWN0LmNhbGxCYWNrUG9zdF9VcGRhdGUgIT09IFwidW5kZWZpbmVkXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICBvYmplY3QuY2FsbEJhY2tQb3N0X1VwZGF0ZS5hcHBseShvYmplY3QsIGRhdGEpO1xyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIC8vUkVNT1ZFXHJcbiAgICAgICAgICAgICAgICBvYmplY3QuZXhlY3V0ZVF1ZXJ5cmVzdWx0LmRhdGEuc3BsaWNlKG9iamVjdC5DdXJyZW50UmVjLCAxKTtcclxuICAgICAgICAgICAgICAgIG9iamVjdC5leGVjdXRlUXVlcnlyZXN1bHQudG90YWwtLTtcclxuICAgICAgICAgIGlmICh0aGlzLnBhcmFtQ29uZmlnLkRFQlVHX0ZMQUcpIGNvbnNvbGUubG9nKFwib2JqZWN0LkN1cnJlbnRSZWM6XCIgKyBvYmplY3QuQ3VycmVudFJlYylcclxuICAgICAgICAgIGlmIChvYmplY3QuQ3VycmVudFJlYyA+IDApIHtcclxuICAgICAgICAgICAgICAgICAgb2JqZWN0LkN1cnJlbnRSZWMtLTtcclxuICAgICAgICAgICAgb2JqZWN0LmZvcm0ucmVzZXQob2JqZWN0LmV4ZWN1dGVRdWVyeXJlc3VsdC5kYXRhW29iamVjdC5DdXJyZW50UmVjXSwgeyBlbWl0RXZlbnQ6IG9iamVjdC5lbWl0RXZlbnQgIT0gbnVsbCA/IG9iamVjdC5lbWl0RXZlbnQgOiB0cnVlIH0pO1xyXG4gICAgICAgICAgICAgICAgICBpZiAob2JqZWN0LmlzTmV3ID09IHRydWUpXHJcbiAgICAgICAgICAgICAgICAgICAgb2JqZWN0LmlzTmV3ID0gZmFsc2U7XHJcblxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIG9iamVjdC5mb3JtLnJlc2V0KG9iamVjdC5mb3JtSW5pdGlhbFZhbHVlcywgeyBlbWl0RXZlbnQ6IG9iamVjdC5lbWl0RXZlbnQgIT0gbnVsbCA/IG9iamVjdC5lbWl0RXZlbnQgOiB0cnVlIH0pO1xyXG4gICAgICAgICAgICAgICAgICBvYmplY3QuaXNOZXcgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICBpZiAodGhpcy5wYXJhbUNvbmZpZy5ERUJVR19GTEFHKSBjb25zb2xlLmxvZyhcIm9iamVjdC5pc05ldzpcIiArIG9iamVjdC5pc05ldylcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgIGxldCBOZXdWYWwxOmFueSA9IFtdO1xyXG4gICAgICAgICAgICAgICAgTmV3VmFsMS5wdXNoKE5ld1ZhbCk7XHJcbiAgICAgICAgICBpZiAodHlwZW9mIG9iamVjdC5jYWxsQmFja1JlbW92ZUF0dCAhPT0gXCJ1bmRlZmluZWRcIilcclxuICAgICAgICAgICAgb2JqZWN0LmNhbGxCYWNrUmVtb3ZlQXR0KG9iamVjdCwgTmV3VmFsMSk7XHJcbiAgICAgICAgICBpZiAodHlwZW9mIG9iamVjdC5jYWxsQmFja1Bvc3RfUmVtb3ZlICE9PSBcInVuZGVmaW5lZFwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBvYmplY3QuY2FsbEJhY2tQb3N0X1JlbW92ZS5hcHBseShvYmplY3QsIE5ld1ZhbDEpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKHRoaXMucGFyYW1Db25maWcuREVCVUdfRkxBRykgY29uc29sZS5sb2coXCJoZXJlMlwiKTtcclxuICAgICAgaWYgKG9iamVjdC5hY3Rpb24gIT0gXCJSRU1PVkVcIikge1xyXG4gICAgICAgIG9iamVjdC5zdGFyU2VydmljZXMuZml4TXVsdGlTZWxlY3RGaWVsZHNfTmV3VmFsKG9iamVjdCwgTmV3VmFsKVxyXG4gICAgICAgIG9iamVjdC5mb3JtLnJlc2V0KE5ld1ZhbCwgeyBlbWl0RXZlbnQ6IG9iamVjdC5lbWl0RXZlbnQgIT0gbnVsbCA/IG9iamVjdC5lbWl0RXZlbnQgOiB0cnVlIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgIGlmIChvYmplY3QuZGlhYmxlRW1pdFNhdmUgPT0gdHJ1ZSkgeyB9XHJcbiAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAgICBvYmplY3Quc2F2ZUNvbXBsZXRlZE91dHB1dC5lbWl0KE5ld1ZhbCk7XHJcbiAgICAgIGlmIChvYmplY3QuaXNDaGlsZCA9PSB0cnVlKSB7XHJcbiAgICAgICAgICAgICAgbGV0IHBhcmFtQ29uZmlnID0ge1xyXG4gICAgICAgICAgICAgICAgXCJOYW1lXCI6IFwiY2hpbGRSZWNvcmRzXCIsXHJcbiAgICAgICAgICAgICAgICBcIlZhbFwiOiBvYmplY3QuZXhlY3V0ZVF1ZXJ5cmVzdWx0LnRvdGFsXHJcbiAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICBzZXRQYXJhbUNvbmZpZyhwYXJhbUNvbmZpZyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgb2JqZWN0LmFjdGlvbiA9IFwiXCI7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0UHJpbWFyS2V5TmFtZUFycihvYmplY3QsIHRydWUpO1xyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIGVyciA9PiB7XHJcbiAgICAgICAgICAgIC8vYWxlcnQgKCdlcnJvcjonICsgZXJyLm1lc3NhZ2UpO1xyXG4gICAgICAgICAgICB0aGlzLnNob3dFcnJvck1zZyhvYmplY3QsIGVycik7XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgfVxyXG4gIHB1YmxpYyBjaGVja0xhc3RJZCAob2JqZWN0LCBOZXdWYWwsUGFnZSl7XHJcbiAgICBjb25zb2xlLmxvZyhcImNoZWNrTGFzdElkOk5ld1ZhbDpcIixOZXdWYWwsIFwiUGFnZTpcIixQYWdlLCBcIlBLX0FVVE86XCIsIG9iamVjdC5QS19BVVRPIClcclxuICAgIGlmICh0eXBlb2Ygb2JqZWN0LlBLX0FVVE8gIT0gXCJ1bmRlZmluZWRcIiAmJiBvYmplY3QuUEtfQVVUTyAhPSBcIlwiKXtcclxuICAgICAgbGV0IGRhdGEgPSBQYWdlLmRhdGE7XHJcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpPCBkYXRhLmxlbmd0aDsgaSsrKXtcclxuICAgICAgICBsZXQgcmVjID0gZGF0YVtpXTtcclxuICAgICAgICBsZXQgcXVlcnkgPSByZWMucXVlcnk7XHJcbiAgICAgICAgaWYgKHF1ZXJ5LnN0YXJ0c1dpdGgoXCJHRVRfTEFTVF9JRFwiKSl7XHJcbiAgICAgICAgICBsZXQgZGF0YUFyciA9IHJlYy5kYXRhO1xyXG4gICAgICAgICAgbGV0IGRhdGFSZWMgPSBkYXRhQXJyWzBdO1xyXG4gICAgICAgICAgY29uc29sZS5sb2coXCJjaGVja0xhc3RJZDpkYXRhUmVjOlwiLGRhdGFSZWMpO1xyXG4gICAgICAgICAgbGV0IGtleXMgPSBPYmplY3Qua2V5cyhkYXRhUmVjKTtcclxuICAgICAgICAgIGxldCB2YWwgPSBkYXRhUmVjW2tleXNbMF1dO1xyXG4gICAgICAgICAgY29uc29sZS5sb2coXCJjaGVja0xhc3RJZDp2YWw6XCIsdmFsKTtcclxuICAgICAgICAgIE5ld1ZhbFtvYmplY3QuUEtfQVVUT10gPSB2YWw7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4gIHB1YmxpYyBzYXZlQ2hhbmdlc19mb3JtKGZvcm06IGFueSwgb2JqZWN0OmFueSk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMucGFyYW1Db25maWcuREVCVUdfRkxBRykgY29uc29sZS5sb2coXCJ0aGlzLmZvcm06aW52YWxpZFwiLG9iamVjdC5mb3JtLmludmFsaWQpO1xyXG4gICAgaWYgKHRoaXMucGFyYW1Db25maWcuREVCVUdfRkxBRykgY29uc29sZS5sb2coJ3NhdmVDaGFuZ2VzX2Zvcm0gOiBvYmplY3QuaXNOZXcgOicgKyBvYmplY3QuaXNOZXcpO1xyXG4gICAgaWYgKHRoaXMucGFyYW1Db25maWcuREVCVUdfRkxBRykgY29uc29sZS5sb2cob2JqZWN0LmNvbXBvbmVudENvbmZpZy5yb3V0aW5lQXV0aCk7XHJcbiAgICBpZiAob2JqZWN0LmNvbXBvbmVudENvbmZpZy5yb3V0aW5lQXV0aCAhPSBudWxsKSB7XHJcbiAgICAgIGlmICh0aGlzLnBhcmFtQ29uZmlnLkRFQlVHX0ZMQUcpIGNvbnNvbGUubG9nKFwiYXV0aExldmVsOlwiICsgb2JqZWN0LmNvbXBvbmVudENvbmZpZy5yb3V0aW5lQXV0aC5hdXRoTGV2ZWwpO1xyXG4gICAgICBpZiAob2JqZWN0LmNvbXBvbmVudENvbmZpZy5yb3V0aW5lQXV0aC5hdXRoTGV2ZWwgIT0gMikge1xyXG4gICAgICAgICAgICBsZXQgZGlhbG9nU3RydWMgPSB7XHJcbiAgICAgICAgICAgICAgbXNnOiB0aGlzLnJlYWRPbmx5TXNnLFxyXG4gICAgICAgICAgdGl0bGU6IFwiV2FybmluZ1wiLFxyXG4gICAgICAgICAgICAgIGluZm86IG51bGwsXHJcbiAgICAgICAgICBvYmplY3Q6IG9iamVjdCxcclxuICAgICAgICAgIGFjdGlvbjogdGhpcy5Pa0FjdGlvbnMsXHJcbiAgICAgICAgICBjYWxsYmFjazogbnVsbFxyXG4gICAgICAgIH07XHJcbiAgICAgICAgICAgICAgdGhpcy5zaG93Q29uZmlybWF0aW9uKGRpYWxvZ1N0cnVjKTtcclxuICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgIGlmICh0aGlzLnBhcmFtQ29uZmlnLkRFQlVHX0ZMQUcpIGNvbnNvbGUubG9nKCdzYXZlQ2hhbmdlc19mb3JtIDogb2JqZWN0LmZvcm0uZGlydHk6JyAsIG9iamVjdC5mb3JtLmRpcnR5ICwgXCIgb2JqZWN0LmlzQ2hpbGQ6XCIsIG9iamVjdC5pc0NoaWxkLCBcIiBvYmplY3QuZm9ybS5pbnZhbGlkOlwiLCBvYmplY3QuZm9ybS5pbnZhbGlkLCBcIiBvYmplY3QuZm9ybTpcIiwgb2JqZWN0LmZvcm0pO1xyXG4gICAgaWYgKCghb2JqZWN0LmZvcm0uZGlydHkpICYmIG9iamVjdC5pc0NoaWxkKVxyXG4gICAgICAgIHJldHVybjtcclxuICAgIGlmIChvYmplY3QuZm9ybS5pbnZhbGlkKSB7XHJcbiAgICAgIG9iamVjdC5zdWJtaXR0ZWQgPSB0cnVlO1xyXG4gICAgICBpZiAodGhpcy5wYXJhbUNvbmZpZy5ERUJVR19GTEFHKSBjb25zb2xlLmxvZyhcIm9iamVjdC5mb3JtOlwiLG9iamVjdC5mb3JtKTtcclxuICAgICAgLy90aGlzLnNob3dPa01zZyhvYmplY3QsIHRoaXMuZmllbGRzUmVxdWlyZWRNc2csIFwiRXJyb3JcIik7IC8vIFRoaXMgd2FzIGNvbW1lbnRlZCBmb3IgRm9ybSBEcmFnLiBDYXNlIGNoYW5nZSBwYWdlIGFuZCBzZWxlY3QgYSBmaWVsZCBcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH1cclxuICAgIGxldCBOZXdWYWw6YW55PXt9O1xyXG4gICAgICAgIC8vb2JqZWN0LkJvZHkgPSBbXTsgICAvLyBvbmx5IG9uZSB0cmFuc2FjdGlvbiBhbGxvd2VkIGluICBmb3JtLiBNb3ZlZCB0byBmb3JtXHJcbiAgICAgICAgLy9OZXdWYWwgPSAgZm9ybS52YWx1ZTtcclxuICAgICAgICAvL05ld1ZhbCA9IE9iamVjdC5hc3NpZ24oe30sIGZvcm0udmFsdWUsIHt9KVxyXG4gICAgICAgIE5ld1ZhbCA9IHsuLi5mb3JtLnZhbHVlfTtcclxuICAgIGlmICh0aGlzLnBhcmFtQ29uZmlnLkRFQlVHX0ZMQUcpIGNvbnNvbGUubG9nKFwiLS0tLS0gTmV3VmFsOlwiKVxyXG4gICAgICAgIGlmICh0aGlzLnBhcmFtQ29uZmlnLkRFQlVHX0ZMQUcpIGNvbnNvbGUubG9nKE5ld1ZhbCk7XHJcblxyXG4gICAgICAgIGlmIChvYmplY3QuaXNOZXcgPT0gdHJ1ZSlcclxuICAgICAgICAgIE5ld1ZhbFtcIl9RVUVSWVwiXSA9IG9iamVjdC5pbnNlcnRDTUQ7XHJcbiAgICAgICAgZWxzZVxyXG4gICAgICAgICAgTmV3VmFsW1wiX1FVRVJZXCJdID0gb2JqZWN0LnVwZGF0ZUNNRDtcclxuICAgICAgICAvL29iamVjdC5pc05ldyA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuZXhlY3N0YXJTZXJ2aWNlc19mb3JtKE5ld1ZhbCwgb2JqZWN0KTtcclxuICAgIH1cclxuICBwdWJsaWMgZW50ZXJRdWVyeUFjdF9mb3JtKGZvcm06IGFueSwgb2JqZWN0OmFueSk6IHZvaWQge1xyXG4gICAgICAgIG9iamVjdC5DdXJyZW50UmVjID0gMDtcclxuICAgIG9iamVjdC5leGVjdXRlUXVlcnlyZXN1bHQgPSBbXTtcclxuICAgIG9iamVjdC5leGVjdXRlUXVlcnlyZXN1bHQucmVzdWx0ID0gMDtcclxuICAgICAgICBcclxuICAgICAgICBvYmplY3QuaXNTZWFyY2ggPSB0cnVlO1xyXG4gICAgICAgIG9iamVjdC5pc05ldyA9IGZhbHNlO1xyXG4gICAgaWYgKG9iamVjdC5wYXJhbUNvbmZpZy5ERUJVR19GTEFHKSBjb25zb2xlLmxvZygnZW50ZXJRdWVyeSA6IG9iamVjdC5pc1NlYXJjaDonICsgb2JqZWN0LmlzU2VhcmNoKTtcclxuICAgICAgICBvYmplY3QuY2xlYXJDb21wbGV0ZWRPdXRwdXQuZW1pdChvYmplY3QuZm9ybUluaXRpYWxWYWx1ZXMpO1xyXG4gICAgICAgIFxyXG4gICAgLy8gb2JqZWN0LmltZ19nYWxsZXJ5ID0gW107XHJcbiAgICAvLyBvYmplY3QuaW1nX2FyciA9IFtdO1xyXG4gICAgb2JqZWN0LmZvcm0ucmVzZXQob2JqZWN0LmZvcm1Jbml0aWFsVmFsdWVzLCB7IGVtaXRFdmVudDogb2JqZWN0LmVtaXRFdmVudCAhPSBudWxsID8gb2JqZWN0LmVtaXRFdmVudCA6IHRydWUgfSk7XHJcbiAgICAgICAgb2JqZWN0LnN0YXJTZXJ2aWNlcy5zZXRQcmltYXJLZXlOYW1lQXJyKG9iamVjdCwgZmFsc2UpO1xyXG4gICAgICAgIHRoaXMuaGVscE1zZyA9ICBvYmplY3Quc3RhclNlcnZpY2VzLmdldE5MUyhbXSxcIkhFTFBfRU5URVJfUVVFUllcIix0aGlzLmVudGVyUXVlcnlNc2cpO1xyXG5cclxuICAgICAgfVxyXG5cclxuICBwdWJsaWMgc2V0UHJpbWFyS2V5TmFtZUFycihvYmplY3Q6YW55LCB2YWx1ZTphbnkpIHtcclxuICAgICAgICBpZiAodHlwZW9mIG9iamVjdC5wcmltYXJLZXlSZWFkT25seUFyciAhPT0gXCJ1bmRlZmluZWRcIikge1xyXG4gICAgICAgICAgbGV0IGtleXMgPSBPYmplY3Qua2V5cyhvYmplY3QucHJpbWFyS2V5UmVhZE9ubHlBcnIpO1xyXG4gICAgICBmb3IgKGxldCBrID0gMDsgayA8IGtleXMubGVuZ3RoOyBrKyspIHtcclxuICAgICAgICAgICAgICBpZiAob2JqZWN0LnBhcmFtQ29uZmlnLkRFQlVHX0ZMQUcpIGNvbnNvbGUubG9nKFwiW2tleXNba106XCIsIGtleXNba10sIFwiIHZhbHVlOlwiLCB2YWx1ZSk7XHJcbiAgICAgICAgICAgICAgb2JqZWN0LnByaW1hcktleVJlYWRPbmx5QXJyW2tleXNba11dID0gdmFsdWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcblxyXG4gIHB1YmxpYyBlbnRlclF1ZXJ5X2Zvcm0oZm9ybTogYW55LCBvYmplY3Q6YW55KTogdm9pZCB7XHJcbiAgICAgICAgaWYgKHRoaXMucGFyYW1Db25maWcuREVCVUdfRkxBRykgY29uc29sZS5sb2coXCJ0ZXN0OmRpcnR5OlwiLCBvYmplY3QuZm9ybS5kaXJ0eSk7XHJcbiAgICBpZiAob2JqZWN0LmZvcm0uZGlydHkgPT0gdHJ1ZSkge1xyXG4gICAgICAgICAgbGV0IGRpYWxvZ1N0cnVjID0ge1xyXG4gICAgICAgICAgICBtc2c6IHRoaXMuc2F2ZUNoYW5nZXNNc2csXHJcbiAgICAgICAgdGl0bGU6IHRoaXMucGxlYXNlQ29uZmlybU1zZyxcclxuICAgICAgICAgICAgaW5mbzogZm9ybSxcclxuICAgICAgICBvYmplY3Q6IG9iamVjdCxcclxuICAgICAgICBhY3Rpb246IHRoaXMuWWVzTm9BY3Rpb25zLFxyXG4gICAgICAgIGNhbGxiYWNrOiB0aGlzLmVudGVyUXVlcnlBY3RfZm9ybVxyXG4gICAgICB9O1xyXG4gICAgICAgICAgICB0aGlzLnNob3dDb25maXJtYXRpb24oZGlhbG9nU3RydWMpO1xyXG4gICAgICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICB0aGlzLmVudGVyUXVlcnlBY3RfZm9ybShmb3JtLCBvYmplY3QpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuXHJcbiAgcHVibGljIG9uQ2FuY2VsX2Zvcm0oZTphbnksIG9iamVjdDphbnkpOiB2b2lkIHtcclxuICAgIC8vb2JqZWN0LmltZ19nYWxsZXJ5ID0gW107XHJcbiAgIC8vIG9iamVjdC5pbWdfYXJyID0gW107XHJcbiAgICBvYmplY3QuZm9ybS5yZXNldChvYmplY3QuZm9ybUluaXRpYWxWYWx1ZXMsIHsgZW1pdEV2ZW50OiBvYmplY3QuZW1pdEV2ZW50ICE9IG51bGwgPyBvYmplY3QuZW1pdEV2ZW50IDogdHJ1ZSB9KTtcclxuICAgICAgICBvYmplY3QuaXNTZWFyY2ggPSBmYWxzZTtcclxuICAgICAgICBvYmplY3QuaXNOZXcgPSB0cnVlO1xyXG4gICAgICAgIG9iamVjdC5jbGVhckNvbXBsZXRlZE91dHB1dC5lbWl0KG9iamVjdC5mb3JtSW5pdGlhbFZhbHVlcyk7XHJcbiAgICBvYmplY3QuZXhlY3V0ZVF1ZXJ5cmVzdWx0ID0gW107XHJcbiAgICBvYmplY3QuZXhlY3V0ZVF1ZXJ5cmVzdWx0LnJlc3VsdCA9IDA7XHJcbiAgICAgICAgb2JqZWN0Lm15RmlsZXM9W107XHJcbiAgICAgICAgb2JqZWN0LkN1cnJlbnRSZWMgPSAwO1xyXG4gICAgICAgIG9iamVjdC5GT1JNX1RSSUdHRVJfRkFJTFVSRSA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuaGVscE1zZyA9IFwiXCI7XHJcbiAgICAgICAgXHJcbiAgICB9XHJcbiAgcHVibGljIHNob3dPa01zZyhvYmplY3Q6YW55LCBtc2c6YW55LCBzZXZlcml0eTphbnkpIHtcclxuICAgICAgbGV0IGRpYWxvZ1N0cnVjID0ge1xyXG4gICAgICAgIG1zZzogbXNnLFxyXG4gICAgICB0aXRsZTogc2V2ZXJpdHksXHJcbiAgICAgICAgaW5mbzogbnVsbCxcclxuICAgICAgb2JqZWN0OiBvYmplY3QsXHJcbiAgICAgIGFjdGlvbjogdGhpcy5Pa0FjdGlvbnMsXHJcbiAgICAgIGNhbGxiYWNrOiBudWxsXHJcbiAgICB9O1xyXG4gICAgICAgIHRoaXMuc2hvd0NvbmZpcm1hdGlvbihkaWFsb2dTdHJ1Yyk7XHJcbiAgICB9XHJcbiAgcHVibGljIG9uUmVtb3ZlX2Zvcm0oZm9ybTphbnksIG9iamVjdDphbnkpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLnBhcmFtQ29uZmlnLkRFQlVHX0ZMQUcpIGNvbnNvbGUubG9nKFwib2JqZWN0LmlzTmV3OlwiLCBvYmplY3QuaXNOZXcpXHJcbiAgICBpZiAob2JqZWN0LmlzTmV3ID09IHRydWUpIHtcclxuICAgICAgICAgIHRoaXMub25DYW5jZWxfZm9ybShudWxsLCBvYmplY3QpXHJcbiAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAodGhpcy5wYXJhbUNvbmZpZy5ERUJVR19GTEFHKSBjb25zb2xlLmxvZyhcIm9iamVjdC5leGVjdXRlUXVlcnlyZXN1bHQ6XCIpO1xyXG4gICAgICAgIGlmICh0aGlzLnBhcmFtQ29uZmlnLkRFQlVHX0ZMQUcpIGNvbnNvbGUubG9nKG9iamVjdC5leGVjdXRlUXVlcnlyZXN1bHQpO1xyXG4gICAgaWYgKCh0eXBlb2Ygb2JqZWN0LmV4ZWN1dGVRdWVyeXJlc3VsdCAhPT0gXCJ1bmRlZmluZWRcIikgJiYgKG9iamVjdC5leGVjdXRlUXVlcnlyZXN1bHQudG90YWwgPT0gMCkpIHtcclxuICAgICAgdGhpcy5zaG93T2tNc2cob2JqZWN0LCB0aGlzLm5vdGhpbmdUb0RlbGV0ZWxNc2csIFwiV2FybmluZ1wiKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgIGlmICh0aGlzLnBhcmFtQ29uZmlnLkRFQlVHX0ZMQUcpIGNvbnNvbGUubG9nKCdvblJlbW92ZSA6IGlzQ2hpbGQgJyArIG9iamVjdC5pc0NoaWxkICsgXCIgb2JqZWN0LmlzTWFzdGVyOlwiICsgb2JqZWN0LmlzTWFzdGVyKTtcclxuICAgIGxldCBOZXdWYWwgPSBmb3JtLmdldFJhd1ZhbHVlKCk7XHJcbiAgICAgICAgaWYgKHRoaXMucGFyYW1Db25maWcuREVCVUdfRkxBRykgY29uc29sZS5sb2coTmV3VmFsKTtcclxuICAgICAgICBpZiAodGhpcy5wYXJhbUNvbmZpZy5ERUJVR19GTEFHKSBjb25zb2xlLmxvZyhcIm9iamVjdC5leGVjdXRlUXVlcnlyZXN1bHQ6XCIgKyBvYmplY3QuZXhlY3V0ZVF1ZXJ5cmVzdWx0KVxyXG4gICAgaWYgKG9iamVjdC5pc0NoaWxkID09IGZhbHNlKSB7XHJcbiAgICAgICAgICB2YXIgcGFyYW1Db25maWcgPSBnZXRQYXJhbUNvbmZpZygpO1xyXG4gICAgICAgICAgaWYgKHRoaXMucGFyYW1Db25maWcuREVCVUdfRkxBRykgY29uc29sZS5sb2cocGFyYW1Db25maWcpO1xyXG4gICAgICAgICAgaWYgKHRoaXMucGFyYW1Db25maWcuREVCVUdfRkxBRykgY29uc29sZS5sb2coXCJwYXJhbUNvbmZpZy5jaGlsZFJlY29yZHM6XCIgKyBwYXJhbUNvbmZpZy5jaGlsZFJlY29yZHMpXHJcbiAgICAgIGlmICh0eXBlb2YgcGFyYW1Db25maWcuY2hpbGRSZWNvcmRzID09PSBcInVuZGVmaW5lZFwiKSB7XHJcbiAgICAgICAgICAgIHBhcmFtQ29uZmlnLmNoaWxkUmVjb3JkcyA9IDA7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICBpZiAoKHBhcmFtQ29uZmlnLmNoaWxkUmVjb3JkcyAhPSAwKSAmJiAob2JqZWN0LmlzTWFzdGVyID09IHRydWUpKSB7XHJcbiAgICAgICAgICAgIGxldCBkaWFsb2dTdHJ1YyA9IHtcclxuICAgICAgICAgICAgICBtc2c6IHRoaXMuZGVsZXRlRGV0YWlsTXNnLFxyXG4gICAgICAgICAgdGl0bGU6IFwiV2FybmluZ1wiLFxyXG4gICAgICAgICAgICAgIGluZm86IG51bGwsXHJcbiAgICAgICAgICBvYmplY3Q6IG9iamVjdCxcclxuICAgICAgICAgIGFjdGlvbjogdGhpcy5Pa0FjdGlvbnMsXHJcbiAgICAgICAgICBjYWxsYmFjazogbnVsbFxyXG4gICAgICAgIH07XHJcbiAgICAgICAgICAgICAgdGhpcy5zaG93Q29uZmlybWF0aW9uKGRpYWxvZ1N0cnVjKTtcclxuICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMucGFyYW1Db25maWcuREVCVUdfRkxBRykgY29uc29sZS5sb2cocGFyYW1Db25maWcpO1xyXG5cclxuICAgICAgICBsZXQgZGlhbG9nU3RydWMgPSB7XHJcbiAgICAgICAgICBtc2c6IHRoaXMuZGVsZXRlQ29uZmlybU1zZyxcclxuICAgICAgdGl0bGU6IHRoaXMucGxlYXNlQ29uZmlybU1zZyxcclxuICAgICAgICAgIGluZm86IGZvcm0sXHJcbiAgICAgIG9iamVjdDogb2JqZWN0LFxyXG4gICAgICBhY3Rpb246IHRoaXMuWWVzTm9BY3Rpb25zLFxyXG4gICAgICBjYWxsYmFjazogdGhpcy5SZW1vdmVfZm9ybUFjdFxyXG4gICAgfTtcclxuICAgICAgICAgIHRoaXMuc2hvd0NvbmZpcm1hdGlvbihkaWFsb2dTdHJ1Yyk7XHJcblxyXG5cclxuICAgIH1cclxuICBwdWJsaWMgUmVtb3ZlX2Zvcm1BY3QoZm9ybTphbnksIG9iamVjdDphbnkpIHtcclxuICAgICAgaWYgKG9iamVjdC5wYXJhbUNvbmZpZy5ERUJVR19GTEFHKSBjb25zb2xlLmxvZyhcImluIFJlbW92ZV9mb3JtQWN0XCIpO1xyXG4gICAgbGV0IE5ld1ZhbDphbnkgPXt9O1xyXG4gICAgTmV3VmFsID0gZm9ybS5nZXRSYXdWYWx1ZSgpO1xyXG4gICAgICBpZiAob2JqZWN0LnBhcmFtQ29uZmlnLkRFQlVHX0ZMQUcpIGNvbnNvbGUubG9nKE5ld1ZhbCk7XHJcbiAgICAgIC8vb2JqZWN0LmZvcm0ucmVzZXQob2JqZWN0LmZvcm1Jbml0aWFsVmFsdWVzKTtcclxuICAgICAgb2JqZWN0LmFjdGlvbiA9IFwiUkVNT1ZFXCI7XHJcblxyXG4gICAgICBOZXdWYWxbXCJfUVVFUllcIl0gPSBvYmplY3QuZGVsZXRlQ01EO1xyXG4gICAgICBvYmplY3Quc3RhclNlcnZpY2VzLmV4ZWNzdGFyU2VydmljZXNfZm9ybShOZXdWYWwsIG9iamVjdCk7XHJcbiAgICB9XHJcblxyXG5cclxuICBwdWJsaWMgb25OZXdfZm9ybShlOmFueSwgb2JqZWN0OmFueSk6IHZvaWQge1xyXG4gICAgaWYgKG9iamVjdC5wYXJhbUNvbmZpZy5ERUJVR19GTEFHKSBjb25zb2xlLmxvZyhcIm9uTmV3OiBvYmplY3QubWFzdGVyS2V5OlwiICsgb2JqZWN0Lm1hc3RlcktleSk7XHJcbiAgICAgICAgb2JqZWN0Lm15RmlsZXM9W107XHJcbiAgICAvLyBvYmplY3QuaW1nX2dhbGxlcnkgPSBbXTtcclxuICAgIC8vIG9iamVjdC5pbWdfYXJyID0gW107XHJcbiAgICBvYmplY3QuZm9ybS5yZXNldChvYmplY3QuZm9ybUluaXRpYWxWYWx1ZXMsIHsgZW1pdEV2ZW50OiBvYmplY3QuZW1pdEV2ZW50ICE9IG51bGwgPyBvYmplY3QuZW1pdEV2ZW50IDogdHJ1ZSB9KTtcclxuICAgICAgICBvYmplY3QuY2xlYXJDb21wbGV0ZWRPdXRwdXQuZW1pdChvYmplY3QuZm9ybUluaXRpYWxWYWx1ZXMpO1xyXG4gICAgICAgIG9iamVjdC5pc1NlYXJjaCA9IGZhbHNlO1xyXG4gICAgICAgIG9iamVjdC5pc05ldyA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5zZXRQcmltYXJLZXlOYW1lQXJyKG9iamVjdCwgZmFsc2UpO1xyXG4gICAgfVxyXG4gICAgLyoqKioqKioqKioqKioqKioqKiogR3JpZCBmdW5jdGlvbnMgICoqKioqKioqL1xyXG4gIHB1YmxpYyBhZGRIYW5kbGVyX2dyaWQob2JqZWN0OmFueSk6IHZvaWQge1xyXG4gICAgICBpZiAodHlwZW9mIG9iamVjdC5tYXN0ZXJLZXlOYW1lQXJyICE9IFwidW5kZWZpbmVkXCIpIHtcclxuICAgICAgICBpZiAob2JqZWN0LmlzQ2hpbGQgPT0gdHJ1ZSkge1xyXG4gICAgICAgICAgaWYgKG9iamVjdC5tYXN0ZXJLZXlBcnJbMF0gPT0gXCJcIikge1xyXG4gICAgICAgICAgICB0aGlzLnNob3dPa01zZyh0aGlzLCB0aGlzLnNhdmVNYXN0ZXJNc2csIFwiRXJyb3JcIik7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICBpZiAob2JqZWN0LmlzQ2hpbGQgPT0gdHJ1ZSkge1xyXG4gICAgICAgICAgICBpZiAob2JqZWN0Lm1hc3RlcktleSA9PSBcIlwiKSB7XHJcbiAgICAgICAgICAgICAgdGhpcy5zaG93T2tNc2codGhpcywgdGhpcy5zYXZlTWFzdGVyTXNnLCBcIkVycm9yXCIpO1xyXG4gICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gIFxyXG4gICAgICBpZiAob2JqZWN0LnBhcmFtQ29uZmlnLkRFQlVHX0ZMQUcpIGNvbnNvbGUubG9nKFwidGVzdDQxOm9iamVjdC5ncmlkSW5pdGlhbFZhbHVlczpcIiwgb2JqZWN0LmdyaWRJbml0aWFsVmFsdWVzKTtcclxuICAgICAgb2JqZWN0LnNhdmVDdXJyZW50KCk7XHJcbiAgICAgIHRoaXMuc2V0UHJpbWFyS2V5TmFtZUFycihvYmplY3QsIGZhbHNlKTtcclxuICAgICAgLyogb2JqZWN0LmdyaWRJbml0aWFsVmFsdWVzLk1PRFVMRSA9IG9iamVjdC5tYXN0ZXJLZXk7Ki9cclxuICAgICAgaWYgKCAodHlwZW9mIG9iamVjdC5tYXN0ZXJLZXlOYW1lQXJyICE9IFwidW5kZWZpbmVkXCIpICYmIChvYmplY3QubWFzdGVyS2V5TmFtZUFyci5sZW5ndGggIT0gMCkgKVxyXG4gICAgICB7XHJcbiAgICAgICAgdGhpcy5zZXRQcmltYXJLZXlOYW1lQXJyKG9iamVjdCwgZmFsc2UpO1xyXG4gICAgICAgIGlmKG9iamVjdC5pc0NoaWxkID09IHRydWUpe1xyXG4gICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGk8IG9iamVjdC5tYXN0ZXJLZXlOYW1lQXJyLmxlbmd0aDsgaSsrKXtcclxuICAgICAgICAgICAgbGV0IHJlYWRPbmx5ID0gXCJpc1wiK29iamVjdC5tYXN0ZXJLZXlOYW1lQXJyW2ldICsgXCJyZWFkT25seVwiO1xyXG4gICAgICAgICAgICBpZiAob2JqZWN0LnByaW1hcktleVJlYWRPbmx5QXJyKXtcclxuICAgICAgICAgICAgICBvYmplY3QucHJpbWFyS2V5UmVhZE9ubHlBcnJbcmVhZE9ubHldID0gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBsZXQgZXhpc3RzID0gb2JqZWN0LmdyaWRJbml0aWFsVmFsdWVzW29iamVjdC5tYXN0ZXJLZXlOYW1lQXJyW2ldXVxyXG4gICAgICAgICAgICAgIGlmICh0eXBlb2YgZXhpc3RzICE9PSBcInVuZGVmaW5lZFwiKXtcclxuICAgICAgICAgICAgICBvYmplY3QuZ3JpZEluaXRpYWxWYWx1ZXNbb2JqZWN0Lm1hc3RlcktleU5hbWVBcnJbaV1dID0gb2JqZWN0Lm1hc3RlcktleUFycltpXTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChvYmplY3QucGFyYW1Db25maWcuREVCVUdfRkxBRykgY29uc29sZS5sb2coXCJ0ZXN0NDI6b2JqZWN0LmdyaWRJbml0aWFsVmFsdWVzOjE6XCIsIG9iamVjdC5ncmlkSW5pdGlhbFZhbHVlcyk7XHJcbiAgICAgIH1cclxuICAgICAgZWxzZVxyXG4gICAgICB7XHJcbiAgICAgICAgaWYgKG9iamVjdC5wYXJhbUNvbmZpZy5ERUJVR19GTEFHKSBjb25zb2xlLmxvZyhcInRlc3Q0Om9iamVjdC5tYXN0ZXJLZXlOYW1lOlwiLCBvYmplY3QubWFzdGVyS2V5TmFtZSwgb2JqZWN0Lm1hc3RlcktleSk7XHJcbiAgICAgICAgaWYgKG9iamVjdC5tYXN0ZXJLZXlOYW1lICE9IFwiXCIgJiYgIG9iamVjdC5tYXN0ZXJLZXkgIT0gXCJcIil7XHJcbiAgICAgICAgICBvYmplY3QuZ3JpZEluaXRpYWxWYWx1ZXNbb2JqZWN0Lm1hc3RlcktleU5hbWVdID0gb2JqZWN0Lm1hc3RlcktleTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKG9iamVjdC5wYXJhbUNvbmZpZy5ERUJVR19GTEFHKSBjb25zb2xlLmxvZyhcInRlc3Q0MjpvYmplY3QuZ3JpZEluaXRpYWxWYWx1ZXM6MjpcIiwgb2JqZWN0LmdyaWRJbml0aWFsVmFsdWVzKTtcclxuICAgICAgfVxyXG4gICAgICBpZiAob2JqZWN0LnBhcmFtQ29uZmlnLkRFQlVHX0ZMQUcpIGNvbnNvbGUubG9nKFwidGVzdDQyOm9iamVjdC5ncmlkSW5pdGlhbFZhbHVlczpcIiwgb2JqZWN0LmdyaWRJbml0aWFsVmFsdWVzKTtcclxuICAgICAgb2JqZWN0LmNsb3NlRWRpdG9yKCk7XHJcbiAgICAgIG9iamVjdC5mb3JtR3JvdXAgPSBvYmplY3QuY3JlYXRlRm9ybUdyb3VwR3JpZChcclxuICAgICAgICBvYmplY3QuZ3JpZEluaXRpYWxWYWx1ZXNcclxuICAgICAgKTtcclxuICAgICAgb2JqZWN0LmZvcm1Hcm91cC5zZXRFcnJvcnMoe1xyXG4gICAgICAgIG5vdFVuaXF1ZTogdHJ1ZVxyXG4gICAgICB9KTtcclxuICAgICAgaWYgKG9iamVjdC5wYXJhbUNvbmZpZy5ERUJVR19GTEFHKSBjb25zb2xlLmxvZyhcIm9iamVjdC5mb3JtR3JvdXA6XCIsIG9iamVjdC5mb3JtR3JvdXApXHJcbiAgICAgIG9iamVjdC5pc05ldyA9IHRydWU7XHJcbiAgICAgIG9iamVjdC5ncmlkLmFkZFJvdyhvYmplY3QuZm9ybUdyb3VwKTtcclxuICAgICAgLy90aGlzLnNldFByaW1hcktleU5hbWVBcnIob2JqZWN0LCBmYWxzZSk7XHJcbiAgICAgIH1cclxuICBcclxuICAgIHB1YmxpYyByZW1vdmVIYW5kbGVyX2dyaWQoc2VuZGVyOmFueSwgb2JqZWN0OmFueSkge1xyXG4gICAgICAvL3NlbmRlci5jYW5jZWxDZWxsKCk7XHJcbiAgICAgIGxldCBwYXJhbUNvbmZpZyA9IGdldFBhcmFtQ29uZmlnKCk7XHJcbiAgICBpZiAob2JqZWN0LnBhcmFtQ29uZmlnLkRFQlVHX0ZMQUcpIGNvbnNvbGUubG9nKFwicmVtb3ZlSGFuZGxlcl9ncmlkIHBhcmFtQ29uZmlnOm9iamVjdC5pc01hc3RlciBcIiArIG9iamVjdC5pc01hc3Rlcik7XHJcbiAgICAgIGlmIChvYmplY3QucGFyYW1Db25maWcuREVCVUdfRkxBRykgY29uc29sZS5sb2cocGFyYW1Db25maWcpO1xyXG4gICAgaWYgKChwYXJhbUNvbmZpZy5jaGlsZFJlY29yZHMgIT0gMCkgJiYgKG9iamVjdC5pc01hc3RlciA9PSB0cnVlKSkge1xyXG4gICAgICAgIGxldCBkaWFsb2dTdHJ1YyA9IHtcclxuICAgICAgICAgIG1zZzogdGhpcy5kZWxldGVEZXRhaWxNc2csXHJcbiAgICAgICAgdGl0bGU6IFwiV2FybmluZ1wiLFxyXG4gICAgICAgICAgaW5mbzogbnVsbCxcclxuICAgICAgICBvYmplY3Q6IG9iamVjdCxcclxuICAgICAgICBhY3Rpb246IHRoaXMuT2tBY3Rpb25zLFxyXG4gICAgICAgIGNhbGxiYWNrOiBudWxsXHJcbiAgICAgIH07XHJcbiAgICAgICAgICB0aGlzLnNob3dDb25maXJtYXRpb24oZGlhbG9nU3RydWMpO1xyXG4gICAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9XHJcbiAgICBpZiAob2JqZWN0LnBhcmFtQ29uZmlnLkRFQlVHX0ZMQUcpIGNvbnNvbGUubG9nKFwib2JqZWN0LmVkaXRlZFJvd0luZGV4IDpcIiwgb2JqZWN0LmVkaXRlZFJvd0luZGV4LCBvYmplY3QuZ3JpZC5kYXRhLmRhdGEpXHJcbiAgICBpZiAodHlwZW9mIG9iamVjdC5lZGl0ZWRSb3dJbmRleCAhPT0gXCJ1bmRlZmluZWRcIikge1xyXG4gICAgICBsZXQgTmV3VmFsOmFueSA9IHt9O1xyXG4gICAgICAgIC8vbGV0IGdyaWRfZGF0YSA9IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkob2JqZWN0LmdyaWQuZGF0YSkpO1xyXG4gICAgICAgIGxldCBncmlkX2RhdGEgPSBvYmplY3QuZ3JpZC5kYXRhO1xyXG4gICAgICAgIGlmIChvYmplY3QucGFyYW1Db25maWcuREVCVUdfRkxBRykgY29uc29sZS5sb2coXCJvYmplY3QuZWRpdGVkUm93SW5kZXggOlwiLCBncmlkX2RhdGEpXHJcblxyXG4gICAgICBOZXdWYWwgPSBncmlkX2RhdGEuZGF0YVtvYmplY3QuZWRpdGVkUm93SW5kZXhdO1xyXG4gICAgICAgIGxldCBjdXJDTUQgPSBOZXdWYWxbXCJfUVVFUllcIl07XHJcbiAgICAgICAgaWYgKG9iamVjdC5wYXJhbUNvbmZpZy5ERUJVR19GTEFHKSBjb25zb2xlLmxvZyhcImNoZWNrOk5ld1ZhbDpfUVVFUllcIiwgTmV3VmFsW1wiX1FVRVJZXCJdKVxyXG4gICAgICBsZXQgcmVzdWx0MSA9IG9iamVjdC5zdGFyU2VydmljZXMucmVtb3ZlUmVjKG9iamVjdC5ncmlkLmRhdGEsIG9iamVjdC5lZGl0ZWRSb3dJbmRleCk7XHJcbiAgICAgICAgb2JqZWN0LmdyaWQuZGF0YSA9IHJlc3VsdDE7XHJcbiAgICAgICAgaWYgKG9iamVjdC5wYXJhbUNvbmZpZy5ERUJVR19GTEFHKSBjb25zb2xlLmxvZyhcImNoZWNrOk5ld1ZhbDpcIiwgTmV3VmFsKVxyXG5cclxuICAgICAgICBOZXdWYWxbXCJfUVVFUllcIl0gPSBvYmplY3QuZGVsZXRlQ01EO1xyXG4gICAgICBpZiAoY3VyQ01EICE9IG9iamVjdC5pbnNlcnRDTUQpIHtcclxuICAgICAgICAgIG9iamVjdC5hZGRUb0JvZHkoTmV3VmFsKTtcclxuICAgICAgICAgIG9iamVjdC5yZW1vdmVkUmVjLnB1c2goTmV3VmFsKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICB9XHJcbiAgICAgIGVsc2VcclxuICAgICAgICBvYmplY3QuY2FuY2VsSGFuZGxlcigpO1xyXG5cclxuXHJcbiAgICB9XHJcbiAgICBwdWJsaWMgc2F2ZUN1cnJlbnRfZ3JpZChvYmplY3Q6YW55KTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5wYXJhbUNvbmZpZy5ERUJVR19GTEFHKSBjb25zb2xlLmxvZyhcInNhdmVDdXJyZW50X2dyaWQ6b2JqZWN0LmZvcm1Hcm91cDpcIiwgb2JqZWN0LmZvcm1Hcm91cCk7XHJcblxyXG5cclxuICAgIGlmIChvYmplY3QuZm9ybUdyb3VwKSB7XHJcbiAgICAgIGlmICh0aGlzLnBhcmFtQ29uZmlnLkRFQlVHX0ZMQUcpIGNvbnNvbGUubG9nKFwic2F2ZUN1cnJlbnRfZ3JpZDpvYmplY3QuZm9ybUdyb3VwOlwiLCBvYmplY3QuZm9ybUdyb3VwKTtcclxuICAgICAgbGV0IE5ld1ZhbDphbnkgPSB7fTtcclxuICAgICAgICAgIE5ld1ZhbCA9IE9iamVjdC5hc3NpZ24oe30sIG9iamVjdC5mb3JtR3JvdXAudmFsdWUpO1xyXG4gICAgICBpZiAodGhpcy5wYXJhbUNvbmZpZy5ERUJVR19GTEFHKSBjb25zb2xlLmxvZygnY2hlY2s6ZGlydHkgOicsIG9iamVjdC5mb3JtR3JvdXAuZGlydHksIFwiIGlzTmV3OlwiLCBvYmplY3QuaXNOZXcsIFwiIE5ld1ZhbDogXCIsIE5ld1ZhbCk7XHJcbiAgICAgIGlmIChvYmplY3QuZm9ybUdyb3VwLmRpcnR5ID09PSB0cnVlKSB7XHJcbiAgICAgICAgaWYgKG9iamVjdC5pc05ldyA9PSB0cnVlKSB7XHJcbiAgICAgICAgICBpZiAodGhpcy5wYXJhbUNvbmZpZy5ERUJVR19GTEFHKSBjb25zb2xlLmxvZyhcImhlcmUxIE5ld1ZhbFwiLCBOZXdWYWwpO1xyXG4gICAgICAgICAgICAgICAvL2xldCByZXN1bHQgPSBvYmplY3Quc3RhclNlcnZpY2VzLmFkZFJlYyhvYmplY3QuZ3JpZC5kYXRhLCBOZXdWYWwpIDtcclxuICAgICAgICAgICAgIC8vIG9iamVjdC5ncmlkLmRhdGEgPSByZXN1bHQ7XHJcbiAgICAgICAgICAgICAgaWYgKHRoaXMucGFyYW1Db25maWcuREVCVUdfRkxBRykgY29uc29sZS5sb2cob2JqZWN0LmdyaWQuZGF0YSk7XHJcblxyXG4gICAgICAgICAgICAgIGlmIChvYmplY3QuZ3JpZC5kYXRhID09IG51bGwgfHwgdHlwZW9mIG9iamVjdC5ncmlkLmRhdGEuZGF0YSA9PSBcInVuZGVmaW5lZFwiKVxyXG4gICAgICAgICAgICBvYmplY3QuZ3JpZC5kYXRhID0geyBkYXRhOiBbXSwgdG90YWw6IDAgfTtcclxuICAgICAgICAgICAgICAvL29iamVjdC5ncmlkLmRhdGEuZGF0YS5wdXNoKE5ld1ZhbCk7XHJcbiAgICAgICAgICBvYmplY3QuZ3JpZC5kYXRhLmRhdGEuc3BsaWNlKDAsIDAsIE5ld1ZhbCk7XHJcbiAgICAgICAgICAgICAgTmV3VmFsW1wiX1FVRVJZXCJdID0gb2JqZWN0Lmluc2VydENNRDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG5cclxuICAgICAgICAgIGlmICh0aGlzLnBhcmFtQ29uZmlnLkRFQlVHX0ZMQUcpIGNvbnNvbGUubG9nKCdjaGVjazpvYmplY3QuZ3JpZC5kYXRhOicsIG9iamVjdC5ncmlkLmRhdGEsIFwiIE5ld1ZhbDpcIiwgTmV3VmFsKTtcclxuICAgICAgICAgICAgICAvL05ld1ZhbCA9IHRoaXMucGFyc2VUb0RhdGUoTmV3VmFsKTtcclxuICAgICAgICAgIGlmIChvYmplY3QuZ3JpZC5kYXRhLmRhdGFbb2JqZWN0LmVkaXRlZFJvd0luZGV4XS5fUVVFUlkgPT0gb2JqZWN0Lmluc2VydENNRCkge1xyXG4gICAgICAgICAgICAgICAgTmV3VmFsW1wiX1FVRVJZXCJdID0gb2JqZWN0Lmluc2VydENNRDtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIE5ld1ZhbFtcIl9RVUVSWVwiXSA9IG9iamVjdC51cGRhdGVDTUQ7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIG9iamVjdC5ncmlkLmRhdGEuZGF0YVtvYmplY3QuZWRpdGVkUm93SW5kZXhdID0gTmV3VmFsO1xyXG4gICAgICAgICAgICAgIC8vbGV0IHJlc3VsdDEgPSBvYmplY3Quc3RhclNlcnZpY2VzLnVwZGF0ZVJlYyhvYmplY3QuZ3JpZC5kYXRhICwgb2JqZWN0LmVkaXRlZFJvd0luZGV4LCBOZXdWYWwgKTtcclxuICAgICAgICAgICAgICAvL29iamVjdC5ncmlkLmRhdGEgPSByZXN1bHQxO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8vb2JqZWN0LmFkZFRvQm9keShOZXdWYWwpOyAvLyBhZGRUb0JvZHkgd2lsbCBiZSBkb25lIGF0IHNhdmVDaGFuZ2VzX2dyaWQgdG8gYXZvaWQgZHVwbGljdGUgdXBkYXRlIHNpbmNlIG9iamVjdC5ncmlkLmRhdGEuZGF0YSBpcyBnZXR0aW5nIHVwZGF0ZWRcclxuICAgICAgICBpZiAodGhpcy5wYXJhbUNvbmZpZy5ERUJVR19GTEFHKSBjb25zb2xlLmxvZyhvYmplY3QuZ3JpZC5kYXRhKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGlmICh0aGlzLnBhcmFtQ29uZmlnLkRFQlVHX0ZMQUcpIGNvbnNvbGUubG9nKFwicHJlIGNsb3NlXCIpXHJcbiAgICAgICAgICBvYmplY3QuY2xvc2VFZGl0b3IoKTtcclxuICAgICAgICAgIGlmICh0aGlzLnBhcmFtQ29uZmlnLkRFQlVHX0ZMQUcpIGNvbnNvbGUubG9nKFwicG9zdCBjbG9zZVwiKVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgY2xvc2VFZGl0b3JfZ3JpZChvYmplY3QpOiB2b2lkIHtcclxuICAgIC8vY29uc29sZS5sb2coXCJvYmplY3QuZm9ybUdyb3VwOmNsb3NlRWRpdG9yX2dyaWRcIilcclxuICAgICAgb2JqZWN0LmdyaWQuY2xvc2VSb3cob2JqZWN0LmVkaXRlZFJvd0luZGV4KTtcclxuICAgICAgb2JqZWN0LmlzTmV3ID0gZmFsc2U7XHJcbiAgICAgIG9iamVjdC5lZGl0ZWRSb3dJbmRleCA9IHVuZGVmaW5lZDtcclxuICAgICAgb2JqZWN0LmZvcm1Hcm91cCA9IHVuZGVmaW5lZDtcclxuXHJcbiAgICAvLyBncmlkLmNhbmNlbDtcclxuICAgIC8vIG9iamVjdC5ncmlkLmRhdGEgPSBudWxsO1xyXG4gICAgLy8gb2JqZWN0LmNsZWFyQ29tcGxldGVkT3V0cHV0LmVtaXQob2JqZWN0LmZvcm1Jbml0aWFsVmFsdWVzKTtcclxuICAgIH1cclxuICBwdWJsaWMgY2FuY2VsSGFuZGxlcl9ncmlkKG9iamVjdDphbnkpOiB2b2lkIHtcclxuICAgICAgb2JqZWN0LmNsb3NlRWRpdG9yKCk7XHJcbiAgICAgIG9iamVjdC5pc1NlYXJjaCA9IGZhbHNlO1xyXG4gICAgICB0aGlzLmhlbHBNc2dfZ3JpZCA9IFwiXCI7XHJcbiAgICB9XHJcbiAgcHVibGljIHNhdmVDaGFuZ2VzX2dyaWRfaW5UcmFucyhncmlkOmFueSwgb2JqZWN0OmFueSwgTmV3VmFsOmFueSkge1xyXG4gICAgICB0aGlzLmNvbW1pdEJvZHkucHVzaChOZXdWYWwpO1xyXG4gICAgaWYgKG9iamVjdC5pc0NoaWxkID09IHRydWUpIHtcclxuICAgICAgICBsZXQgZ3JpZFJlY29yZHMgPSBvYmplY3QuZ3JpZC5kYXRhLmRhdGEubGVuZ3RoO1xyXG4gICAgICAgIGxldCBwYXJhbUNvbmZpZyA9IHtcclxuICAgICAgICAgIFwiTmFtZVwiOiBcImNoaWxkUmVjb3Jkc1wiLFxyXG4gICAgICAgICAgXCJWYWxcIjogZ3JpZFJlY29yZHNcclxuICAgICAgICB9O1xyXG4gICAgICAgIHNldFBhcmFtQ29uZmlnKHBhcmFtQ29uZmlnKTtcclxuICAgICAgfVxyXG4gICAgICBcclxuICAgIGlmICh0eXBlb2Ygb2JqZWN0LmNhbGxCYWNrUG9zdF9TYXZlICE9PSBcInVuZGVmaW5lZFwiKSB7XHJcbiAgICAgIGxldCBOZXdWYWwxOmFueSA9IFtdO1xyXG4gICAgICAgICAgICBOZXdWYWwxLnB1c2goTmV3VmFsKTtcclxuICAgICAgICBvYmplY3QuY2FsbEJhY2tQb3N0X1NhdmUuYXBwbHkob2JqZWN0LCBOZXdWYWwxKTtcclxuICAgICAgfVxyXG4gICAgICB0aGlzLnNldFByaW1hcktleU5hbWVBcnIob2JqZWN0LCB0cnVlKTtcclxuICAgICAgb2JqZWN0LnNhdmVDb21wbGV0ZWRPdXRwdXQuZW1pdChOZXdWYWwpO1xyXG4gICAgLy9vYmplY3Quc2F2ZUNvbXBsZXRlZE91dHB1dC5lbWl0KG9iamVjdC5ncmlkLmRhdGEpO1xyXG4gICAgfVxyXG4gIHB1YmxpYyBzYXZlQ2hhbmdlc19ncmlkKGdyaWQ6IGFueSwgb2JqZWN0OmFueSk6IHZvaWQge1xyXG4gICAgaWYgKChvYmplY3QuZ3JpZC5kYXRhID09IG51bGwpIHx8ICh0eXBlb2Ygb2JqZWN0LmdyaWQuZGF0YS5kYXRhID09IFwidW5kZWZpbmVkXCIpKSB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9XHJcbiAgICAgIGxldCBFcnJvciA9IGZhbHNlO1xyXG4gICAgaWYgKHRoaXMucGFyYW1Db25maWcuREVCVUdfRkxBRykgY29uc29sZS5sb2coXCJwcmUgb2JqZWN0LnNhdmVDdXJyZW50XCIpO1xyXG4gICAgICBvYmplY3Quc2F2ZUN1cnJlbnQoKTtcclxuXHJcbiAgICBpZiAob2JqZWN0LmNvbXBvbmVudENvbmZpZy5yb3V0aW5lQXV0aCAhPSBudWxsKSB7XHJcbiAgICAgIGlmICh0aGlzLnBhcmFtQ29uZmlnLkRFQlVHX0ZMQUcpIGNvbnNvbGUubG9nKFwiYXV0aExldmVsOlwiICsgb2JqZWN0LmNvbXBvbmVudENvbmZpZy5yb3V0aW5lQXV0aC5hdXRoTGV2ZWwpO1xyXG4gICAgICBpZiAob2JqZWN0LmNvbXBvbmVudENvbmZpZy5yb3V0aW5lQXV0aC5hdXRoTGV2ZWwgIT0gMikge1xyXG4gICAgICAgICAgbGV0IGRpYWxvZ1N0cnVjID0ge1xyXG4gICAgICAgICAgICBtc2c6IHRoaXMucmVhZE9ubHlNc2csXHJcbiAgICAgICAgICB0aXRsZTogXCJXYXJuaW5nXCIsXHJcbiAgICAgICAgICAgIGluZm86IG51bGwsXHJcbiAgICAgICAgICBvYmplY3Q6IG9iamVjdCxcclxuICAgICAgICAgIGFjdGlvbjogdGhpcy5Pa0FjdGlvbnMsXHJcbiAgICAgICAgICBjYWxsYmFjazogbnVsbFxyXG4gICAgICAgIH07XHJcbiAgICAgICAgICAgIHRoaXMuc2hvd0NvbmZpcm1hdGlvbihkaWFsb2dTdHJ1Yyk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIGxldCBOZXdWYWwgPSBbXTtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgb2JqZWN0LmdyaWQuZGF0YS5kYXRhLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgaWYgKHRoaXMucGFyYW1Db25maWcuREVCVUdfRkxBRykgY29uc29sZS5sb2coXCJjaGVjazogb2JqZWN0LmdyaWQuZGF0YS5kYXRhW2ldLl9RVUVSWTpcIiwgb2JqZWN0LmdyaWQuZGF0YS5kYXRhW2ldLl9RVUVSWSlcclxuICAgICAgaWYgKHR5cGVvZiBvYmplY3QuZ3JpZC5kYXRhLmRhdGFbaV0uX1FVRVJZICE9IFwidW5kZWZpbmVkXCIpIHtcclxuICAgICAgICAgICAgTmV3VmFsID0gb2JqZWN0LmdyaWQuZGF0YS5kYXRhW2ldO1xyXG4gICAgICAgICAgb2JqZWN0LmFkZFRvQm9keShOZXdWYWwpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICBpZiAodGhpcy5pblRyYW5zKSB7XHJcbiAgICAgICAgdGhpcy5zYXZlQ2hhbmdlc19ncmlkX2luVHJhbnMoZ3JpZCwgb2JqZWN0LCBOZXdWYWwpO1xyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG4gICAgICBpZiAodGhpcy5wYXJhbUNvbmZpZy5ERUJVR19GTEFHKSBjb25zb2xlLmxvZyhcImNoZWNrOiBvYmplY3QuQm9keTpcIiwgb2JqZWN0LkJvZHkpO1xyXG4gICAgaWYgKG9iamVjdC5Cb2R5Lmxlbmd0aCAhPSAwKSB7XHJcbiAgICAgIGxldCBQYWdlID0gXCImX3RyYW5zPVlcIjtcclxuICAgICAgdGhpcy5wb3N0KG9iamVjdCwgUGFnZSwgb2JqZWN0LkJvZHkpLnN1YnNjcmliZShQYWdlID0+IHtcclxuICAgICAgICBvYmplY3QuQm9keSA9IFtdO1xyXG4gICAgICAgIC8vb2JqZWN0LnNhdmVDb21wbGV0ZWRPdXRwdXQuZW1pdChvYmplY3QuZ3JpZC5kYXRhKTtcclxuICAgICAgICBvYmplY3Quc2F2ZUNvbXBsZXRlZE91dHB1dC5lbWl0KE5ld1ZhbCk7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IG9iamVjdC5ncmlkLmRhdGEuZGF0YS5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xyXG4gICAgICAgICAgaWYgKHR5cGVvZiBvYmplY3QuZ3JpZC5kYXRhLmRhdGFbaV0uX1FVRVJZICE9IFwidW5kZWZpbmVkXCIpIHtcclxuICAgICAgICAgICAgICBvYmplY3QuZ3JpZC5kYXRhLmRhdGFbaV0uX1FVRVJZX0RPTkUgPSBvYmplY3QuZ3JpZC5kYXRhLmRhdGFbaV0uX1FVRVJZO1xyXG4gICAgICAgICAgICAgIGRlbGV0ZSBvYmplY3QuZ3JpZC5kYXRhLmRhdGFbaV0uX1FVRVJZO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICBpZiAodGhpcy5wYXJhbUNvbmZpZy5ERUJVR19GTEFHKSBjb25zb2xlLmxvZyhcImNoZWNrOiBvYmplY3QuZ3JpZC5kYXRhLmRhdGFbaV0uX1FVRVJZOlwiLCBvYmplY3QuZ3JpZC5kYXRhLmRhdGFbaV0uX1FVRVJZKVxyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIGlmICh0aGlzLnBhcmFtQ29uZmlnLkRFQlVHX0ZMQUcpIGNvbnNvbGUubG9nKFwib2JqZWN0LmdyaWQuZGF0YS5kYXRhOlwiLCBvYmplY3QuZ3JpZC5kYXRhLmRhdGEpXHJcbiAgICAgICAgICBpZiAodGhpcy5wYXJhbUNvbmZpZy5ERUJVR19GTEFHKSBjb25zb2xlLmxvZyhcIm9iamVjdC5ncmlkLmRhdGEuZGF0YToubGVuZ3RoXCIsIG9iamVjdC5ncmlkLmRhdGEuZGF0YS5sZW5ndGgpXHJcbiAgICAgICAgaWYgKG9iamVjdC5pc0NoaWxkID09IHRydWUpIHtcclxuICAgICAgICAgICAgbGV0IGdyaWRSZWNvcmRzID0gb2JqZWN0LmdyaWQuZGF0YS5kYXRhLmxlbmd0aDtcclxuICAgICAgICAgICAgbGV0IHBhcmFtQ29uZmlnID0ge1xyXG4gICAgICAgICAgICAgIFwiTmFtZVwiOiBcImNoaWxkUmVjb3Jkc1wiLFxyXG4gICAgICAgICAgICAgIFwiVmFsXCI6IGdyaWRSZWNvcmRzXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIHNldFBhcmFtQ29uZmlnKHBhcmFtQ29uZmlnKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB0aGlzLnNob3dOb3RpZmljYXRpb24oJ3N1Y2Nlc3MnLCBcIkRhdGEgc2F2ZWQgc3VjY2Vzc2Z1bGx5XCIpO1xyXG4gICAgICAgIGlmICh0eXBlb2Ygb2JqZWN0LmNhbGxCYWNrUG9zdF9TYXZlICE9PSBcInVuZGVmaW5lZFwiKSB7XHJcbiAgICAgICAgICBsZXQgTmV3VmFsMTphbnkgPSBbXTtcclxuICAgICAgICAgICAgICAgIE5ld1ZhbDEucHVzaChOZXdWYWwpO1xyXG4gICAgICAgICAgICBvYmplY3QuY2FsbEJhY2tQb3N0X1NhdmUuYXBwbHkob2JqZWN0LCBOZXdWYWwxKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIHRoaXMuc2V0UHJpbWFyS2V5TmFtZUFycihvYmplY3QsIHRydWUpO1xyXG4gICAgICAgIC8vIGlmIChvYmplY3QuZGlhYmxlRW1pdFNhdmUgPT0gdHJ1ZSkgXHJcbiAgICAgICAgLy8gICAgIHt9XHJcbiAgICAgICAgLy8gICBlbHNlXHJcbiAgICAgICAgLy9vYmplY3Quc2F2ZUNvbXBsZXRlZE91dHB1dC5lbWl0KG9iamVjdC5ncmlkLmRhdGEpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZXJyID0+IHtcclxuICAgICAgICAgIGZvciAobGV0IGkgPSBvYmplY3QuQm9keS5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xyXG4gICAgICAgICAgICBpZiAob2JqZWN0LkJvZHlbaV0uX1FVRVJZICE9IG9iamVjdC5kZWxldGVDTUQpIHtcclxuICAgICAgICAgICAgICBvYmplY3QuQm9keS5zcGxpY2UoaSwgMSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGlmICh0aGlzLnBhcmFtQ29uZmlnLkRFQlVHX0ZMQUcpIGNvbnNvbGUubG9nKFwiZXJyOlwiLCBlcnIpXHJcbiAgICAgICAgICBsZXQgZXJyTXNnID0gdGhpcy5nZXRFcnJvck1zZyhlcnIpO1xyXG4gICAgICAgICAgdGhpcy5zaG93Tm90aWZpY2F0aW9uKFwiZXJyb3JcIiwgXCJlcnJvcjpcIiArIGVyck1zZyk7XHJcbiAgICAgICAgICBFcnJvciA9IHRydWU7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgICAgaWYgKHRoaXMucGFyYW1Db25maWcuREVCVUdfRkxBRykgY29uc29sZS5sb2coXCJvYmplY3QuaXNNYXN0ZXI6XCIgKyBvYmplY3QuaXNNYXN0ZXIpO1xyXG4gICAgICAgIGlmICghb2JqZWN0LmlzTWFzdGVyKVxyXG4gICAgICAgIHRoaXMuc2hvd05vdGlmaWNhdGlvbignd2FybmluZycsIFwiTm8gY2hhbmdlcyB0byBzYXZlXCIpO1xyXG4gICAgICB9XHJcbiAgICAgICAgaWYgKCFFcnJvcil7XHJcbiAgICAgICAgICBvYmplY3Quc2F2ZUNvbXBsZXRlZE91dHB1dC5lbWl0KE5ld1ZhbCk7XHJcbiAgICAgICAgICAvL29iamVjdC5zYXZlQ29tcGxldGVkT3V0cHV0LmVtaXQob2JqZWN0LmdyaWQuZGF0YSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gIHB1YmxpYyBnZXRFcnJvck1zZyhlcnI6YW55KVxyXG4gICAge1xyXG4gICAgICBsZXQgZXJyTXNnID0gXCJcIjtcclxuICAgICAgXHJcbiAgICAgIGlmICh0eXBlb2YgZXJyLmVycm9yLmVycm9yICE9IFwidW5kZWZpbmVkXCIpe1xyXG4gICAgICAgIGVyck1zZyA9IGVyci5lcnJvci5lcnJvcjtcclxuICAgICAgfVxyXG4gICAgICBlbHNlXHJcbiAgICAgICAgZXJyTXNnID0gZXJyLmVycm9yO1xyXG5cclxuICAgICAgICByZXR1cm4gZXJyTXNnO1xyXG5cclxuICAgIH1cclxuXHJcblxyXG5cclxuICBwdWJsaWMgZXhlY3V0ZVF1ZXJ5X2dyaWQoZ3JpZDogYW55LCBvYmplY3Q6YW55KTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5wYXJhbUNvbmZpZy5ERUJVR19GTEFHKSBjb25zb2xlLmxvZyhcIm9iamVjdC5ncmlkOlwiLCBvYmplY3QuZ3JpZClcclxuICAgICAgICBpZiAodHlwZW9mIGdyaWQgPT0gXCJ1bmRlZmluZWRcIiB8fCB0eXBlb2Ygb2JqZWN0LmdyaWQgPT0gXCJ1bmRlZmluZWRcIilcclxuICAgICAgICByZXR1cm47XHJcblxyXG4gICAgICBsZXQgZGlydHkgPSBmYWxzZTtcclxuICAgICAgLy9pZiAodGhpcy5wYXJhbUNvbmZpZy5ERUJVR19GTEFHKSBjb25zb2xlLmxvZyAoXCJleGVjdXRlUXVlcnlfZ3JpZDpcIiArIG9iamVjdC5Cb2R5Lmxlbmd0aCArIFwiIFwiICsgb2JqZWN0LmdyaWQuaXNFZGl0aW5nKCksIFwib2JqZWN0LkJvZHk6XCIsb2JqZWN0LkJvZHkpO1xyXG4gICAgICAvL2lmICh0aGlzLnBhcmFtQ29uZmlnLkRFQlVHX0ZMQUcpIGNvbnNvbGUubG9nKFwib2JqZWN0LkJvZHk6XCIsb2JqZWN0LkJvZHkpXHJcbiAgICAgIGlmICgob2JqZWN0LkJvZHkubGVuZ3RoICE9IDApIHx8IG9iamVjdC5ncmlkLmlzRWRpdGluZygpID09IHRydWUpXHJcbiAgICAgIHtcclxuICAgICAgICBkaXJ0eSA9IHRydWU7XHJcbiAgICAgIH1cclxuICAgIGlmIChkaXJ0eSA9PSB0cnVlKSB7XHJcbiAgICAgICAgbGV0IGRpYWxvZ1N0cnVjID0ge1xyXG4gICAgICAgICAgbXNnOiB0aGlzLnNhdmVDaGFuZ2VzTXNnLFxyXG4gICAgICAgIHRpdGxlOiB0aGlzLnBsZWFzZUNvbmZpcm1Nc2csXHJcbiAgICAgICAgICBpbmZvOiBncmlkLFxyXG4gICAgICAgIG9iamVjdDogb2JqZWN0LFxyXG4gICAgICAgIGFjdGlvbjogdGhpcy5ZZXNOb0FjdGlvbnMsXHJcbiAgICAgICAgY2FsbGJhY2s6IHRoaXMuZXhlY3V0ZVF1ZXJ5QWN0X2dyaWRcclxuICAgICAgfTtcclxuICAgICAgICAgIHRoaXMuc2hvd0NvbmZpcm1hdGlvbihkaWFsb2dTdHJ1Yyk7XHJcbiAgICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICB0aGlzLmV4ZWN1dGVRdWVyeUFjdF9ncmlkKGdyaWQsIG9iamVjdCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICBwdWJsaWMgZXhlY3V0ZVF1ZXJ5QWN0X2dyaWQoZ3JpZDogYW55LCBvYmplY3Q6YW55KTogdm9pZCB7XHJcbiAgICAgIGxldCBwYXJhbUNvbmZpZyA9IHtcclxuICAgICAgICBcIk5hbWVcIjogXCJjaGlsZFJlY29yZHNcIixcclxuICAgICAgICBcIlZhbFwiOiAwXHJcbiAgICAgIH07XHJcbiAgICAgIHNldFBhcmFtQ29uZmlnKHBhcmFtQ29uZmlnKTtcclxuICAgICAgaWYgKG9iamVjdC5wYXJhbUNvbmZpZy5ERUJVR19GTEFHKSBjb25zb2xlLmxvZyhcIm9iamVjdC5tYXN0ZXJLZXlOYW1lOlwiICsgb2JqZWN0Lm1hc3RlcktleU5hbWUsIG9iamVjdC5tYXN0ZXJLZXlBcnIpO1xyXG4gICAgaWYgKG9iamVjdC5wYXJhbUNvbmZpZy5ERUJVR19GTEFHKSBjb25zb2xlLmxvZyhcIm9iamVjdC5pc0NoaWxkOlwiLCBvYmplY3QuaXNDaGlsZCwgXCIgb2JqZWN0LmlzU2VhcmNoIDpcIiwgb2JqZWN0LmlzU2VhcmNoKVxyXG4gICAgaWYgKG9iamVjdC5pc0NoaWxkID09IHRydWUpIHtcclxuICAgICAgaWYgKG9iamVjdC5pc1NlYXJjaCAhPSB0cnVlKSB7XHJcbiAgICAgICAgICBncmlkID0gb2JqZWN0LmdyaWRJbml0aWFsVmFsdWVzO1xyXG5cclxuICAgICAgICBpZiAoKHR5cGVvZiBvYmplY3QubWFzdGVyS2V5TmFtZUFyciAhPSBcInVuZGVmaW5lZFwiKSAmJiAob2JqZWN0Lm1hc3RlcktleU5hbWVBcnIubGVuZ3RoICE9IDApKSB7XHJcbiAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG9iamVjdC5tYXN0ZXJLZXlOYW1lQXJyLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgbGV0IGV4aXN0cyA9IG9iamVjdC5ncmlkSW5pdGlhbFZhbHVlc1tvYmplY3QubWFzdGVyS2V5TmFtZUFycltpXV1cclxuICAgICAgICAgICAgICBpZiAodHlwZW9mIGV4aXN0cyAhPT0gXCJ1bmRlZmluZWRcIil7XHJcbiAgICAgICAgICAgICAgb2JqZWN0LmdyaWRJbml0aWFsVmFsdWVzW29iamVjdC5tYXN0ZXJLZXlOYW1lQXJyW2ldXSA9IG9iamVjdC5tYXN0ZXJLZXlBcnJbaV07XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIG9iamVjdC5ncmlkSW5pdGlhbFZhbHVlc1tvYmplY3QubWFzdGVyS2V5TmFtZV0gPSBvYmplY3QubWFzdGVyS2V5O1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIC8vZ3JpZFtvYmplY3QubWFzdGVyS2V5TmFtZV0gPSBvYmplY3QubWFzdGVyS2V5O1xyXG4gICAgICAgIGlmIChvYmplY3QucGFyYW1Db25maWcuREVCVUdfRkxBRykgY29uc29sZS5sb2coXCJvYmplY3QubWFzdGVyS2V5TmFtZTpcIiArIG9iamVjdC5tYXN0ZXJLZXlOYW1lKTtcclxuICAgICAgICAgIGlmIChvYmplY3QucGFyYW1Db25maWcuREVCVUdfRkxBRykgY29uc29sZS5sb2coZ3JpZCk7XHJcbiAgICAgICAgICBvYmplY3QuaXNTZWFyY2ggPSB0cnVlO1xyXG4gICAgICAgICAgaWYgKG9iamVjdC5wYXJhbUNvbmZpZy5ERUJVR19GTEFHKSBjb25zb2xlLmxvZyhcIi0tLVNlYXJjaGluZzpcIik7XHJcbiAgICAgICAgICBpZiAob2JqZWN0LnBhcmFtQ29uZmlnLkRFQlVHX0ZMQUcpIGNvbnNvbGUubG9nKGdyaWQpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgIGlmIChvYmplY3QucGFyYW1Db25maWcuREVCVUdfRkxBRykgY29uc29sZS5sb2coJy0tLS0tLS0tLS0tLWV4ZWN1dGVRdWVyeSBvYmplY3QuaXNTZWFyY2ggOicgKyBvYmplY3QuaXNTZWFyY2ggKyBcIiAgb2JqZWN0LmlzQ2hpbGQ6XCIgKyBvYmplY3QuaXNDaGlsZCk7XHJcbiAgICAgIC8vIGlmIChvYmplY3QucGFyYW1Db25maWcuREVCVUdfRkxBRykgY29uc29sZS5sb2cob2JqZWN0LmdyaWQpO1xyXG5cclxuICAgIGxldCBQYWdlID0gXCImX3F1ZXJ5PVwiICsgb2JqZWN0LmdldENNRDtcclxuICAgIGlmIChvYmplY3QuaXNTZWFyY2ggPT0gdHJ1ZSkge1xyXG4gICAgICBpZiAob2JqZWN0LnBhcmFtQ29uZmlnLkRFQlVHX0ZMQUcpIGNvbnNvbGUubG9nKCdvYmplY3QuZm9ybUdyb3VwOicsIG9iamVjdC5mb3JtR3JvdXAsICd0eXBlb2YoZ3JpZCk6JywgdHlwZW9mIChncmlkLmRhdGEpLCAnIGdyaWQ6JywgZ3JpZClcclxuICAgICAgICAgIGxldCBOZXdWYWwgPSBcIlwiO1xyXG4gICAgICBpZiAodHlwZW9mIG9iamVjdC5mb3JtR3JvdXAgPT0gXCJ1bmRlZmluZWRcIikge1xyXG4gICAgICAgICAgICAvLyBhIGNoaWxkIGNvbXBvbmVudFxyXG4gICAgICAgIGlmIChvYmplY3QucGFyYW1Db25maWcuREVCVUdfRkxBRykgY29uc29sZS5sb2coJ2dyaWQ6JywgdHlwZW9mIChncmlkLmRhdGEpKTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGlmICh0eXBlb2YgZ3JpZC5kYXRhID09IFwib2JqZWN0XCIpXHJcbiAgICAgICAgICAgICAgTmV3VmFsID0gZ3JpZC5kYXRhOyAvLyBwYXNzZWQgZW1wdHkgZ3JpZFxyXG4gICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICBOZXdWYWwgPSBncmlkOyAvLyB1c2VkIHRoZSBwYXNzZWQgZ3JpZCBwYXJhbVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICAgTmV3VmFsID0gb2JqZWN0LmZvcm1Hcm91cC52YWx1ZTtcclxuXHJcbiAgICAgICAgICAgIG9iamVjdC5pc1NlYXJjaCA9IGZhbHNlO1xyXG4gICAgICBpZiAoKHR5cGVvZiBvYmplY3QuZm9ybWF0dGVkV2hlcmUgPT09IFwidW5kZWZpbmVkXCIpIHx8IChvYmplY3QuZm9ybWF0dGVkV2hlcmUgPT0gbnVsbCkpIHtcclxuICAgICAgICAgICAgICBQYWdlID0gUGFnZSArIG9iamVjdC5zdGFyU2VydmljZXMuZm9ybWF0V2hlcmUoTmV3VmFsKTtcclxuXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgaWYgKG9iamVjdC5wYXJhbUNvbmZpZy5ERUJVR19GTEFHKSBjb25zb2xlLmxvZyhcIm9iamVjdC5mb3JtYXR0ZWRXaGVyZVwiLCBvYmplY3QuZm9ybWF0dGVkV2hlcmUpXHJcbiAgICAgICAgICAgICAgb2JqZWN0LmZvcm1hdHRlZFdoZXJlID0gdGhpcy5wcm9jZXNzZm9ybWF0dGVkV2hlcmUob2JqZWN0LCBvYmplY3QuZm9ybWF0dGVkV2hlcmUpO1xyXG4gICAgICAgICAgICAgIFBhZ2UgPSBQYWdlICsgb2JqZWN0LmZvcm1hdHRlZFdoZXJlO1xyXG4gICAgICAgICAgICAgIG9iamVjdC5mb3JtYXR0ZWRXaGVyZSA9IG51bGw7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgaWYgKCh0eXBlb2Ygb2JqZWN0Lk9yZGVyQnlDbGF1c2UgIT09IFwidW5kZWZpbmVkXCIpICYmIChvYmplY3QuT3JkZXJCeUNsYXVzZSAhPSBcIlwiKSlcclxuICAgICAgICAgICAgICBQYWdlID0gUGFnZSArIFwiJl9PUkRFUkJZPVwiICsgb2JqZWN0Lk9yZGVyQnlDbGF1c2U7XHJcblxyXG5cclxuICAgICAgICB9XHJcbiAgICAgICAgUGFnZSA9IGVuY29kZVVSSShQYWdlKTtcclxuICAgICAgICAvL2lmIChvYmplY3QucGFyYW1Db25maWcuREVCVUdfRkxBRykgY29uc29sZS5sb2coJ1BhZ2U6JyArIFBhZ2UpO1xyXG4gICAgICAgIG9iamVjdC5ncmlkLmxvYWRpbmcgPSB0cnVlO1xyXG4gICAgICAgIG9iamVjdC5jbG9zZUVkaXRvcigpO1xyXG4gICAgb2JqZWN0LmV4ZWN1dGVRdWVyeXJlc3VsdCA9IFtdO1xyXG4gICAgb2JqZWN0LmV4ZWN1dGVRdWVyeXJlc3VsdC5yZXN1bHQgPSAwO1xyXG4gICAgICAgIG9iamVjdC5DdXJyZW50UmVjID0gMDtcclxuICAgICAgICBvYmplY3QuZ3JpZC5kYXRhID0gbnVsbDtcclxuICAgICAgICBcclxuXHJcbiAgICBvYmplY3Quc3RhclNlcnZpY2VzLmZldGNoKG9iamVjdCwgUGFnZSkuc3Vic2NyaWJlKChyZXN1bHQ6YW55KSA9PiB7XHJcbiAgICAgIGlmIChyZXN1bHQgIT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgIGxldCBhY3R1YWxSZXN1bHQgPSBPYmplY3QuYXNzaWduKHt9LCByZXN1bHQsIHt9KVxyXG4gICAgICAgICAgICAgIGlmIChvYmplY3QucGFyYW1Db25maWcuREVCVUdfRkxBRykgY29uc29sZS5sb2coXCItLS0tLS1yZXN1bHQuZGF0YVswXS5kYXRhIDpcIik7XHJcbiAgICAgICAgICAgICAgLy9pZiAob2JqZWN0LnBhcmFtQ29uZmlnLkRFQlVHX0ZMQUcpIGNvbnNvbGUubG9nKHJlc3VsdC5kYXRhWzBdLmRhdGEpO1xyXG4gICAgICAgICAgICAgIHRoaXMuaGVscE1zZ19ncmlkID0gXCJcIjtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHJlc3VsdC5kYXRhWzBdLmRhdGEubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIHJlc3VsdC5kYXRhWzBdLmRhdGFbaV0gPSBvYmplY3Quc3RhclNlcnZpY2VzLnBhcnNlVG9EYXRlKHJlc3VsdC5kYXRhWzBdLmRhdGFbaV0pO1xyXG4gICAgICAgICAgaWYgKHJlc3VsdC5kYXRhWzBdLmRhdGFbaV0uX1FVRVJZICE9IFwidW5kZWZpbmVkXCIpIHtcclxuICAgICAgICAgICAgICAgICAgZGVsZXRlIHJlc3VsdC5kYXRhWzBdLmRhdGFbaV0uX1FVRVJZO1xyXG4gICAgICAgICAgICAgICAgICBkZWxldGUgcmVzdWx0LmRhdGFbMF0uZGF0YVtpXS5fUVVFUllfRE9ORTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgaWYgKG9iamVjdC5wYXJhbUNvbmZpZy5ERUJVR19GTEFHKSBjb25zb2xlLmxvZyhyZXN1bHQuZGF0YVswXS5kYXRhWzBdKTtcclxuXHJcbiAgICAgICAgb2JqZWN0LkJvZHkgPSBbXTtcclxuICAgICAgICByZXN1bHQgPSB7XHJcbiAgICAgICAgICBkYXRhOiByZXN1bHQuZGF0YVswXS5kYXRhLFxyXG4gICAgICAgICAgdG90YWw6IHBhcnNlSW50KHJlc3VsdC5kYXRhWzBdLmRhdGEubGVuZ3RoLCAxMClcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKG9iamVjdC5pc01hc3RlcilcclxuICAgICAgICAgIG9iamVjdC5zdGFyU2VydmljZXMuc2hvd05vdGlmaWNhdGlvbignc3VjY2VzcycsIFwiUmVjb3JkcyByZXRyaWV2ZWQgOiBcIiArIHJlc3VsdC50b3RhbCk7XHJcbiAgICAgICAgb2JqZWN0LmV4ZWN1dGVRdWVyeXJlc3VsdCA9IHJlc3VsdDtcclxuICAgICAgICBpZiAob2JqZWN0LmlzQ2hpbGQgPT0gdHJ1ZSkge1xyXG4gICAgICAgICAgICAgICAgICBsZXQgcGFyYW1Db25maWcgPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgXCJOYW1lXCI6IFwiY2hpbGRSZWNvcmRzXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJWYWxcIjogcmVzdWx0LnRvdGFsXHJcbiAgICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICAgIHNldFBhcmFtQ29uZmlnKHBhcmFtQ29uZmlnKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcblxyXG5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBvYmplY3QuZ3JpZC5sb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgIG9iamVjdC5ncmlkLmRhdGEgPSByZXN1bHQ7XHJcblxyXG4gICAgICBpZiAodHlwZW9mIG9iamVjdC5jYWxsQmFja0Z1bmN0aW9uICE9PSBcInVuZGVmaW5lZFwiKVxyXG4gICAgICAgICAgICAgICAgb2JqZWN0LmNhbGxCYWNrRnVuY3Rpb24ocmVzdWx0KTtcclxuXHJcbiAgICAgIGlmIChvYmplY3QucGFyYW1Db25maWcuREVCVUdfRkxBRykgY29uc29sZS5sb2coXCJncmlkIHNlcnZpY2VyZWFkQ29tcGxldGVkT3V0cHV0XCIpO1xyXG4gICAgICBpZiAob2JqZWN0LnBhcmFtQ29uZmlnLkRFQlVHX0ZMQUcpIGNvbnNvbGUubG9nKG9iamVjdC5ncmlkLmRhdGEuZGF0YSk7XHJcbiAgICAgICAgICAgIGlmIChvYmplY3QucGFyYW1Db25maWcuREVCVUdfRkxBRykgY29uc29sZS5sb2coXCJyZXN1bHQgbGVuZ3RoOlwiICsgcmVzdWx0Lmxlbmd0aCk7XHJcbiAgICAgICAgICAgIGlmIChvYmplY3QucGFyYW1Db25maWcuREVCVUdfRkxBRykgY29uc29sZS5sb2coXCJyZXN1bHQgdG90YWw6XCIgKyByZXN1bHQudG90YWwpO1xyXG4gICAgICBpZiAob2JqZWN0LnBhcmFtQ29uZmlnLkRFQlVHX0ZMQUcpIGNvbnNvbGUubG9nKFwib2JqZWN0LnBlcmZvcm1SZWFkQ29tcGxldGVkT3V0cHV0OlwiICsgb2JqZWN0LnBlcmZvcm1SZWFkQ29tcGxldGVkT3V0cHV0KVxyXG4gICAgICBpZiAoKHR5cGVvZiBvYmplY3QucGVyZm9ybVJlYWRDb21wbGV0ZWRPdXRwdXQgIT09IFwidW5kZWZpbmVkXCIpIHx8IChvYmplY3QucGVyZm9ybVJlYWRDb21wbGV0ZWRPdXRwdXQgPT0gZmFsc2UpKSB7XHJcbiAgICAgICAgICAgICAgaWYgKG9iamVjdC5wYXJhbUNvbmZpZy5ERUJVR19GTEFHKSBjb25zb2xlLmxvZyhcImhlcmUxXCIpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgaWYgKG9iamVjdC5wYXJhbUNvbmZpZy5ERUJVR19GTEFHKSBjb25zb2xlLmxvZyhcImhlcmUyXCIpXHJcbiAgICAgICAgaWYgKG9iamVjdC5kaXNhYmxlRW1pdFJlYWRDb21wbGV0ZWQgIT0gdHJ1ZSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKHJlc3VsdC50b3RhbCAhPSAwKVxyXG4gICAgICAgICAgICAgICAgICBvYmplY3QucmVhZENvbXBsZXRlZE91dHB1dC5lbWl0KG9iamVjdC5ncmlkLmRhdGEuZGF0YVswXSk7XHJcbiAgICAgICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgICAgICAgIG9iamVjdC5yZWFkQ29tcGxldGVkT3V0cHV0LmVtaXQoW10pO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICAgICAgb2JqZWN0LnN0YXJTZXJ2aWNlcy5zZXRQcmltYXJLZXlOYW1lQXJyKG9iamVjdCwgdHJ1ZSk7XHJcbiAgICAgICAgICB9LFxyXG4gICAgICAoZXJyOmFueSkgPT4ge1xyXG4gICAgICAgIG9iamVjdC5Cb2R5ID0gW107XHJcbiAgICAgICAgICAgICAgICBvYmplY3QuZ3JpZC5sb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBvYmplY3QuZ3JpZC5kYXRhID0gbnVsbDtcclxuICAgICAgICBpZiAob2JqZWN0LnBhcmFtQ29uZmlnLkRFQlVHX0ZMQUcpIGNvbnNvbGUubG9nKFwiZXJyOlwiLCBlcnIpXHJcbiAgICAgICAgb2JqZWN0LnN0YXJTZXJ2aWNlcy5zaG93Tm90aWZpY2F0aW9uKFwiZXJyb3JcIiwgXCJlcnJvcjpcIiArIGVyci5lcnJvci5lcnJvci5jb2RlKTtcclxuICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgIG9iamVjdC5kb2NDbGlja1N1YnNjcmlwdGlvbiA9IG9iamVjdC5yZW5kZXJlci5saXN0ZW4oJ2RvY3VtZW50JywgJ2NsaWNrJywgb2JqZWN0Lm9uRG9jdW1lbnRDbGljay5iaW5kKG9iamVjdCkpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgcHVibGljIGVudGVyUXVlcnlBY3RfZ3JpZChncmlkOiBhbnksIG9iamVjdDphbnkpOiB2b2lkIHtcclxuICBvYmplY3QuZ3JpZC5jYW5jZWw7XHJcbiAgb2JqZWN0LmdyaWQuZGF0YSA9IG51bGw7XHJcbiAgICBvYmplY3QuQm9keSA9IFtdO1xyXG5cclxuICBvYmplY3QuaXNTZWFyY2ggPSB0cnVlO1xyXG4gIGlmIChvYmplY3QucGFyYW1Db25maWcuREVCVUdfRkxBRykgY29uc29sZS5sb2coXCJvYmplY3QuaXNTZWFyY2g6XCIgKyBvYmplY3QuaXNTZWFyY2gpO1xyXG4gIG9iamVjdC5hZGRIYW5kbGVyKCk7XHJcbiAgb2JqZWN0LmNsZWFyQ29tcGxldGVkT3V0cHV0LmVtaXQob2JqZWN0LmZvcm1Jbml0aWFsVmFsdWVzKTtcclxuICBvYmplY3Quc3RhclNlcnZpY2VzLnNldFByaW1hcktleU5hbWVBcnIob2JqZWN0LCBmYWxzZSk7XHJcbiAgb2JqZWN0LnN0YXJTZXJ2aWNlcy5oZWxwTXNnX2dyaWQgPSAgdGhpcy5nZXROTFMoW10sXCJIRUxQX0VOVEVSX1FVRVJZXCIsdGhpcy5lbnRlclF1ZXJ5TXNnKTtcclxuXHJcbn1cclxuXHJcbiAgcHVibGljIGVudGVyUXVlcnlfZ3JpZChncmlkOiBhbnksIG9iamVjdDphbnkpOiB2b2lkIHtcclxuICAgIGxldCBkaXJ0eSA9IGZhbHNlO1xyXG4gICAgaWYgKHRoaXMucGFyYW1Db25maWcuREVCVUdfRkxBRykgY29uc29sZS5sb2coXCJwcmUgb2JqZWN0LnNhdmVDdXJyZW50XCIpO1xyXG4gICAgb2JqZWN0LnNhdmVDdXJyZW50KCk7XHJcbiAgICBsZXQgbW9kaWZpZWQgPSBmYWxzZTtcclxuICAgIGlmICh0aGlzLnBhcmFtQ29uZmlnLkRFQlVHX0ZMQUcpIGNvbnNvbGUubG9nKFwib2JqZWN0LmdyaWQuZGF0YVwiKTtcclxuICAgIGlmIChvYmplY3QuZ3JpZC5kYXRhICE9IG51bGwpIHtcclxuICAgICAgaWYgKHR5cGVvZiBvYmplY3QuZ3JpZC5kYXRhLmRhdGEgIT09IFwidW5kZWZpbmVkXCIpIHtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG9iamVjdC5ncmlkLmRhdGEuZGF0YS5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgaWYgKHRoaXMucGFyYW1Db25maWcuREVCVUdfRkxBRykgY29uc29sZS5sb2coXCJjaGVjazogaTpcIiwgaSwgXCIgb2JqZWN0LmdyaWQuZGF0YS5kYXRhW2ldLl9RVUVSWTpcIiwgb2JqZWN0LmdyaWQuZGF0YS5kYXRhW2ldLl9RVUVSWSlcclxuICAgICAgICAgIGlmICh0eXBlb2Ygb2JqZWN0LmdyaWQuZGF0YS5kYXRhW2ldLl9RVUVSWSAhPT0gXCJ1bmRlZmluZWRcIikge1xyXG4gICAgICAgICAgICBtb2RpZmllZCA9IHRydWU7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy5wYXJhbUNvbmZpZy5ERUJVR19GTEFHKSBjb25zb2xlLmxvZyhcIm9iamVjdC5zYXZlQ3VycmVudCA6XCIgKyBvYmplY3QuQm9keS5sZW5ndGggKyBcIiBcIiArIG9iamVjdC5ncmlkLmlzRWRpdGluZygpKTtcclxuICAgIGlmIChvYmplY3QuQm9keS5sZW5ndGggIT0gMCkge1xyXG4gICAgICBtb2RpZmllZCA9IHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKChtb2RpZmllZCA9PSB0cnVlKSB8fCBvYmplY3QuZ3JpZC5pc0VkaXRpbmcoKSA9PSB0cnVlKSB7XHJcbiAgICAgIGRpcnR5ID0gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoZGlydHkgPT0gdHJ1ZSkge1xyXG4gICAgICBsZXQgZGlhbG9nU3RydWMgPSB7XHJcbiAgICAgICAgbXNnOiB0aGlzLnNhdmVDaGFuZ2VzTXNnLFxyXG4gICAgICAgIHRpdGxlOiB0aGlzLnBsZWFzZUNvbmZpcm1Nc2csXHJcbiAgICAgICAgaW5mbzogZ3JpZCxcclxuICAgICAgICBvYmplY3Q6IG9iamVjdCxcclxuICAgICAgICBhY3Rpb246IHRoaXMuWWVzTm9BY3Rpb25zLFxyXG4gICAgICAgIGNhbGxiYWNrOiB0aGlzLmVudGVyUXVlcnlBY3RfZ3JpZFxyXG4gICAgICB9O1xyXG4gICAgICAgIHRoaXMuc2hvd0NvbmZpcm1hdGlvbihkaWFsb2dTdHJ1Yyk7XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgdGhpcy5lbnRlclF1ZXJ5QWN0X2dyaWQoZ3JpZCwgb2JqZWN0KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHB1YmxpYyBzZXRTdHJBdXRoKHVzZXI6YW55LCBwYXNzd29yZDphbnkpIHtcclxuICAgIHRoaXMuU3RyQXV0aCA9IHVzZXIgKyBcIjpcIiArIHBhc3N3b3JkO1xyXG4gICAgdGhpcy5TdHJBdXRoID0gYnRvYSh0aGlzLlN0ckF1dGgpO1xyXG4gICAgdGhpcy5TdHJBdXRoID0gXCJCYXNpYyBcIiArIHRoaXMuU3RyQXV0aDtcclxuICB9XHJcbiAgcHVibGljIGlzQVNDSUkoc3RyKSB7XHJcbiAgICByZXR1cm4gL15bXFx4MDAtXFx4N0ZdKiQvLnRlc3Qoc3RyKTtcclxuICB9XHJcbiAgcHVibGljIGxvZ2luKG9iamVjdDphbnksIHVzZXI6YW55LCBwYXNzd29yZDphbnkpIHtcclxuICAgIGlmICghdGhpcy5pc0FTQ0lJKHVzZXIpKXtcclxuICAgICAgdGhpcy5zaG93Tm90aWZpY2F0aW9uKFwiZXJyb3JcIiwgXCLZkHJyb3I6IFwiICsgXCJOb3QgYSB2YWxpZCBVc2VyIE5hbWVcIik7XHJcbn1cclxuICAgIHRoaXMucGFyYW1Db25maWcgPSBnZXRQYXJhbUNvbmZpZygpO1xyXG4gICAgLy9jb25zb2xlLmxvZyhcInRoaXMucGFyYW1Db25maWc6XCIsIHRoaXMucGFyYW1Db25maWcpXHJcbiAgICB0aGlzLnNldFN0ckF1dGgodXNlciwgcGFzc3dvcmQpO1xyXG4gICAgLy9pZiAodGhpcy5wYXJhbUNvbmZpZy5ERUJVR19GTEFHKSBjb25zb2xlLmxvZyhcInRoaXMuU3RyQXV0aDpcIiArIHRoaXMuU3RyQXV0aCk7XHJcblxyXG5cclxuICAgIGxldCBQYWdlID0gXCJcIjtcclxuICAgIGxldCBzdWNjZXNzID0gZmFsc2U7XHJcbiAgICBjb25zdCBtZDUgPSBuZXcgTWQ1KCk7XHJcbiAgICBsZXQgcGFzcyA9IG1kNS5hcHBlbmRTdHIocGFzc3dvcmQpLmVuZCgpO1xyXG4gICAgdXNlciA9IHVzZXIudG9VcHBlckNhc2UoKS50cmltKCk7XHJcbiAgICB1c2VyID0gdXNlci50cmltKCk7XHJcbiAgICBsZXQgTmV3VmFsOmFueSA9IHtcclxuICAgICAgXCJVU0VSTkFNRVwiOiB1c2VyLFxyXG4gICAgICBcIlBBU1NXT1JEXCI6IHBhc3NcclxuICAgIH07XHJcblxyXG5cclxuICAgIE5ld1ZhbFtcIl9RVUVSWVwiXSA9IFwiVkVSSUZZX0FETV9VU0VSXCI7XHJcbiAgICBvYmplY3QuQm9keT1bXTtcclxuICAgIG9iamVjdC5hZGRUb0JvZHkoTmV3VmFsKTtcclxuICAgIFxyXG4gICAgbGV0IHBhcmFtQ29uZmlnID0ge1xyXG4gICAgICBcIk5hbWVcIjogXCJVU0VSTkFNRVwiLFxyXG4gICAgICBcIlZhbFwiOiB1c2VyXHJcbiAgICB9O1xyXG4gICAgc2V0UGFyYW1Db25maWcocGFyYW1Db25maWcpO1xyXG4gICAgdGhpcy5zZXNzaW9uUGFyYW1zW1wiVVNFUk5BTUVcIl0gPSB1c2VyO1xyXG5cclxuICAgIHRoaXMucG9zdChvYmplY3QsIFBhZ2UsIG9iamVjdC5Cb2R5KS5zdWJzY3JpYmUocmVzdWx0ID0+IHtcclxuICAgICAgaWYgKHR5cGVvZiByZXN1bHQuZGF0YVswXS5kYXRhWzBdICE9PSBcInVuZGVmaW5lZFwiKSB7XHJcbiAgICAgICAgaWYgKHRoaXMucGFyYW1Db25maWcuREVCVUdfRkxBRykgY29uc29sZS5sb2coXCJPYmplY3QgaW4gbG9naW4gSEZcIiwgb2JqZWN0LkJvZHksIHVzZXIpO1xyXG4gICAgICAgIGlmIChyZXN1bHQuZGF0YVswXS5kYXRhWzBdLlVTRVJOQU1FID09IHVzZXIpIHtcclxuICAgICAgICAgIHRoaXMuVVNFUk5BTUUgPSB1c2VyO1xyXG4gICAgICAgICAgb2JqZWN0LkJvZHkgPSBbXTtcclxuXHJcbiAgICAgICAgICBsZXQgcGFyYW1Db25maWcgPSB7XHJcbiAgICAgICAgICAgIFwiTmFtZVwiOiBcIlVTRVJfSU5GT1wiLFxyXG4gICAgICAgICAgICBcIlZhbFwiOiByZXN1bHQuZGF0YVswXS5kYXRhWzBdXHJcbiAgICAgICAgICB9O1xyXG4gICAgICAgICAgc2V0UGFyYW1Db25maWcocGFyYW1Db25maWcpO1xyXG4gICAgICAgICAgdGhpcy5zZXNzaW9uUGFyYW1zW1wiVVNFUl9JTkZPXCJdID0gcmVzdWx0LmRhdGFbMF0uZGF0YVswXTtcclxuICAgICAgICAgIGxldCBhZGFwdGVyID0gcmVzdWx0LmRhdGFbMF1bJ19EQl9BZEFwVG9yJ107XHJcbiAgICAgICAgICBpZiAodHlwZW9mIGFkYXB0ZXIgIT09IFwidW5kZWZpbmVkXCIpe1xyXG4gICAgICAgICAgICB0aGlzLnNlc3Npb25QYXJhbXNbXCJEQl9BREFQVE9SXCJdID0gYWRhcHRlci50b1VwcGVyQ2FzZSgpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgdGhpcy5VU0VSX0lORk8gPSByZXN1bHQuZGF0YVswXS5kYXRhWzBdO1xyXG4gICAgICAgICAgaWYgKCh0aGlzLnNlc3Npb25QYXJhbXMuVVNFUl9JTkZPLk1BU1RFUl9EQiAhPSBcIlwiKSAmJiAodHlwZW9mIHRoaXMuc2Vzc2lvblBhcmFtcy5VU0VSX0lORk8uTUFTVEVSX0RCICE9PSBcInVuZGVmaW5lZFwiKSl7XHJcbiAgICAgICAgICAgIHRoaXMuTUFTVEVSX0RCID0gdGhpcy5zZXNzaW9uUGFyYW1zLlVTRVJfSU5GTy5NQVNURVJfREI7XHJcbiAgICAgICAgICAgIHRoaXMuVVNFUk5BTUVfREIgPSB0aGlzLnNlc3Npb25QYXJhbXMuVVNFUl9JTkZPLk1BU1RFUl9EQjtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgICAgICBcclxuXHJcblxyXG4gICAgICAgICAgc3VjY2VzcyA9IHRydWU7XHJcbiAgICAgICAgICB0aGlzLmxvYWRSdWxlcyhvYmplY3QpO1xyXG4gICAgICAgICAgaWYgKChvYmplY3QudGVzdEVLWUMpIHx8KG9iamVjdC5uYXZUby5sZW5ndGghPTApfHwob2JqZWN0LnNoYXJlVG8ubGVuZ3RoIT0wKSkge1xyXG4gICAgICAgICAgICBvYmplY3QubG9naW5Db21wbGV0ZWRIYW5kbGVyKG51bGwpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICBvYmplY3QubG9naW5Db21wbGV0ZWQuZW1pdCh0aGlzKTtcclxuXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIGlmICghc3VjY2VzcylcclxuICAgICAgICB0aGlzLnNob3dOb3RpZmljYXRpb24oXCJlcnJvclwiLCBcImVycm9yOlwiICsgXCJXcm9uZyB1c2VyIG9yIHBhc3N3b3JkXCIpO1xyXG5cclxuXHJcblxyXG4gICAgfSxcclxuICAgIGVyciA9PiB7XHJcbiAgICAgICAgb2JqZWN0LkJvZHkgPSBbXTtcclxuICAgICAgICB0aGlzLnNob3dOb3RpZmljYXRpb24oXCJlcnJvclwiLCBcImVycm9yOlwiICsgXCJXcm9uZyB1c2VyIG9yIHBhc3N3b3JkXCIpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgdXNlckFkZGVkID0gZmFsc2U7XHJcbiAgcHVibGljIGFkZFVzZXJJbmZvKG9iamVjdDphbnksIHVzZXJuYW1lOmFueSwgdmFsdWU6YW55KSB7XHJcbiAgICB0aGlzLnBhcmFtQ29uZmlnID0gZ2V0UGFyYW1Db25maWcoKTtcclxuICAgIGxldCBQYWdlID0gXCJcIjtcclxuICAgIGxldCBzdWNjZXNzID0gZmFsc2U7XHJcbiAgICB1c2VybmFtZSA9IHVzZXJuYW1lLnRvVXBwZXJDYXNlKCkudHJpbSgpO1xyXG4gICAgdXNlcm5hbWUgPSB1c2VybmFtZS50cmltKCk7XHJcbiAgICBsZXQgZCA9IG5ldyBEYXRlKCk7XHJcbiAgICBsZXQgZGF0ZUlzbyA9IHRoaXMuRk9STUFUX0lTTyhkKTtcclxuICAgIGxldCBib2R5ID1bXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIFwiX1FVRVJZXCI6XCJJTlNFUlRfQURNX1VTRVJfSU5GT1JNQVRJT05cIixcclxuICAgICAgICAgICAgICAgIFwiVVNFUk5BTUVcIjp1c2VybmFtZSxcclxuICAgICAgICAgICAgICAgIFwiRU1BSUxcIjp2YWx1ZS5lbWFpbCxcclxuICAgICAgICAgICAgICAgIFwiRlVMTE5BTUVcIiA6IHZhbHVlLmZpcnN0TmFtZSArIFwiIFwiICsgdmFsdWUubGFzdE5hbWUgLFxyXG4gICAgICAgICAgICAgICAgXCJGTEVYX0ZMRDFcIiA6IHZhbHVlLmlkLFxyXG4gICAgICAgICAgICAgICAgXCJHUk9VUE5BTUVcIjogb2JqZWN0LmtleWNMb2FrLktFWUNMT0FLX1VTRVJfR1JPVVAsXHJcbiAgICAgICAgICAgICAgICBcIkxPR0RBVEVcIjogbmV3IERhdGUoKSxcclxuICAgICAgICAgICAgICAgIFwiTE9HTkFNRVwiOiB1c2VybmFtZVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICBdXHJcblxyXG4gICAgdGhpcy5wb3N0KG9iamVjdCwgUGFnZSwgYm9keSkuc3Vic2NyaWJlKHJlc3VsdCA9PiB7XHJcbiAgICAgICBzdWNjZXNzID0gdHJ1ZTtcclxuICAgICAgIGNvbnNvbGUubG9nKFwicmVzdWx0Omluc2VydDpcIiwgcmVzdWx0LmRhdGFbMF0pXHJcbiAgICAgIGlmICh0eXBlb2YgcmVzdWx0LmRhdGFbMF0gIT09IFwidW5kZWZpbmVkXCIpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcInJlc3VsdDpcIiwgcmVzdWx0LmRhdGFbMF0pXHJcbiAgICAgICAgICBzdWNjZXNzID0gdHJ1ZTtcclxuICAgICAgICAgIHRoaXMudXNlckFkZGVkID0gdHJ1ZTtcclxuICAgICAgICAgIHRoaXMuZ2V0VXNlckluZm8ob2JqZWN0LCB1c2VybmFtZSwgdmFsdWUpO1xyXG4gICAgICAgICAgXHJcbiAgICAgIH1cclxuICAgICAgaWYgKCFzdWNjZXNzKXtcclxuICAgICAgICBcclxuICAgICAgICBsZXQgZXJyb3JNc2cgPSBcIk5vdCBhYmxlIHRvIGFkZCBcIiArIHVzZXJuYW1lICsgXCIgdHAgIERCXCI7XHJcbiAgICAgICAgbGV0IGRpYWxvZ1N0cnVjID0ge1xyXG4gICAgICAgICAgbXNnOiBlcnJvck1zZyxcclxuICAgICAgICAgIHRpdGxlOiBcIkVycm9yXCIsXHJcbiAgICAgICAgICBpbmZvOiBudWxsLFxyXG4gICAgICAgICAgb2JqZWN0OiBvYmplY3QsXHJcbiAgICAgICAgICBhY3Rpb246IG51bGwsXHJcbiAgICAgICAgICBjYWxsYmFjazogbnVsbFxyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy5zaG93Q29uZmlybWF0aW9uKGRpYWxvZ1N0cnVjKTtcclxuICAgICAgIFxyXG4gICAgICAgLy8gb2JqZWN0LmxvZ29mZigzMDAwKTtcclxuICAgICAgfVxyXG5cclxuXHJcblxyXG4gICAgfSxcclxuICAgICAgZXJyID0+IHtcclxuICAgICAgICBvYmplY3QuQm9keSA9IFtdO1xyXG4gICAgICAgIGxldCBlcnJvck1zZyA9IFwiIEVycm9yIGNvbm5lY3RpbmcgdG8gIERCXCI7XHJcbiAgICAgICAgbGV0IGRpYWxvZ1N0cnVjID0ge1xyXG4gICAgICAgICAgbXNnOiBlcnJvck1zZyxcclxuICAgICAgICAgIHRpdGxlOiBcIkVycm9yXCIsXHJcbiAgICAgICAgICBpbmZvOiBudWxsLFxyXG4gICAgICAgICAgb2JqZWN0OiBvYmplY3QsXHJcbiAgICAgICAgICBhY3Rpb246IG51bGwsXHJcbiAgICAgICAgICBjYWxsYmFjazogbnVsbFxyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy5zaG93Q29uZmlybWF0aW9uKGRpYWxvZ1N0cnVjKTtcclxuICAgICAgIC8vIG9iamVjdC5sb2dvZmYoMzAwMCk7XHJcbiAgICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGdldFVzZXJJbmZvKG9iamVjdDphbnksIHVzZXI6YW55LCB2YWx1ZTphbnkpIHtcclxuICAgIHRoaXMucGFyYW1Db25maWcgPSBnZXRQYXJhbUNvbmZpZygpO1xyXG4gICAgbGV0IFBhZ2UgPSBcIlwiO1xyXG4gICAgbGV0IHN1Y2Nlc3MgPSBmYWxzZTtcclxuICAgIHVzZXIgPSB1c2VyLnRvVXBwZXJDYXNlKCkudHJpbSgpO1xyXG4gICAgdXNlciA9IHVzZXIudHJpbSgpO1xyXG4gICAgbGV0IE5ld1ZhbDphbnkgPSB7XHJcbiAgICAgIFwiVVNFUk5BTUVcIjogdXNlclxyXG4gICAgfTtcclxuXHJcblxyXG4gICAgTmV3VmFsW1wiX1FVRVJZXCJdID0gXCJHRVRfQURNX1VTRVJfSU5GT1JNQVRJT05cIjtcclxuICAgIG9iamVjdC5Cb2R5PVtdO1xyXG4gICAgb2JqZWN0LmFkZFRvQm9keShOZXdWYWwpO1xyXG5cclxuICAgIGxldCBwYXJhbUNvbmZpZyA9IHtcclxuICAgICAgXCJOYW1lXCI6IFwiVVNFUk5BTUVcIixcclxuICAgICAgXCJWYWxcIjogdXNlclxyXG4gICAgfTtcclxuICAgIHNldFBhcmFtQ29uZmlnKHBhcmFtQ29uZmlnKTtcclxuICAgIHRoaXMuc2Vzc2lvblBhcmFtc1tcIlVTRVJOQU1FXCJdID0gdXNlcjtcclxuXHJcbiAgICB0aGlzLnBvc3Qob2JqZWN0LCBQYWdlLCBvYmplY3QuQm9keSkuc3Vic2NyaWJlKHJlc3VsdCA9PiB7XHJcbiAgICAgIGlmICh0eXBlb2YgcmVzdWx0LmRhdGFbMF0uZGF0YVswXSAhPT0gXCJ1bmRlZmluZWRcIikge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwicmVzdWx0OmdldDpcIiwgcmVzdWx0LmRhdGFbMF0uZGF0YVswXSlcclxuICAgICAgICBpZiAocmVzdWx0LmRhdGFbMF0uZGF0YVswXS5VU0VSTkFNRSA9PSB1c2VyKSB7XHJcbiAgICAgICAgICB0aGlzLlVTRVJOQU1FID0gdXNlcjtcclxuICAgICAgICAgIG9iamVjdC5Cb2R5ID0gW107XHJcblxyXG4gICAgICAgICAgbGV0IHBhcmFtQ29uZmlnID0ge1xyXG4gICAgICAgICAgICBcIk5hbWVcIjogXCJVU0VSX0lORk9cIixcclxuICAgICAgICAgICAgXCJWYWxcIjogcmVzdWx0LmRhdGFbMF0uZGF0YVswXVxyXG4gICAgICAgICAgfTtcclxuICAgICAgICAgIHNldFBhcmFtQ29uZmlnKHBhcmFtQ29uZmlnKTtcclxuICAgICAgICAgIHRoaXMuc2Vzc2lvblBhcmFtc1tcIlVTRVJfSU5GT1wiXSA9IHJlc3VsdC5kYXRhWzBdLmRhdGFbMF07XHJcbiAgICAgICAgICBsZXQgYWRhcHRlciA9IHJlc3VsdC5kYXRhWzBdWydfREJfQWRBcFRvciddO1xyXG4gICAgICAgICAgaWYgKHR5cGVvZiBhZGFwdGVyICE9PSBcInVuZGVmaW5lZFwiKXtcclxuICAgICAgICAgICAgdGhpcy5zZXNzaW9uUGFyYW1zW1wiREJfQURBUFRPUlwiXSA9IGFkYXB0ZXIudG9VcHBlckNhc2UoKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIHRoaXMuVVNFUl9JTkZPID0gcmVzdWx0LmRhdGFbMF0uZGF0YVswXTtcclxuICAgICAgICAgIGlmICgodGhpcy5zZXNzaW9uUGFyYW1zLlVTRVJfSU5GTy5NQVNURVJfREIgIT0gXCJcIikgJiYgKHR5cGVvZiB0aGlzLnNlc3Npb25QYXJhbXMuVVNFUl9JTkZPLk1BU1RFUl9EQiAhPT0gXCJ1bmRlZmluZWRcIikpe1xyXG4gICAgICAgICAgICB0aGlzLk1BU1RFUl9EQiA9IHRoaXMuc2Vzc2lvblBhcmFtcy5VU0VSX0lORk8uTUFTVEVSX0RCO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIFxyXG5cclxuXHJcblxyXG4gICAgICAgICAgc3VjY2VzcyA9IHRydWU7XHJcbiAgICAgICAgICB0aGlzLmxvYWRSdWxlcyhvYmplY3QpO1xyXG4gICAgICAgICAgaWYgKChvYmplY3QudGVzdEVLWUMpIHx8KG9iamVjdC5uYXZUby5sZW5ndGghPTApKSB7XHJcbiAgICAgICAgICAgIG9iamVjdC5sb2dpbkNvbXBsZXRlZEhhbmRsZXIobnVsbCk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgIG9iamVjdC5sb2dpbkNvbXBsZXRlZEhhbmRsZXIodGhpcyk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIGNvbnNvbGUubG9nKFwicmVzdWx0OnN1Y2Nlc3M6XCIsc3VjY2VzcylcclxuICAgICAgaWYgKCFzdWNjZXNzKXtcclxuICAgICAgICBpZiAoIXRoaXMudXNlckFkZGVkKVxyXG4gICAgICAgICAgdGhpcy5hZGRVc2VySW5mbyhvYmplY3QsIHVzZXIsIHZhbHVlKTtcclxuICAgICAgICBlbHNle1xyXG4gICAgICAgICAgLy8gbGV0IGVycm9yTXNnID0gdXNlciArIFwiaXMgbm90IGRlZmluZWQgaW4gU1RBUiBEQlwiO1xyXG4gICAgICAgICAgLy8gbGV0IGRpYWxvZ1N0cnVjID0ge1xyXG4gICAgICAgICAgLy8gICBtc2c6IGVycm9yTXNnLFxyXG4gICAgICAgICAgLy8gICB0aXRsZTogXCJFcnJvclwiLFxyXG4gICAgICAgICAgLy8gICBpbmZvOiBudWxsLFxyXG4gICAgICAgICAgLy8gICBvYmplY3Q6IG9iamVjdCxcclxuICAgICAgICAgIC8vICAgYWN0aW9uOiBudWxsLFxyXG4gICAgICAgICAgLy8gICBjYWxsYmFjazogbnVsbFxyXG4gICAgICAgICAgLy8gfTtcclxuICAgICAgICAgIC8vIHRoaXMuc2hvd0NvbmZpcm1hdGlvbihkaWFsb2dTdHJ1Yyk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgICAvLyBvYmplY3QubG9nb2ZmKDMwMDApO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuXHJcblxyXG4gICAgfSxcclxuICAgICAgZXJyID0+IHtcclxuICAgICAgICBvYmplY3QuQm9keSA9IFtdO1xyXG4gICAgICAgIGxldCBlcnJvck1zZyA9IFwiIEVycm9yIGNvbnRhY3RpbmcgREIgdG8gdmVyaWZ5IHVzZXIgXCIgKyB1c2VyO1xyXG4gICAgICAgIGxldCBkaWFsb2dTdHJ1YyA9IHtcclxuICAgICAgICAgIG1zZzogZXJyb3JNc2csXHJcbiAgICAgICAgICB0aXRsZTogXCJFcnJvclwiLFxyXG4gICAgICAgICAgaW5mbzogbnVsbCxcclxuICAgICAgICAgIG9iamVjdDogb2JqZWN0LFxyXG4gICAgICAgICAgYWN0aW9uOiBudWxsLFxyXG4gICAgICAgICAgY2FsbGJhY2s6IG51bGxcclxuICAgICAgICB9O1xyXG4gICAgICAgIHRoaXMuc2hvd0NvbmZpcm1hdGlvbihkaWFsb2dTdHJ1Yyk7XHJcbiAgICAgICAvL29iamVjdC5sb2dvZmYoMzAwMCk7XHJcbiAgICAgIH0pO1xyXG4gIH1cclxuICBwdWJsaWMgcnVsZXNQb3N0UXVlcnlEZWYgPSB7XHJcbiAgICBydWxlUHRyc0Fycjoge30sXHJcbiAgICBydWxlc0FycjogW10sXHJcbiAgICBhY3Rpb25QdHJzQXJyOiB7fSxcclxuICAgIGFjdGlvbnNBcnI6IFtdXHJcbiAgfTtcclxuICBwdWJsaWMgcnVsZXNQcmVRdWVyeURlZiA9IHtcclxuICAgIHJ1bGVQdHJzQXJyOiB7fSxcclxuICAgIHJ1bGVzQXJyOiBbXSxcclxuICAgIGFjdGlvblB0cnNBcnI6IHt9LFxyXG4gICAgYWN0aW9uc0FycjogW11cclxuICB9O1xyXG4gIHB1YmxpYyBob3N0c0FyciA9IFtdO1xyXG4gIHB1YmxpYyBob3N0c01hcEFyciA9IFtdO1xyXG4gIC8vLy8vLy8vLy8vLy8vLy8vXHJcbiAgICBwdWJsaWMgTUFLRV9EQVRFICAodmFsKVxyXG5cdHtcclxuXHRcdHRyeSB7XHJcblx0XHRcdHZhciBkID0gbmV3IERhdGUodmFsKTtcclxuXHRcdFx0fSBjYXRjaCAoZSkge1xyXG5cdFx0XHRcdGNvbnNvbGUubG9nIChcIkVycm9yIHBhcnNpbmcgOjI6XCIsdmFsKTtcclxuXHRcdFx0XHRyZXR1cm4gMDtcclxuXHRcdFx0fVxyXG5cdFx0Y29uc29sZS5sb2cgKFwiY29ycmVjdCBwYXJzaW5nIDpcIix2YWwsIGQpO1xyXG5cdFx0dmFyIGRhdGVJc28gPSBkLnRvSVNPU3RyaW5nKCk7XHJcblx0XHQgdmFyIGRhdGVJc29BcnIgPSBkYXRlSXNvLnNwbGl0KFwiLlwiKTtcclxuXHRcdCBkYXRlSXNvID0gZGF0ZUlzb0FyclswXSArIFwiLjAwMFpcIjtcclxuICAgICBjb25zb2xlLmxvZyAoXCJjb3JyZWN0IHBhcnNpbmcgOlwiLHZhbCwgZCxkYXRlSXNvKTtcclxuXHRcdHJldHVybiBkYXRlSXNvO1xyXG5cdH1cclxuICBwdWJsaWMgRk9STUFUX0lTTyhkOmFueSkge1xyXG4gICAgdmFyIGRhdGVJc28gPSBkLnRvSVNPU3RyaW5nKCk7XHJcbiAgICB2YXIgZGF0ZUlzb0FyciA9IGRhdGVJc28uc3BsaXQoXCJUXCIpO1xyXG4gICAgZGF0ZUlzbyA9IGRhdGVJc29BcnJbMF0gKyBcIiBcIiArIGRhdGVJc29BcnJbMV07XHJcbiAgICBkYXRlSXNvID0gZGF0ZUlzby5zdWJzdHIoMCwgMTkpO1xyXG4gICAgcmV0dXJuIGRhdGVJc287XHJcbiAgfVxyXG4gIHB1YmxpYyBMb2dSdWxlKG9iamVjdDphbnksIHJ1bGVMb2c6YW55LCBtc2dSZXNwb25zZTphbnksIHN0YXR1czphbnkpIHtcclxuICAgIGZ1bmN0aW9uIHByZXBhcmVEYXRhRm9yREIoZGF0YUluOmFueSkge1xyXG5cclxuXHRcdFx0bGV0IGRhdGFPdXQgPSBKU09OLnN0cmluZ2lmeShkYXRhSW4pO1xyXG4gICAgICAvL2NvbnNvbGUubG9nKFwiZGF0YUluOlwiLCBkYXRhSW4sIFwiIGRhdGFPdXQ6XCIsIGRhdGFPdXQpO1xyXG5cdFx0XHRkYXRhT3V0ID0gZGF0YU91dC5zcGxpdChcIidcIikuam9pbignXCInKTtcclxuXHRcdFx0cmV0dXJuIGRhdGFPdXQ7XHJcblxyXG5cdFx0fVxyXG4gICAgaWYgKHR5cGVvZiBtc2dSZXNwb25zZSA9PSBcIm9iamVjdFwiKVxyXG5cdFx0XHRtc2dSZXNwb25zZSA9IEpTT04uc3RyaW5naWZ5KG1zZ1Jlc3BvbnNlKTtcclxuICAgIGlmICh0aGlzLnBhcmFtQ29uZmlnLkRFQlVHX0ZMQUcpIGNvbnNvbGUubG9nKFwiLS0tLS1tc2dSZXNwb25zZTpcIiwgbXNnUmVzcG9uc2UsIFwicnVsZUxvZzpcIiwgcnVsZUxvZyk7XHJcbiAgICBsZXQgZGIgPSBydWxlTG9nLmRiO1xyXG4gICAgbGV0IGQgPSBuZXcgRGF0ZSgpO1xyXG4gICAgbGV0IGRhdGVJc28gPSB0aGlzLkZPUk1BVF9JU08oZCk7XHJcblxyXG4gICAgbGV0IFJVTEVfS0VZID0gcnVsZUxvZy5ydWxlLlJVTEVfS0VZO1xyXG5cclxuICAgIGxldCBhcnJheSA9IFJVTEVfS0VZLnNwbGl0KFwiLFwiKTtcclxuICAgIC8vbGV0IHJ1bGVLZXkgPSB7fTtcclxuICAgIGxldCBydWxlS2V5ID0gXCJcIjtcclxuICAgIGxldCBydWxlS2V5TmFtZSA9IFwiXCI7XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFycmF5Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIGxldCBlbGVtID0gYXJyYXlbaV07XHJcbiAgICAgIGxldCBlbGVtX3ZhbHVlID0gcnVsZUxvZy5xdWVyeURhdGFbZWxlbV07XHJcbiAgICAgIGlmICh0eXBlb2YgZWxlbV92YWx1ZSAhPT0gXCJ1bmRlZmluZWRcIikge1xyXG5cdFx0XHRcdC8vcnVsZUtleVtlbGVtXSA9IGVsZW1fdmFsdWU7XHJcbiAgICAgICAgaWYgKHJ1bGVLZXkgIT0gXCJcIikge1xyXG5cdFx0XHRcdFx0cnVsZUtleSA9IHJ1bGVLZXkgKyBcIl9cIjtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0cnVsZUtleSA9IHJ1bGVLZXkgKyBlbGVtX3ZhbHVlO1xyXG5cclxuICAgICAgICBpZiAocnVsZUtleU5hbWUgIT0gXCJcIikge1xyXG5cdFx0XHRcdFx0cnVsZUtleU5hbWUgPSBydWxlS2V5TmFtZSArIFwiX1wiO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRydWxlS2V5TmFtZSA9IHJ1bGVLZXlOYW1lICsgZWxlbTtcclxuICAgICAgfVxyXG5cclxuICAgIH1cclxuICAgIGlmICh0aGlzLnBhcmFtQ29uZmlnLkRFQlVHX0ZMQUcpIGNvbnNvbGUubG9nKFwicnVsZUtleTpcIiwgcnVsZUtleSwgXCIgcnVsZUtleU5hbWU6XCIsIHJ1bGVLZXlOYW1lKTtcclxuXHJcblxyXG5cclxuICAgIGlmICh0aGlzLnBhcmFtQ29uZmlnLkRFQlVHX0ZMQUcpIGNvbnNvbGUubG9nKFwiUlVMRV9LRVk6XCIsIFJVTEVfS0VZKTtcclxuXHJcblxyXG4gICAgdmFyIHRlbXBsYXRlTmFtZSA9IHJ1bGVMb2cucXVlcnlEYXRhLlRFTVBMQVRFX05BTUU7XHJcbiAgICBsZXQgcXVlcnlEYXRhID0gcHJlcGFyZURhdGFGb3JEQihydWxlTG9nLnF1ZXJ5RGF0YSk7XHJcbiAgICAvL2xldCBib2R5VG9TZW5kID0gcHJlcGFyZURhdGFGb3JEQihydWxlTG9nLmJvZHlUb1NlbmQpO1xyXG4gICAgbGV0IGJvZHlUb1NlbmQgPSBydWxlTG9nLmJvZHlUb1NlbmQ7XHJcbiAgICBsZXQgcGFyYW1ldGVyc1RvU2VuZCA9IHByZXBhcmVEYXRhRm9yREIocnVsZUxvZy5wYXJhbWV0ZXJzVG9TZW5kKTtcclxuICAgLy8gbGV0IHJ1bGVLZXlTdHIgPSBwcmVwYXJlRGF0YUZvckRCKHJ1bGVLZXkpO1xyXG4gICAgbGV0IG1zZ1Jlc3BvbnNlU3RyID0gcHJlcGFyZURhdGFGb3JEQihtc2dSZXNwb25zZSk7XHJcblxyXG4gICAgaWYgKHRoaXMucGFyYW1Db25maWcuREVCVUdfRkxBRykgY29uc29sZS5sb2coXCJxdWVyeURhdGE6XCIgKyBxdWVyeURhdGEpO1xyXG5cclxuLy9cclxuICAgICAgICAgICAgICBsZXQgdXNlck5hbWUgPSBvYmplY3Quc3RhclNlcnZpY2VzLnNlc3Npb25QYXJhbXMuVVNFUl9JTkZPLk5hbWU7XHJcbiAgICBvYmplY3QuQm9keSA9IFtdO1xyXG4gICAgbGV0IFBhZ2UgPSBcIlwiO1xyXG4gICAgbGV0IE5ld1ZhbDphbnkgPSB7XHJcbiAgICAgIFwiUlVMRV9LRVlcIjogcnVsZUtleSxcclxuICAgICAgXCJSVUxFX0tFWV9OQU1FXCI6IHJ1bGVLZXlOYW1lLFxyXG4gICAgICBcIlNUQVRVU1wiOiBzdGF0dXMsXHJcbiAgICAgIFwiTU9EVUxFXCI6IHJ1bGVMb2cucnVsZS5NT0RVTEUsXHJcbiAgICAgIFwiUlVMRV9JRFwiOiBydWxlTG9nLnJ1bGUuUlVMRV9JRCxcclxuICAgICAgXCJBQ1RJT05fSURcIjogcnVsZUxvZy5hY3Rpb24uQUNUSU9OX0lELFxyXG4gICAgICBcIlNFTlRfREFURVwiOiBydWxlTG9nLnNlbnREYXRlLFxyXG4gICAgICBcIk1TR19SRUNFSVZFRFwiOiBxdWVyeURhdGEsXHJcbiAgICAgICAgICAgICAgICBcIlBBUkFNRVRFUl9TRU5UXCI6IHBhcmFtZXRlcnNUb1NlbmQsXHJcbiAgICAgIFwiQk9EWV9TRU5UXCI6IGJvZHlUb1NlbmQsXHJcbiAgICAgIFwiTVNHX1JFU1BPTlNFXCI6IG1zZ1Jlc3BvbnNlU3RyLFxyXG4gICAgICBcIkxPR0RBVEVcIjogZGF0ZUlzbyxcclxuICAgICAgXCJMT0dOQU1FXCI6IHVzZXJOYW1lLFxyXG4gICAgICBcIlRFTVBMQVRFX05BTUVcIiA6IHRlbXBsYXRlTmFtZVxyXG5cclxuICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgIE5ld1ZhbFtcIl9RVUVSWVwiXSA9IFwiSU5TRVJUX0FETV9SVUxFX0xPR1wiO1xyXG5cclxuICAgICAgICAgICAgICAvL2lmICh0aGlzLnBhcmFtQ29uZmlnLkRFQlVHX0ZMQUcpIGNvbnNvbGUubG9nKFwidGVzdDpOZXdWYWw6XCIsIE5ld1ZhbClcclxuICAgICAgICAgICAgICAvL2lmICh0aGlzLnBhcmFtQ29uZmlnLkRFQlVHX0ZMQUcpIGNvbnNvbGUubG9nKFwidGVzdDpvYmplY3QuQm9keTpcIiwgb2JqZWN0LkJvZHkpXHJcbiAgICAgICAgICAgICAgb2JqZWN0LmFkZFRvQm9keShOZXdWYWwpO1xyXG5cclxuXHJcbiAgICB0aGlzLnBvc3Qob2JqZWN0LCBQYWdlLCBvYmplY3QuQm9keSkuc3Vic2NyaWJlKHJlc3VsdCA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5wYXJhbUNvbmZpZy5ERUJVR19GTEFHKSBjb25zb2xlLmxvZyhcInRlc3Q6cmVzdWx0LmRhdGE6XCIsIHJlc3VsdC5kYXRhKTtcclxuICAgICAgb2JqZWN0LkJvZHkgPSBbXTtcclxuICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgIGVyciA9PiB7XHJcbiAgICAgICAgb2JqZWN0LkJvZHkgPSBbXTtcclxuICAgICAgICB0aGlzLnNob3dOb3RpZmljYXRpb24oXCJlcnJvclwiLCBcImVycm9yOlwiICsgZXJyLm1lc3NhZ2UpO1xyXG4gICAgICAgICAgICAgIH0pO1xyXG5cclxuXHJcblxyXG4gIH1cclxuICBwdWJsaWMgcGVyZm9ybUh0dHBQb3N0KG9iamVjdDphbnksIGJvZHlUb1NlbmQ6YW55LCBwYXJhbWV0ZXJzVG9TZW5kOmFueSwgc2VuZFRvOmFueSwgcXVlcnlEYXRhOmFueSwgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJ1bGU6YW55LCBhY3Rpb246YW55LCBUcmlnZ2VyOmFueSwgaG9zdERlZjphbnksIGhvc3RNYXBEZWY6YW55LCBoZWFkZXJQYXJhbTphbnksICBwYXRoRXh0cmE6YW55KSB7XHJcblxyXG4gICAgdmFyIHZhbGlkID0gZmFsc2U7XHJcbiAgICBsZXQgZXJyb3IgPSAwO1xyXG4gICAgbGV0IG1zZyA9IFwiXCI7XHJcblxyXG4gICAgbGV0IG9wdGlvbnM6YW55ID0ge1xyXG4gICAgICBob3N0OiAnJyxcclxuICAgICAgcGF0aDogJycsXHJcbiAgICAgIHBvcnQ6IDgwLFxyXG4gICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgaGVhZGVyczoge1xyXG4gICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG4gICAgICAgLy8nQ29udGVudC1UeXBlJzogJ3RleHQveG1sOyBjaGFyc2V0PXV0Zi04JyxcclxuICAgICAgXCJhdXRob3JpemF0aW9uXCI6IFwiXCJcclxuICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgIC8vIGlmICh0aGlzLnBhcmFtQ29uZmlnLkRFQlVHX0ZMQUcpIGNvbnNvbGUubG9nKFwiLS0tLS0tLS0tLS0tLS0tcmVxLnVybDpcIixyZXEudXJsKTtcclxuICAgLy8gaWYgKHRoaXMucGFyYW1Db25maWcuREVCVUdfRkxBRykgY29uc29sZS5sb2coXCItLS0tLS0tLS0tLS0tLS1wYXRobmFtZTpcIixyZXEuX3BhcnNlZFVybC5wYXRobmFtZSk7XHJcbiAgIC8vIGlmICh0aGlzLnBhcmFtQ29uZmlnLkRFQlVHX0ZMQUcpIGNvbnNvbGUubG9nKFwiLS0tLS0tLS0tLS0tLS0tcGF0aDpcIixyZXEuX3BhcnNlZFVybC5wYXRoKTtcclxuICAgIGxldCBkID0gbmV3IERhdGUoKTtcclxuICAgIGxldCBkYXRlSXNvID0gdGhpcy5GT1JNQVRfSVNPKGQpO1xyXG4gICAgaWYgKGhvc3REZWYgPT0gbnVsbClcclxuICAgICAgaG9zdERlZiA9IFwiXCI7XHJcblxyXG4gICAgbGV0IHJ1bGVMb2cgPSB7XHJcbiAgICAgIHJ1bGU6IHJ1bGUsXHJcbiAgICAgIGFjdGlvbjogYWN0aW9uLFxyXG4gICAgICBxdWVyeURhdGE6IHF1ZXJ5RGF0YSxcclxuICAgICAgYm9keVRvU2VuZDogYm9keVRvU2VuZCxcclxuICAgICAgcGFyYW1ldGVyc1RvU2VuZDogcGFyYW1ldGVyc1RvU2VuZCxcclxuICAgIC8vICBcImRiXCI6IGRiLFxyXG4gICAgICBzZW50RGF0ZTogZGF0ZUlzbyxcclxuICAgICAgaG9zdERlZjogaG9zdERlZlxyXG4gICAgfTtcclxuICAgIGlmIChzZW5kVG8gPT0gXCJXRlwiKSB7XHJcbiAgICAgIGxldCB1cmwgPSB0aGlzLkJBU0VfVVJMO1xyXG5cclxuICAgICAgb3B0aW9ucy5oZWFkZXJzLmF1dGhvcml6YXRpb24gPSB0aGlzLlN0ckF1dGg7XHJcblxyXG4gICAgICB2YWxpZCA9IHRydWU7XHJcblxyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgIGlmIChob3N0RGVmICE9IFwiXCIpIHtcclxuICAgICAgICBsZXQgcGF0aCA9IFwiL1wiICsgaG9zdERlZi5QQVRIO1xyXG4gICAgICAgIGlmIChwYXJhbWV0ZXJzVG9TZW5kICE9IFwiXCIpXHJcbiAgICAgICAgICBwYXRoID0gcGF0aCArIHBhcmFtZXRlcnNUb1NlbmQ7XHJcbiAgICAgICAgcGF0aCA9IHBhdGggKyBwYXRoRXh0cmE7XHJcbiAgICAgICAgbGV0IGhvc3QgPSBob3N0RGVmLkhPU1Q7XHJcbiAgICAgICAgbGV0IHBvcnQgPSBwYXJzZUludChob3N0RGVmLlBPUlQpO1xyXG4gICAgICAgIGxldCBtZXRob2QgPSBob3N0RGVmLkhUVFBfTUVUSE9EO1xyXG5cclxuICAgICAgICBvcHRpb25zLmhvc3QgPSBob3N0O1xyXG4gICAgICAgIG9wdGlvbnMucG9ydCA9IHBvcnQ7XHJcbiAgICAgICAgb3B0aW9ucy5wYXRoID0gcGF0aDtcclxuICAgICAgICBvcHRpb25zLm1ldGhvZCA9IG1ldGhvZDtcclxuICAgICAgIC8vIGxldCB1cmwgPSBcImh0dHA6Ly9cIiArIGhvc3QgKyBcIjpcIiArIHBvcnQgICsgcGF0aCArIHBhcmFtZXRlcnNUb1NlbmQgO1xyXG4gICAgICAgIGxldCB1cmw6IHN0cmluZyA9IGhvc3REZWYuVVJMO1xyXG4vL1x0XHRcdFx0XHRvcHRpb25zLmhlYWRlcnMuYXV0aG9yaXphdGlvbiA9IHJlcS5oZWFkZXJzLmF1dGhvcml6YXRpb247XHJcbiAgICAgICAgLy9ib2R5VG9TZW5kID0gXCJcIjtcclxuXHJcblxyXG4gICAgICAgIHZhbGlkID0gdHJ1ZTtcclxuICAgICAgfVxyXG4gICAgICBlbHNlIHtcclxuICAgICAgICBlcnJvciA9IDEwMDtcclxuICAgICAgICBtc2cgPSBcInVuZGVmaW5lZCBIb3N0IDpcIiArIHNlbmRUbztcclxuICAgICAgICB0aGlzLkxvZ1J1bGUob2JqZWN0LCBydWxlTG9nLCBtc2csIDEwMCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGlmICh0aGlzLnBhcmFtQ29uZmlnLkRFQlVHX0ZMQUcpIGNvbnNvbGUubG9nKFwiaGVyZTI6dmFsaWQ6XCIsIHZhbGlkKTtcclxuICAgIGlmICh2YWxpZCkge1xyXG4gICAgICBpZiAodGhpcy5wYXJhbUNvbmZpZy5ERUJVR19GTEFHKSBjb25zb2xlLmxvZyhcIm9wdGlvbnM6XCIsIG9wdGlvbnMpO1xyXG4gICAgICBpZiAodGhpcy5wYXJhbUNvbmZpZy5ERUJVR19GTEFHKSBjb25zb2xlLmxvZyhcIi0tLS0tLWJvZHlUb1NlbmQ6XCIgKyBib2R5VG9TZW5kLCBcIiAgVHJpZ2dlcjpcIiwgVHJpZ2dlcik7XHJcblxyXG4gICAgICBsZXQga2V5cyA9IE9iamVjdC5rZXlzKGhlYWRlclBhcmFtKTtcclxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBrZXlzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgaWYgKHRoaXMucGFyYW1Db25maWcuREVCVUdfRkxBRykgY29uc29sZS5sb2coa2V5c1tpXSArIFwiIFwiICsgaGVhZGVyUGFyYW1ba2V5c1tpXV0pO1xyXG4gICAgICAgIGlmIChoZWFkZXJQYXJhbVtrZXlzW2ldXSAhPSBudWxsKSB7XHJcbiAgICAgICAgICBvcHRpb25zLmhlYWRlcnNba2V5c1tpXV0gPSBoZWFkZXJQYXJhbVtrZXlzW2ldXTtcclxuXHJcbiAgICAgICAgICAvL3NjcmVlbkNvbmZpZ1sga2V5c1tpXSBdID0gY29tcG9uZW50Q29uZmlnWyBrZXlzW2ldIF07XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICBpZiAodGhpcy5wYXJhbUNvbmZpZy5ERUJVR19GTEFHKSBjb25zb2xlLmxvZyhcImhlcmUyOmFjdGlvbi5BQ1RJT05fQ09ERTpcIiwgYWN0aW9uLkFDVElPTl9DT0RFKTtcclxuICAgICAgaWYgKGFjdGlvbi5BQ1RJT05fQ09ERSA9PSBcIlNFTkRfV0FJVFwiKSB7XHJcbiAgICAgICAgLypcclxuICAgICAgICBsZXQgc2VuZGluZ0xpYiA9IFwicmVxdWVzdFwiO1xyXG4gICAgICAgIHN0YXR1cyA9IDE7XHJcbiAgICAgICAgbGV0IGhlYWRlcnMgID0gIHtoZWFkZXJzOm9wdGlvbnMuaGVhZGVyc307XHJcbiAgICAgICAgaWYgKHRoaXMucGFyYW1Db25maWcuREVCVUdfRkxBRykgY29uc29sZS5sb2coXCJoZWFkZXJzOlwiLCBoZWFkZXJzKTtcclxuICAgICAgICBsZXQgdXJsID0gXCJodHRwOi8vXCIgKyBob3N0ICsgXCI6XCIgKyBwb3J0ICArIHBhdGggKyBwYXJhbWV0ZXJzVG9TZW5kIDtcclxuICAgICAgICBpZiAodGhpcy5wYXJhbUNvbmZpZy5ERUJVR19GTEFHKSBjb25zb2xlLmxvZyhcIi0tLXVybDpcIiwgdXJsKTtcclxuICAgICAgICBpZiAobWV0aG9kID09IFwiR0VUXCIpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgbGV0IHJlcyA9IHJlcXVlc3QobWV0aG9kLCB1cmwsIGhlYWRlcnMpO1xyXG4gICAgICAgICAgbGV0IHJlc3VsdCA9IEpTT04ucGFyc2UocmVzLmdldEJvZHkoJ3V0ZjgnKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2VcclxuICAgICAgICBpZiAobWV0aG9kID09IFwiUE9TVFwiKVxyXG4gICAgICAgIHtcclxuXHJcbiAgICAgICAgICBsZXQgZGF0YUZvclN5bmMgPSB7IGJvZHkgOiBib2R5VG9TZW5kLCBoZWFkZXJzOm9wdGlvbnMuaGVhZGVyc307XHJcbiAgICAgICAgICBsZXQgcmVzID0gcmVxdWVzdChtZXRob2QsIHVybCwgZGF0YUZvclN5bmMpO1xyXG4gICAgICAgICAgaWYgKHRoaXMucGFyYW1Db25maWcuREVCVUdfRkxBRykgY29uc29sZS5sb2coXCJyZXM6XCIsIHJlcyk7XHJcbiAgICAgICAgICBsZXQgc3RhdHVzQ29kZSA9IHJlcy5zdGF0dXNDb2RlO1xyXG4gICAgICAgICAgbGV0IG1zZ1Jlc3BvbnNlID1cIlwiO1xyXG4gICAgICAgICAgaWYgKHN0YXR1c0NvZGUgPT0gMjAwKVxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBsZXQgY29udGVudFR5cGUgPSByZXMuaGVhZGVyc1snY29udGVudC10eXBlJ107XHJcblxyXG4gICAgICAgICAgICBsZXQgbXNnUmVzcG9uc2UgPSByZXMuZ2V0Qm9keSgndXRmOCcpO1xyXG4gICAgICAgICAgICBpZiAodGhpcy5wYXJhbUNvbmZpZy5ERUJVR19GTEFHKSBjb25zb2xlLmxvZyhcInN0YXR1c0NvZGU6XCIsIHN0YXR1c0NvZGUsXCIgaGVhZGVyczpcIiwgaGVhZGVycywgIFwiIG1zZ1Jlc3BvbnNlOlwiLCBtc2dSZXNwb25zZSk7XHJcbiAgICAgICAgICAgIGxldCBuID0gY29udGVudFR5cGUuc2VhcmNoKFwianNvblwiKTtcclxuICAgICAgICAgICAgaWYgKG4gIT0gLTEpXHJcbiAgICAgICAgICAgICAgbGV0IHJlc3VsdCA9IEpTT04uc3RyaW5naWZ5KEpTT04ucGFyc2UobXNnUmVzcG9uc2UpKTtcclxuICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICAgIGxldCByZXN1bHQgPSBtc2dSZXNwb25zZTtcclxuICAgICAgICAgICAgaWYgKHRoaXMucGFyYW1Db25maWcuREVCVUdfRkxBRykgY29uc29sZS5sb2coXCJyZXN1bHQ6XCIgKyAgcmVzdWx0KTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGVsc2VcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgZXJyb3IgPSBzdGF0dXNDb2RlO1xyXG4gICAgICAgICAgICBsZXQgbXNnUmVzcG9uc2UgPSByZXMuYm9keS50b1N0cmluZygpO1xyXG4gICAgICAgICAgICBtc2cgPSBtc2dSZXNwb25zZTtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChlcnJvciA9PSAwKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgIGlmICggKGhvc3RNYXBEZWYgIT0gbnVsbCkgJiYgIChob3N0TWFwRGVmLlhTTFRfUkVDRUlWRSAhPSBudWxsKSAmJiAoaG9zdE1hcERlZi5YU0xUX1JFQ0VJVkUgIT0gXCJcIikgKVxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgLy9yZXN1bHQgPSB4c2x0bWFwLm1hcERhdGFPdXQocmVzdWx0LCBob3N0TWFwRGVmLlhTTFRfUkVDRUlWRSk7XHJcbiAgICAgICAgICAgICAgLy9pZiAodGhpcy5wYXJhbUNvbmZpZy5ERUJVR19GTEFHKSBjb25zb2xlLmxvZyhcInJlc3VsdDpcIiwgcmVzdWx0KTtcclxuXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICBsZXQgc3RhdHVzID0gZXh0cmFjdFN0YXR1cyAocnVsZUxvZywgcmVzdWx0KTtcclxuICAgICAgICAgIExvZ1J1bGUocnVsZUxvZywgcmVzdWx0LCBzdGF0dXMgKTtcclxuICAgICAgICAgIGVycm9yID0gc3RhdHVzO1xyXG4gICAgICAgICAgaWYgKHN0YXR1cyAhPSAwKVxyXG4gICAgICAgICAgICBtc2cgPSByZXN1bHQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICovXHJcblxyXG5cclxuXHJcbiAgICAgIH1cclxuICAgICAgZWxzZSB7XHJcbiAgICAgICAgLy9hc3luY1xyXG4gICAgICAgIGZ1bmN0aW9uIGV4dHJhY3RTdGF0dXMocnVsZUxvZzphbnksIG1zZ1Jlc3BvbnNlOmFueSkge1xyXG4gICAgICAgICAgbGV0IHN1Y2Nlc3NNc2cgPSBydWxlTG9nLmhvc3REZWYuU1VDQ0VTU19NU0c7XHJcbiAgICAgICAgICBcclxuICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhcIi0tLS0tLS1tc2dSZXNwb25zZTpcIiwgbXNnUmVzcG9uc2UsIHN1Y2Nlc3NNc2cpO1xyXG4gICAgICAgICAgbGV0IGFycmF5ID0gc3VjY2Vzc01zZy5zcGxpdChcIjpcIik7XHJcbiAgICAgICAgICBsZXQgZmllbGQgPSBhcnJheVswXTtcclxuICAgICAgICAgIGxldCB2YWx1ZSA9IGFycmF5WzFdO1xyXG5cclxuICAgICAgICAgIGxldCBtc2dSZXNwb25zZUFyciA9IG1zZ1Jlc3BvbnNlO1xyXG4gICAgICAgICAgbXNnUmVzcG9uc2UgPSBKU09OLnN0cmluZ2lmeShtc2dSZXNwb25zZUFycik7XHJcbiAgICAgICAgICBcclxuICAgICAgICAgIC8vY29uc29sZS5sb2coXCJmaWVsZDpcIiwgZmllbGQsIFwiIHZhbHVlOlwiLCB2YWx1ZSwgXCIgbXNnUmVzcG9uc2VBcnI6XCIsIG1zZ1Jlc3BvbnNlQXJyKTtcclxuICAgICAgICAgIC8vY29uc29sZS5sb2coXCItLS0tLS0tbXNnUmVzcG9uc2VBcnJbZmllbGRdOlwiLCBtc2dSZXNwb25zZUFycltmaWVsZF0sIHZhbHVlKTtcclxuICAgICAgICAgIGxldCBzdGF0dXMgPSAxO1xyXG4gICAgICAgICAgaWYgKG1zZ1Jlc3BvbnNlQXJyW2ZpZWxkXSA9PSB2YWx1ZSlcclxuICAgICAgICAgICAgc3RhdHVzID0gMDtcclxuICAgICAgICAgIHJldHVybiBzdGF0dXM7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmdW5jdGlvbiBleHRyYWN0UmVzcG9uc2VEYXRhKG1zZ1Jlc3BvbnNlOmFueSwgcmVzcG9uc2VEYXRhSUQ6YW55KSB7XHJcbiAgICAgICAgICBmdW5jdGlvbiBnZXRLZXkoRWxtOmFueSwgZWxtVmFsOmFueSkge1xyXG4gICAgICAgICAgICAgICBsZXQga2V5cyA9IE9iamVjdC5rZXlzKEVsbSk7XHJcbiAgICAgICAgICAgIGxldCBrID0gMDtcclxuICAgICAgICAgICAgICAgbGV0IGVsbU9iajtcclxuICAgICAgICAgICAgd2hpbGUgKGsgPCBrZXlzLmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgIC8vY29uc29sZS5sb2coXCJba2V5c1trXTpcIiwga2V5c1trXSk7XHJcbiAgICAgICAgICAgICAgaWYgKGtleXNba10gPT0gZWxtVmFsKSB7XHJcbiAgICAgICAgICAgICAgICAgIGxldCBlbG1OYW1lID0ga2V5c1trXTtcclxuICAgICAgICAgICAgICAgICAgZWxtT2JqID0gRWxtW2VsbU5hbWVdO1xyXG4gICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhcImVsbU9iajpcIiwgZWxtT2JqKTtcclxuICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBrKys7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIHJldHVybiBlbG1PYmo7XHJcbiAgICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICAgICAgbGV0IGFycmF5ID0gcmVzcG9uc2VEYXRhSUQuc3BsaXQoXCIuXCIpO1xyXG4gICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhcnJheS5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBsZXQgcmV0dXJuS2V5ID0gZ2V0S2V5KG1zZ1Jlc3BvbnNlLCBhcnJheVtpXSlcclxuICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhcInJldHVybktleS5sZW5ndGg6XCIsIHJldHVybktleS5sZW5ndGgpO1xyXG4gICAgICAgICAgICBpZiAocmV0dXJuS2V5Lmxlbmd0aCA9PSAxKVxyXG4gICAgICAgICAgICAgIG1zZ1Jlc3BvbnNlID0gcmV0dXJuS2V5WzBdO1xyXG4gICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgICAgbXNnUmVzcG9uc2UgPSByZXR1cm5LZXk7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAvL2NvbnNvbGUubG9nKFwibXNnUmVzcG9uc2U6XCIsIG1zZ1Jlc3BvbnNlKTtcclxuXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICByZXR1cm4gbXNnUmVzcG9uc2U7XHJcblxyXG5cclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKlxyXG4gICAgICAgIGZ1bmN0aW9uICBoYW5kbGVSZXNwb25zZUVuZChydWxlTG9nLCBtc2dSZXNwb25zZSl7XHJcbiAgICAgICAgICBsZXQgc3RhdHVzID0gZXh0cmFjdFN0YXR1cyAocnVsZUxvZywgbXNnUmVzcG9uc2UpO1xyXG4gICAgICAgICAgdGhpcy5Mb2dSdWxlKHJ1bGVMb2csIG1zZ1Jlc3BvbnNlLCBzdGF0dXMpO1xyXG5cclxuXHJcbiAgICAgICAgICAvL1x0LlJVTEVfSUQgKyBcIixcIiArICBhY3Rpb24uQUNUSU9OX0lEICsgXCIsXCIgKyB1c2Vycy5nZXRVc2VyTmFtZSgpICsgXCIsXCIgICsgZGF0ZUlzbztcclxuICAgICAgICAgIGlmICh0aGlzLnBhcmFtQ29uZmlnLkRFQlVHX0ZMQUcpIGNvbnNvbGUubG9nKFwiLS0tLS0tLWhhbmRsZVJlc3BvbnNlOnN0YXR1czpcIiAsICBzdGF0dXMpO1xyXG4gICAgICAgIH1cclxuICAgICAgICAqL1xyXG4gICAgICAgIGZ1bmN0aW9uIGdldEJvZHkobXNnUmVzcG9uc2U6YW55KSB7XHJcbiAgICAgICAgICAvL2lmICh0aGlzLnBhcmFtQ29uZmlnLkRFQlVHX0ZMQUcpIGNvbnNvbGUubG9nKFwibXNnUmVzcG9uc2U6XCIsIG1zZ1Jlc3BvbnNlKVxyXG4gICAgICAgICAgLy9pZiAodGhpcy5wYXJhbUNvbmZpZy5ERUJVR19GTEFHKSBjb25zb2xlLmxvZyhcIm1zZ1Jlc3BvbnNlOmJvZHlcIiwgbXNnUmVzcG9uc2UuYm9keSlcclxuICAgICAgICAgIHJldHVybiBtc2dSZXNwb25zZS5ib2R5XHJcbiAgICAgICAgfVxyXG4gIC8qXHJcbiAgICAgICAgbGV0IGhhbmRsZVJlc3BvbnNlID0gZnVuY3Rpb24ocmVzcG9uc2UsICBydWxlTG9nKXtcclxuICAgICAgICAgIGxldCBtc2dSZXNwb25zZSA9ICcnXHJcbiAgICAgICAgICByZXNwb25zZS5vbignZGF0YScsIGZ1bmN0aW9uIChjaHVuaykge1xyXG4gICAgICAgICAgbXNnUmVzcG9uc2UgKz0gY2h1bms7XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICAgIHJlc3BvbnNlLm9uKCdlbmQnLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgaGFuZGxlUmVzcG9uc2VFbmQocnVsZUxvZywgbXNnUmVzcG9uc2UpO1xyXG4gICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICB9XHJcbiAgICAgICAgKi9cclxuXHJcbiAgICAgICAgbGV0IGhlYWRlcnMgPSB7XHJcbiAgICAgICAgICBoZWFkZXJzOiBuZXcgSHR0cEhlYWRlcnMoKVxyXG4gICAgICAgICAgICAuc2V0KCdBdXRob3JpemF0aW9uJywgdGhpcy5TdHJBdXRoKVxyXG4gICAgICAgICAgICAuc2V0KCdDb250ZW50LVR5cGUnLCBcImFwcGxpY2F0aW9uL2pzb25cIilcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMucGFyYW1Db25maWcuREVCVUdfRkxBRykgY29uc29sZS5sb2coXCJoZXJlMjpoZWFkZXJzOlwiLCBoZWFkZXJzKTtcclxuICAgICAgICBpZiAoYm9keVRvU2VuZCA9PSBcIlwiKVxyXG4gICAgICAgICAgYm9keVRvU2VuZCA9IG51bGw7XHJcbiAgICAgICAgbGV0IGJvZHlUb1NlbmRLU09OID0gSlNPTi5wYXJzZShib2R5VG9TZW5kKTtcclxuICAgICAgICBpZiAodGhpcy5wYXJhbUNvbmZpZy5ERUJVR19GTEFHKSBjb25zb2xlLmxvZyhcImhlcmUyOmJvZHlUb1NlbmRLU09OOlwiLCBib2R5VG9TZW5kS1NPTik7XHJcblxyXG4gICAgICAgIGxldCB1cmw6IHN0cmluZyA9IGhvc3REZWYuVVJMICsgcGFyYW1ldGVyc1RvU2VuZDtcclxuICAgICAgICBpZiAodGhpcy5wYXJhbUNvbmZpZy5ERUJVR19GTEFHKSBjb25zb2xlLmxvZyhcIi0tLXVybDpcIiwgdXJsKTtcclxuXHJcblxyXG4gICAgICAgIGNvbnN0IHJlcXVlc3QgPSBuZXcgSHR0cFJlcXVlc3QoXHJcbiAgICAgICAgICBvcHRpb25zLm1ldGhvZCwgdXJsLCBib2R5VG9TZW5kS1NPTiwgaGVhZGVycyk7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLnBhcmFtQ29uZmlnLkRFQlVHX0ZMQUcpIGNvbnNvbGUubG9nKFwiLS0tLS0tLS0tLS0tcmVxdWVzdDpcIiwgcmVxdWVzdCwgXCIgYm9keVRvU2VuZEtTT046XCIsIGJvZHlUb1NlbmRLU09OKVxyXG4gICAgICAgIGxldCBtc2dCb2R5QWxsOmFueTtcclxuICAgICAgICB0aGlzLnN5bmNGbGFnID0gMTtcclxuLy9odHRwczovL2RldmVsb3BwYXBlci5jb20vZ2V0dGluZy1zdGFydGVkLXdpdGgtYW5ndWxhci1odHRwLWNsaWVudC9cclxuICAgICAgICB0aGlzLmh0dHAucmVxdWVzdChyZXF1ZXN0KVxyXG4gICAgICAgICAgICAuc3Vic2NyaWJlKFxyXG4gICAgICAgICAgICAgICAgKHJlc3BvbnNlKSA9PiB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMucGFyYW1Db25maWcuREVCVUdfRkxBRykgY29uc29sZS5sb2coXCIgY2FsbCBzdWNjZXNzZnVsIHZhbHVlIHJldHVybmVkIGluIGJvZHlcIixcclxuICAgICAgICAgICAgICAgICAgICAgIHJlc3BvbnNlKTtcclxuICAgICAgICAgICAgICAgICAgICAgIGxldCBtc2dCb2R5ID0gZ2V0Qm9keShyZXNwb25zZSlcclxuICAgICAgICAgICAgICBpZiAodHlwZW9mIG1zZ0JvZHkgIT09IFwidW5kZWZpbmVkXCIpIHtcclxuICAgICAgICAgICAgICAgIG1zZ0JvZHlBbGwgPSBtc2dCb2R5O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5wYXJhbUNvbmZpZy5ERUJVR19GTEFHKSBjb25zb2xlLmxvZyhcIm1zZ0JvZHlBbGw6XCIsIG1zZ0JvZHlBbGwpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgZXJyb3IgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMucGFyYW1Db25maWcuREVCVUdfRkxBRykgY29uc29sZS5sb2coXCJQVVQgY2FsbCBpbiBlcnJvcjpcIiwgZXJyb3IpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgdGhpcy5zeW5jRmxhZyA9IDA7XHJcbiAgICAgICAgICAgICAgdGhpcy5zaG93Tm90aWZpY2F0aW9uKFwiZXJyb3JcIiwgXCJlcnJvciBjYWxsaW5nOiBcIiArIHVybCArIFwiOlwiICsgZXJyb3IuZXJyb3IuZXJyb3IpO1xyXG4gICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5wYXJhbUNvbmZpZy5ERUJVR19GTEFHKSBjb25zb2xlLmxvZyhcIlRoZSAgb2JzZXJ2YWJsZSBpcyBub3cgY29tcGxldGVkOm1zZ0JvZHlBbGw6XCIsIG1zZ0JvZHlBbGwpO1xyXG4gICAgICAgICAgICAgIGlmICh0eXBlb2YgbXNnQm9keUFsbCAhPT0gXCJ1bmRlZmluZWRcIikge1xyXG4gICAgICAgICAgICAgICAgbGV0IHN0YXR1cyA9IGV4dHJhY3RTdGF0dXMocnVsZUxvZywgbXNnQm9keUFsbCk7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5wYXJhbUNvbmZpZy5ERUJVR19GTEFHKSBjb25zb2xlLmxvZyhcIi0tLS0tLS11bGVMb2cucnVsZTpcIiwgcnVsZUxvZy5ydWxlKTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoVHJpZ2dlciA9PSBcIlBPU1RfUVVFUllcIikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGxldCByZXNwb25zZURhdGFJRCA9IHJ1bGVMb2cucnVsZS5SRVNQT05TRV9EQVRBX0lEO1xyXG4gICAgICAgICAgICAgICAgICBpZiAodGhpcy5wYXJhbUNvbmZpZy5ERUJVR19GTEFHKSBjb25zb2xlLmxvZyhcIlRBQlM6cmVzcG9uc2VEYXRhSUQ6XCIsIHJlc3BvbnNlRGF0YUlEKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgIGxldCByZXNwb25zZURhdGEgPSBleHRyYWN0UmVzcG9uc2VEYXRhKG1zZ0JvZHlBbGwsIHJlc3BvbnNlRGF0YUlEKTtcclxuICAgICAgICAgICAgICAgICAgaWYgKHRoaXMucGFyYW1Db25maWcuREVCVUdfRkxBRykgY29uc29sZS5sb2coXCJUQUJTOnJlc3BvbnNlRGF0YTpcIiwgcmVzcG9uc2VEYXRhLCBcInF1ZXJ5RGF0YTpcIiwgcXVlcnlEYXRhKTtcclxuICAgICAgICAgICAgICAgICAgaWYgKHRoaXMucGFyYW1Db25maWcuREVCVUdfRkxBRykgY29uc29sZS5sb2coXCJUQUJTOnJ1bGVMb2cucnVsZS5SRVNQT05TRV9EQVRBX05BTUU6XCIsIHJ1bGVMb2cucnVsZS5SRVNQT05TRV9EQVRBX05BTUUpO1xyXG4gICAgICAgICAgICAgICAgICBpZiAodHlwZW9mIHJlc3BvbnNlRGF0YSAhPT0gXCJ1bmRlZmluZWRcIikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb2JqZWN0W3J1bGVMb2cucnVsZS5SRVNQT05TRV9EQVRBX05BTUVdID0gcmVzcG9uc2VEYXRhO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMucGFyYW1Db25maWcuREVCVUdfRkxBRykgY29uc29sZS5sb2coXCJUQUJTOm9iamVjdC50YWJzQVBJUmVzcG9uc2U6XCIsIG9iamVjdC50YWJzQVBJUmVzcG9uc2UpXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN5bmNGbGFnID0gMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5Mb2dSdWxlKG9iamVjdCwgcnVsZUxvZywgbXNnQm9keUFsbCwgc3RhdHVzKTtcclxuICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAvKlxyXG4gICAgICAgIGxldCByZXFOZXcgPSB0aGlzLmh0dHAucmVxdWVzdChvcHRpb25zLCBmdW5jdGlvbihyZXNwb25zZSl7IGhhbmRsZVJlc3BvbnNlKHJlc3BvbnNlLCAgcnVsZUxvZyk7IH0pO1xyXG4gICAgICAgIHJlcU5ldy5vbignZXJyb3InLCBmdW5jdGlvbihlcnIpIHtcclxuICAgICAgICAgIC8vIEhhbmRsZSBlcnJvclxyXG4gICAgICAgICAgZXJyb3IgPSBlcnI7XHJcbiAgICAgICAgICBtc2cgPSBcIkVycm9yIHNlbmRpbmcgdG8gSG9zdCA6XCIgK3NlbmRUbyA7XHJcbiAgICAgICAgICBpZiAodGhpcy5wYXJhbUNvbmZpZy5ERUJVR19GTEFHKSBjb25zb2xlLmxvZyggbXNnICsgXCIgRXJyb3I6XCIgKyBlcnIgKTtcclxuICAgICAgICAgIHRoaXMuTG9nUnVsZShydWxlTG9nLCBtc2cgKyBcIiBFcnJvcjpcIiArIGVyciwgNDAwICk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLnBhcmFtQ29uZmlnLkRFQlVHX0ZMQUcpIGNvbnNvbGUubG9nKFwiaGVyZTFcIik7XHJcbiAgICAgICAgcmVxTmV3LndyaXRlKGJvZHlUb1NlbmQpO1xyXG4gICAgICAgIGlmICh0aGlzLnBhcmFtQ29uZmlnLkRFQlVHX0ZMQUcpIGNvbnNvbGUubG9nKFwiaGVyZTJcIik7XHJcbiAgICAgICAgcmVxTmV3LmVuZCgpO1xyXG4gICAgICAgIGlmICh0aGlzLnBhcmFtQ29uZmlnLkRFQlVHX0ZMQUcpIGNvbnNvbGUubG9nKFwiaGVyZTNcIik7XHJcbiAgICAgICAgKi9cclxuICAgICAgfVxyXG5cclxuICAgIH1cclxuICAgIGxldCBzdGF0dXNSZWMgPSB7XHJcbiAgICAgIHN0YXR1czogZXJyb3IsXHJcbiAgICAgIG1zZzogbXNnXHJcbiAgICB9O1xyXG5cclxuICAgIC8qbGV0IHN0YXR1cyA9IDE7XHJcbiAgICBpZiAoIXZhbGlkKXtcclxuICAgICAgc3RhdHVzUmVjLnN0YXR1cyA9IDE7XHJcbiAgICAgIHN0YXR1c1JlYy5tc2cgPVxyXG4gICAgfSovXHJcbiAgICBpZiAodGhpcy5wYXJhbUNvbmZpZy5ERUJVR19GTEFHKSBjb25zb2xlLmxvZyhcInZhbGlkOlwiLCB2YWxpZCwgXCIgc3RhdHVzOlwiLCBzdGF0dXNSZWMpO1xyXG5cclxuICAgIHJldHVybiAoc3RhdHVzUmVjKTtcclxuXHJcbiAgfVxyXG4gIHB1YmxpYyBzZW5kVG9TZXJ2ZXIob2JqZWN0OmFueSwgYWN0aW9uc0FycjphbnksIHF1ZXJ5RGF0YTphbnksIHJ1bGU6YW55LCBhY3Rpb246YW55LCBUcmlnZ2VyOmFueSwgaG9zdHNBcnI6YW55LCBob3N0c01hcEFycjphbnkpIHtcclxuICAgIGZ1bmN0aW9uIGdldEVsbVZhbHVlKHBhcmFtRGF0YTphbnksIHF1ZXJ5RGF0YTphbnkpIHtcclxuICAgICAgZnVuY3Rpb24gZ2V0T1JERVJfRklFTERTRGF0YShwYXJhbTphbnksIG9yZGVyRmllbGRzOmFueSkge1xyXG5cdFx0ICAgICAgbGV0IHZhbCA9IFwiXCI7XHJcbiAgICAgICAgaWYgKG9yZGVyRmllbGRzICE9IFwiXCIpIHtcclxuXHRcdCAgICAgICAgbGV0IGFycmF5ID0gcGFyYW0uc3BsaXQoXCIuXCIpO1xyXG4gICAgICAgICAgdmFyIGFyck5hbWUgPSBhcnJheVswXS50cmltKCk7XHJcblx0XHQgICAgICAgIGxldCBmaWVsZE5hbWUgPSBhcnJheVsxXTtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKFwiZ2V0RWxtVmFsdWU6ZmllbGROYW1lOlwiLCBmaWVsZE5hbWUsIFwiIG9yZGVyRmllbGRzOlwiLCBvcmRlckZpZWxkcyk7XHJcbiAgICAgICAgICAgIGlmICh0eXBlb2Ygb3JkZXJGaWVsZHMgIT09IFwidW5kZWZpbmVkXCIpe1xyXG4gICAgICAgICAgICAgIG9yZGVyRmllbGRzID0gSlNPTi5wYXJzZShvcmRlckZpZWxkcyk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiZ2V0RWxtVmFsdWU6b3JkZXJGaWVsZHM6XCIsIG9yZGVyRmllbGRzKTtcclxuICAgICAgICAgICAgdmFyIGZpZWxkc0RhdGEgPSBvcmRlckZpZWxkc1thcnJOYW1lXTtcclxuICAgICAgICAgICAgICB2YWwgPSBmaWVsZHNEYXRhW2ZpZWxkTmFtZV07XHJcbiAgICAgICAgICAgICAgfVxyXG5cdFx0ICAgICAgfVxyXG5cdFx0XHRyZXR1cm4gdmFsO1xyXG5cdFx0fVxyXG4gICAgICBjb25zb2xlLmxvZyhcImdldEVsbVZhbHVlOnBhcmFtRGF0YTpcIiwgcGFyYW1EYXRhKTtcclxuXHRcdFx0bGV0IHZhbCA9IHBhcmFtRGF0YTtcclxuICAgICAgdmFyIG4gPSBwYXJhbURhdGEuc2VhcmNoKFwiOjpcIik7XHJcblx0XHRcdGlmIChuICE9IC0xKVxyXG5cdFx0XHR7XHJcbiAgICAgICAgdmFyIGFycmF5ID0gcGFyYW1EYXRhLnNwbGl0KFwiOjpcIik7XHJcbiAgICAgICAgY29uc29sZS5sb2coIFwiZ2V0RWxtVmFsdWU6OmFycmF5OlwiICxhcnJheSk7XHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhcnJheS5sZW5ndGg7IGkrKylcclxuXHRcdFx0XHR7XHJcbiAgICAgICAgICBpZiggKGkgIT0gMCkgJiYgYXJyYXlbaV0gIT0gXCJcIiApXHJcblx0XHRcdFx0XHR7XHJcbiAgICAgICAgICAgIHZhciBuID0gYXJyYXlbaV0uc2VhcmNoKFwiIFwiKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coIFwiZ2V0RWxtVmFsdWU6Om46XCIgLCBuICwgXCJhcnJheVtpXTpcIiwgYXJyYXlbaV0pO1xyXG5cdFx0XHRcdFx0XHRpZiAobiA9PSAtMSlcclxuXHRcdFx0XHRcdFx0XHRuID0gYXJyYXlbaV0ubGVuZ3RoO1xyXG5cdFx0XHRcdFx0XHRpZiAobiAhPSAtMSlcclxuXHRcdFx0XHRcdFx0e1xyXG4gICAgICAgICAgICAgIHZhciBwYXJhbSA9IGFycmF5W2ldLnNsaWNlKDAsIG4pO1xyXG5cdFx0XHRcdFx0XHRcdHBhcmFtID0gcGFyYW0udHJpbSgpO1xyXG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiZ2V0RWxtVmFsdWU6OnBhcmFtOlwiK3BhcmFtKTtcclxuXHJcbiAgICAgICAgICAgICAgdmFyIG4gPSBwYXJhbS5pbmNsdWRlcyhcIi5cIik7XHJcbiAgICAgICAgICAgICAgY29uc29sZS5sb2coIFwiZ2V0RWxtVmFsdWU6Om46XCIgLCBuKTtcclxuICAgICAgICAgICAgICBpZiAobiA9PSB0cnVlKXtcclxuICAgICAgICAgICAgICAgIHZhbCA9IGdldE9SREVSX0ZJRUxEU0RhdGEocGFyYW0scXVlcnlEYXRhLk9SREVSX0ZJRUxEUyk7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIGVsc2VcclxuXHRcdFx0XHRcdFx0XHR2YWwgPSBxdWVyeURhdGFbcGFyYW1dO1xyXG5cdFx0XHRcdFx0XHRcdGlmICh0eXBlb2YgdmFsID09IFwic3RyaW5nXCIpXHJcblx0XHRcdFx0XHRcdFx0XHR2YWwgPSB2YWwudHJpbSgpO1xyXG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiZ2V0RWxtVmFsdWU6OnBhcmFtOlwiICwgcGFyYW0sIFwiIHZhbDpcIiwgdmFsICk7XHJcblxyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHRcdGlmICh0eXBlb2YgdmFsID09IFwic3RyaW5nXCIpXHJcblx0XHRcdFx0dmFsID0gdmFsLnNwbGl0KFwiJ1wiKS5qb2luKFwiXCIpO1xyXG5cdFx0XHRyZXR1cm4gdmFsO1xyXG5cdFx0fVxyXG4gICAgZnVuY3Rpb24gZ2V0SG9zdChzZW5kVG86YW55LCBob3N0c0FycjphbnkpIHtcclxuICAgICAgbGV0IGkgPSAwO1xyXG4gICAgICB3aGlsZSAoaSA8IGhvc3RzQXJyLmxlbmd0aCkge1xyXG4gICAgICAgIC8vY29uc29sZS5sb2coXCItLS0tLS0tLS0tLWhvc3RzQXJyW2ldLkhPU1RfSUQgOlwiLCBob3N0c0FycltpXS5IT1NUX0lELCBcIiBzZW5kVG86XCIsIHNlbmRUbyk7XHJcblx0XHRcdFx0aWYgKGhvc3RzQXJyW2ldLkhPU1RfSUQgPT0gc2VuZFRvKVxyXG5cdFx0XHRcdFx0cmV0dXJuIGhvc3RzQXJyW2ldO1xyXG5cdFx0XHRcdGkrKztcclxuXHRcdFx0fVxyXG5cdFx0XHRyZXR1cm4gbnVsbDtcclxuXHJcblx0XHR9XHJcbiAgICBmdW5jdGlvbiBnZXRIb3N0TWFwKGhvc3REZWY6YW55LCBtYXBJRDphbnksIGhvc3RzTWFwQXJyOmFueSkge1xyXG4gICAgICBsZXQgaSA9IDA7XHJcbiAgICAgIC8vY29uc29sZS5sb2coXCItLS0tLS0tLS0tLW1hcElEOlwiLCBtYXBJRCwgXCIgaG9zdERlZi5NQVBfSUQ6XCIsIGhvc3REZWYuTUFQX0lEKTtcclxuICAgICAgaWYgKChtYXBJRCAhPSBudWxsKSAmJiAobWFwSUQgIT0gXCJcIikpIHtcclxuICAgICAgICB3aGlsZSAoaSA8IGhvc3RzTWFwQXJyLmxlbmd0aCkge1xyXG4gICAgICAgICAgaWYgKChob3N0c01hcEFycltpXS5IT1NUX0lEID09IGhvc3REZWYuSE9TVF9JRCkgJiYgKG1hcElEID09IGhvc3RzTWFwQXJyW2ldLk1BUF9JRCkpXHJcblx0XHRcdFx0XHRcdHJldHVybiBob3N0c01hcEFycltpXTtcclxuXHRcdFx0XHRcdGkrKztcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdFx0cmV0dXJuIG51bGw7XHJcblxyXG5cdFx0fVxyXG4gICAgICAvLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4gICAgICBpZiAodGhpcy5wYXJhbUNvbmZpZy5ERUJVR19GTEFHKSBjb25zb2xlLmxvZyhcIioqKioqKioqKioqKioqKiphY3Rpb25zQXJyOlwiLCBhY3Rpb25zQXJyKTtcclxuICAgICAgbGV0IHN0YXR1c1JlYztcclxuICAgICAgbGV0IHNlbmRUbyA9IGFjdGlvbnNBcnIuU0VORF9UTztcclxuICAgIGxldCBxcnlQYXJhbTphbnkgPSB7fTtcclxuICAgIGxldCBoZWFkZXJQYXJhbTphbnkgPSB7fTtcclxuICAgIGxldCBib2R5VG9TZW5kQXJyOmFueSA9IFtdO1xyXG4gICAgICBsZXQgYm9keVRvU2VuZCA9IFwiXCI7XHJcbiAgICAgIGxldCBwYXJhbWV0ZXJzVG9TZW5kID0gXCJcIjtcclxuICAgIGxldCBob3N0RGVmID0gZ2V0SG9zdChzZW5kVG8sIGhvc3RzQXJyKTtcclxuICAgIGxldCBob3N0TWFwRGVmID0gZ2V0SG9zdE1hcChob3N0RGVmLCBhY3Rpb24uTUFQX0lELCBob3N0c01hcEFycik7XHJcbiAgICAgIGlmICh0aGlzLnBhcmFtQ29uZmlnLkRFQlVHX0ZMQUcpIGNvbnNvbGUubG9nKFwiaG9zdE1hcERlZjpcIiwgaG9zdE1hcERlZik7XHJcblxyXG4gICAgICBpZiAodGhpcy5wYXJhbUNvbmZpZy5ERUJVR19GTEFHKSBjb25zb2xlLmxvZyhcIioqKipob3N0RGVmLkhFQURFUjpcIiwgaG9zdERlZi5IRUFERVIpO1xyXG5cclxuICAgIGlmICgoaG9zdERlZi5IRUFERVIgIT0gbnVsbCkgJiYgKGhvc3REZWYuSEVBREVSICE9IFwiXCIpKSB7XHJcbiAgICAgICAgbGV0IGFycmF5ID0gaG9zdERlZi5IRUFERVIuc3BsaXQoXCJcXG5cIik7XHJcbiAgICAgICAgaWYgKHRoaXMucGFyYW1Db25maWcuREVCVUdfRkxBRykgY29uc29sZS5sb2coXCJhcnJheTpcIiwgYXJyYXksIFwiIGFycmF5Lmxlbmd0aDpcIiwgYXJyYXkubGVuZ3RoKTtcclxuXHJcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYXJyYXkubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgIGxldCBlbGVtID0gYXJyYXlbaV07XHJcbiAgICAgICAgaWYgKGVsZW0gIT0gXCJcIil7XHJcbiAgICAgICAgICBsZXQgYXJyYXlQYXJhbSA9IGVsZW0uc3BsaXQoXCI6XCIpO1xyXG4gICAgICAgICAgbGV0IHBhcmFtID0gYXJyYXlQYXJhbVswXTtcclxuICAgICAgICAgIHBhcmFtID0gcGFyYW0udHJpbSgpO1xyXG4gICAgICAgICAgbGV0IHBhcmFtRGF0YSA9IGFycmF5UGFyYW1bMV07XHJcbiAgICAgICAgICBwYXJhbURhdGEgPSBwYXJhbURhdGEudHJpbSgpO1xyXG4gICAgICAgICAgaWYgKHRoaXMucGFyYW1Db25maWcuREVCVUdfRkxBRykgY29uc29sZS5sb2coXCJwYXJhbURhdGE6XCIsIHBhcmFtRGF0YSk7XHJcbiAgICAgICAgICBwYXJhbURhdGEgPSBnZXRFbG1WYWx1ZShwYXJhbURhdGEsIHF1ZXJ5RGF0YSk7XHJcbiAgICAgICAgICBpZiAodGhpcy5wYXJhbUNvbmZpZy5ERUJVR19GTEFHKSBjb25zb2xlLmxvZyhcImdldEVsbVZhbHVlOnBvc3QgZ2V0RWxtVmFsdWUgcGFyYW06XCIsIHBhcmFtLCBcIiBwYXJhbURhdGE6XCIsIHBhcmFtRGF0YSk7XHJcbiAgICAgICAgICBoZWFkZXJQYXJhbVtwYXJhbV0gPSBwYXJhbURhdGE7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG5cclxuXHJcbiAgICBpZiAoKGFjdGlvbnNBcnIuQk9EWV9EQVRBICE9IG51bGwpICYmIChhY3Rpb25zQXJyLkJPRFlfREFUQSAhPSBcIlwiKSkge1xyXG4gICAgICAgIGxldCBib2R5RGF0YSA9IGFjdGlvbnNBcnIuQk9EWV9EQVRBO1xyXG4gICAgICBpZiAodGhpcy5wYXJhbUNvbmZpZy5ERUJVR19GTEFHKSBjb25zb2xlLmxvZyhcIjpwb3N0OmJvZHlEYXRhOlwiLCBib2R5RGF0YSk7XHJcbiAgICAgIGxldCBhcnJheSA9IGJvZHlEYXRhLnNwbGl0KFwiXFxuXCIpO1xyXG4gICAgICBpZiAodGhpcy5wYXJhbUNvbmZpZy5ERUJVR19GTEFHKSBjb25zb2xlLmxvZyhcIjpwb3N0OmFycmF5OlwiLCBhcnJheSwgXCIgYXJyYXkubGVuZ3RoOlwiLCBhcnJheS5sZW5ndGgpO1xyXG5cclxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhcnJheS5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgbGV0IGVsZW0gPSBhcnJheVtpXTtcclxuICAgICAgICBpZiAoZWxlbSAhPSBcIlwiKXtcclxuICAgICAgICAgIGxldCBhcnJheVBhcmFtID0gZWxlbS5zcGxpdChcIj1cIik7XHJcbiAgICAgICAgICBsZXQgcGFyYW0gPSBhcnJheVBhcmFtWzBdO1xyXG4gICAgICAgICAgcGFyYW0gPSBwYXJhbS50cmltKCk7XHJcbiAgICAgICAgICBsZXQgcGFyYW1EYXRhID0gYXJyYXlQYXJhbVsxXTtcclxuICAgICAgICAgIHBhcmFtRGF0YSA9IHBhcmFtRGF0YS50cmltKCk7XHJcbiAgICAgICAgICBpZiAodGhpcy5wYXJhbUNvbmZpZy5ERUJVR19GTEFHKSBjb25zb2xlLmxvZyhcImdldEVsbVZhbHVlOnBhcmFtRGF0YTpcIiwgcGFyYW1EYXRhKTtcclxuICAgICAgICAgIHBhcmFtRGF0YSA9IGdldEVsbVZhbHVlKHBhcmFtRGF0YSwgcXVlcnlEYXRhKTtcclxuICAgICAgICAgIGlmICh0aGlzLnBhcmFtQ29uZmlnLkRFQlVHX0ZMQUcpIGNvbnNvbGUubG9nKFwiZ2V0RWxtVmFsdWU6cG9zdDIgcGFyYW06XCIsIHBhcmFtLCBcIiBwYXJhbURhdGE6XCIsIHBhcmFtRGF0YSk7XHJcbiAgICAgICAgICBxcnlQYXJhbVtwYXJhbV0gPSBwYXJhbURhdGE7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgICAgLy9pZiAodGhpcy5wYXJhbUNvbmZpZy5ERUJVR19GTEFHKSBjb25zb2xlLmxvZyhcInFyeVBhcmFtOmhlcmVcIik7XHJcbiAgICAgICAgLy9pZiAodGhpcy5wYXJhbUNvbmZpZy5ERUJVR19GTEFHKSBjb25zb2xlLmxvZyhcInFyeVBhcmFtOlwiLCBxcnlQYXJhbSAsIFwiIHFyeVBhcmFtLmxlbmd0aCA6XCIsIE9iamVjdC5rZXlzKHFyeVBhcmFtKS5sZW5ndGgpO1xyXG4gICAgICAgIGJvZHlUb1NlbmRBcnIucHVzaChxcnlQYXJhbSk7XHJcbiAgICAgICAgLy9pZiAodGhpcy5wYXJhbUNvbmZpZy5ERUJVR19GTEFHKSBjb25zb2xlLmxvZyhcIi0tLWhvc3REZWY6XCIsIGhvc3REZWYpOy8vZnVhZFxyXG5cclxuICAgICAgaWYgKGJvZHlUb1NlbmRBcnIubGVuZ3RoICE9IDApIHtcclxuICAgICAgICAgIC8qaWYgKCAoaG9zdE1hcERlZiAhPSBudWxsKSAmJiAgKGhvc3RNYXBEZWYuWFNMVF9TRU5EICE9IG51bGwpICYmIChob3N0TWFwRGVmLlhTTFRfU0VORCAhPSBcIlwiKSApXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICBib2R5VG9TZW5kID0geHNsdG1hcC5tYXBEYXRhKGJvZHlUb1NlbmRBcnIsIGhvc3RNYXBEZWYuWFNMVF9TRU5EKTtcclxuXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGVsc2VcclxuICAgICAgICAgIHsqL1xyXG4gICAgICAgICAgICBib2R5VG9TZW5kID0gSlNPTi5zdHJpbmdpZnkoYm9keVRvU2VuZEFycilcclxuICAgICAgICAgIC8vfVxyXG4gICAgICAgIH1cclxuICAgICAgLypcclxuICAgICAgbGV0IGhleG91dCA9IGhleGR1bXAoYm9keVRvU2VuZCwgMTYpIDtcclxuICAgICAgaWYgKHRoaXMucGFyYW1Db25maWcuREVCVUdfRkxBRykgY29uc29sZS5sb2coXCJoZXhvdXQ6XCIsaGV4b3V0KTtcclxuICAgICAgKi9cclxuICAgICAgfVxyXG5cclxuICAgIGlmICgoYWN0aW9uc0Fyci5QQVJBTUVURVJfREFUQSAhPSBudWxsKSAmJiAoYWN0aW9uc0Fyci5QQVJBTUVURVJfREFUQSAhPSBcIlwiKSkge1xyXG4gICAgICAgIGxldCBwYXJhbWV0ZXJEYXRhID0gYWN0aW9uc0Fyci5QQVJBTUVURVJfREFUQTtcclxuICAgICAgICBpZiAodGhpcy5wYXJhbUNvbmZpZy5ERUJVR19GTEFHKSBjb25zb2xlLmxvZyhcInBhcmFtZXRlckRhdGE6XCIsIHBhcmFtZXRlckRhdGEpO1xyXG4gICAgICBpZiAodGhpcy5wYXJhbUNvbmZpZy5ERUJVR19GTEFHKSBjb25zb2xlLmxvZyhcInBhcmFtZXRlckRhdGEubGVuZ3RoOlwiLCBwYXJhbWV0ZXJEYXRhLmxlbmd0aCk7XHJcblxyXG5cclxuICAgICAgbGV0IGFycmF5ID0gcGFyYW1ldGVyRGF0YS5zcGxpdChcIlxcblwiKTtcclxuICAgICAgICBpZiAodGhpcy5wYXJhbUNvbmZpZy5ERUJVR19GTEFHKSBjb25zb2xlLmxvZyhcImFycmF5OlwiLCBhcnJheSwgXCIgYXJyYXkubGVuZ3RoOlwiLCBhcnJheS5sZW5ndGgpO1xyXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFycmF5Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICBsZXQgZWxlbSA9IGFycmF5W2ldO1xyXG4gICAgICAgIGlmIChlbGVtICE9IFwiXCIpe1xyXG4gICAgICAgICAgbGV0IGFycmF5UGFyYW0gPSBlbGVtLnNwbGl0KFwiPVwiKTtcclxuICAgICAgICAgIGxldCBwYXJhbSA9IGFycmF5UGFyYW1bMF07XHJcbiAgICAgICAgICBwYXJhbSA9IHBhcmFtLnRyaW0oKTtcclxuICAgICAgICAgIGxldCBwYXJhbURhdGEgPSBhcnJheVBhcmFtWzFdO1xyXG4gICAgICAgICAgcGFyYW1EYXRhID0gcGFyYW1EYXRhLnRyaW0oKTtcclxuICAgICAgICAgIGlmICh0aGlzLnBhcmFtQ29uZmlnLkRFQlVHX0ZMQUcpIGNvbnNvbGUubG9nKFwiZ2V0RWxtVmFsdWU6OnBhcmFtRGF0YTpcIiwgcGFyYW1EYXRhKTtcclxuICAgICAgICAgIHBhcmFtRGF0YSA9IGdldEVsbVZhbHVlKHBhcmFtRGF0YSwgcXVlcnlEYXRhKTtcclxuICAgICAgICAgIGlmICh0aGlzLnBhcmFtQ29uZmlnLkRFQlVHX0ZMQUcpIGNvbnNvbGUubG9nKFwiZ2V0RWxtVmFsdWU6IHBvc3QzOnBhcmFtOlwiLCBwYXJhbSwgXCIgcGFyYW1EYXRhOlwiLCBwYXJhbURhdGEpO1xyXG4gICAgICAgICAgaWYgKHBhcmFtZXRlcnNUb1NlbmQgPT0gXCJcIilcclxuICAgICAgICAgICAgcGFyYW1ldGVyc1RvU2VuZCA9IFwiP1wiICsgcGFyYW0gKyBcIj1cIiArIHBhcmFtRGF0YTtcclxuICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAgcGFyYW1ldGVyc1RvU2VuZCA9IHBhcmFtZXRlcnNUb1NlbmQgKyBcIiZcIiArIHBhcmFtICsgXCI9XCIgKyBwYXJhbURhdGE7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIGlmICh0aGlzLnBhcmFtQ29uZmlnLkRFQlVHX0ZMQUcpIGNvbnNvbGUubG9nKFwiZ2V0RWxtVmFsdWU6IHBhcmFtZXRlcnNUb1NlbmQ6XCIsIHBhcmFtZXRlcnNUb1NlbmQpO1xyXG4gICAgfVxyXG4gICAgbGV0IHBhdGhFeHRyYSA9XCJcIjtcclxuICAgIGlmICggKGFjdGlvbnNBcnIuRVhUUkFfREFUQSAhPSBudWxsKSAmJiAoYWN0aW9uc0Fyci5FWFRSQV9EQVRBICE9IFwiXCIpIClcclxuICAgICAge1xyXG4gICAgICAgIGxldCBwYXJhbWV0ZXJFeHRyYSA9IGFjdGlvbnNBcnIuRVhUUkFfREFUQTtcclxuICAgICAgICBjb25zb2xlLmxvZyhcInBhcmFtZXRlckV4dHJhOlwiLCBwYXJhbWV0ZXJFeHRyYSk7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJwYXJhbWV0ZXJFeHRyYS5sZW5ndGg6XCIscGFyYW1ldGVyRXh0cmEubGVuZ3RoKTtcclxuICAgICAgICBcclxuXHJcbiAgICAgICAgbGV0IGFycmF5ID0gcGFyYW1ldGVyRXh0cmEuc3BsaXQoXCJcXG5cIik7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJhcnJheTpcIiwgYXJyYXksIFwiIGFycmF5Lmxlbmd0aDpcIiwgYXJyYXkubGVuZ3RoKTtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFycmF5Lmxlbmd0aDsgaSsrKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgIGxldCBlbGVtID0gYXJyYXlbaV07XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhcImVsZW06XCIsIGVsZW0pO1xyXG4gICAgICAgICAgbGV0IGFycmF5UGFyYW0gPSBlbGVtLnNwbGl0KFwiPVwiKTtcclxuICAgICAgICAgIGxldCBwYXJhbSA9IGFycmF5UGFyYW1bMF07XHJcbiAgICAgICAgICBwYXJhbSA9IHBhcmFtLnRyaW0oKTtcclxuICAgICAgICAgIGxldCBwYXJhbURhdGEgPSBhcnJheVBhcmFtWzFdO1xyXG4gICAgICAgICAgaWYgKHBhcmFtID09IFwiREJMT0NcIil7XHJcbiAgICAgICAgICAgIHBhdGhFeHRyYSA9IFwiJlwiICsgZWxlbTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJwYXRoRXh0cmE6XCIsIHBhdGhFeHRyYSlcclxuXHJcbiAgICAgICAgICAgIC8vcmVxLl9wYXJzZWRVcmwucGF0aCA9IHJlcS5fcGFyc2VkVXJsLnBhdGggKyBcIiZcIiArIGVsZW07XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIGlmICh0aGlzLnBhcmFtQ29uZmlnLkRFQlVHX0ZMQUcpIGNvbnNvbGUubG9nKFwiYm9keVRvU2VuZDpcIiwgYm9keVRvU2VuZCk7XHJcbiAgICAgIGlmICh0aGlzLnBhcmFtQ29uZmlnLkRFQlVHX0ZMQUcpIGNvbnNvbGUubG9nKFwicGFyYW1ldGVyc1RvU2VuZDpcIiwgcGFyYW1ldGVyc1RvU2VuZCk7XHJcblxyXG4gICAgc3RhdHVzUmVjID0gdGhpcy5wZXJmb3JtSHR0cFBvc3Qob2JqZWN0LCBib2R5VG9TZW5kLCBwYXJhbWV0ZXJzVG9TZW5kLCBzZW5kVG8sIHF1ZXJ5RGF0YSwgcnVsZSwgYWN0aW9uLCBUcmlnZ2VyLCBob3N0RGVmLCBob3N0TWFwRGVmLCBoZWFkZXJQYXJhbSwgcGF0aEV4dHJhKTtcclxuICAgICAgaWYgKHRoaXMucGFyYW1Db25maWcuREVCVUdfRkxBRykgY29uc29sZS5sb2coXCJwb3N0IHBlcmZvcm1IdHRwUG9zdDogc3RhdHVzOlwiLCBzdGF0dXNSZWMpO1xyXG4gICAgICByZXR1cm4gc3RhdHVzUmVjO1xyXG5cclxuXHJcblxyXG5cclxuXHJcbiAgfVxyXG4gIHB1YmxpYyBwZXJmb3JtQWN0aW9uKG9iamVjdDphbnksIHFyeTphbnksIHB0cjphbnksIHF1ZXJ5RGF0YTphbnksIHJ1bGU6YW55LCBydWxlc0RlZjphbnksIFRyaWdnZXI6YW55LCBob3N0c0FycjphbnksIGhvc3RzTWFwQXJyOmFueSwgUlVMRV9JRDphbnkpIHtcclxuICAgIGlmICh0aGlzLnBhcmFtQ29uZmlnLkRFQlVHX0ZMQUcpIGNvbnNvbGUubG9nKFwiLS0tcGVyZm9ybUFjdGlvbjpydWxlc0RlZjpcIiwgcnVsZXNEZWYpO1xyXG4gICAgICBsZXQgc3RhdHVzID0gMDtcclxuICAgIGxldCBzdGF0dXNSZWMgPSB7XHJcbiAgICAgIHN0YXR1czogMCxcclxuICAgICAgbXNnOiBcIlwiXHJcbiAgICAgIH07XHJcblxyXG4gICAgICBsZXQgYWN0aW9uUHRyID0gcnVsZXNEZWYuYWN0aW9uUHRyc0FycltxcnldO1xyXG4gICAgaWYgKHR5cGVvZiBhY3Rpb25QdHIgIT09IFwidW5kZWZpbmVkXCIpIHtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMucGFyYW1Db25maWcuREVCVUdfRkxBRykgY29uc29sZS5sb2coXCJwdHI6XCIsIHB0cik7XHJcbiAgICAgICAgaWYgKHRoaXMucGFyYW1Db25maWcuREVCVUdfRkxBRykgY29uc29sZS5sb2coXCJhY3Rpb25QdHI6XCIsIGFjdGlvblB0cik7XHJcbiAgICAgIGxldCBpID0gcHRyO1xyXG5cclxuICAgICAgICBsZXQgcHRyMSA9IGFjdGlvblB0cltpXTtcclxuICAgICAgbGV0IHB0cjIgPSBhY3Rpb25QdHJbYWN0aW9uUHRyLmxlbmd0aCAtMV07XHJcbiAgICAgIC8vIGlmICh0eXBlb2YgYWN0aW9uUHRyW2kgKyAxXSAhPT0gXCJ1bmRlZmluZWRcIilcclxuICAgICAgLy8gICBwdHIyID0gYWN0aW9uUHRyW2kgKyAxXTtcclxuICAgICAgLy8gZWxzZVxyXG4gICAgICAvLyAgIHB0cjIgPSBydWxlc0RlZi5hY3Rpb25zQXJyLmxlbmd0aFxyXG5cclxuICAgICAgaWYgKHRoaXMucGFyYW1Db25maWcuREVCVUdfRkxBRykgY29uc29sZS5sb2coXCJwdHIxOlwiLCBwdHIxLCBcIiBwdHIyOlwiLCBwdHIyKTtcclxuICAgICAgICBsZXQgaiA9IHB0cjE7XHJcbiAgICAgIC8vbGV0IHJ1bGVJRCA9IHJ1bGVzRGVmLmFjdGlvbnNBcnJbal0uUlVMRV9JRDtcclxuICAgICAgbGV0IHJ1bGVJRCA9IFJVTEVfSUQ7XHJcbiAgICAgIHdoaWxlICgoaiA8PSBwdHIyKSAmJiAoc3RhdHVzID09IDApKSB7XHJcbiAgICAgICAgaWYgKHJ1bGVJRCA9PSBydWxlc0RlZi5hY3Rpb25zQXJyW2pdLlJVTEVfSUQpXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAvL2lmICh0aGlzLnBhcmFtQ29uZmlnLkRFQlVHX0ZMQUcpIGNvbnNvbGUubG9nKFwicnVsZXNEZWYuYWN0aW9uc0FycjpcIixydWxlc0RlZi5hY3Rpb25zQXJyW2pdKTtcclxuICAgICAgICAgIGlmICgocnVsZXNEZWYuYWN0aW9uc0FycltqXS5BQ1RJT05fQ09ERSA9PSBcIlNFTkRcIikgfHwgKHJ1bGVzRGVmLmFjdGlvbnNBcnJbal0uQUNUSU9OX0NPREUgPT0gXCJTRU5EX1dBSVRcIikpIHtcclxuICAgICAgICAgICAgc3RhdHVzUmVjID0gdGhpcy5zZW5kVG9TZXJ2ZXIob2JqZWN0LCBydWxlc0RlZi5hY3Rpb25zQXJyW2pdLCBxdWVyeURhdGEsIHJ1bGUsIHJ1bGVzRGVmLmFjdGlvbnNBcnJbal0sIFRyaWdnZXIsIGhvc3RzQXJyLCBob3N0c01hcEFycik7XHJcbiAgICAgICAgICAgIHN0YXR1cyA9IHN0YXR1c1JlYy5zdGF0dXM7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBlbHNlIGlmICggcnVsZXNEZWYuYWN0aW9uc0FycltqXS5BQ1RJT05fQ09ERSA9PSBcIkVSUk9SXCIgKSB7XHJcbiAgICAgICAgICAgIGxldCBzdGF0dXNSZWMgPXtcclxuICAgICAgICAgICAgICBzdGF0dXMgOiAtMSxcclxuICAgICAgICAgICAgICBtc2cgOiBydWxlc0RlZi5hY3Rpb25zQXJyW2pdLkJPRFlfREFUQVxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICByZXR1cm4gc3RhdHVzUmVjO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAgIGorKztcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIHN0YXR1c1JlYztcclxuXHJcbiAgfVxyXG5cclxuICBwdWJsaWMgY2hlY2tSdWxlc0J5VHJpZ2dlcihvYmplY3Q6YW55LCBydWxlc0RlZjphbnksIHF1ZXJ5RGF0YTphbnksIFRyaWdnZXI6YW55LCByb3V0aW5lX25hbWU6YW55LCBob3N0c0FycjphbnksIGhvc3RzTWFwQXJyOmFueSkge1xyXG4gICAgaWYgKHRoaXMucGFyYW1Db25maWcuREVCVUdfRkxBRykgY29uc29sZS5sb2coXCJjaGVja1J1bGVzQnlUcmlnZ2VyOnJ1bGVzRGVmOlwiLCBydWxlc0RlZiwgXCIgcXVlcnlEYXRhOlwiLCBxdWVyeURhdGEsIFwiVHJpZ2dlcjpcIiwgVHJpZ2dlcik7XHJcbiAgICBmdW5jdGlvbiBnZXRGaWVsZERhdGEocnVsZTphbnksIHF1ZXJ5RGF0YTphbnkpXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgbGV0IGZpZWxkRGF0YSA9IFwiXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICBsZXQgYXJyYXkgPSBydWxlLkZJRUxELnNwbGl0IChcIi5cIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImFycmF5OlwiLGFycmF5KVxyXG4gICAgICAgICAgICAgICAgICAgICAgaWYgKGFycmF5Lmxlbmd0aCA+IDEpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgb3JkZXJGaWVsZHMgPSBxdWVyeURhdGFbXCJPUkRFUl9GSUVMRFNcIl07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2coXCJvcmRlckZpZWxkczpcIixvcmRlckZpZWxkcylcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBvcmRlckZpZWxkcyAhPT0gXCJ1bmRlZmluZWRcIil7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG9yZGVyRmllbGRzICE9IFwiXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBmaWVsZHNEYXRhID0gSlNPTi5wYXJzZShvcmRlckZpZWxkcyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKFwiZmllbGRzRGF0YTpcIixmaWVsZHNEYXRhKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGtleXMgPSBPYmplY3Qua2V5cyhmaWVsZHNEYXRhKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwia2V5czpcIixrZXlzKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgaiA9MDsgajwga2V5cy5sZW5ndGg7aisrKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJhZGRPcmRlckZpZWxkcyBrZXk6XCIsIGtleXNbal0gKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGtleXNbal0gPT0gYXJyYXlbMF0pe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBvYmpEYXRhID0gZmllbGRzRGF0YVtrZXlzW2pdXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKFwib2JqRGF0YTpcIiwgb2JqRGF0YSApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgKG9iakRhdGEubGVuZ3RoKSA9PSBcInVuZGVmaW5lZFwiKSAgLy8gaXQgaXMgYSBmb3JtIChvYmplY3QpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpZWxkRGF0YSA9IG9iakRhdGFbYXJyYXlbMV1dO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2UgeyAvLyBpdCBpcyBhIGdyaWQgKGFycmF5KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiAob2JqRGF0YVswXSkgIT0gXCJ1bmRlZmluZWRcIikgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpZWxkRGF0YSA9IG9iakRhdGFbMF1bYXJyYXlbMV1dO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZmllbGREYXRhID0gcXVlcnlEYXRhW3J1bGUuRklFTERdIDtcclxuICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBmaWVsZERhdGE7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICBmdW5jdGlvbiBjaGVja1J1bGUocnVsZTphbnksIHF1ZXJ5RGF0YTphbnkpe1xyXG4gICAgICBsZXQgcnVsZU1hdGNoID0gZmFsc2U7XHJcbiAgICAgIC8vaWYgKG9iamVjdC5wYXJhbUNvbmZpZy5ERUJVR19GTEFHKSBcclxuICAgICAgICBjb25zb2xlLmxvZyhcImNoZWNrUnVsZSBydWxlOlwiLCBydWxlLCBcIiBxdWVyeURhdGE6XCIsIHF1ZXJ5RGF0YSk7XHJcbiAgICAgIC8vbGV0IGZpZWxkRGF0YSA9IHF1ZXJ5RGF0YVtydWxlLkZJRUxEXTtcclxuICAgICAgbGV0IGZpZWxkRGF0YSA9IGdldEZpZWxkRGF0YShydWxlLCBxdWVyeURhdGEpO1xyXG5cclxuICAgICAgc3dpdGNoIChydWxlLk9QRVJBVElPTikge1xyXG4gICAgICAgIGNhc2UgXCI9XCI6XHJcbiAgICAgICAgICBpZiAoZmllbGREYXRhID09IHJ1bGUuRklFTERfVkFMVUUpIHtcclxuICAgICAgICAgIHJ1bGVNYXRjaCA9IHRydWU7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSBcIjxcIjpcclxuICAgICAgICAgIGlmIChmaWVsZERhdGEgPCBydWxlLkZJRUxEX1ZBTFVFKSB7XHJcbiAgICAgICAgICBydWxlTWF0Y2ggPSB0cnVlO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgXCI8PVwiOlxyXG4gICAgICAgICAgaWYgKGZpZWxkRGF0YSA8PSBydWxlLkZJRUxEX1ZBTFVFKSB7XHJcbiAgICAgICAgICBydWxlTWF0Y2ggPSB0cnVlO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgXCI+XCI6XHJcbiAgICAgICAgICBpZiAoZmllbGREYXRhID4gcnVsZS5GSUVMRF9WQUxVRSkge1xyXG4gICAgICAgICAgcnVsZU1hdGNoID0gdHJ1ZTtcclxuICAgICAgICAgIH1cclxuICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIFwiPj1cIjpcclxuICAgICAgICAgIGlmIChmaWVsZERhdGEgPj0gcnVsZS5GSUVMRF9WQUxVRSkge1xyXG4gICAgICAgICAgcnVsZU1hdGNoID0gdHJ1ZTtcclxuICAgICAgICAgIH1cclxuICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIFwiPD5cIjpcclxuICAgICAgICAgIGlmIChmaWVsZERhdGEgIT0gcnVsZS5GSUVMRF9WQUxVRSkge1xyXG4gICAgICAgICAgcnVsZU1hdGNoID0gdHJ1ZTtcclxuICAgICAgICAgIH1cclxuICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIFwiSU5TVFJcIjpcclxuICAgICAgICAgIGlmIChydWxlLkZJRUxEX1ZBTFVFLnNlYXJjaChmaWVsZERhdGEpICE9IC0xKSB7XHJcbiAgICAgICAgICBydWxlTWF0Y2ggPSB0cnVlO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgcnVsZU1hdGNoID0gZmFsc2U7XHJcbiAgICAgIH1cclxuICAgICAgY29uc29sZS5sb2coXCJ0ZXN0MzpydWxlTWF0Y2g6XCIsIHJ1bGVNYXRjaCwgXCIgZmllbGREYXRhOlwiLCBmaWVsZERhdGEsIFwiIE9QRVJBVElPTjpcIiwgcnVsZS5PUEVSQVRJT04sIFwiIEZJRUxEX1ZBTFVFOlwiLCBydWxlLkZJRUxEX1ZBTFVFKTtcclxuICAgICAgcmV0dXJuIHJ1bGVNYXRjaDtcclxuXHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBjaGVja1NhbWVUZW1wbGF0ZShydWxlUHRyc0FyciwgcXVlcnlEYXRhKSB7XHJcbiAgICAgIC8vY29uc29sZS5sb2coXCJjaGVja2luZyB0ZW1wbGF0ZSBydWxlUHRyc0FycjpcIixydWxlUHRyc0FyciwgXCIgcXVlcnlEYXRhOlwiLCBxdWVyeURhdGEpO1xyXG4gICAgICB2YXIgc2FtZVRlbXAgPSBmYWxzZTtcclxuICAgICAgY29uc29sZS5sb2coXCJydWxlUHRyc0Fyci5URU1QTEFURV9OQU1FOlwiLCBydWxlUHRyc0Fyci5URU1QTEFURV9OQU1FLCBcInF1ZXJ5RGF0YS5URU1QTEFURV9OQU1FOlwiLCBxdWVyeURhdGEuVEVNUExBVEVfTkFNRSxcIiBydWxlUHRyc0Fyci5TRVFVRU5DRV9OQU1FOlwiLCBydWxlUHRyc0Fyci5TRVFVRU5DRV9OQU1FLFwiIHF1ZXJ5RGF0YS5TRVFVRU5DRV9OQU1FOlwiLCBxdWVyeURhdGEuU0VRVUVOQ0VfTkFNRSwgcXVlcnlEYXRhKVxyXG5cclxuICAgICAgaWYgKCAocnVsZVB0cnNBcnIuVEVNUExBVEVfTkFNRSAhPSBcIlwiKSApe1xyXG4gICAgICAgIGlmIChydWxlUHRyc0Fyci5URU1QTEFURV9OQU1FID09IHF1ZXJ5RGF0YS5URU1QTEFURV9OQU1FKSB7XHJcblxyXG4gICAgICAgICAgaWYgKChydWxlUHRyc0Fyci5TRVFVRU5DRV9OQU1FICE9IFwiXCIpKSAge1xyXG4gICAgICAgICAgICBpZiAocnVsZVB0cnNBcnIuU0VRVUVOQ0VfTkFNRSA9PSBxdWVyeURhdGEuU0VRVUVOQ0VfTkFNRSkge1xyXG4gICAgICAgICAgICAgIHNhbWVUZW1wID0gdHJ1ZTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBzYW1lVGVtcCA9IHRydWU7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICBlbHNlIHtcclxuICAgICAgICBzYW1lVGVtcCA9IHRydWU7XHJcbiAgICAgIFxyXG4gICAgICB9XHJcbiAgICAgIC8vY29uc29sZS5sb2coXCJzYW1lVGVtcDpcIiwgc2FtZVRlbXApO1xyXG4gICAgICByZXR1cm4gc2FtZVRlbXA7XHJcbiAgICB9XHJcbiAgICBcclxuXHJcbiAgICBsZXQgc3RhdHVzID0gMDtcclxuICAgIGxldCBzdGF0dXNSZWMgPSB7XHJcbiAgICAgIHN0YXR1czogMCxcclxuICAgICAgbXNnOiBcIlwiXHJcbiAgICB9O1xyXG5cclxuICAgIGxldCBxcnkgPSBxdWVyeURhdGEuX1FVRVJZO1xyXG4gICAgaWYgKHRoaXMucGFyYW1Db25maWcuREVCVUdfRkxBRykgY29uc29sZS5sb2coXCJfUVVFUlk6XCIsIHF1ZXJ5RGF0YS5fUVVFUlksIFwiIHJ1bGVzRGVmLnJ1bGVQdHJzQXJyOlwiLCBydWxlc0RlZi5ydWxlUHRyc0Fycik7XHJcbiAgICBpZiAodGhpcy5wYXJhbUNvbmZpZy5ERUJVR19GTEFHKSBjb25zb2xlLmxvZyhcImNoZWNraW5nIHJ1bGVzRGVmLnJ1bGVQdHJzQXJyOlwiLCBydWxlc0RlZi5ydWxlUHRyc0Fycik7XHJcbiAgICBsZXQgcnVsZVB0ciA9IHJ1bGVzRGVmLnJ1bGVQdHJzQXJyW3FyeV07XHJcbiAgICBpZiAodGhpcy5wYXJhbUNvbmZpZy5ERUJVR19GTEFHKSBjb25zb2xlLmxvZyhcInJ1bGVQdHI6XCIsIHJ1bGVQdHIpO1xyXG4gICAgaWYgKHRoaXMucGFyYW1Db25maWcuREVCVUdfRkxBRykgY29uc29sZS5sb2coXCJxcnk6XCIsIHFyeSwgXCIgcnVsZXNEZWYucnVsZVB0cnNBcnI6XCIsIHJ1bGVzRGVmLnJ1bGVQdHJzQXJyLCBcIiBydWxlUHRyOlwiLCBydWxlUHRyKTtcclxuXHJcbiAgICBpZiAodHlwZW9mIHJ1bGVQdHIgIT09IFwidW5kZWZpbmVkXCIpIHtcclxuICAgICAgLy9sZXQgYWN0aW9uUHRyID0gcnVsZXNEZWYucnVsZVB0cnNBcnJbcXJ5XTtcclxuICAgICAgLy9pZiAodHlwZW9mIGFjdGlvblB0ciAhPT0gXCJ1bmRlZmluZWRcIilcclxuICAgICAge1xyXG4gICAgICAgIGxldCByZXN1bHQgPSBmYWxzZTtcclxuICAgICAgICBsZXQgaSA9IDA7XHJcblxyXG4gICAgICAgIC8vd2hpbGUgKCAoaTxydWxlUHRyLmxlbmd0aCkgJiYgKHN0YXR1cyA9PSAwKSApXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgdmFyIHB0cjEgPSBydWxlUHRyW2ldO1xyXG4gICAgICAgICAgICAgIHZhciBwdHIyID0gcnVsZVB0cltydWxlUHRyLmxlbmd0aCAtMV07XHJcbiAgICAgICAgICAgICAgLy8gaWYgKHR5cGVvZiBydWxlUHRyW2krMV0gIT09IFwidW5kZWZpbmVkXCIpXHJcbiAgICAgICAgICAgICAgLy8gICAgIHZhciBwdHIyID0gcnVsZVB0cltpKzFdO1xyXG4gICAgICAgICAgICAgIC8vIGVsc2VcclxuICAgICAgICAgICAgICAvLyAgICAgLy92YXIgcHRyMiA9IHJ1bGVzRGVmLnJ1bGVzQXJyLmxlbmd0aFxyXG4gICAgICAgICAgICAvLyAgICAgdmFyIHB0cjIgPSBwdHIxXHJcblxyXG4gICAgICAgICAgICBpZiAodGhpcy5wYXJhbUNvbmZpZy5ERUJVR19GTEFHKSBjb25zb2xlLmxvZyhcIkl0ZW06cHRyMTpcIixwdHIxLCBcIiBwdHIyOlwiLCBwdHIyKTtcclxuICAgICAgICAgICAgICB2YXIgaiA9IHB0cjE7XHJcbiAgICAgICAgICAgICAgdmFyIHJ1bGVNYXRjaCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgIHZhciBGT1VORF9SVUxFX0lEPVwiXCI7XHJcbiAgICAgICAgICAgICAgd2hpbGUgKCBqIDw9IHB0cjIpXHJcbiAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMucGFyYW1Db25maWcuREVCVUdfRkxBRykgY29uc29sZS5sb2coXCJydWxlc0RlZi5ydWxlc0FycjpcIiwgcnVsZXNEZWYucnVsZXNBcnJbal0uUlVMRV9JRCwgXCIgaXRlbTpcIiwgcnVsZXNEZWYucnVsZXNBcnJbal0uSVRFTSk7XHJcbiAgICAgICAgICAgICAgICAgIGxldCBzYW1lVGVtcGxhdGUgPSBjaGVja1NhbWVUZW1wbGF0ZShydWxlc0RlZi5ydWxlc0FycltqXSxxdWVyeURhdGEgKTtcclxuICAgICAgICAgICAgICAgICAgaWYgKHRoaXMucGFyYW1Db25maWcuREVCVUdfRkxBRykgY29uc29sZS5sb2coXCJydWxlc0RlZi5ydWxlc0FycjpcIiwgcnVsZXNEZWYucnVsZXNBcnJbal0uUlVMRV9JRCwgXCIgaXRlbTpcIiwgcnVsZXNEZWYucnVsZXNBcnJbal0uSVRFTSwgXCIgc2FtZVRlbXBsYXRlOlwiLCBzYW1lVGVtcGxhdGUpOyAgXHJcbiAgICAgICAgICAgICAgICAgIGlmIChzYW1lVGVtcGxhdGUpe1xyXG4gICAgICAgICAgICAgICAgICAgcnVsZU1hdGNoID0gY2hlY2tSdWxlKHJ1bGVzRGVmLnJ1bGVzQXJyW2pdLCBxdWVyeURhdGEpO1xyXG4gICAgICAgICAgICAgICAgICBpZiAocnVsZU1hdGNoID09IGZhbHNlKVxyXG4gICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICAgICAgICAgICAgRk9VTkRfUlVMRV9JRCA9IHJ1bGVzRGVmLnJ1bGVzQXJyW2pdLlJVTEVfSUQ7XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgIGorKztcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJjaGVja1J1bGVzQnlUcmlnZ2VyOkNvbmRpdGlvbnMgcnVsZU1hdGNoOlwiLCBydWxlTWF0Y2gsIFwiIGZvciBydWxlOlwiLCBGT1VORF9SVUxFX0lEKTtcclxuICAgICAgICAgICAgICBpZiAocnVsZU1hdGNoID09IHRydWUpXHJcbiAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAvL3N0YXR1c1JlYyA9IHBlcmZvcm1BY3Rpb24oZGIscmVxLCBxcnksIGksIHF1ZXJ5RGF0YSwgcnVsZXNEZWYucnVsZXNBcnJbcHRyMV0scnVsZXNEZWYsIFRyaWdnZXIgKTtcclxuICAgICAgICAgICAgICAgICAgc3RhdHVzUmVjID0gdGhpcy5wZXJmb3JtQWN0aW9uKCAgb2JqZWN0LCBxcnksIGksIHF1ZXJ5RGF0YSwgcnVsZXNEZWYucnVsZXNBcnJbcHRyMV0scnVsZXNEZWYsIFRyaWdnZXIgLGhvc3RzQXJyLCBob3N0c01hcEFyciwgRk9VTkRfUlVMRV9JRCk7XHJcbiAgICAgICAgICAgICAgICAgIHN0YXR1cyA9IHN0YXR1c1JlYy5zdGF0dXM7XHJcblxyXG4gICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgLy9pZiAocnVsZU1hdGNoID09IGZhbHNlKVxyXG4gICAgICAgICAgICAgIC8vICBicmVhaztcclxuICAgICAgICAgICAgICBpKys7XHJcbiAgICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcblxyXG4gICAgfVxyXG4gICAgcmV0dXJuIHN0YXR1c1JlYztcclxuICB9XHJcbiAgcHVibGljIGNoZWNrSGFzUnVsZXMgKHJ1bGVzRGVmOmFueSwgcXJ5OmFueSAsVHJpZ2dlcjphbnkpXHJcbiAge1xyXG4gICAgbGV0IGZvdW5kID0gZmFsc2U7XHJcbiAgICAvL2NvbnNvbGUubG9nKFwiY2hlY2tIYXNSdWxlczpxcnk6XCIscXJ5LCAgVHJpZ2dlcilcclxuICAgICAgdmFyIGFjdGlvblB0ciA9IHJ1bGVzRGVmLmFjdGlvblB0cnNBcnJbcXJ5XTtcclxuICAgICAgaWYgKHR5cGVvZiBhY3Rpb25QdHIgIT09IFwidW5kZWZpbmVkXCIpXHJcbiAgICAgIHtcclxuICAgICAgICAvL2NvbnNvbGUubG9nKFwiY2hlY2tIYXNSdWxlczpxcnk6XCIsVHJpZ2dlciwgcXJ5LCAgYWN0aW9uUHRyKVxyXG4gICAgICAgIGZvdW5kID0gdHJ1ZTtcclxuICAgICAgfVxyXG4gICAgIHJldHVybiBmb3VuZDtcclxuXHJcblxyXG4gIH1cclxuXHJcbiAgcHVibGljIGNoZWNrUnVsZXMob2JqZWN0OmFueSwgcnVsZXNEZWY6YW55LCBhY3R1YWxSZXN1bHQ6YW55LCBUcmlnZ2VyOmFueSkge1xyXG4gICAgdmFyIHN0YXR1c1JlYzphbnkgPSB7fTtcclxuICAgIGlmKHRoaXMucGFyYW1Db25maWcuaXNDaGVja1J1bGVzID09IGZhbHNlKVxyXG4gICAgICByZXR1cm4gc3RhdHVzUmVjO1xyXG5cclxuICAgIC8vcmV0dXJuO1xyXG5cclxuXHJcbiAgICBpZiAodGhpcy5wYXJhbUNvbmZpZy5ERUJVR19GTEFHKSBjb25zb2xlLmxvZyhcImNoZWNrUnVsZXM6XCIsIFRyaWdnZXIsIFwiIHJvdXRpbmVfbmFtZTpcIiwgdGhpcy5yb3V0aW5lX25hbWUsIFwiIGFjdHVhbFJlc3VsdDpcIiwgYWN0dWFsUmVzdWx0KVxyXG5cclxuICAgIGlmIChUcmlnZ2VyID09IFwiUE9TVF9RVUVSWVwiKSB7XHJcbiAgICAgIGlmICh0eXBlb2YgYWN0dWFsUmVzdWx0LmRhdGFbMF0gIT09IFwidW5kZWZpbmVkXCIpIHtcclxuICAgICAgICBsZXQgdHJhbnNEYXRhID0gYWN0dWFsUmVzdWx0LmRhdGFbMF0uZGF0YTtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRyYW5zRGF0YS5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgaWYgKHRoaXMucGFyYW1Db25maWcuREVCVUdfRkxBRykgY29uc29sZS5sb2coXCJjaGVja1J1bGVzOnRyYW5zRGF0YVtpXTpcIiwgdHJhbnNEYXRhW2ldLCBpKTtcclxuICAgICAgICAgIGlmICh0aGlzLnBhcmFtQ29uZmlnLkRFQlVHX0ZMQUcpIGNvbnNvbGUubG9nKFwiY2hlY2tSdWxlczphY3R1YWxSZXN1bHQuZGF0YVswXS5xdWVyeTpcIiwgYWN0dWFsUmVzdWx0LmRhdGFbMF0ucXVlcnkpXHJcbiAgICAgICAgICBpZiAodGhpcy5wYXJhbUNvbmZpZy5ERUJVR19GTEFHKSBjb25zb2xlLmxvZyhcImNoZWNrUnVsZXM6YWN0dWFsUmVzdWx0LmRhdGFbMF0gSEYgcGxlYXNlXCIsIGFjdHVhbFJlc3VsdC5kYXRhWzBdLmRhdGEpO1xyXG4gICAgICAgICAgbGV0IHF1ZXJ5RGF0YSA9IHRyYW5zRGF0YVtpXTtcclxuICAgICAgICAgIFxyXG4gICAgICAgICAgcXVlcnlEYXRhW1wiX1FVRVJZXCJdID0gYWN0dWFsUmVzdWx0LmRhdGFbMF0ucXVlcnk7XHJcbiAgICAgICAgICAvLyAgICAgICBpZiAodGhpcy5wYXJhbUNvbmZpZy5ERUJVR19GTEFHKSBjb25zb2xlLmxvZyhcInF1ZXJ5RGF0YTpcIiwgcXVlcnlEYXRhKVxyXG4gICAgICAgICAgbGV0IGZvdW5kUnVsZSA9IHRoaXMuY2hlY2tIYXNSdWxlcyhydWxlc0RlZiwgcXVlcnlEYXRhWydfUVVFUlknXSwgXCJQT1NUX1FVRVJZXCIpO1xyXG4gICAgICAgICAgaWYgKGZvdW5kUnVsZSl7XHJcbiAgICAgICAgICAgICAgc3RhdHVzUmVjID0gdGhpcy5jaGVja1J1bGVzQnlUcmlnZ2VyKG9iamVjdCwgcnVsZXNEZWYsIHF1ZXJ5RGF0YSwgVHJpZ2dlciwgdGhpcy5yb3V0aW5lX25hbWUsIHRoaXMuaG9zdHNBcnIsIHRoaXMuaG9zdHNNYXBBcnIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICAgIC8vY29uc29sZS5sb2coXCJzdGF0dXNSZWM6UE9TVF9RVUVSWTpcIiwgc3RhdHVzUmVjKTtcclxuICAgICAgICAgIGlmIChzdGF0dXNSZWNbJ3N0YXR1cyddICA9PSAtMSl7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGVsc2UgaWYgKFRyaWdnZXIgPT0gXCJQUkVfUVVFUllcIikge1xyXG5cclxuICAgICAgaWYgKHR5cGVvZiBhY3R1YWxSZXN1bHQgIT09IFwidW5kZWZpbmVkXCIpIHtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFjdHVhbFJlc3VsdC5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgaWYgKHRoaXMucGFyYW1Db25maWcuREVCVUdfRkxBRykgY29uc29sZS5sb2coXCJhY3R1YWxSZXN1bHRbaV06XCIsIGFjdHVhbFJlc3VsdFtpXSlcclxuICAgICAgICAgIGxldCBxdWVyeURhdGEgPSBhY3R1YWxSZXN1bHRbaV07XHJcbiAgICAgICAgICBpZiAodGhpcy5wYXJhbUNvbmZpZy5ERUJVR19GTEFHKSBjb25zb2xlLmxvZyhcInF1ZXJ5RGF0YTpcIiwgcXVlcnlEYXRhKVxyXG4gICAgICAgICAgICAgbGV0IGZvdW5kUnVsZSA9IHRoaXMuY2hlY2tIYXNSdWxlcyhydWxlc0RlZiwgcXVlcnlEYXRhWydfUVVFUlknXSwgXCJQUkVfUVVFUllcIik7XHJcblx0XHRcdCAgICAgICBpZiAoZm91bmRSdWxlKXtcclxuICAgICAgICAgICAgICAgIHN0YXR1c1JlYyA9IHRoaXMuY2hlY2tSdWxlc0J5VHJpZ2dlcihvYmplY3QsIHJ1bGVzRGVmLCBxdWVyeURhdGEsIFRyaWdnZXIsIHRoaXMucm91dGluZV9uYW1lLCB0aGlzLmhvc3RzQXJyLCB0aGlzLmhvc3RzTWFwQXJyKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgaWYgKHRoaXMucGFyYW1Db25maWcuREVCVUdfRkxBRykgY29uc29sZS5sb2coXCJjaGVja1J1bGVzOkRvbmVcIiwgVHJpZ2dlciwgXCIgcm91dGluZV9uYW1lOlwiLCB0aGlzLnJvdXRpbmVfbmFtZSwgXCIgYWN0dWFsUmVzdWx0OlwiLCBhY3R1YWxSZXN1bHQpO1xyXG4gICAgcmV0dXJuIHN0YXR1c1JlYztcclxuXHJcbiAgfVxyXG4gIC8vLy8vLy8vLy8vLy8vXHJcbiAgcHVibGljIHN0b3JlQWN0aW9uc1B0cnMoYWN0aW9uczphbnksIHJ1bGVzRGVmOmFueSkge1xyXG4gIGxldCBjdXJyZW50UVVFUllfREVGID0gXCJcIjtcclxuICBsZXQgY3VycmVudFJVTEVfSUQgPSBcIlwiO1xyXG4gICAgbGV0IGFjdGlvblB0cnM6YW55ID0gW107XHJcblxyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhY3Rpb25zLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIGlmICgoY3VycmVudFFVRVJZX0RFRiAhPSBhY3Rpb25zW2ldLlFVRVJZX0RFRikgJiYgKGN1cnJlbnRSVUxFX0lEICE9IGFjdGlvbnNbaV0uUlVMRV9JRCkpIHtcclxuICAgICAgICBpZiAoaSA9PSAwKVxyXG4gICAgICAgIGFjdGlvblB0cnMucHVzaChpKTtcclxuICAgICAgICBpZiAoY3VycmVudFFVRVJZX0RFRiAhPSBcIlwiKSB7XHJcbiAgICAgICAgcnVsZXNEZWYuYWN0aW9uUHRyc0FycltjdXJyZW50UVVFUllfREVGXSA9IGFjdGlvblB0cnM7XHJcbiAgICAgICAgYWN0aW9uUHRycyA9IFtdO1xyXG4gICAgICAgIGFjdGlvblB0cnMucHVzaChpKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgICBjdXJyZW50UVVFUllfREVGID0gYWN0aW9uc1tpXS5RVUVSWV9ERUY7XHJcbiAgICAgICAgY3VycmVudFJVTEVfSUQgPSBhY3Rpb25zW2ldLlJVTEVfSUQ7XHJcbiAgICAgIC8vaWYgKHRoaXMucGFyYW1Db25maWcuREVCVUdfRkxBRykgY29uc29sZS5sb2coXCJydWxlUHRyczE6XCIscnVsZVB0cnMpO1xyXG5cclxuICAgIH1cclxuICAgICAgZWxzZSBpZiAoKGN1cnJlbnRRVUVSWV9ERUYgPT0gYWN0aW9uc1tpXS5RVUVSWV9ERUYpICYmIChjdXJyZW50UlVMRV9JRCAhPSBhY3Rpb25zW2ldLlJVTEVfSUQpKSB7XHJcbiAgICAgICAgY3VycmVudFJVTEVfSUQgPSBhY3Rpb25zW2ldLlJVTEVfSUQ7XHJcbiAgICAgIGFjdGlvblB0cnMucHVzaChpKTtcclxuXHJcbiAgICB9XHJcbiAgICAgIGVsc2UgaWYgKChjdXJyZW50UVVFUllfREVGID09IGFjdGlvbnNbaV0uUVVFUllfREVGKSAmJiAoY3VycmVudFJVTEVfSUQgPT0gYWN0aW9uc1tpXS5SVUxFX0lEKSkge1xyXG4gICAgICAgIGFjdGlvblB0cnMucHVzaChpKTtcclxuICAgICAgICBjdXJyZW50UlVMRV9JRCA9IGFjdGlvbnNbaV0uUlVMRV9JRDtcclxuICAgIFxyXG4gICAgXHJcbiAgICAgIH1cclxuICAgICAgaWYgKHRoaXMucGFyYW1Db25maWcuREVCVUdfRkxBRykgY29uc29sZS5sb2coXCJhY3Rpb25QdHJzMjpcIiwgYWN0aW9uUHRycyk7XHJcbiAgfVxyXG4gIC8vYWN0aW9uUHRycy5wdXNoKGkpO1xyXG4gIHJ1bGVzRGVmLmFjdGlvblB0cnNBcnJbY3VycmVudFFVRVJZX0RFRl0gPSBhY3Rpb25QdHJzO1xyXG4gICAgaWYgKHRoaXMucGFyYW1Db25maWcuREVCVUdfRkxBRykgY29uc29sZS5sb2coXCJydWxlc0RlZi5hY3Rpb25QdHJzQXJyOlwiLCBydWxlc0RlZi5hY3Rpb25QdHJzQXJyKTtcclxufVxyXG5cclxuXHJcblxyXG4gIHB1YmxpYyBzdG9yZVJ1bGVzUHRycyhydWxlczphbnksIHJ1bGVzRGVmOmFueSkge1xyXG4gICAgICBsZXQgY3VycmVudFFVRVJZX0RFRiA9IFwiXCI7XHJcbiAgICAgIGxldCBjdXJyZW50UlVMRV9JRCA9IFwiXCI7XHJcbiAgICBsZXQgcnVsZVB0cnM6YW55ID0gW107XHJcblxyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBydWxlcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIGlmICh0aGlzLnBhcmFtQ29uZmlnLkRFQlVHX0ZMQUcpIGNvbnNvbGUubG9nKHJ1bGVzW2ldLlFVRVJZX0RFRiArIFwiIDogXCIgKyBydWxlc1tpXS5SVUxFX0lEICsgXCIgICAgICAgICAgXCIgKyBjdXJyZW50UVVFUllfREVGICsgXCIgOiBcIiArIGN1cnJlbnRSVUxFX0lEKTtcclxuICAgICAgaWYgKChjdXJyZW50UVVFUllfREVGICE9IHJ1bGVzW2ldLlFVRVJZX0RFRikgJiYgKGN1cnJlbnRSVUxFX0lEICE9IHJ1bGVzW2ldLlJVTEVfSUQpKSB7XHJcbiAgICAgICAgICBpZiAodGhpcy5wYXJhbUNvbmZpZy5ERUJVR19GTEFHKSBjb25zb2xlLmxvZyhcIiBub3QgZXF1YWxcIik7XHJcbiAgICAgICAgaWYgKGkgPT0gMClcclxuICAgICAgICAgICAgcnVsZVB0cnMucHVzaChpKTtcclxuICAgICAgICBpZiAoY3VycmVudFFVRVJZX0RFRiAhPSBcIlwiKSB7XHJcbiAgICAgICAgICBpZiAodGhpcy5wYXJhbUNvbmZpZy5ERUJVR19GTEFHKSBjb25zb2xlLmxvZyhcIi0tc3RvcmluZyBydWxlUHRyczI6XCIsIHJ1bGVQdHJzKTtcclxuICAgICAgICAgICAgcnVsZXNEZWYucnVsZVB0cnNBcnJbY3VycmVudFFVRVJZX0RFRl0gPSBydWxlUHRycztcclxuICAgICAgICAgICAgcnVsZVB0cnMgPSBbXTtcclxuICAgICAgICAgICAgcnVsZVB0cnMucHVzaChpKTtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgY3VycmVudFFVRVJZX0RFRiA9IHJ1bGVzW2ldLlFVRVJZX0RFRjtcclxuICAgICAgICBjdXJyZW50UlVMRV9JRCA9IHJ1bGVzW2ldLlJVTEVfSUQ7XHJcbiAgICAgICAgaWYgKHRoaXMucGFyYW1Db25maWcuREVCVUdfRkxBRykgY29uc29sZS5sb2coXCJydWxlUHRyczE6XCIscnVsZVB0cnMpO1xyXG5cclxuICAgICAgICB9XHJcbiAgICAgIGVsc2UgaWYgKChjdXJyZW50UVVFUllfREVGID09IHJ1bGVzW2ldLlFVRVJZX0RFRikgJiYgKGN1cnJlbnRSVUxFX0lEICE9IHJ1bGVzW2ldLlJVTEVfSUQpKSB7XHJcbiAgICAgICAgICBpZiAodGhpcy5wYXJhbUNvbmZpZy5ERUJVR19GTEFHKSBjb25zb2xlLmxvZyhcIiBub3QgZXF1YWwyXCIpO1xyXG4gICAgICAgICAgcnVsZVB0cnMucHVzaChpKTtcclxuICAgICAgICBjdXJyZW50UlVMRV9JRCA9IHJ1bGVzW2ldLlJVTEVfSUQ7XHJcbiAgICAgICAgaWYgKHRoaXMucGFyYW1Db25maWcuREVCVUdfRkxBRykgY29uc29sZS5sb2coXCJydWxlUHRyczI6XCIsIHJ1bGVQdHJzKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAoICggY3VycmVudFFVRVJZX0RFRiA9PSBydWxlc1tpXS5RVUVSWV9ERUYgKSAmJiAoIGN1cnJlbnRSVUxFX0lEID09IHJ1bGVzW2ldLlJVTEVfSUQgKSApXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhcIiBlcXVhbDNcIik7XHJcbiAgICAgICAgICAgIHJ1bGVQdHJzLnB1c2goaSk7XHJcbiAgICAgICAgICAgIGN1cnJlbnRSVUxFX0lEID0gcnVsZXNbaV0uUlVMRV9JRCA7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhcInJ1bGVQdHJzMzpcIixydWxlUHRycyk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgIGlmICh0aGlzLnBhcmFtQ29uZmlnLkRFQlVHX0ZMQUcpIGNvbnNvbGUubG9nKFwicnVsZVB0cnM0OlwiLCBydWxlUHRycyk7XHJcbiAgICAgIH1cclxuICAgICAgLy9ydWxlUHRycy5wdXNoKGkpO1xyXG4gICAgaWYgKHRoaXMucGFyYW1Db25maWcuREVCVUdfRkxBRykgY29uc29sZS5sb2coXCJydWxlUHRyczU6XCIscnVsZVB0cnMpO1xyXG4gICAgICBydWxlc0RlZi5ydWxlUHRyc0FycltjdXJyZW50UVVFUllfREVGXSA9IHJ1bGVQdHJzO1xyXG4gICAgaWYgKHRoaXMucGFyYW1Db25maWcuREVCVUdfRkxBRykgY29uc29sZS5sb2coXCJ0ZXN0MzpydWxlc0RlZi5ydWxlUHRyc0FycjpcIiwgcnVsZXNEZWYucnVsZVB0cnNBcnIpO1xyXG4gICAgfVxyXG5cclxuLy8vLy8vLy8vLy8vLy9cclxuICBwdWJsaWMgbG9hZFJ1bGVzKG9iamVjdDphbnkpIHtcclxuXHJcbiAgICBvYmplY3QuQm9keSA9IFtdO1xyXG4gICAgbGV0IFBhZ2UgPSBcIlwiO1xyXG4gICAgbGV0IE5ld1ZhbDphbnkgPSB7fTtcclxuICAgIE5ld1ZhbFtcIl9RVUVSWVwiXSA9IFwiR0VUX0FETV9SVUxFX0RFRl9SVUxFX0lURU1cIjtcclxuICAgIE5ld1ZhbFtcIlJVTEVfVFJJR0dFUlwiXSA9IFwiUE9TVF9RVUVSWVwiO1xyXG4gICAgaWYgKHRoaXMucGFyYW1Db25maWcuREVCVUdfRkxBRykgY29uc29sZS5sb2coXCJ0ZXN0Ok5ld1ZhbDpcIiwgTmV3VmFsKVxyXG4gICAgaWYgKHRoaXMucGFyYW1Db25maWcuREVCVUdfRkxBRykgY29uc29sZS5sb2coXCJ0ZXN0Om9iamVjdC5Cb2R5OlwiLCBvYmplY3QuQm9keSlcclxuICAgIG9iamVjdC5hZGRUb0JvZHkoTmV3VmFsKTtcclxuXHJcbiAgICBpZiAodGhpcy5wYXJhbUNvbmZpZy5ERUJVR19GTEFHKSBjb25zb2xlLmxvZyhcInRlc3Q6b2JqZWN0LkJvZHk6XCIsIG9iamVjdC5Cb2R5KVxyXG4gICAgTmV3VmFsID0ge307XHJcbiAgICBOZXdWYWxbXCJfUVVFUllcIl0gPSBcIkdFVF9BRE1fUlVMRV9ERUZfUlVMRV9BQ1RJT05cIjtcclxuICAgIE5ld1ZhbFtcIlJVTEVfVFJJR0dFUlwiXSA9IFwiUE9TVF9RVUVSWVwiO1xyXG4gICAgb2JqZWN0LmFkZFRvQm9keShOZXdWYWwpO1xyXG5cclxuICAgIE5ld1ZhbCA9IHt9O1xyXG4gICAgTmV3VmFsW1wiX1FVRVJZXCJdID0gXCJHRVRfQURNX1JVTEVfSE9TVFwiO1xyXG4gICAgTmV3VmFsW1wiSE9TVF9JRFwiXSA9IFwiJVwiO1xyXG4gICAgb2JqZWN0LmFkZFRvQm9keShOZXdWYWwpO1xyXG5cclxuICAgIE5ld1ZhbCA9IHt9O1xyXG4gICAgTmV3VmFsW1wiX1FVRVJZXCJdID0gXCJHRVRfQURNX1JVTEVfSE9TVF9NQVBcIjtcclxuICAgIE5ld1ZhbFtcIkhPU1RfSURcIl0gPSBcIiVcIjtcclxuICAgIE5ld1ZhbFtcIk1BUF9JRFwiXSA9IFwiJVwiO1xyXG4gICAgb2JqZWN0LmFkZFRvQm9keShOZXdWYWwpO1xyXG5cclxuICAgIHRoaXMucG9zdChvYmplY3QsIFBhZ2UsIG9iamVjdC5Cb2R5KS5zdWJzY3JpYmUocmVzdWx0ID0+IHtcclxuICAgICAgaWYgKHRoaXMucGFyYW1Db25maWcuREVCVUdfRkxBRykgY29uc29sZS5sb2coXCJ0ZXN0OnJlc3VsdC5kYXRhOlwiLCByZXN1bHQuZGF0YSk7XHJcblxyXG5cclxuICAgICAgdGhpcy5ydWxlc1Bvc3RRdWVyeURlZi5ydWxlUHRyc0FyciA9IHt9O1xyXG4gICAgICB0aGlzLnJ1bGVzUG9zdFF1ZXJ5RGVmLmFjdGlvblB0cnNBcnIgPSBbXTtcclxuXHJcbiAgICAgIHRoaXMuc3RvcmVSdWxlc1B0cnMocmVzdWx0LmRhdGFbMF0uZGF0YSwgdGhpcy5ydWxlc1Bvc3RRdWVyeURlZilcclxuICAgICAgdGhpcy5ydWxlc1Bvc3RRdWVyeURlZi5ydWxlc0FyciA9IHJlc3VsdC5kYXRhWzBdLmRhdGE7XHJcblxyXG4gICAgICB0aGlzLnN0b3JlQWN0aW9uc1B0cnMocmVzdWx0LmRhdGFbMV0uZGF0YSwgdGhpcy5ydWxlc1Bvc3RRdWVyeURlZik7XHJcbiAgICAgIHRoaXMucnVsZXNQb3N0UXVlcnlEZWYuYWN0aW9uc0FyciA9IHJlc3VsdC5kYXRhWzFdLmRhdGE7XHJcbiAgICAgIGlmICh0aGlzLnBhcmFtQ29uZmlnLkRFQlVHX0ZMQUcpIGNvbnNvbGUubG9nKFwidGVzdDp0aGlzLnJ1bGVzUG9zdFF1ZXJ5RGVmXCIsIHRoaXMucnVsZXNQb3N0UXVlcnlEZWYpXHJcblxyXG4gICAgICB0aGlzLmhvc3RzQXJyID0gcmVzdWx0LmRhdGFbMl0uZGF0YTtcclxuICAgICAgdGhpcy5ob3N0c01hcEFyciA9IHJlc3VsdC5kYXRhWzNdLmRhdGE7XHJcblxyXG4gICAgICAvLy8vLy8vLy8vLy8vL1xyXG4gICAgICBvYmplY3QuQm9keSA9IFtdO1xyXG4gICAgfSxcclxuICAgIGVyciA9PiB7XHJcbiAgICAgICAgb2JqZWN0LkJvZHkgPSBbXTtcclxuICAgICAgICB0aGlzLnNob3dOb3RpZmljYXRpb24oXCJlcnJvclwiLCBcImVycm9yOlwiICsgZXJyLm1lc3NhZ2UpO1xyXG4gICAgfSk7XHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy8vLy8vLy8vLy8vLy9cclxuICAgIG9iamVjdC5Cb2R5ID0gW107XHJcbiAgICBQYWdlID0gXCJcIjtcclxuTmV3VmFsID0ge307XHJcbk5ld1ZhbFtcIl9RVUVSWVwiXSA9IFwiR0VUX0FETV9SVUxFX0RFRl9SVUxFX0lURU1cIjtcclxuTmV3VmFsW1wiUlVMRV9UUklHR0VSXCJdID0gXCJQUkVfUVVFUllcIjtcclxuaWYgKHRoaXMucGFyYW1Db25maWcuREVCVUdfRkxBRykgY29uc29sZS5sb2coXCJ0ZXN0Ok5ld1ZhbDpcIiwgTmV3VmFsKVxyXG5pZiAodGhpcy5wYXJhbUNvbmZpZy5ERUJVR19GTEFHKSBjb25zb2xlLmxvZyhcInRlc3Q6b2JqZWN0LkJvZHk6XCIsIG9iamVjdC5Cb2R5KVxyXG5vYmplY3QuYWRkVG9Cb2R5KE5ld1ZhbCk7XHJcblxyXG5pZiAodGhpcy5wYXJhbUNvbmZpZy5ERUJVR19GTEFHKSBjb25zb2xlLmxvZyhcInRlc3Q6b2JqZWN0LkJvZHk6XCIsIG9iamVjdC5Cb2R5KVxyXG5OZXdWYWwgPSB7fTtcclxuTmV3VmFsW1wiX1FVRVJZXCJdID0gXCJHRVRfQURNX1JVTEVfREVGX1JVTEVfQUNUSU9OXCI7XHJcbk5ld1ZhbFtcIlJVTEVfVFJJR0dFUlwiXSA9IFwiUFJFX1FVRVJZXCI7XHJcbm9iamVjdC5hZGRUb0JvZHkoTmV3VmFsKTtcclxuXHJcblxyXG5cclxuICAgIHRoaXMucG9zdChvYmplY3QsIFBhZ2UsIG9iamVjdC5Cb2R5KS5zdWJzY3JpYmUocmVzdWx0ID0+IHtcclxuICBpZiAodGhpcy5wYXJhbUNvbmZpZy5ERUJVR19GTEFHKSBjb25zb2xlLmxvZyhcInRlc3Q6cmVzdWx0LmRhdGE6XCIsIHJlc3VsdC5kYXRhKTtcclxuXHJcbi8vLy8vLy8vLy8vLy8vXHJcbiAgICAgIHRoaXMucnVsZXNQcmVRdWVyeURlZi5ydWxlUHRyc0FyciA9IHt9O1xyXG4gICAgICB0aGlzLnJ1bGVzUHJlUXVlcnlEZWYuYWN0aW9uUHRyc0FyciA9IHt9O1xyXG5cclxuICB0aGlzLnN0b3JlUnVsZXNQdHJzKHJlc3VsdC5kYXRhWzBdLmRhdGEsIHRoaXMucnVsZXNQcmVRdWVyeURlZilcclxuICB0aGlzLnJ1bGVzUHJlUXVlcnlEZWYucnVsZXNBcnIgPSByZXN1bHQuZGF0YVswXS5kYXRhO1xyXG5cclxuICAgICAgdGhpcy5zdG9yZUFjdGlvbnNQdHJzKHJlc3VsdC5kYXRhWzFdLmRhdGEsIHRoaXMucnVsZXNQcmVRdWVyeURlZik7XHJcbiAgdGhpcy5ydWxlc1ByZVF1ZXJ5RGVmLmFjdGlvbnNBcnIgPSByZXN1bHQuZGF0YVsxXS5kYXRhO1xyXG4gIGlmICh0aGlzLnBhcmFtQ29uZmlnLkRFQlVHX0ZMQUcpIGNvbnNvbGUubG9nKFwidGVzdDp0aGlzLnJ1bGVzUHJlUXVlcnlEZWZcIiwgdGhpcy5ydWxlc1ByZVF1ZXJ5RGVmKVxyXG5cclxuXHJcbiAgLy8vLy8vLy8vLy8vLy9cclxuICAgICAgb2JqZWN0LkJvZHkgPSBbXTtcclxufSxcclxuZXJyID0+IHtcclxuICAgICAgICBvYmplY3QuQm9keSA9IFtdO1xyXG4gICAgICAgIHRoaXMuc2hvd05vdGlmaWNhdGlvbihcImVycm9yXCIsIFwiZXJyb3I6XCIgKyBlcnIubWVzc2FnZSk7XHJcbn0pO1xyXG5cclxuICB9XHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuICBwdWJsaWMgbGtwQ2FjaGU9W107XHJcbiAgcHVibGljIGZldGNoTG9va3VwcyAoIG9iamVjdCxsb29rdXBBcnJEZWYpe1xyXG4gICAgbGV0IEJvZHkgPVtdO1xyXG4gICAgZm9yIChsZXQgaT0wOyBpPCBsb29rdXBBcnJEZWYubGVuZ3RoOyBpKyspe1xyXG4gICAgICBsZXQgTmV3VmFsID0ge307XHJcbiAgICAgIE5ld1ZhbFtcIl9RVUVSWVwiXSA9IFwiR0VUX1NUTVRcIjtcclxuICAgICAgTmV3VmFsW1wiX1NUTVRcIl0gID0gIGxvb2t1cEFyckRlZltpXS5zdGF0bWVudDtcclxuICAgICAgaWYgKGxvb2t1cEFyckRlZltpXS5zdGF0bWVudCAhPSBcIltdXCIpXHJcbiAgICAgICAgQm9keSA9IHRoaXMuYWRkVG9Cb2R5KE5ld1ZhbCxCb2R5KTtcclxuICAgIH1cclxuXHJcbiAgICBsZXQgUGFnZSA9ICBcIlwiO1xyXG4gICAgdGhpcy5wb3N0KG9iamVjdCxQYWdlLEJvZHkpLnN1YnNjcmliZShyZXN1bHQgPT4ge1xyXG4gICAgICBmb3IgKGxldCBpPTA7IGk8IGxvb2t1cEFyckRlZi5sZW5ndGg7IGkrKyl7XHJcbiAgICAgICAgLy9pZiAodGhpcy5wYXJhbUNvbmZpZy5ERUJVR19GTEFHKSBjb25zb2xlLmxvZyhcInJlc3VsdC5kYXRhW2ldLmRhdGE6XCIscmVzdWx0LmRhdGFbaV0uZGF0YVswXSlcclxuICAgICAgICBpZiAgKHR5cGVvZiByZXN1bHQuZGF0YVtpXSAhPT0gXCJ1bmRlZmluZWRcIil7XHJcbiAgICAgICAgICBpZiAgKHR5cGVvZiByZXN1bHQuZGF0YVtpXS5kYXRhWzBdICE9PSBcInVuZGVmaW5lZFwiKXtcclxuICAgICAgICAgICAgLy9hZGQgZW1wdHkgcmVjb3JkIGF0IGJlZ2luaW5nIG9mIHRoZSBhcnJheSBmb3IgdGhlIExPViBmb3IgaW5zZXJ0IG5ldyByZWNvcmQgaW4gYSBncmlkIHdvcmsgcHJvcGVybHlcclxuICAgICAgICAgICAgbGV0IGtleXMgPSBPYmplY3Qua2V5cyhyZXN1bHQuZGF0YVtpXS5kYXRhWzBdKTtcclxuICAgICAgICAgICAgbGV0IGVtcHR5UmVjID17fTtcclxuXHJcbiAgICAgICAgICAgIGxldCBoYXNTcGFjZT1mYWxzZTtcclxuICAgICAgICAgICAgLy8gbGV0IGNvZGVUeHQgPSBrZXlzWzBdO1xyXG4gICAgICAgICAgICAvLyBsZXQgZGF0YVNldCA9IE9iamVjdC5hc3NpZ24oW10sIHJlc3VsdC5kYXRhW2ldLmRhdGEpO1xyXG5cclxuICAgICAgICAgICAgLy8gZGF0YVNldC5maW5kKGVsZW0gPT57XHJcbiAgICAgICAgICAgIC8vICAgLy9jb25zb2xlLmxvZyhcImVsbTpcIixlbGVtKTtcclxuICAgICAgICAgICAgLy8gICBpZiAoZWxlbVtjb2RlVHh0XS50cmltKCkgPT0gXCJcIil7XHJcbiAgICAgICAgICAgIC8vICAgICBoYXNTcGFjZSA9IHRydWU7XHJcbiAgICAgICAgICAgIC8vICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgLy8gICB9XHJcbiAgICAgICAgICAgIC8vIH0pO1xyXG5cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGlmICggIWhhc1NwYWNlKXtcclxuICAgICAgICAgICAgZm9yIChsZXQgayA9MDsgayA8IGtleXMubGVuZ3RoOyBrKyspe1xyXG4gICAgICAgICAgICAgICAgLy9pZiAodGhpcy5wYXJhbUNvbmZpZy5ERUJVR19GTEFHKSBjb25zb2xlLmxvZyhcIltrZXlzW2tdOlwiLCBrZXlzW2tdKTtcclxuICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2coXCJba2V5c1trXTpcIiwga2V5c1trXSk7XHJcbiAgICAgICAgICAgICAgICBlbXB0eVJlY1trZXlzW2tdXSA9IFwiXCI7XHJcbiAgICAgICAgICAgICAgICAvL29iamVjdC5wcmltYXJLZXlSZWFkT25seUFycltrZXlzW2tdXSA9IHZhbHVlO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLy9pZiAodGhpcy5wYXJhbUNvbmZpZy5ERUJVR19GTEFHKSBjb25zb2xlLmxvZyhcImVtcHR5UmVjOlwiLGVtcHR5UmVjKVxyXG4gICAgICAgICAgICAvL2NvbnNvbGUubG9nKFwiZW1wdHlSZWM6XCIsZW1wdHlSZWMpO1xyXG4gICAgICAgICAgICAvL3Jlc3VsdC5kYXRhW2ldLmRhdGEuc3BsaWNlKDAsMCxlbXB0eVJlYyk7IC8vYWRkIGVtcHR5IHJlY29yZCBhdCBiZWdpbmluZyBvZiB0aGUgYXJyYXkgZm9yIHRoZSBMT1YgZm9yIGluc2VydCBuZXcgcmVjb3JkIGluIGEgZ3JpZCB3b3JrIHByb3Blcmx5XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICAgIG9iamVjdFtsb29rdXBBcnJEZWZbaV0ubGtwQXJyTmFtZV0gPSByZXN1bHQuZGF0YVtpXS5kYXRhO1xyXG4gICAgICAgIC8vaWYgKHRoaXMucGFyYW1Db25maWcuREVCVUdfRkxBRykgY29uc29sZS5sb2coXCJsb29rdXBBcnJEZWZbaV0ubGtwQXJyTmFtZTpcIiwgbG9va3VwQXJyRGVmW2ldLmxrcEFyck5hbWUsIG9iamVjdFtsb29rdXBBcnJEZWZbaV0ubGtwQXJyTmFtZV0pXHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgIH1cclxuICAgICAgaWYgICh0eXBlb2Ygb2JqZWN0LmZldGNoTG9va3Vwc0NhbGxCYWNrICE9PSBcInVuZGVmaW5lZFwiKVxyXG4gICAgICAgIG9iamVjdC5mZXRjaExvb2t1cHNDYWxsQmFjaygpO1xyXG5cclxuICAgIH0sXHJcbiAgICBlcnIgPT4ge1xyXG4gICAgICAvL2FsZXJ0ICgnZXJyb3I6JyArIGVyci5tZXNzYWdlKTtcclxuICAgICAgdGhpcy5zaG93RXJyb3JNc2cob2JqZWN0LCBlcnIpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG4gIFxyXG4gICAgcHVibGljIHBlcmZvcm1Qb3N0KG9iamVjdDphbnksIGZuOmFueSkge1xyXG4gICAgbGV0IFBhZ2UgPSBcIlwiO1xyXG4gICAgdGhpcy5wb3N0KG9iamVjdCwgUGFnZSwgb2JqZWN0LkJvZHkpLnN1YnNjcmliZShyZXN1bHQgPT4ge1xyXG4gICAgICBmbihvYmplY3QsIHJlc3VsdCk7XHJcbiAgICAgIG9iamVjdC5Cb2R5ID0gW107XHJcbiAgICB9LFxyXG4gICAgZXJyID0+IHtcclxuICAgICAgLy9hbGVydCAoJ2Vycm9yOicgKyBlcnIubWVzc2FnZSk7XHJcbiAgICAgIHRoaXMuc2hvd0Vycm9yTXNnKG9iamVjdCwgZXJyKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcblxyXG4gIHB1YmxpYyBzZXRDb21wb25lbnRDb25maWcoY29tcG9uZW50Q29uZmlnOmFueSwgc2NyZWVuQ29uZmlnOmFueSkge1xyXG4gICAgbGV0IGtleXMgPSBPYmplY3Qua2V5cyhjb21wb25lbnRDb25maWcpO1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBrZXlzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgLy9pZiAodGhpcy5wYXJhbUNvbmZpZy5ERUJVR19GTEFHKSBjb25zb2xlLmxvZygga2V5c1tpXSArIFwiIFwiICsgY29tcG9uZW50Q29uZmlnWyBrZXlzW2ldIF0gKSA7XHJcbiAgICAgIGlmIChjb21wb25lbnRDb25maWdba2V5c1tpXV0gIT0gbnVsbCkge1xyXG4gICAgICAgIHNjcmVlbkNvbmZpZ1trZXlzW2ldXSA9IGNvbXBvbmVudENvbmZpZ1trZXlzW2ldXTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIC8vaWYgKHRoaXMucGFyYW1Db25maWcuREVCVUdfRkxBRykgY29uc29sZS5sb2coc2NyZWVuQ29uZmlnKTtcclxuICAgIHJldHVybiBzY3JlZW5Db25maWc7XHJcbiAgfVxyXG4gIHB1YmxpYyBnZXRSb3V0aW5lQXV0aChtZW51OmFueSwgcm91dGluZV9uYW1lOmFueSkge1xyXG4gICAgbGV0IGkgPSAwO1xyXG4gICAgbGV0IHJvdXRpbmVBdXRoO1xyXG4gICAgbGV0IGZvdW5kID0gZmFsc2U7XHJcbiAgICBpZiAodHlwZW9mIG1lbnUgIT09IFwidW5kZWZpbmVkXCIpIHtcclxuICAgICAgd2hpbGUgKGkgPCBtZW51Lmxlbmd0aCkge1xyXG4gICAgICAgIGxldCBqID0gMDtcclxuICAgICAgICB3aGlsZSAoaiA8IG1lbnVbaV0uaXRlbXMubGVuZ3RoKSB7XHJcbiAgICAgICAgICBpZiAobWVudVtpXS5pdGVtc1tqXS5jaG9pY2UgPT0gcm91dGluZV9uYW1lKSB7XHJcbiAgICAgICAgICAgIHJvdXRpbmVBdXRoID0gbWVudVtpXS5pdGVtc1tqXTtcclxuICAgICAgICAgICAgZm91bmQgPSB0cnVlO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGorKztcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGZvdW5kKVxyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgaSsrO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy5wYXJhbUNvbmZpZy5ERUJVR19GTEFHKSBjb25zb2xlLmxvZyhcInJvdXRpbmVfbmFtZTpcIiwgcm91dGluZV9uYW1lLCBcInJvdXRpbmVBdXRoOlwiLCByb3V0aW5lQXV0aCwgXCIgbWVudTpcIiwgbWVudSk7XHJcblxyXG5cclxuICAgIHJldHVybiAocm91dGluZUF1dGgpO1xyXG4gIH1cclxuICBwdWJsaWMgYWN0T25QYXJhbUNvbmZpZyhvYmplY3Q6YW55LCByb3V0aW5lX25hbWU6YW55KSB7XHJcbiAgICBpZiAodGhpcy5wYXJhbUNvbmZpZy5ERUJVR19GTEFHKSBjb25zb2xlLmxvZyhcInJvdXRpbmVfbmFtZTpcIiArIHJvdXRpbmVfbmFtZSlcclxuICAgIGxldCBwYXJhbUNvbmZpZyA9IGdldFBhcmFtQ29uZmlnKCk7XHJcbiAgICBsZXQgbWVudSA9IHBhcmFtQ29uZmlnLm1lbnU7XHJcbiAgICBsZXQgcm91dGluZUF1dGggPSB0aGlzLmdldFJvdXRpbmVBdXRoKG1lbnUsIHJvdXRpbmVfbmFtZSk7XHJcblxyXG4gICAgaWYgKHR5cGVvZiByb3V0aW5lQXV0aCAhPT0gXCJ1bmRlZmluZWRcIikge1xyXG4gICAgICBvYmplY3QudGl0bGUgPSByb3V0aW5lQXV0aC50ZXh0ICsgXCIgKFwiICsgcm91dGluZUF1dGgucm91dGluZVZlciArIFwiKVwiO1xyXG4gICAgICBvYmplY3Qucm91dGluZUF1dGggPSByb3V0aW5lQXV0aDtcclxuICAgICAgdGhpcy5yb3V0aW5lX25hbWUgPSByb3V0aW5lX25hbWU7XHJcbiAgICAgIGlmICh0aGlzLnBhcmFtQ29uZmlnLkRFQlVHX0ZMQUcpIGNvbnNvbGUubG9nKFwib2JqZWN0LnRpdGxlOlwiICsgb2JqZWN0LnRpdGxlKVxyXG4gICAgfVxyXG4gICAgZWxzZVxyXG4gICAgICBpZiAocm91dGluZV9uYW1lID09IFwiRFNQRUtZQ1wiKSB7XHJcbiAgICAgICAgdGhpcy5yb3V0aW5lX25hbWUgPSByb3V0aW5lX25hbWU7XHJcbiAgICAgIH1cclxuICAgIGlmICh0aGlzLnBhcmFtQ29uZmlnLkRFQlVHX0ZMQUcpIGNvbnNvbGUubG9nKFwidGhpcy5yb3V0aW5lX25hbWU6XCIgKyB0aGlzLnJvdXRpbmVfbmFtZSlcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzaG93RXJyb3JNc2cob2JqZWN0OmFueSwgc2VydmVyRXJyb3I6YW55KSB7XHJcbiAgICBsZXQgZXJyb3JNc2cgPSBcIlwiO1xyXG4gICAgaWYgKHR5cGVvZiBzZXJ2ZXJFcnJvci5lcnJvciA9PSBcInVuZGVmaW5lZFwiKSB7XHJcbiAgICAgICBlcnJvck1zZyA9IHRoaXMuc3RhbmRhcmRFcnJvck1zZyArIFwiIDogXCIgKyBzZXJ2ZXJFcnJvcjtcclxuICAgIH1cclxuICAgIGVsc2VcclxuICAgICAgIGVycm9yTXNnID0gdGhpcy5zdGFuZGFyZEVycm9yTXNnICsgXCIgOiBcIiArIHNlcnZlckVycm9yLmVycm9yLmVycm9yO1xyXG4gICAgbGV0IGRpYWxvZ1N0cnVjID0ge1xyXG4gICAgICBtc2c6IGVycm9yTXNnLFxyXG4gICAgICB0aXRsZTogXCJFcnJvclwiLFxyXG4gICAgICBpbmZvOiBudWxsLFxyXG4gICAgICBvYmplY3Q6IG9iamVjdCxcclxuICAgICAgYWN0aW9uOiB0aGlzLk9rQWN0aW9ucyxcclxuICAgICAgY2FsbGJhY2s6IG51bGxcclxuICAgIH07XHJcbiAgICAgIHRoaXMuc2hvd0NvbmZpcm1hdGlvbihkaWFsb2dTdHJ1Yyk7XHJcblxyXG4gIH1cclxuICBwdWJsaWMgc2VuZEdldENvbW1hbmQodXJsOmFueSwgcGFnZTogc3RyaW5nKTogT2JzZXJ2YWJsZTxHcmlkRGF0YVJlc3VsdD4ge1xyXG4gICAgaWYgKHRoaXMucGFyYW1Db25maWcuREVCVUdfRkxBRykgY29uc29sZS5sb2coXCIgaW5zaWRlIHNlbmRHZXRDb21tYW5kXCIpXHJcbiAgICBsZXQgdGhlVVJMID0gdXJsICsgcGFnZTtcclxuICAgIGlmICh0aGlzLnBhcmFtQ29uZmlnLkRFQlVHX0ZMQUcpIGNvbnNvbGUubG9nKFwiIGluc2lkZSBzZW5kR2V0Q29tbWFuZDp0aGVVUkw6XCIsIHRoZVVSTClcclxuICAgIHRoaXMuaHR0cE9wdGlvbnMgPSB7XHJcbiAgICAgIGhlYWRlcnM6IG5ldyBIdHRwSGVhZGVycyh7XHJcbiAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuICAgICAgICAnYXV0aG9yaXphdGlvbic6IHRoaXMuU3RyQXV0aFxyXG5cclxuICAgICAgfSlcclxuICAgIH07XHJcblxyXG4gICAgaWYgKHRoaXMucGFyYW1Db25maWcuREVCVUdfRkxBRykgY29uc29sZS5sb2coXCJzZW5kR2V0Q29tbWFuZCB0aGVVUkw6XCIgKyB0aGVVUkwpXHJcbiAgICByZXR1cm4gdGhpcy5odHRwXHJcbiAgICAgIC5nZXQoYCR7dGhlVVJMfWAsIHRoaXMuaHR0cE9wdGlvbnMpXHJcbiAgICAgICAgLnBpcGUoXHJcbiAgICAgICAgICAgIGNhdGNoRXJyb3IoKGVycikgPT4ge1xyXG4gICAgICAgICAgICAgIGlmICh0aGlzLnBhcmFtQ29uZmlnLkRFQlVHX0ZMQUcpIGNvbnNvbGUubG9nKFwic2VydmVyIGVycm9yOlwiLCBlcnIubWVzc2FnZSlcclxuICAgICAgICAgIHRoaXMuc2hvd05vdGlmaWNhdGlvbihcImVycm9yXCIsIFwiZXJyb3I6XCIgKyBlcnIubWVzc2FnZSk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhyb3dFcnJvcihlcnIpO1xyXG4gICAgICAgICAgICAgIH0pLFxyXG4gICAgICAgICAgICBtYXAocmVzcG9uc2UgPT4gKFxyXG4gICAgICAgICAgICAgIDxhbnk+cmVzcG9uc2VcclxuICAgICAgICAgICAgKSksXHJcbiAgICAgICAgICAgIHRhcCgoKSA9PiB0aGlzLmxvYWRpbmcgPSBmYWxzZSlcclxuICAgICAgICk7XHJcbiAgfVxyXG4gIHB1YmxpYyBwb3N0Q29tbWFuZE9wdGlvbnMoT3B0aW9uczphbnkscGFnZTogc3RyaW5nLCB1cmw6YW55LCBCb2R5OmFueSk6IE9ic2VydmFibGU8R3JpZERhdGFSZXN1bHQ+IHtcclxuICAgIC8vaWYgKHRoaXMucGFyYW1Db25maWcuREVCVUdfRkxBRykgY29uc29sZS5sb2coXCIgaW5zaWRlIHBvc3RDb21tYW5kXCIpXHJcbiAgICBsZXQgdGhlVVJMID0gdXJsOyAvL3RoaXMuRVBNRU5HX1VSTCArIHBhZ2U7XHJcbiAgICBsZXQgaHR0cE9wdGlvbnMgPSB7fTtcclxuICAgIGlmIChPcHRpb25zID09IG51bGwpe1xyXG4gICAgICAgaHR0cE9wdGlvbnMgPSB7XHJcbiAgICAgICAgaGVhZGVyczogbmV3IEh0dHBIZWFkZXJzKHtcclxuICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXHJcbiAgICAgICAgICAnYXV0aG9yaXphdGlvbic6IHRoaXMuU3RyQXV0aFxyXG4gICAgICB9KVxyXG4gICAgICB9O1xyXG4gICAgfVxyXG4gICAgZWxzZXtcclxuICAgICAgIGh0dHBPcHRpb25zID0ge1xyXG4gICAgICAgIGhlYWRlcnM6IG5ldyBIdHRwSGVhZGVycyhcclxuICAgICAgICAgIE9wdGlvbnNcclxuICAgICAgICAgIClcclxuICAgICAgfTtcclxuICAgIH1cclxuICAgIFxyXG5cclxuICAgIGlmICh0aGlzLnBhcmFtQ29uZmlnLkRFQlVHX0ZMQUcpIGNvbnNvbGUubG9nKFwicG9zdENvbW1hbmRPcHRpb25zIHRoZVVSTDpcIiAsIHRoZVVSTCwgXCJCb2R5OlwiLEJvZHkgKVxyXG4gICAgcmV0dXJuIHRoaXMuaHR0cFxyXG4gICAgICAgIC5wb3N0KGAke3RoZVVSTH1gLEJvZHksIGh0dHBPcHRpb25zKVxyXG4gICAgICAgIC5waXBlKFxyXG4gICAgICAgICAgICBjYXRjaEVycm9yKChlcnIpID0+IHtcclxuICAgICAgICAgICAgICAvL2lmICh0aGlzLnBhcmFtQ29uZmlnLkRFQlVHX0ZMQUcpIGNvbnNvbGUubG9nKFwic2VydmVyIGVycm9yOlwiLCBlcnIubWVzc2FnZSlcclxuICAgICAgICAgICAgICAvL3RoaXMuc2hvd05vdGlmaWNhdGlvbiAoXCJlcnJvclwiLFwiZXJyb3I6XCIgKyBlcnIubWVzc2FnZSk7XHJcbiAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhcImVycjpcIixlcnIpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRocm93RXJyb3IoZXJyKTtcclxuICAgICAgICAgICAgICAgIC8vIHRocm93RXJyb3IoZXJyKTtcclxuICAgICAgICAgICAgICAgIC8vIHJldHVybiBKU09OLnN0cmluZ2lmeSAoZXJyKTtcclxuICAgICAgICAgICAgICB9KSxcclxuICAgICAgICAgICAgbWFwKHJlc3BvbnNlID0+IChcclxuICAgICAgICAgICAgICA8YW55PnJlc3BvbnNlXHJcbiAgICAgICAgICAgICkpLFxyXG4gICAgICAgICAgICBjYXRjaEVycm9yKGVyciA9PiB7Ly9GdWFkOmNoZWNrIGlmIHRob3NlIDMgbGluZXMgYXJlIG5lZWRlZFxyXG4gICAgICAgICAgICAgIHJldHVybiBlcnIubWVzc2FnZTsvLzJcclxuICAgICAgICAgIH0pLCAgICAgICAgICAgICAgICAgICAgLy8zXHJcbiAgICAgICAgICAgIHRhcCgocmVzcG9uc2UpID0+IHt0aGlzLmxvYWRpbmcgPSBmYWxzZTsgY29uc29sZS5sb2coXCJyZXNwb25zZTpcIixyZXNwb25zZSl9KVxyXG4gICAgICAgKTtcclxuICB9XHJcbiAgcHVibGljIHBvc3RDb21tYW5kKHBhZ2U6IHN0cmluZywgdXJsOmFueSwgQm9keTphbnkpOiBPYnNlcnZhYmxlPEdyaWREYXRhUmVzdWx0PiB7XHJcbi8vaWYgKHRoaXMucGFyYW1Db25maWcuREVCVUdfRkxBRykgY29uc29sZS5sb2coXCIgaW5zaWRlIHBvc3RDb21tYW5kXCIpXHJcbiAgICBsZXQgdGhlVVJMID0gdXJsOyAvL3RoaXMuRVBNRU5HX1VSTCArIHBhZ2U7XHJcbiAgICB0aGVVUkwgPSB0aGlzLmNoZWNrREJMb2ModGhlVVJMKTtcclxuICAgIHRoaXMuaHR0cE9wdGlvbnMgPSB7XHJcbiAgICAgIGhlYWRlcnM6IG5ldyBIdHRwSGVhZGVycyh7XHJcbiAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuICAgICAgICAnYXV0aG9yaXphdGlvbic6IHRoaXMuU3RyQXV0aFxyXG5cclxuICAgICAgfSlcclxuICAgIH07XHJcblxyXG4gICAgLy9pZiAodGhpcy5wYXJhbUNvbmZpZy5ERUJVR19GTEFHKSBjb25zb2xlLmxvZyhcInBvc3RDb21tYW5kIHRoZVVSTDpcIiArIHRoZVVSTClcclxuICAgIHJldHVybiB0aGlzLmh0dHBcclxuICAgICAgLnBvc3QoYCR7dGhlVVJMfWAsIEJvZHksIHRoaXMuaHR0cE9wdGlvbnMpXHJcbiAgICAgICAgLnBpcGUoXHJcbiAgICAgICAgICAgIGNhdGNoRXJyb3IoKGVycikgPT4ge1xyXG4gICAgICAgICAgICAgIC8vaWYgKHRoaXMucGFyYW1Db25maWcuREVCVUdfRkxBRykgY29uc29sZS5sb2coXCJzZXJ2ZXIgZXJyb3I6XCIsIGVyci5tZXNzYWdlKVxyXG4gICAgICAgICAgdGhpcy5zaG93Tm90aWZpY2F0aW9uKFwiZXJyb3JcIiwgXCJlcnJvcjpcIiArIGVyci5tZXNzYWdlKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aHJvd0Vycm9yKGVycik7XHJcbiAgICAgICAgICAgICAgfSksXHJcbiAgICAgICAgICAgIG1hcChyZXNwb25zZSA9PiAoXHJcbiAgICAgICAgICAgICAgPGFueT5yZXNwb25zZVxyXG4gICAgICAgICAgICApKSxcclxuICAgICAgICAgICAgdGFwKCgpID0+IHRoaXMubG9hZGluZyA9IGZhbHNlKVxyXG4gICAgICAgKTtcclxuICB9XHJcbiAgcHVibGljIENhcGl0YWxpemVGaXJzdChzdHI6YW55KSB7XHJcbiAgICBzdHIgPSBzdHIudG9Mb3dlckNhc2UoKTtcclxuXHJcbiAgICBzdHIgPSBzdHIuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyBzdHIuc2xpY2UoMSlcclxuICAgIHJldHVybiBzdHI7XHJcbiAgfVxyXG4gIHB1YmxpYyBDYXBpdGFsaXplVGl0bGUoZmllbGROYW1lOmFueSkge1xyXG5cclxuICBsZXQgYXJyYXkgPSBmaWVsZE5hbWUuc3BsaXQoXCJfXCIpO1xyXG4gICAgaWYgKHRoaXMucGFyYW1Db25maWcuREVCVUdfRkxBRykgY29uc29sZS5sb2coXCJhcnJheTpcIiwgYXJyYXkpXHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFycmF5Lmxlbmd0aDsgaSsrKVxyXG4gICAgICBhcnJheVtpXSA9IHRoaXMuQ2FwaXRhbGl6ZUZpcnN0KGFycmF5W2ldKVxyXG5cclxuICAgIGZpZWxkTmFtZSA9IGFycmF5LmpvaW4oXCIgXCIpO1xyXG4gICAgcmV0dXJuIGZpZWxkTmFtZTtcclxuICB9XHJcbiAgcHVibGljIHByZXBhcmVMb29rdXAoZmllbGROYW1lOmFueSwgcGFyYW1Db25maWc6YW55KSB7XHJcblxyXG4gICAgbGV0IGxrcEFyck5hbWUgPSBcImxrcEFyclwiICsgZmllbGROYW1lO1xyXG4gICAgbGV0IGxrcERlZjtcclxuICAgIGlmIChmaWVsZE5hbWUgPT0gXCJBU1NJR05FRVwiKSB7XHJcbiAgICAgIGlmICh0aGlzLnBhcmFtQ29uZmlnLkRFQlVHX0ZMQUcpIGNvbnNvbGUubG9nKFwic3RhclNlcnZpY2VzLnNlc3Npb25QYXJhbXMuVVNFUl9JTkZPOlwiLCB0aGlzLnNlc3Npb25QYXJhbXMuVVNFUl9JTkZPKTtcclxuXHJcbiAgICAgIGxldCB0ZWFtID0gdGhpcy5zZXNzaW9uUGFyYW1zLlVTRVJfSU5GTy5URUFNO1xyXG5cclxuICAgICAgbGtwRGVmID0ge1xyXG4gICAgICAgIFwic3RhdG1lbnRcIjogXCJzZWxlY3QgVVNFUk5BTUUgQ09ERSwgRlVMTE5BTUUgQ09ERVRFWFRfTEFORyBmcm9tICBBRE1fVVNFUl9JTkZPUk1BVElPTiB3aGVyZSBURUFNID0gJ1wiICsgdGVhbSArIFwiJyBcIixcclxuICAgICAgICBcImxrcEFyck5hbWVcIjogbGtwQXJyTmFtZSwgXCJmaWVsZE5hbWVcIjogZmllbGROYW1lXHJcbiAgICAgIH07XHJcblxyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgIGxrcERlZiA9IHtcclxuICAgICAgICBcInN0YXRtZW50XCI6IFwiU0VMRUNUIENPREUsICBDT0RFVEVYVF9MQU5HIEZST00gU09NX1RBQlNfQ09ERVMgV0hFUkUgQ09ERU5BTUUgPSAnXCIgKyBmaWVsZE5hbWUgKyBcIicgYW5kIExBTkdVQUdFX05BTUUgPSAnXCIgKyBwYXJhbUNvbmZpZy51c2VyTGFuZyArIFwiJyBvcmRlciBieSBDT0RFVEVYVF9MQU5HICBcIixcclxuICAgICAgICBcImxrcEFyck5hbWVcIjogbGtwQXJyTmFtZSwgXCJmaWVsZE5hbWVcIjogZmllbGROYW1lXHJcbiAgICAgIH07XHJcbiAgICB9XHJcbiAgICByZXR1cm4gbGtwRGVmO1xyXG5cclxuICB9XHJcbiAgcHVibGljIGdldEFzc2lnbmVlU2VsZWN0KG9iamVjdDphbnksIGFzc2lnbmVlVHlwZTphbnkpIHtcclxuICAgIGxldCBzZWxlY3RTdG10O1xyXG5cclxuICAgIGlmIChhc3NpZ25lZVR5cGUgPT0gXCJURUFNXCIpIHtcclxuICAgICAgc2VsZWN0U3RtdCA9IFwiU0VMRUNUIENPREUsIENPREVURVhUX0xBTkcgRlJPTSBTT01fVEFCU19DT0RFUyBXSEVSRSBDT0RFTkFNRSA9J1RFQU0nIGFuZCBMQU5HVUFHRV9OQU1FID0gJ1wiICsgb2JqZWN0LnBhcmFtQ29uZmlnLnVzZXJMYW5nICsgXCInICBvcmRlciBieSBDT0RFVEVYVF9MQU5HIFwiXHJcbiAgICB9XHJcbiAgICBlbHNlIGlmIChhc3NpZ25lZVR5cGUgPT0gXCJQRVJTT05cIikge1xyXG4gICAgICBzZWxlY3RTdG10ID0gXCJTRUxFQ1QgVVNFUk5BTUUgIENPREUsIEZVTExOQU1FIENPREVURVhUX0xBTkcgRlJPTSBBRE1fVVNFUl9JTkZPUk1BVElPTiBXSEVSRSBURUFNID0nXCIgKyBvYmplY3Quc3RhclNlcnZpY2VzLnNlc3Npb25QYXJhbXMuVVNFUl9JTkZPLlRFQU0gKyBcIicgb3JkZXIgYnkgQ09ERVRFWFRfTEFORyBcIlxyXG4gICAgfVxyXG4gICAgZWxzZSBpZiAoYXNzaWduZWVUeXBlID09IFwiTkVUV09SS1wiKSB7XHJcbiAgICAgIHNlbGVjdFN0bXQgPSBcIlNFTEVDVCBDT0RFLCBDT0RFVEVYVF9MQU5HIEZST00gU09NX1RBQlNfQ09ERVMgV0hFUkUgQ09ERU5BTUUgPSdFWENIX1NZU1QnIGFuZCBMQU5HVUFHRV9OQU1FID0gJ1wiICsgb2JqZWN0LnBhcmFtQ29uZmlnLnVzZXJMYW5nICsgXCInIG9yZGVyIGJ5IENPREVURVhUX0xBTkdcIlxyXG4gICAgfVxyXG4gICAgcmV0dXJuIHNlbGVjdFN0bXQ7XHJcbiAgfVxyXG4gIHB1YmxpYyBnZXRGaXJzdFdlZWtEYXkob2JqZWN0OmFueSwgdmFsdWU6YW55KSB7XHJcbiAgICBsZXQgdmFsdWVEYXRlOiBEYXRlXHJcbiAgICBsZXQgZmlyc3RXZWVrRGF5OmFueSA9IERheS5Nb25kYXk7XHJcbiAgICBpZiAodHlwZW9mIG9iamVjdC5wYXJhbUNvbmZpZy5maXJzdFdlZWtEYXkgIT09IFwidW5kZWZpbmVkXCIpIHtcclxuICAgICAgZmlyc3RXZWVrRGF5ID0gb2JqZWN0LnBhcmFtQ29uZmlnLmZpcnN0V2Vla0RheTtcclxuICAgIH1cclxuICAgIHZhbHVlRGF0ZSA9IGZpcnN0RGF5SW5XZWVrKG5ldyBEYXRlKHZhbHVlKSwgZmlyc3RXZWVrRGF5KTtcclxuICAgIHZhbHVlRGF0ZSA9IGdldERhdGUodmFsdWVEYXRlKTtcclxuICAgIGlmICh0aGlzLnBhcmFtQ29uZmlnLkRFQlVHX0ZMQUcpIGNvbnNvbGUubG9nKFwidmFsdWVEYXRlOlwiLCB2YWx1ZURhdGUpXHJcbiAgICByZXR1cm4gdmFsdWVEYXRlO1xyXG5cclxuICB9XHJcbiAgcHVibGljIHNldFJUTCgpIHtcclxuICAgIGxldCBwYXJhbUNvbmZpZyA9IGdldFBhcmFtQ29uZmlnKCk7XHJcbiAgICBsZXQgbGFuZ3VhZ2VfbmFtZSA9IHBhcmFtQ29uZmlnLnVzZXJMYW5nO1xyXG4gICAgbGFuZ3VhZ2VfbmFtZSA9IGxhbmd1YWdlX25hbWUudG9Mb3dlckNhc2UoKTtcclxuXHJcbiAgICBsZXQgcGFyZzphbnkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1haW5wYWdlXCIpO1xyXG4gICAgY29uc3Qgc3ZjID0gPE15TWVzc2FnZVNlcnZpY2U+dGhpcy5tZXNzYWdlcztcclxuICAgIC8vc3ZjLmxhbmd1YWdlX25hbWUgPSBzdmMubGFuZ3VhZ2VfbmFtZSA9PT0gJ2VzJyA/ICdoZScgOiAnZXMnO1xyXG4gICAgLy9zdmMubGFuZ3VhZ2VfbmFtZSA9IGxhbmd1YWdlX25hbWU7XHJcbiAgICAvL2lmICh0aGlzLnBhcmFtQ29uZmlnLkRFQlVHX0ZMQUcpIGNvbnNvbGUubG9nKFwic2V0UlRMOmxhbmd1YWdlX25hbWU6XCIsIGxhbmd1YWdlX25hbWUpXHJcbiAgICBpZiAobGFuZ3VhZ2VfbmFtZSA9PSBcImFyXCIpIHtcclxuICAgICAgcGFyZy5kaXIgPSBcInJ0bFwiO1xyXG4gICAgICB0aGlzLm1lc3NhZ2VzLm5vdGlmeSh0cnVlKTtcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICBwYXJnLmRpciA9IFwibHRyXCI7XHJcbiAgICAgIHRoaXMubWVzc2FnZXMubm90aWZ5KGZhbHNlKTtcclxuICAgIH1cclxuICB9XHJcbiAgcHVibGljIGxvYWRMYW5ndWFnZU9sZChsYW5ndWFnZV9uYW1lOmFueSkge1xyXG4gICAgbGFuZ3VhZ2VfbmFtZSA9ICFsYW5ndWFnZV9uYW1lID8gXCJlblwiIDogbGFuZ3VhZ2VfbmFtZVxyXG4gICAgbGV0IGZpbGUgPSBcImFzc2V0cy9sYW5nL1wiICsgbGFuZ3VhZ2VfbmFtZS50b0xvd2VyQ2FzZSgpICsgXCIuanNvblwiXHJcbiAgICBpZiAodGhpcy5wYXJhbUNvbmZpZy5ERUJVR19GTEFHKSBjb25zb2xlLmxvZyhcImxvYWRMYW5ndWFnZTpmaWxlLFwiLCBmaWxlKVxyXG4gICAgdGhpcy5odHRwLmdldChmaWxlKS5zdWJzY3JpYmUoZGF0YSA9PiB7XHJcbiAgICAgIGlmICh0aGlzLnBhcmFtQ29uZmlnLkRFQlVHX0ZMQUcpIGNvbnNvbGUubG9nKFwibG9hZExhbmd1YWdlOmRhdGEsXCIsIGRhdGEpXHJcbiAgICAgIGxldCBwYXJhbUNvbmZpZyA9IHtcclxuICAgICAgICBcIk5hbWVcIjogXCJ0aXRsZXNcIixcclxuICAgICAgICBcIlZhbFwiOiBkYXRhXHJcbiAgICAgIH07XHJcbiAgICAgIHNldFBhcmFtQ29uZmlnKHBhcmFtQ29uZmlnKTtcclxuICAgICAgdGhpcy5wYXJhbUNvbmZpZyA9IGdldFBhcmFtQ29uZmlnKCk7XHJcbiAgICAgIHBhcmFtQ29uZmlnID0ge1xyXG4gICAgICAgIFwiTmFtZVwiOiBcInVzZXJMYW5nXCIsXHJcbiAgICAgICAgXCJWYWxcIjogbGFuZ3VhZ2VfbmFtZS50b1VwcGVyQ2FzZSgpXHJcbiAgICAgIH07XHJcbiAgICAgIHNldFBhcmFtQ29uZmlnKHBhcmFtQ29uZmlnKTtcclxuICAgICAgdGhpcy5zZXRSVEwoKTtcclxuXHJcbiAgICAgIGlmICh0aGlzLnBhcmFtQ29uZmlnLkRFQlVHX0ZMQUcpIGNvbnNvbGUubG9nKFwiZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmRpcjpcIiwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmRpciA9PSAnbHRyJyk7XHJcbiAgICB9LFxyXG4gICAgZXJyID0+IHtcclxuICAgICAgICBpZiAodGhpcy5wYXJhbUNvbmZpZy5ERUJVR19GTEFHKSBjb25zb2xlLmxvZyhcImxvYWRMYW5ndWFnZTplcnIsXCIsIGVycilcclxuICAgICAgLy9hbGVydCAoJ2Vycm9yOicgKyBlcnIubWVzc2FnZSk7XHJcbiAgICAgIC8vdGhpcy5zaG93RXJyb3JNc2cob2JqZWN0LCBlcnIpO1xyXG4gICAgfSlcclxuICB9XHJcbiAgcHVibGljIGxvYWRMYW5ndWFnZShsYW5ndWFnZTphbnkpe1xyXG4gICAgbGFuZ3VhZ2UgPSAhbGFuZ3VhZ2UgPyBcImVuXCIgOiBsYW5ndWFnZVxyXG4gICAgbGV0IGZpbGUgPSBcImxhbmcvXCIgKyBsYW5ndWFnZS50b0xvd2VyQ2FzZSgpICsgXCIuanNvblwiXHJcbiAgICBpZiAodGhpcy5wYXJhbUNvbmZpZy5ERUJVR19GTEFHKSBjb25zb2xlLmxvZyhcImxvYWRMYW5ndWFnZTpmaWxlLFwiLGZpbGUpXHJcbiAgICBsZXQgcGFnZSA9IFwiP2dldGZpbGU9XCIgKyBmaWxlO1xyXG4gICAgcGFnZSA9IHRoaXMuY2hlY2tEQkxvYyhwYWdlKTtcclxuICAgIHBhZ2UgPSBlbmNvZGVVUkkocGFnZSk7XHJcbiAgICBcclxuICAgIGlmICh0aGlzLnBhcmFtQ29uZmlnLkRFQlVHX0ZMQUcpIGNvbnNvbGUubG9nKFwibG9hZExhbmd1YWdlOnBhZ2UsXCIscGFnZSlcclxuICAgICAgdGhpcy5wYXJhbUNvbmZpZyA9IGdldFBhcmFtQ29uZmlnKCk7XHJcbiAgICAgIGlmICh0aGlzLnBhcmFtQ29uZmlnLkRFQlVHX0ZMQUcpIGNvbnNvbGUubG9nKFwidGhpcy5wYXJhbUNvbmZpZy50aXRsZXMsXCIsdGhpcy5wYXJhbUNvbmZpZy50aXRsZXMpO1xyXG4gICAgICBsZXQgcGFyYW1Db25maWcgPSB7XHJcbiAgICAgICAgXCJOYW1lXCI6IFwidXNlckxhbmdcIixcclxuICAgICAgICBcIlZhbFwiOiBsYW5ndWFnZS50b1VwcGVyQ2FzZSgpXHJcbiAgICAgIH07XHJcbiAgICAgIHNldFBhcmFtQ29uZmlnKHBhcmFtQ29uZmlnKTtcclxuXHJcbiAgICB0aGlzLnNlbmRHZXRDb21tYW5kKHRoaXMuU0VSVkVSX1VSTCAsIHBhZ2UpLnN1YnNjcmliZShyZXN1bHQgPT4ge1xyXG4gICAgICBpZiAodGhpcy5wYXJhbUNvbmZpZy5ERUJVR19GTEFHKSBjb25zb2xlLmxvZyhcImxvYWRMYW5ndWFnZTpyZXN1bHQsXCIscmVzdWx0KTtcclxuICAgICAgbGV0IGRhdGEgPSByZXN1bHQuZGF0YTtcclxuICAgICAgaWYgKHRoaXMucGFyYW1Db25maWcuREVCVUdfRkxBRykgY29uc29sZS5sb2coXCJsb2FkTGFuZ3VhZ2U6ZGF0YSxcIixkYXRhKVxyXG4gICAgICBsZXQgcGFyYW1Db25maWcgPSB7XHJcbiAgICAgICAgXCJOYW1lXCI6IFwidGl0bGVzXCIsXHJcbiAgICAgICAgXCJWYWxcIjogZGF0YVxyXG4gICAgICB9O1xyXG4gICAgICBzZXRQYXJhbUNvbmZpZyhwYXJhbUNvbmZpZyk7XHJcbiAgICAgIHRoaXMucGFyYW1Db25maWcgPSBnZXRQYXJhbUNvbmZpZygpO1xyXG4gICAgICBpZiAodGhpcy5wYXJhbUNvbmZpZy5ERUJVR19GTEFHKSBjb25zb2xlLmxvZyhcInRoaXMucGFyYW1Db25maWcudGl0bGVzLFwiLHRoaXMucGFyYW1Db25maWcudGl0bGVzKTtcclxuICAgICAgcGFyYW1Db25maWcgPSB7XHJcbiAgICAgICAgXCJOYW1lXCI6IFwidXNlckxhbmdcIixcclxuICAgICAgICBcIlZhbFwiOiBsYW5ndWFnZS50b1VwcGVyQ2FzZSgpXHJcbiAgICAgIH07XHJcbiAgICAgIHNldFBhcmFtQ29uZmlnKHBhcmFtQ29uZmlnKTtcclxuICAgICAgdGhpcy5zZXRSVEwoKTtcclxuXHJcbiAgICAgIGlmICh0aGlzLnBhcmFtQ29uZmlnLkRFQlVHX0ZMQUcpIGNvbnNvbGUubG9nKFwiZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmRpcjpcIiwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmRpciA9PSAnbHRyJyAgKTtcclxuICAgIH0sXHJcbiAgICBlcnIgPT4ge1xyXG4gICAgICBpZiAodGhpcy5wYXJhbUNvbmZpZy5ERUJVR19GTEFHKSBjb25zb2xlLmxvZyhcImxvYWRMYW5ndWFnZTplcnIsXCIsZXJyKVxyXG4gICAgICAvL2FsZXJ0ICgnZXJyb3I6JyArIGVyci5tZXNzYWdlKTtcclxuICAgICAgLy90aGlzLnNob3dFcnJvck1zZyhvYmplY3QsIGVycik7XHJcbiAgICB9KVxyXG4gIH1cclxuICBwdWJsaWMgZ2V0TkxTKHBhcmFtczphbnksIGlkOmFueSwgdGV4dDphbnkpIHtcclxuICAgIC8vaWYgKHRoaXMucGFyYW1Db25maWcuREVCVUdfRkxBRykgY29uc29sZS5sb2coXCJjaGVja3g6Z2V0TkxTOnRoaXMucGFyYW1Db25maWcudGl0bGVzLFwiLHRoaXMucGFyYW1Db25maWcudGl0bGVzKTtcclxuICAgIGlmICh0eXBlb2YgdGhpcy5wYXJhbUNvbmZpZyAhPT0gXCJ1bmRlZmluZWRcIikge1xyXG4gICAgICBpZiAodHlwZW9mIHRoaXMucGFyYW1Db25maWcudGl0bGVzICE9PSBcInVuZGVmaW5lZFwiKSB7XHJcbiAgICAgICAgLy9jb25zb2xlLmxvZyhcImNoZWNreDpnZXROTFM6aWQ6XCIsaWQpO1xyXG4gICAgICAgIGxldCBhcnJheSA9IGlkLnNwbGl0KFwiLlwiKTtcclxuICAgICAgICBpZiAoYXJyYXkubGVuZ3RoID09IDMpIHtcclxuICAgICAgICAgIGlmICh0eXBlb2YgdGhpcy5wYXJhbUNvbmZpZy50aXRsZXMgW2FycmF5WzBdXSAhPT0gXCJ1bmRlZmluZWRcIil7XHJcbiAgICAgICAgICAgIGlmICh0eXBlb2YgdGhpcy5wYXJhbUNvbmZpZy50aXRsZXNbYXJyYXlbMF1dW2FycmF5WzFdXSAhPT0gXCJ1bmRlZmluZWRcIikge1xyXG4gICAgICAgICAgICAgIGlmICh0eXBlb2YgdGhpcy5wYXJhbUNvbmZpZy50aXRsZXNbYXJyYXlbMF1dW2FycmF5WzFdXVthcnJheVsyXV0gIT09IFwidW5kZWZpbmVkXCIpe1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMucGFyYW1Db25maWcudGl0bGVzW2FycmF5WzBdXVthcnJheVsxXV1bYXJyYXlbMl1dICE9IFwiXCIpe1xyXG4gICAgICAgICAgICAgICAgICB0ZXh0ID0gdGhpcy5wYXJhbUNvbmZpZy50aXRsZXNbYXJyYXlbMF1dW2FycmF5WzFdXVthcnJheVsyXV1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGVsc2V7XHJcbiAgICAgICAgICAgIC8vY29uc29sZS5sb2coXCJjaGVja3g6Z2V0TkxTOmFycmF5WzBdIG5vdCBmb3VuZCBpbiB0aGlzLnBhcmFtQ29uZmlnLnRpdGxlcyA6MDpcIixhcnJheVswXSwgdGhpcy5wYXJhbUNvbmZpZy50aXRsZXMpO1xyXG4gICAgICAgICAgICAvL2NvbnNvbGUubG9nKFwiY2hlY2t4OmdldE5MUzphcnJheVswXSBub3QgZm91bmQgaW4gdGhpcy5wYXJhbUNvbmZpZy50aXRsZXMgOjA6XCIsYXJyYXlbMF0pO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLy9jb25zb2xlLmxvZyhcImNoZWNreDpnZXROTFM6dGV4dCxcIix0ZXh0LCBcImluIGFycmF5WzBdOlwiLCBhcnJheVswXSwgdGhpcy5wYXJhbUNvbmZpZy50aXRsZXMpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgIGxldCBubHNfdGl0bGUgPSB0aGlzLnBhcmFtQ29uZmlnLnRpdGxlc1tpZF07XHJcbiAgICAgICAgICBpZiAodHlwZW9mIG5sc190aXRsZSAhPT0gXCJ1bmRlZmluZWRcIikge1xyXG4gICAgICAgICAgICB0ZXh0ID0gbmxzX3RpdGxlO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgaWYgKHBhcmFtcy5sZW5ndGggPiAwKSB7XHJcbiAgICAgIGxldCBzdHJBcnJheSA9IHRleHQuc3BsaXQoXCIjI1wiKTtcclxuICAgICAgdGV4dCA9IFwiXCI7XHJcbiAgXHJcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc3RyQXJyYXkubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBpZiAodHlwZW9mIHBhcmFtc1tpXSAhPSBcInVuZGVmaW5lZFwiKVxyXG4gICAgICAgICAgdGV4dCA9IHRleHQgKyBzdHJBcnJheVtpXSArIHBhcmFtc1tpXTtcclxuICAgICAgICBlbHNlXHJcbiAgICAgICAgICB0ZXh0ID0gdGV4dCArIHN0ckFycmF5W2ldO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG5cclxuICAgIHJldHVybiB0ZXh0O1xyXG4gIH1cclxuICBwdWJsaWMgbG9hZFN0YXRlbWVudHMoc3RhdGVtZW50czphbnkpe1xyXG4gICAgaWYgKHN0YXRlbWVudHMgPT0gXCJcIilcclxuICAgICAgc3RhdGVtZW50cyA9IFwic3RhdGVtZW50cy5qc29uXCI7XHJcbiAgbGV0IHBhZ2UgPSBcIj9nZXRmaWxlPVwiICsgc3RhdGVtZW50cztcclxuICAgIHBhZ2UgPSB0aGlzLmNoZWNrREJMb2MocGFnZSk7XHJcbiAgICBwYWdlID0gZW5jb2RlVVJJKHBhZ2UpO1xyXG4gICAgdGhpcy5zZW5kR2V0Q29tbWFuZCh0aGlzLlNFUlZFUl9VUkwsIHBhZ2UpLnN1YnNjcmliZShyZXN1bHQgPT4ge1xyXG4gICAgICBpZiAodGhpcy5wYXJhbUNvbmZpZy5ERUJVR19GTEFHKSBjb25zb2xlLmxvZyhcImxvYWRTdGF0ZW1lbnRzOnJlc3VsdCxcIiwgcmVzdWx0KTtcclxuICAgICAgbGV0IGRhdGEgPSByZXN1bHQuZGF0YTtcclxuICAgICAgaWYgKHRoaXMucGFyYW1Db25maWcuREVCVUdfRkxBRykgY29uc29sZS5sb2coXCJsb2FkU3RhdGVtZW50czpkYXRhLFwiLCBkYXRhKTtcclxuICAgICAgbGV0IGxrcEFyclFVRVJZX0RFRjphbnkgPSBbXTtcclxuICAgICAgT2JqZWN0LmtleXMoZGF0YSkuZm9yRWFjaChmdW5jdGlvbiAoa2V5OmFueSkge1xyXG4gICAgICAgIGxldCB2YWx1ZSA9IGRhdGFba2V5XTtcclxuICAgICAgICBsZXQgcmVjID0ge1xyXG4gICAgICAgICAgQ09ERToga2V5LFxyXG4gICAgICAgICAgQ09ERVRFWFRfTEFORzoga2V5LFxyXG4gICAgICAgICAgc3RhdGVtZW50OiB2YWx1ZVxyXG4gICAgICAgIH1cclxuICAgICAgICBsa3BBcnJRVUVSWV9ERUYucHVzaChyZWMpO1xyXG5cclxuICAgIH0pO1xyXG4gICAgICBpZiAodGhpcy5wYXJhbUNvbmZpZy5ERUJVR19GTEFHKSBjb25zb2xlLmxvZyhcImxvYWRTdGF0ZW1lbnRzOmRhdGEsXCIsIGRhdGEpO1xyXG4gICAgICBpZiAodGhpcy5wYXJhbUNvbmZpZy5ERUJVR19GTEFHKSBjb25zb2xlLmxvZyhcImxvYWRTdGF0ZW1lbnRzOmxrcEFyclFVRVJZX0RFRixcIiwgbGtwQXJyUVVFUllfREVGKVxyXG4gICAgICBsZXQgcGFyYW1Db25maWcgPSB7XHJcbiAgICAgICAgXCJOYW1lXCI6IFwic3RhdGVtZW50c1wiLFxyXG4gICAgICAgIFwiVmFsXCI6IGRhdGFcclxuICAgICAgfTtcclxuICAgICAgc2V0UGFyYW1Db25maWcocGFyYW1Db25maWcpO1xyXG4gICAgICBwYXJhbUNvbmZpZyA9IHtcclxuICAgICAgICBcIk5hbWVcIjogXCJsa3BBcnJRVUVSWV9ERUZcIixcclxuICAgICAgICBcIlZhbFwiOiBsa3BBcnJRVUVSWV9ERUZcclxuICAgICAgfTtcclxuICAgICAgc2V0UGFyYW1Db25maWcocGFyYW1Db25maWcpO1xyXG5cclxuICAgIH0sXHJcbiAgICBlcnIgPT4ge1xyXG4gICAgICAgIGlmICh0aGlzLnBhcmFtQ29uZmlnLkRFQlVHX0ZMQUcpIGNvbnNvbGUubG9nKFwibG9hZExhbmd1YWdlOmVycixcIiwgZXJyKVxyXG5cclxuXHJcblxyXG4gICAgfSlcclxuICB9XHJcbiAgLy8gcHVibGljIGxvYWRTdGF0ZW1lbnRzT2xkKCkge1xyXG5cclxuICAvLyAgIGxldCBmaWxlID0gXCJhc3NldHMvXCIgKyBcInN0YXRlbWVudHMuanNvblwiXHJcbiAgLy8gICBpZiAodGhpcy5wYXJhbUNvbmZpZy5ERUJVR19GTEFHKSBjb25zb2xlLmxvZyhcImxvYWRTdGF0ZW1lbnRzOmZpbGUsXCIsIGZpbGUpXHJcbiAgLy8gICB0aGlzLmh0dHAuZ2V0KGZpbGUpLnN1YnNjcmliZShkYXRhID0+IHtcclxuICAvLyAgICAgbGV0IGxrcEFyclFVRVJZX0RFRjphbnkgPSBbXTtcclxuICAvLyAgICAgT2JqZWN0LmtleXMoZGF0YSkuZm9yRWFjaChmdW5jdGlvbiAoa2V5OmFueSkge1xyXG4gIC8vICAgICAgIGxldCB2YWx1ZSA9IGRhdGFba2V5XTtcclxuICAvLyAgICAgICBsZXQgcmVjID0ge1xyXG4gIC8vICAgICAgICAgQ09ERToga2V5LFxyXG4gIC8vICAgICAgICAgQ09ERVRFWFRfTEFORzoga2V5LFxyXG4gIC8vICAgICAgICAgc3RhdGVtZW50OiB2YWx1ZVxyXG4gIC8vICAgICAgIH1cclxuICAvLyAgICAgICBsa3BBcnJRVUVSWV9ERUYucHVzaChyZWMpO1xyXG5cclxuICAvLyAgICAgfSk7XHJcbiAgLy8gICAgIGlmICh0aGlzLnBhcmFtQ29uZmlnLkRFQlVHX0ZMQUcpIGNvbnNvbGUubG9nKFwibG9hZFN0YXRlbWVudHM6ZGF0YSxcIiwgZGF0YSk7XHJcbiAgLy8gICAgIGlmICh0aGlzLnBhcmFtQ29uZmlnLkRFQlVHX0ZMQUcpIGNvbnNvbGUubG9nKFwibG9hZFN0YXRlbWVudHM6bGtwQXJyUVVFUllfREVGLFwiLCBsa3BBcnJRVUVSWV9ERUYpXHJcbiAgLy8gICAgIGxldCBwYXJhbUNvbmZpZyA9IHtcclxuICAvLyAgICAgICBcIk5hbWVcIjogXCJzdGF0ZW1lbnRzXCIsXHJcbiAgLy8gICAgICAgXCJWYWxcIjogZGF0YVxyXG4gIC8vICAgICB9O1xyXG4gIC8vICAgICBzZXRQYXJhbUNvbmZpZyhwYXJhbUNvbmZpZyk7XHJcbiAgLy8gICAgIHBhcmFtQ29uZmlnID0ge1xyXG4gIC8vICAgICAgIFwiTmFtZVwiOiBcImxrcEFyclFVRVJZX0RFRlwiLFxyXG4gIC8vICAgICAgIFwiVmFsXCI6IGxrcEFyclFVRVJZX0RFRlxyXG4gIC8vICAgICB9O1xyXG4gIC8vICAgICBzZXRQYXJhbUNvbmZpZyhwYXJhbUNvbmZpZyk7XHJcblxyXG4gIC8vICAgfSxcclxuICAvLyAgICAgZXJyID0+IHtcclxuICAvLyAgICAgICBpZiAodGhpcy5wYXJhbUNvbmZpZy5ERUJVR19GTEFHKSBjb25zb2xlLmxvZyhcImxvYWRMYW5ndWFnZTplcnIsXCIsIGVycilcclxuXHJcblxyXG5cclxuICAvLyAgICAgfSlcclxuICAvLyB9XHJcblxyXG5cclxuICBwdWJsaWMgaGFuZGxlRmV0Y2hlZE1vZHVsZXMob2JqZWN0OmFueSwgZGF0YTphbnkpIHtcclxuICAgIGlmIChvYmplY3QucGFyYW1Db25maWcuREVCVUdfRkxBRykgY29uc29sZS5sb2coJ2ZldGNoZWRNb2R1bGVzIDogJywgZGF0YVswXS5kYXRhKTtcclxuICAgIC8vdGhpcy5pdGVtc1swXS5pdGVtcyA9ICBkYXRhO1xyXG4gICAgb2JqZWN0Lml0ZW1zID0gW1xyXG4gICAgICB7XHJcbiAgICAgICB0ZXh0OiAnTW9kdWxlJyxcclxuICAgICAgIGl0ZW1zOiBkYXRhWzBdLmRhdGFcclxuICAgICB9XTtcclxuICAgICBvYmplY3Quc2V0TW9kdWxlTmFtZShvYmplY3QuY3VycmVudE1lbnUpO1xyXG4gICAgaWYgKG9iamVjdC5wYXJhbUNvbmZpZy5ERUJVR19GTEFHKSBjb25zb2xlLmxvZyhcIm9iamVjdC5pdGVtczpcIiwgb2JqZWN0Lml0ZW1zLCBcImRhdGFbMF0uZGF0YS5sZW5ndGg6XCIsIGRhdGFbMF0uZGF0YS5sZW5ndGgpXHJcbiAgICBpZiAoZGF0YVswXS5kYXRhLmxlbmd0aCA9PSAxKSB7XHJcbiAgICAgIG9iamVjdC5zaG93TW9kdWxlU2VsZWN0aW9uID0gZmFsc2U7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZmV0Y2hNZW51KG9iamVjdDphbnksIGhhbmRsZUZldGNoZWREYXRhOmFueSkge1xyXG4gICAgaWYgKCh0aGlzLlN0ckF1dGggPT0gXCJcIikgfHwgKHR5cGVvZiB0aGlzLlN0ckF1dGggPT09IFwidW5kZWZpbmVkXCIpKVxyXG4gICAgICByZXR1cm47XHJcblxyXG5cclxuICAgIGxldCBQYWdlID0gXCJcIjtcclxuICAgIHRoaXMucG9zdCh0aGlzLCBQYWdlLCBvYmplY3QuQm9keSkuc3Vic2NyaWJlKHJlc3VsdCA9PiB7XHJcblxyXG4gICAgICAgIGhhbmRsZUZldGNoZWREYXRhKG9iamVjdCwgcmVzdWx0LmRhdGEsIGZhbHNlKTtcclxuXHJcblxyXG4gICAgICBvYmplY3QuQm9keSA9IFtdO1xyXG4gICAgfSxcclxuICAgIGVyciA9PiB7XHJcbiAgICAgICAgLy9hbGVydCgnZXJyb3I6JyArIGVyci5tZXNzYWdlKTtcclxuICAgIH0pO1xyXG4gIH1cclxuICBwdWJsaWMgc2V0TW9kdWxlSXRlbXMob2JqZWN0OmFueSkge1xyXG5cclxuXHJcbiAgICBpZiAoIW9iamVjdC5zdGF0aWNNZW51KSB7XHJcbiAgICAgIG9iamVjdC5Cb2R5ID0gW107XHJcbiAgICAgIGxldCBOZXdWYWw6YW55ID0ge1xyXG4gICAgICAgIE1FTlU6ICdNQUlOJyxcclxuICAgICAgICBDSE9JQ0VTIDogb2JqZWN0LnBhcmFtQ29uZmlnLmxpY2Vuc2VkTW9kdWxlcy50b1VwcGVyQ2FzZSgpLFxyXG4gICAgICAgIExBTkdVQUdFX05BTUUgOiBvYmplY3QucGFyYW1Db25maWcudXNlckxhbmcudG9VcHBlckNhc2UoKSxcclxuICAgICAgfTtcclxuXHJcbiAgICAgICAgTmV3VmFsW1wiX1FVRVJZXCJdID0gXCJHRVRfQUxMT1dFRF9NT0RVTEVTXCI7XHJcblxyXG4gICAgICAgIG9iamVjdC5hZGRUb0JvZHkoTmV3VmFsKTtcclxuICAgICAgaWYgKHRoaXMucGFyYW1Db25maWcuREVCVUdfRkxBRykgY29uc29sZS5sb2coXCItLS0tLS0tLW9iamVjdC5Cb2R5IDpcIiwgb2JqZWN0LkJvZHkpXHJcblxyXG5cclxuICAgICAgdGhpcy5mZXRjaE1lbnUob2JqZWN0LCB0aGlzLmhhbmRsZUZldGNoZWRNb2R1bGVzKTtcclxuICAgIH1cclxuICB9XHJcbiAgcHVibGljIHN0YXRlQ2hhbmdlKG9iamVjdDphbnksIGRhdGE6IFBhbmVsQmFyU3RhdGVDaGFuZ2VFdmVudCk6IGJvb2xlYW4ge1xyXG4gICAgLy9wdWJsaWMgc3RhdGVDaGFuZ2Uob2JqZWN0OmFueSwgZGF0YTogQXJyYXk8UGFuZWxCYXJJdGVtTW9kZWw+KTogYm9vbGVhbiB7XHJcbiAgXHJcbiAgICAgIGlmIChvYmplY3Quc3RhdGljTWVudSA9PSB0cnVlKSB7XHJcbiAgICAgICAgY29uc3QgZm9jdXNlZEV2ZW50OiBQYW5lbEJhckl0ZW1Nb2RlbCA9IGRhdGEuaXRlbXMuZmlsdGVyKGl0ZW0gPT4gaXRlbS5mb2N1c2VkID09PSB0cnVlKVswXTtcclxuICAgICAgICBpZiAodGhpcy5wYXJhbUNvbmZpZy5ERUJVR19GTEFHKSBjb25zb2xlLmxvZyhcIiBpbiBzdGF0ZUNoYW5nZSA6IFwiICsgZm9jdXNlZEV2ZW50LmlkKVxyXG4gICAgICAgIGlmICh0aGlzLnBhcmFtQ29uZmlnLkRFQlVHX0ZMQUcpIGNvbnNvbGUubG9nKGZvY3VzZWRFdmVudClcclxuICAgICAgICBpZiAoZm9jdXNlZEV2ZW50LnRpdGxlID09IFwiRm9ybWF0dGluZyBGbG93XCIpIHtcclxuICAgICAgICAgIG9iamVjdC5zaG93UGFuZWxiYXIgPSBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJvYmplY3QuaXNQaG9uZVBvcnRyYWl0OlwiLCBvYmplY3QuaXNQaG9uZVBvcnRyYWl0LCBvYmplY3Quc2hvd1BhbmVsYmFyKVxyXG4gICAgICAgIC8vdGhpcy5zZWxlY3RlZElkID0gZm9jdXNlZEV2ZW50LmlkO1xyXG4gICAgICAgIC8vdGhpcy5yb3V0ZXIubmF2aWdhdGUoWycvJyArIGZvY3VzZWRFdmVudC5pZF0pO1xyXG4gICAgICAgIC8vdGhpcy5zdGFyU2VydmljZXMuc2V0UlRMKCk7XHJcbiAgICAgICAgcmV0dXJuIHRydWU7ICAvL0Z1YWQgY2hlY2sgaWYgaXQgc2hvdWxkIHJldHVybiBmYWxzZSBvciB0cnVlXHJcbiAgXHJcbiAgICAgIH1cclxuICAgICAgY29uc3QgZm9jdXNlZEV2ZW50OiBQYW5lbEJhckl0ZW1Nb2RlbCA9IGRhdGEuaXRlbXMuZmlsdGVyKGl0ZW0gPT4gaXRlbS5mb2N1c2VkID09PSB0cnVlKVswXTtcclxuICAgICAgaWYgKHRoaXMucGFyYW1Db25maWcuREVCVUdfRkxBRykgY29uc29sZS5sb2coXCIgaW4gc3RhdGVDaGFuZ2UgOiBcIiAsIGZvY3VzZWRFdmVudCwgZm9jdXNlZEV2ZW50LmlkKVxyXG4gICAgICBsZXQgcm91dGluZUF1dGggPSB0aGlzLmdldFJvdXRpbmVBdXRoKG9iamVjdC5tZW51LCBmb2N1c2VkRXZlbnQuaWQpO1xyXG4gICAgICBpZiAodGhpcy5wYXJhbUNvbmZpZy5ERUJVR19GTEFHKSBjb25zb2xlLmxvZyhcIiBpbiBzdGF0ZUNoYW5nZSA6IFwiICwgZm9jdXNlZEV2ZW50LmlkICwgXCJyb3V0aW5lQXV0aCA6XCIgLCByb3V0aW5lQXV0aClcclxuICBcclxuICAgICAgaWYgKGZvY3VzZWRFdmVudC5pZCA9PSBcIlBSVkZMT1dcIilcclxuICAgICAgICAgb2JqZWN0LnNob3dQYW5lbGJhciA9IGZhbHNlO1xyXG4gIFxyXG4gICAgICBpZiAodHlwZW9mIHJvdXRpbmVBdXRoICE9PSBcInVuZGVmaW5lZFwiKSB7XHJcbiAgICAgICAgaWYgKHRoaXMucGFyYW1Db25maWcuREVCVUdfRkxBRykgY29uc29sZS5sb2coXCIgaW4gc3RhdGVDaGFuZ2UgOiByb3V0aW5lQXV0aC5hdXRoTGV2ZWw6XCIgKyByb3V0aW5lQXV0aC5hdXRoTGV2ZWwpXHJcbiAgICAgICAgaWYgKHJvdXRpbmVBdXRoLmF1dGhMZXZlbCA9PSAwKSB7XHJcbiAgICAgICAgICBsZXQgZGlhbG9nU3RydWMgPSB7XHJcbiAgICAgICAgICAgIG1zZzogdGhpcy5ub0FjY2Vzc01zZyxcclxuICAgICAgICAgICAgdGl0bGU6IFwiV2FybmluZ1wiLFxyXG4gICAgICAgICAgICBpbmZvOiBudWxsLFxyXG4gICAgICAgICAgICBvYmplY3Q6IHRoaXMsXHJcbiAgICAgICAgICAgIGFjdGlvbjogdGhpcy5Pa0FjdGlvbnMsXHJcbiAgICAgICAgICAgIGNhbGxiYWNrOiBudWxsXHJcbiAgICAgICAgICB9O1xyXG4gICAgICAgICAgdGhpcy5zaG93Q29uZmlybWF0aW9uKGRpYWxvZ1N0cnVjKTtcclxuICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICBvYmplY3Quc2VsZWN0ZWRJZCA9IGZvY3VzZWRFdmVudC5pZDtcclxuICAgICAgICAgIHRoaXMuc2Vzc2lvblBhcmFtc1tcIlBydlVzZXJGbG93XCJdID0gXCJcIjtcclxuICAgICAgICAgIHRoaXMuc2Vzc2lvblBhcmFtc1tcIlBydlVzZXJDRFJcIl0gPSBcIlwiO1xyXG4gICBcclxuICAgICAgICAgIGlmIChvYmplY3Quc2VsZWN0ZWRJZCA9PSBcIlBSVkZMT1dcIikge1xyXG4gICAgICAgICAgICB0aGlzLnNlc3Npb25QYXJhbXNbXCJQcnZVc2VyRmxvd1wiXSA9IFwiUFJWX0JMRFwiO1xyXG4gICAgICAgICAgICB0aGlzLnNlc3Npb25QYXJhbXNbXCJQcnZVc2VyQ0RSXCJdID0gXCJQUlZfQ0RSXCI7XHJcbiAgICAgICAgICAgIG9iamVjdC5zaG93UGFuZWxiYXIgPSBmYWxzZTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGlmIChvYmplY3Quc2VsZWN0ZWRJZCA9PSBcIkNDTUNBVFwiKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2Vzc2lvblBhcmFtc1tcIlBydlVzZXJGbG93XCJdID0gXCJDUkNfQ0FUXCI7XHJcbiAgICAgICAgICAgIHRoaXMuc2Vzc2lvblBhcmFtc1tcIlBydlVzZXJDRFJcIl0gPSBcIkNSQ19VU0VSX0lORk9cIjtcclxuICAgICAgICAgICAgb2JqZWN0LnNob3dQYW5lbGJhciA9IGZhbHNlO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgaWYgKG9iamVjdC5zZWxlY3RlZElkID09IFwiQ0NNR1JQXCIpIHtcclxuICAgICAgICAgICAgdGhpcy5zZXNzaW9uUGFyYW1zW1wiUHJ2VXNlckZsb3dcIl0gPSBcIkNSQ19HUk9VUFwiO1xyXG4gICAgICAgICAgICB0aGlzLnNlc3Npb25QYXJhbXNbXCJQcnZVc2VyQ0RSXCJdID0gXCJDUkNfR1JPVVBfSU5GT1wiO1xyXG4gICAgICAgICAgICBvYmplY3Quc2hvd1BhbmVsYmFyID0gZmFsc2U7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBpZiAob2JqZWN0LnNlbGVjdGVkSWQgPT0gXCJDTUdDQVRcIikge1xyXG4gICAgICAgICAgICB0aGlzLnNlc3Npb25QYXJhbXNbXCJQcnZVc2VyRmxvd1wiXSA9IFwiQ0FNX0NBVFwiO1xyXG4gICAgICAgICAgICB0aGlzLnNlc3Npb25QYXJhbXNbXCJQcnZVc2VyQ0RSXCJdID0gXCJDQU1fVVNFUl9JTkZPXCI7XHJcbiAgICAgICAgICAgIG9iamVjdC5zaG93UGFuZWxiYXIgPSBmYWxzZTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGlmIChvYmplY3Quc2VsZWN0ZWRJZCA9PSBcIkNNR0dSUFwiKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2Vzc2lvblBhcmFtc1tcIlBydlVzZXJGbG93XCJdID0gXCJDQU1fR1JPVVBcIjtcclxuICAgICAgICAgICAgdGhpcy5zZXNzaW9uUGFyYW1zW1wiUHJ2VXNlckNEUlwiXSA9IFwiQ0FNX0dST1VQX0lORk9cIjtcclxuICAgICAgICAgICAgb2JqZWN0LnNob3dQYW5lbGJhciA9IGZhbHNlO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgaWYgKG9iamVjdC5zZWxlY3RlZElkID09IFwiQklMTElOR1wiKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2Vzc2lvblBhcmFtc1tcIlBydlVzZXJGbG93XCJdID0gXCJCSUxMSU5HXCI7XHJcbiAgICAgICAgICAgIHRoaXMuc2Vzc2lvblBhcmFtc1tcIlBydlVzZXJDRFJcIl0gPSBcIkJJTExJTkdfQ0RSXCI7XHJcbiAgICAgICAgICAgIG9iamVjdC5zaG93UGFuZWxiYXIgPSBmYWxzZTtcclxuICAgICAgICAgIH1cclxuICBcclxuICAgICAgICAgIGlmIChvYmplY3Quc2VsZWN0ZWRJZC5zdGFydHNXaXRoKFwiUE9SVEFMX1wiKSkvL0Z1YWQgOiBSTkRcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy5zZXNzaW9uUGFyYW1zW1wiUE9SVEFMX0ZPUk1cIl0gPSBmb2N1c2VkRXZlbnQuaWQ7XHJcbiAgICAgICAgICAgIGZvY3VzZWRFdmVudC5pZCA9ICdEU1BQT1JUQUwnO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLy9GVUFEOiBjaGVjayBpZiBiZWxvdyBjb2RlIHRpbGwgZWxzZSBpcyBuZWVkZWRcclxuICAgICAgICBpZiAodGhpcy5wYXJhbUNvbmZpZy5ERUJVR19GTEFHKSBjb25zb2xlLmxvZyhcIiBpbiBzdGF0ZUNoYW5nZSA6IGhlcmUxXCIpO1xyXG4gICAgICAgICAgaWYgKG9iamVjdC5yb3V0ZXIucm91dGVyU3RhdGUuc25hcHNob3QudXJsID09ICgnLycgKyBmb2N1c2VkRXZlbnQuaWQpKSB7XHJcbiAgICAgICAgICBpZiAodGhpcy5wYXJhbUNvbmZpZy5ERUJVR19GTEFHKSBjb25zb2xlLmxvZyhcIiBpbiBzdGF0ZUNoYW5nZSA6IGhlcmUyXCIpO1xyXG4gICAgICAgICAgb2JqZWN0LnJvdXRlci5uYXZpZ2F0ZUJ5VXJsKCcnLCB7IHNraXBMb2NhdGlvbkNoYW5nZTogdHJ1ZSB9KS50aGVuKCgpID0+e1xyXG4gICAgICAgICAgICBpZiAodGhpcy5wYXJhbUNvbmZpZy5ERUJVR19GTEFHKSBjb25zb2xlLmxvZyhcIiBpbiBzdGF0ZUNoYW5nZSA6IGhlcmUzXCIpO1xyXG4gICAgICAgICAgICAgIG9iamVjdC5yb3V0ZXIubmF2aWdhdGUoWycvJyArIGZvY3VzZWRFdmVudC5pZF0sIHsgc2tpcExvY2F0aW9uQ2hhbmdlOiB0cnVlLCByZXBsYWNlVXJsOiB0cnVlLCBwcmVzZXJ2ZUZyYWdtZW50OiBmYWxzZSB9KVxyXG4gICAgICAgICAgICBpZiAodGhpcy5wYXJhbUNvbmZpZy5ERUJVR19GTEFHKSBjb25zb2xlLmxvZyhcIiBpbiBzdGF0ZUNoYW5nZSA6IGhlcmU0XCIpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICBvYmplY3Qucm91dGVyLm5hdmlnYXRlKFsnLycgKyBmb2N1c2VkRXZlbnQuaWRdLCB7IHNraXBMb2NhdGlvbkNoYW5nZTogdHJ1ZSwgcmVwbGFjZVVybDogdHJ1ZSwgcHJlc2VydmVGcmFnbWVudDogZmFsc2UgfSk7XHJcbiAgICAgICAgICBpZiAodGhpcy5wYXJhbUNvbmZpZy5ERUJVR19GTEFHKSBjb25zb2xlLmxvZyhcImluIHN0YXRlQ2hhbmdlIDogXCIsZm9jdXNlZEV2ZW50LmlkKTtcclxuICAgICAgICB9XHJcbiAgXHJcbiAgICAgICAgICBpZiAob2JqZWN0LmlzUGhvbmVQb3J0cmFpdCl7XHJcbiAgICAgICAgICAgIG9iamVjdC5zaG93UGFuZWxiYXIgPSBmYWxzZTtcclxuICAgICAgICAgIH1cclxuICBcclxuICAgICAgICAgIC8vdGhpcy5zdGFyU2VydmljZXMuc2V0UlRMKCk7XHJcbiAgXHJcbiAgICAgICAgICAvL3RoaXMuc2hvd1BhbmVsYmFyID0gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgXHJcbiAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuICBwdWJsaWMgc2V0UGFuZWxCYXIob2JqZWN0OmFueSkge1xyXG5cclxuICAgIGlmICghb2JqZWN0LnN0YXRpY01lbnUpIHtcclxuICAgICAgb2JqZWN0LkJvZHkgPSBbXTtcclxuICAgICAgbGV0IE5ld1ZhbDphbnkgPSB7XHJcbiAgICAgIE1FTlUgOiBvYmplY3QuY3VycmVudE1lbnUudG9VcHBlckNhc2UoKSxcclxuICAgICAgVVNFUk5BTUUgOiBvYmplY3Quc3RhclNlcnZpY2VzLnNlc3Npb25QYXJhbXMuVVNFUk5BTUUudG9VcHBlckNhc2UoKSxcclxuICAgICAgTEFOR1VBR0VfTkFNRSA6IG9iamVjdC5wYXJhbUNvbmZpZy51c2VyTGFuZy50b1VwcGVyQ2FzZSgpLFxyXG4gICAgICBISURERU4gOiAnMCdcclxuICAgIH07XHJcblxyXG4gICAgICBOZXdWYWxbXCJfUVVFUllcIl0gPSBcIkdFVF9NRU5VX1JPVVRJTkVTXCI7XHJcblxyXG4gICAgICBvYmplY3QuYWRkVG9Cb2R5KE5ld1ZhbCk7XHJcblxyXG4gICAgICBsZXQgTmV3VmFsMTphbnkgPSB7XHJcbiAgICAgICAgTUVOVTogXCJcIixcclxuICAgICAgICBVU0VSTkFNRTogb2JqZWN0LnN0YXJTZXJ2aWNlcy5zZXNzaW9uUGFyYW1zLlVTRVJOQU1FLnRvVXBwZXJDYXNlKClcclxuICAgIH07XHJcblxyXG4gICAgICBOZXdWYWwxW1wiX1FVRVJZXCJdID0gXCJHRVRfUk9VVElORVNfQVVUSE9SSVRZXCI7XHJcblxyXG4gICAgICBvYmplY3QuYWRkVG9Cb2R5KE5ld1ZhbDEpO1xyXG5cclxuICAgIHRoaXMuZmV0Y2hNZW51KG9iamVjdCwgdGhpcy5oYW5kbGVGZXRjaGVkUGFuZWxCYXIpO1xyXG4gIH1cclxufVxyXG5cclxuXHJcblxyXG4gIHB1YmxpYyBoYW5kbGVGZXRjaGVkUGFuZWxCYXIob2JqZWN0OmFueSwgZGF0YTphbnksIHNob3dFbXB0eTphbnkpIHtcclxuICAgIGZ1bmN0aW9uIGNoZWNrQXV0aERhdGEocm91dGluZV9uYW1lOmFueSwgYXV0aERhdGE6YW55KSB7XHJcbiAgICAgIGxldCBpID0gMDtcclxuICAgICAgbGV0IHJvdXRpbmVBdXRoO1xyXG4gICAgICB3aGlsZSAoaSA8IGF1dGhEYXRhLmxlbmd0aCkge1xyXG4gICAgICAgIGlmIChhdXRoRGF0YVtpXS5ST1VUSU5FX05BTUUgPT0gcm91dGluZV9uYW1lKSB7XHJcbiAgICAgICAgICByb3V0aW5lQXV0aCA9IGF1dGhEYXRhW2ldO1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGkrKztcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gcm91dGluZUF1dGg7XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBmb3JtYXREYXRhKGFycjphbnksIGF1dGhEYXRhOmFueSwgc2hvd0VtcHR5OmFueSkge1xyXG4gICAgICBsZXQgbWVudTphbnkgPSBbXTtcclxuICAgICAgbGV0IGl0ZW1zOmFueSA9IFtdO1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhcnIubGVuZ3RoOyBpKyspIHtcclxuICAgICAgaWYgKG9iamVjdC5wYXJhbUNvbmZpZy5ERUJVR19GTEFHKSBjb25zb2xlLmxvZyhcImFycltpXTpcIiwgYXJyW2ldKTtcclxuICAgICAgbGV0IHR5cGUgPSBhcnJbaV0uY2hvaWNlX3R5cGUuY2hhckF0KDApO1xyXG4gICAgICBpZiAodHlwZSA9PSBcIk1cIikge1xyXG4gICAgICAgIGlmIChpdGVtcy5sZW5ndGggIT0gMCkge1xyXG4gICAgICAgICAgbGV0IGl0ZW0gPSB7XHJcbiAgICAgICAgICAgIHRleHQ6IG1lbnVJdGVtLnRleHQsXHJcbiAgICAgICAgICAgIGNob2ljZTogbWVudUl0ZW0uY2hvaWNlLFxyXG4gICAgICAgICAgICBpdGVtczogaXRlbXNcclxuICAgICAgICAgIH07XHJcbiAgICAgICAgICBtZW51LnB1c2goaXRlbSk7XHJcbiAgICAgICAgICBpdGVtcyA9IFtdO1xyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgbWVudUl0ZW06YW55ID0ge1xyXG4gICAgICAgICAgdGV4dDogYXJyW2ldLnRleHQsXHJcbiAgICAgICAgICBjaG9pY2U6IGFycltpXS5jaG9pY2VcclxuICAgICAgICB9O1xyXG4gICAgICAgIC8vbWVudS5wdXNoKGl0ZW0pO1xyXG4gICAgICB9XHJcbiAgICAgIGVsc2UgaWYgKHR5cGUgPT0gXCJSXCIpIHtcclxuICAgICAgICBpZiAob2JqZWN0LnBhcmFtQ29uZmlnLkRFQlVHX0ZMQUcpIGNvbnNvbGUubG9nKFwiYXV0aERhdGE6XCIsIGF1dGhEYXRhLCBcImFycltpXTpcIiwgYXJyW2ldKTtcclxuICAgICAgICBsZXQgcm91dGluZUF1dGggPSBjaGVja0F1dGhEYXRhKGFycltpXS5jaG9pY2UsIGF1dGhEYXRhKTtcclxuICAgICAgICBpZiAodHlwZW9mIHJvdXRpbmVBdXRoICE9PSBcInVuZGVmaW5lZFwiKSB7XHJcbiAgICAgICAgICBpZiAob2JqZWN0LnBhcmFtQ29uZmlnLkRFQlVHX0ZMQUcpIGNvbnNvbGUubG9nKFwiYXJyW2ldLmNob2ljZTpcIiArIGFycltpXS5jaG9pY2UgKyBcIiAgcm91dGluZUF1dGguRElTUF9GTEFHOlwiICsgcm91dGluZUF1dGguRElTUF9GTEFHICsgXCIgcm91dGluZUF1dGguQVVUSExFVkVMIDpcIiArIHJvdXRpbmVBdXRoLkFVVEhMRVZFTClcclxuICAgICAgICAgIGlmIChyb3V0aW5lQXV0aC5ESVNQX0ZMQUcgIT0gXCJOXCIpIC8vICYmIChyb3V0aW5lQXV0aC5BVVRITEVWRUwgIT0gMCkgKVxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBsZXQgcm91dGluZUl0ZW0gPSB7XHJcbiAgICAgICAgICAgICAgdGV4dDogYXJyW2ldLnRleHQsXHJcbiAgICAgICAgICAgICAgY2hvaWNlOiBhcnJbaV0uY2hvaWNlLFxyXG4gICAgICAgICAgICAgIGF1dGhMZXZlbDogcm91dGluZUF1dGguQVVUSExFVkVMLFxyXG4gICAgICAgICAgICAgIHJvdXRpbmVEZXNjOiByb3V0aW5lQXV0aC5ST1VUSU5FX0RFU0MsXHJcbiAgICAgICAgICAgICAgcm91dGluZVZlcjogcm91dGluZUF1dGguUk9VVF9WRVIsXHJcbiAgICAgICAgICAgICAgcm91dGVyTGluazogXCIvXCIgKyBhcnJbaV0uY2hvaWNlXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIGl0ZW1zLnB1c2gocm91dGluZUl0ZW0pO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAob2JqZWN0LnBhcmFtQ29uZmlnLkRFQlVHX0ZMQUcpIGNvbnNvbGUubG9nKFwiLS0taXRlbXM6XCIsIGl0ZW1zKTtcclxuICAgICAgICBcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgaWYgKGl0ZW1zLmxlbmd0aCAhPSAwKSB7XHJcbiAgICAgIGxldCBpdGVtID0ge1xyXG4gICAgICAgIHRleHQ6IG1lbnVJdGVtLnRleHQsXHJcbiAgICAgICAgY2hvaWNlOiBtZW51SXRlbS5jaG9pY2UsXHJcbiAgICAgICAgaXRlbXM6IGl0ZW1zXHJcbiAgICAgIH07XHJcbiAgICAgIG1lbnUucHVzaChpdGVtKTtcclxuICAgICAgaXRlbXMgPSBbXTtcclxuICAgIH1cclxuICAgIGVsc2UgaWYgKHNob3dFbXB0eSAmJiAodHlwZW9mIG1lbnVJdGVtICE9PSBcInVuZGVmaW5lZFwiKSl7XHJcbiAgICAgIGxldCBpdGVtID0ge1xyXG4gICAgICAgIHRleHQ6IG1lbnVJdGVtLnRleHQsXHJcbiAgICAgICAgY2hvaWNlOiBtZW51SXRlbS5jaG9pY2UsXHJcbiAgICAgICAgaXRlbXM6IFtdXHJcbiAgICAgIH07XHJcbiAgICAgIG1lbnUucHVzaChpdGVtKTtcclxuICAgIFxyXG4gICAgfVxyXG5cclxuICAgICAgcmV0dXJuIG1lbnU7XHJcbn1cclxuICBvYmplY3QubWVudSA9IGZvcm1hdERhdGEoZGF0YVswXS5kYXRhLCBkYXRhWzFdLmRhdGEsIHNob3dFbXB0eSk7XHJcblxyXG4gIG9iamVjdC5wYW5lbEl0ZW1zID0gb2JqZWN0Lm1lbnU7XHJcbm9iamVjdC5tZW51SXRlbXNIb3JpeiA9IG9iamVjdC5tZW51O1xyXG4gIGxldCBwYXJhbUNvbmZpZyA9IHtcclxuICAgIFwiTmFtZVwiOiBcIm1lbnVcIixcclxuICAgIFwiVmFsXCI6IG9iamVjdC5tZW51XHJcbiAgfTtcclxuICBzZXRQYXJhbUNvbmZpZyhwYXJhbUNvbmZpZyk7XHJcblxyXG5cclxufVxyXG5cclxucHVibGljICBzbGVlcChtczphbnkpIHtcclxuICByZXR1cm4gbmV3IFByb21pc2UocmVzb2x2ZSA9PiBzZXRUaW1lb3V0KHJlc29sdmUsIG1zKSk7XHJcbn1cclxuICBwcml2YXRlIGNvbW1pdEJvZHk6YW55ID0gW107XHJcbnB1YmxpYyBpblRyYW5zID0gZmFsc2U7XHJcbiAgcHVibGljIGlzUGhvbmVQb3J0cmFpdCA9IGZhbHNlO1xyXG5wcml2YXRlIEJvZHk6YW55ID0gW107XHJcbnB1YmxpYyBjb21taXRDb21tYW5kcyA9IFsnSU5TRVJUJywgJ1VQREFURScsICdERUxFVEUnXTtcclxuXHJcbiAgcHVibGljIGJlZ2luVHJhbnMoKSB7XHJcbiAgICB0aGlzLmNvbW1pdEJvZHkgPSBbXTtcclxuICB0aGlzLmluVHJhbnMgPSB0cnVlO1xyXG5cclxufVxyXG4gIHB1YmxpYyBlbmRUcmFucyhvYmplY3Q6YW55LCBjb21taXQ6YW55KSB7XHJcbiAgbGV0IFBhZ2UgPSBcIiZfdHJhbnM9WVwiO1xyXG4gICAgbGV0IHRhYmxlSW5mbzphbnk7XHJcbiAgICBpZiAoY29tbWl0ICYmIHRoaXMuY29tbWl0Qm9keS5sZW5ndGggIT0gMCkge1xyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKHJlc29sdmUgPT4ge1xyXG4gICAgICB0aGlzLnBvc3QodGhpcywgUGFnZSwgdGhpcy5jb21taXRCb2R5KS5zdWJzY3JpYmUocmVzdWx0ID0+IHtcclxuICAgICAgICAgIHRoaXMuY29tbWl0Qm9keSA9IFtdO1xyXG4gICAgICAgIHRoaXMuaW5UcmFucyA9IGZhbHNlO1xyXG5cclxuICAgICAgICB0YWJsZUluZm8gPSByZXN1bHQuZGF0YVswXS5kYXRhO1xyXG4gICAgICAgIHJldHVybiByZXNvbHZlKHRhYmxlSW5mbyk7XHJcbiAgICAgIH0sXHJcbiAgICAgICAgZXJyID0+IHtcclxuICAgICAgICAgIG9iamVjdC5GT1JNX1RSSUdHRVJfRkFJTFVSRSA9IHRydWU7XHJcbiAgICAgICAgICAgIHRoaXMuY29tbWl0Qm9keSA9IFtdO1xyXG4gICAgICAgICAgdGhpcy5pblRyYW5zID0gZmFsc2U7XHJcbiAgICAgICAgICAvL2FsZXJ0KCdlcnJvcjonICsgZXJyLm1lc3NhZ2UpO1xyXG4gICAgICAgICAgdGhpcy5zaG93RXJyb3JNc2cob2JqZWN0LCBlcnIpO1xyXG4gICAgICAgICAgcmV0dXJuIHJlc29sdmUodGFibGVJbmZvKTtcclxuICAgICAgICB9KTtcclxuICAgIH0pO1xyXG4gIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICB0aGlzLmNvbW1pdEJvZHkgPSBbXTtcclxuICAgIHRoaXMuaW5UcmFucyA9IGZhbHNlO1xyXG4gICAgICByZXR1cm4gbnVsbDtcclxuICB9XHJcblxyXG5cclxufVxyXG4vLyBwdWJsaWMgYWRkVG9Cb2R5KE5ld1ZhbCkge1xyXG4vLyAgIHRoaXMuQm9keS5wdXNoKE5ld1ZhbCk7XHJcbi8vIH1cclxuICBwdWJsaWMgZXhlY1NRTEJvZHkob2JqZWN0OmFueSwgQm9keTphbnksREJMb2M6YW55KSB7XHJcbiAgZnVuY3Rpb24gZ2V0Rmlyc3RXb3JkKHN0cjphbnkpIHtcclxuICAgIGxldCBteUFycmF5ID0gc3RyLnNwbGl0KFwiX1wiKTtcclxuICAgIHJldHVybiBteUFycmF5WzBdO1xyXG4gIH1cclxuICBcclxuICBvYmplY3QuRk9STV9UUklHR0VSX0ZBSUxVUkUgPSBmYWxzZTtcclxuICBsZXQgUGFnZSA9IFwiJl90cmFucz1OXCI7XHJcbiAgaWYgKERCTG9jICE9IFwiXCIpXHJcbiAgICBQYWdlID0gUGFnZSArIFwiJkRCTG9jPVwiICsgREJMb2M7XHJcbiAgbGV0IHRhYmxlSW5mbzphbnk7XHJcblxyXG4gIG9iamVjdC5OT1RGT1VORCA9IGZhbHNlO1xyXG4gIGlmICh0aGlzLmluVHJhbnMpIHtcclxuICAgIGxldCBmaXJzdFdvcmQgPSBnZXRGaXJzdFdvcmQoQm9keVswXS5fUVVFUlkpLnRvVXBwZXJDYXNlKCk7XHJcbiAgICBcclxuICAgIGxldCBpc0NvbW1pdENvbW1hbmQgPSB0aGlzLmNvbW1pdENvbW1hbmRzLmluY2x1ZGVzKGZpcnN0V29yZCk7XHJcbiAgICBpZiAoaXNDb21taXRDb21tYW5kKSB7XHJcbiAgICAgIHRoaXMuY29tbWl0Qm9keS5wdXNoKEJvZHlbMF0pO1xyXG4gICAgICByZXR1cm4gdGFibGVJbmZvO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIG5ldyBQcm9taXNlKHJlc29sdmUgPT4ge1xyXG4gICAgLy9jb25zb2xlLmxvZyAoXCJjaGVjazpkaXJ0eSB0ZXN0eCBleGVjU1FMQm9keSAyXCIpO1xyXG4gICAgdGhpcy5wb3N0KHRoaXMsIFBhZ2UsIEJvZHkpLnN1YnNjcmliZShyZXN1bHQgPT4ge1xyXG4gICAgICAvL2NvbnNvbGUubG9nIChcImNoZWNrOmRpcnR5IHRlc3R4IGV4ZWNTUUxCb2R5IDNcIik7XHJcbiAgICAgIHRhYmxlSW5mbyA9IHJlc3VsdC5kYXRhO1xyXG4gICAgICAvLyBpZiAocmVzdWx0LmRhdGEubGVuZ3RoID09IDApXHJcbiAgICAgIC8vICAgb2JqZWN0Lk5PVEZPVU5EID0gdHJ1ZTtcclxuICAgICAgcmV0dXJuIHJlc29sdmUodGFibGVJbmZvKTtcclxuICAgIH0sXHJcbiAgICAgIGVyciA9PiB7XHJcbiAgICAgICAgb2JqZWN0LkZPUk1fVFJJR0dFUl9GQUlMVVJFID0gdHJ1ZTtcclxuICAgICAgICBhbGVydCgnZXJyb3I6JyArIGVyci5tZXNzYWdlKTtcclxuICAgICAgICByZXR1cm4gcmVzb2x2ZSh0YWJsZUluZm8pO1xyXG4gICAgICB9KTtcclxuICB9KTtcclxuXHJcblxyXG59XHJcbiAgcHVibGljIGV4ZWNTUUwob2JqZWN0OmFueSwgc3FsU3RtdDphbnkpIHtcclxuICAgIGZ1bmN0aW9uIGdldEZpcnN0V29yZChzdHI6YW55KSB7XHJcbiAgICAgIGxldCBzcGFjZUluZGV4ID0gc3RyLnRyaW0oKS5pbmRleE9mKCcgJyk7XHJcbiAgICByZXR1cm4gc3BhY2VJbmRleCA9PT0gLTEgPyBzdHIgOiBzdHIuc3Vic3RyKDAsIHNwYWNlSW5kZXgpO1xyXG4gIH1cclxuXHJcbiAgb2JqZWN0LkZPUk1fVFJJR0dFUl9GQUlMVVJFID0gZmFsc2U7XHJcbiAgbGV0IFBhZ2UgPSBcIiZfdHJhbnM9TlwiO1xyXG4gIHRoaXMuQm9keSA9IFtdO1xyXG4gICAgbGV0IE5ld1ZhbDphbnkgPSB7fTtcclxuICBOZXdWYWxbXCJfUVVFUllcIl0gPSBcIkVYRUNTUUxcIjtcclxuICBOZXdWYWxbXCJfU1RNVFwiXSA9IHNxbFN0bXQ7XHJcbiAgICBsZXQgdGFibGVJbmZvOmFueTtcclxuXHJcbiAgb2JqZWN0Lk5PVEZPVU5EID0gZmFsc2U7XHJcbiAgaWYgKHRoaXMuaW5UcmFucykge1xyXG4gICAgbGV0IGZpcnN0V29yZCA9IGdldEZpcnN0V29yZChzcWxTdG10KS50b1VwcGVyQ2FzZSgpO1xyXG4gICAgXHJcbiAgICBsZXQgaXNDb21taXRDb21tYW5kID0gdGhpcy5jb21taXRDb21tYW5kcy5pbmNsdWRlcyhmaXJzdFdvcmQpO1xyXG4gICAgaWYgKGlzQ29tbWl0Q29tbWFuZCkge1xyXG4gICAgICB0aGlzLmNvbW1pdEJvZHkucHVzaChOZXdWYWwpO1xyXG4gICAgICByZXR1cm4gdGFibGVJbmZvO1xyXG4gICAgfVxyXG4gIH1cclxuICB0aGlzLkJvZHkgPSB0aGlzLmFkZFRvQm9keShOZXdWYWwsIHRoaXMuQm9keSk7XHJcblxyXG4gIHJldHVybiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHtcclxuICAgIHRoaXMucG9zdCh0aGlzLCBQYWdlLCB0aGlzLkJvZHkpLnN1YnNjcmliZShyZXN1bHQgPT4ge1xyXG4gICAgICB0aGlzLkJvZHkgPSBbXTtcclxuICAgICAgdGFibGVJbmZvID0gcmVzdWx0LmRhdGFbMF0uZGF0YTtcclxuICAgICAgaWYgKHJlc3VsdC5kYXRhWzBdLnJvd0NvdW50ID09IDApXHJcbiAgICAgICAgb2JqZWN0Lk5PVEZPVU5EID0gdHJ1ZTtcclxuICAgICAgcmV0dXJuIHJlc29sdmUodGFibGVJbmZvKTtcclxuICAgIH0sXHJcbiAgICAgIGVyciA9PiB7XHJcbiAgICAgICAgb2JqZWN0LkZPUk1fVFJJR0dFUl9GQUlMVVJFID0gdHJ1ZTtcclxuICAgICAgICBhbGVydCgnZXJyb3I6JyArIGVyci5tZXNzYWdlKTtcclxuICAgICAgICByZXR1cm4gcmVzb2x2ZSh0YWJsZUluZm8pO1xyXG4gICAgICB9KTtcclxuICB9KTtcclxufVxyXG5cclxuXHJcbi8vLy8vLy8vXHJcbiBcclxucHVibGljIGF0dF9pbWdfZ2V0RmlsZUxpbmsoZmllbGRfZGF0YSxvYmplY3QpIHtcclxuICBsZXQgZmlsZUxpbms6YW55ID0gXCJcIjtcclxuICBpZiAoZmllbGRfZGF0YSA9PSBudWxsKVxyXG4gICAgcmV0dXJuIGZpbGVMaW5rO1xyXG4gIGZpZWxkX2RhdGEgPSBmaWVsZF9kYXRhLnRyaW0oKTtcclxuICB0cnkge1xyXG4gICAgZmllbGRfZGF0YSA9IEpTT04ucGFyc2UoZmllbGRfZGF0YSk7XHJcbiAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAvL2NvbnNvbGUubG9nIChcIkVycm9yIHBhcnNpbmcgOlwiLGZpZWxkX2RhdGEpO1xyXG4gICAgICByZXR1cm4gZmlsZUxpbms7XHJcbiAgfVxyXG4gICAgLy9jb25zb2xlLmxvZyhcImdldEZpbGVMaW5rOmZpZWxkX2RhdGE6XCIsIGZpZWxkX2RhdGEsIHR5cGVvZiBmaWVsZF9kYXRhKSAgICBcclxuICAgIC8vY29uc29sZS5sb2coXCJnZXRGaWxlTGluazpmaWVsZF9kYXRhOlwiLCBmaWVsZF9kYXRhKVxyXG4gICAgaWYgKHR5cGVvZiBmaWVsZF9kYXRhID09IFwib2JqZWN0XCIpXHJcbiAgICAgIGZpbGVMaW5rID0gb2JqZWN0LkF0dER3blVybCArIGVuY29kZVVSSShmaWVsZF9kYXRhWzBdLm5hbWUpO1xyXG4gICAgLy9jb25zb2xlLmxvZyhcImdldEZpbGVMaW5rOmZpbGVMaW5rOlwiLCBmaWxlTGluaylcclxuICByZXR1cm4gZmlsZUxpbms7XHJcbn1cclxucHVibGljIGF0dF9pbWdfZ2V0QXR0KGRhdGE6YW55LG9iamVjdDphbnkpIHtcclxuICBsZXQgYXR0cyA9IFwiXCI7XHJcbiAvLyBjb25zb2xlLmxvZyhcImdldEF0dF9kYXRhOlwiLCBkYXRhKTtcclxuICAgIGxldCB2YWxzID1cclxuICAgICAgW3tuYW1lOlwiXCIsXHJcbiAgICAgIHNpemU6XCJcIn1cclxuICAgICAgXTtcclxuICB0cnkge1xyXG4gICAgdmFscyA9IEpTT04ucGFyc2UoZGF0YSk7XHJcbiAgfSBjYXRjaCAoZSkge1xyXG4gICAgICBjb25zb2xlLmxvZyAoXCJFcnJvciBwYXJzaW5nIDozOlwiLGRhdGEpO1xyXG4gICAgICByZXR1cm4gYXR0cztcclxuICB9XHJcbiAgLy9pZiAoKGRhdGEgIT0gXCJcIikgJiYgKGRhdGEgIT0gXCJbXVwiKSAmJiAoZGF0YSAhPSBudWxsKSkge1xyXG4gICAgLy92YWxzID0gSlNPTi5wYXJzZShkYXRhKTtcclxuICAgIGNvbnNvbGUubG9nKFwiZ2V0QXR0X2RhdGE6XCIsIHZhbHMsIHR5cGVvZiB2YWxzKTtcclxuICAgIGlmICh0eXBlb2YgdmFscyA9PSBcIm9iamVjdFwiKXtcclxuICAgICAgdmFscy5mb3JFYWNoKHZhbCA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJ2YWw6XCIsIHZhbClcclxuICAgICAgICBhdHRzID0gYXR0cyArIFwiPFwiICsgdmFsLm5hbWUgKyBcIiBTaXplOlwiICsgdmFsLnNpemUgKyBcIj5cIjtcclxuICAgICAgfSlcclxuICAgIH1cclxuICAvL31cclxuICBjb25zb2xlLmxvZyhcImF0dHM6XCIsIGF0dHMpXHJcbiAgcmV0dXJuIGF0dHM7XHJcbn1cclxucHVibGljIGF0dF9pbWdfcG9wdWxhdGVBcnJzKGZvcm1Hcm91cDphbnksb2JqZWN0OmFueSl7XHJcbiAgLy9jb25zb2xlLmxvZyhcImF0dF9pbWdfcG9wdWxhdGVBcnJzOmZvcm1Hcm91cDpcIiwgZm9ybUdyb3VwLCBvYmplY3QuYXR0X2Fyciwgb2JqZWN0LmltZ19hcnIpXHJcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBvYmplY3QuYXR0X2Fyci5sZW5ndGg7IGkrKykge1xyXG4gICAgaWYgKGZvcm1Hcm91cFtvYmplY3QuYXR0X2FycltpXV0udHJpbSgpICE9IFwiXCIpIHtcclxuICAgICAgdHJ5IHtcclxuICAgICAgICBvYmplY3QubXlGaWxlc1tvYmplY3QuYXR0X2FycltpXV0gPSBKU09OLnBhcnNlKGZvcm1Hcm91cFtvYmplY3QuYXR0X2FycltpXV0pO1xyXG4gICAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgICAgICAvL2NvbnNvbGUubG9nIChcIkVycm9yIHBhcnNpbmcgOlwiLGZpZWxkX2RhdGEpO1xyXG4gICAgICAgICAgcmV0dXJuIDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICBmb3IgKGxldCBpID0gMDsgaSA8IG9iamVjdC5pbWdfYXJyLmxlbmd0aDsgaSsrKSB7XHJcbiAgICBpZiAoZm9ybUdyb3VwW29iamVjdC5pbWdfYXJyW2ldXSAhPSBudWxsKXtcclxuICAgICAgaWYgKGZvcm1Hcm91cFtvYmplY3QuaW1nX2FycltpXV0udHJpbSgpICE9IFwiXCIpIG9iamVjdC5teUZpbGVzW29iamVjdC5pbWdfYXJyW2ldXSA9IEpTT04ucGFyc2UoZm9ybUdyb3VwW29iamVjdC5pbWdfYXJyW2ldXSk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgb2JqZWN0LmF0dF9hcnIubGVuZ3RoOyBpKyspIHtcclxuICAgIC8vY29uc29sZS5sb2coXCJvYmplY3QuYXR0X2FycltpXTpcIiwgb2JqZWN0LmF0dF9hcnJbaV0pXHJcbiAgICBpZiAoZm9ybUdyb3VwW29iamVjdC5hdHRfYXJyW2ldXSAhPSBcIlwiKSB7XHJcbiAgICAgIGxldCBpdGVtczE6YW55ID1bXTtcclxuICAgICAgbGV0IGZpZWxkX2RhdGEgPSBmb3JtR3JvdXBbb2JqZWN0LmF0dF9hcnJbaV1dO1xyXG5cclxuICAgICAgdHJ5IHtcclxuICAgICAgICBmaWVsZF9kYXRhID0gSlNPTi5wYXJzZShmaWVsZF9kYXRhKTtcclxuICAgICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgICAgY29uc29sZS5sb2cgKFwiRXJyb3IgcGFyc2luZyA6NDpcIixmaWVsZF9kYXRhKTtcclxuICAgICAgICAgIGZpZWxkX2RhdGEgPSBudWxsO1xyXG4gICAgICAgICAgLy9yZXR1cm4gYXR0cztcclxuICAgICAgfVxyXG4gICAgICAvL2ZpZWxkX2RhdGEgPSBKU09OLnBhcnNlKGZpZWxkX2RhdGEpO1xyXG4gICAgICBpZiAoZmllbGRfZGF0YSAhPSBudWxsKXtcclxuICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IGZpZWxkX2RhdGEubGVuZ3RoOyBqKyspIHtcclxuICAgICAgICAgIGxldCBpdGVtID1cclxuICAgICAgICAgICAgeyB0aXRsZTogZmllbGRfZGF0YVtqXS5uYW1lLCB1cmw6IG9iamVjdC5BdHREd25VcmwgKyBlbmNvZGVVUkkoZmllbGRfZGF0YVtqXS5uYW1lKSB9XHJcbiAgICAgICAgICBpdGVtczEucHVzaChpdGVtKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgb2JqZWN0LmltZ19nYWxsZXJ5W29iamVjdC5hdHRfYXJyW2ldXSA9IGl0ZW1zMTtcclxuICAgIH1cclxuICAgIC8vY29uc29sZS5sb2coXCJpbWdfZ2FsbGVyeTpcIiwgb2JqZWN0LmltZ19nYWxsZXJ5KVxyXG4gIH1cclxufVxyXG5wdWJsaWMgY29udlRvU3RyaW5nKHZhbCl7XHJcbiAgcmV0dXJuIFN0cmluZyh2YWwpXHJcbiB9XHJcblxyXG5wdWJsaWMgYXR0X2ltZ19wb3B1bGF0ZUFycnNMaXN0KGZvcm1Hcm91cEFycjphbnksb2JqZWN0OmFueSl7XHJcbiAgLy9jb25zb2xlLmxvZyhcImF0dF9pbWdfcG9wdWxhdGVBcnJzOmZvcm1Hcm91cDpcIiwgZm9ybUdyb3VwQXJyLCBvYmplY3QuYXR0X2Fyciwgb2JqZWN0LmltZ19hcnIpXHJcbiAgZm9yIChsZXQgayA9IDA7IGsgPCBmb3JtR3JvdXBBcnIubGVuZ3RoOyBrKyspIHtcclxuICBsZXQgZm9ybUdyb3VwID0gZm9ybUdyb3VwQXJyW2tdO1xyXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgb2JqZWN0LmF0dF9hcnIubGVuZ3RoOyBpKyspIHtcclxuICAgIC8vY29uc29sZS5sb2coXCJhdHRfaW1nX3BvcHVsYXRlQXJyczpvYmplY3QuYXR0X2FycltpXTpcIiwgb2JqZWN0LmF0dF9hcnJbaV0sZm9ybUdyb3VwICwgZm9ybUdyb3VwW29iamVjdC5hdHRfYXJyW2ldXSlcclxuICAgIC8vY29uc29sZS5sb2coXCJhdHRfaW1nX3BvcHVsYXRlQXJyczpmb3JtR3JvdXBbb2JqZWN0LmF0dF9hcnJbaV1dOlwiK2Zvcm1Hcm91cFtvYmplY3QuYXR0X2FycltpXV0udHJpbSgpICtcIjpcIiAgKVxyXG4gICAgaWYgKGZvcm1Hcm91cFtvYmplY3QuYXR0X2FycltpXV0udHJpbSgpICE9IFwiXCIpIG9iamVjdC5teUZpbGVzW29iamVjdC5hdHRfYXJyW2ldXSA9IEpTT04ucGFyc2UoZm9ybUdyb3VwW29iamVjdC5hdHRfYXJyW2ldXSk7XHJcbiAgfVxyXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgb2JqZWN0LmltZ19hcnIubGVuZ3RoOyBpKyspIHtcclxuICAgIGlmIChmb3JtR3JvdXBbb2JqZWN0LmltZ19hcnJbaV1dICE9IFwiXCIpIG9iamVjdC5teUZpbGVzW29iamVjdC5pbWdfYXJyW2ldXSA9IEpTT04ucGFyc2UoZm9ybUdyb3VwW29iamVjdC5pbWdfYXJyW2ldXSk7XHJcbiAgfVxyXG4gIC8vY29uc29sZS5sb2coXCJhdHRfaW1nX3BvcHVsYXRlQXJyczpvYmplY3QubXlGaWxlczprOlwiLCBrLG9iamVjdC5teUZpbGVzLCBvYmplY3QuYXR0X2FyciApXHJcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBvYmplY3QuYXR0X2Fyci5sZW5ndGg7IGkrKykge1xyXG4gICAgLy9jb25zb2xlLmxvZyhcImF0dF9pbWdfcG9wdWxhdGVBcnJzOm9iamVjdC5hdHRfYXJyW2ldOlwiLCBvYmplY3QuYXR0X2FycltpXSwgZm9ybUdyb3VwW29iamVjdC5hdHRfYXJyW2ldXSlcclxuICAgIC8vY29uc29sZS5sb2coXCJhdHRfaW1nX3BvcHVsYXRlQXJyczpvYmplY3QuYXR0X2FycltpXTpcIisgZm9ybUdyb3VwW29iamVjdC5hdHRfYXJyW2ldXSArIFwiOlwiKVxyXG4gICAgbGV0IGFyclZhbCA9IGZvcm1Hcm91cFtvYmplY3QuYXR0X2FycltpXV07XHJcbiAgICBhcnJWYWwgPSBhcnJWYWwudHJpbSgpO1xyXG4gICAgaWYgKCAgYXJyVmFsICE9IFwiXCIpIHtcclxuICAgICAgbGV0IGl0ZW1zMTphbnkgPVtdO1xyXG4gICAgICBsZXQgZmllbGRfZGF0YSA9IGZvcm1Hcm91cFtvYmplY3QuYXR0X2FycltpXV07XHJcbiAgICAgIGZpZWxkX2RhdGEgPSBKU09OLnBhcnNlKGZpZWxkX2RhdGEpO1xyXG4gICAgICBpZiAoZmllbGRfZGF0YSAhPSBudWxsKXtcclxuICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IGZpZWxkX2RhdGEubGVuZ3RoOyBqKyspIHtcclxuICAgICAgICAgIGxldCBpdGVtID1cclxuICAgICAgICAgICAgeyB0aXRsZTogZmllbGRfZGF0YVtqXS5uYW1lLCB1cmw6IG9iamVjdC5BdHREd25VcmwgKyBlbmNvZGVVUkkoZmllbGRfZGF0YVtqXS5uYW1lKSB9XHJcbiAgICAgICAgICBpdGVtczEucHVzaChpdGVtKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgLy9jb25zb2xlLmxvZyhcImF0dF9pbWdfcG9wdWxhdGVBcnJzOmltZ19nYWxsZXJ5Oms6XCIsIGssb2JqZWN0LmF0dF9hcnJbaV0sICBpdGVtczEpXHJcbiAgICAgIGxldCBpbWdfZ2FsbGVyeSA9W107XHJcbiAgICAgIGltZ19nYWxsZXJ5W29iamVjdC5hdHRfYXJyW2ldXSA9IGl0ZW1zMTtcclxuICAgICAgb2JqZWN0LmltZ19nYWxsZXJ5W2tdID0gaW1nX2dhbGxlcnk7XHJcbiAgICB9XHJcbiAgICBlbHNle1xyXG4gICAgICBsZXQgaW1nX2dhbGxlcnkgPVtdO1xyXG4gICAgICBpbWdfZ2FsbGVyeVtvYmplY3QuYXR0X2FycltpXV0gPSBbXTtcclxuICAgICAgb2JqZWN0LmltZ19nYWxsZXJ5W2tdID0gaW1nX2dhbGxlcnk7XHJcbiAgICB9XHJcbiAgfVxyXG4gICAgLy9jb25zb2xlLmxvZyhcImF0dF9pbWdfcG9wdWxhdGVBcnJzOmltZ19nYWxsZXJ5OlwiLCBvYmplY3QuaW1nX2dhbGxlcnkpXHJcbiAgfVxyXG59XHJcbnB1YmxpYyBhdHRfd2ViY2FtX2Zvcm1fb3BlblVwbG9hZGltYWdlKGZpZWxkX2lkOmFueSxvYmplY3Q6YW55KSB7XHJcbiAgLy9vYmplY3QudXBsb2FkaW1hZ2UgPSB0cnVlO1xyXG4gIC8vY29uc29sZS5sb2coXCJvcGVuVXBsb2FkaW1hZ2U6ZmllbGRfaWQ6XCIsIGZpZWxkX2lkLCBvYmplY3QubXlGaWxlcywgb2JqZWN0Lm15RmlsZXNbZmllbGRfaWRdKVxyXG4gIGxldCBteUZpbGVzID0gW107XHJcbiAgaWYgKHR5cGVvZiBvYmplY3QubXlGaWxlc1tmaWVsZF9pZF0gIT0gXCJ1bmRlZmluZWRcIikge1xyXG4gICAgbXlGaWxlcyA9IG9iamVjdC5teUZpbGVzW2ZpZWxkX2lkXTtcclxuICB9XHJcbiAgbGV0IGZpbGVzRGVsZXRlZCA9IFtdO1xyXG4gIGlmICh0eXBlb2Ygb2JqZWN0LmZpbGVzRGVsZXRlZFtmaWVsZF9pZF0gIT0gXCJ1bmRlZmluZWRcIikge1xyXG4gICAgZmlsZXNEZWxldGVkID0gb2JqZWN0LmZpbGVzRGVsZXRlZFtmaWVsZF9pZF07XHJcbiAgfVxyXG4gIGxldCBoaWRlT3RoZXJzID0gZmFsc2U7XHJcbiAgaWYgKHR5cGVvZiBvYmplY3QuZGlzYWJsZVVwbG9hZCAhPSBcInVuZGVmaW5lZFwiKSB7XHJcbiAgICBoaWRlT3RoZXJzID0gb2JqZWN0LmRpc2FibGVVcGxvYWQ7XHJcbiAgfVxyXG4gIGxldCBpbWFnZUlEID0gZmllbGRfaWQ7XHJcbiAgdmFyIG1hc3RlclBhcmFtcyA9IHtcclxuICAgIFwiYWN0aW9uXCI6IFwidXBsb2FkXCIsXHJcbiAgICBcImltYWdlSURcIjogaW1hZ2VJRCxcclxuICAgIFwibXlGaWxlc1wiOiBteUZpbGVzLFxyXG4gICAgXCJmaWxlc0RlbGV0ZWRcIjogZmlsZXNEZWxldGVkLFxyXG4gICAgXCJoaWRlT3RoZXJzXCIgOiBoaWRlT3RoZXJzXHJcbiAgfVxyXG5cclxuXHJcbiAgb2JqZWN0LkRTUF9XRUJDQU1Db25maWcgPSBuZXcgY29tcG9uZW50Q29uZmlnRGVmKClcclxuICBvYmplY3QuRFNQX1dFQkNBTUNvbmZpZy5tYXN0ZXJQYXJhbXMgPSBtYXN0ZXJQYXJhbXNcclxuICAvL2NvbnNvbGUubG9nKFwib2JqZWN0LkRTUF9XRUJDQU1Db25maWcubWFzdGVyUGFyYW1zOlwiLCBvYmplY3QuRFNQX1dFQkNBTUNvbmZpZy5tYXN0ZXJQYXJhbXMpXHJcbn1cclxuXHJcbnB1YmxpYyBhdHRfaW1nX2Zvcm1fb3BlblVwbG9hZGltYWdlKGZpZWxkX2lkOmFueSxvYmplY3Q6YW55KSB7XHJcbiAgLy9vYmplY3QudXBsb2FkaW1hZ2UgPSB0cnVlO1xyXG4gIGNvbnNvbGUubG9nKFwib3BlblVwbG9hZGltYWdlOmZpZWxkX2lkOlwiLCBmaWVsZF9pZCwgb2JqZWN0Lm15RmlsZXMsIG9iamVjdC5teUZpbGVzW2ZpZWxkX2lkXSlcclxuICBsZXQgbXlGaWxlcyA9IFtdO1xyXG4gIGlmICh0eXBlb2Ygb2JqZWN0Lm15RmlsZXNbZmllbGRfaWRdICE9IFwidW5kZWZpbmVkXCIpIHtcclxuICAgIG15RmlsZXMgPSBvYmplY3QubXlGaWxlc1tmaWVsZF9pZF07XHJcbiAgfVxyXG4gIGxldCBmaWxlc0RlbGV0ZWQgPSBbXTtcclxuICBpZiAodHlwZW9mIG9iamVjdC5maWxlc0RlbGV0ZWRbZmllbGRfaWRdICE9IFwidW5kZWZpbmVkXCIpIHtcclxuICAgIGZpbGVzRGVsZXRlZCA9IG9iamVjdC5maWxlc0RlbGV0ZWRbZmllbGRfaWRdO1xyXG4gIH1cclxuICBsZXQgaGlkZU90aGVycyA9IGZhbHNlO1xyXG4gIGlmICh0eXBlb2Ygb2JqZWN0LmRpc2FibGVVcGxvYWQgIT0gXCJ1bmRlZmluZWRcIikge1xyXG4gICAgaGlkZU90aGVycyA9IG9iamVjdC5kaXNhYmxlVXBsb2FkO1xyXG4gIH1cclxuICBsZXQgaW1hZ2VJRCA9IGZpZWxkX2lkO1xyXG4gIHZhciBtYXN0ZXJQYXJhbXMgPSB7XHJcbiAgICBcImFjdGlvblwiOiBcInVwbG9hZFwiLFxyXG4gICAgXCJpbWFnZUlEXCI6IGltYWdlSUQsXHJcbiAgICBcIm15RmlsZXNcIjogbXlGaWxlcyxcclxuICAgIFwiZmlsZXNEZWxldGVkXCI6IGZpbGVzRGVsZXRlZCxcclxuICAgIFwiaGlkZU90aGVyc1wiIDogaGlkZU90aGVyc1xyXG4gIH1cclxuXHJcblxyXG4gIG9iamVjdC5EU1BfVVBMT0FEQ29uZmlnID0gbmV3IGNvbXBvbmVudENvbmZpZ0RlZigpXHJcbiAgb2JqZWN0LkRTUF9VUExPQURDb25maWcubWFzdGVyUGFyYW1zID0gbWFzdGVyUGFyYW1zXHJcbiAgY29uc29sZS5sb2coXCJvYmplY3QuRFNQX1VQTE9BRENvbmZpZy5tYXN0ZXJQYXJhbXM6XCIsIG9iamVjdC5EU1BfVVBMT0FEQ29uZmlnLm1hc3RlclBhcmFtcylcclxufVxyXG5wdWJsaWMgY2FsbEdldFNhdmVBdHRhY2hlbXRzKGFjdGlvbjphbnksZGF0YTphbnksb2JqZWN0OmFueSkge1xyXG4gIC8vY29uc29sZS5sb2coXCJjYWxsU2F2ZUF0dGFjaGVtdHM6bXlGaWxlczpcIiwgb2JqZWN0Lm15RmlsZXMpXHJcbiAgbGV0IGNhblNlbmQgPSBmYWxzZTtcclxuICBpZiggdHlwZW9mIG9iamVjdC5hdHRfYXJyICE9IFwidW5kZWZpbmVkXCIpe1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBvYmplY3QuYXR0X2Fyci5sZW5ndGg7IGkrKykge1xyXG4gICAgICBpZiAodHlwZW9mIGRhdGFbb2JqZWN0LmF0dF9hcnJbaV1dICE9PSBcInVuZGVmaW5lZFwiICYmIGRhdGFbb2JqZWN0LmF0dF9hcnJbaV1dLnRyaW0oKSAhPSBcIlwiKSBcclxuICAgICAgICBjYW5TZW5kID0gdHJ1ZTtcclxuICAgIH1cclxuICB9XHJcbiAgaWYoIHR5cGVvZiBvYmplY3QuaW1nX2FyciAhPSBcInVuZGVmaW5lZFwiKXtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgb2JqZWN0LmltZ19hcnIubGVuZ3RoOyBpKyspIHtcclxuICAgICAgaWYgKHR5cGVvZiBkYXRhW29iamVjdC5pbWdfYXJyW2ldXSAhPT0gXCJ1bmRlZmluZWRcIiAmJiBkYXRhW29iamVjdC5pbWdfYXJyW2ldXS50cmltKCkgIT0gXCJcIikgXHJcbiAgICAgICAgY2FuU2VuZCA9IHRydWU7XHJcbiAgICB9XHJcbiAgfVxyXG4gIHZhciBtYXN0ZXJQYXJhbXMgPSB7XHJcbiAgICBcImFjdGlvblwiOiBhY3Rpb24sXHJcbiAgICBcImF0dF9hcnJcIjogb2JqZWN0LmF0dF9hcnIsXHJcbiAgICBcImltZ19hcnJcIjogb2JqZWN0LmltZ19hcnIsXHJcbiAgICBcIm15RmlsZXNcIjogb2JqZWN0Lm15RmlsZXMsXHJcbiAgICBcImZpbGVzRGVsZXRlZFwiOiBvYmplY3QuZmlsZXNEZWxldGVkLFxyXG4gICAgXCJkYXRhXCI6IGRhdGFcclxuICB9XHJcbiAgaWYgKGFjdGlvbiA9PSBcInNhdmVcIilcclxuICAgIGNhblNlbmQgPSB0cnVlO1xyXG4gIGlmIChjYW5TZW5kKXtcclxuICAgIGNvbnNvbGUubG9nKFwiY2FsbEdldFNhdmVBdHRhY2hlbXRzOm1hc3RlclBhcmFtczpcIiwgbWFzdGVyUGFyYW1zKSBcclxuICAgIG9iamVjdC5EU1BfVVBMT0FEQ29uZmlnID0gbmV3IGNvbXBvbmVudENvbmZpZ0RlZigpXHJcbiAgICBvYmplY3QuRFNQX1VQTE9BRENvbmZpZy5tYXN0ZXJQYXJhbXMgPSBtYXN0ZXJQYXJhbXNcclxuICB9XHJcblxyXG59XHJcbnB1YmxpYyBjYWxsR2V0U2F2ZVdlYkNhbShhY3Rpb246YW55LGRhdGE6YW55LG9iamVjdDphbnkpIHtcclxuICAvL2NvbnNvbGUubG9nKFwiY2FsbFNhdmVBdHRhY2hlbXRzOm15RmlsZXM6XCIsIG9iamVjdC5teUZpbGVzKVxyXG4gIHZhciBtYXN0ZXJQYXJhbXMgPSB7XHJcbiAgICBcImFjdGlvblwiOiBhY3Rpb24sXHJcbiAgICBcImF0dF9hcnJcIjogb2JqZWN0LmF0dF9hcnIsXHJcbiAgICBcImltZ19hcnJcIjogb2JqZWN0LmltZ19hcnIsXHJcbiAgICBcIm15RmlsZXNcIjogb2JqZWN0Lm15RmlsZXMsXHJcbiAgICBcImZpbGVzRGVsZXRlZFwiOiBvYmplY3QuZmlsZXNEZWxldGVkLFxyXG4gICAgXCJkYXRhXCI6IGRhdGFcclxuICB9XHJcblxyXG4gIG9iamVjdC5EU1BfV0VCQ0FNQ29uZmlnID0gbmV3IGNvbXBvbmVudENvbmZpZ0RlZigpXHJcbiAgb2JqZWN0LkRTUF9XRUJDQU1Db25maWcubWFzdGVyUGFyYW1zID0gbWFzdGVyUGFyYW1zXHJcblxyXG59XHJcbmFzeW5jIGF0dF9pbWdfc2F2ZUZvcm1Db21wbGV0ZWRIYW5kbGVyKHZhbHVlOmFueSxvYmplY3Q6YW55KSB7XHJcbiAgLy9jb25zb2xlLmxvZyhcImF0dF9pbWdfc2F2ZUZvcm1Db21wbGV0ZWRIYW5kbGVyOnZhbHVlXCIsIHZhbHVlKTtcclxuICBsZXQgZmllbGRfaWQgPSB2YWx1ZS5maWVsZF9pZDtcclxuICBvYmplY3QubXlGaWxlc1tmaWVsZF9pZF0gPSB2YWx1ZS5teUZpbGVzO1xyXG4gIG9iamVjdC5maWxlc0RlbGV0ZWRbZmllbGRfaWRdID0gdmFsdWUuZmlsZXNEZWxldGVkO1xyXG4gIG9iamVjdC5jYW1JbWFnZSA9IHZhbHVlLmNhbUltYWdlO1xyXG4gIC8vY29uc29sZS5sb2coXCJvYmplY3QubXlGaWxlc1tmaWVsZF9pZF06XCIsIG9iamVjdC5teUZpbGVzW2ZpZWxkX2lkXSlcclxuICBsZXQgSlNPTlZhbCAgPSBKU09OLnN0cmluZ2lmeShvYmplY3QubXlGaWxlc1tmaWVsZF9pZF0pO1xyXG4gIGlmIChKU09OVmFsID09IFwiW11cIilcclxuICAgIEpTT05WYWwgPSBcIlwiO1xyXG4gIG9iamVjdC5mb3JtLmdldFJhd1ZhbHVlKClbZmllbGRfaWRdID0gSlNPTlZhbDtcclxuICBvYmplY3QuZm9ybS5wYXRjaFZhbHVlKHsgW2ZpZWxkX2lkXTogSlNPTlZhbCB9KTtcclxuICBpZiAodHlwZW9mIG9iamVjdC5hdHRfaW1nX3NhdmVGb3JtQ29tcGxldGVkICE9IFwidW5kZWZpbmVkXCIpIHtcclxuICAgIGxldCBOZXdWYWw6YW55ID0gW107XHJcbiAgICBOZXdWYWwucHVzaChmaWVsZF9pZCk7XHJcbiAgICBvYmplY3QuYXR0X2ltZ19zYXZlRm9ybUNvbXBsZXRlZC5hcHBseShvYmplY3QsIE5ld1ZhbCk7XHJcbiAgfVxyXG59XHJcbmFzeW5jIGF0dF9pbWdfc2F2ZUZvcm0yQ29tcGxldGVkSGFuZGxlcih2YWx1ZTphbnksb2JqZWN0OmFueSkge1xyXG4gIGNvbnNvbGUubG9nKFwiYXR0X2ltZ19zYXZlRm9ybUNvbXBsZXRlZEhhbmRsZXI6dmFsdWVcIiwgdmFsdWUpO1xyXG4gIGxldCBmaWVsZF9pZCA9IHZhbHVlLmZpZWxkX2lkO1xyXG4gIG9iamVjdC5teUZpbGVzW2ZpZWxkX2lkXSA9IHZhbHVlLm15RmlsZXM7XHJcbiAgb2JqZWN0LmZpbGVzRGVsZXRlZFtmaWVsZF9pZF0gPSB2YWx1ZS5maWxlc0RlbGV0ZWQ7XHJcbiAgY29uc29sZS5sb2coXCJvYmplY3QubXlGaWxlc1tmaWVsZF9pZF06XCIsIG9iamVjdC5teUZpbGVzW2ZpZWxkX2lkXSlcclxuICBsZXQgSlNPTlZhbCAgPSBKU09OLnN0cmluZ2lmeShvYmplY3QubXlGaWxlc1tmaWVsZF9pZF0pO1xyXG4gIGlmIChKU09OVmFsID09IFwiW11cIilcclxuICAgIEpTT05WYWwgPSBcIlwiO1xyXG4gIG9iamVjdC5mb3JtMi52YWx1ZVtmaWVsZF9pZF0gPSBKU09OVmFsO1xyXG4gIG9iamVjdC5mb3JtMi5wYXRjaFZhbHVlKHsgW2ZpZWxkX2lkXTogSlNPTlZhbCB9KTtcclxuICBpZiAodHlwZW9mIG9iamVjdC5hdHRfaW1nX3NhdmVGb3JtQ29tcGxldGVkICE9IFwidW5kZWZpbmVkXCIpIHtcclxuICAgIGxldCBOZXdWYWw6YW55ID0gW107XHJcbiAgICBOZXdWYWwucHVzaChmaWVsZF9pZCk7XHJcbiAgICBvYmplY3QuYXR0X2ltZ19zYXZlRm9ybUNvbXBsZXRlZC5hcHBseShvYmplY3QsIE5ld1ZhbCk7XHJcbiAgfVxyXG59XHJcbnB1YmxpYyBhdHRfaW1nX3NhdmVHcmlkQ29tcGxldGVkSGFuZGxlcih2YWx1ZTphbnksb2JqZWN0OmFueSkge1xyXG4gIFxyXG4gIC8vY29uc29sZS5sb2coXCJhdHRfaW1nX3NhdmVHcmlkQ29tcGxldGVkSGFuZGxlcjp2YWx1ZVwiLCB2YWx1ZSk7XHJcbiAgbGV0IGZpZWxkX2lkID0gdmFsdWUuZmllbGRfaWQ7XHJcbiAgb2JqZWN0Lm15RmlsZXNbZmllbGRfaWRdID0gdmFsdWUubXlGaWxlcztcclxuICBvYmplY3QuZmlsZXNEZWxldGVkW2ZpZWxkX2lkXSA9IHZhbHVlLmZpbGVzRGVsZXRlZDtcclxuICAvL2NvbnNvbGUubG9nKFwiY2hlY2tpbmc6MjpvYmplY3QubXlGaWxlc1tmaWVsZF9pZF06XCIsIEpTT04uc3RyaW5naWZ5KG9iamVjdC5teUZpbGVzW2ZpZWxkX2lkXSkgKVxyXG4gIGxldCBKU09OVmFsICA9IEpTT04uc3RyaW5naWZ5KG9iamVjdC5teUZpbGVzW2ZpZWxkX2lkXSk7XHJcbiAgaWYgKEpTT05WYWwgPT0gXCJbXVwiKVxyXG4gICAgSlNPTlZhbCA9IFwiXCI7XHJcbiAgb2JqZWN0LmZvcm1Hcm91cC5wYXRjaFZhbHVlKHsgW2ZpZWxkX2lkXTogSlNPTlZhbCB9KTtcclxuICBvYmplY3QuZm9ybUdyb3VwLm1hcmtBc0RpcnR5KCk7XHJcbiAgLy9jb25zb2xlLmxvZyhcImF0dF9pbWdfc2F2ZUdyaWRDb21wbGV0ZWRIYW5kbGVyOm9iamVjdC5mb3JtR3JvdXAudmFsdWVcIiwgb2JqZWN0LmZvcm1Hcm91cC52YWx1ZSk7XHJcbiAgb2JqZWN0LnVwbG9hZGltYWdlPWZhbHNlO1xyXG59XHJcbnB1YmxpYyBhc3luYyBhdHRfaW1nX2dyaWRfb3BlblVwbG9hZGltYWdlKGZpZWxkX2lkOmFueSxvYmplY3Q6YW55KSB7XHJcbiAgaWYgKCFvYmplY3QuY29tcG9uZW50Q29uZmlnLmVuYWJsZWQpIHJldHVybjtcclxuICBhd2FpdCBvYmplY3Quc3RhclNlcnZpY2VzLnNsZWVwKDMwMCk7XHJcbiAgLy9jb25zb2xlLmxvZyhcImF0dF9pbWdfZ3JpZF9vcGVuVXBsb2FkaW1hZ2U6b2JqZWN0LmZvcm1Hcm91cDpcIiwgb2JqZWN0LmZvcm1Hcm91cClcclxuICBvYmplY3QudXBsb2FkaW1hZ2UgPSB0cnVlO1xyXG4gIGlmICh0eXBlb2Ygb2JqZWN0LmZvcm1Hcm91cCAhPSBcInVuZGVmaW5lZFwiKSB7XHJcbiAgICBvYmplY3QubXlGaWxlc1tmaWVsZF9pZF0gPVtdO1xyXG4gICAgb2JqZWN0LnN0YXJTZXJ2aWNlcy5hdHRfaW1nX3BvcHVsYXRlQXJycyhvYmplY3QuZm9ybUdyb3VwLnZhbHVlLG9iamVjdCk7XHJcbiAgICAvL2NvbnNvbGUubG9nKFwib3BlblVwbG9hZGltYWdlOmZpZWxkX2lkOlwiLCBmaWVsZF9pZCwgb2JqZWN0Lm15RmlsZXMsIG9iamVjdC5teUZpbGVzW2ZpZWxkX2lkXSlcclxuICAgIGxldCBteUZpbGVzID0gW107XHJcbiAgICBpZiAodHlwZW9mIG9iamVjdC5teUZpbGVzW2ZpZWxkX2lkXSAhPSBcInVuZGVmaW5lZFwiKSB7XHJcbiAgICAgIG15RmlsZXMgPSBvYmplY3QubXlGaWxlc1tmaWVsZF9pZF07XHJcbiAgICB9XHJcbiAgICBsZXQgZmlsZXNEZWxldGVkID0gW107XHJcbiAgICBpZiAodHlwZW9mIG9iamVjdC5maWxlc0RlbGV0ZWRbZmllbGRfaWRdICE9IFwidW5kZWZpbmVkXCIpIHtcclxuICAgICAgZmlsZXNEZWxldGVkID0gb2JqZWN0LmZpbGVzRGVsZXRlZFtmaWVsZF9pZF07XHJcbiAgICB9XHJcbiAgbGV0IGhpZGVPdGhlcnMgPSBmYWxzZTtcclxuICBpZiAodHlwZW9mIG9iamVjdC5kaXNhYmxlVXBsb2FkICE9IFwidW5kZWZpbmVkXCIpIHtcclxuICAgIGhpZGVPdGhlcnMgPSBvYmplY3QuZGlzYWJsZVVwbG9hZDtcclxuICB9XHJcbiAgICBsZXQgaW1hZ2VJRCA9IGZpZWxkX2lkO1xyXG4gICAgdmFyIG1hc3RlclBhcmFtcyA9IHtcclxuICAgICAgXCJhY3Rpb25cIjogXCJ1cGxvYWRcIixcclxuICAgICAgXCJpbWFnZUlEXCI6IGltYWdlSUQsXHJcbiAgICAgIFwibXlGaWxlc1wiOiBteUZpbGVzLFxyXG4gICAgICBcImZpbGVzRGVsZXRlZFwiOiBmaWxlc0RlbGV0ZWQsXHJcbiAgICAgICBcImhpZGVPdGhlcnNcIiA6IGhpZGVPdGhlcnNcclxuICAgIH1cclxuXHJcbiAgICBvYmplY3QuRFNQX1VQTE9BRENvbmZpZyA9IG5ldyBjb21wb25lbnRDb25maWdEZWYoKVxyXG4gICAgb2JqZWN0LkRTUF9VUExPQURDb25maWcubWFzdGVyUGFyYW1zID0gbWFzdGVyUGFyYW1zXHJcbiAgfVxyXG59XHJcbnB1YmxpYyBhc3luYyBhdHRfd2ViY2FtX2dyaWRfb3BlblVwbG9hZGltYWdlKGZpZWxkX2lkOmFueSxvYmplY3Q6YW55KSB7XHJcbiAgaWYgKCFvYmplY3QuY29tcG9uZW50Q29uZmlnLmVuYWJsZWQpIHJldHVybjtcclxuICBhd2FpdCBvYmplY3Quc3RhclNlcnZpY2VzLnNsZWVwKDMwMCk7XHJcbiAgLy9jb25zb2xlLmxvZyhcImF0dF93ZWJjYW1fZ3JpZF9vcGVuVXBsb2FkaW1hZ2U6b2JqZWN0LmZvcm1Hcm91cDpcIiwgb2JqZWN0LmZvcm1Hcm91cClcclxuICBvYmplY3QudXBsb2FkaW1hZ2UgPSB0cnVlO1xyXG4gIGlmICh0eXBlb2Ygb2JqZWN0LmZvcm1Hcm91cCAhPSBcInVuZGVmaW5lZFwiKSB7XHJcbiAgICBvYmplY3QubXlGaWxlc1tmaWVsZF9pZF0gPVtdO1xyXG4gICAgb2JqZWN0LnN0YXJTZXJ2aWNlcy5hdHRfaW1nX3BvcHVsYXRlQXJycyhvYmplY3QuZm9ybUdyb3VwLnZhbHVlLG9iamVjdCk7XHJcbiAgICAvL2NvbnNvbGUubG9nKFwib3BlblVwbG9hZGltYWdlOmZpZWxkX2lkOlwiLCBmaWVsZF9pZCwgb2JqZWN0Lm15RmlsZXMsIG9iamVjdC5teUZpbGVzW2ZpZWxkX2lkXSlcclxuICAgIGxldCBteUZpbGVzID0gW107XHJcbiAgICBpZiAodHlwZW9mIG9iamVjdC5teUZpbGVzW2ZpZWxkX2lkXSAhPSBcInVuZGVmaW5lZFwiKSB7XHJcbiAgICAgIG15RmlsZXMgPSBvYmplY3QubXlGaWxlc1tmaWVsZF9pZF07XHJcbiAgICB9XHJcbiAgICBsZXQgZmlsZXNEZWxldGVkID0gW107XHJcbiAgICBpZiAodHlwZW9mIG9iamVjdC5maWxlc0RlbGV0ZWRbZmllbGRfaWRdICE9IFwidW5kZWZpbmVkXCIpIHtcclxuICAgICAgZmlsZXNEZWxldGVkID0gb2JqZWN0LmZpbGVzRGVsZXRlZFtmaWVsZF9pZF07XHJcbiAgICB9XHJcblxyXG4gICAgbGV0IGltYWdlSUQgPSBmaWVsZF9pZDtcclxuICAgIHZhciBtYXN0ZXJQYXJhbXMgPSB7XHJcbiAgICAgIFwiYWN0aW9uXCI6IFwidXBsb2FkXCIsXHJcbiAgICAgIFwiaW1hZ2VJRFwiOiBpbWFnZUlELFxyXG4gICAgICBcIm15RmlsZXNcIjogbXlGaWxlcyxcclxuICAgICAgXCJmaWxlc0RlbGV0ZWRcIjogZmlsZXNEZWxldGVkXHJcbiAgICB9XHJcblxyXG4gICAgb2JqZWN0LkRTUF9XRUJDQU1Db25maWcgPSBuZXcgY29tcG9uZW50Q29uZmlnRGVmKClcclxuICAgIG9iamVjdC5EU1BfV0VCQ0FNQ29uZmlnLm1hc3RlclBhcmFtcyA9IG1hc3RlclBhcmFtc1xyXG4gIH1cclxufVxyXG5wdWJsaWMgYWRkTmV3Q29kZShvYmplY3Q6YW55LCBDT0RFTkFNRTphbnkpOiB2b2lkIHtcclxuICBvYmplY3QuZ3JpZF9zb21fdGFic19jb2RlcyA9IG5ldyB0YWJzQ29kZXMoKTtcclxuICBvYmplY3QuZ3JpZF9zb21fdGFic19jb2Rlc1snQ09ERU5BTUUnXSA9IENPREVOQU1FOyAvLyBmb3IgcmV0cmlldmUgZGF0YVxyXG4gIFxyXG4gIFxyXG4gIG9iamVjdC5TT01fVEFCU19DT0RFU0NvbmZpZyA9ICBuZXcgY29tcG9uZW50Q29uZmlnRGVmKCk7XHJcbiAgbGV0IG1hc3RlclBhcmFtcyA9IHtcclxuICAgIGFjdGlvbjogXCJBRERcIixcclxuICAgIENPREVOQU1FOkNPREVOQU1FLFxyXG4gICAgQ09ERTpvYmplY3QuZmlsdGVyQ29kZSxcclxuICAgIENPREVURVhUX0xBTkcgOiBvYmplY3QuZmlsdGVyQ29kZVxyXG4gIH1cclxuICBvYmplY3QuU09NX1RBQlNfQ09ERVNDb25maWcubWFzdGVyUGFyYW1zID0gbWFzdGVyUGFyYW1zOyAvLyBGb3IgYWRkIG5ldyByZWNvcmRcclxuICBvYmplY3Quc2hvd0NvZGVEZXRhaWxzPXRydWU7XHJcbn1cclxuXHJcbnB1YmxpYyBzZXRJZE9yZGVyKG9iamVjdCxpZEZpZWxkLCBvcmRlckZpZWxkKXtcclxuICBsZXQgSUQgPSAxO1xyXG4gIGxldCBPUkRFUiA9IDE7XHJcblxyXG4gIGxldCBHcmlkRGF0YTphbnkgPSBvYmplY3QuZ3JpZC5kYXRhO1xyXG4gIGlmICh0eXBlb2YgR3JpZERhdGEuZGF0YSAhPT0gXCJ1bmRlZmluZWRcIil7XHJcbiAgICBmb3IgKGxldCBpPTA7IGkgPCBHcmlkRGF0YS5kYXRhLmxlbmd0aCA7IGkrKyl7XHJcbiAgICAgIGlmIChHcmlkRGF0YS5kYXRhW2ldW2lkRmllbGRdID49IElEKVxyXG4gICAgICAgIElEID0gcGFyc2VJbnQoIEdyaWREYXRhLmRhdGFbaV1baWRGaWVsZF0pICsgMTtcclxuICAgICAgaWYgKEdyaWREYXRhLmRhdGFbaV1bb3JkZXJGaWVsZF0gPj0gT1JERVIpXHJcbiAgICAgICAgT1JERVIgPSBwYXJzZUludChHcmlkRGF0YS5kYXRhW2ldW29yZGVyRmllbGRdICkgKyAxO1xyXG4gICAgfVxyXG4gIH1cclxuICBsZXQgdmFsdWVzID0ge1xyXG4gICAgW2lkRmllbGRdOiBJRCxcclxuICAgIFtvcmRlckZpZWxkXTogT1JERVJcclxuICB9XHJcbiAgY29uc29sZS5sb2coXCJzZXRJbml0aWFsVmFsdWVzOnZhbHVlczpcIix2YWx1ZXMgKVxyXG4gIG9iamVjdC5mb3JtR3JvdXAucGF0Y2hWYWx1ZSh2YWx1ZXMpXHJcbn1cclxucHVibGljIHJvd1Jlb3JkZXIob2JqZWN0LCBvcmRlckZpZWxkLCBlKXtcclxuICBpZiAob2JqZWN0LnBhcmFtQ29uZmlnLkRFQlVHX0ZMQUcpIGNvbnNvbGUubG9nIChcInJvd1Jlb3JkZXI6XCIsIGUpO1xyXG4gIGlmIChvYmplY3QucGFyYW1Db25maWcuREVCVUdfRkxBRykgY29uc29sZS5sb2cgKFwicm93UmVvcmRlcjpcIiwgZS5kcmFnZ2VkUm93c1swXS5yb3dJbmRleClcclxuICAgIGlmIChvYmplY3QucGFyYW1Db25maWcuREVCVUdfRkxBRykgY29uc29sZS5sb2cgKFwicm93UmVvcmRlcjpcIiwgZS5kcm9wUG9zaXRpb24pO1xyXG4gIGlmIChvYmplY3QucGFyYW1Db25maWcuREVCVUdfRkxBRykgY29uc29sZS5sb2cgKFwicm93UmVvcmRlcjpcIiwgZS5kcm9wVGFyZ2V0Um93LnJvd0luZGV4KVxyXG4gIGxldCBkYXRhSXRlbSA9IGUuZHJhZ2dlZFJvd3NbMF0uZGF0YUl0ZW07XHJcbiAgbGV0IEdyaWREYXRhO1xyXG4gIEdyaWREYXRhID0gIG9iamVjdC5ncmlkLmRhdGE7XHJcblxyXG4gIGlmIChlLmRyb3BQb3NpdGlvbiA9PSBcImFmdGVyXCIpe1xyXG4gICAgR3JpZERhdGEuZGF0YS5zcGxpY2UoZS5kcm9wVGFyZ2V0Um93LnJvd0luZGV4KzEsIDAsIGRhdGFJdGVtKTtcclxuICAgIC8vUmVtb3ZlIGRyYWdnZWRSb3dzXHJcbiAgICBHcmlkRGF0YS5kYXRhID0gR3JpZERhdGEuZGF0YS5maWx0ZXIoZnVuY3Rpb24gKGRhdGFJdGVtLCBpbmRleCkge1xyXG4gICAgICByZXR1cm4gaW5kZXggIT09IGUuZHJhZ2dlZFJvd3NbMF0ucm93SW5kZXg7XHJcbiAgICB9KTtcclxuICB9XHJcbiAgZWxzZVxyXG4gIGlmIChlLmRyb3BQb3NpdGlvbiA9PSBcImJlZm9yZVwiKXtcclxuICAgICAvL1JlbW92ZSBkcmFnZ2VkUm93c1xyXG4gICAgR3JpZERhdGEuZGF0YSA9IEdyaWREYXRhLmRhdGEuZmlsdGVyKGZ1bmN0aW9uIChkYXRhSXRlbSwgaW5kZXgpIHtcclxuICAgICAgcmV0dXJuIGluZGV4ICE9PSBlLmRyYWdnZWRSb3dzWzBdLnJvd0luZGV4O1xyXG4gICAgfSk7XHJcbiAgICBHcmlkRGF0YS5kYXRhLnNwbGljZShlLmRyb3BUYXJnZXRSb3cucm93SW5kZXgsIDAsIGRhdGFJdGVtKTtcclxuICB9XHJcbiAvL3dyaXRlIG9yZGVyIGZpZWxkXHJcbiBpZiAob2JqZWN0LnBhcmFtQ29uZmlnLkRFQlVHX0ZMQUcpIGNvbnNvbGUubG9nKFwicm93UmVvcmRlcjpHcmlkRGF0YS5kYXRhOlwiLEdyaWREYXRhLmRhdGEpO1xyXG4gZm9yIChsZXQgaT0wOyBpIDwgR3JpZERhdGEuZGF0YS5sZW5ndGg7aSsrKXtcclxuICAgR3JpZERhdGEuZGF0YVtpXVtvcmRlckZpZWxkXT0gaSArIDE7XHJcbiAgIEdyaWREYXRhLmRhdGFbaV0uX1FVRVJZID0gb2JqZWN0LnVwZGF0ZUNNRDtcclxuIH1cclxuIG9iamVjdC5zYXZlQ2hhbmdlcyhvYmplY3QuZ3JpZCk7XHJcbn1cclxuXHJcbnB1YmxpYyBoYW5kbGVGaWx0ZXJDb2RlKG9iamVjdDphbnksQ09ERTphbnkpIHtcclxuICBpZiAob2JqZWN0LnN0YXJTZXJ2aWNlcy5zZXNzaW9uUGFyYW1zLlVTRVJfSU5GTy5HUk9VUE5BTUUgPT0gXCJTWVNBRE1cIil7XHJcbiAgICBvYmplY3QuZmlsdGVyQ29kZSA9IENPREU7XHJcbiAgfVxyXG4gfVxyXG4gcmVtb3ZlTm9uVmFsaWRDb2x1bW5zKGNvbXAsSW5pdGlhbFZhbHVlcyl7XHJcbiAgICAgY29uc29sZS5sb2coXCJyZW1vdmVOb25WYWxpZEdyaWRDb2x1bW5zOlwiLCBjb21wLCBJbml0aWFsVmFsdWVzKVxyXG4gICAgIGxldCBLZXlzID0gT2JqZWN0LmtleXMoY29tcCk7XHJcbiBcclxuICAgICBmb3IgKGxldCBqID0wOyBqPCBLZXlzLmxlbmd0aDtqKyspe1xyXG4gICAgICAgbGV0IGZpZWxkID0gS2V5c1tqXTtcclxuICAgICAgIGxldCBleGlzdHMgPSBJbml0aWFsVmFsdWVzW2ZpZWxkXVxyXG4gICAgICAgY29uc29sZS5sb2coXCJyZW1vdmVOb25WYWxpZEdyaWRDb2x1bW5zOlwiLCBmaWVsZCwgZXhpc3RzKVxyXG4gICAgICAgaWYgKHR5cGVvZiBleGlzdHMgPT0gXCJ1bmRlZmluZWRcIil7XHJcbiAgICAgICAgIGRlbGV0ZSBjb21wW2ZpZWxkXTtcclxuICAgICAgIH1cclxuICAgICB9XHJcbiAgIH1cclxuIHB1YmxpYyBmb3JtYXR0aGlzRGF0ZShkYXRlMSwgRGF0ZUZvcm1hdCxkYXRlTG9jYWxlKVxyXG57XHJcbiAgaWYgKChkYXRlMSAhPSBcIlwiKSAmJiAodHlwZW9mIGRhdGUxICE9IFwidW5kZWZpbmVkXCIpKVxyXG4gICAgcmV0dXJuIChmb3JtYXREYXRlKGRhdGUxLCBEYXRlRm9ybWF0LGRhdGVMb2NhbGUpKTtcclxuICBlbHNlXHJcbiAgICByZXR1cm4gbnVsbDtcclxufVxyXG4gcHVibGljIGVuY3J5cHRTZWNyZXRLZXk9XCJBcHBHZW5AU3RhcjEyMzRcIjtcclxuIGVuY3J5cHREYXRhKGRhdGEpIHtcclxuXHJcbiB0cnkge1xyXG4gICByZXR1cm4gQ3J5cHRvSlMuQUVTLmVuY3J5cHQoSlNPTi5zdHJpbmdpZnkoZGF0YSksIHRoaXMuZW5jcnlwdFNlY3JldEtleSkudG9TdHJpbmcoKTtcclxuIH0gY2F0Y2ggKGUpIHtcclxuICAgY29uc29sZS5sb2coZSk7XHJcbiB9XHJcbn1cclxucHVibGljIGRlY3J5cHREYXRhKGRhdGEpIHtcclxuXHJcbiB0cnkge1xyXG4gICBjb25zdCBieXRlcyA9IENyeXB0b0pTLkFFUy5kZWNyeXB0KGRhdGEsIHRoaXMuZW5jcnlwdFNlY3JldEtleSk7XHJcbiAgIGlmIChieXRlcy50b1N0cmluZygpKSB7XHJcbiAgICAgcmV0dXJuIEpTT04ucGFyc2UoYnl0ZXMudG9TdHJpbmcoQ3J5cHRvSlMuZW5jLlV0ZjgpKTtcclxuICAgfVxyXG4gICByZXR1cm4gZGF0YTtcclxuIH0gY2F0Y2ggKGUpIHtcclxuICAgY29uc29sZS5sb2coZSk7XHJcbiB9XHJcbn1cclxucHVibGljICBwYXJzZUNvb2tpZXMgPSAoY29va2llU3RyKSA9PlxyXG4gIGNvb2tpZVN0ci5zcGxpdChcIjtcIilcclxuICAgIC5tYXAoc3RyID0+IHN0ci50cmltKCkuc3BsaXQoLz0oLispLykpXHJcbiAgICAucmVkdWNlKChhY2MsIGN1cnIpID0+IHtcclxuICAgICAgICBhY2NbY3VyclswXV0gPSBjdXJyWzFdO1xyXG4gICAgICAgIHJldHVybiBhY2M7XHJcbiAgICB9LCB7fSlcclxucHVibGljIGRhdGFFeGl0cyhvYmplY3QpIHtcclxuICAgIGxldCBzdGF0dXMgPSBmYWxzZTtcclxuICAgIGlmICh0eXBlb2YgKG9iamVjdC5leGVjdXRlUXVlcnlyZXN1bHQpICE9IFwidW5kZWZpbmVkXCIpIHtcclxuICAgICAgaWYgKG9iamVjdC5leGVjdXRlUXVlcnlyZXN1bHQuZGF0YSkge1xyXG4gICAgICAgIHN0YXR1cyA9IHRydWU7XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIHN0YXR1cztcclxuXHJcbiAgICB9XHJcbiAgfVxyXG5wdWJsaWMgaGlkZU5vVmFsaWRMaWNlbnNlKClcclxuIHtcclxuICAgICBjb25zdCBjb2xsZWN0aW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJkaXZcIik7IFxyXG4gICAgIC8vY29uc29sZS5sb2cgKFwiY2hlY2tpbmc6Y29sbGVjdGlvbjpcIixjb2xsZWN0aW9uKTtcclxuICAgICBmb3IgKGxldCBpPTA7aTxjb2xsZWN0aW9uLmxlbmd0aDtpKyspe1xyXG4gICAgICAgbGV0IGlubmVySFRNTDphbnkgPSBjb2xsZWN0aW9uW2ldLmlubmVySFRNTDtcclxuICAgICAgIC8vY29uc29sZS5sb2cgKFwiY2hlY2tpbmc6aW5uZXJIVE1MOlwiLGlubmVySFRNTCk7XHJcbiAgICAgICAvL2xldCByZXN1bHQgPSBpbm5lckhUTUwuaW5jbHVkZXMoXCJuZy1yZWZsZWN0LW5nLXN0eWxlXCIpO1xyXG4gICAgICAgLy9sZXQgcmVzdWx0ID0gaW5uZXJIVE1MLmluY2x1ZGVzKFwiZGlzcGxheTogZmxleDtcIik7XHJcbiAgICAgICBsZXQgcmVzdWx0ID0gaW5uZXJIVE1MLmluY2x1ZGVzKFwiQSBsaWNlbnNlIGtleSBpcyByZXF1aXJlZFwiKTtcclxuICAgICAgIC8vY29uc29sZS5sb2cgKFwiY2hlY2tpbmc6cmVzdWx0OlwiLGksIHJlc3VsdCk7XHJcbiAgICAgICBpZiAocmVzdWx0KXtcclxuICAgICAgICAgcmVzdWx0ID0gaW5uZXJIVE1MLmluY2x1ZGVzKFwiTGljZW5zZSBrZXkgbWlzc2luZ1wiKTtcclxuICAgICAgICAgaWYgKHJlc3VsdCl7XHJcbiAgICAgICAgICAgLy9jb25zb2xlLmxvZyAoXCJjaGVja2luZzppbm5lckhUTUw6XCIscmVzdWx0LGlubmVySFRNTCk7XHJcbiAgICAgICAgICAgY29sbGVjdGlvbltpXS5zdHlsZS5zZXRQcm9wZXJ0eSgnZGlzcGxheScsICdub25lJyk7XHJcbiAgICAgICAgICAgfVxyXG4gXHJcbiAgICAgICB9XHJcbiAgICAgICBcclxuICAgICB9XHJcbiAgICAgLy9jb25zb2xlLmxvZyAoXCJjb2xsZWN0aW9uOlwiLCBjb2xsZWN0aW9uLmxlbmd0aCwgY29sbGVjdGlvblszNV0pXHJcbiB9XHJcbiBcclxuICBhc3luYyAgc2hvd011bHRpU3RlcEZvcm0ob2JqZWN0LCB0ZW1wbGF0ZU5hbWUpIHtcclxuICAgICBsZXQgQm9keSA9IFtdO1xyXG4gICAgIGxldCB0ZW1wbGF0ZUluZm86YW55O1xyXG4gICAgIHZhciBuZXdWYWw6YW55ID0geyBcIl9RVUVSWVwiOiBcIkdFVF9EU1BfVEVNUExBVEVcIiwgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJURU1QTEFURV9OQU1FXCI6IHRlbXBsYXRlTmFtZSB9O1xyXG4gICAgIEJvZHkucHVzaChuZXdWYWwpO1xyXG4gICAgIG5ld1ZhbCA9IHsgXCJfUVVFUllcIjogXCJHRVRfRFNQX1RFTVBMQVRFX0RFVEFJTFwiLCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlRFTVBMQVRFX05BTUVcIjogdGVtcGxhdGVOYW1lLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJTRVFVRU5DRV9OQU1FXCI6IFwiJVwifTtcclxuICAgICAgQm9keS5wdXNoKG5ld1ZhbCk7XHJcbiAgICAgIGxldCBkYXRhID0gYXdhaXQgdGhpcy5leGVjU1FMQm9keSh0aGlzLCBCb2R5LCBcIlwiKTtcclxuICAgICBpZiAodHlwZW9mIGRhdGEgIT0gXCJ1bmRlZmluZWRcIiAmJiBkYXRhWzBdLmRhdGEubGVuZ3RoID4gMCkge1xyXG4gICAgICAgdGhpcy5Cb2R5ID0gW107XHJcbiAgICAgICB0ZW1wbGF0ZUluZm8gPSBkYXRhWzBdLmRhdGFbMF07XHJcbiAgICAgICBsZXQgdGVtcGxhdGVEZXRhaWwgPSBkYXRhWzFdLmRhdGFbMF07XHJcbiBcclxuXHJcbiAgICAgICAvL2lmICgodGhpcy5hZGRGb3JtLnZhbHVlLk9SREVSX0ZJRUxEUyA9PSBcIlwiKSB8fCAodGhpcy5hZGRGb3JtLnZhbHVlLk9SREVSX0ZJRUxEUyA9PSBudWxsKSkge1xyXG4gICAgICAgLy8gIHRoaXMuYWRkRm9ybS52YWx1ZS5PUkRFUl9GSUVMRFMgPSBcInt9XCI7XHJcbiAgICAgICAvL31cclxuIFxyXG4gICAgICAgXHJcbiAgICAgICB2YXIgZm9ybVBhZ2VzTm8gPSB0ZW1wbGF0ZURldGFpbC5GT1JNX1BBR0VTX05PO1xyXG4gICAgICAgb2JqZWN0LmZvcm1NYXN0ZXJQYXJhbXMgPSB7XHJcbiAgICAgICAgIFwiZm9ybU5hbWVcIjogdGVtcGxhdGVJbmZvLkZPUk1fTkFNRSxcclxuICAgICAgICAgXCJmb3JtUGFnZXNOb1wiOiBmb3JtUGFnZXNObyxcclxuICAgICAgICAgLy9cIm9yZGVyRmllbGRzXCI6IHRoaXMuYWRkRm9ybS52YWx1ZS5PUkRFUl9GSUVMRFMsXHJcbiAgICAgICAgIFwib3JkZXJGaWVsZHNcIjogXCJ7fVwiLFxyXG4gICAgICAgICAvL1wiYWRkRm9ybVwiOiB0aGlzLmFkZEZvcm0udmFsdWUsXHJcbiAgICAgICAgIFwiYWRkRm9ybVwiOnRlbXBsYXRlSW5mbyxcclxuICAgICAgICAgXCJjYWxsaW5nRm9ybVwiOiBcIlBSVk9SREVSQURcIixcclxuICAgICAgIH07XHJcbiBcclxuICAgICAgIGNvbnNvbGUubG9nKFwidGVtcGxhdGVJbmZvOlwiLCB0ZW1wbGF0ZUluZm8sIFwiYG9iamV0YC5mb3JtTWFzdGVyUGFyYW1zOlwiLG9iamVjdC5mb3JtTWFzdGVyUGFyYW1zKVxyXG5cclxuICAgICAgICAgb2JqZWN0LnNob3dDYWxsU2NyZWVuID0gdHJ1ZTtcclxuICAgICAgICAgXHJcbiAgICAgfVxyXG4gICAgb2JqZWN0LnRlbXBsYXRlSW5mbyA9IHRlbXBsYXRlSW5mbztcclxuICAgIHJldHVybiB0ZW1wbGF0ZUluZm87XHJcbiAgIH1cclxuICAgYXN5bmMgIGNhbGxTY3JlZW4ob2JqZWN0LCB0ZW1wbGF0ZUluZm8pe1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiY2FsbFNjcmVlbiAtIHRlbXBsYXRlSW5mbzpcIiwgdGVtcGxhdGVJbmZvLCBcInRoaXMuZm9ybU1hc3RlclBhcmFtczpcIixvYmplY3QuZm9ybU1hc3RlclBhcmFtcylcclxuICAgICAgICAgIGxldCBCb2R5ID0gW107XHJcbiAgICAgICAgICB2YXIgbmV3VmFsOmFueSA9IHsgXCJfUVVFUllcIjogXCJHRVRfTUVOVVNfUVVFUllcIiwgXHJcbiAgICAgICAgICAgICBcIl9XSEVSRVwiOiBcIkNIT0lDRSAgPSAnXCIgKyB0ZW1wbGF0ZUluZm8uRk9STV9OQU1FICsgXCInXCIgfTtcclxuICAgICAgICAgIEJvZHkucHVzaChuZXdWYWwpO1xyXG4gICAgICAgICAgY29uc29sZS5sb2coXCJjYWxsU2NyZWVuIC0gQm9keTpcIiwgQm9keSlcclxuICAgICAgICAgIGxldCBkYXRhID0gYXdhaXQgdGhpcy5leGVjU1FMQm9keSh0aGlzLCBCb2R5LCBcIlwiKTtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKFwiY2FsbFNjcmVlbiAtIGRhdGE6XCIsIGRhdGEpXHJcbiAgICAgICAgICBpZiAodHlwZW9mIGRhdGEgIT0gXCJ1bmRlZmluZWRcIiAmJiBkYXRhWzBdLmRhdGEubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICB2YXIgbWVudSA9IGRhdGFbMF0uZGF0YVswXTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJjYWxsU2NyZWVuIC0gbWVudTpcIiwgbWVudSlcclxuICAgICAgICAgICAgbGV0IGNvbXBTZWxlY3RvciA9IG1lbnUuRkxFWF9GTEQxO1xyXG4gICAgICAgICAgICBvYmplY3QuY2hpbGRyZW4gPSBbXTtcclxuICAgICAgICAgICAgb2JqZWN0LmNoaWxkcmVuLnB1c2goY29tcFNlbGVjdG9yKTtcclxuICAgICAgICBvYmplY3QuY29tbW9uQ2FsbFN0YXJOb3RpZnkob2JqZWN0LmZvcm1NYXN0ZXJQYXJhbXMpO1xyXG4gICAgICB9XHJcbiAgICAgIG9iamVjdC5yb3V0ZXIubmF2aWdhdGUoWycvJyArdGVtcGxhdGVJbmZvLkZPUk1fTkFNRV0sIFxyXG4gICAgICAgIHsgc2tpcExvY2F0aW9uQ2hhbmdlOiB0cnVlLCByZXBsYWNlVXJsOiBmYWxzZSwgcHJlc2VydmVGcmFnbWVudDogdHJ1ZSB9KTtcclxuICB9XHJcbiAgICAgcHVibGljIGdldEludmFsaWRDb250cm9scyhvYmplY3QpIHtcclxuICAgIC8vY29uc29sZS5sb2cgKFwiZ2V0SW52YWxpZENvbnRyb2xzOlwiLCAgIG9iamVjdC5mb3JtLmludmFsaWQsIG9iamVjdC5mb3JtLmNvbnRyb2xzKVxyXG4gICAgY29uc3QgaW52YWxpZCA9IFtdO1xyXG4gICAgY29uc3QgY29udHJvbHMgPSBvYmplY3QuZm9ybS5jb250cm9scztcclxuICAgIGZvciAobGV0IG5hbWUgaW4gY29udHJvbHMpIHtcclxuICAgICAgICBpZiAoY29udHJvbHNbbmFtZV0uaW52YWxpZCkge1xyXG4gICAgICAgICAgIGlmICh0eXBlb2Ygb2JqZWN0LmNvbXBUaXRsZU1zZyAhPSBcInVuZGVmaW5lZFwiKXtcclxuICAgICAgICAgICAgICBuYW1lID0gdGhpcy5nZXROTFMoW10sb2JqZWN0LmNvbXBUaXRsZU1zZyArIFwiLlwiICsgbmFtZSxuYW1lKVxyXG4gICAgICAgICAgIH1cclxuICAgICAgICAgICAgaW52YWxpZC5wdXNoKG5hbWUpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgXHJcbiAgICAgdGhpcy5zaG93Tm90aWZpY2F0aW9uKFwiZXJyb3JcIiwgdGhpcy5nZXROTFMoW2ludmFsaWQudG9TdHJpbmcoKV0sXHJcbiAgICAnTk9fVkFMSURfREFUQV9GT1InLCdObyB2YWxpZCBkYXRhIGZvciA6ICAjIyAnKSk7XHJcbiAgICBsZXQgTXNnID0gdGhpcy5nZXROTFMoW2ludmFsaWQudG9TdHJpbmcoKV0sICdOT19WQUxJRF9EQVRBX0ZPUicsJ05vIHZhbGlkIGRhdGEgZm9yIDogICMjICcpO1xyXG4gICAgXHJcbiAgICB2YXIgZGlhbG9nU3RydWMgPSB7XHJcbiAgICAgIG1zZzogTXNnLFxyXG4gICAgICB0aXRsZTogXCJFcnJvclwiLFxyXG4gICAgICBpbmZvOiBudWxsLFxyXG4gICAgICBvYmplY3Q6IHRoaXMsXHJcbiAgICAgIGFjdGlvbjogdGhpcy5Pa0FjdGlvbnMsXHJcbiAgICAgIGNhbGxiYWNrOiBudWxsXHJcbiAgICB9O1xyXG4gICAgdGhpcy5zaG93Q29uZmlybWF0aW9uKGRpYWxvZ1N0cnVjKTtcclxuICAgIHJldHVybiBpbnZhbGlkO1xyXG59XHJcbmNvbnZlcnRTdmdUb0tlbmRvSWNvbihvYmplY3QsIHN2Z0NvbnRlbnQ6IHN0cmluZywgaWNvbk5hbWU6IHN0cmluZywgY29sdW1uKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIC8vIEV4dHJhY3Qgdmlld0JveFxyXG4gICAgICAgIGNvbnN0IHZpZXdCb3hNYXRjaCA9IHN2Z0NvbnRlbnQubWF0Y2goL3ZpZXdCb3g9XCIoW15cIl0rKVwiLyk7XHJcbiAgICAgICAgY29uc3Qgdmlld0JveCA9IHZpZXdCb3hNYXRjaCA/IHZpZXdCb3hNYXRjaFsxXSA6ICcwIDAgMjQgMjQnO1xyXG5cclxuICAgICAgICAvLyBQYXJzZSB2aWV3Qm94IHZhbHVlc1xyXG4gICAgICAgIGNvbnN0IHZpZXdCb3hWYWx1ZXMgPSB2aWV3Qm94LnNwbGl0KCcgJykubWFwKE51bWJlcik7XHJcbiAgICAgICAgY29uc3QgW21pblgsIG1pblksIHZpZXdCb3hXaWR0aCwgdmlld0JveEhlaWdodF0gPSB2aWV3Qm94VmFsdWVzO1xyXG5cclxuICAgICAgICAvLyBFeHRyYWN0IHdpZHRoIGFuZCBoZWlnaHQgaWYgc3BlY2lmaWVkXHJcbiAgICAgICAgY29uc3Qgd2lkdGhNYXRjaCA9IHN2Z0NvbnRlbnQubWF0Y2goL3dpZHRoPVwiKFteXCJdKylcIi8pO1xyXG4gICAgICAgIGNvbnN0IGhlaWdodE1hdGNoID0gc3ZnQ29udGVudC5tYXRjaCgvaGVpZ2h0PVwiKFteXCJdKylcIi8pO1xyXG4gICAgICAgIGNvbnN0IHN2Z1dpZHRoID0gd2lkdGhNYXRjaCA/IHBhcnNlRmxvYXQod2lkdGhNYXRjaFsxXSkgOiB2aWV3Qm94V2lkdGg7XHJcbiAgICAgICAgY29uc3Qgc3ZnSGVpZ2h0ID0gaGVpZ2h0TWF0Y2ggPyBwYXJzZUZsb2F0KGhlaWdodE1hdGNoWzFdKSA6IHZpZXdCb3hIZWlnaHQ7XHJcblxyXG4gICAgICAgIC8vIFRhcmdldCBzaXplIGZvciBub3JtYWxpemF0aW9uICgyNHgyNCBpcyBjb21tb24gZm9yIGljb25zKVxyXG4gICAgICAgIGNvbnN0IFRBUkdFVF9TSVpFID0gMjQ7XHJcblxyXG4gICAgICAgIC8vIENhbGN1bGF0ZSBzY2FsZSB0byBmaXQgd2l0aGluIHRhcmdldCBzaXplIHdoaWxlIG1haW50YWluaW5nIGFzcGVjdCByYXRpb1xyXG4gICAgICAgIGNvbnN0IHNjYWxlWCA9IFRBUkdFVF9TSVpFIC8gdmlld0JveFdpZHRoO1xyXG4gICAgICAgIGNvbnN0IHNjYWxlWSA9IFRBUkdFVF9TSVpFIC8gdmlld0JveEhlaWdodDtcclxuICAgICAgICBjb25zdCBzY2FsZSA9IE1hdGgubWluKHNjYWxlWCwgc2NhbGVZKTsgLy8gVXNlIG1pbiB0byBmaXQgd2l0aGluIHRhcmdldCBib3VuZHNcclxuXHJcbiAgICAgICAgLy8gQ2FsY3VsYXRlIG9mZnNldCB0byBjZW50ZXIgdGhlIGljb25cclxuICAgICAgICBjb25zdCBzY2FsZWRXaWR0aCA9IHZpZXdCb3hXaWR0aCAqIHNjYWxlO1xyXG4gICAgICAgIGNvbnN0IHNjYWxlZEhlaWdodCA9IHZpZXdCb3hIZWlnaHQgKiBzY2FsZTtcclxuICAgICAgICBjb25zdCBvZmZzZXRYID0gKFRBUkdFVF9TSVpFIC0gc2NhbGVkV2lkdGgpIC8gMjtcclxuICAgICAgICBjb25zdCBvZmZzZXRZID0gKFRBUkdFVF9TSVpFIC0gc2NhbGVkSGVpZ2h0KSAvIDI7XHJcblxyXG4gICAgICAgIC8vIEV4dHJhY3QgYWxsIHBhdGhzIHdpdGggdGhlaXIgc3R5bGVzIGFuZCBhdHRyaWJ1dGVzXHJcbiAgICAgICAgY29uc3QgcGF0aFJlZ2V4ID0gLzxwYXRoW14+XSo+L2c7XHJcbiAgICAgICAgbGV0IG1hdGNoO1xyXG4gICAgICAgIGxldCBwYXRocyA9IFtdO1xyXG4gICAgICAgIGxldCBwYXRoQ291bnQgPSAwO1xyXG5cclxuICAgICAgICB3aGlsZSAoKG1hdGNoID0gcGF0aFJlZ2V4LmV4ZWMoc3ZnQ29udGVudCkpICE9PSBudWxsKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHBhdGhUYWcgPSBtYXRjaFswXTtcclxuICAgICAgICAgICAgcGF0aENvdW50Kys7XHJcblxyXG4gICAgICAgICAgICAvLyBFeHRyYWN0IGQgYXR0cmlidXRlIChyZXF1aXJlZClcclxuICAgICAgICAgICAgY29uc3QgZE1hdGNoID0gcGF0aFRhZy5tYXRjaCgvZD1cIihbXlwiXSopXCIvKTtcclxuICAgICAgICAgICAgaWYgKCFkTWF0Y2gpIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybihgUGF0aCAke3BhdGhDb3VudH0gaGFzIG5vICdkJyBhdHRyaWJ1dGUsIHNraXBwaW5nYCk7XHJcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLy8gVHJhbnNmb3JtIHRoZSBwYXRoIGRhdGEgdG8gc2NhbGUgYW5kIGNlbnRlciBpdFxyXG4gICAgICAgICAgICBjb25zdCB0cmFuc2Zvcm1lZEQgPSB0aGlzLnRyYW5zZm9ybVBhdGhEYXRhKGRNYXRjaFsxXSwgc2NhbGUsIG9mZnNldFgsIG9mZnNldFksIHZpZXdCb3hXaWR0aCwgdmlld0JveEhlaWdodCk7XHJcblxyXG4gICAgICAgICAgICAvLyBJbml0aWFsaXplIGF0dHJpYnV0ZXNcclxuICAgICAgICAgICAgbGV0IGZpbGwgPSAnJztcclxuICAgICAgICAgICAgbGV0IHN0cm9rZSA9ICcnO1xyXG4gICAgICAgICAgICBsZXQgc3Ryb2tlV2lkdGggPSAnJztcclxuICAgICAgICAgICAgbGV0IGZpbGxPcGFjaXR5ID0gJyc7XHJcbiAgICAgICAgICAgIGxldCBzdHJva2VPcGFjaXR5ID0gJyc7XHJcbiAgICAgICAgICAgIGxldCBvcGFjaXR5ID0gJyc7XHJcblxyXG4gICAgICAgICAgICAvLyBFeHRyYWN0IGZyb20gc3R5bGUgYXR0cmlidXRlXHJcbiAgICAgICAgICAgIGNvbnN0IHN0eWxlTWF0Y2ggPSBwYXRoVGFnLm1hdGNoKC9zdHlsZT1cIihbXlwiXSopXCIvKTtcclxuICAgICAgICAgICAgaWYgKHN0eWxlTWF0Y2gpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHN0eWxlID0gc3R5bGVNYXRjaFsxXTtcclxuXHJcbiAgICAgICAgICAgICAgICAvLyBFeHRyYWN0IGFsbCBzdHlsZSBwcm9wZXJ0aWVzXHJcbiAgICAgICAgICAgICAgICBjb25zdCBmaWxsTWF0Y2ggPSBzdHlsZS5tYXRjaCgvZmlsbDooW147XCJdKykvKTtcclxuICAgICAgICAgICAgICAgIGlmIChmaWxsTWF0Y2gpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBmaWxsVmFsdWUgPSBmaWxsTWF0Y2hbMV0udHJpbSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChmaWxsVmFsdWUgJiYgZmlsbFZhbHVlICE9PSAnJykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmaWxsID0gZmlsbFZhbHVlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBjb25zdCBzdHJva2VNYXRjaCA9IHN0eWxlLm1hdGNoKC9zdHJva2U6KFteO1wiXSspLyk7XHJcbiAgICAgICAgICAgICAgICBpZiAoc3Ryb2tlTWF0Y2gpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBzdHJva2VWYWx1ZSA9IHN0cm9rZU1hdGNoWzFdLnRyaW0oKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoc3Ryb2tlVmFsdWUgJiYgc3Ryb2tlVmFsdWUgIT09ICcnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0cm9rZSA9IHN0cm9rZVZhbHVlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBjb25zdCBzdHJva2VXaWR0aE1hdGNoID0gc3R5bGUubWF0Y2goL3N0cm9rZS13aWR0aDooW147XCJdKykvKTtcclxuICAgICAgICAgICAgICAgIGlmIChzdHJva2VXaWR0aE1hdGNoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgb3JpZ2luYWxTdHJva2VXaWR0aCA9IHBhcnNlRmxvYXQoc3Ryb2tlV2lkdGhNYXRjaFsxXS50cmltKCkpO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIFNjYWxlIHN0cm9rZSB3aWR0aCBwcm9wb3J0aW9uYWxseVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICghaXNOYU4ob3JpZ2luYWxTdHJva2VXaWR0aCkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3Ryb2tlV2lkdGggPSAob3JpZ2luYWxTdHJva2VXaWR0aCAqIHNjYWxlKS50b1N0cmluZygpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBjb25zdCBmaWxsT3BhY2l0eU1hdGNoID0gc3R5bGUubWF0Y2goL2ZpbGwtb3BhY2l0eTooW147XCJdKykvKTtcclxuICAgICAgICAgICAgICAgIGlmIChmaWxsT3BhY2l0eU1hdGNoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZmlsbE9wYWNpdHkgPSBmaWxsT3BhY2l0eU1hdGNoWzFdLnRyaW0oKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBjb25zdCBzdHJva2VPcGFjaXR5TWF0Y2ggPSBzdHlsZS5tYXRjaCgvc3Ryb2tlLW9wYWNpdHk6KFteO1wiXSspLyk7XHJcbiAgICAgICAgICAgICAgICBpZiAoc3Ryb2tlT3BhY2l0eU1hdGNoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc3Ryb2tlT3BhY2l0eSA9IHN0cm9rZU9wYWNpdHlNYXRjaFsxXS50cmltKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgY29uc3Qgb3BhY2l0eU1hdGNoID0gc3R5bGUubWF0Y2goL29wYWNpdHk6KFteO1wiXSspLyk7XHJcbiAgICAgICAgICAgICAgICBpZiAob3BhY2l0eU1hdGNoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgb3BhY2l0eSA9IG9wYWNpdHlNYXRjaFsxXS50cmltKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8vIElmIG5vIHN0eWxlLCBjaGVjayBpbmRpdmlkdWFsIGF0dHJpYnV0ZXNcclxuICAgICAgICAgICAgaWYgKCFzdHlsZU1hdGNoKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBmaWxsQXR0ciA9IHBhdGhUYWcubWF0Y2goL2ZpbGw9XCIoW15cIl0qKVwiLyk7XHJcbiAgICAgICAgICAgICAgICBpZiAoZmlsbEF0dHIgJiYgZmlsbEF0dHJbMV0gIT09ICcnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZmlsbCA9IGZpbGxBdHRyWzFdO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGNvbnN0IHN0cm9rZUF0dHIgPSBwYXRoVGFnLm1hdGNoKC9zdHJva2U9XCIoW15cIl0qKVwiLyk7XHJcbiAgICAgICAgICAgICAgICBpZiAoc3Ryb2tlQXR0ciAmJiBzdHJva2VBdHRyWzFdICE9PSAnJykge1xyXG4gICAgICAgICAgICAgICAgICAgIHN0cm9rZSA9IHN0cm9rZUF0dHJbMV07XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgY29uc3Qgc3Ryb2tlV2lkdGhBdHRyID0gcGF0aFRhZy5tYXRjaCgvc3Ryb2tlLXdpZHRoPVwiKFteXCJdKilcIi8pO1xyXG4gICAgICAgICAgICAgICAgaWYgKHN0cm9rZVdpZHRoQXR0cikge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IG9yaWdpbmFsU3Ryb2tlV2lkdGggPSBwYXJzZUZsb2F0KHN0cm9rZVdpZHRoQXR0clsxXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gU2NhbGUgc3Ryb2tlIHdpZHRoIHByb3BvcnRpb25hbGx5XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFpc05hTihvcmlnaW5hbFN0cm9rZVdpZHRoKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHJva2VXaWR0aCA9IChvcmlnaW5hbFN0cm9rZVdpZHRoICogc2NhbGUpLnRvU3RyaW5nKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGNvbnN0IGZpbGxPcGFjaXR5QXR0ciA9IHBhdGhUYWcubWF0Y2goL2ZpbGwtb3BhY2l0eT1cIihbXlwiXSopXCIvKTtcclxuICAgICAgICAgICAgICAgIGlmIChmaWxsT3BhY2l0eUF0dHIpIHtcclxuICAgICAgICAgICAgICAgICAgICBmaWxsT3BhY2l0eSA9IGZpbGxPcGFjaXR5QXR0clsxXTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBjb25zdCBzdHJva2VPcGFjaXR5QXR0ciA9IHBhdGhUYWcubWF0Y2goL3N0cm9rZS1vcGFjaXR5PVwiKFteXCJdKilcIi8pO1xyXG4gICAgICAgICAgICAgICAgaWYgKHN0cm9rZU9wYWNpdHlBdHRyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc3Ryb2tlT3BhY2l0eSA9IHN0cm9rZU9wYWNpdHlBdHRyWzFdO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvLyBCdWlsZCBwYXRoIGVsZW1lbnQgd2l0aCB0cmFuc2Zvcm1lZCBkIGF0dHJpYnV0ZVxyXG4gICAgICAgICAgICBsZXQgcGF0aEVsZW1lbnQgPSBgPHBhdGggZD1cIiR7dHJhbnNmb3JtZWREfVwiYDtcclxuXHJcbiAgICAgICAgICAgIC8vIEFkZCBmaWxsIGlmIGl0IGV4aXN0cyAoaW5jbHVkaW5nICdub25lJylcclxuICAgICAgICAgICAgaWYgKGZpbGwgJiYgZmlsbCAhPT0gJycpIHtcclxuICAgICAgICAgICAgICAgIHBhdGhFbGVtZW50ICs9IGAgZmlsbD1cIiR7ZmlsbH1cImA7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8vIEFkZCBzdHJva2UgaWYgaXQgZXhpc3RzIChpbmNsdWRpbmcgJ25vbmUnKVxyXG4gICAgICAgICAgICBpZiAoc3Ryb2tlICYmIHN0cm9rZSAhPT0gJycpIHtcclxuICAgICAgICAgICAgICAgIHBhdGhFbGVtZW50ICs9IGAgc3Ryb2tlPVwiJHtzdHJva2V9XCJgO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvLyBBZGQgc3Ryb2tlLXdpZHRoIGlmIGl0IGV4aXN0c1xyXG4gICAgICAgICAgICBpZiAoc3Ryb2tlV2lkdGggJiYgc3Ryb2tlV2lkdGggIT09ICcnKSB7XHJcbiAgICAgICAgICAgICAgICBwYXRoRWxlbWVudCArPSBgIHN0cm9rZS13aWR0aD1cIiR7c3Ryb2tlV2lkdGh9XCJgO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvLyBBZGQgb3BhY2l0eSBpZiBpdCBleGlzdHNcclxuICAgICAgICAgICAgaWYgKG9wYWNpdHkgJiYgb3BhY2l0eSAhPT0gJycpIHtcclxuICAgICAgICAgICAgICAgIHBhdGhFbGVtZW50ICs9IGAgb3BhY2l0eT1cIiR7b3BhY2l0eX1cImA7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8vIEFkZCBmaWxsLW9wYWNpdHkgaWYgaXQgZXhpc3RzXHJcbiAgICAgICAgICAgIGlmIChmaWxsT3BhY2l0eSAmJiBmaWxsT3BhY2l0eSAhPT0gJycpIHtcclxuICAgICAgICAgICAgICAgIHBhdGhFbGVtZW50ICs9IGAgZmlsbC1vcGFjaXR5PVwiJHtmaWxsT3BhY2l0eX1cImA7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8vIEFkZCBzdHJva2Utb3BhY2l0eSBpZiBpdCBleGlzdHNcclxuICAgICAgICAgICAgaWYgKHN0cm9rZU9wYWNpdHkgJiYgc3Ryb2tlT3BhY2l0eSAhPT0gJycpIHtcclxuICAgICAgICAgICAgICAgIHBhdGhFbGVtZW50ICs9IGAgc3Ryb2tlLW9wYWNpdHk9XCIke3N0cm9rZU9wYWNpdHl9XCJgO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBwYXRoRWxlbWVudCArPSBgIC8+YDtcclxuICAgICAgICAgICAgcGF0aHMucHVzaChwYXRoRWxlbWVudCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBJZiBubyBwYXRocyBmb3VuZCwgdHJ5IHRvIGV4dHJhY3QgZnJvbSBTVkcgY29udGVudCBkaXJlY3RseSAoZmFsbGJhY2spXHJcbiAgICAgICAgaWYgKHBhdGhzLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgICAgICBjb25zb2xlLndhcm4oJ05vIHBhdGhzIGZvdW5kIGluIFNWRywgdHJ5aW5nIGZhbGxiYWNrIGV4dHJhY3Rpb24nKTtcclxuICAgICAgICAgICAgY29uc3QgY29udGVudE1hdGNoID0gc3ZnQ29udGVudC5tYXRjaCgvPHN2Z1tePl0qPihbXFxzXFxTXSo/KTxcXC9zdmc+Lyk7XHJcbiAgICAgICAgICAgIGlmIChjb250ZW50TWF0Y2ggJiYgY29udGVudE1hdGNoWzFdKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBpbm5lckNvbnRlbnQgPSBjb250ZW50TWF0Y2hbMV07XHJcbiAgICAgICAgICAgICAgICBjb25zdCBpbm5lclBhdGhSZWdleCA9IC88cGF0aFtePl0qPi9nO1xyXG4gICAgICAgICAgICAgICAgbGV0IGlubmVyTWF0Y2g7XHJcbiAgICAgICAgICAgICAgICB3aGlsZSAoKGlubmVyTWF0Y2ggPSBpbm5lclBhdGhSZWdleC5leGVjKGlubmVyQ29udGVudCkpICE9PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcGF0aHMucHVzaChpbm5lck1hdGNoWzBdKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gSWYgc3RpbGwgbm8gcGF0aHMsIHJldHVybiBudWxsIG9yIHRocm93IGVycm9yXHJcbiAgICAgICAgaWYgKHBhdGhzLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKGBObyBwYXRocyBmb3VuZCBpbiBTVkcgZm9yIGljb246ICR7aWNvbk5hbWV9YCk7XHJcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gQnVpbGQgdGhlIGNvbnRlbnQgc3RyaW5nIHdpdGggcHJvcGVyIGZvcm1hdHRpbmdcclxuICAgICAgICBjb25zdCBjb250ZW50ID0gcGF0aHMuam9pbignJyk7XHJcblxyXG4gICAgICAgIC8vIFVzZSB0aGUgdGFyZ2V0IHNpemUgYXMgdGhlIG5vcm1hbGl6ZWQgdmlld0JveFxyXG4gICAgICAgIGNvbnN0IG5vcm1hbGl6ZWRWaWV3Qm94ID0gYDAgMCAke1RBUkdFVF9TSVpFfSAke1RBUkdFVF9TSVpFfWA7XHJcblxyXG4gICAgICAgIC8vIENyZWF0ZSB0aGUgS2VuZG8gaWNvbiBzdHJ1Y3R1cmVcclxuICAgICAgICBvYmplY3Quc3ZnX2RhdGFbY29sdW1uXSA9IHtcclxuICAgICAgICAgICAgbmFtZTogaWNvbk5hbWUsXHJcbiAgICAgICAgICAgIGNvbnRlbnQ6IGNvbnRlbnQsXHJcbiAgICAgICAgICAgIHZpZXdCb3g6IG5vcm1hbGl6ZWRWaWV3Qm94LFxyXG4gICAgICAgICAgICB2YXJpYW50czoge1xyXG4gICAgICAgICAgICAgICAgc29saWQ6ICcnLFxyXG4gICAgICAgICAgICAgICAgb3V0bGluZTogJycsXHJcbiAgICAgICAgICAgICAgICBkdW90b25lOiAnJ1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgbmFtZTogaWNvbk5hbWUsXHJcbiAgICAgICAgICAgIGNvbnRlbnQ6IGNvbnRlbnQsXHJcbiAgICAgICAgICAgIHZpZXdCb3g6IG5vcm1hbGl6ZWRWaWV3Qm94LFxyXG4gICAgICAgICAgICB2YXJpYW50czoge1xyXG4gICAgICAgICAgICAgICAgc29saWQ6IGNvbnRlbnQsXHJcbiAgICAgICAgICAgICAgICBvdXRsaW5lOiAnJyxcclxuICAgICAgICAgICAgICAgIGR1b3RvbmU6ICcnXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICBvYmplY3Quc3ZnX2RhdGFbY29sdW1uXSA9IHt9O1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoYEVycm9yIGNvbnZlcnRpbmcgU1ZHIHRvIEtlbmRvIGljb246ICR7aWNvbk5hbWV9YCwgZXJyb3IpO1xyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG59XHJcblxyXG4vLyBIZWxwZXIgZnVuY3Rpb24gdG8gdHJhbnNmb3JtIHBhdGggZGF0YVxyXG50cmFuc2Zvcm1QYXRoRGF0YShkOiBzdHJpbmcsIHNjYWxlOiBudW1iZXIsIG9mZnNldFg6IG51bWJlciwgb2Zmc2V0WTogbnVtYmVyLCB2aWV3Qm94V2lkdGg6IG51bWJlciwgdmlld0JveEhlaWdodDogbnVtYmVyKTogc3RyaW5nIHtcclxuICAgIC8vIFRoaXMgZnVuY3Rpb24gdHJhbnNmb3JtcyB0aGUgcGF0aCBjb21tYW5kc1xyXG4gICAgLy8gSXQgaGFuZGxlcyBhYnNvbHV0ZSAodXBwZXJjYXNlKSBhbmQgcmVsYXRpdmUgKGxvd2VyY2FzZSkgY29tbWFuZHNcclxuICAgIFxyXG4gICAgY29uc3QgY29tbWFuZHMgPSBkLm1hdGNoKC9bYS16QS1aXVteYS16QS1aXSovZyk7XHJcbiAgICBpZiAoIWNvbW1hbmRzKSByZXR1cm4gZDtcclxuXHJcbiAgICBjb25zdCB0cmFuc2Zvcm1lZENvbW1hbmRzID0gY29tbWFuZHMubWFwKGNtZCA9PiB7XHJcbiAgICAgICAgY29uc3QgY29tbWFuZCA9IGNtZFswXTtcclxuICAgICAgICBjb25zdCB2YWx1ZXMgPSBjbWQuc2xpY2UoMSkudHJpbSgpLnNwbGl0KC9bXFxzLF0rLykuZmlsdGVyKHYgPT4gdiAhPT0gJycpLm1hcChOdW1iZXIpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGlmICh2YWx1ZXMubGVuZ3RoID09PSAwKSByZXR1cm4gY21kO1xyXG5cclxuICAgICAgICBsZXQgdHJhbnNmb3JtZWRWYWx1ZXM6IG51bWJlcltdID0gW107XHJcblxyXG4gICAgICAgIHN3aXRjaCAoY29tbWFuZCkge1xyXG4gICAgICAgICAgICBjYXNlICdNJzogLy8gTW92ZSB0byAoYWJzb2x1dGUpXHJcbiAgICAgICAgICAgIGNhc2UgJ0wnOiAvLyBMaW5lIHRvIChhYnNvbHV0ZSlcclxuICAgICAgICAgICAgY2FzZSAnQyc6IC8vIEN1YmljIEJlemllciAoYWJzb2x1dGUpXHJcbiAgICAgICAgICAgIGNhc2UgJ1MnOiAvLyBTbW9vdGggQmV6aWVyIChhYnNvbHV0ZSlcclxuICAgICAgICAgICAgY2FzZSAnUSc6IC8vIFF1YWRyYXRpYyBCZXppZXIgKGFic29sdXRlKVxyXG4gICAgICAgICAgICBjYXNlICdUJzogLy8gU21vb3RoIFF1YWRyYXRpYyAoYWJzb2x1dGUpXHJcbiAgICAgICAgICAgIGNhc2UgJ0EnOiAvLyBBcmMgKGFic29sdXRlKVxyXG4gICAgICAgICAgICBjYXNlICdaJzpcclxuICAgICAgICAgICAgY2FzZSAneic6XHJcbiAgICAgICAgICAgICAgICAvLyBEb24ndCB0cmFuc2Zvcm0gWiBjb21tYW5kc1xyXG4gICAgICAgICAgICAgICAgaWYgKGNvbW1hbmQgPT09ICdaJyB8fCBjb21tYW5kID09PSAneicpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gJ1onO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLy8gVHJhbnNmb3JtIGNvb3JkaW5hdGVzXHJcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHZhbHVlcy5sZW5ndGg7IGkgKz0gMikge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHggPSB2YWx1ZXNbaV07XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgeSA9IHZhbHVlc1tpICsgMV07XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFpc05hTih4KSAmJiAhaXNOYU4oeSkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtZWRWYWx1ZXMucHVzaCh4ICogc2NhbGUgKyBvZmZzZXRYKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtZWRWYWx1ZXMucHVzaCh5ICogc2NhbGUgKyBvZmZzZXRZKTtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm1lZFZhbHVlcy5wdXNoKHgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm1lZFZhbHVlcy5wdXNoKHkpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgY2FzZSAnbSc6IC8vIE1vdmUgdG8gKHJlbGF0aXZlKVxyXG4gICAgICAgICAgICBjYXNlICdsJzogLy8gTGluZSB0byAocmVsYXRpdmUpXHJcbiAgICAgICAgICAgIGNhc2UgJ2MnOiAvLyBDdWJpYyBCZXppZXIgKHJlbGF0aXZlKVxyXG4gICAgICAgICAgICBjYXNlICdzJzogLy8gU21vb3RoIEJlemllciAocmVsYXRpdmUpXHJcbiAgICAgICAgICAgIGNhc2UgJ3EnOiAvLyBRdWFkcmF0aWMgQmV6aWVyIChyZWxhdGl2ZSlcclxuICAgICAgICAgICAgY2FzZSAndCc6IC8vIFNtb290aCBRdWFkcmF0aWMgKHJlbGF0aXZlKVxyXG4gICAgICAgICAgICBjYXNlICdhJzogLy8gQXJjIChyZWxhdGl2ZSlcclxuICAgICAgICAgICAgICAgIC8vIFRyYW5zZm9ybSBjb29yZGluYXRlc1xyXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB2YWx1ZXMubGVuZ3RoOyBpICs9IDIpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCB4ID0gdmFsdWVzW2ldO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHkgPSB2YWx1ZXNbaSArIDFdO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICghaXNOYU4oeCkgJiYgIWlzTmFOKHkpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybWVkVmFsdWVzLnB1c2goeCAqIHNjYWxlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtZWRWYWx1ZXMucHVzaCh5ICogc2NhbGUpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybWVkVmFsdWVzLnB1c2goeCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybWVkVmFsdWVzLnB1c2goeSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICBjYXNlICdIJzogLy8gSG9yaXpvbnRhbCBsaW5lIChhYnNvbHV0ZSlcclxuICAgICAgICAgICAgICAgIHRyYW5zZm9ybWVkVmFsdWVzLnB1c2godmFsdWVzWzBdICogc2NhbGUgKyBvZmZzZXRYKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgY2FzZSAnaCc6IC8vIEhvcml6b250YWwgbGluZSAocmVsYXRpdmUpXHJcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm1lZFZhbHVlcy5wdXNoKHZhbHVlc1swXSAqIHNjYWxlKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgY2FzZSAnVic6IC8vIFZlcnRpY2FsIGxpbmUgKGFic29sdXRlKVxyXG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtZWRWYWx1ZXMucHVzaCh2YWx1ZXNbMF0gKiBzY2FsZSArIG9mZnNldFkpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICBjYXNlICd2JzogLy8gVmVydGljYWwgbGluZSAocmVsYXRpdmUpXHJcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm1lZFZhbHVlcy5wdXNoKHZhbHVlc1swXSAqIHNjYWxlKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgIC8vIFVua25vd24gY29tbWFuZCwga2VlcCBvcmlnaW5hbFxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGNtZDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIEZvcm1hdCB0aGUgdmFsdWVzIGFzIGEgc3RyaW5nXHJcbiAgICAgICAgY29uc3QgdmFsdWVTdHIgPSB0cmFuc2Zvcm1lZFZhbHVlcy5tYXAodiA9PiB7XHJcbiAgICAgICAgICAgIC8vIFJvdW5kIHRvIHJlYXNvbmFibGUgcHJlY2lzaW9uXHJcbiAgICAgICAgICAgIHJldHVybiBOdW1iZXIuaXNJbnRlZ2VyKHYpID8gdi50b1N0cmluZygpIDogdi50b0ZpeGVkKDQpO1xyXG4gICAgICAgIH0pLmpvaW4oJyAnKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIGNvbW1hbmQgKyB2YWx1ZVN0cjtcclxuICAgIH0pO1xyXG5cclxuICAgIHJldHVybiB0cmFuc2Zvcm1lZENvbW1hbmRzLmpvaW4oJycpO1xyXG59XHJcblxyXG5wdWJsaWMgZ2V0SW52YWxpZENvbnRyb2xzX2dyaWQob2JqZWN0KSB7XHJcbiAgLy9jb25zb2xlLmxvZyAoXCJ0ZXN0aW5nIGdldEludmFsaWRDb250cm9sczpcIiwgICBvYmplY3QuZm9ybUdyb3VwLmludmFsaWQsIG9iamVjdC5mb3JtR3JvdXAuY29udHJvbHMpXHJcbiAgY29uc3QgaW52YWxpZCA9IFtdO1xyXG4gIGNvbnN0IGNvbnRyb2xzID0gb2JqZWN0LmZvcm1Hcm91cC5jb250cm9scztcclxuICBmb3IgKGNvbnN0IG5hbWUgaW4gY29udHJvbHMpIHtcclxuICAgICAgaWYgKGNvbnRyb2xzW25hbWVdLmludmFsaWQpIHtcclxuICAgICAgICAgbGV0IG5hbWVNU2cgPSB0aGlzLmdldE5MUyhbXSwgJ29ybXBnbW9iX2ZtYi51c2VySW5mb09ybXBnbW9iRm1iQlN1YnNjcmliZXJbXCJuYW1lXCJdJyxuYW1lKVxyXG4gICAgICAgICAgaW52YWxpZC5wdXNoKG5hbWVNU2cpO1xyXG4gICAgICB9XHJcbiAgfVxyXG4gIHRoaXMuc2hvd05vdGlmaWNhdGlvbihcImVycm9yXCIsIHRoaXMuZ2V0TkxTKFtpbnZhbGlkLnRvU3RyaW5nKCldLFxyXG4gICdOT19WQUxJRF9EQVRBX0ZPUicsJ05vIHZhbGlkIGRhdGEgZm9yIDogICMjICcpKTtcclxuICByZXR1cm4gaW52YWxpZDtcclxufVxyXG59XHJcblxyXG4vKlxyXG5ASW5qZWN0YWJsZSh7XHJcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnLFxyXG59KVxyXG5leHBvcnQgY2xhc3Mgc3RhclNlcnZpY2VzIGV4dGVuZHMgc3Rhcl9TZXJ2aWNlcyB7XHJcblxyXG4gICAgY29uc3RydWN0b3IoXHJcbiAgICAgICAgbm90aWZpY2F0aW9uU2VydmljZTpOb3RpZmljYXRpb25TZXJ2aWNlLFxyXG4gICAgICAgIGRpYWxvZ1NlcnZpY2U6IERpYWxvZ1NlcnZpY2UsXHJcbiAgICAgICAgaHR0cDogSHR0cENsaWVudCwgICBtZXNzYWdlczogTWVzc2FnZVNlcnZpY2UpIHtcclxuICAgICAgICAvL2xldCBQYWdlID0gZW5jb2RlVVJJIChcIiZfcXVlcnk9R0VUX0VJTV9DT01NQU5EUyZTUENfRlVOQ1RJT049JyUnJkVYQ1NZU1RFTT0nU01OU18zJyZFUVVJUElEPSclJ1wiKTtcclxuICAgICAgICBsZXQgUGFnZSA9IGVuY29kZVVSSSAoXCJcIik7XHJcblxyXG5cclxuICAgICAgICBzdXBlcihcclxuICAgICAgICAgICAgbm90aWZpY2F0aW9uU2VydmljZSxcclxuICAgICAgICAgICAgZGlhbG9nU2VydmljZSxcclxuICAgICAgICAgICAgaHR0cCwgUGFnZSwgbWVzc2FnZXMpO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgcXVlcnlGb3JDYXRlZ29yeSh7IENhdGVnb3J5SUQgfTogeyBDYXRlZ29yeUlEOiBudW1iZXIgfSwgc3RhdGU/OiBhbnkpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLnF1ZXJ5KE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLCB7XHJcbiAgICAgICAgICAgIGZpbHRlcjoge1xyXG4gICAgICAgICAgICAgICAgZmlsdGVyczogW3tcclxuICAgICAgICAgICAgICAgICAgICBmaWVsZDogJ0NhdGVnb3J5SUQnLCBvcGVyYXRvcjogJ2VxJywgdmFsdWU6IENhdGVnb3J5SURcclxuICAgICAgICAgICAgICAgIH1dLFxyXG4gICAgICAgICAgICAgICAgbG9naWM6ICdhbmQnXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHF1ZXJ5Rm9yUHJvZHVjdE5hbWUoUHJvZHVjdE5hbWU6IHN0cmluZywgc3RhdGU/OiBhbnkpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLnF1ZXJ5KE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLCB7XHJcbiAgICAgICAgICAgIGZpbHRlcjoge1xyXG4gICAgICAgICAgICAgICAgZmlsdGVyczogW3tcclxuICAgICAgICAgICAgICAgICAgICBmaWVsZDogJ1Byb2R1Y3ROYW1lJywgb3BlcmF0b3I6ICdjb250YWlucycsIHZhbHVlOiBQcm9kdWN0TmFtZVxyXG4gICAgICAgICAgICAgICAgfV0sXHJcbiAgICAgICAgICAgICAgICBsb2dpYzogJ2FuZCdcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pKTtcclxuICAgIH1cclxuXHJcbn1cclxuXHJcbiovXHJcbiJdfQ==