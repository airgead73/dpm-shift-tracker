const { Router } = require('express');
const shiftRouter = Router();

// controllers
const { add, read, detail, update, remove } = require('./shift.controller');

// routes
shiftRouter.route('/').get(read);
shiftRouter.route('/add').get(add);
shiftRouter.route('/:id').get(detail);
shiftRouter.route('/:id/update').get(update);
shiftRouter.route('/:id/delete').get(remove);

// export
module.exports = shiftRouter;