const rolesService = require('./roles.service');

class RolesController {
  async create(req, res) {
    try {
      const role = await rolesService.createRole(req.body);
      res.status(201).json(role);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  }

  async findAll(req, res) {
    try {
      const roles = await rolesService.getAllRoles();
      res.json(roles);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  }

  async findOne(req, res) {
    try {
      const role = await rolesService.getRoleById(req.params.id);
      if (!role) return res.status(404).json({ message: 'Role not found' });
      res.json(role);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  }

  async update(req, res) {
    try {
      const updated = await rolesService.updateRole(req.params.id, req.body);
      res.json(updated);
    } catch (err) {
      if (err.message === 'Role not found') {
        return res.status(404).json({ message: err.message });
      }
      res.status(500).json({ message: err.message });
    }
  }

  async remove(req, res) {
    try {
      await rolesService.deleteRole(req.params.id);
      res.status(204).send();
    } catch (err) {
      if (err.message === 'Role not found') {
        return res.status(404).json({ message: err.message });
      }
      res.status(500).json({ message: err.message });
    }
  }
}

module.exports = new RolesController();
