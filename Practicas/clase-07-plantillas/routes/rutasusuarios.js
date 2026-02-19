const { Router } = require("express");

const router = Router();

const fs = require("fs");

router.get("/usuarios", (req, res) => {
  res.send("La lista de usuarios es: Juan, Pedro, María");
});

router.post("/usuarios", (req, res) => {
  const user = req.body;

  fs.writeFileSync(`usuario_${user.nombre}.txt`, user.nombre);
  res.send(`El usuario ${user.nombre} ha sido creado con éxito!`);
});

module.exports = router;