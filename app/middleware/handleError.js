const handleError = (err, req, res, next) => {
  const statusCode = err.status || res.statusCode || 500;
  const errorObject = {
    error: true,
    message: err.message,
    status: statusCode,
    stack: process.env.NODE_ENV === 'production' ? null : err.stack
  }

  res.status(statusCode).json(errorObject);
}

module.exports = handleError;

