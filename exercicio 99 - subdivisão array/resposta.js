'use strict'

function chuckArray(arr, n) {
    const chuck = new Array();

    for(let i = 0; i < arr.length; i+=n) {
        chuck.push(arr.slice(i, i + n));
    }

    return chuck;
}

const numeros = new Array(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
console.log(chuckArray(numeros, 2));