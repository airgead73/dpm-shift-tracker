const asyncHandler = require('express-async-handler');
const { getAllShifts } = require('../services');

/**
 * @desc view landing page
 * @route GET - /
 * */

exports.landing = asyncHandler(async (req, res, next) => {

 if(res.locals.isAuthenticated) {
    const { current, shifts } = await getAllShifts();
    return res
      .status(200)
      .render('pages/protected', {
        success: true,
        title: 'DPM shift tracker',
        // date: current.date_formatted || 'no info',
        // id: current._id || 'no info',
        // items: current.items || 'no info',
        // rate: current.rate || 'no info',
        // shifts
      });
  } else {
    return res
    .status(200)
    .render('pages/public', {
      success: true,
      title: 'DPM shift tracker'
    });
  }

  return res
  .status(200)
  .render('pages/public', {
    success: true,
    title: 'DPM shift tracker'
  });
    
});