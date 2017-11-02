const gulp = require('gulp');
const sourcemaps = require('gulp-sourcemaps');
const plumber = require('gulp-plumber');
const newer = require('gulp-changed');
const babel = require('gulp-babel');
const watch = require('gulp-watch');
const debug = require('gulp-debug');

const src = [
  'packages/**/*.es6',
  'packages/**/.storybook/*.es6',
  'packages/**/.stories/*.es6',
  '!packages/*/node_modules/**/*',
  '!packages/*/node_modules/**/*',
  '!packages/*/node_modules/**',
  '!packages/*/node_modules',
];
const dest = '.';

const babelOptions = {
  presets: [
    'react',
    [
      'latest',
      {
        es2015: {
          // modules: 'commonjs',
          modules: false,
        },
      },
    ],
  ],
  plugins: [
    'syntax-dynamic-import',
    'transform-decorators-legacy',
    'transform-object-rest-spread',
    'transform-class-properties',
    'transform-object-rest-spread',
    'transform-react-constant-elements',
    'transform-react-pure-class-to-function',
    'lodash',
    ['import', { libraryName: 'antd', style: true }],
    [
      'transform-imports',
      {
        antd: {
          transform: 'antd/lib/${member}',
          kebabCase: true,
          preventFullImport: true,
        },
        'date-fns': {
          transform: 'date-fns/${member}',
          preventFullImport: true,
          snakeCase: true,
        },
        'olymp-icons': {
          transform: 'olymp-icons/fa4/lib/${member}',
          kebabCase: true,
          preventFullImport: true,
        },
      },
    ],
  ],
};

const compile = x =>
  x
    .pipe(plumber())
    .pipe(debug())
    .pipe(newer(dest, { extension: '.js' }))
    .pipe(sourcemaps.init())
    .pipe(babel(babelOptions))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(dest));

gulp.task('watch', () => {
  compile(watch(src, { ignoreInitial: false, base: dest, dot: true }));
});

gulp.task('default', ['es6', 'watch']);
