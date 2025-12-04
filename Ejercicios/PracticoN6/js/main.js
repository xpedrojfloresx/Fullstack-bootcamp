let titulo = document.getElementById('titulo');
titulo.style.color = "blue";

console.log(titulo.textContent);

let primerNombreUno = document.getElementById('primerNombreUno');
let segundoNombreUno = document.getElementById('segundoNombreUno');
let primerApellidoUno = document.getElementById('primerApellidoUno');
let segundoApellidoUno = document.getElementById('segundoApellidoUno');

let primerNombreDos = document.getElementById('primerNombreDos');
let segundoNombreDos = document.getElementById('segundoNombreDos');
let primerApellidoDos = document.getElementById('primerApellidoDos');
let segundoApellidoDos = document.getElementById('segundoApellidoDos');

let espacioSegNombreUno = " ";
let espacioSegApellidoUno = " ";
let espacioSegNombreDos = " ";
let espacioSegApellidoDos = " ";

if (segundoNombreUno.textContent == "") {
    espacioSegNombreUno = "";
}

if (segundoNombreDos.textContent == "") {
    espacioSegNombreDos = "";
}

if (segundoApellidoUno.textContent == "") {
    espacioSegApellidoUno = "";
}

if (segundoApellidoDos.textContent == "") {
    espacioSegApellidoDos = "";
}


console.log(
    "-----" + 
    "\nIntegrante 1: " + '"' + primerNombreUno.textContent + " " + segundoNombreUno.textContent + espacioSegNombreUno + primerApellidoUno.textContent.toUpperCase() + espacioSegApellidoUno + segundoApellidoUno.textContent.toUpperCase() + '"' + 
    "\nIntegrante 2: " + '"' + primerNombreDos.textContent + " " + segundoNombreDos.textContent + espacioSegNombreDos+ primerApellidoDos.textContent.toUpperCase() + espacioSegApellidoDos + segundoApellidoDos.textContent.toUpperCase() + '"' +
    "\n-----" 
);

if (primerNombreUno.textContent == primerNombreDos.textContent) {
    console.log("Los primeros nombres son iguales");
    var color = prompt("Asignar un color distintivo para la igualdad de nombres");

    primerNombreUno.style.color = color; 
    primerNombreDos.style.color = color;   
}
else{
    console.log("No hay coincidencias en los primeros nombres");
}

if (segundoNombreUno.textContent == segundoNombreDos.textContent) {
    console.log("Los segundos nombres son iguales");
    var color = prompt("Asignar un color distintivo para la igualdad de nombres");

    segundoNombreUno.style.color = color; 
    segundoNombreDos.style.color = color;
}
else{
    console.log("No hay coincidencias en los segundos nombres");
}


