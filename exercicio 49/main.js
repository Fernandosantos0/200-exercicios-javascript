'use strict';

function maiorNumero() {
    const maior = Math.max(...arguments);
    return maior;
}

console.log(maiorNumero(15, 7, 8, 0));
console.log(maiorNumero(0, 7, -8, 0));
console.log(maiorNumero(-15, -7, -8, 0));