let titulo = document.getElementById("titulo");
titulo.style.textAlign = "center";
titulo.style.marginTop = "20px";

let tabla = document.getElementById("tabla");
tabla.style.margin = "20px auto";
tabla.style.borderCollapse = "collapse";
tabla.style.width = "80%";
tabla.style.textAlign = "center";

let dataProductos = localStorage.getItem("Productos");

let parrafo = document.getElementById("sin-parsear");

parrafo.innerText = dataProductos;

// 15. Parseamos los datos para convertirlos en un array de objetos literales
dataProductos = JSON.parse(dataProductos);

console.log(dataProductos); // ya parseado

// 16. Capturar el parrafo paseado
let parrafoParseado = document.getElementById("parseado");

parrafoParseado.innerText = dataProductos;

let cuerpoTabla = document.getElementById("tablaProductos");
let btnCargarProductos = document.getElementById("btnCargarProductos");

btnCargarProductos.style.textAlign = "center";
btnCargarProductos.style.display = "block";
btnCargarProductos.style.margin = "20px auto";
btnCargarProductos.style.padding = "10px 20px";
btnCargarProductos.style.fontSize = "16px";
btnCargarProductos.style.cursor = "pointer";

btnCargarProductos.addEventListener("click", (e) => {
  e.preventDefault();
  cuerpoTabla.innerHTML = "";

  for (let i = 0; i < dataProductos.length; i++) {
    console.log(dataProductos[i]);

    // 19. Creamos una fila por cada producto
    let fila = document.createElement("tr");

    //20. Creamos las celdas por cada producto
    let celdaNombre = document.createElement("td");
    celdaNombre.innerText = dataProductos[i].nombre;
    celdaNombre.style.border = "1px solid #ddd";
    celdaNombre.style.padding = "8px";

    // 21. Agregamos la celda a la fila
    fila.appendChild(celdaNombre);

    // 22. Agregamos la fila al cuerpo de la tabla
    cuerpoTabla.appendChild(fila);

    let celdaPrecio = document.createElement("td");
    celdaPrecio.innerText = `$ ${dataProductos[i].precio.toFixed(2)}`;
    celdaPrecio.style.border = "1px solid #ddd";
    celdaPrecio.style.padding = "8px";

    fila.appendChild(celdaPrecio);

    cuerpoTabla.appendChild(fila);

    let celdaStock = document.createElement("td");
    celdaStock.innerText = dataProductos[i].stock;
    celdaStock.style.border = "1px solid #ddd";
    celdaStock.style.padding = "8px";

    fila.appendChild(celdaStock);

    cuerpoTabla.appendChild(fila);
  }
});
