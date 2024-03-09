'use strict';

function combineAndFilter(pares, impares) {
    return pares.concat(impares).filter(num => num % 5 === 0);
}

const pares = [0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20];
const impares = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19];

console.log(combineAndFilter(pares, impares));