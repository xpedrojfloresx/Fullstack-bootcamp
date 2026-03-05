const mongoose = require('mongoose');

const usuarioCollection = new mongoose.Schema({
    fechaRegistro: {
        type: String,
    },
    userId: {
        type: Number,
        unique: true
    },
    nombre: {
        type: String,
        required: true,
        lowercase: true,
        min: 3,
        max: 20
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true,
        min: 6,
        max: 50
    },
    password: {
        type: String,
        required: true,
        trim: true,
        min: 8,
        max: 20
    }
});


usuarioCollection.pre('save', function (next) {
    if (!this.isNew) return next();

    this.constructor.findOne().sort({ userId: -1 })
        .then(ultimo => {
            this.userId = ultimo ? ultimo.userId + 1 : 1;
            next();
        })
        .catch(err => next(err));
});

module.exports = mongoose.model('Usuario', usuarioCollection);