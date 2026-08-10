var fs = require('fs');
//let routeFileName = "projects/ATN-ATN-COM/src/assets/pwa/manifest.json";
let routeFileName = "projects/prj1/src/assets/pwa/manifest.json";

function processManifest(subsetData) {
    try {
        let fd = fs.openSync(routeFileName, 'r');

        var data = fs.readFileSync(fd, 'utf-8');
        let mainStructure = JSON.parse(data)

        mainStructure.name = subsetData.name;
        mainStructure.short_name = subsetData.short_name;
        mainStructure.description = subsetData.description;
        mainStructure.start_url = subsetData.start_url;
        mainStructure.scope = subsetData.scope;

        for (let i = 0; i < mainStructure.shortcuts.length; i++) {
            mainStructure.shortcuts[i].url = subsetData.shortcuts[i].url;
        }
        for (let i = 0; i < mainStructure.protocol_handlers.length; i++) {
            mainStructure.protocol_handlers[i].url = subsetData.protocol_handlers[i].url;
            mainStructure.protocol_handlers[i].protocol = subsetData.protocol_handlers[i].protocol;
        }
        for (let i = 0; i < mainStructure.protocol_handlers.length; i++) {
            mainStructure.related_applications[i].url = subsetData.related_applications[i].url;
            mainStructure.related_applications[i].id = subsetData.related_applications[i].id;
        }
        console.log(mainStructure);
        // fs.ftruncateSync(fd, 0);
        // fs.writeFileSync(fd, newlines, { flush: true });


        fs.closeSync(fd);
    } catch (err) {
        console.log("can not read file2 :", routeFileName, err);
    }
}

function setsubsetData(name, projectName, appServer) {


    let short_name = name;
    let description = name;
    let url = "/" + projectName + "/";
    let start_url = appServer + projectName
    let id = "com.starapps." + name + "/"

    let subsetData = {
        "name": name,
        "short_name": short_name,
        "description": description,
        "start_url": start_url,
        "scope": url,
        "shortcuts": [
            {
                "url": url + "?action=new_user",
            },
            {
                "url": url,
            }
        ],
        "protocol_handlers": [
            {
                "protocol": "web+" + name + "/",
                "url": url + "?uri=%s"
            }
        ],
        "related_applications": [
            {
                "id": id,
                "url": "https://play.google.com/store/apps/details?id=" + id
            }
        ]
    }
    return subsetData;
}
let appServer = "https://starapps.duckdns.org:8443";
let projectName = "ATN-ATN-COM";
let name = "palm";
let subsetData =  setsubsetData(name, projectName, appServer) ;
//console.log (subsetData);
processManifest(subsetData);

