'use strict';

function aplicarCallbackInverso(callback, valor) {
    return callback.reverse().map(callback => callback(valor));
}

/* Funções dentro de array */
const callback = [
    num => num * 2, 
    num => num + 5, 
    num => num - 12, 
    num => num + 13, 
    num => num / 2
];

const valor = 4;

console.log(aplicarCallbackInverso(callback, valor));