const { Router } = require("express");

const router = Router();

//Ruta para mostrar el formulario de registro
router.get("/register", (req, res) => {
    res.render("register", { layout: "auth" });
});

//Ruta para manejar el registro de usuarios
router.post("/register", (req, res) => {
    /* const { name, email, password } = req.body; */
    //1. Recibir los datos del formulario
    const name = req.body.name;
    const email = req.body.email;
    const password = req.body.password;
    const confirmPassword = req.body.confirmPassword;

    //2. Validar los datos (ejemplo: verificar que las contraseñas coincidan)
    if (password !== confirmPassword) {
        return res.status(400).send("Las contraseñas no coinciden");
    }

    const usuario = {
        name,
        email,
        password,
        confirmPassword
    };

    res.json({
        message: "Registro de usuario recibido",
        usuario
    });
});

router.post("/add", (req, res) => {
    //1. Recibir los datos del formulario
    const id = req.body.id;
    const name = req.body.name;
    const email = req.body.email;
    const password = req.body.password;

    const usuario = {
        id,
        name,
        email,
        password
    };

    res.json({
        message: "Registro de usuario recibido",
        usuario
    });
});


module.exports = router;
