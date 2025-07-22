const { tbl_envios, tbl_detalle_items } = require('../db/models');
const detalleItems = require('../detalle_items/detalle_items.service');

class EnviosService {
async createEnvio(data) {
  const { items, ...envioData } = data;

  const nuevoEnvio = await tbl_envios.create(envioData);

  if (items && items.length > 0) {
    for (const item of items) {
      const detalleParaCrear = {
        ...item,
        envioId: nuevoEnvio.id 
      };
      await this.createDetalleItem(detalleParaCrear); 
    }
  }

  return nuevoEnvio;
}


  async getAllEnvios() {
      return await tbl_envios.findAll({
        include: [
          {
            model: tbl_detalle_items,
          }
        ]
      });
    }

  async getEnvioByGuia(id) {
    const envio = await tbl_envios.findOne({
            where: {numero_guia: id},
            include: tbl_detalle_items
        });
    return envio
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

  async createDetalleItem(data) {
  return await detalleItems.createDetalleItem(data);

}
}


module.exports = new EnviosService();
