//Operaciones con cadenas utilizamos las propiedades y los metodos

/*propiedad--> es una caracteristica de la cadena */

/*metodos--> es una funcionalidad de la cadena */

/*datos con los que vamos a trabajar*/
let inicio = "en un lugar de la mancha...";
let fin = "de cuyo nombre no me acuerdo...";
let completa = inicio + fin;



console.log('principio original: '+ inicio);
console.log('mayusculas: '+ inicio.toLocaleUpperCase());/*metodos (nombre de la variable) + .toLocalUpperCase, .toLowerCase .CharAt .indexOf .subString*/
console.log('minusculas: '+ inicio.toLowerCase());
console.log('longitud de la inicio: '+ inicio.length);/*propiedades (nombre de la variable) + .length*/
console.log('letra posicion 3: '+ inicio.charAt(3));
console.log('posicion palabra "lugar": '+ inicio.indexOf('lugar'));
console.log('extraccion "En":'+ inicio.substring(0,2));
console.log('completa: '+ completa);