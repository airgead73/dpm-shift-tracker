const { Router } = require('express');
const apiRouter = Router();
const { shiftRouter } = require('../api');

apiRouter.use('/shifts', shiftRouter);

module.exports = apiRouter;