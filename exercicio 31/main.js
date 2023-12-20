'use strict';

// Variáveis
const usuario = 50;
let computador = Math.floor(Math.random() * 101);

// Loop
while(computador !== usuario) {
    console.log('O número ' + computador + ' não foi o número pensado pelo usuário!');

    computador = Math.floor(Math.random() * 101);
}

console.log('Parabéns, foi o número ' + usuario + '.');