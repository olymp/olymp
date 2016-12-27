// This exists so that we can support the recieving of environment variables
// from multiple sources. i.e.
//  - standard environment variables
//  - a '.env' file, supported by  https://github.com/motdotla/dotenv
//
//  If a .env file exists, the contents of it will read and then it will be
//  merged over the standard environment variables object, otherwise the
//  standard environment variables object (process.env) will be used.
//
//  This gives us a nice degree of flexibility in deciding where we would
//  like our environment variables to be loaded from, which can be especially
//  useful for environment variables that we consider sensitive.

const fs = require('fs');
const pathResolve = require('path').resolve;
const dotenv = require('dotenv');
const appRootPath = require('app-root-dir').get();
const envFile = pathResolve(appRootPath, './.env');

const mergedEnvVars = fs.existsSync(envFile)
  // We have a .env file, which we need to merge with the standard vars.
  ? Object.assign(
    {},
    // Merge the standard "process.env" environment variables object.
    process.env,
    // With the items from our ".env" file
    dotenv.parse(fs.readFileSync(envFile, 'utf8'))
  )
  // No .env file, so we will just use standard vars.
  : process.env;

// Now we need to filter our mergedEnvVars to only contain environment
// variables that are deemed allowable by our .env_whitelist file.
const finalEnvVars = Object.keys(mergedEnvVars)
  .reduce((acc, key) => {
    acc[key] = mergedEnvVars[key]; // eslint-disable-line no-param-reassign
    return acc;
  }, {});

if (!finalEnvVars.SERVER_PORT) finalEnvVars.SERVER_PORT = 3000;
if (!finalEnvVars.CLIENT_DEVSERVER_PORT) finalEnvVars.CLIENT_DEVSERVER_PORT = 3001;
if (!finalEnvVars.URL) finalEnvVars.URL = `http://localhost:${finalEnvVars.SERVER_PORT}`;
if (finalEnvVars.URL.indexOf('http') !== 0) finalEnvVars.URL = process.env.NODE_ENV === 'production' ? `https://${finalEnvVars.URL}` : `http://${finalEnvVars.URL}`;
if (!finalEnvVars.BUNDLE_OUTPUT_PATH) finalEnvVars.BUNDLE_OUTPUT_PATH = './.build';
if (!finalEnvVars.BUNDLE_ASSETS_FILENAME) finalEnvVars.BUNDLE_ASSETS_FILENAME = 'assets.json';
if (!finalEnvVars.CLIENT_BUNDLE_HTTP_PATH) finalEnvVars.CLIENT_BUNDLE_HTTP_PATH = '/client/';
if (!finalEnvVars.CLIENT_BUNDLE_CACHE_MAXAGE) finalEnvVars.CLIENT_BUNDLE_CACHE_MAXAGE = process.env.NODE_ENV === 'production' ? '365d' : 1;
if (!finalEnvVars.SESSION_SECRET) {
  if (process.env.NODE_ENV === 'production') throw new Error('Please provide the SESSION_SECRET env variable.');
  finalEnvVars.SESSION_SECRET = 'keyboard-cat';
}
if (!finalEnvVars.AUTH_SECRET) {
  if (process.env.NODE_ENV === 'production') throw new Error('Please provide the AUTH_SECRET env variable.');
  finalEnvVars.AUTH_SECRET = 'keyboard-cat';
}
// Guard that our some of our expected environment variables exist.
if (!finalEnvVars.BUNDLE_OUTPUT_PATH || !finalEnvVars.BUNDLE_ASSETS_FILENAME) {
  throw new Error('Some of the critical environment variables are missing, please ensure that you have provided them via the command line or via a .env file.');
}

module.exports = finalEnvVars;
