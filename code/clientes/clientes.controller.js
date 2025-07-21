const clientesService = require('./clientes.service');

class ClientesController {
  async create(req, res) {
    try {
      const cliente = await clientesService.createCliente(req.body);
      res.status(201).json(cliente);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  }

  async findAll(req, res) {
    try {
      const clientes = await clientesService.getAllClientes();
      res.json(clientes);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  }

  async findOne(req, res) {
    try {
      const cliente = await clientesService.getClienteById(req.params.id);
      if (!cliente) return res.status(404).json({ message: 'Cliente no encontrado' });
      res.json(cliente);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  }

  async update(req, res) {
    try {
      const updated = await clientesService.updateCliente(req.params.id, req.body);
      res.json(updated);
    } catch (err) {
      if (err.message === 'Cliente no encontrado') {
        return res.status(404).json({ message: err.message });
      }
      res.status(500).json({ message: err.message });
    }
  }

  async remove(req, res) {
    try {
      await clientesService.deleteCliente(req.params.id);
      res.status(204).send();
    } catch (err) {
      if (err.message === 'Cliente no encontrado') {
        return res.status(404).json({ message: err.message });
      }
      res.status(500).json({ message: err.message });
    }
  }
}

module.exports = new ClientesController();
