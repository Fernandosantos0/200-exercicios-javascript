'use strict'

function adicionarArray(json, novoArray) {
    const array = JSON.parse(json);

    array.push(novoArray);

    return array;
}

const arrayJson = '[{"nome": "Fernando", "idade": 24}, {"nome": "Carlos", "idade": 44}]';
const objeto = { nome: "Maria", idade: 20 };

console.log(adicionarArray(arrayJson, objeto));