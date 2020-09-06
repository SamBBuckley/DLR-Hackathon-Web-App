const mongoose = require('mongoose');
const User = require('./User');
const Schema = mongoose.Schema;

const poolSchema = new Schema({
  id: String,
  name: String,
  lastRoll: String,
  balance: Number,
  winner: String,
  users: [User.schema],
  chanceToBust: Number,
  hasBusted: Boolean,
  isTimed: Boolean,
  dailyCost: Number,
});

module.exports = mongoose.model('Pool', poolSchema);
