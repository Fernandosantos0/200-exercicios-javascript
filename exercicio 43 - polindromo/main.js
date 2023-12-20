'use strict';

/* Função para determinar se o número é um políndromo */
const isPolindromo = function(numeros) {
    numeros = numeros.toString();// Convertendo de number para string

    let novoNumero = '';
    let incremento = 0;
    let index = numeros.length - 1;

    while(incremento < numeros.length) {
        novoNumero += numeros[index];
        index--;
        incremento++;
    }

    novoNumero = Number(novoNumero); // Convertendo de string para number
    numeros = Number(numeros); // Convertendo de string para number

    if(numeros === novoNumero) {
        console.log(`O número ${numeros} é um políndromo.`);
    } else {
        console.log(`O número ${numeros} não é um políndromo.`);
    }
};

isPolindromo(1001);
isPolindromo(48981);
isPolindromo(4508);
isPolindromo(202);
