'use strict';

function ordenarTamanho(arr) {
    return arr.sort((a, b) => {
        return b.length - a.length;
    });
}

const palavras = ['apple', 'banana', 'cherry', 'date', 'elderberry'];

console.log(ordenarTamanho(palavras));