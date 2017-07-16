var existsSync = require('fs').existsSync;
var resolve = require('path').resolve;
var stringify = JSON.stringify;
var nodeModules = resolve(__dirname, 'node_modules');
module.exports = function (config, options) {
    var isProd = options.isProd, isWeb = options.isWeb, isElectron = options.isElectron, isDev = options.isDev, isNode = options.isNode, appRoot = options.appRoot, isLinked = options.isLinked, modifyVars = options.modifyVars, target = options.target, folder = options.folder;
    var resolvePlugin = function (name, prefix) {
        if (prefix === void 0) { prefix = ''; }
        if (isLinked)
            return resolve(__dirname, 'node_modules', "" + prefix + name);
        else
            return name;
    };
    var babelOptions = {
        cacheDirectory: false,
        presets: [resolvePlugin('react', 'babel-preset-')],
        plugins: [
            resolvePlugin('syntax-dynamic-import', 'babel-plugin-'),
            resolvePlugin('transform-object-rest-spread', 'babel-plugin-'),
            resolvePlugin('transform-decorators-legacy', 'babel-plugin-'),
            resolvePlugin('transform-class-properties', 'babel-plugin-'),
            [
                resolvePlugin('import', 'babel-plugin-'),
                { libraryName: 'antd', style: true },
            ],
        ],
    };
    if (isNode) {
        babelOptions.presets.push([
            resolvePlugin('env', 'babel-preset-'),
            { modules: false, loose: true, targets: { node: 'current' } },
        ]);
    }
    else if (isDev) {
        babelOptions.presets.push([
            resolvePlugin('latest', 'babel-preset-'),
            { modules: false, loose: true },
        ]);
        babelOptions.plugins.push(resolvePlugin('react-hot-loader/babel'));
    }
    else {
        babelOptions.presets.push([
            resolvePlugin('latest', 'babel-preset-'),
            { modules: false, loose: true },
        ]);
        babelOptions.plugins.push([
            resolvePlugin('transform-imports', 'babel-plugin-'),
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
    config.module.rules.push({
        test: /\.(js|jsx|ts|tsx)$/,
        use: [
            {
                loader: 'cache-loader',
                options: {
                    cacheDirectory: resolve(appRoot, folder, target, 'cache-babel'),
                },
            },
            {
                loader: 'babel-loader',
                options: babelOptions,
            },
        ],
        include: [
            resolve(appRoot, 'app'),
            resolve(appRoot, 'server'),
        ],
    });
    if (isLinked) {
        config.resolveLoader.modules.push(nodeModules);
    }
    return config;
};
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhY2thZ2VzL3dlYnBhY2stYmFiZWwvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQVEsSUFBQSxxQ0FBVSxDQUFtQjtBQUM3QixJQUFBLGlDQUFPLENBQXFCO0FBQzVCLElBQUEsMEJBQVMsQ0FBVTtBQUUzQixJQUFNLFdBQVcsR0FBRyxPQUFPLENBQUMsU0FBUyxFQUFFLGNBQWMsQ0FBQyxDQUFDO0FBRXZELE1BQU0sQ0FBQyxPQUFPLEdBQUcsVUFBQyxNQUFNLEVBQUUsT0FBTztJQUU3QixJQUFBLHVCQUFNLEVBQ04scUJBQUssRUFDTCwrQkFBVSxFQUNWLHFCQUFLLEVBQ0wsdUJBQU0sRUFDTix5QkFBTyxFQUNQLDJCQUFRLEVBQ1IsK0JBQVUsRUFDVix1QkFBTSxFQUNOLHVCQUFNLENBQ0k7SUFDWixJQUFNLGFBQWEsR0FBRyxVQUFDLElBQUksRUFBRSxNQUFXO1FBQVgsdUJBQUEsRUFBQSxXQUFXO1FBQ3RDLEVBQUUsQ0FBQyxDQUFDLFFBQVEsQ0FBQztZQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsU0FBUyxFQUFFLGNBQWMsRUFBRSxLQUFHLE1BQU0sR0FBRyxJQUFNLENBQUMsQ0FBQztRQUM1RSxJQUFJO1lBQUMsTUFBTSxDQUFDLElBQUksQ0FBQztJQUNuQixDQUFDLENBQUM7SUFFRixJQUFNLFlBQVksR0FBRztRQUNuQixjQUFjLEVBQUUsS0FBSztRQUNyQixPQUFPLEVBQUUsQ0FBQyxhQUFhLENBQUMsT0FBTyxFQUFFLGVBQWUsQ0FBQyxDQUFDO1FBQ2xELE9BQU8sRUFBRTtZQUNQLGFBQWEsQ0FBQyx1QkFBdUIsRUFBRSxlQUFlLENBQUM7WUFDdkQsYUFBYSxDQUFDLDhCQUE4QixFQUFFLGVBQWUsQ0FBQztZQUU5RCxhQUFhLENBQUMsNkJBQTZCLEVBQUUsZUFBZSxDQUFDO1lBQzdELGFBQWEsQ0FBQyw0QkFBNEIsRUFBRSxlQUFlLENBQUM7WUFDNUQ7Z0JBQ0UsYUFBYSxDQUFDLFFBQVEsRUFBRSxlQUFlLENBQUM7Z0JBQ3hDLEVBQUUsV0FBVyxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFO2FBQ3JDO1NBQ0Y7S0FDRixDQUFDO0lBQ0YsRUFBRSxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztRQUNYLFlBQVksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDO1lBQ3hCLGFBQWEsQ0FBQyxLQUFLLEVBQUUsZUFBZSxDQUFDO1lBQ3JDLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRSxFQUFFLElBQUksRUFBRSxTQUFTLEVBQUUsRUFBRTtTQUM5RCxDQUFDLENBQUM7SUFDTCxDQUFDO0lBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7UUFDakIsWUFBWSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUM7WUFDeEIsYUFBYSxDQUFDLFFBQVEsRUFBRSxlQUFlLENBQUM7WUFDeEMsRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUU7U0FDaEMsQ0FBQyxDQUFDO1FBQ0gsWUFBWSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLHdCQUF3QixDQUFDLENBQUMsQ0FBQztJQUNyRSxDQUFDO0lBQUMsSUFBSSxDQUFDLENBQUM7UUFDTixZQUFZLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQztZQUN4QixhQUFhLENBQUMsUUFBUSxFQUFFLGVBQWUsQ0FBQztZQUN4QyxFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRTtTQUNoQyxDQUFDLENBQUM7UUFDSCxZQUFZLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQztZQUN4QixhQUFhLENBQUMsbUJBQW1CLEVBQUUsZUFBZSxDQUFDO1lBQ25EO2dCQUNFLElBQUksRUFBRTtvQkFDSixTQUFTLEVBQUUsb0JBQW9CO29CQUMvQixTQUFTLEVBQUUsSUFBSTtvQkFDZixpQkFBaUIsRUFBRSxJQUFJO2lCQUN4QjtnQkFDRCxNQUFNLEVBQUU7b0JBQ04sU0FBUyxFQUFFLGtCQUFrQjtvQkFDN0IsaUJBQWlCLEVBQUUsSUFBSTtpQkFDeEI7Z0JBQ0QsVUFBVSxFQUFFO29CQUNWLFNBQVMsRUFBRSxvQkFBb0I7b0JBQy9CLGlCQUFpQixFQUFFLElBQUk7b0JBQ3ZCLFNBQVMsRUFBRSxJQUFJO2lCQUNoQjtnQkFDRCxhQUFhLEVBQUU7b0JBQ2IsU0FBUyxFQUFFLCtCQUErQjtvQkFDMUMsU0FBUyxFQUFFLElBQUk7b0JBQ2YsaUJBQWlCLEVBQUUsSUFBSTtpQkFDeEI7YUFDRjtTQUNGLENBQUMsQ0FBQztJQUVMLENBQUM7SUFFRCxNQUFNLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUM7UUFDdkIsSUFBSSxFQUFFLG9CQUFvQjtRQUMxQixHQUFHLEVBQUU7WUFDSDtnQkFDRSxNQUFNLEVBQUUsY0FBYztnQkFDdEIsT0FBTyxFQUFFO29CQUNQLGNBQWMsRUFBRSxPQUFPLENBQUMsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsYUFBYSxDQUFDO2lCQUNoRTthQUNGO1lBQ0Q7Z0JBQ0UsTUFBTSxFQUFFLGNBQWM7Z0JBQ3RCLE9BQU8sRUFBRSxZQUFZO2FBQ3RCO1NBQ0Y7UUFDRCxPQUFPLEVBQUU7WUFHUCxPQUFPLENBQUMsT0FBTyxFQUFFLEtBQUssQ0FBQztZQUN2QixPQUFPLENBQUMsT0FBTyxFQUFFLFFBQVEsQ0FBQztTQUMzQjtLQUNGLENBQUMsQ0FBQztJQUVILEVBQUUsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7UUFDYixNQUFNLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDakQsQ0FBQztJQUNELE1BQU0sQ0FBQyxNQUFNLENBQUM7QUFDaEIsQ0FBQyxDQUFDIiwiZmlsZSI6InBhY2thZ2VzL3dlYnBhY2stYmFiZWwvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCB7IGV4aXN0c1N5bmMgfSA9IHJlcXVpcmUoJ2ZzJyk7XG5jb25zdCB7IHJlc29sdmUgfSA9IHJlcXVpcmUoJ3BhdGgnKTtcbmNvbnN0IHsgc3RyaW5naWZ5IH0gPSBKU09OO1xuXG5jb25zdCBub2RlTW9kdWxlcyA9IHJlc29sdmUoX19kaXJuYW1lLCAnbm9kZV9tb2R1bGVzJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gKGNvbmZpZywgb3B0aW9ucykgPT4ge1xuICBjb25zdCB7XG4gICAgaXNQcm9kLFxuICAgIGlzV2ViLFxuICAgIGlzRWxlY3Ryb24sXG4gICAgaXNEZXYsXG4gICAgaXNOb2RlLFxuICAgIGFwcFJvb3QsXG4gICAgaXNMaW5rZWQsXG4gICAgbW9kaWZ5VmFycyxcbiAgICB0YXJnZXQsXG4gICAgZm9sZGVyLFxuICB9ID0gb3B0aW9ucztcbiAgY29uc3QgcmVzb2x2ZVBsdWdpbiA9IChuYW1lLCBwcmVmaXggPSAnJykgPT4ge1xuICAgIGlmIChpc0xpbmtlZCkgcmV0dXJuIHJlc29sdmUoX19kaXJuYW1lLCAnbm9kZV9tb2R1bGVzJywgYCR7cHJlZml4fSR7bmFtZX1gKTtcbiAgICBlbHNlIHJldHVybiBuYW1lO1xuICB9O1xuXG4gIGNvbnN0IGJhYmVsT3B0aW9ucyA9IHtcbiAgICBjYWNoZURpcmVjdG9yeTogZmFsc2UsXG4gICAgcHJlc2V0czogW3Jlc29sdmVQbHVnaW4oJ3JlYWN0JywgJ2JhYmVsLXByZXNldC0nKV0sXG4gICAgcGx1Z2luczogW1xuICAgICAgcmVzb2x2ZVBsdWdpbignc3ludGF4LWR5bmFtaWMtaW1wb3J0JywgJ2JhYmVsLXBsdWdpbi0nKSxcbiAgICAgIHJlc29sdmVQbHVnaW4oJ3RyYW5zZm9ybS1vYmplY3QtcmVzdC1zcHJlYWQnLCAnYmFiZWwtcGx1Z2luLScpLFxuICAgICAgLy8gJ3RyYW5zZm9ybS1lczIwMTUtZGVzdHJ1Y3R1cmluZycsXG4gICAgICByZXNvbHZlUGx1Z2luKCd0cmFuc2Zvcm0tZGVjb3JhdG9ycy1sZWdhY3knLCAnYmFiZWwtcGx1Z2luLScpLFxuICAgICAgcmVzb2x2ZVBsdWdpbigndHJhbnNmb3JtLWNsYXNzLXByb3BlcnRpZXMnLCAnYmFiZWwtcGx1Z2luLScpLFxuICAgICAgW1xuICAgICAgICByZXNvbHZlUGx1Z2luKCdpbXBvcnQnLCAnYmFiZWwtcGx1Z2luLScpLFxuICAgICAgICB7IGxpYnJhcnlOYW1lOiAnYW50ZCcsIHN0eWxlOiB0cnVlIH0sXG4gICAgICBdLFxuICAgIF0sXG4gIH07XG4gIGlmIChpc05vZGUpIHtcbiAgICBiYWJlbE9wdGlvbnMucHJlc2V0cy5wdXNoKFtcbiAgICAgIHJlc29sdmVQbHVnaW4oJ2VudicsICdiYWJlbC1wcmVzZXQtJyksXG4gICAgICB7IG1vZHVsZXM6IGZhbHNlLCBsb29zZTogdHJ1ZSwgdGFyZ2V0czogeyBub2RlOiAnY3VycmVudCcgfSB9LFxuICAgIF0pO1xuICB9IGVsc2UgaWYgKGlzRGV2KSB7XG4gICAgYmFiZWxPcHRpb25zLnByZXNldHMucHVzaChbXG4gICAgICByZXNvbHZlUGx1Z2luKCdsYXRlc3QnLCAnYmFiZWwtcHJlc2V0LScpLFxuICAgICAgeyBtb2R1bGVzOiBmYWxzZSwgbG9vc2U6IHRydWUgfSxcbiAgICBdKTtcbiAgICBiYWJlbE9wdGlvbnMucGx1Z2lucy5wdXNoKHJlc29sdmVQbHVnaW4oJ3JlYWN0LWhvdC1sb2FkZXIvYmFiZWwnKSk7XG4gIH0gZWxzZSB7XG4gICAgYmFiZWxPcHRpb25zLnByZXNldHMucHVzaChbXG4gICAgICByZXNvbHZlUGx1Z2luKCdsYXRlc3QnLCAnYmFiZWwtcHJlc2V0LScpLFxuICAgICAgeyBtb2R1bGVzOiBmYWxzZSwgbG9vc2U6IHRydWUgfSxcbiAgICBdKTtcbiAgICBiYWJlbE9wdGlvbnMucGx1Z2lucy5wdXNoKFtcbiAgICAgIHJlc29sdmVQbHVnaW4oJ3RyYW5zZm9ybS1pbXBvcnRzJywgJ2JhYmVsLXBsdWdpbi0nKSxcbiAgICAgIHtcbiAgICAgICAgYW50ZDoge1xuICAgICAgICAgIHRyYW5zZm9ybTogJ2FudGQvbGliLyR7bWVtYmVyfScsXG4gICAgICAgICAga2ViYWJDYXNlOiB0cnVlLFxuICAgICAgICAgIHByZXZlbnRGdWxsSW1wb3J0OiB0cnVlLFxuICAgICAgICB9LFxuICAgICAgICBsb2Rhc2g6IHtcbiAgICAgICAgICB0cmFuc2Zvcm06ICdsb2Rhc2gvJHttZW1iZXJ9JyxcbiAgICAgICAgICBwcmV2ZW50RnVsbEltcG9ydDogdHJ1ZSxcbiAgICAgICAgfSxcbiAgICAgICAgJ2RhdGUtZm5zJzoge1xuICAgICAgICAgIHRyYW5zZm9ybTogJ2RhdGUtZm5zLyR7bWVtYmVyfScsXG4gICAgICAgICAgcHJldmVudEZ1bGxJbXBvcnQ6IHRydWUsXG4gICAgICAgICAgc25ha2VDYXNlOiB0cnVlLFxuICAgICAgICB9LFxuICAgICAgICAnb2x5bXAtaWNvbnMnOiB7XG4gICAgICAgICAgdHJhbnNmb3JtOiAnb2x5bXAtaWNvbnMvZmE1L2xpYi8ke21lbWJlcn0nLFxuICAgICAgICAgIGtlYmFiQ2FzZTogdHJ1ZSxcbiAgICAgICAgICBwcmV2ZW50RnVsbEltcG9ydDogdHJ1ZSxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgXSk7XG4gICAgLy8gYmFiZWwub3B0aW9ucy5wcmVzZXRzLnB1c2goWydyZWFjdC1vcHRpbWl6ZSddKTtcbiAgfVxuXG4gIGNvbmZpZy5tb2R1bGUucnVsZXMucHVzaCh7XG4gICAgdGVzdDogL1xcLihqc3xqc3h8dHN8dHN4KSQvLFxuICAgIHVzZTogW1xuICAgICAge1xuICAgICAgICBsb2FkZXI6ICdjYWNoZS1sb2FkZXInLFxuICAgICAgICBvcHRpb25zOiB7XG4gICAgICAgICAgY2FjaGVEaXJlY3Rvcnk6IHJlc29sdmUoYXBwUm9vdCwgZm9sZGVyLCB0YXJnZXQsICdjYWNoZS1iYWJlbCcpLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgbG9hZGVyOiAnYmFiZWwtbG9hZGVyJyxcbiAgICAgICAgb3B0aW9uczogYmFiZWxPcHRpb25zLFxuICAgICAgfSxcbiAgICBdLFxuICAgIGluY2x1ZGU6IFtcbiAgICAgIC8vIHBhdGgucmVzb2x2ZShhcHBSb290LCAnc2VydmVyJyksXG4gICAgICAvLyBwYXRoLnJlc29sdmUob2x5bXBSb290LCAnZ3JhcGhxbCcpLFxuICAgICAgcmVzb2x2ZShhcHBSb290LCAnYXBwJyksXG4gICAgICByZXNvbHZlKGFwcFJvb3QsICdzZXJ2ZXInKSxcbiAgICBdLFxuICB9KTtcblxuICBpZiAoaXNMaW5rZWQpIHtcbiAgICBjb25maWcucmVzb2x2ZUxvYWRlci5tb2R1bGVzLnB1c2gobm9kZU1vZHVsZXMpO1xuICB9XG4gIHJldHVybiBjb25maWc7XG59O1xuIl19
