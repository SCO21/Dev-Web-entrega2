function model(sequelize, DataTypes) {
  const attributes = {
    tipo_servicio: { type: DataTypes.STRING, allowNull: false },
    origen: { type: DataTypes.STRING, allowNull: false },
    destino:  { type: DataTypes.STRING, allowNull: false },
    observaciones: { type: DataTypes.TEXT }
  };

  const _model = sequelize.define("tbl_acarreos", attributes);

  _model.associate = function(models) {
    _model.belongsTo(models.tbl_usuarios, {
      foreignKey: "usuarioId",
      onDelete:  "CASCADE"
    });
  };

  return _model;
}

module.exports = model;