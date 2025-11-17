//Ejercicio 1

var varCantidadGatos = 10;
var varGatosExistentes = 0;
var varGatoUno = 1;
var varGatoDos = 2;
var varGatoTres = 3;

while (varGatosExistentes <= varCantidadGatos){
    if(varGatosExistentes == varGatoUno){
        console.log("Gato #" + varGatoUno + ": 😺")
        varGatoUno = varGatoUno + 3;
    }
    else if(varGatosExistentes == varGatoDos){
        console.log("Gato #" + varGatoDos + ": 😸")
        varGatoDos = varGatoDos + 3;
    }
    else if(varGatosExistentes == varGatoTres){
        console.log("Gato #" + varGatoTres + ": 😹")
        varGatoTres = varGatoTres + 3;
    }
    varGatosExistentes = varGatosExistentes + 1;
}

// Ejercicio 2 y 3

var varCantidadGatos = 10;
var varGatosExistentes = 0;
var varCantidadDePasos = 2;
var pasosExistentes = "🐾";
var varGatoUno = 1;
var varGatoDos = 2;


for (i = 1; i < varCantidadDePasos; i++) {
    pasosExistentes = pasosExistentes + "🐾";
}

while (varGatosExistentes <= varCantidadDePasos){
    if(varGatosExistentes == varGatoUno){
        console.log("Gato # " + varGatosExistentes + "🐈" + pasosExistentes);
       varGatoUno = varGatoUno + 2;
    }
    else{
        console.log("Gato # " + varGatosExistentes + "🐈‍⬛" + pasosExistentes);
        varGatoDos = varGatoDos + 2;
    }
    varGatosExistentes = varGatosExistentes + 1;
}