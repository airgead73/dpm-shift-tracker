const { src, dest, series, watch } = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');
const del = require('del');

function clean() {
  return del(['./app/public/main.css', './app/public/main.css.map'])
}

function css() {
  return src('./scss/main.scss', { sourcemaps: true})
    .pipe(sass())
    .pipe(postcss([ autoprefixer(), cssnano() ]))
    .pipe(dest('./app/public', { sourcemaps: '.' }))
}

function watchCSS() {
  watch(['./gulp/scss'], { delay: 500 }, { ignoreInitial: false}, series(
    clean,
    css
  ))
}

function init(cb) {
  series(clean, css);
  cb();
}

exports.init = init;
exports.watch = watchCSS;