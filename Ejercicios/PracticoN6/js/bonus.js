const datosIntUno = [];
const datosIntDos = [];
const inputsUno = [];
const inputsDos = [];
const integrantes = [
  'Primeros Nombres',
  'Segundos Nombres',
  'Primeros Apellidos',
  'Segundos Apellidos',
];

let integranteUno;
let integranteDos;
let espacioSegNombreUno = " ";
let espacioSegApellidoUno = " ";
let espacioSegNombreDos = " ";
let espacioSegApellidoDos = " ";

function capturaDatos() {
    //Primer Integrante 
    inputsUno[0] = document.getElementById("primerNombreUno");
    inputsUno[1] = document.getElementById("segundoNombreUno");
    inputsUno[2] = document.getElementById("primerApellidoUno");
    inputsUno[3] = document.getElementById("segundoApellidoUno");

    datosIntUno[0] = inputsUno[0].value;
    datosIntUno[1] = inputsUno[1].value;
    datosIntUno[2] = inputsUno[2].value;
    datosIntUno[3] = inputsUno[3].value;

    //Segundo Integrante 
    inputsDos[0] = document.getElementById("primerNombreDos");
    inputsDos[1] = document.getElementById("segundoNombreDos");
    inputsDos[2] = document.getElementById("primerApellidoDos");
    inputsDos[3] = document.getElementById("segundoApellidoDos");   

    datosIntDos[0] = inputsDos[0].value;
    datosIntDos[1] = inputsDos[1].value;
    datosIntDos[2] = inputsDos[2].value;
    datosIntDos[3] = inputsDos[3].value;    

    verificarEspacios();

    integranteUno =
        "-----" +
        "\nIntegrante 1: " +
        '"' +
        datosIntUno[0] + " " +
        datosIntUno[1] + espacioSegNombreUno +
        datosIntUno[2] + espacioSegApellidoUno +
        datosIntUno[3] +
        '"';
    integranteDos =
        "\nIntegrante 2: " +
        '"' +
        datosIntDos[0] + " " +
        datosIntDos[1] + espacioSegNombreDos +
        datosIntDos[2] + espacioSegApellidoDos +
        datosIntDos[3] +
        '"' +
        "\n-----";   
}

function verificarEspacios() {
  if (datosIntUno[1] === "") {
    espacioSegNombreUno = "";
  } else {
    espacioSegNombreUno = " ";
  }

  if (datosIntUno[3] === "") {
    espacioSegApellidoUno = "";
  } else {
    espacioSegApellidoUno = " ";
  }

  if (datosIntDos[1] === "") {
    espacioSegNombreDos = "";
  } else {
    espacioSegNombreDos = " ";
  }

  if (datosIntDos[3] === "") {
    espacioSegApellidoDos = "";
  } else {
    espacioSegApellidoDos = " ";
  }
}

function compararNombres(IndiceUno, IndiceDos) {
  if (
    datosIntUno[IndiceUno] === datosIntDos[IndiceUno]) {
    var color = prompt(
      "Asignar un color distintivo para la igualdad de nombres"
    );
    inputsUno[IndiceUno].style.color = color;
    inputsDos[IndiceUno].style.color = color;
  }

  if(datosIntUno[IndiceDos] == datosIntDos[IndiceDos]){
    var color = prompt(
      "Asignar un color distintivo para la igualdad de nombres"
    );
    inputsUno[IndiceDos].style.color = color;
    inputsDos[IndiceDos].style.color = color;
  }

  if(datosIntUno[IndiceUno] != datosIntDos[IndiceUno]){
    console.log("No hay coincidencias entre los " + integrantes[IndiceUno])
  }

  if(datosIntUno[IndiceDos] != datosIntDos[IndiceDos]){
    console.log("No hay coincidencias entre los " + integrantes[IndiceDos])
  }
}






