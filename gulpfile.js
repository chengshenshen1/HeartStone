var gulp = require('gulp');
var less = require('gulp-less');
var plumber = require('gulp-plumber');
var browserSync = require('browser-sync').create();
var reload      = browserSync.reload;

var paths = {
	less: ['./less/*.less']
};
gulp.task('less', function () {
	return gulp.src('./less/*.less')
	.pipe(plumber())
	.pipe(less())
	.pipe(gulp.dest('./css/*.css'))
	.pipe(reload({stream: true}));
});

// 静态服务器
gulp.task('watch', function() {
    browserSync.init({
        server: {
             baseDir: "./",
	    proxy: "localhost"
        }
    });
    gulp.watch(paths.less, ['less']);
});