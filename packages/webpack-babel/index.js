var resolve = require('path').resolve;
var PrepackWebpackPlugin = require('prepack-webpack-plugin').default;
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
    if (isProd) {
    }
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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhY2thZ2VzL3dlYnBhY2stYmFiZWwvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQVEsSUFBQSxpQ0FBTyxDQUFxQjtBQUNwQyxJQUFNLG9CQUFvQixHQUFHLE9BQU8sQ0FBQyx3QkFBd0IsQ0FBQyxDQUFDLE9BQU8sQ0FBQztBQUV2RSxJQUFNLFdBQVcsR0FBRyxPQUFPLENBQUMsU0FBUyxFQUFFLGNBQWMsQ0FBQyxDQUFDO0FBRXZELE1BQU0sQ0FBQyxPQUFPLEdBQUcsVUFBQyxNQUFNLEVBQUUsT0FBTztJQUU3QixJQUFBLHVCQUFNLEVBQ04scUJBQUssRUFDTCwrQkFBVSxFQUNWLHFCQUFLLEVBQ0wsdUJBQU0sRUFDTix5QkFBTyxFQUNQLDJCQUFRLEVBQ1IsK0JBQVUsRUFDVix1QkFBTSxFQUNOLHVCQUFNLENBQ0k7SUFDWixJQUFNLGFBQWEsR0FBRyxVQUFDLElBQUksRUFBRSxNQUFXO1FBQVgsdUJBQUEsRUFBQSxXQUFXO1FBQ3RDLEVBQUUsQ0FBQyxDQUFDLFFBQVEsQ0FBQztZQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsU0FBUyxFQUFFLGNBQWMsRUFBRSxLQUFHLE1BQU0sR0FBRyxJQUFNLENBQUMsQ0FBQztRQUM1RSxJQUFJO1lBQUMsTUFBTSxDQUFDLElBQUksQ0FBQztJQUNuQixDQUFDLENBQUM7SUFFRixFQUFFLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO0lBTWIsQ0FBQztJQUVELElBQU0sWUFBWSxHQUFHO1FBQ25CLGNBQWMsRUFBRSxLQUFLO1FBQ3JCLE9BQU8sRUFBRSxDQUFDLGFBQWEsQ0FBQyxPQUFPLEVBQUUsZUFBZSxDQUFDLENBQUM7UUFDbEQsT0FBTyxFQUFFO1lBQ1AsYUFBYSxDQUFDLHVCQUF1QixFQUFFLGVBQWUsQ0FBQztZQUN2RCxhQUFhLENBQUMsOEJBQThCLEVBQUUsZUFBZSxDQUFDO1lBRTlELGFBQWEsQ0FBQyw2QkFBNkIsRUFBRSxlQUFlLENBQUM7WUFDN0QsYUFBYSxDQUFDLDRC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eC5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHsgcmVzb2x2ZSB9ID0gcmVxdWlyZSgncGF0aCcpO1xuY29uc3QgUHJlcGFja1dlYnBhY2tQbHVnaW4gPSByZXF1aXJlKCdwcmVwYWNrLXdlYnBhY2stcGx1Z2luJykuZGVmYXVsdDtcblxuY29uc3Qgbm9kZU1vZHVsZXMgPSByZXNvbHZlKF9fZGlybmFtZSwgJ25vZGVfbW9kdWxlcycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IChjb25maWcsIG9wdGlvbnMpID0+IHtcbiAgY29uc3Qge1xuICAgIGlzUHJvZCxcbiAgICBpc1dlYixcbiAgICBpc0VsZWN0cm9uLFxuICAgIGlzRGV2LFxuICAgIGlzTm9kZSxcbiAgICBhcHBSb290LFxuICAgIGlzTGlua2VkLFxuICAgIG1vZGlmeVZhcnMsXG4gICAgdGFyZ2V0LFxuICAgIGZvbGRlcixcbiAgfSA9IG9wdGlvbnM7XG4gIGNvbnN0IHJlc29sdmVQbHVnaW4gPSAobmFtZSwgcHJlZml4ID0gJycpID0+IHtcbiAgICBpZiAoaXNMaW5rZWQpIHJldHVybiByZXNvbHZlKF9fZGlybmFtZSwgJ25vZGVfbW9kdWxlcycsIGAke3ByZWZpeH0ke25hbWV9YCk7XG4gICAgZWxzZSByZXR1cm4gbmFtZTtcbiAgfTtcblxuICBpZiAoaXNQcm9kKSB7XG4gICAgLypjb25maWcucGx1Z2lucy5wdXNoKFxuICAgICAgbmV3IFByZXBhY2tXZWJwYWNrUGx1Z2luKHtcbiAgICAgICAgdGVzdDogL1xcLihqc3xqc3h8dHN8dHN4KSQvLFxuICAgICAgfSlcbiAgICApOyovXG4gIH1cblxuICBjb25zdCBiYWJlbE9wdGlvbnMgPSB7XG4gICAgY2FjaGVEaXJlY3Rvcnk6IGZhbHNlLFxuICAgIHByZXNldHM6IFtyZXNvbHZlUGx1Z2luKCdyZWFjdCcsICdiYWJlbC1wcmVzZXQtJyldLFxuICAgIHBsdWdpbnM6IFtcbiAgICAgIHJlc29sdmVQbHVnaW4oJ3N5bnRheC1keW5hbWljLWltcG9ydCcsICdiYWJlbC1wbHVnaW4tJyksXG4gICAgICByZXNvbHZlUGx1Z2luKCd0cmFuc2Zvcm0tb2JqZWN0LXJlc3Qtc3ByZWFkJywgJ2JhYmVsLXBsdWdpbi0nKSxcbiAgICAgIC8vICd0cmFuc2Zvcm0tZXMyMDE1LWRlc3RydWN0dXJpbmcnLFxuICAgICAgcmVzb2x2ZVBsdWdpbigndHJhbnNmb3JtLWRlY29yYXRvcnMtbGVnYWN5JywgJ2JhYmVsLXBsdWdpbi0nKSxcbiAgICAgIHJlc29sdmVQbHVnaW4oJ3RyYW5zZm9ybS1jbGFzcy1wcm9wZXJ0aWVzJywgJ2JhYmVsLXBsdWdpbi0nKSxcbiAgICAgIFtcbiAgICAgICAgcmVzb2x2ZVBsdWdpbignaW1wb3J0JywgJ2JhYmVsLXBsdWdpbi0nKSxcbiAgICAgICAgeyBsaWJyYXJ5TmFtZTogJ2FudGQnLCBzdHlsZTogdHJ1ZSB9LFxuICAgICAgXSxcbiAgICBdLFxuICB9O1xuICBpZiAoaXNOb2RlKSB7XG4gICAgYmFiZWxPcHRpb25zLnByZXNldHMucHVzaChbXG4gICAgICByZXNvbHZlUGx1Z2luKCdlbnYnLCAnYmFiZWwtcHJlc2V0LScpLFxuICAgICAgeyBtb2R1bGVzOiBmYWxzZSwgbG9vc2U6IHRydWUsIHRhcmdldHM6IHsgbm9kZTogJ2N1cnJlbnQnIH0gfSxcbiAgICBdKTtcbiAgfSBlbHNlIGlmIChpc0Rldikge1xuICAgIGJhYmVsT3B0aW9ucy5wcmVzZXRzLnB1c2goW1xuICAgICAgcmVzb2x2ZVBsdWdpbignbGF0ZXN0JywgJ2JhYmVsLXByZXNldC0nKSxcbiAgICAgIHsgbW9kdWxlczogZmFsc2UsIGxvb3NlOiB0cnVlIH0sXG4gICAgXSk7XG4gICAgYmFiZWxPcHRpb25zLnBsdWdpbnMucHVzaChyZXNvbHZlUGx1Z2luKCdyZWFjdC1ob3QtbG9hZGVyL2JhYmVsJykpO1xuICB9IGVsc2Uge1xuICAgIGJhYmVsT3B0aW9ucy5wcmVzZXRzLnB1c2goW1xuICAgICAgcmVzb2x2ZVBsdWdpbignbGF0ZXN0JywgJ2JhYmVsLXByZXNldC0nKSxcbiAgICAgIHsgbW9kdWxlczogZmFsc2UsIGxvb3NlOiB0cnVlIH0sXG4gICAgXSk7XG4gICAgYmFiZWxPcHRpb25zLnBsdWdpbnMucHVzaChbXG4gICAgICByZXNvbHZlUGx1Z2luKCd0cmFuc2Zvcm0taW1wb3J0cycsICdiYWJlbC1wbHVnaW4tJyksXG4gICAgICB7XG4gICAgICAgIGFudGQ6IHtcbiAgICAgICAgICB0cmFuc2Zvcm06ICdhbnRkL2xpYi8ke21lbWJlcn0nLFxuICAgICAgICAgIGtlYmFiQ2FzZTogdHJ1ZSxcbiAgICAgICAgICBwcmV2ZW50RnVsbEltcG9ydDogdHJ1ZSxcbiAgICAgICAgfSxcbiAgICAgICAgbG9kYXNoOiB7XG4gICAgICAgICAgdHJhbnNmb3JtOiAnbG9kYXNoLyR7bWVtYmVyfScsXG4gICAgICAgICAgcHJldmVudEZ1bGxJbXBvcnQ6IHRydWUsXG4gICAgICAgIH0sXG4gICAgICAgICdkYXRlLWZucyc6IHtcbiAgICAgICAgICB0cmFuc2Zvcm06ICdkYXRlLWZucy8ke21lbWJlcn0nLFxuICAgICAgICAgIHByZXZlbnRGdWxsSW1wb3J0OiB0cnVlLFxuICAgICAgICAgIHNuYWtlQ2FzZTogdHJ1ZSxcbiAgICAgICAgfSxcbiAgICAgICAgJ29seW1wLWljb25zJzoge1xuICAgICAgICAgIHRyYW5zZm9ybTogJ29seW1wLWljb25zL2ZhNS9saWIvJHttZW1iZXJ9JyxcbiAgICAgICAgICBrZWJhYkNhc2U6IHRydWUsXG4gICAgICAgICAgcHJldmVudEZ1bGxJbXBvcnQ6IHRydWUsXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgIF0pO1xuICAgIC8vIGJhYmVsLm9wdGlvbnMucHJlc2V0cy5wdXNoKFsncmVhY3Qtb3B0aW1pemUnXSk7XG4gIH1cblxuICBjb25maWcubW9kdWxlLnJ1bGVzLnB1c2goe1xuICAgIHRlc3Q6IC9cXC4oanN8anN4fHRzfHRzeCkkLyxcbiAgICB1c2U6IFtcbiAgICAgIHtcbiAgICAgICAgbG9hZGVyOiAnY2FjaGUtbG9hZGVyJyxcbiAgICAgICAgb3B0aW9uczoge1xuICAgICAgICAgIGNhY2hlRGlyZWN0b3J5OiByZXNvbHZlKGFwcFJvb3QsIGZvbGRlciwgdGFyZ2V0LCAnY2FjaGUtYmFiZWwnKSxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGxvYWRlcjogJ2JhYmVsLWxvYWRlcicsXG4gICAgICAgIG9wdGlvbnM6IGJhYmVsT3B0aW9ucyxcbiAgICAgIH0sXG4gICAgXSxcbiAgICBpbmNsdWRlOiBbXG4gICAgICAvLyBwYXRoLnJlc29sdmUoYXBwUm9vdCwgJ3NlcnZlcicpLFxuICAgICAgLy8gcGF0aC5yZXNvbHZlKG9seW1wUm9vdCwgJ2dyYXBocWwnKSxcbiAgICAgIHJlc29sdmUoYXBwUm9vdCwgJ2FwcCcpLFxuICAgICAgcmVzb2x2ZShhcHBSb290LCAnc2VydmVyJyksXG4gICAgXSxcbiAgfSk7XG5cbiAgaWYgKGlzTGlua2VkKSB7XG4gICAgY29uZmlnLnJlc29sdmVMb2FkZXIubW9kdWxlcy5wdXNoKG5vZGVNb2R1bGVzKTtcbiAgfVxuICByZXR1cm4gY29uZmlnO1xufTtcbiJdfQ==
