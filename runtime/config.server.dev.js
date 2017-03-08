const nodeExternals = require('webpack-node-externals');
const webpack = require('webpack');
const ProgressBarPlugin = require('progress-bar-webpack-plugin');
const path = require('path');
const StartServerPlugin = require('start-server-webpack-plugin');

const appRoot = process.cwd();
const olympRoot = path.resolve(__dirname, '..');

module.exports = ({
  watch: true,
  // devtool: 'source-map',
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
      'process.env.NODE_ENV': '"development"',
    }),
    new StartServerPlugin('server.js'),
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new ProgressBarPlugin(),
    new webpack.optimize.LimitChunkCountPlugin({ maxChunks: 1 }),
    new webpack.BannerPlugin({ banner: 'require("source-map-support").install();', raw: true, entryOnly: true }),
    new webpack.NormalModuleReplacementPlugin(/\.(less|css|scss)$/, 'node-noop'),
  ],
  module: {
    rules: [{
      test: /\.html$/,
      loader: 'file-loader?name=[name].[ext]',
    },
    {
      test: /\.(jpg|jpeg|png|gif|eot|svg|ttf|woff|woff2)$/,
      loader: 'url-loader',
      options: {
        limit: 20000,
      },
    },
    {
      test: /\.json$/,
      loader: 'json-loader',
    },
    {
      test: /\.(js|jsx)$/,
      loader: 'babel-loader',
      include: [
        path.resolve(appRoot, 'app'),
        path.resolve(olympRoot, 'src'),
        path.resolve(__dirname),
      ],
      // babel configuration should come from presets defined in the user's
      // .babelrc, unless there's a specific reason why it has to be put in
      // the webpack loader query
      options: {
        // this is a loader-specific option and can't be put in a babel preset
        // cacheDirectory: false,
        presets: [
          ['env', { modules: false }],
          'react',
        ],
        plugins: [
          require.resolve('babel-plugin-transform-object-rest-spread'),
          require.resolve('babel-plugin-transform-es2015-destructuring'),
          require.resolve('babel-plugin-transform-decorators-legacy'),
          require.resolve('babel-plugin-transform-class-properties'),
          [require.resolve('babel-plugin-import'), { libraryName: 'antd', style: true }],
        ],
      },
    }],
  },
  target: 'node',
  externals: [
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
  })),
  entry: [
    'webpack/hot/poll?1000',
    require.resolve(path.resolve(__dirname, 'server')),
  ],
  output: {
    path: path.resolve(appRoot, 'build', 'server'),
    filename: 'server.js',
    // chunkFilename: '[name]-[chunkhash].js',
    // publicPath: 'http://localhost:30051/',
    // libraryTarget: 'commonjs2'
  }
});
