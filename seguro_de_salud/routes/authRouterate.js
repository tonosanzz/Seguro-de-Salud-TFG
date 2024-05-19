// authRouterate.js
const express = require('express');
const router = express.Router();
const User = require('../models/user');
  // Asegúrate de que la ruta al modelo es correcta

// Ruta para guardar la valoración de un usuario
router.post('/rating', async (req, res) => {
    const { passport, valoracion } = req.body;
    console.log(req.body);
    const fecha = new Date();

    try {
        const user = await User.findOneAndUpdate(
            { passport: passport },
            { $set: { valoracion: valoracion, fecha: fecha } },
            { new: true, runValidators: true }
        );

        if (user) {
            console.log("Actualización exitosa:", user);
            return res.status(200).json({ message: 'Valoración actualizada correctamente', user: user });
        } else {
            return res.status(404).json({ message: 'Usuario no encontrado' });
        }
    } catch (error) {
        console.error('Error al actualizar la valoración:', error);
        return res.status(500).json({ message: 'Error del servidor', error: error.message });
    }
});

router.post('/comment', async (req, res) => {
    const { passport, comentarios } = req.body;
    console.log("Recibido para actualizar comentario:", req.body);

    try {
        const user = await User.findOneAndUpdate(
            { passport: passport },
            { $set: { comentarios: comentarios } },
            { new: true }
        );

        if (user) {
            console.log("Comentario actualizado exitosamente:", user);
            return res.status(200).json({ message: 'Comentario actualizado correctamente', user: user });
        } else {
            return res.status(404).json({ message: 'Usuario no encontrado' });
        }
    } catch (error) {
        console.error('Error al actualizar el comentario:', error);
        return res.status(500).json({ message: 'Error del servidor', error: error.message });
    }
});

router.get('/valoraciones', async (req, res) => {
    try {
        const valoraciones = await User.find({}, 'nombre valoracion comentarios fecha seguro').sort({fecha: -1}); // Selecciona sólo los campos necesarios
        res.status(200).json(valoraciones);
    } catch (error) {
        res.status(500).json({ message: "Error al obtener las valoraciones", error: error.message });
    }
});

module.exports = router;
