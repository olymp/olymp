const path = require('path');
const fs = require('fs');
const nodeExternals = require('webpack-node-externals');
const themePath = path.resolve(process.cwd(), 'theme.js');
const theme = fs.existsSync(themePath) ? require(themePath)() : {};
require.extensions['.less'] = require.extensions['.css'] = () => undefined;

module.exports = {
  reactHotLoader: true,
  debug: false,
  additionalServerPaths: [
    path.resolve(__dirname, '..', 'graphql'),
    path.resolve(__dirname, 'server'),
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
    baseConfig.resolve.alias['@app'] = type === 'server' && process.env.NODE_ENV !== 'development' ? path.resolve(__dirname, 'blank') : path.resolve(process.cwd(), 'app');
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
    baseConfig.plugins[0].definitions.KYT.PUBLIC_DIR = JSON.stringify(path.resolve(process.cwd(), 'public'));
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

    // TODO production client
    baseConfig.module.rules.forEach(x => {
      if (String(x.test) === String(/\.css$/)) {
        if (Array.isArray(x.use)) {
          x.use.filter(u => typeof u === 'object').forEach(u => {
            if (u.options && u.options.modules) u.options.modules = false;
          });
        }
      }
    });
    baseConfig.module.rules.push({
      test: /\.less$/,
      use: type === 'client' ? [
        'style-loader',
        { loader: 'css-loader', options: { importLoaders: 1 } },
        `less-loader?{"modifyVars":${JSON.stringify(theme)}}`
      ] : [require.resolve('empty-loader')],
    });
    return baseConfig;
  },
};
