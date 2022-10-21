/**
 * List of dependences
 */
const { src, dest, watch, parallel } = require("gulp");
const sass = require("gulp-sass")(require("sass"));
const prefix = require("gulp-autoprefixer");
const cssmin = require("gulp-clean-css");
const jsmin = require("gulp-terser");
const imagemin = require("gulp-squoosh");

/**
 * Compile, prefix, and minify scss
 */
function compileSCSS() {
  return src("./src/assets/scss/*.scss")
    .pipe(sass())
    .pipe(prefix("last 2 versions"))
    .pipe(cssmin())
    .pipe(dest("./dist/assets/css"));
}

/**
 * Optimize and convert images
 */
function optimizeImg() {
  return src("./src/assets/images/*.{jpg,png}")
    .pipe(
      imagemin({
        encodeOptions: { webp: {} },
      })
    )
    .pipe(dest("./dist/assets/images"));
}

/**
 * Minify js
 */
function minifyJS() {
  return src("./src/assets/js/*.js")
    .pipe(jsmin())
    .pipe(dest("./dist/assets/js"));
}

/**
 * Watchtask
 */
function watchTask() {
  watch("src/assets/scss/**/*.scss", compileSCSS);
  watch("src/assets/js/*.js", minifyJS);
  watch("src/assets/images/**/*", optimizeImg);
}

/**
 * Default Gulp task
 */
exports.default = parallel(compileSCSS, optimizeImg, minifyJS, watchTask);
