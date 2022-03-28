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
 * @desc Read shifts
 * @route GET - /api/shifts
 * @access Private
 * */

 exports.read = asyncHandler(async (req, res, next) => { 

  const { success, count, data: shifts } = res.results;
 
  res.status(200).json({
    success,    
    count,
    shifts

  });

});

/**
 * @desc Read shift detail
 * @route GET - /api/shifts/:id
 * @access Private
 * */

 exports.detail = asyncHandler(async (req, res, next) => { 

  // check if shift exists

  let shift = await Shift.findById(req.params.id);

  if(!shift) {
    const error = new Error("Shift was not found.");
    error.status = 404;
    error.response = "json"
    throw error;   
  }  

  res.status(201).json({
    success: true,    
    message: 'GET: read one shift',
    shift

  });

});

/**
 * @desc Update shift
 * @route PUT - /api/shifts/:id
 * @access Private
 * */

 exports.update = asyncHandler(async (req, res, next) => { 

  // check if shift exists

  let shift = await Shift.findById(req.params.id);

  if(!shift) {
    const error = new Error("Shift was not found.");
    error.status = 404;
    error.response = "json"
    throw error;    
  }

  // handle adding items if shift is active

  let reqBody = {...req.body}

  const { items } = reqBody;
  const { active } = shift;

  if(active && items ) {
    reqBody.items = parseInt(shift.items) + parseInt(items);   
  }
 
  shift = await Shift.findByIdAndUpdate(req.params.id, reqBody, { new: true }), 

  res.status(200).json({
    success: true,    
    message: "shift updated",
    shift
  });

});

/**
 * @desc Remove shift
 * @route DELETE - /api/shifts/:id
 * @access Private
 * */

 exports.remove = asyncHandler(async (req, res, next) => { 

  // check if shift exists

  let shift = await Shift.findById(req.params.id);

  if(!shift) {
    const error = new Error("Shift was not found.");
    error.status = 404;
    error.response = "json"
    throw error;    
  } 

  // remove shift
  
  shift.remove();
 
  res.status(200).json({
    success: true,    
    message: `Shift has been deleted: ${shift.date_formatted}`,
  });

});




