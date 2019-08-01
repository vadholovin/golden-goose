module.exports = function () {
    $.gulp.task('libs', () => {
        return $.gulp.src('./dev/libs/**/*.*')
            .pipe($.gulp.dest('./build/libs/'));
    });
};