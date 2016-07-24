'use strict';

var gulp = require('gulp');
var Sass = require('gulp-sass');
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
    scss: './assets/sass/*.scss'
};

gulp.task('Sass', function () {
  return gulp.src('./Sass/**/*.scss')
    .pipe(Sass().on('error', Sass.logError))
    .pipe(gulp.dest('./css'));
});

gulp.task('styles', function () {
    return gulp.src(paths.scss)
        .pipe(Sass({
            includePaths: ['styles'].concat(neat)
        }))
        .pipe(gulp.dest('./css'));
});

gulp.task('Sass:watch', function () {
  gulp.watch('./Sass/**/*.scss', ['Sass']);
});

gulp.task('default',function(){
    gulp.start('styles', 'Sass', 'Sass:watch');
});
