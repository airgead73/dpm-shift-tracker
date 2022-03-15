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

shiftSchema.methods.calculateRate = function() {

  this.rate = Math.round(this.items / this.hours); 
  
  return this.rate;

}

module.exports = mongoose.model('Shift', shiftSchema);