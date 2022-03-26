const { Router } = require('express');
const shiftRouter = Router();
const Shift = require('../units-api/shift');

// controller
const { dashboard, detail, add, update } = require('./shift.controller');

// middleware
const { handleQuery } = require('../middleware');

//router
shiftRouter.route('/').get(handleQuery(Shift), dashboard);
shiftRouter.route('/add').get(add);
shiftRouter.route('/:id').get(detail);
shiftRouter.route('/:id/update').get(update);

module.exports = shiftRouter;