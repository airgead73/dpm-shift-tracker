const { src, dest } = require('gulp');
const autoprefixer = require('gulp-autoprefixer');
const sass = require('gulp-sass')(require('sass'));
const sourcemaps = require('gulp-sourcemaps');
const rename = require('gulp-rename')
const mode = require('gulp-mode')({
  modes: ["production", "development"],
  default: "development",
  verbose: false
});

/* variables */

const { styles } = require('./variables');
const { src: SRC, rename: RENAME, dest: DEST } = styles;

/* tasks */

function scss() {
  return src(SRC)
    .pipe(mode.development(sourcemaps.init()))
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer({
      overrideBrowserslist: ['> 1%']
    }))
    .pipe(rename(RENAME))
    .pipe(mode.development(sourcemaps.write()))
    .pipe(dest(DEST));
}

module.exports = scss;