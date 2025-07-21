const bisontesService = require('./bisontes.service');

class BisontesController {
  async create(req, res) {
    try {
      const bisonte = await bisontesService.createBisonte(req.body);
      res.status(201).json(bisonte);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  }

  async findAll(req, res) {
    try {
      const lista = await bisontesService.getAllBisontes();
      res.json(lista);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  }

  async findOne(req, res) {
    try {
      const bisonte = await bisontesService.getBisonteById(req.params.id);
      if (!bisonte) return res.status(404).json({ message: 'Bisonte no encontrado' });
      res.json(bisonte);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  }

  async update(req, res) {
    try {
      const updated = await bisontesService.updateBisonte(req.params.id, req.body);
      res.json(updated);
    } catch (err) {
      if (err.message === 'Bisonte no encontrado') {
        return res.status(404).json({ message: err.message });
      }
      res.status(500).json({ message: err.message });
    }
  }

  async remove(req, res) {
    try {
      await bisontesService.deleteBisonte(req.params.id);
      res.status(204).send();
    } catch (err) {
      if (err.message === 'Bisonte no encontrado') {
        return res.status(404).json({ message: err.message });
      }
      res.status(500).json({ message: err.message });
    }
  }
}

module.exports = new BisontesController();
