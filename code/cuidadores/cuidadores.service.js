const { tbl_cuidadores } = require('../db/models');

class CuidadoresService {
  async createCuidador(data) {
    return await tbl_cuidadores.create(data);
  }

  async getAllCuidadores() {
    return await tbl_cuidadores.findAll();
  }

  async getCuidadorById(id) {
    return await tbl_cuidadores.findByPk(id);
  }

  async updateCuidador(id, updates) {
    const cuidador = await tbl_cuidadores.findByPk(id);
    if (!cuidador) throw new Error('Cuidador no encontrado');
    return await cuidador.update(updates);
  }

  async deleteCuidador(id) {
    const cuidador = await tbl_cuidadores.findByPk(id);
    if (!cuidador) throw new Error('Cuidador no encontrado');
    await cuidador.destroy();
  }
}

module.exports = new CuidadoresService();
