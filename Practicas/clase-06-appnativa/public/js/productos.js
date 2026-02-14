const formularioProductos = document.getElementById("formularioProductos");

function menu() {
  window.location.href = "../index.html";
}

const nombreProducto = document.getElementById("nombreProducto");
const precioProducto = document.getElementById("precioProducto");
const marcaProducto = document.getElementById("marcaProducto");
const categoriaProducto = document.getElementById("categoriaProducto");
const descripcionCortaProducto = document.getElementById(
  "descripCortaProducto",
);
const descripcionLargaProducto = document.getElementById(
  "descripLargaProducto",
);
const edadDesdeProducto = document.getElementById("edadDesdeProducto");
const edadHastaProducto = document.getElementById("edadHastaProducto");
const imagenProducto = document.getElementById("imagenProducto");

formularioProductos.addEventListener("submit", (event) => {
  event.preventDefault();

  const stockProducto = document.querySelector('input[name="stock"]:checked');
  const envioProducto = document.querySelector('input[name="envio"]:checked');

  const producto = {
    nombre: nombreProducto.value.trim(),
    precio: Number(precioProducto.value),
    stock: stockProducto.value,
    envio: envioProducto.value,
    marca: marcaProducto.value.trim(),
    categoria: categoriaProducto.value.trim(),
    descripcionCorta: descripcionCortaProducto.value.trim(),
    descripcionLarga: descripcionLargaProducto.value.trim(),
    edadDesde: Number(edadDesdeProducto.value),
    edadHasta: Number(edadHastaProducto.value),
  };

  enviarDatosServidor(producto);

  formularioProductos.reset();
});

const enviarDatosServidor = (data) => {
  let url = "https://appnativa-gamekeys-production.up.railway.app/productos";
  
  fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log("Respuesta del servidor:", data);
      alert(data.message);
    })
    .catch((error) => {
      console.error("Error al enviar datos al servidor:", error);
    });
};
