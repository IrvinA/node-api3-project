const Users = require('../users/users-model');

function handleError(err, req, res, next) {
  res.status(err.status || 500).json({
    message: err.message
  })
}

function logger(req, res, next) {
  console.log({
    method: req.method,
    url: req.baseUrl,
    requestTime: Date.now()
  })
  next()
}

function validateUserId(req, res, next) {
  
}

function validateUser(req, res, next) {
  // DO YOUR MAGIC
}

function validatePost(req, res, next) {
  // DO YOUR MAGIC
}

module.exports = {
  handleError,
  logger,
  validateUserId,
  validateUser,
  validatePost
}
