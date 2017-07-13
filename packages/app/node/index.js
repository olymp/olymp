import http from 'http';
import app from './server';
var server = http.createServer(app);
var currentApp = app;
var port = parseInt(process.env.PORT || 3000, 10);
server.listen(port, process.env.NODE_ENV !== 'production' ? '0.0.0.0' : undefined);
var ws = app.listenWS({ server: server });
if (module.hot) {
    module.hot.accept('./server', function () {
        server.removeListener('request', currentApp);
        ws.close();
        server.on('request', app);
        currentApp = app;
        ws = app.listenWS({ server: server });
    });
}
process.on('uncaughtException', function (err) {
    console.error(new Date().toUTCString() + " uncaughtException: " + err.message);
    console.error(err.stack);
    process.exit(1);
});
//# sourceMappingURL=index.js.map