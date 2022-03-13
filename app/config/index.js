const { isDev } = require('./env');
const { issuerBaseUrl, baseUrl, clientId, authSecret } = require('./env.auth');
const { mongoUri } = require('./env.db');
const { authConfig } = require('./config.auth');
const { connectDB } = require('./config.db');

module.exports = {
  /* variables */
  issuerBaseUrl, 
  baseUrl, 
  clientId, 
  authSecret,
  isDev,
  mongoUri,
  /* config */
  authConfig,
  connectDB
}