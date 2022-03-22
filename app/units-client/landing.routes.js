const { Router } = require('express');
const landingRouter = Router();

// controller
const { landing } = require('./landing.controller');

//router
landingRouter.route('/').get(landing);

module.exports = landingRouter;