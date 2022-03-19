const { Router } = require('express');
const shiftRouter = Router();

// controller
const { create, read, detail, update } = require('./shift.controller');

// routes
shiftRouter.route('/').get(read).post(create);
shiftRouter.route('/:id').get(detail).put(update);
//shiftsRouter.route('/:id/rate').get(setRate);

// export
module.exports = shiftRouter;
