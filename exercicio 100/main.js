'use strict';

function somaDosArrays(arr) {
    let soma = 0;

    for(let n = 0; n < arr.length; n++) {
        if(typeof(arr[n]) !== 'number') return 'Você inserir um valor inválido.';

        soma += arr[n];
    }

    return soma;
}

const numeros = new Array(5, 5, 2, 8, 6);
console.log(somaDosArrays(numeros));