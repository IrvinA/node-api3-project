const Users = require('../users/users-model');

function handleError(err, req, res, next) {
  res.status(err.status || 500).json({
    message: err.message
  })
}

function logger(req, res, next) {
  
}

function validateUserId(req, res, next) {
  // DO YOUR MAGIC
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
