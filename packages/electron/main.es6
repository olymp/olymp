const { autoUpdater } = require('electron-updater');
const { Menu, app, BrowserWindow, crashReporter } = require('electron');

if (process.env.CRASHREPORT_URL) {
  crashReporter.start({
    productName: 'App',
    companyName: 'cool.app',
    submitURL: process.env.CRASHREPORT_URL,
    uploadToServer: true,
  });
}
const log = require('electron-log');

log.transports.file.level = 'info';

const path = require('path');
const url = require('url');

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let mainWindow;
const template = [];
if (process.platform === 'darwin') {
  // OS X
  const name = app.getName();
  template.unshift({
    label: name,
    submenu: [
      {
        label: `About ${name}`,
        role: 'about',
      },
      {
        label: 'Quit',
        accelerator: 'Command+Q',
        click() {
          app.quit();
        },
      },
    ],
  });
}

function createWindow() {
  if (template.length) {
    const menu = Menu.buildFromTemplate(template);
    Menu.setApplicationMenu(menu);
  }

  autoUpdater.checkForUpdates();
  // Create the browser window.
  // mainWindow = new BrowserWindow({ width: 800, height: 600, frame: true, titleBarStyle: 'hidden' });
  mainWindow = new BrowserWindow({
    width: 1000,
    height: 750,
    minWidth: 600,
    minHeight: 450,
    center: true,
    // frame: false,
    // titleBarStyle: 'hidden',
  });

  // and load the index.html of the app.
  mainWindow.loadURL(
    url.format({
      pathname: path.join(__dirname, 'index.html'),
      protocol: 'file:',
      slashes: true,
    })
  );

  // Open the DevTools.
  // mainWindow.webContents.openDevTools();

  // Emitted when the window is closed.
  mainWindow.on('closed', () => {
    // Dereference the window object, usually you would store windows
    // in an array if your app supports multi windows, this is the time
    // when you should delete the corresponding element.
    mainWindow = null;
  });
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', createWindow);

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
  if (mainWindow === null) {
    createWindow();
  }
});

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.

autoUpdater.on('checking-for-update', () => {
  log.info('Checking for update...');
});
autoUpdater.on('update-available', (ev, info) => {
  log.info('Update available.', ev, info);
});
autoUpdater.on('update-not-available', (ev, info) => {
  log.info('Update not available.', ev, info);
});
autoUpdater.on('error', (ev, err) => {
  log.info('Error in auto-updater.', ev, err);
});
autoUpdater.on('download-progress', (ev, progressObj) => {
  log.info('Download progress...');
  log.info('progressObj', progressObj);
});
autoUpdater.on('update-downloaded', (ev, info) => {
  log.info('Update downloaded.  Will quit and install in 5 seconds.');
  // Wait 5 seconds, then quit and install
  setTimeout(() => {
    autoUpdater.quitAndInstall();
  }, 5000);
});
// Wait a second for the window to exist before checking for updates.
setTimeout(() => {
  autoUpdater
    .checkForUpdates()
    .then(() => {
      log.info('Promise fulfilled');
    })
    .catch((reason) => {
      log.info(`Handle rejected promise (${reason.stack || reason}) here.`);
    });
}, 1000);
