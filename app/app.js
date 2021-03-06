/**
 * external imports
 */
const express = require('express');
const path = require('path');
const { auth } = require('express-openid-connect');

/**
 * internal imports
 */
 const {/** variables */ isDev, /** configs */ authConfig, connectDB } = require('./config');
const { clientRouter, apiRouter } = require('./routers');
const { errorHandler } = require('./middleware/errorMiddleware');



/**
 * app activation
 */
 const app = express();
 connectDB();
 app.use(auth(authConfig));

/**
 * middleware
 */

app.use(express.static(path.join(__dirname, 'client/public')));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.set('views', path.join(__dirname, 'client/views'));
app.set('view engine', 'ejs');

/**
 * dev middleware
 */
if(isDev) {
  const logRequests = require('./middleware/logMiddleware');
  app.use(logRequests);
}

/**
 * locals
 */

 app.use(function (req, res, next) {
  res.locals.isAuthenticated = req.oidc.isAuthenticated();
  next();
})

/**
 * routes
 */

app.use('/', clientRouter);
app.use('/api', apiRouter);

/**
 * error handling
 */

app.use(function(req, res, next) {
  const error = new Error('Path not found');
  error.status = 404;
  next(error);
});

app.use(errorHandler);

/**
 * export
 */

module.exports = app