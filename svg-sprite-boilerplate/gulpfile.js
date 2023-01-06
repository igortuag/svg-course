// declare dependencies
var gulp = require("gulp");
var svgSprite = require("gulp-svg-sprite");

var config = {
  mode: {
    symbol: {
      dest: "sprite", // destination folder
      sprite: "sprite.svg", //sprite file name
      example: true, // Build sample page
    },
    svg: {
      xmlDeclaration: false, // strip out the XML attribute
      doctypeDeclaration: false, // don't include the !DOCTYPE declaration
    }
  },
};

gulp.task("sprites", function () {
  return gulp
    .src("icons/**/*.svg")
    .pipe(svgSprite(config))
    .pipe(gulp.dest("."));
});
