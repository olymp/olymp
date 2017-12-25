const webpack = require('webpack');
const path = require('path');
const AssetsPlugin = require('assets-webpack-plugin');
const ProgressBarPlugin = require('progress-bar-webpack-plugin');
const StartServerPlugin = require('start-server-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const GenerateJsonPlugin = require('generate-json-webpack-plugin');
const HtmlWebpackHarddiskPlugin = require('html-webpack-harddisk-plugin');

module.exports = (config, {
  mode,
  isSSR,
  isNetlify,
  isServerless,
  isWeb,
  isNode,
  isElectron,
  isDev,
  isServer,
  port,
  isElectronMain,
  isElectronRenderer,
  isProd,
  isLinked,
  appRoot,
  folder,
  target,
  sharedEnv = {},
}) => {
  config.plugins = [
    new webpack.LoaderOptionsPlugin({
      debug: isDev,
    }),
    new webpack.DefinePlugin({
      'process.env.BUILD_ON': `"${new Date()}"`,
      'process.env.NODE_ENV': `"${mode}"`,
      'process.env.IS_SSR': isSSR,
      'process.env.IS_SERVERLESS': !isNetlify && isServerless,
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
  ];

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
  }

  return config;
};
