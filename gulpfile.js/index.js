const { init: dev } = require('./development');
const { init: build } = require('./production');
const clean = require('./production/clean');

exports.dev = dev;
exports.clean = clean;
exports.build = build;