const express = require("express");
const router = express.Router();
const dbInitializer = require("../db/db_initializer");

// Sincronizar todos los modelos con la base de datos
router.head("/sync", async function (req, res) {
  await dbInitializer.initialize();
  res.json();
});

module.exports = router;
