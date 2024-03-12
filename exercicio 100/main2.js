'use strict'

function somaDosArrays(numerosArray) {
    let soma = 0;

    for(let numero of numerosArray) {
        if(typeof(numero) !== 'number') return 'Você inserir um valor inválido.';
        soma += numero;
    }

    return soma;
}

const numeros = new Array(5, 5, 2, 8, 6);
console.log(somaDosArrays(numeros));