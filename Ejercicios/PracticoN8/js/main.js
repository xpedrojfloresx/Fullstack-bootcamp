document.addEventListener("DOMContentLoaded", () => {
  console.log("Contenido del DOM cargado");

  const txtOrigen = document.getElementById("origen");
  const divDestino = document.getElementById("destino");

  const botones = document.querySelectorAll('input[type="button"], button');

  const contenidoHTML =
    "<p>Este contenido <strong>está listo</strong><br>para ser editado y pasarlo abajo.</p>";

  if (txtOrigen) {
    txtOrigen.value = contenidoHTML;
  } else {
    console.error("No se encontró el textarea");
  }

  if (txtOrigen) {
    txtOrigen.addEventListener("input", () => {
      const inputs = document.getElementsByTagName("input");
      console.log(inputs);
      for (let i = 0; i < inputs.length; i++) {
        inputs[i].disabled = false;
        console.log("Input habilitado");
      }

      for (let i = 0; i < botones.length; i++) {
        botones[i].disabled = false;
        botones[i].style.border = "2px solid red";
      }
    });
  }

  if (botones[0]) {
    botones[0].addEventListener("click", () => {
      console.log("Botón Reemplazar clickeado");
      divDestino.innerHTML = txtOrigen.value;
    });
  }

  if (botones[1]) {
    botones[1].addEventListener("click", () => {
      console.log("Botón Agregar clickeado");
      divDestino.innerHTML += txtOrigen.value;
    });
  }

  if (botones[2]) {
    botones[2].addEventListener("click", () => {
      for (let i = 0; i < 5; i++) {
        divDestino.innerHTML += txtOrigen.value;
      }
    });
  }

  if (botones[3]) {
    botones[3].addEventListener("click", () => {
      for (let i = 0; i < 10; i++) {
        divDestino.innerHTML += txtOrigen.value;
      }
    });
  }

  if (botones[4]) {
    botones[4].addEventListener("click", () => {
      const cantidad = prompt("¿Cuántas veces desea agregar el contenido?");
      for (let i = 0; i < cantidad; i++) {
        divDestino.innerHTML += txtOrigen.value;
      }
    });
  }

  if (botones[5]) {
    botones[5].addEventListener("click", () => {
      divDestino.innerHTML = "";
    });
  }

  if (botones[6]) {
    botones[6].addEventListener("click", () => {
      divDestino.innerHTML = divDestino.innerHTML.toUpperCase();
    });
  }

  if (botones[7]) {
    botones[7].addEventListener("click", () => {
      divDestino.innerHTML = divDestino.innerHTML.toLowerCase();
    });
  }

  const listas = document.getElementsByTagName("li");
  for (let i = 0; i < listas.length; i++) {
    listas[i].innerText = "[Ok] " + listas[i].innerText;
  }
});
