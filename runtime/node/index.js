import http from 'http';
import app from './server';

const server = http.createServer(app);
let currentApp = app;
const port = parseInt(process.env.PORT || 3000);
server.listen(port);

if (module.hot) {
  module.hot.accept('./server', () => {
    server.removeListener('request', currentApp);
    server.on('request', app);
    currentApp = app;
  });
}
