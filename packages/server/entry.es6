require('dotenv').config();

import 'babel-polyfill';
import http from 'http';
import app from './express';

const server = http.createServer(app);
let currentApp = app;
const port = parseInt(process.env.PORT || 3000, 10);
server.listen(port, '0.0.0.0', () => {
  console.log('Server listening to', port, 'in', process.env.NODE_ENV);
});

if (module.hot) {
  module.hot.accept('./express', () => {
    server.removeListener('request', currentApp);
    currentApp = require('./express').default;
    server.on('request', currentApp);
  });
}

process.on('uncaughtException', err => {
  console.error(
    `${new Date().toUTCString()} uncaughtException: ${err.message}`,
  );
  console.error(err.stack);
  process.exit(1);
});
