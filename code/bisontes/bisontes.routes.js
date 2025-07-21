const express = require('express');
const router = express.Router();
const bisontesController = require('./bisontes.controller');

// Crear bisonte
router.post('/', bisontesController.create);

// Listar todos los bisontes
router.get('/', bisontesController.findAll);

// Obtener un bisonte por ID
router.get('/:id', bisontesController.findOne);

// Actualizar bisonte
router.put('/:id', bisontesController.update);

// Eliminar bisonte
router.delete('/:id', bisontesController.remove);

module.exports = router;
