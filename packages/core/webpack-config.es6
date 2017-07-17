const webpack = require('webpack');
const path = require('path');
const fs = require('fs');
const AssetsPlugin = require('assets-webpack-plugin');
const ProgressBarPlugin = require('progress-bar-webpack-plugin');
const nodeExternals = require('webpack-node-externals');
const StartServerPlugin = require('start-server-webpack-plugin');
const ReloadServerPlugin = require('reload-server-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const OfflinePlugin = require('offline-plugin');
const VisualizerPlugin = require('webpack-visualizer-plugin');
const GenerateJsonPlugin = require('generate-json-webpack-plugin');

const appRoot = process.cwd();

const topFolder = path.resolve(__dirname, '..');
const isLinked = path.basename(topFolder) === 'packages';
const nodeModules = isLinked
  ? path.resolve(__dirname, 'node_modules')
  : path.resolve(__dirname, '..');
process.noDeprecation = true;
const allPackages = !isLinked
  ? []
  : fs.readdirSync(topFolder).filter(x => x[0] !== '.');
const pluginsFolder = !isLinked ? nodeModules : topFolder;

module.exports = ({
  mode,
  target,
  devUrl,
  devPort,
  ssr,
  serverless,
  plugins = [],
  ...rest
}) => {
  const isDev = mode !== 'production';
  const isProd = mode === 'production';
  const isWeb = target !== 'node';
  const isElectron = target === 'electron';
  const isNode = target === 'node';
  const isServerless = serverless === true || isElectron;
  const isSSR = ssr !== false && !serverless;
  const folder = isDev ? '.dev' : '.dist';

  const config = {
    cache: true,
    resolve: {
      extensions: ['.js'],
      modules: [
        path.resolve(appRoot, 'node_modules'),
        path.resolve(appRoot, 'app'),
      ],
      alias: {
        '@history': isServerless
          ? 'history/createHashHistory'
          : isNode
            ? 'history/createMemoryHistory'
            : 'history/createBrowserHistory',
        react: path.resolve(appRoot, 'node_modules', 'react'),
        // 'core-js': path.resolve(appRoot, 'node_modules', 'core-js'),
        'react-dom': path.resolve(appRoot, 'node_modules', 'react-dom'),
        // 'react-router': path.resolve(appRoot, 'node_modules', 'react-router'),
        // moment: path.resolve(appRoot, 'node_modules', 'moment'),
        // lodash: path.resolve(appRoot, 'node_modules', 'lodash'),
        '@root': appRoot,
        '@app':
          isNode && !isSSR
            ? path.resolve(__dirname, 'noop')
            : path.resolve(appRoot, 'app'),
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
      modules: [
        path.resolve(nodeModules),
        path.resolve(appRoot, 'node_modules'),
      ],
    },
    plugins: [
      // new webpack.optimize.ModuleConcatenationPlugin(),
      new webpack.DefinePlugin({
        'process.env.SSR': JSON.stringify(isSSR),
        'process.env.SERVERLESS': JSON.stringify(isServerless),
        'process.env.NODE_ENV': JSON.stringify(mode),
        'process.env.DEV_PORT': JSON.stringify(devPort),
        'process.env.DEV_URL': devUrl
          ? JSON.stringify(devUrl.origin)
          : undefined,
        'process.env.IS_WEB': isWeb ? JSON.stringify(true) : undefined,
        'process.env.IS_NODE': isNode ? JSON.stringify(true) : undefined,
        'process.env.IS_ELECTRON': isElectron
          ? JSON.stringify(true)
          : undefined,
      }),
      /*new webpack.DllPlugin({
        path: path.resolve(appRoot, folder, target, `[name]-manifest.json`),
        library: '[name]',
        filename: '[name].js',
        name: '[name]_lib',
      }),*/
      // new PrepackWebpackPlugin({ }),
      new webpack.ContextReplacementPlugin(/moment[/\\]locale$/, /de/),
      new webpack.NamedModulesPlugin(),
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
          test: /\.(jpg|jpeg|png|gif|eot|ttf|woff|woff2)$/,
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
        {
          test: /\.(graphql|gql)$/,
          exclude: /node_modules/,
          loader: 'graphql-tag/loader',
        },
      ],
    },
    output: {
      path: path.resolve(appRoot, folder, target),
    },
    entry: {
      main: [],
    },
  };

  if (!isNode) {
    config.plugins.push(
      new webpack.DefinePlugin({
        'process.env.AMP': process.env.AMP
          ? JSON.stringify(process.env.AMP)
          : undefined,
        'process.env.GM_KEY': JSON.stringify(process.env.GM_KEY),
        'process.env.GRAPHQL_URL': process.env.GRAPHQL_URL
          ? JSON.stringify(process.env.GRAPHQL_URL)
          : undefined,
        /*'process.env.GRAPHQL_SUB': process.env.GRAPHQL_SUB
      ? JSON.stringify(process.env.GRAPHQL_SUB)
      : undefined,*/
        'process.env.URL': process.env.URL
          ? JSON.stringify(process.env.URL)
          : undefined,
        'process.env.FILESTACK_KEY': process.env.FILESTACK_KEY
          ? JSON.stringify(process.env.FILESTACK_KEY)
          : undefined,
      })
    );
  }

  // inline-source-map for web-dev
  config.devtool = 'source-map';

  // inline-source-map for web-dev
  if (isProd && isWeb && !isElectron) {
    config.output.filename = '[name].[contenthash].js';
  } else {
    config.output.filename = '[name].js';
  }

  // target && node settings
  if (isNode) {
    config.target = 'node';
    config.watch = isDev;
    config.node = {
      __dirname: false,
      __filename: false,
    };
    config.output.libraryTarget = 'commonjs2';
  } else if (isElectron) {
    config.target = 'electron-main';
    config.node = {
      __dirname: false,
      __filename: false,
    };
    config.output.libraryTarget = 'commonjs2';
  } else {
    config.target = 'web';
    config.node = {
      __dirname: true,
      __filename: true,
    };
    config.output.libraryTarget = 'var';
  }

  if (isDev && isWeb) {
    config.output.publicPath = devUrl.href;
  } else {
    config.output.publicPath = '/';
  }

  // webpack plugins
  if (isWeb && isProd) {
    config.plugins.push(new webpack.optimize.OccurrenceOrderPlugin());
    // config.plugins.push(new webpack.optimize.DedupePlugin());
    if (isElectron) {
      config.plugins.push(new GenerateJsonPlugin('package.json', {}));
    }
    config.plugins.push(
      new webpack.LoaderOptionsPlugin({
        minimize: true,
        debug: false,
      })
    );
    config.plugins.push(
      new webpack.optimize.UglifyJsPlugin({
        compress: {
          screw_ie8: true,
          warnings: false,
        },
        mangle: {
          screw_ie8: true,
        },
        output: {
          comments: false,
          screw_ie8: true,
        },
        sourceMap: false,
      })
    );
  }
  if (isNode) {
    if (isDev) {
      config.plugins.push(new StartServerPlugin('main.js'));
      /*config.plugins.push(
        new ReloadServerPlugin({
          // Defaults to process.cwd() + "/server.js"
          script: path.resolve(__dirname, 'node', 'index.js'),
        })
      );*/
    }
    config.plugins.push(
      new webpack.BannerPlugin({
        banner: 'require("source-map-support").install();',
        raw: true,
        entryOnly: true,
      })
    );
  } else {
    config.plugins.push(
      new AssetsPlugin({
        filename: 'assets.json',
        path: path.resolve(process.cwd(), folder, target),
      })
    );
    if (isProd && !isServerless) {
      config.plugins.push(
        new HtmlWebpackPlugin({
          filename: 'offline.html',
          template: path.resolve(__dirname, 'templates', 'default.js'),
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
        })
      );
      config.plugins.push(
        new OfflinePlugin({
          responseStrategy: 'network-first',
          externals: [
            'https://cdn.polyfill.io/v2/polyfill.min.js?callback=POLY',
          ],
          // autoUpdate: 1000 * 60 * 5,
          caches: 'all',
          ServiceWorker: {
            events: true,
            navigateFallbackURL: '/offline.html',
          },
          AppCache: false,
        })
      );
      config.plugins.push(
        new VisualizerPlugin({
          filename: './visualizer.html',
        })
      );
    } else if (isServerless) {
      config.plugins.push(
        new HtmlWebpackPlugin({
          filename: 'index.html',
          template: path.resolve(
            __dirname,
            'templates',
            isElectron ? 'electron.js' : 'serverless.js'
          ),
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
        })
      );
    }
  }

  // Hot module replacement on dev
  if (isDev) {
    config.plugins.push(new webpack.HotModuleReplacementPlugin());
  }

  // LimitChunkCount on all but production-web
  if (isDev || isNode || isElectron) {
    config.plugins.push(
      new webpack.optimize.LimitChunkCountPlugin({ maxChunks: 1 })
    );
    config.output.filename = '[name].js';
  } else {
    config.output.filename = '[name].[chunkhash].js';
    config.output.chunkFilename = '[name].[chunkhash].js';
  }

  // externals
  if (isNode) {
    config.externals = allPackages
      .map(x => path.resolve(topFolder, x, 'node_modules'))
      .concat([path.resolve(appRoot, 'node_modules')])
      .map(modulesDir =>
        nodeExternals({
          modulesDir,
          whitelist: [
            v => v.indexOf('webpack/hot/poll') === 0,
            'source-map-support/register',
            v => v.indexOf('olymp-') === 0,
            // v => v === 'antd' || v.indexOf('antd/') === 0,
            /\.(eot|woff|woff2|ttf|otf)$/,
            /\.(svg|png|jpg|jpeg|gif|ico)$/,
            /\.(mp4|mp3|ogg|swf|webp)$/,
            /\.(css|scss|sass|sss|less)$/,
          ],
        })
      );
  }

  if (isWeb && isDev) {
    config.entry.main = [
      'react-hot-loader/patch',
      `webpack-dev-server/client?${config.output.publicPath}`,
      'webpack/hot/only-dev-server',
      require.resolve(path.resolve(__dirname, target)),
    ];
  } else if (isNode && isDev) {
    config.entry.main = [
      'webpack/hot/poll?1000',
      require.resolve(path.resolve(__dirname, target)),
    ];
  } else if (isElectron) {
    config.entry.main = [
      require.resolve(path.resolve(__dirname, 'web', 'index.js')),
    ];
    config.entry.app = [
      require.resolve(path.resolve(__dirname, 'electron', 'main.js')),
    ];
  } else {
    config.entry.main = [
      require.resolve(path.resolve(__dirname, target, 'index.js')),
    ];
  }

  const options = {
    target,
    folder,
    isProd,
    isWeb,
    isElectron,
    isNode,
    isServerless,
    isSSR,
    appRoot,
    nodeModules,
    isLinked,
    ...rest,
  };
  return plugins.reduce((store, plugin) => {
    const req = require(path.resolve(
      pluginsFolder,
      isLinked ? `webpack-${plugin}` : `olymp-webpack-${plugin}`
    ));
    return req(config, options) || config;
  }, config);
};
