const { tbl_clientes } = require('../db/models');

class ClientesService {
  async createCliente(data) {
    return await tbl_clientes.create(data);
  }

  async getAllClientes() {
    return await tbl_clientes.findAll();
  }

  async getClienteById(id) {
    return await tbl_clientes.findByPk(id);
  }

  async updateCliente(id, updates) {
    const cliente = await tbl_clientes.findByPk(id);
    if (!cliente) throw new Error('Cliente no encontrado');
    return await cliente.update(updates);
  }

  async deleteCliente(id) {
    const cliente = await tbl_clientes.findByPk(id);
    if (!cliente) throw new Error('Cliente no encontrado');
    await cliente.destroy();
  }
}

module.exports = new ClientesService();
