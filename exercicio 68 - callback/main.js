'use strict';

function filtrarNumerosPar(numeros, callback) {
    return numeros.filter(callback);
}

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 10, 11, 12, 13];

/* Função de callback para verificar se o número é divisível por 2 */
const callback = num => num % 2 === 0;

/* Mostrar o resultado */
console.log(filtrarNumerosPar(numeros, callback));