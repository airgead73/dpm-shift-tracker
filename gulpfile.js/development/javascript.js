const { src, dest } = require('gulp');
const babel = require('gulp-babel');
const concat = require('gulp-concat');
const sourcemaps = require('gulp-sourcemaps');

/* variables */
const { scripts } = require('./variables');
const { src: SRC, rename: RENAME, dest: DEST } = scripts;

/* tasks */
function javascript() {
  return src(SRC)
    .pipe(sourcemaps.init())
    .pipe(babel({ presets: ['@babel/preset-env'], plugins: [['@babel/transform-runtime']]}))
    .pipe(concat(RENAME))
    .pipe(sourcemaps.write('.'))
    .pipe(dest(DEST))
}

module.exports = javascript;