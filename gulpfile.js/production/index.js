const { series } = require('gulp');
const scss = require('./scss');
const clean = require('./clean');

exports.init = series(
  clean,
  scss
)
  