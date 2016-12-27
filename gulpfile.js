const gulp = require('gulp'),
	browserSync = require('browser-sync').create();

gulp.task('default', function(){
	browserSync.init({ server: './' });
	gulp.watch('./index.html').on('change', browserSync.reload);
	gulp.watch('./maps.js').on('change', browserSync.reload);
});