'use strict';

function findByStringLength(arrays, n) {
    return arrays.filter(string => string.length > 4);
}

const strings = ['Canadá', 'Espanha', 'Chile', 'Equador', 'Uruguai', 'Peru', 'Cuba', 'Guine', 'França', 'Egito'];

console.log(findByStringLength(strings, 6));