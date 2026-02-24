const express = require('express');
const morgan = require('morgan');
const {engine} = require('express-handlebars');
const path = require('path');

const app = express();

// Configuración de Handlebars
app.engine('hbs', engine({
    extname: '.hbs',
    defaultLayout: 'main',
    layoutsDir: path.join(__dirname, 'views', 'layouts'),
    partialsDir: path.join(__dirname, 'views', 'partials')
}));

app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));

// Middlewares
app.use(express.json());

app.use(morgan('dev'));

// Rutas
app.get('/', (req, res) => {
    res.render('home', { title: 'Bienvenido a mi aplicación' });
});

app.get('/login', (req, res) => {
    res.render('login', { title: 'Iniciar sesión' });
});

app.use((req, res) => {
    res.status(404).send('404', { title: 'Página no encontrada' });
});

app.use((req, res, err, next) => {
    log(err.stack);
    res.status(500).send('500', { title: 'Error del servidor' });
});


//Exportar el módulo de la aplicación
module.exports = app;