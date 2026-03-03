const { Router } = require("express");

const router = Router();

//Ruta para mostrar el formulario de registro
router.get("/", (req, res) => {
    res.render("products", { layout: "main" });
});

//Ruta para manejar el registro de productos
router.post("/", (req, res) => {
    //1. Recibir los datos del formulario
    const id = req.body.id;
    const name = req.body.name;
    const category = req.body.category;
    const price = req.body.price;

    const producto = {
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
