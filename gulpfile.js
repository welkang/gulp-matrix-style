var gulp = require('gulp'),
    inlineStyle = require('./index.js');

gulp.task('default', function() {
    return gulp.src('demo/*.html')
        .pipe(inlineStyle({}))
        .pipe(gulp.dest('demo/build/'));
});