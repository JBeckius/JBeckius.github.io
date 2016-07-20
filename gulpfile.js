'use strict';

var gulp = require('gulp');
var Sass = require('gulp-sass');
var neat = require('node-neat').includePaths;

var paths = {
    scss: './assets/sass/*.scss'
};

gulp.task('styles', function () {
    return gulp.src(paths.scss)
        .pipe(Sass({
            includePaths: ['styles'].concat(neat)
        }))
        .pipe(gulp.dest('./css'));
});



gulp.task('Sass', function () {
  return gulp.src('./Sass/**/*.scss')
    .pipe(Sass().on('error', Sass.logError))
    .pipe(gulp.dest('./css'));
});

gulp.task('Sass:watch', function () {
  gulp.watch('./Sass/**/*.scss', ['Sass']);
});

gulp.task('default',function(){
    gulp.start('styles', 'Sass', 'Sass:watch');
});
