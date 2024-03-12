'use strict'

function somaDosArrays(arr) {
    let soma = 0;

    for(let index in arr) {
        if(typeof(arr[index]) !== 'number') return 'Você inserir um valor inválido.';
        soma += arr[index];
    }

    return soma;
}

const numeros = new Array(5, 5, 2, 8, 6, 1, 4);
console.log(somaDosArrays(numeros));