var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};
var webpack = require('webpack');
var path = require('path');
var fs = require('fs');
var AssetsPlugin = require('assets-webpack-plugin');
var ProgressBarPlugin = require('progress-bar-webpack-plugin');
var nodeExternals = require('webpack-node-externals');
var StartServerPlugin = require('start-server-webpack-plugin');
var ReloadServerPlugin = require('reload-server-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var OfflinePlugin = require('offline-plugin');
var VisualizerPlugin = require('webpack-visualizer-plugin');
var GenerateJsonPlugin = require('generate-json-webpack-plugin');
var appRoot = process.cwd();
var topFolder = path.resolve(__dirname, '..');
var isLinked = path.basename(topFolder) === 'packages';
var nodeModules = isLinked
    ? path.resolve(__dirname, 'node_modules')
    : path.resolve(__dirname, '..');
process.noDeprecation = true;
var allPackages = !isLinked
    ? []
    : fs.readdirSync(topFolder).filter(function (x) { return x[0] !== '.'; });
var pluginsFolder = !isLinked ? nodeModules : topFolder;
module.exports = function (_a) {
    var mode = _a.mode, target = _a.target, devUrl = _a.devUrl, devPort = _a.devPort, ssr = _a.ssr, serverless = _a.serverless, _b = _a.plugins, plugins = _b === void 0 ? [] : _b, rest = __rest(_a, ["mode", "target", "devUrl", "devPort", "ssr", "serverless", "plugins"]);
    var isDev = mode !== 'production';
    var isProd = mode === 'production';
    var isWeb = target !== 'node';
    var isElectron = target === 'electron';
    var isNode = target === 'node';
    var isServerless = serverless === true || isElectron;
    var isSSR = ssr !== false && !serverless;
    var folder = isDev ? '.dev' : '.dist';
    var config = {
        cache: true,
        resolve: {
            extensions: ['.js', '.ts', '.tsx'],
            modules: [
                path.resolve(appRoot, 'node_modules'),
                path.resolve(appRoot, 'app'),
            ],
            alias: __assign({ '@history': isServerless
                    ? 'history/createHashHistory'
                    : isNode
                        ? 'history/createMemoryHistory'
                        : 'history/createBrowserHistory', react: path.resolve(appRoot, 'node_modules', 'react'), 'react-dom': path.resolve(appRoot, 'node_modules', 'react-dom'), '@root': appRoot, '@app': isNode && !isSSR
                    ? path.resolve(__dirname, 'noop')
                    : path.resolve(appRoot, 'app') }, allPackages.reduce(function (obj, item) {
                if (item === 'core') {
                    obj.olymp = path.resolve(topFolder, item);
                }
                else {
                    obj["olymp-" + item] = path.resolve(topFolder, item);
                }
                return obj;
            }, {})),
        },
        resolveLoader: {
            modules: [
                path.resolve(nodeModules),
                path.resolve(appRoot, 'node_modules'),
            ],
        },
        plugins: [
            new webpack.DefinePlugin({
                'process.env.SSR': JSON.stringify(isSSR),
                'process.env.SERVERLESS': JSON.stringify(isServerless),
                'process.env.NODE_ENV': JSON.stringify(mode),
                'process.env.DEV_PORT': JSON.stringify(devPort),
                'process.env.DEV_URL': devUrl
                    ? JSON.stringify(devUrl.origin)
                    : undefined,
                'process.env.IS_WEB': isWeb ? JSON.stringify(true) : undefined,
                'process.env.IS_NODE': isNode ? JSON.stringify(true) : undefined,
                'process.env.IS_ELECTRON': isElectron
                    ? JSON.stringify(true)
                    : undefined,
            }),
            new webpack.ContextReplacementPlugin(/moment[/\\]locale$/, /de/),
            new webpack.NamedModulesPlugin(),
            new ProgressBarPlugin(),
            new webpack.NoEmitOnErrorsPlugin(),
        ],
        module: {
            rules: [
                {
                    test: /\.html$/,
                    loader: 'file-loader?name=[name].[ext]',
                },
                {
                    test: /\.(jpg|jpeg|png|gif|eot|ttf|woff|woff2)$/,
                    loader: 'url-loader',
                    options: {
                        limit: 20000,
                    },
                },
                {
                    test: /\.(txt|md)$/,
                    loader: 'raw-loader',
                },
                {
                    test: /\.json$/,
                    loader: 'json-loader',
                },
                {
                    test: /\.(graphql|gql)$/,
                    exclude: /node_modules/,
                    loader: 'graphql-tag/loader',
                },
            ],
        },
        output: {
            path: path.resolve(appRoot, folder, target),
        },
        entry: {
            main: [],
        },
    };
    if (!isNode) {
        config.plugins.push(new webpack.DefinePlugin({
            'process.env.AMP': process.env.AMP
                ? JSON.stringify(process.env.AMP)
                : undefined,
            'process.env.GM_KEY': JSON.stringify(process.env.GM_KEY),
            'process.env.GRAPHQL_URL': process.env.GRAPHQL_URL
                ? JSON.stringify(process.env.GRAPHQL_URL)
                : undefined,
            'process.env.URL': process.env.URL
                ? JSON.stringify(process.env.URL)
                : undefined,
            'process.env.FILESTACK_KEY': process.env.FILESTACK_KEY
                ? JSON.stringify(process.env.FILESTACK_KEY)
                : undefined,
        }));
    }
    config.devtool = 'source-map';
    if (isProd && isWeb && !isElectron) {
        config.output.filename = '[name].[contenthash].js';
    }
    else {
        config.output.filename = '[name].js';
    }
    if (isNode) {
        config.target = 'node';
        config.watch = isDev;
        config.node = {
            __dirname: false,
            __filename: false,
        };
        config.output.libraryTarget = 'commonjs2';
    }
    else if (isElectron) {
        config.target = 'electron-main';
        config.node = {
            __dirname: false,
            __filename: false,
        };
        config.output.libraryTarget = 'commonjs2';
    }
    else {
        config.target = 'web';
        config.node = {
            __dirname: true,
            __filename: true,
        };
        config.output.libraryTarget = 'var';
    }
    if (isDev && isWeb) {
        config.output.publicPath = devUrl.href;
    }
    else {
        config.output.publicPath = '/';
    }
    if (isWeb && isProd) {
        config.plugins.push(new webpack.optimize.OccurrenceOrderPlugin());
        if (isElectron) {
            config.plugins.push(new GenerateJsonPlugin('package.json', {}));
        }
        config.plugins.push(new webpack.LoaderOptionsPlugin({
            minimize: true,
            debug: false,
        }));
        config.plugins.push(new webpack.optimize.UglifyJsPlugin({
            compress: {
                screw_ie8: true,
                warnings: false,
            },
            mangle: {
                screw_ie8: true,
            },
            output: {
                comments: false,
                screw_ie8: true,
            },
            sourceMap: false,
        }));
    }
    if (isNode) {
        if (isDev) {
            config.plugins.push(new StartServerPlugin('main.js'));
        }
        config.plugins.push(new webpack.BannerPlugin({
            banner: 'require("source-map-support").install();',
            raw: true,
            entryOnly: true,
        }));
    }
    else {
        config.plugins.push(new AssetsPlugin({
            filename: 'assets.json',
            path: path.resolve(process.cwd(), folder, target),
        }));
        if (isProd && !isServerless) {
            config.plugins.push(new HtmlWebpackPlugin({
                filename: 'offline.html',
                template: path.resolve(__dirname, 'templates', 'default.js'),
                inject: false,
            }));
            config.plugins.push(new OfflinePlugin({
                responseStrategy: 'network-first',
                externals: [
                    'https://cdn.polyfill.io/v2/polyfill.min.js?callback=POLY',
                ],
                caches: 'all',
                ServiceWorker: {
                    events: true,
                    navigateFallbackURL: '/offline.html',
                },
                AppCache: false,
            }));
            config.plugins.push(new VisualizerPlugin({
                filename: './visualizer.html',
            }));
        }
        else if (isServerless) {
            config.plugins.push(new HtmlWebpackPlugin({
                filename: 'index.html',
                template: path.resolve(__dirname, 'templates', isElectron ? 'electron.js' : 'serverless.js'),
                inject: false,
            }));
        }
    }
    if (isDev) {
        config.plugins.push(new webpack.HotModuleReplacementPlugin());
    }
    if (isDev || isNode || isElectron) {
        config.plugins.push(new webpack.optimize.LimitChunkCountPlugin({ maxChunks: 1 }));
        config.output.filename = '[name].js';
    }
    else {
        config.output.filename = '[name].[chunkhash].js';
        config.output.chunkFilename = '[name].[chunkhash].js';
    }
    if (isNode) {
        config.externals = allPackages
            .map(function (x) { return path.resolve(topFolder, x, 'node_modules'); })
            .concat([path.resolve(appRoot, 'node_modules')])
            .map(function (modulesDir) {
            return nodeExternals({
                modulesDir: modulesDir,
                whitelist: [
                    function (v) { return v.indexOf('webpack/hot/poll') === 0; },
                    'source-map-support/register',
                    function (v) { return v.indexOf('olymp-') === 0; },
                    /\.(eot|woff|woff2|ttf|otf)$/,
                    /\.(svg|png|jpg|jpeg|gif|ico)$/,
                    /\.(mp4|mp3|ogg|swf|webp)$/,
                    /\.(css|scss|sass|sss|less)$/,
                ],
            });
        });
    }
    if (isWeb && isDev) {
        config.entry.main = [
            'react-hot-loader/patch',
            "webpack-dev-server/client?" + config.output.publicPath,
            'webpack/hot/only-dev-server',
            require.resolve(path.resolve(__dirname, target)),
        ];
    }
    else if (isNode && isDev) {
        config.entry.main = [
            'webpack/hot/poll?1000',
            require.resolve(path.resolve(__dirname, target)),
        ];
    }
    else if (isElectron) {
        config.entry.main = [
            require.resolve(path.resolve(__dirname, 'web', 'index.js')),
        ];
        config.entry.app = [
            require.resolve(path.resolve(__dirname, 'electron', 'main.js')),
        ];
    }
    else {
        config.entry.main = [
            require.resolve(path.resolve(__dirname, target, 'index.js')),
        ];
    }
    var options = __assign({ target: target,
        folder: folder,
        isProd: isProd,
        isWeb: isWeb,
        isElectron: isElectron,
        isNode: isNode,
        isServerless: isServerless,
        isSSR: isSSR,
        appRoot: appRoot,
        nodeModules: nodeModules,
        isLinked: isLinked }, rest);
    return plugins.reduce(function (store, plugin) {
        var req = require(path.resolve(pluginsFolder, isLinked ? "webpack-" + plugin : "olymp-webpack-" + plugin));
        return req(config, options) || config;
    }, config);
};
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhY2thZ2VzL2NvcmUvd2VicGFjay1jb25maWcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFNLE9BQU8sR0FBRyxPQUFPLENBQUMsU0FBUyxDQUFDLENBQUM7QUFDbkMsSUFBTSxJQUFJLEdBQUcsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0FBQzdCLElBQU0sRUFBRSxHQUFHLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztBQUN6QixJQUFNLFlBQVksR0FBRyxPQUFPLENBQUMsdUJBQXVCLENBQUMsQ0FBQztBQUN0RCxJQUFNLGlCQUFpQixHQUFHLE9BQU8sQ0FBQyw2QkFBNkIsQ0FBQyxDQUFDO0FBQ2pFLElBQU0sYUFBYSxHQUFHLE9BQU8sQ0FBQyx3QkFBd0IsQ0FBQyxDQUFDO0FBQ3hELElBQU0saUJBQWlCLEdBQUcsT0FBTyxDQUFDLDZCQUE2QixDQUFDLENBQUM7QUFDakUsSUFBTSxrQkFBa0IsR0FBRyxPQUFPLENBQUMsOEJBQThCLENBQUMsQ0FBQztBQUNuRSxJQUFNLGlCQUFpQixHQUFHLE9BQU8sQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDO0FBQ3pELElBQU0sYUFBYSxHQUFHLE9BQU8sQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO0FBQ2hELElBQU0sZ0JBQWdCLEdBQUcsT0FBTyxDQUFDLDJCQUEyQixDQUFDLENBQUM7QUFDOUQsSUFBTSxrQkFBa0IsR0FBRyxPQUFPLENBQUMsOEJBQThCLENBQUMsQ0FBQztBQUVuRSxJQUFNLE9BQU8sR0FBRyxPQUFPLENBQUMsR0FBRyxFQUFFLENBQUM7QUFFOUIsSUFBTSxTQUFTLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLENBQUM7QUFDaEQsSUFBTSxRQUFRLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsS0FBSyxVQUFVLENBQUM7QUFDekQsSUFBTSxXQUFXLEdBQUcsUUFBUTtNQUN4QixJQUFJLENBQUMs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LE1BQU0sUUFBQTtRQUNOLFlBQVksY0FBQTtRQUNaLEtBQUssT0FBQTtRQUNMLE9BQU8sU0FBQTtRQUNQLFdBQVcsYUFBQTtRQUNYLFFBQVEsVUFBQSxJQUNMLElBQUksQ0FDUixDQUFDO0lBQ0YsTUFBTSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsVUFBQyxLQUFLLEVBQUUsTUFBTTtRQUNsQyxJQUFNLEdBQUcsR0FBRyxPQUFPLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FDOUIsYUFBYSxFQUNiLFFBQVEsR0FBRyxhQUFXLE1BQVEsR0FBRyxtQkFBaUIsTUFBUSxDQUMzRCxDQUFDLENBQUM7UUFDSCxNQUFNLENBQUMsR0FBRyxDQUFDLE1BQU0sRUFBRSxPQUFPLENBQUMsSUFBSSxNQUFNLENBQUM7SUFDeEMsQ0FBQyxFQUFFLE1BQU0sQ0FBQyxDQUFDO0FBQ2IsQ0FBQyxDQUFDIiwiZmlsZSI6InBhY2thZ2VzL2NvcmUvd2VicGFjay1jb25maWcuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCB3ZWJwYWNrID0gcmVxdWlyZSgnd2VicGFjaycpO1xuY29uc3QgcGF0aCA9IHJlcXVpcmUoJ3BhdGgnKTtcbmNvbnN0IGZzID0gcmVxdWlyZSgnZnMnKTtcbmNvbnN0IEFzc2V0c1BsdWdpbiA9IHJlcXVpcmUoJ2Fzc2V0cy13ZWJwYWNrLXBsdWdpbicpO1xuY29uc3QgUHJvZ3Jlc3NCYXJQbHVnaW4gPSByZXF1aXJlKCdwcm9ncmVzcy1iYXItd2VicGFjay1wbHVnaW4nKTtcbmNvbnN0IG5vZGVFeHRlcm5hbHMgPSByZXF1aXJlKCd3ZWJwYWNrLW5vZGUtZXh0ZXJuYWxzJyk7XG5jb25zdCBTdGFydFNlcnZlclBsdWdpbiA9IHJlcXVpcmUoJ3N0YXJ0LXNlcnZlci13ZWJwYWNrLXBsdWdpbicpO1xuY29uc3QgUmVsb2FkU2VydmVyUGx1Z2luID0gcmVxdWlyZSgncmVsb2FkLXNlcnZlci13ZWJwYWNrLXBsdWdpbicpO1xuY29uc3QgSHRtbFdlYnBhY2tQbHVnaW4gPSByZXF1aXJlKCdodG1sLXdlYnBhY2stcGx1Z2luJyk7XG5jb25zdCBPZmZsaW5lUGx1Z2luID0gcmVxdWlyZSgnb2ZmbGluZS1wbHVnaW4nKTtcbmNvbnN0IFZpc3VhbGl6ZXJQbHVnaW4gPSByZXF1aXJlKCd3ZWJwYWNrLXZpc3VhbGl6ZXItcGx1Z2luJyk7XG5jb25zdCBHZW5lcmF0ZUpzb25QbHVnaW4gPSByZXF1aXJlKCdnZW5lcmF0ZS1qc29uLXdlYnBhY2stcGx1Z2luJyk7XG5cbmNvbnN0IGFwcFJvb3QgPSBwcm9jZXNzLmN3ZCgpO1xuXG5jb25zdCB0b3BGb2xkZXIgPSBwYXRoLnJlc29sdmUoX19kaXJuYW1lLCAnLi4nKTtcbmNvbnN0IGlzTGlua2VkID0gcGF0aC5iYXNlbmFtZSh0b3BGb2xkZXIpID09PSAncGFja2FnZXMnO1xuY29uc3Qgbm9kZU1vZHVsZXMgPSBpc0xpbmtlZFxuICA/IHBhdGgucmVzb2x2ZShfX2Rpcm5hbWUsICdub2RlX21vZHVsZXMnKVxuICA6IHBhdGgucmVzb2x2ZShfX2Rpcm5hbWUsICcuLicpO1xucHJvY2Vzcy5ub0RlcHJlY2F0aW9uID0gdHJ1ZTtcbmNvbnN0IGFsbFBhY2thZ2VzID0gIWlzTGlua2VkXG4gID8gW11cbiAgOiBmcy5yZWFkZGlyU3luYyh0b3BGb2xkZXIpLmZpbHRlcih4ID0+IHhbMF0gIT09ICcuJyk7XG5jb25zdCBwbHVnaW5zRm9sZGVyID0gIWlzTGlua2VkID8gbm9kZU1vZHVsZXMgOiB0b3BGb2xkZXI7XG5cbm1vZHVsZS5leHBvcnRzID0gKHtcbiAgbW9kZSxcbiAgdGFyZ2V0LFxuICBkZXZVcmwsXG4gIGRldlBvcnQsXG4gIHNzcixcbiAgc2VydmVybGVzcyxcbiAgcGx1Z2lucyA9IFtdLFxuICAuLi5yZXN0LFxufSkgPT4ge1xuICBjb25zdCBpc0RldiA9IG1vZGUgIT09ICdwcm9kdWN0aW9uJztcbiAgY29uc3QgaXNQcm9kID0gbW9kZSA9PT0gJ3Byb2R1Y3Rpb24nO1xuICBjb25zdCBpc1dlYiA9IHRhcmdldCAhPT0gJ25vZGUnO1xuICBjb25zdCBpc0VsZWN0cm9uID0gdGFyZ2V0ID09PSAnZWxlY3Ryb24nO1xuICBjb25zdCBpc05vZGUgPSB0YXJnZXQgPT09ICdub2RlJztcbiAgY29uc3QgaXNTZXJ2ZXJsZXNzID0gc2VydmVybGVzcyA9PT0gdHJ1ZSB8fCBpc0VsZWN0cm9uO1xuICBjb25zdCBpc1NTUiA9IHNzciAhPT0gZmFsc2UgJiYgIXNlcnZlcmxlc3M7XG4gIGNvbnN0IGZvbGRlciA9IGlzRGV2ID8gJy5kZXYnIDogJy5kaXN0JztcblxuICBjb25zdCBjb25maWcgPSB7XG4gICAgY2FjaGU6IHRydWUsXG4gICAgcmVzb2x2ZToge1xuICAgICAgZXh0ZW5zaW9uczogWycuanMnLCAnLnRzJywgJy50c3gnXSxcbiAgICAgIG1vZHVsZXM6IFtcbiAgICAgICAgcGF0aC5yZXNvbHZlKGFwcFJvb3QsICdub2RlX21vZHVsZXMnKSxcbiAgICAgICAgcGF0aC5yZXNvbHZlKGFwcFJvb3QsICdhcHAnKSxcbiAgICAgIF0sXG4gICAgICBhbGlhczoge1xuICAgICAgICAnQGhpc3RvcnknOiBpc1NlcnZlcmxlc3NcbiAgICAgICAgICA/ICdoaXN0b3J5L2NyZWF0ZUhhc2hIaXN0b3J5J1xuICAgICAgICAgIDogaXNOb2RlXG4gICAgICAgICAgICA/ICdoaXN0b3J5L2NyZWF0ZU1lbW9yeUhpc3RvcnknXG4gICAgICAgICAgICA6ICdoaXN0b3J5L2NyZWF0ZUJyb3dzZXJIaXN0b3J5JyxcbiAgICAgICAgcmVhY3Q6IHBhdGgucmVzb2x2ZShhcHBSb290LCAnbm9kZV9tb2R1bGVzJywgJ3JlYWN0JyksXG4gICAgICAgIC8vICdjb3JlLWpzJzogcGF0aC5yZXNvbHZlKGFwcFJvb3QsICdub2RlX21vZHVsZXMnLCAnY29yZS1qcycpLFxuICAgICAgICAncmVhY3QtZG9tJzogcGF0aC5yZXNvbHZlKGFwcFJvb3QsICdub2RlX21vZHVsZXMnLCAncmVhY3QtZG9tJyksXG4gICAgICAgIC8vICdyZWFjdC1yb3V0ZXInOiBwYXRoLnJlc29sdmUoYXBwUm9vdCwgJ25vZGVfbW9kdWxlcycsICdyZWFjdC1yb3V0ZXInKSxcbiAgICAgICAgLy8gbW9tZW50OiBwYXRoLnJlc29sdmUoYXBwUm9vdCwgJ25vZGVfbW9kdWxlcycsICdtb21lbnQnKSxcbiAgICAgICAgLy8gbG9kYXNoOiBwYXRoLnJlc29sdmUoYXBwUm9vdCwgJ25vZGVfbW9kdWxlcycsICdsb2Rhc2gnKSxcbiAgICAgICAgJ0Byb290JzogYXBwUm9vdCxcbiAgICAgICAgJ0BhcHAnOlxuICAgICAgICAgIGlzTm9kZSAmJiAhaXNTU1JcbiAgICAgICAgICAgID8gcGF0aC5yZXNvbHZlKF9fZGlybmFtZSwgJ25vb3AnKVxuICAgICAgICAgICAgOiBwYXRoLnJlc29sdmUoYXBwUm9vdCwgJ2FwcCcpLFxuICAgICAgICAuLi5hbGxQYWNrYWdlcy5yZWR1Y2UoKG9iaiwgaXRlbSkgPT4ge1xuICAgICAgICAgIC8vIGdldCBhbGwgZm9sZGVycyBpbiBzcmMgYW5kIGNyZWF0ZSAnb2x5bXAteHh4JyBhbGlhc1xuICAgICAgICAgIGlmIChpdGVtID09PSAnY29yZScpIHtcbiAgICAgICAgICAgIG9iai5vbHltcCA9IHBhdGgucmVzb2x2ZSh0b3BGb2xkZXIsIGl0ZW0pO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBvYmpbYG9seW1wLSR7aXRlbX1gXSA9IHBhdGgucmVzb2x2ZSh0b3BGb2xkZXIsIGl0ZW0pO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gb2JqO1xuICAgICAgICB9LCB7fSksXG4gICAgICB9LFxuICAgIH0sXG4gICAgcmVzb2x2ZUxvYWRlcjoge1xuICAgICAgbW9kdWxlczogW1xuICAgICAgICBwYXRoLnJlc29sdmUobm9kZU1vZHVsZXMpLFxuICAgICAgICBwYXRoLnJlc29sdmUoYXBwUm9vdCwgJ25vZGVfbW9kdWxlcycpLFxuICAgICAgXSxcbiAgICB9LFxuICAgIHBsdWdpbnM6IFtcbiAgICAgIC8vIG5ldyB3ZWJwYWNrLm9wdGltaXplLk1vZHVsZUNvbmNhdGVuYXRpb25QbHVnaW4oKSxcbiAgICAgIG5ldyB3ZWJwYWNrLkRlZmluZVBsdWdpbih7XG4gICAgICAgICdwcm9jZXNzLmVudi5TU1InOiBKU09OLnN0cmluZ2lmeShpc1NTUiksXG4gICAgICAgICdwcm9jZXNzLmVudi5TRVJWRVJMRVNTJzogSlNPTi5zdHJpbmdpZnkoaXNTZXJ2ZXJsZXNzKSxcbiAgICAgICAgJ3Byb2Nlc3MuZW52Lk5PREVfRU5WJzogSlNPTi5zdHJpbmdpZnkobW9kZSksXG4gICAgICAgICdwcm9jZXNzLmVudi5ERVZfUE9SVCc6IEpTT04uc3RyaW5naWZ5KGRldlBvcnQpLFxuICAgICAgICAncHJvY2Vzcy5lbnYuREVWX1VSTCc6IGRldlVybFxuICAgICAgICAgID8gSlNPTi5zdHJpbmdpZnkoZGV2VXJsLm9yaWdpbilcbiAgICAgICAgICA6IHVuZGVmaW5lZCxcbiAgICAgICAgJ3Byb2Nlc3MuZW52LklTX1dFQic6IGlzV2ViID8gSlNPTi5zdHJpbmdpZnkodHJ1ZSkgOiB1bmRlZmluZWQsXG4gICAgICAgICdwcm9jZXNzLmVudi5JU19OT0RFJzogaXNOb2RlID8gSlNPTi5zdHJpbmdpZnkodHJ1ZSkgOiB1bmRlZmluZWQsXG4gICAgICAgICdwcm9jZXNzLmVudi5JU19FTEVDVFJPTic6IGlzRWxlY3Ryb25cbiAgICAgICAgICA/IEpTT04uc3RyaW5naWZ5KHRydWUpXG4gICAgICAgICAgOiB1bmRlZmluZWQsXG4gICAgICB9KSxcbiAgICAgIC8qbmV3IHdlYnBhY2suRGxsUGx1Z2luKHtcbiAgICAgICAgcGF0aDogcGF0aC5yZXNvbHZlKGFwcFJvb3QsIGZvbGRlciwgdGFyZ2V0LCBgW25hbWVdLW1hbmlmZXN0Lmpzb25gKSxcbiAgICAgICAgbGlicmFyeTogJ1tuYW1lXScsXG4gICAgICAgIGZpbGVuYW1lOiAnW25hbWVdLmpzJyxcbiAgICAgICAgbmFtZTogJ1tuYW1lXV9saWInLFxuICAgICAgfSksKi9cbiAgICAgIC8vIG5ldyBQcmVwYWNrV2VicGFja1BsdWdpbih7IH0pLFxuICAgICAgbmV3IHdlYnBhY2suQ29udGV4dFJlcGxhY2VtZW50UGx1Z2luKC9tb21lbnRbL1xcXFxdbG9jYWxlJC8sIC9kZS8pLFxuICAgICAgbmV3IHdlYnBhY2suTmFtZWRNb2R1bGVzUGx1Z2luKCksXG4gICAgICBuZXcgUHJvZ3Jlc3NCYXJQbHVnaW4oKSxcbiAgICAgIG5ldyB3ZWJwYWNrLk5vRW1pdE9uRXJyb3JzUGx1Z2luKCksXG4gICAgICAvLyBuZXcgQ2hlY2tlclBsdWdpbigpLFxuICAgIF0sXG4gICAgbW9kdWxlOiB7XG4gICAgICBydWxlczogW1xuICAgICAgICB7XG4gICAgICAgICAgdGVzdDogL1xcLmh0bWwkLyxcbiAgICAgICAgICBsb2FkZXI6ICdmaWxlLWxvYWRlcj9uYW1lPVtuYW1lXS5bZXh0XScsXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICB0ZXN0OiAvXFwuKGpwZ3xqcGVnfHBuZ3xnaWZ8ZW90fHR0Znx3b2ZmfHdvZmYyKSQvLFxuICAgICAgICAgIGxvYWRlcjogJ3VybC1sb2FkZXInLFxuICAgICAgICAgIG9wdGlvbnM6IHtcbiAgICAgICAgICAgIGxpbWl0OiAyMDAwMCxcbiAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgdGVzdDogL1xcLih0eHR8bWQpJC8sXG4gICAgICAgICAgbG9hZGVyOiAncmF3LWxvYWRlcicsXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICB0ZXN0OiAvXFwuanNvbiQvLFxuICAgICAgICAgIGxvYWRlcjogJ2pzb24tbG9hZGVyJyxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIHRlc3Q6IC9cXC4oZ3JhcGhxbHxncWwpJC8sXG4gICAgICAgICAgZXhjbHVkZTogL25vZGVfbW9kdWxlcy8sXG4gICAgICAgICAgbG9hZGVyOiAnZ3JhcGhxbC10YWcvbG9hZGVyJyxcbiAgICAgICAgfSxcbiAgICAgIF0sXG4gICAgfSxcbiAgICBvdXRwdXQ6IHtcbiAgICAgIHBhdGg6IHBhdGgucmVzb2x2ZShhcHBSb290LCBmb2xkZXIsIHRhcmdldCksXG4gICAgfSxcbiAgICBlbnRyeToge1xuICAgICAgbWFpbjogW10sXG4gICAgfSxcbiAgfTtcblxuICBpZiAoIWlzTm9kZSkge1xuICAgIGNvbmZpZy5wbHVnaW5zLnB1c2goXG4gICAgICBuZXcgd2VicGFjay5EZWZpbmVQbHVnaW4oe1xuICAgICAgICAncHJvY2Vzcy5lbnYuQU1QJzogcHJvY2Vzcy5lbnYuQU1QXG4gICAgICAgICAgPyBKU09OLnN0cmluZ2lmeShwcm9jZXNzLmVudi5BTVApXG4gICAgICAgICAgOiB1bmRlZmluZWQsXG4gICAgICAgICdwcm9jZXNzLmVudi5HTV9LRVknOiBKU09OLnN0cmluZ2lmeShwcm9jZXNzLmVudi5HTV9LRVkpLFxuICAgICAgICAncHJvY2Vzcy5lbnYuR1JBUEhRTF9VUkwnOiBwcm9jZXNzLmVudi5HUkFQSFFMX1VSTFxuICAgICAgICAgID8gSlNPTi5zdHJpbmdpZnkocHJvY2Vzcy5lbnYuR1JBUEhRTF9VUkwpXG4gICAgICAgICAgOiB1bmRlZmluZWQsXG4gICAgICAgIC8qJ3Byb2Nlc3MuZW52LkdSQVBIUUxfU1VCJzogcHJvY2Vzcy5lbnYuR1JBUEhRTF9TVUJcbiAgICAgID8gSlNPTi5zdHJpbmdpZnkocHJvY2Vzcy5lbnYuR1JBUEhRTF9TVUIpXG4gICAgICA6IHVuZGVmaW5lZCwqL1xuICAgICAgICAncHJvY2Vzcy5lbnYuVVJMJzogcHJvY2Vzcy5lbnYuVVJMXG4gICAgICAgICAgPyBKU09OLnN0cmluZ2lmeShwcm9jZXNzLmVudi5VUkwpXG4gICAgICAgICAgOiB1bmRlZmluZWQsXG4gICAgICAgICdwcm9jZXNzLmVudi5GSUxFU1RBQ0tfS0VZJzogcHJvY2Vzcy5lbnYuRklMRVNUQUNLX0tFWVxuICAgICAgICAgID8gSlNPTi5zdHJpbmdpZnkocHJvY2Vzcy5lbnYuRklMRVNUQUNLX0tFWSlcbiAgICAgICAgICA6IHVuZGVmaW5lZCxcbiAgICAgIH0pXG4gICAgKTtcbiAgfVxuXG4gIC8vIGlubGluZS1zb3VyY2UtbWFwIGZvciB3ZWItZGV2XG4gIGNvbmZpZy5kZXZ0b29sID0gJ3NvdXJjZS1tYXAnO1xuXG4gIC8vIGlubGluZS1zb3VyY2UtbWFwIGZvciB3ZWItZGV2XG4gIGlmIChpc1Byb2QgJiYgaXNXZWIgJiYgIWlzRWxlY3Ryb24pIHtcbiAgICBjb25maWcub3V0cHV0LmZpbGVuYW1lID0gJ1tuYW1lXS5bY29udGVudGhhc2hdLmpzJztcbiAgfSBlbHNlIHtcbiAgICBjb25maWcub3V0cHV0LmZpbGVuYW1lID0gJ1tuYW1lXS5qcyc7XG4gIH1cblxuICAvLyB0YXJnZXQgJiYgbm9kZSBzZXR0aW5nc1xuICBpZiAoaXNOb2RlKSB7XG4gICAgY29uZmlnLnRhcmdldCA9ICdub2RlJztcbiAgICBjb25maWcud2F0Y2ggPSBpc0RldjtcbiAgICBjb25maWcubm9kZSA9IHtcbiAgICAgIF9fZGlybmFtZTogZmFsc2UsXG4gICAgICBfX2ZpbGVuYW1lOiBmYWxzZSxcbiAgICB9O1xuICAgIGNvbmZpZy5vdXRwdXQubGlicmFyeVRhcmdldCA9ICdjb21tb25qczInO1xuICB9IGVsc2UgaWYgKGlzRWxlY3Ryb24pIHtcbiAgICBjb25maWcudGFyZ2V0ID0gJ2VsZWN0cm9uLW1haW4nO1xuICAgIGNvbmZpZy5ub2RlID0ge1xuICAgICAgX19kaXJuYW1lOiBmYWxzZSxcbiAgICAgIF9fZmlsZW5hbWU6IGZhbHNlLFxuICAgIH07XG4gICAgY29uZmlnLm91dHB1dC5saWJyYXJ5VGFyZ2V0ID0gJ2NvbW1vbmpzMic7XG4gIH0gZWxzZSB7XG4gICAgY29uZmlnLnRhcmdldCA9ICd3ZWInO1xuICAgIGNvbmZpZy5ub2RlID0ge1xuICAgICAgX19kaXJuYW1lOiB0cnVlLFxuICAgICAgX19maWxlbmFtZTogdHJ1ZSxcbiAgICB9O1xuICAgIGNvbmZpZy5vdXRwdXQubGlicmFyeVRhcmdldCA9ICd2YXInO1xuICB9XG5cbiAgaWYgKGlzRGV2ICYmIGlzV2ViKSB7XG4gICAgY29uZmlnLm91dHB1dC5wdWJsaWNQYXRoID0gZGV2VXJsLmhyZWY7XG4gIH0gZWxzZSB7XG4gICAgY29uZmlnLm91dHB1dC5wdWJsaWNQYXRoID0gJy8nO1xuICB9XG5cbiAgLy8gd2VicGFjayBwbHVnaW5zXG4gIGlmIChpc1dlYiAmJiBpc1Byb2QpIHtcbiAgICBjb25maWcucGx1Z2lucy5wdXNoKG5ldyB3ZWJwYWNrLm9wdGltaXplLk9jY3VycmVuY2VPcmRlclBsdWdpbigpKTtcbiAgICAvLyBjb25maWcucGx1Z2lucy5wdXNoKG5ldyB3ZWJwYWNrLm9wdGltaXplLkRlZHVwZVBsdWdpbigpKTtcbiAgICBpZiAoaXNFbGVjdHJvbikge1xuICAgICAgY29uZmlnLnBsdWdpbnMucHVzaChuZXcgR2VuZXJhdGVKc29uUGx1Z2luKCdwYWNrYWdlLmpzb24nLCB7fSkpO1xuICAgIH1cbiAgICBjb25maWcucGx1Z2lucy5wdXNoKFxuICAgICAgbmV3IHdlYnBhY2suTG9hZGVyT3B0aW9uc1BsdWdpbih7XG4gICAgICAgIG1pbmltaXplOiB0cnVlLFxuICAgICAgICBkZWJ1ZzogZmFsc2UsXG4gICAgICB9KVxuICAgICk7XG4gICAgY29uZmlnLnBsdWdpbnMucHVzaChcbiAgICAgIG5ldyB3ZWJwYWNrLm9wdGltaXplLlVnbGlmeUpzUGx1Z2luKHtcbiAgICAgICAgY29tcHJlc3M6IHtcbiAgICAgICAgICBzY3Jld19pZTg6IHRydWUsXG4gICAgICAgICAgd2FybmluZ3M6IGZhbHNlLFxuICAgICAgICB9LFxuICAgICAgICBtYW5nbGU6IHtcbiAgICAgICAgICBzY3Jld19pZTg6IHRydWUsXG4gICAgICAgIH0sXG4gICAgICAgIG91dHB1dDoge1xuICAgICAgICAgIGNvbW1lbnRzOiBmYWxzZSxcbiAgICAgICAgICBzY3Jld19pZTg6IHRydWUsXG4gICAgICAgIH0sXG4gICAgICAgIHNvdXJjZU1hcDogZmFsc2UsXG4gICAgICB9KVxuICAgICk7XG4gIH1cbiAgaWYgKGlzTm9kZSkge1xuICAgIGlmIChpc0Rldikge1xuICAgICAgY29uZmlnLnBsdWdpbnMucHVzaChuZXcgU3RhcnRTZXJ2ZXJQbHVnaW4oJ21haW4uanMnKSk7XG4gICAgICAvKmNvbmZpZy5wbHVnaW5zLnB1c2goXG4gICAgICAgIG5ldyBSZWxvYWRTZXJ2ZXJQbHVnaW4oe1xuICAgICAgICAgIC8vIERlZmF1bHRzIHRvIHByb2Nlc3MuY3dkKCkgKyBcIi9zZXJ2ZXIuanNcIlxuICAgICAgICAgIHNjcmlwdDogcGF0aC5yZXNvbHZlKF9fZGlybmFtZSwgJ25vZGUnLCAnaW5kZXguanMnKSxcbiAgICAgICAgfSlcbiAgICAgICk7Ki9cbiAgICB9XG4gICAgY29uZmlnLnBsdWdpbnMucHVzaChcbiAgICAgIG5ldyB3ZWJwYWNrLkJhbm5lclBsdWdpbih7XG4gICAgICAgIGJhbm5lcjogJ3JlcXVpcmUoXCJzb3VyY2UtbWFwLXN1cHBvcnRcIikuaW5zdGFsbCgpOycsXG4gICAgICAgIHJhdzogdHJ1ZSxcbiAgICAgICAgZW50cnlPbmx5OiB0cnVlLFxuICAgICAgfSlcbiAgICApO1xuICB9IGVsc2Uge1xuICAgIGNvbmZpZy5wbHVnaW5zLnB1c2goXG4gICAgICBuZXcgQXNzZXRzUGx1Z2luKHtcbiAgICAgICAgZmlsZW5hbWU6ICdhc3NldHMuanNvbicsXG4gICAgICAgIHBhdGg6IHBhdGgucmVzb2x2ZShwcm9jZXNzLmN3ZCgpLCBmb2xkZXIsIHRhcmdldCksXG4gICAgICB9KVxuICAgICk7XG4gICAgaWYgKGlzUHJvZCAmJiAhaXNTZXJ2ZXJsZXNzKSB7XG4gICAgICBjb25maWcucGx1Z2lucy5wdXNoKFxuICAgICAgICBuZXcgSHRtbFdlYnBhY2tQbHVnaW4oe1xuICAgICAgICAgIGZpbGVuYW1lOiAnb2ZmbGluZS5odG1sJyxcbiAgICAgICAgICB0ZW1wbGF0ZTogcGF0aC5yZXNvbHZlKF9fZGlybmFtZSwgJ3RlbXBsYXRlcycsICdkZWZhdWx0LmpzJyksXG4gICAgICAgICAgaW5qZWN0OiBmYWxzZSxcbiAgICAgICAgICAvKiBtaW5pZnk6IHtcbiAgICAgICAgICByZW1vdmVDb21tZW50czogdHJ1ZSxcbiAgICAgICAgICBjb2xsYXBzZVdoaXRlc3BhY2U6IHRydWUsXG4gICAgICAgICAgcmVtb3ZlUmVkdW5kYW50QXR0cmlidXRlczogdHJ1ZSxcbiAgICAgICAgICB1c2VTaG9ydERvY3R5cGU6IHRydWUsXG4gICAgICAgICAgcmVtb3ZlRW1wdHlBdHRyaWJ1dGVzOiB0cnVlLFxuICAgICAgICAgIHJlbW92ZVN0eWxlTGlua1R5cGVBdHRyaWJ1dGVzOiB0cnVlLFxuICAgICAgICAgIGtlZXBDbG9zaW5nU2xhc2g6IHRydWUsXG4gICAgICAgICAgbWluaWZ5SlM6IHRydWUsXG4gICAgICAgICAgbWluaWZ5Q1NTOiB0cnVlLFxuICAgICAgICAgIG1pbmlmeVVSTHM6IHRydWUsXG4gICAgICAgIH0sKi9cbiAgICAgICAgfSlcbiAgICAgICk7XG4gICAgICBjb25maWcucGx1Z2lucy5wdXNoKFxuICAgICAgICBuZXcgT2ZmbGluZVBsdWdpbih7XG4gICAgICAgICAgcmVzcG9uc2VTdHJhdGVneTogJ25ldHdvcmstZmlyc3QnLFxuICAgICAgICAgIGV4dGVybmFsczogW1xuICAgICAgICAgICAgJ2h0dHBzOi8vY2RuLnBvbHlmaWxsLmlvL3YyL3BvbHlmaWxsLm1pbi5qcz9jYWxsYmFjaz1QT0xZJyxcbiAgICAgICAgICBdLFxuICAgICAgICAgIC8vIGF1dG9VcGRhdGU6IDEwMDAgKiA2MCAqIDUsXG4gICAgICAgICAgY2FjaGVzOiAnYWxsJyxcbiAgICAgICAgICBTZXJ2aWNlV29ya2VyOiB7XG4gICAgICAgICAgICBldmVudHM6IHRydWUsXG4gICAgICAgICAgICBuYXZpZ2F0ZUZhbGxiYWNrVVJMOiAnL29mZmxpbmUuaHRtbCcsXG4gICAgICAgICAgfSxcbiAgICAgICAgICBBcHBDYWNoZTogZmFsc2UsXG4gICAgICAgIH0pXG4gICAgICApO1xuICAgICAgY29uZmlnLnBsdWdpbnMucHVzaChcbiAgICAgICAgbmV3IFZpc3VhbGl6ZXJQbHVnaW4oe1xuICAgICAgICAgIGZpbGVuYW1lOiAnLi92aXN1YWxpemVyLmh0bWwnLFxuICAgICAgICB9KVxuICAgICAgKTtcbiAgICB9IGVsc2UgaWYgKGlzU2VydmVybGVzcykge1xuICAgICAgY29uZmlnLnBsdWdpbnMucHVzaChcbiAgICAgICAgbmV3IEh0bWxXZWJwYWNrUGx1Z2luKHtcbiAgICAgICAgICBmaWxlbmFtZTogJ2luZGV4Lmh0bWwnLFxuICAgICAgICAgIHRlbXBsYXRlOiBwYXRoLnJlc29sdmUoXG4gICAgICAgICAgICBfX2Rpcm5hbWUsXG4gICAgICAgICAgICAndGVtcGxhdGVzJyxcbiAgICAgICAgICAgIGlzRWxlY3Ryb24gPyAnZWxlY3Ryb24uanMnIDogJ3NlcnZlcmxlc3MuanMnXG4gICAgICAgICAgKSxcbiAgICAgICAgICBpbmplY3Q6IGZhbHNlLFxuICAgICAgICAgIC8qIG1pbmlmeToge1xuICAgICAgICAgIHJlbW92ZUNvbW1lbnRzOiB0cnVlLFxuICAgICAgICAgIGNvbGxhcHNlV2hpdGVzcGFjZTogdHJ1ZSxcbiAgICAgICAgICByZW1vdmVSZWR1bmRhbnRBdHRyaWJ1dGVzOiB0cnVlLFxuICAgICAgICAgIHVzZVNob3J0RG9jdHlwZTogdHJ1ZSxcbiAgICAgICAgICByZW1vdmVFbXB0eUF0dHJpYnV0ZXM6IHRydWUsXG4gICAgICAgICAgcmVtb3ZlU3R5bGVMaW5rVHlwZUF0dHJpYnV0ZXM6IHRydWUsXG4gICAgICAgICAga2VlcENsb3NpbmdTbGFzaDogdHJ1ZSxcbiAgICAgICAgICBtaW5pZnlKUzogdHJ1ZSxcbiAgICAgICAgICBtaW5pZnlDU1M6IHRydWUsXG4gICAgICAgICAgbWluaWZ5VVJMczogdHJ1ZSxcbiAgICAgICAgfSwqL1xuICAgICAgICB9KVxuICAgICAgKTtcbiAgICB9XG4gIH1cblxuICAvLyBIb3QgbW9kdWxlIHJlcGxhY2VtZW50IG9uIGRldlxuICBpZiAoaXNEZXYpIHtcbiAgICBjb25maWcucGx1Z2lucy5wdXNoKG5ldyB3ZWJwYWNrLkhvdE1vZHVsZVJlcGxhY2VtZW50UGx1Z2luKCkpO1xuICB9XG5cbiAgLy8gTGltaXRDaHVua0NvdW50IG9uIGFsbCBidXQgcHJvZHVjdGlvbi13ZWJcbiAgaWYgKGlzRGV2IHx8IGlzTm9kZSB8fCBpc0VsZWN0cm9uKSB7XG4gICAgY29uZmlnLnBsdWdpbnMucHVzaChcbiAgICAgIG5ldyB3ZWJwYWNrLm9wdGltaXplLkxpbWl0Q2h1bmtDb3VudFBsdWdpbih7IG1heENodW5rczogMSB9KVxuICAgICk7XG4gICAgY29uZmlnLm91dHB1dC5maWxlbmFtZSA9ICdbbmFtZV0uanMnO1xuICB9IGVsc2Uge1xuICAgIGNvbmZpZy5vdXRwdXQuZmlsZW5hbWUgPSAnW25hbWVdLltjaHVua2hhc2hdLmpzJztcbiAgICBjb25maWcub3V0cHV0LmNodW5rRmlsZW5hbWUgPSAnW25hbWVdLltjaHVua2hhc2hdLmpzJztcbiAgfVxuXG4gIC8vIGV4dGVybmFsc1xuICBpZiAoaXNOb2RlKSB7XG4gICAgY29uZmlnLmV4dGVybmFscyA9IGFsbFBhY2thZ2VzXG4gICAgICAubWFwKHggPT4gcGF0aC5yZXNvbHZlKHRvcEZvbGRlciwgeCwgJ25vZGVfbW9kdWxlcycpKVxuICAgICAgLmNvbmNhdChbcGF0aC5yZXNvbHZlKGFwcFJvb3QsICdub2RlX21vZHVsZXMnKV0pXG4gICAgICAubWFwKG1vZHVsZXNEaXIgPT5cbiAgICAgICAgbm9kZUV4dGVybmFscyh7XG4gICAgICAgICAgbW9kdWxlc0RpcixcbiAgICAgICAgICB3aGl0ZWxpc3Q6IFtcbiAgICAgICAgICAgIHYgPT4gdi5pbmRleE9mKCd3ZWJwYWNrL2hvdC9wb2xsJykgPT09IDAsXG4gICAgICAgICAgICAnc291cmNlLW1hcC1zdXBwb3J0L3JlZ2lzdGVyJyxcbiAgICAgICAgICAgIHYgPT4gdi5pbmRleE9mKCdvbHltcC0nKSA9PT0gMCxcbiAgICAgICAgICAgIC8vIHYgPT4gdiA9PT0gJ2FudGQnIHx8IHYuaW5kZXhPZignYW50ZC8nKSA9PT0gMCxcbiAgICAgICAgICAgIC9cXC4oZW90fHdvZmZ8d29mZjJ8dHRmfG90ZikkLyxcbiAgICAgICAgICAgIC9cXC4oc3ZnfHBuZ3xqcGd8anBlZ3xnaWZ8aWNvKSQvLFxuICAgICAgICAgICAgL1xcLihtcDR8bXAzfG9nZ3xzd2Z8d2VicCkkLyxcbiAgICAgICAgICAgIC9cXC4oY3NzfHNjc3N8c2Fzc3xzc3N8bGVzcykkLyxcbiAgICAgICAgICBdLFxuICAgICAgICB9KVxuICAgICAgKTtcbiAgfVxuXG4gIGlmIChpc1dlYiAmJiBpc0Rldikge1xuICAgIGNvbmZpZy5lbnRyeS5tYWluID0gW1xuICAgICAgJ3JlYWN0LWhvdC1sb2FkZXIvcGF0Y2gnLFxuICAgICAgYHdlYnBhY2stZGV2LXNlcnZlci9jbGllbnQ/JHtjb25maWcub3V0cHV0LnB1YmxpY1BhdGh9YCxcbiAgICAgICd3ZWJwYWNrL2hvdC9vbmx5LWRldi1zZXJ2ZXInLFxuICAgICAgcmVxdWlyZS5yZXNvbHZlKHBhdGgucmVzb2x2ZShfX2Rpcm5hbWUsIHRhcmdldCkpLFxuICAgIF07XG4gIH0gZWxzZSBpZiAoaXNOb2RlICYmIGlzRGV2KSB7XG4gICAgY29uZmlnLmVudHJ5Lm1haW4gPSBbXG4gICAgICAnd2VicGFjay9ob3QvcG9sbD8xMDAwJyxcbiAgICAgIHJlcXVpcmUucmVzb2x2ZShwYXRoLnJlc29sdmUoX19kaXJuYW1lLCB0YXJnZXQpKSxcbiAgICBdO1xuICB9IGVsc2UgaWYgKGlzRWxlY3Ryb24pIHtcbiAgICBjb25maWcuZW50cnkubWFpbiA9IFtcbiAgICAgIHJlcXVpcmUucmVzb2x2ZShwYXRoLnJlc29sdmUoX19kaXJuYW1lLCAnd2ViJywgJ2luZGV4LmpzJykpLFxuICAgIF07XG4gICAgY29uZmlnLmVudHJ5LmFwcCA9IFtcbiAgICAgIHJlcXVpcmUucmVzb2x2ZShwYXRoLnJlc29sdmUoX19kaXJuYW1lLCAnZWxlY3Ryb24nLCAnbWFpbi5qcycpKSxcbiAgICBdO1xuICB9IGVsc2Uge1xuICAgIGNvbmZpZy5lbnRyeS5tYWluID0gW1xuICAgICAgcmVxdWlyZS5yZXNvbHZlKHBhdGgucmVzb2x2ZShfX2Rpcm5hbWUsIHRhcmdldCwgJ2luZGV4LmpzJykpLFxuICAgIF07XG4gIH1cblxuICBjb25zdCBvcHRpb25zID0ge1xuICAgIHRhcmdldCxcbiAgICBmb2xkZXIsXG4gICAgaXNQcm9kLFxuICAgIGlzV2ViLFxuICAgIGlzRWxlY3Ryb24sXG4gICAgaXNOb2RlLFxuICAgIGlzU2VydmVybGVzcyxcbiAgICBpc1NTUixcbiAgICBhcHBSb290LFxuICAgIG5vZGVNb2R1bGVzLFxuICAgIGlzTGlua2VkLFxuICAgIC4uLnJlc3QsXG4gIH07XG4gIHJldHVybiBwbHVnaW5zLnJlZHVjZSgoc3RvcmUsIHBsdWdpbikgPT4ge1xuICAgIGNvbnN0IHJlcSA9IHJlcXVpcmUocGF0aC5yZXNvbHZlKFxuICAgICAgcGx1Z2luc0ZvbGRlcixcbiAgICAgIGlzTGlua2VkID8gYHdlYnBhY2stJHtwbHVnaW59YCA6IGBvbHltcC13ZWJwYWNrLSR7cGx1Z2lufWBcbiAgICApKTtcbiAgICByZXR1cm4gcmVxKGNvbmZpZywgb3B0aW9ucykgfHwgY29uZmlnO1xuICB9LCBjb25maWcpO1xufTtcbiJdfQ==
