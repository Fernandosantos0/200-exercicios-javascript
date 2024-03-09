'use strict';

function calcularPrecoImposto(precos) {
    /* Percorrendo o array para calcular o preço com a adição de 10% de imposto */
    const somarComImposto = precos.map(preco => preco + (preco * 10) / 100);

    /* Percorrendo o array para somando tudo */
    const total = somarComImposto.reduce((soma, preco) => soma += preco, 0);

    /* Retornando o cálculo */
    return 'R$ ' + total.toFixed(2).replace('.', ',');
}

const precos = [10, 20, 30, 40];

console.log(calcularPrecoImposto(precos));