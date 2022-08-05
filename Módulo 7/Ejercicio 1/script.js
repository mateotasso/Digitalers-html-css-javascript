var fecha = new Date();
var dia = fecha.getDay();

switch (dia) {
    case 0:
        mensaje = "Domingo de práctica con javascript";
        break;
    
    case 1:
        mensaje = "Lunes de HTML y CSS";
        break;
    case 2:
        mensaje = "Martes de PHP";
        break;
    case 3:
        mensaje = "Miércoles de planificación";
        break;
    
    case 4:
    case 5:
        mensaje = "Hoy toca programación con C#"
        break;
    case 6:
        mensaje = "Descanso al fin"
}

alert(mensaje);