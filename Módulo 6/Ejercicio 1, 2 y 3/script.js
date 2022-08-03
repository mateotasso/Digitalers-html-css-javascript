//Ejercicio 1
var edad = prompt("Ingresa su edad");

var nombre = prompt("Ingresa su nombre");

var apellido = prompt("Ingresa su apellido");

alert("El nombre de usuario es " + nombre + " " + apellido + " y su edad es " + edad);

//Ejercicio 2
document.write("<p> El nombre de usuario es " + nombre + " " + apellido + " y su edad es " + edad + "</p>");

//Ejercicio 3

var sueldo = prompt("¿Cual es tu sueldo?");
var bonus = prompt("¿Cuanto fue tu bonus de este mes?");
var resultado = parseFloat(sueldo) + parseFloat(bonus);
document.write("<br>El resultado final de tu sueldo es " + resultado);

