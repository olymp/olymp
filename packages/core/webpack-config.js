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
            modules: [
                path.resolve(appRoot, 'node_modules'),
                path.resolve(appRoot, 'app'),
            ].concat(allPackages.map(function (x) { return path.resolve(topFolder, x, 'node_modules'); })),
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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhY2thZ2VzL2NvcmUvd2VicGFjay1jb25maWcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFNLE9BQU8sR0FBRyxPQUFPLENBQUMsU0FBUyxDQUFDLENBQUM7QUFDbkMsSUFBTSxJQUFJLEdBQUcsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0FBQzdCLElBQU0sRUFBRSxHQUFHLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztBQUN6QixJQUFNLFlBQVksR0FBRyxPQUFPLENBQUMsdUJBQXVCLENBQUMsQ0FBQztBQUN0RCxJQUFNLGlCQUFpQixHQUFHLE9BQU8sQ0FBQyw2QkFBNkIsQ0FBQyxDQUFDO0FBQ2pFLElBQU0sYUFBYSxHQUFHLE9BQU8sQ0FBQyx3QkFBd0IsQ0FBQyxDQUFDO0FBQ3hELElBQU0saUJBQWlCLEdBQUcsT0FBTyxDQUFDLDZCQUE2QixDQUFDLENBQUM7QUFDakUsSUFBTSxrQkFBa0IsR0FBRyxPQUFPLENBQUMsOEJBQThCLENBQUMsQ0FBQztBQUNuRSxJQUFNLGlCQUFpQixHQUFHLE9BQU8sQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDO0FBQ3pELElBQU0sYUFBYSxHQUFHLE9BQU8sQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO0FBQ2hELElBQU0sZ0JBQWdCLEdBQUcsT0FBTyxDQUFDLDJCQUEyQixDQUFDLENBQUM7QUFDOUQsSUFBTSxrQkFBa0IsR0FBRyxPQUFPLENBQUMsOEJBQThCLENBQUMsQ0FBQztBQUMzRCxJQUFBLGtFQUFhLENBQTBDO0FBRS9ELElBQU0sT0FBTyxHQUFHLE9BQU8sQ0FBQyxHQUFHLEVBQUUsQ0FBQztBQUU5QixJQUFNLFNBQVMsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsQ0FBQztBQUNoRCxJQUFNLFFBQVEsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxLQUFLLFVBQVUsQ0FBQztBQUN6RCxJQUFNLFdBQVcsR0FB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O2lCQUNuQztnQkFDRDtvQkFDRSxNQUFNLEVBQUUsMkJBQTJCO29CQUNuQyxPQUFPLEVBQUU7d0JBQ1AsTUFBTSxFQUFFLElBQUk7d0JBQ1osYUFBYSxFQUFFLElBQUk7d0JBQ25CLGNBQWMsRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsRUFBRSxlQUFlLENBQUM7cUJBQ3pEO2lCQUNGO2FBQ0Y7U0FDRixDQUFDLENBQUM7SUFDTCxDQUFDO0lBQ0QsTUFBTSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsVUFBQyxLQUFLLEVBQUUsTUFBTTtRQUNsQyxJQUFNLEdBQUcsR0FBRyxPQUFPLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FDOUIsYUFBYSxFQUNiLFFBQVEsR0FBRyxhQUFXLE1BQVEsR0FBRyxtQkFBaUIsTUFBUSxDQUMzRCxDQUFDLENBQUM7UUFDSCxJQUFNLE9BQU8sY0FDWCxNQUFNLFFBQUE7WUFDTixLQUFLLE9BQUE7WUFDTCxVQUFVLFlBQUE7WUFDVixNQUFNLFFBQUE7WUFDTixZQUFZLGNBQUE7WUFDWixLQUFLLE9BQUE7WUFDTCxPQUFPLFNBQUE7WUFDUCxXQUFXLGFBQUE7WUFDWCxRQUFRLFVBQUEsSUFDTCxJQUFJLENBQ1IsQ0FBQztRQUNGLE1BQU0sQ0FBQyxHQUFHLENBQUMsTUFBTSxFQUFFLE9BQU8sQ0FBQyxJQUFJLE1BQU0sQ0FBQztJQUN4QyxDQUFDLEVBQUUsTUFBTSxDQUFDLENBQUM7QUFDYixDQUFDLENBQUMiLCJmaWxlIjoicGFja2FnZXMvY29yZS93ZWJwYWNrLWNvbmZpZy5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHdlYnBhY2sgPSByZXF1aXJlKCd3ZWJwYWNrJyk7XG5jb25zdCBwYXRoID0gcmVxdWlyZSgncGF0aCcpO1xuY29uc3QgZnMgPSByZXF1aXJlKCdmcycpO1xuY29uc3QgQXNzZXRzUGx1Z2luID0gcmVxdWlyZSgnYXNzZXRzLXdlYnBhY2stcGx1Z2luJyk7XG5jb25zdCBQcm9ncmVzc0JhclBsdWdpbiA9IHJlcXVpcmUoJ3Byb2dyZXNzLWJhci13ZWJwYWNrLXBsdWdpbicpO1xuY29uc3Qgbm9kZUV4dGVybmFscyA9IHJlcXVpcmUoJ3dlYnBhY2stbm9kZS1leHRlcm5hbHMnKTtcbmNvbnN0IFN0YXJ0U2VydmVyUGx1Z2luID0gcmVxdWlyZSgnc3RhcnQtc2VydmVyLXdlYnBhY2stcGx1Z2luJyk7XG5jb25zdCBSZWxvYWRTZXJ2ZXJQbHVnaW4gPSByZXF1aXJlKCdyZWxvYWQtc2VydmVyLXdlYnBhY2stcGx1Z2luJyk7XG5jb25zdCBIdG1sV2VicGFja1BsdWdpbiA9IHJlcXVpcmUoJ2h0bWwtd2VicGFjay1wbHVnaW4nKTtcbmNvbnN0IE9mZmxpbmVQbHVnaW4gPSByZXF1aXJlKCdvZmZsaW5lLXBsdWdpbicpO1xuY29uc3QgVmlzdWFsaXplclBsdWdpbiA9IHJlcXVpcmUoJ3dlYnBhY2stdmlzdWFsaXplci1wbHVnaW4nKTtcbmNvbnN0IEdlbmVyYXRlSnNvblBsdWdpbiA9IHJlcXVpcmUoJ2dlbmVyYXRlLWpzb24td2VicGFjay1wbHVnaW4nKTtcbmNvbnN0IHsgQ2hlY2tlclBsdWdpbiB9ID0gcmVxdWlyZSgnYXdlc29tZS10eXBlc2NyaXB0LWxvYWRlcicpO1xuXG5jb25zdCBhcHBSb290ID0gcHJvY2Vzcy5jd2QoKTtcblxuY29uc3QgdG9wRm9sZGVyID0gcGF0aC5yZXNvbHZlKF9fZGlybmFtZSwgJy4uJyk7XG5jb25zdCBpc0xpbmtlZCA9IHBhdGguYmFzZW5hbWUodG9wRm9sZGVyKSA9PT0gJ3BhY2thZ2VzJztcbmNvbnN0IG5vZGVNb2R1bGVzID0gaXNMaW5rZWRcbiAgPyBwYXRoLnJlc29sdmUoX19kaXJuYW1lLCAnbm9kZV9tb2R1bGVzJylcbiAgOiBwYXRoLnJlc29sdmUoX19kaXJuYW1lLCAnLi4nKTtcbnByb2Nlc3Mubm9EZXByZWNhdGlvbiA9IHRydWU7XG5jb25zdCBhbGxQYWNrYWdlcyA9ICFpc0xpbmtlZFxuICA/IFtdXG4gIDogZnMucmVhZGRpclN5bmModG9wRm9sZGVyKS5maWx0ZXIoeCA9PiB4WzBdICE9PSAnLicpO1xuY29uc3QgcGx1Z2luc0ZvbGRlciA9ICFpc0xpbmtlZCA/IG5vZGVNb2R1bGVzIDogdG9wRm9sZGVyO1xuXG5tb2R1bGUuZXhwb3J0cyA9ICh7XG4gIG1vZGUsXG4gIHRhcmdldCxcbiAgZGV2VXJsLFxuICBkZXZQb3J0LFxuICBzc3IsXG4gIHNlcnZlcmxlc3MsXG4gIHBsdWdpbnMgPSBbXSxcbiAgLi4ucmVzdCxcbn0pID0+IHtcbiAgY29uc3QgaXNEZXYgPSBtb2RlICE9PSAncHJvZHVjdGlvbic7XG4gIGNvbnN0IGlzUHJvZCA9IG1vZGUgPT09ICdwcm9kdWN0aW9uJztcbiAgY29uc3QgaXNXZWIgPSB0YXJnZXQgIT09ICdub2RlJztcbiAgY29uc3QgaXNFbGVjdHJvbiA9IHRhcmdldCA9PT0gJ2VsZWN0cm9uJztcbiAgY29uc3QgaXNOb2RlID0gdGFyZ2V0ID09PSAnbm9kZSc7XG4gIGNvbnN0IGlzU2VydmVybGVzcyA9IHNlcnZlcmxlc3MgPT09IHRydWUgfHwgaXNFbGVjdHJvbjtcbiAgY29uc3QgaXNTU1IgPSBzc3IgIT09IGZhbHNlICYmICFzZXJ2ZXJsZXNzO1xuICBjb25zdCBmb2xkZXIgPSBpc0RldiA/ICcuZGV2JyA6ICcuZGlzdCc7XG5cbiAgY29uc3QgY29uZmlnID0ge1xuICAgIHJlc29sdmU6IHtcbiAgICAgIGV4dGVuc2lvbnM6IFsnLmpzJywgJy50cycsICcudHN4J10sXG4gICAgICBtb2R1bGVzOiBbXG4gICAgICAgIHBhdGgucmVzb2x2ZShhcHBSb290LCAnbm9kZV9tb2R1bGVzJyksXG4gICAgICAgIHBhdGgucmVzb2x2ZShhcHBSb290LCAnYXBwJyksXG4gICAgICBdLmNvbmNhdChcbiAgICAgICAgYWxsUGFja2FnZXMubWFwKHggPT4gcGF0aC5yZXNvbHZlKHRvcEZvbGRlciwgeCwgJ25vZGVfbW9kdWxlcycpKVxuICAgICAgKSxcbiAgICAgIGFsaWFzOiB7XG4gICAgICAgICdAaGlzdG9yeSc6IGlzU2VydmVybGVzc1xuICAgICAgICAgID8gJ2hpc3RvcnkvY3JlYXRlSGFzaEhpc3RvcnknXG4gICAgICAgICAgOiBpc05vZGVcbiAgICAgICAgICAgID8gJ2hpc3RvcnkvY3JlYXRlTWVtb3J5SGlzdG9yeSdcbiAgICAgICAgICAgIDogJ2hpc3RvcnkvY3JlYXRlQnJvd3Nlckhpc3RvcnknLFxuICAgICAgICByZWFjdDogcGF0aC5yZXNvbHZlKGFwcFJvb3QsICdub2RlX21vZHVsZXMnLCAncmVhY3QnKSxcbiAgICAgICAgLy8gJ2NvcmUtanMnOiBwYXRoLnJlc29sdmUoYXBwUm9vdCwgJ25vZGVfbW9kdWxlcycsICdjb3JlLWpzJyksXG4gICAgICAgICdyZWFjdC1kb20nOiBwYXRoLnJlc29sdmUoYXBwUm9vdCwgJ25vZGVfbW9kdWxlcycsICdyZWFjdC1kb20nKSxcbiAgICAgICAgLy8gJ3JlYWN0LXJvdXRlcic6IHBhdGgucmVzb2x2ZShhcHBSb290LCAnbm9kZV9tb2R1bGVzJywgJ3JlYWN0LXJvdXRlcicpLFxuICAgICAgICAvLyBtb21lbnQ6IHBhdGgucmVzb2x2ZShhcHBSb290LCAnbm9kZV9tb2R1bGVzJywgJ21vbWVudCcpLFxuICAgICAgICAvLyBsb2Rhc2g6IHBhdGgucmVzb2x2ZShhcHBSb290LCAnbm9kZV9tb2R1bGVzJywgJ2xvZGFzaCcpLFxuICAgICAgICAnQHJvb3QnOiBhcHBSb290LFxuICAgICAgICAnQGFwcCc6XG4gICAgICAgICAgaXNOb2RlICYmICFpc1NTUlxuICAgICAgICAgICAgPyBwYXRoLnJlc29sdmUoX19kaXJuYW1lLCAnbm9vcCcpXG4gICAgICAgICAgICA6IHBhdGgucmVzb2x2ZShhcHBSb290LCAnYXBwJyksXG4gICAgICAgIC4uLmFsbFBhY2thZ2VzLnJlZHVjZSgob2JqLCBpdGVtKSA9PiB7XG4gICAgICAgICAgLy8gZ2V0IGFsbCBmb2xkZXJzIGluIHNyYyBhbmQgY3JlYXRlICdvbHltcC14eHgnIGFsaWFzXG4gICAgICAgICAgaWYgKGl0ZW0gPT09ICdjb3JlJykge1xuICAgICAgICAgICAgb2JqLm9seW1wID0gcGF0aC5yZXNvbHZlKHRvcEZvbGRlciwgaXRlbSk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG9ialtgb2x5bXAtJHtpdGVtfWBdID0gcGF0aC5yZXNvbHZlKHRvcEZvbGRlciwgaXRlbSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiBvYmo7XG4gICAgICAgIH0sIHt9KSxcbiAgICAgIH0sXG4gICAgfSxcbiAgICByZXNvbHZlTG9hZGVyOiB7XG4gICAgICBtb2R1bGVzOiBbXG4gICAgICAgIHBhdGgucmVzb2x2ZShub2RlTW9kdWxlcyksXG4gICAgICAgIHBhdGgucmVzb2x2ZShhcHBSb290LCAnbm9kZV9tb2R1bGVzJyksXG4gICAgICBdLFxuICAgIH0sXG4gICAgcGx1Z2luczogW1xuICAgICAgLy8gbmV3IHdlYnBhY2sub3B0aW1pemUuTW9kdWxlQ29uY2F0ZW5hdGlvblBsdWdpbigpLFxuICAgICAgbmV3IHdlYnBhY2suRGVmaW5lUGx1Z2luKHtcbiAgICAgICAgJ3Byb2Nlc3MuZW52LlNTUic6IEpTT04uc3RyaW5naWZ5KGlzU1NSKSxcbiAgICAgICAgJ3Byb2Nlc3MuZW52LlNFUlZFUkxFU1MnOiBKU09OLnN0cmluZ2lmeShpc1NlcnZlcmxlc3MpLFxuICAgICAgICAncHJvY2Vzcy5lbnYuTk9ERV9FTlYnOiBKU09OLnN0cmluZ2lmeShtb2RlKSxcbiAgICAgICAgJ3Byb2Nlc3MuZW52LkRFVl9QT1JUJzogSlNPTi5zdHJpbmdpZnkoZGV2UG9ydCksXG4gICAgICAgICdwcm9jZXNzLmVudi5ERVZfVVJMJzogZGV2VXJsXG4gICAgICAgICAgPyBKU09OLnN0cmluZ2lmeShkZXZVcmwub3JpZ2luKVxuICAgICAgICAgIDogdW5kZWZpbmVkLFxuICAgICAgICAncHJvY2Vzcy5lbnYuSVNfV0VCJzogaXNXZWIgPyBKU09OLnN0cmluZ2lmeSh0cnVlKSA6IHVuZGVmaW5lZCxcbiAgICAgICAgJ3Byb2Nlc3MuZW52LklTX05PREUnOiBpc05vZGUgPyBKU09OLnN0cmluZ2lmeSh0cnVlKSA6IHVuZGVmaW5lZCxcbiAgICAgICAgJ3Byb2Nlc3MuZW52LklTX0VMRUNUUk9OJzogaXNFbGVjdHJvblxuICAgICAgICAgID8gSlNPTi5zdHJpbmdpZnkodHJ1ZSlcbiAgICAgICAgICA6IHVuZGVmaW5lZCxcbiAgICAgIH0pLFxuICAgICAgLy8gbmV3IFByZXBhY2tXZWJwYWNrUGx1Z2luKHsgfSksXG4gICAgICBuZXcgd2VicGFjay5Db250ZXh0UmVwbGFjZW1lbnRQbHVnaW4oL21vbWVudFsvXFxcXF1sb2NhbGUkLywgL2RlLyksXG4gICAgICBuZXcgd2VicGFjay5OYW1lZE1vZHVsZXNQbHVnaW4oKSxcbiAgICAgIG5ldyBQcm9ncmVzc0JhclBsdWdpbigpLFxuICAgICAgbmV3IHdlYnBhY2suTm9FbWl0T25FcnJvcnNQbHVnaW4oKSxcbiAgICAgIC8vIG5ldyBDaGVja2VyUGx1Z2luKCksXG4gICAgXSxcbiAgICBtb2R1bGU6IHtcbiAgICAgIHJ1bGVzOiBbXG4gICAgICAgIHtcbiAgICAgICAgICB0ZXN0OiAvXFwuaHRtbCQvLFxuICAgICAgICAgIGxvYWRlcjogJ2ZpbGUtbG9hZGVyP25hbWU9W25hbWVdLltleHRdJyxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIHRlc3Q6IC9cXC4oanBnfGpwZWd8cG5nfGdpZnxlb3R8dHRmfHdvZmZ8d29mZjIpJC8sXG4gICAgICAgICAgbG9hZGVyOiAndXJsLWxvYWRlcicsXG4gICAgICAgICAgb3B0aW9uczoge1xuICAgICAgICAgICAgbGltaXQ6IDIwMDAwLFxuICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICB0ZXN0OiAvXFwuKHR4dHxtZCkkLyxcbiAgICAgICAgICBsb2FkZXI6ICdyYXctbG9hZGVyJyxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIHRlc3Q6IC9cXC5qc29uJC8sXG4gICAgICAgICAgbG9hZGVyOiAnanNvbi1sb2FkZXInLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgdGVzdDogL1xcLihncmFwaHFsfGdxbCkkLyxcbiAgICAgICAgICBleGNsdWRlOiAvbm9kZV9tb2R1bGVzLyxcbiAgICAgICAgICBsb2FkZXI6ICdncmFwaHFsLXRhZy9sb2FkZXInLFxuICAgICAgICB9LFxuICAgICAgXSxcbiAgICB9LFxuICAgIG91dHB1dDoge1xuICAgICAgcGF0aDogcGF0aC5yZXNvbHZlKGFwcFJvb3QsIGZvbGRlciwgdGFyZ2V0KSxcbiAgICB9LFxuICAgIGVudHJ5OiB7XG4gICAgICBtYWluOiBbXSxcbiAgICB9LFxuICB9O1xuXG4gIGlmICghaXNOb2RlKSB7XG4gICAgY29uZmlnLnBsdWdpbnMucHVzaChcbiAgICAgIG5ldyB3ZWJwYWNrLkRlZmluZVBsdWdpbih7XG4gICAgICAgICdwcm9jZXNzLmVudi5BTVAnOiBwcm9jZXNzLmVudi5BTVBcbiAgICAgICAgICA/IEpTT04uc3RyaW5naWZ5KHByb2Nlc3MuZW52LkFNUClcbiAgICAgICAgICA6IHVuZGVmaW5lZCxcbiAgICAgICAgJ3Byb2Nlc3MuZW52LkdNX0tFWSc6IEpTT04uc3RyaW5naWZ5KHByb2Nlc3MuZW52LkdNX0tFWSksXG4gICAgICAgICdwcm9jZXNzLmVudi5HUkFQSFFMX1VSTCc6IHByb2Nlc3MuZW52LkdSQVBIUUxfVVJMXG4gICAgICAgICAgPyBKU09OLnN0cmluZ2lmeShwcm9jZXNzLmVudi5HUkFQSFFMX1VSTClcbiAgICAgICAgICA6IHVuZGVmaW5lZCxcbiAgICAgICAgLyoncHJvY2Vzcy5lbnYuR1JBUEhRTF9TVUInOiBwcm9jZXNzLmVudi5HUkFQSFFMX1NVQlxuICAgICAgPyBKU09OLnN0cmluZ2lmeShwcm9jZXNzLmVudi5HUkFQSFFMX1NVQilcbiAgICAgIDogdW5kZWZpbmVkLCovXG4gICAgICAgICdwcm9jZXNzLmVudi5VUkwnOiBwcm9jZXNzLmVudi5VUkxcbiAgICAgICAgICA/IEpTT04uc3RyaW5naWZ5KHByb2Nlc3MuZW52LlVSTClcbiAgICAgICAgICA6IHVuZGVmaW5lZCxcbiAgICAgICAgJ3Byb2Nlc3MuZW52LkZJTEVTVEFDS19LRVknOiBwcm9jZXNzLmVudi5GSUxFU1RBQ0tfS0VZXG4gICAgICAgICAgPyBKU09OLnN0cmluZ2lmeShwcm9jZXNzLmVudi5GSUxFU1RBQ0tfS0VZKVxuICAgICAgICAgIDogdW5kZWZpbmVkLFxuICAgICAgfSlcbiAgICApO1xuICB9XG5cbiAgLy8gaW5saW5lLXNvdXJjZS1tYXAgZm9yIHdlYi1kZXZcbiAgY29uZmlnLmRldnRvb2wgPSAnc291cmNlLW1hcCc7XG5cbiAgLy8gaW5saW5lLXNvdXJjZS1tYXAgZm9yIHdlYi1kZXZcbiAgaWYgKGlzUHJvZCAmJiBpc1dlYiAmJiAhaXNFbGVjdHJvbikge1xuICAgIGNvbmZpZy5vdXRwdXQuZmlsZW5hbWUgPSAnW25hbWVdLltjb250ZW50aGFzaF0uanMnO1xuICB9IGVsc2Uge1xuICAgIGNvbmZpZy5vdXRwdXQuZmlsZW5hbWUgPSAnW25hbWVdLmpzJztcbiAgfVxuXG4gIC8vIHRhcmdldCAmJiBub2RlIHNldHRpbmdzXG4gIGlmIChpc05vZGUpIHtcbiAgICBjb25maWcudGFyZ2V0ID0gJ25vZGUnO1xuICAgIGNvbmZpZy53YXRjaCA9IGlzRGV2O1xuICAgIGNvbmZpZy5ub2RlID0ge1xuICAgICAgX19kaXJuYW1lOiBmYWxzZSxcbiAgICAgIF9fZmlsZW5hbWU6IGZhbHNlLFxuICAgIH07XG4gICAgY29uZmlnLm91dHB1dC5saWJyYXJ5VGFyZ2V0ID0gJ2NvbW1vbmpzMic7XG4gIH0gZWxzZSBpZiAoaXNFbGVjdHJvbikge1xuICAgIGNvbmZpZy50YXJnZXQgPSAnZWxlY3Ryb24tbWFpbic7XG4gICAgY29uZmlnLm5vZGUgPSB7XG4gICAgICBfX2Rpcm5hbWU6IGZhbHNlLFxuICAgICAgX19maWxlbmFtZTogZmFsc2UsXG4gICAgfTtcbiAgICBjb25maWcub3V0cHV0LmxpYnJhcnlUYXJnZXQgPSAnY29tbW9uanMyJztcbiAgfSBlbHNlIHtcbiAgICBjb25maWcudGFyZ2V0ID0gJ3dlYic7XG4gICAgY29uZmlnLm5vZGUgPSB7XG4gICAgICBfX2Rpcm5hbWU6IHRydWUsXG4gICAgICBfX2ZpbGVuYW1lOiB0cnVlLFxuICAgIH07XG4gICAgY29uZmlnLm91dHB1dC5saWJyYXJ5VGFyZ2V0ID0gJ3Zhcic7XG4gIH1cblxuICBpZiAoaXNEZXYgJiYgaXNXZWIpIHtcbiAgICBjb25maWcub3V0cHV0LnB1YmxpY1BhdGggPSBkZXZVcmwuaHJlZjtcbiAgfSBlbHNlIHtcbiAgICBjb25maWcub3V0cHV0LnB1YmxpY1BhdGggPSAnLyc7XG4gIH1cblxuICAvLyBiYWJlbC1wcmVzZXQtZW52IG9uIG5vZGVcbiAgaWYgKGlzUHJvZCAmJiBpc1dlYikge1xuICAgIC8qYmFiZWwub3B0aW9ucy5wbHVnaW5zLnB1c2goW1xuICAgICAgJ3RyYW5zZm9ybS1pbXBvcnRzJyxcbiAgICAgIHtcbiAgICAgICAgYW50ZDoge1xuICAgICAgICAgIHRyYW5zZm9ybTogJ2FudGQvbGliLyR7bWVtYmVyfScsXG4gICAgICAgICAga2ViYWJDYXNlOiB0cnVlLFxuICAgICAgICAgIHByZXZlbnRGdWxsSW1wb3J0OiB0cnVlLFxuICAgICAgICB9LFxuICAgICAgICBsb2Rhc2g6IHtcbiAgICAgICAgICB0cmFuc2Zvcm06ICdsb2Rhc2gvJHttZW1iZXJ9JyxcbiAgICAgICAgICBwcmV2ZW50RnVsbEltcG9ydDogdHJ1ZSxcbiAgICAgICAgfSxcbiAgICAgICAgJ2RhdGUtZm5zJzoge1xuICAgICAgICAgIHRyYW5zZm9ybTogJ2RhdGUtZm5zLyR7bWVtYmVyfScsXG4gICAgICAgICAgcHJldmVudEZ1bGxJbXBvcnQ6IHRydWUsXG4gICAgICAgICAgc25ha2VDYXNlOiB0cnVlLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICBdKTsqL1xuICB9XG5cbiAgLy8gd2VicGFjayBwbHVnaW5zXG4gIGlmIChpc1dlYiAmJiBpc1Byb2QpIHtcbiAgICBjb25maWcucGx1Z2lucy5wdXNoKG5ldyB3ZWJwYWNrLm9wdGltaXplLk9jY3VycmVuY2VPcmRlclBsdWdpbigpKTtcbiAgICAvLyBjb25maWcucGx1Z2lucy5wdXNoKG5ldyB3ZWJwYWNrLm9wdGltaXplLkRlZHVwZVBsdWdpbigpKTtcbiAgICBpZiAoaXNFbGVjdHJvbikge1xuICAgICAgY29uZmlnLnBsdWdpbnMucHVzaChuZXcgR2VuZXJhdGVKc29uUGx1Z2luKCdwYWNrYWdlLmpzb24nLCB7fSkpO1xuICAgIH1cbiAgICBjb25maWcucGx1Z2lucy5wdXNoKFxuICAgICAgbmV3IHdlYnBhY2suTG9hZGVyT3B0aW9uc1BsdWdpbih7XG4gICAgICAgIG1pbmltaXplOiB0cnVlLFxuICAgICAgICBkZWJ1ZzogZmFsc2UsXG4gICAgICB9KVxuICAgICk7XG4gICAgY29uZmlnLnBsdWdpbnMucHVzaChcbiAgICAgIG5ldyB3ZWJwYWNrLm9wdGltaXplLlVnbGlmeUpzUGx1Z2luKHtcbiAgICAgICAgY29tcHJlc3M6IHtcbiAgICAgICAgICBzY3Jld19pZTg6IHRydWUsXG4gICAgICAgICAgd2FybmluZ3M6IGZhbHNlLFxuICAgICAgICB9LFxuICAgICAgICBtYW5nbGU6IHtcbiAgICAgICAgICBzY3Jld19pZTg6IHRydWUsXG4gICAgICAgIH0sXG4gICAgICAgIG91dHB1dDoge1xuICAgICAgICAgIGNvbW1lbnRzOiBmYWxzZSxcbiAgICAgICAgICBzY3Jld19pZTg6IHRydWUsXG4gICAgICAgIH0sXG4gICAgICAgIHNvdXJjZU1hcDogZmFsc2UsXG4gICAgICB9KVxuICAgICk7XG4gIH1cbiAgaWYgKGlzTm9kZSkge1xuICAgIGlmIChpc0Rldikge1xuICAgICAgY29uZmlnLnBsdWdpbnMucHVzaChuZXcgU3RhcnRTZXJ2ZXJQbHVnaW4oJ21haW4uanMnKSk7XG4gICAgICBjb25maWcucGx1Z2lucy5wdXNoKFxuICAgICAgICBuZXcgUmVsb2FkU2VydmVyUGx1Z2luKHtcbiAgICAgICAgICAvLyBEZWZhdWx0cyB0byBwcm9jZXNzLmN3ZCgpICsgXCIvc2VydmVyLmpzXCJcbiAgICAgICAgICBzY3JpcHQ6IHBhdGgucmVzb2x2ZShfX2Rpcm5hbWUsICdub2RlJywgJ2luZGV4LmpzJyksXG4gICAgICAgIH0pXG4gICAgICApO1xuICAgIH1cbiAgICBjb25maWcucGx1Z2lucy5wdXNoKFxuICAgICAgbmV3IHdlYnBhY2suQmFubmVyUGx1Z2luKHtcbiAgICAgICAgYmFubmVyOiAncmVxdWlyZShcInNvdXJjZS1tYXAtc3VwcG9ydFwiKS5pbnN0YWxsKCk7JyxcbiAgICAgICAgcmF3OiB0cnVlLFxuICAgICAgICBlbnRyeU9ubHk6IHRydWUsXG4gICAgICB9KVxuICAgICk7XG4gIH0gZWxzZSB7XG4gICAgY29uZmlnLnBsdWdpbnMucHVzaChcbiAgICAgIG5ldyBBc3NldHNQbHVnaW4oe1xuICAgICAgICBmaWxlbmFtZTogJ2Fzc2V0cy5qc29uJyxcbiAgICAgICAgcGF0aDogcGF0aC5yZXNvbHZlKHByb2Nlc3MuY3dkKCksIGZvbGRlciwgdGFyZ2V0KSxcbiAgICAgIH0pXG4gICAgKTtcbiAgICBpZiAoaXNQcm9kICYmICFpc1NlcnZlcmxlc3MpIHtcbiAgICAgIGNvbmZpZy5wbHVnaW5zLnB1c2goXG4gICAgICAgIG5ldyBIdG1sV2VicGFja1BsdWdpbih7XG4gICAgICAgICAgZmlsZW5hbWU6ICdvZmZsaW5lLmh0bWwnLFxuICAgICAgICAgIHRlbXBsYXRlOiBwYXRoLnJlc29sdmUoX19kaXJuYW1lLCAndGVtcGxhdGVzJywgJ2RlZmF1bHQuanMnKSxcbiAgICAgICAgICBpbmplY3Q6IGZhbHNlLFxuICAgICAgICAgIC8qIG1pbmlmeToge1xuICAgICAgICAgIHJlbW92ZUNvbW1lbnRzOiB0cnVlLFxuICAgICAgICAgIGNvbGxhcHNlV2hpdGVzcGFjZTogdHJ1ZSxcbiAgICAgICAgICByZW1vdmVSZWR1bmRhbnRBdHRyaWJ1dGVzOiB0cnVlLFxuICAgICAgICAgIHVzZVNob3J0RG9jdHlwZTogdHJ1ZSxcbiAgICAgICAgICByZW1vdmVFbXB0eUF0dHJpYnV0ZXM6IHRydWUsXG4gICAgICAgICAgcmVtb3ZlU3R5bGVMaW5rVHlwZUF0dHJpYnV0ZXM6IHRydWUsXG4gICAgICAgICAga2VlcENsb3NpbmdTbGFzaDogdHJ1ZSxcbiAgICAgICAgICBtaW5pZnlKUzogdHJ1ZSxcbiAgICAgICAgICBtaW5pZnlDU1M6IHRydWUsXG4gICAgICAgICAgbWluaWZ5VVJMczogdHJ1ZSxcbiAgICAgICAgfSwqL1xuICAgICAgICB9KVxuICAgICAgKTtcbiAgICAgIGNvbmZpZy5wbHVnaW5zLnB1c2goXG4gICAgICAgIG5ldyBPZmZsaW5lUGx1Z2luKHtcbiAgICAgICAgICByZXNwb25zZVN0cmF0ZWd5OiAnbmV0d29yay1maXJzdCcsXG4gICAgICAgICAgZXh0ZXJuYWxzOiBbXG4gICAgICAgICAgICAnaHR0cHM6Ly9jZG4ucG9seWZpbGwuaW8vdjIvcG9seWZpbGwubWluLmpzP2NhbGxiYWNrPVBPTFknLFxuICAgICAgICAgIF0sXG4gICAgICAgICAgLy8gYXV0b1VwZGF0ZTogMTAwMCAqIDYwICogNSxcbiAgICAgICAgICBjYWNoZXM6ICdhbGwnLFxuICAgICAgICAgIFNlcnZpY2VXb3JrZXI6IHtcbiAgICAgICAgICAgIGV2ZW50czogdHJ1ZSxcbiAgICAgICAgICAgIG5hdmlnYXRlRmFsbGJhY2tVUkw6ICcvb2ZmbGluZS5odG1sJyxcbiAgICAgICAgICB9LFxuICAgICAgICAgIEFwcENhY2hlOiBmYWxzZSxcbiAgICAgICAgfSlcbiAgICAgICk7XG4gICAgICBjb25maWcucGx1Z2lucy5wdXNoKFxuICAgICAgICBuZXcgVmlzdWFsaXplclBsdWdpbih7XG4gICAgICAgICAgZmlsZW5hbWU6ICcuL3Zpc3VhbGl6ZXIuaHRtbCcsXG4gICAgICAgIH0pXG4gICAgICApO1xuICAgIH0gZWxzZSBpZiAoaXNTZXJ2ZXJsZXNzKSB7XG4gICAgICBjb25maWcucGx1Z2lucy5wdXNoKFxuICAgICAgICBuZXcgSHRtbFdlYnBhY2tQbHVnaW4oe1xuICAgICAgICAgIGZpbGVuYW1lOiAnaW5kZXguaHRtbCcsXG4gICAgICAgICAgdGVtcGxhdGU6IHBhdGgucmVzb2x2ZShcbiAgICAgICAgICAgIF9fZGlybmFtZSxcbiAgICAgICAgICAgICd0ZW1wbGF0ZXMnLFxuICAgICAgICAgICAgaXNFbGVjdHJvbiA/ICdlbGVjdHJvbi5qcycgOiAnc2VydmVybGVzcy5qcydcbiAgICAgICAgICApLFxuICAgICAgICAgIGluamVjdDogZmFsc2UsXG4gICAgICAgICAgLyogbWluaWZ5OiB7XG4gICAgICAgICAgcmVtb3ZlQ29tbWVudHM6IHRydWUsXG4gICAgICAgICAgY29sbGFwc2VXaGl0ZXNwYWNlOiB0cnVlLFxuICAgICAgICAgIHJlbW92ZVJlZHVuZGFudEF0dHJpYnV0ZXM6IHRydWUsXG4gICAgICAgICAgdXNlU2hvcnREb2N0eXBlOiB0cnVlLFxuICAgICAgICAgIHJlbW92ZUVtcHR5QXR0cmlidXRlczogdHJ1ZSxcbiAgICAgICAgICByZW1vdmVTdHlsZUxpbmtUeXBlQXR0cmlidXRlczogdHJ1ZSxcbiAgICAgICAgICBrZWVwQ2xvc2luZ1NsYXNoOiB0cnVlLFxuICAgICAgICAgIG1pbmlmeUpTOiB0cnVlLFxuICAgICAgICAgIG1pbmlmeUNTUzogdHJ1ZSxcbiAgICAgICAgICBtaW5pZnlVUkxzOiB0cnVlLFxuICAgICAgICB9LCovXG4gICAgICAgIH0pXG4gICAgICApO1xuICAgIH1cbiAgfVxuXG4gIC8vIEhvdCBtb2R1bGUgcmVwbGFjZW1lbnQgb24gZGV2XG4gIGlmIChpc0Rldikge1xuICAgIGNvbmZpZy5wbHVnaW5zLnB1c2gobmV3IHdlYnBhY2suSG90TW9kdWxlUmVwbGFjZW1lbnRQbHVnaW4oKSk7XG4gIH1cblxuICAvLyBMaW1pdENodW5rQ291bnQgb24gYWxsIGJ1dCBwcm9kdWN0aW9uLXdlYlxuICBpZiAoaXNEZXYgfHwgaXNOb2RlIHx8IGlzRWxlY3Ryb24pIHtcbiAgICBjb25maWcucGx1Z2lucy5wdXNoKFxuICAgICAgbmV3IHdlYnBhY2sub3B0aW1pemUuTGltaXRDaHVua0NvdW50UGx1Z2luKHsgbWF4Q2h1bmtzOiAxIH0pXG4gICAgKTtcbiAgICBjb25maWcub3V0cHV0LmZpbGVuYW1lID0gJ1tuYW1lXS5qcyc7XG4gIH0gZWxzZSB7XG4gICAgY29uZmlnLm91dHB1dC5maWxlbmFtZSA9ICdbbmFtZV0uW2NodW5raGFzaF0uanMnO1xuICAgIGNvbmZpZy5vdXRwdXQuY2h1bmtGaWxlbmFtZSA9ICdbbmFtZV0uW2NodW5raGFzaF0uanMnO1xuICB9XG5cbiAgLy8gZXh0ZXJuYWxzXG4gIGlmIChpc05vZGUpIHtcbiAgICBjb25maWcuZXh0ZXJuYWxzID0gYWxsUGFja2FnZXNcbiAgICAgIC5tYXAoeCA9PiBwYXRoLnJlc29sdmUodG9wRm9sZGVyLCB4LCAnbm9kZV9tb2R1bGVzJykpXG4gICAgICAuY29uY2F0KFtwYXRoLnJlc29sdmUoYXBwUm9vdCwgJ25vZGVfbW9kdWxlcycpXSlcbiAgICAgIC5tYXAobW9kdWxlc0RpciA9PlxuICAgICAgICBub2RlRXh0ZXJuYWxzKHtcbiAgICAgICAgICBtb2R1bGVzRGlyLFxuICAgICAgICAgIHdoaXRlbGlzdDogW1xuICAgICAgICAgICAgdiA9PiB2LmluZGV4T2YoJ3dlYnBhY2svaG90L3BvbGwnKSA9PT0gMCxcbiAgICAgICAgICAgICdzb3VyY2UtbWFwLXN1cHBvcnQvcmVnaXN0ZXInLFxuICAgICAgICAgICAgdiA9PiB2LmluZGV4T2YoJ29seW1wLScpID09PSAwLFxuICAgICAgICAgICAgLy8gdiA9PiB2ID09PSAnYW50ZCcgfHwgdi5pbmRleE9mKCdhbnRkLycpID09PSAwLFxuICAgICAgICAgICAgL1xcLihlb3R8d29mZnx3b2ZmMnx0dGZ8b3RmKSQvLFxuICAgICAgICAgICAgL1xcLihzdmd8cG5nfGpwZ3xqcGVnfGdpZnxpY28pJC8sXG4gICAgICAgICAgICAvXFwuKG1wNHxtcDN8b2dnfHN3Znx3ZWJwKSQvLFxuICAgICAgICAgICAgL1xcLihjc3N8c2Nzc3xzYXNzfHNzc3xsZXNzKSQvLFxuICAgICAgICAgIF0sXG4gICAgICAgIH0pXG4gICAgICApO1xuICB9XG5cbiAgaWYgKGlzV2ViICYmIGlzRGV2KSB7XG4gICAgY29uZmlnLmVudHJ5Lm1haW4gPSBbXG4gICAgICAncmVhY3QtaG90LWxvYWRlci9wYXRjaCcsXG4gICAgICBgd2VicGFjay1kZXYtc2VydmVyL2NsaWVudD8ke2NvbmZpZy5vdXRwdXQucHVibGljUGF0aH1gLFxuICAgICAgJ3dlYnBhY2svaG90L29ubHktZGV2LXNlcnZlcicsXG4gICAgICByZXF1aXJlLnJlc29sdmUocGF0aC5yZXNvbHZlKF9fZGlybmFtZSwgdGFyZ2V0KSksXG4gICAgXTtcbiAgfSBlbHNlIGlmIChpc05vZGUgJiYgaXNEZXYpIHtcbiAgICBjb25maWcuZW50cnkubWFpbiA9IFtcbiAgICAgICd3ZWJwYWNrL2hvdC9wb2xsPzEwMDAnLFxuICAgICAgcmVxdWlyZS5yZXNvbHZlKHBhdGgucmVzb2x2ZShfX2Rpcm5hbWUsIHRhcmdldCkpLFxuICAgIF07XG4gIH0gZWxzZSBpZiAoaXNFbGVjdHJvbikge1xuICAgIGNvbmZpZy5lbnRyeS5tYWluID0gW1xuICAgICAgcmVxdWlyZS5yZXNvbHZlKHBhdGgucmVzb2x2ZShfX2Rpcm5hbWUsICd3ZWInLCAnaW5kZXguanMnKSksXG4gICAgXTtcbiAgICBjb25maWcuZW50cnkuYXBwID0gW1xuICAgICAgcmVxdWlyZS5yZXNvbHZlKHBhdGgucmVzb2x2ZShfX2Rpcm5hbWUsICdlbGVjdHJvbicsICdtYWluLmpzJykpLFxuICAgIF07XG4gIH0gZWxzZSB7XG4gICAgY29uZmlnLmVudHJ5Lm1haW4gPSBbXG4gICAgICByZXF1aXJlLnJlc29sdmUocGF0aC5yZXNvbHZlKF9fZGlybmFtZSwgdGFyZ2V0LCAnaW5kZXguanMnKSksXG4gICAgXTtcbiAgfVxuXG4gIGlmIChpc1Byb2QpIHtcbiAgICBjb25maWcubW9kdWxlLnJ1bGVzLnB1c2goe1xuICAgICAgdGVzdDogL1xcLnRzeD8kLyxcbiAgICAgIGluY2x1ZGU6IFtwYXRoLnJlc29sdmUoYXBwUm9vdCwgJ2FwcCcpLCBwYXRoLnJlc29sdmUoYXBwUm9vdCwgJ3NlcnZlcicpXSxcbiAgICAgIHVzZTogW1xuICAgICAgICB7XG4gICAgICAgICAgbG9hZGVyOiAnYXdlc29tZS10eXBlc2NyaXB0LWxvYWRlcicsXG4gICAgICAgICAgb3B0aW9uczoge1xuICAgICAgICAgICAgc2lsZW50OiB0cnVlLFxuICAgICAgICAgICAgdHJhbnNwaWxlT25seTogdHJ1ZSxcbiAgICAgICAgICAgIGNvbmZpZ0ZpbGVOYW1lOiBwYXRoLnJlc29sdmUoX19kaXJuYW1lLCAndHNjb25maWcuanNvbicpLFxuICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICBdLFxuICAgIH0pO1xuICB9IGVsc2Uge1xuICAgIGNvbmZpZy5tb2R1bGUucnVsZXMucHVzaCh7XG4gICAgICB0ZXN0OiAvXFwudHN4PyQvLFxuICAgICAgaW5jbHVkZTogW3BhdGgucmVzb2x2ZShhcHBSb290LCAnYXBwJyksIHBhdGgucmVzb2x2ZShhcHBSb290LCAnc2VydmVyJyldLFxuICAgICAgdXNlOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBsb2FkZXI6ICdyZWFjdC1ob3QtbG9hZGVyL3dlYnBhY2snLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgbG9hZGVyOiAnYXdlc29tZS10eXBlc2NyaXB0LWxvYWRlcicsXG4gICAgICAgICAgb3B0aW9uczoge1xuICAgICAgICAgICAgc2lsZW50OiB0cnVlLFxuICAgICAgICAgICAgdHJhbnNwaWxlT25seTogdHJ1ZSxcbiAgICAgICAgICAgIGNvbmZpZ0ZpbGVOYW1lOiBwYXRoLnJlc29sdmUoX19kaXJuYW1lLCAndHNjb25maWcuanNvbicpLFxuICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICBdLFxuICAgIH0pO1xuICB9XG4gIHJldHVybiBwbHVnaW5zLnJlZHVjZSgoc3RvcmUsIHBsdWdpbikgPT4ge1xuICAgIGNvbnN0IHJlcSA9IHJlcXVpcmUocGF0aC5yZXNvbHZlKFxuICAgICAgcGx1Z2luc0ZvbGRlcixcbiAgICAgIGlzTGlua2VkID8gYHdlYnBhY2stJHtwbHVnaW59YCA6IGBvbHltcC13ZWJwYWNrLSR7cGx1Z2lufWBcbiAgICApKTtcbiAgICBjb25zdCBvcHRpb25zID0ge1xuICAgICAgaXNQcm9kLFxuICAgICAgaXNXZWIsXG4gICAgICBpc0VsZWN0cm9uLFxuICAgICAgaXNOb2RlLFxuICAgICAgaXNTZXJ2ZXJsZXNzLFxuICAgICAgaXNTU1IsXG4gICAgICBhcHBSb290LFxuICAgICAgbm9kZU1vZHVsZXMsXG4gICAgICBpc0xpbmtlZCxcbiAgICAgIC4uLnJlc3QsXG4gICAgfTtcbiAgICByZXR1cm4gcmVxKGNvbmZpZywgb3B0aW9ucykgfHwgY29uZmlnO1xuICB9LCBjb25maWcpO1xufTtcbiJdfQ==
