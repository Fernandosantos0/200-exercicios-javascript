'use strict'

/* Função para fazer a subdivisão de uma array */
function criarSubArray(array, n) {
    const subArray = new Array();
    let arrayAuxiliar = new Array();

    for(let i = 0; i < array.length; i+=n) {
        for(let y = i; y < (i + n); y++) {
            if(array[y] === undefined) continue;

            arrayAuxiliar.push(array[y])
        }

        subArray.push(arrayAuxiliar);
        arrayAuxiliar = [];        
    }

    return subArray;
}

const numeros = new Array(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
console.log(criarSubArray(numeros, 4));