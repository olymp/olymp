const { resolve } = require('path');
// const BabiliPlugin = require('babili-webpack-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

// const PrepackWebpackPlugin = require('prepack-webpack-plugin').default;

module.exports = (config, options) => {
  const { isProd, isWeb, isDev, isNode, appRoot, target, folder, minify } = options;

  if (isProd && isWeb && minify !== false) {
    // config.plugins.push(new BabiliPlugin());
    config.plugins.push(
      new UglifyJSPlugin({
        // sourceMap: true,
        parallel: {
          cache: true,
          workers: 2,
        },
        uglifyOptions: { compress: false, mangle: true },
      }),
    );
    /* config.plugins.push(
      new PrepackWebpackPlugin({
        test: /\.(js|jsx|ts|tsx)$/,
      })
    );*/
  }

  const babelOptions = {
    presets: ['react'],
    plugins: [
      'syntax-dynamic-import',
      'transform-object-rest-spread',
      // 'transform-es2015-destructuring',
      'transform-decorators-legacy',
      'transform-class-properties',
      'transform-es2015-classes',
      ['import', { libraryName: 'antd', style: true }],
    ],
  };
  babelOptions.presets.push([
    'env',
    {
      modules: false,
      loose: true,
      targets: { node: 'current' },
      es2015: {
        modules: false,
        loose: true,
      },
    },
  ]);
  if (!isNode && isDev) {
    babelOptions.plugins.push('react-hot-loader/babel');
  } else if (!isNode && isProd) {
    babelOptions.plugins.push([
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
        },
        'olymp-icons': {
          transform: 'olymp-icons/fa5/lib/${member}',
          kebabCase: true,
          preventFullImport: true,
        },
      },
    ]);
    babelOptions.plugins.push('transform-react-constant-elements');
    babelOptions.plugins.push('transform-react-pure-class-to-function');
    // babelOptions.plugins.push('transform-react-inline-elements');
    babelOptions.plugins.push('transform-react-remove-prop-types');
    // babelOptions.presets.push(['react-optimize']);
  }

  if (isDev) {
    config.module.rules.push({
      test: /\.js$/,
      use: [
        {
          loader: 'cache-loader',
          options: {
            cacheDirectory: resolve(appRoot, folder, 'cache', `${target}-babel`),
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
        resolve(appRoot, 'electron'),
        resolve(appRoot, 'server'),
      ],
    });
  } else {
    config.module.rules.push({
      test: /\.js$/,
      use: [
        {
          loader: 'babel-loader',
          options: babelOptions,
        },
      ],
      include: [
        // path.resolve(appRoot, 'server'),
        // path.resolve(olympRoot, 'graphql'),
        resolve(appRoot, 'app'),
        resolve(appRoot, 'electron'),
        resolve(appRoot, 'server'),
      ],
    });
  }

  return config;
};
