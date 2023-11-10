'use strict';

let result = null;
let computador = null;
let usuario = 'pedra';
const elementos = ['pedra', 'papel', 'tesoura'];

do {
    let index = Math.floor(Math.random() * 3);
    computador = elementos[index];

    console.log('====================================');

    if((computador === 'pedra' && usuario === 'tesoura') || (computador === 'tesoura' && usuario === 'papel') || (computador === 'papel' && usuario === 'pedra')) {
        result = 'Computador';
        console.log(`Computador: ${computador}`);
        console.log(`Usuário: ${usuario}`);
        console.log(`Vencedo: ${result}`);
    } else if((usuario === 'pedra' && computador === 'tesoura') || (usuario === 'tesoura' && computador === 'papel') || (usuario === 'papel' && computador === 'pedra')) {
        result = 'Usuário';
        console.log(`Computador: ${computador}`);
        console.log(`Usuário: ${usuario}`);
        console.log(`Vencedo: ${result}`);
    } else if(computador === usuario){
        result = 'Empate';
        console.log(`Computador: ${computador}`);
        console.log(`Usuário: ${usuario}`);
        console.log(`Vencedo: ${result}`);
    }


} while(result !== 'Empate')