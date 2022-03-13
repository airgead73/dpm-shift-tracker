const asyncHandler = require('express-async-handler');
const Shift = require('./shift');

/**
 * @desc Create shift
 * @route POST - /api/shifts
 * @access Private
 * */

 exports.create = asyncHandler(async (req, res, next) => { 

  const shift = new Shift(req.body);

  await shift.save();
  
  res.status(200).json({
    success: true,    
    message: "create shift",
    shift
  });

});

/**
 * @desc Read shift
 * @route GET - /api/shifts
 * @access Private
 * */

 exports.read = asyncHandler(async (req, res) => { 
  
  res.status(200).json({
    message: "get shifts"
  });

});

/**
 * @desc Read one shift
 * @route GET - /api/shifts/:id
 * @access Private
 * */

 exports.readOne = asyncHandler(async (req, res) => { 
  
  res.status(200).json({
    message: "get one shift"
  });

});

/**
 * @desc Update shift
 * @route PUT - /api/shifts/:id
 * @access Private
 * */

 exports.update = asyncHandler(async (req, res) => { 
  
  res.status(200).json({
    message: "update shift"
  });

});

/**
 * @desc Delete shift
 * @route DELETE - /api/shifts/:id
 * @access Private
 * */

 exports.remove = asyncHandler(async (req, res) => { 
  
  res.status(200).json({
    message: "delete shift"
  });

});
