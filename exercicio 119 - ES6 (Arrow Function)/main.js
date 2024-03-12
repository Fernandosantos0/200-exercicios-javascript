'use strict'

const message = ({ nome, idade }) => `Meu nome é ${nome} e tenho ${idade} anos de idade.`;

const pessoa = { nome: 'Fernando', idade: 23 };
const pessoa2 = { nome: 'Maria', sobrenome: 'Santos', idade: 13 };
const pessoa3 = { nome: 'Eduardo', sobrenome: 'Oliveira', idade: 23, casado: true };

console.log(message(pessoa));
console.log(message(pessoa2));
console.log(message(pessoa3));