const { Router } = require('express');
const clientRouter = Router();
const { shiftsRouter } = require('../units-client');

clientRouter.use('/', shiftsRouter);

module.exports = clientRouter;