const { Shift } = require('../units-api');

const getById = async ($id) => {

  const item = await Shift.findById($id);

  return item;

}

const getAll = async ($model) => {
  
  const items = await Shift.find().sort('-date');

  return items; 

}

const getActive = async () => {
  const item = await Shift.findOne({ active: true});
  return item
}

module.exports = {
  getById,
  getAll,
  getActive
}