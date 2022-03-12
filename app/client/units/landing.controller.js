const asyncHandler = require('express-async-handler');

/**
 * @desc view landing page
 * @route GET - /
 * */

exports.landing = asyncHandler(async (req, res, next) => {
  return res
    .status(200)
    .render('pages/protected', {
      success: true,
      title: 'DPM shift tracker'
    });
});