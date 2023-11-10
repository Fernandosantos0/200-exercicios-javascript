'use strict';

function verificarNumero(numero) {
    numero = Number(numero);

    /* Estrutura de controle de decisão */
    if(numero > 0) {
        console.log('Número Positivo');
    } else if(numero < 0) {
        console.log('Numero Negativo');
    } else {
        console.log('Zero');
    }

}

const num = 45;
verificarNumero(num);
verificarNumero(15);
verificarNumero(-8);
verificarNumero(0);
verificarNumero(8);
verificarNumero('-8');
verificarNumero('8');
verificarNumero('0');