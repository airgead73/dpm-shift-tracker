const { src, dest, series } = require('gulp');
const babel = require('gulp-babel');
const concat = require('gulp-concat');
const sourcemaps = require('gulp-sourcemaps');
const browserify = require('browserify');
const source = require('vinyl-source-stream');
const buffer = require('vinyl-buffer');

/* variables */
const { scripts } = require('./variables');
const { src: SRC, rename: RENAME, dest: DEST } = scripts;

function concatJS() {
  return (SRC)
    .pipe(concat('concat.js'))
    .pipe(dest('assets/scripts'));
}

/* tasks */
// function javascript() {
//   return src(SRC)
//     .pipe(sourcemaps.init())
//     .pipe(babel({ presets: ['@babel/preset-env'], plugins: [['@babel/transform-runtime']]}))
//     .pipe(concat(RENAME))
//     .pipe(sourcemaps.write('.'))
//     .pipe(dest(DEST))
// }

function js(cb) {
  series(concatJS)
  cb()
}

module.exports = js;