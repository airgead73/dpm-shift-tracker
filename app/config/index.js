const { authConfig } = require('./config.auth');
const { connectDB } = require('./config.db');
const { limiter, sessionConfig } = require('./config.session');

module.exports = {
  authConfig,
  connectDB,
  limiter,
  sessionConfig
}