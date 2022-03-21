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
const { authConfig, connectDB, helmentPolicies, limiter, sessionConfig } = require('./config');
const { isDev } = require('./config/env');
const { apiRouter, clientRouter } = require('./routers');

/**
 * app activation
 */
 const app = express();
 connectDB();
 app.use(auth(authConfig));

 /** 
 * security
 */
app.use(helmet());
app.use(helmet.contentSecurityPolicy(helmentPolicies));
app.use(xss());
app.use(hpp());
app.use(cors());
app.use(mongoSanitize());
app.use(limiter)

/**
 * middleware
 */
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(session(sessionConfig));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

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

app.use('/api', apiRouter);
app.use('/', clientRouter);

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