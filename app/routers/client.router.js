const { Router } = require('express');
const clientRouter = Router();
const { landingRouter } = require('../client/units/landing');

clientRouter.use('/', landingRouter);

module.exports = {
  clientRouter
}