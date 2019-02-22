module.exports = function() {
    $.gulp.task("sprite", function() {
        return $.gulp.src("./src/img/for-sprite/*.svg")
        .pipe($.imagemin($.imagemin.svgo()))
        .pipe($.svgStore())
        .pipe($.rename("sprite.svg"))
        .pipe($.gulp.dest("./dest/img"))
    });
};