let persona1 ={
    nombre:'pedro',
    apellido:'picapiedra',
    edad:'48',
    casado:'true'
};
let espacio = ('-----------');

let persona2 = new Object();
persona2.nombre = 'ana';
persona2.apellido = 'ruiz';
persona2.edad = '8';
persona2.casado = 'false';

console.log('persona1');
console.log('persona2');

console.log('nombre persona1');
console.log('edad persona2');

console.log(espacio);

//añadir propiedades o modoficarlas

persona1.profesion = "programador";
persona2.edad = 23;
console.log(persona2);
console.log(persona1);

console.log(espacio);

//conversion de un archivo json a javascript con el metodo json.parse y añadiendo comillas dobles a todos los datos.
let persona3 = JSON.parse(' {"nombre":"pedro","apellido":"picapiedra","edad":"48","casado":"true"}')
;



