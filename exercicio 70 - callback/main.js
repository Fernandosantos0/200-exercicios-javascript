'use strict';

function aplicarCallbacks(callback, valor) {
    return callback.map(callback => callback(valor));
}

/* Array com varias arroy function */
const callback = [num => num * 2, num => num % 2, num => num + num, num => num / num];
const valor = 5;

console.log(aplicarCallbacks(callback, valor));