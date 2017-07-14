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
console.log('app root', path.resolve(appRoot, 'app'), path.resolve(appRoot, 'server'));
var topFolder = path.resolve(__dirname, '..');
var isLinked = path.basename(topFolder) === 'packages';
var nodeModules = isLinked
    ? path.resolve(__dirname, 'node_modules')
    : path.resolve(__dirname, '..');
process.noDeprecation = true;
var allPackages = !isLinked ? [] : fs.readdirSync(topFolder);
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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhY2thZ2VzL2FwcC93ZWJwYWNrLWNvbmZpZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxJQUFNLE9BQU8sR0FBRyxPQUFPLENBQUMsU0FBUyxDQUFDLENBQUM7QUFDbkMsSUFBTSxJQUFJLEdBQUcsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0FBQzdCLElBQU0sRUFBRSxHQUFHLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztBQUN6QixJQUFNLFlBQVksR0FBRyxPQUFPLENBQUMsdUJBQXVCLENBQUMsQ0FBQztBQUN0RCxJQUFNLGlCQUFpQixHQUFHLE9BQU8sQ0FBQyw2QkFBNkIsQ0FBQyxDQUFDO0FBQ2pFLElBQU0sYUFBYSxHQUFHLE9BQU8sQ0FBQyx3QkFBd0IsQ0FBQyxDQUFDO0FBQ3hELElBQU0saUJBQWlCLEdBQUcsT0FBTyxDQUFDLDZCQUE2QixDQUFDLENBQUM7QUFDakUsSUFBTSxrQkFBa0IsR0FBRyxPQUFPLENBQUMsOEJBQThCLENBQUMsQ0FBQztBQUNuRSxJQUFNLGlCQUFpQixHQUFHLE9BQU8sQ0FBQyw2QkFBNkIsQ0FBQyxDQUFDO0FBQ2pFLElBQU0saUJBQWlCLEdBQUcsT0FBTyxDQUFDLHFCQUFxQixDQUFDLENBQUM7QUFDekQsSUFBTSxhQUFhLEdBQUcsT0FBTyxDQUFDLGdCQUFnQixDQUFDLENBQUM7QUFDaEQsSUFBTSxnQkFBZ0IsR0FBRyxPQUFPLENBQUMsMkJBQTJCLENBQUMsQ0FBQztBQUU5RCxJQUFNLGtCQUFrQixHQUFHLE9BQU8sQ0FBQyw4QkFBOEIsQ0FBQyxDQUFDO0FBQzNELElBQUEsa0VBQWEsQ0FBMEM7QUFFL0QsSUFBTSxPQUFPLEdBQUcsT0FBTyxDQUFDLEdBQUcsRUFBRSxDQUFDO0FBQzlCLE9BQU8sQ0FBQyxHQUFHLENBQ1QsVUFBVSxFQUNWLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxFQUFFLEtBQUssQ0FBQyxFQUM1QixJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sRUFBRSxRQUFRLENB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S0FBSyxFQUFFLFNBQVMsRUFBRSxJQUFJLEVBQUU7aUJBQzdDO2FBQ0Y7U0FDRixDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQsTUFBTSxDQUFDLE1BQU0sQ0FBQztBQUNoQixDQUFDLENBQUMiLCJmaWxlIjoicGFja2FnZXMvYXBwL3dlYnBhY2stY29uZmlnLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3Qgd2VicGFjayA9IHJlcXVpcmUoJ3dlYnBhY2snKTtcbmNvbnN0IHBhdGggPSByZXF1aXJlKCdwYXRoJyk7XG5jb25zdCBmcyA9IHJlcXVpcmUoJ2ZzJyk7XG5jb25zdCBBc3NldHNQbHVnaW4gPSByZXF1aXJlKCdhc3NldHMtd2VicGFjay1wbHVnaW4nKTtcbmNvbnN0IFByb2dyZXNzQmFyUGx1Z2luID0gcmVxdWlyZSgncHJvZ3Jlc3MtYmFyLXdlYnBhY2stcGx1Z2luJyk7XG5jb25zdCBub2RlRXh0ZXJuYWxzID0gcmVxdWlyZSgnd2VicGFjay1ub2RlLWV4dGVybmFscycpO1xuY29uc3QgU3RhcnRTZXJ2ZXJQbHVnaW4gPSByZXF1aXJlKCdzdGFydC1zZXJ2ZXItd2VicGFjay1wbHVnaW4nKTtcbmNvbnN0IFJlbG9hZFNlcnZlclBsdWdpbiA9IHJlcXVpcmUoJ3JlbG9hZC1zZXJ2ZXItd2VicGFjay1wbHVnaW4nKTtcbmNvbnN0IEV4dHJhY3RUZXh0UGx1Z2luID0gcmVxdWlyZSgnZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luJyk7XG5jb25zdCBIdG1sV2VicGFja1BsdWdpbiA9IHJlcXVpcmUoJ2h0bWwtd2VicGFjay1wbHVnaW4nKTtcbmNvbnN0IE9mZmxpbmVQbHVnaW4gPSByZXF1aXJlKCdvZmZsaW5lLXBsdWdpbicpO1xuY29uc3QgVmlzdWFsaXplclBsdWdpbiA9IHJlcXVpcmUoJ3dlYnBhY2stdmlzdWFsaXplci1wbHVnaW4nKTtcbi8vIGNvbnN0IFByZXBhY2tXZWJwYWNrUGx1Z2luID0gcmVxdWlyZSgncHJlcGFjay13ZWJwYWNrLXBsdWdpbicpLmRlZmF1bHQ7XG5jb25zdCBHZW5lcmF0ZUpzb25QbHVnaW4gPSByZXF1aXJlKCdnZW5lcmF0ZS1qc29uLXdlYnBhY2stcGx1Z2luJyk7XG5jb25zdCB7IENoZWNrZXJQbHVnaW4gfSA9IHJlcXVpcmUoJ2F3ZXNvbWUtdHlwZXNjcmlwdC1sb2FkZXInKTtcblxuY29uc3QgYXBwUm9vdCA9IHByb2Nlc3MuY3dkKCk7XG5jb25zb2xlLmxvZyhcbiAgJ2FwcCByb290JyxcbiAgcGF0aC5yZXNvbHZlKGFwcFJvb3QsICdhcHAnKSxcbiAgcGF0aC5yZXNvbHZlKGFwcFJvb3QsICdzZXJ2ZXInKVxuKTtcblxuY29uc3QgdG9wRm9sZGVyID0gcGF0aC5yZXNvbHZlKF9fZGlybmFtZSwgJy4uJyk7XG5jb25zdCBpc0xpbmtlZCA9IHBhdGguYmFzZW5hbWUodG9wRm9sZGVyKSA9PT0gJ3BhY2thZ2VzJztcbmNvbnN0IG5vZGVNb2R1bGVzID0gaXNMaW5rZWRcbiAgPyBwYXRoLnJlc29sdmUoX19kaXJuYW1lLCAnbm9kZV9tb2R1bGVzJylcbiAgOiBwYXRoLnJlc29sdmUoX19kaXJuYW1lLCAnLi4nKTtcbnByb2Nlc3Mubm9EZXByZWNhdGlvbiA9IHRydWU7XG5jb25zdCBhbGxQYWNrYWdlcyA9ICFpc0xpbmtlZCA/IFtdIDogZnMucmVhZGRpclN5bmModG9wRm9sZGVyKTtcblxubW9kdWxlLmV4cG9ydHMgPSAoeyBtb2RlLCB0YXJnZXQsIGRldlVybCwgZGV2UG9ydCwgc3NyLCBzZXJ2ZXJsZXNzIH0pID0+IHtcbiAgY29uc3QgaXNEZXYgPSBtb2RlICE9PSAncHJvZHVjdGlvbic7XG4gIGNvbnN0IGlzUHJvZCA9IG1vZGUgPT09ICdwcm9kdWN0aW9uJztcbiAgY29uc3QgaXNXZWIgPSB0YXJnZXQgIT09ICdub2RlJztcbiAgY29uc3QgaXNFbGVjdHJvbiA9IHRhcmdldCA9PT0gJ2VsZWN0cm9uJztcbiAgY29uc3QgaXNOb2RlID0gdGFyZ2V0ID09PSAnbm9kZSc7XG4gIGNvbnN0IGlzU2VydmVybGVzcyA9IHNlcnZlcmxlc3MgPT09IHRydWUgfHwgaXNFbGVjdHJvbjtcbiAgY29uc3QgaXNTU1IgPSBzc3IgIT09IGZhbHNlICYmICFzZXJ2ZXJsZXNzO1xuICBjb25zdCBmb2xkZXIgPSBpc0RldiA/ICcuZGV2JyA6ICcuZGlzdCc7XG5cbiAgY29uc3QgY29uZmlnID0ge1xuICAgIHJlc29sdmU6IHtcbiAgICAgIGV4dGVuc2lvbnM6IFsnLmpzJywgJy5qc29uJywgJy50cycsICcudHN4J10sXG4gICAgICBtb2R1bGVzOiBhbGxQYWNrYWdlc1xuICAgICAgICAubWFwKHggPT4gcGF0aC5yZXNvbHZlKHRvcEZvbGRlciwgeCwgJ25vZGVfbW9kdWxlcycpKVxuICAgICAgICAuY29uY2F0KFtcbiAgICAgICAgICBwYXRoLnJlc29sdmUoYXBwUm9vdCwgJ25vZGVfbW9kdWxlcycpLFxuICAgICAgICAgIHBhdGgucmVzb2x2ZShhcHBSb290LCAnYXBwJyksXG4gICAgICAgIF0pLFxuICAgICAgYWxpYXM6IE9iamVjdC5hc3NpZ24oXG4gICAgICAgIHtcbiAgICAgICAgICAnaGlzdG9yeS9jcmVhdGVGbGV4SGlzdG9yeSc6IGlzU2VydmVybGVzc1xuICAgICAgICAgICAgPyAnaGlzdG9yeS9jcmVhdGVIYXNoSGlzdG9yeSdcbiAgICAgICAgICAgIDogJ2hpc3RvcnkvY3JlYXRlQnJvd3Nlckhpc3RvcnknLFxuICAgICAgICAgIHJlYWN0OiBwYXRoLnJlc29sdmUoYXBwUm9vdCwgJ25vZGVfbW9kdWxlcycsICdyZWFjdCcpLFxuICAgICAgICAgIC8vICdjb3JlLWpzJzogcGF0aC5yZXNvbHZlKGFwcFJvb3QsICdub2RlX21vZHVsZXMnLCAnY29yZS1qcycpLFxuICAgICAgICAgICdyZWFjdC1kb20nOiBwYXRoLnJlc29sdmUoYXBwUm9vdCwgJ25vZGVfbW9kdWxlcycsICdyZWFjdC1kb20nKSxcbiAgICAgICAgICAncmVhY3Qtcm91dGVyJzogcGF0aC5yZXNvbHZlKGFwcFJvb3QsICdub2RlX21vZHVsZXMnLCAncmVhY3Qtcm91dGVyJyksXG4gICAgICAgICAgbW9tZW50OiBwYXRoLnJlc29sdmUoYXBwUm9vdCwgJ25vZGVfbW9kdWxlcycsICdtb21lbnQnKSxcbiAgICAgICAgICBsb2Rhc2g6IHBhdGgucmVzb2x2ZShhcHBSb290LCAnbm9kZV9tb2R1bGVzJywgJ2xvZGFzaCcpLFxuICAgICAgICAgICdAcm9vdCc6IGFwcFJvb3QsXG4gICAgICAgICAgJ0BhcHAnOlxuICAgICAgICAgICAgaXNOb2RlICYmICFpc1NTUlxuICAgICAgICAgICAgICA/IHBhdGgucmVzb2x2ZShfX2Rpcm5hbWUsICdub29wJylcbiAgICAgICAgICAgICAgOiBwYXRoLnJlc29sdmUoYXBwUm9vdCwgJ2FwcCcpLFxuICAgICAgICB9LFxuICAgICAgICBhbGxQYWNrYWdlcy5yZWR1Y2UoKG9iaiwgaXRlbSkgPT4ge1xuICAgICAgICAgIC8vIGdldCBhbGwgZm9sZGVycyBpbiBzcmMgYW5kIGNyZWF0ZSAnb2x5bXAteHh4JyBhbGlhc1xuICAgICAgICAgIG9ialtgb2x5bXAtJHtpdGVtfWBdID0gcGF0aC5yZXNvbHZlKHRvcEZvbGRlciwgaXRlbSk7XG4gICAgICAgICAgcmV0dXJuIG9iajtcbiAgICAgICAgfSwge30pXG4gICAgICApLFxuICAgIH0sXG4gICAgcmVzb2x2ZUxvYWRlcjoge1xuICAgICAgbW9kdWxlczogW1xuICAgICAgICBwYXRoLnJlc29sdmUobm9kZU1vZHVsZXMpLFxuICAgICAgICBwYXRoLnJlc29sdmUoYXBwUm9vdCwgJ25vZGVfbW9kdWxlcycpLFxuICAgICAgXSxcbiAgICB9LFxuICAgIHBsdWdpbnM6IFtcbiAgICAgIC8vIG5ldyB3ZWJwYWNrLm9wdGltaXplLk1vZHVsZUNvbmNhdGVuYXRpb25QbHVnaW4oKSxcbiAgICAgIG5ldyB3ZWJwYWNrLkRlZmluZVBsdWdpbihcbiAgICAgICAgT2JqZWN0LmFzc2lnbihcbiAgICAgICAgICB7XG4gICAgICAgICAgICAncHJvY2Vzcy5lbnYuU1NSJzogSlNPTi5zdHJpbmdpZnkoaXNTU1IpLFxuICAgICAgICAgICAgJ3Byb2Nlc3MuZW52Lk5PREVfRU5WJzogSlNPTi5zdHJpbmdpZnkobW9kZSksXG4gICAgICAgICAgICAncHJvY2Vzcy5lbnYuREVWX1BPUlQnOiBKU09OLnN0cmluZ2lmeShkZXZQb3J0KSxcbiAgICAgICAgICAgICdwcm9jZXNzLmVudi5ERVZfVVJMJzogZGV2VXJsXG4gICAgICAgICAgICAgID8gSlNPTi5zdHJpbmdpZnkoZGV2VXJsLm9yaWdpbilcbiAgICAgICAgICAgICAgOiB1bmRlZmluZWQsXG4gICAgICAgICAgICAncHJvY2Vzcy5lbnYuSVNfV0VCJzogaXNXZWIgPyBKU09OLnN0cmluZ2lmeSh0cnVlKSA6IHVuZGVmaW5lZCxcbiAgICAgICAgICAgICdwcm9jZXNzLmVudi5JU19OT0RFJzogaXNOb2RlID8gSlNPTi5zdHJpbmdpZnkodHJ1ZSkgOiB1bmRlZmluZWQsXG4gICAgICAgICAgICAncHJvY2Vzcy5lbnYuSVNfRUxFQ1RST04nOiBpc0VsZWN0cm9uXG4gICAgICAgICAgICAgID8gSlNPTi5zdHJpbmdpZnkodHJ1ZSlcbiAgICAgICAgICAgICAgOiB1bmRlZmluZWQsXG4gICAgICAgICAgfSxcbiAgICAgICAgICAhaXNOb2RlXG4gICAgICAgICAgICA/IHtcbiAgICAgICAgICAgICAgICAncHJvY2Vzcy5lbnYuQU1QJzogcHJvY2Vzcy5lbnYuQU1QXG4gICAgICAgICAgICAgICAgICA/IEpTT04uc3RyaW5naWZ5KHByb2Nlc3MuZW52LkFNUClcbiAgICAgICAgICAgICAgICAgIDogdW5kZWZpbmVkLFxuICAgICAgICAgICAgICAgICdwcm9jZXNzLmVudi5HTV9LRVknOiBKU09OLnN0cmluZ2lmeShwcm9jZXNzLmVudi5HTV9LRVkpLFxuICAgICAgICAgICAgICAgICdwcm9jZXNzLmVudi5HUkFQSFFMX1VSTCc6IHByb2Nlc3MuZW52LkdSQVBIUUxfVVJMXG4gICAgICAgICAgICAgICAgICA/IEpTT04uc3RyaW5naWZ5KHByb2Nlc3MuZW52LkdSQVBIUUxfVVJMKVxuICAgICAgICAgICAgICAgICAgOiB1bmRlZmluZWQsXG4gICAgICAgICAgICAgICAgLyoncHJvY2Vzcy5lbnYuR1JBUEhRTF9TVUInOiBwcm9jZXNzLmVudi5HUkFQSFFMX1NVQlxuICAgICAgICAgICAgICAgID8gSlNPTi5zdHJpbmdpZnkocHJvY2Vzcy5lbnYuR1JBUEhRTF9TVUIpXG4gICAgICAgICAgICAgICAgOiB1bmRlZmluZWQsKi9cbiAgICAgICAgICAgICAgICAncHJvY2Vzcy5lbnYuVVJMJzogcHJvY2Vzcy5lbnYuVVJMXG4gICAgICAgICAgICAgICAgICA/IEpTT04uc3RyaW5naWZ5KHByb2Nlc3MuZW52LlVSTClcbiAgICAgICAgICAgICAgICAgIDogdW5kZWZpbmVkLFxuICAgICAgICAgICAgICAgICdwcm9jZXNzLmVudi5GSUxFU1RBQ0tfS0VZJzogcHJvY2Vzcy5lbnYuRklMRVNUQUNLX0tFWVxuICAgICAgICAgICAgICAgICAgPyBKU09OLnN0cmluZ2lmeShwcm9jZXNzLmVudi5GSUxFU1RBQ0tfS0VZKVxuICAgICAgICAgICAgICAgICAgOiB1bmRlZmluZWQsXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIDoge31cbiAgICAgICAgKVxuICAgICAgKSxcbiAgICAgIC8vIG5ldyBQcmVwYWNrV2VicGFja1BsdWdpbih7IH0pLFxuICAgICAgbmV3IHdlYnBhY2suQ29udGV4dFJlcGxhY2VtZW50UGx1Z2luKC9tb21lbnRbL1xcXFxdbG9jYWxlJC8sIC9kZS8pLFxuICAgICAgbmV3IHdlYnBhY2suTmFtZWRNb2R1bGVzUGx1Z2luKCksXG4gICAgICBuZXcgUHJvZ3Jlc3NCYXJQbHVnaW4oKSxcbiAgICAgIG5ldyB3ZWJwYWNrLk5vRW1pdE9uRXJyb3JzUGx1Z2luKCksXG4gICAgICAvLyBuZXcgQ2hlY2tlclBsdWdpbigpLFxuICAgIF0sXG4gICAgbW9kdWxlOiB7XG4gICAgICBydWxlczogW1xuICAgICAgICB7XG4gICAgICAgICAgdGVzdDogL1xcLmh0bWwkLyxcbiAgICAgICAgICBsb2FkZXI6ICdmaWxlLWxvYWRlcj9uYW1lPVtuYW1lXS5bZXh0XScsXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICB0ZXN0OiAvXFwuKGpwZ3xqcGVnfHBuZ3xnaWZ8ZW90fHR0Znx3b2ZmfHdvZmYyKSQvLFxuICAgICAgICAgIGxvYWRlcjogJ3VybC1sb2FkZXInLFxuICAgICAgICAgIG9wdGlvbnM6IHtcbiAgICAgICAgICAgIGxpbWl0OiAyMDAwMCxcbiAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgdGVzdDogL1xcLih0eHR8bWQpJC8sXG4gICAgICAgICAgbG9hZGVyOiAncmF3LWxvYWRlcicsXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICB0ZXN0OiAvXFwuanNvbiQvLFxuICAgICAgICAgIGxvYWRlcjogJ2pzb24tbG9hZGVyJyxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIHRlc3Q6IC9cXC4oZ3JhcGhxbHxncWwpJC8sXG4gICAgICAgICAgZXhjbHVkZTogL25vZGVfbW9kdWxlcy8sXG4gICAgICAgICAgbG9hZGVyOiAnZ3JhcGhxbC10YWcvbG9hZGVyJyxcbiAgICAgICAgfSxcbiAgICAgIF0sXG4gICAgfSxcbiAgICBvdXRwdXQ6IHtcbiAgICAgIHBhdGg6IHBhdGgucmVzb2x2ZShhcHBSb290LCBmb2xkZXIsIHRhcmdldCksXG4gICAgfSxcbiAgICBlbnRyeToge1xuICAgICAgbWFpbjogW10sXG4gICAgfSxcbiAgfTtcblxuICAvLyBpbmxpbmUtc291cmNlLW1hcCBmb3Igd2ViLWRldlxuICBjb25maWcuZGV2dG9vbCA9ICdzb3VyY2UtbWFwJztcblxuICAvLyBpbmxpbmUtc291cmNlLW1hcCBmb3Igd2ViLWRldlxuICBpZiAoaXNQcm9kICYmIGlzV2ViICYmICFpc0VsZWN0cm9uKSB7XG4gICAgY29uZmlnLm91dHB1dC5maWxlbmFtZSA9ICdbbmFtZV0uW2NvbnRlbnRoYXNoXS5qcyc7XG4gIH0gZWxzZSB7XG4gICAgY29uZmlnLm91dHB1dC5maWxlbmFtZSA9ICdbbmFtZV0uanMnO1xuICB9XG5cbiAgLy8gdGFyZ2V0ICYmIG5vZGUgc2V0dGluZ3NcbiAgaWYgKGlzTm9kZSkge1xuICAgIGNvbmZpZy50YXJnZXQgPSAnbm9kZSc7XG4gICAgY29uZmlnLndhdGNoID0gaXNEZXY7XG4gICAgY29uZmlnLm5vZGUgPSB7XG4gICAgICBfX2Rpcm5hbWU6IGZhbHNlLFxuICAgICAgX19maWxlbmFtZTogZmFsc2UsXG4gICAgfTtcbiAgICBjb25maWcub3V0cHV0LmxpYnJhcnlUYXJnZXQgPSAnY29tbW9uanMyJztcbiAgfSBlbHNlIGlmIChpc0VsZWN0cm9uKSB7XG4gICAgY29uZmlnLnRhcmdldCA9ICdlbGVjdHJvbi1tYWluJztcbiAgICBjb25maWcubm9kZSA9IHtcbiAgICAgIF9fZGlybmFtZTogZmFsc2UsXG4gICAgICBfX2ZpbGVuYW1lOiBmYWxzZSxcbiAgICB9O1xuICAgIGNvbmZpZy5vdXRwdXQubGlicmFyeVRhcmdldCA9ICdjb21tb25qczInO1xuICB9IGVsc2Uge1xuICAgIGNvbmZpZy50YXJnZXQgPSAnd2ViJztcbiAgICBjb25maWcubm9kZSA9IHtcbiAgICAgIF9fZGlybmFtZTogdHJ1ZSxcbiAgICAgIF9fZmlsZW5hbWU6IHRydWUsXG4gICAgfTtcbiAgICBjb25maWcub3V0cHV0LmxpYnJhcnlUYXJnZXQgPSAndmFyJztcbiAgfVxuXG4gIGlmIChpc0RldiAmJiBpc1dlYikge1xuICAgIGNvbmZpZy5vdXRwdXQucHVibGljUGF0aCA9IGRldlVybC5ocmVmO1xuICB9IGVsc2Uge1xuICAgIGNvbmZpZy5vdXRwdXQucHVibGljUGF0aCA9ICcvJztcbiAgfVxuXG4gIC8vIGJhYmVsLXByZXNldC1lbnYgb24gbm9kZVxuICBpZiAoaXNOb2RlKSB7XG4gIH0gZWxzZSBpZiAoaXNEZXYpIHtcbiAgfSBlbHNlIHtcbiAgICAvKmJhYmVsLm9wdGlvbnMucGx1Z2lucy5wdXNoKFtcbiAgICAgICd0cmFuc2Zvcm0taW1wb3J0cycsXG4gICAgICB7XG4gICAgICAgIGFudGQ6IHtcbiAgICAgICAgICB0cmFuc2Zvcm06ICdhbnRkL2xpYi8ke21lbWJlcn0nLFxuICAgICAgICAgIGtlYmFiQ2FzZTogdHJ1ZSxcbiAgICAgICAgICBwcmV2ZW50RnVsbEltcG9ydDogdHJ1ZSxcbiAgICAgICAgfSxcbiAgICAgICAgbG9kYXNoOiB7XG4gICAgICAgICAgdHJhbnNmb3JtOiAnbG9kYXNoLyR7bWVtYmVyfScsXG4gICAgICAgICAgcHJldmVudEZ1bGxJbXBvcnQ6IHRydWUsXG4gICAgICAgIH0sXG4gICAgICAgICdkYXRlLWZucyc6IHtcbiAgICAgICAgICB0cmFuc2Zvcm06ICdkYXRlLWZucy8ke21lbWJlcn0nLFxuICAgICAgICAgIHByZXZlbnRGdWxsSW1wb3J0OiB0cnVlLFxuICAgICAgICAgIHNuYWtlQ2FzZTogdHJ1ZSxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgXSk7Ki9cbiAgfVxuXG4gIC8vIHdlYnBhY2sgcGx1Z2luc1xuICBpZiAoaXNXZWIgJiYgaXNQcm9kKSB7XG4gICAgY29uZmlnLnBsdWdpbnMucHVzaChuZXcgd2VicGFjay5vcHRpbWl6ZS5PY2N1cnJlbmNlT3JkZXJQbHVnaW4oKSk7XG4gICAgLy8gY29uZmlnLnBsdWdpbnMucHVzaChuZXcgd2VicGFjay5vcHRpbWl6ZS5EZWR1cGVQbHVnaW4oKSk7XG4gICAgY29uZmlnLnBsdWdpbnMucHVzaChcbiAgICAgIG5ldyBFeHRyYWN0VGV4dFBsdWdpbih7XG4gICAgICAgIGZpbGVuYW1lOiBpc0VsZWN0cm9uID8gJ1tuYW1lXS5jc3MnIDogJ1tuYW1lXS5bY29udGVudGhhc2hdLmNzcycsXG4gICAgICAgIGFsbENodW5rczogdHJ1ZSxcbiAgICAgIH0pXG4gICAgKTtcbiAgICBpZiAoaXNFbGVjdHJvbikge1xuICAgICAgY29uZmlnLnBsdWdpbnMucHVzaChuZXcgR2VuZXJhdGVKc29uUGx1Z2luKCdwYWNrYWdlLmpzb24nLCB7fSkpO1xuICAgIH1cbiAgICBjb25maWcucGx1Z2lucy5wdXNoKFxuICAgICAgbmV3IHdlYnBhY2suTG9hZGVyT3B0aW9uc1BsdWdpbih7XG4gICAgICAgIG1pbmltaXplOiB0cnVlLFxuICAgICAgICBkZWJ1ZzogZmFsc2UsXG4gICAgICB9KVxuICAgICk7XG4gICAgY29uZmlnLnBsdWdpbnMucHVzaChcbiAgICAgIG5ldyB3ZWJwYWNrLm9wdGltaXplLlVnbGlmeUpzUGx1Z2luKHtcbiAgICAgICAgY29tcHJlc3M6IHtcbiAgICAgICAgICBzY3Jld19pZTg6IHRydWUsXG4gICAgICAgICAgd2FybmluZ3M6IGZhbHNlLFxuICAgICAgICB9LFxuICAgICAgICBtYW5nbGU6IHtcbiAgICAgICAgICBzY3Jld19pZTg6IHRydWUsXG4gICAgICAgIH0sXG4gICAgICAgIG91dHB1dDoge1xuICAgICAgICAgIGNvbW1lbnRzOiBmYWxzZSxcbiAgICAgICAgICBzY3Jld19pZTg6IHRydWUsXG4gICAgICAgIH0sXG4gICAgICAgIHNvdXJjZU1hcDogZmFsc2UsXG4gICAgICB9KVxuICAgICk7XG4gIH1cbiAgaWYgKGlzTm9kZSkge1xuICAgIGlmIChpc0Rldikge1xuICAgICAgY29uZmlnLnBsdWdpbnMucHVzaChuZXcgU3RhcnRTZXJ2ZXJQbHVnaW4oJ21haW4uanMnKSk7XG4gICAgICBjb25maWcucGx1Z2lucy5wdXNoKFxuICAgICAgICBuZXcgUmVsb2FkU2VydmVyUGx1Z2luKHtcbiAgICAgICAgICAvLyBEZWZhdWx0cyB0byBwcm9jZXNzLmN3ZCgpICsgXCIvc2VydmVyLmpzXCJcbiAgICAgICAgICBzY3JpcHQ6IHBhdGgucmVzb2x2ZShfX2Rpcm5hbWUsICdub2RlJywgJ2luZGV4LmpzJyksXG4gICAgICAgIH0pXG4gICAgICApO1xuICAgIH1cbiAgICBjb25maWcucGx1Z2lucy5wdXNoKFxuICAgICAgbmV3IHdlYnBhY2suQmFubmVyUGx1Z2luKHtcbiAgICAgICAgYmFubmVyOiAncmVxdWlyZShcInNvdXJjZS1tYXAtc3VwcG9ydFwiKS5pbnN0YWxsKCk7JyxcbiAgICAgICAgcmF3OiB0cnVlLFxuICAgICAgICBlbnRyeU9ubHk6IHRydWUsXG4gICAgICB9KVxuICAgICk7XG4gICAgY29uZmlnLnBsdWdpbnMucHVzaChcbiAgICAgIG5ldyB3ZWJwYWNrLk5vcm1hbE1vZHVsZVJlcGxhY2VtZW50UGx1Z2luKFxuICAgICAgICAvXFwuKGxlc3N8Y3NzfHNjc3MpJC8sXG4gICAgICAgICdub2RlLW5vb3AnXG4gICAgICApXG4gICAgKTtcbiAgfSBlbHNlIHtcbiAgICBjb25maWcucGx1Z2lucy5wdXNoKFxuICAgICAgbmV3IEFzc2V0c1BsdWdpbih7XG4gICAgICAgIGZpbGVuYW1lOiAnYXNzZXRzLmpzb24nLFxuICAgICAgICBwYXRoOiBwYXRoLnJlc29sdmUocHJvY2Vzcy5jd2QoKSwgZm9sZGVyLCB0YXJnZXQpLFxuICAgICAgfSlcbiAgICApO1xuICAgIGlmIChpc1Byb2QgJiYgIWlzU2VydmVybGVzcykge1xuICAgICAgY29uZmlnLnBsdWdpbnMucHVzaChcbiAgICAgICAgbmV3IEh0bWxXZWJwYWNrUGx1Z2luKHtcbiAgICAgICAgICBmaWxlbmFtZTogJ29mZmxpbmUuaHRtbCcsXG4gICAgICAgICAgdGVtcGxhdGU6IHBhdGgucmVzb2x2ZShfX2Rpcm5hbWUsICd0ZW1wbGF0ZXMnLCAnZGVmYXVsdC5qcycpLFxuICAgICAgICAgIGluamVjdDogZmFsc2UsXG4gICAgICAgICAgLyogbWluaWZ5OiB7XG4gICAgICAgICAgcmVtb3ZlQ29tbWVudHM6IHRydWUsXG4gICAgICAgICAgY29sbGFwc2VXaGl0ZXNwYWNlOiB0cnVlLFxuICAgICAgICAgIHJlbW92ZVJlZHVuZGFudEF0dHJpYnV0ZXM6IHRydWUsXG4gICAgICAgICAgdXNlU2hvcnREb2N0eXBlOiB0cnVlLFxuICAgICAgICAgIHJlbW92ZUVtcHR5QXR0cmlidXRlczogdHJ1ZSxcbiAgICAgICAgICByZW1vdmVTdHlsZUxpbmtUeXBlQXR0cmlidXRlczogdHJ1ZSxcbiAgICAgICAgICBrZWVwQ2xvc2luZ1NsYXNoOiB0cnVlLFxuICAgICAgICAgIG1pbmlmeUpTOiB0cnVlLFxuICAgICAgICAgIG1pbmlmeUNTUzogdHJ1ZSxcbiAgICAgICAgICBtaW5pZnlVUkxzOiB0cnVlLFxuICAgICAgICB9LCovXG4gICAgICAgIH0pXG4gICAgICApO1xuICAgICAgY29uZmlnLnBsdWdpbnMucHVzaChcbiAgICAgICAgbmV3IE9mZmxpbmVQbHVnaW4oe1xuICAgICAgICAgIHJlc3BvbnNlU3RyYXRlZ3k6ICduZXR3b3JrLWZpcnN0JyxcbiAgICAgICAgICBleHRlcm5hbHM6IFtcbiAgICAgICAgICAgICdodHRwczovL2Nkbi5wb2x5ZmlsbC5pby92Mi9wb2x5ZmlsbC5taW4uanM/Y2FsbGJhY2s9UE9MWScsXG4gICAgICAgICAgXSxcbiAgICAgICAgICAvLyBhdXRvVXBkYXRlOiAxMDAwICogNjAgKiA1LFxuICAgICAgICAgIGNhY2hlczogJ2FsbCcsXG4gICAgICAgICAgU2VydmljZVdvcmtlcjoge1xuICAgICAgICAgICAgZXZlbnRzOiB0cnVlLFxuICAgICAgICAgICAgbmF2aWdhdGVGYWxsYmFja1VSTDogJy9vZmZsaW5lLmh0bWwnLFxuICAgICAgICAgIH0sXG4gICAgICAgICAgQXBwQ2FjaGU6IGZhbHNlLFxuICAgICAgICB9KVxuICAgICAgKTtcbiAgICAgIGNvbmZpZy5wbHVnaW5zLnB1c2goXG4gICAgICAgIG5ldyBWaXN1YWxpemVyUGx1Z2luKHtcbiAgICAgICAgICBmaWxlbmFtZTogJy4vdmlzdWFsaXplci5odG1sJyxcbiAgICAgICAgfSlcbiAgICAgICk7XG4gICAgfSBlbHNlIGlmIChpc1NlcnZlcmxlc3MpIHtcbiAgICAgIGNvbmZpZy5wbHVnaW5zLnB1c2goXG4gICAgICAgIG5ldyBIdG1sV2VicGFja1BsdWdpbih7XG4gICAgICAgICAgZmlsZW5hbWU6ICdpbmRleC5odG1sJyxcbiAgICAgICAgICB0ZW1wbGF0ZTogcGF0aC5yZXNvbHZlKFxuICAgICAgICAgICAgX19kaXJuYW1lLFxuICAgICAgICAgICAgJ3RlbXBsYXRlcycsXG4gICAgICAgICAgICBpc0VsZWN0cm9uID8gJ2VsZWN0cm9uLmpzJyA6ICdzZXJ2ZXJsZXNzLmpzJ1xuICAgICAgICAgICksXG4gICAgICAgICAgaW5qZWN0OiBmYWxzZSxcbiAgICAgICAgICAvKiBtaW5pZnk6IHtcbiAgICAgICAgICByZW1vdmVDb21tZW50czogdHJ1ZSxcbiAgICAgICAgICBjb2xsYXBzZVdoaXRlc3BhY2U6IHRydWUsXG4gICAgICAgICAgcmVtb3ZlUmVkdW5kYW50QXR0cmlidXRlczogdHJ1ZSxcbiAgICAgICAgICB1c2VTaG9ydERvY3R5cGU6IHRydWUsXG4gICAgICAgICAgcmVtb3ZlRW1wdHlBdHRyaWJ1dGVzOiB0cnVlLFxuICAgICAgICAgIHJlbW92ZVN0eWxlTGlua1R5cGVBdHRyaWJ1dGVzOiB0cnVlLFxuICAgICAgICAgIGtlZXBDbG9zaW5nU2xhc2g6IHRydWUsXG4gICAgICAgICAgbWluaWZ5SlM6IHRydWUsXG4gICAgICAgICAgbWluaWZ5Q1NTOiB0cnVlLFxuICAgICAgICAgIG1pbmlmeVVSTHM6IHRydWUsXG4gICAgICAgIH0sKi9cbiAgICAgICAgfSlcbiAgICAgICk7XG4gICAgfVxuICB9XG5cbiAgLy8gSG90IG1vZHVsZSByZXBsYWNlbWVudCBvbiBkZXZcbiAgaWYgKGlzRGV2KSB7XG4gICAgY29uZmlnLnBsdWdpbnMucHVzaChuZXcgd2VicGFjay5Ib3RNb2R1bGVSZXBsYWNlbWVudFBsdWdpbigpKTtcbiAgfVxuXG4gIC8vIExpbWl0Q2h1bmtDb3VudCBvbiBhbGwgYnV0IHByb2R1Y3Rpb24td2ViXG4gIGlmIChpc0RldiB8fCBpc05vZGUgfHwgaXNFbGVjdHJvbikge1xuICAgIGNvbmZpZy5wbHVnaW5zLnB1c2goXG4gICAgICBuZXcgd2VicGFjay5vcHRpbWl6ZS5MaW1pdENodW5rQ291bnRQbHVnaW4oeyBtYXhDaHVua3M6IDEgfSlcbiAgICApO1xuICAgIGNvbmZpZy5vdXRwdXQuZmlsZW5hbWUgPSAnW25hbWVdLmpzJztcbiAgfSBlbHNlIHtcbiAgICBjb25maWcub3V0cHV0LmZpbGVuYW1lID0gJ1tuYW1lXS5bY2h1bmtoYXNoXS5qcyc7XG4gICAgY29uZmlnLm91dHB1dC5jaHVua0ZpbGVuYW1lID0gJ1tuYW1lXS5bY2h1bmtoYXNoXS5qcyc7XG4gIH1cblxuICAvLyBleHRlcm5hbHNcbiAgaWYgKGlzTm9kZSkge1xuICAgIGNvbmZpZy5leHRlcm5hbHMgPSBhbGxQYWNrYWdlc1xuICAgICAgLm1hcCh4ID0+IHBhdGgucmVzb2x2ZSh0b3BGb2xkZXIsIHgsICdub2RlX21vZHVsZXMnKSlcbiAgICAgIC5jb25jYXQoW3BhdGgucmVzb2x2ZShhcHBSb290LCAnbm9kZV9tb2R1bGVzJyldKVxuICAgICAgLm1hcChtb2R1bGVzRGlyID0+XG4gICAgICAgIG5vZGVFeHRlcm5hbHMoe1xuICAgICAgICAgIG1vZHVsZXNEaXIsXG4gICAgICAgICAgd2hpdGVsaXN0OiBbXG4gICAgICAgICAgICB2ID0+IHYuaW5kZXhPZignd2VicGFjay9ob3QvcG9sbCcpID09PSAwLFxuICAgICAgICAgICAgJ3NvdXJjZS1tYXAtc3VwcG9ydC9yZWdpc3RlcicsXG4gICAgICAgICAgICB2ID0+IHYuaW5kZXhPZignb2x5bXAtJykgPT09IDAsXG4gICAgICAgICAgICAvLyB2ID0+IHYgPT09ICdhbnRkJyB8fCB2LmluZGV4T2YoJ2FudGQvJykgPT09IDAsXG4gICAgICAgICAgICAvXFwuKGVvdHx3b2ZmfHdvZmYyfHR0ZnxvdGYpJC8sXG4gICAgICAgICAgICAvXFwuKHN2Z3xwbmd8anBnfGpwZWd8Z2lmfGljbykkLyxcbiAgICAgICAgICAgIC9cXC4obXA0fG1wM3xvZ2d8c3dmfHdlYnApJC8sXG4gICAgICAgICAgICAvXFwuKGNzc3xzY3NzfHNhc3N8c3NzfGxlc3MpJC8sXG4gICAgICAgICAgXSxcbiAgICAgICAgfSlcbiAgICAgICk7XG4gIH1cblxuICBpZiAoaXNXZWIgJiYgaXNEZXYpIHtcbiAgICBjb25maWcuZW50cnkubWFpbiA9IFtcbiAgICAgICdyZWFjdC1ob3QtbG9hZGVyL3BhdGNoJyxcbiAgICAgIGB3ZWJwYWNrLWRldi1zZXJ2ZXIvY2xpZW50PyR7Y29uZmlnLm91dHB1dC5wdWJsaWNQYXRofWAsXG4gICAgICAnd2VicGFjay9ob3Qvb25seS1kZXYtc2VydmVyJyxcbiAgICAgIHJlcXVpcmUucmVzb2x2ZShwYXRoLnJlc29sdmUoX19kaXJuYW1lLCB0YXJnZXQpKSxcbiAgICBdO1xuICB9IGVsc2UgaWYgKGlzTm9kZSAmJiBpc0Rldikge1xuICAgIGNvbmZpZy5lbnRyeS5tYWluID0gW1xuICAgICAgJ3dlYnBhY2svaG90L3BvbGw/MTAwMCcsXG4gICAgICByZXF1aXJlLnJlc29sdmUocGF0aC5yZXNvbHZlKF9fZGlybmFtZSwgdGFyZ2V0KSksXG4gICAgXTtcbiAgfSBlbHNlIGlmIChpc0VsZWN0cm9uKSB7XG4gICAgY29uZmlnLmVudHJ5Lm1haW4gPSBbXG4gICAgICByZXF1aXJlLnJlc29sdmUocGF0aC5yZXNvbHZlKF9fZGlybmFtZSwgJ3dlYicsICdpbmRleC5qcycpKSxcbiAgICBdO1xuICAgIGNvbmZpZy5lbnRyeS5hcHAgPSBbXG4gICAgICByZXF1aXJlLnJlc29sdmUocGF0aC5yZXNvbHZlKF9fZGlybmFtZSwgJ2VsZWN0cm9uJywgJ21haW4uanMnKSksXG4gICAgXTtcbiAgfSBlbHNlIHtcbiAgICBjb25maWcuZW50cnkubWFpbiA9IFtcbiAgICAgIHJlcXVpcmUucmVzb2x2ZShwYXRoLnJlc29sdmUoX19kaXJuYW1lLCB0YXJnZXQsICdpbmRleC5qcycpKSxcbiAgICBdO1xuICB9XG5cbiAgaWYgKGlzUHJvZCkge1xuICAgIGNvbmZpZy5tb2R1bGUucnVsZXMucHVzaCh7XG4gICAgICB0ZXN0OiAvXFwudHN4PyQvLFxuICAgICAgaW5jbHVkZTogW3BhdGgucmVzb2x2ZShhcHBSb290LCAnYXBwJyksIHBhdGgucmVzb2x2ZShhcHBSb290LCAnc2VydmVyJyldLFxuICAgICAgdXNlOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBsb2FkZXI6ICdhd2Vzb21lLXR5cGVzY3JpcHQtbG9hZGVyJyxcbiAgICAgICAgICBvcHRpb25zOiB7XG4gICAgICAgICAgICBzaWxlbnQ6IHRydWUsXG4gICAgICAgICAgICB0cmFuc3BpbGVPbmx5OiB0cnVlLFxuICAgICAgICAgICAgY29uZmlnRmlsZU5hbWU6IHBhdGgucmVzb2x2ZShfX2Rpcm5hbWUsICd0c2NvbmZpZy5qc29uJyksXG4gICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgIF0sXG4gICAgfSk7XG4gICAgY29uZmlnLm1vZHVsZS5ydWxlcy5wdXNoKHtcbiAgICAgIHRlc3Q6IC9cXC5jc3MkLyxcbiAgICAgIGxvYWRlcjogRXh0cmFjdFRleHRQbHVnaW4uZXh0cmFjdCh7XG4gICAgICAgIHVzZTogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIGxvYWRlcjogJ2Nzcy1sb2FkZXInLFxuICAgICAgICAgICAgb3B0aW9uczogeyBtb2R1bGVzOiBmYWxzZSB9LFxuICAgICAgICAgIH0sXG4gICAgICAgIF0sXG4gICAgICAgIGZhbGxiYWNrOiAnc3R5bGUtbG9hZGVyJyxcbiAgICAgIH0pLFxuICAgIH0pO1xuICB9IGVsc2Uge1xuICAgIGNvbmZpZy5tb2R1bGUucnVsZXMucHVzaCh7XG4gICAgICB0ZXN0OiAvXFwudHN4PyQvLFxuICAgICAgaW5jbHVkZTogW3BhdGgucmVzb2x2ZShhcHBSb290LCAnYXBwJyksIHBhdGgucmVzb2x2ZShhcHBSb290LCAnc2VydmVyJyldLFxuICAgICAgdXNlOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBsb2FkZXI6ICdyZWFjdC1ob3QtbG9hZGVyL3dlYnBhY2snLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgbG9hZGVyOiAnYXdlc29tZS10eXBlc2NyaXB0LWxvYWRlcicsXG4gICAgICAgICAgb3B0aW9uczoge1xuICAgICAgICAgICAgc2lsZW50OiB0cnVlLFxuICAgICAgICAgICAgdHJhbnNwaWxlT25seTogdHJ1ZSxcbiAgICAgICAgICAgIGNvbmZpZ0ZpbGVOYW1lOiBwYXRoLnJlc29sdmUoX19kaXJuYW1lLCAndHNjb25maWcuanNvbicpLFxuICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICBdLFxuICAgIH0pO1xuICAgIGNvbmZpZy5tb2R1bGUucnVsZXMucHVzaCh7XG4gICAgICB0ZXN0OiAvXFwuY3NzJC8sXG4gICAgICB1c2U6IFtcbiAgICAgICAge1xuICAgICAgICAgIGxvYWRlcjogJ3N0eWxlLWxvYWRlcicsXG4gICAgICAgICAgb3B0aW9uczogeyBpbnNlcnRBdDogJ3RvcCcgfSxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIGxvYWRlcjogJ2Nzcy1sb2FkZXInLFxuICAgICAgICAgIG9wdGlvbnM6IHsgbW9kdWxlczogZmFsc2UsIHNvdXJjZU1hcDogdHJ1ZSB9LFxuICAgICAgICB9LFxuICAgICAgXSxcbiAgICB9KTtcbiAgfVxuXG4gIHJldHVybiBjb25maWc7XG59O1xuIl19
