-const path = require('path');
-const globSync = require('glob').sync;
-const webpack = require('webpack');
-const SWPrecacheWebpackPlugin = require('sw-precache-webpack-plugin');
-const AssetsPlugin = require('assets-webpack-plugin');
-const nodeExternals = require('webpack-node-externals');
-const ExtractTextPlugin = require('extract-text-webpack-plugin');
-const appRootPath = require('app-root-dir').get();
-const WebpackMd5Hash = require('webpack-md5-hash');
-const { removeEmpty, ifElse, merge, happyPackPlugin } = require('../utils');
-const envVars = require('../config/envVars');
-const appName = require('../../package.json').name;
-const CodeSplitPlugin = require('code-split-component/webpack');
-const LodashModuleReplacementPlugin = require('lodash-webpack-plugin');
-
-const isLinked = path.resolve(__dirname, '..', '..', '..') !== path.resolve(appRootPath, 'node_modules');
-const modules = require('fs').existsSync(path.resolve(appRootPath, 'modules.json')) ? require(path.resolve(appRootPath, 'modules.json')) : null;
-const alias = {
-  app_alias: path.resolve(appRootPath, 'app'),
-  server_alias: path.resolve(appRootPath, 'server'),
-  universalDevMiddleware_alias: path.resolve(__dirname, '..', 'development', 'universalDevMiddleware'),
-  universalDevMiddleware_build: path.resolve(appRootPath, envVars.BUNDLE_OUTPUT_PATH, 'universalMiddleware'),
-}; if (isLinked) {
-  alias.olymp = path.resolve(__dirname, '..', '..');
-  console.warn('TAKE CARE, you are using linked olymp, dont do this for production builds!');
-} if (modules && modules.alias) Object.keys(modules.alias).forEach((key) => { alias[key] = path.resolve(appRootPath, modules.alias[key]); });
-const include = [path.resolve(appRootPath, './app'), path.resolve(appRootPath, './server'), path.resolve(__dirname, '../../src'), path.resolve(__dirname, '../../src2')];
-if (modules && modules.client) modules.client.map(p => include.push(path.resolve(appRootPath, p)));
-globSync('olymp-*/', {
-  cwd: path.resolve(appRootPath, 'node_modules'),
-}).forEach((module) => {
-  const modulePath = path.resolve(appRootPath, 'node_modules', module);
-  include.push(path.resolve(appRootPath, 'node_modules', modulePath, 'server'));
-  include.push(path.resolve(appRootPath, 'node_modules', modulePath, 'src'));
-});
-function webpackConfigFactory({ target, mode }, { json }) {
-  if (!target || ['client', 'server', 'universalMiddleware'].findIndex(valid => target === valid) === -1) {
-    throw new Error(
-      'You must provide a "target" (client|server|universalMiddleware) to the webpackConfigFactory.'
-    );
-  }
+/* @flow */

-  if (!mode || ['development', 'production'].findIndex(valid => mode === valid) === -1) {
-    throw new Error(
-      'You must provide a "mode" (development|production) to the webpackConfigFactory.'
-    );
-  }
+import path from 'path';
+import { sync as globSync } from 'glob';
+import webpack from 'webpack';
+import OfflinePlugin from 'offline-plugin';
+import AssetsPlugin from 'assets-webpack-plugin';
+import nodeExternals from 'webpack-node-externals';
+import ExtractTextPlugin from 'extract-text-webpack-plugin';
+import HtmlWebpackPlugin from 'html-webpack-plugin';
+import appRootDir from 'app-root-dir';
+import WebpackMd5Hash from 'webpack-md5-hash';
+import CodeSplitPlugin from 'code-split-component/webpack';
+import { removeEmpty, ifElse, merge, happyPackPlugin } from '../utils';
+import type { BuildOptions } from '../types';
+import config, { clientConfig } from '../../config';

-  if (!json) {
-    // Our bundle is outputing json for bundle analysis, therefore we don't
-    // want to do this console output as it will interfere with the json output.
-    //
-    // You can run a bundle analysis by executing the following:
-    //
-    // $(npm bin)/webpack \
-    //   --env.mode production \
-    //   --config webpack.client.config.js \
-    //   --json \
-    //   --profile \
-    //   > build/client/analysis.json
-    //
-    // And then upload the build/client/analysis.json to http://webpack.github.io/analyse/
-    // This allows you to analyse your webpack bundle to make sure it is
-    // optimal.
-    console.log(`==> Creating webpack config for "${target}" in "${mode}" mode`);
-  }
+/**
+ * This function is responsible for creating the webpack configuration for
+ * all of our bundles.
+ *
+ * It has been configured to support one "client/web" bundle, and any number of
+ * additional "node" bundles (i.e. our "server").  You can define additional
+ * node bundles by editing the config/project.js file.
+ *
+ * This factory does not and will not support building multiple web target
+ * bundles.  We expect there to be only one web client representing the full
+ * server side rendered single page application.  Code splitting negates any
+ * need for you to create multiple web bundles.  Therefore we are avoiding this
+ * level of abstraction to keep the config factory as simple as possible.
+ */
+export default function webpackConfigFactory(buildOptions: BuildOptions) {
+  const { target, mode } = buildOptions;
+  console.log(`==> Creating webpack config for "${target}" in "${mode}" mode`);

   const isDev = mode === 'development';
   const isProd = mode === 'production';
   const isClient = target === 'client';
   const isServer = target === 'server';
-  const isUniversalMiddleware = target === 'universalMiddleware';
-  const isNodeTarget = isServer || isUniversalMiddleware;
-
-  alias.react = path.resolve(appRootPath, 'node_modules', 'react');
-  alias['react-dom'] = path.resolve(appRootPath, 'node_modules', 'react-dom');
-  alias.moment = path.resolve(appRootPath, 'node_modules', 'moment');
-  if (isProd) {
-    /* alias['react'] = path.resolve(appRootPath, 'node_modules', 'preact-compat');
-    alias['react-dom'] = path.resolve(appRootPath, 'node_modules', 'preact-compat');
-    alias['react-dom/server'] = path.resolve(appRootPath, 'node_modules', 'preact-compat');
-    include.push(path.resolve(appRootPath, 'node_modules', 'preact-compat'));*/
-    alias['moment/locale/zh-cn'] = 'moment/locale/de';
-  }
-  /* alias['react'] = 'inferno-compat';
-  alias['react-dom'] = 'inferno-compat';
-  alias['react-dom/server'] = 'inferno-compat';*/
-
-  // These are handy little helpers that use the boolean flags above.
-  // They allow you to wrap a value with an condition check. It the condition
-  // is met the value you provided will be returned, otherwise it will
-  // return null.
-  //
-  // For example, say our "isDev" flag had a value of `true`. Then when we used
-  // our helpers below we would get the following results:
-  //   ifDev('foo');  // => 'foo'
-  //   ifProd('foo'); // => null
-  //
-  // It also allows for a secondary argument, which will be used instead of the
-  // null when the condition is not met. For example:
-  //   ifDev('foo', 'bar');  // => 'foo'
-  //   ifProd('foo', 'bar'); // => 'bar'
-  //
-  // This is really handy for doing inline value resolution within or webpack
-  // configuration.  Then we simply use one of our utility functions (e.g.
-  // removeEmpty) to remove all the nulls.
-  const ifNodeTarget = ifElse(isNodeTarget);
+  const isNode = !isClient; // Any bundle but the client bundle must target node.
+
+  // Preconfigure some ifElse helper instnaces. See the util docs for more
+  // information on how this util works.
   const ifDev = ifElse(isDev);
-  const ifProd = ifElse(isProd); // eslint-disable-line no-unused-vars
+  const ifProd = ifElse(isProd);
+  const ifNode = ifElse(isNode);
   const ifClient = ifElse(isClient);
-  const ifServer = ifElse(isServer);
-  const ifDevServer = ifElse(isDev && isServer);
   const ifDevClient = ifElse(isDev && isClient);
   const ifProdClient = ifElse(isProd && isClient);

-  if (isNodeTarget) {
+  if (isNode) {
     require.extensions['.less'] = () => undefined;
     require.extensions['.css'] = () => undefined;
   }

-  return {
-    // We need to state that we are targetting "node" for our server bundle.
-    target: ifNodeTarget('node', 'web'),
-    // We have to set this to be able to use these items when executing a
-    // server bundle.  Otherwise strangeness happens, like __dirname resolving
-    // to '/'.  There is no effect on our client bundle.
+  // Resolve the bundle configuration.
+  const bundleConfig = isServer || isClient
+    // This is either our "server" or "client" bundle.
+    ? config.bundles[target]
+    // Otherwise it must be an additional node bundle.
+    : config.additionalNodeBundles[target];
+
+  if (!bundleConfig) {
+    throw new Error('No bundle configuration exists for target:', target);
+  }
+
+  const webpackConfig = {
+    target: isClient
+      // Only our client bundle will target the web as a runtime.
+      ? 'web'
+      // Any other bundle (including the server) will target node as a runtime.
+      : 'node',
+
+    // Ensure that webpack polyfills the following node features for use
+    // within any bundles that are targetting node as a runtime. This will be
+    // ignored otherwise.
     node: {
       __dirname: true,
       __filename: true,
     },
-    // Anything listed in externals will not be included in our bundle.
+
+    // We don't want our node_modules to be bundled with any bundle that is
+    // targetting the node environment, prefering them to be resolved via
+    // native node module system.
+    // Therefore we use the `webpack-node-externals` library to help us generate
+    // an  externals config that will ignore all node_modules.
     externals: removeEmpty([
-      // Don't allow the server to bundle the universal middleware bundle. We
-      // want the server to natively require it from the build dir.
-      ifServer(/\.\.[/\\]universalMiddleware/),
-      ifDevServer(/development[/\\]universalDevMiddleware/),
-
-      // We don't want our node_modules to be bundled with our server package,
-      // prefering them to be resolved via native node module system.  Therefore
-      // we use the `webpack-node-externals` library to help us generate an
-      // externals config that will ignore all node_modules.
-      ifNodeTarget(nodeExternals({
-        // NOTE: !!!
-        // However the node_modules may contain files that will rely on our
-        // webpack loaders in order to be used/resolved, for example CSS or
-        // SASS. For these cases please make sure that the file extensions
-        // are added to the below list. We have added the most common formats.
-        whitelist: [
-          (val) => {
-            if (val === 'olymp') return true;
-            if (val.indexOf('olymp/') === 0) return true;
-            if (val.indexOf('olymp-') === 0) return true;
-            return undefined;
-          },
-          /\.(eot|woff|woff2|ttf|otf)$/,
-          /\.(svg|png|jpg|jpeg|gif|ico)$/,
-          /\.(mp4|mp3|ogg|swf|webp)$/,
-          /\.(css|scss|sass|sss|less)$/,
-          /react/,
-        ],
-      })),
+      ifNode(
+        () => nodeExternals(
+          // Some of our node_modules may contain files that depend on webpack
+          // loaders, e.g. CSS or SASS.
+          // For these cases please make sure that the file extensions are
+          // registered within the following configuration setting.
+          { whitelist: config.nodeBundlesIncludeNodeModuleFileTypes },
+        ),
+      ),
     ]),
-    devtool: ifElse(isNodeTarget || isDev)(
-      // We want to be able to get nice stack traces when running our server
-      // bundle.  To fully support this we'll also need to configure the
-      // `node-source-map-support` module to execute at the start of the server
-      // bundle.  This module will allow the node to make use of the
-      // source maps.
-      // We also want to be able to link to the source in chrome dev tools
-      // whilst we are in development mode. :)
+
+    // Source map settings.
+    devtool: ifElse(
+        // Include source maps for ANY node bundle so that we can support
+        // nice stack traces for errors (the source maps get consumed by
+        // the `node-source-map-support` module to allow for this).
+        isNode
+        // Always include source maps for any development build.
+        || isDev
+        // Allow for the following flag to force source maps even for production
+        // builds.
+        || config.includeSourceMapsForProductionBuilds,
+      )(
+      // Produces an external source map (lives next to bundle output files).
       'source-map',
-      // When in production client mode we don't want any source maps to
-      // decrease our payload sizes.
-      // This form has almost no cost.
-      'hidden-source-map'
+      // Produces no source map.
+      'hidden-source-map',
     ),
+
+    // Performance budget feature.
+    // This enables checking of the output bundle size, which will result in
+    // warnings/errors if the bundle sizes are too large.
+    // We only want this enabled for our production client.  Please
+    // see the webpack docs on how you can configure this to your own needs:
+    // https://webpack.js.org/configuration/performance/
+    performance: ifProdClient(
+      // Enable webpack's performance hints for production client builds.
+      { hints: 'warning' },
+      // Else we have to set a value of "false" if we don't want the feature.
+      false,
+    ),
+
     // Define our entry chunks for our bundle.
-    entry: merge(
+    entry: {
+      // We name our entry files "index" as it makes it easier for us to
+      // target specific bundle output files as each bundle output will get
+      // an output path similar to:
+      //   ./build/server/index.js
+      // This makes importing of the output module as simple as:
+      //   import server from './build/server';
+      index: removeEmpty([
+        // Required to support hot reloading of our client.
+        ifDevClient('react-hot-loader/patch'),
+        // Required to support hot reloading of our client.
+        ifDevClient(() => `webpack-hot-middleware/client?reload=true&path=http://${config.host}:${config.clientDevServerPort}/__webpack_hmr`),
+        // We are using polyfill.io instead of the very heavy babel-polyfill.
+        // Therefore we need to add the regenerator-runtime as the babel-polyfill
+        // included this, which polyfill.io doesn't include.
+        ifClient('regenerator-runtime/runtime'),
+        // The source entry file for the bundle.
+        bundleConfig.srcEntryFile.indexOf('.') === 0 ? path.resolve(appRootDir.get(), bundleConfig.srcEntryFile) : bundleConfig.srcEntryFile,
+      ]),
+    },
+
+    // Bundle output configuration.
+    output: merge(
       {
-        index: removeEmpty([
-          ifDevClient('react-hot-loader/patch'),
-          ifDevClient(`webpack-hot-middleware/client?reload=true&path=http://localhost:${envVars.CLIENT_DEVSERVER_PORT}/__webpack_hmr`),
-          // We are using polyfill.io instead of the very heavy babel-polyfill.
-          // Therefore we need to add the regenerator-runtime as the babel-polyfill
-          // included this, which polyfill.io doesn't include.
-          // ifClient('babel-polyfill'),
-          ifClient('regenerator-runtime/runtime'),
-          path.resolve(__dirname, `../../src/${target}/index.js`),
-        ]),
-      }
-    ),
-    output: {
-      // The dir in which our bundle should be output.
-      path: path.resolve(appRootPath, envVars.BUNDLE_OUTPUT_PATH, `./${target}`),
-      // The filename format for our bundle's entries.
-      filename: ifProdClient(
-        // We include a hash for client caching purposes.  Including a unique
-        // has for every build will ensure browsers always fetch our newest
-        // bundle.
-        '[name]-[chunkhash].js',
-        // We want a determinable file name when running our server bundles,
-        // as we need to be able to target our server start file from our
-        // npm scripts.  We don't care about caching on the server anyway.
-        // We also want our client development builds to have a determinable
-        // name for our hot reloading client bundle server.
-        '[name].js'
-      ),
-      chunkFilename: '[name]-[chunkhash].js',
-      // This is the web path under which our webpack bundled output should
+        // The dir in which our bundle should be output.
+        path: bundleConfig.outputPath.indexOf('.') === 0 ? path.resolve(appRootDir.get(), bundleConfig.outputPath) : bundleConfig.outputPath,
+        // The filename format for our bundle's entries.
+        filename: ifProdClient(
+          // For our production client bundles we include a hash in the filename.
+          // That way we won't hit any browser caching issues when our bundle
+          // output changes.
+          // Note: as we are using the WebpackMd5Hash plugin, the hashes will
+          // only change when the file contents change. This means we can
+          // set very aggressive caching strategies on our bundle output.
+          '[name]-[chunkhash].js',
+          // For any other bundle (typically a server/node) bundle we want a
+          // determinable output name to allow for easier importing/execution
+          // of the bundle by our scripts.
+          '[name].js',
+        ),
+        // The name format for any additional chunks produced for the bundle.
+        chunkFilename: '[name]-[chunkhash].js',
+        // When in node mode we will output our bundle as a commonjs2 module.
+        libraryTarget: ifNode('commonjs2', 'var'),
+      },
+      // This is the web path under which our webpack bundled client should
       // be considered as being served from.
-      publicPath: ifDev(
-        // As we run a seperate server for our client and server bundles we
-        // need to use an absolute http path for our assets public path.
-        `http://localhost:${envVars.CLIENT_DEVSERVER_PORT}${envVars.CLIENT_BUNDLE_HTTP_PATH}`,
-        // Otherwise we expect our bundled output to be served from this path.
-        envVars.CLIENT_BUNDLE_HTTP_PATH
-      ),
-      // When in server mode we will output our bundle as a commonjs2 module.
-      libraryTarget: ifNodeTarget('commonjs2', 'var'),
-    },
+      // We only need to set this for our server/client bundles as the server
+      // bundle is the application that serves the client bundle.
+      ifElse(isServer || isClient)(() => ({
+        publicPath: ifDev(
+          // As we run a seperate development server for our client and server
+          // bundles we need to use an absolute http path for the public path.
+          `http://${config.host}:${config.clientDevServerPort}${config.bundles.client.webPath}`,
+          // Otherwise we expect our bundled client to be served from this path.
+          bundleConfig.webPath,
+        ),
+      })),
+    ),
+
     resolve: {
-      symlinks: false,
-      modules: [
-        path.resolve(appRootPath, 'node_modules'),
-        path.resolve(__dirname, 'node_modules'),
-      ],
-      alias,
+      alias: Object.keys(config.alias || {}).reduce((store, key) => {
+        store[key] = config.alias[key].indexOf('.') === 0 ? path.resolve(appRootDir.get(), config.alias[key]) : config.alias[key];
+        return store;
+      }, {}),
       // These extensions are tried when resolving a file.
-      extensions: [
-        '.js',
-        '.jsx',
-        '.json',
-      ],
+      extensions: config.bundleSrcTypes.map(ext => `.${ext}`),
     },
+
     plugins: removeEmpty([
-      ifProdClient(new LodashModuleReplacementPlugin({
-        collections: true,
-        shorthands: true,
-      })),
-      ifProdClient(new webpack.ContextReplacementPlugin(/moment[/\\]locale$/, /de/)),
-      new CodeSplitPlugin({
-        // The code-split-component doesn't work nicely with hot module reloading,
-        // which we use in our development builds, so we will disable it (which
-        // ensures synchronously behaviour on the CodeSplit instances).
-        disabled: isDev,
-      }),
+      // Required support for code-split-component, which provides us with our
+      // code splitting functionality.
+      //
+      // The code-split-component doesn't work nicely with React Hot Loader,
+      // which we use in our development builds, so we will disable it (which
+      // causes synchronous loading behaviour for the CodeSplit instances).
+      ifProd(() => new CodeSplitPlugin()),

       // We use this so that our generated [chunkhash]'s are only different if
       // the content for our respective chunks have changed.  This optimises
       // our long term browser caching strategy for our client bundle, avoiding
       // cases where browsers end up having to download all the client chunks
       // even though 1 or 2 may have only changed.
-      ifClient(new WebpackMd5Hash()),
+      ifClient(() => new WebpackMd5Hash()),

       // The DefinePlugin is used by webpack to substitute any patterns that it
       // finds within the code with the respective value assigned below.
