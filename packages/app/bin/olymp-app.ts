#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const rimraf = require('rimraf');
const webpack = require('webpack');
const urlUtil = require('url');
require('dotenv').config();

const createConfig = require(path.resolve(
  __dirname,
  '..',
  'webpack-config.js'
));

const command = process.argv[process.argv.length - 1];

/* const exists = (p, throwError) => {
  const doesExist = fs.existsSync(path.resolve(appRootDir.get(), `${p}.js`)) || fs.existsSync(path.resolve(appRootDir.get(), p, 'index.js'));
  if (!doesExist && throwError) throw new Error(`${p} not found in your root dir!`);
  else if (!doesExist) console.log(`${p} not found in your root dir!`);
  return doesExist;
};

exists('server');
exists('app', true);

require('babel-register')({
  presets: [
    [require.resolve('babel-preset-env'), { targets: { node: true } }],
    require.resolve('babel-preset-stage-3'),
    require.resolve('babel-preset-react'),
  ],
  only: [
    path.resolve(__dirname, '..', 'tools'),
    path.resolve(__dirname, '..', 'src'),
    path.resolve(__dirname, '..', 'config'),
    path.resolve(appRootDir.get(), 'universally.config.js')
  ],
});*/

if (['start', 'build'].includes(command)) {
  process.env.NODE_ENV = 'production';
}

const {
  SSR,
  SERVERLESS,
  NODE_ENV,
  PORT,
  URL,
} = process.env;


const ssr = SSR != 'false';
const serverless = SERVERLESS == 'true';
console.log('Is Serverless', serverless);
console.log('Is SSR', ssr);

if (command === 'dev') {
  const port = parseInt(PORT, 10);
  const url = new urlUtil.URL(URL || `http://localhost:${port}`);
  const devPort = serverless ? port : port + 2;
  const devUrl = serverless ? url : new urlUtil.URL(`${url.protocol}//${url.hostname}:${devPort}`);

  const notifier = require('node-notifier');

  let compiler;
  const watch = {
    aggregateTimeout: 300,
    poll: false,
    ignored: /node_modules/,
  };
  if (serverless) {
    compiler = webpack([
      createConfig({ target: 'web', mode: 'development', devPort, devUrl, ssr, serverless }),
    ]);
  } else {
    compiler = webpack([
      createConfig({ target: 'web', mode: 'development', devPort, devUrl, ssr, serverless }),
      createConfig({
        target: 'node',
        mode: 'development',
        devPort,
        devUrl,
        ssr,
        serverless,
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
  rimraf.sync(path.resolve(process.cwd(), 'dist'));
  process.env.NODE_ENV = 'production';
  const configs = [
    createConfig({ target: 'web', mode: 'production', ssr, serverless }),
  ];
  if (!serverless) {
    configs.push(createConfig({ target: 'node', mode: 'production', ssr, serverless }));
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
  rimraf.sync(path.resolve(process.cwd(), 'dist', target));
  process.env.NODE_ENV = 'production';
  const compiler = webpack([createConfig({ target, mode: 'production', ssr, serverless })]);
  compiler.run((err, compilation) => {
    if (err) {
      console.error(err);
      return process.exit(1);
    }
    const stats = compilation.stats || [compilation];
    console.log('[webpack] the following asset bundles were built:');
    stats.forEach(c => console.log(c.toString()));
    stats.forEach(c =>
      fs.writeFileSync(path.resolve(__dirname, 'stats.json'), c.toJson())
    );
  });
} else if (command === 'start') {
  require(path.resolve(process.cwd(), 'dist', 'node', 'main'));
}

