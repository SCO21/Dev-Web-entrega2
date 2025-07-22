const enviosService = require('./envios.service');

class EnviosController {
  async create(req, res) {
    try {
      const envio = await enviosService.createEnvio(req.body);
      res.status(201).json(envio);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  }

  async findAll(req, res) {
    try {
      const envios = await enviosService.getAllEnvios();
      res.json(envios);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  }

  async findDetatalleItems(req, res) {
    try {
      const envioId = req.params.id;
        const detalleItems = await enviosService.findDetalleItemsByEnvioId(envioId);
        if (!detalleItems) return res.status(404).json({ message: 'DetalleItems no encontrados para este envío' });
        res.json(detalleItems);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
    }

  async findOne(req, res) {
    try {
      const envio = await enviosService.getEnvioByGuia(req.params.id);
      if (!envio) return res.status(404).json({ message: 'Envío no encontrado' });
      res.json(envio);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  }

  async update(req, res) {
    try {
      const updated = await enviosService.updateEnvio(req.params.id, req.body);
      res.json(updated);
    } catch (err) {
      if (err.message === 'Envío no encontrado') {
        return res.status(404).json({ message: err.message });
      }
      res.status(500).json({ message: err.message });
    }
  }

  async remove(req, res) {
    try {
      await enviosService.deleteEnvio(req.params.id);
      res.status(204).send();
    } catch (err) {
      if (err.message === 'Envío no encontrado') {
        return res.status(404).json({ message: err.message });
      }
      res.status(500).json({ message: err.message });
    }
  }
}

module.exports = new EnviosController();
