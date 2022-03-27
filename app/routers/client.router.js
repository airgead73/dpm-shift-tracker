const { Router } = require('express');
const clientRouter = Router();
const { shiftRouter } = require('../units-client');

clientRouter.use('/', shiftRouter);

module.exports = clientRouter;