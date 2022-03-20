const { Router } = require('express');
const shiftRouter = Router();

// controllers
const { create, read, detail, update, remove } = require('./shift.controller');

// middleware
const { handleValidation } = require('../middleware');
const { validationRules, validate } = require('../middleware')

// routes
shiftRouter.route('/').get(read).post(validationRules('createShift'), validate, create);
shiftRouter.route('/:id').get(detail).put(validationRules('updateShift'), validate, update).delete(remove);

// export 
module.exports = shiftRouter;