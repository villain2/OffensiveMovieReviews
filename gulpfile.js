var gulp            = require('gulp');
var clean 			= require('gulp-clean');
var concat          = require('gulp-concat');
var concatCSS       = require('gulp-concat-css');
var rename          = require('gulp-rename');
var replace 		= require('gulp-replace');
var uglify          = require('gulp-uglify');
var sass            = require('gulp-sass');
var runSequence     = require('run-sequence');

var buildDir        = 'bin/';

/* tasks */

/** javascript tasks **/
gulp.task('buildJS', function ()
{
	gulp.src(['bower_components/modernizr/modernizr.js', 'bower_components/jquery/dist/jquery.min.js', 'bower_components/bootstrap/dist/js/bootstrap.min.js', 'bower_components/angularjs/angular.min.js',
		'src/js/main.js'])
		.pipe(concat("omr.js"))
		//.pipe(uglify("omr.js"))
		.pipe(gulp.dest(buildDir));
});
/** end javascript tasks **/

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

gulp.task('stylesBuild', function ()
{
    gulp.src(["bower_components/bootstrap/dist/css/bootstrap.css", "src/css/styles.css"])
        .pipe(concat("omr.css"))
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

gulp.task('clean', function ()
{
	return gulp.src("bin", {read: false})
		.pipe(clean());
});

gulp.task('renameBuild', function ()
{
	gulp.src('src/build.html')
		.pipe(rename('index.html'))
		.pipe(gulp.dest(buildDir));
});

gulp.task('replacePath', function ()
{
	gulp.src(['src/css/omr.css'])
		.pipe(replace('../fonts', 'fonts'))
		.pipe(replace('../img', 'img'))
		.pipe(gulp.dest('src/css'));
});

gulp.task('moveFilesBuild', function ()
{
	gulp.src(["src/css/*.*", "src/fonts/*.*", "src/img/**/*.*"], {base: "./src/"})
		.pipe(gulp.dest(buildDir));
});


gulp.task('build', function (callback)
{
	runSequence('clean', 'buildJS', 'buildSassDev', 'stylesBuild', 'replacePath', 'renameBuild', 'moveFilesBuild', callback);
});