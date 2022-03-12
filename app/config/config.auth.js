const { issuerBaseUrl, baseUrl, clientId, authSecret } = require('./env.auth');

const authConfig = {
  authRequired: false,
  auth0Logout: true,
  issuerBaseURL: issuerBaseUrl,
  baseURL: baseUrl,
  clientID: clientId,
  secret: authSecret,
  idpLogout: true,  
}

module.exports = {
  authConfig
}