var usuario = String(prompt("Nombre de usuario:"));
var clave = Number(prompt("Contraseña:"));

if(usuario == "admin" && clave == "1234") {
    alert("Bienvenido/a");
} else {
    alert("Error");
}

