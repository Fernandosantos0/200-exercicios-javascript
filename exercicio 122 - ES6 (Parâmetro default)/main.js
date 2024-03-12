'use strict'

const informaçoes = (nome, idade, cidade = 'Desconhecido') => {
    return `Nome: ${nome}, Idade: ${idade}, Cidade: ${cidade}`;
};

console.log(informaçoes('Fernando', 23, 'Nova Iguaçu'));
console.log(informaçoes('Maria', 33));