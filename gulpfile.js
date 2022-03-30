const { src, dest, series, parallel, watch } = require('gulp');
const cssnano = require('gulp-cssnano');
const autoprefixer = require('gulp-autoprefixer');
const sass = require('gulp-sass')(require('sass'));
const sourcemaps = require('gulp-sourcemaps');
const mode = require('gulp-mode')({
  modes: ["production", "development"],
  default: "development",
  verbose: false
});

function scss(cb) {
  return src('assets/scss/index.scss')
    .pipe(mode.development(sourcemaps.init()))
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer({
      overrideBrowserslist: ["> 1%"]
    }))
    .pipe(cssnano())
    .pipe(mode.development(sourcemaps.write()))
    .pipe(dest('app/public'));
}

exports.default = scss;