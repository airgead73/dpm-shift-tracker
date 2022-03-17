const { Router } = require('express');
const shiftsRouter = Router();

// controller
const { create, read, detail, update, remove, setRate } = require('./shifts.controller');

// routes
shiftsRouter.route('/').get(read).post(create);
shiftsRouter.route('/:id').get(detail).put(update).delete(remove);
shiftsRouter.route('/:id/rate').get(setRate);

// export
module.exports = {
  shiftsRouter
}