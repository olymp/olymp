const webpack = require('webpack');
const path = require('path');
const fs = require('fs');
const AssetsPlugin = require('assets-webpack-plugin');
const ProgressBarPlugin = require('progress-bar-webpack-plugin');
const nodeExternals = require('webpack-node-externals');
const StartServerPlugin = require('start-server-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const OfflinePlugin = require('offline-plugin');
const VisualizerPlugin = require('webpack-visualizer-plugin');
const HappyPack = require('happypack');
const happyThreadPool = HappyPack.ThreadPool({ size: 5 });

let theme = require('../default-theme')();
if (fs.existsSync(path.resolve(process.cwd(), 'theme.js'))) {
  theme = Object.assign(
    {},
    theme,
    require(path.resolve(process.cwd(), 'theme.js'))()
  );
}
const appRoot = process.cwd();
const olympRoot = path.resolve(__dirname, '..');
process.noDeprecation = true;

module.exports = ({ mode, target, port, devPort, ssr }) => {
  const isSSR = ssr !== false;
  if (!isSSR) console.log('SSR OFF');
  const isDev = mode !== 'production';
  const isProd = mode === 'production';
  const isWeb = target !== 'node';
  const isElectron = target === 'electron';
  const isNode = target === 'node';
  const config = {
    resolve: {
      extensions: ['.js', '.json'],
      modules: [
        path.resolve(olympRoot, 'node_modules'),
        path.resolve(appRoot, 'node_modules'),
      ],
      alias: {
        react: path.resolve(appRoot, 'node_modules', 'react'),
        'react-dom': path.resolve(appRoot, 'node_modules', 'react-dom'),
        'react-router': path.resolve(appRoot, 'node_modules', 'react-router'),
        moment: path.resolve(appRoot, 'node_modules', 'moment'),
        lodash: path.resolve(appRoot, 'node_modules', 'lodash'),
        olymp: olympRoot,
        'olymp-icons': path.resolve(olympRoot, 'src', 'icons'),
        '@root': appRoot,
        '@app':
          isNode && !isSSR
            ? path.resolve(__dirname, 'noop')
            : path.resolve(appRoot, 'app'),
      },
    },
    resolveLoader: {
      modules: [
        path.resolve(olympRoot, 'node_modules'),
        path.resolve(appRoot, 'node_modules'),
      ],
    },
    plugins: [
      new webpack.DefinePlugin({
        'process.env.SSR': JSON.stringify(isSSR),
        'process.env.NODE_ENV': JSON.stringify(mode),
        'process.env.DEV_PORT': JSON.stringify(devPort),
        'process.env.GRAPHQL_URL': process.env.GRAPHQL_URL
          ? JSON.stringify(process.env.GRAPHQL_URL)
          : undefined,
        'process.env.GA_TRACKING_ID':
          JSON.stringify(process.env.GA_TRACKING_ID) || 0,
      }),
      new webpack.ContextReplacementPlugin(/moment[\/\\]locale$/, /de/),
      new webpack.NamedModulesPlugin(),
      new ProgressBarPlugin(),
      new webpack.NoEmitOnErrorsPlugin(),
    ],
    module: {
      rules: [
        {
          test: /\.html$/,
          loader: 'file-loader?name=[name].[ext]',
        },
        {
          test: /\.(jpg|jpeg|png|gif|eot|ttf|woff|woff2)$/,
          loader: 'url-loader',
          options: {
            limit: 20000,
          },
        },
        {
          test: /\.(txt|md)$/,
          loader: 'raw-loader',
        },
        {
          test: /\.json$/,
          loader: 'json-loader',
        },
      ],
    },
    output: {
      path: path.resolve(appRoot, 'build', target),
    },
    entry: {
      main: [],
    },
  };

  const babel = {
    test: /\.(js|jsx)$/,
    loader: 'babel-loader',
    include: [
      // path.resolve(appRoot, 'server'),
      // path.resolve(olympRoot, 'graphql'),
      path.resolve(appRoot, 'app'),
      path.resolve(olympRoot, 'icons'),
      path.resolve(olympRoot, 'src'),
      path.resolve(__dirname),
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

  // inline-source-map for web-dev
  if (isDev && isWeb) {
    config.devtool = 'inline-source-map';
  } else {
    config.devtool = 'source-map';
  }

  // inline-source-map for web-dev
  if (isProd && isWeb) {
    config.output.filename = '[name].[contenthash].js';
  } else {
    config.output.filename = '[name].js';
  }

  // target && node settings
  if (isNode) {
    config.target = 'node';
    config.watch = isDev;
    config.node = {
      __dirname: false,
      __filename: false,
    };
    config.output.libraryTarget = 'commonjs2';
  } else {
    config.target = 'web';
    config.node = {
      __dirname: true,
      __filename: true,
    };
    config.output.libraryTarget = 'var';
  }

  if (isDev && isWeb) {
    config.output.publicPath = `http://localhost:${devPort}/`;
  } else {
    config.output.publicPath = '/';
  }

  // babel-preset-env on node
  if (isNode) {
    babel.options.presets.push(['env', { modules: false, loose: true }]);
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
        'olymp-icons': {
          transform: 'olymp-icons/lib/${member}',
          kebabCase: true,
          preventFullImport: true,
        },
      },
    ]);
    // babel.options.presets.push(['react-optimize']);
  }

  // webpack plugins
  if (isWeb && isProd) {
    config.plugins.push(new webpack.optimize.OccurrenceOrderPlugin());
    // config.plugins.push(new webpack.optimize.DedupePlugin());
    config.plugins.push(
      new ExtractTextPlugin({
        filename: '[name].[contenthash].css',
        allChunks: true,
      })
    );
    config.plugins.push(
      new webpack.LoaderOptionsPlugin({
        minimize: true,
        debug: false,
      })
    );
    config.plugins.push(
      new webpack.optimize.UglifyJsPlugin({
        compress: {
          screw_ie8: true,
          warnings: false,
        },
        mangle: {
          screw_ie8: true,
        },
        output: {
          comments: false,
          screw_ie8: true,
        },
        sourceMap: false,
      })
    );
  }
  if (isNode) {
    if (isDev) {
      config.plugins.push(new StartServerPlugin('main.js'));
    }
    config.plugins.push(
      new webpack.BannerPlugin({
        banner: 'require("source-map-support").install();',
        raw: true,
        entryOnly: true,
      })
    );
    config.plugins.push(
      new webpack.NormalModuleReplacementPlugin(
        /\.(less|css|scss)$/,
        'node-noop'
      )
    );
  } else {
    config.plugins.push(
      new AssetsPlugin({
        filename: 'assets.json',
        path: path.resolve(process.cwd(), 'build', target),
      })
    );
    if (isProd && !isElectron) {
      config.plugins.push(
        new HtmlWebpackPlugin({
          filename: 'offline.html',
          template: path.resolve(__dirname, target, 'template.js'),
          inject: false,
          /*minify: {
          removeComments: true,
          collapseWhitespace: true,
          removeRedundantAttributes: true,
          useShortDoctype: true,
          removeEmptyAttributes: true,
          removeStyleLinkTypeAttributes: true,
          keepClosingSlash: true,
          minifyJS: true,
          minifyCSS: true,
          minifyURLs: true,
        },*/
        })
      );
      config.plugins.push(
        new OfflinePlugin({
          responseStrategy: 'network-first',
          externals: [
            'https://cdn.polyfill.io/v2/polyfill.min.js?callback=POLY',
          ],
          caches: 'all',
          ServiceWorker: {
            events: true,
            navigateFallbackURL: '/offline.html',
          },
          AppCache: false,
        })
      );
      config.plugins.push(
        new VisualizerPlugin({
          filename: './visualizer.html',
        })
      );
    }
    if (isProd && isElectron) {
      config.plugins.push(
        new HtmlWebpackPlugin({
          filename: 'index.html',
          template: path.resolve(__dirname, target, 'template.js'),
          inject: false,
          /*minify: {
          removeComments: true,
          collapseWhitespace: true,
          removeRedundantAttributes: true,
          useShortDoctype: true,
          removeEmptyAttributes: true,
          removeStyleLinkTypeAttributes: true,
          keepClosingSlash: true,
          minifyJS: true,
          minifyCSS: true,
          minifyURLs: true,
        },*/
        })
      );
    }
  }

  // Hot module replacement on dev
  if (isDev) {
    config.plugins.push(new webpack.HotModuleReplacementPlugin());
  }

  // LimitChunkCount on all but production-web
  if (isDev || isNode) {
    config.plugins.push(
      new webpack.optimize.LimitChunkCountPlugin({ maxChunks: 1 })
    );
    config.output.filename = '[name].js';
  } else {
    config.output.filename = '[name].[chunkhash].js';
    config.output.chunkFilename = '[name].[chunkhash].js';
  }

  // externals
  if (isNode) {
    config.externals = [
      path.resolve(__dirname, '..', 'node_modules'),
      path.resolve(process.cwd(), 'node_modules'),
    ].map(modulesDir =>
      nodeExternals({
        modulesDir,
        whitelist: [
          'webpack/hot/poll?1000',
          'source-map-support/register',
          v =>
            v === 'olymp' ||
            v.indexOf('olymp/') === 0 ||
            v.indexOf('olymp-') === 0,
          v => v === 'antd' || v.indexOf('antd/') === 0,
          /\.(eot|woff|woff2|ttf|otf)$/,
          /\.(svg|png|jpg|jpeg|gif|ico)$/,
          /\.(mp4|mp3|ogg|swf|webp)$/,
          /\.(css|scss|sass|sss|less)$/,
        ],
      })
    );
  }

  if (isWeb && isDev) {
    config.entry.main = [
      'react-hot-loader/patch',
      `webpack-dev-server/client?http://localhost:${devPort}`,
      'webpack/hot/only-dev-server',
      require.resolve(path.resolve(__dirname, target)),
    ];
  } else if (isNode && isDev) {
    config.entry.main = [
      'webpack/hot/poll?1000',
      require.resolve(path.resolve(__dirname, target)),
    ];
  } else {
    config.entry.main = [require.resolve(path.resolve(__dirname, target))];
  }

  // Less loader
  if (isWeb && isProd) {
    config.module.rules.push({
      test: /\.less$/,
      loader: ExtractTextPlugin.extract({
        use: [
          {
            loader: 'css-loader',
            options: { modules: false },
          },
          {
            loader: 'less-loader',
            options: {
              modifyVars: theme, // JSON.stringify(theme)
            },
          },
        ],
        fallback: 'style-loader',
      }),
    });
    config.module.rules.push(babel);
  } else if (isWeb && isDev) {
    config.plugins.push(
      new HappyPack({
        id: 'less',
        threads: 4,
        tempDir: path.resolve(appRoot, 'build', target, 'happypack'),
        loaders: [
          {
            path: 'style-loader',
            query: JSON.stringify({ insertAt: 'top' }),
          },
          {
            path: 'css-loader',
            query: JSON.stringify({ modules: false, sourceMap: true }),
          },
          {
            loader: 'less-loader',
            query: JSON.stringify({ modifyVars: theme, sourceMap: true }),
          },
        ],
      })
    );
    config.module.rules.push({
      test: /\.less$/,
      loaders: ['happypack/loader?id=less'],
    });
  } /*else if (isNode) {
    config.module.rules.push({
      test: /\.less$/,
      loader: ExtractTextPlugin.extract({
        use: [{
          loader: 'css-loader',
          options: { modules: false }
        }, {
          loader: 'less-loader', options: {
            modifyVars: theme, // JSON.stringify(theme)
          }
        }],
        fallback: 'style-loader'
      }),
    });
    config.module.rules.push(babel);
  }*/

  if (isDev) {
    config.plugins.push(
      new HappyPack({
        id: 'babel',
        threads: 4,
        tempDir: path.resolve(appRoot, 'build', target, 'happypack'),
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
    /*config.module.rules.push({
      test: /\.svg$/,
      loaders: [
        'happypack/loader?id=babel', {
        loader: 'react-svg-loader',
        query: {
          jsx: true
        },
      }]
    });*/
  } else {
    config.module.rules.push(babel);
    /*config.module.rules.push({
      test: /\.svg$/,
      loaders: [{
        loader: babel.loader,
        query: babel.options,
      }, {
        loader: 'react-svg-loader',
        query: {
          jsx: true
        },
      }]
    });*/
  }

  return config;
};
