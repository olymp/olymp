import fs from 'fs';
import ExtractTextPlugin from 'extract-text-webpack-plugin';
import webpack from 'webpack';
import { resolve } from 'path';

export default (config, { isProd, isWeb, isElectron, isNode, appRoot }) => {
  if (isWeb && isProd) {
    config.plugins.push(new webpack.optimize.OccurrenceOrderPlugin());
    // config.plugins.push(new webpack.optimize.DedupePlugin());
    config.plugins.push(
      new ExtractTextPlugin({
        filename: isElectron ? '[name].css' : '[name].[contenthash].css',
        allChunks: true,
      })
    );
  } else if (isNode) {
    config.plugins.push(
      new webpack.NormalModuleReplacementPlugin(/\.css$/, 'node-noop')
    );
  }

  if (isProd) {
    config.module.rules.push({
      test: /\.css$/,
      loader: ExtractTextPlugin.extract({
        use: [
          {
            loader: 'css-loader',
            options: { modules: false },
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
        id: 'css',
        threads: 4,
        loaders: [
          {
            path: 'style-loader',
            query: JSON.stringify({ insertAt: 'top' }),
          },
          {
            path: 'css-loader',
            query: JSON.stringify({ modules: false, sourceMap: true }),
          },
        ],
      })
    );
    config.module.rules.push({
      test: /\.css$/,
      loaders: ['happypack/loader?id=css'],
    });
  }
  return config;
};
