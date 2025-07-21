function model(sequelize, DataTypes) {
  const attributes = {
    nombre_usuario: { type: DataTypes.STRING, allowNull: false, unique: true },
    apellido: { type: DataTypes.STRING },
    contrasena: { type: DataTypes.STRING, allowNull: false },
    correo: { type: DataTypes.STRING, allowNull: false, unique: true },
    contrasena: { type: DataTypes.STRING, allowNull: false },
    estado: { type: DataTypes.ENUM("activo","inactivo"), defaultValue: "activo" },
    roleId: { type: DataTypes.INTEGER, allowNull: false }
  };

  const _model = sequelize.define("tbl_usuarios", attributes);

  _model.associate = function(models) {
    _model.belongsTo(models.tbl_roles, { foreignKey: "roleId" });
    _model.hasOne(models.tbl_clientes, { foreignKey: "usuarioId", onDelete: "CASCADE" });
    _model.hasMany(models.tbl_envios, {
      foreignKey: "usuarioId",
      onDelete:  "CASCADE"
    });
    _model.hasMany(models.tbl_acarreos, {
      foreignKey: "usuarioId",
      onDelete:  "CASCADE"
    });
  };

  return _model;
}

module.exports = model;