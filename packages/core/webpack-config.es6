const webpack = require('webpack');
const path = require('path');
const fs = require('fs');
const AssetsPlugin = require('assets-webpack-plugin');
const ProgressBarPlugin = require('progress-bar-webpack-plugin');
const nodeExternals = require('webpack-node-externals');
const StartServerPlugin = require('start-server-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const Visualizer = require('webpack-visualizer-plugin');
const GenerateJsonPlugin = require('generate-json-webpack-plugin');
const HtmlWebpackHarddiskPlugin = require('html-webpack-harddisk-plugin');
const ExtractCssChunks = require('extract-css-chunks-webpack-plugin');
const StatsWriterPlugin = require('webpack-stats-plugin').StatsWriterPlugin;

const appRoot = process.cwd();

const topFolder = path.resolve(__dirname, '..');
const isLinked = path.basename(topFolder) === 'packages';
const nodeModules = isLinked
  ? path.resolve(__dirname, 'node_modules')
  : path.resolve(__dirname, '..');
process.noDeprecation = true;
const allPackages = !isLinked ? [] : fs.readdirSync(topFolder).filter(x => x[0] !== '.');
const pluginsFolder = !isLinked ? nodeModules : topFolder;

module.exports = ({
  mode,
  target,
  url,
  devUrl,
  devPort,
  ssr,
  serverless,
  plugins = [],
  sharedEnv = {},
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
  const isServerless = serverless === true || isElectron;
  const isSSR = !isElectronMain && ssr !== false && !serverless;
  const folder = isDev ? '.dev' : '.dist';

  const isVerbose = true;
  const config = {
    bail: !isDev,
    cache: isDev,
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
      version: isVerbose,
    },
    resolve: {
      extensions: ['.js'],
      modules: [path.resolve(appRoot, 'node_modules'), path.resolve(appRoot, 'app')],
      alias: {
        '@root': appRoot,
        '@electron':
          isElectron && fs.existsSync(path.resolve(appRoot, 'electron', 'index.js'))
            ? path.resolve(appRoot, 'electron', 'index.js')
            : path.resolve(__dirname, 'noop'),
        '@app': isServer && !isSSR ? path.resolve(__dirname, 'noop') : path.resolve(appRoot, 'app'),
        ...allPackages.reduce((obj, item) => {
          // get all folders in src and create 'olymp-xxx' alias
          if (item === 'core') {
            obj.olymp = path.resolve(topFolder, item);
          } else {
            obj[`olymp-${item}`] = path.resolve(topFolder, item);
          }
          return obj;
        }, {}),
      },
    },
    resolveLoader: {
      modules: [path.resolve(appRoot, 'node_modules')],
    },
    plugins: [
      // new webpack.optimize.ModuleConcatenationPlugin(),
      new webpack.DefinePlugin({
        'process.env.GOOGLE_MAPS_KEY': process.env.GOOGLE_MAPS_KEY
          ? `"${process.env.GOOGLE_MAPS_KEY}"`
          : false,
        'process.env.URL': url ? `"${url}"` : false,
        'process.env.DEV_PORT': devPort || false,
        'process.env.DEV_URL': devUrl ? `"${devUrl.origin}"` : false,
        'process.env.HOTJAR': process.env.HOTJAR ? `"${process.env.HOTJAR}"` : false,
        'process.env.NODE_ENV': `"${mode}"`,
        'process.env.SSR': isSSR,
        'process.env.SERVERLESS': isServerless,
        'process.env.IS_WEB': isWeb,
        'process.env.IS_NODE': isNode,
        'process.env.IS_ELECTRON': isElectron,
        ...Object.keys(sharedEnv).reduce((store, key) => {
          if (sharedEnv[key] === true || process.env[key]) {
            store[`process.env.${key}`] = JSON.stringify(process.env[key]);
          } else {
            store[`process.env.${key}`] = JSON.stringify(sharedEnv[key]);
          }
          return store;
        }, {}),
      }),
      // new PrepackWebpackPlugin({ }),
      new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
      new webpack.ContextReplacementPlugin(/moment[/\\]locale$/, /de/),
      new ProgressBarPlugin(),
      new webpack.NoEmitOnErrorsPlugin(),
      // new CheckerPlugin(),
    ],
    module: {
      rules: [
        {
          test: /\.html$/,
          loader: 'file-loader?name=[name].[ext]',
        },
        {
          test: /\.(jpg|jpeg|png|gif|eot|ttf|woff|woff2|svg)$/,
          loader: 'url-loader',
          options: {
            limit: 20000,
          },
        },
        {
          test: /\.(txt|md)$/,
          loader: 'raw-loader',
        },
        {
          test: /\.json$/,
          loader: 'json-loader',
        },
      ],
    },
    output: {
      path: path.resolve(appRoot, folder, target.split('-')[0]),
    },
    entry: {},
  };

  if (isDev) {
    config.plugins.push(new webpack.NamedModulesPlugin());
  }
  if (!isServer) {
    config.plugins.push(
      new webpack.DefinePlugin({
        'process.env.AMP': !!process.env.AMP,
        'process.env.GRAPHQL_URL': process.env.GRAPHQL_URL ? `"${process.env.GRAPHQL_URL}"` : false,
        'process.env.CRASHREPORT_URL': process.env.CRASHREPORT_URL
          ? `"${process.env.CRASHREPORT_URL}"`
          : false,
        'process.env.URL': process.env.URL ? `"${process.env.URL}"` : false,
        'process.env.FILESTACK_KEY': process.env.FILESTACK_KEY
          ? `"${process.env.FILESTACK_KEY}"`
          : false,
      }),
    );
  }

  // inline-source-map for web-dev
  config.devtool = isProd ? 'cheap-module-source-map' : 'eval-cheap-module-source-map';

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
      __dirname: false,
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
      __filename: false,
    };
    config.output.libraryTarget = 'commonjs2';
  } else {
    config.target = isElectron ? 'electron-renderer' : 'web';
    config.node = {
      fs: 'empty',
      net: 'empty',
      tls: 'empty',
      __dirname: true,
      __filename: true,
    };
  }

  if (isDev && isWeb) {
    config.output.publicPath = devUrl.href;
  } else {
    config.output.publicPath = '/';
  }

  // webpack plugins
  if (isElectronMain) {
    config.plugins.push(
      new GenerateJsonPlugin('package.json', require('./electron/package-json')()),
    );
    if (isDev) {
      const ElectronPlugin = require('electron-webpack-plugin');
      config.plugins.push(
        new ElectronPlugin({
          test: /^.\/electron/,
          path: path.resolve(appRoot, '.dev', 'electron'),
        }),
      );
    }
  }
  if (isProd) {
    // https://github.com/webpack/webpack/issues/5089
    // config.plugins.push(new webpack.optimize.ModuleConcatenationPlugin());
  }
  if (isNode && !isElectron) {
    config.plugins.push(
      new webpack.BannerPlugin({
        banner: 'require("source-map-support").install();',
        raw: true,
        entryOnly: false,
      }),
    );
    if (isDev && isServer) {
      config.plugins.push(new StartServerPlugin('app.js'));
      /* config.plugins.push(
        new ReloadServerPlugin({
          // Defaults to process.cwd() + "/server.js"
          script: path.resolve(__dirname, 'node', 'index.js'),
        })
      );*/
    }
  } else if (!isNode) {
    config.plugins.push(
      new StatsWriterPlugin({
        filename: 'stats.json',
        fields: ['assetsByChunkName', 'publicPath'],
      }),
    );
    config.plugins.push(
      new AssetsPlugin({
        filename: 'assets.json',
        path: path.resolve(process.cwd(), folder, target.split('-')[0]),
      }),
    );
    if (isElectronRenderer) {
      config.plugins.push(
        new HtmlWebpackPlugin({
          alwaysWriteToDisk: true,
          filename: 'index.html',
          template: path.resolve(__dirname, 'templates', 'electron.js'),
          inject: false,
          /* minify: {
          removeComments: true,
          collapseWhitespace: true,
          removeRedundantAttributes: true,
          useShortDoctype: true,
          removeEmptyAttributes: true,
          removeStyleLinkTypeAttributes: true,
          keepClosingSlash: true,
          minifyJS: true,
          minifyCSS: true,
          minifyURLs: true,
        },*/
        }),
      );
      config.plugins.push(new HtmlWebpackHarddiskPlugin());
    } else if (isWeb) {
      config.plugins.push(
        new Visualizer({
          filename: './_visualizer.html',
        }),
      );
      if (isServerless) {
        config.plugins.push(
          new HtmlWebpackPlugin({
            filename: 'index.html',
            template: path.resolve(__dirname, 'templates', 'serverless.js'),
            inject: false,
            /* minify: {
            removeComments: true,
            collapseWhitespace: true,
            removeRedundantAttributes: true,
            useShortDoctype: true,
            removeEmptyAttributes: true,
            removeStyleLinkTypeAttributes: true,
            keepClosingSlash: true,
            minifyJS: true,
            minifyCSS: true,
            minifyURLs: true,
          },*/
          }),
        );
      }
    }
  }

  // Hot module replacement on dev
  if (isDev) {
    config.plugins.push(new webpack.HotModuleReplacementPlugin());
  }

  // LimitChunkCount on all but production-web
  if (isNode || isElectron || isDev) {
    config.plugins.push(new webpack.optimize.LimitChunkCountPlugin({ maxChunks: 1 }));
    config.output.filename = '[name].js';
  } else {
    config.plugins.push(new webpack.optimize.LimitChunkCountPlugin({ minChunkSize: 10000 }));
    config.plugins.push(new ExtractCssChunks());
    config.plugins.push(
      new webpack.optimize.CommonsChunkPlugin({
        names: ['app'],
        filename: '[name].[chunkhash].js',
        minChunks: Infinity,
      }),
    );
    config.output.filename = '[name].[chunkhash].js';
    config.output.chunkFilename = '[name].[chunkhash].js';
  }

  // externals
  if (isNode) {
    config.externals = nodeExternals({
      modulesDir: path.resolve(appRoot, 'node_modules'),
      whitelist: [
        '.bin',
        // 'is-webpack-bundle',
        // 'webpack-require-weak',
        'source-map-support/register',
        /\.(eot|woff|woff2|ttf|otf)$/,
        /\.(svg|png|jpg|jpeg|gif|ico)$/,
        /\.(mp4|mp3|ogg|swf|webp)$/,
        /\.(css|scss|sass|sss|less)$/,
        v => v.indexOf('webpack/hot/poll') === 0,
        v => v === 'antd' || v.indexOf('antd/') === 0,
        v => v === 'olymp' || v.indexOf('olymp-') === 0 || v.indexOf('olymp/') === 0,
      ],
    });
    if (isElectron) {
      // config.externals.push('pg/native');
    }
  }
  if (isWeb || isElectronRenderer) {
    if (isDev) {
      config.entry.app = [
        'react-hot-loader/patch',
        `webpack-dev-server/client?${config.output.publicPath}`,
        'webpack/hot/only-dev-server',
        require.resolve(path.resolve(__dirname, 'web', 'index.js')),
      ];
    } else {
      config.entry.app = [require.resolve(path.resolve(__dirname, 'web', 'index.js'))];
    }
  } else if (isElectronMain) {
    if (isDev) {
      config.entry.main = [
        'webpack/hot/poll?1000',
        require.resolve(path.resolve(__dirname, 'electron', 'main.js')),
      ];
    } else {
      config.entry.main = [require.resolve(path.resolve(__dirname, 'electron', 'main.js'))];
    }
  } else if (isNode) {
    if (isDev) {
      config.entry.app = [
        'webpack/hot/poll?1000',
        require.resolve(path.resolve(__dirname, 'node', 'index.js')),
      ];
    } else {
      config.entry.app = [require.resolve(path.resolve(__dirname, 'node', 'index.js'))];
    }
  }

  const options = {
    target,
    folder,
    isProd,
    isDev,
    isWeb,
    isElectron,
    isNode,
    isServerless,
    isSSR,
    appRoot,
    nodeModules,
    isLinked,
    ExtractCssChunks,
    ...rest,
  };

  const final = plugins.reduce((store, plugin) => {
    const req = require(path.resolve(
      pluginsFolder,
      isLinked ? `webpack-${plugin}` : `olymp-webpack-${plugin}`,
    ));
    return req(config, options, webpack) || config;
  }, config);

  return isWeb && isProd ? require('./offline')(final) : final;
};
