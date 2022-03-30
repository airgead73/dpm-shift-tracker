const { init: dev } = require('./development');
const { init: build } = require('./production');

exports.dev = dev;
exports.build = build;