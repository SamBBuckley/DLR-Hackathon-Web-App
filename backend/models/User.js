const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  id: String,
  name: String,
  email: String,
  balance: Number
});

module.exports = mongoose.model('User', UserSchema);
