const { Router } = require('express');
const shiftsRouter = Router();

// controller
const { landing, dashboard, detail, update, remove } = require('./shift.controller');

// routers
shiftsRouter.route('/').get(landing);
shiftsRouter.route('/shifts').get(dashboard);
shiftsRouter.route('/shifts/:id').get(detail);
shiftsRouter.route('/shifts/:id/update').get(update);
shiftsRouter.route('/shifts/:id/remove').get(remove);
module.exports = shiftsRouter;