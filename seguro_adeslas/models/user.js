const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  dni: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  passport: { type: String, required: true },
  seguro: { type: String, required: true },
});

module.exports = mongoose.model('User', userSchema, 'users');

