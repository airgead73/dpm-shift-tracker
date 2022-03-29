/* css plugins */
const sass = require('gulp-sass')(require('sass'));
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');

function css() {
  return src('./gulp/scss/main.scss', { sourcemaps: true})
    .pipe(sass())
    .pipe(postcss([ autoprefixer(), cssnano() ]))
    .pipe(dest('./app/public', { sourcemaps: '.' }))
}

module.exports = css;