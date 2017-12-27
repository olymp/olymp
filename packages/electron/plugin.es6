const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const GenerateJsonPlugin = require('generate-json-webpack-plugin');

module.exports = (config, {
  isElectron,
  isDev,
  isElectronMain,
  isElectronRenderer,
  appRoot,
}) => {
  // LimitChunkCount on all but production-web
  if (isElectron) {
    config.plugins.push(
      new webpack.optimize.LimitChunkCountPlugin({ maxChunks: 1 }),
    );
    // webpack plugins
    if (isElectronMain) {
      config.plugins.push(
        new GenerateJsonPlugin(
          'package.json',
          require('./package-json')(),
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
    } else if (isElectronRenderer) {
      config.plugins.push(
        new HtmlWebpackPlugin({
          alwaysWriteToDisk: true,
          filename: 'index.html',
          template: path.resolve(process.cwd(), 'node_modules', 'olymp-render', 'templates', 'electron.js'),
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

  return config;
};
