'use strict';

function mapearSemAlterar(array, callback) {
    return array.map(callback);
}

const numeros = [1, 2, 3, 4, 5, 6];
const multiplicador = num => num * 2;

console.log(mapearSemAlterar(numeros, multiplicador));

mapearSemAlterar(numeros, multiplicador).forEach(num => console.log('Número', num));