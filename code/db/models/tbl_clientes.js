//este ya no se usa, pero se deja por si acaso
function model(sequelize, DataTypes) {
  const attributes = {
    nombre: { type: DataTypes.STRING, allowNull: false },
    apellido:{ type: DataTypes.STRING },
    telefono:{ type: DataTypes.STRING },
    fecha_registro:{ type: DataTypes.DATE,   defaultValue: DataTypes.NOW }
  };

  const _model = sequelize.define("tbl_clientes", attributes);

  _model.associate = function(models) {
    _model.belongsTo(models.tbl_usuarios, {
      foreignKey: "usuarioId",
      onDelete:  "CASCADE"
    });

  };

  return _model;
}

module.exports = model;