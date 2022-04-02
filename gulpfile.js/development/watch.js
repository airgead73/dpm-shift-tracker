const { series, watch } = require('gulp');
const scss = require('./scss');
const { jsConcat, jsBrowserify, jsBabel, jsClean } = require('./js');
const clean = require('./clean');

function watchTasks() {
  watch([
    'assets/scss/index.scss',
    'assets/scripts/bootstrap.bundle.js',
    'assets/scripts/forms.js',
    'assets/scripts/btns.js',
    'assets/scripts/camelcase.js'
  ], { ignoreInitial: false }, 
  series(
    clean,
    scss,
    jsConcat, 
    jsBrowserify,
    jsBabel,
    jsClean
  ));
}

module.exports = watchTasks;