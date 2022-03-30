const { src, dest } = require('gulp');
const uglify = require('gulp-uglify');
const sourcemaps = require('gulp-sourcemaps');
const webpack = require('webpack');
const gulpWebpack = require('webpack-stream');
const babel = require('gulp-babel');
const mode = require('gulp-mode')({
  modes: ["production", "development"],
  default: "development",
  verbose: false
});

function javascript() {
  return src('assets/scripts/app.js')
    .pipe(gulpWebpack({
      mode: mode.development() ? 'development' : 'production',
      watch: true,
      devtool: 'cheap-module-source-map',
      output: {
        filename: 'bundle.js'
      }
    }, webpack))
    .pipe(babel({ presets: ['@babel/env'], plugins: [['@babel/transform-runtime']]}))
    .pipe(mode.development(sourcemaps.init()))
    // .pipe(uglify().on('error', (uglify) => {
    //   console.error(uglify.message);
    //   this.emit('end');
    // }))
    .pipe(mode.development(sourcemaps.write()))
    .pipe(dest('app/public'))
}

module.exports = javascript;