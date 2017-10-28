const { resolve } = require('path');
const ExtractTextPlugin = require('extract-css-chunks-webpack-plugin');

const nodeModules = resolve(__dirname, 'node_modules');

module.exports = (config, options) => {
  const {
    isProd,
    isWeb,
    isNode,
    appRoot,
    isLinked,
    modifyVars,
    folder,
    isDev,
    target,
  } = options;

  if (isWeb && isProd) {
    config.plugins.push(
      new ExtractTextPlugin({
        filename: isProd ? '[name].[hash].css' : '[name].css',
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
          options: { insertAt: 'top', hmr: isDev },
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
  } else if (isNode) {
    config.module.rules.push({
      test: /\.(less|css)$/,
      loader: 'ignore-loader',
    });
  }

  if (isLinked) {
    config.resolveLoader.modules.push(nodeModules);
  }
  return config;
};
