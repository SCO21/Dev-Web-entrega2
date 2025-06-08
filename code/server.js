const express = require("express");
const app = express();

// sincronizar la base de datos
app.use("/db", require("./_helpers/db.js"));

// Importar las rutas

module.exports = app;
