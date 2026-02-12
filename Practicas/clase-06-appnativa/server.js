const express = require('express');

const path = require('path');

const app = express();

const PORT = 3000;

app.use(express.static(path.join(__dirname, 'public')));

app.use(express.json());

app.post("/contacto", (req, res) => {
console.log('Datos recibidos del formulario de contacto');

console.log(req.body);

res.json({ message: 'Datos recibidos correctamente' });
});

app.post("/productos", (req, res) => {
console.log('Datos recibidos del formulario de productos');

console.log(req.body);

res.json({ message: 'Productos cargados correctamente' });
});

app.use((req, res, next) => {
  res.status(404).json({ message: 'Ruta no encontrada' });
});


app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});

