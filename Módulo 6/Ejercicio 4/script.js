//cv = costos fijos / (precio de venta - costos variables)

var costosFijos = Number (prompt("Ingrese los costos fijos"));

var precioDeVenta = Number (prompt("Ingrese el precio de venta"));

var costosVariables = Number (prompt("Ingrese los costos variables"));

var puntoEquilibrio = costosFijos / (precioDeVenta - costosVariables);

alert("El Punto de equilibrio es " + puntoEquilibrio);