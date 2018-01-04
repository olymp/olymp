const webpack = require('webpack');
const path = require('path');
const AssetsPlugin = require('assets-webpack-plugin');
const ProgressBarPlugin = require('progress-bar-webpack-plugin');
const StartServerPlugin = require('start-server-webpack-plugin');
const HtmlWebpackHarddiskPlugin = require('html-webpack-harddisk-plugin');

module.exports = (config, {
  isSSR,
  isNetlify,
  isServerless,
  isWeb,
  isNode,
  isElectron,
  isDev,
  isServer,
  port,
  isProd,
  isLinked,
  folder,
  target,
  sharedEnv = {},
}) => {
  const base = {};
  if (port) {
    base['process.env.PORT'] = `${port}`;
  }
  console.log(base);
  config.plugins = [
    new webpack.LoaderOptionsPlugin({
      debug: isDev,
    }),
    new webpack.DefinePlugin({
      ...base,
      'process.env.BUILD_ON': `"${new Date()}"`,
      'process.env.NODE_ENV': `"${isProd ? 'production' : 'development'}"`,
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

  if (isNode && !isElectron) {
    config.plugins.push(
      new webpack.BannerPlugin({
        banner: 'require("source-map-support").install();',
        raw: true,
        entryOnly: false,
      }),
    );
    if (isDev) {
      config.plugins.push(
        new StartServerPlugin({
          name: 'app.js',
          // nodeArgs: [`--inspect=${devPort + 1}`], // allow debugging
        }),
      );
    }
  } else if (!isNode) {
    config.plugins.push(new HtmlWebpackHarddiskPlugin());
  }

  // Hot module replacement on dev
  if (isDev) {
    config.plugins.push(new webpack.HotModuleReplacementPlugin());
  }

  // LimitChunkCount on all but production-web
  if (isNode) {
    config.plugins.push(
      new webpack.optimize.LimitChunkCountPlugin({ maxChunks: 1 }),
    );
  } else if (isWeb) {
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
