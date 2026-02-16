//###########################################
//Configuramos el servidor en index.js
//###########################################

//1. Importamos las dependencias - npm install
const express = require('express');
const path = require('path'); 
const hbs = require('express-handlebars');
const dotenv = require('dotenv'); // libreria para privacidad de passwords

//ejecutamos la configuracion de dotenv
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

//2. Modulos nativos de node - no los instalamos
const os = require('os');
const fs = require('fs');

//3. Middlewares
app.use(express.json());

//4. Rutas del GET - obtiene datos del servidor
app.get('/html', (req, res) => {
    res.send('<h1>Hola Mundo!</h1>');
});

app.get('/descargas', (req, res) => {
    res.download("./hola.pdf", "clase07.pdf");
});


app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto http://localhost:${PORT}`);
});

//Paso importante - Exportar la app configurada para usarla en el server.js
/* module.exports = app; */