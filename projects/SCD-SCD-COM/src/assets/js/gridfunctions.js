var ParamConfig ={
  "DEBUG_FLAG" : true,
"isCheckRules" : false,
DBLoc : "SCD-SCD-COM",
DateFormat  : "yyyy/MM/dd",
DateTimeFormat  : "yyyy/MM/dd  HH:mm:ss",
TimeFormat  : "HH:mm:ss",
firstWeekDay : "Monday",    // Sunday , Monday
dateLocale : "en-US",
showFlowKeys : false, 
CREATED : "10",
ON_HAND : "20",
COMPLETED : "30",
APPROVED: "30",
REJECTED: "32",
MODIFIED: "33",
SKIPPED: "40",
userLang : "EN",
PrvUserFlow : "PRV_BLD",
PrvUserCDR : "PRV_CDR",
//PrvUserFlow : "NSHLR",
//PrvUserCDR : "HLR_LOG", 
//PrvUserFlow : "RATING",
//PrvUserCDR : "CDR",

LKP_LIKE : ["LKP","SND", "RCV", "SRV", "UPD", "DEL", "LOG", "FLOW", "TRANS", "MAP"],

ORDER_STATUS_CREATED: 10,
attDir : "attachments",
tempDir : "temp",
defaultModule : "APPS",
//licensedModules : "'SETTINGS'"
//licensedModules : "'SETTINGS','PROVISION'",
licensedModules : "'SETTINGS','APPS'",
//masterGridHeight : "250",
//childGridHeight : "250"
//DateFormat  : "yyyy MMM d"

}

function getParamConfig (){
  return ParamConfig;
}

function setParamConfig (paramas){
  if (ParamConfig.DEBUG_FLAG) console.log("setParamConfig")
  if (ParamConfig.DEBUG_FLAG) console.log(paramas);
  
  ParamConfig[paramas.Name] = paramas.Val;
  if (ParamConfig.DEBUG_FLAG) console.log(ParamConfig);
   
}

