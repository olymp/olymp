require('babel-polyfill').default;
const { autoUpdater } = require('electron-updater');
const {
  Menu,
  app,
  BrowserWindow,
  crashReporter,
  dialog,
  shell,
} = require('electron');
require('electron-debug')({ enabled: true });
const log = require('electron-log');
const { machineIdSync } = require('node-machine-id');
const os = require('os');
const elecApp = require('@electron');

log.transports.file.level = 'info';
global.MACHINE_ID_ORIGINAL = machineIdSync({ original: true });
global.MACHINE_ID = machineIdSync({ original: false });
global.MACHINE_NAME = os.hostname();

if (process.env.CRASHREPORT_URL) {
  crashReporter.start({
    productName: 'App',
    companyName: 'cool.app',
    submitURL: process.env.CRASHREPORT_URL,
    uploadToServer: true,
  });
}

log.transports.file.level = 'info';
log.info('Starting');

const path = require('path');
const url = require('url');

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let mainWindow;
const name = app.getName();
const template = [
  {
    label: name,
    submenu: [
      { label: `Über ${name}`, selector: 'orderFrontStandardAboutPanel:' },
      { type: 'separator' },
      {
        label: 'Beenden',
        accelerator: 'Command+Q',
        click() {
          app.quit();
        },
      },
    ],
  },
  {
    label: 'Bearbeiten',
    submenu: [
      { label: 'Rückgängig', accelerator: 'CmdOrCtrl+Z', selector: 'undo:' },
      {
        label: 'Wiederholen',
        accelerator: 'Shift+CmdOrCtrl+Z',
        selector: 'redo:',
      },
      { type: 'separator' },
      { label: 'Ausschneiden', accelerator: 'CmdOrCtrl+X', selector: 'cut:' },
      { label: 'Kopieren', accelerator: 'CmdOrCtrl+C', selector: 'copy:' },
      { label: 'Einfügen', accelerator: 'CmdOrCtrl+V', selector: 'paste:' },
      {
        label: 'Alles Einfügen',
        accelerator: 'CmdOrCtrl+A',
        selector: 'selectAll:',
      },
    ],
  },
  {
    label: 'Hilfe',
    submenu: [
      {
        label: 'Log-Datei',
        click() {
          shell.openItem(log.transports.file.file);
        },
      },
    ],
  },
];

function createWindow() {
  log.info('Starting');
  if (template.length) {
    const menu = Menu.buildFromTemplate(template);
    Menu.setApplicationMenu(menu);
  }

  if (process.env.NODE_ENV === 'production') {
    log.info('Starting updater..');

    autoUpdater
      .checkForUpdates()
      .then(() => {
        log.info('Promise fulfilled');
      })
      .catch(reason => {
        log.info(`Handle rejected promise (${reason.stack || reason}) here.`);
      });
  }
  log.info('Creating browser window');
  // Create the browser window.
  // mainWindow = new BrowserWindow({ width: 800, height: 600, frame: true, titleBarStyle: 'hidden' });
  mainWindow = new BrowserWindow({
    width: 1000,
    height: 750,
    minWidth: 600,
    minHeight: 450,
    center: true,
    webPreferences: {
      nodeIntegrationInWorker: true,
    },
    // frame: false,
    // titleBarStyle: 'hidden',
  });

  log.info('Call app script');
  if (elecApp && elecApp.default) {
    try {
      elecApp.default(mainWindow);
    } catch (err) {
      dialog.showMessageBox({
        type: 'error',
        title: 'Error',
        message: JSON.stringify(err, null, 2),
      });
    }
  }

  log.info('Loading url');
  // and load the index.html of the app.
  mainWindow.loadURL(
    url.format({
      pathname: path.join(__dirname, 'index.html'),
      protocol: 'file:',
      slashes: true,
    })
  );

  /* // Open the DevTools.
  if (process.env.NODE_ENV === 'development') {
    mainWindow.webContents.openDevTools();
  } */
  const selectionMenu = Menu.buildFromTemplate([
    { role: 'copy' },
    { type: 'separator' },
    { role: 'selectall' },
  ]);

  const inputMenu = Menu.buildFromTemplate([
    { role: 'undo' },
    { role: 'redo' },
    { type: 'separator' },
    { role: 'cut' },
    { role: 'copy' },
    { role: 'paste' },
    { type: 'separator' },
    { role: 'selectall' },
  ]);

  mainWindow.webContents.on('context-menu', (e, props) => {
    const { selectionText, isEditable } = props;
    if (isEditable) {
      inputMenu.popup(mainWindow);
    } else if (selectionText && selectionText.trim() !== '') {
      selectionMenu.popup(mainWindow);
    }
  });

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
  dialog.showMessageBox({
    type: 'info',
    title: 'Updater',
    message:
      'Ein Update wurde gefunden und wird jetzt heruntergeladen/installiert. Das Programm wird sich anschließend automatisch erneut öffnen.',
  });
});
autoUpdater.on('update-not-available', (ev, info) => {
  log.info('Update not available.', ev, info);
});
autoUpdater.on('error', (ev, err) => {
  log.info('Error in auto-updater.', ev, err);
});
autoUpdater.on('download-progress', (ev, progressObj) => {
  log.info('Download progress...', progressObj);
});
autoUpdater.on('update-downloaded', (ev, info) => {
  log.info('Update downloaded. Will quit and install.');
  autoUpdater.quitAndInstall();
});
