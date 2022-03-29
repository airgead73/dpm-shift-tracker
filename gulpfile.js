const { src, dest, series } = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');

function styles() {
  return src('./scss/main.scss', { sourcemaps: true})
    .pipe(sass())
    .pipe(postcss([ autoprefixer() ]))
    .pipe(dest('./app/public', { sourcemaps: '.' }))
}

exports.default = styles