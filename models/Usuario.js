const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const usuarioSchema = new Schema({
    nombre: {
        type: String,
        trim: true
    },
    apellido: {
        type: String,
        trim: true
    },
    correo: {
        type: String,
        trim: true
    },
    status: {
        type: Boolean
    },
    observaciones: {
        type: String,
        trim: true
    }    

});

module.exports = mongoose.model('Usuario', usuarioSchema);