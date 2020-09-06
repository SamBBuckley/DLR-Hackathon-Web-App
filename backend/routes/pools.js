const routes = require('express').Router();
require('../Connection').Connection.connectToMongo().then(r => console.log(r));

let poolModel = require("../models/Pool");
let User = require("../models/User");

// GET ALL
routes.get('/', (req, res) => {
  poolModel.find().then((pools) => {
    pools.forEach(pool => {
      pool.id = pool._id;
    });
    res.status(200).json(pools);
  });
});

// GET BY ID
routes.get('/:id', (req, res) => {
  poolModel.findById(req.params.id).then((pool) => {
    pool.id = pool._id;
    res.status(200).json(pool);
  });
});

// GET USERS POOLS
routes.get('/getbyuser/:email', (req, res) => {
  const regex = new RegExp(["^", req.params.email, "$"].join(""), "i");
  poolModel.find({"users.email": regex}).then((pools) => {
    res.status(200).json(pools);
  });
});

// CREATE
routes.post('/', (req, res) => {
  new poolModel(req.body).save().then((pool) => {
    res.status(200).json({success: true, id: pool._id});
  });
});

// UPDATE
routes.put('/:id', (req, res) => {
  poolModel.findByIdAndUpdate(req.params.id, req.body).then(() => {
    res.status(200).json({success: true});
  });
});

// DELETE
routes.delete('/:id', (req, res) => {
  poolModel.findByIdAndDelete(req.params.id).then(() => {
    res.status(200).json({success: true});
  });
});

module.exports = routes;
