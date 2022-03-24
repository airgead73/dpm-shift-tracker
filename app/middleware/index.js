const handleError = require('./handleError');
const handleQuery = require('./handleQuery');
const checkAuthClient = require('./handleAuth');
const { validationRules, validate } = require('./handleValidation');

module.exports = {
  checkAuthClient,
  handleError,
  handleQuery,
  validationRules,
  validate
}