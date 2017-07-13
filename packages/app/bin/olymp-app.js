#!/usr/bin/env node
var fs = require('fs');
var path = require('path');
var rimraf = require('rimraf');
var webpack = require('webpack');
var urlUtil = require('url');
require('dotenv').config();
var createConfig = require(path.resolve(__dirname, '..', 'webpack-config.js'));
var command = process.argv[process.argv.length - 1];
if (['start', 'build'].includes(command)) {
    process.env.NODE_ENV = 'production';
}
var _a = process.env, SSR = _a.SSR, SERVERLESS = _a.SERVERLESS, NODE_ENV = _a.NODE_ENV, PORT = _a.PORT, URL = _a.URL;
var ssr = SSR != 'false';
var serverless = SERVERLESS == 'true';
console.log('Is Serverless', serverless);
console.log('Is SSR', ssr);
if (command === 'dev') {
    var port = parseInt(PORT, 10);
    var url_1 = new urlUtil.URL(URL || "http://localhost:" + port);
    var devPort = serverless ? port : port + 2;
    var devUrl = serverless ? url_1 : new urlUtil.URL(url_1.protocol + "//" + url_1.hostname + ":" + devPort);
    var notifier_1 = require('node-notifier');
    var compiler = void 0;
    var watch = {
        aggregateTimeout: 300,
        poll: false,
        ignored: /node_modules/,
    };
    if (serverless) {
        compiler = webpack([
            createConfig({ target: 'web', mode: 'development', devPort: devPort, devUrl: devUrl, ssr: ssr, serverless: serverless }),
        ]);
    }
    else {
        compiler = webpack([
            createConfig({ target: 'web', mode: 'development', devPort: devPort, devUrl: devUrl, ssr: ssr, serverless: serverless }),
            createConfig({
                target: 'node',
                mode: 'development',
                devPort: devPort,
                devUrl: devUrl,
                ssr: ssr,
                serverless: serverless,
            }),
        ]);
        compiler.compilers[1].watch(watch, function (err, compilation) {
            if (err) {
                return console.log('[webpack] error:', err);
            }
            var stats = compilation.stats || [compilation];
            console.log('[webpack] the following asset bundles were built:');
            stats.forEach(function (c) { return console.log(c.toString()); });
            notifier_1.notify('Ready');
        });
    }
    var WebpackDevServer = require('webpack-dev-server');
    var server = new WebpackDevServer(compiler.compilers[0], {
        headers: {
            'Access-Control-Allow-Origin': '*',
        },
        watchOptions: watch,
        host: devUrl.hostname,
        port: devUrl.port,
        disableHostCheck: true,
        historyApiFallback: true,
        hot: true,
        stats: {
            colors: true,
            hash: false,
            version: false,
            timings: false,
            assets: false,
            chunks: false,
            modules: false,
            reasons: false,
            children: false,
            source: false,
            errors: true,
            errorDetails: true,
            warnings: false,
            publicPath: false,
        },
    });
    server.listen(devPort);
}
else if (command === 'build') {
    rimraf.sync(path.resolve(process.cwd(), 'dist'));
    process.env.NODE_ENV = 'production';
    var configs = [
        createConfig({ target: 'web', mode: 'production', ssr: ssr, serverless: serverless }),
    ];
    if (!serverless) {
        configs.push(createConfig({ target: 'node', mode: 'production', ssr: ssr, serverless: serverless }));
    }
    var compiler = webpack(configs);
    compiler.run(function (err, compilation) {
        if (err) {
            console.error(err);
            return process.exit(1);
        }
        var stats = compilation.stats || [compilation];
        console.log('[webpack] the following asset bundles were built:');
        stats.forEach(function (c) { return console.log(c.toString()); });
    });
}
else if (command.indexOf('build:') === 0) {
    var target = command.split(':')[1];
    rimraf.sync(path.resolve(process.cwd(), 'dist', target));
    process.env.NODE_ENV = 'production';
    var compiler = webpack([createConfig({ target: target, mode: 'production', ssr: ssr, serverless: serverless })]);
    compiler.run(function (err, compilation) {
        if (err) {
            console.error(err);
            return process.exit(1);
        }
        var stats = compilation.stats || [compilation];
        console.log('[webpack] the following asset bundles were built:');
        stats.forEach(function (c) { return console.log(c.toString()); });
        stats.forEach(function (c) {
            return fs.writeFileSync(path.resolve(__dirname, 'stats.json'), c.toJson());
        });
    });
}
else if (command === 'start') {
    require(path.resolve(process.cwd(), 'dist', 'node', 'main'));
}
//# sourceMappingURL=olymp-app.js.map