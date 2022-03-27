const asyncHandler = require('express-async-handler');
const Shift = require('../units-api/shift');

/**
 * @desc Create shift view
 * @route GET - /add
 * @access Private
 * */

exports.add = asyncHandler(async (req, res, next) => {
  return res
    .status(200)
    .json({ 
      success: true, 
      message: "view create shift"
    });
});

/**
 * @desc Read shifts view
 * @route GET - /
 * @access Private
 * */

exports.read = asyncHandler(async (req, res, next) => {

  const { success, count, data: shifts } = res.results

  return res
    .status(200)
    .json({ 
      success, 
      count,
      shifts
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
    .json({ 
      success: false, 
      message: "Shift not found."
    });    
  }

  return res
    .status(200)
    .json({ 
      success: true, 
      message: `View: read shift ${shift.date_formatted}.`,
      shift
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
      message: `View: update shift ${shift.date_formatted}.`
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