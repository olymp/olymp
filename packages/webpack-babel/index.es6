const { resolve } = require('path');
// const PrepackWebpackPlugin = require('prepack-webpack-plugin').default;

const nodeModules = resolve(__dirname, 'node_modules');

module.exports = (config, options) => {
  const { isProd, isDev, isNode, appRoot, isLinked, target, folder } = options;
  const resolvePlugin = (name, prefix = '') => {
    if (isLinked) {return resolve(__dirname, 'node_modules', `${prefix}${name}`);}
    return name;
  };

  if (isProd) {
    /* config.plugins.push(
      new PrepackWebpackPlugin({
        test: /\.(js|jsx|ts|tsx)$/,
      })
    );*/
  }

  const babelOptions = {
    cacheDirectory: false,
    presets: [resolvePlugin('react', 'babel-preset-')],
    plugins: [
      resolvePlugin('syntax-dynamic-import', 'babel-plugin-'),
      resolvePlugin('transform-object-rest-spread', 'babel-plugin-'),
      // 'transform-es2015-destructuring',
      resolvePlugin('transform-decorators-legacy', 'babel-plugin-'),
      resolvePlugin('transform-class-properties', 'babel-plugin-'),
      [
        resolvePlugin('import', 'babel-plugin-'),
        { libraryName: 'antd', style: true },
      ],
    ],
  };
  if (isNode) {
    babelOptions.presets.push([
      resolvePlugin('env', 'babel-preset-'),
      { modules: false, loose: true, targets: { node: 'current' } },
    ]);
  } else if (isDev) {
    babelOptions.presets.push([
      resolvePlugin('latest', 'babel-preset-'),
      { modules: false, loose: true },
    ]);
    babelOptions.plugins.push(resolvePlugin('react-hot-loader/babel'));
  } else {
    babelOptions.presets.push([
      resolvePlugin('latest', 'babel-preset-'),
      { modules: false, loose: true },
    ]);
    babelOptions.plugins.push([
      resolvePlugin('transform-imports', 'babel-plugin-'),
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

  config.module.rules.push({
    test: /\.js$/,
    use: [
      {
        loader: 'cache-loader',
        options: {
          cacheDirectory: resolve(appRoot, folder, target, 'cache-babel'),
        },
      },
      {
        loader: 'babel-loader',
        options: babelOptions,
      },
    ],
    include: [
      // path.resolve(appRoot, 'server'),
      // path.resolve(olympRoot, 'graphql'),
      resolve(appRoot, 'app'),
      resolve(appRoot, 'server'),
    ],
  });

  if (isLinked) {
    config.resolveLoader.modules.push(nodeModules);
  }
  return config;
};
