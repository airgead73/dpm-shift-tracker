const asyncHandler = require('express-async-handler');
const { getShifts } = require('../services');

/**
 * @desc view landing page
 * @route GET - /
 * */

exports.landing = asyncHandler(async (req, res, next) => {

  const viewPath = res.locals.isAuthenticated ? 'pages/protected' : 'pages/public'; 

  return res
    .status(200)
    .render( viewPath, {
      success: true,
      title: 'DPM shift tracker'
    });
    
});