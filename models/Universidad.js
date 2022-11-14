const { Schema, model } = require('mongoose');

const UniversidadSchema = Schema({
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
    },
        
    
    type: Schema.Types.ObjectId, ref: 'numero', required: false,
    
  
    type: Schema.Types.ObjectId, ref: 'Titulo', required: true,
    
    
    type: Schema.Types.ObjectId, ref: 'Univerdidad', required: true,
    
    fechaentrega: {
        type: Schema.Types.ObjectId, ref: 'tipo', required: true,
    },
    fechainiciacion: {
        type: Date, required: true,
    },
    fechaEntregantrega: {
        type: Date, required: true,
    }
});

module.exports = model('Universidad',UniversidadSchema);