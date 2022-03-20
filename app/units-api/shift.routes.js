const { Router } = require('express');
const { shiftRouter } = Router();

// controllers
const { create, read, detail, update, remove } = require('./shift.controller');

// routes
shiftRouter.route('/').get(read).post(create);
shiftRouter.route('/:id').get(detail).put(update).delete(remove);

// export 
module.export = shiftRouter;