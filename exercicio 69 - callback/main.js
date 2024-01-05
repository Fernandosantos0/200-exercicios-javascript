'use strict';

function repetirValores(num, callback) {
    callback(num);
}

/* Função de callback */
function callbackLoop(n) {
    
    let cont = 0;
    while(cont < n) {
        console.log('Hello world!');
        cont++;
    }

}

repetirValores(5, callbackLoop);