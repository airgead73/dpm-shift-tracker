const asyncHandler = require('express-async-handler');
const Shift = require('./shift');

/**
 * @desc Create shift
 * @route POST - /api/shifts
 * @access Private
 * */

 exports.create = asyncHandler(async (req, res, next) => { 

  const { success, errors } = res.validation_results;

  if(success) {
    const shift = new Shift(req.body);

    await shift.save();
    
    res.status(200).json({
      success: true,    
      message: `Shift has been created: ${shift.date_formatted}.`,
      shift
    });

  } else {

    res.status(400).json({
      success: false,
      validation_results: errors
    });

  }



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

  res.status(201).json({
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

  const { success, errors } = res.validation_results;

  if(success) {
    const shift = await Shift.findByIdAndUpdate(req.params.id, req.body, { new: true });
    
    res.status(200).json({
      success: true,    
      message: `Shift has been updated: ${shift.date_formatted}.`,
      shift
    });

  } else {

    res.status(400).json({
      success: false,
      validation_results: errors
    });
    
  }

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