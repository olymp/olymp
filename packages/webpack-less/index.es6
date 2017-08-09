const ExtractTextPlugin = require('extract-text-webpack-plugin');
const { resolve } = require('path');

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
    config.plugins.push(
      new ExtractTextPlugin({
        filename: isElectron ? '[name].css' : '[name].[contenthash].css',
        allChunks: true,
      }),
    );
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
  } else if (isNode) {
    config.module.rules.push({
      test: /\.(less|css)$/,
      loader: 'ignore-loader',
    });
  } else if (isWeb) {
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
