'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var connect = require('gulp-connect');

gulp.task('connect', function() {
  connect.server();
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

gulp.task('default', ['connect', 'sass', 'sass:watch']);
// function(){
//     gulp.start('styles', 'Sass', 'Sass:watch');
// });
