const { issuerBaseUrl, baseUrl, clientId, authSecret } = require('./env.auth');
const { authConfig } = require('./config.auth');

module.exports = {
  /* variables */
  issuerBaseUrl, 
  baseUrl, 
  clientId, 
  authSecret,
  /* config */
  authConfig
}