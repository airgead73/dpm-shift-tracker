const { Router } = require('express');
const clientRouter = Router();
const { checkAuthClient } = require('../middleware/authMiddleware');
const { shiftsRouter } = require('../units-client');

clientRouter.use('/', checkAuthClient, shiftsRouter);

module.exports = clientRouter;