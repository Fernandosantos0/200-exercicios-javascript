'use strict'

function filtarEConverter(obj) {
    return JSON.stringify(obj, ['nome', 'idade']);
}

const pessoa = { nome: "Fernando", sobrenome: "Santos", casado: false, idade: 24 };
console.log(filtarEConverter(pessoa));