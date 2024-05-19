const express = require('express');
const Host = require('../models/host'); 
const router = express.Router();

router.post('/iniciodesesion/host', async (req, res) => {
    try {
        const { name, password } = req.body;
        console.log("Received body:", req.body);

        const host = await Host.findOne({ name });
        if (!host) {
            console.log('Host data:', host); 
            return res.status(404).json({ message: 'Usuario no encontrado.' });
        }

        if (password === host.password) {
            res.json({ message: 'Autenticación exitosa' });
        } else {
            console.log('Contraseña proporcionada:', password);
            console.log('Contraseña esperada:', host.password);
            res.status(401).json({ message: 'Contraseña incorrecta' });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error del servidor.' });
    }
});

module.exports = router;
