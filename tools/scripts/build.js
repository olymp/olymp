// This script builds a production output of all of our bundles.

const pathResolve = require('path').resolve;
const { exec } = require('../utils.js');

const webpackConfigs = pathResolve(__dirname, '../webpack');
const clientConfig = pathResolve(webpackConfigs, 'client.config.js');
const middlewareConfig = pathResolve(webpackConfigs, 'universalMiddleware.config.js');
const serverConfig = pathResolve(webpackConfigs, 'server.config.js');

const cmd = `npm run clean && webpack --config ${clientConfig} && webpack --config ${middlewareConfig} && webpack --config ${serverConfig}`;

exec(cmd);
