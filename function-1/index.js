/**
 * Responds to any HTTP request.
 *
 * @param {!express:Request} req HTTP request context.
 * @param {!express:Response} res HTTP response context.
 */



exports.helloWorld = (req, res) => {
  const method = req.method;
  let message = req.query.message || req.body.message || 'Empty Request';
  let reply = {
  	path : req.path,
    query : req.query,
    body : req.body,
    method: req.method
  };
  
  res.status(200).send(reply);
};
