const mongoose = require('mongoose');

const shiftSchema = mongoose.Schema({
  date: {
    type: Date,
    required: [true, 'Please, add a date value.'],
    default: Date.now
  },
  hours: {
    type: Number,
    default: 7.5
  },
  dayOfWeek: {
    type: String,
  },
  month: {
    type: String
  },
  year: {
    type: Number
  },
  items: {
    type: Number,
    default: 0    
  },
  rate: {
    type: Number,
    default: 0
  } 
}, {
  timestamps: true
});

shiftSchema.pre('save', function(next) {

  const setDayOfWeek = function($date) {

    let day = $date.getDay(); 
    
    console.log(day);

    switch(day) {
      case 0:
        day = 'sunday';
        break;
      case 1:
        day = 'monday';
        break;
      case 2:
        day = 'tuesday';
        break; 
      case 3:
        day = 'wednesday';
        break;
      case 4:
        day = 'thursday';
        break;
      case 5:
        day = 'friday';
        break;
      case 6:
        day = 'saturday';
        break;
      default:
        day = 'no day defined'               
    }

    console.log(day);

    return day;

 }

 const setMonth = function($date) {

  let month = $date.getMonth();   

  switch(month) {
    case 0:
      month = 'january';
      break;
    case 1:
      month = 'february';
      break;
    case 2:
      month = 'march';
      break; 
    case 3:
      month = 'april';
      break;
    case 4:
      month = 'may';
      break;
    case 5:
      month = 'june';
      break;
    case 6:
      month = 'july';
      break;
    case 7:
      month = 'august';
      break;
    case 8:
      month = 'september';
      break;
    case 9:
      month = 'october';
      break;
    case 10:
      month = 'november';
      break;
    case 11:
      month = 'december';
      break;  
    default:
      month = 'no month defined'               
  }

  return month;

}

  this.dayOfWeek = setDayOfWeek(this.date);
  this.month = setMonth(this.date);
  this.year = (this.date).getFullYear();

  next();

});

module.exports = mongoose.model('Shift', shiftSchema);