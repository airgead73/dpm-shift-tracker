const del = require('del');
const { styles, scripts } = require('./variables');
const ARR = (styles.arr).concat(scripts.arr);

function clean() {
  return del(ARR)
}

module.exports = clean;

