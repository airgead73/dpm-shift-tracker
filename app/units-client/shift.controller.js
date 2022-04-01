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

  const { isDevelopment } = res.locals;

  return res
    .status(200)
    .render('pages/shifts-add', {
      success: true,
      title: "add shift",
      main: "main--add",
      isDevelopment
    });

});

/**
 * @desc Read shifts view
 * @route GET - /shifts
 * @access Private
 * */

exports.dashboard = asyncHandler(async (req, res, next) => {

  const { success, count, data: shifts } = res.results;

  const { isDevelopment } = res.locals;


  return res
    .status(200)
    .render('pages/shifts', {
      success,
      count,
      shifts,
      title: "Shifts",
      main: "main--shifts",
      isDevelopment
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
   const error = new Error("Shift was not found.");
   error.status = 404;
   error.response = "html"
   throw error;
  }

  const { isDevelopment } = res.locals;

  return res
    .status(200)
    .render('pages/shifts-detail', {
      success: true,
      shift: shift,
      title: `${shift.date_formatted}`,
      main: "main--detail",
      isDevelopment
    });

});

/**
 * @desc Update shift view
 * @route GET - /:id/update
 * @access Private
 * */

exports.update = asyncHandler(async (req, res, next) => {

  let shift = await Shift.findById(req.params.id);

  if(!shift) {
    const error = new Error("Shift was not found.");
    error.status = 404;
    error.response = "html"
    throw error;   
  }
  
  const { fields } = req.query;

  const { isDevelopment } = res.locals;

  return res
    .status(200)
    .render('pages/shifts-update', {
      success: true,
      shift: shift,
      title: `Update ${shift.date_formatted}`,
      main: "main--update",
      fields,
      isDevelopment
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
    const error = new Error("Shift was not found.");
    error.status = 404;
    error.response = "html"
    throw error;   
  }

  return res
    .status(200)
    .json({ 
      success: true, 
      message: `View: delete shift ${shift.date_formatted}.`
    });
});