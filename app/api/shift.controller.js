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

 exports.read = asyncHandler(async (req, res, next) => { 

  const { success, count, data: shifts } = res.results;
  
  res.status(200).json({
    success: success,
    count: count,
    message: count > 0 ? `GET: ${count} item(s) found` : 'No shifts found.',
    shifts
    
  });

});

/**
 * @desc Read one shift
 * @route GET - /api/shifts/:id
 * @access Private
 * */

 exports.detail = asyncHandler(async (req, res, next) => { 
  
  res.status(200).json({
    message: "get one shift",
  });

});

/**
 * @desc Update one shift
 * @route PUT - /api/shifts/:id
 * @access Private
 * */

 exports.update = asyncHandler(async (req, res, next) => { 

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

/**
 * @desc Delete one shift
 * @route DELETE - /api/shifts/:id
 * @access Private
 * */

 exports.remove = asyncHandler(async (req, res, next) => { 

  let shift = await Shift.findById(req.params.id);

  await shift.remove();

  return res
    .status(200)
    .json({
      success: true,
      message: `Deleted: ${shift.date_formatted}.`
    });


 })




 