const asyncHandler = require('express-async-handler');
const { getActive } = require('./shift.services');

/**
 * @desc view shift landing page
 * @route GET = /
 * @access Private
 */

 exports.dashboard = asyncHandler(async (req, res, next) => {

  const { success, count, data: shifts } = res.results;

  return res
    .status(200)
    .render('pages/shifts', {
      success,
      count,
      shifts,
      title: "DPM shift tracker",
      main: 'main--shifts'

    });
    
});