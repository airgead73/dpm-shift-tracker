const Shift = require('../units-api/shift');

const isActiveShift = async () => {

  let shift = await Shift.findOne({ active: true });

  if(!shift) {
    return false;
  } else {
    return true;
  }

}

module.exports = {
  isActiveShift
}