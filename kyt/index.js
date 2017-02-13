const path = require('path');
const nodeExternals = require('webpack-node-externals');
const env = require('node-env-file');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

env(path.resolve(process.cwd(), '.env'));
require.extensions['.less'] = require.extensions['.css'] = () => undefined;

console.log(path.resolve(__dirname, 'src', '*', 'schema'));
module.exports = {
  reactHotLoader: true,
  debug: false,
  serverURL: `http://localhost:${process.env.PORT}`,
  clientURL: `http://localhost:${process.env.PORT + 1}`,
  additionalServerPaths: [
    path.resolve(__dirname, '..', 'graphql'),
    path.resolve(__dirname, 'server'),
    path.resolve(__dirname, '..', 'src', 'ekhn', 'schema'),
    path.resolve(process.cwd(), 'server')
  ],
  modifyWebpackConfig: (baseConfig, { type }) => {
    if (!baseConfig.resolve.alias) baseConfig.resolve.alias = {};
    baseConfig.resolve.modules.push(path.resolve(__dirname, '..', 'node_modules'));
    baseConfig.resolveLoader.modules.push(path.resolve(__dirname, '..', 'node_modules'));
    baseConfig.entry.main[baseConfig.entry.main.length - 1] = path.resolve(__dirname, type, 'index.js');
    baseConfig.resolve.alias.react = path.resolve(process.cwd(), 'node_modules', 'react');
    baseConfig.resolve.alias['react-dom'] = path.resolve(process.cwd(), 'node_modules', 'react-dom');
    baseConfig.resolve.alias['react-router'] = path.resolve(process.cwd(), 'node_modules', 'react-router-v4-decode-uri');
    baseConfig.resolve.alias.moment = path.resolve(process.cwd(), 'node_modules', 'moment');
    baseConfig.resolve.alias.lodash = path.resolve(process.cwd(), 'node_modules', 'lodash');
    baseConfig.resolve.alias.olymp = path.resolve(__dirname, '..');
    baseConfig.resolve.alias['@root'] = path.resolve(process.cwd());
    baseConfig.resolve.alias['@app'] = path.resolve(process.cwd(), 'app');
    if (type === 'server') {
      baseConfig.externals = [
        path.resolve(__dirname, '..', 'node_modules'),
        path.resolve(process.cwd(), 'node_modules')
      ].map(modulesDir => nodeExternals({
        modulesDir,
        whitelist: [
          'source-map-support/register',
          v => v === 'olymp' || v.indexOf('olymp/') === 0 || v.indexOf('olymp-') === 0,
          /\.(eot|woff|woff2|ttf|otf)$/,
          /\.(svg|png|jpg|jpeg|gif|ico)$/,
          /\.(mp4|mp3|ogg|swf|webp)$/,
          /\.(css|scss|sass|sss|less)$/
        ]
      }));
    }
    // baseConfig.plugins[0].definitions.KYT.PUBLIC_DIR = JSON.stringify(path.resolve(process.cwd(), 'public'));
    baseConfig.module.rules = baseConfig.module.rules.map(x => {
      if (x.loader === 'babel-loader') {
        delete x.exclude;
        x.include = [
          path.resolve(process.cwd(), 'app'),
          path.resolve(__dirname),
          path.resolve(__dirname, '..', 'src'),
        ];
        x.options.plugins.push(require.resolve('babel-plugin-transform-object-rest-spread'));
        x.options.plugins.push(require.resolve('babel-plugin-transform-es2015-destructuring'));
        x.options.plugins.push(require.resolve('babel-plugin-transform-decorators-legacy'));
        x.options.plugins.push(require.resolve('babel-plugin-transform-class-properties'));
        if (type === 'client') x.options.plugins.push([require.resolve('babel-plugin-import'), { libraryName: 'antd', style: true }]);
      } return x;
    });
    baseConfig.module.rules.push({
      test: /\.less$/,
      use: type === 'client' ? ExtractTextPlugin.extract({
        fallbackLoader: "style-loader",
        loader: "css-loader!less-loader",
      }) : [require.resolve('empty-loader')],
    });
    return baseConfig;
  },
};
