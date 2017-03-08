const webpack = require('webpack');
const path = require('path');
const fs = require('fs');
const AssetsPlugin = require('assets-webpack-plugin');

let theme = require('../default-theme')();
if (fs.existsSync(path.resolve(process.cwd(), 'theme.js'))) {
  theme = Object.assign({}, theme, require(path.resolve(process.cwd(), 'theme.js'))());
}
const appRoot = process.cwd();
const olympRoot = path.resolve(__dirname, '..');

module.exports = (port) => ({
  node: {
    __dirname: true,
    __filename: true
  },
  devtool: 'inline-source-map',
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
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.optimize.LimitChunkCountPlugin({ maxChunks: 1 }),
    new AssetsPlugin({ filename: 'publicAssets.json', path: path.resolve(process.cwd(), 'build') }),
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
    }, {
      test: /\.less$/,
      use: [
        'style-loader',
        { loader: 'css-loader', options: { modules: false, sourceMap: true } },
        `less-loader?{"modifyVars":${JSON.stringify(theme)}}`,
      ],
    }, {
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
    }],
  },
  target: 'web',
  entry: {
    main: [
      'react-hot-loader/patch',
      `webpack-dev-server/client?http://localhost:${port}`,
      'webpack/hot/only-dev-server',
      require.resolve(path.resolve(__dirname, 'client')),
    ]
  },
  output: {
    path: path.resolve(appRoot, 'build', 'client'),
    filename: '[name].js',
    // chunkFilename: '[name]-[chunkhash].js',
    publicPath: `http://localhost:${port}/`,
  }
});
