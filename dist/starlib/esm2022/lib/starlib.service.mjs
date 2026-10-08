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
                        if (object.paramConfig.DEBUG_FLAG)
                            console.log("here3", object.gridInitialValues, object.masterKeyNameArr[i]);
                        let exists = object.gridInitialValues[object.masterKeyNameArr[i]];
                        if (typeof exists !== "undefined") {
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
        for (let i = 0; i < object.svg_arr.length; i++) {
            let svgVal = formGroup[object.svg_arr[i]];
            console.log("svg_arr[i]:", object.svg_arr[i], svgVal);
            svgVal = this.convertSvgToKendoSVGIcon(this, svgVal, null, object.svg_arr[i]);
            console.log("svg_arr[i]:new:", svgVal);
            formGroup[object.svg_arr[i] + "_SVG"] = svgVal;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhcmxpYi5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vcHJvamVjdHMvc3RhcmxpYi9zcmMvbGliL3N0YXJsaWIuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBYyxXQUFXLEVBQUUsV0FBVyxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFJNUUsT0FBTyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUMxQyxtQ0FBbUM7QUFDbkMsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUNsQyxPQUFPLEtBQUssUUFBUSxNQUFNLFdBQVcsQ0FBQztBQUN0QyxPQUFPLEVBQUUsVUFBVSxFQUFTLE1BQU0sZ0JBQWdCLENBQUM7QUFFbkQsT0FBTyxFQUE0QixpQkFBaUIsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBQzdGLE9BQU8sRUFBRSxHQUFHLEVBQUUsY0FBYyxFQUFFLE9BQU8sRUFBZSxNQUFNLDJCQUEyQixDQUFDO0FBRXRGLE9BQU8sRUFBRSxHQUFHLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUN0QyxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFFN0MsT0FBTyxFQUFHLFNBQVMsRUFBRSxrQkFBa0IsRUFBRSxNQUFNLFNBQVMsQ0FBQzs7Ozs7O0FBV3pELHFFQUFxRTtBQUNuRSxNQUFNLE9BQU8sWUFBWTtJQXFEdkIsWUFDWSxtQkFBd0MsRUFDeEMsYUFBNEIsRUFDNUIsSUFBZ0IsRUFDaEIsUUFBd0I7UUFFcEMsY0FBYztRQUNWLGlDQUFpQztRQU56Qix3QkFBbUIsR0FBbkIsbUJBQW1CLENBQXFCO1FBQ3hDLGtCQUFhLEdBQWIsYUFBYSxDQUFlO1FBQzVCLFNBQUksR0FBSixJQUFJLENBQVk7UUFDaEIsYUFBUSxHQUFSLFFBQVEsQ0FBZ0I7UUF2RDlCLGlCQUFZLEdBQVUsRUFBRSxDQUFDO1FBQ3pCLGlCQUFZLEdBQVUsRUFBRSxDQUFDO1FBQ3pCLGlCQUFZLEdBQVUsRUFBRSxDQUFDO1FBRTFCLGlCQUFZLEdBQUcsRUFBRSxDQUFDO1FBQ2xCLG1CQUFjLEdBQUcsK0NBQStDLENBQUM7UUFDakUsb0JBQWUsR0FBRyxvQ0FBb0MsQ0FBQztRQUN2RCxxQkFBZ0IsR0FBRyxnQkFBZ0IsQ0FBQztRQUNwQyxxQkFBZ0IsR0FBRyw4Q0FBOEMsQ0FBQztRQUNsRSx3QkFBbUIsR0FBRyx1QkFBdUIsQ0FBQztRQUM5QyxzQkFBaUIsR0FBRywrQkFBK0IsQ0FBQTtRQUNuRCxnQkFBVyxHQUFHLDRDQUE0QyxDQUFBO1FBQzFELGdCQUFXLEdBQUcsdUNBQXVDLENBQUE7UUFDckQscUJBQWdCLEdBQUcsOEJBQThCLENBQUE7UUFDakQsa0JBQWEsR0FBRywyQkFBMkIsQ0FBQTtRQUMzQyxrQkFBYSxHQUFJLHFFQUFxRSxDQUFDO1FBQ3ZGLFlBQU8sR0FBRyxFQUFFLENBQUM7UUFDYixpQkFBWSxHQUFHLEVBQUUsQ0FBQztRQUNsQixhQUFRLEdBQUcsRUFBRSxDQUFDO1FBQ2QsY0FBUyxHQUFHLEdBQUcsQ0FBQztRQUNoQixZQUFPLEdBQUcsRUFBRSxDQUFDO1FBRWIsY0FBUyxHQUFHLEVBQUUsQ0FBQztRQUNmLGdCQUFXLEdBQUcsRUFBRSxDQUFDO1FBRWpCLFVBQUssR0FBRyxJQUFJLENBQUM7UUFDYixpQkFBWSxHQUFHO1lBQ3BCLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFO1lBQzlCLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxPQUFPLEVBQUUsSUFBSSxFQUFFO1NBQy9CLENBQUM7UUFDSyxjQUFTLEdBQUc7WUFDakIsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUU7U0FDL0IsQ0FBQztRQUNLLGtCQUFhLEdBQU8sRUFBRSxDQUFDO1FBSTVCLGlHQUFpRztRQUNuRywwRUFBMEU7UUFFbkUsZUFBVSxHQUFHLEVBQUUsQ0FBQyxDQUFDLG1DQUFtQztRQUN6RCx3REFBd0Q7UUFFbkQsZUFBVSxHQUFHLEVBQUUsQ0FBQyxDQUFDLDJCQUEyQjtRQUNuRCxnREFBZ0Q7UUFFdkMsYUFBUSxHQUFHLElBQUksQ0FBQyxVQUFVLEdBQUcsMkJBQTJCLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQztRQUMvRSxxRkFBcUY7UUFDNUUsWUFBTyxHQUFHLFNBQVMsQ0FBQztRQUN0QixjQUFTLEdBQUcsV0FBVyxDQUFDO1FBaVJ4QixhQUFRLEdBQUcsQ0FBQyxDQUFDO1FBK3FEYixjQUFTLEdBQUcsS0FBSyxDQUFDO1FBaUtsQixzQkFBaUIsR0FBRztZQUN6QixXQUFXLEVBQUUsRUFBRTtZQUNmLFFBQVEsRUFBRSxFQUFFO1lBQ1osYUFBYSxFQUFFLEVBQUU7WUFDakIsVUFBVSxFQUFFLEVBQUU7U0FDZixDQUFDO1FBQ0sscUJBQWdCLEdBQUc7WUFDeEIsV0FBVyxFQUFFLEVBQUU7WUFDZixRQUFRLEVBQUUsRUFBRTtZQUNaLGFBQWEsRUFBRSxFQUFFO1lBQ2pCLFVBQVUsRUFBRSxFQUFFO1NBQ2YsQ0FBQztRQUNLLGFBQVEsR0FBRyxFQUFFLENBQUM7UUFDZCxnQkFBVyxHQUFHLEVBQUUsQ0FBQztRQTRwQ2pCLGFBQVEsR0FBQyxFQUFFLENBQUM7UUEweUJYLGVBQVUsR0FBTyxFQUFFLENBQUM7UUFDdkIsWUFBTyxHQUFHLEtBQUssQ0FBQztRQUNkLG9CQUFlLEdBQUcsS0FBSyxDQUFDO1FBQ3pCLFNBQUksR0FBTyxFQUFFLENBQUM7UUFDZixtQkFBYyxHQUFHLENBQUMsUUFBUSxFQUFFLFFBQVEsRUFBRSxRQUFRLENBQUMsQ0FBQztRQXlrQi9DLHFCQUFnQixHQUFDLGlCQUFpQixDQUFDO1FBcUJuQyxpQkFBWSxHQUFHLENBQUMsU0FBUyxFQUFFLEVBQUUsQ0FDbkMsU0FBUyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUM7YUFDakIsR0FBRyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLElBQUksRUFBRSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQzthQUNyQyxNQUFNLENBQUMsQ0FBQyxHQUFHLEVBQUUsSUFBSSxFQUFFLEVBQUU7WUFDbEIsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUN2QixPQUFPLEdBQUcsQ0FBQztRQUNmLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQTtJQWpwSk4sQ0FBQztJQUVILG1DQUFtQztJQUNuQyx3QkFBd0I7SUFDeEIsZ0NBQWdDO0lBQ2hDLDRDQUE0QztJQUM1QyxJQUFJO0lBQ0csU0FBUyxDQUFDLFFBQWEsRUFBRSxjQUFzQjtRQUVoRCxxREFBcUQ7UUFDekQsSUFBSSxPQUFPLGNBQWMsS0FBSyxXQUFXLEVBQUUsQ0FBQztZQUMxQyxRQUFRLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxjQUFjLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDcEMsUUFBUSxDQUFDLEtBQUssR0FBRyxRQUFRLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQztZQUN0Qzs7b0RBRXdDO1FBQzFDLENBQUM7UUFFRCxPQUFPLFFBQVEsQ0FBQztJQUNwQixDQUFDO0lBQ0ksU0FBUyxDQUFDLFFBQWEsRUFBRSxjQUFzQixFQUFFLE1BQVc7UUFDL0QsUUFBUSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsR0FBRyxNQUFNLENBQUM7UUFFckMsT0FBTyxRQUFRLENBQUM7SUFFcEIsQ0FBQztJQUNJLE1BQU0sQ0FBQyxRQUFhLEVBQUUsTUFBVztRQUNwQyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUMxQjs7Ozs7OzBCQU1rQjtRQUNqQixPQUFPLFFBQVEsQ0FBQztJQUNwQixDQUFDO0lBQ00sV0FBVyxDQUFDLE1BQVU7UUFDM0IsU0FBUyxNQUFNLENBQUUsS0FBUztZQUN4QixPQUFPLEtBQUssWUFBWSxJQUFJLENBQUM7UUFDN0IsQ0FBQztRQUNELFNBQVMsZ0JBQWdCLENBQUMsQ0FBSztZQUM3QixJQUFJLE9BQU8sR0FBRyxDQUFDLENBQUMsV0FBVyxFQUFFLENBQUM7WUFDOUIsSUFBSSxVQUFVLEdBQUcsT0FBTyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUNwQyxPQUFPLEdBQUcsVUFBVSxDQUFDLENBQUMsQ0FBQyxHQUFHLEdBQUcsR0FBRyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDOUMsT0FBTyxHQUFHLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDO1lBQ2hDLE9BQU8sT0FBTyxDQUFDO1FBQ2pCLENBQUM7UUFDSCxTQUFTLFVBQVUsQ0FBQyxHQUFPLEVBQUUsS0FBUztZQUNwQyxJQUFJLE1BQU0sR0FBRyxFQUFFLENBQUM7WUFDaEIsa0ZBQWtGO1lBRWxGLElBQUksTUFBTSxDQUFFLEtBQUssQ0FBQyxFQUFDLENBQUM7Z0JBQ2hCLHlCQUF5QjtnQkFDekIsa0NBQWtDO2dCQUNsQyxLQUFLLEdBQUcsS0FBSyxDQUFDLFdBQVcsRUFBRSxDQUFDO1lBQ2hDLENBQUM7WUFDRCxJQUFJLE9BQU8sS0FBSyxLQUFLLFFBQVEsRUFDN0IsQ0FBQztnQkFDQyxnQkFBZ0I7Z0JBQ2hCLElBQUksS0FBSyxJQUFJLEVBQUUsSUFBSSxLQUFLLElBQUksSUFBSSxFQUNoQyxDQUFDO29CQUNDLElBQUksU0FBUyxHQUFHLE1BQU0sQ0FBQTtvQkFDdEIsSUFBSSxXQUFXLEdBQUcsRUFBRSxDQUFDO29CQUNyQixJQUFJLFVBQVUsR0FBRyxLQUFLLENBQUMsSUFBSSxFQUFFLENBQUM7b0JBQzlCLElBQUksU0FBUyxHQUFHLFVBQVUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUM7b0JBQ3JDLElBQUksQ0FBQyxHQUFHLFNBQVMsQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLENBQUM7b0JBQ3BDLElBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFDLENBQUM7d0JBQ1osSUFBSSxTQUFTLElBQUksR0FBRzs0QkFDbEIsV0FBVyxHQUFHLE1BQU0sR0FBSSxLQUFLLEdBQUcsSUFBSSxDQUFDOzs0QkFFckMsV0FBVyxHQUFHLEtBQUssQ0FBQztvQkFFeEIsQ0FBQzt5QkFDSSxJQUFLLEtBQUssQ0FBQyxXQUFXLEVBQUUsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQy9DLENBQUM7d0JBQ0MsV0FBVyxHQUFHLFNBQVMsR0FBSSxLQUFLLEdBQUcsSUFBSSxDQUFDO3dCQUN4QywyRUFBMkU7b0JBQzdFLENBQUM7eUJBRUQsQ0FBQzt3QkFDQyxXQUFXLEdBQUcsTUFBTSxHQUFJLEtBQUssR0FBRyxJQUFJLENBQUM7b0JBQ3ZDLENBQUM7b0JBQ0QsTUFBTSxHQUFHLEdBQUcsR0FBRyxrQkFBa0IsQ0FBQyxXQUFXLENBQUMsQ0FBQztvQkFDL0MsNkJBQTZCO2dCQUMvQixDQUFDO1lBQ0gsQ0FBQztpQkFDRyxDQUFDO2dCQUNMLHNCQUFzQjtnQkFDcEIsSUFBSSxXQUFXLEdBQUcsTUFBTSxHQUFJLEtBQUssR0FBRyxJQUFJLENBQUM7Z0JBQ3pDLE1BQU0sR0FBRyxHQUFHLEdBQUcsa0JBQWtCLENBQUMsV0FBVyxDQUFDLENBQUM7WUFDakQsQ0FBQztZQUVELE9BQU8sTUFBTSxDQUFDO1FBQ2hCLENBQUM7UUFFRCxJQUFJLFdBQVcsR0FBRyxFQUFFLENBQUM7UUFDbkIsSUFBSSxXQUFXLEdBQUcsRUFBRSxDQUFDO1FBQ3JCLElBQUksSUFBSSxDQUFDLFdBQVcsQ0FBQyxVQUFVO1lBQUUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxjQUFjLENBQUMsQ0FBQTtRQUM1RCxJQUFJLElBQUksQ0FBQyxXQUFXLENBQUMsVUFBVTtZQUFFLE9BQU8sQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUE7UUFDcEQsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxPQUFPLENBQUMsVUFBUyxHQUFHO1lBQ3BDLElBQUksS0FBSyxHQUFHLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUN4QixrRUFBa0U7WUFDbEUsSUFBSyxDQUFDLE9BQU8sS0FBSyxLQUFLLFdBQVcsQ0FBRSxJQUFJLENBQUMsS0FBSyxLQUFLLEVBQUUsQ0FBRSxJQUFJLENBQUMsS0FBSyxLQUFLLElBQUksQ0FBQyxFQUMzRSxDQUFDO2dCQUNDLElBQUksTUFBTSxHQUFHLFVBQVUsQ0FBQyxHQUFHLEVBQUUsS0FBSyxDQUFDLENBQUM7Z0JBRXBDLElBQUksV0FBVyxJQUFJLEVBQUUsRUFDbkIsQ0FBQztvQkFDRyxXQUFXLEdBQUcsV0FBVyxHQUFLLE1BQU0sQ0FBQztnQkFDekMsQ0FBQztxQkFFRCxDQUFDO29CQUNHLFdBQVcsR0FBRyxXQUFXLEdBQUcsT0FBTyxHQUFHLE1BQU0sQ0FBQztnQkFDakQsQ0FBQztZQUVMLENBQUM7UUFDTCxDQUFDLENBQUMsQ0FBQztRQUNILElBQUksV0FBVyxJQUFJLEVBQUU7WUFDakIsV0FBVyxHQUFHLFVBQVUsR0FBRyxXQUFXLENBQUM7O1lBRXZDLFdBQVcsR0FBRyxVQUFVLENBQUM7UUFFN0IsSUFBSSxJQUFJLENBQUMsV0FBVyxDQUFDLFVBQVU7WUFBRSxPQUFPLENBQUMsR0FBRyxDQUFDLGNBQWMsR0FBRyxXQUFXLENBQUMsQ0FBQztRQUMzRSxPQUFPLFdBQVcsQ0FBQztJQUN2QixDQUFDO0lBRUksVUFBVSxDQUFDLE1BQVU7UUFFeEIsSUFBSSxXQUFXLEdBQUcsY0FBYyxFQUFFLENBQUM7UUFDbkMsSUFBSSxJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssSUFBSSxFQUFFLEVBQUMsQ0FBQztZQUNsQyw2Q0FBNkM7WUFDM0MsTUFBTSxHQUFHLE1BQU0sR0FBRyxTQUFTLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUM7UUFFekQsQ0FBQztRQUNELElBQUksSUFBSSxDQUFDLFdBQVcsQ0FBQyxVQUFVO1lBQUUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxTQUFTLEVBQUUsTUFBTSxDQUFDLENBQUM7UUFFaEUsT0FBTyxNQUFNLENBQUM7SUFDaEIsQ0FBQztJQUVNLEtBQUssQ0FBQyxNQUFVLEVBQUUsU0FBaUI7UUFDcEMseURBQXlEO1FBQ3pELE1BQU0sUUFBUSxHQUFHLEVBQUUsQ0FBQztRQUNwQixJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztRQUNwQixJQUFJLE1BQU0sR0FBRyxHQUFHLElBQUksQ0FBQyxRQUFRLEdBQUcsU0FBUyxFQUFFLENBQUM7UUFDNUMsTUFBTSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLENBQUM7UUFHakMsSUFBSSxDQUFDLFdBQVcsR0FBRztZQUNqQixPQUFPLEVBQUUsSUFBSSxXQUFXLENBQUM7Z0JBQ3ZCLGNBQWMsRUFBRSxrQkFBa0I7Z0JBQ2xDLGVBQWUsRUFBRSxJQUFJLENBQUMsT0FBTzthQUU5QixDQUFDO1NBQ0gsQ0FBQztRQUNGLE9BQU8sSUFBSSxDQUFDLElBQUk7YUFDakIsR0FBRyxDQUFDLEdBQUcsTUFBTSxFQUFFLEVBQUUsSUFBSSxDQUFDLFdBQVcsQ0FBQzthQUM1QixJQUFJLENBQ0QsVUFBVSxDQUFDLENBQUMsR0FBRyxFQUFFLEVBQUU7WUFDZixPQUFPLFVBQVUsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUN6QixDQUFDLENBQUMsRUFDWixHQUFHLENBQUMsQ0FBQyxRQUFZLEVBQUUsRUFBRSxDQUFDLENBQWlCLEVBQUUsSUFBSSxFQUFFLFFBQVEsQ0FBQyxNQUFNLENBQUMsRUFDcEQsQ0FBQSxDQUFDLEVBQ0osR0FBRyxDQUFDLElBQUksQ0FBQyxFQUFFO1lBQ1QsSUFBSSxJQUFJLENBQUMsV0FBVyxDQUFDLFVBQVU7Z0JBQUUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxlQUFlLEVBQUUsSUFBSSxDQUFDLENBQUM7WUFDcEUsSUFBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7WUFDckIsSUFBSSxJQUFJLENBQUMsV0FBVyxDQUFDLFVBQVU7Z0JBQUUsT0FBTyxDQUFDLEdBQUcsQ0FBQyw2QkFBNkIsRUFBRSxJQUFJLENBQUMsaUJBQWlCLENBQUMsQ0FBQTtZQUN6RyxJQUFJLFNBQVMsR0FBTyxFQUFFLENBQUM7WUFDekIsU0FBUyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxJQUFJLEVBQUMsWUFBWSxDQUFDLENBQUM7WUFDL0UsSUFBSSxJQUFJLENBQUMsV0FBVyxDQUFDLFVBQVU7Z0JBQUUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxrQ0FBa0MsRUFBRSxTQUFTLEVBQUUsU0FBUyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7WUFDakgsSUFBSSxTQUFTLENBQUMsUUFBUSxDQUFDLElBQUssQ0FBQyxDQUFDLEVBQUMsQ0FBQztnQkFDOUIsSUFBSSxDQUFDLGdCQUFnQixDQUFFLE9BQU8sRUFBQyxPQUFPLEdBQUcsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFFLENBQUM7WUFDOUQsQ0FBQztRQUVILENBQUMsQ0FBQyxDQUNHLENBQUM7SUFDVixDQUFDO0lBRUY7Ozs7OztHQU1EO0lBQ0ssTUFBTSxDQUFDLElBQVk7UUFDbEIseURBQXlEO1FBQ3pELE1BQU0sUUFBUSxHQUFHLEVBQUUsQ0FBQztRQUNwQixJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztRQUNwQixJQUFJLE1BQU0sR0FBRyxHQUFHLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxFQUFFLENBQUM7UUFDdkMsTUFBTSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLENBQUM7UUFFakMsSUFBSSxDQUFDLFdBQVcsR0FBRztZQUNqQixPQUFPLEVBQUUsSUFBSSxXQUFXLENBQUM7Z0JBQ3ZCLGNBQWMsRUFBRSxrQkFBa0I7Z0JBQ2xDLGVBQWUsRUFBRSxJQUFJLENBQUMsT0FBTzthQUU5QixDQUFDO1NBQ0gsQ0FBQTtRQUVELE9BQU8sSUFBSSxDQUFDLElBQUk7YUFDWCxNQUFNLENBQU0sR0FBRyxNQUFNLEVBQUUsRUFBRSxJQUFJLENBQUMsV0FBVyxDQUFDO2FBQzFDLElBQUksQ0FDRCxVQUFVLENBQUMsQ0FBQyxHQUFHLEVBQUUsRUFBRTtZQUNmLE9BQU8sVUFBVSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ3pCLENBQUMsQ0FBQyxFQUVaLEdBQUcsQ0FBQyxDQUFDLFFBQVksRUFBRSxFQUFFLENBQUMsQ0FBaUIsRUFBRSxJQUFJLEVBQUUsUUFBUSxDQUFDLE1BQU0sQ0FBQyxFQUN0RCxDQUFBLENBQUMsRUFFRixHQUFHLENBQUMsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUMsQ0FDbEMsQ0FBQztJQUNWLENBQUM7SUFDSSxXQUFXLENBQUMsSUFBWSxFQUFFLElBQVM7UUFDcEMseURBQXlEO1FBQ3pELE1BQU0sUUFBUSxHQUFHLEVBQUUsQ0FBQztRQUNwQixJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztRQUNwQiwrRUFBK0U7UUFFL0UsSUFBSSxNQUFNLEdBQUcsR0FBRyxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksRUFBRSxDQUFDO1FBQ3ZDLElBQUksQ0FBQyxXQUFXLEdBQUc7WUFDakIsT0FBTyxFQUFFLElBQUksV0FBVyxDQUFDO2dCQUN2QixjQUFjLEVBQUUsa0JBQWtCO2dCQUNsQyxlQUFlLEVBQUUsSUFBSSxDQUFDLE9BQU87YUFFOUIsQ0FBQztTQUNILENBQUE7UUFDRCwrRUFBK0U7UUFDL0UsT0FBTyxJQUFJLENBQUMsSUFBSTthQUNYLElBQUksQ0FBTSxHQUFHLE1BQU0sRUFBRSxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsV0FBVyxDQUFDO2FBQzlDLElBQUksQ0FDRCxVQUFVLENBQUMsQ0FBQyxHQUFHLEVBQUUsRUFBRTtZQUNmLE9BQU8sVUFBVSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ3pCLENBQUMsQ0FBQyxFQUVaLEdBQUcsQ0FBQyxDQUFDLFFBQVksRUFBRSxFQUFFLENBQUMsQ0FBaUIsRUFBRSxJQUFJLEVBQUUsUUFBUSxDQUFDLE1BQU0sQ0FBQyxFQUN0RCxDQUFBLENBQUMsRUFDRixHQUFHLENBQUMsSUFBSSxDQUFDLEVBQUU7WUFDVCxJQUFJLElBQUksQ0FBQyxXQUFXLENBQUMsVUFBVTtnQkFBRSxPQUFPLENBQUMsR0FBRyxDQUFDLGNBQWMsRUFBRSxJQUFJLENBQUMsQ0FBQztZQUNuRSxJQUFJLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQztRQUMvQixDQUFDLENBQUMsQ0FHRyxDQUFDO0lBQ1YsQ0FBQztJQUNNLGFBQWEsQ0FBQyxLQUFLO1FBQ3hCLElBQUksR0FBRyxHQUFHLEtBQUssQ0FBQyxLQUFLLENBQUM7UUFDdEIsMkJBQTJCO1FBQzNCLElBQUksUUFBUSxHQUFHLEdBQUcsQ0FBQyxNQUFNLENBQUMsbUJBQW1CLENBQUMsQ0FBQztRQUMvQyxJQUFJLFFBQVEsSUFBSSxDQUFDLENBQUM7WUFDaEIsR0FBRyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsRUFBRSxFQUFDLGdCQUFnQixFQUFDLHVCQUF1QixDQUFDLENBQUE7UUFDaEUsSUFBSSxXQUFXLEdBQUc7WUFDaEIsR0FBRyxFQUFFLEdBQUc7WUFDUixLQUFLLEVBQUUsT0FBTztZQUNkLElBQUksRUFBRSxJQUFJO1lBQ1YsTUFBTSxFQUFFLElBQUk7WUFDWixNQUFNLEVBQUUsSUFBSSxDQUFDLFNBQVM7WUFDdEIsUUFBUSxFQUFFLElBQUk7U0FDZixDQUFDO1FBQ0YsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBRXJDLENBQUM7SUFFSSxJQUFJLENBQUMsTUFBVSxFQUFFLElBQVksRUFBRSxJQUFTO1FBQzNDLHlEQUF5RDtRQUN6RCxNQUFNLFFBQVEsR0FBRyxFQUFFLENBQUM7UUFDcEIsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7UUFDdEIsbUNBQW1DO1FBQ25DLCtDQUErQztRQUMvQyxvQ0FBb0M7UUFDcEMscUVBQXFFO1FBQ3JFLElBQUksU0FBUyxHQUFPLEVBQUUsQ0FBQztRQUN2QixTQUFTLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLGdCQUFnQixFQUFFLElBQUksRUFBQyxXQUFXLENBQUMsQ0FBQztRQUM3RSxJQUFJLElBQUksQ0FBQyxXQUFXLENBQUMsVUFBVTtZQUFFLE9BQU8sQ0FBQyxHQUFHLENBQUMsMEJBQTBCLEVBQUUsU0FBUyxFQUFFLFNBQVMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO1FBQ3pHLElBQUksU0FBUyxDQUFDLFFBQVEsQ0FBQyxJQUFLLENBQUMsQ0FBQyxFQUFDLENBQUM7WUFDOUIsSUFBSSxJQUFJLENBQUMsV0FBVyxDQUFDLFVBQVU7Z0JBQUUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDO1lBQ3BFLElBQUksQ0FBQyxnQkFBZ0IsQ0FBRSxPQUFPLEVBQUMsT0FBTyxHQUFHLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBRSxDQUFDO1lBQzVELElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLEdBQUcsRUFBRSxDQUFDO1FBQ3RCLENBQUM7UUFFQyxJQUFJLE1BQU0sR0FBRyxHQUFHLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxFQUFFLENBQUM7UUFDdkMsTUFBTSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDakMsSUFBSSxDQUFDLFdBQVcsR0FBRztZQUNqQixPQUFPLEVBQUUsSUFBSSxXQUFXLENBQUM7Z0JBQ3ZCLGNBQWMsRUFBRSxrQkFBa0I7Z0JBQ2xDLGVBQWUsRUFBRSxJQUFJLENBQUMsT0FBTzthQUU5QixDQUFDO1NBQ0gsQ0FBQTtRQUNELE9BQU8sQ0FBQyxHQUFHLENBQUMsY0FBYyxFQUFFLE1BQU0sRUFBRSxPQUFPLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDbkQsd0ZBQXdGO1FBQ3hGLGlHQUFpRztRQUNqRyxPQUFPLElBQUksQ0FBQyxJQUFJO2FBQ1gsSUFBSSxDQUFNLEdBQUcsTUFBTSxFQUFFLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQyxXQUFXLENBQUM7YUFDOUMsSUFBSSxDQUNELFVBQVUsQ0FBQyxDQUFDLEdBQUcsRUFBRSxFQUFFO1lBQ3ZCLE9BQU8sQ0FBQyxHQUFHLENBQUMsb0JBQW9CLEVBQUUsU0FBUyxDQUFDLEtBQUssQ0FBQyxFQUFFLGNBQWMsRUFBRSxHQUFHLENBQUMsS0FBSyxDQUFHLENBQUE7WUFDaEYsSUFBSyxDQUFDLE9BQU8sU0FBUyxDQUFDLEtBQUssQ0FBQyxJQUFJLFdBQVcsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsQ0FBQyxFQUFFLENBQUM7Z0JBQzVFLGtDQUFrQztnQkFDaEMsSUFBSSxPQUFPLEdBQUcsQ0FBQyxLQUFLLElBQUksV0FBVyxFQUFDLENBQUM7b0JBQ25DLEdBQUcsR0FBRyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUM7Z0JBQ3pCLENBQUM7O29CQUVDLEdBQUcsQ0FBQyxLQUFLLENBQUMsS0FBSyxHQUFJLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUN4QyxDQUFDO1lBQ0ssSUFBSSxDQUFDLGFBQWEsQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDNUIsT0FBTyxVQUFVLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDekIsQ0FBQyxDQUFDLEVBRVYsR0FBRyxDQUFDLENBQUMsUUFBWSxFQUFFLEVBQUUsQ0FBQyxDQUFpQixFQUFFLElBQUksRUFBRSxRQUFRLENBQUMsTUFBTSxDQUFDLEVBQ3hELENBQUEsQ0FBQyxFQUNGLEdBQUcsQ0FBQyxJQUFJLENBQUMsRUFBRTtZQUNULHFFQUFxRTtZQUNyRSxJQUFJLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQztZQUMzQixJQUFJLElBQUksQ0FBQyxXQUFXLENBQUMsVUFBVTtnQkFBRSxPQUFPLENBQUMsR0FBRyxDQUFDLDZCQUE2QixFQUFFLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxDQUFBO1lBQzdGLElBQUksQ0FBQyxRQUFRLEdBQUcsQ0FBQyxDQUFDO1lBQ3hCLElBQUksU0FBUyxHQUFPLEVBQUUsQ0FBQztZQUNqQixTQUFTLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLGlCQUFpQixFQUFFLElBQUksRUFBQyxZQUFZLENBQUMsQ0FBQztZQUMvRSxJQUFJLElBQUksQ0FBQyxXQUFXLENBQUMsVUFBVTtnQkFBRSxPQUFPLENBQUMsR0FBRyxDQUFDLDJCQUEyQixFQUFFLFNBQVMsRUFBRSxTQUFTLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQTtZQUN6RyxJQUFJLFNBQVMsQ0FBQyxRQUFRLENBQUMsSUFBSyxDQUFDLENBQUMsRUFBQyxDQUFDO2dCQUM5QixJQUFJLENBQUMsZ0JBQWdCLENBQUUsT0FBTyxFQUFDLE9BQU8sR0FBRyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUUsQ0FBQztZQUM5RCxDQUFDO1FBSVQsQ0FBQyxDQUFDLENBR0MsQ0FBQztJQUNWLENBQUM7SUFHQyxxREFBcUQ7SUFDaEQsVUFBVSxDQUFDLElBQVksRUFBRSxJQUFTO1FBQ3JDLHlEQUF5RDtRQUN6RCxNQUFNLFFBQVEsR0FBRyxFQUFFLENBQUM7UUFDcEIsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7UUFFcEIsSUFBSSxNQUFNLEdBQUcsSUFBSSxDQUFDO1FBQ2xCLElBQUksQ0FBQyxXQUFXLEdBQUc7WUFDakIsT0FBTyxFQUFFLElBQUksV0FBVyxDQUFDO2dCQUN2QixlQUFlLEVBQUUsSUFBSSxDQUFDLE9BQU87YUFFOUIsQ0FBQztTQUNILENBQUE7UUFDRCwrRUFBK0U7UUFDL0UsT0FBTyxJQUFJLENBQUMsSUFBSTthQUNYLElBQUksQ0FBTSxHQUFHLE1BQU0sRUFBRSxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsV0FBVyxDQUFDO2FBQzlDLElBQUksQ0FDRCxVQUFVLENBQUMsQ0FBQyxHQUFHLEVBQUUsRUFBRTtZQUNmLE9BQU8sVUFBVSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ3pCLENBQUMsQ0FBQyxFQUVWLEdBQUcsQ0FBQyxDQUFDLFFBQVksRUFBRSxFQUFFLENBQUMsQ0FBaUIsRUFBRSxJQUFJLEVBQUUsUUFBUSxDQUFDLE1BQU0sQ0FBQyxFQUN4RCxDQUFBLENBQUMsRUFFRixHQUFHLENBQUMsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUMsQ0FDbEMsQ0FBQztJQUNWLENBQUM7SUFDRCxxREFBcUQ7SUFFckQsVUFBVSxDQUFDLElBQVMsRUFBRSxRQUFtQixFQUFFLEVBQU87UUFDaEQsUUFBUSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsRUFBRTtZQUN0Qiw2Q0FBNkM7WUFDN0MsTUFBTSxRQUFRLEdBQWEsSUFBSSxRQUFRLEVBQUUsQ0FBQztZQUMxQyxRQUFRLENBQUMsTUFBTSxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsQ0FBQztZQUM5QixRQUFRLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxFQUFFLENBQUMsQ0FBQztZQUMxQixJQUFJLElBQUksQ0FBQyxXQUFXLENBQUMsVUFBVTtnQkFBRSxPQUFPLENBQUMsR0FBRyxDQUFDLGtCQUFrQixHQUFHLElBQUksQ0FBQyxDQUFBO1lBQ3ZFLElBQUksTUFBTSxHQUFHLElBQUksQ0FBQyxVQUFVLEdBQUcsVUFBVSxHQUFHLElBQUksQ0FBQztZQUNqRCxJQUFJLElBQUksQ0FBQyxXQUFXLENBQUMsVUFBVTtnQkFBRSxPQUFPLENBQUMsR0FBRyxDQUFDLFNBQVMsR0FBRyxNQUFNLENBQUMsQ0FBQztZQUUvRCxJQUFJLElBQUksQ0FBQyxXQUFXLENBQUMsVUFBVTtnQkFBRSxPQUFPLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQ3pELG9FQUFvRTtZQUVsRSxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sRUFBRSxRQUFRLENBQUMsQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLEVBQUU7Z0JBQ3JELElBQUksSUFBSSxDQUFDLFdBQVcsQ0FBQyxVQUFVO29CQUFFLE9BQU8sQ0FBQyxHQUFHLENBQUMsUUFBUSxFQUFFLE1BQU0sQ0FBQyxDQUFDO1lBQ2pFLENBQUMsQ0FBQyxDQUFDO1FBQ0QsQ0FBQyxDQUFDLENBQUM7SUFHVixDQUFDO0lBRUEsYUFBYSxDQUFDLElBQVU7UUFDdEIsTUFBTSxRQUFRLEdBQWEsSUFBSSxRQUFRLEVBQUUsQ0FBQztRQUMxQyxRQUFRLENBQUMsTUFBTSxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFxQywyQkFBMkI7UUFDOUYsUUFBUSxDQUFDLE1BQU0sQ0FBQyxtQkFBbUIsRUFBRSxLQUFLLENBQUMsQ0FBQyxDQUFPLHlFQUF5RTtRQUM1SCxJQUFJLE1BQU0sR0FBRyxJQUFJLENBQUMsVUFBVSxHQUFHLGVBQWUsQ0FBQztRQUMvQyxJQUFJLElBQUksQ0FBQyxXQUFXLENBQUMsVUFBVTtZQUFFLE9BQU8sQ0FBQyxHQUFHLENBQUMsU0FBUyxHQUFHLE1BQU0sQ0FBQyxDQUFDO1FBRWpFLElBQUksSUFBSSxDQUFDLFdBQVcsQ0FBQyxVQUFVO1lBQUUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUN2RCxRQUFRLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUdsRSxvR0FBb0c7UUFFcEcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLEVBQUUsUUFBUSxDQUFDLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxFQUFFO1lBQ25ELElBQUksSUFBSSxDQUFDLFdBQVcsQ0FBQyxVQUFVO2dCQUFFLE9BQU8sQ0FBQyxHQUFHLENBQUMsUUFBUSxFQUFFLE1BQU0sQ0FBQyxDQUFDO1FBQ2pFLENBQUMsQ0FBQyxDQUFDO1FBQ0g7Ozs7Ozs7O1NBUUM7SUFFSixDQUFDO0lBR0EscURBQXFEO0lBQzVDLFVBQVU7UUFDYixPQUFPLE9BQU8sQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sSUFBSSxJQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sSUFBSSxJQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ3JHLENBQUM7SUFDSyxTQUFTLENBQUMsTUFBVSxFQUFFLElBQVE7UUFDaEMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUNuQixnR0FBZ0c7UUFDL0YsT0FBTyxJQUFJLENBQUM7SUFDZCxDQUFDO0lBTUUsZ0JBQWdCLENBQUMsU0FBYyxFQUFFLEdBQVE7UUFFNUMsSUFBSSxTQUFTLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQztRQUUvQixJQUFJLFNBQVMsSUFBSSxPQUFPO1lBQ3RCLFNBQVMsR0FBRyxJQUFJLENBQUM7UUFDakIsSUFBSSxDQUFDLG1CQUFtQixDQUFDLElBQUksQ0FBQztZQUMxQixPQUFPLEVBQUUsR0FBRztZQUNaLFFBQVEsRUFBRSxxQkFBcUI7WUFDL0IsU0FBUyxFQUFFLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsR0FBRyxFQUFFO1lBQzFDLFFBQVEsRUFBRSxFQUFFLFVBQVUsRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRTtZQUNsRSw2Q0FBNkM7WUFDdkMsSUFBSSxFQUFFLEVBQUUsS0FBSyxFQUFFLFNBQVMsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFO1lBQ2hDLGlCQUFpQjtZQUNqQixTQUFTLEVBQUUsU0FBUztTQUN2QixDQUFDLENBQUM7SUFDUCxDQUFDO0lBQ0ksV0FBVyxDQUFDLE1BQVcsRUFBRSxNQUFXO1FBRXJDLElBQUksR0FBRyxDQUFDO1FBRVosSUFBSSxNQUFNLENBQUMsV0FBVyxDQUFDLFVBQVU7WUFBRSxPQUFPLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ3ZELElBQUksTUFBTSxDQUFDLFdBQVcsQ0FBQyxVQUFVO1lBQUUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxvQkFBb0IsR0FBRyxNQUFNLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDekYsSUFBSSxNQUFNLENBQUMsV0FBVyxDQUFDLFVBQVU7WUFBRSxPQUFPLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO1FBRTFFLElBQUksTUFBTSxJQUFJLE9BQU8sRUFBRSxDQUFDO1lBQ2xCLE1BQU0sQ0FBQyxVQUFVLEdBQUcsQ0FBQyxDQUFDO1FBQ3hCLENBQUM7YUFDQSxJQUFJLE1BQU0sSUFBSSxNQUFNLEVBQUUsQ0FBQztZQUMxQixNQUFNLENBQUMsVUFBVSxHQUFHLE1BQU0sQ0FBQyxrQkFBa0IsQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDO1FBQ3RELENBQUM7YUFDQSxJQUFJLE1BQU0sSUFBSSxNQUFNLEVBQUUsQ0FBQztZQUN0QixJQUFJLE1BQU0sQ0FBQyxVQUFVLEdBQUcsTUFBTSxDQUFDLGtCQUFrQixDQUFDLEtBQUssR0FBRyxDQUFDO2dCQUMzRCxNQUFNLENBQUMsVUFBVSxHQUFHLE1BQU0sQ0FBQyxVQUFVLEdBQUcsQ0FBQyxDQUFDO1FBQzVDLENBQUM7YUFDQSxJQUFJLE1BQU0sSUFBSSxNQUFNLEVBQUUsQ0FBQztZQUMxQixJQUFJLE1BQU0sQ0FBQyxVQUFVLEdBQUcsQ0FBQztnQkFDbkIsTUFBTSxDQUFDLFVBQVUsR0FBRyxNQUFNLENBQUMsVUFBVSxHQUFHLENBQUMsQ0FBQztRQUM5QyxDQUFDO2FBQ0UsSUFBSSxPQUFPLE1BQU0sSUFBSSxRQUFRLEVBQUUsQ0FBQztZQUM3QixNQUFNLENBQUMsVUFBVSxHQUFHLE1BQU0sQ0FBQztRQUMvQixDQUFDO1FBRUgsR0FBRyxHQUFHLE1BQU0sQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQzVELElBQUksTUFBTSxDQUFDLFdBQVcsQ0FBQyxVQUFVO1lBQUUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxZQUFZLEVBQUUsR0FBRyxDQUFDLENBQUM7UUFDbEUsSUFBSSxNQUFNLENBQUMsV0FBVyxDQUFDLFVBQVU7WUFBRSxPQUFPLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FBQztRQUMxRSxJQUFJLE9BQU8sR0FBRyxLQUFLLFdBQVcsRUFBRSxDQUFDO1lBQzNCLE1BQU0sQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQzVCLE1BQU0sQ0FBQyxJQUFJLENBQUMsY0FBYyxFQUFFLENBQUM7WUFDN0IsTUFBTSxDQUFDLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQztZQUU5QiwwRkFBMEY7WUFDMUYsSUFBSSxNQUFNLENBQUMsd0JBQXdCLElBQUksSUFBSTtnQkFDekMsTUFBTSxDQUFDLG1CQUFtQixDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUM7WUFDakUsSUFBSSxNQUFNLENBQUMsV0FBVyxDQUFDLFVBQVU7Z0JBQUUsT0FBTyxDQUFDLEdBQUcsQ0FBQyw4QkFBOEIsRUFBRSxNQUFNLENBQUMsZ0JBQWdCLENBQUMsQ0FBQTtZQUN2RyxJQUFJLE9BQU8sTUFBTSxDQUFDLGdCQUFnQixLQUFLLFdBQVc7Z0JBQzVDLE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNqQyxDQUFDOztZQUVDLE1BQU0sQ0FBQyxvQkFBb0IsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7SUFFM0MsQ0FBQztJQUNJLFFBQVEsQ0FBQyxNQUFXLEVBQUUsTUFBVTtRQUNyQyxJQUFJLE9BQU8sTUFBTSxDQUFDLGtCQUFrQixJQUFJLFdBQVcsRUFBRSxDQUFDO1lBQ2hELElBQUksSUFBSSxDQUFDLFdBQVcsQ0FBQyxVQUFVO2dCQUFFLE9BQU8sQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUNwRSxJQUFJLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxJQUFJLElBQUksRUFBRSxDQUFDO2dCQUMxQixJQUFJLFdBQVcsR0FBRztvQkFDaEIsR0FBRyxFQUFFLElBQUksQ0FBQyxjQUFjO29CQUM1QixLQUFLLEVBQUUsSUFBSSxDQUFDLGdCQUFnQjtvQkFDeEIsSUFBSSxFQUFFLE1BQU07b0JBQ2hCLE1BQU0sRUFBRSxNQUFNO29CQUNkLE1BQU0sRUFBRSxJQUFJLENBQUMsWUFBWTtvQkFDekIsUUFBUSxFQUFFLElBQUksQ0FBQyxXQUFXO2lCQUMzQixDQUFDO2dCQUNJLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxXQUFXLENBQUMsQ0FBQztZQUN2QyxDQUFDO2lCQUNBLENBQUM7Z0JBQ0osSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLEVBQUUsTUFBTSxDQUFDLENBQUM7WUFDL0IsQ0FBQztRQUNILENBQUM7SUFFSCxDQUFDO0lBRUUsZ0JBQWdCLENBQUMsV0FBZTtRQUNqQyxJQUFJLFlBQVksQ0FBQztRQUNmLE1BQU0sTUFBTSxHQUFjLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDO1lBQzlDLEtBQUssRUFBRSxXQUFXLENBQUMsS0FBSztZQUN4QixPQUFPLEVBQUUsV0FBVyxDQUFDLEdBQUc7WUFDeEIsT0FBTyxFQUFFLFdBQVcsQ0FBQyxNQUFNO1lBQzNCLEtBQUssRUFBRSxHQUFHO1lBQ1YsTUFBTSxFQUFFLEdBQUc7WUFDWCxRQUFRLEVBQUUsR0FBRztTQUNoQixDQUFDLENBQUM7UUFFSCxNQUFNLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxDQUFDLE1BQU0sRUFBRSxFQUFFO1lBQy9CLElBQUksTUFBTSxZQUFZLGlCQUFpQixFQUFFLENBQUM7Z0JBQ3RDLElBQUksSUFBSSxDQUFDLFdBQVcsQ0FBQyxVQUFVO29CQUFFLE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUM7WUFDMUQsQ0FBQztpQkFBTSxDQUFDO2dCQUNKLElBQUksSUFBSSxDQUFDLFdBQVcsQ0FBQyxVQUFVO29CQUFFLE9BQU8sQ0FBQyxHQUFHLENBQUMsUUFBUSxFQUFFLE1BQU0sQ0FBQyxDQUFDO1lBQ25FLENBQUM7WUFDRCxZQUFZLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7WUFDMUQsSUFBSSxZQUFZLENBQUMsT0FBTyxJQUFJLElBQUksRUFBRSxDQUFDO2dCQUN6QixJQUFJLFdBQVcsQ0FBQyxjQUFjLENBQUMsVUFBVSxDQUFDLEVBQUUsQ0FBQztvQkFDM0MsV0FBVyxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsSUFBSSxFQUFFLFdBQVcsQ0FBQyxNQUFNLENBQUMsQ0FBQztnQkFDN0QsQ0FBQztZQUNILENBQUM7UUFDTCxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFFRCxnREFBZ0Q7SUFDN0MsaUJBQWlCLENBQUMsSUFBUyxFQUFFLE1BQVU7UUFDeEMsSUFBSSxJQUFJLENBQUMsV0FBVyxDQUFDLFVBQVU7WUFBRSxPQUFPLENBQUMsR0FBRyxDQUFDLDhDQUE4QyxDQUFDLENBQUM7UUFDakcsSUFBSSxJQUFJLENBQUMsV0FBVyxDQUFDLFVBQVU7WUFBRSxPQUFPLENBQUMsR0FBRyxDQUFDLGtCQUFrQixHQUFHLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQTtRQUM5RSwwRUFBMEU7UUFDMUUsMkRBQTJEO1FBQy9ELElBQUksT0FBTyxNQUFNLENBQUMsSUFBSSxLQUFLLFdBQVcsRUFBRSxDQUFDO1lBQ3ZDLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLElBQUksSUFBSSxDQUFDLEVBQUUsQ0FBQztnQkFDekQsSUFBSSxXQUFXLEdBQUc7b0JBQ2hCLEdBQUcsRUFBRSxJQUFJLENBQUMsY0FBYztvQkFDNUIsS0FBSyxFQUFFLElBQUksQ0FBQyxnQkFBZ0I7b0JBQ3hCLElBQUksRUFBRSxJQUFJO29CQUNkLE1BQU0sRUFBRSxNQUFNO29CQUNkLE1BQU0sRUFBRSxJQUFJLENBQUMsWUFBWTtvQkFDekIsUUFBUSxFQUFFLElBQUksQ0FBQyxvQkFBb0I7aUJBQ3BDLENBQUM7Z0JBQ0ksSUFBSSxDQUFDLGdCQUFnQixDQUFDLFdBQVcsQ0FBQyxDQUFDO1lBQ3ZDLENBQUM7aUJBQ0EsQ0FBQztnQkFDSixJQUFJLENBQUMsb0JBQW9CLENBQUMsSUFBSSxFQUFFLE1BQU0sQ0FBQyxDQUFDO1lBQ3RDLENBQUM7UUFDSCxDQUFDO2FBQ0EsQ0FBQztZQUNKLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxJQUFJLEVBQUUsTUFBTSxDQUFDLENBQUM7UUFDdEMsQ0FBQztJQUNILENBQUM7SUFDTCx1SEFBdUg7SUFFaEgsV0FBVyxDQUFDLElBQVM7UUFDMUIsZ0VBQWdFO1FBQzVELE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxFQUFFO1lBQzFCLElBQUksSUFBSSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUN6QiwrRUFBK0U7WUFDM0UsMkNBQTJDO1lBQzNDLGVBQWU7WUFDbkIsSUFBSSxPQUFPLElBQUksSUFBSSxRQUFRLEVBQUUsQ0FBQyxDQUFHLGdDQUFnQztnQkFDL0QsSUFBSSxDQUFDLElBQUksSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQztvQkFDcEMsTUFBTSxJQUFJLEdBQUcsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7b0JBQzVCLElBQUksU0FBUyxHQUFHLEtBQUssQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO29CQUN0RCxJQUFJLE9BQU8sR0FBRyxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7b0JBQ2pDLElBQUksSUFBSSxDQUFDLFdBQVcsQ0FBQyxVQUFVO3dCQUFFLE9BQU8sQ0FBQyxHQUFHLENBQUMsVUFBVSxFQUFFLE9BQU8sRUFBRSxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztvQkFDOUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLE9BQU8sR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO3dCQUNuRCxJQUFJLElBQUksQ0FBQyxXQUFXLENBQUMsVUFBVTs0QkFBRSxPQUFPLENBQUMsR0FBRyxDQUFDLGNBQWMsQ0FBQyxDQUFDO3dCQUM3RCxrRkFBa0Y7d0JBQ2xGLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUM7b0JBQ25CLENBQUM7Z0JBQ0gsQ0FBQztZQUNILENBQUM7UUFDSCxDQUFDLENBQUMsQ0FBQztRQUNQLGlFQUFpRTtRQUM3RCxPQUFPLElBQUksQ0FBQztJQUNkLENBQUM7SUFDRSxZQUFZLENBQUMsTUFBVSxFQUFFLElBQVM7UUFDdkMsSUFBSSxJQUFJLENBQUMsV0FBVyxDQUFDLFVBQVU7WUFBRSxPQUFPLENBQUMsR0FBRyxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsQ0FBQTtRQUN0RCxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsRUFBRTtZQUMxQixJQUFJLENBQUMsR0FBRyxHQUFHLENBQUMsV0FBVyxFQUFFLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBQy9DLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFLENBQUM7Z0JBQ1IsSUFBSSxPQUFPLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO2dCQUN2QixJQUFJLElBQUksR0FBRyxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztnQkFDL0IsMkJBQTJCO2dCQUMzQixJQUFJLE9BQU8sR0FBRyxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7Z0JBQzdCLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxPQUFPLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQztvQkFDckMsa0ZBQWtGO29CQUNsRixnQ0FBZ0M7b0JBQ3JDLE9BQU8sR0FBRyxVQUFVLENBQUMsT0FBTyxFQUFFLE1BQU0sQ0FBQyxXQUFXLENBQUMsVUFBVSxFQUFFLE1BQU0sQ0FBQyxXQUFXLENBQUMsVUFBVSxDQUFDLENBQUE7b0JBQ3RGLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxPQUFPLENBQUM7Z0JBQ3RCLENBQUM7WUFDSCxDQUFDO1FBQ0gsQ0FBQyxDQUFDLENBQUM7UUFDSCxPQUFPLElBQUksQ0FBQztJQUNkLENBQUM7SUFDQSxvQkFBb0IsQ0FBQyxXQUFrQixFQUFFLFFBQStCO1FBQzVFLFNBQVMsd0JBQXdCLENBQUMsV0FBa0IsRUFBRSxRQUErQjtZQUNqRix5REFBeUQ7WUFDekQsSUFBSSxlQUFlLEdBQVcsNEJBQTRCLENBQUM7WUFDM0QsSUFBSSxZQUFZLEdBQVcsZUFBZSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztZQUU3RCxnREFBZ0Q7WUFDaEQsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO2dCQUNoQixPQUFPO29CQUNILFFBQVEsRUFBRSxXQUFXO29CQUNyQixNQUFNLEVBQUUsV0FBVztvQkFDbkIsUUFBUSxFQUFFLEtBQUs7b0JBQ2YsT0FBTyxFQUFFLGdEQUFnRDtvQkFDekQsY0FBYyxFQUFFLEVBQUU7aUJBQ3JCLENBQUM7WUFDTixDQUFDO1lBRUQsbURBQW1EO1lBQ25ELGVBQWUsQ0FBQyxTQUFTLEdBQUcsQ0FBQyxDQUFDO1lBRTlCLDRCQUE0QjtZQUM1QixJQUFJLFNBQVMsR0FBRyxJQUFJLEdBQUcsRUFBVSxDQUFDO1lBQ2xDLElBQUksS0FBSyxDQUFDO1lBQ1YsT0FBTyxDQUFDLEtBQUssR0FBRyxlQUFlLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLEtBQUssSUFBSSxFQUFFLENBQUM7Z0JBQzFELFNBQVMsQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxrQ0FBa0M7WUFDL0QsQ0FBQztZQUVELGdDQUFnQztZQUNoQyxJQUFJLFlBQVksR0FBRyxXQUFXLENBQUM7WUFDL0IsSUFBSSxZQUFZLEdBQUcsRUFBRSxDQUFDO1lBQ3RCLElBQUksZ0JBQWdCLEdBQUcsRUFBRSxDQUFDO1lBRTFCLFNBQVMsQ0FBQyxPQUFPLENBQUMsWUFBWSxDQUFDLEVBQUU7Z0JBQzdCLDJFQUEyRTtnQkFDM0UsSUFBSSxHQUFHLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxJQUFJLENBQ2hDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLFdBQVcsRUFBRSxLQUFLLFlBQVksQ0FBQyxXQUFXLEVBQUUsQ0FDdEQsQ0FBQztnQkFDRixPQUFPLENBQUMsR0FBRyxDQUFDLHVCQUF1QixFQUFHLFlBQVksRUFBRSxjQUFjLEVBQUUsR0FBRyxFQUFHLFdBQVcsRUFBRSxRQUFRLENBQUMsQ0FBQztnQkFDakcsSUFBSSxHQUFHLEtBQUssU0FBUyxJQUFJLFFBQVEsQ0FBQyxHQUFHLENBQUMsS0FBSyxTQUFTLElBQUksUUFBUSxDQUFDLEdBQUcsQ0FBQyxLQUFLLElBQUksRUFBRSxDQUFDO29CQUM3RSxJQUFJLEtBQUssR0FBRyxRQUFRLENBQUMsR0FBRyxDQUFDLENBQUM7b0JBQzFCLDRCQUE0QjtvQkFDNUIsSUFBSSxjQUFjLENBQUM7b0JBRW5CLElBQUksT0FBTyxLQUFLLEtBQUssUUFBUSxFQUFFLENBQUM7d0JBQzVCLGtDQUFrQzt3QkFDbEMsSUFBSSxZQUFZLEdBQUcsS0FBSyxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUM7d0JBQzdDLGNBQWMsR0FBRyxJQUFJLFlBQVksR0FBRyxDQUFDO29CQUN6QyxDQUFDO3lCQUFNLElBQUksT0FBTyxLQUFLLEtBQUssUUFBUSxFQUFFLENBQUM7d0JBQ25DLGNBQWMsR0FBRyxLQUFLLENBQUMsUUFBUSxFQUFFLENBQUM7b0JBQ3RDLENBQUM7eUJBQU0sSUFBSSxLQUFLLFlBQVksSUFBSSxFQUFFLENBQUM7d0JBQy9CLGlDQUFpQzt3QkFDakMsSUFBSSxJQUFJLEdBQUcsS0FBSyxDQUFDLFdBQVcsRUFBRSxDQUFDO3dCQUMvQixJQUFJLEtBQUssR0FBRyxNQUFNLENBQUMsS0FBSyxDQUFDLFFBQVEsRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUM7d0JBQzFELElBQUksR0FBRyxHQUFHLE1BQU0sQ0FBQyxLQUFLLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDO3dCQUNuRCxjQUFjLEdBQUcsSUFBSSxJQUFJLElBQUksS0FBSyxJQUFJLEdBQUcsR0FBRyxDQUFDO29CQUNqRCxDQUFDO3lCQUFNLElBQUksT0FBTyxLQUFLLEtBQUssU0FBUyxFQUFFLENBQUM7d0JBQ3BDLGNBQWMsR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDO29CQUN2QyxDQUFDO3lCQUFNLENBQUM7d0JBQ0osK0NBQStDO3dCQUMvQyxjQUFjLEdBQUcsSUFBSSxNQUFNLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQztvQkFDMUMsQ0FBQztvQkFFRCwyQ0FBMkM7b0JBQzNDLElBQUksYUFBYSxHQUFHLElBQUksTUFBTSxDQUFDLElBQUksWUFBWSxLQUFLLEVBQUUsR0FBRyxDQUFDLENBQUM7b0JBQzNELFlBQVksR0FBRyxZQUFZLENBQUMsT0FBTyxDQUFDLGFBQWEsRUFBRSxjQUFjLENBQUMsQ0FBQztvQkFFbkUsWUFBWSxDQUFDLFlBQVksQ0FBQyxHQUFHO3dCQUN6QixRQUFRLEVBQUUsSUFBSSxZQUFZLEVBQUU7d0JBQzVCLFlBQVksRUFBRSxjQUFjO3dCQUM1QixLQUFLLEVBQUUsS0FBSzt3QkFDWixJQUFJLEVBQUUsT0FBTyxLQUFLO3FCQUNyQixDQUFDO2dCQUNOLENBQUM7cUJBQU0sQ0FBQztvQkFDSixnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7b0JBQ3BDLHVDQUF1QztnQkFDM0MsQ0FBQztZQUNMLENBQUMsQ0FBQyxDQUFDO1lBRUgsT0FBTztnQkFDSCxRQUFRLEVBQUUsV0FBVztnQkFDckIsTUFBTSxFQUFFLFlBQVk7Z0JBQ3BCLFFBQVEsRUFBRSxJQUFJO2dCQUNkLFlBQVksRUFBRSxZQUFZO2dCQUMxQixjQUFjLEVBQUUsS0FBSyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUM7Z0JBQ3JDLGdCQUFnQixFQUFFLGdCQUFnQjtnQkFDbEMsT0FBTyxFQUFFLGdCQUFnQixDQUFDLE1BQU0sR0FBRyxDQUFDO29CQUNoQyxDQUFDLENBQUMsNkJBQTZCLGdCQUFnQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRTtvQkFDNUQsQ0FBQyxDQUFDLHFDQUFxQzthQUM5QyxDQUFDO1FBQ04sQ0FBQztRQUNELGlFQUFpRTtRQUMvRCxJQUFJLGNBQWMsR0FBRyxXQUFXLENBQUMsV0FBVyxFQUFFLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQ25FLElBQUksWUFBWSxHQUFHLHlCQUF5QixDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUUvRCxpRUFBaUU7UUFDakUsSUFBSSxjQUFjLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztZQUNsQyxPQUFPO2dCQUNILFFBQVEsRUFBRSxXQUFXO2dCQUNyQixNQUFNLEVBQUUsV0FBVztnQkFDbkIsZ0JBQWdCLEVBQUUsS0FBSztnQkFDdkIsSUFBSSxFQUFFLHVCQUF1QjtnQkFDN0IsT0FBTyxFQUFFLHlEQUF5RDthQUNyRSxDQUFDO1FBQ04sQ0FBQztRQUVELHNDQUFzQztRQUN0QyxJQUFJLGlCQUFpQixHQUFHLHdCQUF3QixDQUFDLFdBQVcsRUFBRSxRQUFRLENBQUMsQ0FBQztRQUV4RSxPQUFPO1lBQ0gsR0FBRyxpQkFBaUI7WUFDcEIsZ0JBQWdCLEVBQUUsaUJBQWlCLENBQUMsUUFBUTtZQUM1QyxJQUFJLEVBQUUsaUJBQWlCLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLENBQUMsY0FBYztTQUN2RSxDQUFDO0lBQ04sQ0FBQztJQUNNLHFCQUFxQixDQUFDLE1BQU0sRUFBRSxjQUFjO1FBQ2pELElBQUksSUFBSSxDQUFDLGFBQWEsQ0FBQyxlQUFlLENBQUMsSUFBSSxXQUFXLEVBQUMsQ0FBQztZQUN0RCxJQUFJLENBQUMsYUFBYSxDQUFDLGVBQWUsQ0FBQyxHQUFHLEVBQUUsQ0FBQztZQUN6QyxJQUFJLE9BQU8sR0FBRyxFQUFFLENBQUE7WUFDaEIsS0FBSyxJQUFJLENBQUMsR0FBRSxDQUFDLEVBQUcsQ0FBQyxHQUFFLE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLEVBQUMsQ0FBQyxFQUFFLEVBQUMsQ0FBQztnQkFDbkQsT0FBTyxDQUFDLE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLENBQUE7WUFDaEUsQ0FBQztZQUNELElBQUksQ0FBQyxhQUFhLENBQUMsZUFBZSxDQUFDLEdBQUcsT0FBTyxDQUFDO1FBQ2hELENBQUM7UUFDRCxJQUFJLE1BQU0sR0FBRyxJQUFJLENBQUMsb0JBQW9CLENBQUMsY0FBYyxFQUFFLElBQUksQ0FBQyxhQUFhLENBQUMsZUFBZSxDQUFDLENBQUUsQ0FBQztRQUMzRixJQUFJLE1BQU0sQ0FBQyxnQkFBZ0IsSUFBSSxJQUFJLEVBQUUsQ0FBQztZQUNwQyxJQUFJLE1BQU0sQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFFLDBCQUEwQixDQUFDO2dCQUN4RCxjQUFjLEdBQUcsRUFBRSxDQUFDOztnQkFFcEIsY0FBYyxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUM7UUFDbkMsQ0FBQztRQUNELE9BQU8sQ0FBQyxHQUFHLENBQUUsd0NBQXdDLEVBQUUsTUFBTSxFQUFFLGNBQWMsQ0FBRSxDQUFDO1FBQ2xGLElBQUksQ0FBQyxhQUFhLENBQUMsZUFBZSxDQUFDLEdBQUcsRUFBRSxDQUFDO1FBQ3pDLE9BQU8sY0FBYyxDQUFDO0lBQ3hCLENBQUM7SUFDTSwwQkFBMEIsQ0FBQyxNQUFNLEVBQUMsSUFBSTtRQUMzQyxJQUFJLFNBQVMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDO1FBQzNCLElBQUksT0FBTyxNQUFNLENBQUMsZUFBZSxLQUFLLFdBQVcsRUFBQyxDQUFDO1lBQ2pELEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxNQUFNLENBQUMsZUFBZSxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDO2dCQUNyRCxTQUFTLENBQUMsTUFBTSxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ2hHLENBQUM7UUFDSCxDQUFDO1FBQ0QsSUFBSSxPQUFPLE1BQU0sQ0FBQyxvQkFBb0IsS0FBSyxXQUFXLEVBQUMsQ0FBQztZQUN0RCxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsTUFBTSxDQUFDLG9CQUFvQixDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDO2dCQUMxRCxTQUFTLENBQUMsTUFBTSxDQUFDLG9CQUFvQixDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLG9CQUFvQixDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUMxRyxDQUFDO1FBQ0gsQ0FBQztRQUNELE9BQU8sSUFBSSxDQUFDO0lBQ2IsQ0FBQztJQUNLLDJCQUEyQixDQUFDLE1BQU0sRUFBRSxNQUFNO1FBQy9DLElBQUksT0FBTyxNQUFNLENBQUMsZUFBZSxLQUFLLFdBQVcsRUFBQyxDQUFDO1lBQ2hELEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxNQUFNLENBQUMsZUFBZSxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDO2dCQUN4RCxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQztvQkFDeEMsSUFBSSxDQUFDO3dCQUNILE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztvQkFDcEcsQ0FBQztvQkFBQyxPQUFPLENBQUMsRUFBRSxDQUFDO29CQUNYLENBQUM7Z0JBQ1QsQ0FBQztZQUNILENBQUM7UUFDSCxDQUFDO1FBQ0QsSUFBSSxPQUFPLE1BQU0sQ0FBQyxvQkFBb0IsS0FBSyxXQUFXLEVBQUMsQ0FBQztZQUNyRCxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsTUFBTSxDQUFDLG9CQUFvQixDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDO2dCQUM3RCxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQztvQkFDeEMsSUFBSSxDQUFDO3dCQUNILE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLG9CQUFvQixDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7b0JBQzlHLENBQUM7b0JBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQztvQkFDWCxDQUFDO2dCQUNULENBQUM7WUFDSCxDQUFDO1FBQ0gsQ0FBQztJQUNGLENBQUM7SUFDTSwyQkFBMkIsQ0FBQyxNQUFNLEVBQUUsTUFBTTtRQUMvQyxJQUFJLE9BQU8sTUFBTSxDQUFDLGVBQWUsS0FBSyxXQUFXLEVBQUMsQ0FBQztZQUNsRCxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsTUFBTSxDQUFDLGVBQWUsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQztnQkFDdkQsSUFBSSxNQUFNLENBQUMsTUFBTSxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLElBQUksSUFBSSxNQUFNLENBQUMsTUFBTSxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUMsQ0FBQztvQkFDN0YsTUFBTSxDQUFDLE1BQU0sQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDcEYsQ0FBQztZQUNILENBQUM7UUFDSCxDQUFDO1FBQ0QsSUFBSSxPQUFPLE1BQU0sQ0FBQyxlQUFlLEtBQUssV0FBVyxFQUFDLENBQUM7WUFDakQsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxvQkFBb0IsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQztnQkFDNUQsSUFBSSxNQUFNLENBQUMsTUFBTSxDQUFDLG9CQUFvQixDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksSUFBSSxJQUFJLE1BQU0sQ0FBQyxNQUFNLENBQUMsb0JBQW9CLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFDLENBQUM7b0JBQ3ZHLE1BQU0sQ0FBQyxNQUFNLENBQUMsb0JBQW9CLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsb0JBQW9CLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUM5RixDQUFDO1lBQ0gsQ0FBQztRQUNILENBQUM7SUFDRixDQUFDO0lBQ08sb0JBQW9CLENBQUMsSUFBSTtRQUNoQyxNQUFNLFFBQVEsR0FBRyxJQUFJLEdBQUcsRUFBZSxDQUFDO1FBRXhDLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEVBQUU7WUFDbEIsTUFBTSxRQUFRLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQztZQUVwQyxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDO2dCQUM1QixRQUFRLENBQUMsR0FBRyxDQUFDLFFBQVEsRUFBRTtvQkFDckIsSUFBSSxFQUFFLFFBQVE7b0JBQ2QsRUFBRSxFQUFFLFFBQVEsRUFBRyxpQkFBaUI7b0JBQ2hDLEtBQUssRUFBRSxFQUFFO2lCQUNWLENBQUMsQ0FBQztZQUNMLENBQUM7WUFFRCxNQUFNLEtBQUssR0FBRyxRQUFRLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQ3JDLEtBQUssQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDO2dCQUNmLElBQUksRUFBRSxJQUFJLENBQUMsSUFBSTtnQkFDZixFQUFFLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBRSw4QkFBOEI7YUFDOUMsQ0FBQyxDQUFDO1FBQ0wsQ0FBQyxDQUFDLENBQUM7UUFFSCxPQUFPLEtBQUssQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUM7SUFDdkMsQ0FBQztJQUNPLHlCQUF5QixDQUFDLE1BQU07UUFDdEMsNkZBQTZGO1FBQzdGLElBQUssT0FBTyxNQUFNLENBQUMsb0JBQW9CLElBQUksV0FBVyxFQUN0RCxDQUFDO1lBQ0MsS0FBSyxJQUFJLENBQUMsR0FBRSxDQUFDLEVBQUUsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxvQkFBb0IsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUMsQ0FBQztnQkFDMUQsSUFBSSxPQUFPLEdBQUcsTUFBTSxDQUFDLG9CQUFvQixDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUM3QyxJQUFJLE1BQU0sR0FBRyxRQUFRLEdBQUcsT0FBTyxDQUFDO2dCQUVoQyxJQUFJLE1BQU0sR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUM7Z0JBQzVCLDJEQUEyRDtnQkFDM0QsTUFBTSxHQUFHLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxNQUFNLENBQUMsQ0FBQztnQkFDM0MsMkRBQTJEO2dCQUMzRCxNQUFNLENBQUMsTUFBTSxDQUFDLEdBQUcsTUFBTSxDQUFDO1lBQzFCLENBQUM7UUFDSCxDQUFDO0lBQ0gsQ0FBQztJQUVNLG9CQUFvQixDQUFDLElBQVMsRUFBRSxNQUFVO1FBQy9DLE9BQU8sQ0FBQyxHQUFHLENBQUMsNEJBQTRCLEVBQUMsSUFBSSxFQUFFLGtCQUFrQixFQUFDLE1BQU0sQ0FBQyxPQUFPLEVBQUUsa0JBQWtCLEVBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBRSxDQUFBO1FBQ3RILElBQUksT0FBTyxJQUFJLEtBQUssV0FBVztZQUN6QixPQUFPO1FBRVQsSUFBSSxXQUFXLEdBQUc7WUFDaEIsTUFBTSxFQUFFLGNBQWM7WUFDdEIsS0FBSyxFQUFFLENBQUM7U0FDVCxDQUFDO1FBQ0YsY0FBYyxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBQ2hDLElBQUksTUFBTSxDQUFDLE9BQU8sSUFBSSxJQUFJLEVBQUUsQ0FBQztZQUMzQixJQUFJLE1BQU0sQ0FBQyxRQUFRLElBQUksSUFBSSxFQUFFLENBQUM7Z0JBQzVCLHNCQUFzQjtnQkFDdEIsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLGlCQUFpQixDQUFDLENBQUM7Z0JBRTVDLElBQUksQ0FBQyxPQUFPLE1BQU0sQ0FBQyxnQkFBZ0IsSUFBSSxXQUFXLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLElBQUksQ0FBQyxDQUFDLEVBQUUsQ0FBQztvQkFDN0YsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQzt3QkFDcEQsTUFBTSxDQUFDLGlCQUFpQixDQUFDLE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLENBQUM7b0JBQ2hGLENBQUM7Z0JBQ0gsQ0FBQztxQkFDQSxDQUFDO29CQUNBLE1BQU0sQ0FBQyxpQkFBaUIsQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLEdBQUcsTUFBTSxDQUFDLFNBQVMsQ0FBQztnQkFDcEUsQ0FBQztnQkFFRCxvRUFBb0U7Z0JBQ3hFLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxpQkFBaUIsRUFBRSxFQUFFLFNBQVMsRUFBRSxNQUFNLENBQUMsU0FBUyxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQztnQkFDL0csSUFBSSxNQUFNLENBQUMsV0FBVyxDQUFDLFVBQVU7b0JBQUUsT0FBTyxDQUFDLEdBQUcsQ0FBQyx1QkFBdUIsR0FBRyxNQUFNLENBQUMsYUFBYSxDQUFDLENBQUM7Z0JBQzNGLE1BQU0sQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO2dCQUN2QixJQUFJLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztZQUNuQyxDQUFDO1FBQ0gsQ0FBQztRQUVELElBQUksSUFBSSxHQUFHLFVBQVUsR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDO1FBQzFDLElBQUksTUFBTSxDQUFDLFdBQVcsQ0FBQyxVQUFVO1lBQUUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxrQkFBa0IsR0FBRyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUE7UUFDcEYsSUFBSSxNQUFNLENBQUMsUUFBUSxJQUFJLElBQUksRUFBRSxDQUFDO1lBQ3hCLElBQUksTUFBTSxDQUFDLFdBQVcsQ0FBQyxVQUFVO2dCQUFFLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQ2pFLElBQUksTUFBTSxHQUFHLElBQUksQ0FBQztZQUNWLE1BQU0sQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDO1lBQ2hDLElBQUksQ0FBQyxPQUFPLE1BQU0sQ0FBQyxjQUFjLEtBQUssV0FBVyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsY0FBYyxJQUFJLElBQUksQ0FBQyxFQUFFLENBQUM7Z0JBQzlFLElBQUksR0FBRyxJQUFJLEdBQUcsTUFBTSxDQUFDLFlBQVksQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLENBQUM7WUFFeEQsQ0FBQztpQkFDSixDQUFDO2dCQUNJLE1BQU0sQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDLHFCQUFxQixDQUFDLE1BQU0sRUFBRSxNQUFNLENBQUMsY0FBYyxDQUFDLENBQUM7Z0JBQ2xGLElBQUksR0FBRyxJQUFJLEdBQUcsTUFBTSxDQUFDLGNBQWMsQ0FBQztnQkFDcEMsTUFBTSxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUM7WUFDL0IsQ0FBQztZQUNULElBQUksQ0FBQyxPQUFPLE1BQU0sQ0FBQyxhQUFhLEtBQUssV0FBVyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsYUFBYSxJQUFJLEVBQUUsQ0FBQztnQkFDdkUsSUFBSSxHQUFHLElBQUksR0FBRyxZQUFZLEdBQUcsTUFBTSxDQUFDLGFBQWEsQ0FBQztRQUM1RCxDQUFDO1FBRUQsTUFBTSxDQUFDLGtCQUFrQixHQUFHLEVBQUUsQ0FBQztRQUMvQixNQUFNLENBQUMsa0JBQWtCLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQztRQUNqQyxNQUFNLENBQUMsVUFBVSxHQUFHLENBQUMsQ0FBQztRQUV0QixJQUFJLEdBQUcsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzNCLE1BQU0sQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxNQUFVLEVBQUUsRUFBRTtZQUNyRCxJQUFJLE1BQU0sSUFBSSxJQUFJLEVBQUUsQ0FBQztnQkFDN0IsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUU7b0JBQ3ZDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxZQUFZLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBRzdGLE1BQU0sR0FBRztvQkFDUCxJQUFJLEVBQUUsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJO29CQUN6QixLQUFLLEVBQUUsUUFBUSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxFQUFFLENBQUM7aUJBQ2hELENBQUE7Z0JBQ0QsSUFBSSxNQUFNLENBQUMsUUFBUTtvQkFDakIsTUFBTSxDQUFDLFlBQVksQ0FBQyxnQkFBZ0IsQ0FBQyxTQUFTLEVBQUUsc0JBQXNCLEdBQUcsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDO2dCQUN6RixNQUFNLENBQUMsWUFBWSxDQUFDLDJCQUEyQixDQUFDLE1BQU0sRUFBRSxNQUFNLENBQUMsQ0FBQTtnQkFDL0QsTUFBTSxDQUFDLGtCQUFrQixHQUFHLE1BQU0sQ0FBQztnQkFDdkIsSUFBSSxDQUFDLE9BQU8sR0FBRyxFQUFFLENBQUM7Z0JBQzlCLElBQUksTUFBTSxDQUFDLFdBQVcsQ0FBQyxVQUFVO29CQUFFLE9BQU8sQ0FBQyxHQUFHLENBQUMsNEJBQTRCLEVBQUUsTUFBTSxDQUFDLGtCQUFrQixDQUFDLENBQUM7Z0JBQ3hHLElBQUksT0FBTyxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsS0FBSyxXQUFXLEVBQUUsQ0FBQztvQkFDOUMsTUFBTSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQztvQkFDdkQsTUFBTSxDQUFDLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztvQkFDN0IsTUFBTSxDQUFDLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQztnQkFDaEMsQ0FBQztnQkFFYixNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsRUFBRSxFQUFFLFNBQVMsRUFBRSxNQUFNLENBQUMsU0FBUyxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQztnQkFFckgsSUFBSSxNQUFNLENBQUMsV0FBVyxDQUFDLFVBQVU7b0JBQUUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxpQ0FBaUMsQ0FBQyxDQUFDO2dCQUNsRixJQUFJLE1BQU0sQ0FBQyxXQUFXLENBQUMsVUFBVTtvQkFBRSxPQUFPLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO2dCQUMvRCxJQUFJLFdBQVcsR0FBRztvQkFDaEIsTUFBTSxFQUFFLGNBQWM7b0JBQ3RCLEtBQUssRUFBRSxNQUFNLENBQUMsS0FBSztpQkFDcEIsQ0FBQztnQkFDRixjQUFjLENBQUMsV0FBVyxDQUFDLENBQUM7Z0JBQzVCLElBQUksTUFBTSxDQUFDLEtBQUssSUFBSSxDQUFDO29CQUNuQixNQUFNLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztnQkFFbkMsSUFBSSxNQUFNLENBQUMsd0JBQXdCLElBQUksSUFBSSxFQUFFLENBQUM7b0JBQzVDLElBQUksTUFBTSxDQUFDLEtBQUssSUFBSSxDQUFDLEVBQUUsQ0FBQzt3QkFDVixNQUFNLENBQUMsbUJBQW1CLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FBQztvQkFDN0QsQ0FBQzs7d0JBRUMsTUFBTSxDQUFDLG9CQUFvQixDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztnQkFDekMsQ0FBQztnQkFDYixJQUFJLE9BQU8sTUFBTSxDQUFDLGdCQUFnQixLQUFLLFdBQVc7b0JBQ3BDLE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFHOUMsQ0FBQztZQUNELElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDM0MsQ0FBQyxFQUNQLENBQUMsR0FBTyxFQUFFLEVBQUU7WUFDRixnQ0FBZ0M7WUFDaEMsSUFBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLEVBQUUsR0FBRyxDQUFDLENBQUM7UUFDbkMsQ0FBQyxDQUFDLENBQUM7SUFDWCxDQUFDO0lBQ0ksNkJBQTZCLENBQUMsTUFBVSxFQUFFLE1BQVU7UUFDdkQsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDL0IsSUFBSSxNQUFNLENBQUMsTUFBTSxJQUFJLFFBQVEsRUFBRSxDQUFDO1lBQzlCLElBQUksT0FBTyxNQUFNLENBQUMsa0JBQWtCLEtBQUssV0FBVyxFQUFFLENBQUM7Z0JBQ3JELElBQUksTUFBTSxDQUFDLEtBQUssSUFBSSxJQUFJLEVBQUUsQ0FBQztvQkFDdkIsTUFBTSxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7b0JBQzVDLE1BQU0sQ0FBQyxrQkFBa0IsQ0FBQyxLQUFLLEdBQUcsTUFBTSxDQUFDLGtCQUFrQixDQUFDLEtBQUssR0FBRyxDQUFDLENBQUM7Z0JBQ3hFLENBQUM7cUJBQ0UsQ0FBQztvQkFDRixNQUFNLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsR0FBRyxNQUFNLENBQUM7Z0JBQzdELENBQUM7WUFDSCxDQUFDO2lCQUNFLENBQUM7Z0JBQ0osSUFBSSxTQUFTLEdBQU8sRUFBRSxDQUFDO2dCQUNyQixTQUFTLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO2dCQUN6QixJQUFJLE1BQU0sR0FBRztvQkFDWCxJQUFJLEVBQUUsU0FBUztvQkFDZixLQUFLLEVBQUUsQ0FBQztpQkFDVCxDQUFBO2dCQUNELE1BQU0sQ0FBQyxrQkFBa0IsR0FBRyxNQUFNLENBQUM7Z0JBQy9CLE1BQU0sQ0FBQyxVQUFVLEdBQUcsQ0FBQyxDQUFDO1lBQzFCLENBQUM7WUFFSCxJQUFJLElBQUksR0FBTyxFQUFFLENBQUM7WUFDaEIsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQTtZQUNuQixJQUFJLE1BQU0sQ0FBQyxLQUFLLElBQUksSUFBSSxFQUFFLENBQUM7Z0JBQ3ZCLE1BQU0sQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO2dCQUN2QixJQUFJLE9BQU8sTUFBTSxDQUFDLG1CQUFtQixLQUFLLFdBQVcsRUFBRSxDQUFDO29CQUNsRCxNQUFNLENBQUMsbUJBQW1CLENBQUMsS0FBSyxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsQ0FBQztnQkFDbEQsQ0FBQztZQUNKLENBQUM7aUJBQ0UsQ0FBQztnQkFDSixJQUFJLE9BQU8sTUFBTSxDQUFDLG1CQUFtQixLQUFLLFdBQVcsRUFBRSxDQUFDO29CQUN0RCxNQUFNLENBQUMsbUJBQW1CLENBQUMsS0FBSyxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsQ0FBQztnQkFDL0MsQ0FBQztZQUNILENBQUM7UUFFSCxDQUFDO2FBQ0UsQ0FBQztZQUNGLFFBQVE7WUFDUixNQUFNLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsVUFBVSxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBQzVELE1BQU0sQ0FBQyxrQkFBa0IsQ0FBQyxLQUFLLEVBQUUsQ0FBQztZQUNwQyxJQUFJLE1BQU0sQ0FBQyxVQUFVLEdBQUcsQ0FBQyxFQUFFLENBQUM7Z0JBQ3hCLE1BQU0sQ0FBQyxVQUFVLEVBQUUsQ0FBQztnQkFDdEIsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLEVBQUUsRUFBRSxTQUFTLEVBQUUsTUFBTSxDQUFDLFNBQVMsSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDLENBQUM7Z0JBQ3RJLElBQUksTUFBTSxDQUFDLEtBQUssSUFBSSxJQUFJO29CQUN0QixNQUFNLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztZQUN6QixDQUFDO2lCQUNFLENBQUM7Z0JBQ0osTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLGlCQUFpQixFQUFFLEVBQUUsU0FBUyxFQUFFLE1BQU0sQ0FBQyxTQUFTLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDO2dCQUM3RyxNQUFNLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQztZQUN0QixDQUFDO1lBQ0gsSUFBSSxPQUFPLEdBQU8sRUFBRSxDQUFDO1lBQ1gsT0FBTyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUMvQixJQUFJLE9BQU8sTUFBTSxDQUFDLGlCQUFpQixLQUFLLFdBQVc7Z0JBQ2pELE1BQU0sQ0FBQyxpQkFBaUIsQ0FBQyxNQUFNLEVBQUUsTUFBTSxDQUFDLENBQUM7WUFDM0MsSUFBSSxPQUFPLE1BQU0sQ0FBQyxtQkFBbUIsS0FBSyxXQUFXLEVBQUUsQ0FBQztnQkFDdEQsb0JBQW9CO2dCQUNwQix3QkFBd0I7Z0JBQ2xCLE1BQU0sQ0FBQyxtQkFBbUIsQ0FBQyxLQUFLLENBQUMsTUFBTSxFQUFFLE9BQU8sQ0FBQyxDQUFDO1lBQ3hELENBQUM7UUFFSCxDQUFDO1FBRUgsSUFBSSxNQUFNLENBQUMsTUFBTSxJQUFJLFFBQVEsRUFBRSxDQUFDO1lBQzlCLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sRUFBRSxFQUFFLFNBQVMsRUFBRSxNQUFNLENBQUMsU0FBUyxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQztRQUMvRixDQUFDO1FBQ0QsSUFBSSxNQUFNLENBQUMsY0FBYyxJQUFJLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQzs7WUFFcEMsTUFBTSxDQUFDLG1CQUFtQixDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUMxQyxJQUFJLE1BQU0sQ0FBQyxPQUFPLElBQUksSUFBSSxFQUFFLENBQUM7WUFDM0IsSUFBSSxXQUFXLEdBQUc7Z0JBQ2hCLE1BQU0sRUFBRSxjQUFjO2dCQUN0QixLQUFLLEVBQUUsTUFBTSxDQUFDLGtCQUFrQixDQUFDLEtBQUs7YUFDdkMsQ0FBQztZQUNGLGNBQWMsQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUM5QixDQUFDO1FBQ0QsTUFBTSxDQUFDLE1BQU0sR0FBRyxFQUFFLENBQUM7UUFDbkIsSUFBSSxDQUFDLG1CQUFtQixDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsQ0FBQztJQUV2QyxDQUFDO0lBQ0kscUJBQXFCLENBQUMsTUFBVSxFQUFFLE1BQVU7UUFDakQsSUFBSSxJQUFJLENBQUMsV0FBVyxDQUFDLFVBQVU7WUFBRSxPQUFPLENBQUMsR0FBRyxDQUFDLFNBQVMsRUFBRSxNQUFNLENBQUMsQ0FBQztRQUM1RCxNQUFNLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQzdCLElBQUksTUFBTSxDQUFDLEtBQUssSUFBSSxJQUFJLEVBQUMsQ0FBQztZQUN4QixJQUFJLFVBQVUsR0FBRyxFQUFDLFFBQVEsRUFBRSxhQUFhLEVBQUMsQ0FBQztZQUMzQyxNQUFNLENBQUMsU0FBUyxDQUFDLFVBQVUsQ0FBQyxDQUFDO1lBQzdCLCtCQUErQjtRQUNqQyxDQUFDO1FBQ0QsSUFBSSxJQUFJLEdBQUcsV0FBVyxDQUFDO1FBQ2pCLElBQUksSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO1lBQ3ZCLElBQUksQ0FBQyw2QkFBNkIsQ0FBQyxNQUFNLEVBQUUsTUFBTSxDQUFDLENBQUM7WUFDN0MsT0FBTztRQUNULENBQUM7UUFFUCxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxJQUFJLEVBQUUsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsRUFBRTtZQUNwRCxNQUFNLENBQUMsSUFBSSxHQUFHLEVBQUUsQ0FBQztZQUNqQixJQUFJLElBQUksQ0FBQyxXQUFXLENBQUMsVUFBVTtnQkFBRSxPQUFPLENBQUMsR0FBRyxDQUFDLG1EQUFtRCxFQUFHLE1BQU0sQ0FBQyxVQUFVLEVBQUcsaUJBQWlCLEVBQUcsTUFBTSxDQUFDLE1BQU0sRUFBRSxNQUFNLENBQUMsa0JBQWtCLEVBQUUsT0FBTyxFQUFFLElBQUksQ0FBQyxDQUFDO1lBQzlMLHVEQUF1RDtZQUN2RCxDQUFDO2dCQUNDLElBQUksSUFBSSxDQUFDLFdBQVcsQ0FBQyxVQUFVO29CQUFFLE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUM7Z0JBQzVELElBQUksTUFBTSxDQUFDLE1BQU0sSUFBSSxRQUFRLEVBQUUsQ0FBQztvQkFDeEIsSUFBSSxJQUFJLENBQUMsV0FBVyxDQUFDLFVBQVU7d0JBQUUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsa0JBQWtCLENBQUMsQ0FBQztvQkFDOUUsSUFBSSxPQUFPLE1BQU0sQ0FBQyxrQkFBa0IsS0FBSyxXQUFXLEVBQUUsQ0FBQzt3QkFDckQsSUFBSSxJQUFJLENBQUMsV0FBVyxDQUFDLFVBQVU7NEJBQUUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxlQUFlLEdBQUcsTUFBTSxDQUFDLEtBQUssRUFBRSw0QkFBNEIsRUFBRSxNQUFNLENBQUMsa0JBQWtCLEVBQ2hJLGlDQUFpQyxFQUFFLE1BQU0sQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsQ0FBQTt3QkFDdEUsSUFBSSxPQUFPLE1BQU0sQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLEtBQUssV0FBVyxFQUFFLENBQUM7NEJBRTFELElBQUksTUFBTSxDQUFDLEtBQUssSUFBSSxJQUFJLEVBQUUsQ0FBQztnQ0FDckIsTUFBTSxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7Z0NBQzVDLE1BQU0sQ0FBQyxrQkFBa0IsQ0FBQyxLQUFLLEdBQUcsTUFBTSxDQUFDLGtCQUFrQixDQUFDLEtBQUssR0FBRyxDQUFDLENBQUM7Z0NBQ3RFLHNCQUFzQjs0QkFDeEIsQ0FBQztpQ0FDQSxDQUFDO2dDQUNBLE1BQU0sQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxHQUFHLE1BQU0sQ0FBQzs0QkFDN0QsQ0FBQzt3QkFDUCxDQUFDO3dCQUNELElBQUksSUFBSSxDQUFDLFdBQVcsQ0FBQyxVQUFVOzRCQUFFLE9BQU8sQ0FBQyxHQUFHLENBQUMsZ0NBQWdDLENBQUMsQ0FBQzt3QkFDL0UsSUFBSSxJQUFJLENBQUMsV0FBVyxDQUFDLFVBQVU7NEJBQUUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsa0JBQWtCLENBQUMsQ0FBQztvQkFDcEUsQ0FBQzt5QkFDRixDQUFDO3dCQUNKLElBQUksU0FBUyxHQUFPLEVBQUUsQ0FBQzt3QkFDakIsU0FBUyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQzt3QkFDN0IsSUFBSSxNQUFNLEdBQUc7NEJBQ1gsSUFBSSxFQUFFLFNBQVM7NEJBQ2YsS0FBSyxFQUFFLENBQUM7eUJBQ1QsQ0FBQTt3QkFDRCxNQUFNLENBQUMsa0JBQWtCLEdBQUcsTUFBTSxDQUFDO3dCQUMzQixNQUFNLENBQUMsVUFBVSxHQUFHLENBQUMsQ0FBQztvQkFDMUIsQ0FBQztvQkFFUCxJQUFJLENBQUMsZ0JBQWdCLENBQUMsU0FBUyxFQUFFLHlCQUF5QixDQUFDLENBQUM7b0JBQzVELElBQUksSUFBSSxHQUFPLEVBQUUsQ0FBQztvQkFDWixJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFBO29CQUN2QixJQUFJLE1BQU0sQ0FBQyxLQUFLLElBQUksSUFBSSxFQUFFLENBQUM7d0JBQ25CLE1BQU0sQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO3dCQUMzQixJQUFJLE9BQU8sTUFBTSxDQUFDLG1CQUFtQixLQUFLLFdBQVcsRUFBRSxDQUFDOzRCQUM5Qyw2Q0FBNkM7NEJBQzdDLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxFQUFFLE1BQU0sRUFBQyxJQUFJLENBQUMsQ0FBQTs0QkFDckMsTUFBTSxDQUFDLG1CQUFtQixDQUFDLEtBQUssQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLENBQUM7d0JBQ2xELENBQUM7b0JBQ0osQ0FBQzt5QkFDRixDQUFDO3dCQUNKLElBQUksT0FBTyxNQUFNLENBQUMsbUJBQW1CLEtBQUssV0FBVyxFQUFFLENBQUM7NEJBQ2hELE1BQU0sQ0FBQyxtQkFBbUIsQ0FBQyxLQUFLLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxDQUFDO3dCQUNqRCxDQUFDO29CQUNILENBQUM7Z0JBRUgsQ0FBQztxQkFDRixDQUFDO29CQUNFLFFBQVE7b0JBQ1IsTUFBTSxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLFVBQVUsRUFBRSxDQUFDLENBQUMsQ0FBQztvQkFDNUQsTUFBTSxDQUFDLGtCQUFrQixDQUFDLEtBQUssRUFBRSxDQUFDO29CQUN4QyxJQUFJLElBQUksQ0FBQyxXQUFXLENBQUMsVUFBVTt3QkFBRSxPQUFPLENBQUMsR0FBRyxDQUFDLG9CQUFvQixHQUFHLE1BQU0sQ0FBQyxVQUFVLENBQUMsQ0FBQTtvQkFDdEYsSUFBSSxNQUFNLENBQUMsVUFBVSxHQUFHLENBQUMsRUFBRSxDQUFDO3dCQUNwQixNQUFNLENBQUMsVUFBVSxFQUFFLENBQUM7d0JBQzFCLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxFQUFFLEVBQUUsU0FBUyxFQUFFLE1BQU0sQ0FBQyxTQUFTLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDO3dCQUNsSSxJQUFJLE1BQU0sQ0FBQyxLQUFLLElBQUksSUFBSTs0QkFDdEIsTUFBTSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7b0JBRXpCLENBQUM7eUJBQ0YsQ0FBQzt3QkFDSixNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsaUJBQWlCLEVBQUUsRUFBRSxTQUFTLEVBQUUsTUFBTSxDQUFDLFNBQVMsSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDLENBQUM7d0JBQ3pHLE1BQU0sQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDO3dCQUNwQixJQUFJLElBQUksQ0FBQyxXQUFXLENBQUMsVUFBVTs0QkFBRSxPQUFPLENBQUMsR0FBRyxDQUFDLGVBQWUsR0FBRyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUE7b0JBQzlFLENBQUM7b0JBQ1AsSUFBSSxPQUFPLEdBQU8sRUFBRSxDQUFDO29CQUNmLE9BQU8sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7b0JBQzNCLElBQUksT0FBTyxNQUFNLENBQUMsaUJBQWlCLEtBQUssV0FBVzt3QkFDakQsTUFBTSxDQUFDLGlCQUFpQixDQUFDLE1BQU0sRUFBRSxPQUFPLENBQUMsQ0FBQztvQkFDNUMsSUFBSSxPQUFPLE1BQU0sQ0FBQyxtQkFBbUIsS0FBSyxXQUFXLEVBQUUsQ0FBQzt3QkFDNUMsTUFBTSxDQUFDLG1CQUFtQixDQUFDLEtBQUssQ0FBQyxNQUFNLEVBQUUsT0FBTyxDQUFDLENBQUM7b0JBQ3hELENBQUM7Z0JBRUgsQ0FBQztZQUNILENBQUM7WUFDRCxJQUFJLElBQUksQ0FBQyxXQUFXLENBQUMsVUFBVTtnQkFBRSxPQUFPLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBQzVELElBQUksTUFBTSxDQUFDLE1BQU0sSUFBSSxRQUFRLEVBQUUsQ0FBQztnQkFDOUIsTUFBTSxDQUFDLFlBQVksQ0FBQywyQkFBMkIsQ0FBQyxNQUFNLEVBQUUsTUFBTSxDQUFDLENBQUE7Z0JBQy9ELE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sRUFBRSxFQUFFLFNBQVMsRUFBRSxNQUFNLENBQUMsU0FBUyxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQztZQUN6RixDQUFDO1lBQ1AsSUFBSSxNQUFNLENBQUMsY0FBYyxJQUFJLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQzs7Z0JBRTlCLE1BQU0sQ0FBQyxtQkFBbUIsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDaEQsSUFBSSxNQUFNLENBQUMsT0FBTyxJQUFJLElBQUksRUFBRSxDQUFDO2dCQUNyQixJQUFJLFdBQVcsR0FBRztvQkFDaEIsTUFBTSxFQUFFLGNBQWM7b0JBQ3RCLEtBQUssRUFBRSxNQUFNLENBQUMsa0JBQWtCLENBQUMsS0FBSztpQkFDdkMsQ0FBQztnQkFDRixjQUFjLENBQUMsV0FBVyxDQUFDLENBQUM7WUFDOUIsQ0FBQztZQUNELE1BQU0sQ0FBQyxNQUFNLEdBQUcsRUFBRSxDQUFDO1lBQ25CLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDekMsQ0FBQyxFQUNELEdBQUcsQ0FBQyxFQUFFO1lBQ0osaUNBQWlDO1lBQ2pDLElBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxFQUFFLEdBQUcsQ0FBQyxDQUFDO1FBQ2pDLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUNFLFdBQVcsQ0FBRSxNQUFNLEVBQUUsTUFBTSxFQUFDLElBQUk7UUFDckMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxxQkFBcUIsRUFBQyxNQUFNLEVBQUUsT0FBTyxFQUFDLElBQUksRUFBRSxVQUFVLEVBQUUsTUFBTSxDQUFDLE9BQU8sQ0FBRSxDQUFBO1FBQ3BGLElBQUksT0FBTyxNQUFNLENBQUMsT0FBTyxJQUFJLFdBQVcsSUFBSSxNQUFNLENBQUMsT0FBTyxJQUFJLEVBQUUsRUFBQyxDQUFDO1lBQ2hFLElBQUksSUFBSSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUM7WUFDckIsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFFLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUMsQ0FBQztnQkFDbkMsSUFBSSxHQUFHLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUNsQixJQUFJLEtBQUssR0FBRyxHQUFHLENBQUMsS0FBSyxDQUFDO2dCQUN0QixJQUFJLEtBQUssQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDLEVBQUMsQ0FBQztvQkFDbkMsSUFBSSxPQUFPLEdBQUcsR0FBRyxDQUFDLElBQUksQ0FBQztvQkFDdkIsSUFBSSxPQUFPLEdBQUcsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDO29CQUN6QixPQUFPLENBQUMsR0FBRyxDQUFDLHNCQUFzQixFQUFDLE9BQU8sQ0FBQyxDQUFDO29CQUM1QyxJQUFJLElBQUksR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO29CQUNoQyxJQUFJLEdBQUcsR0FBRyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7b0JBQzNCLE9BQU8sQ0FBQyxHQUFHLENBQUMsa0JBQWtCLEVBQUMsR0FBRyxDQUFDLENBQUM7b0JBQ3BDLE1BQU0sQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLEdBQUcsR0FBRyxDQUFDO2dCQUMvQixDQUFDO1lBQ0gsQ0FBQztRQUNILENBQUM7SUFDSCxDQUFDO0lBQ00sZ0JBQWdCLENBQUMsSUFBUyxFQUFFLE1BQVU7UUFDM0MsSUFBSSxJQUFJLENBQUMsV0FBVyxDQUFDLFVBQVU7WUFBRSxPQUFPLENBQUMsR0FBRyxDQUFDLG1CQUFtQixFQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDdEYsSUFBSSxJQUFJLENBQUMsV0FBVyxDQUFDLFVBQVU7WUFBRSxPQUFPLENBQUMsR0FBRyxDQUFDLG1DQUFtQyxHQUFHLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNqRyxJQUFJLElBQUksQ0FBQyxXQUFXLENBQUMsVUFBVTtZQUFFLE9BQU8sQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLGVBQWUsQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUNqRixJQUFJLE1BQU0sQ0FBQyxlQUFlLENBQUMsV0FBVyxJQUFJLElBQUksRUFBRSxDQUFDO1lBQy9DLElBQUksSUFBSSxDQUFDLFdBQVcsQ0FBQyxVQUFVO2dCQUFFLE9BQU8sQ0FBQyxHQUFHLENBQUMsWUFBWSxHQUFHLE1BQU0sQ0FBQyxlQUFlLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1lBQzFHLElBQUksTUFBTSxDQUFDLGVBQWUsQ0FBQyxXQUFXLENBQUMsU0FBUyxJQUFJLENBQUMsRUFBRSxDQUFDO2dCQUNsRCxJQUFJLFdBQVcsR0FBRztvQkFDaEIsR0FBRyxFQUFFLElBQUksQ0FBQyxXQUFXO29CQUN6QixLQUFLLEVBQUUsU0FBUztvQkFDWixJQUFJLEVBQUUsSUFBSTtvQkFDZCxNQUFNLEVBQUUsTUFBTTtvQkFDZCxNQUFNLEVBQUUsSUFBSSxDQUFDLFNBQVM7b0JBQ3RCLFFBQVEsRUFBRSxJQUFJO2lCQUNmLENBQUM7Z0JBQ0ksSUFBSSxDQUFDLGdCQUFnQixDQUFDLFdBQVcsQ0FBQyxDQUFDO2dCQUNuQyxPQUFPO1lBQ1gsQ0FBQztRQUNILENBQUM7UUFFTCxJQUFJLElBQUksQ0FBQyxXQUFXLENBQUMsVUFBVTtZQUFFLE9BQU8sQ0FBQyxHQUFHLENBQUMsdUNBQXVDLEVBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUcsa0JBQWtCLEVBQUUsTUFBTSxDQUFDLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzNOLElBQUksQ0FBQyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksTUFBTSxDQUFDLE9BQU87WUFDdEMsT0FBTztRQUNYLElBQUksTUFBTSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztZQUN4QixNQUFNLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQztZQUN4QixJQUFJLElBQUksQ0FBQyxXQUFXLENBQUMsVUFBVTtnQkFBRSxPQUFPLENBQUMsR0FBRyxDQUFDLGNBQWMsRUFBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDekUsb0lBQW9JO1lBQ2xJLE9BQU87UUFDVCxDQUFDO1FBQ0gsSUFBSSxNQUFNLEdBQUssRUFBRSxDQUFDO1FBQ2QsNkVBQTZFO1FBQzdFLHVCQUF1QjtRQUN2Qiw0Q0FBNEM7UUFDNUMsTUFBTSxHQUFHLEVBQUMsR0FBRyxJQUFJLENBQUMsS0FBSyxFQUFDLENBQUM7UUFDN0IsSUFBSSxJQUFJLENBQUMsV0FBVyxDQUFDLFVBQVU7WUFBRSxPQUFPLENBQUMsR0FBRyxDQUFDLGVBQWUsQ0FBQyxDQUFBO1FBQ3pELElBQUksSUFBSSxDQUFDLFdBQVcsQ0FBQyxVQUFVO1lBQUUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUVyRCxJQUFJLE1BQU0sQ0FBQyxLQUFLLElBQUksSUFBSTtZQUN0QixNQUFNLENBQUMsUUFBUSxDQUFDLEdBQUcsTUFBTSxDQUFDLFNBQVMsQ0FBQzs7WUFFcEMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxTQUFTLENBQUM7UUFDdEMsdUJBQXVCO1FBQ3ZCLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxNQUFNLEVBQUUsTUFBTSxDQUFDLENBQUM7SUFDL0MsQ0FBQztJQUNJLGtCQUFrQixDQUFDLElBQVMsRUFBRSxNQUFVO1FBQ3pDLE1BQU0sQ0FBQyxVQUFVLEdBQUcsQ0FBQyxDQUFDO1FBQzFCLE1BQU0sQ0FBQyxrQkFBa0IsR0FBRyxFQUFFLENBQUM7UUFDL0IsTUFBTSxDQUFDLGtCQUFrQixDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7UUFFakMsTUFBTSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7UUFDdkIsTUFBTSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7UUFDekIsSUFBSSxNQUFNLENBQUMsV0FBVyxDQUFDLFVBQVU7WUFBRSxPQUFPLENBQUMsR0FBRyxDQUFDLCtCQUErQixHQUFHLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUM5RixNQUFNLENBQUMsb0JBQW9CLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO1FBRS9ELDJCQUEyQjtRQUMzQix1QkFBdUI7UUFDdkIsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLGlCQUFpQixFQUFFLEVBQUUsU0FBUyxFQUFFLE1BQU0sQ0FBQyxTQUFTLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDO1FBQzNHLE1BQU0sQ0FBQyxZQUFZLENBQUMsbUJBQW1CLENBQUMsTUFBTSxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBQ3ZELElBQUksQ0FBQyxPQUFPLEdBQUksTUFBTSxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsRUFBRSxFQUFDLGtCQUFrQixFQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQztJQUV2RixDQUFDO0lBRUUsbUJBQW1CLENBQUMsTUFBVSxFQUFFLEtBQVM7UUFDMUMsSUFBSSxPQUFPLE1BQU0sQ0FBQyxvQkFBb0IsS0FBSyxXQUFXLEVBQUUsQ0FBQztZQUN2RCxJQUFJLElBQUksR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDO1lBQ3hELEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUM7Z0JBQy9CLElBQUksTUFBTSxDQUFDLFdBQVcsQ0FBQyxVQUFVO29CQUFFLE9BQU8sQ0FBQyxHQUFHLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxTQUFTLEVBQUUsS0FBSyxDQUFDLENBQUM7Z0JBQ3ZGLE1BQU0sQ0FBQyxvQkFBb0IsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxLQUFLLENBQUM7WUFDL0MsQ0FBQztRQUNMLENBQUM7SUFDSCxDQUFDO0lBR0UsZUFBZSxDQUFDLElBQVMsRUFBRSxNQUFVO1FBQ3RDLElBQUksSUFBSSxDQUFDLFdBQVcsQ0FBQyxVQUFVO1lBQUUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxhQUFhLEVBQUUsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNuRixJQUFJLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxJQUFJLElBQUksRUFBRSxDQUFDO1lBQzFCLElBQUksV0FBVyxHQUFHO2dCQUNoQixHQUFHLEVBQUUsSUFBSSxDQUFDLGNBQWM7Z0JBQzVCLEtBQUssRUFBRSxJQUFJLENBQUMsZ0JBQWdCO2dCQUN4QixJQUFJLEVBQUUsSUFBSTtnQkFDZCxNQUFNLEVBQUUsTUFBTTtnQkFDZCxNQUFNLEVBQUUsSUFBSSxDQUFDLFlBQVk7Z0JBQ3pCLFFBQVEsRUFBRSxJQUFJLENBQUMsa0JBQWtCO2FBQ2xDLENBQUM7WUFDSSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsV0FBVyxDQUFDLENBQUM7UUFDdkMsQ0FBQzthQUNBLENBQUM7WUFDSixJQUFJLENBQUMsa0JBQWtCLENBQUMsSUFBSSxFQUFFLE1BQU0sQ0FBQyxDQUFDO1FBQ3BDLENBQUM7SUFDSCxDQUFDO0lBR0UsYUFBYSxDQUFDLENBQUssRUFBRSxNQUFVO1FBQ3BDLDBCQUEwQjtRQUMzQix1QkFBdUI7UUFDdEIsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLGlCQUFpQixFQUFFLEVBQUUsU0FBUyxFQUFFLE1BQU0sQ0FBQyxTQUFTLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDO1FBQzNHLE1BQU0sQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDO1FBQ3hCLE1BQU0sQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDO1FBQ3BCLE1BQU0sQ0FBQyxvQkFBb0IsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLGlCQUFpQixDQUFDLENBQUM7UUFDL0QsTUFBTSxDQUFDLGtCQUFrQixHQUFHLEVBQUUsQ0FBQztRQUMvQixNQUFNLENBQUMsa0JBQWtCLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQztRQUNqQyxNQUFNLENBQUMsT0FBTyxHQUFDLEVBQUUsQ0FBQztRQUNsQixNQUFNLENBQUMsVUFBVSxHQUFHLENBQUMsQ0FBQztRQUN0QixNQUFNLENBQUMsb0JBQW9CLEdBQUcsS0FBSyxDQUFDO1FBQ3BDLElBQUksQ0FBQyxPQUFPLEdBQUcsRUFBRSxDQUFDO0lBRXRCLENBQUM7SUFDSSxTQUFTLENBQUMsTUFBVSxFQUFFLEdBQU8sRUFBRSxRQUFZO1FBQzlDLElBQUksV0FBVyxHQUFHO1lBQ2hCLEdBQUcsRUFBRSxHQUFHO1lBQ1YsS0FBSyxFQUFFLFFBQVE7WUFDYixJQUFJLEVBQUUsSUFBSTtZQUNaLE1BQU0sRUFBRSxNQUFNO1lBQ2QsTUFBTSxFQUFFLElBQUksQ0FBQyxTQUFTO1lBQ3RCLFFBQVEsRUFBRSxJQUFJO1NBQ2YsQ0FBQztRQUNFLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUN2QyxDQUFDO0lBQ0ksYUFBYSxDQUFDLElBQVEsRUFBRSxNQUFVO1FBQ3ZDLElBQUksSUFBSSxDQUFDLFdBQVcsQ0FBQyxVQUFVO1lBQUUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxlQUFlLEVBQUUsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFBO1FBQzNFLElBQUksTUFBTSxDQUFDLEtBQUssSUFBSSxJQUFJLEVBQUUsQ0FBQztZQUNyQixJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksRUFBRSxNQUFNLENBQUMsQ0FBQTtZQUNoQyxPQUFPO1FBQ1QsQ0FBQztRQUVELElBQUksSUFBSSxDQUFDLFdBQVcsQ0FBQyxVQUFVO1lBQUUsT0FBTyxDQUFDLEdBQUcsQ0FBQyw0QkFBNEIsQ0FBQyxDQUFDO1FBQzNFLElBQUksSUFBSSxDQUFDLFdBQVcsQ0FBQyxVQUFVO1lBQUUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsa0JBQWtCLENBQUMsQ0FBQztRQUM1RSxJQUFJLENBQUMsT0FBTyxNQUFNLENBQUMsa0JBQWtCLEtBQUssV0FBVyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsa0JBQWtCLENBQUMsS0FBSyxJQUFJLENBQUMsQ0FBQyxFQUFFLENBQUM7WUFDakcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLG1CQUFtQixFQUFFLFNBQVMsQ0FBQyxDQUFDO1lBQ3RELE9BQU87UUFDWCxDQUFDO1FBQ0wsSUFBSSxJQUFJLENBQUMsV0FBVyxDQUFDLFVBQVU7WUFBRSxPQUFPLENBQUMsR0FBRyxDQUFDLHFCQUFxQixHQUFHLE1BQU0sQ0FBQyxPQUFPLEdBQUcsbUJBQW1CLEdBQUcsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQzdILElBQUksTUFBTSxHQUFHLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUM1QixJQUFJLElBQUksQ0FBQyxXQUFXLENBQUMsVUFBVTtZQUFFLE9BQU8sQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDckQsSUFBSSxJQUFJLENBQUMsV0FBVyxDQUFDLFVBQVU7WUFBRSxPQUFPLENBQUMsR0FBRyxDQUFDLDRCQUE0QixHQUFHLE1BQU0sQ0FBQyxrQkFBa0IsQ0FBQyxDQUFBO1FBQzFHLElBQUksTUFBTSxDQUFDLE9BQU8sSUFBSSxLQUFLLEVBQUUsQ0FBQztZQUN4QixJQUFJLFdBQVcsR0FBRyxjQUFjLEVBQUUsQ0FBQztZQUNuQyxJQUFJLElBQUksQ0FBQyxXQUFXLENBQUMsVUFBVTtnQkFBRSxPQUFPLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxDQUFDO1lBQzFELElBQUksSUFBSSxDQUFDLFdBQVcsQ0FBQyxVQUFVO2dCQUFFLE9BQU8sQ0FBQyxHQUFHLENBQUMsMkJBQTJCLEdBQUcsV0FBVyxDQUFDLFlBQVksQ0FBQyxDQUFBO1lBQ3hHLElBQUksT0FBTyxXQUFXLENBQUMsWUFBWSxLQUFLLFdBQVcsRUFBRSxDQUFDO2dCQUNoRCxXQUFXLENBQUMsWUFBWSxHQUFHLENBQUMsQ0FBQztZQUMvQixDQUFDO1lBRUwsSUFBSSxDQUFDLFdBQVcsQ0FBQyxZQUFZLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxJQUFJLElBQUksQ0FBQyxFQUFFLENBQUM7Z0JBQzdELElBQUksV0FBVyxHQUFHO29CQUNoQixHQUFHLEVBQUUsSUFBSSxDQUFDLGVBQWU7b0JBQzdCLEtBQUssRUFBRSxTQUFTO29CQUNaLElBQUksRUFBRSxJQUFJO29CQUNkLE1BQU0sRUFBRSxNQUFNO29CQUNkLE1BQU0sRUFBRSxJQUFJLENBQUMsU0FBUztvQkFDdEIsUUFBUSxFQUFFLElBQUk7aUJBQ2YsQ0FBQztnQkFDSSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsV0FBVyxDQUFDLENBQUM7Z0JBQ25DLE9BQU87WUFDWCxDQUFDO1FBR0gsQ0FBQztRQUNELElBQUksSUFBSSxDQUFDLFdBQVcsQ0FBQyxVQUFVO1lBQUUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUUxRCxJQUFJLFdBQVcsR0FBRztZQUNoQixHQUFHLEVBQUUsSUFBSSxDQUFDLGdCQUFnQjtZQUM5QixLQUFLLEVBQUUsSUFBSSxDQUFDLGdCQUFnQjtZQUN4QixJQUFJLEVBQUUsSUFBSTtZQUNkLE1BQU0sRUFBRSxNQUFNO1lBQ2QsTUFBTSxFQUFFLElBQUksQ0FBQyxZQUFZO1lBQ3pCLFFBQVEsRUFBRSxJQUFJLENBQUMsY0FBYztTQUM5QixDQUFDO1FBQ0ksSUFBSSxDQUFDLGdCQUFnQixDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBR3pDLENBQUM7SUFDSSxjQUFjLENBQUMsSUFBUSxFQUFFLE1BQVU7UUFDdEMsSUFBSSxNQUFNLENBQUMsV0FBVyxDQUFDLFVBQVU7WUFBRSxPQUFPLENBQUMsR0FBRyxDQUFDLG1CQUFtQixDQUFDLENBQUM7UUFDdEUsSUFBSSxNQUFNLEdBQU0sRUFBRSxDQUFDO1FBQ25CLE1BQU0sR0FBRyxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDMUIsSUFBSSxNQUFNLENBQUMsV0FBVyxDQUFDLFVBQVU7WUFBRSxPQUFPLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ3ZELDhDQUE4QztRQUM5QyxNQUFNLENBQUMsTUFBTSxHQUFHLFFBQVEsQ0FBQztRQUV6QixNQUFNLENBQUMsUUFBUSxDQUFDLEdBQUcsTUFBTSxDQUFDLFNBQVMsQ0FBQztRQUNwQyxNQUFNLENBQUMsWUFBWSxDQUFDLHFCQUFxQixDQUFDLE1BQU0sRUFBRSxNQUFNLENBQUMsQ0FBQztJQUM1RCxDQUFDO0lBR0ksVUFBVSxDQUFDLENBQUssRUFBRSxNQUFVO1FBQ2pDLElBQUksTUFBTSxDQUFDLFdBQVcsQ0FBQyxVQUFVO1lBQUUsT0FBTyxDQUFDLEdBQUcsQ0FBQywwQkFBMEIsRUFBRyxNQUFNLENBQUMsU0FBUyxFQUFDLEVBQUMsR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBQyxDQUFDLENBQUM7UUFDakgsTUFBTSxDQUFDLE9BQU8sR0FBQyxFQUFFLENBQUM7UUFDdEIsMkJBQTJCO1FBQzNCLHVCQUF1QjtRQUN2QixNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsaUJBQWlCLEVBQUUsRUFBRSxTQUFTLEVBQUUsTUFBTSxDQUFDLFNBQVMsSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDLENBQUM7UUFDL0csT0FBTyxDQUFDLEdBQUcsQ0FBQyxXQUFXLEVBQUUsTUFBTSxDQUFDLGlCQUFpQixFQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFFLENBQUE7UUFDakUsTUFBTSxDQUFDLG9CQUFvQixDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsaUJBQWlCLENBQUMsQ0FBQztRQUMzRCxNQUFNLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQztRQUN4QixNQUFNLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQztRQUNwQixJQUFJLENBQUMsbUJBQW1CLENBQUMsTUFBTSxFQUFFLEtBQUssQ0FBQyxDQUFDO0lBQzVDLENBQUM7SUFDRCw4Q0FBOEM7SUFDekMsZUFBZSxDQUFDLE1BQVU7UUFDN0IsSUFBSSxPQUFPLE1BQU0sQ0FBQyxnQkFBZ0IsSUFBSSxXQUFXLEVBQUUsQ0FBQztZQUNsRCxJQUFJLE1BQU0sQ0FBQyxPQUFPLElBQUksSUFBSSxFQUFFLENBQUM7Z0JBQzNCLElBQUksTUFBTSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsSUFBSSxFQUFFLEVBQUUsQ0FBQztvQkFDakMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLGFBQWEsRUFBRSxPQUFPLENBQUMsQ0FBQztvQkFDbEQsT0FBTztnQkFDVCxDQUFDO1lBQ0gsQ0FBQztpQkFDSSxDQUFDO2dCQUNKLElBQUksTUFBTSxDQUFDLE9BQU8sSUFBSSxJQUFJLEVBQUUsQ0FBQztvQkFDM0IsSUFBSSxNQUFNLENBQUMsU0FBUyxJQUFJLEVBQUUsRUFBRSxDQUFDO3dCQUMzQixJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsYUFBYSxFQUFFLE9BQU8sQ0FBQyxDQUFDO3dCQUNsRCxPQUFPO29CQUNULENBQUM7Z0JBQ0gsQ0FBQztZQUNILENBQUM7UUFDSCxDQUFDO1FBRUQsSUFBSSxNQUFNLENBQUMsV0FBVyxDQUFDLFVBQVU7WUFBRSxPQUFPLENBQUMsR0FBRyxDQUFDLGtDQUFrQyxFQUMvRSxNQUFNLENBQUMsaUJBQWlCLEVBQUUsTUFBTSxDQUFDLGdCQUFnQixFQUFFLE1BQU0sQ0FBQyxZQUFZLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxDQUFDLGNBQWMsRUFBRSxVQUFVLEVBQUUsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ2hKLE1BQU0sQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUNyQixJQUFJLENBQUMsbUJBQW1CLENBQUMsTUFBTSxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBQ3hDLHdEQUF3RDtRQUN4RCxJQUFLLENBQUMsT0FBTyxNQUFNLENBQUMsZ0JBQWdCLElBQUksV0FBVyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsZ0JBQWdCLENBQUMsTUFBTSxJQUFJLENBQUMsQ0FBQyxFQUM3RixDQUFDO1lBQ0MsSUFBSSxDQUFDLG1CQUFtQixDQUFDLE1BQU0sRUFBRSxLQUFLLENBQUMsQ0FBQztZQUN4QyxJQUFHLE1BQU0sQ0FBQyxPQUFPLElBQUksSUFBSSxFQUFDLENBQUM7Z0JBQ3pCLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRSxNQUFNLENBQUMsZ0JBQWdCLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFDLENBQUM7b0JBQ3RELElBQUksUUFBUSxHQUFHLElBQUksR0FBQyxNQUFNLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxDQUFDLEdBQUcsVUFBVSxDQUFDO29CQUM1RCxJQUFJLE1BQU0sQ0FBQyxvQkFBb0IsRUFBQyxDQUFDO3dCQUMvQixNQUFNLENBQUMsb0JBQW9CLENBQUMsUUFBUSxDQUFDLEdBQUcsSUFBSSxDQUFDO29CQUMvQyxDQUFDO29CQUNELElBQUksTUFBTSxHQUFHLE1BQU0sQ0FBQyxpQkFBaUIsQ0FBQyxNQUFNLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQTtvQkFDakUsSUFBSSxNQUFNLENBQUMsV0FBVyxDQUFDLFVBQVU7d0JBQUUsT0FBTyxDQUFDLEdBQUcsQ0FBQyx5Q0FBeUMsRUFBQyxNQUFNLEVBQUUsTUFBTSxDQUFDLGlCQUFpQixDQUFDLENBQUM7b0JBQ3pILElBQUksT0FBTyxNQUFNLEtBQUssV0FBVyxFQUFDLENBQUM7d0JBQ25DLE1BQU0sQ0FBQyxpQkFBaUIsQ0FBQyxNQUFNLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxNQUFNLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxDQUFDO29CQUM5RSxDQUFDO2dCQUNMLENBQUM7WUFDSCxDQUFDO1lBQ0QsSUFBSSxNQUFNLENBQUMsV0FBVyxDQUFDLFVBQVU7Z0JBQUUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxvQ0FBb0MsRUFBRSxNQUFNLENBQUMsaUJBQWlCLENBQUMsQ0FBQztRQUNqSCxDQUFDO2FBRUQsQ0FBQztZQUNDLElBQUksTUFBTSxDQUFDLFdBQVcsQ0FBQyxVQUFVO2dCQUFFLE9BQU8sQ0FBQyxHQUFHLENBQUMsNkJBQTZCLEVBQUUsTUFBTSxDQUFDLGFBQWEsRUFBRSxNQUFNLENBQUMsU0FBUyxDQUFDLENBQUM7WUFDdEgsSUFBSSxNQUFNLENBQUMsYUFBYSxJQUFJLEVBQUUsSUFBSyxNQUFNLENBQUMsU0FBUyxJQUFJLEVBQUUsRUFBQyxDQUFDO2dCQUN6RCxNQUFNLENBQUMsaUJBQWlCLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxTQUFTLENBQUM7WUFDcEUsQ0FBQztZQUNELElBQUksTUFBTSxDQUFDLFdBQVcsQ0FBQyxVQUFVO2dCQUFFLE9BQU8sQ0FBQyxHQUFHLENBQUMsb0NBQW9DLEVBQUUsTUFBTSxDQUFDLGlCQUFpQixDQUFDLENBQUM7UUFDakgsQ0FBQztRQUNELElBQUksTUFBTSxDQUFDLFdBQVcsQ0FBQyxVQUFVO1lBQUUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxrQ0FBa0MsRUFBRSxNQUFNLENBQUMsaUJBQWlCLENBQUMsQ0FBQztRQUM3RyxNQUFNLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDckIsTUFBTSxDQUFDLFNBQVMsR0FBRyxNQUFNLENBQUMsbUJBQW1CLENBQzNDLE1BQU0sQ0FBQyxpQkFBaUIsQ0FDekIsQ0FBQztRQUNGLE1BQU0sQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFDO1lBQ3pCLFNBQVMsRUFBRSxJQUFJO1NBQ2hCLENBQUMsQ0FBQztRQUNILElBQUksTUFBTSxDQUFDLFdBQVcsQ0FBQyxVQUFVO1lBQUUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxtQkFBbUIsRUFBRSxNQUFNLENBQUMsU0FBUyxDQUFDLENBQUE7UUFDckYsTUFBTSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUM7UUFDcEIsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQ3JDLDBDQUEwQztJQUMxQyxDQUFDO0lBRUksa0JBQWtCLENBQUMsTUFBVSxFQUFFLE1BQVU7UUFDOUMsc0JBQXNCO1FBQ3RCLElBQUksV0FBVyxHQUFHLGNBQWMsRUFBRSxDQUFDO1FBQ3JDLElBQUksTUFBTSxDQUFDLFdBQVcsQ0FBQyxVQUFVO1lBQUUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxpREFBaUQsR0FBRyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDbEgsSUFBSSxNQUFNLENBQUMsV0FBVyxDQUFDLFVBQVU7WUFBRSxPQUFPLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBQzlELElBQUksQ0FBQyxXQUFXLENBQUMsWUFBWSxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsSUFBSSxJQUFJLENBQUMsRUFBRSxDQUFDO1lBQy9ELElBQUksV0FBVyxHQUFHO2dCQUNoQixHQUFHLEVBQUUsSUFBSSxDQUFDLGVBQWU7Z0JBQzNCLEtBQUssRUFBRSxTQUFTO2dCQUNkLElBQUksRUFBRSxJQUFJO2dCQUNaLE1BQU0sRUFBRSxNQUFNO2dCQUNkLE1BQU0sRUFBRSxJQUFJLENBQUMsU0FBUztnQkFDdEIsUUFBUSxFQUFFLElBQUk7YUFDZixDQUFDO1lBQ0UsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFdBQVcsQ0FBQyxDQUFDO1lBQ25DLE9BQU87UUFDWCxDQUFDO1FBQ0gsSUFBSSxNQUFNLENBQUMsV0FBVyxDQUFDLFVBQVU7WUFBRSxPQUFPLENBQUMsR0FBRyxDQUFDLHlCQUF5QixFQUFFLE1BQU0sQ0FBQyxjQUFjLEVBQUUsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUE7UUFDdkgsSUFBSSxPQUFPLE1BQU0sQ0FBQyxjQUFjLEtBQUssV0FBVyxFQUFFLENBQUM7WUFDakQsSUFBSSxNQUFNLEdBQU8sRUFBRSxDQUFDO1lBQ2xCLCtEQUErRDtZQUMvRCxJQUFJLFNBQVMsR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQztZQUNqQyxJQUFJLE1BQU0sQ0FBQyxXQUFXLENBQUMsVUFBVTtnQkFBRSxPQUFPLENBQUMsR0FBRyxDQUFDLHlCQUF5QixFQUFFLFNBQVMsQ0FBQyxDQUFBO1lBRXRGLE1BQU0sR0FBRyxTQUFTLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxjQUFjLENBQUMsQ0FBQztZQUM3QyxJQUFJLE1BQU0sR0FBRyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUM7WUFDOUIsSUFBSSxNQUFNLENBQUMsV0FBVyxDQUFDLFVBQVU7Z0JBQUUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxxQkFBcUIsRUFBRSxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQTtZQUN6RixJQUFJLE9BQU8sR0FBRyxNQUFNLENBQUMsWUFBWSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxNQUFNLENBQUMsY0FBYyxDQUFDLENBQUM7WUFDbkYsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLEdBQUcsT0FBTyxDQUFDO1lBQzNCLElBQUksTUFBTSxDQUFDLFdBQVcsQ0FBQyxVQUFVO2dCQUFFLE9BQU8sQ0FBQyxHQUFHLENBQUMsZUFBZSxFQUFFLE1BQU0sQ0FBQyxDQUFBO1lBRXZFLE1BQU0sQ0FBQyxRQUFRLENBQUMsR0FBRyxNQUFNLENBQUMsU0FBUyxDQUFDO1lBQ3RDLElBQUksTUFBTSxJQUFJLE1BQU0sQ0FBQyxTQUFTLEVBQUUsQ0FBQztnQkFDN0IsTUFBTSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsQ0FBQztnQkFDekIsTUFBTSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDakMsQ0FBQztRQUVILENBQUM7O1lBRUMsTUFBTSxDQUFDLGFBQWEsRUFBRSxDQUFDO0lBRzNCLENBQUM7SUFDTSxnQkFBZ0IsQ0FBQyxNQUFVO1FBQ2xDLElBQUksSUFBSSxDQUFDLFdBQVcsQ0FBQyxVQUFVO1lBQUUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxvQ0FBb0MsRUFBRSxNQUFNLENBQUMsU0FBUyxDQUFDLENBQUM7UUFHckcsSUFBSSxNQUFNLENBQUMsU0FBUyxFQUFFLENBQUM7WUFDckIsSUFBSSxJQUFJLENBQUMsV0FBVyxDQUFDLFVBQVU7Z0JBQUUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxvQ0FBb0MsRUFBRSxNQUFNLENBQUMsU0FBUyxDQUFDLENBQUM7WUFDckcsSUFBSSxNQUFNLEdBQU8sRUFBRSxDQUFDO1lBQ2hCLE1BQU0sR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLEVBQUUsRUFBRSxNQUFNLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQ3ZELElBQUksSUFBSSxDQUFDLFdBQVcsQ0FBQyxVQUFVO2dCQUFFLE9BQU8sQ0FBQyxHQUFHLENBQUMsZUFBZSxFQUFFLE1BQU0sQ0FBQyxTQUFTLENBQUMsS0FBSyxFQUFFLFNBQVMsRUFBRSxNQUFNLENBQUMsS0FBSyxFQUFFLFdBQVcsRUFBRSxNQUFNLENBQUMsQ0FBQztZQUNwSSxJQUFJLE1BQU0sQ0FBQyxTQUFTLENBQUMsS0FBSyxLQUFLLElBQUksRUFBRSxDQUFDO2dCQUNwQyxJQUFJLE1BQU0sQ0FBQyxLQUFLLElBQUksSUFBSSxFQUFFLENBQUM7b0JBQ3pCLElBQUksSUFBSSxDQUFDLFdBQVcsQ0FBQyxVQUFVO3dCQUFFLE9BQU8sQ0FBQyxHQUFHLENBQUMsY0FBYyxFQUFFLE1BQU0sQ0FBQyxDQUFDO29CQUNoRSxxRUFBcUU7b0JBQ3ZFLDZCQUE2QjtvQkFDNUIsSUFBSSxJQUFJLENBQUMsV0FBVyxDQUFDLFVBQVU7d0JBQUUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO29CQUUvRCxJQUFJLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxJQUFJLElBQUksSUFBSSxPQUFPLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksSUFBSSxXQUFXO3dCQUM3RSxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksR0FBRyxFQUFFLElBQUksRUFBRSxFQUFFLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRSxDQUFDO29CQUN4QyxxQ0FBcUM7b0JBQ3pDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxNQUFNLENBQUMsQ0FBQztvQkFDdkMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxTQUFTLENBQUM7Z0JBQ3RDLENBQUM7cUJBQ0EsQ0FBQztvQkFFSixJQUFJLElBQUksQ0FBQyxXQUFXLENBQUMsVUFBVTt3QkFBRSxPQUFPLENBQUMsR0FBRyxDQUFDLHlCQUF5QixFQUFFLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLFVBQVUsRUFBRSxNQUFNLENBQUMsQ0FBQztvQkFDMUcsb0NBQW9DO29CQUN4QyxJQUFJLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsY0FBYyxDQUFDLENBQUMsTUFBTSxJQUFJLE1BQU0sQ0FBQyxTQUFTLEVBQUUsQ0FBQzt3QkFDeEUsTUFBTSxDQUFDLFFBQVEsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxTQUFTLENBQUM7b0JBQ3RDLENBQUM7eUJBQ0EsQ0FBQzt3QkFDQSxNQUFNLENBQUMsUUFBUSxDQUFDLEdBQUcsTUFBTSxDQUFDLFNBQVMsQ0FBQztvQkFDdEMsQ0FBQztvQkFDRCxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLGNBQWMsQ0FBQyxHQUFHLE1BQU0sQ0FBQztvQkFDdEQsaUdBQWlHO29CQUNqRyw2QkFBNkI7Z0JBQy9CLENBQUM7Z0JBQ0QsaUpBQWlKO2dCQUNySixJQUFJLElBQUksQ0FBQyxXQUFXLENBQUMsVUFBVTtvQkFBRSxPQUFPLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDN0QsQ0FBQztZQUNELElBQUksSUFBSSxDQUFDLFdBQVcsQ0FBQyxVQUFVO2dCQUFFLE9BQU8sQ0FBQyxHQUFHLENBQUMsV0FBVyxDQUFDLENBQUE7WUFDekQsTUFBTSxDQUFDLFdBQVcsRUFBRSxDQUFDO1lBQ3JCLElBQUksSUFBSSxDQUFDLFdBQVcsQ0FBQyxVQUFVO2dCQUFFLE9BQU8sQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLENBQUE7UUFDOUQsQ0FBQztJQUNILENBQUM7SUFDTSxnQkFBZ0IsQ0FBQyxNQUFNO1FBQzlCLGtEQUFrRDtRQUNoRCxNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsY0FBYyxDQUFDLENBQUM7UUFDNUMsTUFBTSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7UUFDckIsTUFBTSxDQUFDLGNBQWMsR0FBRyxTQUFTLENBQUM7UUFDbEMsTUFBTSxDQUFDLFNBQVMsR0FBRyxTQUFTLENBQUM7UUFFL0IsZUFBZTtRQUNmLDJCQUEyQjtRQUMzQiw4REFBOEQ7SUFDOUQsQ0FBQztJQUNJLGtCQUFrQixDQUFDLE1BQVU7UUFDaEMsTUFBTSxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQ3JCLE1BQU0sQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDO1FBQ3hCLElBQUksQ0FBQyxZQUFZLEdBQUcsRUFBRSxDQUFDO0lBQ3pCLENBQUM7SUFDSSx3QkFBd0IsQ0FBQyxJQUFRLEVBQUUsTUFBVSxFQUFFLE1BQVU7UUFDNUQsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDL0IsSUFBSSxNQUFNLENBQUMsT0FBTyxJQUFJLElBQUksRUFBRSxDQUFDO1lBQ3pCLElBQUksV0FBVyxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUM7WUFDL0MsSUFBSSxXQUFXLEdBQUc7Z0JBQ2hCLE1BQU0sRUFBRSxjQUFjO2dCQUN0QixLQUFLLEVBQUUsV0FBVzthQUNuQixDQUFDO1lBQ0YsY0FBYyxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBQzlCLENBQUM7UUFFSCxJQUFJLE9BQU8sTUFBTSxDQUFDLGlCQUFpQixLQUFLLFdBQVcsRUFBRSxDQUFDO1lBQ3BELElBQUksT0FBTyxHQUFPLEVBQUUsQ0FBQztZQUNmLE9BQU8sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDekIsTUFBTSxDQUFDLGlCQUFpQixDQUFDLEtBQUssQ0FBQyxNQUFNLEVBQUUsT0FBTyxDQUFDLENBQUM7UUFDbEQsQ0FBQztRQUNELElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDdkMsTUFBTSxDQUFDLG1CQUFtQixDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUMxQyxvREFBb0Q7SUFDcEQsQ0FBQztJQUNJLGdCQUFnQixDQUFDLElBQVMsRUFBRSxNQUFVO1FBQzNDLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxJQUFJLFdBQVcsQ0FBQyxFQUFFLENBQUM7WUFDOUUsT0FBTztRQUNULENBQUM7UUFDRCxJQUFJLEtBQUssR0FBRyxLQUFLLENBQUM7UUFDcEIsSUFBSSxJQUFJLENBQUMsV0FBVyxDQUFDLFVBQVU7WUFBRSxPQUFPLENBQUMsR0FBRyxDQUFDLHdCQUF3QixDQUFDLENBQUM7UUFDckUsTUFBTSxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBRXZCLElBQUksTUFBTSxDQUFDLGVBQWUsQ0FBQyxXQUFXLElBQUksSUFBSSxFQUFFLENBQUM7WUFDL0MsSUFBSSxJQUFJLENBQUMsV0FBVyxDQUFDLFVBQVU7Z0JBQUUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxZQUFZLEdBQUcsTUFBTSxDQUFDLGVBQWUsQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUFDLENBQUM7WUFDMUcsSUFBSSxNQUFNLENBQUMsZUFBZSxDQUFDLFdBQVcsQ0FBQyxTQUFTLElBQUksQ0FBQyxFQUFFLENBQUM7Z0JBQ3BELElBQUksV0FBVyxHQUFHO29CQUNoQixHQUFHLEVBQUUsSUFBSSxDQUFDLFdBQVc7b0JBQ3ZCLEtBQUssRUFBRSxTQUFTO29CQUNkLElBQUksRUFBRSxJQUFJO29CQUNaLE1BQU0sRUFBRSxNQUFNO29CQUNkLE1BQU0sRUFBRSxJQUFJLENBQUMsU0FBUztvQkFDdEIsUUFBUSxFQUFFLElBQUk7aUJBQ2YsQ0FBQztnQkFDRSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsV0FBVyxDQUFDLENBQUM7Z0JBQ25DLE9BQU87WUFDWCxDQUFDO1FBQ0gsQ0FBQztRQUNILElBQUksTUFBTSxHQUFHLEVBQUUsQ0FBQztRQUNoQixLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDO1lBQ3BELElBQUksSUFBSSxDQUFDLFdBQVcsQ0FBQyxVQUFVO2dCQUFFLE9BQU8sQ0FBQyxHQUFHLENBQUMseUNBQXlDLEVBQUUsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFBO1lBQzFILElBQUksT0FBTyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxJQUFJLFdBQVcsRUFBRSxDQUFDO2dCQUN0RCxNQUFNLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUNwQyxNQUFNLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQzNCLENBQUM7UUFDSCxDQUFDO1FBQ0QsSUFBSSxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7WUFDakIsSUFBSSxDQUFDLHdCQUF3QixDQUFDLElBQUksRUFBRSxNQUFNLEVBQUUsTUFBTSxDQUFDLENBQUM7WUFDcEQsT0FBTztRQUNULENBQUM7UUFDRCxJQUFJLElBQUksQ0FBQyxXQUFXLENBQUMsVUFBVTtZQUFFLE9BQU8sQ0FBQyxHQUFHLENBQUMscUJBQXFCLEVBQUUsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ25GLElBQUksTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLElBQUksQ0FBQyxFQUFFLENBQUM7WUFDNUIsSUFBSSxJQUFJLEdBQUcsV0FBVyxDQUFDO1lBQ3ZCLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLElBQUksRUFBRSxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxFQUFFO2dCQUNwRCxNQUFNLENBQUMsSUFBSSxHQUFHLEVBQUUsQ0FBQztnQkFDakIsb0RBQW9EO2dCQUNwRCxNQUFNLENBQUMsbUJBQW1CLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO2dCQUN4QyxLQUFLLElBQUksQ0FBQyxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQztvQkFDM0QsSUFBSSxPQUFPLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLElBQUksV0FBVyxFQUFFLENBQUM7d0JBQ3hELE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxXQUFXLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQzt3QkFDdkUsT0FBTyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDO29CQUN6QyxDQUFDO29CQUNILElBQUksSUFBSSxDQUFDLFdBQVcsQ0FBQyxVQUFVO3dCQUFFLE9BQU8sQ0FBQyxHQUFHLENBQUMseUNBQXlDLEVBQUUsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFBO2dCQUN4SCxDQUFDO2dCQUVELElBQUksSUFBSSxDQUFDLFdBQVcsQ0FBQyxVQUFVO29CQUFFLE9BQU8sQ0FBQyxHQUFHLENBQUMsd0JBQXdCLEVBQUUsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUE7Z0JBQzdGLElBQUksSUFBSSxDQUFDLFdBQVcsQ0FBQyxVQUFVO29CQUFFLE9BQU8sQ0FBQyxHQUFHLENBQUMsK0JBQStCLEVBQUUsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFBO2dCQUM3RyxJQUFJLE1BQU0sQ0FBQyxPQUFPLElBQUksSUFBSSxFQUFFLENBQUM7b0JBQ3pCLElBQUksV0FBVyxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUM7b0JBQy9DLElBQUksV0FBVyxHQUFHO3dCQUNoQixNQUFNLEVBQUUsY0FBYzt3QkFDdEIsS0FBSyxFQUFFLFdBQVc7cUJBQ25CLENBQUM7b0JBQ0YsY0FBYyxDQUFDLFdBQVcsQ0FBQyxDQUFDO2dCQUM5QixDQUFDO2dCQUNILElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxTQUFTLEVBQUUseUJBQXlCLENBQUMsQ0FBQztnQkFDNUQsSUFBSSxPQUFPLE1BQU0sQ0FBQyxpQkFBaUIsS0FBSyxXQUFXLEVBQUUsQ0FBQztvQkFDcEQsSUFBSSxPQUFPLEdBQU8sRUFBRSxDQUFDO29CQUNmLE9BQU8sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7b0JBQ3pCLE1BQU0sQ0FBQyxpQkFBaUIsQ0FBQyxLQUFLLENBQUMsTUFBTSxFQUFFLE9BQU8sQ0FBQyxDQUFDO2dCQUNsRCxDQUFDO2dCQUNELElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLENBQUM7Z0JBQ3pDLHNDQUFzQztnQkFDdEMsU0FBUztnQkFDVCxTQUFTO2dCQUNULG9EQUFvRDtZQUNwRCxDQUFDLEVBQ0QsR0FBRyxDQUFDLEVBQUU7Z0JBQ0osS0FBSyxJQUFJLENBQUMsR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDO29CQUNqRCxJQUFJLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxJQUFJLE1BQU0sQ0FBQyxTQUFTLEVBQUUsQ0FBQzt3QkFDOUMsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO29CQUMzQixDQUFDO2dCQUNILENBQUM7Z0JBQ0QsSUFBSSxJQUFJLENBQUMsV0FBVyxDQUFDLFVBQVU7b0JBQUUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxNQUFNLEVBQUUsR0FBRyxDQUFDLENBQUE7Z0JBQ3pELElBQUksTUFBTSxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDLENBQUM7Z0JBQ25DLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsUUFBUSxHQUFHLE1BQU0sQ0FBQyxDQUFDO2dCQUNsRCxLQUFLLEdBQUcsSUFBSSxDQUFDO1lBQ2YsQ0FBQyxDQUFDLENBQUM7UUFDTixDQUFDO2FBQ0csQ0FBQztZQUNGLElBQUksSUFBSSxDQUFDLFdBQVcsQ0FBQyxVQUFVO2dCQUFFLE9BQU8sQ0FBQyxHQUFHLENBQUMsa0JBQWtCLEdBQUcsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQ25GLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUTtnQkFDcEIsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFNBQVMsRUFBRSxvQkFBb0IsQ0FBQyxDQUFDO1FBQ3pELENBQUM7UUFDQyxJQUFJLENBQUMsS0FBSyxFQUFDLENBQUM7WUFDVixNQUFNLENBQUMsbUJBQW1CLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQ3hDLG9EQUFvRDtRQUN0RCxDQUFDO0lBQ0wsQ0FBQztJQUNJLFdBQVcsQ0FBQyxHQUFPO1FBRXRCLElBQUksTUFBTSxHQUFHLEVBQUUsQ0FBQztRQUVoQixJQUFJLE9BQU8sR0FBRyxDQUFDLEtBQUssQ0FBQyxLQUFLLElBQUksV0FBVyxFQUFDLENBQUM7WUFDekMsTUFBTSxHQUFHLEdBQUcsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDO1FBQzNCLENBQUM7O1lBRUMsTUFBTSxHQUFHLEdBQUcsQ0FBQyxLQUFLLENBQUM7UUFFbkIsT0FBTyxNQUFNLENBQUM7SUFFbEIsQ0FBQztJQUlJLGlCQUFpQixDQUFDLElBQVMsRUFBRSxNQUFVO1FBQzVDLElBQUksSUFBSSxDQUFDLFdBQVcsQ0FBQyxVQUFVO1lBQUUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxjQUFjLEVBQUUsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFBO1FBQ3JFLElBQUksT0FBTyxJQUFJLElBQUksV0FBVyxJQUFJLE9BQU8sTUFBTSxDQUFDLElBQUksSUFBSSxXQUFXO1lBQ25FLE9BQU87UUFFVCxJQUFJLEtBQUssR0FBRyxLQUFLLENBQUM7UUFDbEIsdUpBQXVKO1FBQ3ZKLDBFQUEwRTtRQUMxRSxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLElBQUksQ0FBQyxDQUFDLElBQUksTUFBTSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsSUFBSSxJQUFJLEVBQ2hFLENBQUM7WUFDQyxLQUFLLEdBQUcsSUFBSSxDQUFDO1FBQ2YsQ0FBQztRQUNILElBQUksS0FBSyxJQUFJLElBQUksRUFBRSxDQUFDO1lBQ2hCLElBQUksV0FBVyxHQUFHO2dCQUNoQixHQUFHLEVBQUUsSUFBSSxDQUFDLGNBQWM7Z0JBQzFCLEtBQUssRUFBRSxJQUFJLENBQUMsZ0JBQWdCO2dCQUMxQixJQUFJLEVBQUUsSUFBSTtnQkFDWixNQUFNLEVBQUUsTUFBTTtnQkFDZCxNQUFNLEVBQUUsSUFBSSxDQUFDLFlBQVk7Z0JBQ3pCLFFBQVEsRUFBRSxJQUFJLENBQUMsb0JBQW9CO2FBQ3BDLENBQUM7WUFDRSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsV0FBVyxDQUFDLENBQUM7UUFDdkMsQ0FBQzthQUNFLENBQUM7WUFDSixJQUFJLENBQUMsb0JBQW9CLENBQUMsSUFBSSxFQUFFLE1BQU0sQ0FBQyxDQUFDO1FBQ3hDLENBQUM7SUFDSCxDQUFDO0lBQ0ksb0JBQW9CLENBQUMsSUFBUyxFQUFFLE1BQVU7UUFDN0MsSUFBSSxXQUFXLEdBQUc7WUFDaEIsTUFBTSxFQUFFLGNBQWM7WUFDdEIsS0FBSyxFQUFFLENBQUM7U0FDVCxDQUFDO1FBQ0YsY0FBYyxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBQzVCLElBQUksTUFBTSxDQUFDLFdBQVcsQ0FBQyxVQUFVO1lBQUUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLEdBQUcsTUFBTSxDQUFDLGFBQWEsRUFBRSxNQUFNLENBQUMsWUFBWSxDQUFDLENBQUM7UUFDbkcsSUFBSSxNQUFNLENBQUMsV0FBVyxDQUFDLFVBQVU7WUFBRSxPQUFPLENBQUMsR0FBRyxDQUFDLGlCQUFpQixFQUFFLE1BQU0sQ0FBQyxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFBO1FBQ3hILElBQUksTUFBTSxDQUFDLE9BQU8sSUFBSSxJQUFJLEVBQUUsQ0FBQztZQUMzQixJQUFJLE1BQU0sQ0FBQyxRQUFRLElBQUksSUFBSSxFQUFFLENBQUM7Z0JBQzFCLElBQUksR0FBRyxNQUFNLENBQUMsaUJBQWlCLENBQUM7Z0JBQ2xDLElBQUksTUFBTSxDQUFDLFdBQVcsQ0FBQyxVQUFVO29CQUFFLE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUM7Z0JBQ3hELElBQUksQ0FBQyxPQUFPLE1BQU0sQ0FBQyxnQkFBZ0IsSUFBSSxXQUFXLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLElBQUksQ0FBQyxDQUFDLEVBQUUsQ0FBQztvQkFDN0YsSUFBSSxNQUFNLENBQUMsV0FBVyxDQUFDLFVBQVU7d0JBQUUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQztvQkFDeEQsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQzt3QkFDeEQsSUFBSSxNQUFNLENBQUMsV0FBVyxDQUFDLFVBQVU7NEJBQUUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxPQUFPLEVBQUUsTUFBTSxDQUFDLGlCQUFpQixFQUFFLE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO3dCQUM1RyxJQUFJLE1BQU0sR0FBRyxNQUFNLENBQUMsaUJBQWlCLENBQUMsTUFBTSxDQUFDLGdCQUFnQixDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUE7d0JBQ2pFLElBQUksT0FBTyxNQUFNLEtBQUssV0FBVyxFQUFDLENBQUM7NEJBQ2pDLElBQUksTUFBTSxDQUFDLFdBQVcsQ0FBQyxVQUFVO2dDQUFFLE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUM7NEJBQzFELE1BQU0sQ0FBQyxpQkFBaUIsQ0FBQyxNQUFNLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxNQUFNLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxDQUFDO3dCQUM5RSxDQUFDO29CQUNILENBQUM7Z0JBQ0gsQ0FBQztxQkFDRSxDQUFDO29CQUNGLE1BQU0sQ0FBQyxpQkFBaUIsQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLEdBQUcsTUFBTSxDQUFDLFNBQVMsQ0FBQztnQkFDcEUsQ0FBQztnQkFFRCxnREFBZ0Q7Z0JBQ2xELElBQUksTUFBTSxDQUFDLFdBQVcsQ0FBQyxVQUFVO29CQUFFLE9BQU8sQ0FBQyxHQUFHLENBQUMsdUJBQXVCLEdBQUcsTUFBTSxDQUFDLGFBQWEsQ0FBQyxDQUFDO2dCQUM3RixJQUFJLE1BQU0sQ0FBQyxXQUFXLENBQUMsVUFBVTtvQkFBRSxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO2dCQUNyRCxNQUFNLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztnQkFDdkIsSUFBSSxNQUFNLENBQUMsV0FBVyxDQUFDLFVBQVU7b0JBQUUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxlQUFlLENBQUMsQ0FBQztnQkFDaEUsSUFBSSxNQUFNLENBQUMsV0FBVyxDQUFDLFVBQVU7b0JBQUUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUN2RCxDQUFDO1FBQ0gsQ0FBQztRQUVILElBQUksTUFBTSxDQUFDLFdBQVcsQ0FBQyxVQUFVO1lBQUUsT0FBTyxDQUFDLEdBQUcsQ0FBQyw0Q0FBNEMsR0FBRyxNQUFNLENBQUMsUUFBUSxHQUFHLG1CQUFtQixHQUFHLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUNwSiwrREFBK0Q7UUFFakUsSUFBSSxJQUFJLEdBQUcsVUFBVSxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUM7UUFDdEMsSUFBSSxNQUFNLENBQUMsUUFBUSxJQUFJLElBQUksRUFBRSxDQUFDO1lBQzVCLElBQUksTUFBTSxDQUFDLFdBQVcsQ0FBQyxVQUFVO2dCQUFFLE9BQU8sQ0FBQyxHQUFHLENBQUMsbUJBQW1CLEVBQUUsTUFBTSxDQUFDLFNBQVMsRUFBRSxlQUFlLEVBQUUsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxRQUFRLEVBQUUsSUFBSSxDQUFDLENBQUE7WUFDdEksSUFBSSxNQUFNLEdBQUcsRUFBRSxDQUFDO1lBQ3BCLElBQUksT0FBTyxNQUFNLENBQUMsU0FBUyxJQUFJLFdBQVcsRUFBRSxDQUFDO2dCQUN2QyxvQkFBb0I7Z0JBQ3hCLElBQUksTUFBTSxDQUFDLFdBQVcsQ0FBQyxVQUFVO29CQUFFLE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBTyxFQUFFLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztnQkFFeEUsSUFBSSxPQUFPLElBQUksQ0FBQyxJQUFJLElBQUksUUFBUTtvQkFDOUIsTUFBTSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxvQkFBb0I7O29CQUU1QyxNQUFNLEdBQUcsSUFBSSxDQUFDLENBQUMsNkJBQTZCO1lBQzVDLENBQUM7O2dCQUVFLE1BQU0sR0FBRyxNQUFNLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQztZQUVqQyxNQUFNLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQztZQUM5QixJQUFJLENBQUMsT0FBTyxNQUFNLENBQUMsY0FBYyxLQUFLLFdBQVcsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLGNBQWMsSUFBSSxJQUFJLENBQUMsRUFBRSxDQUFDO2dCQUNoRixJQUFJLEdBQUcsSUFBSSxHQUFHLE1BQU0sQ0FBQyxZQUFZLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBRXhELENBQUM7aUJBQ0YsQ0FBQztnQkFDRSxJQUFJLE1BQU0sQ0FBQyxXQUFXLENBQUMsVUFBVTtvQkFBRSxPQUFPLENBQUMsR0FBRyxDQUFDLHVCQUF1QixFQUFFLE1BQU0sQ0FBQyxjQUFjLENBQUMsQ0FBQTtnQkFDOUYsTUFBTSxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUMscUJBQXFCLENBQUMsTUFBTSxFQUFFLE1BQU0sQ0FBQyxjQUFjLENBQUMsQ0FBQztnQkFDbEYsSUFBSSxHQUFHLElBQUksR0FBRyxNQUFNLENBQUMsY0FBYyxDQUFDO2dCQUNwQyxNQUFNLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQztZQUMvQixDQUFDO1lBQ1AsSUFBSSxDQUFDLE9BQU8sTUFBTSxDQUFDLGFBQWEsS0FBSyxXQUFXLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxhQUFhLElBQUksRUFBRSxDQUFDO2dCQUN6RSxJQUFJLEdBQUcsSUFBSSxHQUFHLFlBQVksR0FBRyxNQUFNLENBQUMsYUFBYSxDQUFDO1FBR3hELENBQUM7UUFDRCxJQUFJLEdBQUcsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3ZCLGlFQUFpRTtRQUNqRSxNQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7UUFDM0IsTUFBTSxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQ3pCLE1BQU0sQ0FBQyxrQkFBa0IsR0FBRyxFQUFFLENBQUM7UUFDL0IsTUFBTSxDQUFDLGtCQUFrQixDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7UUFDakMsTUFBTSxDQUFDLFVBQVUsR0FBRyxDQUFDLENBQUM7UUFDdEIsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBRzVCLE1BQU0sQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxNQUFVLEVBQUUsRUFBRTtZQUMvRCxJQUFJLE1BQU0sSUFBSSxJQUFJLEVBQUUsQ0FBQztnQkFDYixJQUFJLFlBQVksR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLEVBQUUsRUFBRSxNQUFNLEVBQUUsRUFBRSxDQUFDLENBQUE7Z0JBQ2hELElBQUksTUFBTSxDQUFDLFdBQVcsQ0FBQyxVQUFVO29CQUFFLE9BQU8sQ0FBQyxHQUFHLENBQUMsNkJBQTZCLENBQUMsQ0FBQztnQkFDOUUsc0VBQXNFO2dCQUN0RSxJQUFJLENBQUMsWUFBWSxHQUFHLEVBQUUsQ0FBQztnQkFDN0IsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDO29CQUM5QyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsR0FBRyxNQUFNLENBQUMsWUFBWSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO29CQUN2RixJQUFJLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sSUFBSSxXQUFXLEVBQUUsQ0FBQzt3QkFDM0MsT0FBTyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUM7d0JBQ3JDLE9BQU8sTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsV0FBVyxDQUFDO29CQUM1QyxDQUFDO2dCQUNILENBQUM7Z0JBQ0QsSUFBSSxNQUFNLENBQUMsV0FBVyxDQUFDLFVBQVU7b0JBQUUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUU3RSxNQUFNLENBQUMsSUFBSSxHQUFHLEVBQUUsQ0FBQztnQkFDakIsTUFBTSxHQUFHO29CQUNQLElBQUksRUFBRSxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUk7b0JBQ3pCLEtBQUssRUFBRSxRQUFRLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLEVBQUUsQ0FBQztpQkFDaEQsQ0FBQTtnQkFDRCxJQUFJLE1BQU0sQ0FBQyxRQUFRO29CQUNqQixNQUFNLENBQUMsWUFBWSxDQUFDLGdCQUFnQixDQUFDLFNBQVMsRUFBRSxzQkFBc0IsR0FBRyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUM7Z0JBQ3pGLE1BQU0sQ0FBQyxrQkFBa0IsR0FBRyxNQUFNLENBQUM7Z0JBQ25DLElBQUksTUFBTSxDQUFDLE9BQU8sSUFBSSxJQUFJLEVBQUUsQ0FBQztvQkFDbkIsSUFBSSxXQUFXLEdBQUc7d0JBQ2hCLE1BQU0sRUFBRSxjQUFjO3dCQUN0QixLQUFLLEVBQUUsTUFBTSxDQUFDLEtBQUs7cUJBQ3BCLENBQUM7b0JBQ0YsY0FBYyxDQUFDLFdBQVcsQ0FBQyxDQUFDO2dCQUM5QixDQUFDO1lBSUwsQ0FBQztZQUNELE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQztZQUM1QixNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksR0FBRyxNQUFNLENBQUM7WUFFaEMsSUFBSSxPQUFPLE1BQU0sQ0FBQyxnQkFBZ0IsS0FBSyxXQUFXO2dCQUN4QyxNQUFNLENBQUMsZ0JBQWdCLENBQUMsTUFBTSxDQUFDLENBQUM7WUFFMUMsSUFBSSxNQUFNLENBQUMsV0FBVyxDQUFDLFVBQVU7Z0JBQUUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxpQ0FBaUMsQ0FBQyxDQUFDO1lBQ2xGLElBQUksTUFBTSxDQUFDLFdBQVcsQ0FBQyxVQUFVO2dCQUFFLE9BQU8sQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDaEUsSUFBSSxNQUFNLENBQUMsV0FBVyxDQUFDLFVBQVU7Z0JBQUUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxnQkFBZ0IsR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDakYsSUFBSSxNQUFNLENBQUMsV0FBVyxDQUFDLFVBQVU7Z0JBQUUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxlQUFlLEdBQUcsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQ3JGLElBQUksTUFBTSxDQUFDLFdBQVcsQ0FBQyxVQUFVO2dCQUFFLE9BQU8sQ0FBQyxHQUFHLENBQUMsb0NBQW9DLEdBQUcsTUFBTSxDQUFDLDBCQUEwQixDQUFDLENBQUE7WUFDeEgsSUFBSSxDQUFDLE9BQU8sTUFBTSxDQUFDLDBCQUEwQixLQUFLLFdBQVcsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLDBCQUEwQixJQUFJLEtBQUssQ0FBQyxFQUFFLENBQUM7Z0JBQ3pHLElBQUksTUFBTSxDQUFDLFdBQVcsQ0FBQyxVQUFVO29CQUFFLE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUE7WUFDekQsQ0FBQztpQkFDRixDQUFDO2dCQUNFLElBQUksTUFBTSxDQUFDLFdBQVcsQ0FBQyxVQUFVO29CQUFFLE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUE7Z0JBQzdELElBQUksTUFBTSxDQUFDLHdCQUF3QixJQUFJLElBQUksRUFBRSxDQUFDO29CQUN0QyxJQUFJLE1BQU0sQ0FBQyxLQUFLLElBQUksQ0FBQzt3QkFDbkIsTUFBTSxDQUFDLG1CQUFtQixDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQzs7d0JBRTFELE1BQU0sQ0FBQyxtQkFBbUIsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7Z0JBQ3hDLENBQUM7WUFDTCxDQUFDO1lBQ0MsTUFBTSxDQUFDLFlBQVksQ0FBQyxtQkFBbUIsQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDeEQsQ0FBQyxFQUNMLENBQUMsR0FBTyxFQUFFLEVBQUU7WUFDVixNQUFNLENBQUMsSUFBSSxHQUFHLEVBQUUsQ0FBQztZQUNULE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQztZQUM1QixNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7WUFDaEMsSUFBSSxNQUFNLENBQUMsV0FBVyxDQUFDLFVBQVU7Z0JBQUUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxNQUFNLEVBQUUsR0FBRyxDQUFDLENBQUE7WUFDM0QsTUFBTSxDQUFDLFlBQVksQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsUUFBUSxHQUFHLEdBQUcsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3pFLENBQUMsQ0FBQyxDQUFDO1FBQ1AsTUFBTSxDQUFDLG9CQUFvQixHQUFHLE1BQU0sQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLFVBQVUsRUFBRSxPQUFPLEVBQUUsTUFBTSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztJQUNySCxDQUFDO0lBR0ksa0JBQWtCLENBQUMsSUFBUyxFQUFFLE1BQVU7UUFDL0MsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUM7UUFDbkIsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBQ3RCLE1BQU0sQ0FBQyxJQUFJLEdBQUcsRUFBRSxDQUFDO1FBRW5CLE1BQU0sQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO1FBQ3ZCLElBQUksTUFBTSxDQUFDLFdBQVcsQ0FBQyxVQUFVO1lBQUUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxrQkFBa0IsR0FBRyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDckYsTUFBTSxDQUFDLFVBQVUsRUFBRSxDQUFDO1FBQ3BCLE1BQU0sQ0FBQyxvQkFBb0IsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLGlCQUFpQixDQUFDLENBQUM7UUFDM0QsTUFBTSxDQUFDLFlBQVksQ0FBQyxtQkFBbUIsQ0FBQyxNQUFNLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFDdkQsTUFBTSxDQUFDLFlBQVksQ0FBQyxZQUFZLEdBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxFQUFFLEVBQUMsa0JBQWtCLEVBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDO0lBRTVGLENBQUM7SUFFUSxlQUFlLENBQUMsSUFBUyxFQUFFLE1BQVU7UUFDMUMsSUFBSSxLQUFLLEdBQUcsS0FBSyxDQUFDO1FBQ2xCLElBQUksSUFBSSxDQUFDLFdBQVcsQ0FBQyxVQUFVO1lBQUUsT0FBTyxDQUFDLEdBQUcsQ0FBQyx3QkFBd0IsQ0FBQyxDQUFDO1FBQ3ZFLE1BQU0sQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUNyQixJQUFJLFFBQVEsR0FBRyxLQUFLLENBQUM7UUFDckIsSUFBSSxJQUFJLENBQUMsV0FBVyxDQUFDLFVBQVU7WUFBRSxPQUFPLENBQUMsR0FBRyxDQUFDLGtCQUFrQixDQUFDLENBQUM7UUFDakUsSUFBSSxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksSUFBSSxJQUFJLEVBQUUsQ0FBQztZQUM3QixJQUFJLE9BQU8sTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxLQUFLLFdBQVcsRUFBRSxDQUFDO2dCQUNqRCxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDO29CQUN0RCxJQUFJLElBQUksQ0FBQyxXQUFXLENBQUMsVUFBVTt3QkFBRSxPQUFPLENBQUMsR0FBRyxDQUFDLFdBQVcsRUFBRSxDQUFDLEVBQUUsbUNBQW1DLEVBQUUsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFBO29CQUNsSSxJQUFJLE9BQU8sTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sS0FBSyxXQUFXLEVBQUUsQ0FBQzt3QkFDM0QsUUFBUSxHQUFHLElBQUksQ0FBQztvQkFDbEIsQ0FBQztnQkFDSCxDQUFDO1lBQ0gsQ0FBQztRQUNILENBQUM7UUFDRCxJQUFJLElBQUksQ0FBQyxXQUFXLENBQUMsVUFBVTtZQUFFLE9BQU8sQ0FBQyxHQUFHLENBQUMsc0JBQXNCLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsR0FBRyxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUMsQ0FBQztRQUMxSCxJQUFJLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxJQUFJLENBQUMsRUFBRSxDQUFDO1lBQzVCLFFBQVEsR0FBRyxJQUFJLENBQUM7UUFDbEIsQ0FBQztRQUVELElBQUksQ0FBQyxRQUFRLElBQUksSUFBSSxDQUFDLElBQUksTUFBTSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsSUFBSSxJQUFJLEVBQUUsQ0FBQztZQUMxRCxLQUFLLEdBQUcsSUFBSSxDQUFDO1FBQ2YsQ0FBQztRQUVELElBQUksS0FBSyxJQUFJLElBQUksRUFBRSxDQUFDO1lBQ2xCLElBQUksV0FBVyxHQUFHO2dCQUNoQixHQUFHLEVBQUUsSUFBSSxDQUFDLGNBQWM7Z0JBQ3hCLEtBQUssRUFBRSxJQUFJLENBQUMsZ0JBQWdCO2dCQUM1QixJQUFJLEVBQUUsSUFBSTtnQkFDVixNQUFNLEVBQUUsTUFBTTtnQkFDZCxNQUFNLEVBQUUsSUFBSSxDQUFDLFlBQVk7Z0JBQ3pCLFFBQVEsRUFBRSxJQUFJLENBQUMsa0JBQWtCO2FBQ2xDLENBQUM7WUFDQSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsV0FBVyxDQUFDLENBQUM7UUFDdkMsQ0FBQzthQUNJLENBQUM7WUFDSixJQUFJLENBQUMsa0JBQWtCLENBQUMsSUFBSSxFQUFFLE1BQU0sQ0FBQyxDQUFDO1FBQ3hDLENBQUM7SUFDSCxDQUFDO0lBRU0sVUFBVSxDQUFDLElBQVEsRUFBRSxRQUFZO1FBQ3RDLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxHQUFHLEdBQUcsR0FBRyxRQUFRLENBQUM7UUFDckMsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ2xDLElBQUksQ0FBQyxPQUFPLEdBQUcsUUFBUSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUM7SUFDekMsQ0FBQztJQUNNLE9BQU8sQ0FBQyxHQUFHO1FBQ2hCLE9BQU8sZ0JBQWdCLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ3BDLENBQUM7SUFDTSxLQUFLLENBQUMsTUFBVSxFQUFFLElBQVEsRUFBRSxRQUFZO1FBQzdDLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxFQUFDLENBQUM7WUFDdkIsSUFBSSxDQUFDLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxTQUFTLEdBQUcsdUJBQXVCLENBQUMsQ0FBQztRQUMxRSxDQUFDO1FBQ0csSUFBSSxDQUFDLFdBQVcsR0FBRyxjQUFjLEVBQUUsQ0FBQztRQUNwQyxvREFBb0Q7UUFDcEQsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLEVBQUUsUUFBUSxDQUFDLENBQUM7UUFDaEMsK0VBQStFO1FBRy9FLElBQUksSUFBSSxHQUFHLEVBQUUsQ0FBQztRQUNkLElBQUksT0FBTyxHQUFHLEtBQUssQ0FBQztRQUNwQixNQUFNLEdBQUcsR0FBRyxJQUFJLEdBQUcsRUFBRSxDQUFDO1FBQ3RCLElBQUksSUFBSSxHQUFHLEdBQUcsQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUM7UUFDekMsSUFBSSxHQUFHLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUNqQyxJQUFJLEdBQUcsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDO1FBQ25CLElBQUksTUFBTSxHQUFPO1lBQ2YsVUFBVSxFQUFFLElBQUk7WUFDaEIsVUFBVSxFQUFFLElBQUk7U0FDakIsQ0FBQztRQUdGLE1BQU0sQ0FBQyxRQUFRLENBQUMsR0FBRyxpQkFBaUIsQ0FBQztRQUNyQyxNQUFNLENBQUMsSUFBSSxHQUFDLEVBQUUsQ0FBQztRQUNmLE1BQU0sQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLENBQUM7UUFFekIsSUFBSSxXQUFXLEdBQUc7WUFDaEIsTUFBTSxFQUFFLFVBQVU7WUFDbEIsS0FBSyxFQUFFLElBQUk7U0FDWixDQUFDO1FBQ0YsY0FBYyxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBQzVCLElBQUksQ0FBQyxhQUFhLENBQUMsVUFBVSxDQUFDLEdBQUcsSUFBSSxDQUFDO1FBRXRDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLElBQUksRUFBRSxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxFQUFFO1lBQ3RELElBQUksT0FBTyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsS0FBSyxXQUFXLEVBQUUsQ0FBQztnQkFDbEQsSUFBSSxJQUFJLENBQUMsV0FBVyxDQUFDLFVBQVU7b0JBQUUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxvQkFBb0IsRUFBRSxNQUFNLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDO2dCQUN0RixJQUFJLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsSUFBSSxJQUFJLEVBQUUsQ0FBQztvQkFDNUMsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7b0JBQ3JCLE1BQU0sQ0FBQyxJQUFJLEdBQUcsRUFBRSxDQUFDO29CQUVqQixJQUFJLFdBQVcsR0FBRzt3QkFDaEIsTUFBTSxFQUFFLFdBQVc7d0JBQ25CLEtBQUssRUFBRSxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7cUJBQzlCLENBQUM7b0JBQ0YsY0FBYyxDQUFDLFdBQVcsQ0FBQyxDQUFDO29CQUM1QixJQUFJLENBQUMsYUFBYSxDQUFDLFdBQVcsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO29CQUN6RCxJQUFJLE9BQU8sR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxDQUFDO29CQUM1QyxJQUFJLE9BQU8sT0FBTyxLQUFLLFdBQVcsRUFBQyxDQUFDO3dCQUNsQyxJQUFJLENBQUMsYUFBYSxDQUFDLFlBQVksQ0FBQyxHQUFHLE9BQU8sQ0FBQyxXQUFXLEVBQUUsQ0FBQztvQkFDM0QsQ0FBQztvQkFDRCxJQUFJLENBQUMsU0FBUyxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO29CQUN4QyxJQUFJLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxTQUFTLENBQUMsU0FBUyxJQUFJLEVBQUUsQ0FBQyxJQUFJLENBQUMsT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDLFNBQVMsQ0FBQyxTQUFTLEtBQUssV0FBVyxDQUFDLEVBQUMsQ0FBQzt3QkFDckgsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUM7d0JBQ3hELElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFDO29CQUM1RCxDQUFDO29CQUlELE9BQU8sR0FBRyxJQUFJLENBQUM7b0JBQ2YsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsQ0FBQztvQkFDdkIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsSUFBRyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsTUFBTSxJQUFFLENBQUMsQ0FBQyxJQUFFLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxNQUFNLElBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQzt3QkFDN0UsTUFBTSxDQUFDLHFCQUFxQixDQUFDLElBQUksQ0FBQyxDQUFDO29CQUNyQyxDQUFDOzt3QkFFQyxNQUFNLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztnQkFFckMsQ0FBQztZQUNILENBQUM7WUFDRCxJQUFJLENBQUMsT0FBTztnQkFDVixJQUFJLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLFFBQVEsR0FBRyx3QkFBd0IsQ0FBQyxDQUFDO1FBSXhFLENBQUMsRUFDRCxHQUFHLENBQUMsRUFBRTtZQUNGLE1BQU0sQ0FBQyxJQUFJLEdBQUcsRUFBRSxDQUFDO1lBQ2pCLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsUUFBUSxHQUFHLHdCQUF3QixDQUFDLENBQUM7UUFDeEUsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBR00sV0FBVyxDQUFDLE1BQVUsRUFBRSxRQUFZLEVBQUUsS0FBUztRQUNwRCxJQUFJLENBQUMsV0FBVyxHQUFHLGNBQWMsRUFBRSxDQUFDO1FBQ3BDLElBQUksSUFBSSxHQUFHLEVBQUUsQ0FBQztRQUNkLElBQUksT0FBTyxHQUFHLEtBQUssQ0FBQztRQUNwQixRQUFRLEdBQUcsUUFBUSxDQUFDLFdBQVcsRUFBRSxDQUFDLElBQUksRUFBRSxDQUFDO1FBQ3pDLFFBQVEsR0FBRyxRQUFRLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDM0IsSUFBSSxDQUFDLEdBQUcsSUFBSSxJQUFJLEVBQUUsQ0FBQztRQUNuQixJQUFJLE9BQU8sR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ2pDLElBQUksSUFBSSxHQUFFO1lBQ0Y7Z0JBQ0ksUUFBUSxFQUFDLDZCQUE2QjtnQkFDdEMsVUFBVSxFQUFDLFFBQVE7Z0JBQ25CLE9BQU8sRUFBQyxLQUFLLENBQUMsS0FBSztnQkFDbkIsVUFBVSxFQUFHLEtBQUssQ0FBQyxTQUFTLEdBQUcsR0FBRyxHQUFHLEtBQUssQ0FBQyxRQUFRO2dCQUNuRCxXQUFXLEVBQUcsS0FBSyxDQUFDLEVBQUU7Z0JBQ3RCLFdBQVcsRUFBRSxNQUFNLENBQUMsUUFBUSxDQUFDLG1CQUFtQjtnQkFDaEQsU0FBUyxFQUFFLElBQUksSUFBSSxFQUFFO2dCQUNyQixTQUFTLEVBQUUsUUFBUTthQUN0QjtTQUNGLENBQUE7UUFFUCxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxFQUFFO1lBQzlDLE9BQU8sR0FBRyxJQUFJLENBQUM7WUFDZixPQUFPLENBQUMsR0FBRyxDQUFDLGdCQUFnQixFQUFFLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQTtZQUM5QyxJQUFJLE9BQU8sTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsS0FBSyxXQUFXLEVBQUUsQ0FBQztnQkFDMUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxTQUFTLEVBQUUsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFBO2dCQUNwQyxPQUFPLEdBQUcsSUFBSSxDQUFDO2dCQUNmLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDO2dCQUN0QixJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sRUFBRSxRQUFRLEVBQUUsS0FBSyxDQUFDLENBQUM7WUFFOUMsQ0FBQztZQUNELElBQUksQ0FBQyxPQUFPLEVBQUMsQ0FBQztnQkFFWixJQUFJLFFBQVEsR0FBRyxrQkFBa0IsR0FBRyxRQUFRLEdBQUcsU0FBUyxDQUFDO2dCQUN6RCxJQUFJLFdBQVcsR0FBRztvQkFDaEIsR0FBRyxFQUFFLFFBQVE7b0JBQ2IsS0FBSyxFQUFFLE9BQU87b0JBQ2QsSUFBSSxFQUFFLElBQUk7b0JBQ1YsTUFBTSxFQUFFLE1BQU07b0JBQ2QsTUFBTSxFQUFFLElBQUk7b0JBQ1osUUFBUSxFQUFFLElBQUk7aUJBQ2YsQ0FBQztnQkFDRixJQUFJLENBQUMsZ0JBQWdCLENBQUMsV0FBVyxDQUFDLENBQUM7Z0JBRXBDLHVCQUF1QjtZQUN4QixDQUFDO1FBSUgsQ0FBQyxFQUNDLEdBQUcsQ0FBQyxFQUFFO1lBQ0osTUFBTSxDQUFDLElBQUksR0FBRyxFQUFFLENBQUM7WUFDakIsSUFBSSxRQUFRLEdBQUcsMEJBQTBCLENBQUM7WUFDMUMsSUFBSSxXQUFXLEdBQUc7Z0JBQ2hCLEdBQUcsRUFBRSxRQUFRO2dCQUNiLEtBQUssRUFBRSxPQUFPO2dCQUNkLElBQUksRUFBRSxJQUFJO2dCQUNWLE1BQU0sRUFBRSxNQUFNO2dCQUNkLE1BQU0sRUFBRSxJQUFJO2dCQUNaLFFBQVEsRUFBRSxJQUFJO2FBQ2YsQ0FBQztZQUNGLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxXQUFXLENBQUMsQ0FBQztZQUNwQyx1QkFBdUI7UUFDeEIsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBRU0sV0FBVyxDQUFDLE1BQVUsRUFBRSxJQUFRLEVBQUUsS0FBUztRQUNoRCxJQUFJLENBQUMsV0FBVyxHQUFHLGNBQWMsRUFBRSxDQUFDO1FBQ3BDLElBQUksSUFBSSxHQUFHLEVBQUUsQ0FBQztRQUNkLElBQUksT0FBTyxHQUFHLEtBQUssQ0FBQztRQUNwQixJQUFJLEdBQUcsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDLElBQUksRUFBRSxDQUFDO1FBQ2pDLElBQUksR0FBRyxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDbkIsSUFBSSxNQUFNLEdBQU87WUFDZixVQUFVLEVBQUUsSUFBSTtTQUNqQixDQUFDO1FBR0YsTUFBTSxDQUFDLFFBQVEsQ0FBQyxHQUFHLDBCQUEwQixDQUFDO1FBQzlDLE1BQU0sQ0FBQyxJQUFJLEdBQUMsRUFBRSxDQUFDO1FBQ2YsTUFBTSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUV6QixJQUFJLFdBQVcsR0FBRztZQUNoQixNQUFNLEVBQUUsVUFBVTtZQUNsQixLQUFLLEVBQUUsSUFBSTtTQUNaLENBQUM7UUFDRixjQUFjLENBQUMsV0FBVyxDQUFDLENBQUM7UUFDNUIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxVQUFVLENBQUMsR0FBRyxJQUFJLENBQUM7UUFFdEMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsSUFBSSxFQUFFLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLEVBQUU7WUFDdEQsSUFBSSxPQUFPLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxLQUFLLFdBQVcsRUFBRSxDQUFDO2dCQUNsRCxPQUFPLENBQUMsR0FBRyxDQUFDLGFBQWEsRUFBRSxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFBO2dCQUNsRCxJQUFJLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsSUFBSSxJQUFJLEVBQUUsQ0FBQztvQkFDNUMsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7b0JBQ3JCLE1BQU0sQ0FBQyxJQUFJLEdBQUcsRUFBRSxDQUFDO29CQUVqQixJQUFJLFdBQVcsR0FBRzt3QkFDaEIsTUFBTSxFQUFFLFdBQVc7d0JBQ25CLEtBQUssRUFBRSxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7cUJBQzlCLENBQUM7b0JBQ0YsY0FBYyxDQUFDLFdBQVcsQ0FBQyxDQUFDO29CQUM1QixJQUFJLENBQUMsYUFBYSxDQUFDLFdBQVcsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO29CQUN6RCxJQUFJLE9BQU8sR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxDQUFDO29CQUM1QyxJQUFJLE9BQU8sT0FBTyxLQUFLLFdBQVcsRUFBQyxDQUFDO3dCQUNsQyxJQUFJLENBQUMsYUFBYSxDQUFDLFlBQVksQ0FBQyxHQUFHLE9BQU8sQ0FBQyxXQUFXLEVBQUUsQ0FBQztvQkFDM0QsQ0FBQztvQkFDRCxJQUFJLENBQUMsU0FBUyxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO29CQUN4QyxJQUFJLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxTQUFTLENBQUMsU0FBUyxJQUFJLEVBQUUsQ0FBQyxJQUFJLENBQUMsT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDLFNBQVMsQ0FBQyxTQUFTLEtBQUssV0FBVyxDQUFDLEVBQUMsQ0FBQzt3QkFDckgsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUM7b0JBQzFELENBQUM7b0JBS0QsT0FBTyxHQUFHLElBQUksQ0FBQztvQkFDZixJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxDQUFDO29CQUN2QixJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxJQUFHLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxNQUFNLElBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQzt3QkFDakQsTUFBTSxDQUFDLHFCQUFxQixDQUFDLElBQUksQ0FBQyxDQUFDO29CQUNyQyxDQUFDOzt3QkFFQyxNQUFNLENBQUMscUJBQXFCLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQ3ZDLENBQUM7WUFDSCxDQUFDO1lBQ0QsT0FBTyxDQUFDLEdBQUcsQ0FBQyxpQkFBaUIsRUFBQyxPQUFPLENBQUMsQ0FBQTtZQUN0QyxJQUFJLENBQUMsT0FBTyxFQUFDLENBQUM7Z0JBQ1osSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTO29CQUNqQixJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sRUFBRSxJQUFJLEVBQUUsS0FBSyxDQUFDLENBQUM7cUJBQ3BDLENBQUM7b0JBQ0gscURBQXFEO29CQUNyRCxzQkFBc0I7b0JBQ3RCLG1CQUFtQjtvQkFDbkIsb0JBQW9CO29CQUNwQixnQkFBZ0I7b0JBQ2hCLG9CQUFvQjtvQkFDcEIsa0JBQWtCO29CQUNsQixtQkFBbUI7b0JBQ25CLEtBQUs7b0JBQ0wsc0NBQXNDO29CQUV0Qyx1QkFBdUI7Z0JBQ3pCLENBQUM7WUFDSCxDQUFDO1FBSUgsQ0FBQyxFQUNDLEdBQUcsQ0FBQyxFQUFFO1lBQ0osTUFBTSxDQUFDLElBQUksR0FBRyxFQUFFLENBQUM7WUFDakIsSUFBSSxRQUFRLEdBQUcsc0NBQXNDLEdBQUcsSUFBSSxDQUFDO1lBQzdELElBQUksV0FBVyxHQUFHO2dCQUNoQixHQUFHLEVBQUUsUUFBUTtnQkFDYixLQUFLLEVBQUUsT0FBTztnQkFDZCxJQUFJLEVBQUUsSUFBSTtnQkFDVixNQUFNLEVBQUUsTUFBTTtnQkFDZCxNQUFNLEVBQUUsSUFBSTtnQkFDWixRQUFRLEVBQUUsSUFBSTthQUNmLENBQUM7WUFDRixJQUFJLENBQUMsZ0JBQWdCLENBQUMsV0FBVyxDQUFDLENBQUM7WUFDcEMsc0JBQXNCO1FBQ3ZCLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQWVELGlCQUFpQjtJQUNSLFNBQVMsQ0FBRyxHQUFHO1FBRXhCLElBQUksQ0FBQztZQUNKLElBQUksQ0FBQyxHQUFHLElBQUksSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ3RCLENBQUM7UUFBQyxPQUFPLENBQUMsRUFBRSxDQUFDO1lBQ1osT0FBTyxDQUFDLEdBQUcsQ0FBRSxtQkFBbUIsRUFBQyxHQUFHLENBQUMsQ0FBQztZQUN0QyxPQUFPLENBQUMsQ0FBQztRQUNWLENBQUM7UUFDRixPQUFPLENBQUMsR0FBRyxDQUFFLG1CQUFtQixFQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUN6QyxJQUFJLE9BQU8sR0FBRyxDQUFDLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDN0IsSUFBSSxVQUFVLEdBQUcsT0FBTyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNwQyxPQUFPLEdBQUcsVUFBVSxDQUFDLENBQUMsQ0FBQyxHQUFHLE9BQU8sQ0FBQztRQUNoQyxPQUFPLENBQUMsR0FBRyxDQUFFLG1CQUFtQixFQUFDLEdBQUcsRUFBRSxDQUFDLEVBQUMsT0FBTyxDQUFDLENBQUM7UUFDcEQsT0FBTyxPQUFPLENBQUM7SUFDaEIsQ0FBQztJQUNPLFVBQVUsQ0FBQyxDQUFLO1FBQ3JCLElBQUksT0FBTyxHQUFHLENBQUMsQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUM5QixJQUFJLFVBQVUsR0FBRyxPQUFPLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ3BDLE9BQU8sR0FBRyxVQUFVLENBQUMsQ0FBQyxDQUFDLEdBQUcsR0FBRyxHQUFHLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUM5QyxPQUFPLEdBQUcsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFDaEMsT0FBTyxPQUFPLENBQUM7SUFDakIsQ0FBQztJQUNNLE9BQU8sQ0FBQyxNQUFVLEVBQUUsT0FBVyxFQUFFLFdBQWUsRUFBRSxNQUFVO1FBQ2pFLFNBQVMsZ0JBQWdCLENBQUMsTUFBVTtZQUVyQyxJQUFJLE9BQU8sR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQ2xDLHVEQUF1RDtZQUMxRCxPQUFPLEdBQUcsT0FBTyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDdkMsT0FBTyxPQUFPLENBQUM7UUFFaEIsQ0FBQztRQUNDLElBQUksT0FBTyxXQUFXLElBQUksUUFBUTtZQUNuQyxXQUFXLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUN6QyxJQUFJLElBQUksQ0FBQyxXQUFXLENBQUMsVUFBVTtZQUFFLE9BQU8sQ0FBQyxHQUFHLENBQUMsbUJBQW1CLEVBQUUsV0FBVyxFQUFFLFVBQVUsRUFBRSxPQUFPLENBQUMsQ0FBQztRQUNwRyxJQUFJLEVBQUUsR0FBRyxPQUFPLENBQUMsRUFBRSxDQUFDO1FBQ3BCLElBQUksQ0FBQyxHQUFHLElBQUksSUFBSSxFQUFFLENBQUM7UUFDbkIsSUFBSSxPQUFPLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUVqQyxJQUFJLFFBQVEsR0FBRyxPQUFPLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQztRQUVyQyxJQUFJLEtBQUssR0FBRyxRQUFRLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ2hDLG1CQUFtQjtRQUNuQixJQUFJLE9BQU8sR0FBRyxFQUFFLENBQUM7UUFDakIsSUFBSSxXQUFXLEdBQUcsRUFBRSxDQUFDO1FBQ3JCLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxLQUFLLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUM7WUFDdEMsSUFBSSxJQUFJLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3BCLElBQUksVUFBVSxHQUFHLE9BQU8sQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDekMsSUFBSSxPQUFPLFVBQVUsS0FBSyxXQUFXLEVBQUUsQ0FBQztnQkFDMUMsNkJBQTZCO2dCQUN6QixJQUFJLE9BQU8sSUFBSSxFQUFFLEVBQUUsQ0FBQztvQkFDdkIsT0FBTyxHQUFHLE9BQU8sR0FBRyxHQUFHLENBQUM7Z0JBQ3pCLENBQUM7Z0JBQ0QsT0FBTyxHQUFHLE9BQU8sR0FBRyxVQUFVLENBQUM7Z0JBRTNCLElBQUksV0FBVyxJQUFJLEVBQUUsRUFBRSxDQUFDO29CQUMzQixXQUFXLEdBQUcsV0FBVyxHQUFHLEdBQUcsQ0FBQztnQkFDakMsQ0FBQztnQkFDRCxXQUFXLEdBQUcsV0FBVyxHQUFHLElBQUksQ0FBQztZQUMvQixDQUFDO1FBRUgsQ0FBQztRQUNELElBQUksSUFBSSxDQUFDLFdBQVcsQ0FBQyxVQUFVO1lBQUUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxVQUFVLEVBQUUsT0FBTyxFQUFFLGVBQWUsRUFBRSxXQUFXLENBQUMsQ0FBQztRQUloRyxJQUFJLElBQUksQ0FBQyxXQUFXLENBQUMsVUFBVTtZQUFFLE9BQU8sQ0FBQyxHQUFHLENBQUMsV0FBVyxFQUFFLFFBQVEsQ0FBQyxDQUFDO1FBR3BFLElBQUksWUFBWSxHQUFHLE9BQU8sQ0FBQyxTQUFTLENBQUMsYUFBYSxDQUFDO1FBQ25ELElBQUksU0FBUyxHQUFHLGdCQUFnQixDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUNwRCx3REFBd0Q7UUFDeEQsSUFBSSxVQUFVLEdBQUcsT0FBTyxDQUFDLFVBQVUsQ0FBQztRQUNwQyxJQUFJLGdCQUFnQixHQUFHLGdCQUFnQixDQUFDLE9BQU8sQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO1FBQ25FLDhDQUE4QztRQUM3QyxJQUFJLGNBQWMsR0FBRyxnQkFBZ0IsQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUVuRCxJQUFJLElBQUksQ0FBQyxXQUFXLENBQUMsVUFBVTtZQUFFLE9BQU8sQ0FBQyxHQUFHLENBQUMsWUFBWSxHQUFHLFNBQVMsQ0FBQyxDQUFDO1FBRTNFLEVBQUU7UUFDWSxJQUFJLFFBQVEsR0FBRyxNQUFNLENBQUMsWUFBWSxDQUFDLGFBQWEsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDO1FBQzFFLE1BQU0sQ0FBQyxJQUFJLEdBQUcsRUFBRSxDQUFDO1FBQ2pCLElBQUksSUFBSSxHQUFHLEVBQUUsQ0FBQztRQUNkLElBQUksTUFBTSxHQUFPO1lBQ2YsVUFBVSxFQUFFLE9BQU87WUFDbkIsZUFBZSxFQUFFLFdBQVc7WUFDNUIsUUFBUSxFQUFFLE1BQU07WUFDaEIsUUFBUSxFQUFFLE9BQU8sQ0FBQyxJQUFJLENBQUMsTUFBTTtZQUM3QixTQUFTLEVBQUUsT0FBTyxDQUFDLElBQUksQ0FBQyxPQUFPO1lBQy9CLFdBQVcsRUFBRSxPQUFPLENBQUMsTUFBTSxDQUFDLFNBQVM7WUFDckMsV0FBVyxFQUFFLE9BQU8sQ0FBQyxRQUFRO1lBQzdCLGNBQWMsRUFBRSxTQUFTO1lBQ2YsZ0JBQWdCLEVBQUUsZ0JBQWdCO1lBQzVDLFdBQVcsRUFBRSxVQUFVO1lBQ3ZCLGNBQWMsRUFBRSxjQUFjO1lBQzlCLFNBQVMsRUFBRSxPQUFPO1lBQ2xCLFNBQVMsRUFBRSxRQUFRO1lBQ25CLGVBQWUsRUFBRyxZQUFZO1NBRXJCLENBQUM7UUFDRixNQUFNLENBQUMsUUFBUSxDQUFDLEdBQUcscUJBQXFCLENBQUM7UUFFekMsc0VBQXNFO1FBQ3RFLGdGQUFnRjtRQUNoRixNQUFNLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBR25DLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLElBQUksRUFBRSxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxFQUFFO1lBQzVDLElBQUksSUFBSSxDQUFDLFdBQVcsQ0FBQyxVQUFVO2dCQUFFLE9BQU8sQ0FBQyxHQUFHLENBQUMsbUJBQW1CLEVBQUUsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ3pGLE1BQU0sQ0FBQyxJQUFJLEdBQUcsRUFBRSxDQUFDO1FBQ1QsQ0FBQyxFQUNELEdBQUcsQ0FBQyxFQUFFO1lBQ1osTUFBTSxDQUFDLElBQUksR0FBRyxFQUFFLENBQUM7WUFDakIsSUFBSSxDQUFDLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxRQUFRLEdBQUcsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ2pELENBQUMsQ0FBQyxDQUFDO0lBSWYsQ0FBQztJQUNNLGVBQWUsQ0FBQyxNQUFVLEVBQUUsVUFBYyxFQUFFLGdCQUFvQixFQUFFLE1BQVUsRUFBRSxTQUFhLEVBQzVFLElBQVEsRUFBRSxNQUFVLEVBQUUsT0FBVyxFQUFFLE9BQVcsRUFBRSxVQUFjLEVBQUUsV0FBZSxFQUFHLFNBQWE7UUFFbkgsSUFBSSxLQUFLLEdBQUcsS0FBSyxDQUFDO1FBQ2xCLElBQUksS0FBSyxHQUFHLENBQUMsQ0FBQztRQUNkLElBQUksR0FBRyxHQUFHLEVBQUUsQ0FBQztRQUViLElBQUksT0FBTyxHQUFPO1lBQ2hCLElBQUksRUFBRSxFQUFFO1lBQ1IsSUFBSSxFQUFFLEVBQUU7WUFDUixJQUFJLEVBQUUsRUFBRTtZQUNSLE1BQU0sRUFBRSxNQUFNO1lBQ2QsT0FBTyxFQUFFO2dCQUNULGNBQWMsRUFBRSxrQkFBa0I7Z0JBQ2pDLDRDQUE0QztnQkFDN0MsZUFBZSxFQUFFLEVBQUU7YUFDbEI7U0FDRixDQUFDO1FBRUgsbUZBQW1GO1FBQ25GLG9HQUFvRztRQUNwRyw0RkFBNEY7UUFDM0YsSUFBSSxDQUFDLEdBQUcsSUFBSSxJQUFJLEVBQUUsQ0FBQztRQUNuQixJQUFJLE9BQU8sR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ2pDLElBQUksT0FBTyxJQUFJLElBQUk7WUFDakIsT0FBTyxHQUFHLEVBQUUsQ0FBQztRQUVmLElBQUksT0FBTyxHQUFHO1lBQ1osSUFBSSxFQUFFLElBQUk7WUFDVixNQUFNLEVBQUUsTUFBTTtZQUNkLFNBQVMsRUFBRSxTQUFTO1lBQ3BCLFVBQVUsRUFBRSxVQUFVO1lBQ3RCLGdCQUFnQixFQUFFLGdCQUFnQjtZQUNwQyxhQUFhO1lBQ1gsUUFBUSxFQUFFLE9BQU87WUFDakIsT0FBTyxFQUFFLE9BQU87U0FDakIsQ0FBQztRQUNGLElBQUksTUFBTSxJQUFJLElBQUksRUFBRSxDQUFDO1lBQ25CLElBQUksR0FBRyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUM7WUFFeEIsT0FBTyxDQUFDLE9BQU8sQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQztZQUU3QyxLQUFLLEdBQUcsSUFBSSxDQUFDO1FBRWYsQ0FBQzthQUNJLENBQUM7WUFDSixJQUFJLE9BQU8sSUFBSSxFQUFFLEVBQUUsQ0FBQztnQkFDbEIsSUFBSSxJQUFJLEdBQUcsR0FBRyxHQUFHLE9BQU8sQ0FBQyxJQUFJLENBQUM7Z0JBQzlCLElBQUksZ0JBQWdCLElBQUksRUFBRTtvQkFDeEIsSUFBSSxHQUFHLElBQUksR0FBRyxnQkFBZ0IsQ0FBQztnQkFDakMsSUFBSSxHQUFHLElBQUksR0FBRyxTQUFTLENBQUM7Z0JBQ3hCLElBQUksSUFBSSxHQUFHLE9BQU8sQ0FBQyxJQUFJLENBQUM7Z0JBQ3hCLElBQUksSUFBSSxHQUFHLFFBQVEsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQ2xDLElBQUksTUFBTSxHQUFHLE9BQU8sQ0FBQyxXQUFXLENBQUM7Z0JBRWpDLE9BQU8sQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO2dCQUNwQixPQUFPLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztnQkFDcEIsT0FBTyxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7Z0JBQ3BCLE9BQU8sQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO2dCQUN6Qix1RUFBdUU7Z0JBQ3RFLElBQUksR0FBRyxHQUFXLE9BQU8sQ0FBQyxHQUFHLENBQUM7Z0JBQ3RDLGlFQUFpRTtnQkFDekQsa0JBQWtCO2dCQUdsQixLQUFLLEdBQUcsSUFBSSxDQUFDO1lBQ2YsQ0FBQztpQkFDSSxDQUFDO2dCQUNKLEtBQUssR0FBRyxHQUFHLENBQUM7Z0JBQ1osR0FBRyxHQUFHLGtCQUFrQixHQUFHLE1BQU0sQ0FBQztnQkFDbEMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEVBQUUsT0FBTyxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUMsQ0FBQztZQUMxQyxDQUFDO1FBQ0gsQ0FBQztRQUNELElBQUksSUFBSSxDQUFDLFdBQVcsQ0FBQyxVQUFVO1lBQUUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxjQUFjLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFDcEUsSUFBSSxLQUFLLEVBQUUsQ0FBQztZQUNWLElBQUksSUFBSSxDQUFDLFdBQVcsQ0FBQyxVQUFVO2dCQUFFLE9BQU8sQ0FBQyxHQUFHLENBQUMsVUFBVSxFQUFFLE9BQU8sQ0FBQyxDQUFDO1lBQ2xFLElBQUksSUFBSSxDQUFDLFdBQVcsQ0FBQyxVQUFVO2dCQUFFLE9BQU8sQ0FBQyxHQUFHLENBQUMsbUJBQW1CLEdBQUcsVUFBVSxFQUFFLFlBQVksRUFBRSxPQUFPLENBQUMsQ0FBQztZQUV0RyxJQUFJLElBQUksR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1lBQ3BDLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUM7Z0JBQ3JDLElBQUksSUFBSSxDQUFDLFdBQVcsQ0FBQyxVQUFVO29CQUFFLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxHQUFHLEdBQUcsR0FBRyxXQUFXLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDbkYsSUFBSSxXQUFXLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksSUFBSSxFQUFFLENBQUM7b0JBQ2pDLE9BQU8sQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsV0FBVyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO29CQUVoRCx1REFBdUQ7Z0JBQ3pELENBQUM7WUFDSCxDQUFDO1lBRUQsSUFBSSxJQUFJLENBQUMsV0FBVyxDQUFDLFVBQVU7Z0JBQUUsT0FBTyxDQUFDLEdBQUcsQ0FBQywyQkFBMkIsRUFBRSxNQUFNLENBQUMsV0FBVyxDQUFDLENBQUM7WUFDOUYsSUFBSSxNQUFNLENBQUMsV0FBVyxJQUFJLFdBQVcsRUFBRSxDQUFDO2dCQUN0Qzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7a0JBMkRFO1lBSUosQ0FBQztpQkFDSSxDQUFDO2dCQUNKLE9BQU87Z0JBQ1AsU0FBUyxhQUFhLENBQUMsT0FBVyxFQUFFLFdBQWU7b0JBQ2pELElBQUksVUFBVSxHQUFHLE9BQU8sQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDO29CQUUzQyw4REFBOEQ7b0JBQ2hFLElBQUksS0FBSyxHQUFHLFVBQVUsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7b0JBQ2xDLElBQUksS0FBSyxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztvQkFDckIsSUFBSSxLQUFLLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO29CQUVyQixJQUFJLGNBQWMsR0FBRyxXQUFXLENBQUM7b0JBQ2pDLFdBQVcsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLGNBQWMsQ0FBQyxDQUFDO29CQUU3QyxxRkFBcUY7b0JBQ3JGLDZFQUE2RTtvQkFDN0UsSUFBSSxNQUFNLEdBQUcsQ0FBQyxDQUFDO29CQUNmLElBQUksY0FBYyxDQUFDLEtBQUssQ0FBQyxJQUFJLEtBQUs7d0JBQ2hDLE1BQU0sR0FBRyxDQUFDLENBQUM7b0JBQ2IsT0FBTyxNQUFNLENBQUM7Z0JBQ2hCLENBQUM7Z0JBRUQsU0FBUyxtQkFBbUIsQ0FBQyxXQUFlLEVBQUUsY0FBa0I7b0JBQzlELFNBQVMsTUFBTSxDQUFDLEdBQU8sRUFBRSxNQUFVO3dCQUM5QixJQUFJLElBQUksR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO3dCQUMvQixJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7d0JBQ1AsSUFBSSxNQUFNLENBQUM7d0JBQ2QsT0FBTyxDQUFDLEdBQUcsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDOzRCQUV2QixvQ0FBb0M7NEJBQ3BDLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLE1BQU0sRUFBRSxDQUFDO2dDQUNwQixJQUFJLE9BQU8sR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0NBQ3RCLE1BQU0sR0FBRyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUM7Z0NBQ3hCLGlDQUFpQztnQ0FDL0IsTUFBTTs0QkFDUixDQUFDOzRCQUNELENBQUMsRUFBRSxDQUFDO3dCQUNBLENBQUM7d0JBQ1AsT0FBTyxNQUFNLENBQUM7b0JBQ2xCLENBQUM7b0JBR0MsSUFBSSxLQUFLLEdBQUcsY0FBYyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztvQkFDeEMsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEtBQUssQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQzt3QkFDdEMsSUFBSSxTQUFTLEdBQUcsTUFBTSxDQUFDLFdBQVcsRUFBRSxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQTt3QkFDN0MscURBQXFEO3dCQUNyRCxJQUFJLFNBQVMsQ0FBQyxNQUFNLElBQUksQ0FBQzs0QkFDdkIsV0FBVyxHQUFHLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQzs7NEJBRTNCLFdBQVcsR0FBRyxTQUFTLENBQUM7d0JBRTFCLDJDQUEyQztvQkFFN0MsQ0FBQztvQkFDRCxPQUFPLFdBQVcsQ0FBQztnQkFJckIsQ0FBQztnQkFFRDs7Ozs7Ozs7O2tCQVNFO2dCQUNGLFNBQVMsT0FBTyxDQUFDLFdBQWU7b0JBQzlCLDJFQUEyRTtvQkFDM0Usb0ZBQW9GO29CQUNwRixPQUFPLFdBQVcsQ0FBQyxJQUFJLENBQUE7Z0JBQ3pCLENBQUM7Z0JBQ1A7Ozs7Ozs7Ozs7O3dCQVdRO2dCQUVGLElBQUksT0FBTyxHQUFHO29CQUNaLE9BQU8sRUFBRSxJQUFJLFdBQVcsRUFBRTt5QkFDdkIsR0FBRyxDQUFDLGVBQWUsRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDO3lCQUNsQyxHQUFHLENBQUMsY0FBYyxFQUFFLGtCQUFrQixDQUFDO2lCQUMzQyxDQUFBO2dCQUNELElBQUksSUFBSSxDQUFDLFdBQVcsQ0FBQyxVQUFVO29CQUFFLE9BQU8sQ0FBQyxHQUFHLENBQUMsZ0JBQWdCLEVBQUUsT0FBTyxDQUFDLENBQUM7Z0JBQ3hFLElBQUksVUFBVSxJQUFJLEVBQUU7b0JBQ2xCLFVBQVUsR0FBRyxJQUFJLENBQUM7Z0JBQ3BCLElBQUksY0FBYyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLENBQUM7Z0JBQzVDLElBQUksSUFBSSxDQUFDLFdBQVcsQ0FBQyxVQUFVO29CQUFFLE9BQU8sQ0FBQyxHQUFHLENBQUMsdUJBQXVCLEVBQUUsY0FBYyxDQUFDLENBQUM7Z0JBRXRGLElBQUksR0FBRyxHQUFXLE9BQU8sQ0FBQyxHQUFHLEdBQUcsZ0JBQWdCLENBQUM7Z0JBQ2pELElBQUksSUFBSSxDQUFDLFdBQVcsQ0FBQyxVQUFVO29CQUFFLE9BQU8sQ0FBQyxHQUFHLENBQUMsU0FBUyxFQUFFLEdBQUcsQ0FBQyxDQUFDO2dCQUc3RCxNQUFNLE9BQU8sR0FBRyxJQUFJLFdBQVcsQ0FDN0IsT0FBTyxDQUFDLE1BQU0sRUFBRSxHQUFHLEVBQUUsY0FBYyxFQUFFLE9BQU8sQ0FBQyxDQUFDO2dCQUVoRCxJQUFJLElBQUksQ0FBQyxXQUFXLENBQUMsVUFBVTtvQkFBRSxPQUFPLENBQUMsR0FBRyxDQUFDLHNCQUFzQixFQUFFLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxjQUFjLENBQUMsQ0FBQTtnQkFDakgsSUFBSSxVQUFjLENBQUM7Z0JBQ25CLElBQUksQ0FBQyxRQUFRLEdBQUcsQ0FBQyxDQUFDO2dCQUMxQixvRUFBb0U7Z0JBQzVELElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQztxQkFDckIsU0FBUyxDQUNOLENBQUMsUUFBUSxFQUFFLEVBQUU7b0JBRVAsSUFBSSxJQUFJLENBQUMsV0FBVyxDQUFDLFVBQVU7d0JBQUUsT0FBTyxDQUFDLEdBQUcsQ0FBQyx5Q0FBeUMsRUFDdEYsUUFBUSxDQUFDLENBQUM7b0JBQ1YsSUFBSSxPQUFPLEdBQUcsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFBO29CQUN2QyxJQUFJLE9BQU8sT0FBTyxLQUFLLFdBQVcsRUFBRSxDQUFDO3dCQUNuQyxVQUFVLEdBQUcsT0FBTyxDQUFDO3dCQUNiLElBQUksSUFBSSxDQUFDLFdBQVcsQ0FBQyxVQUFVOzRCQUFFLE9BQU8sQ0FBQyxHQUFHLENBQUMsYUFBYSxFQUFFLFVBQVUsQ0FBQyxDQUFDO29CQUMxRSxDQUFDO2dCQUVMLENBQUMsRUFDRCxLQUFLLENBQUMsRUFBRTtvQkFDSixJQUFJLElBQUksQ0FBQyxXQUFXLENBQUMsVUFBVTt3QkFBRSxPQUFPLENBQUMsR0FBRyxDQUFDLG9CQUFvQixFQUFFLEtBQUssQ0FBQyxDQUFDO29CQUMxRSxJQUFJLENBQUMsUUFBUSxHQUFHLENBQUMsQ0FBQztvQkFDMUIsSUFBSSxDQUFDLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxpQkFBaUIsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEtBQUssQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7Z0JBQzlFLENBQUMsRUFDRCxHQUFHLEVBQUU7b0JBQ0QsSUFBSSxJQUFJLENBQUMsV0FBVyxDQUFDLFVBQVU7d0JBQUUsT0FBTyxDQUFDLEdBQUcsQ0FBQyw4Q0FBOEMsRUFBRSxVQUFVLENBQUMsQ0FBQztvQkFDakgsSUFBSSxPQUFPLFVBQVUsS0FBSyxXQUFXLEVBQUUsQ0FBQzt3QkFDdEMsSUFBSSxNQUFNLEdBQUcsYUFBYSxDQUFDLE9BQU8sRUFBRSxVQUFVLENBQUMsQ0FBQzt3QkFDaEQsSUFBSSxJQUFJLENBQUMsV0FBVyxDQUFDLFVBQVU7NEJBQUUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxxQkFBcUIsRUFBRSxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7d0JBRWxGLElBQUksT0FBTyxJQUFJLFlBQVksRUFBRSxDQUFDOzRCQUNwQixJQUFJLGNBQWMsR0FBRyxPQUFPLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDOzRCQUMzRCxJQUFJLElBQUksQ0FBQyxXQUFXLENBQUMsVUFBVTtnQ0FBRSxPQUFPLENBQUMsR0FBRyxDQUFDLHNCQUFzQixFQUFFLGNBQWMsQ0FBQyxDQUFDOzRCQUVyRixJQUFJLFlBQVksR0FBRyxtQkFBbUIsQ0FBQyxVQUFVLEVBQUUsY0FBYyxDQUFDLENBQUM7NEJBQ25FLElBQUksSUFBSSxDQUFDLFdBQVcsQ0FBQyxVQUFVO2dDQUFFLE9BQU8sQ0FBQyxHQUFHLENBQUMsb0JBQW9CLEVBQUUsWUFBWSxFQUFFLFlBQVksRUFBRSxTQUFTLENBQUMsQ0FBQzs0QkFDMUcsSUFBSSxJQUFJLENBQUMsV0FBVyxDQUFDLFVBQVU7Z0NBQUUsT0FBTyxDQUFDLEdBQUcsQ0FBQyx1Q0FBdUMsRUFBRSxPQUFPLENBQUMsSUFBSSxDQUFDLGtCQUFrQixDQUFDLENBQUM7NEJBQ3ZILElBQUksT0FBTyxZQUFZLEtBQUssV0FBVyxFQUFFLENBQUM7Z0NBQ2hDLE1BQU0sQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLGtCQUFrQixDQUFDLEdBQUcsWUFBWSxDQUFDO2dDQUN2RCxJQUFJLElBQUksQ0FBQyxXQUFXLENBQUMsVUFBVTtvQ0FBRSxPQUFPLENBQUMsR0FBRyxDQUFDLDhCQUE4QixFQUFFLE1BQU0sQ0FBQyxlQUFlLENBQUMsQ0FBQTs0QkFFdEcsQ0FBQzt3QkFDSCxDQUFDO3dCQUNELElBQUksQ0FBQyxRQUFRLEdBQUcsQ0FBQyxDQUFDO3dCQUNsQixJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sRUFBRSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sQ0FBQyxDQUFDO29CQUNwRCxDQUFDO2dCQUVMLENBQUMsQ0FFTixDQUFDO2dCQUNKOzs7Ozs7Ozs7Ozs7Ozs7Z0JBZUE7WUFDSixDQUFDO1FBRUgsQ0FBQztRQUNELElBQUksU0FBUyxHQUFHO1lBQ2QsTUFBTSxFQUFFLEtBQUs7WUFDYixHQUFHLEVBQUUsR0FBRztTQUNULENBQUM7UUFFRjs7OztXQUlHO1FBQ0gsSUFBSSxJQUFJLENBQUMsV0FBVyxDQUFDLFVBQVU7WUFBRSxPQUFPLENBQUMsR0FBRyxDQUFDLFFBQVEsRUFBRSxLQUFLLEVBQUUsVUFBVSxFQUFFLFNBQVMsQ0FBQyxDQUFDO1FBRXJGLE9BQU8sQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUVyQixDQUFDO0lBQ00sWUFBWSxDQUFDLE1BQVUsRUFBRSxVQUFjLEVBQUUsU0FBYSxFQUFFLElBQVEsRUFBRSxNQUFVLEVBQUUsT0FBVyxFQUFFLFFBQVksRUFBRSxXQUFlO1FBQzdILFNBQVMsV0FBVyxDQUFDLFNBQWEsRUFBRSxTQUFhO1lBQy9DLFNBQVMsbUJBQW1CLENBQUMsS0FBUyxFQUFFLFdBQWU7Z0JBQ3JELElBQUksR0FBRyxHQUFHLEVBQUUsQ0FBQztnQkFDYixJQUFJLFdBQVcsSUFBSSxFQUFFLEVBQUUsQ0FBQztvQkFDdEIsSUFBSSxLQUFLLEdBQUcsS0FBSyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztvQkFDN0IsSUFBSSxPQUFPLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDO29CQUM5QixJQUFJLFNBQVMsR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7b0JBQ3pCLE9BQU8sQ0FBQyxHQUFHLENBQUMsd0JBQXdCLEVBQUUsU0FBUyxFQUFFLGVBQWUsRUFBRSxXQUFXLENBQUMsQ0FBQztvQkFDN0UsSUFBSSxPQUFPLFdBQVcsS0FBSyxXQUFXLEVBQUMsQ0FBQzt3QkFDdEMsV0FBVyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUFDLENBQUM7d0JBQ3hDLE9BQU8sQ0FBQyxHQUFHLENBQUMsMEJBQTBCLEVBQUUsV0FBVyxDQUFDLENBQUM7d0JBQ3JELElBQUksVUFBVSxHQUFHLFdBQVcsQ0FBQyxPQUFPLENBQUMsQ0FBQzt3QkFDcEMsR0FBRyxHQUFHLFVBQVUsQ0FBQyxTQUFTLENBQUMsQ0FBQztvQkFDNUIsQ0FBQztnQkFDUCxDQUFDO2dCQUNOLE9BQU8sR0FBRyxDQUFDO1lBQ1osQ0FBQztZQUNHLE9BQU8sQ0FBQyxHQUFHLENBQUMsd0JBQXdCLEVBQUUsU0FBUyxDQUFDLENBQUM7WUFDcEQsSUFBSSxHQUFHLEdBQUcsU0FBUyxDQUFDO1lBQ2pCLElBQUksQ0FBQyxHQUFHLFNBQVMsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDbEMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQ1gsQ0FBQztnQkFDSSxJQUFJLEtBQUssR0FBRyxTQUFTLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO2dCQUNsQyxPQUFPLENBQUMsR0FBRyxDQUFFLHFCQUFxQixFQUFFLEtBQUssQ0FBQyxDQUFDO2dCQUMzQyxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsS0FBSyxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFDekMsQ0FBQztvQkFDSyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLEtBQUssQ0FBQyxDQUFDLENBQUMsSUFBSSxFQUFFLEVBQ25DLENBQUM7d0JBQ00sSUFBSSxDQUFDLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQzt3QkFDN0IsT0FBTyxDQUFDLEdBQUcsQ0FBRSxpQkFBaUIsRUFBRyxDQUFDLEVBQUcsV0FBVyxFQUFFLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO3dCQUNsRSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7NEJBQ1YsQ0FBQyxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUM7d0JBQ3JCLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUNYLENBQUM7NEJBQ08sSUFBSSxLQUFLLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7NEJBQ3hDLEtBQUssR0FBRyxLQUFLLENBQUMsSUFBSSxFQUFFLENBQUM7NEJBQ2QsT0FBTyxDQUFDLEdBQUcsQ0FBQyxxQkFBcUIsR0FBQyxLQUFLLENBQUMsQ0FBQzs0QkFFekMsSUFBSSxDQUFDLEdBQUcsS0FBSyxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQzs0QkFDNUIsT0FBTyxDQUFDLEdBQUcsQ0FBRSxpQkFBaUIsRUFBRyxDQUFDLENBQUMsQ0FBQzs0QkFDcEMsSUFBSSxDQUFDLElBQUksSUFBSSxFQUFDLENBQUM7Z0NBQ2IsR0FBRyxHQUFHLG1CQUFtQixDQUFDLEtBQUssRUFBQyxTQUFTLENBQUMsWUFBWSxDQUFDLENBQUM7NEJBQzFELENBQUM7O2dDQUVSLEdBQUcsR0FBRyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUM7NEJBQ3ZCLElBQUksT0FBTyxHQUFHLElBQUksUUFBUTtnQ0FDekIsR0FBRyxHQUFHLEdBQUcsQ0FBQyxJQUFJLEVBQUUsQ0FBQzs0QkFDWCxPQUFPLENBQUMsR0FBRyxDQUFDLHFCQUFxQixFQUFHLEtBQUssRUFBRSxPQUFPLEVBQUUsR0FBRyxDQUFFLENBQUM7d0JBRWxFLENBQUM7b0JBQ0YsQ0FBQztnQkFDRixDQUFDO1lBQ0YsQ0FBQztZQUNELElBQUksT0FBTyxHQUFHLElBQUksUUFBUTtnQkFDekIsR0FBRyxHQUFHLEdBQUcsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1lBQy9CLE9BQU8sR0FBRyxDQUFDO1FBQ1osQ0FBQztRQUNDLFNBQVMsT0FBTyxDQUFDLE1BQVUsRUFBRSxRQUFZO1lBQ3ZDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUNWLE9BQU8sQ0FBQyxHQUFHLFFBQVEsQ0FBQyxNQUFNLEVBQUUsQ0FBQztnQkFDM0IsMkZBQTJGO2dCQUMvRixJQUFJLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLElBQUksTUFBTTtvQkFDaEMsT0FBTyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQ3BCLENBQUMsRUFBRSxDQUFDO1lBQ0wsQ0FBQztZQUNELE9BQU8sSUFBSSxDQUFDO1FBRWIsQ0FBQztRQUNDLFNBQVMsVUFBVSxDQUFDLE9BQVcsRUFBRSxLQUFTLEVBQUUsV0FBZTtZQUN6RCxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDViw4RUFBOEU7WUFDOUUsSUFBSSxDQUFDLEtBQUssSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssSUFBSSxFQUFFLENBQUMsRUFBRSxDQUFDO2dCQUNyQyxPQUFPLENBQUMsR0FBRyxXQUFXLENBQUMsTUFBTSxFQUFFLENBQUM7b0JBQzlCLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxJQUFJLE9BQU8sQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEtBQUssSUFBSSxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDO3dCQUN2RixPQUFPLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQztvQkFDdkIsQ0FBQyxFQUFFLENBQUM7Z0JBQ0wsQ0FBQztZQUNGLENBQUM7WUFDRCxPQUFPLElBQUksQ0FBQztRQUViLENBQUM7UUFDRyxvQkFBb0I7UUFDcEIsSUFBSSxJQUFJLENBQUMsV0FBVyxDQUFDLFVBQVU7WUFBRSxPQUFPLENBQUMsR0FBRyxDQUFDLDZCQUE2QixFQUFFLFVBQVUsQ0FBQyxDQUFDO1FBQ3hGLElBQUksU0FBUyxDQUFDO1FBQ2QsSUFBSSxNQUFNLEdBQUcsVUFBVSxDQUFDLE9BQU8sQ0FBQztRQUNsQyxJQUFJLFFBQVEsR0FBTyxFQUFFLENBQUM7UUFDdEIsSUFBSSxXQUFXLEdBQU8sRUFBRSxDQUFDO1FBQ3pCLElBQUksYUFBYSxHQUFPLEVBQUUsQ0FBQztRQUN6QixJQUFJLFVBQVUsR0FBRyxFQUFFLENBQUM7UUFDcEIsSUFBSSxnQkFBZ0IsR0FBRyxFQUFFLENBQUM7UUFDNUIsSUFBSSxPQUFPLEdBQUcsT0FBTyxDQUFDLE1BQU0sRUFBRSxRQUFRLENBQUMsQ0FBQztRQUN4QyxJQUFJLFVBQVUsR0FBRyxVQUFVLENBQUMsT0FBTyxFQUFFLE1BQU0sQ0FBQyxNQUFNLEVBQUUsV0FBVyxDQUFDLENBQUM7UUFDL0QsSUFBSSxJQUFJLENBQUMsV0FBVyxDQUFDLFVBQVU7WUFBRSxPQUFPLENBQUMsR0FBRyxDQUFDLGFBQWEsRUFBRSxVQUFVLENBQUMsQ0FBQztRQUV4RSxJQUFJLElBQUksQ0FBQyxXQUFXLENBQUMsVUFBVTtZQUFFLE9BQU8sQ0FBQyxHQUFHLENBQUMscUJBQXFCLEVBQUUsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBRXRGLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sSUFBSSxFQUFFLENBQUMsRUFBRSxDQUFDO1lBQ3JELElBQUksS0FBSyxHQUFHLE9BQU8sQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ3ZDLElBQUksSUFBSSxDQUFDLFdBQVcsQ0FBQyxVQUFVO2dCQUFFLE9BQU8sQ0FBQyxHQUFHLENBQUMsUUFBUSxFQUFFLEtBQUssRUFBRSxnQkFBZ0IsRUFBRSxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUM7WUFFaEcsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEtBQUssQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQztnQkFDcEMsSUFBSSxJQUFJLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUN0QixJQUFJLElBQUksSUFBSSxFQUFFLEVBQUMsQ0FBQztvQkFDZCxJQUFJLFVBQVUsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO29CQUNqQyxJQUFJLEtBQUssR0FBRyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUM7b0JBQzFCLEtBQUssR0FBRyxLQUFLLENBQUMsSUFBSSxFQUFFLENBQUM7b0JBQ3JCLElBQUksU0FBUyxHQUFHLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQztvQkFDOUIsU0FBUyxHQUFHLFNBQVMsQ0FBQyxJQUFJLEVBQUUsQ0FBQztvQkFDN0IsSUFBSSxJQUFJLENBQUMsV0FBVyxDQUFDLFVBQVU7d0JBQUUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxZQUFZLEVBQUUsU0FBUyxDQUFDLENBQUM7b0JBQ3RFLFNBQVMsR0FBRyxXQUFXLENBQUMsU0FBUyxFQUFFLFNBQVMsQ0FBQyxDQUFDO29CQUM5QyxJQUFJLElBQUksQ0FBQyxXQUFXLENBQUMsVUFBVTt3QkFBRSxPQUFPLENBQUMsR0FBRyxDQUFDLHFDQUFxQyxFQUFFLEtBQUssRUFBRSxhQUFhLEVBQUUsU0FBUyxDQUFDLENBQUM7b0JBQ3JILFdBQVcsQ0FBQyxLQUFLLENBQUMsR0FBRyxTQUFTLENBQUM7Z0JBQ2pDLENBQUM7WUFDSCxDQUFDO1FBQ0gsQ0FBQztRQUlELElBQUksQ0FBQyxVQUFVLENBQUMsU0FBUyxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLFNBQVMsSUFBSSxFQUFFLENBQUMsRUFBRSxDQUFDO1lBQ2pFLElBQUksUUFBUSxHQUFHLFVBQVUsQ0FBQyxTQUFTLENBQUM7WUFDdEMsSUFBSSxJQUFJLENBQUMsV0FBVyxDQUFDLFVBQVU7Z0JBQUUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxpQkFBaUIsRUFBRSxRQUFRLENBQUMsQ0FBQztZQUMxRSxJQUFJLEtBQUssR0FBRyxRQUFRLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ2pDLElBQUksSUFBSSxDQUFDLFdBQVcsQ0FBQyxVQUFVO2dCQUFFLE9BQU8sQ0FBQyxHQUFHLENBQUMsY0FBYyxFQUFFLEtBQUssRUFBRSxnQkFBZ0IsRUFBRSxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUM7WUFFcEcsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEtBQUssQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQztnQkFDcEMsSUFBSSxJQUFJLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUN0QixJQUFJLElBQUksSUFBSSxFQUFFLEVBQUMsQ0FBQztvQkFDZCxJQUFJLFVBQVUsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO29CQUNqQyxJQUFJLEtBQUssR0FBRyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUM7b0JBQzFCLEtBQUssR0FBRyxLQUFLLENBQUMsSUFBSSxFQUFFLENBQUM7b0JBQ3JCLElBQUksU0FBUyxHQUFHLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQztvQkFDOUIsU0FBUyxHQUFHLFNBQVMsQ0FBQyxJQUFJLEVBQUUsQ0FBQztvQkFDN0IsSUFBSSxJQUFJLENBQUMsV0FBVyxDQUFDLFVBQVU7d0JBQUUsT0FBTyxDQUFDLEdBQUcsQ0FBQyx3QkFBd0IsRUFBRSxTQUFTLENBQUMsQ0FBQztvQkFDbEYsU0FBUyxHQUFHLFdBQVcsQ0FBQyxTQUFTLEVBQUUsU0FBUyxDQUFDLENBQUM7b0JBQzlDLElBQUksSUFBSSxDQUFDLFdBQVcsQ0FBQyxVQUFVO3dCQUFFLE9BQU8sQ0FBQyxHQUFHLENBQUMsMEJBQTBCLEVBQUUsS0FBSyxFQUFFLGFBQWEsRUFBRSxTQUFTLENBQUMsQ0FBQztvQkFDMUcsUUFBUSxDQUFDLEtBQUssQ0FBQyxHQUFHLFNBQVMsQ0FBQztnQkFDOUIsQ0FBQztZQUNILENBQUM7WUFDQyxnRUFBZ0U7WUFDaEUsMkhBQTJIO1lBQzNILGFBQWEsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7WUFDN0IsNkVBQTZFO1lBRS9FLElBQUksYUFBYSxDQUFDLE1BQU0sSUFBSSxDQUFDLEVBQUUsQ0FBQztnQkFDNUI7Ozs7Ozs7O21CQVFHO2dCQUNELFVBQVUsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLGFBQWEsQ0FBQyxDQUFBO2dCQUM1QyxHQUFHO1lBQ0wsQ0FBQztZQUNIOzs7Y0FHRTtRQUNGLENBQUM7UUFFSCxJQUFJLENBQUMsVUFBVSxDQUFDLGNBQWMsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxjQUFjLElBQUksRUFBRSxDQUFDLEVBQUUsQ0FBQztZQUMzRSxJQUFJLGFBQWEsR0FBRyxVQUFVLENBQUMsY0FBYyxDQUFDO1lBQzlDLElBQUksSUFBSSxDQUFDLFdBQVcsQ0FBQyxVQUFVO2dCQUFFLE9BQU8sQ0FBQyxHQUFHLENBQUMsZ0JBQWdCLEVBQUUsYUFBYSxDQUFDLENBQUM7WUFDaEYsSUFBSSxJQUFJLENBQUMsV0FBVyxDQUFDLFVBQVU7Z0JBQUUsT0FBTyxDQUFDLEdBQUcsQ0FBQyx1QkFBdUIsRUFBRSxhQUFhLENBQUMsTUFBTSxDQUFDLENBQUM7WUFHNUYsSUFBSSxLQUFLLEdBQUcsYUFBYSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUNwQyxJQUFJLElBQUksQ0FBQyxXQUFXLENBQUMsVUFBVTtnQkFBRSxPQUFPLENBQUMsR0FBRyxDQUFDLFFBQVEsRUFBRSxLQUFLLEVBQUUsZ0JBQWdCLEVBQUUsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQ2hHLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxLQUFLLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUM7Z0JBQ3BDLElBQUksSUFBSSxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDdEIsSUFBSSxJQUFJLElBQUksRUFBRSxFQUFDLENBQUM7b0JBQ2QsSUFBSSxVQUFVLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztvQkFDakMsSUFBSSxLQUFLLEdBQUcsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDO29CQUMxQixLQUFLLEdBQUcsS0FBSyxDQUFDLElBQUksRUFBRSxDQUFDO29CQUNyQixJQUFJLFNBQVMsR0FBRyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUM7b0JBQzlCLFNBQVMsR0FBRyxTQUFTLENBQUMsSUFBSSxFQUFFLENBQUM7b0JBQzdCLElBQUksSUFBSSxDQUFDLFdBQVcsQ0FBQyxVQUFVO3dCQUFFLE9BQU8sQ0FBQyxHQUFHLENBQUMseUJBQXlCLEVBQUUsU0FBUyxDQUFDLENBQUM7b0JBQ25GLFNBQVMsR0FBRyxXQUFXLENBQUMsU0FBUyxFQUFFLFNBQVMsQ0FBQyxDQUFDO29CQUM5QyxJQUFJLElBQUksQ0FBQyxXQUFXLENBQUMsVUFBVTt3QkFBRSxPQUFPLENBQUMsR0FBRyxDQUFDLDJCQUEyQixFQUFFLEtBQUssRUFBRSxhQUFhLEVBQUUsU0FBUyxDQUFDLENBQUM7b0JBQzNHLElBQUksZ0JBQWdCLElBQUksRUFBRTt3QkFDeEIsZ0JBQWdCLEdBQUcsR0FBRyxHQUFHLEtBQUssR0FBRyxHQUFHLEdBQUcsU0FBUyxDQUFDOzt3QkFFakQsZ0JBQWdCLEdBQUcsZ0JBQWdCLEdBQUcsR0FBRyxHQUFHLEtBQUssR0FBRyxHQUFHLEdBQUcsU0FBUyxDQUFDO2dCQUN4RSxDQUFDO1lBQ0gsQ0FBQztZQUNELElBQUksSUFBSSxDQUFDLFdBQVcsQ0FBQyxVQUFVO2dCQUFFLE9BQU8sQ0FBQyxHQUFHLENBQUMsZ0NBQWdDLEVBQUUsZ0JBQWdCLENBQUMsQ0FBQztRQUNuRyxDQUFDO1FBQ0QsSUFBSSxTQUFTLEdBQUUsRUFBRSxDQUFDO1FBQ2xCLElBQUssQ0FBQyxVQUFVLENBQUMsVUFBVSxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLFVBQVUsSUFBSSxFQUFFLENBQUMsRUFDbkUsQ0FBQztZQUNDLElBQUksY0FBYyxHQUFHLFVBQVUsQ0FBQyxVQUFVLENBQUM7WUFDM0MsT0FBTyxDQUFDLEdBQUcsQ0FBQyxpQkFBaUIsRUFBRSxjQUFjLENBQUMsQ0FBQztZQUMvQyxPQUFPLENBQUMsR0FBRyxDQUFDLHdCQUF3QixFQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUc1RCxJQUFJLEtBQUssR0FBRyxjQUFjLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ3ZDLE9BQU8sQ0FBQyxHQUFHLENBQUMsUUFBUSxFQUFFLEtBQUssRUFBRSxnQkFBZ0IsRUFBRSxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDN0QsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEtBQUssQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQ3JDLENBQUM7Z0JBQ0MsSUFBSSxJQUFJLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUNwQixPQUFPLENBQUMsR0FBRyxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsQ0FBQztnQkFDM0IsSUFBSSxVQUFVLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztnQkFDakMsSUFBSSxLQUFLLEdBQUcsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUMxQixLQUFLLEdBQUcsS0FBSyxDQUFDLElBQUksRUFBRSxDQUFDO2dCQUNyQixJQUFJLFNBQVMsR0FBRyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQzlCLElBQUksS0FBSyxJQUFJLE9BQU8sRUFBQyxDQUFDO29CQUNwQixTQUFTLEdBQUcsR0FBRyxHQUFHLElBQUksQ0FBQztvQkFDdkIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxZQUFZLEVBQUUsU0FBUyxDQUFDLENBQUE7b0JBRXBDLHlEQUF5RDtnQkFDM0QsQ0FBQztZQUNILENBQUM7UUFDSCxDQUFDO1FBQ0QsSUFBSSxJQUFJLENBQUMsV0FBVyxDQUFDLFVBQVU7WUFBRSxPQUFPLENBQUMsR0FBRyxDQUFDLGFBQWEsRUFBRSxVQUFVLENBQUMsQ0FBQztRQUN4RSxJQUFJLElBQUksQ0FBQyxXQUFXLENBQUMsVUFBVTtZQUFFLE9BQU8sQ0FBQyxHQUFHLENBQUMsbUJBQW1CLEVBQUUsZ0JBQWdCLENBQUMsQ0FBQztRQUV0RixTQUFTLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxNQUFNLEVBQUUsVUFBVSxFQUFFLGdCQUFnQixFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLFVBQVUsRUFBRSxXQUFXLEVBQUUsU0FBUyxDQUFDLENBQUM7UUFDNUosSUFBSSxJQUFJLENBQUMsV0FBVyxDQUFDLFVBQVU7WUFBRSxPQUFPLENBQUMsR0FBRyxDQUFDLCtCQUErQixFQUFFLFNBQVMsQ0FBQyxDQUFDO1FBQ3pGLE9BQU8sU0FBUyxDQUFDO0lBTXJCLENBQUM7SUFDTSxhQUFhLENBQUMsTUFBVSxFQUFFLEdBQU8sRUFBRSxHQUFPLEVBQUUsU0FBYSxFQUFFLElBQVEsRUFBRSxRQUFZLEVBQUUsT0FBVyxFQUFFLFFBQVksRUFBRSxXQUFlLEVBQUUsT0FBVztRQUMvSSxJQUFJLElBQUksQ0FBQyxXQUFXLENBQUMsVUFBVTtZQUFFLE9BQU8sQ0FBQyxHQUFHLENBQUMsNEJBQTRCLEVBQUUsUUFBUSxDQUFDLENBQUM7UUFDbkYsSUFBSSxNQUFNLEdBQUcsQ0FBQyxDQUFDO1FBQ2pCLElBQUksU0FBUyxHQUFHO1lBQ2QsTUFBTSxFQUFFLENBQUM7WUFDVCxHQUFHLEVBQUUsRUFBRTtTQUNOLENBQUM7UUFFRixJQUFJLFNBQVMsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQzlDLElBQUksT0FBTyxTQUFTLEtBQUssV0FBVyxFQUFFLENBQUM7WUFFbkMsSUFBSSxJQUFJLENBQUMsV0FBVyxDQUFDLFVBQVU7Z0JBQUUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxNQUFNLEVBQUUsR0FBRyxDQUFDLENBQUM7WUFDMUQsSUFBSSxJQUFJLENBQUMsV0FBVyxDQUFDLFVBQVU7Z0JBQUUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxZQUFZLEVBQUUsU0FBUyxDQUFDLENBQUM7WUFDeEUsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFDO1lBRVYsSUFBSSxJQUFJLEdBQUcsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQzFCLElBQUksSUFBSSxHQUFHLFNBQVMsQ0FBQyxTQUFTLENBQUMsTUFBTSxHQUFFLENBQUMsQ0FBQyxDQUFDO1lBQzFDLCtDQUErQztZQUMvQyw2QkFBNkI7WUFDN0IsT0FBTztZQUNQLHNDQUFzQztZQUV0QyxJQUFJLElBQUksQ0FBQyxXQUFXLENBQUMsVUFBVTtnQkFBRSxPQUFPLENBQUMsR0FBRyxDQUFDLE9BQU8sRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFLElBQUksQ0FBQyxDQUFDO1lBQzFFLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQztZQUNmLDhDQUE4QztZQUM5QyxJQUFJLE1BQU0sR0FBRyxPQUFPLENBQUM7WUFDckIsT0FBTyxDQUFDLENBQUMsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sSUFBSSxDQUFDLENBQUMsRUFBRSxDQUFDO2dCQUNwQyxJQUFJLE1BQU0sSUFBSSxRQUFRLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sRUFDMUMsQ0FBQztvQkFDRCw4RkFBOEY7b0JBQzlGLElBQUksQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLFdBQVcsSUFBSSxNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsV0FBVyxJQUFJLFdBQVcsQ0FBQyxFQUFFLENBQUM7d0JBQzFHLFNBQVMsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sRUFBRSxRQUFRLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxFQUFFLFNBQVMsRUFBRSxJQUFJLEVBQUUsUUFBUSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsRUFBRSxPQUFPLEVBQUUsUUFBUSxFQUFFLFdBQVcsQ0FBQyxDQUFDO3dCQUN2SSxNQUFNLEdBQUcsU0FBUyxDQUFDLE1BQU0sQ0FBQztvQkFDNUIsQ0FBQzt5QkFDSSxJQUFLLFFBQVEsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsV0FBVyxJQUFJLE9BQU8sRUFBRyxDQUFDO3dCQUN6RCxJQUFJLFNBQVMsR0FBRTs0QkFDYixNQUFNLEVBQUcsQ0FBQyxDQUFDOzRCQUNYLEdBQUcsRUFBRyxRQUFRLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVM7eUJBQ3ZDLENBQUM7d0JBQ0YsT0FBTyxTQUFTLENBQUM7b0JBQ25CLENBQUM7Z0JBQ0gsQ0FBQztnQkFDQyxDQUFDLEVBQUUsQ0FBQztZQUNOLENBQUM7UUFDSCxDQUFDO1FBQ0QsT0FBTyxTQUFTLENBQUM7SUFFckIsQ0FBQztJQUVNLG1CQUFtQixDQUFDLE1BQVUsRUFBRSxRQUFZLEVBQUUsU0FBYSxFQUFFLE9BQVcsRUFBRSxZQUFnQixFQUFFLFFBQVksRUFBRSxXQUFlO1FBQzlILElBQUksSUFBSSxDQUFDLFdBQVcsQ0FBQyxVQUFVO1lBQUUsT0FBTyxDQUFDLEdBQUcsQ0FBQywrQkFBK0IsRUFBRSxRQUFRLEVBQUUsYUFBYSxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsT0FBTyxDQUFDLENBQUM7UUFDdkksU0FBUyxZQUFZLENBQUMsSUFBUSxFQUFFLFNBQWE7WUFFM0IsSUFBSSxTQUFTLEdBQUcsRUFBRSxDQUFDO1lBQ25CLElBQUksS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFFLEdBQUcsQ0FBQyxDQUFDO1lBQ25DLE9BQU8sQ0FBQyxHQUFHLENBQUMsUUFBUSxFQUFDLEtBQUssQ0FBQyxDQUFBO1lBQzNCLElBQUksS0FBSyxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUMsQ0FBQztnQkFDcEIsSUFBSSxXQUFXLEdBQUcsU0FBUyxDQUFDLGNBQWMsQ0FBQyxDQUFDO2dCQUM1Qyx5Q0FBeUM7Z0JBQ3pDLElBQUksT0FBTyxXQUFXLEtBQUssV0FBVyxFQUFDLENBQUM7b0JBQ3RDLElBQUksV0FBVyxJQUFJLEVBQUUsRUFBRSxDQUFDO3dCQUN0QixJQUFJLFVBQVUsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFdBQVcsQ0FBQyxDQUFDO3dCQUN6Qyx1Q0FBdUM7d0JBQ3ZDLElBQUksSUFBSSxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7d0JBQ25DLE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBTyxFQUFDLElBQUksQ0FBQyxDQUFBO3dCQUN6QixLQUFLLElBQUksQ0FBQyxHQUFFLENBQUMsRUFBRSxDQUFDLEdBQUUsSUFBSSxDQUFDLE1BQU0sRUFBQyxDQUFDLEVBQUUsRUFBQyxDQUFDOzRCQUNqQyxPQUFPLENBQUMsR0FBRyxDQUFDLHFCQUFxQixFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBRSxDQUFDOzRCQUM3QyxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxLQUFLLENBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQztnQ0FDdkIsSUFBSSxPQUFPLEdBQUcsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dDQUNsQyxvQ0FBb0M7Z0NBQ3BDLElBQUksT0FBTyxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsSUFBSSxXQUFXLEVBQUcsd0JBQXdCO29DQUNwRSxTQUFTLEdBQUcsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO3FDQUMxQixDQUFDLENBQUMsdUJBQXVCO29DQUM1QixJQUFJLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxXQUFXO3dDQUNwQyxTQUFTLEdBQUcsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dDQUNyQyxDQUFDO2dDQUVELE1BQU07NEJBQ1IsQ0FBQzt3QkFDSCxDQUFDO29CQUNILENBQUM7Z0JBQ0gsQ0FBQztZQUNILENBQUM7aUJBRUQsQ0FBQztnQkFDQyxTQUFTLEdBQUcsU0FBUyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBRTtZQUNyQyxDQUFDO1lBQ0QsT0FBTyxTQUFTLENBQUM7UUFDbkIsQ0FBQztRQUNmLFNBQVMsU0FBUyxDQUFDLElBQVEsRUFBRSxTQUFhO1lBQzFDLElBQUksU0FBUyxHQUFHLEtBQUssQ0FBQztZQUN0QixxQ0FBcUM7WUFDbkMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxpQkFBaUIsRUFBRSxJQUFJLEVBQUUsYUFBYSxFQUFFLFNBQVMsQ0FBQyxDQUFDO1lBQ2pFLHdDQUF3QztZQUN4QyxJQUFJLFNBQVMsR0FBRyxZQUFZLENBQUMsSUFBSSxFQUFFLFNBQVMsQ0FBQyxDQUFDO1lBRTlDLFFBQVEsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO2dCQUN2QixLQUFLLEdBQUc7b0JBQ04sSUFBSSxTQUFTLElBQUksSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO3dCQUNwQyxTQUFTLEdBQUcsSUFBSSxDQUFDO29CQUNqQixDQUFDO29CQUNILE1BQU07Z0JBQ04sS0FBSyxHQUFHO29CQUNOLElBQUksU0FBUyxHQUFHLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQzt3QkFDbkMsU0FBUyxHQUFHLElBQUksQ0FBQztvQkFDakIsQ0FBQztvQkFDSCxNQUFNO2dCQUNOLEtBQUssSUFBSTtvQkFDUCxJQUFJLFNBQVMsSUFBSSxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7d0JBQ3BDLFNBQVMsR0FBRyxJQUFJLENBQUM7b0JBQ2pCLENBQUM7b0JBQ0gsTUFBTTtnQkFDTixLQUFLLEdBQUc7b0JBQ04sSUFBSSxTQUFTLEdBQUcsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO3dCQUNuQyxTQUFTLEdBQUcsSUFBSSxDQUFDO29CQUNqQixDQUFDO29CQUNILE1BQU07Z0JBQ04sS0FBSyxJQUFJO29CQUNQLElBQUksU0FBUyxJQUFJLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQzt3QkFDcEMsU0FBUyxHQUFHLElBQUksQ0FBQztvQkFDakIsQ0FBQztvQkFDSCxNQUFNO2dCQUNOLEtBQUssSUFBSTtvQkFDUCxJQUFJLFNBQVMsSUFBSSxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7d0JBQ3BDLFNBQVMsR0FBRyxJQUFJLENBQUM7b0JBQ2pCLENBQUM7b0JBQ0gsTUFBTTtnQkFDTixLQUFLLE9BQU87b0JBQ1YsSUFBSSxJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBRSxDQUFDO3dCQUMvQyxTQUFTLEdBQUcsSUFBSSxDQUFDO29CQUNqQixDQUFDO29CQUNILE1BQU07Z0JBQ047b0JBQ0EsU0FBUyxHQUFHLEtBQUssQ0FBQztZQUNwQixDQUFDO1lBQ0QsT0FBTyxDQUFDLEdBQUcsQ0FBQyxrQkFBa0IsRUFBRSxTQUFTLEVBQUUsYUFBYSxFQUFFLFNBQVMsRUFBRSxhQUFhLEVBQUUsSUFBSSxDQUFDLFNBQVMsRUFBRSxlQUFlLEVBQUUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1lBQ3ZJLE9BQU8sU0FBUyxDQUFDO1FBRW5CLENBQUM7UUFDRCxTQUFTLGlCQUFpQixDQUFDLFdBQVcsRUFBRSxTQUFTO1lBQy9DLHNGQUFzRjtZQUN0RixJQUFJLFFBQVEsR0FBRyxLQUFLLENBQUM7WUFDckIsT0FBTyxDQUFDLEdBQUcsQ0FBQyw0QkFBNEIsRUFBRSxXQUFXLENBQUMsYUFBYSxFQUFFLDBCQUEwQixFQUFFLFNBQVMsQ0FBQyxhQUFhLEVBQUMsNkJBQTZCLEVBQUUsV0FBVyxDQUFDLGFBQWEsRUFBQywyQkFBMkIsRUFBRSxTQUFTLENBQUMsYUFBYSxFQUFFLFNBQVMsQ0FBQyxDQUFBO1lBRWxQLElBQUssQ0FBQyxXQUFXLENBQUMsYUFBYSxJQUFJLEVBQUUsQ0FBQyxFQUFFLENBQUM7Z0JBQ3ZDLElBQUksV0FBVyxDQUFDLGFBQWEsSUFBSSxTQUFTLENBQUMsYUFBYSxFQUFFLENBQUM7b0JBRXpELElBQUksQ0FBQyxXQUFXLENBQUMsYUFBYSxJQUFJLEVBQUUsQ0FBQyxFQUFHLENBQUM7d0JBQ3ZDLElBQUksV0FBVyxDQUFDLGFBQWEsSUFBSSxTQUFTLENBQUMsYUFBYSxFQUFFLENBQUM7NEJBQ3pELFFBQVEsR0FBRyxJQUFJLENBQUM7d0JBRWxCLENBQUM7b0JBQ0gsQ0FBQzt5QkFDSSxDQUFDO3dCQUNKLFFBQVEsR0FBRyxJQUFJLENBQUM7b0JBRWxCLENBQUM7Z0JBQ0gsQ0FBQztZQUNILENBQUM7aUJBQ0ksQ0FBQztnQkFDSixRQUFRLEdBQUcsSUFBSSxDQUFDO1lBRWxCLENBQUM7WUFDRCxxQ0FBcUM7WUFDckMsT0FBTyxRQUFRLENBQUM7UUFDbEIsQ0FBQztRQUdELElBQUksTUFBTSxHQUFHLENBQUMsQ0FBQztRQUNmLElBQUksU0FBUyxHQUFHO1lBQ2QsTUFBTSxFQUFFLENBQUM7WUFDVCxHQUFHLEVBQUUsRUFBRTtTQUNSLENBQUM7UUFFRixJQUFJLEdBQUcsR0FBRyxTQUFTLENBQUMsTUFBTSxDQUFDO1FBQzNCLElBQUksSUFBSSxDQUFDLFdBQVcsQ0FBQyxVQUFVO1lBQUUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxTQUFTLEVBQUUsU0FBUyxDQUFDLE1BQU0sRUFBRSx3QkFBd0IsRUFBRSxRQUFRLENBQUMsV0FBVyxDQUFDLENBQUM7UUFDMUgsSUFBSSxJQUFJLENBQUMsV0FBVyxDQUFDLFVBQVU7WUFBRSxPQUFPLENBQUMsR0FBRyxDQUFDLGdDQUFnQyxFQUFFLFFBQVEsQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUNyRyxJQUFJLE9BQU8sR0FBRyxRQUFRLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ3hDLElBQUksSUFBSSxDQUFDLFdBQVcsQ0FBQyxVQUFVO1lBQUUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxVQUFVLEVBQUUsT0FBTyxDQUFDLENBQUM7UUFDbEUsSUFBSSxJQUFJLENBQUMsV0FBVyxDQUFDLFVBQVU7WUFBRSxPQUFPLENBQUMsR0FBRyxDQUFDLE1BQU0sRUFBRSxHQUFHLEVBQUUsd0JBQXdCLEVBQUUsUUFBUSxDQUFDLFdBQVcsRUFBRSxXQUFXLEVBQUUsT0FBTyxDQUFDLENBQUM7UUFFaEksSUFBSSxPQUFPLE9BQU8sS0FBSyxXQUFXLEVBQUUsQ0FBQztZQUNuQyw0Q0FBNEM7WUFDNUMsdUNBQXVDO1lBQ3ZDLENBQUM7Z0JBQ0MsSUFBSSxNQUFNLEdBQUcsS0FBSyxDQUFDO2dCQUNuQixJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7Z0JBRVYsK0NBQStDO2dCQUM3QyxDQUFDO29CQUNHLElBQUksSUFBSSxHQUFHLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQztvQkFDdEIsSUFBSSxJQUFJLEdBQUcsT0FBTyxDQUFDLE9BQU8sQ0FBQyxNQUFNLEdBQUUsQ0FBQyxDQUFDLENBQUM7b0JBQ3RDLDJDQUEyQztvQkFDM0MsK0JBQStCO29CQUMvQixPQUFPO29CQUNQLDRDQUE0QztvQkFDOUMsc0JBQXNCO29CQUV0QixJQUFJLElBQUksQ0FBQyxXQUFXLENBQUMsVUFBVTt3QkFBRSxPQUFPLENBQUMsR0FBRyxDQUFDLFlBQVksRUFBQyxJQUFJLEVBQUUsUUFBUSxFQUFFLElBQUksQ0FBQyxDQUFDO29CQUM5RSxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUM7b0JBQ2IsSUFBSSxTQUFTLEdBQUcsS0FBSyxDQUFDO29CQUN0QixJQUFJLGFBQWEsR0FBQyxFQUFFLENBQUM7b0JBQ3JCLE9BQVEsQ0FBQyxJQUFJLElBQUksRUFDakIsQ0FBQzt3QkFDQyxJQUFJLElBQUksQ0FBQyxXQUFXLENBQUMsVUFBVTs0QkFBRSxPQUFPLENBQUMsR0FBRyxDQUFDLG9CQUFvQixFQUFFLFFBQVEsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxFQUFFLFFBQVEsRUFBRSxRQUFRLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDO3dCQUNwSSxJQUFJLFlBQVksR0FBRyxpQkFBaUIsQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxFQUFDLFNBQVMsQ0FBRSxDQUFDO3dCQUN0RSxJQUFJLElBQUksQ0FBQyxXQUFXLENBQUMsVUFBVTs0QkFBRSxPQUFPLENBQUMsR0FBRyxDQUFDLG9CQUFvQixFQUFFLFFBQVEsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxFQUFFLFFBQVEsRUFBRSxRQUFRLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksRUFBRSxnQkFBZ0IsRUFBRSxZQUFZLENBQUMsQ0FBQzt3QkFDdEssSUFBSSxZQUFZLEVBQUMsQ0FBQzs0QkFDakIsU0FBUyxHQUFHLFNBQVMsQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxFQUFFLFNBQVMsQ0FBQyxDQUFDOzRCQUN4RCxJQUFJLFNBQVMsSUFBSSxLQUFLO2dDQUNsQixNQUFNOztnQ0FFTixhQUFhLEdBQUcsUUFBUSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUM7d0JBQ2pELENBQUM7d0JBRUQsQ0FBQyxFQUFFLENBQUM7b0JBQ1IsQ0FBQztvQkFDRCxPQUFPLENBQUMsR0FBRyxDQUFDLDJDQUEyQyxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsYUFBYSxDQUFDLENBQUM7b0JBQ2pHLElBQUksU0FBUyxJQUFJLElBQUksRUFDckIsQ0FBQzt3QkFDRyxtR0FBbUc7d0JBQ25HLFNBQVMsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFHLE1BQU0sRUFBRSxHQUFHLEVBQUUsQ0FBQyxFQUFFLFNBQVMsRUFBRSxRQUFRLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxFQUFDLFFBQVEsRUFBRSxPQUFPLEVBQUUsUUFBUSxFQUFFLFdBQVcsRUFBRSxhQUFhLENBQUMsQ0FBQzt3QkFDN0ksTUFBTSxHQUFHLFNBQVMsQ0FBQyxNQUFNLENBQUM7b0JBRTlCLENBQUM7b0JBRUQseUJBQXlCO29CQUN6QixVQUFVO29CQUNWLENBQUMsRUFBRSxDQUFDO2dCQUNSLENBQUM7WUFDTCxDQUFDO1FBR0gsQ0FBQztRQUNELE9BQU8sU0FBUyxDQUFDO0lBQ25CLENBQUM7SUFDTSxhQUFhLENBQUUsUUFBWSxFQUFFLEdBQU8sRUFBRSxPQUFXO1FBRXRELElBQUksS0FBSyxHQUFHLEtBQUssQ0FBQztRQUNsQixpREFBaUQ7UUFDL0MsSUFBSSxTQUFTLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUM1QyxJQUFJLE9BQU8sU0FBUyxLQUFLLFdBQVcsRUFDcEMsQ0FBQztZQUNDLDREQUE0RDtZQUM1RCxLQUFLLEdBQUcsSUFBSSxDQUFDO1FBQ2YsQ0FBQztRQUNGLE9BQU8sS0FBSyxDQUFDO0lBR2hCLENBQUM7SUFFTSxVQUFVLENBQUMsTUFBVSxFQUFFLFFBQVksRUFBRSxZQUFnQixFQUFFLE9BQVc7UUFDdkUsSUFBSSxTQUFTLEdBQU8sRUFBRSxDQUFDO1FBQ3ZCLElBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxZQUFZLElBQUksS0FBSztZQUN2QyxPQUFPLFNBQVMsQ0FBQztRQUVuQixTQUFTO1FBR1QsSUFBSSxJQUFJLENBQUMsV0FBVyxDQUFDLFVBQVU7WUFBRSxPQUFPLENBQUMsR0FBRyxDQUFDLGFBQWEsRUFBRSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsSUFBSSxDQUFDLFlBQVksRUFBRSxnQkFBZ0IsRUFBRSxZQUFZLENBQUMsQ0FBQTtRQUV6SSxJQUFJLE9BQU8sSUFBSSxZQUFZLEVBQUUsQ0FBQztZQUM1QixJQUFJLE9BQU8sWUFBWSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsS0FBSyxXQUFXLEVBQUUsQ0FBQztnQkFDaEQsSUFBSSxTQUFTLEdBQUcsWUFBWSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUM7Z0JBQzFDLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxTQUFTLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUM7b0JBQzFDLElBQUksSUFBSSxDQUFDLFdBQVcsQ0FBQyxVQUFVO3dCQUFFLE9BQU8sQ0FBQyxHQUFHLENBQUMsMEJBQTBCLEVBQUUsU0FBUyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO29CQUMxRixJQUFJLElBQUksQ0FBQyxXQUFXLENBQUMsVUFBVTt3QkFBRSxPQUFPLENBQUMsR0FBRyxDQUFDLHdDQUF3QyxFQUFFLFlBQVksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUE7b0JBQ2xILElBQUksSUFBSSxDQUFDLFdBQVcsQ0FBQyxVQUFVO3dCQUFFLE9BQU8sQ0FBQyxHQUFHLENBQUMsMkNBQTJDLEVBQUUsWUFBWSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQztvQkFDckgsSUFBSSxTQUFTLEdBQUcsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDO29CQUU3QixTQUFTLENBQUMsUUFBUSxDQUFDLEdBQUcsWUFBWSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUM7b0JBQ2pELDhFQUE4RTtvQkFDOUUsSUFBSSxTQUFTLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxRQUFRLEVBQUUsU0FBUyxDQUFDLFFBQVEsQ0FBQyxFQUFFLFlBQVksQ0FBQyxDQUFDO29CQUNoRixJQUFJLFNBQVMsRUFBQyxDQUFDO3dCQUNYLFNBQVMsR0FBRyxJQUFJLENBQUMsbUJBQW1CLENBQUMsTUFBTSxFQUFFLFFBQVEsRUFBRSxTQUFTLEVBQUUsT0FBTyxFQUFFLElBQUksQ0FBQyxZQUFZLEVBQUUsSUFBSSxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7b0JBQ3JJLENBQUM7b0JBQ0Msa0RBQWtEO29CQUNsRCxJQUFJLFNBQVMsQ0FBQyxRQUFRLENBQUMsSUFBSyxDQUFDLENBQUMsRUFBQyxDQUFDO3dCQUM5QixNQUFNO29CQUNaLENBQUM7Z0JBQ0gsQ0FBQztZQUNDLENBQUM7UUFDSCxDQUFDO2FBQ0ksSUFBSSxPQUFPLElBQUksV0FBVyxFQUFFLENBQUM7WUFFaEMsSUFBSSxPQUFPLFlBQVksS0FBSyxXQUFXLEVBQUUsQ0FBQztnQkFDeEMsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLFlBQVksQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQztvQkFDN0MsSUFBSSxJQUFJLENBQUMsV0FBVyxDQUFDLFVBQVU7d0JBQUUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxrQkFBa0IsRUFBRSxZQUFZLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQTtvQkFDakYsSUFBSSxTQUFTLEdBQUcsWUFBWSxDQUFDLENBQUMsQ0FBQyxDQUFDO29CQUNoQyxJQUFJLElBQUksQ0FBQyxXQUFXLENBQUMsVUFBVTt3QkFBRSxPQUFPLENBQUMsR0FBRyxDQUFDLFlBQVksRUFBRSxTQUFTLENBQUMsQ0FBQTtvQkFDbEUsSUFBSSxTQUFTLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxRQUFRLEVBQUUsU0FBUyxDQUFDLFFBQVEsQ0FBQyxFQUFFLFdBQVcsQ0FBQyxDQUFDO29CQUNsRixJQUFJLFNBQVMsRUFBQyxDQUFDO3dCQUNULFNBQVMsR0FBRyxJQUFJLENBQUMsbUJBQW1CLENBQUMsTUFBTSxFQUFFLFFBQVEsRUFBRSxTQUFTLEVBQUUsT0FBTyxFQUFFLElBQUksQ0FBQyxZQUFZLEVBQUUsSUFBSSxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7b0JBQ25JLENBQUM7Z0JBQ0wsQ0FBQztZQUNILENBQUM7UUFDSCxDQUFDO1FBQ0QsSUFBSSxJQUFJLENBQUMsV0FBVyxDQUFDLFVBQVU7WUFBRSxPQUFPLENBQUMsR0FBRyxDQUFDLGlCQUFpQixFQUFFLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxJQUFJLENBQUMsWUFBWSxFQUFFLGdCQUFnQixFQUFFLFlBQVksQ0FBQyxDQUFDO1FBQzlJLE9BQU8sU0FBUyxDQUFDO0lBRW5CLENBQUM7SUFDRCxjQUFjO0lBQ1AsZ0JBQWdCLENBQUMsT0FBVyxFQUFFLFFBQVk7UUFDakQsSUFBSSxnQkFBZ0IsR0FBRyxFQUFFLENBQUM7UUFDMUIsSUFBSSxjQUFjLEdBQUcsRUFBRSxDQUFDO1FBQ3RCLElBQUksVUFBVSxHQUFPLEVBQUUsQ0FBQztRQUV4QixLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsT0FBTyxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDO1lBQ3hDLElBQUksQ0FBQyxnQkFBZ0IsSUFBSSxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxjQUFjLElBQUksT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUM7Z0JBQ3pGLElBQUksQ0FBQyxJQUFJLENBQUM7b0JBQ1YsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDbkIsSUFBSSxnQkFBZ0IsSUFBSSxFQUFFLEVBQUUsQ0FBQztvQkFDN0IsUUFBUSxDQUFDLGFBQWEsQ0FBQyxnQkFBZ0IsQ0FBQyxHQUFHLFVBQVUsQ0FBQztvQkFDdEQsVUFBVSxHQUFHLEVBQUUsQ0FBQztvQkFDaEIsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDckIsQ0FBQztnQkFFQyxnQkFBZ0IsR0FBRyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDO2dCQUN4QyxjQUFjLEdBQUcsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQztnQkFDdEMsc0VBQXNFO1lBRXhFLENBQUM7aUJBQ00sSUFBSSxDQUFDLGdCQUFnQixJQUFJLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLGNBQWMsSUFBSSxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQztnQkFDOUYsY0FBYyxHQUFHLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUM7Z0JBQ3RDLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFFckIsQ0FBQztpQkFDTSxJQUFJLENBQUMsZ0JBQWdCLElBQUksT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsY0FBYyxJQUFJLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDO2dCQUM5RixVQUFVLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUNuQixjQUFjLEdBQUcsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQztZQUd0QyxDQUFDO1lBQ0QsSUFBSSxJQUFJLENBQUMsV0FBVyxDQUFDLFVBQVU7Z0JBQUUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxjQUFjLEVBQUUsVUFBVSxDQUFDLENBQUM7UUFDN0UsQ0FBQztRQUNELHFCQUFxQjtRQUNyQixRQUFRLENBQUMsYUFBYSxDQUFDLGdCQUFnQixDQUFDLEdBQUcsVUFBVSxDQUFDO1FBQ3BELElBQUksSUFBSSxDQUFDLFdBQVcsQ0FBQyxVQUFVO1lBQUUsT0FBTyxDQUFDLEdBQUcsQ0FBQyx5QkFBeUIsRUFBRSxRQUFRLENBQUMsYUFBYSxDQUFDLENBQUM7SUFDcEcsQ0FBQztJQUlRLGNBQWMsQ0FBQyxLQUFTLEVBQUUsUUFBWTtRQUN6QyxJQUFJLGdCQUFnQixHQUFHLEVBQUUsQ0FBQztRQUMxQixJQUFJLGNBQWMsR0FBRyxFQUFFLENBQUM7UUFDMUIsSUFBSSxRQUFRLEdBQU8sRUFBRSxDQUFDO1FBRXRCLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxLQUFLLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUM7WUFDcEMsSUFBSSxJQUFJLENBQUMsV0FBVyxDQUFDLFVBQVU7Z0JBQUUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxHQUFHLEtBQUssR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxHQUFHLFlBQVksR0FBRyxnQkFBZ0IsR0FBRyxLQUFLLEdBQUcsY0FBYyxDQUFDLENBQUM7WUFDekosSUFBSSxDQUFDLGdCQUFnQixJQUFJLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLGNBQWMsSUFBSSxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQztnQkFDbkYsSUFBSSxJQUFJLENBQUMsV0FBVyxDQUFDLFVBQVU7b0JBQUUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsQ0FBQztnQkFDN0QsSUFBSSxDQUFDLElBQUksQ0FBQztvQkFDTixRQUFRLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUNyQixJQUFJLGdCQUFnQixJQUFJLEVBQUUsRUFBRSxDQUFDO29CQUMzQixJQUFJLElBQUksQ0FBQyxXQUFXLENBQUMsVUFBVTt3QkFBRSxPQUFPLENBQUMsR0FBRyxDQUFDLHNCQUFzQixFQUFFLFFBQVEsQ0FBQyxDQUFDO29CQUM3RSxRQUFRLENBQUMsV0FBVyxDQUFDLGdCQUFnQixDQUFDLEdBQUcsUUFBUSxDQUFDO29CQUNsRCxRQUFRLEdBQUcsRUFBRSxDQUFDO29CQUNkLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQ25CLENBQUM7Z0JBRUgsZ0JBQWdCLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQztnQkFDdEMsY0FBYyxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUM7Z0JBQ2xDLElBQUksSUFBSSxDQUFDLFdBQVcsQ0FBQyxVQUFVO29CQUFFLE9BQU8sQ0FBQyxHQUFHLENBQUMsWUFBWSxFQUFDLFFBQVEsQ0FBQyxDQUFDO1lBRXBFLENBQUM7aUJBQ0UsSUFBSSxDQUFDLGdCQUFnQixJQUFJLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLGNBQWMsSUFBSSxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQztnQkFDeEYsSUFBSSxJQUFJLENBQUMsV0FBVyxDQUFDLFVBQVU7b0JBQUUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxhQUFhLENBQUMsQ0FBQztnQkFDNUQsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDbkIsY0FBYyxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUM7Z0JBQ2xDLElBQUksSUFBSSxDQUFDLFdBQVcsQ0FBQyxVQUFVO29CQUFFLE9BQU8sQ0FBQyxHQUFHLENBQUMsWUFBWSxFQUFFLFFBQVEsQ0FBQyxDQUFDO1lBQ3JFLENBQUM7aUJBQ0ksSUFBSyxDQUFFLGdCQUFnQixJQUFJLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUUsSUFBSSxDQUFFLGNBQWMsSUFBSSxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFFLEVBQzVGLENBQUM7Z0JBQ0QsT0FBTyxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQztnQkFDckIsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDakIsY0FBYyxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUU7Z0JBQ3JDLE9BQU8sQ0FBQyxHQUFHLENBQUMsWUFBWSxFQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQ25DLENBQUM7WUFDTCxJQUFJLElBQUksQ0FBQyxXQUFXLENBQUMsVUFBVTtnQkFBRSxPQUFPLENBQUMsR0FBRyxDQUFDLFlBQVksRUFBRSxRQUFRLENBQUMsQ0FBQztRQUNyRSxDQUFDO1FBQ0QsbUJBQW1CO1FBQ3JCLElBQUksSUFBSSxDQUFDLFdBQVcsQ0FBQyxVQUFVO1lBQUUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxZQUFZLEVBQUMsUUFBUSxDQUFDLENBQUM7UUFDbEUsUUFBUSxDQUFDLFdBQVcsQ0FBQyxnQkFBZ0IsQ0FBQyxHQUFHLFFBQVEsQ0FBQztRQUNwRCxJQUFJLElBQUksQ0FBQyxXQUFXLENBQUMsVUFBVTtZQUFFLE9BQU8sQ0FBQyxHQUFHLENBQUMsNkJBQTZCLEVBQUUsUUFBUSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQ2xHLENBQUM7SUFFTCxjQUFjO0lBQ0wsU0FBUyxDQUFDLE1BQVU7UUFFekIsTUFBTSxDQUFDLElBQUksR0FBRyxFQUFFLENBQUM7UUFDakIsSUFBSSxJQUFJLEdBQUcsRUFBRSxDQUFDO1FBQ2QsSUFBSSxNQUFNLEdBQU8sRUFBRSxDQUFDO1FBQ3BCLE1BQU0sQ0FBQyxRQUFRLENBQUMsR0FBRyw0QkFBNEIsQ0FBQztRQUNoRCxNQUFNLENBQUMsY0FBYyxDQUFDLEdBQUcsWUFBWSxDQUFDO1FBQ3RDLElBQUksSUFBSSxDQUFDLFdBQVcsQ0FBQyxVQUFVO1lBQUUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxjQUFjLEVBQUUsTUFBTSxDQUFDLENBQUE7UUFDcEUsSUFBSSxJQUFJLENBQUMsV0FBVyxDQUFDLFVBQVU7WUFBRSxPQUFPLENBQUMsR0FBRyxDQUFDLG1CQUFtQixFQUFFLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQTtRQUM5RSxNQUFNLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBRXpCLElBQUksSUFBSSxDQUFDLFdBQVcsQ0FBQyxVQUFVO1lBQUUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxtQkFBbUIsRUFBRSxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUE7UUFDOUUsTUFBTSxHQUFHLEVBQUUsQ0FBQztRQUNaLE1BQU0sQ0FBQyxRQUFRLENBQUMsR0FBRyw4QkFBOEIsQ0FBQztRQUNsRCxNQUFNLENBQUMsY0FBYyxDQUFDLEdBQUcsWUFBWSxDQUFDO1FBQ3RDLE1BQU0sQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLENBQUM7UUFFekIsTUFBTSxHQUFHLEVBQUUsQ0FBQztRQUNaLE1BQU0sQ0FBQyxRQUFRLENBQUMsR0FBRyxtQkFBbUIsQ0FBQztRQUN2QyxNQUFNLENBQUMsU0FBUyxDQUFDLEdBQUcsR0FBRyxDQUFDO1FBQ3hCLE1BQU0sQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLENBQUM7UUFFekIsTUFBTSxHQUFHLEVBQUUsQ0FBQztRQUNaLE1BQU0sQ0FBQyxRQUFRLENBQUMsR0FBRyx1QkFBdUIsQ0FBQztRQUMzQyxNQUFNLENBQUMsU0FBUyxDQUFDLEdBQUcsR0FBRyxDQUFDO1FBQ3hCLE1BQU0sQ0FBQyxRQUFRLENBQUMsR0FBRyxHQUFHLENBQUM7UUFDdkIsTUFBTSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUV6QixJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxJQUFJLEVBQUUsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsRUFBRTtZQUN0RCxJQUFJLElBQUksQ0FBQyxXQUFXLENBQUMsVUFBVTtnQkFBRSxPQUFPLENBQUMsR0FBRyxDQUFDLG1CQUFtQixFQUFFLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUcvRSxJQUFJLENBQUMsaUJBQWlCLENBQUMsV0FBVyxHQUFHLEVBQUUsQ0FBQztZQUN4QyxJQUFJLENBQUMsaUJBQWlCLENBQUMsYUFBYSxHQUFHLEVBQUUsQ0FBQztZQUUxQyxJQUFJLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxDQUFBO1lBQ2hFLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxRQUFRLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUM7WUFFdEQsSUFBSSxDQUFDLGdCQUFnQixDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO1lBQ25FLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxVQUFVLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUM7WUFDeEQsSUFBSSxJQUFJLENBQUMsV0FBVyxDQUFDLFVBQVU7Z0JBQUUsT0FBTyxDQUFDLEdBQUcsQ0FBQyw2QkFBNkIsRUFBRSxJQUFJLENBQUMsaUJBQWlCLENBQUMsQ0FBQTtZQUVuRyxJQUFJLENBQUMsUUFBUSxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDO1lBQ3BDLElBQUksQ0FBQyxXQUFXLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUM7WUFFdkMsY0FBYztZQUNkLE1BQU0sQ0FBQyxJQUFJLEdBQUcsRUFBRSxDQUFDO1FBQ25CLENBQUMsRUFDRCxHQUFHLENBQUMsRUFBRTtZQUNGLE1BQU0sQ0FBQyxJQUFJLEdBQUcsRUFBRSxDQUFDO1lBQ2pCLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsUUFBUSxHQUFHLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUMzRCxDQUFDLENBQUMsQ0FBQztRQUVQLDhCQUE4QjtRQUM5QixjQUFjO1FBQ1YsTUFBTSxDQUFDLElBQUksR0FBRyxFQUFFLENBQUM7UUFDakIsSUFBSSxHQUFHLEVBQUUsQ0FBQztRQUNkLE1BQU0sR0FBRyxFQUFFLENBQUM7UUFDWixNQUFNLENBQUMsUUFBUSxDQUFDLEdBQUcsNEJBQTRCLENBQUM7UUFDaEQsTUFBTSxDQUFDLGNBQWMsQ0FBQyxHQUFHLFdBQVcsQ0FBQztRQUNyQyxJQUFJLElBQUksQ0FBQyxXQUFXLENBQUMsVUFBVTtZQUFFLE9BQU8sQ0FBQyxHQUFHLENBQUMsY0FBYyxFQUFFLE1BQU0sQ0FBQyxDQUFBO1FBQ3BFLElBQUksSUFBSSxDQUFDLFdBQVcsQ0FBQyxVQUFVO1lBQUUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxtQkFBbUIsRUFBRSxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUE7UUFDOUUsTUFBTSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUV6QixJQUFJLElBQUksQ0FBQyxXQUFXLENBQUMsVUFBVTtZQUFFLE9BQU8sQ0FBQyxHQUFHLENBQUMsbUJBQW1CLEVBQUUsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFBO1FBQzlFLE1BQU0sR0FBRyxFQUFFLENBQUM7UUFDWixNQUFNLENBQUMsUUFBUSxDQUFDLEdBQUcsOEJBQThCLENBQUM7UUFDbEQsTUFBTSxDQUFDLGNBQWMsQ0FBQyxHQUFHLFdBQVcsQ0FBQztRQUNyQyxNQUFNLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBSXJCLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLElBQUksRUFBRSxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxFQUFFO1lBQzFELElBQUksSUFBSSxDQUFDLFdBQVcsQ0FBQyxVQUFVO2dCQUFFLE9BQU8sQ0FBQyxHQUFHLENBQUMsbUJBQW1CLEVBQUUsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBRWpGLGNBQWM7WUFDUixJQUFJLENBQUMsZ0JBQWdCLENBQUMsV0FBVyxHQUFHLEVBQUUsQ0FBQztZQUN2QyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsYUFBYSxHQUFHLEVBQUUsQ0FBQztZQUU3QyxJQUFJLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFBO1lBQy9ELElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUM7WUFFakQsSUFBSSxDQUFDLGdCQUFnQixDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO1lBQ3RFLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxVQUFVLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUM7WUFDdkQsSUFBSSxJQUFJLENBQUMsV0FBVyxDQUFDLFVBQVU7Z0JBQUUsT0FBTyxDQUFDLEdBQUcsQ0FBQyw0QkFBNEIsRUFBRSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsQ0FBQTtZQUdqRyxjQUFjO1lBQ1YsTUFBTSxDQUFDLElBQUksR0FBRyxFQUFFLENBQUM7UUFDdkIsQ0FBQyxFQUNELEdBQUcsQ0FBQyxFQUFFO1lBQ0UsTUFBTSxDQUFDLElBQUksR0FBRyxFQUFFLENBQUM7WUFDakIsSUFBSSxDQUFDLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxRQUFRLEdBQUcsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQy9ELENBQUMsQ0FBQyxDQUFDO0lBRUQsQ0FBQztJQVVNLFlBQVksQ0FBRyxNQUFNLEVBQUMsWUFBWTtRQUN2QyxJQUFJLElBQUksR0FBRSxFQUFFLENBQUM7UUFDYixLQUFLLElBQUksQ0FBQyxHQUFDLENBQUMsRUFBRSxDQUFDLEdBQUUsWUFBWSxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBQyxDQUFDO1lBQ3pDLElBQUksTUFBTSxHQUFHLEVBQUUsQ0FBQztZQUNoQixNQUFNLENBQUMsUUFBUSxDQUFDLEdBQUcsVUFBVSxDQUFDO1lBQzlCLE1BQU0sQ0FBQyxPQUFPLENBQUMsR0FBSyxZQUFZLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDO1lBQzdDLElBQUksWUFBWSxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsSUFBSSxJQUFJO2dCQUNsQyxJQUFJLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLEVBQUMsSUFBSSxDQUFDLENBQUM7UUFDdkMsQ0FBQztRQUVELElBQUksSUFBSSxHQUFJLEVBQUUsQ0FBQztRQUNmLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFDLElBQUksRUFBQyxJQUFJLENBQUMsQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLEVBQUU7WUFDN0MsS0FBSyxJQUFJLENBQUMsR0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFFLFlBQVksQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUMsQ0FBQztnQkFDekMsNkZBQTZGO2dCQUM3RixJQUFLLE9BQU8sTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsS0FBSyxXQUFXLEVBQUMsQ0FBQztvQkFDMUMsSUFBSyxPQUFPLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxLQUFLLFdBQVcsRUFBQyxDQUFDO3dCQUNsRCxxR0FBcUc7d0JBQ3JHLElBQUksSUFBSSxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQzt3QkFDL0MsSUFBSSxRQUFRLEdBQUUsRUFBRSxDQUFDO3dCQUVqQixJQUFJLFFBQVEsR0FBQyxLQUFLLENBQUM7d0JBQ25CLHlCQUF5Qjt3QkFDekIsd0RBQXdEO3dCQUV4RCx3QkFBd0I7d0JBQ3hCLGdDQUFnQzt3QkFDaEMscUNBQXFDO3dCQUNyQyx1QkFBdUI7d0JBQ3ZCLG1CQUFtQjt3QkFDbkIsTUFBTTt3QkFDTixNQUFNO3dCQUdOLElBQUssQ0FBQyxRQUFRLEVBQUMsQ0FBQzs0QkFDaEIsS0FBSyxJQUFJLENBQUMsR0FBRSxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUMsQ0FBQztnQ0FDakMscUVBQXFFO2dDQUNyRSxvQ0FBb0M7Z0NBQ3BDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUM7Z0NBQ3ZCLCtDQUErQzs0QkFDakQsQ0FBQzs0QkFDSCxvRUFBb0U7NEJBQ3BFLG9DQUFvQzs0QkFDcEMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQywwR0FBMEc7d0JBQ3BKLENBQUM7b0JBQ0gsQ0FBQztvQkFDRCxNQUFNLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDO29CQUMzRCw2SUFBNkk7Z0JBRTdJLENBQUM7WUFFSCxDQUFDO1lBQ0QsSUFBSyxPQUFPLE1BQU0sQ0FBQyxvQkFBb0IsS0FBSyxXQUFXO2dCQUNyRCxNQUFNLENBQUMsb0JBQW9CLEVBQUUsQ0FBQztRQUVsQyxDQUFDLEVBQ0QsR0FBRyxDQUFDLEVBQUU7WUFDSixpQ0FBaUM7WUFDakMsSUFBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLEVBQUUsR0FBRyxDQUFDLENBQUM7UUFDakMsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRVEsV0FBVyxDQUFDLE1BQVUsRUFBRSxFQUFNO1FBQ3JDLElBQUksSUFBSSxHQUFHLEVBQUUsQ0FBQztRQUNkLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLElBQUksRUFBRSxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxFQUFFO1lBQ3RELEVBQUUsQ0FBQyxNQUFNLEVBQUUsTUFBTSxDQUFDLENBQUM7WUFDbkIsTUFBTSxDQUFDLElBQUksR0FBRyxFQUFFLENBQUM7UUFDbkIsQ0FBQyxFQUNELEdBQUcsQ0FBQyxFQUFFO1lBQ0osaUNBQWlDO1lBQ2pDLElBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxFQUFFLEdBQUcsQ0FBQyxDQUFDO1FBQ2pDLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUdNLGtCQUFrQixDQUFDLGVBQW1CLEVBQUUsWUFBZ0I7UUFDN0QsSUFBSSxJQUFJLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQztRQUN4QyxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDO1lBQ25DLDhGQUE4RjtZQUNoRyxJQUFJLGVBQWUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxJQUFJLEVBQUUsQ0FBQztnQkFDckMsWUFBWSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLGVBQWUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNqRCxDQUFDO1FBQ0gsQ0FBQztRQUNILDZEQUE2RDtRQUM3RCxPQUFPLFlBQVksQ0FBQztJQUN0QixDQUFDO0lBQ00sY0FBYyxDQUFDLElBQVEsRUFBRSxZQUFnQjtRQUM5QyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDVixJQUFJLFdBQVcsQ0FBQztRQUNoQixJQUFJLEtBQUssR0FBRyxLQUFLLENBQUM7UUFDbEIsSUFBSSxPQUFPLElBQUksS0FBSyxXQUFXLEVBQUUsQ0FBQztZQUNoQyxPQUFPLENBQUMsR0FBRyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7Z0JBQ3ZCLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztnQkFDVixPQUFPLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLE1BQU0sRUFBRSxDQUFDO29CQUNoQyxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxJQUFJLFlBQVksRUFBRSxDQUFDO3dCQUM1QyxXQUFXLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQzt3QkFDL0IsS0FBSyxHQUFHLElBQUksQ0FBQzt3QkFDYixNQUFNO29CQUNSLENBQUM7b0JBQ0QsQ0FBQyxFQUFFLENBQUM7Z0JBQ04sQ0FBQztnQkFDRCxJQUFJLEtBQUs7b0JBQ1AsTUFBTTtnQkFDUixDQUFDLEVBQUUsQ0FBQztZQUNOLENBQUM7UUFDSCxDQUFDO1FBQ0QsSUFBSSxJQUFJLENBQUMsV0FBVyxDQUFDLFVBQVU7WUFBRSxPQUFPLENBQUMsR0FBRyxDQUFDLGVBQWUsRUFBRSxZQUFZLEVBQUUsY0FBYyxFQUFFLFdBQVcsRUFBRSxRQUFRLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFHekgsT0FBTyxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQ3ZCLENBQUM7SUFDTSxnQkFBZ0IsQ0FBQyxNQUFVLEVBQUUsWUFBZ0I7UUFDbEQsSUFBSSxJQUFJLENBQUMsV0FBVyxDQUFDLFVBQVU7WUFBRSxPQUFPLENBQUMsR0FBRyxDQUFDLGVBQWUsR0FBRyxZQUFZLENBQUMsQ0FBQTtRQUM1RSxJQUFJLFdBQVcsR0FBRyxjQUFjLEVBQUUsQ0FBQztRQUNuQyxJQUFJLElBQUksR0FBRyxXQUFXLENBQUMsSUFBSSxDQUFDO1FBQzVCLElBQUksV0FBVyxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxFQUFFLFlBQVksQ0FBQyxDQUFDO1FBRTFELElBQUksT0FBTyxXQUFXLEtBQUssV0FBVyxFQUFFLENBQUM7WUFDdkMsTUFBTSxDQUFDLEtBQUssR0FBRyxXQUFXLENBQUMsSUFBSSxHQUFHLElBQUksR0FBRyxXQUFXLENBQUMsVUFBVSxHQUFHLEdBQUcsQ0FBQztZQUN0RSxNQUFNLENBQUMsV0FBVyxHQUFHLFdBQVcsQ0FBQztZQUNqQyxJQUFJLENBQUMsWUFBWSxHQUFHLFlBQVksQ0FBQztZQUNqQyxJQUFJLElBQUksQ0FBQyxXQUFXLENBQUMsVUFBVTtnQkFBRSxPQUFPLENBQUMsR0FBRyxDQUFDLGVBQWUsR0FBRyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUE7UUFDOUUsQ0FBQzthQUVDLElBQUksWUFBWSxJQUFJLFNBQVMsRUFBRSxDQUFDO1lBQzlCLElBQUksQ0FBQyxZQUFZLEdBQUcsWUFBWSxDQUFDO1FBQ25DLENBQUM7UUFDSCxJQUFJLElBQUksQ0FBQyxXQUFXLENBQUMsVUFBVTtZQUFFLE9BQU8sQ0FBQyxHQUFHLENBQUMsb0JBQW9CLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFBO0lBQ3hGLENBQUM7SUFFTSxZQUFZLENBQUMsTUFBVSxFQUFFLFdBQWU7UUFDN0MsSUFBSSxRQUFRLEdBQUcsRUFBRSxDQUFDO1FBQ2xCLElBQUksT0FBTyxXQUFXLENBQUMsS0FBSyxJQUFJLFdBQVcsRUFBRSxDQUFDO1lBQzNDLFFBQVEsR0FBRyxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsS0FBSyxHQUFHLFdBQVcsQ0FBQztRQUMxRCxDQUFDOztZQUVFLFFBQVEsR0FBRyxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsS0FBSyxHQUFHLFdBQVcsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDO1FBQ3RFLElBQUksV0FBVyxHQUFHO1lBQ2hCLEdBQUcsRUFBRSxRQUFRO1lBQ2IsS0FBSyxFQUFFLE9BQU87WUFDZCxJQUFJLEVBQUUsSUFBSTtZQUNWLE1BQU0sRUFBRSxNQUFNO1lBQ2QsTUFBTSxFQUFFLElBQUksQ0FBQyxTQUFTO1lBQ3RCLFFBQVEsRUFBRSxJQUFJO1NBQ2YsQ0FBQztRQUNBLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUV2QyxDQUFDO0lBQ00sY0FBYyxDQUFDLEdBQU8sRUFBRSxJQUFZO1FBQ3pDLElBQUksSUFBSSxDQUFDLFdBQVcsQ0FBQyxVQUFVO1lBQUUsT0FBTyxDQUFDLEdBQUcsQ0FBQyx3QkFBd0IsQ0FBQyxDQUFBO1FBQ3RFLElBQUksTUFBTSxHQUFHLEdBQUcsR0FBRyxJQUFJLENBQUM7UUFDeEIsSUFBSSxJQUFJLENBQUMsV0FBVyxDQUFDLFVBQVU7WUFBRSxPQUFPLENBQUMsR0FBRyxDQUFDLGdDQUFnQyxFQUFFLE1BQU0sQ0FBQyxDQUFBO1FBQ3RGLElBQUksQ0FBQyxXQUFXLEdBQUc7WUFDakIsT0FBTyxFQUFFLElBQUksV0FBVyxDQUFDO2dCQUN2QixjQUFjLEVBQUUsa0JBQWtCO2dCQUNsQyxlQUFlLEVBQUUsSUFBSSxDQUFDLE9BQU87YUFFOUIsQ0FBQztTQUNILENBQUM7UUFFRixJQUFJLElBQUksQ0FBQyxXQUFXLENBQUMsVUFBVTtZQUFFLE9BQU8sQ0FBQyxHQUFHLENBQUMsd0JBQXdCLEdBQUcsTUFBTSxDQUFDLENBQUE7UUFDL0UsT0FBTyxJQUFJLENBQUMsSUFBSTthQUNiLEdBQUcsQ0FBQyxHQUFHLE1BQU0sRUFBRSxFQUFFLElBQUksQ0FBQyxXQUFXLENBQUM7YUFDaEMsSUFBSSxDQUNELFVBQVUsQ0FBQyxDQUFDLEdBQUcsRUFBRSxFQUFFO1lBQ2pCLElBQUksSUFBSSxDQUFDLFdBQVcsQ0FBQyxVQUFVO2dCQUFFLE9BQU8sQ0FBQyxHQUFHLENBQUMsZUFBZSxFQUFFLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQTtZQUM5RSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLFFBQVEsR0FBRyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUM7WUFDakQsT0FBTyxVQUFVLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDekIsQ0FBQyxDQUFDLEVBQ0osR0FBRyxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQ1IsUUFDTixDQUFDLEVBQ0YsR0FBRyxDQUFDLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDLENBQ25DLENBQUM7SUFDUCxDQUFDO0lBQ00sa0JBQWtCLENBQUMsT0FBVyxFQUFDLElBQVksRUFBRSxHQUFPLEVBQUUsSUFBUTtRQUNuRSxxRUFBcUU7UUFDckUsSUFBSSxNQUFNLEdBQUcsR0FBRyxDQUFDLENBQUMseUJBQXlCO1FBQzNDLElBQUksV0FBVyxHQUFHLEVBQUUsQ0FBQztRQUNyQixJQUFJLE9BQU8sSUFBSSxJQUFJLEVBQUMsQ0FBQztZQUNsQixXQUFXLEdBQUc7Z0JBQ2IsT0FBTyxFQUFFLElBQUksV0FBVyxDQUFDO29CQUN2QixjQUFjLEVBQUUsa0JBQWtCO29CQUNsQyxlQUFlLEVBQUUsSUFBSSxDQUFDLE9BQU87aUJBQ2hDLENBQUM7YUFDRCxDQUFDO1FBQ0osQ0FBQzthQUNHLENBQUM7WUFDRixXQUFXLEdBQUc7Z0JBQ2IsT0FBTyxFQUFFLElBQUksV0FBVyxDQUN0QixPQUFPLENBQ047YUFDSixDQUFDO1FBQ0osQ0FBQztRQUdELElBQUksSUFBSSxDQUFDLFdBQVcsQ0FBQyxVQUFVO1lBQUUsT0FBTyxDQUFDLEdBQUcsQ0FBQyw0QkFBNEIsRUFBRyxNQUFNLEVBQUUsT0FBTyxFQUFDLElBQUksQ0FBRSxDQUFBO1FBQ2xHLE9BQU8sSUFBSSxDQUFDLElBQUk7YUFDWCxJQUFJLENBQUMsR0FBRyxNQUFNLEVBQUUsRUFBQyxJQUFJLEVBQUUsV0FBVyxDQUFDO2FBQ25DLElBQUksQ0FDRCxVQUFVLENBQUMsQ0FBQyxHQUFHLEVBQUUsRUFBRTtZQUNqQiw0RUFBNEU7WUFDNUUseURBQXlEO1lBQ3pELDBCQUEwQjtZQUN4QixPQUFPLFVBQVUsQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUN2QixtQkFBbUI7WUFDbkIsK0JBQStCO1FBQ2pDLENBQUMsQ0FBQyxFQUNKLEdBQUcsQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUNSLFFBQ04sQ0FBQyxFQUNGLFVBQVUsQ0FBQyxHQUFHLENBQUMsRUFBRTtZQUNmLE9BQU8sR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFBLEdBQUc7UUFDMUIsQ0FBQyxDQUFDLEVBQXFCLEdBQUc7UUFDeEIsR0FBRyxDQUFDLENBQUMsUUFBUSxFQUFFLEVBQUUsR0FBRSxJQUFJLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsV0FBVyxFQUFDLFFBQVEsQ0FBQyxDQUFBLENBQUEsQ0FBQyxDQUFDLENBQ2hGLENBQUM7SUFDUCxDQUFDO0lBQ00sV0FBVyxDQUFDLElBQVksRUFBRSxHQUFPLEVBQUUsSUFBUTtRQUNwRCxxRUFBcUU7UUFDakUsSUFBSSxNQUFNLEdBQUcsR0FBRyxDQUFDLENBQUMseUJBQXlCO1FBQzNDLE1BQU0sR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ2pDLElBQUksQ0FBQyxXQUFXLEdBQUc7WUFDakIsT0FBTyxFQUFFLElBQUksV0FBVyxDQUFDO2dCQUN2QixjQUFjLEVBQUUsa0JBQWtCO2dCQUNsQyxlQUFlLEVBQUUsSUFBSSxDQUFDLE9BQU87YUFFOUIsQ0FBQztTQUNILENBQUM7UUFFRiw4RUFBOEU7UUFDOUUsT0FBTyxJQUFJLENBQUMsSUFBSTthQUNiLElBQUksQ0FBQyxHQUFHLE1BQU0sRUFBRSxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsV0FBVyxDQUFDO2FBQ3ZDLElBQUksQ0FDRCxVQUFVLENBQUMsQ0FBQyxHQUFHLEVBQUUsRUFBRTtZQUNqQiw0RUFBNEU7WUFDaEYsSUFBSSxDQUFDLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxRQUFRLEdBQUcsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBQ2pELE9BQU8sVUFBVSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ3pCLENBQUMsQ0FBQyxFQUNKLEdBQUcsQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUNSLFFBQ04sQ0FBQyxFQUNGLEdBQUcsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQyxDQUNuQyxDQUFDO0lBQ1AsQ0FBQztJQUNNLGVBQWUsQ0FBQyxHQUFPO1FBQzVCLEdBQUcsR0FBRyxHQUFHLENBQUMsV0FBVyxFQUFFLENBQUM7UUFFeEIsR0FBRyxHQUFHLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsV0FBVyxFQUFFLEdBQUcsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQTtRQUNoRCxPQUFPLEdBQUcsQ0FBQztJQUNiLENBQUM7SUFDTSxlQUFlLENBQUMsU0FBYTtRQUVwQyxJQUFJLEtBQUssR0FBRyxTQUFTLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQy9CLElBQUksSUFBSSxDQUFDLFdBQVcsQ0FBQyxVQUFVO1lBQUUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxRQUFRLEVBQUUsS0FBSyxDQUFDLENBQUE7UUFDN0QsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEtBQUssQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFO1lBQ25DLEtBQUssQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFBO1FBRTNDLFNBQVMsR0FBRyxLQUFLLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQzVCLE9BQU8sU0FBUyxDQUFDO0lBQ25CLENBQUM7SUFDTSxhQUFhLENBQUMsU0FBYSxFQUFFLFdBQWU7UUFFakQsSUFBSSxVQUFVLEdBQUcsUUFBUSxHQUFHLFNBQVMsQ0FBQztRQUN0QyxJQUFJLE1BQU0sQ0FBQztRQUNYLElBQUksU0FBUyxJQUFJLFVBQVUsRUFBRSxDQUFDO1lBQzVCLElBQUksSUFBSSxDQUFDLFdBQVcsQ0FBQyxVQUFVO2dCQUFFLE9BQU8sQ0FBQyxHQUFHLENBQUMsdUNBQXVDLEVBQUUsSUFBSSxDQUFDLGFBQWEsQ0FBQyxTQUFTLENBQUMsQ0FBQztZQUVwSCxJQUFJLElBQUksR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUM7WUFFN0MsTUFBTSxHQUFHO2dCQUNQLFVBQVUsRUFBRSx3RkFBd0YsR0FBRyxJQUFJLEdBQUcsSUFBSTtnQkFDbEgsWUFBWSxFQUFFLFVBQVUsRUFBRSxXQUFXLEVBQUUsU0FBUzthQUNqRCxDQUFDO1FBRUosQ0FBQzthQUNJLENBQUM7WUFDSixNQUFNLEdBQUc7Z0JBQ1AsVUFBVSxFQUFFLG9FQUFvRSxHQUFHLFNBQVMsR0FBRyx5QkFBeUIsR0FBRyxXQUFXLENBQUMsUUFBUSxHQUFHLDRCQUE0QjtnQkFDOUssWUFBWSxFQUFFLFVBQVUsRUFBRSxXQUFXLEVBQUUsU0FBUzthQUNqRCxDQUFDO1FBQ0osQ0FBQztRQUNELE9BQU8sTUFBTSxDQUFDO0lBRWhCLENBQUM7SUFDTSxpQkFBaUIsQ0FBQyxNQUFVLEVBQUUsWUFBZ0I7UUFDbkQsSUFBSSxVQUFVLENBQUM7UUFFZixJQUFJLFlBQVksSUFBSSxNQUFNLEVBQUUsQ0FBQztZQUMzQixVQUFVLEdBQUcsNkZBQTZGLEdBQUcsTUFBTSxDQUFDLFdBQVcsQ0FBQyxRQUFRLEdBQUcsNEJBQTRCLENBQUE7UUFDekssQ0FBQzthQUNJLElBQUksWUFBWSxJQUFJLFFBQVEsRUFBRSxDQUFDO1lBQ2xDLFVBQVUsR0FBRyx1RkFBdUYsR0FBRyxNQUFNLENBQUMsWUFBWSxDQUFDLGFBQWEsQ0FBQyxTQUFTLENBQUMsSUFBSSxHQUFHLDJCQUEyQixDQUFBO1FBQ3ZMLENBQUM7YUFDSSxJQUFJLFlBQVksSUFBSSxTQUFTLEVBQUUsQ0FBQztZQUNuQyxVQUFVLEdBQUcsa0dBQWtHLEdBQUcsTUFBTSxDQUFDLFdBQVcsQ0FBQyxRQUFRLEdBQUcsMEJBQTBCLENBQUE7UUFDNUssQ0FBQztRQUNELE9BQU8sVUFBVSxDQUFDO0lBQ3BCLENBQUM7SUFDTSxlQUFlLENBQUMsTUFBVSxFQUFFLEtBQVM7UUFDMUMsSUFBSSxTQUFlLENBQUE7UUFDbkIsSUFBSSxZQUFZLEdBQU8sR0FBRyxDQUFDLE1BQU0sQ0FBQztRQUNsQyxJQUFJLE9BQU8sTUFBTSxDQUFDLFdBQVcsQ0FBQyxZQUFZLEtBQUssV0FBVyxFQUFFLENBQUM7WUFDM0QsWUFBWSxHQUFHLE1BQU0sQ0FBQyxXQUFXLENBQUMsWUFBWSxDQUFDO1FBQ2pELENBQUM7UUFDRCxTQUFTLEdBQUcsY0FBYyxDQUFDLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFFLFlBQVksQ0FBQyxDQUFDO1FBQzFELFNBQVMsR0FBRyxPQUFPLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDL0IsSUFBSSxJQUFJLENBQUMsV0FBVyxDQUFDLFVBQVU7WUFBRSxPQUFPLENBQUMsR0FBRyxDQUFDLFlBQVksRUFBRSxTQUFTLENBQUMsQ0FBQTtRQUNyRSxPQUFPLFNBQVMsQ0FBQztJQUVuQixDQUFDO0lBQ00sTUFBTTtRQUNYLElBQUksV0FBVyxHQUFHLGNBQWMsRUFBRSxDQUFDO1FBQ25DLElBQUksYUFBYSxHQUFHLFdBQVcsQ0FBQyxRQUFRLENBQUM7UUFDekMsYUFBYSxHQUFHLGFBQWEsQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUU1QyxJQUFJLElBQUksR0FBTyxRQUFRLENBQUMsY0FBYyxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQ25ELE1BQU0sR0FBRyxHQUFxQixJQUFJLENBQUMsUUFBUSxDQUFDO1FBQzVDLCtEQUErRDtRQUMvRCxvQ0FBb0M7UUFDcEMsc0ZBQXNGO1FBQ3RGLElBQUksYUFBYSxJQUFJLElBQUksRUFBRSxDQUFDO1lBQzFCLElBQUksQ0FBQyxHQUFHLEdBQUcsS0FBSyxDQUFDO1lBQ2pCLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzdCLENBQUM7YUFDSSxDQUFDO1lBQ0osSUFBSSxDQUFDLEdBQUcsR0FBRyxLQUFLLENBQUM7WUFDakIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDOUIsQ0FBQztJQUNILENBQUM7SUFDTSxlQUFlLENBQUMsYUFBaUI7UUFDdEMsYUFBYSxHQUFHLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLGFBQWEsQ0FBQTtRQUNyRCxJQUFJLElBQUksR0FBRyxjQUFjLEdBQUcsYUFBYSxDQUFDLFdBQVcsRUFBRSxHQUFHLE9BQU8sQ0FBQTtRQUNqRSxJQUFJLElBQUksQ0FBQyxXQUFXLENBQUMsVUFBVTtZQUFFLE9BQU8sQ0FBQyxHQUFHLENBQUMsb0JBQW9CLEVBQUUsSUFBSSxDQUFDLENBQUE7UUFDeEUsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxFQUFFO1lBQ25DLElBQUksSUFBSSxDQUFDLFdBQVcsQ0FBQyxVQUFVO2dCQUFFLE9BQU8sQ0FBQyxHQUFHLENBQUMsb0JBQW9CLEVBQUUsSUFBSSxDQUFDLENBQUE7WUFDeEUsSUFBSSxXQUFXLEdBQUc7Z0JBQ2hCLE1BQU0sRUFBRSxRQUFRO2dCQUNoQixLQUFLLEVBQUUsSUFBSTthQUNaLENBQUM7WUFDRixjQUFjLENBQUMsV0FBVyxDQUFDLENBQUM7WUFDNUIsSUFBSSxDQUFDLFdBQVcsR0FBRyxjQUFjLEVBQUUsQ0FBQztZQUNwQyxXQUFXLEdBQUc7Z0JBQ1osTUFBTSxFQUFFLFVBQVU7Z0JBQ2xCLEtBQUssRUFBRSxhQUFhLENBQUMsV0FBVyxFQUFFO2FBQ25DLENBQUM7WUFDRixjQUFjLENBQUMsV0FBVyxDQUFDLENBQUM7WUFDNUIsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO1lBRWQsSUFBSSxJQUFJLENBQUMsV0FBVyxDQUFDLFVBQVU7Z0JBQUUsT0FBTyxDQUFDLEdBQUcsQ0FBQywrQkFBK0IsRUFBRSxRQUFRLENBQUMsZUFBZSxDQUFDLEdBQUcsSUFBSSxLQUFLLENBQUMsQ0FBQztRQUN2SCxDQUFDLEVBQ0QsR0FBRyxDQUFDLEVBQUU7WUFDRixJQUFJLElBQUksQ0FBQyxXQUFXLENBQUMsVUFBVTtnQkFBRSxPQUFPLENBQUMsR0FBRyxDQUFDLG1CQUFtQixFQUFFLEdBQUcsQ0FBQyxDQUFBO1lBQ3hFLGlDQUFpQztZQUNqQyxpQ0FBaUM7UUFDbkMsQ0FBQyxDQUFDLENBQUE7SUFDSixDQUFDO0lBQ00sWUFBWSxDQUFDLFFBQVk7UUFDOUIsUUFBUSxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQTtRQUN0QyxJQUFJLElBQUksR0FBRyxPQUFPLEdBQUcsUUFBUSxDQUFDLFdBQVcsRUFBRSxHQUFHLE9BQU8sQ0FBQTtRQUNyRCxJQUFJLElBQUksQ0FBQyxXQUFXLENBQUMsVUFBVTtZQUFFLE9BQU8sQ0FBQyxHQUFHLENBQUMsb0JBQW9CLEVBQUMsSUFBSSxDQUFDLENBQUE7UUFDdkUsSUFBSSxJQUFJLEdBQUcsV0FBVyxHQUFHLElBQUksQ0FBQztRQUM5QixJQUFJLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUM3QixJQUFJLEdBQUcsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBRXZCLElBQUksSUFBSSxDQUFDLFdBQVcsQ0FBQyxVQUFVO1lBQUUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxvQkFBb0IsRUFBQyxJQUFJLENBQUMsQ0FBQTtRQUNyRSxJQUFJLENBQUMsV0FBVyxHQUFHLGNBQWMsRUFBRSxDQUFDO1FBQ3BDLElBQUksSUFBSSxDQUFDLFdBQVcsQ0FBQyxVQUFVO1lBQUUsT0FBTyxDQUFDLEdBQUcsQ0FBQywwQkFBMEIsRUFBQyxJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ2pHLElBQUksV0FBVyxHQUFHO1lBQ2hCLE1BQU0sRUFBRSxVQUFVO1lBQ2xCLEtBQUssRUFBRSxRQUFRLENBQUMsV0FBVyxFQUFFO1NBQzlCLENBQUM7UUFDRixjQUFjLENBQUMsV0FBVyxDQUFDLENBQUM7UUFFOUIsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUFHLElBQUksQ0FBQyxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsRUFBRTtZQUM3RCxJQUFJLElBQUksQ0FBQyxXQUFXLENBQUMsVUFBVTtnQkFBRSxPQUFPLENBQUMsR0FBRyxDQUFDLHNCQUFzQixFQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQzVFLElBQUksSUFBSSxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUM7WUFDdkIsSUFBSSxJQUFJLENBQUMsV0FBVyxDQUFDLFVBQVU7Z0JBQUUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxvQkFBb0IsRUFBQyxJQUFJLENBQUMsQ0FBQTtZQUN2RSxJQUFJLFdBQVcsR0FBRztnQkFDaEIsTUFBTSxFQUFFLFFBQVE7Z0JBQ2hCLEtBQUssRUFBRSxJQUFJO2FBQ1osQ0FBQztZQUNGLGNBQWMsQ0FBQyxXQUFXLENBQUMsQ0FBQztZQUM1QixJQUFJLENBQUMsV0FBVyxHQUFHLGNBQWMsRUFBRSxDQUFDO1lBQ3BDLElBQUksSUFBSSxDQUFDLFdBQVcsQ0FBQyxVQUFVO2dCQUFFLE9BQU8sQ0FBQyxHQUFHLENBQUMsMEJBQTBCLEVBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUNqRyxXQUFXLEdBQUc7Z0JBQ1osTUFBTSxFQUFFLFVBQVU7Z0JBQ2xCLEtBQUssRUFBRSxRQUFRLENBQUMsV0FBVyxFQUFFO2FBQzlCLENBQUM7WUFDRixjQUFjLENBQUMsV0FBVyxDQUFDLENBQUM7WUFDNUIsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO1lBRWQsSUFBSSxJQUFJLENBQUMsV0FBVyxDQUFDLFVBQVU7Z0JBQUUsT0FBTyxDQUFDLEdBQUcsQ0FBQywrQkFBK0IsRUFBRSxRQUFRLENBQUMsZUFBZSxDQUFDLEdBQUcsSUFBSSxLQUFLLENBQUcsQ0FBQztRQUN6SCxDQUFDLEVBQ0QsR0FBRyxDQUFDLEVBQUU7WUFDSixJQUFJLElBQUksQ0FBQyxXQUFXLENBQUMsVUFBVTtnQkFBRSxPQUFPLENBQUMsR0FBRyxDQUFDLG1CQUFtQixFQUFDLEdBQUcsQ0FBQyxDQUFBO1lBQ3JFLGlDQUFpQztZQUNqQyxpQ0FBaUM7UUFDbkMsQ0FBQyxDQUFDLENBQUE7SUFDSixDQUFDO0lBQ00sTUFBTSxDQUFDLE1BQVUsRUFBRSxFQUFNLEVBQUUsSUFBUTtRQUN4QyxpSEFBaUg7UUFDakgsSUFBSSxPQUFPLElBQUksQ0FBQyxXQUFXLEtBQUssV0FBVyxFQUFFLENBQUM7WUFDNUMsSUFBSSxPQUFPLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxLQUFLLFdBQVcsRUFBRSxDQUFDO2dCQUNuRCxzQ0FBc0M7Z0JBQ3RDLElBQUksS0FBSyxHQUFHLEVBQUUsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7Z0JBQzFCLElBQUksS0FBSyxDQUFDLE1BQU0sSUFBSSxDQUFDLEVBQUUsQ0FBQztvQkFDdEIsSUFBSSxPQUFPLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFFLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLFdBQVcsRUFBQyxDQUFDO3dCQUM3RCxJQUFJLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssV0FBVyxFQUFFLENBQUM7NEJBQ3ZFLElBQUksT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxXQUFXLEVBQUMsQ0FBQztnQ0FDaEYsSUFBSSxJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxFQUFFLEVBQUMsQ0FBQztvQ0FDL0QsSUFBSSxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFBO2dDQUM5RCxDQUFDOzRCQUNILENBQUM7d0JBQ0gsQ0FBQztvQkFDSCxDQUFDO3lCQUNHLENBQUM7d0JBQ0gsbUhBQW1IO3dCQUNuSCwwRkFBMEY7b0JBQzVGLENBQUM7b0JBQ0QsNkZBQTZGO2dCQUMvRixDQUFDO3FCQUNJLENBQUM7b0JBQ0osSUFBSSxTQUFTLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLENBQUM7b0JBQzVDLElBQUksT0FBTyxTQUFTLEtBQUssV0FBVyxFQUFFLENBQUM7d0JBQ3JDLElBQUksR0FBRyxTQUFTLENBQUM7b0JBQ25CLENBQUM7Z0JBQ0gsQ0FBQztZQUNILENBQUM7UUFDSCxDQUFDO1FBQ0QsSUFBSSxNQUFNLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRSxDQUFDO1lBQ3RCLElBQUksUUFBUSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDaEMsSUFBSSxHQUFHLEVBQUUsQ0FBQztZQUVWLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxRQUFRLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUM7Z0JBQ3pDLElBQUksT0FBTyxNQUFNLENBQUMsQ0FBQyxDQUFDLElBQUksV0FBVztvQkFDakMsSUFBSSxHQUFHLElBQUksR0FBRyxRQUFRLENBQUMsQ0FBQyxDQUFDLEdBQUcsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDOztvQkFFdEMsSUFBSSxHQUFHLElBQUksR0FBRyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDOUIsQ0FBQztRQUNILENBQUM7UUFHRCxPQUFPLElBQUksQ0FBQztJQUNkLENBQUM7SUFDTSxjQUFjLENBQUMsVUFBYztRQUNsQyxJQUFJLFVBQVUsSUFBSSxFQUFFO1lBQ2xCLFVBQVUsR0FBRyxpQkFBaUIsQ0FBQztRQUNuQyxJQUFJLElBQUksR0FBRyxXQUFXLEdBQUcsVUFBVSxDQUFDO1FBQ2xDLElBQUksR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzdCLElBQUksR0FBRyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDdkIsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQyxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsRUFBRTtZQUM1RCxJQUFJLElBQUksQ0FBQyxXQUFXLENBQUMsVUFBVTtnQkFBRSxPQUFPLENBQUMsR0FBRyxDQUFDLHdCQUF3QixFQUFFLE1BQU0sQ0FBQyxDQUFDO1lBQy9FLElBQUksSUFBSSxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUM7WUFDdkIsSUFBSSxJQUFJLENBQUMsV0FBVyxDQUFDLFVBQVU7Z0JBQUUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxzQkFBc0IsRUFBRSxJQUFJLENBQUMsQ0FBQztZQUMzRSxJQUFJLGVBQWUsR0FBTyxFQUFFLENBQUM7WUFDN0IsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxPQUFPLENBQUMsVUFBVSxHQUFPO2dCQUN6QyxJQUFJLEtBQUssR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7Z0JBQ3RCLElBQUksR0FBRyxHQUFHO29CQUNSLElBQUksRUFBRSxHQUFHO29CQUNULGFBQWEsRUFBRSxHQUFHO29CQUNsQixTQUFTLEVBQUUsS0FBSztpQkFDakIsQ0FBQTtnQkFDRCxlQUFlLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBRTlCLENBQUMsQ0FBQyxDQUFDO1lBQ0QsSUFBSSxJQUFJLENBQUMsV0FBVyxDQUFDLFVBQVU7Z0JBQUUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxzQkFBc0IsRUFBRSxJQUFJLENBQUMsQ0FBQztZQUMzRSxJQUFJLElBQUksQ0FBQyxXQUFXLENBQUMsVUFBVTtnQkFBRSxPQUFPLENBQUMsR0FBRyxDQUFDLGlDQUFpQyxFQUFFLGVBQWUsQ0FBQyxDQUFBO1lBQ2hHLElBQUksV0FBVyxHQUFHO2dCQUNoQixNQUFNLEVBQUUsWUFBWTtnQkFDcEIsS0FBSyxFQUFFLElBQUk7YUFDWixDQUFDO1lBQ0YsY0FBYyxDQUFDLFdBQVcsQ0FBQyxDQUFDO1lBQzVCLFdBQVcsR0FBRztnQkFDWixNQUFNLEVBQUUsaUJBQWlCO2dCQUN6QixLQUFLLEVBQUUsZUFBZTthQUN2QixDQUFDO1lBQ0YsY0FBYyxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBRTlCLENBQUMsRUFDRCxHQUFHLENBQUMsRUFBRTtZQUNGLElBQUksSUFBSSxDQUFDLFdBQVcsQ0FBQyxVQUFVO2dCQUFFLE9BQU8sQ0FBQyxHQUFHLENBQUMsbUJBQW1CLEVBQUUsR0FBRyxDQUFDLENBQUE7UUFJMUUsQ0FBQyxDQUFDLENBQUE7SUFDSixDQUFDO0lBQ0QsK0JBQStCO0lBRS9CLDZDQUE2QztJQUM3QywrRUFBK0U7SUFDL0UsNENBQTRDO0lBQzVDLG9DQUFvQztJQUNwQyxxREFBcUQ7SUFDckQsK0JBQStCO0lBQy9CLG9CQUFvQjtJQUNwQixxQkFBcUI7SUFDckIsOEJBQThCO0lBQzlCLDJCQUEyQjtJQUMzQixVQUFVO0lBQ1YsbUNBQW1DO0lBRW5DLFVBQVU7SUFDVixrRkFBa0Y7SUFDbEYsdUdBQXVHO0lBQ3ZHLDBCQUEwQjtJQUMxQiw4QkFBOEI7SUFDOUIsb0JBQW9CO0lBQ3BCLFNBQVM7SUFDVCxtQ0FBbUM7SUFDbkMsc0JBQXNCO0lBQ3RCLG1DQUFtQztJQUNuQywrQkFBK0I7SUFDL0IsU0FBUztJQUNULG1DQUFtQztJQUVuQyxPQUFPO0lBQ1AsZUFBZTtJQUNmLCtFQUErRTtJQUkvRSxTQUFTO0lBQ1QsSUFBSTtJQUdHLG9CQUFvQixDQUFDLE1BQVUsRUFBRSxJQUFRO1FBQzlDLElBQUksTUFBTSxDQUFDLFdBQVcsQ0FBQyxVQUFVO1lBQUUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxtQkFBbUIsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDbEYsOEJBQThCO1FBQzlCLE1BQU0sQ0FBQyxLQUFLLEdBQUc7WUFDYjtnQkFDQyxJQUFJLEVBQUUsUUFBUTtnQkFDZCxLQUFLLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUk7YUFDcEI7U0FBQyxDQUFDO1FBQ0gsTUFBTSxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLENBQUM7UUFDMUMsSUFBSSxNQUFNLENBQUMsV0FBVyxDQUFDLFVBQVU7WUFBRSxPQUFPLENBQUMsR0FBRyxDQUFDLGVBQWUsRUFBRSxNQUFNLENBQUMsS0FBSyxFQUFFLHNCQUFzQixFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUE7UUFDMUgsSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sSUFBSSxDQUFDLEVBQUUsQ0FBQztZQUM3QixNQUFNLENBQUMsbUJBQW1CLEdBQUcsS0FBSyxDQUFDO1FBQ3JDLENBQUM7SUFDSCxDQUFDO0lBRU0sU0FBUyxDQUFDLE1BQVUsRUFBRSxpQkFBcUI7UUFDaEQsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLElBQUksRUFBRSxDQUFDLElBQUksQ0FBQyxPQUFPLElBQUksQ0FBQyxPQUFPLEtBQUssV0FBVyxDQUFDO1lBQy9ELE9BQU87UUFHVCxJQUFJLElBQUksR0FBRyxFQUFFLENBQUM7UUFDZCxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxJQUFJLEVBQUUsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsRUFBRTtZQUVsRCxpQkFBaUIsQ0FBQyxNQUFNLEVBQUUsTUFBTSxDQUFDLElBQUksRUFBRSxLQUFLLENBQUMsQ0FBQztZQUdoRCxNQUFNLENBQUMsSUFBSSxHQUFHLEVBQUUsQ0FBQztRQUNuQixDQUFDLEVBQ0QsR0FBRyxDQUFDLEVBQUU7WUFDRixnQ0FBZ0M7UUFDcEMsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBQ00sY0FBYyxDQUFDLE1BQVU7UUFHOUIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxVQUFVLEVBQUUsQ0FBQztZQUN2QixNQUFNLENBQUMsSUFBSSxHQUFHLEVBQUUsQ0FBQztZQUNqQixJQUFJLE1BQU0sR0FBTztnQkFDZixJQUFJLEVBQUUsTUFBTTtnQkFDWixPQUFPLEVBQUcsTUFBTSxDQUFDLFdBQVcsQ0FBQyxlQUFlLENBQUMsV0FBVyxFQUFFO2dCQUMxRCxhQUFhLEVBQUcsTUFBTSxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUMsV0FBVyxFQUFFO2FBQzFELENBQUM7WUFFQSxNQUFNLENBQUMsUUFBUSxDQUFDLEdBQUcscUJBQXFCLENBQUM7WUFFekMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUMzQixJQUFJLElBQUksQ0FBQyxXQUFXLENBQUMsVUFBVTtnQkFBRSxPQUFPLENBQUMsR0FBRyxDQUFDLHVCQUF1QixFQUFFLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQTtZQUdsRixJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsb0JBQW9CLENBQUMsQ0FBQztRQUNwRCxDQUFDO0lBQ0gsQ0FBQztJQUNNLFdBQVcsQ0FBQyxNQUFVLEVBQUUsSUFBOEI7UUFDM0QsMkVBQTJFO1FBRXpFLElBQUksTUFBTSxDQUFDLFVBQVUsSUFBSSxJQUFJLEVBQUUsQ0FBQztZQUM5QixNQUFNLFlBQVksR0FBc0IsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsT0FBTyxLQUFLLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQzVGLElBQUksSUFBSSxDQUFDLFdBQVcsQ0FBQyxVQUFVO2dCQUFFLE9BQU8sQ0FBQyxHQUFHLENBQUMsb0JBQW9CLEdBQUcsWUFBWSxDQUFDLEVBQUUsQ0FBQyxDQUFBO1lBQ3BGLElBQUksSUFBSSxDQUFDLFdBQVcsQ0FBQyxVQUFVO2dCQUFFLE9BQU8sQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLENBQUE7WUFDMUQsSUFBSSxZQUFZLENBQUMsS0FBSyxJQUFJLGlCQUFpQixFQUFFLENBQUM7Z0JBQzVDLE1BQU0sQ0FBQyxZQUFZLEdBQUcsS0FBSyxDQUFDO1lBQzlCLENBQUM7WUFDRCxPQUFPLENBQUMsR0FBRyxDQUFDLHlCQUF5QixFQUFFLE1BQU0sQ0FBQyxlQUFlLEVBQUUsTUFBTSxDQUFDLFlBQVksQ0FBQyxDQUFBO1lBQ25GLG9DQUFvQztZQUNwQyxnREFBZ0Q7WUFDaEQsNkJBQTZCO1lBQzdCLE9BQU8sSUFBSSxDQUFDLENBQUUsOENBQThDO1FBRTlELENBQUM7UUFDRCxNQUFNLFlBQVksR0FBc0IsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsT0FBTyxLQUFLLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQzVGLElBQUksSUFBSSxDQUFDLFdBQVcsQ0FBQyxVQUFVO1lBQUUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxvQkFBb0IsRUFBRyxZQUFZLEVBQUUsWUFBWSxDQUFDLEVBQUUsQ0FBQyxDQUFBO1FBQ2xHLElBQUksV0FBVyxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxZQUFZLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDcEUsSUFBSSxJQUFJLENBQUMsV0FBVyxDQUFDLFVBQVU7WUFBRSxPQUFPLENBQUMsR0FBRyxDQUFDLG9CQUFvQixFQUFHLFlBQVksQ0FBQyxFQUFFLEVBQUcsZUFBZSxFQUFHLFdBQVcsQ0FBQyxDQUFBO1FBRXBILElBQUksWUFBWSxDQUFDLEVBQUUsSUFBSSxTQUFTO1lBQzdCLE1BQU0sQ0FBQyxZQUFZLEdBQUcsS0FBSyxDQUFDO1FBRS9CLElBQUksT0FBTyxXQUFXLEtBQUssV0FBVyxFQUFFLENBQUM7WUFDdkMsSUFBSSxJQUFJLENBQUMsV0FBVyxDQUFDLFVBQVU7Z0JBQUUsT0FBTyxDQUFDLEdBQUcsQ0FBQywwQ0FBMEMsR0FBRyxXQUFXLENBQUMsU0FBUyxDQUFDLENBQUE7WUFDaEgsSUFBSSxXQUFXLENBQUMsU0FBUyxJQUFJLENBQUMsRUFBRSxDQUFDO2dCQUMvQixJQUFJLFdBQVcsR0FBRztvQkFDaEIsR0FBRyxFQUFFLElBQUksQ0FBQyxXQUFXO29CQUNyQixLQUFLLEVBQUUsU0FBUztvQkFDaEIsSUFBSSxFQUFFLElBQUk7b0JBQ1YsTUFBTSxFQUFFLElBQUk7b0JBQ1osTUFBTSxFQUFFLElBQUksQ0FBQyxTQUFTO29CQUN0QixRQUFRLEVBQUUsSUFBSTtpQkFDZixDQUFDO2dCQUNGLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxXQUFXLENBQUMsQ0FBQztnQkFDbkMsT0FBTyxLQUFLLENBQUM7WUFDZixDQUFDO2lCQUNJLENBQUM7Z0JBQ0osTUFBTSxDQUFDLFVBQVUsR0FBRyxZQUFZLENBQUMsRUFBRSxDQUFDO2dCQUNwQyxJQUFJLENBQUMsYUFBYSxDQUFDLGFBQWEsQ0FBQyxHQUFHLEVBQUUsQ0FBQztnQkFDdkMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxZQUFZLENBQUMsR0FBRyxFQUFFLENBQUM7Z0JBRXRDLElBQUksTUFBTSxDQUFDLFVBQVUsSUFBSSxTQUFTLEVBQUUsQ0FBQztvQkFDbkMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxhQUFhLENBQUMsR0FBRyxTQUFTLENBQUM7b0JBQzlDLElBQUksQ0FBQyxhQUFhLENBQUMsWUFBWSxDQUFDLEdBQUcsU0FBUyxDQUFDO29CQUM3QyxNQUFNLENBQUMsWUFBWSxHQUFHLEtBQUssQ0FBQztnQkFDOUIsQ0FBQztnQkFDRCxJQUFJLE1BQU0sQ0FBQyxVQUFVLElBQUksUUFBUSxFQUFFLENBQUM7b0JBQ2xDLElBQUksQ0FBQyxhQUFhLENBQUMsYUFBYSxDQUFDLEdBQUcsU0FBUyxDQUFDO29CQUM5QyxJQUFJLENBQUMsYUFBYSxDQUFDLFlBQVksQ0FBQyxHQUFHLGVBQWUsQ0FBQztvQkFDbkQsTUFBTSxDQUFDLFlBQVksR0FBRyxLQUFLLENBQUM7Z0JBQzlCLENBQUM7Z0JBQ0QsSUFBSSxNQUFNLENBQUMsVUFBVSxJQUFJLFFBQVEsRUFBRSxDQUFDO29CQUNsQyxJQUFJLENBQUMsYUFBYSxDQUFDLGFBQWEsQ0FBQyxHQUFHLFdBQVcsQ0FBQztvQkFDaEQsSUFBSSxDQUFDLGFBQWEsQ0FBQyxZQUFZLENBQUMsR0FBRyxnQkFBZ0IsQ0FBQztvQkFDcEQsTUFBTSxDQUFDLFlBQVksR0FBRyxLQUFLLENBQUM7Z0JBQzlCLENBQUM7Z0JBQ0QsSUFBSSxNQUFNLENBQUMsVUFBVSxJQUFJLFFBQVEsRUFBRSxDQUFDO29CQUNsQyxJQUFJLENBQUMsYUFBYSxDQUFDLGFBQWEsQ0FBQyxHQUFHLFNBQVMsQ0FBQztvQkFDOUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxZQUFZLENBQUMsR0FBRyxlQUFlLENBQUM7b0JBQ25ELE1BQU0sQ0FBQyxZQUFZLEdBQUcsS0FBSyxDQUFDO2dCQUM5QixDQUFDO2dCQUNELElBQUksTUFBTSxDQUFDLFVBQVUsSUFBSSxRQUFRLEVBQUUsQ0FBQztvQkFDbEMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxhQUFhLENBQUMsR0FBRyxXQUFXLENBQUM7b0JBQ2hELElBQUksQ0FBQyxhQUFhLENBQUMsWUFBWSxDQUFDLEdBQUcsZ0JBQWdCLENBQUM7b0JBQ3BELE1BQU0sQ0FBQyxZQUFZLEdBQUcsS0FBSyxDQUFDO2dCQUM5QixDQUFDO2dCQUNELElBQUksTUFBTSxDQUFDLFVBQVUsSUFBSSxTQUFTLEVBQUUsQ0FBQztvQkFDbkMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxhQUFhLENBQUMsR0FBRyxTQUFTLENBQUM7b0JBQzlDLElBQUksQ0FBQyxhQUFhLENBQUMsWUFBWSxDQUFDLEdBQUcsYUFBYSxDQUFDO29CQUNqRCxNQUFNLENBQUMsWUFBWSxHQUFHLEtBQUssQ0FBQztnQkFDOUIsQ0FBQztnQkFFRCxJQUFJLE1BQU0sQ0FBQyxVQUFVLENBQUMsVUFBVSxDQUFDLFNBQVMsQ0FBQyxFQUFDLFlBQVk7aUJBQ3hELENBQUM7b0JBQ0MsSUFBSSxDQUFDLGFBQWEsQ0FBQyxhQUFhLENBQUMsR0FBRyxZQUFZLENBQUMsRUFBRSxDQUFDO29CQUNwRCxZQUFZLENBQUMsRUFBRSxHQUFHLFdBQVcsQ0FBQztnQkFDaEMsQ0FBQztnQkFDRCwrQ0FBK0M7Z0JBQ2pELElBQUksSUFBSSxDQUFDLFdBQVcsQ0FBQyxVQUFVO29CQUFFLE9BQU8sQ0FBQyxHQUFHLENBQUMseUJBQXlCLENBQUMsQ0FBQztnQkFDdEUsSUFBSSxNQUFNLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxHQUFHLFlBQVksQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDO29CQUN4RSxJQUFJLElBQUksQ0FBQyxXQUFXLENBQUMsVUFBVTt3QkFBRSxPQUFPLENBQUMsR0FBRyxDQUFDLHlCQUF5QixDQUFDLENBQUM7b0JBQ3hFLE1BQU0sQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLEVBQUUsRUFBRSxFQUFFLGtCQUFrQixFQUFFLElBQUksRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRTt3QkFDdEUsSUFBSSxJQUFJLENBQUMsV0FBVyxDQUFDLFVBQVU7NEJBQUUsT0FBTyxDQUFDLEdBQUcsQ0FBQyx5QkFBeUIsQ0FBQyxDQUFDO3dCQUN0RSxNQUFNLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEdBQUcsR0FBRyxZQUFZLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxrQkFBa0IsRUFBRSxJQUFJLEVBQUUsVUFBVSxFQUFFLElBQUksRUFBRSxnQkFBZ0IsRUFBRSxLQUFLLEVBQUUsQ0FBQyxDQUFBO3dCQUMxSCxJQUFJLElBQUksQ0FBQyxXQUFXLENBQUMsVUFBVTs0QkFBRSxPQUFPLENBQUMsR0FBRyxDQUFDLHlCQUF5QixDQUFDLENBQUM7b0JBQzFFLENBQUMsQ0FDRSxDQUFDO2dCQUNKLENBQUM7cUJBRUMsQ0FBQztvQkFDSCxNQUFNLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEdBQUcsR0FBRyxZQUFZLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxrQkFBa0IsRUFBRSxJQUFJLEVBQUUsVUFBVSxFQUFFLElBQUksRUFBRSxnQkFBZ0IsRUFBRSxLQUFLLEVBQUUsQ0FBQyxDQUFDO29CQUN6SCxJQUFJLElBQUksQ0FBQyxXQUFXLENBQUMsVUFBVTt3QkFBRSxPQUFPLENBQUMsR0FBRyxDQUFDLG1CQUFtQixFQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsQ0FBQztnQkFDcEYsQ0FBQztnQkFFQyxJQUFJLE1BQU0sQ0FBQyxlQUFlLEVBQUMsQ0FBQztvQkFDMUIsTUFBTSxDQUFDLFlBQVksR0FBRyxLQUFLLENBQUM7Z0JBQzlCLENBQUM7Z0JBRUQsNkJBQTZCO2dCQUU3Qiw0QkFBNEI7WUFDOUIsQ0FBQztRQUNILENBQUM7UUFFRCxPQUFPLEtBQUssQ0FBQztJQUNmLENBQUM7SUFDSSxXQUFXLENBQUMsTUFBVTtRQUUzQixJQUFJLENBQUMsTUFBTSxDQUFDLFVBQVUsRUFBRSxDQUFDO1lBQ3ZCLE1BQU0sQ0FBQyxJQUFJLEdBQUcsRUFBRSxDQUFDO1lBQ2pCLElBQUksTUFBTSxHQUFPO2dCQUNqQixJQUFJLEVBQUcsTUFBTSxDQUFDLFdBQVcsQ0FBQyxXQUFXLEVBQUU7Z0JBQ3ZDLFFBQVEsRUFBRyxNQUFNLENBQUMsWUFBWSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsV0FBVyxFQUFFO2dCQUNuRSxhQUFhLEVBQUcsTUFBTSxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUMsV0FBVyxFQUFFO2dCQUN6RCxNQUFNLEVBQUcsR0FBRzthQUNiLENBQUM7WUFFQSxNQUFNLENBQUMsUUFBUSxDQUFDLEdBQUcsbUJBQW1CLENBQUM7WUFFdkMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUV6QixJQUFJLE9BQU8sR0FBTztnQkFDaEIsSUFBSSxFQUFFLEVBQUU7Z0JBQ1IsUUFBUSxFQUFFLE1BQU0sQ0FBQyxZQUFZLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxXQUFXLEVBQUU7YUFDckUsQ0FBQztZQUVBLE9BQU8sQ0FBQyxRQUFRLENBQUMsR0FBRyx3QkFBd0IsQ0FBQztZQUU3QyxNQUFNLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBRTVCLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDO1FBQ3JELENBQUM7SUFDSCxDQUFDO0lBSVEscUJBQXFCLENBQUMsTUFBVSxFQUFFLElBQVEsRUFBRSxTQUFhO1FBQzlELFNBQVMsYUFBYSxDQUFDLFlBQWdCLEVBQUUsUUFBWTtZQUNuRCxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDVixJQUFJLFdBQVcsQ0FBQztZQUNoQixPQUFPLENBQUMsR0FBRyxRQUFRLENBQUMsTUFBTSxFQUFFLENBQUM7Z0JBQzNCLElBQUksUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLFlBQVksSUFBSSxZQUFZLEVBQUUsQ0FBQztvQkFDN0MsV0FBVyxHQUFHLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQztvQkFDMUIsTUFBTTtnQkFDUixDQUFDO2dCQUNELENBQUMsRUFBRSxDQUFDO1lBQ04sQ0FBQztZQUNELE9BQU8sV0FBVyxDQUFDO1FBQ3JCLENBQUM7UUFDRCxTQUFTLFVBQVUsQ0FBQyxHQUFPLEVBQUUsUUFBWSxFQUFFLFNBQWE7WUFDdEQsSUFBSSxJQUFJLEdBQU8sRUFBRSxDQUFDO1lBQ2xCLElBQUksS0FBSyxHQUFPLEVBQUUsQ0FBQztZQUNyQixLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsR0FBRyxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDO2dCQUNwQyxJQUFJLE1BQU0sQ0FBQyxXQUFXLENBQUMsVUFBVTtvQkFBRSxPQUFPLENBQUMsR0FBRyxDQUFDLFNBQVMsRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDbEUsSUFBSSxJQUFJLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQ3hDLElBQUksSUFBSSxJQUFJLEdBQUcsRUFBRSxDQUFDO29CQUNoQixJQUFJLEtBQUssQ0FBQyxNQUFNLElBQUksQ0FBQyxFQUFFLENBQUM7d0JBQ3RCLElBQUksSUFBSSxHQUFHOzRCQUNULElBQUksRUFBRSxRQUFRLENBQUMsSUFBSTs0QkFDbkIsTUFBTSxFQUFFLFFBQVEsQ0FBQyxNQUFNOzRCQUN2QixLQUFLLEVBQUUsS0FBSzt5QkFDYixDQUFDO3dCQUNGLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7d0JBQ2hCLEtBQUssR0FBRyxFQUFFLENBQUM7b0JBQ2IsQ0FBQztvQkFDRCxJQUFJLFFBQVEsR0FBTzt3QkFDakIsSUFBSSxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJO3dCQUNqQixNQUFNLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU07cUJBQ3RCLENBQUM7b0JBQ0Ysa0JBQWtCO2dCQUNwQixDQUFDO3FCQUNJLElBQUksSUFBSSxJQUFJLEdBQUcsRUFBRSxDQUFDO29CQUNyQixJQUFJLE1BQU0sQ0FBQyxXQUFXLENBQUMsVUFBVTt3QkFBRSxPQUFPLENBQUMsR0FBRyxDQUFDLFdBQVcsRUFBRSxRQUFRLEVBQUUsU0FBUyxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO29CQUN6RixJQUFJLFdBQVcsR0FBRyxhQUFhLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sRUFBRSxRQUFRLENBQUMsQ0FBQztvQkFDekQsSUFBSSxPQUFPLFdBQVcsS0FBSyxXQUFXLEVBQUUsQ0FBQzt3QkFDdkMsSUFBSSxNQUFNLENBQUMsV0FBVyxDQUFDLFVBQVU7NEJBQUUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxnQkFBZ0IsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxHQUFHLDBCQUEwQixHQUFHLFdBQVcsQ0FBQyxTQUFTLEdBQUcsMEJBQTBCLEdBQUcsV0FBVyxDQUFDLFNBQVMsQ0FBQyxDQUFBO3dCQUMxTCxJQUFJLFdBQVcsQ0FBQyxTQUFTLElBQUksR0FBRyxFQUFFLG9DQUFvQzt5QkFDdEUsQ0FBQzs0QkFDQyxJQUFJLFdBQVcsR0FBRztnQ0FDaEIsSUFBSSxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJO2dDQUNqQixNQUFNLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU07Z0NBQ3JCLFNBQVMsRUFBRSxXQUFXLENBQUMsU0FBUztnQ0FDaEMsV0FBVyxFQUFFLFdBQVcsQ0FBQyxZQUFZO2dDQUNyQyxVQUFVLEVBQUUsV0FBVyxDQUFDLFFBQVE7Z0NBQ2hDLFVBQVUsRUFBRSxHQUFHLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU07NkJBQ2hDLENBQUM7NEJBQ0YsS0FBSyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQzt3QkFDMUIsQ0FBQztvQkFDSCxDQUFDO29CQUNELElBQUksTUFBTSxDQUFDLFdBQVcsQ0FBQyxVQUFVO3dCQUFFLE9BQU8sQ0FBQyxHQUFHLENBQUMsV0FBVyxFQUFFLEtBQUssQ0FBQyxDQUFDO2dCQUVyRSxDQUFDO1lBQ0gsQ0FBQztZQUNELElBQUksS0FBSyxDQUFDLE1BQU0sSUFBSSxDQUFDLEVBQUUsQ0FBQztnQkFDdEIsSUFBSSxJQUFJLEdBQUc7b0JBQ1QsSUFBSSxFQUFFLFFBQVEsQ0FBQyxJQUFJO29CQUNuQixNQUFNLEVBQUUsUUFBUSxDQUFDLE1BQU07b0JBQ3ZCLEtBQUssRUFBRSxLQUFLO2lCQUNiLENBQUM7Z0JBQ0YsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztnQkFDaEIsS0FBSyxHQUFHLEVBQUUsQ0FBQztZQUNiLENBQUM7aUJBQ0ksSUFBSSxTQUFTLElBQUksQ0FBQyxPQUFPLFFBQVEsS0FBSyxXQUFXLENBQUMsRUFBQyxDQUFDO2dCQUN2RCxJQUFJLElBQUksR0FBRztvQkFDVCxJQUFJLEVBQUUsUUFBUSxDQUFDLElBQUk7b0JBQ25CLE1BQU0sRUFBRSxRQUFRLENBQUMsTUFBTTtvQkFDdkIsS0FBSyxFQUFFLEVBQUU7aUJBQ1YsQ0FBQztnQkFDRixJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBRWxCLENBQUM7WUFFQyxPQUFPLElBQUksQ0FBQztRQUNsQixDQUFDO1FBQ0MsTUFBTSxDQUFDLElBQUksR0FBRyxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxFQUFFLFNBQVMsQ0FBQyxDQUFDO1FBRWhFLE1BQU0sQ0FBQyxVQUFVLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQztRQUNsQyxNQUFNLENBQUMsY0FBYyxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUM7UUFDbEMsSUFBSSxXQUFXLEdBQUc7WUFDaEIsTUFBTSxFQUFFLE1BQU07WUFDZCxLQUFLLEVBQUUsTUFBTSxDQUFDLElBQUk7U0FDbkIsQ0FBQztRQUNGLGNBQWMsQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUc5QixDQUFDO0lBRU8sS0FBSyxDQUFDLEVBQU07UUFDbEIsT0FBTyxJQUFJLE9BQU8sQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDLFVBQVUsQ0FBQyxPQUFPLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUN6RCxDQUFDO0lBT1EsVUFBVTtRQUNmLElBQUksQ0FBQyxVQUFVLEdBQUcsRUFBRSxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO0lBRXRCLENBQUM7SUFDUSxRQUFRLENBQUMsTUFBVSxFQUFFLE1BQVU7UUFDdEMsSUFBSSxJQUFJLEdBQUcsV0FBVyxDQUFDO1FBQ3JCLElBQUksU0FBYSxDQUFDO1FBQ2xCLElBQUksTUFBTSxJQUFJLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxJQUFJLENBQUMsRUFBRSxDQUFDO1lBQzVDLE9BQU8sSUFBSSxPQUFPLENBQUMsT0FBTyxDQUFDLEVBQUU7Z0JBQzNCLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxFQUFFO29CQUN0RCxJQUFJLENBQUMsVUFBVSxHQUFHLEVBQUUsQ0FBQztvQkFDdkIsSUFBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7b0JBRXJCLFNBQVMsR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQztvQkFDaEMsT0FBTyxPQUFPLENBQUMsU0FBUyxDQUFDLENBQUM7Z0JBQzVCLENBQUMsRUFDQyxHQUFHLENBQUMsRUFBRTtvQkFDSixNQUFNLENBQUMsb0JBQW9CLEdBQUcsSUFBSSxDQUFDO29CQUNqQyxJQUFJLENBQUMsVUFBVSxHQUFHLEVBQUUsQ0FBQztvQkFDdkIsSUFBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7b0JBQ3JCLGdDQUFnQztvQkFDaEMsSUFBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLEVBQUUsR0FBRyxDQUFDLENBQUM7b0JBQy9CLE9BQU8sT0FBTyxDQUFDLFNBQVMsQ0FBQyxDQUFDO2dCQUM1QixDQUFDLENBQUMsQ0FBQztZQUNQLENBQUMsQ0FBQyxDQUFDO1FBQ0wsQ0FBQzthQUNNLENBQUM7WUFDSixJQUFJLENBQUMsVUFBVSxHQUFHLEVBQUUsQ0FBQztZQUN2QixJQUFJLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQztZQUNuQixPQUFPLElBQUksQ0FBQztRQUNoQixDQUFDO0lBR0gsQ0FBQztJQUNELDZCQUE2QjtJQUM3Qiw0QkFBNEI7SUFDNUIsSUFBSTtJQUNLLFdBQVcsQ0FBQyxNQUFVLEVBQUUsSUFBUSxFQUFDLEtBQVM7UUFDakQsU0FBUyxZQUFZLENBQUMsR0FBTztZQUMzQixJQUFJLE9BQU8sR0FBRyxHQUFHLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQzdCLE9BQU8sT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3BCLENBQUM7UUFFRCxNQUFNLENBQUMsb0JBQW9CLEdBQUcsS0FBSyxDQUFDO1FBQ3BDLElBQUksSUFBSSxHQUFHLFdBQVcsQ0FBQztRQUN2QixJQUFJLEtBQUssSUFBSSxFQUFFO1lBQ2IsSUFBSSxHQUFHLElBQUksR0FBRyxTQUFTLEdBQUcsS0FBSyxDQUFDO1FBQ2xDLElBQUksU0FBYSxDQUFDO1FBRWxCLE1BQU0sQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDO1FBQ3hCLElBQUksSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO1lBQ2pCLElBQUksU0FBUyxHQUFHLFlBQVksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsV0FBVyxFQUFFLENBQUM7WUFFM0QsSUFBSSxlQUFlLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLENBQUM7WUFDOUQsSUFBSSxlQUFlLEVBQUUsQ0FBQztnQkFDcEIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQzlCLE9BQU8sU0FBUyxDQUFDO1lBQ25CLENBQUM7UUFDSCxDQUFDO1FBRUQsT0FBTyxJQUFJLE9BQU8sQ0FBQyxPQUFPLENBQUMsRUFBRTtZQUMzQixrREFBa0Q7WUFDbEQsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsRUFBRTtnQkFDN0Msa0RBQWtEO2dCQUNsRCxTQUFTLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQztnQkFDeEIsK0JBQStCO2dCQUMvQiw0QkFBNEI7Z0JBQzVCLE9BQU8sT0FBTyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1lBQzVCLENBQUMsRUFDQyxHQUFHLENBQUMsRUFBRTtnQkFDSixNQUFNLENBQUMsb0JBQW9CLEdBQUcsSUFBSSxDQUFDO2dCQUNuQyxLQUFLLENBQUMsUUFBUSxHQUFHLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQztnQkFDOUIsT0FBTyxPQUFPLENBQUMsU0FBUyxDQUFDLENBQUM7WUFDNUIsQ0FBQyxDQUFDLENBQUM7UUFDUCxDQUFDLENBQUMsQ0FBQztJQUdMLENBQUM7SUFDUSxPQUFPLENBQUMsTUFBVSxFQUFFLE9BQVc7UUFDcEMsU0FBUyxZQUFZLENBQUMsR0FBTztZQUMzQixJQUFJLFVBQVUsR0FBRyxHQUFHLENBQUMsSUFBSSxFQUFFLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQzNDLE9BQU8sVUFBVSxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLFVBQVUsQ0FBQyxDQUFDO1FBQzdELENBQUM7UUFFRCxNQUFNLENBQUMsb0JBQW9CLEdBQUcsS0FBSyxDQUFDO1FBQ3BDLElBQUksSUFBSSxHQUFHLFdBQVcsQ0FBQztRQUN2QixJQUFJLENBQUMsSUFBSSxHQUFHLEVBQUUsQ0FBQztRQUNiLElBQUksTUFBTSxHQUFPLEVBQUUsQ0FBQztRQUN0QixNQUFNLENBQUMsUUFBUSxDQUFDLEdBQUcsU0FBUyxDQUFDO1FBQzdCLE1BQU0sQ0FBQyxPQUFPLENBQUMsR0FBRyxPQUFPLENBQUM7UUFDeEIsSUFBSSxTQUFhLENBQUM7UUFFcEIsTUFBTSxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUM7UUFDeEIsSUFBSSxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7WUFDakIsSUFBSSxTQUFTLEdBQUcsWUFBWSxDQUFDLE9BQU8sQ0FBQyxDQUFDLFdBQVcsRUFBRSxDQUFDO1lBRXBELElBQUksZUFBZSxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1lBQzlELElBQUksZUFBZSxFQUFFLENBQUM7Z0JBQ3BCLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO2dCQUM3QixPQUFPLFNBQVMsQ0FBQztZQUNuQixDQUFDO1FBQ0gsQ0FBQztRQUNELElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBRTlDLE9BQU8sSUFBSSxPQUFPLENBQUMsT0FBTyxDQUFDLEVBQUU7WUFDM0IsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLEVBQUU7Z0JBQ2xELElBQUksQ0FBQyxJQUFJLEdBQUcsRUFBRSxDQUFDO2dCQUNmLFNBQVMsR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQztnQkFDaEMsSUFBSSxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsSUFBSSxDQUFDO29CQUM5QixNQUFNLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztnQkFDekIsT0FBTyxPQUFPLENBQUMsU0FBUyxDQUFDLENBQUM7WUFDNUIsQ0FBQyxFQUNDLEdBQUcsQ0FBQyxFQUFFO2dCQUNKLE1BQU0sQ0FBQyxvQkFBb0IsR0FBRyxJQUFJLENBQUM7Z0JBQ25DLEtBQUssQ0FBQyxRQUFRLEdBQUcsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDO2dCQUM5QixPQUFPLE9BQU8sQ0FBQyxTQUFTLENBQUMsQ0FBQztZQUM1QixDQUFDLENBQUMsQ0FBQztRQUNQLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUdELFFBQVE7SUFFRCxtQkFBbUIsQ0FBQyxVQUFVLEVBQUMsTUFBTTtRQUMxQyxJQUFJLFFBQVEsR0FBTyxFQUFFLENBQUM7UUFDdEIsSUFBSSxVQUFVLElBQUksSUFBSTtZQUNwQixPQUFPLFFBQVEsQ0FBQztRQUNsQixVQUFVLEdBQUcsVUFBVSxDQUFDLElBQUksRUFBRSxDQUFDO1FBQy9CLElBQUksQ0FBQztZQUNILFVBQVUsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQ3RDLENBQUM7UUFBQyxPQUFPLENBQUMsRUFBRSxDQUFDO1lBQ1QsNkNBQTZDO1lBQzdDLE9BQU8sUUFBUSxDQUFDO1FBQ3BCLENBQUM7UUFDQywyRUFBMkU7UUFDM0Usb0RBQW9EO1FBQ3BELElBQUksT0FBTyxVQUFVLElBQUksUUFBUTtZQUMvQixRQUFRLEdBQUcsTUFBTSxDQUFDLFNBQVMsR0FBRyxTQUFTLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzlELGdEQUFnRDtRQUNsRCxPQUFPLFFBQVEsQ0FBQztJQUNsQixDQUFDO0lBQ00sY0FBYyxDQUFDLElBQVEsRUFBQyxNQUFVO1FBQ3ZDLElBQUksSUFBSSxHQUFHLEVBQUUsQ0FBQztRQUNmLHFDQUFxQztRQUNsQyxJQUFJLElBQUksR0FDTixDQUFDLEVBQUMsSUFBSSxFQUFDLEVBQUU7Z0JBQ1QsSUFBSSxFQUFDLEVBQUUsRUFBQztTQUNQLENBQUM7UUFDTixJQUFJLENBQUM7WUFDSCxJQUFJLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUMxQixDQUFDO1FBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQztZQUNULE9BQU8sQ0FBQyxHQUFHLENBQUUsbUJBQW1CLEVBQUMsSUFBSSxDQUFDLENBQUM7WUFDdkMsT0FBTyxJQUFJLENBQUM7UUFDaEIsQ0FBQztRQUNELHlEQUF5RDtRQUN2RCwwQkFBMEI7UUFDMUIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxjQUFjLEVBQUUsSUFBSSxFQUFFLE9BQU8sSUFBSSxDQUFDLENBQUM7UUFDL0MsSUFBSSxPQUFPLElBQUksSUFBSSxRQUFRLEVBQUMsQ0FBQztZQUMzQixJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxFQUFFO2dCQUNqQixPQUFPLENBQUMsR0FBRyxDQUFDLE1BQU0sRUFBRSxHQUFHLENBQUMsQ0FBQTtnQkFDeEIsSUFBSSxHQUFHLElBQUksR0FBRyxHQUFHLEdBQUcsR0FBRyxDQUFDLElBQUksR0FBRyxRQUFRLEdBQUcsR0FBRyxDQUFDLElBQUksR0FBRyxHQUFHLENBQUM7WUFDM0QsQ0FBQyxDQUFDLENBQUE7UUFDSixDQUFDO1FBQ0gsR0FBRztRQUNILE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxDQUFBO1FBQzFCLE9BQU8sSUFBSSxDQUFDO0lBQ2QsQ0FBQztJQUNNLG9CQUFvQixDQUFDLFNBQWEsRUFBQyxNQUFVO1FBQ2xELDJGQUEyRjtRQUMzRixLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsTUFBTSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQztZQUMvQyxJQUFJLFNBQVMsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxFQUFFLElBQUksRUFBRSxFQUFFLENBQUM7Z0JBQzlDLElBQUksQ0FBQztvQkFDSCxNQUFNLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDL0UsQ0FBQztnQkFBQyxPQUFPLENBQUMsRUFBRSxDQUFDO29CQUNULDZDQUE2QztvQkFDN0MsT0FBUTtnQkFDWixDQUFDO1lBQ0gsQ0FBQztRQUNILENBQUM7UUFDRCxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsTUFBTSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQztZQUMvQyxJQUFJLFNBQVMsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksSUFBSSxFQUFDLENBQUM7Z0JBQ3hDLElBQUksU0FBUyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLEVBQUUsSUFBSSxFQUFFO29CQUFFLE1BQU0sQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQzlILENBQUM7UUFDSCxDQUFDO1FBQ0QsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxPQUFPLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUM7WUFDL0Msc0RBQXNEO1lBQ3RELElBQUksU0FBUyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxFQUFFLEVBQUUsQ0FBQztnQkFDdkMsSUFBSSxNQUFNLEdBQU0sRUFBRSxDQUFDO2dCQUNuQixJQUFJLFVBQVUsR0FBRyxTQUFTLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUU5QyxJQUFJLENBQUM7b0JBQ0gsVUFBVSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLENBQUM7Z0JBQ3RDLENBQUM7Z0JBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQztvQkFDVCxPQUFPLENBQUMsR0FBRyxDQUFFLG1CQUFtQixFQUFDLFVBQVUsQ0FBQyxDQUFDO29CQUM3QyxVQUFVLEdBQUcsSUFBSSxDQUFDO29CQUNsQixjQUFjO2dCQUNsQixDQUFDO2dCQUNELHNDQUFzQztnQkFDdEMsSUFBSSxVQUFVLElBQUksSUFBSSxFQUFDLENBQUM7b0JBQ3RCLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxVQUFVLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUM7d0JBQzNDLElBQUksSUFBSSxHQUNOLEVBQUUsS0FBSyxFQUFFLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLEVBQUUsR0FBRyxFQUFFLE1BQU0sQ0FBQyxTQUFTLEdBQUcsU0FBUyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFBO3dCQUN0RixNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO29CQUNwQixDQUFDO2dCQUNILENBQUM7Z0JBQ0QsTUFBTSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsTUFBTSxDQUFDO1lBQ2pELENBQUM7WUFDRCxpREFBaUQ7UUFDbkQsQ0FBQztRQUNBLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxNQUFNLENBQUMsT0FBTyxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBQyxDQUFDO1lBRTdDLElBQUksTUFBTSxHQUFHLFNBQVMsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDMUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxhQUFhLEVBQUUsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsRUFBRSxNQUFNLENBQUMsQ0FBQTtZQUNyRCxNQUFNLEdBQUcsSUFBSSxDQUFDLHdCQUF3QixDQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQTtZQUM3RSxPQUFPLENBQUMsR0FBRyxDQUFDLGlCQUFpQixFQUFHLE1BQU0sQ0FBQyxDQUFBO1lBQ3ZDLFNBQVMsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxHQUFHLE1BQU0sQ0FBQztRQUVqRCxDQUFDO0lBQ0wsQ0FBQztJQUNNLFlBQVksQ0FBQyxHQUFHO1FBQ3JCLE9BQU8sTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFBO0lBQ25CLENBQUM7SUFFSyx3QkFBd0IsQ0FBQyxZQUFnQixFQUFDLE1BQVU7UUFDekQsOEZBQThGO1FBQzlGLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxZQUFZLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUM7WUFDL0MsSUFBSSxTQUFTLEdBQUcsWUFBWSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ2hDLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxNQUFNLENBQUMsT0FBTyxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDO2dCQUMvQyxvSEFBb0g7Z0JBQ3BILDhHQUE4RztnQkFDOUcsSUFBSSxTQUFTLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksRUFBRSxJQUFJLEVBQUU7b0JBQUUsTUFBTSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDOUgsQ0FBQztZQUNELEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxNQUFNLENBQUMsT0FBTyxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDO2dCQUMvQyxJQUFJLFNBQVMsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksRUFBRTtvQkFBRSxNQUFNLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUN2SCxDQUFDO1lBQ0QsMEZBQTBGO1lBQzFGLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxNQUFNLENBQUMsT0FBTyxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDO2dCQUMvQyx5R0FBeUc7Z0JBQ3pHLDRGQUE0RjtnQkFDNUYsSUFBSSxNQUFNLEdBQUcsU0FBUyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDMUMsTUFBTSxHQUFHLE1BQU0sQ0FBQyxJQUFJLEVBQUUsQ0FBQztnQkFDdkIsSUFBTSxNQUFNLElBQUksRUFBRSxFQUFFLENBQUM7b0JBQ25CLElBQUksTUFBTSxHQUFNLEVBQUUsQ0FBQztvQkFDbkIsSUFBSSxVQUFVLEdBQUcsU0FBUyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztvQkFDOUMsVUFBVSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLENBQUM7b0JBQ3BDLElBQUksVUFBVSxJQUFJLElBQUksRUFBQyxDQUFDO3dCQUN0QixLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsVUFBVSxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDOzRCQUMzQyxJQUFJLElBQUksR0FDTixFQUFFLEtBQUssRUFBRSxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxFQUFFLEdBQUcsRUFBRSxNQUFNLENBQUMsU0FBUyxHQUFHLFNBQVMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQTs0QkFDdEYsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQzt3QkFDcEIsQ0FBQztvQkFDSCxDQUFDO29CQUNELGtGQUFrRjtvQkFDbEYsSUFBSSxXQUFXLEdBQUUsRUFBRSxDQUFDO29CQUNwQixXQUFXLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLE1BQU0sQ0FBQztvQkFDeEMsTUFBTSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsR0FBRyxXQUFXLENBQUM7Z0JBQ3RDLENBQUM7cUJBQ0csQ0FBQztvQkFDSCxJQUFJLFdBQVcsR0FBRSxFQUFFLENBQUM7b0JBQ3BCLFdBQVcsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDO29CQUNwQyxNQUFNLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxHQUFHLFdBQVcsQ0FBQztnQkFDdEMsQ0FBQztZQUNILENBQUM7WUFDQyxzRUFBc0U7UUFFeEUsQ0FBQztJQUVILENBQUM7SUFDTSwrQkFBK0IsQ0FBQyxRQUFZLEVBQUMsTUFBVTtRQUM1RCw0QkFBNEI7UUFDNUIsOEZBQThGO1FBQzlGLElBQUksT0FBTyxHQUFHLEVBQUUsQ0FBQztRQUNqQixJQUFJLE9BQU8sTUFBTSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsSUFBSSxXQUFXLEVBQUUsQ0FBQztZQUNuRCxPQUFPLEdBQUcsTUFBTSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUNyQyxDQUFDO1FBQ0QsSUFBSSxZQUFZLEdBQUcsRUFBRSxDQUFDO1FBQ3RCLElBQUksT0FBTyxNQUFNLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxJQUFJLFdBQVcsRUFBRSxDQUFDO1lBQ3hELFlBQVksR0FBRyxNQUFNLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQy9DLENBQUM7UUFDRCxJQUFJLFVBQVUsR0FBRyxLQUFLLENBQUM7UUFDdkIsSUFBSSxPQUFPLE1BQU0sQ0FBQyxhQUFhLElBQUksV0FBVyxFQUFFLENBQUM7WUFDL0MsVUFBVSxHQUFHLE1BQU0sQ0FBQyxhQUFhLENBQUM7UUFDcEMsQ0FBQztRQUNELElBQUksT0FBTyxHQUFHLFFBQVEsQ0FBQztRQUN2QixJQUFJLFlBQVksR0FBRztZQUNqQixRQUFRLEVBQUUsUUFBUTtZQUNsQixTQUFTLEVBQUUsT0FBTztZQUNsQixTQUFTLEVBQUUsT0FBTztZQUNsQixjQUFjLEVBQUUsWUFBWTtZQUM1QixZQUFZLEVBQUcsVUFBVTtTQUMxQixDQUFBO1FBR0QsTUFBTSxDQUFDLGdCQUFnQixHQUFHLElBQUksa0JBQWtCLEVBQUUsQ0FBQTtRQUNsRCxNQUFNLENBQUMsZ0JBQWdCLENBQUMsWUFBWSxHQUFHLFlBQVksQ0FBQTtRQUNuRCw0RkFBNEY7SUFDOUYsQ0FBQztJQUVNLDRCQUE0QixDQUFDLFFBQVksRUFBQyxNQUFVO1FBQ3pELDRCQUE0QjtRQUM1QixPQUFPLENBQUMsR0FBRyxDQUFDLDJCQUEyQixFQUFFLFFBQVEsRUFBRSxNQUFNLENBQUMsT0FBTyxFQUFFLE1BQU0sQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQTtRQUM1RixJQUFJLE9BQU8sR0FBRyxFQUFFLENBQUM7UUFDakIsSUFBSSxPQUFPLE1BQU0sQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLElBQUksV0FBVyxFQUFFLENBQUM7WUFDbkQsT0FBTyxHQUFHLE1BQU0sQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDckMsQ0FBQztRQUNELElBQUksWUFBWSxHQUFHLEVBQUUsQ0FBQztRQUN0QixJQUFJLE9BQU8sTUFBTSxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsSUFBSSxXQUFXLEVBQUUsQ0FBQztZQUN4RCxZQUFZLEdBQUcsTUFBTSxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUMvQyxDQUFDO1FBQ0QsSUFBSSxVQUFVLEdBQUcsS0FBSyxDQUFDO1FBQ3ZCLElBQUksT0FBTyxNQUFNLENBQUMsYUFBYSxJQUFJLFdBQVcsRUFBRSxDQUFDO1lBQy9DLFVBQVUsR0FBRyxNQUFNLENBQUMsYUFBYSxDQUFDO1FBQ3BDLENBQUM7UUFDRCxJQUFJLE9BQU8sR0FBRyxRQUFRLENBQUM7UUFDdkIsSUFBSSxZQUFZLEdBQUc7WUFDakIsUUFBUSxFQUFFLFFBQVE7WUFDbEIsU0FBUyxFQUFFLE9BQU87WUFDbEIsU0FBUyxFQUFFLE9BQU87WUFDbEIsY0FBYyxFQUFFLFlBQVk7WUFDNUIsWUFBWSxFQUFHLFVBQVU7U0FDMUIsQ0FBQTtRQUdELE1BQU0sQ0FBQyxnQkFBZ0IsR0FBRyxJQUFJLGtCQUFrQixFQUFFLENBQUE7UUFDbEQsTUFBTSxDQUFDLGdCQUFnQixDQUFDLFlBQVksR0FBRyxZQUFZLENBQUE7UUFDbkQsT0FBTyxDQUFDLEdBQUcsQ0FBQyx1Q0FBdUMsRUFBRSxNQUFNLENBQUMsZ0JBQWdCLENBQUMsWUFBWSxDQUFDLENBQUE7SUFDNUYsQ0FBQztJQUNNLHFCQUFxQixDQUFDLE1BQVUsRUFBQyxJQUFRLEVBQUMsTUFBVTtRQUN6RCw0REFBNEQ7UUFDNUQsSUFBSSxPQUFPLEdBQUcsS0FBSyxDQUFDO1FBQ3BCLElBQUksT0FBTyxNQUFNLENBQUMsT0FBTyxJQUFJLFdBQVcsRUFBQyxDQUFDO1lBQ3hDLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxNQUFNLENBQUMsT0FBTyxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDO2dCQUMvQyxJQUFJLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxXQUFXLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLEVBQUUsSUFBSSxFQUFFO29CQUN4RixPQUFPLEdBQUcsSUFBSSxDQUFDO1lBQ25CLENBQUM7UUFDSCxDQUFDO1FBQ0QsSUFBSSxPQUFPLE1BQU0sQ0FBQyxPQUFPLElBQUksV0FBVyxFQUFDLENBQUM7WUFDeEMsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxPQUFPLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUM7Z0JBQy9DLElBQUksT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLFdBQVcsSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksRUFBRSxJQUFJLEVBQUU7b0JBQ3hGLE9BQU8sR0FBRyxJQUFJLENBQUM7WUFDbkIsQ0FBQztRQUNILENBQUM7UUFDRCxJQUFJLFlBQVksR0FBRztZQUNqQixRQUFRLEVBQUUsTUFBTTtZQUNoQixTQUFTLEVBQUUsTUFBTSxDQUFDLE9BQU87WUFDekIsU0FBUyxFQUFFLE1BQU0sQ0FBQyxPQUFPO1lBQ3pCLFNBQVMsRUFBRSxNQUFNLENBQUMsT0FBTztZQUN6QixjQUFjLEVBQUUsTUFBTSxDQUFDLFlBQVk7WUFDbkMsTUFBTSxFQUFFLElBQUk7U0FDYixDQUFBO1FBQ0QsSUFBSSxNQUFNLElBQUksTUFBTTtZQUNsQixPQUFPLEdBQUcsSUFBSSxDQUFDO1FBQ2pCLElBQUksT0FBTyxFQUFDLENBQUM7WUFDWCxPQUFPLENBQUMsR0FBRyxDQUFDLHFDQUFxQyxFQUFFLFlBQVksQ0FBQyxDQUFBO1lBQ2hFLE1BQU0sQ0FBQyxnQkFBZ0IsR0FBRyxJQUFJLGtCQUFrQixFQUFFLENBQUE7WUFDbEQsTUFBTSxDQUFDLGdCQUFnQixDQUFDLFlBQVksR0FBRyxZQUFZLENBQUE7UUFDckQsQ0FBQztJQUVILENBQUM7SUFDTSxpQkFBaUIsQ0FBQyxNQUFVLEVBQUMsSUFBUSxFQUFDLE1BQVU7UUFDckQsNERBQTREO1FBQzVELElBQUksWUFBWSxHQUFHO1lBQ2pCLFFBQVEsRUFBRSxNQUFNO1lBQ2hCLFNBQVMsRUFBRSxNQUFNLENBQUMsT0FBTztZQUN6QixTQUFTLEVBQUUsTUFBTSxDQUFDLE9BQU87WUFDekIsU0FBUyxFQUFFLE1BQU0sQ0FBQyxPQUFPO1lBQ3pCLGNBQWMsRUFBRSxNQUFNLENBQUMsWUFBWTtZQUNuQyxNQUFNLEVBQUUsSUFBSTtTQUNiLENBQUE7UUFFRCxNQUFNLENBQUMsZ0JBQWdCLEdBQUcsSUFBSSxrQkFBa0IsRUFBRSxDQUFBO1FBQ2xELE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxZQUFZLEdBQUcsWUFBWSxDQUFBO0lBRXJELENBQUM7SUFDRCxLQUFLLENBQUMsZ0NBQWdDLENBQUMsS0FBUyxFQUFDLE1BQVU7UUFDekQsK0RBQStEO1FBQy9ELElBQUksUUFBUSxHQUFHLEtBQUssQ0FBQyxRQUFRLENBQUM7UUFDOUIsTUFBTSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsR0FBRyxLQUFLLENBQUMsT0FBTyxDQUFDO1FBQ3pDLE1BQU0sQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLEdBQUcsS0FBSyxDQUFDLFlBQVksQ0FBQztRQUNuRCxNQUFNLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQyxRQUFRLENBQUM7UUFDakMsb0VBQW9FO1FBQ3BFLElBQUksT0FBTyxHQUFJLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO1FBQ3hELElBQUksT0FBTyxJQUFJLElBQUk7WUFDakIsT0FBTyxHQUFHLEVBQUUsQ0FBQztRQUNmLE1BQU0sQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUMsUUFBUSxDQUFDLEdBQUcsT0FBTyxDQUFDO1FBQzlDLE1BQU0sQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLEVBQUUsQ0FBQyxRQUFRLENBQUMsRUFBRSxPQUFPLEVBQUUsQ0FBQyxDQUFDO1FBQ2hELElBQUksT0FBTyxNQUFNLENBQUMseUJBQXlCLElBQUksV0FBVyxFQUFFLENBQUM7WUFDM0QsSUFBSSxNQUFNLEdBQU8sRUFBRSxDQUFDO1lBQ3BCLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7WUFDdEIsTUFBTSxDQUFDLHlCQUF5QixDQUFDLEtBQUssQ0FBQyxNQUFNLEVBQUUsTUFBTSxDQUFDLENBQUM7UUFDekQsQ0FBQztJQUNILENBQUM7SUFDRCxLQUFLLENBQUMsaUNBQWlDLENBQUMsS0FBUyxFQUFDLE1BQVU7UUFDMUQsT0FBTyxDQUFDLEdBQUcsQ0FBQyx3Q0FBd0MsRUFBRSxLQUFLLENBQUMsQ0FBQztRQUM3RCxJQUFJLFFBQVEsR0FBRyxLQUFLLENBQUMsUUFBUSxDQUFDO1FBQzlCLE1BQU0sQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLEdBQUcsS0FBSyxDQUFDLE9BQU8sQ0FBQztRQUN6QyxNQUFNLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxHQUFHLEtBQUssQ0FBQyxZQUFZLENBQUM7UUFDbkQsT0FBTyxDQUFDLEdBQUcsQ0FBQywyQkFBMkIsRUFBRSxNQUFNLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUE7UUFDbEUsSUFBSSxPQUFPLEdBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7UUFDeEQsSUFBSSxPQUFPLElBQUksSUFBSTtZQUNqQixPQUFPLEdBQUcsRUFBRSxDQUFDO1FBQ2YsTUFBTSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLEdBQUcsT0FBTyxDQUFDO1FBQ3ZDLE1BQU0sQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLEVBQUUsQ0FBQyxRQUFRLENBQUMsRUFBRSxPQUFPLEVBQUUsQ0FBQyxDQUFDO1FBQ2pELElBQUksT0FBTyxNQUFNLENBQUMseUJBQXlCLElBQUksV0FBVyxFQUFFLENBQUM7WUFDM0QsSUFBSSxNQUFNLEdBQU8sRUFBRSxDQUFDO1lBQ3BCLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7WUFDdEIsTUFBTSxDQUFDLHlCQUF5QixDQUFDLEtBQUssQ0FBQyxNQUFNLEVBQUUsTUFBTSxDQUFDLENBQUM7UUFDekQsQ0FBQztJQUNILENBQUM7SUFDTSxnQ0FBZ0MsQ0FBQyxLQUFTLEVBQUMsTUFBVTtRQUUxRCwrREFBK0Q7UUFDL0QsSUFBSSxRQUFRLEdBQUcsS0FBSyxDQUFDLFFBQVEsQ0FBQztRQUM5QixNQUFNLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxHQUFHLEtBQUssQ0FBQyxPQUFPLENBQUM7UUFDekMsTUFBTSxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsR0FBRyxLQUFLLENBQUMsWUFBWSxDQUFDO1FBQ25ELGdHQUFnRztRQUNoRyxJQUFJLE9BQU8sR0FBSSxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztRQUN4RCxJQUFJLE9BQU8sSUFBSSxJQUFJO1lBQ2pCLE9BQU8sR0FBRyxFQUFFLENBQUM7UUFDZixNQUFNLENBQUMsU0FBUyxDQUFDLFVBQVUsQ0FBQyxFQUFFLENBQUMsUUFBUSxDQUFDLEVBQUUsT0FBTyxFQUFFLENBQUMsQ0FBQztRQUNyRCxNQUFNLENBQUMsU0FBUyxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQy9CLGlHQUFpRztRQUNqRyxNQUFNLENBQUMsV0FBVyxHQUFDLEtBQUssQ0FBQztJQUMzQixDQUFDO0lBQ00sS0FBSyxDQUFDLDRCQUE0QixDQUFDLFFBQVksRUFBQyxNQUFVO1FBQy9ELElBQUksQ0FBQyxNQUFNLENBQUMsZUFBZSxDQUFDLE9BQU87WUFBRSxPQUFPO1FBQzVDLE1BQU0sTUFBTSxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDckMsaUZBQWlGO1FBQ2pGLE1BQU0sQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDO1FBQzFCLElBQUksT0FBTyxNQUFNLENBQUMsU0FBUyxJQUFJLFdBQVcsRUFBRSxDQUFDO1lBQzNDLE1BQU0sQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLEdBQUUsRUFBRSxDQUFDO1lBQzdCLE1BQU0sQ0FBQyxZQUFZLENBQUMsb0JBQW9CLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxLQUFLLEVBQUMsTUFBTSxDQUFDLENBQUM7WUFDeEUsOEZBQThGO1lBQzlGLElBQUksT0FBTyxHQUFHLEVBQUUsQ0FBQztZQUNqQixJQUFJLE9BQU8sTUFBTSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsSUFBSSxXQUFXLEVBQUUsQ0FBQztnQkFDbkQsT0FBTyxHQUFHLE1BQU0sQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUM7WUFDckMsQ0FBQztZQUNELElBQUksWUFBWSxHQUFHLEVBQUUsQ0FBQztZQUN0QixJQUFJLE9BQU8sTUFBTSxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsSUFBSSxXQUFXLEVBQUUsQ0FBQztnQkFDeEQsWUFBWSxHQUFHLE1BQU0sQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLENBQUM7WUFDL0MsQ0FBQztZQUNILElBQUksVUFBVSxHQUFHLEtBQUssQ0FBQztZQUN2QixJQUFJLE9BQU8sTUFBTSxDQUFDLGFBQWEsSUFBSSxXQUFXLEVBQUUsQ0FBQztnQkFDL0MsVUFBVSxHQUFHLE1BQU0sQ0FBQyxhQUFhLENBQUM7WUFDcEMsQ0FBQztZQUNDLElBQUksT0FBTyxHQUFHLFFBQVEsQ0FBQztZQUN2QixJQUFJLFlBQVksR0FBRztnQkFDakIsUUFBUSxFQUFFLFFBQVE7Z0JBQ2xCLFNBQVMsRUFBRSxPQUFPO2dCQUNsQixTQUFTLEVBQUUsT0FBTztnQkFDbEIsY0FBYyxFQUFFLFlBQVk7Z0JBQzNCLFlBQVksRUFBRyxVQUFVO2FBQzNCLENBQUE7WUFFRCxNQUFNLENBQUMsZ0JBQWdCLEdBQUcsSUFBSSxrQkFBa0IsRUFBRSxDQUFBO1lBQ2xELE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxZQUFZLEdBQUcsWUFBWSxDQUFBO1FBQ3JELENBQUM7SUFDSCxDQUFDO0lBQ00sS0FBSyxDQUFDLCtCQUErQixDQUFDLFFBQVksRUFBQyxNQUFVO1FBQ2xFLElBQUksQ0FBQyxNQUFNLENBQUMsZUFBZSxDQUFDLE9BQU87WUFBRSxPQUFPO1FBQzVDLE1BQU0sTUFBTSxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDckMsb0ZBQW9GO1FBQ3BGLE1BQU0sQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDO1FBQzFCLElBQUksT0FBTyxNQUFNLENBQUMsU0FBUyxJQUFJLFdBQVcsRUFBRSxDQUFDO1lBQzNDLE1BQU0sQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLEdBQUUsRUFBRSxDQUFDO1lBQzdCLE1BQU0sQ0FBQyxZQUFZLENBQUMsb0JBQW9CLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxLQUFLLEVBQUMsTUFBTSxDQUFDLENBQUM7WUFDeEUsOEZBQThGO1lBQzlGLElBQUksT0FBTyxHQUFHLEVBQUUsQ0FBQztZQUNqQixJQUFJLE9BQU8sTUFBTSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsSUFBSSxXQUFXLEVBQUUsQ0FBQztnQkFDbkQsT0FBTyxHQUFHLE1BQU0sQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUM7WUFDckMsQ0FBQztZQUNELElBQUksWUFBWSxHQUFHLEVBQUUsQ0FBQztZQUN0QixJQUFJLE9BQU8sTUFBTSxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsSUFBSSxXQUFXLEVBQUUsQ0FBQztnQkFDeEQsWUFBWSxHQUFHLE1BQU0sQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLENBQUM7WUFDL0MsQ0FBQztZQUVELElBQUksT0FBTyxHQUFHLFFBQVEsQ0FBQztZQUN2QixJQUFJLFlBQVksR0FBRztnQkFDakIsUUFBUSxFQUFFLFFBQVE7Z0JBQ2xCLFNBQVMsRUFBRSxPQUFPO2dCQUNsQixTQUFTLEVBQUUsT0FBTztnQkFDbEIsY0FBYyxFQUFFLFlBQVk7YUFDN0IsQ0FBQTtZQUVELE1BQU0sQ0FBQyxnQkFBZ0IsR0FBRyxJQUFJLGtCQUFrQixFQUFFLENBQUE7WUFDbEQsTUFBTSxDQUFDLGdCQUFnQixDQUFDLFlBQVksR0FBRyxZQUFZLENBQUE7UUFDckQsQ0FBQztJQUNILENBQUM7SUFDTSxVQUFVLENBQUMsTUFBVSxFQUFFLFFBQVk7UUFDeEMsTUFBTSxDQUFDLG1CQUFtQixHQUFHLElBQUksU0FBUyxFQUFFLENBQUM7UUFDN0MsTUFBTSxDQUFDLG1CQUFtQixDQUFDLFVBQVUsQ0FBQyxHQUFHLFFBQVEsQ0FBQyxDQUFDLG9CQUFvQjtRQUd2RSxNQUFNLENBQUMsb0JBQW9CLEdBQUksSUFBSSxrQkFBa0IsRUFBRSxDQUFDO1FBQ3hELElBQUksWUFBWSxHQUFHO1lBQ2pCLE1BQU0sRUFBRSxLQUFLO1lBQ2IsUUFBUSxFQUFDLFFBQVE7WUFDakIsSUFBSSxFQUFDLE1BQU0sQ0FBQyxVQUFVO1lBQ3RCLGFBQWEsRUFBRyxNQUFNLENBQUMsVUFBVTtTQUNsQyxDQUFBO1FBQ0QsTUFBTSxDQUFDLG9CQUFvQixDQUFDLFlBQVksR0FBRyxZQUFZLENBQUMsQ0FBQyxxQkFBcUI7UUFDOUUsTUFBTSxDQUFDLGVBQWUsR0FBQyxJQUFJLENBQUM7SUFDOUIsQ0FBQztJQUVNLFVBQVUsQ0FBQyxNQUFNLEVBQUMsT0FBTyxFQUFFLFVBQVU7UUFDMUMsSUFBSSxFQUFFLEdBQUcsQ0FBQyxDQUFDO1FBQ1gsSUFBSSxLQUFLLEdBQUcsQ0FBQyxDQUFDO1FBRWQsSUFBSSxRQUFRLEdBQU8sTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUM7UUFDcEMsSUFBSSxPQUFPLFFBQVEsQ0FBQyxJQUFJLEtBQUssV0FBVyxFQUFDLENBQUM7WUFDeEMsS0FBSyxJQUFJLENBQUMsR0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLFFBQVEsQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFHLENBQUMsRUFBRSxFQUFDLENBQUM7Z0JBQzVDLElBQUksUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFO29CQUNqQyxFQUFFLEdBQUcsUUFBUSxDQUFFLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7Z0JBQ2hELElBQUksUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUMsSUFBSSxLQUFLO29CQUN2QyxLQUFLLEdBQUcsUUFBUSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDLENBQUUsR0FBRyxDQUFDLENBQUM7WUFDeEQsQ0FBQztRQUNILENBQUM7UUFDRCxJQUFJLE1BQU0sR0FBRztZQUNYLENBQUMsT0FBTyxDQUFDLEVBQUUsRUFBRTtZQUNiLENBQUMsVUFBVSxDQUFDLEVBQUUsS0FBSztTQUNwQixDQUFBO1FBQ0QsT0FBTyxDQUFDLEdBQUcsQ0FBQywwQkFBMEIsRUFBQyxNQUFNLENBQUUsQ0FBQTtRQUMvQyxNQUFNLENBQUMsU0FBUyxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsQ0FBQTtJQUNyQyxDQUFDO0lBQ00sVUFBVSxDQUFDLE1BQU0sRUFBRSxVQUFVLEVBQUUsQ0FBQztRQUNyQyxJQUFJLE1BQU0sQ0FBQyxXQUFXLENBQUMsVUFBVTtZQUFFLE9BQU8sQ0FBQyxHQUFHLENBQUUsYUFBYSxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQ2xFLElBQUksTUFBTSxDQUFDLFdBQVcsQ0FBQyxVQUFVO1lBQUUsT0FBTyxDQUFDLEdBQUcsQ0FBRSxhQUFhLEVBQUUsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQTtRQUN2RixJQUFJLE1BQU0sQ0FBQyxXQUFXLENBQUMsVUFBVTtZQUFFLE9BQU8sQ0FBQyxHQUFHLENBQUUsYUFBYSxFQUFFLENBQUMsQ0FBQyxZQUFZLENBQUMsQ0FBQztRQUNqRixJQUFJLE1BQU0sQ0FBQyxXQUFXLENBQUMsVUFBVTtZQUFFLE9BQU8sQ0FBQyxHQUFHLENBQUUsYUFBYSxFQUFFLENBQUMsQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLENBQUE7UUFDeEYsSUFBSSxRQUFRLEdBQUcsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUM7UUFDekMsSUFBSSxRQUFRLENBQUM7UUFDYixRQUFRLEdBQUksTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUM7UUFFN0IsSUFBSSxDQUFDLENBQUMsWUFBWSxJQUFJLE9BQU8sRUFBQyxDQUFDO1lBQzdCLFFBQVEsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxhQUFhLENBQUMsUUFBUSxHQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsUUFBUSxDQUFDLENBQUM7WUFDOUQsb0JBQW9CO1lBQ3BCLFFBQVEsQ0FBQyxJQUFJLEdBQUcsUUFBUSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsVUFBVSxRQUFRLEVBQUUsS0FBSztnQkFDNUQsT0FBTyxLQUFLLEtBQUssQ0FBQyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUM7WUFDN0MsQ0FBQyxDQUFDLENBQUM7UUFDTCxDQUFDO2FBRUQsSUFBSSxDQUFDLENBQUMsWUFBWSxJQUFJLFFBQVEsRUFBQyxDQUFDO1lBQzdCLG9CQUFvQjtZQUNyQixRQUFRLENBQUMsSUFBSSxHQUFHLFFBQVEsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLFVBQVUsUUFBUSxFQUFFLEtBQUs7Z0JBQzVELE9BQU8sS0FBSyxLQUFLLENBQUMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDO1lBQzdDLENBQUMsQ0FBQyxDQUFDO1lBQ0gsUUFBUSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxFQUFFLFFBQVEsQ0FBQyxDQUFDO1FBQzlELENBQUM7UUFDRixtQkFBbUI7UUFDbkIsSUFBSSxNQUFNLENBQUMsV0FBVyxDQUFDLFVBQVU7WUFBRSxPQUFPLENBQUMsR0FBRyxDQUFDLDJCQUEyQixFQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUMxRixLQUFLLElBQUksQ0FBQyxHQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsUUFBUSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUMsQ0FBQyxFQUFFLEVBQUMsQ0FBQztZQUMxQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxHQUFFLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDcEMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDLFNBQVMsQ0FBQztRQUM3QyxDQUFDO1FBQ0QsTUFBTSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDakMsQ0FBQztJQUVNLGdCQUFnQixDQUFDLE1BQVUsRUFBQyxJQUFRO1FBQ3pDLElBQUksTUFBTSxDQUFDLFlBQVksQ0FBQyxhQUFhLENBQUMsU0FBUyxDQUFDLFNBQVMsSUFBSSxRQUFRLEVBQUMsQ0FBQztZQUNyRSxNQUFNLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQztRQUMzQixDQUFDO0lBQ0YsQ0FBQztJQUNELHFCQUFxQixDQUFDLElBQUksRUFBQyxhQUFhO1FBQ3BDLE9BQU8sQ0FBQyxHQUFHLENBQUMsNEJBQTRCLEVBQUUsSUFBSSxFQUFFLGFBQWEsQ0FBQyxDQUFBO1FBQzlELElBQUksSUFBSSxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFFN0IsS0FBSyxJQUFJLENBQUMsR0FBRSxDQUFDLEVBQUUsQ0FBQyxHQUFFLElBQUksQ0FBQyxNQUFNLEVBQUMsQ0FBQyxFQUFFLEVBQUMsQ0FBQztZQUNqQyxJQUFJLEtBQUssR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDcEIsSUFBSSxNQUFNLEdBQUcsYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFBO1lBQ2pDLE9BQU8sQ0FBQyxHQUFHLENBQUMsNEJBQTRCLEVBQUUsS0FBSyxFQUFFLE1BQU0sQ0FBQyxDQUFBO1lBQ3hELElBQUksT0FBTyxNQUFNLElBQUksV0FBVyxFQUFDLENBQUM7Z0JBQ2hDLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQ3JCLENBQUM7UUFDSCxDQUFDO0lBQ0gsQ0FBQztJQUNJLGNBQWMsQ0FBQyxLQUFLLEVBQUUsVUFBVSxFQUFDLFVBQVU7UUFFakQsSUFBSSxDQUFDLEtBQUssSUFBSSxFQUFFLENBQUMsSUFBSSxDQUFDLE9BQU8sS0FBSyxJQUFJLFdBQVcsQ0FBQztZQUNoRCxPQUFPLENBQUMsVUFBVSxDQUFDLEtBQUssRUFBRSxVQUFVLEVBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQzs7WUFFbEQsT0FBTyxJQUFJLENBQUM7SUFDaEIsQ0FBQztJQUVBLFdBQVcsQ0FBQyxJQUFJO1FBRWhCLElBQUksQ0FBQztZQUNILE9BQU8sUUFBUSxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsRUFBRSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUN0RixDQUFDO1FBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQztZQUNYLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDakIsQ0FBQztJQUNGLENBQUM7SUFDTSxXQUFXLENBQUMsSUFBSTtRQUV0QixJQUFJLENBQUM7WUFDSCxNQUFNLEtBQUssR0FBRyxRQUFRLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLGdCQUFnQixDQUFDLENBQUM7WUFDaEUsSUFBSSxLQUFLLENBQUMsUUFBUSxFQUFFLEVBQUUsQ0FBQztnQkFDckIsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1lBQ3ZELENBQUM7WUFDRCxPQUFPLElBQUksQ0FBQztRQUNkLENBQUM7UUFBQyxPQUFPLENBQUMsRUFBRSxDQUFDO1lBQ1gsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNqQixDQUFDO0lBQ0YsQ0FBQztJQVFNLFNBQVMsQ0FBQyxNQUFNO1FBQ25CLElBQUksTUFBTSxHQUFHLEtBQUssQ0FBQztRQUNuQixJQUFJLE9BQU8sQ0FBQyxNQUFNLENBQUMsa0JBQWtCLENBQUMsSUFBSSxXQUFXLEVBQUUsQ0FBQztZQUN0RCxJQUFJLE1BQU0sQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLEVBQUUsQ0FBQztnQkFDbkMsTUFBTSxHQUFHLElBQUksQ0FBQztZQUNoQixDQUFDO1lBQ0QsT0FBTyxNQUFNLENBQUM7UUFFaEIsQ0FBQztJQUNILENBQUM7SUFDSSxrQkFBa0I7UUFFcEIsTUFBTSxVQUFVLEdBQUcsUUFBUSxDQUFDLG9CQUFvQixDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3hELGtEQUFrRDtRQUNsRCxLQUFLLElBQUksQ0FBQyxHQUFDLENBQUMsRUFBQyxDQUFDLEdBQUMsVUFBVSxDQUFDLE1BQU0sRUFBQyxDQUFDLEVBQUUsRUFBQyxDQUFDO1lBQ3BDLElBQUksU0FBUyxHQUFPLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUM7WUFDNUMsZ0RBQWdEO1lBQ2hELHlEQUF5RDtZQUN6RCxvREFBb0Q7WUFDcEQsSUFBSSxNQUFNLEdBQUcsU0FBUyxDQUFDLFFBQVEsQ0FBQywyQkFBMkIsQ0FBQyxDQUFDO1lBQzdELDZDQUE2QztZQUM3QyxJQUFJLE1BQU0sRUFBQyxDQUFDO2dCQUNWLE1BQU0sR0FBRyxTQUFTLENBQUMsUUFBUSxDQUFDLHFCQUFxQixDQUFDLENBQUM7Z0JBQ25ELElBQUksTUFBTSxFQUFDLENBQUM7b0JBQ1YsdURBQXVEO29CQUN2RCxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLFdBQVcsQ0FBQyxTQUFTLEVBQUUsTUFBTSxDQUFDLENBQUM7Z0JBQ25ELENBQUM7WUFFTCxDQUFDO1FBRUgsQ0FBQztRQUNELGdFQUFnRTtJQUNwRSxDQUFDO0lBRUEsS0FBSyxDQUFFLGlCQUFpQixDQUFDLE1BQU0sRUFBRSxZQUFZO1FBQzFDLElBQUksSUFBSSxHQUFHLEVBQUUsQ0FBQztRQUNkLElBQUksWUFBZ0IsQ0FBQztRQUNyQixJQUFJLE1BQU0sR0FBTyxFQUFFLFFBQVEsRUFBRSxrQkFBa0I7WUFDdkIsZUFBZSxFQUFFLFlBQVksRUFBRSxDQUFDO1FBQ3hELElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDbEIsTUFBTSxHQUFHLEVBQUUsUUFBUSxFQUFFLHlCQUF5QjtZQUN0QixlQUFlLEVBQUUsWUFBWTtZQUM5QixlQUFlLEVBQUUsR0FBRyxFQUFDLENBQUM7UUFDNUMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUNsQixJQUFJLElBQUksR0FBRyxNQUFNLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxFQUFFLElBQUksRUFBRSxFQUFFLENBQUMsQ0FBQztRQUNuRCxJQUFJLE9BQU8sSUFBSSxJQUFJLFdBQVcsSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUUsQ0FBQztZQUMxRCxJQUFJLENBQUMsSUFBSSxHQUFHLEVBQUUsQ0FBQztZQUNmLFlBQVksR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQy9CLElBQUksY0FBYyxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFHckMsNkZBQTZGO1lBQzdGLDJDQUEyQztZQUMzQyxHQUFHO1lBR0gsSUFBSSxXQUFXLEdBQUcsY0FBYyxDQUFDLGFBQWEsQ0FBQztZQUMvQyxNQUFNLENBQUMsZ0JBQWdCLEdBQUc7Z0JBQ3hCLFVBQVUsRUFBRSxZQUFZLENBQUMsU0FBUztnQkFDbEMsYUFBYSxFQUFFLFdBQVc7Z0JBQzFCLGlEQUFpRDtnQkFDakQsYUFBYSxFQUFFLElBQUk7Z0JBQ25CLGdDQUFnQztnQkFDaEMsU0FBUyxFQUFDLFlBQVk7Z0JBQ3RCLGFBQWEsRUFBRSxZQUFZO2FBQzVCLENBQUM7WUFFRixPQUFPLENBQUMsR0FBRyxDQUFDLGVBQWUsRUFBRSxZQUFZLEVBQUUsMkJBQTJCLEVBQUMsTUFBTSxDQUFDLGdCQUFnQixDQUFDLENBQUE7WUFFN0YsTUFBTSxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUM7UUFFakMsQ0FBQztRQUNGLE1BQU0sQ0FBQyxZQUFZLEdBQUcsWUFBWSxDQUFDO1FBQ25DLE9BQU8sWUFBWSxDQUFDO0lBQ3JCLENBQUM7SUFDRCxLQUFLLENBQUUsVUFBVSxDQUFDLE1BQU0sRUFBRSxZQUFZO1FBQ2pDLE9BQU8sQ0FBQyxHQUFHLENBQUMsNEJBQTRCLEVBQUUsWUFBWSxFQUFFLHdCQUF3QixFQUFDLE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFBO1FBQ3ZHLElBQUksSUFBSSxHQUFHLEVBQUUsQ0FBQztRQUNkLElBQUksTUFBTSxHQUFPLEVBQUUsUUFBUSxFQUFFLGlCQUFpQjtZQUMzQyxRQUFRLEVBQUUsYUFBYSxHQUFHLFlBQVksQ0FBQyxTQUFTLEdBQUcsR0FBRyxFQUFFLENBQUM7UUFDNUQsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUNsQixPQUFPLENBQUMsR0FBRyxDQUFDLG9CQUFvQixFQUFFLElBQUksQ0FBQyxDQUFBO1FBQ3ZDLElBQUksSUFBSSxHQUFHLE1BQU0sSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLEVBQUUsSUFBSSxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBQ2xELE9BQU8sQ0FBQyxHQUFHLENBQUMsb0JBQW9CLEVBQUUsSUFBSSxDQUFDLENBQUE7UUFDdkMsSUFBSSxPQUFPLElBQUksSUFBSSxXQUFXLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFLENBQUM7WUFDMUQsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUMzQixPQUFPLENBQUMsR0FBRyxDQUFDLG9CQUFvQixFQUFFLElBQUksQ0FBQyxDQUFBO1lBQ3ZDLElBQUksWUFBWSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUM7WUFDbEMsTUFBTSxDQUFDLFFBQVEsR0FBRyxFQUFFLENBQUM7WUFDckIsTUFBTSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7WUFDdkMsTUFBTSxDQUFDLG9CQUFvQixDQUFDLE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO1FBQ3ZELENBQUM7UUFDRCxNQUFNLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEdBQUcsR0FBRSxZQUFZLENBQUMsU0FBUyxDQUFDLEVBQ2xELEVBQUUsa0JBQWtCLEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQUUsZ0JBQWdCLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQztJQUMvRSxDQUFDO0lBQ1Msa0JBQWtCLENBQUMsTUFBTTtRQUNqQyxrRkFBa0Y7UUFDbEYsTUFBTSxPQUFPLEdBQUcsRUFBRSxDQUFDO1FBQ25CLE1BQU0sUUFBUSxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDO1FBQ3RDLEtBQUssSUFBSSxJQUFJLElBQUksUUFBUSxFQUFFLENBQUM7WUFDeEIsSUFBSSxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUMsT0FBTyxFQUFFLENBQUM7Z0JBQzFCLElBQUksT0FBTyxNQUFNLENBQUMsWUFBWSxJQUFJLFdBQVcsRUFBQyxDQUFDO29CQUM1QyxJQUFJLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxFQUFFLEVBQUMsTUFBTSxDQUFDLFlBQVksR0FBRyxHQUFHLEdBQUcsSUFBSSxFQUFDLElBQUksQ0FBQyxDQUFBO2dCQUMvRCxDQUFDO2dCQUNBLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDdkIsQ0FBQztRQUNMLENBQUM7UUFFQSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxPQUFPLENBQUMsUUFBUSxFQUFFLENBQUMsRUFDaEUsbUJBQW1CLEVBQUMsMEJBQTBCLENBQUMsQ0FBQyxDQUFDO1FBQ2pELElBQUksR0FBRyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxPQUFPLENBQUMsUUFBUSxFQUFFLENBQUMsRUFBRSxtQkFBbUIsRUFBQywwQkFBMEIsQ0FBQyxDQUFDO1FBRTVGLElBQUksV0FBVyxHQUFHO1lBQ2hCLEdBQUcsRUFBRSxHQUFHO1lBQ1IsS0FBSyxFQUFFLE9BQU87WUFDZCxJQUFJLEVBQUUsSUFBSTtZQUNWLE1BQU0sRUFBRSxJQUFJO1lBQ1osTUFBTSxFQUFFLElBQUksQ0FBQyxTQUFTO1lBQ3RCLFFBQVEsRUFBRSxJQUFJO1NBQ2YsQ0FBQztRQUNGLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUNuQyxPQUFPLE9BQU8sQ0FBQztJQUNuQixDQUFDO0lBQ0Qsd0JBQXdCLENBQ3RCLE1BQVcsRUFDWCxVQUFrQixFQUNsQixRQUFnQixFQUNoQixNQUFjO1FBRWQsSUFBSyxDQUFDLE9BQU8sUUFBUSxLQUFLLFdBQVcsQ0FBQyxJQUFJLFFBQVEsS0FBSyxJQUFJO1lBQUcsUUFBUSxHQUFHLE1BQU0sQ0FBQztRQUVoRixJQUFJLENBQUM7WUFDSCxnRUFBZ0U7WUFDaEUsSUFBSSxPQUFPLEdBQUcsVUFBVSxDQUFDLEtBQUssQ0FBQyx5QkFBeUIsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFFL0QsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO2dCQUNiLE1BQU0sTUFBTSxHQUFHLFVBQVUsQ0FBQyxLQUFLLENBQUMseUJBQXlCLENBQUMsQ0FBQztnQkFDM0QsTUFBTSxNQUFNLEdBQUcsVUFBVSxDQUFDLEtBQUssQ0FBQywwQkFBMEIsQ0FBQyxDQUFDO2dCQUM1RCxNQUFNLENBQUMsR0FBRyxNQUFNLENBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO2dCQUM5QyxNQUFNLENBQUMsR0FBRyxNQUFNLENBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO2dCQUM5QyxPQUFPLEdBQUcsT0FBTyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUM7WUFDNUIsQ0FBQztZQUVELHFEQUFxRDtZQUNyRCxNQUFNLFVBQVUsR0FBRyxVQUFVLENBQUMsS0FBSyxDQUFDLDhCQUE4QixDQUFDLENBQUM7WUFDcEUsSUFBSSxPQUFPLEdBQUcsVUFBVSxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQztZQUV0RCxpREFBaUQ7WUFDakQsT0FBTyxHQUFHLE9BQU87aUJBQ2QsT0FBTyxDQUFDLG9CQUFvQixFQUFFLEVBQUUsQ0FBQztpQkFDakMsT0FBTyxDQUFDLGtCQUFrQixFQUFFLEVBQUUsQ0FBQyxDQUFDO1lBRW5DLCtFQUErRTtZQUMvRSwwRUFBMEU7WUFDMUUsT0FBTyxHQUFHLE9BQU87aUJBQ2QsT0FBTyxDQUFDLE1BQU0sRUFBRSxHQUFHLENBQUMsQ0FBTSwyQ0FBMkM7aUJBQ3JFLE9BQU8sQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLENBQUcsMENBQTBDO2lCQUNwRSxJQUFJLEVBQUUsQ0FBQztZQUVWLHVDQUF1QztZQUN2QyxNQUFNLElBQUksR0FBRztnQkFDWCxJQUFJLEVBQUUsUUFBUTtnQkFDZCxPQUFPLEVBQUUsT0FBTztnQkFDaEIsT0FBTyxFQUFFLE9BQU87Z0JBQ2hCLFFBQVEsRUFBRTtvQkFDUixLQUFLLEVBQUUsRUFBRTtvQkFDVCxPQUFPLEVBQUUsRUFBRTtvQkFDWCxPQUFPLEVBQUUsRUFBRTtpQkFDWjthQUNGLENBQUM7WUFFRixtRUFBbUU7WUFDbkUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRO2dCQUFFLE1BQU0sQ0FBQyxRQUFRLEdBQUcsRUFBRSxDQUFDO1lBQzNDLE1BQU0sQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLEdBQUcsSUFBSSxDQUFDO1lBRy9CLE9BQU8sQ0FBQyxHQUFHLENBQUMsd0JBQXdCLEVBQUUsSUFBSSxDQUFDLENBQUM7WUFDNUMsT0FBTyxJQUFJLENBQUM7UUFDZCxDQUFDO1FBQUMsT0FBTyxLQUFLLEVBQUUsQ0FBQztZQUNmLElBQUksTUFBTSxDQUFDLFFBQVE7Z0JBQUUsTUFBTSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsR0FBRyxFQUFFLENBQUM7WUFDbEQsT0FBTyxDQUFDLEtBQUssQ0FBQyxnQ0FBZ0MsUUFBUSxFQUFFLEVBQUUsS0FBSyxDQUFDLENBQUM7WUFDakUsT0FBTyxJQUFJLENBQUM7UUFDZCxDQUFDO0lBQ0gsQ0FBQztJQUVELHFCQUFxQixDQUFDLE1BQU0sRUFBRSxVQUFrQixFQUFFLFFBQWdCLEVBQUUsTUFBTTtRQUN4RSxJQUFLLENBQUMsT0FBTyxRQUFRLEtBQUssV0FBVyxDQUFDLElBQUksUUFBUSxLQUFLLElBQUk7WUFBRyxRQUFRLEdBQUcsTUFBTSxDQUFDO1FBQ2hGLE9BQU8sQ0FBQyxHQUFHLENBQUMsbUNBQW1DLEVBQUUsVUFBVSxFQUFFLFdBQVcsRUFBRSxRQUFRLEVBQUUsU0FBUyxFQUFFLE1BQU0sQ0FBQyxDQUFDO1FBQ3JHLElBQUksQ0FBQztZQUNELGtCQUFrQjtZQUNsQixNQUFNLFlBQVksR0FBRyxVQUFVLENBQUMsS0FBSyxDQUFDLG1CQUFtQixDQUFDLENBQUM7WUFDM0QsTUFBTSxPQUFPLEdBQUcsWUFBWSxDQUFDLENBQUMsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFdBQVcsQ0FBQztZQUU3RCx1QkFBdUI7WUFDdkIsTUFBTSxhQUFhLEdBQUcsT0FBTyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDckQsTUFBTSxDQUFDLElBQUksRUFBRSxJQUFJLEVBQUUsWUFBWSxFQUFFLGFBQWEsQ0FBQyxHQUFHLGFBQWEsQ0FBQztZQUVoRSx3Q0FBd0M7WUFDeEMsTUFBTSxVQUFVLEdBQUcsVUFBVSxDQUFDLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO1lBQ3ZELE1BQU0sV0FBVyxHQUFHLFVBQVUsQ0FBQyxLQUFLLENBQUMsa0JBQWtCLENBQUMsQ0FBQztZQUN6RCxNQUFNLFFBQVEsR0FBRyxVQUFVLENBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsWUFBWSxDQUFDO1lBQ3ZFLE1BQU0sU0FBUyxHQUFHLFdBQVcsQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxhQUFhLENBQUM7WUFFM0UsNERBQTREO1lBQzVELE1BQU0sV0FBVyxHQUFHLEVBQUUsQ0FBQztZQUV2QiwyRUFBMkU7WUFDM0UsTUFBTSxNQUFNLEdBQUcsV0FBVyxHQUFHLFlBQVksQ0FBQztZQUMxQyxNQUFNLE1BQU0sR0FBRyxXQUFXLEdBQUcsYUFBYSxDQUFDO1lBQzNDLE1BQU0sS0FBSyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsTUFBTSxFQUFFLE1BQU0sQ0FBQyxDQUFDLENBQUMsc0NBQXNDO1lBRTlFLHNDQUFzQztZQUN0QyxNQUFNLFdBQVcsR0FBRyxZQUFZLEdBQUcsS0FBSyxDQUFDO1lBQ3pDLE1BQU0sWUFBWSxHQUFHLGFBQWEsR0FBRyxLQUFLLENBQUM7WUFDM0MsTUFBTSxPQUFPLEdBQUcsQ0FBQyxXQUFXLEdBQUcsV0FBVyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQ2hELE1BQU0sT0FBTyxHQUFHLENBQUMsV0FBVyxHQUFHLFlBQVksQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUVqRCxxREFBcUQ7WUFDckQsTUFBTSxTQUFTLEdBQUcsY0FBYyxDQUFDO1lBQ2pDLElBQUksS0FBSyxDQUFDO1lBQ1YsSUFBSSxLQUFLLEdBQUcsRUFBRSxDQUFDO1lBQ2YsSUFBSSxTQUFTLEdBQUcsQ0FBQyxDQUFDO1lBRWxCLE9BQU8sQ0FBQyxLQUFLLEdBQUcsU0FBUyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxLQUFLLElBQUksRUFBRSxDQUFDO2dCQUNuRCxNQUFNLE9BQU8sR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQ3pCLFNBQVMsRUFBRSxDQUFDO2dCQUVaLGlDQUFpQztnQkFDakMsTUFBTSxNQUFNLEdBQUcsT0FBTyxDQUFDLEtBQUssQ0FBQyxhQUFhLENBQUMsQ0FBQztnQkFDNUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO29CQUNWLE9BQU8sQ0FBQyxJQUFJLENBQUMsUUFBUSxTQUFTLGlDQUFpQyxDQUFDLENBQUM7b0JBQ2pFLFNBQVM7Z0JBQ2IsQ0FBQztnQkFFRCxpREFBaUQ7Z0JBQ2pELE1BQU0sWUFBWSxHQUFHLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEVBQUUsS0FBSyxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsWUFBWSxFQUFFLGFBQWEsQ0FBQyxDQUFDO2dCQUU3Ryx3QkFBd0I7Z0JBQ3hCLElBQUksSUFBSSxHQUFHLEVBQUUsQ0FBQztnQkFDZCxJQUFJLE1BQU0sR0FBRyxFQUFFLENBQUM7Z0JBQ2hCLElBQUksV0FBVyxHQUFHLEVBQUUsQ0FBQztnQkFDckIsSUFBSSxXQUFXLEdBQUcsRUFBRSxDQUFDO2dCQUNyQixJQUFJLGFBQWEsR0FBRyxFQUFFLENBQUM7Z0JBQ3ZCLElBQUksT0FBTyxHQUFHLEVBQUUsQ0FBQztnQkFFakIsK0JBQStCO2dCQUMvQixNQUFNLFVBQVUsR0FBRyxPQUFPLENBQUMsS0FBSyxDQUFDLGlCQUFpQixDQUFDLENBQUM7Z0JBQ3BELElBQUksVUFBVSxFQUFFLENBQUM7b0JBQ2IsTUFBTSxLQUFLLEdBQUcsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDO29CQUU1QiwrQkFBK0I7b0JBQy9CLE1BQU0sU0FBUyxHQUFHLEtBQUssQ0FBQyxLQUFLLENBQUMsZUFBZSxDQUFDLENBQUM7b0JBQy9DLElBQUksU0FBUyxFQUFFLENBQUM7d0JBQ1osTUFBTSxTQUFTLEdBQUcsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDO3dCQUN0QyxJQUFJLFNBQVMsSUFBSSxTQUFTLEtBQUssRUFBRSxFQUFFLENBQUM7NEJBQ2hDLElBQUksR0FBRyxTQUFTLENBQUM7d0JBQ3JCLENBQUM7b0JBQ0wsQ0FBQztvQkFFRCxNQUFNLFdBQVcsR0FBRyxLQUFLLENBQUMsS0FBSyxDQUFDLGlCQUFpQixDQUFDLENBQUM7b0JBQ25ELElBQUksV0FBVyxFQUFFLENBQUM7d0JBQ2QsTUFBTSxXQUFXLEdBQUcsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDO3dCQUMxQyxJQUFJLFdBQVcsSUFBSSxXQUFXLEtBQUssRUFBRSxFQUFFLENBQUM7NEJBQ3BDLE1BQU0sR0FBRyxXQUFXLENBQUM7d0JBQ3pCLENBQUM7b0JBQ0wsQ0FBQztvQkFFRCxNQUFNLGdCQUFnQixHQUFHLEtBQUssQ0FBQyxLQUFLLENBQUMsdUJBQXVCLENBQUMsQ0FBQztvQkFDOUQsSUFBSSxnQkFBZ0IsRUFBRSxDQUFDO3dCQUNuQixNQUFNLG1CQUFtQixHQUFHLFVBQVUsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDO3dCQUNuRSxvQ0FBb0M7d0JBQ3BDLElBQUksQ0FBQyxLQUFLLENBQUMsbUJBQW1CLENBQUMsRUFBRSxDQUFDOzRCQUM5QixXQUFXLEdBQUcsQ0FBQyxtQkFBbUIsR0FBRyxLQUFLLENBQUMsQ0FBQyxRQUFRLEVBQUUsQ0FBQzt3QkFDM0QsQ0FBQztvQkFDTCxDQUFDO29CQUVELE1BQU0sZ0JBQWdCLEdBQUcsS0FBSyxDQUFDLEtBQUssQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDO29CQUM5RCxJQUFJLGdCQUFnQixFQUFFLENBQUM7d0JBQ25CLFdBQVcsR0FBRyxnQkFBZ0IsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQztvQkFDN0MsQ0FBQztvQkFFRCxNQUFNLGtCQUFrQixHQUFHLEtBQUssQ0FBQyxLQUFLLENBQUMseUJBQXlCLENBQUMsQ0FBQztvQkFDbEUsSUFBSSxrQkFBa0IsRUFBRSxDQUFDO3dCQUNyQixhQUFhLEdBQUcsa0JBQWtCLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUM7b0JBQ2pELENBQUM7b0JBRUQsTUFBTSxZQUFZLEdBQUcsS0FBSyxDQUFDLEtBQUssQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO29CQUNyRCxJQUFJLFlBQVksRUFBRSxDQUFDO3dCQUNmLE9BQU8sR0FBRyxZQUFZLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUM7b0JBQ3JDLENBQUM7Z0JBQ0wsQ0FBQztnQkFFRCwyQ0FBMkM7Z0JBQzNDLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztvQkFDZCxNQUFNLFFBQVEsR0FBRyxPQUFPLENBQUMsS0FBSyxDQUFDLGdCQUFnQixDQUFDLENBQUM7b0JBQ2pELElBQUksUUFBUSxJQUFJLFFBQVEsQ0FBQyxDQUFDLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQzt3QkFDakMsSUFBSSxHQUFHLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQztvQkFDdkIsQ0FBQztvQkFFRCxNQUFNLFVBQVUsR0FBRyxPQUFPLENBQUMsS0FBSyxDQUFDLGtCQUFrQixDQUFDLENBQUM7b0JBQ3JELElBQUksVUFBVSxJQUFJLFVBQVUsQ0FBQyxDQUFDLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQzt3QkFDckMsTUFBTSxHQUFHLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQztvQkFDM0IsQ0FBQztvQkFFRCxNQUFNLGVBQWUsR0FBRyxPQUFPLENBQUMsS0FBSyxDQUFDLHdCQUF3QixDQUFDLENBQUM7b0JBQ2hFLElBQUksZUFBZSxFQUFFLENBQUM7d0JBQ2xCLE1BQU0sbUJBQW1CLEdBQUcsVUFBVSxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO3dCQUMzRCxvQ0FBb0M7d0JBQ3BDLElBQUksQ0FBQyxLQUFLLENBQUMsbUJBQW1CLENBQUMsRUFBRSxDQUFDOzRCQUM5QixXQUFXLEdBQUcsQ0FBQyxtQkFBbUIsR0FBRyxLQUFLLENBQUMsQ0FBQyxRQUFRLEVBQUUsQ0FBQzt3QkFDM0QsQ0FBQztvQkFDTCxDQUFDO29CQUVELE1BQU0sZUFBZSxHQUFHLE9BQU8sQ0FBQyxLQUFLLENBQUMsd0JBQXdCLENBQUMsQ0FBQztvQkFDaEUsSUFBSSxlQUFlLEVBQUUsQ0FBQzt3QkFDbEIsV0FBVyxHQUFHLGVBQWUsQ0FBQyxDQUFDLENBQUMsQ0FBQztvQkFDckMsQ0FBQztvQkFFRCxNQUFNLGlCQUFpQixHQUFHLE9BQU8sQ0FBQyxLQUFLLENBQUMsMEJBQTBCLENBQUMsQ0FBQztvQkFDcEUsSUFBSSxpQkFBaUIsRUFBRSxDQUFDO3dCQUNwQixhQUFhLEdBQUcsaUJBQWlCLENBQUMsQ0FBQyxDQUFDLENBQUM7b0JBQ3pDLENBQUM7Z0JBQ0wsQ0FBQztnQkFFRCxrREFBa0Q7Z0JBQ2xELElBQUksV0FBVyxHQUFHLFlBQVksWUFBWSxHQUFHLENBQUM7Z0JBRTlDLDJDQUEyQztnQkFDM0MsSUFBSSxJQUFJLElBQUksSUFBSSxLQUFLLEVBQUUsRUFBRSxDQUFDO29CQUN0QixXQUFXLElBQUksVUFBVSxJQUFJLEdBQUcsQ0FBQztnQkFDckMsQ0FBQztnQkFFRCw2Q0FBNkM7Z0JBQzdDLElBQUksTUFBTSxJQUFJLE1BQU0sS0FBSyxFQUFFLEVBQUUsQ0FBQztvQkFDMUIsV0FBVyxJQUFJLFlBQVksTUFBTSxHQUFHLENBQUM7Z0JBQ3pDLENBQUM7Z0JBRUQsZ0NBQWdDO2dCQUNoQyxJQUFJLFdBQVcsSUFBSSxXQUFXLEtBQUssRUFBRSxFQUFFLENBQUM7b0JBQ3BDLFdBQVcsSUFBSSxrQkFBa0IsV0FBVyxHQUFHLENBQUM7Z0JBQ3BELENBQUM7Z0JBRUQsMkJBQTJCO2dCQUMzQixJQUFJLE9BQU8sSUFBSSxPQUFPLEtBQUssRUFBRSxFQUFFLENBQUM7b0JBQzVCLFdBQVcsSUFBSSxhQUFhLE9BQU8sR0FBRyxDQUFDO2dCQUMzQyxDQUFDO2dCQUVELGdDQUFnQztnQkFDaEMsSUFBSSxXQUFXLElBQUksV0FBVyxLQUFLLEVBQUUsRUFBRSxDQUFDO29CQUNwQyxXQUFXLElBQUksa0JBQWtCLFdBQVcsR0FBRyxDQUFDO2dCQUNwRCxDQUFDO2dCQUVELGtDQUFrQztnQkFDbEMsSUFBSSxhQUFhLElBQUksYUFBYSxLQUFLLEVBQUUsRUFBRSxDQUFDO29CQUN4QyxXQUFXLElBQUksb0JBQW9CLGFBQWEsR0FBRyxDQUFDO2dCQUN4RCxDQUFDO2dCQUVELFdBQVcsSUFBSSxLQUFLLENBQUM7Z0JBQ3JCLEtBQUssQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7WUFDNUIsQ0FBQztZQUNELE9BQU8sQ0FBQyxHQUFHLENBQUMsOEJBQThCLENBQUMsQ0FBQztZQUU1Qyx5RUFBeUU7WUFDekUsSUFBSSxLQUFLLENBQUMsTUFBTSxLQUFLLENBQUMsRUFBRSxDQUFDO2dCQUNyQixPQUFPLENBQUMsSUFBSSxDQUFDLG1EQUFtRCxDQUFDLENBQUM7Z0JBQ2xFLE1BQU0sWUFBWSxHQUFHLFVBQVUsQ0FBQyxLQUFLLENBQUMsNkJBQTZCLENBQUMsQ0FBQztnQkFDckUsSUFBSSxZQUFZLElBQUksWUFBWSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7b0JBQ2xDLE1BQU0sWUFBWSxHQUFHLFlBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQztvQkFDckMsTUFBTSxjQUFjLEdBQUcsY0FBYyxDQUFDO29CQUN0QyxJQUFJLFVBQVUsQ0FBQztvQkFDZixPQUFPLENBQUMsVUFBVSxHQUFHLGNBQWMsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsS0FBSyxJQUFJLEVBQUUsQ0FBQzt3QkFDL0QsS0FBSyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztvQkFDOUIsQ0FBQztnQkFDTCxDQUFDO1lBQ0wsQ0FBQztZQUVELGdEQUFnRDtZQUNoRCxJQUFJLEtBQUssQ0FBQyxNQUFNLEtBQUssQ0FBQyxFQUFFLENBQUM7Z0JBQ3JCLE9BQU8sQ0FBQyxLQUFLLENBQUMsbUNBQW1DLFFBQVEsRUFBRSxDQUFDLENBQUM7Z0JBQzdELE9BQU8sSUFBSSxDQUFDO1lBQ2hCLENBQUM7WUFFRCxrREFBa0Q7WUFDbEQsTUFBTSxPQUFPLEdBQUcsS0FBSyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztZQUUvQixnREFBZ0Q7WUFDaEQsTUFBTSxpQkFBaUIsR0FBRyxPQUFPLFdBQVcsSUFBSSxXQUFXLEVBQUUsQ0FBQztZQUU5RCxrQ0FBa0M7WUFDbEMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsR0FBRztnQkFDdEIsSUFBSSxFQUFFLFFBQVE7Z0JBQ2QsT0FBTyxFQUFFLE9BQU87Z0JBQ2hCLE9BQU8sRUFBRSxpQkFBaUI7Z0JBQzFCLFFBQVEsRUFBRTtvQkFDTixLQUFLLEVBQUUsRUFBRTtvQkFDVCxPQUFPLEVBQUUsRUFBRTtvQkFDWCxPQUFPLEVBQUUsRUFBRTtpQkFDZDthQUNKLENBQUM7WUFDRixPQUFPLENBQUMsR0FBRyxDQUFDLHdDQUF3QyxFQUFFLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUN2RSxPQUFPO2dCQUNILElBQUksRUFBRSxRQUFRO2dCQUNkLE9BQU8sRUFBRSxPQUFPO2dCQUNoQixPQUFPLEVBQUUsaUJBQWlCO2dCQUMxQixRQUFRLEVBQUU7b0JBQ04sS0FBSyxFQUFFLE9BQU87b0JBQ2QsT0FBTyxFQUFFLEVBQUU7b0JBQ1gsT0FBTyxFQUFFLEVBQUU7aUJBQ2Q7YUFDSixDQUFDO1FBQ04sQ0FBQztRQUFDLE9BQU8sS0FBSyxFQUFFLENBQUM7WUFDYixNQUFNLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxHQUFHLEVBQUUsQ0FBQztZQUM3QixPQUFPLENBQUMsS0FBSyxDQUFDLHVDQUF1QyxRQUFRLEVBQUUsRUFBRSxLQUFLLENBQUMsQ0FBQztZQUN4RSxPQUFPLElBQUksQ0FBQztRQUNoQixDQUFDO0lBQ0wsQ0FBQztJQUVELHlDQUF5QztJQUN6QyxpQkFBaUIsQ0FBQyxDQUFTLEVBQUUsS0FBYSxFQUFFLE9BQWUsRUFBRSxPQUFlLEVBQUUsWUFBb0IsRUFBRSxhQUFxQjtRQUNySCw2Q0FBNkM7UUFDN0Msb0VBQW9FO1FBRXBFLE1BQU0sUUFBUSxHQUFHLENBQUMsQ0FBQyxLQUFLLENBQUMscUJBQXFCLENBQUMsQ0FBQztRQUNoRCxJQUFJLENBQUMsUUFBUTtZQUFFLE9BQU8sQ0FBQyxDQUFDO1FBRXhCLE1BQU0sbUJBQW1CLEdBQUcsUUFBUSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsRUFBRTtZQUMzQyxNQUFNLE9BQU8sR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDdkIsTUFBTSxNQUFNLEdBQUcsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUVyRixJQUFJLE1BQU0sQ0FBQyxNQUFNLEtBQUssQ0FBQztnQkFBRSxPQUFPLEdBQUcsQ0FBQztZQUVwQyxJQUFJLGlCQUFpQixHQUFhLEVBQUUsQ0FBQztZQUVyQyxRQUFRLE9BQU8sRUFBRSxDQUFDO2dCQUNkLEtBQUssR0FBRyxDQUFDLENBQUMscUJBQXFCO2dCQUMvQixLQUFLLEdBQUcsQ0FBQyxDQUFDLHFCQUFxQjtnQkFDL0IsS0FBSyxHQUFHLENBQUMsQ0FBQywwQkFBMEI7Z0JBQ3BDLEtBQUssR0FBRyxDQUFDLENBQUMsMkJBQTJCO2dCQUNyQyxLQUFLLEdBQUcsQ0FBQyxDQUFDLDhCQUE4QjtnQkFDeEMsS0FBSyxHQUFHLENBQUMsQ0FBQyw4QkFBOEI7Z0JBQ3hDLEtBQUssR0FBRyxDQUFDLENBQUMsaUJBQWlCO2dCQUMzQixLQUFLLEdBQUcsQ0FBQztnQkFDVCxLQUFLLEdBQUc7b0JBQ0osNkJBQTZCO29CQUM3QixJQUFJLE9BQU8sS0FBSyxHQUFHLElBQUksT0FBTyxLQUFLLEdBQUcsRUFBRSxDQUFDO3dCQUNyQyxPQUFPLEdBQUcsQ0FBQztvQkFDZixDQUFDO29CQUNELHdCQUF3QjtvQkFDeEIsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxNQUFNLEVBQUUsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDO3dCQUN4QyxNQUFNLENBQUMsR0FBRyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUM7d0JBQ3BCLE1BQU0sQ0FBQyxHQUFHLE1BQU0sQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7d0JBQ3hCLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQzs0QkFDekIsaUJBQWlCLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxLQUFLLEdBQUcsT0FBTyxDQUFDLENBQUM7NEJBQzVDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsS0FBSyxHQUFHLE9BQU8sQ0FBQyxDQUFDO3dCQUNoRCxDQUFDOzZCQUFNLENBQUM7NEJBQ0osaUJBQWlCLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDOzRCQUMxQixpQkFBaUIsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7d0JBQzlCLENBQUM7b0JBQ0wsQ0FBQztvQkFDRCxNQUFNO2dCQUVWLEtBQUssR0FBRyxDQUFDLENBQUMscUJBQXFCO2dCQUMvQixLQUFLLEdBQUcsQ0FBQyxDQUFDLHFCQUFxQjtnQkFDL0IsS0FBSyxHQUFHLENBQUMsQ0FBQywwQkFBMEI7Z0JBQ3BDLEtBQUssR0FBRyxDQUFDLENBQUMsMkJBQTJCO2dCQUNyQyxLQUFLLEdBQUcsQ0FBQyxDQUFDLDhCQUE4QjtnQkFDeEMsS0FBSyxHQUFHLENBQUMsQ0FBQyw4QkFBOEI7Z0JBQ3hDLEtBQUssR0FBRyxFQUFFLGlCQUFpQjtvQkFDdkIsd0JBQXdCO29CQUN4QixLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsTUFBTSxDQUFDLE1BQU0sRUFBRSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUM7d0JBQ3hDLE1BQU0sQ0FBQyxHQUFHLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQzt3QkFDcEIsTUFBTSxDQUFDLEdBQUcsTUFBTSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQzt3QkFDeEIsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDOzRCQUN6QixpQkFBaUIsQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLEtBQUssQ0FBQyxDQUFDOzRCQUNsQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLEtBQUssQ0FBQyxDQUFDO3dCQUN0QyxDQUFDOzZCQUFNLENBQUM7NEJBQ0osaUJBQWlCLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDOzRCQUMxQixpQkFBaUIsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7d0JBQzlCLENBQUM7b0JBQ0wsQ0FBQztvQkFDRCxNQUFNO2dCQUVWLEtBQUssR0FBRyxFQUFFLDZCQUE2QjtvQkFDbkMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsR0FBRyxLQUFLLEdBQUcsT0FBTyxDQUFDLENBQUM7b0JBQ3BELE1BQU07Z0JBRVYsS0FBSyxHQUFHLEVBQUUsNkJBQTZCO29CQUNuQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxHQUFHLEtBQUssQ0FBQyxDQUFDO29CQUMxQyxNQUFNO2dCQUVWLEtBQUssR0FBRyxFQUFFLDJCQUEyQjtvQkFDakMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsR0FBRyxLQUFLLEdBQUcsT0FBTyxDQUFDLENBQUM7b0JBQ3BELE1BQU07Z0JBRVYsS0FBSyxHQUFHLEVBQUUsMkJBQTJCO29CQUNqQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxHQUFHLEtBQUssQ0FBQyxDQUFDO29CQUMxQyxNQUFNO2dCQUVWO29CQUNJLGlDQUFpQztvQkFDakMsT0FBTyxHQUFHLENBQUM7WUFDbkIsQ0FBQztZQUVELGdDQUFnQztZQUNoQyxNQUFNLFFBQVEsR0FBRyxpQkFBaUIsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUU7Z0JBQ3ZDLGdDQUFnQztnQkFDaEMsT0FBTyxNQUFNLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDN0QsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBRWIsT0FBTyxPQUFPLEdBQUcsUUFBUSxDQUFDO1FBQzlCLENBQUMsQ0FBQyxDQUFDO1FBRUgsT0FBTyxtQkFBbUIsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDeEMsQ0FBQztJQUVNLHVCQUF1QixDQUFDLE1BQU07UUFDbkMsb0dBQW9HO1FBQ3BHLE1BQU0sT0FBTyxHQUFHLEVBQUUsQ0FBQztRQUNuQixNQUFNLFFBQVEsR0FBRyxNQUFNLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQztRQUMzQyxLQUFLLE1BQU0sSUFBSSxJQUFJLFFBQVEsRUFBRSxDQUFDO1lBQzFCLElBQUksUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDLE9BQU8sRUFBRSxDQUFDO2dCQUMxQixJQUFJLE9BQU8sR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLEVBQUUsRUFBRSxxREFBcUQsRUFBQyxJQUFJLENBQUMsQ0FBQTtnQkFDeEYsT0FBTyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztZQUMxQixDQUFDO1FBQ0wsQ0FBQztRQUNELElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLE9BQU8sQ0FBQyxRQUFRLEVBQUUsQ0FBQyxFQUMvRCxtQkFBbUIsRUFBQywwQkFBMEIsQ0FBQyxDQUFDLENBQUM7UUFDakQsT0FBTyxPQUFPLENBQUM7SUFDakIsQ0FBQzsrR0FodUtjLFlBQVk7bUhBQVosWUFBWSxjQUhiLE1BQU07OzRGQUdMLFlBQVk7a0JBSjFCLFVBQVU7bUJBQUM7b0JBQ1YsVUFBVSxFQUFFLE1BQU07aUJBQ25CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBIdHRwQ2xpZW50LCBIdHRwSGVhZGVycywgSHR0cFJlcXVlc3QgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XHJcbmltcG9ydCB7IEdyaWREYXRhUmVzdWx0IH0gZnJvbSAnQHByb2dyZXNzL2tlbmRvLWFuZ3VsYXItZ3JpZCc7XHJcbmltcG9ydCB7IHRvT0RhdGFTdHJpbmcgfSBmcm9tICdAcHJvZ3Jlc3Mva2VuZG8tZGF0YS1xdWVyeSc7XHJcbmltcG9ydCB7IE9ic2VydmFibGUsIEJlaGF2aW9yU3ViamVjdCB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBtYXAsIHRhcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcclxuLy9pbXBvcnQgeyBBbnlBUmVjb3JkIH0gZnJvbSAnZG5zJztcclxuaW1wb3J0IHsgdGhyb3dFcnJvciB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgKiBhcyBDcnlwdG9KUyBmcm9tICdjcnlwdG8tanMnO1xyXG5pbXBvcnQgeyBjYXRjaEVycm9yLCByZXRyeSB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcclxuaW1wb3J0IHsgTm90aWZpY2F0aW9uU2VydmljZSB9IGZyb20gJ0Bwcm9ncmVzcy9rZW5kby1hbmd1bGFyLW5vdGlmaWNhdGlvbic7XHJcbmltcG9ydCB7IERpYWxvZ1NlcnZpY2UsIERpYWxvZ1JlZiwgRGlhbG9nQ2xvc2VSZXN1bHQgfSBmcm9tICdAcHJvZ3Jlc3Mva2VuZG8tYW5ndWxhci1kaWFsb2cnO1xyXG5pbXBvcnQgeyBEYXksIGZpcnN0RGF5SW5XZWVrLCBnZXREYXRlLCB0b0xvY2FsRGF0ZSB9IGZyb20gJ0Bwcm9ncmVzcy9rZW5kby1kYXRlLW1hdGgnO1xyXG5pbXBvcnQgeyBQYW5lbEJhckl0ZW1Nb2RlbCwgUGFuZWxCYXJTdGF0ZUNoYW5nZUV2ZW50IH0gZnJvbSAnQHByb2dyZXNzL2tlbmRvLWFuZ3VsYXItbGF5b3V0JztcclxuaW1wb3J0IHsgTWQ1IH0gZnJvbSAndHMtbWQ1L2Rpc3QvbWQ1JztcclxuaW1wb3J0IHsgZm9ybWF0RGF0ZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7IGtleWZyYW1lcyB9IGZyb20gJ0Bhbmd1bGFyL2FuaW1hdGlvbnMnO1xyXG5pbXBvcnQgeyAgdGFic0NvZGVzLCBjb21wb25lbnRDb25maWdEZWYgfSBmcm9tICcuL21vZGVsJztcclxuXHJcbmltcG9ydCB7IE1lc3NhZ2VTZXJ2aWNlIH0gZnJvbSAnQHByb2dyZXNzL2tlbmRvLWFuZ3VsYXItbDEwbic7XHJcbmltcG9ydCB7IE15TWVzc2FnZVNlcnZpY2UgfSBmcm9tICcuL215LW1lc3NhZ2Uuc2VydmljZSc7XHJcblxyXG5cclxuZGVjbGFyZSBmdW5jdGlvbiBnZXRQYXJhbUNvbmZpZygpOiBhbnk7XHJcbmRlY2xhcmUgZnVuY3Rpb24gc2V0UGFyYW1Db25maWcodmFyMTphbnkpOmFueTtcclxuQEluamVjdGFibGUoe1xyXG4gIHByb3ZpZGVkSW46ICdyb290JyxcclxufSlcclxuLy9leHBvcnQgY2xhc3Mgc3RhclNlcnZpY2VzIGV4dGVuZHMgQmVoYXZpb3JTdWJqZWN0PEdyaWREYXRhUmVzdWx0PiB7XHJcbiAgZXhwb3J0IGNsYXNzIHN0YXJTZXJ2aWNlcyAge1xyXG4gIHB1YmxpYyBwYXJhbUNvbmZpZzphbnk7XHJcbiAgcHJpdmF0ZSBjcmVhdGVkSXRlbXM6IGFueVtdID0gW107XHJcbiAgcHJpdmF0ZSB1cGRhdGVkSXRlbXM6IGFueVtdID0gW107XHJcbiAgcHJpdmF0ZSBkZWxldGVkSXRlbXM6IGFueVtdID0gW107XHJcbiAgcHVibGljIGxvYWRpbmc6IGFueTtcclxuICBwdWJsaWMgcm91dGluZV9uYW1lID0gXCJcIjtcclxuICBwdWJsaWMgc2F2ZUNoYW5nZXNNc2cgPSBcIlNjcmVlbiBjaGFuZ2VkLCBhcmUgeW91IHN1cmUgeW91IHRvIG5hdmlnYXRlP1wiO1xyXG4gIHB1YmxpYyBkZWxldGVEZXRhaWxNc2cgPSBcIkNhbiBub3QgZGVsZXRlIGFzIGRldGFpbCBoYXMgZGF0YS5cIjtcclxuICBwdWJsaWMgcGxlYXNlQ29uZmlybU1zZyA9IFwiUGxlYXNlIGNvbmZpcm1cIjtcclxuICBwdWJsaWMgZGVsZXRlQ29uZmlybU1zZyA9IFwiQXJlIHlvdSBzdXJlIHlvdSB3YW50IHRvIGRlbGV0ZSB0aGlzIHJlY29yZD9cIjtcclxuICBwdWJsaWMgbm90aGluZ1RvRGVsZXRlbE1zZyA9IFwiTm8gcmVjb3JkcyB0byBkZWxldGUuXCI7XHJcbiAgcHVibGljIGZpZWxkc1JlcXVpcmVkTXNnID0gXCJQbGVhc2UgZW50ZXIgcmVxdWlyZWQgZmllbGRzLlwiXHJcbiAgcHVibGljIHJlYWRPbmx5TXNnID0gXCJDYW4gbm90IHNhdmUgLCB5b3VyIGF1dGhvcml0eSBpcyByZWFkb25seS5cIlxyXG4gIHB1YmxpYyBub0FjY2Vzc01zZyA9IFwiWW91IGRvbnQgaGF2ZSBhY2Nlc3MgdG8gdGhpcyByb3V0aW5lLlwiXHJcbiAgcHVibGljIHN0YW5kYXJkRXJyb3JNc2cgPSBcIkVycm9yIHBlcmZvcm1pbmcgdHJhbnNhY3Rpb25cIlxyXG4gIHB1YmxpYyBzYXZlTWFzdGVyTXNnID0gXCJTYXZlIG1hc3RlciByZWNvcmQgZmlyc3QuXCJcclxuICBwdWJsaWMgZW50ZXJRdWVyeU1zZyA9ICBcIkVudGVyIGFueSBmaWVsZCB0byBzZWFyY2ggKGUuZzogbmFtZSUpIGFuZCB0aGVuIHByZXNzIEV4ZWN1dGUgUXVlcnlcIjtcclxuICBwdWJsaWMgaGVscE1zZyA9IFwiXCI7XHJcbiAgcHVibGljIGhlbHBNc2dfZ3JpZCA9IFwiXCI7XHJcbiAgcHVibGljIFVTRVJOQU1FID0gXCJcIjtcclxuICBwdWJsaWMgaGlkZUFmdGVyID0gNTAwO1xyXG4gIHB1YmxpYyBTdHJBdXRoID0gXCJcIjtcclxuICBwdWJsaWMgVVNFUl9JTkZPOmFueTtcclxuICBwdWJsaWMgTUFTVEVSX0RCID0gXCJcIjtcclxuICBwdWJsaWMgVVNFUk5BTUVfREIgPSBcIlwiO1xyXG4gIHByaXZhdGUgaHR0cE9wdGlvbnM6YW55O1xyXG4gIHB1YmxpYyBsaW1pdCA9IDUwMDA7XHJcbiAgcHVibGljIFllc05vQWN0aW9ucyA9IFtcclxuICAgIHsgdGV4dDogJ05vJywgcHJpbWFyeTogZmFsc2UgfSxcclxuICAgIHsgdGV4dDogJ1llcycsIHByaW1hcnk6IHRydWUgfVxyXG4gIF07XHJcbiAgcHVibGljIE9rQWN0aW9ucyA9IFtcclxuICAgIHsgdGV4dDogJ09rJywgcHJpbWFyeTogZmFsc2UgfVxyXG4gIF07XHJcbiAgcHVibGljIHNlc3Npb25QYXJhbXM6YW55ID0ge307XHJcblxyXG5cclxuXHJcbiAgICAvL3ByaXZhdGUgQkFTRV9VUkwgPSAnaHR0cHM6Ly9vZGF0YXNhbXBsZXNlcnZpY2VzLmF6dXJld2Vic2l0ZXMubmV0L1Y0L05vcnRod2luZC9Ob3J0aHdpbmQuc3ZjLyc7XHJcbiAgLy9wcml2YXRlIEJBU0VfVVJMID0gJ2h0dHA6Ly8xOTIuMTY4LjEuMzo4MDkwL2FwaT9fZm9ybWF0PWpzb24mX2xpbWl0PTUwJztcclxuXHJcbiAgcHVibGljIEVQTUVOR19VUkwgPSBcIlwiOyAvLydodHRwOi8vMTkyLjE2OC4xLjU6ODA5Mi9mb3JtYXQnO1xyXG4gICAgLy9wcml2YXRlIEVQTUVOR19VUkwgPSAnaHR0cDovL2dtYXNocm8uY29tOjgwOTIvZm9ybWF0JztcclxuXHJcbiAgcHVibGljIFNFUlZFUl9VUkwgPSBcIlwiOyAvLyAnaHR0cDovL2xvY2FsaG9zdDo4MDkwJztcclxuICAvL3B1YmxpYyBTRVJWRVJfVVJMID0gJ2h0dHA6Ly9nbWFzaHJvLmNvbTo4MDkwJztcclxuXHJcbiAgICBwdWJsaWMgQkFTRV9VUkwgPSB0aGlzLlNFUlZFUl9VUkwgKyAnL2FwaT9fZm9ybWF0PWpzb24mX2xpbWl0PScgKyB0aGlzLmxpbWl0O1xyXG4gIC8vcHJpdmF0ZSBCQVNFX1VSTCA9ICdodHRwOi8vZ21hc2hyby5jb206ODA5MC9hcGk/X2Zvcm1hdD1qc29uJl9saW1pdD0nICsgdGhpcy5saW1pdDtcclxuICAgIHB1YmxpYyBlS3ljU2NyID0gXCJEU1BFS1lDXCI7XHJcbiAgcHVibGljIHBvcnRhbFNjciA9IFwiRFNQUE9SVEFMXCI7XHJcblxyXG4gICAgY29uc3RydWN0b3IoXHJcbiAgICAgICAgcHJpdmF0ZSBub3RpZmljYXRpb25TZXJ2aWNlOiBOb3RpZmljYXRpb25TZXJ2aWNlLFxyXG4gICAgICAgIHByaXZhdGUgZGlhbG9nU2VydmljZTogRGlhbG9nU2VydmljZSxcclxuICAgICAgICBwcml2YXRlIGh0dHA6IEh0dHBDbGllbnQsXHJcbiAgICAgICAgcHJpdmF0ZSBtZXNzYWdlczogTWVzc2FnZVNlcnZpY2VcclxuICAgICkge1xyXG4gICAgLy9zdXBlcihudWxsKTtcclxuICAgICAgICAvL2xvZ2dlci53YXJuKFwiV2FybmluZyBtZXNzYWdlXCIpO1xyXG5cclxuICAgIH1cclxuXHJcbiAgLy8gcHVibGljIHF1ZXJ5KHN0YXRlOiBhbnkpOiB2b2lkIHtcclxuICAvLyAgIGxldCBxdWVyeU5hbWUgPSBcIlwiO1xyXG4gIC8vICAgdGhpcy5mZXRjaCh0aGlzLCBxdWVyeU5hbWUpXHJcbiAgLy8gICAgIC5zdWJzY3JpYmUoKHg6YW55KSA9PiBzdXBlci5uZXh0KHgpKTtcclxuICAvLyB9XHJcbiAgcHVibGljIHJlbW92ZVJlYyhncmlkRGF0YTogYW55LCBlZGl0ZWRSb3dJbmRleDogbnVtYmVyKSB7XHJcblxyXG4gICAgICAgIC8vbGV0IHJlc3VsdDEgPSBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KGdyaWREYXRhKSk7XHJcbiAgICBpZiAodHlwZW9mIGVkaXRlZFJvd0luZGV4ICE9PSBcInVuZGVmaW5lZFwiKSB7XHJcbiAgICAgIGdyaWREYXRhLmRhdGEuc3BsaWNlKGVkaXRlZFJvd0luZGV4LCAxKTtcclxuICAgICAgICAgIGdyaWREYXRhLnRvdGFsID0gZ3JpZERhdGEuZGF0YS5sZW5ndGg7XHJcbiAgICAgICAgICAvKiAgLy9pZiAodGhpcy5wYXJhbUNvbmZpZy5ERUJVR19GTEFHKSBjb25zb2xlLmxvZygncmVtdmluZyBlZGl0ZWRSb3dJbmRleDonICsgZWRpdGVkUm93SW5kZXgpXHJcbiAgICAgICAgICAgIHJlc3VsdDEuZGF0YS5zcGxpY2UoIGVkaXRlZFJvd0luZGV4ICwgMSApO1xyXG4gICAgICAgICAgICByZXN1bHQxLnRvdGFsID0gcmVzdWx0MS5kYXRhLmxlbmd0aDsqL1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIGdyaWREYXRhO1xyXG4gICAgfVxyXG4gIHB1YmxpYyB1cGRhdGVSZWMoZ3JpZERhdGE6IGFueSwgZWRpdGVkUm93SW5kZXg6IG51bWJlciwgTmV3VmFsOiBhbnkpIHtcclxuICAgICAgZ3JpZERhdGEuZGF0YVtlZGl0ZWRSb3dJbmRleF0gPSBOZXdWYWw7XHJcblxyXG4gICAgICAgIHJldHVybiBncmlkRGF0YTtcclxuXHJcbiAgICB9XHJcbiAgcHVibGljIGFkZFJlYyhncmlkRGF0YTogYW55LCBOZXdWYWw6IGFueSkge1xyXG4gICAgICBncmlkRGF0YS5kYXRhLnB1c2goTmV3VmFsKTtcclxuICAgICAgIC8qIGxldCByZXN1bHQgPXtcImRhdGFcIjpbXSwgdG90YWw6MH07XHJcbiAgICAgICAgbGV0IHJlc3VsdDEgPSBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KGdyaWREYXRhKSk7XHJcbiAgICAgICAgTmV3VmFsID0gdGhpcy5wYXJzZVRvRGF0ZShOZXdWYWwpO1xyXG4gICAgICAgIHJlc3VsdDEuZGF0YS5wdXNoKE5ld1ZhbCk7XHJcbiAgICAgICAgcmVzdWx0LmRhdGEgPSByZXN1bHQxLmRhdGE7XHJcbiAgICAgICAgcmVzdWx0LnRvdGFsID0gcmVzdWx0LmRhdGEubGVuZ3RoO1xyXG4gICAgICAgIHJldHVybiByZXN1bHQxOyovXHJcbiAgICAgICAgcmV0dXJuIGdyaWREYXRhO1xyXG4gICAgfVxyXG4gICAgcHVibGljIGZvcm1hdFdoZXJlKE5ld1ZhbDphbnkpe1xyXG4gICAgICBmdW5jdGlvbiBpc0RhdGUgKHZhbHVlOmFueSkge1xyXG4gICAgICAgIHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIERhdGU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZ1bmN0aW9uIEZPUk1BVF9JU09fcGFyc2UoZDphbnkpIHsgLy8gVGhpcyBmdW5jdGlvbiB3YXMgYWRkZWQgZm9yIENSTS4gQ1JNIGRhdGVzIHNob3VsZCBiZSBJU09cclxuICAgICAgICAgIHZhciBkYXRlSXNvID0gZC50b0lTT1N0cmluZygpO1xyXG4gICAgICAgICAgdmFyIGRhdGVJc29BcnIgPSBkYXRlSXNvLnNwbGl0KFwiVFwiKTtcclxuICAgICAgICAgIGRhdGVJc28gPSBkYXRlSXNvQXJyWzBdICsgXCIgXCIgKyBkYXRlSXNvQXJyWzFdO1xyXG4gICAgICAgICAgZGF0ZUlzbyA9IGRhdGVJc28uc3Vic3RyKDAsIDE5KTtcclxuICAgICAgICAgIHJldHVybiBkYXRlSXNvO1xyXG4gICAgICAgIH1cclxuICAgICAgZnVuY3Rpb24gcGFyc2VWYWx1ZShrZXk6YW55LCB2YWx1ZTphbnkpe1xyXG4gICAgICAgIGxldCBwaHJhc2UgPSBcIlwiO1xyXG4gICAgICAgIC8vaWYgKHRoaXMucGFyYW1Db25maWcuREVCVUdfRkxBRykgY29uc29sZS5sb2coXCJpc0RhdGU6XCIgLCBpc0RhdGUgKHZhbHVlKSwgdmFsdWUpO1xyXG5cclxuICAgICAgICBpZiAoaXNEYXRlICh2YWx1ZSkpe1xyXG4gICAgICAgICAgICAvL3ZhbHVlID0gZ2V0RGF0ZSh2YWx1ZSk7XHJcbiAgICAgICAgICAgIC8vdmFsdWUgPSBGT1JNQVRfSVNPX3BhcnNlKHZhbHVlKTtcclxuICAgICAgICAgICAgdmFsdWUgPSB2YWx1ZS50b0lTT1N0cmluZygpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJyApXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgLy8gaXQncyBhIHN0cmluZ1xyXG4gICAgICAgICAgaWYgKHZhbHVlICE9IFwiXCIgJiYgdmFsdWUgIT0gbnVsbCApXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIGxldCBvcGVyYXRvcnMgPSBcIjw+IT1cIlxyXG4gICAgICAgICAgICBsZXQgb3BlcmF0b3JWYWwgPSBcIlwiO1xyXG4gICAgICAgICAgICBsZXQgdHJpbWVlZFZhbCA9IHZhbHVlLnRyaW0oKTtcclxuICAgICAgICAgICAgbGV0IGZpcnN0Q2hhciA9IHRyaW1lZWRWYWwuY2hhckF0KDApO1xyXG4gICAgICAgICAgICBsZXQgbiA9IG9wZXJhdG9ycy5zZWFyY2goZmlyc3RDaGFyKTtcclxuICAgICAgICAgICAgaWYgKCBuICE9IC0xKXtcclxuICAgICAgICAgICAgICBpZiAoZmlyc3RDaGFyID09IFwifFwiKVxyXG4gICAgICAgICAgICAgICAgb3BlcmF0b3JWYWwgPSBcIiA9ICdcIiAgKyB2YWx1ZSArIFwiJyBcIjtcclxuICAgICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgICAgICBvcGVyYXRvclZhbCA9IHZhbHVlO1xyXG5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmICggdmFsdWUudG9VcHBlckNhc2UoKS5zZWFyY2goXCIlXCIpICE9IC0xKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgb3BlcmF0b3JWYWwgPSBcIiBsaWtlICdcIiAgKyB2YWx1ZSArIFwiJyBcIjtcclxuICAgICAgICAgICAgICAvL2lmICh0aGlzLnBhcmFtQ29uZmlnLkRFQlVHX0ZMQUcpIGNvbnNvbGUubG9nKFwib3BlcmF0b3JWYWw6XCIrIG9wZXJhdG9yVmFsKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgIG9wZXJhdG9yVmFsID0gXCIgPSAnXCIgICsgdmFsdWUgKyBcIicgXCI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcGhyYXNlID0ga2V5ICsgZW5jb2RlVVJJQ29tcG9uZW50KG9wZXJhdG9yVmFsKTtcclxuICAgICAgICAgICAgLy9waHJhc2UgPSBrZXkgKyBvcGVyYXRvclZhbDtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZXtcclxuICAgICAgICAvLyBpdCdzIHNvbWV0aGluZyBlbHNlXHJcbiAgICAgICAgICBsZXQgb3BlcmF0b3JWYWwgPSBcIiA9ICdcIiAgKyB2YWx1ZSArIFwiJyBcIjtcclxuICAgICAgICAgIHBocmFzZSA9IGtleSArIGVuY29kZVVSSUNvbXBvbmVudChvcGVyYXRvclZhbCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gcGhyYXNlO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBsZXQgd2hlcmVQaHJhc2UgPSBcIlwiO1xyXG4gICAgICAgIGxldCB3aGVyZUNsYXVzZSA9IFwiXCI7XHJcbiAgICAgICAgaWYgKHRoaXMucGFyYW1Db25maWcuREVCVUdfRkxBRykgY29uc29sZS5sb2coXCJmb3JtYXRXaGVyZTpcIilcclxuICAgICAgICBpZiAodGhpcy5wYXJhbUNvbmZpZy5ERUJVR19GTEFHKSBjb25zb2xlLmxvZyhOZXdWYWwpXHJcbiAgICAgICAgT2JqZWN0LmtleXMoTmV3VmFsKS5mb3JFYWNoKGZ1bmN0aW9uKGtleSkge1xyXG4gICAgICAgICAgICBsZXQgdmFsdWUgPSBOZXdWYWxba2V5XTtcclxuICAgICAgICAgICAgLy9pZiAodGhpcy5wYXJhbUNvbmZpZy5ERUJVR19GTEFHKSBjb25zb2xlLmxvZyhrZXkgKyBcIjpcIiArIHZhbHVlKTtcclxuICAgICAgICAgICAgaWYgKCAodHlwZW9mIHZhbHVlICE9PSBcInVuZGVmaW5lZFwiICkgJiYgKHZhbHVlICE9PSBcIlwiICkgJiYgKHZhbHVlICE9PSBudWxsKSApXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICBsZXQgcGhyYXNlID0gcGFyc2VWYWx1ZShrZXksIHZhbHVlKTtcclxuXHJcbiAgICAgICAgICAgICAgaWYgKHdoZXJlUGhyYXNlID09IFwiXCIpXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgd2hlcmVQaHJhc2UgPSB3aGVyZVBocmFzZSArICAgcGhyYXNlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHdoZXJlUGhyYXNlID0gd2hlcmVQaHJhc2UgKyBcIiBhbmQgXCIgKyBwaHJhc2U7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgaWYgKHdoZXJlUGhyYXNlICE9IFwiXCIpXHJcbiAgICAgICAgICAgIHdoZXJlQ2xhdXNlID0gXCImX1dIRVJFPVwiICsgd2hlcmVQaHJhc2U7XHJcbiAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICB3aGVyZUNsYXVzZSA9IFwiJl9XSEVSRT1cIjtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMucGFyYW1Db25maWcuREVCVUdfRkxBRykgY29uc29sZS5sb2coXCJ3aGVyZUNsYXVzZTpcIiArIHdoZXJlQ2xhdXNlKTtcclxuICAgICAgICByZXR1cm4gd2hlcmVDbGF1c2U7XHJcbiAgICB9XHJcblxyXG4gIHB1YmxpYyBjaGVja0RCTG9jKHRoZVVSTDphbnkpIHtcclxuICAgIFxyXG4gICAgICBsZXQgcGFyYW1Db25maWcgPSBnZXRQYXJhbUNvbmZpZygpO1xyXG4gICAgICBpZiAodGhpcy5wYXJhbUNvbmZpZy5EQkxvYyAhPSBcIlwiKXtcclxuICAgICAgLy9sZXQgdXNlck5hbWUgPSB0aGlzLnNlc3Npb25QYXJhbXMuVVNFUk5BTUU7XHJcbiAgICAgICAgdGhlVVJMID0gdGhlVVJMICsgXCImREJMb2M9XCIgKyB0aGlzLnBhcmFtQ29uZmlnLkRCTG9jO1xyXG4gICAgICBcclxuICAgIH1cclxuICAgIGlmICh0aGlzLnBhcmFtQ29uZmlnLkRFQlVHX0ZMQUcpIGNvbnNvbGUubG9nKFwidGhlVVJMOlwiLCB0aGVVUkwpO1xyXG5cclxuICAgIHJldHVybiB0aGVVUkw7XHJcbiAgfVxyXG4gIFxyXG4gIHB1YmxpYyBmZXRjaChvYmplY3Q6YW55LCBxdWVyeU5hbWU6IHN0cmluZyk6IE9ic2VydmFibGU8R3JpZERhdGFSZXN1bHQ+IHtcclxuICAgICAgICAvL2NvbnN0IHF1ZXJ5U3RyID0gYCR7dG9PRGF0YVN0cmluZyhzdGF0ZSl9JiRjb3VudD10cnVlYDtcclxuICAgICAgICBjb25zdCBxdWVyeVN0ciA9IGBgO1xyXG4gICAgICAgIHRoaXMubG9hZGluZyA9IHRydWU7XHJcbiAgICAgICAgbGV0IHRoZVVSTCA9IGAke3RoaXMuQkFTRV9VUkx9JHtxdWVyeU5hbWV9YDtcclxuICAgICAgICB0aGVVUkwgPSB0aGlzLmNoZWNrREJMb2ModGhlVVJMKTtcclxuXHJcbiAgICAgIFxyXG4gICAgICAgIHRoaXMuaHR0cE9wdGlvbnMgPSB7XHJcbiAgICAgICAgICBoZWFkZXJzOiBuZXcgSHR0cEhlYWRlcnMoe1xyXG4gICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG4gICAgICAgICAgICAnYXV0aG9yaXphdGlvbic6IHRoaXMuU3RyQXV0aFxyXG5cclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgfTtcclxuICAgICAgICByZXR1cm4gdGhpcy5odHRwXHJcbiAgICAgIC5nZXQoYCR7dGhlVVJMfWAsIHRoaXMuaHR0cE9wdGlvbnMpXHJcbiAgICAgICAgICAgIC5waXBlKFxyXG4gICAgICAgICAgICAgICAgY2F0Y2hFcnJvcigoZXJyKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRocm93RXJyb3IoZXJyKTtcclxuICAgICAgICAgICAgICAgICAgfSksXHJcbiAgICAgICAgbWFwKChyZXNwb25zZTphbnkpID0+ICg8R3JpZERhdGFSZXN1bHQ+eyBkYXRhOiByZXNwb25zZVsnZGF0YSddIH1cclxuICAgICAgICAgICAgICAgICAgKSksXHJcbiAgICAgICAgICAgICAgICB0YXAoZGF0YSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgIGlmICh0aGlzLnBhcmFtQ29uZmlnLkRFQlVHX0ZMQUcpIGNvbnNvbGUubG9nKFwic3RhdHVzIGRhdGE6IFwiLCBkYXRhKTtcclxuICAgICAgICAgICAgICAgICAgdGhpcy5sb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgIGlmICh0aGlzLnBhcmFtQ29uZmlnLkRFQlVHX0ZMQUcpIGNvbnNvbGUubG9nKFwidGVzdDp0aGlzLnJ1bGVzUG9zdFF1ZXJ5RGVmXCIsIHRoaXMucnVsZXNQb3N0UXVlcnlEZWYpXHJcbiAgICAgICAgICAgIGxldCBzdGF0dXNSZWM6YW55ID0ge307XHJcbiAgICAgICAgICBzdGF0dXNSZWMgPSB0aGlzLmNoZWNrUnVsZXMob2JqZWN0LCB0aGlzLnJ1bGVzUG9zdFF1ZXJ5RGVmLCBkYXRhLFwiUE9TVF9RVUVSWVwiKTtcclxuICAgICAgICAgIGlmICh0aGlzLnBhcmFtQ29uZmlnLkRFQlVHX0ZMQUcpIGNvbnNvbGUubG9nKFwic3RhdHVzUmVjOnBvc3Q6UE9TVF9RVUVSWTpmZXRjaDpcIiwgc3RhdHVzUmVjLCBzdGF0dXNSZWNbJ3N0YXR1cyddKTtcclxuICAgICAgICAgIGlmIChzdGF0dXNSZWNbJ3N0YXR1cyddICA9PSAtMSl7XHJcbiAgICAgICAgICAgIHRoaXMuc2hvd05vdGlmaWNhdGlvbiAoXCJlcnJvclwiLFwiUnVsZTpcIiArIHN0YXR1c1JlY1snbXNnJ10gKTtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfSlcclxuICAgICAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgIC8qIHB1YmxpYyByZW1vdmUoIHBhZ2U6IGFueSk6T2JzZXJ2YWJsZTxhbnk+IHtcclxuICAgICAgICB0aGlzLmRlbGV0ZShwYWdlKVxyXG4gICAgICAgICAgIC5zdWJzY3JpYmUoKHg6YW55KSA9PiBzdXBlci5uZXh0KHgpKTtcclxuXHJcbiAgICAgICAgICAgIHJldHVybiAwO1xyXG4gICAgfVxyXG4qL1xyXG5wdWJsaWMgZGVsZXRlKFBhZ2U6IHN0cmluZyk6IE9ic2VydmFibGU8R3JpZERhdGFSZXN1bHQ+IHtcclxuICAgICAgICAvL2NvbnN0IHF1ZXJ5U3RyID0gYCR7dG9PRGF0YVN0cmluZyhzdGF0ZSl9JiRjb3VudD10cnVlYDtcclxuICAgICAgICBjb25zdCBxdWVyeVN0ciA9IGBgO1xyXG4gICAgICAgIHRoaXMubG9hZGluZyA9IHRydWU7XHJcbiAgICAgICAgbGV0IHRoZVVSTCA9IGAke3RoaXMuQkFTRV9VUkx9JHtQYWdlfWA7XHJcbiAgICAgICAgdGhlVVJMID0gdGhpcy5jaGVja0RCTG9jKHRoZVVSTCk7XHJcblxyXG4gICAgICAgIHRoaXMuaHR0cE9wdGlvbnMgPSB7XHJcbiAgICAgICAgICBoZWFkZXJzOiBuZXcgSHR0cEhlYWRlcnMoe1xyXG4gICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG4gICAgICAgICAgICAnYXV0aG9yaXphdGlvbic6IHRoaXMuU3RyQXV0aFxyXG5cclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gdGhpcy5odHRwXHJcbiAgICAgICAgICAgIC5kZWxldGU8YW55PihgJHt0aGVVUkx9YCwgdGhpcy5odHRwT3B0aW9ucylcclxuICAgICAgICAgICAgLnBpcGUoXHJcbiAgICAgICAgICAgICAgICBjYXRjaEVycm9yKChlcnIpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhyb3dFcnJvcihlcnIpO1xyXG4gICAgICAgICAgICAgICAgICB9KSxcclxuXHJcbiAgICAgICAgbWFwKChyZXNwb25zZTphbnkpID0+ICg8R3JpZERhdGFSZXN1bHQ+eyBkYXRhOiByZXNwb25zZVsnZGF0YSddIH1cclxuICAgICAgICAgICAgICAgICkpLFxyXG5cclxuICAgICAgICAgICAgICAgIHRhcCgoKSA9PiB0aGlzLmxvYWRpbmcgPSBmYWxzZSlcclxuICAgICAgICAgICAgKTtcclxuICAgIH1cclxuICBwdWJsaWMgcG9zdF9kZWxldGUoUGFnZTogc3RyaW5nLCBCb2R5OiBhbnkpOiBPYnNlcnZhYmxlPEdyaWREYXRhUmVzdWx0PiB7XHJcbiAgICAgICAgLy9jb25zdCBxdWVyeVN0ciA9IGAke3RvT0RhdGFTdHJpbmcoc3RhdGUpfSYkY291bnQ9dHJ1ZWA7XHJcbiAgICAgICAgY29uc3QgcXVlcnlTdHIgPSBgYDtcclxuICAgICAgICB0aGlzLmxvYWRpbmcgPSB0cnVlO1xyXG4gICAgICAgIC8vaWYgKHRoaXMucGFyYW1Db25maWcuREVCVUdfRkxBRykgY29uc29sZS5sb2coXCJwb3N0OlBhZ2U6XCIsUGFnZSxcIiBCb2R5OlwiLEJvZHkpXHJcblxyXG4gICAgICAgIGxldCB0aGVVUkwgPSBgJHt0aGlzLkJBU0VfVVJMfSR7UGFnZX1gO1xyXG4gICAgICAgIHRoaXMuaHR0cE9wdGlvbnMgPSB7XHJcbiAgICAgICAgICBoZWFkZXJzOiBuZXcgSHR0cEhlYWRlcnMoe1xyXG4gICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG4gICAgICAgICAgICAnYXV0aG9yaXphdGlvbic6IHRoaXMuU3RyQXV0aFxyXG5cclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vaWYgKHRoaXMucGFyYW1Db25maWcuREVCVUdfRkxBRykgY29uc29sZS5sb2coXCJ0aGlzLlN0ckF1dGg6XCIgKyB0aGlzLlN0ckF1dGgpO1xyXG4gICAgICAgIHJldHVybiB0aGlzLmh0dHBcclxuICAgICAgICAgICAgLnBvc3Q8YW55PihgJHt0aGVVUkx9YCwgQm9keSwgdGhpcy5odHRwT3B0aW9ucylcclxuICAgICAgICAgICAgLnBpcGUoXHJcbiAgICAgICAgICAgICAgICBjYXRjaEVycm9yKChlcnIpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhyb3dFcnJvcihlcnIpO1xyXG4gICAgICAgICAgICAgICAgICB9KSxcclxuXHJcbiAgICAgICAgbWFwKChyZXNwb25zZTphbnkpID0+ICg8R3JpZERhdGFSZXN1bHQ+eyBkYXRhOiByZXNwb25zZVsnZGF0YSddIH1cclxuICAgICAgICAgICAgICAgICkpLFxyXG4gICAgICAgICAgICAgICAgdGFwKGRhdGEgPT4ge1xyXG4gICAgICAgICAgICAgICAgICBpZiAodGhpcy5wYXJhbUNvbmZpZy5ERUJVR19GTEFHKSBjb25zb2xlLmxvZyhcInN0YXR1cyBkYXRhOlwiLCBkYXRhKTtcclxuICAgICAgICAgICAgICAgICAgdGhpcy5sb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgfSlcclxuXHJcblxyXG4gICAgICAgICAgICApO1xyXG4gICAgfVxyXG4gICAgcHVibGljIHNob3dEYWlsb2dFcnIoZXJyb3Ipe1xyXG4gICAgICBsZXQgTXNnID0gZXJyb3IuZXJyb3I7XHJcbiAgICAgIC8vY29uc29sZS5sb2coXCJNc2c6XCIsIE1zZyk7XHJcbiAgICAgIGxldCBwb3NpdGlvbiA9IE1zZy5zZWFyY2goXCJVTklRVUUgY29uc3RyYWludFwiKTtcclxuICAgICAgaWYgKHBvc2l0aW9uICE9IC0xIClcclxuICAgICAgICBNc2cgPSB0aGlzLmdldE5MUyhbXSwnQUxSRUFEWV9FWElTVFMnLCdSZWNvcmQgYWxyZWFkeSBleGlzdHMnKVxyXG4gICAgICB2YXIgZGlhbG9nU3RydWMgPSB7XHJcbiAgICAgICAgbXNnOiBNc2csXHJcbiAgICAgICAgdGl0bGU6IFwiRXJyb3JcIixcclxuICAgICAgICBpbmZvOiBudWxsLFxyXG4gICAgICAgIG9iamVjdDogdGhpcyxcclxuICAgICAgICBhY3Rpb246IHRoaXMuT2tBY3Rpb25zLFxyXG4gICAgICAgIGNhbGxiYWNrOiBudWxsXHJcbiAgICAgIH07XHJcbiAgICAgIHRoaXMuc2hvd0NvbmZpcm1hdGlvbihkaWFsb2dTdHJ1Yyk7XHJcbiAgXHJcbiAgICB9XHJcbiAgcHVibGljIHN5bmNGbGFnID0gMDtcclxuICBwdWJsaWMgcG9zdChvYmplY3Q6YW55LCBQYWdlOiBzdHJpbmcsIEJvZHk6IGFueSk6IE9ic2VydmFibGU8R3JpZERhdGFSZXN1bHQ+IHtcclxuICAgICAgLy9jb25zdCBxdWVyeVN0ciA9IGAke3RvT0RhdGFTdHJpbmcoc3RhdGUpfSYkY291bnQ9dHJ1ZWA7XHJcbiAgICAgIGNvbnN0IHF1ZXJ5U3RyID0gYGA7XHJcbiAgICAgIHRoaXMubG9hZGluZyA9IHRydWU7XHJcbiAgICAvL2lmICh0aGlzLnBhcmFtQ29uZmlnLkRFQlVHX0ZMQUcpIFxyXG4gICAgLy9jb25zb2xlLmxvZyhcInBvc3QgOlBhZ2U6XCIsUGFnZSxcIiBCb2R5OlwiLEJvZHkpXHJcbiAgICAvLyBpZiAoUGFnZT09XCJcIiAmJiBCb2R5Lmxlbmd0aCA9PSAwKVxyXG4gICAgLy8gICBjb25zb2xlLmxvZyhcInBvc3QgZW1wdHk6UGFnZTpcIixQYWdlWydkdW0nXS5sZW5ndGgsXCIgQm9keTpcIixCb2R5KVxyXG4gICAgbGV0IHN0YXR1c1JlYzphbnkgPSB7fTtcclxuICAgIHN0YXR1c1JlYyA9IHRoaXMuY2hlY2tSdWxlcyhvYmplY3QsIHRoaXMucnVsZXNQcmVRdWVyeURlZiwgQm9keSxcIlBSRV9RVUVSWVwiKTtcclxuICAgIGlmICh0aGlzLnBhcmFtQ29uZmlnLkRFQlVHX0ZMQUcpIGNvbnNvbGUubG9nKFwic3RhdHVzUmVjOnBvc3Q6UFJFX1FVRVJZXCIsIHN0YXR1c1JlYywgc3RhdHVzUmVjWydzdGF0dXMnXSk7XHJcbiAgICBpZiAoc3RhdHVzUmVjWydzdGF0dXMnXSAgPT0gLTEpe1xyXG4gICAgICBpZiAodGhpcy5wYXJhbUNvbmZpZy5ERUJVR19GTEFHKSBjb25zb2xlLmxvZyhcInN0YXR1c1JlYzogZm91bmQgLTFcIik7XHJcbiAgICAgIHRoaXMuc2hvd05vdGlmaWNhdGlvbiAoXCJlcnJvclwiLFwiUnVsZTpcIiArIHN0YXR1c1JlY1snbXNnJ10gKTtcclxuICAgICAgQm9keVswXS5fUVVFUlkgPSBcIlwiO1xyXG4gICAgfVxyXG5cclxuICAgICAgbGV0IHRoZVVSTCA9IGAke3RoaXMuQkFTRV9VUkx9JHtQYWdlfWA7XHJcbiAgICAgIHRoZVVSTCA9IHRoaXMuY2hlY2tEQkxvYyh0aGVVUkwpO1xyXG4gICAgICB0aGlzLmh0dHBPcHRpb25zID0ge1xyXG4gICAgICAgIGhlYWRlcnM6IG5ldyBIdHRwSGVhZGVycyh7XHJcbiAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG4gICAgICAgICAgJ2F1dGhvcml6YXRpb24nOiB0aGlzLlN0ckF1dGhcclxuXHJcbiAgICAgICAgfSlcclxuICAgICAgfVxyXG4gICAgICBjb25zb2xlLmxvZyhcInBvc3Q6dGhlVVJMOlwiLCB0aGVVUkwsIFwiQm9keTpcIiwgQm9keSk7XHJcbiAgICAgIC8vaWYgKHRoaXMucGFyYW1Db25maWcuREVCVUdfRkxBRykgY29uc29sZS5sb2coXCJ0aGlzLlN0ckF1dGg6XCIgLCB0aGlzLlN0ckF1dGggLCB0aGVVUkwpO1xyXG4gICAgICAvL2lmICh0aGlzLnBhcmFtQ29uZmlnLkRFQlVHX0ZMQUcpIGNvbnNvbGUubG9nKFwidGhpcy5TdHJBdXRoOiB3aXRoIFVSTFwiICwgdGhpcy5TdHJBdXRoICwgdGhlVVJMKTtcclxuICAgICAgcmV0dXJuIHRoaXMuaHR0cFxyXG4gICAgICAgICAgLnBvc3Q8YW55PihgJHt0aGVVUkx9YCwgQm9keSwgdGhpcy5odHRwT3B0aW9ucylcclxuICAgICAgICAgIC5waXBlKFxyXG4gICAgICAgICAgICAgIGNhdGNoRXJyb3IoKGVycikgPT4ge1xyXG4gICAgICAgICAgY29uc29sZS5sb2coXCJzdGF0dXNSZWNbJ21zZyddIDpcIiwgc3RhdHVzUmVjWydtc2cnXSwgXCIgZXJyLmVycm9yIDpcIiwgZXJyLmVycm9yICApXHJcbiAgICAgICAgICBpZiAoICh0eXBlb2Ygc3RhdHVzUmVjWydtc2cnXSAhPSBcInVuZGVmaW5lZFwiKSAmJiAoc3RhdHVzUmVjWydtc2cnXSAhPSBcIlwiKSkge1xyXG4gICAgICAgICAgLy9pZiAoIChzdGF0dXNSZWNbJ21zZyddICE9IFwiXCIpKSB7XHJcbiAgICAgICAgICAgIGlmICh0eXBlb2YgZXJyLmVycm9yID09IFwidW5kZWZpbmVkXCIpe1xyXG4gICAgICAgICAgICAgIGVyciA9IHN0YXR1c1JlY1snbXNnJ107XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICAgIGVyci5lcnJvci5lcnJvciA9ICBzdGF0dXNSZWNbJ21zZyddO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgdGhpcy5zaG93RGFpbG9nRXJyKGVyci5lcnJvcik7XHJcbiAgICAgICAgICAgICAgICAgIHJldHVybiB0aHJvd0Vycm9yKGVycik7XHJcbiAgICAgICAgICAgICAgICB9KSxcclxuXHJcbiAgICAgICAgbWFwKChyZXNwb25zZTphbnkpID0+ICg8R3JpZERhdGFSZXN1bHQ+eyBkYXRhOiByZXNwb25zZVsnZGF0YSddIH1cclxuICAgICAgICAgICAgICApKSxcclxuICAgICAgICAgICAgICB0YXAoZGF0YSA9PiB7XHJcbiAgICAgICAgICAgICAgICAvL2lmICh0aGlzLnBhcmFtQ29uZmlnLkRFQlVHX0ZMQUcpIGNvbnNvbGUubG9nKFwic3RhdHVzIGRhdGE6XCIsIGRhdGEpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5sb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICBpZiAodGhpcy5wYXJhbUNvbmZpZy5ERUJVR19GTEFHKSBjb25zb2xlLmxvZyhcInRlc3Q6dGhpcy5ydWxlc1Bvc3RRdWVyeURlZlwiLCB0aGlzLnJ1bGVzUG9zdFF1ZXJ5RGVmKVxyXG4gICAgICAgICAgICAgICAgdGhpcy5zeW5jRmxhZyA9IDA7XHJcbiAgICAgICAgICBsZXQgc3RhdHVzUmVjOmFueSA9IHt9O1xyXG4gICAgICAgICAgICAgICAgc3RhdHVzUmVjID0gdGhpcy5jaGVja1J1bGVzKG9iamVjdCwgdGhpcy5ydWxlc1Bvc3RRdWVyeURlZiwgZGF0YSxcIlBPU1RfUVVFUllcIik7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5wYXJhbUNvbmZpZy5ERUJVR19GTEFHKSBjb25zb2xlLmxvZyhcInN0YXR1c1JlYzpwb3N0OlBPU1RfUVVFUllcIiwgc3RhdHVzUmVjLCBzdGF0dXNSZWNbJ3N0YXR1cyddKVxyXG4gICAgICAgICAgICAgICAgaWYgKHN0YXR1c1JlY1snc3RhdHVzJ10gID09IC0xKXtcclxuICAgICAgICAgICAgICAgICAgdGhpcy5zaG93Tm90aWZpY2F0aW9uIChcImVycm9yXCIsXCJSdWxlOlwiICsgc3RhdHVzUmVjWydtc2cnXSApO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuXHJcblxyXG4gICAgICAgIH0pXHJcblxyXG5cclxuICAgICAgICAgICk7XHJcbiAgfVxyXG4gXHJcbiAgXHJcbiAgICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4gIHB1YmxpYyBwb3N0VXBsb2FkKFBhZ2U6IHN0cmluZywgQm9keTogYW55KTogT2JzZXJ2YWJsZTxHcmlkRGF0YVJlc3VsdD4ge1xyXG4gICAgICAvL2NvbnN0IHF1ZXJ5U3RyID0gYCR7dG9PRGF0YVN0cmluZyhzdGF0ZSl9JiRjb3VudD10cnVlYDtcclxuICAgICAgY29uc3QgcXVlcnlTdHIgPSBgYDtcclxuICAgICAgdGhpcy5sb2FkaW5nID0gdHJ1ZTtcclxuXHJcbiAgICAgIGxldCB0aGVVUkwgPSBQYWdlO1xyXG4gICAgICB0aGlzLmh0dHBPcHRpb25zID0ge1xyXG4gICAgICAgIGhlYWRlcnM6IG5ldyBIdHRwSGVhZGVycyh7XHJcbiAgICAgICAgICAnYXV0aG9yaXphdGlvbic6IHRoaXMuU3RyQXV0aFxyXG5cclxuICAgICAgICB9KVxyXG4gICAgICB9XHJcbiAgICAgIC8vaWYgKHRoaXMucGFyYW1Db25maWcuREVCVUdfRkxBRykgY29uc29sZS5sb2coXCJ0aGlzLlN0ckF1dGg6XCIgKyB0aGlzLlN0ckF1dGgpO1xyXG4gICAgICByZXR1cm4gdGhpcy5odHRwXHJcbiAgICAgICAgICAucG9zdDxhbnk+KGAke3RoZVVSTH1gLCBCb2R5LCB0aGlzLmh0dHBPcHRpb25zKVxyXG4gICAgICAgICAgLnBpcGUoXHJcbiAgICAgICAgICAgICAgY2F0Y2hFcnJvcigoZXJyKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgIHJldHVybiB0aHJvd0Vycm9yKGVycik7XHJcbiAgICAgICAgICAgICAgICB9KSxcclxuXHJcbiAgICAgICAgbWFwKChyZXNwb25zZTphbnkpID0+ICg8R3JpZERhdGFSZXN1bHQ+eyBkYXRhOiByZXNwb25zZVsnZGF0YSddIH1cclxuICAgICAgICAgICAgICApKSxcclxuXHJcbiAgICAgICAgICAgICAgdGFwKCgpID0+IHRoaXMubG9hZGluZyA9IGZhbHNlKVxyXG4gICAgICAgICAgKTtcclxuICB9XHJcbiAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHJcbiAgdXBsb2FkRmlsZShwYWdlOiBhbnksIGZpbGVzU2V0OiBTZXQ8RmlsZT4sIGlkOiBhbnkpOiBhbnkge1xyXG4gICAgZmlsZXNTZXQuZm9yRWFjaChmaWxlID0+IHtcclxuICAgICAgLy8gY3JlYXRlIGEgbmV3IG11bHRpcGFydC1mb3JtIGZvciBldmVyeSBmaWxlXHJcbiAgICAgIGNvbnN0IGZvcm1kYXRhOiBGb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSgpO1xyXG4gICAgICBmb3JtZGF0YS5hcHBlbmQoJ2ZpbGUnLCBmaWxlKTtcclxuICAgICAgZm9ybWRhdGEuYXBwZW5kKCdpZCcsIGlkKTtcclxuICAgICAgaWYgKHRoaXMucGFyYW1Db25maWcuREVCVUdfRkxBRykgY29uc29sZS5sb2coXCJ1cGxvYWRGaWxlIHBhZ2U6XCIgKyBwYWdlKVxyXG4gICAgICBsZXQgYXBpVVJMID0gdGhpcy5TRVJWRVJfVVJMICsgJy9hcGkvYXR0JyArIHBhZ2U7XHJcbiAgICAgIGlmICh0aGlzLnBhcmFtQ29uZmlnLkRFQlVHX0ZMQUcpIGNvbnNvbGUubG9nKFwiYXBpVVJMOlwiICsgYXBpVVJMKTtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMucGFyYW1Db25maWcuREVCVUdfRkxBRykgY29uc29sZS5sb2coZm9ybWRhdGEpO1xyXG4gICAgICAvL2Zvcm1kYXRhLmZvckVhY2goZW50cmllcyA9PiBjb25zb2xlLmxvZyhKU09OLnN0cmluZ2lmeShlbnRyaWVzKSkpO1xyXG5cclxuICAgICAgICB0aGlzLnBvc3RVcGxvYWQoYXBpVVJMLCBmb3JtZGF0YSkuc3Vic2NyaWJlKHJlc3VsdCA9PiB7XHJcbiAgICAgICAgaWYgKHRoaXMucGFyYW1Db25maWcuREVCVUdfRkxBRykgY29uc29sZS5sb2coJ3Jlc3VsdCcsIHJlc3VsdCk7XHJcbiAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG5cclxuXHJcbiB9XHJcblxyXG4gIHVwbG9hZEZpbGVPbGQoZmlsZTogRmlsZSk6IGFueSB7XHJcbiAgICBjb25zdCBmb3JtZGF0YTogRm9ybURhdGEgPSBuZXcgRm9ybURhdGEoKTtcclxuICAgIGZvcm1kYXRhLmFwcGVuZCgnZmlsZScsIGZpbGUpOyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL3RoZSB1cGxvYWRlZCBmaWxlIGNvbnRlbnRcclxuICAgIGZvcm1kYXRhLmFwcGVuZCgnZG9jdW1lbnRWZXJzaW9uSWQnLCAnMTIzJyk7ICAgICAgIC8vSSBuZWVkIHRvIHBhc3Mgc29tZSBhZGRpdGlvbmFsIGluZm8gdG8gdGhlIHNlcnZlciBiZXNpZGVzIHRoZSBGaWxlIGRhdGFcclxuICAgIGxldCBhcGlVUkwgPSB0aGlzLlNFUlZFUl9VUkwgKyAnL2FwaT91cGxvYWQ9eSc7XHJcbiAgICBpZiAodGhpcy5wYXJhbUNvbmZpZy5ERUJVR19GTEFHKSBjb25zb2xlLmxvZyhcImFwaVVSTDpcIiArIGFwaVVSTCk7XHJcblxyXG4gICAgaWYgKHRoaXMucGFyYW1Db25maWcuREVCVUdfRkxBRykgY29uc29sZS5sb2coZm9ybWRhdGEpO1xyXG4gICAgZm9ybWRhdGEuZm9yRWFjaChlbnRyaWVzID0+IGNvbnNvbGUubG9nKEpTT04uc3RyaW5naWZ5KGVudHJpZXMpKSk7XHJcblxyXG5cclxuICAgIC8vY29uc3QgYXBpVVJMID0gdGhpcy5hcGlfcGF0aCArICdVcGxvYWQnOyAgICAgLy9jYWxsaW5nIGh0dHA6Ly9sb2NhbGhvc3Q6NTIzMzMvYXBpL1VwbG9hZENvbnRyb2xsZXJcclxuXHJcbiAgICB0aGlzLnBvc3RVcGxvYWQoYXBpVVJMLCBmb3JtZGF0YSkuc3Vic2NyaWJlKHJlc3VsdCA9PiB7XHJcbiAgICAgIGlmICh0aGlzLnBhcmFtQ29uZmlnLkRFQlVHX0ZMQUcpIGNvbnNvbGUubG9nKCdyZXN1bHQnLCByZXN1bHQpO1xyXG4gICAgfSk7XHJcbiAgICAvKmNvbnN0IHVwbG9hZFJlcSA9IG5ldyBIdHRwUmVxdWVzdCgnUE9TVCcsIGFwaVVSTCwgZm9ybWRhdGEsIHtcclxuICAgICAgIHJlcG9ydFByb2dyZXNzOiB0cnVlXHJcbiAgICB9KTtcclxuICAgIHRoaXMuaHR0cGNsaWVudC5yZXF1ZXN0KHVwbG9hZFJlcSkuc3Vic2NyaWJlKGV2ZW50ID0+IHtcclxuICAgICAgIGlmIChldmVudC50eXBlID09PSBIdHRwRXZlbnRUeXBlLlVwbG9hZFByb2dyZXNzKSB7XHJcbiAgICAgICAgICAgdGhpcy5wcm9ncmVzcyA9IE1hdGgucm91bmQoMTAwICogZXZlbnQubG9hZGVkIC8gZXZlbnQudG90YWwpO1xyXG4gICAgICAgfVxyXG4gICB9KTtcclxuICAgKi9cclxuXHJcbiB9XHJcblxyXG5cclxuICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4gICAgcHVibGljIGhhc0NoYW5nZXMoKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIEJvb2xlYW4odGhpcy5kZWxldGVkSXRlbXMubGVuZ3RoIHx8IHRoaXMudXBkYXRlZEl0ZW1zLmxlbmd0aCB8fCB0aGlzLmNyZWF0ZWRJdGVtcy5sZW5ndGgpO1xyXG4gICAgfVxyXG4gIHByaXZhdGUgYWRkVG9Cb2R5KE5ld1ZhbDphbnksIEJvZHk6YW55KSB7XHJcbiAgICAgICAgQm9keS5wdXNoKE5ld1ZhbCk7XHJcbiAgICAgICAvLyBpZiAodGhpcy5wYXJhbUNvbmZpZy5ERUJVR19GTEFHKSBjb25zb2xlLmxvZygnTmV3VmFsIDogSEYgUGxlYXNlJyAgKyBKU09OLnN0cmluZ2lmeShOZXdWYWwpKTtcclxuICAgICAgICByZXR1cm4gQm9keTtcclxuICAgICAgfVxyXG5cclxuXHJcblxyXG5cclxuXHJcbiAgcHVibGljIHNob3dOb3RpZmljYXRpb24oc3R5bGVOb3RlOiBhbnksIG1zZzogYW55KTogdm9pZCB7XHJcblxyXG4gICAgICBsZXQgaGlkZUFmdGVyID0gdGhpcy5oaWRlQWZ0ZXI7XHJcblxyXG4gICAgICBpZiAoc3R5bGVOb3RlID09IFwiZXJyb3JcIilcclxuICAgICAgICBoaWRlQWZ0ZXIgPSA1MDAwO1xyXG4gICAgICAgIHRoaXMubm90aWZpY2F0aW9uU2VydmljZS5zaG93KHtcclxuICAgICAgICAgICAgY29udGVudDogbXNnLFxyXG4gICAgICAgICAgICBjc3NDbGFzczogJ2J1dHRvbi1ub3RpZmljYXRpb24nLFxyXG4gICAgICAgICAgICBhbmltYXRpb246IHsgdHlwZTogJ2ZhZGUnLCBkdXJhdGlvbjogMjAwIH0sXHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiB7IGhvcml6b250YWw6ICdjZW50ZXInLCB2ZXJ0aWNhbDogJ2JvdHRvbScgfSxcclxuLy8gICAgICAgICAgICBzdGFja2luZzogeyBzdGFja2luZzogJ2Rvd24nIH0sXHJcbiAgICAgIHR5cGU6IHsgc3R5bGU6IHN0eWxlTm90ZSwgaWNvbjogdHJ1ZSB9LFxyXG4gICAgICAgICAgICAvL2Nsb3NhYmxlOiB0cnVlLFxyXG4gICAgICAgICAgICBoaWRlQWZ0ZXI6IGhpZGVBZnRlclxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gIHB1YmxpYyBnb1JlY29yZEFjdCh0YXJnZXQ6IGFueSwgb2JqZWN0OiBhbnkpOiB2b2lkIHtcclxuXHJcbiAgICAgICAgbGV0IHJlYztcclxuXHJcbiAgICBpZiAob2JqZWN0LnBhcmFtQ29uZmlnLkRFQlVHX0ZMQUcpIGNvbnNvbGUubG9nKHRhcmdldCk7XHJcbiAgICBpZiAob2JqZWN0LnBhcmFtQ29uZmlnLkRFQlVHX0ZMQUcpIGNvbnNvbGUubG9nKFwib2JqZWN0LkN1cnJlbnRSZWM6XCIgKyBvYmplY3QuQ3VycmVudFJlYyk7XHJcbiAgICBpZiAob2JqZWN0LnBhcmFtQ29uZmlnLkRFQlVHX0ZMQUcpIGNvbnNvbGUubG9nKG9iamVjdC5leGVjdXRlUXVlcnlyZXN1bHQpO1xyXG5cclxuICAgIGlmICh0YXJnZXQgPT0gXCJmaXJzdFwiKSB7XHJcbiAgICAgICAgICBvYmplY3QuQ3VycmVudFJlYyA9IDA7XHJcbiAgICAgICAgfVxyXG4gICAgZWxzZSBpZiAodGFyZ2V0ID09IFwibGFzdFwiKSB7XHJcbiAgICAgIG9iamVjdC5DdXJyZW50UmVjID0gb2JqZWN0LmV4ZWN1dGVRdWVyeXJlc3VsdC50b3RhbCAtIDE7XHJcbiAgICAgICAgfVxyXG4gICAgZWxzZSBpZiAodGFyZ2V0ID09IFwibmV4dFwiKSB7XHJcbiAgICAgICAgICBpZiAob2JqZWN0LkN1cnJlbnRSZWMgPCBvYmplY3QuZXhlY3V0ZVF1ZXJ5cmVzdWx0LnRvdGFsIC0gMSlcclxuICAgICAgICAgIG9iamVjdC5DdXJyZW50UmVjID0gb2JqZWN0LkN1cnJlbnRSZWMgKyAxO1xyXG4gICAgICAgIH1cclxuICAgIGVsc2UgaWYgKHRhcmdldCA9PSBcInByZXZcIikge1xyXG4gICAgICBpZiAob2JqZWN0LkN1cnJlbnRSZWMgPiAwKVxyXG4gICAgICAgICAgICBvYmplY3QuQ3VycmVudFJlYyA9IG9iamVjdC5DdXJyZW50UmVjIC0gMTtcclxuICAgICAgICB9XHJcbiAgICAgIGVsc2UgaWYgKHR5cGVvZiB0YXJnZXQgPT0gXCJudW1iZXJcIikge1xyXG4gICAgICAgICAgICAgIG9iamVjdC5DdXJyZW50UmVjID0gdGFyZ2V0O1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICByZWMgPSBvYmplY3QuZXhlY3V0ZVF1ZXJ5cmVzdWx0LmRhdGFbb2JqZWN0LkN1cnJlbnRSZWNdO1xyXG4gICAgaWYgKG9iamVjdC5wYXJhbUNvbmZpZy5ERUJVR19GTEFHKSBjb25zb2xlLmxvZyhcIi0tLS0tLXJlYzpcIiwgcmVjKTtcclxuICAgIGlmIChvYmplY3QucGFyYW1Db25maWcuREVCVUdfRkxBRykgY29uc29sZS5sb2cob2JqZWN0LmZvcm0uZ2V0UmF3VmFsdWUoKSk7XHJcbiAgICBpZiAodHlwZW9mIHJlYyAhPT0gXCJ1bmRlZmluZWRcIikge1xyXG4gICAgICAgICAgb2JqZWN0LmZvcm0ucGF0Y2hWYWx1ZShyZWMpO1xyXG4gICAgICAgICAgb2JqZWN0LmZvcm0ubWFya0FzUHJpc3RpbmUoKTtcclxuICAgICAgICAgIG9iamVjdC5mb3JtLm1hcmtBc1VudG91Y2hlZCgpO1xyXG5cclxuICAgICAgICAgIC8vb2JqZWN0LmZvcm0ucmVzZXQocmVjLCB7ZW1pdEV2ZW50OiBvYmplY3QuZW1pdEV2ZW50ICE9IG51bGwgPyBvYmplY3QuZW1pdEV2ZW50IDogdHJ1ZX0pO1xyXG4gICAgICAgICAgaWYgKG9iamVjdC5kaXNhYmxlRW1pdFJlYWRDb21wbGV0ZWQgIT0gdHJ1ZSlcclxuICAgICAgICAgICAgb2JqZWN0LnJlYWRDb21wbGV0ZWRPdXRwdXQuZW1pdChvYmplY3QuZm9ybS5nZXRSYXdWYWx1ZSgpKTtcclxuICAgICAgaWYgKG9iamVjdC5wYXJhbUNvbmZpZy5ERUJVR19GTEFHKSBjb25zb2xlLmxvZyhcIkFUVDpvYmplY3QuY2FsbEJhY2tGdW5jdGlvbjpcIiwgb2JqZWN0LmNhbGxCYWNrRnVuY3Rpb24pXHJcbiAgICAgIGlmICh0eXBlb2Ygb2JqZWN0LmNhbGxCYWNrRnVuY3Rpb24gIT09IFwidW5kZWZpbmVkXCIpXHJcbiAgICAgICAgICAgIG9iamVjdC5jYWxsQmFja0Z1bmN0aW9uKHJlYyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2VcclxuICAgICAgICAgIG9iamVjdC5jbGVhckNvbXBsZXRlZE91dHB1dC5lbWl0KFtdKTtcclxuXHJcbiAgICB9XHJcbiAgcHVibGljIGdvUmVjb3JkKHRhcmdldDogYW55LCBvYmplY3Q6YW55KTogdm9pZCB7XHJcbiAgICBpZiAodHlwZW9mIG9iamVjdC5leGVjdXRlUXVlcnlyZXN1bHQgIT0gXCJ1bmRlZmluZWRcIikge1xyXG4gICAgICAgICAgaWYgKHRoaXMucGFyYW1Db25maWcuREVCVUdfRkxBRykgY29uc29sZS5sb2cob2JqZWN0LmZvcm0uZGlydHkpO1xyXG4gICAgICBpZiAob2JqZWN0LmZvcm0uZGlydHkgPT0gdHJ1ZSkge1xyXG4gICAgICAgICAgICBsZXQgZGlhbG9nU3RydWMgPSB7XHJcbiAgICAgICAgICAgICAgbXNnOiB0aGlzLnNhdmVDaGFuZ2VzTXNnLFxyXG4gICAgICAgICAgdGl0bGU6IHRoaXMucGxlYXNlQ29uZmlybU1zZyxcclxuICAgICAgICAgICAgICBpbmZvOiB0YXJnZXQsXHJcbiAgICAgICAgICBvYmplY3Q6IG9iamVjdCxcclxuICAgICAgICAgIGFjdGlvbjogdGhpcy5ZZXNOb0FjdGlvbnMsXHJcbiAgICAgICAgICBjYWxsYmFjazogdGhpcy5nb1JlY29yZEFjdFxyXG4gICAgICAgIH07XHJcbiAgICAgICAgICAgICAgdGhpcy5zaG93Q29uZmlybWF0aW9uKGRpYWxvZ1N0cnVjKTtcclxuICAgICAgICAgIH1cclxuICAgICAgZWxzZSB7XHJcbiAgICAgICAgdGhpcy5nb1JlY29yZEFjdCh0YXJnZXQsIG9iamVjdCk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgfVxyXG5cclxuICBwdWJsaWMgc2hvd0NvbmZpcm1hdGlvbihkaWFsb2dTdHJ1YzphbnkpIHtcclxuICAgICAgICBsZXQgZGlhbG9nUmVzdWx0O1xyXG4gICAgICAgICAgY29uc3QgZGlhbG9nOiBEaWFsb2dSZWYgPSB0aGlzLmRpYWxvZ1NlcnZpY2Uub3Blbih7XHJcbiAgICAgICAgICAgICAgdGl0bGU6IGRpYWxvZ1N0cnVjLnRpdGxlLFxyXG4gICAgICAgICAgICAgIGNvbnRlbnQ6IGRpYWxvZ1N0cnVjLm1zZyxcclxuICAgICAgICAgICAgICBhY3Rpb25zOiBkaWFsb2dTdHJ1Yy5hY3Rpb24sXHJcbiAgICAgICAgICAgICAgd2lkdGg6IDQ1MCxcclxuICAgICAgICAgICAgICBoZWlnaHQ6IDIwMCxcclxuICAgICAgICAgICAgICBtaW5XaWR0aDogMjUwXHJcbiAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICBkaWFsb2cucmVzdWx0LnN1YnNjcmliZSgocmVzdWx0KSA9PiB7XHJcbiAgICAgICAgICAgICAgaWYgKHJlc3VsdCBpbnN0YW5jZW9mIERpYWxvZ0Nsb3NlUmVzdWx0KSB7XHJcbiAgICAgICAgICAgICAgICAgIGlmICh0aGlzLnBhcmFtQ29uZmlnLkRFQlVHX0ZMQUcpIGNvbnNvbGUubG9nKCdjbG9zZScpO1xyXG4gICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgIGlmICh0aGlzLnBhcmFtQ29uZmlnLkRFQlVHX0ZMQUcpIGNvbnNvbGUubG9nKCdhY3Rpb24nLCByZXN1bHQpO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICBkaWFsb2dSZXN1bHQgPSBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KHJlc3VsdCkpO1xyXG4gICAgICBpZiAoZGlhbG9nUmVzdWx0LnByaW1hcnkgPT0gdHJ1ZSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKGRpYWxvZ1N0cnVjLmhhc093blByb3BlcnR5KCdjYWxsYmFjaycpKSB7XHJcbiAgICAgICAgICAgICAgICAgIGRpYWxvZ1N0cnVjLmNhbGxiYWNrKGRpYWxvZ1N0cnVjLmluZm8sIGRpYWxvZ1N0cnVjLm9iamVjdCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC8qKioqKioqKioqKioqKioqIEZvcm0gZnVuY3Rpb25zICoqKioqKioqKioqKioqL1xyXG4gIHB1YmxpYyBleGVjdXRlUXVlcnlfZm9ybShmb3JtOiBhbnksIG9iamVjdDphbnkpIHtcclxuICAgICAgICBpZiAodGhpcy5wYXJhbUNvbmZpZy5ERUJVR19GTEFHKSBjb25zb2xlLmxvZyhcInN0YXItc2VydmljZXMgZXhlY3V0ZVF1ZXJ5X2Zvcm0gb2JqZWN0LmZvcm06XCIpO1xyXG4gICAgaWYgKHRoaXMucGFyYW1Db25maWcuREVCVUdfRkxBRykgY29uc29sZS5sb2coXCJvYmplY3QuaXNTZWFyY2g6XCIgKyBvYmplY3QuaXNTZWFyY2gpXHJcbiAgICAgICAgLy9pZiAodGhpcy5wYXJhbUNvbmZpZy5ERUJVR19GTEFHKSBjb25zb2xlLmxvZyhvYmplY3QuZm9ybS5nZXRSYXdWYWx1ZSgpKTtcclxuICAgICAgICAvL2lmICh0aGlzLnBhcmFtQ29uZmlnLkRFQlVHX0ZMQUcpIGNvbnNvbGUubG9nKGZvcm0udmFsdWUpO1xyXG4gICAgaWYgKHR5cGVvZiBvYmplY3QuZm9ybSAhPT0gXCJ1bmRlZmluZWRcIikge1xyXG4gICAgICBpZiAoKG9iamVjdC5mb3JtLmRpcnR5ID09IHRydWUpICYmIChvYmplY3QuaXNTZWFyY2ggIT0gdHJ1ZSkpIHtcclxuICAgICAgICAgICAgbGV0IGRpYWxvZ1N0cnVjID0ge1xyXG4gICAgICAgICAgICAgIG1zZzogdGhpcy5zYXZlQ2hhbmdlc01zZyxcclxuICAgICAgICAgIHRpdGxlOiB0aGlzLnBsZWFzZUNvbmZpcm1Nc2csXHJcbiAgICAgICAgICAgICAgaW5mbzogZm9ybSxcclxuICAgICAgICAgIG9iamVjdDogb2JqZWN0LFxyXG4gICAgICAgICAgYWN0aW9uOiB0aGlzLlllc05vQWN0aW9ucyxcclxuICAgICAgICAgIGNhbGxiYWNrOiB0aGlzLmV4ZWN1dGVRdWVyeUFjdF9mb3JtXHJcbiAgICAgICAgfTtcclxuICAgICAgICAgICAgICB0aGlzLnNob3dDb25maXJtYXRpb24oZGlhbG9nU3RydWMpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICBlbHNlIHtcclxuICAgICAgICB0aGlzLmV4ZWN1dGVRdWVyeUFjdF9mb3JtKGZvcm0sIG9iamVjdCk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgIHRoaXMuZXhlY3V0ZVF1ZXJ5QWN0X2Zvcm0oZm9ybSwgb2JqZWN0KTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAvLyByb3V0aW5lX25hbWUgZnJvbSA6IGh0dHBzOi8vd3d3LnRlbGVyaWsuY29tL2tlbmRvLWFuZ3VsYXItdWkvY29tcG9uZW50cy9kYXRlaW5wdXRzL2RhdGVwaWNrZXIvaW50ZWdyYXRpb24td2l0aC1qc29uL1xyXG5cclxuICBwdWJsaWMgcGFyc2VUb0RhdGUoanNvbjogYW55KSB7XHJcbiAgICAvL2lmICh0aGlzLnBhcmFtQ29uZmlnLkRFQlVHX0ZMQUcpIGNvbnNvbGUubG9nKFwianNvbjppbjpcIiwganNvbilcclxuICAgICAgICBPYmplY3Qua2V5cyhqc29uKS5tYXAoa2V5ID0+IHtcclxuICAgICAgICAgIGxldCBWYWwxID0ganNvbltrZXldO1xyXG4gICAgICAvL2lmICh0aGlzLnBhcmFtQ29uZmlnLkRFQlVHX0ZMQUcpIGNvbnNvbGUubG9nKFwia2V5OlwiLCBrZXksIFZhbDEsIHR5cGVvZiBWYWwxKTtcclxuICAgICAgICAgIC8vbGV0IG4gPSBrZXkudG9VcHBlckNhc2UoKS5zZWFyY2goXCJEQVRFXCIpO1xyXG4gICAgICAgICAgLy9pZiAobiAhPSAtMSl7XHJcbiAgICAgIGlmICh0eXBlb2YgVmFsMSAhPSBcIm51bWJlclwiKSB7ICAgLy9pdCBpcyBub3QgYSBudW1iZXIsIGNoZWNrIG1vcmVcclxuICAgICAgICBpZiAoKFZhbDEgIT0gbnVsbCkgJiYgKFZhbDEubGVuZ3RoID4gNykpIHtcclxuICAgICAgICAgICAgICBjb25zdCBkYXRlID0gbmV3IERhdGUoVmFsMSk7XHJcbiAgICAgICAgICAgICAgbGV0IGNoZWNrWVlZWSA9IGlzTmFOKHBhcnNlSW50KFZhbDEuc3Vic3RyaW5nKDAsIDQpKSk7XHJcbiAgICAgICAgICAgICAgbGV0IHRpbWVWYWwgPSBkYXRlLmdldFRpbWUoKTtcclxuICAgICAgICAgIGlmICh0aGlzLnBhcmFtQ29uZmlnLkRFQlVHX0ZMQUcpIGNvbnNvbGUubG9nKFwidGltZVZhbDpcIiwgdGltZVZhbCwgaXNOYU4odGltZVZhbCkpO1xyXG4gICAgICAgICAgICAgIGlmICghaXNOYU4odGltZVZhbCkgJiYgKHRpbWVWYWwgPiAwKSAmJiAhY2hlY2tZWVlZKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5wYXJhbUNvbmZpZy5ERUJVR19GTEFHKSBjb25zb2xlLmxvZyhcIml0IGlzIGEgZGF0ZVwiKTtcclxuICAgICAgICAgICAgICAgIC8vaWYgKHRoaXMucGFyYW1Db25maWcuREVCVUdfRkxBRykgY29uc29sZS5sb2coXCJrZXk6XCIra2V5ICsgXCI6XCIgKyBkYXRlLmdldFRpbWUoKSk7XHJcbiAgICAgICAgICAgICAgICBqc29uW2tleV0gPSBkYXRlO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgLy9pZiAodGhpcy5wYXJhbUNvbmZpZy5ERUJVR19GTEFHKSBjb25zb2xlLmxvZyhcImpzb246b3V0OlwiLCBqc29uKVxyXG4gICAgICAgIHJldHVybiBqc29uO1xyXG4gICAgICB9XHJcbiAgcHVibGljIGRhdGVZWVlZTU1ERChvYmplY3Q6YW55LCBqc29uOiBhbnkpIHtcclxuICAgIGlmICh0aGlzLnBhcmFtQ29uZmlnLkRFQlVHX0ZMQUcpIGNvbnNvbGUubG9nKFwianNvbjpcIiwganNvbilcclxuICAgICAgICAgT2JqZWN0LmtleXMoanNvbikubWFwKGtleSA9PiB7XHJcbiAgICAgICAgICAgbGV0IG4gPSBrZXkudG9VcHBlckNhc2UoKS5zZWFyY2goXCJfREFURVwiKTtcclxuICAgICAgaWYgKG4gIT0gLTEpIHtcclxuICAgICAgICAgICAgbGV0IGRhdGVPcmcgPSBqc29uW2tleV07XHJcbiAgICAgICAgICAgICBsZXQgZGF0ZSA9IG5ldyBEYXRlKGpzb25ba2V5XSk7XHJcbiAgICAgICAgICAgICAvL2RhdGUgPSB0b0xvY2FsRGF0ZShkYXRlKTtcclxuICAgICAgICAgICAgIGxldCB0aW1lVmFsID0gZGF0ZS5nZXRUaW1lKCk7XHJcbiAgICAgICAgICAgICBpZiAoIWlzTmFOKHRpbWVWYWwpICYmICh0aW1lVmFsID4gMCkpIHtcclxuICAgICAgICAgICAgICAgLy9pZiAodGhpcy5wYXJhbUNvbmZpZy5ERUJVR19GTEFHKSBjb25zb2xlLmxvZyhcImtleTpcIitrZXkgKyBcIjpcIiArIGRhdGUuZ2V0VGltZSgpKTtcclxuICAgICAgICAgICAgICAgLy9sZXQgYXJyYXkgPSBkYXRlT3JnLnNwbGl0KFwiVFwiKVxyXG4gICAgICAgICAgZGF0ZU9yZyA9IGZvcm1hdERhdGUoZGF0ZU9yZywgb2JqZWN0LnBhcmFtQ29uZmlnLkRhdGVGb3JtYXQsIG9iamVjdC5wYXJhbUNvbmZpZy5kYXRlTG9jYWxlKVxyXG4gICAgICAgICAgICAgICBqc29uW2tleV0gPSBkYXRlT3JnO1xyXG4gICAgICAgICAgICAgfVxyXG4gICAgICAgICAgIH1cclxuICAgICAgICAgfSk7XHJcbiAgICAgICAgIHJldHVybiBqc29uO1xyXG4gICAgICAgfVxyXG4gcHVibGljIHNtYXJ0U3RyaW5nUHJvY2Vzc29yKGlucHV0U3RyaW5nOnN0cmluZywganNvbkRhdGE6eyBba2V5OiBzdHJpbmddOiBhbnkgfSkge1xyXG4gICAgZnVuY3Rpb24gcmVwbGFjZVZhcmlhYmxlc0luU3RyaW5nKGlucHV0U3RyaW5nOnN0cmluZywganNvbkRhdGE6eyBba2V5OiBzdHJpbmddOiBhbnkgfSkge1xyXG4gICAgICAgIC8vIENoZWNrIGlmIHN0cmluZyBjb250YWlucyBhbnkgdmFyaWFibGVzIChzdGFydHMgd2l0aCA6KVxyXG4gICAgICAgIGxldCB2YXJpYWJsZVBhdHRlcm46IFJlZ0V4cCA9IC86KFthLXpBLVpfXVthLXpBLVowLTlfXSopL2c7XHJcbiAgICAgICAgbGV0IGhhc1ZhcmlhYmxlczpib29sZWFuID0gdmFyaWFibGVQYXR0ZXJuLnRlc3QoaW5wdXRTdHJpbmcpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIC8vIElmIG5vIHZhcmlhYmxlcyBmb3VuZCwgcmV0dXJuIG9yaWdpbmFsIHN0cmluZ1xyXG4gICAgICAgIGlmICghaGFzVmFyaWFibGVzKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICBvcmlnaW5hbDogaW5wdXRTdHJpbmcsXHJcbiAgICAgICAgICAgICAgICByZXN1bHQ6IGlucHV0U3RyaW5nLFxyXG4gICAgICAgICAgICAgICAgcmVwbGFjZWQ6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgbWVzc2FnZTogXCJObyB2YXJpYWJsZXMgZm91bmQgLSByZXR1cm5pbmcgb3JpZ2luYWwgc3RyaW5nXCIsXHJcbiAgICAgICAgICAgICAgICB2YXJpYWJsZXNGb3VuZDogW11cclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8gUmVzZXQgcmVnZXggbGFzdEluZGV4IHNpbmNlIHdlIHVzZWQgdGVzdCgpIGFib3ZlXHJcbiAgICAgICAgdmFyaWFibGVQYXR0ZXJuLmxhc3RJbmRleCA9IDA7XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8gRmluZCBhbGwgdW5pcXVlIHZhcmlhYmxlc1xyXG4gICAgICAgIGxldCB2YXJpYWJsZXMgPSBuZXcgU2V0PHN0cmluZz4oKTtcclxuICAgICAgICBsZXQgbWF0Y2g7XHJcbiAgICAgICAgd2hpbGUgKChtYXRjaCA9IHZhcmlhYmxlUGF0dGVybi5leGVjKGlucHV0U3RyaW5nKSkgIT09IG51bGwpIHtcclxuICAgICAgICAgICAgdmFyaWFibGVzLmFkZChtYXRjaFsxXSk7IC8vIEFkZCB2YXJpYWJsZSBuYW1lIHdpdGhvdXQgY29sb25cclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8gUmVwbGFjZSB2YXJpYWJsZXMgd2l0aCB2YWx1ZXNcclxuICAgICAgICBsZXQgcmVzdWx0U3RyaW5nID0gaW5wdXRTdHJpbmc7XHJcbiAgICAgICAgbGV0IHJlcGxhY2VtZW50cyA9IHt9O1xyXG4gICAgICAgIGxldCBtaXNzaW5nVmFyaWFibGVzID0gW107XHJcbiAgICAgICAgXHJcbiAgICAgICAgdmFyaWFibGVzLmZvckVhY2godmFyaWFibGVOYW1lID0+IHtcclxuICAgICAgICAgICAgLy8gQ29udmVydCB2YXJpYWJsZSBuYW1lIHRvIHVwcGVyY2FzZSB0byBtYXRjaCBKU09OIGtleXMgKGNhc2UtaW5zZW5zaXRpdmUpXHJcbiAgICAgICAgICAgIGxldCBrZXkgPSBPYmplY3Qua2V5cyhqc29uRGF0YSkuZmluZChcclxuICAgICAgICAgICAgICAgIGsgPT4gay50b1VwcGVyQ2FzZSgpID09PSB2YXJpYWJsZU5hbWUudG9VcHBlckNhc2UoKVxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIlByb2Nlc3NpbmcgdmFyaWFibGU6IFwiICwgdmFyaWFibGVOYW1lLCBcIm1hdGNoZWQga2V5OlwiLCBrZXkgLCBcImpzb25EYXRhOlwiLCBqc29uRGF0YSk7XHJcbiAgICAgICAgICAgIGlmIChrZXkgIT09IHVuZGVmaW5lZCAmJiBqc29uRGF0YVtrZXldICE9PSB1bmRlZmluZWQgJiYganNvbkRhdGFba2V5XSAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgbGV0IHZhbHVlID0ganNvbkRhdGFba2V5XTtcclxuICAgICAgICAgICAgICAgIC8vIEZvcm1hdCB0aGUgdmFsdWUgcHJvcGVybHlcclxuICAgICAgICAgICAgICAgIGxldCBmb3JtYXR0ZWRWYWx1ZTtcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycpIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyBFc2NhcGUgc2luZ2xlIHF1b3RlcyBpbiBzdHJpbmdzXHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGVzY2FwZWRWYWx1ZSA9IHZhbHVlLnJlcGxhY2UoLycvZywgXCInJ1wiKTtcclxuICAgICAgICAgICAgICAgICAgICBmb3JtYXR0ZWRWYWx1ZSA9IGAnJHtlc2NhcGVkVmFsdWV9J2A7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ251bWJlcicpIHtcclxuICAgICAgICAgICAgICAgICAgICBmb3JtYXR0ZWRWYWx1ZSA9IHZhbHVlLnRvU3RyaW5nKCk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHZhbHVlIGluc3RhbmNlb2YgRGF0ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIEZvcm1hdCBkYXRlIGFzIFNRTCBkYXRlIHN0cmluZ1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCB5ZWFyID0gdmFsdWUuZ2V0RnVsbFllYXIoKTtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgbW9udGggPSBTdHJpbmcodmFsdWUuZ2V0TW9udGgoKSArIDEpLnBhZFN0YXJ0KDIsICcwJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGRheSA9IFN0cmluZyh2YWx1ZS5nZXREYXRlKCkpLnBhZFN0YXJ0KDIsICcwJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9ybWF0dGVkVmFsdWUgPSBgJyR7eWVhcn0tJHttb250aH0tJHtkYXl9J2A7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ2Jvb2xlYW4nKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9ybWF0dGVkVmFsdWUgPSB2YWx1ZSA/ICcxJyA6ICcwJztcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gRm9yIG90aGVyIHR5cGVzLCBjb252ZXJ0IHRvIHN0cmluZyBhbmQgcXVvdGVcclxuICAgICAgICAgICAgICAgICAgICBmb3JtYXR0ZWRWYWx1ZSA9IGAnJHtTdHJpbmcodmFsdWUpfSdgO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAvLyBSZXBsYWNlIEFMTCBvY2N1cnJlbmNlcyBvZiB0aGlzIHZhcmlhYmxlXHJcbiAgICAgICAgICAgICAgICBsZXQgdmFyaWFibGVSZWdleCA9IG5ldyBSZWdFeHAoYDoke3ZhcmlhYmxlTmFtZX1cXFxcYmAsICdnJyk7XHJcbiAgICAgICAgICAgICAgICByZXN1bHRTdHJpbmcgPSByZXN1bHRTdHJpbmcucmVwbGFjZSh2YXJpYWJsZVJlZ2V4LCBmb3JtYXR0ZWRWYWx1ZSk7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIHJlcGxhY2VtZW50c1t2YXJpYWJsZU5hbWVdID0ge1xyXG4gICAgICAgICAgICAgICAgICAgIG9yaWdpbmFsOiBgOiR7dmFyaWFibGVOYW1lfWAsXHJcbiAgICAgICAgICAgICAgICAgICAgcmVwbGFjZWRXaXRoOiBmb3JtYXR0ZWRWYWx1ZSxcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogdmFsdWUsXHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogdHlwZW9mIHZhbHVlXHJcbiAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgbWlzc2luZ1ZhcmlhYmxlcy5wdXNoKHZhcmlhYmxlTmFtZSk7XHJcbiAgICAgICAgICAgICAgICAvLyBLZWVwIHRoZSB2YXJpYWJsZSBhcyBpcyBpZiBub3QgZm91bmRcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIG9yaWdpbmFsOiBpbnB1dFN0cmluZyxcclxuICAgICAgICAgICAgcmVzdWx0OiByZXN1bHRTdHJpbmcsXHJcbiAgICAgICAgICAgIHJlcGxhY2VkOiB0cnVlLFxyXG4gICAgICAgICAgICByZXBsYWNlbWVudHM6IHJlcGxhY2VtZW50cyxcclxuICAgICAgICAgICAgdmFyaWFibGVzRm91bmQ6IEFycmF5LmZyb20odmFyaWFibGVzKSxcclxuICAgICAgICAgICAgbWlzc2luZ1ZhcmlhYmxlczogbWlzc2luZ1ZhcmlhYmxlcyxcclxuICAgICAgICAgICAgbWVzc2FnZTogbWlzc2luZ1ZhcmlhYmxlcy5sZW5ndGggPiAwIFxyXG4gICAgICAgICAgICAgICAgPyBgU29tZSB2YXJpYWJsZXMgbm90IGZvdW5kOiAke21pc3NpbmdWYXJpYWJsZXMuam9pbignLCAnKX1gXHJcbiAgICAgICAgICAgICAgICA6ICdBbGwgdmFyaWFibGVzIHJlcGxhY2VkIHN1Y2Nlc3NmdWxseSdcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG4gICAgLy8gRmlyc3QgY2hlY2sgaWYgaXQgbG9va3MgbGlrZSBhIFNRTCBXSEVSRSBjbGF1c2Ugd2l0aCB2YXJpYWJsZXNcclxuICAgICAgbGV0IGhhc1doZXJlQ2xhdXNlID0gaW5wdXRTdHJpbmcudG9VcHBlckNhc2UoKS5pbmNsdWRlcygnX1dIRVJFPScpO1xyXG4gICAgICBsZXQgaGFzVmFyaWFibGVzID0gLzpbYS16QS1aX11bYS16QS1aMC05X10qLy50ZXN0KGlucHV0U3RyaW5nKTtcclxuICAgICAgXHJcbiAgICAgIC8vIElmIGl0IGhhcyBXSEVSRSBidXQgbm8gdmFyaWFibGVzLCBpdCBtaWdodCBiZSBjb21wbGV0ZSBhbHJlYWR5XHJcbiAgICAgIGlmIChoYXNXaGVyZUNsYXVzZSAmJiAhaGFzVmFyaWFibGVzKSB7XHJcbiAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgIG9yaWdpbmFsOiBpbnB1dFN0cmluZyxcclxuICAgICAgICAgICAgICByZXN1bHQ6IGlucHV0U3RyaW5nLFxyXG4gICAgICAgICAgICAgIG5lZWRzUmVwbGFjZW1lbnQ6IGZhbHNlLFxyXG4gICAgICAgICAgICAgIHR5cGU6ICdjb21wbGV0ZV93aGVyZV9jbGF1c2UnLFxyXG4gICAgICAgICAgICAgIG1lc3NhZ2U6ICdXSEVSRSBjbGF1c2UgYXBwZWFycyBjb21wbGV0ZSAtIG5vIHZhcmlhYmxlcyB0byByZXBsYWNlJ1xyXG4gICAgICAgICAgfTtcclxuICAgICAgfVxyXG4gICAgICBcclxuICAgICAgLy8gT3RoZXJ3aXNlLCB0cnkgdG8gcmVwbGFjZSB2YXJpYWJsZXNcclxuICAgICAgbGV0IHJlcGxhY2VtZW50UmVzdWx0ID0gcmVwbGFjZVZhcmlhYmxlc0luU3RyaW5nKGlucHV0U3RyaW5nLCBqc29uRGF0YSk7XHJcbiAgICAgIFxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgLi4ucmVwbGFjZW1lbnRSZXN1bHQsXHJcbiAgICAgICAgICBuZWVkc1JlcGxhY2VtZW50OiByZXBsYWNlbWVudFJlc3VsdC5yZXBsYWNlZCxcclxuICAgICAgICAgIHR5cGU6IHJlcGxhY2VtZW50UmVzdWx0LnJlcGxhY2VkID8gJ3dpdGhfdmFyaWFibGVzJyA6ICdub192YXJpYWJsZXMnXHJcbiAgICAgIH07XHJcbiAgfVxyXG4gIHB1YmxpYyBwcm9jZXNzZm9ybWF0dGVkV2hlcmUob2JqZWN0LCBmb3JtYXR0ZWRXaGVyZSl7XHJcbiAgICBpZiAodGhpcy5zZXNzaW9uUGFyYW1zWydOQVZJR0FURV9EQVRBJ10gIT0gXCJ1bmRlZmluZWRcIil7XHJcbiAgICAgIHRoaXMuc2Vzc2lvblBhcmFtc1snTkFWSUdBVEVfREFUQSddID0ge307XHJcbiAgICAgIGxldCBuYXZEYXRhID0ge31cclxuICAgICAgZm9yIChsZXQgaSA9MCA7IGk8IG9iamVjdC5tYXN0ZXJLZXlOYW1lQXJyLmxlbmd0aDtpKyspe1xyXG4gICAgICAgICAgbmF2RGF0YVtvYmplY3QubWFzdGVyS2V5TmFtZUFycltpXV0gPSBvYmplY3QubWFzdGVyS2V5QXJyW2ldXHJcbiAgICAgIH1cclxuICAgICAgdGhpcy5zZXNzaW9uUGFyYW1zWydOQVZJR0FURV9EQVRBJ10gPSBuYXZEYXRhO1xyXG4gICAgfVxyXG4gICAgbGV0IHJlc3VsdCA9IHRoaXMuc21hcnRTdHJpbmdQcm9jZXNzb3IoZm9ybWF0dGVkV2hlcmUsIHRoaXMuc2Vzc2lvblBhcmFtc1snTkFWSUdBVEVfREFUQSddICk7XHJcbiAgICAgIGlmIChyZXN1bHQubmVlZHNSZXBsYWNlbWVudCA9PSB0cnVlICl7XHJcbiAgICAgICAgaWYgKHJlc3VsdC5tZXNzYWdlLnN0YXJ0c1dpdGggKFwiU29tZSB2YXJpYWJsZXMgbm90IGZvdW5kXCIpIClcclxuICAgICAgICAgIGZvcm1hdHRlZFdoZXJlID0gXCJcIjtcclxuICAgICAgICBlbHNlXHJcbiAgICAgICAgICBmb3JtYXR0ZWRXaGVyZSA9IHJlc3VsdC5yZXN1bHQ7XHJcbiAgICAgIH1cclxuICAgICAgY29uc29sZS5sb2cgKFwicHJvY2Vzc2Zvcm1hdHRlZFdoZXJlOnRoaXMuV2hlcmVDbGF1c2VcIiwgcmVzdWx0LCBmb3JtYXR0ZWRXaGVyZSApO1xyXG4gICAgdGhpcy5zZXNzaW9uUGFyYW1zWydOQVZJR0FURV9EQVRBJ10gPSB7fTtcclxuICAgIHJldHVybiBmb3JtYXR0ZWRXaGVyZTtcclxuICB9XHJcbiAgcHVibGljIHN0cmluZ2lmeU11bHRpU2VsZWN0RmllbGRzKG9iamVjdCxmb3JtKXtcclxuICAgIGxldCBmb3JtR3JvdXAgPSBmb3JtLnZhbHVlO1xyXG4gICAgaWYgKHR5cGVvZiBvYmplY3QubXVsdGlzZWxlY3RfYXJyICE9PSBcInVuZGVmaW5lZFwiKXtcclxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBvYmplY3QubXVsdGlzZWxlY3RfYXJyLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICBmb3JtR3JvdXBbb2JqZWN0Lm11bHRpc2VsZWN0X2FycltpXV0gPSBKU09OLnN0cmluZ2lmeShmb3JtR3JvdXBbb2JqZWN0Lm11bHRpc2VsZWN0X2FycltpXV0pO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBpZiAodHlwZW9mIG9iamVjdC5tdWx0aXNlbGVjdF90cmVlX2FyciAhPT0gXCJ1bmRlZmluZWRcIil7XHJcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgb2JqZWN0Lm11bHRpc2VsZWN0X3RyZWVfYXJyLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICBmb3JtR3JvdXBbb2JqZWN0Lm11bHRpc2VsZWN0X3RyZWVfYXJyW2ldXSA9IEpTT04uc3RyaW5naWZ5KGZvcm1Hcm91cFtvYmplY3QubXVsdGlzZWxlY3RfdHJlZV9hcnJbaV1dKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIGZvcm07XHJcbiAgIH1cclxuICBwdWJsaWMgZml4TXVsdGlTZWxlY3RGaWVsZHNfcmVzdWx0KG9iamVjdCwgcmVzdWx0KXtcclxuICAgIGlmICh0eXBlb2Ygb2JqZWN0Lm11bHRpc2VsZWN0X2FyciAhPT0gXCJ1bmRlZmluZWRcIil7XHJcbiAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG9iamVjdC5tdWx0aXNlbGVjdF9hcnIubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IHJlc3VsdC5kYXRhLmxlbmd0aDsgaisrKSB7XHJcbiAgICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgIHJlc3VsdC5kYXRhW2pdW29iamVjdC5tdWx0aXNlbGVjdF9hcnJbaV1dID0gSlNPTi5wYXJzZShyZXN1bHQuZGF0YVtqXVtvYmplY3QubXVsdGlzZWxlY3RfYXJyW2ldXSk7XHJcbiAgICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgaWYgKHR5cGVvZiBvYmplY3QubXVsdGlzZWxlY3RfdHJlZV9hcnIgIT09IFwidW5kZWZpbmVkXCIpe1xyXG4gICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBvYmplY3QubXVsdGlzZWxlY3RfdHJlZV9hcnIubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IHJlc3VsdC5kYXRhLmxlbmd0aDsgaisrKSB7XHJcbiAgICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgIHJlc3VsdC5kYXRhW2pdW29iamVjdC5tdWx0aXNlbGVjdF90cmVlX2FycltpXV0gPSBKU09OLnBhcnNlKHJlc3VsdC5kYXRhW2pdW29iamVjdC5tdWx0aXNlbGVjdF90cmVlX2FycltpXV0pO1xyXG4gICAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgfVxyXG4gICBwdWJsaWMgZml4TXVsdGlTZWxlY3RGaWVsZHNfTmV3VmFsKG9iamVjdCwgTmV3VmFsKXtcclxuICAgICBpZiAodHlwZW9mIG9iamVjdC5tdWx0aXNlbGVjdF9hcnIgIT09IFwidW5kZWZpbmVkXCIpe1xyXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG9iamVjdC5tdWx0aXNlbGVjdF9hcnIubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBpZiAoTmV3VmFsW29iamVjdC5tdWx0aXNlbGVjdF9hcnJbaV1dICE9IG51bGwgJiYgTmV3VmFsW29iamVjdC5tdWx0aXNlbGVjdF9hcnJbaV1dLmxlbmd0aCA+IDApe1xyXG4gICAgICAgICAgTmV3VmFsW29iamVjdC5tdWx0aXNlbGVjdF9hcnJbaV1dID0gSlNPTi5wYXJzZShOZXdWYWxbb2JqZWN0Lm11bHRpc2VsZWN0X2FycltpXV0pO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgaWYgKHR5cGVvZiBvYmplY3QubXVsdGlzZWxlY3RfYXJyICE9PSBcInVuZGVmaW5lZFwiKXtcclxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBvYmplY3QubXVsdGlzZWxlY3RfdHJlZV9hcnIubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBpZiAoTmV3VmFsW29iamVjdC5tdWx0aXNlbGVjdF90cmVlX2FycltpXV0gIT0gbnVsbCAmJiBOZXdWYWxbb2JqZWN0Lm11bHRpc2VsZWN0X3RyZWVfYXJyW2ldXS5sZW5ndGggPiAwKXtcclxuICAgICAgICAgIE5ld1ZhbFtvYmplY3QubXVsdGlzZWxlY3RfdHJlZV9hcnJbaV1dID0gSlNPTi5wYXJzZShOZXdWYWxbb2JqZWN0Lm11bHRpc2VsZWN0X3RyZWVfYXJyW2ldXSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgIH1cclxuICAgIHB1YmxpYyB0cmFuc2Zvcm1Gb3JUcmVlVmlldyhkYXRhKTogYW55W10ge1xyXG4gICAgY29uc3QgZ3JvdXBNYXAgPSBuZXcgTWFwPHN0cmluZywgYW55PigpO1xyXG5cclxuICAgIGRhdGEuZm9yRWFjaChpdGVtID0+IHtcclxuICAgICAgY29uc3QgZ3JvdXBLZXkgPSBpdGVtLkNPREVURVhUX0xBTkc7XHJcblxyXG4gICAgICBpZiAoIWdyb3VwTWFwLmhhcyhncm91cEtleSkpIHtcclxuICAgICAgICBncm91cE1hcC5zZXQoZ3JvdXBLZXksIHtcclxuICAgICAgICAgIHRleHQ6IGdyb3VwS2V5LFxyXG4gICAgICAgICAgaWQ6IGdyb3VwS2V5LCAgLy8gQWRkZWQgaWQgZmllbGRcclxuICAgICAgICAgIGl0ZW1zOiBbXVxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBjb25zdCBncm91cCA9IGdyb3VwTWFwLmdldChncm91cEtleSk7XHJcbiAgICAgIGdyb3VwLml0ZW1zLnB1c2goe1xyXG4gICAgICAgIHRleHQ6IGl0ZW0uQ09ERSxcclxuICAgICAgICBpZDogaXRlbS5DT0RFICAvLyBDaGFuZ2VkIGZyb20gJ2NvZGUnIHRvICdpZCdcclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxuXHJcbiAgICByZXR1cm4gQXJyYXkuZnJvbShncm91cE1hcC52YWx1ZXMoKSk7XHJcbiAgfVxyXG4gICBwdWJsaWMgY2FsbGx0cmFuc2Zvcm1Gb3JUcmVlVmlldyhvYmplY3Qpe1xyXG4gICAgLy9jb25zb2xlLmxvZyAoXCJ0aGlzLmxvb2t1cEFyckRlZjpvYmplY3QubXVsdGlzZWxlY3RfdHJlZV9hcnI6XCIsIG9iamVjdC5tdWx0aXNlbGVjdF90cmVlX2FycilcclxuICAgIGlmICggdHlwZW9mIG9iamVjdC5tdWx0aXNlbGVjdF90cmVlX2FyciAhPSBcInVuZGVmaW5lZFwiKVxyXG4gICAge1xyXG4gICAgICBmb3IgKGxldCBpID0wOyBpIDwgb2JqZWN0Lm11bHRpc2VsZWN0X3RyZWVfYXJyLmxlbmd0aDsgaSsrKXtcclxuICAgICAgICBsZXQgY29sTmFtZSA9IG9iamVjdC5tdWx0aXNlbGVjdF90cmVlX2FycltpXTtcclxuICAgICAgICBsZXQga3BOYW1lID0gXCJsa3BBcnJcIiArIGNvbE5hbWU7XHJcbiAgICAgICAgXHJcbiAgICAgICAgbGV0IGxrcFZhbCA9IG9iamVjdFtrcE5hbWVdO1xyXG4gICAgICAgIC8vY29uc29sZS5sb2cgKFwidGhpcy5sb29rdXBBcnJEZWY6a3BOYW1lOlwiLCBrcE5hbWUsIGxrcFZhbClcclxuICAgICAgICBsa3BWYWwgPSB0aGlzLnRyYW5zZm9ybUZvclRyZWVWaWV3KGxrcFZhbCk7XHJcbiAgICAgICAgLy9jb25zb2xlLmxvZyAoXCJ0aGlzLmxvb2t1cEFyckRlZjprcE5hbWU6XCIsIGtwTmFtZSwgbGtwVmFsKVxyXG4gICAgICAgIG9iamVjdFtrcE5hbWVdID0gbGtwVmFsO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZXhlY3V0ZVF1ZXJ5QWN0X2Zvcm0oZm9ybTogYW55LCBvYmplY3Q6YW55KSB7XHJcbiAgICBjb25zb2xlLmxvZyhcImV4ZWN1dGVRdWVyeUFjdF9mb3JtOmZvcm06XCIsZm9ybSwgXCJvYmplY3QuaXNDaGlsZCA6XCIsb2JqZWN0LmlzQ2hpbGQsIFwib2JqZWN0LmlzU2VhcmNoOlwiLG9iamVjdC5pc1NlYXJjaCApXHJcbiAgICBpZiAodHlwZW9mIGZvcm0gPT09IFwidW5kZWZpbmVkXCIpXHJcbiAgICAgICAgICByZXR1cm47XHJcblxyXG4gICAgICAgIGxldCBwYXJhbUNvbmZpZyA9IHtcclxuICAgICAgICAgIFwiTmFtZVwiOiBcImNoaWxkUmVjb3Jkc1wiLFxyXG4gICAgICAgICAgXCJWYWxcIjogMFxyXG4gICAgICAgIH07XHJcbiAgICAgICAgc2V0UGFyYW1Db25maWcocGFyYW1Db25maWcpO1xyXG4gICAgaWYgKG9iamVjdC5pc0NoaWxkID09IHRydWUpIHtcclxuICAgICAgaWYgKG9iamVjdC5pc1NlYXJjaCAhPSB0cnVlKSB7XHJcbiAgICAgICAgLy9vYmplY3QuZm9ybS5yZXNldCgpO1xyXG4gICAgICAgIG9iamVjdC5mb3JtLnJlc2V0KG9iamVjdC5mb3JtSW5pdGlhbFZhbHVlcyk7XHJcblxyXG4gICAgICAgIGlmICgodHlwZW9mIG9iamVjdC5tYXN0ZXJLZXlOYW1lQXJyICE9IFwidW5kZWZpbmVkXCIpICYmIChvYmplY3QubWFzdGVyS2V5TmFtZUFyci5sZW5ndGggIT0gMCkpIHtcclxuICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgb2JqZWN0Lm1hc3RlcktleU5hbWVBcnIubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIG9iamVjdC5mb3JtSW5pdGlhbFZhbHVlc1tvYmplY3QubWFzdGVyS2V5TmFtZUFycltpXV0gPSBvYmplY3QubWFzdGVyS2V5QXJyW2ldO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgIG9iamVjdC5mb3JtSW5pdGlhbFZhbHVlc1tvYmplY3QubWFzdGVyS2V5TmFtZV0gPSBvYmplY3QubWFzdGVyS2V5O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAvL29iamVjdC5mb3JtSW5pdGlhbFZhbHVlc1tvYmplY3QubWFzdGVyS2V5TmFtZV0gPSBvYmplY3QubWFzdGVyS2V5O1xyXG4gICAgICAgIG9iamVjdC5mb3JtLnJlc2V0KG9iamVjdC5mb3JtSW5pdGlhbFZhbHVlcywgeyBlbWl0RXZlbnQ6IG9iamVjdC5lbWl0RXZlbnQgIT0gbnVsbCA/IG9iamVjdC5lbWl0RXZlbnQgOiB0cnVlIH0pO1xyXG4gICAgICAgIGlmIChvYmplY3QucGFyYW1Db25maWcuREVCVUdfRkxBRykgY29uc29sZS5sb2coXCJvYmplY3QubWFzdGVyS2V5TmFtZTpcIiArIG9iamVjdC5tYXN0ZXJLZXlOYW1lKTtcclxuICAgICAgICAgICAgb2JqZWN0LmlzU2VhcmNoID0gdHJ1ZTtcclxuICAgICAgICAgICAgZm9ybSA9IG9iamVjdC5mb3JtLmdldFJhd1ZhbHVlKCk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsZXQgUGFnZSA9IFwiJl9xdWVyeT1cIiArIG9iamVjdC5nZXRDTUQ7XHJcbiAgICBpZiAob2JqZWN0LnBhcmFtQ29uZmlnLkRFQlVHX0ZMQUcpIGNvbnNvbGUubG9nKFwib2JqZWN0LmlzU2VhcmNoOlwiICsgb2JqZWN0LmlzU2VhcmNoKVxyXG4gICAgaWYgKG9iamVjdC5pc1NlYXJjaCA9PSB0cnVlKSB7XHJcbiAgICAgICAgICBpZiAob2JqZWN0LnBhcmFtQ29uZmlnLkRFQlVHX0ZMQUcpIGNvbnNvbGUubG9nKGZvcm0udmFsdWUpO1xyXG4gICAgbGV0IE5ld1ZhbCA9IGZvcm07XHJcbiAgICAgICAgICAgIG9iamVjdC5pc1NlYXJjaCA9IGZhbHNlO1xyXG4gICAgaWYgKCh0eXBlb2Ygb2JqZWN0LmZvcm1hdHRlZFdoZXJlID09PSBcInVuZGVmaW5lZFwiKSB8fCAob2JqZWN0LmZvcm1hdHRlZFdoZXJlID09IG51bGwpKSB7XHJcbiAgICAgICAgICAgICAgUGFnZSA9IFBhZ2UgKyBvYmplY3Quc3RhclNlcnZpY2VzLmZvcm1hdFdoZXJlKE5ld1ZhbCk7XHJcblxyXG4gICAgICAgICAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgICAgICAgICBvYmplY3QuZm9ybWF0dGVkV2hlcmUgPSB0aGlzLnByb2Nlc3Nmb3JtYXR0ZWRXaGVyZShvYmplY3QsIG9iamVjdC5mb3JtYXR0ZWRXaGVyZSk7XHJcbiAgICAgICAgICAgICAgUGFnZSA9IFBhZ2UgKyBvYmplY3QuZm9ybWF0dGVkV2hlcmU7XHJcbiAgICAgICAgICAgICAgb2JqZWN0LmZvcm1hdHRlZFdoZXJlID0gbnVsbDtcclxuICAgICAgICAgICAgfVxyXG4gICAgaWYgKCh0eXBlb2Ygb2JqZWN0Lk9yZGVyQnlDbGF1c2UgIT09IFwidW5kZWZpbmVkXCIpICYmIChvYmplY3QuT3JkZXJCeUNsYXVzZSAhPSBcIlwiKSlcclxuICAgICAgICAgICAgICBQYWdlID0gUGFnZSArIFwiJl9PUkRFUkJZPVwiICsgb2JqZWN0Lk9yZGVyQnlDbGF1c2U7XHJcbiAgICB9XHJcblxyXG4gICAgb2JqZWN0LmV4ZWN1dGVRdWVyeXJlc3VsdCA9IFtdO1xyXG4gICAgb2JqZWN0LmV4ZWN1dGVRdWVyeXJlc3VsdC5yZXN1bHQgPSAwO1xyXG4gICAgICAgIG9iamVjdC5DdXJyZW50UmVjID0gMDtcclxuXHJcbiAgICAgICAgUGFnZSA9IGVuY29kZVVSSShQYWdlKTtcclxuICAgIG9iamVjdC5zdGFyU2VydmljZXMuZmV0Y2gob2JqZWN0LCBQYWdlKS5zdWJzY3JpYmUoKHJlc3VsdDphbnkpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChyZXN1bHQgIT0gbnVsbCkge1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcmVzdWx0LmRhdGFbMF0uZGF0YS5sZW5ndGg7IGkrKylcclxuICAgICAgICAgICAgICAgICAgICByZXN1bHQuZGF0YVswXS5kYXRhW2ldID0gb2JqZWN0LnN0YXJTZXJ2aWNlcy5wYXJzZVRvRGF0ZShyZXN1bHQuZGF0YVswXS5kYXRhW2ldKTtcclxuXHJcblxyXG4gICAgICAgIHJlc3VsdCA9IHtcclxuICAgICAgICAgIGRhdGE6IHJlc3VsdC5kYXRhWzBdLmRhdGEsXHJcbiAgICAgICAgICB0b3RhbDogcGFyc2VJbnQocmVzdWx0LmRhdGFbMF0uZGF0YS5sZW5ndGgsIDEwKVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAob2JqZWN0LmlzTWFzdGVyKVxyXG4gICAgICAgICAgb2JqZWN0LnN0YXJTZXJ2aWNlcy5zaG93Tm90aWZpY2F0aW9uKCdzdWNjZXNzJywgXCJSZWNvcmRzIHJldHJpZXZlZCA6IFwiICsgcmVzdWx0LnRvdGFsKTtcclxuICAgICAgICBvYmplY3Quc3RhclNlcnZpY2VzLmZpeE11bHRpU2VsZWN0RmllbGRzX3Jlc3VsdChvYmplY3QsIHJlc3VsdClcclxuICAgICAgICBvYmplY3QuZXhlY3V0ZVF1ZXJ5cmVzdWx0ID0gcmVzdWx0O1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaGVscE1zZyA9IFwiXCI7XHJcbiAgICAgICAgaWYgKG9iamVjdC5wYXJhbUNvbmZpZy5ERUJVR19GTEFHKSBjb25zb2xlLmxvZyhcIm9iamVjdC5leGVjdXRlUXVlcnlyZXN1bHQ6XCIsIG9iamVjdC5leGVjdXRlUXVlcnlyZXN1bHQpO1xyXG4gICAgICAgIGlmICh0eXBlb2YgcmVzdWx0LmRhdGFbb2JqZWN0LkN1cnJlbnRSZWNdICE9PSBcInVuZGVmaW5lZFwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBvYmplY3QuZm9ybS5wYXRjaFZhbHVlKHJlc3VsdC5kYXRhW29iamVjdC5DdXJyZW50UmVjXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICBvYmplY3QuZm9ybS5tYXJrQXNQcmlzdGluZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgb2JqZWN0LmZvcm0ubWFya0FzVW50b3VjaGVkKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICBvYmplY3QuZm9ybS5yZXNldChyZXN1bHQuZGF0YVtvYmplY3QuQ3VycmVudFJlY10sIHsgZW1pdEV2ZW50OiBvYmplY3QuZW1pdEV2ZW50ICE9IG51bGwgPyBvYmplY3QuZW1pdEV2ZW50IDogdHJ1ZSB9KTtcclxuXHJcbiAgICAgICAgaWYgKG9iamVjdC5wYXJhbUNvbmZpZy5ERUJVR19GTEFHKSBjb25zb2xlLmxvZyhcImZvcm0gc2VydmljZXJlYWRDb21wbGV0ZWRPdXRwdXRcIik7XHJcbiAgICAgICAgaWYgKG9iamVjdC5wYXJhbUNvbmZpZy5ERUJVR19GTEFHKSBjb25zb2xlLmxvZyhvYmplY3QucmVhZENvbXBsZXRlZE91dHB1dCk7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHBhcmFtQ29uZmlnID0ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgXCJOYW1lXCI6IFwiY2hpbGRSZWNvcmRzXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICBcIlZhbFwiOiByZXN1bHQudG90YWxcclxuICAgICAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgICAgIHNldFBhcmFtQ29uZmlnKHBhcmFtQ29uZmlnKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAocmVzdWx0LnRvdGFsICE9IDApXHJcbiAgICAgICAgICAgICAgICAgICAgICBvYmplY3QuaXNOZXcgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgaWYgKG9iamVjdC5kaXNhYmxlRW1pdFJlYWRDb21wbGV0ZWQgIT0gdHJ1ZSkge1xyXG4gICAgICAgICAgaWYgKHJlc3VsdC50b3RhbCAhPSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9iamVjdC5yZWFkQ29tcGxldGVkT3V0cHV0LmVtaXQob2JqZWN0LmZvcm0uZ2V0UmF3VmFsdWUoKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9iamVjdC5jbGVhckNvbXBsZXRlZE91dHB1dC5lbWl0KFtdKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgaWYgKHR5cGVvZiBvYmplY3QuY2FsbEJhY2tGdW5jdGlvbiAhPT0gXCJ1bmRlZmluZWRcIilcclxuICAgICAgICAgICAgICAgICAgICAgIG9iamVjdC5jYWxsQmFja0Z1bmN0aW9uKHJlc3VsdC5kYXRhWzBdKTtcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRQcmltYXJLZXlOYW1lQXJyKG9iamVjdCwgdHJ1ZSk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgIChlcnI6YW55KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAvL2FsZXJ0KCdlcnJvcjonICsgZXJyLm1lc3NhZ2UpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zaG93RXJyb3JNc2cob2JqZWN0LCBlcnIpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgIH1cclxuICBwdWJsaWMgZXhlY3N0YXJTZXJ2aWNlc19mb3JtX2luVHJhbnMoTmV3VmFsOmFueSwgb2JqZWN0OmFueSkge1xyXG4gICAgICB0aGlzLmNvbW1pdEJvZHkucHVzaChOZXdWYWwpO1xyXG4gICAgaWYgKG9iamVjdC5hY3Rpb24gIT0gXCJSRU1PVkVcIikge1xyXG4gICAgICBpZiAodHlwZW9mIG9iamVjdC5leGVjdXRlUXVlcnlyZXN1bHQgIT09IFwidW5kZWZpbmVkXCIpIHtcclxuICAgICAgICBpZiAob2JqZWN0LmlzTmV3ID09IHRydWUpIHtcclxuICAgICAgICAgICAgb2JqZWN0LmV4ZWN1dGVRdWVyeXJlc3VsdC5kYXRhLnB1c2goTmV3VmFsKTtcclxuICAgICAgICAgICAgb2JqZWN0LmV4ZWN1dGVRdWVyeXJlc3VsdC50b3RhbCA9IG9iamVjdC5leGVjdXRlUXVlcnlyZXN1bHQudG90YWwgKyAxO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBvYmplY3QuZXhlY3V0ZVF1ZXJ5cmVzdWx0LmRhdGFbb2JqZWN0LkN1cnJlbnRSZWNdID0gTmV3VmFsO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgZWxzZSB7XHJcbiAgICAgICAgbGV0IE5ld1ZhbEFycjphbnkgPSBbXTtcclxuICAgICAgICAgIE5ld1ZhbEFyci5wdXNoKE5ld1ZhbCk7XHJcbiAgICAgICAgbGV0IHJlc3VsdCA9IHtcclxuICAgICAgICAgIGRhdGE6IE5ld1ZhbEFycixcclxuICAgICAgICAgIHRvdGFsOiAxXHJcbiAgICAgICAgfVxyXG4gICAgICAgIG9iamVjdC5leGVjdXRlUXVlcnlyZXN1bHQgPSByZXN1bHQ7XHJcbiAgICAgICAgICAgIG9iamVjdC5DdXJyZW50UmVjID0gMDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICB2YXIgZGF0YTphbnkgPSBbXTtcclxuICAgICAgICBkYXRhLnB1c2goTmV3VmFsKVxyXG4gICAgICBpZiAob2JqZWN0LmlzTmV3ID09IHRydWUpIHtcclxuICAgICAgICAgIG9iamVjdC5pc05ldyA9IGZhbHNlO1xyXG4gICAgICAgIGlmICh0eXBlb2Ygb2JqZWN0LmNhbGxCYWNrUG9zdF9JbnNlcnQgIT09IFwidW5kZWZpbmVkXCIpIHtcclxuICAgICAgICAgICAgICBvYmplY3QuY2FsbEJhY2tQb3N0X0luc2VydC5hcHBseShvYmplY3QsIGRhdGEpO1xyXG4gICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIGVsc2Uge1xyXG4gICAgICAgIGlmICh0eXBlb2Ygb2JqZWN0LmNhbGxCYWNrUG9zdF91cGRhdGUgIT09IFwidW5kZWZpbmVkXCIpIHtcclxuICAgICAgICAgIG9iamVjdC5jYWxsQmFja1Bvc3RfdXBkYXRlLmFwcGx5KG9iamVjdCwgZGF0YSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgICAgLy9SRU1PVkVcclxuICAgICAgICBvYmplY3QuZXhlY3V0ZVF1ZXJ5cmVzdWx0LmRhdGEuc3BsaWNlKG9iamVjdC5DdXJyZW50UmVjLCAxKTtcclxuICAgICAgICBvYmplY3QuZXhlY3V0ZVF1ZXJ5cmVzdWx0LnRvdGFsLS07XHJcbiAgICAgIGlmIChvYmplY3QuQ3VycmVudFJlYyA+IDApIHtcclxuICAgICAgICAgIG9iamVjdC5DdXJyZW50UmVjLS07XHJcbiAgICAgICAgb2JqZWN0LmZvcm0ucmVzZXQob2JqZWN0LmV4ZWN1dGVRdWVyeXJlc3VsdC5kYXRhW29iamVjdC5DdXJyZW50UmVjXSwgeyBlbWl0RXZlbnQ6IG9iamVjdC5lbWl0RXZlbnQgIT0gbnVsbCA/IG9iamVjdC5lbWl0RXZlbnQgOiB0cnVlIH0pO1xyXG4gICAgICAgICAgaWYgKG9iamVjdC5pc05ldyA9PSB0cnVlKVxyXG4gICAgICAgICAgICBvYmplY3QuaXNOZXcgPSBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgIGVsc2Uge1xyXG4gICAgICAgIG9iamVjdC5mb3JtLnJlc2V0KG9iamVjdC5mb3JtSW5pdGlhbFZhbHVlcywgeyBlbWl0RXZlbnQ6IG9iamVjdC5lbWl0RXZlbnQgIT0gbnVsbCA/IG9iamVjdC5lbWl0RXZlbnQgOiB0cnVlIH0pO1xyXG4gICAgICAgICAgb2JqZWN0LmlzTmV3ID0gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgIGxldCBOZXdWYWwxOmFueSA9IFtdO1xyXG4gICAgICAgICAgICAgICAgTmV3VmFsMS5wdXNoKE5ld1ZhbCk7XHJcbiAgICAgIGlmICh0eXBlb2Ygb2JqZWN0LmNhbGxCYWNrUmVtb3ZlQXR0ICE9PSBcInVuZGVmaW5lZFwiKVxyXG4gICAgICAgIG9iamVjdC5jYWxsQmFja1JlbW92ZUF0dChvYmplY3QsIE5ld1ZhbCk7XHJcbiAgICAgIGlmICh0eXBlb2Ygb2JqZWN0LmNhbGxCYWNrUG9zdF9SZW1vdmUgIT09IFwidW5kZWZpbmVkXCIpIHtcclxuICAgICAgICAvLyBsZXQgTmV3VmFsMSA9IFtdO1xyXG4gICAgICAgIC8vIE5ld1ZhbDEucHVzaChOZXdWYWwpO1xyXG4gICAgICAgICAgICAgIG9iamVjdC5jYWxsQmFja1Bvc3RfUmVtb3ZlLmFwcGx5KG9iamVjdCwgTmV3VmFsMSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICAgXHJcbiAgICAgIH1cclxuICAgIFxyXG4gICAgaWYgKG9iamVjdC5hY3Rpb24gIT0gXCJSRU1PVkVcIikge1xyXG4gICAgICBvYmplY3QuZm9ybS5yZXNldChOZXdWYWwsIHsgZW1pdEV2ZW50OiBvYmplY3QuZW1pdEV2ZW50ICE9IG51bGwgPyBvYmplY3QuZW1pdEV2ZW50IDogdHJ1ZSB9KTtcclxuICAgIH1cclxuICAgIGlmIChvYmplY3QuZGlhYmxlRW1pdFNhdmUgPT0gdHJ1ZSkgeyB9XHJcbiAgICBlbHNlXHJcbiAgICAgIG9iamVjdC5zYXZlQ29tcGxldGVkT3V0cHV0LmVtaXQoTmV3VmFsKTtcclxuICAgIGlmIChvYmplY3QuaXNDaGlsZCA9PSB0cnVlKSB7XHJcbiAgICAgIGxldCBwYXJhbUNvbmZpZyA9IHtcclxuICAgICAgICBcIk5hbWVcIjogXCJjaGlsZFJlY29yZHNcIixcclxuICAgICAgICBcIlZhbFwiOiBvYmplY3QuZXhlY3V0ZVF1ZXJ5cmVzdWx0LnRvdGFsXHJcbiAgICAgIH07XHJcbiAgICAgIHNldFBhcmFtQ29uZmlnKHBhcmFtQ29uZmlnKTtcclxuICAgIH1cclxuICAgIG9iamVjdC5hY3Rpb24gPSBcIlwiO1xyXG4gICAgdGhpcy5zZXRQcmltYXJLZXlOYW1lQXJyKG9iamVjdCwgdHJ1ZSk7XHJcblxyXG4gICAgfVxyXG4gIHB1YmxpYyBleGVjc3RhclNlcnZpY2VzX2Zvcm0oTmV3VmFsOmFueSwgb2JqZWN0OmFueSkge1xyXG4gICAgaWYgKHRoaXMucGFyYW1Db25maWcuREVCVUdfRkxBRykgY29uc29sZS5sb2coXCJOZXdWYWw6XCIsIE5ld1ZhbCk7XHJcbiAgICAgICAgb2JqZWN0LmFkZFRvQm9keShOZXdWYWwpO1xyXG4gICAgaWYgKG9iamVjdC5pc05ldyA9PSB0cnVlKXtcclxuICAgICAgbGV0IHN1ZmZpeF9zcWwgPSB7XCJfUVVFUllcIjogXCJHRVRfTEFTVF9JRFwifTtcclxuICAgICAgb2JqZWN0LmFkZFRvQm9keShzdWZmaXhfc3FsKTtcclxuICAgICAgLy9vYmplY3Quc3VmZml4X3NxbD0gdW5kZWZpbmVkO1xyXG4gICAgfVxyXG4gICAgbGV0IFBhZ2UgPSBcIiZfdHJhbnM9WVwiO1xyXG4gICAgICAgICAgaWYgKHRoaXMuaW5UcmFucykge1xyXG4gICAgICB0aGlzLmV4ZWNzdGFyU2VydmljZXNfZm9ybV9pblRyYW5zKE5ld1ZhbCwgb2JqZWN0KTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgIHRoaXMucG9zdChvYmplY3QsIFBhZ2UsIG9iamVjdC5Cb2R5KS5zdWJzY3JpYmUoUGFnZSA9PiB7XHJcbiAgICAgIG9iamVjdC5Cb2R5ID0gW107XHJcbiAgICAgIGlmICh0aGlzLnBhcmFtQ29uZmlnLkRFQlVHX0ZMQUcpIGNvbnNvbGUubG9nKFwib2JqZWN0LmV4ZWN1dGVRdWVyeXJlc3VsdC5kYXRhOm9iamVjdC5DdXJyZW50UmVjOlwiICwgb2JqZWN0LkN1cnJlbnRSZWMgLCBcIiBvYmplY3QuYWN0aW9uOlwiICwgb2JqZWN0LmFjdGlvbiwgb2JqZWN0LmV4ZWN1dGVRdWVyeXJlc3VsdCwgXCJQYWdlOlwiLCBQYWdlKTtcclxuICAgICAgICAgICAgLy9pZiAodHlwZW9mIG9iamVjdC5leGVjdXRlUXVlcnlyZXN1bHQgIT09IFwidW5kZWZpbmVkXCIpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICBpZiAodGhpcy5wYXJhbUNvbmZpZy5ERUJVR19GTEFHKSBjb25zb2xlLmxvZyhcImhlcmUxXCIpO1xyXG4gICAgICAgIGlmIChvYmplY3QuYWN0aW9uICE9IFwiUkVNT1ZFXCIpIHtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLnBhcmFtQ29uZmlnLkRFQlVHX0ZMQUcpIGNvbnNvbGUubG9nKG9iamVjdC5leGVjdXRlUXVlcnlyZXN1bHQpO1xyXG4gICAgICAgICAgaWYgKHR5cGVvZiBvYmplY3QuZXhlY3V0ZVF1ZXJ5cmVzdWx0ICE9PSBcInVuZGVmaW5lZFwiKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnBhcmFtQ29uZmlnLkRFQlVHX0ZMQUcpIGNvbnNvbGUubG9nKFwib2JqZWN0LmlzTmV3OlwiICsgb2JqZWN0LmlzTmV3LCBcIm9iamVjdC5leGVjdXRlUXVlcnlyZXN1bHQ6XCIsIG9iamVjdC5leGVjdXRlUXVlcnlyZXN1bHRcclxuICAgICAgICAgICAgICAsIFwib2JqZWN0LmV4ZWN1dGVRdWVyeXJlc3VsdC5kYXRhOlwiLCBvYmplY3QuZXhlY3V0ZVF1ZXJ5cmVzdWx0LmRhdGEpXHJcbiAgICAgICAgICAgIGlmICh0eXBlb2Ygb2JqZWN0LmV4ZWN1dGVRdWVyeXJlc3VsdC5kYXRhICE9PSBcInVuZGVmaW5lZFwiKSB7XHJcbiAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgaWYgKG9iamVjdC5pc05ldyA9PSB0cnVlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgb2JqZWN0LmV4ZWN1dGVRdWVyeXJlc3VsdC5kYXRhLnB1c2goTmV3VmFsKTtcclxuICAgICAgICAgICAgICAgICAgICBvYmplY3QuZXhlY3V0ZVF1ZXJ5cmVzdWx0LnRvdGFsID0gb2JqZWN0LmV4ZWN1dGVRdWVyeXJlc3VsdC50b3RhbCArIDE7XHJcbiAgICAgICAgICAgICAgICAgICAgLy9vYmplY3QuQ3VycmVudFJlYysrO1xyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgb2JqZWN0LmV4ZWN1dGVRdWVyeXJlc3VsdC5kYXRhW29iamVjdC5DdXJyZW50UmVjXSA9IE5ld1ZhbDtcclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnBhcmFtQ29uZmlnLkRFQlVHX0ZMQUcpIGNvbnNvbGUubG9nKFwib2JqZWN0LmV4ZWN1dGVRdWVyeXJlc3VsdCBwb3N0XCIpO1xyXG4gICAgICAgICAgICBpZiAodGhpcy5wYXJhbUNvbmZpZy5ERUJVR19GTEFHKSBjb25zb2xlLmxvZyhvYmplY3QuZXhlY3V0ZVF1ZXJ5cmVzdWx0KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBsZXQgTmV3VmFsQXJyOmFueSA9IFtdO1xyXG4gICAgICAgICAgICAgICAgICBOZXdWYWxBcnIucHVzaChOZXdWYWwpO1xyXG4gICAgICAgICAgICBsZXQgcmVzdWx0ID0ge1xyXG4gICAgICAgICAgICAgIGRhdGE6IE5ld1ZhbEFycixcclxuICAgICAgICAgICAgICB0b3RhbDogMVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIG9iamVjdC5leGVjdXRlUXVlcnlyZXN1bHQgPSByZXN1bHQ7XHJcbiAgICAgICAgICAgICAgICAgICAgb2JqZWN0LkN1cnJlbnRSZWMgPSAwO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIHRoaXMuc2hvd05vdGlmaWNhdGlvbignc3VjY2VzcycsIFwiRGF0YSBzYXZlZCBzdWNjZXNzZnVsbHlcIik7XHJcbiAgICAgICAgICB2YXIgZGF0YTphbnkgPSBbXTtcclxuICAgICAgICAgICAgICAgIGRhdGEucHVzaChOZXdWYWwpXHJcbiAgICAgICAgICBpZiAob2JqZWN0LmlzTmV3ID09IHRydWUpIHtcclxuICAgICAgICAgICAgICAgICAgb2JqZWN0LmlzTmV3ID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGlmICh0eXBlb2Ygb2JqZWN0LmNhbGxCYWNrUG9zdF9JbnNlcnQgIT09IFwidW5kZWZpbmVkXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgIC8vb2JqZWN0LmNhbGxCYWNrUG9zdF9JbnNlcnQob2JqZWN0LCBOZXdWYWwpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgdGhpcy5jaGVja0xhc3RJZChvYmplY3QsIE5ld1ZhbCxQYWdlKVxyXG4gICAgICAgICAgICAgICAgICAgICAgb2JqZWN0LmNhbGxCYWNrUG9zdF9JbnNlcnQuYXBwbHkob2JqZWN0LCBkYXRhKTtcclxuICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBpZiAodHlwZW9mIG9iamVjdC5jYWxsQmFja1Bvc3RfVXBkYXRlICE9PSBcInVuZGVmaW5lZFwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgb2JqZWN0LmNhbGxCYWNrUG9zdF9VcGRhdGUuYXBwbHkob2JqZWN0LCBkYXRhKTtcclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAvL1JFTU9WRVxyXG4gICAgICAgICAgICAgICAgb2JqZWN0LmV4ZWN1dGVRdWVyeXJlc3VsdC5kYXRhLnNwbGljZShvYmplY3QuQ3VycmVudFJlYywgMSk7XHJcbiAgICAgICAgICAgICAgICBvYmplY3QuZXhlY3V0ZVF1ZXJ5cmVzdWx0LnRvdGFsLS07XHJcbiAgICAgICAgICBpZiAodGhpcy5wYXJhbUNvbmZpZy5ERUJVR19GTEFHKSBjb25zb2xlLmxvZyhcIm9iamVjdC5DdXJyZW50UmVjOlwiICsgb2JqZWN0LkN1cnJlbnRSZWMpXHJcbiAgICAgICAgICBpZiAob2JqZWN0LkN1cnJlbnRSZWMgPiAwKSB7XHJcbiAgICAgICAgICAgICAgICAgIG9iamVjdC5DdXJyZW50UmVjLS07XHJcbiAgICAgICAgICAgIG9iamVjdC5mb3JtLnJlc2V0KG9iamVjdC5leGVjdXRlUXVlcnlyZXN1bHQuZGF0YVtvYmplY3QuQ3VycmVudFJlY10sIHsgZW1pdEV2ZW50OiBvYmplY3QuZW1pdEV2ZW50ICE9IG51bGwgPyBvYmplY3QuZW1pdEV2ZW50IDogdHJ1ZSB9KTtcclxuICAgICAgICAgICAgICAgICAgaWYgKG9iamVjdC5pc05ldyA9PSB0cnVlKVxyXG4gICAgICAgICAgICAgICAgICAgIG9iamVjdC5pc05ldyA9IGZhbHNlO1xyXG5cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBvYmplY3QuZm9ybS5yZXNldChvYmplY3QuZm9ybUluaXRpYWxWYWx1ZXMsIHsgZW1pdEV2ZW50OiBvYmplY3QuZW1pdEV2ZW50ICE9IG51bGwgPyBvYmplY3QuZW1pdEV2ZW50IDogdHJ1ZSB9KTtcclxuICAgICAgICAgICAgICAgICAgb2JqZWN0LmlzTmV3ID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgaWYgKHRoaXMucGFyYW1Db25maWcuREVCVUdfRkxBRykgY29uc29sZS5sb2coXCJvYmplY3QuaXNOZXc6XCIgKyBvYmplY3QuaXNOZXcpXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICBsZXQgTmV3VmFsMTphbnkgPSBbXTtcclxuICAgICAgICAgICAgICAgIE5ld1ZhbDEucHVzaChOZXdWYWwpO1xyXG4gICAgICAgICAgaWYgKHR5cGVvZiBvYmplY3QuY2FsbEJhY2tSZW1vdmVBdHQgIT09IFwidW5kZWZpbmVkXCIpXHJcbiAgICAgICAgICAgIG9iamVjdC5jYWxsQmFja1JlbW92ZUF0dChvYmplY3QsIE5ld1ZhbDEpO1xyXG4gICAgICAgICAgaWYgKHR5cGVvZiBvYmplY3QuY2FsbEJhY2tQb3N0X1JlbW92ZSAhPT0gXCJ1bmRlZmluZWRcIikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgb2JqZWN0LmNhbGxCYWNrUG9zdF9SZW1vdmUuYXBwbHkob2JqZWN0LCBOZXdWYWwxKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnBhcmFtQ29uZmlnLkRFQlVHX0ZMQUcpIGNvbnNvbGUubG9nKFwiaGVyZTJcIik7XHJcbiAgICAgIGlmIChvYmplY3QuYWN0aW9uICE9IFwiUkVNT1ZFXCIpIHtcclxuICAgICAgICBvYmplY3Quc3RhclNlcnZpY2VzLmZpeE11bHRpU2VsZWN0RmllbGRzX05ld1ZhbChvYmplY3QsIE5ld1ZhbClcclxuICAgICAgICBvYmplY3QuZm9ybS5yZXNldChOZXdWYWwsIHsgZW1pdEV2ZW50OiBvYmplY3QuZW1pdEV2ZW50ICE9IG51bGwgPyBvYmplY3QuZW1pdEV2ZW50IDogdHJ1ZSB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICBpZiAob2JqZWN0LmRpYWJsZUVtaXRTYXZlID09IHRydWUpIHsgfVxyXG4gICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgICAgb2JqZWN0LnNhdmVDb21wbGV0ZWRPdXRwdXQuZW1pdChOZXdWYWwpO1xyXG4gICAgICBpZiAob2JqZWN0LmlzQ2hpbGQgPT0gdHJ1ZSkge1xyXG4gICAgICAgICAgICAgIGxldCBwYXJhbUNvbmZpZyA9IHtcclxuICAgICAgICAgICAgICAgIFwiTmFtZVwiOiBcImNoaWxkUmVjb3Jkc1wiLFxyXG4gICAgICAgICAgICAgICAgXCJWYWxcIjogb2JqZWN0LmV4ZWN1dGVRdWVyeXJlc3VsdC50b3RhbFxyXG4gICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgc2V0UGFyYW1Db25maWcocGFyYW1Db25maWcpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIG9iamVjdC5hY3Rpb24gPSBcIlwiO1xyXG4gICAgICAgICAgICB0aGlzLnNldFByaW1hcktleU5hbWVBcnIob2JqZWN0LCB0cnVlKTtcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICBlcnIgPT4ge1xyXG4gICAgICAgICAgICAvL2FsZXJ0ICgnZXJyb3I6JyArIGVyci5tZXNzYWdlKTtcclxuICAgICAgICAgICAgdGhpcy5zaG93RXJyb3JNc2cob2JqZWN0LCBlcnIpO1xyXG4gICAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICBwdWJsaWMgY2hlY2tMYXN0SWQgKG9iamVjdCwgTmV3VmFsLFBhZ2Upe1xyXG4gICAgY29uc29sZS5sb2coXCJjaGVja0xhc3RJZDpOZXdWYWw6XCIsTmV3VmFsLCBcIlBhZ2U6XCIsUGFnZSwgXCJQS19BVVRPOlwiLCBvYmplY3QuUEtfQVVUTyApXHJcbiAgICBpZiAodHlwZW9mIG9iamVjdC5QS19BVVRPICE9IFwidW5kZWZpbmVkXCIgJiYgb2JqZWN0LlBLX0FVVE8gIT0gXCJcIil7XHJcbiAgICAgIGxldCBkYXRhID0gUGFnZS5kYXRhO1xyXG4gICAgICBmb3IgKGxldCBpID0gMDsgaTwgZGF0YS5sZW5ndGg7IGkrKyl7XHJcbiAgICAgICAgbGV0IHJlYyA9IGRhdGFbaV07XHJcbiAgICAgICAgbGV0IHF1ZXJ5ID0gcmVjLnF1ZXJ5O1xyXG4gICAgICAgIGlmIChxdWVyeS5zdGFydHNXaXRoKFwiR0VUX0xBU1RfSURcIikpe1xyXG4gICAgICAgICAgbGV0IGRhdGFBcnIgPSByZWMuZGF0YTtcclxuICAgICAgICAgIGxldCBkYXRhUmVjID0gZGF0YUFyclswXTtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKFwiY2hlY2tMYXN0SWQ6ZGF0YVJlYzpcIixkYXRhUmVjKTtcclxuICAgICAgICAgIGxldCBrZXlzID0gT2JqZWN0LmtleXMoZGF0YVJlYyk7XHJcbiAgICAgICAgICBsZXQgdmFsID0gZGF0YVJlY1trZXlzWzBdXTtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKFwiY2hlY2tMYXN0SWQ6dmFsOlwiLHZhbCk7XHJcbiAgICAgICAgICBOZXdWYWxbb2JqZWN0LlBLX0FVVE9dID0gdmFsO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICBwdWJsaWMgc2F2ZUNoYW5nZXNfZm9ybShmb3JtOiBhbnksIG9iamVjdDphbnkpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLnBhcmFtQ29uZmlnLkRFQlVHX0ZMQUcpIGNvbnNvbGUubG9nKFwidGhpcy5mb3JtOmludmFsaWRcIixvYmplY3QuZm9ybS5pbnZhbGlkKTtcclxuICAgIGlmICh0aGlzLnBhcmFtQ29uZmlnLkRFQlVHX0ZMQUcpIGNvbnNvbGUubG9nKCdzYXZlQ2hhbmdlc19mb3JtIDogb2JqZWN0LmlzTmV3IDonICsgb2JqZWN0LmlzTmV3KTtcclxuICAgIGlmICh0aGlzLnBhcmFtQ29uZmlnLkRFQlVHX0ZMQUcpIGNvbnNvbGUubG9nKG9iamVjdC5jb21wb25lbnRDb25maWcucm91dGluZUF1dGgpO1xyXG4gICAgaWYgKG9iamVjdC5jb21wb25lbnRDb25maWcucm91dGluZUF1dGggIT0gbnVsbCkge1xyXG4gICAgICBpZiAodGhpcy5wYXJhbUNvbmZpZy5ERUJVR19GTEFHKSBjb25zb2xlLmxvZyhcImF1dGhMZXZlbDpcIiArIG9iamVjdC5jb21wb25lbnRDb25maWcucm91dGluZUF1dGguYXV0aExldmVsKTtcclxuICAgICAgaWYgKG9iamVjdC5jb21wb25lbnRDb25maWcucm91dGluZUF1dGguYXV0aExldmVsICE9IDIpIHtcclxuICAgICAgICAgICAgbGV0IGRpYWxvZ1N0cnVjID0ge1xyXG4gICAgICAgICAgICAgIG1zZzogdGhpcy5yZWFkT25seU1zZyxcclxuICAgICAgICAgIHRpdGxlOiBcIldhcm5pbmdcIixcclxuICAgICAgICAgICAgICBpbmZvOiBudWxsLFxyXG4gICAgICAgICAgb2JqZWN0OiBvYmplY3QsXHJcbiAgICAgICAgICBhY3Rpb246IHRoaXMuT2tBY3Rpb25zLFxyXG4gICAgICAgICAgY2FsbGJhY2s6IG51bGxcclxuICAgICAgICB9O1xyXG4gICAgICAgICAgICAgIHRoaXMuc2hvd0NvbmZpcm1hdGlvbihkaWFsb2dTdHJ1Yyk7XHJcbiAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICBpZiAodGhpcy5wYXJhbUNvbmZpZy5ERUJVR19GTEFHKSBjb25zb2xlLmxvZygnc2F2ZUNoYW5nZXNfZm9ybSA6IG9iamVjdC5mb3JtLmRpcnR5OicgLCBvYmplY3QuZm9ybS5kaXJ0eSAsIFwiIG9iamVjdC5pc0NoaWxkOlwiLCBvYmplY3QuaXNDaGlsZCwgXCIgb2JqZWN0LmZvcm0uaW52YWxpZDpcIiwgb2JqZWN0LmZvcm0uaW52YWxpZCwgXCIgb2JqZWN0LmZvcm06XCIsIG9iamVjdC5mb3JtKTtcclxuICAgIGlmICgoIW9iamVjdC5mb3JtLmRpcnR5KSAmJiBvYmplY3QuaXNDaGlsZClcclxuICAgICAgICByZXR1cm47XHJcbiAgICBpZiAob2JqZWN0LmZvcm0uaW52YWxpZCkge1xyXG4gICAgICBvYmplY3Quc3VibWl0dGVkID0gdHJ1ZTtcclxuICAgICAgaWYgKHRoaXMucGFyYW1Db25maWcuREVCVUdfRkxBRykgY29uc29sZS5sb2coXCJvYmplY3QuZm9ybTpcIixvYmplY3QuZm9ybSk7XHJcbiAgICAgIC8vdGhpcy5zaG93T2tNc2cob2JqZWN0LCB0aGlzLmZpZWxkc1JlcXVpcmVkTXNnLCBcIkVycm9yXCIpOyAvLyBUaGlzIHdhcyBjb21tZW50ZWQgZm9yIEZvcm0gRHJhZy4gQ2FzZSBjaGFuZ2UgcGFnZSBhbmQgc2VsZWN0IGEgZmllbGQgXHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9XHJcbiAgICBsZXQgTmV3VmFsOmFueT17fTtcclxuICAgICAgICAvL29iamVjdC5Cb2R5ID0gW107ICAgLy8gb25seSBvbmUgdHJhbnNhY3Rpb24gYWxsb3dlZCBpbiAgZm9ybS4gTW92ZWQgdG8gZm9ybVxyXG4gICAgICAgIC8vTmV3VmFsID0gIGZvcm0udmFsdWU7XHJcbiAgICAgICAgLy9OZXdWYWwgPSBPYmplY3QuYXNzaWduKHt9LCBmb3JtLnZhbHVlLCB7fSlcclxuICAgICAgICBOZXdWYWwgPSB7Li4uZm9ybS52YWx1ZX07XHJcbiAgICBpZiAodGhpcy5wYXJhbUNvbmZpZy5ERUJVR19GTEFHKSBjb25zb2xlLmxvZyhcIi0tLS0tIE5ld1ZhbDpcIilcclxuICAgICAgICBpZiAodGhpcy5wYXJhbUNvbmZpZy5ERUJVR19GTEFHKSBjb25zb2xlLmxvZyhOZXdWYWwpO1xyXG5cclxuICAgICAgICBpZiAob2JqZWN0LmlzTmV3ID09IHRydWUpXHJcbiAgICAgICAgICBOZXdWYWxbXCJfUVVFUllcIl0gPSBvYmplY3QuaW5zZXJ0Q01EO1xyXG4gICAgICAgIGVsc2VcclxuICAgICAgICAgIE5ld1ZhbFtcIl9RVUVSWVwiXSA9IG9iamVjdC51cGRhdGVDTUQ7XHJcbiAgICAgICAgLy9vYmplY3QuaXNOZXcgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLmV4ZWNzdGFyU2VydmljZXNfZm9ybShOZXdWYWwsIG9iamVjdCk7XHJcbiAgICB9XHJcbiAgcHVibGljIGVudGVyUXVlcnlBY3RfZm9ybShmb3JtOiBhbnksIG9iamVjdDphbnkpOiB2b2lkIHtcclxuICAgICAgICBvYmplY3QuQ3VycmVudFJlYyA9IDA7XHJcbiAgICBvYmplY3QuZXhlY3V0ZVF1ZXJ5cmVzdWx0ID0gW107XHJcbiAgICBvYmplY3QuZXhlY3V0ZVF1ZXJ5cmVzdWx0LnJlc3VsdCA9IDA7XHJcbiAgICAgICAgXHJcbiAgICAgICAgb2JqZWN0LmlzU2VhcmNoID0gdHJ1ZTtcclxuICAgICAgICBvYmplY3QuaXNOZXcgPSBmYWxzZTtcclxuICAgIGlmIChvYmplY3QucGFyYW1Db25maWcuREVCVUdfRkxBRykgY29uc29sZS5sb2coJ2VudGVyUXVlcnkgOiBvYmplY3QuaXNTZWFyY2g6JyArIG9iamVjdC5pc1NlYXJjaCk7XHJcbiAgICAgICAgb2JqZWN0LmNsZWFyQ29tcGxldGVkT3V0cHV0LmVtaXQob2JqZWN0LmZvcm1Jbml0aWFsVmFsdWVzKTtcclxuICAgICAgICBcclxuICAgIC8vIG9iamVjdC5pbWdfZ2FsbGVyeSA9IFtdO1xyXG4gICAgLy8gb2JqZWN0LmltZ19hcnIgPSBbXTtcclxuICAgIG9iamVjdC5mb3JtLnJlc2V0KG9iamVjdC5mb3JtSW5pdGlhbFZhbHVlcywgeyBlbWl0RXZlbnQ6IG9iamVjdC5lbWl0RXZlbnQgIT0gbnVsbCA/IG9iamVjdC5lbWl0RXZlbnQgOiB0cnVlIH0pO1xyXG4gICAgICAgIG9iamVjdC5zdGFyU2VydmljZXMuc2V0UHJpbWFyS2V5TmFtZUFycihvYmplY3QsIGZhbHNlKTtcclxuICAgICAgICB0aGlzLmhlbHBNc2cgPSAgb2JqZWN0LnN0YXJTZXJ2aWNlcy5nZXROTFMoW10sXCJIRUxQX0VOVEVSX1FVRVJZXCIsdGhpcy5lbnRlclF1ZXJ5TXNnKTtcclxuXHJcbiAgICAgIH1cclxuXHJcbiAgcHVibGljIHNldFByaW1hcktleU5hbWVBcnIob2JqZWN0OmFueSwgdmFsdWU6YW55KSB7XHJcbiAgICAgICAgaWYgKHR5cGVvZiBvYmplY3QucHJpbWFyS2V5UmVhZE9ubHlBcnIgIT09IFwidW5kZWZpbmVkXCIpIHtcclxuICAgICAgICAgIGxldCBrZXlzID0gT2JqZWN0LmtleXMob2JqZWN0LnByaW1hcktleVJlYWRPbmx5QXJyKTtcclxuICAgICAgZm9yIChsZXQgayA9IDA7IGsgPCBrZXlzLmxlbmd0aDsgaysrKSB7XHJcbiAgICAgICAgICAgICAgaWYgKG9iamVjdC5wYXJhbUNvbmZpZy5ERUJVR19GTEFHKSBjb25zb2xlLmxvZyhcIltrZXlzW2tdOlwiLCBrZXlzW2tdLCBcIiB2YWx1ZTpcIiwgdmFsdWUpO1xyXG4gICAgICAgICAgICAgIG9iamVjdC5wcmltYXJLZXlSZWFkT25seUFycltrZXlzW2tdXSA9IHZhbHVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG5cclxuICBwdWJsaWMgZW50ZXJRdWVyeV9mb3JtKGZvcm06IGFueSwgb2JqZWN0OmFueSk6IHZvaWQge1xyXG4gICAgICAgIGlmICh0aGlzLnBhcmFtQ29uZmlnLkRFQlVHX0ZMQUcpIGNvbnNvbGUubG9nKFwidGVzdDpkaXJ0eTpcIiwgb2JqZWN0LmZvcm0uZGlydHkpO1xyXG4gICAgaWYgKG9iamVjdC5mb3JtLmRpcnR5ID09IHRydWUpIHtcclxuICAgICAgICAgIGxldCBkaWFsb2dTdHJ1YyA9IHtcclxuICAgICAgICAgICAgbXNnOiB0aGlzLnNhdmVDaGFuZ2VzTXNnLFxyXG4gICAgICAgIHRpdGxlOiB0aGlzLnBsZWFzZUNvbmZpcm1Nc2csXHJcbiAgICAgICAgICAgIGluZm86IGZvcm0sXHJcbiAgICAgICAgb2JqZWN0OiBvYmplY3QsXHJcbiAgICAgICAgYWN0aW9uOiB0aGlzLlllc05vQWN0aW9ucyxcclxuICAgICAgICBjYWxsYmFjazogdGhpcy5lbnRlclF1ZXJ5QWN0X2Zvcm1cclxuICAgICAgfTtcclxuICAgICAgICAgICAgdGhpcy5zaG93Q29uZmlybWF0aW9uKGRpYWxvZ1N0cnVjKTtcclxuICAgICAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgdGhpcy5lbnRlclF1ZXJ5QWN0X2Zvcm0oZm9ybSwgb2JqZWN0KTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcblxyXG4gIHB1YmxpYyBvbkNhbmNlbF9mb3JtKGU6YW55LCBvYmplY3Q6YW55KTogdm9pZCB7XHJcbiAgICAvL29iamVjdC5pbWdfZ2FsbGVyeSA9IFtdO1xyXG4gICAvLyBvYmplY3QuaW1nX2FyciA9IFtdO1xyXG4gICAgb2JqZWN0LmZvcm0ucmVzZXQob2JqZWN0LmZvcm1Jbml0aWFsVmFsdWVzLCB7IGVtaXRFdmVudDogb2JqZWN0LmVtaXRFdmVudCAhPSBudWxsID8gb2JqZWN0LmVtaXRFdmVudCA6IHRydWUgfSk7XHJcbiAgICAgICAgb2JqZWN0LmlzU2VhcmNoID0gZmFsc2U7XHJcbiAgICAgICAgb2JqZWN0LmlzTmV3ID0gdHJ1ZTtcclxuICAgICAgICBvYmplY3QuY2xlYXJDb21wbGV0ZWRPdXRwdXQuZW1pdChvYmplY3QuZm9ybUluaXRpYWxWYWx1ZXMpO1xyXG4gICAgb2JqZWN0LmV4ZWN1dGVRdWVyeXJlc3VsdCA9IFtdO1xyXG4gICAgb2JqZWN0LmV4ZWN1dGVRdWVyeXJlc3VsdC5yZXN1bHQgPSAwO1xyXG4gICAgICAgIG9iamVjdC5teUZpbGVzPVtdO1xyXG4gICAgICAgIG9iamVjdC5DdXJyZW50UmVjID0gMDtcclxuICAgICAgICBvYmplY3QuRk9STV9UUklHR0VSX0ZBSUxVUkUgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLmhlbHBNc2cgPSBcIlwiO1xyXG4gICAgICAgIFxyXG4gICAgfVxyXG4gIHB1YmxpYyBzaG93T2tNc2cob2JqZWN0OmFueSwgbXNnOmFueSwgc2V2ZXJpdHk6YW55KSB7XHJcbiAgICAgIGxldCBkaWFsb2dTdHJ1YyA9IHtcclxuICAgICAgICBtc2c6IG1zZyxcclxuICAgICAgdGl0bGU6IHNldmVyaXR5LFxyXG4gICAgICAgIGluZm86IG51bGwsXHJcbiAgICAgIG9iamVjdDogb2JqZWN0LFxyXG4gICAgICBhY3Rpb246IHRoaXMuT2tBY3Rpb25zLFxyXG4gICAgICBjYWxsYmFjazogbnVsbFxyXG4gICAgfTtcclxuICAgICAgICB0aGlzLnNob3dDb25maXJtYXRpb24oZGlhbG9nU3RydWMpO1xyXG4gICAgfVxyXG4gIHB1YmxpYyBvblJlbW92ZV9mb3JtKGZvcm06YW55LCBvYmplY3Q6YW55KTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5wYXJhbUNvbmZpZy5ERUJVR19GTEFHKSBjb25zb2xlLmxvZyhcIm9iamVjdC5pc05ldzpcIiwgb2JqZWN0LmlzTmV3KVxyXG4gICAgaWYgKG9iamVjdC5pc05ldyA9PSB0cnVlKSB7XHJcbiAgICAgICAgICB0aGlzLm9uQ2FuY2VsX2Zvcm0obnVsbCwgb2JqZWN0KVxyXG4gICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHRoaXMucGFyYW1Db25maWcuREVCVUdfRkxBRykgY29uc29sZS5sb2coXCJvYmplY3QuZXhlY3V0ZVF1ZXJ5cmVzdWx0OlwiKTtcclxuICAgICAgICBpZiAodGhpcy5wYXJhbUNvbmZpZy5ERUJVR19GTEFHKSBjb25zb2xlLmxvZyhvYmplY3QuZXhlY3V0ZVF1ZXJ5cmVzdWx0KTtcclxuICAgIGlmICgodHlwZW9mIG9iamVjdC5leGVjdXRlUXVlcnlyZXN1bHQgIT09IFwidW5kZWZpbmVkXCIpICYmIChvYmplY3QuZXhlY3V0ZVF1ZXJ5cmVzdWx0LnRvdGFsID09IDApKSB7XHJcbiAgICAgIHRoaXMuc2hvd09rTXNnKG9iamVjdCwgdGhpcy5ub3RoaW5nVG9EZWxldGVsTXNnLCBcIldhcm5pbmdcIik7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICBpZiAodGhpcy5wYXJhbUNvbmZpZy5ERUJVR19GTEFHKSBjb25zb2xlLmxvZygnb25SZW1vdmUgOiBpc0NoaWxkICcgKyBvYmplY3QuaXNDaGlsZCArIFwiIG9iamVjdC5pc01hc3RlcjpcIiArIG9iamVjdC5pc01hc3Rlcik7XHJcbiAgICBsZXQgTmV3VmFsID0gZm9ybS5nZXRSYXdWYWx1ZSgpO1xyXG4gICAgICAgIGlmICh0aGlzLnBhcmFtQ29uZmlnLkRFQlVHX0ZMQUcpIGNvbnNvbGUubG9nKE5ld1ZhbCk7XHJcbiAgICAgICAgaWYgKHRoaXMucGFyYW1Db25maWcuREVCVUdfRkxBRykgY29uc29sZS5sb2coXCJvYmplY3QuZXhlY3V0ZVF1ZXJ5cmVzdWx0OlwiICsgb2JqZWN0LmV4ZWN1dGVRdWVyeXJlc3VsdClcclxuICAgIGlmIChvYmplY3QuaXNDaGlsZCA9PSBmYWxzZSkge1xyXG4gICAgICAgICAgdmFyIHBhcmFtQ29uZmlnID0gZ2V0UGFyYW1Db25maWcoKTtcclxuICAgICAgICAgIGlmICh0aGlzLnBhcmFtQ29uZmlnLkRFQlVHX0ZMQUcpIGNvbnNvbGUubG9nKHBhcmFtQ29uZmlnKTtcclxuICAgICAgICAgIGlmICh0aGlzLnBhcmFtQ29uZmlnLkRFQlVHX0ZMQUcpIGNvbnNvbGUubG9nKFwicGFyYW1Db25maWcuY2hpbGRSZWNvcmRzOlwiICsgcGFyYW1Db25maWcuY2hpbGRSZWNvcmRzKVxyXG4gICAgICBpZiAodHlwZW9mIHBhcmFtQ29uZmlnLmNoaWxkUmVjb3JkcyA9PT0gXCJ1bmRlZmluZWRcIikge1xyXG4gICAgICAgICAgICBwYXJhbUNvbmZpZy5jaGlsZFJlY29yZHMgPSAwO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgaWYgKChwYXJhbUNvbmZpZy5jaGlsZFJlY29yZHMgIT0gMCkgJiYgKG9iamVjdC5pc01hc3RlciA9PSB0cnVlKSkge1xyXG4gICAgICAgICAgICBsZXQgZGlhbG9nU3RydWMgPSB7XHJcbiAgICAgICAgICAgICAgbXNnOiB0aGlzLmRlbGV0ZURldGFpbE1zZyxcclxuICAgICAgICAgIHRpdGxlOiBcIldhcm5pbmdcIixcclxuICAgICAgICAgICAgICBpbmZvOiBudWxsLFxyXG4gICAgICAgICAgb2JqZWN0OiBvYmplY3QsXHJcbiAgICAgICAgICBhY3Rpb246IHRoaXMuT2tBY3Rpb25zLFxyXG4gICAgICAgICAgY2FsbGJhY2s6IG51bGxcclxuICAgICAgICB9O1xyXG4gICAgICAgICAgICAgIHRoaXMuc2hvd0NvbmZpcm1hdGlvbihkaWFsb2dTdHJ1Yyk7XHJcbiAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLnBhcmFtQ29uZmlnLkRFQlVHX0ZMQUcpIGNvbnNvbGUubG9nKHBhcmFtQ29uZmlnKTtcclxuXHJcbiAgICAgICAgbGV0IGRpYWxvZ1N0cnVjID0ge1xyXG4gICAgICAgICAgbXNnOiB0aGlzLmRlbGV0ZUNvbmZpcm1Nc2csXHJcbiAgICAgIHRpdGxlOiB0aGlzLnBsZWFzZUNvbmZpcm1Nc2csXHJcbiAgICAgICAgICBpbmZvOiBmb3JtLFxyXG4gICAgICBvYmplY3Q6IG9iamVjdCxcclxuICAgICAgYWN0aW9uOiB0aGlzLlllc05vQWN0aW9ucyxcclxuICAgICAgY2FsbGJhY2s6IHRoaXMuUmVtb3ZlX2Zvcm1BY3RcclxuICAgIH07XHJcbiAgICAgICAgICB0aGlzLnNob3dDb25maXJtYXRpb24oZGlhbG9nU3RydWMpO1xyXG5cclxuXHJcbiAgICB9XHJcbiAgcHVibGljIFJlbW92ZV9mb3JtQWN0KGZvcm06YW55LCBvYmplY3Q6YW55KSB7XHJcbiAgICAgIGlmIChvYmplY3QucGFyYW1Db25maWcuREVCVUdfRkxBRykgY29uc29sZS5sb2coXCJpbiBSZW1vdmVfZm9ybUFjdFwiKTtcclxuICAgIGxldCBOZXdWYWw6YW55ID17fTtcclxuICAgIE5ld1ZhbCA9IGZvcm0uZ2V0UmF3VmFsdWUoKTtcclxuICAgICAgaWYgKG9iamVjdC5wYXJhbUNvbmZpZy5ERUJVR19GTEFHKSBjb25zb2xlLmxvZyhOZXdWYWwpO1xyXG4gICAgICAvL29iamVjdC5mb3JtLnJlc2V0KG9iamVjdC5mb3JtSW5pdGlhbFZhbHVlcyk7XHJcbiAgICAgIG9iamVjdC5hY3Rpb24gPSBcIlJFTU9WRVwiO1xyXG5cclxuICAgICAgTmV3VmFsW1wiX1FVRVJZXCJdID0gb2JqZWN0LmRlbGV0ZUNNRDtcclxuICAgICAgb2JqZWN0LnN0YXJTZXJ2aWNlcy5leGVjc3RhclNlcnZpY2VzX2Zvcm0oTmV3VmFsLCBvYmplY3QpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgcHVibGljIG9uTmV3X2Zvcm0oZTphbnksIG9iamVjdDphbnkpOiB2b2lkIHtcclxuICAgIGlmIChvYmplY3QucGFyYW1Db25maWcuREVCVUdfRkxBRykgY29uc29sZS5sb2coXCJvbk5ldzogb2JqZWN0Lm1hc3RlcktleTpcIiAsIG9iamVjdC5tYXN0ZXJLZXksey4uLm9iamVjdC5mb3JtLnZhbHVlfSk7XHJcbiAgICAgICAgb2JqZWN0Lm15RmlsZXM9W107XHJcbiAgICAvLyBvYmplY3QuaW1nX2dhbGxlcnkgPSBbXTtcclxuICAgIC8vIG9iamVjdC5pbWdfYXJyID0gW107XHJcbiAgICBvYmplY3QuZm9ybS5yZXNldChvYmplY3QuZm9ybUluaXRpYWxWYWx1ZXMsIHsgZW1pdEV2ZW50OiBvYmplY3QuZW1pdEV2ZW50ICE9IG51bGwgPyBvYmplY3QuZW1pdEV2ZW50IDogdHJ1ZSB9KTtcclxuICAgIGNvbnNvbGUubG9nKFwiY2hlY2tpbmc6XCIsIG9iamVjdC5mb3JtSW5pdGlhbFZhbHVlcyxvYmplY3QuZm9ybS52YWx1ZSApXHJcbiAgICAgICAgb2JqZWN0LmNsZWFyQ29tcGxldGVkT3V0cHV0LmVtaXQob2JqZWN0LmZvcm1Jbml0aWFsVmFsdWVzKTtcclxuICAgICAgICBvYmplY3QuaXNTZWFyY2ggPSBmYWxzZTtcclxuICAgICAgICBvYmplY3QuaXNOZXcgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuc2V0UHJpbWFyS2V5TmFtZUFycihvYmplY3QsIGZhbHNlKTtcclxuICAgIH1cclxuICAgIC8qKioqKioqKioqKioqKioqKioqIEdyaWQgZnVuY3Rpb25zICAqKioqKioqKi9cclxuICBwdWJsaWMgYWRkSGFuZGxlcl9ncmlkKG9iamVjdDphbnkpOiB2b2lkIHtcclxuICAgICAgaWYgKHR5cGVvZiBvYmplY3QubWFzdGVyS2V5TmFtZUFyciAhPSBcInVuZGVmaW5lZFwiKSB7XHJcbiAgICAgICAgaWYgKG9iamVjdC5pc0NoaWxkID09IHRydWUpIHtcclxuICAgICAgICAgIGlmIChvYmplY3QubWFzdGVyS2V5QXJyWzBdID09IFwiXCIpIHtcclxuICAgICAgICAgICAgdGhpcy5zaG93T2tNc2codGhpcywgdGhpcy5zYXZlTWFzdGVyTXNnLCBcIkVycm9yXCIpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgaWYgKG9iamVjdC5pc0NoaWxkID09IHRydWUpIHtcclxuICAgICAgICAgICAgaWYgKG9iamVjdC5tYXN0ZXJLZXkgPT0gXCJcIikge1xyXG4gICAgICAgICAgICAgIHRoaXMuc2hvd09rTXNnKHRoaXMsIHRoaXMuc2F2ZU1hc3Rlck1zZywgXCJFcnJvclwiKTtcclxuICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICBcclxuICAgICAgaWYgKG9iamVjdC5wYXJhbUNvbmZpZy5ERUJVR19GTEFHKSBjb25zb2xlLmxvZyhcInRlc3Q0MTpvYmplY3QuZ3JpZEluaXRpYWxWYWx1ZXM6XCIsIFxyXG4gICAgICAgIG9iamVjdC5ncmlkSW5pdGlhbFZhbHVlcywgb2JqZWN0Lm1hc3RlcktleU5hbWVBcnIsIG9iamVjdC5tYXN0ZXJLZXlBcnIsIFwiZWRpdGVkUm93SW5kZXg6XCIsIG9iamVjdC5lZGl0ZWRSb3dJbmRleCwgXCJpc0NoaWxkOlwiLCBvYmplY3QuaXNDaGlsZCk7XHJcbiAgICAgIG9iamVjdC5zYXZlQ3VycmVudCgpO1xyXG4gICAgICB0aGlzLnNldFByaW1hcktleU5hbWVBcnIob2JqZWN0LCBmYWxzZSk7XHJcbiAgICAgIC8qIG9iamVjdC5ncmlkSW5pdGlhbFZhbHVlcy5NT0RVTEUgPSBvYmplY3QubWFzdGVyS2V5OyovXHJcbiAgICAgIGlmICggKHR5cGVvZiBvYmplY3QubWFzdGVyS2V5TmFtZUFyciAhPSBcInVuZGVmaW5lZFwiKSAmJiAob2JqZWN0Lm1hc3RlcktleU5hbWVBcnIubGVuZ3RoICE9IDApIClcclxuICAgICAge1xyXG4gICAgICAgIHRoaXMuc2V0UHJpbWFyS2V5TmFtZUFycihvYmplY3QsIGZhbHNlKTtcclxuICAgICAgICBpZihvYmplY3QuaXNDaGlsZCA9PSB0cnVlKXtcclxuICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpPCBvYmplY3QubWFzdGVyS2V5TmFtZUFyci5sZW5ndGg7IGkrKyl7XHJcbiAgICAgICAgICAgIGxldCByZWFkT25seSA9IFwiaXNcIitvYmplY3QubWFzdGVyS2V5TmFtZUFycltpXSArIFwicmVhZE9ubHlcIjtcclxuICAgICAgICAgICAgaWYgKG9iamVjdC5wcmltYXJLZXlSZWFkT25seUFycil7XHJcbiAgICAgICAgICAgICAgb2JqZWN0LnByaW1hcktleVJlYWRPbmx5QXJyW3JlYWRPbmx5XSA9IHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgbGV0IGV4aXN0cyA9IG9iamVjdC5ncmlkSW5pdGlhbFZhbHVlc1tvYmplY3QubWFzdGVyS2V5TmFtZUFycltpXV1cclxuICAgICAgICAgICAgaWYgKG9iamVjdC5wYXJhbUNvbmZpZy5ERUJVR19GTEFHKSBjb25zb2xlLmxvZyhcInRlc3Q0MjpvYmplY3QuZ3JpZEluaXRpYWxWYWx1ZXM6ZXhpc3RzOlwiLGV4aXN0cywgb2JqZWN0LmdyaWRJbml0aWFsVmFsdWVzKTtcclxuICAgICAgICAgICAgICBpZiAodHlwZW9mIGV4aXN0cyAhPT0gXCJ1bmRlZmluZWRcIil7XHJcbiAgICAgICAgICAgICAgb2JqZWN0LmdyaWRJbml0aWFsVmFsdWVzW29iamVjdC5tYXN0ZXJLZXlOYW1lQXJyW2ldXSA9IG9iamVjdC5tYXN0ZXJLZXlBcnJbaV07XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAob2JqZWN0LnBhcmFtQ29uZmlnLkRFQlVHX0ZMQUcpIGNvbnNvbGUubG9nKFwidGVzdDQyOm9iamVjdC5ncmlkSW5pdGlhbFZhbHVlczoxOlwiLCBvYmplY3QuZ3JpZEluaXRpYWxWYWx1ZXMpO1xyXG4gICAgICB9XHJcbiAgICAgIGVsc2VcclxuICAgICAge1xyXG4gICAgICAgIGlmIChvYmplY3QucGFyYW1Db25maWcuREVCVUdfRkxBRykgY29uc29sZS5sb2coXCJ0ZXN0NDpvYmplY3QubWFzdGVyS2V5TmFtZTpcIiwgb2JqZWN0Lm1hc3RlcktleU5hbWUsIG9iamVjdC5tYXN0ZXJLZXkpO1xyXG4gICAgICAgIGlmIChvYmplY3QubWFzdGVyS2V5TmFtZSAhPSBcIlwiICYmICBvYmplY3QubWFzdGVyS2V5ICE9IFwiXCIpe1xyXG4gICAgICAgICAgb2JqZWN0LmdyaWRJbml0aWFsVmFsdWVzW29iamVjdC5tYXN0ZXJLZXlOYW1lXSA9IG9iamVjdC5tYXN0ZXJLZXk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChvYmplY3QucGFyYW1Db25maWcuREVCVUdfRkxBRykgY29uc29sZS5sb2coXCJ0ZXN0NDI6b2JqZWN0LmdyaWRJbml0aWFsVmFsdWVzOjI6XCIsIG9iamVjdC5ncmlkSW5pdGlhbFZhbHVlcyk7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKG9iamVjdC5wYXJhbUNvbmZpZy5ERUJVR19GTEFHKSBjb25zb2xlLmxvZyhcInRlc3Q0MjpvYmplY3QuZ3JpZEluaXRpYWxWYWx1ZXM6XCIsIG9iamVjdC5ncmlkSW5pdGlhbFZhbHVlcyk7XHJcbiAgICAgIG9iamVjdC5jbG9zZUVkaXRvcigpO1xyXG4gICAgICBvYmplY3QuZm9ybUdyb3VwID0gb2JqZWN0LmNyZWF0ZUZvcm1Hcm91cEdyaWQoXHJcbiAgICAgICAgb2JqZWN0LmdyaWRJbml0aWFsVmFsdWVzXHJcbiAgICAgICk7XHJcbiAgICAgIG9iamVjdC5mb3JtR3JvdXAuc2V0RXJyb3JzKHtcclxuICAgICAgICBub3RVbmlxdWU6IHRydWVcclxuICAgICAgfSk7XHJcbiAgICAgIGlmIChvYmplY3QucGFyYW1Db25maWcuREVCVUdfRkxBRykgY29uc29sZS5sb2coXCJvYmplY3QuZm9ybUdyb3VwOlwiLCBvYmplY3QuZm9ybUdyb3VwKVxyXG4gICAgICBvYmplY3QuaXNOZXcgPSB0cnVlO1xyXG4gICAgICBvYmplY3QuZ3JpZC5hZGRSb3cob2JqZWN0LmZvcm1Hcm91cCk7XHJcbiAgICAgIC8vdGhpcy5zZXRQcmltYXJLZXlOYW1lQXJyKG9iamVjdCwgZmFsc2UpO1xyXG4gICAgICB9XHJcbiAgXHJcbiAgICBwdWJsaWMgcmVtb3ZlSGFuZGxlcl9ncmlkKHNlbmRlcjphbnksIG9iamVjdDphbnkpIHtcclxuICAgICAgLy9zZW5kZXIuY2FuY2VsQ2VsbCgpO1xyXG4gICAgICBsZXQgcGFyYW1Db25maWcgPSBnZXRQYXJhbUNvbmZpZygpO1xyXG4gICAgaWYgKG9iamVjdC5wYXJhbUNvbmZpZy5ERUJVR19GTEFHKSBjb25zb2xlLmxvZyhcInJlbW92ZUhhbmRsZXJfZ3JpZCBwYXJhbUNvbmZpZzpvYmplY3QuaXNNYXN0ZXIgXCIgKyBvYmplY3QuaXNNYXN0ZXIpO1xyXG4gICAgICBpZiAob2JqZWN0LnBhcmFtQ29uZmlnLkRFQlVHX0ZMQUcpIGNvbnNvbGUubG9nKHBhcmFtQ29uZmlnKTtcclxuICAgIGlmICgocGFyYW1Db25maWcuY2hpbGRSZWNvcmRzICE9IDApICYmIChvYmplY3QuaXNNYXN0ZXIgPT0gdHJ1ZSkpIHtcclxuICAgICAgICBsZXQgZGlhbG9nU3RydWMgPSB7XHJcbiAgICAgICAgICBtc2c6IHRoaXMuZGVsZXRlRGV0YWlsTXNnLFxyXG4gICAgICAgIHRpdGxlOiBcIldhcm5pbmdcIixcclxuICAgICAgICAgIGluZm86IG51bGwsXHJcbiAgICAgICAgb2JqZWN0OiBvYmplY3QsXHJcbiAgICAgICAgYWN0aW9uOiB0aGlzLk9rQWN0aW9ucyxcclxuICAgICAgICBjYWxsYmFjazogbnVsbFxyXG4gICAgICB9O1xyXG4gICAgICAgICAgdGhpcy5zaG93Q29uZmlybWF0aW9uKGRpYWxvZ1N0cnVjKTtcclxuICAgICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG4gICAgaWYgKG9iamVjdC5wYXJhbUNvbmZpZy5ERUJVR19GTEFHKSBjb25zb2xlLmxvZyhcIm9iamVjdC5lZGl0ZWRSb3dJbmRleCA6XCIsIG9iamVjdC5lZGl0ZWRSb3dJbmRleCwgb2JqZWN0LmdyaWQuZGF0YS5kYXRhKVxyXG4gICAgaWYgKHR5cGVvZiBvYmplY3QuZWRpdGVkUm93SW5kZXggIT09IFwidW5kZWZpbmVkXCIpIHtcclxuICAgICAgbGV0IE5ld1ZhbDphbnkgPSB7fTtcclxuICAgICAgICAvL2xldCBncmlkX2RhdGEgPSBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KG9iamVjdC5ncmlkLmRhdGEpKTtcclxuICAgICAgICBsZXQgZ3JpZF9kYXRhID0gb2JqZWN0LmdyaWQuZGF0YTtcclxuICAgICAgICBpZiAob2JqZWN0LnBhcmFtQ29uZmlnLkRFQlVHX0ZMQUcpIGNvbnNvbGUubG9nKFwib2JqZWN0LmVkaXRlZFJvd0luZGV4IDpcIiwgZ3JpZF9kYXRhKVxyXG5cclxuICAgICAgTmV3VmFsID0gZ3JpZF9kYXRhLmRhdGFbb2JqZWN0LmVkaXRlZFJvd0luZGV4XTtcclxuICAgICAgICBsZXQgY3VyQ01EID0gTmV3VmFsW1wiX1FVRVJZXCJdO1xyXG4gICAgICAgIGlmIChvYmplY3QucGFyYW1Db25maWcuREVCVUdfRkxBRykgY29uc29sZS5sb2coXCJjaGVjazpOZXdWYWw6X1FVRVJZXCIsIE5ld1ZhbFtcIl9RVUVSWVwiXSlcclxuICAgICAgbGV0IHJlc3VsdDEgPSBvYmplY3Quc3RhclNlcnZpY2VzLnJlbW92ZVJlYyhvYmplY3QuZ3JpZC5kYXRhLCBvYmplY3QuZWRpdGVkUm93SW5kZXgpO1xyXG4gICAgICAgIG9iamVjdC5ncmlkLmRhdGEgPSByZXN1bHQxO1xyXG4gICAgICAgIGlmIChvYmplY3QucGFyYW1Db25maWcuREVCVUdfRkxBRykgY29uc29sZS5sb2coXCJjaGVjazpOZXdWYWw6XCIsIE5ld1ZhbClcclxuXHJcbiAgICAgICAgTmV3VmFsW1wiX1FVRVJZXCJdID0gb2JqZWN0LmRlbGV0ZUNNRDtcclxuICAgICAgaWYgKGN1ckNNRCAhPSBvYmplY3QuaW5zZXJ0Q01EKSB7XHJcbiAgICAgICAgICBvYmplY3QuYWRkVG9Cb2R5KE5ld1ZhbCk7XHJcbiAgICAgICAgICBvYmplY3QucmVtb3ZlZFJlYy5wdXNoKE5ld1ZhbCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgfVxyXG4gICAgICBlbHNlXHJcbiAgICAgICAgb2JqZWN0LmNhbmNlbEhhbmRsZXIoKTtcclxuXHJcblxyXG4gICAgfVxyXG4gICAgcHVibGljIHNhdmVDdXJyZW50X2dyaWQob2JqZWN0OmFueSk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMucGFyYW1Db25maWcuREVCVUdfRkxBRykgY29uc29sZS5sb2coXCJzYXZlQ3VycmVudF9ncmlkOm9iamVjdC5mb3JtR3JvdXA6XCIsIG9iamVjdC5mb3JtR3JvdXApO1xyXG5cclxuXHJcbiAgICBpZiAob2JqZWN0LmZvcm1Hcm91cCkge1xyXG4gICAgICBpZiAodGhpcy5wYXJhbUNvbmZpZy5ERUJVR19GTEFHKSBjb25zb2xlLmxvZyhcInNhdmVDdXJyZW50X2dyaWQ6b2JqZWN0LmZvcm1Hcm91cDpcIiwgb2JqZWN0LmZvcm1Hcm91cCk7XHJcbiAgICAgIGxldCBOZXdWYWw6YW55ID0ge307XHJcbiAgICAgICAgICBOZXdWYWwgPSBPYmplY3QuYXNzaWduKHt9LCBvYmplY3QuZm9ybUdyb3VwLnZhbHVlKTtcclxuICAgICAgaWYgKHRoaXMucGFyYW1Db25maWcuREVCVUdfRkxBRykgY29uc29sZS5sb2coJ2NoZWNrOmRpcnR5IDonLCBvYmplY3QuZm9ybUdyb3VwLmRpcnR5LCBcIiBpc05ldzpcIiwgb2JqZWN0LmlzTmV3LCBcIiBOZXdWYWw6IFwiLCBOZXdWYWwpO1xyXG4gICAgICBpZiAob2JqZWN0LmZvcm1Hcm91cC5kaXJ0eSA9PT0gdHJ1ZSkge1xyXG4gICAgICAgIGlmIChvYmplY3QuaXNOZXcgPT0gdHJ1ZSkge1xyXG4gICAgICAgICAgaWYgKHRoaXMucGFyYW1Db25maWcuREVCVUdfRkxBRykgY29uc29sZS5sb2coXCJoZXJlMSBOZXdWYWxcIiwgTmV3VmFsKTtcclxuICAgICAgICAgICAgICAgLy9sZXQgcmVzdWx0ID0gb2JqZWN0LnN0YXJTZXJ2aWNlcy5hZGRSZWMob2JqZWN0LmdyaWQuZGF0YSwgTmV3VmFsKSA7XHJcbiAgICAgICAgICAgICAvLyBvYmplY3QuZ3JpZC5kYXRhID0gcmVzdWx0O1xyXG4gICAgICAgICAgICAgIGlmICh0aGlzLnBhcmFtQ29uZmlnLkRFQlVHX0ZMQUcpIGNvbnNvbGUubG9nKG9iamVjdC5ncmlkLmRhdGEpO1xyXG5cclxuICAgICAgICAgICAgICBpZiAob2JqZWN0LmdyaWQuZGF0YSA9PSBudWxsIHx8IHR5cGVvZiBvYmplY3QuZ3JpZC5kYXRhLmRhdGEgPT0gXCJ1bmRlZmluZWRcIilcclxuICAgICAgICAgICAgb2JqZWN0LmdyaWQuZGF0YSA9IHsgZGF0YTogW10sIHRvdGFsOiAwIH07XHJcbiAgICAgICAgICAgICAgLy9vYmplY3QuZ3JpZC5kYXRhLmRhdGEucHVzaChOZXdWYWwpO1xyXG4gICAgICAgICAgb2JqZWN0LmdyaWQuZGF0YS5kYXRhLnNwbGljZSgwLCAwLCBOZXdWYWwpO1xyXG4gICAgICAgICAgICAgIE5ld1ZhbFtcIl9RVUVSWVwiXSA9IG9iamVjdC5pbnNlcnRDTUQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuXHJcbiAgICAgICAgICBpZiAodGhpcy5wYXJhbUNvbmZpZy5ERUJVR19GTEFHKSBjb25zb2xlLmxvZygnY2hlY2s6b2JqZWN0LmdyaWQuZGF0YTonLCBvYmplY3QuZ3JpZC5kYXRhLCBcIiBOZXdWYWw6XCIsIE5ld1ZhbCk7XHJcbiAgICAgICAgICAgICAgLy9OZXdWYWwgPSB0aGlzLnBhcnNlVG9EYXRlKE5ld1ZhbCk7XHJcbiAgICAgICAgICBpZiAob2JqZWN0LmdyaWQuZGF0YS5kYXRhW29iamVjdC5lZGl0ZWRSb3dJbmRleF0uX1FVRVJZID09IG9iamVjdC5pbnNlcnRDTUQpIHtcclxuICAgICAgICAgICAgICAgIE5ld1ZhbFtcIl9RVUVSWVwiXSA9IG9iamVjdC5pbnNlcnRDTUQ7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBOZXdWYWxbXCJfUVVFUllcIl0gPSBvYmplY3QudXBkYXRlQ01EO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICBvYmplY3QuZ3JpZC5kYXRhLmRhdGFbb2JqZWN0LmVkaXRlZFJvd0luZGV4XSA9IE5ld1ZhbDtcclxuICAgICAgICAgICAgICAvL2xldCByZXN1bHQxID0gb2JqZWN0LnN0YXJTZXJ2aWNlcy51cGRhdGVSZWMob2JqZWN0LmdyaWQuZGF0YSAsIG9iamVjdC5lZGl0ZWRSb3dJbmRleCwgTmV3VmFsICk7XHJcbiAgICAgICAgICAgICAgLy9vYmplY3QuZ3JpZC5kYXRhID0gcmVzdWx0MTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvL29iamVjdC5hZGRUb0JvZHkoTmV3VmFsKTsgLy8gYWRkVG9Cb2R5IHdpbGwgYmUgZG9uZSBhdCBzYXZlQ2hhbmdlc19ncmlkIHRvIGF2b2lkIGR1cGxpY3RlIHVwZGF0ZSBzaW5jZSBvYmplY3QuZ3JpZC5kYXRhLmRhdGEgaXMgZ2V0dGluZyB1cGRhdGVkXHJcbiAgICAgICAgaWYgKHRoaXMucGFyYW1Db25maWcuREVCVUdfRkxBRykgY29uc29sZS5sb2cob2JqZWN0LmdyaWQuZGF0YSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBpZiAodGhpcy5wYXJhbUNvbmZpZy5ERUJVR19GTEFHKSBjb25zb2xlLmxvZyhcInByZSBjbG9zZVwiKVxyXG4gICAgICAgICAgb2JqZWN0LmNsb3NlRWRpdG9yKCk7XHJcbiAgICAgICAgICBpZiAodGhpcy5wYXJhbUNvbmZpZy5ERUJVR19GTEFHKSBjb25zb2xlLmxvZyhcInBvc3QgY2xvc2VcIilcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgcHVibGljIGNsb3NlRWRpdG9yX2dyaWQob2JqZWN0KTogdm9pZCB7XHJcbiAgICAvL2NvbnNvbGUubG9nKFwib2JqZWN0LmZvcm1Hcm91cDpjbG9zZUVkaXRvcl9ncmlkXCIpXHJcbiAgICAgIG9iamVjdC5ncmlkLmNsb3NlUm93KG9iamVjdC5lZGl0ZWRSb3dJbmRleCk7XHJcbiAgICAgIG9iamVjdC5pc05ldyA9IGZhbHNlO1xyXG4gICAgICBvYmplY3QuZWRpdGVkUm93SW5kZXggPSB1bmRlZmluZWQ7XHJcbiAgICAgIG9iamVjdC5mb3JtR3JvdXAgPSB1bmRlZmluZWQ7XHJcblxyXG4gICAgLy8gZ3JpZC5jYW5jZWw7XHJcbiAgICAvLyBvYmplY3QuZ3JpZC5kYXRhID0gbnVsbDtcclxuICAgIC8vIG9iamVjdC5jbGVhckNvbXBsZXRlZE91dHB1dC5lbWl0KG9iamVjdC5mb3JtSW5pdGlhbFZhbHVlcyk7XHJcbiAgICB9XHJcbiAgcHVibGljIGNhbmNlbEhhbmRsZXJfZ3JpZChvYmplY3Q6YW55KTogdm9pZCB7XHJcbiAgICAgIG9iamVjdC5jbG9zZUVkaXRvcigpO1xyXG4gICAgICBvYmplY3QuaXNTZWFyY2ggPSBmYWxzZTtcclxuICAgICAgdGhpcy5oZWxwTXNnX2dyaWQgPSBcIlwiO1xyXG4gICAgfVxyXG4gIHB1YmxpYyBzYXZlQ2hhbmdlc19ncmlkX2luVHJhbnMoZ3JpZDphbnksIG9iamVjdDphbnksIE5ld1ZhbDphbnkpIHtcclxuICAgICAgdGhpcy5jb21taXRCb2R5LnB1c2goTmV3VmFsKTtcclxuICAgIGlmIChvYmplY3QuaXNDaGlsZCA9PSB0cnVlKSB7XHJcbiAgICAgICAgbGV0IGdyaWRSZWNvcmRzID0gb2JqZWN0LmdyaWQuZGF0YS5kYXRhLmxlbmd0aDtcclxuICAgICAgICBsZXQgcGFyYW1Db25maWcgPSB7XHJcbiAgICAgICAgICBcIk5hbWVcIjogXCJjaGlsZFJlY29yZHNcIixcclxuICAgICAgICAgIFwiVmFsXCI6IGdyaWRSZWNvcmRzXHJcbiAgICAgICAgfTtcclxuICAgICAgICBzZXRQYXJhbUNvbmZpZyhwYXJhbUNvbmZpZyk7XHJcbiAgICAgIH1cclxuICAgICAgXHJcbiAgICBpZiAodHlwZW9mIG9iamVjdC5jYWxsQmFja1Bvc3RfU2F2ZSAhPT0gXCJ1bmRlZmluZWRcIikge1xyXG4gICAgICBsZXQgTmV3VmFsMTphbnkgPSBbXTtcclxuICAgICAgICAgICAgTmV3VmFsMS5wdXNoKE5ld1ZhbCk7XHJcbiAgICAgICAgb2JqZWN0LmNhbGxCYWNrUG9zdF9TYXZlLmFwcGx5KG9iamVjdCwgTmV3VmFsMSk7XHJcbiAgICAgIH1cclxuICAgICAgdGhpcy5zZXRQcmltYXJLZXlOYW1lQXJyKG9iamVjdCwgdHJ1ZSk7XHJcbiAgICAgIG9iamVjdC5zYXZlQ29tcGxldGVkT3V0cHV0LmVtaXQoTmV3VmFsKTtcclxuICAgIC8vb2JqZWN0LnNhdmVDb21wbGV0ZWRPdXRwdXQuZW1pdChvYmplY3QuZ3JpZC5kYXRhKTtcclxuICAgIH1cclxuICBwdWJsaWMgc2F2ZUNoYW5nZXNfZ3JpZChncmlkOiBhbnksIG9iamVjdDphbnkpOiB2b2lkIHtcclxuICAgIGlmICgob2JqZWN0LmdyaWQuZGF0YSA9PSBudWxsKSB8fCAodHlwZW9mIG9iamVjdC5ncmlkLmRhdGEuZGF0YSA9PSBcInVuZGVmaW5lZFwiKSkge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG4gICAgICBsZXQgRXJyb3IgPSBmYWxzZTtcclxuICAgIGlmICh0aGlzLnBhcmFtQ29uZmlnLkRFQlVHX0ZMQUcpIGNvbnNvbGUubG9nKFwicHJlIG9iamVjdC5zYXZlQ3VycmVudFwiKTtcclxuICAgICAgb2JqZWN0LnNhdmVDdXJyZW50KCk7XHJcblxyXG4gICAgaWYgKG9iamVjdC5jb21wb25lbnRDb25maWcucm91dGluZUF1dGggIT0gbnVsbCkge1xyXG4gICAgICBpZiAodGhpcy5wYXJhbUNvbmZpZy5ERUJVR19GTEFHKSBjb25zb2xlLmxvZyhcImF1dGhMZXZlbDpcIiArIG9iamVjdC5jb21wb25lbnRDb25maWcucm91dGluZUF1dGguYXV0aExldmVsKTtcclxuICAgICAgaWYgKG9iamVjdC5jb21wb25lbnRDb25maWcucm91dGluZUF1dGguYXV0aExldmVsICE9IDIpIHtcclxuICAgICAgICAgIGxldCBkaWFsb2dTdHJ1YyA9IHtcclxuICAgICAgICAgICAgbXNnOiB0aGlzLnJlYWRPbmx5TXNnLFxyXG4gICAgICAgICAgdGl0bGU6IFwiV2FybmluZ1wiLFxyXG4gICAgICAgICAgICBpbmZvOiBudWxsLFxyXG4gICAgICAgICAgb2JqZWN0OiBvYmplY3QsXHJcbiAgICAgICAgICBhY3Rpb246IHRoaXMuT2tBY3Rpb25zLFxyXG4gICAgICAgICAgY2FsbGJhY2s6IG51bGxcclxuICAgICAgICB9O1xyXG4gICAgICAgICAgICB0aGlzLnNob3dDb25maXJtYXRpb24oZGlhbG9nU3RydWMpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICBsZXQgTmV3VmFsID0gW107XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IG9iamVjdC5ncmlkLmRhdGEuZGF0YS5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIGlmICh0aGlzLnBhcmFtQ29uZmlnLkRFQlVHX0ZMQUcpIGNvbnNvbGUubG9nKFwiY2hlY2s6IG9iamVjdC5ncmlkLmRhdGEuZGF0YVtpXS5fUVVFUlk6XCIsIG9iamVjdC5ncmlkLmRhdGEuZGF0YVtpXS5fUVVFUlkpXHJcbiAgICAgIGlmICh0eXBlb2Ygb2JqZWN0LmdyaWQuZGF0YS5kYXRhW2ldLl9RVUVSWSAhPSBcInVuZGVmaW5lZFwiKSB7XHJcbiAgICAgICAgICAgIE5ld1ZhbCA9IG9iamVjdC5ncmlkLmRhdGEuZGF0YVtpXTtcclxuICAgICAgICAgIG9iamVjdC5hZGRUb0JvZHkoTmV3VmFsKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgaWYgKHRoaXMuaW5UcmFucykge1xyXG4gICAgICAgIHRoaXMuc2F2ZUNoYW5nZXNfZ3JpZF9pblRyYW5zKGdyaWQsIG9iamVjdCwgTmV3VmFsKTtcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH1cclxuICAgICAgaWYgKHRoaXMucGFyYW1Db25maWcuREVCVUdfRkxBRykgY29uc29sZS5sb2coXCJjaGVjazogb2JqZWN0LkJvZHk6XCIsIG9iamVjdC5Cb2R5KTtcclxuICAgIGlmIChvYmplY3QuQm9keS5sZW5ndGggIT0gMCkge1xyXG4gICAgICBsZXQgUGFnZSA9IFwiJl90cmFucz1ZXCI7XHJcbiAgICAgIHRoaXMucG9zdChvYmplY3QsIFBhZ2UsIG9iamVjdC5Cb2R5KS5zdWJzY3JpYmUoUGFnZSA9PiB7XHJcbiAgICAgICAgb2JqZWN0LkJvZHkgPSBbXTtcclxuICAgICAgICAvL29iamVjdC5zYXZlQ29tcGxldGVkT3V0cHV0LmVtaXQob2JqZWN0LmdyaWQuZGF0YSk7XHJcbiAgICAgICAgb2JqZWN0LnNhdmVDb21wbGV0ZWRPdXRwdXQuZW1pdChOZXdWYWwpO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSBvYmplY3QuZ3JpZC5kYXRhLmRhdGEubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcclxuICAgICAgICAgIGlmICh0eXBlb2Ygb2JqZWN0LmdyaWQuZGF0YS5kYXRhW2ldLl9RVUVSWSAhPSBcInVuZGVmaW5lZFwiKSB7XHJcbiAgICAgICAgICAgICAgb2JqZWN0LmdyaWQuZGF0YS5kYXRhW2ldLl9RVUVSWV9ET05FID0gb2JqZWN0LmdyaWQuZGF0YS5kYXRhW2ldLl9RVUVSWTtcclxuICAgICAgICAgICAgICBkZWxldGUgb2JqZWN0LmdyaWQuZGF0YS5kYXRhW2ldLl9RVUVSWTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgaWYgKHRoaXMucGFyYW1Db25maWcuREVCVUdfRkxBRykgY29uc29sZS5sb2coXCJjaGVjazogb2JqZWN0LmdyaWQuZGF0YS5kYXRhW2ldLl9RVUVSWTpcIiwgb2JqZWN0LmdyaWQuZGF0YS5kYXRhW2ldLl9RVUVSWSlcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICBpZiAodGhpcy5wYXJhbUNvbmZpZy5ERUJVR19GTEFHKSBjb25zb2xlLmxvZyhcIm9iamVjdC5ncmlkLmRhdGEuZGF0YTpcIiwgb2JqZWN0LmdyaWQuZGF0YS5kYXRhKVxyXG4gICAgICAgICAgaWYgKHRoaXMucGFyYW1Db25maWcuREVCVUdfRkxBRykgY29uc29sZS5sb2coXCJvYmplY3QuZ3JpZC5kYXRhLmRhdGE6Lmxlbmd0aFwiLCBvYmplY3QuZ3JpZC5kYXRhLmRhdGEubGVuZ3RoKVxyXG4gICAgICAgIGlmIChvYmplY3QuaXNDaGlsZCA9PSB0cnVlKSB7XHJcbiAgICAgICAgICAgIGxldCBncmlkUmVjb3JkcyA9IG9iamVjdC5ncmlkLmRhdGEuZGF0YS5sZW5ndGg7XHJcbiAgICAgICAgICAgIGxldCBwYXJhbUNvbmZpZyA9IHtcclxuICAgICAgICAgICAgICBcIk5hbWVcIjogXCJjaGlsZFJlY29yZHNcIixcclxuICAgICAgICAgICAgICBcIlZhbFwiOiBncmlkUmVjb3Jkc1xyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICBzZXRQYXJhbUNvbmZpZyhwYXJhbUNvbmZpZyk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5zaG93Tm90aWZpY2F0aW9uKCdzdWNjZXNzJywgXCJEYXRhIHNhdmVkIHN1Y2Nlc3NmdWxseVwiKTtcclxuICAgICAgICBpZiAodHlwZW9mIG9iamVjdC5jYWxsQmFja1Bvc3RfU2F2ZSAhPT0gXCJ1bmRlZmluZWRcIikge1xyXG4gICAgICAgICAgbGV0IE5ld1ZhbDE6YW55ID0gW107XHJcbiAgICAgICAgICAgICAgICBOZXdWYWwxLnB1c2goTmV3VmFsKTtcclxuICAgICAgICAgICAgb2JqZWN0LmNhbGxCYWNrUG9zdF9TYXZlLmFwcGx5KG9iamVjdCwgTmV3VmFsMSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICB0aGlzLnNldFByaW1hcktleU5hbWVBcnIob2JqZWN0LCB0cnVlKTtcclxuICAgICAgICAvLyBpZiAob2JqZWN0LmRpYWJsZUVtaXRTYXZlID09IHRydWUpIFxyXG4gICAgICAgIC8vICAgICB7fVxyXG4gICAgICAgIC8vICAgZWxzZVxyXG4gICAgICAgIC8vb2JqZWN0LnNhdmVDb21wbGV0ZWRPdXRwdXQuZW1pdChvYmplY3QuZ3JpZC5kYXRhKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGVyciA9PiB7XHJcbiAgICAgICAgICBmb3IgKGxldCBpID0gb2JqZWN0LkJvZHkubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcclxuICAgICAgICAgICAgaWYgKG9iamVjdC5Cb2R5W2ldLl9RVUVSWSAhPSBvYmplY3QuZGVsZXRlQ01EKSB7XHJcbiAgICAgICAgICAgICAgb2JqZWN0LkJvZHkuc3BsaWNlKGksIDEpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBpZiAodGhpcy5wYXJhbUNvbmZpZy5ERUJVR19GTEFHKSBjb25zb2xlLmxvZyhcImVycjpcIiwgZXJyKVxyXG4gICAgICAgICAgbGV0IGVyck1zZyA9IHRoaXMuZ2V0RXJyb3JNc2coZXJyKTtcclxuICAgICAgICAgIHRoaXMuc2hvd05vdGlmaWNhdGlvbihcImVycm9yXCIsIFwiZXJyb3I6XCIgKyBlcnJNc2cpO1xyXG4gICAgICAgICAgRXJyb3IgPSB0cnVlO1xyXG4gICAgICAgIH0pO1xyXG4gICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICAgIGlmICh0aGlzLnBhcmFtQ29uZmlnLkRFQlVHX0ZMQUcpIGNvbnNvbGUubG9nKFwib2JqZWN0LmlzTWFzdGVyOlwiICsgb2JqZWN0LmlzTWFzdGVyKTtcclxuICAgICAgICBpZiAoIW9iamVjdC5pc01hc3RlcilcclxuICAgICAgICB0aGlzLnNob3dOb3RpZmljYXRpb24oJ3dhcm5pbmcnLCBcIk5vIGNoYW5nZXMgdG8gc2F2ZVwiKTtcclxuICAgICAgfVxyXG4gICAgICAgIGlmICghRXJyb3Ipe1xyXG4gICAgICAgICAgb2JqZWN0LnNhdmVDb21wbGV0ZWRPdXRwdXQuZW1pdChOZXdWYWwpO1xyXG4gICAgICAgICAgLy9vYmplY3Quc2F2ZUNvbXBsZXRlZE91dHB1dC5lbWl0KG9iamVjdC5ncmlkLmRhdGEpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICBwdWJsaWMgZ2V0RXJyb3JNc2coZXJyOmFueSlcclxuICAgIHtcclxuICAgICAgbGV0IGVyck1zZyA9IFwiXCI7XHJcbiAgICAgIFxyXG4gICAgICBpZiAodHlwZW9mIGVyci5lcnJvci5lcnJvciAhPSBcInVuZGVmaW5lZFwiKXtcclxuICAgICAgICBlcnJNc2cgPSBlcnIuZXJyb3IuZXJyb3I7XHJcbiAgICAgIH1cclxuICAgICAgZWxzZVxyXG4gICAgICAgIGVyck1zZyA9IGVyci5lcnJvcjtcclxuXHJcbiAgICAgICAgcmV0dXJuIGVyck1zZztcclxuXHJcbiAgICB9XHJcblxyXG5cclxuXHJcbiAgcHVibGljIGV4ZWN1dGVRdWVyeV9ncmlkKGdyaWQ6IGFueSwgb2JqZWN0OmFueSk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMucGFyYW1Db25maWcuREVCVUdfRkxBRykgY29uc29sZS5sb2coXCJvYmplY3QuZ3JpZDpcIiwgb2JqZWN0LmdyaWQpXHJcbiAgICAgICAgaWYgKHR5cGVvZiBncmlkID09IFwidW5kZWZpbmVkXCIgfHwgdHlwZW9mIG9iamVjdC5ncmlkID09IFwidW5kZWZpbmVkXCIpXHJcbiAgICAgICAgcmV0dXJuO1xyXG5cclxuICAgICAgbGV0IGRpcnR5ID0gZmFsc2U7XHJcbiAgICAgIC8vaWYgKHRoaXMucGFyYW1Db25maWcuREVCVUdfRkxBRykgY29uc29sZS5sb2cgKFwiZXhlY3V0ZVF1ZXJ5X2dyaWQ6XCIgKyBvYmplY3QuQm9keS5sZW5ndGggKyBcIiBcIiArIG9iamVjdC5ncmlkLmlzRWRpdGluZygpLCBcIm9iamVjdC5Cb2R5OlwiLG9iamVjdC5Cb2R5KTtcclxuICAgICAgLy9pZiAodGhpcy5wYXJhbUNvbmZpZy5ERUJVR19GTEFHKSBjb25zb2xlLmxvZyhcIm9iamVjdC5Cb2R5OlwiLG9iamVjdC5Cb2R5KVxyXG4gICAgICBpZiAoKG9iamVjdC5Cb2R5Lmxlbmd0aCAhPSAwKSB8fCBvYmplY3QuZ3JpZC5pc0VkaXRpbmcoKSA9PSB0cnVlKVxyXG4gICAgICB7XHJcbiAgICAgICAgZGlydHkgPSB0cnVlO1xyXG4gICAgICB9XHJcbiAgICBpZiAoZGlydHkgPT0gdHJ1ZSkge1xyXG4gICAgICAgIGxldCBkaWFsb2dTdHJ1YyA9IHtcclxuICAgICAgICAgIG1zZzogdGhpcy5zYXZlQ2hhbmdlc01zZyxcclxuICAgICAgICB0aXRsZTogdGhpcy5wbGVhc2VDb25maXJtTXNnLFxyXG4gICAgICAgICAgaW5mbzogZ3JpZCxcclxuICAgICAgICBvYmplY3Q6IG9iamVjdCxcclxuICAgICAgICBhY3Rpb246IHRoaXMuWWVzTm9BY3Rpb25zLFxyXG4gICAgICAgIGNhbGxiYWNrOiB0aGlzLmV4ZWN1dGVRdWVyeUFjdF9ncmlkXHJcbiAgICAgIH07XHJcbiAgICAgICAgICB0aGlzLnNob3dDb25maXJtYXRpb24oZGlhbG9nU3RydWMpO1xyXG4gICAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgdGhpcy5leGVjdXRlUXVlcnlBY3RfZ3JpZChncmlkLCBvYmplY3QpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgcHVibGljIGV4ZWN1dGVRdWVyeUFjdF9ncmlkKGdyaWQ6IGFueSwgb2JqZWN0OmFueSk6IHZvaWQge1xyXG4gICAgICBsZXQgcGFyYW1Db25maWcgPSB7XHJcbiAgICAgICAgXCJOYW1lXCI6IFwiY2hpbGRSZWNvcmRzXCIsXHJcbiAgICAgICAgXCJWYWxcIjogMFxyXG4gICAgICB9O1xyXG4gICAgICBzZXRQYXJhbUNvbmZpZyhwYXJhbUNvbmZpZyk7XHJcbiAgICAgIGlmIChvYmplY3QucGFyYW1Db25maWcuREVCVUdfRkxBRykgY29uc29sZS5sb2coXCIgIFwiICsgb2JqZWN0Lm1hc3RlcktleU5hbWUsIG9iamVjdC5tYXN0ZXJLZXlBcnIpO1xyXG4gICAgaWYgKG9iamVjdC5wYXJhbUNvbmZpZy5ERUJVR19GTEFHKSBjb25zb2xlLmxvZyhcIm9iamVjdC5pc0NoaWxkOlwiLCBvYmplY3QuaXNDaGlsZCwgXCIgb2JqZWN0LmlzU2VhcmNoIDpcIiwgb2JqZWN0LmlzU2VhcmNoKVxyXG4gICAgaWYgKG9iamVjdC5pc0NoaWxkID09IHRydWUpIHtcclxuICAgICAgaWYgKG9iamVjdC5pc1NlYXJjaCAhPSB0cnVlKSB7XHJcbiAgICAgICAgICBncmlkID0gb2JqZWN0LmdyaWRJbml0aWFsVmFsdWVzO1xyXG4gICAgICAgIGlmIChvYmplY3QucGFyYW1Db25maWcuREVCVUdfRkxBRykgY29uc29sZS5sb2coXCJoZXJlMVwiKTtcclxuICAgICAgICBpZiAoKHR5cGVvZiBvYmplY3QubWFzdGVyS2V5TmFtZUFyciAhPSBcInVuZGVmaW5lZFwiKSAmJiAob2JqZWN0Lm1hc3RlcktleU5hbWVBcnIubGVuZ3RoICE9IDApKSB7XHJcbiAgICAgICAgICBpZiAob2JqZWN0LnBhcmFtQ29uZmlnLkRFQlVHX0ZMQUcpIGNvbnNvbGUubG9nKFwiaGVyZTJcIik7XHJcbiAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG9iamVjdC5tYXN0ZXJLZXlOYW1lQXJyLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGlmIChvYmplY3QucGFyYW1Db25maWcuREVCVUdfRkxBRykgY29uc29sZS5sb2coXCJoZXJlM1wiLCBvYmplY3QuZ3JpZEluaXRpYWxWYWx1ZXMsIG9iamVjdC5tYXN0ZXJLZXlOYW1lQXJyW2ldKTtcclxuICAgICAgICAgICAgICBsZXQgZXhpc3RzID0gb2JqZWN0LmdyaWRJbml0aWFsVmFsdWVzW29iamVjdC5tYXN0ZXJLZXlOYW1lQXJyW2ldXVxyXG4gICAgICAgICAgICAgIGlmICh0eXBlb2YgZXhpc3RzICE9PSBcInVuZGVmaW5lZFwiKXtcclxuICAgICAgICAgICAgICAgIGlmIChvYmplY3QucGFyYW1Db25maWcuREVCVUdfRkxBRykgY29uc29sZS5sb2coXCJoZXJlNFwiKTtcclxuICAgICAgICAgICAgICBvYmplY3QuZ3JpZEluaXRpYWxWYWx1ZXNbb2JqZWN0Lm1hc3RlcktleU5hbWVBcnJbaV1dID0gb2JqZWN0Lm1hc3RlcktleUFycltpXTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgb2JqZWN0LmdyaWRJbml0aWFsVmFsdWVzW29iamVjdC5tYXN0ZXJLZXlOYW1lXSA9IG9iamVjdC5tYXN0ZXJLZXk7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgLy9ncmlkW29iamVjdC5tYXN0ZXJLZXlOYW1lXSA9IG9iamVjdC5tYXN0ZXJLZXk7XHJcbiAgICAgICAgaWYgKG9iamVjdC5wYXJhbUNvbmZpZy5ERUJVR19GTEFHKSBjb25zb2xlLmxvZyhcIm9iamVjdC5tYXN0ZXJLZXlOYW1lOlwiICsgb2JqZWN0Lm1hc3RlcktleU5hbWUpO1xyXG4gICAgICAgICAgaWYgKG9iamVjdC5wYXJhbUNvbmZpZy5ERUJVR19GTEFHKSBjb25zb2xlLmxvZyhncmlkKTtcclxuICAgICAgICAgIG9iamVjdC5pc1NlYXJjaCA9IHRydWU7XHJcbiAgICAgICAgICBpZiAob2JqZWN0LnBhcmFtQ29uZmlnLkRFQlVHX0ZMQUcpIGNvbnNvbGUubG9nKFwiLS0tU2VhcmNoaW5nOlwiKTtcclxuICAgICAgICAgIGlmIChvYmplY3QucGFyYW1Db25maWcuREVCVUdfRkxBRykgY29uc29sZS5sb2coZ3JpZCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgaWYgKG9iamVjdC5wYXJhbUNvbmZpZy5ERUJVR19GTEFHKSBjb25zb2xlLmxvZygnLS0tLS0tLS0tLS0tZXhlY3V0ZVF1ZXJ5IG9iamVjdC5pc1NlYXJjaCA6JyArIG9iamVjdC5pc1NlYXJjaCArIFwiICBvYmplY3QuaXNDaGlsZDpcIiArIG9iamVjdC5pc0NoaWxkKTtcclxuICAgICAgLy8gaWYgKG9iamVjdC5wYXJhbUNvbmZpZy5ERUJVR19GTEFHKSBjb25zb2xlLmxvZyhvYmplY3QuZ3JpZCk7XHJcblxyXG4gICAgbGV0IFBhZ2UgPSBcIiZfcXVlcnk9XCIgKyBvYmplY3QuZ2V0Q01EO1xyXG4gICAgaWYgKG9iamVjdC5pc1NlYXJjaCA9PSB0cnVlKSB7XHJcbiAgICAgIGlmIChvYmplY3QucGFyYW1Db25maWcuREVCVUdfRkxBRykgY29uc29sZS5sb2coJ29iamVjdC5mb3JtR3JvdXA6Jywgb2JqZWN0LmZvcm1Hcm91cCwgJ3R5cGVvZihncmlkKTonLCB0eXBlb2YgKGdyaWQuZGF0YSksICcgZ3JpZDonLCBncmlkKVxyXG4gICAgICAgICAgbGV0IE5ld1ZhbCA9IFwiXCI7XHJcbiAgICAgIGlmICh0eXBlb2Ygb2JqZWN0LmZvcm1Hcm91cCA9PSBcInVuZGVmaW5lZFwiKSB7XHJcbiAgICAgICAgICAgIC8vIGEgY2hpbGQgY29tcG9uZW50XHJcbiAgICAgICAgaWYgKG9iamVjdC5wYXJhbUNvbmZpZy5ERUJVR19GTEFHKSBjb25zb2xlLmxvZygnZ3JpZDonLCB0eXBlb2YgKGdyaWQuZGF0YSkpO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgaWYgKHR5cGVvZiBncmlkLmRhdGEgPT0gXCJvYmplY3RcIilcclxuICAgICAgICAgICAgICBOZXdWYWwgPSBncmlkLmRhdGE7IC8vIHBhc3NlZCBlbXB0eSBncmlkXHJcbiAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgIE5ld1ZhbCA9IGdyaWQ7IC8vIHVzZWQgdGhlIHBhc3NlZCBncmlkIHBhcmFtXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgICBOZXdWYWwgPSBvYmplY3QuZm9ybUdyb3VwLnZhbHVlO1xyXG5cclxuICAgICAgICAgICAgb2JqZWN0LmlzU2VhcmNoID0gZmFsc2U7XHJcbiAgICAgIGlmICgodHlwZW9mIG9iamVjdC5mb3JtYXR0ZWRXaGVyZSA9PT0gXCJ1bmRlZmluZWRcIikgfHwgKG9iamVjdC5mb3JtYXR0ZWRXaGVyZSA9PSBudWxsKSkge1xyXG4gICAgICAgICAgICAgIFBhZ2UgPSBQYWdlICsgb2JqZWN0LnN0YXJTZXJ2aWNlcy5mb3JtYXRXaGVyZShOZXdWYWwpO1xyXG5cclxuICAgICAgICAgICAgfVxyXG4gICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICBpZiAob2JqZWN0LnBhcmFtQ29uZmlnLkRFQlVHX0ZMQUcpIGNvbnNvbGUubG9nKFwib2JqZWN0LmZvcm1hdHRlZFdoZXJlXCIsIG9iamVjdC5mb3JtYXR0ZWRXaGVyZSlcclxuICAgICAgICAgICAgICBvYmplY3QuZm9ybWF0dGVkV2hlcmUgPSB0aGlzLnByb2Nlc3Nmb3JtYXR0ZWRXaGVyZShvYmplY3QsIG9iamVjdC5mb3JtYXR0ZWRXaGVyZSk7XHJcbiAgICAgICAgICAgICAgUGFnZSA9IFBhZ2UgKyBvYmplY3QuZm9ybWF0dGVkV2hlcmU7XHJcbiAgICAgICAgICAgICAgb2JqZWN0LmZvcm1hdHRlZFdoZXJlID0gbnVsbDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICBpZiAoKHR5cGVvZiBvYmplY3QuT3JkZXJCeUNsYXVzZSAhPT0gXCJ1bmRlZmluZWRcIikgJiYgKG9iamVjdC5PcmRlckJ5Q2xhdXNlICE9IFwiXCIpKVxyXG4gICAgICAgICAgICAgIFBhZ2UgPSBQYWdlICsgXCImX09SREVSQlk9XCIgKyBvYmplY3QuT3JkZXJCeUNsYXVzZTtcclxuXHJcblxyXG4gICAgICAgIH1cclxuICAgICAgICBQYWdlID0gZW5jb2RlVVJJKFBhZ2UpO1xyXG4gICAgICAgIC8vaWYgKG9iamVjdC5wYXJhbUNvbmZpZy5ERUJVR19GTEFHKSBjb25zb2xlLmxvZygnUGFnZTonICsgUGFnZSk7XHJcbiAgICAgICAgb2JqZWN0LmdyaWQubG9hZGluZyA9IHRydWU7XHJcbiAgICAgICAgb2JqZWN0LmNsb3NlRWRpdG9yKCk7XHJcbiAgICBvYmplY3QuZXhlY3V0ZVF1ZXJ5cmVzdWx0ID0gW107XHJcbiAgICBvYmplY3QuZXhlY3V0ZVF1ZXJ5cmVzdWx0LnJlc3VsdCA9IDA7XHJcbiAgICAgICAgb2JqZWN0LkN1cnJlbnRSZWMgPSAwO1xyXG4gICAgICAgIG9iamVjdC5ncmlkLmRhdGEgPSBudWxsO1xyXG4gICAgICAgIFxyXG5cclxuICAgIG9iamVjdC5zdGFyU2VydmljZXMuZmV0Y2gob2JqZWN0LCBQYWdlKS5zdWJzY3JpYmUoKHJlc3VsdDphbnkpID0+IHtcclxuICAgICAgaWYgKHJlc3VsdCAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgbGV0IGFjdHVhbFJlc3VsdCA9IE9iamVjdC5hc3NpZ24oe30sIHJlc3VsdCwge30pXHJcbiAgICAgICAgICAgICAgaWYgKG9iamVjdC5wYXJhbUNvbmZpZy5ERUJVR19GTEFHKSBjb25zb2xlLmxvZyhcIi0tLS0tLXJlc3VsdC5kYXRhWzBdLmRhdGEgOlwiKTtcclxuICAgICAgICAgICAgICAvL2lmIChvYmplY3QucGFyYW1Db25maWcuREVCVUdfRkxBRykgY29uc29sZS5sb2cocmVzdWx0LmRhdGFbMF0uZGF0YSk7XHJcbiAgICAgICAgICAgICAgdGhpcy5oZWxwTXNnX2dyaWQgPSBcIlwiO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcmVzdWx0LmRhdGFbMF0uZGF0YS5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgcmVzdWx0LmRhdGFbMF0uZGF0YVtpXSA9IG9iamVjdC5zdGFyU2VydmljZXMucGFyc2VUb0RhdGUocmVzdWx0LmRhdGFbMF0uZGF0YVtpXSk7XHJcbiAgICAgICAgICBpZiAocmVzdWx0LmRhdGFbMF0uZGF0YVtpXS5fUVVFUlkgIT0gXCJ1bmRlZmluZWRcIikge1xyXG4gICAgICAgICAgICAgICAgICBkZWxldGUgcmVzdWx0LmRhdGFbMF0uZGF0YVtpXS5fUVVFUlk7XHJcbiAgICAgICAgICAgICAgICAgIGRlbGV0ZSByZXN1bHQuZGF0YVswXS5kYXRhW2ldLl9RVUVSWV9ET05FO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICBpZiAob2JqZWN0LnBhcmFtQ29uZmlnLkRFQlVHX0ZMQUcpIGNvbnNvbGUubG9nKHJlc3VsdC5kYXRhWzBdLmRhdGFbMF0pO1xyXG5cclxuICAgICAgICBvYmplY3QuQm9keSA9IFtdO1xyXG4gICAgICAgIHJlc3VsdCA9IHtcclxuICAgICAgICAgIGRhdGE6IHJlc3VsdC5kYXRhWzBdLmRhdGEsXHJcbiAgICAgICAgICB0b3RhbDogcGFyc2VJbnQocmVzdWx0LmRhdGFbMF0uZGF0YS5sZW5ndGgsIDEwKVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAob2JqZWN0LmlzTWFzdGVyKVxyXG4gICAgICAgICAgb2JqZWN0LnN0YXJTZXJ2aWNlcy5zaG93Tm90aWZpY2F0aW9uKCdzdWNjZXNzJywgXCJSZWNvcmRzIHJldHJpZXZlZCA6IFwiICsgcmVzdWx0LnRvdGFsKTtcclxuICAgICAgICBvYmplY3QuZXhlY3V0ZVF1ZXJ5cmVzdWx0ID0gcmVzdWx0O1xyXG4gICAgICAgIGlmIChvYmplY3QuaXNDaGlsZCA9PSB0cnVlKSB7XHJcbiAgICAgICAgICAgICAgICAgIGxldCBwYXJhbUNvbmZpZyA9IHtcclxuICAgICAgICAgICAgICAgICAgICBcIk5hbWVcIjogXCJjaGlsZFJlY29yZHNcIixcclxuICAgICAgICAgICAgICAgICAgICBcIlZhbFwiOiByZXN1bHQudG90YWxcclxuICAgICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgICAgc2V0UGFyYW1Db25maWcocGFyYW1Db25maWcpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuXHJcblxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIG9iamVjdC5ncmlkLmxvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgb2JqZWN0LmdyaWQuZGF0YSA9IHJlc3VsdDtcclxuXHJcbiAgICAgIGlmICh0eXBlb2Ygb2JqZWN0LmNhbGxCYWNrRnVuY3Rpb24gIT09IFwidW5kZWZpbmVkXCIpXHJcbiAgICAgICAgICAgICAgICBvYmplY3QuY2FsbEJhY2tGdW5jdGlvbihyZXN1bHQpO1xyXG5cclxuICAgICAgaWYgKG9iamVjdC5wYXJhbUNvbmZpZy5ERUJVR19GTEFHKSBjb25zb2xlLmxvZyhcImdyaWQgc2VydmljZXJlYWRDb21wbGV0ZWRPdXRwdXRcIik7XHJcbiAgICAgIGlmIChvYmplY3QucGFyYW1Db25maWcuREVCVUdfRkxBRykgY29uc29sZS5sb2cob2JqZWN0LmdyaWQuZGF0YS5kYXRhKTtcclxuICAgICAgICAgICAgaWYgKG9iamVjdC5wYXJhbUNvbmZpZy5ERUJVR19GTEFHKSBjb25zb2xlLmxvZyhcInJlc3VsdCBsZW5ndGg6XCIgKyByZXN1bHQubGVuZ3RoKTtcclxuICAgICAgICAgICAgaWYgKG9iamVjdC5wYXJhbUNvbmZpZy5ERUJVR19GTEFHKSBjb25zb2xlLmxvZyhcInJlc3VsdCB0b3RhbDpcIiArIHJlc3VsdC50b3RhbCk7XHJcbiAgICAgIGlmIChvYmplY3QucGFyYW1Db25maWcuREVCVUdfRkxBRykgY29uc29sZS5sb2coXCJvYmplY3QucGVyZm9ybVJlYWRDb21wbGV0ZWRPdXRwdXQ6XCIgKyBvYmplY3QucGVyZm9ybVJlYWRDb21wbGV0ZWRPdXRwdXQpXHJcbiAgICAgIGlmICgodHlwZW9mIG9iamVjdC5wZXJmb3JtUmVhZENvbXBsZXRlZE91dHB1dCAhPT0gXCJ1bmRlZmluZWRcIikgfHwgKG9iamVjdC5wZXJmb3JtUmVhZENvbXBsZXRlZE91dHB1dCA9PSBmYWxzZSkpIHtcclxuICAgICAgICAgICAgICBpZiAob2JqZWN0LnBhcmFtQ29uZmlnLkRFQlVHX0ZMQUcpIGNvbnNvbGUubG9nKFwiaGVyZTFcIilcclxuICAgICAgICAgICAgfVxyXG4gICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICBpZiAob2JqZWN0LnBhcmFtQ29uZmlnLkRFQlVHX0ZMQUcpIGNvbnNvbGUubG9nKFwiaGVyZTJcIilcclxuICAgICAgICBpZiAob2JqZWN0LmRpc2FibGVFbWl0UmVhZENvbXBsZXRlZCAhPSB0cnVlKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAocmVzdWx0LnRvdGFsICE9IDApXHJcbiAgICAgICAgICAgICAgICAgIG9iamVjdC5yZWFkQ29tcGxldGVkT3V0cHV0LmVtaXQob2JqZWN0LmdyaWQuZGF0YS5kYXRhWzBdKTtcclxuICAgICAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAgICAgICAgb2JqZWN0LnJlYWRDb21wbGV0ZWRPdXRwdXQuZW1pdChbXSk7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgICBvYmplY3Quc3RhclNlcnZpY2VzLnNldFByaW1hcktleU5hbWVBcnIob2JqZWN0LCB0cnVlKTtcclxuICAgICAgICAgIH0sXHJcbiAgICAgIChlcnI6YW55KSA9PiB7XHJcbiAgICAgICAgb2JqZWN0LkJvZHkgPSBbXTtcclxuICAgICAgICAgICAgICAgIG9iamVjdC5ncmlkLmxvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIG9iamVjdC5ncmlkLmRhdGEgPSBudWxsO1xyXG4gICAgICAgIGlmIChvYmplY3QucGFyYW1Db25maWcuREVCVUdfRkxBRykgY29uc29sZS5sb2coXCJlcnI6XCIsIGVycilcclxuICAgICAgICBvYmplY3Quc3RhclNlcnZpY2VzLnNob3dOb3RpZmljYXRpb24oXCJlcnJvclwiLCBcImVycm9yOlwiICsgZXJyLmVycm9yLmVycm9yLmNvZGUpO1xyXG4gICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgb2JqZWN0LmRvY0NsaWNrU3Vic2NyaXB0aW9uID0gb2JqZWN0LnJlbmRlcmVyLmxpc3RlbignZG9jdW1lbnQnLCAnY2xpY2snLCBvYmplY3Qub25Eb2N1bWVudENsaWNrLmJpbmQob2JqZWN0KSk7XHJcbiAgICB9XHJcblxyXG5cclxuICBwdWJsaWMgZW50ZXJRdWVyeUFjdF9ncmlkKGdyaWQ6IGFueSwgb2JqZWN0OmFueSk6IHZvaWQge1xyXG4gIG9iamVjdC5ncmlkLmNhbmNlbDtcclxuICBvYmplY3QuZ3JpZC5kYXRhID0gbnVsbDtcclxuICAgIG9iamVjdC5Cb2R5ID0gW107XHJcblxyXG4gIG9iamVjdC5pc1NlYXJjaCA9IHRydWU7XHJcbiAgaWYgKG9iamVjdC5wYXJhbUNvbmZpZy5ERUJVR19GTEFHKSBjb25zb2xlLmxvZyhcIm9iamVjdC5pc1NlYXJjaDpcIiArIG9iamVjdC5pc1NlYXJjaCk7XHJcbiAgb2JqZWN0LmFkZEhhbmRsZXIoKTtcclxuICBvYmplY3QuY2xlYXJDb21wbGV0ZWRPdXRwdXQuZW1pdChvYmplY3QuZm9ybUluaXRpYWxWYWx1ZXMpO1xyXG4gIG9iamVjdC5zdGFyU2VydmljZXMuc2V0UHJpbWFyS2V5TmFtZUFycihvYmplY3QsIGZhbHNlKTtcclxuICBvYmplY3Quc3RhclNlcnZpY2VzLmhlbHBNc2dfZ3JpZCA9ICB0aGlzLmdldE5MUyhbXSxcIkhFTFBfRU5URVJfUVVFUllcIix0aGlzLmVudGVyUXVlcnlNc2cpO1xyXG5cclxufVxyXG5cclxuICBwdWJsaWMgZW50ZXJRdWVyeV9ncmlkKGdyaWQ6IGFueSwgb2JqZWN0OmFueSk6IHZvaWQge1xyXG4gICAgbGV0IGRpcnR5ID0gZmFsc2U7XHJcbiAgICBpZiAodGhpcy5wYXJhbUNvbmZpZy5ERUJVR19GTEFHKSBjb25zb2xlLmxvZyhcInByZSBvYmplY3Quc2F2ZUN1cnJlbnRcIik7XHJcbiAgICBvYmplY3Quc2F2ZUN1cnJlbnQoKTtcclxuICAgIGxldCBtb2RpZmllZCA9IGZhbHNlO1xyXG4gICAgaWYgKHRoaXMucGFyYW1Db25maWcuREVCVUdfRkxBRykgY29uc29sZS5sb2coXCJvYmplY3QuZ3JpZC5kYXRhXCIpO1xyXG4gICAgaWYgKG9iamVjdC5ncmlkLmRhdGEgIT0gbnVsbCkge1xyXG4gICAgICBpZiAodHlwZW9mIG9iamVjdC5ncmlkLmRhdGEuZGF0YSAhPT0gXCJ1bmRlZmluZWRcIikge1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgb2JqZWN0LmdyaWQuZGF0YS5kYXRhLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICBpZiAodGhpcy5wYXJhbUNvbmZpZy5ERUJVR19GTEFHKSBjb25zb2xlLmxvZyhcImNoZWNrOiBpOlwiLCBpLCBcIiBvYmplY3QuZ3JpZC5kYXRhLmRhdGFbaV0uX1FVRVJZOlwiLCBvYmplY3QuZ3JpZC5kYXRhLmRhdGFbaV0uX1FVRVJZKVxyXG4gICAgICAgICAgaWYgKHR5cGVvZiBvYmplY3QuZ3JpZC5kYXRhLmRhdGFbaV0uX1FVRVJZICE9PSBcInVuZGVmaW5lZFwiKSB7XHJcbiAgICAgICAgICAgIG1vZGlmaWVkID0gdHJ1ZTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGlmICh0aGlzLnBhcmFtQ29uZmlnLkRFQlVHX0ZMQUcpIGNvbnNvbGUubG9nKFwib2JqZWN0LnNhdmVDdXJyZW50IDpcIiArIG9iamVjdC5Cb2R5Lmxlbmd0aCArIFwiIFwiICsgb2JqZWN0LmdyaWQuaXNFZGl0aW5nKCkpO1xyXG4gICAgaWYgKG9iamVjdC5Cb2R5Lmxlbmd0aCAhPSAwKSB7XHJcbiAgICAgIG1vZGlmaWVkID0gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoKG1vZGlmaWVkID09IHRydWUpIHx8IG9iamVjdC5ncmlkLmlzRWRpdGluZygpID09IHRydWUpIHtcclxuICAgICAgZGlydHkgPSB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChkaXJ0eSA9PSB0cnVlKSB7XHJcbiAgICAgIGxldCBkaWFsb2dTdHJ1YyA9IHtcclxuICAgICAgICBtc2c6IHRoaXMuc2F2ZUNoYW5nZXNNc2csXHJcbiAgICAgICAgdGl0bGU6IHRoaXMucGxlYXNlQ29uZmlybU1zZyxcclxuICAgICAgICBpbmZvOiBncmlkLFxyXG4gICAgICAgIG9iamVjdDogb2JqZWN0LFxyXG4gICAgICAgIGFjdGlvbjogdGhpcy5ZZXNOb0FjdGlvbnMsXHJcbiAgICAgICAgY2FsbGJhY2s6IHRoaXMuZW50ZXJRdWVyeUFjdF9ncmlkXHJcbiAgICAgIH07XHJcbiAgICAgICAgdGhpcy5zaG93Q29uZmlybWF0aW9uKGRpYWxvZ1N0cnVjKTtcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICB0aGlzLmVudGVyUXVlcnlBY3RfZ3JpZChncmlkLCBvYmplY3QpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHVibGljIHNldFN0ckF1dGgodXNlcjphbnksIHBhc3N3b3JkOmFueSkge1xyXG4gICAgdGhpcy5TdHJBdXRoID0gdXNlciArIFwiOlwiICsgcGFzc3dvcmQ7XHJcbiAgICB0aGlzLlN0ckF1dGggPSBidG9hKHRoaXMuU3RyQXV0aCk7XHJcbiAgICB0aGlzLlN0ckF1dGggPSBcIkJhc2ljIFwiICsgdGhpcy5TdHJBdXRoO1xyXG4gIH1cclxuICBwdWJsaWMgaXNBU0NJSShzdHIpIHtcclxuICAgIHJldHVybiAvXltcXHgwMC1cXHg3Rl0qJC8udGVzdChzdHIpO1xyXG4gIH1cclxuICBwdWJsaWMgbG9naW4ob2JqZWN0OmFueSwgdXNlcjphbnksIHBhc3N3b3JkOmFueSkge1xyXG4gICAgaWYgKCF0aGlzLmlzQVNDSUkodXNlcikpe1xyXG4gICAgICB0aGlzLnNob3dOb3RpZmljYXRpb24oXCJlcnJvclwiLCBcItmQcnJvcjogXCIgKyBcIk5vdCBhIHZhbGlkIFVzZXIgTmFtZVwiKTtcclxufVxyXG4gICAgdGhpcy5wYXJhbUNvbmZpZyA9IGdldFBhcmFtQ29uZmlnKCk7XHJcbiAgICAvL2NvbnNvbGUubG9nKFwidGhpcy5wYXJhbUNvbmZpZzpcIiwgdGhpcy5wYXJhbUNvbmZpZylcclxuICAgIHRoaXMuc2V0U3RyQXV0aCh1c2VyLCBwYXNzd29yZCk7XHJcbiAgICAvL2lmICh0aGlzLnBhcmFtQ29uZmlnLkRFQlVHX0ZMQUcpIGNvbnNvbGUubG9nKFwidGhpcy5TdHJBdXRoOlwiICsgdGhpcy5TdHJBdXRoKTtcclxuXHJcblxyXG4gICAgbGV0IFBhZ2UgPSBcIlwiO1xyXG4gICAgbGV0IHN1Y2Nlc3MgPSBmYWxzZTtcclxuICAgIGNvbnN0IG1kNSA9IG5ldyBNZDUoKTtcclxuICAgIGxldCBwYXNzID0gbWQ1LmFwcGVuZFN0cihwYXNzd29yZCkuZW5kKCk7XHJcbiAgICB1c2VyID0gdXNlci50b1VwcGVyQ2FzZSgpLnRyaW0oKTtcclxuICAgIHVzZXIgPSB1c2VyLnRyaW0oKTtcclxuICAgIGxldCBOZXdWYWw6YW55ID0ge1xyXG4gICAgICBcIlVTRVJOQU1FXCI6IHVzZXIsXHJcbiAgICAgIFwiUEFTU1dPUkRcIjogcGFzc1xyXG4gICAgfTtcclxuXHJcblxyXG4gICAgTmV3VmFsW1wiX1FVRVJZXCJdID0gXCJWRVJJRllfQURNX1VTRVJcIjtcclxuICAgIG9iamVjdC5Cb2R5PVtdO1xyXG4gICAgb2JqZWN0LmFkZFRvQm9keShOZXdWYWwpO1xyXG4gICAgXHJcbiAgICBsZXQgcGFyYW1Db25maWcgPSB7XHJcbiAgICAgIFwiTmFtZVwiOiBcIlVTRVJOQU1FXCIsXHJcbiAgICAgIFwiVmFsXCI6IHVzZXJcclxuICAgIH07XHJcbiAgICBzZXRQYXJhbUNvbmZpZyhwYXJhbUNvbmZpZyk7XHJcbiAgICB0aGlzLnNlc3Npb25QYXJhbXNbXCJVU0VSTkFNRVwiXSA9IHVzZXI7XHJcblxyXG4gICAgdGhpcy5wb3N0KG9iamVjdCwgUGFnZSwgb2JqZWN0LkJvZHkpLnN1YnNjcmliZShyZXN1bHQgPT4ge1xyXG4gICAgICBpZiAodHlwZW9mIHJlc3VsdC5kYXRhWzBdLmRhdGFbMF0gIT09IFwidW5kZWZpbmVkXCIpIHtcclxuICAgICAgICBpZiAodGhpcy5wYXJhbUNvbmZpZy5ERUJVR19GTEFHKSBjb25zb2xlLmxvZyhcIk9iamVjdCBpbiBsb2dpbiBIRlwiLCBvYmplY3QuQm9keSwgdXNlcik7XHJcbiAgICAgICAgaWYgKHJlc3VsdC5kYXRhWzBdLmRhdGFbMF0uVVNFUk5BTUUgPT0gdXNlcikge1xyXG4gICAgICAgICAgdGhpcy5VU0VSTkFNRSA9IHVzZXI7XHJcbiAgICAgICAgICBvYmplY3QuQm9keSA9IFtdO1xyXG5cclxuICAgICAgICAgIGxldCBwYXJhbUNvbmZpZyA9IHtcclxuICAgICAgICAgICAgXCJOYW1lXCI6IFwiVVNFUl9JTkZPXCIsXHJcbiAgICAgICAgICAgIFwiVmFsXCI6IHJlc3VsdC5kYXRhWzBdLmRhdGFbMF1cclxuICAgICAgICAgIH07XHJcbiAgICAgICAgICBzZXRQYXJhbUNvbmZpZyhwYXJhbUNvbmZpZyk7XHJcbiAgICAgICAgICB0aGlzLnNlc3Npb25QYXJhbXNbXCJVU0VSX0lORk9cIl0gPSByZXN1bHQuZGF0YVswXS5kYXRhWzBdO1xyXG4gICAgICAgICAgbGV0IGFkYXB0ZXIgPSByZXN1bHQuZGF0YVswXVsnX0RCX0FkQXBUb3InXTtcclxuICAgICAgICAgIGlmICh0eXBlb2YgYWRhcHRlciAhPT0gXCJ1bmRlZmluZWRcIil7XHJcbiAgICAgICAgICAgIHRoaXMuc2Vzc2lvblBhcmFtc1tcIkRCX0FEQVBUT1JcIl0gPSBhZGFwdGVyLnRvVXBwZXJDYXNlKCk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICB0aGlzLlVTRVJfSU5GTyA9IHJlc3VsdC5kYXRhWzBdLmRhdGFbMF07XHJcbiAgICAgICAgICBpZiAoKHRoaXMuc2Vzc2lvblBhcmFtcy5VU0VSX0lORk8uTUFTVEVSX0RCICE9IFwiXCIpICYmICh0eXBlb2YgdGhpcy5zZXNzaW9uUGFyYW1zLlVTRVJfSU5GTy5NQVNURVJfREIgIT09IFwidW5kZWZpbmVkXCIpKXtcclxuICAgICAgICAgICAgdGhpcy5NQVNURVJfREIgPSB0aGlzLnNlc3Npb25QYXJhbXMuVVNFUl9JTkZPLk1BU1RFUl9EQjtcclxuICAgICAgICAgICAgdGhpcy5VU0VSTkFNRV9EQiA9IHRoaXMuc2Vzc2lvblBhcmFtcy5VU0VSX0lORk8uTUFTVEVSX0RCO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIFxyXG5cclxuXHJcbiAgICAgICAgICBzdWNjZXNzID0gdHJ1ZTtcclxuICAgICAgICAgIHRoaXMubG9hZFJ1bGVzKG9iamVjdCk7XHJcbiAgICAgICAgICBpZiAoKG9iamVjdC50ZXN0RUtZQykgfHwob2JqZWN0Lm5hdlRvLmxlbmd0aCE9MCl8fChvYmplY3Quc2hhcmVUby5sZW5ndGghPTApKSB7XHJcbiAgICAgICAgICAgIG9iamVjdC5sb2dpbkNvbXBsZXRlZEhhbmRsZXIobnVsbCk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgIG9iamVjdC5sb2dpbkNvbXBsZXRlZC5lbWl0KHRoaXMpO1xyXG5cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgaWYgKCFzdWNjZXNzKVxyXG4gICAgICAgIHRoaXMuc2hvd05vdGlmaWNhdGlvbihcImVycm9yXCIsIFwiZXJyb3I6XCIgKyBcIldyb25nIHVzZXIgb3IgcGFzc3dvcmRcIik7XHJcblxyXG5cclxuXHJcbiAgICB9LFxyXG4gICAgZXJyID0+IHtcclxuICAgICAgICBvYmplY3QuQm9keSA9IFtdO1xyXG4gICAgICAgIHRoaXMuc2hvd05vdGlmaWNhdGlvbihcImVycm9yXCIsIFwiZXJyb3I6XCIgKyBcIldyb25nIHVzZXIgb3IgcGFzc3dvcmRcIik7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyB1c2VyQWRkZWQgPSBmYWxzZTtcclxuICBwdWJsaWMgYWRkVXNlckluZm8ob2JqZWN0OmFueSwgdXNlcm5hbWU6YW55LCB2YWx1ZTphbnkpIHtcclxuICAgIHRoaXMucGFyYW1Db25maWcgPSBnZXRQYXJhbUNvbmZpZygpO1xyXG4gICAgbGV0IFBhZ2UgPSBcIlwiO1xyXG4gICAgbGV0IHN1Y2Nlc3MgPSBmYWxzZTtcclxuICAgIHVzZXJuYW1lID0gdXNlcm5hbWUudG9VcHBlckNhc2UoKS50cmltKCk7XHJcbiAgICB1c2VybmFtZSA9IHVzZXJuYW1lLnRyaW0oKTtcclxuICAgIGxldCBkID0gbmV3IERhdGUoKTtcclxuICAgIGxldCBkYXRlSXNvID0gdGhpcy5GT1JNQVRfSVNPKGQpO1xyXG4gICAgbGV0IGJvZHkgPVtcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgXCJfUVVFUllcIjpcIklOU0VSVF9BRE1fVVNFUl9JTkZPUk1BVElPTlwiLFxyXG4gICAgICAgICAgICAgICAgXCJVU0VSTkFNRVwiOnVzZXJuYW1lLFxyXG4gICAgICAgICAgICAgICAgXCJFTUFJTFwiOnZhbHVlLmVtYWlsLFxyXG4gICAgICAgICAgICAgICAgXCJGVUxMTkFNRVwiIDogdmFsdWUuZmlyc3ROYW1lICsgXCIgXCIgKyB2YWx1ZS5sYXN0TmFtZSAsXHJcbiAgICAgICAgICAgICAgICBcIkZMRVhfRkxEMVwiIDogdmFsdWUuaWQsXHJcbiAgICAgICAgICAgICAgICBcIkdST1VQTkFNRVwiOiBvYmplY3Qua2V5Y0xvYWsuS0VZQ0xPQUtfVVNFUl9HUk9VUCxcclxuICAgICAgICAgICAgICAgIFwiTE9HREFURVwiOiBuZXcgRGF0ZSgpLFxyXG4gICAgICAgICAgICAgICAgXCJMT0dOQU1FXCI6IHVzZXJuYW1lXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIF1cclxuXHJcbiAgICB0aGlzLnBvc3Qob2JqZWN0LCBQYWdlLCBib2R5KS5zdWJzY3JpYmUocmVzdWx0ID0+IHtcclxuICAgICAgIHN1Y2Nlc3MgPSB0cnVlO1xyXG4gICAgICAgY29uc29sZS5sb2coXCJyZXN1bHQ6aW5zZXJ0OlwiLCByZXN1bHQuZGF0YVswXSlcclxuICAgICAgaWYgKHR5cGVvZiByZXN1bHQuZGF0YVswXSAhPT0gXCJ1bmRlZmluZWRcIikge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwicmVzdWx0OlwiLCByZXN1bHQuZGF0YVswXSlcclxuICAgICAgICAgIHN1Y2Nlc3MgPSB0cnVlO1xyXG4gICAgICAgICAgdGhpcy51c2VyQWRkZWQgPSB0cnVlO1xyXG4gICAgICAgICAgdGhpcy5nZXRVc2VySW5mbyhvYmplY3QsIHVzZXJuYW1lLCB2YWx1ZSk7XHJcbiAgICAgICAgICBcclxuICAgICAgfVxyXG4gICAgICBpZiAoIXN1Y2Nlc3Mpe1xyXG4gICAgICAgIFxyXG4gICAgICAgIGxldCBlcnJvck1zZyA9IFwiTm90IGFibGUgdG8gYWRkIFwiICsgdXNlcm5hbWUgKyBcIiB0cCAgREJcIjtcclxuICAgICAgICBsZXQgZGlhbG9nU3RydWMgPSB7XHJcbiAgICAgICAgICBtc2c6IGVycm9yTXNnLFxyXG4gICAgICAgICAgdGl0bGU6IFwiRXJyb3JcIixcclxuICAgICAgICAgIGluZm86IG51bGwsXHJcbiAgICAgICAgICBvYmplY3Q6IG9iamVjdCxcclxuICAgICAgICAgIGFjdGlvbjogbnVsbCxcclxuICAgICAgICAgIGNhbGxiYWNrOiBudWxsXHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLnNob3dDb25maXJtYXRpb24oZGlhbG9nU3RydWMpO1xyXG4gICAgICAgXHJcbiAgICAgICAvLyBvYmplY3QubG9nb2ZmKDMwMDApO1xyXG4gICAgICB9XHJcblxyXG5cclxuXHJcbiAgICB9LFxyXG4gICAgICBlcnIgPT4ge1xyXG4gICAgICAgIG9iamVjdC5Cb2R5ID0gW107XHJcbiAgICAgICAgbGV0IGVycm9yTXNnID0gXCIgRXJyb3IgY29ubmVjdGluZyB0byAgREJcIjtcclxuICAgICAgICBsZXQgZGlhbG9nU3RydWMgPSB7XHJcbiAgICAgICAgICBtc2c6IGVycm9yTXNnLFxyXG4gICAgICAgICAgdGl0bGU6IFwiRXJyb3JcIixcclxuICAgICAgICAgIGluZm86IG51bGwsXHJcbiAgICAgICAgICBvYmplY3Q6IG9iamVjdCxcclxuICAgICAgICAgIGFjdGlvbjogbnVsbCxcclxuICAgICAgICAgIGNhbGxiYWNrOiBudWxsXHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLnNob3dDb25maXJtYXRpb24oZGlhbG9nU3RydWMpO1xyXG4gICAgICAgLy8gb2JqZWN0LmxvZ29mZigzMDAwKTtcclxuICAgICAgfSk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZ2V0VXNlckluZm8ob2JqZWN0OmFueSwgdXNlcjphbnksIHZhbHVlOmFueSkge1xyXG4gICAgdGhpcy5wYXJhbUNvbmZpZyA9IGdldFBhcmFtQ29uZmlnKCk7XHJcbiAgICBsZXQgUGFnZSA9IFwiXCI7XHJcbiAgICBsZXQgc3VjY2VzcyA9IGZhbHNlO1xyXG4gICAgdXNlciA9IHVzZXIudG9VcHBlckNhc2UoKS50cmltKCk7XHJcbiAgICB1c2VyID0gdXNlci50cmltKCk7XHJcbiAgICBsZXQgTmV3VmFsOmFueSA9IHtcclxuICAgICAgXCJVU0VSTkFNRVwiOiB1c2VyXHJcbiAgICB9O1xyXG5cclxuXHJcbiAgICBOZXdWYWxbXCJfUVVFUllcIl0gPSBcIkdFVF9BRE1fVVNFUl9JTkZPUk1BVElPTlwiO1xyXG4gICAgb2JqZWN0LkJvZHk9W107XHJcbiAgICBvYmplY3QuYWRkVG9Cb2R5KE5ld1ZhbCk7XHJcblxyXG4gICAgbGV0IHBhcmFtQ29uZmlnID0ge1xyXG4gICAgICBcIk5hbWVcIjogXCJVU0VSTkFNRVwiLFxyXG4gICAgICBcIlZhbFwiOiB1c2VyXHJcbiAgICB9O1xyXG4gICAgc2V0UGFyYW1Db25maWcocGFyYW1Db25maWcpO1xyXG4gICAgdGhpcy5zZXNzaW9uUGFyYW1zW1wiVVNFUk5BTUVcIl0gPSB1c2VyO1xyXG5cclxuICAgIHRoaXMucG9zdChvYmplY3QsIFBhZ2UsIG9iamVjdC5Cb2R5KS5zdWJzY3JpYmUocmVzdWx0ID0+IHtcclxuICAgICAgaWYgKHR5cGVvZiByZXN1bHQuZGF0YVswXS5kYXRhWzBdICE9PSBcInVuZGVmaW5lZFwiKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJyZXN1bHQ6Z2V0OlwiLCByZXN1bHQuZGF0YVswXS5kYXRhWzBdKVxyXG4gICAgICAgIGlmIChyZXN1bHQuZGF0YVswXS5kYXRhWzBdLlVTRVJOQU1FID09IHVzZXIpIHtcclxuICAgICAgICAgIHRoaXMuVVNFUk5BTUUgPSB1c2VyO1xyXG4gICAgICAgICAgb2JqZWN0LkJvZHkgPSBbXTtcclxuXHJcbiAgICAgICAgICBsZXQgcGFyYW1Db25maWcgPSB7XHJcbiAgICAgICAgICAgIFwiTmFtZVwiOiBcIlVTRVJfSU5GT1wiLFxyXG4gICAgICAgICAgICBcIlZhbFwiOiByZXN1bHQuZGF0YVswXS5kYXRhWzBdXHJcbiAgICAgICAgICB9O1xyXG4gICAgICAgICAgc2V0UGFyYW1Db25maWcocGFyYW1Db25maWcpO1xyXG4gICAgICAgICAgdGhpcy5zZXNzaW9uUGFyYW1zW1wiVVNFUl9JTkZPXCJdID0gcmVzdWx0LmRhdGFbMF0uZGF0YVswXTtcclxuICAgICAgICAgIGxldCBhZGFwdGVyID0gcmVzdWx0LmRhdGFbMF1bJ19EQl9BZEFwVG9yJ107XHJcbiAgICAgICAgICBpZiAodHlwZW9mIGFkYXB0ZXIgIT09IFwidW5kZWZpbmVkXCIpe1xyXG4gICAgICAgICAgICB0aGlzLnNlc3Npb25QYXJhbXNbXCJEQl9BREFQVE9SXCJdID0gYWRhcHRlci50b1VwcGVyQ2FzZSgpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgdGhpcy5VU0VSX0lORk8gPSByZXN1bHQuZGF0YVswXS5kYXRhWzBdO1xyXG4gICAgICAgICAgaWYgKCh0aGlzLnNlc3Npb25QYXJhbXMuVVNFUl9JTkZPLk1BU1RFUl9EQiAhPSBcIlwiKSAmJiAodHlwZW9mIHRoaXMuc2Vzc2lvblBhcmFtcy5VU0VSX0lORk8uTUFTVEVSX0RCICE9PSBcInVuZGVmaW5lZFwiKSl7XHJcbiAgICAgICAgICAgIHRoaXMuTUFTVEVSX0RCID0gdGhpcy5zZXNzaW9uUGFyYW1zLlVTRVJfSU5GTy5NQVNURVJfREI7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgXHJcblxyXG5cclxuXHJcbiAgICAgICAgICBzdWNjZXNzID0gdHJ1ZTtcclxuICAgICAgICAgIHRoaXMubG9hZFJ1bGVzKG9iamVjdCk7XHJcbiAgICAgICAgICBpZiAoKG9iamVjdC50ZXN0RUtZQykgfHwob2JqZWN0Lm5hdlRvLmxlbmd0aCE9MCkpIHtcclxuICAgICAgICAgICAgb2JqZWN0LmxvZ2luQ29tcGxldGVkSGFuZGxlcihudWxsKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAgb2JqZWN0LmxvZ2luQ29tcGxldGVkSGFuZGxlcih0aGlzKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgY29uc29sZS5sb2coXCJyZXN1bHQ6c3VjY2VzczpcIixzdWNjZXNzKVxyXG4gICAgICBpZiAoIXN1Y2Nlc3Mpe1xyXG4gICAgICAgIGlmICghdGhpcy51c2VyQWRkZWQpXHJcbiAgICAgICAgICB0aGlzLmFkZFVzZXJJbmZvKG9iamVjdCwgdXNlciwgdmFsdWUpO1xyXG4gICAgICAgIGVsc2V7XHJcbiAgICAgICAgICAvLyBsZXQgZXJyb3JNc2cgPSB1c2VyICsgXCJpcyBub3QgZGVmaW5lZCBpbiBTVEFSIERCXCI7XHJcbiAgICAgICAgICAvLyBsZXQgZGlhbG9nU3RydWMgPSB7XHJcbiAgICAgICAgICAvLyAgIG1zZzogZXJyb3JNc2csXHJcbiAgICAgICAgICAvLyAgIHRpdGxlOiBcIkVycm9yXCIsXHJcbiAgICAgICAgICAvLyAgIGluZm86IG51bGwsXHJcbiAgICAgICAgICAvLyAgIG9iamVjdDogb2JqZWN0LFxyXG4gICAgICAgICAgLy8gICBhY3Rpb246IG51bGwsXHJcbiAgICAgICAgICAvLyAgIGNhbGxiYWNrOiBudWxsXHJcbiAgICAgICAgICAvLyB9O1xyXG4gICAgICAgICAgLy8gdGhpcy5zaG93Q29uZmlybWF0aW9uKGRpYWxvZ1N0cnVjKTtcclxuICAgICAgICBcclxuICAgICAgICAgIC8vIG9iamVjdC5sb2dvZmYoMzAwMCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG5cclxuXHJcbiAgICB9LFxyXG4gICAgICBlcnIgPT4ge1xyXG4gICAgICAgIG9iamVjdC5Cb2R5ID0gW107XHJcbiAgICAgICAgbGV0IGVycm9yTXNnID0gXCIgRXJyb3IgY29udGFjdGluZyBEQiB0byB2ZXJpZnkgdXNlciBcIiArIHVzZXI7XHJcbiAgICAgICAgbGV0IGRpYWxvZ1N0cnVjID0ge1xyXG4gICAgICAgICAgbXNnOiBlcnJvck1zZyxcclxuICAgICAgICAgIHRpdGxlOiBcIkVycm9yXCIsXHJcbiAgICAgICAgICBpbmZvOiBudWxsLFxyXG4gICAgICAgICAgb2JqZWN0OiBvYmplY3QsXHJcbiAgICAgICAgICBhY3Rpb246IG51bGwsXHJcbiAgICAgICAgICBjYWxsYmFjazogbnVsbFxyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy5zaG93Q29uZmlybWF0aW9uKGRpYWxvZ1N0cnVjKTtcclxuICAgICAgIC8vb2JqZWN0LmxvZ29mZigzMDAwKTtcclxuICAgICAgfSk7XHJcbiAgfVxyXG4gIHB1YmxpYyBydWxlc1Bvc3RRdWVyeURlZiA9IHtcclxuICAgIHJ1bGVQdHJzQXJyOiB7fSxcclxuICAgIHJ1bGVzQXJyOiBbXSxcclxuICAgIGFjdGlvblB0cnNBcnI6IHt9LFxyXG4gICAgYWN0aW9uc0FycjogW11cclxuICB9O1xyXG4gIHB1YmxpYyBydWxlc1ByZVF1ZXJ5RGVmID0ge1xyXG4gICAgcnVsZVB0cnNBcnI6IHt9LFxyXG4gICAgcnVsZXNBcnI6IFtdLFxyXG4gICAgYWN0aW9uUHRyc0Fycjoge30sXHJcbiAgICBhY3Rpb25zQXJyOiBbXVxyXG4gIH07XHJcbiAgcHVibGljIGhvc3RzQXJyID0gW107XHJcbiAgcHVibGljIGhvc3RzTWFwQXJyID0gW107XHJcbiAgLy8vLy8vLy8vLy8vLy8vLy9cclxuICAgIHB1YmxpYyBNQUtFX0RBVEUgICh2YWwpXHJcblx0e1xyXG5cdFx0dHJ5IHtcclxuXHRcdFx0dmFyIGQgPSBuZXcgRGF0ZSh2YWwpO1xyXG5cdFx0XHR9IGNhdGNoIChlKSB7XHJcblx0XHRcdFx0Y29uc29sZS5sb2cgKFwiRXJyb3IgcGFyc2luZyA6MjpcIix2YWwpO1xyXG5cdFx0XHRcdHJldHVybiAwO1xyXG5cdFx0XHR9XHJcblx0XHRjb25zb2xlLmxvZyAoXCJjb3JyZWN0IHBhcnNpbmcgOlwiLHZhbCwgZCk7XHJcblx0XHR2YXIgZGF0ZUlzbyA9IGQudG9JU09TdHJpbmcoKTtcclxuXHRcdCB2YXIgZGF0ZUlzb0FyciA9IGRhdGVJc28uc3BsaXQoXCIuXCIpO1xyXG5cdFx0IGRhdGVJc28gPSBkYXRlSXNvQXJyWzBdICsgXCIuMDAwWlwiO1xyXG4gICAgIGNvbnNvbGUubG9nIChcImNvcnJlY3QgcGFyc2luZyA6XCIsdmFsLCBkLGRhdGVJc28pO1xyXG5cdFx0cmV0dXJuIGRhdGVJc287XHJcblx0fVxyXG4gIHB1YmxpYyBGT1JNQVRfSVNPKGQ6YW55KSB7XHJcbiAgICB2YXIgZGF0ZUlzbyA9IGQudG9JU09TdHJpbmcoKTtcclxuICAgIHZhciBkYXRlSXNvQXJyID0gZGF0ZUlzby5zcGxpdChcIlRcIik7XHJcbiAgICBkYXRlSXNvID0gZGF0ZUlzb0FyclswXSArIFwiIFwiICsgZGF0ZUlzb0FyclsxXTtcclxuICAgIGRhdGVJc28gPSBkYXRlSXNvLnN1YnN0cigwLCAxOSk7XHJcbiAgICByZXR1cm4gZGF0ZUlzbztcclxuICB9XHJcbiAgcHVibGljIExvZ1J1bGUob2JqZWN0OmFueSwgcnVsZUxvZzphbnksIG1zZ1Jlc3BvbnNlOmFueSwgc3RhdHVzOmFueSkge1xyXG4gICAgZnVuY3Rpb24gcHJlcGFyZURhdGFGb3JEQihkYXRhSW46YW55KSB7XHJcblxyXG5cdFx0XHRsZXQgZGF0YU91dCA9IEpTT04uc3RyaW5naWZ5KGRhdGFJbik7XHJcbiAgICAgIC8vY29uc29sZS5sb2coXCJkYXRhSW46XCIsIGRhdGFJbiwgXCIgZGF0YU91dDpcIiwgZGF0YU91dCk7XHJcblx0XHRcdGRhdGFPdXQgPSBkYXRhT3V0LnNwbGl0KFwiJ1wiKS5qb2luKCdcIicpO1xyXG5cdFx0XHRyZXR1cm4gZGF0YU91dDtcclxuXHJcblx0XHR9XHJcbiAgICBpZiAodHlwZW9mIG1zZ1Jlc3BvbnNlID09IFwib2JqZWN0XCIpXHJcblx0XHRcdG1zZ1Jlc3BvbnNlID0gSlNPTi5zdHJpbmdpZnkobXNnUmVzcG9uc2UpO1xyXG4gICAgaWYgKHRoaXMucGFyYW1Db25maWcuREVCVUdfRkxBRykgY29uc29sZS5sb2coXCItLS0tLW1zZ1Jlc3BvbnNlOlwiLCBtc2dSZXNwb25zZSwgXCJydWxlTG9nOlwiLCBydWxlTG9nKTtcclxuICAgIGxldCBkYiA9IHJ1bGVMb2cuZGI7XHJcbiAgICBsZXQgZCA9IG5ldyBEYXRlKCk7XHJcbiAgICBsZXQgZGF0ZUlzbyA9IHRoaXMuRk9STUFUX0lTTyhkKTtcclxuXHJcbiAgICBsZXQgUlVMRV9LRVkgPSBydWxlTG9nLnJ1bGUuUlVMRV9LRVk7XHJcblxyXG4gICAgbGV0IGFycmF5ID0gUlVMRV9LRVkuc3BsaXQoXCIsXCIpO1xyXG4gICAgLy9sZXQgcnVsZUtleSA9IHt9O1xyXG4gICAgbGV0IHJ1bGVLZXkgPSBcIlwiO1xyXG4gICAgbGV0IHJ1bGVLZXlOYW1lID0gXCJcIjtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYXJyYXkubGVuZ3RoOyBpKyspIHtcclxuICAgICAgbGV0IGVsZW0gPSBhcnJheVtpXTtcclxuICAgICAgbGV0IGVsZW1fdmFsdWUgPSBydWxlTG9nLnF1ZXJ5RGF0YVtlbGVtXTtcclxuICAgICAgaWYgKHR5cGVvZiBlbGVtX3ZhbHVlICE9PSBcInVuZGVmaW5lZFwiKSB7XHJcblx0XHRcdFx0Ly9ydWxlS2V5W2VsZW1dID0gZWxlbV92YWx1ZTtcclxuICAgICAgICBpZiAocnVsZUtleSAhPSBcIlwiKSB7XHJcblx0XHRcdFx0XHRydWxlS2V5ID0gcnVsZUtleSArIFwiX1wiO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRydWxlS2V5ID0gcnVsZUtleSArIGVsZW1fdmFsdWU7XHJcblxyXG4gICAgICAgIGlmIChydWxlS2V5TmFtZSAhPSBcIlwiKSB7XHJcblx0XHRcdFx0XHRydWxlS2V5TmFtZSA9IHJ1bGVLZXlOYW1lICsgXCJfXCI7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdHJ1bGVLZXlOYW1lID0gcnVsZUtleU5hbWUgKyBlbGVtO1xyXG4gICAgICB9XHJcblxyXG4gICAgfVxyXG4gICAgaWYgKHRoaXMucGFyYW1Db25maWcuREVCVUdfRkxBRykgY29uc29sZS5sb2coXCJydWxlS2V5OlwiLCBydWxlS2V5LCBcIiBydWxlS2V5TmFtZTpcIiwgcnVsZUtleU5hbWUpO1xyXG5cclxuXHJcblxyXG4gICAgaWYgKHRoaXMucGFyYW1Db25maWcuREVCVUdfRkxBRykgY29uc29sZS5sb2coXCJSVUxFX0tFWTpcIiwgUlVMRV9LRVkpO1xyXG5cclxuXHJcbiAgICB2YXIgdGVtcGxhdGVOYW1lID0gcnVsZUxvZy5xdWVyeURhdGEuVEVNUExBVEVfTkFNRTtcclxuICAgIGxldCBxdWVyeURhdGEgPSBwcmVwYXJlRGF0YUZvckRCKHJ1bGVMb2cucXVlcnlEYXRhKTtcclxuICAgIC8vbGV0IGJvZHlUb1NlbmQgPSBwcmVwYXJlRGF0YUZvckRCKHJ1bGVMb2cuYm9keVRvU2VuZCk7XHJcbiAgICBsZXQgYm9keVRvU2VuZCA9IHJ1bGVMb2cuYm9keVRvU2VuZDtcclxuICAgIGxldCBwYXJhbWV0ZXJzVG9TZW5kID0gcHJlcGFyZURhdGFGb3JEQihydWxlTG9nLnBhcmFtZXRlcnNUb1NlbmQpO1xyXG4gICAvLyBsZXQgcnVsZUtleVN0ciA9IHByZXBhcmVEYXRhRm9yREIocnVsZUtleSk7XHJcbiAgICBsZXQgbXNnUmVzcG9uc2VTdHIgPSBwcmVwYXJlRGF0YUZvckRCKG1zZ1Jlc3BvbnNlKTtcclxuXHJcbiAgICBpZiAodGhpcy5wYXJhbUNvbmZpZy5ERUJVR19GTEFHKSBjb25zb2xlLmxvZyhcInF1ZXJ5RGF0YTpcIiArIHF1ZXJ5RGF0YSk7XHJcblxyXG4vL1xyXG4gICAgICAgICAgICAgIGxldCB1c2VyTmFtZSA9IG9iamVjdC5zdGFyU2VydmljZXMuc2Vzc2lvblBhcmFtcy5VU0VSX0lORk8uTmFtZTtcclxuICAgIG9iamVjdC5Cb2R5ID0gW107XHJcbiAgICBsZXQgUGFnZSA9IFwiXCI7XHJcbiAgICBsZXQgTmV3VmFsOmFueSA9IHtcclxuICAgICAgXCJSVUxFX0tFWVwiOiBydWxlS2V5LFxyXG4gICAgICBcIlJVTEVfS0VZX05BTUVcIjogcnVsZUtleU5hbWUsXHJcbiAgICAgIFwiU1RBVFVTXCI6IHN0YXR1cyxcclxuICAgICAgXCJNT0RVTEVcIjogcnVsZUxvZy5ydWxlLk1PRFVMRSxcclxuICAgICAgXCJSVUxFX0lEXCI6IHJ1bGVMb2cucnVsZS5SVUxFX0lELFxyXG4gICAgICBcIkFDVElPTl9JRFwiOiBydWxlTG9nLmFjdGlvbi5BQ1RJT05fSUQsXHJcbiAgICAgIFwiU0VOVF9EQVRFXCI6IHJ1bGVMb2cuc2VudERhdGUsXHJcbiAgICAgIFwiTVNHX1JFQ0VJVkVEXCI6IHF1ZXJ5RGF0YSxcclxuICAgICAgICAgICAgICAgIFwiUEFSQU1FVEVSX1NFTlRcIjogcGFyYW1ldGVyc1RvU2VuZCxcclxuICAgICAgXCJCT0RZX1NFTlRcIjogYm9keVRvU2VuZCxcclxuICAgICAgXCJNU0dfUkVTUE9OU0VcIjogbXNnUmVzcG9uc2VTdHIsXHJcbiAgICAgIFwiTE9HREFURVwiOiBkYXRlSXNvLFxyXG4gICAgICBcIkxPR05BTUVcIjogdXNlck5hbWUsXHJcbiAgICAgIFwiVEVNUExBVEVfTkFNRVwiIDogdGVtcGxhdGVOYW1lXHJcblxyXG4gICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgTmV3VmFsW1wiX1FVRVJZXCJdID0gXCJJTlNFUlRfQURNX1JVTEVfTE9HXCI7XHJcblxyXG4gICAgICAgICAgICAgIC8vaWYgKHRoaXMucGFyYW1Db25maWcuREVCVUdfRkxBRykgY29uc29sZS5sb2coXCJ0ZXN0Ok5ld1ZhbDpcIiwgTmV3VmFsKVxyXG4gICAgICAgICAgICAgIC8vaWYgKHRoaXMucGFyYW1Db25maWcuREVCVUdfRkxBRykgY29uc29sZS5sb2coXCJ0ZXN0Om9iamVjdC5Cb2R5OlwiLCBvYmplY3QuQm9keSlcclxuICAgICAgICAgICAgICBvYmplY3QuYWRkVG9Cb2R5KE5ld1ZhbCk7XHJcblxyXG5cclxuICAgIHRoaXMucG9zdChvYmplY3QsIFBhZ2UsIG9iamVjdC5Cb2R5KS5zdWJzY3JpYmUocmVzdWx0ID0+IHtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLnBhcmFtQ29uZmlnLkRFQlVHX0ZMQUcpIGNvbnNvbGUubG9nKFwidGVzdDpyZXN1bHQuZGF0YTpcIiwgcmVzdWx0LmRhdGEpO1xyXG4gICAgICBvYmplY3QuQm9keSA9IFtdO1xyXG4gICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgZXJyID0+IHtcclxuICAgICAgICBvYmplY3QuQm9keSA9IFtdO1xyXG4gICAgICAgIHRoaXMuc2hvd05vdGlmaWNhdGlvbihcImVycm9yXCIsIFwiZXJyb3I6XCIgKyBlcnIubWVzc2FnZSk7XHJcbiAgICAgICAgICAgICAgfSk7XHJcblxyXG5cclxuXHJcbiAgfVxyXG4gIHB1YmxpYyBwZXJmb3JtSHR0cFBvc3Qob2JqZWN0OmFueSwgYm9keVRvU2VuZDphbnksIHBhcmFtZXRlcnNUb1NlbmQ6YW55LCBzZW5kVG86YW55LCBxdWVyeURhdGE6YW55LCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgcnVsZTphbnksIGFjdGlvbjphbnksIFRyaWdnZXI6YW55LCBob3N0RGVmOmFueSwgaG9zdE1hcERlZjphbnksIGhlYWRlclBhcmFtOmFueSwgIHBhdGhFeHRyYTphbnkpIHtcclxuXHJcbiAgICB2YXIgdmFsaWQgPSBmYWxzZTtcclxuICAgIGxldCBlcnJvciA9IDA7XHJcbiAgICBsZXQgbXNnID0gXCJcIjtcclxuXHJcbiAgICBsZXQgb3B0aW9uczphbnkgPSB7XHJcbiAgICAgIGhvc3Q6ICcnLFxyXG4gICAgICBwYXRoOiAnJyxcclxuICAgICAgcG9ydDogODAsXHJcbiAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXHJcbiAgICAgICAvLydDb250ZW50LVR5cGUnOiAndGV4dC94bWw7IGNoYXJzZXQ9dXRmLTgnLFxyXG4gICAgICBcImF1dGhvcml6YXRpb25cIjogXCJcIlxyXG4gICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgLy8gaWYgKHRoaXMucGFyYW1Db25maWcuREVCVUdfRkxBRykgY29uc29sZS5sb2coXCItLS0tLS0tLS0tLS0tLS1yZXEudXJsOlwiLHJlcS51cmwpO1xyXG4gICAvLyBpZiAodGhpcy5wYXJhbUNvbmZpZy5ERUJVR19GTEFHKSBjb25zb2xlLmxvZyhcIi0tLS0tLS0tLS0tLS0tLXBhdGhuYW1lOlwiLHJlcS5fcGFyc2VkVXJsLnBhdGhuYW1lKTtcclxuICAgLy8gaWYgKHRoaXMucGFyYW1Db25maWcuREVCVUdfRkxBRykgY29uc29sZS5sb2coXCItLS0tLS0tLS0tLS0tLS1wYXRoOlwiLHJlcS5fcGFyc2VkVXJsLnBhdGgpO1xyXG4gICAgbGV0IGQgPSBuZXcgRGF0ZSgpO1xyXG4gICAgbGV0IGRhdGVJc28gPSB0aGlzLkZPUk1BVF9JU08oZCk7XHJcbiAgICBpZiAoaG9zdERlZiA9PSBudWxsKVxyXG4gICAgICBob3N0RGVmID0gXCJcIjtcclxuXHJcbiAgICBsZXQgcnVsZUxvZyA9IHtcclxuICAgICAgcnVsZTogcnVsZSxcclxuICAgICAgYWN0aW9uOiBhY3Rpb24sXHJcbiAgICAgIHF1ZXJ5RGF0YTogcXVlcnlEYXRhLFxyXG4gICAgICBib2R5VG9TZW5kOiBib2R5VG9TZW5kLFxyXG4gICAgICBwYXJhbWV0ZXJzVG9TZW5kOiBwYXJhbWV0ZXJzVG9TZW5kLFxyXG4gICAgLy8gIFwiZGJcIjogZGIsXHJcbiAgICAgIHNlbnREYXRlOiBkYXRlSXNvLFxyXG4gICAgICBob3N0RGVmOiBob3N0RGVmXHJcbiAgICB9O1xyXG4gICAgaWYgKHNlbmRUbyA9PSBcIldGXCIpIHtcclxuICAgICAgbGV0IHVybCA9IHRoaXMuQkFTRV9VUkw7XHJcblxyXG4gICAgICBvcHRpb25zLmhlYWRlcnMuYXV0aG9yaXphdGlvbiA9IHRoaXMuU3RyQXV0aDtcclxuXHJcbiAgICAgIHZhbGlkID0gdHJ1ZTtcclxuXHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgaWYgKGhvc3REZWYgIT0gXCJcIikge1xyXG4gICAgICAgIGxldCBwYXRoID0gXCIvXCIgKyBob3N0RGVmLlBBVEg7XHJcbiAgICAgICAgaWYgKHBhcmFtZXRlcnNUb1NlbmQgIT0gXCJcIilcclxuICAgICAgICAgIHBhdGggPSBwYXRoICsgcGFyYW1ldGVyc1RvU2VuZDtcclxuICAgICAgICBwYXRoID0gcGF0aCArIHBhdGhFeHRyYTtcclxuICAgICAgICBsZXQgaG9zdCA9IGhvc3REZWYuSE9TVDtcclxuICAgICAgICBsZXQgcG9ydCA9IHBhcnNlSW50KGhvc3REZWYuUE9SVCk7XHJcbiAgICAgICAgbGV0IG1ldGhvZCA9IGhvc3REZWYuSFRUUF9NRVRIT0Q7XHJcblxyXG4gICAgICAgIG9wdGlvbnMuaG9zdCA9IGhvc3Q7XHJcbiAgICAgICAgb3B0aW9ucy5wb3J0ID0gcG9ydDtcclxuICAgICAgICBvcHRpb25zLnBhdGggPSBwYXRoO1xyXG4gICAgICAgIG9wdGlvbnMubWV0aG9kID0gbWV0aG9kO1xyXG4gICAgICAgLy8gbGV0IHVybCA9IFwiaHR0cDovL1wiICsgaG9zdCArIFwiOlwiICsgcG9ydCAgKyBwYXRoICsgcGFyYW1ldGVyc1RvU2VuZCA7XHJcbiAgICAgICAgbGV0IHVybDogc3RyaW5nID0gaG9zdERlZi5VUkw7XHJcbi8vXHRcdFx0XHRcdG9wdGlvbnMuaGVhZGVycy5hdXRob3JpemF0aW9uID0gcmVxLmhlYWRlcnMuYXV0aG9yaXphdGlvbjtcclxuICAgICAgICAvL2JvZHlUb1NlbmQgPSBcIlwiO1xyXG5cclxuXHJcbiAgICAgICAgdmFsaWQgPSB0cnVlO1xyXG4gICAgICB9XHJcbiAgICAgIGVsc2Uge1xyXG4gICAgICAgIGVycm9yID0gMTAwO1xyXG4gICAgICAgIG1zZyA9IFwidW5kZWZpbmVkIEhvc3QgOlwiICsgc2VuZFRvO1xyXG4gICAgICAgIHRoaXMuTG9nUnVsZShvYmplY3QsIHJ1bGVMb2csIG1zZywgMTAwKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgaWYgKHRoaXMucGFyYW1Db25maWcuREVCVUdfRkxBRykgY29uc29sZS5sb2coXCJoZXJlMjp2YWxpZDpcIiwgdmFsaWQpO1xyXG4gICAgaWYgKHZhbGlkKSB7XHJcbiAgICAgIGlmICh0aGlzLnBhcmFtQ29uZmlnLkRFQlVHX0ZMQUcpIGNvbnNvbGUubG9nKFwib3B0aW9uczpcIiwgb3B0aW9ucyk7XHJcbiAgICAgIGlmICh0aGlzLnBhcmFtQ29uZmlnLkRFQlVHX0ZMQUcpIGNvbnNvbGUubG9nKFwiLS0tLS0tYm9keVRvU2VuZDpcIiArIGJvZHlUb1NlbmQsIFwiICBUcmlnZ2VyOlwiLCBUcmlnZ2VyKTtcclxuXHJcbiAgICAgIGxldCBrZXlzID0gT2JqZWN0LmtleXMoaGVhZGVyUGFyYW0pO1xyXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGtleXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBpZiAodGhpcy5wYXJhbUNvbmZpZy5ERUJVR19GTEFHKSBjb25zb2xlLmxvZyhrZXlzW2ldICsgXCIgXCIgKyBoZWFkZXJQYXJhbVtrZXlzW2ldXSk7XHJcbiAgICAgICAgaWYgKGhlYWRlclBhcmFtW2tleXNbaV1dICE9IG51bGwpIHtcclxuICAgICAgICAgIG9wdGlvbnMuaGVhZGVyc1trZXlzW2ldXSA9IGhlYWRlclBhcmFtW2tleXNbaV1dO1xyXG5cclxuICAgICAgICAgIC8vc2NyZWVuQ29uZmlnWyBrZXlzW2ldIF0gPSBjb21wb25lbnRDb25maWdbIGtleXNbaV0gXTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmICh0aGlzLnBhcmFtQ29uZmlnLkRFQlVHX0ZMQUcpIGNvbnNvbGUubG9nKFwiaGVyZTI6YWN0aW9uLkFDVElPTl9DT0RFOlwiLCBhY3Rpb24uQUNUSU9OX0NPREUpO1xyXG4gICAgICBpZiAoYWN0aW9uLkFDVElPTl9DT0RFID09IFwiU0VORF9XQUlUXCIpIHtcclxuICAgICAgICAvKlxyXG4gICAgICAgIGxldCBzZW5kaW5nTGliID0gXCJyZXF1ZXN0XCI7XHJcbiAgICAgICAgc3RhdHVzID0gMTtcclxuICAgICAgICBsZXQgaGVhZGVycyAgPSAge2hlYWRlcnM6b3B0aW9ucy5oZWFkZXJzfTtcclxuICAgICAgICBpZiAodGhpcy5wYXJhbUNvbmZpZy5ERUJVR19GTEFHKSBjb25zb2xlLmxvZyhcImhlYWRlcnM6XCIsIGhlYWRlcnMpO1xyXG4gICAgICAgIGxldCB1cmwgPSBcImh0dHA6Ly9cIiArIGhvc3QgKyBcIjpcIiArIHBvcnQgICsgcGF0aCArIHBhcmFtZXRlcnNUb1NlbmQgO1xyXG4gICAgICAgIGlmICh0aGlzLnBhcmFtQ29uZmlnLkRFQlVHX0ZMQUcpIGNvbnNvbGUubG9nKFwiLS0tdXJsOlwiLCB1cmwpO1xyXG4gICAgICAgIGlmIChtZXRob2QgPT0gXCJHRVRcIilcclxuICAgICAgICB7XHJcbiAgICAgICAgICBsZXQgcmVzID0gcmVxdWVzdChtZXRob2QsIHVybCwgaGVhZGVycyk7XHJcbiAgICAgICAgICBsZXQgcmVzdWx0ID0gSlNPTi5wYXJzZShyZXMuZ2V0Qm9keSgndXRmOCcpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZVxyXG4gICAgICAgIGlmIChtZXRob2QgPT0gXCJQT1NUXCIpXHJcbiAgICAgICAge1xyXG5cclxuICAgICAgICAgIGxldCBkYXRhRm9yU3luYyA9IHsgYm9keSA6IGJvZHlUb1NlbmQsIGhlYWRlcnM6b3B0aW9ucy5oZWFkZXJzfTtcclxuICAgICAgICAgIGxldCByZXMgPSByZXF1ZXN0KG1ldGhvZCwgdXJsLCBkYXRhRm9yU3luYyk7XHJcbiAgICAgICAgICBpZiAodGhpcy5wYXJhbUNvbmZpZy5ERUJVR19GTEFHKSBjb25zb2xlLmxvZyhcInJlczpcIiwgcmVzKTtcclxuICAgICAgICAgIGxldCBzdGF0dXNDb2RlID0gcmVzLnN0YXR1c0NvZGU7XHJcbiAgICAgICAgICBsZXQgbXNnUmVzcG9uc2UgPVwiXCI7XHJcbiAgICAgICAgICBpZiAoc3RhdHVzQ29kZSA9PSAyMDApXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIGxldCBjb250ZW50VHlwZSA9IHJlcy5oZWFkZXJzWydjb250ZW50LXR5cGUnXTtcclxuXHJcbiAgICAgICAgICAgIGxldCBtc2dSZXNwb25zZSA9IHJlcy5nZXRCb2R5KCd1dGY4Jyk7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnBhcmFtQ29uZmlnLkRFQlVHX0ZMQUcpIGNvbnNvbGUubG9nKFwic3RhdHVzQ29kZTpcIiwgc3RhdHVzQ29kZSxcIiBoZWFkZXJzOlwiLCBoZWFkZXJzLCAgXCIgbXNnUmVzcG9uc2U6XCIsIG1zZ1Jlc3BvbnNlKTtcclxuICAgICAgICAgICAgbGV0IG4gPSBjb250ZW50VHlwZS5zZWFyY2goXCJqc29uXCIpO1xyXG4gICAgICAgICAgICBpZiAobiAhPSAtMSlcclxuICAgICAgICAgICAgICBsZXQgcmVzdWx0ID0gSlNPTi5zdHJpbmdpZnkoSlNPTi5wYXJzZShtc2dSZXNwb25zZSkpO1xyXG4gICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgICAgbGV0IHJlc3VsdCA9IG1zZ1Jlc3BvbnNlO1xyXG4gICAgICAgICAgICBpZiAodGhpcy5wYXJhbUNvbmZpZy5ERUJVR19GTEFHKSBjb25zb2xlLmxvZyhcInJlc3VsdDpcIiArICByZXN1bHQpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgZWxzZVxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBlcnJvciA9IHN0YXR1c0NvZGU7XHJcbiAgICAgICAgICAgIGxldCBtc2dSZXNwb25zZSA9IHJlcy5ib2R5LnRvU3RyaW5nKCk7XHJcbiAgICAgICAgICAgIG1zZyA9IG1zZ1Jlc3BvbnNlO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGVycm9yID09IDApXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgaWYgKCAoaG9zdE1hcERlZiAhPSBudWxsKSAmJiAgKGhvc3RNYXBEZWYuWFNMVF9SRUNFSVZFICE9IG51bGwpICYmIChob3N0TWFwRGVmLlhTTFRfUkVDRUlWRSAhPSBcIlwiKSApXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAvL3Jlc3VsdCA9IHhzbHRtYXAubWFwRGF0YU91dChyZXN1bHQsIGhvc3RNYXBEZWYuWFNMVF9SRUNFSVZFKTtcclxuICAgICAgICAgICAgICAvL2lmICh0aGlzLnBhcmFtQ29uZmlnLkRFQlVHX0ZMQUcpIGNvbnNvbGUubG9nKFwicmVzdWx0OlwiLCByZXN1bHQpO1xyXG5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIGxldCBzdGF0dXMgPSBleHRyYWN0U3RhdHVzIChydWxlTG9nLCByZXN1bHQpO1xyXG4gICAgICAgICAgTG9nUnVsZShydWxlTG9nLCByZXN1bHQsIHN0YXR1cyApO1xyXG4gICAgICAgICAgZXJyb3IgPSBzdGF0dXM7XHJcbiAgICAgICAgICBpZiAoc3RhdHVzICE9IDApXHJcbiAgICAgICAgICAgIG1zZyA9IHJlc3VsdDtcclxuICAgICAgICB9XHJcbiAgICAgICAgKi9cclxuXHJcblxyXG5cclxuICAgICAgfVxyXG4gICAgICBlbHNlIHtcclxuICAgICAgICAvL2FzeW5jXHJcbiAgICAgICAgZnVuY3Rpb24gZXh0cmFjdFN0YXR1cyhydWxlTG9nOmFueSwgbXNnUmVzcG9uc2U6YW55KSB7XHJcbiAgICAgICAgICBsZXQgc3VjY2Vzc01zZyA9IHJ1bGVMb2cuaG9zdERlZi5TVUNDRVNTX01TRztcclxuICAgICAgICAgIFxyXG4gICAgICAgICAgICAvL2NvbnNvbGUubG9nKFwiLS0tLS0tLW1zZ1Jlc3BvbnNlOlwiLCBtc2dSZXNwb25zZSwgc3VjY2Vzc01zZyk7XHJcbiAgICAgICAgICBsZXQgYXJyYXkgPSBzdWNjZXNzTXNnLnNwbGl0KFwiOlwiKTtcclxuICAgICAgICAgIGxldCBmaWVsZCA9IGFycmF5WzBdO1xyXG4gICAgICAgICAgbGV0IHZhbHVlID0gYXJyYXlbMV07XHJcblxyXG4gICAgICAgICAgbGV0IG1zZ1Jlc3BvbnNlQXJyID0gbXNnUmVzcG9uc2U7XHJcbiAgICAgICAgICBtc2dSZXNwb25zZSA9IEpTT04uc3RyaW5naWZ5KG1zZ1Jlc3BvbnNlQXJyKTtcclxuICAgICAgICAgIFxyXG4gICAgICAgICAgLy9jb25zb2xlLmxvZyhcImZpZWxkOlwiLCBmaWVsZCwgXCIgdmFsdWU6XCIsIHZhbHVlLCBcIiBtc2dSZXNwb25zZUFycjpcIiwgbXNnUmVzcG9uc2VBcnIpO1xyXG4gICAgICAgICAgLy9jb25zb2xlLmxvZyhcIi0tLS0tLS1tc2dSZXNwb25zZUFycltmaWVsZF06XCIsIG1zZ1Jlc3BvbnNlQXJyW2ZpZWxkXSwgdmFsdWUpO1xyXG4gICAgICAgICAgbGV0IHN0YXR1cyA9IDE7XHJcbiAgICAgICAgICBpZiAobXNnUmVzcG9uc2VBcnJbZmllbGRdID09IHZhbHVlKVxyXG4gICAgICAgICAgICBzdGF0dXMgPSAwO1xyXG4gICAgICAgICAgcmV0dXJuIHN0YXR1cztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGZ1bmN0aW9uIGV4dHJhY3RSZXNwb25zZURhdGEobXNnUmVzcG9uc2U6YW55LCByZXNwb25zZURhdGFJRDphbnkpIHtcclxuICAgICAgICAgIGZ1bmN0aW9uIGdldEtleShFbG06YW55LCBlbG1WYWw6YW55KSB7XHJcbiAgICAgICAgICAgICAgIGxldCBrZXlzID0gT2JqZWN0LmtleXMoRWxtKTtcclxuICAgICAgICAgICAgbGV0IGsgPSAwO1xyXG4gICAgICAgICAgICAgICBsZXQgZWxtT2JqO1xyXG4gICAgICAgICAgICB3aGlsZSAoayA8IGtleXMubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhcIltrZXlzW2tdOlwiLCBrZXlzW2tdKTtcclxuICAgICAgICAgICAgICBpZiAoa2V5c1trXSA9PSBlbG1WYWwpIHtcclxuICAgICAgICAgICAgICAgICAgbGV0IGVsbU5hbWUgPSBrZXlzW2tdO1xyXG4gICAgICAgICAgICAgICAgICBlbG1PYmogPSBFbG1bZWxtTmFtZV07XHJcbiAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKFwiZWxtT2JqOlwiLCBlbG1PYmopO1xyXG4gICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGsrKztcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgcmV0dXJuIGVsbU9iajtcclxuICAgICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgICAgICBsZXQgYXJyYXkgPSByZXNwb25zZURhdGFJRC5zcGxpdChcIi5cIik7XHJcbiAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFycmF5Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGxldCByZXR1cm5LZXkgPSBnZXRLZXkobXNnUmVzcG9uc2UsIGFycmF5W2ldKVxyXG4gICAgICAgICAgICAvL2NvbnNvbGUubG9nKFwicmV0dXJuS2V5Lmxlbmd0aDpcIiwgcmV0dXJuS2V5Lmxlbmd0aCk7XHJcbiAgICAgICAgICAgIGlmIChyZXR1cm5LZXkubGVuZ3RoID09IDEpXHJcbiAgICAgICAgICAgICAgbXNnUmVzcG9uc2UgPSByZXR1cm5LZXlbMF07XHJcbiAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAgICBtc2dSZXNwb25zZSA9IHJldHVybktleTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIC8vY29uc29sZS5sb2coXCJtc2dSZXNwb25zZTpcIiwgbXNnUmVzcG9uc2UpO1xyXG5cclxuICAgICAgICAgIH1cclxuICAgICAgICAgIHJldHVybiBtc2dSZXNwb25zZTtcclxuXHJcblxyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qXHJcbiAgICAgICAgZnVuY3Rpb24gIGhhbmRsZVJlc3BvbnNlRW5kKHJ1bGVMb2csIG1zZ1Jlc3BvbnNlKXtcclxuICAgICAgICAgIGxldCBzdGF0dXMgPSBleHRyYWN0U3RhdHVzIChydWxlTG9nLCBtc2dSZXNwb25zZSk7XHJcbiAgICAgICAgICB0aGlzLkxvZ1J1bGUocnVsZUxvZywgbXNnUmVzcG9uc2UsIHN0YXR1cyk7XHJcblxyXG5cclxuICAgICAgICAgIC8vXHQuUlVMRV9JRCArIFwiLFwiICsgIGFjdGlvbi5BQ1RJT05fSUQgKyBcIixcIiArIHVzZXJzLmdldFVzZXJOYW1lKCkgKyBcIixcIiAgKyBkYXRlSXNvO1xyXG4gICAgICAgICAgaWYgKHRoaXMucGFyYW1Db25maWcuREVCVUdfRkxBRykgY29uc29sZS5sb2coXCItLS0tLS0taGFuZGxlUmVzcG9uc2U6c3RhdHVzOlwiICwgIHN0YXR1cyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICovXHJcbiAgICAgICAgZnVuY3Rpb24gZ2V0Qm9keShtc2dSZXNwb25zZTphbnkpIHtcclxuICAgICAgICAgIC8vaWYgKHRoaXMucGFyYW1Db25maWcuREVCVUdfRkxBRykgY29uc29sZS5sb2coXCJtc2dSZXNwb25zZTpcIiwgbXNnUmVzcG9uc2UpXHJcbiAgICAgICAgICAvL2lmICh0aGlzLnBhcmFtQ29uZmlnLkRFQlVHX0ZMQUcpIGNvbnNvbGUubG9nKFwibXNnUmVzcG9uc2U6Ym9keVwiLCBtc2dSZXNwb25zZS5ib2R5KVxyXG4gICAgICAgICAgcmV0dXJuIG1zZ1Jlc3BvbnNlLmJvZHlcclxuICAgICAgICB9XHJcbiAgLypcclxuICAgICAgICBsZXQgaGFuZGxlUmVzcG9uc2UgPSBmdW5jdGlvbihyZXNwb25zZSwgIHJ1bGVMb2cpe1xyXG4gICAgICAgICAgbGV0IG1zZ1Jlc3BvbnNlID0gJydcclxuICAgICAgICAgIHJlc3BvbnNlLm9uKCdkYXRhJywgZnVuY3Rpb24gKGNodW5rKSB7XHJcbiAgICAgICAgICBtc2dSZXNwb25zZSArPSBjaHVuaztcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgcmVzcG9uc2Uub24oJ2VuZCcsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICBoYW5kbGVSZXNwb25zZUVuZChydWxlTG9nLCBtc2dSZXNwb25zZSk7XHJcbiAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIH1cclxuICAgICAgICAqL1xyXG5cclxuICAgICAgICBsZXQgaGVhZGVycyA9IHtcclxuICAgICAgICAgIGhlYWRlcnM6IG5ldyBIdHRwSGVhZGVycygpXHJcbiAgICAgICAgICAgIC5zZXQoJ0F1dGhvcml6YXRpb24nLCB0aGlzLlN0ckF1dGgpXHJcbiAgICAgICAgICAgIC5zZXQoJ0NvbnRlbnQtVHlwZScsIFwiYXBwbGljYXRpb24vanNvblwiKVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5wYXJhbUNvbmZpZy5ERUJVR19GTEFHKSBjb25zb2xlLmxvZyhcImhlcmUyOmhlYWRlcnM6XCIsIGhlYWRlcnMpO1xyXG4gICAgICAgIGlmIChib2R5VG9TZW5kID09IFwiXCIpXHJcbiAgICAgICAgICBib2R5VG9TZW5kID0gbnVsbDtcclxuICAgICAgICBsZXQgYm9keVRvU2VuZEtTT04gPSBKU09OLnBhcnNlKGJvZHlUb1NlbmQpO1xyXG4gICAgICAgIGlmICh0aGlzLnBhcmFtQ29uZmlnLkRFQlVHX0ZMQUcpIGNvbnNvbGUubG9nKFwiaGVyZTI6Ym9keVRvU2VuZEtTT046XCIsIGJvZHlUb1NlbmRLU09OKTtcclxuXHJcbiAgICAgICAgbGV0IHVybDogc3RyaW5nID0gaG9zdERlZi5VUkwgKyBwYXJhbWV0ZXJzVG9TZW5kO1xyXG4gICAgICAgIGlmICh0aGlzLnBhcmFtQ29uZmlnLkRFQlVHX0ZMQUcpIGNvbnNvbGUubG9nKFwiLS0tdXJsOlwiLCB1cmwpO1xyXG5cclxuXHJcbiAgICAgICAgY29uc3QgcmVxdWVzdCA9IG5ldyBIdHRwUmVxdWVzdChcclxuICAgICAgICAgIG9wdGlvbnMubWV0aG9kLCB1cmwsIGJvZHlUb1NlbmRLU09OLCBoZWFkZXJzKTtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMucGFyYW1Db25maWcuREVCVUdfRkxBRykgY29uc29sZS5sb2coXCItLS0tLS0tLS0tLS1yZXF1ZXN0OlwiLCByZXF1ZXN0LCBcIiBib2R5VG9TZW5kS1NPTjpcIiwgYm9keVRvU2VuZEtTT04pXHJcbiAgICAgICAgbGV0IG1zZ0JvZHlBbGw6YW55O1xyXG4gICAgICAgIHRoaXMuc3luY0ZsYWcgPSAxO1xyXG4vL2h0dHBzOi8vZGV2ZWxvcHBhcGVyLmNvbS9nZXR0aW5nLXN0YXJ0ZWQtd2l0aC1hbmd1bGFyLWh0dHAtY2xpZW50L1xyXG4gICAgICAgIHRoaXMuaHR0cC5yZXF1ZXN0KHJlcXVlc3QpXHJcbiAgICAgICAgICAgIC5zdWJzY3JpYmUoXHJcbiAgICAgICAgICAgICAgICAocmVzcG9uc2UpID0+IHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5wYXJhbUNvbmZpZy5ERUJVR19GTEFHKSBjb25zb2xlLmxvZyhcIiBjYWxsIHN1Y2Nlc3NmdWwgdmFsdWUgcmV0dXJuZWQgaW4gYm9keVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgcmVzcG9uc2UpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgbGV0IG1zZ0JvZHkgPSBnZXRCb2R5KHJlc3BvbnNlKVxyXG4gICAgICAgICAgICAgIGlmICh0eXBlb2YgbXNnQm9keSAhPT0gXCJ1bmRlZmluZWRcIikge1xyXG4gICAgICAgICAgICAgICAgbXNnQm9keUFsbCA9IG1zZ0JvZHk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLnBhcmFtQ29uZmlnLkRFQlVHX0ZMQUcpIGNvbnNvbGUubG9nKFwibXNnQm9keUFsbDpcIiwgbXNnQm9keUFsbCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICBlcnJvciA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5wYXJhbUNvbmZpZy5ERUJVR19GTEFHKSBjb25zb2xlLmxvZyhcIlBVVCBjYWxsIGluIGVycm9yOlwiLCBlcnJvcik7XHJcbiAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN5bmNGbGFnID0gMDtcclxuICAgICAgICAgICAgICB0aGlzLnNob3dOb3RpZmljYXRpb24oXCJlcnJvclwiLCBcImVycm9yIGNhbGxpbmc6IFwiICsgdXJsICsgXCI6XCIgKyBlcnJvci5lcnJvci5lcnJvcik7XHJcbiAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLnBhcmFtQ29uZmlnLkRFQlVHX0ZMQUcpIGNvbnNvbGUubG9nKFwiVGhlICBvYnNlcnZhYmxlIGlzIG5vdyBjb21wbGV0ZWQ6bXNnQm9keUFsbDpcIiwgbXNnQm9keUFsbCk7XHJcbiAgICAgICAgICAgICAgaWYgKHR5cGVvZiBtc2dCb2R5QWxsICE9PSBcInVuZGVmaW5lZFwiKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgc3RhdHVzID0gZXh0cmFjdFN0YXR1cyhydWxlTG9nLCBtc2dCb2R5QWxsKTtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLnBhcmFtQ29uZmlnLkRFQlVHX0ZMQUcpIGNvbnNvbGUubG9nKFwiLS0tLS0tLXVsZUxvZy5ydWxlOlwiLCBydWxlTG9nLnJ1bGUpO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmIChUcmlnZ2VyID09IFwiUE9TVF9RVUVSWVwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHJlc3BvbnNlRGF0YUlEID0gcnVsZUxvZy5ydWxlLlJFU1BPTlNFX0RBVEFfSUQ7XHJcbiAgICAgICAgICAgICAgICAgIGlmICh0aGlzLnBhcmFtQ29uZmlnLkRFQlVHX0ZMQUcpIGNvbnNvbGUubG9nKFwiVEFCUzpyZXNwb25zZURhdGFJRDpcIiwgcmVzcG9uc2VEYXRhSUQpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgbGV0IHJlc3BvbnNlRGF0YSA9IGV4dHJhY3RSZXNwb25zZURhdGEobXNnQm9keUFsbCwgcmVzcG9uc2VEYXRhSUQpO1xyXG4gICAgICAgICAgICAgICAgICBpZiAodGhpcy5wYXJhbUNvbmZpZy5ERUJVR19GTEFHKSBjb25zb2xlLmxvZyhcIlRBQlM6cmVzcG9uc2VEYXRhOlwiLCByZXNwb25zZURhdGEsIFwicXVlcnlEYXRhOlwiLCBxdWVyeURhdGEpO1xyXG4gICAgICAgICAgICAgICAgICBpZiAodGhpcy5wYXJhbUNvbmZpZy5ERUJVR19GTEFHKSBjb25zb2xlLmxvZyhcIlRBQlM6cnVsZUxvZy5ydWxlLlJFU1BPTlNFX0RBVEFfTkFNRTpcIiwgcnVsZUxvZy5ydWxlLlJFU1BPTlNFX0RBVEFfTkFNRSk7XHJcbiAgICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgcmVzcG9uc2VEYXRhICE9PSBcInVuZGVmaW5lZFwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvYmplY3RbcnVsZUxvZy5ydWxlLlJFU1BPTlNFX0RBVEFfTkFNRV0gPSByZXNwb25zZURhdGE7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5wYXJhbUNvbmZpZy5ERUJVR19GTEFHKSBjb25zb2xlLmxvZyhcIlRBQlM6b2JqZWN0LnRhYnNBUElSZXNwb25zZTpcIiwgb2JqZWN0LnRhYnNBUElSZXNwb25zZSlcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3luY0ZsYWcgPSAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLkxvZ1J1bGUob2JqZWN0LCBydWxlTG9nLCBtc2dCb2R5QWxsLCBzdGF0dXMpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgIC8qXHJcbiAgICAgICAgbGV0IHJlcU5ldyA9IHRoaXMuaHR0cC5yZXF1ZXN0KG9wdGlvbnMsIGZ1bmN0aW9uKHJlc3BvbnNlKXsgaGFuZGxlUmVzcG9uc2UocmVzcG9uc2UsICBydWxlTG9nKTsgfSk7XHJcbiAgICAgICAgcmVxTmV3Lm9uKCdlcnJvcicsIGZ1bmN0aW9uKGVycikge1xyXG4gICAgICAgICAgLy8gSGFuZGxlIGVycm9yXHJcbiAgICAgICAgICBlcnJvciA9IGVycjtcclxuICAgICAgICAgIG1zZyA9IFwiRXJyb3Igc2VuZGluZyB0byBIb3N0IDpcIiArc2VuZFRvIDtcclxuICAgICAgICAgIGlmICh0aGlzLnBhcmFtQ29uZmlnLkRFQlVHX0ZMQUcpIGNvbnNvbGUubG9nKCBtc2cgKyBcIiBFcnJvcjpcIiArIGVyciApO1xyXG4gICAgICAgICAgdGhpcy5Mb2dSdWxlKHJ1bGVMb2csIG1zZyArIFwiIEVycm9yOlwiICsgZXJyLCA0MDAgKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMucGFyYW1Db25maWcuREVCVUdfRkxBRykgY29uc29sZS5sb2coXCJoZXJlMVwiKTtcclxuICAgICAgICByZXFOZXcud3JpdGUoYm9keVRvU2VuZCk7XHJcbiAgICAgICAgaWYgKHRoaXMucGFyYW1Db25maWcuREVCVUdfRkxBRykgY29uc29sZS5sb2coXCJoZXJlMlwiKTtcclxuICAgICAgICByZXFOZXcuZW5kKCk7XHJcbiAgICAgICAgaWYgKHRoaXMucGFyYW1Db25maWcuREVCVUdfRkxBRykgY29uc29sZS5sb2coXCJoZXJlM1wiKTtcclxuICAgICAgICAqL1xyXG4gICAgICB9XHJcblxyXG4gICAgfVxyXG4gICAgbGV0IHN0YXR1c1JlYyA9IHtcclxuICAgICAgc3RhdHVzOiBlcnJvcixcclxuICAgICAgbXNnOiBtc2dcclxuICAgIH07XHJcblxyXG4gICAgLypsZXQgc3RhdHVzID0gMTtcclxuICAgIGlmICghdmFsaWQpe1xyXG4gICAgICBzdGF0dXNSZWMuc3RhdHVzID0gMTtcclxuICAgICAgc3RhdHVzUmVjLm1zZyA9XHJcbiAgICB9Ki9cclxuICAgIGlmICh0aGlzLnBhcmFtQ29uZmlnLkRFQlVHX0ZMQUcpIGNvbnNvbGUubG9nKFwidmFsaWQ6XCIsIHZhbGlkLCBcIiBzdGF0dXM6XCIsIHN0YXR1c1JlYyk7XHJcblxyXG4gICAgcmV0dXJuIChzdGF0dXNSZWMpO1xyXG5cclxuICB9XHJcbiAgcHVibGljIHNlbmRUb1NlcnZlcihvYmplY3Q6YW55LCBhY3Rpb25zQXJyOmFueSwgcXVlcnlEYXRhOmFueSwgcnVsZTphbnksIGFjdGlvbjphbnksIFRyaWdnZXI6YW55LCBob3N0c0FycjphbnksIGhvc3RzTWFwQXJyOmFueSkge1xyXG4gICAgZnVuY3Rpb24gZ2V0RWxtVmFsdWUocGFyYW1EYXRhOmFueSwgcXVlcnlEYXRhOmFueSkge1xyXG4gICAgICBmdW5jdGlvbiBnZXRPUkRFUl9GSUVMRFNEYXRhKHBhcmFtOmFueSwgb3JkZXJGaWVsZHM6YW55KSB7XHJcblx0XHQgICAgICBsZXQgdmFsID0gXCJcIjtcclxuICAgICAgICBpZiAob3JkZXJGaWVsZHMgIT0gXCJcIikge1xyXG5cdFx0ICAgICAgICBsZXQgYXJyYXkgPSBwYXJhbS5zcGxpdChcIi5cIik7XHJcbiAgICAgICAgICB2YXIgYXJyTmFtZSA9IGFycmF5WzBdLnRyaW0oKTtcclxuXHRcdCAgICAgICAgbGV0IGZpZWxkTmFtZSA9IGFycmF5WzFdO1xyXG4gICAgICAgICAgY29uc29sZS5sb2coXCJnZXRFbG1WYWx1ZTpmaWVsZE5hbWU6XCIsIGZpZWxkTmFtZSwgXCIgb3JkZXJGaWVsZHM6XCIsIG9yZGVyRmllbGRzKTtcclxuICAgICAgICAgICAgaWYgKHR5cGVvZiBvcmRlckZpZWxkcyAhPT0gXCJ1bmRlZmluZWRcIil7XHJcbiAgICAgICAgICAgICAgb3JkZXJGaWVsZHMgPSBKU09OLnBhcnNlKG9yZGVyRmllbGRzKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJnZXRFbG1WYWx1ZTpvcmRlckZpZWxkczpcIiwgb3JkZXJGaWVsZHMpO1xyXG4gICAgICAgICAgICB2YXIgZmllbGRzRGF0YSA9IG9yZGVyRmllbGRzW2Fyck5hbWVdO1xyXG4gICAgICAgICAgICAgIHZhbCA9IGZpZWxkc0RhdGFbZmllbGROYW1lXTtcclxuICAgICAgICAgICAgICB9XHJcblx0XHQgICAgICB9XHJcblx0XHRcdHJldHVybiB2YWw7XHJcblx0XHR9XHJcbiAgICAgIGNvbnNvbGUubG9nKFwiZ2V0RWxtVmFsdWU6cGFyYW1EYXRhOlwiLCBwYXJhbURhdGEpO1xyXG5cdFx0XHRsZXQgdmFsID0gcGFyYW1EYXRhO1xyXG4gICAgICB2YXIgbiA9IHBhcmFtRGF0YS5zZWFyY2goXCI6OlwiKTtcclxuXHRcdFx0aWYgKG4gIT0gLTEpXHJcblx0XHRcdHtcclxuICAgICAgICB2YXIgYXJyYXkgPSBwYXJhbURhdGEuc3BsaXQoXCI6OlwiKTtcclxuICAgICAgICBjb25zb2xlLmxvZyggXCJnZXRFbG1WYWx1ZTo6YXJyYXk6XCIgLGFycmF5KTtcclxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGFycmF5Lmxlbmd0aDsgaSsrKVxyXG5cdFx0XHRcdHtcclxuICAgICAgICAgIGlmKCAoaSAhPSAwKSAmJiBhcnJheVtpXSAhPSBcIlwiIClcclxuXHRcdFx0XHRcdHtcclxuICAgICAgICAgICAgdmFyIG4gPSBhcnJheVtpXS5zZWFyY2goXCIgXCIpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyggXCJnZXRFbG1WYWx1ZTo6bjpcIiAsIG4gLCBcImFycmF5W2ldOlwiLCBhcnJheVtpXSk7XHJcblx0XHRcdFx0XHRcdGlmIChuID09IC0xKVxyXG5cdFx0XHRcdFx0XHRcdG4gPSBhcnJheVtpXS5sZW5ndGg7XHJcblx0XHRcdFx0XHRcdGlmIChuICE9IC0xKVxyXG5cdFx0XHRcdFx0XHR7XHJcbiAgICAgICAgICAgICAgdmFyIHBhcmFtID0gYXJyYXlbaV0uc2xpY2UoMCwgbik7XHJcblx0XHRcdFx0XHRcdFx0cGFyYW0gPSBwYXJhbS50cmltKCk7XHJcbiAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJnZXRFbG1WYWx1ZTo6cGFyYW06XCIrcGFyYW0pO1xyXG5cclxuICAgICAgICAgICAgICB2YXIgbiA9IHBhcmFtLmluY2x1ZGVzKFwiLlwiKTtcclxuICAgICAgICAgICAgICBjb25zb2xlLmxvZyggXCJnZXRFbG1WYWx1ZTo6bjpcIiAsIG4pO1xyXG4gICAgICAgICAgICAgIGlmIChuID09IHRydWUpe1xyXG4gICAgICAgICAgICAgICAgdmFsID0gZ2V0T1JERVJfRklFTERTRGF0YShwYXJhbSxxdWVyeURhdGEuT1JERVJfRklFTERTKTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgZWxzZVxyXG5cdFx0XHRcdFx0XHRcdHZhbCA9IHF1ZXJ5RGF0YVtwYXJhbV07XHJcblx0XHRcdFx0XHRcdFx0aWYgKHR5cGVvZiB2YWwgPT0gXCJzdHJpbmdcIilcclxuXHRcdFx0XHRcdFx0XHRcdHZhbCA9IHZhbC50cmltKCk7XHJcbiAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJnZXRFbG1WYWx1ZTo6cGFyYW06XCIgLCBwYXJhbSwgXCIgdmFsOlwiLCB2YWwgKTtcclxuXHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdFx0aWYgKHR5cGVvZiB2YWwgPT0gXCJzdHJpbmdcIilcclxuXHRcdFx0XHR2YWwgPSB2YWwuc3BsaXQoXCInXCIpLmpvaW4oXCJcIik7XHJcblx0XHRcdHJldHVybiB2YWw7XHJcblx0XHR9XHJcbiAgICBmdW5jdGlvbiBnZXRIb3N0KHNlbmRUbzphbnksIGhvc3RzQXJyOmFueSkge1xyXG4gICAgICBsZXQgaSA9IDA7XHJcbiAgICAgIHdoaWxlIChpIDwgaG9zdHNBcnIubGVuZ3RoKSB7XHJcbiAgICAgICAgLy9jb25zb2xlLmxvZyhcIi0tLS0tLS0tLS0taG9zdHNBcnJbaV0uSE9TVF9JRCA6XCIsIGhvc3RzQXJyW2ldLkhPU1RfSUQsIFwiIHNlbmRUbzpcIiwgc2VuZFRvKTtcclxuXHRcdFx0XHRpZiAoaG9zdHNBcnJbaV0uSE9TVF9JRCA9PSBzZW5kVG8pXHJcblx0XHRcdFx0XHRyZXR1cm4gaG9zdHNBcnJbaV07XHJcblx0XHRcdFx0aSsrO1xyXG5cdFx0XHR9XHJcblx0XHRcdHJldHVybiBudWxsO1xyXG5cclxuXHRcdH1cclxuICAgIGZ1bmN0aW9uIGdldEhvc3RNYXAoaG9zdERlZjphbnksIG1hcElEOmFueSwgaG9zdHNNYXBBcnI6YW55KSB7XHJcbiAgICAgIGxldCBpID0gMDtcclxuICAgICAgLy9jb25zb2xlLmxvZyhcIi0tLS0tLS0tLS0tbWFwSUQ6XCIsIG1hcElELCBcIiBob3N0RGVmLk1BUF9JRDpcIiwgaG9zdERlZi5NQVBfSUQpO1xyXG4gICAgICBpZiAoKG1hcElEICE9IG51bGwpICYmIChtYXBJRCAhPSBcIlwiKSkge1xyXG4gICAgICAgIHdoaWxlIChpIDwgaG9zdHNNYXBBcnIubGVuZ3RoKSB7XHJcbiAgICAgICAgICBpZiAoKGhvc3RzTWFwQXJyW2ldLkhPU1RfSUQgPT0gaG9zdERlZi5IT1NUX0lEKSAmJiAobWFwSUQgPT0gaG9zdHNNYXBBcnJbaV0uTUFQX0lEKSlcclxuXHRcdFx0XHRcdFx0cmV0dXJuIGhvc3RzTWFwQXJyW2ldO1xyXG5cdFx0XHRcdFx0aSsrO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0XHRyZXR1cm4gbnVsbDtcclxuXHJcblx0XHR9XHJcbiAgICAgIC8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbiAgICAgIGlmICh0aGlzLnBhcmFtQ29uZmlnLkRFQlVHX0ZMQUcpIGNvbnNvbGUubG9nKFwiKioqKioqKioqKioqKioqKmFjdGlvbnNBcnI6XCIsIGFjdGlvbnNBcnIpO1xyXG4gICAgICBsZXQgc3RhdHVzUmVjO1xyXG4gICAgICBsZXQgc2VuZFRvID0gYWN0aW9uc0Fyci5TRU5EX1RPO1xyXG4gICAgbGV0IHFyeVBhcmFtOmFueSA9IHt9O1xyXG4gICAgbGV0IGhlYWRlclBhcmFtOmFueSA9IHt9O1xyXG4gICAgbGV0IGJvZHlUb1NlbmRBcnI6YW55ID0gW107XHJcbiAgICAgIGxldCBib2R5VG9TZW5kID0gXCJcIjtcclxuICAgICAgbGV0IHBhcmFtZXRlcnNUb1NlbmQgPSBcIlwiO1xyXG4gICAgbGV0IGhvc3REZWYgPSBnZXRIb3N0KHNlbmRUbywgaG9zdHNBcnIpO1xyXG4gICAgbGV0IGhvc3RNYXBEZWYgPSBnZXRIb3N0TWFwKGhvc3REZWYsIGFjdGlvbi5NQVBfSUQsIGhvc3RzTWFwQXJyKTtcclxuICAgICAgaWYgKHRoaXMucGFyYW1Db25maWcuREVCVUdfRkxBRykgY29uc29sZS5sb2coXCJob3N0TWFwRGVmOlwiLCBob3N0TWFwRGVmKTtcclxuXHJcbiAgICAgIGlmICh0aGlzLnBhcmFtQ29uZmlnLkRFQlVHX0ZMQUcpIGNvbnNvbGUubG9nKFwiKioqKmhvc3REZWYuSEVBREVSOlwiLCBob3N0RGVmLkhFQURFUik7XHJcblxyXG4gICAgaWYgKChob3N0RGVmLkhFQURFUiAhPSBudWxsKSAmJiAoaG9zdERlZi5IRUFERVIgIT0gXCJcIikpIHtcclxuICAgICAgICBsZXQgYXJyYXkgPSBob3N0RGVmLkhFQURFUi5zcGxpdChcIlxcblwiKTtcclxuICAgICAgICBpZiAodGhpcy5wYXJhbUNvbmZpZy5ERUJVR19GTEFHKSBjb25zb2xlLmxvZyhcImFycmF5OlwiLCBhcnJheSwgXCIgYXJyYXkubGVuZ3RoOlwiLCBhcnJheS5sZW5ndGgpO1xyXG5cclxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhcnJheS5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgbGV0IGVsZW0gPSBhcnJheVtpXTtcclxuICAgICAgICBpZiAoZWxlbSAhPSBcIlwiKXtcclxuICAgICAgICAgIGxldCBhcnJheVBhcmFtID0gZWxlbS5zcGxpdChcIjpcIik7XHJcbiAgICAgICAgICBsZXQgcGFyYW0gPSBhcnJheVBhcmFtWzBdO1xyXG4gICAgICAgICAgcGFyYW0gPSBwYXJhbS50cmltKCk7XHJcbiAgICAgICAgICBsZXQgcGFyYW1EYXRhID0gYXJyYXlQYXJhbVsxXTtcclxuICAgICAgICAgIHBhcmFtRGF0YSA9IHBhcmFtRGF0YS50cmltKCk7XHJcbiAgICAgICAgICBpZiAodGhpcy5wYXJhbUNvbmZpZy5ERUJVR19GTEFHKSBjb25zb2xlLmxvZyhcInBhcmFtRGF0YTpcIiwgcGFyYW1EYXRhKTtcclxuICAgICAgICAgIHBhcmFtRGF0YSA9IGdldEVsbVZhbHVlKHBhcmFtRGF0YSwgcXVlcnlEYXRhKTtcclxuICAgICAgICAgIGlmICh0aGlzLnBhcmFtQ29uZmlnLkRFQlVHX0ZMQUcpIGNvbnNvbGUubG9nKFwiZ2V0RWxtVmFsdWU6cG9zdCBnZXRFbG1WYWx1ZSBwYXJhbTpcIiwgcGFyYW0sIFwiIHBhcmFtRGF0YTpcIiwgcGFyYW1EYXRhKTtcclxuICAgICAgICAgIGhlYWRlclBhcmFtW3BhcmFtXSA9IHBhcmFtRGF0YTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcblxyXG5cclxuICAgIGlmICgoYWN0aW9uc0Fyci5CT0RZX0RBVEEgIT0gbnVsbCkgJiYgKGFjdGlvbnNBcnIuQk9EWV9EQVRBICE9IFwiXCIpKSB7XHJcbiAgICAgICAgbGV0IGJvZHlEYXRhID0gYWN0aW9uc0Fyci5CT0RZX0RBVEE7XHJcbiAgICAgIGlmICh0aGlzLnBhcmFtQ29uZmlnLkRFQlVHX0ZMQUcpIGNvbnNvbGUubG9nKFwiOnBvc3Q6Ym9keURhdGE6XCIsIGJvZHlEYXRhKTtcclxuICAgICAgbGV0IGFycmF5ID0gYm9keURhdGEuc3BsaXQoXCJcXG5cIik7XHJcbiAgICAgIGlmICh0aGlzLnBhcmFtQ29uZmlnLkRFQlVHX0ZMQUcpIGNvbnNvbGUubG9nKFwiOnBvc3Q6YXJyYXk6XCIsIGFycmF5LCBcIiBhcnJheS5sZW5ndGg6XCIsIGFycmF5Lmxlbmd0aCk7XHJcblxyXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFycmF5Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICBsZXQgZWxlbSA9IGFycmF5W2ldO1xyXG4gICAgICAgIGlmIChlbGVtICE9IFwiXCIpe1xyXG4gICAgICAgICAgbGV0IGFycmF5UGFyYW0gPSBlbGVtLnNwbGl0KFwiPVwiKTtcclxuICAgICAgICAgIGxldCBwYXJhbSA9IGFycmF5UGFyYW1bMF07XHJcbiAgICAgICAgICBwYXJhbSA9IHBhcmFtLnRyaW0oKTtcclxuICAgICAgICAgIGxldCBwYXJhbURhdGEgPSBhcnJheVBhcmFtWzFdO1xyXG4gICAgICAgICAgcGFyYW1EYXRhID0gcGFyYW1EYXRhLnRyaW0oKTtcclxuICAgICAgICAgIGlmICh0aGlzLnBhcmFtQ29uZmlnLkRFQlVHX0ZMQUcpIGNvbnNvbGUubG9nKFwiZ2V0RWxtVmFsdWU6cGFyYW1EYXRhOlwiLCBwYXJhbURhdGEpO1xyXG4gICAgICAgICAgcGFyYW1EYXRhID0gZ2V0RWxtVmFsdWUocGFyYW1EYXRhLCBxdWVyeURhdGEpO1xyXG4gICAgICAgICAgaWYgKHRoaXMucGFyYW1Db25maWcuREVCVUdfRkxBRykgY29uc29sZS5sb2coXCJnZXRFbG1WYWx1ZTpwb3N0MiBwYXJhbTpcIiwgcGFyYW0sIFwiIHBhcmFtRGF0YTpcIiwgcGFyYW1EYXRhKTtcclxuICAgICAgICAgIHFyeVBhcmFtW3BhcmFtXSA9IHBhcmFtRGF0YTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgICAvL2lmICh0aGlzLnBhcmFtQ29uZmlnLkRFQlVHX0ZMQUcpIGNvbnNvbGUubG9nKFwicXJ5UGFyYW06aGVyZVwiKTtcclxuICAgICAgICAvL2lmICh0aGlzLnBhcmFtQ29uZmlnLkRFQlVHX0ZMQUcpIGNvbnNvbGUubG9nKFwicXJ5UGFyYW06XCIsIHFyeVBhcmFtICwgXCIgcXJ5UGFyYW0ubGVuZ3RoIDpcIiwgT2JqZWN0LmtleXMocXJ5UGFyYW0pLmxlbmd0aCk7XHJcbiAgICAgICAgYm9keVRvU2VuZEFyci5wdXNoKHFyeVBhcmFtKTtcclxuICAgICAgICAvL2lmICh0aGlzLnBhcmFtQ29uZmlnLkRFQlVHX0ZMQUcpIGNvbnNvbGUubG9nKFwiLS0taG9zdERlZjpcIiwgaG9zdERlZik7Ly9mdWFkXHJcblxyXG4gICAgICBpZiAoYm9keVRvU2VuZEFyci5sZW5ndGggIT0gMCkge1xyXG4gICAgICAgICAgLyppZiAoIChob3N0TWFwRGVmICE9IG51bGwpICYmICAoaG9zdE1hcERlZi5YU0xUX1NFTkQgIT0gbnVsbCkgJiYgKGhvc3RNYXBEZWYuWFNMVF9TRU5EICE9IFwiXCIpIClcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgIGJvZHlUb1NlbmQgPSB4c2x0bWFwLm1hcERhdGEoYm9keVRvU2VuZEFyciwgaG9zdE1hcERlZi5YU0xUX1NFTkQpO1xyXG5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgeyovXHJcbiAgICAgICAgICAgIGJvZHlUb1NlbmQgPSBKU09OLnN0cmluZ2lmeShib2R5VG9TZW5kQXJyKVxyXG4gICAgICAgICAgLy99XHJcbiAgICAgICAgfVxyXG4gICAgICAvKlxyXG4gICAgICBsZXQgaGV4b3V0ID0gaGV4ZHVtcChib2R5VG9TZW5kLCAxNikgO1xyXG4gICAgICBpZiAodGhpcy5wYXJhbUNvbmZpZy5ERUJVR19GTEFHKSBjb25zb2xlLmxvZyhcImhleG91dDpcIixoZXhvdXQpO1xyXG4gICAgICAqL1xyXG4gICAgICB9XHJcblxyXG4gICAgaWYgKChhY3Rpb25zQXJyLlBBUkFNRVRFUl9EQVRBICE9IG51bGwpICYmIChhY3Rpb25zQXJyLlBBUkFNRVRFUl9EQVRBICE9IFwiXCIpKSB7XHJcbiAgICAgICAgbGV0IHBhcmFtZXRlckRhdGEgPSBhY3Rpb25zQXJyLlBBUkFNRVRFUl9EQVRBO1xyXG4gICAgICAgIGlmICh0aGlzLnBhcmFtQ29uZmlnLkRFQlVHX0ZMQUcpIGNvbnNvbGUubG9nKFwicGFyYW1ldGVyRGF0YTpcIiwgcGFyYW1ldGVyRGF0YSk7XHJcbiAgICAgIGlmICh0aGlzLnBhcmFtQ29uZmlnLkRFQlVHX0ZMQUcpIGNvbnNvbGUubG9nKFwicGFyYW1ldGVyRGF0YS5sZW5ndGg6XCIsIHBhcmFtZXRlckRhdGEubGVuZ3RoKTtcclxuXHJcblxyXG4gICAgICBsZXQgYXJyYXkgPSBwYXJhbWV0ZXJEYXRhLnNwbGl0KFwiXFxuXCIpO1xyXG4gICAgICAgIGlmICh0aGlzLnBhcmFtQ29uZmlnLkRFQlVHX0ZMQUcpIGNvbnNvbGUubG9nKFwiYXJyYXk6XCIsIGFycmF5LCBcIiBhcnJheS5sZW5ndGg6XCIsIGFycmF5Lmxlbmd0aCk7XHJcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYXJyYXkubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgIGxldCBlbGVtID0gYXJyYXlbaV07XHJcbiAgICAgICAgaWYgKGVsZW0gIT0gXCJcIil7XHJcbiAgICAgICAgICBsZXQgYXJyYXlQYXJhbSA9IGVsZW0uc3BsaXQoXCI9XCIpO1xyXG4gICAgICAgICAgbGV0IHBhcmFtID0gYXJyYXlQYXJhbVswXTtcclxuICAgICAgICAgIHBhcmFtID0gcGFyYW0udHJpbSgpO1xyXG4gICAgICAgICAgbGV0IHBhcmFtRGF0YSA9IGFycmF5UGFyYW1bMV07XHJcbiAgICAgICAgICBwYXJhbURhdGEgPSBwYXJhbURhdGEudHJpbSgpO1xyXG4gICAgICAgICAgaWYgKHRoaXMucGFyYW1Db25maWcuREVCVUdfRkxBRykgY29uc29sZS5sb2coXCJnZXRFbG1WYWx1ZTo6cGFyYW1EYXRhOlwiLCBwYXJhbURhdGEpO1xyXG4gICAgICAgICAgcGFyYW1EYXRhID0gZ2V0RWxtVmFsdWUocGFyYW1EYXRhLCBxdWVyeURhdGEpO1xyXG4gICAgICAgICAgaWYgKHRoaXMucGFyYW1Db25maWcuREVCVUdfRkxBRykgY29uc29sZS5sb2coXCJnZXRFbG1WYWx1ZTogcG9zdDM6cGFyYW06XCIsIHBhcmFtLCBcIiBwYXJhbURhdGE6XCIsIHBhcmFtRGF0YSk7XHJcbiAgICAgICAgICBpZiAocGFyYW1ldGVyc1RvU2VuZCA9PSBcIlwiKVxyXG4gICAgICAgICAgICBwYXJhbWV0ZXJzVG9TZW5kID0gXCI/XCIgKyBwYXJhbSArIFwiPVwiICsgcGFyYW1EYXRhO1xyXG4gICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICBwYXJhbWV0ZXJzVG9TZW5kID0gcGFyYW1ldGVyc1RvU2VuZCArIFwiJlwiICsgcGFyYW0gKyBcIj1cIiArIHBhcmFtRGF0YTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgaWYgKHRoaXMucGFyYW1Db25maWcuREVCVUdfRkxBRykgY29uc29sZS5sb2coXCJnZXRFbG1WYWx1ZTogcGFyYW1ldGVyc1RvU2VuZDpcIiwgcGFyYW1ldGVyc1RvU2VuZCk7XHJcbiAgICB9XHJcbiAgICBsZXQgcGF0aEV4dHJhID1cIlwiO1xyXG4gICAgaWYgKCAoYWN0aW9uc0Fyci5FWFRSQV9EQVRBICE9IG51bGwpICYmIChhY3Rpb25zQXJyLkVYVFJBX0RBVEEgIT0gXCJcIikgKVxyXG4gICAgICB7XHJcbiAgICAgICAgbGV0IHBhcmFtZXRlckV4dHJhID0gYWN0aW9uc0Fyci5FWFRSQV9EQVRBO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwicGFyYW1ldGVyRXh0cmE6XCIsIHBhcmFtZXRlckV4dHJhKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhcInBhcmFtZXRlckV4dHJhLmxlbmd0aDpcIixwYXJhbWV0ZXJFeHRyYS5sZW5ndGgpO1xyXG4gICAgICAgIFxyXG5cclxuICAgICAgICBsZXQgYXJyYXkgPSBwYXJhbWV0ZXJFeHRyYS5zcGxpdChcIlxcblwiKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhcImFycmF5OlwiLCBhcnJheSwgXCIgYXJyYXkubGVuZ3RoOlwiLCBhcnJheS5sZW5ndGgpO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYXJyYXkubGVuZ3RoOyBpKyspXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgbGV0IGVsZW0gPSBhcnJheVtpXTtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKFwiZWxlbTpcIiwgZWxlbSk7XHJcbiAgICAgICAgICBsZXQgYXJyYXlQYXJhbSA9IGVsZW0uc3BsaXQoXCI9XCIpO1xyXG4gICAgICAgICAgbGV0IHBhcmFtID0gYXJyYXlQYXJhbVswXTtcclxuICAgICAgICAgIHBhcmFtID0gcGFyYW0udHJpbSgpO1xyXG4gICAgICAgICAgbGV0IHBhcmFtRGF0YSA9IGFycmF5UGFyYW1bMV07XHJcbiAgICAgICAgICBpZiAocGFyYW0gPT0gXCJEQkxPQ1wiKXtcclxuICAgICAgICAgICAgcGF0aEV4dHJhID0gXCImXCIgKyBlbGVtO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcInBhdGhFeHRyYTpcIiwgcGF0aEV4dHJhKVxyXG5cclxuICAgICAgICAgICAgLy9yZXEuX3BhcnNlZFVybC5wYXRoID0gcmVxLl9wYXJzZWRVcmwucGF0aCArIFwiJlwiICsgZWxlbTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgaWYgKHRoaXMucGFyYW1Db25maWcuREVCVUdfRkxBRykgY29uc29sZS5sb2coXCJib2R5VG9TZW5kOlwiLCBib2R5VG9TZW5kKTtcclxuICAgICAgaWYgKHRoaXMucGFyYW1Db25maWcuREVCVUdfRkxBRykgY29uc29sZS5sb2coXCJwYXJhbWV0ZXJzVG9TZW5kOlwiLCBwYXJhbWV0ZXJzVG9TZW5kKTtcclxuXHJcbiAgICBzdGF0dXNSZWMgPSB0aGlzLnBlcmZvcm1IdHRwUG9zdChvYmplY3QsIGJvZHlUb1NlbmQsIHBhcmFtZXRlcnNUb1NlbmQsIHNlbmRUbywgcXVlcnlEYXRhLCBydWxlLCBhY3Rpb24sIFRyaWdnZXIsIGhvc3REZWYsIGhvc3RNYXBEZWYsIGhlYWRlclBhcmFtLCBwYXRoRXh0cmEpO1xyXG4gICAgICBpZiAodGhpcy5wYXJhbUNvbmZpZy5ERUJVR19GTEFHKSBjb25zb2xlLmxvZyhcInBvc3QgcGVyZm9ybUh0dHBQb3N0OiBzdGF0dXM6XCIsIHN0YXR1c1JlYyk7XHJcbiAgICAgIHJldHVybiBzdGF0dXNSZWM7XHJcblxyXG5cclxuXHJcblxyXG5cclxuICB9XHJcbiAgcHVibGljIHBlcmZvcm1BY3Rpb24ob2JqZWN0OmFueSwgcXJ5OmFueSwgcHRyOmFueSwgcXVlcnlEYXRhOmFueSwgcnVsZTphbnksIHJ1bGVzRGVmOmFueSwgVHJpZ2dlcjphbnksIGhvc3RzQXJyOmFueSwgaG9zdHNNYXBBcnI6YW55LCBSVUxFX0lEOmFueSkge1xyXG4gICAgaWYgKHRoaXMucGFyYW1Db25maWcuREVCVUdfRkxBRykgY29uc29sZS5sb2coXCItLS1wZXJmb3JtQWN0aW9uOnJ1bGVzRGVmOlwiLCBydWxlc0RlZik7XHJcbiAgICAgIGxldCBzdGF0dXMgPSAwO1xyXG4gICAgbGV0IHN0YXR1c1JlYyA9IHtcclxuICAgICAgc3RhdHVzOiAwLFxyXG4gICAgICBtc2c6IFwiXCJcclxuICAgICAgfTtcclxuXHJcbiAgICAgIGxldCBhY3Rpb25QdHIgPSBydWxlc0RlZi5hY3Rpb25QdHJzQXJyW3FyeV07XHJcbiAgICBpZiAodHlwZW9mIGFjdGlvblB0ciAhPT0gXCJ1bmRlZmluZWRcIikge1xyXG5cclxuICAgICAgICBpZiAodGhpcy5wYXJhbUNvbmZpZy5ERUJVR19GTEFHKSBjb25zb2xlLmxvZyhcInB0cjpcIiwgcHRyKTtcclxuICAgICAgICBpZiAodGhpcy5wYXJhbUNvbmZpZy5ERUJVR19GTEFHKSBjb25zb2xlLmxvZyhcImFjdGlvblB0cjpcIiwgYWN0aW9uUHRyKTtcclxuICAgICAgbGV0IGkgPSBwdHI7XHJcblxyXG4gICAgICAgIGxldCBwdHIxID0gYWN0aW9uUHRyW2ldO1xyXG4gICAgICBsZXQgcHRyMiA9IGFjdGlvblB0clthY3Rpb25QdHIubGVuZ3RoIC0xXTtcclxuICAgICAgLy8gaWYgKHR5cGVvZiBhY3Rpb25QdHJbaSArIDFdICE9PSBcInVuZGVmaW5lZFwiKVxyXG4gICAgICAvLyAgIHB0cjIgPSBhY3Rpb25QdHJbaSArIDFdO1xyXG4gICAgICAvLyBlbHNlXHJcbiAgICAgIC8vICAgcHRyMiA9IHJ1bGVzRGVmLmFjdGlvbnNBcnIubGVuZ3RoXHJcblxyXG4gICAgICBpZiAodGhpcy5wYXJhbUNvbmZpZy5ERUJVR19GTEFHKSBjb25zb2xlLmxvZyhcInB0cjE6XCIsIHB0cjEsIFwiIHB0cjI6XCIsIHB0cjIpO1xyXG4gICAgICAgIGxldCBqID0gcHRyMTtcclxuICAgICAgLy9sZXQgcnVsZUlEID0gcnVsZXNEZWYuYWN0aW9uc0FycltqXS5SVUxFX0lEO1xyXG4gICAgICBsZXQgcnVsZUlEID0gUlVMRV9JRDtcclxuICAgICAgd2hpbGUgKChqIDw9IHB0cjIpICYmIChzdGF0dXMgPT0gMCkpIHtcclxuICAgICAgICBpZiAocnVsZUlEID09IHJ1bGVzRGVmLmFjdGlvbnNBcnJbal0uUlVMRV9JRClcclxuICAgICAgICAgIHtcclxuICAgICAgICAgIC8vaWYgKHRoaXMucGFyYW1Db25maWcuREVCVUdfRkxBRykgY29uc29sZS5sb2coXCJydWxlc0RlZi5hY3Rpb25zQXJyOlwiLHJ1bGVzRGVmLmFjdGlvbnNBcnJbal0pO1xyXG4gICAgICAgICAgaWYgKChydWxlc0RlZi5hY3Rpb25zQXJyW2pdLkFDVElPTl9DT0RFID09IFwiU0VORFwiKSB8fCAocnVsZXNEZWYuYWN0aW9uc0FycltqXS5BQ1RJT05fQ09ERSA9PSBcIlNFTkRfV0FJVFwiKSkge1xyXG4gICAgICAgICAgICBzdGF0dXNSZWMgPSB0aGlzLnNlbmRUb1NlcnZlcihvYmplY3QsIHJ1bGVzRGVmLmFjdGlvbnNBcnJbal0sIHF1ZXJ5RGF0YSwgcnVsZSwgcnVsZXNEZWYuYWN0aW9uc0FycltqXSwgVHJpZ2dlciwgaG9zdHNBcnIsIGhvc3RzTWFwQXJyKTtcclxuICAgICAgICAgICAgc3RhdHVzID0gc3RhdHVzUmVjLnN0YXR1cztcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGVsc2UgaWYgKCBydWxlc0RlZi5hY3Rpb25zQXJyW2pdLkFDVElPTl9DT0RFID09IFwiRVJST1JcIiApIHtcclxuICAgICAgICAgICAgbGV0IHN0YXR1c1JlYyA9e1xyXG4gICAgICAgICAgICAgIHN0YXR1cyA6IC0xLFxyXG4gICAgICAgICAgICAgIG1zZyA6IHJ1bGVzRGVmLmFjdGlvbnNBcnJbal0uQk9EWV9EQVRBXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIHJldHVybiBzdGF0dXNSZWM7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgICAgaisrO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gc3RhdHVzUmVjO1xyXG5cclxuICB9XHJcblxyXG4gIHB1YmxpYyBjaGVja1J1bGVzQnlUcmlnZ2VyKG9iamVjdDphbnksIHJ1bGVzRGVmOmFueSwgcXVlcnlEYXRhOmFueSwgVHJpZ2dlcjphbnksIHJvdXRpbmVfbmFtZTphbnksIGhvc3RzQXJyOmFueSwgaG9zdHNNYXBBcnI6YW55KSB7XHJcbiAgICBpZiAodGhpcy5wYXJhbUNvbmZpZy5ERUJVR19GTEFHKSBjb25zb2xlLmxvZyhcImNoZWNrUnVsZXNCeVRyaWdnZXI6cnVsZXNEZWY6XCIsIHJ1bGVzRGVmLCBcIiBxdWVyeURhdGE6XCIsIHF1ZXJ5RGF0YSwgXCJUcmlnZ2VyOlwiLCBUcmlnZ2VyKTtcclxuICAgIGZ1bmN0aW9uIGdldEZpZWxkRGF0YShydWxlOmFueSwgcXVlcnlEYXRhOmFueSlcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBsZXQgZmllbGREYXRhID0gXCJcIjtcclxuICAgICAgICAgICAgICAgICAgICAgIGxldCBhcnJheSA9IHJ1bGUuRklFTEQuc3BsaXQgKFwiLlwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiYXJyYXk6XCIsYXJyYXkpXHJcbiAgICAgICAgICAgICAgICAgICAgICBpZiAoYXJyYXkubGVuZ3RoID4gMSl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBvcmRlckZpZWxkcyA9IHF1ZXJ5RGF0YVtcIk9SREVSX0ZJRUxEU1wiXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhcIm9yZGVyRmllbGRzOlwiLG9yZGVyRmllbGRzKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodHlwZW9mIG9yZGVyRmllbGRzICE9PSBcInVuZGVmaW5lZFwiKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAob3JkZXJGaWVsZHMgIT0gXCJcIikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGZpZWxkc0RhdGEgPSBKU09OLnBhcnNlKG9yZGVyRmllbGRzKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2coXCJmaWVsZHNEYXRhOlwiLGZpZWxkc0RhdGEpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQga2V5cyA9IE9iamVjdC5rZXlzKGZpZWxkc0RhdGEpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJrZXlzOlwiLGtleXMpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBqID0wOyBqPCBrZXlzLmxlbmd0aDtqKyspe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImFkZE9yZGVyRmllbGRzIGtleTpcIiwga2V5c1tqXSApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoa2V5c1tqXSA9PSBhcnJheVswXSl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IG9iakRhdGEgPSBmaWVsZHNEYXRhW2tleXNbal1dO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2coXCJvYmpEYXRhOlwiLCBvYmpEYXRhICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiAob2JqRGF0YS5sZW5ndGgpID09IFwidW5kZWZpbmVkXCIpICAvLyBpdCBpcyBhIGZvcm0gKG9iamVjdClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmllbGREYXRhID0gb2JqRGF0YVthcnJheVsxXV07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7IC8vIGl0IGlzIGEgZ3JpZCAoYXJyYXkpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodHlwZW9mIChvYmpEYXRhWzBdKSAhPSBcInVuZGVmaW5lZFwiKSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmllbGREYXRhID0gb2JqRGF0YVswXVthcnJheVsxXV07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmaWVsZERhdGEgPSBxdWVyeURhdGFbcnVsZS5GSUVMRF0gO1xyXG4gICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZpZWxkRGF0YTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgIGZ1bmN0aW9uIGNoZWNrUnVsZShydWxlOmFueSwgcXVlcnlEYXRhOmFueSl7XHJcbiAgICAgIGxldCBydWxlTWF0Y2ggPSBmYWxzZTtcclxuICAgICAgLy9pZiAob2JqZWN0LnBhcmFtQ29uZmlnLkRFQlVHX0ZMQUcpIFxyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiY2hlY2tSdWxlIHJ1bGU6XCIsIHJ1bGUsIFwiIHF1ZXJ5RGF0YTpcIiwgcXVlcnlEYXRhKTtcclxuICAgICAgLy9sZXQgZmllbGREYXRhID0gcXVlcnlEYXRhW3J1bGUuRklFTERdO1xyXG4gICAgICBsZXQgZmllbGREYXRhID0gZ2V0RmllbGREYXRhKHJ1bGUsIHF1ZXJ5RGF0YSk7XHJcblxyXG4gICAgICBzd2l0Y2ggKHJ1bGUuT1BFUkFUSU9OKSB7XHJcbiAgICAgICAgY2FzZSBcIj1cIjpcclxuICAgICAgICAgIGlmIChmaWVsZERhdGEgPT0gcnVsZS5GSUVMRF9WQUxVRSkge1xyXG4gICAgICAgICAgcnVsZU1hdGNoID0gdHJ1ZTtcclxuICAgICAgICAgIH1cclxuICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIFwiPFwiOlxyXG4gICAgICAgICAgaWYgKGZpZWxkRGF0YSA8IHJ1bGUuRklFTERfVkFMVUUpIHtcclxuICAgICAgICAgIHJ1bGVNYXRjaCA9IHRydWU7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSBcIjw9XCI6XHJcbiAgICAgICAgICBpZiAoZmllbGREYXRhIDw9IHJ1bGUuRklFTERfVkFMVUUpIHtcclxuICAgICAgICAgIHJ1bGVNYXRjaCA9IHRydWU7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSBcIj5cIjpcclxuICAgICAgICAgIGlmIChmaWVsZERhdGEgPiBydWxlLkZJRUxEX1ZBTFVFKSB7XHJcbiAgICAgICAgICBydWxlTWF0Y2ggPSB0cnVlO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgXCI+PVwiOlxyXG4gICAgICAgICAgaWYgKGZpZWxkRGF0YSA+PSBydWxlLkZJRUxEX1ZBTFVFKSB7XHJcbiAgICAgICAgICBydWxlTWF0Y2ggPSB0cnVlO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgXCI8PlwiOlxyXG4gICAgICAgICAgaWYgKGZpZWxkRGF0YSAhPSBydWxlLkZJRUxEX1ZBTFVFKSB7XHJcbiAgICAgICAgICBydWxlTWF0Y2ggPSB0cnVlO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgXCJJTlNUUlwiOlxyXG4gICAgICAgICAgaWYgKHJ1bGUuRklFTERfVkFMVUUuc2VhcmNoKGZpZWxkRGF0YSkgIT0gLTEpIHtcclxuICAgICAgICAgIHJ1bGVNYXRjaCA9IHRydWU7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICBydWxlTWF0Y2ggPSBmYWxzZTtcclxuICAgICAgfVxyXG4gICAgICBjb25zb2xlLmxvZyhcInRlc3QzOnJ1bGVNYXRjaDpcIiwgcnVsZU1hdGNoLCBcIiBmaWVsZERhdGE6XCIsIGZpZWxkRGF0YSwgXCIgT1BFUkFUSU9OOlwiLCBydWxlLk9QRVJBVElPTiwgXCIgRklFTERfVkFMVUU6XCIsIHJ1bGUuRklFTERfVkFMVUUpO1xyXG4gICAgICByZXR1cm4gcnVsZU1hdGNoO1xyXG5cclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIGNoZWNrU2FtZVRlbXBsYXRlKHJ1bGVQdHJzQXJyLCBxdWVyeURhdGEpIHtcclxuICAgICAgLy9jb25zb2xlLmxvZyhcImNoZWNraW5nIHRlbXBsYXRlIHJ1bGVQdHJzQXJyOlwiLHJ1bGVQdHJzQXJyLCBcIiBxdWVyeURhdGE6XCIsIHF1ZXJ5RGF0YSk7XHJcbiAgICAgIHZhciBzYW1lVGVtcCA9IGZhbHNlO1xyXG4gICAgICBjb25zb2xlLmxvZyhcInJ1bGVQdHJzQXJyLlRFTVBMQVRFX05BTUU6XCIsIHJ1bGVQdHJzQXJyLlRFTVBMQVRFX05BTUUsIFwicXVlcnlEYXRhLlRFTVBMQVRFX05BTUU6XCIsIHF1ZXJ5RGF0YS5URU1QTEFURV9OQU1FLFwiIHJ1bGVQdHJzQXJyLlNFUVVFTkNFX05BTUU6XCIsIHJ1bGVQdHJzQXJyLlNFUVVFTkNFX05BTUUsXCIgcXVlcnlEYXRhLlNFUVVFTkNFX05BTUU6XCIsIHF1ZXJ5RGF0YS5TRVFVRU5DRV9OQU1FLCBxdWVyeURhdGEpXHJcblxyXG4gICAgICBpZiAoIChydWxlUHRyc0Fyci5URU1QTEFURV9OQU1FICE9IFwiXCIpICl7XHJcbiAgICAgICAgaWYgKHJ1bGVQdHJzQXJyLlRFTVBMQVRFX05BTUUgPT0gcXVlcnlEYXRhLlRFTVBMQVRFX05BTUUpIHtcclxuXHJcbiAgICAgICAgICBpZiAoKHJ1bGVQdHJzQXJyLlNFUVVFTkNFX05BTUUgIT0gXCJcIikpICB7XHJcbiAgICAgICAgICAgIGlmIChydWxlUHRyc0Fyci5TRVFVRU5DRV9OQU1FID09IHF1ZXJ5RGF0YS5TRVFVRU5DRV9OQU1FKSB7XHJcbiAgICAgICAgICAgICAgc2FtZVRlbXAgPSB0cnVlO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHNhbWVUZW1wID0gdHJ1ZTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIGVsc2Uge1xyXG4gICAgICAgIHNhbWVUZW1wID0gdHJ1ZTtcclxuICAgICAgXHJcbiAgICAgIH1cclxuICAgICAgLy9jb25zb2xlLmxvZyhcInNhbWVUZW1wOlwiLCBzYW1lVGVtcCk7XHJcbiAgICAgIHJldHVybiBzYW1lVGVtcDtcclxuICAgIH1cclxuICAgIFxyXG5cclxuICAgIGxldCBzdGF0dXMgPSAwO1xyXG4gICAgbGV0IHN0YXR1c1JlYyA9IHtcclxuICAgICAgc3RhdHVzOiAwLFxyXG4gICAgICBtc2c6IFwiXCJcclxuICAgIH07XHJcblxyXG4gICAgbGV0IHFyeSA9IHF1ZXJ5RGF0YS5fUVVFUlk7XHJcbiAgICBpZiAodGhpcy5wYXJhbUNvbmZpZy5ERUJVR19GTEFHKSBjb25zb2xlLmxvZyhcIl9RVUVSWTpcIiwgcXVlcnlEYXRhLl9RVUVSWSwgXCIgcnVsZXNEZWYucnVsZVB0cnNBcnI6XCIsIHJ1bGVzRGVmLnJ1bGVQdHJzQXJyKTtcclxuICAgIGlmICh0aGlzLnBhcmFtQ29uZmlnLkRFQlVHX0ZMQUcpIGNvbnNvbGUubG9nKFwiY2hlY2tpbmcgcnVsZXNEZWYucnVsZVB0cnNBcnI6XCIsIHJ1bGVzRGVmLnJ1bGVQdHJzQXJyKTtcclxuICAgIGxldCBydWxlUHRyID0gcnVsZXNEZWYucnVsZVB0cnNBcnJbcXJ5XTtcclxuICAgIGlmICh0aGlzLnBhcmFtQ29uZmlnLkRFQlVHX0ZMQUcpIGNvbnNvbGUubG9nKFwicnVsZVB0cjpcIiwgcnVsZVB0cik7XHJcbiAgICBpZiAodGhpcy5wYXJhbUNvbmZpZy5ERUJVR19GTEFHKSBjb25zb2xlLmxvZyhcInFyeTpcIiwgcXJ5LCBcIiBydWxlc0RlZi5ydWxlUHRyc0FycjpcIiwgcnVsZXNEZWYucnVsZVB0cnNBcnIsIFwiIHJ1bGVQdHI6XCIsIHJ1bGVQdHIpO1xyXG5cclxuICAgIGlmICh0eXBlb2YgcnVsZVB0ciAhPT0gXCJ1bmRlZmluZWRcIikge1xyXG4gICAgICAvL2xldCBhY3Rpb25QdHIgPSBydWxlc0RlZi5ydWxlUHRyc0FycltxcnldO1xyXG4gICAgICAvL2lmICh0eXBlb2YgYWN0aW9uUHRyICE9PSBcInVuZGVmaW5lZFwiKVxyXG4gICAgICB7XHJcbiAgICAgICAgbGV0IHJlc3VsdCA9IGZhbHNlO1xyXG4gICAgICAgIGxldCBpID0gMDtcclxuXHJcbiAgICAgICAgLy93aGlsZSAoIChpPHJ1bGVQdHIubGVuZ3RoKSAmJiAoc3RhdHVzID09IDApIClcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgICB2YXIgcHRyMSA9IHJ1bGVQdHJbaV07XHJcbiAgICAgICAgICAgICAgdmFyIHB0cjIgPSBydWxlUHRyW3J1bGVQdHIubGVuZ3RoIC0xXTtcclxuICAgICAgICAgICAgICAvLyBpZiAodHlwZW9mIHJ1bGVQdHJbaSsxXSAhPT0gXCJ1bmRlZmluZWRcIilcclxuICAgICAgICAgICAgICAvLyAgICAgdmFyIHB0cjIgPSBydWxlUHRyW2krMV07XHJcbiAgICAgICAgICAgICAgLy8gZWxzZVxyXG4gICAgICAgICAgICAgIC8vICAgICAvL3ZhciBwdHIyID0gcnVsZXNEZWYucnVsZXNBcnIubGVuZ3RoXHJcbiAgICAgICAgICAgIC8vICAgICB2YXIgcHRyMiA9IHB0cjFcclxuXHJcbiAgICAgICAgICAgIGlmICh0aGlzLnBhcmFtQ29uZmlnLkRFQlVHX0ZMQUcpIGNvbnNvbGUubG9nKFwiSXRlbTpwdHIxOlwiLHB0cjEsIFwiIHB0cjI6XCIsIHB0cjIpO1xyXG4gICAgICAgICAgICAgIHZhciBqID0gcHRyMTtcclxuICAgICAgICAgICAgICB2YXIgcnVsZU1hdGNoID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgdmFyIEZPVU5EX1JVTEVfSUQ9XCJcIjtcclxuICAgICAgICAgICAgICB3aGlsZSAoIGogPD0gcHRyMilcclxuICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5wYXJhbUNvbmZpZy5ERUJVR19GTEFHKSBjb25zb2xlLmxvZyhcInJ1bGVzRGVmLnJ1bGVzQXJyOlwiLCBydWxlc0RlZi5ydWxlc0FycltqXS5SVUxFX0lELCBcIiBpdGVtOlwiLCBydWxlc0RlZi5ydWxlc0FycltqXS5JVEVNKTtcclxuICAgICAgICAgICAgICAgICAgbGV0IHNhbWVUZW1wbGF0ZSA9IGNoZWNrU2FtZVRlbXBsYXRlKHJ1bGVzRGVmLnJ1bGVzQXJyW2pdLHF1ZXJ5RGF0YSApO1xyXG4gICAgICAgICAgICAgICAgICBpZiAodGhpcy5wYXJhbUNvbmZpZy5ERUJVR19GTEFHKSBjb25zb2xlLmxvZyhcInJ1bGVzRGVmLnJ1bGVzQXJyOlwiLCBydWxlc0RlZi5ydWxlc0FycltqXS5SVUxFX0lELCBcIiBpdGVtOlwiLCBydWxlc0RlZi5ydWxlc0FycltqXS5JVEVNLCBcIiBzYW1lVGVtcGxhdGU6XCIsIHNhbWVUZW1wbGF0ZSk7ICBcclxuICAgICAgICAgICAgICAgICAgaWYgKHNhbWVUZW1wbGF0ZSl7XHJcbiAgICAgICAgICAgICAgICAgICBydWxlTWF0Y2ggPSBjaGVja1J1bGUocnVsZXNEZWYucnVsZXNBcnJbal0sIHF1ZXJ5RGF0YSk7XHJcbiAgICAgICAgICAgICAgICAgIGlmIChydWxlTWF0Y2ggPT0gZmFsc2UpXHJcbiAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgICAgICAgICAgICBGT1VORF9SVUxFX0lEID0gcnVsZXNEZWYucnVsZXNBcnJbal0uUlVMRV9JRDtcclxuICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgaisrO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImNoZWNrUnVsZXNCeVRyaWdnZXI6Q29uZGl0aW9ucyBydWxlTWF0Y2g6XCIsIHJ1bGVNYXRjaCwgXCIgZm9yIHJ1bGU6XCIsIEZPVU5EX1JVTEVfSUQpO1xyXG4gICAgICAgICAgICAgIGlmIChydWxlTWF0Y2ggPT0gdHJ1ZSlcclxuICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgIC8vc3RhdHVzUmVjID0gcGVyZm9ybUFjdGlvbihkYixyZXEsIHFyeSwgaSwgcXVlcnlEYXRhLCBydWxlc0RlZi5ydWxlc0FycltwdHIxXSxydWxlc0RlZiwgVHJpZ2dlciApO1xyXG4gICAgICAgICAgICAgICAgICBzdGF0dXNSZWMgPSB0aGlzLnBlcmZvcm1BY3Rpb24oICBvYmplY3QsIHFyeSwgaSwgcXVlcnlEYXRhLCBydWxlc0RlZi5ydWxlc0FycltwdHIxXSxydWxlc0RlZiwgVHJpZ2dlciAsaG9zdHNBcnIsIGhvc3RzTWFwQXJyLCBGT1VORF9SVUxFX0lEKTtcclxuICAgICAgICAgICAgICAgICAgc3RhdHVzID0gc3RhdHVzUmVjLnN0YXR1cztcclxuXHJcbiAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAvL2lmIChydWxlTWF0Y2ggPT0gZmFsc2UpXHJcbiAgICAgICAgICAgICAgLy8gIGJyZWFrO1xyXG4gICAgICAgICAgICAgIGkrKztcclxuICAgICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuXHJcbiAgICB9XHJcbiAgICByZXR1cm4gc3RhdHVzUmVjO1xyXG4gIH1cclxuICBwdWJsaWMgY2hlY2tIYXNSdWxlcyAocnVsZXNEZWY6YW55LCBxcnk6YW55ICxUcmlnZ2VyOmFueSlcclxuICB7XHJcbiAgICBsZXQgZm91bmQgPSBmYWxzZTtcclxuICAgIC8vY29uc29sZS5sb2coXCJjaGVja0hhc1J1bGVzOnFyeTpcIixxcnksICBUcmlnZ2VyKVxyXG4gICAgICB2YXIgYWN0aW9uUHRyID0gcnVsZXNEZWYuYWN0aW9uUHRyc0FycltxcnldO1xyXG4gICAgICBpZiAodHlwZW9mIGFjdGlvblB0ciAhPT0gXCJ1bmRlZmluZWRcIilcclxuICAgICAge1xyXG4gICAgICAgIC8vY29uc29sZS5sb2coXCJjaGVja0hhc1J1bGVzOnFyeTpcIixUcmlnZ2VyLCBxcnksICBhY3Rpb25QdHIpXHJcbiAgICAgICAgZm91bmQgPSB0cnVlO1xyXG4gICAgICB9XHJcbiAgICAgcmV0dXJuIGZvdW5kO1xyXG5cclxuXHJcbiAgfVxyXG5cclxuICBwdWJsaWMgY2hlY2tSdWxlcyhvYmplY3Q6YW55LCBydWxlc0RlZjphbnksIGFjdHVhbFJlc3VsdDphbnksIFRyaWdnZXI6YW55KSB7XHJcbiAgICB2YXIgc3RhdHVzUmVjOmFueSA9IHt9O1xyXG4gICAgaWYodGhpcy5wYXJhbUNvbmZpZy5pc0NoZWNrUnVsZXMgPT0gZmFsc2UpXHJcbiAgICAgIHJldHVybiBzdGF0dXNSZWM7XHJcblxyXG4gICAgLy9yZXR1cm47XHJcblxyXG5cclxuICAgIGlmICh0aGlzLnBhcmFtQ29uZmlnLkRFQlVHX0ZMQUcpIGNvbnNvbGUubG9nKFwiY2hlY2tSdWxlczpcIiwgVHJpZ2dlciwgXCIgcm91dGluZV9uYW1lOlwiLCB0aGlzLnJvdXRpbmVfbmFtZSwgXCIgYWN0dWFsUmVzdWx0OlwiLCBhY3R1YWxSZXN1bHQpXHJcblxyXG4gICAgaWYgKFRyaWdnZXIgPT0gXCJQT1NUX1FVRVJZXCIpIHtcclxuICAgICAgaWYgKHR5cGVvZiBhY3R1YWxSZXN1bHQuZGF0YVswXSAhPT0gXCJ1bmRlZmluZWRcIikge1xyXG4gICAgICAgIGxldCB0cmFuc0RhdGEgPSBhY3R1YWxSZXN1bHQuZGF0YVswXS5kYXRhO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdHJhbnNEYXRhLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICBpZiAodGhpcy5wYXJhbUNvbmZpZy5ERUJVR19GTEFHKSBjb25zb2xlLmxvZyhcImNoZWNrUnVsZXM6dHJhbnNEYXRhW2ldOlwiLCB0cmFuc0RhdGFbaV0sIGkpO1xyXG4gICAgICAgICAgaWYgKHRoaXMucGFyYW1Db25maWcuREVCVUdfRkxBRykgY29uc29sZS5sb2coXCJjaGVja1J1bGVzOmFjdHVhbFJlc3VsdC5kYXRhWzBdLnF1ZXJ5OlwiLCBhY3R1YWxSZXN1bHQuZGF0YVswXS5xdWVyeSlcclxuICAgICAgICAgIGlmICh0aGlzLnBhcmFtQ29uZmlnLkRFQlVHX0ZMQUcpIGNvbnNvbGUubG9nKFwiY2hlY2tSdWxlczphY3R1YWxSZXN1bHQuZGF0YVswXSBIRiBwbGVhc2VcIiwgYWN0dWFsUmVzdWx0LmRhdGFbMF0uZGF0YSk7XHJcbiAgICAgICAgICBsZXQgcXVlcnlEYXRhID0gdHJhbnNEYXRhW2ldO1xyXG4gICAgICAgICAgXHJcbiAgICAgICAgICBxdWVyeURhdGFbXCJfUVVFUllcIl0gPSBhY3R1YWxSZXN1bHQuZGF0YVswXS5xdWVyeTtcclxuICAgICAgICAgIC8vICAgICAgIGlmICh0aGlzLnBhcmFtQ29uZmlnLkRFQlVHX0ZMQUcpIGNvbnNvbGUubG9nKFwicXVlcnlEYXRhOlwiLCBxdWVyeURhdGEpXHJcbiAgICAgICAgICBsZXQgZm91bmRSdWxlID0gdGhpcy5jaGVja0hhc1J1bGVzKHJ1bGVzRGVmLCBxdWVyeURhdGFbJ19RVUVSWSddLCBcIlBPU1RfUVVFUllcIik7XHJcbiAgICAgICAgICBpZiAoZm91bmRSdWxlKXtcclxuICAgICAgICAgICAgICBzdGF0dXNSZWMgPSB0aGlzLmNoZWNrUnVsZXNCeVRyaWdnZXIob2JqZWN0LCBydWxlc0RlZiwgcXVlcnlEYXRhLCBUcmlnZ2VyLCB0aGlzLnJvdXRpbmVfbmFtZSwgdGhpcy5ob3N0c0FyciwgdGhpcy5ob3N0c01hcEFycik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICAgLy9jb25zb2xlLmxvZyhcInN0YXR1c1JlYzpQT1NUX1FVRVJZOlwiLCBzdGF0dXNSZWMpO1xyXG4gICAgICAgICAgaWYgKHN0YXR1c1JlY1snc3RhdHVzJ10gID09IC0xKXtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgZWxzZSBpZiAoVHJpZ2dlciA9PSBcIlBSRV9RVUVSWVwiKSB7XHJcblxyXG4gICAgICBpZiAodHlwZW9mIGFjdHVhbFJlc3VsdCAhPT0gXCJ1bmRlZmluZWRcIikge1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYWN0dWFsUmVzdWx0Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICBpZiAodGhpcy5wYXJhbUNvbmZpZy5ERUJVR19GTEFHKSBjb25zb2xlLmxvZyhcImFjdHVhbFJlc3VsdFtpXTpcIiwgYWN0dWFsUmVzdWx0W2ldKVxyXG4gICAgICAgICAgbGV0IHF1ZXJ5RGF0YSA9IGFjdHVhbFJlc3VsdFtpXTtcclxuICAgICAgICAgIGlmICh0aGlzLnBhcmFtQ29uZmlnLkRFQlVHX0ZMQUcpIGNvbnNvbGUubG9nKFwicXVlcnlEYXRhOlwiLCBxdWVyeURhdGEpXHJcbiAgICAgICAgICAgICBsZXQgZm91bmRSdWxlID0gdGhpcy5jaGVja0hhc1J1bGVzKHJ1bGVzRGVmLCBxdWVyeURhdGFbJ19RVUVSWSddLCBcIlBSRV9RVUVSWVwiKTtcclxuXHRcdFx0ICAgICAgIGlmIChmb3VuZFJ1bGUpe1xyXG4gICAgICAgICAgICAgICAgc3RhdHVzUmVjID0gdGhpcy5jaGVja1J1bGVzQnlUcmlnZ2VyKG9iamVjdCwgcnVsZXNEZWYsIHF1ZXJ5RGF0YSwgVHJpZ2dlciwgdGhpcy5yb3V0aW5lX25hbWUsIHRoaXMuaG9zdHNBcnIsIHRoaXMuaG9zdHNNYXBBcnIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy5wYXJhbUNvbmZpZy5ERUJVR19GTEFHKSBjb25zb2xlLmxvZyhcImNoZWNrUnVsZXM6RG9uZVwiLCBUcmlnZ2VyLCBcIiByb3V0aW5lX25hbWU6XCIsIHRoaXMucm91dGluZV9uYW1lLCBcIiBhY3R1YWxSZXN1bHQ6XCIsIGFjdHVhbFJlc3VsdCk7XHJcbiAgICByZXR1cm4gc3RhdHVzUmVjO1xyXG5cclxuICB9XHJcbiAgLy8vLy8vLy8vLy8vLy9cclxuICBwdWJsaWMgc3RvcmVBY3Rpb25zUHRycyhhY3Rpb25zOmFueSwgcnVsZXNEZWY6YW55KSB7XHJcbiAgbGV0IGN1cnJlbnRRVUVSWV9ERUYgPSBcIlwiO1xyXG4gIGxldCBjdXJyZW50UlVMRV9JRCA9IFwiXCI7XHJcbiAgICBsZXQgYWN0aW9uUHRyczphbnkgPSBbXTtcclxuXHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFjdGlvbnMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgaWYgKChjdXJyZW50UVVFUllfREVGICE9IGFjdGlvbnNbaV0uUVVFUllfREVGKSAmJiAoY3VycmVudFJVTEVfSUQgIT0gYWN0aW9uc1tpXS5SVUxFX0lEKSkge1xyXG4gICAgICAgIGlmIChpID09IDApXHJcbiAgICAgICAgYWN0aW9uUHRycy5wdXNoKGkpO1xyXG4gICAgICAgIGlmIChjdXJyZW50UVVFUllfREVGICE9IFwiXCIpIHtcclxuICAgICAgICBydWxlc0RlZi5hY3Rpb25QdHJzQXJyW2N1cnJlbnRRVUVSWV9ERUZdID0gYWN0aW9uUHRycztcclxuICAgICAgICBhY3Rpb25QdHJzID0gW107XHJcbiAgICAgICAgYWN0aW9uUHRycy5wdXNoKGkpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAgIGN1cnJlbnRRVUVSWV9ERUYgPSBhY3Rpb25zW2ldLlFVRVJZX0RFRjtcclxuICAgICAgICBjdXJyZW50UlVMRV9JRCA9IGFjdGlvbnNbaV0uUlVMRV9JRDtcclxuICAgICAgLy9pZiAodGhpcy5wYXJhbUNvbmZpZy5ERUJVR19GTEFHKSBjb25zb2xlLmxvZyhcInJ1bGVQdHJzMTpcIixydWxlUHRycyk7XHJcblxyXG4gICAgfVxyXG4gICAgICBlbHNlIGlmICgoY3VycmVudFFVRVJZX0RFRiA9PSBhY3Rpb25zW2ldLlFVRVJZX0RFRikgJiYgKGN1cnJlbnRSVUxFX0lEICE9IGFjdGlvbnNbaV0uUlVMRV9JRCkpIHtcclxuICAgICAgICBjdXJyZW50UlVMRV9JRCA9IGFjdGlvbnNbaV0uUlVMRV9JRDtcclxuICAgICAgYWN0aW9uUHRycy5wdXNoKGkpO1xyXG5cclxuICAgIH1cclxuICAgICAgZWxzZSBpZiAoKGN1cnJlbnRRVUVSWV9ERUYgPT0gYWN0aW9uc1tpXS5RVUVSWV9ERUYpICYmIChjdXJyZW50UlVMRV9JRCA9PSBhY3Rpb25zW2ldLlJVTEVfSUQpKSB7XHJcbiAgICAgICAgYWN0aW9uUHRycy5wdXNoKGkpO1xyXG4gICAgICAgIGN1cnJlbnRSVUxFX0lEID0gYWN0aW9uc1tpXS5SVUxFX0lEO1xyXG4gICAgXHJcbiAgICBcclxuICAgICAgfVxyXG4gICAgICBpZiAodGhpcy5wYXJhbUNvbmZpZy5ERUJVR19GTEFHKSBjb25zb2xlLmxvZyhcImFjdGlvblB0cnMyOlwiLCBhY3Rpb25QdHJzKTtcclxuICB9XHJcbiAgLy9hY3Rpb25QdHJzLnB1c2goaSk7XHJcbiAgcnVsZXNEZWYuYWN0aW9uUHRyc0FycltjdXJyZW50UVVFUllfREVGXSA9IGFjdGlvblB0cnM7XHJcbiAgICBpZiAodGhpcy5wYXJhbUNvbmZpZy5ERUJVR19GTEFHKSBjb25zb2xlLmxvZyhcInJ1bGVzRGVmLmFjdGlvblB0cnNBcnI6XCIsIHJ1bGVzRGVmLmFjdGlvblB0cnNBcnIpO1xyXG59XHJcblxyXG5cclxuXHJcbiAgcHVibGljIHN0b3JlUnVsZXNQdHJzKHJ1bGVzOmFueSwgcnVsZXNEZWY6YW55KSB7XHJcbiAgICAgIGxldCBjdXJyZW50UVVFUllfREVGID0gXCJcIjtcclxuICAgICAgbGV0IGN1cnJlbnRSVUxFX0lEID0gXCJcIjtcclxuICAgIGxldCBydWxlUHRyczphbnkgPSBbXTtcclxuXHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHJ1bGVzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgaWYgKHRoaXMucGFyYW1Db25maWcuREVCVUdfRkxBRykgY29uc29sZS5sb2cocnVsZXNbaV0uUVVFUllfREVGICsgXCIgOiBcIiArIHJ1bGVzW2ldLlJVTEVfSUQgKyBcIiAgICAgICAgICBcIiArIGN1cnJlbnRRVUVSWV9ERUYgKyBcIiA6IFwiICsgY3VycmVudFJVTEVfSUQpO1xyXG4gICAgICBpZiAoKGN1cnJlbnRRVUVSWV9ERUYgIT0gcnVsZXNbaV0uUVVFUllfREVGKSAmJiAoY3VycmVudFJVTEVfSUQgIT0gcnVsZXNbaV0uUlVMRV9JRCkpIHtcclxuICAgICAgICAgIGlmICh0aGlzLnBhcmFtQ29uZmlnLkRFQlVHX0ZMQUcpIGNvbnNvbGUubG9nKFwiIG5vdCBlcXVhbFwiKTtcclxuICAgICAgICBpZiAoaSA9PSAwKVxyXG4gICAgICAgICAgICBydWxlUHRycy5wdXNoKGkpO1xyXG4gICAgICAgIGlmIChjdXJyZW50UVVFUllfREVGICE9IFwiXCIpIHtcclxuICAgICAgICAgIGlmICh0aGlzLnBhcmFtQ29uZmlnLkRFQlVHX0ZMQUcpIGNvbnNvbGUubG9nKFwiLS1zdG9yaW5nIHJ1bGVQdHJzMjpcIiwgcnVsZVB0cnMpO1xyXG4gICAgICAgICAgICBydWxlc0RlZi5ydWxlUHRyc0FycltjdXJyZW50UVVFUllfREVGXSA9IHJ1bGVQdHJzO1xyXG4gICAgICAgICAgICBydWxlUHRycyA9IFtdO1xyXG4gICAgICAgICAgICBydWxlUHRycy5wdXNoKGkpO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICBjdXJyZW50UVVFUllfREVGID0gcnVsZXNbaV0uUVVFUllfREVGO1xyXG4gICAgICAgIGN1cnJlbnRSVUxFX0lEID0gcnVsZXNbaV0uUlVMRV9JRDtcclxuICAgICAgICBpZiAodGhpcy5wYXJhbUNvbmZpZy5ERUJVR19GTEFHKSBjb25zb2xlLmxvZyhcInJ1bGVQdHJzMTpcIixydWxlUHRycyk7XHJcblxyXG4gICAgICAgIH1cclxuICAgICAgZWxzZSBpZiAoKGN1cnJlbnRRVUVSWV9ERUYgPT0gcnVsZXNbaV0uUVVFUllfREVGKSAmJiAoY3VycmVudFJVTEVfSUQgIT0gcnVsZXNbaV0uUlVMRV9JRCkpIHtcclxuICAgICAgICAgIGlmICh0aGlzLnBhcmFtQ29uZmlnLkRFQlVHX0ZMQUcpIGNvbnNvbGUubG9nKFwiIG5vdCBlcXVhbDJcIik7XHJcbiAgICAgICAgICBydWxlUHRycy5wdXNoKGkpO1xyXG4gICAgICAgIGN1cnJlbnRSVUxFX0lEID0gcnVsZXNbaV0uUlVMRV9JRDtcclxuICAgICAgICBpZiAodGhpcy5wYXJhbUNvbmZpZy5ERUJVR19GTEFHKSBjb25zb2xlLmxvZyhcInJ1bGVQdHJzMjpcIiwgcnVsZVB0cnMpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmICggKCBjdXJyZW50UVVFUllfREVGID09IHJ1bGVzW2ldLlFVRVJZX0RFRiApICYmICggY3VycmVudFJVTEVfSUQgPT0gcnVsZXNbaV0uUlVMRV9JRCApIClcclxuICAgICAgICAgIHtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKFwiIGVxdWFsM1wiKTtcclxuICAgICAgICAgICAgcnVsZVB0cnMucHVzaChpKTtcclxuICAgICAgICAgICAgY3VycmVudFJVTEVfSUQgPSBydWxlc1tpXS5SVUxFX0lEIDtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKFwicnVsZVB0cnMzOlwiLHJ1bGVQdHJzKTtcclxuICAgICAgICAgIH1cclxuICAgICAgaWYgKHRoaXMucGFyYW1Db25maWcuREVCVUdfRkxBRykgY29uc29sZS5sb2coXCJydWxlUHRyczQ6XCIsIHJ1bGVQdHJzKTtcclxuICAgICAgfVxyXG4gICAgICAvL3J1bGVQdHJzLnB1c2goaSk7XHJcbiAgICBpZiAodGhpcy5wYXJhbUNvbmZpZy5ERUJVR19GTEFHKSBjb25zb2xlLmxvZyhcInJ1bGVQdHJzNTpcIixydWxlUHRycyk7XHJcbiAgICAgIHJ1bGVzRGVmLnJ1bGVQdHJzQXJyW2N1cnJlbnRRVUVSWV9ERUZdID0gcnVsZVB0cnM7XHJcbiAgICBpZiAodGhpcy5wYXJhbUNvbmZpZy5ERUJVR19GTEFHKSBjb25zb2xlLmxvZyhcInRlc3QzOnJ1bGVzRGVmLnJ1bGVQdHJzQXJyOlwiLCBydWxlc0RlZi5ydWxlUHRyc0Fycik7XHJcbiAgICB9XHJcblxyXG4vLy8vLy8vLy8vLy8vL1xyXG4gIHB1YmxpYyBsb2FkUnVsZXMob2JqZWN0OmFueSkge1xyXG5cclxuICAgIG9iamVjdC5Cb2R5ID0gW107XHJcbiAgICBsZXQgUGFnZSA9IFwiXCI7XHJcbiAgICBsZXQgTmV3VmFsOmFueSA9IHt9O1xyXG4gICAgTmV3VmFsW1wiX1FVRVJZXCJdID0gXCJHRVRfQURNX1JVTEVfREVGX1JVTEVfSVRFTVwiO1xyXG4gICAgTmV3VmFsW1wiUlVMRV9UUklHR0VSXCJdID0gXCJQT1NUX1FVRVJZXCI7XHJcbiAgICBpZiAodGhpcy5wYXJhbUNvbmZpZy5ERUJVR19GTEFHKSBjb25zb2xlLmxvZyhcInRlc3Q6TmV3VmFsOlwiLCBOZXdWYWwpXHJcbiAgICBpZiAodGhpcy5wYXJhbUNvbmZpZy5ERUJVR19GTEFHKSBjb25zb2xlLmxvZyhcInRlc3Q6b2JqZWN0LkJvZHk6XCIsIG9iamVjdC5Cb2R5KVxyXG4gICAgb2JqZWN0LmFkZFRvQm9keShOZXdWYWwpO1xyXG5cclxuICAgIGlmICh0aGlzLnBhcmFtQ29uZmlnLkRFQlVHX0ZMQUcpIGNvbnNvbGUubG9nKFwidGVzdDpvYmplY3QuQm9keTpcIiwgb2JqZWN0LkJvZHkpXHJcbiAgICBOZXdWYWwgPSB7fTtcclxuICAgIE5ld1ZhbFtcIl9RVUVSWVwiXSA9IFwiR0VUX0FETV9SVUxFX0RFRl9SVUxFX0FDVElPTlwiO1xyXG4gICAgTmV3VmFsW1wiUlVMRV9UUklHR0VSXCJdID0gXCJQT1NUX1FVRVJZXCI7XHJcbiAgICBvYmplY3QuYWRkVG9Cb2R5KE5ld1ZhbCk7XHJcblxyXG4gICAgTmV3VmFsID0ge307XHJcbiAgICBOZXdWYWxbXCJfUVVFUllcIl0gPSBcIkdFVF9BRE1fUlVMRV9IT1NUXCI7XHJcbiAgICBOZXdWYWxbXCJIT1NUX0lEXCJdID0gXCIlXCI7XHJcbiAgICBvYmplY3QuYWRkVG9Cb2R5KE5ld1ZhbCk7XHJcblxyXG4gICAgTmV3VmFsID0ge307XHJcbiAgICBOZXdWYWxbXCJfUVVFUllcIl0gPSBcIkdFVF9BRE1fUlVMRV9IT1NUX01BUFwiO1xyXG4gICAgTmV3VmFsW1wiSE9TVF9JRFwiXSA9IFwiJVwiO1xyXG4gICAgTmV3VmFsW1wiTUFQX0lEXCJdID0gXCIlXCI7XHJcbiAgICBvYmplY3QuYWRkVG9Cb2R5KE5ld1ZhbCk7XHJcblxyXG4gICAgdGhpcy5wb3N0KG9iamVjdCwgUGFnZSwgb2JqZWN0LkJvZHkpLnN1YnNjcmliZShyZXN1bHQgPT4ge1xyXG4gICAgICBpZiAodGhpcy5wYXJhbUNvbmZpZy5ERUJVR19GTEFHKSBjb25zb2xlLmxvZyhcInRlc3Q6cmVzdWx0LmRhdGE6XCIsIHJlc3VsdC5kYXRhKTtcclxuXHJcblxyXG4gICAgICB0aGlzLnJ1bGVzUG9zdFF1ZXJ5RGVmLnJ1bGVQdHJzQXJyID0ge307XHJcbiAgICAgIHRoaXMucnVsZXNQb3N0UXVlcnlEZWYuYWN0aW9uUHRyc0FyciA9IFtdO1xyXG5cclxuICAgICAgdGhpcy5zdG9yZVJ1bGVzUHRycyhyZXN1bHQuZGF0YVswXS5kYXRhLCB0aGlzLnJ1bGVzUG9zdFF1ZXJ5RGVmKVxyXG4gICAgICB0aGlzLnJ1bGVzUG9zdFF1ZXJ5RGVmLnJ1bGVzQXJyID0gcmVzdWx0LmRhdGFbMF0uZGF0YTtcclxuXHJcbiAgICAgIHRoaXMuc3RvcmVBY3Rpb25zUHRycyhyZXN1bHQuZGF0YVsxXS5kYXRhLCB0aGlzLnJ1bGVzUG9zdFF1ZXJ5RGVmKTtcclxuICAgICAgdGhpcy5ydWxlc1Bvc3RRdWVyeURlZi5hY3Rpb25zQXJyID0gcmVzdWx0LmRhdGFbMV0uZGF0YTtcclxuICAgICAgaWYgKHRoaXMucGFyYW1Db25maWcuREVCVUdfRkxBRykgY29uc29sZS5sb2coXCJ0ZXN0OnRoaXMucnVsZXNQb3N0UXVlcnlEZWZcIiwgdGhpcy5ydWxlc1Bvc3RRdWVyeURlZilcclxuXHJcbiAgICAgIHRoaXMuaG9zdHNBcnIgPSByZXN1bHQuZGF0YVsyXS5kYXRhO1xyXG4gICAgICB0aGlzLmhvc3RzTWFwQXJyID0gcmVzdWx0LmRhdGFbM10uZGF0YTtcclxuXHJcbiAgICAgIC8vLy8vLy8vLy8vLy8vXHJcbiAgICAgIG9iamVjdC5Cb2R5ID0gW107XHJcbiAgICB9LFxyXG4gICAgZXJyID0+IHtcclxuICAgICAgICBvYmplY3QuQm9keSA9IFtdO1xyXG4gICAgICAgIHRoaXMuc2hvd05vdGlmaWNhdGlvbihcImVycm9yXCIsIFwiZXJyb3I6XCIgKyBlcnIubWVzc2FnZSk7XHJcbiAgICB9KTtcclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vLy8vLy8vLy8vLy8vL1xyXG4gICAgb2JqZWN0LkJvZHkgPSBbXTtcclxuICAgIFBhZ2UgPSBcIlwiO1xyXG5OZXdWYWwgPSB7fTtcclxuTmV3VmFsW1wiX1FVRVJZXCJdID0gXCJHRVRfQURNX1JVTEVfREVGX1JVTEVfSVRFTVwiO1xyXG5OZXdWYWxbXCJSVUxFX1RSSUdHRVJcIl0gPSBcIlBSRV9RVUVSWVwiO1xyXG5pZiAodGhpcy5wYXJhbUNvbmZpZy5ERUJVR19GTEFHKSBjb25zb2xlLmxvZyhcInRlc3Q6TmV3VmFsOlwiLCBOZXdWYWwpXHJcbmlmICh0aGlzLnBhcmFtQ29uZmlnLkRFQlVHX0ZMQUcpIGNvbnNvbGUubG9nKFwidGVzdDpvYmplY3QuQm9keTpcIiwgb2JqZWN0LkJvZHkpXHJcbm9iamVjdC5hZGRUb0JvZHkoTmV3VmFsKTtcclxuXHJcbmlmICh0aGlzLnBhcmFtQ29uZmlnLkRFQlVHX0ZMQUcpIGNvbnNvbGUubG9nKFwidGVzdDpvYmplY3QuQm9keTpcIiwgb2JqZWN0LkJvZHkpXHJcbk5ld1ZhbCA9IHt9O1xyXG5OZXdWYWxbXCJfUVVFUllcIl0gPSBcIkdFVF9BRE1fUlVMRV9ERUZfUlVMRV9BQ1RJT05cIjtcclxuTmV3VmFsW1wiUlVMRV9UUklHR0VSXCJdID0gXCJQUkVfUVVFUllcIjtcclxub2JqZWN0LmFkZFRvQm9keShOZXdWYWwpO1xyXG5cclxuXHJcblxyXG4gICAgdGhpcy5wb3N0KG9iamVjdCwgUGFnZSwgb2JqZWN0LkJvZHkpLnN1YnNjcmliZShyZXN1bHQgPT4ge1xyXG4gIGlmICh0aGlzLnBhcmFtQ29uZmlnLkRFQlVHX0ZMQUcpIGNvbnNvbGUubG9nKFwidGVzdDpyZXN1bHQuZGF0YTpcIiwgcmVzdWx0LmRhdGEpO1xyXG5cclxuLy8vLy8vLy8vLy8vLy9cclxuICAgICAgdGhpcy5ydWxlc1ByZVF1ZXJ5RGVmLnJ1bGVQdHJzQXJyID0ge307XHJcbiAgICAgIHRoaXMucnVsZXNQcmVRdWVyeURlZi5hY3Rpb25QdHJzQXJyID0ge307XHJcblxyXG4gIHRoaXMuc3RvcmVSdWxlc1B0cnMocmVzdWx0LmRhdGFbMF0uZGF0YSwgdGhpcy5ydWxlc1ByZVF1ZXJ5RGVmKVxyXG4gIHRoaXMucnVsZXNQcmVRdWVyeURlZi5ydWxlc0FyciA9IHJlc3VsdC5kYXRhWzBdLmRhdGE7XHJcblxyXG4gICAgICB0aGlzLnN0b3JlQWN0aW9uc1B0cnMocmVzdWx0LmRhdGFbMV0uZGF0YSwgdGhpcy5ydWxlc1ByZVF1ZXJ5RGVmKTtcclxuICB0aGlzLnJ1bGVzUHJlUXVlcnlEZWYuYWN0aW9uc0FyciA9IHJlc3VsdC5kYXRhWzFdLmRhdGE7XHJcbiAgaWYgKHRoaXMucGFyYW1Db25maWcuREVCVUdfRkxBRykgY29uc29sZS5sb2coXCJ0ZXN0OnRoaXMucnVsZXNQcmVRdWVyeURlZlwiLCB0aGlzLnJ1bGVzUHJlUXVlcnlEZWYpXHJcblxyXG5cclxuICAvLy8vLy8vLy8vLy8vL1xyXG4gICAgICBvYmplY3QuQm9keSA9IFtdO1xyXG59LFxyXG5lcnIgPT4ge1xyXG4gICAgICAgIG9iamVjdC5Cb2R5ID0gW107XHJcbiAgICAgICAgdGhpcy5zaG93Tm90aWZpY2F0aW9uKFwiZXJyb3JcIiwgXCJlcnJvcjpcIiArIGVyci5tZXNzYWdlKTtcclxufSk7XHJcblxyXG4gIH1cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG4gIHB1YmxpYyBsa3BDYWNoZT1bXTtcclxuICBwdWJsaWMgZmV0Y2hMb29rdXBzICggb2JqZWN0LGxvb2t1cEFyckRlZil7XHJcbiAgICBsZXQgQm9keSA9W107XHJcbiAgICBmb3IgKGxldCBpPTA7IGk8IGxvb2t1cEFyckRlZi5sZW5ndGg7IGkrKyl7XHJcbiAgICAgIGxldCBOZXdWYWwgPSB7fTtcclxuICAgICAgTmV3VmFsW1wiX1FVRVJZXCJdID0gXCJHRVRfU1RNVFwiO1xyXG4gICAgICBOZXdWYWxbXCJfU1RNVFwiXSAgPSAgbG9va3VwQXJyRGVmW2ldLnN0YXRtZW50O1xyXG4gICAgICBpZiAobG9va3VwQXJyRGVmW2ldLnN0YXRtZW50ICE9IFwiW11cIilcclxuICAgICAgICBCb2R5ID0gdGhpcy5hZGRUb0JvZHkoTmV3VmFsLEJvZHkpO1xyXG4gICAgfVxyXG5cclxuICAgIGxldCBQYWdlID0gIFwiXCI7XHJcbiAgICB0aGlzLnBvc3Qob2JqZWN0LFBhZ2UsQm9keSkuc3Vic2NyaWJlKHJlc3VsdCA9PiB7XHJcbiAgICAgIGZvciAobGV0IGk9MDsgaTwgbG9va3VwQXJyRGVmLmxlbmd0aDsgaSsrKXtcclxuICAgICAgICAvL2lmICh0aGlzLnBhcmFtQ29uZmlnLkRFQlVHX0ZMQUcpIGNvbnNvbGUubG9nKFwicmVzdWx0LmRhdGFbaV0uZGF0YTpcIixyZXN1bHQuZGF0YVtpXS5kYXRhWzBdKVxyXG4gICAgICAgIGlmICAodHlwZW9mIHJlc3VsdC5kYXRhW2ldICE9PSBcInVuZGVmaW5lZFwiKXtcclxuICAgICAgICAgIGlmICAodHlwZW9mIHJlc3VsdC5kYXRhW2ldLmRhdGFbMF0gIT09IFwidW5kZWZpbmVkXCIpe1xyXG4gICAgICAgICAgICAvL2FkZCBlbXB0eSByZWNvcmQgYXQgYmVnaW5pbmcgb2YgdGhlIGFycmF5IGZvciB0aGUgTE9WIGZvciBpbnNlcnQgbmV3IHJlY29yZCBpbiBhIGdyaWQgd29yayBwcm9wZXJseVxyXG4gICAgICAgICAgICBsZXQga2V5cyA9IE9iamVjdC5rZXlzKHJlc3VsdC5kYXRhW2ldLmRhdGFbMF0pO1xyXG4gICAgICAgICAgICBsZXQgZW1wdHlSZWMgPXt9O1xyXG5cclxuICAgICAgICAgICAgbGV0IGhhc1NwYWNlPWZhbHNlO1xyXG4gICAgICAgICAgICAvLyBsZXQgY29kZVR4dCA9IGtleXNbMF07XHJcbiAgICAgICAgICAgIC8vIGxldCBkYXRhU2V0ID0gT2JqZWN0LmFzc2lnbihbXSwgcmVzdWx0LmRhdGFbaV0uZGF0YSk7XHJcblxyXG4gICAgICAgICAgICAvLyBkYXRhU2V0LmZpbmQoZWxlbSA9PntcclxuICAgICAgICAgICAgLy8gICAvL2NvbnNvbGUubG9nKFwiZWxtOlwiLGVsZW0pO1xyXG4gICAgICAgICAgICAvLyAgIGlmIChlbGVtW2NvZGVUeHRdLnRyaW0oKSA9PSBcIlwiKXtcclxuICAgICAgICAgICAgLy8gICAgIGhhc1NwYWNlID0gdHJ1ZTtcclxuICAgICAgICAgICAgLy8gICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgICAgICAvLyAgIH1cclxuICAgICAgICAgICAgLy8gfSk7XHJcblxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgaWYgKCAhaGFzU3BhY2Upe1xyXG4gICAgICAgICAgICBmb3IgKGxldCBrID0wOyBrIDwga2V5cy5sZW5ndGg7IGsrKyl7XHJcbiAgICAgICAgICAgICAgICAvL2lmICh0aGlzLnBhcmFtQ29uZmlnLkRFQlVHX0ZMQUcpIGNvbnNvbGUubG9nKFwiW2tleXNba106XCIsIGtleXNba10pO1xyXG4gICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhcIltrZXlzW2tdOlwiLCBrZXlzW2tdKTtcclxuICAgICAgICAgICAgICAgIGVtcHR5UmVjW2tleXNba11dID0gXCJcIjtcclxuICAgICAgICAgICAgICAgIC8vb2JqZWN0LnByaW1hcktleVJlYWRPbmx5QXJyW2tleXNba11dID0gdmFsdWU7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvL2lmICh0aGlzLnBhcmFtQ29uZmlnLkRFQlVHX0ZMQUcpIGNvbnNvbGUubG9nKFwiZW1wdHlSZWM6XCIsZW1wdHlSZWMpXHJcbiAgICAgICAgICAgIC8vY29uc29sZS5sb2coXCJlbXB0eVJlYzpcIixlbXB0eVJlYyk7XHJcbiAgICAgICAgICAgIHJlc3VsdC5kYXRhW2ldLmRhdGEuc3BsaWNlKDAsMCxlbXB0eVJlYyk7IC8vRnVhZDphZGQgZW1wdHkgcmVjb3JkIGF0IGJlZ2luaW5nIG9mIHRoZSBhcnJheSBmb3IgdGhlIExPViBmb3IgaW5zZXJ0IG5ldyByZWNvcmQgaW4gYSBncmlkIHdvcmsgcHJvcGVybHlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgb2JqZWN0W2xvb2t1cEFyckRlZltpXS5sa3BBcnJOYW1lXSA9IHJlc3VsdC5kYXRhW2ldLmRhdGE7XHJcbiAgICAgICAgLy9pZiAodGhpcy5wYXJhbUNvbmZpZy5ERUJVR19GTEFHKSBjb25zb2xlLmxvZyhcImxvb2t1cEFyckRlZltpXS5sa3BBcnJOYW1lOlwiLCBsb29rdXBBcnJEZWZbaV0ubGtwQXJyTmFtZSwgb2JqZWN0W2xvb2t1cEFyckRlZltpXS5sa3BBcnJOYW1lXSlcclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgfVxyXG4gICAgICBpZiAgKHR5cGVvZiBvYmplY3QuZmV0Y2hMb29rdXBzQ2FsbEJhY2sgIT09IFwidW5kZWZpbmVkXCIpXHJcbiAgICAgICAgb2JqZWN0LmZldGNoTG9va3Vwc0NhbGxCYWNrKCk7XHJcblxyXG4gICAgfSxcclxuICAgIGVyciA9PiB7XHJcbiAgICAgIC8vYWxlcnQgKCdlcnJvcjonICsgZXJyLm1lc3NhZ2UpO1xyXG4gICAgICB0aGlzLnNob3dFcnJvck1zZyhvYmplY3QsIGVycik7XHJcbiAgICB9KTtcclxuICB9XHJcbiAgXHJcbiAgICBwdWJsaWMgcGVyZm9ybVBvc3Qob2JqZWN0OmFueSwgZm46YW55KSB7XHJcbiAgICBsZXQgUGFnZSA9IFwiXCI7XHJcbiAgICB0aGlzLnBvc3Qob2JqZWN0LCBQYWdlLCBvYmplY3QuQm9keSkuc3Vic2NyaWJlKHJlc3VsdCA9PiB7XHJcbiAgICAgIGZuKG9iamVjdCwgcmVzdWx0KTtcclxuICAgICAgb2JqZWN0LkJvZHkgPSBbXTtcclxuICAgIH0sXHJcbiAgICBlcnIgPT4ge1xyXG4gICAgICAvL2FsZXJ0ICgnZXJyb3I6JyArIGVyci5tZXNzYWdlKTtcclxuICAgICAgdGhpcy5zaG93RXJyb3JNc2cob2JqZWN0LCBlcnIpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuXHJcbiAgcHVibGljIHNldENvbXBvbmVudENvbmZpZyhjb21wb25lbnRDb25maWc6YW55LCBzY3JlZW5Db25maWc6YW55KSB7XHJcbiAgICBsZXQga2V5cyA9IE9iamVjdC5rZXlzKGNvbXBvbmVudENvbmZpZyk7XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGtleXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAvL2lmICh0aGlzLnBhcmFtQ29uZmlnLkRFQlVHX0ZMQUcpIGNvbnNvbGUubG9nKCBrZXlzW2ldICsgXCIgXCIgKyBjb21wb25lbnRDb25maWdbIGtleXNbaV0gXSApIDtcclxuICAgICAgaWYgKGNvbXBvbmVudENvbmZpZ1trZXlzW2ldXSAhPSBudWxsKSB7XHJcbiAgICAgICAgc2NyZWVuQ29uZmlnW2tleXNbaV1dID0gY29tcG9uZW50Q29uZmlnW2tleXNbaV1dO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgLy9pZiAodGhpcy5wYXJhbUNvbmZpZy5ERUJVR19GTEFHKSBjb25zb2xlLmxvZyhzY3JlZW5Db25maWcpO1xyXG4gICAgcmV0dXJuIHNjcmVlbkNvbmZpZztcclxuICB9XHJcbiAgcHVibGljIGdldFJvdXRpbmVBdXRoKG1lbnU6YW55LCByb3V0aW5lX25hbWU6YW55KSB7XHJcbiAgICBsZXQgaSA9IDA7XHJcbiAgICBsZXQgcm91dGluZUF1dGg7XHJcbiAgICBsZXQgZm91bmQgPSBmYWxzZTtcclxuICAgIGlmICh0eXBlb2YgbWVudSAhPT0gXCJ1bmRlZmluZWRcIikge1xyXG4gICAgICB3aGlsZSAoaSA8IG1lbnUubGVuZ3RoKSB7XHJcbiAgICAgICAgbGV0IGogPSAwO1xyXG4gICAgICAgIHdoaWxlIChqIDwgbWVudVtpXS5pdGVtcy5sZW5ndGgpIHtcclxuICAgICAgICAgIGlmIChtZW51W2ldLml0ZW1zW2pdLmNob2ljZSA9PSByb3V0aW5lX25hbWUpIHtcclxuICAgICAgICAgICAgcm91dGluZUF1dGggPSBtZW51W2ldLml0ZW1zW2pdO1xyXG4gICAgICAgICAgICBmb3VuZCA9IHRydWU7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgaisrO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoZm91bmQpXHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICBpKys7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGlmICh0aGlzLnBhcmFtQ29uZmlnLkRFQlVHX0ZMQUcpIGNvbnNvbGUubG9nKFwicm91dGluZV9uYW1lOlwiLCByb3V0aW5lX25hbWUsIFwicm91dGluZUF1dGg6XCIsIHJvdXRpbmVBdXRoLCBcIiBtZW51OlwiLCBtZW51KTtcclxuXHJcblxyXG4gICAgcmV0dXJuIChyb3V0aW5lQXV0aCk7XHJcbiAgfVxyXG4gIHB1YmxpYyBhY3RPblBhcmFtQ29uZmlnKG9iamVjdDphbnksIHJvdXRpbmVfbmFtZTphbnkpIHtcclxuICAgIGlmICh0aGlzLnBhcmFtQ29uZmlnLkRFQlVHX0ZMQUcpIGNvbnNvbGUubG9nKFwicm91dGluZV9uYW1lOlwiICsgcm91dGluZV9uYW1lKVxyXG4gICAgbGV0IHBhcmFtQ29uZmlnID0gZ2V0UGFyYW1Db25maWcoKTtcclxuICAgIGxldCBtZW51ID0gcGFyYW1Db25maWcubWVudTtcclxuICAgIGxldCByb3V0aW5lQXV0aCA9IHRoaXMuZ2V0Um91dGluZUF1dGgobWVudSwgcm91dGluZV9uYW1lKTtcclxuXHJcbiAgICBpZiAodHlwZW9mIHJvdXRpbmVBdXRoICE9PSBcInVuZGVmaW5lZFwiKSB7XHJcbiAgICAgIG9iamVjdC50aXRsZSA9IHJvdXRpbmVBdXRoLnRleHQgKyBcIiAoXCIgKyByb3V0aW5lQXV0aC5yb3V0aW5lVmVyICsgXCIpXCI7XHJcbiAgICAgIG9iamVjdC5yb3V0aW5lQXV0aCA9IHJvdXRpbmVBdXRoO1xyXG4gICAgICB0aGlzLnJvdXRpbmVfbmFtZSA9IHJvdXRpbmVfbmFtZTtcclxuICAgICAgaWYgKHRoaXMucGFyYW1Db25maWcuREVCVUdfRkxBRykgY29uc29sZS5sb2coXCJvYmplY3QudGl0bGU6XCIgKyBvYmplY3QudGl0bGUpXHJcbiAgICB9XHJcbiAgICBlbHNlXHJcbiAgICAgIGlmIChyb3V0aW5lX25hbWUgPT0gXCJEU1BFS1lDXCIpIHtcclxuICAgICAgICB0aGlzLnJvdXRpbmVfbmFtZSA9IHJvdXRpbmVfbmFtZTtcclxuICAgICAgfVxyXG4gICAgaWYgKHRoaXMucGFyYW1Db25maWcuREVCVUdfRkxBRykgY29uc29sZS5sb2coXCJ0aGlzLnJvdXRpbmVfbmFtZTpcIiArIHRoaXMucm91dGluZV9uYW1lKVxyXG4gIH1cclxuXHJcbiAgcHVibGljIHNob3dFcnJvck1zZyhvYmplY3Q6YW55LCBzZXJ2ZXJFcnJvcjphbnkpIHtcclxuICAgIGxldCBlcnJvck1zZyA9IFwiXCI7XHJcbiAgICBpZiAodHlwZW9mIHNlcnZlckVycm9yLmVycm9yID09IFwidW5kZWZpbmVkXCIpIHtcclxuICAgICAgIGVycm9yTXNnID0gdGhpcy5zdGFuZGFyZEVycm9yTXNnICsgXCIgOiBcIiArIHNlcnZlckVycm9yO1xyXG4gICAgfVxyXG4gICAgZWxzZVxyXG4gICAgICAgZXJyb3JNc2cgPSB0aGlzLnN0YW5kYXJkRXJyb3JNc2cgKyBcIiA6IFwiICsgc2VydmVyRXJyb3IuZXJyb3IuZXJyb3I7XHJcbiAgICBsZXQgZGlhbG9nU3RydWMgPSB7XHJcbiAgICAgIG1zZzogZXJyb3JNc2csXHJcbiAgICAgIHRpdGxlOiBcIkVycm9yXCIsXHJcbiAgICAgIGluZm86IG51bGwsXHJcbiAgICAgIG9iamVjdDogb2JqZWN0LFxyXG4gICAgICBhY3Rpb246IHRoaXMuT2tBY3Rpb25zLFxyXG4gICAgICBjYWxsYmFjazogbnVsbFxyXG4gICAgfTtcclxuICAgICAgdGhpcy5zaG93Q29uZmlybWF0aW9uKGRpYWxvZ1N0cnVjKTtcclxuXHJcbiAgfVxyXG4gIHB1YmxpYyBzZW5kR2V0Q29tbWFuZCh1cmw6YW55LCBwYWdlOiBzdHJpbmcpOiBPYnNlcnZhYmxlPEdyaWREYXRhUmVzdWx0PiB7XHJcbiAgICBpZiAodGhpcy5wYXJhbUNvbmZpZy5ERUJVR19GTEFHKSBjb25zb2xlLmxvZyhcIiBpbnNpZGUgc2VuZEdldENvbW1hbmRcIilcclxuICAgIGxldCB0aGVVUkwgPSB1cmwgKyBwYWdlO1xyXG4gICAgaWYgKHRoaXMucGFyYW1Db25maWcuREVCVUdfRkxBRykgY29uc29sZS5sb2coXCIgaW5zaWRlIHNlbmRHZXRDb21tYW5kOnRoZVVSTDpcIiwgdGhlVVJMKVxyXG4gICAgdGhpcy5odHRwT3B0aW9ucyA9IHtcclxuICAgICAgaGVhZGVyczogbmV3IEh0dHBIZWFkZXJzKHtcclxuICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG4gICAgICAgICdhdXRob3JpemF0aW9uJzogdGhpcy5TdHJBdXRoXHJcblxyXG4gICAgICB9KVxyXG4gICAgfTtcclxuXHJcbiAgICBpZiAodGhpcy5wYXJhbUNvbmZpZy5ERUJVR19GTEFHKSBjb25zb2xlLmxvZyhcInNlbmRHZXRDb21tYW5kIHRoZVVSTDpcIiArIHRoZVVSTClcclxuICAgIHJldHVybiB0aGlzLmh0dHBcclxuICAgICAgLmdldChgJHt0aGVVUkx9YCwgdGhpcy5odHRwT3B0aW9ucylcclxuICAgICAgICAucGlwZShcclxuICAgICAgICAgICAgY2F0Y2hFcnJvcigoZXJyKSA9PiB7XHJcbiAgICAgICAgICAgICAgaWYgKHRoaXMucGFyYW1Db25maWcuREVCVUdfRkxBRykgY29uc29sZS5sb2coXCJzZXJ2ZXIgZXJyb3I6XCIsIGVyci5tZXNzYWdlKVxyXG4gICAgICAgICAgdGhpcy5zaG93Tm90aWZpY2F0aW9uKFwiZXJyb3JcIiwgXCJlcnJvcjpcIiArIGVyci5tZXNzYWdlKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aHJvd0Vycm9yKGVycik7XHJcbiAgICAgICAgICAgICAgfSksXHJcbiAgICAgICAgICAgIG1hcChyZXNwb25zZSA9PiAoXHJcbiAgICAgICAgICAgICAgPGFueT5yZXNwb25zZVxyXG4gICAgICAgICAgICApKSxcclxuICAgICAgICAgICAgdGFwKCgpID0+IHRoaXMubG9hZGluZyA9IGZhbHNlKVxyXG4gICAgICAgKTtcclxuICB9XHJcbiAgcHVibGljIHBvc3RDb21tYW5kT3B0aW9ucyhPcHRpb25zOmFueSxwYWdlOiBzdHJpbmcsIHVybDphbnksIEJvZHk6YW55KTogT2JzZXJ2YWJsZTxHcmlkRGF0YVJlc3VsdD4ge1xyXG4gICAgLy9pZiAodGhpcy5wYXJhbUNvbmZpZy5ERUJVR19GTEFHKSBjb25zb2xlLmxvZyhcIiBpbnNpZGUgcG9zdENvbW1hbmRcIilcclxuICAgIGxldCB0aGVVUkwgPSB1cmw7IC8vdGhpcy5FUE1FTkdfVVJMICsgcGFnZTtcclxuICAgIGxldCBodHRwT3B0aW9ucyA9IHt9O1xyXG4gICAgaWYgKE9wdGlvbnMgPT0gbnVsbCl7XHJcbiAgICAgICBodHRwT3B0aW9ucyA9IHtcclxuICAgICAgICBoZWFkZXJzOiBuZXcgSHR0cEhlYWRlcnMoe1xyXG4gICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuICAgICAgICAgICdhdXRob3JpemF0aW9uJzogdGhpcy5TdHJBdXRoXHJcbiAgICAgIH0pXHJcbiAgICAgIH07XHJcbiAgICB9XHJcbiAgICBlbHNle1xyXG4gICAgICAgaHR0cE9wdGlvbnMgPSB7XHJcbiAgICAgICAgaGVhZGVyczogbmV3IEh0dHBIZWFkZXJzKFxyXG4gICAgICAgICAgT3B0aW9uc1xyXG4gICAgICAgICAgKVxyXG4gICAgICB9O1xyXG4gICAgfVxyXG4gICAgXHJcblxyXG4gICAgaWYgKHRoaXMucGFyYW1Db25maWcuREVCVUdfRkxBRykgY29uc29sZS5sb2coXCJwb3N0Q29tbWFuZE9wdGlvbnMgdGhlVVJMOlwiICwgdGhlVVJMLCBcIkJvZHk6XCIsQm9keSApXHJcbiAgICByZXR1cm4gdGhpcy5odHRwXHJcbiAgICAgICAgLnBvc3QoYCR7dGhlVVJMfWAsQm9keSwgaHR0cE9wdGlvbnMpXHJcbiAgICAgICAgLnBpcGUoXHJcbiAgICAgICAgICAgIGNhdGNoRXJyb3IoKGVycikgPT4ge1xyXG4gICAgICAgICAgICAgIC8vaWYgKHRoaXMucGFyYW1Db25maWcuREVCVUdfRkxBRykgY29uc29sZS5sb2coXCJzZXJ2ZXIgZXJyb3I6XCIsIGVyci5tZXNzYWdlKVxyXG4gICAgICAgICAgICAgIC8vdGhpcy5zaG93Tm90aWZpY2F0aW9uIChcImVycm9yXCIsXCJlcnJvcjpcIiArIGVyci5tZXNzYWdlKTtcclxuICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKFwiZXJyOlwiLGVycik7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhyb3dFcnJvcihlcnIpO1xyXG4gICAgICAgICAgICAgICAgLy8gdGhyb3dFcnJvcihlcnIpO1xyXG4gICAgICAgICAgICAgICAgLy8gcmV0dXJuIEpTT04uc3RyaW5naWZ5IChlcnIpO1xyXG4gICAgICAgICAgICAgIH0pLFxyXG4gICAgICAgICAgICBtYXAocmVzcG9uc2UgPT4gKFxyXG4gICAgICAgICAgICAgIDxhbnk+cmVzcG9uc2VcclxuICAgICAgICAgICAgKSksXHJcbiAgICAgICAgICAgIGNhdGNoRXJyb3IoZXJyID0+IHsvL0Z1YWQ6Y2hlY2sgaWYgdGhvc2UgMyBsaW5lcyBhcmUgbmVlZGVkXHJcbiAgICAgICAgICAgICAgcmV0dXJuIGVyci5tZXNzYWdlOy8vMlxyXG4gICAgICAgICAgfSksICAgICAgICAgICAgICAgICAgICAvLzNcclxuICAgICAgICAgICAgdGFwKChyZXNwb25zZSkgPT4ge3RoaXMubG9hZGluZyA9IGZhbHNlOyBjb25zb2xlLmxvZyhcInJlc3BvbnNlOlwiLHJlc3BvbnNlKX0pXHJcbiAgICAgICApO1xyXG4gIH1cclxuICBwdWJsaWMgcG9zdENvbW1hbmQocGFnZTogc3RyaW5nLCB1cmw6YW55LCBCb2R5OmFueSk6IE9ic2VydmFibGU8R3JpZERhdGFSZXN1bHQ+IHtcclxuLy9pZiAodGhpcy5wYXJhbUNvbmZpZy5ERUJVR19GTEFHKSBjb25zb2xlLmxvZyhcIiBpbnNpZGUgcG9zdENvbW1hbmRcIilcclxuICAgIGxldCB0aGVVUkwgPSB1cmw7IC8vdGhpcy5FUE1FTkdfVVJMICsgcGFnZTtcclxuICAgIHRoZVVSTCA9IHRoaXMuY2hlY2tEQkxvYyh0aGVVUkwpO1xyXG4gICAgdGhpcy5odHRwT3B0aW9ucyA9IHtcclxuICAgICAgaGVhZGVyczogbmV3IEh0dHBIZWFkZXJzKHtcclxuICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG4gICAgICAgICdhdXRob3JpemF0aW9uJzogdGhpcy5TdHJBdXRoXHJcblxyXG4gICAgICB9KVxyXG4gICAgfTtcclxuXHJcbiAgICAvL2lmICh0aGlzLnBhcmFtQ29uZmlnLkRFQlVHX0ZMQUcpIGNvbnNvbGUubG9nKFwicG9zdENvbW1hbmQgdGhlVVJMOlwiICsgdGhlVVJMKVxyXG4gICAgcmV0dXJuIHRoaXMuaHR0cFxyXG4gICAgICAucG9zdChgJHt0aGVVUkx9YCwgQm9keSwgdGhpcy5odHRwT3B0aW9ucylcclxuICAgICAgICAucGlwZShcclxuICAgICAgICAgICAgY2F0Y2hFcnJvcigoZXJyKSA9PiB7XHJcbiAgICAgICAgICAgICAgLy9pZiAodGhpcy5wYXJhbUNvbmZpZy5ERUJVR19GTEFHKSBjb25zb2xlLmxvZyhcInNlcnZlciBlcnJvcjpcIiwgZXJyLm1lc3NhZ2UpXHJcbiAgICAgICAgICB0aGlzLnNob3dOb3RpZmljYXRpb24oXCJlcnJvclwiLCBcImVycm9yOlwiICsgZXJyLm1lc3NhZ2UpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRocm93RXJyb3IoZXJyKTtcclxuICAgICAgICAgICAgICB9KSxcclxuICAgICAgICAgICAgbWFwKHJlc3BvbnNlID0+IChcclxuICAgICAgICAgICAgICA8YW55PnJlc3BvbnNlXHJcbiAgICAgICAgICAgICkpLFxyXG4gICAgICAgICAgICB0YXAoKCkgPT4gdGhpcy5sb2FkaW5nID0gZmFsc2UpXHJcbiAgICAgICApO1xyXG4gIH1cclxuICBwdWJsaWMgQ2FwaXRhbGl6ZUZpcnN0KHN0cjphbnkpIHtcclxuICAgIHN0ciA9IHN0ci50b0xvd2VyQ2FzZSgpO1xyXG5cclxuICAgIHN0ciA9IHN0ci5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIHN0ci5zbGljZSgxKVxyXG4gICAgcmV0dXJuIHN0cjtcclxuICB9XHJcbiAgcHVibGljIENhcGl0YWxpemVUaXRsZShmaWVsZE5hbWU6YW55KSB7XHJcblxyXG4gIGxldCBhcnJheSA9IGZpZWxkTmFtZS5zcGxpdChcIl9cIik7XHJcbiAgICBpZiAodGhpcy5wYXJhbUNvbmZpZy5ERUJVR19GTEFHKSBjb25zb2xlLmxvZyhcImFycmF5OlwiLCBhcnJheSlcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYXJyYXkubGVuZ3RoOyBpKyspXHJcbiAgICAgIGFycmF5W2ldID0gdGhpcy5DYXBpdGFsaXplRmlyc3QoYXJyYXlbaV0pXHJcblxyXG4gICAgZmllbGROYW1lID0gYXJyYXkuam9pbihcIiBcIik7XHJcbiAgICByZXR1cm4gZmllbGROYW1lO1xyXG4gIH1cclxuICBwdWJsaWMgcHJlcGFyZUxvb2t1cChmaWVsZE5hbWU6YW55LCBwYXJhbUNvbmZpZzphbnkpIHtcclxuXHJcbiAgICBsZXQgbGtwQXJyTmFtZSA9IFwibGtwQXJyXCIgKyBmaWVsZE5hbWU7XHJcbiAgICBsZXQgbGtwRGVmO1xyXG4gICAgaWYgKGZpZWxkTmFtZSA9PSBcIkFTU0lHTkVFXCIpIHtcclxuICAgICAgaWYgKHRoaXMucGFyYW1Db25maWcuREVCVUdfRkxBRykgY29uc29sZS5sb2coXCJzdGFyU2VydmljZXMuc2Vzc2lvblBhcmFtcy5VU0VSX0lORk86XCIsIHRoaXMuc2Vzc2lvblBhcmFtcy5VU0VSX0lORk8pO1xyXG5cclxuICAgICAgbGV0IHRlYW0gPSB0aGlzLnNlc3Npb25QYXJhbXMuVVNFUl9JTkZPLlRFQU07XHJcblxyXG4gICAgICBsa3BEZWYgPSB7XHJcbiAgICAgICAgXCJzdGF0bWVudFwiOiBcInNlbGVjdCBVU0VSTkFNRSBDT0RFLCBGVUxMTkFNRSBDT0RFVEVYVF9MQU5HIGZyb20gIEFETV9VU0VSX0lORk9STUFUSU9OIHdoZXJlIFRFQU0gPSAnXCIgKyB0ZWFtICsgXCInIFwiLFxyXG4gICAgICAgIFwibGtwQXJyTmFtZVwiOiBsa3BBcnJOYW1lLCBcImZpZWxkTmFtZVwiOiBmaWVsZE5hbWVcclxuICAgICAgfTtcclxuXHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgbGtwRGVmID0ge1xyXG4gICAgICAgIFwic3RhdG1lbnRcIjogXCJTRUxFQ1QgQ09ERSwgIENPREVURVhUX0xBTkcgRlJPTSBTT01fVEFCU19DT0RFUyBXSEVSRSBDT0RFTkFNRSA9ICdcIiArIGZpZWxkTmFtZSArIFwiJyBhbmQgTEFOR1VBR0VfTkFNRSA9ICdcIiArIHBhcmFtQ29uZmlnLnVzZXJMYW5nICsgXCInIG9yZGVyIGJ5IENPREVURVhUX0xBTkcgIFwiLFxyXG4gICAgICAgIFwibGtwQXJyTmFtZVwiOiBsa3BBcnJOYW1lLCBcImZpZWxkTmFtZVwiOiBmaWVsZE5hbWVcclxuICAgICAgfTtcclxuICAgIH1cclxuICAgIHJldHVybiBsa3BEZWY7XHJcblxyXG4gIH1cclxuICBwdWJsaWMgZ2V0QXNzaWduZWVTZWxlY3Qob2JqZWN0OmFueSwgYXNzaWduZWVUeXBlOmFueSkge1xyXG4gICAgbGV0IHNlbGVjdFN0bXQ7XHJcblxyXG4gICAgaWYgKGFzc2lnbmVlVHlwZSA9PSBcIlRFQU1cIikge1xyXG4gICAgICBzZWxlY3RTdG10ID0gXCJTRUxFQ1QgQ09ERSwgQ09ERVRFWFRfTEFORyBGUk9NIFNPTV9UQUJTX0NPREVTIFdIRVJFIENPREVOQU1FID0nVEVBTScgYW5kIExBTkdVQUdFX05BTUUgPSAnXCIgKyBvYmplY3QucGFyYW1Db25maWcudXNlckxhbmcgKyBcIicgIG9yZGVyIGJ5IENPREVURVhUX0xBTkcgXCJcclxuICAgIH1cclxuICAgIGVsc2UgaWYgKGFzc2lnbmVlVHlwZSA9PSBcIlBFUlNPTlwiKSB7XHJcbiAgICAgIHNlbGVjdFN0bXQgPSBcIlNFTEVDVCBVU0VSTkFNRSAgQ09ERSwgRlVMTE5BTUUgQ09ERVRFWFRfTEFORyBGUk9NIEFETV9VU0VSX0lORk9STUFUSU9OIFdIRVJFIFRFQU0gPSdcIiArIG9iamVjdC5zdGFyU2VydmljZXMuc2Vzc2lvblBhcmFtcy5VU0VSX0lORk8uVEVBTSArIFwiJyBvcmRlciBieSBDT0RFVEVYVF9MQU5HIFwiXHJcbiAgICB9XHJcbiAgICBlbHNlIGlmIChhc3NpZ25lZVR5cGUgPT0gXCJORVRXT1JLXCIpIHtcclxuICAgICAgc2VsZWN0U3RtdCA9IFwiU0VMRUNUIENPREUsIENPREVURVhUX0xBTkcgRlJPTSBTT01fVEFCU19DT0RFUyBXSEVSRSBDT0RFTkFNRSA9J0VYQ0hfU1lTVCcgYW5kIExBTkdVQUdFX05BTUUgPSAnXCIgKyBvYmplY3QucGFyYW1Db25maWcudXNlckxhbmcgKyBcIicgb3JkZXIgYnkgQ09ERVRFWFRfTEFOR1wiXHJcbiAgICB9XHJcbiAgICByZXR1cm4gc2VsZWN0U3RtdDtcclxuICB9XHJcbiAgcHVibGljIGdldEZpcnN0V2Vla0RheShvYmplY3Q6YW55LCB2YWx1ZTphbnkpIHtcclxuICAgIGxldCB2YWx1ZURhdGU6IERhdGVcclxuICAgIGxldCBmaXJzdFdlZWtEYXk6YW55ID0gRGF5Lk1vbmRheTtcclxuICAgIGlmICh0eXBlb2Ygb2JqZWN0LnBhcmFtQ29uZmlnLmZpcnN0V2Vla0RheSAhPT0gXCJ1bmRlZmluZWRcIikge1xyXG4gICAgICBmaXJzdFdlZWtEYXkgPSBvYmplY3QucGFyYW1Db25maWcuZmlyc3RXZWVrRGF5O1xyXG4gICAgfVxyXG4gICAgdmFsdWVEYXRlID0gZmlyc3REYXlJbldlZWsobmV3IERhdGUodmFsdWUpLCBmaXJzdFdlZWtEYXkpO1xyXG4gICAgdmFsdWVEYXRlID0gZ2V0RGF0ZSh2YWx1ZURhdGUpO1xyXG4gICAgaWYgKHRoaXMucGFyYW1Db25maWcuREVCVUdfRkxBRykgY29uc29sZS5sb2coXCJ2YWx1ZURhdGU6XCIsIHZhbHVlRGF0ZSlcclxuICAgIHJldHVybiB2YWx1ZURhdGU7XHJcblxyXG4gIH1cclxuICBwdWJsaWMgc2V0UlRMKCkge1xyXG4gICAgbGV0IHBhcmFtQ29uZmlnID0gZ2V0UGFyYW1Db25maWcoKTtcclxuICAgIGxldCBsYW5ndWFnZV9uYW1lID0gcGFyYW1Db25maWcudXNlckxhbmc7XHJcbiAgICBsYW5ndWFnZV9uYW1lID0gbGFuZ3VhZ2VfbmFtZS50b0xvd2VyQ2FzZSgpO1xyXG5cclxuICAgIGxldCBwYXJnOmFueSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWFpbnBhZ2VcIik7XHJcbiAgICBjb25zdCBzdmMgPSA8TXlNZXNzYWdlU2VydmljZT50aGlzLm1lc3NhZ2VzO1xyXG4gICAgLy9zdmMubGFuZ3VhZ2VfbmFtZSA9IHN2Yy5sYW5ndWFnZV9uYW1lID09PSAnZXMnID8gJ2hlJyA6ICdlcyc7XHJcbiAgICAvL3N2Yy5sYW5ndWFnZV9uYW1lID0gbGFuZ3VhZ2VfbmFtZTtcclxuICAgIC8vaWYgKHRoaXMucGFyYW1Db25maWcuREVCVUdfRkxBRykgY29uc29sZS5sb2coXCJzZXRSVEw6bGFuZ3VhZ2VfbmFtZTpcIiwgbGFuZ3VhZ2VfbmFtZSlcclxuICAgIGlmIChsYW5ndWFnZV9uYW1lID09IFwiYXJcIikge1xyXG4gICAgICBwYXJnLmRpciA9IFwicnRsXCI7XHJcbiAgICAgIHRoaXMubWVzc2FnZXMubm90aWZ5KHRydWUpO1xyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgIHBhcmcuZGlyID0gXCJsdHJcIjtcclxuICAgICAgdGhpcy5tZXNzYWdlcy5ub3RpZnkoZmFsc2UpO1xyXG4gICAgfVxyXG4gIH1cclxuICBwdWJsaWMgbG9hZExhbmd1YWdlT2xkKGxhbmd1YWdlX25hbWU6YW55KSB7XHJcbiAgICBsYW5ndWFnZV9uYW1lID0gIWxhbmd1YWdlX25hbWUgPyBcImVuXCIgOiBsYW5ndWFnZV9uYW1lXHJcbiAgICBsZXQgZmlsZSA9IFwiYXNzZXRzL2xhbmcvXCIgKyBsYW5ndWFnZV9uYW1lLnRvTG93ZXJDYXNlKCkgKyBcIi5qc29uXCJcclxuICAgIGlmICh0aGlzLnBhcmFtQ29uZmlnLkRFQlVHX0ZMQUcpIGNvbnNvbGUubG9nKFwibG9hZExhbmd1YWdlOmZpbGUsXCIsIGZpbGUpXHJcbiAgICB0aGlzLmh0dHAuZ2V0KGZpbGUpLnN1YnNjcmliZShkYXRhID0+IHtcclxuICAgICAgaWYgKHRoaXMucGFyYW1Db25maWcuREVCVUdfRkxBRykgY29uc29sZS5sb2coXCJsb2FkTGFuZ3VhZ2U6ZGF0YSxcIiwgZGF0YSlcclxuICAgICAgbGV0IHBhcmFtQ29uZmlnID0ge1xyXG4gICAgICAgIFwiTmFtZVwiOiBcInRpdGxlc1wiLFxyXG4gICAgICAgIFwiVmFsXCI6IGRhdGFcclxuICAgICAgfTtcclxuICAgICAgc2V0UGFyYW1Db25maWcocGFyYW1Db25maWcpO1xyXG4gICAgICB0aGlzLnBhcmFtQ29uZmlnID0gZ2V0UGFyYW1Db25maWcoKTtcclxuICAgICAgcGFyYW1Db25maWcgPSB7XHJcbiAgICAgICAgXCJOYW1lXCI6IFwidXNlckxhbmdcIixcclxuICAgICAgICBcIlZhbFwiOiBsYW5ndWFnZV9uYW1lLnRvVXBwZXJDYXNlKClcclxuICAgICAgfTtcclxuICAgICAgc2V0UGFyYW1Db25maWcocGFyYW1Db25maWcpO1xyXG4gICAgICB0aGlzLnNldFJUTCgpO1xyXG5cclxuICAgICAgaWYgKHRoaXMucGFyYW1Db25maWcuREVCVUdfRkxBRykgY29uc29sZS5sb2coXCJkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuZGlyOlwiLCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuZGlyID09ICdsdHInKTtcclxuICAgIH0sXHJcbiAgICBlcnIgPT4ge1xyXG4gICAgICAgIGlmICh0aGlzLnBhcmFtQ29uZmlnLkRFQlVHX0ZMQUcpIGNvbnNvbGUubG9nKFwibG9hZExhbmd1YWdlOmVycixcIiwgZXJyKVxyXG4gICAgICAvL2FsZXJ0ICgnZXJyb3I6JyArIGVyci5tZXNzYWdlKTtcclxuICAgICAgLy90aGlzLnNob3dFcnJvck1zZyhvYmplY3QsIGVycik7XHJcbiAgICB9KVxyXG4gIH1cclxuICBwdWJsaWMgbG9hZExhbmd1YWdlKGxhbmd1YWdlOmFueSl7XHJcbiAgICBsYW5ndWFnZSA9ICFsYW5ndWFnZSA/IFwiZW5cIiA6IGxhbmd1YWdlXHJcbiAgICBsZXQgZmlsZSA9IFwibGFuZy9cIiArIGxhbmd1YWdlLnRvTG93ZXJDYXNlKCkgKyBcIi5qc29uXCJcclxuICAgIGlmICh0aGlzLnBhcmFtQ29uZmlnLkRFQlVHX0ZMQUcpIGNvbnNvbGUubG9nKFwibG9hZExhbmd1YWdlOmZpbGUsXCIsZmlsZSlcclxuICAgIGxldCBwYWdlID0gXCI/Z2V0ZmlsZT1cIiArIGZpbGU7XHJcbiAgICBwYWdlID0gdGhpcy5jaGVja0RCTG9jKHBhZ2UpO1xyXG4gICAgcGFnZSA9IGVuY29kZVVSSShwYWdlKTtcclxuICAgIFxyXG4gICAgaWYgKHRoaXMucGFyYW1Db25maWcuREVCVUdfRkxBRykgY29uc29sZS5sb2coXCJsb2FkTGFuZ3VhZ2U6cGFnZSxcIixwYWdlKVxyXG4gICAgICB0aGlzLnBhcmFtQ29uZmlnID0gZ2V0UGFyYW1Db25maWcoKTtcclxuICAgICAgaWYgKHRoaXMucGFyYW1Db25maWcuREVCVUdfRkxBRykgY29uc29sZS5sb2coXCJ0aGlzLnBhcmFtQ29uZmlnLnRpdGxlcyxcIix0aGlzLnBhcmFtQ29uZmlnLnRpdGxlcyk7XHJcbiAgICAgIGxldCBwYXJhbUNvbmZpZyA9IHtcclxuICAgICAgICBcIk5hbWVcIjogXCJ1c2VyTGFuZ1wiLFxyXG4gICAgICAgIFwiVmFsXCI6IGxhbmd1YWdlLnRvVXBwZXJDYXNlKClcclxuICAgICAgfTtcclxuICAgICAgc2V0UGFyYW1Db25maWcocGFyYW1Db25maWcpO1xyXG5cclxuICAgIHRoaXMuc2VuZEdldENvbW1hbmQodGhpcy5TRVJWRVJfVVJMICwgcGFnZSkuc3Vic2NyaWJlKHJlc3VsdCA9PiB7XHJcbiAgICAgIGlmICh0aGlzLnBhcmFtQ29uZmlnLkRFQlVHX0ZMQUcpIGNvbnNvbGUubG9nKFwibG9hZExhbmd1YWdlOnJlc3VsdCxcIixyZXN1bHQpO1xyXG4gICAgICBsZXQgZGF0YSA9IHJlc3VsdC5kYXRhO1xyXG4gICAgICBpZiAodGhpcy5wYXJhbUNvbmZpZy5ERUJVR19GTEFHKSBjb25zb2xlLmxvZyhcImxvYWRMYW5ndWFnZTpkYXRhLFwiLGRhdGEpXHJcbiAgICAgIGxldCBwYXJhbUNvbmZpZyA9IHtcclxuICAgICAgICBcIk5hbWVcIjogXCJ0aXRsZXNcIixcclxuICAgICAgICBcIlZhbFwiOiBkYXRhXHJcbiAgICAgIH07XHJcbiAgICAgIHNldFBhcmFtQ29uZmlnKHBhcmFtQ29uZmlnKTtcclxuICAgICAgdGhpcy5wYXJhbUNvbmZpZyA9IGdldFBhcmFtQ29uZmlnKCk7XHJcbiAgICAgIGlmICh0aGlzLnBhcmFtQ29uZmlnLkRFQlVHX0ZMQUcpIGNvbnNvbGUubG9nKFwidGhpcy5wYXJhbUNvbmZpZy50aXRsZXMsXCIsdGhpcy5wYXJhbUNvbmZpZy50aXRsZXMpO1xyXG4gICAgICBwYXJhbUNvbmZpZyA9IHtcclxuICAgICAgICBcIk5hbWVcIjogXCJ1c2VyTGFuZ1wiLFxyXG4gICAgICAgIFwiVmFsXCI6IGxhbmd1YWdlLnRvVXBwZXJDYXNlKClcclxuICAgICAgfTtcclxuICAgICAgc2V0UGFyYW1Db25maWcocGFyYW1Db25maWcpO1xyXG4gICAgICB0aGlzLnNldFJUTCgpO1xyXG5cclxuICAgICAgaWYgKHRoaXMucGFyYW1Db25maWcuREVCVUdfRkxBRykgY29uc29sZS5sb2coXCJkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuZGlyOlwiLCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuZGlyID09ICdsdHInICApO1xyXG4gICAgfSxcclxuICAgIGVyciA9PiB7XHJcbiAgICAgIGlmICh0aGlzLnBhcmFtQ29uZmlnLkRFQlVHX0ZMQUcpIGNvbnNvbGUubG9nKFwibG9hZExhbmd1YWdlOmVycixcIixlcnIpXHJcbiAgICAgIC8vYWxlcnQgKCdlcnJvcjonICsgZXJyLm1lc3NhZ2UpO1xyXG4gICAgICAvL3RoaXMuc2hvd0Vycm9yTXNnKG9iamVjdCwgZXJyKTtcclxuICAgIH0pXHJcbiAgfVxyXG4gIHB1YmxpYyBnZXROTFMocGFyYW1zOmFueSwgaWQ6YW55LCB0ZXh0OmFueSkge1xyXG4gICAgLy9pZiAodGhpcy5wYXJhbUNvbmZpZy5ERUJVR19GTEFHKSBjb25zb2xlLmxvZyhcImNoZWNreDpnZXROTFM6dGhpcy5wYXJhbUNvbmZpZy50aXRsZXMsXCIsdGhpcy5wYXJhbUNvbmZpZy50aXRsZXMpO1xyXG4gICAgaWYgKHR5cGVvZiB0aGlzLnBhcmFtQ29uZmlnICE9PSBcInVuZGVmaW5lZFwiKSB7XHJcbiAgICAgIGlmICh0eXBlb2YgdGhpcy5wYXJhbUNvbmZpZy50aXRsZXMgIT09IFwidW5kZWZpbmVkXCIpIHtcclxuICAgICAgICAvL2NvbnNvbGUubG9nKFwiY2hlY2t4OmdldE5MUzppZDpcIixpZCk7XHJcbiAgICAgICAgbGV0IGFycmF5ID0gaWQuc3BsaXQoXCIuXCIpO1xyXG4gICAgICAgIGlmIChhcnJheS5sZW5ndGggPT0gMykge1xyXG4gICAgICAgICAgaWYgKHR5cGVvZiB0aGlzLnBhcmFtQ29uZmlnLnRpdGxlcyBbYXJyYXlbMF1dICE9PSBcInVuZGVmaW5lZFwiKXtcclxuICAgICAgICAgICAgaWYgKHR5cGVvZiB0aGlzLnBhcmFtQ29uZmlnLnRpdGxlc1thcnJheVswXV1bYXJyYXlbMV1dICE9PSBcInVuZGVmaW5lZFwiKSB7XHJcbiAgICAgICAgICAgICAgaWYgKHR5cGVvZiB0aGlzLnBhcmFtQ29uZmlnLnRpdGxlc1thcnJheVswXV1bYXJyYXlbMV1dW2FycmF5WzJdXSAhPT0gXCJ1bmRlZmluZWRcIil7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5wYXJhbUNvbmZpZy50aXRsZXNbYXJyYXlbMF1dW2FycmF5WzFdXVthcnJheVsyXV0gIT0gXCJcIil7XHJcbiAgICAgICAgICAgICAgICAgIHRleHQgPSB0aGlzLnBhcmFtQ29uZmlnLnRpdGxlc1thcnJheVswXV1bYXJyYXlbMV1dW2FycmF5WzJdXVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgZWxzZXtcclxuICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhcImNoZWNreDpnZXROTFM6YXJyYXlbMF0gbm90IGZvdW5kIGluIHRoaXMucGFyYW1Db25maWcudGl0bGVzIDowOlwiLGFycmF5WzBdLCB0aGlzLnBhcmFtQ29uZmlnLnRpdGxlcyk7XHJcbiAgICAgICAgICAgIC8vY29uc29sZS5sb2coXCJjaGVja3g6Z2V0TkxTOmFycmF5WzBdIG5vdCBmb3VuZCBpbiB0aGlzLnBhcmFtQ29uZmlnLnRpdGxlcyA6MDpcIixhcnJheVswXSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAvL2NvbnNvbGUubG9nKFwiY2hlY2t4OmdldE5MUzp0ZXh0LFwiLHRleHQsIFwiaW4gYXJyYXlbMF06XCIsIGFycmF5WzBdLCB0aGlzLnBhcmFtQ29uZmlnLnRpdGxlcyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgbGV0IG5sc190aXRsZSA9IHRoaXMucGFyYW1Db25maWcudGl0bGVzW2lkXTtcclxuICAgICAgICAgIGlmICh0eXBlb2YgbmxzX3RpdGxlICE9PSBcInVuZGVmaW5lZFwiKSB7XHJcbiAgICAgICAgICAgIHRleHQgPSBubHNfdGl0bGU7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBpZiAocGFyYW1zLmxlbmd0aCA+IDApIHtcclxuICAgICAgbGV0IHN0ckFycmF5ID0gdGV4dC5zcGxpdChcIiMjXCIpO1xyXG4gICAgICB0ZXh0ID0gXCJcIjtcclxuICBcclxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzdHJBcnJheS5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIGlmICh0eXBlb2YgcGFyYW1zW2ldICE9IFwidW5kZWZpbmVkXCIpXHJcbiAgICAgICAgICB0ZXh0ID0gdGV4dCArIHN0ckFycmF5W2ldICsgcGFyYW1zW2ldO1xyXG4gICAgICAgIGVsc2VcclxuICAgICAgICAgIHRleHQgPSB0ZXh0ICsgc3RyQXJyYXlbaV07XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcblxyXG4gICAgcmV0dXJuIHRleHQ7XHJcbiAgfVxyXG4gIHB1YmxpYyBsb2FkU3RhdGVtZW50cyhzdGF0ZW1lbnRzOmFueSl7XHJcbiAgICBpZiAoc3RhdGVtZW50cyA9PSBcIlwiKVxyXG4gICAgICBzdGF0ZW1lbnRzID0gXCJzdGF0ZW1lbnRzLmpzb25cIjtcclxuICBsZXQgcGFnZSA9IFwiP2dldGZpbGU9XCIgKyBzdGF0ZW1lbnRzO1xyXG4gICAgcGFnZSA9IHRoaXMuY2hlY2tEQkxvYyhwYWdlKTtcclxuICAgIHBhZ2UgPSBlbmNvZGVVUkkocGFnZSk7XHJcbiAgICB0aGlzLnNlbmRHZXRDb21tYW5kKHRoaXMuU0VSVkVSX1VSTCwgcGFnZSkuc3Vic2NyaWJlKHJlc3VsdCA9PiB7XHJcbiAgICAgIGlmICh0aGlzLnBhcmFtQ29uZmlnLkRFQlVHX0ZMQUcpIGNvbnNvbGUubG9nKFwibG9hZFN0YXRlbWVudHM6cmVzdWx0LFwiLCByZXN1bHQpO1xyXG4gICAgICBsZXQgZGF0YSA9IHJlc3VsdC5kYXRhO1xyXG4gICAgICBpZiAodGhpcy5wYXJhbUNvbmZpZy5ERUJVR19GTEFHKSBjb25zb2xlLmxvZyhcImxvYWRTdGF0ZW1lbnRzOmRhdGEsXCIsIGRhdGEpO1xyXG4gICAgICBsZXQgbGtwQXJyUVVFUllfREVGOmFueSA9IFtdO1xyXG4gICAgICBPYmplY3Qua2V5cyhkYXRhKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXk6YW55KSB7XHJcbiAgICAgICAgbGV0IHZhbHVlID0gZGF0YVtrZXldO1xyXG4gICAgICAgIGxldCByZWMgPSB7XHJcbiAgICAgICAgICBDT0RFOiBrZXksXHJcbiAgICAgICAgICBDT0RFVEVYVF9MQU5HOiBrZXksXHJcbiAgICAgICAgICBzdGF0ZW1lbnQ6IHZhbHVlXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxrcEFyclFVRVJZX0RFRi5wdXNoKHJlYyk7XHJcblxyXG4gICAgfSk7XHJcbiAgICAgIGlmICh0aGlzLnBhcmFtQ29uZmlnLkRFQlVHX0ZMQUcpIGNvbnNvbGUubG9nKFwibG9hZFN0YXRlbWVudHM6ZGF0YSxcIiwgZGF0YSk7XHJcbiAgICAgIGlmICh0aGlzLnBhcmFtQ29uZmlnLkRFQlVHX0ZMQUcpIGNvbnNvbGUubG9nKFwibG9hZFN0YXRlbWVudHM6bGtwQXJyUVVFUllfREVGLFwiLCBsa3BBcnJRVUVSWV9ERUYpXHJcbiAgICAgIGxldCBwYXJhbUNvbmZpZyA9IHtcclxuICAgICAgICBcIk5hbWVcIjogXCJzdGF0ZW1lbnRzXCIsXHJcbiAgICAgICAgXCJWYWxcIjogZGF0YVxyXG4gICAgICB9O1xyXG4gICAgICBzZXRQYXJhbUNvbmZpZyhwYXJhbUNvbmZpZyk7XHJcbiAgICAgIHBhcmFtQ29uZmlnID0ge1xyXG4gICAgICAgIFwiTmFtZVwiOiBcImxrcEFyclFVRVJZX0RFRlwiLFxyXG4gICAgICAgIFwiVmFsXCI6IGxrcEFyclFVRVJZX0RFRlxyXG4gICAgICB9O1xyXG4gICAgICBzZXRQYXJhbUNvbmZpZyhwYXJhbUNvbmZpZyk7XHJcblxyXG4gICAgfSxcclxuICAgIGVyciA9PiB7XHJcbiAgICAgICAgaWYgKHRoaXMucGFyYW1Db25maWcuREVCVUdfRkxBRykgY29uc29sZS5sb2coXCJsb2FkTGFuZ3VhZ2U6ZXJyLFwiLCBlcnIpXHJcblxyXG5cclxuXHJcbiAgICB9KVxyXG4gIH1cclxuICAvLyBwdWJsaWMgbG9hZFN0YXRlbWVudHNPbGQoKSB7XHJcblxyXG4gIC8vICAgbGV0IGZpbGUgPSBcImFzc2V0cy9cIiArIFwic3RhdGVtZW50cy5qc29uXCJcclxuICAvLyAgIGlmICh0aGlzLnBhcmFtQ29uZmlnLkRFQlVHX0ZMQUcpIGNvbnNvbGUubG9nKFwibG9hZFN0YXRlbWVudHM6ZmlsZSxcIiwgZmlsZSlcclxuICAvLyAgIHRoaXMuaHR0cC5nZXQoZmlsZSkuc3Vic2NyaWJlKGRhdGEgPT4ge1xyXG4gIC8vICAgICBsZXQgbGtwQXJyUVVFUllfREVGOmFueSA9IFtdO1xyXG4gIC8vICAgICBPYmplY3Qua2V5cyhkYXRhKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXk6YW55KSB7XHJcbiAgLy8gICAgICAgbGV0IHZhbHVlID0gZGF0YVtrZXldO1xyXG4gIC8vICAgICAgIGxldCByZWMgPSB7XHJcbiAgLy8gICAgICAgICBDT0RFOiBrZXksXHJcbiAgLy8gICAgICAgICBDT0RFVEVYVF9MQU5HOiBrZXksXHJcbiAgLy8gICAgICAgICBzdGF0ZW1lbnQ6IHZhbHVlXHJcbiAgLy8gICAgICAgfVxyXG4gIC8vICAgICAgIGxrcEFyclFVRVJZX0RFRi5wdXNoKHJlYyk7XHJcblxyXG4gIC8vICAgICB9KTtcclxuICAvLyAgICAgaWYgKHRoaXMucGFyYW1Db25maWcuREVCVUdfRkxBRykgY29uc29sZS5sb2coXCJsb2FkU3RhdGVtZW50czpkYXRhLFwiLCBkYXRhKTtcclxuICAvLyAgICAgaWYgKHRoaXMucGFyYW1Db25maWcuREVCVUdfRkxBRykgY29uc29sZS5sb2coXCJsb2FkU3RhdGVtZW50czpsa3BBcnJRVUVSWV9ERUYsXCIsIGxrcEFyclFVRVJZX0RFRilcclxuICAvLyAgICAgbGV0IHBhcmFtQ29uZmlnID0ge1xyXG4gIC8vICAgICAgIFwiTmFtZVwiOiBcInN0YXRlbWVudHNcIixcclxuICAvLyAgICAgICBcIlZhbFwiOiBkYXRhXHJcbiAgLy8gICAgIH07XHJcbiAgLy8gICAgIHNldFBhcmFtQ29uZmlnKHBhcmFtQ29uZmlnKTtcclxuICAvLyAgICAgcGFyYW1Db25maWcgPSB7XHJcbiAgLy8gICAgICAgXCJOYW1lXCI6IFwibGtwQXJyUVVFUllfREVGXCIsXHJcbiAgLy8gICAgICAgXCJWYWxcIjogbGtwQXJyUVVFUllfREVGXHJcbiAgLy8gICAgIH07XHJcbiAgLy8gICAgIHNldFBhcmFtQ29uZmlnKHBhcmFtQ29uZmlnKTtcclxuXHJcbiAgLy8gICB9LFxyXG4gIC8vICAgICBlcnIgPT4ge1xyXG4gIC8vICAgICAgIGlmICh0aGlzLnBhcmFtQ29uZmlnLkRFQlVHX0ZMQUcpIGNvbnNvbGUubG9nKFwibG9hZExhbmd1YWdlOmVycixcIiwgZXJyKVxyXG5cclxuXHJcblxyXG4gIC8vICAgICB9KVxyXG4gIC8vIH1cclxuXHJcblxyXG4gIHB1YmxpYyBoYW5kbGVGZXRjaGVkTW9kdWxlcyhvYmplY3Q6YW55LCBkYXRhOmFueSkge1xyXG4gICAgaWYgKG9iamVjdC5wYXJhbUNvbmZpZy5ERUJVR19GTEFHKSBjb25zb2xlLmxvZygnZmV0Y2hlZE1vZHVsZXMgOiAnLCBkYXRhWzBdLmRhdGEpO1xyXG4gICAgLy90aGlzLml0ZW1zWzBdLml0ZW1zID0gIGRhdGE7XHJcbiAgICBvYmplY3QuaXRlbXMgPSBbXHJcbiAgICAgIHtcclxuICAgICAgIHRleHQ6ICdNb2R1bGUnLFxyXG4gICAgICAgaXRlbXM6IGRhdGFbMF0uZGF0YVxyXG4gICAgIH1dO1xyXG4gICAgIG9iamVjdC5zZXRNb2R1bGVOYW1lKG9iamVjdC5jdXJyZW50TWVudSk7XHJcbiAgICBpZiAob2JqZWN0LnBhcmFtQ29uZmlnLkRFQlVHX0ZMQUcpIGNvbnNvbGUubG9nKFwib2JqZWN0Lml0ZW1zOlwiLCBvYmplY3QuaXRlbXMsIFwiZGF0YVswXS5kYXRhLmxlbmd0aDpcIiwgZGF0YVswXS5kYXRhLmxlbmd0aClcclxuICAgIGlmIChkYXRhWzBdLmRhdGEubGVuZ3RoID09IDEpIHtcclxuICAgICAgb2JqZWN0LnNob3dNb2R1bGVTZWxlY3Rpb24gPSBmYWxzZTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHB1YmxpYyBmZXRjaE1lbnUob2JqZWN0OmFueSwgaGFuZGxlRmV0Y2hlZERhdGE6YW55KSB7XHJcbiAgICBpZiAoKHRoaXMuU3RyQXV0aCA9PSBcIlwiKSB8fCAodHlwZW9mIHRoaXMuU3RyQXV0aCA9PT0gXCJ1bmRlZmluZWRcIikpXHJcbiAgICAgIHJldHVybjtcclxuXHJcblxyXG4gICAgbGV0IFBhZ2UgPSBcIlwiO1xyXG4gICAgdGhpcy5wb3N0KHRoaXMsIFBhZ2UsIG9iamVjdC5Cb2R5KS5zdWJzY3JpYmUocmVzdWx0ID0+IHtcclxuXHJcbiAgICAgICAgaGFuZGxlRmV0Y2hlZERhdGEob2JqZWN0LCByZXN1bHQuZGF0YSwgZmFsc2UpO1xyXG5cclxuXHJcbiAgICAgIG9iamVjdC5Cb2R5ID0gW107XHJcbiAgICB9LFxyXG4gICAgZXJyID0+IHtcclxuICAgICAgICAvL2FsZXJ0KCdlcnJvcjonICsgZXJyLm1lc3NhZ2UpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG4gIHB1YmxpYyBzZXRNb2R1bGVJdGVtcyhvYmplY3Q6YW55KSB7XHJcblxyXG5cclxuICAgIGlmICghb2JqZWN0LnN0YXRpY01lbnUpIHtcclxuICAgICAgb2JqZWN0LkJvZHkgPSBbXTtcclxuICAgICAgbGV0IE5ld1ZhbDphbnkgPSB7XHJcbiAgICAgICAgTUVOVTogJ01BSU4nLFxyXG4gICAgICAgIENIT0lDRVMgOiBvYmplY3QucGFyYW1Db25maWcubGljZW5zZWRNb2R1bGVzLnRvVXBwZXJDYXNlKCksXHJcbiAgICAgICAgTEFOR1VBR0VfTkFNRSA6IG9iamVjdC5wYXJhbUNvbmZpZy51c2VyTGFuZy50b1VwcGVyQ2FzZSgpLFxyXG4gICAgICB9O1xyXG5cclxuICAgICAgICBOZXdWYWxbXCJfUVVFUllcIl0gPSBcIkdFVF9BTExPV0VEX01PRFVMRVNcIjtcclxuXHJcbiAgICAgICAgb2JqZWN0LmFkZFRvQm9keShOZXdWYWwpO1xyXG4gICAgICBpZiAodGhpcy5wYXJhbUNvbmZpZy5ERUJVR19GTEFHKSBjb25zb2xlLmxvZyhcIi0tLS0tLS0tb2JqZWN0LkJvZHkgOlwiLCBvYmplY3QuQm9keSlcclxuXHJcblxyXG4gICAgICB0aGlzLmZldGNoTWVudShvYmplY3QsIHRoaXMuaGFuZGxlRmV0Y2hlZE1vZHVsZXMpO1xyXG4gICAgfVxyXG4gIH1cclxuICBwdWJsaWMgc3RhdGVDaGFuZ2Uob2JqZWN0OmFueSwgZGF0YTogUGFuZWxCYXJTdGF0ZUNoYW5nZUV2ZW50KTogYm9vbGVhbiB7XHJcbiAgICAvL3B1YmxpYyBzdGF0ZUNoYW5nZShvYmplY3Q6YW55LCBkYXRhOiBBcnJheTxQYW5lbEJhckl0ZW1Nb2RlbD4pOiBib29sZWFuIHtcclxuICBcclxuICAgICAgaWYgKG9iamVjdC5zdGF0aWNNZW51ID09IHRydWUpIHtcclxuICAgICAgICBjb25zdCBmb2N1c2VkRXZlbnQ6IFBhbmVsQmFySXRlbU1vZGVsID0gZGF0YS5pdGVtcy5maWx0ZXIoaXRlbSA9PiBpdGVtLmZvY3VzZWQgPT09IHRydWUpWzBdO1xyXG4gICAgICAgIGlmICh0aGlzLnBhcmFtQ29uZmlnLkRFQlVHX0ZMQUcpIGNvbnNvbGUubG9nKFwiIGluIHN0YXRlQ2hhbmdlIDogXCIgKyBmb2N1c2VkRXZlbnQuaWQpXHJcbiAgICAgICAgaWYgKHRoaXMucGFyYW1Db25maWcuREVCVUdfRkxBRykgY29uc29sZS5sb2coZm9jdXNlZEV2ZW50KVxyXG4gICAgICAgIGlmIChmb2N1c2VkRXZlbnQudGl0bGUgPT0gXCJGb3JtYXR0aW5nIEZsb3dcIikge1xyXG4gICAgICAgICAgb2JqZWN0LnNob3dQYW5lbGJhciA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zb2xlLmxvZyhcIm9iamVjdC5pc1Bob25lUG9ydHJhaXQ6XCIsIG9iamVjdC5pc1Bob25lUG9ydHJhaXQsIG9iamVjdC5zaG93UGFuZWxiYXIpXHJcbiAgICAgICAgLy90aGlzLnNlbGVjdGVkSWQgPSBmb2N1c2VkRXZlbnQuaWQ7XHJcbiAgICAgICAgLy90aGlzLnJvdXRlci5uYXZpZ2F0ZShbJy8nICsgZm9jdXNlZEV2ZW50LmlkXSk7XHJcbiAgICAgICAgLy90aGlzLnN0YXJTZXJ2aWNlcy5zZXRSVEwoKTtcclxuICAgICAgICByZXR1cm4gdHJ1ZTsgIC8vRnVhZCBjaGVjayBpZiBpdCBzaG91bGQgcmV0dXJuIGZhbHNlIG9yIHRydWVcclxuICBcclxuICAgICAgfVxyXG4gICAgICBjb25zdCBmb2N1c2VkRXZlbnQ6IFBhbmVsQmFySXRlbU1vZGVsID0gZGF0YS5pdGVtcy5maWx0ZXIoaXRlbSA9PiBpdGVtLmZvY3VzZWQgPT09IHRydWUpWzBdO1xyXG4gICAgICBpZiAodGhpcy5wYXJhbUNvbmZpZy5ERUJVR19GTEFHKSBjb25zb2xlLmxvZyhcIiBpbiBzdGF0ZUNoYW5nZSA6IFwiICwgZm9jdXNlZEV2ZW50LCBmb2N1c2VkRXZlbnQuaWQpXHJcbiAgICAgIGxldCByb3V0aW5lQXV0aCA9IHRoaXMuZ2V0Um91dGluZUF1dGgob2JqZWN0Lm1lbnUsIGZvY3VzZWRFdmVudC5pZCk7XHJcbiAgICAgIGlmICh0aGlzLnBhcmFtQ29uZmlnLkRFQlVHX0ZMQUcpIGNvbnNvbGUubG9nKFwiIGluIHN0YXRlQ2hhbmdlIDogXCIgLCBmb2N1c2VkRXZlbnQuaWQgLCBcInJvdXRpbmVBdXRoIDpcIiAsIHJvdXRpbmVBdXRoKVxyXG4gIFxyXG4gICAgICBpZiAoZm9jdXNlZEV2ZW50LmlkID09IFwiUFJWRkxPV1wiKVxyXG4gICAgICAgICBvYmplY3Quc2hvd1BhbmVsYmFyID0gZmFsc2U7XHJcbiAgXHJcbiAgICAgIGlmICh0eXBlb2Ygcm91dGluZUF1dGggIT09IFwidW5kZWZpbmVkXCIpIHtcclxuICAgICAgICBpZiAodGhpcy5wYXJhbUNvbmZpZy5ERUJVR19GTEFHKSBjb25zb2xlLmxvZyhcIiBpbiBzdGF0ZUNoYW5nZSA6IHJvdXRpbmVBdXRoLmF1dGhMZXZlbDpcIiArIHJvdXRpbmVBdXRoLmF1dGhMZXZlbClcclxuICAgICAgICBpZiAocm91dGluZUF1dGguYXV0aExldmVsID09IDApIHtcclxuICAgICAgICAgIGxldCBkaWFsb2dTdHJ1YyA9IHtcclxuICAgICAgICAgICAgbXNnOiB0aGlzLm5vQWNjZXNzTXNnLFxyXG4gICAgICAgICAgICB0aXRsZTogXCJXYXJuaW5nXCIsXHJcbiAgICAgICAgICAgIGluZm86IG51bGwsXHJcbiAgICAgICAgICAgIG9iamVjdDogdGhpcyxcclxuICAgICAgICAgICAgYWN0aW9uOiB0aGlzLk9rQWN0aW9ucyxcclxuICAgICAgICAgICAgY2FsbGJhY2s6IG51bGxcclxuICAgICAgICAgIH07XHJcbiAgICAgICAgICB0aGlzLnNob3dDb25maXJtYXRpb24oZGlhbG9nU3RydWMpO1xyXG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgIG9iamVjdC5zZWxlY3RlZElkID0gZm9jdXNlZEV2ZW50LmlkO1xyXG4gICAgICAgICAgdGhpcy5zZXNzaW9uUGFyYW1zW1wiUHJ2VXNlckZsb3dcIl0gPSBcIlwiO1xyXG4gICAgICAgICAgdGhpcy5zZXNzaW9uUGFyYW1zW1wiUHJ2VXNlckNEUlwiXSA9IFwiXCI7XHJcbiAgIFxyXG4gICAgICAgICAgaWYgKG9iamVjdC5zZWxlY3RlZElkID09IFwiUFJWRkxPV1wiKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2Vzc2lvblBhcmFtc1tcIlBydlVzZXJGbG93XCJdID0gXCJQUlZfQkxEXCI7XHJcbiAgICAgICAgICAgIHRoaXMuc2Vzc2lvblBhcmFtc1tcIlBydlVzZXJDRFJcIl0gPSBcIlBSVl9DRFJcIjtcclxuICAgICAgICAgICAgb2JqZWN0LnNob3dQYW5lbGJhciA9IGZhbHNlO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgaWYgKG9iamVjdC5zZWxlY3RlZElkID09IFwiQ0NNQ0FUXCIpIHtcclxuICAgICAgICAgICAgdGhpcy5zZXNzaW9uUGFyYW1zW1wiUHJ2VXNlckZsb3dcIl0gPSBcIkNSQ19DQVRcIjtcclxuICAgICAgICAgICAgdGhpcy5zZXNzaW9uUGFyYW1zW1wiUHJ2VXNlckNEUlwiXSA9IFwiQ1JDX1VTRVJfSU5GT1wiO1xyXG4gICAgICAgICAgICBvYmplY3Quc2hvd1BhbmVsYmFyID0gZmFsc2U7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBpZiAob2JqZWN0LnNlbGVjdGVkSWQgPT0gXCJDQ01HUlBcIikge1xyXG4gICAgICAgICAgICB0aGlzLnNlc3Npb25QYXJhbXNbXCJQcnZVc2VyRmxvd1wiXSA9IFwiQ1JDX0dST1VQXCI7XHJcbiAgICAgICAgICAgIHRoaXMuc2Vzc2lvblBhcmFtc1tcIlBydlVzZXJDRFJcIl0gPSBcIkNSQ19HUk9VUF9JTkZPXCI7XHJcbiAgICAgICAgICAgIG9iamVjdC5zaG93UGFuZWxiYXIgPSBmYWxzZTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGlmIChvYmplY3Quc2VsZWN0ZWRJZCA9PSBcIkNNR0NBVFwiKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2Vzc2lvblBhcmFtc1tcIlBydlVzZXJGbG93XCJdID0gXCJDQU1fQ0FUXCI7XHJcbiAgICAgICAgICAgIHRoaXMuc2Vzc2lvblBhcmFtc1tcIlBydlVzZXJDRFJcIl0gPSBcIkNBTV9VU0VSX0lORk9cIjtcclxuICAgICAgICAgICAgb2JqZWN0LnNob3dQYW5lbGJhciA9IGZhbHNlO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgaWYgKG9iamVjdC5zZWxlY3RlZElkID09IFwiQ01HR1JQXCIpIHtcclxuICAgICAgICAgICAgdGhpcy5zZXNzaW9uUGFyYW1zW1wiUHJ2VXNlckZsb3dcIl0gPSBcIkNBTV9HUk9VUFwiO1xyXG4gICAgICAgICAgICB0aGlzLnNlc3Npb25QYXJhbXNbXCJQcnZVc2VyQ0RSXCJdID0gXCJDQU1fR1JPVVBfSU5GT1wiO1xyXG4gICAgICAgICAgICBvYmplY3Quc2hvd1BhbmVsYmFyID0gZmFsc2U7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBpZiAob2JqZWN0LnNlbGVjdGVkSWQgPT0gXCJCSUxMSU5HXCIpIHtcclxuICAgICAgICAgICAgdGhpcy5zZXNzaW9uUGFyYW1zW1wiUHJ2VXNlckZsb3dcIl0gPSBcIkJJTExJTkdcIjtcclxuICAgICAgICAgICAgdGhpcy5zZXNzaW9uUGFyYW1zW1wiUHJ2VXNlckNEUlwiXSA9IFwiQklMTElOR19DRFJcIjtcclxuICAgICAgICAgICAgb2JqZWN0LnNob3dQYW5lbGJhciA9IGZhbHNlO1xyXG4gICAgICAgICAgfVxyXG4gIFxyXG4gICAgICAgICAgaWYgKG9iamVjdC5zZWxlY3RlZElkLnN0YXJ0c1dpdGgoXCJQT1JUQUxfXCIpKS8vRnVhZCA6IFJORFxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICB0aGlzLnNlc3Npb25QYXJhbXNbXCJQT1JUQUxfRk9STVwiXSA9IGZvY3VzZWRFdmVudC5pZDtcclxuICAgICAgICAgICAgZm9jdXNlZEV2ZW50LmlkID0gJ0RTUFBPUlRBTCc7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAvL0ZVQUQ6IGNoZWNrIGlmIGJlbG93IGNvZGUgdGlsbCBlbHNlIGlzIG5lZWRlZFxyXG4gICAgICAgIGlmICh0aGlzLnBhcmFtQ29uZmlnLkRFQlVHX0ZMQUcpIGNvbnNvbGUubG9nKFwiIGluIHN0YXRlQ2hhbmdlIDogaGVyZTFcIik7XHJcbiAgICAgICAgICBpZiAob2JqZWN0LnJvdXRlci5yb3V0ZXJTdGF0ZS5zbmFwc2hvdC51cmwgPT0gKCcvJyArIGZvY3VzZWRFdmVudC5pZCkpIHtcclxuICAgICAgICAgIGlmICh0aGlzLnBhcmFtQ29uZmlnLkRFQlVHX0ZMQUcpIGNvbnNvbGUubG9nKFwiIGluIHN0YXRlQ2hhbmdlIDogaGVyZTJcIik7XHJcbiAgICAgICAgICBvYmplY3Qucm91dGVyLm5hdmlnYXRlQnlVcmwoJycsIHsgc2tpcExvY2F0aW9uQ2hhbmdlOiB0cnVlIH0pLnRoZW4oKCkgPT57XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnBhcmFtQ29uZmlnLkRFQlVHX0ZMQUcpIGNvbnNvbGUubG9nKFwiIGluIHN0YXRlQ2hhbmdlIDogaGVyZTNcIik7XHJcbiAgICAgICAgICAgICAgb2JqZWN0LnJvdXRlci5uYXZpZ2F0ZShbJy8nICsgZm9jdXNlZEV2ZW50LmlkXSwgeyBza2lwTG9jYXRpb25DaGFuZ2U6IHRydWUsIHJlcGxhY2VVcmw6IHRydWUsIHByZXNlcnZlRnJhZ21lbnQ6IGZhbHNlIH0pXHJcbiAgICAgICAgICAgIGlmICh0aGlzLnBhcmFtQ29uZmlnLkRFQlVHX0ZMQUcpIGNvbnNvbGUubG9nKFwiIGluIHN0YXRlQ2hhbmdlIDogaGVyZTRcIik7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgIG9iamVjdC5yb3V0ZXIubmF2aWdhdGUoWycvJyArIGZvY3VzZWRFdmVudC5pZF0sIHsgc2tpcExvY2F0aW9uQ2hhbmdlOiB0cnVlLCByZXBsYWNlVXJsOiB0cnVlLCBwcmVzZXJ2ZUZyYWdtZW50OiBmYWxzZSB9KTtcclxuICAgICAgICAgIGlmICh0aGlzLnBhcmFtQ29uZmlnLkRFQlVHX0ZMQUcpIGNvbnNvbGUubG9nKFwiaW4gc3RhdGVDaGFuZ2UgOiBcIixmb2N1c2VkRXZlbnQuaWQpO1xyXG4gICAgICAgIH1cclxuICBcclxuICAgICAgICAgIGlmIChvYmplY3QuaXNQaG9uZVBvcnRyYWl0KXtcclxuICAgICAgICAgICAgb2JqZWN0LnNob3dQYW5lbGJhciA9IGZhbHNlO1xyXG4gICAgICAgICAgfVxyXG4gIFxyXG4gICAgICAgICAgLy90aGlzLnN0YXJTZXJ2aWNlcy5zZXRSVEwoKTtcclxuICBcclxuICAgICAgICAgIC8vdGhpcy5zaG93UGFuZWxiYXIgPSBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICBcclxuICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG4gIHB1YmxpYyBzZXRQYW5lbEJhcihvYmplY3Q6YW55KSB7XHJcblxyXG4gICAgaWYgKCFvYmplY3Quc3RhdGljTWVudSkge1xyXG4gICAgICBvYmplY3QuQm9keSA9IFtdO1xyXG4gICAgICBsZXQgTmV3VmFsOmFueSA9IHtcclxuICAgICAgTUVOVSA6IG9iamVjdC5jdXJyZW50TWVudS50b1VwcGVyQ2FzZSgpLFxyXG4gICAgICBVU0VSTkFNRSA6IG9iamVjdC5zdGFyU2VydmljZXMuc2Vzc2lvblBhcmFtcy5VU0VSTkFNRS50b1VwcGVyQ2FzZSgpLFxyXG4gICAgICBMQU5HVUFHRV9OQU1FIDogb2JqZWN0LnBhcmFtQ29uZmlnLnVzZXJMYW5nLnRvVXBwZXJDYXNlKCksXHJcbiAgICAgIEhJRERFTiA6ICcwJ1xyXG4gICAgfTtcclxuXHJcbiAgICAgIE5ld1ZhbFtcIl9RVUVSWVwiXSA9IFwiR0VUX01FTlVfUk9VVElORVNcIjtcclxuXHJcbiAgICAgIG9iamVjdC5hZGRUb0JvZHkoTmV3VmFsKTtcclxuXHJcbiAgICAgIGxldCBOZXdWYWwxOmFueSA9IHtcclxuICAgICAgICBNRU5VOiBcIlwiLFxyXG4gICAgICAgIFVTRVJOQU1FOiBvYmplY3Quc3RhclNlcnZpY2VzLnNlc3Npb25QYXJhbXMuVVNFUk5BTUUudG9VcHBlckNhc2UoKVxyXG4gICAgfTtcclxuXHJcbiAgICAgIE5ld1ZhbDFbXCJfUVVFUllcIl0gPSBcIkdFVF9ST1VUSU5FU19BVVRIT1JJVFlcIjtcclxuXHJcbiAgICAgIG9iamVjdC5hZGRUb0JvZHkoTmV3VmFsMSk7XHJcblxyXG4gICAgdGhpcy5mZXRjaE1lbnUob2JqZWN0LCB0aGlzLmhhbmRsZUZldGNoZWRQYW5lbEJhcik7XHJcbiAgfVxyXG59XHJcblxyXG5cclxuXHJcbiAgcHVibGljIGhhbmRsZUZldGNoZWRQYW5lbEJhcihvYmplY3Q6YW55LCBkYXRhOmFueSwgc2hvd0VtcHR5OmFueSkge1xyXG4gICAgZnVuY3Rpb24gY2hlY2tBdXRoRGF0YShyb3V0aW5lX25hbWU6YW55LCBhdXRoRGF0YTphbnkpIHtcclxuICAgICAgbGV0IGkgPSAwO1xyXG4gICAgICBsZXQgcm91dGluZUF1dGg7XHJcbiAgICAgIHdoaWxlIChpIDwgYXV0aERhdGEubGVuZ3RoKSB7XHJcbiAgICAgICAgaWYgKGF1dGhEYXRhW2ldLlJPVVRJTkVfTkFNRSA9PSByb3V0aW5lX25hbWUpIHtcclxuICAgICAgICAgIHJvdXRpbmVBdXRoID0gYXV0aERhdGFbaV07XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICAgICAgaSsrO1xyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiByb3V0aW5lQXV0aDtcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIGZvcm1hdERhdGEoYXJyOmFueSwgYXV0aERhdGE6YW55LCBzaG93RW1wdHk6YW55KSB7XHJcbiAgICAgIGxldCBtZW51OmFueSA9IFtdO1xyXG4gICAgICBsZXQgaXRlbXM6YW55ID0gW107XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFyci5sZW5ndGg7IGkrKykge1xyXG4gICAgICBpZiAob2JqZWN0LnBhcmFtQ29uZmlnLkRFQlVHX0ZMQUcpIGNvbnNvbGUubG9nKFwiYXJyW2ldOlwiLCBhcnJbaV0pO1xyXG4gICAgICBsZXQgdHlwZSA9IGFycltpXS5jaG9pY2VfdHlwZS5jaGFyQXQoMCk7XHJcbiAgICAgIGlmICh0eXBlID09IFwiTVwiKSB7XHJcbiAgICAgICAgaWYgKGl0ZW1zLmxlbmd0aCAhPSAwKSB7XHJcbiAgICAgICAgICBsZXQgaXRlbSA9IHtcclxuICAgICAgICAgICAgdGV4dDogbWVudUl0ZW0udGV4dCxcclxuICAgICAgICAgICAgY2hvaWNlOiBtZW51SXRlbS5jaG9pY2UsXHJcbiAgICAgICAgICAgIGl0ZW1zOiBpdGVtc1xyXG4gICAgICAgICAgfTtcclxuICAgICAgICAgIG1lbnUucHVzaChpdGVtKTtcclxuICAgICAgICAgIGl0ZW1zID0gW107XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciBtZW51SXRlbTphbnkgPSB7XHJcbiAgICAgICAgICB0ZXh0OiBhcnJbaV0udGV4dCxcclxuICAgICAgICAgIGNob2ljZTogYXJyW2ldLmNob2ljZVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgLy9tZW51LnB1c2goaXRlbSk7XHJcbiAgICAgIH1cclxuICAgICAgZWxzZSBpZiAodHlwZSA9PSBcIlJcIikge1xyXG4gICAgICAgIGlmIChvYmplY3QucGFyYW1Db25maWcuREVCVUdfRkxBRykgY29uc29sZS5sb2coXCJhdXRoRGF0YTpcIiwgYXV0aERhdGEsIFwiYXJyW2ldOlwiLCBhcnJbaV0pO1xyXG4gICAgICAgIGxldCByb3V0aW5lQXV0aCA9IGNoZWNrQXV0aERhdGEoYXJyW2ldLmNob2ljZSwgYXV0aERhdGEpO1xyXG4gICAgICAgIGlmICh0eXBlb2Ygcm91dGluZUF1dGggIT09IFwidW5kZWZpbmVkXCIpIHtcclxuICAgICAgICAgIGlmIChvYmplY3QucGFyYW1Db25maWcuREVCVUdfRkxBRykgY29uc29sZS5sb2coXCJhcnJbaV0uY2hvaWNlOlwiICsgYXJyW2ldLmNob2ljZSArIFwiICByb3V0aW5lQXV0aC5ESVNQX0ZMQUc6XCIgKyByb3V0aW5lQXV0aC5ESVNQX0ZMQUcgKyBcIiByb3V0aW5lQXV0aC5BVVRITEVWRUwgOlwiICsgcm91dGluZUF1dGguQVVUSExFVkVMKVxyXG4gICAgICAgICAgaWYgKHJvdXRpbmVBdXRoLkRJU1BfRkxBRyAhPSBcIk5cIikgLy8gJiYgKHJvdXRpbmVBdXRoLkFVVEhMRVZFTCAhPSAwKSApXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIGxldCByb3V0aW5lSXRlbSA9IHtcclxuICAgICAgICAgICAgICB0ZXh0OiBhcnJbaV0udGV4dCxcclxuICAgICAgICAgICAgICBjaG9pY2U6IGFycltpXS5jaG9pY2UsXHJcbiAgICAgICAgICAgICAgYXV0aExldmVsOiByb3V0aW5lQXV0aC5BVVRITEVWRUwsXHJcbiAgICAgICAgICAgICAgcm91dGluZURlc2M6IHJvdXRpbmVBdXRoLlJPVVRJTkVfREVTQyxcclxuICAgICAgICAgICAgICByb3V0aW5lVmVyOiByb3V0aW5lQXV0aC5ST1VUX1ZFUixcclxuICAgICAgICAgICAgICByb3V0ZXJMaW5rOiBcIi9cIiArIGFycltpXS5jaG9pY2VcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgaXRlbXMucHVzaChyb3V0aW5lSXRlbSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChvYmplY3QucGFyYW1Db25maWcuREVCVUdfRkxBRykgY29uc29sZS5sb2coXCItLS1pdGVtczpcIiwgaXRlbXMpO1xyXG4gICAgICAgIFxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBpZiAoaXRlbXMubGVuZ3RoICE9IDApIHtcclxuICAgICAgbGV0IGl0ZW0gPSB7XHJcbiAgICAgICAgdGV4dDogbWVudUl0ZW0udGV4dCxcclxuICAgICAgICBjaG9pY2U6IG1lbnVJdGVtLmNob2ljZSxcclxuICAgICAgICBpdGVtczogaXRlbXNcclxuICAgICAgfTtcclxuICAgICAgbWVudS5wdXNoKGl0ZW0pO1xyXG4gICAgICBpdGVtcyA9IFtdO1xyXG4gICAgfVxyXG4gICAgZWxzZSBpZiAoc2hvd0VtcHR5ICYmICh0eXBlb2YgbWVudUl0ZW0gIT09IFwidW5kZWZpbmVkXCIpKXtcclxuICAgICAgbGV0IGl0ZW0gPSB7XHJcbiAgICAgICAgdGV4dDogbWVudUl0ZW0udGV4dCxcclxuICAgICAgICBjaG9pY2U6IG1lbnVJdGVtLmNob2ljZSxcclxuICAgICAgICBpdGVtczogW11cclxuICAgICAgfTtcclxuICAgICAgbWVudS5wdXNoKGl0ZW0pO1xyXG4gICAgXHJcbiAgICB9XHJcblxyXG4gICAgICByZXR1cm4gbWVudTtcclxufVxyXG4gIG9iamVjdC5tZW51ID0gZm9ybWF0RGF0YShkYXRhWzBdLmRhdGEsIGRhdGFbMV0uZGF0YSwgc2hvd0VtcHR5KTtcclxuXHJcbiAgb2JqZWN0LnBhbmVsSXRlbXMgPSBvYmplY3QubWVudTtcclxub2JqZWN0Lm1lbnVJdGVtc0hvcml6ID0gb2JqZWN0Lm1lbnU7XHJcbiAgbGV0IHBhcmFtQ29uZmlnID0ge1xyXG4gICAgXCJOYW1lXCI6IFwibWVudVwiLFxyXG4gICAgXCJWYWxcIjogb2JqZWN0Lm1lbnVcclxuICB9O1xyXG4gIHNldFBhcmFtQ29uZmlnKHBhcmFtQ29uZmlnKTtcclxuXHJcblxyXG59XHJcblxyXG5wdWJsaWMgIHNsZWVwKG1zOmFueSkge1xyXG4gIHJldHVybiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHNldFRpbWVvdXQocmVzb2x2ZSwgbXMpKTtcclxufVxyXG4gIHByaXZhdGUgY29tbWl0Qm9keTphbnkgPSBbXTtcclxucHVibGljIGluVHJhbnMgPSBmYWxzZTtcclxuICBwdWJsaWMgaXNQaG9uZVBvcnRyYWl0ID0gZmFsc2U7XHJcbnByaXZhdGUgQm9keTphbnkgPSBbXTtcclxucHVibGljIGNvbW1pdENvbW1hbmRzID0gWydJTlNFUlQnLCAnVVBEQVRFJywgJ0RFTEVURSddO1xyXG5cclxuICBwdWJsaWMgYmVnaW5UcmFucygpIHtcclxuICAgIHRoaXMuY29tbWl0Qm9keSA9IFtdO1xyXG4gIHRoaXMuaW5UcmFucyA9IHRydWU7XHJcblxyXG59XHJcbiAgcHVibGljIGVuZFRyYW5zKG9iamVjdDphbnksIGNvbW1pdDphbnkpIHtcclxuICBsZXQgUGFnZSA9IFwiJl90cmFucz1ZXCI7XHJcbiAgICBsZXQgdGFibGVJbmZvOmFueTtcclxuICAgIGlmIChjb21taXQgJiYgdGhpcy5jb21taXRCb2R5Lmxlbmd0aCAhPSAwKSB7XHJcbiAgICByZXR1cm4gbmV3IFByb21pc2UocmVzb2x2ZSA9PiB7XHJcbiAgICAgIHRoaXMucG9zdCh0aGlzLCBQYWdlLCB0aGlzLmNvbW1pdEJvZHkpLnN1YnNjcmliZShyZXN1bHQgPT4ge1xyXG4gICAgICAgICAgdGhpcy5jb21taXRCb2R5ID0gW107XHJcbiAgICAgICAgdGhpcy5pblRyYW5zID0gZmFsc2U7XHJcblxyXG4gICAgICAgIHRhYmxlSW5mbyA9IHJlc3VsdC5kYXRhWzBdLmRhdGE7XHJcbiAgICAgICAgcmV0dXJuIHJlc29sdmUodGFibGVJbmZvKTtcclxuICAgICAgfSxcclxuICAgICAgICBlcnIgPT4ge1xyXG4gICAgICAgICAgb2JqZWN0LkZPUk1fVFJJR0dFUl9GQUlMVVJFID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy5jb21taXRCb2R5ID0gW107XHJcbiAgICAgICAgICB0aGlzLmluVHJhbnMgPSBmYWxzZTtcclxuICAgICAgICAgIC8vYWxlcnQoJ2Vycm9yOicgKyBlcnIubWVzc2FnZSk7XHJcbiAgICAgICAgICB0aGlzLnNob3dFcnJvck1zZyhvYmplY3QsIGVycik7XHJcbiAgICAgICAgICByZXR1cm4gcmVzb2x2ZSh0YWJsZUluZm8pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfSk7XHJcbiAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgIHRoaXMuY29tbWl0Qm9keSA9IFtdO1xyXG4gICAgdGhpcy5pblRyYW5zID0gZmFsc2U7XHJcbiAgICAgIHJldHVybiBudWxsO1xyXG4gIH1cclxuXHJcblxyXG59XHJcbi8vIHB1YmxpYyBhZGRUb0JvZHkoTmV3VmFsKSB7XHJcbi8vICAgdGhpcy5Cb2R5LnB1c2goTmV3VmFsKTtcclxuLy8gfVxyXG4gIHB1YmxpYyBleGVjU1FMQm9keShvYmplY3Q6YW55LCBCb2R5OmFueSxEQkxvYzphbnkpIHtcclxuICBmdW5jdGlvbiBnZXRGaXJzdFdvcmQoc3RyOmFueSkge1xyXG4gICAgbGV0IG15QXJyYXkgPSBzdHIuc3BsaXQoXCJfXCIpO1xyXG4gICAgcmV0dXJuIG15QXJyYXlbMF07XHJcbiAgfVxyXG4gIFxyXG4gIG9iamVjdC5GT1JNX1RSSUdHRVJfRkFJTFVSRSA9IGZhbHNlO1xyXG4gIGxldCBQYWdlID0gXCImX3RyYW5zPU5cIjtcclxuICBpZiAoREJMb2MgIT0gXCJcIilcclxuICAgIFBhZ2UgPSBQYWdlICsgXCImREJMb2M9XCIgKyBEQkxvYztcclxuICBsZXQgdGFibGVJbmZvOmFueTtcclxuXHJcbiAgb2JqZWN0Lk5PVEZPVU5EID0gZmFsc2U7XHJcbiAgaWYgKHRoaXMuaW5UcmFucykge1xyXG4gICAgbGV0IGZpcnN0V29yZCA9IGdldEZpcnN0V29yZChCb2R5WzBdLl9RVUVSWSkudG9VcHBlckNhc2UoKTtcclxuICAgIFxyXG4gICAgbGV0IGlzQ29tbWl0Q29tbWFuZCA9IHRoaXMuY29tbWl0Q29tbWFuZHMuaW5jbHVkZXMoZmlyc3RXb3JkKTtcclxuICAgIGlmIChpc0NvbW1pdENvbW1hbmQpIHtcclxuICAgICAgdGhpcy5jb21taXRCb2R5LnB1c2goQm9keVswXSk7XHJcbiAgICAgIHJldHVybiB0YWJsZUluZm87XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZXR1cm4gbmV3IFByb21pc2UocmVzb2x2ZSA9PiB7XHJcbiAgICAvL2NvbnNvbGUubG9nIChcImNoZWNrOmRpcnR5IHRlc3R4IGV4ZWNTUUxCb2R5IDJcIik7XHJcbiAgICB0aGlzLnBvc3QodGhpcywgUGFnZSwgQm9keSkuc3Vic2NyaWJlKHJlc3VsdCA9PiB7XHJcbiAgICAgIC8vY29uc29sZS5sb2cgKFwiY2hlY2s6ZGlydHkgdGVzdHggZXhlY1NRTEJvZHkgM1wiKTtcclxuICAgICAgdGFibGVJbmZvID0gcmVzdWx0LmRhdGE7XHJcbiAgICAgIC8vIGlmIChyZXN1bHQuZGF0YS5sZW5ndGggPT0gMClcclxuICAgICAgLy8gICBvYmplY3QuTk9URk9VTkQgPSB0cnVlO1xyXG4gICAgICByZXR1cm4gcmVzb2x2ZSh0YWJsZUluZm8pO1xyXG4gICAgfSxcclxuICAgICAgZXJyID0+IHtcclxuICAgICAgICBvYmplY3QuRk9STV9UUklHR0VSX0ZBSUxVUkUgPSB0cnVlO1xyXG4gICAgICAgIGFsZXJ0KCdlcnJvcjonICsgZXJyLm1lc3NhZ2UpO1xyXG4gICAgICAgIHJldHVybiByZXNvbHZlKHRhYmxlSW5mbyk7XHJcbiAgICAgIH0pO1xyXG4gIH0pO1xyXG5cclxuXHJcbn1cclxuICBwdWJsaWMgZXhlY1NRTChvYmplY3Q6YW55LCBzcWxTdG10OmFueSkge1xyXG4gICAgZnVuY3Rpb24gZ2V0Rmlyc3RXb3JkKHN0cjphbnkpIHtcclxuICAgICAgbGV0IHNwYWNlSW5kZXggPSBzdHIudHJpbSgpLmluZGV4T2YoJyAnKTtcclxuICAgIHJldHVybiBzcGFjZUluZGV4ID09PSAtMSA/IHN0ciA6IHN0ci5zdWJzdHIoMCwgc3BhY2VJbmRleCk7XHJcbiAgfVxyXG5cclxuICBvYmplY3QuRk9STV9UUklHR0VSX0ZBSUxVUkUgPSBmYWxzZTtcclxuICBsZXQgUGFnZSA9IFwiJl90cmFucz1OXCI7XHJcbiAgdGhpcy5Cb2R5ID0gW107XHJcbiAgICBsZXQgTmV3VmFsOmFueSA9IHt9O1xyXG4gIE5ld1ZhbFtcIl9RVUVSWVwiXSA9IFwiRVhFQ1NRTFwiO1xyXG4gIE5ld1ZhbFtcIl9TVE1UXCJdID0gc3FsU3RtdDtcclxuICAgIGxldCB0YWJsZUluZm86YW55O1xyXG5cclxuICBvYmplY3QuTk9URk9VTkQgPSBmYWxzZTtcclxuICBpZiAodGhpcy5pblRyYW5zKSB7XHJcbiAgICBsZXQgZmlyc3RXb3JkID0gZ2V0Rmlyc3RXb3JkKHNxbFN0bXQpLnRvVXBwZXJDYXNlKCk7XHJcbiAgICBcclxuICAgIGxldCBpc0NvbW1pdENvbW1hbmQgPSB0aGlzLmNvbW1pdENvbW1hbmRzLmluY2x1ZGVzKGZpcnN0V29yZCk7XHJcbiAgICBpZiAoaXNDb21taXRDb21tYW5kKSB7XHJcbiAgICAgIHRoaXMuY29tbWl0Qm9keS5wdXNoKE5ld1ZhbCk7XHJcbiAgICAgIHJldHVybiB0YWJsZUluZm87XHJcbiAgICB9XHJcbiAgfVxyXG4gIHRoaXMuQm9keSA9IHRoaXMuYWRkVG9Cb2R5KE5ld1ZhbCwgdGhpcy5Cb2R5KTtcclxuXHJcbiAgcmV0dXJuIG5ldyBQcm9taXNlKHJlc29sdmUgPT4ge1xyXG4gICAgdGhpcy5wb3N0KHRoaXMsIFBhZ2UsIHRoaXMuQm9keSkuc3Vic2NyaWJlKHJlc3VsdCA9PiB7XHJcbiAgICAgIHRoaXMuQm9keSA9IFtdO1xyXG4gICAgICB0YWJsZUluZm8gPSByZXN1bHQuZGF0YVswXS5kYXRhO1xyXG4gICAgICBpZiAocmVzdWx0LmRhdGFbMF0ucm93Q291bnQgPT0gMClcclxuICAgICAgICBvYmplY3QuTk9URk9VTkQgPSB0cnVlO1xyXG4gICAgICByZXR1cm4gcmVzb2x2ZSh0YWJsZUluZm8pO1xyXG4gICAgfSxcclxuICAgICAgZXJyID0+IHtcclxuICAgICAgICBvYmplY3QuRk9STV9UUklHR0VSX0ZBSUxVUkUgPSB0cnVlO1xyXG4gICAgICAgIGFsZXJ0KCdlcnJvcjonICsgZXJyLm1lc3NhZ2UpO1xyXG4gICAgICAgIHJldHVybiByZXNvbHZlKHRhYmxlSW5mbyk7XHJcbiAgICAgIH0pO1xyXG4gIH0pO1xyXG59XHJcblxyXG5cclxuLy8vLy8vLy9cclxuIFxyXG5wdWJsaWMgYXR0X2ltZ19nZXRGaWxlTGluayhmaWVsZF9kYXRhLG9iamVjdCkge1xyXG4gIGxldCBmaWxlTGluazphbnkgPSBcIlwiO1xyXG4gIGlmIChmaWVsZF9kYXRhID09IG51bGwpXHJcbiAgICByZXR1cm4gZmlsZUxpbms7XHJcbiAgZmllbGRfZGF0YSA9IGZpZWxkX2RhdGEudHJpbSgpO1xyXG4gIHRyeSB7XHJcbiAgICBmaWVsZF9kYXRhID0gSlNPTi5wYXJzZShmaWVsZF9kYXRhKTtcclxuICB9IGNhdGNoIChlKSB7XHJcbiAgICAgIC8vY29uc29sZS5sb2cgKFwiRXJyb3IgcGFyc2luZyA6XCIsZmllbGRfZGF0YSk7XHJcbiAgICAgIHJldHVybiBmaWxlTGluaztcclxuICB9XHJcbiAgICAvL2NvbnNvbGUubG9nKFwiZ2V0RmlsZUxpbms6ZmllbGRfZGF0YTpcIiwgZmllbGRfZGF0YSwgdHlwZW9mIGZpZWxkX2RhdGEpICAgIFxyXG4gICAgLy9jb25zb2xlLmxvZyhcImdldEZpbGVMaW5rOmZpZWxkX2RhdGE6XCIsIGZpZWxkX2RhdGEpXHJcbiAgICBpZiAodHlwZW9mIGZpZWxkX2RhdGEgPT0gXCJvYmplY3RcIilcclxuICAgICAgZmlsZUxpbmsgPSBvYmplY3QuQXR0RHduVXJsICsgZW5jb2RlVVJJKGZpZWxkX2RhdGFbMF0ubmFtZSk7XHJcbiAgICAvL2NvbnNvbGUubG9nKFwiZ2V0RmlsZUxpbms6ZmlsZUxpbms6XCIsIGZpbGVMaW5rKVxyXG4gIHJldHVybiBmaWxlTGluaztcclxufVxyXG5wdWJsaWMgYXR0X2ltZ19nZXRBdHQoZGF0YTphbnksb2JqZWN0OmFueSkge1xyXG4gIGxldCBhdHRzID0gXCJcIjtcclxuIC8vIGNvbnNvbGUubG9nKFwiZ2V0QXR0X2RhdGE6XCIsIGRhdGEpO1xyXG4gICAgbGV0IHZhbHMgPVxyXG4gICAgICBbe25hbWU6XCJcIixcclxuICAgICAgc2l6ZTpcIlwifVxyXG4gICAgICBdO1xyXG4gIHRyeSB7XHJcbiAgICB2YWxzID0gSlNPTi5wYXJzZShkYXRhKTtcclxuICB9IGNhdGNoIChlKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nIChcIkVycm9yIHBhcnNpbmcgOjM6XCIsZGF0YSk7XHJcbiAgICAgIHJldHVybiBhdHRzO1xyXG4gIH1cclxuICAvL2lmICgoZGF0YSAhPSBcIlwiKSAmJiAoZGF0YSAhPSBcIltdXCIpICYmIChkYXRhICE9IG51bGwpKSB7XHJcbiAgICAvL3ZhbHMgPSBKU09OLnBhcnNlKGRhdGEpO1xyXG4gICAgY29uc29sZS5sb2coXCJnZXRBdHRfZGF0YTpcIiwgdmFscywgdHlwZW9mIHZhbHMpO1xyXG4gICAgaWYgKHR5cGVvZiB2YWxzID09IFwib2JqZWN0XCIpe1xyXG4gICAgICB2YWxzLmZvckVhY2godmFsID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcInZhbDpcIiwgdmFsKVxyXG4gICAgICAgIGF0dHMgPSBhdHRzICsgXCI8XCIgKyB2YWwubmFtZSArIFwiIFNpemU6XCIgKyB2YWwuc2l6ZSArIFwiPlwiO1xyXG4gICAgICB9KVxyXG4gICAgfVxyXG4gIC8vfVxyXG4gIGNvbnNvbGUubG9nKFwiYXR0czpcIiwgYXR0cylcclxuICByZXR1cm4gYXR0cztcclxufVxyXG5wdWJsaWMgYXR0X2ltZ19wb3B1bGF0ZUFycnMoZm9ybUdyb3VwOmFueSxvYmplY3Q6YW55KXtcclxuICAvL2NvbnNvbGUubG9nKFwiYXR0X2ltZ19wb3B1bGF0ZUFycnM6Zm9ybUdyb3VwOlwiLCBmb3JtR3JvdXAsIG9iamVjdC5hdHRfYXJyLCBvYmplY3QuaW1nX2FycilcclxuICBmb3IgKGxldCBpID0gMDsgaSA8IG9iamVjdC5hdHRfYXJyLmxlbmd0aDsgaSsrKSB7XHJcbiAgICBpZiAoZm9ybUdyb3VwW29iamVjdC5hdHRfYXJyW2ldXS50cmltKCkgIT0gXCJcIikge1xyXG4gICAgICB0cnkge1xyXG4gICAgICAgIG9iamVjdC5teUZpbGVzW29iamVjdC5hdHRfYXJyW2ldXSA9IEpTT04ucGFyc2UoZm9ybUdyb3VwW29iamVjdC5hdHRfYXJyW2ldXSk7XHJcbiAgICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICAgIC8vY29uc29sZS5sb2cgKFwiRXJyb3IgcGFyc2luZyA6XCIsZmllbGRfZGF0YSk7XHJcbiAgICAgICAgICByZXR1cm4gO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgb2JqZWN0LmltZ19hcnIubGVuZ3RoOyBpKyspIHtcclxuICAgIGlmIChmb3JtR3JvdXBbb2JqZWN0LmltZ19hcnJbaV1dICE9IG51bGwpe1xyXG4gICAgICBpZiAoZm9ybUdyb3VwW29iamVjdC5pbWdfYXJyW2ldXS50cmltKCkgIT0gXCJcIikgb2JqZWN0Lm15RmlsZXNbb2JqZWN0LmltZ19hcnJbaV1dID0gSlNPTi5wYXJzZShmb3JtR3JvdXBbb2JqZWN0LmltZ19hcnJbaV1dKTtcclxuICAgIH1cclxuICB9XHJcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBvYmplY3QuYXR0X2Fyci5sZW5ndGg7IGkrKykge1xyXG4gICAgLy9jb25zb2xlLmxvZyhcIm9iamVjdC5hdHRfYXJyW2ldOlwiLCBvYmplY3QuYXR0X2FycltpXSlcclxuICAgIGlmIChmb3JtR3JvdXBbb2JqZWN0LmF0dF9hcnJbaV1dICE9IFwiXCIpIHtcclxuICAgICAgbGV0IGl0ZW1zMTphbnkgPVtdO1xyXG4gICAgICBsZXQgZmllbGRfZGF0YSA9IGZvcm1Hcm91cFtvYmplY3QuYXR0X2FycltpXV07XHJcblxyXG4gICAgICB0cnkge1xyXG4gICAgICAgIGZpZWxkX2RhdGEgPSBKU09OLnBhcnNlKGZpZWxkX2RhdGEpO1xyXG4gICAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyAoXCJFcnJvciBwYXJzaW5nIDo0OlwiLGZpZWxkX2RhdGEpO1xyXG4gICAgICAgICAgZmllbGRfZGF0YSA9IG51bGw7XHJcbiAgICAgICAgICAvL3JldHVybiBhdHRzO1xyXG4gICAgICB9XHJcbiAgICAgIC8vZmllbGRfZGF0YSA9IEpTT04ucGFyc2UoZmllbGRfZGF0YSk7XHJcbiAgICAgIGlmIChmaWVsZF9kYXRhICE9IG51bGwpe1xyXG4gICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgZmllbGRfZGF0YS5sZW5ndGg7IGorKykge1xyXG4gICAgICAgICAgbGV0IGl0ZW0gPVxyXG4gICAgICAgICAgICB7IHRpdGxlOiBmaWVsZF9kYXRhW2pdLm5hbWUsIHVybDogb2JqZWN0LkF0dER3blVybCArIGVuY29kZVVSSShmaWVsZF9kYXRhW2pdLm5hbWUpIH1cclxuICAgICAgICAgIGl0ZW1zMS5wdXNoKGl0ZW0pO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICBvYmplY3QuaW1nX2dhbGxlcnlbb2JqZWN0LmF0dF9hcnJbaV1dID0gaXRlbXMxO1xyXG4gICAgfVxyXG4gICAgLy9jb25zb2xlLmxvZyhcImltZ19nYWxsZXJ5OlwiLCBvYmplY3QuaW1nX2dhbGxlcnkpXHJcbiAgfVxyXG4gICBmb3IgKGxldCBpID0gMDsgaSA8IG9iamVjdC5zdmdfYXJyLmxlbmd0aDsgaSsrKXtcclxuICAgICAgXHJcbiAgICAgIGxldCBzdmdWYWwgPSBmb3JtR3JvdXBbb2JqZWN0LnN2Z19hcnJbaV1dO1xyXG4gICAgICBjb25zb2xlLmxvZyhcInN2Z19hcnJbaV06XCIsIG9iamVjdC5zdmdfYXJyW2ldLCBzdmdWYWwpXHJcbiAgICAgIHN2Z1ZhbCA9IHRoaXMuY29udmVydFN2Z1RvS2VuZG9TVkdJY29uICh0aGlzLCBzdmdWYWwsIG51bGwsb2JqZWN0LnN2Z19hcnJbaV0pXHJcbiAgICAgIGNvbnNvbGUubG9nKFwic3ZnX2FycltpXTpuZXc6XCIsICBzdmdWYWwpXHJcbiAgICAgIGZvcm1Hcm91cFtvYmplY3Quc3ZnX2FycltpXSArIFwiX1NWR1wiXSA9IHN2Z1ZhbDtcclxuICAgICAgIFxyXG4gICAgfVxyXG59XHJcbnB1YmxpYyBjb252VG9TdHJpbmcodmFsKXtcclxuICByZXR1cm4gU3RyaW5nKHZhbClcclxuIH1cclxuXHJcbnB1YmxpYyBhdHRfaW1nX3BvcHVsYXRlQXJyc0xpc3QoZm9ybUdyb3VwQXJyOmFueSxvYmplY3Q6YW55KXtcclxuICAvL2NvbnNvbGUubG9nKFwiYXR0X2ltZ19wb3B1bGF0ZUFycnM6Zm9ybUdyb3VwOlwiLCBmb3JtR3JvdXBBcnIsIG9iamVjdC5hdHRfYXJyLCBvYmplY3QuaW1nX2FycilcclxuICBmb3IgKGxldCBrID0gMDsgayA8IGZvcm1Hcm91cEFyci5sZW5ndGg7IGsrKykge1xyXG4gIGxldCBmb3JtR3JvdXAgPSBmb3JtR3JvdXBBcnJba107XHJcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBvYmplY3QuYXR0X2Fyci5sZW5ndGg7IGkrKykge1xyXG4gICAgLy9jb25zb2xlLmxvZyhcImF0dF9pbWdfcG9wdWxhdGVBcnJzOm9iamVjdC5hdHRfYXJyW2ldOlwiLCBvYmplY3QuYXR0X2FycltpXSxmb3JtR3JvdXAgLCBmb3JtR3JvdXBbb2JqZWN0LmF0dF9hcnJbaV1dKVxyXG4gICAgLy9jb25zb2xlLmxvZyhcImF0dF9pbWdfcG9wdWxhdGVBcnJzOmZvcm1Hcm91cFtvYmplY3QuYXR0X2FycltpXV06XCIrZm9ybUdyb3VwW29iamVjdC5hdHRfYXJyW2ldXS50cmltKCkgK1wiOlwiICApXHJcbiAgICBpZiAoZm9ybUdyb3VwW29iamVjdC5hdHRfYXJyW2ldXS50cmltKCkgIT0gXCJcIikgb2JqZWN0Lm15RmlsZXNbb2JqZWN0LmF0dF9hcnJbaV1dID0gSlNPTi5wYXJzZShmb3JtR3JvdXBbb2JqZWN0LmF0dF9hcnJbaV1dKTtcclxuICB9XHJcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBvYmplY3QuaW1nX2Fyci5sZW5ndGg7IGkrKykge1xyXG4gICAgaWYgKGZvcm1Hcm91cFtvYmplY3QuaW1nX2FycltpXV0gIT0gXCJcIikgb2JqZWN0Lm15RmlsZXNbb2JqZWN0LmltZ19hcnJbaV1dID0gSlNPTi5wYXJzZShmb3JtR3JvdXBbb2JqZWN0LmltZ19hcnJbaV1dKTtcclxuICB9XHJcbiAgLy9jb25zb2xlLmxvZyhcImF0dF9pbWdfcG9wdWxhdGVBcnJzOm9iamVjdC5teUZpbGVzOms6XCIsIGssb2JqZWN0Lm15RmlsZXMsIG9iamVjdC5hdHRfYXJyIClcclxuICBmb3IgKGxldCBpID0gMDsgaSA8IG9iamVjdC5hdHRfYXJyLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAvL2NvbnNvbGUubG9nKFwiYXR0X2ltZ19wb3B1bGF0ZUFycnM6b2JqZWN0LmF0dF9hcnJbaV06XCIsIG9iamVjdC5hdHRfYXJyW2ldLCBmb3JtR3JvdXBbb2JqZWN0LmF0dF9hcnJbaV1dKVxyXG4gICAgLy9jb25zb2xlLmxvZyhcImF0dF9pbWdfcG9wdWxhdGVBcnJzOm9iamVjdC5hdHRfYXJyW2ldOlwiKyBmb3JtR3JvdXBbb2JqZWN0LmF0dF9hcnJbaV1dICsgXCI6XCIpXHJcbiAgICBsZXQgYXJyVmFsID0gZm9ybUdyb3VwW29iamVjdC5hdHRfYXJyW2ldXTtcclxuICAgIGFyclZhbCA9IGFyclZhbC50cmltKCk7XHJcbiAgICBpZiAoICBhcnJWYWwgIT0gXCJcIikge1xyXG4gICAgICBsZXQgaXRlbXMxOmFueSA9W107XHJcbiAgICAgIGxldCBmaWVsZF9kYXRhID0gZm9ybUdyb3VwW29iamVjdC5hdHRfYXJyW2ldXTtcclxuICAgICAgZmllbGRfZGF0YSA9IEpTT04ucGFyc2UoZmllbGRfZGF0YSk7XHJcbiAgICAgIGlmIChmaWVsZF9kYXRhICE9IG51bGwpe1xyXG4gICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgZmllbGRfZGF0YS5sZW5ndGg7IGorKykge1xyXG4gICAgICAgICAgbGV0IGl0ZW0gPVxyXG4gICAgICAgICAgICB7IHRpdGxlOiBmaWVsZF9kYXRhW2pdLm5hbWUsIHVybDogb2JqZWN0LkF0dER3blVybCArIGVuY29kZVVSSShmaWVsZF9kYXRhW2pdLm5hbWUpIH1cclxuICAgICAgICAgIGl0ZW1zMS5wdXNoKGl0ZW0pO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICAvL2NvbnNvbGUubG9nKFwiYXR0X2ltZ19wb3B1bGF0ZUFycnM6aW1nX2dhbGxlcnk6azpcIiwgayxvYmplY3QuYXR0X2FycltpXSwgIGl0ZW1zMSlcclxuICAgICAgbGV0IGltZ19nYWxsZXJ5ID1bXTtcclxuICAgICAgaW1nX2dhbGxlcnlbb2JqZWN0LmF0dF9hcnJbaV1dID0gaXRlbXMxO1xyXG4gICAgICBvYmplY3QuaW1nX2dhbGxlcnlba10gPSBpbWdfZ2FsbGVyeTtcclxuICAgIH1cclxuICAgIGVsc2V7XHJcbiAgICAgIGxldCBpbWdfZ2FsbGVyeSA9W107XHJcbiAgICAgIGltZ19nYWxsZXJ5W29iamVjdC5hdHRfYXJyW2ldXSA9IFtdO1xyXG4gICAgICBvYmplY3QuaW1nX2dhbGxlcnlba10gPSBpbWdfZ2FsbGVyeTtcclxuICAgIH1cclxuICB9XHJcbiAgICAvL2NvbnNvbGUubG9nKFwiYXR0X2ltZ19wb3B1bGF0ZUFycnM6aW1nX2dhbGxlcnk6XCIsIG9iamVjdC5pbWdfZ2FsbGVyeSlcclxuICAgXHJcbiAgfVxyXG4gXHJcbn1cclxucHVibGljIGF0dF93ZWJjYW1fZm9ybV9vcGVuVXBsb2FkaW1hZ2UoZmllbGRfaWQ6YW55LG9iamVjdDphbnkpIHtcclxuICAvL29iamVjdC51cGxvYWRpbWFnZSA9IHRydWU7XHJcbiAgLy9jb25zb2xlLmxvZyhcIm9wZW5VcGxvYWRpbWFnZTpmaWVsZF9pZDpcIiwgZmllbGRfaWQsIG9iamVjdC5teUZpbGVzLCBvYmplY3QubXlGaWxlc1tmaWVsZF9pZF0pXHJcbiAgbGV0IG15RmlsZXMgPSBbXTtcclxuICBpZiAodHlwZW9mIG9iamVjdC5teUZpbGVzW2ZpZWxkX2lkXSAhPSBcInVuZGVmaW5lZFwiKSB7XHJcbiAgICBteUZpbGVzID0gb2JqZWN0Lm15RmlsZXNbZmllbGRfaWRdO1xyXG4gIH1cclxuICBsZXQgZmlsZXNEZWxldGVkID0gW107XHJcbiAgaWYgKHR5cGVvZiBvYmplY3QuZmlsZXNEZWxldGVkW2ZpZWxkX2lkXSAhPSBcInVuZGVmaW5lZFwiKSB7XHJcbiAgICBmaWxlc0RlbGV0ZWQgPSBvYmplY3QuZmlsZXNEZWxldGVkW2ZpZWxkX2lkXTtcclxuICB9XHJcbiAgbGV0IGhpZGVPdGhlcnMgPSBmYWxzZTtcclxuICBpZiAodHlwZW9mIG9iamVjdC5kaXNhYmxlVXBsb2FkICE9IFwidW5kZWZpbmVkXCIpIHtcclxuICAgIGhpZGVPdGhlcnMgPSBvYmplY3QuZGlzYWJsZVVwbG9hZDtcclxuICB9XHJcbiAgbGV0IGltYWdlSUQgPSBmaWVsZF9pZDtcclxuICB2YXIgbWFzdGVyUGFyYW1zID0ge1xyXG4gICAgXCJhY3Rpb25cIjogXCJ1cGxvYWRcIixcclxuICAgIFwiaW1hZ2VJRFwiOiBpbWFnZUlELFxyXG4gICAgXCJteUZpbGVzXCI6IG15RmlsZXMsXHJcbiAgICBcImZpbGVzRGVsZXRlZFwiOiBmaWxlc0RlbGV0ZWQsXHJcbiAgICBcImhpZGVPdGhlcnNcIiA6IGhpZGVPdGhlcnNcclxuICB9XHJcblxyXG5cclxuICBvYmplY3QuRFNQX1dFQkNBTUNvbmZpZyA9IG5ldyBjb21wb25lbnRDb25maWdEZWYoKVxyXG4gIG9iamVjdC5EU1BfV0VCQ0FNQ29uZmlnLm1hc3RlclBhcmFtcyA9IG1hc3RlclBhcmFtc1xyXG4gIC8vY29uc29sZS5sb2coXCJvYmplY3QuRFNQX1dFQkNBTUNvbmZpZy5tYXN0ZXJQYXJhbXM6XCIsIG9iamVjdC5EU1BfV0VCQ0FNQ29uZmlnLm1hc3RlclBhcmFtcylcclxufVxyXG5cclxucHVibGljIGF0dF9pbWdfZm9ybV9vcGVuVXBsb2FkaW1hZ2UoZmllbGRfaWQ6YW55LG9iamVjdDphbnkpIHtcclxuICAvL29iamVjdC51cGxvYWRpbWFnZSA9IHRydWU7XHJcbiAgY29uc29sZS5sb2coXCJvcGVuVXBsb2FkaW1hZ2U6ZmllbGRfaWQ6XCIsIGZpZWxkX2lkLCBvYmplY3QubXlGaWxlcywgb2JqZWN0Lm15RmlsZXNbZmllbGRfaWRdKVxyXG4gIGxldCBteUZpbGVzID0gW107XHJcbiAgaWYgKHR5cGVvZiBvYmplY3QubXlGaWxlc1tmaWVsZF9pZF0gIT0gXCJ1bmRlZmluZWRcIikge1xyXG4gICAgbXlGaWxlcyA9IG9iamVjdC5teUZpbGVzW2ZpZWxkX2lkXTtcclxuICB9XHJcbiAgbGV0IGZpbGVzRGVsZXRlZCA9IFtdO1xyXG4gIGlmICh0eXBlb2Ygb2JqZWN0LmZpbGVzRGVsZXRlZFtmaWVsZF9pZF0gIT0gXCJ1bmRlZmluZWRcIikge1xyXG4gICAgZmlsZXNEZWxldGVkID0gb2JqZWN0LmZpbGVzRGVsZXRlZFtmaWVsZF9pZF07XHJcbiAgfVxyXG4gIGxldCBoaWRlT3RoZXJzID0gZmFsc2U7XHJcbiAgaWYgKHR5cGVvZiBvYmplY3QuZGlzYWJsZVVwbG9hZCAhPSBcInVuZGVmaW5lZFwiKSB7XHJcbiAgICBoaWRlT3RoZXJzID0gb2JqZWN0LmRpc2FibGVVcGxvYWQ7XHJcbiAgfVxyXG4gIGxldCBpbWFnZUlEID0gZmllbGRfaWQ7XHJcbiAgdmFyIG1hc3RlclBhcmFtcyA9IHtcclxuICAgIFwiYWN0aW9uXCI6IFwidXBsb2FkXCIsXHJcbiAgICBcImltYWdlSURcIjogaW1hZ2VJRCxcclxuICAgIFwibXlGaWxlc1wiOiBteUZpbGVzLFxyXG4gICAgXCJmaWxlc0RlbGV0ZWRcIjogZmlsZXNEZWxldGVkLFxyXG4gICAgXCJoaWRlT3RoZXJzXCIgOiBoaWRlT3RoZXJzXHJcbiAgfVxyXG5cclxuXHJcbiAgb2JqZWN0LkRTUF9VUExPQURDb25maWcgPSBuZXcgY29tcG9uZW50Q29uZmlnRGVmKClcclxuICBvYmplY3QuRFNQX1VQTE9BRENvbmZpZy5tYXN0ZXJQYXJhbXMgPSBtYXN0ZXJQYXJhbXNcclxuICBjb25zb2xlLmxvZyhcIm9iamVjdC5EU1BfVVBMT0FEQ29uZmlnLm1hc3RlclBhcmFtczpcIiwgb2JqZWN0LkRTUF9VUExPQURDb25maWcubWFzdGVyUGFyYW1zKVxyXG59XHJcbnB1YmxpYyBjYWxsR2V0U2F2ZUF0dGFjaGVtdHMoYWN0aW9uOmFueSxkYXRhOmFueSxvYmplY3Q6YW55KSB7XHJcbiAgLy9jb25zb2xlLmxvZyhcImNhbGxTYXZlQXR0YWNoZW10czpteUZpbGVzOlwiLCBvYmplY3QubXlGaWxlcylcclxuICBsZXQgY2FuU2VuZCA9IGZhbHNlO1xyXG4gIGlmKCB0eXBlb2Ygb2JqZWN0LmF0dF9hcnIgIT0gXCJ1bmRlZmluZWRcIil7XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IG9iamVjdC5hdHRfYXJyLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIGlmICh0eXBlb2YgZGF0YVtvYmplY3QuYXR0X2FycltpXV0gIT09IFwidW5kZWZpbmVkXCIgJiYgZGF0YVtvYmplY3QuYXR0X2FycltpXV0udHJpbSgpICE9IFwiXCIpIFxyXG4gICAgICAgIGNhblNlbmQgPSB0cnVlO1xyXG4gICAgfVxyXG4gIH1cclxuICBpZiggdHlwZW9mIG9iamVjdC5pbWdfYXJyICE9IFwidW5kZWZpbmVkXCIpe1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBvYmplY3QuaW1nX2Fyci5sZW5ndGg7IGkrKykge1xyXG4gICAgICBpZiAodHlwZW9mIGRhdGFbb2JqZWN0LmltZ19hcnJbaV1dICE9PSBcInVuZGVmaW5lZFwiICYmIGRhdGFbb2JqZWN0LmltZ19hcnJbaV1dLnRyaW0oKSAhPSBcIlwiKSBcclxuICAgICAgICBjYW5TZW5kID0gdHJ1ZTtcclxuICAgIH1cclxuICB9XHJcbiAgdmFyIG1hc3RlclBhcmFtcyA9IHtcclxuICAgIFwiYWN0aW9uXCI6IGFjdGlvbixcclxuICAgIFwiYXR0X2FyclwiOiBvYmplY3QuYXR0X2FycixcclxuICAgIFwiaW1nX2FyclwiOiBvYmplY3QuaW1nX2FycixcclxuICAgIFwibXlGaWxlc1wiOiBvYmplY3QubXlGaWxlcyxcclxuICAgIFwiZmlsZXNEZWxldGVkXCI6IG9iamVjdC5maWxlc0RlbGV0ZWQsXHJcbiAgICBcImRhdGFcIjogZGF0YVxyXG4gIH1cclxuICBpZiAoYWN0aW9uID09IFwic2F2ZVwiKVxyXG4gICAgY2FuU2VuZCA9IHRydWU7XHJcbiAgaWYgKGNhblNlbmQpe1xyXG4gICAgY29uc29sZS5sb2coXCJjYWxsR2V0U2F2ZUF0dGFjaGVtdHM6bWFzdGVyUGFyYW1zOlwiLCBtYXN0ZXJQYXJhbXMpIFxyXG4gICAgb2JqZWN0LkRTUF9VUExPQURDb25maWcgPSBuZXcgY29tcG9uZW50Q29uZmlnRGVmKClcclxuICAgIG9iamVjdC5EU1BfVVBMT0FEQ29uZmlnLm1hc3RlclBhcmFtcyA9IG1hc3RlclBhcmFtc1xyXG4gIH1cclxuXHJcbn1cclxucHVibGljIGNhbGxHZXRTYXZlV2ViQ2FtKGFjdGlvbjphbnksZGF0YTphbnksb2JqZWN0OmFueSkge1xyXG4gIC8vY29uc29sZS5sb2coXCJjYWxsU2F2ZUF0dGFjaGVtdHM6bXlGaWxlczpcIiwgb2JqZWN0Lm15RmlsZXMpXHJcbiAgdmFyIG1hc3RlclBhcmFtcyA9IHtcclxuICAgIFwiYWN0aW9uXCI6IGFjdGlvbixcclxuICAgIFwiYXR0X2FyclwiOiBvYmplY3QuYXR0X2FycixcclxuICAgIFwiaW1nX2FyclwiOiBvYmplY3QuaW1nX2FycixcclxuICAgIFwibXlGaWxlc1wiOiBvYmplY3QubXlGaWxlcyxcclxuICAgIFwiZmlsZXNEZWxldGVkXCI6IG9iamVjdC5maWxlc0RlbGV0ZWQsXHJcbiAgICBcImRhdGFcIjogZGF0YVxyXG4gIH1cclxuXHJcbiAgb2JqZWN0LkRTUF9XRUJDQU1Db25maWcgPSBuZXcgY29tcG9uZW50Q29uZmlnRGVmKClcclxuICBvYmplY3QuRFNQX1dFQkNBTUNvbmZpZy5tYXN0ZXJQYXJhbXMgPSBtYXN0ZXJQYXJhbXNcclxuXHJcbn1cclxuYXN5bmMgYXR0X2ltZ19zYXZlRm9ybUNvbXBsZXRlZEhhbmRsZXIodmFsdWU6YW55LG9iamVjdDphbnkpIHtcclxuICAvL2NvbnNvbGUubG9nKFwiYXR0X2ltZ19zYXZlRm9ybUNvbXBsZXRlZEhhbmRsZXI6dmFsdWVcIiwgdmFsdWUpO1xyXG4gIGxldCBmaWVsZF9pZCA9IHZhbHVlLmZpZWxkX2lkO1xyXG4gIG9iamVjdC5teUZpbGVzW2ZpZWxkX2lkXSA9IHZhbHVlLm15RmlsZXM7XHJcbiAgb2JqZWN0LmZpbGVzRGVsZXRlZFtmaWVsZF9pZF0gPSB2YWx1ZS5maWxlc0RlbGV0ZWQ7XHJcbiAgb2JqZWN0LmNhbUltYWdlID0gdmFsdWUuY2FtSW1hZ2U7XHJcbiAgLy9jb25zb2xlLmxvZyhcIm9iamVjdC5teUZpbGVzW2ZpZWxkX2lkXTpcIiwgb2JqZWN0Lm15RmlsZXNbZmllbGRfaWRdKVxyXG4gIGxldCBKU09OVmFsICA9IEpTT04uc3RyaW5naWZ5KG9iamVjdC5teUZpbGVzW2ZpZWxkX2lkXSk7XHJcbiAgaWYgKEpTT05WYWwgPT0gXCJbXVwiKVxyXG4gICAgSlNPTlZhbCA9IFwiXCI7XHJcbiAgb2JqZWN0LmZvcm0uZ2V0UmF3VmFsdWUoKVtmaWVsZF9pZF0gPSBKU09OVmFsO1xyXG4gIG9iamVjdC5mb3JtLnBhdGNoVmFsdWUoeyBbZmllbGRfaWRdOiBKU09OVmFsIH0pO1xyXG4gIGlmICh0eXBlb2Ygb2JqZWN0LmF0dF9pbWdfc2F2ZUZvcm1Db21wbGV0ZWQgIT0gXCJ1bmRlZmluZWRcIikge1xyXG4gICAgbGV0IE5ld1ZhbDphbnkgPSBbXTtcclxuICAgIE5ld1ZhbC5wdXNoKGZpZWxkX2lkKTtcclxuICAgIG9iamVjdC5hdHRfaW1nX3NhdmVGb3JtQ29tcGxldGVkLmFwcGx5KG9iamVjdCwgTmV3VmFsKTtcclxuICB9XHJcbn1cclxuYXN5bmMgYXR0X2ltZ19zYXZlRm9ybTJDb21wbGV0ZWRIYW5kbGVyKHZhbHVlOmFueSxvYmplY3Q6YW55KSB7XHJcbiAgY29uc29sZS5sb2coXCJhdHRfaW1nX3NhdmVGb3JtQ29tcGxldGVkSGFuZGxlcjp2YWx1ZVwiLCB2YWx1ZSk7XHJcbiAgbGV0IGZpZWxkX2lkID0gdmFsdWUuZmllbGRfaWQ7XHJcbiAgb2JqZWN0Lm15RmlsZXNbZmllbGRfaWRdID0gdmFsdWUubXlGaWxlcztcclxuICBvYmplY3QuZmlsZXNEZWxldGVkW2ZpZWxkX2lkXSA9IHZhbHVlLmZpbGVzRGVsZXRlZDtcclxuICBjb25zb2xlLmxvZyhcIm9iamVjdC5teUZpbGVzW2ZpZWxkX2lkXTpcIiwgb2JqZWN0Lm15RmlsZXNbZmllbGRfaWRdKVxyXG4gIGxldCBKU09OVmFsICA9IEpTT04uc3RyaW5naWZ5KG9iamVjdC5teUZpbGVzW2ZpZWxkX2lkXSk7XHJcbiAgaWYgKEpTT05WYWwgPT0gXCJbXVwiKVxyXG4gICAgSlNPTlZhbCA9IFwiXCI7XHJcbiAgb2JqZWN0LmZvcm0yLnZhbHVlW2ZpZWxkX2lkXSA9IEpTT05WYWw7XHJcbiAgb2JqZWN0LmZvcm0yLnBhdGNoVmFsdWUoeyBbZmllbGRfaWRdOiBKU09OVmFsIH0pO1xyXG4gIGlmICh0eXBlb2Ygb2JqZWN0LmF0dF9pbWdfc2F2ZUZvcm1Db21wbGV0ZWQgIT0gXCJ1bmRlZmluZWRcIikge1xyXG4gICAgbGV0IE5ld1ZhbDphbnkgPSBbXTtcclxuICAgIE5ld1ZhbC5wdXNoKGZpZWxkX2lkKTtcclxuICAgIG9iamVjdC5hdHRfaW1nX3NhdmVGb3JtQ29tcGxldGVkLmFwcGx5KG9iamVjdCwgTmV3VmFsKTtcclxuICB9XHJcbn1cclxucHVibGljIGF0dF9pbWdfc2F2ZUdyaWRDb21wbGV0ZWRIYW5kbGVyKHZhbHVlOmFueSxvYmplY3Q6YW55KSB7XHJcbiAgXHJcbiAgLy9jb25zb2xlLmxvZyhcImF0dF9pbWdfc2F2ZUdyaWRDb21wbGV0ZWRIYW5kbGVyOnZhbHVlXCIsIHZhbHVlKTtcclxuICBsZXQgZmllbGRfaWQgPSB2YWx1ZS5maWVsZF9pZDtcclxuICBvYmplY3QubXlGaWxlc1tmaWVsZF9pZF0gPSB2YWx1ZS5teUZpbGVzO1xyXG4gIG9iamVjdC5maWxlc0RlbGV0ZWRbZmllbGRfaWRdID0gdmFsdWUuZmlsZXNEZWxldGVkO1xyXG4gIC8vY29uc29sZS5sb2coXCJjaGVja2luZzoyOm9iamVjdC5teUZpbGVzW2ZpZWxkX2lkXTpcIiwgSlNPTi5zdHJpbmdpZnkob2JqZWN0Lm15RmlsZXNbZmllbGRfaWRdKSApXHJcbiAgbGV0IEpTT05WYWwgID0gSlNPTi5zdHJpbmdpZnkob2JqZWN0Lm15RmlsZXNbZmllbGRfaWRdKTtcclxuICBpZiAoSlNPTlZhbCA9PSBcIltdXCIpXHJcbiAgICBKU09OVmFsID0gXCJcIjtcclxuICBvYmplY3QuZm9ybUdyb3VwLnBhdGNoVmFsdWUoeyBbZmllbGRfaWRdOiBKU09OVmFsIH0pO1xyXG4gIG9iamVjdC5mb3JtR3JvdXAubWFya0FzRGlydHkoKTtcclxuICAvL2NvbnNvbGUubG9nKFwiYXR0X2ltZ19zYXZlR3JpZENvbXBsZXRlZEhhbmRsZXI6b2JqZWN0LmZvcm1Hcm91cC52YWx1ZVwiLCBvYmplY3QuZm9ybUdyb3VwLnZhbHVlKTtcclxuICBvYmplY3QudXBsb2FkaW1hZ2U9ZmFsc2U7XHJcbn1cclxucHVibGljIGFzeW5jIGF0dF9pbWdfZ3JpZF9vcGVuVXBsb2FkaW1hZ2UoZmllbGRfaWQ6YW55LG9iamVjdDphbnkpIHtcclxuICBpZiAoIW9iamVjdC5jb21wb25lbnRDb25maWcuZW5hYmxlZCkgcmV0dXJuO1xyXG4gIGF3YWl0IG9iamVjdC5zdGFyU2VydmljZXMuc2xlZXAoMzAwKTtcclxuICAvL2NvbnNvbGUubG9nKFwiYXR0X2ltZ19ncmlkX29wZW5VcGxvYWRpbWFnZTpvYmplY3QuZm9ybUdyb3VwOlwiLCBvYmplY3QuZm9ybUdyb3VwKVxyXG4gIG9iamVjdC51cGxvYWRpbWFnZSA9IHRydWU7XHJcbiAgaWYgKHR5cGVvZiBvYmplY3QuZm9ybUdyb3VwICE9IFwidW5kZWZpbmVkXCIpIHtcclxuICAgIG9iamVjdC5teUZpbGVzW2ZpZWxkX2lkXSA9W107XHJcbiAgICBvYmplY3Quc3RhclNlcnZpY2VzLmF0dF9pbWdfcG9wdWxhdGVBcnJzKG9iamVjdC5mb3JtR3JvdXAudmFsdWUsb2JqZWN0KTtcclxuICAgIC8vY29uc29sZS5sb2coXCJvcGVuVXBsb2FkaW1hZ2U6ZmllbGRfaWQ6XCIsIGZpZWxkX2lkLCBvYmplY3QubXlGaWxlcywgb2JqZWN0Lm15RmlsZXNbZmllbGRfaWRdKVxyXG4gICAgbGV0IG15RmlsZXMgPSBbXTtcclxuICAgIGlmICh0eXBlb2Ygb2JqZWN0Lm15RmlsZXNbZmllbGRfaWRdICE9IFwidW5kZWZpbmVkXCIpIHtcclxuICAgICAgbXlGaWxlcyA9IG9iamVjdC5teUZpbGVzW2ZpZWxkX2lkXTtcclxuICAgIH1cclxuICAgIGxldCBmaWxlc0RlbGV0ZWQgPSBbXTtcclxuICAgIGlmICh0eXBlb2Ygb2JqZWN0LmZpbGVzRGVsZXRlZFtmaWVsZF9pZF0gIT0gXCJ1bmRlZmluZWRcIikge1xyXG4gICAgICBmaWxlc0RlbGV0ZWQgPSBvYmplY3QuZmlsZXNEZWxldGVkW2ZpZWxkX2lkXTtcclxuICAgIH1cclxuICBsZXQgaGlkZU90aGVycyA9IGZhbHNlO1xyXG4gIGlmICh0eXBlb2Ygb2JqZWN0LmRpc2FibGVVcGxvYWQgIT0gXCJ1bmRlZmluZWRcIikge1xyXG4gICAgaGlkZU90aGVycyA9IG9iamVjdC5kaXNhYmxlVXBsb2FkO1xyXG4gIH1cclxuICAgIGxldCBpbWFnZUlEID0gZmllbGRfaWQ7XHJcbiAgICB2YXIgbWFzdGVyUGFyYW1zID0ge1xyXG4gICAgICBcImFjdGlvblwiOiBcInVwbG9hZFwiLFxyXG4gICAgICBcImltYWdlSURcIjogaW1hZ2VJRCxcclxuICAgICAgXCJteUZpbGVzXCI6IG15RmlsZXMsXHJcbiAgICAgIFwiZmlsZXNEZWxldGVkXCI6IGZpbGVzRGVsZXRlZCxcclxuICAgICAgIFwiaGlkZU90aGVyc1wiIDogaGlkZU90aGVyc1xyXG4gICAgfVxyXG5cclxuICAgIG9iamVjdC5EU1BfVVBMT0FEQ29uZmlnID0gbmV3IGNvbXBvbmVudENvbmZpZ0RlZigpXHJcbiAgICBvYmplY3QuRFNQX1VQTE9BRENvbmZpZy5tYXN0ZXJQYXJhbXMgPSBtYXN0ZXJQYXJhbXNcclxuICB9XHJcbn1cclxucHVibGljIGFzeW5jIGF0dF93ZWJjYW1fZ3JpZF9vcGVuVXBsb2FkaW1hZ2UoZmllbGRfaWQ6YW55LG9iamVjdDphbnkpIHtcclxuICBpZiAoIW9iamVjdC5jb21wb25lbnRDb25maWcuZW5hYmxlZCkgcmV0dXJuO1xyXG4gIGF3YWl0IG9iamVjdC5zdGFyU2VydmljZXMuc2xlZXAoMzAwKTtcclxuICAvL2NvbnNvbGUubG9nKFwiYXR0X3dlYmNhbV9ncmlkX29wZW5VcGxvYWRpbWFnZTpvYmplY3QuZm9ybUdyb3VwOlwiLCBvYmplY3QuZm9ybUdyb3VwKVxyXG4gIG9iamVjdC51cGxvYWRpbWFnZSA9IHRydWU7XHJcbiAgaWYgKHR5cGVvZiBvYmplY3QuZm9ybUdyb3VwICE9IFwidW5kZWZpbmVkXCIpIHtcclxuICAgIG9iamVjdC5teUZpbGVzW2ZpZWxkX2lkXSA9W107XHJcbiAgICBvYmplY3Quc3RhclNlcnZpY2VzLmF0dF9pbWdfcG9wdWxhdGVBcnJzKG9iamVjdC5mb3JtR3JvdXAudmFsdWUsb2JqZWN0KTtcclxuICAgIC8vY29uc29sZS5sb2coXCJvcGVuVXBsb2FkaW1hZ2U6ZmllbGRfaWQ6XCIsIGZpZWxkX2lkLCBvYmplY3QubXlGaWxlcywgb2JqZWN0Lm15RmlsZXNbZmllbGRfaWRdKVxyXG4gICAgbGV0IG15RmlsZXMgPSBbXTtcclxuICAgIGlmICh0eXBlb2Ygb2JqZWN0Lm15RmlsZXNbZmllbGRfaWRdICE9IFwidW5kZWZpbmVkXCIpIHtcclxuICAgICAgbXlGaWxlcyA9IG9iamVjdC5teUZpbGVzW2ZpZWxkX2lkXTtcclxuICAgIH1cclxuICAgIGxldCBmaWxlc0RlbGV0ZWQgPSBbXTtcclxuICAgIGlmICh0eXBlb2Ygb2JqZWN0LmZpbGVzRGVsZXRlZFtmaWVsZF9pZF0gIT0gXCJ1bmRlZmluZWRcIikge1xyXG4gICAgICBmaWxlc0RlbGV0ZWQgPSBvYmplY3QuZmlsZXNEZWxldGVkW2ZpZWxkX2lkXTtcclxuICAgIH1cclxuXHJcbiAgICBsZXQgaW1hZ2VJRCA9IGZpZWxkX2lkO1xyXG4gICAgdmFyIG1hc3RlclBhcmFtcyA9IHtcclxuICAgICAgXCJhY3Rpb25cIjogXCJ1cGxvYWRcIixcclxuICAgICAgXCJpbWFnZUlEXCI6IGltYWdlSUQsXHJcbiAgICAgIFwibXlGaWxlc1wiOiBteUZpbGVzLFxyXG4gICAgICBcImZpbGVzRGVsZXRlZFwiOiBmaWxlc0RlbGV0ZWRcclxuICAgIH1cclxuXHJcbiAgICBvYmplY3QuRFNQX1dFQkNBTUNvbmZpZyA9IG5ldyBjb21wb25lbnRDb25maWdEZWYoKVxyXG4gICAgb2JqZWN0LkRTUF9XRUJDQU1Db25maWcubWFzdGVyUGFyYW1zID0gbWFzdGVyUGFyYW1zXHJcbiAgfVxyXG59XHJcbnB1YmxpYyBhZGROZXdDb2RlKG9iamVjdDphbnksIENPREVOQU1FOmFueSk6IHZvaWQge1xyXG4gIG9iamVjdC5ncmlkX3NvbV90YWJzX2NvZGVzID0gbmV3IHRhYnNDb2RlcygpO1xyXG4gIG9iamVjdC5ncmlkX3NvbV90YWJzX2NvZGVzWydDT0RFTkFNRSddID0gQ09ERU5BTUU7IC8vIGZvciByZXRyaWV2ZSBkYXRhXHJcbiAgXHJcbiAgXHJcbiAgb2JqZWN0LlNPTV9UQUJTX0NPREVTQ29uZmlnID0gIG5ldyBjb21wb25lbnRDb25maWdEZWYoKTtcclxuICBsZXQgbWFzdGVyUGFyYW1zID0ge1xyXG4gICAgYWN0aW9uOiBcIkFERFwiLFxyXG4gICAgQ09ERU5BTUU6Q09ERU5BTUUsXHJcbiAgICBDT0RFOm9iamVjdC5maWx0ZXJDb2RlLFxyXG4gICAgQ09ERVRFWFRfTEFORyA6IG9iamVjdC5maWx0ZXJDb2RlXHJcbiAgfVxyXG4gIG9iamVjdC5TT01fVEFCU19DT0RFU0NvbmZpZy5tYXN0ZXJQYXJhbXMgPSBtYXN0ZXJQYXJhbXM7IC8vIEZvciBhZGQgbmV3IHJlY29yZFxyXG4gIG9iamVjdC5zaG93Q29kZURldGFpbHM9dHJ1ZTtcclxufVxyXG5cclxucHVibGljIHNldElkT3JkZXIob2JqZWN0LGlkRmllbGQsIG9yZGVyRmllbGQpe1xyXG4gIGxldCBJRCA9IDE7XHJcbiAgbGV0IE9SREVSID0gMTtcclxuXHJcbiAgbGV0IEdyaWREYXRhOmFueSA9IG9iamVjdC5ncmlkLmRhdGE7XHJcbiAgaWYgKHR5cGVvZiBHcmlkRGF0YS5kYXRhICE9PSBcInVuZGVmaW5lZFwiKXtcclxuICAgIGZvciAobGV0IGk9MDsgaSA8IEdyaWREYXRhLmRhdGEubGVuZ3RoIDsgaSsrKXtcclxuICAgICAgaWYgKEdyaWREYXRhLmRhdGFbaV1baWRGaWVsZF0gPj0gSUQpXHJcbiAgICAgICAgSUQgPSBwYXJzZUludCggR3JpZERhdGEuZGF0YVtpXVtpZEZpZWxkXSkgKyAxO1xyXG4gICAgICBpZiAoR3JpZERhdGEuZGF0YVtpXVtvcmRlckZpZWxkXSA+PSBPUkRFUilcclxuICAgICAgICBPUkRFUiA9IHBhcnNlSW50KEdyaWREYXRhLmRhdGFbaV1bb3JkZXJGaWVsZF0gKSArIDE7XHJcbiAgICB9XHJcbiAgfVxyXG4gIGxldCB2YWx1ZXMgPSB7XHJcbiAgICBbaWRGaWVsZF06IElELFxyXG4gICAgW29yZGVyRmllbGRdOiBPUkRFUlxyXG4gIH1cclxuICBjb25zb2xlLmxvZyhcInNldEluaXRpYWxWYWx1ZXM6dmFsdWVzOlwiLHZhbHVlcyApXHJcbiAgb2JqZWN0LmZvcm1Hcm91cC5wYXRjaFZhbHVlKHZhbHVlcylcclxufVxyXG5wdWJsaWMgcm93UmVvcmRlcihvYmplY3QsIG9yZGVyRmllbGQsIGUpe1xyXG4gIGlmIChvYmplY3QucGFyYW1Db25maWcuREVCVUdfRkxBRykgY29uc29sZS5sb2cgKFwicm93UmVvcmRlcjpcIiwgZSk7XHJcbiAgaWYgKG9iamVjdC5wYXJhbUNvbmZpZy5ERUJVR19GTEFHKSBjb25zb2xlLmxvZyAoXCJyb3dSZW9yZGVyOlwiLCBlLmRyYWdnZWRSb3dzWzBdLnJvd0luZGV4KVxyXG4gICAgaWYgKG9iamVjdC5wYXJhbUNvbmZpZy5ERUJVR19GTEFHKSBjb25zb2xlLmxvZyAoXCJyb3dSZW9yZGVyOlwiLCBlLmRyb3BQb3NpdGlvbik7XHJcbiAgaWYgKG9iamVjdC5wYXJhbUNvbmZpZy5ERUJVR19GTEFHKSBjb25zb2xlLmxvZyAoXCJyb3dSZW9yZGVyOlwiLCBlLmRyb3BUYXJnZXRSb3cucm93SW5kZXgpXHJcbiAgbGV0IGRhdGFJdGVtID0gZS5kcmFnZ2VkUm93c1swXS5kYXRhSXRlbTtcclxuICBsZXQgR3JpZERhdGE7XHJcbiAgR3JpZERhdGEgPSAgb2JqZWN0LmdyaWQuZGF0YTtcclxuXHJcbiAgaWYgKGUuZHJvcFBvc2l0aW9uID09IFwiYWZ0ZXJcIil7XHJcbiAgICBHcmlkRGF0YS5kYXRhLnNwbGljZShlLmRyb3BUYXJnZXRSb3cucm93SW5kZXgrMSwgMCwgZGF0YUl0ZW0pO1xyXG4gICAgLy9SZW1vdmUgZHJhZ2dlZFJvd3NcclxuICAgIEdyaWREYXRhLmRhdGEgPSBHcmlkRGF0YS5kYXRhLmZpbHRlcihmdW5jdGlvbiAoZGF0YUl0ZW0sIGluZGV4KSB7XHJcbiAgICAgIHJldHVybiBpbmRleCAhPT0gZS5kcmFnZ2VkUm93c1swXS5yb3dJbmRleDtcclxuICAgIH0pO1xyXG4gIH1cclxuICBlbHNlXHJcbiAgaWYgKGUuZHJvcFBvc2l0aW9uID09IFwiYmVmb3JlXCIpe1xyXG4gICAgIC8vUmVtb3ZlIGRyYWdnZWRSb3dzXHJcbiAgICBHcmlkRGF0YS5kYXRhID0gR3JpZERhdGEuZGF0YS5maWx0ZXIoZnVuY3Rpb24gKGRhdGFJdGVtLCBpbmRleCkge1xyXG4gICAgICByZXR1cm4gaW5kZXggIT09IGUuZHJhZ2dlZFJvd3NbMF0ucm93SW5kZXg7XHJcbiAgICB9KTtcclxuICAgIEdyaWREYXRhLmRhdGEuc3BsaWNlKGUuZHJvcFRhcmdldFJvdy5yb3dJbmRleCwgMCwgZGF0YUl0ZW0pO1xyXG4gIH1cclxuIC8vd3JpdGUgb3JkZXIgZmllbGRcclxuIGlmIChvYmplY3QucGFyYW1Db25maWcuREVCVUdfRkxBRykgY29uc29sZS5sb2coXCJyb3dSZW9yZGVyOkdyaWREYXRhLmRhdGE6XCIsR3JpZERhdGEuZGF0YSk7XHJcbiBmb3IgKGxldCBpPTA7IGkgPCBHcmlkRGF0YS5kYXRhLmxlbmd0aDtpKyspe1xyXG4gICBHcmlkRGF0YS5kYXRhW2ldW29yZGVyRmllbGRdPSBpICsgMTtcclxuICAgR3JpZERhdGEuZGF0YVtpXS5fUVVFUlkgPSBvYmplY3QudXBkYXRlQ01EO1xyXG4gfVxyXG4gb2JqZWN0LnNhdmVDaGFuZ2VzKG9iamVjdC5ncmlkKTtcclxufVxyXG5cclxucHVibGljIGhhbmRsZUZpbHRlckNvZGUob2JqZWN0OmFueSxDT0RFOmFueSkge1xyXG4gIGlmIChvYmplY3Quc3RhclNlcnZpY2VzLnNlc3Npb25QYXJhbXMuVVNFUl9JTkZPLkdST1VQTkFNRSA9PSBcIlNZU0FETVwiKXtcclxuICAgIG9iamVjdC5maWx0ZXJDb2RlID0gQ09ERTtcclxuICB9XHJcbiB9XHJcbiByZW1vdmVOb25WYWxpZENvbHVtbnMoY29tcCxJbml0aWFsVmFsdWVzKXtcclxuICAgICBjb25zb2xlLmxvZyhcInJlbW92ZU5vblZhbGlkR3JpZENvbHVtbnM6XCIsIGNvbXAsIEluaXRpYWxWYWx1ZXMpXHJcbiAgICAgbGV0IEtleXMgPSBPYmplY3Qua2V5cyhjb21wKTtcclxuIFxyXG4gICAgIGZvciAobGV0IGogPTA7IGo8IEtleXMubGVuZ3RoO2orKyl7XHJcbiAgICAgICBsZXQgZmllbGQgPSBLZXlzW2pdO1xyXG4gICAgICAgbGV0IGV4aXN0cyA9IEluaXRpYWxWYWx1ZXNbZmllbGRdXHJcbiAgICAgICBjb25zb2xlLmxvZyhcInJlbW92ZU5vblZhbGlkR3JpZENvbHVtbnM6XCIsIGZpZWxkLCBleGlzdHMpXHJcbiAgICAgICBpZiAodHlwZW9mIGV4aXN0cyA9PSBcInVuZGVmaW5lZFwiKXtcclxuICAgICAgICAgZGVsZXRlIGNvbXBbZmllbGRdO1xyXG4gICAgICAgfVxyXG4gICAgIH1cclxuICAgfVxyXG4gcHVibGljIGZvcm1hdHRoaXNEYXRlKGRhdGUxLCBEYXRlRm9ybWF0LGRhdGVMb2NhbGUpXHJcbntcclxuICBpZiAoKGRhdGUxICE9IFwiXCIpICYmICh0eXBlb2YgZGF0ZTEgIT0gXCJ1bmRlZmluZWRcIikpXHJcbiAgICByZXR1cm4gKGZvcm1hdERhdGUoZGF0ZTEsIERhdGVGb3JtYXQsZGF0ZUxvY2FsZSkpO1xyXG4gIGVsc2VcclxuICAgIHJldHVybiBudWxsO1xyXG59XHJcbiBwdWJsaWMgZW5jcnlwdFNlY3JldEtleT1cIkFwcEdlbkBTdGFyMTIzNFwiO1xyXG4gZW5jcnlwdERhdGEoZGF0YSkge1xyXG5cclxuIHRyeSB7XHJcbiAgIHJldHVybiBDcnlwdG9KUy5BRVMuZW5jcnlwdChKU09OLnN0cmluZ2lmeShkYXRhKSwgdGhpcy5lbmNyeXB0U2VjcmV0S2V5KS50b1N0cmluZygpO1xyXG4gfSBjYXRjaCAoZSkge1xyXG4gICBjb25zb2xlLmxvZyhlKTtcclxuIH1cclxufVxyXG5wdWJsaWMgZGVjcnlwdERhdGEoZGF0YSkge1xyXG5cclxuIHRyeSB7XHJcbiAgIGNvbnN0IGJ5dGVzID0gQ3J5cHRvSlMuQUVTLmRlY3J5cHQoZGF0YSwgdGhpcy5lbmNyeXB0U2VjcmV0S2V5KTtcclxuICAgaWYgKGJ5dGVzLnRvU3RyaW5nKCkpIHtcclxuICAgICByZXR1cm4gSlNPTi5wYXJzZShieXRlcy50b1N0cmluZyhDcnlwdG9KUy5lbmMuVXRmOCkpO1xyXG4gICB9XHJcbiAgIHJldHVybiBkYXRhO1xyXG4gfSBjYXRjaCAoZSkge1xyXG4gICBjb25zb2xlLmxvZyhlKTtcclxuIH1cclxufVxyXG5wdWJsaWMgIHBhcnNlQ29va2llcyA9IChjb29raWVTdHIpID0+XHJcbiAgY29va2llU3RyLnNwbGl0KFwiO1wiKVxyXG4gICAgLm1hcChzdHIgPT4gc3RyLnRyaW0oKS5zcGxpdCgvPSguKykvKSlcclxuICAgIC5yZWR1Y2UoKGFjYywgY3VycikgPT4ge1xyXG4gICAgICAgIGFjY1tjdXJyWzBdXSA9IGN1cnJbMV07XHJcbiAgICAgICAgcmV0dXJuIGFjYztcclxuICAgIH0sIHt9KVxyXG5wdWJsaWMgZGF0YUV4aXRzKG9iamVjdCkge1xyXG4gICAgbGV0IHN0YXR1cyA9IGZhbHNlO1xyXG4gICAgaWYgKHR5cGVvZiAob2JqZWN0LmV4ZWN1dGVRdWVyeXJlc3VsdCkgIT0gXCJ1bmRlZmluZWRcIikge1xyXG4gICAgICBpZiAob2JqZWN0LmV4ZWN1dGVRdWVyeXJlc3VsdC5kYXRhKSB7XHJcbiAgICAgICAgc3RhdHVzID0gdHJ1ZTtcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gc3RhdHVzO1xyXG5cclxuICAgIH1cclxuICB9XHJcbnB1YmxpYyBoaWRlTm9WYWxpZExpY2Vuc2UoKVxyXG4ge1xyXG4gICAgIGNvbnN0IGNvbGxlY3Rpb24gPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcImRpdlwiKTsgXHJcbiAgICAgLy9jb25zb2xlLmxvZyAoXCJjaGVja2luZzpjb2xsZWN0aW9uOlwiLGNvbGxlY3Rpb24pO1xyXG4gICAgIGZvciAobGV0IGk9MDtpPGNvbGxlY3Rpb24ubGVuZ3RoO2krKyl7XHJcbiAgICAgICBsZXQgaW5uZXJIVE1MOmFueSA9IGNvbGxlY3Rpb25baV0uaW5uZXJIVE1MO1xyXG4gICAgICAgLy9jb25zb2xlLmxvZyAoXCJjaGVja2luZzppbm5lckhUTUw6XCIsaW5uZXJIVE1MKTtcclxuICAgICAgIC8vbGV0IHJlc3VsdCA9IGlubmVySFRNTC5pbmNsdWRlcyhcIm5nLXJlZmxlY3Qtbmctc3R5bGVcIik7XHJcbiAgICAgICAvL2xldCByZXN1bHQgPSBpbm5lckhUTUwuaW5jbHVkZXMoXCJkaXNwbGF5OiBmbGV4O1wiKTtcclxuICAgICAgIGxldCByZXN1bHQgPSBpbm5lckhUTUwuaW5jbHVkZXMoXCJBIGxpY2Vuc2Uga2V5IGlzIHJlcXVpcmVkXCIpO1xyXG4gICAgICAgLy9jb25zb2xlLmxvZyAoXCJjaGVja2luZzpyZXN1bHQ6XCIsaSwgcmVzdWx0KTtcclxuICAgICAgIGlmIChyZXN1bHQpe1xyXG4gICAgICAgICByZXN1bHQgPSBpbm5lckhUTUwuaW5jbHVkZXMoXCJMaWNlbnNlIGtleSBtaXNzaW5nXCIpO1xyXG4gICAgICAgICBpZiAocmVzdWx0KXtcclxuICAgICAgICAgICAvL2NvbnNvbGUubG9nIChcImNoZWNraW5nOmlubmVySFRNTDpcIixyZXN1bHQsaW5uZXJIVE1MKTtcclxuICAgICAgICAgICBjb2xsZWN0aW9uW2ldLnN0eWxlLnNldFByb3BlcnR5KCdkaXNwbGF5JywgJ25vbmUnKTtcclxuICAgICAgICAgICB9XHJcbiBcclxuICAgICAgIH1cclxuICAgICAgIFxyXG4gICAgIH1cclxuICAgICAvL2NvbnNvbGUubG9nIChcImNvbGxlY3Rpb246XCIsIGNvbGxlY3Rpb24ubGVuZ3RoLCBjb2xsZWN0aW9uWzM1XSlcclxuIH1cclxuIFxyXG4gIGFzeW5jICBzaG93TXVsdGlTdGVwRm9ybShvYmplY3QsIHRlbXBsYXRlTmFtZSkge1xyXG4gICAgIGxldCBCb2R5ID0gW107XHJcbiAgICAgbGV0IHRlbXBsYXRlSW5mbzphbnk7XHJcbiAgICAgdmFyIG5ld1ZhbDphbnkgPSB7IFwiX1FVRVJZXCI6IFwiR0VUX0RTUF9URU1QTEFURVwiLCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlRFTVBMQVRFX05BTUVcIjogdGVtcGxhdGVOYW1lIH07XHJcbiAgICAgQm9keS5wdXNoKG5ld1ZhbCk7XHJcbiAgICAgbmV3VmFsID0geyBcIl9RVUVSWVwiOiBcIkdFVF9EU1BfVEVNUExBVEVfREVUQUlMXCIsIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiVEVNUExBVEVfTkFNRVwiOiB0ZW1wbGF0ZU5hbWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlNFUVVFTkNFX05BTUVcIjogXCIlXCJ9O1xyXG4gICAgICBCb2R5LnB1c2gobmV3VmFsKTtcclxuICAgICAgbGV0IGRhdGEgPSBhd2FpdCB0aGlzLmV4ZWNTUUxCb2R5KHRoaXMsIEJvZHksIFwiXCIpO1xyXG4gICAgIGlmICh0eXBlb2YgZGF0YSAhPSBcInVuZGVmaW5lZFwiICYmIGRhdGFbMF0uZGF0YS5sZW5ndGggPiAwKSB7XHJcbiAgICAgICB0aGlzLkJvZHkgPSBbXTtcclxuICAgICAgIHRlbXBsYXRlSW5mbyA9IGRhdGFbMF0uZGF0YVswXTtcclxuICAgICAgIGxldCB0ZW1wbGF0ZURldGFpbCA9IGRhdGFbMV0uZGF0YVswXTtcclxuIFxyXG5cclxuICAgICAgIC8vaWYgKCh0aGlzLmFkZEZvcm0udmFsdWUuT1JERVJfRklFTERTID09IFwiXCIpIHx8ICh0aGlzLmFkZEZvcm0udmFsdWUuT1JERVJfRklFTERTID09IG51bGwpKSB7XHJcbiAgICAgICAvLyAgdGhpcy5hZGRGb3JtLnZhbHVlLk9SREVSX0ZJRUxEUyA9IFwie31cIjtcclxuICAgICAgIC8vfVxyXG4gXHJcbiAgICAgICBcclxuICAgICAgIHZhciBmb3JtUGFnZXNObyA9IHRlbXBsYXRlRGV0YWlsLkZPUk1fUEFHRVNfTk87XHJcbiAgICAgICBvYmplY3QuZm9ybU1hc3RlclBhcmFtcyA9IHtcclxuICAgICAgICAgXCJmb3JtTmFtZVwiOiB0ZW1wbGF0ZUluZm8uRk9STV9OQU1FLFxyXG4gICAgICAgICBcImZvcm1QYWdlc05vXCI6IGZvcm1QYWdlc05vLFxyXG4gICAgICAgICAvL1wib3JkZXJGaWVsZHNcIjogdGhpcy5hZGRGb3JtLnZhbHVlLk9SREVSX0ZJRUxEUyxcclxuICAgICAgICAgXCJvcmRlckZpZWxkc1wiOiBcInt9XCIsXHJcbiAgICAgICAgIC8vXCJhZGRGb3JtXCI6IHRoaXMuYWRkRm9ybS52YWx1ZSxcclxuICAgICAgICAgXCJhZGRGb3JtXCI6dGVtcGxhdGVJbmZvLFxyXG4gICAgICAgICBcImNhbGxpbmdGb3JtXCI6IFwiUFJWT1JERVJBRFwiLFxyXG4gICAgICAgfTtcclxuIFxyXG4gICAgICAgY29uc29sZS5sb2coXCJ0ZW1wbGF0ZUluZm86XCIsIHRlbXBsYXRlSW5mbywgXCJgb2JqZXRgLmZvcm1NYXN0ZXJQYXJhbXM6XCIsb2JqZWN0LmZvcm1NYXN0ZXJQYXJhbXMpXHJcblxyXG4gICAgICAgICBvYmplY3Quc2hvd0NhbGxTY3JlZW4gPSB0cnVlO1xyXG4gICAgICAgICBcclxuICAgICB9XHJcbiAgICBvYmplY3QudGVtcGxhdGVJbmZvID0gdGVtcGxhdGVJbmZvO1xyXG4gICAgcmV0dXJuIHRlbXBsYXRlSW5mbztcclxuICAgfVxyXG4gICBhc3luYyAgY2FsbFNjcmVlbihvYmplY3QsIHRlbXBsYXRlSW5mbyl7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJjYWxsU2NyZWVuIC0gdGVtcGxhdGVJbmZvOlwiLCB0ZW1wbGF0ZUluZm8sIFwidGhpcy5mb3JtTWFzdGVyUGFyYW1zOlwiLG9iamVjdC5mb3JtTWFzdGVyUGFyYW1zKVxyXG4gICAgICAgICAgbGV0IEJvZHkgPSBbXTtcclxuICAgICAgICAgIHZhciBuZXdWYWw6YW55ID0geyBcIl9RVUVSWVwiOiBcIkdFVF9NRU5VU19RVUVSWVwiLCBcclxuICAgICAgICAgICAgIFwiX1dIRVJFXCI6IFwiQ0hPSUNFICA9ICdcIiArIHRlbXBsYXRlSW5mby5GT1JNX05BTUUgKyBcIidcIiB9O1xyXG4gICAgICAgICAgQm9keS5wdXNoKG5ld1ZhbCk7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhcImNhbGxTY3JlZW4gLSBCb2R5OlwiLCBCb2R5KVxyXG4gICAgICAgICAgbGV0IGRhdGEgPSBhd2FpdCB0aGlzLmV4ZWNTUUxCb2R5KHRoaXMsIEJvZHksIFwiXCIpO1xyXG4gICAgICAgICAgY29uc29sZS5sb2coXCJjYWxsU2NyZWVuIC0gZGF0YTpcIiwgZGF0YSlcclxuICAgICAgICAgIGlmICh0eXBlb2YgZGF0YSAhPSBcInVuZGVmaW5lZFwiICYmIGRhdGFbMF0uZGF0YS5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgIHZhciBtZW51ID0gZGF0YVswXS5kYXRhWzBdO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcImNhbGxTY3JlZW4gLSBtZW51OlwiLCBtZW51KVxyXG4gICAgICAgICAgICBsZXQgY29tcFNlbGVjdG9yID0gbWVudS5GTEVYX0ZMRDE7XHJcbiAgICAgICAgICAgIG9iamVjdC5jaGlsZHJlbiA9IFtdO1xyXG4gICAgICAgICAgICBvYmplY3QuY2hpbGRyZW4ucHVzaChjb21wU2VsZWN0b3IpO1xyXG4gICAgICAgIG9iamVjdC5jb21tb25DYWxsU3Rhck5vdGlmeShvYmplY3QuZm9ybU1hc3RlclBhcmFtcyk7XHJcbiAgICAgIH1cclxuICAgICAgb2JqZWN0LnJvdXRlci5uYXZpZ2F0ZShbJy8nICt0ZW1wbGF0ZUluZm8uRk9STV9OQU1FXSwgXHJcbiAgICAgICAgeyBza2lwTG9jYXRpb25DaGFuZ2U6IHRydWUsIHJlcGxhY2VVcmw6IGZhbHNlLCBwcmVzZXJ2ZUZyYWdtZW50OiB0cnVlIH0pO1xyXG4gIH1cclxuICAgICBwdWJsaWMgZ2V0SW52YWxpZENvbnRyb2xzKG9iamVjdCkge1xyXG4gICAgLy9jb25zb2xlLmxvZyAoXCJnZXRJbnZhbGlkQ29udHJvbHM6XCIsICAgb2JqZWN0LmZvcm0uaW52YWxpZCwgb2JqZWN0LmZvcm0uY29udHJvbHMpXHJcbiAgICBjb25zdCBpbnZhbGlkID0gW107XHJcbiAgICBjb25zdCBjb250cm9scyA9IG9iamVjdC5mb3JtLmNvbnRyb2xzO1xyXG4gICAgZm9yIChsZXQgbmFtZSBpbiBjb250cm9scykge1xyXG4gICAgICAgIGlmIChjb250cm9sc1tuYW1lXS5pbnZhbGlkKSB7XHJcbiAgICAgICAgICAgaWYgKHR5cGVvZiBvYmplY3QuY29tcFRpdGxlTXNnICE9IFwidW5kZWZpbmVkXCIpe1xyXG4gICAgICAgICAgICAgIG5hbWUgPSB0aGlzLmdldE5MUyhbXSxvYmplY3QuY29tcFRpdGxlTXNnICsgXCIuXCIgKyBuYW1lLG5hbWUpXHJcbiAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpbnZhbGlkLnB1c2gobmFtZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICBcclxuICAgICB0aGlzLnNob3dOb3RpZmljYXRpb24oXCJlcnJvclwiLCB0aGlzLmdldE5MUyhbaW52YWxpZC50b1N0cmluZygpXSxcclxuICAgICdOT19WQUxJRF9EQVRBX0ZPUicsJ05vIHZhbGlkIGRhdGEgZm9yIDogICMjICcpKTtcclxuICAgIGxldCBNc2cgPSB0aGlzLmdldE5MUyhbaW52YWxpZC50b1N0cmluZygpXSwgJ05PX1ZBTElEX0RBVEFfRk9SJywnTm8gdmFsaWQgZGF0YSBmb3IgOiAgIyMgJyk7XHJcbiAgICBcclxuICAgIHZhciBkaWFsb2dTdHJ1YyA9IHtcclxuICAgICAgbXNnOiBNc2csXHJcbiAgICAgIHRpdGxlOiBcIkVycm9yXCIsXHJcbiAgICAgIGluZm86IG51bGwsXHJcbiAgICAgIG9iamVjdDogdGhpcyxcclxuICAgICAgYWN0aW9uOiB0aGlzLk9rQWN0aW9ucyxcclxuICAgICAgY2FsbGJhY2s6IG51bGxcclxuICAgIH07XHJcbiAgICB0aGlzLnNob3dDb25maXJtYXRpb24oZGlhbG9nU3RydWMpO1xyXG4gICAgcmV0dXJuIGludmFsaWQ7XHJcbn1cclxuY29udmVydFN2Z1RvS2VuZG9TVkdJY29uKFxyXG4gIG9iamVjdDogYW55LFxyXG4gIHN2Z0NvbnRlbnQ6IHN0cmluZyxcclxuICBpY29uTmFtZTogc3RyaW5nLFxyXG4gIGNvbHVtbjogc3RyaW5nXHJcbikge1xyXG4gIGlmICggKHR5cGVvZiBpY29uTmFtZSA9PT0gJ3VuZGVmaW5lZCcpIHx8IGljb25OYW1lID09PSBudWxsICkgaWNvbk5hbWUgPSBjb2x1bW47XHJcblxyXG4gIHRyeSB7XHJcbiAgICAvLyAtLS0gMS4gdmlld0JveCAoZmFsbGJhY2sgdG8gd2lkdGgvaGVpZ2h0LCB0aGVuIDAgMCAyNCAyNCkgLS0tXHJcbiAgICBsZXQgdmlld0JveCA9IHN2Z0NvbnRlbnQubWF0Y2goL3ZpZXdCb3hcXHMqPVxccypcIihbXlwiXSspXCIvKT8uWzFdO1xyXG5cclxuICAgIGlmICghdmlld0JveCkge1xyXG4gICAgICBjb25zdCB3TWF0Y2ggPSBzdmdDb250ZW50Lm1hdGNoKC9cXGJ3aWR0aFxccyo9XFxzKlwiKFtcXGQuXSspLyk7XHJcbiAgICAgIGNvbnN0IGhNYXRjaCA9IHN2Z0NvbnRlbnQubWF0Y2goL1xcYmhlaWdodFxccyo9XFxzKlwiKFtcXGQuXSspLyk7XHJcbiAgICAgIGNvbnN0IHcgPSB3TWF0Y2ggPyBwYXJzZUZsb2F0KHdNYXRjaFsxXSkgOiAyNDtcclxuICAgICAgY29uc3QgaCA9IGhNYXRjaCA/IHBhcnNlRmxvYXQoaE1hdGNoWzFdKSA6IDI0O1xyXG4gICAgICB2aWV3Qm94ID0gYDAgMCAke3d9ICR7aH1gO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIC0tLSAyLiBFeHRyYWN0IGlubmVyIGNvbnRlbnQgb2YgPHN2Zz4uLi48L3N2Zz4gLS0tXHJcbiAgICBjb25zdCBpbm5lck1hdGNoID0gc3ZnQ29udGVudC5tYXRjaCgvPHN2Z1tePl0qPihbXFxzXFxTXSo/KTxcXC9zdmc+L2kpO1xyXG4gICAgbGV0IGNvbnRlbnQgPSBpbm5lck1hdGNoID8gaW5uZXJNYXRjaFsxXSA6IHN2Z0NvbnRlbnQ7XHJcblxyXG4gICAgLy8gLS0tIDMuIFJlbW92ZSBYTUwgZGVjbGFyYXRpb24gYW5kIGNvbW1lbnRzIC0tLVxyXG4gICAgY29udGVudCA9IGNvbnRlbnRcclxuICAgICAgLnJlcGxhY2UoLzxcXD94bWxbXFxzXFxTXSo/XFw/Pi9nLCAnJylcclxuICAgICAgLnJlcGxhY2UoLzwhLS1bXFxzXFxTXSo/LS0+L2csICcnKTtcclxuXHJcbiAgICAvLyAtLS0gNC4gQ29sbGFwc2Ugd2hpdGVzcGFjZSBiZXR3ZWVuIHRhZ3MgYnV0IGtlZXAgdGhlIHNoYXBlIG1hcmt1cCBpbnRhY3QgLS0tXHJcbiAgICAvLyAgICBLZWVwcyB0aGUgZXhhY3QgYXR0cmlidXRlcyBidXQgYXZvaWRzIGdpYW50IHJ1bnMgb2Ygc3BhY2VzL25ld2xpbmVzLlxyXG4gICAgY29udGVudCA9IGNvbnRlbnRcclxuICAgICAgLnJlcGxhY2UoL1xccysvZywgJyAnKSAgICAgIC8vIGNvbGxhcHNlIGFsbCB3aGl0ZXNwYWNlIHRvIHNpbmdsZSBzcGFjZXNcclxuICAgICAgLnJlcGxhY2UoLz5cXHMrPC9nLCAnPjwnKSAgIC8vIHJlbW92ZSB3aGl0ZXNwYWNlIGJldHdlZW4gYWRqYWNlbnQgdGFnc1xyXG4gICAgICAudHJpbSgpO1xyXG5cclxuICAgIC8vIC0tLSA1LiBCdWlsZCB0aGUgaWNvbiBkZXNjcmlwdG9yIC0tLVxyXG4gICAgY29uc3QgaWNvbiA9IHtcclxuICAgICAgbmFtZTogaWNvbk5hbWUsXHJcbiAgICAgIGNvbnRlbnQ6IGNvbnRlbnQsXHJcbiAgICAgIHZpZXdCb3g6IHZpZXdCb3gsXHJcbiAgICAgIHZhcmlhbnRzOiB7XHJcbiAgICAgICAgc29saWQ6ICcnLFxyXG4gICAgICAgIG91dGxpbmU6ICcnLFxyXG4gICAgICAgIGR1b3RvbmU6ICcnXHJcbiAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgLy8gLS0tIDYuIFN0b3JlIG9uIHRoZSBjYWxsZXIncyBvYmplY3QgKHNhbWUgcGF0dGVybiBhcyBiZWZvcmUpIC0tLVxyXG4gICAgaWYgKCFvYmplY3Quc3ZnX2RhdGEpIG9iamVjdC5zdmdfZGF0YSA9IHt9O1xyXG4gICAgb2JqZWN0LnN2Z19kYXRhW2NvbHVtbl0gPSBpY29uO1xyXG5cclxuXHJcbiAgICBjb25zb2xlLmxvZygnY29udmVydFN2Z1RvS2VuZG9JY29uOicsIGljb24pO1xyXG4gICAgcmV0dXJuIGljb247XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGlmIChvYmplY3Quc3ZnX2RhdGEpIG9iamVjdC5zdmdfZGF0YVtjb2x1bW5dID0ge307XHJcbiAgICBjb25zb2xlLmVycm9yKGBjb252ZXJ0U3ZnVG9LZW5kb0ljb24gZXJyb3I6ICR7aWNvbk5hbWV9YCwgZXJyb3IpO1xyXG4gICAgcmV0dXJuIG51bGw7XHJcbiAgfVxyXG59XHJcblxyXG5jb252ZXJ0U3ZnVG9LZW5kb0ljb24ob2JqZWN0LCBzdmdDb250ZW50OiBzdHJpbmcsIGljb25OYW1lOiBzdHJpbmcsIGNvbHVtbikge1xyXG4gIGlmICggKHR5cGVvZiBpY29uTmFtZSA9PT0gJ3VuZGVmaW5lZCcpIHx8IGljb25OYW1lID09PSBudWxsICkgaWNvbk5hbWUgPSBjb2x1bW47XHJcbiAgY29uc29sZS5sb2coXCJjb252ZXJ0U3ZnVG9LZW5kb0ljb246c3ZnQ29udGVudDpcIiwgc3ZnQ29udGVudCwgXCJpY29uTmFtZTpcIiwgaWNvbk5hbWUsIFwiY29sdW1uOlwiLCBjb2x1bW4pO1xyXG4gICAgdHJ5IHtcclxuICAgICAgICAvLyBFeHRyYWN0IHZpZXdCb3hcclxuICAgICAgICBjb25zdCB2aWV3Qm94TWF0Y2ggPSBzdmdDb250ZW50Lm1hdGNoKC92aWV3Qm94PVwiKFteXCJdKylcIi8pO1xyXG4gICAgICAgIGNvbnN0IHZpZXdCb3ggPSB2aWV3Qm94TWF0Y2ggPyB2aWV3Qm94TWF0Y2hbMV0gOiAnMCAwIDI0IDI0JztcclxuXHJcbiAgICAgICAgLy8gUGFyc2Ugdmlld0JveCB2YWx1ZXNcclxuICAgICAgICBjb25zdCB2aWV3Qm94VmFsdWVzID0gdmlld0JveC5zcGxpdCgnICcpLm1hcChOdW1iZXIpO1xyXG4gICAgICAgIGNvbnN0IFttaW5YLCBtaW5ZLCB2aWV3Qm94V2lkdGgsIHZpZXdCb3hIZWlnaHRdID0gdmlld0JveFZhbHVlcztcclxuXHJcbiAgICAgICAgLy8gRXh0cmFjdCB3aWR0aCBhbmQgaGVpZ2h0IGlmIHNwZWNpZmllZFxyXG4gICAgICAgIGNvbnN0IHdpZHRoTWF0Y2ggPSBzdmdDb250ZW50Lm1hdGNoKC93aWR0aD1cIihbXlwiXSspXCIvKTtcclxuICAgICAgICBjb25zdCBoZWlnaHRNYXRjaCA9IHN2Z0NvbnRlbnQubWF0Y2goL2hlaWdodD1cIihbXlwiXSspXCIvKTtcclxuICAgICAgICBjb25zdCBzdmdXaWR0aCA9IHdpZHRoTWF0Y2ggPyBwYXJzZUZsb2F0KHdpZHRoTWF0Y2hbMV0pIDogdmlld0JveFdpZHRoO1xyXG4gICAgICAgIGNvbnN0IHN2Z0hlaWdodCA9IGhlaWdodE1hdGNoID8gcGFyc2VGbG9hdChoZWlnaHRNYXRjaFsxXSkgOiB2aWV3Qm94SGVpZ2h0O1xyXG5cclxuICAgICAgICAvLyBUYXJnZXQgc2l6ZSBmb3Igbm9ybWFsaXphdGlvbiAoMjR4MjQgaXMgY29tbW9uIGZvciBpY29ucylcclxuICAgICAgICBjb25zdCBUQVJHRVRfU0laRSA9IDI0O1xyXG5cclxuICAgICAgICAvLyBDYWxjdWxhdGUgc2NhbGUgdG8gZml0IHdpdGhpbiB0YXJnZXQgc2l6ZSB3aGlsZSBtYWludGFpbmluZyBhc3BlY3QgcmF0aW9cclxuICAgICAgICBjb25zdCBzY2FsZVggPSBUQVJHRVRfU0laRSAvIHZpZXdCb3hXaWR0aDtcclxuICAgICAgICBjb25zdCBzY2FsZVkgPSBUQVJHRVRfU0laRSAvIHZpZXdCb3hIZWlnaHQ7XHJcbiAgICAgICAgY29uc3Qgc2NhbGUgPSBNYXRoLm1pbihzY2FsZVgsIHNjYWxlWSk7IC8vIFVzZSBtaW4gdG8gZml0IHdpdGhpbiB0YXJnZXQgYm91bmRzXHJcblxyXG4gICAgICAgIC8vIENhbGN1bGF0ZSBvZmZzZXQgdG8gY2VudGVyIHRoZSBpY29uXHJcbiAgICAgICAgY29uc3Qgc2NhbGVkV2lkdGggPSB2aWV3Qm94V2lkdGggKiBzY2FsZTtcclxuICAgICAgICBjb25zdCBzY2FsZWRIZWlnaHQgPSB2aWV3Qm94SGVpZ2h0ICogc2NhbGU7XHJcbiAgICAgICAgY29uc3Qgb2Zmc2V0WCA9IChUQVJHRVRfU0laRSAtIHNjYWxlZFdpZHRoKSAvIDI7XHJcbiAgICAgICAgY29uc3Qgb2Zmc2V0WSA9IChUQVJHRVRfU0laRSAtIHNjYWxlZEhlaWdodCkgLyAyO1xyXG5cclxuICAgICAgICAvLyBFeHRyYWN0IGFsbCBwYXRocyB3aXRoIHRoZWlyIHN0eWxlcyBhbmQgYXR0cmlidXRlc1xyXG4gICAgICAgIGNvbnN0IHBhdGhSZWdleCA9IC88cGF0aFtePl0qPi9nO1xyXG4gICAgICAgIGxldCBtYXRjaDtcclxuICAgICAgICBsZXQgcGF0aHMgPSBbXTtcclxuICAgICAgICBsZXQgcGF0aENvdW50ID0gMDtcclxuXHJcbiAgICAgICAgd2hpbGUgKChtYXRjaCA9IHBhdGhSZWdleC5leGVjKHN2Z0NvbnRlbnQpKSAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgICBjb25zdCBwYXRoVGFnID0gbWF0Y2hbMF07XHJcbiAgICAgICAgICAgIHBhdGhDb3VudCsrO1xyXG5cclxuICAgICAgICAgICAgLy8gRXh0cmFjdCBkIGF0dHJpYnV0ZSAocmVxdWlyZWQpXHJcbiAgICAgICAgICAgIGNvbnN0IGRNYXRjaCA9IHBhdGhUYWcubWF0Y2goL2Q9XCIoW15cIl0qKVwiLyk7XHJcbiAgICAgICAgICAgIGlmICghZE1hdGNoKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oYFBhdGggJHtwYXRoQ291bnR9IGhhcyBubyAnZCcgYXR0cmlidXRlLCBza2lwcGluZ2ApO1xyXG4gICAgICAgICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8vIFRyYW5zZm9ybSB0aGUgcGF0aCBkYXRhIHRvIHNjYWxlIGFuZCBjZW50ZXIgaXRcclxuICAgICAgICAgICAgY29uc3QgdHJhbnNmb3JtZWREID0gdGhpcy50cmFuc2Zvcm1QYXRoRGF0YShkTWF0Y2hbMV0sIHNjYWxlLCBvZmZzZXRYLCBvZmZzZXRZLCB2aWV3Qm94V2lkdGgsIHZpZXdCb3hIZWlnaHQpO1xyXG5cclxuICAgICAgICAgICAgLy8gSW5pdGlhbGl6ZSBhdHRyaWJ1dGVzXHJcbiAgICAgICAgICAgIGxldCBmaWxsID0gJyc7XHJcbiAgICAgICAgICAgIGxldCBzdHJva2UgPSAnJztcclxuICAgICAgICAgICAgbGV0IHN0cm9rZVdpZHRoID0gJyc7XHJcbiAgICAgICAgICAgIGxldCBmaWxsT3BhY2l0eSA9ICcnO1xyXG4gICAgICAgICAgICBsZXQgc3Ryb2tlT3BhY2l0eSA9ICcnO1xyXG4gICAgICAgICAgICBsZXQgb3BhY2l0eSA9ICcnO1xyXG5cclxuICAgICAgICAgICAgLy8gRXh0cmFjdCBmcm9tIHN0eWxlIGF0dHJpYnV0ZVxyXG4gICAgICAgICAgICBjb25zdCBzdHlsZU1hdGNoID0gcGF0aFRhZy5tYXRjaCgvc3R5bGU9XCIoW15cIl0qKVwiLyk7XHJcbiAgICAgICAgICAgIGlmIChzdHlsZU1hdGNoKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBzdHlsZSA9IHN0eWxlTWF0Y2hbMV07XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gRXh0cmFjdCBhbGwgc3R5bGUgcHJvcGVydGllc1xyXG4gICAgICAgICAgICAgICAgY29uc3QgZmlsbE1hdGNoID0gc3R5bGUubWF0Y2goL2ZpbGw6KFteO1wiXSspLyk7XHJcbiAgICAgICAgICAgICAgICBpZiAoZmlsbE1hdGNoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZmlsbFZhbHVlID0gZmlsbE1hdGNoWzFdLnRyaW0oKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoZmlsbFZhbHVlICYmIGZpbGxWYWx1ZSAhPT0gJycpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZmlsbCA9IGZpbGxWYWx1ZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgY29uc3Qgc3Ryb2tlTWF0Y2ggPSBzdHlsZS5tYXRjaCgvc3Ryb2tlOihbXjtcIl0rKS8pO1xyXG4gICAgICAgICAgICAgICAgaWYgKHN0cm9rZU1hdGNoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgc3Ryb2tlVmFsdWUgPSBzdHJva2VNYXRjaFsxXS50cmltKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHN0cm9rZVZhbHVlICYmIHN0cm9rZVZhbHVlICE9PSAnJykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHJva2UgPSBzdHJva2VWYWx1ZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgY29uc3Qgc3Ryb2tlV2lkdGhNYXRjaCA9IHN0eWxlLm1hdGNoKC9zdHJva2Utd2lkdGg6KFteO1wiXSspLyk7XHJcbiAgICAgICAgICAgICAgICBpZiAoc3Ryb2tlV2lkdGhNYXRjaCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IG9yaWdpbmFsU3Ryb2tlV2lkdGggPSBwYXJzZUZsb2F0KHN0cm9rZVdpZHRoTWF0Y2hbMV0udHJpbSgpKTtcclxuICAgICAgICAgICAgICAgICAgICAvLyBTY2FsZSBzdHJva2Ugd2lkdGggcHJvcG9ydGlvbmFsbHlcclxuICAgICAgICAgICAgICAgICAgICBpZiAoIWlzTmFOKG9yaWdpbmFsU3Ryb2tlV2lkdGgpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0cm9rZVdpZHRoID0gKG9yaWdpbmFsU3Ryb2tlV2lkdGggKiBzY2FsZSkudG9TdHJpbmcoKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgY29uc3QgZmlsbE9wYWNpdHlNYXRjaCA9IHN0eWxlLm1hdGNoKC9maWxsLW9wYWNpdHk6KFteO1wiXSspLyk7XHJcbiAgICAgICAgICAgICAgICBpZiAoZmlsbE9wYWNpdHlNYXRjaCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGZpbGxPcGFjaXR5ID0gZmlsbE9wYWNpdHlNYXRjaFsxXS50cmltKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgY29uc3Qgc3Ryb2tlT3BhY2l0eU1hdGNoID0gc3R5bGUubWF0Y2goL3N0cm9rZS1vcGFjaXR5OihbXjtcIl0rKS8pO1xyXG4gICAgICAgICAgICAgICAgaWYgKHN0cm9rZU9wYWNpdHlNYXRjaCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHN0cm9rZU9wYWNpdHkgPSBzdHJva2VPcGFjaXR5TWF0Y2hbMV0udHJpbSgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGNvbnN0IG9wYWNpdHlNYXRjaCA9IHN0eWxlLm1hdGNoKC9vcGFjaXR5OihbXjtcIl0rKS8pO1xyXG4gICAgICAgICAgICAgICAgaWYgKG9wYWNpdHlNYXRjaCkge1xyXG4gICAgICAgICAgICAgICAgICAgIG9wYWNpdHkgPSBvcGFjaXR5TWF0Y2hbMV0udHJpbSgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvLyBJZiBubyBzdHlsZSwgY2hlY2sgaW5kaXZpZHVhbCBhdHRyaWJ1dGVzXHJcbiAgICAgICAgICAgIGlmICghc3R5bGVNYXRjaCkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgZmlsbEF0dHIgPSBwYXRoVGFnLm1hdGNoKC9maWxsPVwiKFteXCJdKilcIi8pO1xyXG4gICAgICAgICAgICAgICAgaWYgKGZpbGxBdHRyICYmIGZpbGxBdHRyWzFdICE9PSAnJykge1xyXG4gICAgICAgICAgICAgICAgICAgIGZpbGwgPSBmaWxsQXR0clsxXTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBjb25zdCBzdHJva2VBdHRyID0gcGF0aFRhZy5tYXRjaCgvc3Ryb2tlPVwiKFteXCJdKilcIi8pO1xyXG4gICAgICAgICAgICAgICAgaWYgKHN0cm9rZUF0dHIgJiYgc3Ryb2tlQXR0clsxXSAhPT0gJycpIHtcclxuICAgICAgICAgICAgICAgICAgICBzdHJva2UgPSBzdHJva2VBdHRyWzFdO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGNvbnN0IHN0cm9rZVdpZHRoQXR0ciA9IHBhdGhUYWcubWF0Y2goL3N0cm9rZS13aWR0aD1cIihbXlwiXSopXCIvKTtcclxuICAgICAgICAgICAgICAgIGlmIChzdHJva2VXaWR0aEF0dHIpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBvcmlnaW5hbFN0cm9rZVdpZHRoID0gcGFyc2VGbG9hdChzdHJva2VXaWR0aEF0dHJbMV0pO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIFNjYWxlIHN0cm9rZSB3aWR0aCBwcm9wb3J0aW9uYWxseVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICghaXNOYU4ob3JpZ2luYWxTdHJva2VXaWR0aCkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3Ryb2tlV2lkdGggPSAob3JpZ2luYWxTdHJva2VXaWR0aCAqIHNjYWxlKS50b1N0cmluZygpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBjb25zdCBmaWxsT3BhY2l0eUF0dHIgPSBwYXRoVGFnLm1hdGNoKC9maWxsLW9wYWNpdHk9XCIoW15cIl0qKVwiLyk7XHJcbiAgICAgICAgICAgICAgICBpZiAoZmlsbE9wYWNpdHlBdHRyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZmlsbE9wYWNpdHkgPSBmaWxsT3BhY2l0eUF0dHJbMV07XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgY29uc3Qgc3Ryb2tlT3BhY2l0eUF0dHIgPSBwYXRoVGFnLm1hdGNoKC9zdHJva2Utb3BhY2l0eT1cIihbXlwiXSopXCIvKTtcclxuICAgICAgICAgICAgICAgIGlmIChzdHJva2VPcGFjaXR5QXR0cikge1xyXG4gICAgICAgICAgICAgICAgICAgIHN0cm9rZU9wYWNpdHkgPSBzdHJva2VPcGFjaXR5QXR0clsxXTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLy8gQnVpbGQgcGF0aCBlbGVtZW50IHdpdGggdHJhbnNmb3JtZWQgZCBhdHRyaWJ1dGVcclxuICAgICAgICAgICAgbGV0IHBhdGhFbGVtZW50ID0gYDxwYXRoIGQ9XCIke3RyYW5zZm9ybWVkRH1cImA7XHJcblxyXG4gICAgICAgICAgICAvLyBBZGQgZmlsbCBpZiBpdCBleGlzdHMgKGluY2x1ZGluZyAnbm9uZScpXHJcbiAgICAgICAgICAgIGlmIChmaWxsICYmIGZpbGwgIT09ICcnKSB7XHJcbiAgICAgICAgICAgICAgICBwYXRoRWxlbWVudCArPSBgIGZpbGw9XCIke2ZpbGx9XCJgO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvLyBBZGQgc3Ryb2tlIGlmIGl0IGV4aXN0cyAoaW5jbHVkaW5nICdub25lJylcclxuICAgICAgICAgICAgaWYgKHN0cm9rZSAmJiBzdHJva2UgIT09ICcnKSB7XHJcbiAgICAgICAgICAgICAgICBwYXRoRWxlbWVudCArPSBgIHN0cm9rZT1cIiR7c3Ryb2tlfVwiYDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLy8gQWRkIHN0cm9rZS13aWR0aCBpZiBpdCBleGlzdHNcclxuICAgICAgICAgICAgaWYgKHN0cm9rZVdpZHRoICYmIHN0cm9rZVdpZHRoICE9PSAnJykge1xyXG4gICAgICAgICAgICAgICAgcGF0aEVsZW1lbnQgKz0gYCBzdHJva2Utd2lkdGg9XCIke3N0cm9rZVdpZHRofVwiYDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLy8gQWRkIG9wYWNpdHkgaWYgaXQgZXhpc3RzXHJcbiAgICAgICAgICAgIGlmIChvcGFjaXR5ICYmIG9wYWNpdHkgIT09ICcnKSB7XHJcbiAgICAgICAgICAgICAgICBwYXRoRWxlbWVudCArPSBgIG9wYWNpdHk9XCIke29wYWNpdHl9XCJgO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvLyBBZGQgZmlsbC1vcGFjaXR5IGlmIGl0IGV4aXN0c1xyXG4gICAgICAgICAgICBpZiAoZmlsbE9wYWNpdHkgJiYgZmlsbE9wYWNpdHkgIT09ICcnKSB7XHJcbiAgICAgICAgICAgICAgICBwYXRoRWxlbWVudCArPSBgIGZpbGwtb3BhY2l0eT1cIiR7ZmlsbE9wYWNpdHl9XCJgO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvLyBBZGQgc3Ryb2tlLW9wYWNpdHkgaWYgaXQgZXhpc3RzXHJcbiAgICAgICAgICAgIGlmIChzdHJva2VPcGFjaXR5ICYmIHN0cm9rZU9wYWNpdHkgIT09ICcnKSB7XHJcbiAgICAgICAgICAgICAgICBwYXRoRWxlbWVudCArPSBgIHN0cm9rZS1vcGFjaXR5PVwiJHtzdHJva2VPcGFjaXR5fVwiYDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgcGF0aEVsZW1lbnQgKz0gYCAvPmA7XHJcbiAgICAgICAgICAgIHBhdGhzLnB1c2gocGF0aEVsZW1lbnQpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zb2xlLmxvZyhcImNvbnZlcnRTdmdUb0tlbmRvSWNvbjpoZXJlMTpcIik7XHJcblxyXG4gICAgICAgIC8vIElmIG5vIHBhdGhzIGZvdW5kLCB0cnkgdG8gZXh0cmFjdCBmcm9tIFNWRyBjb250ZW50IGRpcmVjdGx5IChmYWxsYmFjaylcclxuICAgICAgICBpZiAocGF0aHMubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUud2FybignTm8gcGF0aHMgZm91bmQgaW4gU1ZHLCB0cnlpbmcgZmFsbGJhY2sgZXh0cmFjdGlvbicpO1xyXG4gICAgICAgICAgICBjb25zdCBjb250ZW50TWF0Y2ggPSBzdmdDb250ZW50Lm1hdGNoKC88c3ZnW14+XSo+KFtcXHNcXFNdKj8pPFxcL3N2Zz4vKTtcclxuICAgICAgICAgICAgaWYgKGNvbnRlbnRNYXRjaCAmJiBjb250ZW50TWF0Y2hbMV0pIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGlubmVyQ29udGVudCA9IGNvbnRlbnRNYXRjaFsxXTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGlubmVyUGF0aFJlZ2V4ID0gLzxwYXRoW14+XSo+L2c7XHJcbiAgICAgICAgICAgICAgICBsZXQgaW5uZXJNYXRjaDtcclxuICAgICAgICAgICAgICAgIHdoaWxlICgoaW5uZXJNYXRjaCA9IGlubmVyUGF0aFJlZ2V4LmV4ZWMoaW5uZXJDb250ZW50KSkgIT09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgICAgICBwYXRocy5wdXNoKGlubmVyTWF0Y2hbMF0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBJZiBzdGlsbCBubyBwYXRocywgcmV0dXJuIG51bGwgb3IgdGhyb3cgZXJyb3JcclxuICAgICAgICBpZiAocGF0aHMubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoYE5vIHBhdGhzIGZvdW5kIGluIFNWRyBmb3IgaWNvbjogJHtpY29uTmFtZX1gKTtcclxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBCdWlsZCB0aGUgY29udGVudCBzdHJpbmcgd2l0aCBwcm9wZXIgZm9ybWF0dGluZ1xyXG4gICAgICAgIGNvbnN0IGNvbnRlbnQgPSBwYXRocy5qb2luKCcnKTtcclxuXHJcbiAgICAgICAgLy8gVXNlIHRoZSB0YXJnZXQgc2l6ZSBhcyB0aGUgbm9ybWFsaXplZCB2aWV3Qm94XHJcbiAgICAgICAgY29uc3Qgbm9ybWFsaXplZFZpZXdCb3ggPSBgMCAwICR7VEFSR0VUX1NJWkV9ICR7VEFSR0VUX1NJWkV9YDtcclxuXHJcbiAgICAgICAgLy8gQ3JlYXRlIHRoZSBLZW5kbyBpY29uIHN0cnVjdHVyZVxyXG4gICAgICAgIG9iamVjdC5zdmdfZGF0YVtjb2x1bW5dID0ge1xyXG4gICAgICAgICAgICBuYW1lOiBpY29uTmFtZSxcclxuICAgICAgICAgICAgY29udGVudDogY29udGVudCxcclxuICAgICAgICAgICAgdmlld0JveDogbm9ybWFsaXplZFZpZXdCb3gsXHJcbiAgICAgICAgICAgIHZhcmlhbnRzOiB7XHJcbiAgICAgICAgICAgICAgICBzb2xpZDogJycsXHJcbiAgICAgICAgICAgICAgICBvdXRsaW5lOiAnJyxcclxuICAgICAgICAgICAgICAgIGR1b3RvbmU6ICcnXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiY29udmVydFN2Z1RvS2VuZG9JY29uOm9iamVjdC5zdmdfZGF0YTpcIiwgb2JqZWN0LnN2Z19kYXRhKTtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBuYW1lOiBpY29uTmFtZSxcclxuICAgICAgICAgICAgY29udGVudDogY29udGVudCxcclxuICAgICAgICAgICAgdmlld0JveDogbm9ybWFsaXplZFZpZXdCb3gsXHJcbiAgICAgICAgICAgIHZhcmlhbnRzOiB7XHJcbiAgICAgICAgICAgICAgICBzb2xpZDogY29udGVudCxcclxuICAgICAgICAgICAgICAgIG91dGxpbmU6ICcnLFxyXG4gICAgICAgICAgICAgICAgZHVvdG9uZTogJydcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgIG9iamVjdC5zdmdfZGF0YVtjb2x1bW5dID0ge307XHJcbiAgICAgICAgY29uc29sZS5lcnJvcihgRXJyb3IgY29udmVydGluZyBTVkcgdG8gS2VuZG8gaWNvbjogJHtpY29uTmFtZX1gLCBlcnJvcik7XHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcbn1cclxuXHJcbi8vIEhlbHBlciBmdW5jdGlvbiB0byB0cmFuc2Zvcm0gcGF0aCBkYXRhXHJcbnRyYW5zZm9ybVBhdGhEYXRhKGQ6IHN0cmluZywgc2NhbGU6IG51bWJlciwgb2Zmc2V0WDogbnVtYmVyLCBvZmZzZXRZOiBudW1iZXIsIHZpZXdCb3hXaWR0aDogbnVtYmVyLCB2aWV3Qm94SGVpZ2h0OiBudW1iZXIpOiBzdHJpbmcge1xyXG4gICAgLy8gVGhpcyBmdW5jdGlvbiB0cmFuc2Zvcm1zIHRoZSBwYXRoIGNvbW1hbmRzXHJcbiAgICAvLyBJdCBoYW5kbGVzIGFic29sdXRlICh1cHBlcmNhc2UpIGFuZCByZWxhdGl2ZSAobG93ZXJjYXNlKSBjb21tYW5kc1xyXG4gICAgXHJcbiAgICBjb25zdCBjb21tYW5kcyA9IGQubWF0Y2goL1thLXpBLVpdW15hLXpBLVpdKi9nKTtcclxuICAgIGlmICghY29tbWFuZHMpIHJldHVybiBkO1xyXG5cclxuICAgIGNvbnN0IHRyYW5zZm9ybWVkQ29tbWFuZHMgPSBjb21tYW5kcy5tYXAoY21kID0+IHtcclxuICAgICAgICBjb25zdCBjb21tYW5kID0gY21kWzBdO1xyXG4gICAgICAgIGNvbnN0IHZhbHVlcyA9IGNtZC5zbGljZSgxKS50cmltKCkuc3BsaXQoL1tcXHMsXSsvKS5maWx0ZXIodiA9PiB2ICE9PSAnJykubWFwKE51bWJlcik7XHJcbiAgICAgICAgXHJcbiAgICAgICAgaWYgKHZhbHVlcy5sZW5ndGggPT09IDApIHJldHVybiBjbWQ7XHJcblxyXG4gICAgICAgIGxldCB0cmFuc2Zvcm1lZFZhbHVlczogbnVtYmVyW10gPSBbXTtcclxuXHJcbiAgICAgICAgc3dpdGNoIChjb21tYW5kKSB7XHJcbiAgICAgICAgICAgIGNhc2UgJ00nOiAvLyBNb3ZlIHRvIChhYnNvbHV0ZSlcclxuICAgICAgICAgICAgY2FzZSAnTCc6IC8vIExpbmUgdG8gKGFic29sdXRlKVxyXG4gICAgICAgICAgICBjYXNlICdDJzogLy8gQ3ViaWMgQmV6aWVyIChhYnNvbHV0ZSlcclxuICAgICAgICAgICAgY2FzZSAnUyc6IC8vIFNtb290aCBCZXppZXIgKGFic29sdXRlKVxyXG4gICAgICAgICAgICBjYXNlICdRJzogLy8gUXVhZHJhdGljIEJlemllciAoYWJzb2x1dGUpXHJcbiAgICAgICAgICAgIGNhc2UgJ1QnOiAvLyBTbW9vdGggUXVhZHJhdGljIChhYnNvbHV0ZSlcclxuICAgICAgICAgICAgY2FzZSAnQSc6IC8vIEFyYyAoYWJzb2x1dGUpXHJcbiAgICAgICAgICAgIGNhc2UgJ1onOlxyXG4gICAgICAgICAgICBjYXNlICd6JzpcclxuICAgICAgICAgICAgICAgIC8vIERvbid0IHRyYW5zZm9ybSBaIGNvbW1hbmRzXHJcbiAgICAgICAgICAgICAgICBpZiAoY29tbWFuZCA9PT0gJ1onIHx8IGNvbW1hbmQgPT09ICd6Jykge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAnWic7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAvLyBUcmFuc2Zvcm0gY29vcmRpbmF0ZXNcclxuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdmFsdWVzLmxlbmd0aDsgaSArPSAyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgeCA9IHZhbHVlc1tpXTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCB5ID0gdmFsdWVzW2kgKyAxXTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoIWlzTmFOKHgpICYmICFpc05hTih5KSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm1lZFZhbHVlcy5wdXNoKHggKiBzY2FsZSArIG9mZnNldFgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm1lZFZhbHVlcy5wdXNoKHkgKiBzY2FsZSArIG9mZnNldFkpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybWVkVmFsdWVzLnB1c2goeCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybWVkVmFsdWVzLnB1c2goeSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICBjYXNlICdtJzogLy8gTW92ZSB0byAocmVsYXRpdmUpXHJcbiAgICAgICAgICAgIGNhc2UgJ2wnOiAvLyBMaW5lIHRvIChyZWxhdGl2ZSlcclxuICAgICAgICAgICAgY2FzZSAnYyc6IC8vIEN1YmljIEJlemllciAocmVsYXRpdmUpXHJcbiAgICAgICAgICAgIGNhc2UgJ3MnOiAvLyBTbW9vdGggQmV6aWVyIChyZWxhdGl2ZSlcclxuICAgICAgICAgICAgY2FzZSAncSc6IC8vIFF1YWRyYXRpYyBCZXppZXIgKHJlbGF0aXZlKVxyXG4gICAgICAgICAgICBjYXNlICd0JzogLy8gU21vb3RoIFF1YWRyYXRpYyAocmVsYXRpdmUpXHJcbiAgICAgICAgICAgIGNhc2UgJ2EnOiAvLyBBcmMgKHJlbGF0aXZlKVxyXG4gICAgICAgICAgICAgICAgLy8gVHJhbnNmb3JtIGNvb3JkaW5hdGVzXHJcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHZhbHVlcy5sZW5ndGg7IGkgKz0gMikge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHggPSB2YWx1ZXNbaV07XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgeSA9IHZhbHVlc1tpICsgMV07XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFpc05hTih4KSAmJiAhaXNOYU4oeSkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtZWRWYWx1ZXMucHVzaCh4ICogc2NhbGUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm1lZFZhbHVlcy5wdXNoKHkgKiBzY2FsZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtZWRWYWx1ZXMucHVzaCh4KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtZWRWYWx1ZXMucHVzaCh5KTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgIGNhc2UgJ0gnOiAvLyBIb3Jpem9udGFsIGxpbmUgKGFic29sdXRlKVxyXG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtZWRWYWx1ZXMucHVzaCh2YWx1ZXNbMF0gKiBzY2FsZSArIG9mZnNldFgpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICBjYXNlICdoJzogLy8gSG9yaXpvbnRhbCBsaW5lIChyZWxhdGl2ZSlcclxuICAgICAgICAgICAgICAgIHRyYW5zZm9ybWVkVmFsdWVzLnB1c2godmFsdWVzWzBdICogc2NhbGUpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICBjYXNlICdWJzogLy8gVmVydGljYWwgbGluZSAoYWJzb2x1dGUpXHJcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm1lZFZhbHVlcy5wdXNoKHZhbHVlc1swXSAqIHNjYWxlICsgb2Zmc2V0WSk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgIGNhc2UgJ3YnOiAvLyBWZXJ0aWNhbCBsaW5lIChyZWxhdGl2ZSlcclxuICAgICAgICAgICAgICAgIHRyYW5zZm9ybWVkVmFsdWVzLnB1c2godmFsdWVzWzBdICogc2NhbGUpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgLy8gVW5rbm93biBjb21tYW5kLCBrZWVwIG9yaWdpbmFsXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gY21kO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gRm9ybWF0IHRoZSB2YWx1ZXMgYXMgYSBzdHJpbmdcclxuICAgICAgICBjb25zdCB2YWx1ZVN0ciA9IHRyYW5zZm9ybWVkVmFsdWVzLm1hcCh2ID0+IHtcclxuICAgICAgICAgICAgLy8gUm91bmQgdG8gcmVhc29uYWJsZSBwcmVjaXNpb25cclxuICAgICAgICAgICAgcmV0dXJuIE51bWJlci5pc0ludGVnZXIodikgPyB2LnRvU3RyaW5nKCkgOiB2LnRvRml4ZWQoNCk7XHJcbiAgICAgICAgfSkuam9pbignICcpO1xyXG5cclxuICAgICAgICByZXR1cm4gY29tbWFuZCArIHZhbHVlU3RyO1xyXG4gICAgfSk7XHJcblxyXG4gICAgcmV0dXJuIHRyYW5zZm9ybWVkQ29tbWFuZHMuam9pbignJyk7XHJcbn1cclxuXHJcbnB1YmxpYyBnZXRJbnZhbGlkQ29udHJvbHNfZ3JpZChvYmplY3QpIHtcclxuICAvL2NvbnNvbGUubG9nIChcInRlc3RpbmcgZ2V0SW52YWxpZENvbnRyb2xzOlwiLCAgIG9iamVjdC5mb3JtR3JvdXAuaW52YWxpZCwgb2JqZWN0LmZvcm1Hcm91cC5jb250cm9scylcclxuICBjb25zdCBpbnZhbGlkID0gW107XHJcbiAgY29uc3QgY29udHJvbHMgPSBvYmplY3QuZm9ybUdyb3VwLmNvbnRyb2xzO1xyXG4gIGZvciAoY29uc3QgbmFtZSBpbiBjb250cm9scykge1xyXG4gICAgICBpZiAoY29udHJvbHNbbmFtZV0uaW52YWxpZCkge1xyXG4gICAgICAgICBsZXQgbmFtZU1TZyA9IHRoaXMuZ2V0TkxTKFtdLCAnb3JtcGdtb2JfZm1iLnVzZXJJbmZvT3JtcGdtb2JGbWJCU3Vic2NyaWJlcltcIm5hbWVcIl0nLG5hbWUpXHJcbiAgICAgICAgICBpbnZhbGlkLnB1c2gobmFtZU1TZyk7XHJcbiAgICAgIH1cclxuICB9XHJcbiAgdGhpcy5zaG93Tm90aWZpY2F0aW9uKFwiZXJyb3JcIiwgdGhpcy5nZXROTFMoW2ludmFsaWQudG9TdHJpbmcoKV0sXHJcbiAgJ05PX1ZBTElEX0RBVEFfRk9SJywnTm8gdmFsaWQgZGF0YSBmb3IgOiAgIyMgJykpO1xyXG4gIHJldHVybiBpbnZhbGlkO1xyXG59XHJcbn1cclxuXHJcbi8qXHJcbkBJbmplY3RhYmxlKHtcclxuICBwcm92aWRlZEluOiAncm9vdCcsXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBzdGFyU2VydmljZXMgZXh0ZW5kcyBzdGFyX1NlcnZpY2VzIHtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihcclxuICAgICAgICBub3RpZmljYXRpb25TZXJ2aWNlOk5vdGlmaWNhdGlvblNlcnZpY2UsXHJcbiAgICAgICAgZGlhbG9nU2VydmljZTogRGlhbG9nU2VydmljZSxcclxuICAgICAgICBodHRwOiBIdHRwQ2xpZW50LCAgIG1lc3NhZ2VzOiBNZXNzYWdlU2VydmljZSkge1xyXG4gICAgICAgIC8vbGV0IFBhZ2UgPSBlbmNvZGVVUkkgKFwiJl9xdWVyeT1HRVRfRUlNX0NPTU1BTkRTJlNQQ19GVU5DVElPTj0nJScmRVhDU1lTVEVNPSdTTU5TXzMnJkVRVUlQSUQ9JyUnXCIpO1xyXG4gICAgICAgIGxldCBQYWdlID0gZW5jb2RlVVJJIChcIlwiKTtcclxuXHJcblxyXG4gICAgICAgIHN1cGVyKFxyXG4gICAgICAgICAgICBub3RpZmljYXRpb25TZXJ2aWNlLFxyXG4gICAgICAgICAgICBkaWFsb2dTZXJ2aWNlLFxyXG4gICAgICAgICAgICBodHRwLCBQYWdlLCBtZXNzYWdlcyk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBxdWVyeUZvckNhdGVnb3J5KHsgQ2F0ZWdvcnlJRCB9OiB7IENhdGVnb3J5SUQ6IG51bWJlciB9LCBzdGF0ZT86IGFueSk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMucXVlcnkoT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUsIHtcclxuICAgICAgICAgICAgZmlsdGVyOiB7XHJcbiAgICAgICAgICAgICAgICBmaWx0ZXJzOiBbe1xyXG4gICAgICAgICAgICAgICAgICAgIGZpZWxkOiAnQ2F0ZWdvcnlJRCcsIG9wZXJhdG9yOiAnZXEnLCB2YWx1ZTogQ2F0ZWdvcnlJRFxyXG4gICAgICAgICAgICAgICAgfV0sXHJcbiAgICAgICAgICAgICAgICBsb2dpYzogJ2FuZCdcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgcXVlcnlGb3JQcm9kdWN0TmFtZShQcm9kdWN0TmFtZTogc3RyaW5nLCBzdGF0ZT86IGFueSk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMucXVlcnkoT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUsIHtcclxuICAgICAgICAgICAgZmlsdGVyOiB7XHJcbiAgICAgICAgICAgICAgICBmaWx0ZXJzOiBbe1xyXG4gICAgICAgICAgICAgICAgICAgIGZpZWxkOiAnUHJvZHVjdE5hbWUnLCBvcGVyYXRvcjogJ2NvbnRhaW5zJywgdmFsdWU6IFByb2R1Y3ROYW1lXHJcbiAgICAgICAgICAgICAgICB9XSxcclxuICAgICAgICAgICAgICAgIGxvZ2ljOiAnYW5kJ1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSkpO1xyXG4gICAgfVxyXG5cclxufVxyXG5cclxuKi9cclxuIl19