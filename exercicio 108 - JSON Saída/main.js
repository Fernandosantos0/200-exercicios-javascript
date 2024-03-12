'use strict'

function formatarJson(obj) {
    return JSON.stringify(obj, null, 4);
}

const pessoa = { nome: "Fernando", sobrenome: "Santos", casado: false, idade: 24 };
console.log(formatarJson(pessoa));