// JavaScript source code
var fs = require('fs-extra');

//[helper function] save to a JSON file. returns as function to allow easy usage with schedulers
function recordFile(obj, path) {
    return new Promise(async (resolve, reject) => {
        var objJson = JSON.stringify(obj, function (k, v) {
            console.log("Hello in there")
            if (v instanceof Array)
                return JSON.stringify(v);
            return v;
        }, 4).replace(/\\/g, '')
            .replace(/\"\[/g, '[')
            .replace(/\]\"/g, ']')
            .replace(/\"\{/g, '{')
            .replace(/\}\"/g, '}');
        await fs.outputFile(path, objJson, (err) => {
            if (err) throw err; // Error while writing file
        });
        resolve();
    });
}

export var JSONWrite = recordFile
