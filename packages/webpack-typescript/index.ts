const { existsSync } = require('fs');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const { optimize, NormalModuleReplacementPlugin } = require('webpack');
const { resolve } = require('path');
const { stringify } = JSON;

const nodeModules = resolve(__dirname, 'node_modules');

module.exports = (
  config,
  { isProd, isWeb, isElectron, isNode, appRoot, isLinked, modifyVars }
) => {
  if (isWeb && isProd) {
    config.plugins.push(new optimize.OccurrenceOrderPlugin());
    // config.plugins.push(new webpack.optimize.DedupePlugin());
    config.plugins.push(
      new ExtractTextPlugin({
        filename: isElectron ? '[name].css' : '[name].[contenthash].css',
        allChunks: true,
      })
    );
  } else if (isNode) {
    config.plugins.push(
      new NormalModuleReplacementPlugin(/\.(less|css)$/, 'node-noop')
    );
  }

  if (isProd) {
    config.module.rules.push({
      test: /\.(less|css)$/,
      loader: ExtractTextPlugin.extract({
        use: [
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
    const HappyPack = require('happypack');
    HappyPack.ThreadPool({ size: 5 });

    config.plugins.push(
      new HappyPack({
        id: 'less',
        threads: 4,
        loaders: [
          {
            path: 'style-loader',
            query: stringify({ insertAt: 'top' }),
          },
          {
            path: 'css-loader',
            query: stringify({ modules: false, sourceMap: true }),
          },
          {
            loader: 'less-loader',
            query: stringify({ modifyVars, sourceMap: true }),
          },
        ],
      })
    );
    config.module.rules.push({
      test: /\.(less|css)$/,
      loaders: ['happypack/loader?id=less'],
    });
  }

  if (isLinked) {
    config.resolveLoader.modules.push(nodeModules);
  }
  return config;
};
