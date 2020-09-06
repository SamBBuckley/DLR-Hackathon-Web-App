const express = require('express');
const bodyParser = require('body-parser');

/*
This is the base of our router, all other routes will be added to this file to be parsed by node
*/

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use((req, res, next) => { // Applies to all coming traffic
  res.setHeader('Access-Control-Allow-Origin', "*");
  res.setHeader('Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept');
  res.setHeader('Access-Control-Allow-Methods',
    'GET, POST, PUT, PATCH, DELETE, OPTIONS');
  next();
});

app.use('/api/v1/users', require('./routes/users'));
app.use('/api/v1/pools', require('./routes/pools'));


app.use((req, res, next) => { // Applies to all coming traffic
  res.status(200).send("Hello from the express backend");
});

module.exports = app;
