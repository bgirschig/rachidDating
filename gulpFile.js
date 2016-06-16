var shellExec = require('child_process').exec;
var gulp = require('gulp');
var concat = require('gulp-concat');
var clean = require('gulp-clean');
var colors = require('colors');
var testing = require('gulp-testing');
var jade = require('gulp-jade');

var settings = {
	sourceFolder: "src/",
	testFolder: "tests/",
	buildFolder: "cordovaProject/www/",
	platform: "android",
	appName:"Odéon",
	isProd: false
}

// builds the web app (not the cordova native export)
gulp.task('webAppBuild', function() {
	// Copy Cordova settings files
	gulp.src

	// Copy javascript
	gulp.src(settings.sourceFolder+"**/*.js")
	.pipe(concat('scripts.js'))
	.pipe(gulp.dest(settings.buildFolder));

	// Copy html
	gulp.src([settings.sourceFolder+"**/*.html"])
	.pipe(gulp.dest(settings.buildFolder));

	// Copy css
	gulp.src([settings.sourceFolder+"**/*.css"])
	.pipe(concat('styles.css'))
	.pipe(gulp.dest(settings.buildFolder));

	// Copy images
	gulp.src([settings.sourceFolder+"img/**"], {base: ''})
	.pipe(gulp.dest(settings.buildFolder+"img/"));

	// Copy fonts
	gulp.src([settings.sourceFolder+"fonts/**"], {base: ''})
	.pipe(gulp.dest(settings.buildFolder+"fonts/"));

	gulp.run("jadeBuild");
})

// runs unit tests
gulp.task('test', function(){	
	gulp.src([settings.sourceFolder+"/js/utils.js", settings.testFolder+"**/*.js"])
	.pipe(concat(settings.testFolder+'tests.js'))
	.pipe(testing());
})

// clears the whole build folder
gulp.task('clean', function(){
	shellExec("rm -rf "+settings.buildFolder+"*", function(err, stdout, stderr){
		if(err!=null){
    		console.log("clean failed:".red);
    		console.log(stderr);
		}
	});
})

gulp.task('jadeBuild', function(){
	var jadeSettings = {
		locals:{"appName":settings.appName},
		pretty: !settings.isProd
	}
	gulp.src(settings.sourceFolder+'pages/*.jade')
    .pipe(jade(jadeSettings))
    .pipe(gulp.dest(settings.buildFolder+'pages/'))
})

// calls 'cordova run [platform]' where [platform] is the 'platform' setting.
gulp.task('run', function(){
	console.log("building and running cordova project...".yellow);
	shellExec("(cd cordovaProject/; cordova run "+settings.platform+")", function(err, stdout, stderr){
		if(stderr==null || stderr==""){
			console.log("\nbuild success!\n".green);
		} else {
    		console.log("cordova build / run failed:".red);
    		console.log(stderr);
		}
	});
})

gulp.task("default", [
	'clean'
	,'jadeBuild'
	,'webAppBuild'
	,'test'
	,"run"
]);