const { Router } = require('express');
const clientRouter = Router();
const { checkAuthClient } = require('../middleware');
const { landingRouter, shiftRouter } = require('../units-client');

clientRouter.use('/', checkAuthClient, landingRouter);
clientRouter.use('/shifts', checkAuthClient, shiftRouter);

module.exports = clientRouter;