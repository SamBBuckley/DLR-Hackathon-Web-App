const routes = require('express').Router();
require('../Connection').Connection.connectToMongo().then(r => console.log(r));

let User = require("../models/User");
const CastError = require("mongoose/lib/error/cast");

// GET ALL
routes.get('/', (req, res) => {
  User.find().then((users) => {
    users.forEach(user => {
      user.id = user._id;
    });
    res.status(200).json(users);
  });
});

// GET BY ID
routes.get('/:id', (req, res) => {
  User.findById(req.params.id).then((user) => {
    user.id = user._id;
    res.status(200).json(user);
  }).catch(error => {
    if(error instanceof TypeError) {
      res.status(404).json({"Result": "User Not found"});
    }  else if(error instanceof CastError) {
      res.status(404).json({"Result": "User Not found"});
    } else {
      console.log(error);
    }

  });
});

// GET BY EMAIL
routes.get('/checkforemail/:email', (req, res) => {
  User.find().then((users) => {
    let found = false;
    users.forEach(user => {
      if(user.email.toLowerCase() === req.params.email.toLowerCase()) {
        found = true;
      }
    });
    if(found) {
      res.status(200).json({found: true});
    } else {
      res.status(404).json({found: false});
    }
  }).catch(error => {
    if(error instanceof TypeError) {
      console.log("There was a problem.");
      res.status(404);
      return;
    }
    console.log(error);
  });
});

// CREATE
routes.post('/', (req, res) => {
  new User(req.body).save().then((user) => {
    console.log('Tried to save the user: ', req.body);
    res.status(200).json({success: true, id: user._id});
  });
});

// UPDATE
routes.put('/:id', (req, res) => {
  User.findByIdAndUpdate(req.params.id, req.body).then(() => {
    res.status(200).json({success: true});
  });
});

// DELETE
routes.delete('/:id', (req, res) => {
  User.findByIdAndDelete(req.params.id).then(() => {
    res.status(200).json({success: true});
  });
});

module.exports = routes;
