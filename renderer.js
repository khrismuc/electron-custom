// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.

// Module to store user-variables
const StoreClass = require('./store.js');

// Instantiating Store class
const storeFunctions = new StoreClass({
    // Create user preference file
    configName: 'user-preferences',
    defaults: {
        // STORE VALUES FROM SETTINGS HERE
        userVariables: { ext: "", vmpass: "", serv: "", crm1: "", crm2: "", crm3: "", startup: "", notif: "" }
    }
});

function crmClick(urlNum, crmOpt) {
    switch (crmOpt) {
        case "fut":
            document.getElementById(urlNum).value = "https://app.thefollowuptool.com/lightspeed-connect;incoming=";
            break;
        case "eagent":
            document.getElementById(urlNum).value = "https://eagent.allstate.com/account/login.aspx?phone=";
            break;
        case "qq":
            document.getElementById(urlNum).value = "https://app.qqcatalyst.com/Contacts/Customer/Details/";
            break;
        case "sf":
            document.getElementById(urlNum).value = "";
            break;
        case "ams":
            document.getElementById(urlNum).value = "";
            break;
        default:
            document.getElementById(urlNum).value = "";
    }
}

function saveButtonClick(ext, vmpass, serv, crm1, crm2, crm3, startup, notif) {
    console.log("saveButtonClick");
    storeFunctions.set('userVariables', { ext, vmpass, serv, crm1, crm2, crm3, startup, notif })
    var x = document.getElementById("toast");
    x.className = "show";
    setTimeout(function () { x.className = x.className.replace("show", ""); }, 3000);
}

function getUserVariables(elementId) {
    switch (elementId) {
        case "extension":
            document.getElementById(elementId).value = userVariables.ext;
            //Try toasting these to see the values.
            break;
        case "vmpassword":
            document.getElementById(elementId).value = userVariables.vmpass;
            break;
        case "server":
            document.getElementById(elementId).value = userVariables.serv;
            break;
        case "url1":
            document.getElementById(elementId).value = userVariables.crm1;
            break;
        case "url2":
            document.getElementById(elementId).value = userVariables.crm2;
            break;
        case "url3":
            document.getElementById(elementId).value = userVariables.crm3;
            break;
        case "runatstartup":
            document.getElementById(elementId).value = userVariables.startup;
            break;
        case "notifications":
            document.getElementById(elementId).value = userVariables.notif;
            break;
    }

}

module.exports = {
    saveButtonClick
};