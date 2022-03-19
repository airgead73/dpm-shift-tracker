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
  
  res.status(200).json({
    message: "get one shift",
  });

});

/**
 * @desc Read one shift
 * @route GET - /api/shifts/:id
 * @access Private
 * */

 exports.update = asyncHandler(async (req, res) => { 

  let message;
  const { field } = req.query;

  switch(only) {
    case 'items':
      message = 'only update items';
      break;
    case 'rate':
      message = 'only update rate';
      break;
    case 'all':
      message = 'update all fields'
    default:
      message = 'update miscellaneous fields'
  }

  //const shift = await Shift.findOne({ id: req.params.id});
  //const shift = await Shift.findByIdAndUpdate(req.params.id, req.body, { new: true });
  
  res.status(200).json({
    message
  });

});




 