const mongoose = require('mongoose');

const productoCollection = new mongoose.Schema({
    fechaRegistro: {
        type: Date,
        default: Date.now
    },
    productId: {
        type: Number,
        unique: true,
    },
    nombre: {
        type: String,
        required: true,
        lowercase: true,
        min: 3,
        max: 20
    },
    categoria: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        min: 6,
        max: 50
    },
    precio: {
        type: Number,
        required: true,
        min: 0
    }
});

productoCollection.pre('save', async function() {
    if (this.isNew) {
        const ultimo = await this.constructor.findOne().sort({ productId: -1 });
        this.productId = ultimo ? ultimo.productId + 1 : 1;
    }
});

module.exports = mongoose.model('Producto', productoCollection);