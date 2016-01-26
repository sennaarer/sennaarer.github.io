'use strict';

var gulp = require('gulp');
var open = require('gulp-open');
var plumber = require('gulp-plumber');
var connect = require('gulp-connect');
var jade = require('gulp-jade');
var compress = require('gulp-yuicompressor');
var sass = require('gulp-sass');
var out = require('gulp-out');
var sourcemaps = require('gulp-sourcemaps');


gulp.task('connect', function () {
    connect.server({
        host: 'sennaarer.com',
        port: 8080,
        livereload: true
    });
});

gulp.task('sass', function () {
    gulp.src('./lib/css/scss/main.scss')
        .pipe(plumber())
        .pipe(sourcemaps.init())
        .pipe(sass({outputStyle: 'expanded'}))
        .pipe(sourcemaps.write('./', {
            addComment: true,
            sourceRoot: '/lib/css/scss',
            includeContent: false
        }))
        .pipe(gulp.dest('./lib/css'))
});

gulp.task('cssmin', function () {
    gulp.src(['./lib/css/main.css'])
        .pipe(plumber())
        .pipe(compress({
            type: 'css'
        }))
        .pipe(out('./lib/css/{basename}.min{extension}'))
        .pipe(connect.reload());
});


gulp.task('jsmin', function () {
    gulp.src(['./lib/js/geo-selector.js'])
        .pipe(plumber())
        .pipe(sourcemaps.init())
        .pipe(compress({
            type: 'js'
        }))
        .pipe(sourcemaps.write('./',{
            addComment: true,
            includeContent: false
        }))
        .pipe(out('./lib/js/{basename}.min{extension}'))
        .pipe(connect.reload());
});


gulp.task('jade', function () {
    gulp.src('./*.jade')
        .pipe(plumber())
        .pipe(jade({
            pretty: true
        }))
        .pipe(gulp.dest('./'))
        .pipe(connect.reload());

});



gulp.task('sass:watch', function () {
    gulp.watch('./lib/css/scss/main.scss', ['sass']);
});

gulp.task('cssmin:watch', function () {
    gulp.watch('./lib/css/scss/main.scss', ['cssmin']);
});

gulp.task('jade:watch', function () {
    gulp.watch('./*.jade', ['jade']);
});

gulp.task('jsmin:watch', function () {
    gulp.watch('./lib/js/geo-selector.js', ['jsmin']);

});


gulp.task('open', function () {
    var options = {
        uri: 'http://sennaarer.com:8080',
        app: 'google chrome'
    };
    gulp.src('./index.html')
        .pipe(open(options));
});

gulp.task('default', [
    'connect',
    'jade:watch', 'jade',
    'sass:watch', 'sass',
    'cssmin:watch', 'cssmin',
    'jsmin:watch', 'jsmin',
    'open'
]);
