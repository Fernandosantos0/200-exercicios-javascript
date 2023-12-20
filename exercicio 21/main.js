'use strict';

function verificarEstacaoDoAno(mes) {

    if(mes < 3) {
        console.log('Verão');
    } else if(mes >= 3 && mes <= 6) {
        console.log('Outono');
    } else if(mes >= 7 && mes <= 9) {
        console.log('Inverno');
    } else if(mes >= 10 && mes <= 12) {
        console.log('Primavera');
    }

}

verificarEstacaoDoAno(12);
verificarEstacaoDoAno(5);
verificarEstacaoDoAno(2);
verificarEstacaoDoAno(12);
verificarEstacaoDoAno(1);