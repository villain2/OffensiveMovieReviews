var gulp            = require('gulp');
var concat          = require('gulp-concat');
var concatCSS       = require('gulp-concat-css');
var rename          = require('gulp-rename');
var uglify          = require('gulp-uglify');
var sass            = require('gulp-sass');
var runSequence     = require('run-sequence');

var buildDir        = 'bin/';

/* tasks */

/** sass tasks **/
gulp.task('sassDev', function ()
{
    gulp.src('src/css/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('src/css/'));
});

gulp.task('stylesDev', function ()
{
    gulp.src(["bower_components/bootstrap/dist/css/bootstrap.css", "src/css/styles.css"])
        .pipe(concatCSS("omr.css"))
        .pipe(gulp.dest("src/css/"));
});

gulp.task('buildSassDev', function (cb)
{
    runSequence('sassDev', 'stylesDev', cb);
});
/** end sass tasks **/



/* global tasks */
gulp.task('watch', function ()
{
    gulp.watch('src/**/*.scss', ['buildSassDev']);
});
