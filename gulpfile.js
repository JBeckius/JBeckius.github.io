'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var neat = require('node-neat').includePaths;
var webserver = require('gulp-webserver');

gulp.task('webserver', function() {
  gulp.src('app')
    .pipe(webserver({
      livereload: true,
      directoryListing: true,
      open: true,
      port: 8080,
      path: '#/index.html',
      fallback: '#/index.html'
    }));
});

var paths = {
    scss: './assets/scss/*.scss'
};

gulp.task('sass', function () {
  return gulp.src('./assets/scss/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./css'));
});

gulp.task('sass:watch', function () {
  gulp.watch('./assets/scss/**/*.scss', ['sass']);
});

gulp.task('default',function(){
    gulp.start('styles', 'Sass', 'Sass:watch');
});
