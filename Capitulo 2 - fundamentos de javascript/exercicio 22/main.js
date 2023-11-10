'use strict';

function diasMes(mes) {

    switch(mes) {
        case 2:
            console.log('tem 28 dias (29 dias nos anos bissextos)');
            break;

        case 1:
        case 3:
        case 5:
        case 7:
        case 8:
        case 10:
        case 12:
            console.log('tem 31 dias');
            break;

        default:
            console.log('tem 30 dias');
    }

}

diasMes(2);
diasMes(4);
diasMes(1);