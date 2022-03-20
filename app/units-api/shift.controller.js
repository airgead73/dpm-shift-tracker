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

  // check validation results

  const { success, errors } = res.validation_results;  

  if(!success) {
    return res.status(400).json({
      success: false,
      validation_results: errors
    });
  }

  // if passes validation, check if shift exists

  let shift = await Shift.findById(req.params.id);

  if(!shift) {

    return res.status(404).json({
      success: false,
      message: "This shift does not exist"
    });

  
  } else if(shift.active) {

    // if shift exists and is ACTIVE, add new items to current items, then update

    const { items: newItems } = req.body;
    const reqBody = {...req.body }
    reqBody.items = shift.items + newItems;
    const activeShift = await Shift.findByIdAndUpdate(req.params.id, reqBody, { new: true });

    return res.status(200).json({
      success: true,    
      message: `Shift has been updated: ${activeShift.date_formatted}.`,
      shift: activeShift
    });

  } else {

    // if shift exists and is INACTIVE, update as normal

    shift = await Shift.findByIdAndUpdate(req.params.id, req.body, { new: true });
    
    return res.status(200).json({
      success: true,    
      message: `Shift has been updated: ${shift.date_formatted}.`,
      shift
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