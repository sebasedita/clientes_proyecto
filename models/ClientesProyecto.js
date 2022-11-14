const { Schema, model } = require('mongoose');

const ClientesProyectoSchema = Schema({
    numero: {
        type: Integer,
        required: true,
    },
    titulo: {
        type: String,
        required: true,
       
    },
    fechaIniciacion: {
        type: Date,
        required: true,
    },
    fechaEntrega: {
        type: Date,
        required: true,
    },
    valor: {
        type: Integer,
        required: true,
    },
    etapaProyecto: {
        type: Integer,
        required: true,
    },
    tipoProyecto: {
        type: Integer,
        required: true,
    }
})

module.exports = model('ClientesProyecto', ClientesProyectoSchema);