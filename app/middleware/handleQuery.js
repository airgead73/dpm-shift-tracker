const handleQuery = ($model) => async (req, res, next) => {

  let query;

  const reqQuery = {...req.query};

  // add project to query params
  if(req.params.projectID) reqQuery.project = req.params.projectID;
  
  // add chapter to query params
  if(req.params.chapterID) reqQuery.chapter = req.params.chapterID;  

  const removeFields = ['select', 'sort']

  removeFields.forEach(param => delete reqQuery[param]);

  let queryStr = JSON.stringify(reqQuery);

  query = $model.find(JSON.parse(queryStr));

  // Select Fields
  if (req.query.select) {
    const fields = req.query.select.split(',').join(' ');
    query = query.select(fields)
  }

  // sort
  if (req.query.sort) {
    const sortBy = req.query.sort.split(',').join(' ');
    query = query.sort(sortBy)
  } else {
    query = query.sort('-date')
  }

  const results = await query;

  res.results = {
    success: true,
    count: results.length,
    data: results
  };

  next();

}

module.exports = handleQuery;