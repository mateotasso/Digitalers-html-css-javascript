var rol = prompt("¿Cuál es su rol?").toLowerCase();

if (rol == "admin" || rol == "recursos") {

    var clave = prompt("¿Cuál es su clave?");

    if (clave == "1234") {

        var usuario = prompt("¿Cuál es su nombre de usuario?");

        document.getElementById('mensaje').innerHTML = "<h1>Hola " + usuario + ", bienvendo a nuestra aplicación.</h1>";
    } else {
        alert('Clave incorrecta')
        document.location.href = "error.html"

    }
} else {
    alert('Rol incorrecto');
    document.location.href = "error.html"

}

var empleados = [
    { nombre: "Juan", apellido: "Zarate", edad: 45 },
    { nombre: "Maria", apellido: "Callas", edad: 35 },
    { nombre: "Pedrito", apellido: "Garcia", edad: 25 }
]

var contenido = '<tr><th>Nombre</th><th>Apellido</th><th>Edad</th></tr>';

for (let i = 0; i < empleados.length; i++) {
    contenido += '<tr><td>' + empleados[i].nombre + '</td><td>'
        + empleados[i].apellido + '</td><td>'
        + empleados[i].edad + '</td><tr>';
    
}

document.getElementById('table').innerHTML = contenido;
