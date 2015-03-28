
var gulp = require('gulp');
var open = require('gulp-open');
var karma = require('karma').server;

var browserSync = require('browser-sync');

gulp.task('startApp', function(){
	var config = {
		ui: {
			port: 8283
		},
		files: "**/*.*",
		server:{
			baseDir: "./",
			index: "index.html"
		},
		logLevel: "debug",
		
	}
	browserSync(config);
});
gulp.task('karma', function(){
	karma.start({
		configFile: 'karma.conf.js',
		singleRun: true
	});
});
gulp.task('default',['startApp'],function(){
	
});

