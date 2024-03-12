'use strict';

function objetoParaJson(obj) {
    return JSON.stringify(obj);
}

const pessoa = {
    nome:'Fernando',
    idade: 23
};

console.log(objetoParaJson(pessoa));