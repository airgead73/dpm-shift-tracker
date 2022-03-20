const logRequests = function(req, res, next) {

  console.log('\n\n*** new request made ***\n');
  console.log("host: ", req.hostname);
  console.log("path: ", req.path);
  console.log("url: ", req.originalurl);
  console.log("accepts: ", req.headers.accept);
  console.log("method: ", req.method);
  console.log('\n*** end log ***\n\n'); 

  if(req.path.includes('api')) {
    console.log('api route')
  }
  
  next();

};

module.exports = logRequests;