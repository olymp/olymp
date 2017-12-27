const { resolve } = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const OfflinePlugin = require(resolve(process.cwd(), 'node_modules', 'offline-plugin'));
const path = require('path');

module.exports = (config, { isWeb, isProd, isServerless, appRoot, folder, target}) => {
  if (isWeb) {
    if (isProd) {
      config.plugins.push(new HtmlWebpackPlugin({
        filename: 'offline.html',
        template: path.resolve(process.cwd(), 'node_modules', 'olymp-render', 'templates', 'serverless.js'),
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
      }));
      config.plugins.push(new OfflinePlugin({
        responseStrategy: 'network-first',
        // externals: ['https://cdn.polyfill.io/v2/polyfill.min.js?callback=POLY'],
        autoUpdate: 1000 * 60 * 1,
        caches: {
          main: ['app.*.js', 'offline.html'],
          additional: [':externals:'],
          optional: ['*.js']
        },
        updateStrategy: 'all',
        ServiceWorker: {
          events: true,
          navigateFallbackURL: '/offline.html',
        },
        AppCache: false,
      }));
    } else if (isServerless) {
      config.plugins.push(
        new HtmlWebpackPlugin({
          filename: 'index.html',
          template: path.resolve(process.cwd(), 'node_modules', 'olymp-render', 'templates', 'serverless.js'),
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
    config.plugins.push(
      new CopyWebpackPlugin([
        {
          context: path.resolve(appRoot, 'node_modules', 'olymp', 'public'),
          from: '**/*',
          to: path.resolve(appRoot, folder, target.split('-')[0]),
        },
        {
          context: path.resolve(appRoot, 'public'),
          from: '**/*',
          to: path.resolve(appRoot, folder, target.split('-')[0]),
        },
      ]),
    );
  }
  return config;
};
