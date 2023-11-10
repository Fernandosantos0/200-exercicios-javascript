'use strict';

let textoOriginal = 'O Brasil é um país latino-americano de língua portuguesa!';
let textoInvertido = '';

let int = textoOriginal.length - 1;
while(int >= 0) {
    textoInvertido += textoOriginal.charAt(int);
    int--;
}

console.log(textoInvertido);