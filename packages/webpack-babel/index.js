var existsSync = require('fs').existsSync;
var resolve = require('path').resolve;
var stringify = JSON.stringify;
var nodeModules = resolve(__dirname, 'node_modules');
module.exports = function (config, _a) {
    var isProd = _a.isProd, isWeb = _a.isWeb, isElectron = _a.isElectron, isDev = _a.isDev, isNode = _a.isNode, appRoot = _a.appRoot, isLinked = _a.isLinked, modifyVars = _a.modifyVars;
    var babel = {
        test: /\.(js|jsx)$/,
        loader: 'babel-loader',
        include: [
            path.resolve(appRoot, 'app'),
            path.resolve(appRoot, 'server'),
        ],
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
    if (isDev) {
        var HappyPack = require('happypack');
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
    if (isLinked) {
        config.resolveLoader.modules.push(nodeModules);
    }
    return config;
};
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhY2thZ2VzL3dlYnBhY2stYmFiZWwvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQVEsSUFBQSxxQ0FBVSxDQUFtQjtBQUM3QixJQUFBLGlDQUFPLENBQXFCO0FBQzVCLElBQUEsMEJBQVMsQ0FBVTtBQUUzQixJQUFNLFdBQVcsR0FBRyxPQUFPLENBQUMsU0FBUyxFQUFFLGNBQWMsQ0FBQyxDQUFDO0FBRXZELE1BQU0sQ0FBQyxPQUFPLEdBQUcsVUFDZixNQUFNLEVBQ04sRUFBMkU7UUFBekUsa0JBQU0sRUFBRSxnQkFBSyxFQUFFLDBCQUFVLEVBQUUsZ0JBQUssRUFBRSxrQkFBTSxFQUFFLG9CQUFPLEVBQUUsc0JBQVEsRUFBRSwwQkFBVTtJQUV6RSxJQUFNLEtBQUssR0FBRztRQUNaLElBQUksRUFBRSxhQUFhO1FBQ25CLE1BQU0sRUFBRSxjQUFjO1FBQ3RCLE9BQU8sRUFBRTtZQUdQLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxFQUFFLEtBQUssQ0FBQztZQUM1QixJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sRUFBRSxRQUFRLENBQUM7U0FDaEM7UUFDRCxPQUFPLEVBQUU7WUFDUCxjQUFjLEVBQUUsS0FBSztZQUNyQixPQUFPLEVBQUUsQ0FBQyxPQUFPLENBQUM7WUFDbEIsT0FBTyxFQUFFO2dCQUNQLHVCQUF1QjtnQkFDdkIsOEJBQThCO2dCQUU5Qiw2QkFBNkI7Z0JBQzdCLDRCQUE0QjtnQkFDNUIsQ0FBQyxRQUFRLEVBQUUsRUFBRSxXQUFXLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsQ0FBQzthQUNqRDtTQUNGO0tBQ0YsQ0FBQztJQUNGLEVBQUUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7UUFDWCxLQUFLLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUM7WUFDekIsS0FBSztZQUNMLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRSxFQUFFLElBQUksRUFBRSxTQUFTLEVBQUUsRUFBRTtTQUM5RCxDQUFDLENBQUM7SUFDTCxDQUFDO0lBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7UUFDakIsS0FBSyxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUMsUUFBUSxFQUFFLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQ3hFLEtBQUssQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyx3QkFBd0IsQ0FBQyxDQUFDO0lBQ3ZELENBQUM7SUFBQyxJQUFJLENBQUMsQ0FBQztRQUNOLEtBQUssQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDLFFBQVEsRUFBRSxFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQztRQUN4RSxLQUFLLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUM7WUFDekIsbUJBQW1CO1lBQ25CO2dCQUNFLElBQUksRUFBRTtvQkFDSixTQUFTLEVBQUUsb0JBQW9CO29CQUMvQixTQUFTLEVBQUUsSUFBSTtvQkFDZixpQkFBaUIsRUFBRSxJQUFJO2lCQUN4QjtnQkFDRCxNQUFNLEVBQUU7b0JBQ04sU0FBUyxFQUFFLGtCQUFrQjtvQkFDN0IsaUJBQWlCLEVBQUUsSUFBSTtpQkFDeEI7Z0JBQ0QsVUFBVSxFQUFFO29CQUNWLFNBQVMsRUFBRSxvQkFBb0I7b0JBQy9CLGlCQUFpQixFQUFFLElBQUk7b0JBQ3ZCLFNBQVMsRUFBRSxJQUFJO2lCQUNoQjtnQkFDRCxhQUFhLEVBQUU7b0JBQ2IsU0FBUyxFQUFFLCtCQUErQjtvQkFDMUMsU0FBUyxFQUFFLElBQUk7b0JBQ2YsaUJBQWlCLEVBQUUsSUFBSTtpQkFDeEI7YUFDRjtTQUNGLENBQUMsQ0FBQztJQUVMLENBQUM7SUFFRCxFQUFFLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO1FBQ1YsSUFBTSxTQUFTLEdBQUcsT0FBTyxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBQ3ZDLE1BQU0sQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUNqQixJQUFJLFNBQVMsQ0FBQztZQUNaLEVBQUUsRUFBRSxPQUFPO1lBQ1gsT0FBTyxFQUFFLENBQUM7WUFDVixPQUFPLEVBQUU7Z0JBQ1A7b0JBQ0UsSUFBSSxFQUFFLEtBQUssQ0FBQyxNQUFNO29CQUNsQixLQUFLLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDO2lCQUNyQzthQUNGO1NBQ0YsQ0FBQyxDQUNILENBQUM7UUFDRixNQUFNLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUM7WUFDdkIsSUFBSSxFQUFFLEtBQUssQ0FBQyxJQUFJO1lBQ2hCLE9BQU8sRUFBRSxLQUFLLENBQUMsT0FBTztZQUN0QixPQUFPLEVBQUUsQ0FBQywyQkFBMkIsQ0FBQztTQUN2QyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBQUMsSUFBSSxDQUFDLENBQUM7UUFDTixNQUFNLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDbEMsQ0FBQztJQUVELEVBQUUsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7UUFDYixNQUFNLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDakQsQ0FBQztJQUNELE1BQU0sQ0FBQyxNQUFNLENBQUM7QUFDaEIsQ0FBQyxDQUFDIiwiZmlsZSI6InBhY2thZ2VzL3dlYnBhY2stYmFiZWwvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCB7IGV4aXN0c1N5bmMgfSA9IHJlcXVpcmUoJ2ZzJyk7XG5jb25zdCB7IHJlc29sdmUgfSA9IHJlcXVpcmUoJ3BhdGgnKTtcbmNvbnN0IHsgc3RyaW5naWZ5IH0gPSBKU09OO1xuXG5jb25zdCBub2RlTW9kdWxlcyA9IHJlc29sdmUoX19kaXJuYW1lLCAnbm9kZV9tb2R1bGVzJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gKFxuICBjb25maWcsXG4gIHsgaXNQcm9kLCBpc1dlYiwgaXNFbGVjdHJvbiwgaXNEZXYsIGlzTm9kZSwgYXBwUm9vdCwgaXNMaW5rZWQsIG1vZGlmeVZhcnMgfVxuKSA9PiB7XG4gIGNvbnN0IGJhYmVsID0ge1xuICAgIHRlc3Q6IC9cXC4oanN8anN4KSQvLFxuICAgIGxvYWRlcjogJ2JhYmVsLWxvYWRlcicsXG4gICAgaW5jbHVkZTogW1xuICAgICAgLy8gcGF0aC5yZXNvbHZlKGFwcFJvb3QsICdzZXJ2ZXInKSxcbiAgICAgIC8vIHBhdGgucmVzb2x2ZShvbHltcFJvb3QsICdncmFwaHFsJyksXG4gICAgICBwYXRoLnJlc29sdmUoYXBwUm9vdCwgJ2FwcCcpLFxuICAgICAgcGF0aC5yZXNvbHZlKGFwcFJvb3QsICdzZXJ2ZXInKSxcbiAgICBdLFxuICAgIG9wdGlvbnM6IHtcbiAgICAgIGNhY2hlRGlyZWN0b3J5OiBmYWxzZSxcbiAgICAgIHByZXNldHM6IFsncmVhY3QnXSxcbiAgICAgIHBsdWdpbnM6IFtcbiAgICAgICAgJ3N5bnRheC1keW5hbWljLWltcG9ydCcsXG4gICAgICAgICd0cmFuc2Zvcm0tb2JqZWN0LXJlc3Qtc3ByZWFkJyxcbiAgICAgICAgLy8gJ3RyYW5zZm9ybS1lczIwMTUtZGVzdHJ1Y3R1cmluZycsXG4gICAgICAgICd0cmFuc2Zvcm0tZGVjb3JhdG9ycy1sZWdhY3knLFxuICAgICAgICAndHJhbnNmb3JtLWNsYXNzLXByb3BlcnRpZXMnLFxuICAgICAgICBbJ2ltcG9ydCcsIHsgbGlicmFyeU5hbWU6ICdhbnRkJywgc3R5bGU6IHRydWUgfV0sXG4gICAgICBdLFxuICAgIH0sXG4gIH07XG4gIGlmIChpc05vZGUpIHtcbiAgICBiYWJlbC5vcHRpb25zLnByZXNldHMucHVzaChbXG4gICAgICAnZW52JyxcbiAgICAgIHsgbW9kdWxlczogZmFsc2UsIGxvb3NlOiB0cnVlLCB0YXJnZXRzOiB7IG5vZGU6ICdjdXJyZW50JyB9IH0sXG4gICAgXSk7XG4gIH0gZWxzZSBpZiAoaXNEZXYpIHtcbiAgICBiYWJlbC5vcHRpb25zLnByZXNldHMucHVzaChbJ2xhdGVzdCcsIHsgbW9kdWxlczogZmFsc2UsIGxvb3NlOiB0cnVlIH1dKTtcbiAgICBiYWJlbC5vcHRpb25zLnBsdWdpbnMucHVzaCgncmVhY3QtaG90LWxvYWRlci9iYWJlbCcpO1xuICB9IGVsc2Uge1xuICAgIGJhYmVsLm9wdGlvbnMucHJlc2V0cy5wdXNoKFsnbGF0ZXN0JywgeyBtb2R1bGVzOiBmYWxzZSwgbG9vc2U6IHRydWUgfV0pO1xuICAgIGJhYmVsLm9wdGlvbnMucGx1Z2lucy5wdXNoKFtcbiAgICAgICd0cmFuc2Zvcm0taW1wb3J0cycsXG4gICAgICB7XG4gICAgICAgIGFudGQ6IHtcbiAgICAgICAgICB0cmFuc2Zvcm06ICdhbnRkL2xpYi8ke21lbWJlcn0nLFxuICAgICAgICAgIGtlYmFiQ2FzZTogdHJ1ZSxcbiAgICAgICAgICBwcmV2ZW50RnVsbEltcG9ydDogdHJ1ZSxcbiAgICAgICAgfSxcbiAgICAgICAgbG9kYXNoOiB7XG4gICAgICAgICAgdHJhbnNmb3JtOiAnbG9kYXNoLyR7bWVtYmVyfScsXG4gICAgICAgICAgcHJldmVudEZ1bGxJbXBvcnQ6IHRydWUsXG4gICAgICAgIH0sXG4gICAgICAgICdkYXRlLWZucyc6IHtcbiAgICAgICAgICB0cmFuc2Zvcm06ICdkYXRlLWZucy8ke21lbWJlcn0nLFxuICAgICAgICAgIHByZXZlbnRGdWxsSW1wb3J0OiB0cnVlLFxuICAgICAgICAgIHNuYWtlQ2FzZTogdHJ1ZSxcbiAgICAgICAgfSxcbiAgICAgICAgJ29seW1wLWljb25zJzoge1xuICAgICAgICAgIHRyYW5zZm9ybTogJ29seW1wLWljb25zL2ZhNS9saWIvJHttZW1iZXJ9JyxcbiAgICAgICAgICBrZWJhYkNhc2U6IHRydWUsXG4gICAgICAgICAgcHJldmVudEZ1bGxJbXBvcnQ6IHRydWUsXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgIF0pO1xuICAgIC8vIGJhYmVsLm9wdGlvbnMucHJlc2V0cy5wdXNoKFsncmVhY3Qtb3B0aW1pemUnXSk7XG4gIH1cblxuICBpZiAoaXNEZXYpIHtcbiAgICBjb25zdCBIYXBweVBhY2sgPSByZXF1aXJlKCdoYXBweXBhY2snKTtcbiAgICBjb25maWcucGx1Z2lucy5wdXNoKFxuICAgICAgbmV3IEhhcHB5UGFjayh7XG4gICAgICAgIGlkOiAnYmFiZWwnLFxuICAgICAgICB0aHJlYWRzOiA0LFxuICAgICAgICBsb2FkZXJzOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgcGF0aDogYmFiZWwubG9hZGVyLFxuICAgICAgICAgICAgcXVlcnk6IEpTT04uc3RyaW5naWZ5KGJhYmVsLm9wdGlvbnMpLFxuICAgICAgICAgIH0sXG4gICAgICAgIF0sXG4gICAgICB9KVxuICAgICk7XG4gICAgY29uZmlnLm1vZHVsZS5ydWxlcy5wdXNoKHtcbiAgICAgIHRlc3Q6IGJhYmVsLnRlc3QsXG4gICAgICBpbmNsdWRlOiBiYWJlbC5pbmNsdWRlLFxuICAgICAgbG9hZGVyczogWydoYXBweXBhY2svbG9hZGVyP2lkPWJhYmVsJ10sXG4gICAgfSk7XG4gIH0gZWxzZSB7XG4gICAgY29uZmlnLm1vZHVsZS5ydWxlcy5wdXNoKGJhYmVsKTtcbiAgfVxuXG4gIGlmIChpc0xpbmtlZCkge1xuICAgIGNvbmZpZy5yZXNvbHZlTG9hZGVyLm1vZHVsZXMucHVzaChub2RlTW9kdWxlcyk7XG4gIH1cbiAgcmV0dXJuIGNvbmZpZztcbn07XG4iXX0=
