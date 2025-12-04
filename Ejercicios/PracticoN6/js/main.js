let titulo = document.getElementById("titulo");
titulo.style.color = "blue";

const integranteUno = [
  document.getElementById("primerNombreUno"), //0
  document.getElementById("segundoNombreUno"), //1
  document.getElementById("primerApellidoUno"), //2
  document.getElementById("segundoApellidoUno"), //3
];

const integranteDos = [
  document.getElementById("primerNombreDos"), //0
  document.getElementById("segundoNombreDos"), //1
  document.getElementById("primerApellidoDos"), //2
  document.getElementById("segundoApellidoDos"), //3
];

const integrantes = [
  (PrimerNombre = "Primeros nombres"),
  (SegundoNombre = "Segundos nombres"),
  (PrimerApellido = "Primeros apellidos"),
  (SegundoApellido = "Segundos apellidos"),
];

let espacioSegNombreUno = " ";
let espacioSegApellidoUno = " ";
let espacioSegNombreDos = " ";
let espacioSegApellidoDos = " ";

function nombresIntegrantes(integranteUno, integranteDos) {
  verificarEspacios();
  integranteUno =
    "-----" +
    "\nIntegrante 1: " +
    '"' +
    integranteUno[0].innerHTML +
    " " +
    integranteUno[1].innerHTML +
    espacioSegNombreUno +
    integranteUno[2].innerHTML.toUpperCase() +
    espacioSegApellidoUno +
    integranteUno[3].innerHTML.toUpperCase() +
    '"';
  integranteDos =
    "\nIntegrante 2: " +
    '"' +
    integranteDos[0].innerHTML +
    " " +
    integranteDos[1].innerHTML +
    espacioSegNombreDos +
    integranteDos[2].innerHTML.toUpperCase() +
    espacioSegApellidoDos +
    integranteDos[3].innerHTML.toUpperCase() +
    '"' +
    "\n-----";

  return integranteUno + integranteDos;
}

function verificarEspacios() {
  if (integranteUno[1].innerHTML == "") {
    espacioSegNombreUno = "";
  }
  if (integranteUno[3].innerHTML == "") {
    espacioSegApellidoUno = "";
  }

  if (integranteDos[1].innerHTML == "") {
    espacioSegNombreDos = "";
  }
  if (integranteDos[3].innerHTML == "") {
    espacioSegApellidoDos = "";
  }
}

function compararNombres(IndiceUno, IndiceDos) {
  if (
    integranteUno[IndiceUno].innerHTML == integranteDos[IndiceUno].innerHTML ||
    integranteUno[IndiceDos].innerHTML == integranteDos[IndiceDos].innerHTML
  ) {
    var color = prompt(
      "Asignar un color distintivo para la igualdad de nombres"
    );
    integranteUno[i].style.color = color;
    integranteDos[i].style.color = color;
  }

  if (
    integranteUno[IndiceUno].innerHTML !== integranteDos[IndiceUno].innerHTML ||
    (integranteUno[IndiceDos].innerHTML !== "" &&
      integranteDos[IndiceDos].innerHTML !== "")
  ) {
    console.log(
      "No hay coincidencias entre los " +
        integrantes[2] +
        " o los campos estan vacios."
    );
  }
  if (
    integranteUno[IndiceUno].innerHTML !== integranteDos[IndiceUno].innerHTML ||
    (integranteUno[IndiceDos].innerHTML !== "" &&
      integranteDos[IndiceDos].innerHTML !== "")
  ) {
    console.log(
      "No hay coincidencias entre los " +
        integrantes[3] +
        " o los campos estan vacios."
    );
  }
}

function confirmNombres(mensajeUno, mensajeDos) {
  mensajeUno = "Desea comparar los nombres de los integrantes?";
  mensajeDos = "Desea comparar los apellidos de los integrantes?";
  if (confirm(mensajeUno)) {
    compararNombres(0, 1);
  } else {
    console.log("No se compararon los nombres de los integrantes.");
  }

  if (confirm(mensajeDos)) {
    compararNombres(2, 3);
  } else {
    console.log("No se compararon los apellidos de los integrantes.");
  }
}


console.log(
  nombresIntegrantes(integranteUno, integranteDos)
);

confirmNombres();
