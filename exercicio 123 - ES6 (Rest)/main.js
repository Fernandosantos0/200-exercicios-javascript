'use strict'

function somar(...numeros) {
    return numeros.reduce((ac, num) => ac += num, 0);
}

console.log(somar(1, 2, 3, 4, 5, 6)); // 21
console.log(somar(1, 2, 3, 4, 5, 7)); // 28
console.log(somar(1, 2, 3, 4, 3, 8)); // 21