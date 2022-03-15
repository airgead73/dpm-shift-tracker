const mongoose = require('mongoose');
const { Shift } = require('../../api/units/shifts');
const shift = require('../../api/units/shifts/shift');

const getCurrentShift = async () => {
  const shift = await Shift.findOne().sort({ date: -1});
  return shift;
}

const getAllShifts = async () => {
  const shifts = await Shift.find().sort({ date: -1});
  const current = shifts.shift();
  return { current, shifts };
}

module.exports = {
  getCurrentShift,
  getAllShifts
}