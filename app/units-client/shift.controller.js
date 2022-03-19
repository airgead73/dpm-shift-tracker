const asyncHandler = require('express-async-handler');
const { getById, getAll, getActive } = require('./shift.services');

/**
 * @desc view shift landing page
 * @route GET = /
 * @access Private
 */

exports.landing = asyncHandler(async (req, res, next) => {

  const activeShift = await getActive();
  const renderPath = activeShift === null ? 'pages/shifts-new' : 'pages/shifts-current';

  return res
    .status(200)
    .render(renderPath, {
      success: true,
      title: "DPM shift tracker",
      shift: activeShift
    });
    
});

/**
 * @desc view shift dashboard page
 * @route GET = /shifts
 * @access Private
 */

 exports.dashboard = asyncHandler(async (req, res, next) => {

  const shifts = await getAll();

  return res
    .status(200)
    .render('pages/shifts-dashboard', {
      success: true,
      title: "DPM shift tracker",
      shifts
    });
    
});

/**
 * @desc view shift detail page
 * @route GET = /shifts/:id
 * @access Private
 */

 exports.detail = asyncHandler(async (req, res, next) => {

  const shift = await getById(req.params.id);

  return res
    .status(200)
    .render('pages/shifts-detail', {
      success: true,
      title: "DPM shift tracker",
      shift
    });
    
});

/**
 * @desc view shift update page
 * @route GET = /shifts/:id/update
 * @access Private
 */

 exports.update = asyncHandler(async (req, res, next) => {

  const shift = await getById(req.params.id);

  return res
    .status(200)
    .render('pages/shifts-update', {
      success: true,
      title: "DPM shift tracker",
      shift
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



