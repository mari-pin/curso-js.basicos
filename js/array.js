let numeros = [1, 2, 5, 8, 9, 7];
let frutas = ['naranja', 'platatno','pera','manzana'];
let listado = new Array();
let elemento;
let versionTexto;
let versionArray;
let separador = '------------';

console.log('numeros: ' + numeros);
console.log('frutas: ' + frutas);
console.log(separador);

console.log('primer numero: ' + numeros[0]);
console.log('tercera fruta: ' + frutas[3]);
console.log('cantidadmde frutas: ' + frutas.length);
console.log('ubicacion de la manzana: ' + frutas.indexOf('manzana'));
console.log(separador);
//insertar elementos por el final
numeros.push(4);
console.log('tras insertar: ' + numeros);
console.log(separador);
// el metodo unshift lo hace por el inicio
numeros.unshift(12);
console.log('tras insertar: ' + numeros);
console.log(separador);

elemento = 'granada';
frutas.push(elemento);
console.log('tras insertar: ' + frutas);
console.log(separador);

//eliminar elementos por el final
elemento = numeros.pop();
console.log('tras eliminar: ' + numeros);
console.log('numero sacado: ' + elemento);
console.log(separador);
//eliminar por el inicio
elemento = numeros.shift();
console.log('tras eliminar: ' + numeros);
console.log('numero sacado: ' + elemento);
console.log(separador);
//eliminar fruta
elemento = frutas.pop();
console.log('tras eliminar: ' + frutas);
console.log('fruta eliminada: ' + elemento);
console.log(separador);
//cambiar valor a un elemento
numeros[1] = 3;
console.log('segundo numero cambiado por el 3: ' + numeros);
console.log(separador);
//Ordenar
numeros.sort();

frutas.sort();
frutas.reverse();

console.log('numeros ordenados: ' + numeros);
console.log('ffrutas ordenado inverso: ' + frutas);
console.log(separador);

//otros metodos
listado = frutas.slice(0,2);
console.log('corte de frutas: ' + listado);
console.log(separador);

listado = numeros.concat(frutas);
console.log('concadenacion de numeros y fruta: ' + listado);
console.log(separador);

versionTexto = listado.join('*');
console.log('version en texto: ' + versionTexto);




