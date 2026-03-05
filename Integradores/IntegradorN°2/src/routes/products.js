const { Router } = require("express");

const router = Router();

//Ruta para mostrar el formulario de registro
router.get("/", (req, res) => {
    res.render("products", { layout: "main" });
});

//Ruta para manejar el registro de productos
router.post("/", (req, res) => {

    const ahora = new Date();

    //1. Recibir los datos del formulario
    const id = req.body.id;
    const name = req.body.name;
    const category = req.body.category;
    const price = req.body.price;
    const fechaRegistro = ahora.toLocaleDateString('es-AR', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
    });

    const producto = {
        fechaRegistro,
        id,
        name,
        category,
        price
    };

    res.json({
        message: "Registro de producto recibido",
        producto
    });
});

module.exports = router;
