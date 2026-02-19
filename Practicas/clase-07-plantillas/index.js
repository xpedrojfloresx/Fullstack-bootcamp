//###########################################
//Configuramos el servidor en index.js
//###########################################

//1. Importamos las dependencias - npm install
const express = require("express");
const path = require("path");
const {engine} = require("express-handlebars");

const app = express();

//Configuramos el motor de plantillas Handlebars
app.engine(".hbs", engine({
  extname: ".hbs",
  defaultLayout: "main",
  layoutsDir: path.join(__dirname, "views/layouts"),
  partialsDir: path.join(__dirname, "views/partials")
}));

//asignamos el motor de plantillas a la aplicación
app.set("view engine", ".hbs");
app.set("views", path.join(__dirname, "views"));

//Importamos las rutas del GET
const rutasGet = require("./routes/rutasget");
const rutasUsuarios = require("./routes/rutasusuarios");

//2. Modulos nativos de node - no los instalamos
const os = require("os");
const fs = require("fs");

//3. Middlewares
app.use(express.json());

//4. Rutas del GET - obtiene datos del servidor
app.use("/api", rutasGet);

app.use("/api", rutasUsuarios);

app.get("/", (req, res) => {
  res.render("home");
});

app.get("/about", (req, res) => {
  res.render("prueba");
});

app.use((req, res) => {
  res.status(404).send("<h1>404 - Not Found</h1>");
});

//Exportamos el modulo para usarlo en otros archivos
module.exports = app;
