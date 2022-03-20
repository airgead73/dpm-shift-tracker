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

/**
 * app activation
 */
 const app = express();
 connectDB();
 app.use(auth(authConfig));

/**
 * middleware
 */

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

/**
 * dev middleware
 */

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



/**
 * error handling
 */



/**
 * export
 */

module.exports = app