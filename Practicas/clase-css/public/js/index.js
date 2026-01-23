console.log("Bienvenido a la aplicación web!");

let loginForm = document.getElementById("loginForm");

const loginUser = (event) => {
    event.preventDefault();

    console.log("Formulario de inicio de sesión enviado");

    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    let loginStatus = "";

    let adminUser = "admin@example.com";
    let adminPass = "admin123";
    let adminName = "Pedro Flores";

    if (email === adminUser && password === adminPass) {
        console.log("Inicio de sesión exitoso");

        loginStatus = "true";
        
        localStorage.setItem("Administrador", adminName);
        localStorage.setItem("Email", adminUser);
        localStorage.setItem("isLoggedIn", loginStatus);
        alert("Inicio de sesión exitoso");

        window.location.href = "./pages/formulario.html";
    }
    else {

        loginStatus = "false";
    
        localStorage.setItem("isLoggedIn", loginStatus);

        console.log("Credenciales incorrectas");
        alert("Credenciales incorrectas");
    }
}

loginForm.addEventListener("submit", loginUser);