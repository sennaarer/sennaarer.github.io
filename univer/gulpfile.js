'use strict';

var gulp = require('gulp');
var plumber = require('gulp-plumber');
var connect = require('gulp-connect');
var jade = require('gulp-jade');
var compass = require('gulp-compass');
var compress = require('gulp-yuicompressor');
//var sass = require('gulp-sass');
// var csso = require('gulp-csso');
var out = require('gulp-out');
var csslint = require('gulp-csslint');


gulp.task('connect', function() {
  connect.server({
    host: 'univer.sennaarer.com',
    livereload: true
  });
});

gulp.task('compass', function() {
  gulp.src('./lib/css/scss/*.scss')
    .pipe(plumber())
    .pipe(compass({
      config_file: './config.rb',
      css: './lib/css',
			sass: './lib/css/scss'
    }))
    .pipe(gulp.dest('./lib/css'))
    // .pipe(connect.reload());
});

// gulp.task('csso', function () {
//     return gulp.src('./lib/css/main.css')
//         .pipe(plumber())
//         .pipe(csso({
//           disableStructureMinimization: true
//         }))
//         .pipe(gulp.dest('./lib/css/src'));
// });

// gulp.task('sass', function () {
//   gulp.src('./lib/css/sass/*.scss')
//     .pipe(sass({outputStyle: 'expanded'}).on('error', sass.logError))
//     .pipe(gulp.dest('./lib/css'));
// });

gulp.task('cssmin', function () {
    gulp.src('./lib/css/main.css')
        .pipe(plumber())
        .pipe(csslint(
        //    {
        //    "important": true,
        //    "adjoining-classes": true,
        //    "known-properties": true,
        //    "box-sizing": true,
        //    "box-model": true,
        //    "overqualified-elements": true,
        //    "display-property-grouping": true,
        //    "bulletproof-font-face": true,
        //    "compatible-vendor-prefixes": true,
        //    "regex-selectors": true,
        //    "errors": true,
        //    "duplicate-background-images": true,
        //    "duplicate-properties": true,
        //    "empty-rules": true,
        //    "selector-max-approaching": true,
        //    "gradients": true,
        //    "fallback-colors": true,
        //    "font-sizes": true,
        //    "font-faces": true,
        //    "floats": true,
        //    "star-property-hack": true,
        //    "outline-none": true,
        //    "import": true,
        //    "ids": true,
        //    "underscore-property-hack": true,
        //    "rules-count": true,
        //    "qualified-headings": true,
        //    "selector-max": true,
        //    "shorthand": true,
        //    "text-indent": true,
        //    "unique-headings": true,
        //    "universal-selector": true,
        //    "unqualified-attributes": true,
        //    "vendor-prefix": true,
        //    "zero-units": true
        //}
        ))
        .pipe(csslint.reporter())
        .pipe(compress({
            type: 'css'
        }))
        .pipe(out('./lib/css/{basename}.min{extension}'))
        .pipe(connect.reload());
});

gulp.task('jsmin', function () {
    gulp.src(['./lib/js/app.js', './lib/js/jquery.js'])
        .pipe(plumber())
        .pipe(compress({
            type: 'js'
        }))
        .pipe(out('./lib/js/{basename}.min{extension}'))
        .pipe(connect.reload());
});



gulp.task('jade', function() {
  gulp.src('./*.jade')
  .pipe(plumber())
  .pipe(jade({
    pretty: true
  }))
  //.on('error', console.log)
  .pipe(gulp.dest('./'))
  .pipe(connect.reload());

});

 //gulp.task('css', function() {
 //  gulp.src('lib/css/main.css')
 //    .pipe(csslint())
 //    .pipe(csslint.reporter());
 //});

// gulp.task('sass:watch', function () {
//   gulp.watch('./lib/css/sass/*.scss', ['sass']);
// });

gulp.task('jade:watch', function () {
  gulp.watch('./*.jade', ['jade']);
});

gulp.task('compass:watch', function () {
  gulp.watch('./lib/css/scss/*.scss', ['compass']);
});

// gulp.task('csso:watch', function () {
//   gulp.watch('./lib/css/main.css', ['csso']);
// });

gulp.task('cssmin:watch', function () {
  gulp.watch('./lib/css/main.css', ['cssmin']);
});

gulp.task('jsmin:watch', function () {
  gulp.watch('./lib/js/app.js', ['jsmin']);
  gulp.watch('./lib/js/jquery.js', ['jsmin']);
});




gulp.task('default', [
  'connect',
  'jade:watch', 'jade',
  'compass:watch', 'compass',
  // 'csso:watch', 'csso',
  'cssmin:watch', 'cssmin',
  'jsmin:watch', 'jsmin'
]);
