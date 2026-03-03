const { Router } = require("express");

const router = Router();

// GET → Mostrar formulario de login
router.get("/login", (req, res) => {
  res.render("login", { layout: "auth" }); // login.hbs
});

// POST → Procesar login
router.post("/login", (req, res) => {
  const { email, password } = req.body;

  // 🔥 Acá iría validación real contra base de datos
  if (email === "admin@test.com" && password === "1234") {
    // Guardamos usuario en sesión
    req.session.user = {
      email: email,
    };

    req.session.save(() => {
      res.redirect("/");
    });
  }

  // Si falla
  res.render("login", { layout: "auth", error: "Credenciales incorrectas" });
});

// Logout
router.get("/logout", (req, res) => {
  req.session.destroy(() => {
    res.redirect("/login");
  });
});

module.exports = router;
