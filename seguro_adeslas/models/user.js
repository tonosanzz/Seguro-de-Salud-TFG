const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  dni: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  poliza: { type: String, required: true },
  seguro: { type: String, required: true },
});

module.exports = mongoose.model('User', userSchema, 'users');

