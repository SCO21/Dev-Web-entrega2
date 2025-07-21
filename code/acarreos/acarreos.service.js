const { tbl_acarreos } = require('../db/models');

class AcarreosService {
  async createAcarreo(data) {
    return await tbl_acarreos.create(data);
  }

  async getAllAcarreos() {
    return await tbl_acarreos.findAll();
  }

  async getAcarreoById(id) {
    return await tbl_acarreos.findByPk(id);
  }

  async updateAcarreo(id, updates) {
    const acarreos = await tbl_acarreos.findByPk(id);
    if (!acarreos) throw new Error('Acarreo no encontrado');
    return await acarreos.update(updates);
  }

  async deleteAcarreo(id) {
    const acarreos = await tbl_acarreos.findByPk(id);
    if (!acarreos) throw new Error('Acarreo no encontrado');
    await acarreos.destroy();
  }
}

module.exports = new AcarreosService();
