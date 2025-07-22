const express = require("express");
const bodyParser = require("body-parser");
var cors = require('cors')
const app = express();

app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json({ limit: "50mb" }));

// sincronizar la base de datos
app.use("/db", require("./_helpers/db.js"));

//roles
app.use("/roles", require("./roles/roles.routes"));

//usuarios
app.use("/usuarios", require("./usuarios/usuarios.routes"));

//bisontes
app.use("/bisontes", require("./bisontes/bisontes.routes"));

//envios
app.use("/envios", require("./envios/envios.routes"));

//detalle_items
app.use("/detalle_items", require("./detalle_items/detalle_items.routes"));

//acarreos
app.use("/acarreos", require("./acarreos/acarreos.routes"));

app.use("/cuidadores", require("./cuidadores/cuidadores.routes"));

module.exports = app;
