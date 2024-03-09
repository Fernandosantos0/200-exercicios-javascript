'use strict';

function aplicarCallbacksNTimes(n, callback, valorInicial) {
    let valor = valorInicial;

    for(let i = 0; i < n; i++) {
        callback.forEach(callback => {
            valor = callback(valor);
        });
    }

    return valor;
}

const callback = [num => num * 2, num => num + 1];

console.log(aplicarCallbacksNTimes(2, callback, 1));