const less = require('universally-dev-less');
const apollo = require('universally-apollo');
const path = require('path');
const fs = require('fs');
const rootPath = require('app-root-dir');

module.exports = (config) => {
  const prevBabelConfig = config.plugins.babelConfig;
  config.port = process.env.PORT || 1337;
  config.publicAssetsPath = './public';
  config.bundlesSharedSrcPath = './app';
  config.happypackOutputPath = './.build/happypack';
  config.buildOutputPath = './.build';
  config.clientDevServerPort = process.env.PORT ? (process.env.PORT + 1) : 7331;
  config.url = process.env.URL || `http://localhost:${process.env.PORT || 1337}`;
  config.disableSSR = process.env.SSR === false || process.env.SSR === 'false';
  config.env['URL'] = config.url;
  config.env['API'] = process.env.API;
  config.env['GM_KEY'] = process.env.GM_KEY;
  if (!config.alias) config.alias = {}
  config.alias['react-router'] = path.resolve(rootPath.get(), 'node_modules', 'react-router-v4-decode-uri');
  config.alias['olymp'] = fs.realpathSync(path.resolve(rootPath.get(), 'node_modules', 'olymp'));
  config.nodeBundlesIncludeNodeModuleFileTypes.push(v => v === 'olymp' || v.indexOf('olymp/') === 0 || v.indexOf('olymp-') === 0);

  config.bundles.client.srcPaths.push(fs.realpathSync(path.resolve(rootPath.get(), './node_modules/olymp/src')));
  config.bundles.client.srcPaths.push('./app');
  config.bundles.client.outputPath = './.build/client';

  config.bundles.server.srcPaths.push(fs.realpathSync(path.resolve(rootPath.get(), './node_modules/olymp/src')));
  config.bundles.server.srcPaths.push('./app');
  config.bundles.server.outputPath = './.build/server';

  config.cspExtensions = {
    manifestSrc: [],
    defaultSrc: ["'self'"],
    scriptSrc: [
      "'self'",
      'cdn.polyfill.io',
      'maps.googleapis.com',
      'cdn.jsdelivr.net',
      'www.google-analytics.com',
      process.env.NODE_ENV === 'development' ? "'unsafe-inline'" : (req, res) => `'nonce-${res.locals.nonce}'`,
    ],
    styleSrc: ["'self'", "'unsafe-inline'", 'blob:', 'at.alicdn.com', 'cdnjs.cloudflare.com', 'cdn.jsdelivr.net', 'maxcdn.bootstrapcdn.com', 'fonts.googleapis.com'],
    imgSrc: ["'self'", 'data:', 'stats.g.doubleclick.net', 'res.cloudinary.com', 'csi.gstatic.com', 'maps.gstatic.com', 'maps.googleapis.com', 'www.google-analytics.com', 'scontent.cdninstagram.com'],
    connectSrc: ['*'], // ["'self'", 'ws:'],
    fontSrc: ["'self'", 'at.alicdn.com', 'cdnjs.cloudflare.com', 'maxcdn.bootstrapcdn.com', 'fonts.googleapis.com', 'fonts.gstatic.com'],
    objectSrc: [],
    mediaSrc: [],
    childSrc: ["'self'", 'www.youtube.com'],
  };
  config.plugins.babelConfig = (babelConfig, buildOptions) => {
    const { target } = buildOptions;
    if (prevBabelConfig) babelConfig = prevBabelConfig(babelConfig, buildOptions);
    babelConfig.plugins.push(require.resolve('babel-plugin-transform-object-rest-spread'));
    babelConfig.plugins.push(require.resolve('babel-plugin-transform-es2015-destructuring'));
    babelConfig.plugins.push(require.resolve('babel-plugin-transform-decorators-legacy'));
    babelConfig.plugins.push(require.resolve('babel-plugin-transform-class-properties'));
    if (target === 'client') babelConfig.plugins.push([require.resolve('babel-plugin-import'), { libraryName: 'antd', style: true }]);
    return babelConfig;
  };
  return less(apollo(config));
};
