var gulp = require('gulp');
// var gutil = require('gulp-util');
// var bower = require('bower');
// var concat = require('gulp-concat');
var sass = require('gulp-sass');
//var rename = require('gulp-rename');
// var sh = require('shelljs');
var sourcemaps = require('gulp-sourcemaps');

var paths = {
    sass: ['./scss/**/*']
};

gulp.task('default', ['sass']);

gulp.task('sass', function(done) {
    gulp.src('./scss/style.scss')
        .pipe(sourcemaps.init())
        .pipe(sass().on('error', sass.logError))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('./css/'))
        //.pipe(rename('all.min.css'))
        // .pipe(cleanCSS({compatibility: 'ie8'}))
        .on('end', done);
});


gulp.task('watch', function() {
    gulp.watch(paths.sass, ['sass']);
});

