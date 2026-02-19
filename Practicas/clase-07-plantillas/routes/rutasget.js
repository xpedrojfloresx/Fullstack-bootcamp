//Utilizamos router para organizar las rutas en archivos separados y luego importarlos a index.js

const { Router } = require('express');

const router = Router();

router.get('/health', (req, res) => {
    res.send('Servidor OK!');
});

router.get('/html', (req, res) => {
    res.send('<h1>Hola Mundo!</h1>');
});

router.get('/descargas', (req, res) => {
    res.download("./hola.pdf", "clase07.pdf");
});

module.exports = router;
