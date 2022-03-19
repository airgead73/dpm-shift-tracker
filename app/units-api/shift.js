const mongoose = require('mongoose');
const format = require('date-fns/format');

const shiftSchema = mongoose.Schema({
  date: {
    type: Date,
    required: [true, 'Please, add a date value.']
  },
  date_formatted: {
    type: String
  },
  active: {
    type: Boolean,
    default: true
  },
  hours: {
    type: Number,
    default: 7.5
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

  this.date_formatted = format(this.date, 'MMMM d, yyyy');

  next();

});

shiftSchema.methods.calculateRate = function() {

  this.rate = Math.round(this.items / this.hours); 
  
  return this.rate;

}

module.exports = mongoose.model('Shift', shiftSchema);