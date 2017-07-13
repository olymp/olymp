import http from 'http';
import app from './server';
var server = http.createServer(app);
var currentApp = app;
var port = parseInt(process.env.PORT || 3000, 10);
server.listen(port, process.env.NODE_ENV !== 'production' ? '0.0.0.0' : undefined);
if (module.hot) {
    module.hot.accept('./server', function () {
        server.removeListener('request', currentApp);
        server.on('request', app);
        currentApp = app;
    });
}
process.on('uncaughtException', function (err) {
    console.error(new Date().toUTCString() + " uncaughtException: " + err.message);
    console.error(err.stack);
    process.exit(1);
});
//# sourceMappingURL=index.js.map