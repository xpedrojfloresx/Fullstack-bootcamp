const { Router } = require("express");

const router = Router();

router.get("/about", (req, res) => {
    res.render("about");
});

router.get("/users", (req, res) => {
    res.render("users");
});

router.get("/products", (req, res) => {
    res.render("products");
});

module.exports = router;