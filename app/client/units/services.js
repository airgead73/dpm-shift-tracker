const mongoose = require('mongoose');
const { Shift } = require('../../api/units/shifts');

const getCurrentShift = async () => {
  const shift = await Shift.findOne().sort({ date: -1});
  return shift;
}

module.exports = {
  getCurrentShift
}