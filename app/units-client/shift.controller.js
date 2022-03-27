const asyncHandler = require('express-async-handler');

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
  return res
    .status(200)
    .json({ 
      success: true, 
      message: "view read shifts"
    });
});

/**
 * @desc Read detail view
 * @route GET - /:id
 * @access Private
 * */

exports.detail = asyncHandler(async (req, res, next) => {
  return res
    .status(200)
    .json({ 
      success: true, 
      message: "view shift detail"
    });
});

/**
 * @desc Update shift view
 * @route GET - /:id/update
 * @access Private
 * */

exports.update = asyncHandler(async (req, res, next) => {
  return res
    .status(200)
    .json({ 
      success: true, 
      message: "view create shift"
    });
});

/**
 * @desc Delete shift view
 * @route GET - /:id/delete
 * @access Private
 * */

 exports.remove = asyncHandler(async (req, res, next) => {
  return res
    .status(200)
    .json({ 
      success: true, 
      message: "view delete shift"
    });
});