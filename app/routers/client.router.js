const { Router } = require('express');
const clientRouter = Router();
const { landingRouter } = require('../client/router');

clientRouter.use('/', landingRouter);

module.exports = {
  clientRouter
}