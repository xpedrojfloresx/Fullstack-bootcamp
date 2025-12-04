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

function compararNombres() {
    for (let i = 0; i < integranteUno.length; i++){
        if ((integranteUno[0].innerHTML == integranteDos[0].innerHTML) || (integranteUno[1].innerHTML == integranteDos[1].innerHTML)) {
          console.log("Los nombres en la posición " + i + " son iguales");
          var color = prompt(
            "Asignar un color distintivo para la igualdad de nombres"
          );
          integranteUno[i].style.color = color;
          integranteDos[i].style.color = color;
        }
        if ((integranteUno[0].innerHTML != integranteDos[0].innerHTML) || (integranteUno[1].innerHTML != integranteDos[1].innerHTML)) {
          console.log("No hay coincidencias entre los " + integrantes[i]);
        } 
    }
}

function compararApellidos() {
    for (let i = 0; i < integranteUno.length; i++){
        if ((integranteUno[2].innerHTML == integranteDos[2].innerHTML) || (integranteUno[3].innerHTML == integranteDos[3].innerHTML)) {
          console.log("Los apellidos en la posición " + i + " son iguales");
          var color = prompt(
            "Asignar un color distintivo para la igualdad de apellidos"
          );
          integranteUno[i].style.color = color;
          integranteDos[i].style.color = color;
        }else  {
          console.log("No hay coincidencias entre los " + integrantes[i]);
        } 
    }    
}

verificarEspacios();

console.log(
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
    '"' +
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
    "\n-----"
);

/* compararApellidos(); */
compararNombres();
