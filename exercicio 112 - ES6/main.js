'use strict'

function comparNumeros(valor1, valor2) {
    let comparacao = valor1 === valor2 ? 'igual' : (valor1 > valor2 ? 'maior' : 'menor');

    console.log(`O Valor1 é ${comparacao} que o Valor2`);
}

comparNumeros(14, 8);
comparNumeros(14, 18);
comparNumeros(14, 14);