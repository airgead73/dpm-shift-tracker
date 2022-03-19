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