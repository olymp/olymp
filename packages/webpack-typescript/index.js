var existsSync = require('fs').existsSync;
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var _a = require('webpack'), optimize = _a.optimize, NormalModuleReplacementPlugin = _a.NormalModuleReplacementPlugin;
var resolve = require('path').resolve;
var stringify = JSON.stringify;
var nodeModules = resolve(__dirname, 'node_modules');
module.exports = function (config, _a) {
    var isProd = _a.isProd, isWeb = _a.isWeb, isElectron = _a.isElectron, isNode = _a.isNode, appRoot = _a.appRoot, isLinked = _a.isLinked, modifyVars = _a.modifyVars;
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
        var HappyPack = require('happypack');
        HappyPack.ThreadPool({ size: 5 });
        config.plugins.push(new HappyPack({
            id: 'less',
            threads: 4,
            loaders: [
                {
                    path: 'style-loader',
                    query: stringify({ insertAt: 'top' }),
                },
                {
                    path: 'css-loader',
                    query: stringify({ modules: false, sourceMap: true }),
                },
                {
                    loader: 'less-loader',
                    query: stringify({ modifyVars: modifyVars, sourceMap: true }),
                },
            ],
        }));
        config.module.rules.push({
            test: /\.(less|css)$/,
            loaders: ['happypack/loader?id=less'],
        });
    }
    if (isLinked) {
        config.resolveLoader.modules.push(nodeModules);
    }
    return config;
};
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhY2thZ2VzL3dlYnBhY2stbGVzcy9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBUSxJQUFBLHFDQUFVLENBQW1CO0FBQ3JDLElBQU0saUJBQWlCLEdBQUcsT0FBTyxDQUFDLDZCQUE2QixDQUFDLENBQUM7QUFDM0QsSUFBQSx1QkFBZ0UsRUFBOUQsc0JBQVEsRUFBRSxnRUFBNkIsQ0FBd0I7QUFDL0QsSUFBQSxpQ0FBTyxDQUFxQjtBQUM1QixJQUFBLDBCQUFTLENBQVU7QUFFM0IsSUFBTSxXQUFXLEdBQUcsT0FBTyxDQUFDLFNBQVMsRUFBRSxjQUFjLENBQUMsQ0FBQztBQUV2RCxNQUFNLENBQUMsT0FBTyxHQUFHLFVBQ2YsTUFBTSxFQUNOLEVBQW9FO1FBQWxFLGtCQUFNLEVBQUUsZ0JBQUssRUFBRSwwQkFBVSxFQUFFLGtCQUFNLEVBQUUsb0JBQU8sRUFBRSxzQkFBUSxFQUFFLDBCQUFVO0lBRWxFLEVBQUUsQ0FBQyxDQUFDLEtBQUssSUFBSSxNQUFNLENBQUMsQ0FBQyxDQUFDO1FBQ3BCLE1BQU0sQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksUUFBUSxDQUFDLHFCQUFxQixFQUFFLENBQUMsQ0FBQztRQUUxRCxNQUFNLENBQUMsT0FBTyxDQUFDLElBQUksQ0FDakIsSUFBSSxpQkFBaUIsQ0FBQztZQUNwQixRQUFRLEVBQUUsVUFBVSxHQUFHLFlBQVksR0FBRywwQkFBMEI7WUFDaEUsU0FBUyxFQUFFLElBQUk7U0FDaEIsQ0FBQyxDQUNILENBQUM7SUFDSixDQUFDO0lBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7UUFDbEIsTUFBTSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQ2pCLElBQUksNkJBQTZCLENBQUMsZUFBZSxFQUFFLFdBQVcsQ0FBQyxDQUNoRSxDQUFDO0lBQ0osQ0FBQztJQUVELEVBQUUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7UUFDWCxNQUFNLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUM7WUFDdkIsSUFBSSxFQUFFLGVBQWU7WUFDckIsTUFBTSxFQUFFLGlCQUFpQixDQUFDLE9BQU8sQ0FBQztnQkFDaEMsR0FBRyxFQUFFO29CQUNIO3dCQUNFLE1BQU0sRUFBRSxZQUFZO3dCQUNwQixPQUFPLEVBQUUsRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFO3FCQUM1QjtvQkFDRDt3QkFDRSxNQUFNLEVBQUUsYUFBYTt3QkFDckIsT0FBTyxFQUFFLEVBQUUsVUFBVSxZQUFBLEVBQUU7cUJBQ3hCO2lCQUNGO2dCQUNELFFBQVEsRUFBRSxjQUFjO2FBQ3pCLENBQUM7U0FDSCxDQUFDLENBQUM7SUFDTCxDQUFDO0lBQUMsSUFBSSxDQUFDLENBQUM7UUFDTixJQUFNLFNBQVMsR0FBRyxPQUFPLENBQUMsV0FBVyxDQUFDLENBQUM7UUFDdkMsU0FBUyxDQUFDLFVBQVUsQ0FBQyxFQUFFLElBQUksRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBRWxDLE1BQU0sQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUNqQixJQUFJLFNBQVMsQ0FBQztZQUNaLEVBQUUsRUFBRSxNQUFNO1lBQ1YsT0FBTyxFQUFFLENBQUM7WUFDVixPQUFPLEVBQUU7Z0JBQ1A7b0JBQ0UsSUFBSSxFQUFFLGNBQWM7b0JBQ3BCLEtBQUssRUFBRSxTQUFTLENBQUMsRUFBRSxRQUFRLEVBQUUsS0FBSyxFQUFFLENBQUM7aUJBQ3RDO2dCQUNEO29CQUNFLElBQUksRUFBRSxZQUFZO29CQUNsQixLQUFLLEVBQUUsU0FBUyxDQUFDLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUUsSUFBSSxFQUFFLENBQUM7aUJBQ3REO2dCQUNEO29CQUNFLE1BQU0sRUFBRSxhQUFhO29CQUNyQixLQUFLLEVBQUUsU0FBUyxDQUFDLEVBQUUsVUFBVSxZQUFBLEVBQUUsU0FBUyxFQUFFLElBQUksRUFBRSxDQUFDO2lCQUNsRDthQUNGO1NBQ0YsQ0FBQyxDQUNILENBQUM7UUFDRixNQUFNLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUM7WUFDdkIsSUFBSSxFQUFFLGVBQWU7WUFDckIsT0FBTyxFQUFFLENBQUMsMEJBQTBCLENBQUM7U0FDdEMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVELEVBQUUsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7UUFDYixNQUFNLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDakQsQ0FBQztJQUNELE1BQU0sQ0FBQyxNQUFNLENBQUM7QUFDaEIsQ0FBQyxDQUFDIiwiZmlsZSI6InBhY2thZ2VzL3dlYnBhY2stbGVzcy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHsgZXhpc3RzU3luYyB9ID0gcmVxdWlyZSgnZnMnKTtcbmNvbnN0IEV4dHJhY3RUZXh0UGx1Z2luID0gcmVxdWlyZSgnZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luJyk7XG5jb25zdCB7IG9wdGltaXplLCBOb3JtYWxNb2R1bGVSZXBsYWNlbWVudFBsdWdpbiB9ID0gcmVxdWlyZSgnd2VicGFjaycpO1xuY29uc3QgeyByZXNvbHZlIH0gPSByZXF1aXJlKCdwYXRoJyk7XG5jb25zdCB7IHN0cmluZ2lmeSB9ID0gSlNPTjtcblxuY29uc3Qgbm9kZU1vZHVsZXMgPSByZXNvbHZlKF9fZGlybmFtZSwgJ25vZGVfbW9kdWxlcycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IChcbiAgY29uZmlnLFxuICB7IGlzUHJvZCwgaXNXZWIsIGlzRWxlY3Ryb24sIGlzTm9kZSwgYXBwUm9vdCwgaXNMaW5rZWQsIG1vZGlmeVZhcnMgfVxuKSA9PiB7XG4gIGlmIChpc1dlYiAmJiBpc1Byb2QpIHtcbiAgICBjb25maWcucGx1Z2lucy5wdXNoKG5ldyBvcHRpbWl6ZS5PY2N1cnJlbmNlT3JkZXJQbHVnaW4oKSk7XG4gICAgLy8gY29uZmlnLnBsdWdpbnMucHVzaChuZXcgd2VicGFjay5vcHRpbWl6ZS5EZWR1cGVQbHVnaW4oKSk7XG4gICAgY29uZmlnLnBsdWdpbnMucHVzaChcbiAgICAgIG5ldyBFeHRyYWN0VGV4dFBsdWdpbih7XG4gICAgICAgIGZpbGVuYW1lOiBpc0VsZWN0cm9uID8gJ1tuYW1lXS5jc3MnIDogJ1tuYW1lXS5bY29udGVudGhhc2hdLmNzcycsXG4gICAgICAgIGFsbENodW5rczogdHJ1ZSxcbiAgICAgIH0pXG4gICAgKTtcbiAgfSBlbHNlIGlmIChpc05vZGUpIHtcbiAgICBjb25maWcucGx1Z2lucy5wdXNoKFxuICAgICAgbmV3IE5vcm1hbE1vZHVsZVJlcGxhY2VtZW50UGx1Z2luKC9cXC4obGVzc3xjc3MpJC8sICdub2RlLW5vb3AnKVxuICAgICk7XG4gIH1cblxuICBpZiAoaXNQcm9kKSB7XG4gICAgY29uZmlnLm1vZHVsZS5ydWxlcy5wdXNoKHtcbiAgICAgIHRlc3Q6IC9cXC4obGVzc3xjc3MpJC8sXG4gICAgICBsb2FkZXI6IEV4dHJhY3RUZXh0UGx1Z2luLmV4dHJhY3Qoe1xuICAgICAgICB1c2U6IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBsb2FkZXI6ICdjc3MtbG9hZGVyJyxcbiAgICAgICAgICAgIG9wdGlvbnM6IHsgbW9kdWxlczogZmFsc2UgfSxcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGxvYWRlcjogJ2xlc3MtbG9hZGVyJyxcbiAgICAgICAgICAgIG9wdGlvbnM6IHsgbW9kaWZ5VmFycyB9LFxuICAgICAgICAgIH0sXG4gICAgICAgIF0sXG4gICAgICAgIGZhbGxiYWNrOiAnc3R5bGUtbG9hZGVyJyxcbiAgICAgIH0pLFxuICAgIH0pO1xuICB9IGVsc2Uge1xuICAgIGNvbnN0IEhhcHB5UGFjayA9IHJlcXVpcmUoJ2hhcHB5cGFjaycpO1xuICAgIEhhcHB5UGFjay5UaHJlYWRQb29sKHsgc2l6ZTogNSB9KTtcblxuICAgIGNvbmZpZy5wbHVnaW5zLnB1c2goXG4gICAgICBuZXcgSGFwcHlQYWNrKHtcbiAgICAgICAgaWQ6ICdsZXNzJyxcbiAgICAgICAgdGhyZWFkczogNCxcbiAgICAgICAgbG9hZGVyczogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIHBhdGg6ICdzdHlsZS1sb2FkZXInLFxuICAgICAgICAgICAgcXVlcnk6IHN0cmluZ2lmeSh7IGluc2VydEF0OiAndG9wJyB9KSxcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHBhdGg6ICdjc3MtbG9hZGVyJyxcbiAgICAgICAgICAgIHF1ZXJ5OiBzdHJpbmdpZnkoeyBtb2R1bGVzOiBmYWxzZSwgc291cmNlTWFwOiB0cnVlIH0pLFxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgbG9hZGVyOiAnbGVzcy1sb2FkZXInLFxuICAgICAgICAgICAgcXVlcnk6IHN0cmluZ2lmeSh7IG1vZGlmeVZhcnMsIHNvdXJjZU1hcDogdHJ1ZSB9KSxcbiAgICAgICAgICB9LFxuICAgICAgICBdLFxuICAgICAgfSlcbiAgICApO1xuICAgIGNvbmZpZy5tb2R1bGUucnVsZXMucHVzaCh7XG4gICAgICB0ZXN0OiAvXFwuKGxlc3N8Y3NzKSQvLFxuICAgICAgbG9hZGVyczogWydoYXBweXBhY2svbG9hZGVyP2lkPWxlc3MnXSxcbiAgICB9KTtcbiAgfVxuXG4gIGlmIChpc0xpbmtlZCkge1xuICAgIGNvbmZpZy5yZXNvbHZlTG9hZGVyLm1vZHVsZXMucHVzaChub2RlTW9kdWxlcyk7XG4gIH1cbiAgcmV0dXJuIGNvbmZpZztcbn07XG4iXX0=
