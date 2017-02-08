const path = require('path');
const nodeExternals = require('webpack-node-externals');

module.exports = {
  reactHotLoader: true,
  debug: false,
  modifyWebpackConfig: (baseConfig, { type }) => {
    if (!baseConfig.resolve.alias) baseConfig.resolve.alias = {};
    baseConfig.resolve.modules.push(path.resolve(__dirname, '..', 'node_modules'))
    baseConfig.resolveLoader.modules.push(path.resolve(__dirname, '..', 'node_modules'))
    baseConfig.entry.main[baseConfig.entry.main.length - 1] = path.resolve(__dirname, type, 'index.js');
    baseConfig.resolve.alias.express = path.resolve(__dirname, '..', 'node_modules', 'express');
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
        ];
      } return x;
    })
    console.log(type, JSON.stringify(baseConfig, null, 2));
    return baseConfig;
  },
};
