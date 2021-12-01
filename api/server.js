const express = require('express');
const usersRouter = require('./users/users-router');
const { logger } = require('./middleware/middleware');

const server = express();

server.use(express.json());

server.use('/api/users', logger, usersRouter);

server.get('/', logger, (req, res) => {
  // eslint-disable-next-line quotes
  res.send(`<h2>Let's write some middleware!</h2>`);
});

module.exports = server;
