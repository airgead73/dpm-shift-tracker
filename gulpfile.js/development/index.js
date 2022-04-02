const { series } = require('gulp');
const scss = require('./scss');
const { jsConcat, jsBrowserify, jsBabel, jsClean } = require('./js');
const clean = require('./clean');
const watchTasks = require('./watch');

exports.scss = scss;
exports.js = series(jsConcat, jsBrowserify, jsBabel, jsClean);
exports.clean = clean;
exports.dev = watchTasks;