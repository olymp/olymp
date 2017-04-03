#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const rimraf = require('rimraf');
const webpack = require('webpack');
const env = require('node-env-file');
const createConfig = require(path.resolve(__dirname, '..', 'runtime', 'webpack-config'));
env(path.resolve(process.cwd(), '.env'), { raise: false });

const command = process.argv[process.argv.length - 1];

/*const exists = (p, throwError) => {
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

if (command === 'dev') {
  const notifier = require('node-notifier');

  const port = parseInt(process.env.PORT, 10);
  const devPort = port + 1;

  const compiler = webpack([
    createConfig({ target: 'node', mode: 'development', port, devPort, ssr: process.env.SSR != 'false' }),
    createConfig({ target: 'web', mode: 'development', port, devPort }),
  ]);
  compiler.watch({ aggregateTimeout: 300 }, (err, compilation) => {
    if (err) return console.log('[webpack] error:', err);
    const stats = compilation.stats || [compilation];
    console.log('[webpack] the following asset bundles were built:');
    stats.forEach((c) => console.log(c.toString()));
    notifier.notify('Ready');
  });
  var webpackDevServer = require('webpack-dev-server');
  var server = new webpackDevServer(compiler.compilers[1], {
    host: 'localhost',
    port: devPort,
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
      publicPath: false
    },
  });
  server.listen(devPort);
} else if (command === 'build') {
  rimraf.sync(path.resolve(process.cwd(), 'build'));
  process.env.NODE_ENV = 'production';
  const compiler = webpack([
    createConfig({ target: 'node', mode: 'production' }),
    createConfig({ target: 'web', mode: 'production' })
  ]);
  compiler.run((err, compilation) => {
    if (err) return console.log('[webpack] error:', err);
    const stats = compilation.stats || [compilation];
    console.log('[webpack] the following asset bundles were built:');
    stats.forEach((c) => console.log(c.toString()));
    stats.forEach((c) => fs.writeFileSync(path.resolve(__dirname, `stats.json`), c.toJson()));
  });
} else if (command.indexOf('build:') === 0) {
  const target = command.split(':')[1];
  rimraf.sync(path.resolve(process.cwd(), 'build', target));
  process.env.NODE_ENV = 'production';
  const compiler = webpack([
    createConfig({ target: target, mode: 'production' })
  ]);
  compiler.run((err, compilation) => {
    if (err) return console.log('[webpack] error:', err);
    const stats = compilation.stats || [compilation];
    console.log('[webpack] the following asset bundles were built:');
    stats.forEach((c) => console.log(c.toString()));
    stats.forEach((c) => fs.writeFileSync(path.resolve(__dirname, `stats.json`), c.toJson()));
  });
} else if (command === 'start') {
  require(path.resolve(process.cwd(), 'build', 'node', 'main'))
}
