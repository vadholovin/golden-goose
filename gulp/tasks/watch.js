module.exports = function () {
    $.gulp.task('watch', function () {
        $.gulp.watch('./dev/pug/**/*.pug', $.gulp.series('pug'));
        $.gulp.watch('./dev/scss/**/*.scss', $.gulp.series('styles:dev'));
        $.gulp.watch(['./dev/img/general/**/*.{png,jpg,gif}',
            './dev/img/content/**/*.{png,jpg,gif}'], $.gulp.series('img:dev'));
        $.gulp.watch('./dev/img/svg/*.svg', $.gulp.series('svg'));
        $.gulp.watch('./dev/js/**/*.js', $.gulp.series('js:dev'));
    });
};