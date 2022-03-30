const del = require('del');
const { arr: ARR } = require('./variables');

function clean() {
  return del(ARR)
}

module.exports = clean;

