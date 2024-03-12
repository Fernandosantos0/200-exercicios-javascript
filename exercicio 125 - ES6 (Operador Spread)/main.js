'use strict'

function combinarArray(arr1, arr2) {
    return [...arr1, ...arr2];
}

const vlr1 = ['A', 'B', 'C'];
const vlr2 = ['D', 'E', 'F'];

const combinacaoArray = combinarArray(vlr1, vlr2);

console.log(combinacaoArray);