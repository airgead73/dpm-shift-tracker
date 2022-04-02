const { init: dev } = require('./development');
const { init: build } = require('./production');
const clean = require('./production/clean');
const js = require('./development/javascript');

exports.dev = dev;
exports.clean = clean;
exports.build = build;
exports.js = js;