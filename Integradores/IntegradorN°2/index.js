const express = require('express');
const path = require('path');
const {engine} = require('express-handlebars');

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

//Configuracion Bootstrap
app.use('/css', express.static(path.join(__dirname, 'node_modules/bootstrap/dist/css')));
app.use('/js', express.static(path.join(__dirname, 'node_modules/bootstrap/dist/js')));

app.use(express.json());

app.get("/home", (req, res) => {
    res.render("home");
});

app.use((req, res) => {
    res.status(404).send("<h1>404</h1>");
});

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send("<h1>500</h1>");
});

module.exports = app;