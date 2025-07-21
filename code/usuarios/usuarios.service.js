const { tbl_usuarios } = require('../db/models');

class UsuariosService {
  async createUsuario(data) {
    return await tbl_usuarios.create(data);
  }

  async getAllUsuarios() {
    return await tbl_usuarios.findAll();
  }

  async getUsuarioById(id) {
    return await tbl_usuarios.findByPk(id);
  }

  async updateUsuario(id, updates) {
    const usuario = await tbl_usuarios.findByPk(id);
    if (!usuario) throw new Error('Usuario no encontrado');
    return await usuario.update(updates);
  }

  async deleteUsuario(id) {
    const usuario = await tbl_usuarios.findByPk(id);
    if (!usuario) throw new Error('Usuario no encontrado');
    await usuario.destroy();
  }
}

module.exports = new UsuariosService();
