const Users = require('../users/users-model');

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
  logger,
  validateUserId,
  validateUser,
  validatePost,
};
