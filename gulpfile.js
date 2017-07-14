var path = require('path');
var gulp = require('gulp');
var ts = require('gulp-typescript');
var sourcemaps = require('gulp-sourcemaps');
var plumber = require('gulp-plumber');
var newer = require('gulp-changed');
var tsProject = ts.createProject('tsconfig.json');
var watch = require('gulp-watch');
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
