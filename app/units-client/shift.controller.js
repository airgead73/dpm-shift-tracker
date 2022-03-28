const asyncHandler = require('express-async-handler');
const Shift = require('../units-api/shift');

/**
 * @desc Shifts landing view
 * @route GET - /
 * @access Private
 * */

 exports.landing = asyncHandler(async (req, res, next) => {

  let shift = await Shift.findOne({ active: true });

  if(shift) {
    return res
      .status(202)
      .redirect(`/${shift.id}/update?fields=items`)
  } else {
    return res
      .status(202)
      .redirect('/add')
  }

});

/**
 * @desc Create shift view
 * @route GET - /add
 * @access Private
 * */

exports.add = asyncHandler(async (req, res, next) => {

  return res
    .status(200)
    .render('pages/shifts-add', {
      success: true,
      title: "add shift",
      main: "main--add"
    });

});

/**
 * @desc Read shifts view
 * @route GET - /dashboard
 * @access Private
 * */

exports.dashboard = asyncHandler(async (req, res, next) => {

  const { success, count, data: shifts } = res.results;

  return res
    .status(200)
    .render('pages/shifts', {
      success,
      count,
      shifts,
      title: "Shifts",
      main: "main--shifts"
    });

});

/**
 * @desc Read detail view
 * @route GET - /:id
 * @access Private
 * */

exports.detail = asyncHandler(async (req, res, next) => {

  let shift = await Shift.findById(req.params.id);

  if(!shift) {
    return res
    .status(404)
    .render('pages/error', {
      success: true,
      title: "Error 404",
      main: "main--error",
      message: "Shift could not be found.",
      status: "404"
    });    
  }

  return res
    .status(200)
    .render('pages/shifts-detail', {
      success: true,
      shift: shift,
      title: `${shift.date_formatted}`,
      main: "main--detail"
    });

});

/**
 * @desc Update shift view
 * @route GET - /:id/update
 * @access Private
 * */

exports.update = asyncHandler(async (req, res, next) => {

  let shift = await Shift.findById(req.params.id);
  
  const { fields } = req.query;

  if(!shift) {
    return res
    .status(404)
    .json({ 
      success: false, 
      message: "Shift not found."
    });    
  }

  return res
    .status(200)
    .render('pages/shifts-update', {
      success: true,
      shift: shift,
      title: `Update ${shift.date_formatted}`,
      main: "main--update",
      fields
    });


});

/**
 * @desc Delete shift view
 * @route GET - /:id/delete
 * @access Private
 * */

 exports.remove = asyncHandler(async (req, res, next) => {

  let shift = await Shift.findById(req.params.id);

  if(!shift) {
    return res
    .status(404)
    .json({ 
      success: false, 
      message: "Shift not found."
    });    
  }

  return res
    .status(200)
    .json({ 
      success: true, 
      message: `View: delete shift ${shift.date_formatted}.`
    });
});