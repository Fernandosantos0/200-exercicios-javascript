'use strict'

/* Função Closure */
const concatenacaoDeString = (str1) => (str2) => str1.concat(' ').concat(str2);

const concatenacao = concatenacaoDeString('Fernando');

console.log(concatenacao('Santos'));