const acarreosService = require('./acarreos.service');

class AcarreosController {
  async create(req, res) {
    try {
      const acarreos = await acarreosService.createAcarreo(req.body);
      res.status(201).json(acarreos);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  }

  async findAll(req, res) {
    try {
      const lista = await acarreosService.getAllAcarreos();
      res.json(lista);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  }

  async findOne(req, res) {
    try {
      const acarreos = await acarreosService.getAcarreoById(req.params.id);
      if (!acarreos) return res.status(404).json({ message: 'Acarreo no encontrado' });
      res.json(acarreos);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  }

  async update(req, res) {
    try {
      const updated = await acarreosService.updateAcarreo(req.params.id, req.body);
      res.json(updated);
    } catch (err) {
      if (err.message === 'Acarreo no encontrado') {
        return res.status(404).json({ message: err.message });
      }
      res.status(500).json({ message: err.message });
    }
  }

  async remove(req, res) {
    try {
      await acarreosService.deleteAcarreo(req.params.id);
      res.status(204).send();
    } catch (err) {
      if (err.message === 'Acarreo no encontrado') {
        return res.status(404).json({ message: err.message });
      }
      res.status(500).json({ message: err.message });
    }
  }
}

module.exports = new AcarreosController();
