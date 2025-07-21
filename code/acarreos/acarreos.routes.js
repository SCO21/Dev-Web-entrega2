const express = require('express');
const router = express.Router();
const acarreosController = require('./acarreos.controller');

// Crear acarreos
router.post('/', acarreosController.create);

// Listar todos los acarreos
router.get('/', acarreosController.findAll);

// Obtener un acarreos por ID
router.get('/:id', acarreosController.findOne);

// Actualizar acarreos
router.put('/:id', acarreosController.update);

// Eliminar acarreos
router.delete('/:id', acarreosController.remove);

module.exports = router;
