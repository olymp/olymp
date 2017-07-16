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
var CheckerPlugin = require('awesome-typescript-loader').CheckerPlugin;
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
        resolve: {
            extensions: ['.js', '.ts', '.tsx'],
            modules: allPackages
                .map(function (x) { return path.resolve(topFolder, x, 'node_modules'); })
                .concat([
                path.resolve(appRoot, 'node_modules'),
                path.resolve(appRoot, 'app'),
            ]),
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
    if (isProd && isWeb) {
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
            config.plugins.push(new ReloadServerPlugin({
                script: path.resolve(__dirname, 'node', 'index.js'),
            }));
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
    if (isProd) {
        config.module.rules.push({
            test: /\.tsx?$/,
            include: [path.resolve(appRoot, 'app'), path.resolve(appRoot, 'server')],
            use: [
                {
                    loader: 'awesome-typescript-loader',
                    options: {
                        silent: true,
                        transpileOnly: true,
                        configFileName: path.resolve(__dirname, 'tsconfig.json'),
                    },
                },
            ],
        });
    }
    else {
        config.module.rules.push({
            test: /\.tsx?$/,
            include: [path.resolve(appRoot, 'app'), path.resolve(appRoot, 'server')],
            use: [
                {
                    loader: 'react-hot-loader/webpack',
                },
                {
                    loader: 'awesome-typescript-loader',
                    options: {
                        silent: true,
                        transpileOnly: true,
                        configFileName: path.resolve(__dirname, 'tsconfig.json'),
                    },
                },
            ],
        });
    }
    return plugins.reduce(function (store, plugin) {
        var req = require(path.resolve(pluginsFolder, isLinked ? "webpack-" + plugin : "olymp-webpack-" + plugin));
        var options = __assign({ isProd: isProd,
            isWeb: isWeb,
            isElectron: isElectron,
            isNode: isNode,
            isServerless: isServerless,
            isSSR: isSSR,
            appRoot: appRoot,
            nodeModules: nodeModules,
            isLinked: isLinked }, rest);
        return req(config, options) || config;
    }, config);
};
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhY2thZ2VzL2NvcmUvd2VicGFjay1jb25maWcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFNLE9BQU8sR0FBRyxPQUFPLENBQUMsU0FBUyxDQUFDLENBQUM7QUFDbkMsSUFBTSxJQUFJLEdBQUcsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0FBQzdCLElBQU0sRUFBRSxHQUFHLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztBQUN6QixJQUFNLFlBQVksR0FBRyxPQUFPLENBQUMsdUJBQXVCLENBQUMsQ0FBQztBQUN0RCxJQUFNLGlCQUFpQixHQUFHLE9BQU8sQ0FBQyw2QkFBNkIsQ0FBQyxDQUFDO0FBQ2pFLElBQU0sYUFBYSxHQUFHLE9BQU8sQ0FBQyx3QkFBd0IsQ0FBQyxDQUFDO0FBQ3hELElBQU0saUJBQWlCLEdBQUcsT0FBTyxDQUFDLDZCQUE2QixDQUFDLENBQUM7QUFDakUsSUFBTSxrQkFBa0IsR0FBRyxPQUFPLENBQUMsOEJBQThCLENBQUMsQ0FBQztBQUNuRSxJQUFNLGlCQUFpQixHQUFHLE9BQU8sQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDO0FBQ3pELElBQU0sYUFBYSxHQUFHLE9BQU8sQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO0FBQ2hELElBQU0sZ0JBQWdCLEdBQUcsT0FBTyxDQUFDLDJCQUEyQixDQUFDLENBQUM7QUFDOUQsSUFBTSxrQkFBa0IsR0FBRyxPQUFPLENBQUMsOEJBQThCLENBQUMsQ0FBQztBQUMzRCxJQUFBLGtFQUFhLENBQTBDO0FBRS9ELElBQU0sT0FBTyxHQUFHLE9BQU8sQ0FBQyxHQUFHLEVBQUUsQ0FBQztBQUU5QixJQUFNLFNBQVMsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsQ0FBQztBQUNoRCxJQUFNLFFBQVEsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxLQUFLLFVBQVUsQ0FBQztBQUN6RCxJQUFNLFdBQVcsR0FB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QTBCO2lCQUNuQztnQkFDRDtvQkFDRSxNQUFNLEVBQUUsMkJBQTJCO29CQUNuQyxPQUFPLEVBQUU7d0JBQ1AsTUFBTSxFQUFFLElBQUk7d0JBQ1osYUFBYSxFQUFFLElBQUk7d0JBQ25CLGNBQWMsRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsRUFBRSxlQUFlLENBQUM7cUJBQ3pEO2lCQUNGO2FBQ0Y7U0FDRixDQUFDLENBQUM7SUFDTCxDQUFDO0lBQ0QsTUFBTSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsVUFBQyxLQUFLLEVBQUUsTUFBTTtRQUNsQyxJQUFNLEdBQUcsR0FBRyxPQUFPLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FDOUIsYUFBYSxFQUNiLFFBQVEsR0FBRyxhQUFXLE1BQVEsR0FBRyxtQkFBaUIsTUFBUSxDQUMzRCxDQUFDLENBQUM7UUFDSCxJQUFNLE9BQU8sY0FDWCxNQUFNLFFBQUE7WUFDTixLQUFLLE9BQUE7WUFDTCxVQUFVLFlBQUE7WUFDVixNQUFNLFFBQUE7WUFDTixZQUFZLGNBQUE7WUFDWixLQUFLLE9BQUE7WUFDTCxPQUFPLFNBQUE7WUFDUCxXQUFXLGFBQUE7WUFDWCxRQUFRLFVBQUEsSUFDTCxJQUFJLENBQ1IsQ0FBQztRQUNGLE1BQU0sQ0FBQyxHQUFHLENBQUMsTUFBTSxFQUFFLE9BQU8sQ0FBQyxJQUFJLE1BQU0sQ0FBQztJQUN4QyxDQUFDLEVBQUUsTUFBTSxDQUFDLENBQUM7QUFDYixDQUFDLENBQUMiLCJmaWxlIjoicGFja2FnZXMvY29yZS93ZWJwYWNrLWNvbmZpZy5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHdlYnBhY2sgPSByZXF1aXJlKCd3ZWJwYWNrJyk7XG5jb25zdCBwYXRoID0gcmVxdWlyZSgncGF0aCcpO1xuY29uc3QgZnMgPSByZXF1aXJlKCdmcycpO1xuY29uc3QgQXNzZXRzUGx1Z2luID0gcmVxdWlyZSgnYXNzZXRzLXdlYnBhY2stcGx1Z2luJyk7XG5jb25zdCBQcm9ncmVzc0JhclBsdWdpbiA9IHJlcXVpcmUoJ3Byb2dyZXNzLWJhci13ZWJwYWNrLXBsdWdpbicpO1xuY29uc3Qgbm9kZUV4dGVybmFscyA9IHJlcXVpcmUoJ3dlYnBhY2stbm9kZS1leHRlcm5hbHMnKTtcbmNvbnN0IFN0YXJ0U2VydmVyUGx1Z2luID0gcmVxdWlyZSgnc3RhcnQtc2VydmVyLXdlYnBhY2stcGx1Z2luJyk7XG5jb25zdCBSZWxvYWRTZXJ2ZXJQbHVnaW4gPSByZXF1aXJlKCdyZWxvYWQtc2VydmVyLXdlYnBhY2stcGx1Z2luJyk7XG5jb25zdCBIdG1sV2VicGFja1BsdWdpbiA9IHJlcXVpcmUoJ2h0bWwtd2VicGFjay1wbHVnaW4nKTtcbmNvbnN0IE9mZmxpbmVQbHVnaW4gPSByZXF1aXJlKCdvZmZsaW5lLXBsdWdpbicpO1xuY29uc3QgVmlzdWFsaXplclBsdWdpbiA9IHJlcXVpcmUoJ3dlYnBhY2stdmlzdWFsaXplci1wbHVnaW4nKTtcbmNvbnN0IEdlbmVyYXRlSnNvblBsdWdpbiA9IHJlcXVpcmUoJ2dlbmVyYXRlLWpzb24td2VicGFjay1wbHVnaW4nKTtcbmNvbnN0IHsgQ2hlY2tlclBsdWdpbiB9ID0gcmVxdWlyZSgnYXdlc29tZS10eXBlc2NyaXB0LWxvYWRlcicpO1xuXG5jb25zdCBhcHBSb290ID0gcHJvY2Vzcy5jd2QoKTtcblxuY29uc3QgdG9wRm9sZGVyID0gcGF0aC5yZXNvbHZlKF9fZGlybmFtZSwgJy4uJyk7XG5jb25zdCBpc0xpbmtlZCA9IHBhdGguYmFzZW5hbWUodG9wRm9sZGVyKSA9PT0gJ3BhY2thZ2VzJztcbmNvbnN0IG5vZGVNb2R1bGVzID0gaXNMaW5rZWRcbiAgPyBwYXRoLnJlc29sdmUoX19kaXJuYW1lLCAnbm9kZV9tb2R1bGVzJylcbiAgOiBwYXRoLnJlc29sdmUoX19kaXJuYW1lLCAnLi4nKTtcbnByb2Nlc3Mubm9EZXByZWNhdGlvbiA9IHRydWU7XG5jb25zdCBhbGxQYWNrYWdlcyA9ICFpc0xpbmtlZFxuICA/IFtdXG4gIDogZnMucmVhZGRpclN5bmModG9wRm9sZGVyKS5maWx0ZXIoeCA9PiB4WzBdICE9PSAnLicpO1xuY29uc3QgcGx1Z2luc0ZvbGRlciA9ICFpc0xpbmtlZCA/IG5vZGVNb2R1bGVzIDogdG9wRm9sZGVyO1xuXG5tb2R1bGUuZXhwb3J0cyA9ICh7XG4gIG1vZGUsXG4gIHRhcmdldCxcbiAgZGV2VXJsLFxuICBkZXZQb3J0LFxuICBzc3IsXG4gIHNlcnZlcmxlc3MsXG4gIHBsdWdpbnMgPSBbXSxcbiAgLi4ucmVzdCxcbn0pID0+IHtcbiAgY29uc3QgaXNEZXYgPSBtb2RlICE9PSAncHJvZHVjdGlvbic7XG4gIGNvbnN0IGlzUHJvZCA9IG1vZGUgPT09ICdwcm9kdWN0aW9uJztcbiAgY29uc3QgaXNXZWIgPSB0YXJnZXQgIT09ICdub2RlJztcbiAgY29uc3QgaXNFbGVjdHJvbiA9IHRhcmdldCA9PT0gJ2VsZWN0cm9uJztcbiAgY29uc3QgaXNOb2RlID0gdGFyZ2V0ID09PSAnbm9kZSc7XG4gIGNvbnN0IGlzU2VydmVybGVzcyA9IHNlcnZlcmxlc3MgPT09IHRydWUgfHwgaXNFbGVjdHJvbjtcbiAgY29uc3QgaXNTU1IgPSBzc3IgIT09IGZhbHNlICYmICFzZXJ2ZXJsZXNzO1xuICBjb25zdCBmb2xkZXIgPSBpc0RldiA/ICcuZGV2JyA6ICcuZGlzdCc7XG5cbiAgY29uc3QgY29uZmlnID0ge1xuICAgIHJlc29sdmU6IHtcbiAgICAgIGV4dGVuc2lvbnM6IFsnLmpzJywgJy50cycsICcudHN4J10sXG4gICAgICBtb2R1bGVzOiBhbGxQYWNrYWdlc1xuICAgICAgICAubWFwKHggPT4gcGF0aC5yZXNvbHZlKHRvcEZvbGRlciwgeCwgJ25vZGVfbW9kdWxlcycpKVxuICAgICAgICAuY29uY2F0KFtcbiAgICAgICAgICBwYXRoLnJlc29sdmUoYXBwUm9vdCwgJ25vZGVfbW9kdWxlcycpLFxuICAgICAgICAgIHBhdGgucmVzb2x2ZShhcHBSb290LCAnYXBwJyksXG4gICAgICAgIF0pLFxuICAgICAgYWxpYXM6IHtcbiAgICAgICAgJ0BoaXN0b3J5JzogaXNTZXJ2ZXJsZXNzXG4gICAgICAgICAgPyAnaGlzdG9yeS9jcmVhdGVIYXNoSGlzdG9yeSdcbiAgICAgICAgICA6IGlzTm9kZVxuICAgICAgICAgICAgPyAnaGlzdG9yeS9jcmVhdGVNZW1vcnlIaXN0b3J5J1xuICAgICAgICAgICAgOiAnaGlzdG9yeS9jcmVhdGVCcm93c2VySGlzdG9yeScsXG4gICAgICAgIHJlYWN0OiBwYXRoLnJlc29sdmUoYXBwUm9vdCwgJ25vZGVfbW9kdWxlcycsICdyZWFjdCcpLFxuICAgICAgICAvLyAnY29yZS1qcyc6IHBhdGgucmVzb2x2ZShhcHBSb290LCAnbm9kZV9tb2R1bGVzJywgJ2NvcmUtanMnKSxcbiAgICAgICAgJ3JlYWN0LWRvbSc6IHBhdGgucmVzb2x2ZShhcHBSb290LCAnbm9kZV9tb2R1bGVzJywgJ3JlYWN0LWRvbScpLFxuICAgICAgICAvLyAncmVhY3Qtcm91dGVyJzogcGF0aC5yZXNvbHZlKGFwcFJvb3QsICdub2RlX21vZHVsZXMnLCAncmVhY3Qtcm91dGVyJyksXG4gICAgICAgIC8vIG1vbWVudDogcGF0aC5yZXNvbHZlKGFwcFJvb3QsICdub2RlX21vZHVsZXMnLCAnbW9tZW50JyksXG4gICAgICAgIC8vIGxvZGFzaDogcGF0aC5yZXNvbHZlKGFwcFJvb3QsICdub2RlX21vZHVsZXMnLCAnbG9kYXNoJyksXG4gICAgICAgICdAcm9vdCc6IGFwcFJvb3QsXG4gICAgICAgICdAYXBwJzpcbiAgICAgICAgICBpc05vZGUgJiYgIWlzU1NSXG4gICAgICAgICAgICA/IHBhdGgucmVzb2x2ZShfX2Rpcm5hbWUsICdub29wJylcbiAgICAgICAgICAgIDogcGF0aC5yZXNvbHZlKGFwcFJvb3QsICdhcHAnKSxcbiAgICAgICAgLi4uYWxsUGFja2FnZXMucmVkdWNlKChvYmosIGl0ZW0pID0+IHtcbiAgICAgICAgICAvLyBnZXQgYWxsIGZvbGRlcnMgaW4gc3JjIGFuZCBjcmVhdGUgJ29seW1wLXh4eCcgYWxpYXNcbiAgICAgICAgICBpZiAoaXRlbSA9PT0gJ2NvcmUnKSB7XG4gICAgICAgICAgICBvYmoub2x5bXAgPSBwYXRoLnJlc29sdmUodG9wRm9sZGVyLCBpdGVtKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgb2JqW2BvbHltcC0ke2l0ZW19YF0gPSBwYXRoLnJlc29sdmUodG9wRm9sZGVyLCBpdGVtKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIG9iajtcbiAgICAgICAgfSwge30pLFxuICAgICAgfSxcbiAgICB9LFxuICAgIHJlc29sdmVMb2FkZXI6IHtcbiAgICAgIG1vZHVsZXM6IFtcbiAgICAgICAgcGF0aC5yZXNvbHZlKG5vZGVNb2R1bGVzKSxcbiAgICAgICAgcGF0aC5yZXNvbHZlKGFwcFJvb3QsICdub2RlX21vZHVsZXMnKSxcbiAgICAgIF0sXG4gICAgfSxcbiAgICBwbHVnaW5zOiBbXG4gICAgICAvLyBuZXcgd2VicGFjay5vcHRpbWl6ZS5Nb2R1bGVDb25jYXRlbmF0aW9uUGx1Z2luKCksXG4gICAgICBuZXcgd2VicGFjay5EZWZpbmVQbHVnaW4oe1xuICAgICAgICAncHJvY2Vzcy5lbnYuU1NSJzogSlNPTi5zdHJpbmdpZnkoaXNTU1IpLFxuICAgICAgICAncHJvY2Vzcy5lbnYuU0VSVkVSTEVTUyc6IEpTT04uc3RyaW5naWZ5KGlzU2VydmVybGVzcyksXG4gICAgICAgICdwcm9jZXNzLmVudi5OT0RFX0VOVic6IEpTT04uc3RyaW5naWZ5KG1vZGUpLFxuICAgICAgICAncHJvY2Vzcy5lbnYuREVWX1BPUlQnOiBKU09OLnN0cmluZ2lmeShkZXZQb3J0KSxcbiAgICAgICAgJ3Byb2Nlc3MuZW52LkRFVl9VUkwnOiBkZXZVcmxcbiAgICAgICAgICA/IEpTT04uc3RyaW5naWZ5KGRldlVybC5vcmlnaW4pXG4gICAgICAgICAgOiB1bmRlZmluZWQsXG4gICAgICAgICdwcm9jZXNzLmVudi5JU19XRUInOiBpc1dlYiA/IEpTT04uc3RyaW5naWZ5KHRydWUpIDogdW5kZWZpbmVkLFxuICAgICAgICAncHJvY2Vzcy5lbnYuSVNfTk9ERSc6IGlzTm9kZSA/IEpTT04uc3RyaW5naWZ5KHRydWUpIDogdW5kZWZpbmVkLFxuICAgICAgICAncHJvY2Vzcy5lbnYuSVNfRUxFQ1RST04nOiBpc0VsZWN0cm9uXG4gICAgICAgICAgPyBKU09OLnN0cmluZ2lmeSh0cnVlKVxuICAgICAgICAgIDogdW5kZWZpbmVkLFxuICAgICAgfSksXG4gICAgICAvLyBuZXcgUHJlcGFja1dlYnBhY2tQbHVnaW4oeyB9KSxcbiAgICAgIG5ldyB3ZWJwYWNrLkNvbnRleHRSZXBsYWNlbWVudFBsdWdpbigvbW9tZW50Wy9cXFxcXWxvY2FsZSQvLCAvZGUvKSxcbiAgICAgIG5ldyB3ZWJwYWNrLk5hbWVkTW9kdWxlc1BsdWdpbigpLFxuICAgICAgbmV3IFByb2dyZXNzQmFyUGx1Z2luKCksXG4gICAgICBuZXcgd2VicGFjay5Ob0VtaXRPbkVycm9yc1BsdWdpbigpLFxuICAgICAgLy8gbmV3IENoZWNrZXJQbHVnaW4oKSxcbiAgICBdLFxuICAgIG1vZHVsZToge1xuICAgICAgcnVsZXM6IFtcbiAgICAgICAge1xuICAgICAgICAgIHRlc3Q6IC9cXC5odG1sJC8sXG4gICAgICAgICAgbG9hZGVyOiAnZmlsZS1sb2FkZXI/bmFtZT1bbmFtZV0uW2V4dF0nLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgdGVzdDogL1xcLihqcGd8anBlZ3xwbmd8Z2lmfGVvdHx0dGZ8d29mZnx3b2ZmMikkLyxcbiAgICAgICAgICBsb2FkZXI6ICd1cmwtbG9hZGVyJyxcbiAgICAgICAgICBvcHRpb25zOiB7XG4gICAgICAgICAgICBsaW1pdDogMjAwMDAsXG4gICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIHRlc3Q6IC9cXC4odHh0fG1kKSQvLFxuICAgICAgICAgIGxvYWRlcjogJ3Jhdy1sb2FkZXInLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgdGVzdDogL1xcLmpzb24kLyxcbiAgICAgICAgICBsb2FkZXI6ICdqc29uLWxvYWRlcicsXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICB0ZXN0OiAvXFwuKGdyYXBocWx8Z3FsKSQvLFxuICAgICAgICAgIGV4Y2x1ZGU6IC9ub2RlX21vZHVsZXMvLFxuICAgICAgICAgIGxvYWRlcjogJ2dyYXBocWwtdGFnL2xvYWRlcicsXG4gICAgICAgIH0sXG4gICAgICBdLFxuICAgIH0sXG4gICAgb3V0cHV0OiB7XG4gICAgICBwYXRoOiBwYXRoLnJlc29sdmUoYXBwUm9vdCwgZm9sZGVyLCB0YXJnZXQpLFxuICAgIH0sXG4gICAgZW50cnk6IHtcbiAgICAgIG1haW46IFtdLFxuICAgIH0sXG4gIH07XG5cbiAgaWYgKCFpc05vZGUpIHtcbiAgICBjb25maWcucGx1Z2lucy5wdXNoKFxuICAgICAgbmV3IHdlYnBhY2suRGVmaW5lUGx1Z2luKHtcbiAgICAgICAgJ3Byb2Nlc3MuZW52LkFNUCc6IHByb2Nlc3MuZW52LkFNUFxuICAgICAgICAgID8gSlNPTi5zdHJpbmdpZnkocHJvY2Vzcy5lbnYuQU1QKVxuICAgICAgICAgIDogdW5kZWZpbmVkLFxuICAgICAgICAncHJvY2Vzcy5lbnYuR01fS0VZJzogSlNPTi5zdHJpbmdpZnkocHJvY2Vzcy5lbnYuR01fS0VZKSxcbiAgICAgICAgJ3Byb2Nlc3MuZW52LkdSQVBIUUxfVVJMJzogcHJvY2Vzcy5lbnYuR1JBUEhRTF9VUkxcbiAgICAgICAgICA/IEpTT04uc3RyaW5naWZ5KHByb2Nlc3MuZW52LkdSQVBIUUxfVVJMKVxuICAgICAgICAgIDogdW5kZWZpbmVkLFxuICAgICAgICAvKidwcm9jZXNzLmVudi5HUkFQSFFMX1NVQic6IHByb2Nlc3MuZW52LkdSQVBIUUxfU1VCXG4gICAgICA/IEpTT04uc3RyaW5naWZ5KHByb2Nlc3MuZW52LkdSQVBIUUxfU1VCKVxuICAgICAgOiB1bmRlZmluZWQsKi9cbiAgICAgICAgJ3Byb2Nlc3MuZW52LlVSTCc6IHByb2Nlc3MuZW52LlVSTFxuICAgICAgICAgID8gSlNPTi5zdHJpbmdpZnkocHJvY2Vzcy5lbnYuVVJMKVxuICAgICAgICAgIDogdW5kZWZpbmVkLFxuICAgICAgICAncHJvY2Vzcy5lbnYuRklMRVNUQUNLX0tFWSc6IHByb2Nlc3MuZW52LkZJTEVTVEFDS19LRVlcbiAgICAgICAgICA/IEpTT04uc3RyaW5naWZ5KHByb2Nlc3MuZW52LkZJTEVTVEFDS19LRVkpXG4gICAgICAgICAgOiB1bmRlZmluZWQsXG4gICAgICB9KVxuICAgICk7XG4gIH1cblxuICAvLyBpbmxpbmUtc291cmNlLW1hcCBmb3Igd2ViLWRldlxuICBjb25maWcuZGV2dG9vbCA9ICdzb3VyY2UtbWFwJztcblxuICAvLyBpbmxpbmUtc291cmNlLW1hcCBmb3Igd2ViLWRldlxuICBpZiAoaXNQcm9kICYmIGlzV2ViICYmICFpc0VsZWN0cm9uKSB7XG4gICAgY29uZmlnLm91dHB1dC5maWxlbmFtZSA9ICdbbmFtZV0uW2NvbnRlbnRoYXNoXS5qcyc7XG4gIH0gZWxzZSB7XG4gICAgY29uZmlnLm91dHB1dC5maWxlbmFtZSA9ICdbbmFtZV0uanMnO1xuICB9XG5cbiAgLy8gdGFyZ2V0ICYmIG5vZGUgc2V0dGluZ3NcbiAgaWYgKGlzTm9kZSkge1xuICAgIGNvbmZpZy50YXJnZXQgPSAnbm9kZSc7XG4gICAgY29uZmlnLndhdGNoID0gaXNEZXY7XG4gICAgY29uZmlnLm5vZGUgPSB7XG4gICAgICBfX2Rpcm5hbWU6IGZhbHNlLFxuICAgICAgX19maWxlbmFtZTogZmFsc2UsXG4gICAgfTtcbiAgICBjb25maWcub3V0cHV0LmxpYnJhcnlUYXJnZXQgPSAnY29tbW9uanMyJztcbiAgfSBlbHNlIGlmIChpc0VsZWN0cm9uKSB7XG4gICAgY29uZmlnLnRhcmdldCA9ICdlbGVjdHJvbi1tYWluJztcbiAgICBjb25maWcubm9kZSA9IHtcbiAgICAgIF9fZGlybmFtZTogZmFsc2UsXG4gICAgICBfX2ZpbGVuYW1lOiBmYWxzZSxcbiAgICB9O1xuICAgIGNvbmZpZy5vdXRwdXQubGlicmFyeVRhcmdldCA9ICdjb21tb25qczInO1xuICB9IGVsc2Uge1xuICAgIGNvbmZpZy50YXJnZXQgPSAnd2ViJztcbiAgICBjb25maWcubm9kZSA9IHtcbiAgICAgIF9fZGlybmFtZTogdHJ1ZSxcbiAgICAgIF9fZmlsZW5hbWU6IHRydWUsXG4gICAgfTtcbiAgICBjb25maWcub3V0cHV0LmxpYnJhcnlUYXJnZXQgPSAndmFyJztcbiAgfVxuXG4gIGlmIChpc0RldiAmJiBpc1dlYikge1xuICAgIGNvbmZpZy5vdXRwdXQucHVibGljUGF0aCA9IGRldlVybC5ocmVmO1xuICB9IGVsc2Uge1xuICAgIGNvbmZpZy5vdXRwdXQucHVibGljUGF0aCA9ICcvJztcbiAgfVxuXG4gIC8vIGJhYmVsLXByZXNldC1lbnYgb24gbm9kZVxuICBpZiAoaXNQcm9kICYmIGlzV2ViKSB7XG4gICAgLypiYWJlbC5vcHRpb25zLnBsdWdpbnMucHVzaChbXG4gICAgICAndHJhbnNmb3JtLWltcG9ydHMnLFxuICAgICAge1xuICAgICAgICBhbnRkOiB7XG4gICAgICAgICAgdHJhbnNmb3JtOiAnYW50ZC9saWIvJHttZW1iZXJ9JyxcbiAgICAgICAgICBrZWJhYkNhc2U6IHRydWUsXG4gICAgICAgICAgcHJldmVudEZ1bGxJbXBvcnQ6IHRydWUsXG4gICAgICAgIH0sXG4gICAgICAgIGxvZGFzaDoge1xuICAgICAgICAgIHRyYW5zZm9ybTogJ2xvZGFzaC8ke21lbWJlcn0nLFxuICAgICAgICAgIHByZXZlbnRGdWxsSW1wb3J0OiB0cnVlLFxuICAgICAgICB9LFxuICAgICAgICAnZGF0ZS1mbnMnOiB7XG4gICAgICAgICAgdHJhbnNmb3JtOiAnZGF0ZS1mbnMvJHttZW1iZXJ9JyxcbiAgICAgICAgICBwcmV2ZW50RnVsbEltcG9ydDogdHJ1ZSxcbiAgICAgICAgICBzbmFrZUNhc2U6IHRydWUsXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgIF0pOyovXG4gIH1cblxuICAvLyB3ZWJwYWNrIHBsdWdpbnNcbiAgaWYgKGlzV2ViICYmIGlzUHJvZCkge1xuICAgIGNvbmZpZy5wbHVnaW5zLnB1c2gobmV3IHdlYnBhY2sub3B0aW1pemUuT2NjdXJyZW5jZU9yZGVyUGx1Z2luKCkpO1xuICAgIC8vIGNvbmZpZy5wbHVnaW5zLnB1c2gobmV3IHdlYnBhY2sub3B0aW1pemUuRGVkdXBlUGx1Z2luKCkpO1xuICAgIGlmIChpc0VsZWN0cm9uKSB7XG4gICAgICBjb25maWcucGx1Z2lucy5wdXNoKG5ldyBHZW5lcmF0ZUpzb25QbHVnaW4oJ3BhY2thZ2UuanNvbicsIHt9KSk7XG4gICAgfVxuICAgIGNvbmZpZy5wbHVnaW5zLnB1c2goXG4gICAgICBuZXcgd2VicGFjay5Mb2FkZXJPcHRpb25zUGx1Z2luKHtcbiAgICAgICAgbWluaW1pemU6IHRydWUsXG4gICAgICAgIGRlYnVnOiBmYWxzZSxcbiAgICAgIH0pXG4gICAgKTtcbiAgICBjb25maWcucGx1Z2lucy5wdXNoKFxuICAgICAgbmV3IHdlYnBhY2sub3B0aW1pemUuVWdsaWZ5SnNQbHVnaW4oe1xuICAgICAgICBjb21wcmVzczoge1xuICAgICAgICAgIHNjcmV3X2llODogdHJ1ZSxcbiAgICAgICAgICB3YXJuaW5nczogZmFsc2UsXG4gICAgICAgIH0sXG4gICAgICAgIG1hbmdsZToge1xuICAgICAgICAgIHNjcmV3X2llODogdHJ1ZSxcbiAgICAgICAgfSxcbiAgICAgICAgb3V0cHV0OiB7XG4gICAgICAgICAgY29tbWVudHM6IGZhbHNlLFxuICAgICAgICAgIHNjcmV3X2llODogdHJ1ZSxcbiAgICAgICAgfSxcbiAgICAgICAgc291cmNlTWFwOiBmYWxzZSxcbiAgICAgIH0pXG4gICAgKTtcbiAgfVxuICBpZiAoaXNOb2RlKSB7XG4gICAgaWYgKGlzRGV2KSB7XG4gICAgICBjb25maWcucGx1Z2lucy5wdXNoKG5ldyBTdGFydFNlcnZlclBsdWdpbignbWFpbi5qcycpKTtcbiAgICAgIGNvbmZpZy5wbHVnaW5zLnB1c2goXG4gICAgICAgIG5ldyBSZWxvYWRTZXJ2ZXJQbHVnaW4oe1xuICAgICAgICAgIC8vIERlZmF1bHRzIHRvIHByb2Nlc3MuY3dkKCkgKyBcIi9zZXJ2ZXIuanNcIlxuICAgICAgICAgIHNjcmlwdDogcGF0aC5yZXNvbHZlKF9fZGlybmFtZSwgJ25vZGUnLCAnaW5kZXguanMnKSxcbiAgICAgICAgfSlcbiAgICAgICk7XG4gICAgfVxuICAgIGNvbmZpZy5wbHVnaW5zLnB1c2goXG4gICAgICBuZXcgd2VicGFjay5CYW5uZXJQbHVnaW4oe1xuICAgICAgICBiYW5uZXI6ICdyZXF1aXJlKFwic291cmNlLW1hcC1zdXBwb3J0XCIpLmluc3RhbGwoKTsnLFxuICAgICAgICByYXc6IHRydWUsXG4gICAgICAgIGVudHJ5T25seTogdHJ1ZSxcbiAgICAgIH0pXG4gICAgKTtcbiAgfSBlbHNlIHtcbiAgICBjb25maWcucGx1Z2lucy5wdXNoKFxuICAgICAgbmV3IEFzc2V0c1BsdWdpbih7XG4gICAgICAgIGZpbGVuYW1lOiAnYXNzZXRzLmpzb24nLFxuICAgICAgICBwYXRoOiBwYXRoLnJlc29sdmUocHJvY2Vzcy5jd2QoKSwgZm9sZGVyLCB0YXJnZXQpLFxuICAgICAgfSlcbiAgICApO1xuICAgIGlmIChpc1Byb2QgJiYgIWlzU2VydmVybGVzcykge1xuICAgICAgY29uZmlnLnBsdWdpbnMucHVzaChcbiAgICAgICAgbmV3IEh0bWxXZWJwYWNrUGx1Z2luKHtcbiAgICAgICAgICBmaWxlbmFtZTogJ29mZmxpbmUuaHRtbCcsXG4gICAgICAgICAgdGVtcGxhdGU6IHBhdGgucmVzb2x2ZShfX2Rpcm5hbWUsICd0ZW1wbGF0ZXMnLCAnZGVmYXVsdC5qcycpLFxuICAgICAgICAgIGluamVjdDogZmFsc2UsXG4gICAgICAgICAgLyogbWluaWZ5OiB7XG4gICAgICAgICAgcmVtb3ZlQ29tbWVudHM6IHRydWUsXG4gICAgICAgICAgY29sbGFwc2VXaGl0ZXNwYWNlOiB0cnVlLFxuICAgICAgICAgIHJlbW92ZVJlZHVuZGFudEF0dHJpYnV0ZXM6IHRydWUsXG4gICAgICAgICAgdXNlU2hvcnREb2N0eXBlOiB0cnVlLFxuICAgICAgICAgIHJlbW92ZUVtcHR5QXR0cmlidXRlczogdHJ1ZSxcbiAgICAgICAgICByZW1vdmVTdHlsZUxpbmtUeXBlQXR0cmlidXRlczogdHJ1ZSxcbiAgICAgICAgICBrZWVwQ2xvc2luZ1NsYXNoOiB0cnVlLFxuICAgICAgICAgIG1pbmlmeUpTOiB0cnVlLFxuICAgICAgICAgIG1pbmlmeUNTUzogdHJ1ZSxcbiAgICAgICAgICBtaW5pZnlVUkxzOiB0cnVlLFxuICAgICAgICB9LCovXG4gICAgICAgIH0pXG4gICAgICApO1xuICAgICAgY29uZmlnLnBsdWdpbnMucHVzaChcbiAgICAgICAgbmV3IE9mZmxpbmVQbHVnaW4oe1xuICAgICAgICAgIHJlc3BvbnNlU3RyYXRlZ3k6ICduZXR3b3JrLWZpcnN0JyxcbiAgICAgICAgICBleHRlcm5hbHM6IFtcbiAgICAgICAgICAgICdodHRwczovL2Nkbi5wb2x5ZmlsbC5pby92Mi9wb2x5ZmlsbC5taW4uanM/Y2FsbGJhY2s9UE9MWScsXG4gICAgICAgICAgXSxcbiAgICAgICAgICAvLyBhdXRvVXBkYXRlOiAxMDAwICogNjAgKiA1LFxuICAgICAgICAgIGNhY2hlczogJ2FsbCcsXG4gICAgICAgICAgU2VydmljZVdvcmtlcjoge1xuICAgICAgICAgICAgZXZlbnRzOiB0cnVlLFxuICAgICAgICAgICAgbmF2aWdhdGVGYWxsYmFja1VSTDogJy9vZmZsaW5lLmh0bWwnLFxuICAgICAgICAgIH0sXG4gICAgICAgICAgQXBwQ2FjaGU6IGZhbHNlLFxuICAgICAgICB9KVxuICAgICAgKTtcbiAgICAgIGNvbmZpZy5wbHVnaW5zLnB1c2goXG4gICAgICAgIG5ldyBWaXN1YWxpemVyUGx1Z2luKHtcbiAgICAgICAgICBmaWxlbmFtZTogJy4vdmlzdWFsaXplci5odG1sJyxcbiAgICAgICAgfSlcbiAgICAgICk7XG4gICAgfSBlbHNlIGlmIChpc1NlcnZlcmxlc3MpIHtcbiAgICAgIGNvbmZpZy5wbHVnaW5zLnB1c2goXG4gICAgICAgIG5ldyBIdG1sV2VicGFja1BsdWdpbih7XG4gICAgICAgICAgZmlsZW5hbWU6ICdpbmRleC5odG1sJyxcbiAgICAgICAgICB0ZW1wbGF0ZTogcGF0aC5yZXNvbHZlKFxuICAgICAgICAgICAgX19kaXJuYW1lLFxuICAgICAgICAgICAgJ3RlbXBsYXRlcycsXG4gICAgICAgICAgICBpc0VsZWN0cm9uID8gJ2VsZWN0cm9uLmpzJyA6ICdzZXJ2ZXJsZXNzLmpzJ1xuICAgICAgICAgICksXG4gICAgICAgICAgaW5qZWN0OiBmYWxzZSxcbiAgICAgICAgICAvKiBtaW5pZnk6IHtcbiAgICAgICAgICByZW1vdmVDb21tZW50czogdHJ1ZSxcbiAgICAgICAgICBjb2xsYXBzZVdoaXRlc3BhY2U6IHRydWUsXG4gICAgICAgICAgcmVtb3ZlUmVkdW5kYW50QXR0cmlidXRlczogdHJ1ZSxcbiAgICAgICAgICB1c2VTaG9ydERvY3R5cGU6IHRydWUsXG4gICAgICAgICAgcmVtb3ZlRW1wdHlBdHRyaWJ1dGVzOiB0cnVlLFxuICAgICAgICAgIHJlbW92ZVN0eWxlTGlua1R5cGVBdHRyaWJ1dGVzOiB0cnVlLFxuICAgICAgICAgIGtlZXBDbG9zaW5nU2xhc2g6IHRydWUsXG4gICAgICAgICAgbWluaWZ5SlM6IHRydWUsXG4gICAgICAgICAgbWluaWZ5Q1NTOiB0cnVlLFxuICAgICAgICAgIG1pbmlmeVVSTHM6IHRydWUsXG4gICAgICAgIH0sKi9cbiAgICAgICAgfSlcbiAgICAgICk7XG4gICAgfVxuICB9XG5cbiAgLy8gSG90IG1vZHVsZSByZXBsYWNlbWVudCBvbiBkZXZcbiAgaWYgKGlzRGV2KSB7XG4gICAgY29uZmlnLnBsdWdpbnMucHVzaChuZXcgd2VicGFjay5Ib3RNb2R1bGVSZXBsYWNlbWVudFBsdWdpbigpKTtcbiAgfVxuXG4gIC8vIExpbWl0Q2h1bmtDb3VudCBvbiBhbGwgYnV0IHByb2R1Y3Rpb24td2ViXG4gIGlmIChpc0RldiB8fCBpc05vZGUgfHwgaXNFbGVjdHJvbikge1xuICAgIGNvbmZpZy5wbHVnaW5zLnB1c2goXG4gICAgICBuZXcgd2VicGFjay5vcHRpbWl6ZS5MaW1pdENodW5rQ291bnRQbHVnaW4oeyBtYXhDaHVua3M6IDEgfSlcbiAgICApO1xuICAgIGNvbmZpZy5vdXRwdXQuZmlsZW5hbWUgPSAnW25hbWVdLmpzJztcbiAgfSBlbHNlIHtcbiAgICBjb25maWcub3V0cHV0LmZpbGVuYW1lID0gJ1tuYW1lXS5bY2h1bmtoYXNoXS5qcyc7XG4gICAgY29uZmlnLm91dHB1dC5jaHVua0ZpbGVuYW1lID0gJ1tuYW1lXS5bY2h1bmtoYXNoXS5qcyc7XG4gIH1cblxuICAvLyBleHRlcm5hbHNcbiAgaWYgKGlzTm9kZSkge1xuICAgIGNvbmZpZy5leHRlcm5hbHMgPSBhbGxQYWNrYWdlc1xuICAgICAgLm1hcCh4ID0+IHBhdGgucmVzb2x2ZSh0b3BGb2xkZXIsIHgsICdub2RlX21vZHVsZXMnKSlcbiAgICAgIC5jb25jYXQoW3BhdGgucmVzb2x2ZShhcHBSb290LCAnbm9kZV9tb2R1bGVzJyldKVxuICAgICAgLm1hcChtb2R1bGVzRGlyID0+XG4gICAgICAgIG5vZGVFeHRlcm5hbHMoe1xuICAgICAgICAgIG1vZHVsZXNEaXIsXG4gICAgICAgICAgd2hpdGVsaXN0OiBbXG4gICAgICAgICAgICB2ID0+IHYuaW5kZXhPZignd2VicGFjay9ob3QvcG9sbCcpID09PSAwLFxuICAgICAgICAgICAgJ3NvdXJjZS1tYXAtc3VwcG9ydC9yZWdpc3RlcicsXG4gICAgICAgICAgICB2ID0+IHYuaW5kZXhPZignb2x5bXAtJykgPT09IDAsXG4gICAgICAgICAgICAvLyB2ID0+IHYgPT09ICdhbnRkJyB8fCB2LmluZGV4T2YoJ2FudGQvJykgPT09IDAsXG4gICAgICAgICAgICAvXFwuKGVvdHx3b2ZmfHdvZmYyfHR0ZnxvdGYpJC8sXG4gICAgICAgICAgICAvXFwuKHN2Z3xwbmd8anBnfGpwZWd8Z2lmfGljbykkLyxcbiAgICAgICAgICAgIC9cXC4obXA0fG1wM3xvZ2d8c3dmfHdlYnApJC8sXG4gICAgICAgICAgICAvXFwuKGNzc3xzY3NzfHNhc3N8c3NzfGxlc3MpJC8sXG4gICAgICAgICAgXSxcbiAgICAgICAgfSlcbiAgICAgICk7XG4gIH1cblxuICBpZiAoaXNXZWIgJiYgaXNEZXYpIHtcbiAgICBjb25maWcuZW50cnkubWFpbiA9IFtcbiAgICAgICdyZWFjdC1ob3QtbG9hZGVyL3BhdGNoJyxcbiAgICAgIGB3ZWJwYWNrLWRldi1zZXJ2ZXIvY2xpZW50PyR7Y29uZmlnLm91dHB1dC5wdWJsaWNQYXRofWAsXG4gICAgICAnd2VicGFjay9ob3Qvb25seS1kZXYtc2VydmVyJyxcbiAgICAgIHJlcXVpcmUucmVzb2x2ZShwYXRoLnJlc29sdmUoX19kaXJuYW1lLCB0YXJnZXQpKSxcbiAgICBdO1xuICB9IGVsc2UgaWYgKGlzTm9kZSAmJiBpc0Rldikge1xuICAgIGNvbmZpZy5lbnRyeS5tYWluID0gW1xuICAgICAgJ3dlYnBhY2svaG90L3BvbGw/MTAwMCcsXG4gICAgICByZXF1aXJlLnJlc29sdmUocGF0aC5yZXNvbHZlKF9fZGlybmFtZSwgdGFyZ2V0KSksXG4gICAgXTtcbiAgfSBlbHNlIGlmIChpc0VsZWN0cm9uKSB7XG4gICAgY29uZmlnLmVudHJ5Lm1haW4gPSBbXG4gICAgICByZXF1aXJlLnJlc29sdmUocGF0aC5yZXNvbHZlKF9fZGlybmFtZSwgJ3dlYicsICdpbmRleC5qcycpKSxcbiAgICBdO1xuICAgIGNvbmZpZy5lbnRyeS5hcHAgPSBbXG4gICAgICByZXF1aXJlLnJlc29sdmUocGF0aC5yZXNvbHZlKF9fZGlybmFtZSwgJ2VsZWN0cm9uJywgJ21haW4uanMnKSksXG4gICAgXTtcbiAgfSBlbHNlIHtcbiAgICBjb25maWcuZW50cnkubWFpbiA9IFtcbiAgICAgIHJlcXVpcmUucmVzb2x2ZShwYXRoLnJlc29sdmUoX19kaXJuYW1lLCB0YXJnZXQsICdpbmRleC5qcycpKSxcbiAgICBdO1xuICB9XG5cbiAgaWYgKGlzUHJvZCkge1xuICAgIGNvbmZpZy5tb2R1bGUucnVsZXMucHVzaCh7XG4gICAgICB0ZXN0OiAvXFwudHN4PyQvLFxuICAgICAgaW5jbHVkZTogW3BhdGgucmVzb2x2ZShhcHBSb290LCAnYXBwJyksIHBhdGgucmVzb2x2ZShhcHBSb290LCAnc2VydmVyJyldLFxuICAgICAgdXNlOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBsb2FkZXI6ICdhd2Vzb21lLXR5cGVzY3JpcHQtbG9hZGVyJyxcbiAgICAgICAgICBvcHRpb25zOiB7XG4gICAgICAgICAgICBzaWxlbnQ6IHRydWUsXG4gICAgICAgICAgICB0cmFuc3BpbGVPbmx5OiB0cnVlLFxuICAgICAgICAgICAgY29uZmlnRmlsZU5hbWU6IHBhdGgucmVzb2x2ZShfX2Rpcm5hbWUsICd0c2NvbmZpZy5qc29uJyksXG4gICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgIF0sXG4gICAgfSk7XG4gIH0gZWxzZSB7XG4gICAgY29uZmlnLm1vZHVsZS5ydWxlcy5wdXNoKHtcbiAgICAgIHRlc3Q6IC9cXC50c3g/JC8sXG4gICAgICBpbmNsdWRlOiBbcGF0aC5yZXNvbHZlKGFwcFJvb3QsICdhcHAnKSwgcGF0aC5yZXNvbHZlKGFwcFJvb3QsICdzZXJ2ZXInKV0sXG4gICAgICB1c2U6IFtcbiAgICAgICAge1xuICAgICAgICAgIGxvYWRlcjogJ3JlYWN0LWhvdC1sb2FkZXIvd2VicGFjaycsXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBsb2FkZXI6ICdhd2Vzb21lLXR5cGVzY3JpcHQtbG9hZGVyJyxcbiAgICAgICAgICBvcHRpb25zOiB7XG4gICAgICAgICAgICBzaWxlbnQ6IHRydWUsXG4gICAgICAgICAgICB0cmFuc3BpbGVPbmx5OiB0cnVlLFxuICAgICAgICAgICAgY29uZmlnRmlsZU5hbWU6IHBhdGgucmVzb2x2ZShfX2Rpcm5hbWUsICd0c2NvbmZpZy5qc29uJyksXG4gICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgIF0sXG4gICAgfSk7XG4gIH1cbiAgcmV0dXJuIHBsdWdpbnMucmVkdWNlKChzdG9yZSwgcGx1Z2luKSA9PiB7XG4gICAgY29uc3QgcmVxID0gcmVxdWlyZShwYXRoLnJlc29sdmUoXG4gICAgICBwbHVnaW5zRm9sZGVyLFxuICAgICAgaXNMaW5rZWQgPyBgd2VicGFjay0ke3BsdWdpbn1gIDogYG9seW1wLXdlYnBhY2stJHtwbHVnaW59YFxuICAgICkpO1xuICAgIGNvbnN0IG9wdGlvbnMgPSB7XG4gICAgICBpc1Byb2QsXG4gICAgICBpc1dlYixcbiAgICAgIGlzRWxlY3Ryb24sXG4gICAgICBpc05vZGUsXG4gICAgICBpc1NlcnZlcmxlc3MsXG4gICAgICBpc1NTUixcbiAgICAgIGFwcFJvb3QsXG4gICAgICBub2RlTW9kdWxlcyxcbiAgICAgIGlzTGlua2VkLFxuICAgICAgLi4ucmVzdCxcbiAgICB9O1xuICAgIHJldHVybiByZXEoY29uZmlnLCBvcHRpb25zKSB8fCBjb25maWc7XG4gIH0sIGNvbmZpZyk7XG59O1xuIl19
