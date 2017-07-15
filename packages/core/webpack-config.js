var webpack = require('webpack');
var path = require('path');
var fs = require('fs');
var AssetsPlugin = require('assets-webpack-plugin');
var ProgressBarPlugin = require('progress-bar-webpack-plugin');
var nodeExternals = require('webpack-node-externals');
var StartServerPlugin = require('start-server-webpack-plugin');
var ReloadServerPlugin = require('reload-server-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
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
module.exports = function (_a) {
    var mode = _a.mode, target = _a.target, devUrl = _a.devUrl, devPort = _a.devPort, ssr = _a.ssr, serverless = _a.serverless;
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
            extensions: ['.js', '.json', '.ts', '.tsx'],
            modules: allPackages
                .map(function (x) { return path.resolve(topFolder, x, 'node_modules'); })
                .concat([
                path.resolve(appRoot, 'node_modules'),
                path.resolve(appRoot, 'app'),
            ]),
            alias: Object.assign({
                'history/createFlexHistory': isServerless
                    ? 'history/createHashHistory'
                    : 'history/createBrowserHistory',
                react: path.resolve(appRoot, 'node_modules', 'react'),
                'react-dom': path.resolve(appRoot, 'node_modules', 'react-dom'),
                'react-router': path.resolve(appRoot, 'node_modules', 'react-router'),
                moment: path.resolve(appRoot, 'node_modules', 'moment'),
                lodash: path.resolve(appRoot, 'node_modules', 'lodash'),
                '@root': appRoot,
                '@app': isNode && !isSSR
                    ? path.resolve(__dirname, 'noop')
                    : path.resolve(appRoot, 'app'),
            }, allPackages.reduce(function (obj, item) {
                if (item === 'core')
                    obj.olymp = path.resolve(topFolder, item);
                else
                    obj["olymp-" + item] = path.resolve(topFolder, item);
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
            new webpack.DefinePlugin(Object.assign({
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
            }, !isNode
                ? {
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
                }
                : {})),
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
    if (isNode) {
    }
    else if (isDev) {
    }
    else {
    }
    if (isWeb && isProd) {
        config.plugins.push(new webpack.optimize.OccurrenceOrderPlugin());
        config.plugins.push(new ExtractTextPlugin({
            filename: isElectron ? '[name].css' : '[name].[contenthash].css',
            allChunks: true,
        }));
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
        config.plugins.push(new webpack.NormalModuleReplacementPlugin(/\.(less|css|scss)$/, 'node-noop'));
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
        config.module.rules.push({
            test: /\.css$/,
            loader: ExtractTextPlugin.extract({
                use: [
                    {
                        loader: 'css-loader',
                        options: { modules: false },
                    },
                ],
                fallback: 'style-loader',
            }),
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
        config.module.rules.push({
            test: /\.css$/,
            use: [
                {
                    loader: 'style-loader',
                    options: { insertAt: 'top' },
                },
                {
                    loader: 'css-loader',
                    options: { modules: false, sourceMap: true },
                },
            ],
        });
    }
    return config;
};
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhY2thZ2VzL2NvcmUvd2VicGFjay1jb25maWcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsSUFBTSxPQUFPLEdBQUcsT0FBTyxDQUFDLFNBQVMsQ0FBQyxDQUFDO0FBQ25DLElBQU0sSUFBSSxHQUFHLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQztBQUM3QixJQUFNLEVBQUUsR0FBRyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7QUFDekIsSUFBTSxZQUFZLEdBQUcsT0FBTyxDQUFDLHVCQUF1QixDQUFDLENBQUM7QUFDdEQsSUFBTSxpQkFBaUIsR0FBRyxPQUFPLENBQUMsNkJBQTZCLENBQUMsQ0FBQztBQUNqRSxJQUFNLGFBQWEsR0FBRyxPQUFPLENBQUMsd0JBQXdCLENBQUMsQ0FBQztBQUN4RCxJQUFNLGlCQUFpQixHQUFHLE9BQU8sQ0FBQyw2QkFBNkIsQ0FBQyxDQUFDO0FBQ2pFLElBQU0sa0JBQWtCLEdBQUcsT0FBTyxDQUFDLDhCQUE4QixDQUFDLENBQUM7QUFDbkUsSUFBTSxpQkFBaUIsR0FBRyxPQUFPLENBQUMsNkJBQTZCLENBQUMsQ0FBQztBQUNqRSxJQUFNLGlCQUFpQixHQUFHLE9BQU8sQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDO0FBQ3pELElBQU0sYUFBYSxHQUFHLE9BQU8sQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO0FBQ2hELElBQU0sZ0JBQWdCLEdBQUcsT0FBTyxDQUFDLDJCQUEyQixDQUFDLENBQUM7QUFFOUQsSUFBTSxrQkFBa0IsR0FBRyxPQUFPLENBQUMsOEJBQThCLENBQUMsQ0FBQztBQUMzRCxJQUFBLGtFQUFhLENBQTBDO0FBRS9ELElBQU0sT0FBTyxHQUFHLE9BQU8sQ0FBQyxHQUFHLEVBQUUsQ0FBQztBQUU5QixJQUFNLFNBQVMsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsQ0FBQztBQUNoRCxJQUFNLFFBQVEsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxL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QUssRUFBRTtpQkFDN0I7Z0JBQ0Q7b0JBQ0UsTUFBTSxFQUFFLFlBQVk7b0JBQ3BCLE9BQU8sRUFBRSxFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFFLElBQUksRUFBRTtpQkFDN0M7YUFDRjtTQUNGLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFRCxNQUFNLENBQUMsTUFBTSxDQUFDO0FBQ2hCLENBQUMsQ0FBQyIsImZpbGUiOiJwYWNrYWdlcy9jb3JlL3dlYnBhY2stY29uZmlnLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3Qgd2VicGFjayA9IHJlcXVpcmUoJ3dlYnBhY2snKTtcbmNvbnN0IHBhdGggPSByZXF1aXJlKCdwYXRoJyk7XG5jb25zdCBmcyA9IHJlcXVpcmUoJ2ZzJyk7XG5jb25zdCBBc3NldHNQbHVnaW4gPSByZXF1aXJlKCdhc3NldHMtd2VicGFjay1wbHVnaW4nKTtcbmNvbnN0IFByb2dyZXNzQmFyUGx1Z2luID0gcmVxdWlyZSgncHJvZ3Jlc3MtYmFyLXdlYnBhY2stcGx1Z2luJyk7XG5jb25zdCBub2RlRXh0ZXJuYWxzID0gcmVxdWlyZSgnd2VicGFjay1ub2RlLWV4dGVybmFscycpO1xuY29uc3QgU3RhcnRTZXJ2ZXJQbHVnaW4gPSByZXF1aXJlKCdzdGFydC1zZXJ2ZXItd2VicGFjay1wbHVnaW4nKTtcbmNvbnN0IFJlbG9hZFNlcnZlclBsdWdpbiA9IHJlcXVpcmUoJ3JlbG9hZC1zZXJ2ZXItd2VicGFjay1wbHVnaW4nKTtcbmNvbnN0IEV4dHJhY3RUZXh0UGx1Z2luID0gcmVxdWlyZSgnZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luJyk7XG5jb25zdCBIdG1sV2VicGFja1BsdWdpbiA9IHJlcXVpcmUoJ2h0bWwtd2VicGFjay1wbHVnaW4nKTtcbmNvbnN0IE9mZmxpbmVQbHVnaW4gPSByZXF1aXJlKCdvZmZsaW5lLXBsdWdpbicpO1xuY29uc3QgVmlzdWFsaXplclBsdWdpbiA9IHJlcXVpcmUoJ3dlYnBhY2stdmlzdWFsaXplci1wbHVnaW4nKTtcbi8vIGNvbnN0IFByZXBhY2tXZWJwYWNrUGx1Z2luID0gcmVxdWlyZSgncHJlcGFjay13ZWJwYWNrLXBsdWdpbicpLmRlZmF1bHQ7XG5jb25zdCBHZW5lcmF0ZUpzb25QbHVnaW4gPSByZXF1aXJlKCdnZW5lcmF0ZS1qc29uLXdlYnBhY2stcGx1Z2luJyk7XG5jb25zdCB7IENoZWNrZXJQbHVnaW4gfSA9IHJlcXVpcmUoJ2F3ZXNvbWUtdHlwZXNjcmlwdC1sb2FkZXInKTtcblxuY29uc3QgYXBwUm9vdCA9IHByb2Nlc3MuY3dkKCk7XG5cbmNvbnN0IHRvcEZvbGRlciA9IHBhdGgucmVzb2x2ZShfX2Rpcm5hbWUsICcuLicpO1xuY29uc3QgaXNMaW5rZWQgPSBwYXRoLmJhc2VuYW1lKHRvcEZvbGRlcikgPT09ICdwYWNrYWdlcyc7XG5jb25zdCBub2RlTW9kdWxlcyA9IGlzTGlua2VkXG4gID8gcGF0aC5yZXNvbHZlKF9fZGlybmFtZSwgJ25vZGVfbW9kdWxlcycpXG4gIDogcGF0aC5yZXNvbHZlKF9fZGlybmFtZSwgJy4uJyk7XG5wcm9jZXNzLm5vRGVwcmVjYXRpb24gPSB0cnVlO1xuY29uc3QgYWxsUGFja2FnZXMgPSAhaXNMaW5rZWRcbiAgPyBbXVxuICA6IGZzLnJlYWRkaXJTeW5jKHRvcEZvbGRlcikuZmlsdGVyKHggPT4geFswXSAhPT0gJy4nKTtcblxubW9kdWxlLmV4cG9ydHMgPSAoeyBtb2RlLCB0YXJnZXQsIGRldlVybCwgZGV2UG9ydCwgc3NyLCBzZXJ2ZXJsZXNzIH0pID0+IHtcbiAgY29uc3QgaXNEZXYgPSBtb2RlICE9PSAncHJvZHVjdGlvbic7XG4gIGNvbnN0IGlzUHJvZCA9IG1vZGUgPT09ICdwcm9kdWN0aW9uJztcbiAgY29uc3QgaXNXZWIgPSB0YXJnZXQgIT09ICdub2RlJztcbiAgY29uc3QgaXNFbGVjdHJvbiA9IHRhcmdldCA9PT0gJ2VsZWN0cm9uJztcbiAgY29uc3QgaXNOb2RlID0gdGFyZ2V0ID09PSAnbm9kZSc7XG4gIGNvbnN0IGlzU2VydmVybGVzcyA9IHNlcnZlcmxlc3MgPT09IHRydWUgfHwgaXNFbGVjdHJvbjtcbiAgY29uc3QgaXNTU1IgPSBzc3IgIT09IGZhbHNlICYmICFzZXJ2ZXJsZXNzO1xuICBjb25zdCBmb2xkZXIgPSBpc0RldiA/ICcuZGV2JyA6ICcuZGlzdCc7XG5cbiAgY29uc3QgY29uZmlnID0ge1xuICAgIHJlc29sdmU6IHtcbiAgICAgIGV4dGVuc2lvbnM6IFsnLmpzJywgJy5qc29uJywgJy50cycsICcudHN4J10sXG4gICAgICBtb2R1bGVzOiBhbGxQYWNrYWdlc1xuICAgICAgICAubWFwKHggPT4gcGF0aC5yZXNvbHZlKHRvcEZvbGRlciwgeCwgJ25vZGVfbW9kdWxlcycpKVxuICAgICAgICAuY29uY2F0KFtcbiAgICAgICAgICBwYXRoLnJlc29sdmUoYXBwUm9vdCwgJ25vZGVfbW9kdWxlcycpLFxuICAgICAgICAgIHBhdGgucmVzb2x2ZShhcHBSb290LCAnYXBwJyksXG4gICAgICAgIF0pLFxuICAgICAgYWxpYXM6IE9iamVjdC5hc3NpZ24oXG4gICAgICAgIHtcbiAgICAgICAgICAnaGlzdG9yeS9jcmVhdGVGbGV4SGlzdG9yeSc6IGlzU2VydmVybGVzc1xuICAgICAgICAgICAgPyAnaGlzdG9yeS9jcmVhdGVIYXNoSGlzdG9yeSdcbiAgICAgICAgICAgIDogJ2hpc3RvcnkvY3JlYXRlQnJvd3Nlckhpc3RvcnknLFxuICAgICAgICAgIHJlYWN0OiBwYXRoLnJlc29sdmUoYXBwUm9vdCwgJ25vZGVfbW9kdWxlcycsICdyZWFjdCcpLFxuICAgICAgICAgIC8vICdjb3JlLWpzJzogcGF0aC5yZXNvbHZlKGFwcFJvb3QsICdub2RlX21vZHVsZXMnLCAnY29yZS1qcycpLFxuICAgICAgICAgICdyZWFjdC1kb20nOiBwYXRoLnJlc29sdmUoYXBwUm9vdCwgJ25vZGVfbW9kdWxlcycsICdyZWFjdC1kb20nKSxcbiAgICAgICAgICAncmVhY3Qtcm91dGVyJzogcGF0aC5yZXNvbHZlKGFwcFJvb3QsICdub2RlX21vZHVsZXMnLCAncmVhY3Qtcm91dGVyJyksXG4gICAgICAgICAgbW9tZW50OiBwYXRoLnJlc29sdmUoYXBwUm9vdCwgJ25vZGVfbW9kdWxlcycsICdtb21lbnQnKSxcbiAgICAgICAgICBsb2Rhc2g6IHBhdGgucmVzb2x2ZShhcHBSb290LCAnbm9kZV9tb2R1bGVzJywgJ2xvZGFzaCcpLFxuICAgICAgICAgICdAcm9vdCc6IGFwcFJvb3QsXG4gICAgICAgICAgJ0BhcHAnOlxuICAgICAgICAgICAgaXNOb2RlICYmICFpc1NTUlxuICAgICAgICAgICAgICA/IHBhdGgucmVzb2x2ZShfX2Rpcm5hbWUsICdub29wJylcbiAgICAgICAgICAgICAgOiBwYXRoLnJlc29sdmUoYXBwUm9vdCwgJ2FwcCcpLFxuICAgICAgICB9LFxuICAgICAgICBhbGxQYWNrYWdlcy5yZWR1Y2UoKG9iaiwgaXRlbSkgPT4ge1xuICAgICAgICAgIC8vIGdldCBhbGwgZm9sZGVycyBpbiBzcmMgYW5kIGNyZWF0ZSAnb2x5bXAteHh4JyBhbGlhc1xuICAgICAgICAgIGlmIChpdGVtID09PSAnY29yZScpIG9iai5vbHltcCA9IHBhdGgucmVzb2x2ZSh0b3BGb2xkZXIsIGl0ZW0pO1xuICAgICAgICAgIGVsc2Ugb2JqW2BvbHltcC0ke2l0ZW19YF0gPSBwYXRoLnJlc29sdmUodG9wRm9sZGVyLCBpdGVtKTtcbiAgICAgICAgICByZXR1cm4gb2JqO1xuICAgICAgICB9LCB7fSlcbiAgICAgICksXG4gICAgfSxcbiAgICByZXNvbHZlTG9hZGVyOiB7XG4gICAgICBtb2R1bGVzOiBbXG4gICAgICAgIHBhdGgucmVzb2x2ZShub2RlTW9kdWxlcyksXG4gICAgICAgIHBhdGgucmVzb2x2ZShhcHBSb290LCAnbm9kZV9tb2R1bGVzJyksXG4gICAgICBdLFxuICAgIH0sXG4gICAgcGx1Z2luczogW1xuICAgICAgLy8gbmV3IHdlYnBhY2sub3B0aW1pemUuTW9kdWxlQ29uY2F0ZW5hdGlvblBsdWdpbigpLFxuICAgICAgbmV3IHdlYnBhY2suRGVmaW5lUGx1Z2luKFxuICAgICAgICBPYmplY3QuYXNzaWduKFxuICAgICAgICAgIHtcbiAgICAgICAgICAgICdwcm9jZXNzLmVudi5TU1InOiBKU09OLnN0cmluZ2lmeShpc1NTUiksXG4gICAgICAgICAgICAncHJvY2Vzcy5lbnYuTk9ERV9FTlYnOiBKU09OLnN0cmluZ2lmeShtb2RlKSxcbiAgICAgICAgICAgICdwcm9jZXNzLmVudi5ERVZfUE9SVCc6IEpTT04uc3RyaW5naWZ5KGRldlBvcnQpLFxuICAgICAgICAgICAgJ3Byb2Nlc3MuZW52LkRFVl9VUkwnOiBkZXZVcmxcbiAgICAgICAgICAgICAgPyBKU09OLnN0cmluZ2lmeShkZXZVcmwub3JpZ2luKVxuICAgICAgICAgICAgICA6IHVuZGVmaW5lZCxcbiAgICAgICAgICAgICdwcm9jZXNzLmVudi5JU19XRUInOiBpc1dlYiA/IEpTT04uc3RyaW5naWZ5KHRydWUpIDogdW5kZWZpbmVkLFxuICAgICAgICAgICAgJ3Byb2Nlc3MuZW52LklTX05PREUnOiBpc05vZGUgPyBKU09OLnN0cmluZ2lmeSh0cnVlKSA6IHVuZGVmaW5lZCxcbiAgICAgICAgICAgICdwcm9jZXNzLmVudi5JU19FTEVDVFJPTic6IGlzRWxlY3Ryb25cbiAgICAgICAgICAgICAgPyBKU09OLnN0cmluZ2lmeSh0cnVlKVxuICAgICAgICAgICAgICA6IHVuZGVmaW5lZCxcbiAgICAgICAgICB9LFxuICAgICAgICAgICFpc05vZGVcbiAgICAgICAgICAgID8ge1xuICAgICAgICAgICAgICAgICdwcm9jZXNzLmVudi5BTVAnOiBwcm9jZXNzLmVudi5BTVBcbiAgICAgICAgICAgICAgICAgID8gSlNPTi5zdHJpbmdpZnkocHJvY2Vzcy5lbnYuQU1QKVxuICAgICAgICAgICAgICAgICAgOiB1bmRlZmluZWQsXG4gICAgICAgICAgICAgICAgJ3Byb2Nlc3MuZW52LkdNX0tFWSc6IEpTT04uc3RyaW5naWZ5KHByb2Nlc3MuZW52LkdNX0tFWSksXG4gICAgICAgICAgICAgICAgJ3Byb2Nlc3MuZW52LkdSQVBIUUxfVVJMJzogcHJvY2Vzcy5lbnYuR1JBUEhRTF9VUkxcbiAgICAgICAgICAgICAgICAgID8gSlNPTi5zdHJpbmdpZnkocHJvY2Vzcy5lbnYuR1JBUEhRTF9VUkwpXG4gICAgICAgICAgICAgICAgICA6IHVuZGVmaW5lZCxcbiAgICAgICAgICAgICAgICAvKidwcm9jZXNzLmVudi5HUkFQSFFMX1NVQic6IHByb2Nlc3MuZW52LkdSQVBIUUxfU1VCXG4gICAgICAgICAgICAgICAgPyBKU09OLnN0cmluZ2lmeShwcm9jZXNzLmVudi5HUkFQSFFMX1NVQilcbiAgICAgICAgICAgICAgICA6IHVuZGVmaW5lZCwqL1xuICAgICAgICAgICAgICAgICdwcm9jZXNzLmVudi5VUkwnOiBwcm9jZXNzLmVudi5VUkxcbiAgICAgICAgICAgICAgICAgID8gSlNPTi5zdHJpbmdpZnkocHJvY2Vzcy5lbnYuVVJMKVxuICAgICAgICAgICAgICAgICAgOiB1bmRlZmluZWQsXG4gICAgICAgICAgICAgICAgJ3Byb2Nlc3MuZW52LkZJTEVTVEFDS19LRVknOiBwcm9jZXNzLmVudi5GSUxFU1RBQ0tfS0VZXG4gICAgICAgICAgICAgICAgICA/IEpTT04uc3RyaW5naWZ5KHByb2Nlc3MuZW52LkZJTEVTVEFDS19LRVkpXG4gICAgICAgICAgICAgICAgICA6IHVuZGVmaW5lZCxcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgOiB7fVxuICAgICAgICApXG4gICAgICApLFxuICAgICAgLy8gbmV3IFByZXBhY2tXZWJwYWNrUGx1Z2luKHsgfSksXG4gICAgICBuZXcgd2VicGFjay5Db250ZXh0UmVwbGFjZW1lbnRQbHVnaW4oL21vbWVudFsvXFxcXF1sb2NhbGUkLywgL2RlLyksXG4gICAgICBuZXcgd2VicGFjay5OYW1lZE1vZHVsZXNQbHVnaW4oKSxcbiAgICAgIG5ldyBQcm9ncmVzc0JhclBsdWdpbigpLFxuICAgICAgbmV3IHdlYnBhY2suTm9FbWl0T25FcnJvcnNQbHVnaW4oKSxcbiAgICAgIC8vIG5ldyBDaGVja2VyUGx1Z2luKCksXG4gICAgXSxcbiAgICBtb2R1bGU6IHtcbiAgICAgIHJ1bGVzOiBbXG4gICAgICAgIHtcbiAgICAgICAgICB0ZXN0OiAvXFwuaHRtbCQvLFxuICAgICAgICAgIGxvYWRlcjogJ2ZpbGUtbG9hZGVyP25hbWU9W25hbWVdLltleHRdJyxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIHRlc3Q6IC9cXC4oanBnfGpwZWd8cG5nfGdpZnxlb3R8dHRmfHdvZmZ8d29mZjIpJC8sXG4gICAgICAgICAgbG9hZGVyOiAndXJsLWxvYWRlcicsXG4gICAgICAgICAgb3B0aW9uczoge1xuICAgICAgICAgICAgbGltaXQ6IDIwMDAwLFxuICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICB0ZXN0OiAvXFwuKHR4dHxtZCkkLyxcbiAgICAgICAgICBsb2FkZXI6ICdyYXctbG9hZGVyJyxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIHRlc3Q6IC9cXC5qc29uJC8sXG4gICAgICAgICAgbG9hZGVyOiAnanNvbi1sb2FkZXInLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgdGVzdDogL1xcLihncmFwaHFsfGdxbCkkLyxcbiAgICAgICAgICBleGNsdWRlOiAvbm9kZV9tb2R1bGVzLyxcbiAgICAgICAgICBsb2FkZXI6ICdncmFwaHFsLXRhZy9sb2FkZXInLFxuICAgICAgICB9LFxuICAgICAgXSxcbiAgICB9LFxuICAgIG91dHB1dDoge1xuICAgICAgcGF0aDogcGF0aC5yZXNvbHZlKGFwcFJvb3QsIGZvbGRlciwgdGFyZ2V0KSxcbiAgICB9LFxuICAgIGVudHJ5OiB7XG4gICAgICBtYWluOiBbXSxcbiAgICB9LFxuICB9O1xuXG4gIC8vIGlubGluZS1zb3VyY2UtbWFwIGZvciB3ZWItZGV2XG4gIGNvbmZpZy5kZXZ0b29sID0gJ3NvdXJjZS1tYXAnO1xuXG4gIC8vIGlubGluZS1zb3VyY2UtbWFwIGZvciB3ZWItZGV2XG4gIGlmIChpc1Byb2QgJiYgaXNXZWIgJiYgIWlzRWxlY3Ryb24pIHtcbiAgICBjb25maWcub3V0cHV0LmZpbGVuYW1lID0gJ1tuYW1lXS5bY29udGVudGhhc2hdLmpzJztcbiAgfSBlbHNlIHtcbiAgICBjb25maWcub3V0cHV0LmZpbGVuYW1lID0gJ1tuYW1lXS5qcyc7XG4gIH1cblxuICAvLyB0YXJnZXQgJiYgbm9kZSBzZXR0aW5nc1xuICBpZiAoaXNOb2RlKSB7XG4gICAgY29uZmlnLnRhcmdldCA9ICdub2RlJztcbiAgICBjb25maWcud2F0Y2ggPSBpc0RldjtcbiAgICBjb25maWcubm9kZSA9IHtcbiAgICAgIF9fZGlybmFtZTogZmFsc2UsXG4gICAgICBfX2ZpbGVuYW1lOiBmYWxzZSxcbiAgICB9O1xuICAgIGNvbmZpZy5vdXRwdXQubGlicmFyeVRhcmdldCA9ICdjb21tb25qczInO1xuICB9IGVsc2UgaWYgKGlzRWxlY3Ryb24pIHtcbiAgICBjb25maWcudGFyZ2V0ID0gJ2VsZWN0cm9uLW1haW4nO1xuICAgIGNvbmZpZy5ub2RlID0ge1xuICAgICAgX19kaXJuYW1lOiBmYWxzZSxcbiAgICAgIF9fZmlsZW5hbWU6IGZhbHNlLFxuICAgIH07XG4gICAgY29uZmlnLm91dHB1dC5saWJyYXJ5VGFyZ2V0ID0gJ2NvbW1vbmpzMic7XG4gIH0gZWxzZSB7XG4gICAgY29uZmlnLnRhcmdldCA9ICd3ZWInO1xuICAgIGNvbmZpZy5ub2RlID0ge1xuICAgICAgX19kaXJuYW1lOiB0cnVlLFxuICAgICAgX19maWxlbmFtZTogdHJ1ZSxcbiAgICB9O1xuICAgIGNvbmZpZy5vdXRwdXQubGlicmFyeVRhcmdldCA9ICd2YXInO1xuICB9XG5cbiAgaWYgKGlzRGV2ICYmIGlzV2ViKSB7XG4gICAgY29uZmlnLm91dHB1dC5wdWJsaWNQYXRoID0gZGV2VXJsLmhyZWY7XG4gIH0gZWxzZSB7XG4gICAgY29uZmlnLm91dHB1dC5wdWJsaWNQYXRoID0gJy8nO1xuICB9XG5cbiAgLy8gYmFiZWwtcHJlc2V0LWVudiBvbiBub2RlXG4gIGlmIChpc05vZGUpIHtcbiAgfSBlbHNlIGlmIChpc0Rldikge1xuICB9IGVsc2Uge1xuICAgIC8qYmFiZWwub3B0aW9ucy5wbHVnaW5zLnB1c2goW1xuICAgICAgJ3RyYW5zZm9ybS1pbXBvcnRzJyxcbiAgICAgIHtcbiAgICAgICAgYW50ZDoge1xuICAgICAgICAgIHRyYW5zZm9ybTogJ2FudGQvbGliLyR7bWVtYmVyfScsXG4gICAgICAgICAga2ViYWJDYXNlOiB0cnVlLFxuICAgICAgICAgIHByZXZlbnRGdWxsSW1wb3J0OiB0cnVlLFxuICAgICAgICB9LFxuICAgICAgICBsb2Rhc2g6IHtcbiAgICAgICAgICB0cmFuc2Zvcm06ICdsb2Rhc2gvJHttZW1iZXJ9JyxcbiAgICAgICAgICBwcmV2ZW50RnVsbEltcG9ydDogdHJ1ZSxcbiAgICAgICAgfSxcbiAgICAgICAgJ2RhdGUtZm5zJzoge1xuICAgICAgICAgIHRyYW5zZm9ybTogJ2RhdGUtZm5zLyR7bWVtYmVyfScsXG4gICAgICAgICAgcHJldmVudEZ1bGxJbXBvcnQ6IHRydWUsXG4gICAgICAgICAgc25ha2VDYXNlOiB0cnVlLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICBdKTsqL1xuICB9XG5cbiAgLy8gd2VicGFjayBwbHVnaW5zXG4gIGlmIChpc1dlYiAmJiBpc1Byb2QpIHtcbiAgICBjb25maWcucGx1Z2lucy5wdXNoKG5ldyB3ZWJwYWNrLm9wdGltaXplLk9jY3VycmVuY2VPcmRlclBsdWdpbigpKTtcbiAgICAvLyBjb25maWcucGx1Z2lucy5wdXNoKG5ldyB3ZWJwYWNrLm9wdGltaXplLkRlZHVwZVBsdWdpbigpKTtcbiAgICBjb25maWcucGx1Z2lucy5wdXNoKFxuICAgICAgbmV3IEV4dHJhY3RUZXh0UGx1Z2luKHtcbiAgICAgICAgZmlsZW5hbWU6IGlzRWxlY3Ryb24gPyAnW25hbWVdLmNzcycgOiAnW25hbWVdLltjb250ZW50aGFzaF0uY3NzJyxcbiAgICAgICAgYWxsQ2h1bmtzOiB0cnVlLFxuICAgICAgfSlcbiAgICApO1xuICAgIGlmIChpc0VsZWN0cm9uKSB7XG4gICAgICBjb25maWcucGx1Z2lucy5wdXNoKG5ldyBHZW5lcmF0ZUpzb25QbHVnaW4oJ3BhY2thZ2UuanNvbicsIHt9KSk7XG4gICAgfVxuICAgIGNvbmZpZy5wbHVnaW5zLnB1c2goXG4gICAgICBuZXcgd2VicGFjay5Mb2FkZXJPcHRpb25zUGx1Z2luKHtcbiAgICAgICAgbWluaW1pemU6IHRydWUsXG4gICAgICAgIGRlYnVnOiBmYWxzZSxcbiAgICAgIH0pXG4gICAgKTtcbiAgICBjb25maWcucGx1Z2lucy5wdXNoKFxuICAgICAgbmV3IHdlYnBhY2sub3B0aW1pemUuVWdsaWZ5SnNQbHVnaW4oe1xuICAgICAgICBjb21wcmVzczoge1xuICAgICAgICAgIHNjcmV3X2llODogdHJ1ZSxcbiAgICAgICAgICB3YXJuaW5nczogZmFsc2UsXG4gICAgICAgIH0sXG4gICAgICAgIG1hbmdsZToge1xuICAgICAgICAgIHNjcmV3X2llODogdHJ1ZSxcbiAgICAgICAgfSxcbiAgICAgICAgb3V0cHV0OiB7XG4gICAgICAgICAgY29tbWVudHM6IGZhbHNlLFxuICAgICAgICAgIHNjcmV3X2llODogdHJ1ZSxcbiAgICAgICAgfSxcbiAgICAgICAgc291cmNlTWFwOiBmYWxzZSxcbiAgICAgIH0pXG4gICAgKTtcbiAgfVxuICBpZiAoaXNOb2RlKSB7XG4gICAgaWYgKGlzRGV2KSB7XG4gICAgICBjb25maWcucGx1Z2lucy5wdXNoKG5ldyBTdGFydFNlcnZlclBsdWdpbignbWFpbi5qcycpKTtcbiAgICAgIGNvbmZpZy5wbHVnaW5zLnB1c2goXG4gICAgICAgIG5ldyBSZWxvYWRTZXJ2ZXJQbHVnaW4oe1xuICAgICAgICAgIC8vIERlZmF1bHRzIHRvIHByb2Nlc3MuY3dkKCkgKyBcIi9zZXJ2ZXIuanNcIlxuICAgICAgICAgIHNjcmlwdDogcGF0aC5yZXNvbHZlKF9fZGlybmFtZSwgJ25vZGUnLCAnaW5kZXguanMnKSxcbiAgICAgICAgfSlcbiAgICAgICk7XG4gICAgfVxuICAgIGNvbmZpZy5wbHVnaW5zLnB1c2goXG4gICAgICBuZXcgd2VicGFjay5CYW5uZXJQbHVnaW4oe1xuICAgICAgICBiYW5uZXI6ICdyZXF1aXJlKFwic291cmNlLW1hcC1zdXBwb3J0XCIpLmluc3RhbGwoKTsnLFxuICAgICAgICByYXc6IHRydWUsXG4gICAgICAgIGVudHJ5T25seTogdHJ1ZSxcbiAgICAgIH0pXG4gICAgKTtcbiAgICBjb25maWcucGx1Z2lucy5wdXNoKFxuICAgICAgbmV3IHdlYnBhY2suTm9ybWFsTW9kdWxlUmVwbGFjZW1lbnRQbHVnaW4oXG4gICAgICAgIC9cXC4obGVzc3xjc3N8c2NzcykkLyxcbiAgICAgICAgJ25vZGUtbm9vcCdcbiAgICAgIClcbiAgICApO1xuICB9IGVsc2Uge1xuICAgIGNvbmZpZy5wbHVnaW5zLnB1c2goXG4gICAgICBuZXcgQXNzZXRzUGx1Z2luKHtcbiAgICAgICAgZmlsZW5hbWU6ICdhc3NldHMuanNvbicsXG4gICAgICAgIHBhdGg6IHBhdGgucmVzb2x2ZShwcm9jZXNzLmN3ZCgpLCBmb2xkZXIsIHRhcmdldCksXG4gICAgICB9KVxuICAgICk7XG4gICAgaWYgKGlzUHJvZCAmJiAhaXNTZXJ2ZXJsZXNzKSB7XG4gICAgICBjb25maWcucGx1Z2lucy5wdXNoKFxuICAgICAgICBuZXcgSHRtbFdlYnBhY2tQbHVnaW4oe1xuICAgICAgICAgIGZpbGVuYW1lOiAnb2ZmbGluZS5odG1sJyxcbiAgICAgICAgICB0ZW1wbGF0ZTogcGF0aC5yZXNvbHZlKF9fZGlybmFtZSwgJ3RlbXBsYXRlcycsICdkZWZhdWx0LmpzJyksXG4gICAgICAgICAgaW5qZWN0OiBmYWxzZSxcbiAgICAgICAgICAvKiBtaW5pZnk6IHtcbiAgICAgICAgICByZW1vdmVDb21tZW50czogdHJ1ZSxcbiAgICAgICAgICBjb2xsYXBzZVdoaXRlc3BhY2U6IHRydWUsXG4gICAgICAgICAgcmVtb3ZlUmVkdW5kYW50QXR0cmlidXRlczogdHJ1ZSxcbiAgICAgICAgICB1c2VTaG9ydERvY3R5cGU6IHRydWUsXG4gICAgICAgICAgcmVtb3ZlRW1wdHlBdHRyaWJ1dGVzOiB0cnVlLFxuICAgICAgICAgIHJlbW92ZVN0eWxlTGlua1R5cGVBdHRyaWJ1dGVzOiB0cnVlLFxuICAgICAgICAgIGtlZXBDbG9zaW5nU2xhc2g6IHRydWUsXG4gICAgICAgICAgbWluaWZ5SlM6IHRydWUsXG4gICAgICAgICAgbWluaWZ5Q1NTOiB0cnVlLFxuICAgICAgICAgIG1pbmlmeVVSTHM6IHRydWUsXG4gICAgICAgIH0sKi9cbiAgICAgICAgfSlcbiAgICAgICk7XG4gICAgICBjb25maWcucGx1Z2lucy5wdXNoKFxuICAgICAgICBuZXcgT2ZmbGluZVBsdWdpbih7XG4gICAgICAgICAgcmVzcG9uc2VTdHJhdGVneTogJ25ldHdvcmstZmlyc3QnLFxuICAgICAgICAgIGV4dGVybmFsczogW1xuICAgICAgICAgICAgJ2h0dHBzOi8vY2RuLnBvbHlmaWxsLmlvL3YyL3BvbHlmaWxsLm1pbi5qcz9jYWxsYmFjaz1QT0xZJyxcbiAgICAgICAgICBdLFxuICAgICAgICAgIC8vIGF1dG9VcGRhdGU6IDEwMDAgKiA2MCAqIDUsXG4gICAgICAgICAgY2FjaGVzOiAnYWxsJyxcbiAgICAgICAgICBTZXJ2aWNlV29ya2VyOiB7XG4gICAgICAgICAgICBldmVudHM6IHRydWUsXG4gICAgICAgICAgICBuYXZpZ2F0ZUZhbGxiYWNrVVJMOiAnL29mZmxpbmUuaHRtbCcsXG4gICAgICAgICAgfSxcbiAgICAgICAgICBBcHBDYWNoZTogZmFsc2UsXG4gICAgICAgIH0pXG4gICAgICApO1xuICAgICAgY29uZmlnLnBsdWdpbnMucHVzaChcbiAgICAgICAgbmV3IFZpc3VhbGl6ZXJQbHVnaW4oe1xuICAgICAgICAgIGZpbGVuYW1lOiAnLi92aXN1YWxpemVyLmh0bWwnLFxuICAgICAgICB9KVxuICAgICAgKTtcbiAgICB9IGVsc2UgaWYgKGlzU2VydmVybGVzcykge1xuICAgICAgY29uZmlnLnBsdWdpbnMucHVzaChcbiAgICAgICAgbmV3IEh0bWxXZWJwYWNrUGx1Z2luKHtcbiAgICAgICAgICBmaWxlbmFtZTogJ2luZGV4Lmh0bWwnLFxuICAgICAgICAgIHRlbXBsYXRlOiBwYXRoLnJlc29sdmUoXG4gICAgICAgICAgICBfX2Rpcm5hbWUsXG4gICAgICAgICAgICAndGVtcGxhdGVzJyxcbiAgICAgICAgICAgIGlzRWxlY3Ryb24gPyAnZWxlY3Ryb24uanMnIDogJ3NlcnZlcmxlc3MuanMnXG4gICAgICAgICAgKSxcbiAgICAgICAgICBpbmplY3Q6IGZhbHNlLFxuICAgICAgICAgIC8qIG1pbmlmeToge1xuICAgICAgICAgIHJlbW92ZUNvbW1lbnRzOiB0cnVlLFxuICAgICAgICAgIGNvbGxhcHNlV2hpdGVzcGFjZTogdHJ1ZSxcbiAgICAgICAgICByZW1vdmVSZWR1bmRhbnRBdHRyaWJ1dGVzOiB0cnVlLFxuICAgICAgICAgIHVzZVNob3J0RG9jdHlwZTogdHJ1ZSxcbiAgICAgICAgICByZW1vdmVFbXB0eUF0dHJpYnV0ZXM6IHRydWUsXG4gICAgICAgICAgcmVtb3ZlU3R5bGVMaW5rVHlwZUF0dHJpYnV0ZXM6IHRydWUsXG4gICAgICAgICAga2VlcENsb3NpbmdTbGFzaDogdHJ1ZSxcbiAgICAgICAgICBtaW5pZnlKUzogdHJ1ZSxcbiAgICAgICAgICBtaW5pZnlDU1M6IHRydWUsXG4gICAgICAgICAgbWluaWZ5VVJMczogdHJ1ZSxcbiAgICAgICAgfSwqL1xuICAgICAgICB9KVxuICAgICAgKTtcbiAgICB9XG4gIH1cblxuICAvLyBIb3QgbW9kdWxlIHJlcGxhY2VtZW50IG9uIGRldlxuICBpZiAoaXNEZXYpIHtcbiAgICBjb25maWcucGx1Z2lucy5wdXNoKG5ldyB3ZWJwYWNrLkhvdE1vZHVsZVJlcGxhY2VtZW50UGx1Z2luKCkpO1xuICB9XG5cbiAgLy8gTGltaXRDaHVua0NvdW50IG9uIGFsbCBidXQgcHJvZHVjdGlvbi13ZWJcbiAgaWYgKGlzRGV2IHx8IGlzTm9kZSB8fCBpc0VsZWN0cm9uKSB7XG4gICAgY29uZmlnLnBsdWdpbnMucHVzaChcbiAgICAgIG5ldyB3ZWJwYWNrLm9wdGltaXplLkxpbWl0Q2h1bmtDb3VudFBsdWdpbih7IG1heENodW5rczogMSB9KVxuICAgICk7XG4gICAgY29uZmlnLm91dHB1dC5maWxlbmFtZSA9ICdbbmFtZV0uanMnO1xuICB9IGVsc2Uge1xuICAgIGNvbmZpZy5vdXRwdXQuZmlsZW5hbWUgPSAnW25hbWVdLltjaHVua2hhc2hdLmpzJztcbiAgICBjb25maWcub3V0cHV0LmNodW5rRmlsZW5hbWUgPSAnW25hbWVdLltjaHVua2hhc2hdLmpzJztcbiAgfVxuXG4gIC8vIGV4dGVybmFsc1xuICBpZiAoaXNOb2RlKSB7XG4gICAgY29uZmlnLmV4dGVybmFscyA9IGFsbFBhY2thZ2VzXG4gICAgICAubWFwKHggPT4gcGF0aC5yZXNvbHZlKHRvcEZvbGRlciwgeCwgJ25vZGVfbW9kdWxlcycpKVxuICAgICAgLmNvbmNhdChbcGF0aC5yZXNvbHZlKGFwcFJvb3QsICdub2RlX21vZHVsZXMnKV0pXG4gICAgICAubWFwKG1vZHVsZXNEaXIgPT5cbiAgICAgICAgbm9kZUV4dGVybmFscyh7XG4gICAgICAgICAgbW9kdWxlc0RpcixcbiAgICAgICAgICB3aGl0ZWxpc3Q6IFtcbiAgICAgICAgICAgIHYgPT4gdi5pbmRleE9mKCd3ZWJwYWNrL2hvdC9wb2xsJykgPT09IDAsXG4gICAgICAgICAgICAnc291cmNlLW1hcC1zdXBwb3J0L3JlZ2lzdGVyJyxcbiAgICAgICAgICAgIHYgPT4gdi5pbmRleE9mKCdvbHltcC0nKSA9PT0gMCxcbiAgICAgICAgICAgIC8vIHYgPT4gdiA9PT0gJ2FudGQnIHx8IHYuaW5kZXhPZignYW50ZC8nKSA9PT0gMCxcbiAgICAgICAgICAgIC9cXC4oZW90fHdvZmZ8d29mZjJ8dHRmfG90ZikkLyxcbiAgICAgICAgICAgIC9cXC4oc3ZnfHBuZ3xqcGd8anBlZ3xnaWZ8aWNvKSQvLFxuICAgICAgICAgICAgL1xcLihtcDR8bXAzfG9nZ3xzd2Z8d2VicCkkLyxcbiAgICAgICAgICAgIC9cXC4oY3NzfHNjc3N8c2Fzc3xzc3N8bGVzcykkLyxcbiAgICAgICAgICBdLFxuICAgICAgICB9KVxuICAgICAgKTtcbiAgfVxuXG4gIGlmIChpc1dlYiAmJiBpc0Rldikge1xuICAgIGNvbmZpZy5lbnRyeS5tYWluID0gW1xuICAgICAgJ3JlYWN0LWhvdC1sb2FkZXIvcGF0Y2gnLFxuICAgICAgYHdlYnBhY2stZGV2LXNlcnZlci9jbGllbnQ/JHtjb25maWcub3V0cHV0LnB1YmxpY1BhdGh9YCxcbiAgICAgICd3ZWJwYWNrL2hvdC9vbmx5LWRldi1zZXJ2ZXInLFxuICAgICAgcmVxdWlyZS5yZXNvbHZlKHBhdGgucmVzb2x2ZShfX2Rpcm5hbWUsIHRhcmdldCkpLFxuICAgIF07XG4gIH0gZWxzZSBpZiAoaXNOb2RlICYmIGlzRGV2KSB7XG4gICAgY29uZmlnLmVudHJ5Lm1haW4gPSBbXG4gICAgICAnd2VicGFjay9ob3QvcG9sbD8xMDAwJyxcbiAgICAgIHJlcXVpcmUucmVzb2x2ZShwYXRoLnJlc29sdmUoX19kaXJuYW1lLCB0YXJnZXQpKSxcbiAgICBdO1xuICB9IGVsc2UgaWYgKGlzRWxlY3Ryb24pIHtcbiAgICBjb25maWcuZW50cnkubWFpbiA9IFtcbiAgICAgIHJlcXVpcmUucmVzb2x2ZShwYXRoLnJlc29sdmUoX19kaXJuYW1lLCAnd2ViJywgJ2luZGV4LmpzJykpLFxuICAgIF07XG4gICAgY29uZmlnLmVudHJ5LmFwcCA9IFtcbiAgICAgIHJlcXVpcmUucmVzb2x2ZShwYXRoLnJlc29sdmUoX19kaXJuYW1lLCAnZWxlY3Ryb24nLCAnbWFpbi5qcycpKSxcbiAgICBdO1xuICB9IGVsc2Uge1xuICAgIGNvbmZpZy5lbnRyeS5tYWluID0gW1xuICAgICAgcmVxdWlyZS5yZXNvbHZlKHBhdGgucmVzb2x2ZShfX2Rpcm5hbWUsIHRhcmdldCwgJ2luZGV4LmpzJykpLFxuICAgIF07XG4gIH1cblxuICBpZiAoaXNQcm9kKSB7XG4gICAgY29uZmlnLm1vZHVsZS5ydWxlcy5wdXNoKHtcbiAgICAgIHRlc3Q6IC9cXC50c3g/JC8sXG4gICAgICBpbmNsdWRlOiBbcGF0aC5yZXNvbHZlKGFwcFJvb3QsICdhcHAnKSwgcGF0aC5yZXNvbHZlKGFwcFJvb3QsICdzZXJ2ZXInKV0sXG4gICAgICB1c2U6IFtcbiAgICAgICAge1xuICAgICAgICAgIGxvYWRlcjogJ2F3ZXNvbWUtdHlwZXNjcmlwdC1sb2FkZXInLFxuICAgICAgICAgIG9wdGlvbnM6IHtcbiAgICAgICAgICAgIHNpbGVudDogdHJ1ZSxcbiAgICAgICAgICAgIHRyYW5zcGlsZU9ubHk6IHRydWUsXG4gICAgICAgICAgICBjb25maWdGaWxlTmFtZTogcGF0aC5yZXNvbHZlKF9fZGlybmFtZSwgJ3RzY29uZmlnLmpzb24nKSxcbiAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgXSxcbiAgICB9KTtcbiAgICBjb25maWcubW9kdWxlLnJ1bGVzLnB1c2goe1xuICAgICAgdGVzdDogL1xcLmNzcyQvLFxuICAgICAgbG9hZGVyOiBFeHRyYWN0VGV4dFBsdWdpbi5leHRyYWN0KHtcbiAgICAgICAgdXNlOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgbG9hZGVyOiAnY3NzLWxvYWRlcicsXG4gICAgICAgICAgICBvcHRpb25zOiB7IG1vZHVsZXM6IGZhbHNlIH0sXG4gICAgICAgICAgfSxcbiAgICAgICAgXSxcbiAgICAgICAgZmFsbGJhY2s6ICdzdHlsZS1sb2FkZXInLFxuICAgICAgfSksXG4gICAgfSk7XG4gIH0gZWxzZSB7XG4gICAgY29uZmlnLm1vZHVsZS5ydWxlcy5wdXNoKHtcbiAgICAgIHRlc3Q6IC9cXC50c3g/JC8sXG4gICAgICBpbmNsdWRlOiBbcGF0aC5yZXNvbHZlKGFwcFJvb3QsICdhcHAnKSwgcGF0aC5yZXNvbHZlKGFwcFJvb3QsICdzZXJ2ZXInKV0sXG4gICAgICB1c2U6IFtcbiAgICAgICAge1xuICAgICAgICAgIGxvYWRlcjogJ3JlYWN0LWhvdC1sb2FkZXIvd2VicGFjaycsXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBsb2FkZXI6ICdhd2Vzb21lLXR5cGVzY3JpcHQtbG9hZGVyJyxcbiAgICAgICAgICBvcHRpb25zOiB7XG4gICAgICAgICAgICBzaWxlbnQ6IHRydWUsXG4gICAgICAgICAgICB0cmFuc3BpbGVPbmx5OiB0cnVlLFxuICAgICAgICAgICAgY29uZmlnRmlsZU5hbWU6IHBhdGgucmVzb2x2ZShfX2Rpcm5hbWUsICd0c2NvbmZpZy5qc29uJyksXG4gICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgIF0sXG4gICAgfSk7XG4gICAgY29uZmlnLm1vZHVsZS5ydWxlcy5wdXNoKHtcbiAgICAgIHRlc3Q6IC9cXC5jc3MkLyxcbiAgICAgIHVzZTogW1xuICAgICAgICB7XG4gICAgICAgICAgbG9hZGVyOiAnc3R5bGUtbG9hZGVyJyxcbiAgICAgICAgICBvcHRpb25zOiB7IGluc2VydEF0OiAndG9wJyB9LFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgbG9hZGVyOiAnY3NzLWxvYWRlcicsXG4gICAgICAgICAgb3B0aW9uczogeyBtb2R1bGVzOiBmYWxzZSwgc291cmNlTWFwOiB0cnVlIH0sXG4gICAgICAgIH0sXG4gICAgICBdLFxuICAgIH0pO1xuICB9XG5cbiAgcmV0dXJuIGNvbmZpZztcbn07XG4iXX0=
