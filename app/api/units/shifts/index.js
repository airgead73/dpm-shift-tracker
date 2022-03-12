const Shift = require('./shift');
const { create, read, readOne, update, remove } = require('./shifts.controller');
const { shiftsRouter } = require('./shifts.routes');

module.exports = {
  Shift,
  create,
  read,
  readOne,
  update,
  remove,
  shiftsRouter
}