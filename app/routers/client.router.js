const { Router } = require('express');
const clientRouter = Router();
const { checkAuthClient } = require('../middleware');
const { shiftRouter } = require('../units-client');

clientRouter.use('/', shiftRouter);

module.exports = clientRouter;