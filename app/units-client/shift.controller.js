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
 * @desc view shift add page
 * @route GET = /add
 * @access Private
 */

 exports.add = asyncHandler(async (req, res, next) => {

  return res
    .status(200)
    .render('pages/shifts-add', {
      title: "DPM shift tracker",
      main: 'main--add'
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
      .render('pages/error', {
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
      landing: false

    });
    
});

/**
 * @desc view shift update page
 * @route GET = /:id/update
 * @access Private
 */

 exports.update = asyncHandler(async (req, res, next) => {

  let shift = await Shift.findById(req.params.id);

  if(!shift) {
    return res
      .status(404)
      .render('pages/error', {
        success: false,
        status: 404,
        message: "This shift has not been found."
    });
  }

  let { update } = req.query;

  const items_only = update === "items"; 

  return res
    .status(200)
    .render('pages/shifts-update', {
      success: true,
      shift: shift,
      title: "DPM shift tracker",
      main: 'main--update',
      items_only
    });
    
});