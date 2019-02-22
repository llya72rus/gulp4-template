module.exports = function () {
    $.gulp.task("serve", function () {
        $.browsersync.init({
            server: "./dest/",
            notify: false,
            open: true,
            cors: true,
            port: 8800,
            ui: false
        });
    });
};