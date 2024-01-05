'use strict';

function somarNumerosImpares(numeros) {
    let soma = 0;

    numeros.forEach(numero => {
        if(numero % 2 !== 0) {
            soma += numero;
        }
    });

    return soma;
}

const numeros = [1, 2, 3, 4, 5, 8, 9, 10, 12, 11, 7, 13];
console.log(somarNumerosImpares(numeros));