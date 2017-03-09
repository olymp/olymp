const webpack = require('webpack');
const path = require('path');
const fs = require('fs');
const AssetsPlugin = require('assets-webpack-plugin');
const ProgressBarPlugin = require('progress-bar-webpack-plugin');
const nodeExternals = require('webpack-node-externals');
const StartServerPlugin = require('start-server-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

let theme = require('../default-theme')();
if (fs.existsSync(path.resolve(process.cwd(), 'theme.js'))) {
  theme = Object.assign({}, theme, require(path.resolve(process.cwd(), 'theme.js'))());
}
const appRoot = process.cwd();
const olympRoot = path.resolve(__dirname, '..');
process.noDeprecation = true;

module.exports = ({ mode, target, port, devPort }) => {
  const isDev = mode !== 'production';
  const isProd = mode === 'production';
  const isWeb = target !== 'node';
  const isNode = target === 'node';
  const config = {
    resolve: {
      extensions: [
        '.js',
        '.json'
      ],
      modules: [
        path.resolve(olympRoot, 'node_modules'),
        path.resolve(appRoot, 'node_modules')
      ],
      alias: {
        react: path.resolve(appRoot, 'node_modules', 'react'),
        'react-dom': path.resolve(appRoot, 'node_modules', 'react-dom'),
        'react-router': path.resolve(appRoot, 'node_modules', 'react-router'),
        moment: path.resolve(appRoot, 'node_modules', 'moment'),
        lodash: path.resolve(appRoot, 'node_modules', 'lodash'),
        olymp: olympRoot,
        '@root': appRoot,
        '@app': path.resolve(appRoot, 'app'),
      }
    },
    resolveLoader: {
      modules: [
        path.resolve(olympRoot, 'node_modules'),
        path.resolve(appRoot, 'node_modules')
      ]
    },
    plugins: [
      new webpack.DefinePlugin({
        'process.env.NODE_ENV': JSON.stringify('development'),
      }),
      new webpack.NamedModulesPlugin(),
      new ProgressBarPlugin(),
      new webpack.NoEmitOnErrorsPlugin(),
    ],
    module: {
      rules: [{
        test: /\.html$/,
        loader: 'file-loader?name=[name].[ext]',
      }, {
        test: /\.(jpg|jpeg|png|gif|eot|svg|ttf|woff|woff2)$/,
        loader: 'url-loader',
        options: {
          limit: 20000,
        },
      }, {
        test: /\.json$/,
        loader: 'json-loader',
      }],
    },
    output: {
      path: path.resolve(appRoot, 'build', target),
      filename: '[name].js',
      chunkFilename: '[name]-[chunkhash].js',
    },
    entry: {
      main: []
    }
  }

  const babel = {
    test: /\.(js|jsx)$/,
    loader: 'babel-loader',
    include: [
      path.resolve(appRoot, 'app'),
      path.resolve(olympRoot, 'src'),
      path.resolve(__dirname),
    ],
    options: {
      cacheDirectory: false,
      presets: [
        'react',
      ],
      plugins: [
        'transform-object-rest-spread',
        'transform-es2015-destructuring',
        'transform-decorators-legacy',
        'transform-class-properties',
        ['import', { libraryName: 'antd', style: true }],
      ],
    },
  }

  // inline-source-map for web-dev
  if (isDev && isWeb) {
    config.devtool = 'inline-source-map';
  } else {
    config.devtool = 'source-map';
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
  }

  // babel-preset-env on node
  if (isNode) {
    babel.options.presets.push(['env', { modules: false }]);
  } else if (isWeb) {
    babel.options.presets.push(['latest', { modules: false, loose: true }]);
    if(isDev) babel.options.plugins.push('react-hot-loader/babel');
  }

  // webpack plugins
  if (isNode) {
    config.plugins.push(new StartServerPlugin('main.js'));
    config.plugins.push(new webpack.BannerPlugin({ banner: 'require("source-map-support").install();', raw: true, entryOnly: true }));
    config.plugins.push(new webpack.NormalModuleReplacementPlugin(/\.(less|css|scss)$/, 'node-noop'));
  } else {
    config.plugins.push(new AssetsPlugin({ filename: 'assets.json', path: path.resolve(process.cwd(), 'build', target) }));
  }

  // Hot module replacement on dev
  if (isDev) {
    config.plugins.push(new webpack.HotModuleReplacementPlugin());
  }

  // LimitChunkCount on all but production-web
  if (isDev || isNode) {
    config.plugins.push(new webpack.optimize.LimitChunkCountPlugin({ maxChunks: 1 }));
  }

  // Less loader
  if (isWeb && isProd) {
    config.module.rules.push({
      test: /\.less$/,
      loader: ExtractTextPlugin.extract({
        fallbackLoader: 'style',
        loader: `css?sourceMap!less?{"modifyVars":${JSON.stringify(theme)}}`,
      }),
    });
  } else if (isWeb) {
    config.module.rules.push({
      test: /\.less$/,
      use: [
        'style-loader',
        { loader: 'css-loader', options: { modules: false, sourceMap: true } },
        `less-loader?{"modifyVars":${JSON.stringify(theme)}}`,
      ],
    });
  }

  // externals
  if (isNode) {
    config.externals = [
      path.resolve(__dirname, '..', 'node_modules'),
      path.resolve(process.cwd(), 'node_modules')
    ].map(modulesDir => nodeExternals({
      modulesDir,
      whitelist: [
        'webpack/hot/poll?1000',
        'source-map-support/register',
        v => v === 'olymp' || v.indexOf('olymp/') === 0 || v.indexOf('olymp-') === 0,
        v => v === 'antd' || v.indexOf('antd/') === 0,
        /\.(eot|woff|woff2|ttf|otf)$/,
        /\.(svg|png|jpg|jpeg|gif|ico)$/,
        /\.(mp4|mp3|ogg|swf|webp)$/,
        /\.(css|scss|sass|sss|less)$/
      ]
    }));
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
    config.entry.main = [
      require.resolve(path.resolve(__dirname, target)),
    ];
  }

  config.module.rules.push(babel);
  return config;
}
