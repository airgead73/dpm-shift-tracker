const { Router } = require('express');
const shiftRouter = Router();
const Shift = require('./shift');

// controllers
const { create, read, detail, update, remove } = require('./shift.controller');

// middleware
const { checkItem, handleValidation } = require('../middleware');
const { validationRules, validate } = require('../middleware')

// routes
shiftRouter.route('/').get(read).post(validationRules('createShift'), validate, create);
shiftRouter.route('/:id').get(detail).put(checkItem(Shift), update).delete(remove);

// export 
module.exports = shiftRouter;