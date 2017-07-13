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
var HappyPack = require('happypack');
var GenerateJsonPlugin = require('generate-json-webpack-plugin');
HappyPack.ThreadPool({ size: 5 });
var appRoot = process.cwd();
var olympRoot = path.resolve(__dirname, '..', '..');
process.noDeprecation = true;
var allPackages = fs
    .readdirSync(path.resolve(olympRoot, 'packages'));
var packagesToTranspile = allPackages.filter(function (x) { return x !== 'graphql' && x !== 'collection' && x !== 'app' && x !== 'utils' && x !== 'ui'; });
module.exports = function (_a) {
    var mode = _a.mode, target = _a.target, devUrl = _a.devUrl, devPort = _a.devPort, ssr = _a.ssr, serverless = _a.serverless;
    var isDev = mode !== 'production';
    var isProd = mode === 'production';
    var isWeb = target !== 'node';
    var isElectron = target === 'electron';
    var isNode = target === 'node';
    var isServerless = serverless === true || isElectron;
    var isSSR = ssr !== false && !serverless;
    var folder = isDev ? 'dev' : 'dist';
    var config = {
        resolve: {
            extensions: ['.js', '.json'],
            modules: [
                path.resolve(olympRoot, 'node_modules'),
                path.resolve(appRoot, 'node_modules'),
                path.resolve(appRoot, 'app'),
            ],
            alias: Object.assign({
                'history/createFlexHistory': isServerless ? 'history/createHashHistory' : 'history/createBrowserHistory',
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
                obj["olymp-" + item] = path.resolve(olympRoot, 'packages', item);
                return obj;
            }, {})),
        },
        resolveLoader: {
            modules: [
                path.resolve(olympRoot, 'node_modules'),
                path.resolve(appRoot, 'node_modules'),
            ],
        },
        plugins: [
            new webpack.DefinePlugin(Object.assign({
                'process.env.SSR': JSON.stringify(isSSR),
                'process.env.NODE_ENV': JSON.stringify(mode),
                'process.env.DEV_PORT': JSON.stringify(devPort),
                'process.env.DEV_URL': devUrl ? JSON.stringify(devUrl.origin) : undefined,
                'process.env.IS_WEB': isWeb ? JSON.stringify(true) : undefined,
                'process.env.IS_NODE': isNode ? JSON.stringify(true) : undefined,
                'process.env.IS_ELECTRON': isElectron ? JSON.stringify(true) : undefined,
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
    var include = packagesToTranspile.map(function (item) { return path.resolve(olympRoot, 'packages', item); }).concat([
        path.resolve(appRoot, 'app'),
        path.resolve(appRoot, 'server'),
    ]);
    var babel = {
        test: /\.(js|jsx)$/,
        loader: 'babel-loader',
        include: include,
        options: {
            cacheDirectory: false,
            presets: ['react'],
            plugins: [
                'syntax-dynamic-import',
                'transform-object-rest-spread',
                'transform-decorators-legacy',
                'transform-class-properties',
                ['import', { libraryName: 'antd', style: true }],
            ],
        },
    };
    if (isDev && isWeb) {
        config.devtool = 'inline-source-map';
    }
    else {
        config.devtool = 'source-map';
    }
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
        babel.options.presets.push([
            'env',
            { modules: false, loose: true, targets: { node: 'current' } },
        ]);
    }
    else if (isDev) {
        babel.options.presets.push(['latest', { modules: false, loose: true }]);
        babel.options.plugins.push('react-hot-loader/babel');
    }
    else {
        babel.options.presets.push(['latest', { modules: false, loose: true }]);
        babel.options.plugins.push([
            'transform-imports',
            {
                antd: {
                    transform: 'antd/lib/${member}',
                    kebabCase: true,
                    preventFullImport: true,
                },
                lodash: {
                    transform: 'lodash/${member}',
                    preventFullImport: true,
                },
                'date-fns': {
                    transform: 'date-fns/${member}',
                    preventFullImport: true,
                    snakeCase: true,
                },
                'olymp-icons': {
                    transform: 'olymp-icons/fa5/lib/${member}',
                    kebabCase: true,
                    preventFullImport: true,
                },
            },
        ]);
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
        config.externals = [
            path.resolve(olympRoot, 'node_modules'),
            path.resolve(appRoot, 'node_modules'),
        ].map(function (modulesDir) {
            return nodeExternals({
                modulesDir: modulesDir,
                whitelist: [
                    function (v) { return v.indexOf('webpack/hot/poll') === 0; },
                    'source-map-support/register',
                    function (v) { return v.indexOf('olymp-') === 0 && packagesToTranspile.indexOf(v.split('/')[0].split('olymp-')[1]) !== -1; },
                    function (v) { return v === 'antd' || v.indexOf('antd/') === 0; },
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
        config.entry.main = [require.resolve(path.resolve(__dirname, 'web', 'index.js'))];
        config.entry.app = [require.resolve(path.resolve(__dirname, 'electron', 'main.js'))];
    }
    else {
        config.entry.main = [require.resolve(path.resolve(__dirname, target, 'index.js'))];
    }
    var theme = {
        'font-size-base': '15px',
        'primary-color': '#FBA139',
        'cms-color': '#FFFFFF',
    };
    if (fs.existsSync(path.resolve(process.cwd(), 'theme.js'))) {
        theme = Object.assign({}, theme, require(path.resolve(process.cwd(), 'theme.js'))());
    }
    if (isWeb && isProd) {
        config.module.rules.push({
            test: /\.less$/,
            loader: ExtractTextPlugin.extract({
                use: [
                    {
                        loader: 'css-loader',
                        options: { modules: false },
                    },
                    {
                        loader: 'less-loader',
                        options: {
                            modifyVars: theme,
                        },
                    },
                ],
                fallback: 'style-loader',
            }),
        });
        config.module.rules.push(babel);
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
        config.module.rules.push(babel);
    }
    else if (isWeb && isDev) {
        config.plugins.push(new HappyPack({
            id: 'less',
            threads: 4,
            loaders: [
                {
                    path: 'style-loader',
                    query: JSON.stringify({ insertAt: 'top' }),
                },
                {
                    path: 'css-loader',
                    query: JSON.stringify({ modules: false, sourceMap: true }),
                },
                {
                    loader: 'less-loader',
                    query: JSON.stringify({ modifyVars: theme, sourceMap: true }),
                },
            ],
        }));
        config.module.rules.push({
            test: /\.less$/,
            loaders: ['happypack/loader?id=less'],
        });
        config.plugins.push(new HappyPack({
            id: 'css',
            threads: 4,
            loaders: [
                {
                    path: 'style-loader',
                    query: JSON.stringify({ insertAt: 'top' }),
                },
                {
                    path: 'css-loader',
                    query: JSON.stringify({ modules: false, sourceMap: true }),
                },
            ],
        }));
        config.module.rules.push({
            test: /\.css$/,
            loaders: ['happypack/loader?id=css'],
        });
    }
    if (isDev) {
        config.plugins.push(new HappyPack({
            id: 'babel',
            threads: 4,
            loaders: [
                {
                    path: babel.loader,
                    query: JSON.stringify(babel.options),
                },
            ],
        }));
        config.module.rules.push({
            test: babel.test,
            include: babel.include,
            loaders: ['happypack/loader?id=babel'],
        });
    }
    else {
        config.module.rules.push(babel);
    }
    return config;
};
//# sourceMappingURL=webpack-config.js.map