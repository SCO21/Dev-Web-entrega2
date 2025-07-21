function model(sequelize, DataTypes) {
  const attributes = {
    nombre: { type: DataTypes.STRING, allowNull: false },
    edad:{ type: DataTypes.INTEGER, allowNull: false },
    salud:{ type: DataTypes.STRING },
    peso:{ type: DataTypes.DECIMAL(10,2) },
    horas_vuelo:{ type: DataTypes.INTEGER, defaultValue: 0 },
    ultimo_chequeo:{ type: DataTypes.DATE, defaultValue: DataTypes.NOW },
    estado: { type: DataTypes.STRING } ,
    habitat: { type: DataTypes.STRING, allowNull: false },
  };

  const _model = sequelize.define("tbl_bisontes", attributes);

  _model.associate = function(models) {
    _model.hasMany(models.tbl_envios, {
      foreignKey: "envioId",
      onDelete:  "CASCADE"
    });
    _model.hasMany(models.tbl_acarreos, {
      foreignKey: "acarreoId",
      onDelete:  "CASCADE"
    });
    _model.belongsTo(models.tbl_cuidadores, {
        foreignKey: "cuidadorId",
        onDelete:  "CASCADE"
    });
  };

  return _model;
}

module.exports = model;