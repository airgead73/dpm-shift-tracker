const { src, dest } = require('gulp');
const babel = require('gulp-babel');
const concat = require('gulp-concat');

function javascript() {
  return src(['assets/scripts/bootstrap.bundle.js', 'assets/scripts/forms.js', 'assets/scripts/btns.js'])
    .pipe(babel())
    .pipe(concat("bundle.js"))
    .pipe(dest('app/public'))
}

module.exports = javascript;

