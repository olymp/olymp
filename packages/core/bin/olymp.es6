#!/usr/bin/env node

const path = require('path');
const fs = require('fs');
const rimraf = require('rimraf');
const webpack = require('webpack');
const notifier = require('node-notifier');
const jsonfile = require('jsonfile');
const { merge } = require('lodash');
const argv = require('minimist')(process.argv.slice(1));
// const FileSizeReporter = require('react-dev-utils/FileSizeReporter');

// const printFileSizesAfterBuild = FileSizeReporter.printFileSizesAfterBuild;

require('dotenv').config();

const createConfig = require(path.resolve(
  __dirname,
  '..',
  'webpack-config.js',
));

const root = process.cwd();
const hasServer = fs.existsSync(path.resolve(root, 'server'));
const hasClient = fs.existsSync(path.resolve(root, 'app'));

const pckgOlymp =
  jsonfile.readFileSync(path.resolve(root, 'package.json'), {
    throws: false,
  }) || {};
const olymprc = merge(
  {
    app: './app',
    server: './server',
    plugins: ['less', 'babel'],
    modifyVars: {
      'font-size-base': '15px',
      'primary-color': '#8e44ad',
    },
  },
  pckgOlymp.olymp || {},
  jsonfile.readFileSync(path.resolve(root, '.olymprc'), {
    throws: false,
  }) || {},
);

const command = argv._[1];

if (['start', 'build'].includes(command)) {
  process.env.NODE_ENV = 'production';
}

const { PORT } = process.env;

const isSSR = !!argv.ssr;
const isServerless = !!argv.serverless || !!argv.sls;

let targets = [];
if (argv.targets) {
  targets = argv.targets.split(',');
} else if (argv.electron) {
  targets = hasServer
    ? ['node', 'electron-main', 'electron-renderer']
    : ['electron-main', 'electron-renderer'];
} else {
  targets = hasServer ? ['node', 'web'] : ['web'];
}
if (command === 'dev') {
  const port = parseInt(PORT, 10);

  const watch = {
    aggregateTimeout: 300,
    poll: false,
    ignored: /node_modules/,
  };
  const compiler = webpack(
    targets.map((target, i) =>
      createConfig({
        target,
        mode: 'development',
        isSSR,
        port: port + 1,
        isServerless,
        ...olymprc,
      }),
    ),
  );
  targets.forEach((target, i) => {
    const currentCompiler = compiler.compilers[i];
    if (target === 'node' || target === 'electron-main') {
      currentCompiler.watch(watch, (err, compilation) => {
        if (err) {
          return console.log('[webpack] error:', err);
        }
        const stats = compilation.stats || [compilation];
        console.log('[webpack] the following asset bundles were built:');
        stats.forEach(c => console.log(c.toString()));
        notifier.notify('Ready');
      });
    } else {
      const WebpackDevServer = require('webpack-dev-server');
      const server = new WebpackDevServer(currentCompiler, {
        headers: {
          'Access-Control-Allow-Origin': '*',
        },
        proxy: {
          '**': `http://localhost:${port + 1}`,
        },
        watchOptions: watch,
        inline: false,
        host: '0.0.0.0',
        port,
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
      server.listen(port);
    }
  });
} else if (command === 'build') {
  targets.map(target => rimraf.sync(path.resolve(root, '.dist', target)));
  process.env.NODE_ENV = 'production';

  const compiler = webpack(
    targets.map((target, i) =>
      createConfig({
        target,
        mode: 'production',
        isSSR,
        isServerless,
        ...olymprc,
      }),
    ),
  );
  compiler.run((err, compilation) => {
    if (err) {
      console.error(err);
      return process.exit(1);
    }
    const stats = compilation.stats || [compilation];
    console.log('[webpack] the following asset bundles were built:');
    stats.forEach((c, i) => {
      console.log(c.toString());
      // console.log('File sizes after gzip:\n');
      // printFileSizesAfterBuild(c, null, null);
    });
  });
} else if (command.indexOf('build:') === 0) {
  const target = command.split(':')[1];
  rimraf.sync(path.resolve(process.cwd(), '.dist', target));
  process.env.NODE_ENV = 'production';

  const compiler = webpack([
    createConfig({
      target,
      mode: 'production',
      isSSR,
      isServerless,
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
  require(path.resolve(process.cwd(), '.dist', 'node', 'app'));
}
