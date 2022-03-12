const { Router } = require('express');
const apiRouter = Router();
const { requiresAuth } = require('express-openid-connect');
const { shiftsRouter } = require('../api/units/shifts');

apiRouter.use(requiresAuth());
apiRouter.use('/shifts', shiftsRouter);

module.exports = {
  apiRouter
}
