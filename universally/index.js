const path = require('path');
const fs = require('fs');
const rootPath = require('app-root-dir');
const webpack = require('webpack');

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
  config.env.URL = config.url;
  config.env.HEROKU_URL = process.env.HEROKU_URL;
  config.env.API = process.env.API;
  config.env.GM_KEY = process.env.GM_KEY;
  if (!config.alias) config.alias = {};
  config.alias['react-router'] = path.resolve(rootPath.get(), 'node_modules', 'react-router-v4-decode-uri');
  config.alias.moment = fs.realpathSync(path.resolve(rootPath.get(), 'node_modules', 'moment'));
  config.alias.lodash = fs.realpathSync(path.resolve(rootPath.get(), 'node_modules', 'lodash'));
  config.alias.olymp = fs.realpathSync(path.resolve(rootPath.get(), 'node_modules', 'olymp'));
  config.nodeBundlesIncludeNodeModuleFileTypes.push(v => v === 'olymp' || v.indexOf('olymp/') === 0 || v.indexOf('olymp-') === 0);

  config.bundles.client.srcPaths.push(fs.realpathSync(path.resolve(rootPath.get(), './node_modules/olymp/src')));
  config.bundles.client.srcPaths.push('./app');
  config.bundles.client.outputPath = './.build/client';

  config.bundles.server.srcPaths.push(fs.realpathSync(path.resolve(rootPath.get(), './node_modules/olymp/src')));
  config.bundles.server.srcPaths.push('./app');
  config.bundles.server.outputPath = './.build/server';

  config.bundles.client.srcEntryFile = path.resolve(__dirname, 'src', 'client.js');
  config.bundles.client.srcPaths.push(path.resolve(__dirname, 'src'));
  config.bundles.server.srcEntryFile = path.resolve(__dirname, 'src', 'server.js');
  config.bundles.server.srcPaths.push(path.resolve(__dirname, 'src'));

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
    const { target, mode } = buildOptions;
    if (prevBabelConfig) babelConfig = prevBabelConfig(babelConfig, buildOptions);
    babelConfig.plugins.push(require.resolve('babel-plugin-transform-object-rest-spread'));
    babelConfig.plugins.push(require.resolve('babel-plugin-transform-es2015-destructuring'));
    babelConfig.plugins.push(require.resolve('babel-plugin-transform-decorators-legacy'));
    babelConfig.plugins.push(require.resolve('babel-plugin-transform-class-properties'));
    if (target === 'client') babelConfig.plugins.push([require.resolve('babel-plugin-import'), { libraryName: 'antd', style: true }]);
    if (mode === 'production' && target === 'server') babelConfig.plugins.push(require.resolve('babel-plugin-lodash'));
    if (mode === 'production' && target === 'server') babelConfig.plugins.push(require.resolve('babel-plugin-lodash'));
    /* ifProd('transform-react-remove-prop-types'),
    ifProd('transform-react-pure-class-to-function'),
    ifProd('minify-constant-folding'),
    ifProd('minify-dead-code-elimination'),
    ifProd('minify-flip-comparisons'),
    ifProd('minify-guarded-expressions'),
    ifProd('minify-infinity'),
    // ifProd('minify-mangle-names'), Error App not defined
    ifProd('minify-replace'),
    // ifProd('minify-simplify'), TypeError: /Users/bkniffler/Projects/olymp-gzk/node_modules/olymp/src2/slate/editor.js: Cannot read property 'file' of undefined
    ifProd('minify-type-constructors'),
    ifProd('transform-member-expression-literals'),
    ifProd('transform-merge-sibling-variables'),
    ifProd('transform-minify-booleans'),
    ifProd('transform-property-literals'),
    ifProd('transform-simplify-comparison-operators'),
    ifProd('transform-undefined-to-void'),*/
    return babelConfig;
  };
  const prevConf = config.plugins.webpackConfig;
  config.plugins.webpackConfig = (webpackConfig, buildOptions, config, utils) => {
    const { happyPackPlugin, ExtractTextPlugin, merge } = utils;
    const { target, mode } = buildOptions;

    if (prevConf) webpackConfig = prevConf(webpackConfig, buildOptions, config, utils);
    webpackConfig.plugins.push(
      new webpack.ContextReplacementPlugin(/moment[\/\\]locale$/, /de/)
    );
    if (mode === 'development' && target === 'client') {
      webpackConfig.plugins.push(happyPackPlugin({
        name: 'happypack-devclient-less',
        tempDir: !config.happypackOutputPath ? path.resolve(rootPath.get(), '.happypack') : path.resolve(rootPath.get(), config.happypackOutputPath),
        loaders: [
          require.resolve('style-loader'),
          require.resolve('css-loader'),
          {
            path: require.resolve('less-loader'),
            query: { sourceMap: true },
          },
        ],
      }));
    }
    webpackConfig.module.rules.push(merge(
      {
        test: /\.less$/,
      },
      // For development clients we will defer all our css processing to the
      // happypack plugin named "happypack-devclient-css".
      // See the respective plugin within the plugins section for full
      // details on what loader is being implemented.
      target === 'client' && mode === 'development' && {
        loaders: [`${require.resolve('happypack/loader')}?id=happypack-devclient-less`],
      },
      // For a production client build we use the ExtractTextPlugin which
      // will extract our CSS into CSS files. We don't use happypack here
      // as there are some edge cases where it fails when used within
      // an ExtractTextPlugin instance.
      // Note: The ExtractTextPlugin needs to be registered within the
      // plugins section too.
      target === 'client' && mode === 'production' && {
        loader: ExtractTextPlugin.extract({
          fallbackLoader: require.resolve('style-loader'),
          loader: [`${require.resolve('css-loader')}!${require.resolve('less-loader')}`],
        }),
      },
      // When targetting the server we use the "/locals" version of the
      // css loader, as we don't need any css files for the server.
      target !== 'client' && {
        loaders: [require.resolve('empty-loader')],
      }
    ));

    return webpackConfig;
  };
  return config;
};
