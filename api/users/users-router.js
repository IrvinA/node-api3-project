const express = require('express');

const {
  validatePost,
  validateUser,
  validateUserId,
} = require('../middleware/middleware');

const Users = require('../users/users-model');
const Posts = require('../posts/posts-model');

const router = express.Router();

router.get('/', (req, res, next) => {
  Users.get()
    .then((users) => {
      res.status(200).json(users);
    })
    .catch(next);
});

// eslint-disable-next-line no-unused-vars
router.get('/:id', validateUserId, (req, res, next) => {
  res.status(200).json(req.user);
});

router.post('/', validateUser, (req, res, next) => {
  Users.insert(req.body)
    .then((user) => {
      res.status(201).json(user);
    })
    .catch(next);
});

router.put('/:id', validateUserId, validateUser, (req, res, next) => {
  Users.update(req.params.id, req.body)
    .then((user) => {
      res.status(200).json(user);
    })
    .catch(next);
});

router.delete('/:id', validateUserId, (req, res, next) => {
  Users.remove(req.params.id).then(res.status(200).json(req.user)).catch(next);
});

router.get('/:id/posts', validateUserId, (req, res, next) => {
  Users.getUserPosts(req.params.id)
    .then((posts) => {
      res.status(200).json(posts);
    })
    .catch(next);
});

router.post('/:id/posts', validateUserId, validatePost, (req, res, next) => {
  const newPost = {
    text: req.body.text,
    user_id: req.params.id,
  };
  Posts.insert(newPost)
    .then((post) => {
      res.status(201).json(post);
    })
    .catch(next);
});

module.exports = router;
