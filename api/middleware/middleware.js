const Users = require('../users/users-model');

// eslint-disable-next-line no-unused-vars
function handleError(err, req, res, next) {
  res.status(err.status || 500).json({
    message: err.message,
  });
}

function logger(req, res, next) {
  console.log({
    method: req.method,
    url: req.baseUrl,
    requestTime: Date.now(),
  });
  next();
}

function validateUserId(req, res, next) {
  Users.getById(req.params.id)
    .then((user) => {
      if (user) {
        req.user = user;
        next();
      } else {
        next({ status: 404, message: 'user not found' });
      }
    })
    .catch(next);
}

function validateUser(req, res, next) {
  const { name } = req.body;
  if (!name) {
    next({ status: 400, message: 'missing required name field' });
  } else {
    next();
  }
}

function validatePost(req, res, next) {
  const { text } = req.body;
  if (!text) {
    next({ status: 400, message: 'missing required text field' });
  } else {
    next();
  }
}

module.exports = {
  handleError,
  logger,
  validateUserId,
  validateUser,
  validatePost,
};
