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
                            cacheDirectory: path.resolve(appRoot, folder, target, 'cache-babel'),
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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhY2thZ2VzL3dlYnBhY2stbGVzcy9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBUSxJQUFBLHFDQUFVLENBQW1CO0FBQ3JDLElBQU0saUJBQWlCLEdBQUcsT0FBTyxDQUFDLDZCQUE2QixDQUFDLENBQUM7QUFDM0QsSUFBQSx1QkFBZ0UsRUFBOUQsc0JBQVEsRUFBRSxnRUFBNkIsQ0FBd0I7QUFDL0QsSUFBQSxpQ0FBTyxDQUFxQjtBQUM1QixJQUFBLDBCQUFTLENBQVU7QUFFM0IsSUFBTSxXQUFXLEdBQUcsT0FBTyxDQUFDLFNBQVMsRUFBRSxjQUFjLENBQUMsQ0FBQztBQUV2RCxNQUFNLENBQUMsT0FBTyxHQUFHLFVBQUMsTUFBTSxFQUFFLE9BQU87SUFFN0IsSUFBQSx1QkFBTSxFQUNOLHFCQUFLLEVBQ0wsK0JBQVUsRUFDVix1QkFBTSxFQUNOLHlCQUFPLEVBQ1AsMkJBQVEsRUFDUiwrQkFBVSxFQUNWLHVCQUFNLEVBQ04sdUJBQU0sQ0FDSTtJQUVaLEVBQUUsQ0FBQyxDQUFDLEtBQUssSUFBSSxNQUFNLENBQUMsQ0FBQyxDQUFDO1FBQ3BCLE1BQU0sQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksUUFBUSxDQUFDLHFCQUFxQixFQUFFLENBQUMsQ0FBQztRQUUxRCxNQUFNLENBQUMsT0FBTyxDQUFDLElBQUksQ0FDakIsSUFBSSxpQkFBaUIsQ0FBQztZQUNwQixRQUFRLEVBQUUsVUFBVSxHQUFHLFlBQVksR0FBRywwQkFBMEI7WUFDaEUsU0FBUyxFQUFFLElBQUk7U0FDaEIsQ0FBQyxDQUNILENBQUM7SUFDSixDQUFDO0lBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7UUFDbEIsTUFBTSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQ2pCLElBQUksNkJBQTZCLENBQUMsZUFBZSxFQUFFLFdBQVcsQ0FBQyxDQUNoRSxDQUFDO0lBQ0osQ0FBQztJQUVELEVBQUUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7UUFDWCxNQUFNLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUM7WUFDdkIsSUFBSSxFQUFFLGVBQWU7WUFDckIsTUFBTSxFQUFFLGlCQUFpQixDQUFDLE9BQU8sQ0FBQztnQkFDaEMsR0FBRyxFQUFFO29CQUNIO3dCQUNFLE1BQU0sRUFBRSxjQUFjO3dCQUN0QixPQUFPLEVBQUU7NEJBQ1AsY0FBYyxFQUFFLElBQUksQ0FBQyxPQUFPLENBQzFCLE9BQU8sRUFDUCxNQUFNLEVBQ04sTUFBTSxFQUNOLGFBQWEsQ0FDZDt5QkFDRjtxQkFDRjtvQkFDRDt3QkFDRSxNQUFNLEVBQUUsWUFBWTt3QkFDcEIsT0FBTyxFQUFFLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRTtxQkFDNUI7b0JBQ0Q7d0JBQ0UsTUFBTSxFQUFFLGFBQWE7d0JBQ3JCLE9BQU8sRUFBRSxFQUFFLFVBQVUsWUFBQSxFQUFFO3FCQUN4QjtpQkFDRjtnQkFDRCxRQUFRLEVBQUUsY0FBYzthQUN6QixDQUFDO1NBQ0gsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUFDLElBQUksQ0FBQyxDQUFDO1FBQ04sTUFBTSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDO1lBQ3ZCLElBQUksRUFBRSxlQUFlO1lBQ3JCLEdBQUcsRUFBRTtnQkFDSDtvQkFDRSxNQUFNLEVBQUUsY0FBYztvQkFDdEIsT0FBTyxFQUFFO3dCQUNQLGNBQWMsRUFBRSxPQUFPLENBQUMsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsWUFBWSxDQUFDO3FCQUMvRDtpQkFDRjtnQkFDRDtvQkFDRSxNQUFNLEVBQUUsY0FBYztvQkFDdEIsT0FBTyxFQUFFLEVBQUUsUUFBUSxFQUFFLEtBQUssRUFBRTtpQkFDN0I7Z0JBQ0Q7b0JBQ0UsTUFBTSxFQUFFLFlBQVk7b0JBQ3BCLE9BQU8sRUFBRSxFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFFLElBQUksRUFBRTtpQkFDN0M7Z0JBQ0Q7b0JBQ0UsTUFBTSxFQUFFLGFBQWE7b0JBQ3JCLE9BQU8sRUFBRSxFQUFFLFVBQVUsWUFBQSxFQUFFLFNBQVMsRUFBRSxJQUFJLEVBQUU7aUJBQ3pDO2FBQ0Y7U0FDRixDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQsRUFBRSxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztRQUNiLE1BQU0sQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUNqRCxDQUFDO0lBQ0QsTUFBTSxDQUFDLE1BQU0sQ0FBQztBQUNoQixDQUFDLENBQUMiLCJmaWxlIjoicGFja2FnZXMvd2VicGFjay1sZXNzL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgeyBleGlzdHNTeW5jIH0gPSByZXF1aXJlKCdmcycpO1xuY29uc3QgRXh0cmFjdFRleHRQbHVnaW4gPSByZXF1aXJlKCdleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW4nKTtcbmNvbnN0IHsgb3B0aW1pemUsIE5vcm1hbE1vZHVsZVJlcGxhY2VtZW50UGx1Z2luIH0gPSByZXF1aXJlKCd3ZWJwYWNrJyk7XG5jb25zdCB7IHJlc29sdmUgfSA9IHJlcXVpcmUoJ3BhdGgnKTtcbmNvbnN0IHsgc3RyaW5naWZ5IH0gPSBKU09OO1xuXG5jb25zdCBub2RlTW9kdWxlcyA9IHJlc29sdmUoX19kaXJuYW1lLCAnbm9kZV9tb2R1bGVzJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gKGNvbmZpZywgb3B0aW9ucykgPT4ge1xuICBjb25zdCB7XG4gICAgaXNQcm9kLFxuICAgIGlzV2ViLFxuICAgIGlzRWxlY3Ryb24sXG4gICAgaXNOb2RlLFxuICAgIGFwcFJvb3QsXG4gICAgaXNMaW5rZWQsXG4gICAgbW9kaWZ5VmFycyxcbiAgICBmb2xkZXIsXG4gICAgdGFyZ2V0LFxuICB9ID0gb3B0aW9ucztcblxuICBpZiAoaXNXZWIgJiYgaXNQcm9kKSB7XG4gICAgY29uZmlnLnBsdWdpbnMucHVzaChuZXcgb3B0aW1pemUuT2NjdXJyZW5jZU9yZGVyUGx1Z2luKCkpO1xuICAgIC8vIGNvbmZpZy5wbHVnaW5zLnB1c2gobmV3IHdlYnBhY2sub3B0aW1pemUuRGVkdXBlUGx1Z2luKCkpO1xuICAgIGNvbmZpZy5wbHVnaW5zLnB1c2goXG4gICAgICBuZXcgRXh0cmFjdFRleHRQbHVnaW4oe1xuICAgICAgICBmaWxlbmFtZTogaXNFbGVjdHJvbiA/ICdbbmFtZV0uY3NzJyA6ICdbbmFtZV0uW2NvbnRlbnRoYXNoXS5jc3MnLFxuICAgICAgICBhbGxDaHVua3M6IHRydWUsXG4gICAgICB9KVxuICAgICk7XG4gIH0gZWxzZSBpZiAoaXNOb2RlKSB7XG4gICAgY29uZmlnLnBsdWdpbnMucHVzaChcbiAgICAgIG5ldyBOb3JtYWxNb2R1bGVSZXBsYWNlbWVudFBsdWdpbigvXFwuKGxlc3N8Y3NzKSQvLCAnbm9kZS1ub29wJylcbiAgICApO1xuICB9XG5cbiAgaWYgKGlzUHJvZCkge1xuICAgIGNvbmZpZy5tb2R1bGUucnVsZXMucHVzaCh7XG4gICAgICB0ZXN0OiAvXFwuKGxlc3N8Y3NzKSQvLFxuICAgICAgbG9hZGVyOiBFeHRyYWN0VGV4dFBsdWdpbi5leHRyYWN0KHtcbiAgICAgICAgdXNlOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgbG9hZGVyOiAnY2FjaGUtbG9hZGVyJyxcbiAgICAgICAgICAgIG9wdGlvbnM6IHtcbiAgICAgICAgICAgICAgY2FjaGVEaXJlY3Rvcnk6IHBhdGgucmVzb2x2ZShcbiAgICAgICAgICAgICAgICBhcHBSb290LFxuICAgICAgICAgICAgICAgIGZvbGRlcixcbiAgICAgICAgICAgICAgICB0YXJnZXQsXG4gICAgICAgICAgICAgICAgJ2NhY2hlLWJhYmVsJ1xuICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGxvYWRlcjogJ2Nzcy1sb2FkZXInLFxuICAgICAgICAgICAgb3B0aW9uczogeyBtb2R1bGVzOiBmYWxzZSB9LFxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgbG9hZGVyOiAnbGVzcy1sb2FkZXInLFxuICAgICAgICAgICAgb3B0aW9uczogeyBtb2RpZnlWYXJzIH0sXG4gICAgICAgICAgfSxcbiAgICAgICAgXSxcbiAgICAgICAgZmFsbGJhY2s6ICdzdHlsZS1sb2FkZXInLFxuICAgICAgfSksXG4gICAgfSk7XG4gIH0gZWxzZSB7XG4gICAgY29uZmlnLm1vZHVsZS5ydWxlcy5wdXNoKHtcbiAgICAgIHRlc3Q6IC9cXC4obGVzc3xjc3MpJC8sXG4gICAgICB1c2U6IFtcbiAgICAgICAge1xuICAgICAgICAgIGxvYWRlcjogJ2NhY2hlLWxvYWRlcicsXG4gICAgICAgICAgb3B0aW9uczoge1xuICAgICAgICAgICAgY2FjaGVEaXJlY3Rvcnk6IHJlc29sdmUoYXBwUm9vdCwgZm9sZGVyLCB0YXJnZXQsICdjYWNoZS1sZXNzJyksXG4gICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIGxvYWRlcjogJ3N0eWxlLWxvYWRlcicsXG4gICAgICAgICAgb3B0aW9uczogeyBpbnNlcnRBdDogJ3RvcCcgfSxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIGxvYWRlcjogJ2Nzcy1sb2FkZXInLFxuICAgICAgICAgIG9wdGlvbnM6IHsgbW9kdWxlczogZmFsc2UsIHNvdXJjZU1hcDogdHJ1ZSB9LFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgbG9hZGVyOiAnbGVzcy1sb2FkZXInLFxuICAgICAgICAgIG9wdGlvbnM6IHsgbW9kaWZ5VmFycywgc291cmNlTWFwOiB0cnVlIH0sXG4gICAgICAgIH0sXG4gICAgICBdLFxuICAgIH0pO1xuICB9XG5cbiAgaWYgKGlzTGlua2VkKSB7XG4gICAgY29uZmlnLnJlc29sdmVMb2FkZXIubW9kdWxlcy5wdXNoKG5vZGVNb2R1bGVzKTtcbiAgfVxuICByZXR1cm4gY29uZmlnO1xufTtcbiJdfQ==
