const { src, dest, series } = require('gulp');
const cssnano = require('gulp-cssnano');
const autoprefixer = require('gulp-autoprefixer');
const sass = require('gulp-sass')(require('sass'));
const sourcemaps = require('gulp-sourcemaps');
const rename = require('gulp-rename')
const mode = require('gulp-mode')({
  modes: ["production", "development"],
  default: "development",
  verbose: false
});

const { src: SRC, rename: RENAME, dest: DEST } = require('./variables');

const clean = require('./clean');

function scss() {
  return src(SRC)
    .pipe(mode.development(sourcemaps.init()))
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer({
      overrideBrowserslist: ["> 1%"]
    }))
    .pipe(cssnano())
    .pipe(rename(RENAME))
    .pipe(mode.development(sourcemaps.write()))
    .pipe(dest(DEST));
}

exports.init = series(
  clean,
  scss
)