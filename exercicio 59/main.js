'use strict';

function duplicarNumero(numeros) {
    const num = numeros.map(numero => numero * 2);
    return num;
}

console.log(duplicarNumero([12, 2, 7, 8, 14, 8]));