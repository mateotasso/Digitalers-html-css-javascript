var planes = [
    { nombre: "Plan 001", capital: 150000, plazo: 30, tasa: 0.15},
    { nombre: "Plan 002", capital: 300000, plazo: 180, tasa: .1},
    { nombre: "Plan 003", capital: 485000, plazo: 60, tasa: 0.23}
]

var planesConInteres = [];

for (let i = 0; i < planes.length; i++) {
    var actual = planes[i];
    var intereses = (actual.capital * actual.plazo * actual.tasa) / 100;
    planesConInteres.push( {
        nombre: actual.nombre,
        capital: actual.capital,
        plazo: actual.plazo,
        tasa: actual.tasa,
        interes: intereses
    });
    
}
console.log(planesConInteres);