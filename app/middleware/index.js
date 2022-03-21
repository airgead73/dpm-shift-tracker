const handleError = require('./handleError');
const handleQuery = require('./handleQuery');
const { validationRules, validate } = require('./handleValidation');

module.exports = {
  handleError,
  handleQuery,
  validationRules,
  validate
}