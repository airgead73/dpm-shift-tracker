const { Router } = require('express');
const shiftRouter = Router();

// controllers
const { create, read, detail, update, remove } = require('./shift.controller');

// middleware
const { handleValidation } = require('../middleware')

// routes
shiftRouter.route('/').get(read).post(handleValidation, create);
shiftRouter.route('/:id').get(detail).put(update).delete(remove);

// export 
module.exports = shiftRouter;