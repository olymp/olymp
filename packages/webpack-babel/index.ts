const { existsSync } = require('fs');
const { resolve } = require('path');
const { stringify } = JSON;

const nodeModules = resolve(__dirname, 'node_modules');

module.exports = (
  config,
  { isProd, isWeb, isElectron, isDev, isNode, appRoot, isLinked, modifyVars }
) => {
  const babel = {
    test: /\.(js|jsx)$/,
    loader: 'babel-loader',
    include: [
      // path.resolve(appRoot, 'server'),
      // path.resolve(olympRoot, 'graphql'),
      path.resolve(appRoot, 'app'),
      path.resolve(appRoot, 'server'),
    ],
    options: {
      cacheDirectory: false,
      presets: ['react'],
      plugins: [
        'syntax-dynamic-import',
        'transform-object-rest-spread',
        // 'transform-es2015-destructuring',
        'transform-decorators-legacy',
        'transform-class-properties',
        ['import', { libraryName: 'antd', style: true }],
      ],
    },
  };
  if (isNode) {
    babel.options.presets.push([
      'env',
      { modules: false, loose: true, targets: { node: 'current' } },
    ]);
  } else if (isDev) {
    babel.options.presets.push(['latest', { modules: false, loose: true }]);
    babel.options.plugins.push('react-hot-loader/babel');
  } else {
    babel.options.presets.push(['latest', { modules: false, loose: true }]);
    babel.options.plugins.push([
      'transform-imports',
      {
        antd: {
          transform: 'antd/lib/${member}',
          kebabCase: true,
          preventFullImport: true,
        },
        lodash: {
          transform: 'lodash/${member}',
          preventFullImport: true,
        },
        'date-fns': {
          transform: 'date-fns/${member}',
          preventFullImport: true,
          snakeCase: true,
        },
        'olymp-icons': {
          transform: 'olymp-icons/fa5/lib/${member}',
          kebabCase: true,
          preventFullImport: true,
        },
      },
    ]);
    // babel.options.presets.push(['react-optimize']);
  }

  if (isDev) {
    const HappyPack = require('happypack');
    config.plugins.push(
      new HappyPack({
        id: 'babel',
        threads: 4,
        loaders: [
          {
            path: babel.loader,
            query: JSON.stringify(babel.options),
          },
        ],
      })
    );
    config.module.rules.push({
      test: babel.test,
      include: babel.include,
      loaders: ['happypack/loader?id=babel'],
    });
  } else {
    config.module.rules.push(babel);
  }

  if (isLinked) {
    config.resolveLoader.modules.push(nodeModules);
  }
  return config;
};
