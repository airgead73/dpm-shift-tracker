const { Router } = require('express');
const shiftRouter = Router();
const Shift = require('../units-api/shift');

// controller
const { dashboard, detail } = require('./shift.controller');

// middleware
const { handleQuery } = require('../middleware');

//router
shiftRouter.route('/').get(handleQuery(Shift), dashboard);
shiftRouter.route('/:id').get(detail);

module.exports = shiftRouter;