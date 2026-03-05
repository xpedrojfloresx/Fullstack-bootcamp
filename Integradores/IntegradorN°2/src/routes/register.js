const { Router } = require("express");

const router = Router();

const usuarioCollection = require("../models/modelsUsers");

//Ruta para mostrar el formulario de registro
router.get("/register", (req, res) => {
    res.render("register", { layout: "auth", success: req.query.success, error: req.query.error });
});

//Ruta para mostrar el formulario de registro
router.get("/register", (req, res) => {
    res.render("register", { layout: "auth", success: req.query.success, error: req.query.error });
});

//Ruta para manejar el registro de usuarios
router.post("/register", (req, res) => {

    const ahora = new Date();

    //1. Recibir los datos del formulario
    const nombre = req.body.name;
    const email = req.body.email;
    const password = req.body.password;
    const confirmPassword = req.body.confirmPassword;
    const fechaRegistro = ahora.toLocaleDateString('es-AR', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
    });

    //2. Validar los datos (ejemplo: verificar que las contraseñas coincidan)
    if (password !== confirmPassword) {
        return res.render("register", { layout: "auth", error: "Las contraseñas no coinciden" });
    }

    const usuario = {
        fechaRegistro,
        nombre,
        email,
        password
    };

    async function saveUser() {
        try {
            const newUser = new usuarioCollection(usuario);
            await newUser.save();
            console.log("Usuario registrado:", newUser);
            return res.redirect('/register?success=Usuario registrado exitosamente');
        } catch (error) {
            if (error.code === 11000) {
                return res.redirect('/register?error=El email ya está registrado');
            } else {
                return res.redirect('/register?error=Error al registrar usuario');
            }
        }
    }

    saveUser();
});

router.post('/add', (req, res) => {

    console.log("1️⃣ Entró al /add");
    console.log("📩 Body:", req.body);

    const ahora = new Date();

    //1. Recibir los datos del formulario
    const nombre = req.body.name;
    const email = req.body.email;
    const password = req.body.password;
    const fechaRegistro = ahora.toLocaleDateString('es-AR', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
    });

    const usuario = {
        fechaRegistro,
        nombre,
        email,
        password
    };

    async function saveUser() {
        try {
            console.log("✅ Usuario guardado");
            const newUser = new usuarioCollection(usuario);
            await newUser.save();
            console.log("Usuario registrado:", newUser);
            return res.redirect('/users?success=Usuario registrado exitosamente');
        } catch (error) {
            console.log("❌ Error:", error.code, error.message);
            if (error.code === 11000) {
                return res.redirect('/users?error=El email ya está registrado');

            } else {
                return res.redirect('/users?error=Error al registrar usuario');
            }
        }
    }

    saveUser();
});


module.exports = router;
