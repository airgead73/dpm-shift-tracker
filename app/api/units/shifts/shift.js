const mongoose = require('mongoose');

const shiftSchema = mongoose.Schema({
  date: {
    type: String,
    required: [true, 'Please, add a last date value.'],
    default: Date.now
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

module.exports = mongoose.model('Shift', shiftSchema);