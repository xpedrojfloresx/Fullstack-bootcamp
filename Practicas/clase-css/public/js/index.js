console.log("Bienvenido a la aplicación web!");

let loginForm = document.getElementById("loginForm");

const loginUser = (event) => {
    event.preventDefault();

    console.log("Formulario de inicio de sesión enviado");

    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    let adminUser = "admin@example.com";
    let adminPass = "admin123";
    let adminName = "Pedro Flores"

    if (email === adminUser && password === adminPass) {
        console.log("Inicio de sesión exitoso");
        
        localStorage.setItem("Administrador", adminName);

        alert("Inicio de sesión exitoso");

        window.location.href = "./pages/formulario.html";
    }
    else {
        console.log("Credenciales incorrectas");
        alert("Credenciales incorrectas");
    }
}

loginForm.addEventListener("submit", loginUser);