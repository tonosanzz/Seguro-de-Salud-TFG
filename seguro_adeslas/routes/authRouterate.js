// authRouterate.js
const express = require('express');
const router = express.Router();
const User = require('../models/user');  // Asegúrate de que la ruta al modelo es correcta

// Ruta para guardar la valoración de un usuario
router.post('/rating', async (req, res) => {
    console.log(req.body);
  const { dni, rating } = req.body;
  try {
    const user = await User.findOneAndUpdate(
      { dni: dni },
      { $set: { valoracion: rating } },
      { new: true }
    );
    if (user) {
      res.status(200).json({ message: 'Valoración actualizada correctamente', user });
    } else {
      res.status(404).json({ message: 'Usuario no encontrado' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Error al actualizar la valoración', error: error.message });
  }
});

// Ruta para guardar el comentario de un usuario
router.post('/comment', async (req, res) => {
  const { dni, comentarios } = req.body;
  try {
    const user = await User.findOneAndUpdate(
      { dni: dni },
      { $set: { comentarios: comentarios } },
      { new: true }
    );
    if (user) {
      res.status(200).json({ message: 'Comentario actualizado correctamente', user });
    } else {
      res.status(404).json({ message: 'Usuario no encontrado' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Error al actualizar el comentario', error: error.message });
  }
});

module.exports = router;
