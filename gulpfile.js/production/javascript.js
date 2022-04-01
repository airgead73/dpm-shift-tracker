const { src, dest } = require('gulp');
const babel = require('gulp-babel');
const concat = require('gulp-concat');

/* variables */
const { scripts } = require('./variables');
const { src: SRC, rename: RENAME, dest: DEST } = scripts;

function javascript() {
  return src(SRC)
    .pipe(babel())
    .pipe(concat(RENAME))
    .pipe(dest(DEST))
}

module.exports = javascript;

