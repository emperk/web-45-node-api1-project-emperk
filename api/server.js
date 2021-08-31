// BUILD YOUR SERVER HERE
const express = require('express');
const User = require('./users/model');
const server = express();
server.use(express.json());

// .post()

server.post('/api/users', (req, res) => {

})

// .get()

server.get('/api/users', (req, res) => {
  User.find()
    .then(users => {
      res.json(users)
    })
    .catch(err => {
      res.status(500).json({
        message: 'The users information could not be retrieved',
        err: err.message,
        stack: err.stack,
      })
    })
})

// .use()

server.use('*', (req, res) => {
  res.status(404).json({
    message: 'nothing was found'
  })
})

module.exports = server; // EXPORT YOUR SERVER instead of {}
