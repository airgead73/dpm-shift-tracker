const { Router } = require('express');
const shiftRouter = Router();
const Shift = require('./shift');

// controllers
const { create, read, detail, update, remove } = require('./shift.controller');

// middleware
const { handleValidation, handleQuery } = require('../middleware');
const { validationRules, validate } = require('../middleware')

// routes
shiftRouter.route('/').get(handleQuery(Shift), read).post(validationRules('createShift'), validate, create);
shiftRouter.route('/:id').get(detail).put(update).delete(remove);

// export 
module.exports = shiftRouter;