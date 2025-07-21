const express = require('express');
const router = express.Router();
const rolesController = require('./roles.controller');

// Crear
router.post('/', rolesController.create);

// Listar todos
router.get('/', rolesController.findAll);

// Obtener uno por ID
router.get('/:id', rolesController.findOne);

// Actualizar
router.put('/:id', rolesController.update);

// Eliminar
router.delete('/:id', rolesController.remove);

module.exports = router;
