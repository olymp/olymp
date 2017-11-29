const webpack = require('webpack');
const path = require('path');
const fs = require('fs');
const AssetsPlugin = require('assets-webpack-plugin');
const ProgressBarPlugin = require('progress-bar-webpack-plugin');
const nodeExternals = require('webpack-node-externals');
const StartServerPlugin = require('start-server-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const GenerateJsonPlugin = require('generate-json-webpack-plugin');
const HtmlWebpackHarddiskPlugin = require('html-webpack-harddisk-plugin');

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
  port,
  isSSR,
  isServerless,
  plugins = [],
  sharedEnv = {},
  externals = [],
  alias = {},
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
  isServerless = isServerless === true || isElectron;
  isSSR = !isElectronMain && isSSR !== false && !isServerless;
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
      modules: [
        path.resolve(appRoot, 'node_modules'),
        path.resolve(appRoot, 'app'),
      ],
      alias: {
        '@root': appRoot,
        '@electron':
          isElectron &&
          fs.existsSync(path.resolve(appRoot, 'electron', 'index.js'))
            ? path.resolve(appRoot, 'electron', 'index.js')
            : path.resolve(__dirname, 'noop'),
        '@app':
          isServer && !isSSR
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
        ...alias,
      },
    },
    resolveLoader: {
      modules: [path.resolve(appRoot, 'node_modules')],
    },
    plugins: [
      new webpack.LoaderOptionsPlugin({
        debug: isDev,
      }),
      new webpack.DefinePlugin({
        'process.env.BUILD_ON': `"${new Date()}"`,
        'process.env.NODE_ENV': `"${mode}"`,
        'process.env.IS_SSR': isSSR,
        'process.env.IS_SERVERLESS': isServerless,
        'process.env.IS_WEB': isWeb,
        'process.env.IS_NODE': isNode,
        'process.env.IS_ELECTRON': isElectron,
      }),
      // new PrepackWebpackPlugin({ }),
      // new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
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
          test: /\.(txt|md|pug)$/,
          loader: 'raw-loader',
        },
        {
          test: /\.json$/,
          loader: 'json-loader',
        },
        {
          test: /\.flow$/,
          loader: 'ignore-loader',
        },
      ],
    },
    output: {
      publicPath: '/',
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
        'process.env.AUTH0_CLIENT_ID': process.env.AUTH0_CLIENT_ID
          ? `"${process.env.AUTH0_CLIENT_ID}"`
          : false,
        'process.env.AUTH0_DOMAIN': process.env.AUTH0_DOMAIN
          ? `"${process.env.AUTH0_DOMAIN}"`
          : false,
        'process.env.GOOGLE_MAPS_KEY': process.env.GOOGLE_MAPS_KEY
          ? `"${process.env.GOOGLE_MAPS_KEY}"`
          : false,
        'process.env.GRAPHQL_URL': process.env.GRAPHQL_URL
          ? `"${process.env.GRAPHQL_URL}"`
          : false,
        'process.env.CRASHREPORT_URL': process.env.CRASHREPORT_URL
          ? `"${process.env.CRASHREPORT_URL}"`
          : false,
        ...Object.keys(sharedEnv).reduce((store, key) => {
          if (sharedEnv[key] === true || process.env[key]) {
            store[`process.env.${key}`] = JSON.stringify(process.env[key]);
          } else {
            store[`process.env.${key}`] = JSON.stringify(sharedEnv[key]);
          }
          return store;
        }, {}),
      }),
    );
  } else if (port) {
    config.plugins.push(
      new webpack.DefinePlugin({
        'process.env.PORT': `"${port}"`,
      }),
    );
  }

  // inline-source-map for web-dev
  config.devtool = isProd
    ? 'cheap-module-source-map'
    : 'eval-cheap-module-source-map';

  // inline-source-map for web-dev
  if (isProd && isWeb && !isElectron) {
    config.output.filename = '[name].[contenthash].js';
    // config.resolve.alias.react = 'preact-compat';
    // config.resolve.alias['react-dom'] = 'preact-compat';
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

  // webpack plugins
  if (isElectronMain) {
    config.plugins.push(
      new GenerateJsonPlugin(
        'package.json',
        require('./electron/package-json')(),
      ),
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
  if (isNode && !isElectron) {
    config.plugins.push(
      new webpack.BannerPlugin({
        banner: 'require("source-map-support").install();',
        raw: true,
        entryOnly: false,
      }),
    );
    if (isDev && isServer) {
      config.plugins.push(
        new StartServerPlugin({
          name: 'app.js',
          // nodeArgs: [`--inspect=${devPort + 1}`], // allow debugging
        }),
      );
    }
  } else if (!isNode) {
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
        }, */
        }),
      );
      config.plugins.push(new HtmlWebpackHarddiskPlugin());
    } else if (isWeb) {
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
          }, */
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
  if (isNode || isElectron) {
    config.plugins.push(
      new webpack.optimize.LimitChunkCountPlugin({ maxChunks: 1 }),
    );
    config.output.filename = '[name].js';
  } else {
    config.plugins.push(
      new AssetsPlugin({
        filename: 'assets.json',
        path: path.resolve(process.cwd(), folder, target.split('-')[0]),
      }),
    );
    config.plugins.push(new webpack.optimize.OccurrenceOrderPlugin());
    if (isLinked && isProd) {
      const BundleAnalyzerPlugin = require('webpack-bundle-analyzer')
        .BundleAnalyzerPlugin;
      config.plugins.push(
        new BundleAnalyzerPlugin({
          reportFilename: './_report.html',
          analyzerMode: 'static',
          // generateStatsFile: false,
        }),
      );
    } else if (isProd) {
      config.plugins.push(new webpack.optimize.ModuleConcatenationPlugin());
    }
    // config.plugins.push(new webpack.optimize.LimitChunkCountPlugin({ minChunkSize: 10000 }));
    const filename = isProd ? '[name].[chunkhash].js' : '[name].js';
    config.plugins.push(
      new webpack.optimize.CommonsChunkPlugin({
        name: 'app',
        filename,
        // minChunks: 2,
      }),
    );
    config.output.filename = filename;
    config.output.chunkFilename = filename;
  }

  if (isNode) {
    config.externals = nodeExternals({
      modulesDir: path.resolve(appRoot, 'node_modules'),
      whitelist: [
        '.bin',
        'source-map-support/register',
        // 'babel-polyfill',
        /\.(eot|woff|woff2|ttf|otf)$/,
        /\.(svg|png|jpg|jpeg|gif|ico)$/,
        /\.(mp4|mp3|ogg|swf|webp)$/,
        /\.(css|scss|sass|sss|less)$/,
        v => v.indexOf('webpack/hot/poll') === 0,
        v => v === 'antd' || v.indexOf('antd/') === 0,
        v =>
          v === 'olymp' ||
          v.indexOf('olymp-') === 0 ||
          v.indexOf('olymp/') === 0,
        v =>
          v === 'hashtax' ||
          v.indexOf('hashtax-') === 0 ||
          v.indexOf('hashtax/') === 0,
        ...externals.map(key => v => v === key || v.indexOf(`${key}/`) === 0),
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
      config.entry.app = [
        require.resolve(path.resolve(__dirname, 'web', 'index.js')),
      ];
    }
  } else if (isElectronMain) {
    if (isDev) {
      config.entry.main = [
        'webpack/hot/poll?1000',
        require.resolve(path.resolve(__dirname, 'electron', 'main.js')),
      ];
    } else {
      config.entry.main = [
        require.resolve(path.resolve(__dirname, 'electron', 'main.js')),
      ];
    }
  } else if (isNode) {
    if (isDev) {
      config.entry.app = [
        'webpack/hot/poll?1000',
        require.resolve(path.resolve(__dirname, 'node', 'index.js')),
      ];
    } else {
      config.entry.app = [
        require.resolve(path.resolve(__dirname, 'node', 'index.js')),
      ];
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
