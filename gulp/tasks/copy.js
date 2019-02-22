module.exports = function() {
  $.gulp.task("copy", function() {
      return $.gulp.src(["./src/fonts/**/*.{woff,woff2}"],
      {
        base: './src'
      })
      
          .pipe($.gulp.dest("dest"))
  });
};
