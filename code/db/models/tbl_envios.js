function model(sequelize, DataTypes) {
  const attributes = {
    numero_guia: { type: DataTypes.STRING, unique: true },
    observaciones: { type: DataTypes.TEXT }
  };

  const _model = sequelize.define("tbl_envios", attributes);

  _model.associate = function(models) {
    _model.belongsTo(models.tbl_usuarios, {
      foreignKey: "usuarioId",
      onDelete:  "CASCADE"
    });
    _model.hasMany(models.tbl_detalle_items, {
      foreignKey: "envioId",
      onDelete:  "CASCADE"
    });
    _model.belongsTo(models.tbl_bisontes, {
      foreignKey: "bisonteId",
      onDelete:  "CASCADE"
    });
  };

  return _model;
}

module.exports = model;
