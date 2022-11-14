const { Schema, model } = require('mongoose');

const Tipo_proyectoSchema = Schema({
    nombre: {
        type: String,
        required: true
    },
    estado: {
        type: String,
        required: true,
        enum: [
            'Activo', 'Inactivo',
        ]
    },
    fechainicio: {
        type: Date,
        required: true,
    },
    fechaentrega: {
        type: Date,
        required: true,
    }
});

module.exports = model('Tipo_proyecto', Tipo_proyectoSchema);