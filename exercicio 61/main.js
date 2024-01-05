'use strict';

function raizQuadrada(numeros) {
    return numeros.map(numero => Math.sqrt(numero));
}

console.log(raizQuadrada([25, 4, 1, 9, 16]));