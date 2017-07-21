#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const rimraf = require('rimraf');
const webpack = require('webpack');
const urlUtil = require('url');
const notifier = require('node-notifier');
const jsonfile = require('jsonfile');
const merge = require('deepmerge');
const argv = require('minimist')(process.argv.slice(1));
require('dotenv').config();

const createConfig = require(path.resolve(
  __dirname,
  '..',
  'webpack-config.js'
));

const root = process.cwd();
let olymprc =
  jsonfile.readFileSync(path.resolve(root, '.olymprc'), {
    throws: false,
  }) || {};
const pckgOlymp =
  jsonfile.readFileSync(path.resolve(root, 'package.json'), {
    throws: false,
  }) || {};
olymprc = Object.assign({}, pckgOlymp.olymp || {}, olymprc);

if (olymprc.extends) {
  const topFolder = path.resolve(__dirname, '..', '..');
  const concatMerge = (destinationArray, sourceArray, options) =>
    destinationArray.concat(sourceArray);
  const requireFirst = name =>
    jsonfile.readFileSync(path.resolve(topFolder, name, '.olymprc'), {
      throws: false,
    }) ||
    jsonfile.readFileSync(
      path.resolve(topFolder, `olymp-${name}`, '.olymprc'),
      {
        throws: false,
      }
    ) ||
    {};
  olymprc = olymprc.extends.reduce(
    (rc, item) => merge(requireFirst(item), rc, { arrayMerge: concatMerge }),
    olymprc
  );
}

const command = argv._[1];

if (['start', 'build'].includes(command)) {
  process.env.NODE_ENV = 'production';
}

const { SSR, SERVERLESS, NODE_ENV, PORT, URL } = process.env;

const ssr = SSR != 'false';
const serverless = SERVERLESS == 'true';

if (command === 'dev') {
  const port = parseInt(PORT, 10);
  const url = new urlUtil.URL(URL || `http://localhost:${port}`);
  const devPort = serverless ? port : port + 2;
  const devUrl = serverless
    ? url
    : new urlUtil.URL(`${url.protocol}//${url.hostname}:${devPort}`);

  let compiler;
  const watch = {
    aggregateTimeout: 300,
    poll: false,
    ignored: /node_modules/,
  };
  if (serverless) {
    compiler = webpack([
      createConfig({
        target: 'web',
        mode: 'development',
        devPort,
        devUrl,
        ssr,
        serverless,
        ...olymprc,
      }),
    ]);
  } else {
    compiler = webpack([
      createConfig({
        target: 'web',
        mode: 'development',
        devPort,
        devUrl,
        ssr,
        serverless,
        ...olymprc,
      }),
      createConfig({
        target: 'node',
        mode: 'development',
        devPort,
        devUrl,
        ssr,
        serverless,
        ...olymprc,
      }),
    ]);
    compiler.compilers[1].watch(watch, (err, compilation) => {
      if (err) {
        return console.log('[webpack] error:', err);
      }
      const stats = compilation.stats || [compilation];
      console.log('[webpack] the following asset bundles were built:');
      stats.forEach(c => console.log(c.toString()));
      notifier.notify('Ready');
    });
  }
  const WebpackDevServer = require('webpack-dev-server');
  const server = new WebpackDevServer(compiler.compilers[0], {
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
    watchOptions: watch,
    host: devUrl.hostname,
    port: devUrl.port,
    disableHostCheck: true,
    historyApiFallback: true,
    hot: true,
    stats: {
      colors: true,
      hash: false,
      version: false,
      timings: false,
      assets: false,
      chunks: false,
      modules: false,
      reasons: false,
      children: false,
      source: false,
      errors: true,
      errorDetails: true,
      warnings: false,
      publicPath: false,
    },
  });
  server.listen(devPort);
} else if (command === 'build') {
  rimraf.sync(path.resolve(root, '.dist'));
  process.env.NODE_ENV = 'production';
  const configs = [
    createConfig({
      target: 'web',
      mode: 'production',
      ssr,
      serverless,
      ...olymprc,
    }),
  ];
  if (!serverless) {
    configs.push(
      createConfig({
        target: 'node',
        mode: 'production',
        ssr,
        serverless,
        ...olymprc,
      })
    );
  }
  const compiler = webpack(configs);
  compiler.run((err, compilation) => {
    if (err) {
      console.error(err);
      return process.exit(1);
    }
    const stats = compilation.stats || [compilation];
    console.log('[webpack] the following asset bundles were built:');
    /* stats.forEach(c =>
      fs.writeFileSync(path.resolve(__dirname, 'stats.json'), c.toJson())
    ); */
    stats.forEach(c => console.log(c.toString()));
  });
} else if (command.indexOf('build:') === 0) {
  const target = command.split(':')[1];
  rimraf.sync(path.resolve(process.cwd(), '.dist', target));
  process.env.NODE_ENV = 'production';

  const compiler = webpack([
    createConfig({
      target,
      mode: 'production',
      ssr,
      serverless,
      ...olymprc,
    }),
  ]);
  compiler.run((err, compilation) => {
    if (err) {
      console.error(err);
      return process.exit(1);
    }
    const stats = compilation.stats || [compilation];
    console.log('[webpack] the following asset bundles were built:');
    stats.forEach(c => console.log(c.toString()));
  });
} else if (command === 'start') {
  require(path.resolve(process.cwd(), '.dist', 'node', 'main'));
}
