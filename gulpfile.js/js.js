const { src, dest, series } = require('gulp');
const concat = require('gulp-concat');

function jsConcat() {
  return src([
      'assets/scripts/bootstrap.bundle.js',
      'assets/scripts/forms.js',
      'assets/scripts/btns.js'
    ])
    .pipe(concat('bundle.js'))
    .pipe(dest('app/public'))
}

function js(cb) {
  series(jsConcat)
  cb();
}

module.exports = js;