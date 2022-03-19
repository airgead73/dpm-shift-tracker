const { Router } = require('express');
const shiftsRouter = Router();

// controller
const { landing } = require('./shift.controller');

// routers
shiftsRouter
  .route('/')
  .get(landing);

module.exports = shiftsRouter;