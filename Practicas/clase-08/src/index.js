require("dotenv").config();

const app = require("./app");

const connectDB = require("./database/conexion"); 
const conexionMongoLocal = require("./database/conexionLocal");

const PORT = process.env.PORT || 3000;

/* conexionMongoLocal();  */
connectDB(); 

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});


