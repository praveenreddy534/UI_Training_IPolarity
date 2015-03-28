
var gulp = require('gulp');
var open = require('gulp-open');
var karma = require('gulp-karma');

var browserSync = require('browser-sync');
var allFiles = [
 'angular.min.js',
 'angular-mocks.js',
 'js/*.js',
 'test/*.js'
];
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
gulp.task('test', function(coverage){
	gulp.test(allFiles)
		.pipe(karma({
			configFile: 'karma.conf.js',
			action: 'run'			
		}))
		.on('error',function(e){
			console.log('karma error :', e);
		});
});
gulp.task('default',['startApp'],function(){
	
});

