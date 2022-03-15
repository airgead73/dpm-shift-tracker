const { Router } = require('express');
const shiftsRouter = Router();

// controller
const { create, read, readOne, update, remove, setRate } = require('./shifts.controller');

// routes
shiftsRouter.route('/').get(read).post(create);
shiftsRouter.route('/:id').get(readOne).put(update).delete(remove);
shiftsRouter.route('/:id/rate').get(setRate);

// export
module.exports = {
  shiftsRouter
}