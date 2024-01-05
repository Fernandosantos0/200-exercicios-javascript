'use strict';

function filtrarPorCallback(array, callback) {
    return array.filter(callback);
}

const numeros = [4, 8, 12, 0, 11, 9, 7, 85, 23];
const callback = num => num % 2 === 0;

console.log(filtrarPorCallback(numeros, callback));