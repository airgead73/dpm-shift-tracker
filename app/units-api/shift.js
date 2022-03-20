const mongoose = require('mongoose');
const format = require('date-fns/format');

const shiftSchema = mongoose.Schema({
  date: {
    type: Date,
    required: [true, 'Please, add a date value.']
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
  floor: {
    type: Number,
    min: 2,
    max: 5,
    required: [true, 'Please, add floor value.']
  },
  comments: {
    type: String,
    max: 500
  }
}, {
  timestamps: true
});

shiftSchema.set('toObject', {virtuals: true});
shiftSchema.set('toJSON', {virtuals: true});

shiftSchema.virtual('date_formated', )

shiftSchema.virtual('date_formatted').get(function() {

  return format(this.date, 'MMMM d, yyyy');

});

shiftSchema.virtual('rate').get(function() {

  return Math.round(this.items / this.hours);

});

module.exports = mongoose.model('Shift', shiftSchema);