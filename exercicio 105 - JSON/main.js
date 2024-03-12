'use strict';

function accesarNome(json) {
    const pessoa = JSON.parse(json);
    return pessoa.nome;
}

const pessoa = '{ "nome": "Fernando", "idade": 23 }';
console.log(accesarNome(pessoa));