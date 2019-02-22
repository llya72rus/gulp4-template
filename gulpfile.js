global.$ = {
    gulp: require("gulp"),
    browsersync: require("browser-sync").create(),
    packageJson: require('./package.json'),
    autoprefixer: require("gulp-autoprefixer"),
    babel: require("gulp-babel"),
    uglify: require("gulp-uglify"),
    concat: require("gulp-concat"),
    sass: require("gulp-sass"),
    mincss: require("gulp-clean-css"),
    sourcemaps: require("gulp-sourcemaps"),
    rename: require("gulp-rename"),
    imagemin: require("gulp-imagemin"),
    pngquant: require("imagemin-pngquant"),
    imageminJpegRecompress: require("imagemin-jpeg-recompress"),
    favicons: require("gulp-favicons"),
    svgStore: require("gulp-svgstore"),
    replace: require("gulp-replace"),
    rigger: require("gulp-rigger"),
    newer: require("gulp-newer"),
    plumber: require("gulp-plumber"),
    debug: require("gulp-debug"),
    watch: require("gulp-watch"),
    clean: require("gulp-clean"),

    path: {
        tasks: require("./gulp/config.js")
    }
};

$.path.tasks.forEach(function(taskPath) {
    require(taskPath)();
});

// BUILD
$.gulp.task("default", $.gulp.series("clean",
    $.gulp.parallel("html", "styles", "favicons", "images", "copy", "scripts", "server_conf"),
    $.gulp.parallel("watch", "serve")
));