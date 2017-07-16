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
            alias: __assign({ 'history/createFlexHistory': isServerless
                    ? 'history/createHashHistory'
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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhY2thZ2VzL2NvcmUvd2VicGFjay1jb25maWcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFNLE9BQU8sR0FBRyxPQUFPLENBQUMsU0FBUyxDQUFDLENBQUM7QUFDbkMsSUFBTSxJQUFJLEdBQUcsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0FBQzdCLElBQU0sRUFBRSxHQUFHLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztBQUN6QixJQUFNLFlBQVksR0FBRyxPQUFPLENBQUMsdUJBQXVCLENBQUMsQ0FBQztBQUN0RCxJQUFNLGlCQUFpQixHQUFHLE9BQU8sQ0FBQyw2QkFBNkIsQ0FBQyxDQUFDO0FBQ2pFLElBQU0sYUFBYSxHQUFHLE9BQU8sQ0FBQyx3QkFBd0IsQ0FBQyxDQUFDO0FBQ3hELElBQU0saUJBQWlCLEdBQUcsT0FBTyxDQUFDLDZCQUE2QixDQUFDLENBQUM7QUFDakUsSUFBTSxrQkFBa0IsR0FBRyxPQUFPLENBQUMsOEJBQThCLENBQUMsQ0FBQztBQUNuRSxJQUFNLGlCQUFpQixHQUFHLE9BQU8sQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDO0FBQ3pELElBQU0sYUFBYSxHQUFHLE9BQU8sQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO0FBQ2hELElBQU0sZ0JBQWdCLEdBQUcsT0FBTyxDQUFDLDJCQUEyQixDQUFDLENBQUM7QUFDOUQsSUFBTSxrQkFBa0IsR0FBRyxPQUFPLENBQUMsOEJBQThCLENBQUMsQ0FBQztBQUMzRCxJQUFBLGtFQUFhLENBQTBDO0FBRS9ELElBQU0sT0FBTyxHQUFHLE9BQU8sQ0FBQyxHQUFHLEVBQUUsQ0FBQztBQUU5QixJQUFNLFNBQVMsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsQ0FBQztBQUNoRCxJQUFNLFFBQVEsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxLQUFLLFVBQVUsQ0FBQztBQUN6RCxJQUFNLFdBQVcsR0FB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LElBQUk7d0JBQ1osYUFBYSxFQUFFLElBQUk7d0JBQ25CLGNBQWMsRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsRUFBRSxlQUFlLENBQUM7cUJBQ3pEO2lCQUNGO2FBQ0Y7U0FDRixDQUFDLENBQUM7SUFDTCxDQUFDO0lBQ0QsTUFBTSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsVUFBQyxLQUFLLEVBQUUsTUFBTTtRQUNsQyxJQUFNLEdBQUcsR0FBRyxPQUFPLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FDOUIsYUFBYSxFQUNiLFFBQVEsR0FBRyxhQUFXLE1BQVEsR0FBRyxtQkFBaUIsTUFBUSxDQUMzRCxDQUFDLENBQUM7UUFDSCxJQUFNLE9BQU8sY0FDWCxNQUFNLFFBQUE7WUFDTixLQUFLLE9BQUE7WUFDTCxVQUFVLFlBQUE7WUFDVixNQUFNLFFBQUE7WUFDTixZQUFZLGNBQUE7WUFDWixLQUFLLE9BQUE7WUFDTCxPQUFPLFNBQUE7WUFDUCxXQUFXLGFBQUE7WUFDWCxRQUFRLFVBQUEsSUFDTCxJQUFJLENBQ1IsQ0FBQztRQUNGLE1BQU0sQ0FBQyxHQUFHLENBQUMsTUFBTSxFQUFFLE9BQU8sQ0FBQyxJQUFJLE1BQU0sQ0FBQztJQUN4QyxDQUFDLEVBQUUsTUFBTSxDQUFDLENBQUM7QUFDYixDQUFDLENBQUMiLCJmaWxlIjoicGFja2FnZXMvY29yZS93ZWJwYWNrLWNvbmZpZy5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHdlYnBhY2sgPSByZXF1aXJlKCd3ZWJwYWNrJyk7XG5jb25zdCBwYXRoID0gcmVxdWlyZSgncGF0aCcpO1xuY29uc3QgZnMgPSByZXF1aXJlKCdmcycpO1xuY29uc3QgQXNzZXRzUGx1Z2luID0gcmVxdWlyZSgnYXNzZXRzLXdlYnBhY2stcGx1Z2luJyk7XG5jb25zdCBQcm9ncmVzc0JhclBsdWdpbiA9IHJlcXVpcmUoJ3Byb2dyZXNzLWJhci13ZWJwYWNrLXBsdWdpbicpO1xuY29uc3Qgbm9kZUV4dGVybmFscyA9IHJlcXVpcmUoJ3dlYnBhY2stbm9kZS1leHRlcm5hbHMnKTtcbmNvbnN0IFN0YXJ0U2VydmVyUGx1Z2luID0gcmVxdWlyZSgnc3RhcnQtc2VydmVyLXdlYnBhY2stcGx1Z2luJyk7XG5jb25zdCBSZWxvYWRTZXJ2ZXJQbHVnaW4gPSByZXF1aXJlKCdyZWxvYWQtc2VydmVyLXdlYnBhY2stcGx1Z2luJyk7XG5jb25zdCBIdG1sV2VicGFja1BsdWdpbiA9IHJlcXVpcmUoJ2h0bWwtd2VicGFjay1wbHVnaW4nKTtcbmNvbnN0IE9mZmxpbmVQbHVnaW4gPSByZXF1aXJlKCdvZmZsaW5lLXBsdWdpbicpO1xuY29uc3QgVmlzdWFsaXplclBsdWdpbiA9IHJlcXVpcmUoJ3dlYnBhY2stdmlzdWFsaXplci1wbHVnaW4nKTtcbmNvbnN0IEdlbmVyYXRlSnNvblBsdWdpbiA9IHJlcXVpcmUoJ2dlbmVyYXRlLWpzb24td2VicGFjay1wbHVnaW4nKTtcbmNvbnN0IHsgQ2hlY2tlclBsdWdpbiB9ID0gcmVxdWlyZSgnYXdlc29tZS10eXBlc2NyaXB0LWxvYWRlcicpO1xuXG5jb25zdCBhcHBSb290ID0gcHJvY2Vzcy5jd2QoKTtcblxuY29uc3QgdG9wRm9sZGVyID0gcGF0aC5yZXNvbHZlKF9fZGlybmFtZSwgJy4uJyk7XG5jb25zdCBpc0xpbmtlZCA9IHBhdGguYmFzZW5hbWUodG9wRm9sZGVyKSA9PT0gJ3BhY2thZ2VzJztcbmNvbnN0IG5vZGVNb2R1bGVzID0gaXNMaW5rZWRcbiAgPyBwYXRoLnJlc29sdmUoX19kaXJuYW1lLCAnbm9kZV9tb2R1bGVzJylcbiAgOiBwYXRoLnJlc29sdmUoX19kaXJuYW1lLCAnLi4nKTtcbnByb2Nlc3Mubm9EZXByZWNhdGlvbiA9IHRydWU7XG5jb25zdCBhbGxQYWNrYWdlcyA9ICFpc0xpbmtlZFxuICA/IFtdXG4gIDogZnMucmVhZGRpclN5bmModG9wRm9sZGVyKS5maWx0ZXIoeCA9PiB4WzBdICE9PSAnLicpO1xuY29uc3QgcGx1Z2luc0ZvbGRlciA9ICFpc0xpbmtlZCA/IG5vZGVNb2R1bGVzIDogdG9wRm9sZGVyO1xuXG5tb2R1bGUuZXhwb3J0cyA9ICh7XG4gIG1vZGUsXG4gIHRhcmdldCxcbiAgZGV2VXJsLFxuICBkZXZQb3J0LFxuICBzc3IsXG4gIHNlcnZlcmxlc3MsXG4gIHBsdWdpbnMgPSBbXSxcbiAgLi4ucmVzdCxcbn0pID0+IHtcbiAgY29uc3QgaXNEZXYgPSBtb2RlICE9PSAncHJvZHVjdGlvbic7XG4gIGNvbnN0IGlzUHJvZCA9IG1vZGUgPT09ICdwcm9kdWN0aW9uJztcbiAgY29uc3QgaXNXZWIgPSB0YXJnZXQgIT09ICdub2RlJztcbiAgY29uc3QgaXNFbGVjdHJvbiA9IHRhcmdldCA9PT0gJ2VsZWN0cm9uJztcbiAgY29uc3QgaXNOb2RlID0gdGFyZ2V0ID09PSAnbm9kZSc7XG4gIGNvbnN0IGlzU2VydmVybGVzcyA9IHNlcnZlcmxlc3MgPT09IHRydWUgfHwgaXNFbGVjdHJvbjtcbiAgY29uc3QgaXNTU1IgPSBzc3IgIT09IGZhbHNlICYmICFzZXJ2ZXJsZXNzO1xuICBjb25zdCBmb2xkZXIgPSBpc0RldiA/ICcuZGV2JyA6ICcuZGlzdCc7XG5cbiAgY29uc3QgY29uZmlnID0ge1xuICAgIHJlc29sdmU6IHtcbiAgICAgIGV4dGVuc2lvbnM6IFsnLmpzJywgJy50cycsICcudHN4J10sXG4gICAgICBtb2R1bGVzOiBhbGxQYWNrYWdlc1xuICAgICAgICAubWFwKHggPT4gcGF0aC5yZXNvbHZlKHRvcEZvbGRlciwgeCwgJ25vZGVfbW9kdWxlcycpKVxuICAgICAgICAuY29uY2F0KFtcbiAgICAgICAgICBwYXRoLnJlc29sdmUoYXBwUm9vdCwgJ25vZGVfbW9kdWxlcycpLFxuICAgICAgICAgIHBhdGgucmVzb2x2ZShhcHBSb290LCAnYXBwJyksXG4gICAgICAgIF0pLFxuICAgICAgYWxpYXM6IHtcbiAgICAgICAgJ2hpc3RvcnkvY3JlYXRlRmxleEhpc3RvcnknOiBpc1NlcnZlcmxlc3NcbiAgICAgICAgICA/ICdoaXN0b3J5L2NyZWF0ZUhhc2hIaXN0b3J5J1xuICAgICAgICAgIDogJ2hpc3RvcnkvY3JlYXRlQnJvd3Nlckhpc3RvcnknLFxuICAgICAgICByZWFjdDogcGF0aC5yZXNvbHZlKGFwcFJvb3QsICdub2RlX21vZHVsZXMnLCAncmVhY3QnKSxcbiAgICAgICAgLy8gJ2NvcmUtanMnOiBwYXRoLnJlc29sdmUoYXBwUm9vdCwgJ25vZGVfbW9kdWxlcycsICdjb3JlLWpzJyksXG4gICAgICAgICdyZWFjdC1kb20nOiBwYXRoLnJlc29sdmUoYXBwUm9vdCwgJ25vZGVfbW9kdWxlcycsICdyZWFjdC1kb20nKSxcbiAgICAgICAgLy8gJ3JlYWN0LXJvdXRlcic6IHBhdGgucmVzb2x2ZShhcHBSb290LCAnbm9kZV9tb2R1bGVzJywgJ3JlYWN0LXJvdXRlcicpLFxuICAgICAgICAvLyBtb21lbnQ6IHBhdGgucmVzb2x2ZShhcHBSb290LCAnbm9kZV9tb2R1bGVzJywgJ21vbWVudCcpLFxuICAgICAgICAvLyBsb2Rhc2g6IHBhdGgucmVzb2x2ZShhcHBSb290LCAnbm9kZV9tb2R1bGVzJywgJ2xvZGFzaCcpLFxuICAgICAgICAnQHJvb3QnOiBhcHBSb290LFxuICAgICAgICAnQGFwcCc6XG4gICAgICAgICAgaXNOb2RlICYmICFpc1NTUlxuICAgICAgICAgICAgPyBwYXRoLnJlc29sdmUoX19kaXJuYW1lLCAnbm9vcCcpXG4gICAgICAgICAgICA6IHBhdGgucmVzb2x2ZShhcHBSb290LCAnYXBwJyksXG4gICAgICAgIC4uLmFsbFBhY2thZ2VzLnJlZHVjZSgob2JqLCBpdGVtKSA9PiB7XG4gICAgICAgICAgLy8gZ2V0IGFsbCBmb2xkZXJzIGluIHNyYyBhbmQgY3JlYXRlICdvbHltcC14eHgnIGFsaWFzXG4gICAgICAgICAgaWYgKGl0ZW0gPT09ICdjb3JlJykge1xuICAgICAgICAgICAgb2JqLm9seW1wID0gcGF0aC5yZXNvbHZlKHRvcEZvbGRlciwgaXRlbSk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG9ialtgb2x5bXAtJHtpdGVtfWBdID0gcGF0aC5yZXNvbHZlKHRvcEZvbGRlciwgaXRlbSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiBvYmo7XG4gICAgICAgIH0sIHt9KSxcbiAgICAgIH0sXG4gICAgfSxcbiAgICByZXNvbHZlTG9hZGVyOiB7XG4gICAgICBtb2R1bGVzOiBbXG4gICAgICAgIHBhdGgucmVzb2x2ZShub2RlTW9kdWxlcyksXG4gICAgICAgIHBhdGgucmVzb2x2ZShhcHBSb290LCAnbm9kZV9tb2R1bGVzJyksXG4gICAgICBdLFxuICAgIH0sXG4gICAgcGx1Z2luczogW1xuICAgICAgLy8gbmV3IHdlYnBhY2sub3B0aW1pemUuTW9kdWxlQ29uY2F0ZW5hdGlvblBsdWdpbigpLFxuICAgICAgbmV3IHdlYnBhY2suRGVmaW5lUGx1Z2luKHtcbiAgICAgICAgJ3Byb2Nlc3MuZW52LlNTUic6IEpTT04uc3RyaW5naWZ5KGlzU1NSKSxcbiAgICAgICAgJ3Byb2Nlc3MuZW52Lk5PREVfRU5WJzogSlNPTi5zdHJpbmdpZnkobW9kZSksXG4gICAgICAgICdwcm9jZXNzLmVudi5ERVZfUE9SVCc6IEpTT04uc3RyaW5naWZ5KGRldlBvcnQpLFxuICAgICAgICAncHJvY2Vzcy5lbnYuREVWX1VSTCc6IGRldlVybFxuICAgICAgICAgID8gSlNPTi5zdHJpbmdpZnkoZGV2VXJsLm9yaWdpbilcbiAgICAgICAgICA6IHVuZGVmaW5lZCxcbiAgICAgICAgJ3Byb2Nlc3MuZW52LklTX1dFQic6IGlzV2ViID8gSlNPTi5zdHJpbmdpZnkodHJ1ZSkgOiB1bmRlZmluZWQsXG4gICAgICAgICdwcm9jZXNzLmVudi5JU19OT0RFJzogaXNOb2RlID8gSlNPTi5zdHJpbmdpZnkodHJ1ZSkgOiB1bmRlZmluZWQsXG4gICAgICAgICdwcm9jZXNzLmVudi5JU19FTEVDVFJPTic6IGlzRWxlY3Ryb25cbiAgICAgICAgICA/IEpTT04uc3RyaW5naWZ5KHRydWUpXG4gICAgICAgICAgOiB1bmRlZmluZWQsXG4gICAgICB9KSxcbiAgICAgIC8vIG5ldyBQcmVwYWNrV2VicGFja1BsdWdpbih7IH0pLFxuICAgICAgbmV3IHdlYnBhY2suQ29udGV4dFJlcGxhY2VtZW50UGx1Z2luKC9tb21lbnRbL1xcXFxdbG9jYWxlJC8sIC9kZS8pLFxuICAgICAgbmV3IHdlYnBhY2suTmFtZWRNb2R1bGVzUGx1Z2luKCksXG4gICAgICBuZXcgUHJvZ3Jlc3NCYXJQbHVnaW4oKSxcbiAgICAgIG5ldyB3ZWJwYWNrLk5vRW1pdE9uRXJyb3JzUGx1Z2luKCksXG4gICAgICAvLyBuZXcgQ2hlY2tlclBsdWdpbigpLFxuICAgIF0sXG4gICAgbW9kdWxlOiB7XG4gICAgICBydWxlczogW1xuICAgICAgICB7XG4gICAgICAgICAgdGVzdDogL1xcLmh0bWwkLyxcbiAgICAgICAgICBsb2FkZXI6ICdmaWxlLWxvYWRlcj9uYW1lPVtuYW1lXS5bZXh0XScsXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICB0ZXN0OiAvXFwuKGpwZ3xqcGVnfHBuZ3xnaWZ8ZW90fHR0Znx3b2ZmfHdvZmYyKSQvLFxuICAgICAgICAgIGxvYWRlcjogJ3VybC1sb2FkZXInLFxuICAgICAgICAgIG9wdGlvbnM6IHtcbiAgICAgICAgICAgIGxpbWl0OiAyMDAwMCxcbiAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgdGVzdDogL1xcLih0eHR8bWQpJC8sXG4gICAgICAgICAgbG9hZGVyOiAncmF3LWxvYWRlcicsXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICB0ZXN0OiAvXFwuanNvbiQvLFxuICAgICAgICAgIGxvYWRlcjogJ2pzb24tbG9hZGVyJyxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIHRlc3Q6IC9cXC4oZ3JhcGhxbHxncWwpJC8sXG4gICAgICAgICAgZXhjbHVkZTogL25vZGVfbW9kdWxlcy8sXG4gICAgICAgICAgbG9hZGVyOiAnZ3JhcGhxbC10YWcvbG9hZGVyJyxcbiAgICAgICAgfSxcbiAgICAgIF0sXG4gICAgfSxcbiAgICBvdXRwdXQ6IHtcbiAgICAgIHBhdGg6IHBhdGgucmVzb2x2ZShhcHBSb290LCBmb2xkZXIsIHRhcmdldCksXG4gICAgfSxcbiAgICBlbnRyeToge1xuICAgICAgbWFpbjogW10sXG4gICAgfSxcbiAgfTtcblxuICBpZiAoIWlzTm9kZSkge1xuICAgIGNvbmZpZy5wbHVnaW5zLnB1c2goXG4gICAgICBuZXcgd2VicGFjay5EZWZpbmVQbHVnaW4oe1xuICAgICAgICAncHJvY2Vzcy5lbnYuQU1QJzogcHJvY2Vzcy5lbnYuQU1QXG4gICAgICAgICAgPyBKU09OLnN0cmluZ2lmeShwcm9jZXNzLmVudi5BTVApXG4gICAgICAgICAgOiB1bmRlZmluZWQsXG4gICAgICAgICdwcm9jZXNzLmVudi5HTV9LRVknOiBKU09OLnN0cmluZ2lmeShwcm9jZXNzLmVudi5HTV9LRVkpLFxuICAgICAgICAncHJvY2Vzcy5lbnYuR1JBUEhRTF9VUkwnOiBwcm9jZXNzLmVudi5HUkFQSFFMX1VSTFxuICAgICAgICAgID8gSlNPTi5zdHJpbmdpZnkocHJvY2Vzcy5lbnYuR1JBUEhRTF9VUkwpXG4gICAgICAgICAgOiB1bmRlZmluZWQsXG4gICAgICAgIC8qJ3Byb2Nlc3MuZW52LkdSQVBIUUxfU1VCJzogcHJvY2Vzcy5lbnYuR1JBUEhRTF9TVUJcbiAgICAgID8gSlNPTi5zdHJpbmdpZnkocHJvY2Vzcy5lbnYuR1JBUEhRTF9TVUIpXG4gICAgICA6IHVuZGVmaW5lZCwqL1xuICAgICAgICAncHJvY2Vzcy5lbnYuVVJMJzogcHJvY2Vzcy5lbnYuVVJMXG4gICAgICAgICAgPyBKU09OLnN0cmluZ2lmeShwcm9jZXNzLmVudi5VUkwpXG4gICAgICAgICAgOiB1bmRlZmluZWQsXG4gICAgICAgICdwcm9jZXNzLmVudi5GSUxFU1RBQ0tfS0VZJzogcHJvY2Vzcy5lbnYuRklMRVNUQUNLX0tFWVxuICAgICAgICAgID8gSlNPTi5zdHJpbmdpZnkocHJvY2Vzcy5lbnYuRklMRVNUQUNLX0tFWSlcbiAgICAgICAgICA6IHVuZGVmaW5lZCxcbiAgICAgIH0pXG4gICAgKTtcbiAgfVxuXG4gIC8vIGlubGluZS1zb3VyY2UtbWFwIGZvciB3ZWItZGV2XG4gIGNvbmZpZy5kZXZ0b29sID0gJ3NvdXJjZS1tYXAnO1xuXG4gIC8vIGlubGluZS1zb3VyY2UtbWFwIGZvciB3ZWItZGV2XG4gIGlmIChpc1Byb2QgJiYgaXNXZWIgJiYgIWlzRWxlY3Ryb24pIHtcbiAgICBjb25maWcub3V0cHV0LmZpbGVuYW1lID0gJ1tuYW1lXS5bY29udGVudGhhc2hdLmpzJztcbiAgfSBlbHNlIHtcbiAgICBjb25maWcub3V0cHV0LmZpbGVuYW1lID0gJ1tuYW1lXS5qcyc7XG4gIH1cblxuICAvLyB0YXJnZXQgJiYgbm9kZSBzZXR0aW5nc1xuICBpZiAoaXNOb2RlKSB7XG4gICAgY29uZmlnLnRhcmdldCA9ICdub2RlJztcbiAgICBjb25maWcud2F0Y2ggPSBpc0RldjtcbiAgICBjb25maWcubm9kZSA9IHtcbiAgICAgIF9fZGlybmFtZTogZmFsc2UsXG4gICAgICBfX2ZpbGVuYW1lOiBmYWxzZSxcbiAgICB9O1xuICAgIGNvbmZpZy5vdXRwdXQubGlicmFyeVRhcmdldCA9ICdjb21tb25qczInO1xuICB9IGVsc2UgaWYgKGlzRWxlY3Ryb24pIHtcbiAgICBjb25maWcudGFyZ2V0ID0gJ2VsZWN0cm9uLW1haW4nO1xuICAgIGNvbmZpZy5ub2RlID0ge1xuICAgICAgX19kaXJuYW1lOiBmYWxzZSxcbiAgICAgIF9fZmlsZW5hbWU6IGZhbHNlLFxuICAgIH07XG4gICAgY29uZmlnLm91dHB1dC5saWJyYXJ5VGFyZ2V0ID0gJ2NvbW1vbmpzMic7XG4gIH0gZWxzZSB7XG4gICAgY29uZmlnLnRhcmdldCA9ICd3ZWInO1xuICAgIGNvbmZpZy5ub2RlID0ge1xuICAgICAgX19kaXJuYW1lOiB0cnVlLFxuICAgICAgX19maWxlbmFtZTogdHJ1ZSxcbiAgICB9O1xuICAgIGNvbmZpZy5vdXRwdXQubGlicmFyeVRhcmdldCA9ICd2YXInO1xuICB9XG5cbiAgaWYgKGlzRGV2ICYmIGlzV2ViKSB7XG4gICAgY29uZmlnLm91dHB1dC5wdWJsaWNQYXRoID0gZGV2VXJsLmhyZWY7XG4gIH0gZWxzZSB7XG4gICAgY29uZmlnLm91dHB1dC5wdWJsaWNQYXRoID0gJy8nO1xuICB9XG5cbiAgLy8gYmFiZWwtcHJlc2V0LWVudiBvbiBub2RlXG4gIGlmIChpc1Byb2QgJiYgaXNXZWIpIHtcbiAgICAvKmJhYmVsLm9wdGlvbnMucGx1Z2lucy5wdXNoKFtcbiAgICAgICd0cmFuc2Zvcm0taW1wb3J0cycsXG4gICAgICB7XG4gICAgICAgIGFudGQ6IHtcbiAgICAgICAgICB0cmFuc2Zvcm06ICdhbnRkL2xpYi8ke21lbWJlcn0nLFxuICAgICAgICAgIGtlYmFiQ2FzZTogdHJ1ZSxcbiAgICAgICAgICBwcmV2ZW50RnVsbEltcG9ydDogdHJ1ZSxcbiAgICAgICAgfSxcbiAgICAgICAgbG9kYXNoOiB7XG4gICAgICAgICAgdHJhbnNmb3JtOiAnbG9kYXNoLyR7bWVtYmVyfScsXG4gICAgICAgICAgcHJldmVudEZ1bGxJbXBvcnQ6IHRydWUsXG4gICAgICAgIH0sXG4gICAgICAgICdkYXRlLWZucyc6IHtcbiAgICAgICAgICB0cmFuc2Zvcm06ICdkYXRlLWZucy8ke21lbWJlcn0nLFxuICAgICAgICAgIHByZXZlbnRGdWxsSW1wb3J0OiB0cnVlLFxuICAgICAgICAgIHNuYWtlQ2FzZTogdHJ1ZSxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgXSk7Ki9cbiAgfVxuXG4gIC8vIHdlYnBhY2sgcGx1Z2luc1xuICBpZiAoaXNXZWIgJiYgaXNQcm9kKSB7XG4gICAgY29uZmlnLnBsdWdpbnMucHVzaChuZXcgd2VicGFjay5vcHRpbWl6ZS5PY2N1cnJlbmNlT3JkZXJQbHVnaW4oKSk7XG4gICAgLy8gY29uZmlnLnBsdWdpbnMucHVzaChuZXcgd2VicGFjay5vcHRpbWl6ZS5EZWR1cGVQbHVnaW4oKSk7XG4gICAgaWYgKGlzRWxlY3Ryb24pIHtcbiAgICAgIGNvbmZpZy5wbHVnaW5zLnB1c2gobmV3IEdlbmVyYXRlSnNvblBsdWdpbigncGFja2FnZS5qc29uJywge30pKTtcbiAgICB9XG4gICAgY29uZmlnLnBsdWdpbnMucHVzaChcbiAgICAgIG5ldyB3ZWJwYWNrLkxvYWRlck9wdGlvbnNQbHVnaW4oe1xuICAgICAgICBtaW5pbWl6ZTogdHJ1ZSxcbiAgICAgICAgZGVidWc6IGZhbHNlLFxuICAgICAgfSlcbiAgICApO1xuICAgIGNvbmZpZy5wbHVnaW5zLnB1c2goXG4gICAgICBuZXcgd2VicGFjay5vcHRpbWl6ZS5VZ2xpZnlKc1BsdWdpbih7XG4gICAgICAgIGNvbXByZXNzOiB7XG4gICAgICAgICAgc2NyZXdfaWU4OiB0cnVlLFxuICAgICAgICAgIHdhcm5pbmdzOiBmYWxzZSxcbiAgICAgICAgfSxcbiAgICAgICAgbWFuZ2xlOiB7XG4gICAgICAgICAgc2NyZXdfaWU4OiB0cnVlLFxuICAgICAgICB9LFxuICAgICAgICBvdXRwdXQ6IHtcbiAgICAgICAgICBjb21tZW50czogZmFsc2UsXG4gICAgICAgICAgc2NyZXdfaWU4OiB0cnVlLFxuICAgICAgICB9LFxuICAgICAgICBzb3VyY2VNYXA6IGZhbHNlLFxuICAgICAgfSlcbiAgICApO1xuICB9XG4gIGlmIChpc05vZGUpIHtcbiAgICBpZiAoaXNEZXYpIHtcbiAgICAgIGNvbmZpZy5wbHVnaW5zLnB1c2gobmV3IFN0YXJ0U2VydmVyUGx1Z2luKCdtYWluLmpzJykpO1xuICAgICAgY29uZmlnLnBsdWdpbnMucHVzaChcbiAgICAgICAgbmV3IFJlbG9hZFNlcnZlclBsdWdpbih7XG4gICAgICAgICAgLy8gRGVmYXVsdHMgdG8gcHJvY2Vzcy5jd2QoKSArIFwiL3NlcnZlci5qc1wiXG4gICAgICAgICAgc2NyaXB0OiBwYXRoLnJlc29sdmUoX19kaXJuYW1lLCAnbm9kZScsICdpbmRleC5qcycpLFxuICAgICAgICB9KVxuICAgICAgKTtcbiAgICB9XG4gICAgY29uZmlnLnBsdWdpbnMucHVzaChcbiAgICAgIG5ldyB3ZWJwYWNrLkJhbm5lclBsdWdpbih7XG4gICAgICAgIGJhbm5lcjogJ3JlcXVpcmUoXCJzb3VyY2UtbWFwLXN1cHBvcnRcIikuaW5zdGFsbCgpOycsXG4gICAgICAgIHJhdzogdHJ1ZSxcbiAgICAgICAgZW50cnlPbmx5OiB0cnVlLFxuICAgICAgfSlcbiAgICApO1xuICB9IGVsc2Uge1xuICAgIGNvbmZpZy5wbHVnaW5zLnB1c2goXG4gICAgICBuZXcgQXNzZXRzUGx1Z2luKHtcbiAgICAgICAgZmlsZW5hbWU6ICdhc3NldHMuanNvbicsXG4gICAgICAgIHBhdGg6IHBhdGgucmVzb2x2ZShwcm9jZXNzLmN3ZCgpLCBmb2xkZXIsIHRhcmdldCksXG4gICAgICB9KVxuICAgICk7XG4gICAgaWYgKGlzUHJvZCAmJiAhaXNTZXJ2ZXJsZXNzKSB7XG4gICAgICBjb25maWcucGx1Z2lucy5wdXNoKFxuICAgICAgICBuZXcgSHRtbFdlYnBhY2tQbHVnaW4oe1xuICAgICAgICAgIGZpbGVuYW1lOiAnb2ZmbGluZS5odG1sJyxcbiAgICAgICAgICB0ZW1wbGF0ZTogcGF0aC5yZXNvbHZlKF9fZGlybmFtZSwgJ3RlbXBsYXRlcycsICdkZWZhdWx0LmpzJyksXG4gICAgICAgICAgaW5qZWN0OiBmYWxzZSxcbiAgICAgICAgICAvKiBtaW5pZnk6IHtcbiAgICAgICAgICByZW1vdmVDb21tZW50czogdHJ1ZSxcbiAgICAgICAgICBjb2xsYXBzZVdoaXRlc3BhY2U6IHRydWUsXG4gICAgICAgICAgcmVtb3ZlUmVkdW5kYW50QXR0cmlidXRlczogdHJ1ZSxcbiAgICAgICAgICB1c2VTaG9ydERvY3R5cGU6IHRydWUsXG4gICAgICAgICAgcmVtb3ZlRW1wdHlBdHRyaWJ1dGVzOiB0cnVlLFxuICAgICAgICAgIHJlbW92ZVN0eWxlTGlua1R5cGVBdHRyaWJ1dGVzOiB0cnVlLFxuICAgICAgICAgIGtlZXBDbG9zaW5nU2xhc2g6IHRydWUsXG4gICAgICAgICAgbWluaWZ5SlM6IHRydWUsXG4gICAgICAgICAgbWluaWZ5Q1NTOiB0cnVlLFxuICAgICAgICAgIG1pbmlmeVVSTHM6IHRydWUsXG4gICAgICAgIH0sKi9cbiAgICAgICAgfSlcbiAgICAgICk7XG4gICAgICBjb25maWcucGx1Z2lucy5wdXNoKFxuICAgICAgICBuZXcgT2ZmbGluZVBsdWdpbih7XG4gICAgICAgICAgcmVzcG9uc2VTdHJhdGVneTogJ25ldHdvcmstZmlyc3QnLFxuICAgICAgICAgIGV4dGVybmFsczogW1xuICAgICAgICAgICAgJ2h0dHBzOi8vY2RuLnBvbHlmaWxsLmlvL3YyL3BvbHlmaWxsLm1pbi5qcz9jYWxsYmFjaz1QT0xZJyxcbiAgICAgICAgICBdLFxuICAgICAgICAgIC8vIGF1dG9VcGRhdGU6IDEwMDAgKiA2MCAqIDUsXG4gICAgICAgICAgY2FjaGVzOiAnYWxsJyxcbiAgICAgICAgICBTZXJ2aWNlV29ya2VyOiB7XG4gICAgICAgICAgICBldmVudHM6IHRydWUsXG4gICAgICAgICAgICBuYXZpZ2F0ZUZhbGxiYWNrVVJMOiAnL29mZmxpbmUuaHRtbCcsXG4gICAgICAgICAgfSxcbiAgICAgICAgICBBcHBDYWNoZTogZmFsc2UsXG4gICAgICAgIH0pXG4gICAgICApO1xuICAgICAgY29uZmlnLnBsdWdpbnMucHVzaChcbiAgICAgICAgbmV3IFZpc3VhbGl6ZXJQbHVnaW4oe1xuICAgICAgICAgIGZpbGVuYW1lOiAnLi92aXN1YWxpemVyLmh0bWwnLFxuICAgICAgICB9KVxuICAgICAgKTtcbiAgICB9IGVsc2UgaWYgKGlzU2VydmVybGVzcykge1xuICAgICAgY29uZmlnLnBsdWdpbnMucHVzaChcbiAgICAgICAgbmV3IEh0bWxXZWJwYWNrUGx1Z2luKHtcbiAgICAgICAgICBmaWxlbmFtZTogJ2luZGV4Lmh0bWwnLFxuICAgICAgICAgIHRlbXBsYXRlOiBwYXRoLnJlc29sdmUoXG4gICAgICAgICAgICBfX2Rpcm5hbWUsXG4gICAgICAgICAgICAndGVtcGxhdGVzJyxcbiAgICAgICAgICAgIGlzRWxlY3Ryb24gPyAnZWxlY3Ryb24uanMnIDogJ3NlcnZlcmxlc3MuanMnXG4gICAgICAgICAgKSxcbiAgICAgICAgICBpbmplY3Q6IGZhbHNlLFxuICAgICAgICAgIC8qIG1pbmlmeToge1xuICAgICAgICAgIHJlbW92ZUNvbW1lbnRzOiB0cnVlLFxuICAgICAgICAgIGNvbGxhcHNlV2hpdGVzcGFjZTogdHJ1ZSxcbiAgICAgICAgICByZW1vdmVSZWR1bmRhbnRBdHRyaWJ1dGVzOiB0cnVlLFxuICAgICAgICAgIHVzZVNob3J0RG9jdHlwZTogdHJ1ZSxcbiAgICAgICAgICByZW1vdmVFbXB0eUF0dHJpYnV0ZXM6IHRydWUsXG4gICAgICAgICAgcmVtb3ZlU3R5bGVMaW5rVHlwZUF0dHJpYnV0ZXM6IHRydWUsXG4gICAgICAgICAga2VlcENsb3NpbmdTbGFzaDogdHJ1ZSxcbiAgICAgICAgICBtaW5pZnlKUzogdHJ1ZSxcbiAgICAgICAgICBtaW5pZnlDU1M6IHRydWUsXG4gICAgICAgICAgbWluaWZ5VVJMczogdHJ1ZSxcbiAgICAgICAgfSwqL1xuICAgICAgICB9KVxuICAgICAgKTtcbiAgICB9XG4gIH1cblxuICAvLyBIb3QgbW9kdWxlIHJlcGxhY2VtZW50IG9uIGRldlxuICBpZiAoaXNEZXYpIHtcbiAgICBjb25maWcucGx1Z2lucy5wdXNoKG5ldyB3ZWJwYWNrLkhvdE1vZHVsZVJlcGxhY2VtZW50UGx1Z2luKCkpO1xuICB9XG5cbiAgLy8gTGltaXRDaHVua0NvdW50IG9uIGFsbCBidXQgcHJvZHVjdGlvbi13ZWJcbiAgaWYgKGlzRGV2IHx8IGlzTm9kZSB8fCBpc0VsZWN0cm9uKSB7XG4gICAgY29uZmlnLnBsdWdpbnMucHVzaChcbiAgICAgIG5ldyB3ZWJwYWNrLm9wdGltaXplLkxpbWl0Q2h1bmtDb3VudFBsdWdpbih7IG1heENodW5rczogMSB9KVxuICAgICk7XG4gICAgY29uZmlnLm91dHB1dC5maWxlbmFtZSA9ICdbbmFtZV0uanMnO1xuICB9IGVsc2Uge1xuICAgIGNvbmZpZy5vdXRwdXQuZmlsZW5hbWUgPSAnW25hbWVdLltjaHVua2hhc2hdLmpzJztcbiAgICBjb25maWcub3V0cHV0LmNodW5rRmlsZW5hbWUgPSAnW25hbWVdLltjaHVua2hhc2hdLmpzJztcbiAgfVxuXG4gIC8vIGV4dGVybmFsc1xuICBpZiAoaXNOb2RlKSB7XG4gICAgY29uZmlnLmV4dGVybmFscyA9IGFsbFBhY2thZ2VzXG4gICAgICAubWFwKHggPT4gcGF0aC5yZXNvbHZlKHRvcEZvbGRlciwgeCwgJ25vZGVfbW9kdWxlcycpKVxuICAgICAgLmNvbmNhdChbcGF0aC5yZXNvbHZlKGFwcFJvb3QsICdub2RlX21vZHVsZXMnKV0pXG4gICAgICAubWFwKG1vZHVsZXNEaXIgPT5cbiAgICAgICAgbm9kZUV4dGVybmFscyh7XG4gICAgICAgICAgbW9kdWxlc0RpcixcbiAgICAgICAgICB3aGl0ZWxpc3Q6IFtcbiAgICAgICAgICAgIHYgPT4gdi5pbmRleE9mKCd3ZWJwYWNrL2hvdC9wb2xsJykgPT09IDAsXG4gICAgICAgICAgICAnc291cmNlLW1hcC1zdXBwb3J0L3JlZ2lzdGVyJyxcbiAgICAgICAgICAgIHYgPT4gdi5pbmRleE9mKCdvbHltcC0nKSA9PT0gMCxcbiAgICAgICAgICAgIC8vIHYgPT4gdiA9PT0gJ2FudGQnIHx8IHYuaW5kZXhPZignYW50ZC8nKSA9PT0gMCxcbiAgICAgICAgICAgIC9cXC4oZW90fHdvZmZ8d29mZjJ8dHRmfG90ZikkLyxcbiAgICAgICAgICAgIC9cXC4oc3ZnfHBuZ3xqcGd8anBlZ3xnaWZ8aWNvKSQvLFxuICAgICAgICAgICAgL1xcLihtcDR8bXAzfG9nZ3xzd2Z8d2VicCkkLyxcbiAgICAgICAgICAgIC9cXC4oY3NzfHNjc3N8c2Fzc3xzc3N8bGVzcykkLyxcbiAgICAgICAgICBdLFxuICAgICAgICB9KVxuICAgICAgKTtcbiAgfVxuXG4gIGlmIChpc1dlYiAmJiBpc0Rldikge1xuICAgIGNvbmZpZy5lbnRyeS5tYWluID0gW1xuICAgICAgJ3JlYWN0LWhvdC1sb2FkZXIvcGF0Y2gnLFxuICAgICAgYHdlYnBhY2stZGV2LXNlcnZlci9jbGllbnQ/JHtjb25maWcub3V0cHV0LnB1YmxpY1BhdGh9YCxcbiAgICAgICd3ZWJwYWNrL2hvdC9vbmx5LWRldi1zZXJ2ZXInLFxuICAgICAgcmVxdWlyZS5yZXNvbHZlKHBhdGgucmVzb2x2ZShfX2Rpcm5hbWUsIHRhcmdldCkpLFxuICAgIF07XG4gIH0gZWxzZSBpZiAoaXNOb2RlICYmIGlzRGV2KSB7XG4gICAgY29uZmlnLmVudHJ5Lm1haW4gPSBbXG4gICAgICAnd2VicGFjay9ob3QvcG9sbD8xMDAwJyxcbiAgICAgIHJlcXVpcmUucmVzb2x2ZShwYXRoLnJlc29sdmUoX19kaXJuYW1lLCB0YXJnZXQpKSxcbiAgICBdO1xuICB9IGVsc2UgaWYgKGlzRWxlY3Ryb24pIHtcbiAgICBjb25maWcuZW50cnkubWFpbiA9IFtcbiAgICAgIHJlcXVpcmUucmVzb2x2ZShwYXRoLnJlc29sdmUoX19kaXJuYW1lLCAnd2ViJywgJ2luZGV4LmpzJykpLFxuICAgIF07XG4gICAgY29uZmlnLmVudHJ5LmFwcCA9IFtcbiAgICAgIHJlcXVpcmUucmVzb2x2ZShwYXRoLnJlc29sdmUoX19kaXJuYW1lLCAnZWxlY3Ryb24nLCAnbWFpbi5qcycpKSxcbiAgICBdO1xuICB9IGVsc2Uge1xuICAgIGNvbmZpZy5lbnRyeS5tYWluID0gW1xuICAgICAgcmVxdWlyZS5yZXNvbHZlKHBhdGgucmVzb2x2ZShfX2Rpcm5hbWUsIHRhcmdldCwgJ2luZGV4LmpzJykpLFxuICAgIF07XG4gIH1cblxuICBpZiAoaXNQcm9kKSB7XG4gICAgY29uZmlnLm1vZHVsZS5ydWxlcy5wdXNoKHtcbiAgICAgIHRlc3Q6IC9cXC50c3g/JC8sXG4gICAgICBpbmNsdWRlOiBbcGF0aC5yZXNvbHZlKGFwcFJvb3QsICdhcHAnKSwgcGF0aC5yZXNvbHZlKGFwcFJvb3QsICdzZXJ2ZXInKV0sXG4gICAgICB1c2U6IFtcbiAgICAgICAge1xuICAgICAgICAgIGxvYWRlcjogJ2F3ZXNvbWUtdHlwZXNjcmlwdC1sb2FkZXInLFxuICAgICAgICAgIG9wdGlvbnM6IHtcbiAgICAgICAgICAgIHNpbGVudDogdHJ1ZSxcbiAgICAgICAgICAgIHRyYW5zcGlsZU9ubHk6IHRydWUsXG4gICAgICAgICAgICBjb25maWdGaWxlTmFtZTogcGF0aC5yZXNvbHZlKF9fZGlybmFtZSwgJ3RzY29uZmlnLmpzb24nKSxcbiAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgXSxcbiAgICB9KTtcbiAgfSBlbHNlIHtcbiAgICBjb25maWcubW9kdWxlLnJ1bGVzLnB1c2goe1xuICAgICAgdGVzdDogL1xcLnRzeD8kLyxcbiAgICAgIGluY2x1ZGU6IFtwYXRoLnJlc29sdmUoYXBwUm9vdCwgJ2FwcCcpLCBwYXRoLnJlc29sdmUoYXBwUm9vdCwgJ3NlcnZlcicpXSxcbiAgICAgIHVzZTogW1xuICAgICAgICB7XG4gICAgICAgICAgbG9hZGVyOiAncmVhY3QtaG90LWxvYWRlci93ZWJwYWNrJyxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIGxvYWRlcjogJ2F3ZXNvbWUtdHlwZXNjcmlwdC1sb2FkZXInLFxuICAgICAgICAgIG9wdGlvbnM6IHtcbiAgICAgICAgICAgIHNpbGVudDogdHJ1ZSxcbiAgICAgICAgICAgIHRyYW5zcGlsZU9ubHk6IHRydWUsXG4gICAgICAgICAgICBjb25maWdGaWxlTmFtZTogcGF0aC5yZXNvbHZlKF9fZGlybmFtZSwgJ3RzY29uZmlnLmpzb24nKSxcbiAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgXSxcbiAgICB9KTtcbiAgfVxuICByZXR1cm4gcGx1Z2lucy5yZWR1Y2UoKHN0b3JlLCBwbHVnaW4pID0+IHtcbiAgICBjb25zdCByZXEgPSByZXF1aXJlKHBhdGgucmVzb2x2ZShcbiAgICAgIHBsdWdpbnNGb2xkZXIsXG4gICAgICBpc0xpbmtlZCA/IGB3ZWJwYWNrLSR7cGx1Z2lufWAgOiBgb2x5bXAtd2VicGFjay0ke3BsdWdpbn1gXG4gICAgKSk7XG4gICAgY29uc3Qgb3B0aW9ucyA9IHtcbiAgICAgIGlzUHJvZCxcbiAgICAgIGlzV2ViLFxuICAgICAgaXNFbGVjdHJvbixcbiAgICAgIGlzTm9kZSxcbiAgICAgIGlzU2VydmVybGVzcyxcbiAgICAgIGlzU1NSLFxuICAgICAgYXBwUm9vdCxcbiAgICAgIG5vZGVNb2R1bGVzLFxuICAgICAgaXNMaW5rZWQsXG4gICAgICAuLi5yZXN0LFxuICAgIH07XG4gICAgcmV0dXJuIHJlcShjb25maWcsIG9wdGlvbnMpIHx8IGNvbmZpZztcbiAgfSwgY29uZmlnKTtcbn07XG4iXX0=
