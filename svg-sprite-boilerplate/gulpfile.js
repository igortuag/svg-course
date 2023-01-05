// declare dependencies
var gulp = require("gulp");
var svgSprite = require("gulp-svg-sprite");

// configure the task
gulp.task("sprites", function () {
  return gulp
    .src("src/icons/*.svg")
    .pipe(
      svgSprite({
        mode: {
          symbol: {
            dest: ".",
            sprite: "sprite.svg",
          },
        },
      })
    )
    .pipe(gulp.dest("dist/icons"));
});
