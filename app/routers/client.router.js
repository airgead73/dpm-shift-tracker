const { Router } = require('express');
const clientRouter = Router();
const { checkAuth } = require('../middleware/authMiddleware');
const { shiftsRouter } = require('../units-client');


clientRouter.use('/', shiftsRouter);

module.exports = clientRouter;