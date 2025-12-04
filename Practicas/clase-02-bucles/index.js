// indice; orden; posicion

let productos = ['coca', 'pepsi', 'seven'] /* array */
let precios = [150, 140, 130]
let empleado = ['juan', 25, 'Cordoba']


//acceso a los elementos del array
/* console.log(productos[0]) //coca
console.log(precios[2]) //130
console.log(empleado[1]) //25 */

for (let i = 0; i < productos.length; i++) {
    console.log('Productos: ' + productos[i]);
}

//Captura de datos del html

let titulo = document.getElementById('titulo');

//Modificar el contenido del h1

/* titulo.innerText = 'Listado de productos';

//Estilo al titulo

titulo.style.color = 'blue'; */

//Capturando datos del form con el input
//1. Crear una variable para cada input
let nombreProducto;
let precioProducto;

//3.Capturar el formulario
function capturaDatos(){
    //2.Capturar los elementos del input
    nombreProducto = document.getElementById('nombreProducto').value;
    precioProducto = document.getElementById('precioProducto').value;

    //validacion de datos
    if(nombreProducto == '' || precioProducto == ''){
        alert('Por favor complete los datos');
        return;
    }
}

