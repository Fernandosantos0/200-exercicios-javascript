'use strict';

function palavraMaisLonga(frase) {
    const palavrasArray = frase.split(' ');
    let result = '';

    for(let palavra of palavrasArray) {
        
        if(palavra.length > result.length) {
            result = palavra;
        }

    }

    return result;
}

const text = 'Olá, tudo bem?';
console.log(palavraMaisLonga(text));