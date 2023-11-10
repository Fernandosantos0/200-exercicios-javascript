'use strict';

for(let num = 2; num <= 100; num++) {
    let isPrimo = true;

    for(let div = 2; div < num; div++) {
        if(num % div === 0) {
            isPrimo = false;
            break;
        }
    }

    if(isPrimo) {
        console.log(num);
    }
}