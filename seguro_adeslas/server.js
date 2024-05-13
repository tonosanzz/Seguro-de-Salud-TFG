const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const authRoutedni = require('./routes/authRoutedni');
const authRoutepassport = require('./routes/authRoutepassport');
const authRouterate = require('./routes/authRouterate'); // Asegúrate de que la ruta es correcta

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json()); // Para parsear el cuerpo de las solicitudes JSON
app.use(cors()); // Manejar CORS

// Conectar a MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/ClientesAdeslas', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('Conectado a MongoDB Atlas'))
.catch((error) => console.error(error));

// Usar las rutas de autenticación
app.use('/api/auth', authRoutedni);
app.use('/api/auth', authRoutepassport);
app.use('/api/auth', authRouterate); // Nueva ruta para manejar valoraciones y comentarios

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});


