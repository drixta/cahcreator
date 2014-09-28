var gulp = require('gulp');
var browserify = require('gulp-browserify');
var less = require('gulp-less');
var autoprefixer = require('gulp-autoprefixer');
var concat = require('gulp-concat');
var util = require('gulp-util');
var plumber = require('gulp-plumber');
var browserSync = require('browser-sync');
var reload = browserSync.reload;
var exec0 = require('child_process').exec;
var exec1 = require('child_process').exec;

var onError = function (err){
	util.beep();
	console.log(err);
};

gulp.task('browser-sync', function(){
	browserSync({});
});

gulp.task('browserify', function () {
	return gulp.src('src/js/main.js')
		.pipe(plumber({
			errorHandler: onError
		}))
		.pipe(browserify({transform: 'reactify'}))
		.pipe(concat('main.js'))
		.pipe(gulp.dest('dist/js'))
		.pipe(reload({stream:true}));
});

gulp.task('less', function(){
	return gulp.src('src/less/main.less')
		.pipe(plumber({
			errorHandler: onError
		}))
		.pipe(less())
		.pipe(autoprefixer({
            browsers: ['last 2 versions'],
        }))
		.pipe(gulp.dest('dist/css'))
		.pipe(reload({stream:true}));
});

gulp.task('copy', function(){
	return gulp.src('src/index.html')
		.pipe(gulp.dest('dist'));
});

gulp.task('default', ['browserify','copy','less']);

gulp.task('watch', function(){
	gulp.start('browser-sync');
	gulp.watch('./src/**/*.*', ['default', reload]);
});

gulp.task('server', function(){
	exec1('open http://localhost:3000');
	return gulp.start('watch');
});