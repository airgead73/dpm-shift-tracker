const { Router } = require('express');
const shiftRouter = Router();

// controller
const { create } = require('./shifts.controller');

// routes
shiftsRouter.route('/').post(create);
//shiftsRouter.route('/:id').get(detail).put(update).delete(remove);
//shiftsRouter.route('/:id/rate').get(setRate);

// export
module.exports = shiftRouter;
