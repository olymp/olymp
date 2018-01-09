const webpack = require('webpack');
const path = require('path');
const fs = require('fs');
const externals = require('./externals');
const entry = require('./entry');
const webpackPlugins = require('./plugins');

const appRoot = process.cwd();

const topFolder = path.resolve(__dirname, '..', '..');
const isLinked = path.basename(topFolder) === 'packages';
const nodeModules = isLinked
  ? path.resolve(__dirname, '..', 'node_modules')
  : path.resolve(__dirname, '..', '..');
process.noDeprecation = true;
const allPackages = !isLinked
  ? []
  : fs.readdirSync(topFolder).filter(x => x[0] !== '.');
const pluginsFolder = !isLinked ? nodeModules : topFolder;

module.exports = ({
  mode,
  target,
  port,
  isSSR,
  isServerless,
  alias = {},
  plugins = [],
  appPath,
  serverPath,
  paths,
  ...rest
}) => {
  const isDev = mode !== 'production';
  const isProd = mode === 'production';
  const isElectron = target.indexOf('electron') === 0;
  const isElectronMain = target === 'electron-main';
  const isElectronRenderer = target === 'electron-renderer';
  const isWeb = target !== 'node' && target !== 'electron-main';
  const isNode = target === 'node' || isElectronMain;
  const isServer = target === 'node';
  const isNetlify = isSSR && isServerless;
  isServerless = isServerless === true || isElectron;
  isSSR = !isElectronMain && isSSR !== false && !isServerless;
  const folder = isDev ? '.dev' : '.dist';
  const options = {
    target,
    folder,
    isProd,
    isDev,
    isWeb,
    isElectron,
    isElectronMain,
    isElectronRenderer,
    isNetlify,
    isNode,
    isServerless,
    isSSR,
    appRoot,
    nodeModules,
    isLinked,
    paths,
    port,
    ...rest
  };

  const isVerbose = true;
  let config = {
    bail: !isDev,
    cache: isDev,
    // cache: true,
    stats: {
      cached: isVerbose,
      cachedAssets: isVerbose,
      chunks: isVerbose,
      chunkModules: isVerbose,
      colors: true,
      hash: isVerbose,
      modules: isVerbose,
      reasons: isDev,
      timings: true,
      version: isVerbose
    },
    resolve: {
      extensions: ['.js'],
      modules: [
        path.resolve(appRoot, 'node_modules'),
        path.resolve(appRoot, 'app')
      ],
      alias: {
        __app__: path.resolve(__dirname, '..', 'noop'),
        __server__: path.resolve(__dirname, '..', 'noop'),
        __electron__: path.resolve(__dirname, '..', 'noop'),
        __root__: appRoot,
        ...Object.keys(paths || {}).reduce((obj, key) => {
          // get all folders in src and create 'olymp-xxx' alias
          if (path.isAbsolute(paths[key])) {
            obj[key] = paths[key];
          } else {
            obj[key] = path.resolve(appRoot, paths[key]);
          }
          return obj;
        }, {}),
        ...allPackages.reduce((obj, item) => {
          // get all folders in src and create 'olymp-xxx' alias
          if (item === 'core') {
            obj.olymp = path.resolve(topFolder, item);
          } else {
            obj[`olymp-${item}`] = path.resolve(topFolder, item);
          }
          return obj;
        }, {}),
        ...alias
      }
    },
    resolveLoader: {
      modules: [path.resolve(appRoot, 'node_modules')]
    },
    module: {
      rules: [
        {
          test: /\.html$/,
          loader: 'file-loader?name=[name].[ext]'
        },
        {
          test: /\.(jpg|jpeg|png|gif|eot|ttf|woff|woff2|svg)$/,
          loader: 'url-loader',
          options: {
            limit: 20000
          }
        },
        {
          test: /\.(txt|md|pug)$/,
          loader: 'raw-loader'
        },
        {
          test: /\.json$/,
          loader: 'json-loader'
        },
        {
          test: /\.flow$/,
          loader: 'ignore-loader'
        }
      ]
    },
    output: {
      publicPath: isProd ? '/' : `http://localhost:${port}/`,
      path: path.resolve(appRoot, folder, target.split('-')[0])
    },
    entry: {}
  };

  // inline-source-map for web-dev
  config.devtool = isProd
    ? 'cheap-module-source-map'
    : 'cheap-module-source-map';

  // inline-source-map for web-dev
  if (isProd && isWeb && !isElectron) {
    config.output.filename = '[name].[contenthash].js';
  } else {
    config.output.filename = '[name].js';
  }

  // target && node settings
  if (isServer) {
    config.target = 'node';
    config.watch = isDev;
    config.node = {
      console: false,
      global: false,
      process: false,
      Buffer: false,
      __filename: false,
      __dirname: false
    };
    config.output.libraryTarget = 'commonjs2';
  } else if (isElectronMain) {
    config.target = 'electron-main';
    config.watch = isDev;
    config.node = {
      console: false,
      global: false,
      process: false,
      Buffer: false,
      __dirname: false,
      __filename: false
    };
    config.output.libraryTarget = 'commonjs2';
  } else {
    config.target = isElectron ? 'electron-renderer' : 'web';
    config.node = {
      fs: 'empty',
      net: 'empty',
      tls: 'empty',
      __dirname: true,
      __filename: true
    };
  }

  if (isNode || isElectron) {
    config.output.filename = '[name].js';
  } else {
    const filename = isProd ? '[name].[chunkhash].js' : '[name].js';
    config.output.filename = filename;
    config.output.chunkFilename = filename;
  }

  config = webpackPlugins(config, options);
  config = externals(config, options);
  config = entry(config, options);
  return plugins.reduce((store, plugin) => {
    const req = require(path.resolve(
      pluginsFolder,
      isLinked ? plugin : `olymp-${plugin}`,
      'plugin'
    ));
    return req(config, options, webpack) || config;
  }, config);
};
