import express from 'express';
import compression from 'compression';
import path from 'path';
import React from 'react';
import { renderToString } from 'react-dom/server';
import template from './template';

const clientAssets = require(KYT.ASSETS_MANIFEST); // eslint-disable-line import/no-dynamic-require
const app = express();

// Remove annoying Express header addition.
app.disable('x-powered-by');

// Compress (gzip) assets in production.
app.use(compression());

// Setup the public directory so that we can server static assets.
app.use(express.static(path.join(process.cwd(), KYT.PUBLIC_DIR)));

// Setup server side routing.
app.get('*', (request, response) => {
  response.status(200).send(template({
    root: '',
    jsBundle: clientAssets.main.js,
    cssBundle: clientAssets.main.css,
  }));
  return;
  if (error) {
    response.status(500).send(error.message);
  } else if (redirectLocation) {
    response.redirect(302, `${redirectLocation.pathname}${redirectLocation.search}`);
  } else if (renderProps) {
    // When a React Router route is matched then we render
    // the components and assets into the template.
    response.status(200).send(template({
      root: '',
      jsBundle: clientAssets.main.js,
      cssBundle: clientAssets.main.css,
    }));
  } else {
    response.status(404).send('Not found');
  }
});

app.listen(parseInt(KYT.SERVER_PORT, 10));
