const { Router } = require('express');
const shiftRouter = Router();
const Shift = require('./shift');

// controller
const { create, read, detail, update, remove } = require('./shift.controller');

// middleware
const { handleQuery } = require('./middleware.api');

// routes
shiftRouter.route('/').get(handleQuery(Shift), read).post(create);
shiftRouter.route('/:id').get(detail).put(update).delete(remove);
//shiftsRouter.route('/:id/rate').get(setRate);

// export
module.exports = shiftRouter;
