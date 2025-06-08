// db/models/index.js (con logging para debug de asociaciones)
const fs        = require("fs");
const path      = require("path");
const Sequelize = require("sequelize");
const basename  = path.basename(__filename);
const { dbConfig, dbPoolConfig } = require("../../config/config");
const db        = {};

// Llamamos a connect al importar
connect();

function createConnectionMySQL() {
  return new Sequelize(
    dbConfig.connection.database,
    dbConfig.connection.user,
    dbConfig.connection.password,
    { ...dbConfig.configOptions, ...dbPoolConfig }
  );
}

async function connect() {
  const sequelize = createConnectionMySQL();

  // 1. Lectura de ficheros
  const files = fs.readdirSync(__dirname)
    .filter(file => file !== basename && file.endsWith('.js'));

  // 2. Carga de modelos
  for (const file of files) {
    const defineModel = require(path.join(__dirname, file));
    if (typeof defineModel !== 'function') {
      continue;
    }
    const model = defineModel(sequelize, Sequelize.DataTypes);
    db[model.name] = model;
  }


  // 4. Asociaciones
  for (const [modelName, model] of Object.entries(db)) {
    if (typeof model.associate === 'function') {
      try {
        model.associate(db);
      } catch (err) {
      }
    }
  }

  // 5. Exponer instancia y modelos
  db.sequelize = sequelize;
  db.Sequelize = Sequelize;

  return db;
}

module.exports = db;
