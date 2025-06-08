function model(sequelize, DataTypes) {
  const attributes = {
    nombre_usuario: { type: DataTypes.STRING, allowNull: false, unique: true },
    correo:         { type: DataTypes.STRING, allowNull: false, unique: true },
    contrasena:     { type: DataTypes.STRING, allowNull: false },
    estado:         { type: DataTypes.ENUM("activo","inactivo"), defaultValue: "activo" }
  };

  const _model = sequelize.define("tbl_usuarios", attributes);

  _model.associate = function(models) {
    _model.belongsTo(models.tbl_roles, { foreignKey: "roleId" });
    _model.hasOne(models.tbl_clientes, { foreignKey: "usuarioId", onDelete: "CASCADE" });
  };

  return _model;
}

module.exports = model;