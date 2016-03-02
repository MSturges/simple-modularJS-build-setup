var gulp       = require('gulp'),
    uglify     = require('gulp-uglify'),
    browserify = require('gulp-browserify');


gulp.task('modules', function(){
  gulp.src(['src/js/main.js'])
    .pipe(browserify({
      debug: true
    }))
    //.pipe(uglify({
    //  outSourceMap: false
    //}))
    .pipe(gulp.dest('public/js'))
});

gulp.task('watch', function(){
  gulp.watch('src/js/**/*.js', ['modules'])
});


gulp.task('default', ['modules', 'watch']);