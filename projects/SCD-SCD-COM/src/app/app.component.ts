import { Component, Injectable} from '@angular/core';
import {
  PanelBarExpandMode,
  PanelBarStateChangeEvent,
} from "@progress/kendo-angular-layout";
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpProgressEvent, HttpEventType, HttpResponse } from '@angular/common/http';
import { Location } from '@angular/common';
import { Observable, of, concat } from 'rxjs';
import { delay } from 'rxjs/operators';
//import { MessageService } from '@progress/kendo-angular-l10n';
import { Router } from '@angular/router';

import { PanelBarItemModel } from '@progress/kendo-angular-layout';
import { starServices } from 'starlib';


import { environment } from '../environments/environment';
import {   componentConfigDef } from '@modeldir/model';
import { StarNotifyService } from './services/starnotification.service';
import {  KeycloakService } from 'keycloak-angular';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { Subscription } from 'rxjs';
declare function getParamConfig():any;
declare function setParamConfig(var1:any):any;

@Component({
  //providers: [ MessageService ],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {
  public router: Router;
  public  selectedId = '';
  public  MenuWithLogin = true;
  public  showPanelbar : boolean = true;
  public showLogoff:boolean = true;
  public  showMenuButton : boolean = true;
  public showLogn : boolean = false;
  public showModuleSelection : boolean = true;
  public showLang: boolean = true;
   public showMainModules: boolean = true;
  public expandMode: PanelBarExpandMode = 0; //Single
  public compSelector = 'app-root';
  public menuItemsHoriz = [];
  public menuSize:any ="large";
	public horizMen = true;


  public staticMenu : boolean = false; //////////////////
  
  public paramConfig;
  public currentMenu = "PROVISION";
  public isPhonePortrait = false;
  private Body =[];

  public testEKYC = false;
  public navTo = "";
   public shareTo = "";
  public shareToScreen = "";


  private user = "ekyc";
  private password = "ekyc";
  private ekycPathName = "/DSPEKYC";

  private limit = 1000;
  private language_name ="en";
  public masterParams;
  public windowLoc;
  
  constructor(/*private messages: MessageService, */private keycloakService:KeycloakService, public responsive: BreakpointObserver,private location: Location,private starNotify: StarNotifyService, router: Router, public starServices: starServices) {
    this.windowLoc =  window.location
    this.router = router;
    this.paramConfig = getParamConfig();
console.log ("environment:",environment)
    var EPMENG_URL = environment.EPMENG_URL;
    var SERVER_URL = environment.SERVER_URL;
    var BASE_URL = SERVER_URL + '/api?_format=json&_limit=' + this.starServices.limit;
    this.starServices.BASE_URL = BASE_URL;
    this.starServices.EPMENG_URL = EPMENG_URL;
    this.starServices.SERVER_URL = SERVER_URL;

   
          

    var locPath = this.location.path();
    //if (this.paramConfig.DEBUG_FLAG) console.log ("test:constructor:", href, " pathname:", pathname);
    var array = locPath.split("?");
    //console.log("array[1]:",array[1])
    if (typeof array[1] !== "undefined") {
       try {
           let text = atob(array[1]);
           array[1] = text;
        } catch (e) {
          //var text = array[1];
        }
      //console.log("array[1]:",array[1])
      if (!array[1].startsWith("link")) {
        if (array[1].startsWith("owner=")) {
          let text = array[1];
          var array1 = text.split("=");
          //console.log("here3:",array1[1])
          this.paramConfig.DBLoc = array1[1] + "_FLOW";
        }
          else if  (array[1].startsWith("nav=")) {
            let text = array[1];
            var array1 = text.split("=");
            console.log("here3:",array1[1])
            this.navTo = array1[1];
          }
          else if (array[1].startsWith("share=")) {
            let text = array[1];
            var array2 = text.split("&");
            let param1 = array2[0].split("=");
            //console.log("here4:", param1[1])
            this.shareTo = param1[1];
            if (array2.length > 1){
              let param2 = array2[1].split("=");
              //console.log("here4:", param2[1])
              this.shareToScreen = param2[1];
            }
          }
          else if (array[1].startsWith("var=")) {
            let text = array[1];
            var array2 = text.split("&");
            let param1 = array2[0].split("=");
            console.log("here4:", param1[1])
            //this.shareTo = param1[1];
            if (array2.length > 1){
              let param2 = array2[1].split("=");
              console.log("here4:", param2[1])
              //this.shareToScreen = param2[1];
              this.starServices.sessionParams[param1[1]] = param2[1];
            }
          }
          else
          {
        //let buff =  Buffer.alloc(array[1].length, array[1], 'base64');
        //let text = buff.toString('ascii');
        try {
          var text = atob(array[1]);
        } catch (e) {
          var text = array[1];
        }
            if (this.paramConfig.DEBUG_FLAG) console.log("text:"+text);
            if  (text.startsWith("link")) {
          array[1] = text;
              href = array.join("?") ;
        }
      }
    }

      }
    //Fuad Code End
    
    var href =  window.location.href;
    var pathname =  window.location.pathname ;
    //console.log ("test:constructor:", href, " pathname:", pathname);
    var array = href.split("?");
    console.log ("test:array:", array);
    if (typeof array[1] !== "undefined"){
      //console.log ("test:array:", array);
      if  (!array[1].startsWith("link")) {

        
        try {
        var text = atob(array[1]);
      } catch (e) {
        var text = array[1];
      }

        //console.log("text:"+text);
        if  (text.startsWith("link")) {
          array[1] = text;
          href = array.join("?") ;
        }
      }
    }
    //alert ( href);
    //console.log("test:href:",href)
    var url = new URL(href);
    //console.log("test:url:",url)
    //console.log("test:url:",url.searchParams);
    var link = url.searchParams.get("link");
    //console.log("test:link:",link, this.starServices.eKycScr)

      if ( ( link != null) && (link.toUpperCase() == this.starServices.eKycScr )) {
      var orderno = url.searchParams.get("orderno");
      var woorderno = url.searchParams.get("woorderno");
      var msgstatus = url.searchParams.get("status");
      var external_id = url.searchParams.get("external_id");
        if (this.paramConfig.DEBUG_FLAG) console.log("external_id:",external_id);
      if (external_id != null)
        orderno = external_id;
      this.language_name = url.searchParams.get("language");
      console.log("language:", this.language_name)
      var step = url.searchParams.get("step");

      

      this.starServices.sessionParams["orderno"] = orderno;
      this.starServices.sessionParams["woorderno"] = woorderno;
      this.starServices.sessionParams["status"] = msgstatus;
      this.starServices.sessionParams["external_id"] = external_id;
      this.starServices.sessionParams["language_name"] = this.language_name;
      this.starServices.sessionParams["step"] = step;
      this.starServices.sessionParams["href"] = href;

      this.testEKYC = true;



    }
      var lang = url.searchParams.get("language");
      if (this.paramConfig.DEBUG_FLAG) console.log("lang:", lang)
        console.log("lang:", lang)
        if ( lang !== null){
        this.language_name = lang;
        //this.starServices.loadLanguage(lang);
      }

     //console.log("his.navTo.length:1:", this.navTo.length)
      if ( (this.testEKYC) || (this.navTo.length!=0) ){
        var href =  window.location.href;
      this.showPanelbar = false;
      this.MenuWithLogin = false;
    }
    //console.log("this.shareTo.length:1:", this.testEKYC, this.shareTo.length)
    if ((this.testEKYC) || (this.shareTo.length != 0)) {
  this.showLang = false;
      var href = window.location.href;
      this.showPanelbar = true;
      this.MenuWithLogin = false;
      this.showLogoff = false;
      this.showMainModules = false;
    }


 

      if (this.MenuWithLogin == false){
      this.showLogn = false;
      this.showMenuButton = true;
      this.showPanelbar = true;
    }
    else {
        if (this.keycLoak.KEYCLOAK_checkLoginIframe)
          this.showLogn = false;
        else
          this.showLogn = true;
          this.showMenuButton = false;
          this.showPanelbar = false;
    }


  }
    public setStyles(element: string, color: string) {
        document.documentElement.style.setProperty(element, color);
    }
  public panelItems = [];
  public menu;
  public items = [];
  public moduleName = "";
  public componentConfig: componentConfigDef;
  /*
   {
    text: 'Select Module',
    items: [{ text: 'Provisoining', id:"PROVISION" }, { text: 'System Admin', id:"SETTINGS" }]
  }];
*/
  public langitems =
    [{
      text: this.starServices.getNLS([],'SELECT_LANGUAGE','Language'),
      items: [{ text: 'English', id: "en" }
    //  , { text: 'Arabic', id: "ar" }, { text: 'German', id: "de" }
    ]
    }];
  

   

  private componentConfigChangeEvent: Subscription;
    public ngOnInit(): void {
    this.responsive
  .observe([Breakpoints.HandsetPortrait])
  .subscribe((state: BreakpointState) => {
    this.isPhonePortrait = false;
        if (state.matches) {
           this.isPhonePortrait = true;
        }
          //console.log("this.isPhonePortrait:", this.isPhonePortrait)
  });
    
  //if (this.paramConfig.DEBUG_FLAG) console.log ("test:hello1");
    //if (this.paramConfig.DEBUG_FLAG) console.log ("test:hello2");
    this.currentMenu = this.paramConfig.defaultModule;

  if (this.testEKYC){
    this.starServices.login(this,"EKYC", "ekyc");
    }
    //console.log("his.navTo.length:2:", this.navTo.length)
    
  if ( (this.navTo.length!=0) ){
        let cookies = this.starServices.parseCookies(document.cookie);
        let appgenStrEnc = cookies['appgen'];
        let appgenStr = this.starServices.decryptData(appgenStrEnc);
        let appgenStrArr = this.starServices.parseCookies(appgenStr);
        let user = appgenStrArr['user'];
        let pass = appgenStrArr['pass'];
        this.starServices.login(this,user, pass);
      }
      if ((this.shareTo.length != 0)) {
      //console.log("here4:" + this.shareTo+":" )
      //this.starServices.login(this, this.shareTo, this.shareTo);
      this.starServices.login(this, "EKYC", "ekyc");
      }
    
  // Subscribing the event.
  this.componentConfigChangeEvent = this.starNotify.subscribeEvent<componentConfigDef>('componentConfigDef', componentConfig => {
    if (componentConfig.eventFrom != this.constructor.name) {
      if (componentConfig.eventTo.includes(this.constructor.name)|| componentConfig.eventTo.includes("any"))  {
          this.handleComponentConfig(componentConfig);
      }
    }
  });
  

  }
  public keycLoak  = environment.KEYCLOAK;
  

  public ngAfterViewInit() {
    //if (this.paramConfig.DEBUG_FLAG) console.log ("test:hello2: isLoggedIn", this.keycloakService.isLoggedIn() );
  if (this.keycLoak.KEYCLOAK_checkLoginIframe && this.keycloakService.isLoggedIn() ){
    this.starServices.hideNoValidLicense();
    let Username = this.keycloakService.getUsername();
    //console.log("Username:", Username)
    let Profile =this.keycloakService.loadUserProfile();
    let value = Profile['__zone_symbol__value'];
    //console.log("value:",value, value.lastName,  value.firstName,  value.email,  value.emailVerified )
    let lastName = value['lastName']
    let KeycloakInstance = this.keycloakService.getKeycloakInstance();
    let token = this.keycloakService.getToken();
    
    //console.log("Username:", Username,  lastName, token )
    this.starServices.StrAuth = "dummy";
    this.starServices.userAdded = false;
    this.starServices.getUserInfo(this,Username, value);
    //this.loginCompletedHandler("x");
    //this.login(this, "star","star")
    }
  }
  public onSelectLang(e: any): void {
    if (this.paramConfig.DEBUG_FLAG) console.log(" in onSelect");
    if (this.paramConfig.DEBUG_FLAG) console.log(e.item);
    if (typeof e.item.id !== "undefined"){
      /*
      if (e.item.id == "ar")
        this.messages.notify(true);
      else
        this.messages.notify(false);
        */
      this.starServices.loadLanguage(e.item.id);
      //this.paramConfig = getParamConfig();
      if (this.paramConfig.DEBUG_FLAG) console.log("this.paramConfig.userLang:",this.paramConfig.userLang);
      this.starServices.setModuleItems(this);
      this.starServices.setPanelBar (this);

      let componentConfig = new componentConfigDef();
      componentConfig.eventTo = this.children;
      componentConfig.languageChanged = this.paramConfig.userLang;
      //console.log("test:userLang:",this.paramConfig.userLang);
     this.callStarNotify(componentConfig);
    }

  }

  public children = ["any"];

 callStarNotify(componentConfig:any) {
    componentConfig.eventFrom = this.constructor.name;
    //console.log("test:sending event");
    this.starNotify.sendEvent<componentConfigDef>('componentConfigDef', componentConfig);
  }

  public onSelect(e: any): void {
    if (this.paramConfig.DEBUG_FLAG) console.log(" in onSelect");
    if (this.paramConfig.DEBUG_FLAG) console.log(e.item);
    /*const subscription = e.sender.close.subscribe(args => args.preventDefault());
    setTimeout(() => {
        subscription.unsubscribe();
    });*/
    if (typeof e.item.id !== "undefined")
    {
      this.currentMenu = e.item.id;
      this.setModuleName(this.currentMenu);
      this.starServices.setPanelBar (this);

    }
  
  }
  
  public onSelectMenuItem(event){
    //console.log("onSelectMenuItem:",event)
    let routerLink = event.item.choice;
    this.router.navigate(['/' + routerLink] , { skipLocationChange: true });
  }

  async  loginCompletedHandler (someValue:any){
     if (this.starServices.sessionParams.USER_INFO.GROUPNAME != "SYSADM")
      this.showMainModules = false;
    
    this.setTheme();
    if (  (this.navTo.length!=0) ){
      this.router.navigate(['/' + this.navTo] , { skipLocationChange: true });

      return;
      }
  if ((this.shareTo.length != 0)) {
    this.starServices.sessionParams.USERNAME = this.shareTo.toUpperCase();
    this.starServices.setModuleItems(this);
    this.starServices.setPanelBar(this);
  }

    

    if (this.testEKYC) {
      this.router.navigate(['/' + this.starServices.eKycScr], { skipLocationChange: true });
      //this.starServices.setRTL();

      return;
    }
 
    //this.starServices.setRTL();


    this.showLogn = false;
    this.showMenuButton = true;
    this.showPanelbar = true;
    this.starServices.loadLanguage(this.language_name);

    if ( (this.shareTo.length != 0) &&  ( this.shareTo != "EKYC")   ) {
      this.MenuWithLogin = true;
      this.showMainModules = false;
      this.showPanelbar = false;
    }

    let stmtFile ="APPGEN_statements.json";
    if (this.paramConfig.DBLoc != ""){
      stmtFile = this.paramConfig.DBLoc + ".json";
    }
    this.starServices.loadStatements(stmtFile);
    
    //this.setModuleItems();
    this.starServices.setModuleItems(this);
    this.starServices.setPanelBar (this);
    this.starServices.fetchLookups(this, this.lookupArrDef);

  if ((this.shareToScreen.length != 0)) {
    await this.starServices.sleep(1500);
      this.router.navigate(['/' + this.shareToScreen], { skipLocationChange: true });

      return;
    }
       if (!this.isPhonePortrait){
      this.router.navigate(['/PRVDASH'], { skipLocationChange: true, replaceUrl: false, preserveFragment: true  });
      //object.router.navigate(.      ], { skipLocationChange: true, replaceUrl: false, preserveFragment: true  });

    }
  }
  
  private async setTheme() {
    await this.starServices.sleep(100);
    this.starServices.hideNoValidLicense();

    //console.log(" Starting to set theme");
    const userThemeQuery = {
      "_QUERY": "GET_ADM_USER_INFORMATION_QUERY",
      "_WHERE": `THEME_NAME <> '' and THEME_NAME is not null and USERNAME = '${this.starServices.USERNAME}'`
      // "_WHERE": "USERNAME = 'this.starServices.USERNAME' and THEME_NAME <> '' AND THEME_NAME IS NOT NULL"
    };
    const defaultThemeQuery = {
      "_QUERY": "GET_THEME_DEF_QUERY",
      "_WHERE": "default_theme = 1"
    };

    //console.log(" Executing user theme query", userThemeQuery);
    let data = await this.starServices.execSQLBody(this, [userThemeQuery], "");
    if (typeof data != "undefined" && data[0].data.length > 0) {
      for (let i = 0; i < data[0].data.length; i++) {
        let THEME_NAME = data[0].data[i].THEME_NAME;
        if (this.paramConfig.DEBUG_FLAG) console.log(" Processing theme: ", THEME_NAME);
        await this.getTheme(THEME_NAME);
      }
      return;
    }

    //console.log(" Executing default theme query", defaultThemeQuery);
    data = await this.starServices.execSQLBody(this, [defaultThemeQuery], "");
    if (typeof data != "undefined" && data[0].data.length > 0) {
      let THEME_NAME = data[0].data[0].THEME_NAME;
      if (this.paramConfig.DEBUG_FLAG) console.log(" Default theme found:", this.starServices.USERNAME, THEME_NAME);
      await this.getTheme(THEME_NAME);
    }
  }

  private async getTheme(THEME_NAME: string) {
    const themeDetailQuery = {
      "_QUERY": "GET_THEME_DETAIL",
      "THEME_NAME": THEME_NAME
    };

    if (this.paramConfig.DEBUG_FLAG) console.log(" Retrieving details for theme:", THEME_NAME);
    let themeDetails = await this.starServices.execSQLBody(this, [themeDetailQuery], "");
    if (themeDetails && themeDetails[0].data.length > 0) {
      if (this.paramConfig.DEBUG_FLAG) console.log(" Theme details retrieved for theme:", THEME_NAME);
      this.applyTheme(themeDetails[0].data);
    } else {
      if (this.paramConfig.DEBUG_FLAG) console.log(" No details found for theme:", THEME_NAME);
    }
  }

  private applyTheme(themeDetails: any[]) {
    let curTheme: { [key: string]: string } = {};
    for (let i = 0; i < themeDetails.length; i++) {
      const themeVariable = "--" + themeDetails[i].THEME_VARIABLE;
      const themeValue = themeDetails[i].THEME_VARIABLE_VALUE;
      if (this.paramConfig.DEBUG_FLAG) console.log(" Processing theme variable", themeVariable, ":", themeValue);
      curTheme[themeVariable] = themeValue;
    }
    Object.entries(curTheme).forEach(([key, value]) => {
      document.documentElement.style.setProperty(key, value);
      if (this.paramConfig.DEBUG_FLAG) console.log(" Applied theme", key, ":", value);
    });
    if (this.paramConfig.DEBUG_FLAG) console.log(" Theme application completed");
  }


  public togglePanel(): void {
    this.showPanelbar = !this.showPanelbar;

  }
  public logoff() {
    this.language_name = 'en';
    this.starServices.lkpCache=[];
    this.showLogn = true;
    if (this.keycLoak.KEYCLOAK_checkLoginIframe){
      this.showLogn = false;
      this.keycloakService.logout();
    }
    this.showMenuButton = false;
    this.showPanelbar = false;
    this.router.navigate(['']);
    window.location.href = this.windowLoc;


  }
  public addToBody(NewVal:any){
    this.Body.push(NewVal);
    //if (this.paramConfig.DEBUG_FLAG) console.log('test:this.Body : '  + JSON.stringify(this.Body));
  }



  public setModuleName(id:any){
    if (this.paramConfig.DEBUG_FLAG) console.log("setModuleName:id:",id)
    if (this.paramConfig.DEBUG_FLAG) console.log("setModuleName:this.items.items:",this.items[0].items)
    var rec = this.items[0].items.find((x:any) => x.id === id);
    if (typeof rec !== "undefined") {
      this.moduleName = rec.text;
      if (this.paramConfig.DEBUG_FLAG) console.log("setModuleName:this.moduleName:",this.moduleName)
    }
  }

  public divClicked(){
    // this.showPanelbar = false;
  }
  public handleComponentConfig(ComponentConfig) {
    if (typeof ComponentConfig !== "undefined") {
      //console.log("Tickeit3EhabTickeit3FormForm ComponentConfig:", ComponentConfig);

    
      if (ComponentConfig.masterParams != null) {
        let masterParams = ComponentConfig.masterParams;
        if (masterParams.isPhonePortrait){
          this.isPhonePortrait = masterParams.isPhonePortrait;
          this.showPanelbar = false;
        }
      }
    }
  }
  public userLang = "EN" ; 
  public lookupArrDef =[{
    "statment":"SELECT distinct lower(CODE) id, CODETEXT_LANG text FROM SOM_TABS_CODES WHERE  CODENAME = 'LANGUAGE' AND LANGUAGE_NAME = 'EN' order by CODETEXT_LANG ",
    "lkpArrName": "lkpArrLANGS"
  }];
  
  public lkpArrLANGS = [];

  public fetchLookupsCallBack() {

   // this.langitems[0].items = this.lkpArrLANGS[0];
    //console.log ("bug:this.lkpArrLANGS:",this.lkpArrLANGS.length);
    this.langitems[0].items= this.lkpArrLANGS;
    if (this.lkpArrLANGS.length <= 2)
      this.showLang = false
  }
}



@Injectable()
export class UploadInterceptor implements HttpInterceptor {


  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (req.url === 'saveUrl') {
      const events: Observable<HttpEvent<any>>[] = [0, 30, 60, 100].map((x) => of(<HttpProgressEvent>{
        type: HttpEventType.UploadProgress,
        loaded: x,
        total: 100
      }).pipe(delay(1000)));

      const success = of(new HttpResponse({ status: 200 })).pipe(delay(1000));
      events.push(success);

      return concat(...events);
    }

    if (req.url === 'removeUrl') {
      return of(new HttpResponse({ status: 200 }));
    }

    return next.handle(req);
  }
 

}
