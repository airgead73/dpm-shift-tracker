const searchItem =  async ($model, $id) => {

  console.log('check item')

  let item = await $model.findById($id);

  return item;

  // if(!item) {
  //   return res.status(404).json({ success: false, message: 'Resource not found'});
  // } else {
  //   return next();
  // }

  

}

const confirmItem = async (req, res, next) => {

  let item = await searchItem

}

module.exports = checkItem;