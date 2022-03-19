const asyncHandler = require('express-async-handler');
const Shift = require('../units-api/shift');

/**
 * @desc view shift landing page
 * @route GET = /
 * @access Private
 */

exports.landing = asyncHandler(async (req, res, next) => {

  const shift = await Shift.findOne({ active: true});

  console.log(shift);

  return res
    .status(200)
    .render('pages/shifts', {
      success: true,
      title: "DPM shift tracker"
    });
    
});