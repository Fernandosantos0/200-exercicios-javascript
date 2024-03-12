'use strict';

// Função para retornar a mediana de uma sequência de números
function mediana(numeros) {
    if(numeros.length % 2 === 0) {
        const n1 = (numeros.length / 2) - 1;
        const n2 = numeros.length / 2;
        
        const mediana = (numeros[n1] + numeros[n2]) / 2;
        return mediana;

    } else {
        const index = Math.floor(numeros.length / 2);
        return numeros[index];
    }
} 

const numeros = [5, 2, 9, 1, 5, 6];
const numeros2 = [2, 4, 5, 6, 7, 8, 9];
const numeros3 = [1, 2, 3, 4, 5, 6, 8, 9];

console.log(mediana(numeros));
console.log(mediana(numeros2));
console.log(mediana(numeros3));