const asyncHandler = require('express-async-handler');

/**
 * @desc view landing page
 * @route GET - /
 * */

exports.landing = asyncHandler(async (req, res, next) => {

  const isUser = true;
  const viewPath = isUser ? 'pages/protected' : 'pages/public'

  return res
    .status(200)
    .render( viewPath, {
      success: true,
      title: 'DPM shift tracker'
    });
    
});