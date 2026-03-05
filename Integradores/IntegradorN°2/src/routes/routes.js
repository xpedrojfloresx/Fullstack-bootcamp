const { Router } = require("express");

const usuarioCollection = require("../models/modelsUsers");

const router = Router();

router.get("/about", (req, res) => {
    res.render("about");
});

router.get("/users", (req, res) => {
    async function getUsers() {
        try {
            const usuarios = await usuarioCollection.find();
            res.render("users", {
                layout: "main",
                users: usuarios,
                success: req.query.success,
                error: req.query.error,
            });
        } catch (error) {
            res.render("users", {
                layout: "main",
                error: "Error al cargar usuarios",
            });
        }
    }

    getUsers();
});

router.get("/products", (req, res) => {
    res.render("products");
});

module.exports = router;
