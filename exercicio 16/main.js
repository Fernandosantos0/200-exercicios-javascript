'use strict';

function maiorNumero(n1, n2, n3) {

    if(n1 > n2 && n1 > n3) {
        console.log('O maior número é ' + n1);
    } else if(n2 > n1 && n2 > n3) {
        console.log('O maior número é ' + n2);
    } else {
        console.log('O maior número é ' + n3);
    }

}

maiorNumero(10, 1, 5);
maiorNumero(9, 18, 5);
maiorNumero(5, 1, 0);
maiorNumero(10, 11, 18);
maiorNumero(1, 1, 1);