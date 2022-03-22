const { Router } = require('express');
const clientRouter = Router();
const { checkAuthClient } = require('../middleware');
const { landingRouter, shiftRouter } = require('../units-client');

clientRouter.use('/', landingRouter);
clientRouter.use('/shifts', shiftRouter);

module.exports = clientRouter;