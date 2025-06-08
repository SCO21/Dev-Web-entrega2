require("dotenv").config(); 

module.exports = {
  dbPoolConfig: {
    timezone: "-05:00",
    pool: {
      max: 5, // Número máximo de conexiones
      min: 0,
      acquire: 30000,
      idle: 10000,
      evict: 10000
    }
  },
  dbConfig: {
    connection: {
      user: process.env.USERDB,
      password: process.env.ROOT_PASSWORD,
      database: process.env.DATABASE
    },
    configOptions: {
      host: process.env.HOST,
      port: process.env.DB_PORT,
      dialect: process.env.DIALECT,
      logging: true
    }
  }
}