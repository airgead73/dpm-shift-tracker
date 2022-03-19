const { Router } = require('express');
const apiRouter = Router();
const { shiftRouter } = require('../units-api');

apiRouter.use('/shifts', shiftRouter);

module.exports = apiRouter;