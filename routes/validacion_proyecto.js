const { Router } = require('express');
const Inventario = require('../models/Inventario');
const Usuario = require('../models/Usuario');
const TipoEquipo = require('../models/TipoEquipo');
const EstadoEquipo = require('../models/Tipo_proyecto');
const Marca = require('../models/Marca');

const router = Router();

router.get('/', async function(req, res) {
    try {
        const inventarios = await Inventario.find().populate([
            {
                path: 'usuario', select: 'nombre email estado'
            },
            {
                path: 'marca', select: 'nombre estado'
            },
            {
                path: 'tipoEquipo', select: 'nombre estado'
            },
            {
                path: 'estadoEquipo', select: 'nombre estado'
            }
        ]);
        res.send(inventarios);
    } catch(error) {
        console.log(error);
        res.status(500).send('Ocurrio un error al consultar inventarios');
    }
});

router.get('/:inventarioId', async function(req, res) {
    try {
        const inventario = await Inventario.findById(req.params.inventarioId);
        if (!inventario) {
            return res.status(404).send('Inventario no existe');
        }
        res.send(inventario);
    } catch (error) {
        console.log(error);
        res.status(500).send('Ocurrio un error al consultar inventarios');
    }
});

module.exports = router;