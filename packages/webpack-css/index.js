import ExtractTextPlugin from 'extract-text-webpack-plugin';
import webpack from 'webpack';
export default function (config, _a) {
    var isProd = _a.isProd, isWeb = _a.isWeb, isElectron = _a.isElectron, isNode = _a.isNode, appRoot = _a.appRoot;
    if (isWeb && isProd) {
        config.plugins.push(new webpack.optimize.OccurrenceOrderPlugin());
        config.plugins.push(new ExtractTextPlugin({
            filename: isElectron ? '[name].css' : '[name].[contenthash].css',
            allChunks: true,
        }));
    }
    else if (isNode) {
        config.plugins.push(new webpack.NormalModuleReplacementPlugin(/\.css$/, 'node-noop'));
    }
    if (isProd) {
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
        var HappyPack = require('happypack');
        HappyPack.ThreadPool({ size: 5 });
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
    return config;
};
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhY2thZ2VzL3dlYnBhY2stY3NzL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBLE9BQU8saUJBQWlCLE1BQU0sNkJBQTZCLENBQUM7QUFDNUQsT0FBTyxPQUFPLE1BQU0sU0FBUyxDQUFDO0FBRzlCLGVBQWUsVUFBQyxNQUFNLEVBQUUsRUFBOEM7UUFBNUMsa0JBQU0sRUFBRSxnQkFBSyxFQUFFLDBCQUFVLEVBQUUsa0JBQU0sRUFBRSxvQkFBTztJQUNsRSxFQUFFLENBQUMsQ0FBQyxLQUFLLElBQUksTUFBTSxDQUFDLENBQUMsQ0FBQztRQUNwQixNQUFNLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLE9BQU8sQ0FBQyxRQUFRLENBQUMscUJBQXFCLEVBQUUsQ0FBQyxDQUFDO1FBRWxFLE1BQU0sQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUNqQixJQUFJLGlCQUFpQixDQUFDO1lBQ3BCLFFBQVEsRUFBRSxVQUFVLEdBQUcsWUFBWSxHQUFHLDBCQUEwQjtZQUNoRSxTQUFTLEVBQUUsSUFBSTtTQUNoQixDQUFDLENBQ0gsQ0FBQztJQUNKLENBQUM7SUFBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztRQUNsQixNQUFNLENBQUMsT0FBTyxDQUFDLElBQUksQ0FDakIsSUFBSSxPQUFPLENBQUMsNkJBQTZCLENBQUMsUUFBUSxFQUFFLFdBQVcsQ0FBQyxDQUNqRSxDQUFDO0lBQ0osQ0FBQztJQUVELEVBQUUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7UUFDWCxNQUFNLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUM7WUFDdkIsSUFBSSxFQUFFLFFBQVE7WUFDZCxNQUFNLEVBQUUsaUJBQWlCLENBQUMsT0FBTyxDQUFDO2dCQUNoQyxHQUFHLEVBQUU7b0JBQ0g7d0JBQ0UsTUFBTSxFQUFFLFlBQVk7d0JBQ3BCLE9BQU8sRUFBRSxFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUU7cUJBQzVCO2lCQUNGO2dCQUNELFFBQVEsRUFBRSxjQUFjO2FBQ3pCLENBQUM7U0FDSCxDQUFDLENBQUM7SUFDTCxDQUFDO0lBQUMsSUFBSSxDQUFDLENBQUM7UUFDTixJQUFNLFNBQVMsR0FBRyxPQUFPLENBQUMsV0FBVyxDQUFDLENBQUM7UUFDdkMsU0FBUyxDQUFDLFVBQVUsQ0FBQyxFQUFFLElBQUksRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBRWxDLE1BQU0sQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUNqQixJQUFJLFNBQVMsQ0FBQztZQUNaLEVBQUUsRUFBRSxLQUFLO1lBQ1QsT0FBTyxFQUFFLENBQUM7WUFDVixPQUFPLEVBQUU7Z0JBQ1A7b0JBQ0UsSUFBSSxFQUFFLGNBQWM7b0JBQ3BCLEtBQUssRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLEVBQUUsUUFBUSxFQUFFLEtBQUssRUFBRSxDQUFDO2lCQUMzQztnQkFDRDtvQkFDRSxJQUFJLEVBQUUsWUFBWTtvQkFDbEIsS0FBSyxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFLFNBQVMsRUFBRSxJQUFJLEVBQUUsQ0FBQztpQkFDM0Q7YUFDRjtTQUNGLENBQUMsQ0FDSCxDQUFDO1FBQ0YsTUFBTSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDO1lBQ3ZCLElBQUksRUFBRSxRQUFRO1lBQ2QsT0FBTyxFQUFFLENBQUMseUJBQXlCLENBQUM7U0FDckMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUNELE1BQU0sQ0FBQyxNQUFNLENBQUM7QUFDaEIsQ0FBQyxDQUFDIiwiZmlsZSI6InBhY2thZ2VzL3dlYnBhY2stY3NzL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGZzIGZyb20gJ2ZzJztcbmltcG9ydCBFeHRyYWN0VGV4dFBsdWdpbiBmcm9tICdleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW4nO1xuaW1wb3J0IHdlYnBhY2sgZnJvbSAnd2VicGFjayc7XG5pbXBvcnQgeyByZXNvbHZlIH0gZnJvbSAncGF0aCc7XG5cbmV4cG9ydCBkZWZhdWx0IChjb25maWcsIHsgaXNQcm9kLCBpc1dlYiwgaXNFbGVjdHJvbiwgaXNOb2RlLCBhcHBSb290IH0pID0+IHtcbiAgaWYgKGlzV2ViICYmIGlzUHJvZCkge1xuICAgIGNvbmZpZy5wbHVnaW5zLnB1c2gobmV3IHdlYnBhY2sub3B0aW1pemUuT2NjdXJyZW5jZU9yZGVyUGx1Z2luKCkpO1xuICAgIC8vIGNvbmZpZy5wbHVnaW5zLnB1c2gobmV3IHdlYnBhY2sub3B0aW1pemUuRGVkdXBlUGx1Z2luKCkpO1xuICAgIGNvbmZpZy5wbHVnaW5zLnB1c2goXG4gICAgICBuZXcgRXh0cmFjdFRleHRQbHVnaW4oe1xuICAgICAgICBmaWxlbmFtZTogaXNFbGVjdHJvbiA/ICdbbmFtZV0uY3NzJyA6ICdbbmFtZV0uW2NvbnRlbnRoYXNoXS5jc3MnLFxuICAgICAgICBhbGxDaHVua3M6IHRydWUsXG4gICAgICB9KVxuICAgICk7XG4gIH0gZWxzZSBpZiAoaXNOb2RlKSB7XG4gICAgY29uZmlnLnBsdWdpbnMucHVzaChcbiAgICAgIG5ldyB3ZWJwYWNrLk5vcm1hbE1vZHVsZVJlcGxhY2VtZW50UGx1Z2luKC9cXC5jc3MkLywgJ25vZGUtbm9vcCcpXG4gICAgKTtcbiAgfVxuXG4gIGlmIChpc1Byb2QpIHtcbiAgICBjb25maWcubW9kdWxlLnJ1bGVzLnB1c2goe1xuICAgICAgdGVzdDogL1xcLmNzcyQvLFxuICAgICAgbG9hZGVyOiBFeHRyYWN0VGV4dFBsdWdpbi5leHRyYWN0KHtcbiAgICAgICAgdXNlOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgbG9hZGVyOiAnY3NzLWxvYWRlcicsXG4gICAgICAgICAgICBvcHRpb25zOiB7IG1vZHVsZXM6IGZhbHNlIH0sXG4gICAgICAgICAgfSxcbiAgICAgICAgXSxcbiAgICAgICAgZmFsbGJhY2s6ICdzdHlsZS1sb2FkZXInLFxuICAgICAgfSksXG4gICAgfSk7XG4gIH0gZWxzZSB7XG4gICAgY29uc3QgSGFwcHlQYWNrID0gcmVxdWlyZSgnaGFwcHlwYWNrJyk7XG4gICAgSGFwcHlQYWNrLlRocmVhZFBvb2woeyBzaXplOiA1IH0pO1xuXG4gICAgY29uZmlnLnBsdWdpbnMucHVzaChcbiAgICAgIG5ldyBIYXBweVBhY2soe1xuICAgICAgICBpZDogJ2NzcycsXG4gICAgICAgIHRocmVhZHM6IDQsXG4gICAgICAgIGxvYWRlcnM6IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBwYXRoOiAnc3R5bGUtbG9hZGVyJyxcbiAgICAgICAgICAgIHF1ZXJ5OiBKU09OLnN0cmluZ2lmeSh7IGluc2VydEF0OiAndG9wJyB9KSxcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHBhdGg6ICdjc3MtbG9hZGVyJyxcbiAgICAgICAgICAgIHF1ZXJ5OiBKU09OLnN0cmluZ2lmeSh7IG1vZHVsZXM6IGZhbHNlLCBzb3VyY2VNYXA6IHRydWUgfSksXG4gICAgICAgICAgfSxcbiAgICAgICAgXSxcbiAgICAgIH0pXG4gICAgKTtcbiAgICBjb25maWcubW9kdWxlLnJ1bGVzLnB1c2goe1xuICAgICAgdGVzdDogL1xcLmNzcyQvLFxuICAgICAgbG9hZGVyczogWydoYXBweXBhY2svbG9hZGVyP2lkPWNzcyddLFxuICAgIH0pO1xuICB9XG4gIHJldHVybiBjb25maWc7XG59O1xuIl19