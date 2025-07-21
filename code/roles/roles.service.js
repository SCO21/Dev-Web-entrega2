const { tbl_roles } = require('../db/models');

class RolesService {
  async createRole(data) {
    return await tbl_roles.create(data);
  }

  async getAllRoles() {
    return await tbl_roles.findAll();
  }

  async getRoleById(id) {
    return await tbl_roles.findByPk(id);
  }

  async updateRole(id, updates) {
    const role = await tbl_roles.findByPk(id);
    if (!role) throw new Error('Role not found');
    return await role.update(updates);
  }

  async deleteRole(id) {
    const role = await tbl_roles.findByPk(id);
    if (!role) throw new Error('Role not found');
    await role.destroy();
  }
}

module.exports = new RolesService();
