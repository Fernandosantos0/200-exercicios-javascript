'use strict';

function verificarPolindromo(palavra) {
    palavra = palavra.toLowerCase();

    let palavraReversa = palavra.split('').reverse()
    palavraReversa = palavraReversa.join('');

    if(palavra === palavraReversa) {
        console.log('A palavra ' + palavra + ' é um políndromo.');
    } else {
        console.log('A palavra ' + palavra + ' não é um políndromo.');
    }

}

verificarPolindromo('Ovo');