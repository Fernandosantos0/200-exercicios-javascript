'use strict';

function ordenarDescrecente(numeros) {
    const newArray = numeros.sort((a, b) => {
        return a > b ? 1 : -1;
    });

    return newArray;
}

const novoArray = ordenarDescrecente([5, 85, 4, 0, 1, 5, 9, 46, 101, 4, 14, 100]);
console.log(novoArray);

const numeros = [9, 1, 6, 5, 0, 4, 7, 10, 3, 8, 2];
console.log(ordenarDescrecente(numeros));