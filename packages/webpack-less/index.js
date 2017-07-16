var existsSync = require('fs').existsSync;
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var _a = require('webpack'), optimize = _a.optimize, NormalModuleReplacementPlugin = _a.NormalModuleReplacementPlugin;
var resolve = require('path').resolve;
var stringify = JSON.stringify;
var nodeModules = resolve(__dirname, 'node_modules');
module.exports = function (config, options) {
    var isProd = options.isProd, isWeb = options.isWeb, isElectron = options.isElectron, isNode = options.isNode, appRoot = options.appRoot, isLinked = options.isLinked, modifyVars = options.modifyVars, folder = options.folder, target = options.target;
    if (isWeb && isProd) {
        config.plugins.push(new optimize.OccurrenceOrderPlugin());
        config.plugins.push(new ExtractTextPlugin({
            filename: isElectron ? '[name].css' : '[name].[contenthash].css',
            allChunks: true,
        }));
    }
    else if (isNode) {
        config.plugins.push(new NormalModuleReplacementPlugin(/\.(less|css)$/, 'node-noop'));
    }
    if (isProd) {
        config.module.rules.push({
            test: /\.(less|css)$/,
            loader: ExtractTextPlugin.extract({
                use: [
                    {
                        loader: 'cache-loader',
                        options: {
                            cacheDirectory: resolve(appRoot, folder, target, 'cache-babel'),
                        },
                    },
                    {
                        loader: 'css-loader',
                        options: { modules: false },
                    },
                    {
                        loader: 'less-loader',
                        options: { modifyVars: modifyVars },
                    },
                ],
                fallback: 'style-loader',
            }),
        });
    }
    else {
        config.module.rules.push({
            test: /\.(less|css)$/,
            use: [
                {
                    loader: 'cache-loader',
                    options: {
                        cacheDirectory: resolve(appRoot, folder, target, 'cache-less'),
                    },
                },
                {
                    loader: 'style-loader',
                    options: { insertAt: 'top' },
                },
                {
                    loader: 'css-loader',
                    options: { modules: false, sourceMap: true },
                },
                {
                    loader: 'less-loader',
                    options: { modifyVars: modifyVars, sourceMap: true },
                },
            ],
        });
    }
    if (isLinked) {
        config.resolveLoader.modules.push(nodeModules);
    }
    return config;
};
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhY2thZ2VzL3dlYnBhY2stbGVzcy9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBUSxJQUFBLHFDQUFVLENBQW1CO0FBQ3JDLElBQU0saUJBQWlCLEdBQUcsT0FBTyxDQUFDLDZCQUE2QixDQUFDLENBQUM7QUFDM0QsSUFBQSx1QkFBZ0UsRUFBOUQsc0JBQVEsRUFBRSxnRUFBNkIsQ0FBd0I7QUFDL0QsSUFBQSxpQ0FBTyxDQUFxQjtBQUM1QixJQUFBLDBCQUFTLENBQVU7QUFFM0IsSUFBTSxXQUFXLEdBQUcsT0FBTyxDQUFDLFNBQVMsRUFBRSxjQUFjLENBQUMsQ0FBQztBQUV2RCxNQUFNLENBQUMsT0FBTyxHQUFHLFVBQUMsTUFBTSxFQUFFLE9BQU87SUFFN0IsSUFBQSx1QkFBTSxFQUNOLHFCQUFLLEVBQ0wsK0JBQVUsRUFDVix1QkFBTSxFQUNOLHlCQUFPLEVBQ1AsMkJBQVEsRUFDUiwrQkFBVSxFQUNWLHVCQUFNLEVBQ04sdUJBQU0sQ0FDSTtJQUVaLEVBQUUsQ0FBQyxDQUFDLEtBQUssSUFBSSxNQUFNLENBQUMsQ0FBQyxDQUFDO1FBQ3BCLE1BQU0sQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksUUFBUSxDQUFDLHFCQUFxQixFQUFFLENBQUMsQ0FBQztRQUUxRCxNQUFNLENBQUMsT0FBTyxDQUFDLElBQUksQ0FDakIsSUFBSSxpQkFBaUIsQ0FBQztZQUNwQixRQUFRLEVBQUUsVUFBVSxHQUFHLFlBQVksR0FBRywwQkFBMEI7WUFDaEUsU0FBUyxFQUFFLElBQUk7U0FDaEIsQ0FBQyxDQUNILENBQUM7SUFDSixDQUFDO0lBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7UUFDbEIsTUFBTSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQ2pCLElBQUksNkJBQTZCLENBQUMsZUFBZSxFQUFFLFdBQVcsQ0FBQyxDQUNoRSxDQUFDO0lBQ0osQ0FBQztJQUVELEVBQUUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7UUFDWCxNQUFNLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUM7WUFDdkIsSUFBSSxFQUFFLGVBQWU7WUFDckIsTUFBTSxFQUFFLGlCQUFpQixDQUFDLE9BQU8sQ0FBQztnQkFDaEMsR0FBRyxFQUFFO29CQUNIO3dCQUNFLE1BQU0sRUFBRSxjQUFjO3dCQUN0QixPQUFPLEVBQUU7NEJBQ1AsY0FBYyxFQUFFLE9BQU8sQ0FBQyxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxhQUFhLENBQUM7eUJBQ2hFO3FCQUNGO29CQUNEO3dCQUNFLE1BQU0sRUFBRSxZQUFZO3dCQUNwQixPQUFPLEVBQUUsRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFO3FCQUM1QjtvQkFDRDt3QkFDRSxNQUFNLEVBQUUsYUFBYTt3QkFDckIsT0FBTyxFQUFFLEVBQUUsVUFBVSxZQUFBLEVBQUU7cUJBQ3hCO2lCQUNGO2dCQUNELFFBQVEsRUFBRSxjQUFjO2FBQ3pCLENBQUM7U0FDSCxDQUFDLENBQUM7SUFDTCxDQUFDO0lBQUMsSUFBSSxDQUFDLENBQUM7UUFDTixNQUFNLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUM7WUFDdkIsSUFBSSxFQUFFLGVBQWU7WUFDckIsR0FBRyxFQUFFO2dCQUNIO29CQUNFLE1BQU0sRUFBRSxjQUFjO29CQUN0QixPQUFPLEVBQUU7d0JBQ1AsY0FBYyxFQUFFLE9BQU8sQ0FBQyxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxZQUFZLENBQUM7cUJBQy9EO2lCQUNGO2dCQUNEO29CQUNFLE1BQU0sRUFBRSxjQUFjO29CQUN0QixPQUFPLEVBQUUsRUFBRSxRQUFRLEVBQUUsS0FBSyxFQUFFO2lCQUM3QjtnQkFDRDtvQkFDRSxNQUFNLEVBQUUsWUFBWTtvQkFDcEIsT0FBTyxFQUFFLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUUsSUFBSSxFQUFFO2lCQUM3QztnQkFDRDtvQkFDRSxNQUFNLEVBQUUsYUFBYTtvQkFDckIsT0FBTyxFQUFFLEVBQUUsVUFBVSxZQUFBLEVBQUUsU0FBUyxFQUFFLElBQUksRUFBRTtpQkFDekM7YUFDRjtTQUNGLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFRCxFQUFFLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO1FBQ2IsTUFBTSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQ2pELENBQUM7SUFDRCxNQUFNLENBQUMsTUFBTSxDQUFDO0FBQ2hCLENBQUMsQ0FBQyIsImZpbGUiOiJwYWNrYWdlcy93ZWJwYWNrLWxlc3MvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCB7IGV4aXN0c1N5bmMgfSA9IHJlcXVpcmUoJ2ZzJyk7XG5jb25zdCBFeHRyYWN0VGV4dFBsdWdpbiA9IHJlcXVpcmUoJ2V4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpbicpO1xuY29uc3QgeyBvcHRpbWl6ZSwgTm9ybWFsTW9kdWxlUmVwbGFjZW1lbnRQbHVnaW4gfSA9IHJlcXVpcmUoJ3dlYnBhY2snKTtcbmNvbnN0IHsgcmVzb2x2ZSB9ID0gcmVxdWlyZSgncGF0aCcpO1xuY29uc3QgeyBzdHJpbmdpZnkgfSA9IEpTT047XG5cbmNvbnN0IG5vZGVNb2R1bGVzID0gcmVzb2x2ZShfX2Rpcm5hbWUsICdub2RlX21vZHVsZXMnKTtcblxubW9kdWxlLmV4cG9ydHMgPSAoY29uZmlnLCBvcHRpb25zKSA9PiB7XG4gIGNvbnN0IHtcbiAgICBpc1Byb2QsXG4gICAgaXNXZWIsXG4gICAgaXNFbGVjdHJvbixcbiAgICBpc05vZGUsXG4gICAgYXBwUm9vdCxcbiAgICBpc0xpbmtlZCxcbiAgICBtb2RpZnlWYXJzLFxuICAgIGZvbGRlcixcbiAgICB0YXJnZXQsXG4gIH0gPSBvcHRpb25zO1xuXG4gIGlmIChpc1dlYiAmJiBpc1Byb2QpIHtcbiAgICBjb25maWcucGx1Z2lucy5wdXNoKG5ldyBvcHRpbWl6ZS5PY2N1cnJlbmNlT3JkZXJQbHVnaW4oKSk7XG4gICAgLy8gY29uZmlnLnBsdWdpbnMucHVzaChuZXcgd2VicGFjay5vcHRpbWl6ZS5EZWR1cGVQbHVnaW4oKSk7XG4gICAgY29uZmlnLnBsdWdpbnMucHVzaChcbiAgICAgIG5ldyBFeHRyYWN0VGV4dFBsdWdpbih7XG4gICAgICAgIGZpbGVuYW1lOiBpc0VsZWN0cm9uID8gJ1tuYW1lXS5jc3MnIDogJ1tuYW1lXS5bY29udGVudGhhc2hdLmNzcycsXG4gICAgICAgIGFsbENodW5rczogdHJ1ZSxcbiAgICAgIH0pXG4gICAgKTtcbiAgfSBlbHNlIGlmIChpc05vZGUpIHtcbiAgICBjb25maWcucGx1Z2lucy5wdXNoKFxuICAgICAgbmV3IE5vcm1hbE1vZHVsZVJlcGxhY2VtZW50UGx1Z2luKC9cXC4obGVzc3xjc3MpJC8sICdub2RlLW5vb3AnKVxuICAgICk7XG4gIH1cblxuICBpZiAoaXNQcm9kKSB7XG4gICAgY29uZmlnLm1vZHVsZS5ydWxlcy5wdXNoKHtcbiAgICAgIHRlc3Q6IC9cXC4obGVzc3xjc3MpJC8sXG4gICAgICBsb2FkZXI6IEV4dHJhY3RUZXh0UGx1Z2luLmV4dHJhY3Qoe1xuICAgICAgICB1c2U6IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBsb2FkZXI6ICdjYWNoZS1sb2FkZXInLFxuICAgICAgICAgICAgb3B0aW9uczoge1xuICAgICAgICAgICAgICBjYWNoZURpcmVjdG9yeTogcmVzb2x2ZShhcHBSb290LCBmb2xkZXIsIHRhcmdldCwgJ2NhY2hlLWJhYmVsJyksXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgbG9hZGVyOiAnY3NzLWxvYWRlcicsXG4gICAgICAgICAgICBvcHRpb25zOiB7IG1vZHVsZXM6IGZhbHNlIH0sXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBsb2FkZXI6ICdsZXNzLWxvYWRlcicsXG4gICAgICAgICAgICBvcHRpb25zOiB7IG1vZGlmeVZhcnMgfSxcbiAgICAgICAgICB9LFxuICAgICAgICBdLFxuICAgICAgICBmYWxsYmFjazogJ3N0eWxlLWxvYWRlcicsXG4gICAgICB9KSxcbiAgICB9KTtcbiAgfSBlbHNlIHtcbiAgICBjb25maWcubW9kdWxlLnJ1bGVzLnB1c2goe1xuICAgICAgdGVzdDogL1xcLihsZXNzfGNzcykkLyxcbiAgICAgIHVzZTogW1xuICAgICAgICB7XG4gICAgICAgICAgbG9hZGVyOiAnY2FjaGUtbG9hZGVyJyxcbiAgICAgICAgICBvcHRpb25zOiB7XG4gICAgICAgICAgICBjYWNoZURpcmVjdG9yeTogcmVzb2x2ZShhcHBSb290LCBmb2xkZXIsIHRhcmdldCwgJ2NhY2hlLWxlc3MnKSxcbiAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgbG9hZGVyOiAnc3R5bGUtbG9hZGVyJyxcbiAgICAgICAgICBvcHRpb25zOiB7IGluc2VydEF0OiAndG9wJyB9LFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgbG9hZGVyOiAnY3NzLWxvYWRlcicsXG4gICAgICAgICAgb3B0aW9uczogeyBtb2R1bGVzOiBmYWxzZSwgc291cmNlTWFwOiB0cnVlIH0sXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBsb2FkZXI6ICdsZXNzLWxvYWRlcicsXG4gICAgICAgICAgb3B0aW9uczogeyBtb2RpZnlWYXJzLCBzb3VyY2VNYXA6IHRydWUgfSxcbiAgICAgICAgfSxcbiAgICAgIF0sXG4gICAgfSk7XG4gIH1cblxuICBpZiAoaXNMaW5rZWQpIHtcbiAgICBjb25maWcucmVzb2x2ZUxvYWRlci5tb2R1bGVzLnB1c2gobm9kZU1vZHVsZXMpO1xuICB9XG4gIHJldHVybiBjb25maWc7XG59O1xuIl19
