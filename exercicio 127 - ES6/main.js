'use strict'

function mesclarObjetos(obj1, obj2) {
    return {...obj1, ...obj2};
}

const objeto1 = { nome: 'Fernando', sobrenome: 'Santos' };
const objeto2 = { cidade: 'Nova Iguaçu', idade: 24 };

console.log(mesclarObjetos(objeto1, objeto2));