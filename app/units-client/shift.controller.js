const asyncHandler = require('express-async-handler');
const { getActive } = require('./shift.services');

/**
 * @desc view shift landing page
 * @route GET = /
 * @access Private
 */

 exports.landing = asyncHandler(async (req, res, next) => {

  const activeShift = await getActive();
  const renderPath = activeShift === null ? 'pages/shifts-add' : 'pages/shifts-update';
  const mainClass = activeShift === null ? 'main--new' : 'main--current';

  return res
    .status(200)
    .render(renderPath, {
      success: true,
      title: "DPM shift tracker",
      main: mainClass,
      shift: activeShift
    });
    
});