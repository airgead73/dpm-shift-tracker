const { series, watch } = require('gulp');
const scss = require('./scss');
const clean = require('./clean');
const { watch: WATCH } = require('./variables');

function init(cb) {
  watch(WATCH, { ignoreInitial: false, delay: 500 }, series(clean, scss))
  cb()
}

module.exports = {init};
  