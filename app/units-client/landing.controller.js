const asyncHandler = require('express-async-handler');
const { getActive } = require('./shift.services');

/**
 * @desc view landing page
 * @route GET = /
 * @access Private
 */

 exports.landing = asyncHandler(async (req, res, next) => {

  const activeShift = await getActive();

  if(activeShift === null) {
    return res.status(200).redirect('/shifts/add')
  } else {
    return res.status(200).redirect(`/shifts/${activeShift.id}/update?update=items`)
  }
    
});