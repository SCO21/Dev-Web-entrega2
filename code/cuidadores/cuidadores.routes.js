const express = require('express');
const router = express.Router();
const cuidadoresController = require('./cuidadores.controller');

// Crear cuidador
router.post('/', cuidadoresController.create);

// Listar todos
router.get('/', cuidadoresController.findAll);

// Obtener uno por ID
router.get('/:id', cuidadoresController.findOne);

// Actualizar
router.put('/:id', cuidadoresController.update);

// Eliminar
router.delete('/:id', cuidadoresController.remove);

module.exports = router;
