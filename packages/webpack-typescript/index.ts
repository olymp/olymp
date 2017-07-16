const { resolve } = require('path');
const { CheckerPlugin } = require('awesome-typescript-loader');

module.exports = (
  config,
  { isProd, isWeb, isElectron, isNode, appRoot, isLinked, modifyVars }
) => {
  if (isProd) {
    config.module.rules.push({
      test: /\.tsx?$/,
      include: [resolve(appRoot, 'app'), resolve(appRoot, 'server')],
      use: [
        {
          loader: 'awesome-typescript-loader',
          options: {
            silent: true,
            transpileOnly: true,
            configFileName: resolve(__dirname, 'tsconfig.json'),
          },
        },
      ],
    });
  } else {
    config.module.rules.push({
      test: /\.tsx?$/,
      include: [resolve(appRoot, 'app'), resolve(appRoot, 'server')],
      use: [
        {
          loader: 'react-hot-loader/webpack',
        },
        {
          loader: 'awesome-typescript-loader',
          options: {
            silent: true,
            transpileOnly: true,
            configFileName: resolve(__dirname, 'tsconfig.json'),
          },
        },
      ],
    });
  }

  if (isLinked) {
    config.resolveLoader.modules.push(nodeModules);
  }
  return config;
};
