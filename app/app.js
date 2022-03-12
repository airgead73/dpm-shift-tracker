/**
 * external imports
 */
const express = require('express');
const path = require('path');
const { auth } = require('express-openid-connect');

/**
 * internal imports
 */

const { clientRouter, apiRouter } = require('./routers');
const { authConfig } = require('./config');

/**
 * app activation
 */
 const app = express();
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
 * export
 */

module.exports = app