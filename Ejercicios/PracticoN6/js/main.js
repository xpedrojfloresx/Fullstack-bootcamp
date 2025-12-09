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
  'Primeros Nombres',
  'Segundos Nombres',
  'Primeros Apellidos',
  'Segundos Apellidos',
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
  }else{
    espacioSegNombreUno = " ";
  }
  if (integranteUno[3].innerHTML == "") {
    espacioSegApellidoUno = "";
  }else{
    espacioSegApellidoUno = " ";
  }

  if (integranteDos[1].innerHTML == "") {
    espacioSegNombreDos = "";
  }else{
    espacioSegNombreDos = " ";
  }
  if (integranteDos[3].innerHTML == "") {
    espacioSegApellidoDos = "";
  }else{
    espacioSegApellidoDos = " ";
  }
}

function compararNombres(IndiceUno, IndiceDos) {
  if (
    integranteUno[IndiceUno].innerHTML == integranteDos[IndiceUno].innerHTML) {
    var color = prompt(
      "Asignar un color distintivo para la igualdad de nombres"
    );
    integranteUno[IndiceUno].style.color = color;
    integranteDos[IndiceUno].style.color = color;
  }

  if(integranteUno[IndiceDos].innerHTML == integranteDos[IndiceDos].innerHTML){
    var color = prompt(
      "Asignar un color distintivo para la igualdad de nombres"
    );
    integranteUno[IndiceDos].style.color = color;
    integranteDos[IndiceDos].style.color = color;
  }

  if(integranteUno[IndiceUno].innerHTML != integranteDos[IndiceUno].innerHTML){
    console.log("No hay coincidencias entre los " + integrantes[IndiceUno])
  }

  if(integranteUno[IndiceDos].innerHTML != integranteDos[IndiceDos].innerHTML){
    console.log("No hay coincidencias entre los " + integrantes[IndiceDos])
  }
}

function confirmNombres() {
  if (confirm("Desea comparar los nombres de los integrantes?")) {
    compararNombres(0, 1);
  } else {
    console.log("No se compararon los nombres de los integrantes.");
  }

  if (confirm("Desea comparar los apellidos de los integrantes?")) {
    compararNombres(2, 3);
  } else {
    console.log("No se compararon los apellidos de los integrantes.");
  }
}


console.log(
  nombresIntegrantes(integranteUno, integranteDos)
);

confirmNombres();
