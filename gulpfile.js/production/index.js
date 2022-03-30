const { series } = require('gulp');
const scss = require('./scss');
const clean = require('./clean');

function init(cb) {
  series(clean, scss)
  cb()
}

module.exports = {init};
  