const usuariosService = require('./usuarios.service');

class UsuariosController {
  async create(req, res) {
    try {
      const usuario = await usuariosService.createUsuario(req.body);
      res.status(201).json(usuario);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  }

  async findAll(req, res) {
    try {
      const usuarios = await usuariosService.getAllUsuarios();
      res.json(usuarios);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  }

  async findOne(req, res) {
    try {
      const usuario = await usuariosService.getUsuarioById(req.params.id);
      if (!usuario) return res.status(404).json({ message: 'Usuario no encontrado' });
      res.json(usuario);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  }

  async update(req, res) {
    try {
      const updated = await usuariosService.updateUsuario(req.params.id, req.body);
      res.json(updated);
    } catch (err) {
      if (err.message === 'Usuario no encontrado') {
        return res.status(404).json({ message: err.message });
      }
      res.status(500).json({ message: err.message });
    }
  }

  async remove(req, res) {
    try {
      await usuariosService.deleteUsuario(req.params.id);
      res.status(204).send();
    } catch (err) {
      if (err.message === 'Usuario no encontrado') {
        return res.status(404).json({ message: err.message });
      }
      res.status(500).json({ message: err.message });
    }
  }
}

module.exports = new UsuariosController();
