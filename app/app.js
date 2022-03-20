/**
 * external imports
 */
const express = require('express');
const path = require('path');
const { auth } = require('express-openid-connect');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const helmet = require('helmet');
const hpp = require('hpp');
const mongoSanitize = require('express-mongo-sanitize');
const session = require('express-session');
const xss = require('xss-clean');

/**
 * internal imports
 */

const { handleError } = require('./middleware');
const { authConfig, connectDB, limiter, sessionConfig } = require('./config');
const { isDev } = require('./config/env');

/**
 * app activation
 */
 const app = express();
 connectDB();
 app.use(auth(authConfig));

 /** 
 * @desc security
 */
app.use(helmet());
app.use(xss());
app.use(hpp());
app.use(cors());
app.use(mongoSanitize());
app.use(limiter)

/**
 * middleware
 */
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(session(sessionConfig))

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
 app.use(function(req, res, next) {
  const error = new Error('Path not found');
  error.status = 404;
  next(error);
});

app.use(handleError);


/**
 * export
 */

module.exports = app