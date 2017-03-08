#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const webpack = require('webpack');

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
  /*require('babel-register')({
    presets: [
      [require.resolve('babel-preset-env'), { targets: { node: true } }],
      require.resolve('babel-preset-kyt-react'),
    ],
    only: [
      path.resolve(__dirname, '..', 'src'),
      path.resolve(__dirname, '..', 'runtime'),
      // path.resolve(process.cwd(), 'universally.config.js')
    ],
  });
  return require('../runtime/server');*/
  webpack(require(path.resolve(__dirname, '..', 'runtime', 'config.server.dev')), (err, stats) => {
    if (err) console.log('ERROR', err || stats.hasErrors());
    const jsonStats = stats.toJson();
    if (jsonStats.errors.length > 0) return console.error(jsonStats.errors);
    if (jsonStats.warnings.length > 0) console.warn(jsonStats.warnings);
    console.log('Server bundle done.');
  });
  return;
}
if (command === 'start') return require(path.resolve(process.cwd(), 'build', 'server', 'main'));
if (fs.existsSync(path.resolve(__dirname, '..', 'node_modules', 'kyt', 'cli'))) {
  require(path.resolve(__dirname, '..', 'node_modules', 'kyt', 'cli'));
} else if (fs.existsSync(path.resolve(__dirname, '..', '..', 'kyt', 'cli'))) {
  require(path.resolve(__dirname, '..', '..', 'kyt', 'cli'));
} else throw new Error('kyt not found');
