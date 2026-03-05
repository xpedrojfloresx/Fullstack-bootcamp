const { Router } = require("express");
const router = Router();

const Producto = require("../models/modelsProducts");

// GET /api/productos
router.get("/productos", async (req, res) => {
  try {
    const productos = await Producto.find().sort({ productId: 1 }).lean();

    return res.render("products", {
      layout: "main",
      productos,
      success: req.query.success,
      error: req.query.error
    });
  } catch (error) {
    console.log("❌ Error cargando productos:", error);
    return res.render("products", {
      layout: "main",
      productos: [],
      error: "No se pudieron cargar los productos"
    });
  }
});

// POST /api/productos   (porque el router está montado en app.use('/api', products))
router.post("/productos", async (req, res) => {
  console.log("1️⃣ Entró al POST /api/productos");
  console.log("📩 Body:", req.body);

  try {
    const newProduct = new Producto({
      // 👇 estos nombres coinciden con tu HBS y tu schema
      nombre: req.body.nombre,
      categoria: req.body.categoria,
      precio: req.body.precio
    });

    await newProduct.save();

    console.log("✅ Producto guardado:", newProduct.productId, newProduct.nombre);

    // 👇 OJO: tu GET está en /api/productos, no en /productos
    return res.redirect("/api/productos?success=" + encodeURIComponent("Producto registrado exitosamente"));
  } catch (error) {
    console.log("❌ Error:", error.code, error.message);

    if (error.code === 11000) {
      return res.redirect("/api/productos?error=" + encodeURIComponent("Producto duplicado (campo único)"));
    }

    return res.redirect("/api/productos?error=" + encodeURIComponent("Error al registrar producto"));
  }
});

module.exports = router;