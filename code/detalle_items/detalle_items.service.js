const { tbl_detalle_items } = require('../db/models');

class DetalleItemsService {
  async createDetalleItem(data) {
    return await tbl_detalle_items.create(data);
  }

  async getAllDetalleItems() {
    return await tbl_detalle_items.findAll();
  }

  async getDetalleItemById(id) {
    return await tbl_detalle_items.findByPk(id);
  }

  async updateDetalleItem(id, updates) {
    const detalleItem = await tbl_detalle_items.findByPk(id);
    if (!detalleItem) throw new Error('DetalleItem no encontrado');
    return await detalleItem.update(updates);
  }

  async deleteDetalleItem(id) {
    const detalleItem = await tbl_detalle_items.findByPk(id);
    if (!detalleItem) throw new Error('DetalleItem no encontrado');
    await detalleItem.destroy();
  }
}

module.exports = new DetalleItemsService();
