const webpack = require('webpack');
const path = require('path');
const fs = require('fs');

const theme = Object.assign({}, {}, {});
const appRoot = process.cwd();
const olympRoot = path.resolve(__dirname, '..');

module.exports = ({
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
    new webpack.NoErrorsPlugin(),
    new webpack.optimize.LimitChunkCountPlugin({ maxChunks: 1 }),
    new webpack.BannerPlugin({ banner: 'require("source-map-support").install();', raw: true, entryOnly: true }),
    new webpack.NormalModuleReplacementPlugin(/\.(less|css|scss)$/, 'node-noop'),
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
        'style',
        {
          loader: 'css',
          options: { modules: false, sourceMap: true },
        },
        'postcss',
        `less?{"modifyVars":${JSON.stringify(theme)}}`,
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
          require.resolve('babel-preset-kyt-react'),
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
  target: 'web',
  entry: {
    main: [
      'react-hot-loader/patch',
      'babel-polyfill',
      'webpack-hot-middleware/client?reload=true&path=http://localhost:30051/__webpack_hmr',
      path.resolve(__dirname, 'client'),
    ]
  },
  output: {
    path: path.resolve(appRoot, 'build', 'client'),
    filename: '[name].js',
    chunkFilename: '[name]-[chunkhash].js',
    publicPath: 'http://localhost:30051/',
    libraryTarget: 'var'
  },
  devServer: {
    publicPath: 'http://localhost:30051/',
    headers: {
      'Access-Control-Allow-Origin': '*'
    },
    noInfo: true,
    quiet: true
  }
});
