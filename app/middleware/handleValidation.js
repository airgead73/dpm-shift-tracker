const { body, validationResult } = require('express-validator');

const validationRules = ($method) => {
  console.log('validation rules');

  switch($method) {
    case 'createShift':
      return [
        body('date', 'Please, provide a date value. [val]').not().isEmpty().escape().toDate(),
        body('active', 'Please, enter active status. [val]').optional({nullable: true, checkFalsy: true}).isBoolean().escape(),
        body('hours', 'Please, enter hours. [val]').optional({nullable: true, checkFalsy: true}).isNumeric().escape().custom((value) => {
          if(value > 10) {
            throw new Error('Hours must be 10 or less.')
          }
          return true;
        }),
        body('items', 'Items should be a number.').optional({nullable: true, checkFalsy: true}).isNumeric().escape().custom((value) => {
          if(value > 5000) {
            throw new Error('Items should not be greater than 5000.')
          }
          return true
        }),
        body('floor', 'Please, enter floor. [val]').not().isEmpty().isNumeric().custom((value) => {
          if(value === 1 || value > 5) {
            throw new Error('Floor must be 2, 3, 4, or 5.')
          }
          return true;
        }),
        body('comments', 'Comments should be less than 500 characters.').optional({nullable: true, checkFalsy: true}).isString().trim().escape().isLength({ max: 500 })
      ];
      break;
      case 'updateShift':
        return [
          body('date', 'Please, provide a date value. [val]').optional({nullable: true, checkFalsy: true}).escape().toDate(),
          body('active', 'Please, enter active status. [val]').optional({nullable: true, checkFalsy: true}).isBoolean().escape(),
          body('hours', 'Please, enter hours. [val]').optional({nullable: true, checkFalsy: true}).isNumeric().escape().custom((value) => {
            if(value > 10) {
              throw new Error('Hours must be 10 or less.')
            }
            return true;
          }),
          body('items', 'Items should be a number.').optional({nullable: true, checkFalsy: true}).isNumeric().escape().custom((value) => {
            if(value > 5000) {
              throw new Error('Items should not be greater than 5000.')
            }
            return true
          }),
          body('floor', 'Please, enter floor. [val]').optional({nullable: true, checkFalsy: true}).isNumeric().escape().custom((value) => {
            if(value < 2 || value > 5) {
              throw new Error('Floor must be 2, 3, 4, or 5.')
            }
            return true;
          }),
          body('comments', 'Comments should be less than 500 characters.').optional({nullable: true, checkFalsy: true}).isString().trim().escape().isLength({ max: 500 })
        ];
        break;
  }
}

const validate = (req, res, next) => {

  const errors = validationResult(req);

  if(errors.isEmpty()) {
    res.validation_results = {
      success: true,
      errors: null
    }

    return next();

  }

  const extractedErrors = [];
  
  errors.array().map(err => extractedErrors.push({ field: err.param, message: err.msg }));

  res.validation_results = {
    success: false,
    errors
  }

  return next();

}

module.exports = {
  validationRules, validate
}