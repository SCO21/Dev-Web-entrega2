const models = require("./models");
const mysql = require('mysql2/promise');
const { dbConfig } = require('../config/config');

async function initialize() {
  // Sincronizar todos los modelos con la base de datos
  try {
    const connection = mysql.createPool({
      host: dbConfig.configOptions.host,
      port: dbConfig.configOptions.port,
      user: dbConfig.connection.user,
      password: dbConfig.connection.password,
      database: dbConfig.connection.database,
    }); //Conexion para crear tablas
    await connection.query(`CREATE DATABASE IF NOT EXISTS \`${dbConfig.connection.database}\`;`); //Creacion de base de datos si no existe

    await models.sequelize.sync({ alter: true });


  } catch (err) {
    console.log(err);
  }
}

//Funciones a ser exportadas
module.exports = {
  initialize,
};
