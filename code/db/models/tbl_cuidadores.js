function model(sequelize, DataTypes) {
  const attributes = {
    nombre: { type: DataTypes.STRING, allowNull: false },
    cargo: { type: DataTypes.STRING, allowNull: false },
    certificacion: { type: DataTypes.STRING },
    experiencia: { type: DataTypes.STRING, allowNull: false },
    estado: { type: DataTypes.STRING, allowNull: false },
    horario_trabajo: { type: DataTypes.STRING, allowNull: false },
    telefono:{ type: DataTypes.STRING },
    fecha_registro:{ type: DataTypes.DATE,   defaultValue: DataTypes.NOW }
  };

  const _model = sequelize.define("tbl_cuidadores", attributes);

  _model.associate = function(models) {
    _model.hasMany(models.tbl_bisontes, {
      foreignKey: "bisonteId",
      onDelete:  "CASCADE"
    });

  };

  return _model;
}

module.exports = model;