// This script removes any exisitng build output.

const pathResolve = require('path').resolve;
const appRootPath = require('app-root-dir').get();
const envVars = require(pathResolve(__dirname, '..', 'config/envVars'));
const { exec } = require(pathResolve(__dirname, '..', 'utils.js'));
const rimraf = pathResolve(appRootPath, 'node_modules', 'rimraf');

const buildOutput = pathResolve(appRootPath, envVars.BUNDLE_OUTPUT_PATH);

const cmd = `node ${rimraf} ${buildOutput}`;

exec(cmd);
