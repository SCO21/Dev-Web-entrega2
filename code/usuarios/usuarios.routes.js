const express = require('express');
const router = express.Router();
const usuariosController = require('./usuarios.controller');

// Crear usuario
router.post('/', usuariosController.create);

// Listar todos
router.get('/', usuariosController.findAll);

// Obtener uno por ID
router.get('/:id', usuariosController.findOne);

// Actualizar
router.put('/:id', usuariosController.update);

// Eliminar
router.delete('/:id', usuariosController.remove);

module.exports = router;
