const del = require('del');
const { styles } = require('./variables');
const { arr: ARR } = styles;

function clean() {
  return del(ARR)
}

module.exports = clean;

