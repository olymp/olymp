const { resolve } = require('path');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const babel = require('./babel').default;

module.exports = (config, options) => {
  const {
    isProd,
    isWeb,
    isDev,
    isNode,
    appRoot,
    target,
    folder,
    transform = {},
  } = options;

  if (isProd && isWeb) {
    // config.plugins.push(new LodashModuleReplacementPlugin()),
    config.plugins.push(
      /* new ClosureCompilerPlugin({
        compiler: {
          language_in: 'ECMASCRIPT6',
          language_out: 'ECMASCRIPT5',
          compilation_level: 'ADVANCED',
          jscomp_off: 'checkVars',
        },
        concurrency: 3,
      }), */
      new UglifyJSPlugin({
        // sourceMap: true,
        cache: true,
        parallel: 4,
        uglifyOptions: {
          // warnings: true,
          // mangle: true,
          /* parse: {
            // ecma: 8,
            // html5_comments: false,
          }, */
          compress: {
            unused: true,
            drop_debugger: true,
            dead_code: true,
            // drop_console: true,
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

  const babelOptions = babel({
    transform,
    isDev,
    isNode,
    isProd,
  })

  if (isDev) {
    config.module.rules.push({
      test: /\.js$/,
      use: [
        /* {
          loader: 'cache-loader',
          options: {
            cacheDirectory: resolve(
              appRoot,
              folder,
              'cache',
              `${target}-babel`,
            ),
          },
        }, */
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
        /* {
          loader: 'cache-loader',
          options: {
            cacheDirectory: resolve(
              appRoot,
              folder,
              'cache',
              `${target}-babel`,
            ),
          },
        }, */
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
