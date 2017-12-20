require('dotenv').config();

// eslint-ignore
import 'source-map-support/register';

// Node
import path from 'path';
import { URL } from 'url';
// Express
import express from 'express';
import compression from 'compression';
import bodyparser from 'body-parser';
import useragent from 'express-useragent';
// React
import helmet from 'helmet';
// Etc
import fetch from 'isomorphic-fetch';
// import sslRedirect from 'heroku-ssl-redirect';
import { UAParser } from 'olymp-utils';
// Locale
import ssr from './ssr';

// eslint
global.fetch = fetch;

const {
  ORIGINS,
  GRAPHQL_URL,
  BUILD_ON,
  NODE_ENV,
} = process.env;

console.log('BUILD ON', BUILD_ON);

const isProd = NODE_ENV === 'production';

// Client assets
const app = express();

app.use(helmet());

const origins = ORIGINS ? ORIGINS.split(',') : [];
if (GRAPHQL_URL && GRAPHQL_URL.indexOf('/') !== 0) {
  origins.push(new URL(GRAPHQL_URL).host);
}

app.enable('trust proxy');
if (isProd && origins.length) {
  app.use((req, res, next) => {
    const origin = req.headers.origin
      ? new URL(req.headers.origin).host
      : req.headers.host;
    if (origins.indexOf(origin) >= 0) {
      res.setHeader('Access-Control-Allow-Origin', origin);
      res.setHeader(
        'Access-Control-Allow-Methods',
        'GET,POST,OPTIONS,PUT,PATCH,DELETE',
      );
      res.setHeader(
        'Access-Control-Allow-Headers',
        'X-Requested-With,Content-Type,Authorization,X-HTTP-Method-Override,Accept',
      );
      res.setHeader('Access-Control-Allow-Credentials', true);
    }
    next();
  });
}

app.use(compression());
app.use(useragent.express());

const maxAge = isProd ? '90d' : 0; // 3 months
app.use(express.static(path.resolve(process.cwd(), 'public'), { maxAge }));
app.use(
  express.static(path.resolve(process.cwd(), '.dist', 'web'), { maxAge }),
);
app.use(
  express.static(
    path.resolve(process.cwd(), 'node_modules', 'olymp', 'public'),
    { maxAge },
  ),
);
app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json());

app.use((req, res, next) => {
  req.ua = new UAParser(req.headers['user-agent']);
  req.isBot =
    req.headers['user-agent'].indexOf('Speed Insights') != -1 ||
    /bot|google|baidu|bing|msn|duckduckgo|teoma|slurp|yandex/i.test(
      req.headers['user-agent'],
    ) ||
    req.query.__bot__ !== undefined;
  if (
    req.subdomains &&
    req.subdomains.length === 1 &&
    req.subdomains[0] === 'amp'
  ) {
    req.isAmp = true;
  } else if (req.query.amp !== undefined) {
    req.isAmp = true;
  }
  next();
});

try {
  const server = require('@root/server');
  if (server.default) {
    server.default(app);
  } else {
    server(app);
  }
} catch (err) {
  console.log(
    'No server.js or server/index.js file found, using default settings',
    err,
  );
}

// Setup server side routing.
app.get('*', (req, res) => {
  const { status, result } = ssr(req.originalUrl, req);

  switch (status) {
    case 'ERROR':
      res.status(500).send(result);
      break;
    case 'REDIRECT':
      res.status(301).setHeader('Location', result);
      res.end();
      break;
    case 'MISS':
      res.status(404).send(result);
      break;
    default:
      res.status(200).send(result);
  }
});

export default app;
