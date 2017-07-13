const webpack = require('webpack');
const path = require('path');
const fs = require('fs');
const AssetsPlugin = require('assets-webpack-plugin');
const ProgressBarPlugin = require('progress-bar-webpack-plugin');
const nodeExternals = require('webpack-node-externals');
const StartServerPlugin = require('start-server-webpack-plugin');
const ReloadServerPlugin = require('reload-server-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const OfflinePlugin = require('offline-plugin');
const VisualizerPlugin = require('webpack-visualizer-plugin');
// const PrepackWebpackPlugin = require('prepack-webpack-plugin').default;
const HappyPack = require('happypack');
const GenerateJsonPlugin = require('generate-json-webpack-plugin');

HappyPack.ThreadPool({ size: 5 });

const appRoot = process.cwd();
const olympRoot = path.resolve(__dirname, '..', '..');
process.noDeprecation = true;

const allPackages = fs
  .readdirSync(path.resolve(olympRoot, 'packages'));
const packagesToIgnore = ['graphql', 'collection', 'app', 'utils', 'ui', 'storybook'];
const packagesToTranspile = allPackages.filter(x => packagesToIgnore.indexOf(x) === -1);

module.exports = ({ mode, target, devUrl, devPort, ssr, serverless }) => {
  const isDev = mode !== 'production';
  const isProd = mode === 'production';
  const isWeb = target !== 'node';
  const isElectron = target === 'electron';
  const isNode = target === 'node';
  const isServerless = serverless === true || isElectron;
  const isSSR = ssr !== false && !serverless;
  const folder = isDev ? 'dev' : 'dist';
  const config = {
    resolve: {
      extensions: ['.js', '.json'],
      modules: [
        path.resolve(olympRoot, 'node_modules'),
        path.resolve(appRoot, 'node_modules'),
        path.resolve(appRoot, 'app'),
      ],
      alias: Object.assign(
        {
          'history/createFlexHistory': isServerless ? 'history/createHashHistory' : 'history/createBrowserHistory',
          react: path.resolve(appRoot, 'node_modules', 'react'),
          // 'core-js': path.resolve(appRoot, 'node_modules', 'core-js'),
          'react-dom': path.resolve(appRoot, 'node_modules', 'react-dom'),
          'react-router': path.resolve(appRoot, 'node_modules', 'react-router'),
          moment: path.resolve(appRoot, 'node_modules', 'moment'),
          lodash: path.resolve(appRoot, 'node_modules', 'lodash'),
          '@root': appRoot,
          '@app': isNode && !isSSR
            ? path.resolve(__dirname, 'noop')
            : path.resolve(appRoot, 'app'),
        },
        allPackages.reduce((obj, item) => {
          // get all folders in src and create 'olymp-xxx' alias
          obj[`olymp-${item}`] = path.resolve(olympRoot, 'packages', item);
          return obj;
        }, {})
      ),
    },
    resolveLoader: {
      modules: [
        path.resolve(olympRoot, 'node_modules'),
        path.resolve(appRoot, 'node_modules'),
      ],
    },
    plugins: [
      // new webpack.optimize.ModuleConcatenationPlugin(),
      new webpack.DefinePlugin(
        Object.assign(
          {
            'process.env.SSR': JSON.stringify(isSSR),
            'process.env.NODE_ENV': JSON.stringify(mode),
            'process.env.DEV_PORT': JSON.stringify(devPort),
            'process.env.DEV_URL': devUrl ? JSON.stringify(devUrl.origin) : undefined,
            'process.env.IS_WEB': isWeb ? JSON.stringify(true) : undefined,
            'process.env.IS_NODE': isNode ? JSON.stringify(true) : undefined,
            'process.env.IS_ELECTRON': isElectron ? JSON.stringify(true) : undefined,
          },
          !isNode
            ? {
              'process.env.AMP': process.env.AMP
                ? JSON.stringify(process.env.AMP)
                : undefined,
              'process.env.GM_KEY': JSON.stringify(process.env.GM_KEY),
              'process.env.GRAPHQL_URL': process.env.GRAPHQL_URL
                ? JSON.stringify(process.env.GRAPHQL_URL)
                : undefined,
              /*'process.env.GRAPHQL_SUB': process.env.GRAPHQL_SUB
                ? JSON.stringify(process.env.GRAPHQL_SUB)
                : undefined,*/
              'process.env.URL': process.env.URL
                ? JSON.stringify(process.env.URL)
                : undefined,
              'process.env.FILESTACK_KEY': process.env.FILESTACK_KEY
                ? JSON.stringify(process.env.FILESTACK_KEY)
                : undefined,
            }
            : {}
        )
      ),
      // new PrepackWebpackPlugin({ }),
      new webpack.ContextReplacementPlugin(/moment[/\\]locale$/, /de/),
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
        {
          test: /\.(graphql|gql)$/,
          exclude: /node_modules/,
          loader: 'graphql-tag/loader',
        },
      ],
    },
    output: {
      path: path.resolve(appRoot, folder, target),
    },
    entry: {
      main: [],
    },
  };

  const include = packagesToTranspile.map(item => path.resolve(olympRoot, 'packages', item)).concat([
    // path.resolve(appRoot, 'server'),
    // path.resolve(olympRoot, 'graphql'),
    path.resolve(appRoot, 'app'),
    path.resolve(appRoot, 'server'),
  ]);

  const babel = {
    test: /\.(js|jsx)$/,
    loader: 'babel-loader',
    include,
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
  if (isProd && isWeb && !isElectron) {
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
  } else if (isElectron) {
    config.target = 'electron-main';
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
    config.output.publicPath = devUrl.href;
  } else {
    config.output.publicPath = '/';
  }

  // babel-preset-env on node
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

  // webpack plugins
  if (isWeb && isProd) {
    config.plugins.push(new webpack.optimize.OccurrenceOrderPlugin());
    // config.plugins.push(new webpack.optimize.DedupePlugin());
    config.plugins.push(
      new ExtractTextPlugin({
        filename: isElectron ? '[name].css' : '[name].[contenthash].css',
        allChunks: true,
      })
    );
    if (isElectron) {
      config.plugins.push(new GenerateJsonPlugin('package.json', {}));
    }
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
      config.plugins.push(
        new ReloadServerPlugin({
          // Defaults to process.cwd() + "/server.js"
          script: path.resolve(__dirname, 'node', 'index.js'),
        })
      );
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
        path: path.resolve(process.cwd(), folder, target),
      })
    );
    if (isProd && !isServerless) {
      config.plugins.push(
        new HtmlWebpackPlugin({
          filename: 'offline.html',
          template: path.resolve(__dirname, 'templates', 'default.js'),
          inject: false,
          /* minify: {
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
          // autoUpdate: 1000 * 60 * 5,
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
    } else if (isServerless) {
      config.plugins.push(
        new HtmlWebpackPlugin({
          filename: 'index.html',
          template: path.resolve(__dirname, 'templates', isElectron ? 'electron.js' : 'serverless.js'),
          inject: false,
          /* minify: {
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
  if (isDev || isNode || isElectron) {
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
      path.resolve(olympRoot, 'node_modules'),
      path.resolve(appRoot, 'node_modules'),
    ].map(modulesDir =>
      nodeExternals({
        modulesDir,
        whitelist: [
          v => v.indexOf('webpack/hot/poll') === 0,
          'source-map-support/register',
          v => v.indexOf('olymp-') === 0 && packagesToTranspile.indexOf(v.split('/')[0].split('olymp-')[1]) !== -1,
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
      `webpack-dev-server/client?${config.output.publicPath}`,
      'webpack/hot/only-dev-server',
      require.resolve(path.resolve(__dirname, target)),
    ];
  } else if (isNode && isDev) {
    config.entry.main = [
      'webpack/hot/poll?1000',
      require.resolve(path.resolve(__dirname, target)),
    ];
  } else if (isElectron) {
    config.entry.main = [require.resolve(path.resolve(__dirname, 'web', 'index.js'))];
    config.entry.app = [require.resolve(path.resolve(__dirname, 'electron', 'main.js'))];
  } else {
    config.entry.main = [require.resolve(path.resolve(__dirname, target, 'index.js'))];
  }

  // Less loader
  let theme = {
    'font-size-base': '15px',
    'primary-color': '#FBA139',
    'cms-color': '#FFFFFF',
  };
  if (fs.existsSync(path.resolve(process.cwd(), 'theme.js'))) {
    theme = Object.assign(
      {},
      theme,
      require(path.resolve(process.cwd(), 'theme.js'))()
    );
  }
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
    config.module.rules.push({
      test: /\.css$/,
      loader: ExtractTextPlugin.extract({
        use: [
          {
            loader: 'css-loader',
            options: { modules: false },
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
    config.plugins.push(
      new HappyPack({
        id: 'css',
        threads: 4,
        loaders: [
          {
            path: 'style-loader',
            query: JSON.stringify({ insertAt: 'top' }),
          },
          {
            path: 'css-loader',
            query: JSON.stringify({ modules: false, sourceMap: true }),
          },
        ],
      })
    );
    config.module.rules.push({
      test: /\.css$/,
      loaders: ['happypack/loader?id=css'],
    });
  }

  if (isDev) {
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
    /* config.module.rules.push({
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
    /* config.module.rules.push({
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
