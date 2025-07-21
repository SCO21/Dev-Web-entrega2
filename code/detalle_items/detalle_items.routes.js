const express = require('express');
const router = express.Router();
const detalleItemsController = require('./detalle_items.controller');

// Crear detalle de ítem
router.post('/', detalleItemsController.create);

// Listar todos los ítems de detalle
router.get('/', detalleItemsController.findAll);

// Obtener uno por ID
router.get('/:id', detalleItemsController.findOne);

// Actualizar
router.put('/:id', detalleItemsController.update);

// Eliminar
router.delete('/:id', detalleItemsController.remove);

module.exports = router;
