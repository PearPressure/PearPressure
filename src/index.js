/* Defines Behavior for windows and other features in
 * the Pear Pressure Application
 */
//import { createRequire } from 'module';
//const require = createRequire(import.meta.url) dunno what to do here

const { app, BrowserWindow, ipcMain } = require('electron');
const path = require('path');
const fs = require("fs");

let win;

// Handle creating/removing shortcuts on Windows when installing/uninstalling.
if (require('electron-squirrel-startup')) { // eslint-disable-line global-require
  app.quit();
}

async function createWindow () {
  // Create the browser window.
  win = new BrowserWindow({
      width: 800,
      height: 600,
      webPreferences: {
          nodeIntegration: false, // is default value after Electron v5
          contextIsolation: true, // protect against prototype pollution
          enableRemoteModule: false, // turn off remote
          preload: path.join(__dirname, "preload.js") // use a preload script
      }
  });

  // and load the index.html of the app.
  win.loadFile(path.join(__dirname, 'index.html'));

  // Open the DevTools.
  mainWindow.webContents.openDevTools();
};


const createCall = () => {
    console.log("CALLED!!!");
    const callWindow = new BrowserWindow({
        width: 800,
        height: 600,
    });

    callWindow.loadFile(path.join(__dirname, 'CallPageBasic.html'));
}
// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', createWindow);
console.log("WHERE IS THIS");

ipcMain.on("toMain", (event, args) => {
    fs.readFile("path/to/file", (error, data) => {
        // Do something with file contents

        // Send result back to renderer process
        win.webContents.send("fromMain", responseObj);
    });
});

// Quit when all windows are closed.
app.on('window-all-closed', () => {
  // On OS X it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  // On OS X it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and import them here.
