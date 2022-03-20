const asyncHandler = require('express-async-handler');

/**
 * @desc Create shift
 * @route POST - /api/shifts
 * @access Private
 * */

 exports.create = asyncHandler(async (req, res, next) => { 

 
  res.status(200).json({
    success: true,    
    message: 'POST: create shift',

  });

});

/**
 * @desc Create shift
 * @route GET - /api/shifts
 * @access Private
 * */

 exports.read = asyncHandler(async (req, res, next) => { 

 
  res.status(200).json({
    success: true,    
    message: 'GET: read shifts',

  });

});

/**
 * @desc Create shift
 * @route GET - /api/shifts/:id
 * @access Private
 * */

 exports.detail = asyncHandler(async (req, res, next) => { 

 
  res.status(200).json({
    success: true,    
    message: 'GET: read one shift',

  });

});

/**
 * @desc Create shift
 * @route PUT - /api/shifts/:id
 * @access Private
 * */

 exports.update = asyncHandler(async (req, res, next) => { 

 
  res.status(200).json({
    success: true,    
    message: 'PUT: update a shift',

  });

});

/**
 * @desc Create shift
 * @route DELETE - /api/shifts/:id
 * @access Private
 * */

 exports.remove = asyncHandler(async (req, res, next) => { 

 
  res.status(200).json({
    success: true,    
    message: 'DELETE: delete a shift',

  });

});