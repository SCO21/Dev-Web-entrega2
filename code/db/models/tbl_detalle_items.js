function model(sequelize, DataTypes) {
  const attributes = {
    descripcion: { type: DataTypes.STRING,  allowNull: true },
    cantidad: { type: DataTypes.INTEGER, allowNull: false },
    peso: { type: DataTypes.DECIMAL(10,2) },
    prioridad: { type: DataTypes.STRING },
    estado:{ type: DataTypes.STRING, allowNull: false },
    precio: { type: DataTypes.DECIMAL(10,2), allowNull: false },
    origen: { type: DataTypes.STRING, allowNull: false },
    destino:  { type: DataTypes.STRING, allowNull: false },
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