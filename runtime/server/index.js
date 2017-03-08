import http from 'http';
import app from './server';

const server = http.createServer(app);
let currentApp = app;
const port = parseInt(process.env.PORT || 3000);
server.listen(port);

if (module.hot) {
  module.hot.accept('./server', () => {
    console.log('Versions', currentApp.version, app.version);
    server.removeListener('request', currentApp);
    server.on('request', app);
    currentApp = app;
  });
}
