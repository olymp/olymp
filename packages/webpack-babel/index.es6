const { resolve } = require('path');
// const BabiliPlugin = require('babili-webpack-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
// const LodashModuleReplacementPlugin = require('lodash-webpack-plugin');

module.exports = (config, options) => {
  const { isProd, isWeb, isDev, isNode, appRoot, target, folder } = options;

  if (isProd && isWeb) {
    // config.plugins.push(new LodashModuleReplacementPlugin()),
    config.plugins.push(
      new UglifyJSPlugin({
        // sourceMap: true,
        parallel: {
          cache: true,
          workers: 2,
        },
        uglifyOptions: {
          mangle: true,
          /* parse: {
            // ecma: 8,
            // html5_comments: false,
          }, */
          compress: {
            unused: true,
            drop_debugger: true,
            dead_code: true,
            drop_console: true,
            // ecma: 8,
          },
          output: {
            comments: false,
            beautify: false,
            // ecma: 8,
          },
        },
      }),
    );
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
      // 'babel-plugin-fela',
      ['import', { libraryName: 'antd', style: true }],
    ],
  };
  babelOptions.presets.push([
    'env',
    {
      modules: false,
      loose: true,
      targets: { node: 'current', browsers: ['last 2 versions'] },
      es2015: {
        modules: false,
        loose: true,
      },
    },
  ]);
  if (!isNode && isDev) {
    babelOptions.plugins.push('react-hot-loader/babel');
  } else if (!isNode && isProd) {
    babelOptions.plugins.push('lodash');
    babelOptions.plugins.push([
      'transform-imports',
      {
        antd: {
          transform: 'antd/lib/${member}',
          kebabCase: true,
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
        'olymp-cloudinary': {
          transform: 'olymp-cloudinary/${member}',
          kebabCase: true,
          preventFullImport: true,
        },
        'olymp-slate': {
          transform: 'olymp-slate/${member}',
          kebabCase: true,
          preventFullImport: true,
        },
        'olymp-auth': {
          transform: 'olymp-auth/${member}',
          kebabCase: true,
          preventFullImport: true,
        },
        'olymp-pages': {
          transform: 'olymp-pages/${member}',
          kebabCase: true,
          preventFullImport: true,
        },
        'olymp-collection': {
          transform: 'olymp-collection/${member}',
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
