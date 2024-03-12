'use strict'

function copiaProfunda(obj) {
    return Object.assign({}, obj);
}

const original = { nome: 'Paulo', sobrenome: 'Oliveira', idade: 24 };
const copia = copiaProfunda(original);

console.log(copia.nome);
console.log(copia['idade']);