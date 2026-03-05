const mongoose = require('mongoose');

const dotenv = require('dotenv');

dotenv.config();

const dbUrlLocal = process.env.MONGO_URL_LOCAL;

const uri = dbUrlLocal || 'mongodb://localhost:27017/ecommerce';

const conexionMongoLocal = async () => {
    mongoose.connect(uri).then(() => {
        console.log('Conexión a MongoDB local establecida');
    },
    err => {
        console.error('Error al conectar a MongoDB local:', err);
    });
}

module.exports = conexionMongoLocal;
