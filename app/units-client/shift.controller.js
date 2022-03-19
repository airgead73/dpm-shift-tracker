const asyncHandler = require('express-async-handler');

/**
 * @desc view shift landing page
 * @route GET = /
 * @access Private
 */

exports.landing = asyncHandler(async (req, res, next) => {

  return res
    .status(200)
    .render('pages/shifts/index', {
      success: true,
      title: "DPM shift tracker"
    });
    
});