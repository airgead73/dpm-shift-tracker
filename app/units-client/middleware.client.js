const handleQuery = ($model) => async (req, res, next) => {

  let query;

  const reqQuery = {...req.query};

  if(req.params.id) reqQuery.id = req.params.id;

  let queryStr = JSON.stringify(reqQuery);

  query = $model.find(JSON.parse(queryStr));

  const results = await query;

  res.results = {
    success: true,
    count: results.length,
    data: results
  };

  next();

}

const getActive = ($model) => (req, res, next) => {

  const results = await $model.findOne({ active: true });
  
  res.results = {
    success: true,
    count: results.length,
    data: results
  }

  next();
  
}

module.exports = {
  handleQuery,
  getActive
};

