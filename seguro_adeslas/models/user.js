const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  dni: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  passport: { type: String, required: true },
  seguro: { type: String, required: true },
  valoracion: { type: Number, required: false },  // Campo para guardar la valoración de estrellas
  comentarios: { type: String, required: false }  // Campo para guardar los comentarios
});

module.exports = mongoose.model('User', userSchema, 'users');

