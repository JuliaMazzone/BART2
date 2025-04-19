// filepath: /path/to/server.js
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000; // Cambia el puerto si es necesario

// Middleware para parsear JSON
app.use(bodyParser.json());

// Ruta para recibir los resultados
app.post('/api/guardar-resultados', (req, res) => {
    const resultados = req.body; // Los datos enviados desde el cliente

    console.log('Resultados recibidos:', resultados);

    // Aquí puedes guardar los resultados en una base de datos o archivo
    // Por ejemplo, guardar en un archivo JSON:
    const fs = require('fs');
    fs.writeFileSync('resultados.json', JSON.stringify(resultados, null, 2));

    // Responder al cliente
    res.status(200).send({ message: 'Resultados recibidos correctamente' });
});

// Iniciar el servidor
app.listen(PORT, () => {
    console.log(`Servidor escuchando en http://localhost:${PORT}`);
});