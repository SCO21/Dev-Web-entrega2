const detalleItemsService = require('./detalle_items.service');

class DetalleItemsController {
  async create(req, res) {
    try {
      const item = await detalleItemsService.createDetalleItem(req.body);
      res.status(201).json(item);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  }

  async findAll(req, res) {
    try {
      const items = await detalleItemsService.getAllDetalleItems();
      res.json(items);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  }

  async findOne(req, res) {
    try {
      const item = await detalleItemsService.getDetalleItemById(req.params.id);
      if (!item) return res.status(404).json({ message: 'DetalleItem no encontrado' });
      res.json(item);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  }

  async update(req, res) {
    try {
      const updated = await detalleItemsService.updateDetalleItem(req.params.id, req.body);
      res.json(updated);
    } catch (err) {
      if (err.message === 'DetalleItem no encontrado') {
        return res.status(404).json({ message: err.message });
      }
      res.status(500).json({ message: err.message });
    }
  }

  async remove(req, res) {
    try {
      await detalleItemsService.deleteDetalleItem(req.params.id);
      res.status(204).send();
    } catch (err) {
      if (err.message === 'DetalleItem no encontrado') {
        return res.status(404).json({ message: err.message });
      }
      res.status(500).json({ message: err.message });
    }
  }
}

module.exports = new DetalleItemsController();
