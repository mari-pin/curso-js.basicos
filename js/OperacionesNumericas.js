/* datos para las Operaciones */
let a = 4.6;
let b= 2;
let base = 2;
let exponente = 3;

let resultado = Math.pow(base,exponente);

/*operaciones */
console.log('a+b');
console.log(a+b);/*suma */
console.log('a-b');
console.log(a-b);/*resta */
console.log('a/b');
console.log(a/b);/*division */
console.log('a%b');
console.log(a%b);/*multiplo de  */

a++;/*sumale 1 a cada vuelta */
console.log('a');
console.log(a);

a--;/*restale 1 a cada vuelta */
console.log('a');
console.log(a);

/*todas las operaciones matematicas estan dentro del operador math */
console.log('floor');
console.log(Math.floor(a));

console.log('round');/*redondeame */
console.log(Math.round(a));

console.log(Math.pow(resultado));/*exponente */
console.log('pow');
console.log(resultado);

console.log('min','max');
console.log(Math.min(a,b),Math.max(a,b));/*minimo y maximo */
console.log('random');
console.log(Math.random(a,b));/*numero aleatorio */