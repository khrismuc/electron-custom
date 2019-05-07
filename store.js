const path = require('path');
const fs = require('fs');
const electron = require('electron');

class Store {
    constructor(opts) {
        // return a string of the user's app data directory path.
        const userDataPath = (electron.app || electron.remote.app).getPath('userData');
        // Stringify to json file
        this.path = path.join(userDataPath, opts.configName + '.json');

        this.data = parseDataFile(this.path, opts.defaults);
    }

    // This will just return the property on the `data` object
    get(key) {
        return this.data[key];
    }

    // ...and this will set it
    set(key, val) {
        this.data[key] = val;
        //Need to try catch this
        fs.writeFileSync(this.path, JSON.stringify(this.data));
    }
}

function parseDataFile(filePath, defaults) {
    // try/catch it in case the file doesn't exist yet.
    // `fs.readFileSync` will return a JSON string which we then parse into a Javascript object
    try {
        return JSON.parse(fs.readFileSync(filePath));
    } catch (error) {
        // if there was some kind of error, return the passed in defaults instead.
        return defaults;
    }
}

// expose the class
module.exports = Store;