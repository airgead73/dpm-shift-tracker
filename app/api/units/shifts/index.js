const Shift = require('./shift');
const { create, read, detail, update, remove } = require('./shifts.controller');
const { shiftsRouter } = require('./shifts.routes');

module.exports = {
  Shift,
  create,
  read,
  detail,
  update,
  remove,
  shiftsRouter
}