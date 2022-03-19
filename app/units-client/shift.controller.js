const asyncHandler = require('express-async-handler');

/**
 * @desc view shift landing page
 * @route GET = /
 * @access Private
 */

exports.landing = asyncHandler(async (req, res, next) => {

  return res
    .status(200)
    .render('pages/shifts', {
      success: true,
      title: "DPM shift tracker"
    });
    
});

/**
 * @desc view shift dashboard page
 * @route GET = /shifts
 * @access Private
 */

 exports.dashboard = asyncHandler(async (req, res, next) => {

  return res
    .status(200)
    .render('pages/shifts-dashboard', {
      success: true,
      title: "DPM shift tracker"
    });
    
});

/**
 * @desc view shift detail page
 * @route GET = /shifts/:id
 * @access Private
 */

 exports.detail = asyncHandler(async (req, res, next) => {

  return res
    .status(200)
    .render('pages/shifts-detail', {
      success: true,
      title: "DPM shift tracker"
    });
    
});

/**
 * @desc view shift update page
 * @route GET = /shifts/:id/update
 * @access Private
 */

 exports.update = asyncHandler(async (req, res, next) => {

  return res
    .status(200)
    .render('pages/shifts-update', {
      success: true,
      title: "DPM shift tracker"
    });
    
});

/**
 * @desc view shift remove page
 * @route GET = /shifts/:id/remove
 * @access Private
 */

 exports.remove = asyncHandler(async (req, res, next) => {

  return res
    .status(200)
    .render('pages/shifts-remove', {
      success: true,
      title: "DPM shift tracker"
    });
    
});



