var gulp            = require('gulp');
var concat          = require('gulp-concat');
var rename          = require('gulp-rename');
var uglify          = require('gulp-uglify');
var sass            = require('gulp-sass');
var runSequence     = require('run-sequence');

/* tasks */
gulp.task('sassDev', function ()
{
    gulp.src('src/css/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('src/css'));
});

gulp.task('stylesDev', function ()
{
    return gulp.src[('src/css/styles.css')]
        .pipe(concat('omr.css'))
        .pipe(gulp.dest('src/css'));
});
