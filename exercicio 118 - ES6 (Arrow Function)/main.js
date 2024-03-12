'use strict'

const somaArray = numeros => numeros.reduce((soma, numero) => soma += numero, 0);

const numbers = [1, 2, 3, 4, 5, 6, 7]
console.log(somaArray(numbers));