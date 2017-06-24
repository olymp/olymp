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

const appRoot = process.cwd();
const olympRoot = path.resolve(__dirname, '..', '..');
process.noDeprecation = true;

module.exports = ({ mode, target, port, devPort, ssr }) => {
  const isSSR = ssr !== false;
  if (!isSSR) {
    console.log('SSR OFF');
  }
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
        path.resolve(appRoot, 'app'),
      ],
      alias: Object.assign(
        {
          react: path.resolve(appRoot, 'node_modules', 'react'),
          // 'core-js': path.resolve(appRoot, 'node_modules', 'core-js'),
          'react-dom': path.resolve(appRoot, 'node_modules', 'react-dom'),
          'react-router': path.resolve(appRoot, 'node_modules', 'react-router'),
          moment: path.resolve(appRoot, 'node_modules', 'moment'),
          lodash: path.resolve(appRoot, 'node_modules', 'lodash'),
          olymp: olympRoot,
          '@root': appRoot,
          '@app': isNode && !isSSR
            ? path.resolve(__dirname, 'noop')
            : path.resolve(appRoot, 'app'),
        },
        fs
          .readdirSync(path.resolve(olympRoot, 'packages'))
          .reduce((obj, item) => {
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
      new webpack.optimize.ModuleConcatenationPlugin(),
      new webpack.DefinePlugin({
        'process.env.SSR': JSON.stringify(isSSR),
        'process.env.NODE_ENV': JSON.stringify(mode),
        'process.env.GM_KEY': JSON.stringify(process.env.GM_KEY),
        'process.env.DEV_PORT': JSON.stringify(devPort),
        'process.env.GRAPHQL_URL': process.env.GRAPHQL_URL
          ? JSON.stringify(process.env.GRAPHQL_URL)
          : undefined,
        'process.env.URL': process.env.URL
          ? JSON.stringify(process.env.URL)
          : undefined,
        'process.env.FILESTACK_KEY': process.env.FILESTACK_KEY
          ? JSON.stringify(process.env.FILESTACK_KEY)
          : undefined,
      }),
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
      path.resolve(appRoot, 'server'),
      path.resolve(olympRoot, 'icons'),
      path.resolve(olympRoot, 'packages'),
      path.resolve(olympRoot, 'src'),
      path.resolve(olympRoot, 'graphql'),
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
        'olymp-icons': {
          transform: 'olymp-icons/fa5/${member}',
          kebabCase: true,
          preventFullImport: true,
        },
      },
    ]);
    // babel.options.presets.push(['react-optimize']);
  }
  config.module.rules.push(babel);

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
        path: path.resolve(process.cwd(), 'build', target),
      })
    );
    if (isProd && !isElectron) {
      config.plugins.push(
        new HtmlWebpackPlugin({
          filename: 'offline.html',
          template: path.resolve(__dirname, target, 'template.js'),
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
    }
    if (isProd && isElectron) {
      config.plugins.push(
        new HtmlWebpackPlugin({
          filename: 'index.html',
          template: path.resolve(__dirname, target, 'template.js'),
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
      path.resolve(olympRoot, 'node_modules'),
      path.resolve(appRoot, 'node_modules'),
    ].map(modulesDir =>
      nodeExternals({
        modulesDir,
        whitelist: [
          v => v.indexOf('webpack/hot/poll') === 0,
          'source-map-support/register',
          v =>
            v === 'olymp' ||
            v.indexOf('olymp-') === 0 ||
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
  } else if (isWeb && isDev) {
    config.module.rules.push({
      test: /\.less$/,
      use: [
        {
          loader: 'style-loader',
          options: { insertAt: 'top' },
        },
        {
          loader: 'css-loader',
          options: { modules: false, sourceMap: true },
        },
        {
          loader: 'less-loader',
          options: {
            modifyVars: theme,
            sourceMap: true,
          },
        },
      ],
    });
    config.module.rules.push({
      test: /\.css$/,
      use: [
        {
          loader: 'style-loader',
          options: { insertAt: 'top' },
        },
        {
          loader: 'css-loader',
          options: { modules: false, sourceMap: true },
        },
      ],
    });
  }
  return config;
};
