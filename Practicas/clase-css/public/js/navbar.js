const divPrincipal = document.getElementById("principal");

let navBar = document.createElement("nav");

navBar.style.backgroundColor = "#15163D";
navBar.style.width = "100%";
navBar.style.height = "60px";
navBar.style.display = "flex";
navBar.style.alignItems = "center";


divPrincipal.appendChild(navBar);

let listNavegacion = document.createElement("ul");

let listHome = document.createElement("li");
listHome.innerText = "Home";
listHome.style.marginLeft = "20px";
listHome.style.display = "inline";
listHome.style.color = "white";
listHome.style.cursor = "pointer";

listHome.addEventListener("click", function() {
    window.location.href = "../index.html";
});

let listProductos = document.createElement("li");
listProductos.innerText = "Productos";
listProductos.style.marginLeft = "20px";
listProductos.style.display = "inline";
listProductos.style.color = "white";
listProductos.style.cursor = "pointer";

listProductos.addEventListener("click", function() {
    window.location.href = "../pages/productos.html";
});

let listFormulario = document.createElement("li");
listFormulario.innerText = "Formulario";
listFormulario.style.marginLeft = "20px";
listFormulario.style.display = "inline";
listFormulario.style.color = "white";
listFormulario.style.cursor = "pointer";

listFormulario.addEventListener("click", function() {
    window.location.href = "../pages/formulario.html";
});

navBar.appendChild(listNavegacion);
listNavegacion.appendChild(listHome);
listNavegacion.appendChild(listProductos);
listNavegacion.appendChild(listFormulario);