const express = require('express');
const User = require('../models/user');
const router = express.Router();



router.post('/iniciodesesion/dni', async (req, res) => {
    console.log(req.body);
  try {
    const { dni, password } = req.body;
    const user = await User.findOne({ dni });

    if (!user) {
      return res.status(404).json({ message: 'Usuario no encontrado.' });
    }

    // Verificar contraseña sin hashear
    if (password !== user.password) {
      return res.status(400).json({ message: 'Contraseña inválida.' });
    }

    // Si todo es correcto, devolver el tipo de seguro al frontend
    res.json({ seguro: user.seguro });

  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error del servidor.' });
  }
});

module.exports = router;



