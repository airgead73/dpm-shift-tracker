const asyncHandler = require('express-async-handler');
const format = require('date-fns/format');
const { getCurrentShift } = require('../services');

/**
 * @desc view landing page
 * @route GET - /
 * */

exports.landing = asyncHandler(async (req, res, next) => {

 if(res.locals.isAuthenticated) {
    const { date, items, rate, _id } = await getCurrentShift();
    return res
      .status(200)
      .render('pages/protected', {
        success: true,
        title: 'DPM shift tracker',
        date: format(date, 'MMMM do yyyy'),
        id: _id,
        items,
        rate
      });
  } else {
    return res
    .status(200)
    .render('pages/public', {
      success: true,
      title: 'DPM shift tracker'
    });
  }
    
});