var electron = require('electron');
var app = electron.app;
var BrowserWindow = electron.BrowserWindow;
var path = require('path');
var url = require('url');
var mainWindow;
function createWindow() {
    mainWindow = new BrowserWindow({ width: 800, height: 600, frame: true, titleBarStyle: 'hidden-inset' });
    mainWindow.loadURL(url.format({
        pathname: path.join(__dirname, 'index.html'),
        protocol: 'file:',
        slashes: true,
    }));
    mainWindow.webContents.openDevTools();
    mainWindow.on('closed', function () {
        mainWindow = null;
    });
}
app.on('ready', createWindow);
app.on('window-all-closed', function () {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});
app.on('activate', function () {
    if (mainWindow === null) {
        createWindow();
    }
});
//# sourceMappingURL=main.js.map