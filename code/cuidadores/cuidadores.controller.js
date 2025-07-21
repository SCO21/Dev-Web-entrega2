const cuidadoresService = require('./cuidadores.service');

class CuidadoresController {
  async create(req, res) {
    try {
      const cuidador = await cuidadoresService.createCuidador(req.body);
      res.status(201).json(cuidador);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  }

  async findAll(req, res) {
    try {
      const lista = await cuidadoresService.getAllCuidadores();
      res.json(lista);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  }

  async findOne(req, res) {
    try {
      const cuidador = await cuidadoresService.getCuidadorById(req.params.id);
      if (!cuidador) return res.status(404).json({ message: 'Cuidador no encontrado' });
      res.json(cuidador);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  }

  async update(req, res) {
    try {
      const updated = await cuidadoresService.updateCuidador(req.params.id, req.body);
      res.json(updated);
    } catch (err) {
      if (err.message === 'Cuidador no encontrado') {
        return res.status(404).json({ message: err.message });
      }
      res.status(500).json({ message: err.message });
    }
  }

  async remove(req, res) {
    try {
      await cuidadoresService.deleteCuidador(req.params.id);
      res.status(204).send();
    } catch (err) {
      if (err.message === 'Cuidador no encontrado') {
        return res.status(404).json({ message: err.message });
      }
      res.status(500).json({ message: err.message });
    }
  }
}

module.exports = new CuidadoresController();
