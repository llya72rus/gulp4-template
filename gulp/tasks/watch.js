module.exports = function() {
    $.gulp.task("watch", function() {
        // $.watch(["./src/views/**/*.html", "./src/views/blocks/*.html"], $.browsersync);
        $.watch('./src/views/**/*.html', $.gulp.series("html"))
        $.watch("./src/styles/**/*.scss", $.gulp.series("styles"));
        $.watch(["./src/img/**/*.{jpg,jpeg,png,gif}", "!./src/img/icons/svg/*.svg", "!./src/img/favicons/*.{jpg,jpeg,png,gif}"], $.gulp.series("images"));
        $.watch("./src/js/**/*.js", $.gulp.series("scripts"));
    });
};