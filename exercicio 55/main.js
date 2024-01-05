'use strict';

function menorNumero(numeros) {
    return Math.min(...numeros);
}

const numeros = [45, 30, 78, 101, 17, 78, 45, 41, 49, 87];
console.log(menorNumero(numeros));