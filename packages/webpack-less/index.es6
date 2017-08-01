const { existsSync } = require('fs');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const { optimize, NormalModuleReplacementPlugin } = require('webpack');
const { resolve } = require('path');

const { stringify } = JSON;

const nodeModules = resolve(__dirname, 'node_modules');

module.exports = (config, options) => {
  const {
    isProd,
    isWeb,
    isElectron,
    isNode,
    appRoot,
    isLinked,
    modifyVars,
    folder,
    target,
  } = options;

  if (isWeb && isProd) {
    // config.plugins.push(new webpack.optimize.DedupePlugin());
    config.plugins.push(
      new ExtractTextPlugin({
        filename: isElectron ? '[name].css' : '[name].[contenthash].css',
        allChunks: true,
      }),
    );
  } else if (isNode) {
    config.plugins.push(new NormalModuleReplacementPlugin(/\.(less|css)$/, 'node-noop'));
  }

  if (isProd) {
    config.module.rules.push({
      test: /\.(less|css)$/,
      loader: ExtractTextPlugin.extract({
        use: [
          {
            loader: 'cache-loader',
            options: {
              cacheDirectory: resolve(appRoot, folder, 'cache', `${target}-less`),
            },
          },
          {
            loader: 'css-loader',
            options: { modules: false },
          },
          {
            loader: 'less-loader',
            options: { modifyVars },
          },
        ],
        fallback: 'style-loader',
      }),
    });
  } else {
    config.module.rules.push({
      test: /\.(less|css)$/,
      use: [
        {
          loader: 'cache-loader',
          options: {
            cacheDirectory: resolve(appRoot, folder, 'cache', `${target}-less`),
          },
        },
        {
          loader: 'style-loader',
          options: { insertAt: 'top' },
        },
        {
          loader: 'css-loader',
          options: { modules: false, sourceMap: true },
        },
        {
          loader: 'less-loader',
          options: { modifyVars, sourceMap: true },
        },
      ],
    });
  }

  if (isLinked) {
    config.resolveLoader.modules.push(nodeModules);
  }
  return config;
};
