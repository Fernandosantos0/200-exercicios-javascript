'use strict';

function mapearArray(arrays, callback) {
    return arrays.map(callback);
}

/* Função de Callback */
const callback = numeros => numeros.reduce((soma, num) => soma += num, 0);

const array = new Array([1, 2, 3], [4, 5, 6], [7, 8, 9]);

/* Mostrar resultado */
console.log(mapearArray(array, callback));