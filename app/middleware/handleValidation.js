const handleValidation = (req, res, next) => {

  console.log(req.body);

  return next();


}

module.exports = handleValidation;