'use strict'

function alterarEConverter(obj) {
    const alterarValor = (key, valor) => {
        if(key === 'idade') return valor + 1;
        return valor;
    }

    return JSON.stringify(obj, alterarValor);
}

const pessoa = { nome: 'Fernando', idade: 24 };
console.log(alterarEConverter(pessoa));