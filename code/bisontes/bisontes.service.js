const { tbl_bisontes } = require('../db/models');

class BisontesService {
  async createBisonte(data) {
    return await tbl_bisontes.create(data);
  }

  async getAllBisontes() {
    return await tbl_bisontes.findAll();
  }

  async getBisonteById(id) {
    return await tbl_bisontes.findByPk(id);
  }

  async updateBisonte(id, updates) {
    const bisonte = await tbl_bisontes.findByPk(id);
    if (!bisonte) throw new Error('Bisonte no encontrado');
    return await bisonte.update(updates);
  }

  async deleteBisonte(id) {
    const bisonte = await tbl_bisontes.findByPk(id);
    if (!bisonte) throw new Error('Bisonte no encontrado');
    await bisonte.destroy();
  }
}

module.exports = new BisontesService();
