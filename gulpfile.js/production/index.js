const { series } = require('gulp');
const scss = require('./scss');
const javascript = require('./javascript');
const clean = require('./clean');

exports.init = series(
  clean,
  scss,
  javascript
)
  