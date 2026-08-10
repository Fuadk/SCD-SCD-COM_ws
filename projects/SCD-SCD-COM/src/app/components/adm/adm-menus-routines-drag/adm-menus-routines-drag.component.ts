import { Component, OnInit} from '@angular/core';
import { menus, routines, componentConfigDef } from '@modeldir/model';
import { starServices } from 'starlib';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { DropPosition, TreeItemDropEvent } from '@progress/kendo-angular-treeview';

declare function getParamConfig(): any;


@Component({
  selector: 'app-adm-menus-routines-drag',
  templateUrl: './adm-menus-routines-drag.component.html',
  styleUrls: ['./adm-menus-routines-drag.component.css']
})
export class AdmMenusRoutinesDragComponent implements OnInit {
  public showToolBar = false;
  public form_MENUS: menus;
  public form_ROUTINES: routines;

  public MENUSFormConfig: componentConfigDef;
  public ROUTINESFormConfig: componentConfigDef;
  public componentConfig: componentConfigDef;
  public paramConfig;
  public title = "Menus Routines Drag";
  public routineAuth = null;

  public panelItems = [];
  public menu;

  public currentMainMenu = ""
  public currentMenu;
  public mainMenus = []
  public selectedMenuItems = []
  public copyToMenus = []
  public selectMenuObject
  public allRoutines;
  public isHidden = true;
  public copyOpened = false;
  public showCopyButton = false;
  public currentcopyToMenus = "";
  public currentcopyToMsg = "";
  public currentcopyToMenusItem = {};
  

  constructor(public responsive: BreakpointObserver ,public starServices: starServices) {
    this.paramConfig = getParamConfig();
    this.componentConfig = new componentConfigDef();
  }

  public ngAfterViewInit() {
    this.starServices.setRTL();
  }

  ngOnInit(): void {
    this.starServices.actOnParamConfig(this, 'SOMMNUDRAG');
    this.starServices.fetchLookups(this, this.lookupArrDef);
    // this.form_MENUS = new menus();

    this.form_ROUTINES = new routines();
    this.MENUSFormConfig = new componentConfigDef();
    this.MENUSFormConfig.masterParams = {
      hideOthers: true
    }
    this.MENUSFormConfig.isMaster = true;
    this.MENUSFormConfig.routineAuth = this.routineAuth;

    this.ROUTINESFormConfig = new componentConfigDef();
    this.ROUTINESFormConfig.routineAuth = this.routineAuth;
    this.loadMenu();

   
  }
  public loadMenu(){
    let body = [
      {
        "_QUERY": "GET_MENU_ROUTINES",
        "MENU": "MAIN",
        "USERNAME": "%",
        "LANGUAGE_NAME":this.LangName,
        "CHOICES":"%"

      },
    ]

    this.starServices.post(this, "&_trans=Y", body).subscribe(res => {
      this.mainMenus = [
        {
          text: "Select module",
          items: res.data[0].data.map(e => {
            return {
              id: e["choice"],
              text: e["text"]
            }
          })
        }
      ]
      //console.log("this.mainMenus:", this.mainMenus);
      this.currentMainMenu = this.mainMenus[0]["items"][0]["text"]

      body = [
        {
          "_QUERY": "GET_MENU_ROUTINES",
          "MENU": this.mainMenus[0]["items"][0]["choice_type"],
          "USERNAME": "%",
          "LANGUAGE_NAME":this.LangName,
          "CHOICES":"%"
        },
        {
          "_QUERY": "GET_ROUTINES_AUTHORITY",
          "MENU": "",
          "USERNAME": "%",
          "LANGUAGE_NAME":this.LangName,
          "CHOICES":"%"
        },
      ]

      this.starServices.post(this, "&_trans=Y", body).subscribe(res2 => {
        this.starServices.handleFetchedPanelBar(this, res2.data, true)
      })
    })
  }
  public readCompletedHandler(form_MENUS) {
    this.form_ROUTINES = new routines();
    this.form_ROUTINES.CHOICE = form_MENUS.CHOICE;
  }

  public clearCompletedHandler(form_MENUS) {
    this.form_ROUTINES = new routines();
  }

  public saveCompletedHandler(form_MENUS) {
    this.ROUTINESFormConfig = new componentConfigDef();
    this.ROUTINESFormConfig.masterSaved = form_MENUS;
    this.ROUTINESFormConfig.masterKey = form_MENUS.CHOICE;
    if (this.currentMenu !== undefined)
      this.selectMainMenu(this.currentMenu);
  }
  public removeCompletedHandler(form_MENUS) {
     if (this.currentMenu !== undefined)
      this.selectMainMenu(this.currentMenu);
  }
  public handleDrop(event: TreeItemDropEvent): void {
    let source = event.sourceItem.item.dataItem
    let dest = event.destinationItem.item.dataItem

    const invalidCategoryDropTarget = event.dropPosition === DropPosition.Over || (dest.items === undefined);
    const invalidProductDropTarget = (event.dropPosition === DropPosition.Over && (dest.items === undefined) ||
      (event.dropPosition !== DropPosition.Over && (dest.items !== undefined)));

    if ((source.items !== undefined && invalidCategoryDropTarget) || source.items === undefined && invalidProductDropTarget) {
      event.setValid(false);
      return;
    }

    event.setValid(true);
    
    setTimeout(() => {
      let body = [];
      this.panelItems.forEach(menuItem => {
        for (let i = 0; i < menuItem.items.length; i++) {
          let routine_name = this.allRoutines.find(e => e["CHOICE_TYPE"] == menuItem.items[i].choice)
          body.push({
            "_QUERY": "UPDATE_MENUS_MENU",
            ...routine_name,
            "LINE": i + 1,
            "MENU": menuItem.choice,
            "OLD_MENU": routine_name.MENU
          })
        }
      })

        this.starServices.post(this, "&_trans=Y", body).subscribe(res2 => {
          this.starServices.showNotification('success', "Sorted successfully");
        }, err => this.starServices.showNotification('error', err))
    }, 300);
  }
 public     LangName = "EN";
  selectMainMenu(menu) {
    console.log("menu:",menu);
    
    this.panelItems = []
    this.menu = null;
    this.currentMenu = menu;
    if (typeof menu.item !== "undefined") {    
      this.currentMainMenu = menu.item.text
      this.selectMenuObject = null

      let body = [
        {
          "_QUERY": "GET_MENU_ROUTINES",
          "MENU": menu.item.id,
          "USERNAME": "%",
          "LANGUAGE_NAME":this.LangName,
          "CHOICES":"%",
          "HIDDEN": this.isHidden ? "0" : "%"
        },
        {
          "_QUERY": "GET_ROUTINES_AUTHORITY",
          "USERNAME": "%"
        },
        {
          "_QUERY": "GET_MENUS_QUERY"
        },
      ]

      this.starServices.post(this, "&_trans=Y", body).subscribe(res => {
        this.starServices.handleFetchedPanelBar(this, res.data, true)
        this.allRoutines = res.data[2].data;
      })
    }
  }

  selectMenuItem() {
    setTimeout(() => {

      if (this.selectedMenuItems.length > 0) {
        let indeces = this.selectedMenuItems[0].split('_')
        let selectedItem = indeces.length == 1 ? this.panelItems[indeces[0]] : this.panelItems[indeces[0]].items[indeces[1]]

        // if (this.selectMenuObject && this.selectMenuObject.choice == selectedItem.choice)
        //   return

        this.selectMenuObject = selectedItem

        let menu = new menus()
        menu.CHOICE = selectedItem.choice
        menu.LANGUAGE_NAME = this.LangName
       let selectedMenu = this.panelItems[indeces[0]] 
       if (indeces.length != 1)
        menu.MENU = selectedMenu.choice
        
        this.form_MENUS = menu
        console.log("selectMenuItem:",indeces.length, indeces,  this.form_MENUS);

        let menuInfo = this.allRoutines.find(e => e["CHOICE"] == selectedItem.choice);
        console.log("copyOpen:menuInfo:",menuInfo);
        if (menuInfo['MENU_TYPE'] == "R")
          this.showCopyButton = true;
        else 
          this.showCopyButton = false;

          
      }

    }, 200)
  }
  public langitems =[];
  public onSelectLang(e: any): void {
    if (this.paramConfig.DEBUG_FLAG) console.log(" in onSelect");
    if (this.paramConfig.DEBUG_FLAG) console.log(e.item);
    if (typeof e.item.id !== "undefined") {
      this.LangName =  e.item.id.toUpperCase();
      this.loadMenu();
      
   
    }

  }
  public userLang = "EN" ; 
  public lookupArrDef =[{
    "statment":"SELECT CODE id, CODETEXT_LANG text FROM SOM_TABS_CODES WHERE  CODENAME = 'LANGUAGE' AND LANGUAGE_NAME = 'EN' order by CODETEXT_LANG ",
    "lkpArrName": "lkpArrLANGS"
  }];
  
  public lkpArrLANGS = [];


  public fetchLookupsCallBack() {

   // this.langitems[0].items = this.lkpArrLANGS[0];
    //console.log ("bug:this.lkpArrLANGS:",this.lkpArrLANGS);
    this.langitems =
      [{
        text: this.starServices.getNLS([],'SELECT_LANGUAGE','Select Language'),
        items: [{ text: 'English', id: "en" }
      //  , { text: 'Arabic', id: "ar" }, { text: 'German', id: "de" }
      ]
      }];
  
    this.langitems[0].items= this.lkpArrLANGS;
  }
  public ON_CLICK_isHidden(){
    this.isHidden = !this.isHidden;
    console.log("this.isHidden:",this.isHidden);
    if (this.currentMenu !== undefined)
      this.selectMainMenu(this.currentMenu);

  }
  public copyOpen(){
    let indeces = this.selectedMenuItems[0].split('_')
    let selectedItem = indeces.length == 1 ? this.panelItems[indeces[0]] : this.panelItems[indeces[0]].items[indeces[1]]
    console.log("copyOpen:this.selectMenuObject:",selectedItem,this.selectMenuObject, this.allRoutines);
    this.copyOpened = !this.copyOpened;  
    this.loadMenusToCopyTo();
     
  }
  public copyClose(){
      this.copyOpened = false;  
  }
  async onCopyKeys(e) {
    
        if ((this.currentcopyToMenus == "") ||  (this.currentcopyToMenus == this.copyToMenus[0]["text"]) ) {
          this.starServices.showNotification("error", this.starServices.getNLS([],
            'CHOOSE_COPY_TO_MENU', 'Please Select Menu to Copy To.'));
          return;
    }


    //e.preventDefault();
    
    //this.ruleKeysSave = true;
    let indeces = this.selectedMenuItems[0].split('_')
    let selectedItem = this.panelItems[indeces[0]] 
    console.log("onCopyKeys:this.selectMenuObject:",selectedItem,this.selectMenuObject);

     let whereClauseMENU = "MENU_TYPE = 'R'  AND MENU = '" + selectedItem.choice + "' AND CHOICE = '" + this.selectMenuObject.choice + "' " ;
     let whereClauseROUTINE = "CHOICE = '" + this.selectMenuObject.choice + "' " ;
     let whereClauseMENUTO = "MENU_TYPE = 'R'  AND MENU = '" + this.currentcopyToMenusItem['id'] + "'  " ;

    let body = [
      {
        "_QUERY": "GET_MENUS_QUERY",
       "_WHERE": whereClauseMENU

      },
       {
        "_QUERY": "GET_ROUTINES_QUERY",
       "_WHERE": whereClauseROUTINE

      },
      {
        "_QUERY": "GET_MENUS_QUERY",
       "_WHERE": whereClauseMENUTO

      },
      
    ]
     
      let menuInfo;
      let routineInfo;
      let menuCopyToInfo;
      let data = await this.starServices.execSQLBody(this, body, "");
      menuInfo = data[0].data;
      routineInfo = data[1].data;
      menuCopyToInfo = data[2].data;
      console.log("onCopyKeys:menuInfo:", menuInfo, menuInfo.length , "routineInfo:", routineInfo, routineInfo.length ,"menuCopyToInfo:", menuCopyToInfo, menuCopyToInfo.length);
      let line = 10;
      if (menuCopyToInfo.length != 0) {
        line = menuCopyToInfo[menuCopyToInfo.length-1]["LINE"]  + 10;
        let menuRec = menuCopyToInfo.find(e => e["CHOICE"] == this.selectMenuObject.choice)
        if (typeof menuRec !== "undefined"){
          this.currentcopyToMsg = this.starServices.getNLS([],
            'CHOICE_ALREADY_EXISTS', 'Choice already exists in the selected Menu.');
          // this.starServices.showNotification("error", this.starServices.getNLS([],
          //   'CHOICE_ALREADY_EXISTS', 'Choice already exists in the selected Menu.'));
          //this.copyClose();
          return;
        }
      }
      console.log("onCopyKeys:line:", line);
      for (let i = 0; i < menuInfo.length; i++) {
        menuInfo[i]["MENU"] = this.currentcopyToMenusItem['id'];
        menuInfo[i]["LINE"] = line;
        menuInfo[i]["HIDDEN"] = "0";
        console.log("onCopyKeys:menuInfo:", i, menuInfo[i]);
        let body = [];
        menuInfo[i]["_QUERY"] = "INSERT_MENUS";
        body.push(menuInfo[i]);
        console.log("onCopyKeys:body:", body);
        let res = await this.starServices.execSQLBody(this, body, "");
        console.log("onCopyKeys:res:", i, res);
      }
        
    this.copyOpened = false; 
    
    if (this.currentMenu !== undefined)
      this.selectMainMenu(this.currentMenu);
  }

  public onCancelKeys(e): void {
    e.preventDefault();
    this.copyClose();
  }
  public loadMenusToCopyTo(){
    this.currentcopyToMenus = "";
    this.currentcopyToMsg = "";
    let whereClause = "MENU_TYPE = 'M'  AND LANGUAGE_NAME = '" + this.LangName + "' " ;

    let body = [
      {
        "_QUERY": "GET_MENUS_QUERY",
       "_WHERE": whereClause

      },
    ]

    this.starServices.post(this, "&_trans=Y", body).subscribe(res => {
      console.log("res.data[0].data:",res.data[0].data);
      this.copyToMenus = [
        {
          text: "Select Menu to Copy To",
          items: res.data[0].data.map(e => {
            return {
              id: e["CHOICE"],
              text: e["MENU_TEXT"]
            }
          })
        }
      ]
      console.log("this.copyToMenus:", this.copyToMenus);
      
      //this.currentcopyToMenus = this.copyToMenus[0]["items"][0]["text"]
    })
  }
  public selectcopyToMenus(menu) {
    console.log("selectcopyToMenus:",menu.item);
    this.currentcopyToMsg = "";
    this.currentcopyToMenusItem = menu.item;
    this.currentcopyToMenus = menu.item.text;
  }

}
