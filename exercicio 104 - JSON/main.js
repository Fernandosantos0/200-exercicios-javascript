'use strict';

function jsonParaObjeto(json) {
    return JSON.parse(json);
}

const pessoa = '{ "nome": "Fernando", "idade": 23 }';

console.log(jsonParaObjeto(pessoa));