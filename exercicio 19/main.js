'use strict';

function verificarIntervalo(numero, inferior, superior) {

    if(numero >= inferior && numero <= superior) {
        console.log('O número ' + numero + ' está dentro do intervalo');
    } else {
        console.log('O número ' + numero + ' não está dentro do intervalo');
    }

}

verificarIntervalo(5, 1, 10);
verificarIntervalo(1, 1, 24);
verificarIntervalo(23, 0, 23);
verificarIntervalo(5, 6, 23);
verificarIntervalo(-23, 0, 23);
verificarIntervalo(23, -50, 23);
verificarIntervalo(-3, -50, 23);
