const Shift = require('../units-api/shift');

const isActiveShift = async () => {

  let shift = await Shift.findOne({ active: true });

  shift = shift === null ? false : true;

  return shift;

}

module.exports = {
  isActiveShift
}