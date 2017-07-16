var resolve = require('path').resolve;
var CheckerPlugin = require('awesome-typescript-loader').CheckerPlugin;
module.exports = function (config, _a) {
    var isProd = _a.isProd, isWeb = _a.isWeb, isElectron = _a.isElectron, isNode = _a.isNode, appRoot = _a.appRoot, isLinked = _a.isLinked, modifyVars = _a.modifyVars;
    if (isProd) {
        config.module.rules.push({
            test: /\.tsx?$/,
            include: [resolve(appRoot, 'app'), resolve(appRoot, 'server')],
            use: [
                {
                    loader: 'awesome-typescript-loader',
                    options: {
                        silent: true,
                        transpileOnly: true,
                        configFileName: resolve(__dirname, 'tsconfig.json'),
                    },
                },
            ],
        });
    }
    else {
        config.module.rules.push({
            test: /\.tsx?$/,
            include: [resolve(appRoot, 'app'), resolve(appRoot, 'server')],
            use: [
                {
                    loader: 'react-hot-loader/webpack',
                },
                {
                    loader: 'awesome-typescript-loader',
                    options: {
                        silent: true,
                        transpileOnly: true,
                        configFileName: resolve(__dirname, 'tsconfig.json'),
                    },
                },
            ],
        });
    }
    if (isLinked) {
        config.resolveLoader.modules.push(nodeModules);
    }
    return config;
};
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhY2thZ2VzL3dlYnBhY2stdHlwZXNjcmlwdC9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBUSxJQUFBLGlDQUFPLENBQXFCO0FBQzVCLElBQUEsa0VBQWEsQ0FBMEM7QUFFL0QsTUFBTSxDQUFDLE9BQU8sR0FBRyxVQUNmLE1BQU0sRUFDTixFQUFvRTtRQUFsRSxrQkFBTSxFQUFFLGdCQUFLLEVBQUUsMEJBQVUsRUFBRSxrQkFBTSxFQUFFLG9CQUFPLEVBQUUsc0JBQVEsRUFBRSwwQkFBVTtJQUVsRSxFQUFFLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO1FBQ1gsTUFBTSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDO1lBQ3ZCLElBQUksRUFBRSxTQUFTO1lBQ2YsT0FBTyxFQUFFLENBQUMsT0FBTyxDQUFDLE9BQU8sRUFBRSxLQUFLLENBQUMsRUFBRSxPQUFPLENBQUMsT0FBTyxFQUFFLFFBQVEsQ0FBQyxDQUFDO1lBQzlELEdBQUcsRUFBRTtnQkFDSDtvQkFDRSxNQUFNLEVBQUUsMkJBQTJCO29CQUNuQyxPQUFPLEVBQUU7d0JBQ1AsTUFBTSxFQUFFLElBQUk7d0JBQ1osYUFBYSxFQUFFLElBQUk7d0JBQ25CLGNBQWMsRUFBRSxPQUFPLENBQUMsU0FBUyxFQUFFLGVBQWUsQ0FBQztxQkFDcEQ7aUJBQ0Y7YUFDRjtTQUNGLENBQUMsQ0FBQztJQUNMLENBQUM7SUFBQyxJQUFJLENBQUMsQ0FBQztRQUNOLE1BQU0sQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQztZQUN2QixJQUFJLEVBQUUsU0FBUztZQUNmLE9BQU8sRUFBRSxDQUFDLE9BQU8sQ0FBQyxPQUFPLEVBQUUsS0FBSyxDQUFDLEVBQUUsT0FBTyxDQUFDLE9BQU8sRUFBRSxRQUFRLENBQUMsQ0FBQztZQUM5RCxHQUFHLEVBQUU7Z0JBQ0g7b0JBQ0UsTUFBTSxFQUFFLDBCQUEwQjtpQkFDbkM7Z0JBQ0Q7b0JBQ0UsTUFBTSxFQUFFLDJCQUEyQjtvQkFDbkMsT0FBTyxFQUFFO3dCQUNQLE1BQU0sRUFBRSxJQUFJO3dCQUNaLGFBQWEsRUFBRSxJQUFJO3dCQUNuQixjQUFjLEVBQUUsT0FBTyxDQUFDLFNBQVMsRUFBRSxlQUFlLENBQUM7cUJBQ3BEO2lCQUNGO2FBQ0Y7U0FDRixDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQsRUFBRSxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztRQUNiLE1BQU0sQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUNqRCxDQUFDO0lBQ0QsTUFBTSxDQUFDLE1BQU0sQ0FBQztBQUNoQixDQUFDLENBQUMiLCJmaWxlIjoicGFja2FnZXMvd2VicGFjay10eXBlc2NyaXB0L2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgeyByZXNvbHZlIH0gPSByZXF1aXJlKCdwYXRoJyk7XG5jb25zdCB7IENoZWNrZXJQbHVnaW4gfSA9IHJlcXVpcmUoJ2F3ZXNvbWUtdHlwZXNjcmlwdC1sb2FkZXInKTtcblxubW9kdWxlLmV4cG9ydHMgPSAoXG4gIGNvbmZpZyxcbiAgeyBpc1Byb2QsIGlzV2ViLCBpc0VsZWN0cm9uLCBpc05vZGUsIGFwcFJvb3QsIGlzTGlua2VkLCBtb2RpZnlWYXJzIH1cbikgPT4ge1xuICBpZiAoaXNQcm9kKSB7XG4gICAgY29uZmlnLm1vZHVsZS5ydWxlcy5wdXNoKHtcbiAgICAgIHRlc3Q6IC9cXC50c3g/JC8sXG4gICAgICBpbmNsdWRlOiBbcmVzb2x2ZShhcHBSb290LCAnYXBwJyksIHJlc29sdmUoYXBwUm9vdCwgJ3NlcnZlcicpXSxcbiAgICAgIHVzZTogW1xuICAgICAgICB7XG4gICAgICAgICAgbG9hZGVyOiAnYXdlc29tZS10eXBlc2NyaXB0LWxvYWRlcicsXG4gICAgICAgICAgb3B0aW9uczoge1xuICAgICAgICAgICAgc2lsZW50OiB0cnVlLFxuICAgICAgICAgICAgdHJhbnNwaWxlT25seTogdHJ1ZSxcbiAgICAgICAgICAgIGNvbmZpZ0ZpbGVOYW1lOiByZXNvbHZlKF9fZGlybmFtZSwgJ3RzY29uZmlnLmpzb24nKSxcbiAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgXSxcbiAgICB9KTtcbiAgfSBlbHNlIHtcbiAgICBjb25maWcubW9kdWxlLnJ1bGVzLnB1c2goe1xuICAgICAgdGVzdDogL1xcLnRzeD8kLyxcbiAgICAgIGluY2x1ZGU6IFtyZXNvbHZlKGFwcFJvb3QsICdhcHAnKSwgcmVzb2x2ZShhcHBSb290LCAnc2VydmVyJyldLFxuICAgICAgdXNlOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBsb2FkZXI6ICdyZWFjdC1ob3QtbG9hZGVyL3dlYnBhY2snLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgbG9hZGVyOiAnYXdlc29tZS10eXBlc2NyaXB0LWxvYWRlcicsXG4gICAgICAgICAgb3B0aW9uczoge1xuICAgICAgICAgICAgc2lsZW50OiB0cnVlLFxuICAgICAgICAgICAgdHJhbnNwaWxlT25seTogdHJ1ZSxcbiAgICAgICAgICAgIGNvbmZpZ0ZpbGVOYW1lOiByZXNvbHZlKF9fZGlybmFtZSwgJ3RzY29uZmlnLmpzb24nKSxcbiAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgXSxcbiAgICB9KTtcbiAgfVxuXG4gIGlmIChpc0xpbmtlZCkge1xuICAgIGNvbmZpZy5yZXNvbHZlTG9hZGVyLm1vZHVsZXMucHVzaChub2RlTW9kdWxlcyk7XG4gIH1cbiAgcmV0dXJuIGNvbmZpZztcbn07XG4iXX0=
