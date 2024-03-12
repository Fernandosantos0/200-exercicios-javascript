'use strict'

function sumUniqueValues(arr) {
    const soma = arr
                    .filter(num => arr.indexOf(num) === arr.lastIndexOf(num))
                    .reduce((acc, curr) => acc += curr, 0);

    return soma;
}

const numeros = new Array(5, 5, 2, 8, 6, 1, 2, 4);
console.log(sumUniqueValues(numeros));