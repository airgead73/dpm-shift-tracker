const { Router } = require('express');
const shiftRouter = Router();
const Shift = require('../units-api/shift');

// controller
const { dashboard } = require('./shift.controller');

// middleware
const { handleQuery } = require('../middleware');

//router
shiftRouter.route('/').get(handleQuery(Shift), dashboard);

module.exports = shiftRouter;