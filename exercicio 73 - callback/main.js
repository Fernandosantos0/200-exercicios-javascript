'use strict';

function aplicarCallbacksComIntervalo(n, callback, valorInicial) {
    let valor = valorInicial;
    let i = 0;
    let intervalId = setInterval(() => {

        if(i < callback.length) {
            valor = callback[i](valor);
            i++;
        } else {
            clearInterval(intervalId);
            console.log(valor);
        }

    }, n);
}

const callbacks = [num => num * 2, num => num + 1];
const valorInicial = 5;

aplicarCallbacksComIntervalo(2000, callbacks, valorInicial);