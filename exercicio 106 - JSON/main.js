'use strict'

function inserirObj(json) {
    const pessoa = JSON.parse(json);

    pessoa.sobrenome = 'Santos',
    pessoa['nacionalidade'] = 'brasileiro';

    return pessoa;
}

const pessoa = '{ "nome": "Fernando", "idade": 23 }';
console.log(inserirObj(pessoa));