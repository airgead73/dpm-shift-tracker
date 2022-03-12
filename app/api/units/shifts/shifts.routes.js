const { Router } = require('express');
const shiftsRouter = Router();

// controller
const { create, read, readOne, update, remove } = require('./shifts.controller');

// routes
shiftsRouter.route('/').get(read).post(create);
shiftsRouter.route('/:id').get(readOne).put(update).delete(remove);

// export
module.exports = {
  shiftsRouter
}