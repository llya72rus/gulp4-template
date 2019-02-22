module.exports = function() {
    $.gulp.task("html", function() {
        return $.gulp.src(["./src/views/**/*.html"])
            .pipe($.rigger())
            .pipe($.gulp.dest("./dest/"))
            .pipe($.debug({"title": "html"}))
            .on("end", $.browsersync.reload);
    });
};