const datosIntUno = [];
function capturaDatosIntUno() {
    datosIntUno[0] = document.getElementById("primerNombreUno").value;
    datosIntUno[1] = document.getElementById("segundoNombreUno").value;
    datosIntUno[2] = document.getElementById("primerApellidoUno").value;
    datosIntUno[3] = document.getElementById("segundoApellidoUno").value;
}

function mostrarDatosIntUno(integranteUno) {
    integranteUno =
        "-----" +
        "\nIntegrante 1: " +
        '"' +
        datosIntUno[0] + " " +
        datosIntUno[1] + " " +
        datosIntUno[2] + " " +
        datosIntUno[3] +
        '"';
        
    return integranteUno;

    
}

