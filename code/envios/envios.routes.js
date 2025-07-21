const express = require('express');
const router = express.Router();
const enviosController = require('./envios.controller');

// Crear envío
router.post('/', enviosController.create);

// Listar todos los envíos
router.get('/', enviosController.findAll);

// Obtener un envío por ID
router.get('/:id', enviosController.findOne);

// Actualizar envío
router.put('/:id', enviosController.update);

// Eliminar envío
router.delete('/:id', enviosController.remove);

module.exports = router;
