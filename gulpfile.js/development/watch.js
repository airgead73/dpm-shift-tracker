const { series, watch } = require('gulp');
const scss = require('./scss');
const js = require('./javascript');
const clean = require('./clean');
const { styles, scripts } = require('./variables')
const WATCH = (styles.watch).concat(scripts.watch);

function watchTasks(cb) {
  watch(WATCH, { ignoreInitial: false, delay: 500 }, series(clean, scss, js))
  cb()
}

module.exports = watchTasks;