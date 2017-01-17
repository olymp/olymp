/* eslint-disable no-console */

import express from 'express';
import compression from 'compression';
import { resolve as pathResolve } from 'path';
import appRootDir from 'app-root-dir';
import reactApplication from './react-middleware';
import security from 'universally/src/server/middleware/security';
import clientBundle from 'universally/src/server/middleware/clientBundle';
import serviceWorker from 'universally/src/server/middleware/serviceWorker';
import offlinePage from 'universally/src/server/middleware/offlinePage';
import errorHandlers from 'universally/src/server/middleware/errorHandlers';
import config from 'universally/config';
import session from 'express-session';

// Create our express based server.
const app = express();

// Don't expose any software information to potential hackers.
app.disable('x-powered-by');

// Security middlewares.
app.use(...security);

// Gzip compress the responses.
app.use(compression());

// When in production mode, we will serve our service worker which was generated
// by the offline-plugin webpack plugin. See the webpack plugins section for
// more information.
// Note: the service worker needs to be served from the http root of your
// application for it to work correctly.
if (process.env.NODE_ENV === 'production' && config.serviceWorker.enabled) {
  app.get(`/${config.serviceWorker.fileName}`, serviceWorker);
  app.get(
    `${config.bundles.client.webPath}${config.serviceWorker.offlinePageFileName}`,
    offlinePage,
  );
}

// Configure serving of our client bundle.
app.use(config.bundles.client.webPath, clientBundle);

// Configure static serving of our "public" root http path static files.
// Note: these will be served off the root (i.e. '/') of our application.
app.use(express.static(pathResolve(appRootDir.get(), config.publicAssetsPath)));

app.useSession = (url, getArgs) => {
  app.set('trust proxy', 2);
  if (!getArgs) {
    getArgs = url;
    url = null;
  }
  const args = getArgs(session);
  if (url) app.use(url, session(args));
  else app.use(session(args));
};
app.useStatic = url => express.static(url);

try {
  const server = require('@root/server');
  if (server.default) {
    server.default(app);
  } else {
    server(app);
  }
} catch (err) { console.log('No server.js or server/index.js file found, using default settings'); }
// The React application middleware.
app.get('*', reactApplication);

// Error Handler middlewares.
app.use(...errorHandlers);

// Create an http listener for our express app.
const listener = app.listen(config.port, () =>
  console.log(`Server listening on port ${process.env.PORT || config.port}`),
);

// We export the listener as it will be handy for our development hot reloader,
// or for exposing a general extension layer for application customisations.
export default listener;
