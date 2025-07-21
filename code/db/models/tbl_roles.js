function model(sequelize, DataTypes) {
  const attributes = {
    name: { type: DataTypes.STRING, allowNull: false, unique: true },
    description: { type: DataTypes.TEXT }
  };

  const _model = sequelize.define("tbl_roles", attributes);

  _model.associate = function(models) {
    _model.hasMany(models.tbl_usuarios, {
      foreignKey: "roleId",
      onDelete:  "RESTRICT"
    });
  };

  return _model;
}

module.exports = model;