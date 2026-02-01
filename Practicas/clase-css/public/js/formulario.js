let isLoggedIn = localStorage.getItem("isLoggedIn");

if (isLoggedIn !== "true") {
  alert("Acceso no autorizado. Redirigiendo al inicio de sesión.");

  window.location.href = "../index.html";
}

let userAdmin = document.getElementById("userAdmin");
let adminName = localStorage.getItem("Administrador");

userAdmin.innerText = `Bienvenido ${adminName}`;

let cerrarSesionBtn = document.getElementById("cerrarSesionBtn");

cerrarSesionBtn.addEventListener("click", () => {
  localStorage.clear();

  localStorage.setItem("isLoggedIn", "false");

  window.location.href = "../index.html";
});

let productos = [];
let formProductos = document.getElementById("formProductos");

formProductos.addEventListener("submit", (e) => {
  e.preventDefault();

  let nombre = document.getElementById("nombre").value;
  let precio = document.getElementById("precio").value;
  let stock = document.getElementById("stock").value;

  let producto = {
    nombre,
    precio: parseFloat(precio),
    stock: parseInt(stock),
  };

  console.log("Producto agregado:", producto);

  productos.push(producto);

  console.log("Lista de productos:", productos);

  localStorage.setItem("Productos", JSON.stringify(productos)); // JSON.stringify para convertir el array a cadena

  console.log(productos);

  enviarAjax(producto);

  formProductos.reset();
});

function enviarAjax(producto) {
  let xhr = new XMLHttpRequest();

  let url = "http://localhost:3000/reciboproductos";

  xhr.open("POST", url, true);

  xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");

  xhr.onread = function () {
    if (xhr.status === 201 && xhr.status === 200) {
      console.log("Producto enviado al servidor:", producto);
      console.log("Respuesta del servidor:", xhr.responseText);
    }
    else {console.error("Error al enviar el producto al servidor", xhr.statusText);
    } 
  };

  let data = JSON.stringify(producto);

  xhr.send(data);
}
