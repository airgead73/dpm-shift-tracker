const { Router } = require('express');
const apiRouter = Router();
const { requiresAuth } = require('express-openid-connect');
const { shiftRouter } = require('../units-api');

apiRouter.use(requiresAuth());
apiRouter.use('/shifts', shiftRouter);

module.exports = apiRouter;