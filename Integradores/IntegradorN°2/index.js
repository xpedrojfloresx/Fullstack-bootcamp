// Importaciones
const express = require('express');
const path = require('path');
const {engine} = require('express-handlebars');
const morgan = require('morgan');

// Rutas
const { pagesStatus, notFound, serverError } = require('./src/routes/pagesStatus');
const pagesRoutes = require('./src/routes/pagesRoutes');

const app = express();

// Configuración de Handlebars
app.engine("hbs", engine({
    extname: ".hbs",
    defaultLayout: "main",
    layoutsDir: path.join(__dirname, "src/views/layouts"),
    partialsDir: path.join(__dirname, "src/views/partials")
}));

app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "src/views"));

//Middleware
app.use(express.static(path.join(__dirname, 'public')));

app.use(morgan('dev'));

app.use(express.json());

// Rutas
app.use(pagesStatus);

app.use(pagesRoutes);

app.get("/", (req, res) => {
    res.render("home");
});

// Manejo de errores
app.use(notFound);

app.use(serverError);

// Export de app
module.exports = app;