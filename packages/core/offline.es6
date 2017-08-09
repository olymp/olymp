const HtmlWebpackPlugin = require('html-webpack-plugin');
const OfflinePlugin = require('offline-plugin');
const path = require('path');

module.exports = (config) => {
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
    }),
  );
  config.plugins.push(
    new OfflinePlugin({
      responseStrategy: 'network-first',
      // externals: ['https://cdn.polyfill.io/v2/polyfill.min.js?callback=POLY'],
      autoUpdate: 1000 * 60 * 5,
      caches: 'all',
      ServiceWorker: {
        events: true,
        navigateFallbackURL: '/offline.html',
      },
      AppCache: false,
    }),
  );
  return config;
};
