const asyncHandler = require('express-async-handler');
const Shift = require('../units-api/shift')

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

/**
 * @desc view shift detail page
 * @route GET = /:id
 * @access Private
 */

 exports.detail = asyncHandler(async (req, res, next) => {

  let shift = await Shift.findById(req.params.id);

  if(!shift) {
    return res
      .status(404)
      .render('page/error', {
        success: false,
        status: 404,
        message: "This shift has not been found."
      });
  }

  return res
    .status(200)
    .render('pages/shifts-detail', {
      success: true,
      shift: shift,
      title: "DPM shift tracker",
      main: 'main--detail',
      detail: true

    });
    
});