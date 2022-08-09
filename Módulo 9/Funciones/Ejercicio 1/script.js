var boton = document.getElementsByTagName('button');

for (let i = 0; i < boton.length; i++) {

    boton[i].onclick = function () { mostrarColor(this.innerHTML) }

}

function mostrarColor(color) {
    document.getElementById('caja').innerHTML = 'El color es ' + color;
    document.getElementById('caja').style.background = color;
    alert("El color es " + color);
}
