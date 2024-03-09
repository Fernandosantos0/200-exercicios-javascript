'use strict';

function executar(callback, milissegundo) {
    callback(milissegundo);
}

const interval = function(ms) {
    setTimeout(() => {
        console.log('Olá mundo da programação!');
    }, ms);
};

executar(interval, 2000);