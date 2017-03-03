const webpack = require('webpack');
const path = require('path');
const fs = require('fs');
const nodeExternals = require('webpack-node-externals');
const themePath = path.resolve(process.cwd(), 'theme.js');
const appTheme = fs.existsSync(themePath) ? require(themePath)() : {};
const defaultTheme = require(path.resolve(__dirname, '..', 'default-theme'))();
const env = require('node-env-file');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const theme = Object.assign({}, defaultTheme, appTheme);

env(path.resolve(process.cwd(), '.env'), { raise: false });
module.exports = {
  reactHotLoader: true,
  debug: false,
  serverURL: `http://localhost:${process.env.PORT || 3000}`,
  clientURL: `http://localhost:${(process.env.PORT || 3000) + 1}`,
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
    baseConfig.resolve.alias['react-router'] = path.resolve(process.cwd(), 'node_modules', 'react-router');
    baseConfig.resolve.alias.moment = path.resolve(process.cwd(), 'node_modules', 'moment');
    baseConfig.resolve.alias.lodash = path.resolve(process.cwd(), 'node_modules', 'lodash');
    baseConfig.resolve.alias.olymp = path.resolve(__dirname, '..');
    baseConfig.resolve.alias['@root'] = path.resolve(process.cwd());
    //if (type === 'server' && process.env.NODE_ENV !== 'production') baseConfig.resolve.alias['@app'] = path.resolve(__dirname, 'noop');
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
          v => v === 'antd' || v.indexOf('antd/') === 0,
          /\.(eot|woff|woff2|ttf|otf)$/,
          /\.(svg|png|jpg|jpeg|gif|ico)$/,
          /\.(mp4|mp3|ogg|swf|webp)$/,
          /\.(css|scss|sass|sss|less)$/
        ]
      }));
    }
    // baseConfig.plugins[0].definitions.KYT.PUBLIC_DIR = JSON.stringify(path.resolve(process.cwd(), 'public'));
    if (type === 'server') baseConfig.plugins.push(new webpack.NormalModuleReplacementPlugin(/\.(less|css|scss)$/, 'node-noop'));
    baseConfig.module.rules = baseConfig.module.rules.map(x => {
      if (x.loader === 'babel-loader') {
        delete x.exclude;
        x.include = [
          path.resolve(process.cwd(), 'app'),
          path.resolve(__dirname),
          path.resolve(__dirname, '..', 'src'),
        ];
      } return x;
    });

    // TODO production client
    baseConfig.module.rules.filter(x => String(x.test) === String(/\.css$/) && Array.isArray(x.use)).forEach(x => {
      x.use.filter(u => typeof u === 'object' && u.options && u.options.modules).forEach(u => u.options.modules = false);
    });
    if (type !== 'server' && process.env.NODE_ENV === 'production') { // Extract text for less on prod
      baseConfig.module.rules.push({
        test: /\.less$/,
        loader: ExtractTextPlugin.extract({
          fallbackLoader: 'style',
          loader: `css?sourceMap!postcss!less?{"modifyVars":${JSON.stringify(theme)}}`,
        }),
      });
    } else if (type !== 'server') {
      baseConfig.module.rules.push({
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
      });
    }
    return baseConfig;
  },
};
