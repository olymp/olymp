require('dotenv').config();
import express from 'express';
import compression from 'compression';
import session from 'express-session';
import path from 'path';
import React from 'react';
import fetch from 'isomorphic-fetch';
import { StaticRouter } from 'olymp-router';
import { renderToString, renderToStaticMarkup } from 'react-dom/server';
import { ApolloProvider, getDataFromTree } from 'react-apollo';
import { ApolloClient, createNetworkInterface } from 'apollo-client';
import { AsyncComponentProvider, createAsyncContext, } from 'react-async-component';
import asyncBootstrapper from 'react-async-bootstrapper';
import { Provider } from 'react-fela';
import Helmet from 'react-helmet';
import helmet from 'helmet';
import template from '../templates/default';
import amp from '../templates/amp';
import { AmpProvider, UAProvider, UAParser } from 'olymp-utils';
import { GatewayProvider } from 'react-gateway';
import 'source-map-support/register';
import createRedisStore from 'connect-redis';
import fs from 'fs';
import useragent from 'express-useragent';
import sslRedirect from 'heroku-ssl-redirect';
import bodyparser from 'body-parser';
import { createFela } from 'olymp-fela';
import App from '@app';
var init = require('@app').init;
var version = +fs.statSync(__filename).mtime;
console.log('VERSION', version);
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
var RedisStore = createRedisStore(session);
global.fetch = fetch;
var isProd = process.env.NODE_ENV === 'production';
var port = parseInt(process.env.PORT, 10);
var devPort = parseInt(process.env.DEV_PORT, 10);
var clientAssetsPath = path.resolve(__dirname, '..', 'web', 'assets.json');
var clientAssets = fs.existsSync(clientAssetsPath)
    ? JSON.parse(fs.readFileSync(clientAssetsPath))
    : null;
var app = express();
app.use(helmet());
if (process.env.NODE_ENV === 'production' && process.env.URL) {
    app.use(sslRedirect());
}
app.use(compression());
app.use(useragent.express());
app.use(express.static(path.resolve(process.cwd(), 'public')));
app.use(express.static(path.resolve(process.cwd(), 'build', 'web')));
app.use(express.static(path.resolve(process.cwd(), 'node_modules', 'olymp', 'public')));
app.use(bodyparser.json());
app.use(function (req, res, next) {
    if (req.subdomains &&
        req.subdomains.length === 1 &&
        req.subdomains[0] === 'amp') {
        req.isAmp = true;
    }
    else if (req.query.amp !== undefined) {
        req.isAmp = true;
    }
    next();
});
var trust = process.env.TRUST_PROXY !== undefined ? parseInt(process.env.TRUST_PROXY) : 2;
var secure = process.env.COOKIE_SECURE !== undefined
    ? "" + process.env.COOKIE_SECURE === 'true'
    : isProd;
var domain = process.env.URL !== undefined ? process.env.URL.split('/')[2] : undefined;
if (isProd) {
    app.set('trust proxy', trust);
}
app.use(session({
    store: process.env.REDIS_URL
        ? new RedisStore({ url: process.env.REDIS_URL, logErrors: true })
        : undefined,
    resave: false,
    saveUninitialized: true,
    httpOnly: true,
    proxy: !!trust,
    domain: domain,
    secret: process.env.SESSION_SECRET || 'keyboard cat',
    cookie: {
        secure: secure,
        maxAge: 1000 * 60 * 60 * 24 * 7,
    },
}));
try {
    var server = require('@root/server');
    if (server.default) {
        server.default(app);
    }
    else {
        server(app);
    }
}
catch (err) {
    console.log('No server.js or server/index.js file found, using default settings', err);
}
app.get('*', function (req, res) {
    var networkInterface = createNetworkInterface({
        uri: process.env.GRAPHQL_URL || "http://localhost:" + port + "/graphql",
        opts: {
            credentials: 'same-origin',
            headers: req.headers,
        },
    });
    var client = new ApolloClient({
        networkInterface: networkInterface,
        dataIdFromObject: function (o) { return o.id; },
        ssrMode: true,
    });
    var ua = new UAParser(req.headers['user-agent']);
    var renderer = createFela(ua);
    var store = createStore(combineReducers({
        apollo: client.reducer(),
    }), {}, compose(applyMiddleware(client.middleware())));
    var asyncContext = createAsyncContext();
    if (typeof init !== undefined && init) {
        init({ renderer: renderer, client: client, store: store });
    }
    var context = {};
    var reactApp = (React.createElement(AsyncComponentProvider, { asyncContext: asyncContext },
        React.createElement(ApolloProvider, { store: store, client: client },
            React.createElement(StaticRouter, { location: req.url, context: context },
                React.createElement(Provider, { renderer: renderer },
                    React.createElement(GatewayProvider, null,
                        React.createElement(UAProvider, { ua: ua },
                            React.createElement(AmpProvider, { amp: req.isAmp },
                                React.createElement(App, null)))))))));
    return asyncBootstrapper(reactApp)
        .then(function () { return getDataFromTree(reactApp); })
        .then(function () {
        var reactAppString = req.isAmp
            ? renderToStaticMarkup(reactApp)
            : renderToString(reactApp);
        var scripts = req.isAmp
            ? []
            : [
                isProd
                    ? "" + clientAssets.main.js
                    : process.env.DEV_URL + "/main.js",
            ];
        var styles = req.isAmp
            ? []
            : isProd ? ["" + clientAssets.main.css] : [];
        var cssMarkup = renderer.renderToString();
        var asyncState = asyncContext.getState();
        var html = (req.isAmp ? amp : template)({
            root: reactAppString,
            scripts: scripts,
            styles: styles,
            cssMarkup: cssMarkup,
            helmet: Helmet.rewind(),
            initialState: { apollo: client.getInitialState() },
            asyncState: asyncState,
            gaTrackingId: process.env.GA_TRACKING_ID,
        });
        if (context.url) {
            res.status(301).setHeader('Location', context.url);
            res.end();
            return;
        }
        res.status(context.missed ? 404 : 200);
        res.send(html);
    })
        .catch(function (err) {
        console.error(err);
        res.status(500).send(err);
    });
});
export default app;
