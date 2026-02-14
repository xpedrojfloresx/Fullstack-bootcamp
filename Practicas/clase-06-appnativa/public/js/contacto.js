const formulario = document.getElementById("contactForm");

const nombre = document.getElementById("name");
const email = document.getElementById("email");
const celular = document.getElementById("cellphone");
const mensaje = document.getElementById("message");

function menu() {
  window.location.href = "../index.html";
}

formulario.addEventListener("submit", (event) => {
  event.preventDefault();

  const datos = {
    nombre: nombre.value,
    email: email.value,
    celular: celular.value,
    mensaje: mensaje.value,
  };

  enviarDatosServidor(datos);

  formulario.reset();
});

const enviarDatosServidor = (data) => {
  let url = "https://appnativa-gamekeys-production.up.railway.app/contacto";

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
