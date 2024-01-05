'use strict';

function verificarNumeroPrimo(num) {
    for(let i = 2; i < num; i++) {
        if(num % i === 0) {
            return false;
        }
    }   
    
    return num > 1;
}

console.log(verificarNumeroPrimo(7));
console.log(verificarNumeroPrimo(8));
console.log(verificarNumeroPrimo(11));