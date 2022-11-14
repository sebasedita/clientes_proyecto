const validacionproyecto = (req) => {
    const validaciones = [];
    if (!req.body.numero) {
        validaciones.push('Numero es requerido');
    }
    if (!req.body.titulo) {
        validaciones.push('Titulo es requerido');
    }
    if (!req.body.universidad) {
        validaciones.push('Universidad es requerido');
    }
    if (!req.body.tipoProyecto) {
        validaciones.push('Tipo de proyecto es requerido');
    }
    
    if (!req.body.fechaIniciacion) {
        validaciones.push('Fecha de iniciacion es requerido');
    }

    if (!req.body.fechaEntrega) {
        validaciones.push('Fecha de entrega es requerido');
    }
    if (!req.body.valor) {
        validaciones.push('Valor es requerido');
    }
    
    if (!req.body.etapaProyecto) {
        validaciones.push('Etapa del proyecto es requerido');
    }
    if (!req.body.clientesProyecto) {
        validaciones.push('Clientes del proyecto es requerido');
    }
    return validaciones;
}

module.exports = {
    validarproyecto,
}