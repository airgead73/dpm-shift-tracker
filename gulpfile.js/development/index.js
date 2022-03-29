const { src, dest, series, watch } = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');
const del = require('del');

function clean() {
  return del(['./app/public/main.css', './app/public/main.css.map'])
}

function dev() {
  return src('./scss/main.scss', { sourcemaps: true})
    .pipe(sass())
    .pipe(postcss([ autoprefixer(), cssnano() ]))
    .pipe(dest('./app/public', { sourcemaps: '.' }))
}

function watchCSS() {
  watch(['./scss'], series(
    clean,
    dev
  ))
}

function init(cb) {
  series(clean, dev);
  cb();
}

exports.init = init;
exports.watch = watchCSS