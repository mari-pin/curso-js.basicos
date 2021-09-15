const d = 10;
const e = 2;
const f = 10;

let cadena10 = '10';
let nombre1 = "Marcos";
let nombre2 = "Pedro";



console.log('igualdad: ' + (d==e));//false
console.log('distinto: ' + (d!=e));//true
console.log('igualdad absoluta: ' + (d===f));//true
console.log('igualdad absoluta: ' + (d===cadena10));//false


console.log('mayor que: ' + (d > e));//true
console.log('menor que: ' + (d < f));//false
console.log('mayor o igual: ' + (d >= f));//true
console.log('Y en cadenas: ' + (nombre1 > nombre2));//false