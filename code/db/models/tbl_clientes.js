function model(sequelize, DataTypes) {
  const attributes = {
    nombre:        { type: DataTypes.STRING, allowNull: false },
    apellido:      { type: DataTypes.STRING },
    telefono:      { type: DataTypes.STRING },
    fecha_registro:{ type: DataTypes.DATE,   defaultValue: DataTypes.NOW }
  };

  const _model = sequelize.define("tbl_clientes", attributes);

  _model.associate = function(models) {
    // Cada cliente pertenece a un usuario
    _model.belongsTo(models.tbl_usuarios, {
      foreignKey: "usuarioId",
      onDelete:  "CASCADE"
    });
    // Un cliente puede tener muchos envíos
    _model.hasMany(models.tbl_envios, {
      foreignKey: "clienteId",
      onDelete:  "CASCADE"
    });
    // Un cliente puede tener muchos acarreos
    _model.hasMany(models.tbl_acarreos, {
      foreignKey: "clienteId",
      onDelete:  "CASCADE"
    });
  };

  return _model;
}

module.exports = model;