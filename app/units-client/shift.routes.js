const { Router } = require('express');
const shiftRouter = Router();

// controller
const { landing } = require('./shift.controller');

//router
shiftRouter.route('/').get(landing);

module.exports = shiftRouter;