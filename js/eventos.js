function calcularArea(base, altura) {
    return base + altura;
}

var zonaResultado = document.querySelector('#resultado>pre');
var botonCalcular = document.querySelector('#calcular');
// en el evento click lanzara la funcion que le hemos creado
botonCalcular.addEventListener('click',function (event) {
    var base = document.querySelector('#base').value;
    var altura = document.querySelector('#altura').value;
    
    zonaResultado.innerHTML = calcularArea(base, altura);
});

// en el evento mouseover hara esta funcion 
botonCalcular.addEventListener('mouseover',function (event) {
    event.target.className += 'sobre';
    event.target.innerHTML += 'Click';

});

// en el evento mouseout lanzara la funcion esta
botonCalcular.addEventListener('mouseout',function (event) {
    event.target.className = event.target.className.replace('sobre', ' ') ;
    event.target.innerHTML += 'Calcular';

});
