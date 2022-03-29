const { src, dest, series, watch } = require('gulp');
/* css plugins */
const sass = require('gulp-sass')(require('sass'));
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');
const del = require('del');
/* js plugins */
const concat = require('gulp-concapt');
const uglify = require('gulp-uglify');
// const uglify = require('gulp-uglify');
// const webpack = require('webpack-stream');
// const babel = require('gulp-babel');
// const mode = require('gulp-mode')();
// const sourcemaps = require('gulp-sourcemaps');

// function javascript() {
//   return src('./gulp/scripts/index.js')
//   .pipe(webpack({
//     mode: mode.development() ? 'development' : 'production',
//     watch: false,
//     output: {
//         filename: 'bundle.js'
//     }
//   }))
//   .pipe(babel({ presets: ['@babel/env'] }))
//   .pipe(mode.development(sourcemaps.init()))
//   .pipe(uglify().on('error', (uglify) => {
//       console.error(uglify.message);
//       this.emit('end');
//   }))
//   .pipe(mode.development(sourcemaps.write()))
//   .pipe(dest('dist/js'));
// }

function javascript() {
  return src
}

function clean() {
  return del(['./app/public/main.css', './app/public/main.css.map'])
}

function css() {
  return src('./gulp/scss/main.scss', { sourcemaps: true})
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
exports.js = javascript;
exports.watch = watchCSS;