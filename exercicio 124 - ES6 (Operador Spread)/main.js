'use strict'

// Operador Spread 
function copiaProfunda(obj) {
    return {...obj};
}

const original = { nome: 'Paulo', sobrenome: 'Oliveira', idade: 24 };
const copia = copiaProfunda(original);

console.log(copia.nome);
console.log(copia['idade']);