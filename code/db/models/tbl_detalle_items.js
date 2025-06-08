function model(sequelize, DataTypes) {
  const attributes = {
    descripcion: { type: DataTypes.STRING,  allowNull: false },
    cantidad:    { type: DataTypes.INTEGER, allowNull: false },
    peso:        { type: DataTypes.DECIMAL(10,2) },
    dimensiones: { type: DataTypes.STRING },
    fragil:      { type: DataTypes.BOOLEAN, defaultValue: false }
  };

  const _model = sequelize.define("tbl_detalle_items", attributes);

  _model.associate = function(models) {
    _model.belongsTo(models.tbl_envios, {
      foreignKey: "envioId",
      onDelete:  "CASCADE"
    });
  };

  return _model;
}

module.exports = model;