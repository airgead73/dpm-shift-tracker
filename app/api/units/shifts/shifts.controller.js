const asyncHandler = require('express-async-handler');
const Shift = require('./shift');
const format = require('date-fns/format');

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
    message: `Shift has been created: ${shift.date_formatted}.`,
    shift
  });

});

/**
 * @desc Read shift
 * @route GET - /api/shifts
 * @access Private
 * */

 exports.read = asyncHandler(async (req, res) => { 

  const shifts = await Shift.find().sort('-date');
  
  res.status(200).json({
    message: "get shifts",
    shifts
    
  });

});

/**
 * @desc Read one shift
 * @route GET - /api/shifts/:id
 * @access Private
 * */

 exports.detail = asyncHandler(async (req, res) => { 

  const shift = await Shift.findOne().sort({ date: -1});
  
  res.status(200).json({
    message: "get one shift",
    shift
  });

});

/**
 * @desc Update shift
 * @route PUT - /api/shifts/:id
 * @access Private
 * */

 exports.update = asyncHandler(async (req, res) => { 

  let shift = await Shift.findById(req.params.id);

  const { items: newItems } = req.body;
  const { items: oldItems } = shift;
  
  const newCount = parseInt(newItems); + parseInt(oldItems);;

  shift = await Shift.findByIdAndUpdate(req.params.id, { $set: { items: newCount } }, { new: true });
  
  res.status(200).json({
    success: true,
    message: `Shift has been updated: ${shift.date_formatted}.`,
    new_count: newCount
  });

});

/**
 * @desc Delete shift
 * @route DELETE - /api/shifts/:id
 * @access Private
 * */

 exports.remove = asyncHandler(async (req, res) => { 

  let shift = await Shift.findById(req.params.id);

  await shift.remove();
  
  res.status(200).json({
    success: true,
    message: `Shift deleted: ${shift.date_formatted}.`
  });

});

/**
 * @desc Update shift
 * @route GET - /api/shifts/:id/rate
 * @access Private
 * */

 exports.setRate = asyncHandler(async (req, res) => { 

  let shift = await Shift.findById(req.params.id);
  const newRate = shift.calculateRate(); 
  
  shift = await Shift.findByIdAndUpdate(req.params.id, { $set: { rate: newRate } }, { new: true });
  
  res.status(200).json({
    success: true,
    message: `Shift rate calculated: ${shift.date_formatted}.`,
    rate: shift.rate
  });

});


