// This script builds a production output of all of our bundles.

const pathResolve = require('path').resolve;
const { exec } = require('../utils.js');

const appRoot = require('app-root-dir').get();
const webpackConfigs = pathResolve(__dirname, '../webpack');
const clientConfig = pathResolve(webpackConfigs, 'client.config.js');
const middlewareConfig = pathResolve(webpackConfigs, 'universalMiddleware.config.js');
const serverConfig = pathResolve(webpackConfigs, 'server.config.js');
const webpack = pathResolve(appRoot, 'node_modules', 'webpack', 'bin', 'webpack');

const cmd = `npm run clean && node ${webpack} --config ${clientConfig} && node ${webpack} --config ${middlewareConfig} && node ${webpack} --config ${serverConfig}`;

exec(cmd);
