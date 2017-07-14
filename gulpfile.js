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
