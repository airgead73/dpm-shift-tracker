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

  const { success, count, data: shifts } = res.results;

 
  res.status(200).json({
    success,    
    count,
    shifts

  });

});

/**
 * @desc Create shift
 * @route GET - /api/shifts/:id
 * @access Private
 * */

 exports.detail = asyncHandler(async (req, res, next) => { 

  // check if shift exists

  let shift = await Shift.findById(req.params.id);

  if(!shift) {
    return res.status(404).json({
      success: false,    
      message: "Shift not found",
    });    
  }  

  res.status(201).json({
    success: true,    
    message: 'GET: read one shift',
    shift

  });

});

/**
 * @desc Create shift
 * @route PUT - /api/shifts/:id
 * @access Private
 * */

 exports.update = asyncHandler(async (req, res, next) => { 

  // check if shift exists

  let shift = await Shift.findById(req.params.id);

  if(!shift) {
    return res.status(404).json({
      success: false,    
      message: "Shift not found",
    });    
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
 * @desc Create shift
 * @route PUT - /api/shifts/:id/end
 * @access Private
 * */

exports.end = asyncHandler(async (req, res, next) => {

    // check if shift exists

    let shift = await Shift.findById(req.params.id);

    if(!shift) {
      return res.status(404).json({
        success: false,    
        message: "Shift not found",
      });    
    }

    shift = await Shift.findByIdAndUpdate(req.params.id, {$set: { active: false }}, { new: true });

    res.status(200).redirect('/');

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