function model(sequelize, DataTypes) {
  const attributes = {
    numero_guia:   { type: DataTypes.STRING, unique: true },
    observaciones: { type: DataTypes.TEXT }
  };

  const _model = sequelize.define("tbl_envios", attributes);

  _model.associate = function(models) {
    _model.belongsTo(models.tbl_clientes, {
      foreignKey: "clienteId",
      onDelete:  "CASCADE"
    });
    _model.hasMany(models.tbl_detalle_items, {
      foreignKey: "envioId",
      onDelete:  "CASCADE"
    });
  };

  return _model;
}

module.exports = model;
