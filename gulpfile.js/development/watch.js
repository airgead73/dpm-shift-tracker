const { series, watch } = require('gulp');
const scss = require('./scss');
const clean = require('./clean');
const { styles } = require('./variables')
const { watch: WATCH } = styles;

function watchTasks(cb) {
  watch(WATCH, { ignoreInitial: false, delay: 500 }, series(clean, scss))
  cb()
}

module.exports = watchTasks;