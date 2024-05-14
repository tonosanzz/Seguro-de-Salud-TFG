const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  dni: { type: String, required: false, unique: true },
  email: { type: String, required: true, unique: true },
  passport: { type: String, required: true, unique: true },
  nombre: {type: String, required: true },
  seguro: { type: String, required: true },
  valoracion: { type: Number, required: false },  // Campo para guardar la valoración de estrellas
  comentarios: { type: String, required: false },
  fecha: { type: Date, required: false } // Campo para guardar los comentarios
});

module.exports = mongoose.model('User', userSchema, 'users');

