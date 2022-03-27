const { Router } = require('express');
const shiftRouter = Router();
const Shift = require('../units-api/shift');

// controllers
const { add, read, detail, update, remove } = require('./shift.controller');

// middleware
const { handleQuery } = require('../middleware');

// routes
shiftRouter.route('/').get(handleQuery(Shift), read);
shiftRouter.route('/add').get(add);
shiftRouter.route('/:id').get(detail);
shiftRouter.route('/:id/update').get(update);
shiftRouter.route('/:id/delete').get(remove);

// export
module.exports = shiftRouter;