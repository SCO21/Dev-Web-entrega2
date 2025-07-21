const { tbl_envios } = require('../db/models');

class EnviosService {
  async createEnvio(data) {
    return await tbl_envios.create(data);
  }

  async getAllEnvios() {
    return await tbl_envios.findAll();
  }

  async getEnvioById(id) {
    return await tbl_envios.findByPk(id);
  }

    async findDetalleItemsByEnvioId(envioId) {
    return await tbl_envios.findAll({
        where: { envioId },
        include: ['detalle_items'] 
    });
    }

  async updateEnvio(id, updates) {
    const envio = await tbl_envios.findByPk(id);
    if (!envio) throw new Error('Envío no encontrado');
    return await envio.update(updates);
  }

  async deleteEnvio(id) {
    const envio = await tbl_envios.findByPk(id);
    if (!envio) throw new Error('Envío no encontrado');
    await envio.destroy();
  }
}

module.exports = new EnviosService();
