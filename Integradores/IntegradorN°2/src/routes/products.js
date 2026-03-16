const { Router } = require("express");
const router = Router();

const {
  getProducto,
  getProductoById,
  postProducto,
  putProductoById,
  deleteProductoById
} = require("../controllers/productosControllers");


router.get("/productos", getProducto);
router.get("/productos/:id", getProductoById);
router.post("/productos", postProducto);
router.put("/productos/:id", putProductoById);
router.delete("/productos/:id", deleteProductoById);


module.exports = router;