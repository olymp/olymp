const path = require('path');
const gulp = require('gulp');
const ts = require('gulp-typescript');
const sourcemaps = require('gulp-sourcemaps');
const plumber = require('gulp-plumber');
const newer = require('gulp-changed');
const tsProject = ts.createProject('tsconfig.json');
const watch = require('gulp-watch');
const debug = require('gulp-debug');

const src = [
  'packages/**/*.{ts,tsx}',
  '!packages/*/node_modules/**/*',
  '!packages/*/node_modules/**/*',
  '!packages/*/node_modules/**',
  '!packages/*/node_modules',
];
const dest = '.';

const compile = x =>
  x
    .pipe(plumber())
    .pipe(debug())
    .pipe(newer(dest, { extension: '.js' }))
    .pipe(sourcemaps.init())
    .pipe(tsProject())
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(dest));

gulp.task('tsc', () => {
  return compile(
    gulp.src(src, {
      base: dest,
    })
  );
});

gulp.task('watch', () => {
  return compile(watch(src, { ignoreInitial: true, base: dest }));
});

var rollup = require('gulp-better-rollup');
var babel = require('rollup-plugin-babel');

gulp.task('lib-build', () => {
  gulp
    .src('packages/athena/index.js')
    .pipe(sourcemaps.init())
    .pipe(
      rollup(
        {
          // notice there is no `entry` option as rollup integrates into gulp pipeline
          plugins: [babel()],
        },
        {
          // also rollups `sourceMap` option is replaced by gulp-sourcemaps plugin
          format: 'iife',
        }
      )
    )
    // inlining the sourcemap into the exported .js file
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('dist'));
});
