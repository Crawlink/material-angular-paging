var gulp = require('gulp');
var gulpLoadPlugins = require('gulp-load-plugins');
var del = require('del');

var plugins = gulpLoadPlugins();

var defaultTasks = ['clean', 'uglify'];


gulp.task('uglify', ['clean'], function () {
    var src = [];

    if (src) {
        src.push('lib/**/*.js');
        return gulp.src(src)
            .pipe(plugins.concat('dist.min.js'))
            .pipe(plugins.uglify({mangle: false}))
            .pipe(gulp.dest('build/'));
    }
});


gulp.task('clean', function (cb) {
    return del(['build/'], cb);
});

gulp.task('default', defaultTasks);