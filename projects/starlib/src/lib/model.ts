export class tabsCodes{
    public CODENAME = '';
    public CODE = '';
    public PARTCODE = '';
    public LANGUAGE_NAME = '';
    public CODETEXT_LANG = '';
    public CODEVALUE_LANG = '';
    public LAST_UPDATE = '';
    public FLEX_FLD1 = '';
    public FLEX_FLD2 = '';
    public FLEX_FLD3 = '';
    public FLEX_FLD4 = '';
    public FLEX_FLD5 = '';

}
export class componentConfigDef{
    public eventFrom =  null;
    public eventTo:any;
    public languageChanged = "EN";
    public masterSaved = null;
    public masterDeleted = null;
    public parentClose = null;
    public formMode = null;
    public savingMode = null;
    public isMaster = null;
    public isChild = null;
    public masterKey = null;
    public AUTH_TYPE = null;
    public formattedWhere:any = null;
    public clearComponent = null;
    public otherMasterKey =  null;
    public gridHeight = null;
    public formHeight = null;
    public routineAuth = null;
    public showAll = null;
    public editable = null;
    public masterParams:any;
    public queryable:Boolean = true;
    public navigable:Boolean = true;
    public insertable:Boolean = true;
    public removeable:Boolean = true;
    public enabled:Boolean = true;
    public updateable:Boolean = true;
    	public toolsShow = null;
        public masterReadCompleted:any;
    public masterKeyArr:any;
    public masterKeyNameArr:any;
    public showTitle:Boolean = true;
    public showSave = null;
    public title = null;
    public hideGrid = null;
    public clearScreen = null;
    public setScreen = null;
    public WEEKShow = null;
    public showToolBar = null;
    public useAutoSave = null;
}