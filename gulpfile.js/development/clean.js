const del = require('del');

/* variables */
const { styles, scripts } = require('./variables');
const { CLEAN: CLEANJS } = scripts;
const { CLEAN: CLEANSCSS} = styles;

const toDelete = CLEANSCSS.concat(CLEANJS);

function clean() {
  return del(toDelete);
}

module.exports = clean;