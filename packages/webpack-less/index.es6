const { resolve } = require('path');

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
    ExtractCssChunks,
  } = options;

  if (isWeb && isProd) {
    config.module.rules.push({
      test: /\.(less|css)$/,
      loader: ExtractCssChunks.extract({
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
          options: { insertAt: 'before', hmr: isDev },
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
