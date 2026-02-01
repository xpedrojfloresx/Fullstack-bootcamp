/* 1. Importamos la librería Express */
const express = require('express'); /* no es de node por eso no se usa el node:... lib externa */

/* 2. Importamos la librería path para que node encuentre las rutas */
const path = require('node:path'); /* es de node por esto usamos el node: */

/* 3. Inicializamos Express */
const app = express();

/* 4. Definimos el puerto */
const PORT = 3000;

/* 5. Definimos la carpeta pública */
app.use(express.static(path.join(__dirname, 'public')));

app.post("/reciboproductos", () => {});

/* 6. Iniciamos el servidor */
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});