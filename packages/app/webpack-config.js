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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhY2thZ2VzL2FwcC93ZWJwYWNrLWNvbmZpZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxJQUFNLE9BQU8sR0FBRyxPQUFPLENBQUMsU0FBUyxDQUFDLENBQUM7QUFDbkMsSUFBTSxJQUFJLEdBQUcsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0FBQzdCLElBQU0sRUFBRSxHQUFHLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztBQUN6QixJQUFNLFlBQVksR0FBRyxPQUFPLENBQUMsdUJBQXVCLENBQUMsQ0FBQztBQUN0RCxJQUFNLGlCQUFpQixHQUFHLE9BQU8sQ0FBQyw2QkFBNkIsQ0FBQyxDQUFDO0FBQ2pFLElBQU0sYUFBYSxHQUFHLE9BQU8sQ0FBQyx3QkFBd0IsQ0FBQyxDQUFDO0FBQ3hELElBQU0saUJBQWlCLEdBQUcsT0FBTyxDQUFDLDZCQUE2QixDQUFDLENBQUM7QUFDakUsSUFBTSxrQkFBa0IsR0FBRyxPQUFPLENBQUMsOEJBQThCLENBQUMsQ0FBQztBQUNuRSxJQUFNLGlCQUFpQixHQUFHLE9BQU8sQ0FBQyw2QkFBNkIsQ0FBQyxDQUFDO0FBQ2pFLElBQU0saUJBQWlCLEdBQUcsT0FBTyxDQUFDLHFCQUFxQixDQUFDLENBQUM7QUFDekQsSUFBTSxhQUFhLEdBQUcsT0FBTyxDQUFDLGdCQUFnQixDQUFDLENBQUM7QUFDaEQsSUFBTSxnQkFBZ0IsR0FBRyxPQUFPLENBQUMsMkJBQTJCLENBQUMsQ0FBQztBQUU5RCxJQUFNLGtCQUFrQixHQUFHLE9BQU8sQ0FBQyw4QkFBOEIsQ0FBQyxDQUFDO0FBQzNELElBQUEsa0VBQWEsQ0FBMEM7QUFFL0QsSUFBTSxPQUFPLEdBQUcsT0FBTyxDQUFDLEdBQUcsRUFBRSxDQUFDO0FBRTlCLElBQU0sU0FBUyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxDQUFDO0FBQ2hELElBQU0sUUFBUSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLEtB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YnBhY2stY29uZmlnLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3Qgd2VicGFjayA9IHJlcXVpcmUoJ3dlYnBhY2snKTtcbmNvbnN0IHBhdGggPSByZXF1aXJlKCdwYXRoJyk7XG5jb25zdCBmcyA9IHJlcXVpcmUoJ2ZzJyk7XG5jb25zdCBBc3NldHNQbHVnaW4gPSByZXF1aXJlKCdhc3NldHMtd2VicGFjay1wbHVnaW4nKTtcbmNvbnN0IFByb2dyZXNzQmFyUGx1Z2luID0gcmVxdWlyZSgncHJvZ3Jlc3MtYmFyLXdlYnBhY2stcGx1Z2luJyk7XG5jb25zdCBub2RlRXh0ZXJuYWxzID0gcmVxdWlyZSgnd2VicGFjay1ub2RlLWV4dGVybmFscycpO1xuY29uc3QgU3RhcnRTZXJ2ZXJQbHVnaW4gPSByZXF1aXJlKCdzdGFydC1zZXJ2ZXItd2VicGFjay1wbHVnaW4nKTtcbmNvbnN0IFJlbG9hZFNlcnZlclBsdWdpbiA9IHJlcXVpcmUoJ3JlbG9hZC1zZXJ2ZXItd2VicGFjay1wbHVnaW4nKTtcbmNvbnN0IEV4dHJhY3RUZXh0UGx1Z2luID0gcmVxdWlyZSgnZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luJyk7XG5jb25zdCBIdG1sV2VicGFja1BsdWdpbiA9IHJlcXVpcmUoJ2h0bWwtd2VicGFjay1wbHVnaW4nKTtcbmNvbnN0IE9mZmxpbmVQbHVnaW4gPSByZXF1aXJlKCdvZmZsaW5lLXBsdWdpbicpO1xuY29uc3QgVmlzdWFsaXplclBsdWdpbiA9IHJlcXVpcmUoJ3dlYnBhY2stdmlzdWFsaXplci1wbHVnaW4nKTtcbi8vIGNvbnN0IFByZXBhY2tXZWJwYWNrUGx1Z2luID0gcmVxdWlyZSgncHJlcGFjay13ZWJwYWNrLXBsdWdpbicpLmRlZmF1bHQ7XG5jb25zdCBHZW5lcmF0ZUpzb25QbHVnaW4gPSByZXF1aXJlKCdnZW5lcmF0ZS1qc29uLXdlYnBhY2stcGx1Z2luJyk7XG5jb25zdCB7IENoZWNrZXJQbHVnaW4gfSA9IHJlcXVpcmUoJ2F3ZXNvbWUtdHlwZXNjcmlwdC1sb2FkZXInKTtcblxuY29uc3QgYXBwUm9vdCA9IHByb2Nlc3MuY3dkKCk7XG5cbmNvbnN0IHRvcEZvbGRlciA9IHBhdGgucmVzb2x2ZShfX2Rpcm5hbWUsICcuLicpO1xuY29uc3QgaXNMaW5rZWQgPSBwYXRoLmJhc2VuYW1lKHRvcEZvbGRlcikgPT09ICdwYWNrYWdlcyc7XG5jb25zdCBub2RlTW9kdWxlcyA9IGlzTGlua2VkXG4gID8gcGF0aC5yZXNvbHZlKF9fZGlybmFtZSwgJ25vZGVfbW9kdWxlcycpXG4gIDogcGF0aC5yZXNvbHZlKF9fZGlybmFtZSwgJy4uJyk7XG5wcm9jZXNzLm5vRGVwcmVjYXRpb24gPSB0cnVlO1xuY29uc3QgYWxsUGFja2FnZXMgPSAhaXNMaW5rZWQgPyBbXSA6IGZzLnJlYWRkaXJTeW5jKHRvcEZvbGRlcik7XG5cbm1vZHVsZS5leHBvcnRzID0gKHsgbW9kZSwgdGFyZ2V0LCBkZXZVcmwsIGRldlBvcnQsIHNzciwgc2VydmVybGVzcyB9KSA9PiB7XG4gIGNvbnN0IGlzRGV2ID0gbW9kZSAhPT0gJ3Byb2R1Y3Rpb24nO1xuICBjb25zdCBpc1Byb2QgPSBtb2RlID09PSAncHJvZHVjdGlvbic7XG4gIGNvbnN0IGlzV2ViID0gdGFyZ2V0ICE9PSAnbm9kZSc7XG4gIGNvbnN0IGlzRWxlY3Ryb24gPSB0YXJnZXQgPT09ICdlbGVjdHJvbic7XG4gIGNvbnN0IGlzTm9kZSA9IHRhcmdldCA9PT0gJ25vZGUnO1xuICBjb25zdCBpc1NlcnZlcmxlc3MgPSBzZXJ2ZXJsZXNzID09PSB0cnVlIHx8IGlzRWxlY3Ryb247XG4gIGNvbnN0IGlzU1NSID0gc3NyICE9PSBmYWxzZSAmJiAhc2VydmVybGVzcztcbiAgY29uc3QgZm9sZGVyID0gaXNEZXYgPyAnLmRldicgOiAnLmRpc3QnO1xuXG4gIGNvbnN0IGNvbmZpZyA9IHtcbiAgICByZXNvbHZlOiB7XG4gICAgICBleHRlbnNpb25zOiBbJy5qcycsICcuanNvbicsICcudHMnLCAnLnRzeCddLFxuICAgICAgbW9kdWxlczogYWxsUGFja2FnZXNcbiAgICAgICAgLm1hcCh4ID0+IHBhdGgucmVzb2x2ZSh0b3BGb2xkZXIsIHgsICdub2RlX21vZHVsZXMnKSlcbiAgICAgICAgLmNvbmNhdChbXG4gICAgICAgICAgcGF0aC5yZXNvbHZlKGFwcFJvb3QsICdub2RlX21vZHVsZXMnKSxcbiAgICAgICAgICBwYXRoLnJlc29sdmUoYXBwUm9vdCwgJ2FwcCcpLFxuICAgICAgICBdKSxcbiAgICAgIGFsaWFzOiBPYmplY3QuYXNzaWduKFxuICAgICAgICB7XG4gICAgICAgICAgJ2hpc3RvcnkvY3JlYXRlRmxleEhpc3RvcnknOiBpc1NlcnZlcmxlc3NcbiAgICAgICAgICAgID8gJ2hpc3RvcnkvY3JlYXRlSGFzaEhpc3RvcnknXG4gICAgICAgICAgICA6ICdoaXN0b3J5L2NyZWF0ZUJyb3dzZXJIaXN0b3J5JyxcbiAgICAgICAgICByZWFjdDogcGF0aC5yZXNvbHZlKGFwcFJvb3QsICdub2RlX21vZHVsZXMnLCAncmVhY3QnKSxcbiAgICAgICAgICAvLyAnY29yZS1qcyc6IHBhdGgucmVzb2x2ZShhcHBSb290LCAnbm9kZV9tb2R1bGVzJywgJ2NvcmUtanMnKSxcbiAgICAgICAgICAncmVhY3QtZG9tJzogcGF0aC5yZXNvbHZlKGFwcFJvb3QsICdub2RlX21vZHVsZXMnLCAncmVhY3QtZG9tJyksXG4gICAgICAgICAgJ3JlYWN0LXJvdXRlcic6IHBhdGgucmVzb2x2ZShhcHBSb290LCAnbm9kZV9tb2R1bGVzJywgJ3JlYWN0LXJvdXRlcicpLFxuICAgICAgICAgIG1vbWVudDogcGF0aC5yZXNvbHZlKGFwcFJvb3QsICdub2RlX21vZHVsZXMnLCAnbW9tZW50JyksXG4gICAgICAgICAgbG9kYXNoOiBwYXRoLnJlc29sdmUoYXBwUm9vdCwgJ25vZGVfbW9kdWxlcycsICdsb2Rhc2gnKSxcbiAgICAgICAgICAnQHJvb3QnOiBhcHBSb290LFxuICAgICAgICAgICdAYXBwJzpcbiAgICAgICAgICAgIGlzTm9kZSAmJiAhaXNTU1JcbiAgICAgICAgICAgICAgPyBwYXRoLnJlc29sdmUoX19kaXJuYW1lLCAnbm9vcCcpXG4gICAgICAgICAgICAgIDogcGF0aC5yZXNvbHZlKGFwcFJvb3QsICdhcHAnKSxcbiAgICAgICAgfSxcbiAgICAgICAgYWxsUGFja2FnZXMucmVkdWNlKChvYmosIGl0ZW0pID0+IHtcbiAgICAgICAgICAvLyBnZXQgYWxsIGZvbGRlcnMgaW4gc3JjIGFuZCBjcmVhdGUgJ29seW1wLXh4eCcgYWxpYXNcbiAgICAgICAgICBvYmpbYG9seW1wLSR7aXRlbX1gXSA9IHBhdGgucmVzb2x2ZSh0b3BGb2xkZXIsIGl0ZW0pO1xuICAgICAgICAgIHJldHVybiBvYmo7XG4gICAgICAgIH0sIHt9KVxuICAgICAgKSxcbiAgICB9LFxuICAgIHJlc29sdmVMb2FkZXI6IHtcbiAgICAgIG1vZHVsZXM6IFtcbiAgICAgICAgcGF0aC5yZXNvbHZlKG5vZGVNb2R1bGVzKSxcbiAgICAgICAgcGF0aC5yZXNvbHZlKGFwcFJvb3QsICdub2RlX21vZHVsZXMnKSxcbiAgICAgIF0sXG4gICAgfSxcbiAgICBwbHVnaW5zOiBbXG4gICAgICAvLyBuZXcgd2VicGFjay5vcHRpbWl6ZS5Nb2R1bGVDb25jYXRlbmF0aW9uUGx1Z2luKCksXG4gICAgICBuZXcgd2VicGFjay5EZWZpbmVQbHVnaW4oXG4gICAgICAgIE9iamVjdC5hc3NpZ24oXG4gICAgICAgICAge1xuICAgICAgICAgICAgJ3Byb2Nlc3MuZW52LlNTUic6IEpTT04uc3RyaW5naWZ5KGlzU1NSKSxcbiAgICAgICAgICAgICdwcm9jZXNzLmVudi5OT0RFX0VOVic6IEpTT04uc3RyaW5naWZ5KG1vZGUpLFxuICAgICAgICAgICAgJ3Byb2Nlc3MuZW52LkRFVl9QT1JUJzogSlNPTi5zdHJpbmdpZnkoZGV2UG9ydCksXG4gICAgICAgICAgICAncHJvY2Vzcy5lbnYuREVWX1VSTCc6IGRldlVybFxuICAgICAgICAgICAgICA/IEpTT04uc3RyaW5naWZ5KGRldlVybC5vcmlnaW4pXG4gICAgICAgICAgICAgIDogdW5kZWZpbmVkLFxuICAgICAgICAgICAgJ3Byb2Nlc3MuZW52LklTX1dFQic6IGlzV2ViID8gSlNPTi5zdHJpbmdpZnkodHJ1ZSkgOiB1bmRlZmluZWQsXG4gICAgICAgICAgICAncHJvY2Vzcy5lbnYuSVNfTk9ERSc6IGlzTm9kZSA/IEpTT04uc3RyaW5naWZ5KHRydWUpIDogdW5kZWZpbmVkLFxuICAgICAgICAgICAgJ3Byb2Nlc3MuZW52LklTX0VMRUNUUk9OJzogaXNFbGVjdHJvblxuICAgICAgICAgICAgICA/IEpTT04uc3RyaW5naWZ5KHRydWUpXG4gICAgICAgICAgICAgIDogdW5kZWZpbmVkLFxuICAgICAgICAgIH0sXG4gICAgICAgICAgIWlzTm9kZVxuICAgICAgICAgICAgPyB7XG4gICAgICAgICAgICAgICAgJ3Byb2Nlc3MuZW52LkFNUCc6IHByb2Nlc3MuZW52LkFNUFxuICAgICAgICAgICAgICAgICAgPyBKU09OLnN0cmluZ2lmeShwcm9jZXNzLmVudi5BTVApXG4gICAgICAgICAgICAgICAgICA6IHVuZGVmaW5lZCxcbiAgICAgICAgICAgICAgICAncHJvY2Vzcy5lbnYuR01fS0VZJzogSlNPTi5zdHJpbmdpZnkocHJvY2Vzcy5lbnYuR01fS0VZKSxcbiAgICAgICAgICAgICAgICAncHJvY2Vzcy5lbnYuR1JBUEhRTF9VUkwnOiBwcm9jZXNzLmVudi5HUkFQSFFMX1VSTFxuICAgICAgICAgICAgICAgICAgPyBKU09OLnN0cmluZ2lmeShwcm9jZXNzLmVudi5HUkFQSFFMX1VSTClcbiAgICAgICAgICAgICAgICAgIDogdW5kZWZpbmVkLFxuICAgICAgICAgICAgICAgIC8qJ3Byb2Nlc3MuZW52LkdSQVBIUUxfU1VCJzogcHJvY2Vzcy5lbnYuR1JBUEhRTF9TVUJcbiAgICAgICAgICAgICAgICA/IEpTT04uc3RyaW5naWZ5KHByb2Nlc3MuZW52LkdSQVBIUUxfU1VCKVxuICAgICAgICAgICAgICAgIDogdW5kZWZpbmVkLCovXG4gICAgICAgICAgICAgICAgJ3Byb2Nlc3MuZW52LlVSTCc6IHByb2Nlc3MuZW52LlVSTFxuICAgICAgICAgICAgICAgICAgPyBKU09OLnN0cmluZ2lmeShwcm9jZXNzLmVudi5VUkwpXG4gICAgICAgICAgICAgICAgICA6IHVuZGVmaW5lZCxcbiAgICAgICAgICAgICAgICAncHJvY2Vzcy5lbnYuRklMRVNUQUNLX0tFWSc6IHByb2Nlc3MuZW52LkZJTEVTVEFDS19LRVlcbiAgICAgICAgICAgICAgICAgID8gSlNPTi5zdHJpbmdpZnkocHJvY2Vzcy5lbnYuRklMRVNUQUNLX0tFWSlcbiAgICAgICAgICAgICAgICAgIDogdW5kZWZpbmVkLFxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICA6IHt9XG4gICAgICAgIClcbiAgICAgICksXG4gICAgICAvLyBuZXcgUHJlcGFja1dlYnBhY2tQbHVnaW4oeyB9KSxcbiAgICAgIG5ldyB3ZWJwYWNrLkNvbnRleHRSZXBsYWNlbWVudFBsdWdpbigvbW9tZW50Wy9cXFxcXWxvY2FsZSQvLCAvZGUvKSxcbiAgICAgIG5ldyB3ZWJwYWNrLk5hbWVkTW9kdWxlc1BsdWdpbigpLFxuICAgICAgbmV3IFByb2dyZXNzQmFyUGx1Z2luKCksXG4gICAgICBuZXcgd2VicGFjay5Ob0VtaXRPbkVycm9yc1BsdWdpbigpLFxuICAgICAgLy8gbmV3IENoZWNrZXJQbHVnaW4oKSxcbiAgICBdLFxuICAgIG1vZHVsZToge1xuICAgICAgcnVsZXM6IFtcbiAgICAgICAge1xuICAgICAgICAgIHRlc3Q6IC9cXC5odG1sJC8sXG4gICAgICAgICAgbG9hZGVyOiAnZmlsZS1sb2FkZXI/bmFtZT1bbmFtZV0uW2V4dF0nLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgdGVzdDogL1xcLihqcGd8anBlZ3xwbmd8Z2lmfGVvdHx0dGZ8d29mZnx3b2ZmMikkLyxcbiAgICAgICAgICBsb2FkZXI6ICd1cmwtbG9hZGVyJyxcbiAgICAgICAgICBvcHRpb25zOiB7XG4gICAgICAgICAgICBsaW1pdDogMjAwMDAsXG4gICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIHRlc3Q6IC9cXC4odHh0fG1kKSQvLFxuICAgICAgICAgIGxvYWRlcjogJ3Jhdy1sb2FkZXInLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgdGVzdDogL1xcLmpzb24kLyxcbiAgICAgICAgICBsb2FkZXI6ICdqc29uLWxvYWRlcicsXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICB0ZXN0OiAvXFwuKGdyYXBocWx8Z3FsKSQvLFxuICAgICAgICAgIGV4Y2x1ZGU6IC9ub2RlX21vZHVsZXMvLFxuICAgICAgICAgIGxvYWRlcjogJ2dyYXBocWwtdGFnL2xvYWRlcicsXG4gICAgICAgIH0sXG4gICAgICBdLFxuICAgIH0sXG4gICAgb3V0cHV0OiB7XG4gICAgICBwYXRoOiBwYXRoLnJlc29sdmUoYXBwUm9vdCwgZm9sZGVyLCB0YXJnZXQpLFxuICAgIH0sXG4gICAgZW50cnk6IHtcbiAgICAgIG1haW46IFtdLFxuICAgIH0sXG4gIH07XG5cbiAgLy8gaW5saW5lLXNvdXJjZS1tYXAgZm9yIHdlYi1kZXZcbiAgY29uZmlnLmRldnRvb2wgPSAnc291cmNlLW1hcCc7XG5cbiAgLy8gaW5saW5lLXNvdXJjZS1tYXAgZm9yIHdlYi1kZXZcbiAgaWYgKGlzUHJvZCAmJiBpc1dlYiAmJiAhaXNFbGVjdHJvbikge1xuICAgIGNvbmZpZy5vdXRwdXQuZmlsZW5hbWUgPSAnW25hbWVdLltjb250ZW50aGFzaF0uanMnO1xuICB9IGVsc2Uge1xuICAgIGNvbmZpZy5vdXRwdXQuZmlsZW5hbWUgPSAnW25hbWVdLmpzJztcbiAgfVxuXG4gIC8vIHRhcmdldCAmJiBub2RlIHNldHRpbmdzXG4gIGlmIChpc05vZGUpIHtcbiAgICBjb25maWcudGFyZ2V0ID0gJ25vZGUnO1xuICAgIGNvbmZpZy53YXRjaCA9IGlzRGV2O1xuICAgIGNvbmZpZy5ub2RlID0ge1xuICAgICAgX19kaXJuYW1lOiBmYWxzZSxcbiAgICAgIF9fZmlsZW5hbWU6IGZhbHNlLFxuICAgIH07XG4gICAgY29uZmlnLm91dHB1dC5saWJyYXJ5VGFyZ2V0ID0gJ2NvbW1vbmpzMic7XG4gIH0gZWxzZSBpZiAoaXNFbGVjdHJvbikge1xuICAgIGNvbmZpZy50YXJnZXQgPSAnZWxlY3Ryb24tbWFpbic7XG4gICAgY29uZmlnLm5vZGUgPSB7XG4gICAgICBfX2Rpcm5hbWU6IGZhbHNlLFxuICAgICAgX19maWxlbmFtZTogZmFsc2UsXG4gICAgfTtcbiAgICBjb25maWcub3V0cHV0LmxpYnJhcnlUYXJnZXQgPSAnY29tbW9uanMyJztcbiAgfSBlbHNlIHtcbiAgICBjb25maWcudGFyZ2V0ID0gJ3dlYic7XG4gICAgY29uZmlnLm5vZGUgPSB7XG4gICAgICBfX2Rpcm5hbWU6IHRydWUsXG4gICAgICBfX2ZpbGVuYW1lOiB0cnVlLFxuICAgIH07XG4gICAgY29uZmlnLm91dHB1dC5saWJyYXJ5VGFyZ2V0ID0gJ3Zhcic7XG4gIH1cblxuICBpZiAoaXNEZXYgJiYgaXNXZWIpIHtcbiAgICBjb25maWcub3V0cHV0LnB1YmxpY1BhdGggPSBkZXZVcmwuaHJlZjtcbiAgfSBlbHNlIHtcbiAgICBjb25maWcub3V0cHV0LnB1YmxpY1BhdGggPSAnLyc7XG4gIH1cblxuICAvLyBiYWJlbC1wcmVzZXQtZW52IG9uIG5vZGVcbiAgaWYgKGlzTm9kZSkge1xuICB9IGVsc2UgaWYgKGlzRGV2KSB7XG4gIH0gZWxzZSB7XG4gICAgLypiYWJlbC5vcHRpb25zLnBsdWdpbnMucHVzaChbXG4gICAgICAndHJhbnNmb3JtLWltcG9ydHMnLFxuICAgICAge1xuICAgICAgICBhbnRkOiB7XG4gICAgICAgICAgdHJhbnNmb3JtOiAnYW50ZC9saWIvJHttZW1iZXJ9JyxcbiAgICAgICAgICBrZWJhYkNhc2U6IHRydWUsXG4gICAgICAgICAgcHJldmVudEZ1bGxJbXBvcnQ6IHRydWUsXG4gICAgICAgIH0sXG4gICAgICAgIGxvZGFzaDoge1xuICAgICAgICAgIHRyYW5zZm9ybTogJ2xvZGFzaC8ke21lbWJlcn0nLFxuICAgICAgICAgIHByZXZlbnRGdWxsSW1wb3J0OiB0cnVlLFxuICAgICAgICB9LFxuICAgICAgICAnZGF0ZS1mbnMnOiB7XG4gICAgICAgICAgdHJhbnNmb3JtOiAnZGF0ZS1mbnMvJHttZW1iZXJ9JyxcbiAgICAgICAgICBwcmV2ZW50RnVsbEltcG9ydDogdHJ1ZSxcbiAgICAgICAgICBzbmFrZUNhc2U6IHRydWUsXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgIF0pOyovXG4gIH1cblxuICAvLyB3ZWJwYWNrIHBsdWdpbnNcbiAgaWYgKGlzV2ViICYmIGlzUHJvZCkge1xuICAgIGNvbmZpZy5wbHVnaW5zLnB1c2gobmV3IHdlYnBhY2sub3B0aW1pemUuT2NjdXJyZW5jZU9yZGVyUGx1Z2luKCkpO1xuICAgIC8vIGNvbmZpZy5wbHVnaW5zLnB1c2gobmV3IHdlYnBhY2sub3B0aW1pemUuRGVkdXBlUGx1Z2luKCkpO1xuICAgIGNvbmZpZy5wbHVnaW5zLnB1c2goXG4gICAgICBuZXcgRXh0cmFjdFRleHRQbHVnaW4oe1xuICAgICAgICBmaWxlbmFtZTogaXNFbGVjdHJvbiA/ICdbbmFtZV0uY3NzJyA6ICdbbmFtZV0uW2NvbnRlbnRoYXNoXS5jc3MnLFxuICAgICAgICBhbGxDaHVua3M6IHRydWUsXG4gICAgICB9KVxuICAgICk7XG4gICAgaWYgKGlzRWxlY3Ryb24pIHtcbiAgICAgIGNvbmZpZy5wbHVnaW5zLnB1c2gobmV3IEdlbmVyYXRlSnNvblBsdWdpbigncGFja2FnZS5qc29uJywge30pKTtcbiAgICB9XG4gICAgY29uZmlnLnBsdWdpbnMucHVzaChcbiAgICAgIG5ldyB3ZWJwYWNrLkxvYWRlck9wdGlvbnNQbHVnaW4oe1xuICAgICAgICBtaW5pbWl6ZTogdHJ1ZSxcbiAgICAgICAgZGVidWc6IGZhbHNlLFxuICAgICAgfSlcbiAgICApO1xuICAgIGNvbmZpZy5wbHVnaW5zLnB1c2goXG4gICAgICBuZXcgd2VicGFjay5vcHRpbWl6ZS5VZ2xpZnlKc1BsdWdpbih7XG4gICAgICAgIGNvbXByZXNzOiB7XG4gICAgICAgICAgc2NyZXdfaWU4OiB0cnVlLFxuICAgICAgICAgIHdhcm5pbmdzOiBmYWxzZSxcbiAgICAgICAgfSxcbiAgICAgICAgbWFuZ2xlOiB7XG4gICAgICAgICAgc2NyZXdfaWU4OiB0cnVlLFxuICAgICAgICB9LFxuICAgICAgICBvdXRwdXQ6IHtcbiAgICAgICAgICBjb21tZW50czogZmFsc2UsXG4gICAgICAgICAgc2NyZXdfaWU4OiB0cnVlLFxuICAgICAgICB9LFxuICAgICAgICBzb3VyY2VNYXA6IGZhbHNlLFxuICAgICAgfSlcbiAgICApO1xuICB9XG4gIGlmIChpc05vZGUpIHtcbiAgICBpZiAoaXNEZXYpIHtcbiAgICAgIGNvbmZpZy5wbHVnaW5zLnB1c2gobmV3IFN0YXJ0U2VydmVyUGx1Z2luKCdtYWluLmpzJykpO1xuICAgICAgY29uZmlnLnBsdWdpbnMucHVzaChcbiAgICAgICAgbmV3IFJlbG9hZFNlcnZlclBsdWdpbih7XG4gICAgICAgICAgLy8gRGVmYXVsdHMgdG8gcHJvY2Vzcy5jd2QoKSArIFwiL3NlcnZlci5qc1wiXG4gICAgICAgICAgc2NyaXB0OiBwYXRoLnJlc29sdmUoX19kaXJuYW1lLCAnbm9kZScsICdpbmRleC5qcycpLFxuICAgICAgICB9KVxuICAgICAgKTtcbiAgICB9XG4gICAgY29uZmlnLnBsdWdpbnMucHVzaChcbiAgICAgIG5ldyB3ZWJwYWNrLkJhbm5lclBsdWdpbih7XG4gICAgICAgIGJhbm5lcjogJ3JlcXVpcmUoXCJzb3VyY2UtbWFwLXN1cHBvcnRcIikuaW5zdGFsbCgpOycsXG4gICAgICAgIHJhdzogdHJ1ZSxcbiAgICAgICAgZW50cnlPbmx5OiB0cnVlLFxuICAgICAgfSlcbiAgICApO1xuICAgIGNvbmZpZy5wbHVnaW5zLnB1c2goXG4gICAgICBuZXcgd2VicGFjay5Ob3JtYWxNb2R1bGVSZXBsYWNlbWVudFBsdWdpbihcbiAgICAgICAgL1xcLihsZXNzfGNzc3xzY3NzKSQvLFxuICAgICAgICAnbm9kZS1ub29wJ1xuICAgICAgKVxuICAgICk7XG4gIH0gZWxzZSB7XG4gICAgY29uZmlnLnBsdWdpbnMucHVzaChcbiAgICAgIG5ldyBBc3NldHNQbHVnaW4oe1xuICAgICAgICBmaWxlbmFtZTogJ2Fzc2V0cy5qc29uJyxcbiAgICAgICAgcGF0aDogcGF0aC5yZXNvbHZlKHByb2Nlc3MuY3dkKCksIGZvbGRlciwgdGFyZ2V0KSxcbiAgICAgIH0pXG4gICAgKTtcbiAgICBpZiAoaXNQcm9kICYmICFpc1NlcnZlcmxlc3MpIHtcbiAgICAgIGNvbmZpZy5wbHVnaW5zLnB1c2goXG4gICAgICAgIG5ldyBIdG1sV2VicGFja1BsdWdpbih7XG4gICAgICAgICAgZmlsZW5hbWU6ICdvZmZsaW5lLmh0bWwnLFxuICAgICAgICAgIHRlbXBsYXRlOiBwYXRoLnJlc29sdmUoX19kaXJuYW1lLCAndGVtcGxhdGVzJywgJ2RlZmF1bHQuanMnKSxcbiAgICAgICAgICBpbmplY3Q6IGZhbHNlLFxuICAgICAgICAgIC8qIG1pbmlmeToge1xuICAgICAgICAgIHJlbW92ZUNvbW1lbnRzOiB0cnVlLFxuICAgICAgICAgIGNvbGxhcHNlV2hpdGVzcGFjZTogdHJ1ZSxcbiAgICAgICAgICByZW1vdmVSZWR1bmRhbnRBdHRyaWJ1dGVzOiB0cnVlLFxuICAgICAgICAgIHVzZVNob3J0RG9jdHlwZTogdHJ1ZSxcbiAgICAgICAgICByZW1vdmVFbXB0eUF0dHJpYnV0ZXM6IHRydWUsXG4gICAgICAgICAgcmVtb3ZlU3R5bGVMaW5rVHlwZUF0dHJpYnV0ZXM6IHRydWUsXG4gICAgICAgICAga2VlcENsb3NpbmdTbGFzaDogdHJ1ZSxcbiAgICAgICAgICBtaW5pZnlKUzogdHJ1ZSxcbiAgICAgICAgICBtaW5pZnlDU1M6IHRydWUsXG4gICAgICAgICAgbWluaWZ5VVJMczogdHJ1ZSxcbiAgICAgICAgfSwqL1xuICAgICAgICB9KVxuICAgICAgKTtcbiAgICAgIGNvbmZpZy5wbHVnaW5zLnB1c2goXG4gICAgICAgIG5ldyBPZmZsaW5lUGx1Z2luKHtcbiAgICAgICAgICByZXNwb25zZVN0cmF0ZWd5OiAnbmV0d29yay1maXJzdCcsXG4gICAgICAgICAgZXh0ZXJuYWxzOiBbXG4gICAgICAgICAgICAnaHR0cHM6Ly9jZG4ucG9seWZpbGwuaW8vdjIvcG9seWZpbGwubWluLmpzP2NhbGxiYWNrPVBPTFknLFxuICAgICAgICAgIF0sXG4gICAgICAgICAgLy8gYXV0b1VwZGF0ZTogMTAwMCAqIDYwICogNSxcbiAgICAgICAgICBjYWNoZXM6ICdhbGwnLFxuICAgICAgICAgIFNlcnZpY2VXb3JrZXI6IHtcbiAgICAgICAgICAgIGV2ZW50czogdHJ1ZSxcbiAgICAgICAgICAgIG5hdmlnYXRlRmFsbGJhY2tVUkw6ICcvb2ZmbGluZS5odG1sJyxcbiAgICAgICAgICB9LFxuICAgICAgICAgIEFwcENhY2hlOiBmYWxzZSxcbiAgICAgICAgfSlcbiAgICAgICk7XG4gICAgICBjb25maWcucGx1Z2lucy5wdXNoKFxuICAgICAgICBuZXcgVmlzdWFsaXplclBsdWdpbih7XG4gICAgICAgICAgZmlsZW5hbWU6ICcuL3Zpc3VhbGl6ZXIuaHRtbCcsXG4gICAgICAgIH0pXG4gICAgICApO1xuICAgIH0gZWxzZSBpZiAoaXNTZXJ2ZXJsZXNzKSB7XG4gICAgICBjb25maWcucGx1Z2lucy5wdXNoKFxuICAgICAgICBuZXcgSHRtbFdlYnBhY2tQbHVnaW4oe1xuICAgICAgICAgIGZpbGVuYW1lOiAnaW5kZXguaHRtbCcsXG4gICAgICAgICAgdGVtcGxhdGU6IHBhdGgucmVzb2x2ZShcbiAgICAgICAgICAgIF9fZGlybmFtZSxcbiAgICAgICAgICAgICd0ZW1wbGF0ZXMnLFxuICAgICAgICAgICAgaXNFbGVjdHJvbiA/ICdlbGVjdHJvbi5qcycgOiAnc2VydmVybGVzcy5qcydcbiAgICAgICAgICApLFxuICAgICAgICAgIGluamVjdDogZmFsc2UsXG4gICAgICAgICAgLyogbWluaWZ5OiB7XG4gICAgICAgICAgcmVtb3ZlQ29tbWVudHM6IHRydWUsXG4gICAgICAgICAgY29sbGFwc2VXaGl0ZXNwYWNlOiB0cnVlLFxuICAgICAgICAgIHJlbW92ZVJlZHVuZGFudEF0dHJpYnV0ZXM6IHRydWUsXG4gICAgICAgICAgdXNlU2hvcnREb2N0eXBlOiB0cnVlLFxuICAgICAgICAgIHJlbW92ZUVtcHR5QXR0cmlidXRlczogdHJ1ZSxcbiAgICAgICAgICByZW1vdmVTdHlsZUxpbmtUeXBlQXR0cmlidXRlczogdHJ1ZSxcbiAgICAgICAgICBrZWVwQ2xvc2luZ1NsYXNoOiB0cnVlLFxuICAgICAgICAgIG1pbmlmeUpTOiB0cnVlLFxuICAgICAgICAgIG1pbmlmeUNTUzogdHJ1ZSxcbiAgICAgICAgICBtaW5pZnlVUkxzOiB0cnVlLFxuICAgICAgICB9LCovXG4gICAgICAgIH0pXG4gICAgICApO1xuICAgIH1cbiAgfVxuXG4gIC8vIEhvdCBtb2R1bGUgcmVwbGFjZW1lbnQgb24gZGV2XG4gIGlmIChpc0Rldikge1xuICAgIGNvbmZpZy5wbHVnaW5zLnB1c2gobmV3IHdlYnBhY2suSG90TW9kdWxlUmVwbGFjZW1lbnRQbHVnaW4oKSk7XG4gIH1cblxuICAvLyBMaW1pdENodW5rQ291bnQgb24gYWxsIGJ1dCBwcm9kdWN0aW9uLXdlYlxuICBpZiAoaXNEZXYgfHwgaXNOb2RlIHx8IGlzRWxlY3Ryb24pIHtcbiAgICBjb25maWcucGx1Z2lucy5wdXNoKFxuICAgICAgbmV3IHdlYnBhY2sub3B0aW1pemUuTGltaXRDaHVua0NvdW50UGx1Z2luKHsgbWF4Q2h1bmtzOiAxIH0pXG4gICAgKTtcbiAgICBjb25maWcub3V0cHV0LmZpbGVuYW1lID0gJ1tuYW1lXS5qcyc7XG4gIH0gZWxzZSB7XG4gICAgY29uZmlnLm91dHB1dC5maWxlbmFtZSA9ICdbbmFtZV0uW2NodW5raGFzaF0uanMnO1xuICAgIGNvbmZpZy5vdXRwdXQuY2h1bmtGaWxlbmFtZSA9ICdbbmFtZV0uW2NodW5raGFzaF0uanMnO1xuICB9XG5cbiAgLy8gZXh0ZXJuYWxzXG4gIGlmIChpc05vZGUpIHtcbiAgICBjb25maWcuZXh0ZXJuYWxzID0gYWxsUGFja2FnZXNcbiAgICAgIC5tYXAoeCA9PiBwYXRoLnJlc29sdmUodG9wRm9sZGVyLCB4LCAnbm9kZV9tb2R1bGVzJykpXG4gICAgICAuY29uY2F0KFtwYXRoLnJlc29sdmUoYXBwUm9vdCwgJ25vZGVfbW9kdWxlcycpXSlcbiAgICAgIC5tYXAobW9kdWxlc0RpciA9PlxuICAgICAgICBub2RlRXh0ZXJuYWxzKHtcbiAgICAgICAgICBtb2R1bGVzRGlyLFxuICAgICAgICAgIHdoaXRlbGlzdDogW1xuICAgICAgICAgICAgdiA9PiB2LmluZGV4T2YoJ3dlYnBhY2svaG90L3BvbGwnKSA9PT0gMCxcbiAgICAgICAgICAgICdzb3VyY2UtbWFwLXN1cHBvcnQvcmVnaXN0ZXInLFxuICAgICAgICAgICAgdiA9PiB2LmluZGV4T2YoJ29seW1wLScpID09PSAwLFxuICAgICAgICAgICAgLy8gdiA9PiB2ID09PSAnYW50ZCcgfHwgdi5pbmRleE9mKCdhbnRkLycpID09PSAwLFxuICAgICAgICAgICAgL1xcLihlb3R8d29mZnx3b2ZmMnx0dGZ8b3RmKSQvLFxuICAgICAgICAgICAgL1xcLihzdmd8cG5nfGpwZ3xqcGVnfGdpZnxpY28pJC8sXG4gICAgICAgICAgICAvXFwuKG1wNHxtcDN8b2dnfHN3Znx3ZWJwKSQvLFxuICAgICAgICAgICAgL1xcLihjc3N8c2Nzc3xzYXNzfHNzc3xsZXNzKSQvLFxuICAgICAgICAgIF0sXG4gICAgICAgIH0pXG4gICAgICApO1xuICB9XG5cbiAgaWYgKGlzV2ViICYmIGlzRGV2KSB7XG4gICAgY29uZmlnLmVudHJ5Lm1haW4gPSBbXG4gICAgICAncmVhY3QtaG90LWxvYWRlci9wYXRjaCcsXG4gICAgICBgd2VicGFjay1kZXYtc2VydmVyL2NsaWVudD8ke2NvbmZpZy5vdXRwdXQucHVibGljUGF0aH1gLFxuICAgICAgJ3dlYnBhY2svaG90L29ubHktZGV2LXNlcnZlcicsXG4gICAgICByZXF1aXJlLnJlc29sdmUocGF0aC5yZXNvbHZlKF9fZGlybmFtZSwgdGFyZ2V0KSksXG4gICAgXTtcbiAgfSBlbHNlIGlmIChpc05vZGUgJiYgaXNEZXYpIHtcbiAgICBjb25maWcuZW50cnkubWFpbiA9IFtcbiAgICAgICd3ZWJwYWNrL2hvdC9wb2xsPzEwMDAnLFxuICAgICAgcmVxdWlyZS5yZXNvbHZlKHBhdGgucmVzb2x2ZShfX2Rpcm5hbWUsIHRhcmdldCkpLFxuICAgIF07XG4gIH0gZWxzZSBpZiAoaXNFbGVjdHJvbikge1xuICAgIGNvbmZpZy5lbnRyeS5tYWluID0gW1xuICAgICAgcmVxdWlyZS5yZXNvbHZlKHBhdGgucmVzb2x2ZShfX2Rpcm5hbWUsICd3ZWInLCAnaW5kZXguanMnKSksXG4gICAgXTtcbiAgICBjb25maWcuZW50cnkuYXBwID0gW1xuICAgICAgcmVxdWlyZS5yZXNvbHZlKHBhdGgucmVzb2x2ZShfX2Rpcm5hbWUsICdlbGVjdHJvbicsICdtYWluLmpzJykpLFxuICAgIF07XG4gIH0gZWxzZSB7XG4gICAgY29uZmlnLmVudHJ5Lm1haW4gPSBbXG4gICAgICByZXF1aXJlLnJlc29sdmUocGF0aC5yZXNvbHZlKF9fZGlybmFtZSwgdGFyZ2V0LCAnaW5kZXguanMnKSksXG4gICAgXTtcbiAgfVxuXG4gIGlmIChpc1Byb2QpIHtcbiAgICBjb25maWcubW9kdWxlLnJ1bGVzLnB1c2goe1xuICAgICAgdGVzdDogL1xcLnRzeD8kLyxcbiAgICAgIGluY2x1ZGU6IFtwYXRoLnJlc29sdmUoYXBwUm9vdCwgJ2FwcCcpLCBwYXRoLnJlc29sdmUoYXBwUm9vdCwgJ3NlcnZlcicpXSxcbiAgICAgIHVzZTogW1xuICAgICAgICB7XG4gICAgICAgICAgbG9hZGVyOiAnYXdlc29tZS10eXBlc2NyaXB0LWxvYWRlcicsXG4gICAgICAgICAgb3B0aW9uczoge1xuICAgICAgICAgICAgc2lsZW50OiB0cnVlLFxuICAgICAgICAgICAgdHJhbnNwaWxlT25seTogdHJ1ZSxcbiAgICAgICAgICAgIGNvbmZpZ0ZpbGVOYW1lOiBwYXRoLnJlc29sdmUoX19kaXJuYW1lLCAndHNjb25maWcuanNvbicpLFxuICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICBdLFxuICAgIH0pO1xuICAgIGNvbmZpZy5tb2R1bGUucnVsZXMucHVzaCh7XG4gICAgICB0ZXN0OiAvXFwuY3NzJC8sXG4gICAgICBsb2FkZXI6IEV4dHJhY3RUZXh0UGx1Z2luLmV4dHJhY3Qoe1xuICAgICAgICB1c2U6IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBsb2FkZXI6ICdjc3MtbG9hZGVyJyxcbiAgICAgICAgICAgIG9wdGlvbnM6IHsgbW9kdWxlczogZmFsc2UgfSxcbiAgICAgICAgICB9LFxuICAgICAgICBdLFxuICAgICAgICBmYWxsYmFjazogJ3N0eWxlLWxvYWRlcicsXG4gICAgICB9KSxcbiAgICB9KTtcbiAgfSBlbHNlIHtcbiAgICBjb25maWcubW9kdWxlLnJ1bGVzLnB1c2goe1xuICAgICAgdGVzdDogL1xcLnRzeD8kLyxcbiAgICAgIGluY2x1ZGU6IFtwYXRoLnJlc29sdmUoYXBwUm9vdCwgJ2FwcCcpLCBwYXRoLnJlc29sdmUoYXBwUm9vdCwgJ3NlcnZlcicpXSxcbiAgICAgIHVzZTogW1xuICAgICAgICB7XG4gICAgICAgICAgbG9hZGVyOiAncmVhY3QtaG90LWxvYWRlci93ZWJwYWNrJyxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIGxvYWRlcjogJ2F3ZXNvbWUtdHlwZXNjcmlwdC1sb2FkZXInLFxuICAgICAgICAgIG9wdGlvbnM6IHtcbiAgICAgICAgICAgIHNpbGVudDogdHJ1ZSxcbiAgICAgICAgICAgIHRyYW5zcGlsZU9ubHk6IHRydWUsXG4gICAgICAgICAgICBjb25maWdGaWxlTmFtZTogcGF0aC5yZXNvbHZlKF9fZGlybmFtZSwgJ3RzY29uZmlnLmpzb24nKSxcbiAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgXSxcbiAgICB9KTtcbiAgICBjb25maWcubW9kdWxlLnJ1bGVzLnB1c2goe1xuICAgICAgdGVzdDogL1xcLmNzcyQvLFxuICAgICAgdXNlOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBsb2FkZXI6ICdzdHlsZS1sb2FkZXInLFxuICAgICAgICAgIG9wdGlvbnM6IHsgaW5zZXJ0QXQ6ICd0b3AnIH0sXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBsb2FkZXI6ICdjc3MtbG9hZGVyJyxcbiAgICAgICAgICBvcHRpb25zOiB7IG1vZHVsZXM6IGZhbHNlLCBzb3VyY2VNYXA6IHRydWUgfSxcbiAgICAgICAgfSxcbiAgICAgIF0sXG4gICAgfSk7XG4gIH1cblxuICByZXR1cm4gY29uZmlnO1xufTtcbiJdfQ==
