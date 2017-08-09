import 'babel-polyfill';
import http from 'http';
import app from './server';

const server = http.createServer(app);
let currentApp = app;
const port = parseInt(process.env.PORT || 3000, 10);
server.listen(port, process.env.NODE_ENV !== 'production' ? '0.0.0.0' : undefined);
if (app.listenWS) {
  app.listenWS({ server });
}

if (module.hot) {
  module.hot.accept('./server', () => {
    server.removeListener('request', currentApp);
    if (currentApp.unlistenWS) {
      currentApp.unlistenWS();
    }
    server.on('request', app);
    currentApp = app;
    if (app.listenWS) {
      app.listenWS({ server });
    }
    // ws = app.listenWS({ server });
  });
}

process.on('uncaughtException', (err) => {
  console.error(`${new Date().toUTCString()} uncaughtException: ${err.message}`);
  console.error(err.stack);
  process.exit(1);
});
