const { Router } = require('express');
const landingRouter = Router();

// controller
const { landing } = require('./landing.controller');

// routes
landingRouter
  .route('/')
  .get(landing);


module.exports = {
  landingRouter
}