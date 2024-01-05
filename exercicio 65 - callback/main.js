'use strict';

/* Função de Callback */
function callbackSoma(soma, numero) {
    return soma += numero;
}

function somarArray(numeros) {
    return numeros.sort((a, b) => a > b ? 1 : -1).reduce(callbackSoma, 0);
}

const numeros = [5, 3, 0, 3, 9, 7];
console.log(somarArray(numeros));