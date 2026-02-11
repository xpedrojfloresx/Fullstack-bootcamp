function menu() {
  window.location.href = "../index.html";
}

const popup = document.querySelector("#popup-producto");
const popupTitulo = document.querySelector("#popup-titulo");
const popupPrecio = document.querySelector("#popup-precio");
const popupImg = document.querySelector("#popup-img");
const popupDescrip = document.querySelector("#popup-description");
const btnCerrar = document.getElementById("btn-cerrar-popup");

const botonesVer = document.querySelectorAll(".btn-more-information");

botonesVer.forEach((boton) => {
  boton.addEventListener("click", () => {
    const card = boton.closest(".div_gamesCards");

    const nombre = card.getAttribute("data-name");
    const precio = card.getAttribute("data-price");
    const imagen = card.getAttribute("data-img");
    const descripcion = card.getAttribute("data-descrip");

    popupTitulo.textContent = nombre;
    popupPrecio.textContent = precio;
    popupImg.src = imagen;
    popupDescrip.textContent = descripcion;

    popup.showModal();
  });
});

btnCerrar.addEventListener("click", () => {
  popup.close();
});
