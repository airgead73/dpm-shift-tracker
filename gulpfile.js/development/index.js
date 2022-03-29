const { src, dest, series } = require('gulp');
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

function build() {
  return src('./scss/main.scss', { sourcemaps: true})
    .pipe(sass())
    .pipe(postcss([ autoprefixer() ]))
    .pipe(dest('./app/public', { sourcemaps: '.' }))
}

function init(cb) {
  series(clean, dev);
  cb();
}

exports.init = init;