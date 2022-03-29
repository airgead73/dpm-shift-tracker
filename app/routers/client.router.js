const { Router } = require('express');
const clientRouter = Router();
const { shiftRouter } = require('../units-client');
const { checkAuthClient } = require('../middleware');

clientRouter.use('/', checkAuthClient, shiftRouter);

module.exports = clientRouter;