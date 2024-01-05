'use strict';

function arrayPrimos(n) {
    const primos = [];

    for(let num = 2; num <= n; num++) {
        let isPrimo = true;
    
        for(let div = 2; div < num; div++) {
            if(num % div === 0) {
                isPrimo = false;
                break;
            }
        }
    
        if(isPrimo) {
            primos.push(num);
        }
    }

    return primos;
}

const primos = arrayPrimos(58);
console.log(primos);