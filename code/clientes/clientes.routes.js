const express = require('express');
const router = express.Router();
const clientesController = require('./clientes.controller');

// Crear cliente
router.post('/', clientesController.create);

// Listar todos los clientes
router.get('/', clientesController.findAll);

// Obtener cliente por ID
router.get('/:id', clientesController.findOne);

// Actualizar cliente
router.put('/:id', clientesController.update);

// Eliminar cliente
router.delete('/:id', clientesController.remove);

module.exports = router;
